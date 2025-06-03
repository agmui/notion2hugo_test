---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTL3N6T%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDeVZs6dqqjvt0rs27JY0D5%2FgMcdd3v2xnEXLTXVh5nwwIhANjtfZJDKL2uEPuCgdZGR1hPtXYrlFNt%2BcOt6IWT8%2FDlKv8DCCAQABoMNjM3NDIzMTgzODA1Igy6OduASCaSNz1XGeMq3AOSmixqWp%2FzsZf3ontkMwctFcxt1I6i%2FyhVr04wuX%2Bxg2Lm38XboBxkIIEvqeegwTMRcQ8COe%2BGhTKVjEsgXk6m0JTt%2BTlkrUf7B4XFrNzDA7LfNxrKfb%2FTMAxcBxxuHXreQ34JEK6cCyuIVjx8LtrjHuNyn4%2BV4sacYRpJhmacxYQ0oZu80fPlQl9WvvwsOIwSorU0vV0zgSIztu4KkBp8Dh2Dk7ErILkwVOh8ehLHbWxq8qaN%2BgLwT0spdJ8fN2d24Fi5Q1MGw5gjqZAru%2FiTR2hq1GvZbk%2FXyYV070y3dEplhX9aZ4wrhb9OkL7wXkIHgeHtMhaVoBmz7wS7RTdVRH1oqRFEQq7nsPUqWz%2Fx8ocJL20gL9s1PDKl%2FjGHg2o%2B0Li8nTbPTf9R4KigqmPM2RpY8jbK1u8RMvG2Tvg2j7OXNZVV2cDUE7ZoOfkMIm7uPXVP148z9e5QOMxAf2v5c8wgvPqhzt4j1twlkVqr2ek8nlFIoBTQMj2M3u5i0miGRJf91sudhh6bxevPlMjY3PuYHpPhdAPMgu3ZKfvFEC%2Fy4ND1sfngs7hgi8qECvJ1tbIdzcHXcAcOaOwOPEDZmbX9R7EmlzRPs3t%2Fssccs5pWTvv4p640NyYXfzDJ9%2F3BBjqkAds4GAQlV01JRJpDEkTmoKE%2BHxO7V4a2exOXROXHtaFZVE%2BSfdhHI%2BAXZrLAEm%2Ba42%2FM3Se%2BCvZGzSzRvJtUg8C%2BFrJS9iWsNpD0sHlEmKry4TrjA7UIm0gBNwAvJEsyUkJWvQx0UxX6Q%2F%2B1xCRCPSaiPaR8sAmcrkOwTKtjmzBDAuySYHL%2B7JUU5QTDkSYoHJaFrB2S2TtilPWBFvF2nXPSFM87&X-Amz-Signature=4e4f6bdd869244bcfb35def3ab2e22dbd6b6fbe2a44d2f436736bc9a08fb8e42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTL3N6T%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDeVZs6dqqjvt0rs27JY0D5%2FgMcdd3v2xnEXLTXVh5nwwIhANjtfZJDKL2uEPuCgdZGR1hPtXYrlFNt%2BcOt6IWT8%2FDlKv8DCCAQABoMNjM3NDIzMTgzODA1Igy6OduASCaSNz1XGeMq3AOSmixqWp%2FzsZf3ontkMwctFcxt1I6i%2FyhVr04wuX%2Bxg2Lm38XboBxkIIEvqeegwTMRcQ8COe%2BGhTKVjEsgXk6m0JTt%2BTlkrUf7B4XFrNzDA7LfNxrKfb%2FTMAxcBxxuHXreQ34JEK6cCyuIVjx8LtrjHuNyn4%2BV4sacYRpJhmacxYQ0oZu80fPlQl9WvvwsOIwSorU0vV0zgSIztu4KkBp8Dh2Dk7ErILkwVOh8ehLHbWxq8qaN%2BgLwT0spdJ8fN2d24Fi5Q1MGw5gjqZAru%2FiTR2hq1GvZbk%2FXyYV070y3dEplhX9aZ4wrhb9OkL7wXkIHgeHtMhaVoBmz7wS7RTdVRH1oqRFEQq7nsPUqWz%2Fx8ocJL20gL9s1PDKl%2FjGHg2o%2B0Li8nTbPTf9R4KigqmPM2RpY8jbK1u8RMvG2Tvg2j7OXNZVV2cDUE7ZoOfkMIm7uPXVP148z9e5QOMxAf2v5c8wgvPqhzt4j1twlkVqr2ek8nlFIoBTQMj2M3u5i0miGRJf91sudhh6bxevPlMjY3PuYHpPhdAPMgu3ZKfvFEC%2Fy4ND1sfngs7hgi8qECvJ1tbIdzcHXcAcOaOwOPEDZmbX9R7EmlzRPs3t%2Fssccs5pWTvv4p640NyYXfzDJ9%2F3BBjqkAds4GAQlV01JRJpDEkTmoKE%2BHxO7V4a2exOXROXHtaFZVE%2BSfdhHI%2BAXZrLAEm%2Ba42%2FM3Se%2BCvZGzSzRvJtUg8C%2BFrJS9iWsNpD0sHlEmKry4TrjA7UIm0gBNwAvJEsyUkJWvQx0UxX6Q%2F%2B1xCRCPSaiPaR8sAmcrkOwTKtjmzBDAuySYHL%2B7JUU5QTDkSYoHJaFrB2S2TtilPWBFvF2nXPSFM87&X-Amz-Signature=f3ceb35885af9f1aadd5c3ef2abae2a245150a1e0cdfd8a3cee86b77c6ccc3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTL3N6T%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDeVZs6dqqjvt0rs27JY0D5%2FgMcdd3v2xnEXLTXVh5nwwIhANjtfZJDKL2uEPuCgdZGR1hPtXYrlFNt%2BcOt6IWT8%2FDlKv8DCCAQABoMNjM3NDIzMTgzODA1Igy6OduASCaSNz1XGeMq3AOSmixqWp%2FzsZf3ontkMwctFcxt1I6i%2FyhVr04wuX%2Bxg2Lm38XboBxkIIEvqeegwTMRcQ8COe%2BGhTKVjEsgXk6m0JTt%2BTlkrUf7B4XFrNzDA7LfNxrKfb%2FTMAxcBxxuHXreQ34JEK6cCyuIVjx8LtrjHuNyn4%2BV4sacYRpJhmacxYQ0oZu80fPlQl9WvvwsOIwSorU0vV0zgSIztu4KkBp8Dh2Dk7ErILkwVOh8ehLHbWxq8qaN%2BgLwT0spdJ8fN2d24Fi5Q1MGw5gjqZAru%2FiTR2hq1GvZbk%2FXyYV070y3dEplhX9aZ4wrhb9OkL7wXkIHgeHtMhaVoBmz7wS7RTdVRH1oqRFEQq7nsPUqWz%2Fx8ocJL20gL9s1PDKl%2FjGHg2o%2B0Li8nTbPTf9R4KigqmPM2RpY8jbK1u8RMvG2Tvg2j7OXNZVV2cDUE7ZoOfkMIm7uPXVP148z9e5QOMxAf2v5c8wgvPqhzt4j1twlkVqr2ek8nlFIoBTQMj2M3u5i0miGRJf91sudhh6bxevPlMjY3PuYHpPhdAPMgu3ZKfvFEC%2Fy4ND1sfngs7hgi8qECvJ1tbIdzcHXcAcOaOwOPEDZmbX9R7EmlzRPs3t%2Fssccs5pWTvv4p640NyYXfzDJ9%2F3BBjqkAds4GAQlV01JRJpDEkTmoKE%2BHxO7V4a2exOXROXHtaFZVE%2BSfdhHI%2BAXZrLAEm%2Ba42%2FM3Se%2BCvZGzSzRvJtUg8C%2BFrJS9iWsNpD0sHlEmKry4TrjA7UIm0gBNwAvJEsyUkJWvQx0UxX6Q%2F%2B1xCRCPSaiPaR8sAmcrkOwTKtjmzBDAuySYHL%2B7JUU5QTDkSYoHJaFrB2S2TtilPWBFvF2nXPSFM87&X-Amz-Signature=b6866d30475d60506a729c3a3ece80afb53c626d4300cdd2b13d44be6b1283fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP24ZG5W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHA8N5rN%2FSQCp6%2FewAkAYQSJVgToX6wCnje%2FGNtxAWI2AiEAve2wtXhTCG%2FJHQlb2rV00qEeLIwassOaWmfl06EheEwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJaXhdL9ful5w9MaPSrcA1VZfiNjdIEaZMcpErmikaNfmSExPDPxCWZ871HONntsoO4CdWpmZUfX9eRdQ8S4Q0%2BjZskcd54fLbjyRtGDRI5I%2BxMXJVyaRRUeCwQnT%2FN2qwyDuf1i2tffVd2g%2BwVc5h8UuEwsCMkcltDa2pmxKKVLRY0Q34E%2FVfxiCn5caQe2j%2F2lRKaXnj0AlgnjRRcYdrQ39G%2Fvz4mn86PsMZCTzWelWbuPHDIEdClmGCGE4cV3W0PcPb3iTw9epqwOOrIeaWi390YYDtyearabp6XD9LffGh3EnfkSjxvArjhC2LQa6glRXy8%2F8Hu9zyIBKpqXzBem7nhmiwPSi5vIdi1wn2i%2Fz8Gtwd5BA0I5J%2BlYkl6BR%2F0PkLur910IHoiDq9Foa7Wk0CW9zZkPsmkGS2i%2FpRpEDHFzuBunmBZ2rfEohNE3US1kb3h6JFUQbfMSUGPONMBijsUHvRf0OSvMroitbnC1ak%2FCaR9em8m6XvdY4F8rXJ7DY9HWhx9%2BUWKt0%2FxFR3S1zzJyib4fcFZLW1TfYnrWeRaBf0Bqu8q18luGa9narfi5%2BDgx46uw%2FK5Rg8LwB3s9AqAVZ4EONrFOA7zvlYwd8uB3Y4OKz7zGfG71GV34kPXuUnQOzUgV6Ew6MKT3%2FcEGOqUB4GI9PpM8vZWD60QBzVkqq%2FeHvNsZu8Pk3b17AvEIwUPTRopnZsE1VqeUJjYaHn1vTeaeMSptOTg6XKJtUxAd%2FDOR65tMOVEwtvLtsH4XTgW6OxDNv7GXMRxtZIQFuigc0G1tN20FnNnfXTRkMVVO3wYWN0xLsUMztfCAOUmwCp67IDmuGlVj0kgMXiPf3biDmqpYUsO%2BAB6ajDc8tocXxO1vv7dI&X-Amz-Signature=97b28ab5e5772d22db2325a6c6b366e24748321a8bc26875fb98a43718a3f1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AS4XF5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDpLfS%2Bb2Yf53cZZUEqCNp6ifxYhDZdfUzMgjJUsZK2yAiBVzyFaJfHrQZVQiKI8c3iVqRNB6GQ2jn1R0ZbW0htwkSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMHIe8kgaoM5tvmKxhKtwD3CH%2FoNL0p4bdsB4harmls6cDHplChpAV7LBJJR51SgQnPn2dEj4krJ39TPRpUeHorSQCwBaa8O431pZ627lTRB3WUIvwUNGywqkB4HAJeoDZP0TDv60G%2BT1c108XXfn%2BQXg8dKh9Q4lIO5eBxG0iaLLPivTbDyz8RN3RmVgJtEHr2ix6gw3uzZ%2BmxTSozAp7eevJwUcme1t%2F4KOdfXYmZTt9j9RqFHkLDuhnGI3ufaTKHwSqjOD1ayKec4jX%2Bz93us8phml%2F3nzAU3VUTQ9nN7YIesj%2FeznQOAWqQ%2FTdR3gbDlVa9iVS8jHJ%2FpewjR%2BmySrwP%2FyZ7n9YJRLN3gHoL%2FZMT5MYpucwE88pTXOqZqbUrXaJHqXfMsiT5H0h3VOIE7GqiSWFdCX8TaXVXQTqKddFqJBKRoiDfC0IIU4cAwWXiFAgWAQI8NJpqrmAsBjuelpufcpi958gn21CGLb3gKRDe%2BBtXk3LyiHbuuu5YTskzfCEpa9FSPVuIdmeYjft1uPB%2BU2FPD08MuTHm%2BhKGsqZBmNdiG5%2FTW6NVLGHB5l4GRJorWwt7VrkXNiJQrr0vlsL5eZ2r%2FoKUVRmF3WRRlY9N8ZqYgZya5l1BnpLLxbt54PMtRpx2Lmo1ykwpff9wQY6pgFCbeI9mflK3tY1QAnFTnlEUUclR8aBTbhwQ%2Fo3A2Z%2F69egD4tcX7nNc2fhmooM829JyZ%2FwePTGYNL963SQdwoP7u%2FlmMVzZ2f0zYUdFssjzJaKrF7Py3RI8V2UolSFzUnKHatba2uf%2FqDuElPcdrv6HiWfDgl3KFnxUgXXhLD3B%2Fllbcgo3%2B3u3VoE5FWwRcLOWPABRk8tvBGNfpDtgfoZ2ucHEo8A&X-Amz-Signature=4dd95b5940ef55350dae4d632010ead8269ff4abdb3438021bf3a82173b8c186&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTL3N6T%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDeVZs6dqqjvt0rs27JY0D5%2FgMcdd3v2xnEXLTXVh5nwwIhANjtfZJDKL2uEPuCgdZGR1hPtXYrlFNt%2BcOt6IWT8%2FDlKv8DCCAQABoMNjM3NDIzMTgzODA1Igy6OduASCaSNz1XGeMq3AOSmixqWp%2FzsZf3ontkMwctFcxt1I6i%2FyhVr04wuX%2Bxg2Lm38XboBxkIIEvqeegwTMRcQ8COe%2BGhTKVjEsgXk6m0JTt%2BTlkrUf7B4XFrNzDA7LfNxrKfb%2FTMAxcBxxuHXreQ34JEK6cCyuIVjx8LtrjHuNyn4%2BV4sacYRpJhmacxYQ0oZu80fPlQl9WvvwsOIwSorU0vV0zgSIztu4KkBp8Dh2Dk7ErILkwVOh8ehLHbWxq8qaN%2BgLwT0spdJ8fN2d24Fi5Q1MGw5gjqZAru%2FiTR2hq1GvZbk%2FXyYV070y3dEplhX9aZ4wrhb9OkL7wXkIHgeHtMhaVoBmz7wS7RTdVRH1oqRFEQq7nsPUqWz%2Fx8ocJL20gL9s1PDKl%2FjGHg2o%2B0Li8nTbPTf9R4KigqmPM2RpY8jbK1u8RMvG2Tvg2j7OXNZVV2cDUE7ZoOfkMIm7uPXVP148z9e5QOMxAf2v5c8wgvPqhzt4j1twlkVqr2ek8nlFIoBTQMj2M3u5i0miGRJf91sudhh6bxevPlMjY3PuYHpPhdAPMgu3ZKfvFEC%2Fy4ND1sfngs7hgi8qECvJ1tbIdzcHXcAcOaOwOPEDZmbX9R7EmlzRPs3t%2Fssccs5pWTvv4p640NyYXfzDJ9%2F3BBjqkAds4GAQlV01JRJpDEkTmoKE%2BHxO7V4a2exOXROXHtaFZVE%2BSfdhHI%2BAXZrLAEm%2Ba42%2FM3Se%2BCvZGzSzRvJtUg8C%2BFrJS9iWsNpD0sHlEmKry4TrjA7UIm0gBNwAvJEsyUkJWvQx0UxX6Q%2F%2B1xCRCPSaiPaR8sAmcrkOwTKtjmzBDAuySYHL%2B7JUU5QTDkSYoHJaFrB2S2TtilPWBFvF2nXPSFM87&X-Amz-Signature=4d43ddfefca89fe443c18a0055f8b7e1d303dc9ee77d24c574796fa2887eccf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
