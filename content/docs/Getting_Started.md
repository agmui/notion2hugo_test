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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347Q4MRY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeEnsEK0JuXtUQS1vs0ErjOkza0a%2B6EcjSNNwxp9k%2FnAIgd3ZNxqADSeoVT9fNFdLjKE1oVXFrc3RljqLKG0cr1M4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfAwWbS6S81yVU%2FFSrcAzALinA25eYi6E4lJPZ%2BW54EBnGHQo1%2FyQBNQ885cqsWuSnFkkGvr82jJ46GFgGFre88rwc1a%2FKFXSXfed%2BODAeqvJopdBsJTyZdbY2Er9SB0a1UTwv%2FzWYDJJTI9jIkY%2BLkCTItAPukULUEge0cMFcD75b8iHXP7I3wASdaJuC6UegloY%2FBVKX5CYIeBEic8v%2BvI3c7%2FXChA78M0ge7We5G3uZqlGFU%2FdKOb9B9HpCdMDFKX7zpiY9lXLg6B4zOFWOCrfrY7xDR1%2Ba6surlS53rfkmtLNogD4UAnPMrJFYXpfVXI6N30%2FZNjFySeEjHfHcn6GWXyXcZAcPgngrgwxlS7FlqfYbASISoPr6MGxgwntQG1GspmROcWtVa5BFHyJcy3Gea68g66baAVajK4z8k9GoG2iR1oNiT%2FaWpqaupAr%2FOhBKrHCYPBxp%2FEZTG0pHzYBt30%2BanRcDxUkHKqutpDZJiEoX0X2GqLIWmbn3g1mBr%2FmDWkPvqxo3%2FQsn8VVkJEZXv%2BrKyHHN0k1a%2FLwZDebmNhjRqv7mQ0bBQtuQl23NwC9%2BBEt8OIXocdqw72Wbc5nmCjGKEvGONMkKkpj96dpDoNd15hATTRWIKl2IibMH3HZPJlq%2F%2B4BDMMMG8jMAGOqUBrALnE2GClZzvPJAvrkOFPHYRVB3WhPe6IVHc0kgOzIXxJiLE8hM13bX%2BI%2BUCEgPMQNFbXezWV%2Be8%2FJmhScQznPOnIa0jZCoA5WWbTLdaVykDaqoqP6XgYdBSAHl7%2B2jvNr%2BPw5Ux0z3sqLktdGnSPFcimxQcCjWG6DpS9DSdgkcMcqMU9RqDqinG19sMORHbQf%2BrIVRDjBjaS9OKAjQnAaNsh17l&X-Amz-Signature=ca4a60ff95ed8f9e284cceabcc48d40f362b78aa93aae71e6964005f3e6c6c30&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347Q4MRY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeEnsEK0JuXtUQS1vs0ErjOkza0a%2B6EcjSNNwxp9k%2FnAIgd3ZNxqADSeoVT9fNFdLjKE1oVXFrc3RljqLKG0cr1M4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfAwWbS6S81yVU%2FFSrcAzALinA25eYi6E4lJPZ%2BW54EBnGHQo1%2FyQBNQ885cqsWuSnFkkGvr82jJ46GFgGFre88rwc1a%2FKFXSXfed%2BODAeqvJopdBsJTyZdbY2Er9SB0a1UTwv%2FzWYDJJTI9jIkY%2BLkCTItAPukULUEge0cMFcD75b8iHXP7I3wASdaJuC6UegloY%2FBVKX5CYIeBEic8v%2BvI3c7%2FXChA78M0ge7We5G3uZqlGFU%2FdKOb9B9HpCdMDFKX7zpiY9lXLg6B4zOFWOCrfrY7xDR1%2Ba6surlS53rfkmtLNogD4UAnPMrJFYXpfVXI6N30%2FZNjFySeEjHfHcn6GWXyXcZAcPgngrgwxlS7FlqfYbASISoPr6MGxgwntQG1GspmROcWtVa5BFHyJcy3Gea68g66baAVajK4z8k9GoG2iR1oNiT%2FaWpqaupAr%2FOhBKrHCYPBxp%2FEZTG0pHzYBt30%2BanRcDxUkHKqutpDZJiEoX0X2GqLIWmbn3g1mBr%2FmDWkPvqxo3%2FQsn8VVkJEZXv%2BrKyHHN0k1a%2FLwZDebmNhjRqv7mQ0bBQtuQl23NwC9%2BBEt8OIXocdqw72Wbc5nmCjGKEvGONMkKkpj96dpDoNd15hATTRWIKl2IibMH3HZPJlq%2F%2B4BDMMMG8jMAGOqUBrALnE2GClZzvPJAvrkOFPHYRVB3WhPe6IVHc0kgOzIXxJiLE8hM13bX%2BI%2BUCEgPMQNFbXezWV%2Be8%2FJmhScQznPOnIa0jZCoA5WWbTLdaVykDaqoqP6XgYdBSAHl7%2B2jvNr%2BPw5Ux0z3sqLktdGnSPFcimxQcCjWG6DpS9DSdgkcMcqMU9RqDqinG19sMORHbQf%2BrIVRDjBjaS9OKAjQnAaNsh17l&X-Amz-Signature=0c3df0300cceb90768b6b932cce85914e9ea36dd9525877115e01c455c944f26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIUMCAL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7h%2BqMAUrULzPicCXpvexLnh3Gp2Qt%2Fxzg7kpCWoBo4AiEAmvxcbbP2y5v%2Fe%2BpUCzdQ5hr3vuXH9%2BDufS7drAJFZp4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCQDiAz7yul3jocBircA8hQfN501ELODdr%2FHFEMBIqC7fbmLvHm6ecB%2FOb3tfoyYi5d0EnGTwG9069kz0m7irBKXT2FMzjG1kT%2BU9dKZOi2el6sYGWtmZcYpx9qJgeVlDHCLr6nG71EVe%2B5DPf9kF0xMEJw4P%2F%2FflL4ImFYCiYcqLo9Ezj1yGgNLXjFWFC4NmPauOVK%2BRyIhY9jsm%2FIdVqJp7oRKatK1BqFly9vCB9W5ZKgQdbQfFI0PduPtgqqkiWqnSYo2I7e7JY45nnPJ7AxosLvTVmAlEmPC0kiXpFq6Gol4yAaKafOW%2FmyRU1yqTvj9BMJC8cJlnYtqKeJ%2F1Wgh1YhjPnjemp4Dc1Oswa9GOR6QisF%2BTLIA9vOTP%2BbxGBJ2DELMxi%2FH7sZyX%2F68S08fynp5JRlOPOby7ugcEqzm4U6hB6ZPJA6mELyrPHWWczJejPBECT3JHiv2622pGgHN%2Bon7rZE6qQMiU3nbbe57cOIH57EAh9DeCYoiy638tONfAMwT%2BkFuaFq8D%2B3PwDfk%2BILEmU14LWFarDkb2suIzDgvJzPcDuwhO%2Bo7soWfArX6yaOvJCst0K0vGAttBpzTjTQ%2FEHX0z1vSYcrUsrXu47gbgoUuUeYjrbI%2F6piZHr2GiNMS3dw6076MNO8jMAGOqUBbbZRA99x5ys3PDcRkTaXCcFucAkoVOi3lwkWwRBsIRHBSmZ47zK8fVD9%2BOyDMW29W%2BFOo1MHICOR4DdagbhlqbsOiyqyZyOJezxJYwoiXlKtJ%2BLkv0z%2FGSKx%2B5uhsFhRRff49ohqZASiuNZG7%2B4O%2B3TNC%2FQZLN5yDERNdW6u45%2FZWQEOa5%2Bh%2FFnC9xFdQ4rdI9zkb5iFNEiiU8KpwWeBwgPxoC%2BS&X-Amz-Signature=56a0f2128ee5eb94d1a388e16ce0193ec527b4552497a7740822556159f0b7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJGRZGI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGc%2FO2Ct7uXz4bDjneoLa%2BO5WMcgPn8F8UD2j48lGkKwIhANKoMca%2FZjz6Q9KTUtXP1fLpJ6uBwQxk2j8fGqtgzDfmKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhqUYElO4u48HFtjsq3APPhPkgL0MfhVDm18EW4g7nFG8s6vrJh2cVakExxhxlF6vXPL%2FNBS2U3wws7zlbsPhGy3IQ%2FHG1rP5RAJSPN8n%2B9kDtzHTjTAHbjMIiY%2FA84L5INhF7r%2BroakbVkiIu5V7lhHiArvhHAXAC19piVaUHi9RFqa6%2BbYDHup1ZqJIuzI1T3xME%2F%2BcVsjvn3W6EOEEeCpdRLGuVmPlb2BIqtmU5LRDi7Juejd9yl7oPfijrpH%2F8jHCJw5xDw1uhqoOEDm55gdKBN91rPwUKPPBSQdbHeoc2%2BqiozuC9b7KPorx1obQ3GQZtVxlJoEULNTgNGlx8n24iYT3HpVdl089NKH6fzWoIMQZUJBBm%2FrvNPz5PYxPukXGSEuX4bjxG%2B0diRNgwVZQrgybbrJNjWFkZ80zpjL%2FpQ3zgp%2BEQD2%2BkBKMY463cXQNEztA3SWBVCueIk3il8TbrFwP%2FmJJgsArseRvqcKeYrZ%2BMtS3DBXck0XBpQ%2FdoBKDKkhrshzkFhLz0icGIcSnlREfDKWOaoGB0tQ%2FJ%2Bz8mpIoPJnGGdkDLEPJEsyTtCOEOYvp4HitRKXO33wOt8fzr%2BTPEnx9AdCAO8sKdF2Mlxm0m83ea1zzgUvlUNqHvH1TJIxhArOyxeDCTvIzABjqkAWcMl48wFxbkbXR7zCpEacc0C0Tm2HmrhKiyQbytokT119OiYbjOwAk7NyzcSr3nSQ7yj2sJRu3ysgosQRv42bT53B%2FQ4%2BiHgajHTFEIilZhlIy5zN6DchSQhm5%2B7SQw%2FvP4vkgmmr%2BPoxDrJHT5R9EcGr1SnZg%2FDtiRMZdI2ynAgHvQnt43w1YdOJH7NTSxkutz6J8UUACQW8FoZBQwsrdrkK3l&X-Amz-Signature=c0224f0eb720c791d8d810e4f625f801e2152a5b22eef40f271e044b07933384&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347Q4MRY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeEnsEK0JuXtUQS1vs0ErjOkza0a%2B6EcjSNNwxp9k%2FnAIgd3ZNxqADSeoVT9fNFdLjKE1oVXFrc3RljqLKG0cr1M4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfAwWbS6S81yVU%2FFSrcAzALinA25eYi6E4lJPZ%2BW54EBnGHQo1%2FyQBNQ885cqsWuSnFkkGvr82jJ46GFgGFre88rwc1a%2FKFXSXfed%2BODAeqvJopdBsJTyZdbY2Er9SB0a1UTwv%2FzWYDJJTI9jIkY%2BLkCTItAPukULUEge0cMFcD75b8iHXP7I3wASdaJuC6UegloY%2FBVKX5CYIeBEic8v%2BvI3c7%2FXChA78M0ge7We5G3uZqlGFU%2FdKOb9B9HpCdMDFKX7zpiY9lXLg6B4zOFWOCrfrY7xDR1%2Ba6surlS53rfkmtLNogD4UAnPMrJFYXpfVXI6N30%2FZNjFySeEjHfHcn6GWXyXcZAcPgngrgwxlS7FlqfYbASISoPr6MGxgwntQG1GspmROcWtVa5BFHyJcy3Gea68g66baAVajK4z8k9GoG2iR1oNiT%2FaWpqaupAr%2FOhBKrHCYPBxp%2FEZTG0pHzYBt30%2BanRcDxUkHKqutpDZJiEoX0X2GqLIWmbn3g1mBr%2FmDWkPvqxo3%2FQsn8VVkJEZXv%2BrKyHHN0k1a%2FLwZDebmNhjRqv7mQ0bBQtuQl23NwC9%2BBEt8OIXocdqw72Wbc5nmCjGKEvGONMkKkpj96dpDoNd15hATTRWIKl2IibMH3HZPJlq%2F%2B4BDMMMG8jMAGOqUBrALnE2GClZzvPJAvrkOFPHYRVB3WhPe6IVHc0kgOzIXxJiLE8hM13bX%2BI%2BUCEgPMQNFbXezWV%2Be8%2FJmhScQznPOnIa0jZCoA5WWbTLdaVykDaqoqP6XgYdBSAHl7%2B2jvNr%2BPw5Ux0z3sqLktdGnSPFcimxQcCjWG6DpS9DSdgkcMcqMU9RqDqinG19sMORHbQf%2BrIVRDjBjaS9OKAjQnAaNsh17l&X-Amz-Signature=f8abc9443124d9c65f76b89b90ebf760902eaef78d0bae0992ac06aee92e7d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
