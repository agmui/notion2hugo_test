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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665263UMZ3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZEUjPe5ONGttHQCa4ypRFy5WPXwC4AISygQekbejwxAIgUSxo%2BmonSPJwZP1kGv%2FmfmtIO%2FkWvcuOuouRf%2BtCE24q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKOsIyUGoyEb5BWNTyrcA1M1OuIHoAbozgN%2F1k2tlqcvTgwUzNcrh4OBvZWN7M8IIFTyx%2BIy%2FC8bDDdD7OiPeT7UjYtZQSs4OpVhz2RFNGdLn%2FrvrpN4Yr%2BLopkusTmLP5jXgQvtOzlSZcCUXd8URcagbGF71lM9xnlGRD8SDcFALl2pGntiU4nHTp%2BYKx2L7b5rkgdH6lhoO5mSlsGmmWxnWysJgqkPGFcyTLRP1jOD0WcaBNu1zO0NkoPp3JnLdHWW74YmfqIV0z5iFEpP8YMvO%2BjqKp0bvCQKlHwGPp7mKiHJHNrfPC5SP0RUVGFjQ%2Bhkgk96esV6jNWtoUKIW9wDFjCF2enXJdrfZzQ1v%2BGOs4xDVKIwRRYPrO%2F9ral976Mqn056nWuPuoHmdpO%2F8HEkBv6qDxrYze9WMr341K3vOvryrVXTzPDnTdvC%2BPrGqRZFgbVa2cVbQfk1E5yUObaXEBvV42p%2FLR5M3awy%2Fm9tZJIDQNhA%2FiVwn8O83aaHQsKtvcf%2B5OP3OKcVnVfmoVggKhoykggL2jhF4EXn7ehAosxf97hK8VIc6FaLjCpgJXC326KZfN7Vloi88iBiE8QViUmG%2BBBxv%2Ffb9eOgCNjpUZQXENKa2MFlD04Qz0jZpYC5qM0bXk3bGDx5MIPN0cMGOqUBXLr7YDXa0quVGfheKmmezWgy1pDu6%2FoG4Hju9Itaag87szrdUBmbOcmA6V9n23L6tYNvLB3V4g1yQ7dIYOD1SoROfHPqHHTBZBH2cFbaCM7Y%2F2eA6nSzq5Vt%2FRX0LydKixl8Cz942klvt8zAn1B%2BvIGONcY49xwbkG7NxuA4bNC9ZHekNWVOLN5RhgaEWrmhX3Q0vGeVofX8XV%2BkJS6FXf%2F0V6rf&X-Amz-Signature=cbddcfd022e9e5dc108f513c12079f22ab2f42f088fc2ff6ddcd40201756bc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665263UMZ3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZEUjPe5ONGttHQCa4ypRFy5WPXwC4AISygQekbejwxAIgUSxo%2BmonSPJwZP1kGv%2FmfmtIO%2FkWvcuOuouRf%2BtCE24q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKOsIyUGoyEb5BWNTyrcA1M1OuIHoAbozgN%2F1k2tlqcvTgwUzNcrh4OBvZWN7M8IIFTyx%2BIy%2FC8bDDdD7OiPeT7UjYtZQSs4OpVhz2RFNGdLn%2FrvrpN4Yr%2BLopkusTmLP5jXgQvtOzlSZcCUXd8URcagbGF71lM9xnlGRD8SDcFALl2pGntiU4nHTp%2BYKx2L7b5rkgdH6lhoO5mSlsGmmWxnWysJgqkPGFcyTLRP1jOD0WcaBNu1zO0NkoPp3JnLdHWW74YmfqIV0z5iFEpP8YMvO%2BjqKp0bvCQKlHwGPp7mKiHJHNrfPC5SP0RUVGFjQ%2Bhkgk96esV6jNWtoUKIW9wDFjCF2enXJdrfZzQ1v%2BGOs4xDVKIwRRYPrO%2F9ral976Mqn056nWuPuoHmdpO%2F8HEkBv6qDxrYze9WMr341K3vOvryrVXTzPDnTdvC%2BPrGqRZFgbVa2cVbQfk1E5yUObaXEBvV42p%2FLR5M3awy%2Fm9tZJIDQNhA%2FiVwn8O83aaHQsKtvcf%2B5OP3OKcVnVfmoVggKhoykggL2jhF4EXn7ehAosxf97hK8VIc6FaLjCpgJXC326KZfN7Vloi88iBiE8QViUmG%2BBBxv%2Ffb9eOgCNjpUZQXENKa2MFlD04Qz0jZpYC5qM0bXk3bGDx5MIPN0cMGOqUBXLr7YDXa0quVGfheKmmezWgy1pDu6%2FoG4Hju9Itaag87szrdUBmbOcmA6V9n23L6tYNvLB3V4g1yQ7dIYOD1SoROfHPqHHTBZBH2cFbaCM7Y%2F2eA6nSzq5Vt%2FRX0LydKixl8Cz942klvt8zAn1B%2BvIGONcY49xwbkG7NxuA4bNC9ZHekNWVOLN5RhgaEWrmhX3Q0vGeVofX8XV%2BkJS6FXf%2F0V6rf&X-Amz-Signature=90add89041d8e5767a85cd80a93eb662948335426ee7e82ce31185a5812f3b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665263UMZ3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZEUjPe5ONGttHQCa4ypRFy5WPXwC4AISygQekbejwxAIgUSxo%2BmonSPJwZP1kGv%2FmfmtIO%2FkWvcuOuouRf%2BtCE24q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKOsIyUGoyEb5BWNTyrcA1M1OuIHoAbozgN%2F1k2tlqcvTgwUzNcrh4OBvZWN7M8IIFTyx%2BIy%2FC8bDDdD7OiPeT7UjYtZQSs4OpVhz2RFNGdLn%2FrvrpN4Yr%2BLopkusTmLP5jXgQvtOzlSZcCUXd8URcagbGF71lM9xnlGRD8SDcFALl2pGntiU4nHTp%2BYKx2L7b5rkgdH6lhoO5mSlsGmmWxnWysJgqkPGFcyTLRP1jOD0WcaBNu1zO0NkoPp3JnLdHWW74YmfqIV0z5iFEpP8YMvO%2BjqKp0bvCQKlHwGPp7mKiHJHNrfPC5SP0RUVGFjQ%2Bhkgk96esV6jNWtoUKIW9wDFjCF2enXJdrfZzQ1v%2BGOs4xDVKIwRRYPrO%2F9ral976Mqn056nWuPuoHmdpO%2F8HEkBv6qDxrYze9WMr341K3vOvryrVXTzPDnTdvC%2BPrGqRZFgbVa2cVbQfk1E5yUObaXEBvV42p%2FLR5M3awy%2Fm9tZJIDQNhA%2FiVwn8O83aaHQsKtvcf%2B5OP3OKcVnVfmoVggKhoykggL2jhF4EXn7ehAosxf97hK8VIc6FaLjCpgJXC326KZfN7Vloi88iBiE8QViUmG%2BBBxv%2Ffb9eOgCNjpUZQXENKa2MFlD04Qz0jZpYC5qM0bXk3bGDx5MIPN0cMGOqUBXLr7YDXa0quVGfheKmmezWgy1pDu6%2FoG4Hju9Itaag87szrdUBmbOcmA6V9n23L6tYNvLB3V4g1yQ7dIYOD1SoROfHPqHHTBZBH2cFbaCM7Y%2F2eA6nSzq5Vt%2FRX0LydKixl8Cz942klvt8zAn1B%2BvIGONcY49xwbkG7NxuA4bNC9ZHekNWVOLN5RhgaEWrmhX3Q0vGeVofX8XV%2BkJS6FXf%2F0V6rf&X-Amz-Signature=e697eab48d644c714c918f2344eb2a4caee57868e51c0042f468f535e16595da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKAWL4N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDsxY%2F7hAn3EHrdtkhQWq2%2BZl3sJ05EAbPHvq%2B8TtEUrQIhANXSzLhn8qE0aolsrqUio1a23JFSAw8%2BNhr%2FdnveZ4QyKv8DCCMQABoMNjM3NDIzMTgzODA1IgzBSOW5ZUCXqdULMLkq3AOjGvXX6LUZJ6n4ocZLCiNFh%2BSH3IrIEwDWTqUNkoUeiDDdXvsEti5CC9DX1xTjYTS9nnIiFppPNomUwhoSoTpIq2VoHslA5g%2F0KtyYYVM3KNseIdevf1w8%2FoWciUq0wUtUYdDAG0KITwviOMKZCxQ%2Fwk2n5VwcbfXFyM4b0PaJ%2F60eHPsQUD4VbY5w2TPxB6bQX%2Bg1a5wZgiR3Ly8CbexECeeduCCsFoX6XiT90YG0dzELlYeiVywVe0C3Cu0E%2BqWZ8i98%2B16PMDFIm64jqOWWFqD2lpyoWWxSE4mGaNPUpYrWsbLDJHpALN2kd6BQhYbpw1M7HdGx2LeTgcnkpG0TokosOlJHUf1QeMHCR%2BltiRQ0BhmtaLzGbU5SQGJfFxoyR2OGhSr0muji03GS%2FaMx%2Be2wfTKffqhhjL6zh%2FJhP7oNzS7NHL%2BHoSHuls2Y2CUajozDo8gGzXVm7rHb6CuAG2ma6BV%2BD6bQD6ix%2FGh9sZLMRZ7AgSmqAuIDSiDQUm6JpVt2r0uvxrhMwwjrDe1ebS95p1iU%2BwkSPwB0uI4EGtOmqNwkHI%2Fgw2eU5IptJVadd7y5t3KR9tMmfRU%2BJK3gSUYXMB%2BgTAi4Q55bpdCroopPxyynvk9rwvwt2TC6y9HDBjqkATncgEC9UKMwMgpWY0fsJzwVvc2Il2rZUYe%2BksP3acBe%2Fni5CzK5K%2B1PYCuWdjiMVEjOOm2fXYF0XcpQHFH8J2JQ9Rd1PlWhz2zBXf9sWRcOVsi8amjpizS8L3cZVg0%2Fy7bxTuGyDTDRRunqZpZNDVdyIfo%2BncsVBCwv7aALBw5FnmnDJeo3%2FsUc6%2Fdn%2FFdUTULr1C2xpFKkrZStTlGOp1VVaQvO&X-Amz-Signature=8f2970b2e2a2936d07819c104a0f879ea76d6c468e5f4f6899178951122b93d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5T2HYD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDvb9ixUPYq%2BCosxMeYuiAmI%2FHKC7YnY905NuVoc70TqwIgJ%2Fdun42qn9pB3ykbdYaxgXqmfAr3awx6q1v4KiLNXM8q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHRQmGQfYFu3I9epvyrcA9iZlkgBiQbpGpLpBKn6voWN1NiKPjBH0WPNIgZThptTB8rCd4CVVflrgLPJaTMYn26n41qX0S4pBT90pZLcZbB3r%2BO6gaeoxDMZt3xWokNa2RXDy6zDFeJdBOQsiAFsz7KryfXWEKRCM%2BnsMRerE%2Bc8gplJnJXwqyJR9iLZmTUOB2w1cBVcOFEuce6iUHkxDovFONNvTNH4RO8wPJp7ZjWsMB7lm%2BYMpLCob8suY3BEBubYJugdWV5NVV3aHBzSiSWifmSMqw%2FlPg6Sf8uGtTbeKXxlbKrS9WDRLRBFWbBFTYxtAgvzojHzUrLC0TOeAnIaByOJGdHqI2B52GsuNX%2F054EhGvDpt0lOdLvG5%2Fm8dQfld%2FtZ7LqLfuHxYbwzF%2BfJ2DUhMUPyOwwvvTCxNSSctro6gq8P8KKm4%2FgznYdAS6AEzk2Q7%2B%2BQhXOiFO%2BdvAgBGFSiAceFeG5jo7Pa%2BAXAc7CgezNR2lnIw2sddYbepE0VGRqvDHS1wgEWztNP59mnOF3r8ECPpMOB2%2Fyeu1QmJEDjS%2BHgwQaglIQNyzkpYC3utW%2F6krFnUcmnu6bbbHapGoLz35wgFHH6rEQFQQKnho4JTR%2F9u5o63jaATMbzi9dEr1DVOOCaaVhuML%2FM0cMGOqUBSY%2FC2odkhi7JI09btNTFEeVDal7nbz%2BBiIRaEXEN7pJ2Nzyabryvy06v%2ByMNkddlgHxlt2mD4b7SDKrOJ9%2BSGqjC%2F0xHxNspcvP4onfHWjky5kuKjlOEm5%2FYZRKDhXCPksVxMj3Ooj81ZOhcUQcsJLbydWJtjJScHsSJHQlKY1xVUN0KEHAubt8erOi41%2B%2BXHSkh7r2YIpubsD8pPfTYjbz3IoTQ&X-Amz-Signature=cacf531c42dec09e2dd91b3fc202e1cd014088469e1e13b7a3f97bf5d0796e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665263UMZ3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZEUjPe5ONGttHQCa4ypRFy5WPXwC4AISygQekbejwxAIgUSxo%2BmonSPJwZP1kGv%2FmfmtIO%2FkWvcuOuouRf%2BtCE24q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDKOsIyUGoyEb5BWNTyrcA1M1OuIHoAbozgN%2F1k2tlqcvTgwUzNcrh4OBvZWN7M8IIFTyx%2BIy%2FC8bDDdD7OiPeT7UjYtZQSs4OpVhz2RFNGdLn%2FrvrpN4Yr%2BLopkusTmLP5jXgQvtOzlSZcCUXd8URcagbGF71lM9xnlGRD8SDcFALl2pGntiU4nHTp%2BYKx2L7b5rkgdH6lhoO5mSlsGmmWxnWysJgqkPGFcyTLRP1jOD0WcaBNu1zO0NkoPp3JnLdHWW74YmfqIV0z5iFEpP8YMvO%2BjqKp0bvCQKlHwGPp7mKiHJHNrfPC5SP0RUVGFjQ%2Bhkgk96esV6jNWtoUKIW9wDFjCF2enXJdrfZzQ1v%2BGOs4xDVKIwRRYPrO%2F9ral976Mqn056nWuPuoHmdpO%2F8HEkBv6qDxrYze9WMr341K3vOvryrVXTzPDnTdvC%2BPrGqRZFgbVa2cVbQfk1E5yUObaXEBvV42p%2FLR5M3awy%2Fm9tZJIDQNhA%2FiVwn8O83aaHQsKtvcf%2B5OP3OKcVnVfmoVggKhoykggL2jhF4EXn7ehAosxf97hK8VIc6FaLjCpgJXC326KZfN7Vloi88iBiE8QViUmG%2BBBxv%2Ffb9eOgCNjpUZQXENKa2MFlD04Qz0jZpYC5qM0bXk3bGDx5MIPN0cMGOqUBXLr7YDXa0quVGfheKmmezWgy1pDu6%2FoG4Hju9Itaag87szrdUBmbOcmA6V9n23L6tYNvLB3V4g1yQ7dIYOD1SoROfHPqHHTBZBH2cFbaCM7Y%2F2eA6nSzq5Vt%2FRX0LydKixl8Cz942klvt8zAn1B%2BvIGONcY49xwbkG7NxuA4bNC9ZHekNWVOLN5RhgaEWrmhX3Q0vGeVofX8XV%2BkJS6FXf%2F0V6rf&X-Amz-Signature=2da435ba987ccfacae36b117cbcf9e10de8bf288b5e9acb42fa6e18bbf8d9eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
