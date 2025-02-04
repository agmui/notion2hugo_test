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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5HWZB2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCGxkeCkEukUR03Qd8FscGzU5tiQRRsXEhJvyn%2Bo%2Ftx0gIhAJTOML3LMjnVuN6%2FStYftdltsmz%2BTk6Zzb34jDdPUEnHKv8DCDMQABoMNjM3NDIzMTgzODA1IgzNMJYB002FeNxdp88q3ANik2kdine%2Fk9uA3k%2FNFWSGnfm1kc5Y7km8f3w5kvuVvmeFnJAemb4O5zmv%2Flxvd6OUNo55bpTxlSh30VnSSbpmCkt4r%2FJLAgxKV9CL5B2hTg6MYECSOe2VMrDOuXpxYQLOHTRHMCQxB63dva5MWcSFZla45iFGTBG0xyD8z%2B7TT3lfo%2BQOAqexb8HRnHercKYQHkaUXGi7OyX7fIoQTjMwvfusnLOsE0ED5Sa4Rob%2B3WEIX8hwzi0lTO900F6DFG722Ot732p0TX%2BkKokgz1OQZfE5zSlINBjOlEks3aH9JnR8Zo3SvNx5%2BZXzp3RG93ngt2DW%2BOaM89STCOUU%2F8wpkwrA9ntOBYsbARXWPHyDheKvsiIIrHw7s3wdhxVcLBdNp5TdOWfZTVQnbIgqXFtxijoZdV62wT5Sfpq1KkLLdCdLOcRiLREQa8uP0j0tvaouAIW73Z6Ta3DZOnkDks8b3YdXphogYYcVwgUa14fACZX%2F4%2FkuwtRY2CPS02LD%2BXR7b7DCW48Q1JpWg11QQo4Tdh2aZdjnQrYfqQ%2FZhQaGjN1G4W0ZPsExJYztyXQjf9yZBLTITR3JcNX6t3ye6lWS%2FSXkYtlQ1t7EqZWL%2FT9jnzvhfYwO9KJc8iq7VzC2oom9BjqkAcJ3DJiZL%2F1yMh7%2BGMu3dVx%2FVw1Nvn%2F88K0cG4ZEleoHDCWMuQAvip1XwOA0GflJzPaBbStnQjizk5YdGg2hLBVxY9EQz6ZHazCxex2JKdGbEu58RRWGCsMwk7y1rN%2FbKraVK5iVdXC7RMOQOeYQENmM5Xllka185iqSD50YK1t%2Bh61OzhB%2BH7%2Bu7WB0LAknEGn%2BNMuXyytL8fvNp91%2F9roMMMWJ&X-Amz-Signature=e488c5728fdff8bca23bd80bac80de7f249c35a936059f60459b8502836a08ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5HWZB2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCGxkeCkEukUR03Qd8FscGzU5tiQRRsXEhJvyn%2Bo%2Ftx0gIhAJTOML3LMjnVuN6%2FStYftdltsmz%2BTk6Zzb34jDdPUEnHKv8DCDMQABoMNjM3NDIzMTgzODA1IgzNMJYB002FeNxdp88q3ANik2kdine%2Fk9uA3k%2FNFWSGnfm1kc5Y7km8f3w5kvuVvmeFnJAemb4O5zmv%2Flxvd6OUNo55bpTxlSh30VnSSbpmCkt4r%2FJLAgxKV9CL5B2hTg6MYECSOe2VMrDOuXpxYQLOHTRHMCQxB63dva5MWcSFZla45iFGTBG0xyD8z%2B7TT3lfo%2BQOAqexb8HRnHercKYQHkaUXGi7OyX7fIoQTjMwvfusnLOsE0ED5Sa4Rob%2B3WEIX8hwzi0lTO900F6DFG722Ot732p0TX%2BkKokgz1OQZfE5zSlINBjOlEks3aH9JnR8Zo3SvNx5%2BZXzp3RG93ngt2DW%2BOaM89STCOUU%2F8wpkwrA9ntOBYsbARXWPHyDheKvsiIIrHw7s3wdhxVcLBdNp5TdOWfZTVQnbIgqXFtxijoZdV62wT5Sfpq1KkLLdCdLOcRiLREQa8uP0j0tvaouAIW73Z6Ta3DZOnkDks8b3YdXphogYYcVwgUa14fACZX%2F4%2FkuwtRY2CPS02LD%2BXR7b7DCW48Q1JpWg11QQo4Tdh2aZdjnQrYfqQ%2FZhQaGjN1G4W0ZPsExJYztyXQjf9yZBLTITR3JcNX6t3ye6lWS%2FSXkYtlQ1t7EqZWL%2FT9jnzvhfYwO9KJc8iq7VzC2oom9BjqkAcJ3DJiZL%2F1yMh7%2BGMu3dVx%2FVw1Nvn%2F88K0cG4ZEleoHDCWMuQAvip1XwOA0GflJzPaBbStnQjizk5YdGg2hLBVxY9EQz6ZHazCxex2JKdGbEu58RRWGCsMwk7y1rN%2FbKraVK5iVdXC7RMOQOeYQENmM5Xllka185iqSD50YK1t%2Bh61OzhB%2BH7%2Bu7WB0LAknEGn%2BNMuXyytL8fvNp91%2F9roMMMWJ&X-Amz-Signature=4e66973b13c2f569128db0e0e9bddf6c9de8ffcbbcb4c8ce5c0ad6a888ba70da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NJZMTH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCwZYqzt1qmeaJcxhYCfFQo6J1t0yY0VOlmwAzGPGvP5QIgH3TmbQWekcyGAzZkxvFZGJikWyITW2TU1hiQtSZktBgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDG8DhLBgF4udhGbAzyrcAzpv5ldd%2FiTlaNiaTKLGNvgL9g%2B%2F%2FENV4DS2FuRks%2F3tGSGF%2BqPoKigeGF%2B0bAjLNCKJKbuYWfHou5vMqSlWrnwkwRTYxclW5THc8dk%2BkAr14PsY5dve%2FHjZvtyOADx7zW%2Fzh5zPbeJh8xqpkBCBJapfO4Q3VBwzsDErkS9K0MYEoQqYxdqbqRPytVJipBzYo3G8WPu2t9X1f%2BDX2fZ%2FS7DqVK9fkf5cRlqihZKklUfX1m%2BaQ0gtA3PCHxpLRke6d1nE84NIFi2%2BwKcWU2xxPJC0bjnbFBMAL0tOeLFK7lvarfrQsRR3%2Fhdpmap%2BwhFfPpBzQRRatMRZ%2B3LKZbsoVWCf3XMXdssLhk4oz98pZeh61m7tot%2FxXTGnQ232vgmnDuq1bwfruKqQMsI8K4daztqOfJvy1IRYANgvqgnQKBZwnkSpvdtgxnD7pnSEvSrvmdpxmjU3bJvYJ29831l70j2joLDhyyaeyNI3d9oAeA6Xvea64sGMbGMqR1unVSepRbGP72GlQPQwDmq87N19qYBi20QAgPo7YXfFBbeyMjXFrkv1kpWhMDTwbCX6bLW2NsJDX9dvmqh%2B%2B85%2FQVLWJxJAjEP4LNa0NbslryfLlwDnm9yX4zPvnT3nFqqhMK2iib0GOqUBYC4zJ7L1htBSFsi40jaiqmTF5i8DYD%2FRAoAz5ZTqoTYayFXdpyu93x2cMB9YyS7IsdnM06MvIReM1Rl2SIeaJPG18XQFG0bdOvgZNMnkvQkdSrSS361lM6BZjXaWoXPOXahY3dqfUcV6buPsFXu44NBlsC0hIn8ZN%2B6MSpT9EB%2FHmK7Gp6ID20bN%2Fmog04TPTChShb6BnCAuhFNkEpf2KuQxbTzN&X-Amz-Signature=d77e55ad1dd69a882bfa6bff0f85526389689e7e81a9dcd302bbfb8473e09c83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HP2ZSNQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGMKQYRNhQsl5VxH4t2eK%2FYmqnuwIamWbwbqIe8qEDSEAiBc208C18hC5NXfvVqK7fs%2B%2FRHwLdckG%2BJmifRUKZGDrSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMCmySl8y1J8T%2BsMH0KtwDtErdhoIdAx71L5l3mc9VUG3iDGBrwxcfc90XYZETK59S9yRBoUNc6YWF1IC8HVx9qO5uKpaFvJdU8Joi9zQmrEapafJhG1Tu48FZO78tk5AY6oM2SqZ04Y1Dze%2BE4Vlcd5TcUvZGWEEvuFqPIYVHgAUsTv6PHNogiTc%2FVXCWpiM0f%2FpSuwUVtxQfkjc7dK0WepDJsapfoZZidCvi2jCHnAcOSrNrOG03tYhteoCo6iJQlk7WcHEXBtZa18inCynS2cuB7bRWQv6LDevQWgF6ieK7IO9w096JYGZKhV5i6AuBM1ERK0nF2tDdpqGU1V99rsqdo5Ils5SgWAgAu6yInbdkGKoYzRG1WNuqGguSlX8SSKf1L74xHz5jqGndb8jHW9yKOOxxQLKJ1EDRTZt4iavhRoD%2FF3jMExXLGDL7zLYV6TJbvaAHr8zL%2BXopQO64S0yHGzr8DZoRYEXCa9DZwKBPcxLgu3hk0mzSK5MDNknVKht8SMesEHyCuESR2AcTt70rcX%2FWtDP7QhzVRuuJjRFLhWFIH4QQ0Nby5dAjVnJu%2Fxe7o4cEEM73wlnCZiixK2SJ7NSaDHNu58VjQUuMNkWTuSBKhlDJIczqBHyB3xNMtR3pvxK5m5KAMRwwk6KJvQY6pgF9W3Nj2%2BbXfFjZtJhAAw6kzjNY7rTPGPQTb5XurNmQtskkG6VK5C28XBMolpKA%2Bz%2FzfdrgQjgLPmIwkzErHKdWx20nvyG37BGS56EG0OVOtCcxHFY0ORNkI9lH6SID8oZQ23oL4BcFJXFfA12pr33GjQ%2F4%2FPIFieaQLxloVedXnNxd%2BkKTeVPgbP0cQwbQyyoK6FPChfexQR9BSyzsseO3GUpXh3dd&X-Amz-Signature=ece391390261e5c043c96959847998b5ad84d3a892f4c4b0aee48949982a5524&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5HWZB2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCGxkeCkEukUR03Qd8FscGzU5tiQRRsXEhJvyn%2Bo%2Ftx0gIhAJTOML3LMjnVuN6%2FStYftdltsmz%2BTk6Zzb34jDdPUEnHKv8DCDMQABoMNjM3NDIzMTgzODA1IgzNMJYB002FeNxdp88q3ANik2kdine%2Fk9uA3k%2FNFWSGnfm1kc5Y7km8f3w5kvuVvmeFnJAemb4O5zmv%2Flxvd6OUNo55bpTxlSh30VnSSbpmCkt4r%2FJLAgxKV9CL5B2hTg6MYECSOe2VMrDOuXpxYQLOHTRHMCQxB63dva5MWcSFZla45iFGTBG0xyD8z%2B7TT3lfo%2BQOAqexb8HRnHercKYQHkaUXGi7OyX7fIoQTjMwvfusnLOsE0ED5Sa4Rob%2B3WEIX8hwzi0lTO900F6DFG722Ot732p0TX%2BkKokgz1OQZfE5zSlINBjOlEks3aH9JnR8Zo3SvNx5%2BZXzp3RG93ngt2DW%2BOaM89STCOUU%2F8wpkwrA9ntOBYsbARXWPHyDheKvsiIIrHw7s3wdhxVcLBdNp5TdOWfZTVQnbIgqXFtxijoZdV62wT5Sfpq1KkLLdCdLOcRiLREQa8uP0j0tvaouAIW73Z6Ta3DZOnkDks8b3YdXphogYYcVwgUa14fACZX%2F4%2FkuwtRY2CPS02LD%2BXR7b7DCW48Q1JpWg11QQo4Tdh2aZdjnQrYfqQ%2FZhQaGjN1G4W0ZPsExJYztyXQjf9yZBLTITR3JcNX6t3ye6lWS%2FSXkYtlQ1t7EqZWL%2FT9jnzvhfYwO9KJc8iq7VzC2oom9BjqkAcJ3DJiZL%2F1yMh7%2BGMu3dVx%2FVw1Nvn%2F88K0cG4ZEleoHDCWMuQAvip1XwOA0GflJzPaBbStnQjizk5YdGg2hLBVxY9EQz6ZHazCxex2JKdGbEu58RRWGCsMwk7y1rN%2FbKraVK5iVdXC7RMOQOeYQENmM5Xllka185iqSD50YK1t%2Bh61OzhB%2BH7%2Bu7WB0LAknEGn%2BNMuXyytL8fvNp91%2F9roMMMWJ&X-Amz-Signature=f6fa82f1dedafebf5825b6eab5d41c86752d377d4879763d3ce1fbd8b9140113&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
