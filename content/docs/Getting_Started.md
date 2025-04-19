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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCE6H3D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDCZ7dW6Z7sN1SJ7t5kiqUaMnVfWdQaoB8LqWAOclHA%2BgIhAJPVY%2FojOYvSt%2FO4MGQMqyB1wWWgcUnXuEBGg%2FCeb3HmKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rziE00OIbQnoUXcq3APXvDISgw6Dl9NIff5TIVLu5%2F1rzOtFOyYwsQEjQZCf%2BI4CBKNCM1LbiB%2Bd8os%2Fgkv7w1XMfpV4WfOBGs15aOfE19z3v7W9wyDHOqhiciLgYL6YP5FvhRLcnLAB%2BnuZYf8qRjDWvPyiGAGo8dBnJLJOSXNB4i0%2Bx0vnoGr0xFrAFvvFkOx39ltuSeKKSRYl5pYqQ8mnjDt5JgfQ%2FHBOwEiUcKNJh5k1GQjqjxK1rUWRkclYS99fW2cj0FVjnImPnKmZhIyHRpRqbB7R66XCpba8cDW7moqVNirsQ%2BeAopdULTTDYDTK1XaJr9aQoPbtPmyL0h%2FP9gHCBcoh88%2BL1wuWbKzb%2F1r8sEcEYp0RNhEzyAf%2FCM6DOJar%2B9vGAirf7sdbrsL1PlR0k93FQWo%2B7B78M7NJrSzly0oMbASJMKp5tx09OKcmXdqJCN3RK0K87sh1Ai1DBsVkX5v12POypAxotceY0ZKEJvpDXR7gGDWfDd0HXvq1b101u2KxxpyHxMJHr8rWIuySX9VWazLoUfZrG1rwpGcFw%2FSMf2I9t1I%2FOW4MD8gBBY69gYyUSNa0T9cD6a9UwWo9m760M%2Fz0Kr%2BTEleCWJVhm%2Bku9MjaecK%2B2KmqsLnKpl%2FIS3PG8DDZs43ABjqkASgG7xZEOhkxAvSA7d6jomtss8ywHRihbEDNKT18FV0cv20y6ofrheLCUEEZwXFkg3G0TadwNHBxlovlPo8gQqAXeQrnFs68PGBqf%2FCqI2H2rJ89uNFeHeNi3pxhPlDD42RaweC2ownWzM3HYrg8y9H490XoAzf%2Bt3jISJzz7nqIYgGFKLSt9OBBxpMzw%2FipIQYac3ly2C5EyhXegZ%2FbB01piB8Z&X-Amz-Signature=c3aa5d7c6e37581d6885b98cc36eb4aee3a69f67ac3ce06dd96c228b7afebcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCE6H3D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDCZ7dW6Z7sN1SJ7t5kiqUaMnVfWdQaoB8LqWAOclHA%2BgIhAJPVY%2FojOYvSt%2FO4MGQMqyB1wWWgcUnXuEBGg%2FCeb3HmKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rziE00OIbQnoUXcq3APXvDISgw6Dl9NIff5TIVLu5%2F1rzOtFOyYwsQEjQZCf%2BI4CBKNCM1LbiB%2Bd8os%2Fgkv7w1XMfpV4WfOBGs15aOfE19z3v7W9wyDHOqhiciLgYL6YP5FvhRLcnLAB%2BnuZYf8qRjDWvPyiGAGo8dBnJLJOSXNB4i0%2Bx0vnoGr0xFrAFvvFkOx39ltuSeKKSRYl5pYqQ8mnjDt5JgfQ%2FHBOwEiUcKNJh5k1GQjqjxK1rUWRkclYS99fW2cj0FVjnImPnKmZhIyHRpRqbB7R66XCpba8cDW7moqVNirsQ%2BeAopdULTTDYDTK1XaJr9aQoPbtPmyL0h%2FP9gHCBcoh88%2BL1wuWbKzb%2F1r8sEcEYp0RNhEzyAf%2FCM6DOJar%2B9vGAirf7sdbrsL1PlR0k93FQWo%2B7B78M7NJrSzly0oMbASJMKp5tx09OKcmXdqJCN3RK0K87sh1Ai1DBsVkX5v12POypAxotceY0ZKEJvpDXR7gGDWfDd0HXvq1b101u2KxxpyHxMJHr8rWIuySX9VWazLoUfZrG1rwpGcFw%2FSMf2I9t1I%2FOW4MD8gBBY69gYyUSNa0T9cD6a9UwWo9m760M%2Fz0Kr%2BTEleCWJVhm%2Bku9MjaecK%2B2KmqsLnKpl%2FIS3PG8DDZs43ABjqkASgG7xZEOhkxAvSA7d6jomtss8ywHRihbEDNKT18FV0cv20y6ofrheLCUEEZwXFkg3G0TadwNHBxlovlPo8gQqAXeQrnFs68PGBqf%2FCqI2H2rJ89uNFeHeNi3pxhPlDD42RaweC2ownWzM3HYrg8y9H490XoAzf%2Bt3jISJzz7nqIYgGFKLSt9OBBxpMzw%2FipIQYac3ly2C5EyhXegZ%2FbB01piB8Z&X-Amz-Signature=0a355bcdde4f9fa746c6abb6472a01ded22f4e727a1768aec092244d5132faf0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZC7JOMH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtyE9Stixj9HhzKuG77tIZLVNeBxBCKoe1yE1QHew6AAiEApDl8pxP%2BgyGPkABPo0erMmjkghxaUzuQGvr9w4fxeHUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6xVVCAOtnbLhqCySrcAwNmmeSR05liNeUxPtk%2BbMVmNkFMPKmHeXrods26gWFP2NkzB4cYdaKCQ2rNIk4qaC%2F3mA3RhTosOzcRV9mM0j8CpXIZFDLlhh0DL78IiX45q6%2BnUipZhTc1kEmjAs3EIi6OPIlBVmkb%2FPIH0ulD3RDKbJopJHjwEegJqn%2FwTXI9dsno5j9OMJl35YQ%2Fk77DODkZmaZc2LTpzQM060S5L%2FL4s7x14B74ZvSD%2FoIT%2BgG0kQpmGkx82iKFKfx1mWUt1ZorlCnX3lLjaZDgxR9tWwu5bzoFFPg8wL76lhrE%2BKgoNoX%2FsA6DrRnBpt6M0xrrAmvfHS%2BNaI532PzdAnQBQthsqBc%2FJ7xKFg0iYb3HrHw4g29Mdy9sRYVyc6K9xwHR7uWKnph9KnCrsQL9k5SnEC3SWAc7S6hEeVFENu7NN6OR%2BNUv2lgGO%2Fw5HLU3NEO6Lc6jiT4GxySXwgN2PCwUin7N66MvoVFXuZVFoqRJXUZVxH1BjTvjHIXwZFnNeYy2vgaesh13zyQxP2427WaS9uhhM7UQYy2BPVoZaZ7XDmISGnJedwwjh4G3NTYzL3F2NfBf6oYVRkYFByZGs%2BF3xBLdBrw3gkNWSvN1ZfWFyWkK55yNEjJ7U2m%2BQF6fMKf8jMAGOqUBQAEV7GFRmzLrjxG%2F16i9cIn1O%2FZLfe%2FEgprR7Sg6vx0ZIInBPMspLF%2BZhXX68c1Jk5EGQAL9kA0TaHM1qzYfBFfm172xZKxHnqtx44mz%2FdV%2F1Io86xnaG1ilIXEDVmhVl%2B7vsOhbQWLQgqIlcJ4h%2FA%2BQvFSYjHVd4Ai7kufVS%2F8%2BZtXhUG4AKkOHt3YCpg2T3INvK1pQxMoEcSU5r%2FegUJ%2BPevHq&X-Amz-Signature=e3467506cffa4b080b94b5a30e6eead6d9bc9247e440892d9029c90a54c09407&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YENV6C3X%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKxBSmMOtowN4de8GPt039io%2FwnPntu2khTY5vqGKuVgIhALMqPr%2F%2FEqmgU3pcSWcwaXmJvJdbERP9E2sGCmmJih3XKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7%2FO79oIOYjdNU5uEq3APyZ1XdG8RGg6YVZ%2Bofq%2BmWE30GB9Whkv9qu01Em%2FhiD5W7Z9tOkr38UdfGnP%2B839fZjLhmGvb0wiKVlvrEvwzg2R%2BdnRTS6oGo%2FXeRtp%2FcDBSBQsH%2BnrV9EEF0wX%2FZE60mV7PL6vGy7s0wLUV%2FBh1MNxHD%2BDk6W0iuWgtD2dLSNA31GYTENfJDuKTXCGvr8smiOPvts9ZCUwMXvfPRf5zdO20TPFAGn84wRhxVqok1wi1%2FJmb%2BsT%2BtA3RkJFNSdARKRNz%2BDHug24BL1wwXJsOCEl7Sg4ppuN0OKumfWvOqVz91k%2B%2FI6UhRz0Kzgi2mAp4nBm91o%2FZsNUSvdRf%2B5ZjX%2BacXnIqkDeWKI2CFoxd2QNWYcCCD4SLnAhdQmbkV0jjevTxbkAevh5aNdjQ0%2B4ypoDEuxcBw6Oc1zJkabc2e%2BaJWbLsZZm2dAOlXf8DkP7kkoVpt2DFnasxTLyXy%2BSiKabqyuqnuQ%2BrdmR1ZRcE7BFfjo4lGdJqZPFjBg9K8tLSmcwF4XCVWPMPQw1htqfr3xL06tGzu6b3XHuNgXfgZ7oUfdjG4gwXeu2czaed2uX1j0%2Bd9qafbgf9LtlXtU16FzjNW48V0nkByJgIKp%2FEYwZKSFJHKwCfvmA3nIjD7%2B4zABjqkAaj6LnLiaZc96lDN02LyuqigjV9Zo436891ICFH3c%2FZbEthY6z6qKlN8sixGlEuyhtudVk0XSZTC%2FcuZ2WX6vSdNh%2Fgpyvuj%2FIKnaKFjN7y7HCWzE1kIQ%2FtZMDxzfeKunP9N1LpjR8KaM%2BwI3W9KRSTYR63lpwzrMT6Mssi%2Bxk5%2BDUWCLm0VUVpU5F2sxNjQ0Y9YjdcId8Nxsf8X3c8K5%2FcCOUAU&X-Amz-Signature=f1b1c7f78f35b2afdef839f1c61145e8646fb3fa654ad325146d2d4a7e96d950&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCE6H3D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDCZ7dW6Z7sN1SJ7t5kiqUaMnVfWdQaoB8LqWAOclHA%2BgIhAJPVY%2FojOYvSt%2FO4MGQMqyB1wWWgcUnXuEBGg%2FCeb3HmKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rziE00OIbQnoUXcq3APXvDISgw6Dl9NIff5TIVLu5%2F1rzOtFOyYwsQEjQZCf%2BI4CBKNCM1LbiB%2Bd8os%2Fgkv7w1XMfpV4WfOBGs15aOfE19z3v7W9wyDHOqhiciLgYL6YP5FvhRLcnLAB%2BnuZYf8qRjDWvPyiGAGo8dBnJLJOSXNB4i0%2Bx0vnoGr0xFrAFvvFkOx39ltuSeKKSRYl5pYqQ8mnjDt5JgfQ%2FHBOwEiUcKNJh5k1GQjqjxK1rUWRkclYS99fW2cj0FVjnImPnKmZhIyHRpRqbB7R66XCpba8cDW7moqVNirsQ%2BeAopdULTTDYDTK1XaJr9aQoPbtPmyL0h%2FP9gHCBcoh88%2BL1wuWbKzb%2F1r8sEcEYp0RNhEzyAf%2FCM6DOJar%2B9vGAirf7sdbrsL1PlR0k93FQWo%2B7B78M7NJrSzly0oMbASJMKp5tx09OKcmXdqJCN3RK0K87sh1Ai1DBsVkX5v12POypAxotceY0ZKEJvpDXR7gGDWfDd0HXvq1b101u2KxxpyHxMJHr8rWIuySX9VWazLoUfZrG1rwpGcFw%2FSMf2I9t1I%2FOW4MD8gBBY69gYyUSNa0T9cD6a9UwWo9m760M%2Fz0Kr%2BTEleCWJVhm%2Bku9MjaecK%2B2KmqsLnKpl%2FIS3PG8DDZs43ABjqkASgG7xZEOhkxAvSA7d6jomtss8ywHRihbEDNKT18FV0cv20y6ofrheLCUEEZwXFkg3G0TadwNHBxlovlPo8gQqAXeQrnFs68PGBqf%2FCqI2H2rJ89uNFeHeNi3pxhPlDD42RaweC2ownWzM3HYrg8y9H490XoAzf%2Bt3jISJzz7nqIYgGFKLSt9OBBxpMzw%2FipIQYac3ly2C5EyhXegZ%2FbB01piB8Z&X-Amz-Signature=ce9b5bda9614b38aaba83be42b1318fc69ab5f268daba9ca53c65770cd3d9081&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
