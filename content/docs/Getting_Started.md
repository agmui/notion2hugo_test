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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HETWDWO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtwBDt0QP7DGJypkq1WarbWbqTIC0m6zac5xJB5StTswIgG9FadWqIVrVqktRf51RU3OJO%2Bnm1pPcvml9iH3Ar1Jsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXNdUsPZnio7DKmQCrcA98g0pwX%2B%2FTOI8h8wCLl45DIXrfzOJcy1jUat9VqidKnAoIH%2FpXMJ5NlPSVnKO38jZRSWXpE456oJ9pMFTi9sDQ9TYuiu4TxrtsFoq0HsvcBOq1Z5tgSSpJ%2F4ZEnSHmfGBtdKNstLnhuz62bed41au9gSQJu88z%2FKGLO5HrDAI8lnyb6OycWs315MwKF28GL6gICROUKa8NxgV9yutSYrb3bRlIpf%2F9rJQ1pKU0O0JJ6pdk2HJ2Lmsos8UXv%2Bv0OenrFSnhfMpEGe3QQFA2fSkF2zshSXUYpoi4RSmLoFQGxGuku9MZI4PL8CDTNRM83CmfYKTXv3tvPHEZiRifygYe6kUqz847wOZkiXaw5gBzWXENvy0KSB3%2F6juPDHJFtYRw9tgMFKC3tfFiXmMfg4DRFN6uyWm2PDDsX5RnloStRHPKHtfe6D%2BXMdp6EoecWKYcU0pBUiUgP4Rf3B1yKED5yPaZjvHAnH4BAegGmHrhZldz3jPnna7O3o8tlAxCEglGBiFRakKMtsBCbgMPMElU1B0GWVXop%2Ba8F6o7nICq%2BbJKxaRcJJUbJwo8rx%2FjIDqbXro3RXlq8Z19jFZ8hq3nzkmcKf7dUPlc64BWXdf4tHJSj05uQ0WezhtDsMMTK%2B8IGOqUBIHTiZDap8nhYw8QPd4hyAS0CbcL4HMUw6koOg%2BzEUV4nz19Too6H7QH%2FtowkWq%2BLiuu9moPP8zaII4Xvlx4Vv7vRPhK1pZhYPe5TrUNmy3TCPx8jX4z4ZYoolLWT2MI4hr7YNp5r3JvUL6xpAY3NeuXtO2u6ZQL2e5mBwIS4XJnnMZaEDT4rmkECuy9RqP%2BFcN8Li7qK%2FrnfFV%2BhiGx%2FAY1WMSeK&X-Amz-Signature=b8cb68af13e7a6e580463ab1487a16022594a4aab9aa3e59698523acb5a758bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HETWDWO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtwBDt0QP7DGJypkq1WarbWbqTIC0m6zac5xJB5StTswIgG9FadWqIVrVqktRf51RU3OJO%2Bnm1pPcvml9iH3Ar1Jsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXNdUsPZnio7DKmQCrcA98g0pwX%2B%2FTOI8h8wCLl45DIXrfzOJcy1jUat9VqidKnAoIH%2FpXMJ5NlPSVnKO38jZRSWXpE456oJ9pMFTi9sDQ9TYuiu4TxrtsFoq0HsvcBOq1Z5tgSSpJ%2F4ZEnSHmfGBtdKNstLnhuz62bed41au9gSQJu88z%2FKGLO5HrDAI8lnyb6OycWs315MwKF28GL6gICROUKa8NxgV9yutSYrb3bRlIpf%2F9rJQ1pKU0O0JJ6pdk2HJ2Lmsos8UXv%2Bv0OenrFSnhfMpEGe3QQFA2fSkF2zshSXUYpoi4RSmLoFQGxGuku9MZI4PL8CDTNRM83CmfYKTXv3tvPHEZiRifygYe6kUqz847wOZkiXaw5gBzWXENvy0KSB3%2F6juPDHJFtYRw9tgMFKC3tfFiXmMfg4DRFN6uyWm2PDDsX5RnloStRHPKHtfe6D%2BXMdp6EoecWKYcU0pBUiUgP4Rf3B1yKED5yPaZjvHAnH4BAegGmHrhZldz3jPnna7O3o8tlAxCEglGBiFRakKMtsBCbgMPMElU1B0GWVXop%2Ba8F6o7nICq%2BbJKxaRcJJUbJwo8rx%2FjIDqbXro3RXlq8Z19jFZ8hq3nzkmcKf7dUPlc64BWXdf4tHJSj05uQ0WezhtDsMMTK%2B8IGOqUBIHTiZDap8nhYw8QPd4hyAS0CbcL4HMUw6koOg%2BzEUV4nz19Too6H7QH%2FtowkWq%2BLiuu9moPP8zaII4Xvlx4Vv7vRPhK1pZhYPe5TrUNmy3TCPx8jX4z4ZYoolLWT2MI4hr7YNp5r3JvUL6xpAY3NeuXtO2u6ZQL2e5mBwIS4XJnnMZaEDT4rmkECuy9RqP%2BFcN8Li7qK%2FrnfFV%2BhiGx%2FAY1WMSeK&X-Amz-Signature=392710c18317f184bc427ebdfc683177745aaa9cc7c3227a7f7a9ce76c665cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HETWDWO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtwBDt0QP7DGJypkq1WarbWbqTIC0m6zac5xJB5StTswIgG9FadWqIVrVqktRf51RU3OJO%2Bnm1pPcvml9iH3Ar1Jsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXNdUsPZnio7DKmQCrcA98g0pwX%2B%2FTOI8h8wCLl45DIXrfzOJcy1jUat9VqidKnAoIH%2FpXMJ5NlPSVnKO38jZRSWXpE456oJ9pMFTi9sDQ9TYuiu4TxrtsFoq0HsvcBOq1Z5tgSSpJ%2F4ZEnSHmfGBtdKNstLnhuz62bed41au9gSQJu88z%2FKGLO5HrDAI8lnyb6OycWs315MwKF28GL6gICROUKa8NxgV9yutSYrb3bRlIpf%2F9rJQ1pKU0O0JJ6pdk2HJ2Lmsos8UXv%2Bv0OenrFSnhfMpEGe3QQFA2fSkF2zshSXUYpoi4RSmLoFQGxGuku9MZI4PL8CDTNRM83CmfYKTXv3tvPHEZiRifygYe6kUqz847wOZkiXaw5gBzWXENvy0KSB3%2F6juPDHJFtYRw9tgMFKC3tfFiXmMfg4DRFN6uyWm2PDDsX5RnloStRHPKHtfe6D%2BXMdp6EoecWKYcU0pBUiUgP4Rf3B1yKED5yPaZjvHAnH4BAegGmHrhZldz3jPnna7O3o8tlAxCEglGBiFRakKMtsBCbgMPMElU1B0GWVXop%2Ba8F6o7nICq%2BbJKxaRcJJUbJwo8rx%2FjIDqbXro3RXlq8Z19jFZ8hq3nzkmcKf7dUPlc64BWXdf4tHJSj05uQ0WezhtDsMMTK%2B8IGOqUBIHTiZDap8nhYw8QPd4hyAS0CbcL4HMUw6koOg%2BzEUV4nz19Too6H7QH%2FtowkWq%2BLiuu9moPP8zaII4Xvlx4Vv7vRPhK1pZhYPe5TrUNmy3TCPx8jX4z4ZYoolLWT2MI4hr7YNp5r3JvUL6xpAY3NeuXtO2u6ZQL2e5mBwIS4XJnnMZaEDT4rmkECuy9RqP%2BFcN8Li7qK%2FrnfFV%2BhiGx%2FAY1WMSeK&X-Amz-Signature=2363eca302afc57c44e6e586e153c132d88c4af029e015fd7ae1ddd306570121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIGGM3C%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmzm5INsxOPZGEHVclPITCsFVsSs3pQzl7LKXpVH%2FCtAiEA7VTdXVmoX4zLrnUOp85SZq2IeSXaL4FBwyLwylbPa1Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHRzCWcwv%2F4XmpvHvSrcA7RRd%2BqYtaPc5tLbUj2hiRsj0PFV6qzsSBGq%2BPaKQH79KoNCcUOBOK6qmaWc%2B92RqqAkde6hKQ4OyqX7daTPd1%2B0uJU8ApO6LyHznlh%2F4cV8MWyuJlBiPihMC5um1S7qkd%2FWLVz7GnXEMbT%2BD%2BF%2FlEIJDh7NUurRUjTcvcKmprsb83YX%2BPWZ3sJ17vS21VECm0gWUPHt5yI46yHBN5dAOEXEeITA5nu%2FctRH2h1yQdFvuWC4NjQMA4mhCogmSPsr0GDXcctlgyd%2BS25sU%2F3%2FyCNi26I%2FsTolnO10TpBiBSpH%2BzGlfQtB%2F2cDW5Fs%2BNeqN%2B2DVJSBVVD7%2B28VMxNR9hArBNn9QFXKPnLuCWsIW1h5zreZ%2BHZKgud6CCIokg6HtCi74JQ5eTwS6YSijxrd3MSFTxIqXlE8uXL9YpJ%2BfcblQ4c2WOFJkZ%2BWFOECn75cTk5Ev9HFcnymAaSFjc4VjXnPmk1korX4m7gTtjVbeoXNNffERcrRV%2BxobWG1vKqFOxi%2B9Hw5l342CG7VHqFd4kW5CdJO4fTwaa1x%2FxYz4KQr49X9nhkTmEGtC6L%2Fqbmu6fD4bJevNUkjzjh6uqnPxzypR%2BdtReVwSBdrfeWyXDpFd1ULSk%2Fpl8jJJwk1MMHK%2B8IGOqUBPgCDp4OzvuB57Az%2BU8i9jsiqhwvfRCqBxKsFn4FtoSQA6mu%2FmrJk4FUxd1mw%2Fy%2FZld2g5cQBSd%2FbG4EBC1Z3MJrBnJLBtcS0oklz8wx7IFAu70ZgcUjTpKxeJq0cV%2F7s%2Fg91bkejVcJPsEt5IZlW5wJCRDWHrJvt8hO2jCI0uhlIecZ0iDcKWzLG3j5U5WdQwDM%2F9VB4LWysJ2CBgqOA%2BFUPpOyi&X-Amz-Signature=a953d9fa585bf505215a4943a0aff217b3acf2fcb996cd3668f8e73e582d7e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJFODPJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzK3RuQ0178Nsbo7RSsBWXOGHKaGfMMd%2BmjXT2PhSjOgIhALOdpbs%2BhSQ23hPXcONkgDjUR9FoDS2x1SDcr7lCiRw3Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwbYaPv4GmQlkJV63Mq3APSwOcRjnKKxbQbWDayhkbJL1gNMks3wNxqzOhdMRnex2%2FL4lGvD9mOWCZPnMTyZbfuyEa28yHUF%2BjCZ5QZkOiYtA%2BmHVWXP%2F8Dp6ROyj2Dsbda9tyyV1yfwfiKbxAcXeA%2Fu4kT5VtjgmamRcgiXOpMq9AIWRczyTnnSBxkuQL6yFz2rJJedWcEapFJZOdtBGhnex27ePZMzGXmJZELZAI9Z7eFN5ixTwt%2BK3rOpcksLPVOL1ASi1Q3LmeC1aIVYBxMMLW41%2BT780%2B%2FdoE2Q9qDPasmCzXQ%2BJCS5WXtjaEQB8PP%2Fapy7eVpoLIgQ2L1Z48pT6T8CAyUdBzaBTY4zgZKUFjZuacJoPeJP%2FTNy8287pw6%2BNLS7LOUoMfroe2IhG1Y7PbMUcuLvHJKpW4ErAsCl7cbR30irS233vOsIedLp97BbWcTiTM11bTNQrRpYlJDftN40UjRv0JqiWWkTiV2Ts%2F9U7u23YUWitUuDMSi1SyzphTNwva6wXDhR7JAInRykpr7RRUXhTo412A%2Bw74fHaRhtvy6%2BHygQ2o%2BtQgszOh31UjbRzVxq0P35LNHeCsCQDVaf2XQjAxPlvfV5hBNRaJgrxxqt%2FhcShw26MH%2FyTeaYdelSltjg6IUpDCRy%2FvCBjqkAUFIdWS7KMIBgJk1ye5ZtTe1WsuPrpmU%2F%2FPAkOhBa%2FR4CGuRkOOV%2F1LbNcMJjQuFE2C0BSxHHe4A32IXsx4n4qDXlCXvCuUYVi94KyAsQ%2F6zzm%2FdynKInc1pr1O3rxad4qSNC7YUTCSreSgzJqGsyvykkhDsQMSuLeOxLPw7qHNtD29PdVS5uHPbSACF0E9uXzMluGZ6pwCa8u9RvVEttWbsXFpr&X-Amz-Signature=ab74648b108ea4586c494c7e21512dd25bc9b8650e64e1d6a58c3249e53891da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HETWDWO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtwBDt0QP7DGJypkq1WarbWbqTIC0m6zac5xJB5StTswIgG9FadWqIVrVqktRf51RU3OJO%2Bnm1pPcvml9iH3Ar1Jsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCXNdUsPZnio7DKmQCrcA98g0pwX%2B%2FTOI8h8wCLl45DIXrfzOJcy1jUat9VqidKnAoIH%2FpXMJ5NlPSVnKO38jZRSWXpE456oJ9pMFTi9sDQ9TYuiu4TxrtsFoq0HsvcBOq1Z5tgSSpJ%2F4ZEnSHmfGBtdKNstLnhuz62bed41au9gSQJu88z%2FKGLO5HrDAI8lnyb6OycWs315MwKF28GL6gICROUKa8NxgV9yutSYrb3bRlIpf%2F9rJQ1pKU0O0JJ6pdk2HJ2Lmsos8UXv%2Bv0OenrFSnhfMpEGe3QQFA2fSkF2zshSXUYpoi4RSmLoFQGxGuku9MZI4PL8CDTNRM83CmfYKTXv3tvPHEZiRifygYe6kUqz847wOZkiXaw5gBzWXENvy0KSB3%2F6juPDHJFtYRw9tgMFKC3tfFiXmMfg4DRFN6uyWm2PDDsX5RnloStRHPKHtfe6D%2BXMdp6EoecWKYcU0pBUiUgP4Rf3B1yKED5yPaZjvHAnH4BAegGmHrhZldz3jPnna7O3o8tlAxCEglGBiFRakKMtsBCbgMPMElU1B0GWVXop%2Ba8F6o7nICq%2BbJKxaRcJJUbJwo8rx%2FjIDqbXro3RXlq8Z19jFZ8hq3nzkmcKf7dUPlc64BWXdf4tHJSj05uQ0WezhtDsMMTK%2B8IGOqUBIHTiZDap8nhYw8QPd4hyAS0CbcL4HMUw6koOg%2BzEUV4nz19Too6H7QH%2FtowkWq%2BLiuu9moPP8zaII4Xvlx4Vv7vRPhK1pZhYPe5TrUNmy3TCPx8jX4z4ZYoolLWT2MI4hr7YNp5r3JvUL6xpAY3NeuXtO2u6ZQL2e5mBwIS4XJnnMZaEDT4rmkECuy9RqP%2BFcN8Li7qK%2FrnfFV%2BhiGx%2FAY1WMSeK&X-Amz-Signature=366cc521af30f0844171c0360a10577b2c2fefed7a47bd2d8d2c511ba40d867d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
