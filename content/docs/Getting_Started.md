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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKQUXBW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFxIB7pto3XREyvCf4WYP2N4n0objrXZKI53Zty6jfVAiAaLe6EaTHOxomwsZD%2B%2BC8v7zXpJnlgJY1uUZ9q%2BFL07iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVFN8SQioSYgxXKE%2FKtwDo2KZK4F5PIOJAenZU3Qy8ta5pFiVv4YggqyC%2FAS7Q%2BbRAvwfAIoW5yJX0aRj8Ni5b0lNK7I3XjXRrmpRz1z1ULLBq2n5Sy5AMbAyZ03oAO1bJvaAnXtW6wYfYNQsu0VGxAXfWXdeKcTe8L%2BtHDF82XA8%2Bz4V5F8IjEAMVuSq66jPQ%2FZLNpQE8IIVhiCkkIXqiQJ9iOPTY1K59FMtCQczbNyl%2BER8Lh7X0i3hHH452%2FXkhMhUkUvOzL3o18h4UNIUjCBhoWQEcT9mQ5BmqQteHsvGAEfVozZolDQb6AM4EvqFqLD%2B15DQsstwKOpnJHhmZRe5%2BNPrhxVrida2gOIsmnth7lgCNjHpY3e%2FM4DnCdqU1E6%2FBJ4R%2FS6jk66r%2BuozSkPRqGZVC9Gjb1lhYUBRgxd0JUSMvHkrOQ2dgtMIFgrqsIizdNAEUWX8xq%2BvK7rYj8zpPjfKN3%2F75YdEY9%2FJGMyNle8KUFlPaz22T%2FvG5tDodfU6Bta3Hm08iJ5zvo0juzKIHw1VI%2F3b5Ld9wSqb9XWMfu3AK2N%2Fr2NY7n7xRJh%2FU4prfksdXGaZmkHZUuaKn86sKhjyVypUkzB2t%2FpDI93K0lQvEQhPaOFXV4wOHq8jNhPzTprp836q3FowmoaOwwY6pgHeu5W1yq9vEWri13ClcMOEsypno%2F5SptWiyA0l7cNft2cUM0Zox4Ozb57VYIwy6kQeLYUJm5acSR%2Fl70sYPVDJF5k1msCUEyvHJ6SOfyU3WqSfRzd9%2BpbUlcWakf%2By9dfqYkenh3%2F4%2B2hWSduURbk1C%2B%2BCWkBZvs6PMJz1rChwk0odhrp7XF%2BBWEVaVeNWJJHt5weZug1CbZy%2FEtFesbLRzx24VSeJ&X-Amz-Signature=ebe116cbe0d1485121fec1f0926301cf398291f90f4572dfdec9125271764275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKQUXBW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFxIB7pto3XREyvCf4WYP2N4n0objrXZKI53Zty6jfVAiAaLe6EaTHOxomwsZD%2B%2BC8v7zXpJnlgJY1uUZ9q%2BFL07iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVFN8SQioSYgxXKE%2FKtwDo2KZK4F5PIOJAenZU3Qy8ta5pFiVv4YggqyC%2FAS7Q%2BbRAvwfAIoW5yJX0aRj8Ni5b0lNK7I3XjXRrmpRz1z1ULLBq2n5Sy5AMbAyZ03oAO1bJvaAnXtW6wYfYNQsu0VGxAXfWXdeKcTe8L%2BtHDF82XA8%2Bz4V5F8IjEAMVuSq66jPQ%2FZLNpQE8IIVhiCkkIXqiQJ9iOPTY1K59FMtCQczbNyl%2BER8Lh7X0i3hHH452%2FXkhMhUkUvOzL3o18h4UNIUjCBhoWQEcT9mQ5BmqQteHsvGAEfVozZolDQb6AM4EvqFqLD%2B15DQsstwKOpnJHhmZRe5%2BNPrhxVrida2gOIsmnth7lgCNjHpY3e%2FM4DnCdqU1E6%2FBJ4R%2FS6jk66r%2BuozSkPRqGZVC9Gjb1lhYUBRgxd0JUSMvHkrOQ2dgtMIFgrqsIizdNAEUWX8xq%2BvK7rYj8zpPjfKN3%2F75YdEY9%2FJGMyNle8KUFlPaz22T%2FvG5tDodfU6Bta3Hm08iJ5zvo0juzKIHw1VI%2F3b5Ld9wSqb9XWMfu3AK2N%2Fr2NY7n7xRJh%2FU4prfksdXGaZmkHZUuaKn86sKhjyVypUkzB2t%2FpDI93K0lQvEQhPaOFXV4wOHq8jNhPzTprp836q3FowmoaOwwY6pgHeu5W1yq9vEWri13ClcMOEsypno%2F5SptWiyA0l7cNft2cUM0Zox4Ozb57VYIwy6kQeLYUJm5acSR%2Fl70sYPVDJF5k1msCUEyvHJ6SOfyU3WqSfRzd9%2BpbUlcWakf%2By9dfqYkenh3%2F4%2B2hWSduURbk1C%2B%2BCWkBZvs6PMJz1rChwk0odhrp7XF%2BBWEVaVeNWJJHt5weZug1CbZy%2FEtFesbLRzx24VSeJ&X-Amz-Signature=4b86fff08a794eb2aa9863bc0e81701a4a922d7385aa8f333e23b678b5a16666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKQUXBW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFxIB7pto3XREyvCf4WYP2N4n0objrXZKI53Zty6jfVAiAaLe6EaTHOxomwsZD%2B%2BC8v7zXpJnlgJY1uUZ9q%2BFL07iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVFN8SQioSYgxXKE%2FKtwDo2KZK4F5PIOJAenZU3Qy8ta5pFiVv4YggqyC%2FAS7Q%2BbRAvwfAIoW5yJX0aRj8Ni5b0lNK7I3XjXRrmpRz1z1ULLBq2n5Sy5AMbAyZ03oAO1bJvaAnXtW6wYfYNQsu0VGxAXfWXdeKcTe8L%2BtHDF82XA8%2Bz4V5F8IjEAMVuSq66jPQ%2FZLNpQE8IIVhiCkkIXqiQJ9iOPTY1K59FMtCQczbNyl%2BER8Lh7X0i3hHH452%2FXkhMhUkUvOzL3o18h4UNIUjCBhoWQEcT9mQ5BmqQteHsvGAEfVozZolDQb6AM4EvqFqLD%2B15DQsstwKOpnJHhmZRe5%2BNPrhxVrida2gOIsmnth7lgCNjHpY3e%2FM4DnCdqU1E6%2FBJ4R%2FS6jk66r%2BuozSkPRqGZVC9Gjb1lhYUBRgxd0JUSMvHkrOQ2dgtMIFgrqsIizdNAEUWX8xq%2BvK7rYj8zpPjfKN3%2F75YdEY9%2FJGMyNle8KUFlPaz22T%2FvG5tDodfU6Bta3Hm08iJ5zvo0juzKIHw1VI%2F3b5Ld9wSqb9XWMfu3AK2N%2Fr2NY7n7xRJh%2FU4prfksdXGaZmkHZUuaKn86sKhjyVypUkzB2t%2FpDI93K0lQvEQhPaOFXV4wOHq8jNhPzTprp836q3FowmoaOwwY6pgHeu5W1yq9vEWri13ClcMOEsypno%2F5SptWiyA0l7cNft2cUM0Zox4Ozb57VYIwy6kQeLYUJm5acSR%2Fl70sYPVDJF5k1msCUEyvHJ6SOfyU3WqSfRzd9%2BpbUlcWakf%2By9dfqYkenh3%2F4%2B2hWSduURbk1C%2B%2BCWkBZvs6PMJz1rChwk0odhrp7XF%2BBWEVaVeNWJJHt5weZug1CbZy%2FEtFesbLRzx24VSeJ&X-Amz-Signature=b19e649b75aa85639b0c07ab06eec46636862664dc44f1720661baaf514701a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGYWPZ4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUNm6%2FSvMeWQ0DXYUtvv8AGg%2FaBn8BVtGTwAuuaxr%2BgIhAObCd6UQtu15qDHdq2EnT3MYGn63XEeRp9IYU0IQazTuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCZ42Lo0wwNVR%2FATEq3AN%2FvliSpPnagp7j95CDj6rAD1jDiQN3fAYyiUr4pYLXAHpEe0WG46%2F7XYxEOvo9ziOtTdH7ldwcjwWu8Rv3vhvFBonWUnW2CaJ3EI7yTlzCMSgDhtVJoagQ8hzb8i5VsjLYJaMO2EkMsjIsYPIZ5Cyk8V%2B8NUt4isCMxypHgErR4Oyv80E%2FHShgcP5IgnG7sI7EAqzQEmIJ18OO3TLXzdcUYYhQNEIS0jQ5H34mbQgbdk8DU3863oVcqVlM2JzJCub%2BtlfLu86phgSv%2BAbHA3m9yAjDCRBM2L%2BiMD%2FGO5I2zHuZr87RxC6Zl8O9pOwk7Aaf7BSlMSs9zAia8qkBNZC8AZIzHwVLENBKuHgZEHlgeKDg9osiYGhN7ccixQHob7wKSG7vLbAv5vfN%2B95RsnO7OFdrDxaoWlGkaA3I5yJjFqPyXFGwYINWcYxshimi97nxWOZ0AswkSDHOQAjXuOwu%2FxvQNGGWr3Fir8d9FTfFjqIkwCGh6HUKoA%2BZBgV4vab9DlqvEua%2By222BYOsyJuW%2FopeNf4FynccMxHxchRr0iHsDG70lbGsXjgbnfhAehytxDbf1ClO4PFWO3tJ2FZBmdUT9MEEJ7JmNPRoqJ9jL4tup93QtOBiF0cpMzDtho7DBjqkAangjYBNNK4P%2BkFYcKTT4%2F4atHJFMIJ8iKTSiYCHJUZWjkFqBYS%2FT47ZAC5kyMQ7rLfYZDMNMljdP7kgKkmK7o3V7E4EyJGoEASEmyvtFHR2mZiaGFKn5PFFqugFbL0jRACBMFcK%2F7hRonmAnOK8iapwt7V%2FjMK6vnefSbMH5KrMYUBA0VTpgUKa9H3GmtWrkofnb%2ByGshnvB3OxDWtdVHrnoT%2Bv&X-Amz-Signature=fbff091589e4606b5b30a739ead73140cbab06477748a696c6360536a87e0c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZX5PFHC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEepM4mFxrz1qMmLzAaWDz8IDDVWk4LFRT1DMXxBB0JAiEAx8gXLDaeBWkZ8nS1ZBpidAfmZWqJ3NN%2FeHTRG2r4z3QqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2a%2BlauQuiUwiEhcCrcA1Dc91Y5%2BYvKSn4OQtx22noOw1o363qdZSEY%2Fa7fojRFrESvDMVK5eSHnyqCRGwR0ZCJO6GBIqIZz6pWuya0qQqADxbOikkCz3w9UvcrkA83po8Y7pflo68EBH0sT59IqDr8dkj3E%2F3ZwonaswVV38X4rH6glNP3vQOLAxOIxVdL1s2uTOrEJ8M%2BXBH4yqI8GyNud3KLWx0S0BsIv7Gb%2Bb60SD8vbS8iIqVdeTdpnsfy1AYI%2Fw2EoZE7OKw5Nmu9BECiaNkjb813FTsoox%2BGb3asx5tVCwlrAmUNXV5yIsVpma4VLSHJN8PeQeguyh%2FQPPxn%2F%2BJ5G0VFO22DwRUAgaBXYvRSFAu2P%2BB%2BJhfw2bLKr%2F9cnlvilZABphXoYhIj5PISK7mUtCPgwwtiG6rbDo0LIhVq28B7KyNaufVPDQe5IxdA7Tejf8KUX3Ej2qocqZ9kI%2BmynzQoGRaaLY%2BTYFu394uMusMYhIOK%2F1mwszzVV%2Fh1YO6DLvphPRpPpbNjv3c4hCr3fqXrzmwnkLbsBeUjME%2FzR%2Bf0eX3BdAJ3fAr0j26%2FC%2FBXagqWIfPZ9JWRrt6h%2BX3ceE3o21962VA2ZMY1Ey6dYMGDMqKGrHot7Piiz4loQVwBUHRfdSziMJeYjsMGOqUBF5ySCOM0jg2OwL7N6nY56xQUw36bio%2BNFvgqYnHdN65NVfI4L8AJvbSG0403RWTnx%2BmOCPqEhmNiRpRUqBtJCcxZFUix7BoPV4XGWQuAEJxkLIswR1e4jijwOHUa49ZbOJnO3dX3S7EjaGCm8uWp2reC%2Fkd5jdNRQ85Isry0jN5j8%2Bd0Aqw7s0e2L%2BzuXkoTkR2APXTtPsyQDQEo%2FORIQuW3lVdL&X-Amz-Signature=b63072ac5a9c1d0b9efdd8b7a8ab9f2bbeb594d9d176e84549c8b219212a9e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OKQUXBW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFxIB7pto3XREyvCf4WYP2N4n0objrXZKI53Zty6jfVAiAaLe6EaTHOxomwsZD%2B%2BC8v7zXpJnlgJY1uUZ9q%2BFL07iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVFN8SQioSYgxXKE%2FKtwDo2KZK4F5PIOJAenZU3Qy8ta5pFiVv4YggqyC%2FAS7Q%2BbRAvwfAIoW5yJX0aRj8Ni5b0lNK7I3XjXRrmpRz1z1ULLBq2n5Sy5AMbAyZ03oAO1bJvaAnXtW6wYfYNQsu0VGxAXfWXdeKcTe8L%2BtHDF82XA8%2Bz4V5F8IjEAMVuSq66jPQ%2FZLNpQE8IIVhiCkkIXqiQJ9iOPTY1K59FMtCQczbNyl%2BER8Lh7X0i3hHH452%2FXkhMhUkUvOzL3o18h4UNIUjCBhoWQEcT9mQ5BmqQteHsvGAEfVozZolDQb6AM4EvqFqLD%2B15DQsstwKOpnJHhmZRe5%2BNPrhxVrida2gOIsmnth7lgCNjHpY3e%2FM4DnCdqU1E6%2FBJ4R%2FS6jk66r%2BuozSkPRqGZVC9Gjb1lhYUBRgxd0JUSMvHkrOQ2dgtMIFgrqsIizdNAEUWX8xq%2BvK7rYj8zpPjfKN3%2F75YdEY9%2FJGMyNle8KUFlPaz22T%2FvG5tDodfU6Bta3Hm08iJ5zvo0juzKIHw1VI%2F3b5Ld9wSqb9XWMfu3AK2N%2Fr2NY7n7xRJh%2FU4prfksdXGaZmkHZUuaKn86sKhjyVypUkzB2t%2FpDI93K0lQvEQhPaOFXV4wOHq8jNhPzTprp836q3FowmoaOwwY6pgHeu5W1yq9vEWri13ClcMOEsypno%2F5SptWiyA0l7cNft2cUM0Zox4Ozb57VYIwy6kQeLYUJm5acSR%2Fl70sYPVDJF5k1msCUEyvHJ6SOfyU3WqSfRzd9%2BpbUlcWakf%2By9dfqYkenh3%2F4%2B2hWSduURbk1C%2B%2BCWkBZvs6PMJz1rChwk0odhrp7XF%2BBWEVaVeNWJJHt5weZug1CbZy%2FEtFesbLRzx24VSeJ&X-Amz-Signature=2c9c06842126ead3276b5fe0c9dd022c22d92f426352db634004c61d563e12cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
