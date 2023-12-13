import * as S from './style'

export const Roadmap = () => {


 
  return (
    <S.Container id='map'>
      <S.Titles>
        <S.LeftTitle>
          ROAD
        </S.LeftTitle>
        <S.RightTitle>
          MAP
        </S.RightTitle>
      </S.Titles>
   
     <S.Cont>
      <S.Left >
        <S.Mint>
          <S.MintTitle >1. Подготовка</S.MintTitle>
          <S.List >
            <S.MintItem>Изучение региональных законов и документации</S.MintItem>
            <S.MintItem>Определение функциональных и нефункциональных требований</S.MintItem>
                        <S.MintItem>Разработка технической спецификации и плана проекта</S.MintItem>

            <S.MintItem>Набор команды разработчиков и дизайнеров</S.MintItem>

            <S.MintItem>Создание прототипа интерфейса бота</S.MintItem>
            <S.MintItem>Выбор и настройка серверов и баз данных</S.MintItem>
            <S.MintItem>Покупка необходимого оборудования и ПО</S.MintItem>
            <S.MintItem>Консультации с юристами по вопросам защиты данных</S.MintItem>
            <S.MintItem>Оформление лицензий и патентов на программное обеспечение</S.MintItem>

          </S.List>
        </S.Mint>
       
        <S.Mint>
          <S.MintTitle >3. Масштабирование</S.MintTitle>
          <S.List >
            <S.MintItem>Улучшение производительности и масштабируемости системы</S.MintItem>
            <S.MintItem>Аренда дополнительных серверных мощностей</S.MintItem>
            <S.MintItem>Добавление новых модулей и функций в ответ на отзывы пользователей</S.MintItem>
            <S.MintItem>Интеграция с дополнительными внешними сервисами</S.MintItem>
            
            <S.MintItem>Разработка маркетинговой стратегии и рекламной кампании</S.MintItem>
                        <S.MintItem>Проверка соответствия работы бота законодательству</S.MintItem>

            <S.MintItem>Стандартизация процессов работы с данными</S.MintItem>

          </S.List>
        </S.Mint>
         <S.Mint>
          <S.MintTitle >5. Полный запуск</S.MintTitle>
          <S.List >
            <S.MintItem> Запуск бота для широкой публики с полным функционалом</S.MintItem>
            <S.MintItem> Настройка систем мониторинга для отслеживания производительности бота. </S.MintItem>
            <S.MintItem> Регулярное обновление законодательной базы и информационного контента</S.MintItem>
            <S.MintItem> Внедрение новых алгоритмов и подходов в области ИИ </S.MintItem>
            <S.MintItem>Проведение опросов пользователей для сбора отзывов</S.MintItem>
        
          </S.List>
        </S.Mint>
      </S.Left>
      <S.Right>
         <S.Mint>
          <S.MintTitle >2. MVP</S.MintTitle>
          <S.List >
            <S.MintItem>Создание базовой функциональности и алгоритмов ИИ</S.MintItem>
            <S.MintItem>Интеграция с API для доступа к региональным базам данных.</S.MintItem>
            <S.MintItem>Проведение юнит-тестов и интеграционного тестирования</S.MintItem>
            <S.MintItem>Исправление обнаруженных ошибок и недочетов</S.MintItem>
            
            <S.MintItem>Доработка дизайна и пользовательского интерфейса</S.MintItem>
                        <S.MintItem>Проведение A/B тестирования и сбор обратной связи от пользователей.</S.MintItem>
            <S.MintItem>Создание руководств для пользователей и администраторов</S.MintItem>
            <S.MintItem>Подготовка технической документации для разработчиков</S.MintItem>
            <S.MintItem>Запуск MVP в ограниченной среде с реальными пользователями</S.MintItem>
                        <S.MintItem>Анализ работы системы и сбор отзывов</S.MintItem>


          </S.List>
        </S.Mint>
         <S.Mint>
          <S.MintTitle >4. Интеграция и оптимизация </S.MintTitle>
          <S.List >
            <S.MintItem> Разработка API для интеграции с государственными информационными системами.</S.MintItem>
            <S.MintItem> Сбор и анализ больших данных для улучшения алгоритмов ИИ</S.MintItem>
            <S.MintItem> Настройка и обучение моделей машинного обучения</S.MintItem>
            <S.MintItem>Внедрение расширенных систем безопасности и шифрования данных</S.MintItem>
            <S.MintItem> Регулярное проведение тестов на проникновение</S.MintItem>
            <S.MintItem>Разработка системы аналитики для отслеживания поведения пользователей</S.MintItem>
            <S.MintItem>Доработка пользовательского интерфейса на основе аналитики и отзывов</S.MintItem>
            
          </S.List>
        </S.Mint>
       
       
      </S.Right>
    </S.Cont>
    </S.Container>
   
  );
}
