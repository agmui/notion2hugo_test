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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3OZDEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAndQLFQsGoC48i4hW2jVBm62KLITnGI4eKR8%2BO7lOv2AiAkqKg0YECsUNIIfsvhE9Fhg%2FHg9XTi6CLMVCdl52%2BUByr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMDwGOiGj6AZRiyEMIKtwDvCLKixhJnwHDE9Euhwduoo%2BIw9YKDJEoEBwE97Bu1vXoBjuojJ63RXWl8dzv4bfSVI8szEJNen1tpkc%2BlY1NEIu8KOEFXVVl5g7EqPwY7CX5ZNXJI1eSNSrZCTQ%2F%2FA3HaCzWgnVaqJdh8A7ujvKjkh1M%2F5aYokiDo1%2FChfFwpN%2FYdEhqEPSvjnVJdq0rIXv%2FwWqpEpToUExomnb7eT9zxKQFZ%2B8nc29uJiXt1dwgeZCRDSUrTGT%2BFOdHnwxcABOo2BPAvy%2BBTKWaNP4H2sE%2FTuI4fxZWxNcZMv6MPfq13HavNG7Zvr18VZxzW2YhPBPCzmMaxmV2Ek2DbxaLFrwExjZ0ReEiImSGYE1a6GLtXAbeuo1jwOzyZvy3ViipPjU%2Ffl1%2F4M6Vqo8EWI7uL34vStJIVE3NXrcfNpiGisQ1yuoxT6AMaEWm6Lv%2F07kazchGLx0%2FQwebYUcq8hesfJ1Vz40wcs81amoUB8YGJen7VZRkMuartWpEBHbvKclBQ7Jd3JYlFTNkI%2BVHVQKGFwUULl4feM%2BZcwqhznlprYbrd6iLgRDqbWRrnICibvv%2BbOXAiMzpy2DfJ%2BMKxW9i6aSAr8cXo2ipSl5U48SN5DSeuvrwnn4pSn%2BTbWm205wwk9ORwQY6pgENQrsljdjYEflS3Im52y%2FxNBh0WN2NGDrIUH%2BKjfGfwgAl3q2NiQtAmBafstd%2BDyc4UWCs%2FhrMO%2FOAlz3ka2%2BaMhO8Q%2Bj5VmsaO8SsBkr6QF5HPOb1jGzbKHs783%2B%2FEryCnRpekB2dEzI8epN6M1czANjnsHMKwbrIRY657QSseu8pJNtYFoE1sbHXQZpyodoZydYk1sT9XbCYJbVs1aZX%2BDnY7bF3&X-Amz-Signature=21ef33066414439be211faa60a76ff5cb574000c06af60bfebb57ee7adabb0de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3OZDEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAndQLFQsGoC48i4hW2jVBm62KLITnGI4eKR8%2BO7lOv2AiAkqKg0YECsUNIIfsvhE9Fhg%2FHg9XTi6CLMVCdl52%2BUByr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMDwGOiGj6AZRiyEMIKtwDvCLKixhJnwHDE9Euhwduoo%2BIw9YKDJEoEBwE97Bu1vXoBjuojJ63RXWl8dzv4bfSVI8szEJNen1tpkc%2BlY1NEIu8KOEFXVVl5g7EqPwY7CX5ZNXJI1eSNSrZCTQ%2F%2FA3HaCzWgnVaqJdh8A7ujvKjkh1M%2F5aYokiDo1%2FChfFwpN%2FYdEhqEPSvjnVJdq0rIXv%2FwWqpEpToUExomnb7eT9zxKQFZ%2B8nc29uJiXt1dwgeZCRDSUrTGT%2BFOdHnwxcABOo2BPAvy%2BBTKWaNP4H2sE%2FTuI4fxZWxNcZMv6MPfq13HavNG7Zvr18VZxzW2YhPBPCzmMaxmV2Ek2DbxaLFrwExjZ0ReEiImSGYE1a6GLtXAbeuo1jwOzyZvy3ViipPjU%2Ffl1%2F4M6Vqo8EWI7uL34vStJIVE3NXrcfNpiGisQ1yuoxT6AMaEWm6Lv%2F07kazchGLx0%2FQwebYUcq8hesfJ1Vz40wcs81amoUB8YGJen7VZRkMuartWpEBHbvKclBQ7Jd3JYlFTNkI%2BVHVQKGFwUULl4feM%2BZcwqhznlprYbrd6iLgRDqbWRrnICibvv%2BbOXAiMzpy2DfJ%2BMKxW9i6aSAr8cXo2ipSl5U48SN5DSeuvrwnn4pSn%2BTbWm205wwk9ORwQY6pgENQrsljdjYEflS3Im52y%2FxNBh0WN2NGDrIUH%2BKjfGfwgAl3q2NiQtAmBafstd%2BDyc4UWCs%2FhrMO%2FOAlz3ka2%2BaMhO8Q%2Bj5VmsaO8SsBkr6QF5HPOb1jGzbKHs783%2B%2FEryCnRpekB2dEzI8epN6M1czANjnsHMKwbrIRY657QSseu8pJNtYFoE1sbHXQZpyodoZydYk1sT9XbCYJbVs1aZX%2BDnY7bF3&X-Amz-Signature=f438bd35a0224b0ffef214fda1829533b12c55459bff6bb98f6da28c533be6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3OZDEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAndQLFQsGoC48i4hW2jVBm62KLITnGI4eKR8%2BO7lOv2AiAkqKg0YECsUNIIfsvhE9Fhg%2FHg9XTi6CLMVCdl52%2BUByr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMDwGOiGj6AZRiyEMIKtwDvCLKixhJnwHDE9Euhwduoo%2BIw9YKDJEoEBwE97Bu1vXoBjuojJ63RXWl8dzv4bfSVI8szEJNen1tpkc%2BlY1NEIu8KOEFXVVl5g7EqPwY7CX5ZNXJI1eSNSrZCTQ%2F%2FA3HaCzWgnVaqJdh8A7ujvKjkh1M%2F5aYokiDo1%2FChfFwpN%2FYdEhqEPSvjnVJdq0rIXv%2FwWqpEpToUExomnb7eT9zxKQFZ%2B8nc29uJiXt1dwgeZCRDSUrTGT%2BFOdHnwxcABOo2BPAvy%2BBTKWaNP4H2sE%2FTuI4fxZWxNcZMv6MPfq13HavNG7Zvr18VZxzW2YhPBPCzmMaxmV2Ek2DbxaLFrwExjZ0ReEiImSGYE1a6GLtXAbeuo1jwOzyZvy3ViipPjU%2Ffl1%2F4M6Vqo8EWI7uL34vStJIVE3NXrcfNpiGisQ1yuoxT6AMaEWm6Lv%2F07kazchGLx0%2FQwebYUcq8hesfJ1Vz40wcs81amoUB8YGJen7VZRkMuartWpEBHbvKclBQ7Jd3JYlFTNkI%2BVHVQKGFwUULl4feM%2BZcwqhznlprYbrd6iLgRDqbWRrnICibvv%2BbOXAiMzpy2DfJ%2BMKxW9i6aSAr8cXo2ipSl5U48SN5DSeuvrwnn4pSn%2BTbWm205wwk9ORwQY6pgENQrsljdjYEflS3Im52y%2FxNBh0WN2NGDrIUH%2BKjfGfwgAl3q2NiQtAmBafstd%2BDyc4UWCs%2FhrMO%2FOAlz3ka2%2BaMhO8Q%2Bj5VmsaO8SsBkr6QF5HPOb1jGzbKHs783%2B%2FEryCnRpekB2dEzI8epN6M1czANjnsHMKwbrIRY657QSseu8pJNtYFoE1sbHXQZpyodoZydYk1sT9XbCYJbVs1aZX%2BDnY7bF3&X-Amz-Signature=eb560589c89e6db31c78d7427ea2a64a0b4f1be9b63e5403c60c32a70ef3e693&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XELI2JRP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCAReMVHPUIv%2FU77qtuVEu6vE9GPpH9%2FNczmHMBCXopOAIhAKgVUFDQIIfVD8nOTfz7GtFPSDEdrxgtNEbxNLYv7wlwKv8DCBMQABoMNjM3NDIzMTgzODA1Igz0TIzbDxfXDcE4FCMq3AMp47l5983rb%2F5bsbXfbcBxptvWmiXRbUrzWbR0a1oroWTBvDJFTWYSUWX03N9q1MMT7GHZDx7gk2CuoB%2B57y8FSLH%2Ff0D%2BGFk3m9QIcOvq0wIIhY6xRFDhM1ZPwQzQiSZo88Fi3hHfbzZ1hDXFlSE38T1BDlfbK1G%2FZVLZTKRbfSzF0FIbv%2F6u7umX5nzvcbI%2F9G7Q0A15ArWEVd%2FsCMkeuZ6mC0wrNaEPUsCR5ltNLHoTqdHZ5B%2FGEyFeCbu86W%2FQpxp3RYbiCleD3w9o8v%2BYEgafvVx69DbBq8%2BerqCVvsLly%2FG01dXJSXgTk4hMk7Z%2BSEW3cwsrzlEGPPbeUsgWsX8fbnEapiuOZAV9%2FOHuj2yy8YJbyIUtUyt4Ad%2FjxaCZ5Dqb4MLeITFoXnYTpywWZZFqQ%2FlJ%2Bvk%2BaqIOozxJTWp2eDQCQyvX%2Boq%2B4vTvBoyzGF%2B0%2FLTjm9Sip3dNwSH8WDTt30kbemefjafX7cDyUdd%2B%2FBmLZBOztaML0iqCFX0LW9yEHCStMuKhFqlaV%2BsZslzFDvViS58JkanRZ5s9JReKdLRTfM4ArC66%2B3LMs%2BBWdcC6ZCgh8OhhB3xdqZWnclZFseGzOX9LrzxXNyClikhb%2Bgvo%2FaTejbxgHjDe05HBBjqkAckdhyyWfamsWRlJcHKf%2FFEIIoIL%2Bw3KsXFbBEHxvKkL8lpCO1ST%2F8ez%2BvTD5ZU45xeFnS4HqjLDT1ZDbCZODKCYXQ2YH8vMvem5LzG%2BBHKrr3npjp%2B5sTfGl3vBrwgTgHEukg%2BJMkD522mGrhKy6r3707uLQDZk7bVajxrY8S3iPmVtR2TFCx7ultFKim%2BXBgVmgfLt2dRrHTNL6mCWEd01760%2B&X-Amz-Signature=0ae26d303818eb0886f58c6f40011395152f9864ba96dc72abda2f182858304c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFIIDN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFqKYwYzTYTBA74WVwuv37aihfsVl%2FuDkuRj0tCewLpoAiEA93furIyZ76bQp%2FrM5NQvP31zzhTz0kWBgZzgl2RLkkEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDN0T0IcKdr2dB1hRVSrcA5vjh7iJYmbiirXjruXE5PrdhSoSPrpdapB5KCuNfcXmFgyiL8FFCDtI5LGhfWmLqZZqT8VwKg4y2UiXc%2B1ghV2wiQLY6peVSqr27NVAFSwWHWN83oSoibF1SWtiSdsIXp%2FQXKoAX3iGOSMWJL1f5zqOTm03KcN52aLY%2BXXLyr44vGFZvjpR0bu4UM2H7uPA%2BfeygqiliYxMnrwaKAgawFuP3%2FV6X8p9ZnTe9MZoCGfzZweaT7j3nyK8LabMXd9E4qcuJbKH3XTk6m5rA7ectDos089W0M%2BwJA2v11x4kgNyrHBm%2FqnXxF5ays05dnRB%2FRiwNn6i1ZDt4vrt5xnPc0nlePyPI82E2QXgEW%2BltJ9kxK8zRvuq4reK1GI0bhmbvBbQNsK%2BKRgb4Z%2FMYycPODzFAtBufsuw6%2F7B1KX4TL9SU%2FVl6LonqXTnCyfA%2BEK27pFC5IOlaJqGCvBDAGNlpwlbFfo4aWe2Ebu1pfLAPac%2FweTHAD%2Byrmz5N%2By1bEssOavuDG3H6dQhi6AWSskSrGpriodQ4llOEXS61ycZr%2FC%2Fwfx%2FlaXH3f9FdzWFFUVHD%2BENxc3jzgbsEBhNRAfp5nE5fE2z1MlYQhgUUUrU0kHoOu0dFZg%2FN%2B%2BLoJAeMPzTkcEGOqUBMmywV3IRJj0NjWYDabHP7UJRIsRUETaaBiZcEpFYVmgFGF0nGo8ncRbkZjgPJsHS3fOGcm1zJU7OKYHlCoCvQX%2B%2BSZjrJuqiHi1%2FRqCa43QhEe29myI4Z9a4D0cUi0zfcJxAZ9pa10TqcEDivCelYLl49uHaCkleI3E8BxazHx7SAWBnjN0OrAs7hp5NTElowJxNA6YF3PLLOLdY1EPoseXPP45j&X-Amz-Signature=029d8395b9a68f27e05ff21c16d1a357c22ca2b96b7dcd218852021942274562&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3OZDEK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAndQLFQsGoC48i4hW2jVBm62KLITnGI4eKR8%2BO7lOv2AiAkqKg0YECsUNIIfsvhE9Fhg%2FHg9XTi6CLMVCdl52%2BUByr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMDwGOiGj6AZRiyEMIKtwDvCLKixhJnwHDE9Euhwduoo%2BIw9YKDJEoEBwE97Bu1vXoBjuojJ63RXWl8dzv4bfSVI8szEJNen1tpkc%2BlY1NEIu8KOEFXVVl5g7EqPwY7CX5ZNXJI1eSNSrZCTQ%2F%2FA3HaCzWgnVaqJdh8A7ujvKjkh1M%2F5aYokiDo1%2FChfFwpN%2FYdEhqEPSvjnVJdq0rIXv%2FwWqpEpToUExomnb7eT9zxKQFZ%2B8nc29uJiXt1dwgeZCRDSUrTGT%2BFOdHnwxcABOo2BPAvy%2BBTKWaNP4H2sE%2FTuI4fxZWxNcZMv6MPfq13HavNG7Zvr18VZxzW2YhPBPCzmMaxmV2Ek2DbxaLFrwExjZ0ReEiImSGYE1a6GLtXAbeuo1jwOzyZvy3ViipPjU%2Ffl1%2F4M6Vqo8EWI7uL34vStJIVE3NXrcfNpiGisQ1yuoxT6AMaEWm6Lv%2F07kazchGLx0%2FQwebYUcq8hesfJ1Vz40wcs81amoUB8YGJen7VZRkMuartWpEBHbvKclBQ7Jd3JYlFTNkI%2BVHVQKGFwUULl4feM%2BZcwqhznlprYbrd6iLgRDqbWRrnICibvv%2BbOXAiMzpy2DfJ%2BMKxW9i6aSAr8cXo2ipSl5U48SN5DSeuvrwnn4pSn%2BTbWm205wwk9ORwQY6pgENQrsljdjYEflS3Im52y%2FxNBh0WN2NGDrIUH%2BKjfGfwgAl3q2NiQtAmBafstd%2BDyc4UWCs%2FhrMO%2FOAlz3ka2%2BaMhO8Q%2Bj5VmsaO8SsBkr6QF5HPOb1jGzbKHs783%2B%2FEryCnRpekB2dEzI8epN6M1czANjnsHMKwbrIRY657QSseu8pJNtYFoE1sbHXQZpyodoZydYk1sT9XbCYJbVs1aZX%2BDnY7bF3&X-Amz-Signature=8a831c9057cf6dc0477a26d261c2b9520c89b5749be06b986cff9a71a1ebe634&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
