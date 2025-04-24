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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FPMEGM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBKtkYLtEp6rKCluXN3pTKXYzxLfUqpUSSgMVFYhMPoBAiEAkYWi84lgtzUGjIfW33QU5ZLXrcZ4aLJDtl77VgJYE2oqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWCxfBoj1CEJLexircAyxgyIiRlfwljrWamrGt1ry2WjjCcJEyn8XGrQS%2B%2ForqQLGMzhFVo%2Fhw%2BToRTdkSzjip2zNfVHR4pyPj2bZK%2FrN1pQLKNkPrgnYThWiCjYBaiq9siyoG4yzehsy0Pi8e7I91pp9mm3a6bv%2BnWW1tc7IqxptFdhkO%2B2sZ3StnFohbTcQ53RBI4VEL6uqQnA%2F27GF19I2vf0mH0YcwsrekO3svOXtzPNvr2W7PajYbDi9ue6Cy4AlRU3NaYxJS9xpjH3F2xbYv3eI8zAwJr%2FI9gizucQE52J95zSYRUDa3qAff4GLzS6Ud48NYrQWCw2RCAIAJvqsAb7a3GHkD8qvadpeegGJo2l2ql4gGp56B7qkwtZWLJ0ekelTyyxHJt55mjkzQPsK%2BCsd1aDlT0OrMeUZMy4qMz7qoxuYzuP3Z5G8k5ULQooxaPy668X8zy4MBFK9GJTvxYb0e29BuSYoe61HuYwqioRox4YppZTM8LIAdtSDm9zfeGEziuiYSf9EvM%2F7GFVHc5%2F%2FgjhnjT%2B4azZ1LupxD4AZE5DdeatzK4JZeJGhnqVm7E1Gp%2FSfMAB1jkcJxHy9exuIN%2B4CUyJEUogkquKskluhH%2FC1ZwFVacQB50y%2BxTU2IDYd%2F4oGdMPX8pcAGOqUBxrx7L11AXulCqH2bDnusoGBGVJJepsYnAoLnPWv02Hj%2BngTF3FbMVLbmfAgQEI7do1L8FFuWWZ0FifpLlbBE7HlNFWmFM6OQfn8lSIRmGpZ5Cr1Cf%2B%2FWljv5t2twG6EZXz5azUHcWrtNqRsHqPWhiQ6vPjVQmzGwdefucpa4WGnFx48CdFYKSIfze875yxWse7qnAlm0pCy6jm3KCtHrkMcgZNPp&X-Amz-Signature=ca3bae879d0f2babec33eeb98f88a7d61e02722cf54cad544a35bcf13eba27fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FPMEGM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBKtkYLtEp6rKCluXN3pTKXYzxLfUqpUSSgMVFYhMPoBAiEAkYWi84lgtzUGjIfW33QU5ZLXrcZ4aLJDtl77VgJYE2oqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWCxfBoj1CEJLexircAyxgyIiRlfwljrWamrGt1ry2WjjCcJEyn8XGrQS%2B%2ForqQLGMzhFVo%2Fhw%2BToRTdkSzjip2zNfVHR4pyPj2bZK%2FrN1pQLKNkPrgnYThWiCjYBaiq9siyoG4yzehsy0Pi8e7I91pp9mm3a6bv%2BnWW1tc7IqxptFdhkO%2B2sZ3StnFohbTcQ53RBI4VEL6uqQnA%2F27GF19I2vf0mH0YcwsrekO3svOXtzPNvr2W7PajYbDi9ue6Cy4AlRU3NaYxJS9xpjH3F2xbYv3eI8zAwJr%2FI9gizucQE52J95zSYRUDa3qAff4GLzS6Ud48NYrQWCw2RCAIAJvqsAb7a3GHkD8qvadpeegGJo2l2ql4gGp56B7qkwtZWLJ0ekelTyyxHJt55mjkzQPsK%2BCsd1aDlT0OrMeUZMy4qMz7qoxuYzuP3Z5G8k5ULQooxaPy668X8zy4MBFK9GJTvxYb0e29BuSYoe61HuYwqioRox4YppZTM8LIAdtSDm9zfeGEziuiYSf9EvM%2F7GFVHc5%2F%2FgjhnjT%2B4azZ1LupxD4AZE5DdeatzK4JZeJGhnqVm7E1Gp%2FSfMAB1jkcJxHy9exuIN%2B4CUyJEUogkquKskluhH%2FC1ZwFVacQB50y%2BxTU2IDYd%2F4oGdMPX8pcAGOqUBxrx7L11AXulCqH2bDnusoGBGVJJepsYnAoLnPWv02Hj%2BngTF3FbMVLbmfAgQEI7do1L8FFuWWZ0FifpLlbBE7HlNFWmFM6OQfn8lSIRmGpZ5Cr1Cf%2B%2FWljv5t2twG6EZXz5azUHcWrtNqRsHqPWhiQ6vPjVQmzGwdefucpa4WGnFx48CdFYKSIfze875yxWse7qnAlm0pCy6jm3KCtHrkMcgZNPp&X-Amz-Signature=b5bc1567493075146948e655390cb43479058fa3d436b89e1c6e4a2a745dfe72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R57AFC34%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEoiocs97Rf6Y%2BZaWJb0PIPSeeEfU2F0dAXMs2md7M5oAiABOz0wKPbLu%2FIxdH39iarl3L%2FRoI0nW%2F1Hmu8qiGeJ2CqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuRgI5aICZTwCQkeXKtwDN5K9yai%2FWkzM%2BAUDAo4yO4gwcWJDUJIQAkMwNDDY9Ace%2FDrZBMwz3SmhBU%2BeP0q%2BM2Nqlq%2FQvEsjW92cRMOBPzUBVr0HA1mG3yjqsXy2SZ5eIrrUPW4FdtU1TWYUFTN%2FmvDzAPmoTOyrzyba1Stk7UWPC2MZ4ejbHLYaQ0v9xaTcHeqkwqXnmX5JUNV%2BAb%2BWBVBjTLsn8lp7gG971dPO0D9TkwLWkT3yYis%2BG7YC%2BOBjXfStFfj6nJFG88wogPRVbdxw8pNV7sIb%2BNNgASjm07crQLMmB%2BgjkgulsWzxvH78uW0dgPGCsTauoQJCTFEju8GCsXM7BKuIbjjHGmzh9Vf6DkyDTE8qCbM3%2FdqZFbFa9JRcEZyeeayQqJKDYGgH2ttPA151dPymVHDLT%2B1AHd1Yo0taUEj4fOv2umsgIYxEeMAwf0S7gLifgF9%2F08XqSWH%2Fgo7zI24VKSXd0soxvpkbKoJMbztCOhTUZBMuO8kbY%2BEClSzWnGmnMPr2QMwZpS1GG5vitgCXpXhQT0OgSKuHTPOgWLW5wxydTmsohCt3yT6XmaNwWQNdNQze5aWJLMk3ZBIA1DT0HLR9JWw2sGfEdrOP%2Fs9q0CwRNcnze2G29UgYlcm7nA3yLh8wq%2FylwAY6pgEjGJ44h0Q2gH6mkXQMMWBh7twHdpgaJ1MhCnP8ETn1BeZh9GfBNNhefgnBxLUl3SlRL5KSzJltmknjHr0n5uXPx6rCEarvI%2FIwfWb3TOQRxa40URdfejvrC%2BXGjMhxUzaik82492Xj9rf7rsPnVyc9bs1vcY%2BhKnUaAqM49cDErY3Lo3FhkfXm2sXABSJ6%2B2xLvNtR2r%2F9l%2FgFVE%2BILciTKlGxf7p3&X-Amz-Signature=43bbd20936ce79e00b05bfd84ef35dd49c2468ab975289e144a7c13a42c1628c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDC6SDE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDKKSeaSgKvr6oz0eann5Tw%2FPH%2BJqVZVFBi89jXwaILHgIhAMgRkiwOua6IEJgbX4YSsI0sAKaGKLXljOhjpNDrL%2FwlKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwNLy6OdCjfkZ04ysq3APEVk7DbLBOSe7zQ4x%2FfTt9%2Fn84gmcZgdTt1z5PCC1SBm6AQBuodN0X2B3fmM%2FxqrssZydOzOpSYAys2esggc%2FsiX%2Ft9w9mJV84SVXZaQ6IJYEBjRN7VtM6vjIETCdNoY6qm4gE%2FJXgA4aHBmsvP0NMm9fq4%2BWisGOjEvvII86Qe8TNJgD2P99Dg7DhRQSBaF62z2dTvQkVtdiwF9isS3WqFSPPlU%2B50NObFUanPO1M7DQT32%2F3pL5kMi2AbpUZbiztY1p82KH%2FMPGSWgz3zbHHMeUTO79Oar8wf0fXOwiPaZ0ZfPo6rOAftZOFwe6%2B5m5haTpc5ioYxzWP7cRzAlUrg02jxTIsKJ2%2B8KRCtJqVUWz%2Bj0HiI2dOv1vIcw13Oe4DTxVNYlvaOZNKkORg9ihq8dVvmCsoWzI34X8F3qGy7mRM022%2BDLksPjX3zxYtq3yUDgW7Agag3pScWT61Amivv6dFsxgUJWJvV71%2FKLdMH%2FVBZ3nSIYeKCvh1MjwONigBJLZFSrhfBgTYFDL9O7Y7mecuL4RUAMNcws%2FIccNwgrVkPWZJEzsxkmiwWxFry67adaK0A3TFTU83Giu%2BAiTqRUxOqZYOK406KVB2a6Itt9XoIkNdM8Aayab%2FHTDC%2FKXABjqkAYciSVPORbdPulcFgSuu8KBzAyYXZ%2FUxuqh2ase9oWmUoQQl2eicHxk%2FXOrM%2FOSIQ8bT2PHsxKATzdt%2BYj4lNN8SfaH4hJWHGz9eRyZbYf5R6mWY%2FLuZkPUxMWe5m6vro4VKx3VkmntuBX4okJCe4QAqVj3btcewCa63790TAcWS6X9NUO%2F4pi5GcNZwFmP%2B%2FHCTUchcPchDEx29v7r2AkWJoqqE&X-Amz-Signature=a11b1e8d2904491b1051c34212d3b6e22c33cf40fbbf41ae54b24e4299224ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FPMEGM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBKtkYLtEp6rKCluXN3pTKXYzxLfUqpUSSgMVFYhMPoBAiEAkYWi84lgtzUGjIfW33QU5ZLXrcZ4aLJDtl77VgJYE2oqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMWCxfBoj1CEJLexircAyxgyIiRlfwljrWamrGt1ry2WjjCcJEyn8XGrQS%2B%2ForqQLGMzhFVo%2Fhw%2BToRTdkSzjip2zNfVHR4pyPj2bZK%2FrN1pQLKNkPrgnYThWiCjYBaiq9siyoG4yzehsy0Pi8e7I91pp9mm3a6bv%2BnWW1tc7IqxptFdhkO%2B2sZ3StnFohbTcQ53RBI4VEL6uqQnA%2F27GF19I2vf0mH0YcwsrekO3svOXtzPNvr2W7PajYbDi9ue6Cy4AlRU3NaYxJS9xpjH3F2xbYv3eI8zAwJr%2FI9gizucQE52J95zSYRUDa3qAff4GLzS6Ud48NYrQWCw2RCAIAJvqsAb7a3GHkD8qvadpeegGJo2l2ql4gGp56B7qkwtZWLJ0ekelTyyxHJt55mjkzQPsK%2BCsd1aDlT0OrMeUZMy4qMz7qoxuYzuP3Z5G8k5ULQooxaPy668X8zy4MBFK9GJTvxYb0e29BuSYoe61HuYwqioRox4YppZTM8LIAdtSDm9zfeGEziuiYSf9EvM%2F7GFVHc5%2F%2FgjhnjT%2B4azZ1LupxD4AZE5DdeatzK4JZeJGhnqVm7E1Gp%2FSfMAB1jkcJxHy9exuIN%2B4CUyJEUogkquKskluhH%2FC1ZwFVacQB50y%2BxTU2IDYd%2F4oGdMPX8pcAGOqUBxrx7L11AXulCqH2bDnusoGBGVJJepsYnAoLnPWv02Hj%2BngTF3FbMVLbmfAgQEI7do1L8FFuWWZ0FifpLlbBE7HlNFWmFM6OQfn8lSIRmGpZ5Cr1Cf%2B%2FWljv5t2twG6EZXz5azUHcWrtNqRsHqPWhiQ6vPjVQmzGwdefucpa4WGnFx48CdFYKSIfze875yxWse7qnAlm0pCy6jm3KCtHrkMcgZNPp&X-Amz-Signature=e6771b50d2ddf5afbd3a4c008e8870627c766563f8e3c805f3af4fc83d666412&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
