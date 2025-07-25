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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF4KG5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFpn5BYMbmmJJwCX%2FgncP9RSA6kFFM4uV%2FiSr4Rv%2FZ8wAiEAjqfrBU3LBGZN2W3kvT%2BMYDVQgxx40Bsse0YQGseL69Eq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC1qELnmWd93PI%2FTGyrcA8l4VZ1mDzHAP8CYWW4EEfEi7HAlSXws1hplWV9AgKadnF8Ds%2B1uwulmdibh9ThZUkM%2F55t4HEAgYssofRkY00PfFHXNvi5Bc5xbXnec8E9KHxb0acuAxwGa%2FOsqWoNJlnNYhF0g5E0KIpkdXCD%2FrETVWhhreQtxq%2B9Ma%2BJE8%2B5wxR%2FLddlBTYC2q2UhdslrT8yp1sTaBRnP8j6Evnzw5YMQLDlIdh79c2%2BB51lO9rFb1rHEMcHjaQdrVXf76PmUBYOqIf%2FgzN8UpCOMS%2F9V%2FvA6lkqyZMjPb96EmdRjA8A3CiU1Rw4%2FkeK4NlUfBn6wVhNtXyr7CfVjBdC2CdoXvm1tJNLnZLhZhEU03N6liQqlFkuaaD6KL4hsw0m6Fvpl1sNXbZhRjvF9bnLI4%2BiXljK40tZf9%2BDLOqUNGQ%2FVxcwIMJCbC2Xl0p40ULMze4gvSlMqII9NU%2BXAJDE1CKy15nwWnznvV2O30A%2BEx%2FnDQEkK%2BqHmHfG4JcjaySsyqS7g2Ubm%2BhaDLkjj%2BGaigjkCQvWsmBQhqkHqisoCyNCmcS33Wa6uH5%2B4yeu4h%2B6yYPGHpV6PUNXMRvxOEtkL6Rub%2FtSZTsAIFpwGstqQFct%2BLiO54M6GczfuAI8D%2BzvFMMPojMQGOqUBFt28L4umBypP0Pt8qEsfKBkdSKuRIEd9EkMJDu18T8lZvCqi5nFABOIDlASbDHf0x7ePOpp4h25WqpjyHMXjrh7DIIotwsWQ7LM8v9gfiL99fPPxfvk9b2SsPzf6oK08Mwq7viGU1c1NpGswCgOx8Zsh8UxxNppRRqcaLSK1LJa9cLI2tdBPzsTnKb1by5RGDjrQkGhR1h6WvigGNCe87tvAeOR8&X-Amz-Signature=b893975279081772493ea7a901e7a6811f1237698f1c1509c8378abe80d7c6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF4KG5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFpn5BYMbmmJJwCX%2FgncP9RSA6kFFM4uV%2FiSr4Rv%2FZ8wAiEAjqfrBU3LBGZN2W3kvT%2BMYDVQgxx40Bsse0YQGseL69Eq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC1qELnmWd93PI%2FTGyrcA8l4VZ1mDzHAP8CYWW4EEfEi7HAlSXws1hplWV9AgKadnF8Ds%2B1uwulmdibh9ThZUkM%2F55t4HEAgYssofRkY00PfFHXNvi5Bc5xbXnec8E9KHxb0acuAxwGa%2FOsqWoNJlnNYhF0g5E0KIpkdXCD%2FrETVWhhreQtxq%2B9Ma%2BJE8%2B5wxR%2FLddlBTYC2q2UhdslrT8yp1sTaBRnP8j6Evnzw5YMQLDlIdh79c2%2BB51lO9rFb1rHEMcHjaQdrVXf76PmUBYOqIf%2FgzN8UpCOMS%2F9V%2FvA6lkqyZMjPb96EmdRjA8A3CiU1Rw4%2FkeK4NlUfBn6wVhNtXyr7CfVjBdC2CdoXvm1tJNLnZLhZhEU03N6liQqlFkuaaD6KL4hsw0m6Fvpl1sNXbZhRjvF9bnLI4%2BiXljK40tZf9%2BDLOqUNGQ%2FVxcwIMJCbC2Xl0p40ULMze4gvSlMqII9NU%2BXAJDE1CKy15nwWnznvV2O30A%2BEx%2FnDQEkK%2BqHmHfG4JcjaySsyqS7g2Ubm%2BhaDLkjj%2BGaigjkCQvWsmBQhqkHqisoCyNCmcS33Wa6uH5%2B4yeu4h%2B6yYPGHpV6PUNXMRvxOEtkL6Rub%2FtSZTsAIFpwGstqQFct%2BLiO54M6GczfuAI8D%2BzvFMMPojMQGOqUBFt28L4umBypP0Pt8qEsfKBkdSKuRIEd9EkMJDu18T8lZvCqi5nFABOIDlASbDHf0x7ePOpp4h25WqpjyHMXjrh7DIIotwsWQ7LM8v9gfiL99fPPxfvk9b2SsPzf6oK08Mwq7viGU1c1NpGswCgOx8Zsh8UxxNppRRqcaLSK1LJa9cLI2tdBPzsTnKb1by5RGDjrQkGhR1h6WvigGNCe87tvAeOR8&X-Amz-Signature=5be2dad03fe58853717b81e5b184e6d537099fd9fd28b154ee7cb23e8f44a45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF4KG5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFpn5BYMbmmJJwCX%2FgncP9RSA6kFFM4uV%2FiSr4Rv%2FZ8wAiEAjqfrBU3LBGZN2W3kvT%2BMYDVQgxx40Bsse0YQGseL69Eq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC1qELnmWd93PI%2FTGyrcA8l4VZ1mDzHAP8CYWW4EEfEi7HAlSXws1hplWV9AgKadnF8Ds%2B1uwulmdibh9ThZUkM%2F55t4HEAgYssofRkY00PfFHXNvi5Bc5xbXnec8E9KHxb0acuAxwGa%2FOsqWoNJlnNYhF0g5E0KIpkdXCD%2FrETVWhhreQtxq%2B9Ma%2BJE8%2B5wxR%2FLddlBTYC2q2UhdslrT8yp1sTaBRnP8j6Evnzw5YMQLDlIdh79c2%2BB51lO9rFb1rHEMcHjaQdrVXf76PmUBYOqIf%2FgzN8UpCOMS%2F9V%2FvA6lkqyZMjPb96EmdRjA8A3CiU1Rw4%2FkeK4NlUfBn6wVhNtXyr7CfVjBdC2CdoXvm1tJNLnZLhZhEU03N6liQqlFkuaaD6KL4hsw0m6Fvpl1sNXbZhRjvF9bnLI4%2BiXljK40tZf9%2BDLOqUNGQ%2FVxcwIMJCbC2Xl0p40ULMze4gvSlMqII9NU%2BXAJDE1CKy15nwWnznvV2O30A%2BEx%2FnDQEkK%2BqHmHfG4JcjaySsyqS7g2Ubm%2BhaDLkjj%2BGaigjkCQvWsmBQhqkHqisoCyNCmcS33Wa6uH5%2B4yeu4h%2B6yYPGHpV6PUNXMRvxOEtkL6Rub%2FtSZTsAIFpwGstqQFct%2BLiO54M6GczfuAI8D%2BzvFMMPojMQGOqUBFt28L4umBypP0Pt8qEsfKBkdSKuRIEd9EkMJDu18T8lZvCqi5nFABOIDlASbDHf0x7ePOpp4h25WqpjyHMXjrh7DIIotwsWQ7LM8v9gfiL99fPPxfvk9b2SsPzf6oK08Mwq7viGU1c1NpGswCgOx8Zsh8UxxNppRRqcaLSK1LJa9cLI2tdBPzsTnKb1by5RGDjrQkGhR1h6WvigGNCe87tvAeOR8&X-Amz-Signature=fe525ce25e9538b02c2166b0214dd881dfe8a077c848ec64b77e654d713c5815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7N6VZQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIG7GGXtCOlu6W%2FN5tPhgb26yOO9W3On%2Fq0G%2FhiTuVDk7AiEAp61GyROD2yaGSBdIG1fZaRi6yV5%2FiygSGFnAHfxEvoMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDO7OG8g5MBdPAT9qzCrcA9r2fH9IA9CjWt5XvZl20zOxZE1UTjztXh6w%2BgpvXB4k79UcdNXB%2F4C0xG0y2rfUdMtvwaipFA7PX9NhhhK8CqOUQ5paqZpYcNIAZH7cIDZkzyeI8YugtS2vZvWs5PCPnHeRcQrNzWBmuQXAaBW8JMaYOpz3QVJjoM7aEQFxIlmT2HK6qE330SDcH5pV6CKWlIlMYEIz2vZKsBDy6Cdlvo7vuh%2FiN3946p5DSLNzX4BIWcYJozoKsCAUXDtaiig9YcQk9rzeZ4H%2FmwOH9optGTqb7NBY7idtyc%2FZX588hqssbpiH%2FceEm7A3MK11nijsLyDHaGO4ICo9wymNbSbVD%2FgBSkOL6faqQMxUD6BpEiTdqftuuZD2UwOL7IXqMrcv8ut4kpf%2BTe1nX6Ea2K9wo4flaVtRMXrQeQEF%2BEhcPkji%2BgOZPXQrpGqpO3Pu0cJrFvrB3oZpbKLtu4hSp66JY7P0Eb1%2FwE6pEpw173Zm57XNJgpB7T%2BuuRwL6I2Ajxet9GyJya4t0TZXQ%2FZTDxI4eNG6NKWaPyIZv%2FtrhV0d3QSPmSUhNPl6mNJqzqEN9SqoKctDe5IVmsffBEV8JfxqfeRNs%2F3Dxtbp2BscEeb8hvWOsEcc7AU0yj3r2vV4MNjnjMQGOqUBWY3D422xF4nCwA4EPpkrDWPby0GuTIIlJgq2z0WmiQBTaQVArI4KQfRAj1vODKMeWJjdE5l%2BA04qQbSZOWF1%2Bqiz8gL%2BJpp%2Bd3zxJT3yPWV5ngkGWfLU9jroRu5kuNpmCp1AMShhVN%2FK42uMiaCENf7%2FNCPAPLRqObyfCGddWlW189Ug8VEkl89fdoPBRlMqwKdsK7Qi0JaNHY8fEVzl3M99f0qJ&X-Amz-Signature=da61486dbca8e5dbb2446e488c9780198d97d53bebd44a8a36e8f640ca5fe948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP2RUMSA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEhppbXe68Joy%2Fg9gJ%2FIYnRRPXVX0Zz5RBD4ttCmL7G%2BAiEAph1ebozPMQ%2Ba9IutiKAK8IA1KkBwZhCBdtcfkM0%2B174q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFcfefGhdhfh33mplircA3Ua12pR9luuSBTkdgOdfTLPNBvks%2BJbZMfMlCz515hXkTjDplkWZD9Lj1XFi7XW3p5FX1EJpAaM1iEETb0Xt%2BMGkTpV%2FCs6fEbQ6gTMDJqm5mAJQH3PDLahetcY3xCgR1uPZeWKeHSF73qrTms3DTTvR%2Bb94xY4uZ9Tlv2v9VUqKd4cJoU608CQKPL1YRKBGW8uGiP3oVeTZ1pQHxZMl2486k9ocPTpm400sQiQaXksi2GA0DqXbUrSFjel6NG8ET9tLoOridI3TdjtxUvjuo%2FLchSdUUQ5twR4%2B6vPJ7xOWWKsyZdCE%2FAbYqXE5Tq7YVVlETC%2FNRuWUreXOlr10DPjzFG48F4UVWXKs3o5rFii3KR2r7okQTn51aEToNoExWUy4QTeJfwWVsgNgIOVc6X1MBJaUJTGm1XXydDySnKmI2rr4iysYiJMkPPz%2B9fyK5XRMN%2BluOJo6%2FXoZSq2bswqeOF9FECWRh5JlUkrJiCALWveWygF93O2YuoYflagG3uU8%2BcCjtHkHGAU%2By08R40C3COcGIjy6cbeexV%2B2Qa7s0OPG4mKm1lLEpgmtYcRQ7G7wKms1Y8Z8GYQDLjH0h5KzneUpQwYunQGOmBWKEkU%2Fa3kTJiMEG5Sb%2BZlMIfojMQGOqUBjTl8w3i572L0KaltYumLXSn106hj7tE9w%2F9PH29mkhEbqwI5nxcKAEVyInDvOJRb07%2BrnMdVqWa2Cg6IZrTJJK%2F1%2Biw0kiB5q9UtDCwE0bcAzTFRAibv4DIPEW70WYMcHCfgQSYAJPgTyp83ixP0y7ZrjzGKI8DRlIgUBsrzcB0zFRp%2Fn4SnicH7jn6d0dp17JHVT6OdoUPpTp6ZPg5RURu0SiaH&X-Amz-Signature=4f0ffe8eec3a5d820585bf650e071b4a3ddea102f2848401029de1c17338e7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXF4KG5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFpn5BYMbmmJJwCX%2FgncP9RSA6kFFM4uV%2FiSr4Rv%2FZ8wAiEAjqfrBU3LBGZN2W3kvT%2BMYDVQgxx40Bsse0YQGseL69Eq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC1qELnmWd93PI%2FTGyrcA8l4VZ1mDzHAP8CYWW4EEfEi7HAlSXws1hplWV9AgKadnF8Ds%2B1uwulmdibh9ThZUkM%2F55t4HEAgYssofRkY00PfFHXNvi5Bc5xbXnec8E9KHxb0acuAxwGa%2FOsqWoNJlnNYhF0g5E0KIpkdXCD%2FrETVWhhreQtxq%2B9Ma%2BJE8%2B5wxR%2FLddlBTYC2q2UhdslrT8yp1sTaBRnP8j6Evnzw5YMQLDlIdh79c2%2BB51lO9rFb1rHEMcHjaQdrVXf76PmUBYOqIf%2FgzN8UpCOMS%2F9V%2FvA6lkqyZMjPb96EmdRjA8A3CiU1Rw4%2FkeK4NlUfBn6wVhNtXyr7CfVjBdC2CdoXvm1tJNLnZLhZhEU03N6liQqlFkuaaD6KL4hsw0m6Fvpl1sNXbZhRjvF9bnLI4%2BiXljK40tZf9%2BDLOqUNGQ%2FVxcwIMJCbC2Xl0p40ULMze4gvSlMqII9NU%2BXAJDE1CKy15nwWnznvV2O30A%2BEx%2FnDQEkK%2BqHmHfG4JcjaySsyqS7g2Ubm%2BhaDLkjj%2BGaigjkCQvWsmBQhqkHqisoCyNCmcS33Wa6uH5%2B4yeu4h%2B6yYPGHpV6PUNXMRvxOEtkL6Rub%2FtSZTsAIFpwGstqQFct%2BLiO54M6GczfuAI8D%2BzvFMMPojMQGOqUBFt28L4umBypP0Pt8qEsfKBkdSKuRIEd9EkMJDu18T8lZvCqi5nFABOIDlASbDHf0x7ePOpp4h25WqpjyHMXjrh7DIIotwsWQ7LM8v9gfiL99fPPxfvk9b2SsPzf6oK08Mwq7viGU1c1NpGswCgOx8Zsh8UxxNppRRqcaLSK1LJa9cLI2tdBPzsTnKb1by5RGDjrQkGhR1h6WvigGNCe87tvAeOR8&X-Amz-Signature=ceddc50ae247b1f3f41e099875f066b435408f3eeff976e17488e3a01288473a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
