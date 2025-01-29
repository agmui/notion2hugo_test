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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIJZZKQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD96iqBFcclhcO07bhp2VvO53UOk9gBDR4M6cbpaEaqCAIhAJCrcWot78cnNaN8xvUzH9xYssxgqVTcLv%2BeEprwNrR3KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY0Z7Du0XksQWt4sAq3ANDMd6%2B5PBnRrChTjJdp8bP29J%2BSRNVyf7X2fhngh5MJJJa1Y1KwsHfF7XdBNnaSVjx5xjqU6A7lesioiaIgAPDKeREp8SlF2ZDF3F7L2cHIpeF3Z80dQmiL90JVppNpPXr2x3U5UkjT5fw1GOUlZiP8YW0rdpgK5xMAWlsifROxjGvcidf443Tm3GYOJNJqGeY6Wq7pcb%2FmERTQAdv4PWuULn04%2Fz7hFrpjJN%2BXdoo4%2FD8wiowrhksTyE5IdWtji9hBAT2TYwy0HJQf6vujHGbX1q%2BD2GfQ2K%2BuM3X8W9EkON61NC5fMX49WewuEf%2BymkCr0Kb8KtyBRxW%2BoV8ihfBudVJ1l1dEhJ7Vj3MpdJ%2FMKDANF%2Bsef%2BabILT7GTvqsZDj64t3DIhw%2B5Yq6J76B8%2B%2BNp7Gv8qpRgzHL6k1KWvuL%2BwCNU2G1VqqJdpO16Jh08K3T6i7uW%2B5Aa8ZHap7ZcmKie14Kh3fzhmqLyi7BIHV1HuxumUyauoIflCAMgJMeQmXRj2%2ByGbGrPb1ldNOgNmk5MwTabO3UUO6PgvayjtEtjlDwGjbbx1YILy4fA4jx9g7YfWZeqoLxzwCPCaaJdCVbu8D1iEGkiGc7FPSWrkd2o1yXvkeX8PW65U4TDchOa8BjqkAXW5AU2y1g4g21CZE96QFRvcxALWtohH%2BtE%2B3zeXF87XpHL8rOMUVTwsYuMhAfeVctZL9woPN1rFMpzu2CPpq%2BmzgzX9VklWi4%2FeZNULpQz2RhfISHY1BlHN%2FeJ5OjDsiiD87VLHXUykNt6Im3SrSL11UNkdo0o6OQW1q61u6MHeDcLLv1LvVLfgmrQWzH6GJKr4V4%2BnIM2JImDEQ7byu0TyNUfw&X-Amz-Signature=54743318c08f1683f2a4c31fac9f5cecdf9543dab0648420371a30609c35b88b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIJZZKQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD96iqBFcclhcO07bhp2VvO53UOk9gBDR4M6cbpaEaqCAIhAJCrcWot78cnNaN8xvUzH9xYssxgqVTcLv%2BeEprwNrR3KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY0Z7Du0XksQWt4sAq3ANDMd6%2B5PBnRrChTjJdp8bP29J%2BSRNVyf7X2fhngh5MJJJa1Y1KwsHfF7XdBNnaSVjx5xjqU6A7lesioiaIgAPDKeREp8SlF2ZDF3F7L2cHIpeF3Z80dQmiL90JVppNpPXr2x3U5UkjT5fw1GOUlZiP8YW0rdpgK5xMAWlsifROxjGvcidf443Tm3GYOJNJqGeY6Wq7pcb%2FmERTQAdv4PWuULn04%2Fz7hFrpjJN%2BXdoo4%2FD8wiowrhksTyE5IdWtji9hBAT2TYwy0HJQf6vujHGbX1q%2BD2GfQ2K%2BuM3X8W9EkON61NC5fMX49WewuEf%2BymkCr0Kb8KtyBRxW%2BoV8ihfBudVJ1l1dEhJ7Vj3MpdJ%2FMKDANF%2Bsef%2BabILT7GTvqsZDj64t3DIhw%2B5Yq6J76B8%2B%2BNp7Gv8qpRgzHL6k1KWvuL%2BwCNU2G1VqqJdpO16Jh08K3T6i7uW%2B5Aa8ZHap7ZcmKie14Kh3fzhmqLyi7BIHV1HuxumUyauoIflCAMgJMeQmXRj2%2ByGbGrPb1ldNOgNmk5MwTabO3UUO6PgvayjtEtjlDwGjbbx1YILy4fA4jx9g7YfWZeqoLxzwCPCaaJdCVbu8D1iEGkiGc7FPSWrkd2o1yXvkeX8PW65U4TDchOa8BjqkAXW5AU2y1g4g21CZE96QFRvcxALWtohH%2BtE%2B3zeXF87XpHL8rOMUVTwsYuMhAfeVctZL9woPN1rFMpzu2CPpq%2BmzgzX9VklWi4%2FeZNULpQz2RhfISHY1BlHN%2FeJ5OjDsiiD87VLHXUykNt6Im3SrSL11UNkdo0o6OQW1q61u6MHeDcLLv1LvVLfgmrQWzH6GJKr4V4%2BnIM2JImDEQ7byu0TyNUfw&X-Amz-Signature=2c1bfbd032f3e520c2e4a37a37445ef42748480c9ef602b2209635dc2fec3bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U5NHLW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIF5uCr0zrwZMP%2B28ymMCMTxIfC%2FEUFsS3RiLuZbEXxjaAiEA%2FyumjLtvDdTX9tnxzKcF2A4uRPYBmJCWG250RykXdkYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGWDzkmjSF6DzeNfircA6EgCdQ0O3Y8tYYcSsWVzpEqL9lE74hH%2BK3qN1Fyic1Ur3jUM0u1dQDBMl8qavrVDsbwniM%2FapaVagTTQFYJGbxtzq2GoQ8tUubbP3%2FdgL9FrLFjLqHJzTksI3DznZJvckFw1WmXnta2ea8R%2Bf4e9fv4gTKUbnqAR2xW5COPH19YRXsm1%2FJ%2BMJCv2lBHnc1DH7b%2BW1nrCTPj88Ks2Am5%2FVjM3olHlkC%2Bs6jSR9T4rL4BVxPTJogQVOYHh4tgZVsLlqxJ238%2FgTQ%2BO%2B5Wmya0zTDnLonguz%2F4dWtIXXn27pUYKr4DM%2BCEyBsWdwAN9iibpqukqxmbIJ8zmoEykelP0R%2BHeA47rSFZPigk7d8h5D9YINCVGouY9Nt%2FNReRLiLUNWp%2ByY5linZLOzUhgHIitZPfvxjdnWHAGLIhmx9pChgdN9uLpBepfH5fpbAXr1szwszlE3X2grmDXBf6KYxmpF5UEDyDJV7XbOqHF2OYmmfL%2FW%2BfhOLzApEA7KgKxiuMjbFqE%2FqXdES1%2B1iEU5LBwTw%2FC16JmXLu8HBG538xHdKdhMTyR2infoyH0XIANydwNffx1h2gqa1R7uUu6XMJD%2BK1ZHDLeEAytUCnDJZs%2BynmbT%2BCQ3BIU76n4vD4MO2E5rwGOqUBw2dnZJZjs9JDR%2FHpVyOjwYm8PZYaxYXNMqEksx6A%2BECLWb4xAq1%2FTBKrdGJPM2QsByu6iavwd3DlfllZHynRC%2FvHBHFla%2BGIBbgNT4%2F8dSXOWIVCoK0yQBQabjEAU2KDEbxtyH%2Fe%2FVvpkMoSNnqsH3i3P7%2BM5ScqYzWFyP%2BivglnjFho9BO3l7dWq5%2FUp7vXweApG%2Fw4wwbXRG27atzmVBkTnhcc&X-Amz-Signature=0f78db1c7fbdeb32668a06275b1a56b062347168b70941bc6a4208049bded5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLOFM62%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCdHUQX42F%2BitjT6xKmsi06EtLdsdr6y3bfrW%2BAyuvSGQIgHFjfv7GCWmNT0jRrujYLGOz5QqMSGaAK90pcDevcXP4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgaIYcYj%2BLuCiWMhyrcA%2F4cVT%2FCGES1t75mUAqUGaXvXGKFHf7H7B4rzmDQBTCUWWPL%2B5FJWayvOz3JjgQz1cvHVk87iAJQ%2F02OJKGuTpXOkY%2BYKlHVLENKJjSBHEH1lUDDXSwvbL5npSz9OUcKfVj1r21KpYOmEe%2FPOXDq4ki%2Fr5djPq57Pbc1wJERngY4%2B1qnId2ipEKE5wR3pQfp2zk1sNTMjjqVkBNbOHK4s62SxkPYBSd6jHFrhAL5AxbIWRdL3YLX7JPQzXhSSy10%2F%2Fo7l%2FLC1lZOrVR%2BMJBQvb6G7agPgDvFHjK%2BRPVql4n%2BjWEmdfJKNb3dzW0m1JFrwbibQr191g7u8aTFabzF16cokn0iY%2Fqb2EkeU4GIHdwjRTPwIEkVujQHUKNQTYdNzm%2BOxu1%2F4iTUhC8OgoBXnl1InjEljMvojk129nLsFwDd9h%2BhijmyZI76sYMI%2BQ8VjAzLs%2BNJjsP5V5zEreNUwFFJe6WaI3gq9FtrNKFDxR4dbIl0Nt%2F1NHGWgykOE6ZPxJLli1dlY6nZu7GK2nE87RWueDdQSZfdoVJJpVIFq5v4ySdQOM79%2F4OS5ZZiJa05Fi1tO38dS1w0YpAM6vpZXONelQiJvtLSAN7QqR5xSZ1qe%2Fgwz99AwEHHMYghMJ%2BF5rwGOqUB2SyPMvTrdjLtga2Qi1fNOe%2Ftt0WEEDjR%2B7DALdl7uS5MGstc4QVhh%2BresJ9lScaQuDxPHKI31fEBPg230nN3HEDeQl5og0eiCyxrqx%2FvFpcrrupiasrm7EjtwIDsAPWTTUhnvyi5sYhNDWcelT9fHc9YhDbYQLfpguH80EvzmoUpEX4%2FH3%2FdwRHrdu0moeIF%2FsPObCYkStFN30Ni0xpAmEP55ef3&X-Amz-Signature=bdc40bc86db6fde0d5860b2f6d92d8fe1b54ec593c26dc6f6863fb0adc1956bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIJZZKQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD96iqBFcclhcO07bhp2VvO53UOk9gBDR4M6cbpaEaqCAIhAJCrcWot78cnNaN8xvUzH9xYssxgqVTcLv%2BeEprwNrR3KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY0Z7Du0XksQWt4sAq3ANDMd6%2B5PBnRrChTjJdp8bP29J%2BSRNVyf7X2fhngh5MJJJa1Y1KwsHfF7XdBNnaSVjx5xjqU6A7lesioiaIgAPDKeREp8SlF2ZDF3F7L2cHIpeF3Z80dQmiL90JVppNpPXr2x3U5UkjT5fw1GOUlZiP8YW0rdpgK5xMAWlsifROxjGvcidf443Tm3GYOJNJqGeY6Wq7pcb%2FmERTQAdv4PWuULn04%2Fz7hFrpjJN%2BXdoo4%2FD8wiowrhksTyE5IdWtji9hBAT2TYwy0HJQf6vujHGbX1q%2BD2GfQ2K%2BuM3X8W9EkON61NC5fMX49WewuEf%2BymkCr0Kb8KtyBRxW%2BoV8ihfBudVJ1l1dEhJ7Vj3MpdJ%2FMKDANF%2Bsef%2BabILT7GTvqsZDj64t3DIhw%2B5Yq6J76B8%2B%2BNp7Gv8qpRgzHL6k1KWvuL%2BwCNU2G1VqqJdpO16Jh08K3T6i7uW%2B5Aa8ZHap7ZcmKie14Kh3fzhmqLyi7BIHV1HuxumUyauoIflCAMgJMeQmXRj2%2ByGbGrPb1ldNOgNmk5MwTabO3UUO6PgvayjtEtjlDwGjbbx1YILy4fA4jx9g7YfWZeqoLxzwCPCaaJdCVbu8D1iEGkiGc7FPSWrkd2o1yXvkeX8PW65U4TDchOa8BjqkAXW5AU2y1g4g21CZE96QFRvcxALWtohH%2BtE%2B3zeXF87XpHL8rOMUVTwsYuMhAfeVctZL9woPN1rFMpzu2CPpq%2BmzgzX9VklWi4%2FeZNULpQz2RhfISHY1BlHN%2FeJ5OjDsiiD87VLHXUykNt6Im3SrSL11UNkdo0o6OQW1q61u6MHeDcLLv1LvVLfgmrQWzH6GJKr4V4%2BnIM2JImDEQ7byu0TyNUfw&X-Amz-Signature=10a15aefe4bfc55d2236f6eb9b9e34238182a76ef142f3331c58745aef17ba10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
