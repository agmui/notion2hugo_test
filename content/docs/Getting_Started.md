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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCBBNA4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKCRa7jJdEws%2BLnnP2AkH8KDhRomgHcWcGDIVbY20P%2BAIgOb67ttaxJnkRzT8CeEFmyzMUmup7V3u5cApGnoDT16gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWwbzUs8B2LmD8L3SrcA7Fnt9u1t1oa3Jq%2BOnnH0ASVzE2WXrdyfTE83%2BLmvLQ%2FL5fm6%2FXwqMoA%2B2auWL%2BWpB3k8Ak4bgWGyedjeAXDJLO96wBkWFRwBgegLKQXJU50wOuvNvetOH5dPG51NZMvQ4HHGPoebZGzKO6IYMm6nkwKcfJk4FxyUWTchvJxM0trrd7%2BLSmR%2B99rlAifGOJAwL%2FJiKbmo0buJP%2FxR4QmxnOmkK2bVBYYsXt3ZQtJWDg409YiG02%2Fr4Jl8nh3hP80tH71XKiV3odK49Ft9rDEx9o2r%2FnfBa1T%2B2vEUfzXqrYDhc64YHkOOyieRftGrufxXzZfe0Bp0tfR1TC5AAh3Ow78%2BB%2Bn2lfDcZF6p8Ywo433A9eOom5S9xSM6lo20d1EJefvEoTaHVMo%2BzWpyY9SBo58p5TIXmvlN3hafxIueIKbbDLMYDmSHC%2Bi5zW7yRBgCDQQyGTiLf29lj78w5RsL6C0HGoOfsdbVsKFWSuVvuQ80iA%2BgOOrMINP07YyPIjFJ7PhHsqkyBLymr%2BnLhqPv9i4%2FqbHt4%2BTbcCrLn4fGCSDyE21l%2FIV%2FOZpqvnwacpkc%2FFmScIdlAL7E%2BBxL9QVuM9auEDIwXv9LGa%2BDhRu5gVC5%2FESvmqWCCMmyDtrMJHptb8GOqUBnyhRe2BLvmh0AgVFwaSdJLAbV6RGMSsb5z23by%2FXN4L9Q9DeUsunlQtwStHZ50U%2F3qRjwVho%2FuKE9FK40DohGdCP7gh85aAcrRC6ur5n7T1hPf59ZpUKpPzo2WkTuSC7cbnzBghYiLkEXd%2BNlx8%2BOMU4DJ9%2BnJq5bIWxgfGNGIl%2FpXYmkJOqOBZ%2FAKNwbvP2EQEYx2ib%2FCgsusEbN3nal2sAnTFd&X-Amz-Signature=7863605039551ecebfdfe8f98d0d30ae81572396925f433b7255423de8182dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCBBNA4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKCRa7jJdEws%2BLnnP2AkH8KDhRomgHcWcGDIVbY20P%2BAIgOb67ttaxJnkRzT8CeEFmyzMUmup7V3u5cApGnoDT16gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWwbzUs8B2LmD8L3SrcA7Fnt9u1t1oa3Jq%2BOnnH0ASVzE2WXrdyfTE83%2BLmvLQ%2FL5fm6%2FXwqMoA%2B2auWL%2BWpB3k8Ak4bgWGyedjeAXDJLO96wBkWFRwBgegLKQXJU50wOuvNvetOH5dPG51NZMvQ4HHGPoebZGzKO6IYMm6nkwKcfJk4FxyUWTchvJxM0trrd7%2BLSmR%2B99rlAifGOJAwL%2FJiKbmo0buJP%2FxR4QmxnOmkK2bVBYYsXt3ZQtJWDg409YiG02%2Fr4Jl8nh3hP80tH71XKiV3odK49Ft9rDEx9o2r%2FnfBa1T%2B2vEUfzXqrYDhc64YHkOOyieRftGrufxXzZfe0Bp0tfR1TC5AAh3Ow78%2BB%2Bn2lfDcZF6p8Ywo433A9eOom5S9xSM6lo20d1EJefvEoTaHVMo%2BzWpyY9SBo58p5TIXmvlN3hafxIueIKbbDLMYDmSHC%2Bi5zW7yRBgCDQQyGTiLf29lj78w5RsL6C0HGoOfsdbVsKFWSuVvuQ80iA%2BgOOrMINP07YyPIjFJ7PhHsqkyBLymr%2BnLhqPv9i4%2FqbHt4%2BTbcCrLn4fGCSDyE21l%2FIV%2FOZpqvnwacpkc%2FFmScIdlAL7E%2BBxL9QVuM9auEDIwXv9LGa%2BDhRu5gVC5%2FESvmqWCCMmyDtrMJHptb8GOqUBnyhRe2BLvmh0AgVFwaSdJLAbV6RGMSsb5z23by%2FXN4L9Q9DeUsunlQtwStHZ50U%2F3qRjwVho%2FuKE9FK40DohGdCP7gh85aAcrRC6ur5n7T1hPf59ZpUKpPzo2WkTuSC7cbnzBghYiLkEXd%2BNlx8%2BOMU4DJ9%2BnJq5bIWxgfGNGIl%2FpXYmkJOqOBZ%2FAKNwbvP2EQEYx2ib%2FCgsusEbN3nal2sAnTFd&X-Amz-Signature=d6502be63a437ad53e99fcabd0cbc648b4d84dbfdbae871ea554e3fd070a53bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYSIOOEE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAMC40ArEU51oJSkg27k5ohX7FRosWNfFlg2NOQcLroEAiBWGROo9MVgD7XKd77T8f3VFPwx28BlNLZXWw08DN31TCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5OVu4yJ66SckDxbKtwDS9iGdWU2ENSslQVHW%2B2wwMbm9QVd3X%2FbDN42BgjrmweajkbYDORGu1fb57O0fFpIvcG3HMXIZPoIVtn%2BCMBEPKCCqM5w8dAJTH93S%2Bs8m8548kaDRllb5L2KfScpZG7LhEgYVuvkZSpn4pRtZkbPAHSTqtKo%2BI7QOufegq9QrLsc9goXaFPc5ZJdFQeP6%2FFrVSuS8Ve1cN%2BWVcq%2BE4sVYMMb0rETATBCHF7CIXm8th4ac%2B5upWOuVKKNowOc8%2FVtMgZxbwpaCxfkqevPcAtwJQ8AnI%2Fbx6qt%2FUHz6jp0v6sj3dLchq9DCWY%2BN3bTHryyl9LBmP03YRoNiRPquBGyvKJ2a1mj0czRRr93aDLJm6Rk8pwyaWhPNrGkKp9NETZsLAxVJFGPPDRURAn5vJ4lUYo4z27xCs0gXgALJbAU9PPnEsSFOc%2BIYnt1npVEAsKmK6wAo%2BrTcdD07SzBxjSBctq5FthtafeD3XrP3v5IsVw6ZfSrc%2BET7FOO0gehg9nRgtnLlq2LZBICXUjiYqMNwQvXPa1AaPn7%2BE5cOfXXtn%2BAD6BZ%2B3ANUoWUtEaZIXoQV49VKQZBo2xrnFKCYYNZH2dXul06UCQMnuC%2BTaGSPvTy0QbLNSf8kWj6%2FUowsem1vwY6pgHm7iW%2B%2Fsl2K4p2FNr5YYiA0UjbA4ljU%2FRixZegFFiNAAKKFcIpDpF4Ko5X9MFzk7hmX6J4pyE8gJACCchDSs9auyDNuSMcJelB7UygDg3cGw7a00TEYlogoYzDoH0Y3EDouTAEZnzAAFjwp3xpZHU%2FnPuWL7yX58RiN350kDNwtZ1D%2FZXttefKMfIoiI9mJYBZMkMEVC6oMndI5iEpa%2B6n7Qc4VfCU&X-Amz-Signature=f51a0cb50bc18b8473be71393e8547067311dfb7b1ede3edbe1f61d0080f355d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R33USZB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGJcRraCOGp9S8FiI3RVkIkdIRZmDyumaSORS2qqp8CKAiBJHFe8Y%2BXYx40vQvqRSyLKTQrGECIG5WreNXaE9hNZ0SqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN5viATUyZMtZukxgKtwD9dUG7YOSb4JrrisNo%2BWfvlNyYQe%2Fq75UU96hZBN22FE1EInlDfIpB61JsncfJxHSa94pbF1dPhz60XL9OXjWFlnf34OpbgcRu%2B2doEhW6LZc2xPHQ%2BH0ynkaD6bc0iWe%2BMRaX3SKLJpNaqPOhOc%2FxA3SYLQa6PGlt1Piw8c4BZPQVMXzNB6WbJnoqmtqAZE5cYJgo10AUrNEPyXHbdKAc5fQ9UK5ldoriiSH4QyXr1SBM0jMzDCSI7O8%2FtpycEzjABHAyzQcELx7fA2grxC4ExB2Gl%2FykWvFYBNhw2miGLE5pmm9eVxRSn2mPtlIMWJ%2BGf0GOgor8CPcRv31FsXTxEyzxc5mWcyssq0vK%2F%2BzawyvUI7UA7GAJj1rMkfCXAM1%2B7gdhSvLxiO5UI9Atnms3fhFLgtFjJxL%2BOxXQmVK%2BG1RUfbze8pxN6pPrIfVqIYcku%2Fyj1I6goXnmy46rR9T7hD6CaDF1llQ2oALftcoePoml9WuFgJ9hbUS7%2FOL36Btb0VHBS5zBVnrJfY3trRaFNqJjz5%2FB7I%2Fu6nngjI6MEAen%2FzlepPA27GRj0K1d2iZDlhSaT9%2FhkCv0xiPU%2FIf3D6Og1sxnG4Ka2XxG3%2BIongQzh6K%2FB0UNQs4sfIwwum1vwY6pgHt08N4rUpwsc5wy%2FEHz8kILqFt%2FM5zMKfWKMQ27Nx8rEauL0p9Pg7DrLaYWdZEDZchlNUiIKirz4hVImfTjFSYVQWn5jZkJS%2FQWcK8LCMzZ2Z58wpB5LOjBcN%2BPV%2FpGzMeqxGdVasvHsApaXtwIWkugQN5yewqx%2FhRdobaA041UUuj1HHprMomlmtKmrw5FO2lbWm%2F5kxq%2F1hw6RkYBhKTOfDPtQNn&X-Amz-Signature=32d99c0b40acfcabc1e11f4d9caa393b8c899777149483be10bcc6818f6a1cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCBBNA4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKCRa7jJdEws%2BLnnP2AkH8KDhRomgHcWcGDIVbY20P%2BAIgOb67ttaxJnkRzT8CeEFmyzMUmup7V3u5cApGnoDT16gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWwbzUs8B2LmD8L3SrcA7Fnt9u1t1oa3Jq%2BOnnH0ASVzE2WXrdyfTE83%2BLmvLQ%2FL5fm6%2FXwqMoA%2B2auWL%2BWpB3k8Ak4bgWGyedjeAXDJLO96wBkWFRwBgegLKQXJU50wOuvNvetOH5dPG51NZMvQ4HHGPoebZGzKO6IYMm6nkwKcfJk4FxyUWTchvJxM0trrd7%2BLSmR%2B99rlAifGOJAwL%2FJiKbmo0buJP%2FxR4QmxnOmkK2bVBYYsXt3ZQtJWDg409YiG02%2Fr4Jl8nh3hP80tH71XKiV3odK49Ft9rDEx9o2r%2FnfBa1T%2B2vEUfzXqrYDhc64YHkOOyieRftGrufxXzZfe0Bp0tfR1TC5AAh3Ow78%2BB%2Bn2lfDcZF6p8Ywo433A9eOom5S9xSM6lo20d1EJefvEoTaHVMo%2BzWpyY9SBo58p5TIXmvlN3hafxIueIKbbDLMYDmSHC%2Bi5zW7yRBgCDQQyGTiLf29lj78w5RsL6C0HGoOfsdbVsKFWSuVvuQ80iA%2BgOOrMINP07YyPIjFJ7PhHsqkyBLymr%2BnLhqPv9i4%2FqbHt4%2BTbcCrLn4fGCSDyE21l%2FIV%2FOZpqvnwacpkc%2FFmScIdlAL7E%2BBxL9QVuM9auEDIwXv9LGa%2BDhRu5gVC5%2FESvmqWCCMmyDtrMJHptb8GOqUBnyhRe2BLvmh0AgVFwaSdJLAbV6RGMSsb5z23by%2FXN4L9Q9DeUsunlQtwStHZ50U%2F3qRjwVho%2FuKE9FK40DohGdCP7gh85aAcrRC6ur5n7T1hPf59ZpUKpPzo2WkTuSC7cbnzBghYiLkEXd%2BNlx8%2BOMU4DJ9%2BnJq5bIWxgfGNGIl%2FpXYmkJOqOBZ%2FAKNwbvP2EQEYx2ib%2FCgsusEbN3nal2sAnTFd&X-Amz-Signature=9566751e6875dbdfe3c3884dc71146c73579b3fff70cd4a15abc98f448eb9079&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
