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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AXL3G2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPsiYKLGDNFjl3yNA1204ff0JP8NGz3OedjmIOZUWsAIhAPjDu3cr90vu21YhSXBShtQ7kyWIGJUMcVh%2FsITXooX%2BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TogCCblx54NPd%2FUq3AN4FNLDa9MRCV%2FzfmH0Zg9tYLrrA2iX31bSwl4mmIu3EXDsRx0US5XGN%2F1kXCdJq0jX8E4IdA70Ix4A5G%2BuG%2Bq97DN3yxQxfHNJZ269njVndpC94d%2FxGYl6sIU%2F8LJmHSo324n5NVvecAXuXIylD6i4MlCEcDH6BxQzRA2Mujq3845dKQBTFBl0mJnMw3zlCJJUTQeeOnGb%2FD9ICNkUe2Y0jrfMBoXCRk9mt0ZTVMz0ik9KxZEt7amDbGMZLV109u%2FLuAK4Ob1Ewb0yurgeTGCZKWD5gg4TApvycHeewY1hhlBSxKLZ7BqM41WsL8rYfYl0VhRzqXilLAphFyNE6usSU%2BeUgGSuryu%2B%2BbbRxqsNwIWRz3nhaCrgAlE9hAnQpv4PZ0ToE5Nt%2FOLCZoTgjDXMPW0wyLPKBsbL5OvpP94xoNLL57PPfRzwF6ozX02y3K3YSz0JjdZvJJaBh%2BQPX8kKX6a%2FFhHx%2FypQ%2Be1fiXO%2F9NGp77yDtll45m1RtWt7qzOZHBoKnzVTzdE5K%2F7pVOId8zY3P4fcdtwRMJ53vs1eEZa3gmuulgifhczC3CRVt59H8HEkenE6shrG5X15xd4ThF09L0U0c3Q84GqfQjQwU2NAk5OtDVSgAu3ZCDDWo4vDBjqkAYOczlQzagb4I%2FU0%2Fdo9gRlbbmORXGr6yzdBBGH5brfJ4rRey95QkGyFfPzelOrhDEh3FVBCGHSmxGxGjr8lSGmqXrglHLT5ZZNgFinIM2kn6rK%2F4lH49sm%2BOXSVvJZPDl8h0cqyTpGPMdcA4U4zUIQ95cEuxfWeooHmx2ZLD7mXco9MwGk3xkOcBSlp0DZwIVdFRr6BByQVQLebp1TYUrVWIaOo&X-Amz-Signature=970364f2a39cf8f2182d5cfe1300bff00ce774ec647eeaae564653ebcc902ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AXL3G2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPsiYKLGDNFjl3yNA1204ff0JP8NGz3OedjmIOZUWsAIhAPjDu3cr90vu21YhSXBShtQ7kyWIGJUMcVh%2FsITXooX%2BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TogCCblx54NPd%2FUq3AN4FNLDa9MRCV%2FzfmH0Zg9tYLrrA2iX31bSwl4mmIu3EXDsRx0US5XGN%2F1kXCdJq0jX8E4IdA70Ix4A5G%2BuG%2Bq97DN3yxQxfHNJZ269njVndpC94d%2FxGYl6sIU%2F8LJmHSo324n5NVvecAXuXIylD6i4MlCEcDH6BxQzRA2Mujq3845dKQBTFBl0mJnMw3zlCJJUTQeeOnGb%2FD9ICNkUe2Y0jrfMBoXCRk9mt0ZTVMz0ik9KxZEt7amDbGMZLV109u%2FLuAK4Ob1Ewb0yurgeTGCZKWD5gg4TApvycHeewY1hhlBSxKLZ7BqM41WsL8rYfYl0VhRzqXilLAphFyNE6usSU%2BeUgGSuryu%2B%2BbbRxqsNwIWRz3nhaCrgAlE9hAnQpv4PZ0ToE5Nt%2FOLCZoTgjDXMPW0wyLPKBsbL5OvpP94xoNLL57PPfRzwF6ozX02y3K3YSz0JjdZvJJaBh%2BQPX8kKX6a%2FFhHx%2FypQ%2Be1fiXO%2F9NGp77yDtll45m1RtWt7qzOZHBoKnzVTzdE5K%2F7pVOId8zY3P4fcdtwRMJ53vs1eEZa3gmuulgifhczC3CRVt59H8HEkenE6shrG5X15xd4ThF09L0U0c3Q84GqfQjQwU2NAk5OtDVSgAu3ZCDDWo4vDBjqkAYOczlQzagb4I%2FU0%2Fdo9gRlbbmORXGr6yzdBBGH5brfJ4rRey95QkGyFfPzelOrhDEh3FVBCGHSmxGxGjr8lSGmqXrglHLT5ZZNgFinIM2kn6rK%2F4lH49sm%2BOXSVvJZPDl8h0cqyTpGPMdcA4U4zUIQ95cEuxfWeooHmx2ZLD7mXco9MwGk3xkOcBSlp0DZwIVdFRr6BByQVQLebp1TYUrVWIaOo&X-Amz-Signature=17392814527f17358293dd52752ef556a4e549c6969770727b6010ff4d0a1573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AXL3G2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPsiYKLGDNFjl3yNA1204ff0JP8NGz3OedjmIOZUWsAIhAPjDu3cr90vu21YhSXBShtQ7kyWIGJUMcVh%2FsITXooX%2BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TogCCblx54NPd%2FUq3AN4FNLDa9MRCV%2FzfmH0Zg9tYLrrA2iX31bSwl4mmIu3EXDsRx0US5XGN%2F1kXCdJq0jX8E4IdA70Ix4A5G%2BuG%2Bq97DN3yxQxfHNJZ269njVndpC94d%2FxGYl6sIU%2F8LJmHSo324n5NVvecAXuXIylD6i4MlCEcDH6BxQzRA2Mujq3845dKQBTFBl0mJnMw3zlCJJUTQeeOnGb%2FD9ICNkUe2Y0jrfMBoXCRk9mt0ZTVMz0ik9KxZEt7amDbGMZLV109u%2FLuAK4Ob1Ewb0yurgeTGCZKWD5gg4TApvycHeewY1hhlBSxKLZ7BqM41WsL8rYfYl0VhRzqXilLAphFyNE6usSU%2BeUgGSuryu%2B%2BbbRxqsNwIWRz3nhaCrgAlE9hAnQpv4PZ0ToE5Nt%2FOLCZoTgjDXMPW0wyLPKBsbL5OvpP94xoNLL57PPfRzwF6ozX02y3K3YSz0JjdZvJJaBh%2BQPX8kKX6a%2FFhHx%2FypQ%2Be1fiXO%2F9NGp77yDtll45m1RtWt7qzOZHBoKnzVTzdE5K%2F7pVOId8zY3P4fcdtwRMJ53vs1eEZa3gmuulgifhczC3CRVt59H8HEkenE6shrG5X15xd4ThF09L0U0c3Q84GqfQjQwU2NAk5OtDVSgAu3ZCDDWo4vDBjqkAYOczlQzagb4I%2FU0%2Fdo9gRlbbmORXGr6yzdBBGH5brfJ4rRey95QkGyFfPzelOrhDEh3FVBCGHSmxGxGjr8lSGmqXrglHLT5ZZNgFinIM2kn6rK%2F4lH49sm%2BOXSVvJZPDl8h0cqyTpGPMdcA4U4zUIQ95cEuxfWeooHmx2ZLD7mXco9MwGk3xkOcBSlp0DZwIVdFRr6BByQVQLebp1TYUrVWIaOo&X-Amz-Signature=240ccc0ea7caf0bb3a263f5b266c450bd07953ad744db1061937f43b05592d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGQN4KE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfbHMaboLr7Q8kiDj75HUxVZU6VhKfnzBH1QWlvj4myAiBOA1UYra4zOj1YMki3x%2BEcJkb4u4gXBCSc1wCxn%2BJtcCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOwyQMRxiDIuP2ERhKtwDu%2Bv1tWhfob4k3dgebBHzN7tRewTpZZsL103mY0mq3o6hi2jj3yjNAGGgcQw2269R9wgrTlhV%2FwV42yAd9ZktUu2cXAd01gPjnTkbncn6XHLj6JTvcLWPWAY9qQrbRxYoVAhah3W3YWtOA55PjPDssR0KuRLQIR4MwK2OgKhErmGrMYBAc5M2sLWOUbtQ9NHcKbjpw4bSJdiB%2BznbK%2BATH1q6jya3psFn2mXLnDrKyPbQRQmCd4YuVCXaSNWhhO%2BQD3x177sue6KoDfZFIwHbX9heN9hRvCfMw07wYcwTDw8uNPia6JW4lgpl%2FXjPpd2J29ZMCo1Drj3dl1bCP5pvBJp5RW9aHMuCktAWEVJhZdd6WGAU2p9vmq9FH8%2BnGySocj0mEuf487x%2BM%2F2SvMqX9RWSuAaP7wIz%2BPTO081QxoAlpE%2F1p1UtvdMW6ZRYlYK5ZeVfBXGvU%2FgQ5b3AFtV3OB0LX2XqHQPZ1QVGsOp%2FvOuGm%2FOQE%2BR%2Fj7%2BZhb%2FfSD9LmXYD70aeo%2BhnxszNBYEsVA4o1%2F0XUHIsgx5WTfJh7ZeNot%2FLbl5OAIIm7dFl%2BbIJlhpgGcDN%2FzGSVqkqVJPUva52RIf2NnuOc8YYLX26zxOl9T1BOGvBrCexR8UwnqOLwwY6pgFvrFlkw%2FD5kF2E93d%2BPv9w6HF1LvdkSIgYIQ%2BhYMQl3sFwQMG3RgQnYP7IltzaW9oyKRJZ3Oz%2B3c%2B2q5HrPoVYnT0MVy6EwF%2BvoaaK3tEOB2udyRBZJtAPbl10s%2Bl78sOee4BkalNvBZtCa4545%2FQSh1jv9fbirgkXZ%2BGvaZVsviU3QkrY6%2BNcPnOjKAMHdiBE9sdpxeLLwluxyvU3S8uM5Dgr29%2Bb&X-Amz-Signature=56a0aecfbb7b1dffe53794713e9c6310133d21eeba35fd39033e895548c488aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGCDCN4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5VePfa49p8yX1ZBjY6v81xDxMTNVlkgH8xMYYDcbXaAiAL22J5GQxQwql6b7If4RTGWbx%2BDD%2BTSdl7H6TGh7n%2FiCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZYSh5US4crA%2Bnwi8KtwDqdH32JxMfkauEG8f8d%2BPvaS%2BevCprufiugEQhgp1pWktTxbeyxGrE2C8%2Bc0Jb4CwAivJx6TjSDpnJiliY9qLoL2FU6GZ5avRGmYUrSVgxNlIASRqP%2BO38dkmh%2FlI%2F31G45yuILTwyEWZ99JGCGIiP0wdXLdvfiZibTPLvLrgjZJK1wSF7Jf3t5LsQpMyjmQIPMqL9sTOpVMw%2BEHDsp9xaAPF8GAfq43pdV2gIwwly2WaH6EEXvfUFgIWBZ8YS%2B3gT74fwQx6d7erjLCpDieT7mTjfPGnDH2Q54psRO%2F9if2Ok5gGa3S%2BH3XCYsTcY0qDCIVA5it6ZZUmztN4VwDNmL3mCdTpSKbClRlvdXCyXFauN84VYzWosSPtkSfBCRkAyFLPEgwrBBcDeTZv4reex1BIvhbc0%2BQJvhdUx%2BUaQ5RtHWwxjwIt9RpTIRzcUxo9skHDYd13mqEyPucAhcqoNJEhrPA%2FJNUh%2BQAOeWp3AiNCff7Z4IgCpO8%2FuCuqAjTAxaadH0hFc9ZtXgE2dxLUVKgRcnORVflk7UsJo%2BwE1siDV2ypiDC%2F37H7uMPJIVE39DUvRB9a6WkGQbbbFB0isTpZtvZDLkV9Bi%2BU4ZG0tBZzUNIa6z40xs2ItRwwzKOLwwY6pgFz2dCGppCF4JBVEs%2BCWSX3NujP%2FQwoChd8PanWNjyNXw8eLgKXTqBLR2rWKo2YbcEzyCXLkGWhBr0K7SOBLmYwyxdWCfpU3Bu8%2BgqZc4yZKi6aH6%2BcBtEfWHkpx7nt3WwhV3zj3irasi65DUlCw5jchwXSPnMjWIjBiR7aYHaEQs%2FW02OXJMaSe9Tvo6lx4jns4dOJIxo6WTfPA%2Fsb50lzvDwi%2FMgX&X-Amz-Signature=06706bcf2b2aeb04f3123b31caab2ce147765311319e1ed07566bfa83896412e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AXL3G2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BPsiYKLGDNFjl3yNA1204ff0JP8NGz3OedjmIOZUWsAIhAPjDu3cr90vu21YhSXBShtQ7kyWIGJUMcVh%2FsITXooX%2BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4TogCCblx54NPd%2FUq3AN4FNLDa9MRCV%2FzfmH0Zg9tYLrrA2iX31bSwl4mmIu3EXDsRx0US5XGN%2F1kXCdJq0jX8E4IdA70Ix4A5G%2BuG%2Bq97DN3yxQxfHNJZ269njVndpC94d%2FxGYl6sIU%2F8LJmHSo324n5NVvecAXuXIylD6i4MlCEcDH6BxQzRA2Mujq3845dKQBTFBl0mJnMw3zlCJJUTQeeOnGb%2FD9ICNkUe2Y0jrfMBoXCRk9mt0ZTVMz0ik9KxZEt7amDbGMZLV109u%2FLuAK4Ob1Ewb0yurgeTGCZKWD5gg4TApvycHeewY1hhlBSxKLZ7BqM41WsL8rYfYl0VhRzqXilLAphFyNE6usSU%2BeUgGSuryu%2B%2BbbRxqsNwIWRz3nhaCrgAlE9hAnQpv4PZ0ToE5Nt%2FOLCZoTgjDXMPW0wyLPKBsbL5OvpP94xoNLL57PPfRzwF6ozX02y3K3YSz0JjdZvJJaBh%2BQPX8kKX6a%2FFhHx%2FypQ%2Be1fiXO%2F9NGp77yDtll45m1RtWt7qzOZHBoKnzVTzdE5K%2F7pVOId8zY3P4fcdtwRMJ53vs1eEZa3gmuulgifhczC3CRVt59H8HEkenE6shrG5X15xd4ThF09L0U0c3Q84GqfQjQwU2NAk5OtDVSgAu3ZCDDWo4vDBjqkAYOczlQzagb4I%2FU0%2Fdo9gRlbbmORXGr6yzdBBGH5brfJ4rRey95QkGyFfPzelOrhDEh3FVBCGHSmxGxGjr8lSGmqXrglHLT5ZZNgFinIM2kn6rK%2F4lH49sm%2BOXSVvJZPDl8h0cqyTpGPMdcA4U4zUIQ95cEuxfWeooHmx2ZLD7mXco9MwGk3xkOcBSlp0DZwIVdFRr6BByQVQLebp1TYUrVWIaOo&X-Amz-Signature=b75413799c0cd3b8274914e581de20bc1dc6eb3c5d9a7c6fa2fa000c49ceea83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
