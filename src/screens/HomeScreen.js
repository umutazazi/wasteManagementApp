import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

// Example data
const recycledMaterials = [
  { type: "Plastic", count: 24 },
  { type: "Glass", count: 12 },
  { type: "Paper", count: 18 },
  { type: "Cardboard", count: 7 },
  { type: "Metal", count: 5 },
  { type: "Trash", count: 19 },
];

const recentlyRecycledItems = [
  { name: "Plastic Bottle", co2: "5 grams CO2" },

  // ... other items
];

const RecycledMaterialCard = ({ type, count }) => (
  <View style={styles.materialCard}>
    <Text style={styles.materialCount}>{count}</Text>
    <Text style={styles.materialType}>{type}</Text>
  </View>
);

const RecentlyRecycledItem = ({ name, co2 }) => (
  <View style={styles.recycledItem}>
    <Text style={styles.itemName}>{name}</Text>
    <Text style={styles.itemCO2}>{co2}</Text>
  </View>
);

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      {/* Recycled Materials Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Recycled Materials</Text>
        <FlatList
          data={recycledMaterials}
          renderItem={({ item }) => <RecycledMaterialCard {...item} />}
          keyExtractor={(item) => item.type}
          horizontal={false}
          numColumns={2}
        />
      </View>

      {/* Recently Recycled Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Recently Recycled</Text>
        {recentlyRecycledItems.map((item, index) => (
          <RecentlyRecycledItem key={index} {...item} />
        ))}
      </View>

      {/* ... other sections */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    padding: 10,
    // Additional styles
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    // Additional styles
  },
  materialCard: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    // Additional styles
  },
  materialCount: {
    fontSize: 20,
    fontWeight: "bold",
    // Additional styles
  },
  materialType: {
    fontSize: 16,
    // Additional styles
  },
  recycledItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    // Additional styles
  },
  itemName: {
    // Styles for item name
  },
  itemCO2: {
    // Styles for CO2 text
  },
  // ... other styles
});

export default DashboardScreen;
