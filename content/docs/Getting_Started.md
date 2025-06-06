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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHA6IPB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDDqw4ERtkc6Si8y1mbFG1nGLJqcKWoPpKo7dPt%2BNxWHwIgQgKmxy96b34iWZuo6afGC%2FsVs3QuKh7%2BaHNVw4bofbkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLuFFgirNLpZVC%2F4aircA%2BoSXGBjMYFLMuXHEqJ6YgEhD1jaJxxOCgXqSJCzMOe3APH1wmvU3VoJpriSFl3It6exibupH0q5dPaDxAAJCVVbtrvXIjU%2F1PhPlNH6TrSjeOKB4fDXOm8fopQ2kKwJ9xyxB2JMYxKgQQ3%2BtWpr6TQTL7EFvIaQbiuyrCm1VduDmKcK%2Fz1VFi%2BKa3O%2BeHDqZ9YqruNg41tyjgheGn%2FgFLfWOXSVIUeCjxIcG8yv8Oh67euSwSGVTtB6F42bsr5JWs2osb8730s78X0sqdzM3FYt5ywUj%2FPqLMYWh3oE5N1k%2FrD2l%2BSvyH5Y7fDLBbuYQvh0d88sIycU%2BwplCNIFaLxZpg0ItslrdVgaOm5mabJXVX3uqbICJcE28M4%2BV6DK9J1JDF%2BswMmCYjnfoFAu5iKuPV2%2FWZ97nevbDejhL%2B2HgL2Mb96KY3B1M48jP1xp8kvFhV%2FVvCvEi4JqyvKFPNNScZcOEaA0oBbetlBDMkfp9tsSUye%2BGNzC17%2BN2jKEKm9i70ed0sAgsAsFB4EDWlC%2B%2BFt0jZehQgSuy4MZM3p5jLrbIncuxaMSSHX9xAxAyC0N08QeATcMNGsU6iC7kaL9idvS647yx3%2FAxE12hnnGp%2Fu2MHSK9cqWu9%2F5MLDqicIGOqUBlGqDtzrSQMQEqBgMxPlUa9SYY5otqxxDVj3Ye6ppLf3hD5NsSZH10jwpQk75IswzaAPycaup3cEkFyuOGApHGXlJeaQdMkDm%2FygT3gM3oT%2BoHBcNNhkcU0cOoUZuyfpqN6ujsg2%2BGXHFGmUKRPeTcFGRjlm%2F7npZ%2FhYW1o9KY%2Bsjx1f8p6VVNqY1j7rgiAoUEHEU6WRQJE0ZZPekcUHGcqwjB1ah&X-Amz-Signature=16be2ce7cb176528df2c8f78c87fea0cd46d2034047f6630e37d01f8f3b59140&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHA6IPB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDDqw4ERtkc6Si8y1mbFG1nGLJqcKWoPpKo7dPt%2BNxWHwIgQgKmxy96b34iWZuo6afGC%2FsVs3QuKh7%2BaHNVw4bofbkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLuFFgirNLpZVC%2F4aircA%2BoSXGBjMYFLMuXHEqJ6YgEhD1jaJxxOCgXqSJCzMOe3APH1wmvU3VoJpriSFl3It6exibupH0q5dPaDxAAJCVVbtrvXIjU%2F1PhPlNH6TrSjeOKB4fDXOm8fopQ2kKwJ9xyxB2JMYxKgQQ3%2BtWpr6TQTL7EFvIaQbiuyrCm1VduDmKcK%2Fz1VFi%2BKa3O%2BeHDqZ9YqruNg41tyjgheGn%2FgFLfWOXSVIUeCjxIcG8yv8Oh67euSwSGVTtB6F42bsr5JWs2osb8730s78X0sqdzM3FYt5ywUj%2FPqLMYWh3oE5N1k%2FrD2l%2BSvyH5Y7fDLBbuYQvh0d88sIycU%2BwplCNIFaLxZpg0ItslrdVgaOm5mabJXVX3uqbICJcE28M4%2BV6DK9J1JDF%2BswMmCYjnfoFAu5iKuPV2%2FWZ97nevbDejhL%2B2HgL2Mb96KY3B1M48jP1xp8kvFhV%2FVvCvEi4JqyvKFPNNScZcOEaA0oBbetlBDMkfp9tsSUye%2BGNzC17%2BN2jKEKm9i70ed0sAgsAsFB4EDWlC%2B%2BFt0jZehQgSuy4MZM3p5jLrbIncuxaMSSHX9xAxAyC0N08QeATcMNGsU6iC7kaL9idvS647yx3%2FAxE12hnnGp%2Fu2MHSK9cqWu9%2F5MLDqicIGOqUBlGqDtzrSQMQEqBgMxPlUa9SYY5otqxxDVj3Ye6ppLf3hD5NsSZH10jwpQk75IswzaAPycaup3cEkFyuOGApHGXlJeaQdMkDm%2FygT3gM3oT%2BoHBcNNhkcU0cOoUZuyfpqN6ujsg2%2BGXHFGmUKRPeTcFGRjlm%2F7npZ%2FhYW1o9KY%2Bsjx1f8p6VVNqY1j7rgiAoUEHEU6WRQJE0ZZPekcUHGcqwjB1ah&X-Amz-Signature=cd51be7bb3a9aab12dbda3cbd0d05fe8c409e0ba5bc21959aa4fd77fb202b3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHA6IPB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDDqw4ERtkc6Si8y1mbFG1nGLJqcKWoPpKo7dPt%2BNxWHwIgQgKmxy96b34iWZuo6afGC%2FsVs3QuKh7%2BaHNVw4bofbkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLuFFgirNLpZVC%2F4aircA%2BoSXGBjMYFLMuXHEqJ6YgEhD1jaJxxOCgXqSJCzMOe3APH1wmvU3VoJpriSFl3It6exibupH0q5dPaDxAAJCVVbtrvXIjU%2F1PhPlNH6TrSjeOKB4fDXOm8fopQ2kKwJ9xyxB2JMYxKgQQ3%2BtWpr6TQTL7EFvIaQbiuyrCm1VduDmKcK%2Fz1VFi%2BKa3O%2BeHDqZ9YqruNg41tyjgheGn%2FgFLfWOXSVIUeCjxIcG8yv8Oh67euSwSGVTtB6F42bsr5JWs2osb8730s78X0sqdzM3FYt5ywUj%2FPqLMYWh3oE5N1k%2FrD2l%2BSvyH5Y7fDLBbuYQvh0d88sIycU%2BwplCNIFaLxZpg0ItslrdVgaOm5mabJXVX3uqbICJcE28M4%2BV6DK9J1JDF%2BswMmCYjnfoFAu5iKuPV2%2FWZ97nevbDejhL%2B2HgL2Mb96KY3B1M48jP1xp8kvFhV%2FVvCvEi4JqyvKFPNNScZcOEaA0oBbetlBDMkfp9tsSUye%2BGNzC17%2BN2jKEKm9i70ed0sAgsAsFB4EDWlC%2B%2BFt0jZehQgSuy4MZM3p5jLrbIncuxaMSSHX9xAxAyC0N08QeATcMNGsU6iC7kaL9idvS647yx3%2FAxE12hnnGp%2Fu2MHSK9cqWu9%2F5MLDqicIGOqUBlGqDtzrSQMQEqBgMxPlUa9SYY5otqxxDVj3Ye6ppLf3hD5NsSZH10jwpQk75IswzaAPycaup3cEkFyuOGApHGXlJeaQdMkDm%2FygT3gM3oT%2BoHBcNNhkcU0cOoUZuyfpqN6ujsg2%2BGXHFGmUKRPeTcFGRjlm%2F7npZ%2FhYW1o9KY%2Bsjx1f8p6VVNqY1j7rgiAoUEHEU6WRQJE0ZZPekcUHGcqwjB1ah&X-Amz-Signature=51e714ff1a645fccd17f00b9dd486e0c05c18509e1b9e32e5b60173ede94c89c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF7DZD6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDSawWY7dAjzi1nHF184FcBAAlqqREA5fx8qqz4IQ4MywIgXO3TIcoNUMSvC1VjL0v6hOvm0KxtPf424GmPor1Qlewq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNw0ojbBWXXEsCy2cSrcA%2FHHGSUrwZR6PMEFwYJODjC3YlMluavKMwtwck6AI42Xd%2B6mSFtQFqfl15Z2F1oc7mL5sfkE3hd9EwmX4N5bZx2pTJaqaqC3vhFSOWEUN3j72bQESzECG3ApQSoxUJA7OvkTvKWZGyovCgGAFv58egHdHJtQnYgVSxNBYcGUdyYz3vyEz%2F%2B1ot4J%2FX8xeFTZyyrpSIqYQre42pIaHverrv5oZRCorY0dsjBDHdWxHv%2B0gz8vYKRTAFlJGl7c9xmfa6Fu8TOldS1ruxnkE4E%2BZN%2FIRlNjrV9Ngq8gjgNMXuHTli5JqBqvxLKq7Ktz5Dn0VeZdYmhTJpAnosRwJEovgSqEJguvDB7FbJzzwSzGxdrjCkuLkUWLMB9eGpA47emJqKap8NqXAE9NqxpG7c0w9IIw8vQK4ym5%2B6PFJbPiHtrPrE7jL%2Bgv9%2FEa%2FBOdAsLG0U8QnMnOgd%2F1j2JJpEoPES2em5g6uEgCC4KFoSzSdLB45vnG5o%2F7hC4Pq%2B0OEdkfjjZmnOiHX5Iik0YvviwXT%2FPUWnuaOMWN5jHuWvDtaplszRQHRrMaerM2Ddu9R7e952iZolnEBusw%2BndMXT%2BkiGV1dRWkjRqa6B4MWnff03Bn%2BtHWP8bJbPfk58vHMOj6iMIGOqUB%2BFOE4J2GLW3uX%2BPFlM%2F%2BRnqwRBTp%2FQe42JqCVPaMkonuHsy77%2B0rWXVFEHWJoerYCwEn16Xkz%2BSGwX2mvlDyhpO1ULD9h%2FNmdbtnv9qWI2LQj5HwFcFfwkXzU3NqshpmAye5khSfO%2FJpkeMqe7p88ZjTQOInMvzXtjs9AWb5HHKUSNfhc9uN4BzO6lDP9hi90zuF4M1Qm2592HFqGC%2FqDEgBVZbW&X-Amz-Signature=0d89cb580ed8e4e91b651bdcad8ff3d1b42aade6af5b8fd34d990db71161084a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP63Q2A2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCqgToIL%2BBsQk9H8Y5ppUBnXEPdKc%2BzajYDBrGwHyES4AIhAK1AS5%2FzYG7txnRz%2F6DScORJZdI8UizdF0pDNmkCoa%2F1Kv8DCFIQABoMNjM3NDIzMTgzODA1Igw73NUCdRojENE8e%2FAq3AMspU04Mu8lBVNB7cHHmoDC3jUHywkSoyukphqRGUXqtg%2FN8wWo6xY7P3Jv%2Fpj5fT8skF6RWQvo6cRmFbqF5FpdBnBl%2BhcRZm1WK%2F7ov569yhb7o%2F%2Br6bmFOQNikCtsu1LzMFTxcqGk%2FrwJ1OIeDQA0PVIyPRCNEi5D%2FYxJolDlMr6%2FyIAmjzFKB9AOl5XRxflDFmmfy3rexC6yHOqbHVeeWwDwp5ieOwh%2BVEQD6jhi2NPLo5SPuRKTBl0OTQP%2FwNyR7HoBxn2BdgvFa9Gt3jzgqlX9Gkp89AFqtpf5kuUxQy%2BAm%2FVXYYwFAbl3xDQ56sFEYvky%2FFe54NGpsJQmanTTwYswdRSulQ%2BtkDKiZKllYvsLVYnc1SwWi3a5WzQo0TPvARYR09uiln37oXS9xpl01GR%2FbqQKqRsdNoH94gALBedth0217llKLyzHftFwUmaFiQDuX9uXyOFn9QoPchUSH6ldX7qKektRXS15tLuhjM9vxQmTbfgU0y6RUgLr%2Fe5FUoJlX39l%2FLunlxffTUuVJLhAiWGhbVK3nGYX4VPovyLyvgOYCG1CVT1XNFoZzxwwVCjtiwXKbFxdTn5Z%2BIFjSscbRfRb1zjE557amnB4%2BKfkDjQcst6nMqT6dDCm%2BIjCBjqkARZ3J%2F1PvQS%2FQy97cfI5nxYcmTkZk851JXtVJr3Gz8t06mmj0uSCoYfZW2gXwkSdozIGHJpPUeooss6acxN4mbjFtybKHkmDjf9025b2QZMEsuNljFo77L0zz%2BCsL%2F42FZpko6Ie%2FFngO6fUPwsJ5sjIPNHlJYxduU5ovfBfyK54FQnqqUEpfl1%2ByJmGDsBalPLVqsOKakGGtLCJOALDOS3N8WHd&X-Amz-Signature=0188049d646560d90ffef4daac72399d7864cf7b82df664dc7864251be10d443&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHA6IPB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDDqw4ERtkc6Si8y1mbFG1nGLJqcKWoPpKo7dPt%2BNxWHwIgQgKmxy96b34iWZuo6afGC%2FsVs3QuKh7%2BaHNVw4bofbkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLuFFgirNLpZVC%2F4aircA%2BoSXGBjMYFLMuXHEqJ6YgEhD1jaJxxOCgXqSJCzMOe3APH1wmvU3VoJpriSFl3It6exibupH0q5dPaDxAAJCVVbtrvXIjU%2F1PhPlNH6TrSjeOKB4fDXOm8fopQ2kKwJ9xyxB2JMYxKgQQ3%2BtWpr6TQTL7EFvIaQbiuyrCm1VduDmKcK%2Fz1VFi%2BKa3O%2BeHDqZ9YqruNg41tyjgheGn%2FgFLfWOXSVIUeCjxIcG8yv8Oh67euSwSGVTtB6F42bsr5JWs2osb8730s78X0sqdzM3FYt5ywUj%2FPqLMYWh3oE5N1k%2FrD2l%2BSvyH5Y7fDLBbuYQvh0d88sIycU%2BwplCNIFaLxZpg0ItslrdVgaOm5mabJXVX3uqbICJcE28M4%2BV6DK9J1JDF%2BswMmCYjnfoFAu5iKuPV2%2FWZ97nevbDejhL%2B2HgL2Mb96KY3B1M48jP1xp8kvFhV%2FVvCvEi4JqyvKFPNNScZcOEaA0oBbetlBDMkfp9tsSUye%2BGNzC17%2BN2jKEKm9i70ed0sAgsAsFB4EDWlC%2B%2BFt0jZehQgSuy4MZM3p5jLrbIncuxaMSSHX9xAxAyC0N08QeATcMNGsU6iC7kaL9idvS647yx3%2FAxE12hnnGp%2Fu2MHSK9cqWu9%2F5MLDqicIGOqUBlGqDtzrSQMQEqBgMxPlUa9SYY5otqxxDVj3Ye6ppLf3hD5NsSZH10jwpQk75IswzaAPycaup3cEkFyuOGApHGXlJeaQdMkDm%2FygT3gM3oT%2BoHBcNNhkcU0cOoUZuyfpqN6ujsg2%2BGXHFGmUKRPeTcFGRjlm%2F7npZ%2FhYW1o9KY%2Bsjx1f8p6VVNqY1j7rgiAoUEHEU6WRQJE0ZZPekcUHGcqwjB1ah&X-Amz-Signature=4cc310fd597edc33b19b77cc5df1521bd8f5a0f172ca1a360f1145f20f204cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
