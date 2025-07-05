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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYX32L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDe6N76Y15P2NNbvNGyzu4OgJFUGckbzxN%2BLO7kPcpWqQIhAK2KtZqhtnWLf5SnhHZShEPepFhiOhSSo6BiHM7bKKcYKv8DCEYQABoMNjM3NDIzMTgzODA1IgwJstin4eXp%2FRYGINkq3AMp56lSFWJz5hdO4CfU7adRr%2B64ibx%2BOCLvrNc9BkgTmLnLNO7c5wAMPaNELyKrIDdRd6Qww4KqaeErWWLdZF7%2B745fjxqOpijsEHpAxX2VUWJpKokEIVUizrcRhdG1CvGBUUbbOlcim3BmiqX3%2FHeG6gXGj1PhW19uqUqxRHicsPS%2BfYK%2B1kU5s2drGQV%2BZq3Oz6IzUeKifndDWmo3ZmTNAi5APyugr3bC7AD%2BESxgEWgZiIMKN19zR7h%2BqO9MtixX%2BWRha9LoJJNMG8rJG0%2FqjR%2BycfbTBas%2FhWiaQ8AZHpREg92kjNtLUo109OyyuXGC%2F921V%2FDTq%2Fr9ODQT7P1i2Ox1%2B9pd%2BA%2F2yRoPHXaCT52ztJEDoHPsKuk4OpSMpnZAgtgypGRA4JBmfbDAdFXPl88tTMSH8WTjBmyrjGutkboUeVJcuc%2FKbMjrN4%2BAa%2FT5p9JfldNDfurhx%2B14wQyCeGZoBttZh6Sf6oCCSILjT1vVZYFVpalvReS3rfmpoXmcy%2FuKxKlXB9iHnVVGb9TKZgKJHoYIySfUsBsv2eukvXZLVsHuIB1oAE8hRpuA1awPLQlUo8cv%2FdZA09PqAnlnQfKwZsUrKJ1XhBKdmqw8gNF6hmWyOB0AMB3LGzDIxaTDBjqkAR7kKqO4l5r9rNM%2B0A2l8Z40A0%2BLHjcJwYvBFVF9cHuUlTY0vLSJ4eDFOsJ%2B%2BEW5nc78RqOSMIAioK%2F9iymf5yeJ5noOMdQUsprS2IUMFVCTgYqSjMgLpxfT3Tbj%2FvaDOvQaeTsQqMcAPi0GxrlH9tXewYM30Z3XC47IDiSbI65By%2BdyN%2FEH45RSOSitoMkyeP5fMEgbenABietQS%2FkmuHj5iyuy&X-Amz-Signature=8ed5e2af12a6fa50250e97d48192445a64121166d76ba49b2e50a76977af7696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYX32L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDe6N76Y15P2NNbvNGyzu4OgJFUGckbzxN%2BLO7kPcpWqQIhAK2KtZqhtnWLf5SnhHZShEPepFhiOhSSo6BiHM7bKKcYKv8DCEYQABoMNjM3NDIzMTgzODA1IgwJstin4eXp%2FRYGINkq3AMp56lSFWJz5hdO4CfU7adRr%2B64ibx%2BOCLvrNc9BkgTmLnLNO7c5wAMPaNELyKrIDdRd6Qww4KqaeErWWLdZF7%2B745fjxqOpijsEHpAxX2VUWJpKokEIVUizrcRhdG1CvGBUUbbOlcim3BmiqX3%2FHeG6gXGj1PhW19uqUqxRHicsPS%2BfYK%2B1kU5s2drGQV%2BZq3Oz6IzUeKifndDWmo3ZmTNAi5APyugr3bC7AD%2BESxgEWgZiIMKN19zR7h%2BqO9MtixX%2BWRha9LoJJNMG8rJG0%2FqjR%2BycfbTBas%2FhWiaQ8AZHpREg92kjNtLUo109OyyuXGC%2F921V%2FDTq%2Fr9ODQT7P1i2Ox1%2B9pd%2BA%2F2yRoPHXaCT52ztJEDoHPsKuk4OpSMpnZAgtgypGRA4JBmfbDAdFXPl88tTMSH8WTjBmyrjGutkboUeVJcuc%2FKbMjrN4%2BAa%2FT5p9JfldNDfurhx%2B14wQyCeGZoBttZh6Sf6oCCSILjT1vVZYFVpalvReS3rfmpoXmcy%2FuKxKlXB9iHnVVGb9TKZgKJHoYIySfUsBsv2eukvXZLVsHuIB1oAE8hRpuA1awPLQlUo8cv%2FdZA09PqAnlnQfKwZsUrKJ1XhBKdmqw8gNF6hmWyOB0AMB3LGzDIxaTDBjqkAR7kKqO4l5r9rNM%2B0A2l8Z40A0%2BLHjcJwYvBFVF9cHuUlTY0vLSJ4eDFOsJ%2B%2BEW5nc78RqOSMIAioK%2F9iymf5yeJ5noOMdQUsprS2IUMFVCTgYqSjMgLpxfT3Tbj%2FvaDOvQaeTsQqMcAPi0GxrlH9tXewYM30Z3XC47IDiSbI65By%2BdyN%2FEH45RSOSitoMkyeP5fMEgbenABietQS%2FkmuHj5iyuy&X-Amz-Signature=bc356f817d997f9aa35af9ec87d861d6aef7612dc8a3850ce63634748ae62a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYX32L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDe6N76Y15P2NNbvNGyzu4OgJFUGckbzxN%2BLO7kPcpWqQIhAK2KtZqhtnWLf5SnhHZShEPepFhiOhSSo6BiHM7bKKcYKv8DCEYQABoMNjM3NDIzMTgzODA1IgwJstin4eXp%2FRYGINkq3AMp56lSFWJz5hdO4CfU7adRr%2B64ibx%2BOCLvrNc9BkgTmLnLNO7c5wAMPaNELyKrIDdRd6Qww4KqaeErWWLdZF7%2B745fjxqOpijsEHpAxX2VUWJpKokEIVUizrcRhdG1CvGBUUbbOlcim3BmiqX3%2FHeG6gXGj1PhW19uqUqxRHicsPS%2BfYK%2B1kU5s2drGQV%2BZq3Oz6IzUeKifndDWmo3ZmTNAi5APyugr3bC7AD%2BESxgEWgZiIMKN19zR7h%2BqO9MtixX%2BWRha9LoJJNMG8rJG0%2FqjR%2BycfbTBas%2FhWiaQ8AZHpREg92kjNtLUo109OyyuXGC%2F921V%2FDTq%2Fr9ODQT7P1i2Ox1%2B9pd%2BA%2F2yRoPHXaCT52ztJEDoHPsKuk4OpSMpnZAgtgypGRA4JBmfbDAdFXPl88tTMSH8WTjBmyrjGutkboUeVJcuc%2FKbMjrN4%2BAa%2FT5p9JfldNDfurhx%2B14wQyCeGZoBttZh6Sf6oCCSILjT1vVZYFVpalvReS3rfmpoXmcy%2FuKxKlXB9iHnVVGb9TKZgKJHoYIySfUsBsv2eukvXZLVsHuIB1oAE8hRpuA1awPLQlUo8cv%2FdZA09PqAnlnQfKwZsUrKJ1XhBKdmqw8gNF6hmWyOB0AMB3LGzDIxaTDBjqkAR7kKqO4l5r9rNM%2B0A2l8Z40A0%2BLHjcJwYvBFVF9cHuUlTY0vLSJ4eDFOsJ%2B%2BEW5nc78RqOSMIAioK%2F9iymf5yeJ5noOMdQUsprS2IUMFVCTgYqSjMgLpxfT3Tbj%2FvaDOvQaeTsQqMcAPi0GxrlH9tXewYM30Z3XC47IDiSbI65By%2BdyN%2FEH45RSOSitoMkyeP5fMEgbenABietQS%2FkmuHj5iyuy&X-Amz-Signature=a75fd4ff7b122a385a0d6633ddfa100e21ea54ef3e53f1e3bd964978b828e151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYCPRIY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCm3Bayyghe9oOy%2FFcYIggW%2BRhmXmfA9MU5oAEwdkTzDgIgGjG1sLGpR40qXGDZR%2F3sjD3k%2FmKM9rxyehgJWThykIMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNxEAoGbKDNPe0%2FUmSrcA0e9pYplG5plr%2FoYZei%2FhdnwLhs8Ym5KtLhT%2BDf%2BT9Go%2F6Gud%2FptXlzWzqwOWFKry2wbdJb2%2B0uVYUm5JTDn%2BaDIk7d2AoIHpuPFNXC%2F6tbOe4DbDpSnqUbyC0lBA0KwY5kRdXFPp0gwI7bnquXJky0D3gm0lAoaD2WmwdwBIjwT1pEU4D8EaaqQIDjd6xr%2Bf8BOr03aoIVNi1CsxNWYOwlcITFYeKOkb%2B8l5Kl7KkT2TAKeH7p6Jp%2FLYL1Jll6NbDci3IaGufQdk5VsPuGXx76a4Qrav2G7LO%2FR8fD9%2FZmWIX5oQbjRLaCT%2B1vL1dDhzouWVXWGyCZUL13W2KXSFcuFs7BS3BiP26Ha0iWX%2B3c7XSaV2iZQ5ANYng9h1orS6NZvVRjjnSEa5YnXno5DYASwHz0YynCtpC0UWKiWTYMSi1UoSZi3vVW88X%2FEEmNdhGbla9x9UQzPe%2FuD91rh6bgIaqZvkxkuTfvDv5Xpduone6AL7%2Bwc3XUpM5iIMofDWMtdASdLPOs1kGyDLNM70xXAKq8NslDlDu7Pt8Epch4h4GPAMhdRaHKJrzeWqyhB67hciIALzsXTgcBvt9F1ZUQhmnmeKkrtKXZRico32W9WYQyT7n4wAqDdSkchMPTPpMMGOqUBjhO%2BWY0GtPRYnMUygbQVP3NTSCMrzcwYNDqbDOvhmH5TMaPtIcu6WqeikD38iJ%2FRmk22sML2XMGqagG7vAe3PZxvBg0ofqxQgJiGneSkZDdrRPSMa5XpIRjYO3gqOpYnPX7hEliqg8XgscWFY46GGEaE3wLUiscSDArQ%2Fvu9Jwcar9c9IegFa5vEGkIrR2mqpPzqeeg0EC8TQ2bwi5woRuOuiH0X&X-Amz-Signature=73501c2c1af1a5688e822c023e0e2ae903f689033d039b05ab56b73b8339156f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3F5J3QL%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDs66BBNLN5vlxnqAA2UfPwlNTBADFgk%2B1O3osfHjsR4AIhAKGqTufnVfmEPJQQoFLIr88%2BI3WKQApi%2BCuyzqYei8hkKv8DCEcQABoMNjM3NDIzMTgzODA1IgzoFi13uawuRjsMKBwq3ANOz4XzOCvFTHtLI2KE128aY7a4xz%2BFXcfSCQrrrWFPPm8qD%2BgexbhAuNL2a7phQ54jQe%2BRyCEhi5SvBDfZXlCNzcyU8Dn%2FzB8RhAuazXogO8ePHaPkUyLo%2FlpZpC%2BJMcza6yOuenaOJybuNefNkx6q7lTr5VSwlZ8Z%2BUR8GzLeYcVFYLT2qyW4zuYs6WLg601TYcSzWs5YAS9oxTQF%2FWiVCt6izY391TmhG4pQqfDDWs%2F4PH37T7RRqZ6iHdSU0JCgQK1tKaQrkcgcFdwhXcP9CUH8mi9j20xGIzr4MEVVFzV1VoXunlI7viEF5V1tM4axIsvJCzYDOr6eyOpJwPoZxV6Bi55I%2F%2Bs9v0hRUNqqc7NLerlszj4KA%2BEYD5b01K0lyjqSUdSLt0RNUDe13iTWYmkQwktOwvSmqDTwNrlcsPM3EQybgqlGVsRpFxevQIlvEYeiPczsWco2%2BMU8%2BvT1L2tzMXwM9PpHOVAdD%2FbPYLNrb5kVNt1l9f5F4bbI%2FeFBfwmuwUJUxITp%2FNnPn1wBAmsHEUuyZWd558wKaXmXYyw7AArTHkupy5xrvpYbJHll5zgiwNiuTTbALZl79LrOuMJwBZ6qzMWYP%2FKDS76q2cJBYuxckQfvgKl8GDDA2aTDBjqkAf5DVWQ6Js15oy1kJY%2BUbNUfgXAHr2FDaEh3HTdaSEBPM3tlZsGPHtm2AXf9m45RTep7AssHwvC5JUuoL8zSChYfeSt%2BQ%2BhjGKxdumJXvD2Nh%2Bwyaoe%2BJ5QHhNQnV8cZeGHswp5srQDFFGxpwxA%2Fv0tM7y0lMRq1cfF%2FCuv4Vi%2BYmgLA4LWLODQKv9Mu456cWYTRKrvT%2BwecVev%2BfZI05NCG5FmF&X-Amz-Signature=212912dbf57ba3c01f0b1e9db4d05c42f213aa5df38b2d6983f66f117a409b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYX32L2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDe6N76Y15P2NNbvNGyzu4OgJFUGckbzxN%2BLO7kPcpWqQIhAK2KtZqhtnWLf5SnhHZShEPepFhiOhSSo6BiHM7bKKcYKv8DCEYQABoMNjM3NDIzMTgzODA1IgwJstin4eXp%2FRYGINkq3AMp56lSFWJz5hdO4CfU7adRr%2B64ibx%2BOCLvrNc9BkgTmLnLNO7c5wAMPaNELyKrIDdRd6Qww4KqaeErWWLdZF7%2B745fjxqOpijsEHpAxX2VUWJpKokEIVUizrcRhdG1CvGBUUbbOlcim3BmiqX3%2FHeG6gXGj1PhW19uqUqxRHicsPS%2BfYK%2B1kU5s2drGQV%2BZq3Oz6IzUeKifndDWmo3ZmTNAi5APyugr3bC7AD%2BESxgEWgZiIMKN19zR7h%2BqO9MtixX%2BWRha9LoJJNMG8rJG0%2FqjR%2BycfbTBas%2FhWiaQ8AZHpREg92kjNtLUo109OyyuXGC%2F921V%2FDTq%2Fr9ODQT7P1i2Ox1%2B9pd%2BA%2F2yRoPHXaCT52ztJEDoHPsKuk4OpSMpnZAgtgypGRA4JBmfbDAdFXPl88tTMSH8WTjBmyrjGutkboUeVJcuc%2FKbMjrN4%2BAa%2FT5p9JfldNDfurhx%2B14wQyCeGZoBttZh6Sf6oCCSILjT1vVZYFVpalvReS3rfmpoXmcy%2FuKxKlXB9iHnVVGb9TKZgKJHoYIySfUsBsv2eukvXZLVsHuIB1oAE8hRpuA1awPLQlUo8cv%2FdZA09PqAnlnQfKwZsUrKJ1XhBKdmqw8gNF6hmWyOB0AMB3LGzDIxaTDBjqkAR7kKqO4l5r9rNM%2B0A2l8Z40A0%2BLHjcJwYvBFVF9cHuUlTY0vLSJ4eDFOsJ%2B%2BEW5nc78RqOSMIAioK%2F9iymf5yeJ5noOMdQUsprS2IUMFVCTgYqSjMgLpxfT3Tbj%2FvaDOvQaeTsQqMcAPi0GxrlH9tXewYM30Z3XC47IDiSbI65By%2BdyN%2FEH45RSOSitoMkyeP5fMEgbenABietQS%2FkmuHj5iyuy&X-Amz-Signature=a510bf416892c999dfb913bd5ba1040508407ebdb2b2be998bfae1f344b60604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
