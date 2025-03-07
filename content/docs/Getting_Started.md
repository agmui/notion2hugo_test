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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7EPO5P%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDELhOXuD8kDfatV2Fx57XV%2BSUL59We6eeGcAxgsO7W3gIgey1XzPBhgtcRylw2u%2FgKu3NQY1KKjaAhWlhigdJhHzoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLo0y5lHapElGoYABSrcA6JB6vhLop36MTPg%2FfyJqHe7eVCRlh4VePD%2F2UVM6f86C6uveusxVQWEZk9FczB2vMoUa8x%2BcL%2B1puXkDqyXXoPseszz04bOHXh0eXDUDK%2BpFw%2BX7rDuFGu8nFBqAI%2Fqz1JNUVAbPzYgItqcnH5IneKzfr0bbd1e9%2BfGcSwz9Lv8KGUoLecNutXzr7O5d3MrhMS9wHDX42uWADi3lEW9k1MUW%2FX%2Bll2AQVeD%2BbpRevSG5jRKSGGjyrgtO03g8YkkopxDjxvQPw4Wt3UwpX8PcWOIH7t9N8X0ZQxLDFqUnP%2FM1utAoatO5yI%2B4ckBicoSUdefVv7hj8tkxZ9a1TAF7y8FRS2JT1tgHA80pFkuF16vFaM4hSd4VbXicvqjvAlkbW8c6FcIH9v3ti4iC25HJrf4lEdVU4qGAx%2BrXev7khmRw9tNYhrmkOI32cN78I1Zi6HxLUsetlswg1UPc2tMjVbAa%2F4%2BrHFAxmhUI79IMPflaTGzg6XSslzVC2UcAFFRoQBQNHrIo4RuR0wAMam70pqdh5hN99KS6k8DgnhBAw3ZYR5C8dzYI0IZ6JSXrp1Pu4AqzSLEOufFqwhEV4CXvjC8YSOCIGywg2SxM3UmueCtnS8Mv%2BOnO844jxexMK6Hqr4GOqUBCnPL7KYjAeQOhS9nlTPIoNmKrzh715Ci%2BGYGgtY5hG%2F2hVcVayhY3I3ZewDk8XwXXypdM1AEcvVj7%2F%2F76msN6iWHmqHMo%2F3sfMB40TvAaXPS56GPpnV3EFTTkXN6%2FgK6prQf8ubOKLO7zHkcTPqKvaNSLBl1EvBJ5ufAssWFb5KwBe6OjtCDnzstoB9rEAwS59m8%2ByibWayDBjYfymD%2FFUAn%2BNY5&X-Amz-Signature=a6f1ba9c5ec86d55978575b63c2823a10ae31031fd0d4b06214a58185e5c4ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7EPO5P%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDELhOXuD8kDfatV2Fx57XV%2BSUL59We6eeGcAxgsO7W3gIgey1XzPBhgtcRylw2u%2FgKu3NQY1KKjaAhWlhigdJhHzoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLo0y5lHapElGoYABSrcA6JB6vhLop36MTPg%2FfyJqHe7eVCRlh4VePD%2F2UVM6f86C6uveusxVQWEZk9FczB2vMoUa8x%2BcL%2B1puXkDqyXXoPseszz04bOHXh0eXDUDK%2BpFw%2BX7rDuFGu8nFBqAI%2Fqz1JNUVAbPzYgItqcnH5IneKzfr0bbd1e9%2BfGcSwz9Lv8KGUoLecNutXzr7O5d3MrhMS9wHDX42uWADi3lEW9k1MUW%2FX%2Bll2AQVeD%2BbpRevSG5jRKSGGjyrgtO03g8YkkopxDjxvQPw4Wt3UwpX8PcWOIH7t9N8X0ZQxLDFqUnP%2FM1utAoatO5yI%2B4ckBicoSUdefVv7hj8tkxZ9a1TAF7y8FRS2JT1tgHA80pFkuF16vFaM4hSd4VbXicvqjvAlkbW8c6FcIH9v3ti4iC25HJrf4lEdVU4qGAx%2BrXev7khmRw9tNYhrmkOI32cN78I1Zi6HxLUsetlswg1UPc2tMjVbAa%2F4%2BrHFAxmhUI79IMPflaTGzg6XSslzVC2UcAFFRoQBQNHrIo4RuR0wAMam70pqdh5hN99KS6k8DgnhBAw3ZYR5C8dzYI0IZ6JSXrp1Pu4AqzSLEOufFqwhEV4CXvjC8YSOCIGywg2SxM3UmueCtnS8Mv%2BOnO844jxexMK6Hqr4GOqUBCnPL7KYjAeQOhS9nlTPIoNmKrzh715Ci%2BGYGgtY5hG%2F2hVcVayhY3I3ZewDk8XwXXypdM1AEcvVj7%2F%2F76msN6iWHmqHMo%2F3sfMB40TvAaXPS56GPpnV3EFTTkXN6%2FgK6prQf8ubOKLO7zHkcTPqKvaNSLBl1EvBJ5ufAssWFb5KwBe6OjtCDnzstoB9rEAwS59m8%2ByibWayDBjYfymD%2FFUAn%2BNY5&X-Amz-Signature=5689a475a9c9104ed9a3477c97aa2b9ff82a5340c487cc0d4344e23f47752dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKAFTSE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0H1UUw2EsE%2BDM94wNcAdkfxppp52A6UvTTy4pvJbBKAiB2iILCfiOh7UrqYzHrh0G51TPu2eGjXzMerEMMAzKOfCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMwxJ38ZV8944MNr8yKtwDlVGnMCburntlpk6ASczp2osAaF3D2BYQjfQjsvj5wSHvSADSQ3jNxTg%2F99NLyAS9dLZ4Kiu7V2hiYR7RnH6SGWdd0NFWi%2FzjfupIPX%2BgVJnNztNa6VYqB42uXSF2PXPSruU%2Bptbb%2FmLmyHNJXtVGiSyURvsTZv6FlNCPA2Y6vUGYZgV8paLZw44v6di%2FDCSIWkNg6ekOrbMHvFfIFBMwrjx8cYhUYi%2FaixA0tue3A2QQnxWm6cDpLr%2BgDrh7Flw%2FCfc%2B3JNKS0xV61oCUbUxFqXTahYeu49V6aRYsFiq3FLPW0rKoMX94sH8NH3GZgSehmwWFjCZUEcwmFmNfnJZTr04c8J5E%2F%2B4a8ILvmM6xuCqo1m966VVn%2BeDEiovplnLcWl8K%2FkqMZufNAQOsWBl9L7CzHTZ4AyeSDOQRKTaWTi1GrytGbgFi6eggFwlNBz1dZqsLKUy4C%2FfvJuoLq05%2FlMAtu9%2Fixxy9CEub6qPBndyioU1S%2B6i9T8BnjVZMQRY9TnOnUAWcIxfeQyDSGFwngc2Rzoc89zjXYUWvAxUOH1Nn51uKjXTQBDiIeHvi3xl5lLcD8jgxyHgFUr3SUL7Fk0On%2FkJigBiRixUrmQbPdsJUbme8fs7W6A98rIwoYeqvgY6pgE2AKzfDKYux6BW57HlyiEvDoPm4iXWwL2w4tJCZOkr8bTTUQGAb1taVovqoijcmYhsCl4VxuxWoXtnaAvg85ephJQRrLmSEouAqY%2B5uVhoONlBsnu%2Fe%2FgzwG4Penf1m55deQbSdbIGT9UY3qOUGwiA8ak0ZqpvZyEnMZhcv9mTPSch6SInR0Rs%2BdJPj4ZWX%2BD0EQzLnXXAggPNkvr3TO%2BOXTbPDWjm&X-Amz-Signature=ca2299e0d47326295461dde22231f60c02fc78fe9b16b952ea9a9d215bd08e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBWROP2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByypHk%2FWBsOcgZB8TkyHSEnUWGvMdME1jq2PIz7d0ofAiBRp%2BHNY%2BO0yZs8566%2FjIDT4%2BROJgung%2FXrLpxQnJ2y3Cr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMB%2FU9uEPXboIdQRJxKtwDng6gbouP4vx%2F2Z9oUCutydcWPrNyZNaFieG%2Fs1xMHYhQhzhtuGR64y18BP1Ijd2eAsknyHYqEzZtO519NqRXkbfvG5Y0ThHM5F2xedlZIs4G4amzX7HGaZXGZwoHMwMg%2BMzHQ97tpl%2B2gQVF5UFTXAKaoWjFsoM3mhgfhNtH0%2BJvX673OqxKBxJ8PCSf%2Fb9o%2BfX2HnR7NzuePJEFGEtAVhgt6UOcsEWKZ6MENDGhvym4lXSJ5iPnUGMPPtoTq4PTB1QmIdSuYKE81b8MGnEkrkiDjIZtfUDBVVLgrgrtmKGKtHm4FGfH2fe7IhQPlhalmc7niquBy9eRGOQDH8Imn2gN0AMEETYPw%2BPSsPi%2FTsgBEHG6ELdakJfNXRqNZvky6V%2Bolj7aTOuByW5HIzjs%2FG7aaeo9r1z4oHjd47FMRB3vWNO2WHeO2sf2x8Ye7Tln89r1sIV%2F0YXEgJn9rOpszKEnIqsTbBskDmdRwSLv7RVOpyKtneN33uwHJVLWfUqzILLAs7d%2FSyC%2BnGwvzPUhCLfCd49RSLOJP9Kaq%2FypqRDDIoGDSVHyU3Nanx3MkpUDrrOZVXdySqQzL4dDOjuucNpaEIkLg1amc1O6AO1nbUfKJIbx8f2QGHoW0BMwsYeqvgY6pgEThUw%2F2Mb2URw556iqhGeKvo5WV7bsRrechHttg3CQShCc7oV%2BRUuCB06cXCaBqKpvzER8I6D52uCjr5oBUC5Y%2FihCit6aTsuJiPHLOGz9mKWHV2NbEQeECbKhZFKpeHzQPNRrV9dmR%2F09%2FXYu46YRhc7pVUEs0L79mRlyQJ4hHtQfc5LutPqxneiltZNxmzgpnUjDmn4joecnSu7DALcdgsRc0AGE&X-Amz-Signature=14b926b3d46cb03239d68def1e665a9d41545b15202eb710f26df8bb31eb7b88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ7EPO5P%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDELhOXuD8kDfatV2Fx57XV%2BSUL59We6eeGcAxgsO7W3gIgey1XzPBhgtcRylw2u%2FgKu3NQY1KKjaAhWlhigdJhHzoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLo0y5lHapElGoYABSrcA6JB6vhLop36MTPg%2FfyJqHe7eVCRlh4VePD%2F2UVM6f86C6uveusxVQWEZk9FczB2vMoUa8x%2BcL%2B1puXkDqyXXoPseszz04bOHXh0eXDUDK%2BpFw%2BX7rDuFGu8nFBqAI%2Fqz1JNUVAbPzYgItqcnH5IneKzfr0bbd1e9%2BfGcSwz9Lv8KGUoLecNutXzr7O5d3MrhMS9wHDX42uWADi3lEW9k1MUW%2FX%2Bll2AQVeD%2BbpRevSG5jRKSGGjyrgtO03g8YkkopxDjxvQPw4Wt3UwpX8PcWOIH7t9N8X0ZQxLDFqUnP%2FM1utAoatO5yI%2B4ckBicoSUdefVv7hj8tkxZ9a1TAF7y8FRS2JT1tgHA80pFkuF16vFaM4hSd4VbXicvqjvAlkbW8c6FcIH9v3ti4iC25HJrf4lEdVU4qGAx%2BrXev7khmRw9tNYhrmkOI32cN78I1Zi6HxLUsetlswg1UPc2tMjVbAa%2F4%2BrHFAxmhUI79IMPflaTGzg6XSslzVC2UcAFFRoQBQNHrIo4RuR0wAMam70pqdh5hN99KS6k8DgnhBAw3ZYR5C8dzYI0IZ6JSXrp1Pu4AqzSLEOufFqwhEV4CXvjC8YSOCIGywg2SxM3UmueCtnS8Mv%2BOnO844jxexMK6Hqr4GOqUBCnPL7KYjAeQOhS9nlTPIoNmKrzh715Ci%2BGYGgtY5hG%2F2hVcVayhY3I3ZewDk8XwXXypdM1AEcvVj7%2F%2F76msN6iWHmqHMo%2F3sfMB40TvAaXPS56GPpnV3EFTTkXN6%2FgK6prQf8ubOKLO7zHkcTPqKvaNSLBl1EvBJ5ufAssWFb5KwBe6OjtCDnzstoB9rEAwS59m8%2ByibWayDBjYfymD%2FFUAn%2BNY5&X-Amz-Signature=3cb5082d6325df0d432ca8c43fbd6ee353019c220f2685cf636797835847bf97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
