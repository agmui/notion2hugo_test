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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLIOVT2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMz2McT3A9pdjhuZ4NbyIi8XkeVRZVEY%2BHpq7XvAjz%2BwIhAN1%2BeDUXs0TUT5qIs0UGqDTfGgXNKQ6FQBpVQ%2FjFfnKJKv8DCDMQABoMNjM3NDIzMTgzODA1IgxijWvelXV4IPmPaikq3AMW79H0I%2BAVM5QcN6gN3iJwcruKw2Ev%2BJcDonIdOOVlXsyhpVgqX5wE1fT2SPPgbOpiuH3fYfuQsiEqQPRr2BUAuPihOCBfihDtG2YGnXDJl8UFEr8eeFzzQHlBSvSxgFYrBA97ilBOBER4wE0MqinJ7Cp5xXiF%2F9Wv0Mpsw6Pj4z3PBPW%2BDKyBEaafF4cg95QE0TK9XM1AEe3EKoloEX%2FUGchixouC%2BJjOMhaARS2muSoCo4MiZfmzduDV5AG5CQZNEGwmHDUquOb2CqdJJLvMnigDIOCLY9sd%2FrtVGeICWVvc2JwwMBIE0phQyRPlbfGv27wMw4JJxdtUKWpe1ajjNxHlo%2BL6oQWhmlDnmoVCs3ahaWBo5n2JQiAhIg9jpyIfggzIbit2fw%2FUDB37fQHuRb3guqsHj8w1eDb%2FaneRkX5gc9B%2FVu%2FGIqa98sk5LyE5Zf0cmUBNMwSEZZU98YZuHDj7kFrn9wYdxsgoX3d78nPNdO5qnRlN7czLRZhkLAeuI4mqGuMWRrZ%2BfMQKaYmQtNloXgvZt9zq%2BkAjjzK9%2BOa8skVhevBMQKjK7DMdV1pSeeoVlZp5BGhMm%2BgEDFq3HB3PjiPW1bGohKMSMRkSRLbqXzQ7SYI51uQuszD%2Fzae%2BBjqkAa3iVw9rbeTkpKBhiIHnyDLDsZbKyMG8klp7KRMZvp6Y02lN4zoldThODPwPvrpf9t8jkoRQqnsRtyVqxS7mm7RfG25Lo2HTlr5dCMzqCoifMtXrQihXkb84HHQ9IlgpU26u09y%2F%2BVuiDWd%2B42wDlEJWKx13xHkTX97c6flLtDVlC67kj5oCs6jyzhgrODP9l9LnE4T4T8RQxGYWwpEIiR6Qq04j&X-Amz-Signature=dec9874adaa5a47986969cc49f553be226c5ddbc0c5321752cc96996b6124f69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLIOVT2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMz2McT3A9pdjhuZ4NbyIi8XkeVRZVEY%2BHpq7XvAjz%2BwIhAN1%2BeDUXs0TUT5qIs0UGqDTfGgXNKQ6FQBpVQ%2FjFfnKJKv8DCDMQABoMNjM3NDIzMTgzODA1IgxijWvelXV4IPmPaikq3AMW79H0I%2BAVM5QcN6gN3iJwcruKw2Ev%2BJcDonIdOOVlXsyhpVgqX5wE1fT2SPPgbOpiuH3fYfuQsiEqQPRr2BUAuPihOCBfihDtG2YGnXDJl8UFEr8eeFzzQHlBSvSxgFYrBA97ilBOBER4wE0MqinJ7Cp5xXiF%2F9Wv0Mpsw6Pj4z3PBPW%2BDKyBEaafF4cg95QE0TK9XM1AEe3EKoloEX%2FUGchixouC%2BJjOMhaARS2muSoCo4MiZfmzduDV5AG5CQZNEGwmHDUquOb2CqdJJLvMnigDIOCLY9sd%2FrtVGeICWVvc2JwwMBIE0phQyRPlbfGv27wMw4JJxdtUKWpe1ajjNxHlo%2BL6oQWhmlDnmoVCs3ahaWBo5n2JQiAhIg9jpyIfggzIbit2fw%2FUDB37fQHuRb3guqsHj8w1eDb%2FaneRkX5gc9B%2FVu%2FGIqa98sk5LyE5Zf0cmUBNMwSEZZU98YZuHDj7kFrn9wYdxsgoX3d78nPNdO5qnRlN7czLRZhkLAeuI4mqGuMWRrZ%2BfMQKaYmQtNloXgvZt9zq%2BkAjjzK9%2BOa8skVhevBMQKjK7DMdV1pSeeoVlZp5BGhMm%2BgEDFq3HB3PjiPW1bGohKMSMRkSRLbqXzQ7SYI51uQuszD%2Fzae%2BBjqkAa3iVw9rbeTkpKBhiIHnyDLDsZbKyMG8klp7KRMZvp6Y02lN4zoldThODPwPvrpf9t8jkoRQqnsRtyVqxS7mm7RfG25Lo2HTlr5dCMzqCoifMtXrQihXkb84HHQ9IlgpU26u09y%2F%2BVuiDWd%2B42wDlEJWKx13xHkTX97c6flLtDVlC67kj5oCs6jyzhgrODP9l9LnE4T4T8RQxGYWwpEIiR6Qq04j&X-Amz-Signature=b405785ed793be9f77c4f40c53c3c81ea3ab33c8002b0fcb930562f61b9876a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RYBI2C%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2But94unhQHMOmEmGZnvIGVjGiFlDS5g0l%2Fc2WoNJ1pAiEA%2FOqp5xgH8GafEufNUkHgX4O4BYKTicM%2BmyYtg8afhDgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGVm%2BHnlz%2BIbm9qKlSrcA2ntXqmeDONBiT66WBHc5S42C89%2FCjI3l3oyKB99FfWMX2Y%2FfhoQw8NCRwGFwN29MruYypO2FN5%2BW%2Blz1EMK5Vy24JoTUlF5MORhuWqm9nP2ssz5zDEOUjZos%2BXwh5P0nRoFAr8kpaj8ZzFyGLlDqFs8xeKDZPgcyJEDRxvGqZxVVNFQRqTTrDi0heqBZnSsP0htfnnSkR1MOPTRgYw9Z3KU8FkRrXAnYine0cPafpZkg4eXP%2BOdz5X9lRwnroIbLJNpqxZP5B6H11SSrvxGnObpuver0vbuSdfSJQr6nDu%2FQ1xpPqsIXmWzm8tUs4Uw%2F2msX9N8GkuDRgheME62z9ZIn3UZYD2HotI47WSTVZR%2F75FX7DieElI53H12Wo%2F7YDtwz0Py%2FRwnD5UZWwhWz6jPB0dTScYbiqsgC0cjb7r7R%2Ft9o0Ufuy89dqg4%2BorB%2BtIi3n5PhqGKY3iXZyHWQjZ8Iskst%2BqNbQC1uFjPlIqyr7jaXZPR%2BSuuuofNKktHYZk6JzquJ5NyC0xKdQ0A0bO0AiZkoaAojRVKwnetnFyVXy59PrERD50Ky6ACXP6gWJ10U96bAZ%2FX7IacfhbNkmvzBYUypfnj8u8DoZBrPxFFI9YNrY%2BvLTVP%2BaPHMMXNp74GOqUBv6XUX3VijqwwUUgDPU70F9ul4%2Fbn8E84aOMfsrYeeukC%2FCImhjq%2BhLNlunnumMCsEEyoOtxOz2ngHfJCdFBWQwxNessC6y4lv88TIszXhdc%2FaB9amze%2BOv3XpsE30Y1dF%2F6xmiC6iN5m8t8ccz%2FDM%2B4%2BhGgDW4AL27KTYQzZhm08%2Bkk%2BJDhnpO6G6jIiODvNEQKS6uHt2lRwo9AsKS%2FWQN9mxF54&X-Amz-Signature=304595bfe8cdd7085d20d8cb1f85e29e557a9277cc24846fd67a6934bc7c76ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EVC73V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESzRrtQEwdLYsQkwI0FVp36dV2CUEbF%2F4pBWcax%2FxDuAiEAkkVi56Z%2FhC3WeUZNcwMn49LrWJLY5dAtSozShOgXbdUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLw%2Bq5kk6IpLHh0JQyrcA6X0c7BygrmozyTohDYslNJ%2Ff4JcuGSks1DfOtv52TsUsVp4JIeyg4ahEFlXUwGq3UeypSuIPLBXyNiWkCbNA%2BV8gsIZ7tXa5l0Eqb5liJNtfQcOZvR%2BmMfSgvVe2eoUu6QjaMYx3yDfocSN6oCDMELl%2BdKvmxR1nWX1UIht56rf7vqNnnL42cxBvCZsFt09CeX7ekU5E46SNZwkiq9DxdtzVqFIOr62zI07c2eCLTHOuivYqUBCKD1WK71iKoBJFELkmzM5Qlsq5E1RzryBC7aiSvHB9%2F7oQM74Z7UeKj4FGMEwM7j5r%2FBY51kxaFisjkLPg82V3NmzYDK%2BnijtTIBoouUOjaIp%2FkSfWBswb0dYCa8jE6HnyEbyQjevDAFlR8L%2F4ao6RmyTk%2FHdYcWgBCVLMCJQHiVNkNIVNvBOe0wVMrD3tb4UEyOAWiiUb8tSa1fNMpq6X3eEuSN6OfXqX6YxE6%2F8TEcRwYC9ReDgY%2BMcd5yR0fC4UncTdyOeQAxsuhx52chRwGDlGA8Hijwt6PYZDkyziNf5gSxiBlOg46QCklWy%2FgJKa7IC11pN40bND4LO8EYuE4tqgMb475oW76f%2BFIr9RLLkfOhxsM8IjqBlvtnkt9IM4RDxfNb4MPjNp74GOqUBQbJVl3sSbfAedBudTFP0xaH9QxhiSACNO2mLASRnoS9JkMkHuGOSirsmmcAnQ9M9NaldfoybpXQOaGgKx8JLNTtvdwICYqYI7rp76ghVk3HLGyKfCfGkf08z96xUTV8FzU7Z41iBalQesZoxN%2BM6kSTfrZXxYZXqAx7eCR8GonzK26x5uZyUKK0kUsCM5lXne44cXyNKn2pmtQ3TK2MDNukl%2BxMI&X-Amz-Signature=e4295632eae3b41d87474aba0de7abbc0af03de217315cac6eb84fab4dde4940&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLIOVT2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMz2McT3A9pdjhuZ4NbyIi8XkeVRZVEY%2BHpq7XvAjz%2BwIhAN1%2BeDUXs0TUT5qIs0UGqDTfGgXNKQ6FQBpVQ%2FjFfnKJKv8DCDMQABoMNjM3NDIzMTgzODA1IgxijWvelXV4IPmPaikq3AMW79H0I%2BAVM5QcN6gN3iJwcruKw2Ev%2BJcDonIdOOVlXsyhpVgqX5wE1fT2SPPgbOpiuH3fYfuQsiEqQPRr2BUAuPihOCBfihDtG2YGnXDJl8UFEr8eeFzzQHlBSvSxgFYrBA97ilBOBER4wE0MqinJ7Cp5xXiF%2F9Wv0Mpsw6Pj4z3PBPW%2BDKyBEaafF4cg95QE0TK9XM1AEe3EKoloEX%2FUGchixouC%2BJjOMhaARS2muSoCo4MiZfmzduDV5AG5CQZNEGwmHDUquOb2CqdJJLvMnigDIOCLY9sd%2FrtVGeICWVvc2JwwMBIE0phQyRPlbfGv27wMw4JJxdtUKWpe1ajjNxHlo%2BL6oQWhmlDnmoVCs3ahaWBo5n2JQiAhIg9jpyIfggzIbit2fw%2FUDB37fQHuRb3guqsHj8w1eDb%2FaneRkX5gc9B%2FVu%2FGIqa98sk5LyE5Zf0cmUBNMwSEZZU98YZuHDj7kFrn9wYdxsgoX3d78nPNdO5qnRlN7czLRZhkLAeuI4mqGuMWRrZ%2BfMQKaYmQtNloXgvZt9zq%2BkAjjzK9%2BOa8skVhevBMQKjK7DMdV1pSeeoVlZp5BGhMm%2BgEDFq3HB3PjiPW1bGohKMSMRkSRLbqXzQ7SYI51uQuszD%2Fzae%2BBjqkAa3iVw9rbeTkpKBhiIHnyDLDsZbKyMG8klp7KRMZvp6Y02lN4zoldThODPwPvrpf9t8jkoRQqnsRtyVqxS7mm7RfG25Lo2HTlr5dCMzqCoifMtXrQihXkb84HHQ9IlgpU26u09y%2F%2BVuiDWd%2B42wDlEJWKx13xHkTX97c6flLtDVlC67kj5oCs6jyzhgrODP9l9LnE4T4T8RQxGYWwpEIiR6Qq04j&X-Amz-Signature=727ed331742422127116b68823c65f38b0604c08b71161815732dcfe548ff93e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
