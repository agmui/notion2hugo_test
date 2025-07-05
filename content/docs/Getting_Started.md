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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPKLYSV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAmvI2BEg5hVrD%2BOOpnPGTBLY0C0eWSkyfPdrf36EK2mAiA99hu67azzoM5gEdOa532TZ%2B6eI9KOgXl9n8zH%2Fj4ajyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMoTr4YAP6q40tqPe2KtwDxaPY1sv6R2P0QnWDvnXwJMXTf5Gf3u8ae%2B68oN1wJawPRhKdsrMb1rLC0%2B2UmXgd5LTKx9A%2BXh9PzrQAebDCIWSJ5nuasE9be70JF7tHy0Q4l96xbKZG5Wdq2uMyG54ACsZVQq8q9I1TYBeV3zXcRxhIE9wBqY1f2I2x5cm8StrBDLd8XDoe%2Bae%2FCVR9K9JjE6jBA66o2Zc0AZIrnmMFArPo5EIvQjd3WfQjLI8WHzTX9EVLP%2FHC6FGPZc%2BmeZFs1iXapCUEVmG9EsxxlTlpT6bUUd%2FalVJiVowTXkUMLl0%2FzmQZhkHTGGCmalbtM8TMMF5Nx3zRRHNu1NouMSIm01CjKkBnNegJWL7%2Bfh6dr6%2F%2FhjygwG2ha93C3HCB6h6SjL%2BgFgmwtBgcae9YvDrHjmOk%2B1Pv%2FsfEee%2Bky54%2Byq%2B7LKnMgeDbgAYzQs53toUNTSu7vwFYAZkDs0r%2BvTGQL8FwumYuOMn2AUVR8jVhhL5OKU5B%2BvQIuwNVKM1G%2Bx8%2BMSK5ZvNqnXQ%2BhY7rNfhW%2BCw0%2Bpix9h47w%2BQd0rE6C8dI3RNPVW2DrdSs0%2FK0q4UV%2BMEJWNQn75sGiCV7BReo7szJm%2BFJsV2Idftrp8yhho5NMOxV7PjAeenJAgYwt42iwwY6pgFfu%2FkdYdjizT1icbw%2FqvzwxpdCPfZ3Y00g5eU6wmfrQqM31p5p6kUewO8xH2%2Bw9KsJ%2Bgb%2FFtKHC4mctIgn2YeYhmXZWTP%2BGg8pbLlz6PXjtCjoovnlf8XTSLKflSKUNO78S1b9u%2FS9FNgWIZ5o4cTJEueAoQeeyy6UZOMmexSbkXojS%2Fizo1AmIGRIA74nl0a%2F9u77Qygx2ytrNSuAQft29RAsWAXd&X-Amz-Signature=aa43f44467bdfaa205b401a36612b6c7b6915b8e7042515eaf8848b31ed0c7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPKLYSV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAmvI2BEg5hVrD%2BOOpnPGTBLY0C0eWSkyfPdrf36EK2mAiA99hu67azzoM5gEdOa532TZ%2B6eI9KOgXl9n8zH%2Fj4ajyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMoTr4YAP6q40tqPe2KtwDxaPY1sv6R2P0QnWDvnXwJMXTf5Gf3u8ae%2B68oN1wJawPRhKdsrMb1rLC0%2B2UmXgd5LTKx9A%2BXh9PzrQAebDCIWSJ5nuasE9be70JF7tHy0Q4l96xbKZG5Wdq2uMyG54ACsZVQq8q9I1TYBeV3zXcRxhIE9wBqY1f2I2x5cm8StrBDLd8XDoe%2Bae%2FCVR9K9JjE6jBA66o2Zc0AZIrnmMFArPo5EIvQjd3WfQjLI8WHzTX9EVLP%2FHC6FGPZc%2BmeZFs1iXapCUEVmG9EsxxlTlpT6bUUd%2FalVJiVowTXkUMLl0%2FzmQZhkHTGGCmalbtM8TMMF5Nx3zRRHNu1NouMSIm01CjKkBnNegJWL7%2Bfh6dr6%2F%2FhjygwG2ha93C3HCB6h6SjL%2BgFgmwtBgcae9YvDrHjmOk%2B1Pv%2FsfEee%2Bky54%2Byq%2B7LKnMgeDbgAYzQs53toUNTSu7vwFYAZkDs0r%2BvTGQL8FwumYuOMn2AUVR8jVhhL5OKU5B%2BvQIuwNVKM1G%2Bx8%2BMSK5ZvNqnXQ%2BhY7rNfhW%2BCw0%2Bpix9h47w%2BQd0rE6C8dI3RNPVW2DrdSs0%2FK0q4UV%2BMEJWNQn75sGiCV7BReo7szJm%2BFJsV2Idftrp8yhho5NMOxV7PjAeenJAgYwt42iwwY6pgFfu%2FkdYdjizT1icbw%2FqvzwxpdCPfZ3Y00g5eU6wmfrQqM31p5p6kUewO8xH2%2Bw9KsJ%2Bgb%2FFtKHC4mctIgn2YeYhmXZWTP%2BGg8pbLlz6PXjtCjoovnlf8XTSLKflSKUNO78S1b9u%2FS9FNgWIZ5o4cTJEueAoQeeyy6UZOMmexSbkXojS%2Fizo1AmIGRIA74nl0a%2F9u77Qygx2ytrNSuAQft29RAsWAXd&X-Amz-Signature=ce11d30dc0e47492ffd429994d1ba9c5c428ccb9d0dd1f2b7cd91311a96edff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPKLYSV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAmvI2BEg5hVrD%2BOOpnPGTBLY0C0eWSkyfPdrf36EK2mAiA99hu67azzoM5gEdOa532TZ%2B6eI9KOgXl9n8zH%2Fj4ajyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMoTr4YAP6q40tqPe2KtwDxaPY1sv6R2P0QnWDvnXwJMXTf5Gf3u8ae%2B68oN1wJawPRhKdsrMb1rLC0%2B2UmXgd5LTKx9A%2BXh9PzrQAebDCIWSJ5nuasE9be70JF7tHy0Q4l96xbKZG5Wdq2uMyG54ACsZVQq8q9I1TYBeV3zXcRxhIE9wBqY1f2I2x5cm8StrBDLd8XDoe%2Bae%2FCVR9K9JjE6jBA66o2Zc0AZIrnmMFArPo5EIvQjd3WfQjLI8WHzTX9EVLP%2FHC6FGPZc%2BmeZFs1iXapCUEVmG9EsxxlTlpT6bUUd%2FalVJiVowTXkUMLl0%2FzmQZhkHTGGCmalbtM8TMMF5Nx3zRRHNu1NouMSIm01CjKkBnNegJWL7%2Bfh6dr6%2F%2FhjygwG2ha93C3HCB6h6SjL%2BgFgmwtBgcae9YvDrHjmOk%2B1Pv%2FsfEee%2Bky54%2Byq%2B7LKnMgeDbgAYzQs53toUNTSu7vwFYAZkDs0r%2BvTGQL8FwumYuOMn2AUVR8jVhhL5OKU5B%2BvQIuwNVKM1G%2Bx8%2BMSK5ZvNqnXQ%2BhY7rNfhW%2BCw0%2Bpix9h47w%2BQd0rE6C8dI3RNPVW2DrdSs0%2FK0q4UV%2BMEJWNQn75sGiCV7BReo7szJm%2BFJsV2Idftrp8yhho5NMOxV7PjAeenJAgYwt42iwwY6pgFfu%2FkdYdjizT1icbw%2FqvzwxpdCPfZ3Y00g5eU6wmfrQqM31p5p6kUewO8xH2%2Bw9KsJ%2Bgb%2FFtKHC4mctIgn2YeYhmXZWTP%2BGg8pbLlz6PXjtCjoovnlf8XTSLKflSKUNO78S1b9u%2FS9FNgWIZ5o4cTJEueAoQeeyy6UZOMmexSbkXojS%2Fizo1AmIGRIA74nl0a%2F9u77Qygx2ytrNSuAQft29RAsWAXd&X-Amz-Signature=861744afb9db1b00ba0f0cdc324269ce64c3f23a7306223ced15968cff7def3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAATFBU%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFUCNn%2Fm8e%2BlTSpfxzi5WB0IXv06cH6c%2FG7PSftpxJ55AiAaB3zVSk5vOV2%2FbKy0nrS3c8hF15JTKSiU31LvArsnayr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMHSmVxpEkLDPvlclEKtwDpChM21ifnVMKOuudDpHs6p5ecKfz5LUT45aPetR%2FxtxtqDRTw0%2BrhO%2FMlD7LwyYx3viinvbUk6UiIxaFiAOj8jg4D0qnCVAsz2Ia%2BMc%2BSKQg954P6%2FrIhifn54EdHxRBEWrJhSVypmQFFLgOLN4oodAlg6zFm%2B%2FRwo6l9cOarRTs46yJW29Vab8MBxrPOqUdyZ9PPNc0vrpmIqlzfA1PtZERcL5tysAGQ9nYej07kHlFDeo61CY2vUGElPPa2YPmGxVH4PwxdSUwCz4BxXtgGnLRnc1lB5%2F7E9BIVnN%2BjZ77CBocRiDk8I%2BGiakIPdPz5%2BJgvRx%2Fz%2FIAYph4Cc5%2FUAwndONE9gXsVGvRmsuLpkqexlHOOhYlB%2Bl%2FPckTNIP066IybrpoaLQmUqDY0YY3uWfnK6PWcQ%2FKtjsXNYkFETWnuqOIj5DQNBscoOoU9f1rE%2FiLZ01uvm8O9bA6DpHOjZW0jxcAW%2Fur%2Fy9setW4SSpKz%2FfKyezuNh1ZgwBAl20JFC4NuOUW7fuAip7niz4DzcD5ykE64TWHOdeNxRwRNXK8ufvRIC25iYGKmlacQK4SxQJ3MTKUuP48BF3heUtsU75PM%2F03%2Fp8aUpMQ2%2BPCIoc17wkYpImW0b1oC9YwgYiiwwY6pgFctHvrbyxn9lssEBI7fdKrqtYpKv8hQTbZL356BWC7d%2FXohmOidPyGTtr5sYIX5b2dv56gv2FYMkE0s8B6mv1SFMPNE5G6EsOoqRu5PxiLLP3GpjRXSsQpcBAUkV4XGjzdfwha4I4aBmcS7xR9mY93H0KbbTJHG%2F0WYnZyBSfqEX%2FVt%2Fhtfy2quY1NF0FxyNdPMjG%2BklERwqHwm1xR8vXASH7dTWEa&X-Amz-Signature=68eef574349190978c4bebcf746feb5b5d59898b8ae5d9c614ad6baec8770963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ZT6XA2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICoBrSz9fg3ji8Uk4%2BtHVqpJsGqn1V%2FmWtW6kGGbsLHXAiBLMVZTSvAAYuBfhA%2BSULHPy4IqHrbpx4JcmNdNpuNHsyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMuumgOTOxInmFbjWxKtwDQ5evGingf%2Bpy3am4DYQpQ28h54PCKUBvTNs%2Fxc7eXIqdpWFnaakekjCI1XutdCHqBPOVSe59mLal4vVldYZWufsCB6cRZsjd2y%2Fm1ojJHij2tpGP%2F5n2y0iCHQoVeik5HINPlrqQX34zijGxBUCqR4XgcrNTNw%2BUvCgJYCgSi7W3Plq0fKOK1I%2FV9FQhEXawJVSJNLjKcdgT0yT8z97Ap5wHL2m4Pkwa70DB%2BZiuWO4p%2BmDfpjisDLqbp1x2IblWJRAoeHAElj8nNbdfqgbe5q4ygfNcmfnS674gAmI3phOJEd0Rfx7436N0O6%2FatUeD0wfLN0Sn%2BRKrQTK5n8nDrAEhBRDTPex4%2FyOjRtPusI3jKLbCdIcMPO%2BGTo0iwH0plVUomK5IPyXQEZhuMoOaTN6Tb%2Bis5USMJz0tEnu9eAKU6zWzz39ayBXVPK7DZbZ6SjDbwzNvTI10SJ33IeVFbyxNDbDHrT8bloNerH0vYrA6y%2B7q%2FwSsmvzl0Q5GSLWPUr3hZnEEMBsEu0RoI3nlWPqsR3vUvKWDDfr5jCD0XUMDxIJ6Ss%2FPEyZ3ljqiAGdEBUn0nmDuV3mcyTzFtSGvkt6usBLaKlcN2CB6ItVBkrPL8ZKgXII7Jdp8aLow3oKiwwY6pgEEt80K8t0ZtcQt%2FPISBC1mb2D%2F5TOx8TTXPu0oZlIHUMIAgPMx8jOlW0KAPNvvHSARLZMlWZl%2FMFr%2FQNz6IF3HaU29Zf%2BUQuY2xZUdsUj4uWeqWb%2BpFXh3daglGsKUDJc14g67gQPenoXPHxy1e69PpKgahjEybYiOvzo9jnWMGoEd2%2BSvfSvIqmMX4kleETAjvnrIQ2qYiEnoeW1yDfXgmZyfe%2F5R&X-Amz-Signature=6dc13cd7515be398cf76d2abf23a07c70d5dd2c4294133f6a3c5589cbc595e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPKLYSV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAmvI2BEg5hVrD%2BOOpnPGTBLY0C0eWSkyfPdrf36EK2mAiA99hu67azzoM5gEdOa532TZ%2B6eI9KOgXl9n8zH%2Fj4ajyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMoTr4YAP6q40tqPe2KtwDxaPY1sv6R2P0QnWDvnXwJMXTf5Gf3u8ae%2B68oN1wJawPRhKdsrMb1rLC0%2B2UmXgd5LTKx9A%2BXh9PzrQAebDCIWSJ5nuasE9be70JF7tHy0Q4l96xbKZG5Wdq2uMyG54ACsZVQq8q9I1TYBeV3zXcRxhIE9wBqY1f2I2x5cm8StrBDLd8XDoe%2Bae%2FCVR9K9JjE6jBA66o2Zc0AZIrnmMFArPo5EIvQjd3WfQjLI8WHzTX9EVLP%2FHC6FGPZc%2BmeZFs1iXapCUEVmG9EsxxlTlpT6bUUd%2FalVJiVowTXkUMLl0%2FzmQZhkHTGGCmalbtM8TMMF5Nx3zRRHNu1NouMSIm01CjKkBnNegJWL7%2Bfh6dr6%2F%2FhjygwG2ha93C3HCB6h6SjL%2BgFgmwtBgcae9YvDrHjmOk%2B1Pv%2FsfEee%2Bky54%2Byq%2B7LKnMgeDbgAYzQs53toUNTSu7vwFYAZkDs0r%2BvTGQL8FwumYuOMn2AUVR8jVhhL5OKU5B%2BvQIuwNVKM1G%2Bx8%2BMSK5ZvNqnXQ%2BhY7rNfhW%2BCw0%2Bpix9h47w%2BQd0rE6C8dI3RNPVW2DrdSs0%2FK0q4UV%2BMEJWNQn75sGiCV7BReo7szJm%2BFJsV2Idftrp8yhho5NMOxV7PjAeenJAgYwt42iwwY6pgFfu%2FkdYdjizT1icbw%2FqvzwxpdCPfZ3Y00g5eU6wmfrQqM31p5p6kUewO8xH2%2Bw9KsJ%2Bgb%2FFtKHC4mctIgn2YeYhmXZWTP%2BGg8pbLlz6PXjtCjoovnlf8XTSLKflSKUNO78S1b9u%2FS9FNgWIZ5o4cTJEueAoQeeyy6UZOMmexSbkXojS%2Fizo1AmIGRIA74nl0a%2F9u77Qygx2ytrNSuAQft29RAsWAXd&X-Amz-Signature=120431967cab35b14a50aaea249c0434e118ed70057fd7d9bf980ea1fbc329f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
