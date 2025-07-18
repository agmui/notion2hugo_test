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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7V7CYLT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDei6a6f20s1NP%2FH212zMatD7%2FwlJjrVwUSMPOsbH%2BLdAIgAyPFm0HgeJ83b58LO8LxMGWM%2FgO0EKY9RZ8ZTOMsA%2BQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl974Wz%2BxQcBGRnMyrcA3hUfGqMDEr36REOdKSb5nekGh0M7JnbY0hUucDdrNMZGWuq3ltT4XRfazKpUmpcpbMQ2Lp644V%2FCCGdPIIv%2FPV%2B47pBUjPU16ifl19vwdwcS3y1ysPQDQcqym2jzNe01h%2FG5yCSQA3FFS%2FkqHssw5C8G0rytF75mIlod%2FjQn0wWc3AXiGXTub3nm2gJJcF42m%2FkGLPK9cwVZme%2FVaMw7PH8q2MH4%2BXpsNzXY3P6lZWUQ%2FUJ5DPRgenJSKh%2BuzgScHGkJcPLRF0IL9tSJB2ziPONw%2Bt4SKyOv6LhxBCE0ok%2BIShrDavnYxyxFFme2Zk1dz70t8M%2B0A%2B4BR9oZUDyckZkEQ0YmohLLun8N8xRgh4YPA9njvEQgXllEhCxwKTIUwRKYItmL%2BCYDayk00xnGrftpxQbpPjGdfIb7wOviABFJPkIKLmiUQwXPuMRoFZiIUHOP0GvGAWHp68bqnCZbHHmAKY6pJMNPQpbeSC91LUXabbiED0mat%2FqinHQxgKJO9YYYLh0nTTX4Yyen8j%2BADNX2wbI4QLomHBrpLvkoUbgQE6WA8ytkqgEw731ZwwEmHooWgbV8kZGZLOalFP6ZtpV3%2BdC52lL2g%2BBvOFirkAfmh1fByxgHDcY4CjyMMz858MGOqUBg1gCSHj%2FUDSFYtfdOmH6xITGW8ickZphWLni2wnaJRisxfJ%2BzVxR8H5GZ%2BwRsoYOo656QsVEz6zYt7owQYSezJS4NPRuSAi4Lmy97WFPqx3mXqP0pWQNHrHE3Km583SfnKzBzR4V6kE7hKFqyDm53IoH4J1XSo%2FLFwi2ncmMXsafZiQ0ylM91eCjJ3hemtnEfQJ9VPpkwf6LIbxWCGpviDYJcrjZ&X-Amz-Signature=c42e97979960b56389c86fa0b88848d7f32fcea66075e64e7c5c782834ac708f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7V7CYLT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDei6a6f20s1NP%2FH212zMatD7%2FwlJjrVwUSMPOsbH%2BLdAIgAyPFm0HgeJ83b58LO8LxMGWM%2FgO0EKY9RZ8ZTOMsA%2BQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl974Wz%2BxQcBGRnMyrcA3hUfGqMDEr36REOdKSb5nekGh0M7JnbY0hUucDdrNMZGWuq3ltT4XRfazKpUmpcpbMQ2Lp644V%2FCCGdPIIv%2FPV%2B47pBUjPU16ifl19vwdwcS3y1ysPQDQcqym2jzNe01h%2FG5yCSQA3FFS%2FkqHssw5C8G0rytF75mIlod%2FjQn0wWc3AXiGXTub3nm2gJJcF42m%2FkGLPK9cwVZme%2FVaMw7PH8q2MH4%2BXpsNzXY3P6lZWUQ%2FUJ5DPRgenJSKh%2BuzgScHGkJcPLRF0IL9tSJB2ziPONw%2Bt4SKyOv6LhxBCE0ok%2BIShrDavnYxyxFFme2Zk1dz70t8M%2B0A%2B4BR9oZUDyckZkEQ0YmohLLun8N8xRgh4YPA9njvEQgXllEhCxwKTIUwRKYItmL%2BCYDayk00xnGrftpxQbpPjGdfIb7wOviABFJPkIKLmiUQwXPuMRoFZiIUHOP0GvGAWHp68bqnCZbHHmAKY6pJMNPQpbeSC91LUXabbiED0mat%2FqinHQxgKJO9YYYLh0nTTX4Yyen8j%2BADNX2wbI4QLomHBrpLvkoUbgQE6WA8ytkqgEw731ZwwEmHooWgbV8kZGZLOalFP6ZtpV3%2BdC52lL2g%2BBvOFirkAfmh1fByxgHDcY4CjyMMz858MGOqUBg1gCSHj%2FUDSFYtfdOmH6xITGW8ickZphWLni2wnaJRisxfJ%2BzVxR8H5GZ%2BwRsoYOo656QsVEz6zYt7owQYSezJS4NPRuSAi4Lmy97WFPqx3mXqP0pWQNHrHE3Km583SfnKzBzR4V6kE7hKFqyDm53IoH4J1XSo%2FLFwi2ncmMXsafZiQ0ylM91eCjJ3hemtnEfQJ9VPpkwf6LIbxWCGpviDYJcrjZ&X-Amz-Signature=7825c2684bab3442266606ddca44fe03ebab3805a5e2d09045ff29c6d59e7954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7V7CYLT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDei6a6f20s1NP%2FH212zMatD7%2FwlJjrVwUSMPOsbH%2BLdAIgAyPFm0HgeJ83b58LO8LxMGWM%2FgO0EKY9RZ8ZTOMsA%2BQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl974Wz%2BxQcBGRnMyrcA3hUfGqMDEr36REOdKSb5nekGh0M7JnbY0hUucDdrNMZGWuq3ltT4XRfazKpUmpcpbMQ2Lp644V%2FCCGdPIIv%2FPV%2B47pBUjPU16ifl19vwdwcS3y1ysPQDQcqym2jzNe01h%2FG5yCSQA3FFS%2FkqHssw5C8G0rytF75mIlod%2FjQn0wWc3AXiGXTub3nm2gJJcF42m%2FkGLPK9cwVZme%2FVaMw7PH8q2MH4%2BXpsNzXY3P6lZWUQ%2FUJ5DPRgenJSKh%2BuzgScHGkJcPLRF0IL9tSJB2ziPONw%2Bt4SKyOv6LhxBCE0ok%2BIShrDavnYxyxFFme2Zk1dz70t8M%2B0A%2B4BR9oZUDyckZkEQ0YmohLLun8N8xRgh4YPA9njvEQgXllEhCxwKTIUwRKYItmL%2BCYDayk00xnGrftpxQbpPjGdfIb7wOviABFJPkIKLmiUQwXPuMRoFZiIUHOP0GvGAWHp68bqnCZbHHmAKY6pJMNPQpbeSC91LUXabbiED0mat%2FqinHQxgKJO9YYYLh0nTTX4Yyen8j%2BADNX2wbI4QLomHBrpLvkoUbgQE6WA8ytkqgEw731ZwwEmHooWgbV8kZGZLOalFP6ZtpV3%2BdC52lL2g%2BBvOFirkAfmh1fByxgHDcY4CjyMMz858MGOqUBg1gCSHj%2FUDSFYtfdOmH6xITGW8ickZphWLni2wnaJRisxfJ%2BzVxR8H5GZ%2BwRsoYOo656QsVEz6zYt7owQYSezJS4NPRuSAi4Lmy97WFPqx3mXqP0pWQNHrHE3Km583SfnKzBzR4V6kE7hKFqyDm53IoH4J1XSo%2FLFwi2ncmMXsafZiQ0ylM91eCjJ3hemtnEfQJ9VPpkwf6LIbxWCGpviDYJcrjZ&X-Amz-Signature=eac73fe8364e0010d51b8baf2753049dc83452fbbcfd0f0b90534cb1dca97f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUTWRFAW%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIE50Gnazdyz85f7JL5hCyF0cRSTnEfxAGupb%2BnN7U4cKAiEAz%2Fgm0DTK7IWslA47As%2FmMYdQUpm5B0hVtQAVduZJn5AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2VC8KFqBiThArCRCrcA2JCXLhVTww0pckV6GCWjyr1cTmRT%2FwqxEFTlRrqexQtg%2Bj9Ujn4DiNJz4FT%2FziU9nZYkGZVpMO3W9JVBVtnmHaytMIT4QqBMrPs4jsrk8wcg7tZeJF9KlOUVWULO8uI1zWUizUlouyUYrq%2F%2BIOvXD1nS6g5ZJlcQ9Ly4yLcYRvBM55dwGkMFwE5fVR8EPnNqNmFYmyI4Vmo8lYbXh8l%2BLuwgpeaGNkZyW9wukoLdkoKmyIlIusu2mnYLOJ4KZirGMmNh7JWeuzVvAHiAt0afOcFVCpzlmpYrR1OzhW6d4qdEGfierX5i9ZcTrdxcGwOz%2FfhMtLpuNpGjDYP6%2FjtNYp21NBwrbz8O5a5HksW2iSgPbLMua0oqmNQdjncPoy6q22NZ0QiTw4fxnJzl3Yn2goMambz5j2dBXw4j0vezRlM1cKDzw6N6C5D1eZ2j0vZc1AfI3vudM2M3Nrh6q1me3xgtlh8rm5vu3GvLHKu9yWUMSjLRguDsLOGIeo76QnVXMt2XJ%2BXb8qaMPgDD2lazwdlV2fq6hWm%2BsGrSbEkTf3nN%2BsTUDEwStJ78k33G%2BWbTg%2BbBSdxSZWPAuHC6uPZHL5KKvTJh7mhhGsNnusvF2%2Fn1bzTyXJVcoD6J3h7MM%2F858MGOqUBqVPwihoLJzgXw29KdANIIhTQpaXA4WFCNJieHVP6qZ1Vj7qyKYea2xm0mezyEa58Hb8W7RMwN%2FvMJysVfnKqND1QoOwmiL38OIdsL4V9QEXLLAcBkC2uPzWnZzO%2BmJo206IdtsLhwpu54ZdUajEi4ivaUzKi899GFyMQpJ2XgvO%2FhRbxlhAc4os5YgtSVJwvhUWHZdFchmtTD4PUMijTh2Dil5NY&X-Amz-Signature=1347e817a78e5373514d6b61d262b0e203e1015829f19f440b95b41aeabb6486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6JZXCT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCDxACXXMuG1KL60S1D7Q5Tj2mBJXBmXJcwHMyihNHlgIgbXvNGutmCF0G99dkEWrEt4IyKs5fglNPkLOBYRGQO4IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKS1DhY1JNBrmQBKjCrcA%2BtyIG1iin74scL4PpgnvX2v%2F6E%2F8ys4dyYJze7X%2FXgE7ZvVBWSQeDdihIMFUpAPJGLkYDkuQgT7bGS1ms0NOFDOMDN7woUvmTAg3JkweG9gy9db%2FLIBFXmTmmc%2FmbNIyCR0IxOxyBD3txaIIyjEBw7ElTDf4iLrn3hx6fO2VeNAIPPHZ0%2FiN3w0VVp8IkDTyJqhSiUN%2BJAPw0NQrGe4S6LPMGDEwBeVha4R%2BurKDsuSAKX3uVg7l7PX9KnJZp2IvASm%2B5ZQgHnScDupEJkiMbza4gBT%2B%2FiCEH%2Ft0TsBITY4VgSXBWkrcM9rg2NYGV%2BAx8yCzRNP4k4Oy1w2z9KM9juNOal%2FjU0U8QglAY2TNUHLu3a6POp8rTVuq4Pi4y2NGdxovyN7gxu2C1A%2Bh4jJc8NnlmdSX2GhCLNoMTOglVA%2FyqhkAlB%2BDLFDeJmOqlRmhMVbvCzM3F5MVHCWGUJi94r5OAGhrEXyjaTSi0Pp6WagLLVNdPaXsKlbpHzLtWshuSnM99MP%2FhCRJ61b8cEuW8GOSvX3JDx9ouJIwKrmUfX6LopxaIMcl0DfoKBIlr6qI5Oz7wXSWltg7u9y86Mva7gWBDcKTN5bYTkyT7xGTGtqWsvE6Cee6Jc2jkTpMNz958MGOqUBJMxBBw07y6Qytoj2Wfv6MwWzT3QjJxmEZ4DMA3lNjwOIRtVC8f7mYgZxO6F9Ii%2BEQxTu0I5wPBnLLv4GLD9kbtK6VEPOe4tOt6k2hfyRul9GaErc%2BlEa60M%2B9N%2FXF9C6dG%2BlsfevVdlr4p62GrGMdMZCmSojFLW8U7AWcS65Rjd%2BnYqFqLHGeQ1UILO0%2FS8fuAIDhT8SWv5TqnJfzbsmJ015AniO&X-Amz-Signature=4bc49d90ca689790a01dfe24f0baf83c932dbb6c65f54217e2dce5b492fc1f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7V7CYLT%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDei6a6f20s1NP%2FH212zMatD7%2FwlJjrVwUSMPOsbH%2BLdAIgAyPFm0HgeJ83b58LO8LxMGWM%2FgO0EKY9RZ8ZTOMsA%2BQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl974Wz%2BxQcBGRnMyrcA3hUfGqMDEr36REOdKSb5nekGh0M7JnbY0hUucDdrNMZGWuq3ltT4XRfazKpUmpcpbMQ2Lp644V%2FCCGdPIIv%2FPV%2B47pBUjPU16ifl19vwdwcS3y1ysPQDQcqym2jzNe01h%2FG5yCSQA3FFS%2FkqHssw5C8G0rytF75mIlod%2FjQn0wWc3AXiGXTub3nm2gJJcF42m%2FkGLPK9cwVZme%2FVaMw7PH8q2MH4%2BXpsNzXY3P6lZWUQ%2FUJ5DPRgenJSKh%2BuzgScHGkJcPLRF0IL9tSJB2ziPONw%2Bt4SKyOv6LhxBCE0ok%2BIShrDavnYxyxFFme2Zk1dz70t8M%2B0A%2B4BR9oZUDyckZkEQ0YmohLLun8N8xRgh4YPA9njvEQgXllEhCxwKTIUwRKYItmL%2BCYDayk00xnGrftpxQbpPjGdfIb7wOviABFJPkIKLmiUQwXPuMRoFZiIUHOP0GvGAWHp68bqnCZbHHmAKY6pJMNPQpbeSC91LUXabbiED0mat%2FqinHQxgKJO9YYYLh0nTTX4Yyen8j%2BADNX2wbI4QLomHBrpLvkoUbgQE6WA8ytkqgEw731ZwwEmHooWgbV8kZGZLOalFP6ZtpV3%2BdC52lL2g%2BBvOFirkAfmh1fByxgHDcY4CjyMMz858MGOqUBg1gCSHj%2FUDSFYtfdOmH6xITGW8ickZphWLni2wnaJRisxfJ%2BzVxR8H5GZ%2BwRsoYOo656QsVEz6zYt7owQYSezJS4NPRuSAi4Lmy97WFPqx3mXqP0pWQNHrHE3Km583SfnKzBzR4V6kE7hKFqyDm53IoH4J1XSo%2FLFwi2ncmMXsafZiQ0ylM91eCjJ3hemtnEfQJ9VPpkwf6LIbxWCGpviDYJcrjZ&X-Amz-Signature=a2b4bc6586e7cea2672ee4746fbe6f1a871e06dba485ac8effc38cb23aa954f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
