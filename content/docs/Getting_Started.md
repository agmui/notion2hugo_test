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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBTB2N2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHS4ZnJrW%2BpCvoYqm8sTzJ%2FwvDxHBs%2FIVYMI7m%2FSzuZhAiALlkYFApDUUE2iv6tnOZo%2BOdTH%2BRFkSaeToh%2FZYg1M9yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMV39tau8wF2jFPr2ZKtwDJ%2FAffFQTPOhrspGKFFe06FbZhDX484k0x3iU5mdFf0VHwbE%2FnE3erabaVqy3xkarRF7F5lu5Y9ft76j%2B1VKybh6UeMv9jkPxF3lsh5BmeQr5NF9uD36Myv29AydLVWd6c3XX9pND3BzNI6jFCZMpPlalOOO2zNMV9yXSZxqgvR45aBnqpt9Or1JnFQjFX6EB5evcGtobgsoniuv%2BMezth8uija9Q%2BWSGfZPpaTGTv1kc%2BFWTqFLGjFf1Bs9eIxftHCQBMn0Z83gXra0ZcjXxNDiVLHjqBWLgF7BBhlQNH40TdELJK9YQVz9tlxAl%2BKwjXtg9jlt7rwIY36Bii2C9UyISz7R58JEhc9xe65S3%2F3GW5xHhS15S1DhC4OiNHqcM%2B3OsZNyzp0je112CFKxvRu5fl9p%2BktmKbdQ%2Bb3yEwFxw9xtCZcFihFENksaKkJmAA60QexPs5CriljaSrTImVo6R%2Fv22F%2BSIEGnOFSg2j1LqCwyYIWPS3R56BA2xLxCdrh4l3DSQF2OLhE%2BEc0TQoud6RLpZz43y0uIqA7UI7ke4iehDH8LDBWMI%2Bn%2BVf93F67VeffxRPEZ7kJSxPF6DxiZYKiUP7OomXm1nHWutkY0%2BKWwxCoBJFGepOCMwxrflwwY6pgE7ZFy2fonDzdJrD7EJbS1s%2BTK6OUHd5qdwzonfpCS4vJjzEIibWyl2tkRSrFscKk83QJeqv%2BUEF9EdlmbgTBG9VDCh25G5KlElTC%2B%2B3YzskCMAgqy4yNo39opBEQgpzvo5oB91YXgtLy1yBXIXTMQ16FFkVj143cVhLCHsPX8%2BpJQ2Lg6jM%2FTO12kI6NlaNbJIo6I2m%2BsaERJUv9wtYzsOyowVb9DK&X-Amz-Signature=6592cd0eaa57f67ecd99a7794ec58f09eda832b98e6a7a36778bb0d8d77070f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBTB2N2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHS4ZnJrW%2BpCvoYqm8sTzJ%2FwvDxHBs%2FIVYMI7m%2FSzuZhAiALlkYFApDUUE2iv6tnOZo%2BOdTH%2BRFkSaeToh%2FZYg1M9yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMV39tau8wF2jFPr2ZKtwDJ%2FAffFQTPOhrspGKFFe06FbZhDX484k0x3iU5mdFf0VHwbE%2FnE3erabaVqy3xkarRF7F5lu5Y9ft76j%2B1VKybh6UeMv9jkPxF3lsh5BmeQr5NF9uD36Myv29AydLVWd6c3XX9pND3BzNI6jFCZMpPlalOOO2zNMV9yXSZxqgvR45aBnqpt9Or1JnFQjFX6EB5evcGtobgsoniuv%2BMezth8uija9Q%2BWSGfZPpaTGTv1kc%2BFWTqFLGjFf1Bs9eIxftHCQBMn0Z83gXra0ZcjXxNDiVLHjqBWLgF7BBhlQNH40TdELJK9YQVz9tlxAl%2BKwjXtg9jlt7rwIY36Bii2C9UyISz7R58JEhc9xe65S3%2F3GW5xHhS15S1DhC4OiNHqcM%2B3OsZNyzp0je112CFKxvRu5fl9p%2BktmKbdQ%2Bb3yEwFxw9xtCZcFihFENksaKkJmAA60QexPs5CriljaSrTImVo6R%2Fv22F%2BSIEGnOFSg2j1LqCwyYIWPS3R56BA2xLxCdrh4l3DSQF2OLhE%2BEc0TQoud6RLpZz43y0uIqA7UI7ke4iehDH8LDBWMI%2Bn%2BVf93F67VeffxRPEZ7kJSxPF6DxiZYKiUP7OomXm1nHWutkY0%2BKWwxCoBJFGepOCMwxrflwwY6pgE7ZFy2fonDzdJrD7EJbS1s%2BTK6OUHd5qdwzonfpCS4vJjzEIibWyl2tkRSrFscKk83QJeqv%2BUEF9EdlmbgTBG9VDCh25G5KlElTC%2B%2B3YzskCMAgqy4yNo39opBEQgpzvo5oB91YXgtLy1yBXIXTMQ16FFkVj143cVhLCHsPX8%2BpJQ2Lg6jM%2FTO12kI6NlaNbJIo6I2m%2BsaERJUv9wtYzsOyowVb9DK&X-Amz-Signature=9148f7353c43264dbe363171bfa522880b744cb602ccf22cf5d6a8e7569b9c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBTB2N2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHS4ZnJrW%2BpCvoYqm8sTzJ%2FwvDxHBs%2FIVYMI7m%2FSzuZhAiALlkYFApDUUE2iv6tnOZo%2BOdTH%2BRFkSaeToh%2FZYg1M9yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMV39tau8wF2jFPr2ZKtwDJ%2FAffFQTPOhrspGKFFe06FbZhDX484k0x3iU5mdFf0VHwbE%2FnE3erabaVqy3xkarRF7F5lu5Y9ft76j%2B1VKybh6UeMv9jkPxF3lsh5BmeQr5NF9uD36Myv29AydLVWd6c3XX9pND3BzNI6jFCZMpPlalOOO2zNMV9yXSZxqgvR45aBnqpt9Or1JnFQjFX6EB5evcGtobgsoniuv%2BMezth8uija9Q%2BWSGfZPpaTGTv1kc%2BFWTqFLGjFf1Bs9eIxftHCQBMn0Z83gXra0ZcjXxNDiVLHjqBWLgF7BBhlQNH40TdELJK9YQVz9tlxAl%2BKwjXtg9jlt7rwIY36Bii2C9UyISz7R58JEhc9xe65S3%2F3GW5xHhS15S1DhC4OiNHqcM%2B3OsZNyzp0je112CFKxvRu5fl9p%2BktmKbdQ%2Bb3yEwFxw9xtCZcFihFENksaKkJmAA60QexPs5CriljaSrTImVo6R%2Fv22F%2BSIEGnOFSg2j1LqCwyYIWPS3R56BA2xLxCdrh4l3DSQF2OLhE%2BEc0TQoud6RLpZz43y0uIqA7UI7ke4iehDH8LDBWMI%2Bn%2BVf93F67VeffxRPEZ7kJSxPF6DxiZYKiUP7OomXm1nHWutkY0%2BKWwxCoBJFGepOCMwxrflwwY6pgE7ZFy2fonDzdJrD7EJbS1s%2BTK6OUHd5qdwzonfpCS4vJjzEIibWyl2tkRSrFscKk83QJeqv%2BUEF9EdlmbgTBG9VDCh25G5KlElTC%2B%2B3YzskCMAgqy4yNo39opBEQgpzvo5oB91YXgtLy1yBXIXTMQ16FFkVj143cVhLCHsPX8%2BpJQ2Lg6jM%2FTO12kI6NlaNbJIo6I2m%2BsaERJUv9wtYzsOyowVb9DK&X-Amz-Signature=d698f55d7be19e73ded56474dc525019c7fef4b3ddc829e185361e198e9dbd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVQ5M35X%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCJac1Gt1P%2BPUOsRHQCXly4j5a8NlsfSkHp5oFk0NIIIAIgYPD6gdrC6xR11hP%2Bt%2F1PRdON6dcSx3xi0tqb13e9Ulsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGWDMJOp8oxpCjnASSrcA55VrNF7ZbE%2Fv%2FksM5HLQXFEXIKGs4ICuKefSq%2Fqbr7cCWu4JBsdH7%2BgsEN7pwPjgyb5RjNKa%2F8EiKkq7DK1CUUZ9PwTsOakSrZ63Yfh3FLk2DpffftySFCdGMD2M9CFARAxYTS4q0O9NEu4ShmEfKmKZsj3TyutVTY4vM38OV1OmLd%2FSB9tfsA6DpAejBEe91poIYOxx878bSl%2FE3%2F3pN53Hmr4psr7RXsrzB09fmpuV7sumEAd0aHFOU5GQ5%2FCZDy%2FE1SNM9LLDAn%2FQm1gNYaGFGVW96O2O3BDMWKbJ8CLW3V8k72wSWYAtULX0qYzKy06bHC9x4WUjX4JCSK6w4LAg%2BdSTQUYH3V4lUfV9VQB55MYiuktrICDlYIpIqYQ1IfJvwm6QwgBD%2BAvO5wt4Gtue624utg30y7B4TtrQa721anWit%2FjAEHQyQryvzh55pJH6MAcoiLehTl8CfjJpmLxU0fqrYaV42Gjdj%2F5v3ISr10CYoDNyXcH8WWo%2BDP273giMJbirjaWe5THm5I7YwSm4qWdpMbmCujAxGB5tNiFJ%2Bao5JYwOAZfGCl0pRtO%2FJ1lFhIq71yoX6SNz848%2FgHNq2%2FnLV8s0NOfYJvIetvznmMDiy1VQ86G1IVZMLq45cMGOqUBkACFM%2F7Dzi5AH4cjbSqidKz5EOSbXdhjcMGmcQSRL0DOGVozmfxDWTZxOtim5fK%2F3XJUeUITKLVGeuSuqh%2FbXBlTFA2BOdnbNWHngegSphkZSgOPatgmYyOpHlnrpZV6uMbedZLh76f%2FG7HKvpRnmq0AcjLh4Y1jBfEGni7gJC950xIHKEfN25wkg1RBGafxfg48f6kyjxrz9m4eAmpFhWJcOGYC&X-Amz-Signature=27887355cba18e683af2bf85f47461c775b44cfd164fc6f452285df3320b1870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKGOQD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD%2FBojBVxDa%2F5rAcTvd56uSMalXd%2Foz%2FXk4WSBpTuaopQIhANWhAbFKsbelg8%2FcD%2FtQjrlYYcFM2H5SR3xyQoYrwteiKv8DCH0QABoMNjM3NDIzMTgzODA1IgyVm1FDWDPSew35i9Mq3AOXoWs7T0b55A%2BRsKNjrwr7EzhiNJ%2F2d88CZseDNigr6U2UVkNhetqZiMG5S6CLMtsP%2B0CjzBK4WlLvpfFdEOHGIkrQX%2FCAzOn7bxwnEhT%2Bc01RefLoDIa%2BeUB6v2AeZoR8rFu3C%2FYGMm6LoGReoaGCU75hOgs4dCJzTxc0Ajeb9uW81G%2FGtJ90IKihz3xECdz2ZFMpXQmjuhltcKjxTP1ZMcjHFvbM7sA4tfmTe6QA7Jau8k%2FBfTlA5sfOVofnHj0fUxikqlCCGzg5y%2F%2BjBFnKGRRWB29Vk5vKSXzcmissLbm%2BZ0xDV7qBj67F3UFEcVYmCltlhjdWpkCiS4E5SPvFS6JzSDaPawp1%2FcCFcjIrgmm80hk3HV%2Bnlie8WEuOPGE%2FTOI6mSQBhrqU9ymd3%2BlZ3lpZe6LzXQHaQRUcB9ll6dVStU5qsYF0DzS%2FJw4XkVooPpwvWKxA0iXDEeuYnRh0AXytxterVj9Jd6X1ripCxLWCv%2FLqZoCsAObrt9A8QG294gj%2Bd3Z%2BB%2BgZqZiHyETuLiFZQhsXSDHBZLDqNYNvig8KmxLE%2FbXs2Se0TCliC3ZEoRDsDnrkbzrIQNRH1rz2vSM%2BZRbENluvX75257%2FcWxp9WTXuImDN0Z1wOTDKt%2BXDBjqkAVhgggZt7Ss%2FFB9bxOmocJvugBUIMU50ErIQpucKPk45UF6NAMk8RSI4cqArXGgk3%2BXamhpgwN0fSb0b9E4TgcteGd%2Fxv9n1RHGiw04fVhLazme7RTamlv0X61YevwyO6zNaXcz%2ForL07bB1qZTap0jErE7BJ7j2hPQW2isedY1Vv78%2BjoU7cNAQY%2F4rZTADsl%2BOyuoTaRBl4jA1ZY0RnECgCl0i&X-Amz-Signature=a3943102b0e383742c40288ef0158c30ac6dc6c90966122dc70d4d154899dfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBTB2N2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHS4ZnJrW%2BpCvoYqm8sTzJ%2FwvDxHBs%2FIVYMI7m%2FSzuZhAiALlkYFApDUUE2iv6tnOZo%2BOdTH%2BRFkSaeToh%2FZYg1M9yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMV39tau8wF2jFPr2ZKtwDJ%2FAffFQTPOhrspGKFFe06FbZhDX484k0x3iU5mdFf0VHwbE%2FnE3erabaVqy3xkarRF7F5lu5Y9ft76j%2B1VKybh6UeMv9jkPxF3lsh5BmeQr5NF9uD36Myv29AydLVWd6c3XX9pND3BzNI6jFCZMpPlalOOO2zNMV9yXSZxqgvR45aBnqpt9Or1JnFQjFX6EB5evcGtobgsoniuv%2BMezth8uija9Q%2BWSGfZPpaTGTv1kc%2BFWTqFLGjFf1Bs9eIxftHCQBMn0Z83gXra0ZcjXxNDiVLHjqBWLgF7BBhlQNH40TdELJK9YQVz9tlxAl%2BKwjXtg9jlt7rwIY36Bii2C9UyISz7R58JEhc9xe65S3%2F3GW5xHhS15S1DhC4OiNHqcM%2B3OsZNyzp0je112CFKxvRu5fl9p%2BktmKbdQ%2Bb3yEwFxw9xtCZcFihFENksaKkJmAA60QexPs5CriljaSrTImVo6R%2Fv22F%2BSIEGnOFSg2j1LqCwyYIWPS3R56BA2xLxCdrh4l3DSQF2OLhE%2BEc0TQoud6RLpZz43y0uIqA7UI7ke4iehDH8LDBWMI%2Bn%2BVf93F67VeffxRPEZ7kJSxPF6DxiZYKiUP7OomXm1nHWutkY0%2BKWwxCoBJFGepOCMwxrflwwY6pgE7ZFy2fonDzdJrD7EJbS1s%2BTK6OUHd5qdwzonfpCS4vJjzEIibWyl2tkRSrFscKk83QJeqv%2BUEF9EdlmbgTBG9VDCh25G5KlElTC%2B%2B3YzskCMAgqy4yNo39opBEQgpzvo5oB91YXgtLy1yBXIXTMQ16FFkVj143cVhLCHsPX8%2BpJQ2Lg6jM%2FTO12kI6NlaNbJIo6I2m%2BsaERJUv9wtYzsOyowVb9DK&X-Amz-Signature=1a89c8ce504de20ff3e87fa14ca387180c03bb939d3a3a89780efdb54b450669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
