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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UJE6X3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuZn1fnnzeTZ9kfCjKhogM3ynCiAZQYrYcI6jZ9ThfgAiEAkFfuZegN2OOjSVR8EpLPHoLmAlAv%2BCt%2BlyyMoryZEN0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDB5nUQecv29hsdwNaSrcA7GrH539dpNN%2FF3ANkNt39K4oWM6%2BeCQBsYR8ctphkuKu9Tvt3I3kK3qOCtMHb9Ki5oCgwWeF%2BypKDU45KXNzDqRYXllyqrMWCVWYqvXI1MPeaH3CasJVDzDlUIRH9P0%2Btv3Xa%2BStf06uvmj8FCHyoDX6Oeg6Y830QcuVALf0snEEV%2FdhjtUZrXaZ7e2m5cwGRg83Nm0%2FbXJBFYyODJNqRU2hNBi2lDuNCfMrR2UHsahCNI42JgHWSdBQXyQEhlPw%2FduqphL1yZt1B24VyovkxLdlm%2Bdx1GVE%2FpEWtz82Zdmf69MpCwzywK0rOKA5gFUtzGYYUZbuYVEyz88b0VJr%2BOoz4SGJ6Tk260tRaj%2Bv9cxUt1pM97IHd986BkTqgEtrslcusfYdmYKFV3JEObNnUuX3HxMwmiJ9qb5a96N3XhgXwJuO8grUFUR6Ot0VlYtVWvXZi%2FGo13Is2O0DNcovkpiRTYoWWqb7hh2rtM6W%2BKm%2BRoZfVOb6C7HZ5tCLuTMh%2BIvVlKToqzn4V8E8eMpTK56w9E0eve4pOwNnNvqNb8%2FOrrQPs6lCwfBiOyb4PpV2len7UgTeATvR3y%2BfA2occPBHxwjmGDfsMp3%2FzoJfPfeewBQYmQ5OTd1XqD2MNvq2cEGOqUBwAQzK5jsMshIpeSubbeeeU61i2I%2B2cxrCFcv9j7PosS8Fzo3tzk2ikQo5ClYWhOZYXgbsdkMyqz%2Bw6WN9pL27QIzbVUpzXaDG6lID%2FLvN9sp7gaOGkcMt3b%2BCp0i0uosxSOxSsK1AD7UWWiIJSUoZpLhB9AAYQnpDwOP5tFNygNnW55x8sMXZY5TWuANSZ%2Bw8NIMLsD1eUALQZTdkxGLhL37%2FmpE&X-Amz-Signature=af6b29648a86857807920796d654053a3c66f76870b4348ff8d222ced949c771&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UJE6X3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuZn1fnnzeTZ9kfCjKhogM3ynCiAZQYrYcI6jZ9ThfgAiEAkFfuZegN2OOjSVR8EpLPHoLmAlAv%2BCt%2BlyyMoryZEN0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDB5nUQecv29hsdwNaSrcA7GrH539dpNN%2FF3ANkNt39K4oWM6%2BeCQBsYR8ctphkuKu9Tvt3I3kK3qOCtMHb9Ki5oCgwWeF%2BypKDU45KXNzDqRYXllyqrMWCVWYqvXI1MPeaH3CasJVDzDlUIRH9P0%2Btv3Xa%2BStf06uvmj8FCHyoDX6Oeg6Y830QcuVALf0snEEV%2FdhjtUZrXaZ7e2m5cwGRg83Nm0%2FbXJBFYyODJNqRU2hNBi2lDuNCfMrR2UHsahCNI42JgHWSdBQXyQEhlPw%2FduqphL1yZt1B24VyovkxLdlm%2Bdx1GVE%2FpEWtz82Zdmf69MpCwzywK0rOKA5gFUtzGYYUZbuYVEyz88b0VJr%2BOoz4SGJ6Tk260tRaj%2Bv9cxUt1pM97IHd986BkTqgEtrslcusfYdmYKFV3JEObNnUuX3HxMwmiJ9qb5a96N3XhgXwJuO8grUFUR6Ot0VlYtVWvXZi%2FGo13Is2O0DNcovkpiRTYoWWqb7hh2rtM6W%2BKm%2BRoZfVOb6C7HZ5tCLuTMh%2BIvVlKToqzn4V8E8eMpTK56w9E0eve4pOwNnNvqNb8%2FOrrQPs6lCwfBiOyb4PpV2len7UgTeATvR3y%2BfA2occPBHxwjmGDfsMp3%2FzoJfPfeewBQYmQ5OTd1XqD2MNvq2cEGOqUBwAQzK5jsMshIpeSubbeeeU61i2I%2B2cxrCFcv9j7PosS8Fzo3tzk2ikQo5ClYWhOZYXgbsdkMyqz%2Bw6WN9pL27QIzbVUpzXaDG6lID%2FLvN9sp7gaOGkcMt3b%2BCp0i0uosxSOxSsK1AD7UWWiIJSUoZpLhB9AAYQnpDwOP5tFNygNnW55x8sMXZY5TWuANSZ%2Bw8NIMLsD1eUALQZTdkxGLhL37%2FmpE&X-Amz-Signature=38b1cd000dada2015a845eb3f6400a660cbcd6d0699e7c8727a695350978612a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UJE6X3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuZn1fnnzeTZ9kfCjKhogM3ynCiAZQYrYcI6jZ9ThfgAiEAkFfuZegN2OOjSVR8EpLPHoLmAlAv%2BCt%2BlyyMoryZEN0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDB5nUQecv29hsdwNaSrcA7GrH539dpNN%2FF3ANkNt39K4oWM6%2BeCQBsYR8ctphkuKu9Tvt3I3kK3qOCtMHb9Ki5oCgwWeF%2BypKDU45KXNzDqRYXllyqrMWCVWYqvXI1MPeaH3CasJVDzDlUIRH9P0%2Btv3Xa%2BStf06uvmj8FCHyoDX6Oeg6Y830QcuVALf0snEEV%2FdhjtUZrXaZ7e2m5cwGRg83Nm0%2FbXJBFYyODJNqRU2hNBi2lDuNCfMrR2UHsahCNI42JgHWSdBQXyQEhlPw%2FduqphL1yZt1B24VyovkxLdlm%2Bdx1GVE%2FpEWtz82Zdmf69MpCwzywK0rOKA5gFUtzGYYUZbuYVEyz88b0VJr%2BOoz4SGJ6Tk260tRaj%2Bv9cxUt1pM97IHd986BkTqgEtrslcusfYdmYKFV3JEObNnUuX3HxMwmiJ9qb5a96N3XhgXwJuO8grUFUR6Ot0VlYtVWvXZi%2FGo13Is2O0DNcovkpiRTYoWWqb7hh2rtM6W%2BKm%2BRoZfVOb6C7HZ5tCLuTMh%2BIvVlKToqzn4V8E8eMpTK56w9E0eve4pOwNnNvqNb8%2FOrrQPs6lCwfBiOyb4PpV2len7UgTeATvR3y%2BfA2occPBHxwjmGDfsMp3%2FzoJfPfeewBQYmQ5OTd1XqD2MNvq2cEGOqUBwAQzK5jsMshIpeSubbeeeU61i2I%2B2cxrCFcv9j7PosS8Fzo3tzk2ikQo5ClYWhOZYXgbsdkMyqz%2Bw6WN9pL27QIzbVUpzXaDG6lID%2FLvN9sp7gaOGkcMt3b%2BCp0i0uosxSOxSsK1AD7UWWiIJSUoZpLhB9AAYQnpDwOP5tFNygNnW55x8sMXZY5TWuANSZ%2Bw8NIMLsD1eUALQZTdkxGLhL37%2FmpE&X-Amz-Signature=f112db2cda7d1fc85e663e53c39c084fa8cd06a0924d2ea0b4fcec4b25aad3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNP4CIQK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEbVR%2B1ZBcS%2BQK9Rtf3pWaM4fLAJ5lq1v1qfmbWmUMZAiAiwrEwn2NBIOpOkGaejpqgbf%2FtzhmlesH2sHheDKu5Ryr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMutBvQnMQvKq4uDv9KtwDPudwl9USMF0uBOY9NqMj0z2u51DaNnKDDzomGOhmDTAEp9%2FsXs1h8huc9VjQacfVXj0BFP%2FUOJXPS3LWC7L5ZBfb%2FjMWZq%2BOQc0TCwmWFrNkHEp0rwaZ7B2Op2Nd2JZfYHUWqUPAJKuST2i1S2phfrsi2KBfcOFey%2FQH8pPiroeCpqANfpgl1KcwmXbtmEMUZG%2BMI9w7Bp7UsiWOKrPqnwy4doJRxH3RQ0rcXnozGFlo8DJOKgL9Tlpqesj2VclHgRRoejxah12G4%2FRr%2BjVSTQPd3MC5MFVMW8hOJinaiajTnscYh2F8K9kbAJWtBmLPV9sbcmRw1vsbOyf%2Fodvjvuj7y6mDH9ftUEFwMUpsQq9aUHkmW8qZgtf0q1DziUBjJVvEDgFdMyCKJfpuMzlrf6vM38d9dygr8N%2Bey2JZhYtTgTNIpHKnm8fsnL4HT2rQRfMLoa3mNXuzz%2B9NT29NVI0FKui0jHRoNRKbqXwNtzLrTN6KdDzA5DezP3s9cYUN8Jbgl1NE26fMqcW6xk3PHtUHU2eh4MJ1cBxAzXF1okPeNTwXKoyK1aNZP7PM54nWSW70JKJ%2FF7nJ0B9b%2FxAm01dEscOQ0es9H4PdevC0M4H4efNGyU6HggKN9zsw2erZwQY6pgEuwqYKiK6hZwhk5PJKV0MSoy98IHmn6lfkuJP4ShXK3cJSqh3BeS14%2FmGFk6qcZSGU%2Fpks1pAzhhVHOdDYIWL2wwisP18zv%2FDDLwkiefVEQHgR7mcG04xxmQxGF1jFGJC8Se8pgJoZmHw1ORAq0S29i4YkVU%2B5TGlu2oV5o%2FzXC32PBG%2BISiOppW6kN6M5f0g8jzfJlalOevc6Z9FbvlvcFEkghm2T&X-Amz-Signature=7515b94002f4d6396ce0d40ae4e93a4c6d1e1dbb7370ba30b147b4ac95e42ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JZGYT6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0eoxJgP7x7%2Fhe68GKZPdamB7LfMAEy5brfLktZgPm5AiEA4gpb%2BCdPqZkNjbdltH2zCwoJeHEq62PVt9cWPbjDUCkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDSBlUKi%2Fr1vLD14XircA9dv4E6u8mU3lv6tg0I4BisFNJagAPHJBMBDdE0Zw%2F4d9cvAeB%2FzoVUkuXdKZWxS5SND2QB9GMadodFMAywdk0Vsy%2BTGNndo87CajpRVaVCjg8Cfna31gbdLaTRgEIKMMAzuVaEKOl04byjZzZjIe6mePuX0fwgcPu4Qsj%2B2xRZG7UE35xBEDRK6aAxFpAKDHhieCdfOrFzJOIlxz7Kx%2FCfZg9%2BR%2B0QwCKOYTDC9XuZrew%2BZ6EwSLJSn1HR5WY0XWmFeHvtHcUAgkwV%2FUcg8mahPGJaE7xcy1xho1wkdYH8zdSYBJnUh2MITdyeormNAj884pc%2Btr3O%2FzZ1f0WVkbfcTeciV6okW%2BuocVOOQ58aODQNd%2BfbgRq%2FUppEXPjNhm7%2FY3r3EuBPC0A3Tkg44hunyX0jRZc0qln1MTvPG%2Fr3W1Aumq8rT0B8z14tGeoBrKYYAAjP%2FSdmG%2BytaLnbg1gdVpm3eXdbGG%2BYmeTXbzICxIDVv6wwdKGsmTF5YaMrMjEHWPJvoEiprqAUn50RDQMY9Lm1mj655mRxyvJgl%2Fh4z2Gw%2BoigM84PsOfcP65NNmk5cwMf27uqqWXLvnaTWBPnSUmZhJsfgm3qHZe8E5Xa%2BDcShnW%2F%2B98rgumomMK%2Fr2cEGOqUBjndB8X%2FWP0PTX7W2tZoaglj4pHSIZE2jzsS94DS1Wh1oypLqgMDq7I3NakbA9F8rcUnDefXHkSu5ZVSOjco2ukAuOViYSt5MJd%2FNY6CivJ2kj569GYnDd24bGh9DawvIJ%2BIFiI6QfrQHhMAa6RTQ1fzeCKeyOihIyjXYgw%2Bs2FCsXAJXG4NxYcqgyzbzOdWJRgxch2avu9BnigcOf0EUcL9mcgPm&X-Amz-Signature=00dca0ec9d0995ce82c071b6176d96dedcd318a1cfc552cf2dc6a89e1213b0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UJE6X3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuZn1fnnzeTZ9kfCjKhogM3ynCiAZQYrYcI6jZ9ThfgAiEAkFfuZegN2OOjSVR8EpLPHoLmAlAv%2BCt%2BlyyMoryZEN0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDB5nUQecv29hsdwNaSrcA7GrH539dpNN%2FF3ANkNt39K4oWM6%2BeCQBsYR8ctphkuKu9Tvt3I3kK3qOCtMHb9Ki5oCgwWeF%2BypKDU45KXNzDqRYXllyqrMWCVWYqvXI1MPeaH3CasJVDzDlUIRH9P0%2Btv3Xa%2BStf06uvmj8FCHyoDX6Oeg6Y830QcuVALf0snEEV%2FdhjtUZrXaZ7e2m5cwGRg83Nm0%2FbXJBFYyODJNqRU2hNBi2lDuNCfMrR2UHsahCNI42JgHWSdBQXyQEhlPw%2FduqphL1yZt1B24VyovkxLdlm%2Bdx1GVE%2FpEWtz82Zdmf69MpCwzywK0rOKA5gFUtzGYYUZbuYVEyz88b0VJr%2BOoz4SGJ6Tk260tRaj%2Bv9cxUt1pM97IHd986BkTqgEtrslcusfYdmYKFV3JEObNnUuX3HxMwmiJ9qb5a96N3XhgXwJuO8grUFUR6Ot0VlYtVWvXZi%2FGo13Is2O0DNcovkpiRTYoWWqb7hh2rtM6W%2BKm%2BRoZfVOb6C7HZ5tCLuTMh%2BIvVlKToqzn4V8E8eMpTK56w9E0eve4pOwNnNvqNb8%2FOrrQPs6lCwfBiOyb4PpV2len7UgTeATvR3y%2BfA2occPBHxwjmGDfsMp3%2FzoJfPfeewBQYmQ5OTd1XqD2MNvq2cEGOqUBwAQzK5jsMshIpeSubbeeeU61i2I%2B2cxrCFcv9j7PosS8Fzo3tzk2ikQo5ClYWhOZYXgbsdkMyqz%2Bw6WN9pL27QIzbVUpzXaDG6lID%2FLvN9sp7gaOGkcMt3b%2BCp0i0uosxSOxSsK1AD7UWWiIJSUoZpLhB9AAYQnpDwOP5tFNygNnW55x8sMXZY5TWuANSZ%2Bw8NIMLsD1eUALQZTdkxGLhL37%2FmpE&X-Amz-Signature=4a200f8405391f7f5d799d12b1b1f7854973b4bd0e0ca59eb20ac528c5e28a75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
