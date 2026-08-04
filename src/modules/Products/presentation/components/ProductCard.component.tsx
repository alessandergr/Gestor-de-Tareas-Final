import { IconButton } from "@/core/components/IconButton.component";
import { useThemeContext } from "@/core/contexts/theme.context";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

interface ProductCardProps {
  title: string;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const ProductCard = ({
  title,
  description,
  onEdit,
  onDelete,
}: ProductCardProps) => {
  const { palette } = useThemeContext();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: palette.colors.surface,
          ...palette.shadows.sm,
        },
      ]}
    >
      <View style={styles.header}>
        <Text
          numberOfLines={1}
          style={[styles.title, { color: palette.texts.primary }]}
        >
          {title}
        </Text>

        <View style={styles.actions}>
          <IconButton
            icon={Feather}
            name="edit-3"
            color="primary"
            onPress={onEdit}
          />

          <IconButton
            icon={MaterialIcons}
            name="delete-outline"
            color="error"
            onPress={onDelete}
          />
        </View>
      </View>

      <Text
        numberOfLines={2}
        style={[
          styles.description,
          { color: palette.texts.secondary },
        ]}
      >
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    marginRight: 8,
    fontSize: 19,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    gap: 2,
  },
  description: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 21,
  },
});