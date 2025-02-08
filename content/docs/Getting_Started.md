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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWMDFLXC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPLag1mLE54k6mSUdpzgAxkw8In8otpVtZrhNzi9Z%2FcgIgb2uX6UOZw8II4oe6J3DOL2C6l8ipzt%2FVhtMMt0ciuEUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLQA%2F5uTd4ZeBfvwCrcA6zSsAE%2FrVLH81GJko5Qx6mZbHN5R7QXcXPasNgrHvSs6X7RHHEpK5Jk%2FU1eoiNbFiKojHqi24Cnls7DRcgKTqqPhRBlECEyYblueHZi38MT6%2Fd%2Fnp16qt1i2myS7AaBpFiWc2iYh0MFKqpxMien5rQ0AKVNB%2FpOW%2BkzFxLg%2Bl0n2%2BvP8ClBlI58vvTsgH5mgatrrL3Wm0bOekzYTIDlVOBJSELLjw4BB0YDYD4Y7QEfrQeLn2tW2p0llAyOEKrVP17dDyPvD2%2F0Oi4YgTZBmFrbm9xpseroJ6YtMTie%2Bkt5vv8%2BS8Ok6f4Rr3ibQfbLSgPXz9a1JFDYQR3u%2BPvK6NbN4GxkeYOLC3nknLao7lNQ52XZMFJytOSvsACm8Ys05kb3fo8TdS9nlvEps2uH%2B%2FY8NDkZjgZjtQAp0cmP26PTMBq%2FaiqHJJk5u7eKYoa5NfuwYfE5URqOD2KNYbJKMsAOt8hiZ2PBwqJOWjvVzjdB7DlNcWs5up0Brx3MJiLaxz4mKYnTW8rX8Kjk5qqykQK%2FxL0nBHkb71A1dILquHYK%2BucQizqNR%2FUx29VtZXXYdfvltXbYtZINhE1BNuPN6mw5yd6kGEda%2F4MOmScAna78qiuBIXmAcNWK5kEeMNP5mr0GOqUBDL2oFEQiApGLT3KDTj%2BQzbZSNXT8ZS7uCcl0hQT1lqZTXc8PRPG1cEYerIaR8w2yOlOn%2FU1wKN6wlJa8H%2BbaT5v%2B3rEAMWYGXr3NqRTgoR4qdiiypvX%2BJrjeSZwzUjrOwDQ0KeFR0MbYto7%2B8GYUgq9Sai5HQIQdaAwW4ZDtB0SpJptorSinr2H53hKtagD3p%2Bg%2BvmziKZvnJzMhaAY1jGgoviJ2&X-Amz-Signature=a318f2d79abd4beed96e944c7548275c5fcb3342446cf8c2fd95382edad791c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWMDFLXC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPLag1mLE54k6mSUdpzgAxkw8In8otpVtZrhNzi9Z%2FcgIgb2uX6UOZw8II4oe6J3DOL2C6l8ipzt%2FVhtMMt0ciuEUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLQA%2F5uTd4ZeBfvwCrcA6zSsAE%2FrVLH81GJko5Qx6mZbHN5R7QXcXPasNgrHvSs6X7RHHEpK5Jk%2FU1eoiNbFiKojHqi24Cnls7DRcgKTqqPhRBlECEyYblueHZi38MT6%2Fd%2Fnp16qt1i2myS7AaBpFiWc2iYh0MFKqpxMien5rQ0AKVNB%2FpOW%2BkzFxLg%2Bl0n2%2BvP8ClBlI58vvTsgH5mgatrrL3Wm0bOekzYTIDlVOBJSELLjw4BB0YDYD4Y7QEfrQeLn2tW2p0llAyOEKrVP17dDyPvD2%2F0Oi4YgTZBmFrbm9xpseroJ6YtMTie%2Bkt5vv8%2BS8Ok6f4Rr3ibQfbLSgPXz9a1JFDYQR3u%2BPvK6NbN4GxkeYOLC3nknLao7lNQ52XZMFJytOSvsACm8Ys05kb3fo8TdS9nlvEps2uH%2B%2FY8NDkZjgZjtQAp0cmP26PTMBq%2FaiqHJJk5u7eKYoa5NfuwYfE5URqOD2KNYbJKMsAOt8hiZ2PBwqJOWjvVzjdB7DlNcWs5up0Brx3MJiLaxz4mKYnTW8rX8Kjk5qqykQK%2FxL0nBHkb71A1dILquHYK%2BucQizqNR%2FUx29VtZXXYdfvltXbYtZINhE1BNuPN6mw5yd6kGEda%2F4MOmScAna78qiuBIXmAcNWK5kEeMNP5mr0GOqUBDL2oFEQiApGLT3KDTj%2BQzbZSNXT8ZS7uCcl0hQT1lqZTXc8PRPG1cEYerIaR8w2yOlOn%2FU1wKN6wlJa8H%2BbaT5v%2B3rEAMWYGXr3NqRTgoR4qdiiypvX%2BJrjeSZwzUjrOwDQ0KeFR0MbYto7%2B8GYUgq9Sai5HQIQdaAwW4ZDtB0SpJptorSinr2H53hKtagD3p%2Bg%2BvmziKZvnJzMhaAY1jGgoviJ2&X-Amz-Signature=9813fb826ee295b33a135af8974f359d1847bc4822be92a6bebcbc74f9696c67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP6RYS5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCdEUTi6tEdEhdOeRPtTzXIkbmNpAI1W3UJhxGChhEKhQIgSIsfISdhfKZ6CsLvkICJZ9jwB6YsU%2BNv%2Fq5y5dv12boqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5zg2tGJ8MIjbn7WyrcA%2Bx1Ba7Dbog66nM6dJ1O0rOxiwCeT2umZDSNcnqaD6pbFwJxxs5ckltRjmmlIgB8Zo%2BGBfBLSI5fhwb0PTSLPGepnAa%2BvUdLUztXfZDFVkQ98Phwg%2B01OX5zZvaUMaUdyilJLc7GgUN9gdXcI18CG%2FdJUC0oCrm%2BecrhaeeZrEtrS65kqiiej%2FECEQWiP%2BJwmZeOVHzYsdxls6TFUOx2TJJrmO4EGRgqs8hTnnda5VZqM4so9ZR%2BmUZUza8pRrJQYtDbGPE2n15uBJaQ4qmzL6%2BqMmJjm24bwPLDt%2BGfbuWnqlCx2rRt57%2Fg%2FZ%2FBX3LYlBts40VmM3MCZjp7D%2B3wJVlP3NKA6rD0cATQIVGzBouJRlOj5dwkJcAE7uiOgmrdiA2RdTmVI5mingw6ZoUSJCdCZ7dFyjvecTJwoshMdf8xA5zYbf7%2Ba4mZGMUnp6Mx5mE4y2I%2Fb3ViMqctJD27vbEfJVCD7R1wkCKzelhjZ7uhmqIUslXx6FMDYxAZzAZDnXT2t9FKADm6n6Iw1m1hRV78XKJgnEtLxlbF5A8G4CSeu03MlPDavqeZUNDY%2F2QM%2BuEAbOxsT8nu5cMPw5kgoTW3hps2yv74FXwjOTnW%2FrE8B7cq1ymlS5iXImJRMMD5mr0GOqUBNbXsbvjzXVDIT9QP6jx5r%2BFLAe0RjV%2BIi%2B4PLb1MXVbdz1uAg8JDw1aTk3edKKNHJw7pABbV24wwx%2FCYv3ngltRAR5QYjZ20vo7jUrpJcBu%2FXjuS6d7B%2FdpFa5pTlLM68%2FHXG0MW47u0%2FUA0M4J%2F0e4GFrBBCUufpgSWfIS6OGwiq8RbZOpZvGrxXR8XqvFgHhWoKi2zZecVVYgM521EWjBEFm7K&X-Amz-Signature=af93f0563811420a76b18b2c3b2961726743e883a499e9487e7d19c274e62cba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMJIWNB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDKIJPgb0BnrJG6EJa2eORMDF41FZr2VsCDQPmfYudtuQIgYL7Abic182519UqRbAMP%2BUpTqrK4f0AHcWnqGZOs%2B9EqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhH3ay2L6rQFNUA0ircA5oAPuGSXDDl36GQKWir%2F8yvTJZU6nK4yU%2FiXuTujt10N8makSpanfEa9NOj7vIcWSjC%2BAg92PLEGXIqPFLQWcWIXljekikU44E8q3IMvjr6rqCBMdq0bK4lsiVKYYis4fx40i%2FPMDmMp6xbtxJTI7nQnVkQ%2FYrqK%2FeKeIh8rmQTlRjTPiFoXDO9BcMIfTKdHXy5alLdcs0s5ckVFCgECTFf%2BeeDqe7v4MIKajG4D9U5wXIJ9SCoWZiLuK5xPVMeJBSi34bjR2SEbSft50TLULlJ%2B2AMGIyt7s7gM5EmzDI%2Fae0k%2BlyCJyZLr4QrVevRglC9L03CfSoDqXGxl8zytPzWidD2AKUc%2Buzh9Katn0jQEsUtwXHAvkyTZSAL48GjAaeej4%2FFQR8LtrDVlFysXihdw6ZYw5K%2Fff2Wj7eH1DeZLFYbV%2BWQW0V7ElRR1RD1ZtLQbzVDgopH4FrTKbD3%2Fw8oQDVEuBE98IwTy%2BTWPvITCyqh9B8EVBMmUl9V8tJwJsv8hf1AG%2BA6wZluSgShBcSI5TL%2BwA4wR7oGttexiJzgI8ZnwCjJ6taj8sfpRMAytiKBnn3eQ6KKG4xZX4%2F61zs6RJG%2FZan3%2F7Dxl0fjZg3KghJebo4mDEo8g%2BRHMKL5mr0GOqUBjwneR5Iu7ZQWs23MAEkPTIk0TeBoz9NCj%2FnM3sN%2FcFyQpbNmbOIcfEibo8ELWX79jEpFzIwiAjCSF9KPBmiePxwLrFKEiVs5UgUFRPdnNHdzEgk0H1ZhPOVApJZrCE9d%2B3LEx4374JmwWrBUPtf1iORGPkpGJ87BSSwdBo2zCuPx5sxLif51HD%2BgKg1oQ3pIEf0j5U%2FwXRTwar05gWD39mfF1zAl&X-Amz-Signature=1d1f7d6cb90c5f1cbc55957654ea3ccd6f25b6b5d64cbb0462e76b7141179b48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWMDFLXC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPLag1mLE54k6mSUdpzgAxkw8In8otpVtZrhNzi9Z%2FcgIgb2uX6UOZw8II4oe6J3DOL2C6l8ipzt%2FVhtMMt0ciuEUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLQA%2F5uTd4ZeBfvwCrcA6zSsAE%2FrVLH81GJko5Qx6mZbHN5R7QXcXPasNgrHvSs6X7RHHEpK5Jk%2FU1eoiNbFiKojHqi24Cnls7DRcgKTqqPhRBlECEyYblueHZi38MT6%2Fd%2Fnp16qt1i2myS7AaBpFiWc2iYh0MFKqpxMien5rQ0AKVNB%2FpOW%2BkzFxLg%2Bl0n2%2BvP8ClBlI58vvTsgH5mgatrrL3Wm0bOekzYTIDlVOBJSELLjw4BB0YDYD4Y7QEfrQeLn2tW2p0llAyOEKrVP17dDyPvD2%2F0Oi4YgTZBmFrbm9xpseroJ6YtMTie%2Bkt5vv8%2BS8Ok6f4Rr3ibQfbLSgPXz9a1JFDYQR3u%2BPvK6NbN4GxkeYOLC3nknLao7lNQ52XZMFJytOSvsACm8Ys05kb3fo8TdS9nlvEps2uH%2B%2FY8NDkZjgZjtQAp0cmP26PTMBq%2FaiqHJJk5u7eKYoa5NfuwYfE5URqOD2KNYbJKMsAOt8hiZ2PBwqJOWjvVzjdB7DlNcWs5up0Brx3MJiLaxz4mKYnTW8rX8Kjk5qqykQK%2FxL0nBHkb71A1dILquHYK%2BucQizqNR%2FUx29VtZXXYdfvltXbYtZINhE1BNuPN6mw5yd6kGEda%2F4MOmScAna78qiuBIXmAcNWK5kEeMNP5mr0GOqUBDL2oFEQiApGLT3KDTj%2BQzbZSNXT8ZS7uCcl0hQT1lqZTXc8PRPG1cEYerIaR8w2yOlOn%2FU1wKN6wlJa8H%2BbaT5v%2B3rEAMWYGXr3NqRTgoR4qdiiypvX%2BJrjeSZwzUjrOwDQ0KeFR0MbYto7%2B8GYUgq9Sai5HQIQdaAwW4ZDtB0SpJptorSinr2H53hKtagD3p%2Bg%2BvmziKZvnJzMhaAY1jGgoviJ2&X-Amz-Signature=69ce46a8210e3097b99802c15e4961fd0495c08319b151e0b4f6d45f4c6ccb53&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
