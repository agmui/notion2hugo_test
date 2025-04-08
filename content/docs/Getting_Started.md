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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3P6IWM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxHLd%2BaaPlKVqupLr9R2ev5n4xZC%2FgcpKbkWipdOwocwIhAKzYxLeSqiTEddH1eHwUpFZuIQoRomqCE161CPCY%2FMlfKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2BGUeVXGSnyrDF%2Bbgq3AOSDaZxGNlqrPbw07tgNHwczDZM1F%2FYB2ajr7L1uv%2Fi4qMUbzG2f1g%2Bx0KpWthRhwhRhAYcQDEbTAC9%2Fk0wcODxGSYulMR3CKHE1LqPQoArv8F%2B8KqgOPRCGmERlFDeeRltsUHX3OTsiEPaOyJmZen%2BZaqVYdpjDlGteGwnO9LRS97h%2FU8STl7Q2gn2oiVnNhOuzxrMJCfJiMxoQvxudKhTfcoYi%2Fp4AGQV%2BGvWCGrKMbemMis%2B5NmVH7vQ23uCDdRT7q3tFjwkm%2BMqowLUWTlFuTvzGM5JfxSR26oCoazrpagGgqByP3biGabMVAby6T6bKotmHq6aECG4DkUI8eTgIvIgFS43RUWmL6jS%2BOdBbnaj60ZzXVZFwbTojerSo%2BMXE%2FDRFpnL2JCbvwkS%2B%2Fbhp9YLo4I6bV92gT92TDrWVCmDptWfN9rdhWqgqCO1uVMoJF80zgX5yCZ%2F6O924xEo5LC7a9lVznHMqnrzRnMGmyBhHCkbBFRl%2Bo4mpaZlZ5ODY6n3h%2BFiI1b7wV%2FFtmoqodgfEAtkyiWsSidIJz6ntZsbFaZuags159rEcBaqMb5dOYXncxRQTYKV4n4vf5Ua1WYjLpIZXacqvzCmzCF3vKf77rjHpSKPvnGTzjDwhdO%2FBjqkAXoQ%2BVUNOa%2B7FVd6YvJRREe54wmgoFjj07xZ6lZAeBiJVYOUp3ooyp6USH2BSjc9Ux8XR3wslhswrOUB8VM9Uc20GiPAHNwU2E5X8LAdJsUNkfq1EppoVZ32LVQxtCPOD6dwLcn0KTZf9kBVNcuaHGT8bNIftxEpF8z%2Bqe9GbNTqbJIocNaBHlJwI6AltMzGY%2BDm%2FJNopJLT6yni1%2BQOS9dCtrof&X-Amz-Signature=660f882a169cfcbc69438cf2db54f816baa1c17fcd482ed702f52f48169a3420&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3P6IWM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxHLd%2BaaPlKVqupLr9R2ev5n4xZC%2FgcpKbkWipdOwocwIhAKzYxLeSqiTEddH1eHwUpFZuIQoRomqCE161CPCY%2FMlfKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2BGUeVXGSnyrDF%2Bbgq3AOSDaZxGNlqrPbw07tgNHwczDZM1F%2FYB2ajr7L1uv%2Fi4qMUbzG2f1g%2Bx0KpWthRhwhRhAYcQDEbTAC9%2Fk0wcODxGSYulMR3CKHE1LqPQoArv8F%2B8KqgOPRCGmERlFDeeRltsUHX3OTsiEPaOyJmZen%2BZaqVYdpjDlGteGwnO9LRS97h%2FU8STl7Q2gn2oiVnNhOuzxrMJCfJiMxoQvxudKhTfcoYi%2Fp4AGQV%2BGvWCGrKMbemMis%2B5NmVH7vQ23uCDdRT7q3tFjwkm%2BMqowLUWTlFuTvzGM5JfxSR26oCoazrpagGgqByP3biGabMVAby6T6bKotmHq6aECG4DkUI8eTgIvIgFS43RUWmL6jS%2BOdBbnaj60ZzXVZFwbTojerSo%2BMXE%2FDRFpnL2JCbvwkS%2B%2Fbhp9YLo4I6bV92gT92TDrWVCmDptWfN9rdhWqgqCO1uVMoJF80zgX5yCZ%2F6O924xEo5LC7a9lVznHMqnrzRnMGmyBhHCkbBFRl%2Bo4mpaZlZ5ODY6n3h%2BFiI1b7wV%2FFtmoqodgfEAtkyiWsSidIJz6ntZsbFaZuags159rEcBaqMb5dOYXncxRQTYKV4n4vf5Ua1WYjLpIZXacqvzCmzCF3vKf77rjHpSKPvnGTzjDwhdO%2FBjqkAXoQ%2BVUNOa%2B7FVd6YvJRREe54wmgoFjj07xZ6lZAeBiJVYOUp3ooyp6USH2BSjc9Ux8XR3wslhswrOUB8VM9Uc20GiPAHNwU2E5X8LAdJsUNkfq1EppoVZ32LVQxtCPOD6dwLcn0KTZf9kBVNcuaHGT8bNIftxEpF8z%2Bqe9GbNTqbJIocNaBHlJwI6AltMzGY%2BDm%2FJNopJLT6yni1%2BQOS9dCtrof&X-Amz-Signature=f85e14a57396f2151b55be893b61fdf466318be7be2c79e0bf4106ac6e8a5198&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLGXKYZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAEm4KPhxNR7yt%2BgxxnFrmoWqHO3j7dbUoHA1wfs8dfgIhAItSb03lW90B8ykZvy8R2VanM%2B9MWLXEM1tfdJ3jV1VDKv8DCHAQABoMNjM3NDIzMTgzODA1IgzNR7JzqENrfJ%2BcFtwq3AMzACuUSoWaExflT1fCA16FC%2FW6GIk%2FuLDWErg22KDv%2FqeygVni%2Bfhl1QI%2B%2BrA3acPt4UlDzZ7p4cyzx6%2BA2y4AtfOtt24PUDZZh%2BELigSshU1v8TDjMS3x9iGfzK4zE7qAHP4VFftnlLvu873yoefR73EMtf9X1mnFyENpdNjhy%2BNBu3vP%2FXMIfcpatY5DU1z%2BcWAfi29u564awexhDAOPfurhJXJPQmT9%2F3o8gL0YnQAKXsnFwAUGy%2B48nNFYzLxn0UFrrHOV%2Bl%2BGynCwFYAcj%2FSXf1zna3oHzoj7rD3GZcPVYmME8DmkeEpjNlqhE19HidzmjgR8rQLSKdq%2BAQO1PSOVQ0kZdr5xE74xgD3Xva8FSsk%2FE6kGKxJNrDdgFt6HraNrDjcpZT1M7A24uFbTQGrtKb%2Bu7mVEjDPh7et32V9XoIJv6PV4fysdluPFxH1DIbYDAYmeeAfYJ3PiLSHTDLgqydBPCbT654jCKSeGfwhjKLUrNUHaWWFTWl%2FNrsfyh7LRJKFd4SqZHhr%2B0p3tXmDuhJ%2BYLWD%2FCUHn%2BHZcBTAaC%2F4jva4POKcbLf0E%2FCU5IAv1Sk89xJ7pZQ5CV%2BTkXzLnzlDtlcUVEHBGi0LFOXfkkqiuOT63Fu7sjjC6hdO%2FBjqkAVOpKyQofHwDj3imng3JYOmLsZ0m%2Fi%2F9izdrjjvu6x17QT4J3YhCkL%2FICWyXDYzT5tOHABC509tQz4cU3nmmSoYFE1RkwjRJ%2FUGkcAzy0%2FH4a0ty26m5zfcF5Qjc%2BemAZWSlfB00zLX4fMxc1EWg0eKaBfrWbl%2BBNmfu%2BXgFSWQyQ9stNLQEeGqjec4054hko3vCZCEmHrF3aPI%2BGn6cd72D302M&X-Amz-Signature=50f6d8ed044655b162a7c8cb89927d877cd08c74f53bba366348ecc32707c3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNIBP7XJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv9FLNA9x0wPoBS1xr0JWE59T0OABv4iY8C7JOWR%2B2KwIgepnDq05%2BaxGrdnr5irBmT0QsDH%2B9FcHznYuK8RVbtv4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEBCKYunXQRCgYCDmyrcA6%2F8PEK199UenOPEneKxRZHApMmtXGpQ4jPY2mpu4hJkT6reexk0Iaa3QyBAanaYIzLJ295LYsbWxWICjCoJ7uc5PC4nw27ZlcQMOzmq4tyzPKdt%2BIJS2%2B9cd%2B9xa7i5l1J8%2BsjABwP21YsKcrUFEG5Nw38i12tYxNhjo1VSWzP7HwAlB2O7lBOFJ%2FR8dM%2BqLXXX7VuQfNbMOacEwgGbBjBJeUI1RiW3TS3xHFM4eXIRNX9oYFlDUAnRy8xGMpjCjaoLfR%2B3k5ccn6rba7wmqay%2BkaErRUd%2FmoNL89kSlLWOmqVuZd4iQkRT%2BDOC5GxGKZxEAI5wa96bdlihKyC5qPMf0zPEn1K4Ye0bQ38GWShOg6oUo8fr2tFBJDdGjuy15WLoLMFRdGGnKOnnKHoi%2FgDdHu2ojS2bItbQ2XwXcg6nL3DI1JdUrYHqf9mnYHQPIwNca%2FZ7FSwqpLcis%2Bu37x39X%2FY9MHrQ6YQ397NW2hrEIFX%2Bj4xM4PMr4ERIvH%2F0irjzeeirYAqpPsARIYNbWLjSuknAsNhe8MIg%2BjPWHNAhzh7ygQVNMb%2Bj1KrRALh6Nr4%2FJg9Srv4oBxQG3iiqa6YD8mg46cnFNw8iMIaW9YE97fF1LxtpLAhucw6OMLmF078GOqUBa%2FnHOSu04%2BTydSPeuuF7hHZ5H%2BMtKLC6ksJDj%2FaGezbHMNXvreiy8Q6BQhQ9iV9d6biEE3LgEvvakEUDuHh%2F5CdpZUBb7mVVGGdY5UdySRYehEQeOoqTwzEo07yH957dJq1AxmuuzvhGsO5jcjUxWPvxYDWGQsF8NKRgemfSuc1WL577e0ynWieqbCz0WUKzLjqQomPhiNfPt1VUbpXiLtJ18WBQ&X-Amz-Signature=1790cbe53fb288b7fcd198203e59714709f7ffcbc5b71eea9e3200274c2a8c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3P6IWM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxHLd%2BaaPlKVqupLr9R2ev5n4xZC%2FgcpKbkWipdOwocwIhAKzYxLeSqiTEddH1eHwUpFZuIQoRomqCE161CPCY%2FMlfKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2BGUeVXGSnyrDF%2Bbgq3AOSDaZxGNlqrPbw07tgNHwczDZM1F%2FYB2ajr7L1uv%2Fi4qMUbzG2f1g%2Bx0KpWthRhwhRhAYcQDEbTAC9%2Fk0wcODxGSYulMR3CKHE1LqPQoArv8F%2B8KqgOPRCGmERlFDeeRltsUHX3OTsiEPaOyJmZen%2BZaqVYdpjDlGteGwnO9LRS97h%2FU8STl7Q2gn2oiVnNhOuzxrMJCfJiMxoQvxudKhTfcoYi%2Fp4AGQV%2BGvWCGrKMbemMis%2B5NmVH7vQ23uCDdRT7q3tFjwkm%2BMqowLUWTlFuTvzGM5JfxSR26oCoazrpagGgqByP3biGabMVAby6T6bKotmHq6aECG4DkUI8eTgIvIgFS43RUWmL6jS%2BOdBbnaj60ZzXVZFwbTojerSo%2BMXE%2FDRFpnL2JCbvwkS%2B%2Fbhp9YLo4I6bV92gT92TDrWVCmDptWfN9rdhWqgqCO1uVMoJF80zgX5yCZ%2F6O924xEo5LC7a9lVznHMqnrzRnMGmyBhHCkbBFRl%2Bo4mpaZlZ5ODY6n3h%2BFiI1b7wV%2FFtmoqodgfEAtkyiWsSidIJz6ntZsbFaZuags159rEcBaqMb5dOYXncxRQTYKV4n4vf5Ua1WYjLpIZXacqvzCmzCF3vKf77rjHpSKPvnGTzjDwhdO%2FBjqkAXoQ%2BVUNOa%2B7FVd6YvJRREe54wmgoFjj07xZ6lZAeBiJVYOUp3ooyp6USH2BSjc9Ux8XR3wslhswrOUB8VM9Uc20GiPAHNwU2E5X8LAdJsUNkfq1EppoVZ32LVQxtCPOD6dwLcn0KTZf9kBVNcuaHGT8bNIftxEpF8z%2Bqe9GbNTqbJIocNaBHlJwI6AltMzGY%2BDm%2FJNopJLT6yni1%2BQOS9dCtrof&X-Amz-Signature=3ad7ad51de4d3ec77ce09f1073674e3c93a710d8287172dca85c5a020452c8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
