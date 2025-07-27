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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFGA3IO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICF9i0%2FnNEpncPIzr23GcntHDwVXU%2Bb6qdLLA%2B3F5DuDAiA50lntQ0Atd6scoLDYdUZ1g3fggnAT3nEF6c2O%2FxZCOSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMB9Wjch%2BURhM5xOrVKtwD36vDOmIhoYW14cp7SfYFGGk%2BfnPtFXQG0ZIkBJfOHXyxnC8NDa7GszKXXwJmnKtK82TV%2Bk%2BjCtmba668owvclANOc1Xg5oY2Rff0Gv8rbYhehjsqCyWJ8NR9y7X45%2BAeX79mV0k6X16K6FYGQxFSvBw2uplt1R0Y1I9tQHSoFyYSt0%2BjpXy1nfBTcSvUy8m2AxQlpF0SF50h2U9KOxdDjA4liVcJvUxZPQkbBLXGfxsrHWT98ajjQnmyr1A%2BqbajtYCU2GcfDbB08CmbVXa0SMw%2B%2Bbx%2FDp9dfHjFqY%2Feh5nwlIl3UWxYOj3T8pj05GKBKuX2fJeVpn2RlwZSsCzwih1oe08xYVomyGpHMh9rp9FZH%2BRisZVRBLhdEqsQyevKbtwin%2B5sO%2BebfqE7EpJMasiRiEY44DEtTkQonR45AZc6hvIeCoCG41gzKLWKStaOu7KDKIArtL%2FDrQT80dfcli%2BAupLAUCM7jO6IsMhru6vsV7gbEAzsrAOC26zNKH48QgVZhOzDYHRxuKenEqttyWOvWzvdB3gRKc7P9CmFZfbQKwgLk8PR5LUcKT9i0%2BDWEN0dR2tUGNdPAmgRtLdrLtYGeKxLMeynJd3f4OMpPKcpMp0e0AW8xb33HdEwyPmYxAY6pgHBsCGXsisDKitG8lNVI5rSrKw2VjuUQJBmpHsNdNpMej1eObngqqg0ORzmedf35931RV6euZ4XNVu00LRsoaAaGnpS933%2FVd5EC6PClxVn%2BPfTIcMYT2LJRvjl%2BASadGiYB8vbDFzIgHXBwRl%2FF1MnAO3kJyXCG0tafzxJw071AMWAuPv4u%2B7FmULW293LmjDzCNYegeRycmEuIwGwADLSNElWONh2&X-Amz-Signature=6c0e76073d10c76b2a40b2043ea7f1b2307d3ecc25bab7da3ecaf478f1f3180c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFGA3IO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICF9i0%2FnNEpncPIzr23GcntHDwVXU%2Bb6qdLLA%2B3F5DuDAiA50lntQ0Atd6scoLDYdUZ1g3fggnAT3nEF6c2O%2FxZCOSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMB9Wjch%2BURhM5xOrVKtwD36vDOmIhoYW14cp7SfYFGGk%2BfnPtFXQG0ZIkBJfOHXyxnC8NDa7GszKXXwJmnKtK82TV%2Bk%2BjCtmba668owvclANOc1Xg5oY2Rff0Gv8rbYhehjsqCyWJ8NR9y7X45%2BAeX79mV0k6X16K6FYGQxFSvBw2uplt1R0Y1I9tQHSoFyYSt0%2BjpXy1nfBTcSvUy8m2AxQlpF0SF50h2U9KOxdDjA4liVcJvUxZPQkbBLXGfxsrHWT98ajjQnmyr1A%2BqbajtYCU2GcfDbB08CmbVXa0SMw%2B%2Bbx%2FDp9dfHjFqY%2Feh5nwlIl3UWxYOj3T8pj05GKBKuX2fJeVpn2RlwZSsCzwih1oe08xYVomyGpHMh9rp9FZH%2BRisZVRBLhdEqsQyevKbtwin%2B5sO%2BebfqE7EpJMasiRiEY44DEtTkQonR45AZc6hvIeCoCG41gzKLWKStaOu7KDKIArtL%2FDrQT80dfcli%2BAupLAUCM7jO6IsMhru6vsV7gbEAzsrAOC26zNKH48QgVZhOzDYHRxuKenEqttyWOvWzvdB3gRKc7P9CmFZfbQKwgLk8PR5LUcKT9i0%2BDWEN0dR2tUGNdPAmgRtLdrLtYGeKxLMeynJd3f4OMpPKcpMp0e0AW8xb33HdEwyPmYxAY6pgHBsCGXsisDKitG8lNVI5rSrKw2VjuUQJBmpHsNdNpMej1eObngqqg0ORzmedf35931RV6euZ4XNVu00LRsoaAaGnpS933%2FVd5EC6PClxVn%2BPfTIcMYT2LJRvjl%2BASadGiYB8vbDFzIgHXBwRl%2FF1MnAO3kJyXCG0tafzxJw071AMWAuPv4u%2B7FmULW293LmjDzCNYegeRycmEuIwGwADLSNElWONh2&X-Amz-Signature=c2a767346866c444a81919388720e762e69cacb1d0468525bde8604f5862872f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFGA3IO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICF9i0%2FnNEpncPIzr23GcntHDwVXU%2Bb6qdLLA%2B3F5DuDAiA50lntQ0Atd6scoLDYdUZ1g3fggnAT3nEF6c2O%2FxZCOSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMB9Wjch%2BURhM5xOrVKtwD36vDOmIhoYW14cp7SfYFGGk%2BfnPtFXQG0ZIkBJfOHXyxnC8NDa7GszKXXwJmnKtK82TV%2Bk%2BjCtmba668owvclANOc1Xg5oY2Rff0Gv8rbYhehjsqCyWJ8NR9y7X45%2BAeX79mV0k6X16K6FYGQxFSvBw2uplt1R0Y1I9tQHSoFyYSt0%2BjpXy1nfBTcSvUy8m2AxQlpF0SF50h2U9KOxdDjA4liVcJvUxZPQkbBLXGfxsrHWT98ajjQnmyr1A%2BqbajtYCU2GcfDbB08CmbVXa0SMw%2B%2Bbx%2FDp9dfHjFqY%2Feh5nwlIl3UWxYOj3T8pj05GKBKuX2fJeVpn2RlwZSsCzwih1oe08xYVomyGpHMh9rp9FZH%2BRisZVRBLhdEqsQyevKbtwin%2B5sO%2BebfqE7EpJMasiRiEY44DEtTkQonR45AZc6hvIeCoCG41gzKLWKStaOu7KDKIArtL%2FDrQT80dfcli%2BAupLAUCM7jO6IsMhru6vsV7gbEAzsrAOC26zNKH48QgVZhOzDYHRxuKenEqttyWOvWzvdB3gRKc7P9CmFZfbQKwgLk8PR5LUcKT9i0%2BDWEN0dR2tUGNdPAmgRtLdrLtYGeKxLMeynJd3f4OMpPKcpMp0e0AW8xb33HdEwyPmYxAY6pgHBsCGXsisDKitG8lNVI5rSrKw2VjuUQJBmpHsNdNpMej1eObngqqg0ORzmedf35931RV6euZ4XNVu00LRsoaAaGnpS933%2FVd5EC6PClxVn%2BPfTIcMYT2LJRvjl%2BASadGiYB8vbDFzIgHXBwRl%2FF1MnAO3kJyXCG0tafzxJw071AMWAuPv4u%2B7FmULW293LmjDzCNYegeRycmEuIwGwADLSNElWONh2&X-Amz-Signature=0c0f33baeacd5125dbae4e6fe3684da3c07ca2484b1601e6275792cbc089fbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNEWY25%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD0Of3UhTIb79NaXq2EB11g9byS2wBW08sHhEM7YqaqxwIgJ2MmeDL4l4vZ8U0WYoS3%2B8jOyur1GbRP3NvJ%2BRLJsQ0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCXrlCRwBJ0ABPl%2FayrcAz9OIdcO2lRPJNzGpXObK356E0cBhPaUJg4p80r%2BA5QLSvHQ4TIF5mRQWuFGTemxVh8oQcDw3HuyToofeCJK7RWMO5He7TCNv%2BfodusAiVrXeeeg7rJrRoUsHa%2FeumnZdA%2Fub5n0sgEojz2yq7FZaiYcJakwb%2FKlFCEUXoLghdUrWJKzISPhCafjvgzIMtEL6OdqCbQw%2BJcQz0bB6qA5gYSuySR8DKZDmYVvHqbx8zczgoNwpKqPy4xN7k4u%2B0fIHS7PtFZQQIPtyBg8qRLNMgWkb%2FZcF%2FE9S6%2F7Jh5eROuWGtBR1HPbM%2BvSSMBU2%2F0hiLVDq6BOijN%2F0vA%2FtybsQyQfrkf%2FPzMxFmXPro2XC4mZDBCITbqwuMpbrAFt%2FjQE%2F%2FrakDWIQPi8N3QQmimgdrowsrNYKELY94DNs%2B43Z2lPYeqzXJoVCpPHL1JAv1ti1D0Uvwtm0adb11eJCJpOEtG89Uh3HkJxSDqYIyVkHkOMjOYPEGYDcC9Hm%2FKmSFu%2BtDNEr1xpHIwhH4722xAeyi55MXHl8Dj9hvt8EXiC9eEgOfFPvLMGudzxyW3rCidsVa1CAVBdlY9I6BrMDlxIM3xHRoniq0%2BhHe6x9Pn65eywINE9Ll29nBF%2BMIYeMJL3mMQGOqUBlRKQoAHLa1KtV5KVtzF3tuYmgs2sVOMIPSgUyPu0hKdOk1z7uMXNCQl0PrteLc1cd6B7PokSjD2PxeEA85ipUwV7HGK58B6mRXbGL8Vtsn2SgamnuvWSuYX98OkYEmGS0DjmK1k03B74A7%2BTkyJe2DOxh2sdN9inQsHxagzwoiG%2B%2BiZW7TSM5gKbVpyFRBogC8tTKTu4g1WNpvRM%2Bfj%2BDb49QpK5&X-Amz-Signature=2836df1397d8404752e94f831cea337aa24a1e640f7b3f60c231d5b78038e4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGF7KSR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBL8fs5AdV8zPbpvjRQD0Xa%2BeHNEhZKlUoB5njyMJ9hSAiEA%2BGvRcEmPGmT68bFARXG%2Fk2Nv1Lr5ef2Sp9VrwYonwcQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJHGK1YQGx%2Bjd8S57CrcAxviEyIRHO2WvVs9xiDEDzLMVd5FdZ0fiHMMErtl9eVGeWTHQIEtmDcE0tSrAivXuXdv8LeNy8TLGIh0VQVBKxkSH1pJuFpIbCwSgMzZRaxWva8XqD%2FWG66%2FP3PtRBA1SVXSYXTCeoBbADDdRdl2VD6yKEo%2BIvaz0kLbaQLgpuQQiKU89XDUDqtOj4UpjLv4VXaOGr%2F1Hx4jpPDK6EqtiQX7uX%2FoemT7RWhGFe02Kq5v%2BzyBvghP61MrBbJN%2BIN5sK4zaaUTy3G6uYN2QUkQcc%2FJrJ9LxLwIQh0nDgxgyYjlcpVqAXTkj4uf9DxgB6UFwsElw7WXp9uEfIP1gUavXpqN6zQInTGBhQWat%2FBfwskrocXo1AKYtndzKMZn08Nbkt%2FCA1fzPiRLAq4g%2FNFFztnA1lb7BbKA9uXz5nSqJmgLiixlzVMQDXsLm8BfUzBxk5fVob9SWGf2RWiuWX3Rj6k%2Ff9Cw8D%2B5CbII%2B5rjtRLXHDj4yJAhoqpmT1cPizDR%2FjT3P2qbGawjyCe7ai2H5Gq7%2BHRfsPyVV47ZpAbe3txDcuFihIYdxcEUqONclcJZ5nZe%2FTHTfG%2B44CJJ0b8spiBbWTfTcRBws%2Fpr0iAVVvieouqKBp6Y8n%2BX6fuaMOP%2BmMQGOqUBtOwWVSiSE7YBLadRPXDxm%2FbTTwD6uMJ6%2BPIkxXnMD5%2F5KNjWvuEY3%2BYVo88Ve7Bx%2BQVWCDLEKvgKRpZck%2Fpq8PYU5xMZQ%2BBBAILHfzAJbpr4%2BOLTFolc39VsTJMUohYLVHw%2Ftvj85GSkvF%2Be4H9k0AiOlj1D6HVSPOe43%2FQgq2%2F9JA1kHV4kbvaR9wZ7fDUm3%2FBp%2B7QuMU4SINCdq0Cy57EdL6nu&X-Amz-Signature=8932a4c0bc22873d5e35ce12f6f12dbf5f99bd49b59f8fdb23f4ba750a30f0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFGA3IO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICF9i0%2FnNEpncPIzr23GcntHDwVXU%2Bb6qdLLA%2B3F5DuDAiA50lntQ0Atd6scoLDYdUZ1g3fggnAT3nEF6c2O%2FxZCOSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMB9Wjch%2BURhM5xOrVKtwD36vDOmIhoYW14cp7SfYFGGk%2BfnPtFXQG0ZIkBJfOHXyxnC8NDa7GszKXXwJmnKtK82TV%2Bk%2BjCtmba668owvclANOc1Xg5oY2Rff0Gv8rbYhehjsqCyWJ8NR9y7X45%2BAeX79mV0k6X16K6FYGQxFSvBw2uplt1R0Y1I9tQHSoFyYSt0%2BjpXy1nfBTcSvUy8m2AxQlpF0SF50h2U9KOxdDjA4liVcJvUxZPQkbBLXGfxsrHWT98ajjQnmyr1A%2BqbajtYCU2GcfDbB08CmbVXa0SMw%2B%2Bbx%2FDp9dfHjFqY%2Feh5nwlIl3UWxYOj3T8pj05GKBKuX2fJeVpn2RlwZSsCzwih1oe08xYVomyGpHMh9rp9FZH%2BRisZVRBLhdEqsQyevKbtwin%2B5sO%2BebfqE7EpJMasiRiEY44DEtTkQonR45AZc6hvIeCoCG41gzKLWKStaOu7KDKIArtL%2FDrQT80dfcli%2BAupLAUCM7jO6IsMhru6vsV7gbEAzsrAOC26zNKH48QgVZhOzDYHRxuKenEqttyWOvWzvdB3gRKc7P9CmFZfbQKwgLk8PR5LUcKT9i0%2BDWEN0dR2tUGNdPAmgRtLdrLtYGeKxLMeynJd3f4OMpPKcpMp0e0AW8xb33HdEwyPmYxAY6pgHBsCGXsisDKitG8lNVI5rSrKw2VjuUQJBmpHsNdNpMej1eObngqqg0ORzmedf35931RV6euZ4XNVu00LRsoaAaGnpS933%2FVd5EC6PClxVn%2BPfTIcMYT2LJRvjl%2BASadGiYB8vbDFzIgHXBwRl%2FF1MnAO3kJyXCG0tafzxJw071AMWAuPv4u%2B7FmULW293LmjDzCNYegeRycmEuIwGwADLSNElWONh2&X-Amz-Signature=66f30d20de4a3d457d10015c587b002de4ddccfca8e732214a802a5ac25507ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
