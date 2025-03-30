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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6DKFBT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCqVaHZdgs2mmUtmfh5xPtKlgby2BOZgL%2Bx38dZUf4bRgIhAMxOdfyGqqIPRfL2mN29i3h2mDSoo5V4TVHoUjOP5UwAKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTrvX0E4jvrIWNjU8q3ANsMcejYI2IiewIT38tJJH9spbXftcYxL%2BjF37imgVt0A3Gyvh448c3Jr57q2%2BnITzqjUOFsKu2awyQ3%2BgVYKfYF%2FDzlr6EHPzznCThyl9DkmM1ePEShXrtzZtE8ucL%2B0kJLE7nsw%2B3Hnf3lD4ZilVp8VSem4EU4EaukEmIc2mUVE4ArrfFUEH1oQ1SnJk%2F9VRqS8cGW0HExncK1xRBPCjPlXGHSk%2FjQx16aTgk8FMED67BwKdknYHKoqbwBWe5dgZckdDgoO13xzh4vAu81WLFohGrADKAFf9oCvTLmBJKNYjmCwa7QJjudeRIHgmF1O%2BHkhJ7dJl2jcD4GIOXt3Ky1ovSsSvGITTsuULOelFSHJVtLW1g9Nm19pfjpChIq57uur45WIOnivDszj4z1cgUk%2BgJ%2BEFIYWnNrlOpKeGvTOaea%2Fi91Y7zACCPBQ8hjKGOrT5jYgqFDn%2FHegIHeTmQDgQcEmP5dcG4ymBmX71l0CPor%2FHc6eEvm7lPBViwRWcZahF6aYc2FzxZ5DgmO0Uu6AEQUmH1l1wOYNGkMiosmMFbUGDuYWIcOJMmaQakqwP4uPAfSHdI7UzylWjiS77mwadGvwzUNYMDEUjbFajZNSwtIweLWfT7J%2FRKCzCM2Ka%2FBjqkAUJ3rjSQsDRULm6TrGtT8PyW8m4mW9c9qHEXvDQ%2FwM20qlKCHUSDr%2BbwXVdimLsBlVRDxMhJIvgCytMWV1vwcV4RuASozxwby1LodtXeMKeg2NRUcWJjaSAypwQ0mddZNihvY1C6589Y7uMYK86RSiNkSbV00Z9YahUyw%2B7WZhQKxm310mZOzcxpGDVWGf3QU3LvDR3g5jKYZbtEKUkUgohnzM1e&X-Amz-Signature=f32ed3a97393f122a4c031821780c6381e09479d2e5d257867e80261ee5addb7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6DKFBT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCqVaHZdgs2mmUtmfh5xPtKlgby2BOZgL%2Bx38dZUf4bRgIhAMxOdfyGqqIPRfL2mN29i3h2mDSoo5V4TVHoUjOP5UwAKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTrvX0E4jvrIWNjU8q3ANsMcejYI2IiewIT38tJJH9spbXftcYxL%2BjF37imgVt0A3Gyvh448c3Jr57q2%2BnITzqjUOFsKu2awyQ3%2BgVYKfYF%2FDzlr6EHPzznCThyl9DkmM1ePEShXrtzZtE8ucL%2B0kJLE7nsw%2B3Hnf3lD4ZilVp8VSem4EU4EaukEmIc2mUVE4ArrfFUEH1oQ1SnJk%2F9VRqS8cGW0HExncK1xRBPCjPlXGHSk%2FjQx16aTgk8FMED67BwKdknYHKoqbwBWe5dgZckdDgoO13xzh4vAu81WLFohGrADKAFf9oCvTLmBJKNYjmCwa7QJjudeRIHgmF1O%2BHkhJ7dJl2jcD4GIOXt3Ky1ovSsSvGITTsuULOelFSHJVtLW1g9Nm19pfjpChIq57uur45WIOnivDszj4z1cgUk%2BgJ%2BEFIYWnNrlOpKeGvTOaea%2Fi91Y7zACCPBQ8hjKGOrT5jYgqFDn%2FHegIHeTmQDgQcEmP5dcG4ymBmX71l0CPor%2FHc6eEvm7lPBViwRWcZahF6aYc2FzxZ5DgmO0Uu6AEQUmH1l1wOYNGkMiosmMFbUGDuYWIcOJMmaQakqwP4uPAfSHdI7UzylWjiS77mwadGvwzUNYMDEUjbFajZNSwtIweLWfT7J%2FRKCzCM2Ka%2FBjqkAUJ3rjSQsDRULm6TrGtT8PyW8m4mW9c9qHEXvDQ%2FwM20qlKCHUSDr%2BbwXVdimLsBlVRDxMhJIvgCytMWV1vwcV4RuASozxwby1LodtXeMKeg2NRUcWJjaSAypwQ0mddZNihvY1C6589Y7uMYK86RSiNkSbV00Z9YahUyw%2B7WZhQKxm310mZOzcxpGDVWGf3QU3LvDR3g5jKYZbtEKUkUgohnzM1e&X-Amz-Signature=c71357a43554855f52a79f767ee2500369f2dde9c77461f23ee03a851fc68990&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2J4FWO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDuNyNpvGQuc31jeo%2FYnalCarpdb%2BxROVeQp0gOAR%2BDLAiEAqN%2FmRD6xC%2Be74YR3fOc7bXpRr85jA0TG5AA%2F%2FAT8P24qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdDihZVti0Sm8L4BCrcA2FyhQ9AV8zuvt133Y7tybjMpPUdHJ%2FfWMrj2qfUZb2RhDb6km1z6uVTBL7cOOjVcFzl1nEOZejnejEEH9rwAUiwgUPHt5xZFsUcpOCE5BQ0a7tzDu713mbyzq6pY4Unvo3D1tYBYHTabNGu2wBczNY9N7ac3tWyrHV2tWd1QwUwmQmTlMESokhBvUEoDS7%2BtlgYU1Ee7jZuA7r%2B1dmba47ZFfTl6ZgTTkPMWfoWJ9TSmfuehWYiwpXYDrfu%2F%2B5ixA8yfhVhxWNXJzfUB%2BSuuy0UwovlCAJNhqHRk9QR7q56AIzXaWqAZB5RqfOv%2Fskqj6%2FTXR6KTtQJeNHprzqGAwui4qgi%2FGb%2FB3ZQlq0xgWXqOZ1esLWZY40Xf%2FzxoEfD3%2F5OvsTZm%2FAPyXMGqh7XDNDuoIlQzcZlAWMPUJVy%2B9fcGFNuRwIpM9jzUCFI3R8nyAFCO7cA857PPHQJ0YPdifkJzVWQoqssrQsBi10ue3%2BGjcWPUPrNu04QtAxo6AzLU88s7SWlJIOp5GJ%2F8Df4tcRJEbXvOaISC1fue0VJrOiji1fl7SuaHlu02iov%2FubBAeOaow8Z4E5%2Bbdp%2BoMpsqlfER8eVw%2FbIw%2FZzwWm0cvZm2Pzjgd2rZxoliXeaMLTYpr8GOqUBYjK1wSS1gtpxT%2BpEx0XznVuShMLi70YCCbQ3SvBDY8dMQw2GKd3BCz1hOERklquzKc4xwHAZf9iVrIY9yFvUFWH9fWPIiyEIrTrEhBJ2nl3e4Utd30tqGzDD3VLd4%2BhZMj7xcchOP3NKZHHa8noeA6uNxZyLoZEs3W4sMnKRsFrX8vQIu5BXc8nN0R3tY%2BN4JUf63S0C%2BOI5SCmPAtnS2REyUqPv&X-Amz-Signature=3f260fc4b2f5f4064d4881e6cc198e1ec077eb9f1a8ccbd6fd288d902c2d6ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU7DUWQR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDzjLu81nTk8kBzBlKYvTS80h%2F01zqj7X0%2F8%2B81mH7PAwIhAMuv%2FKUGbpkCJ3rRgYun8Kjaoeg9BNrmxoakHvihgMsDKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGCd%2FjkCKzVglKu5wq3AMczSSVEhMub%2Bian9qwjtrkf8WN%2Fi4AlXDal5feT4Fsmza%2BLtHrQjBuIxMPyIRo0WcrBbPrHrKOp603sFpNx%2BDd8AORYJj1dGYsbdhmO8%2BYDS4kKum8uMMNeBeLnKqODT2cJoT0S2%2Btx4bVacKnqhNe7zQjrwaAHyS1YveALAX477%2BVKtcZD5C2jVla%2BtfYd6S4iRgDH3Qo%2FYcDNsSyjFKtUyfUyrCHdVTAPjdYTUYwfshxxFEHPJ8g43eE%2BSveYP4pUcW4RU3wTWrvWaCa3f5qMZTs5FUKh1MBXz%2BtHVw9W%2BBkD6d0Ds8Jx9dUwqCerYbc73H%2FX2ctTrillHc50hI3w%2FwdXQw5DaiH1fY4QZYGRB%2F0BD3DLb%2FgAwQKrvbg9mCW67c5rTrjBYEdPPtuN%2FYNz6R8RHNRr1v%2BJjWooXego4AeqvgeV9M1iob%2BMtrIa3cGlul5gtYruU5KrnKjoTzi3qWUrndPkqYsyxpHzF%2FaASGoA4zGsVOTVYYZ2XXcmjRQvUr63W7iKjfLv8DBqtw%2F6nYzWk8MQ4npMa3xpqQgQaX2vnQPorz5TiUWtsrgf9uXob7OMszVNykb4XA%2FIb%2BlJq2DlvTLCBvDTZUXx%2B9pX5tvpggjHXCmbvTovTC02Ka%2FBjqkAW%2BLvS5LKDvBgM4COmXOsHjwaHdLOSuIQTJ9OITK%2BKnQW%2FTfczUbE47HhKtd2fTGGTsuRxKjFsorhG1R4pMOjV7oxbTACVdG9JcBxNgeTKP1LbWCCtuUl1T3p38okI9fX9p79m%2B4%2Fp%2FHBj32KQQ7J4kbBfc0OoF%2FJ%2FbsaahqN%2BCJCsrm%2BdXrw3F%2BkGAaTPEPsA4BGGrstneCeoIolyW5jz6qL2SF&X-Amz-Signature=a3942ad96f7c72bfe4accea63a7f95e3ab728bf740cbc8b86662af036f09cdb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6DKFBT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCqVaHZdgs2mmUtmfh5xPtKlgby2BOZgL%2Bx38dZUf4bRgIhAMxOdfyGqqIPRfL2mN29i3h2mDSoo5V4TVHoUjOP5UwAKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTrvX0E4jvrIWNjU8q3ANsMcejYI2IiewIT38tJJH9spbXftcYxL%2BjF37imgVt0A3Gyvh448c3Jr57q2%2BnITzqjUOFsKu2awyQ3%2BgVYKfYF%2FDzlr6EHPzznCThyl9DkmM1ePEShXrtzZtE8ucL%2B0kJLE7nsw%2B3Hnf3lD4ZilVp8VSem4EU4EaukEmIc2mUVE4ArrfFUEH1oQ1SnJk%2F9VRqS8cGW0HExncK1xRBPCjPlXGHSk%2FjQx16aTgk8FMED67BwKdknYHKoqbwBWe5dgZckdDgoO13xzh4vAu81WLFohGrADKAFf9oCvTLmBJKNYjmCwa7QJjudeRIHgmF1O%2BHkhJ7dJl2jcD4GIOXt3Ky1ovSsSvGITTsuULOelFSHJVtLW1g9Nm19pfjpChIq57uur45WIOnivDszj4z1cgUk%2BgJ%2BEFIYWnNrlOpKeGvTOaea%2Fi91Y7zACCPBQ8hjKGOrT5jYgqFDn%2FHegIHeTmQDgQcEmP5dcG4ymBmX71l0CPor%2FHc6eEvm7lPBViwRWcZahF6aYc2FzxZ5DgmO0Uu6AEQUmH1l1wOYNGkMiosmMFbUGDuYWIcOJMmaQakqwP4uPAfSHdI7UzylWjiS77mwadGvwzUNYMDEUjbFajZNSwtIweLWfT7J%2FRKCzCM2Ka%2FBjqkAUJ3rjSQsDRULm6TrGtT8PyW8m4mW9c9qHEXvDQ%2FwM20qlKCHUSDr%2BbwXVdimLsBlVRDxMhJIvgCytMWV1vwcV4RuASozxwby1LodtXeMKeg2NRUcWJjaSAypwQ0mddZNihvY1C6589Y7uMYK86RSiNkSbV00Z9YahUyw%2B7WZhQKxm310mZOzcxpGDVWGf3QU3LvDR3g5jKYZbtEKUkUgohnzM1e&X-Amz-Signature=ac01028ca31d607028b07f758d58cb0edf3ef26b126540abe6448f36e7a6983d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
