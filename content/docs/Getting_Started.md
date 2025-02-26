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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BUWZ4G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC1LRjxUyZ%2FyM4uQq7jqwa72%2B%2FZIRxcuFnNlKRVGVrTugIhAP%2BY%2FI7RhX0OVNjLcFtyZUQ77H9lRjwFyzouSi6DXSvGKv8DCFgQABoMNjM3NDIzMTgzODA1IgzuxCIL9ndSchVOl98q3APL%2F52oNr%2F4La0ysdIiUy2V1Ob7ERi3OiWsnHD4TzNp44L%2FbC06rORUL3UHoOctQmNMbVnjTzflw8VZDzWRFr5fcXDV9KJBINIn%2BauY1PskIvxn4aJ2V6epjE9WO%2FTgltqL0WPSq9JrVv7vHECoVaDeC5niswpBELstPaai%2FroARqYBd7N4Wb8ctD6peZtvlQ5VcCWIxGadaz5K16IdJloOPgzzo1Whu6sviaxCU2hcUhA92eJDQyRh%2B8mV66Hgkp%2BPahQkihZfn3%2FzaMHRiGaAXU6NuRMMv8eNnkYLdvhN60D1oXcJPykFaLPYgOnLLyT2EmEu6jtlLnWk14l43OwybZ5iQH%2FtZ0cl2hNnlpPKuYLykUxK46w%2B0xmBARfaw4yu%2FiVCS6PPO6sBtJrTaGehds0Ke6LpBaY5FwViSojwSlNaxf0u5bJeqlWnTZrgLqaVYu7Ucwbj%2B8I6l5Bspkar1EjR2PHdnGeGTsUhpHk0Wxq3mSFARuo4%2FwPQNoqs93Ib8ovfy5Ww%2FnvgrgEnDe6yiybS50kS4Hd37JTPPmPoMruNPovBw0%2Fvn5KsGyeCBTv5u3fdFyhTgZNBVQbOIYYc66V5cVVTlZnZMJSgbRHAqzBwRcqsM73JQLqnnDCmgPu9BjqkAVn86qbygHewYBG5ntmh1Vtkcrj%2BqiJi%2FUGkPYOwUKkOhqPq417JVHCzMtOb9cv13jJNqLtdnQwUNLIyEBJ63cy2BKYrMVE7H%2BtL%2BkUkinaZ7MkuENDOPg6hNixfeYA9GZHztFoCTFGUxE6Rp7RL8gq2PJIQH8K1h1%2BESAdqZv%2F2JYsaJl1rcyo1rse%2FECJiQ6HK0thB4oMXI2eHGxhCETI7pT5z&X-Amz-Signature=5e0ed26f2772497d6ec558a0f7700a4ca5cb1155827a2d7e1adc160aad42d17e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BUWZ4G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC1LRjxUyZ%2FyM4uQq7jqwa72%2B%2FZIRxcuFnNlKRVGVrTugIhAP%2BY%2FI7RhX0OVNjLcFtyZUQ77H9lRjwFyzouSi6DXSvGKv8DCFgQABoMNjM3NDIzMTgzODA1IgzuxCIL9ndSchVOl98q3APL%2F52oNr%2F4La0ysdIiUy2V1Ob7ERi3OiWsnHD4TzNp44L%2FbC06rORUL3UHoOctQmNMbVnjTzflw8VZDzWRFr5fcXDV9KJBINIn%2BauY1PskIvxn4aJ2V6epjE9WO%2FTgltqL0WPSq9JrVv7vHECoVaDeC5niswpBELstPaai%2FroARqYBd7N4Wb8ctD6peZtvlQ5VcCWIxGadaz5K16IdJloOPgzzo1Whu6sviaxCU2hcUhA92eJDQyRh%2B8mV66Hgkp%2BPahQkihZfn3%2FzaMHRiGaAXU6NuRMMv8eNnkYLdvhN60D1oXcJPykFaLPYgOnLLyT2EmEu6jtlLnWk14l43OwybZ5iQH%2FtZ0cl2hNnlpPKuYLykUxK46w%2B0xmBARfaw4yu%2FiVCS6PPO6sBtJrTaGehds0Ke6LpBaY5FwViSojwSlNaxf0u5bJeqlWnTZrgLqaVYu7Ucwbj%2B8I6l5Bspkar1EjR2PHdnGeGTsUhpHk0Wxq3mSFARuo4%2FwPQNoqs93Ib8ovfy5Ww%2FnvgrgEnDe6yiybS50kS4Hd37JTPPmPoMruNPovBw0%2Fvn5KsGyeCBTv5u3fdFyhTgZNBVQbOIYYc66V5cVVTlZnZMJSgbRHAqzBwRcqsM73JQLqnnDCmgPu9BjqkAVn86qbygHewYBG5ntmh1Vtkcrj%2BqiJi%2FUGkPYOwUKkOhqPq417JVHCzMtOb9cv13jJNqLtdnQwUNLIyEBJ63cy2BKYrMVE7H%2BtL%2BkUkinaZ7MkuENDOPg6hNixfeYA9GZHztFoCTFGUxE6Rp7RL8gq2PJIQH8K1h1%2BESAdqZv%2F2JYsaJl1rcyo1rse%2FECJiQ6HK0thB4oMXI2eHGxhCETI7pT5z&X-Amz-Signature=6675ed53247ccf146132d13c1ae116da42b9199df142222af4816b7b670b0a93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T4K5ER7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGGSGvqRnDeNshalCem3qtHrTe5V%2BrQ6yTd5cV7Or6%2B%2FAiEAufdLOrLifY1PVxU8ZzrM0TLEDtbW5TWgSdZikFNtaPQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFEl9%2F3H5eGZhIwLEyrcA%2FXgCaCer6Osl%2FpNShg0jWTweKeMlZF3szfeCLh7SSFfLBrO1NiOfw5bJ1l8Ypimyu7%2BSUvqXVZdiyiqx102ctM2Nx%2B22xvIqMsnyllcL3tXxMdPFjo7Oo0SJ41pE8CM5t%2BbqCPD3Kyd%2FcjEAU%2BHR7T%2Fk0ARS0RgfRy1LjMFTI1SXlnFjkuw6MzlASTLN%2FKeyMDs%2FoHNITg9O2v6Cz2z%2BpBBZcZ4KBZk6I3GD3RQBlH0lGgCG3CgFxmVNE%2FQGBpTR9EAiD%2FNsD34br6jApm%2FZhEECTnD%2BeLGdzlo9sdLdL%2F5uc1Z2XeTHpJLTsuSEwNA3P72Ry3VnlhGtCux59zIHfrg5WraXFXfFw%2FyE%2FqeE%2Fhiv9Ts3F%2BGzD0BTUnGvg45mJwVHoVU0OZepPDDFSCAKXRrgXRjFoRzD2oF5YrBY1TGfp1sA3HFEN4ObYh2DiQBOuippYYJmUCJZ3q51Tm6nj6Ap0DhZ5yWZTAazSjJdOpoBzY7Wb1XT7HW9bTUGmmt6lozG%2FdpiyYrGsAU6ENn2Xyndd9EHiAsv5qcIDyz8cifM6Wza4gXHPUVcF1S0wQOMUx7HJV62VWjKSatHTwTBwp77i2y46DVDQJaTS50C6P80d%2ByTbjngAXd7HH%2FMKiA%2B70GOqUBweEfHpW8N0ChFE0voLNggc7Lo18RS3trTjOTVBlYTe6d5UsKOuuytlTw%2BaHcsxvBd4mLuUikb4BM1LnaRatX1WF9%2FDTbyGFt%2FZCD6Z9RHn81Z2NUTWTciKoaozgi%2FK%2BDzsaP1qKdWZqZJ1DVh556Q4Pts32hNiaC44xc1%2B1ANeW3Og3OFl6o1eiiPY%2FVVEZDYgFs5wLtyAnQkq5%2FCZx5mdjhPd%2B2&X-Amz-Signature=a9845e1124b6036ab942ec5fba896ef80cff4a470d593347c68851a0c9361d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY4476H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDOA76akONo%2Bsf9SkzjEcoyUAbwzb4xkAoqRKWhXXkCGwIhAKwlm3oUaFxwNV2h921%2BfQHmkpz87%2FDmQsmeqgq4eQPSKv8DCFgQABoMNjM3NDIzMTgzODA1IgwPiKng0S03qrzaZOAq3ANAmTnym7OPxYgipmfaq02xmawx%2B%2FMUsRyv3PuNKlzqjiDwhOVDvHsZYJbNxWy2ryoBy2AvqT%2FE4N8F40KPHin9hyWOnGgqlK4YOZw1XIIU23xfgZU9wrR5gq4ZoAw6FmZ%2FPOAR9z33yme62UNpbNazX5MzocYHkaPqNWR84ykNavqZj6LRlEbb9rp4RaIjX3fimKJhbWQAShi8VbOubRTng%2FVUoX5LEpqvN%2BiuXYv8qXbkipO3%2FhHZBsqZozw6ZxpUsrrj50ydLQQEngvCTOTQHQ%2F4kbR0d3J592Da%2BUpX5FjMBJ4A5%2FUoHzV1XU6C1%2Ff%2BSeE2z679sUBpWXbNugvbEwRDNdj51LxlnW6TkOi%2FmmQR%2FqdBMab6ZAYi8czEYqL7zGenKMxaYx0p3vAo5JNbFO90VK0P%2FzmY4rN9op4h%2BT%2FILv7f92rrU34Z4QadIYsQvpiTmSRwFcuQkRA3JvuQIST4zlspPdnhaWBhMVUScfP00zKPCs3v5mkftGebiOLSV6lPDdICEn%2BYFP6LJXB6O0nsGw1T0RTvxfGCpACcXI5ZzRvgLNDkPp6DwWGEBe6YAcgR1yf0NbSvxkS%2F%2BoNbefI8KtpLJBoKicOBVWDqvS6YAHvDZ70RXf4o1zDSgPu9BjqkAS9n6jAbUozjxShIxATChaS1h3WGOgKGPIsduuajDNo1j3Jziqhx7EMy6ZICcbvsixEZZx2cajAA3q%2BsLsRHQfKtSXZD84jc3jEa4TdCuDOlfXMnFzehEPD8Z0kKkWCFrRLPkv76kTsqSb%2B%2B8dgx5gAXPKcp9e74WY0tpJbrep5KKbQLUYFYRqY%2F%2BfvHXZgOPls5jn2aQaEd6PVWyduEyYww3HIE&X-Amz-Signature=03e3f2266188411235c7e92889d9cc1cabc9462418635766c9306d442c7eda22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BUWZ4G%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC1LRjxUyZ%2FyM4uQq7jqwa72%2B%2FZIRxcuFnNlKRVGVrTugIhAP%2BY%2FI7RhX0OVNjLcFtyZUQ77H9lRjwFyzouSi6DXSvGKv8DCFgQABoMNjM3NDIzMTgzODA1IgzuxCIL9ndSchVOl98q3APL%2F52oNr%2F4La0ysdIiUy2V1Ob7ERi3OiWsnHD4TzNp44L%2FbC06rORUL3UHoOctQmNMbVnjTzflw8VZDzWRFr5fcXDV9KJBINIn%2BauY1PskIvxn4aJ2V6epjE9WO%2FTgltqL0WPSq9JrVv7vHECoVaDeC5niswpBELstPaai%2FroARqYBd7N4Wb8ctD6peZtvlQ5VcCWIxGadaz5K16IdJloOPgzzo1Whu6sviaxCU2hcUhA92eJDQyRh%2B8mV66Hgkp%2BPahQkihZfn3%2FzaMHRiGaAXU6NuRMMv8eNnkYLdvhN60D1oXcJPykFaLPYgOnLLyT2EmEu6jtlLnWk14l43OwybZ5iQH%2FtZ0cl2hNnlpPKuYLykUxK46w%2B0xmBARfaw4yu%2FiVCS6PPO6sBtJrTaGehds0Ke6LpBaY5FwViSojwSlNaxf0u5bJeqlWnTZrgLqaVYu7Ucwbj%2B8I6l5Bspkar1EjR2PHdnGeGTsUhpHk0Wxq3mSFARuo4%2FwPQNoqs93Ib8ovfy5Ww%2FnvgrgEnDe6yiybS50kS4Hd37JTPPmPoMruNPovBw0%2Fvn5KsGyeCBTv5u3fdFyhTgZNBVQbOIYYc66V5cVVTlZnZMJSgbRHAqzBwRcqsM73JQLqnnDCmgPu9BjqkAVn86qbygHewYBG5ntmh1Vtkcrj%2BqiJi%2FUGkPYOwUKkOhqPq417JVHCzMtOb9cv13jJNqLtdnQwUNLIyEBJ63cy2BKYrMVE7H%2BtL%2BkUkinaZ7MkuENDOPg6hNixfeYA9GZHztFoCTFGUxE6Rp7RL8gq2PJIQH8K1h1%2BESAdqZv%2F2JYsaJl1rcyo1rse%2FECJiQ6HK0thB4oMXI2eHGxhCETI7pT5z&X-Amz-Signature=d2e8df34a76bbbb11a0659093b06828e8f29966d587118ca6be1c651c06e3889&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
