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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJQL5GU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDKmpLUcBaY2qX747po4acsAS%2FXTx3ye2LWGZiffFSn%2BAiEAnEZ0BptKOSJhTpiBgzrf3fbAhIszr0qNNaKH2cpocBEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOagxhHnXjKVocNjlyrcA3HWi7%2FDshK%2BXapDPZJPXM3Mvwt5SJE6UwIlcekj%2BW%2FDT%2B6rpUobU1CnzfCw0NiCVC0%2FRSDYVMQMx%2B8VdLQWAz%2FIZBpwaaSwhFDlDHmLiM0z7rXQCc8PwFJud8ezEpPwf954n%2Fo5rItDi9JL3vl%2B4DrFTnY1pQAXJTgYyiACJ1BYbLC85RrVrRMEvZleuZ%2FIYT0TsNS5YA0WdPJhrB1QdrCUlr12gPOqyqbRxnMRmnCyVLg6utaTm9IAm3PcuxXBEarYnyBI9rgUfiebco%2F%2BRmdrgoAJ9QKgunF6sNiseUZ9lqKZ%2Fj2d7FtZCY3KI4Ceha9KqpZbfwRAtXhuE%2FpAt8Aw2hWLUszxv2xZo0rke4PDgW16%2F%2FKQ2hkz%2BtCn%2BJe%2F61sr8FXUcDsMG046CVwPsG3%2BjitEbLhzUcCepHuqIqGpQSU61wc%2F5iUkxy4CVenawSfWCkrqUi%2Byb6hfL5Bz%2BAYp9wy74lWm8WrylDRVPKDtwQHmYYgiWOG0JSoN5sghVmHdPr3TaLHq2WFcwXEo7rtiTxIRwu0f1%2Fy%2BfAWU7wH0Qgbb3Yyml28UsQSsJTcoDD84B%2BuLMiOab2uC%2BLF%2BickmP45HqUKpixoVQhH%2BUPUrMPiSW6ghTzoQar4kMOzU7L8GOqUBcolqlU3H2dh2r1XEGO3QEA%2B20Wa9BZmXHvF5%2Fxy7ll8AJtbv1TWLtzrnOPDbMvDjRtp5Jvuu7Bp2fbFINEJ0UHV9ZHPwDvM3TqKqKR1eB6El6A%2FIdE9gvdPj9Kn3oJypLTKYBcXgo8El2UVJYTtTtzxHYquWbh5DFCKNynRwaa7cj%2BVwKlAn44SbIvegZcXJZdYjSP7e%2FmHmXYIQE0JSYv8XUG6w&X-Amz-Signature=221a59c96c098b724d489eaad300fe086c26ebe9099e15ba3a348a7538714a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJQL5GU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDKmpLUcBaY2qX747po4acsAS%2FXTx3ye2LWGZiffFSn%2BAiEAnEZ0BptKOSJhTpiBgzrf3fbAhIszr0qNNaKH2cpocBEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOagxhHnXjKVocNjlyrcA3HWi7%2FDshK%2BXapDPZJPXM3Mvwt5SJE6UwIlcekj%2BW%2FDT%2B6rpUobU1CnzfCw0NiCVC0%2FRSDYVMQMx%2B8VdLQWAz%2FIZBpwaaSwhFDlDHmLiM0z7rXQCc8PwFJud8ezEpPwf954n%2Fo5rItDi9JL3vl%2B4DrFTnY1pQAXJTgYyiACJ1BYbLC85RrVrRMEvZleuZ%2FIYT0TsNS5YA0WdPJhrB1QdrCUlr12gPOqyqbRxnMRmnCyVLg6utaTm9IAm3PcuxXBEarYnyBI9rgUfiebco%2F%2BRmdrgoAJ9QKgunF6sNiseUZ9lqKZ%2Fj2d7FtZCY3KI4Ceha9KqpZbfwRAtXhuE%2FpAt8Aw2hWLUszxv2xZo0rke4PDgW16%2F%2FKQ2hkz%2BtCn%2BJe%2F61sr8FXUcDsMG046CVwPsG3%2BjitEbLhzUcCepHuqIqGpQSU61wc%2F5iUkxy4CVenawSfWCkrqUi%2Byb6hfL5Bz%2BAYp9wy74lWm8WrylDRVPKDtwQHmYYgiWOG0JSoN5sghVmHdPr3TaLHq2WFcwXEo7rtiTxIRwu0f1%2Fy%2BfAWU7wH0Qgbb3Yyml28UsQSsJTcoDD84B%2BuLMiOab2uC%2BLF%2BickmP45HqUKpixoVQhH%2BUPUrMPiSW6ghTzoQar4kMOzU7L8GOqUBcolqlU3H2dh2r1XEGO3QEA%2B20Wa9BZmXHvF5%2Fxy7ll8AJtbv1TWLtzrnOPDbMvDjRtp5Jvuu7Bp2fbFINEJ0UHV9ZHPwDvM3TqKqKR1eB6El6A%2FIdE9gvdPj9Kn3oJypLTKYBcXgo8El2UVJYTtTtzxHYquWbh5DFCKNynRwaa7cj%2BVwKlAn44SbIvegZcXJZdYjSP7e%2FmHmXYIQE0JSYv8XUG6w&X-Amz-Signature=fcc9b27f3c30f6354918f05864ff13f1ae968bcf6b811142b9bca3ead2602e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYCYIR6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDc9W4nIyqylSAtnNDMrJKW3Ow1QEEA4gc15Gix580I%2FgIgUIchCYSvM68mbg6ZegyYVh7WxD7CpKniutAMAJrSmX8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0VyUfVwglqNOOtWircAyuIG0DPMxaybJFcTwV237mEy0XnPB1%2FDo0PQzc8A9Djpp0nS04SovK%2BecWso4%2BEqpWHXRyszim%2BzY%2FcqKtbWvFixuQLe3eHgtr7AKcJf5of1bV9U3y%2F7a3FxtDklZ4xQgk7Fsxj%2Fbv9Iu%2F3sfa%2BXZDDYmcYCpcZwYX2geemoyAClHHqMd9uYECr10KV0VPT7YDf%2F%2BrKdyqJbsFXnmR3zP0eI1b8sSJ7x8tRJ3h9hC4t3bIv9TQANqbl9zBkwIw7uAJ8N84YtU%2Fyf8fnVn6wP4%2BBGdEypHyc5ISION95IAdmmEpzu9%2Fgk9ENHePGxlQTPHxDkWRCQky52Gk7suJZUrnt2AjcRPk%2BWgEXkCFffzsKGXP%2FtOWz1BpngXaQbK7JTPv8%2Bmt%2B56OCdrHA56lCXpatWhW69OIOGqSWcwuk0OOHAAtUnU0MxR7vcqUDg9jT3F5QhV4xzSZsKZ30tJf49rJCwQgzJr3z5V8qbqOfeqXOQTEoZA0%2BXvEv%2FgWSuAfBBW%2Ba6NSps0ojkJxvszUzyD9tDmVYZQ95hDygYog24VGpOEkFCKcWvcSKehBvizY1bagv7V0LD13bZplUWcb48fzpEyUB2vLTQJNbMghwCvAkkxp5KprrI%2FfW1%2FnXML7S7L8GOqUBlyYurlKYobRWarYP4NWUhp7qqn1ax6M7sQGfxGE2hH0AmavqDwp6W4YDFSm6p8BzKaQIYvfw7Ecec0tIJv13Ld%2FvXJOuhwLXlQX0d7dnoS%2FsHBtV6kI8HVHPgfbzDPL6d1hTOGZcCkSgOXe%2B4b%2FxqPRnk3tLMwrZ7GXBK8mr%2BEasCxLd2psO9QG5Jxt0pp1CLWHOQM%2BNthQKP6JQ4Fkx62GcYEUh&X-Amz-Signature=567e7382aacaf7a93200af31a240e00ca98ccb3b62b51143d05c09fe387fdb68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKRYCM4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBCCViuzKC2PtLRLxgVY%2BcAvZOCCRqtZavogxJYMkZnwAiEAoHRTnhACYPNwbWbDRLdh0hazluYF1sn3GchCZt5tX2UqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUnBF%2FbZgYuzjUI7CrcA0fetGxTbdIi8IZpsu%2Bcqoe2vyK1ykIPe7HBjX6CBYs9MTP2JF897G0lrNXKYk0lBbhYPk%2BOfTbOhEkGtz8YOGd4c4u58c0NR0GLLnV6R3jCQYLocvTZCPTtAglJkzdPApurLLnaD47FqRARc0x7TsqTr1gXCUEuRH6owd3w%2FPH43%2FTaIJ%2F7Ie5bpj1hmHbkR1x8YKPEDt8yZZI%2BMvXMBLyJgh6MAVlu0uPoHixaeiZBOnw3b1l%2ByTYh9yUtUBJZCSAX4k07yp1FdMJHnozR%2Fx8a0%2BZ2x%2B85iZJ5%2FPUsvmIDdrpAiveRD3RWl%2FwtYubR%2F6vSHh2ce0ve4je6Ykpqe6mSjo9UXlJQjd5Ko3GOXBwjAdqF%2BsfTTWQTT2OA8GklsSV8RH7JvmFANCpKFBdrLRSV9ujHoop8rp6TT%2Bm8Wws6xS5ta3RsAh%2BQLZBGe0UOBxsmw0XKN6vo6qb32OstLujtf6VTMdv7am2ofcDmhe73vk6fiHu8vbedsFWOSRE%2FGjbIs%2F6yxU66kIrEV2hJCyZCHFpVf0Ex3gmlx81lyxjUiLEeZqOY%2BBAAkYXDKUFqpsPkcUom88QZRg9yY%2Fp%2FQqjgv%2FFaC%2FY97tfiu7oejq%2BJYtZNmcyqw2dih37SMIbW7L8GOqUBWE3ZFWgwaHi86l1mOfk85kO%2FZk6J6BW5znNuCrcz1kkR3ApK2eW2KilVE1QP4Go%2FpCBkjmdc9TrEKPDlZzoP5KVUU8%2BZGiiWCVr1wY57GV9Agva%2FsaH69TTbhtCE54dAZIBJOZyd%2BX%2F3eJok8dwhMOzdaKCVkkCIsSGJpzWogSG6U0UgNkk2ROWbjgFPjrAmKOoIAEpgG%2BwxXol6tIUmp%2BilY%2BN6&X-Amz-Signature=201a437a898418ca6109a118364953f7b5e1182c452350ad68fd5a8d1e5e7426&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJQL5GU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDKmpLUcBaY2qX747po4acsAS%2FXTx3ye2LWGZiffFSn%2BAiEAnEZ0BptKOSJhTpiBgzrf3fbAhIszr0qNNaKH2cpocBEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOagxhHnXjKVocNjlyrcA3HWi7%2FDshK%2BXapDPZJPXM3Mvwt5SJE6UwIlcekj%2BW%2FDT%2B6rpUobU1CnzfCw0NiCVC0%2FRSDYVMQMx%2B8VdLQWAz%2FIZBpwaaSwhFDlDHmLiM0z7rXQCc8PwFJud8ezEpPwf954n%2Fo5rItDi9JL3vl%2B4DrFTnY1pQAXJTgYyiACJ1BYbLC85RrVrRMEvZleuZ%2FIYT0TsNS5YA0WdPJhrB1QdrCUlr12gPOqyqbRxnMRmnCyVLg6utaTm9IAm3PcuxXBEarYnyBI9rgUfiebco%2F%2BRmdrgoAJ9QKgunF6sNiseUZ9lqKZ%2Fj2d7FtZCY3KI4Ceha9KqpZbfwRAtXhuE%2FpAt8Aw2hWLUszxv2xZo0rke4PDgW16%2F%2FKQ2hkz%2BtCn%2BJe%2F61sr8FXUcDsMG046CVwPsG3%2BjitEbLhzUcCepHuqIqGpQSU61wc%2F5iUkxy4CVenawSfWCkrqUi%2Byb6hfL5Bz%2BAYp9wy74lWm8WrylDRVPKDtwQHmYYgiWOG0JSoN5sghVmHdPr3TaLHq2WFcwXEo7rtiTxIRwu0f1%2Fy%2BfAWU7wH0Qgbb3Yyml28UsQSsJTcoDD84B%2BuLMiOab2uC%2BLF%2BickmP45HqUKpixoVQhH%2BUPUrMPiSW6ghTzoQar4kMOzU7L8GOqUBcolqlU3H2dh2r1XEGO3QEA%2B20Wa9BZmXHvF5%2Fxy7ll8AJtbv1TWLtzrnOPDbMvDjRtp5Jvuu7Bp2fbFINEJ0UHV9ZHPwDvM3TqKqKR1eB6El6A%2FIdE9gvdPj9Kn3oJypLTKYBcXgo8El2UVJYTtTtzxHYquWbh5DFCKNynRwaa7cj%2BVwKlAn44SbIvegZcXJZdYjSP7e%2FmHmXYIQE0JSYv8XUG6w&X-Amz-Signature=6e4578fa4ebb051488ee1f20eaea05cd8f602c62e2b527da07f4f4133bcd70ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
