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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQDELLN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCv3cI0SQh5ZV%2BGnnihkUwQsfoesUsTTvf6NJoASA4iYwIgFqm35I8f6pAsTxzWh%2FYQesQy9Jm01HKCn5hy5F%2FtdAkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKUw1Pp0YH7NnTtOircA3KjLiDoXD69LhPw4Qu%2BYRZSwZejRln70QlEE4c1fBG42jFN3em23WuuAkoLe3KwzEzcFH3EzjjqJa07r%2Bbb7kUjTVG1hdxpA0dnFOKGpCbXhngIv1h3YH98R2Ylrd0Um1UJ8o7IC7jtuml4LBdRBYnhhchpKH1wj4GuimX82AHfz%2BVgrspj6keUtlQtmyiParqBuTOM3Go6QJm442gJsBtY9udxhxd2pKNRz8gC6aLm5Myw%2BCxeeWEBUQBE3Ok1OoBE1ue1On7v4hKEIH25vWmvrCs%2BXZf7SfhwDxur2A8XMG4%2F%2Bc0tgoPFS2zAnfP2TzPs0tUsQ%2F9qQdztECtT%2Bv4PTpu04kBT2EGc1M%2BKgw3oCQQHFC8U7JMvcGs9fZ53EYBaXh%2BTxgf6QjvgPnTmY%2BR1BYbXBUlrY4LD5t7K3DIGtjtyV2MMPt9TFziSbXy5fR0mILFLKGw3EjXL3WGQVqLT2IYFRrO1uWRMFfBW0lYUvW8sGuyZhjaBf%2FwXTSoneJlbHkZivSswIPqQEWeUEpc%2BEJHQR6Fk%2BUpTmIhT96qfBSfXOxekAq1IQJqGFdXZlb6SeWw2d1%2F4jTVfxWQ9lSJPuT1%2FT%2B0GmfYbOflxOlsqv3wPDZYuNrRP4Df%2FMOf6u8EGOqUBvoRFP%2Fj0POHq5e0ZBvYcDZ0jrsJTlDjR0QZglBRO1nv1qP1TEWgnDlF7lfupN7cpLsdZcJyHLmB%2FghG5J3I%2BW7PWAH1Er0aIbIc4Wl6i%2BvavPCm%2F5fmBPWKGPKR%2F0lYpIyMfIZtC%2B%2F2o%2FCVYfOeRvK6exyZ1zFOqPX%2B7yB7HL4wVHz7fciAMfV8I0I%2FiqSei1mVnGc2wIulG08eOi9hi4j9L3KBk&X-Amz-Signature=a1cb1b8db58e3a3ad6c78e1f2a2719e3c7bca47a10f302ef70745d0855e79e78&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQDELLN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCv3cI0SQh5ZV%2BGnnihkUwQsfoesUsTTvf6NJoASA4iYwIgFqm35I8f6pAsTxzWh%2FYQesQy9Jm01HKCn5hy5F%2FtdAkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKUw1Pp0YH7NnTtOircA3KjLiDoXD69LhPw4Qu%2BYRZSwZejRln70QlEE4c1fBG42jFN3em23WuuAkoLe3KwzEzcFH3EzjjqJa07r%2Bbb7kUjTVG1hdxpA0dnFOKGpCbXhngIv1h3YH98R2Ylrd0Um1UJ8o7IC7jtuml4LBdRBYnhhchpKH1wj4GuimX82AHfz%2BVgrspj6keUtlQtmyiParqBuTOM3Go6QJm442gJsBtY9udxhxd2pKNRz8gC6aLm5Myw%2BCxeeWEBUQBE3Ok1OoBE1ue1On7v4hKEIH25vWmvrCs%2BXZf7SfhwDxur2A8XMG4%2F%2Bc0tgoPFS2zAnfP2TzPs0tUsQ%2F9qQdztECtT%2Bv4PTpu04kBT2EGc1M%2BKgw3oCQQHFC8U7JMvcGs9fZ53EYBaXh%2BTxgf6QjvgPnTmY%2BR1BYbXBUlrY4LD5t7K3DIGtjtyV2MMPt9TFziSbXy5fR0mILFLKGw3EjXL3WGQVqLT2IYFRrO1uWRMFfBW0lYUvW8sGuyZhjaBf%2FwXTSoneJlbHkZivSswIPqQEWeUEpc%2BEJHQR6Fk%2BUpTmIhT96qfBSfXOxekAq1IQJqGFdXZlb6SeWw2d1%2F4jTVfxWQ9lSJPuT1%2FT%2B0GmfYbOflxOlsqv3wPDZYuNrRP4Df%2FMOf6u8EGOqUBvoRFP%2Fj0POHq5e0ZBvYcDZ0jrsJTlDjR0QZglBRO1nv1qP1TEWgnDlF7lfupN7cpLsdZcJyHLmB%2FghG5J3I%2BW7PWAH1Er0aIbIc4Wl6i%2BvavPCm%2F5fmBPWKGPKR%2F0lYpIyMfIZtC%2B%2F2o%2FCVYfOeRvK6exyZ1zFOqPX%2B7yB7HL4wVHz7fciAMfV8I0I%2FiqSei1mVnGc2wIulG08eOi9hi4j9L3KBk&X-Amz-Signature=416871cf0e81732b3dd5f4e8e7def0a81ea134ddc32475350926546774236511&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQDELLN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCv3cI0SQh5ZV%2BGnnihkUwQsfoesUsTTvf6NJoASA4iYwIgFqm35I8f6pAsTxzWh%2FYQesQy9Jm01HKCn5hy5F%2FtdAkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKUw1Pp0YH7NnTtOircA3KjLiDoXD69LhPw4Qu%2BYRZSwZejRln70QlEE4c1fBG42jFN3em23WuuAkoLe3KwzEzcFH3EzjjqJa07r%2Bbb7kUjTVG1hdxpA0dnFOKGpCbXhngIv1h3YH98R2Ylrd0Um1UJ8o7IC7jtuml4LBdRBYnhhchpKH1wj4GuimX82AHfz%2BVgrspj6keUtlQtmyiParqBuTOM3Go6QJm442gJsBtY9udxhxd2pKNRz8gC6aLm5Myw%2BCxeeWEBUQBE3Ok1OoBE1ue1On7v4hKEIH25vWmvrCs%2BXZf7SfhwDxur2A8XMG4%2F%2Bc0tgoPFS2zAnfP2TzPs0tUsQ%2F9qQdztECtT%2Bv4PTpu04kBT2EGc1M%2BKgw3oCQQHFC8U7JMvcGs9fZ53EYBaXh%2BTxgf6QjvgPnTmY%2BR1BYbXBUlrY4LD5t7K3DIGtjtyV2MMPt9TFziSbXy5fR0mILFLKGw3EjXL3WGQVqLT2IYFRrO1uWRMFfBW0lYUvW8sGuyZhjaBf%2FwXTSoneJlbHkZivSswIPqQEWeUEpc%2BEJHQR6Fk%2BUpTmIhT96qfBSfXOxekAq1IQJqGFdXZlb6SeWw2d1%2F4jTVfxWQ9lSJPuT1%2FT%2B0GmfYbOflxOlsqv3wPDZYuNrRP4Df%2FMOf6u8EGOqUBvoRFP%2Fj0POHq5e0ZBvYcDZ0jrsJTlDjR0QZglBRO1nv1qP1TEWgnDlF7lfupN7cpLsdZcJyHLmB%2FghG5J3I%2BW7PWAH1Er0aIbIc4Wl6i%2BvavPCm%2F5fmBPWKGPKR%2F0lYpIyMfIZtC%2B%2F2o%2FCVYfOeRvK6exyZ1zFOqPX%2B7yB7HL4wVHz7fciAMfV8I0I%2FiqSei1mVnGc2wIulG08eOi9hi4j9L3KBk&X-Amz-Signature=1a5a4c1c19fe92f2216cf25d9e1765670aa9533ee182859f3e19587993f53259&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB33G5GS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICF8zX9imGxLYMVjJJsAdIh8tl1%2FsX%2BN6Yfh%2B2ge440vAiAnZxvaWb7j4ZxDqV7PRfK%2FKoxDyQDpQvtA0qsr1FuJiSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpFqX9sJrASFHvHnJKtwDJujLkInZNfkYc7gZkNYkcgIMj4u4P3wH92pW4hr7k79baMHYOs%2BWyu6E8UbfiTX8CtgOjBp%2BNaSeXjiFkIadTfDbO3JYGB9Kg1%2BVXqS8X1ekGODSySwBELdxx%2Fc1ZupyPpilNAWG86d7QscAJGzsxSyQjAjyRcS9oz3CTUha13pQa7fXNUnLhRI6NE466n2LO%2FRNx04YJQ3IDSSvzjWrVNvQxV3qWipNfbf4WouofbQsK4e%2BpmSG2MctbvGo6XXVY8x6dFG6iaZ9i6MtQtK6%2BsZAZ6kLFMo7lmzZFfJ3XOqQekdVHxUXJbJc%2FCB%2FXtFgu9RH0dKNDkq25Ncg1E3ghHHtcLxnp4c1A%2F%2BS5dsJXs1RJWlvFnDuXXzxG%2Fcxalg3hRtZbviYV4eab%2B1fLqrV5rF9ii%2BXJ%2BoQsgrvYpdMQktY6kPOAHLuh7xPOTpiv%2FDJQVQbAUn4j0VCb4uLTziZE4J8Ytrp1V%2F84r2VRrI1E66RAL60lspRsRCT3msZKNlmIPpprLAdhn4VYXT5SjSjIDmQnKlnOwW6ikIy%2FVn4NeAB%2Bx68wWaI7DqQgODl3s6ONf4%2BbpdgALzfRxJlrUjpT7grEsB5bhi2Z0kPMfga7pVSpd1gRKwJHGG2LcUw6fq7wQY6pgHQhp3UXb0jj0Uw0CbJ%2FR5mCoziaJO14EAQlvLHlFiKS5Y04Vy0739ySd8ax13PKFx4Q6ij64H18%2FmuMdtRa8v8wMUixRpusSMea8PyKboATRoJLV8PvdCdwZ7HddhJFhus3%2Fy3NiqErzb6uQqvD9pNZX61tY6FykihIO8%2BjS%2BlO3JkEsx5WFXPfF5dOPeF7t0I9vrkJaeuTrRDHTNN93bMF9ZSRvis&X-Amz-Signature=1d1ed8f398c894e122de84835b5073fff2f0643c4a30a9424ccc4aee904a0d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEADNEYD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCfn7GSneK9yQu3UuwST6Q0ToNHzV8W4oD09faSUMci3AIgZq3S5zHk8ZBK7G%2BKkDLa8%2F7FF9lJPcNIWmsB2B52vx8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ3EpAV1UDwfBP2gircA2qVA%2BXO0nFiGynj3KrIJ2qRNkAbGLbWjqiknvouPoPsh3za5kF77yJTMi4Tk8wDkns2bX2RuMBw9gc2uGcizERsN4V%2BNiFzZTrRSopGdjrAboc7QYEqvgfBLD1PLhy5aPpF288O%2BaCi27E83GFS%2F0ai0Mn9x63GuU7qc%2FEqJZ4pQvPRpd05dwvhXw6tihJtxbJ5DObcfCP1rDF3%2FakEvmSYP2X1tjy3hkcVzCHyNoH35%2BU9rvDvgbdw5L0oGeMxGkRdf0Bv%2B9vT8Xk5ns%2FipI1CK4T7vHiRIY1KtvMl7%2FHY5qOopokkbC34RIp0MR18kKQNSmkOKskHSeVMxasokRqBJgXxmnXhbo%2BfrOsgnM7Sqh2gxxSVPMiANyyqmbBfDp1R%2FAt4Hw7nnrPcowK5wfszU8H8r7ptzNNqcahvLQrunZI%2B9Ui8JlAo9iGJII5w5ifH3gTr6vn5wnMdIVhd2F%2FasGqRcEJDycsdaoP1X9aBfbFvo1ByZToLJo2XLwm3RbZqe5lNPJqBHy5ufWkppItYfQzisz8Fg0OL%2BoF5ZznfZY8B5UoXd2oDLUdkcTZVV%2BN9MxxM%2F%2Fs9R7Jy81K5B0KWwU2F3Vx7cPIbOoNMCH79YkLEqk6TX%2FslWVhJMKH7u8EGOqUBQShAVOmXKeophTA6VybaTz%2BPtkN7%2B%2BOLgLW%2FsCX9x45O6NW23V0%2FAePhfBQDHybMNXjOqJgi8gBXn0BOp9HzQg3GzZgKqQzeEYR%2Be34LmKjeooX2PkGY1WURvcYHwbjNo76H98RB%2FZXG4OPddNIwPKNSx7hcs8N2iwwb8SjGLTQio7Md5RTRZjt1E2vjoSeXnN0p0iJGksku926xSh8%2FtO4INeZW&X-Amz-Signature=2644703ef76186f82c6e3c28ca9258b2df9956630f1a0998efd7c1b1d3b43e45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQDELLN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCv3cI0SQh5ZV%2BGnnihkUwQsfoesUsTTvf6NJoASA4iYwIgFqm35I8f6pAsTxzWh%2FYQesQy9Jm01HKCn5hy5F%2FtdAkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKUw1Pp0YH7NnTtOircA3KjLiDoXD69LhPw4Qu%2BYRZSwZejRln70QlEE4c1fBG42jFN3em23WuuAkoLe3KwzEzcFH3EzjjqJa07r%2Bbb7kUjTVG1hdxpA0dnFOKGpCbXhngIv1h3YH98R2Ylrd0Um1UJ8o7IC7jtuml4LBdRBYnhhchpKH1wj4GuimX82AHfz%2BVgrspj6keUtlQtmyiParqBuTOM3Go6QJm442gJsBtY9udxhxd2pKNRz8gC6aLm5Myw%2BCxeeWEBUQBE3Ok1OoBE1ue1On7v4hKEIH25vWmvrCs%2BXZf7SfhwDxur2A8XMG4%2F%2Bc0tgoPFS2zAnfP2TzPs0tUsQ%2F9qQdztECtT%2Bv4PTpu04kBT2EGc1M%2BKgw3oCQQHFC8U7JMvcGs9fZ53EYBaXh%2BTxgf6QjvgPnTmY%2BR1BYbXBUlrY4LD5t7K3DIGtjtyV2MMPt9TFziSbXy5fR0mILFLKGw3EjXL3WGQVqLT2IYFRrO1uWRMFfBW0lYUvW8sGuyZhjaBf%2FwXTSoneJlbHkZivSswIPqQEWeUEpc%2BEJHQR6Fk%2BUpTmIhT96qfBSfXOxekAq1IQJqGFdXZlb6SeWw2d1%2F4jTVfxWQ9lSJPuT1%2FT%2B0GmfYbOflxOlsqv3wPDZYuNrRP4Df%2FMOf6u8EGOqUBvoRFP%2Fj0POHq5e0ZBvYcDZ0jrsJTlDjR0QZglBRO1nv1qP1TEWgnDlF7lfupN7cpLsdZcJyHLmB%2FghG5J3I%2BW7PWAH1Er0aIbIc4Wl6i%2BvavPCm%2F5fmBPWKGPKR%2F0lYpIyMfIZtC%2B%2F2o%2FCVYfOeRvK6exyZ1zFOqPX%2B7yB7HL4wVHz7fciAMfV8I0I%2FiqSei1mVnGc2wIulG08eOi9hi4j9L3KBk&X-Amz-Signature=9bba2a64366401993072bb092f2d60bd50d13be45db3f9fa1b19ef7d90660c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
