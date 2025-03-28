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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQAVPRU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT6vD39Wq9jWWbfOO79hvXW3%2BYcyubjLUmrwFIBlgnqAiBjI3vltaH7PSzkH9PmB0IrH7f9wbWCp9ygvT8lYIC55Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQ9xyQBiVnd%2FfWMQXKtwDy3Qa4QuHUbIV8r9W6LrTfjstDEjGr0g%2BsytqUypRi19W18Hgm%2Bpd95XV%2B9iCO096jnfryND%2BBOkIGcTFYUanqt7pvGOsGJC4jxogmLxVrxLnl4IfCiYF9f5upMenED3jL0UmPZxEhB%2B2581wBEyZNyxnFpnEBptEfSD%2B9zfeiUHQZp%2B%2BjPiye4dlPlRqUwKZ5NxoOTkIFy%2FXThLYhY%2Fsnkjz%2BODWA9OHIIPsrWucwQq5c7bWXHzxTGrgM4art22gTHKLCeeGJ6pdrkAV74cLzk02OcMPLZEk7v8VTZgKhRT%2FVHGPGHxgXhwCdSOT4jaHfKEB%2FrhxX13A65HXpn8IqSbA0gmfYC6BjXiRlasxAkCekyPUSPASCiVXAsQa3x%2BdZAVGNKQT6dVhwMA45dQvrnL2wuuYAqwfN0sjXNdbCZns20ziSgZdBFtDHNHg32nYGxpae5tGBqeuC03aq7ftPczPy7%2B69N0uhJ9aSFvR1kkNrdk9dsXcoprHIITWs4xl4jKvGsF9xE6HaIpy1h9liwYTHh%2Biaq48JNdRplv%2FgEDJ3s8sEsfkMNImzWWvjaJomRDirDiwbXolKM5qaAqGHQPgn8xQ1oITDKsActya6oNxZ9Egn8h0tf0oMc4wy7%2BbvwY6pgFbY43Y4yK1nDdp5vrspSDE3g8t3J5WiLXPg7exDe2OEcscwK0zzJf4SALtGBwpayPh%2FoxlY%2BAmcEGgnaBEAustyg6EFC%2B2SAWfJasWYoWbAIy4dnZRIcrtQRE2QNqFbtOfMB%2B%2BbORx14wnRMLgSAF3qSma2QZiiCu5KVKUZfWVS%2BonAhmE2a1mqXrfEWs25dPK%2FF9ZGt2V9aVn6c%2B8iAKa%2B%2BeAXqjW&X-Amz-Signature=f86c75ec2a3201390ec39ccbf5e46fc95832acb3b825f71a6657f1ec7b1b06e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQAVPRU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT6vD39Wq9jWWbfOO79hvXW3%2BYcyubjLUmrwFIBlgnqAiBjI3vltaH7PSzkH9PmB0IrH7f9wbWCp9ygvT8lYIC55Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQ9xyQBiVnd%2FfWMQXKtwDy3Qa4QuHUbIV8r9W6LrTfjstDEjGr0g%2BsytqUypRi19W18Hgm%2Bpd95XV%2B9iCO096jnfryND%2BBOkIGcTFYUanqt7pvGOsGJC4jxogmLxVrxLnl4IfCiYF9f5upMenED3jL0UmPZxEhB%2B2581wBEyZNyxnFpnEBptEfSD%2B9zfeiUHQZp%2B%2BjPiye4dlPlRqUwKZ5NxoOTkIFy%2FXThLYhY%2Fsnkjz%2BODWA9OHIIPsrWucwQq5c7bWXHzxTGrgM4art22gTHKLCeeGJ6pdrkAV74cLzk02OcMPLZEk7v8VTZgKhRT%2FVHGPGHxgXhwCdSOT4jaHfKEB%2FrhxX13A65HXpn8IqSbA0gmfYC6BjXiRlasxAkCekyPUSPASCiVXAsQa3x%2BdZAVGNKQT6dVhwMA45dQvrnL2wuuYAqwfN0sjXNdbCZns20ziSgZdBFtDHNHg32nYGxpae5tGBqeuC03aq7ftPczPy7%2B69N0uhJ9aSFvR1kkNrdk9dsXcoprHIITWs4xl4jKvGsF9xE6HaIpy1h9liwYTHh%2Biaq48JNdRplv%2FgEDJ3s8sEsfkMNImzWWvjaJomRDirDiwbXolKM5qaAqGHQPgn8xQ1oITDKsActya6oNxZ9Egn8h0tf0oMc4wy7%2BbvwY6pgFbY43Y4yK1nDdp5vrspSDE3g8t3J5WiLXPg7exDe2OEcscwK0zzJf4SALtGBwpayPh%2FoxlY%2BAmcEGgnaBEAustyg6EFC%2B2SAWfJasWYoWbAIy4dnZRIcrtQRE2QNqFbtOfMB%2B%2BbORx14wnRMLgSAF3qSma2QZiiCu5KVKUZfWVS%2BonAhmE2a1mqXrfEWs25dPK%2FF9ZGt2V9aVn6c%2B8iAKa%2B%2BeAXqjW&X-Amz-Signature=8503ba595d20d9af7a6e267f57e5d66f4481f5191e5b14615ec4c3db0cf62af1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4J42YY4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6%2Bms5QHar0lZENQxLRG2nPwVZD2Y7pR3BS5M%2FAWZSQIgIfeLvod%2BJ45U3zEi81DJfDPj%2FS4rCjFmUBcjULxygLkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMYJ0%2FBXUtylm9dX5ircA4eSJT6Ln2LQbkRVt7ieF%2BVdb9%2FS%2FkWM9tJdDMnM3NEjj%2BnzYSEYCCuLMsBzwXWVrZPiT1sZgPKpEh8TzfU0YaIKY6kn1WUuO4nvgk2lwwgR7VBhIzZaPg9yCBK8jsh00n8KXABFkrXthu8Pw%2F2fNXuWUITobhajVINVHh2ItvKyMnUwT9cY%2FnkgjGo%2Fd6m4DbT%2F3tjS1IoL69tSyAtnbfUEzabT3xK%2Flo4Ocw6xmwByQqQmeixQJeBQxJPAKh%2FlzoozW5T7Cjj9OJiJJShiTc8Ljrtm5L1fDp74OMGrBxRiLshkYYTKidTtRHHkIioPElfpDhYrB%2FBxAYtsTeUlQqNPV34%2FK6rfp1erkE6sdP0N1FW8ZlOKs9Hv77%2BBdkSmn9FwGznVgwrUNdhzpaHOyx47e6DSYsTYVESE6nO33z%2B958NFAjxQN73F5dY3iyBNRbTv9Knxj%2Bu4hHx%2FYCaFaZ7alwsYfQP6DbdWYDhSQ8sRxnd6KzQaZ7g6V8Jlrbbt8B6dHY%2FUVdf1P6MmMKW2ffIJovQv5dm%2FRqKNFwubbdFj2YMDhS84IPQ33otYkBkbe1FWg8%2BCseScRDHMo5p22eunOrSW3ndGMOEOZGZi%2B0YD7hYYw0C78Bkk3w73MOi%2Fm78GOqUB%2Bwn84lR4YI3yqPQiyWrj%2FY%2FKVEbab90fhCcS8mm7O2B4JiiCubJyu%2Bff20O%2B5zWWhrPCdVJ%2B3s2x5M4GpDkob2PaDSJnqesuPcgRR1JlCm4ooB3%2BUNmgPdkpf0Bo30YD%2BwDOYGcbesfQN%2B%2BQ7i5eJ4AVOYiOvHEZyGQtdNwKy%2FJneR0MBLzIN5LcC0DVm5y2yU77FQOPDtiC4weMORBj79xsV8tp&X-Amz-Signature=7627b6dddf867e945bb65ba5215d9511f0dbc581f9bc36b8d70abe30c49c2c86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBBCOJO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSDRuXOxOv2jDkfitTfEOSiecQNeKwMt8IkswSGoqGsAiAJeMtf6tftjN9Xex1aWK7pZR6cYxAlf2qzLBOd1J%2BLpyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMjz3NQGEMuAvXB6X0KtwDaZtnGF1JzqIqAaI0z15dsB5QZS0%2BUacveNv8Ulboov7elCHDJGVjOtCqbPb%2FjG%2BcwfNC6B5Iphe8z87wLAyYB1Nr6hIrXb%2Bw1wuQV8DKt7ae3O4cX%2FhN82IjgZFR8UG70osv4LJCjX5Q57iS3pN%2BTLgX9fCKPynjdzwE2bCJGA%2FM%2Fs5n3OdC2N0wMWTLHPPrqdUuY6Kbm6unQjEU6JsPVnEvlzECkeQEab4Jy3cGyK6PrSwWhrzTi2g%2BEecSZVprNq2KgvXVOvJL6%2F1FdJmX0grTQu72nkbNZM3MmHqUd89oTlRQd%2BX2hF6CqtuhDYstHKSBKTtlN8YEPepTgpmxnCR2p8910mmKReW237KO5LmixSTjnEIZs78NsAbDldLlCBm%2B8Ljh2HMw4WBsVQUx7xiXCi7M9%2BHcMfKUgOyH7m3qDkIncWhEEhKZLFoxQ1fQo4I28yzd%2BAQqhR%2Bw47E87N7Eh6MbuwRR0Y59s%2FnjmrVeCZg%2Bju5EdnuPqUywbUw4fAzaNMt%2BSxf8k6FooM8bcMenjZsr2L%2BUHfyW%2B00oiOCVU7LBqjqYVSRWaaHuol0sW7KuEv%2B2txaszhiKsX4Gxn2%2FL7%2BVJW5QJ9pwuEMU8%2FXJn8b1Yeca2KXqBoQw57%2BbvwY6pgGJF%2By1GJ3HNbcblTlDkp4ktBrp9rRNEDfAhOy66vdYfSU6f5tJFaWU88JnllBJFfvcD7AxbJqHaypBUjWDiXAO0fjnLr8%2FXPfwhRLXTXqLlIcgjSuj2GsksGPJslXtQuOeXfeUHS7uIc2IrdnanHVb8XRYvLzlYgy7%2FYkg6Ic1yBmifeIG6Jwd22beT9oDFA21sfoXExhx41wHZwU1uoLS4N5EdjSr&X-Amz-Signature=7dd66196a5a2e38a936be4c79c5e405132110525b7389f90e02df27dd6575050&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQAVPRU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT6vD39Wq9jWWbfOO79hvXW3%2BYcyubjLUmrwFIBlgnqAiBjI3vltaH7PSzkH9PmB0IrH7f9wbWCp9ygvT8lYIC55Cr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQ9xyQBiVnd%2FfWMQXKtwDy3Qa4QuHUbIV8r9W6LrTfjstDEjGr0g%2BsytqUypRi19W18Hgm%2Bpd95XV%2B9iCO096jnfryND%2BBOkIGcTFYUanqt7pvGOsGJC4jxogmLxVrxLnl4IfCiYF9f5upMenED3jL0UmPZxEhB%2B2581wBEyZNyxnFpnEBptEfSD%2B9zfeiUHQZp%2B%2BjPiye4dlPlRqUwKZ5NxoOTkIFy%2FXThLYhY%2Fsnkjz%2BODWA9OHIIPsrWucwQq5c7bWXHzxTGrgM4art22gTHKLCeeGJ6pdrkAV74cLzk02OcMPLZEk7v8VTZgKhRT%2FVHGPGHxgXhwCdSOT4jaHfKEB%2FrhxX13A65HXpn8IqSbA0gmfYC6BjXiRlasxAkCekyPUSPASCiVXAsQa3x%2BdZAVGNKQT6dVhwMA45dQvrnL2wuuYAqwfN0sjXNdbCZns20ziSgZdBFtDHNHg32nYGxpae5tGBqeuC03aq7ftPczPy7%2B69N0uhJ9aSFvR1kkNrdk9dsXcoprHIITWs4xl4jKvGsF9xE6HaIpy1h9liwYTHh%2Biaq48JNdRplv%2FgEDJ3s8sEsfkMNImzWWvjaJomRDirDiwbXolKM5qaAqGHQPgn8xQ1oITDKsActya6oNxZ9Egn8h0tf0oMc4wy7%2BbvwY6pgFbY43Y4yK1nDdp5vrspSDE3g8t3J5WiLXPg7exDe2OEcscwK0zzJf4SALtGBwpayPh%2FoxlY%2BAmcEGgnaBEAustyg6EFC%2B2SAWfJasWYoWbAIy4dnZRIcrtQRE2QNqFbtOfMB%2B%2BbORx14wnRMLgSAF3qSma2QZiiCu5KVKUZfWVS%2BonAhmE2a1mqXrfEWs25dPK%2FF9ZGt2V9aVn6c%2B8iAKa%2B%2BeAXqjW&X-Amz-Signature=776a2891448ff5023448aefd22c3c919975dbda35123e0abf1c26cd497a3e3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
