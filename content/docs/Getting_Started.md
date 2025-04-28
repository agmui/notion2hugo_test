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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDTD6JP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FrRs6HJQUUxZZc5V%2Fq72NcxGC%2FH7WPnrihRj9URv9HgIgMloJ1xBAEb8q5t1azzXRSwWE6M06vge1ya6Aw%2BKgBusq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEf%2F79Y%2BLs0IxyZboSrcA%2Fs6G1w2AlOmmOm1I3HYH8BYDzWcRhQDdT6snE8%2B7K0K6dqPhnibr0ZmryblwvzF3dX4nIrmyZm%2FPkiBafqCbDgmHeCGTwXY5gQjr37ND3Bw8j7nxAYFt%2F0q%2BE2U%2BRpZmAwjX3Fh1taJ6HYhxclZVB7LNaBpljHmQJ9msRdZCf3gWc42AIWUn636MtgZziUnUB6iVvZ20u9iYn%2FjzlUnWmvlk3OlG%2B%2B%2Bm1qREthJo5pmkOcONzh33GM0VprhlVydMkLlB8ZDsu0CQG0wYYANSAU0BkPc8olxGG2sK51mXW2ukr2jfsvJVlmcmbyHI8tzdtatAJRW5p%2FuRW%2BkVdOETt7ciAorLx8EAQQOEWNeTjAB52aHuJJ8x569dxQe6wLtVaTZ88xrby9iVAH%2FEqNi%2B2oDoMWSA6tDvmaKJbm3kuIRSYM1rN0ScpmPSEcIYgeGn7paHDOSeJbD6Q6OxgBAZ4LW8%2Ba8shcHjcydAzHGO4g4lhSmX0b6dYZXaaJhsj0YF1%2F1ndwh1AEQ0jwPv9SBahpoydkNWlz0jCBVCIlkbzxS7md8WnUf1qjnW2EWPxm7Z8EgbHLSmGSx6mYml0%2BDk7O8LlmqSHkgS4S17vxr1hYoXZl3hyimPavJhVHXMKmUvMAGOqUB8JZFTJ6VEWiqCyALWuO6GNkry%2BohvwZCiQJOuu4aG0ok74hzXmLccmIbBKdvVJ9eQh%2BFZg3X3%2FXNelSml8K6pYwheXkB0CY5yDX%2F9rCqToJb6tLlXq3KRNPY7djNj1g2SNmvIj9gV3Fk3oAGWJluB0foMK0ORFoBQABXePNi9dPllrde7T%2B7vRvjvxiU7EKzzWtDd6Aapil52y7CnkZEWMeuC4ip&X-Amz-Signature=74705eb9e3667fad924c33e0a7c3e46ba563363d320194bb8c424707416037c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDTD6JP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FrRs6HJQUUxZZc5V%2Fq72NcxGC%2FH7WPnrihRj9URv9HgIgMloJ1xBAEb8q5t1azzXRSwWE6M06vge1ya6Aw%2BKgBusq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEf%2F79Y%2BLs0IxyZboSrcA%2Fs6G1w2AlOmmOm1I3HYH8BYDzWcRhQDdT6snE8%2B7K0K6dqPhnibr0ZmryblwvzF3dX4nIrmyZm%2FPkiBafqCbDgmHeCGTwXY5gQjr37ND3Bw8j7nxAYFt%2F0q%2BE2U%2BRpZmAwjX3Fh1taJ6HYhxclZVB7LNaBpljHmQJ9msRdZCf3gWc42AIWUn636MtgZziUnUB6iVvZ20u9iYn%2FjzlUnWmvlk3OlG%2B%2B%2Bm1qREthJo5pmkOcONzh33GM0VprhlVydMkLlB8ZDsu0CQG0wYYANSAU0BkPc8olxGG2sK51mXW2ukr2jfsvJVlmcmbyHI8tzdtatAJRW5p%2FuRW%2BkVdOETt7ciAorLx8EAQQOEWNeTjAB52aHuJJ8x569dxQe6wLtVaTZ88xrby9iVAH%2FEqNi%2B2oDoMWSA6tDvmaKJbm3kuIRSYM1rN0ScpmPSEcIYgeGn7paHDOSeJbD6Q6OxgBAZ4LW8%2Ba8shcHjcydAzHGO4g4lhSmX0b6dYZXaaJhsj0YF1%2F1ndwh1AEQ0jwPv9SBahpoydkNWlz0jCBVCIlkbzxS7md8WnUf1qjnW2EWPxm7Z8EgbHLSmGSx6mYml0%2BDk7O8LlmqSHkgS4S17vxr1hYoXZl3hyimPavJhVHXMKmUvMAGOqUB8JZFTJ6VEWiqCyALWuO6GNkry%2BohvwZCiQJOuu4aG0ok74hzXmLccmIbBKdvVJ9eQh%2BFZg3X3%2FXNelSml8K6pYwheXkB0CY5yDX%2F9rCqToJb6tLlXq3KRNPY7djNj1g2SNmvIj9gV3Fk3oAGWJluB0foMK0ORFoBQABXePNi9dPllrde7T%2B7vRvjvxiU7EKzzWtDd6Aapil52y7CnkZEWMeuC4ip&X-Amz-Signature=b8545ef9a981701df91761fcb3032aa318d5ffd1161a6d28a81e5e5a860636e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3AF4PN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdI54r6vR%2B4sLNkMQqpmgp5wxgOiIW0puYy6u%2BSXAVlAiEAqc3AFY2njTbqNHMwy8BS2G02kF8xFHxKANX6Cn5KjrUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKN0mt4h3hk8%2BrKy7ircAwzVqz3xJUOUwZgqfHWdDGHxDISAqTW3DWIzhNqbzcLNswqj%2BfzniaqvbZM0RJbIhiIzNhzpsKSfY2gBPlZKSKaw5sl6pLg9srevePVZ5vPsspnXrgWSwH1vMeWu37QdaQ1ggfe3kraBR3ISBxkDbVxP9RgO2SwN21yECKE%2BsEZHV58mGJxM5JIhaIB3pdk3krvGWJftUuvH2gtgiTVUvB5z6DDpuE2zsVt0CtaL9qxv6%2FkwvdtS4b7e%2BhghnfFZlt%2FA0TeVZ7%2Flfoo%2BeMFjEueOuv%2FOxiSXog5qhw%2BV4EmRSMi4E3DUy4j6yogwoId%2BLx8SW9AFfVA8b5c74Z1znGim4psntEUi7BY5YFQJKnUC47PInX5AzbulfPEK0zNgxA3vzW6w1ODksG5mh6DceIXF9e06wXjILaaegPtLz08WTvCqwscdnWa3bc4pgVKuBbHyb1f9LtaDH57CB0q3YL6D6%2BU9CVp%2FnQYN7e0Wq1Cunl3PcxqSDCUyo8hKGNWeq%2BI3ZeRKnxavzGSE14tE7OCp3b1AiNjMyHJvju9vZdKCOZjUGiFIjclkciqFpEmrU9aUZEZ7Ao7naMURFPfXD4GTCEdqH4ySrr7buqCSb1QxH56N%2BDxhz5E1CkMnMKKUvMAGOqUBp7VDBzDzCRiX6%2BAeJwaFqgYoYKiSPohGMuLIKrSuJLVlng4aTecmSjK9n0VM8dkeSpu6RsD7%2BGKpVma0d3d2V6NoUGCRQ1gS7WLdZBFHGR6QIlAJ%2Blj10ROsaHe8bjRyYtR0tNCFbYi6VkdHJJ%2Ffejg4kDeVDS4zMqd1QD4ScaacQtQ1Dp7Z16uSQ5%2BjVUBKSz1ehLWv4AvvFWAPRufLzbgPAZCA&X-Amz-Signature=a53171aaa8e79656c4b51b4501d43fd8799da60b6ce78300deebdafc9992c0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRRJ22F%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBEDvhbvhW2H0EUhN0pGY9nDeRRmOH2g3Y8BIJmwecNAiEA6CymJdHOV4vnED205ZCmLIi4YTqJDF1ldobjSyezOWEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOjMBCkIl%2FLmtTO2SircAx9bWZ05T9k19TYL2jvf41JBae0I1JFI3e%2BQvxYT77DtJQpTYOb2%2BqnYJY5S6jkDojxsF3P39XyzUv9QoF8uaaPORfL6xCTGlVIGOcu3PDaJDBCT7VISbdbQIk8QRheuzUTDXw9o2EXlmsZ%2F4%2BQJLttNETfJSegXW6cS7wsBc45bkaHU1Gs6v1PM5ZSp6CkI8oznQG2PpectXpvdP4r36XSWplLPlU7VZV6STE9lJakUqeALnRLcQSzVBFgzKT9o83K9SQ4mElbEzY2tLkAls3mepu8xHUxitHHwHEJ3KQWfxowLm4JK3sZbk%2BrnbeKMJGMTokD6AY8x3om95bMlzOejHTHAtSvOpFRarGc1MQ4Bbgz%2B2F1RkWDRw0%2B%2BxJF8PHdTb9RpytgyR6CSpVVUCh791tiHZJzPX8Jvf1olX9BAS%2BijaTAHPfdBJQrifqMyCEaUy3idnKWdLSrryfVvF6xGOXnkvikPFobRZWPy0SwB1OvXSPbeDQozrSeHSPyrC6ki36MADTouc3fQA%2F%2FP8IEEI9tR4V3Ud2XQwAq8aisrwSY0dblKrG9Huvt1beDL%2BJG4sJRyiN7CBK7y2YeJj0W7rcCMwqy8PS8g%2BcU6mrJskBqa3IaRDBcnbl5MMP2UvMAGOqUBXT4e2d849G6XwiErHWN1ESsfJ%2FcIZ1XY92vtYaMBhfmwGZys2n%2FlC7Li5qzMBz2LIkoaRxXqW02YP6WzVxnvRISAp9ZV48H2otSzsrjMQJkGOrRJMmE2l2IQhmMRtXTHs%2FtkvQfXC05ye9lLBM2svIxf9LtCdF8lsvX6ALL0PbJfgZpduoL5isIpz3WvrmmGYpmzbO6TiJY%2BIn95XPiY6Xc8QKny&X-Amz-Signature=fe2aa52256ad07afcf371a94d3defb9d2c11702815e5cb38f27fcb5c80ada2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDTD6JP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FrRs6HJQUUxZZc5V%2Fq72NcxGC%2FH7WPnrihRj9URv9HgIgMloJ1xBAEb8q5t1azzXRSwWE6M06vge1ya6Aw%2BKgBusq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEf%2F79Y%2BLs0IxyZboSrcA%2Fs6G1w2AlOmmOm1I3HYH8BYDzWcRhQDdT6snE8%2B7K0K6dqPhnibr0ZmryblwvzF3dX4nIrmyZm%2FPkiBafqCbDgmHeCGTwXY5gQjr37ND3Bw8j7nxAYFt%2F0q%2BE2U%2BRpZmAwjX3Fh1taJ6HYhxclZVB7LNaBpljHmQJ9msRdZCf3gWc42AIWUn636MtgZziUnUB6iVvZ20u9iYn%2FjzlUnWmvlk3OlG%2B%2B%2Bm1qREthJo5pmkOcONzh33GM0VprhlVydMkLlB8ZDsu0CQG0wYYANSAU0BkPc8olxGG2sK51mXW2ukr2jfsvJVlmcmbyHI8tzdtatAJRW5p%2FuRW%2BkVdOETt7ciAorLx8EAQQOEWNeTjAB52aHuJJ8x569dxQe6wLtVaTZ88xrby9iVAH%2FEqNi%2B2oDoMWSA6tDvmaKJbm3kuIRSYM1rN0ScpmPSEcIYgeGn7paHDOSeJbD6Q6OxgBAZ4LW8%2Ba8shcHjcydAzHGO4g4lhSmX0b6dYZXaaJhsj0YF1%2F1ndwh1AEQ0jwPv9SBahpoydkNWlz0jCBVCIlkbzxS7md8WnUf1qjnW2EWPxm7Z8EgbHLSmGSx6mYml0%2BDk7O8LlmqSHkgS4S17vxr1hYoXZl3hyimPavJhVHXMKmUvMAGOqUB8JZFTJ6VEWiqCyALWuO6GNkry%2BohvwZCiQJOuu4aG0ok74hzXmLccmIbBKdvVJ9eQh%2BFZg3X3%2FXNelSml8K6pYwheXkB0CY5yDX%2F9rCqToJb6tLlXq3KRNPY7djNj1g2SNmvIj9gV3Fk3oAGWJluB0foMK0ORFoBQABXePNi9dPllrde7T%2B7vRvjvxiU7EKzzWtDd6Aapil52y7CnkZEWMeuC4ip&X-Amz-Signature=00fc41b78a2befd0420b4381d28848131f447fc12860b293aab8fe0acd923531&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
