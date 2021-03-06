import members from "../members";
import { useState } from "react";
import MemberItem from "./MemberItem";
import MemberSearchBar from "./MemberSearchBar";
// import { useSelector } from "react-redux";
const MemberList = () => {
  const [query, setQuery] = useState("");
  // const members = useSelector((state) => state.members);
  const membersList = members
    .filter(
      (member) =>
        member.firstName.toLowerCase().includes(query.toLowerCase()) ||
        member.lastName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <MemberItem member={member} key={member.id} />);

  return (
    <div>
      <MemberSearchBar setQuery={setQuery} />
      <div>{membersList}</div>
    </div>
  );
};

export default MemberList;
