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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRC2NVC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEWP8wIAWrJDftSZJDOZSXtd3c7R5soKAqNk1LZnNzqwIgSc2V1AElSh9J%2B10xLa0wH%2BLICyfaKuSFVsCiMa6UnOsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3EkKEd1%2F%2FQrsQhSrcA07K9z7v7Zlw4I0wOC1H7VDUlU5MrqJs70qH9%2FQohBvqDJ5YhYUVGV9oEJmOM1dF0uSQA%2BgGjdzRQqY0Yi1ZJnGpixKUMr7%2BbnjO%2FgH%2FB3WC%2F5Ot7KCJVq6FxDiFg%2FkigbBpeEzidtPQeAc7M1hKadNatKFV%2BI5rv1jPcOcWfZqySVTm9xqqDWMPOe0c05bXoEWR1Z1K9CSQVViOhdivSTIbSRxcc9a4edME6TmxpHRuxXESfWdLed0Yi7XbQpEwY9jFe9lOUkFJazc8bNE5u0BnfCTpdZtg8Wd5ZG8%2FqFwlNk6tyOUSdOpRV%2BsKnt%2FOyq%2BGoEcXcVVAzVDR%2B1wjc74axgG4Cdyrx2FGA6WL6FfxsfTeD2gz50tXk3wxar26hEFVBf3kZXquGpX2204cIll4LYteYkOnlieNbZPYlbLKLkN%2FBlWEcKl91HszmF8FCzb1V666SogcGP2%2F%2Br09d5usAqwJ9y4low0eCWRC9ep9Z%2BNHObJ1mxcquhAJHDwRS%2FT%2BrovQw5UYBN7XRVbb0mTiUkvjcnHOiqeCrcd91WYczO1jUseZ7Tnqwahb55Si07aOVRXMhLMPmJHfVaoD9vYLFfklOk7LMn%2FwQ9IlCEyZdtZRCHmNlJHafRwBMMW5n8QGOqUBJ%2FJzqoCklkeMuR%2BGRPbjZz7e33ab%2FVxG3nVBsLMMjLLwu8uE%2F7VCuSaOnGaVQ5qQxVq%2B3JKJ64PsulSxuiHw1AkLPpnqd8Ji3NKmT8RFbAjyNozBdNoGJl2W0h7kR%2B4%2BZRVLD7t8ZfgYMmfHLbNaszdEul7zmugMHSwPhv7xODVi5VX22y%2Bjo8ubr%2BkCWJGwj0n0gHhbx8majQ302uPkEotjANxk&X-Amz-Signature=6cfa5ff657dd45cc3dca9cbac4bfa5e8c53219f4b028bbeb202537ad500a5ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRC2NVC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEWP8wIAWrJDftSZJDOZSXtd3c7R5soKAqNk1LZnNzqwIgSc2V1AElSh9J%2B10xLa0wH%2BLICyfaKuSFVsCiMa6UnOsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3EkKEd1%2F%2FQrsQhSrcA07K9z7v7Zlw4I0wOC1H7VDUlU5MrqJs70qH9%2FQohBvqDJ5YhYUVGV9oEJmOM1dF0uSQA%2BgGjdzRQqY0Yi1ZJnGpixKUMr7%2BbnjO%2FgH%2FB3WC%2F5Ot7KCJVq6FxDiFg%2FkigbBpeEzidtPQeAc7M1hKadNatKFV%2BI5rv1jPcOcWfZqySVTm9xqqDWMPOe0c05bXoEWR1Z1K9CSQVViOhdivSTIbSRxcc9a4edME6TmxpHRuxXESfWdLed0Yi7XbQpEwY9jFe9lOUkFJazc8bNE5u0BnfCTpdZtg8Wd5ZG8%2FqFwlNk6tyOUSdOpRV%2BsKnt%2FOyq%2BGoEcXcVVAzVDR%2B1wjc74axgG4Cdyrx2FGA6WL6FfxsfTeD2gz50tXk3wxar26hEFVBf3kZXquGpX2204cIll4LYteYkOnlieNbZPYlbLKLkN%2FBlWEcKl91HszmF8FCzb1V666SogcGP2%2F%2Br09d5usAqwJ9y4low0eCWRC9ep9Z%2BNHObJ1mxcquhAJHDwRS%2FT%2BrovQw5UYBN7XRVbb0mTiUkvjcnHOiqeCrcd91WYczO1jUseZ7Tnqwahb55Si07aOVRXMhLMPmJHfVaoD9vYLFfklOk7LMn%2FwQ9IlCEyZdtZRCHmNlJHafRwBMMW5n8QGOqUBJ%2FJzqoCklkeMuR%2BGRPbjZz7e33ab%2FVxG3nVBsLMMjLLwu8uE%2F7VCuSaOnGaVQ5qQxVq%2B3JKJ64PsulSxuiHw1AkLPpnqd8Ji3NKmT8RFbAjyNozBdNoGJl2W0h7kR%2B4%2BZRVLD7t8ZfgYMmfHLbNaszdEul7zmugMHSwPhv7xODVi5VX22y%2Bjo8ubr%2BkCWJGwj0n0gHhbx8majQ302uPkEotjANxk&X-Amz-Signature=eb10dcdcae3338818f0e36a6ed8c0115b0af5fa1b30cc8b837403157a7c96e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRC2NVC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEWP8wIAWrJDftSZJDOZSXtd3c7R5soKAqNk1LZnNzqwIgSc2V1AElSh9J%2B10xLa0wH%2BLICyfaKuSFVsCiMa6UnOsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3EkKEd1%2F%2FQrsQhSrcA07K9z7v7Zlw4I0wOC1H7VDUlU5MrqJs70qH9%2FQohBvqDJ5YhYUVGV9oEJmOM1dF0uSQA%2BgGjdzRQqY0Yi1ZJnGpixKUMr7%2BbnjO%2FgH%2FB3WC%2F5Ot7KCJVq6FxDiFg%2FkigbBpeEzidtPQeAc7M1hKadNatKFV%2BI5rv1jPcOcWfZqySVTm9xqqDWMPOe0c05bXoEWR1Z1K9CSQVViOhdivSTIbSRxcc9a4edME6TmxpHRuxXESfWdLed0Yi7XbQpEwY9jFe9lOUkFJazc8bNE5u0BnfCTpdZtg8Wd5ZG8%2FqFwlNk6tyOUSdOpRV%2BsKnt%2FOyq%2BGoEcXcVVAzVDR%2B1wjc74axgG4Cdyrx2FGA6WL6FfxsfTeD2gz50tXk3wxar26hEFVBf3kZXquGpX2204cIll4LYteYkOnlieNbZPYlbLKLkN%2FBlWEcKl91HszmF8FCzb1V666SogcGP2%2F%2Br09d5usAqwJ9y4low0eCWRC9ep9Z%2BNHObJ1mxcquhAJHDwRS%2FT%2BrovQw5UYBN7XRVbb0mTiUkvjcnHOiqeCrcd91WYczO1jUseZ7Tnqwahb55Si07aOVRXMhLMPmJHfVaoD9vYLFfklOk7LMn%2FwQ9IlCEyZdtZRCHmNlJHafRwBMMW5n8QGOqUBJ%2FJzqoCklkeMuR%2BGRPbjZz7e33ab%2FVxG3nVBsLMMjLLwu8uE%2F7VCuSaOnGaVQ5qQxVq%2B3JKJ64PsulSxuiHw1AkLPpnqd8Ji3NKmT8RFbAjyNozBdNoGJl2W0h7kR%2B4%2BZRVLD7t8ZfgYMmfHLbNaszdEul7zmugMHSwPhv7xODVi5VX22y%2Bjo8ubr%2BkCWJGwj0n0gHhbx8majQ302uPkEotjANxk&X-Amz-Signature=e5c7dbd974f7fc979075281e9d9c9c9433942c04da69cbce4095603943f70b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQUGAJB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCmMOrDZBL2XJtlthLa9q5ghi3mSyaXPe1ocWcMflzuiQIgPZG77cIcFZVGV8zk7iG9gufqJpYafREOOK8wUBvS5vMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPh4Wkld%2ByKd8FnDyrcA0hRVZlOfBnqycw%2Fg9Mp4l95z7STdBoH%2FRGwUlfJhCdofuuYpIxot9LFyChdqgd3YvPPRzRHT8rzByV7SRDVUh9d5igBnuNrGxnzZJvekrMY0TZw3XurerBcHvi6n7KafBFQv9cLEGzLl8yRyEdzf4LzK00HymhfOMfkeovx1MrnGQF5RrpusqN8DPo07BeGoOPN80XNvPcO5VvN%2FRgcSbQ7pSTKPvQAI9peo7CAtuCPDxvn%2BKb3hafniAMkd6ps8VzsI4CSfXcLgnlwCN5HIeh1eiaHcOutqfEQm%2BEzrDGy89eGdcJrN%2Bj%2BalD6pyc8wEiiSisCaXQdk5BJnuEyqbrfmDIGFsTFSbZz1XcGllm4B0mj2wK2tK86mhE9l51TOFfNZJJpYmTrwZNDWyxHAgWXbya4i1OW%2B9YpFmGfVwqm%2FFgBJaDsCMjXsjqEFli9eDycbnLO9N%2FRa3NUmhfRYmE8uzWCkZjuAUeecB3rmzsG9X2Qi5l%2FBy1n7b6JqYsJN6hgQwWkV4Zwjwf096wiPLI8Ijm63Dm8bJU9mdH6PsmhJDVRX651rJUjDnhvjFr9i%2B9EL7HtusbDRK8UG49LMBygMPFgVB75iBB0nQ3hVd2iG%2F6bKtkJyh9usbkgMIe6n8QGOqUBY5tDr%2Fpb1Obm3wLRcgKvNFrbwfjzyGmPbgLfxgTawmyg8j86JY6im%2Bq7pC8R1AI3zVUJRwlizMofecOwAdT22z1q6mBsRnNza1wh%2BPS7SFQaZNqKjQIH%2B4QEkxEnrsn6WbDdB771t6kHZgbxg82GuR3skOuv%2BKnT37Uz53TsUNKnu2f4g9ypdld%2BmJ9RFngr2FHhczhpge9h8iS6fGeLpUCoxzaD&X-Amz-Signature=ff21bacdd172de67ab2062025091795615822799dabf0d0e9464d858f60ee0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YQS2UTL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRQJVXv5VZH%2Fcj%2FSY39l8Mz2JiCjG60YS%2BGn3Ht5h6zQIhAL4FH61MVZBUcyokzxYmlu0VgrmSRTTrkn5KnvIKhke7KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAp9DlW0mo499vVaUq3ANxAF619PGajGjFe5juP0DRYSxVjgEkvovTFwmIrbjhyuZX%2FhlhDtmeLeDMpnVRyrc0ZvEyx8ZaCS4Aizv86sLC2brcclvZIs8UpNMYjCijuyMIyzi4g3Mt2AJJkfAQJ7ZdrPkEjIhfsT5px%2F1IGK2aAR1QGgwAsks%2F20BwfZqBBvAlrUZGw2ib9UE8fHBK0WuhjcVNpmecH6Chq0SAqX03sfX87ZhVDZPycca1XHwGjS6EuOIVuUmtVthwj5vLeT%2BNrnzQrnI9uVI4v38R8cgaFXgQdnLHwPzOnb7sLk%2Byp3vkDchA3TgnG38KKv9N%2FzpwCEQhCPhiMWbv7eD%2FJpeUZmvjeeZT00mnqAD5YWUTGWVzkpRtg73dmMT%2FPd18wG6DKoxeY%2F%2BfW2zUum%2BUefT5bBqodMam%2F0nwb1PKEhONEoclfPl8QXEsHqd0gtSQfHT%2F1oSwGcIHVe1ab6et1A4bpSXcVcLESJvPWKlH9fOHMPxLbmxWtgplDb%2BIvU6dw9NJa%2Fb5N0OA08TTb52ndt0WvAdZ3Mqp1PHBIXqPkPW73Gd3Bk7Y2kwBDkN0JtttW8pU%2BvxgGjx7cuhFYWFJ9VFyqeW4CBnodZfrHnrQqJbGh%2FkpBQUFYIX7EtK5pjCPup%2FEBjqkAYem7t5%2BqFa6zKqYy8qqrWrwzkNXI6uaIaFpagfFIIHzMz3pa4fNb%2BXPdbD%2BkyzXAH0U10o4%2FkE2E8H19TUUYdAjf1me45XEJ0HlcCbKvfLIsRXXy9Odash3leBULCtjtQ7qPMcViG%2BfMx3oG65ybnUk5dW%2FPfGciLFm04hSQ7w%2FnC7sgIRVN17f7gQg%2BKkbui3GFLBSR7Ayw0YQGA4uD6Cfq4%2Fp&X-Amz-Signature=970b8ab27519393fb7f9bcc94ab6c6dc7e4f43fb8228ae25ddf0c6cbd307e70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRC2NVC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCEWP8wIAWrJDftSZJDOZSXtd3c7R5soKAqNk1LZnNzqwIgSc2V1AElSh9J%2B10xLa0wH%2BLICyfaKuSFVsCiMa6UnOsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3EkKEd1%2F%2FQrsQhSrcA07K9z7v7Zlw4I0wOC1H7VDUlU5MrqJs70qH9%2FQohBvqDJ5YhYUVGV9oEJmOM1dF0uSQA%2BgGjdzRQqY0Yi1ZJnGpixKUMr7%2BbnjO%2FgH%2FB3WC%2F5Ot7KCJVq6FxDiFg%2FkigbBpeEzidtPQeAc7M1hKadNatKFV%2BI5rv1jPcOcWfZqySVTm9xqqDWMPOe0c05bXoEWR1Z1K9CSQVViOhdivSTIbSRxcc9a4edME6TmxpHRuxXESfWdLed0Yi7XbQpEwY9jFe9lOUkFJazc8bNE5u0BnfCTpdZtg8Wd5ZG8%2FqFwlNk6tyOUSdOpRV%2BsKnt%2FOyq%2BGoEcXcVVAzVDR%2B1wjc74axgG4Cdyrx2FGA6WL6FfxsfTeD2gz50tXk3wxar26hEFVBf3kZXquGpX2204cIll4LYteYkOnlieNbZPYlbLKLkN%2FBlWEcKl91HszmF8FCzb1V666SogcGP2%2F%2Br09d5usAqwJ9y4low0eCWRC9ep9Z%2BNHObJ1mxcquhAJHDwRS%2FT%2BrovQw5UYBN7XRVbb0mTiUkvjcnHOiqeCrcd91WYczO1jUseZ7Tnqwahb55Si07aOVRXMhLMPmJHfVaoD9vYLFfklOk7LMn%2FwQ9IlCEyZdtZRCHmNlJHafRwBMMW5n8QGOqUBJ%2FJzqoCklkeMuR%2BGRPbjZz7e33ab%2FVxG3nVBsLMMjLLwu8uE%2F7VCuSaOnGaVQ5qQxVq%2B3JKJ64PsulSxuiHw1AkLPpnqd8Ji3NKmT8RFbAjyNozBdNoGJl2W0h7kR%2B4%2BZRVLD7t8ZfgYMmfHLbNaszdEul7zmugMHSwPhv7xODVi5VX22y%2Bjo8ubr%2BkCWJGwj0n0gHhbx8majQ302uPkEotjANxk&X-Amz-Signature=b7657dc97748ad33e9244375229992e994540f31895b6192e1c5e5590810e3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
