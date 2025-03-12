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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMWZB6T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCufnql0OVB4zY7YzZY6UDbrdsxNh49wCAxcHXtvmwNvQIhAMJNEVeOixAIz6y0fg6JMswQ9JS0WVUKWKm%2FHl9a9SMWKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFkIevBB4x6AyocYwq3APH3gxMX3szV5ffsCfA9eHSq%2F8dJ%2Fj4MDg9I1FywHfMPITbrJ1lRVdFDxEZIxeB4yRwHnSRShSK%2BroL4FqoRYHHVh9jf1v%2FRdEmOZ1JaiXVFCGVvQnXzgeWDti2G4cRHPAPKzOcaU5wetFVP5a5fCxC0cz1wo6%2FKx364wzlgtbR2YfKIHQBj8rFS7tCOPeS%2FldPvsTo%2BQR32cPyJOas9H3juPQVT4iCc5iAtKzrEGnMWtnSyDIrCgpiV8%2FOJzRVEOsB8Xx9ttYh1dmMQx7VZZaM6cRKqzir%2FC3SJLYGkOibaSMsO9qCNNcOaKxsRdt1%2BudnxuXAK0Z73f5ed4mS2Mjz1V%2Fi%2BNjIYcxubjwLKTD8fcu%2FG11entdPzffgndCG7GiPJSgGmbzBrvy%2FTFsbI9xzMdfSAvqJRDOBFTwovcMuSMTV4Dh7FjXheop7B8WnPMHDZC6PIass5zRIXp9i%2BQsdldBrCXH%2BU9mMX4nh4TLdruwjcQG%2BKsCHGWi3eSwVWdNKG6Y2h4O9y4na5tGF%2Ff8HGJy00I%2B7qoFAL7lqANaTpQ5hl5MTAFl0%2B%2Fxr7NbrG17whPQyNjhCbopXyAHriAs%2B6ieGR0dkolXZZ2MnGjA3UpbUksU%2BwfQ6tO8bvTC1u8S%2BBjqkAXKV%2B%2FGeqJH4RFe542M%2Ff01PQM9t4inC%2BJDD4W8NlB%2FovsxdXs%2BKE6DE3Ti%2F1nuSBqs8k2ZqxGBdGt0Q7Yxmlsfiwx18TGXZXoaB%2B%2Fx3bCl2v2T4KrvtaNDykDSXWNi%2FgE%2BY7mp0lRR1FqzFYPnn3vBPtpfewVW%2Fgtd8M%2Brc04NxretLZyNX2N4OBchVrK3BT132J0bgXQvhBfgg6AWexX3Uh3hV&X-Amz-Signature=ec6d3606e30bef1a5453d6cff864c6252ce92fc0169174fd460f9fa6e91133f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMWZB6T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCufnql0OVB4zY7YzZY6UDbrdsxNh49wCAxcHXtvmwNvQIhAMJNEVeOixAIz6y0fg6JMswQ9JS0WVUKWKm%2FHl9a9SMWKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFkIevBB4x6AyocYwq3APH3gxMX3szV5ffsCfA9eHSq%2F8dJ%2Fj4MDg9I1FywHfMPITbrJ1lRVdFDxEZIxeB4yRwHnSRShSK%2BroL4FqoRYHHVh9jf1v%2FRdEmOZ1JaiXVFCGVvQnXzgeWDti2G4cRHPAPKzOcaU5wetFVP5a5fCxC0cz1wo6%2FKx364wzlgtbR2YfKIHQBj8rFS7tCOPeS%2FldPvsTo%2BQR32cPyJOas9H3juPQVT4iCc5iAtKzrEGnMWtnSyDIrCgpiV8%2FOJzRVEOsB8Xx9ttYh1dmMQx7VZZaM6cRKqzir%2FC3SJLYGkOibaSMsO9qCNNcOaKxsRdt1%2BudnxuXAK0Z73f5ed4mS2Mjz1V%2Fi%2BNjIYcxubjwLKTD8fcu%2FG11entdPzffgndCG7GiPJSgGmbzBrvy%2FTFsbI9xzMdfSAvqJRDOBFTwovcMuSMTV4Dh7FjXheop7B8WnPMHDZC6PIass5zRIXp9i%2BQsdldBrCXH%2BU9mMX4nh4TLdruwjcQG%2BKsCHGWi3eSwVWdNKG6Y2h4O9y4na5tGF%2Ff8HGJy00I%2B7qoFAL7lqANaTpQ5hl5MTAFl0%2B%2Fxr7NbrG17whPQyNjhCbopXyAHriAs%2B6ieGR0dkolXZZ2MnGjA3UpbUksU%2BwfQ6tO8bvTC1u8S%2BBjqkAXKV%2B%2FGeqJH4RFe542M%2Ff01PQM9t4inC%2BJDD4W8NlB%2FovsxdXs%2BKE6DE3Ti%2F1nuSBqs8k2ZqxGBdGt0Q7Yxmlsfiwx18TGXZXoaB%2B%2Fx3bCl2v2T4KrvtaNDykDSXWNi%2FgE%2BY7mp0lRR1FqzFYPnn3vBPtpfewVW%2Fgtd8M%2Brc04NxretLZyNX2N4OBchVrK3BT132J0bgXQvhBfgg6AWexX3Uh3hV&X-Amz-Signature=364f8decde32ec6dc5717e2938fc0edcaa6e481224db91e40e6e18eb7d3ca773&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDZZJSF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGOYZu5dnVTMC0TuGsVOyyQYRSOrdWYmyqNumpVq%2BmWjAiBc8dwNs89SbU%2F%2Fh4mMuPsuNXXOahPTNGT3Pqfe%2F8UIgiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZTTe4NtyyGdpkRrsKtwDyf73Mqt%2BgwKM3ja73cDtD6DfFTEE1GFUmjW7YhAYMYYFc9LUhsogvfy4uyGuMCTz3TYOG96CTNk43bDlSPQqaOHG83iaGXjne70JVtZeNyjfwCeyj%2BISNhbC7PsI08S8ABHxVr%2BkaE0Dla%2BDNVhGHubTi6q4S1jDjNJDp%2Ftz4BA8gxafM2XzxW2XPFadUyQITemuPyjcqvDO2hvP%2FzH8u%2B9R8DzvRtMruY61FauweZX8o29HjUMhkwUDeNg%2BZzbjnXzLhDw0hktiheyPx9ln3VRwaRdzNdhG5rUldgoUb46kzBSxBMP8KzZZRl9YkDk1anZWYcjfIQM5evi9bKyhNQ%2Bf%2BNFd9LFUIXUhwf3I4anTy9f5kYKcSSjFWeUjx8mMrebGdTnn1KK2%2B3xSVbMgy2yde4%2BC0BqhivdFAl%2FvEeS9xwp5wkij%2F%2BzeTUhT978%2BV0iYd1fMvgxLpbUdSH3POaEAeVdO8InJCzMfCwq8kQg6FiCGu%2F7rUcW9pj%2BSU58oLSfDzo55gsIK%2FwrXDbU%2FOU%2BuXu0muNisYSND8L2O8OZAJ%2FLO4sv65pZnUuwrqgDcyVLsXd4V210icZ%2FGsNwQDwv%2BdkFVKwiLMnaKh1qXAQFquy41M%2F%2BYGLLrJvswprvEvgY6pgFnYtYwZlqpi87Kj628RZVq7SDP3BzL4sILR7bbPzhSCkkMy2UmDsqGQ%2B%2B%2BdP18wr9IZCOXNbR308xWIuMwuTAuOMYdp7aL2RVMRZG5x8p8TrmkabdiAdMrStDkZdpHmRIwAzjYUG5NKkcATyWZMXYfWfiWj%2FiS3VEv1jHzQOEcLqJfe7KUNecbgtkEKT8Vi4hFz4TXJ8mq4AxOcSDtNYfVG%2FbhOZaX&X-Amz-Signature=18d0e21f7f3f68839730dab11791acbb8da1374e2f0513d11e2653a8c2d44c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LYSF6F%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGURZ3chbI5R6jz%2FNQ12Jhrn6nlDf8gCaLPm0Isrt9RxAiA8hLL%2BESx%2Bz8JuelfDcC5uUa%2FOhURuNUdSuhXJoXHm9SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAEdNOvlMTldUci72KtwDkFmIzBgEdsOBt8vq62zzrc%2Bsmd7tvKoM13Uz25ym5vXF5Ij3JCDMCNqftjqOXUu6ENP1sbQSIIDC3RvbxE8ZgArJ877nA7vqk%2BALXxOvCwWV0JKF4r6I8m%2BiMUDQSe52cBz3WAgExI8yNoooogQYGI6PzNoDZOIb1MYD99HLcajloWGviXESvEZuxhJBnNjsRC8QXekDIfp6tWPQURNHr87fT7F3qW7c832zBFXGyuyMEBx7AidCtfYRt5lSZG1cepfglpvTv5jgp3rJ6WVDEs2GrmQQKLQKjct%2Fxx%2BcSUi4FrvrbY11VkFTUuUIp1mgkp%2F71f%2FuVe3jaHX0XL5RkWmUBj86u6g2Kg3jkkhF76b%2FxdWQznYE%2Bll9Xvw%2F0tvSPSKVlItyccGImF2ANv2lkMH%2B5EKw9kI4ZsVgWEuo3GpppQnTQno6CD%2FJjZ7AFGDxew5SsqAm%2BQ1pnup1WtB8dfQl0%2FQUhWWR6rAaRDiQJQy7K1ty0fbTAWwQFO35%2FdqD7iFmqOWPZjbBr3SefB1WKiMZ0aAMgpTBT6dho01pDsrxE4LElY9Il%2BRaPWJQwvtr70%2Fq9r03Hzo3abux8HW6BhFNGYFQyJZz6vpNOxkJCXsIclX9fop%2FYfPxup8w4bvEvgY6pgHdXTcXgqDJ%2FTBuyeyBLJPBU6fkXl%2BRs4zg8VVT7fmcM7beLOmXHfgELsRaAMfISN4cYRqd4VChyxUiPyjjTdFbFAvxgeJdigoh7ufuw5YbGBxT5dX3TyiA7WHwxuB6X9K%2B1VoQy2ApBmj1D1RJ7iApxwqTyCuU%2FWh37HaBBaAA0SvIhdD4ftX7rz3Le2C9dClToOZCNv19erW1ZX6hL7OlRDCBLYtw&X-Amz-Signature=cf7f88da8c41f602a37292a85ad4d364a5e2df29f04d8d330cc4ba8411125afb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMWZB6T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCufnql0OVB4zY7YzZY6UDbrdsxNh49wCAxcHXtvmwNvQIhAMJNEVeOixAIz6y0fg6JMswQ9JS0WVUKWKm%2FHl9a9SMWKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFkIevBB4x6AyocYwq3APH3gxMX3szV5ffsCfA9eHSq%2F8dJ%2Fj4MDg9I1FywHfMPITbrJ1lRVdFDxEZIxeB4yRwHnSRShSK%2BroL4FqoRYHHVh9jf1v%2FRdEmOZ1JaiXVFCGVvQnXzgeWDti2G4cRHPAPKzOcaU5wetFVP5a5fCxC0cz1wo6%2FKx364wzlgtbR2YfKIHQBj8rFS7tCOPeS%2FldPvsTo%2BQR32cPyJOas9H3juPQVT4iCc5iAtKzrEGnMWtnSyDIrCgpiV8%2FOJzRVEOsB8Xx9ttYh1dmMQx7VZZaM6cRKqzir%2FC3SJLYGkOibaSMsO9qCNNcOaKxsRdt1%2BudnxuXAK0Z73f5ed4mS2Mjz1V%2Fi%2BNjIYcxubjwLKTD8fcu%2FG11entdPzffgndCG7GiPJSgGmbzBrvy%2FTFsbI9xzMdfSAvqJRDOBFTwovcMuSMTV4Dh7FjXheop7B8WnPMHDZC6PIass5zRIXp9i%2BQsdldBrCXH%2BU9mMX4nh4TLdruwjcQG%2BKsCHGWi3eSwVWdNKG6Y2h4O9y4na5tGF%2Ff8HGJy00I%2B7qoFAL7lqANaTpQ5hl5MTAFl0%2B%2Fxr7NbrG17whPQyNjhCbopXyAHriAs%2B6ieGR0dkolXZZ2MnGjA3UpbUksU%2BwfQ6tO8bvTC1u8S%2BBjqkAXKV%2B%2FGeqJH4RFe542M%2Ff01PQM9t4inC%2BJDD4W8NlB%2FovsxdXs%2BKE6DE3Ti%2F1nuSBqs8k2ZqxGBdGt0Q7Yxmlsfiwx18TGXZXoaB%2B%2Fx3bCl2v2T4KrvtaNDykDSXWNi%2FgE%2BY7mp0lRR1FqzFYPnn3vBPtpfewVW%2Fgtd8M%2Brc04NxretLZyNX2N4OBchVrK3BT132J0bgXQvhBfgg6AWexX3Uh3hV&X-Amz-Signature=89d6c377bdd96125e85573d75e7f83f52a153e7d682f5d81401f56f9d8f807ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
