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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34I5MAW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFyVLF7SD%2F680813UfU2om%2B%2BoxO4QNOC1YirsiYe67DEAiEAjWhfWqkd6H7jR%2FlKiCwrait2cc9kO4ccgmhLr%2FN1UOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJF%2FqIV8DdCnZFqCZircA6fwOIvNxyJPsHYsac0UYkTL%2FpTqaRWWwSzcO96TFiknouJWRTehF%2BM1XVDmKO5YzhM3Pj%2Bf7ZPRxgmsKrWriBuWG%2FzAe85bwps0BrtAS2M%2Bt8D2YPFkewgCKil5r9TpzviE5W3g%2FZcrPEk1V%2FQYpfYB3hs0acKEn1vxSJvJud%2FLq64kTpG0Ack3wXeVpHJoqVmyUZsWjc0nh8BVsjArz2iLhanMzXlq7wfazXIHMei0tWZwOpN3Q2x5sFjcOVTSUsDDr9TU4Gt8xecRnV8BQpe7%2Bw6hHMcdkSluPXL%2FOV0BFogwPritCON2hwu9MYo%2BZbN67A%2BPFwykl%2F3OV9ALuF265zB6%2Fj%2BIG2dRxbvX5wTfRC2sWhMb4dGXc8CIoRsXh2EfnPEUYJZ%2FnCMfmCHvwbAsKA%2Fs5C35%2FZz%2BjokFPD9vM3L5RWiWhdv2nNY7givxJ5DHdR67bu%2BsZFIphk5f1mBWS4xkb008%2F87WpBOzGXy68bQkdIyZ6lKLcIg%2F7IcBthkN6Vs3SWlSazDzt0cRJQvJNlLrM4yFBooImWbApBIDUEzkvt2Jan50Qan2J4JgeRsutT9cJpJJDpUGuZMp66pygfdMD%2Fi%2BOnIthaOuX1NI2y6fh041Tp%2FKdwdGMMPBlr0GOqUBjMea2sIR1Q%2B5TuOlhu94jrqRRPZLA2NF7DuQJMep1PBzzoMIY1RuTQVEmHm%2Bvl5qC4MJxpJnLlbi2oFCIDTejyp7FSPCX0QQaZ9uVv5UCoRjmpEn4VO3vPJ68e6CGasUa%2BIGSjkO%2BtIBhuxRueaqWv9otF4YMBme7OCSE09LCspHVk7cUY7lO18ygW5VXjT3oOnG3LI%2F6scd5Km%2FAulV45yfwG56&X-Amz-Signature=b5ce19b9e1e5a999ff37b6b7686c600e9e11e46caf8b44c313c2e1fd27d949a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34I5MAW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFyVLF7SD%2F680813UfU2om%2B%2BoxO4QNOC1YirsiYe67DEAiEAjWhfWqkd6H7jR%2FlKiCwrait2cc9kO4ccgmhLr%2FN1UOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJF%2FqIV8DdCnZFqCZircA6fwOIvNxyJPsHYsac0UYkTL%2FpTqaRWWwSzcO96TFiknouJWRTehF%2BM1XVDmKO5YzhM3Pj%2Bf7ZPRxgmsKrWriBuWG%2FzAe85bwps0BrtAS2M%2Bt8D2YPFkewgCKil5r9TpzviE5W3g%2FZcrPEk1V%2FQYpfYB3hs0acKEn1vxSJvJud%2FLq64kTpG0Ack3wXeVpHJoqVmyUZsWjc0nh8BVsjArz2iLhanMzXlq7wfazXIHMei0tWZwOpN3Q2x5sFjcOVTSUsDDr9TU4Gt8xecRnV8BQpe7%2Bw6hHMcdkSluPXL%2FOV0BFogwPritCON2hwu9MYo%2BZbN67A%2BPFwykl%2F3OV9ALuF265zB6%2Fj%2BIG2dRxbvX5wTfRC2sWhMb4dGXc8CIoRsXh2EfnPEUYJZ%2FnCMfmCHvwbAsKA%2Fs5C35%2FZz%2BjokFPD9vM3L5RWiWhdv2nNY7givxJ5DHdR67bu%2BsZFIphk5f1mBWS4xkb008%2F87WpBOzGXy68bQkdIyZ6lKLcIg%2F7IcBthkN6Vs3SWlSazDzt0cRJQvJNlLrM4yFBooImWbApBIDUEzkvt2Jan50Qan2J4JgeRsutT9cJpJJDpUGuZMp66pygfdMD%2Fi%2BOnIthaOuX1NI2y6fh041Tp%2FKdwdGMMPBlr0GOqUBjMea2sIR1Q%2B5TuOlhu94jrqRRPZLA2NF7DuQJMep1PBzzoMIY1RuTQVEmHm%2Bvl5qC4MJxpJnLlbi2oFCIDTejyp7FSPCX0QQaZ9uVv5UCoRjmpEn4VO3vPJ68e6CGasUa%2BIGSjkO%2BtIBhuxRueaqWv9otF4YMBme7OCSE09LCspHVk7cUY7lO18ygW5VXjT3oOnG3LI%2F6scd5Km%2FAulV45yfwG56&X-Amz-Signature=3d88160e43ead4fb1cefc016e5661f1059e744ee3f8c2eb43080eb3d8fab3d38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAEUIIA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIH1%2FCa1Z6rTNhra1H3rWqM%2Fy5QcYZMGUZPi63QIQIxESAiBdQEzjS1zyCMdEiHx7UjEH26oWn0hxhd5CDVJizvDavyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM01FzYilZAjEh3k9TKtwDd9HoGk4R3JEaFX8%2F5Zcm2YXN9mXe1nzYjlp07dcPXg9xc%2BY6ES1rrughdgYua0hyMfD%2FsY740vs6udhv6mz6xanWeIIwv9v%2BgqelYIb1mY%2BiuM4%2BCZy6AfVNmWxtB6O1dLKQGYrhUn%2BC97gDbFoJJ1k1CvdUTiJiI3dzrjTh%2Bt2IvbKwALW2lPXSomJ0SnoQ7mISQFkfCexnwNtjWqTCggWnt4oEzxmAd6d9TkAteE%2BAcQeGkUcksl3DzsjzGZ%2FBT3z7m88j7poXwwLMJw%2FShYeBhzug8s0vVhgZTsYOlcoWvCO2v9PHLpownvQflWwZDDsmr9E0xuhfZY42z6LBrlI%2FvdTgo6ybhWhDJ8qmR1rlkqRR7L%2Bw6gQo84sQKuco4H1spyWYci7bNAzq9EefNHRqDvkMb9IPX%2F0YPL1g99ik27qi6mga9qhusE9FPA4VZax8ovEzuiJuD1ZElf6eK3sYfHtOEL4tqaSwQpEkYdIAtLsAmC0f0kzvD1KgXIu2Lb25eb1YJI%2BU70hCvHh08AX2TwhTlSbS%2ByjAWQJDW1U5tEld8IrMHTb7GEd5aka5mlPZ92cEi7acNppMEgWOuKB1pVWH9cTnjOxYwt%2B4LGVcqEN7IjMFDGG63awwg8GWvQY6pgFKxp7SDtuRaJfFifwfdMcChqMl1YKc3ptfJzzdtvl71RARuEXPmOSazDOPKYYhR9Sos1FsyGhlRtnJwNlWGeRB0CsNohVgmRf1cKtI2arxtEElJUzhG00W5QLJzh5rh73Y0Kp2UjX8rQ6oW%2F%2Fa5PvcaNus%2B3Jym6gVBXtnWc69jSQ6n%2Fp7BNbBOk8l2TtJzNMpOLHclXcvsvh9re%2FeAbRXNKwDBngi&X-Amz-Signature=d6c4fdefa2340eb08eaca4820e64f68f0a7f137a6b3f0d14bfcdb263f6a6f06e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632ZR6SPE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCroHAArs7Q8blmAhy2VJRQRnBwCsxTTMo8h%2BmIPJ%2FzjgIhANGGmZvV5C1exXXyvNj1eHOUoSTZyP5FxZ3YoJweqNUtKv8DCG8QABoMNjM3NDIzMTgzODA1IgzA0DwXSOsiE1Bw4p0q3ANzpBZcrBjVsCyn4IUs1kSKPLm5QeBe4AaONdv8vSdT%2FhHPxLdTNKXgedJjxDZ%2ByVcnlRbbmKtN%2FD1kgayvab%2BWNYa%2FEtsXIw13VFhwphd%2Fmzp2dF%2BWZUZs9QROo94eEcpzwqvtxndU0mrrtQyOHninrm2KNP2tRGr1IAFF0BcPIHOhHI7y93V%2BPei9BAkmSJIBzW4lqW0UbbMG7aqoKZ9tw0QHEPHkxIZZHUfYFmso82CTbklhp484XMzzsCoT332Iox69y2nUN%2Bvi82tsZ89lXQ5fQPV%2FE5OqlOGQq7HDyY8wckt4%2FjzpO421IQSm7XxrONbos7F2gtwLsRxCxAg%2FlDlv0kxXfCcnnWHIkRaIQ6bY7oyz0v1powrvQYCs91K%2BbQeZhMOho0%2Bk6OzDvSzgNYHJtcWm%2BqdSCwZX9Vp5x%2BiwSFWN9eoEI6XPcGyatIA6u46jFpddt%2Bz5uMY7DDpvtA%2F6r5dVcf025VLWv8dGA%2BbQGw2wJIVtcdAfPoB%2B67gzUagB2E5VE7om3bfGZvRW%2BfFOoP4DARTWLER2TaQPhoMAOayH%2B0qxEpPsq%2BpsuRn6JRtAjw81Nhxk5tkbzfhGRgxWhAlIWr0KDP1mg8dNgI4xAWcZOGIHdIN05DC6wZa9BjqkAX0CVZz6f8tMRh8spT26mxLitCpBjNcgbx%2FlEvsIELrKTf0s8BozI73qaCReAAOHiJexjgtriSwyJt0mp4DtoNVWc4drXQqNMF4gFMu2e1milpXYcebGz3mNoZTbapFmyEo5WqkfuYLtIN%2FccU8XWiVELRvi3mV80qbd5I7m0XS7MSEBp2%2BdksURXJ4XeU83NTPNhcznA22cidFSogFS%2BTNpCPmG&X-Amz-Signature=6eaec6945c30621902f788cbd971ea885ed07704030fe550d0978e9afcd9381e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34I5MAW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFyVLF7SD%2F680813UfU2om%2B%2BoxO4QNOC1YirsiYe67DEAiEAjWhfWqkd6H7jR%2FlKiCwrait2cc9kO4ccgmhLr%2FN1UOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJF%2FqIV8DdCnZFqCZircA6fwOIvNxyJPsHYsac0UYkTL%2FpTqaRWWwSzcO96TFiknouJWRTehF%2BM1XVDmKO5YzhM3Pj%2Bf7ZPRxgmsKrWriBuWG%2FzAe85bwps0BrtAS2M%2Bt8D2YPFkewgCKil5r9TpzviE5W3g%2FZcrPEk1V%2FQYpfYB3hs0acKEn1vxSJvJud%2FLq64kTpG0Ack3wXeVpHJoqVmyUZsWjc0nh8BVsjArz2iLhanMzXlq7wfazXIHMei0tWZwOpN3Q2x5sFjcOVTSUsDDr9TU4Gt8xecRnV8BQpe7%2Bw6hHMcdkSluPXL%2FOV0BFogwPritCON2hwu9MYo%2BZbN67A%2BPFwykl%2F3OV9ALuF265zB6%2Fj%2BIG2dRxbvX5wTfRC2sWhMb4dGXc8CIoRsXh2EfnPEUYJZ%2FnCMfmCHvwbAsKA%2Fs5C35%2FZz%2BjokFPD9vM3L5RWiWhdv2nNY7givxJ5DHdR67bu%2BsZFIphk5f1mBWS4xkb008%2F87WpBOzGXy68bQkdIyZ6lKLcIg%2F7IcBthkN6Vs3SWlSazDzt0cRJQvJNlLrM4yFBooImWbApBIDUEzkvt2Jan50Qan2J4JgeRsutT9cJpJJDpUGuZMp66pygfdMD%2Fi%2BOnIthaOuX1NI2y6fh041Tp%2FKdwdGMMPBlr0GOqUBjMea2sIR1Q%2B5TuOlhu94jrqRRPZLA2NF7DuQJMep1PBzzoMIY1RuTQVEmHm%2Bvl5qC4MJxpJnLlbi2oFCIDTejyp7FSPCX0QQaZ9uVv5UCoRjmpEn4VO3vPJ68e6CGasUa%2BIGSjkO%2BtIBhuxRueaqWv9otF4YMBme7OCSE09LCspHVk7cUY7lO18ygW5VXjT3oOnG3LI%2F6scd5Km%2FAulV45yfwG56&X-Amz-Signature=5c15330e26067e372fd75c865a9fad1d972e00e29b7820664794bd1065102cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
