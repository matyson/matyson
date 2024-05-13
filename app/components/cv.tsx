"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    heading: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
  });


type ResumeProps = {
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
const Resume = ({ name, email, phone, summary, experience, education }: ResumeProps) => (
  <PDFViewer className="h-screen">
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Information</Text>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Phone: {phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <Text style={styles.text}>{summary}</Text>
      </View>
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
  </PDFViewer>
);

export default Resume;