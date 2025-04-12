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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMQG7F7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDpgWzsILP1DTp2xEDoT4HJ7OGqdqEuJr0GeHJI41qu1AIgHGAncawZHDAg12CRlg6IYFt6VW%2BBZPTVHwE%2BAT%2F%2FWnAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS0cxXP0nqoYKOEcircA7DznhHvTtWKucpq3AFU%2BF3xF6sBHicrC47kik31Y9tom96U5tisnx18JDrdmMwTJzXh55NYLtdFfqt76ZDugmEj69tdFyCyhw46P5o1r1T8Inzy%2BdfaYwYWs%2FkG1WrmikzRRfMT5%2BAmM%2FCAhjmurwTDjc0pOdLWUQnlgLw3zWFy7BjzPAb%2B5kP8gyDUGHrMjSBwfDycIPrNUZPDp7A%2BS6xbW2B0NOiHSz9LDH3N9%2BPkO5sydA0KcrBwlJrzLF3imfaiV%2Fxm3FB%2FdlL%2ByPW6opCsb5D9wy0EgKosrcCavbDuja7F%2FudQxrcpYhPwESH7U%2BbxXQKBjIlp%2F0WRp5UWRZnjGLXTv2770qPuC0jDUKOCd5IN2k25S%2Ft%2BbTP7BSuPyTkR6wu6pvEePRt3UOA5Y%2BJQZOMqjqXVrqoJDMxnDjFarUx8QihQnQVe6GyaSC6H0QZp1diGmsiYmyLFBQAENrPrrjlqCkanBH1EQ0oTPF9HtnAO3G6vl4jqGnEvmFREUiS0Q8GoFgxuTbEPQ09blsyUmolt2q1fV%2B0KuWH22qL6iQphf17VY%2FrVx1mmDY05jj7NLkDvlNXjlmTNYeYuP%2FnNcY1HiZmavJ3cS6QSmYkJgmoUbxX%2BocqEP2pJML3D6b8GOqUB3M5JcCLJgicbtx1Fp2Wj8k%2F0v%2BBWpX8ShjKnkzjQ3o7ATT3CDtyjpS7MlMTHvX0twUCLrVW5BsIoXN7l7HzXCfTah%2ByxlGj4PQ36bevpqnkGN3qT6tHPVBxiqPhctQqgypZHmLZOv4ZwqPV%2BJ6fyXkwGLHvmJzDrQc5%2BEDwv3MsRyZgBmIuYdMBTyIk4V%2FqBwBAxgV%2BMq%2BYw2MFGHrZBYc59zZVb&X-Amz-Signature=51f9ac8b34ad40e83c2a572702f4b5587d4adff465738aa257a9cb35dc3ada6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMQG7F7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDpgWzsILP1DTp2xEDoT4HJ7OGqdqEuJr0GeHJI41qu1AIgHGAncawZHDAg12CRlg6IYFt6VW%2BBZPTVHwE%2BAT%2F%2FWnAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS0cxXP0nqoYKOEcircA7DznhHvTtWKucpq3AFU%2BF3xF6sBHicrC47kik31Y9tom96U5tisnx18JDrdmMwTJzXh55NYLtdFfqt76ZDugmEj69tdFyCyhw46P5o1r1T8Inzy%2BdfaYwYWs%2FkG1WrmikzRRfMT5%2BAmM%2FCAhjmurwTDjc0pOdLWUQnlgLw3zWFy7BjzPAb%2B5kP8gyDUGHrMjSBwfDycIPrNUZPDp7A%2BS6xbW2B0NOiHSz9LDH3N9%2BPkO5sydA0KcrBwlJrzLF3imfaiV%2Fxm3FB%2FdlL%2ByPW6opCsb5D9wy0EgKosrcCavbDuja7F%2FudQxrcpYhPwESH7U%2BbxXQKBjIlp%2F0WRp5UWRZnjGLXTv2770qPuC0jDUKOCd5IN2k25S%2Ft%2BbTP7BSuPyTkR6wu6pvEePRt3UOA5Y%2BJQZOMqjqXVrqoJDMxnDjFarUx8QihQnQVe6GyaSC6H0QZp1diGmsiYmyLFBQAENrPrrjlqCkanBH1EQ0oTPF9HtnAO3G6vl4jqGnEvmFREUiS0Q8GoFgxuTbEPQ09blsyUmolt2q1fV%2B0KuWH22qL6iQphf17VY%2FrVx1mmDY05jj7NLkDvlNXjlmTNYeYuP%2FnNcY1HiZmavJ3cS6QSmYkJgmoUbxX%2BocqEP2pJML3D6b8GOqUB3M5JcCLJgicbtx1Fp2Wj8k%2F0v%2BBWpX8ShjKnkzjQ3o7ATT3CDtyjpS7MlMTHvX0twUCLrVW5BsIoXN7l7HzXCfTah%2ByxlGj4PQ36bevpqnkGN3qT6tHPVBxiqPhctQqgypZHmLZOv4ZwqPV%2BJ6fyXkwGLHvmJzDrQc5%2BEDwv3MsRyZgBmIuYdMBTyIk4V%2FqBwBAxgV%2BMq%2BYw2MFGHrZBYc59zZVb&X-Amz-Signature=0a8febd5ca38eeefe73744261ead726e1cc094886a0d8d3c67790440b7dafa63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5D5CJTM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCthyS24YvJNZUps%2BcdIw%2BLicwWB3ygZr%2B%2BabvceXKc3AIgeeW%2FD48ON0RPyINyxZJeG9vRNXTFEbhzpPmASylcX%2BAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv4STBbTE8WnDcBRSrcAwv93tgWl1ehz9SmsStYNgmYwA34du680paUvwlGg%2BIrBhKjyCoKhVE09Zj%2FPBdz9oXqNHilVj5wxV4D69SrsPLZ0oPiBEGyKesmASieIz7N%2FzBpaCYNwFj75rbRkWSr6RsK8eRrdr8Wra1WReelIevq8ED9aojpuVG%2BSbwg%2BXKReexVldPIdJgMX92YrWihcUQCKq5W04nZSQahV78s9ifv5bKiJV9iKb2QBK9XUIoV8V9B3PhiGb%2BIp9ojrCV4xAy4%2FSvPYO29gUDhJOdtyMisBKzG2xrRRRpyF4UuqYxtXPYwNS%2BEBwaKLyE9X8JxF9Z250dsAprfYRZWJB80wF1tY%2BsTOht5HaPRRtCI%2B8MTHndOuVAmUdJ7Mt01pYg5UX0%2Fk3DzgXh1aPR7vSA%2BYLWVvT3527zvtw%2BgH7MORlSvT77zpQN8lFQ2tm8HTtbvHOMrHKtGlk5ct5m%2FxSyCAvnmWbNe8ZiUS7aipqsXlhNfmZVq3HUkwenw88bmN2eGqoGscV51%2FnzTh4G%2BhQskLVr8qxtAol4X%2BezNLFwPlNGf40dKXZX7io98psLCleIsT0uNGMy4O1WS89wqTVq3O80SfHLIEWEZ4VrNGDZ1zXTOWb%2F8UrUosEDQjTNAMOHD6b8GOqUBAzSCPVqycMtTXWMQzUxOrrzmzTWWBLiIVQxOVchBZLrIJM8Y5XfKJcfvx6AAxy4kKEuzj%2B0t0VaY%2BKZDSzqQrjgvZUoJfXjiANEczIZqVqJMPboBqPkfsII7IBxkQcsxsTN5CVZ8s40QDjJfdkM71TLZLIM1C%2F1OCxs9arDJvvobMRjEN4gKlVsGV5CmG0krLfzJ%2Fyub%2BvvnnvMNVukIqk2%2BhUxF&X-Amz-Signature=fa0d8dc38eebd7a10a5a34402e937acdb08af2370084a069f83b36c61decee6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOXEWHX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH3ulqCNyv48QzHI6Hm%2FDc%2BRMzsFvqqZLllLdtyhsiVsAiAvfD9FdidYyLIHLFxywUdYJrVQ4Gp1aXIUbAPuOp84aiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBi8hecbqTjTfNbvHKtwD%2BqRGGBkk8YXbMYvzrWnNHmk2zXd5RQtHvKoY4df23H1whECMyIQOWmKg3G3LQIY8LI4XXBrxWGdkzd5%2Fn9CPmArOLCw9HcX6C%2B5iprc%2BSBD6lUdUgp1PSD0Nr44mFNaYlK1iKHl58JH9NLwB3w0GTGcOr8O%2Bsoo2CGI%2Fs8W506r43Ajo1eZOW9h7NEzDoTYvvevEY7w%2Fgs5C%2F31Hj3dmkIu61kMQe%2BcLqZo31rPBWMearlwGayjOGlPqHhkP5%2FaYxzwTHdcXIpK9cwSjBpclZPFfnI%2BO9ZRFAgAWLdUP%2F1GqG5xPi158F1rbl%2F6RHkRAOPTZS0K47VRpZKSz4LfC07E8BpFkNJy502mkqUFE5ZKumjf5SWJMd9cYiZc4w58NLnby34H8mmsLE0wtMqGKXQx9cgvEcgb3%2BFL3tsDGV9k3%2FSf4rpLDLqtzlKVhp1feVpOBIvQSC2AzfcJjdlC%2FFRXldt011R34w0EyP6ZlRryiwtZXVx8SRAg50OhO%2BEe3rIcY%2Fzgrr9X3a2vhEyH47YOLTJ49Aes%2BxmA5QXwqpaZXyy0Yv%2Bk3P5eB2dQ4PAOpyE9O7X73YQQMSmYaGUfkC2zhZhrkWo1nxTrxjmvM83gsyjSdkyJknZVebZ4wyMrpvwY6pgFAUhlEhcYkt1s16rjQP5eaIN%2BsfsmOWENplfhvk7J9Jg2vx1JrcrkbyYhm9nMAbslt28bCwW%2FwbuaXWEp27Vu5zMcYmrk0TnacjCcFLPICMplhjO2HkYVviNqRD3H84Mu%2BOFCA4Nn6y3vTtKP49x1gPI6wnhK9nJOxfUx6zfTi%2FaClB6WKo2opyCDtNufk08ks8rdQsXBOjGWnjIo%2BZcWNLoiTHepc&X-Amz-Signature=0ddce49d05e705fbbfcd2fccb71247d7a024ee0a913d2e20a8cc17f3c519c77b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMQG7F7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDpgWzsILP1DTp2xEDoT4HJ7OGqdqEuJr0GeHJI41qu1AIgHGAncawZHDAg12CRlg6IYFt6VW%2BBZPTVHwE%2BAT%2F%2FWnAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS0cxXP0nqoYKOEcircA7DznhHvTtWKucpq3AFU%2BF3xF6sBHicrC47kik31Y9tom96U5tisnx18JDrdmMwTJzXh55NYLtdFfqt76ZDugmEj69tdFyCyhw46P5o1r1T8Inzy%2BdfaYwYWs%2FkG1WrmikzRRfMT5%2BAmM%2FCAhjmurwTDjc0pOdLWUQnlgLw3zWFy7BjzPAb%2B5kP8gyDUGHrMjSBwfDycIPrNUZPDp7A%2BS6xbW2B0NOiHSz9LDH3N9%2BPkO5sydA0KcrBwlJrzLF3imfaiV%2Fxm3FB%2FdlL%2ByPW6opCsb5D9wy0EgKosrcCavbDuja7F%2FudQxrcpYhPwESH7U%2BbxXQKBjIlp%2F0WRp5UWRZnjGLXTv2770qPuC0jDUKOCd5IN2k25S%2Ft%2BbTP7BSuPyTkR6wu6pvEePRt3UOA5Y%2BJQZOMqjqXVrqoJDMxnDjFarUx8QihQnQVe6GyaSC6H0QZp1diGmsiYmyLFBQAENrPrrjlqCkanBH1EQ0oTPF9HtnAO3G6vl4jqGnEvmFREUiS0Q8GoFgxuTbEPQ09blsyUmolt2q1fV%2B0KuWH22qL6iQphf17VY%2FrVx1mmDY05jj7NLkDvlNXjlmTNYeYuP%2FnNcY1HiZmavJ3cS6QSmYkJgmoUbxX%2BocqEP2pJML3D6b8GOqUB3M5JcCLJgicbtx1Fp2Wj8k%2F0v%2BBWpX8ShjKnkzjQ3o7ATT3CDtyjpS7MlMTHvX0twUCLrVW5BsIoXN7l7HzXCfTah%2ByxlGj4PQ36bevpqnkGN3qT6tHPVBxiqPhctQqgypZHmLZOv4ZwqPV%2BJ6fyXkwGLHvmJzDrQc5%2BEDwv3MsRyZgBmIuYdMBTyIk4V%2FqBwBAxgV%2BMq%2BYw2MFGHrZBYc59zZVb&X-Amz-Signature=3e17949209d1fccad91d4d770c7bb97be682f77b1f54a7519cec6a3100f60772&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
