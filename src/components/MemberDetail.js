import { Redirect, useParams } from "react-router-dom";

const MembersDetail = (props) => {
  const membersSlug = useParams().membersSlug;
  // console.log(membersSlug);

  const member = props.members.find((member) => member.slug === membersSlug);
  if (!member) return <Redirect to="/*" />;

  //   console.log(member);
  return (
    <div>
      <h2>
        {" "}
        {member.firstName} {member.lastName}
      </h2>
      <img src={member.img} alt={member.firstName} />
      <p>{member.currentlyBorrowedBooks} </p>
      <p>{member.membership}</p>
    </div>
  );
};

export default MembersDetail;
