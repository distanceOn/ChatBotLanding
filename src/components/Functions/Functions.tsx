import * as S from './style'

export const Functions = () => {
  const items = [
    {
      icon: "",
      title: "fjsfjkdfdsfkjsdfk",
      desc: "klfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudfsdfsdklfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudfsdfsdklfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudghfdsfjoisoajdfiuhdud",
    },
    {
      icon: "",
      title: "fjsfjkddasdlkasdk",
      desc: "klfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudfsdfsdklfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudfsdfsdklfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudghfdsfjoisoajdfiuhdud",
    },
    {
      icon: "",
      title: "fjsfjkdfdsfksdjfkdsf",
      desc: "klfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudfsdfsdklfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudfsdfsdklfjiodfjgosdisjifdghdfsidhjslkjsfdghfdsfjoisoajdfiuhdudghfdsfjoisoajdfiuhdud",
    }
  ]
  return (
    <S.Container id='functions'>
      <S.TextContainer span={12} >
          <S.Title level={2}>Функционал выдфвол</S.Title>
          <S.CustomDivider/>
          {items.map((item)=>(
            <>
            <S.Item>
              <S.ItemIcon/>
              <S.ItemText>
                <S.Subtitle>{item.title}</S.Subtitle>
                <S.Desc>{item.desc}</S.Desc>
              </S.ItemText>
            </S.Item>
            <S.CustomDivider/>
            </>
          ))}
      </S.TextContainer>
      <S.VideoContainer span={12}>
            <S.Video/>
      </S.VideoContainer>
    </S.Container>
  )
}