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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XUQNEG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2B8TtEFdZcdbO0XGY0n%2Fhw4ef5BrcK9FktRk8a2XYvQIgN9aRYeYJRNTajk3NBqXx9KMc9WCpLxw%2FGwI4eKnburwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfGL9zHmJuawuoOGyrcA%2Fwo1MPvpVpv3cCaTHcQOUQFbjwADdzoMiJua0WRXxC5%2FeQf%2BBl5JCoLGTinB%2F7qomUIA2yG5yGx59VHLhyhr4ROr1mlv1eydzTkcj5oPu5VidZBCfaZ%2BrFeHin4Azb3k%2F90VDbdbkjZKDIvhHuRmn3vRkug8Akd%2BMHVsXVopD2hEDdd3D23rlj0kqjhWKU9V0H3cwzNXL1UDXxqLRolwkjFqs92SvcJDYrOtbWrYqwDZGBc6%2BuLg5gkOA%2FMHfTg2Rath8qF4ERzE9jaB1r3JH9EX6lFBGnSLFHjRT0mLbqMwcgpyd0kXseKO5J0a4BzBu5nHhA4cshpw7TwCTPXgEbnf4TFK9KCLg1QzYOggMcgiXw7MBu08KlhSgebCNMGn0oNjSaeCvsIeZl3pbIiPLSkC2bzi39Px0FLDt7V3TxeiirbOQqFHdEEnPz7atNf%2B0P%2FyBhrEjAnhbYwFW6KTtU14id2Hbi8RFebsz5GnGH0OYE4eJJ6uUioJOUMJtp7%2FiLtab4Btq2HsPkoMQeE8mEglKqFtwziB5R%2BRydSOyTmolIpvFnFfXb9z5H%2Fx5ruEz4seSj8Uj%2FzRrSlS7zIYjZATgkkcu2qyGUipJY4lZHBa1f1wCnbpaXih2AYMKbVzL4GOqUBnhxKVDgEdO%2BeMe9ziO7lU3VstVgjjmxBiJRrB614ZaxwIwoRrA%2BfVxrhUd5JOT0Z8Pe44Pz%2BZLlL5x805rJot4tH2c2teIBGrGYSh0H9lJLck2g%2FBzZSQMWkbF%2FuSBVtpSSTiSenHp3jLuwH%2FvtVti4uSq2q%2F9ipV%2BoNVMS9XjHBvyU8xaoRn71EhcryGHtQLpXayEEmd8u0XQiFHobO7SvWFrQa&X-Amz-Signature=411a70db345b7ed5e8ccecc2ef11a093d6cbbf4825bcf942c668448185f9fc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XUQNEG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2B8TtEFdZcdbO0XGY0n%2Fhw4ef5BrcK9FktRk8a2XYvQIgN9aRYeYJRNTajk3NBqXx9KMc9WCpLxw%2FGwI4eKnburwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfGL9zHmJuawuoOGyrcA%2Fwo1MPvpVpv3cCaTHcQOUQFbjwADdzoMiJua0WRXxC5%2FeQf%2BBl5JCoLGTinB%2F7qomUIA2yG5yGx59VHLhyhr4ROr1mlv1eydzTkcj5oPu5VidZBCfaZ%2BrFeHin4Azb3k%2F90VDbdbkjZKDIvhHuRmn3vRkug8Akd%2BMHVsXVopD2hEDdd3D23rlj0kqjhWKU9V0H3cwzNXL1UDXxqLRolwkjFqs92SvcJDYrOtbWrYqwDZGBc6%2BuLg5gkOA%2FMHfTg2Rath8qF4ERzE9jaB1r3JH9EX6lFBGnSLFHjRT0mLbqMwcgpyd0kXseKO5J0a4BzBu5nHhA4cshpw7TwCTPXgEbnf4TFK9KCLg1QzYOggMcgiXw7MBu08KlhSgebCNMGn0oNjSaeCvsIeZl3pbIiPLSkC2bzi39Px0FLDt7V3TxeiirbOQqFHdEEnPz7atNf%2B0P%2FyBhrEjAnhbYwFW6KTtU14id2Hbi8RFebsz5GnGH0OYE4eJJ6uUioJOUMJtp7%2FiLtab4Btq2HsPkoMQeE8mEglKqFtwziB5R%2BRydSOyTmolIpvFnFfXb9z5H%2Fx5ruEz4seSj8Uj%2FzRrSlS7zIYjZATgkkcu2qyGUipJY4lZHBa1f1wCnbpaXih2AYMKbVzL4GOqUBnhxKVDgEdO%2BeMe9ziO7lU3VstVgjjmxBiJRrB614ZaxwIwoRrA%2BfVxrhUd5JOT0Z8Pe44Pz%2BZLlL5x805rJot4tH2c2teIBGrGYSh0H9lJLck2g%2FBzZSQMWkbF%2FuSBVtpSSTiSenHp3jLuwH%2FvtVti4uSq2q%2F9ipV%2BoNVMS9XjHBvyU8xaoRn71EhcryGHtQLpXayEEmd8u0XQiFHobO7SvWFrQa&X-Amz-Signature=8f49290a41b1709b92694ae9244e1a191caf8c60169e21804acf80c4781b3517&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEC2XCRY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBKstmpWxtLZfAcXOtUOVp6YV%2FMdm%2B7wYWtz6lXOO8aAiEAyPYNTrMi8dpxJqD%2B63SXpsEBQE9fmHrkCwO43u8%2BC%2F8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClMBXIlM0ZHFZjhRircA3zCVy9MfemRT6Pahb9bOpCHEXkbbQiQokAOqmhvgThZ577RLPHgQ7Np95xogsxZPtmibQg2JWLGe4OXJatcw6K%2BV9cBqt89Nld2Y%2BhzmGBgU9NVfAOa%2FBYMoW8WlhmbsOE6YYJMTmET%2Figc24ay9Sb94xPZpPqgmt9WWOUYf9hIOGOo4Y4xPxtb5s5SEg7krhCl91KzrdeHzocAI%2BrilmzFX1NRA3PQPB0dcDy8DwHQ%2BH9rygay8xj%2FV54usYuQAxMJDlNGH24KFvE1diVJ1N2duLFrnHajZLMP%2FHoLYYm7LtJsOtk4Gsu0r%2FEZMEfoi84FWpLNXq3zyK6GuQD2k9kD3vQgACuku3AY8%2F2HxTqNXIAEZBOp3kKhOT67rGPAcg0zMH2kPn%2FrmgFiMJWrVF2SHiwDzAYJBo0tN%2FdKwAfabDmy%2FIbH0edQocdwusz212OCv5t373h0NZ4Yajl%2FUPMsumy8QxhiIPadNHpVR2rciJbdn8FCGK0SAtLHRrC8TmkusSsll55AbvckcmnqmwZsFdrTRkXWHdxYhTjQ4mJz9SiLSMK9UOC0iiaKWcPp8PkaJcvUvpE51JPbXUFCKQQ9UYPt902VOLvh6ObMqDzm68m%2BvDyxIND%2FZ7ytMML1zL4GOqUBVlYNn%2FRAqnKxOsYwVzEETuTfIlrL4Lpe%2Bah2Y3QO0V3WmSdtOR8Kq90serVYWk4idcVRRKzHCovz9YRu4g2rpYJI%2BkCEutDWLZy25U3wY1%2Bf3DOIxIAw%2BntE%2BLlEhE4wGGJ4ZE9h1%2Fw2lms%2BEL4sJgbe6L8ZVDxlrxoqtFf0L6qvruRUFKz%2F%2FFc80FTb4r3v5B3n9SFTTmVnThDH5%2BISjYVHb5uv&X-Amz-Signature=839baa8613baffe61670a9934db34010e416158334039c3d1a2bd6707a38a2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6EOBHA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDkghWcFPtdPwlIP7RgroQhN8kKt5mtfOS4K71wRUKuAiEA6YaZqtzPmDGvoSN%2ByTdZfffFoG34jZO2LO7QYwwx19wqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkDKWLwlsDhqUESHSrcA8z36TRFrXuGgh5fRNswkcNNgRkfL2YlZH62AjPturKHWBLnGD3m3vSzY4RozTuT4WSrQjLiH7lHspsJG%2B%2BP1bucEaEEEMej9A8TOLfuYr4%2BZ5%2BD%2BiawN2RBbWz%2B3PpNslu65EGMuegh3qe6uzq0bpqQ51N0RbViuc9p3vFshbdqqOL1pI4CuSPxMiIr4Fo7ioA0DxEfy9lD6ouzr8yaKUpMdIaQeRZ5NA1JaWx3GgmBmROua5JSiiBhrFcMuHLkA6VGKNWKkfcgBtwUv9BslQep6kGCwVwTR3wqKPm4hje9wkEpsr5u9ALF2lI5FfCz1Uzxz5R2yeB6945NwHq3GEUYrPJej%2FsKUxqcgh32rJVnfUWX3KXzDiZH0OQS0bPou3ZHaxP9sTKmSmfvgLRNJCi8edRQHRfnws653teTvaLMn0PVN17YGvfG4rlvH9H2Wcnqwx9BjRrUHJwZjZQKBS7I8eO1d%2BAGxQPtze8xfU5WzrlBh7s5WbK1%2B537tYWKRKNIzumVLFT6ZGASTirw2yw3IHSWGTgv%2Fon29KRTh%2ByTRK8lxrM%2BcvrtJjLmBjk5XG2l72VPfnnlF392fsiGYUwJdP00H9WCZkxz4RO%2BBQCl5H%2FxCRCD1IjCtqtPMJTVzL4GOqUB03pILVxS4sjKSQB%2BKd9QKVcMflATnyjs9jTVRTFPXrq%2BlukY%2FvFNciNvNMLIXs26omFykj5gltLN1W5%2BBJOzZ8OG43UD7aumRny4%2BBxG3duqc%2Bxwk5jULgjtTgTsYONNlqEEWr3uhYxetkpcWhfhFf4U%2B2wzR1cOgP7SV7qAdsLb0wEeuNIPT5ELF2Y6Cff4QHMN5TIVgIgwvysTtR2rePZyZm%2BF&X-Amz-Signature=f27fc3f465f03735a08d32063289197a2718c4fe69657754a2ae30a526d857aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5XUQNEG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo%2B8TtEFdZcdbO0XGY0n%2Fhw4ef5BrcK9FktRk8a2XYvQIgN9aRYeYJRNTajk3NBqXx9KMc9WCpLxw%2FGwI4eKnburwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfGL9zHmJuawuoOGyrcA%2Fwo1MPvpVpv3cCaTHcQOUQFbjwADdzoMiJua0WRXxC5%2FeQf%2BBl5JCoLGTinB%2F7qomUIA2yG5yGx59VHLhyhr4ROr1mlv1eydzTkcj5oPu5VidZBCfaZ%2BrFeHin4Azb3k%2F90VDbdbkjZKDIvhHuRmn3vRkug8Akd%2BMHVsXVopD2hEDdd3D23rlj0kqjhWKU9V0H3cwzNXL1UDXxqLRolwkjFqs92SvcJDYrOtbWrYqwDZGBc6%2BuLg5gkOA%2FMHfTg2Rath8qF4ERzE9jaB1r3JH9EX6lFBGnSLFHjRT0mLbqMwcgpyd0kXseKO5J0a4BzBu5nHhA4cshpw7TwCTPXgEbnf4TFK9KCLg1QzYOggMcgiXw7MBu08KlhSgebCNMGn0oNjSaeCvsIeZl3pbIiPLSkC2bzi39Px0FLDt7V3TxeiirbOQqFHdEEnPz7atNf%2B0P%2FyBhrEjAnhbYwFW6KTtU14id2Hbi8RFebsz5GnGH0OYE4eJJ6uUioJOUMJtp7%2FiLtab4Btq2HsPkoMQeE8mEglKqFtwziB5R%2BRydSOyTmolIpvFnFfXb9z5H%2Fx5ruEz4seSj8Uj%2FzRrSlS7zIYjZATgkkcu2qyGUipJY4lZHBa1f1wCnbpaXih2AYMKbVzL4GOqUBnhxKVDgEdO%2BeMe9ziO7lU3VstVgjjmxBiJRrB614ZaxwIwoRrA%2BfVxrhUd5JOT0Z8Pe44Pz%2BZLlL5x805rJot4tH2c2teIBGrGYSh0H9lJLck2g%2FBzZSQMWkbF%2FuSBVtpSSTiSenHp3jLuwH%2FvtVti4uSq2q%2F9ipV%2BoNVMS9XjHBvyU8xaoRn71EhcryGHtQLpXayEEmd8u0XQiFHobO7SvWFrQa&X-Amz-Signature=b4f4ab312f4f9d3ff37b6d558a545564495175d17cc27efedd6e5d8257b4b988&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
