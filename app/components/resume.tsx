"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Link,
  Document,
  StyleSheet,
  PDFViewer,
  Line,
  Svg,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: "row",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

type Social = {
  name: string;
  url: string;
};

const socials: Social[] = [
  {
    name: "matheus-bernardi",
    url: "https://linkedin.com/in/matheus-bernardi",
  },
  {
    name: "matyson",
    url: "https://github.com/matyson",
  },
  {
    name: "matyson.github.io",
    url: "https://matyson.github.io",
  },
  {
    name: "matheuslbernardi@gmail.com",
    url: "mailto:matheuslbernardi@gmail.com",
  },
];

export type ResumeProps = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    date: string;
  }[];
};

// Create Document Component
export const MyDocument = ({
  name,
  email,
  phone,
  summary,
  experience,
  education,
}: ResumeProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          padding: 10,
          gap: 10,
          alignItems: "baseline",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "semibold",
          }}
        >
          Matheus L. Bernardi
        </Text>
        {socials.map((social, index) => (
          <Link
            key={index}
            src={social.url}
            style={{
              color: "blue",
              fontSize: 10,
            }}
          >
            {social.name}
          </Link>
        ))}
      </View>

      <Svg height={1} width="585" style={{ marginBottom: 10 }}>
        <Line x1="10" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="1" />
      </Svg>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>{exp.title}</Text>
            <Text style={styles.text}>{exp.company}</Text>
            <Text style={styles.text}>{exp.date}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.text}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.institution}</Text>
            <Text style={styles.text}>{edu.date}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const Resume = (props: ResumeProps) => {
  return (
    <PDFViewer width="100%" height="100%">
      <MyDocument {...props} />
    </PDFViewer>
  );
};

export default Resume;
