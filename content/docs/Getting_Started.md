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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSNWULI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEEXx853%2FPXkO6WqLLFeMdogVsmOa1394FUg5mBtpwMoAiEAm%2BXLxzHDol%2FtGAOkMNDZzJIYe4LXgMxCymop%2F%2BRbACAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb8LgdWWN06Ny4CXircA7l9HqmTHtwqvIHW7mGTsee0dMHBWBc2i36Sht8xmJWoYKM2gel6VMVEq5RM53%2BgRpU9S%2FKUlARaxLVVqpwXl2lCCjPtsF7nDQmofX1VAkfbX1jhlKrKFkFo9d53mAnKdBFYRhiCko4QODBilYM31ye%2Fmn%2FPMa9fm9IXsJckH7Gibax3cwc1zmoCGUWN7kn4FCv%2FRWmZO%2B6iYAiTfZnbS%2FUqEX1awrNGX56EPa00TqjfELXuBNH7pT2lrOVZNVZnp7OItIZFaK8Rb%2FuiZPTHkuW5VQgZrbsLRp2VpeqQ6iOK5wISHMI0NBLnuOu2lUkENE7I8OPi0pR9qw%2Fn%2BEKRzMhu6z78pvZQnO5SHkiVxYrU7ZDxDpdFTaRJ2HfintJ9PT4bB4384SUmPegQPkdtYo%2BhM49RP2TSVC3XUyagNMFcpBWV6DCCehinA4JOYcBBklSPVwRCcKYHF1PcGbOAZ1DP34DgsS9yZCzf4l8nqXVngXVxmPVtqOF2kRbW7WoSl7R9TBaI7gUqLbUILQGXwinOABMt0Gtg1NoXRUPGmtKz5%2FIxir%2BvC9OzhjEzOka3QRvAgDOEVALVql2CWJLpbE4X%2B6RSv0jMp9a8%2Bk41r0gFkh1%2B1asdkIZqrAtzMJGYwL4GOqUBiXqN9Vda0%2Bp98qnO2UrXj0eRGDGzK3Dsu8NrodLm9OLfvrussF9c4Ige69FTKdi%2BT2DmgUyWI04lrvlhFmBLD65IeirzLdYWKitazck0e9xV4DqC8F4NFn0ZZ%2FzTjH3UDJZBPxJzHGYlS2VNIPfB2wEmmf6tF6b%2Bf3bJ%2B%2B7etLLp8cecE7v2QaaVVZitcH9VmSSYEbTl6BsAzXvGNoTAO7nmg7eC&X-Amz-Signature=24560cebfdc8c568edb94715bc40fd9ac1f13142905b89b3f1eb84b7a0b806d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSNWULI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEEXx853%2FPXkO6WqLLFeMdogVsmOa1394FUg5mBtpwMoAiEAm%2BXLxzHDol%2FtGAOkMNDZzJIYe4LXgMxCymop%2F%2BRbACAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb8LgdWWN06Ny4CXircA7l9HqmTHtwqvIHW7mGTsee0dMHBWBc2i36Sht8xmJWoYKM2gel6VMVEq5RM53%2BgRpU9S%2FKUlARaxLVVqpwXl2lCCjPtsF7nDQmofX1VAkfbX1jhlKrKFkFo9d53mAnKdBFYRhiCko4QODBilYM31ye%2Fmn%2FPMa9fm9IXsJckH7Gibax3cwc1zmoCGUWN7kn4FCv%2FRWmZO%2B6iYAiTfZnbS%2FUqEX1awrNGX56EPa00TqjfELXuBNH7pT2lrOVZNVZnp7OItIZFaK8Rb%2FuiZPTHkuW5VQgZrbsLRp2VpeqQ6iOK5wISHMI0NBLnuOu2lUkENE7I8OPi0pR9qw%2Fn%2BEKRzMhu6z78pvZQnO5SHkiVxYrU7ZDxDpdFTaRJ2HfintJ9PT4bB4384SUmPegQPkdtYo%2BhM49RP2TSVC3XUyagNMFcpBWV6DCCehinA4JOYcBBklSPVwRCcKYHF1PcGbOAZ1DP34DgsS9yZCzf4l8nqXVngXVxmPVtqOF2kRbW7WoSl7R9TBaI7gUqLbUILQGXwinOABMt0Gtg1NoXRUPGmtKz5%2FIxir%2BvC9OzhjEzOka3QRvAgDOEVALVql2CWJLpbE4X%2B6RSv0jMp9a8%2Bk41r0gFkh1%2B1asdkIZqrAtzMJGYwL4GOqUBiXqN9Vda0%2Bp98qnO2UrXj0eRGDGzK3Dsu8NrodLm9OLfvrussF9c4Ige69FTKdi%2BT2DmgUyWI04lrvlhFmBLD65IeirzLdYWKitazck0e9xV4DqC8F4NFn0ZZ%2FzTjH3UDJZBPxJzHGYlS2VNIPfB2wEmmf6tF6b%2Bf3bJ%2B%2B7etLLp8cecE7v2QaaVVZitcH9VmSSYEbTl6BsAzXvGNoTAO7nmg7eC&X-Amz-Signature=50d1ee7fa8bd39238e9d9b1bc29e65741a95b5f8b2c3db1afb7f30248c8e7ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXSOWLZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDy1uEm%2BSZYK3L1vorPD4xz49dBbD5vSr18aLG9acbllgIgSLhiDpLQmZeIv%2BvSX2KEZJXA0guxo8Qbw7nWcS24MJgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBl1ARP2bS6ikkf2yrcA4D9HHYyo4l0gj0k9DABXmFj4QB1sdOYp14xLBVEVQBpCjNzsNaV6Xh7EMHEnRqKkydWsoNrzaL3bRTxsJozCd3A3xFWahHBHK7mLnulimH0tajnkCyr5V8FPr5uhQcb%2BzU2INz6hygt6FEP4xGAGzEW9BQKCtBCPFOdDA6AbbM4I5TkYNH7xv5dJWX9Gbgv8w1%2BLeaQqpCIW1iko%2BHA0B3i6lE0J0OytkmAv3Rb3BIMM0Cs8i%2F%2BTEOM%2BJybHcU4dM7Pd73JvbBBudrIc2%2BTecQc0n3EbS3NuAycXXyrbFY4MK6CT4PKT5W3F7SlJ%2Fl6TCZ39Fiekx0E5xeYRqcUKenwx5vNiOzle7Cxzwy5YEHfPrYJzun34NtHOH5BMejLGdEmWLUWPxhdTEOT9LURlwti5SJVJZZPwZ3H1SO4SKvPEzB%2BON60hVtcrbox2FGyGit66AuMOdOkH1U7y196IzC3GJS9scbQKnPkUPols%2FN6XeivGhPt7ixgpPQ65fWflOrAU4ZBdB1zL09aD7g7ayrsUXjJIWUl2dpFgs8cnFzrWTBFHsQMAfXml0DI%2FJzP3QAh2JUgri9R%2BEVWJTL5flF9fj4S702427J0G%2BypC%2Fv5DX8hIMxD8O2NgGBJMIGYwL4GOqUBOcpYq5dqvLdaUgfnLeNfel3eWZBZ6PTGMTNfOgAUedlMFglVjxdHHcMFu9d4p%2Ft8n7wXhI0%2B2v8oapON3z3tsFChQC75ucWVm0olSZb44WrivPUij597YoutxWuHLlrljNlkNZ%2FCZsRPhCmqRjMmWRMIw64qCd2XhGwiu7XmoGwzInZizMEo7vj9A9dITY0PHd8oiLwDFIUybNUxhvWlpnG5cXIj&X-Amz-Signature=9bbb17b04aa793a5c983bc94b4802a34da2ab5ffa40b7380f2d86b3613f79aea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWC6EVSH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFjT6xCY3iHaAVrO9hsSNIQL%2B4mPpxCx65hCzl10FdRqAiBvCpoBEwWgUGy%2B1sGeDoznPS40CFvkF8SdLy2Wu9pVciqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Tw23nrB3J2asvEJKtwDEIWL1VowfCnLq%2Fuykiw3dkauW7T%2FNTn9NzoBymX9wPuVt3aJCpPhLXGlcCrUh7w4wp5dHNpXqLyJrH9kRvr0ebMqMxDRw%2F7spZdFiQvz8%2BegEh7404TgYA1heToL74Si0%2FFDBPz%2FYtTjQIdoc%2BtO9aT%2B7zoZlz2D3wwr8BEBgdX0Rw7%2Bh3xsuuPwkqcObQQx8FAHST8Vqjymc1SNrKXG8yFamBNZtwsZakjCDvQUCpG%2F60u3IObxPOdh5XrsN4SCXu%2BEBXKYxpTvF68g4GMCpPRVNkeNACMOOahihCqzcZy2NuRixUOnnSir%2FGkc1mwOby7QFvHl9tAOr%2FKVTmCDiLWwxDmlLadDkFkWqkBIGt2p34kR7Bd%2FWBYAdwBPHq%2Bi7hCmxJlB8rmq0VEfH%2FvrRLqD8sxCmrc83OY4nWDn2I3AL62m%2BhOo1D%2F98gEPaOYQ3X30Qkl47SFkl%2B1OfT9cp6jeau%2F1kgoai8Qwh3JXVAUlzSeKcY2%2FaFb2iYrqIREcN30MCf6a%2BJ%2FGz6tRcw1psTuY4y5%2Fg3cbdYL8e8qubYhPqHYypNMU7yy%2FQOAUBExWOvp2mlT2HfiWqCaGiN29XsK%2B8iheyqMyPkO2i2AvQF4pXwElFW%2F3hiXsaVYw5pfAvgY6pgFpZM3IIs8av60feaXEHQSZOaOv0DeN674yVfneRxVHuZAbRs%2FpoFhuk1oYtV4dzoWtkhtu0UwmWR7UXNcOOj6KlqszkOCOZDvAky4fyfiFKTJStmTNfjOrCKM8sc3%2Fo4NjjtOU18KEbQBtiFeQU0IRQs7lKgIP%2BVaLesyUqkBHKMI%2BU%2BGjB%2FmL8frq6ZaR8hpLY0bZRqPNf%2BN1M%2BORqJ4KWJp9rFgj&X-Amz-Signature=a05acf5fe8dd841254205b595599966185ce62cff62291a96fcb5c82decef8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QSNWULI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEEXx853%2FPXkO6WqLLFeMdogVsmOa1394FUg5mBtpwMoAiEAm%2BXLxzHDol%2FtGAOkMNDZzJIYe4LXgMxCymop%2F%2BRbACAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb8LgdWWN06Ny4CXircA7l9HqmTHtwqvIHW7mGTsee0dMHBWBc2i36Sht8xmJWoYKM2gel6VMVEq5RM53%2BgRpU9S%2FKUlARaxLVVqpwXl2lCCjPtsF7nDQmofX1VAkfbX1jhlKrKFkFo9d53mAnKdBFYRhiCko4QODBilYM31ye%2Fmn%2FPMa9fm9IXsJckH7Gibax3cwc1zmoCGUWN7kn4FCv%2FRWmZO%2B6iYAiTfZnbS%2FUqEX1awrNGX56EPa00TqjfELXuBNH7pT2lrOVZNVZnp7OItIZFaK8Rb%2FuiZPTHkuW5VQgZrbsLRp2VpeqQ6iOK5wISHMI0NBLnuOu2lUkENE7I8OPi0pR9qw%2Fn%2BEKRzMhu6z78pvZQnO5SHkiVxYrU7ZDxDpdFTaRJ2HfintJ9PT4bB4384SUmPegQPkdtYo%2BhM49RP2TSVC3XUyagNMFcpBWV6DCCehinA4JOYcBBklSPVwRCcKYHF1PcGbOAZ1DP34DgsS9yZCzf4l8nqXVngXVxmPVtqOF2kRbW7WoSl7R9TBaI7gUqLbUILQGXwinOABMt0Gtg1NoXRUPGmtKz5%2FIxir%2BvC9OzhjEzOka3QRvAgDOEVALVql2CWJLpbE4X%2B6RSv0jMp9a8%2Bk41r0gFkh1%2B1asdkIZqrAtzMJGYwL4GOqUBiXqN9Vda0%2Bp98qnO2UrXj0eRGDGzK3Dsu8NrodLm9OLfvrussF9c4Ige69FTKdi%2BT2DmgUyWI04lrvlhFmBLD65IeirzLdYWKitazck0e9xV4DqC8F4NFn0ZZ%2FzTjH3UDJZBPxJzHGYlS2VNIPfB2wEmmf6tF6b%2Bf3bJ%2B%2B7etLLp8cecE7v2QaaVVZitcH9VmSSYEbTl6BsAzXvGNoTAO7nmg7eC&X-Amz-Signature=981c0d7096d1f150f8ee74af5e820131b38e3083e0ad0c1cf09653bf45979757&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
