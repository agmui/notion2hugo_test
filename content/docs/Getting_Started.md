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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CN2AD4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4n3iYrc%2FbvvKDPnfwqvZRqAI7%2BgevxBx1ZgtMYiKvJAIgb5nM1B4jfnF%2F9BAn9pjpj8hTYB2WhMMJLP2A2tKGhi4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCAy%2Fii5Lg4axav7XCrcA7JOcrocQuKbb54fi3c1BPa02kCOsTqR%2FK65OnUCrvtcuoKzaNIqv6eAJj5aNHqjIXVVgNc758w2tHtNGMAN7M53OjjHc1t9pipvEC%2FSNIYRgdG5BoIeQIzmKSFg5UGWWpBj1O7ioggHnnIyouauEgLKE4Ekk3huz0GwxPPOxG8hBiTlecJAikvm8OB9nai6Hm9dAlmqNIseHwXk6wONIg7cfodj0NFlS5YvzKihvaQkIx9iKEs3sXPwRY5n%2F9peOBMofBroa3GIvnX2UyhgNpBmAhKxJcYUwB%2Ffmixl8QHyRpuMuSTIg3Sasvv52lmOA7VkyZPCy2pR%2Fxwwc0RwBFtBSjcKJiQv3%2B%2BPY0mtyBt%2BtX3Iq%2Fk5h2F2u2vQpxkpXSymPVGHmNq4t5NLsHK6COH%2F09hmZvkgB6jGkhw5h81ARUzxNzEhq3N1CMqvkwkv%2BMQjx%2FOqw6SzsmX72xEJZBbJ0Uos8n5x%2BWLRY5R17G2LxbDmu%2BrE0E%2FN3OMsk%2Fx0h9i80axAlf%2BCbw6DvGptM%2BUuejyai8URMT8Ux4rhr4v0nsc5%2FIgYEO0xT3o7JmQ88k4SgPswh1rZyomm7IJjs6HhP31jEY%2F7uBkDeiKKLpvZjqjl4SNVzS3EJsKxMO6y7L0GOqUBoD7PeXv442DfVKuwpSLNcTaqmwxboXCnkP59nA5gwgkrzE3FAQzG%2FG1egrbr0OpAJWmxBKda4Vtuv3EQclLUylNFy6pVpeGe2%2Fj67JyyD6lplnRqrjt%2FGSNUlqvQPWhhOkM2voFlu2WT5NucGhZS1m9FKs7KJcxTH6xKBB6pBVzEwoEQZ7zC30yPMMuuXmmqfnFW4RJsTRKJ7PZTMisLzACghXxj&X-Amz-Signature=0f4038308058c5cad443d237faaf546b5202807c7f5f8b713c5ac48ab3ff5930&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CN2AD4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4n3iYrc%2FbvvKDPnfwqvZRqAI7%2BgevxBx1ZgtMYiKvJAIgb5nM1B4jfnF%2F9BAn9pjpj8hTYB2WhMMJLP2A2tKGhi4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCAy%2Fii5Lg4axav7XCrcA7JOcrocQuKbb54fi3c1BPa02kCOsTqR%2FK65OnUCrvtcuoKzaNIqv6eAJj5aNHqjIXVVgNc758w2tHtNGMAN7M53OjjHc1t9pipvEC%2FSNIYRgdG5BoIeQIzmKSFg5UGWWpBj1O7ioggHnnIyouauEgLKE4Ekk3huz0GwxPPOxG8hBiTlecJAikvm8OB9nai6Hm9dAlmqNIseHwXk6wONIg7cfodj0NFlS5YvzKihvaQkIx9iKEs3sXPwRY5n%2F9peOBMofBroa3GIvnX2UyhgNpBmAhKxJcYUwB%2Ffmixl8QHyRpuMuSTIg3Sasvv52lmOA7VkyZPCy2pR%2Fxwwc0RwBFtBSjcKJiQv3%2B%2BPY0mtyBt%2BtX3Iq%2Fk5h2F2u2vQpxkpXSymPVGHmNq4t5NLsHK6COH%2F09hmZvkgB6jGkhw5h81ARUzxNzEhq3N1CMqvkwkv%2BMQjx%2FOqw6SzsmX72xEJZBbJ0Uos8n5x%2BWLRY5R17G2LxbDmu%2BrE0E%2FN3OMsk%2Fx0h9i80axAlf%2BCbw6DvGptM%2BUuejyai8URMT8Ux4rhr4v0nsc5%2FIgYEO0xT3o7JmQ88k4SgPswh1rZyomm7IJjs6HhP31jEY%2F7uBkDeiKKLpvZjqjl4SNVzS3EJsKxMO6y7L0GOqUBoD7PeXv442DfVKuwpSLNcTaqmwxboXCnkP59nA5gwgkrzE3FAQzG%2FG1egrbr0OpAJWmxBKda4Vtuv3EQclLUylNFy6pVpeGe2%2Fj67JyyD6lplnRqrjt%2FGSNUlqvQPWhhOkM2voFlu2WT5NucGhZS1m9FKs7KJcxTH6xKBB6pBVzEwoEQZ7zC30yPMMuuXmmqfnFW4RJsTRKJ7PZTMisLzACghXxj&X-Amz-Signature=0ac48e925e1db81ae9f9ea6ca2f83dfe1c0690188722f44e4734dab35934cf61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W22WSEJS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDWwsVeqJ9gkA%2B2Jmjgw3aR4l1dbGPFVkjtFXb6ADnHAIhAPxSWYoXCVHM8GJ4NATvvlEqQq80oTah3buragnYt9vFKv8DCBMQABoMNjM3NDIzMTgzODA1IgxUFQrVcylZRq1DMCcq3ANhq1cLkDi7w7nZGI2%2FMvZDwH6REInc%2Fct1PNJcFI6BVpj21hH5gPeNGlIUtP6UK0%2FofIfksI7QropfLo2k7eO8Nhr9QJQk%2BybAkElVcoXKKSrwk0g1ncyNg6YeyT6vRj0iLD9QnL9c8WIKbP34FI423kTR2HCCDtwuQ8ddgy368kqV5H0bipde9VE02MR7Fs5nMtaJRvN2xg9qenBjnDmueDTdB51wvx5Qr3202WaNnVYQGDDoT4116fgSeYRK0zlZ9eP%2BuwC1SRdyLsHO9tcQBBXjl%2B7ASm7anhgVq%2FYI1eqGHCTbZ2u%2Bw6RG4FcZqXsUKAGm9joLfR2LWcpjzGZfnfVrhEg2aH1AXk2gYbivipNcdUUTvOv3S5tnAcSH%2B5%2B5SEkMkyjmNKO2sfJmhrj%2BR%2FstHHETx4ZJu8MriwjL5U%2FZhKgSEaEoV9zsvaMagh7z0JnGPDqvkcOwLGBlpPoVWUpqRsiGcTqqNJoq8Rqf%2B2Un0rxcfOzzoYRDGj4Kkjp4pNu%2FHf%2BP5x9GQQ%2FwFaoMQqbOqVxwBCLISmL71lixrEG0v5BdoSIdhleQfBKj1U1V31XILydor25ARqm9TCbPDyLCZ7%2B5GOkj9jDQu%2FbU8sVUe8zwBX0W7oJYxjDy6uu9BjqkAVsGawzMCs4RICd4qBTRaa8HPWovKUGMOuGdP5kBdYL3sI5gGXyj%2BxmWPP5M%2FufVy2%2BEdoFW%2B2u%2BhW4yc8jlKJs7dM1udoOqp8YCY6sHVLYflggWjryAaMD%2F68IMAJSCR63B6RbF6Z3v7N2jW6EQRPugkbmAo37v1%2Bmwc8mxV5cRRbFMlxjCIvKTM1V7lpNQlghXkJNhb4mEETvqLd16L%2Fj4%2BPs1&X-Amz-Signature=19edfbd1b1c9cb8710578355fd23226b9849b7684e7fb1f502d295527b1c3621&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDPJWC2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD57eCGFCisnT8u8b8NPz79rdzoXchODyV6yqHAMEs2aAIhAK6YkPwr0TqSZIDZcLv1Wre%2FGd6M0kvBVDwgFz7G9c1AKv8DCBMQABoMNjM3NDIzMTgzODA1Igy%2BMK4s4uzyK9bt8fMq3AMjE4pWfGNg2EBMdh5P8pcwfgDkv%2ByOp4e29gCszZH9bAC%2BE5hqLCyo9UG3sHOoO6cFj8rFrKFoivpLqzmf8D%2F9PPwDo4Q8FJqHbMAdluA4eyL%2FSoVOxDW%2BBjV8jYv3Nnn%2FKdXmsgHbu7c1C5CVP6%2Bm5Alcwf4FS%2FyFBF495apjBGxWsjwnzB0aZZG4WRLlu4WQ1tyZfsIXAvk4nWTC2DeZIsmuYNsdLJnMxtSY3gJX8SxlloK7kK3kzDqCDLvyCCqhJ8QdrRb9Ld1hDx1R49fjxm%2B44FhvUjfDFoY9hGltigNPVtUi34cQIvd80ld8X0edPXW0p7XqfGx7TT2CYJlRs%2Bo%2F0GCkK01kXL9kFSvBIVJgMbI9ze901KyGJaiozK6nSQsCGh40tvReLg68ryJstZGTqben%2BhfqXibI0ZziyQMvIctj%2FN2fdt7jT9zKjEmnlYPGn4d7%2FMraF3bdcXduJOtebWwir6h7blh7DygcTf8NG2Sbx%2FBVDbhkF7v1Wg1Pz38gL20MT3w5LdeisYBx83bhvzzUQqYGACc0dKQfmFV%2ByV2tUOvAwcI0RQjJOvm4tAE%2BYk2%2BcpWjhYmwGqaGz31xzaed%2BtYwyjvwZ12wFLK%2BFEOfnLuTaY6MEjC24eu9BjqkAaMy%2F5%2B5ZKEdXKxkhyX32FSfFx5%2B7iTajl4BnAa7WLDdIORMZfcY9pKfOygw3oM6U%2FWqdWHfEe0SAlGPxL6qHlXqBgCg8aTRHs58lTmzvE7HTx48oPFTzx0WI9bl5DrYU6piMy%2F0CH4gp3hsdyUtiQsfCDuZTT%2BOLYdGwyxJ8RR5zZB79oH2Ns6lkk0gV5DYhwH%2BRbr9OCXDveEd9BC8pdy%2BZ013&X-Amz-Signature=01312ee842f0d6bdcf06ff011d5495197cb708585913f064e4c07fd3515f7c39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CN2AD4%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4n3iYrc%2FbvvKDPnfwqvZRqAI7%2BgevxBx1ZgtMYiKvJAIgb5nM1B4jfnF%2F9BAn9pjpj8hTYB2WhMMJLP2A2tKGhi4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCAy%2Fii5Lg4axav7XCrcA7JOcrocQuKbb54fi3c1BPa02kCOsTqR%2FK65OnUCrvtcuoKzaNIqv6eAJj5aNHqjIXVVgNc758w2tHtNGMAN7M53OjjHc1t9pipvEC%2FSNIYRgdG5BoIeQIzmKSFg5UGWWpBj1O7ioggHnnIyouauEgLKE4Ekk3huz0GwxPPOxG8hBiTlecJAikvm8OB9nai6Hm9dAlmqNIseHwXk6wONIg7cfodj0NFlS5YvzKihvaQkIx9iKEs3sXPwRY5n%2F9peOBMofBroa3GIvnX2UyhgNpBmAhKxJcYUwB%2Ffmixl8QHyRpuMuSTIg3Sasvv52lmOA7VkyZPCy2pR%2Fxwwc0RwBFtBSjcKJiQv3%2B%2BPY0mtyBt%2BtX3Iq%2Fk5h2F2u2vQpxkpXSymPVGHmNq4t5NLsHK6COH%2F09hmZvkgB6jGkhw5h81ARUzxNzEhq3N1CMqvkwkv%2BMQjx%2FOqw6SzsmX72xEJZBbJ0Uos8n5x%2BWLRY5R17G2LxbDmu%2BrE0E%2FN3OMsk%2Fx0h9i80axAlf%2BCbw6DvGptM%2BUuejyai8URMT8Ux4rhr4v0nsc5%2FIgYEO0xT3o7JmQ88k4SgPswh1rZyomm7IJjs6HhP31jEY%2F7uBkDeiKKLpvZjqjl4SNVzS3EJsKxMO6y7L0GOqUBoD7PeXv442DfVKuwpSLNcTaqmwxboXCnkP59nA5gwgkrzE3FAQzG%2FG1egrbr0OpAJWmxBKda4Vtuv3EQclLUylNFy6pVpeGe2%2Fj67JyyD6lplnRqrjt%2FGSNUlqvQPWhhOkM2voFlu2WT5NucGhZS1m9FKs7KJcxTH6xKBB6pBVzEwoEQZ7zC30yPMMuuXmmqfnFW4RJsTRKJ7PZTMisLzACghXxj&X-Amz-Signature=aacf4d3ee753154a49d79e0feae12a1898121ff346100986be77d9a7807ffdf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
