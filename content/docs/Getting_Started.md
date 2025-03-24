---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REINGMPN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7MONgDDdvxBtYRNqrULZu6YXOtrqagly98hHWQjk93AIgYD5YibsrX0EsAP4eoaLm%2FR57heZsZkgZE5nd5uJz1p4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAYAFAbdjiMV2Ra5ircAyAQlNSlmaYF8sfE4KIdYbJJINZgcI%2FYjTM14hdr%2B5O0EKyhs%2BIkMFpaRDPh2dHLb9VZVhsdLZjAUz20amlVgtgUhZiDsVBYYYSirQ7bbk3W65s0MsWWba6uLObKFOBJcqCIVSY7t8d3yTUrUHMOBbOtnEiNyI%2B9Wtk74mmMglmkudca%2B6iJo%2FAQWMPZtIhymOdEFEHohAdXdZ93ea9MfpbiYAHx%2FAkaIUAUXKaw05WzMLhXt0I9EmVNWOCxqhzYsDfm%2B%2FYOyPiRGNb9YBnV3OuUsG0cs2PzJmm%2F7U1OhOOOVz6XE2MataxjGJ4KrSr6mlab2wPw7jkTRY5PrF%2BcdqGrhzM9lrbh5LlUDWfOia7YsnknEF7%2BvjZW4054AHG4qq%2BSS5Zt%2BWJOVXDKZv6MU%2FqN3B6mlqy3i6s4xVfSJiXqpWYknuRV9dg2%2FKWI9wrbNosjMIl%2BeAqOo9AkokVs3Wp54Sy4m3mGRraUA5gx73nURlcZ2ryzTPsvb4QNDMw6pwBsK4THsrn6bJeTXii2d5iZHQrawNMrgp0BUwVn70XQZgQWZBiLJdKaogtSv3IyDCJQdPPfBMMG33x0NEYD4q6MT1m5HZaefrEzf%2BDUKCmQr3SRh76DhRfjr0psMPvig78GOqUBn4w7Up4F4kmmmQXO3qkBptRvYQ8m1UXirr9CY5mf9BhRL%2FSFE%2Fm7KIrhXs3pisj27P1HVy5MLLLZI0Muhq1KBkT5XT9Ei2nX0IeRoKozTyII%2FbqgEcECKGDV%2FECdAZ9GW9%2Fso2zaCW%2BsuMQrifEjclkEc8kqtuALcDPGO7ZprJSfVf7VfiLd1SBIRDl0s5xMf%2BkXgyLvZ3CR0%2FCXUKNN4d7sUtGx&X-Amz-Signature=409b3ba181cdc4999f7ce79e2b4b12b3f837064b655c30324d557abe9ccabf8f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REINGMPN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7MONgDDdvxBtYRNqrULZu6YXOtrqagly98hHWQjk93AIgYD5YibsrX0EsAP4eoaLm%2FR57heZsZkgZE5nd5uJz1p4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAYAFAbdjiMV2Ra5ircAyAQlNSlmaYF8sfE4KIdYbJJINZgcI%2FYjTM14hdr%2B5O0EKyhs%2BIkMFpaRDPh2dHLb9VZVhsdLZjAUz20amlVgtgUhZiDsVBYYYSirQ7bbk3W65s0MsWWba6uLObKFOBJcqCIVSY7t8d3yTUrUHMOBbOtnEiNyI%2B9Wtk74mmMglmkudca%2B6iJo%2FAQWMPZtIhymOdEFEHohAdXdZ93ea9MfpbiYAHx%2FAkaIUAUXKaw05WzMLhXt0I9EmVNWOCxqhzYsDfm%2B%2FYOyPiRGNb9YBnV3OuUsG0cs2PzJmm%2F7U1OhOOOVz6XE2MataxjGJ4KrSr6mlab2wPw7jkTRY5PrF%2BcdqGrhzM9lrbh5LlUDWfOia7YsnknEF7%2BvjZW4054AHG4qq%2BSS5Zt%2BWJOVXDKZv6MU%2FqN3B6mlqy3i6s4xVfSJiXqpWYknuRV9dg2%2FKWI9wrbNosjMIl%2BeAqOo9AkokVs3Wp54Sy4m3mGRraUA5gx73nURlcZ2ryzTPsvb4QNDMw6pwBsK4THsrn6bJeTXii2d5iZHQrawNMrgp0BUwVn70XQZgQWZBiLJdKaogtSv3IyDCJQdPPfBMMG33x0NEYD4q6MT1m5HZaefrEzf%2BDUKCmQr3SRh76DhRfjr0psMPvig78GOqUBn4w7Up4F4kmmmQXO3qkBptRvYQ8m1UXirr9CY5mf9BhRL%2FSFE%2Fm7KIrhXs3pisj27P1HVy5MLLLZI0Muhq1KBkT5XT9Ei2nX0IeRoKozTyII%2FbqgEcECKGDV%2FECdAZ9GW9%2Fso2zaCW%2BsuMQrifEjclkEc8kqtuALcDPGO7ZprJSfVf7VfiLd1SBIRDl0s5xMf%2BkXgyLvZ3CR0%2FCXUKNN4d7sUtGx&X-Amz-Signature=0c40a5538034255ba7d17a3180a5d417d64e30c47251f767c3ade7f77c6c1004&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL3RKYA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt51bpNBZiPFp%2BnVBpV8yhSPhaUEyBMjYO1NTRRQQtZQIgMtT%2F%2FFnhS%2B6p2s3gta%2FX1X50bfgFVlgHsuGjRItqhB4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvLUIlZlliJY9pZGircA0n%2FjPkrj1vyM%2FjknajGiDc8QNeqr1OXlnvW5Hs9y0yBNLJKW4ypAEaVMy%2F1WsL2r%2B6YnFS%2BqG9eBxN3yBkHD9g98TayJD%2Fu9NGhUM9OyKe8OmVJXTRwGmldujxmks9QwKURX0r%2BYlin8b9q3YxfuL7ocFpKUhZKPMn6ta3m6GMWve%2FP6m0935MzHTVarOH%2FNZ6gi3V3%2BA4Pc8hnmcSvhfhrnVnG3kPQ9ZiIXpU8WsXeNJP4qdPgaxgdDjT9GA4smQCLkhQTxR1FjaNP7SQ8odGZWFR164GK6NX3GwJpCuJwKn%2F41mH9uSH40SRMIAAivMyhVHimWxi3vYxF1n3imPgfCi7Me4w7yzDDg0mang1fNDOEumGEUz1nisOKUqyabY%2F3mG0yQXAFy0c02Cx3b8UrGtksGXjeaVuJQHmLaOc5uQlIGMt1449OcL1zHSggLI8l3MDaK%2BCrV2TB1A%2FZjAkPKR8DkV8e4MoXiNry1AS1x7BDBMrUtvOG398D95YgxsEpJapcQqK6E795vCdu9dcDvJgAqGZBUnE13v2Jcf59goiv94Cn6fKNACELL25MHy6%2FGcCKQvndOjPdhqQRn2qfSGUyUdlIKTy%2FVGGj%2BJHwNKUyvawB23Ufn4JqMI%2Fjg78GOqUBL9Z9fek2SK9X3EQyKw4Xu%2FV90KXv0buEIhIRh9f9sXf6I770vRdFvS2TdO%2FvPDJdnkuDjRVJTNLXx3zCqKkhPluHiOwT5pqSFW9t5Tx%2B4fDixkIlEmz9kZMk3uXY%2F%2B0wzf5uogfe64BBxXl1tiw9zJVItgXuJdVK6r4z93PVLLGdtdMrcDshNaC4tR32jViP6VUo2dCapZp32u%2FcrT1Rrs6ISbYX&X-Amz-Signature=cde6fee0cbcfc34f5825f1534e2c9cf2741306bb7299b6c564a9370bdd08cdab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLAXAZ7N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCVmwZFgoV%2BfrEkqqA04%2FkI%2B8wOmJaMM%2F89cG4aYA9zAiEAlpre%2FS8LGNU1UK6L9ybyZDz3wZ7NLMIb7CFrozeq%2FhUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1ewk4AhXhWgaVttircA0wBNwJDwi%2F7lGq4ea4rE%2F8CYWMnBnolyGtmekUAoMSDRa3qlz05AshLkFBdSpegt%2BLAmWJW6wMDzJe4GCU9gvZMBmaAfImBQTYmfzwRloyoied4seDegzJ32LsqunN6XGulhbvukdeKzx85xkwJaPRFfc4Eru19VK97IUVo0za%2BAkDAYm7qEyakDS5bE81Vx4y5b7Or1g6ufNba6BdVM1kof8nt%2Fgr3ppO9SF5bi0p%2FV1teTuXfTotPPEcEpWWenFwWUVQLYzQrC%2BnFHMHkqz6neh8GfWyNCBkjTBUTxJ6yOfWa9YeCPX%2FFxPa10aL9uO5HuvCcH0W3DS3LhXvJoJhc9ucbt4cwk0AriI9jcofP53M2WygqRK8e8h%2FrXw9jEnzoSmkL7Z4iQ3Y%2BpUnVVD7V9jWH8QEN4TZtZGziiJUBlsiwz8UWMYr2welqDCAb10cOHcuHQYxWBT8V9yd4yliH6x47FdY6tu%2B2KtckrhLNmAAId%2BkAAvw0i41xWKhPXAyUsqFXo0Rx%2BeATc9J%2Fq5fhnJk7W4mcykVphgKqEoBygB9%2BvlJziqVLbSxjw6jZl0mUGrOvDgUJoJn3xx0Y7qwUkQAutI5Xti4twaUbz7uQc%2Flore8GsrcR5xOFMLfjg78GOqUBpxzrIQT0uqVzQH%2FE1wR11OykWDefX5nD%2FRA830VfLY918lkPOTJCnPqg6LduVWCWJcygn3QrcHZ2ffCGNipG0Keoovofdujy%2FEFcppW6srpJOxESPYS26yicrjnFFptSrF1yfJD9G6aUpKDPBZ61EoYYGMXU7jJgZgfvRL%2B7Huh3upzyQPysDCcbVu2TibU1SdTzAkCXKWubBdLrnh3qml%2BsI7xk&X-Amz-Signature=5142028c3cadca76bb580862d352df46adf3534224cc09bf92b1e430a8b9eaef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REINGMPN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7MONgDDdvxBtYRNqrULZu6YXOtrqagly98hHWQjk93AIgYD5YibsrX0EsAP4eoaLm%2FR57heZsZkgZE5nd5uJz1p4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAYAFAbdjiMV2Ra5ircAyAQlNSlmaYF8sfE4KIdYbJJINZgcI%2FYjTM14hdr%2B5O0EKyhs%2BIkMFpaRDPh2dHLb9VZVhsdLZjAUz20amlVgtgUhZiDsVBYYYSirQ7bbk3W65s0MsWWba6uLObKFOBJcqCIVSY7t8d3yTUrUHMOBbOtnEiNyI%2B9Wtk74mmMglmkudca%2B6iJo%2FAQWMPZtIhymOdEFEHohAdXdZ93ea9MfpbiYAHx%2FAkaIUAUXKaw05WzMLhXt0I9EmVNWOCxqhzYsDfm%2B%2FYOyPiRGNb9YBnV3OuUsG0cs2PzJmm%2F7U1OhOOOVz6XE2MataxjGJ4KrSr6mlab2wPw7jkTRY5PrF%2BcdqGrhzM9lrbh5LlUDWfOia7YsnknEF7%2BvjZW4054AHG4qq%2BSS5Zt%2BWJOVXDKZv6MU%2FqN3B6mlqy3i6s4xVfSJiXqpWYknuRV9dg2%2FKWI9wrbNosjMIl%2BeAqOo9AkokVs3Wp54Sy4m3mGRraUA5gx73nURlcZ2ryzTPsvb4QNDMw6pwBsK4THsrn6bJeTXii2d5iZHQrawNMrgp0BUwVn70XQZgQWZBiLJdKaogtSv3IyDCJQdPPfBMMG33x0NEYD4q6MT1m5HZaefrEzf%2BDUKCmQr3SRh76DhRfjr0psMPvig78GOqUBn4w7Up4F4kmmmQXO3qkBptRvYQ8m1UXirr9CY5mf9BhRL%2FSFE%2Fm7KIrhXs3pisj27P1HVy5MLLLZI0Muhq1KBkT5XT9Ei2nX0IeRoKozTyII%2FbqgEcECKGDV%2FECdAZ9GW9%2Fso2zaCW%2BsuMQrifEjclkEc8kqtuALcDPGO7ZprJSfVf7VfiLd1SBIRDl0s5xMf%2BkXgyLvZ3CR0%2FCXUKNN4d7sUtGx&X-Amz-Signature=3c862bf9d26bd20d23d9c3e676ab9378f4e1e06af07edac12801bbf48664a5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
