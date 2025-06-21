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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXW7SZ3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeQikfi6u%2FmoubtM6vEy%2F%2BEMOU2uPbDAHDUcLucNeStAiEA3gCRTJ%2B28xI3zm4KXJTYreTGy6%2BxFaQfbJxgaL1BGRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoAVXnSaU%2BWVAv12ircA%2F0TzulnCwms27VXrK7fnlB11IT59Sh2EvplYcPp%2FQLAV70QQxUvnafy%2B7AsbntdKwQOfpBBwppoGfhTFAD54IIqRCuyy4%2FtbuTnXfM4QCQKb%2BULLcXrIMIMttqg8lCdaislqwOR4NnP31yGuaxIRL45KI6MTD9XMuAyG%2FmwRcOCqppUL4AS0fgtMUiH0kpaI5O5%2BKDGGq0Tf%2Brd9dq%2FqN%2F0tITJy1bPSaHuXzaqtVUTXSnBUmKB%2FfABSbyasHQSeADYl1sdO4smMsVAsBL2%2FNhx61FzAvhVK%2ByBWa0lf97wj3j1pvDt5A%2BrvgnEVwak8b6OPhykhszMWIqdmRlYPmG84bcP0SXBjOr5NdPrTEn0xu4YtoAwYuBIzaCohmpR9nbI%2BWhyIyr%2FKi5cPb0VuOuc182zgyQlNrZGK%2BAIczFexTGKcXnCv8PPVu6D29Z9Fe8Q0nP5%2FvCVsyu8GQqh9a3JBhU7%2FTBILDa1MfNT0jNgInhoi7a%2BL1xCIwmJxLJ9%2BrxoKNMwvmWEcivAxJmWzx8h3ArExRIkdYprnAb6YQvIj%2BtvUWkUnCbnDW3c58mWTIYbTc3Qy%2FgFl4QTQrhqrJ28I68gkzQ5Hnxr3yb%2Fqstt%2F%2FSV91ImFcgbDTA3MNqP28IGOqUBzGPIvgT%2FaMVRcgGjVPFnqc2CXtNXvggOzx%2Fmx89AyU%2BFq3jUga8JY5Nwq2eIhB%2BsvVsphRbz27w7MWuw34WXAQIqr24J6q161Czxb44SsrZ9RMKNqsxcG9r68rWWs7oi3SyeyFOnXAGwHSSuRy8fKjEsd5PnUE2KIGNf8f6kFsDxlyDx2sfKg6UnVn0kLHbnZBYqfe3q8a8ljjMZ%2BQdh%2BHqZ7jdi&X-Amz-Signature=f9073323faaed2379071d4913e2fb00e4ee2c90adf1cc4da65d995a7e66b21a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXW7SZ3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeQikfi6u%2FmoubtM6vEy%2F%2BEMOU2uPbDAHDUcLucNeStAiEA3gCRTJ%2B28xI3zm4KXJTYreTGy6%2BxFaQfbJxgaL1BGRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoAVXnSaU%2BWVAv12ircA%2F0TzulnCwms27VXrK7fnlB11IT59Sh2EvplYcPp%2FQLAV70QQxUvnafy%2B7AsbntdKwQOfpBBwppoGfhTFAD54IIqRCuyy4%2FtbuTnXfM4QCQKb%2BULLcXrIMIMttqg8lCdaislqwOR4NnP31yGuaxIRL45KI6MTD9XMuAyG%2FmwRcOCqppUL4AS0fgtMUiH0kpaI5O5%2BKDGGq0Tf%2Brd9dq%2FqN%2F0tITJy1bPSaHuXzaqtVUTXSnBUmKB%2FfABSbyasHQSeADYl1sdO4smMsVAsBL2%2FNhx61FzAvhVK%2ByBWa0lf97wj3j1pvDt5A%2BrvgnEVwak8b6OPhykhszMWIqdmRlYPmG84bcP0SXBjOr5NdPrTEn0xu4YtoAwYuBIzaCohmpR9nbI%2BWhyIyr%2FKi5cPb0VuOuc182zgyQlNrZGK%2BAIczFexTGKcXnCv8PPVu6D29Z9Fe8Q0nP5%2FvCVsyu8GQqh9a3JBhU7%2FTBILDa1MfNT0jNgInhoi7a%2BL1xCIwmJxLJ9%2BrxoKNMwvmWEcivAxJmWzx8h3ArExRIkdYprnAb6YQvIj%2BtvUWkUnCbnDW3c58mWTIYbTc3Qy%2FgFl4QTQrhqrJ28I68gkzQ5Hnxr3yb%2Fqstt%2F%2FSV91ImFcgbDTA3MNqP28IGOqUBzGPIvgT%2FaMVRcgGjVPFnqc2CXtNXvggOzx%2Fmx89AyU%2BFq3jUga8JY5Nwq2eIhB%2BsvVsphRbz27w7MWuw34WXAQIqr24J6q161Czxb44SsrZ9RMKNqsxcG9r68rWWs7oi3SyeyFOnXAGwHSSuRy8fKjEsd5PnUE2KIGNf8f6kFsDxlyDx2sfKg6UnVn0kLHbnZBYqfe3q8a8ljjMZ%2BQdh%2BHqZ7jdi&X-Amz-Signature=ae328694271ba22668221e2307879b6f29b474a189f56c3638f0f48a5bb18518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXW7SZ3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeQikfi6u%2FmoubtM6vEy%2F%2BEMOU2uPbDAHDUcLucNeStAiEA3gCRTJ%2B28xI3zm4KXJTYreTGy6%2BxFaQfbJxgaL1BGRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoAVXnSaU%2BWVAv12ircA%2F0TzulnCwms27VXrK7fnlB11IT59Sh2EvplYcPp%2FQLAV70QQxUvnafy%2B7AsbntdKwQOfpBBwppoGfhTFAD54IIqRCuyy4%2FtbuTnXfM4QCQKb%2BULLcXrIMIMttqg8lCdaislqwOR4NnP31yGuaxIRL45KI6MTD9XMuAyG%2FmwRcOCqppUL4AS0fgtMUiH0kpaI5O5%2BKDGGq0Tf%2Brd9dq%2FqN%2F0tITJy1bPSaHuXzaqtVUTXSnBUmKB%2FfABSbyasHQSeADYl1sdO4smMsVAsBL2%2FNhx61FzAvhVK%2ByBWa0lf97wj3j1pvDt5A%2BrvgnEVwak8b6OPhykhszMWIqdmRlYPmG84bcP0SXBjOr5NdPrTEn0xu4YtoAwYuBIzaCohmpR9nbI%2BWhyIyr%2FKi5cPb0VuOuc182zgyQlNrZGK%2BAIczFexTGKcXnCv8PPVu6D29Z9Fe8Q0nP5%2FvCVsyu8GQqh9a3JBhU7%2FTBILDa1MfNT0jNgInhoi7a%2BL1xCIwmJxLJ9%2BrxoKNMwvmWEcivAxJmWzx8h3ArExRIkdYprnAb6YQvIj%2BtvUWkUnCbnDW3c58mWTIYbTc3Qy%2FgFl4QTQrhqrJ28I68gkzQ5Hnxr3yb%2Fqstt%2F%2FSV91ImFcgbDTA3MNqP28IGOqUBzGPIvgT%2FaMVRcgGjVPFnqc2CXtNXvggOzx%2Fmx89AyU%2BFq3jUga8JY5Nwq2eIhB%2BsvVsphRbz27w7MWuw34WXAQIqr24J6q161Czxb44SsrZ9RMKNqsxcG9r68rWWs7oi3SyeyFOnXAGwHSSuRy8fKjEsd5PnUE2KIGNf8f6kFsDxlyDx2sfKg6UnVn0kLHbnZBYqfe3q8a8ljjMZ%2BQdh%2BHqZ7jdi&X-Amz-Signature=38ca292d6592fef0490df8a837c1fadda230bf0b27945b658953ae3ec0ffb785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZTXNJW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqb66cc1xfPVPKAvfFkR%2FluN1dCscT%2BtfYF0v6j76ZAIgfHJRMLuCDzMax59TNgmtBQKbr%2B7BgAjhj1lRpG6yV4QqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCmjaD9tsCNZ5mfBCrcA203HKVOAQB9JwkQNPEORrH8dng%2B5zWliFLuz1zpSjr4gRRZffX8vZjJgjGwG1CWWr6BtSSTbIbj%2FyGTToDLbVBob%2Fre7EKcaAMUmCiOOjrOAvLE7nOq%2FZ8gysUR4TYTJtkNb5v7bcmNhxiJROIDMdFS%2FqsB%2BkGcpCIUd8AO%2BLPcIEbbaJX2BqELAJhl6qHnyUX%2F5kZKBGcyTBD1xjvFyABP31AZ62ktk4XWvZy%2BYWd%2BMcPNlA6gznUj1voEsy0erWIGYuTgApf5FNO9Sb0Q4OyCgrZ6RUwg1xdbSIfTyJudSJwLVA73YKKgMG6c0CSfleYcMAq%2BWszdio%2FXOgR3JLdmRUvFO33N0AZCGe7W7o9h%2FMJz8Rp2mLo%2ByMIv8ASwJZ85OPWBdezBi6Hl5wNf6AcGrYIGIMiZERjeoW1RmszMkWuW9VNyrxnuXPq%2BB8vTYYI2m6H3iorxEg19%2BsVwVnvZ13F7RcyChVZ%2F90%2BBkyKDDOhGuGjZzZM62j4GnTZjyqx%2BxgggKYmnbNPNQL0g2U7LsqTbnXr1yL7mfY9O5SThBODFm19716v43oPTnEe5J6YgXH%2F6iXoikToGcvmlUl%2By1sOI7dfoNK1Zy5obvmqRralEzY16eAQVNqNyMMeP28IGOqUBQlDXHV3cpWdESHRcEESKMRIm5DuQ7NRFMAJvolq62hFB4GmkxW2mE2er6Lu0PKn9LIDGhiXmHCrtJBSsc20%2FqgSl8P%2F5aU2lC7isfvtvepKo0kaob8slGBhMqbRDRefGKvRdYFeY0dHKlkZLTY7sQplkymfQbqSPDuDo1%2FYoL0%2FHke7s7WwNKpqkLoSE1yx2N%2Bx8K0xRJ91y2Sp9rj%2FIKFwcupm6&X-Amz-Signature=d1ae7e519a302d430b6298420069e7fbd84a18af0a43b350119505ff238a8c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWCNKFM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Nu8F%2Fzw%2BneDq38EXLusGpd0Yp%2BYi7lincGyxuulu8AiAZcwBeDGza8zerJJrX8PYMcHSi6Sgss4jMkK0NsBDcVCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSxBdyvjL%2FkAqMVFKtwDm3UclookF%2F8W2gGt1LBTN07FoVHDjIK7aO49%2BIAlzYrnOsQFTDSsNRwx7BUZ6FEkJNZBv7ii3RJL7fydiSlMAVTOl4rXtatfRZFDzLmS%2BX1v3ooFefElb%2BOELXJp7XQX7N6EQVHKRLPQ209dm7nGjVmxCEVldcT0dzJbcOvobIL8xXMyz1VbiLmA8Q6eMWKnlKcLMqKrsJ67mhUjoLMsq0afc18Dzm50IMJk4hNmjnNe7IKNc6J9oEr7jJSjUk0UfhbzctzbCv1l3bgd5auHCJoDdJImVLZICTSo0q8BZ4mVkv5hwp0KRnPAzG8pUbJDlcxLwaut6VaPc3Mpt3IML85zGn4O4cuLdPaPfpSrC3B9l%2Bvf%2Bl2VEsLF9BYlzwEvs4ugvkcxSe%2FTGx%2FWaGTcIGx3DvM4vagit77AGTX81%2BH2WnOgx6x5nmArQLYZv%2B5u2mVyeqo2fdli3bYrxVmbnUiqRapU4QWtaH5EDUQirBV9zkrj663YKD6iy8fKQTrkliuiBM2vwDSHZORe0NDu%2FSiQ0STeGkz5JRKgJqYUqv9Sv7Q0lijs19KSMzrXTiiMWHQdrTLH%2BaGKeNY7l8ohg3h3meJakK9XtsFSi%2BU3F2FAdN3NddoNEwzMIEsw7dPbwgY6pgHVN4tITMKn5ZR3X5VJRi%2B8smw3BTrYUIks0VEpmYsXmPg3OQI9VgIcVf4x0kpE5yVvBV5Oa1ehyKIUGtxo3ZtXOcRjH%2BwJ71%2F7i51k8lm2GMAjNkkMR0VG3zYEgsYyiZ0tCgFLMnRHiAZF716akkTLDap3JvwkZYbjxw0LPRW77OTIoA%2FlLyMarRIr6JVN8p%2FQVsraw4zxyMS%2FHWJeG1tcUxOleOE0&X-Amz-Signature=a7e9f22c25ea8c879172995c18508198c39c386ec6ed46c8ac562808265fa728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXW7SZ3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeQikfi6u%2FmoubtM6vEy%2F%2BEMOU2uPbDAHDUcLucNeStAiEA3gCRTJ%2B28xI3zm4KXJTYreTGy6%2BxFaQfbJxgaL1BGRgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoAVXnSaU%2BWVAv12ircA%2F0TzulnCwms27VXrK7fnlB11IT59Sh2EvplYcPp%2FQLAV70QQxUvnafy%2B7AsbntdKwQOfpBBwppoGfhTFAD54IIqRCuyy4%2FtbuTnXfM4QCQKb%2BULLcXrIMIMttqg8lCdaislqwOR4NnP31yGuaxIRL45KI6MTD9XMuAyG%2FmwRcOCqppUL4AS0fgtMUiH0kpaI5O5%2BKDGGq0Tf%2Brd9dq%2FqN%2F0tITJy1bPSaHuXzaqtVUTXSnBUmKB%2FfABSbyasHQSeADYl1sdO4smMsVAsBL2%2FNhx61FzAvhVK%2ByBWa0lf97wj3j1pvDt5A%2BrvgnEVwak8b6OPhykhszMWIqdmRlYPmG84bcP0SXBjOr5NdPrTEn0xu4YtoAwYuBIzaCohmpR9nbI%2BWhyIyr%2FKi5cPb0VuOuc182zgyQlNrZGK%2BAIczFexTGKcXnCv8PPVu6D29Z9Fe8Q0nP5%2FvCVsyu8GQqh9a3JBhU7%2FTBILDa1MfNT0jNgInhoi7a%2BL1xCIwmJxLJ9%2BrxoKNMwvmWEcivAxJmWzx8h3ArExRIkdYprnAb6YQvIj%2BtvUWkUnCbnDW3c58mWTIYbTc3Qy%2FgFl4QTQrhqrJ28I68gkzQ5Hnxr3yb%2Fqstt%2F%2FSV91ImFcgbDTA3MNqP28IGOqUBzGPIvgT%2FaMVRcgGjVPFnqc2CXtNXvggOzx%2Fmx89AyU%2BFq3jUga8JY5Nwq2eIhB%2BsvVsphRbz27w7MWuw34WXAQIqr24J6q161Czxb44SsrZ9RMKNqsxcG9r68rWWs7oi3SyeyFOnXAGwHSSuRy8fKjEsd5PnUE2KIGNf8f6kFsDxlyDx2sfKg6UnVn0kLHbnZBYqfe3q8a8ljjMZ%2BQdh%2BHqZ7jdi&X-Amz-Signature=1baefb88ef23a8842a74c0e1f6bca6b62f25dc99b4ea244ae1b8451b25cc2726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
