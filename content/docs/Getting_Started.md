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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PN3XHNX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtta7ejks%2BvEzEX1Upgp3jv0pR9ohujmw48Qz%2BIJvYaQIhAK77fwVGJm2jGM73p6wcIegbE4pUw7xM%2Fdgr1LNR0UG3Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyP1qU8cHf2mV%2BIw9gq3APuUoNjhd2v0UjPaNJHi8UDRmPEi0WJl1%2BTzUAnWTY3GRreI5nzfJzy90F3LHEX4mSjm9UvKbfKm3P9WKKEl2HDVHwo9RtayL664PMsubqpWeNy79HJmNhhZ3YHVlblWQBzv5GbUgcauobC1CNg%2Ftf9qWxTtx5YH%2Bmmj0tg%2FkXOLzLnuJjvRJGaiegcDvW8QDD5cdNt65iVmUzaTQc7wL9C2xD16zc4gwZ%2F3YdLWUXPMdmNOX3QoL8Wr1NJAoQzv3Vj5jHhFd6nfpiSL23dDl2LoApVW3qMST5rv3ZAjqRbZfzNh6AZmVP%2FQGd6%2BR7Mmsgzny5xgdQ9c1YKxuBI2LRISUSwmvcgFJcvz%2B9wbYaABiQQ0LGcvxW4QvMaTxz3rHE0rWFgBxf%2B4sitTZSKSQuhP143OxCGQcZzdV9Hpfn3jBzBKgXKmMzVV95x8okR6mlQS%2BJn4zhq9g7HSI0JJwOJw1tOl7u8L6tGzxQp%2F9iCGCF7HrYgT0Dcd0j1IAMtkbkEroW5xx59Nea5XJepwE8DDXP3M8IJ5FSOZe1T0729E9oQAPXEW3jmIuPCZke1zigQb4mpz%2ByrTcdKNnF2MrNxFlPx7qsBXWia23qatYvG4TEx5QyguM19dhx5mjCNqbTABjqkAai6V29Px0aqG5krOBPCmvhlutVfKn2%2BuKJNAlqTiLVld27lGDmV2HqR1xCmmJ5%2F4BXUYOLa4CX8%2BEp5AQpzO%2BzIbRwT%2BIYCvJ2r%2Fb57i8z5fSs8ljbPJpHkx0I5CRRHxyakaBsxusJeOrd38kKwK15sRgNPkr5ZBOKVmC2WWrndYMJXC3iG8Br2mp0msa0G2DTaOg%2FEWk2G4otJqQRSIQzDaBFv&X-Amz-Signature=b72b4fbf065d119e407461f492d4dbed1f6742fdd4760bc7a9a74f0c7ea1e6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PN3XHNX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtta7ejks%2BvEzEX1Upgp3jv0pR9ohujmw48Qz%2BIJvYaQIhAK77fwVGJm2jGM73p6wcIegbE4pUw7xM%2Fdgr1LNR0UG3Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyP1qU8cHf2mV%2BIw9gq3APuUoNjhd2v0UjPaNJHi8UDRmPEi0WJl1%2BTzUAnWTY3GRreI5nzfJzy90F3LHEX4mSjm9UvKbfKm3P9WKKEl2HDVHwo9RtayL664PMsubqpWeNy79HJmNhhZ3YHVlblWQBzv5GbUgcauobC1CNg%2Ftf9qWxTtx5YH%2Bmmj0tg%2FkXOLzLnuJjvRJGaiegcDvW8QDD5cdNt65iVmUzaTQc7wL9C2xD16zc4gwZ%2F3YdLWUXPMdmNOX3QoL8Wr1NJAoQzv3Vj5jHhFd6nfpiSL23dDl2LoApVW3qMST5rv3ZAjqRbZfzNh6AZmVP%2FQGd6%2BR7Mmsgzny5xgdQ9c1YKxuBI2LRISUSwmvcgFJcvz%2B9wbYaABiQQ0LGcvxW4QvMaTxz3rHE0rWFgBxf%2B4sitTZSKSQuhP143OxCGQcZzdV9Hpfn3jBzBKgXKmMzVV95x8okR6mlQS%2BJn4zhq9g7HSI0JJwOJw1tOl7u8L6tGzxQp%2F9iCGCF7HrYgT0Dcd0j1IAMtkbkEroW5xx59Nea5XJepwE8DDXP3M8IJ5FSOZe1T0729E9oQAPXEW3jmIuPCZke1zigQb4mpz%2ByrTcdKNnF2MrNxFlPx7qsBXWia23qatYvG4TEx5QyguM19dhx5mjCNqbTABjqkAai6V29Px0aqG5krOBPCmvhlutVfKn2%2BuKJNAlqTiLVld27lGDmV2HqR1xCmmJ5%2F4BXUYOLa4CX8%2BEp5AQpzO%2BzIbRwT%2BIYCvJ2r%2Fb57i8z5fSs8ljbPJpHkx0I5CRRHxyakaBsxusJeOrd38kKwK15sRgNPkr5ZBOKVmC2WWrndYMJXC3iG8Br2mp0msa0G2DTaOg%2FEWk2G4otJqQRSIQzDaBFv&X-Amz-Signature=13dcf56d1f6cbff4051b1a39afdcb019435e50391ceb8661eef1c678db7238ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRKVYFOZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGwtDX2P2IRNF6E98FsKYzS4IxdGMOajbTK5%2FGPSZEYQIgTOfJHjLywUpzgZyX5XyyL4h9kVJZohY1gCoHV3AXVh8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMtZw6NG7Fa7oJf83ircA%2B0nH%2FJl4mg90INKyR3PSuudN6FnXzcD4qsHWToLNnhdRqJuEVAoRMBzP56pP6StwuEJhcSTu3reFmtAOAxs2JwMM8q8NKlW%2FZ5N5uv%2Blb5%2FO4DXTMeVzk%2FW2xk%2FUCFhtMlYmLXBTrSsSVnVS96fLr7NWzr80re6Cd0oBf8N7%2FxX5TfCd5wUCPtwV2XspWqWoeCWa6SvYHfj%2F7o1%2BdGrTqsCRZ3DdG6LBHAw%2FK2PDmdyDsFs8W1QFcVs9Ys%2B82XX0w42dVr0N7xgucFlFIvaHM84VB3E7h636GBt%2F8w1xtD8juyN9ZX0Suh8Fynh42RtpunpuCzFQDzJASkMkXj%2B8xgc%2FMFIDvMRK%2BBfbHnX8ghXdVcA5pTnqCfFQXnsO4Un3RobpJsMCdMqwv3HAg8%2Bi4%2BgkqNj5tAYvHzgYXe6Nk7%2BIDt%2FF1pjt%2FbLUzNwe5vfP%2BbjLIQxYqwUhM0R8FBBFZlOcSMhVxOGUnQsM%2FzMk4sUoy1zS03UxMcjE5yHPbTadg1gBH8kzM1sGz7Cx6SeWFefkm7Czm6oN%2BHmFizqLHIk3eX3g%2FPU%2B86b2%2BXW175gO4fCdW%2BtWu9a%2FHLFdj5Is3Zh%2FCSw0tdjltm7DX4X%2BEMysrHemMe5yGU2vrrKMLWptMAGOqUBT2uPHHw%2FoT2%2BcBBcUh2zHapewTVbrI9cvumIxXpjFua4H38XG32jzO%2BBNIcPgnnLcXAosQbAQG1%2BjxBT%2FClVlNvi1cUSkXbFGIWDiyt%2FScOWgkzg5FoZ1j0rSgy61%2FNjFbWw6gdHJq%2BupEpjrefJ4ErnFGi7Q1BBXWEKkuCqqi4AOczTcKTxvzgPsIydcNnBGFlzxGa7mX%2FaUzrYCRBer%2B%2BZuqJh&X-Amz-Signature=1ec86d836f83c8a87646acf388f55b49fa5520eeef559e6374715f5c55c0306d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRZVEKEX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1K%2BiC79Wcdn7AMx2ATZ2Q90EsMyQxfmuyymmQN2ftRAiEAkHgs%2BdTmmyOWWZV%2BCUK8yTWuTsGEthCeEUgPhc6PIsgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDnwOhqUBU6oQ8zuRircAw4cVMSlcohNHS%2FlWGckTwYphByh1D1Jn1yGuTBmlSUJxlZ8vfCffH6m15g4aKw%2BBqrsJgfvu%2BcVTzpb%2FM%2B81nnJohe11bKCGACiIVa%2F5kONiwxXUz2ZsUSmSDMzi7pOQznSFe3rl9Oiz4TV6W2QLQoKbnoR6xY98XdlvjM2t6TN%2FkWz1zfwJ5RfPrBtuKfyvlykMqCLwD7wB7S6%2FkCMsFhUtIRNirTccZ2T%2BNmxVJVyQLT9tuXiSzvTkycNXHecc7vzALIPf3WCCP66J%2FfV02rOP2jkd62jnmvlSId2fghyCuxvPXz2S8MhV4yVvIzwzI2FwKYTJx%2FsXLz0MIwLj1%2BtKVL6AptgjuRQpxKQphfotAoqbWQHlAMxFBSjEZxhxTY9tnEhwCPo%2FXpyKOTQy%2B9cfmdhnvA0YkoJS6GJWqWZy07A99SF7LNblJHPRkpvGPpixTCpNtEVauDYWoPyF5PaEO41L9HwlrRZOnFCnHheGGj21Lia6FO6JEpPV4aFZokq%2Bi5XCxGP09wwXNtKBWNxxHKV%2B%2FbTmOKlZpxLHW1yYGfzOnz6eITIKVcZQqpbse5Zttu4yJdK8BTtO4egEMTgMFDl3NsOBWBtSVgTbSJdGBcvKOWN6mCTEgs1MMCptMAGOqUBJWulo4zpnavsfkT2fUrjCLy82Grjz7WnWy5VUw2iXm8%2B1a0sZyll2B1zG6dwpwO7ufygN2lLeRfK3p%2FbqLVqeXqV0zEwkHp7SHGb%2BnZrDhpmDOzfEFcXPdZ%2BcQhGViUhNRt34itHORVIY22osC0GnWURpkuYi8w14sA7xRDhXRB62kAWwTPxXRuWFN3M2VWYWXa2ZYWUw550Hsxhgq7o6xMi8Tu3&X-Amz-Signature=09e8d25d6de7f8421366b59a9e3531362d5280c7c88ef55a3849aa10a1f6d043&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PN3XHNX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtta7ejks%2BvEzEX1Upgp3jv0pR9ohujmw48Qz%2BIJvYaQIhAK77fwVGJm2jGM73p6wcIegbE4pUw7xM%2Fdgr1LNR0UG3Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyP1qU8cHf2mV%2BIw9gq3APuUoNjhd2v0UjPaNJHi8UDRmPEi0WJl1%2BTzUAnWTY3GRreI5nzfJzy90F3LHEX4mSjm9UvKbfKm3P9WKKEl2HDVHwo9RtayL664PMsubqpWeNy79HJmNhhZ3YHVlblWQBzv5GbUgcauobC1CNg%2Ftf9qWxTtx5YH%2Bmmj0tg%2FkXOLzLnuJjvRJGaiegcDvW8QDD5cdNt65iVmUzaTQc7wL9C2xD16zc4gwZ%2F3YdLWUXPMdmNOX3QoL8Wr1NJAoQzv3Vj5jHhFd6nfpiSL23dDl2LoApVW3qMST5rv3ZAjqRbZfzNh6AZmVP%2FQGd6%2BR7Mmsgzny5xgdQ9c1YKxuBI2LRISUSwmvcgFJcvz%2B9wbYaABiQQ0LGcvxW4QvMaTxz3rHE0rWFgBxf%2B4sitTZSKSQuhP143OxCGQcZzdV9Hpfn3jBzBKgXKmMzVV95x8okR6mlQS%2BJn4zhq9g7HSI0JJwOJw1tOl7u8L6tGzxQp%2F9iCGCF7HrYgT0Dcd0j1IAMtkbkEroW5xx59Nea5XJepwE8DDXP3M8IJ5FSOZe1T0729E9oQAPXEW3jmIuPCZke1zigQb4mpz%2ByrTcdKNnF2MrNxFlPx7qsBXWia23qatYvG4TEx5QyguM19dhx5mjCNqbTABjqkAai6V29Px0aqG5krOBPCmvhlutVfKn2%2BuKJNAlqTiLVld27lGDmV2HqR1xCmmJ5%2F4BXUYOLa4CX8%2BEp5AQpzO%2BzIbRwT%2BIYCvJ2r%2Fb57i8z5fSs8ljbPJpHkx0I5CRRHxyakaBsxusJeOrd38kKwK15sRgNPkr5ZBOKVmC2WWrndYMJXC3iG8Br2mp0msa0G2DTaOg%2FEWk2G4otJqQRSIQzDaBFv&X-Amz-Signature=ef366d194e8763590d9d945b3e4a0b8251338382c502cddaf4d90dd9c8644fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
