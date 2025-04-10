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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU43NI5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIBYtP7Q85BSkTVEpP6VlQtnJcdwYkRIReleoHi8Iw%2Bu7AiEA9CwXzqfOOMn9yrPG8UbuoHCFLc4gX8L7EqC9LV%2F6gOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5IIqhtej5Of%2BP9myrcA8PAoTLgjYqCyxCgohGbczd%2FdmImGhkNMuJDHnPJD4rWnsjXPPn6iQcqX86bH6uVMfl%2Fj%2FltXM%2FTlZ%2F7Y89pUocOkm1eopNxxT%2BX4pS7gxuJZ01uP6LHWQa9bMSuI0wBgNTayt8RDGeUFJ9QRK4rqtFOxiAXTHYWdOXkw7FIehWMIWDQxd5uEKkg0GiWi0jxVtti4kDovf%2FcceVfIA4bsXpzLpSuJNzxXU8fii5URG9aWBvnf5epFDD8Ve9LobJ9g2uN3%2FlZ5odD1RbKipzSf4%2BQu2axay9kO5zKI9L%2FIyy40xVmxCJyO2Rs82xaHbryU6J9JvLiUT4usVwtebO5dqovBBHEM%2FNCgbFnLk5%2BtM7hzFne5SpoRxyo%2FUlRf%2Bgy3JatFLQlUMGGe3L9rYNvgo5ftbnwbXE6OCN6239Lmn9%2FUlw%2FN3MUxnT0kGi%2B4FDslJzViq0M6xYBlz%2FStg43qPWfnHpDl%2FcXrpAOH8gsILLSkCyNwPc1yr0zEhlQ5RGNoqzzAd5TAO%2FciDc1hrjJCg4d%2BTgYrDgUFhHkn%2FJ0MsmLpD6gBB7jVlUSWaaUYVlQSsWXB%2BD5m1SPdAzRgDk5SmwHa2Bp5aL74p26%2BVXjcLalY5HYohRDzKfvwN%2B0MMux4L8GOqUBvkTOe9VdahE8JuQ5CoCafTdadVsJtdmbViaQezgfK6O9ceT%2BmgP7mIXE9P6VGNwh%2FMSHl9wGy%2BRui8qyMGUIZe%2BX%2BP%2B4bnHZ2bnBEmrAlnpr67MG7vtovImmLUIyXWc1v32fu0b4JJqbUoF4cWv3zaAKRpvWS5x9S5VOX2PSBwEq3aMsfVUgzzA6WJNl%2Bh93V0LxYMBrdXrPzhFI7PWnC1zmMiVX&X-Amz-Signature=5ce0a83b0953877abeec16888bc79883e64bcf57d93a61e4b8702f3d71a67a98&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU43NI5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIBYtP7Q85BSkTVEpP6VlQtnJcdwYkRIReleoHi8Iw%2Bu7AiEA9CwXzqfOOMn9yrPG8UbuoHCFLc4gX8L7EqC9LV%2F6gOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5IIqhtej5Of%2BP9myrcA8PAoTLgjYqCyxCgohGbczd%2FdmImGhkNMuJDHnPJD4rWnsjXPPn6iQcqX86bH6uVMfl%2Fj%2FltXM%2FTlZ%2F7Y89pUocOkm1eopNxxT%2BX4pS7gxuJZ01uP6LHWQa9bMSuI0wBgNTayt8RDGeUFJ9QRK4rqtFOxiAXTHYWdOXkw7FIehWMIWDQxd5uEKkg0GiWi0jxVtti4kDovf%2FcceVfIA4bsXpzLpSuJNzxXU8fii5URG9aWBvnf5epFDD8Ve9LobJ9g2uN3%2FlZ5odD1RbKipzSf4%2BQu2axay9kO5zKI9L%2FIyy40xVmxCJyO2Rs82xaHbryU6J9JvLiUT4usVwtebO5dqovBBHEM%2FNCgbFnLk5%2BtM7hzFne5SpoRxyo%2FUlRf%2Bgy3JatFLQlUMGGe3L9rYNvgo5ftbnwbXE6OCN6239Lmn9%2FUlw%2FN3MUxnT0kGi%2B4FDslJzViq0M6xYBlz%2FStg43qPWfnHpDl%2FcXrpAOH8gsILLSkCyNwPc1yr0zEhlQ5RGNoqzzAd5TAO%2FciDc1hrjJCg4d%2BTgYrDgUFhHkn%2FJ0MsmLpD6gBB7jVlUSWaaUYVlQSsWXB%2BD5m1SPdAzRgDk5SmwHa2Bp5aL74p26%2BVXjcLalY5HYohRDzKfvwN%2B0MMux4L8GOqUBvkTOe9VdahE8JuQ5CoCafTdadVsJtdmbViaQezgfK6O9ceT%2BmgP7mIXE9P6VGNwh%2FMSHl9wGy%2BRui8qyMGUIZe%2BX%2BP%2B4bnHZ2bnBEmrAlnpr67MG7vtovImmLUIyXWc1v32fu0b4JJqbUoF4cWv3zaAKRpvWS5x9S5VOX2PSBwEq3aMsfVUgzzA6WJNl%2Bh93V0LxYMBrdXrPzhFI7PWnC1zmMiVX&X-Amz-Signature=03e115341c38fc5de66ee2c1ceb2a723a15eef6aa5fa8680c265e2ab7aa35a39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5W2SUA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDQKg%2BhRfVlqWupJKOGZ%2BKe7Oyx4sTnLHOethpCwSuBHAIgMhh0Tshl3Zzxby0tzJSpeiGweimjMSX2e3bqoZHxpCAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8QJHsOd0HReLoKHCrcAwqmeI0HyzM7Z4Izqf8nYS%2FKOdwmzb6wDPxT6NvkwTFHc5CbuixlvZY65armX%2BKXkXzO3mLaRm3c3Fj5EDbIwebYKT%2BfmLKsPMjYmVz36M8p3c39nJKZJxJDYcz%2F%2BYBluiZE2z2ktTvJ8%2FYfsOkcq71I43nvyWj4rusdi37dY1W6pHG1oe2ovQ9JvjeILdOQmVwxwdLlS5%2FA5GTxlMtorBeWZKvSeYV3Lwdqa4XfJBBE0eAQNfl4SKZ6zgT5HBAL1Xqf5Y%2BKIfloR8HDgzpGEjAlOe6ZwEbSueIpP%2F9stER0FotKomm8qN888EN57F%2FMUhYPTdLx3FALewUR60doK8YMQjyCNqpqcthqLEb5EoKnIPv6Oy%2Fpu9aog6R4p5lBWaUlQUbxUDVyXg0qWSKMLdyHnk5x9P9UhmU6aRJ1TR7yoRj67AhqoPhtbiBpOqA3LVf%2BFYqey7l4N2nrtzY7eFLcua7BOzYD4u%2FL4tpYRGPb765J8hnamd5w%2BptdZAGCZh%2BE0o2HKMIPEYDUOaHwEnkjVhTOnJf9JWWLF08GTSaUUaSo0XJ41U17FEW5SrHY2mi1ZpgHLxBnzZIzwgP9iWlRbQg3KBnPm3Xm5CicmmqB2wItfklS91kBMdS3MNCx4L8GOqUBwM6fh1wIKWdMIP1CQv6sASP8bhLz4ADBZGymg68xc2RUi%2BAcQJiDv9bLFivPHeMtI4R3%2Fvv25Mc7YJcsjNPifd452SqP8nsZtVgwD%2ByYzdqoUbHqB3CkJ3WFybwPdInMzAZQodKygNtVlVLh%2B5s1PO5ySkTrco5avslhgbjzAGolqFXOHX4l8ur4GiEUgqpkx9JHUnErTZuNI8LvBX2a9Dm6EXi2&X-Amz-Signature=3a0b6072a56fa2b12df8f825371009e6467caaf005c16d7beddf85734bc86b25&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GHCWPC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDjd5Weko2ET3WNX1WNyWtOpuLQ%2BOATQ7EIlXJLKqo1hAIhAJRor9UsvvKfML1hm2mWdrrZpC%2BSEd7q9MCd1egshaR9KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX33F%2B77XFkmDacxQq3AN2w1wClT7SmPWJKplPO2AOEqhNg%2F54Mh8gL5qTSYcdbgWDqFBOTnbqy0N2jVK8RbNXcrZT4%2FPTpYhKnkse%2BIG5PA2TFr7ZDadJ9fMZiItvip322z3lDEHh9B%2F%2BpkJwj%2FD%2BxRt3T%2Bc33nbw3CruVIiFjace4rSADhKmw59EhxAySvyachnx2mnXwCpMfyMgytuVIrdFjfCps%2BqA83OyhwGAuThjc8HsRW%2FR0DBKiih11T3oPr3S2b8zpkFQIdYYtSGQWNi6FPR%2Fa2zxKivhcURLdlRFZ1cFw16WRbXoSMxl8Jr4yU9w9zN5TvhH9aeK5KXmujXMYcYz3caKB2tNrWXXn2rBhruZx53keX%2FHcCowVqmrHaDqQyT2M5Tnu0WqZhSPRW8noeKqUL8fPS123iAbFOe4VdWjL5v%2FF3KTcESgag%2BcWKSIeEI3YiXrefHg9sljNt50GeV5n1uEuWaN8%2FEkP7VlQrE5HverM%2FK0GzroEkWyBnYle7b8dolKrD32tWnbZEL8m5Fh3GwxM%2BXpn9q8h%2FRKFfAAAZCzubzrmicVDz1jxHelO%2FFO7CXAvM1ELMqL35PqNkLTU4834k1WFLwTCloznjf4x%2BIcM3RdeY%2FVwBO3Z1b6DhQ4%2BPV7sDCmsuC%2FBjqkAWXcppemc%2FLvaHTcdfKYWspF1lMuuKGqz2XGsfnt5JcN6r3W6VkGUCC4vS7tUlijyaJDJPDdrS3rV69ezR642kmFJWVByaRjpxCzkjWQtNTG4jXAaiqGWcbhanhKYcAx40CIOvb3w3nEZmdgmyVJ3QhSRkvDZfmuxYMzWkX8HBxa3u8%2FU77wb6%2BqSF%2BbKcuwpoU02PWJFIGFqa7jdImynMTsZUlV&X-Amz-Signature=835b78a5d962c4b099b567105e6a2571607b0c5e432b888d2e96513e4bbaea52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU43NI5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIBYtP7Q85BSkTVEpP6VlQtnJcdwYkRIReleoHi8Iw%2Bu7AiEA9CwXzqfOOMn9yrPG8UbuoHCFLc4gX8L7EqC9LV%2F6gOwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5IIqhtej5Of%2BP9myrcA8PAoTLgjYqCyxCgohGbczd%2FdmImGhkNMuJDHnPJD4rWnsjXPPn6iQcqX86bH6uVMfl%2Fj%2FltXM%2FTlZ%2F7Y89pUocOkm1eopNxxT%2BX4pS7gxuJZ01uP6LHWQa9bMSuI0wBgNTayt8RDGeUFJ9QRK4rqtFOxiAXTHYWdOXkw7FIehWMIWDQxd5uEKkg0GiWi0jxVtti4kDovf%2FcceVfIA4bsXpzLpSuJNzxXU8fii5URG9aWBvnf5epFDD8Ve9LobJ9g2uN3%2FlZ5odD1RbKipzSf4%2BQu2axay9kO5zKI9L%2FIyy40xVmxCJyO2Rs82xaHbryU6J9JvLiUT4usVwtebO5dqovBBHEM%2FNCgbFnLk5%2BtM7hzFne5SpoRxyo%2FUlRf%2Bgy3JatFLQlUMGGe3L9rYNvgo5ftbnwbXE6OCN6239Lmn9%2FUlw%2FN3MUxnT0kGi%2B4FDslJzViq0M6xYBlz%2FStg43qPWfnHpDl%2FcXrpAOH8gsILLSkCyNwPc1yr0zEhlQ5RGNoqzzAd5TAO%2FciDc1hrjJCg4d%2BTgYrDgUFhHkn%2FJ0MsmLpD6gBB7jVlUSWaaUYVlQSsWXB%2BD5m1SPdAzRgDk5SmwHa2Bp5aL74p26%2BVXjcLalY5HYohRDzKfvwN%2B0MMux4L8GOqUBvkTOe9VdahE8JuQ5CoCafTdadVsJtdmbViaQezgfK6O9ceT%2BmgP7mIXE9P6VGNwh%2FMSHl9wGy%2BRui8qyMGUIZe%2BX%2BP%2B4bnHZ2bnBEmrAlnpr67MG7vtovImmLUIyXWc1v32fu0b4JJqbUoF4cWv3zaAKRpvWS5x9S5VOX2PSBwEq3aMsfVUgzzA6WJNl%2Bh93V0LxYMBrdXrPzhFI7PWnC1zmMiVX&X-Amz-Signature=b655c68097b8b7b03b9d4e0e1dccbafb400f5d036230c8b48b80522351b3d9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
