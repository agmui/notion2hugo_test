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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVU5HSTX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCzvtf1WS3O0Q5dAZyiBcstyCZqVJI6qkNKT0b%2BOW1VOgIhAP4G3FpXBN07HpkCroAmYcuViFle6TF%2BbPWxQrUqlLILKv8DCGEQABoMNjM3NDIzMTgzODA1IgyOQT6Y5urLZV8xgFgq3APHz8tFAhvjeCa3s8mftqHU214iORqukirptjhKw7K%2B1vNMYLqS43ly766kUCSu6hcjtBbBFpQ73ht4eLSrkOFRQVAqkyjFf7GUgPwwGMsxJvnyrutzy4looa0an6G84cJIBMJL8iFXD%2FiJqmxYjXbXnInP6%2B2zW%2BxI9N9V80Swg8gxHG7nNO7sbi6jG5gsKkMRQPqBZfT2dQMb8p%2F13AIuoxzS8MGJN%2FAwEna%2FdzVye%2FC9f306KsiV385CM2Sv3nD2XaMN%2Fyf902JEcCuVdicXNobYSVV0XbZirnIX6nv1yJoj%2FvQ1ST04Yk4ertFYxVmsGUAkNKjseHnuPPlvKdQ7G9RO6uV6pedEUl748Jw%2F8WtQYQtq0fTyOrr9ZUH%2Bft8VOWwlT3Ypn5Shocz6jLZOgKCE4SjAjEV0OtQP1YLVWyl8XtFR98iwgMCZnzDIW7NxVXlvs1Y0miCO0%2BxwD2lfKx1hndYGjFLkZgQmWL2jX0O%2BaU5TaxsYk2WgLDjjHgnua2fEp2DJzXgrHWiVGi37unteMhFUgDrPqEVP78CeGAYrn7%2FDO4dGN0ffSDrQGVHeBw%2BCdlPcGzhj1pZPWjd%2FgAy1SY7AI5xnAKn%2FC%2B8DRuPcax5ov8%2F5OXL9EjDOtOa%2BBjqkATrNAZ4pP4rWkDb0PJeogmVJTGeJQSq8vOJhOoOkFaN72EW26y1vjHppQ4orVpL02zsfUI1S2TdrZloRkrbE1yQe4%2FTDM6GIGMOLZrb5evKzerATuUkjyOJ3ilPVOjB2GGXYpFc1FPXzhxfTokokSnKEDQWPQaewj52hz6o4KBRwSCmQOj%2FBDU6EvOuFvLTNArV67bntNoVtzwPilbGm3%2B8m6%2F0P&X-Amz-Signature=828f3a17bc6c20051abfcd94a73ad5149766113f3df07e21156a9faf1a7a2b21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVU5HSTX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCzvtf1WS3O0Q5dAZyiBcstyCZqVJI6qkNKT0b%2BOW1VOgIhAP4G3FpXBN07HpkCroAmYcuViFle6TF%2BbPWxQrUqlLILKv8DCGEQABoMNjM3NDIzMTgzODA1IgyOQT6Y5urLZV8xgFgq3APHz8tFAhvjeCa3s8mftqHU214iORqukirptjhKw7K%2B1vNMYLqS43ly766kUCSu6hcjtBbBFpQ73ht4eLSrkOFRQVAqkyjFf7GUgPwwGMsxJvnyrutzy4looa0an6G84cJIBMJL8iFXD%2FiJqmxYjXbXnInP6%2B2zW%2BxI9N9V80Swg8gxHG7nNO7sbi6jG5gsKkMRQPqBZfT2dQMb8p%2F13AIuoxzS8MGJN%2FAwEna%2FdzVye%2FC9f306KsiV385CM2Sv3nD2XaMN%2Fyf902JEcCuVdicXNobYSVV0XbZirnIX6nv1yJoj%2FvQ1ST04Yk4ertFYxVmsGUAkNKjseHnuPPlvKdQ7G9RO6uV6pedEUl748Jw%2F8WtQYQtq0fTyOrr9ZUH%2Bft8VOWwlT3Ypn5Shocz6jLZOgKCE4SjAjEV0OtQP1YLVWyl8XtFR98iwgMCZnzDIW7NxVXlvs1Y0miCO0%2BxwD2lfKx1hndYGjFLkZgQmWL2jX0O%2BaU5TaxsYk2WgLDjjHgnua2fEp2DJzXgrHWiVGi37unteMhFUgDrPqEVP78CeGAYrn7%2FDO4dGN0ffSDrQGVHeBw%2BCdlPcGzhj1pZPWjd%2FgAy1SY7AI5xnAKn%2FC%2B8DRuPcax5ov8%2F5OXL9EjDOtOa%2BBjqkATrNAZ4pP4rWkDb0PJeogmVJTGeJQSq8vOJhOoOkFaN72EW26y1vjHppQ4orVpL02zsfUI1S2TdrZloRkrbE1yQe4%2FTDM6GIGMOLZrb5evKzerATuUkjyOJ3ilPVOjB2GGXYpFc1FPXzhxfTokokSnKEDQWPQaewj52hz6o4KBRwSCmQOj%2FBDU6EvOuFvLTNArV67bntNoVtzwPilbGm3%2B8m6%2F0P&X-Amz-Signature=d5261bbeaf2124a4118c4e9f269b39b4fdf5839adb137a26ec51bc3fcc999dab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV74GUFJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDBBoMpB4Lke%2FOQuk0pxlLeaMCgzhbtYBGsZdaM5gXcDgIhAIwjd%2ByTHHTlR8zH%2F0L3qDvU6vu%2Brxc8o85%2FnLbGeWeUKv8DCGAQABoMNjM3NDIzMTgzODA1Igz%2BYa6ieQ7o5Elox6sq3APLH1FipcRk5cuyEo6MuzIwLWIXdl%2BKXhQ3DphljcmlHi4UHK7Nu0ZFgYGDDffRxFIHsk7naI3fF%2F%2FMNwArRAdUl37NevjhfNR3SYXKdkqcakErY%2FWxumUeala2PpTrNkARdYtBLKyXbFJh72zdG6bZ32WpYJuiI2j%2FjsuyIYSBBmGgoZOVZWyeWabHPKxBDCdq3eGNMfqzwZc2UVY4kqR%2FVKnHflNVfyc4FcDdg3swrXlpw9rP%2BYYQecDRfu2lDKhscJ1bwPAwlB%2FbCw4s2fjbewyzfq4tLkLC9PveZFc6rs3i6ZLY%2BhrPRJq5xvNLrQpyS%2FjOY6K%2FcdcFrk%2BV5w3eJaNEgTZhIrheHneizDfS4MUsik3wUMYxRH1hbyZ2PYcSpB%2BjbWkC1V8wb%2Bi3pB9bEZewXnPqxCv6nWbNgBatKfYhOtewsT8fnKEtT7koIK5H4gmWWPgIkc6VLNHSq%2FemR2Wuz8Ep%2Bh%2BhebcmM%2B%2FPvNRSaF2PuE4cWkTBKwz5A1i7fnSmerc71GsNHztsHR6at7JENnta5f9y%2BIDF6ZVU9CfOoOj2BdYN7NxqhzRt5y%2BaQjBq7wpnT5Sb3s3j97Hd9v0apbXO5jNemIf8vORBEDB%2BdXmb8TeRDAcpMDDOlOa%2BBjqkAYhKkpjTqlqZvsWMxVu1Tk%2BCat0kQy3Y1tKF3RLeoiFpFRLcFDlssP7dttTT9PFw2PVT9%2F7l03fHz08%2Fo0X7SR42%2BgzSE2HnFE%2F1pgwh6v86tfdnBlEepLvP6XcH6cKhZNfi%2BUfScQKmx%2FNSWkMZhT72jANhkBi2z6nRyRtGk%2BHbCKzxe3SDtheXZNfWuyo1nH0Oq2zpD0I9GUKZsKWgzlperS1g&X-Amz-Signature=59d080d0bfe6b092ed9824e05fd99be14950f873c083d86b09f0f262f72beb34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR76TPTT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIEf95oBIN%2FciI7JlixcLATResG6VUC75wihjFsE9SvItAiA%2BBjRgCWsmlN6%2BKMCWcZew7ggrQ2xiz73JuTfri%2Fd9pSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMnpGBbO8SfYrXIfsZKtwDf5EnyddPUhR%2BenMC2oCblfSBxCsFvxiHhyrZdEMbwV48%2FEK8sCCCD%2FiixuSV3O2GJ4Z4g8qih5ANlNo%2Bj6yyGYRh8BaA8hlHWM%2BffX47s5%2B5J%2BCrDdvFO0nJzu%2FJuRrqX6CL02J3TVn9C6OaIUqRyv%2FfmTCZ8H8SwBaNreZXz5gU5iuLo3AiyfhEMQtPJWXjN2%2BMEH3ClJldjiJCfoBc%2BdW%2B8cQuTt732cAMLA1KlTMSUEi0q3R0CDWiN7XnLkhTBbK4Cp1QC9wM6Mb%2BW7JF%2Bas7y8aoo9TY%2Btnj1tKDgUNVoTE1ueZIN3RB%2FF6jAsj8%2FRUZzZsPJpOL1E%2By3tt1cTJzE9nm7%2BRlFPo4%2BHbAcwOINGDcyk0RucrkdKsuHTi0xyh2MIzh%2BMVw0qjbaWPOJ%2B0q2juI6qTt2vMsISOmyDRPTGLJgx1esPx5QxGhLsl0ramZ%2Ff1PdeHGdAbnkCvFL8dLVVS%2FUP5bNEWBhtwbxzMciY3HalEz7NWhKZ%2FtvS1Jpuwf2X7I9uSDKMDqJVc%2BG54JJIpge2GtwmlCWU1PTNCOYbNodILBKy76tnB%2B9S3%2BjrRYvKiJpRcX2xmtjD1A8u3bv03j3iJBQRUuslpzdHCksYMDrh1%2Fh%2FFb%2FWYw7bTmvgY6pgENl2lAX74%2BXI6STvlk2p9R6Zkfi%2FTmmuPDAht1TuKS2hInIoDansxCwFZLGC51hBq7hyX4f7l8NmTg3SjO1Ccy%2BgsURhbJDJvPveQxdXD2ydKIq1VaLLkhrGOnlHY5539NdnVSuT4v%2Fr1TIxBqY%2FkH5F3DmcTQVgicO4mODXBJk6tJBLyy1P8pVj8cwR%2FfX3qzCoo%2FfLTEcC3l0W72uiUQsJwU4%2Fsy&X-Amz-Signature=a28e0c69064daffc2cf3b71197a5864cc0cb795a9640d9f9ca23f7df5cf8dab1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVU5HSTX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCzvtf1WS3O0Q5dAZyiBcstyCZqVJI6qkNKT0b%2BOW1VOgIhAP4G3FpXBN07HpkCroAmYcuViFle6TF%2BbPWxQrUqlLILKv8DCGEQABoMNjM3NDIzMTgzODA1IgyOQT6Y5urLZV8xgFgq3APHz8tFAhvjeCa3s8mftqHU214iORqukirptjhKw7K%2B1vNMYLqS43ly766kUCSu6hcjtBbBFpQ73ht4eLSrkOFRQVAqkyjFf7GUgPwwGMsxJvnyrutzy4looa0an6G84cJIBMJL8iFXD%2FiJqmxYjXbXnInP6%2B2zW%2BxI9N9V80Swg8gxHG7nNO7sbi6jG5gsKkMRQPqBZfT2dQMb8p%2F13AIuoxzS8MGJN%2FAwEna%2FdzVye%2FC9f306KsiV385CM2Sv3nD2XaMN%2Fyf902JEcCuVdicXNobYSVV0XbZirnIX6nv1yJoj%2FvQ1ST04Yk4ertFYxVmsGUAkNKjseHnuPPlvKdQ7G9RO6uV6pedEUl748Jw%2F8WtQYQtq0fTyOrr9ZUH%2Bft8VOWwlT3Ypn5Shocz6jLZOgKCE4SjAjEV0OtQP1YLVWyl8XtFR98iwgMCZnzDIW7NxVXlvs1Y0miCO0%2BxwD2lfKx1hndYGjFLkZgQmWL2jX0O%2BaU5TaxsYk2WgLDjjHgnua2fEp2DJzXgrHWiVGi37unteMhFUgDrPqEVP78CeGAYrn7%2FDO4dGN0ffSDrQGVHeBw%2BCdlPcGzhj1pZPWjd%2FgAy1SY7AI5xnAKn%2FC%2B8DRuPcax5ov8%2F5OXL9EjDOtOa%2BBjqkATrNAZ4pP4rWkDb0PJeogmVJTGeJQSq8vOJhOoOkFaN72EW26y1vjHppQ4orVpL02zsfUI1S2TdrZloRkrbE1yQe4%2FTDM6GIGMOLZrb5evKzerATuUkjyOJ3ilPVOjB2GGXYpFc1FPXzhxfTokokSnKEDQWPQaewj52hz6o4KBRwSCmQOj%2FBDU6EvOuFvLTNArV67bntNoVtzwPilbGm3%2B8m6%2F0P&X-Amz-Signature=215d6e1900f0f9d8ecbf23aecf4a3f80962e8fc8b87be77df036f0fb41bece92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
