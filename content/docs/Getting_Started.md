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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCACKIO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrYbJQ9x9dbX3h4wOdxhG8FUNjlZVWEhpVXNkqeLRoAIgYF%2FIErruZ2L5owwUsigxO5O09V61aPGehYcW2CD0dMQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzVmwZPcR7mrOSg8yrcAyMK%2Fg3bRjfeQ8vhYwO0cmfxwhu6byKOAh5bHjCaeu2RAnWLT3C1gwoV9%2FufglV2jQsh5PqlSrJwx1FvbbV88d9qGlynrWdLfnQxl2eGtzxrSk3kIGmUyeLUhS7BzUTiqxole7sBDKZDZflCj%2B38HaukQORnMJAVDIAa8E7S0BrBU3fyRAdSNXNATARbFpOBmC1OlafjQZ9dsRJtUSZLSqm%2BlywihxTAJqj%2FyvP8VvOPwcIhRMNyRNKwrkC%2BZeW1hPBsnZ9ylw%2F8EZS7ABN0pj8kuAmGhrwfFSt1Qy02abqhGBhKSWS2BEgxMfOXo6EgtllftkITqSxaizGEfWgEGZCFJLEjjJPQfEyfsgJCCig3PYjJAtX%2B3M9fzwYd4%2B2%2B3cgVJCdfdofDhlob%2B3Q1oXQWZsFeez85fW7W%2F3khzBaqrTNA%2Bc%2BCMpcexblgDCMXUVYY1iWJSYpAd%2FzIlzDkTTlSVvCNlQIr%2F2n8DQ1q%2BMJSyIm4oz%2BRnpT81l8CJ9mSP8GbD3q0Ot0bhZBGF%2FT3fw4I8SHRfl8eivMKx0Lqwik%2FJMMjKebAVLqfB8tvX8DR9fOoJ%2BSDN9KzHTy5NBR8ixW5PKw%2BjHS%2Bk54hXsblIa5ggGv17BJWG0%2BB3RAeMMrKgb8GOqUBZBKex%2BotKh3UwJQhtVzvdgF6JSBap3%2BhokJ2q41oPWC9LwUb7jnkozL7yU2I9a%2FcjIvJEEwiGkw5%2FDHOyMsiR%2FMt7cPRcAyS%2FTz%2FJQZgJEPiS4hhoLNSQ2HmjHogOwXc7y5fb5cRb3y4yoM0CbB8Ng2pyUT67bjilzHhehJOPkjW4lz6zrJWkPE%2B7aZ8PHSiwbflaX6jh4RJi5Oyi%2FWkyM1SBHrK&X-Amz-Signature=d30761b65564d709eb789cd148cf1bff85c8338474c2dbc205a33481a761918d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCACKIO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrYbJQ9x9dbX3h4wOdxhG8FUNjlZVWEhpVXNkqeLRoAIgYF%2FIErruZ2L5owwUsigxO5O09V61aPGehYcW2CD0dMQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzVmwZPcR7mrOSg8yrcAyMK%2Fg3bRjfeQ8vhYwO0cmfxwhu6byKOAh5bHjCaeu2RAnWLT3C1gwoV9%2FufglV2jQsh5PqlSrJwx1FvbbV88d9qGlynrWdLfnQxl2eGtzxrSk3kIGmUyeLUhS7BzUTiqxole7sBDKZDZflCj%2B38HaukQORnMJAVDIAa8E7S0BrBU3fyRAdSNXNATARbFpOBmC1OlafjQZ9dsRJtUSZLSqm%2BlywihxTAJqj%2FyvP8VvOPwcIhRMNyRNKwrkC%2BZeW1hPBsnZ9ylw%2F8EZS7ABN0pj8kuAmGhrwfFSt1Qy02abqhGBhKSWS2BEgxMfOXo6EgtllftkITqSxaizGEfWgEGZCFJLEjjJPQfEyfsgJCCig3PYjJAtX%2B3M9fzwYd4%2B2%2B3cgVJCdfdofDhlob%2B3Q1oXQWZsFeez85fW7W%2F3khzBaqrTNA%2Bc%2BCMpcexblgDCMXUVYY1iWJSYpAd%2FzIlzDkTTlSVvCNlQIr%2F2n8DQ1q%2BMJSyIm4oz%2BRnpT81l8CJ9mSP8GbD3q0Ot0bhZBGF%2FT3fw4I8SHRfl8eivMKx0Lqwik%2FJMMjKebAVLqfB8tvX8DR9fOoJ%2BSDN9KzHTy5NBR8ixW5PKw%2BjHS%2Bk54hXsblIa5ggGv17BJWG0%2BB3RAeMMrKgb8GOqUBZBKex%2BotKh3UwJQhtVzvdgF6JSBap3%2BhokJ2q41oPWC9LwUb7jnkozL7yU2I9a%2FcjIvJEEwiGkw5%2FDHOyMsiR%2FMt7cPRcAyS%2FTz%2FJQZgJEPiS4hhoLNSQ2HmjHogOwXc7y5fb5cRb3y4yoM0CbB8Ng2pyUT67bjilzHhehJOPkjW4lz6zrJWkPE%2B7aZ8PHSiwbflaX6jh4RJi5Oyi%2FWkyM1SBHrK&X-Amz-Signature=bfccfd53c904a63a6d438a57a01e9a2b45fc9166bb9f0f903875183018e322d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMBBTXD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFXw%2Ffffx0iW%2FgCyFaiPmInELumGod3NG7EuysdA%2FPIQIhAPY6BZ5OkU49YIaua8Z255LtvXUZ0oZJH%2B8RNI2MQgU7KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwCNah%2F8wk0K0uewYq3AP%2BuRbICfPtLXI%2BUu%2FwlffbGREP0B9dXKMRYB70g9MO%2FW331o9HSF%2F88dMuy%2FSORsczgmBj6q%2Bs3gS3lfZTiqTwYUHmzXRxkgks2c%2Bv70ZMzUZsaPIOCYpjUhppgtbi%2BBDcxU5JQXTcvWNHpxQrfehhhA3UKc%2B2iM8QaXCaEjhEIZexfj33pmdpaRZE8UoM3WqCnmsH9ykciQEl5C1%2FmEzW9zPQIa3w8lxzrVuZaTkqdzze93T%2B5Ur2eUdenEBW1rC9u6Lj9kR%2F%2FazfhkdSR0lWAz86L37PQQ9mMYhLBILQQsGONpGc7bnc7pmBCeEtj1W4yXwZHlKthPMcctTGa6Yq%2FVO9aI6sKnvvvTDI%2FcJZr3BLVLHk7ntF6416kOfSidN6uqlfpkl4uUDqiw1SgMdsE7WRdE0%2BoP5e0OCE9SQN%2BWMVehCQr6KTu8u2HK4MG%2F%2BHQj0bvOJxlJYqfM16xL60md9GL33SozwzAAJWVRkV%2FkJ7yEcQc9tziOH6%2Bc329qCSzkwFSipiJobH8okDusPSDDHmdBuJOPAyHGs%2Fhuq4whlIcJDb7o8Kd%2Bqh%2BpXhjrmq4WzndtXTimYRFfaZW%2BgLJx%2B043sySYCRhrSCS2weK8%2FSdF7nhSz2xFFyijCRy4G%2FBjqkAdfmtw858%2F4epeN5X4cXs4uGfGECJpvSAVfGnFrRpZpaAnPYVHUBUnqQzPY2mwJ%2BClOFfS3go02wB9uaKHkdfgqQ3MNgaujgoB8fCEnwvpiDhTQ5WHop2Jrw7zd8jgWFysDAtMEkmJA1YxPNEEkstleE85nRCYCEp7dGLKq7I2hU5t%2F%2FK5%2BegRrxtlVI02l%2F%2F%2BYaQXGVh6hP%2BDQ%2BKXmBVBb%2BuSKO&X-Amz-Signature=0f148a11776a60b8d6ccf65b2be89942638db21776902acd15fa63904581302d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7XPJ6C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdhawvG%2FY9mC8ed7zmWPB86w3%2BqopXnHBqb8cuVIBSHwIhAJ1sbFI%2BR70IIfeBVrt4ptLRQ5vJBQRgclpquIkPdMZLKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxur3KgB1AZxRTeYrsq3AP0kfbfa8RvE3aJPbIxjPWSv%2BpsoKYtdfllDe2pMwhVtRPU%2Bm7b4tvKvR9FTnywZPL%2FWquhsC7l3BTYTnwwXT4sWUdwMGHy5fI%2B2XQzzS1t5tDgOpkJtTyzCVTMKvPqeAbWipf7n5T6mStCH6bk3p8KU2RkAYU48fQrLWR3QAxUxPSXOpgHrPEbucqCC21yvLe%2BToj7%2FSTpVksDojr8IqzeLJ7qqoMDewylRus93wsZ8KVknl6EnBfxcRfLGGaE6Tmhofy7hVEorSczeF5t4z6OpjH%2F%2FJrk5p7zGDii%2FdTAn4Tsc2wc812770lMAj%2BcykZb65FdWvApgGsezuv0DABy%2FolB3VkBNqj9em4Iilr91Yyfzcyn9Oo4Wu5LY%2FD14Km2Y6cfzmCoVW%2FlVEQo8PSqRSnQGxEpIatZhvkVZErCB7VdHL7klDppd%2FTTRiIy5hoosV1Z%2BhyfLOgmlgmwwgUn4deAFKeMGTMZnXflfaCzVS%2BaUJr2oIfPimzfO1kZGGutbrMrisB0jpb5UQzZEsRoSJzqmBFWZOejLG3nJXL9eq4FQYyfG%2FKGZ9JdxDbCDb3cv2Q9JCIT4W2D3wOpN0M8Gso4DGAYCTXiGpYQSpTni5i147u20QkU1Wn4nTDRyoG%2FBjqkAQNkgg4f4VAgmqstvf4wd%2BPDAmTxJgJ4t5e8clyIgBHxaEHOzY3%2B5G4%2FkuSd%2BmVlsZliyJf54dcGEM64CserftJhWQ9IroRJ7h21XiN8a%2FeSXbJqFCfaGc7pAmPuRXaGm8NCnTZML%2FZTieX1s0I0BStpfAxZ53SODp8ggcADzF5zsVVVIzBXTujRZTZp5fDc%2BAkBZ58XlRUG7pr5LYj8vqIxdi0P&X-Amz-Signature=998aba64f49367ffea3f709af1b1cdbdf2d09be7780dbcd1c7b6907a31f36cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCACKIO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrYbJQ9x9dbX3h4wOdxhG8FUNjlZVWEhpVXNkqeLRoAIgYF%2FIErruZ2L5owwUsigxO5O09V61aPGehYcW2CD0dMQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzVmwZPcR7mrOSg8yrcAyMK%2Fg3bRjfeQ8vhYwO0cmfxwhu6byKOAh5bHjCaeu2RAnWLT3C1gwoV9%2FufglV2jQsh5PqlSrJwx1FvbbV88d9qGlynrWdLfnQxl2eGtzxrSk3kIGmUyeLUhS7BzUTiqxole7sBDKZDZflCj%2B38HaukQORnMJAVDIAa8E7S0BrBU3fyRAdSNXNATARbFpOBmC1OlafjQZ9dsRJtUSZLSqm%2BlywihxTAJqj%2FyvP8VvOPwcIhRMNyRNKwrkC%2BZeW1hPBsnZ9ylw%2F8EZS7ABN0pj8kuAmGhrwfFSt1Qy02abqhGBhKSWS2BEgxMfOXo6EgtllftkITqSxaizGEfWgEGZCFJLEjjJPQfEyfsgJCCig3PYjJAtX%2B3M9fzwYd4%2B2%2B3cgVJCdfdofDhlob%2B3Q1oXQWZsFeez85fW7W%2F3khzBaqrTNA%2Bc%2BCMpcexblgDCMXUVYY1iWJSYpAd%2FzIlzDkTTlSVvCNlQIr%2F2n8DQ1q%2BMJSyIm4oz%2BRnpT81l8CJ9mSP8GbD3q0Ot0bhZBGF%2FT3fw4I8SHRfl8eivMKx0Lqwik%2FJMMjKebAVLqfB8tvX8DR9fOoJ%2BSDN9KzHTy5NBR8ixW5PKw%2BjHS%2Bk54hXsblIa5ggGv17BJWG0%2BB3RAeMMrKgb8GOqUBZBKex%2BotKh3UwJQhtVzvdgF6JSBap3%2BhokJ2q41oPWC9LwUb7jnkozL7yU2I9a%2FcjIvJEEwiGkw5%2FDHOyMsiR%2FMt7cPRcAyS%2FTz%2FJQZgJEPiS4hhoLNSQ2HmjHogOwXc7y5fb5cRb3y4yoM0CbB8Ng2pyUT67bjilzHhehJOPkjW4lz6zrJWkPE%2B7aZ8PHSiwbflaX6jh4RJi5Oyi%2FWkyM1SBHrK&X-Amz-Signature=fc8c7d1bf7f979e32c65e0f963868495d67946d503665fb0430acdde0e8421f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
