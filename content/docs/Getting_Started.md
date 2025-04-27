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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2OBTTS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHUw63IrJbh1TJyztuan%2BhCl26u6rLQJYDSe6T6N8UfAiBMoSsRxiaeAU2VK7gm3tEiz1K93kNSkmimWfv6GFWMfir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMY96FOZ1v9ngw4JIQKtwDqX2br36SqcRZ27JwcAKbahk5Caj5yDcsD0AcEZlQgKD7gJ6OJVwbDTJuYLjcS%2FXHPcHqDLN3OWjrIALsf6%2FrNvo2r8IMLjnItg%2Bt7Y6BL2fva%2F0pWa7PtnlcDbHB8i23JqARJ1SbHa1OJ7HHka5jZ4FuS70sR3xL27BO3E3Xs7xnvYnGs8MAvh%2FgnqEPjOoeQIviaXzcj%2B1fMQ1HjISRnm6JF3cyQjBf3evjCunptqMsLlweDGXF6tpc3jiIjUBk45wvzHQkJ6pVeLJi81xmLaFieZHUid48jXyOMtKV4fF98800xOl5ww2zrI%2BTCuLPRcGKym22jN62%2FcDK4mVCuyYSCXI6jK7%2BIylwpxuGxo3PLKyaX9zFt85eGjTK98h1BQ1mbjK4ZLcR7TWQREe0YZpgop9Y5iPNtGGbbyoyUSmPDx406uTyHH3lqKBD2fIJUUiWDxJc51F7MhIsV%2FyAQFt9WBzLpaY1zPvQyCn%2F9G2UDQRwAl4bxV9LZe5a8O9m270cCP%2FO2n2K36r6x7AMXYLoOJv9P2McgYJu6mtMULCXBV2sDHTOgpRQym5X3twOn%2FRw7i4jt3GBi3qv%2FD6y8BAQieuhbRYJGgg99kz9GYtYOx%2FEdkeUtL0RTZgw4Iq6wAY6pgH09vfL3RvNVEvxwXVAQHyShYauA5QUt4XmOUNTSYTGsbsWme6R1VTQf%2FPTYqVLpQGpJwO20bvYbwx2tuaLsdvyJaHMH2F4tRQkFkQ2LUqrZLtSpm%2F%2FVrEfAwN7I903FLkF%2BzXvE%2B3jciZZg6VKnaXteyU1zxoWCYD2hgwUxItApO%2FxcwlP3hcAuHHxS53K%2FAMpjVqX0abMYAETNfk8fX%2FLwyN5nNA%2B&X-Amz-Signature=0395d917dcd2dcce55408e6e3b41877ed87f52b5b299533afb8a0cff35db3151&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2OBTTS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHUw63IrJbh1TJyztuan%2BhCl26u6rLQJYDSe6T6N8UfAiBMoSsRxiaeAU2VK7gm3tEiz1K93kNSkmimWfv6GFWMfir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMY96FOZ1v9ngw4JIQKtwDqX2br36SqcRZ27JwcAKbahk5Caj5yDcsD0AcEZlQgKD7gJ6OJVwbDTJuYLjcS%2FXHPcHqDLN3OWjrIALsf6%2FrNvo2r8IMLjnItg%2Bt7Y6BL2fva%2F0pWa7PtnlcDbHB8i23JqARJ1SbHa1OJ7HHka5jZ4FuS70sR3xL27BO3E3Xs7xnvYnGs8MAvh%2FgnqEPjOoeQIviaXzcj%2B1fMQ1HjISRnm6JF3cyQjBf3evjCunptqMsLlweDGXF6tpc3jiIjUBk45wvzHQkJ6pVeLJi81xmLaFieZHUid48jXyOMtKV4fF98800xOl5ww2zrI%2BTCuLPRcGKym22jN62%2FcDK4mVCuyYSCXI6jK7%2BIylwpxuGxo3PLKyaX9zFt85eGjTK98h1BQ1mbjK4ZLcR7TWQREe0YZpgop9Y5iPNtGGbbyoyUSmPDx406uTyHH3lqKBD2fIJUUiWDxJc51F7MhIsV%2FyAQFt9WBzLpaY1zPvQyCn%2F9G2UDQRwAl4bxV9LZe5a8O9m270cCP%2FO2n2K36r6x7AMXYLoOJv9P2McgYJu6mtMULCXBV2sDHTOgpRQym5X3twOn%2FRw7i4jt3GBi3qv%2FD6y8BAQieuhbRYJGgg99kz9GYtYOx%2FEdkeUtL0RTZgw4Iq6wAY6pgH09vfL3RvNVEvxwXVAQHyShYauA5QUt4XmOUNTSYTGsbsWme6R1VTQf%2FPTYqVLpQGpJwO20bvYbwx2tuaLsdvyJaHMH2F4tRQkFkQ2LUqrZLtSpm%2F%2FVrEfAwN7I903FLkF%2BzXvE%2B3jciZZg6VKnaXteyU1zxoWCYD2hgwUxItApO%2FxcwlP3hcAuHHxS53K%2FAMpjVqX0abMYAETNfk8fX%2FLwyN5nNA%2B&X-Amz-Signature=da5e04a346633da96ba8478abcde40cbbdb4e5e02f90cfd0d1a740eac7175a61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W37GHKE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcpPirsMtThvW%2Bp9de3YyCKVHsO%2Bg6S5PCJyg5za0FvAIgKCEMNNhpCl1PlQ331WfzmRs7NqMIenqZkyy7JQlIJYgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDu7Wf59jqeRnUdCPyrcA6yAmOdL07sWfJlAyQ%2FeOx91u4%2FvjRI594vQ9ktSoTllPy1Stppz0Gv1yH5fwletVbBARID41JlU4tuBV7C2cm%2F%2FygTDa4vPteRxxyu0Zi%2BtTK2A9gZTe3C4REHz71USPF4r8biye7G7yva173M%2B%2BzRWL%2FgKHIKOKdaBWYkNiq1bMVcqPU1LgmwI%2Bjy%2FTbfNdpp5%2F0U6wLIfIfyeLf7USGRXthL3Ft7kEi7bguOk6hO%2B24BAb5LJT99flmfbwYMwrpFl85Un8ig925vty77EhMGXdG6HQRWZ%2FABZLCv1zgiRbS%2FI4yuTXgOXbxW1sXguzkCed%2BW39oVhqo%2F5ZvekVxSd%2BL2e5hZLzfcGU9haSutqYY4azLW8jFLDi76KIQPz2Ja8Xqp%2Bh%2FjMKtbMP0OA%2FrVJQPqK%2BRCb1KpifSfrNu%2F9nt4pK8QLsKo67FRFdGGBJ3%2Fxg6%2FFnppRmGDJSpG938AIsQpvccnRn0vu4%2FFHI5GaYFJC%2F7JYaYAqPzVVYtc03evSjLmgWuF3KU%2BxV%2BcnXXXGO8Gjp%2BYUYsfSmC0wqvaEgxZTI5yjec1zUmYGO70V4x2vkICNWglvUJIyn1Q4fX2eII%2BC2JSGgcxxSpOZ%2F5uFjV4xa0sJrXhqDtbhMLqKusAGOqUBhYhdo3%2FEByKGwlQiRw8PWsnrOxhl%2FAovWE4IAA7OAjVGzVRbOxOzh5iogGTkP%2BiU31ybiv0jXGM7KRv9PMk%2B5NZuIcHXJAA4A%2BXE7jwwkVPL3H4k7Qxepaz5V2Tx30Sl5VPxMy7tymVLdbnZvFCLTPLi3UxseEkqdO8HxW%2FD%2Bd4EMkw%2BVLed%2BUK8udhpOzFP9rtg7TFeTFuHCEMOzN4ge3dD2oF3&X-Amz-Signature=f9c865d0faab71256a960c76b50ce51f8e2bb4081b3292332545b626a57c9c94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTENL3P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu68L2C4Tv7BklFq1L%2B4ZBtR1hDxZpt28iWAwbv5e7sAiEAibeW9l72R5SKjOxebNe3GAEKw78C%2FQ5VjBI89hEjn08q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDG1G3bwm1irfjqPugyrcA84AcxQvg3KKBDJTeQ6aSEDaNRkJ3%2ByoE3xqOGL%2FULaP%2BJHdNXeCjJavsN0hNeGRMonSSDcmhrwI2xC8QASOI2iUXAJ3c2Gdga82BS84r9qUFBPGnfNqXZELYtI%2F7R7GB3ruRTFFqFJC1bhYO9dcgld9EuYmke2V1yTjrrVD3ogCpfXd3dr2O2Yzukj%2BU1MKzahO8eY3eG4G3aeor4TYd2xSRhutH2Ddb0bT4cBtoSCTSuL2%2F24J5t16g5V2GW0N%2F%2FySsuuIc85e1pHsIoWj7hws7ecSBhDsZ%2FRZBSilRecUoV%2FMYP7f9io1Qz6KwQ7jITe39NjSQwCuFThw4WQrUAvdcL3GcgtlNXvCeELtBPxkbDspWMiAuix1qfC%2BmgznIMSYlZP59Xj2rEyQ%2Bq7FC%2FsZBFQxrOQtFNPdfKaI3FAi7%2FuxGi9r9bWdc7kOhAWWmOUHyqadmK4cjkK6fw3T%2BPJUxEd3PYVNMI%2FEbFfSQjSaZcVZ7%2B%2FMa%2BsN5%2FGcweYAo548svqnrFLMVS%2BGeGzjHLJVZuGUzCwKHARZPdbp7FW6d5euxB1svjfb57YqX921j2cDAWDu5pUBEPXs9t8QWb0iENY%2BBM4SNtFMyvgc6%2BfMXIcZo7TR9Rt85hYOMMmKusAGOqUBYeb8VGXmrNkwHhMxgcBksMjWdBe0MB16Egw1O5UOZ%2FYDP9jZ3lRkhLGrSGZtaG0x6fTJU4Ld0RMaZaYLO523rWkGzdC1b%2B%2FuDVn11E9XwaXUMEhqKN3nTU%2By6n2mgNezWDf8UehhufxGKBHAwDZj8DaeafM7J3bVFvLXZZwmiv3wr656GPmg944fnPany%2Fd5cdR3uv%2Bp%2FLFh0FaGFHFzzMRgc%2FE8&X-Amz-Signature=d983f44a3181cfcadcb76df902e6351226c43f5a1cb6bf8c013e9262770d4cee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G2OBTTS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHUw63IrJbh1TJyztuan%2BhCl26u6rLQJYDSe6T6N8UfAiBMoSsRxiaeAU2VK7gm3tEiz1K93kNSkmimWfv6GFWMfir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMY96FOZ1v9ngw4JIQKtwDqX2br36SqcRZ27JwcAKbahk5Caj5yDcsD0AcEZlQgKD7gJ6OJVwbDTJuYLjcS%2FXHPcHqDLN3OWjrIALsf6%2FrNvo2r8IMLjnItg%2Bt7Y6BL2fva%2F0pWa7PtnlcDbHB8i23JqARJ1SbHa1OJ7HHka5jZ4FuS70sR3xL27BO3E3Xs7xnvYnGs8MAvh%2FgnqEPjOoeQIviaXzcj%2B1fMQ1HjISRnm6JF3cyQjBf3evjCunptqMsLlweDGXF6tpc3jiIjUBk45wvzHQkJ6pVeLJi81xmLaFieZHUid48jXyOMtKV4fF98800xOl5ww2zrI%2BTCuLPRcGKym22jN62%2FcDK4mVCuyYSCXI6jK7%2BIylwpxuGxo3PLKyaX9zFt85eGjTK98h1BQ1mbjK4ZLcR7TWQREe0YZpgop9Y5iPNtGGbbyoyUSmPDx406uTyHH3lqKBD2fIJUUiWDxJc51F7MhIsV%2FyAQFt9WBzLpaY1zPvQyCn%2F9G2UDQRwAl4bxV9LZe5a8O9m270cCP%2FO2n2K36r6x7AMXYLoOJv9P2McgYJu6mtMULCXBV2sDHTOgpRQym5X3twOn%2FRw7i4jt3GBi3qv%2FD6y8BAQieuhbRYJGgg99kz9GYtYOx%2FEdkeUtL0RTZgw4Iq6wAY6pgH09vfL3RvNVEvxwXVAQHyShYauA5QUt4XmOUNTSYTGsbsWme6R1VTQf%2FPTYqVLpQGpJwO20bvYbwx2tuaLsdvyJaHMH2F4tRQkFkQ2LUqrZLtSpm%2F%2FVrEfAwN7I903FLkF%2BzXvE%2B3jciZZg6VKnaXteyU1zxoWCYD2hgwUxItApO%2FxcwlP3hcAuHHxS53K%2FAMpjVqX0abMYAETNfk8fX%2FLwyN5nNA%2B&X-Amz-Signature=ff9571f2bd4cacab2ed02b3fc86a160a11a063f10c9a2c4f30ff0790f9cb7d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
