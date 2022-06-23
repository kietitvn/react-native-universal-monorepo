import { gql } from "@apollo/client";

export const gqlSections = gql`
  query Sections($id: Int!) {
    chapter(id: $id) {
      sections {
        number
        title
      }
    }
  }
`;
