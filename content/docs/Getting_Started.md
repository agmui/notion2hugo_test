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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUAQ34K%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2gLMuXChN0LXG8TDNyTMoCnajd9YQmca75zpOFjXixgIhAIl5ks06lk44KAdHIztjxxXUWcX4Cl0d%2B0sxgnyC%2BCOXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxidCA4rQqs0PRaNssq3ANzLLeZPh4UTX2qGWbFSgYamr3fUMnY6kZk0SaJ1w%2F1dnmhe%2Fnwwe0wXV0miGkdCDhYO495bod3z8CdlKKBTNKTV4nfDxmlH%2FlAu1ZhyWqJ1bHVajUPlOjU0o5aU5k31BeK2NYesJbu5P9j9OKuyuzYirOPET4mewf3m%2BT%2BiL6iA%2BaoxHnS%2BhINxDW9sHixvwaPClq5Vh%2FSSG3%2FqoWCPe8Z%2FKKu6lhYCZ6q0tH5rN9a1HpACW997cmt1wi9fAAvMqmadPo4Do7zQWXhuzVD6NW%2F7k%2BK%2FzcHpmqoI9vtHFP7OUqQwiQrOqnQVNHM0RXWUyIyk4uvMxL07zfBpol8DhIXafhdGvlwNdwvJ9gnvZdntwetKeWJWuZzRNR%2BRHKP8A4AMI7UDi6rGTmKbdf5t5QVAfKe4ULIs0jJPqggld2Wjxw64AO7SkjfP7eXG20RZ911EHiWxpoN30JO9z3pWzrQqdkuAfjNKHck6O3PbA0%2FQmX%2BsNNxCg%2ByskDsGc6N7om%2BeApxxTSVqAie8L2EqpG2m3Ptbpk38hpY9JurqE7rdsZC2GYySaE8PvbWUZnGnOupJpUluUREoHjrrnCdbuyjsmFnVEzEfU2bPdXWZjT8bhCqDaaMfpUj%2BxOMszCO0NLBBjqkAZtnCmqTUogWW2hmRqYvFXBvJPnK3eFhuIVabXKJxaHSONaO2lXrlIACqgh6FG8PDoU7vqBHFftxBsxxE5uHBgkiEieS3MPKrT1BvZqrv849At6lJxccqIQSRhSvPvVNlnl2wiVGXNfQJNagkIUrLdxuijCfAF7lwTI3CIugWA16pHEcP9uhFEpHah7WN59BjbTHncOa6BN2blTOsTZsKT9jVzQd&X-Amz-Signature=d0003a19ba56714c0f8cbd84ddf37f4d24e7b3e310f83e6cb61370526f64efdb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUAQ34K%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2gLMuXChN0LXG8TDNyTMoCnajd9YQmca75zpOFjXixgIhAIl5ks06lk44KAdHIztjxxXUWcX4Cl0d%2B0sxgnyC%2BCOXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxidCA4rQqs0PRaNssq3ANzLLeZPh4UTX2qGWbFSgYamr3fUMnY6kZk0SaJ1w%2F1dnmhe%2Fnwwe0wXV0miGkdCDhYO495bod3z8CdlKKBTNKTV4nfDxmlH%2FlAu1ZhyWqJ1bHVajUPlOjU0o5aU5k31BeK2NYesJbu5P9j9OKuyuzYirOPET4mewf3m%2BT%2BiL6iA%2BaoxHnS%2BhINxDW9sHixvwaPClq5Vh%2FSSG3%2FqoWCPe8Z%2FKKu6lhYCZ6q0tH5rN9a1HpACW997cmt1wi9fAAvMqmadPo4Do7zQWXhuzVD6NW%2F7k%2BK%2FzcHpmqoI9vtHFP7OUqQwiQrOqnQVNHM0RXWUyIyk4uvMxL07zfBpol8DhIXafhdGvlwNdwvJ9gnvZdntwetKeWJWuZzRNR%2BRHKP8A4AMI7UDi6rGTmKbdf5t5QVAfKe4ULIs0jJPqggld2Wjxw64AO7SkjfP7eXG20RZ911EHiWxpoN30JO9z3pWzrQqdkuAfjNKHck6O3PbA0%2FQmX%2BsNNxCg%2ByskDsGc6N7om%2BeApxxTSVqAie8L2EqpG2m3Ptbpk38hpY9JurqE7rdsZC2GYySaE8PvbWUZnGnOupJpUluUREoHjrrnCdbuyjsmFnVEzEfU2bPdXWZjT8bhCqDaaMfpUj%2BxOMszCO0NLBBjqkAZtnCmqTUogWW2hmRqYvFXBvJPnK3eFhuIVabXKJxaHSONaO2lXrlIACqgh6FG8PDoU7vqBHFftxBsxxE5uHBgkiEieS3MPKrT1BvZqrv849At6lJxccqIQSRhSvPvVNlnl2wiVGXNfQJNagkIUrLdxuijCfAF7lwTI3CIugWA16pHEcP9uhFEpHah7WN59BjbTHncOa6BN2blTOsTZsKT9jVzQd&X-Amz-Signature=886d617d57861d40c49f0eea82a86e4c94e695e3f987e5c2cef03da3b3830754&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUAQ34K%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2gLMuXChN0LXG8TDNyTMoCnajd9YQmca75zpOFjXixgIhAIl5ks06lk44KAdHIztjxxXUWcX4Cl0d%2B0sxgnyC%2BCOXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxidCA4rQqs0PRaNssq3ANzLLeZPh4UTX2qGWbFSgYamr3fUMnY6kZk0SaJ1w%2F1dnmhe%2Fnwwe0wXV0miGkdCDhYO495bod3z8CdlKKBTNKTV4nfDxmlH%2FlAu1ZhyWqJ1bHVajUPlOjU0o5aU5k31BeK2NYesJbu5P9j9OKuyuzYirOPET4mewf3m%2BT%2BiL6iA%2BaoxHnS%2BhINxDW9sHixvwaPClq5Vh%2FSSG3%2FqoWCPe8Z%2FKKu6lhYCZ6q0tH5rN9a1HpACW997cmt1wi9fAAvMqmadPo4Do7zQWXhuzVD6NW%2F7k%2BK%2FzcHpmqoI9vtHFP7OUqQwiQrOqnQVNHM0RXWUyIyk4uvMxL07zfBpol8DhIXafhdGvlwNdwvJ9gnvZdntwetKeWJWuZzRNR%2BRHKP8A4AMI7UDi6rGTmKbdf5t5QVAfKe4ULIs0jJPqggld2Wjxw64AO7SkjfP7eXG20RZ911EHiWxpoN30JO9z3pWzrQqdkuAfjNKHck6O3PbA0%2FQmX%2BsNNxCg%2ByskDsGc6N7om%2BeApxxTSVqAie8L2EqpG2m3Ptbpk38hpY9JurqE7rdsZC2GYySaE8PvbWUZnGnOupJpUluUREoHjrrnCdbuyjsmFnVEzEfU2bPdXWZjT8bhCqDaaMfpUj%2BxOMszCO0NLBBjqkAZtnCmqTUogWW2hmRqYvFXBvJPnK3eFhuIVabXKJxaHSONaO2lXrlIACqgh6FG8PDoU7vqBHFftxBsxxE5uHBgkiEieS3MPKrT1BvZqrv849At6lJxccqIQSRhSvPvVNlnl2wiVGXNfQJNagkIUrLdxuijCfAF7lwTI3CIugWA16pHEcP9uhFEpHah7WN59BjbTHncOa6BN2blTOsTZsKT9jVzQd&X-Amz-Signature=ed8f2fbceb2ce44178692fc6bce7085d394abfd16e5108724c46baf6426a791d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRA5WBP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBofWzPntBk2xgbps8ML8L5OqwbRTUePljLTq8Kf5POOAiEAkCoPPYZhj%2B%2BADVxxw64PwitSfkDNbbB9UFuu45TItbwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEM361VqeGIL0WDV7CrcA6iCGqUXnf7wgMCVjgVecsKI40urgS1YFnJE8CNan%2FkxGBXP653DZJL7k5WZgLpdfZI1e6eeyJT4niA7UVnN%2Fll9eDhsAPOqJk16z24MXTMzIgXPOZpz9Ng8etU2372BafLySHEWOPcrwYHSSIKoCJHc1iFu5RrhS39wk0whXOiWHSuzXROd18v0SohYL4OYKLGVUXcSmwTtjbhAFJFYwNpaVXrk1nzg1h%2B6EPX2ZARUIiKByGgi%2BO7rDt2Zpq6NHygikrKttzC3SGhCcyjeqNwnoAkMx5GvI8bwzrxSJReNcW4KvyPM156HRzFmQHkjdWBWjktn24ZlEmO3APkj2Z9UZNCpmQFBQAFCZ3P%2FsfPfYBH8G65mOigKa8p1YTzQ4eINsnJ1eOE8glHpE5kjEMkWTHLql8TiBDpJuSX4iZhgk%2BupMZkbAjdsR3ZwwXShn4314M6qqyiGCucBkMqtRZY31%2FywK%2BafwpVr3npIgnbBskeGJP%2BoNQ8t3ITDkj1lAwJWuOP3etuY%2BnpPADPZs9pnER7ohuuFg2gjSbGWCRkiynhiDYmk284C1Pjnv7jmsYIbZWFKmsZvBUhbfLHe%2BmS0GeR6o3fbWhnRdOX0JMVFL5MjF12vSQB6dD0BMNPP0sEGOqUBWcyefYMjHElvzCBh7mHToEksiwuozBvrNdaNfFkiRLnB4qLObHAVRjwgFWaf%2Fqgi%2BDM893MNYJjdwkkRL%2FEEkvjiRIcde1dI7%2F4gM3ON5Q%2FNggQCLMSyiJuPXFS88pUwXN%2BDqLW5cz3522TM6g%2BJzyQ2kAMxFTWkB1bwLvT4gCrXpe6wkAgs0SyLgGyVP%2F7WDRCzVpQD2O6kGedhcXlbWBeVwa0s&X-Amz-Signature=863620ac9c5a74ea57dec6dd3d89b7f224e9e6f6aa374f71cbd5622961d88090&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOSCLUG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYO4Ui8MAPGFcmPwgcTwlz2EBSRaU3ju8I1uZgf%2BiVTAiEAso%2FX1svmLwKL7bOnLSbp2bJDxhmJHNHdPim7dXehQCwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGnd1sx1ResXKLlRiyrcA7IuVk8jUQkNQOepqijVl9M7Q1QUHY4B0D0IMzBbmavezqnvK6xJMr15sizZYMDJ6P18HNdXece%2F%2BhsFZpSy1tdZax4cKfKoVVqqT4K56zXTaSql3fwGeJmMk9vUTDl0xQqD%2BMgfrAeJqi1Y63TcmBbOeqd6lIC5ZU3bIajA1Dd7lrHvJtgNU4%2BGwXR6rtTTy9W04SpUesHUhktof%2BBxKB%2B5mVKMJkCW2uivJi%2FBsNM3zrQVFviT7Jou1dM5UypRaiDN4pqT01QYzoyYOr%2BIvv9x1etZ7uZDfAIr6k%2B3tEd7vHchRPIHiLfC7nXKqyWZ3oennwGSVHSOolSFbs6ZAzP9F%2BANNyM1WNryrWYKmsZp8SAN7BSATtKXXM8Nuv4T8FPpGOVOhA4yRs7UTO8CXSVGVJ3h9fokj7T368UCENWB45Bk2QHO%2FAMyenDWPeG3PRaCei8Rmuoi5PJJIuGm5NlALgzWtulPFQkC70%2B2sxcobs4saNrcbIS70Zi3OLW5ATn%2FpLGgKPXK28UoPGmZvZJbgXfnx6f1WIUu5Iz26igEFj5ItWDBA5AVnjERyNGbV4kDOZKK6t8n2Q6KazojunSjcmtbZ3wW6fQphqARKFWm%2BP9jeSihoxWBk%2B6QMOTP0sEGOqUBENnFO4VteymsJoj9J5bBsPhlV1BXz5JgLmuAPRn8rH0zgAiux9dTCW5pyf698XiTODBKBer2irC6n5xDzpre6VenvR7g1Jb18wtz7jhVt4WonOVXW1U0xvJiQz39uQUHaRdv2%2FIO6VGmb0TYWwasU3TH6lm%2F6gCjOiMYvNuT7DPRkbhZSQc5RSspP%2FkVSmFEd3IlCnMD7QScJG8og8f%2BQN4zzN66&X-Amz-Signature=b4ab7ffcadb554b2ca021cb11aaf707228619caa16b4a231cdd47abab95ba42f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUAQ34K%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2gLMuXChN0LXG8TDNyTMoCnajd9YQmca75zpOFjXixgIhAIl5ks06lk44KAdHIztjxxXUWcX4Cl0d%2B0sxgnyC%2BCOXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxidCA4rQqs0PRaNssq3ANzLLeZPh4UTX2qGWbFSgYamr3fUMnY6kZk0SaJ1w%2F1dnmhe%2Fnwwe0wXV0miGkdCDhYO495bod3z8CdlKKBTNKTV4nfDxmlH%2FlAu1ZhyWqJ1bHVajUPlOjU0o5aU5k31BeK2NYesJbu5P9j9OKuyuzYirOPET4mewf3m%2BT%2BiL6iA%2BaoxHnS%2BhINxDW9sHixvwaPClq5Vh%2FSSG3%2FqoWCPe8Z%2FKKu6lhYCZ6q0tH5rN9a1HpACW997cmt1wi9fAAvMqmadPo4Do7zQWXhuzVD6NW%2F7k%2BK%2FzcHpmqoI9vtHFP7OUqQwiQrOqnQVNHM0RXWUyIyk4uvMxL07zfBpol8DhIXafhdGvlwNdwvJ9gnvZdntwetKeWJWuZzRNR%2BRHKP8A4AMI7UDi6rGTmKbdf5t5QVAfKe4ULIs0jJPqggld2Wjxw64AO7SkjfP7eXG20RZ911EHiWxpoN30JO9z3pWzrQqdkuAfjNKHck6O3PbA0%2FQmX%2BsNNxCg%2ByskDsGc6N7om%2BeApxxTSVqAie8L2EqpG2m3Ptbpk38hpY9JurqE7rdsZC2GYySaE8PvbWUZnGnOupJpUluUREoHjrrnCdbuyjsmFnVEzEfU2bPdXWZjT8bhCqDaaMfpUj%2BxOMszCO0NLBBjqkAZtnCmqTUogWW2hmRqYvFXBvJPnK3eFhuIVabXKJxaHSONaO2lXrlIACqgh6FG8PDoU7vqBHFftxBsxxE5uHBgkiEieS3MPKrT1BvZqrv849At6lJxccqIQSRhSvPvVNlnl2wiVGXNfQJNagkIUrLdxuijCfAF7lwTI3CIugWA16pHEcP9uhFEpHah7WN59BjbTHncOa6BN2blTOsTZsKT9jVzQd&X-Amz-Signature=22521694e612abfe29ac0118b244790414f3ea8ad53ed9312a6d621aae148706&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
