---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7C4IWY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGXvhN5iJEAznTQXgjCsOPJMRANPEnjPla6l8o0XGKB%2FAiBMm6LCQXHB2geVmlA1oCMiqRegAav3DiFxAX3ai2%2B30Sr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM0BkjatIkA6wvP0%2BVKtwD72H16PCEv72KxUlFMoUS8nd8AYaCLb0YV9MEMuRiPldejg5aSXr8Rc9lFSJc2UC6KuRYTKNtT2j1uHsTI97zpuuno%2B8NXcL68aE4%2BmrZpkwJVf3YmHsyRk7PZ%2BC%2F1ccC1l9aMpBaS1IW%2Fwcr84hbssNeAXlw5%2Fx7spd8DBzKxM7pKbdQTyquZ8duVbLP3Ml2oSbgu%2F9dyvPsXJkpIwvSQM6WJSuc%2Bv74JCs36X7V5%2FNNmp%2BwXHFqnjHsj6l25eQ7wkNJdwdbYXY0jYgcuXci0WcGOdG0uTsATJtnG%2B1ttL5xN%2F5%2FTmVKEXe4wuhbwjeMFB1QA7XSsiG%2BVe%2BamPKQhsN51XFNnMG%2FlWTtVFiFS8C%2B7BEtb2sMm7ckh0OIaGLHhq64iUGuex6mqrZZnz3FIhsDOJCijzhWpr5jcnpB849d1zH9sFDnAxuwVTRKnr51q5pPDBi2Nr8F%2Bs1E2njShQ9%2FivmwIO8CfOo5W6OejIt862rD5P6GxaQGx%2F%2B3NbkQmxD7UL4R6ASTdxRwQTyiGxIpQwO%2FcmUtc6n3C0g7nXqZ8OaStfoEY80%2FEYfw6Q8xz62nU1WD3gadS11CwGLxT7Tx40ifu86deUAqRSr%2FjSw15xqCY7tWnzGQ0tgwiv%2B9wgY6pgEhNXpBTWGnYns3qr05toxh8PQVipiQIi6WiJNbcLXovtbtHJvrruwZRF5U%2B%2FH3AIem0B0gNujB81xvTCwu4r1WItPzWXU4cKgQzvaXCwcW3vh8OfnVshDINCWDH5V0CNeJXE8XuSXDgrJw4jUnJj6MsToh7HHcpbkeQloxux3xYlYPTdMFN8nsBJdPO%2FsU%2BqZ7ZkkSqV6Z2ly659rZLtnCx3Jz%2FuPs&X-Amz-Signature=e28d2a84a01742863b805875301f5416797686ec458a92bc1a913a88ca75d0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7C4IWY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGXvhN5iJEAznTQXgjCsOPJMRANPEnjPla6l8o0XGKB%2FAiBMm6LCQXHB2geVmlA1oCMiqRegAav3DiFxAX3ai2%2B30Sr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM0BkjatIkA6wvP0%2BVKtwD72H16PCEv72KxUlFMoUS8nd8AYaCLb0YV9MEMuRiPldejg5aSXr8Rc9lFSJc2UC6KuRYTKNtT2j1uHsTI97zpuuno%2B8NXcL68aE4%2BmrZpkwJVf3YmHsyRk7PZ%2BC%2F1ccC1l9aMpBaS1IW%2Fwcr84hbssNeAXlw5%2Fx7spd8DBzKxM7pKbdQTyquZ8duVbLP3Ml2oSbgu%2F9dyvPsXJkpIwvSQM6WJSuc%2Bv74JCs36X7V5%2FNNmp%2BwXHFqnjHsj6l25eQ7wkNJdwdbYXY0jYgcuXci0WcGOdG0uTsATJtnG%2B1ttL5xN%2F5%2FTmVKEXe4wuhbwjeMFB1QA7XSsiG%2BVe%2BamPKQhsN51XFNnMG%2FlWTtVFiFS8C%2B7BEtb2sMm7ckh0OIaGLHhq64iUGuex6mqrZZnz3FIhsDOJCijzhWpr5jcnpB849d1zH9sFDnAxuwVTRKnr51q5pPDBi2Nr8F%2Bs1E2njShQ9%2FivmwIO8CfOo5W6OejIt862rD5P6GxaQGx%2F%2B3NbkQmxD7UL4R6ASTdxRwQTyiGxIpQwO%2FcmUtc6n3C0g7nXqZ8OaStfoEY80%2FEYfw6Q8xz62nU1WD3gadS11CwGLxT7Tx40ifu86deUAqRSr%2FjSw15xqCY7tWnzGQ0tgwiv%2B9wgY6pgEhNXpBTWGnYns3qr05toxh8PQVipiQIi6WiJNbcLXovtbtHJvrruwZRF5U%2B%2FH3AIem0B0gNujB81xvTCwu4r1WItPzWXU4cKgQzvaXCwcW3vh8OfnVshDINCWDH5V0CNeJXE8XuSXDgrJw4jUnJj6MsToh7HHcpbkeQloxux3xYlYPTdMFN8nsBJdPO%2FsU%2BqZ7ZkkSqV6Z2ly659rZLtnCx3Jz%2FuPs&X-Amz-Signature=1dad3c39de5b5964fb0672ad2ee08755ed0c24914b3d98dd98d430d98d0c1928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7C4IWY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGXvhN5iJEAznTQXgjCsOPJMRANPEnjPla6l8o0XGKB%2FAiBMm6LCQXHB2geVmlA1oCMiqRegAav3DiFxAX3ai2%2B30Sr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM0BkjatIkA6wvP0%2BVKtwD72H16PCEv72KxUlFMoUS8nd8AYaCLb0YV9MEMuRiPldejg5aSXr8Rc9lFSJc2UC6KuRYTKNtT2j1uHsTI97zpuuno%2B8NXcL68aE4%2BmrZpkwJVf3YmHsyRk7PZ%2BC%2F1ccC1l9aMpBaS1IW%2Fwcr84hbssNeAXlw5%2Fx7spd8DBzKxM7pKbdQTyquZ8duVbLP3Ml2oSbgu%2F9dyvPsXJkpIwvSQM6WJSuc%2Bv74JCs36X7V5%2FNNmp%2BwXHFqnjHsj6l25eQ7wkNJdwdbYXY0jYgcuXci0WcGOdG0uTsATJtnG%2B1ttL5xN%2F5%2FTmVKEXe4wuhbwjeMFB1QA7XSsiG%2BVe%2BamPKQhsN51XFNnMG%2FlWTtVFiFS8C%2B7BEtb2sMm7ckh0OIaGLHhq64iUGuex6mqrZZnz3FIhsDOJCijzhWpr5jcnpB849d1zH9sFDnAxuwVTRKnr51q5pPDBi2Nr8F%2Bs1E2njShQ9%2FivmwIO8CfOo5W6OejIt862rD5P6GxaQGx%2F%2B3NbkQmxD7UL4R6ASTdxRwQTyiGxIpQwO%2FcmUtc6n3C0g7nXqZ8OaStfoEY80%2FEYfw6Q8xz62nU1WD3gadS11CwGLxT7Tx40ifu86deUAqRSr%2FjSw15xqCY7tWnzGQ0tgwiv%2B9wgY6pgEhNXpBTWGnYns3qr05toxh8PQVipiQIi6WiJNbcLXovtbtHJvrruwZRF5U%2B%2FH3AIem0B0gNujB81xvTCwu4r1WItPzWXU4cKgQzvaXCwcW3vh8OfnVshDINCWDH5V0CNeJXE8XuSXDgrJw4jUnJj6MsToh7HHcpbkeQloxux3xYlYPTdMFN8nsBJdPO%2FsU%2BqZ7ZkkSqV6Z2ly659rZLtnCx3Jz%2FuPs&X-Amz-Signature=57286f895a45509aea1f35fe08ad89ece5cece85c2a99f83b6d4d1b39823b1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQH2ZSA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDT%2FX0qFU8iE68KQbMvbry9fCN6ddCKhdpGkwdm82DcEAIhAMwbstjOf8nSUtd2aEICt5JwMLIQ4540vl3INmT3912dKv8DCFMQABoMNjM3NDIzMTgzODA1Igw2VBWc2zeN4ResJ5Eq3ANe29IuWFpbd58h3wJYPtZrudDPuxIpxBn%2BZcKlUap3Nt%2BWn7rv1pr8c2TmCiSAk%2BNinGJwMz9ZU%2FkJN%2FsxrWXQElyv0sMqpJJRRsKINWLf8WDlQlB0bjVB56Cca5onGHJF8%2BCx6ht386MizBcvWHwF8nKNSW5T4pHwBsGqyGLn41be0eKZ5aeKw8vz5U2esL4NQNk3AZt5xApumtrRX%2F4wrcY7ZtT77Tmdev%2Bnd%2FjN2ASDWrM6nTj49XtDtW16McYxVy2JlZ%2FKQOHDjm%2BizXdzoGuG1w%2FaneI1HbkxnwImZEfgMrYsUd3KIxwlIO%2F5s1fe9Wn01vuxyzo9tkj5F8J%2BDZpIro4BloFGvNkhMamqSo9K8Ka1Mz8MTVLGv0mmxY8h3oKrQsulFXfUSZuKJhIL1ElkrWDJickNx27Jchz6A5AW0lbNfGoDdYADNtm37Lz5H5YRFHETlRZFUP0fvdlosfYMkm%2B8AlOTV8rjWTX4wIEkCMwslTWxdP4pUnWsmR%2Bk1BD44J5WxBbaFnmNJUTSYISLybKqa5m4Vs2vcMVZj%2FR56byOaW2S%2Fsbb%2BUzQnoMYcUZWTpewTTDXuA8VN5POPkYwGUxqryWLcE3VLgJ3KVCx6mWPr3WLdG41QjD2%2Fr3CBjqkAU94hjTJ8hhSjLStCxQ6eid1kzDyLxLqQQJwBTnZFTh7RcF2bUpTqmLdeGNBu3TYgk0SEdS8LOpqEviShabKFBLc%2BeI08cZDnqyXr3d9IXhZSgo09BuB4cpCfpBFKVq0WVVGV9jz1lb%2F%2BPo6NY0TVBrZQmNJRC4KoApIP1V4DiNtHHKK8LNSPCnW91tTax6t%2FLq35MQwU4Ue%2FXgT87B%2B8cx1PRbm&X-Amz-Signature=ef52cccf1e4ad074f3d7c659ee0eb4cf28cfc4f6c25bc0cc9c89cb63aa982188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QURUW47%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDeQ4446PuWRa7p%2FwikoZzanyqrSNzvqnhEedfkj7rohwIgT5TatWJ7zBnASZHTYu8MT8vjDmfQpV6tGq0GdFjBz%2Fwq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDOIa4%2FYosC6Fij1C7CrcAx0sJkHJviIhHX90sSJ%2FEmXB1z4omQYLgDSgkxGxhc5t%2BroKbwEVBRYzcDoho%2F6MghI3U%2F3i8WqL4Pyc8AO%2BG8cerqpx2NIwRVdKinsSqQMQfyAsa4eI3l%2BVT08Iihn%2FvWINMN%2BsHVJX9S%2BUROPbrfbKcCmsT7XH6ETOJQqxuTP7gZdZgF2QLyoLFUghovJ0s4rKfayxTE9mWBFR5viEm7d6vOs2oh4nWO0h3U44nXx5z0pc2WA1GNs%2F%2F16dsQUQQaTaTFIv9gZSSU53ahPxRUK1ywwBWh7cnBDhE3o1nJxvzhnQzOFMbtIYwP0YIPlMke8sMHWLmzhJxNSg6TCUXPIJR2tshCl49upRMSIJ4Zoz1zGRzUfF83GKvS9vwAn3tfq9c9xg9CD8UvNOyD7X5Fi33Lb%2F9eFJt4adsAoSgfgD8HGSJvTjZPxSgcih%2B85YFEySTnqppWVns9MiH6rLn0Y8KmpRCtBiaMBtrbC9bWCYXrQWB5xrLwzyvpF1tZ55N7fNRJHi%2BUPo4Z%2BflDqFq7SsskUuP4%2FJTzj9JWbeR2Jw%2FWWm3M6datFKAJ2YeIUVVcXmvDlPGXXAMXts24gjGn65WneE7hOtPGynPx6ohyJW84l4ISQnwmPRzfkmMIK%2FvsIGOqUB%2Bg3uUOlkszNj1%2BXRyqDwPXrN4%2F8GYyfZQHmBRa8mJMT8DVKKnoVMFYETbD6xlIlZJZ6uiXmyje0KnGDrbJLH0DcgK5xs9S9SJK%2BS92lEXsMLswvSZpzrepl1WkMZJnXDKdSV1NMSXhmYtvJhby7u8bQsOCmvoYNbnucBEiUfSikJcBdJyQ%2B9iOSXfaNUGI%2BA%2B8U16TL2SFECLmofvlB0c7BEVTsg&X-Amz-Signature=a11bf83e37b318f50e65804a57bf838bf775d4f310cec110a151d9ee0a7538df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7C4IWY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGXvhN5iJEAznTQXgjCsOPJMRANPEnjPla6l8o0XGKB%2FAiBMm6LCQXHB2geVmlA1oCMiqRegAav3DiFxAX3ai2%2B30Sr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM0BkjatIkA6wvP0%2BVKtwD72H16PCEv72KxUlFMoUS8nd8AYaCLb0YV9MEMuRiPldejg5aSXr8Rc9lFSJc2UC6KuRYTKNtT2j1uHsTI97zpuuno%2B8NXcL68aE4%2BmrZpkwJVf3YmHsyRk7PZ%2BC%2F1ccC1l9aMpBaS1IW%2Fwcr84hbssNeAXlw5%2Fx7spd8DBzKxM7pKbdQTyquZ8duVbLP3Ml2oSbgu%2F9dyvPsXJkpIwvSQM6WJSuc%2Bv74JCs36X7V5%2FNNmp%2BwXHFqnjHsj6l25eQ7wkNJdwdbYXY0jYgcuXci0WcGOdG0uTsATJtnG%2B1ttL5xN%2F5%2FTmVKEXe4wuhbwjeMFB1QA7XSsiG%2BVe%2BamPKQhsN51XFNnMG%2FlWTtVFiFS8C%2B7BEtb2sMm7ckh0OIaGLHhq64iUGuex6mqrZZnz3FIhsDOJCijzhWpr5jcnpB849d1zH9sFDnAxuwVTRKnr51q5pPDBi2Nr8F%2Bs1E2njShQ9%2FivmwIO8CfOo5W6OejIt862rD5P6GxaQGx%2F%2B3NbkQmxD7UL4R6ASTdxRwQTyiGxIpQwO%2FcmUtc6n3C0g7nXqZ8OaStfoEY80%2FEYfw6Q8xz62nU1WD3gadS11CwGLxT7Tx40ifu86deUAqRSr%2FjSw15xqCY7tWnzGQ0tgwiv%2B9wgY6pgEhNXpBTWGnYns3qr05toxh8PQVipiQIi6WiJNbcLXovtbtHJvrruwZRF5U%2B%2FH3AIem0B0gNujB81xvTCwu4r1WItPzWXU4cKgQzvaXCwcW3vh8OfnVshDINCWDH5V0CNeJXE8XuSXDgrJw4jUnJj6MsToh7HHcpbkeQloxux3xYlYPTdMFN8nsBJdPO%2FsU%2BqZ7ZkkSqV6Z2ly659rZLtnCx3Jz%2FuPs&X-Amz-Signature=61949dd633b0d8208eb6c9fc464bff6e709615b4e196988460e5e749baa24491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
