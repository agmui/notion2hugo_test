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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5RRSM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHXNKvFopXisxz%2B%2BMEMMOE5T3zN%2B4QVF5HHdM9Lo1BHAIhAJhZnMtejj1c%2Fq7tPabvhI%2Bm0N%2FdhTUlqszADUsCDJWqKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxDLIOclrh6lYTvjUq3AM1fNgaSq9Jc7Pktz06GxaR5zBxM%2BU2WUVN%2FVlYJVah2Hh2zI9RetkhaFJkDYAPX3dJ2NeqItBiQcLXSEu96%2BPaU86VWIOQQLtT%2F5oq0Us14HPyV0gCQfb0sRZNPeppIiWAHTjDqLVwriN1EDuhpvbc%2ByvD4BlLBLOERvttfrKFZKRtePxKPSztRt492T0ZRqgyoycpGlDlkXU9KAReW7XmYeE6fdAsaHeERvJbXDMBKG8YAh65oiKxnuP8ZunLxeF%2B%2BOa5T96I13lpEJRBPdUGAU2q4oXatE8%2FeF4veZHcrplNjfOzBIIAIhBQn%2B%2FVR7FlTyHmCjYP2ek%2FRKuQFo42vWByLXWnGSVwzun0ZHpR4YZ%2BdcupmfT3IbL2bOK8mCfn083qApZpmTbwEoz5Xp8e56X1MoRtZDWbWAFRF38P0pUD6%2BB4BhRrVXSotIyBHJsTG1WKy%2BulCCcTm4UfoK47P2TPXTvUZ6wA0MNiGWMMKc13rUc%2BZ9%2FfWPsJOcw9E2lFwo9pmZ0eUhDr92%2BsvPlhtljTd8CFSLg6yBT%2B3sUAJ2W8rxPQYNWYlpRiZfvZatZ9u8AJndnXw%2Ff29xDHgkx47r%2BWicjJdGH6FD8aQUDFv2OkH%2BZ8sSMpCqNWWDDPwqnCBjqkAT5IK7DcKjHTDICDnB3D%2BI7HkFnFqRKqXGYlmogN45tl9h7cCBXYaQ%2F3dbyYX4dnBfAakP9Ky7IuFjGys8zqXbEc9IjVXwMlMXxR5G3GsQgTz6QBWr%2Bm2eFuTxttqz8mOffgkVaF%2FBLmqEHKLWb%2BVgJmFlee99FgIUexAHuGRY2AOkGrwbRfg%2FUH5cRjcCdASElqm15N07ZRHetsOtI7BN6Ej%2FfD&X-Amz-Signature=3e4fbcb46b413fdda9a6a77dd9bce5132c8bc39c692c5bff96ba3225c6c5b968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5RRSM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHXNKvFopXisxz%2B%2BMEMMOE5T3zN%2B4QVF5HHdM9Lo1BHAIhAJhZnMtejj1c%2Fq7tPabvhI%2Bm0N%2FdhTUlqszADUsCDJWqKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxDLIOclrh6lYTvjUq3AM1fNgaSq9Jc7Pktz06GxaR5zBxM%2BU2WUVN%2FVlYJVah2Hh2zI9RetkhaFJkDYAPX3dJ2NeqItBiQcLXSEu96%2BPaU86VWIOQQLtT%2F5oq0Us14HPyV0gCQfb0sRZNPeppIiWAHTjDqLVwriN1EDuhpvbc%2ByvD4BlLBLOERvttfrKFZKRtePxKPSztRt492T0ZRqgyoycpGlDlkXU9KAReW7XmYeE6fdAsaHeERvJbXDMBKG8YAh65oiKxnuP8ZunLxeF%2B%2BOa5T96I13lpEJRBPdUGAU2q4oXatE8%2FeF4veZHcrplNjfOzBIIAIhBQn%2B%2FVR7FlTyHmCjYP2ek%2FRKuQFo42vWByLXWnGSVwzun0ZHpR4YZ%2BdcupmfT3IbL2bOK8mCfn083qApZpmTbwEoz5Xp8e56X1MoRtZDWbWAFRF38P0pUD6%2BB4BhRrVXSotIyBHJsTG1WKy%2BulCCcTm4UfoK47P2TPXTvUZ6wA0MNiGWMMKc13rUc%2BZ9%2FfWPsJOcw9E2lFwo9pmZ0eUhDr92%2BsvPlhtljTd8CFSLg6yBT%2B3sUAJ2W8rxPQYNWYlpRiZfvZatZ9u8AJndnXw%2Ff29xDHgkx47r%2BWicjJdGH6FD8aQUDFv2OkH%2BZ8sSMpCqNWWDDPwqnCBjqkAT5IK7DcKjHTDICDnB3D%2BI7HkFnFqRKqXGYlmogN45tl9h7cCBXYaQ%2F3dbyYX4dnBfAakP9Ky7IuFjGys8zqXbEc9IjVXwMlMXxR5G3GsQgTz6QBWr%2Bm2eFuTxttqz8mOffgkVaF%2FBLmqEHKLWb%2BVgJmFlee99FgIUexAHuGRY2AOkGrwbRfg%2FUH5cRjcCdASElqm15N07ZRHetsOtI7BN6Ej%2FfD&X-Amz-Signature=28a66bb99ccc99df3c378a4fab9210d0c199e025d75d7a16db2e309345223e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5RRSM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHXNKvFopXisxz%2B%2BMEMMOE5T3zN%2B4QVF5HHdM9Lo1BHAIhAJhZnMtejj1c%2Fq7tPabvhI%2Bm0N%2FdhTUlqszADUsCDJWqKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxDLIOclrh6lYTvjUq3AM1fNgaSq9Jc7Pktz06GxaR5zBxM%2BU2WUVN%2FVlYJVah2Hh2zI9RetkhaFJkDYAPX3dJ2NeqItBiQcLXSEu96%2BPaU86VWIOQQLtT%2F5oq0Us14HPyV0gCQfb0sRZNPeppIiWAHTjDqLVwriN1EDuhpvbc%2ByvD4BlLBLOERvttfrKFZKRtePxKPSztRt492T0ZRqgyoycpGlDlkXU9KAReW7XmYeE6fdAsaHeERvJbXDMBKG8YAh65oiKxnuP8ZunLxeF%2B%2BOa5T96I13lpEJRBPdUGAU2q4oXatE8%2FeF4veZHcrplNjfOzBIIAIhBQn%2B%2FVR7FlTyHmCjYP2ek%2FRKuQFo42vWByLXWnGSVwzun0ZHpR4YZ%2BdcupmfT3IbL2bOK8mCfn083qApZpmTbwEoz5Xp8e56X1MoRtZDWbWAFRF38P0pUD6%2BB4BhRrVXSotIyBHJsTG1WKy%2BulCCcTm4UfoK47P2TPXTvUZ6wA0MNiGWMMKc13rUc%2BZ9%2FfWPsJOcw9E2lFwo9pmZ0eUhDr92%2BsvPlhtljTd8CFSLg6yBT%2B3sUAJ2W8rxPQYNWYlpRiZfvZatZ9u8AJndnXw%2Ff29xDHgkx47r%2BWicjJdGH6FD8aQUDFv2OkH%2BZ8sSMpCqNWWDDPwqnCBjqkAT5IK7DcKjHTDICDnB3D%2BI7HkFnFqRKqXGYlmogN45tl9h7cCBXYaQ%2F3dbyYX4dnBfAakP9Ky7IuFjGys8zqXbEc9IjVXwMlMXxR5G3GsQgTz6QBWr%2Bm2eFuTxttqz8mOffgkVaF%2FBLmqEHKLWb%2BVgJmFlee99FgIUexAHuGRY2AOkGrwbRfg%2FUH5cRjcCdASElqm15N07ZRHetsOtI7BN6Ej%2FfD&X-Amz-Signature=a44f0a8bb0de143e5b0262d2ff6f605d73a55afb769b98ed919484cd750a8f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645IJ232G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBPjoL0HKCtbeYjkUpCh0mW5NX0BMEQ6vl1z%2F3JiHZqhAiB342HE1qDSdnQJ%2BiPJzKuAS%2FaM5rcGDCWpKpEOsN%2FbLCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsRNQ3%2Bu2ik6hrEROKtwDCOOO2HCfsVyxk2VFkM5dLIODMDFaVvJMcNFHEvZ0R4WmM47rkxrhwz0V93yrqqYrbkzCrW34YQDY9SHjGCeh7wrsCMWBKKBL%2FKkCD%2Ffjv4RVOXU3t74LEV6Gro7BS6zbYnVyTyoLdzkmNdkzQhScPInnSpYFGzM2%2Fx0Dp%2F9CLheQvWK0Ia0vLS%2F6YjMzJEllCSUwSUqVIaNxhJolEvcA4HfBRuKPdX1ORyURK4kn3yfbVRaXNe5S18mqFCZMx8EiSlZ8gl1ey3PXT8jILtfkyPorWxR9GOh2veDov5Ke8kvFCcXz%2F7LUeUGcLcHgzhNYqZ%2BoR3pGcxZ2OEdfDTVIQVuXynTiJh0qNftStetQpQnumO%2B8mmpkkrki4DY0dKtdaaTqpllUS0xerZBcbVNNSWNBQ7DJkjhtP7I9Yl2%2FRL7ZSKL5OULMXYO%2Bi1%2B%2BKaI6myXxnOJdilZmpiYw6Uzmgwazk692XuG%2Fz0TohHpqwjTaWSL2KmpSW2ayNcJJ%2B7M4nWlddzZIuWEMSvU0wCIDaIfRueI5Dl4rSNeALEMvVgVJxHB8IB3A%2BUsjFaaBkqiTGyZ8ANw0B1kdoJ2F9fwmFiqsglFR5Ubg704LA7kBq5ZonYulnsbq6MGM0Mkw%2B8KpwgY6pgETVzWgXib6o7uN%2FD9pAvoWK7Us69Zsm8u8cWpiijEOagPSCLf%2FhSFt06mjcyoyjyle3tUtneNK1MwKw23XlUqUJVTnLvE8Tcl3DG9m8OoSO7504ewGNxWqd0yfcHlnBsRxFuKJdMFCEWq%2FB8OaV%2F8upfmJLcQLnAZpWzp9hAO2nCnGhEPHw%2B9rTK7wShGCdsTReFzHAYjoliK996YbzB7jRY3vcjHW&X-Amz-Signature=c943e2de217a512d28eefa0ba7158e72d2a107b63ef539242861cffce6e8bf0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBNFME6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAfbPAF%2FfykGsdvfoHoXXpuh8kSH4H1daSmDtM91d0kxAiEAv26%2Ft5JdfBgsZMRpwU4xWS78yNQYLRKcFcNErKdWw7sqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP49U2ufTfrzLNlfircAxrRRCg44l9LgGUsDEU1hRz2U3g9qFH4H5h4mj5xOJTV9FJgKi1CzSFSgxJZU8ntBGFIWrd34fUTVSw%2FMePfc9Tvn0d3AyXTj763rYLZnjAkQFquISjGniqm3HbK2I%2FuqSAgbpqgaVAHIqGKXj1AUhtyfNa%2BqlG08CIzyI28ide1qA2dn38%2BTx%2FUB1XkxLVBAuYHoz6Bs5jtRek3hFXESthDR2dgYu2Wdex2EgbOdTP9OuOO3xsDRQa9LcuvYSP1ZpRUUytQ4eBEuRWWWZY1RMtt29JL0ETSHnrAupr7MuEyjw8RwZuE8OF24F6KhxGjqOe6a45VXaf3nOPU8aI4kNwwPOzoYPXCm%2BzOSpV%2Fp%2Fj85kbeo0zgreBgqrMxBrj4FNCrNMiC8Z9itMxBpE8qRCeieV6K%2BNvm9RrGoWZy1ILcKkU%2BwZ%2FePgy9H1%2F2p4avncLSq4ehVZHaiJP4gzad%2FmYfLslnSdDU4gfFX6xt6jIZaZLBM7gXU%2BMBRiI1iFP%2BQ%2FYyzltp6RuYhiqt613ETgOnfNCuOP41Um0z5gDhQLdYG3%2FUIuXXU9gdkyYRu%2FM9VG9h5I9RZXvV0eSTIMtxy%2B0%2BdoQx6X1cOgieTAKMZfAlIDxIct%2BOO04RIX5KMKPCqcIGOqUB7jLC720yRF8GdSCY%2F%2F0GPnEuOCcYmQ0bb7wc%2BHVQK2AF1aeOO3gHHw3DIG0Wk4yvEP3stj9n2BNLVg0aZSAFLLp%2FIjGpqCpKcr26UaNDd4PR7rbmjeeN%2B3FkPryrtWNyNcPyMEKPbrPbHQ44Fmx62fcZCPaAhzr%2BPVFCzGXbR8YzkuUTiM1KeherfKPTm8YmkdiY%2B6YeL9R9FoG66p4yNig6gz%2FH&X-Amz-Signature=6198b62416b08db6d2c4d94fabf3ed6ffa73a1f8876adca4dcc95448a8a84c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5RRSM7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHXNKvFopXisxz%2B%2BMEMMOE5T3zN%2B4QVF5HHdM9Lo1BHAIhAJhZnMtejj1c%2Fq7tPabvhI%2Bm0N%2FdhTUlqszADUsCDJWqKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxDLIOclrh6lYTvjUq3AM1fNgaSq9Jc7Pktz06GxaR5zBxM%2BU2WUVN%2FVlYJVah2Hh2zI9RetkhaFJkDYAPX3dJ2NeqItBiQcLXSEu96%2BPaU86VWIOQQLtT%2F5oq0Us14HPyV0gCQfb0sRZNPeppIiWAHTjDqLVwriN1EDuhpvbc%2ByvD4BlLBLOERvttfrKFZKRtePxKPSztRt492T0ZRqgyoycpGlDlkXU9KAReW7XmYeE6fdAsaHeERvJbXDMBKG8YAh65oiKxnuP8ZunLxeF%2B%2BOa5T96I13lpEJRBPdUGAU2q4oXatE8%2FeF4veZHcrplNjfOzBIIAIhBQn%2B%2FVR7FlTyHmCjYP2ek%2FRKuQFo42vWByLXWnGSVwzun0ZHpR4YZ%2BdcupmfT3IbL2bOK8mCfn083qApZpmTbwEoz5Xp8e56X1MoRtZDWbWAFRF38P0pUD6%2BB4BhRrVXSotIyBHJsTG1WKy%2BulCCcTm4UfoK47P2TPXTvUZ6wA0MNiGWMMKc13rUc%2BZ9%2FfWPsJOcw9E2lFwo9pmZ0eUhDr92%2BsvPlhtljTd8CFSLg6yBT%2B3sUAJ2W8rxPQYNWYlpRiZfvZatZ9u8AJndnXw%2Ff29xDHgkx47r%2BWicjJdGH6FD8aQUDFv2OkH%2BZ8sSMpCqNWWDDPwqnCBjqkAT5IK7DcKjHTDICDnB3D%2BI7HkFnFqRKqXGYlmogN45tl9h7cCBXYaQ%2F3dbyYX4dnBfAakP9Ky7IuFjGys8zqXbEc9IjVXwMlMXxR5G3GsQgTz6QBWr%2Bm2eFuTxttqz8mOffgkVaF%2FBLmqEHKLWb%2BVgJmFlee99FgIUexAHuGRY2AOkGrwbRfg%2FUH5cRjcCdASElqm15N07ZRHetsOtI7BN6Ej%2FfD&X-Amz-Signature=1e3a9659d2ffe682b1c23226846afc41d2302bf54ffea0a9d4a725def1f90646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
