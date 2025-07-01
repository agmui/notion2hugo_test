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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HY46D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHicXXN1Epu4ttudYhoUGEZ0lEOqOyWYNVEqeFe9cGRtAiEAiW0EGDE7Hgf739ybnkb9X2k%2BysQVZub53p3LRB%2Bg6ZIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtu19a5grqAb%2FSZbSrcA%2BBEYkyJIpvcR0UhkJVpEdnVONYt0u%2Fcr5KqsF%2Bq9sXnGF6QNZlfWIm1YIGygMWyg4uh8BRefMlosvdckhNdhDkg4t%2FpesD08LhP06iHEhCjJHIkQuK8Feh9gkDv8I4WqgEpM0YaT6I%2FwWTEPrRla5S%2FJKzYjb5g3PTjrhcoRa1yJFsrnjow4QpfelkMo3c4C5bEIUNIlvOLZOUTM2CjILYKeeH5yyHKk78D5uInFTSSZXnOahOiul2WuF4GM2SUF8ehDIro2R3BaXJoLt9r25w6t2v6c9iHAHEmhTbe8D4%2F1ncjO2r8gHW7hydoR6AeSqKJd9RvV3%2FvsrCgn3vEcNN%2BdbaDtIDXM%2BWOc5BY4n%2FCnEiJOzKexp2SIJn07TVXeidAVELLr9x6kVhiMjWXI6u9AYGSHwmsGUwpcn5smYQ9S3%2BEPngAn3%2BFB9ZOLKaH8kM34e11e3Q9KkbidQefsDW3QEwjXM4R8GPLCu0sleYq2f7Rcpk64xzQ5JmurJB995NBu2dt1sh6Br2kYopnKwAPbi5tDd7iiECFz993vooF7r6eu%2F0EIJ%2FF9srTRodAqudhvU%2BWZMFIEWgZB%2FW9US95lPd%2Bwjhx85qKaXcPrSHrCXbRjgfgZ7cwRbQnMNvDkMMGOqUBSw59mrFpDtkALl1S5FIv7A3vTGHobwelNwIs%2ByJv32rEPNSAw7XHfkgNMVd6fyq5wvjJbpB22eW917YwtC8cGydaB6LOhd6a7JkmWgOI4H3lCMPu1b5Z8yvV44wjL6FGIpOH4RTQoBgnVlrGNs2lPCcBdDFpuxJLyDDjwRWv1ju44cPXjFGuwz%2Fk4ICUbStKEpZW17O%2BwqldtTajrPKSJPGePMWQ&X-Amz-Signature=082c68e7f262c480b7d1f6c0df25f9480bc918d282af3091faf85defc3448199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HY46D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHicXXN1Epu4ttudYhoUGEZ0lEOqOyWYNVEqeFe9cGRtAiEAiW0EGDE7Hgf739ybnkb9X2k%2BysQVZub53p3LRB%2Bg6ZIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtu19a5grqAb%2FSZbSrcA%2BBEYkyJIpvcR0UhkJVpEdnVONYt0u%2Fcr5KqsF%2Bq9sXnGF6QNZlfWIm1YIGygMWyg4uh8BRefMlosvdckhNdhDkg4t%2FpesD08LhP06iHEhCjJHIkQuK8Feh9gkDv8I4WqgEpM0YaT6I%2FwWTEPrRla5S%2FJKzYjb5g3PTjrhcoRa1yJFsrnjow4QpfelkMo3c4C5bEIUNIlvOLZOUTM2CjILYKeeH5yyHKk78D5uInFTSSZXnOahOiul2WuF4GM2SUF8ehDIro2R3BaXJoLt9r25w6t2v6c9iHAHEmhTbe8D4%2F1ncjO2r8gHW7hydoR6AeSqKJd9RvV3%2FvsrCgn3vEcNN%2BdbaDtIDXM%2BWOc5BY4n%2FCnEiJOzKexp2SIJn07TVXeidAVELLr9x6kVhiMjWXI6u9AYGSHwmsGUwpcn5smYQ9S3%2BEPngAn3%2BFB9ZOLKaH8kM34e11e3Q9KkbidQefsDW3QEwjXM4R8GPLCu0sleYq2f7Rcpk64xzQ5JmurJB995NBu2dt1sh6Br2kYopnKwAPbi5tDd7iiECFz993vooF7r6eu%2F0EIJ%2FF9srTRodAqudhvU%2BWZMFIEWgZB%2FW9US95lPd%2Bwjhx85qKaXcPrSHrCXbRjgfgZ7cwRbQnMNvDkMMGOqUBSw59mrFpDtkALl1S5FIv7A3vTGHobwelNwIs%2ByJv32rEPNSAw7XHfkgNMVd6fyq5wvjJbpB22eW917YwtC8cGydaB6LOhd6a7JkmWgOI4H3lCMPu1b5Z8yvV44wjL6FGIpOH4RTQoBgnVlrGNs2lPCcBdDFpuxJLyDDjwRWv1ju44cPXjFGuwz%2Fk4ICUbStKEpZW17O%2BwqldtTajrPKSJPGePMWQ&X-Amz-Signature=aac43ea6c8f6cf3efa3b0916fd896f9a35e7b0641c0fecc98e3228a5bef27457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HY46D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHicXXN1Epu4ttudYhoUGEZ0lEOqOyWYNVEqeFe9cGRtAiEAiW0EGDE7Hgf739ybnkb9X2k%2BysQVZub53p3LRB%2Bg6ZIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtu19a5grqAb%2FSZbSrcA%2BBEYkyJIpvcR0UhkJVpEdnVONYt0u%2Fcr5KqsF%2Bq9sXnGF6QNZlfWIm1YIGygMWyg4uh8BRefMlosvdckhNdhDkg4t%2FpesD08LhP06iHEhCjJHIkQuK8Feh9gkDv8I4WqgEpM0YaT6I%2FwWTEPrRla5S%2FJKzYjb5g3PTjrhcoRa1yJFsrnjow4QpfelkMo3c4C5bEIUNIlvOLZOUTM2CjILYKeeH5yyHKk78D5uInFTSSZXnOahOiul2WuF4GM2SUF8ehDIro2R3BaXJoLt9r25w6t2v6c9iHAHEmhTbe8D4%2F1ncjO2r8gHW7hydoR6AeSqKJd9RvV3%2FvsrCgn3vEcNN%2BdbaDtIDXM%2BWOc5BY4n%2FCnEiJOzKexp2SIJn07TVXeidAVELLr9x6kVhiMjWXI6u9AYGSHwmsGUwpcn5smYQ9S3%2BEPngAn3%2BFB9ZOLKaH8kM34e11e3Q9KkbidQefsDW3QEwjXM4R8GPLCu0sleYq2f7Rcpk64xzQ5JmurJB995NBu2dt1sh6Br2kYopnKwAPbi5tDd7iiECFz993vooF7r6eu%2F0EIJ%2FF9srTRodAqudhvU%2BWZMFIEWgZB%2FW9US95lPd%2Bwjhx85qKaXcPrSHrCXbRjgfgZ7cwRbQnMNvDkMMGOqUBSw59mrFpDtkALl1S5FIv7A3vTGHobwelNwIs%2ByJv32rEPNSAw7XHfkgNMVd6fyq5wvjJbpB22eW917YwtC8cGydaB6LOhd6a7JkmWgOI4H3lCMPu1b5Z8yvV44wjL6FGIpOH4RTQoBgnVlrGNs2lPCcBdDFpuxJLyDDjwRWv1ju44cPXjFGuwz%2Fk4ICUbStKEpZW17O%2BwqldtTajrPKSJPGePMWQ&X-Amz-Signature=b1b69464719d4f02da09b535780075d0a20e0d7dcf17102e8c07d22be54df83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJQ5A7A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FytRpvZezisNOE9bX%2B3ALYfyLwwhD%2By0O1oT9%2BGWhRAIgAptZZh%2BPxUnQNfhUjgRH9TNAYc9Y0j3e%2FrEPa%2FZQUggqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7DNsh39P%2FHYKXxmSrcAwIGpOvf9oEhoIpebMZ2fxKqYc5dYUmeM9TLhEC%2Fx0Z%2FYdgiPxwBiTJO4bfwacXZ7O4lgG74IUEnL8DdnL6p18OEnWaSx7sJBJzHPDlvc9vis%2BJF1jUBPkamC8M%2Bf2T6rIxmC195J%2BXDln11buhq2V31H1uR%2BHy1bFF8cxtwvR0Ibt5yOC8ZBs87SCXV0cXGsNHaAIaqmMtTawJI3%2BNOCBiQZYzJfcQeELCcEa0ZuRMtV7UksQWgGfbKeXraHiv75TdLC%2F1822pUTZukr4PwY2%2F8fy2VSxvHvphNunyYKjuSwGpG1qoOp%2B3H3mMEEopBXqlXITlN3rwUIu8J68MBCsQ%2BZvdoI6IAStbfoqEJqQqBEqhAONELUFPpNoblvnEG5FejeC2kkO%2FQHlOqwrnYM7AAEPNhFZKgm8499MckbfzSwG26p6XFDVQMN5TiTJiSJeXcAJ%2FJwu4OPHttOnRjoEeAg0F94C%2F9i7vAmhv6bV%2F3ESgjw15%2FegIXMSRRFxqda5BQ31KEzCPY5aFaodLynh6LpJpWWq3wwrUXM%2F3Itr9Bpm0UKtgZZSg0c65VgO56hKzaBlJ3eipH%2F8Vwp76J3GZ8x1%2ByT5GhvjJ9DUe%2B1joCcDZZ8oeTd6Eaeu1rMLvEkMMGOqUBbFawLlLzvoUjcd%2FV%2FadVzQGHbxQPvkCdj3JwgugzFFQs0YPUZ1FFYrA6Xvt93yeVDpdNj8q0zyhuAZBC4WJNcnc4tj1qCu5Ba%2F1I%2Bs3fva3rP0Nsg6y1AYh3b%2FRcPrMMz5LFog3ZtFqC2qqYTKCbefgwlqDiFJpxToY7DqTp3a%2B6NUpeGXxch6NauOfQiiqlSrJkJTvMyU8jON22Qfk1okgcyhbt&X-Amz-Signature=83b4e9166381d81f482fba8dd1651b8496cc6e13d1ea9b72701be81a4faebebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSXAEREO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCglKxJKElJz8TFEy1ETVQ%2FA2kjNwlX2Daqwmr27beV%2FgIhAODb0GgeTUUB1M%2F2YGM%2Bg5DvfVtGN3MLzb2AVKKO3bBOKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm%2BreAF6j5yaOYHq8q3ANvr2Y5guKTA9QhpSgdFG1J%2BrXaRDszn2VJoM4MQeD6Zgn3RzxiM%2FcJKrtrzzjfMjOk0Pi9FBt0B81lbAeLWn%2FaECo%2B8S7EyTPk5hKVAeRR0nLKPoJxfqqm3TY0DQn%2Fo8CU2FI79V0sFV3Ubvg4HP1s1ZIEJjdXunXl7WqO2PN5CnuNJ9Yq7VBh4s4mCVUE%2FxmOtTpPrRJ0z9q5iV7UC7AIyPeghHJuP0qIgBGRajou%2FbDyADe4BODlky2Wt3X7xgHNf5fhyH4iV%2BcHH8QscQKqcDb0rOHi%2FGpjPrrQ8PCgWrK6P%2Fm6%2FQ2RgVdMZpo34BYfHe7iQta3Ecc7z3IPbDyJdHd3cD%2Fljq6yrt0hyeDU%2Frr%2BMw%2F7S%2BIx9jM1JQadiS0i%2FqLq%2FCAby2Ut3HvhKMtLT7YMy7RnZBJu%2BZJ9VCyyxppOXrea96NPMkKNWdawUxuHAdOFnC5oQdl08Ed%2BVw9axOM1ozvOVTb0Mx1VV5M1PEcKmwI%2F3wWEzOK91bKm%2FRJDWazlkzCH5SKOMMX3viOG%2Ba3ElVIUq2MeuQVdPZ6hBBsOi%2FsMv1bETY%2F8e1dtfiqnDFZ8DT8LG4cHO1qAZL2lEvgfTuqthV7v%2BjWmP7yusAJHXvkEC3Y0%2FEI5BjDfw5DDBjqkAXib640WH4A1p5kCEKr31MkOznz%2B%2BL3BNaP3WmQ2dcNu2etU5fa9Nt%2FsbOqFHtuAhYN1XtIOzidhWpO8Whlli916M1jCwOIj%2Fm9vKt60J%2F0D%2B2mNZK9GYYqq%2BZnr4EOAunLRtH25fECBe%2FpN7SWY2ERmJ8SNXMXVLnrgllpxJ8en1jUTNEtfDTJ670zeqKR1xFzsI6yrXnyN4Ibjx7obTYAK6dam&X-Amz-Signature=20686fded915e92dd3a36f49a6c078162566532898e51a9d7ddeaee6af64d6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW2HY46D%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHicXXN1Epu4ttudYhoUGEZ0lEOqOyWYNVEqeFe9cGRtAiEAiW0EGDE7Hgf739ybnkb9X2k%2BysQVZub53p3LRB%2Bg6ZIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtu19a5grqAb%2FSZbSrcA%2BBEYkyJIpvcR0UhkJVpEdnVONYt0u%2Fcr5KqsF%2Bq9sXnGF6QNZlfWIm1YIGygMWyg4uh8BRefMlosvdckhNdhDkg4t%2FpesD08LhP06iHEhCjJHIkQuK8Feh9gkDv8I4WqgEpM0YaT6I%2FwWTEPrRla5S%2FJKzYjb5g3PTjrhcoRa1yJFsrnjow4QpfelkMo3c4C5bEIUNIlvOLZOUTM2CjILYKeeH5yyHKk78D5uInFTSSZXnOahOiul2WuF4GM2SUF8ehDIro2R3BaXJoLt9r25w6t2v6c9iHAHEmhTbe8D4%2F1ncjO2r8gHW7hydoR6AeSqKJd9RvV3%2FvsrCgn3vEcNN%2BdbaDtIDXM%2BWOc5BY4n%2FCnEiJOzKexp2SIJn07TVXeidAVELLr9x6kVhiMjWXI6u9AYGSHwmsGUwpcn5smYQ9S3%2BEPngAn3%2BFB9ZOLKaH8kM34e11e3Q9KkbidQefsDW3QEwjXM4R8GPLCu0sleYq2f7Rcpk64xzQ5JmurJB995NBu2dt1sh6Br2kYopnKwAPbi5tDd7iiECFz993vooF7r6eu%2F0EIJ%2FF9srTRodAqudhvU%2BWZMFIEWgZB%2FW9US95lPd%2Bwjhx85qKaXcPrSHrCXbRjgfgZ7cwRbQnMNvDkMMGOqUBSw59mrFpDtkALl1S5FIv7A3vTGHobwelNwIs%2ByJv32rEPNSAw7XHfkgNMVd6fyq5wvjJbpB22eW917YwtC8cGydaB6LOhd6a7JkmWgOI4H3lCMPu1b5Z8yvV44wjL6FGIpOH4RTQoBgnVlrGNs2lPCcBdDFpuxJLyDDjwRWv1ju44cPXjFGuwz%2Fk4ICUbStKEpZW17O%2BwqldtTajrPKSJPGePMWQ&X-Amz-Signature=2fc8ea7927fb080abcfb90f5d705fd25a1e96097e65bd7c5b91c934b49e19741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
