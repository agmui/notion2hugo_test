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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DAG3LH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC2r8v%2FW1TSCgryvyuglXo0ZRfM4RuoMBNUnlYOpNrwBgIhAOxGGDuX7FHWElDfmk%2BbBJyHnC0Lfmsou7AchVv4G9lGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK4wH72UFWxvsOrQq3AMO6KP96iEt3mhLCWDBv9e1xy1xAlqO2q3nZaC5zL%2FPA9CS93kgQ9%2BJX4RVpdNrtIvKDhY9AKsMTwscpGUM4t9jc0tMUTynt1Z%2FGPcxqpokmr28OonWpj60DT89L5P8KAxdMOVcGdRztkTSdZNsrEOxjR9sjpo4uwtRoFLam%2BI8LWDFyHK1Q%2F%2Buu8ipfUmFE8H%2BtJq3WJiNLUMJnqJHfmEIOa3dYmzXrrnXn%2BM9IAw8IJ1CCSi5SYxN3lsAnUdb0nC7UE3CZ0NfKs6zliVnYN7EG22HKhyQTvmd3IZzSP5jrPE07JKFLr7x3eH4tz7zsX9rui0BpeMZCT4hXx7Md%2FyjFCrupdb54bg0h9VHTSKiZ5fXOu7mG7jHvHF%2BJcKsBqWx6mEWkH94LwYqN2nM7BPXv1SBc0ayFxse6iMUUBbZRMaWcYCuRZLgMKRKw98sf3xxiLpGkUKJOVqqmxgCdKruSlPbAwKIRNNeDZjbumBwhSdUWrQQcJ3cofb8r%2F0B95heBbPhlF30zGJNtw44E%2BOFxnqVvI3W0T%2F1AY%2F4T4o5zMAGeY3paOI5hDDkg7xrnRqy0aVoGshC9fjRlXLz2PwCMr%2Fydgu8KfmWaCP4kvuq5q5nMcMe6aiQ5X8NJDDi1efDBjqkAQ4AAeJr%2Bw08hm0b4merLNxLlkMNLFCe1enwMEZqLXhhWrLdNEHfgCJURT%2Be2ccb6XUQl%2F11ZzbTi59bYIh2azMmZLtGEjZOpkMbmYCocIxqRW2v8cLBQUbRF0jpi13Q4%2FK4kLjerIbmMNAoOe9EfXuavX4DIut6BfKrUEhxbjZ6x7pSQtlVDQTJf3s006RSvpoZvohKRV5xAE5nvEYvkY6Vd6eX&X-Amz-Signature=772f987956f3b0699afd16e5b90cd312111b8442dbab79a235ce75602dcde254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DAG3LH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC2r8v%2FW1TSCgryvyuglXo0ZRfM4RuoMBNUnlYOpNrwBgIhAOxGGDuX7FHWElDfmk%2BbBJyHnC0Lfmsou7AchVv4G9lGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK4wH72UFWxvsOrQq3AMO6KP96iEt3mhLCWDBv9e1xy1xAlqO2q3nZaC5zL%2FPA9CS93kgQ9%2BJX4RVpdNrtIvKDhY9AKsMTwscpGUM4t9jc0tMUTynt1Z%2FGPcxqpokmr28OonWpj60DT89L5P8KAxdMOVcGdRztkTSdZNsrEOxjR9sjpo4uwtRoFLam%2BI8LWDFyHK1Q%2F%2Buu8ipfUmFE8H%2BtJq3WJiNLUMJnqJHfmEIOa3dYmzXrrnXn%2BM9IAw8IJ1CCSi5SYxN3lsAnUdb0nC7UE3CZ0NfKs6zliVnYN7EG22HKhyQTvmd3IZzSP5jrPE07JKFLr7x3eH4tz7zsX9rui0BpeMZCT4hXx7Md%2FyjFCrupdb54bg0h9VHTSKiZ5fXOu7mG7jHvHF%2BJcKsBqWx6mEWkH94LwYqN2nM7BPXv1SBc0ayFxse6iMUUBbZRMaWcYCuRZLgMKRKw98sf3xxiLpGkUKJOVqqmxgCdKruSlPbAwKIRNNeDZjbumBwhSdUWrQQcJ3cofb8r%2F0B95heBbPhlF30zGJNtw44E%2BOFxnqVvI3W0T%2F1AY%2F4T4o5zMAGeY3paOI5hDDkg7xrnRqy0aVoGshC9fjRlXLz2PwCMr%2Fydgu8KfmWaCP4kvuq5q5nMcMe6aiQ5X8NJDDi1efDBjqkAQ4AAeJr%2Bw08hm0b4merLNxLlkMNLFCe1enwMEZqLXhhWrLdNEHfgCJURT%2Be2ccb6XUQl%2F11ZzbTi59bYIh2azMmZLtGEjZOpkMbmYCocIxqRW2v8cLBQUbRF0jpi13Q4%2FK4kLjerIbmMNAoOe9EfXuavX4DIut6BfKrUEhxbjZ6x7pSQtlVDQTJf3s006RSvpoZvohKRV5xAE5nvEYvkY6Vd6eX&X-Amz-Signature=4e7d6d1656dfa3e13ed709bbd6800b434ee5918aec527559746068c2926e4a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DAG3LH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC2r8v%2FW1TSCgryvyuglXo0ZRfM4RuoMBNUnlYOpNrwBgIhAOxGGDuX7FHWElDfmk%2BbBJyHnC0Lfmsou7AchVv4G9lGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK4wH72UFWxvsOrQq3AMO6KP96iEt3mhLCWDBv9e1xy1xAlqO2q3nZaC5zL%2FPA9CS93kgQ9%2BJX4RVpdNrtIvKDhY9AKsMTwscpGUM4t9jc0tMUTynt1Z%2FGPcxqpokmr28OonWpj60DT89L5P8KAxdMOVcGdRztkTSdZNsrEOxjR9sjpo4uwtRoFLam%2BI8LWDFyHK1Q%2F%2Buu8ipfUmFE8H%2BtJq3WJiNLUMJnqJHfmEIOa3dYmzXrrnXn%2BM9IAw8IJ1CCSi5SYxN3lsAnUdb0nC7UE3CZ0NfKs6zliVnYN7EG22HKhyQTvmd3IZzSP5jrPE07JKFLr7x3eH4tz7zsX9rui0BpeMZCT4hXx7Md%2FyjFCrupdb54bg0h9VHTSKiZ5fXOu7mG7jHvHF%2BJcKsBqWx6mEWkH94LwYqN2nM7BPXv1SBc0ayFxse6iMUUBbZRMaWcYCuRZLgMKRKw98sf3xxiLpGkUKJOVqqmxgCdKruSlPbAwKIRNNeDZjbumBwhSdUWrQQcJ3cofb8r%2F0B95heBbPhlF30zGJNtw44E%2BOFxnqVvI3W0T%2F1AY%2F4T4o5zMAGeY3paOI5hDDkg7xrnRqy0aVoGshC9fjRlXLz2PwCMr%2Fydgu8KfmWaCP4kvuq5q5nMcMe6aiQ5X8NJDDi1efDBjqkAQ4AAeJr%2Bw08hm0b4merLNxLlkMNLFCe1enwMEZqLXhhWrLdNEHfgCJURT%2Be2ccb6XUQl%2F11ZzbTi59bYIh2azMmZLtGEjZOpkMbmYCocIxqRW2v8cLBQUbRF0jpi13Q4%2FK4kLjerIbmMNAoOe9EfXuavX4DIut6BfKrUEhxbjZ6x7pSQtlVDQTJf3s006RSvpoZvohKRV5xAE5nvEYvkY6Vd6eX&X-Amz-Signature=31bf55addbb5522ebf39003f9ac83222c17af9c2885f1709defc02d6a3f1c1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGQDFVV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlJSctSNeEsmSLSKyqwoLPmRVnkl7%2BONFsEBMkvp4IwAiEApkT4%2BEjbhRdJYi52J0AzQTO7JCxDfWlzhUylRKvXorEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0FRa312ZbuRxJjgCrcA0uuV1KpA1x0Vrq3ULpR6xsirt9gwaqTOP%2BYbyRXRijOtBI%2FzZBOjCudYE9EZee%2BBGPhhKPfySeaiPJvqZHAXaAWi1mP7ZXP9ayGzryUdioNRCxq9ZuH%2BI6QYCbncPrEAhi84KkHOQT2a2RSj6Cbsi1MramKD8GtfBMNARtjjVDKEs%2FfNxIXN2QfiFKO88ZmSedSO2Mk5l363Isow%2BtEyMXtlA4S2B9TlMO6QeM0Vs%2BYqV%2BHr%2BEc%2FCMHtc6khfLQDpJStjFhygB86uPu0t0Njn44cWHuuVBheCVafBFoH4f35I5HNPumE6Gv09KzVVEemsJY7IrnY46U6n0%2BoHtYSxmgtk4YlB83aDKKYwaHNhAmsibr5E%2BHhnFcaOjsQgOILQ7t01zo7iPs5p2QG2CNJXIaK226YeanBMjpw0QRc%2BIGXUrpmfFz9Vtz1QRWySeWMCsmManv2jAOxL2DOnXhtfeGLlVOp0HNfkMkDFM6EM%2F%2BZ6IumptefnP3Rca9FmaO0G%2FVdvx%2BQE5ufXaD8B3JzvcS40xOhjgh4j%2B2Fu08pB4P9BPBAAyPGuiqxdFANFUc%2FhNg%2F23s05sYLx8lS%2FuuJx06%2FNBA5UZ4WrzC59xv7pt9uQnuSrBQCEULDowlMLbW58MGOqUBP4VE5h4I9LLhcqy4nyecCFmidEwLfRNzhNdeLggtYNZSWnLBnmF5ms8rQcM2NqZWRorpPdLrPNeS97LSv%2FHqndi5cxe9lnAMO%2FABCIsBaxncHnIoYeqhoQg%2Fvb61McuiEsFRjQrsxt%2FyhxOKVW5o4%2BF%2FuRJPncSH7MtN%2FO35HY%2FBP26ez2DBES%2F4Nm%2BFQq8Qn5m2vWV5Ypway1gi8TRj%2FdyTqFES&X-Amz-Signature=c5473dd77526c6d8e4892afebca2906233092aedf1a2632810f65655ebe33a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7BD2RJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIAQjQA4YNsWnxD63QBQeh%2Fi6%2Bg53kixA4zldXWrd5QEUAiBhT1LbgVxQQLlp7V13%2FGFNh8NmrUsde0YtbvW%2FQaOuJiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLrW5QM224f5jAKHKtwD%2Fuz9uW%2FIk8wmZz9yITO3NGUty9olvNOHTCQ7xUSMCwfJUZ7s0oAkrhnwVySsvksEgdBNJ04oNdjpXxCV4rdqktx6yfLIdHhyxF4vwHBIV1hMI92H5P%2FJnKjZoHc1dBbftZdf9IgUQo%2BnNHRPwF%2FzCbIdfvm7Do8rDVYF5PDF0xhfnOFB12CBWe5CYg20sIxYr5TDpi9G%2B9NqmP5VjnsQrhp9aKFQSkcmZB7b%2BMX587MkzbADOAsaLS3swk0JZtyfO1%2B8Gcc%2BTD3gjbm175r9hCubWSJd%2FPCKf2vpb38odZoFGTG8Hm1iRbKnJwkovQInR7OoHoxZmoJxKy4aLyjFY9FRDfSPAnpTC%2FCgnJj9SUMOtZjwIRrzLPy5r%2FvXF5rTqQhw4yQnguuLxfrjjOLikrXVMRHRtH2wbiBtBqG6kXGVFK1xIUXz4yWSNTD8m7BUHav4WwekHNt95yeeKY%2Bmn28p70YxNpXu6%2Fh53fMyYgBuMSz3Gb0zpsio3%2FW8y8NAeRMQji7qjNsgc7GWSN5dYPEOfqAQYVx7K2z8z1NLuhUa9NSrhBxpLf%2FIbr8Y0o3PtueLcRe%2BDoBFBKDyqnEQ6egPOnb9Q3L8bygYDvMCIdW0LVOiGueYCXvFJNswltfnwwY6pgGpk%2FyK3w51UlJvrzETE7P5jUEJPqmw1jk0sCT38BSdMSyFg6icYAFivZhQGxBO7rPp7olwCKGJmYlSAevJhY%2F347uO6VfkVz%2F47RkKHf629o%2Fg84VIR3JLlX%2BiSLKm%2BhKSDx7WGm7hI8FN%2FnjlWumvOYyS8Py6JnQ3W%2FW43PGigKmz%2BY9XdqMgokaumrX8ImsnwBbFs4WmbcGI1e9qsPDuzEsDn0ab&X-Amz-Signature=2bdb4e607a27e090d2391d40af098b763e3f3e835db804304452d28db51feb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DAG3LH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC2r8v%2FW1TSCgryvyuglXo0ZRfM4RuoMBNUnlYOpNrwBgIhAOxGGDuX7FHWElDfmk%2BbBJyHnC0Lfmsou7AchVv4G9lGKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfK4wH72UFWxvsOrQq3AMO6KP96iEt3mhLCWDBv9e1xy1xAlqO2q3nZaC5zL%2FPA9CS93kgQ9%2BJX4RVpdNrtIvKDhY9AKsMTwscpGUM4t9jc0tMUTynt1Z%2FGPcxqpokmr28OonWpj60DT89L5P8KAxdMOVcGdRztkTSdZNsrEOxjR9sjpo4uwtRoFLam%2BI8LWDFyHK1Q%2F%2Buu8ipfUmFE8H%2BtJq3WJiNLUMJnqJHfmEIOa3dYmzXrrnXn%2BM9IAw8IJ1CCSi5SYxN3lsAnUdb0nC7UE3CZ0NfKs6zliVnYN7EG22HKhyQTvmd3IZzSP5jrPE07JKFLr7x3eH4tz7zsX9rui0BpeMZCT4hXx7Md%2FyjFCrupdb54bg0h9VHTSKiZ5fXOu7mG7jHvHF%2BJcKsBqWx6mEWkH94LwYqN2nM7BPXv1SBc0ayFxse6iMUUBbZRMaWcYCuRZLgMKRKw98sf3xxiLpGkUKJOVqqmxgCdKruSlPbAwKIRNNeDZjbumBwhSdUWrQQcJ3cofb8r%2F0B95heBbPhlF30zGJNtw44E%2BOFxnqVvI3W0T%2F1AY%2F4T4o5zMAGeY3paOI5hDDkg7xrnRqy0aVoGshC9fjRlXLz2PwCMr%2Fydgu8KfmWaCP4kvuq5q5nMcMe6aiQ5X8NJDDi1efDBjqkAQ4AAeJr%2Bw08hm0b4merLNxLlkMNLFCe1enwMEZqLXhhWrLdNEHfgCJURT%2Be2ccb6XUQl%2F11ZzbTi59bYIh2azMmZLtGEjZOpkMbmYCocIxqRW2v8cLBQUbRF0jpi13Q4%2FK4kLjerIbmMNAoOe9EfXuavX4DIut6BfKrUEhxbjZ6x7pSQtlVDQTJf3s006RSvpoZvohKRV5xAE5nvEYvkY6Vd6eX&X-Amz-Signature=5b6ee59c596a13b7af88081bbed5f6f18eb6e5cb17e82e10bf8235c24da6e1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
