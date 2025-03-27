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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7OPZTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICybCaR2XGiM4reNpHPbJe3mRmxFi%2BFXHyJ80rFC7hYiAiEA97Dgl%2Bv6AqMyhonArIJEWan1Qhm8qriDHSc2SrVTRbUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLN4cV3j%2BEiHe7%2FknSrcA203NVXvbuj8nwo0iGgzmtWHieesY%2Fkfei89Vxte%2B4ODB67ftz8IRhJlAP4M1z4jfqO3UnAV4yhOSXiJCSx473T2b7N7wxxRf1X2HGaBWClAo7906OZm4KrPMNitd87HpunGv0pJIqdPVB%2BzpjtxcAEEH5%2FvD1N%2BuMaIuSc6DSezoPJMBVCNtNHglnCWkRXmBaPA5qXFIfkLwbfMnfCoWoF8CZx%2BDMKvBgO0tpj7jGFj0Wu%2FuEAVF1UzIFWPTHc4k0Mjrb9nzVav98fSHnnTnpe8JVnmRm4aa6DJ9gFDbt2K3VDfnuCc4GkZJP9cNUjbENF5ZyApjGXzxFDswgkdGdiyvJHbLDrlahn%2Ff3db746aNk0lKiy7Cnk5Iatk0u77va0r2vWxqomIrJ2SJ%2FCZFHcLPit2sIIlyFkFpugq9jV%2Bc70jvSPWYffD5DHwYQedwfZtAIRuZjd%2Fzrbcgj01zYJokTNmvGTk09w%2Bq8uzTbi2CJKBtkd5duYGzOJfJpyRl7MFq9Ti%2B9xe7RkmqfSy9CzezkVeMM7Kv5A2Rp50lHAqW%2F3WL3MhM7Ebcf1EfD%2FR%2B9ifSN4foyvkwnqtV3RVpL6d%2FGwbN4u1tZ6QxUdFYDhKVLagh0iP53pmKy2bML6%2FlL8GOqUBHxVgKkbt%2BC%2FOEvu2E40BkmBUAtBQ9sSFMqhtd11Xk40zU3HfyFUx4ZTteDf3jGx1hQ8tLWcPmGLU8jfpuVD91qsi6lwLfQrZQJq2hCUIfXRBtbd1XYIG8u6byQr8XP37X8mqVoyG9b4AmeNpLC4hfC%2BytI9v018guisJL7QVsdhSJDcd%2BAnkP0eu1t7eH4W%2FFR7MylPWAB2UaUfcVH%2F68RnAXI3%2B&X-Amz-Signature=0143365c9963835130a31b747e3f366c6140de2fd859e8fdb4798576edbebba8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7OPZTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICybCaR2XGiM4reNpHPbJe3mRmxFi%2BFXHyJ80rFC7hYiAiEA97Dgl%2Bv6AqMyhonArIJEWan1Qhm8qriDHSc2SrVTRbUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLN4cV3j%2BEiHe7%2FknSrcA203NVXvbuj8nwo0iGgzmtWHieesY%2Fkfei89Vxte%2B4ODB67ftz8IRhJlAP4M1z4jfqO3UnAV4yhOSXiJCSx473T2b7N7wxxRf1X2HGaBWClAo7906OZm4KrPMNitd87HpunGv0pJIqdPVB%2BzpjtxcAEEH5%2FvD1N%2BuMaIuSc6DSezoPJMBVCNtNHglnCWkRXmBaPA5qXFIfkLwbfMnfCoWoF8CZx%2BDMKvBgO0tpj7jGFj0Wu%2FuEAVF1UzIFWPTHc4k0Mjrb9nzVav98fSHnnTnpe8JVnmRm4aa6DJ9gFDbt2K3VDfnuCc4GkZJP9cNUjbENF5ZyApjGXzxFDswgkdGdiyvJHbLDrlahn%2Ff3db746aNk0lKiy7Cnk5Iatk0u77va0r2vWxqomIrJ2SJ%2FCZFHcLPit2sIIlyFkFpugq9jV%2Bc70jvSPWYffD5DHwYQedwfZtAIRuZjd%2Fzrbcgj01zYJokTNmvGTk09w%2Bq8uzTbi2CJKBtkd5duYGzOJfJpyRl7MFq9Ti%2B9xe7RkmqfSy9CzezkVeMM7Kv5A2Rp50lHAqW%2F3WL3MhM7Ebcf1EfD%2FR%2B9ifSN4foyvkwnqtV3RVpL6d%2FGwbN4u1tZ6QxUdFYDhKVLagh0iP53pmKy2bML6%2FlL8GOqUBHxVgKkbt%2BC%2FOEvu2E40BkmBUAtBQ9sSFMqhtd11Xk40zU3HfyFUx4ZTteDf3jGx1hQ8tLWcPmGLU8jfpuVD91qsi6lwLfQrZQJq2hCUIfXRBtbd1XYIG8u6byQr8XP37X8mqVoyG9b4AmeNpLC4hfC%2BytI9v018guisJL7QVsdhSJDcd%2BAnkP0eu1t7eH4W%2FFR7MylPWAB2UaUfcVH%2F68RnAXI3%2B&X-Amz-Signature=4287a8135799f0f2c7b6f09626b688dea6fc1ccdbcabce5138559fc2ac64a774&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSTPN5HS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxtjJUcz8%2BJBzGOgNcZL69XIWle%2F47cjbQnW9tbbxYiAiBwR%2FZ9QGy75x1gGZm8pbs%2BQMYSnyIOGzcwRjBc%2Bz5vySr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMITJSGNoKAaOZ6lwAKtwDkBrT6MDvotpdhllikR0XZaRI9CAkI9B2VmaOXOqnlNGrGEqmCKvSrywJ7ivFeYXUXAVMmWxm4mt5vaADQTeKURTWF07f%2FIsdbful%2BCjxAU1F%2FVaSnAY0NestxpnL%2F6QyV4bZSEL5nm78y4TGm6lqp9YrGZLcO8lwOlLWKuUzWknTLH1wyqiQtM46%2F2B31PvvXbJU1xt9LIpNGT6ZZ16330DVgogdMhho2BFQuE%2Bf57jTfwyXKv66aOSdiR7quarGMTu3r8rP%2FNd9nYPddforgulEIPQ7x0fW7%2F0ryHyLCSJpYQ00rnIr4TY%2FZjSsnBZk%2FnpNCmAbiFpZzDlPIEus90i1hzxbOxE%2BPCiumo94ulz6XcLoDkXRIwa%2BNJ%2BNAgpwLLrfvWen1XPCnKhXnT0rou31yAoh3I2d%2FJb62YLNb2irrK97%2Ftahm11yuyUxI8PwtYnE5%2FJYfg3H%2BPDivIy0a08hy0U%2BqQZq5SFj0EzpA6RhGjaFfjkRTudBUTe73mBC2dWEcSFz84mQ0QEnrhuizgtNIoJoqox%2FTFqL%2BA%2BfyowGEcSeCrL01O2UBAELw3WFb%2BLTYmI%2BKoSKNjnXZlLQHsJNoqNtJiY4JakkyXYO8ncXId8MsZe5Ukj2O7gwvL%2BUvwY6pgF0Ww%2FsdJn5Rx3iG5UD6fduwIzQMPca6nX0Vv0RzOKL%2BOAB7%2BeNTjRmGOVyrQZK7s3zCQGB4mYRiWEVHS0YocyPfIYMkzeJ8JfEdIIQ5gNoLHV0RTSv%2FACVyFqF%2Fmkv6%2Bg1GTwDzyXlJr5ijobPnb4n9eQMG3ShcNJzmRWnxgki3zKmV6e0pI%2FlDON4%2FRAJl%2B2qN7EFFVRWeTVf06Of85wdMnt4QWcd&X-Amz-Signature=7b14bf62c81acd9b8f26101202829aa8b0782233e1ce87752e15d45b561a2d96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHMBOZQ6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhmw55Z6RTBhFs44k%2BXy6nj%2Bhf21QYbVBmMGAL3wXPOAiBRA02AbEwFO9p%2FpPbtMgwmLAT1H%2FET0wjkbSh%2FPjjlDir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM6pjeBzZe7fE8vTTIKtwDEZ0559hiKicDn7Z80cV9R%2BDbn7eZG3IgGf6BVd1M6RwJIp5SZfeF20yLvpVRjUXsCCyIFa6ciE6RP4XWAYjvWatpGC%2FeTcBVrmFOJmHnVMBMd5%2Fqq2a4eGS%2B%2FVeCdzen72ZyoMdJ5bz3bMaEB%2FB%2FoIUlLNigYHbPimfhTxTTbuF3IHtMKqB27Az7wZlAalam6PWUI3%2BRWwci%2BtX%2BP3miJNe%2FXBQNWFDKte6yE%2BdxbjLaUnmLBxFNAod4sU8Jp04BUUZDPcV2QClZxRs%2FkbFC2IPYV0qdMob2JSh70IskREK1JK4WO3MIOsz4NifVsmPGaUcSvxXm9jDdTG79PKRI4H11eb3k9%2Fj8bOEkMnRwAYNxgqbP7f1YHWtfQ598L2tVCLBf2kEUMt7%2BDr4ArMy3TyYkVcDcEffpHmJzx%2FeJxfnIZMF3hmM827pIarj10XDb7kt6YIQCytysolS1GQBbk2xWUTl%2FhXQ02JcRyiSLek1DLzio6YnIIBVtzh40mrldkCX9YPCYnyDtNMWK5Ich0yHHaZ8h%2FTSDAR161kqiSKlR6YtDJ8fhciR8f%2BlP%2FwZrFJ8Y%2F8CxXPX%2BDIoerGJ0Ss1rtx4FFBmG8IhDEEdjmKnMGkqDUcgp2rkXQ3kw5b2UvwY6pgEkfXP96EQ%2Bd1lMitFLUwkUPowFgLdxDlf%2B4oI2H07wMt13X%2B2BNVZ1AHBTlNjdn9SuZJdtZ9NYHU4l0u7lEs8JqLOF%2Fthx8yipklvSAHBB2NKCsPxDbTVoUsfwTF6jLEkIVHecpzPnVzME1A9QmmNIYTtgGBAOIqNobav%2FBtIHEd4mp%2BoPiZPfsU24s%2FvGYubxsCxycVvyxn8YPern19GuBFDJaqcY&X-Amz-Signature=2c53c9979df96f8fd754864dd49691cc6c569f6fb2a8cfb63df987f8c751e521&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7OPZTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICybCaR2XGiM4reNpHPbJe3mRmxFi%2BFXHyJ80rFC7hYiAiEA97Dgl%2Bv6AqMyhonArIJEWan1Qhm8qriDHSc2SrVTRbUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLN4cV3j%2BEiHe7%2FknSrcA203NVXvbuj8nwo0iGgzmtWHieesY%2Fkfei89Vxte%2B4ODB67ftz8IRhJlAP4M1z4jfqO3UnAV4yhOSXiJCSx473T2b7N7wxxRf1X2HGaBWClAo7906OZm4KrPMNitd87HpunGv0pJIqdPVB%2BzpjtxcAEEH5%2FvD1N%2BuMaIuSc6DSezoPJMBVCNtNHglnCWkRXmBaPA5qXFIfkLwbfMnfCoWoF8CZx%2BDMKvBgO0tpj7jGFj0Wu%2FuEAVF1UzIFWPTHc4k0Mjrb9nzVav98fSHnnTnpe8JVnmRm4aa6DJ9gFDbt2K3VDfnuCc4GkZJP9cNUjbENF5ZyApjGXzxFDswgkdGdiyvJHbLDrlahn%2Ff3db746aNk0lKiy7Cnk5Iatk0u77va0r2vWxqomIrJ2SJ%2FCZFHcLPit2sIIlyFkFpugq9jV%2Bc70jvSPWYffD5DHwYQedwfZtAIRuZjd%2Fzrbcgj01zYJokTNmvGTk09w%2Bq8uzTbi2CJKBtkd5duYGzOJfJpyRl7MFq9Ti%2B9xe7RkmqfSy9CzezkVeMM7Kv5A2Rp50lHAqW%2F3WL3MhM7Ebcf1EfD%2FR%2B9ifSN4foyvkwnqtV3RVpL6d%2FGwbN4u1tZ6QxUdFYDhKVLagh0iP53pmKy2bML6%2FlL8GOqUBHxVgKkbt%2BC%2FOEvu2E40BkmBUAtBQ9sSFMqhtd11Xk40zU3HfyFUx4ZTteDf3jGx1hQ8tLWcPmGLU8jfpuVD91qsi6lwLfQrZQJq2hCUIfXRBtbd1XYIG8u6byQr8XP37X8mqVoyG9b4AmeNpLC4hfC%2BytI9v018guisJL7QVsdhSJDcd%2BAnkP0eu1t7eH4W%2FFR7MylPWAB2UaUfcVH%2F68RnAXI3%2B&X-Amz-Signature=64f892a23f21b38983261d682cf1acc1614a02bd12ca42a1f0617e99d89f8ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
