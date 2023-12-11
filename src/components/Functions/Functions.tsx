import * as S from './style'

export const Functions = () => {
  const items = [
    {
      icon: "",
      title: "",
      desc: "",
    }
  ]
  return (
    <S.Container>
      <S.TextContainer>
          <S.Title level={2}></S.Title>
          <S.CustomDivider/>
          {items.map((item)=>(
            <>
            <S.Item>
              <S.ItemIcon/>
              <S.ItemText>
                <S.Subtitle>{item.title}</S.Subtitle>
                <S.Desc>{item.title}</S.Desc>
              </S.ItemText>
            </S.Item>
            <S.CustomDivider/>
            </>
          ))}
      </S.TextContainer>
      <S.VideoContainer>
            <S.Video/>
      </S.VideoContainer>
    </S.Container>
  )
}