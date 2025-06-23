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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DA6YPW6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAlt7aY8Qqcdef90i8%2Fc%2Bk6vqVTdku6DmwNjKuzLojStAiAGhmlovqsFX%2B01lRhYWeEERkGsG1IwZRTsAXFxKF9w8Cr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMvk366uAVBQVqqspPKtwDXxECHhntvGvn4F9zZJlEEjm3ZS84TwRDpDeqU7TgcHFiQu3i61ORDzm%2Bz%2FPx1HDpcvdNeEiE4JYSAXKkdvG3EQocDELmJBpSrAgANjkzgvsPh7WdRR0E6853bUrdzg%2BZfYHVhbpM7e1gGULVhBPY7%2FKZVCpHQoAa5QrOti9HQHA6c%2FAZqCegX6Qv4UgIY1VdN%2FriFM1kzFFb19cRXaEEdu1KZO79Uq7VErihSfo8nhUtlswgl7aU%2BfWeKwlwMxumaeqQePKfihiHaoKgXIkH0an0pkaabkf6HYUhytHQqki6B%2FphjMDSYhk9R8ggYWAHnqcopAilrdKtily6%2FU%2FCqDLTL4JK%2B%2BKyiwkUiLyUE0JnCkYwTSj38wFyeh%2BdU%2BOx%2BKCKRRT2w8QvjPzScRWpOW5KJ7gCGRy46rkEBR7oy09Z71WSAnaQDnA%2BZmD5f7vFn2%2BWCg3%2BVvTXj6WjoACcpAmCpflhynkty7jSIg31nsGEh5qcp8yNtjYeUdqgkUnAD%2BLa%2B6CnEUcq5hJjQeKaeCZVN7QblWGl6%2BJiDZs5p3A8tbqxl5uw01Jp0%2Bgekcmz3k8NCuaT0pNGuIAiAzxWCVUchKV1kizIdO%2B3eI3K38PSfrK%2FeI7qX%2FOORpkwl%2B3mwgY6pgH2lEpBqZBDkTjoeudDKra%2FOz8XFF8cT0vmpBRLZfEmKqXiJocSqrEuIK3oEONDZbwr9f15LHO5hO7ltHGfyfOHzuzPG8p5Wn4MOHN6QdM1eJrJFBbxvUSBjoYsihMR102ybF3thr6rGjQGoIrzypeztegjKGgdAP8lHs0N9GhTK6Gjz3KVbreDpbdhb%2Boql8tsdvygHptTHrEJfQsk%2BNAlLAIkKwZm&X-Amz-Signature=9a7a465e5e8b4323e195f82cb15019ebc41a8c087bfe43cc1aa03857327a56f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DA6YPW6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAlt7aY8Qqcdef90i8%2Fc%2Bk6vqVTdku6DmwNjKuzLojStAiAGhmlovqsFX%2B01lRhYWeEERkGsG1IwZRTsAXFxKF9w8Cr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMvk366uAVBQVqqspPKtwDXxECHhntvGvn4F9zZJlEEjm3ZS84TwRDpDeqU7TgcHFiQu3i61ORDzm%2Bz%2FPx1HDpcvdNeEiE4JYSAXKkdvG3EQocDELmJBpSrAgANjkzgvsPh7WdRR0E6853bUrdzg%2BZfYHVhbpM7e1gGULVhBPY7%2FKZVCpHQoAa5QrOti9HQHA6c%2FAZqCegX6Qv4UgIY1VdN%2FriFM1kzFFb19cRXaEEdu1KZO79Uq7VErihSfo8nhUtlswgl7aU%2BfWeKwlwMxumaeqQePKfihiHaoKgXIkH0an0pkaabkf6HYUhytHQqki6B%2FphjMDSYhk9R8ggYWAHnqcopAilrdKtily6%2FU%2FCqDLTL4JK%2B%2BKyiwkUiLyUE0JnCkYwTSj38wFyeh%2BdU%2BOx%2BKCKRRT2w8QvjPzScRWpOW5KJ7gCGRy46rkEBR7oy09Z71WSAnaQDnA%2BZmD5f7vFn2%2BWCg3%2BVvTXj6WjoACcpAmCpflhynkty7jSIg31nsGEh5qcp8yNtjYeUdqgkUnAD%2BLa%2B6CnEUcq5hJjQeKaeCZVN7QblWGl6%2BJiDZs5p3A8tbqxl5uw01Jp0%2Bgekcmz3k8NCuaT0pNGuIAiAzxWCVUchKV1kizIdO%2B3eI3K38PSfrK%2FeI7qX%2FOORpkwl%2B3mwgY6pgH2lEpBqZBDkTjoeudDKra%2FOz8XFF8cT0vmpBRLZfEmKqXiJocSqrEuIK3oEONDZbwr9f15LHO5hO7ltHGfyfOHzuzPG8p5Wn4MOHN6QdM1eJrJFBbxvUSBjoYsihMR102ybF3thr6rGjQGoIrzypeztegjKGgdAP8lHs0N9GhTK6Gjz3KVbreDpbdhb%2Boql8tsdvygHptTHrEJfQsk%2BNAlLAIkKwZm&X-Amz-Signature=930afc39c273e09a9b302470c4cb6f7ff43b18aac4a8de44cce5f49f4643c378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DA6YPW6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAlt7aY8Qqcdef90i8%2Fc%2Bk6vqVTdku6DmwNjKuzLojStAiAGhmlovqsFX%2B01lRhYWeEERkGsG1IwZRTsAXFxKF9w8Cr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMvk366uAVBQVqqspPKtwDXxECHhntvGvn4F9zZJlEEjm3ZS84TwRDpDeqU7TgcHFiQu3i61ORDzm%2Bz%2FPx1HDpcvdNeEiE4JYSAXKkdvG3EQocDELmJBpSrAgANjkzgvsPh7WdRR0E6853bUrdzg%2BZfYHVhbpM7e1gGULVhBPY7%2FKZVCpHQoAa5QrOti9HQHA6c%2FAZqCegX6Qv4UgIY1VdN%2FriFM1kzFFb19cRXaEEdu1KZO79Uq7VErihSfo8nhUtlswgl7aU%2BfWeKwlwMxumaeqQePKfihiHaoKgXIkH0an0pkaabkf6HYUhytHQqki6B%2FphjMDSYhk9R8ggYWAHnqcopAilrdKtily6%2FU%2FCqDLTL4JK%2B%2BKyiwkUiLyUE0JnCkYwTSj38wFyeh%2BdU%2BOx%2BKCKRRT2w8QvjPzScRWpOW5KJ7gCGRy46rkEBR7oy09Z71WSAnaQDnA%2BZmD5f7vFn2%2BWCg3%2BVvTXj6WjoACcpAmCpflhynkty7jSIg31nsGEh5qcp8yNtjYeUdqgkUnAD%2BLa%2B6CnEUcq5hJjQeKaeCZVN7QblWGl6%2BJiDZs5p3A8tbqxl5uw01Jp0%2Bgekcmz3k8NCuaT0pNGuIAiAzxWCVUchKV1kizIdO%2B3eI3K38PSfrK%2FeI7qX%2FOORpkwl%2B3mwgY6pgH2lEpBqZBDkTjoeudDKra%2FOz8XFF8cT0vmpBRLZfEmKqXiJocSqrEuIK3oEONDZbwr9f15LHO5hO7ltHGfyfOHzuzPG8p5Wn4MOHN6QdM1eJrJFBbxvUSBjoYsihMR102ybF3thr6rGjQGoIrzypeztegjKGgdAP8lHs0N9GhTK6Gjz3KVbreDpbdhb%2Boql8tsdvygHptTHrEJfQsk%2BNAlLAIkKwZm&X-Amz-Signature=92fb85cee2474d66bdcbc3ae5ad90194ec7c8e86064f24c340ac7866578dd913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PEC67V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFlq75JkPFPHw8J54uvC5VVC4L5V8LOP9SWtHpTZ3vuHAiEAnXHkgKcenSg03YQ8dwJ4hPP05kbdxPsjXvzVQHsGEMcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDG3DrgOszYi6Q%2BuzyrcAwPN8eEeyY%2FyY1eCQtD9rMeCWsXbYXDcWwBzsOeznd478EuW8xP1s%2F5qQpqbbuorKAMERnZ0FRiQZRdi7nQuUrEudq729rjXyKyLsQh8xRtMapmp8neZK9KJk4UKFXzx4Q8I%2FWNQG3PW6K2oDlK6EeGp2Vf9Gz%2FadXH2Dsfj65%2BxhwOfp%2By62VmXFnXhnuP4xTvx2tr8oc8ne4%2BRHnHwFrl8y5C2cnLm%2B5wcdXqzk0%2BN0qhZj0v%2BFjHxkUIFumENwMv667Pc%2BZmg16uMv56sbKizLJRXqRQKpYlaJvNSkem1EXKpmdcIBgeXQl5BORH4ZW4DXmqpkScY1O0cbJNKphXKyj4%2BsAPnNAoc%2Bo3gYFkCMyC43bzqQeQnUPw2uJyOUpfNDUqQqAs9YjrjoAueBwiEEnnhpRSFCKMSpm8vmnNqA%2B%2F%2BYyA4578yMYMg9JkoijDeEpV8rD7u29a%2Fu%2FRKgPRC2QPft6cpftST8hHY0Jia8fH%2B3UQP7ubk7LMeS1fXkLh5KPxuQAjG%2BCMVdJTVsrKuk0zh7BXrR%2FdCBkECsY90liBHDVf9VIE4jZhRO4AwCImju4dv94322v%2F%2Fo86KHK0B%2F%2BQmnisKbBrhSZVxuTkNF%2FH55Ifb4FzJkKIgMM7t5sIGOqUBeOjpxa%2BmZVHebMMIS6tBt79DsZLereQ3dOYdeprUZIpe%2B%2B9CKPev4FfOpUNWMGpfY1oCnmxt0cAG%2BJ5KCGrGG%2B6qu6KY6TeP0%2FIFfUntQw441Gvc2RAisH2qBm4EM428uapbpQWkuSZyQM7Aq78rSkt15%2BYhyzMEyEn3ZWCJE8uJ1iS%2B5gosK1CctOHOXXS8rlnvIP3iPsvU69KnGT%2FwkhFtpGsq&X-Amz-Signature=5bf5fa300fc7c61cfabd21753b301bf95edc4df71581dcbe836dcc2e5faf76b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26RDAWW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDXHm1OoyMVVLUVRNpwTRPsunVbq6kL%2F0jvBv74ZgsA7AIgE%2BOv1ZGzK%2Bod1wFV%2BDVqfQkOlBW1e8bNpudebPH%2FqI4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEzU%2BDHzwlMWbkLePSrcAz8wmYaLzo2lZl8cgBkiqycNQcvSJS8Hgbz4w7jptpekgS1qjbcOZsXn2Gc5dWzHlNAg47%2B%2F0WfjqOy%2FsrqsT7iOc9m24wgf88bhPxyU8dGLAD7EdAw0V4xiwWpDL%2Fw5jFP7ZP2iRMianKaspyE%2Bxj262i05I4gr17hJlc3CKIuhzrYerajtD7WBf2sMt3ez6D7y80QvSwX8cmJLHp%2Fv0nEF6r50jXY2RyJ1meodsLD3Yp6muBMxQgfSAYPQwEUG88IIFGagXU8Yb2ySGedAkmGdXtgvsGBJcdB8R6HxQNighCDqKwa%2FlItuOvvJpLPxpAZfaFKHjUc6kAW2xpSegkKaH3HaIaII2agRlpCFpxT68rSblNBAkboYBBhIXTzEGhV9boEuFLNTSp4%2F0zZo7JymxSLgQDIFVB9bVf9oqF1L25eApluQcWGQXRQEq73vsxvCY4lmqEasb92hDINX%2BJ1EXARl0ioVAT2mumwcUjzyQRDPd0K0AzzPSmSMgQBWoD%2Bv8aod7HKrbITxFPGaKfGHBoWASXWiprBru4t9hTh7i3nhSobCdL0%2Bzwm%2Bwnwu%2F%2Fq%2FQ3a97kkF0ayUKCTQTB%2BYAX9gmWSJ3Xg910x02xDXuccnha%2F4SUejsDTqMMft5sIGOqUBoA8%2BmvWzItPOAm82VymfU00BU4RdwegztmcFvOk83bIslI4X5GsPyLqkKLOWovRWahY8bEgNMAWZcHESL7BIblMlsJTcma26fHHjfMiDEvVUVVwiUphMddo6aBbyw0jIhSOf%2BVc2YoLXOjZjiq5vUQPmIGBWTEA98g7m2lMZGnc49t7x18kY87GoYfRWbThAoDX6MILbGbfHaSYS5weZKgTctU5Q&X-Amz-Signature=9c76413fa643d834eb51d79bde089745f60d3bd7b62913490b39ecb9f45de0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DA6YPW6%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAlt7aY8Qqcdef90i8%2Fc%2Bk6vqVTdku6DmwNjKuzLojStAiAGhmlovqsFX%2B01lRhYWeEERkGsG1IwZRTsAXFxKF9w8Cr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMvk366uAVBQVqqspPKtwDXxECHhntvGvn4F9zZJlEEjm3ZS84TwRDpDeqU7TgcHFiQu3i61ORDzm%2Bz%2FPx1HDpcvdNeEiE4JYSAXKkdvG3EQocDELmJBpSrAgANjkzgvsPh7WdRR0E6853bUrdzg%2BZfYHVhbpM7e1gGULVhBPY7%2FKZVCpHQoAa5QrOti9HQHA6c%2FAZqCegX6Qv4UgIY1VdN%2FriFM1kzFFb19cRXaEEdu1KZO79Uq7VErihSfo8nhUtlswgl7aU%2BfWeKwlwMxumaeqQePKfihiHaoKgXIkH0an0pkaabkf6HYUhytHQqki6B%2FphjMDSYhk9R8ggYWAHnqcopAilrdKtily6%2FU%2FCqDLTL4JK%2B%2BKyiwkUiLyUE0JnCkYwTSj38wFyeh%2BdU%2BOx%2BKCKRRT2w8QvjPzScRWpOW5KJ7gCGRy46rkEBR7oy09Z71WSAnaQDnA%2BZmD5f7vFn2%2BWCg3%2BVvTXj6WjoACcpAmCpflhynkty7jSIg31nsGEh5qcp8yNtjYeUdqgkUnAD%2BLa%2B6CnEUcq5hJjQeKaeCZVN7QblWGl6%2BJiDZs5p3A8tbqxl5uw01Jp0%2Bgekcmz3k8NCuaT0pNGuIAiAzxWCVUchKV1kizIdO%2B3eI3K38PSfrK%2FeI7qX%2FOORpkwl%2B3mwgY6pgH2lEpBqZBDkTjoeudDKra%2FOz8XFF8cT0vmpBRLZfEmKqXiJocSqrEuIK3oEONDZbwr9f15LHO5hO7ltHGfyfOHzuzPG8p5Wn4MOHN6QdM1eJrJFBbxvUSBjoYsihMR102ybF3thr6rGjQGoIrzypeztegjKGgdAP8lHs0N9GhTK6Gjz3KVbreDpbdhb%2Boql8tsdvygHptTHrEJfQsk%2BNAlLAIkKwZm&X-Amz-Signature=9fec9a69e9be99330728475e4512e872a110c6ec299167c6548a0044c9040e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
