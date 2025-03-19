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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653F27K2H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIChqOjMmckCMPmlXjCGPF9XqnLjzrTsA7bYOeutnZtBOAiBtOgAtOfIBgbzMhbMlfQD8sSC%2FBWVtmoO3tlm3KPQmqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYzTSe8rab%2F%2FPR258KtwDrGOojnTqEzRw227VvowK6CDus%2Bo3C1a0ZFhNklylYCa87pZNaS0SctMMUKd9C3lbTjYKFnAXrIF78NEn4dKWMbThU7d2Z3g7EK7ACO5zxmCF4tBtC6Cu3PhQBL%2FnqSAFuRpP4G51hmQdpGY9rYwQYKDsMpoPliBgwoaz%2Brrquce%2BDpNQBq%2BOaXFuvxzwGT27Th1ImsV3uDml2Hr5JxVRZLrkOOsjkZvQn%2F0aVhJ3hhcnxNJNtGGgHW34tAx1oosp%2FKW5frZ5bLECtkZ1U1%2BptkXsSX3r%2BWQFqV1P9i2HpQwpw84bK%2FmcFTLMBwJoKMm9WoY2h3dDq79mKNo%2F3539d9BA1hjY0J1Kc%2FCLwTPz16FDEjirHVCv5a7zoh7a6piK66obIq7pv%2BAxJ4V2LlvisDtEi4Rhmesd3t2oiLxtpuSuriGegzFavr8hU2jNO2rP8kTYQoXQ0p%2B8U0tY%2Fk3A%2FjFJ3pzsU7D1c%2BkJsAz8RedegaDyOXsltOYBw5my5PdrJeWUAdPJsmls002jqXlnNiGJEZ9b4QE3GU6CETCHAPsUA4AfJWcwXp3cs41SG8Uw0LMUYeCNflyLNJT1jwR%2B1ovAcReB2ro2Fx9cCK0FLIEMvoW1IohZqRAQ20YwguDqvgY6pgHD8Ks1PWhLv4F5%2BGy5CQRRP6hKJE4va1J8WuKN0zPzets4Ma5nRn5uc9%2Fqv%2BZc4snxXpm1BUgd7Rde5LMw3oDQGb7GcxQzpG3%2BqEoDOKL4fONFCMFktQvyhgyqeFsZjkCoZdALyUpK2%2FWEInDAe2aNbxK%2BJafXZnhwUdLKtQ5P18hQMum98cn4A4ENTZUYe8jJ5tp4JykZFtUfbIth5spTrtpYpkCv&X-Amz-Signature=cef191aaa7a62caa043034c8c7705b7731854f96125166360aa6f01005b57695&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653F27K2H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIChqOjMmckCMPmlXjCGPF9XqnLjzrTsA7bYOeutnZtBOAiBtOgAtOfIBgbzMhbMlfQD8sSC%2FBWVtmoO3tlm3KPQmqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYzTSe8rab%2F%2FPR258KtwDrGOojnTqEzRw227VvowK6CDus%2Bo3C1a0ZFhNklylYCa87pZNaS0SctMMUKd9C3lbTjYKFnAXrIF78NEn4dKWMbThU7d2Z3g7EK7ACO5zxmCF4tBtC6Cu3PhQBL%2FnqSAFuRpP4G51hmQdpGY9rYwQYKDsMpoPliBgwoaz%2Brrquce%2BDpNQBq%2BOaXFuvxzwGT27Th1ImsV3uDml2Hr5JxVRZLrkOOsjkZvQn%2F0aVhJ3hhcnxNJNtGGgHW34tAx1oosp%2FKW5frZ5bLECtkZ1U1%2BptkXsSX3r%2BWQFqV1P9i2HpQwpw84bK%2FmcFTLMBwJoKMm9WoY2h3dDq79mKNo%2F3539d9BA1hjY0J1Kc%2FCLwTPz16FDEjirHVCv5a7zoh7a6piK66obIq7pv%2BAxJ4V2LlvisDtEi4Rhmesd3t2oiLxtpuSuriGegzFavr8hU2jNO2rP8kTYQoXQ0p%2B8U0tY%2Fk3A%2FjFJ3pzsU7D1c%2BkJsAz8RedegaDyOXsltOYBw5my5PdrJeWUAdPJsmls002jqXlnNiGJEZ9b4QE3GU6CETCHAPsUA4AfJWcwXp3cs41SG8Uw0LMUYeCNflyLNJT1jwR%2B1ovAcReB2ro2Fx9cCK0FLIEMvoW1IohZqRAQ20YwguDqvgY6pgHD8Ks1PWhLv4F5%2BGy5CQRRP6hKJE4va1J8WuKN0zPzets4Ma5nRn5uc9%2Fqv%2BZc4snxXpm1BUgd7Rde5LMw3oDQGb7GcxQzpG3%2BqEoDOKL4fONFCMFktQvyhgyqeFsZjkCoZdALyUpK2%2FWEInDAe2aNbxK%2BJafXZnhwUdLKtQ5P18hQMum98cn4A4ENTZUYe8jJ5tp4JykZFtUfbIth5spTrtpYpkCv&X-Amz-Signature=3ee8d5065ea20d06de8c48f0bbe4a6321ba267b516cdf1474c04b4281e477966&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TANQG7YD%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIAq5UotHJZ5M5aN63OVXwlhZBlRAEtjSSfxMtFFUgwaWAiBYQyL7rrZ8XrhxFrJoaE5XUf8tWbmtPGaFcxyIccmINSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMenKDboV6lVK5b7G%2BKtwDcc1wAm4BQSKSaJdUGqhpqlGj9%2FG5khkdJ1RKRmkH8V8wxlL1pf3HfokXKBbfFRbre0k2ky4y%2B87S6zPvHYdVvHcWqNIIumXJeKve9G7QUh1CANmQaZQM45fwoKfCj%2BrAZ0fAWG0quR2IT4vrp1Sfd0Jv8X%2BbMairUXgbi427ALYF8PjjVfcugkWRAXX6DB2rp7fhire9D%2BXydcW12DR%2Fax2PJGp87PRIOT82pY3uXzLcjXEQUvbIYNbmVhm0FRYotzBjI9aMau4MenW2FnZFRinKn4JgYT5MRa4ohWO4MA67v89OIby9CfEzVEqj1TUImbvonRhX9fldD010tgYk%2BP04W0%2F16llrvK%2FJrOjW71WK2eP9p1L7MT6eurImPjXfpQe648718mS%2FWfaUbXT4eZSQ2fYIZ0b4os2Y71wRXRgZmWfkwsdNdrnz3wTS8z6QNx9X%2B0OZ4LWUyIeQfAGZcm39yGefnD6eTp3A2enkoZne2dBr55V%2FPyoDMt4%2BWSR4HDGzlyFhuPgXgl4NW3WFiYn1UNdP5Fi%2B3P9lGXGmCqzK2tHMdyM%2Bv7DAc5pet151GsUHqX6hmqX%2F7RrPOIxHWR%2BOg7wbeLZmVW%2B3uUB%2BLLMkC7uYb27cI3ZyOmMwjuDqvgY6pgHeNafXQvMf%2FLBgs6itU791BQ0G3MC2m4QPuaul8dyW%2B6fDZboLqOQxcxWucng4UnohojJfklQZBfFBpu5FgDO8c1%2Byx6vaWJkR%2BwhVPT8%2Bd4%2BbU9w1jQG8ag3kL0RoX17EcLxpmTjUrNpySQI6qn2l4u6woolj8fFGEe6Bjgt0ni%2FAa5JD0HxNSwydJB1AVX%2BiYRNf8fFubgp0hcqSuXiAVdyDva7%2B&X-Amz-Signature=4836212be050d24a196908258caa623c7fdde084c201e31875aa7ecb2622fed4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCY3UNE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDXLPpcT6%2FqMPySo4v%2FsLqKbQjw0iUIevXG8Ux7jUSaQIgHxmFv95TePEWCav9IY6Iup%2FS8RE5ZivyuBxbB90RSG4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEMb%2FEwvNt06bo2sxSrcA%2BfIOsaCF3YwBF%2BoZy8gn73IQJ3ZJN5EeGjSX34r1B2ii%2BSJ05Uef%2BuswWwcFFeNWiA%2FE019GpdnHoEMevgjLpYzcKLT3hRF4l4QiP3Plje22bu8%2BcuRyuBI4ANhPB16JFUdc0sSzaDcTtPUNHQm0JiBj5%2Fc11%2ByDP0dFKiQ3S3Blm2llBvVTXAS7HEPnUi1t8Ly6VUxnEbjvE0IeZT9v7PUguebe4U2agjYWd%2FKWoj36R1EnCvmkbYHLojt%2BApfC1P2OY7F2O1gxCOsC4Kg0q6t0jJR4M5UTYYACYYLKa7CqHwEzrpaj4cYMTPdlLhPfM84shkBthVTx%2B7FNBb%2BTNe2VWzyMFXyU7jQ1qc%2B2cR%2FfESqx3h%2BpGDZjzgX%2F0pDp9G8ag8rg8o3uTjwsB0ByMFfdm983nHqlI8IkGTusYzX%2FgPkqECI6e8hNjaDpHVXVpVGeuu5mPuctRIdQPRNaS%2FMlc9Yj2vuP6gjefaB3zJfsisKGstD70unnmqWPqF7s6HhSHh%2FoQqLnx1IOCBAA3Ml3wPlEBPvYfu8rypNH4Z31VowNjXzHIOEpOwsEJpmkS8bA9xT%2FT50LeW910XUbdj1CqxhFOSHzHIqVy1xFzZSogPIs5sqthiEmQtzMKXg6r4GOqUBxYJRzEId2zI%2FY3pw6%2FUh%2BMtdl6VPqcNjKKDxwZUiMTvIyXtlfEKUNPjQe7t5H82Kw2oIL%2F5pXRn7xyQTo5s0Je3oqLP%2BRomn8thBgl%2BVQzD%2F9C4mjFzv1or1oB80iK%2BDCVvF%2BEoL1vNsAcFX75RbRJ%2FaJyhOj8r5rtITNehy1QbyYTzImbedjVpEcrHjTpE7JSkd2dLnZjmqghQeO5clJrPTzHti&X-Amz-Signature=6cd0d027e938b282ae6025151bbe5dd532607624cf5445ac76ac378838e21890&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653F27K2H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIChqOjMmckCMPmlXjCGPF9XqnLjzrTsA7bYOeutnZtBOAiBtOgAtOfIBgbzMhbMlfQD8sSC%2FBWVtmoO3tlm3KPQmqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYzTSe8rab%2F%2FPR258KtwDrGOojnTqEzRw227VvowK6CDus%2Bo3C1a0ZFhNklylYCa87pZNaS0SctMMUKd9C3lbTjYKFnAXrIF78NEn4dKWMbThU7d2Z3g7EK7ACO5zxmCF4tBtC6Cu3PhQBL%2FnqSAFuRpP4G51hmQdpGY9rYwQYKDsMpoPliBgwoaz%2Brrquce%2BDpNQBq%2BOaXFuvxzwGT27Th1ImsV3uDml2Hr5JxVRZLrkOOsjkZvQn%2F0aVhJ3hhcnxNJNtGGgHW34tAx1oosp%2FKW5frZ5bLECtkZ1U1%2BptkXsSX3r%2BWQFqV1P9i2HpQwpw84bK%2FmcFTLMBwJoKMm9WoY2h3dDq79mKNo%2F3539d9BA1hjY0J1Kc%2FCLwTPz16FDEjirHVCv5a7zoh7a6piK66obIq7pv%2BAxJ4V2LlvisDtEi4Rhmesd3t2oiLxtpuSuriGegzFavr8hU2jNO2rP8kTYQoXQ0p%2B8U0tY%2Fk3A%2FjFJ3pzsU7D1c%2BkJsAz8RedegaDyOXsltOYBw5my5PdrJeWUAdPJsmls002jqXlnNiGJEZ9b4QE3GU6CETCHAPsUA4AfJWcwXp3cs41SG8Uw0LMUYeCNflyLNJT1jwR%2B1ovAcReB2ro2Fx9cCK0FLIEMvoW1IohZqRAQ20YwguDqvgY6pgHD8Ks1PWhLv4F5%2BGy5CQRRP6hKJE4va1J8WuKN0zPzets4Ma5nRn5uc9%2Fqv%2BZc4snxXpm1BUgd7Rde5LMw3oDQGb7GcxQzpG3%2BqEoDOKL4fONFCMFktQvyhgyqeFsZjkCoZdALyUpK2%2FWEInDAe2aNbxK%2BJafXZnhwUdLKtQ5P18hQMum98cn4A4ENTZUYe8jJ5tp4JykZFtUfbIth5spTrtpYpkCv&X-Amz-Signature=6e74f4f48541cda7e0372f7456dfd541f630567672e9c6dd49a3e536ce2b69cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
