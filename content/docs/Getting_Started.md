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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VM46KUE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU9bq0YG7Gd2CEDDPQASbmzJrcQSYGG%2FWDDsFUc9JGAiEA8xCJRHBQN3CjIceTqeqy7LMMF7h30bvpigSAiK8hytQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCJNOSDBZWeNINQuLircA1KTe4MuK0TCBSu1mtzhhIJ5gxKdk84%2BrCeRieotaCeVWqQJ%2BH0qp%2ByCww%2BvWavote35iizSUPydsqpBDGRnoVOJknliUxLMsUPmLOFsSEBsB3q9ODTKTNAImKihZzFXtGavCtWJ3by1amjKJ9K4saOrm4ohEBG5DhagFMSitIbCmGkYdqbtwEE%2FIttY2enLy4ouBQyAge5U%2BVCMAErNvZVLgDEcEaa9ikobDD5AR3D0eOd%2FqYoEdGePTUrdC2cKNcDt%2F1vnxswtUZsI1yGL1c0np78ar%2Bx1AMyW9OkLTfVr1CqGWuGidz4%2BqPqkBJAsNZQuCJ9yAwEwM%2BV94%2Fvy12NphvgeZeVJArLyp49zyMHr1uw11B6IHkFOEWcD0%2FWrTnfF6606h4iAOH2wkJKzj21vaYz4pXZ0jGBS23WpZ2IIo9Dl%2FfPrcVYjheqduIfg8fdDBBEkPprKdfxl3Gg1BFOq3nzvXT2LqvwFSgTzSMEKSY17414fCBdMMFkRxgZyWARELBe6sczG6hhPPdTkUDuEc5cayynflnan6zIFT45TM0vZD7pfotqttWsgkF6BU2FjCT8onJ6au94F1NjY5A2wytmL7TQsHsNJ5rAAZgkvhdp5yhTyfxaKW3j6MJWy5MAGOqUB1VIhNQodWdqMFrTI%2FA9WShN1p3keb6OqO0mqnQiCtNOOhg2kynGFrbZC7qJFUb0e5ZMv1Rub56mD15ElkLICmrNQ66GlAUoyvzJgj1Bh3PXZ26e3UP94UOkFHgKqf1b606zcnXH%2BRl1xifht3msKkkvYHHHMKVJOkhz%2FCAlQqJEQ2iIDZ%2BVaV32E61hnYqoQe%2BQhcWFI4B6QVTCnHhujdAw%2F22au&X-Amz-Signature=388bcb393dd6d81375b5dd9aaa649d33417af7b83801a5b0fb8f9a1b20df9282&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VM46KUE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU9bq0YG7Gd2CEDDPQASbmzJrcQSYGG%2FWDDsFUc9JGAiEA8xCJRHBQN3CjIceTqeqy7LMMF7h30bvpigSAiK8hytQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCJNOSDBZWeNINQuLircA1KTe4MuK0TCBSu1mtzhhIJ5gxKdk84%2BrCeRieotaCeVWqQJ%2BH0qp%2ByCww%2BvWavote35iizSUPydsqpBDGRnoVOJknliUxLMsUPmLOFsSEBsB3q9ODTKTNAImKihZzFXtGavCtWJ3by1amjKJ9K4saOrm4ohEBG5DhagFMSitIbCmGkYdqbtwEE%2FIttY2enLy4ouBQyAge5U%2BVCMAErNvZVLgDEcEaa9ikobDD5AR3D0eOd%2FqYoEdGePTUrdC2cKNcDt%2F1vnxswtUZsI1yGL1c0np78ar%2Bx1AMyW9OkLTfVr1CqGWuGidz4%2BqPqkBJAsNZQuCJ9yAwEwM%2BV94%2Fvy12NphvgeZeVJArLyp49zyMHr1uw11B6IHkFOEWcD0%2FWrTnfF6606h4iAOH2wkJKzj21vaYz4pXZ0jGBS23WpZ2IIo9Dl%2FfPrcVYjheqduIfg8fdDBBEkPprKdfxl3Gg1BFOq3nzvXT2LqvwFSgTzSMEKSY17414fCBdMMFkRxgZyWARELBe6sczG6hhPPdTkUDuEc5cayynflnan6zIFT45TM0vZD7pfotqttWsgkF6BU2FjCT8onJ6au94F1NjY5A2wytmL7TQsHsNJ5rAAZgkvhdp5yhTyfxaKW3j6MJWy5MAGOqUB1VIhNQodWdqMFrTI%2FA9WShN1p3keb6OqO0mqnQiCtNOOhg2kynGFrbZC7qJFUb0e5ZMv1Rub56mD15ElkLICmrNQ66GlAUoyvzJgj1Bh3PXZ26e3UP94UOkFHgKqf1b606zcnXH%2BRl1xifht3msKkkvYHHHMKVJOkhz%2FCAlQqJEQ2iIDZ%2BVaV32E61hnYqoQe%2BQhcWFI4B6QVTCnHhujdAw%2F22au&X-Amz-Signature=b64534728f5bf5d3de9f5b3bf0677a6590eeaa48ebb8244b48214f2c114f0af7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VM46KUE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU9bq0YG7Gd2CEDDPQASbmzJrcQSYGG%2FWDDsFUc9JGAiEA8xCJRHBQN3CjIceTqeqy7LMMF7h30bvpigSAiK8hytQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCJNOSDBZWeNINQuLircA1KTe4MuK0TCBSu1mtzhhIJ5gxKdk84%2BrCeRieotaCeVWqQJ%2BH0qp%2ByCww%2BvWavote35iizSUPydsqpBDGRnoVOJknliUxLMsUPmLOFsSEBsB3q9ODTKTNAImKihZzFXtGavCtWJ3by1amjKJ9K4saOrm4ohEBG5DhagFMSitIbCmGkYdqbtwEE%2FIttY2enLy4ouBQyAge5U%2BVCMAErNvZVLgDEcEaa9ikobDD5AR3D0eOd%2FqYoEdGePTUrdC2cKNcDt%2F1vnxswtUZsI1yGL1c0np78ar%2Bx1AMyW9OkLTfVr1CqGWuGidz4%2BqPqkBJAsNZQuCJ9yAwEwM%2BV94%2Fvy12NphvgeZeVJArLyp49zyMHr1uw11B6IHkFOEWcD0%2FWrTnfF6606h4iAOH2wkJKzj21vaYz4pXZ0jGBS23WpZ2IIo9Dl%2FfPrcVYjheqduIfg8fdDBBEkPprKdfxl3Gg1BFOq3nzvXT2LqvwFSgTzSMEKSY17414fCBdMMFkRxgZyWARELBe6sczG6hhPPdTkUDuEc5cayynflnan6zIFT45TM0vZD7pfotqttWsgkF6BU2FjCT8onJ6au94F1NjY5A2wytmL7TQsHsNJ5rAAZgkvhdp5yhTyfxaKW3j6MJWy5MAGOqUB1VIhNQodWdqMFrTI%2FA9WShN1p3keb6OqO0mqnQiCtNOOhg2kynGFrbZC7qJFUb0e5ZMv1Rub56mD15ElkLICmrNQ66GlAUoyvzJgj1Bh3PXZ26e3UP94UOkFHgKqf1b606zcnXH%2BRl1xifht3msKkkvYHHHMKVJOkhz%2FCAlQqJEQ2iIDZ%2BVaV32E61hnYqoQe%2BQhcWFI4B6QVTCnHhujdAw%2F22au&X-Amz-Signature=a9fdbd0dad77e6cb44882069fc1f2c365660bc59431d020670e9539544a4c071&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSR7ERF6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkmAXQkyYNYX9GF33evCXmhHAYwLgME5Ut1qI8CPGUIAiBC5ASJSgVy8ISPpE21CFn%2B30RkubrDnfyjxUuA%2FjtKair%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMLj%2BxfFxZBMj9k%2FrCKtwDevjkn%2BgPTUjgiZz9S7rlJKn8kPi2%2BDo%2BlrrEYsHGl%2F%2FwY8bKGWMpm9TfIrNgmVO%2BfM%2B5s28J%2BXJ42YjYfhqwdqBZC5vaFssrZ%2FTFpRD8oyyfIdiE8x9%2B8P22WANDH1OvbceSPT17%2FFij9dwHekK6ZR5jbUgTXAjzaohwA1%2BocYckW9vMGiQlKBuvD43upUdRYkkgImaLpXx46kDmxO4dpakhQ5p8AWZrratjNklaAE2IPe8N2gkr94WTkKLKU%2BE2zBRJWWcFrh5fAdJYhB2wg8yd1sx3XpnCOQuKn9chdSCi9XhHIL%2F9tLxvq0LPLmruDBOe8Qc0OMPct4C0ak5C4ti8PSGLMW3wQVRlrcFn3p2j%2FzsRorwQDgcloprWAN%2Fu2ijjpK6NPCAdkWTigxi2xTfxET1jcYXMMG1C5XesySf5T%2FXEgp5keoDY9%2B0gMS07%2B4N3eybAw22Z01ZIZA0ab4BH2FWRdBizJp68mbK%2B2qbBOFsJJUOqR0RnCRmMezlZufb0IZqYlLXjclVDdqhFHO9%2B%2FfzP50Oz%2F2BTmvybBJ35g5yPwLInYfk30no1RGXzLIfgYB30khmyW7wht%2BiG%2FTkqBCCWgjm56kAAlmPlIrt2PohjF6HgPxU4n%2BUwkLLkwAY6pgHr4TLErdPNNIag1bhHGvrij6dZM%2BKJYWpXy5wKXzH7BJPx7IKrydUeCSHW1IZIk4EXa0iNwdYxG7SxctGGWa6j627zGiEnmFs%2FS%2FqkgxojXKderAmwIaSqSL4lf9wC6j8qpa2tmnIR%2FnuV8kxLf05UOe%2FYgAzZ0IPqmx3tbE2%2BDO9pKGXmryNlJp8v7AZsDGpkMU9uFUHAkElqLyiix3V7P1wJr1P1&X-Amz-Signature=a0068d421d8fecc8f0eba02067913affe5df31f63ba976db72d8d0e7e6e0bb25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUERFBGD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZnRzufpB%2BYu8ILVjRs1wcEPXbKW2wb9XNXS84RWxvmQIhAIdVbA5luodIKJphNFoSV0d%2B%2BwGTcNfNbUSYzvSUAgiaKv8DCDUQABoMNjM3NDIzMTgzODA1IgzaHIps6dTg7K3JyqMq3ANUxzPRQxWNwymb2n6b%2BsnnkFzMUdZP%2FcejeAWd9xm7A70TDiENeul33sz7cKwR0EfuyOmEE8JQCH29XWVTXGkvRe4VcCc9js0nedGS9YpBXhup2II8HKdBn0O4sB6xrXyzNuxzmW6YwwCU3TDiwp6WN2MWLY95dK8nEFjwCnAe3cAD4587U6QQn3cKSBd7p56mmMPLbsjRPAq4lThX2RgzZNZB7A2Nayz2somBMawap5koVj3m8obhBrKYzkXt1kJbh9IjUpspuMDWXwL7Ep%2FJJjMr%2BM7vxvABsc3r9JpUUYkfA9sjy3BZ2wxMAWswFfZG3OPjlzgF7dUf54QklKSKp7wVajg1TAtncsfAxZcNkQeMr0T5t8xu5imBvvzhX8d%2BczAPwwomMX3Lnr221cDbOmndag2%2BqLHq%2Bt6hSD8FRjD4umWpYxN88XPEL6RCRQ1vWcGBye4r26FCl7k5PAEHIPxsEgKBmPssxOuyujKR4tUD%2FSeStGevyU47hHFxDGN9l1N7qUTNaYveU6KyPC6IfYnuOq0oruQOmbh2kwO3jsdQ%2FQo9lQ%2Be39HZAP%2FuvsBrnBYPR7XU6mZejTblUjzCK1WWL1vj4yUMvkj3hlTcSOcPnCgEuMf6%2Bz03hzDcseTABjqkAU%2BOBuTwIrar%2FZKqDOCWOYDemabvI%2B2BbxRCJslyP1%2BuyqYirB%2FCpMJNP%2Fsd9DWvmH9iIKB26rwEispcONCb5OHoJfYZaPytW775Twa8ekMwwttE5OITSZRhQSB17D%2F3pnSMHQbBS5MQBK4RSkiI4%2BfXd2dg37JGKeG1fqefJmycJkQ62cdpSxygW549m9Tm78hn2QUdfnDKLZ27EU4Z9%2F4RIZeY&X-Amz-Signature=f6187f664a4927f449f661a31a4a058abb9104de28fce9322858e33fd52b2869&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VM46KUE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjU9bq0YG7Gd2CEDDPQASbmzJrcQSYGG%2FWDDsFUc9JGAiEA8xCJRHBQN3CjIceTqeqy7LMMF7h30bvpigSAiK8hytQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCJNOSDBZWeNINQuLircA1KTe4MuK0TCBSu1mtzhhIJ5gxKdk84%2BrCeRieotaCeVWqQJ%2BH0qp%2ByCww%2BvWavote35iizSUPydsqpBDGRnoVOJknliUxLMsUPmLOFsSEBsB3q9ODTKTNAImKihZzFXtGavCtWJ3by1amjKJ9K4saOrm4ohEBG5DhagFMSitIbCmGkYdqbtwEE%2FIttY2enLy4ouBQyAge5U%2BVCMAErNvZVLgDEcEaa9ikobDD5AR3D0eOd%2FqYoEdGePTUrdC2cKNcDt%2F1vnxswtUZsI1yGL1c0np78ar%2Bx1AMyW9OkLTfVr1CqGWuGidz4%2BqPqkBJAsNZQuCJ9yAwEwM%2BV94%2Fvy12NphvgeZeVJArLyp49zyMHr1uw11B6IHkFOEWcD0%2FWrTnfF6606h4iAOH2wkJKzj21vaYz4pXZ0jGBS23WpZ2IIo9Dl%2FfPrcVYjheqduIfg8fdDBBEkPprKdfxl3Gg1BFOq3nzvXT2LqvwFSgTzSMEKSY17414fCBdMMFkRxgZyWARELBe6sczG6hhPPdTkUDuEc5cayynflnan6zIFT45TM0vZD7pfotqttWsgkF6BU2FjCT8onJ6au94F1NjY5A2wytmL7TQsHsNJ5rAAZgkvhdp5yhTyfxaKW3j6MJWy5MAGOqUB1VIhNQodWdqMFrTI%2FA9WShN1p3keb6OqO0mqnQiCtNOOhg2kynGFrbZC7qJFUb0e5ZMv1Rub56mD15ElkLICmrNQ66GlAUoyvzJgj1Bh3PXZ26e3UP94UOkFHgKqf1b606zcnXH%2BRl1xifht3msKkkvYHHHMKVJOkhz%2FCAlQqJEQ2iIDZ%2BVaV32E61hnYqoQe%2BQhcWFI4B6QVTCnHhujdAw%2F22au&X-Amz-Signature=5d121875cad4e48aa71f5cc02daacc1feb5962054fcb64955dddb87ba1f38f29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
