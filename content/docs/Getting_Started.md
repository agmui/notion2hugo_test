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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPS76O64%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDuQEioJVhv2P1rcdLD%2BBJhKCb5iYRQt%2BvRUd2wSkLVnAiBcIH2myYijEu69%2BSVSssX8Rrrc3IFHD%2BiLNfqbx3nfwCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqlXe4DycANatdUNOKtwDhFpEF8il2%2BoHn2LEjBm30Oy%2B%2F2mddg3rCGx8nNqKHNg9HAtTJGXM1%2Brc6pGKE%2FRbKftgBCcOYqqyv6wsGG0HbWz1%2BkFyFM12mabEpeaiYyeYNLCWRsmIysz8C5Pu4mMqUF2aD3nQ5HP%2BoQ0XUOLdtNqgx8G7EyB1D5oc47A2CI0S4ORkfmfjPoW%2Bi9v8t8gSMsdNWgBJELVEPXCeinzvrIyVLLOFSQwPQ7o422NACIwt9CC%2Bv0bTVDXw4OozCuginkk7eha3Jajc5qiUL6HBcKvuEzbX0wn2LqXUvhpzaIOyktXCQVy1Z30Qq%2FIjNY9fMsOwVcZlQd%2B2GaAQ5IMgvZzG6AChem4UWrzxKlCO6tYDZ3WTPJedmYZLHNMk%2F%2BuNnW629ILU%2FIsB3GJQf%2FWbw1lfC%2BjkxoGK8yq1yHg5TQ8mBl9hFGUd0cQ2GB0k%2FpxTkmj2ToEGSGTqXS8jehpbfvDOS7OiwQhz%2FOsjPkoP4KII%2BqHe3hMr1ImAQ9BU7ErYq516RpllM7AClvBp07IV0IOZwAQV6v9geuk3vuaVlIJYAXUs7%2FtwHveyMe%2BsTAb0SA8I3WbXsmh3v18yHZd5582s4q7W4XiepkDIQmNd24Kt3rEO5WxVt0YRQPIw%2B8OTwAY6pgHDvK2QkZ%2F1WEFQpDdFQB4tzNB6m8MShYqK6rYilL7Jdr%2FSZQGEeUB%2B6ZuKdmepyr6HdAy%2B5aQjXiBssUmBqY0aBA8K7DWl4LBNQxjxazxSUCMNcKdV%2Bt4Mp5C5h5dU8fieta%2FPvaUVon4sRMzAWtOHSmHAvtNaqaYCs3RguzADwRxs6dfeEHSrhVvp6dSy5o80HfCtscElQZGvgegDA0rv%2FFO2muH0&X-Amz-Signature=653702df341d6e6739424b015046070ac8dbffa2f07128d3c3d1849415a80c23&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPS76O64%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDuQEioJVhv2P1rcdLD%2BBJhKCb5iYRQt%2BvRUd2wSkLVnAiBcIH2myYijEu69%2BSVSssX8Rrrc3IFHD%2BiLNfqbx3nfwCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqlXe4DycANatdUNOKtwDhFpEF8il2%2BoHn2LEjBm30Oy%2B%2F2mddg3rCGx8nNqKHNg9HAtTJGXM1%2Brc6pGKE%2FRbKftgBCcOYqqyv6wsGG0HbWz1%2BkFyFM12mabEpeaiYyeYNLCWRsmIysz8C5Pu4mMqUF2aD3nQ5HP%2BoQ0XUOLdtNqgx8G7EyB1D5oc47A2CI0S4ORkfmfjPoW%2Bi9v8t8gSMsdNWgBJELVEPXCeinzvrIyVLLOFSQwPQ7o422NACIwt9CC%2Bv0bTVDXw4OozCuginkk7eha3Jajc5qiUL6HBcKvuEzbX0wn2LqXUvhpzaIOyktXCQVy1Z30Qq%2FIjNY9fMsOwVcZlQd%2B2GaAQ5IMgvZzG6AChem4UWrzxKlCO6tYDZ3WTPJedmYZLHNMk%2F%2BuNnW629ILU%2FIsB3GJQf%2FWbw1lfC%2BjkxoGK8yq1yHg5TQ8mBl9hFGUd0cQ2GB0k%2FpxTkmj2ToEGSGTqXS8jehpbfvDOS7OiwQhz%2FOsjPkoP4KII%2BqHe3hMr1ImAQ9BU7ErYq516RpllM7AClvBp07IV0IOZwAQV6v9geuk3vuaVlIJYAXUs7%2FtwHveyMe%2BsTAb0SA8I3WbXsmh3v18yHZd5582s4q7W4XiepkDIQmNd24Kt3rEO5WxVt0YRQPIw%2B8OTwAY6pgHDvK2QkZ%2F1WEFQpDdFQB4tzNB6m8MShYqK6rYilL7Jdr%2FSZQGEeUB%2B6ZuKdmepyr6HdAy%2B5aQjXiBssUmBqY0aBA8K7DWl4LBNQxjxazxSUCMNcKdV%2Bt4Mp5C5h5dU8fieta%2FPvaUVon4sRMzAWtOHSmHAvtNaqaYCs3RguzADwRxs6dfeEHSrhVvp6dSy5o80HfCtscElQZGvgegDA0rv%2FFO2muH0&X-Amz-Signature=677d81445699dd063243192dd4da2136a8b25eed0bdda6b5f958d8cf967d6013&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC7AAB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIB2Jmmij4ttUJMR7KJoV9P2seFMi7tQKzXjLaEgzb%2FGlAiEAtw%2B%2FSH3qdeXCe6Od6uSrdM%2B7YElERLytqPYPgF3Dx1kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8zSBT9iGGuR2SbrircA4KiL5klzLfBIbBTKQUBV4axNpz8J5Y0wNPqax3WNd3DWJsuPkiC29JMDM9x7%2F%2BHmpVKNUoYk%2BMAs9Kjt%2Bnykd%2F5s%2Fo2LW4cTPdv5d8zJb1XfQFIToUgJ8h5JBKLLrHRwm6Y%2FstbaWnQ%2FJfhwrEiLjLpGwTOHE8L2j9DRc8l2EVZnetsBU8uSuab2XR3nHlwWNTLtkHm85si9GdyN48enYLA9lBZ7DI%2FnTezJ8sNJDtnCdu3ysHQ5DGfUS6tsWGsTNntRQ3JLyTNsHryFHw4P3Wv5ssE8HcMMxxMcrZmbRNXMJfQ6W%2BIvXyJtpJoW7eSd3kr9YU58XZMF9PDHPOzf94QzxhrjX982dRLVPpK0udFXpOLmEwRcDpTVNzUxUe7ZtQQeLfKHK%2ByuJS33XnurrbCI4BPJ27MwNqr90S7QZIdap93ptS9NrRsEEpvXC3c22JUPsTOfJsrfowmeSjZNMW9YqUDzKd7fBY83u%2FACllLJEKS1K9cumlGAj4fr9O%2FC3x7s7YeGvtX8OfHtUL1JTX%2FbhMCQwI7kzyGCRyk9wJYV16jCLqi87xRJHLM2ZDgdD9vKTb62RsyH3sjCVB7RG2yhmyiXKMKiSmtA3eNUP7KshwLaVdF65bXE8vYMKrGk8AGOqUBMRH7ndp22Z5aKJlWQ1CjrYthXCCa4T8inyl32vwI4tQjWAfnO%2B7k6qbteWc9RZKQqQnGjeTtSYcfWnS499Il4XCn%2BN%2BFuwOUE07Pw0olm7%2FwbVb06DOnayURKnf9iDPKaR5y0OL13APeP0Xr1Qh1tbWCJo9yeEyrGqZJvz7%2B3CMf5%2BqO4oPk3ult9g%2FtCG8%2FYSdPZ8Y3c43Oe%2BGiOYH8DMkuF8ve&X-Amz-Signature=55209f308a465347b3c8692e5422d839120ca33670d0c6456e14062049170efa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XJKYC5R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICpqAVNKVjGJTwVWPIe2akfm%2FTjU8A5brzd%2BegVSiOrxAiEAhueqOLE5tz0tR%2B22Er3cZsqolhp3dBVmR9kfkt0vCZcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzj%2FLgaLMS0h3zM9SrcA1WZKyjQjDE5ol%2B2sRtcJY8Wu9dIx4yKvjI5taDNuATFZrb1xGG4%2BNe%2B10SnTnrpmMRStd92eTRYKY61ohzVpSTl2BiHXMrtO77vcuhqanJDc1kBJvwcu%2FMLUsnqlKT7Oq2DIDVDpe8PieFWuHmIz%2FmC8tensLbZIrhvN8f1s04YwyyZiP4g8NYpCqZX84MPfHnkeEr2j7b6bR9sU6T7P6HRm2RxWoZ1wGCb6F2Qa3h61yNkUG7crCPusMKnnFx3Y9HPk9dlfxmjv5qvUehCDF0KY4vRlHpk1lPQVeuN%2BH3oCbp3rjmwLO5tNbrc%2FuIQXuwwssDq6xIVpaV%2FmrXsPfCo9xYfLdgDXPCE8Fh9bJIjEn9pvv920iERpF%2BaRiMoeVj1qUfaLSmXT6Rb9wIC7pV6YkXtE1BJtB1l7IjyxXbYTfdkSm14iZ4dzXWgw2x1vy4MT5OTB%2Blij0gAB9%2FoSDuVqiIWqc3HvCw8KB6w5nR157YSebx1%2FqORb9Xx6TPTUvXN0LMPSQw5O0sppkU6TI5rqReUB24UJAJEy8PsAIr7XssU9EYucqNl1PkEESLxCwLf20FQFFqRKXxfqcIkLlXeHbT5OnYLsAoY45w%2BBu6MvW%2BKsRNbykXDvx%2B1MIbtk8AGOqUBxW9QGfOhPG7Brc9x2KoHBVaprMpc1H6TVjRLJ6ddihsfQE8WuUidiy4O3bDhCqqdWlpU5XaBiSYf8uvuB%2BYrvkpJY8wpJ2faFAc9oJWFfVMhg%2B7bI5GjVHpu23Db%2FRs20LGs5qQNo8ilesCqsEG3fFze4hvWwKCkyMJ4v3w1er9Tq4eHVts5AjfaU44xi1eiDUtd3sihW68c8EO1X72nhsejfriu&X-Amz-Signature=5053f79c0fe45e7c57e66b20ebc81d50928d9c231c2b01f299adb8f0d3f70506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPS76O64%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDuQEioJVhv2P1rcdLD%2BBJhKCb5iYRQt%2BvRUd2wSkLVnAiBcIH2myYijEu69%2BSVSssX8Rrrc3IFHD%2BiLNfqbx3nfwCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqlXe4DycANatdUNOKtwDhFpEF8il2%2BoHn2LEjBm30Oy%2B%2F2mddg3rCGx8nNqKHNg9HAtTJGXM1%2Brc6pGKE%2FRbKftgBCcOYqqyv6wsGG0HbWz1%2BkFyFM12mabEpeaiYyeYNLCWRsmIysz8C5Pu4mMqUF2aD3nQ5HP%2BoQ0XUOLdtNqgx8G7EyB1D5oc47A2CI0S4ORkfmfjPoW%2Bi9v8t8gSMsdNWgBJELVEPXCeinzvrIyVLLOFSQwPQ7o422NACIwt9CC%2Bv0bTVDXw4OozCuginkk7eha3Jajc5qiUL6HBcKvuEzbX0wn2LqXUvhpzaIOyktXCQVy1Z30Qq%2FIjNY9fMsOwVcZlQd%2B2GaAQ5IMgvZzG6AChem4UWrzxKlCO6tYDZ3WTPJedmYZLHNMk%2F%2BuNnW629ILU%2FIsB3GJQf%2FWbw1lfC%2BjkxoGK8yq1yHg5TQ8mBl9hFGUd0cQ2GB0k%2FpxTkmj2ToEGSGTqXS8jehpbfvDOS7OiwQhz%2FOsjPkoP4KII%2BqHe3hMr1ImAQ9BU7ErYq516RpllM7AClvBp07IV0IOZwAQV6v9geuk3vuaVlIJYAXUs7%2FtwHveyMe%2BsTAb0SA8I3WbXsmh3v18yHZd5582s4q7W4XiepkDIQmNd24Kt3rEO5WxVt0YRQPIw%2B8OTwAY6pgHDvK2QkZ%2F1WEFQpDdFQB4tzNB6m8MShYqK6rYilL7Jdr%2FSZQGEeUB%2B6ZuKdmepyr6HdAy%2B5aQjXiBssUmBqY0aBA8K7DWl4LBNQxjxazxSUCMNcKdV%2Bt4Mp5C5h5dU8fieta%2FPvaUVon4sRMzAWtOHSmHAvtNaqaYCs3RguzADwRxs6dfeEHSrhVvp6dSy5o80HfCtscElQZGvgegDA0rv%2FFO2muH0&X-Amz-Signature=0ba18ef4285ef11f191c2c7eaa276b9744f61e07aec757d33bbbba16e7a30c12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
