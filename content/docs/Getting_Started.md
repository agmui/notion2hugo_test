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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWJ73RW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBmwUheE4r520l0cu%2FLL4mEyC6CbJB%2Ba9aJmPDRuS8HzAiEArTPBZG18DxHIX%2B4jhAKs2dHyr7dXOCyzuvYXX%2F6F12Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKkU9pR%2FALBoHrFslyrcA8zX3B7LfmQ%2FnxaVBmh0mBq2HDfB%2BavyXBk8VbNQtRLBg4H7OgOpKychys2Dea2ZcdlxP4OwP5qtgLySTpSOYmrL0WpEtt5usigE%2FsFn145JibqQx52HbW%2BklI5dmfchAtS7UW6Y%2FltcfM2xVEFUOyv15c27gZES1%2BSVGSys1bXMW9OK33v%2FREhzb1l9c7S25KQESB3TQ6lE4Y4djU1%2BfoEJfCHOgbxfzfKhUU6lpvHRoq1P2IuGz8FTqfH%2FAXCBwjF5MNob1QY9%2FKKxaBBhK0fw9lvcvnY7%2FZjY6wIf0DCxzK44e5Fj8zgS5ozHmh8L4S0TsBzKNf54GGzRpMhPpJwfp1MQ5%2F23mP7FO3PawpOfYlu1xtEbYzp4YGsxxYbCMG%2FjBwT2hWQ85W%2BVqzQkeMH90oEiQqtd4eX0WeQRgF3xe8enHcizmWECu8DYudyLmq9u2ApoXliRAWKZPdemNEs59ZYbc6nUF1twgn2oB%2ByrDdRIWtC6I5X9MJJNCyZ02xopjaX%2F5yrcXsFW0zMcNSlipufprrD3T%2Bq%2BwWuu87onLZiYKDs2NHlZZPnTNC2HJwOXC42MmCIezPoG5ndO1o8imf2OYQ%2BIRHiH6yN%2F75%2BiC2Hf7DCF1XMvB%2FfxMKzfl8QGOqUBYJxKcaP6ufSLwiiyVhrwFHZ1N3Z%2FS%2BlSdDxeTISzwBVyBth4iE2XYXoGLgRJOKHndAXlonmQI9IJScVbt3sOEYkd8LQzNZZwXAAFonFsYK%2FxstgqQZv0ZgrL8zjm0OkdOIRpK9rEwwosk%2BbeXGTkKtylobLtg7tY4bvzv1exPzGQNFQnQf5MzcreaQCBxGlz80MV3p78Ggz5vJl7jkcHtkwPs7%2B7&X-Amz-Signature=6bb782bfd1a67ce6af75de61cb7930775d638802796f36c2800fd19255c465c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWJ73RW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBmwUheE4r520l0cu%2FLL4mEyC6CbJB%2Ba9aJmPDRuS8HzAiEArTPBZG18DxHIX%2B4jhAKs2dHyr7dXOCyzuvYXX%2F6F12Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKkU9pR%2FALBoHrFslyrcA8zX3B7LfmQ%2FnxaVBmh0mBq2HDfB%2BavyXBk8VbNQtRLBg4H7OgOpKychys2Dea2ZcdlxP4OwP5qtgLySTpSOYmrL0WpEtt5usigE%2FsFn145JibqQx52HbW%2BklI5dmfchAtS7UW6Y%2FltcfM2xVEFUOyv15c27gZES1%2BSVGSys1bXMW9OK33v%2FREhzb1l9c7S25KQESB3TQ6lE4Y4djU1%2BfoEJfCHOgbxfzfKhUU6lpvHRoq1P2IuGz8FTqfH%2FAXCBwjF5MNob1QY9%2FKKxaBBhK0fw9lvcvnY7%2FZjY6wIf0DCxzK44e5Fj8zgS5ozHmh8L4S0TsBzKNf54GGzRpMhPpJwfp1MQ5%2F23mP7FO3PawpOfYlu1xtEbYzp4YGsxxYbCMG%2FjBwT2hWQ85W%2BVqzQkeMH90oEiQqtd4eX0WeQRgF3xe8enHcizmWECu8DYudyLmq9u2ApoXliRAWKZPdemNEs59ZYbc6nUF1twgn2oB%2ByrDdRIWtC6I5X9MJJNCyZ02xopjaX%2F5yrcXsFW0zMcNSlipufprrD3T%2Bq%2BwWuu87onLZiYKDs2NHlZZPnTNC2HJwOXC42MmCIezPoG5ndO1o8imf2OYQ%2BIRHiH6yN%2F75%2BiC2Hf7DCF1XMvB%2FfxMKzfl8QGOqUBYJxKcaP6ufSLwiiyVhrwFHZ1N3Z%2FS%2BlSdDxeTISzwBVyBth4iE2XYXoGLgRJOKHndAXlonmQI9IJScVbt3sOEYkd8LQzNZZwXAAFonFsYK%2FxstgqQZv0ZgrL8zjm0OkdOIRpK9rEwwosk%2BbeXGTkKtylobLtg7tY4bvzv1exPzGQNFQnQf5MzcreaQCBxGlz80MV3p78Ggz5vJl7jkcHtkwPs7%2B7&X-Amz-Signature=2746590f6ebb304dd17c63e71847bda04a4ae9463f7a9acc8fef1f4e7c991449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWJ73RW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBmwUheE4r520l0cu%2FLL4mEyC6CbJB%2Ba9aJmPDRuS8HzAiEArTPBZG18DxHIX%2B4jhAKs2dHyr7dXOCyzuvYXX%2F6F12Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKkU9pR%2FALBoHrFslyrcA8zX3B7LfmQ%2FnxaVBmh0mBq2HDfB%2BavyXBk8VbNQtRLBg4H7OgOpKychys2Dea2ZcdlxP4OwP5qtgLySTpSOYmrL0WpEtt5usigE%2FsFn145JibqQx52HbW%2BklI5dmfchAtS7UW6Y%2FltcfM2xVEFUOyv15c27gZES1%2BSVGSys1bXMW9OK33v%2FREhzb1l9c7S25KQESB3TQ6lE4Y4djU1%2BfoEJfCHOgbxfzfKhUU6lpvHRoq1P2IuGz8FTqfH%2FAXCBwjF5MNob1QY9%2FKKxaBBhK0fw9lvcvnY7%2FZjY6wIf0DCxzK44e5Fj8zgS5ozHmh8L4S0TsBzKNf54GGzRpMhPpJwfp1MQ5%2F23mP7FO3PawpOfYlu1xtEbYzp4YGsxxYbCMG%2FjBwT2hWQ85W%2BVqzQkeMH90oEiQqtd4eX0WeQRgF3xe8enHcizmWECu8DYudyLmq9u2ApoXliRAWKZPdemNEs59ZYbc6nUF1twgn2oB%2ByrDdRIWtC6I5X9MJJNCyZ02xopjaX%2F5yrcXsFW0zMcNSlipufprrD3T%2Bq%2BwWuu87onLZiYKDs2NHlZZPnTNC2HJwOXC42MmCIezPoG5ndO1o8imf2OYQ%2BIRHiH6yN%2F75%2BiC2Hf7DCF1XMvB%2FfxMKzfl8QGOqUBYJxKcaP6ufSLwiiyVhrwFHZ1N3Z%2FS%2BlSdDxeTISzwBVyBth4iE2XYXoGLgRJOKHndAXlonmQI9IJScVbt3sOEYkd8LQzNZZwXAAFonFsYK%2FxstgqQZv0ZgrL8zjm0OkdOIRpK9rEwwosk%2BbeXGTkKtylobLtg7tY4bvzv1exPzGQNFQnQf5MzcreaQCBxGlz80MV3p78Ggz5vJl7jkcHtkwPs7%2B7&X-Amz-Signature=09a0f24ee6bd81d35f3d3daa6fdb674515644e3d48be249d29f3657d80776784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXTH7QQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD8ZflEnNlhpAzxgT1YfsMB8y7vkgXow%2FtZ3XiKm1mZiAIhAJfJNUmctkwyZWOsLo0kkhJsrSe8cA7UpM1seXQZ5FAiKv8DCHMQABoMNjM3NDIzMTgzODA1IgxCM7alALAf91QilyEq3AN%2BBEsozTgmMOG%2BPE4ava095g9TKGAG7hv6oMbImK2Xpcrt1ARwjS%2BiGXqRA4S7wkdCDcolfQPwCwDKM2nFNJHN4HkCLy65Jtd9YO%2BINKOZZxghBYPAu52NnWAVBCZdDLflrTSQJhJpJyI8yWRFYeMdDIihPE7pLqc2nyAI34MSjAFmSFqLP9gVDjkR6ZoV3xLlRp%2BW2qDTBoBcCZRhKuLZf1%2BvbFLwbimLDw5lHek7IbieVG%2FnOfTCw3zKXA4kJ4qF6KfoyBQh9AXTwg2SbOlpKM7KWOdb7BomaR%2BFb7SHhLcnJzbcndQ3i4hvsObt8xgq5WMy7FgF0NvEgpdfEUKdbMcjvN%2BBHC4RxXo6FF%2FA%2FAkITm6usvET2hg8KdQxJct4d0aSip55lqOfYlKEykRWckAd8dyAKo%2Fis2wr29%2BQyozp92P9BeetmkoY0zaQlv9xCny3CQtaXx9TmRNYZ6yDOYBSY1bpRKKtKWS8bJiTFBeA56BlCMM2udL4mGBXdKnXGevbql%2B0qElTrXB9AE6rsGcjMJFjP7BfMx7U7fym2HrFixCSfEXSuCqMr992HwfFCe3Nb4iKsKXYDd5gmSdjnbz5oKchXtAeHtQ4RjCItv2388xH8dhCmeYebjDe4JfEBjqkAVdiwtbuLUDZuZveaOCf0b%2FMP960Rzo2C2MqH%2B4dDRDId00rKfe0ytLnHxCqAa3hQ6v0Q%2FTFxVp3o6mOD%2FPXRb6hiDSqjVYUDkj%2B5qiBZgG924oAzWv41udkdDhMUtunpizHOQD7DDGtmWnQK4HbrRbvpdUoTUZ%2FIXw%2BMn%2BWf1OdvawazSdKCwIuYVw7JqpyrdytZawdmRUcOlcMs1ba4BgX7LjW&X-Amz-Signature=8e12073534b165991c72601fde1ac013054f575969f4f2b70f91bd3b64254877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=bf007a0bcfb975435f6fe0b5a714bbc0e2a7a69866d25108c4e25a18ab24a11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWJ73RW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBmwUheE4r520l0cu%2FLL4mEyC6CbJB%2Ba9aJmPDRuS8HzAiEArTPBZG18DxHIX%2B4jhAKs2dHyr7dXOCyzuvYXX%2F6F12Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKkU9pR%2FALBoHrFslyrcA8zX3B7LfmQ%2FnxaVBmh0mBq2HDfB%2BavyXBk8VbNQtRLBg4H7OgOpKychys2Dea2ZcdlxP4OwP5qtgLySTpSOYmrL0WpEtt5usigE%2FsFn145JibqQx52HbW%2BklI5dmfchAtS7UW6Y%2FltcfM2xVEFUOyv15c27gZES1%2BSVGSys1bXMW9OK33v%2FREhzb1l9c7S25KQESB3TQ6lE4Y4djU1%2BfoEJfCHOgbxfzfKhUU6lpvHRoq1P2IuGz8FTqfH%2FAXCBwjF5MNob1QY9%2FKKxaBBhK0fw9lvcvnY7%2FZjY6wIf0DCxzK44e5Fj8zgS5ozHmh8L4S0TsBzKNf54GGzRpMhPpJwfp1MQ5%2F23mP7FO3PawpOfYlu1xtEbYzp4YGsxxYbCMG%2FjBwT2hWQ85W%2BVqzQkeMH90oEiQqtd4eX0WeQRgF3xe8enHcizmWECu8DYudyLmq9u2ApoXliRAWKZPdemNEs59ZYbc6nUF1twgn2oB%2ByrDdRIWtC6I5X9MJJNCyZ02xopjaX%2F5yrcXsFW0zMcNSlipufprrD3T%2Bq%2BwWuu87onLZiYKDs2NHlZZPnTNC2HJwOXC42MmCIezPoG5ndO1o8imf2OYQ%2BIRHiH6yN%2F75%2BiC2Hf7DCF1XMvB%2FfxMKzfl8QGOqUBYJxKcaP6ufSLwiiyVhrwFHZ1N3Z%2FS%2BlSdDxeTISzwBVyBth4iE2XYXoGLgRJOKHndAXlonmQI9IJScVbt3sOEYkd8LQzNZZwXAAFonFsYK%2FxstgqQZv0ZgrL8zjm0OkdOIRpK9rEwwosk%2BbeXGTkKtylobLtg7tY4bvzv1exPzGQNFQnQf5MzcreaQCBxGlz80MV3p78Ggz5vJl7jkcHtkwPs7%2B7&X-Amz-Signature=75a26beba3dc8db8dfbc16c3b0fa0a48d437fdad17d9df45eaab6ffbad2bb085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
