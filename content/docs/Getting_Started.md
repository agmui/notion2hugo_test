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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667536744A%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaxcARJpgxozXb%2BwgYja9SXzPR33nggJNRp%2F%2FRN1U4tgIgNT7ewuGWG85aAUa1XE5WbCrAGG5%2BbmIEPD7p%2F6XQojsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPe%2BO0QNxj9DzLLSyircA3lVh8zcyIgQ%2BWslNW4UR8g2vqjy5%2Fj0H%2FWd44zlfS35Xb36bqnIAqc2TaXADbdZhGlPJ4%2BeO8I3LfK5J6kJq2HeILfAWdPd6u7fBY9bdWZQVE7cX316flodczrrVpLUScaff0DZlepL1WvVf4LUIn5qPLTNstI4flm7hxFqTlVrVTm2YmiisgPHkVseE0YP3iQUE%2FNmCiY9INA%2F1LmJrrpxGQJQSdP4E9MuMyhU3vrWHwq2R9WHRGi8INtmqnVDMrTN9uEsR3U2W%2FcI%2FSs6fAXy4D8YQYALNLmARVX7zeOllJy%2F4ArSxGfCeIm%2FGUUFX%2BLUz78XRbKPkqWPsat6ueI2ZBmuYHxScWwQimHAgT7peLszqx%2F61jSxgDTzvlXXkETYdGtEXOiwZVScJb8LUh96eDn54GF9WHJy7xX46PoDko3Akzatx0GDdd8ez45mA0DaD%2BtlxsB3%2BTKCZfQKTrQxw1RCsWD7P5X2Ry1tKyyrpL7newMcqKzwJ3wLqGdNW7H3NIKqyDjyZN0SVu%2F7f8KluHXKOBn2Slc5kiZVdS4sbqgALVUoqi8%2BrWfCM0lHjbAvtVTOxamWxi%2BDAPR7kqO0u2%2FLZCnQPGmTML7jjo8bDwV%2FXTmeg%2BqDmF2bMO3PqcMGOqUBVeNaiGq%2BI78Nz08qF826Ad84IT%2BRe511t4u0mPM%2BvId7pOkqfPjCKMdk1iZ0TP3Bg6fpywHqvGsQ5CmPcwhhGdXR4%2FSwy9Gs3i9Xo%2F1sVqA5SvYE38pYydqbv6MGN77V4ix4IOhGA2A1oF0WPw%2F%2FwGjxPoNhMQHwkdRpkNOH31Zteau0wYqd73AS9gtZm5QwxQAFQyA9qh2mKamQKCFhqZ2G8icY&X-Amz-Signature=ec2099da1dc2747cd40483cd6886f113b92459ed86813da936830b0317e01d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667536744A%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaxcARJpgxozXb%2BwgYja9SXzPR33nggJNRp%2F%2FRN1U4tgIgNT7ewuGWG85aAUa1XE5WbCrAGG5%2BbmIEPD7p%2F6XQojsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPe%2BO0QNxj9DzLLSyircA3lVh8zcyIgQ%2BWslNW4UR8g2vqjy5%2Fj0H%2FWd44zlfS35Xb36bqnIAqc2TaXADbdZhGlPJ4%2BeO8I3LfK5J6kJq2HeILfAWdPd6u7fBY9bdWZQVE7cX316flodczrrVpLUScaff0DZlepL1WvVf4LUIn5qPLTNstI4flm7hxFqTlVrVTm2YmiisgPHkVseE0YP3iQUE%2FNmCiY9INA%2F1LmJrrpxGQJQSdP4E9MuMyhU3vrWHwq2R9WHRGi8INtmqnVDMrTN9uEsR3U2W%2FcI%2FSs6fAXy4D8YQYALNLmARVX7zeOllJy%2F4ArSxGfCeIm%2FGUUFX%2BLUz78XRbKPkqWPsat6ueI2ZBmuYHxScWwQimHAgT7peLszqx%2F61jSxgDTzvlXXkETYdGtEXOiwZVScJb8LUh96eDn54GF9WHJy7xX46PoDko3Akzatx0GDdd8ez45mA0DaD%2BtlxsB3%2BTKCZfQKTrQxw1RCsWD7P5X2Ry1tKyyrpL7newMcqKzwJ3wLqGdNW7H3NIKqyDjyZN0SVu%2F7f8KluHXKOBn2Slc5kiZVdS4sbqgALVUoqi8%2BrWfCM0lHjbAvtVTOxamWxi%2BDAPR7kqO0u2%2FLZCnQPGmTML7jjo8bDwV%2FXTmeg%2BqDmF2bMO3PqcMGOqUBVeNaiGq%2BI78Nz08qF826Ad84IT%2BRe511t4u0mPM%2BvId7pOkqfPjCKMdk1iZ0TP3Bg6fpywHqvGsQ5CmPcwhhGdXR4%2FSwy9Gs3i9Xo%2F1sVqA5SvYE38pYydqbv6MGN77V4ix4IOhGA2A1oF0WPw%2F%2FwGjxPoNhMQHwkdRpkNOH31Zteau0wYqd73AS9gtZm5QwxQAFQyA9qh2mKamQKCFhqZ2G8icY&X-Amz-Signature=785379dc6030bfb0811a73ab43f3891ed97f234beb010fec3260603087afd29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667536744A%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaxcARJpgxozXb%2BwgYja9SXzPR33nggJNRp%2F%2FRN1U4tgIgNT7ewuGWG85aAUa1XE5WbCrAGG5%2BbmIEPD7p%2F6XQojsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPe%2BO0QNxj9DzLLSyircA3lVh8zcyIgQ%2BWslNW4UR8g2vqjy5%2Fj0H%2FWd44zlfS35Xb36bqnIAqc2TaXADbdZhGlPJ4%2BeO8I3LfK5J6kJq2HeILfAWdPd6u7fBY9bdWZQVE7cX316flodczrrVpLUScaff0DZlepL1WvVf4LUIn5qPLTNstI4flm7hxFqTlVrVTm2YmiisgPHkVseE0YP3iQUE%2FNmCiY9INA%2F1LmJrrpxGQJQSdP4E9MuMyhU3vrWHwq2R9WHRGi8INtmqnVDMrTN9uEsR3U2W%2FcI%2FSs6fAXy4D8YQYALNLmARVX7zeOllJy%2F4ArSxGfCeIm%2FGUUFX%2BLUz78XRbKPkqWPsat6ueI2ZBmuYHxScWwQimHAgT7peLszqx%2F61jSxgDTzvlXXkETYdGtEXOiwZVScJb8LUh96eDn54GF9WHJy7xX46PoDko3Akzatx0GDdd8ez45mA0DaD%2BtlxsB3%2BTKCZfQKTrQxw1RCsWD7P5X2Ry1tKyyrpL7newMcqKzwJ3wLqGdNW7H3NIKqyDjyZN0SVu%2F7f8KluHXKOBn2Slc5kiZVdS4sbqgALVUoqi8%2BrWfCM0lHjbAvtVTOxamWxi%2BDAPR7kqO0u2%2FLZCnQPGmTML7jjo8bDwV%2FXTmeg%2BqDmF2bMO3PqcMGOqUBVeNaiGq%2BI78Nz08qF826Ad84IT%2BRe511t4u0mPM%2BvId7pOkqfPjCKMdk1iZ0TP3Bg6fpywHqvGsQ5CmPcwhhGdXR4%2FSwy9Gs3i9Xo%2F1sVqA5SvYE38pYydqbv6MGN77V4ix4IOhGA2A1oF0WPw%2F%2FwGjxPoNhMQHwkdRpkNOH31Zteau0wYqd73AS9gtZm5QwxQAFQyA9qh2mKamQKCFhqZ2G8icY&X-Amz-Signature=3c5b7d9559332f1c080db88224100ea65eb3ef5609978d996b96664d34b156cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YSQXWM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIB5gmNq4eGvB8ixVexCUR97p8Y4ws0gEt1HF06J8bDmaAiAzqQhqTjG2876mgrqjne4Pr3rt3xvPnlMcuJ%2BcTARhwyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMGliYXq3c9zSutoWEKtwD0VaWS%2BFahG9dVPaspaUYa1fQ7CJqTpq%2FjTa4%2FaObPsauecuJbDIr8KV3lwWyiD9jBlNrYVqJZmLocXt6IjUiio%2FvKmIN2XmPrOBjaVVPmfLO4lFWek6Pi1enNeIxNuqQoJJhA031chMGenUtFcy7CSEBgw12mE7H1DEVppxo6iU8ViG9XipdTx86P2bUFajfgFTe53D3Qyx2ewc9YTOEfrLan%2FheLK7QMvH8r%2FdCxaOtjr4ljc65LequQ7EWTEa4pbKkhpOn6Hh0BsciKvFxmLfViThv0FhH95W4r%2BTg7ijop79X9jBGrTe%2Bf9dt62m445sDKUObpgdawGN%2FzxIVkOL3c7iEHdv%2FRpsASuQxIYRFu1v96xcHVeFdyVu%2Bijw5seBkQIAnUxart6y2qJAMbgzV6e8J6YgNX74hTCmwnKNI52e2qHROmjMAafzFqXvq2jvEzw5y1UlUw4t64IESnytph7eoV2AWEeKTJ3%2Bxks7igi6zUaI%2BZ9L5GvcHtwjhJJSlfCNbN5PQ1Ng8RpePz2REFlOFCFixKHnImcaTdTp0ADkt7lZA%2FjjxmQ9TBkyGW73Zc7DG5JytUUp5gAW72VVouiYI1hIaFdmnssGf8SB0UQdTMLHh8%2FGOzjQwos2pwwY6pgFIIRfsuczooMzVPKCR9p%2B9MjiOMmyupmMC0nZxID%2BxSDA%2Fw5jXkW5H5RYnX2xYLEiFOBpCntpXZFhMVSuG1ck0F4sdQ1zCb4Ii4c7727%2FP9czI2C24b1aIf6SiCW%2BP8NWHQmUBZv1fw8V37yy5DeSf5m2n2PFacdre0zlyw6MFO5F7sVv0RBRjB3Thit9oqBbA9vJDum%2FcY8X9xyBnZdhfr86ClmDR&X-Amz-Signature=0e718dbebccb64604d0f2675abd6dd2ccb824e4ea69dfb32821b8e7d22bc8fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVIJWORU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDQiy%2BSJPu0O0p59ZiLgBvxzWm7ShspJtNL%2FEm7%2FjwlZAIgdMaOGrGM3nJLw5fx4pw%2F8XxsDG5ByGQLAyNDmIDcvlYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM%2BzkDJ4RzZLZr86%2FSrcA%2FTYydy5TwlSgg6vvgNZTUN9WBzvt1G0ZUt0x%2FxMeCTXbteZ%2FKce6P6B5%2Flp4kKib5ilf7hTBlGO%2BY%2F2KFxfzXVnKNBRbdg%2BasPA%2FZ1xmdxql4AQjt7DqKmZ%2FfZzycYddlz%2BTa8xl%2FTbwkEaCXdz87kohN5Hn%2BVBM6c5M0XVt22rM3SUBorMIGQX6IPF25u78DEp%2FgzATME7c03c5ko1kbzo2%2BYmGjYJV7D0aLefYo28FRBBrPasiyw9R5%2FOVBzyH1v1UIYva9WWeX0QjnGaBnvaXLa6%2FI4A6S7PYjGyq%2FWjCTMTHATMDHZz68VFq6AFMeh%2B8InNpXyR0sou95U4uQxtfVJfE7yiEG%2BVj3B2CBYvx71Xa3sXjnDT7P3pr4LvuXRgtR1H75ONacr%2BhEbPasghlEf27bZKOpiLU%2FxVQsMp9%2Fy2yDhIVZz1HXmAIXQTEfRyubbHi43UD9ro08H9LJsfrBmonTb2V2EYbvxPAB0r5%2B9wRpN4kgz0ytulHvipRwlb92F%2B3Hg%2FMc9FynxmnkmsA0ztdrKklwZX2uQRyCH%2BPmdh%2FhJKQPP%2BdqmGQvO68RDOrkCD1YVoXvtm9WBi8Fb6vuOH7zpEQTZVFg6e7AYf8Hv7safUfQrLg03rMOHGqcMGOqUB%2F%2FVvVHVqKrbpUQecgKjcKSNMiSX1fHU8US4RqEOhIguqsb%2BXdtiXHDhV1W%2Bt%2BRlBvLdcKlboxooMTnkPTnHAo4poqtmnrxPG3jzkoQ3kAWq6eqkUaGeO4QcVskhrfFeO9LGMqFefnwe%2F6xjKyPu8ZgBRjrsUu11ocUxJVudiWhvkGwRaGZXvrRXGCSpOj%2FGESCRoyfK3edZYhlNW88gB265hisBD&X-Amz-Signature=b37dbc2cd56427b77b6beb1d335260045e69abfa069792c2103c91da795d23ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667536744A%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaxcARJpgxozXb%2BwgYja9SXzPR33nggJNRp%2F%2FRN1U4tgIgNT7ewuGWG85aAUa1XE5WbCrAGG5%2BbmIEPD7p%2F6XQojsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPe%2BO0QNxj9DzLLSyircA3lVh8zcyIgQ%2BWslNW4UR8g2vqjy5%2Fj0H%2FWd44zlfS35Xb36bqnIAqc2TaXADbdZhGlPJ4%2BeO8I3LfK5J6kJq2HeILfAWdPd6u7fBY9bdWZQVE7cX316flodczrrVpLUScaff0DZlepL1WvVf4LUIn5qPLTNstI4flm7hxFqTlVrVTm2YmiisgPHkVseE0YP3iQUE%2FNmCiY9INA%2F1LmJrrpxGQJQSdP4E9MuMyhU3vrWHwq2R9WHRGi8INtmqnVDMrTN9uEsR3U2W%2FcI%2FSs6fAXy4D8YQYALNLmARVX7zeOllJy%2F4ArSxGfCeIm%2FGUUFX%2BLUz78XRbKPkqWPsat6ueI2ZBmuYHxScWwQimHAgT7peLszqx%2F61jSxgDTzvlXXkETYdGtEXOiwZVScJb8LUh96eDn54GF9WHJy7xX46PoDko3Akzatx0GDdd8ez45mA0DaD%2BtlxsB3%2BTKCZfQKTrQxw1RCsWD7P5X2Ry1tKyyrpL7newMcqKzwJ3wLqGdNW7H3NIKqyDjyZN0SVu%2F7f8KluHXKOBn2Slc5kiZVdS4sbqgALVUoqi8%2BrWfCM0lHjbAvtVTOxamWxi%2BDAPR7kqO0u2%2FLZCnQPGmTML7jjo8bDwV%2FXTmeg%2BqDmF2bMO3PqcMGOqUBVeNaiGq%2BI78Nz08qF826Ad84IT%2BRe511t4u0mPM%2BvId7pOkqfPjCKMdk1iZ0TP3Bg6fpywHqvGsQ5CmPcwhhGdXR4%2FSwy9Gs3i9Xo%2F1sVqA5SvYE38pYydqbv6MGN77V4ix4IOhGA2A1oF0WPw%2F%2FwGjxPoNhMQHwkdRpkNOH31Zteau0wYqd73AS9gtZm5QwxQAFQyA9qh2mKamQKCFhqZ2G8icY&X-Amz-Signature=20a86bf7725684ab5eca224dc51a356391b4438a483163371f0ea69502bdb899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
