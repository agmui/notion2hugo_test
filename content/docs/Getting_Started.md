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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQ26H6Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF69uPfLy9S55hY3vtnwIhFjPz7%2BgUu3e3%2B8eQ5LCSF2AiBwYN%2B%2FuZEA1QzhzxQZgJxfYDW3J02askgEj5ZoTBTrSiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6B8pZJSXtAwFHHJTKtwDlG1Pe2%2BwtKovq5d5j7rUtp3EgbrzTyz7RP7YajD5ZPqnT1wI%2BO2fqQB0CVveMMAX7QdxirOowfpKUTTT66ki%2Bz%2F%2Bc6IX0O8QfGWD4yYaJgUyh6l2ku3P7YBZJNxgsQ%2Fk%2BK%2Fc48LeTCuN1YIGiS%2FyFMGmAM1qFBNq86emtFthsdgfLhYCEzB%2BjxEY5ZAUcL6CNqV1vKMHeO5PYpo7iN3Tys09sbYq%2Bbf6zUQI2uk6%2F3tOBvTkXOjmbVVNLGlO0HK4NNZDBMDjXf4vKTK1%2FwR13hSMsw%2Bo7cwXpqLoraXyP7Vn%2B%2FgMyA8cMBoG5WaG9yprtpzq3Tq9t022SokIapj7vpwmb9ktlcb7a6rkBU3x%2BupSxy3yMqbWAP1IitGydVR3zFD%2Bzd42X55NR%2FXj4JVXCHllCl913LtniMlU5O7ZZn84Q3Fvt6H4%2FoR60F%2BF9764T0WpBbl9izbEKqARf7YzywKNH21V1Eer3sr4MwfKwW%2BDShzgiH30%2FPKGlIKDN7YduCnhBxbGp7Nhy%2F1k0XbSRMkqIx9Tj2nfb%2B0urTw0y%2FVin3XzDEBwZDKKr2t712ej9SOx67gB%2Bqy4yFYPmegOkUnaQcCsoNe8wlPt4AuYWQgyW8I1g9pwLchvaLAw0aLRvQY6pgEhlm6I3kK9xMHbh5REHevGv3Ewd2gQGNbtj0tjYZwSt04JcuNsU061RUJsIGBuqtJ1v0rJCdVjg2mt3TMsC1iaepJSNglY6CZH58EFnSgslB11Er7nYs3pGO9ZYdY%2Fyor%2FaVw7giEGhbeE72v6PS%2ByCry9N2N4o3z3xVosOmteTt70xQUZNwB3zUFL3p0WsZgjnIVQspt2VSxlejVWyg1HyjiFWw8y&X-Amz-Signature=7827aa5160806d8ff484b488ad296aa031545b7b81b5a0e304ad10dd252ed16c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQ26H6Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF69uPfLy9S55hY3vtnwIhFjPz7%2BgUu3e3%2B8eQ5LCSF2AiBwYN%2B%2FuZEA1QzhzxQZgJxfYDW3J02askgEj5ZoTBTrSiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6B8pZJSXtAwFHHJTKtwDlG1Pe2%2BwtKovq5d5j7rUtp3EgbrzTyz7RP7YajD5ZPqnT1wI%2BO2fqQB0CVveMMAX7QdxirOowfpKUTTT66ki%2Bz%2F%2Bc6IX0O8QfGWD4yYaJgUyh6l2ku3P7YBZJNxgsQ%2Fk%2BK%2Fc48LeTCuN1YIGiS%2FyFMGmAM1qFBNq86emtFthsdgfLhYCEzB%2BjxEY5ZAUcL6CNqV1vKMHeO5PYpo7iN3Tys09sbYq%2Bbf6zUQI2uk6%2F3tOBvTkXOjmbVVNLGlO0HK4NNZDBMDjXf4vKTK1%2FwR13hSMsw%2Bo7cwXpqLoraXyP7Vn%2B%2FgMyA8cMBoG5WaG9yprtpzq3Tq9t022SokIapj7vpwmb9ktlcb7a6rkBU3x%2BupSxy3yMqbWAP1IitGydVR3zFD%2Bzd42X55NR%2FXj4JVXCHllCl913LtniMlU5O7ZZn84Q3Fvt6H4%2FoR60F%2BF9764T0WpBbl9izbEKqARf7YzywKNH21V1Eer3sr4MwfKwW%2BDShzgiH30%2FPKGlIKDN7YduCnhBxbGp7Nhy%2F1k0XbSRMkqIx9Tj2nfb%2B0urTw0y%2FVin3XzDEBwZDKKr2t712ej9SOx67gB%2Bqy4yFYPmegOkUnaQcCsoNe8wlPt4AuYWQgyW8I1g9pwLchvaLAw0aLRvQY6pgEhlm6I3kK9xMHbh5REHevGv3Ewd2gQGNbtj0tjYZwSt04JcuNsU061RUJsIGBuqtJ1v0rJCdVjg2mt3TMsC1iaepJSNglY6CZH58EFnSgslB11Er7nYs3pGO9ZYdY%2Fyor%2FaVw7giEGhbeE72v6PS%2ByCry9N2N4o3z3xVosOmteTt70xQUZNwB3zUFL3p0WsZgjnIVQspt2VSxlejVWyg1HyjiFWw8y&X-Amz-Signature=eeea057a64dcf14450d943b5b41c16d4cac92296ab8c973268c2eecd23afb3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2SCCEK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC58ENJQft54imHz6mbl5YO%2BohrtG2K6Lasv0WfwGPfCQIhANeXlhCknTzRSvQujy6rHupf7%2FGP80WMqOByQVTdFIfnKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY%2BDuZxN8NTImnobUq3ANWzuyYTvtATt%2BfsG0jgQ40iyuG237hhdHw9m54JySmYtxyHfi6mmpJ8ZEBP3fV5TNN%2FqlKIDWCupjhJioBoysfG2o6h%2BSMz4APDZX7OpqOdGBg3dOw78n0JT2VZNEyonwy6q1SX9%2BW%2B3AfUrrG0zyOXGyH2Ww3LgDCqPrnrw8TB7jroEDrhaK5m7mELA%2F%2Bn%2BpCpet9AHJYnpNkih9ra55riTtiJDV3YTUlYjiAxR9ye8o6eEgxOGsDwNVAZMF%2FOWjsRhBw33xL%2FjwGHkl2PoBPwk%2F15lODBBjxFWEcgFEJKLJd1cdDs1VNs5gyS%2Fvx5Ydj%2FZBBFPor0v09cZOZodh3Qfek2YUXAQABtfrypErbUzTx2gTNfc3OxlMVMXaV7TBLRuYmE4pAYzG3qngItKArWmMNilK29ZShKkS6G9io7eg982Rx7xfR3hdDQokqoo%2FoJ87ptQlqPE4y6TOQAO%2BJRmXtD7kgWAfrSCjAABpzWt8jSkS0ME7nt0fgH8raD5MoSLZJBQatL%2F9KKnFFq6y%2FYkV3%2BE0feb5Pu5LJC1yXHJYXQd2iCVpB%2F1v1f4cTESlmmZ2z4uLsmdRoEgSNRmkkx5wDXhgVrp5dsrQGMmEBSY%2BrFqBw6ey7NiYLvjDwodG9BjqkAfhq%2Fsx%2F8qEyYR43e9a8fChlVKFoalYGZFpXlmxFYoD%2BkCvaFkpTSnhUGLRkr8ariKzyWObzK9U2t94RROkjV011W0HCYiCFGYqmvS7qZDAqML2a%2Bka%2FrtRsBt2UrFv7IgHXF5AOOP4N5eZY3GidNNmeSTN7bxp2y1zWvOM%2BPaCpuXC9I1oc6gX%2FJpHlFc3%2F4aetHeV7wkSL%2B%2B7%2BZVviorF6wUNs&X-Amz-Signature=fea74702760da42dd4599b7eaebd353e9367349d7504a748bb5a9b1c750d4b67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMLXAYQ7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGcTQtrKaTbcb5w7c10%2B0Gh5tQ4T0Dq9qzQMnt8RHT%2FlAiB0czpZCSMMM1%2FpTtzmJaDqEmo8jZkPKSpHZHXHR%2FeSoiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvk1HLC6g26GcerHMKtwD96gwKUwUw3z8royDBWOtM2tWk8UABfICS9A5%2Bo6hf83xiQWA%2FMl3hMG5v9YtE1Yi%2FhhQHpgW%2FEWZDco9%2FCarmHCXajLYpljN8cpoxC8VFiLixOyJb6chm3RV%2BOPyNHqKQqtKhdOQTWJIZ4eU9vn99kgXgoI41P1Zeg3Gts7UvNHaSqZMW7meIVKbiDbYmlKZoE7varmhAmVpQ4JG2e2bUF4Leh3cT9mTntNjQp1kM0BDJQlCqMCx0a3s%2Bb3%2BIwNE82kZsgmRbgMYSKHOf37dRRbSf38%2FQvFGt3ldW7NoqEfhV5g1ifgDJG9ci4afmsXdowb9wXFl8t0Hb%2Fu3rhMJ18Hj%2F86gcaalwxkmviVcN6tYIrUfMtWjb2m%2BVgxWwDjsLYbdqCaK3OJSzSbrqZ5DZJdtgRzqgJtW3nzgx3IeYzQA%2BMa%2BLjt%2BIdqMlrb2lJqwKXI1Mfc%2F9%2FUNZsnNgk%2Ff1ZiUA7Q6VmF9lCqfksw1JEpnnLPb02SxCpaOeRJRbgbj6%2FMPdj8NB1QejQAIuI5z7QbU7g3K%2FBYw5l8Nw3YhRS7jbrGHNot5b5Uo6kxS2tc03HxO7ABrxTqWpkjAS%2FbSkQHnbbNxzWKIivWVoOZGTm3xYDY8osw59ZmmE9YwgaLRvQY6pgHxSY73EROS7VNcbH62zVM5Nc8Vm%2B72xGaJkdPgcTjS04p1%2BKBiOtPrbHyrt%2FYT9XF%2B19ER0xBHYRwrtnm%2BzrrZX0%2FuCSReMAd330zNGXRXXhDbJzulA19dtS1pZGqIVztdN5ub4WBySlcgvbr6RYyuUWyTCrRueQpnc6R0PPVjB5Tj7oBikAYSq2au4NlLCQSzHmPJqf4T60oSt7Zgem7gnUw6lzCu&X-Amz-Signature=c01b8edd923078090e642a82e5dd8b186bacf32e54f4c7e4ad31a5c1f5daed97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQ26H6Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF69uPfLy9S55hY3vtnwIhFjPz7%2BgUu3e3%2B8eQ5LCSF2AiBwYN%2B%2FuZEA1QzhzxQZgJxfYDW3J02askgEj5ZoTBTrSiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6B8pZJSXtAwFHHJTKtwDlG1Pe2%2BwtKovq5d5j7rUtp3EgbrzTyz7RP7YajD5ZPqnT1wI%2BO2fqQB0CVveMMAX7QdxirOowfpKUTTT66ki%2Bz%2F%2Bc6IX0O8QfGWD4yYaJgUyh6l2ku3P7YBZJNxgsQ%2Fk%2BK%2Fc48LeTCuN1YIGiS%2FyFMGmAM1qFBNq86emtFthsdgfLhYCEzB%2BjxEY5ZAUcL6CNqV1vKMHeO5PYpo7iN3Tys09sbYq%2Bbf6zUQI2uk6%2F3tOBvTkXOjmbVVNLGlO0HK4NNZDBMDjXf4vKTK1%2FwR13hSMsw%2Bo7cwXpqLoraXyP7Vn%2B%2FgMyA8cMBoG5WaG9yprtpzq3Tq9t022SokIapj7vpwmb9ktlcb7a6rkBU3x%2BupSxy3yMqbWAP1IitGydVR3zFD%2Bzd42X55NR%2FXj4JVXCHllCl913LtniMlU5O7ZZn84Q3Fvt6H4%2FoR60F%2BF9764T0WpBbl9izbEKqARf7YzywKNH21V1Eer3sr4MwfKwW%2BDShzgiH30%2FPKGlIKDN7YduCnhBxbGp7Nhy%2F1k0XbSRMkqIx9Tj2nfb%2B0urTw0y%2FVin3XzDEBwZDKKr2t712ej9SOx67gB%2Bqy4yFYPmegOkUnaQcCsoNe8wlPt4AuYWQgyW8I1g9pwLchvaLAw0aLRvQY6pgEhlm6I3kK9xMHbh5REHevGv3Ewd2gQGNbtj0tjYZwSt04JcuNsU061RUJsIGBuqtJ1v0rJCdVjg2mt3TMsC1iaepJSNglY6CZH58EFnSgslB11Er7nYs3pGO9ZYdY%2Fyor%2FaVw7giEGhbeE72v6PS%2ByCry9N2N4o3z3xVosOmteTt70xQUZNwB3zUFL3p0WsZgjnIVQspt2VSxlejVWyg1HyjiFWw8y&X-Amz-Signature=d25d1b6e68d9d505cef7cb509fc40ef526d3bb9ee463776a95a3bb01c0e6fcec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
