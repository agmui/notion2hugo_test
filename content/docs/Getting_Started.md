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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKO7G4M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmeGhqu3pzhPXYJste7febBWsDUQRSyZMK1nXf9E0FwAiA%2BZeQwzO0HtCVM0BjpMw5P%2F2FjFDQQbnxaC4aZiDGVOCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM9bCYAt1yHWa9RbQFKtwDUSAu7eWP7fB1iYV3iAc4lgvyP5cGzL%2FIyyEGUnV%2FlZIRSU83ijCgcg1oVqDrr9yxHqxYqjaLUFKObD92tqd1ZtK4S0Dm80msjiDePe58eVhQ3338Xy1lNPsQ%2BNVglZ8lgFzq1KZNCjEjr2oQ6nU0HmS2oHJDfj39QDHRGTPI0wpp7ncaxYcscJitUVCmTwbJWmDu3WfxXBtxRyNk2lNKONJCeQFaQFM1BHckLUJEjGgoYmnIgGln6jOoM%2B08YkhJhST3N3YgwZyXG9v%2BilZCnahvs6pV9brUDNycfkI09f9A9qVbNUyiy8E2vmaBhtJqEie2YSeX7TL4XeP3oorw8bd6N0aaMakZF%2FkcAtxT7j%2Byw4sfgIPRx5usU5KYi6jBsa0jtYNLLI2JaFWEqJOqgVK1jaGm%2B6jNDOfS7LfTuuCK3%2BhGILG4WtON9M2LpcMoa2t7nCWXlFoh9mtWZGvIaR3LUawYY02eCMCRGKsn1hqRB98pEuAiWSwVgxmwz%2BMzHLC2w2UOgfQfDyOrwii%2BIKTAK1dGt5DXgznKnKZlMXKPqvG%2BS1d%2FuHvR4BVlv7SCKXmS%2FJV%2BE5XwKIjG3QKdgYuIOzFGegtiDhIzoLhoa0gLtoeCQRYdeOwbTyow5%2BeTvwY6pgGbNjtI5oYZCGf%2BeWs3gjjunKglXsuDpNCtslplwRLld7M91J9m2eqF%2F1AjdAjo7OgS7Squi6dAFVYETXCf1PgJZf4m%2FsulChwIY%2ByDIwKDTOpXZonpJQLuYt1wxV4C25Wxxkjv3n4Qf1DZsucxQUV%2FCN0SXta1Nbj68jDMDtP1wV6eFsCR8a79uSf1zXtq6iCCtihnQ6vcJhCBRZwgRpOEArDgTxbw&X-Amz-Signature=e280f80ce3ed990130e1498d7139fdf00547fd23808040ba71b55fd7da957b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKO7G4M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmeGhqu3pzhPXYJste7febBWsDUQRSyZMK1nXf9E0FwAiA%2BZeQwzO0HtCVM0BjpMw5P%2F2FjFDQQbnxaC4aZiDGVOCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM9bCYAt1yHWa9RbQFKtwDUSAu7eWP7fB1iYV3iAc4lgvyP5cGzL%2FIyyEGUnV%2FlZIRSU83ijCgcg1oVqDrr9yxHqxYqjaLUFKObD92tqd1ZtK4S0Dm80msjiDePe58eVhQ3338Xy1lNPsQ%2BNVglZ8lgFzq1KZNCjEjr2oQ6nU0HmS2oHJDfj39QDHRGTPI0wpp7ncaxYcscJitUVCmTwbJWmDu3WfxXBtxRyNk2lNKONJCeQFaQFM1BHckLUJEjGgoYmnIgGln6jOoM%2B08YkhJhST3N3YgwZyXG9v%2BilZCnahvs6pV9brUDNycfkI09f9A9qVbNUyiy8E2vmaBhtJqEie2YSeX7TL4XeP3oorw8bd6N0aaMakZF%2FkcAtxT7j%2Byw4sfgIPRx5usU5KYi6jBsa0jtYNLLI2JaFWEqJOqgVK1jaGm%2B6jNDOfS7LfTuuCK3%2BhGILG4WtON9M2LpcMoa2t7nCWXlFoh9mtWZGvIaR3LUawYY02eCMCRGKsn1hqRB98pEuAiWSwVgxmwz%2BMzHLC2w2UOgfQfDyOrwii%2BIKTAK1dGt5DXgznKnKZlMXKPqvG%2BS1d%2FuHvR4BVlv7SCKXmS%2FJV%2BE5XwKIjG3QKdgYuIOzFGegtiDhIzoLhoa0gLtoeCQRYdeOwbTyow5%2BeTvwY6pgGbNjtI5oYZCGf%2BeWs3gjjunKglXsuDpNCtslplwRLld7M91J9m2eqF%2F1AjdAjo7OgS7Squi6dAFVYETXCf1PgJZf4m%2FsulChwIY%2ByDIwKDTOpXZonpJQLuYt1wxV4C25Wxxkjv3n4Qf1DZsucxQUV%2FCN0SXta1Nbj68jDMDtP1wV6eFsCR8a79uSf1zXtq6iCCtihnQ6vcJhCBRZwgRpOEArDgTxbw&X-Amz-Signature=a18e8c905b3b36df124615975baecee1e61744977b156ab326eea5a2701b9fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKBOJZ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXCUKTUa%2BTaFraM0mtTZdHEmGbN3sh2EmenMyMgI3DwIga590Imylw7gZ6l2uOnKHQZa9ee0%2FF0rn6VHfSHWy64oq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIQD%2FDo74m%2B6NnnrgircA3HMzRZLI5KHC0NNxAJq860lU4LqjZ6s7xOXQMX0fcuQHkIbJB09GuOHPRshvV%2BWYTtCo7edGhesynFkRQsVPLCiltR67KRIanmp%2B4m1Rfi3306YqQ4ql712SGQJ7ogMjVjNtrn2H59bhlQvIK1dHcUOggEc%2FN2zwjZp7zK200juYubc%2B5G3pVVFhpbNT6sSo7Q%2BlQTaI8PFsjxLY4sKulGRlPN7WRhiMlkVGotPRG8mY2ka4LwWfIOch%2FmQI4rSe0PdUEU24pOJJq8Oc3XwlR0VNa%2FtOuWinMgyk4ztik%2FAgp0o%2FrSUpiYrHoUjqIESurSnHeiyK6gcuWaMYiNrExSyHMX3q43IYY7JXV1cL8HG6sZ3z8R3fsQmHFPgdkP5p8%2FKItqYPqpQJZ78RoxG8H2YmlDSUc7LmGjH10OgrIPJclziIoOMQQpVrIaYqpJ3t9gqKjTpIlSEXBTK5EgC%2FYwIbWYjIeXE4Iy%2FudUZaps5ttAUr9J4lCMzGqz4FshGGH70wNSqZhiy1ivAp1cB05u4Op3P99MwkGPgsJTuhcz%2BEX6xXAYRs0bryfEj7cRJmwZ%2BxDQxNmAK5FWv4vgT76FcpaVyZgeyoB7P2weBSjhQyuTx%2BKr8w%2FSoIGGrMJTok78GOqUB1Bl5naKSQb9tt5I8ciPfHcA%2FpsC%2BbrM3lzLXu8JAGd7lXGHhXGT5VLRtjElJw95zKvMMMToVPUcH%2Fk32fKVaxviJR2LnRb8FjVYRCIziXA3cSdc3zpUlJdF02cnFhamYyMF65%2B%2BaUf2uCFUgi%2F8k9ovClyiAyovsYlkCWbqotAbsht6zCDt6wMC9Iu86HpH23DioxplRb6fafotl%2FnnQDJDnCpXh&X-Amz-Signature=dd3b0c2fa24783651655e0bb603568997e61774cc5dfa7f7bc97fafd118d5efc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJVMBYR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmhgUZ6%2FuU0sn%2BSc7SH49KDsoj7JSK%2Fuo4iIjFaboVhAiBjGEIxAHkkHtE9wmpIAcQ41WiDlo3l2E4tgdlwoDolnir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMswec26zvMycfR5bFKtwD%2BbYaeG9Wg7IXKWRduM0D2pOMAgyziucwWjfhrURM6ENYLnFFczFGKvYls%2FeYzzBrXVcrjZniNz9MlLkXVWMc1OPt4I0jHSBav8PNiKfw7CpHcD2HZfaSuf8H%2BQCcLQ5A%2FE5ycAdpeBuGukhxINDiofdilswLya%2BreD1OiOCtPADYPV4Ba5uhfs6SwMR5Dm1JYXTm1tYo7lAid14KpCdY7%2FoYFWrA3j29hCsbqQYijBROpucMVlIWTKO4%2Fswp%2FQICJjU%2FykJ1Tdza8c1g0A%2BXYnJ1p4Bqyyg1uf4I06hgbBTajEyVJzL1%2FglSrX9oW3s0qq0ZdVK1GHC8q4xqv90pRZAvD9kfQ3Kip%2FBx9sqbwmgnc2FY8ecmnpdfS0OrNNniyneQjYgzU2dnEFzr2D6cagqAaMQZZI0jtfZbpyO1FExfD%2BxU%2B77vvXePedGlf9DyOYR6Y4sJJ36HNm59hlLllruK4hRh1bwnOZ0O43UDxBc7y0FmKeksHf9emHnk1RWmRGQxOLbDdJDTHWRCF56rwsJ9ybu6nK6BS8K1katcEzHtdH0eC0w7siryLqFp69FyHGbtPq5PxTM2XJ1bgp3%2Bh2%2BQVKxOefe%2FYaZpvFhOLNQ4AwlyEM3aYfrFPOMw3eiTvwY6pgFAxfGHS6owiSxBkBoSEBj1H%2BidR9ypMlYoGebi7zw4hZY7NswePRGYQLOtVwSHqK8gmGrl4XrbqtY0OG5L5CfPRH%2FQOgJ2fIf7HGlumAJ38DKiIY7yDTXrnXc2Q%2BYODwv4WocePiJ1yJd4ojTu48Ec9N8wFIX20KQtwsidjr9hnTHAciJ7hHbt3YUjbtzJXwIP5a4GI8niWuEMC%2FNz35iZVU6ZN3eG&X-Amz-Signature=e37d4d9f1056c81ef674682e7f966b6de0bd3ee9586c036f7909bee18c51c8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKO7G4M%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmeGhqu3pzhPXYJste7febBWsDUQRSyZMK1nXf9E0FwAiA%2BZeQwzO0HtCVM0BjpMw5P%2F2FjFDQQbnxaC4aZiDGVOCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM9bCYAt1yHWa9RbQFKtwDUSAu7eWP7fB1iYV3iAc4lgvyP5cGzL%2FIyyEGUnV%2FlZIRSU83ijCgcg1oVqDrr9yxHqxYqjaLUFKObD92tqd1ZtK4S0Dm80msjiDePe58eVhQ3338Xy1lNPsQ%2BNVglZ8lgFzq1KZNCjEjr2oQ6nU0HmS2oHJDfj39QDHRGTPI0wpp7ncaxYcscJitUVCmTwbJWmDu3WfxXBtxRyNk2lNKONJCeQFaQFM1BHckLUJEjGgoYmnIgGln6jOoM%2B08YkhJhST3N3YgwZyXG9v%2BilZCnahvs6pV9brUDNycfkI09f9A9qVbNUyiy8E2vmaBhtJqEie2YSeX7TL4XeP3oorw8bd6N0aaMakZF%2FkcAtxT7j%2Byw4sfgIPRx5usU5KYi6jBsa0jtYNLLI2JaFWEqJOqgVK1jaGm%2B6jNDOfS7LfTuuCK3%2BhGILG4WtON9M2LpcMoa2t7nCWXlFoh9mtWZGvIaR3LUawYY02eCMCRGKsn1hqRB98pEuAiWSwVgxmwz%2BMzHLC2w2UOgfQfDyOrwii%2BIKTAK1dGt5DXgznKnKZlMXKPqvG%2BS1d%2FuHvR4BVlv7SCKXmS%2FJV%2BE5XwKIjG3QKdgYuIOzFGegtiDhIzoLhoa0gLtoeCQRYdeOwbTyow5%2BeTvwY6pgGbNjtI5oYZCGf%2BeWs3gjjunKglXsuDpNCtslplwRLld7M91J9m2eqF%2F1AjdAjo7OgS7Squi6dAFVYETXCf1PgJZf4m%2FsulChwIY%2ByDIwKDTOpXZonpJQLuYt1wxV4C25Wxxkjv3n4Qf1DZsucxQUV%2FCN0SXta1Nbj68jDMDtP1wV6eFsCR8a79uSf1zXtq6iCCtihnQ6vcJhCBRZwgRpOEArDgTxbw&X-Amz-Signature=f09b0beb1c0a1d8678a124ad4b408a7e790f61124c2e157508e3df37a26a37b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
