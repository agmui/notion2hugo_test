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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI235MTH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPswXA3KiYzDu7yNXWdqY%2Fd%2FR2XVciOpKtZ7hjSDfsGAiEAon7dflVY0jWIkD3wfKBVdRf6TTcObNPKFFyNuvgaEgYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHyodT6PLcCWhZERgircA1PZeUiaLxbCiMaZm%2BZEcFAMWffhs07nQXouvOWZPgYNHQDNfH6U4yiTcmCZ63toqaVQdUGXLKbC1lNStzrWIj894pGZeTSZI%2F54wlK2vPC1yLsgmiUA5u9vUcdSlwqer9iPeOcRnkQCXJ1rB7tABhll%2FO0rJzIpiFQ9A6JYneX9kfMfz1L2o4AJyK2yb%2BfxSx4S4uRa5srimLaMg5Pk0Y3bXYUpGXc9XAR1EHNixYlb%2BG2KsCpT%2FNretzf7eb3q5rvuXLtYLU9b%2BhUeJyQwsmQ3JqP6PeN3erHAFt%2Fa8ywhFJgBOyijw5feOOjo4T8ZJbFxPBQgBFwzCAA21DrsGPoSOuHKKxQGZxCGnvqcRSkfM7fAzXEZ7CX1yHioA1iEL%2FtuK0hj6B9BXdtFMz1ulpO%2BpYDYoSnYri%2BUjgMtjEUsBFCUI7rbeK30o9gBd6gnQBjtoGT4i9y6smrMSve4bH%2FjnO%2FPRsEBpBq1GEDYlzvnlUVenk2GsuZ1FPIFgLnVVpZ%2Bvtf0hynWJSE09rd6aLN%2FiEMKn9FAdUS8jgf6bd7QJVpmaIEoWwgRrpaG1fkrTprm0L%2B6kMce7ov9d%2FC%2FqQ7EX70TOTQNXitw9MWDezM84VLT3zv%2F39mVdOfdMP%2Fo670GOqUBK1Iy9znnrpmgi0jS%2Br2TKBN9pAmskvxJdND4uKQ7HiNeGt1D8Un0ExNSqF0CsPbc3hj4nLaiWbScxD5yHYduGFxkXnNiEXZzcbgj3QxJPPGdGIMDQbRMOfT1HHzbjf1gbq5pb%2Bcv1Uf9khrrC%2BAFKCZc%2FjfnU3pcRj2rwUQznLaq8JkE8G%2F5NAL2ncds49zv3lNNf8ses5qP0l2YIo%2FYna7nxRQa&X-Amz-Signature=1b9c89fca242a2772743c984b5eb2b41c86ead30d966f09cdc3fdce21feb1fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI235MTH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPswXA3KiYzDu7yNXWdqY%2Fd%2FR2XVciOpKtZ7hjSDfsGAiEAon7dflVY0jWIkD3wfKBVdRf6TTcObNPKFFyNuvgaEgYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHyodT6PLcCWhZERgircA1PZeUiaLxbCiMaZm%2BZEcFAMWffhs07nQXouvOWZPgYNHQDNfH6U4yiTcmCZ63toqaVQdUGXLKbC1lNStzrWIj894pGZeTSZI%2F54wlK2vPC1yLsgmiUA5u9vUcdSlwqer9iPeOcRnkQCXJ1rB7tABhll%2FO0rJzIpiFQ9A6JYneX9kfMfz1L2o4AJyK2yb%2BfxSx4S4uRa5srimLaMg5Pk0Y3bXYUpGXc9XAR1EHNixYlb%2BG2KsCpT%2FNretzf7eb3q5rvuXLtYLU9b%2BhUeJyQwsmQ3JqP6PeN3erHAFt%2Fa8ywhFJgBOyijw5feOOjo4T8ZJbFxPBQgBFwzCAA21DrsGPoSOuHKKxQGZxCGnvqcRSkfM7fAzXEZ7CX1yHioA1iEL%2FtuK0hj6B9BXdtFMz1ulpO%2BpYDYoSnYri%2BUjgMtjEUsBFCUI7rbeK30o9gBd6gnQBjtoGT4i9y6smrMSve4bH%2FjnO%2FPRsEBpBq1GEDYlzvnlUVenk2GsuZ1FPIFgLnVVpZ%2Bvtf0hynWJSE09rd6aLN%2FiEMKn9FAdUS8jgf6bd7QJVpmaIEoWwgRrpaG1fkrTprm0L%2B6kMce7ov9d%2FC%2FqQ7EX70TOTQNXitw9MWDezM84VLT3zv%2F39mVdOfdMP%2Fo670GOqUBK1Iy9znnrpmgi0jS%2Br2TKBN9pAmskvxJdND4uKQ7HiNeGt1D8Un0ExNSqF0CsPbc3hj4nLaiWbScxD5yHYduGFxkXnNiEXZzcbgj3QxJPPGdGIMDQbRMOfT1HHzbjf1gbq5pb%2Bcv1Uf9khrrC%2BAFKCZc%2FjfnU3pcRj2rwUQznLaq8JkE8G%2F5NAL2ncds49zv3lNNf8ses5qP0l2YIo%2FYna7nxRQa&X-Amz-Signature=f9d164f385ac0829bd6f611b8c4fc16096e971066e6a07965b8043757802e0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUJPSTF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmYXPOrdGpqI0SzFjA6CQ2V%2FKjuQdNUAFG4gvTrH31WAIhAIFWSZEv8r5zcDCGF9A6V7%2FAd50sVsQ2UkjO9CgIpkVAKv8DCBQQABoMNjM3NDIzMTgzODA1IgxWEni8m4%2BM%2BwSIahAq3APzK68lDalr0xh99jtdxQNuwDu2rQTHlhcKKDGpZVn%2BMe2DN1zMqChQscChbFpiZRbPJNyc3npuvCx7YKv0RumbfbirmfIEbczMpGS%2BmPl1om%2FIeOGwPD%2FzMvIEpY5O9RGiEN8HKcwSkJto3YwAAUWC7%2FssFn8MUUdxnP7f5Xplg%2FBqMcRW%2Fqj6w2MeSCUY6IwH1iGS8Aws2Y0ujHKfQoo7N1K%2F3pymjAZMzZ542NHjJnkIbvxtZv9BoBArQmKhosMeuynu0tPABYzAXsmT9Sj6DF9QLWUV90x7uNTm8OGrFriEtSxyEV5gGGWhID%2FTLHNRwAhE7wu56oOyVxX8fOWF8zGj2uNLCc78YLPzUNMj8bG59aP53aT%2FYInzXR2zat3SkHRCiqMyTYvjdRj%2Ftk0MyYiwUR%2FbBWQi0dWhoNHx%2FbBDoEma3M7nNnFWEAWMryuMk4XwPahe8g0z5MQPPSWj5k8f2oGe26OqOZCqd%2BnVc6bssjcrM%2Fr7HbGERm0n2quXISJLjYzCgCtUHr96E65ug4uM1uSwSiDsWcws2VlOhYxwJ9NuIK6ZjLNeCj5fjT2z23RDxIJcowSV6eXiXNiyQPs2%2B%2BrvArE%2Fk7vaYXgPof67k5yuZCDR7VzsIjDph%2By9BjqkARVBPGNGjtj3w5rl33Wff2b7g4O8eNg79wLA2CQRVCHd5L2Z2VyWcMZ0dl1NPZOTpd8czP8zX4CIKAE8QrbBlfHEkUYLYCujeP05a%2FKyRpLukoNRjk4FjINPNgvDu0%2FULyL5h3X%2BpAjWJ%2BLp4OOOgPf%2BuhXiqOxH3A7QqdM4Mm46npUP0fZapwvyiSnk7rGfioRwKHpS%2BRarfxaEwREjsQ2RgMTG&X-Amz-Signature=c84001c08eede77f8c9e9bfa433721afdca2165f6a0a441bef5e0cec6733c06c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBAYHX2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BSSfxdfVw%2FLBZcHA9wUnj97HDOF05ps9tnXqUxvUVHwIgcxgEa5ukUYu711xiCm2WXk324I%2BmE7g%2BLGhPA8vRVcIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDG%2B2kGgtok%2FSRtiWpCrcA1vkbJteuwuyw2pN1q6OThgL3vQIQdh18Ri9hs1LPaYkTj%2BqZlpH7p9bOEeH%2BM5AvAO%2FVf3t4e4xEuMV50nPfewqrkaNM0ufjxHjz3tJoI13KOBBzStuN3L5FO2fmdrj61uj95L3zMhpDWQUaLFvhqiF8OtMRia2MtNNgErt8se8xLzXQs2TYYv4PiABU2%2BquE8RRBCwr0oFWEi0oe2ADFzoJlfAMeMIGt6JbZ73f6%2FUFACF6gRZtFDeyqvQyWSmuMEMVNZXM3LQxX3oathD0tanhQvQ3wbiQcPIZkvqS035w0J15P7ey%2BPZMxbBrPVxMVEnmhZKn59grs7IH22Ms379Rlqgpw4RkEcpNxasCZW%2B6iKuKMAwn%2BaXMfoTtAai1kxaxQfE5gXK6HpxP9jtvX6M63dtedJBXJfaHUhUyPN7snIrorugMRgZ%2Bv8maxGZi2ifDsLhjsvMG5Y%2FpEEmRWHFrpWHiFgl6LaLKjASpKNgsAddq76l7wV8xhs3qZmTExOqsOCipO3eQTuNXDqRoDFBNOcAjvsRKI68JW0gz54E1Hriw9i2fLRxj0lJUd2c767axA6VWuFIrPWXtm82wXql%2FBk2%2FQy%2FkXN5ix0gIuYgb4errcXZ4YruIvVDMOn2670GOqUBiSHGDoxN%2FzlXuOaR3p%2BQsN7l%2BwFvA9zUJ4RHjq0kIEJ4Hh4ny0Mee%2B89oX4libbt3Z7hoH7MnDRTIIY0nelW5cjcaSjy9xcUrdXWR7llAHXLtzUPjxFD2kgmg2k1XX8r8RlV8qfdxqFjMT%2B%2F6X1BTm394RSTlmd2iPGO%2BftBA89kowFwke0eWrer13ZzAzfOMzXno08P%2FZRyRA87PibrFFjlUhXq&X-Amz-Signature=4a4aedef95d59a7ab6cd4dd1aa7b3bb4abc544d278441273fe56599b1b51ed58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI235MTH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPswXA3KiYzDu7yNXWdqY%2Fd%2FR2XVciOpKtZ7hjSDfsGAiEAon7dflVY0jWIkD3wfKBVdRf6TTcObNPKFFyNuvgaEgYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHyodT6PLcCWhZERgircA1PZeUiaLxbCiMaZm%2BZEcFAMWffhs07nQXouvOWZPgYNHQDNfH6U4yiTcmCZ63toqaVQdUGXLKbC1lNStzrWIj894pGZeTSZI%2F54wlK2vPC1yLsgmiUA5u9vUcdSlwqer9iPeOcRnkQCXJ1rB7tABhll%2FO0rJzIpiFQ9A6JYneX9kfMfz1L2o4AJyK2yb%2BfxSx4S4uRa5srimLaMg5Pk0Y3bXYUpGXc9XAR1EHNixYlb%2BG2KsCpT%2FNretzf7eb3q5rvuXLtYLU9b%2BhUeJyQwsmQ3JqP6PeN3erHAFt%2Fa8ywhFJgBOyijw5feOOjo4T8ZJbFxPBQgBFwzCAA21DrsGPoSOuHKKxQGZxCGnvqcRSkfM7fAzXEZ7CX1yHioA1iEL%2FtuK0hj6B9BXdtFMz1ulpO%2BpYDYoSnYri%2BUjgMtjEUsBFCUI7rbeK30o9gBd6gnQBjtoGT4i9y6smrMSve4bH%2FjnO%2FPRsEBpBq1GEDYlzvnlUVenk2GsuZ1FPIFgLnVVpZ%2Bvtf0hynWJSE09rd6aLN%2FiEMKn9FAdUS8jgf6bd7QJVpmaIEoWwgRrpaG1fkrTprm0L%2B6kMce7ov9d%2FC%2FqQ7EX70TOTQNXitw9MWDezM84VLT3zv%2F39mVdOfdMP%2Fo670GOqUBK1Iy9znnrpmgi0jS%2Br2TKBN9pAmskvxJdND4uKQ7HiNeGt1D8Un0ExNSqF0CsPbc3hj4nLaiWbScxD5yHYduGFxkXnNiEXZzcbgj3QxJPPGdGIMDQbRMOfT1HHzbjf1gbq5pb%2Bcv1Uf9khrrC%2BAFKCZc%2FjfnU3pcRj2rwUQznLaq8JkE8G%2F5NAL2ncds49zv3lNNf8ses5qP0l2YIo%2FYna7nxRQa&X-Amz-Signature=e010e53a115842b87a4bd4ada795833d6c975c58785c6974c06d66ec2756c1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
