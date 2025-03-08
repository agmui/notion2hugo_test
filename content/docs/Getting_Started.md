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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP5EKII%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCofHnEBiWPfM4s%2F8peuRpDi4gC8MZSowaA9tXXKMb%2BNQIgCxGL%2B%2F9LSk3GZQn7tylBbCnsol4Uf0VkYeBf2ij7xhYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMhRmGmFyCKmV4AFaCrcA4y0IlIrYGVjKgt78h1OpmHXoMEsuApmdvZ%2BYIcfIkr4u7%2BcF51mKgIiSwZ4bvqJBXc2z4YWCw5qb%2FbfM9s8EQMD3eamr%2B%2ByfuQVJ82QEN4JNJoGh%2FKDtGFMgb%2BYiY9bEPvvSVEEijbhIRcGwIHuQJMBWAiUHUi1jgLjExx9by7LNMhMsKXHKjHIdmtiSKRSdrqzzUscNCiW8Rn514WcEFvyZibgSgW4CCHYEMdl5DP0yQBUmTr3lTzz9f66x5JKFtoCVJ4p4kTXNLgK9k9DqCiR2BX5Zzq3FYXBo3%2BmhWUCcrY7PXddsqyOJXyHR6wAY9mWUVEe05xKHsJOsiTySmXR0%2FAggXWFb0S0UlLbMAt1gXzeoD7kpYzG4HxLASa3HFpYZLuUhgaqLlAWOzqYjRb7O%2BLT6sVtce%2FE7NJcDv2I706CzxeyF9zoi2tW%2FqejsRv1XQ6OXVUSWpztuW2XCR7eSkGIR%2BP9v0WiLHeNWKoDsaMCLfJHcGcIVe15kV%2FEmAHXQf3gWC8c%2BuNjfUqt1AkQmnUqb%2BoEhWZbmLz4ulNxkEKz90P4gWP8HZPrk2oEqRa2nQ%2Fe%2BZoLBEJcgfsivqbgjmwbzbfbvoAfq0RbZHwb54BlmHnGxxYDlKb%2FMPfgr74GOqUBbMwa6hPDK4TkmargTgqy7B5m7p2JWVc7wnWEGvVOtrz8GUc6yPYp20k0nspfGGRITMZc95AR9nrTYBkDh04Uc4aawKD2AULc36oWw%2Bkg6eXNbbmDJ3R4y4L%2BK%2FQzWB%2BlO4smITZtGK0iROXswJzFNQOofB1E5IKPX3uB3z0IiQQ%2BTNbqgQgZF%2FdoS7X2AwAftdteUMjSimh9ZMxhBM6cYboMZTSv&X-Amz-Signature=aac8d3719f2863680a9abe1196ed72b4a900dc86c1e3dab7cb9de5675a37edc9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP5EKII%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCofHnEBiWPfM4s%2F8peuRpDi4gC8MZSowaA9tXXKMb%2BNQIgCxGL%2B%2F9LSk3GZQn7tylBbCnsol4Uf0VkYeBf2ij7xhYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMhRmGmFyCKmV4AFaCrcA4y0IlIrYGVjKgt78h1OpmHXoMEsuApmdvZ%2BYIcfIkr4u7%2BcF51mKgIiSwZ4bvqJBXc2z4YWCw5qb%2FbfM9s8EQMD3eamr%2B%2ByfuQVJ82QEN4JNJoGh%2FKDtGFMgb%2BYiY9bEPvvSVEEijbhIRcGwIHuQJMBWAiUHUi1jgLjExx9by7LNMhMsKXHKjHIdmtiSKRSdrqzzUscNCiW8Rn514WcEFvyZibgSgW4CCHYEMdl5DP0yQBUmTr3lTzz9f66x5JKFtoCVJ4p4kTXNLgK9k9DqCiR2BX5Zzq3FYXBo3%2BmhWUCcrY7PXddsqyOJXyHR6wAY9mWUVEe05xKHsJOsiTySmXR0%2FAggXWFb0S0UlLbMAt1gXzeoD7kpYzG4HxLASa3HFpYZLuUhgaqLlAWOzqYjRb7O%2BLT6sVtce%2FE7NJcDv2I706CzxeyF9zoi2tW%2FqejsRv1XQ6OXVUSWpztuW2XCR7eSkGIR%2BP9v0WiLHeNWKoDsaMCLfJHcGcIVe15kV%2FEmAHXQf3gWC8c%2BuNjfUqt1AkQmnUqb%2BoEhWZbmLz4ulNxkEKz90P4gWP8HZPrk2oEqRa2nQ%2Fe%2BZoLBEJcgfsivqbgjmwbzbfbvoAfq0RbZHwb54BlmHnGxxYDlKb%2FMPfgr74GOqUBbMwa6hPDK4TkmargTgqy7B5m7p2JWVc7wnWEGvVOtrz8GUc6yPYp20k0nspfGGRITMZc95AR9nrTYBkDh04Uc4aawKD2AULc36oWw%2Bkg6eXNbbmDJ3R4y4L%2BK%2FQzWB%2BlO4smITZtGK0iROXswJzFNQOofB1E5IKPX3uB3z0IiQQ%2BTNbqgQgZF%2FdoS7X2AwAftdteUMjSimh9ZMxhBM6cYboMZTSv&X-Amz-Signature=4792e4d14cf16bd6e0696c0b5a914d592f7f8a20b4c51fa0d5a128e3f43b0cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZC6UV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBkOY92MzqPOeL8L08yAgOMT52ifPMVAmxp9BD6xW%2BBkAiAP96d6UMHdKhi4ID%2FfHRMyc59W1DjQrOpvRKxxT4xXYyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM%2Bp%2BDCNoIoFEA5hPaKtwDQ3Djg46viTWqLeSJpRfa%2FKqlCBCLodd04bEazBb0smRw5%2BwUvK9sCzOC7ZcJGfdAP7ZwsCTW0%2B0Pj0gVyXFRrLnNH4Bx7DxNGqjyequ9xsZ9hntzreEm7l3Q6jjeFUBNcwzSoPbRaPd3qzib96jvol0bK%2FPJMLKs1pSjSg38Rbakg8tFu09GU3vUSBT%2FgIXgdIPIVBcGW1zlH7KKzXV%2FiafxqeK%2FY8pgMAlRawWv6g%2Fa0EkD8qTCUTp3T3ndTRGN6x5Wl449BBUK89EIKmMroOHiKIAY%2FO8O4V6oEddyynOPHYIJAbTzBJQFPTQwnfhOpgtIUbT8quZtcpZH3wPq3gr7zm9o2KbqjibVmai0iNj5%2BEOD%2BCa1ZoV8B3c72rbx5dXEM7mPKifXlruaTM2fT%2FuyMbUPkFRB%2FWIPoK9YrNGilzk4ENPfsl%2BQiWXoGNQ7%2FiBPIibLV2ZAXXxrXRhmGQZfV8336O2mLyOcTuHU80jlT3EOy1liXEXRWxtQpfCOc9MqvCBe8w%2BAySZ1xTqc0f13S8AvXAl9PvA2gX9N2pdjvw7nCbBnCfTZnrX4yEofNx%2B23wg1FWmPUp2ctirynVU225XEBjupyHkXGQU06vQXxDmsZ4tWKhCD97ww1rmwvgY6pgEIpntTwPswFQ4itid16nTzw9ojlDTR1z30Zlj%2B6vb%2BpO7Z6EFXN3XvZbC7kRt7%2FZ1nrB%2FObnxvq5bDg17msnSGUNLq3e9D2g2A6It7optzbS9BU4MQQ%2FnwMCp8%2Bm1JXcFTq3p9D0NFCrTk3RMqjqaAMUV4rq%2FPFt9qjrtl5KWwJ9knC4JSyr1qyThKpzEyXdecCpty5cYAdgTo5PHBgWegbQA1bvLR&X-Amz-Signature=200e569010b169ad2ef3ab17e936f314ea1aeff2e676cadd2a1bc11161545c84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LVI3XIZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFZrmOY5xeQv3%2B2HWmMeTZjoAq9wPYqtxt0nsqhmNtQwAiEAzlHAez4eP%2FgCKcIyk2uCJpykMPm43rznDoFNe%2FqVPPcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDESu37MKbg7Yq%2Fvk0SrcA9wN1maMuOhVx1Q4QYtQfF6L3XPuDYWZlfTgDSbs2je%2BnqDE1h0dXpP2ivqUCRbhHjDMatmiVlyOuUydwBdHaHw8KyftHcPeJiYLlX%2Bi7pHYCuj0ZUiuGzLZ5MlfbXXxa3MlCWWg5WZf6SB95cev7s2natVaMRuiZDFGsDwuRsH88OurvYXvMXgS2yMfUZ0nzrHGqE%2B14lE5XirL7NeTgpb2uFR1D25x3Z4pBBZNOuXfKECP%2FmChC5cw4klydlT7W4VTnogljfSsgM%2Bk5giYc2o07iu8t5xkq4bLSbboCnw83ku4Rr7RoCAeYqIlh4W64MgKTdWSRPUU6DBx2lmV7v%2Bi7COJtBzGD%2FzMhH4NYup6%2B5b3dh1RL%2Bg%2FuVYbWL6Aen9JT8b1IqJWx1Rtx2aFE7xzsJd9MQPsjCJUEfHL4aTAfZNksRBHm3DYiNTvzFVaXWHu%2FUnimiyPveMQMl2%2FOO9NKBJtnCllVwgVdsWpdfUyJw%2B6ctcpD3ZaNwh2n94yadfRPAE1vxkXUjjYrMdEWR9FaBQJUka%2FT5Bgh3hz27z5cIvdAwTV7SlyBum03fy%2BlWVBoUkrskBWYrw9oQyBbEIjispFos%2BAqPfgHPLHYr2wklvtaFHV8HucQANZML%2BksL4GOqUBlzgUr0WiAmn2yXxZ1TOtfzMSnO5xURZ1TTHJRy4r2WcyjoONfjydQv3WYu53jdJ8hL8rKb3W%2FEa9IJzE9OO7dyK0Vee7B9BbaCmiGMVVteTGRnKGa1vdVTWJhA%2F2zRSpiaD5xaon5pk%2FdbkPrCXWtzAYGv%2F%2FelI40%2FFW0IsEupHJHOelhBAz31ba1xt1h5GGmFRpEshMTWOBBtXOQnRrOYHuLajc&X-Amz-Signature=843c52b53011fd29db23b21caeb577b030db69e6637c9e117fb43943f0bb97ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP5EKII%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T120954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCofHnEBiWPfM4s%2F8peuRpDi4gC8MZSowaA9tXXKMb%2BNQIgCxGL%2B%2F9LSk3GZQn7tylBbCnsol4Uf0VkYeBf2ij7xhYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMhRmGmFyCKmV4AFaCrcA4y0IlIrYGVjKgt78h1OpmHXoMEsuApmdvZ%2BYIcfIkr4u7%2BcF51mKgIiSwZ4bvqJBXc2z4YWCw5qb%2FbfM9s8EQMD3eamr%2B%2ByfuQVJ82QEN4JNJoGh%2FKDtGFMgb%2BYiY9bEPvvSVEEijbhIRcGwIHuQJMBWAiUHUi1jgLjExx9by7LNMhMsKXHKjHIdmtiSKRSdrqzzUscNCiW8Rn514WcEFvyZibgSgW4CCHYEMdl5DP0yQBUmTr3lTzz9f66x5JKFtoCVJ4p4kTXNLgK9k9DqCiR2BX5Zzq3FYXBo3%2BmhWUCcrY7PXddsqyOJXyHR6wAY9mWUVEe05xKHsJOsiTySmXR0%2FAggXWFb0S0UlLbMAt1gXzeoD7kpYzG4HxLASa3HFpYZLuUhgaqLlAWOzqYjRb7O%2BLT6sVtce%2FE7NJcDv2I706CzxeyF9zoi2tW%2FqejsRv1XQ6OXVUSWpztuW2XCR7eSkGIR%2BP9v0WiLHeNWKoDsaMCLfJHcGcIVe15kV%2FEmAHXQf3gWC8c%2BuNjfUqt1AkQmnUqb%2BoEhWZbmLz4ulNxkEKz90P4gWP8HZPrk2oEqRa2nQ%2Fe%2BZoLBEJcgfsivqbgjmwbzbfbvoAfq0RbZHwb54BlmHnGxxYDlKb%2FMPfgr74GOqUBbMwa6hPDK4TkmargTgqy7B5m7p2JWVc7wnWEGvVOtrz8GUc6yPYp20k0nspfGGRITMZc95AR9nrTYBkDh04Uc4aawKD2AULc36oWw%2Bkg6eXNbbmDJ3R4y4L%2BK%2FQzWB%2BlO4smITZtGK0iROXswJzFNQOofB1E5IKPX3uB3z0IiQQ%2BTNbqgQgZF%2FdoS7X2AwAftdteUMjSimh9ZMxhBM6cYboMZTSv&X-Amz-Signature=2fdb53f729ddf7e45bdcbb610c4552f53240d001daa8ca81c368da3cf8a4cda6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
