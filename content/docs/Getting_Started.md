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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K3DT3J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC53mgh3DUCIHp9bTVPmi7KUqy5JPhXutsh3ac1tCQ2NwIgSvxq%2FF8PFTp4j0NT7NJ%2BcwS7tCDfl7Wr8zk7hFMQTj8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD0zUvfd356BYF6dnyrcA1ULte%2B7zHmOsdL5kZk7K1PGGa4mqhRM3%2F%2F0aTa2lkUPRV9bRWxSQBnwwXAEHo6XbFylbMxLcim6%2FycUWfpBcOTxsb6tImDbYwOMzopcYAqDz6FmFqING20%2BlF4IgJdgxPxt77NAL575IpFyWhFeT%2BfNRDVV8wfTcQRKn3F5Npn1wtkqNLIbKuza%2BTPj64BJDJULIC%2BD%2BFDJRzwteddKewTGAlsW8WUlE3RxQevQBhoAAkGZXdfD6ss4Daexrkcaglp06dNMo%2F%2BF2ATfbnGNsZhhgPrw1Ju07H6hX%2FrT1kCD5Iuf10pJ%2FUvexohqA%2BJgnaVR%2FKQWoNqDts5YDCstoWf%2F0RLM3enZC6QGYM1ImCrBnMU6DLQ5SCiJcZPwYZbVwBFA1xEujxAojwcmLMxaRX1bVcCyw46MPP3wlO%2B3bGMKMzfPLyM8d0bK6iEwqNTCp5t6CgpMJGcSzBiQkqJE8rZte2VNsTKWSZmjOWvXm3rtpFPhbcOE0LbVrrWfNQNKdeyTgHsQuPBwUULJqWn%2F8FxmgrZCOOy81CT5wuAHzWzz7meTlOClf6Ww1mp%2BuuSCbz0Hy%2BZRTJP8RcsR5ORvXsFBSZ5iqy5kPQaFkVCD3BjmZHKKjrpOzvlRTp57MJ%2FXpMEGOqUBRvj1hzVaZp7fOQ8AF5mQyUzrACzLD30vbMszTC208XW3scu%2BcjOVQRbNX0tr8%2Bzch8IHV4CbC2PRszuEIM28QTtj3VaM1BYYBqb34in0YkHsstL9pEYACF%2Fg%2BlolviXaI%2FceTPcrs2CLCa2MWJ0DHYbaSRpsfpAA510%2BZ984NFebPSnH8nMy0SKw%2Fqe78RMOe0YSlGVJKe%2Fd9BbypXwVPmQbHBlB&X-Amz-Signature=2456655d85982b313defba68c209cc25bd0303ec62c263b8e1c5942a85dcafa6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K3DT3J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC53mgh3DUCIHp9bTVPmi7KUqy5JPhXutsh3ac1tCQ2NwIgSvxq%2FF8PFTp4j0NT7NJ%2BcwS7tCDfl7Wr8zk7hFMQTj8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD0zUvfd356BYF6dnyrcA1ULte%2B7zHmOsdL5kZk7K1PGGa4mqhRM3%2F%2F0aTa2lkUPRV9bRWxSQBnwwXAEHo6XbFylbMxLcim6%2FycUWfpBcOTxsb6tImDbYwOMzopcYAqDz6FmFqING20%2BlF4IgJdgxPxt77NAL575IpFyWhFeT%2BfNRDVV8wfTcQRKn3F5Npn1wtkqNLIbKuza%2BTPj64BJDJULIC%2BD%2BFDJRzwteddKewTGAlsW8WUlE3RxQevQBhoAAkGZXdfD6ss4Daexrkcaglp06dNMo%2F%2BF2ATfbnGNsZhhgPrw1Ju07H6hX%2FrT1kCD5Iuf10pJ%2FUvexohqA%2BJgnaVR%2FKQWoNqDts5YDCstoWf%2F0RLM3enZC6QGYM1ImCrBnMU6DLQ5SCiJcZPwYZbVwBFA1xEujxAojwcmLMxaRX1bVcCyw46MPP3wlO%2B3bGMKMzfPLyM8d0bK6iEwqNTCp5t6CgpMJGcSzBiQkqJE8rZte2VNsTKWSZmjOWvXm3rtpFPhbcOE0LbVrrWfNQNKdeyTgHsQuPBwUULJqWn%2F8FxmgrZCOOy81CT5wuAHzWzz7meTlOClf6Ww1mp%2BuuSCbz0Hy%2BZRTJP8RcsR5ORvXsFBSZ5iqy5kPQaFkVCD3BjmZHKKjrpOzvlRTp57MJ%2FXpMEGOqUBRvj1hzVaZp7fOQ8AF5mQyUzrACzLD30vbMszTC208XW3scu%2BcjOVQRbNX0tr8%2Bzch8IHV4CbC2PRszuEIM28QTtj3VaM1BYYBqb34in0YkHsstL9pEYACF%2Fg%2BlolviXaI%2FceTPcrs2CLCa2MWJ0DHYbaSRpsfpAA510%2BZ984NFebPSnH8nMy0SKw%2Fqe78RMOe0YSlGVJKe%2Fd9BbypXwVPmQbHBlB&X-Amz-Signature=899c11f4c4f5bb12eebb12bc70ce4f63452f122d70f482f5fa635a17255a7685&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K3DT3J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC53mgh3DUCIHp9bTVPmi7KUqy5JPhXutsh3ac1tCQ2NwIgSvxq%2FF8PFTp4j0NT7NJ%2BcwS7tCDfl7Wr8zk7hFMQTj8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD0zUvfd356BYF6dnyrcA1ULte%2B7zHmOsdL5kZk7K1PGGa4mqhRM3%2F%2F0aTa2lkUPRV9bRWxSQBnwwXAEHo6XbFylbMxLcim6%2FycUWfpBcOTxsb6tImDbYwOMzopcYAqDz6FmFqING20%2BlF4IgJdgxPxt77NAL575IpFyWhFeT%2BfNRDVV8wfTcQRKn3F5Npn1wtkqNLIbKuza%2BTPj64BJDJULIC%2BD%2BFDJRzwteddKewTGAlsW8WUlE3RxQevQBhoAAkGZXdfD6ss4Daexrkcaglp06dNMo%2F%2BF2ATfbnGNsZhhgPrw1Ju07H6hX%2FrT1kCD5Iuf10pJ%2FUvexohqA%2BJgnaVR%2FKQWoNqDts5YDCstoWf%2F0RLM3enZC6QGYM1ImCrBnMU6DLQ5SCiJcZPwYZbVwBFA1xEujxAojwcmLMxaRX1bVcCyw46MPP3wlO%2B3bGMKMzfPLyM8d0bK6iEwqNTCp5t6CgpMJGcSzBiQkqJE8rZte2VNsTKWSZmjOWvXm3rtpFPhbcOE0LbVrrWfNQNKdeyTgHsQuPBwUULJqWn%2F8FxmgrZCOOy81CT5wuAHzWzz7meTlOClf6Ww1mp%2BuuSCbz0Hy%2BZRTJP8RcsR5ORvXsFBSZ5iqy5kPQaFkVCD3BjmZHKKjrpOzvlRTp57MJ%2FXpMEGOqUBRvj1hzVaZp7fOQ8AF5mQyUzrACzLD30vbMszTC208XW3scu%2BcjOVQRbNX0tr8%2Bzch8IHV4CbC2PRszuEIM28QTtj3VaM1BYYBqb34in0YkHsstL9pEYACF%2Fg%2BlolviXaI%2FceTPcrs2CLCa2MWJ0DHYbaSRpsfpAA510%2BZ984NFebPSnH8nMy0SKw%2Fqe78RMOe0YSlGVJKe%2Fd9BbypXwVPmQbHBlB&X-Amz-Signature=2b4219eb4bff14c629d22f4b110fd5e1330b6a9a88dee7bdbe424a9f8f37f45c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLITKII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrXGOPusMoXsfJPvOOTKKJvENObRRd5JNkyxanc0%2B2GgIgKvQRN6GQV8rRoQ0Pj%2FEYgJ27SHTWEB9zr6E6JuHu0eIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDORgODTodoWTtOFnlCrcA%2BxKAWWHL%2FRZRs8dqsWKmAmfaX1ABzZd6FycIgmm%2F%2FrrZxpeuohGEWmxsRJ7EC5PbxsYd0qzEKZwfHZk0PcO8vPCnOyE4WAwoPdgJy2y36RMGN2QdADHmnfYf9K1Q3zl2k6mAuNVro%2BmYgkbUETf2%2Fr%2Bmmhh0%2BpRAAwmyyAiIB%2BfvkAYQK%2BQWg%2FapuMQjVCfdAqXPPGwzq51AHN5qSd3evuuG82Yrm%2FbydMsmoxVRjdvNueUG8aGCpXwN4wM6vTYTNtqFOmxK4ykEfUhmrocr%2BgBDh%2BWBVrEKFZjbfMFpxsyZTTynnXNBp7ZYvh1AsjD89dHZ%2B1nt0iZBlDf5ybsrU0cbVm%2F10aBfMnAsMpYNrEvO4riwL0k7q1wGSkOCU1jdJ%2BYiaReyNg3ADlfbdfcOtpr1otoCIGJBjS8cDloN75uRPuk80eYFKXs3C0Frlxf4xd7AaQGBnwlUC3q7LpxQ%2BrA4uwUJNCIDPjiqTtbpDcSBWRzpvqTpVLjYMbxz8UN1Av6wrShyZIW2w3e3d%2FzPHcAhbyMBl0cwn8rDt%2Fg8t0%2B9e2RRwrlAxyLiHFfijtuBCeB1TPkIJECTNTud%2Bp%2Fb%2F090vzY5%2FViNAvPT1iMNykFgi16fq7tdx4HTiIiMPqMpcEGOqUBmQNhcCwp3N9st14aWUPvzUZoBlEmuGCNzWsGX8JPaXjEBM5ZCq5rjj3INOhKn3S4aa7ga7KLgtm3Pk1yNKVVTPREFweZ5j7lorIrbOHdmcYH3JSwHQacxE5D8DDixusWE%2BWMyolE0e3rB3xa5%2B%2F0qwFGN6pUbFePRwGsL4n3IVFuaLHc%2FQoTdLlYpuIoDTMjevh96WiVtNjG7mvXCXpJdEnnXwHB&X-Amz-Signature=63d8f1c4950f1745beb74fe98d6d05c8d1cbf45bc7cbccb381f050a18d660d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENKNF4G%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3Tp%2FO7BxkZTa25MVgfYHLmwB7etaZKfT4zZY0DYV2MAiEAgXQLZuKlPQwsC9Nwwd6u673gR1Na4EoXYKb0Wb%2FcXeoq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGq0fOfjR1YQE%2Bvc2ircAy%2Bo350IOjb3XmBxdA6v7oa9zylrZIesmtpEhUls%2FWce0UHwQqg8ENrZJsREznJ2sGaaZdvL80yqzbOPTPjNnbMHXOPpdo3m2f%2BRwCx0CSeXq2IPBUDPsqePBpIwd8x9jSZg%2FiZxJNVdT47w9b5Smv0%2Bdb1NpFuf9itnoguW%2BViisZl7krhnPuXiFN7jlNOo9mlqqdVQCXZZJzUyXpeX0ziZQYNwcRNZcIjZ8Rh%2FoZAqeIwxmvj%2B2DdZ9YmEc2r60UK%2F6GnrO1%2BIRl9vgowC1xZLc0bawG3NJqBcZHHRGQnZzNzNk3zYAJo3Hd%2FPzyuxL2BvV70%2BlmpGh635L7nmIf5gJiC3yRHmSxLkPPUlxLHkzlk09N3KlpL2%2B7y0ptn6RNs8g9tTqBzoOPUASPb7UMAUDx%2BXB1MMkgYO9g34ylJcXOvDhGmbZIWuLQzszWN7VbslkTsD2ONKz23w6kGvFfgrbO64mcC6eWdLdR2DH8%2F57T2%2FfTuSq4qVrzqKp5HqsuPCTu2UEF3NC7RDk4AGfkMtp61Y1wLFqaeo6P2faluYmSq%2BbOuluHhDLk4lwNIQDZQzpED0VsjiI32nL0Yu44JSF6dMuviOg2DQTuRx%2B%2FdBFqpPceEWelXrDv2%2FMMXqpMEGOqUBYpIjwYGI7mmz%2FKlLrgE6%2FCb0va1vMXVJIJI9jK5kZFlgzX3e6RVbpE32kNCov8as%2FLmm2hNKKqFnQlbn0Lqv%2FTWAJMHV2qvwivBxcMe5Imr6rdMj1QIsOkxatPOrH60SczfFldh8xXQPWq%2FdsNv%2FlDGv1wf1YVUBK0WD1tBbbPBPduLJ%2BuWn66K3k4Tlxadbwe8tqa1O0h8uPoXPJUturPp4dUAv&X-Amz-Signature=15daba17d4dcdca3e0c3f489916013ab2f42415c62bc21a6d0b9a6bbfb1db2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6K3DT3J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC53mgh3DUCIHp9bTVPmi7KUqy5JPhXutsh3ac1tCQ2NwIgSvxq%2FF8PFTp4j0NT7NJ%2BcwS7tCDfl7Wr8zk7hFMQTj8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDD0zUvfd356BYF6dnyrcA1ULte%2B7zHmOsdL5kZk7K1PGGa4mqhRM3%2F%2F0aTa2lkUPRV9bRWxSQBnwwXAEHo6XbFylbMxLcim6%2FycUWfpBcOTxsb6tImDbYwOMzopcYAqDz6FmFqING20%2BlF4IgJdgxPxt77NAL575IpFyWhFeT%2BfNRDVV8wfTcQRKn3F5Npn1wtkqNLIbKuza%2BTPj64BJDJULIC%2BD%2BFDJRzwteddKewTGAlsW8WUlE3RxQevQBhoAAkGZXdfD6ss4Daexrkcaglp06dNMo%2F%2BF2ATfbnGNsZhhgPrw1Ju07H6hX%2FrT1kCD5Iuf10pJ%2FUvexohqA%2BJgnaVR%2FKQWoNqDts5YDCstoWf%2F0RLM3enZC6QGYM1ImCrBnMU6DLQ5SCiJcZPwYZbVwBFA1xEujxAojwcmLMxaRX1bVcCyw46MPP3wlO%2B3bGMKMzfPLyM8d0bK6iEwqNTCp5t6CgpMJGcSzBiQkqJE8rZte2VNsTKWSZmjOWvXm3rtpFPhbcOE0LbVrrWfNQNKdeyTgHsQuPBwUULJqWn%2F8FxmgrZCOOy81CT5wuAHzWzz7meTlOClf6Ww1mp%2BuuSCbz0Hy%2BZRTJP8RcsR5ORvXsFBSZ5iqy5kPQaFkVCD3BjmZHKKjrpOzvlRTp57MJ%2FXpMEGOqUBRvj1hzVaZp7fOQ8AF5mQyUzrACzLD30vbMszTC208XW3scu%2BcjOVQRbNX0tr8%2Bzch8IHV4CbC2PRszuEIM28QTtj3VaM1BYYBqb34in0YkHsstL9pEYACF%2Fg%2BlolviXaI%2FceTPcrs2CLCa2MWJ0DHYbaSRpsfpAA510%2BZ984NFebPSnH8nMy0SKw%2Fqe78RMOe0YSlGVJKe%2Fd9BbypXwVPmQbHBlB&X-Amz-Signature=ac8c63f5d1a8575b3763ec91ec13821228f3564c25abbecaab1401bcc561f7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
