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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFWLEVMJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvayTQJ0s3AcuRwbk0XdwvGE2f4yo4%2FhH7pkrt1kw2uwIgThgkqa2%2FsHq11OKMIHAScGbLoqa81Yhm%2Fu2068j1%2F1kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM7%2B%2F0jzx2DDo%2F4EZCrcA7liz6%2FWvfaJZxYF3Ewv8Imu5TGRzf6t37mlYS%2FsTxZPG%2FFay%2BPMuWmW2BpNxZXD7qrPKbqAH3oE%2FAa6gd35jA%2FhfU2rVfVFwHILXkjFwjDcsG%2Bw5398CiuUFtCE92WSZ7EKQi%2FXoV3T8J4NoW1X%2FoBkJuEYzKxmpJ4xjWida6bOeY60BRauhm9aun5JYIi%2BRF%2FoIGD3SQ8j6Kmi%2FscMGn1m3e8d4fehMqYre0jY9Ey%2FyUn8hypVfzPV9N2gprMnpZXPdLBePW%2B37v%2FXlIm6Xnu9BJYVQk5ulG9g8cf3Osmy29Qi%2BmItVmRaNiZZfEo4ogDyFICWHYXT82SYk2LSRrMEY5FIfGSCxWx6zI4B2pn5VyFTeNXLOdaGyvAlSFMcNShZgg%2FwkjLwEkzVpGJkJns9e%2FKkWWbq7X9InBZyHwqK0gFIb%2Bh56rDlBv9zCBtfOSfn3lB0aeEA8ZjnYyVxOixqSxUVX2TpadosEPHkBTttkOFmtrv5KtSd8bLxDRv3c0XwSpl1xy33ssWTHQ8TFljxrKz7HZR%2BrClr0xn%2B1PT4qiFQ0mHaLLOQESnWGnZnBDVAab1DxvO7GK3DAVjJOn%2BQCe7Fey9BjDr9Es3odBC4zL3bAceTrG7fuoCbMJOcrcAGOqUBYeOxxyEBahF4WMfk8bHIDKSzD8GAITiabD69XchcfR4qCol3Ywe4qXGC1MonPEJBVP%2BlqrZSUPWGg90a14jEwDtpXEX5DMcupbsrRFZa5FpAzTv8G6CpLNOUa2yXypg%2B9Rl5lyMtsceLY1it7SnnD8QT7AAF6ChZB6t%2FzbZMfvFciDdgG2Y4i2byxJ0kTPmT5qu4KIvPuiLwQFIi9lPBZPDUNjum&X-Amz-Signature=606bb75ade1d93e0648371dfd469de8d2f1e2d7d3ea8da57617e80ed013a2840&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFWLEVMJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvayTQJ0s3AcuRwbk0XdwvGE2f4yo4%2FhH7pkrt1kw2uwIgThgkqa2%2FsHq11OKMIHAScGbLoqa81Yhm%2Fu2068j1%2F1kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM7%2B%2F0jzx2DDo%2F4EZCrcA7liz6%2FWvfaJZxYF3Ewv8Imu5TGRzf6t37mlYS%2FsTxZPG%2FFay%2BPMuWmW2BpNxZXD7qrPKbqAH3oE%2FAa6gd35jA%2FhfU2rVfVFwHILXkjFwjDcsG%2Bw5398CiuUFtCE92WSZ7EKQi%2FXoV3T8J4NoW1X%2FoBkJuEYzKxmpJ4xjWida6bOeY60BRauhm9aun5JYIi%2BRF%2FoIGD3SQ8j6Kmi%2FscMGn1m3e8d4fehMqYre0jY9Ey%2FyUn8hypVfzPV9N2gprMnpZXPdLBePW%2B37v%2FXlIm6Xnu9BJYVQk5ulG9g8cf3Osmy29Qi%2BmItVmRaNiZZfEo4ogDyFICWHYXT82SYk2LSRrMEY5FIfGSCxWx6zI4B2pn5VyFTeNXLOdaGyvAlSFMcNShZgg%2FwkjLwEkzVpGJkJns9e%2FKkWWbq7X9InBZyHwqK0gFIb%2Bh56rDlBv9zCBtfOSfn3lB0aeEA8ZjnYyVxOixqSxUVX2TpadosEPHkBTttkOFmtrv5KtSd8bLxDRv3c0XwSpl1xy33ssWTHQ8TFljxrKz7HZR%2BrClr0xn%2B1PT4qiFQ0mHaLLOQESnWGnZnBDVAab1DxvO7GK3DAVjJOn%2BQCe7Fey9BjDr9Es3odBC4zL3bAceTrG7fuoCbMJOcrcAGOqUBYeOxxyEBahF4WMfk8bHIDKSzD8GAITiabD69XchcfR4qCol3Ywe4qXGC1MonPEJBVP%2BlqrZSUPWGg90a14jEwDtpXEX5DMcupbsrRFZa5FpAzTv8G6CpLNOUa2yXypg%2B9Rl5lyMtsceLY1it7SnnD8QT7AAF6ChZB6t%2FzbZMfvFciDdgG2Y4i2byxJ0kTPmT5qu4KIvPuiLwQFIi9lPBZPDUNjum&X-Amz-Signature=c8720bdff1f58c272fdfede58d404fe9febe277968c61b399a20f0166e50dad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7V3EC3Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc%2B5BkD0QEzM7hVNT6Kv7kEu%2BnWtVmdUdpkbvPpKStDAiEAoqmaL79bljX4c0zjJw%2FgDv2YkAYfdqECZYKu3FUP2A4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKaP8jFuWd5tQCdICSrcAwwsaqrlYaqmRr5uwWEinD27sKLGF8sFm9oG68r8BlwI%2BARTKPhqW3fhPpl%2F%2B4lShHz7dBHPx4lFLyQ8h%2FlySvN9ycpxMUubk2NschgjLjlBjfLroZXOrjc85Bm9zIysGEt4nmB9zgIC3eqc40mhGzq4G2c4poM95FiAOtnnBSVSpZ50xpAtzep0EMidgf0Ntubgqv5sl6ZAhoFhitG2%2FYP3nqclGhTVU5j99bPg%2FkCXhzva52rutMN%2FQrBqV40bJSFK2RKKqxuDvNVt3V8FMMdN%2FQwQeNmp%2FOh%2F1fLY3F6Z1b66XQYBamtdP6RumhNiMLPz%2BTDJq0bIAlxKJaLbS8ZZB4s5xD6PxRf8LGvCXktiWGKQytlnAtYdG7QvHlj3gW57OeyYdNWsH2nPXh322HoYs9pXg7ybRN7GQp6TyHfy3qBriUi3yo%2BiAVaSHN4YkAAhcj3LpWmqC70A4Yu0w0A4yYcW%2Fq3WdH4GfzHvK5%2B7t8pcLQD%2Bf4FelKOpFAppS9y1G1kKQdltKWgRMbimGpftfFje4MElIh6BuEyCNU6Wt8Gi%2Bvz%2BLt12IQuN%2Fti1zq4EsRysDnCOrLG%2FjlFxJf%2BEizkIst0ZWaH5Y03A6x2yCN6zW9SLDuxvFaF3MMGbrcAGOqUBLro2gSe9ZWzA%2FUCST5rrME9XosEaK%2FJNhGWKmJeNn1HOGLHa%2Fw53qs8eD4SP26nIFALH2qUmm6rgzWUhx5YWOxyUaFGm%2Bm10Pm4jdg3z9osVoYllaIDiP4AYMrWsykDak%2BJITG0OvTQtqGbqzRj5%2B%2BJnXuAHVwfs4%2FsWdYvTArjC9LuyRJ3mIBTFSogqvMymBZyICGCEyC295vV1%2ByEoye6TIx5W&X-Amz-Signature=c79224c67f4f531847c230130ecf70ee66d9ad3eda92a3a0ea017a8cefe288bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QY3GJQM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQWewLK%2Bi6g4ZCQsKWjyWNInR%2FDeTrTz%2FghDG2FDz9mAiEAkY58C0zqn8NSrqGchX%2BbVFen5JDtwLl6ZfDAyH%2BNxRwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGfiae0leeri2zRwYircA3Gxg5x5M6XSeVv%2FfFY2e4AS8lScBq4obc1WJnR3lrpPxl6pKzZzADmCavnX6xspX%2FvAErjY6WLqAs28cmpdKkJ5LaDtcazdpwQyVgTn4A6zC%2F2mdvx8BO8RCs7pIi0bhKDxZh56dM%2Fjc0dVoJdx7PZQ%2Fkfi3c2U0z3NVvh1ZtncxOWHbYppncp949XP23DR9kEQlCcPawGOwZcJf%2BS22r9KPSOlhPQDdy580j9aFmRf1Be1gSXSAGCV0NI3e0Tf0ZbLQmYDA%2BcA3cDt8vVtc2JlJrR%2B%2FGZgwHUpdLnn2uPOQzw5n5u7e%2BPVMYkzYZGGuyEBmhr38LRSE9tLlElImdPRgF7bgSmD7%2F0H%2BBVSGYs0LXmMILKFbHAUNZkFoahGelOjYXGyPoensFrIutQSrqWAQiYEHqmd8xaG53MOOLU1Hv78m68BQYXFQonU4r4ePLYoypwyvpyheKkHa07FnlyQM18V1fQJ2vN4fqWdyhT7lASqKMNa%2BGH9tu0U1ffBZ838qUWTpmCNTACAKpmLJXxKBBu3k%2BLtttuqGRUD8bZVEO2lkCJnCcq63otNPsnomq%2BiXhFUA9ieN6yShaJARbUngPEELl40PO%2FrrhjpuiSFA6V9AuSF%2BkKgfeudMLOcrcAGOqUBkre69Odue7Ghafii4dzBcrM7GJtOeC8%2BIMgBPHp76AmIcF%2BlrjjNY4DD7uxhqXaYcpFYvYnzFhAp3hugBkK3QEfOeARHqydS6qLn1Lc3EZhDWTNXEBI2wA%2BkXQG3FUN0%2FjCsbjeanlmSuxstuNCz%2F2HpHtdHiXDon5o3bR4nNYlUrRa4p%2F3mAIf5eun%2FAfVL%2FyDfwSYrJ21I5ZTJvRvpT%2BHxEoAm&X-Amz-Signature=66bfe726bba587308ef21b61637622bd08edb4ded4b07bb92e6818b64ad2179e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFWLEVMJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvayTQJ0s3AcuRwbk0XdwvGE2f4yo4%2FhH7pkrt1kw2uwIgThgkqa2%2FsHq11OKMIHAScGbLoqa81Yhm%2Fu2068j1%2F1kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDM7%2B%2F0jzx2DDo%2F4EZCrcA7liz6%2FWvfaJZxYF3Ewv8Imu5TGRzf6t37mlYS%2FsTxZPG%2FFay%2BPMuWmW2BpNxZXD7qrPKbqAH3oE%2FAa6gd35jA%2FhfU2rVfVFwHILXkjFwjDcsG%2Bw5398CiuUFtCE92WSZ7EKQi%2FXoV3T8J4NoW1X%2FoBkJuEYzKxmpJ4xjWida6bOeY60BRauhm9aun5JYIi%2BRF%2FoIGD3SQ8j6Kmi%2FscMGn1m3e8d4fehMqYre0jY9Ey%2FyUn8hypVfzPV9N2gprMnpZXPdLBePW%2B37v%2FXlIm6Xnu9BJYVQk5ulG9g8cf3Osmy29Qi%2BmItVmRaNiZZfEo4ogDyFICWHYXT82SYk2LSRrMEY5FIfGSCxWx6zI4B2pn5VyFTeNXLOdaGyvAlSFMcNShZgg%2FwkjLwEkzVpGJkJns9e%2FKkWWbq7X9InBZyHwqK0gFIb%2Bh56rDlBv9zCBtfOSfn3lB0aeEA8ZjnYyVxOixqSxUVX2TpadosEPHkBTttkOFmtrv5KtSd8bLxDRv3c0XwSpl1xy33ssWTHQ8TFljxrKz7HZR%2BrClr0xn%2B1PT4qiFQ0mHaLLOQESnWGnZnBDVAab1DxvO7GK3DAVjJOn%2BQCe7Fey9BjDr9Es3odBC4zL3bAceTrG7fuoCbMJOcrcAGOqUBYeOxxyEBahF4WMfk8bHIDKSzD8GAITiabD69XchcfR4qCol3Ywe4qXGC1MonPEJBVP%2BlqrZSUPWGg90a14jEwDtpXEX5DMcupbsrRFZa5FpAzTv8G6CpLNOUa2yXypg%2B9Rl5lyMtsceLY1it7SnnD8QT7AAF6ChZB6t%2FzbZMfvFciDdgG2Y4i2byxJ0kTPmT5qu4KIvPuiLwQFIi9lPBZPDUNjum&X-Amz-Signature=c41255f53c333af960cc5bcc3046198cdfc008b3dedcf8518f8071b6f521d1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
