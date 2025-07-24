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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDERVDBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIA9NUae4qp8gSBzLlmKOpnjurEqBZFqvQDEYrdH0zLCGAiEA9UFlyx73wzC6AaRXu%2FU6zf6tmkTkfPnzUEYWnfo8IgMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEULFdJKmXJXEe%2Ft9SrcA3gNBVOcgLfodehS9183CgHema5LLNXzMwHhfMrn7o%2F3zmXZjryTmh0%2F02PnegY4HbncMO%2FffIaN%2BMIZIAom2wEw%2FCajteAL%2FWrXLLt%2B0XEpw6gediT4fs7yU%2FtdfGI9ke%2Bu%2Fo8Yg9UnpI0iKjZjnEMNs%2FG389JSseZIbE8UxssD4TVhb%2BXG2g7luaJQ90wEWlHoSfKwi9o71NPl9WdjRT8SGhgzm21uz%2B8qad29bxfUo%2BnHNFVbe5Xv1AMG%2B3O%2FSAPFVl0eNaLvuS64x3nqnnwmdKuqaJLdKxBwzMp8qPwAblzw4Ow8HVsHmQhMmI3Hrga%2F73dbUVO4dhCPqFaQss%2BVwJBo%2FGQc2Upp%2Bs5%2Fm1N%2Fx%2BqrKuONwHkiq2xcV6v%2BEG6FN585EI34ZbCh3TpjM6hrFSBseCYHCn1q7LKnKgw710K0cTqjN2ytHWkNGutnYM0clqJk36%2FEqduQ4%2FcNauYvSDCdx2%2FRgJNpyHfYrsy7a3qOQ62EYIJbb%2FUm73Tw%2B%2FVwdJJ2%2Bpq5RiemWSx14f7NicQeowjW%2FP0hcWXrcd9pCaOZTUEZUuplg8OFBk57vllYhahl3tZpyGGFsgF3havcjqHAEczY0wEL0uSLrkio1V5JA4LdG7kvLp2TMMSPiMQGOqUBUdhHtWijn3q5S51m8PLN6vF0dZeap5i2Yk6z9b7F5%2BZd%2FBta11fhqaJLom87%2BKu1bWLRKqgzKbkHLxGGb6YkNEo707pZrl0FmTyDulzvS6GVyizcrF4fTA51NurKBia9SMnN9mxfid%2FXXQReJ4VGjaNnoOWONg66HSZiDwWy9BHDEaN08NWmCSnG1ZAYKcpmNNgp7mdmuZRcGPxwyp2LxqEIJfmR&X-Amz-Signature=c073e243f70d1b3f277a8fd0778aede76ed323baa9cd069af881d5cb9241208b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDERVDBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIA9NUae4qp8gSBzLlmKOpnjurEqBZFqvQDEYrdH0zLCGAiEA9UFlyx73wzC6AaRXu%2FU6zf6tmkTkfPnzUEYWnfo8IgMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEULFdJKmXJXEe%2Ft9SrcA3gNBVOcgLfodehS9183CgHema5LLNXzMwHhfMrn7o%2F3zmXZjryTmh0%2F02PnegY4HbncMO%2FffIaN%2BMIZIAom2wEw%2FCajteAL%2FWrXLLt%2B0XEpw6gediT4fs7yU%2FtdfGI9ke%2Bu%2Fo8Yg9UnpI0iKjZjnEMNs%2FG389JSseZIbE8UxssD4TVhb%2BXG2g7luaJQ90wEWlHoSfKwi9o71NPl9WdjRT8SGhgzm21uz%2B8qad29bxfUo%2BnHNFVbe5Xv1AMG%2B3O%2FSAPFVl0eNaLvuS64x3nqnnwmdKuqaJLdKxBwzMp8qPwAblzw4Ow8HVsHmQhMmI3Hrga%2F73dbUVO4dhCPqFaQss%2BVwJBo%2FGQc2Upp%2Bs5%2Fm1N%2Fx%2BqrKuONwHkiq2xcV6v%2BEG6FN585EI34ZbCh3TpjM6hrFSBseCYHCn1q7LKnKgw710K0cTqjN2ytHWkNGutnYM0clqJk36%2FEqduQ4%2FcNauYvSDCdx2%2FRgJNpyHfYrsy7a3qOQ62EYIJbb%2FUm73Tw%2B%2FVwdJJ2%2Bpq5RiemWSx14f7NicQeowjW%2FP0hcWXrcd9pCaOZTUEZUuplg8OFBk57vllYhahl3tZpyGGFsgF3havcjqHAEczY0wEL0uSLrkio1V5JA4LdG7kvLp2TMMSPiMQGOqUBUdhHtWijn3q5S51m8PLN6vF0dZeap5i2Yk6z9b7F5%2BZd%2FBta11fhqaJLom87%2BKu1bWLRKqgzKbkHLxGGb6YkNEo707pZrl0FmTyDulzvS6GVyizcrF4fTA51NurKBia9SMnN9mxfid%2FXXQReJ4VGjaNnoOWONg66HSZiDwWy9BHDEaN08NWmCSnG1ZAYKcpmNNgp7mdmuZRcGPxwyp2LxqEIJfmR&X-Amz-Signature=70e99cf934ab23c1a75c9716cfbb2bab92f9dd9d2799663a7d6d3da61fda09e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDERVDBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIA9NUae4qp8gSBzLlmKOpnjurEqBZFqvQDEYrdH0zLCGAiEA9UFlyx73wzC6AaRXu%2FU6zf6tmkTkfPnzUEYWnfo8IgMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEULFdJKmXJXEe%2Ft9SrcA3gNBVOcgLfodehS9183CgHema5LLNXzMwHhfMrn7o%2F3zmXZjryTmh0%2F02PnegY4HbncMO%2FffIaN%2BMIZIAom2wEw%2FCajteAL%2FWrXLLt%2B0XEpw6gediT4fs7yU%2FtdfGI9ke%2Bu%2Fo8Yg9UnpI0iKjZjnEMNs%2FG389JSseZIbE8UxssD4TVhb%2BXG2g7luaJQ90wEWlHoSfKwi9o71NPl9WdjRT8SGhgzm21uz%2B8qad29bxfUo%2BnHNFVbe5Xv1AMG%2B3O%2FSAPFVl0eNaLvuS64x3nqnnwmdKuqaJLdKxBwzMp8qPwAblzw4Ow8HVsHmQhMmI3Hrga%2F73dbUVO4dhCPqFaQss%2BVwJBo%2FGQc2Upp%2Bs5%2Fm1N%2Fx%2BqrKuONwHkiq2xcV6v%2BEG6FN585EI34ZbCh3TpjM6hrFSBseCYHCn1q7LKnKgw710K0cTqjN2ytHWkNGutnYM0clqJk36%2FEqduQ4%2FcNauYvSDCdx2%2FRgJNpyHfYrsy7a3qOQ62EYIJbb%2FUm73Tw%2B%2FVwdJJ2%2Bpq5RiemWSx14f7NicQeowjW%2FP0hcWXrcd9pCaOZTUEZUuplg8OFBk57vllYhahl3tZpyGGFsgF3havcjqHAEczY0wEL0uSLrkio1V5JA4LdG7kvLp2TMMSPiMQGOqUBUdhHtWijn3q5S51m8PLN6vF0dZeap5i2Yk6z9b7F5%2BZd%2FBta11fhqaJLom87%2BKu1bWLRKqgzKbkHLxGGb6YkNEo707pZrl0FmTyDulzvS6GVyizcrF4fTA51NurKBia9SMnN9mxfid%2FXXQReJ4VGjaNnoOWONg66HSZiDwWy9BHDEaN08NWmCSnG1ZAYKcpmNNgp7mdmuZRcGPxwyp2LxqEIJfmR&X-Amz-Signature=9b663b25d454cb08c5b61a612ede2b55a0b562dcdf72637afe72a041a9a95cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4XZV4O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICpg9et4kKVoxu2Nh3BKQtKUk1sJNQC9Ovw4AFUYfHN%2BAiEA8RizGM%2FsMHppArhQgfteE%2BoHgdn6iXrZxHlD0Zz9q48q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOY0fDiATCOXGAtJ0ircA%2BsEljG19qc1IeAiN2b9X030NQ6dSk8iD75LTBRmhPsmiRAP8LHBAWNhnHePLTM9l4PdQXLxU11BTQhyDd9iSUhPMksvr2%2F%2FrsqnDyKi4XsCmulHIWahBTB6AWtddNH94Up3NdiJ9bn9Aed37IEQURnRF%2Bq%2FBuVe7yE6IiMnorsDAwXP1gpLVlzUnqPGn8j4AxrW%2BY4Ihfqk6O1mFBRzHwxckqohbbZI9GPb6a4fD73ULchSqedgjEGffPJacaDRz1S8Zi4aO9Z4uz3%2FArKSxQY%2Bu8XeAgJWkwJJj4cGF1ZSpgFXuD%2FuFKwj8J7Kna%2BNpvzoFt4yMKAs8I8VKiNX9owEcxFXtaA%2FuX5dxBW%2FMunQHmyygs73Q7KhwzTS1TOmQ1E%2BYsngnh1wnsM3jWbIQTzpA5LV%2F8issjYAOJ6TGRhF2eOUr5DmwTBlaKRVNkeZCSHfMVSU4wK7HV4vS%2BGQihrM9mP%2FCkTJ%2BD3%2FesE7wKnWntS6OFxJSs3csa6q76Hq2ezMIwA2ibEj9al74Ji9c2ikidtgvyBvmwaxxAkrHzNOcv4YXsJIhuBN9jWJxXdr%2BeYfZKDwTvT808uHESi%2FxaQjZem6jRvA9G61Zdxtkzc0u6V9FUjV49dOcxIDMJOQiMQGOqUBpli8n4WlVGbJQJ923qtyYYVZo45pCpW8ewQNs3srui48NXeZjvJciGqiK4r5hLErd9MKtuOvpfnZefSZO0DaS1zYMlj5tV8dwlWj07CKrEyuDHiRrLuWi2UhFwjibtg3Wrj1JlzQTigQzMIa7iWypAwi2otdpq6GcJJRCFyOTlvyuKv%2FHxSr7XVhiKO4%2B6hP6%2BnTnGcQY3UpEdVAS4IVVSr7Geyp&X-Amz-Signature=ae224428ccca1802c6ec2025bb3410c2f1faa765fab224ef355e49b85c09c780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z65KG35%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIB%2BRcgARr5DqLBfUqnc5jiY47WxDCFSqvvdxBydU25f0AiEAjM0owZ%2BUYFKisBbpsG6h3Egx8clZhYoSz00ZtN8Q30Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNXb1c2ns%2Fv82%2BaopSrcAw3%2FwEJh2syFljUi%2BxEOfyQHG7j%2Bdbc75KRiHxGZwgthPUF%2F1dfRIpLdFhDKn%2BfpIyluB0JA3QNHKE30oEsKom%2BgpVN7XNCT%2BuyFa%2BMt6xj9kH8n4X%2FlGtSzA%2BBOc64qjaf%2B8XI2rXh8x0RwSf%2FeulQDkr0XNeGP6Gwd9VP4ISvKW25IJCc3UT9MjQedSvrOyTUXrwzd2kGwdbnrIWcRGm%2FSpi5kR8zAZPIlrLysBQ9la1664Pkq05%2FE9jAU7TwvsBu%2FYwjDbczLm70J7mQJIy2qMMiTKsnbWzBG1qqs7pvDwzn1WcakXq0aNMYWNeknMAvUQjCZBs7crO3SXaEXQk1QOLu8Fw0PnpKDdc3%2Fos2vyFNpSj6gdzgKOpCtrN8vEJj%2BY8ujYRIp8Ds1dZ8CG38HNT%2Bc7IO39DB%2FoeorhpUHZEw9YJEZhmMXhJOapnhUSUiBJMbc4EETOHlRlLJW6bxwSyzQRCvzpYud5yjKYAgQNZt2aPcV0dYVz%2FTJYnI94BzBbajOsZPViRP04dpmtP98wOSR0mSeQd4Am6MLdeAn5diUs2oDmu1qJGVG0GPRdwapAh5JIQiIM%2Bs%2BxyIvYwgqXBxWbeIUkf1Jv37hPgXjusqy3isFABwVTuE0MOGPiMQGOqUBPsyroba8syuNFtbY6z63M6UQPI8WE2vIiFqclKswa%2FzmKy3wnB0skWxclK9MkKxY3U3rx3NLs7VE%2FBu9Sokg%2BQTFYlv1%2Fix5E4qKSzRcLR6wiSyJr3dSoGDH5Ivh12Vg%2F78Dm0I1ocNIMaw%2FcsEkH3ktXp%2F5jic%2FZOxLDzI2fXOI8biICeqg87FMIRhPneDqkyfU%2BbuOnkV7vOhsH5mO3G%2BdVfK5&X-Amz-Signature=d0e3fc2bad248b6c90a7a80f8e603cefab31e2b9916aa11f9caaa2975bda232c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDERVDBG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIA9NUae4qp8gSBzLlmKOpnjurEqBZFqvQDEYrdH0zLCGAiEA9UFlyx73wzC6AaRXu%2FU6zf6tmkTkfPnzUEYWnfo8IgMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEULFdJKmXJXEe%2Ft9SrcA3gNBVOcgLfodehS9183CgHema5LLNXzMwHhfMrn7o%2F3zmXZjryTmh0%2F02PnegY4HbncMO%2FffIaN%2BMIZIAom2wEw%2FCajteAL%2FWrXLLt%2B0XEpw6gediT4fs7yU%2FtdfGI9ke%2Bu%2Fo8Yg9UnpI0iKjZjnEMNs%2FG389JSseZIbE8UxssD4TVhb%2BXG2g7luaJQ90wEWlHoSfKwi9o71NPl9WdjRT8SGhgzm21uz%2B8qad29bxfUo%2BnHNFVbe5Xv1AMG%2B3O%2FSAPFVl0eNaLvuS64x3nqnnwmdKuqaJLdKxBwzMp8qPwAblzw4Ow8HVsHmQhMmI3Hrga%2F73dbUVO4dhCPqFaQss%2BVwJBo%2FGQc2Upp%2Bs5%2Fm1N%2Fx%2BqrKuONwHkiq2xcV6v%2BEG6FN585EI34ZbCh3TpjM6hrFSBseCYHCn1q7LKnKgw710K0cTqjN2ytHWkNGutnYM0clqJk36%2FEqduQ4%2FcNauYvSDCdx2%2FRgJNpyHfYrsy7a3qOQ62EYIJbb%2FUm73Tw%2B%2FVwdJJ2%2Bpq5RiemWSx14f7NicQeowjW%2FP0hcWXrcd9pCaOZTUEZUuplg8OFBk57vllYhahl3tZpyGGFsgF3havcjqHAEczY0wEL0uSLrkio1V5JA4LdG7kvLp2TMMSPiMQGOqUBUdhHtWijn3q5S51m8PLN6vF0dZeap5i2Yk6z9b7F5%2BZd%2FBta11fhqaJLom87%2BKu1bWLRKqgzKbkHLxGGb6YkNEo707pZrl0FmTyDulzvS6GVyizcrF4fTA51NurKBia9SMnN9mxfid%2FXXQReJ4VGjaNnoOWONg66HSZiDwWy9BHDEaN08NWmCSnG1ZAYKcpmNNgp7mdmuZRcGPxwyp2LxqEIJfmR&X-Amz-Signature=bf65a1e970817455d4c46ed3bc07ebc1c2658a1a82ab1d44f9145a6a2b9d15e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
