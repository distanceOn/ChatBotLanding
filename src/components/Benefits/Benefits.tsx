import * as S from "./style";

type Item = {
  icon: string;
  title: string;
  desc: string;
}
export const Benefits = () => {
  const items: Item[]  = [
    {
      icon: "",
      title: "dsalkdjaskldlkasd",
      desc: "dasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjk",
    },
    {
      icon: "",
      title: "dsalkdjaskldlkasd",
      desc: "dasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjk",
    },
    {
      icon: "",
      title: "dsalkdjaskldlkasd",
      desc: "dasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjkdasdsamfndsmfkkfnldngjdsfbngjhdfbgjkfsadmlkdfjgnjdsnfjk",
    }
  ]
	return (<S.Container>
    {items.map(item => {
        return (
          <S.Item>
        <S.IconContainer>
           
        </S.IconContainer>
        <S.CustomDivider/>
        <S.TextContainer>
          <S.Title level={2}>{item.title}</S.Title>
          <S.Desc>{item.desc}</S.Desc>
        </S.TextContainer>
      </S.Item>
        )
    }
    )}
  </S.Container>
    )}