---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BE52PI%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFKjtuIMBHB5hAdlREhEio3vZgGKPRYybhmnpdP32IFAIgXeNVQwPAG%2Buk8fft9psBuE7PoLrQCoJMTp%2F31QhammQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwzOMte5CRN05M6AircA4Kox84fZo7oUx%2BbUF%2BXbXZIMko1sq0Vzj0OnrHp5EvtKkdkHgKecoIvEmnfQ1%2BoOsq6HTUnXF6HU1BMjSkv1KBAlCUBIaZC%2Bw38C81vghvVN%2Bv%2FQKt7HzgUWdRYeWGJ%2FnJitDVFAnDnps5IcnqmIQ8yvnWHdeVdb%2Fd9gaw2VrCn9yDbdvZpbokeYioeSkvChqYeKk6v%2BKG7pkBWbXO%2FduF26wwedgeGuGK0zReBeY1MXcl54p7ukuMrBT47muGSI3cB8ds6jdIx0oJIWINMkZs1qwFseEpw%2F8sjt3IZLUfwoOrBiQ%2Bc%2By%2FnoVbLshUzLi1VLGeUJ0CrzpX%2FwnXVBtJ8A8bJrTcsC2%2Bcokfr5DKDIRZQicvw2%2BlFTwcxbn9TPPX7axc0cZd1TMlUkQ%2FvoT4odgE6qtW%2FaiBHqIfoGKfbjS4N2jZQEs7JSAGTGkoZGnyjXnCGyD3Cs2xOesA25NJylXFgZwJ3QrWlUtdahbiZ05DDW4aCgxmXj2RMH8vjXki0trZsY8oRB2gDZD3AhBfQmQVg5PrheDx3JjG3mwaxXJR35klzh6zNjTfsP64omz%2FOnISkQNDZ1AkWglQ5Dpvzaid%2FqW3XIWw7JcmXcb83eQBP73nJ7jtDmy%2BNMLyggtIGOqUBMRfQ2Qf386bJVOj0rmCEcdhl%2BCzJ5fZzJdgXFo4Lg9TlbqjSNZPNbMB2RaPzjsqAeVK2tOHD3AGR9yu1HDIgp%2FGkry4BrJuUpdmDsnAe%2BBU3hHvKev9GoPLwZk8YYd9pcDouVdJ8akWrOP954Qt6e%2BXAddp9b2KTTfXKoRG2xTV8%2B4NRROqvgWdsWpD4vfXWCJoSqDZFlfstcVD8NO3JhXMyTLWU&X-Amz-Signature=2f5229e222b31d0cd71556a34e2922740b9789581f1894b7e6cf8443b528b2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BE52PI%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFKjtuIMBHB5hAdlREhEio3vZgGKPRYybhmnpdP32IFAIgXeNVQwPAG%2Buk8fft9psBuE7PoLrQCoJMTp%2F31QhammQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwzOMte5CRN05M6AircA4Kox84fZo7oUx%2BbUF%2BXbXZIMko1sq0Vzj0OnrHp5EvtKkdkHgKecoIvEmnfQ1%2BoOsq6HTUnXF6HU1BMjSkv1KBAlCUBIaZC%2Bw38C81vghvVN%2Bv%2FQKt7HzgUWdRYeWGJ%2FnJitDVFAnDnps5IcnqmIQ8yvnWHdeVdb%2Fd9gaw2VrCn9yDbdvZpbokeYioeSkvChqYeKk6v%2BKG7pkBWbXO%2FduF26wwedgeGuGK0zReBeY1MXcl54p7ukuMrBT47muGSI3cB8ds6jdIx0oJIWINMkZs1qwFseEpw%2F8sjt3IZLUfwoOrBiQ%2Bc%2By%2FnoVbLshUzLi1VLGeUJ0CrzpX%2FwnXVBtJ8A8bJrTcsC2%2Bcokfr5DKDIRZQicvw2%2BlFTwcxbn9TPPX7axc0cZd1TMlUkQ%2FvoT4odgE6qtW%2FaiBHqIfoGKfbjS4N2jZQEs7JSAGTGkoZGnyjXnCGyD3Cs2xOesA25NJylXFgZwJ3QrWlUtdahbiZ05DDW4aCgxmXj2RMH8vjXki0trZsY8oRB2gDZD3AhBfQmQVg5PrheDx3JjG3mwaxXJR35klzh6zNjTfsP64omz%2FOnISkQNDZ1AkWglQ5Dpvzaid%2FqW3XIWw7JcmXcb83eQBP73nJ7jtDmy%2BNMLyggtIGOqUBMRfQ2Qf386bJVOj0rmCEcdhl%2BCzJ5fZzJdgXFo4Lg9TlbqjSNZPNbMB2RaPzjsqAeVK2tOHD3AGR9yu1HDIgp%2FGkry4BrJuUpdmDsnAe%2BBU3hHvKev9GoPLwZk8YYd9pcDouVdJ8akWrOP954Qt6e%2BXAddp9b2KTTfXKoRG2xTV8%2B4NRROqvgWdsWpD4vfXWCJoSqDZFlfstcVD8NO3JhXMyTLWU&X-Amz-Signature=4ab1351633147dbc95563ebd6aad958ee7adf1b9677326153c50dcbafa47be63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BE52PI%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFKjtuIMBHB5hAdlREhEio3vZgGKPRYybhmnpdP32IFAIgXeNVQwPAG%2Buk8fft9psBuE7PoLrQCoJMTp%2F31QhammQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwzOMte5CRN05M6AircA4Kox84fZo7oUx%2BbUF%2BXbXZIMko1sq0Vzj0OnrHp5EvtKkdkHgKecoIvEmnfQ1%2BoOsq6HTUnXF6HU1BMjSkv1KBAlCUBIaZC%2Bw38C81vghvVN%2Bv%2FQKt7HzgUWdRYeWGJ%2FnJitDVFAnDnps5IcnqmIQ8yvnWHdeVdb%2Fd9gaw2VrCn9yDbdvZpbokeYioeSkvChqYeKk6v%2BKG7pkBWbXO%2FduF26wwedgeGuGK0zReBeY1MXcl54p7ukuMrBT47muGSI3cB8ds6jdIx0oJIWINMkZs1qwFseEpw%2F8sjt3IZLUfwoOrBiQ%2Bc%2By%2FnoVbLshUzLi1VLGeUJ0CrzpX%2FwnXVBtJ8A8bJrTcsC2%2Bcokfr5DKDIRZQicvw2%2BlFTwcxbn9TPPX7axc0cZd1TMlUkQ%2FvoT4odgE6qtW%2FaiBHqIfoGKfbjS4N2jZQEs7JSAGTGkoZGnyjXnCGyD3Cs2xOesA25NJylXFgZwJ3QrWlUtdahbiZ05DDW4aCgxmXj2RMH8vjXki0trZsY8oRB2gDZD3AhBfQmQVg5PrheDx3JjG3mwaxXJR35klzh6zNjTfsP64omz%2FOnISkQNDZ1AkWglQ5Dpvzaid%2FqW3XIWw7JcmXcb83eQBP73nJ7jtDmy%2BNMLyggtIGOqUBMRfQ2Qf386bJVOj0rmCEcdhl%2BCzJ5fZzJdgXFo4Lg9TlbqjSNZPNbMB2RaPzjsqAeVK2tOHD3AGR9yu1HDIgp%2FGkry4BrJuUpdmDsnAe%2BBU3hHvKev9GoPLwZk8YYd9pcDouVdJ8akWrOP954Qt6e%2BXAddp9b2KTTfXKoRG2xTV8%2B4NRROqvgWdsWpD4vfXWCJoSqDZFlfstcVD8NO3JhXMyTLWU&X-Amz-Signature=6566aad43af5d79a31676a2036f98f23ce6b780372282ab5195675ad7307cd2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VK2OUZI%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgxERO2edYW66huUBrXd9enxJ6%2BCn9%2FZ75s39CbjBNTAiEA%2Fh3JbV1FBZ3T77mpunmCeD12BxzCAcYE4ZgEMAjgSAcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbSBw8kgbZgAzwChyrcA5PLSmzpijgR9LXs9Pqe5tzTZy2r9NwTUCqMcRw1Holcw%2FA%2BtgXqoOGb%2B5pNwgqVFTqs7LWGLQot2WlO3Kv9Az%2F3bkR%2BlYqrpoB2tBOz1OwUZfcCr%2FPcaR0Vin9klmpB7nexRBlCtpGleooDkebWlndK8AYNgQsh8LSw1GYrwQPNkofrSDrr1roX6mfiBXH8QmuPMeoEzC%2BdsJFlhMGzipBnDhpOD%2FZq9CEsbRjQFC%2Blz%2BGkj11NHgp3ZmbG1OBRwQicJ4GsZRb%2BGnD5fr06KRjBlkqf8HNPebLDKdhQP24K5TuDcz1OCKDuvcsXqRsn1aWPbxMz4gB7IFpiQ9VrVeFO2LVDqIcVffFQYeGeq%2FBe8F2LJvZKZkoJ%2Bt6nAH9I9DnHsEDCRMaliykFQ5L%2BM30OAuuGA67dV5r00FrLGIRe2qweXLkUYMP4jLnuFNfZCjadC7EDAR2ueLE%2B8W%2BcrKyc1pqXx5Pvs2lJPT7B9FYtw55O8pttEe2GUu0jV5TIIsb%2FTjvrXkM93mePulyG2c6p3b%2B5cn%2FTSHYPOKRfXsvDxg5rdQAczeEe1WHlr7zoqisw069pf4%2F1Q71EVgcL521p2tV4lbVgNJwgXRgYodAlETl6DSbh292r6WEOMN6ggtIGOqUBL8tD2Tw9pM%2FZZZT5ojWQZTiv0KPZ7W%2BB9ET7XV9WqPuA5TpgL636TkcnSSoyj8aZeA4yme8hvaiGGfclZZrBzCDDlXxsGYtg4kaZuAzmoPQ6n5SeVrFNWoiwjp5WnoLVAu5ur47VFFJ%2Fvtqc643sKxppnyIaa43LXmFG64CNacqpjjTXyaeip%2BCnvE6nzgx85GkVA0cf%2BXKVu4Ai%2FvnUf3C1OHv6&X-Amz-Signature=12c4bac9bd7406b88381fd2d3517a2cd2952c25236b9032b7e51781a7f781710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJEGTDRW%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfwWihunWN1nJnkup9FfwGgZyQ0Qs6SOD5w%2F3zSnTuPAiEAt0clTlsMhzu9YKsacBhpW4W25dLNwSVA3eop0EJdtx0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr7Kw7hiGPVyTsMkCrcA8tbAjxGE6jnazCM%2FTs6bxawkErniE6x%2BDU8kCrLtBTT3K37xJcDThWCJWmVKBAIAX5zgKVKJuJTPJ9s3ooV7M4R9D21tiHJTMEt9pvH8RReJUvN2lYpHb5%2BzTPlMLv6Y8bD%2FaKFxCM5BXNBi8naUbo60PWXzGqhQxR9cYJvzDs1fKjIkM6%2Fn7ZzGhw79WLQo0j7rJcFuBZlgtXjmEIR4Jy9qAiRK9SQwrDPXPdnHsrrIiyzdZOaMiG6U996abJKnvRYfnTgD9BHw428T0ssvJxkEfNfrfaEcbdAe2BZ6G5T6BxzirFawwN23WaP6TqiPkiOeKZrHCGdOfL7rlkIM38bC5axbDgcOioVAJKhzJGbM39CRCYOeJYECetLou41%2BA2AhvZunprWczZrdybSFEbG%2B63533BDvKqmYiwWz%2B3nnId%2FssHgiui3o%2FKVf7hG%2FtH2jpoQMcvnWybPQoTBUK4vhM2wEvDoKyPZL1lKmrHPerZZFajNFCaQUCWA8zyL3aAI8fz%2FXYP8hdY8u9akdTW44zstQftX4kov0gsy%2Bfp07r9D%2BVkvYLWGcWdLxa8E7FlrmvMQ7k%2FGpwyP905q0vEZLjf0AkzdIsu6ypa4I0cCy16U2HeCDi02aGBQMPCegtIGOqUB2q4yHomn%2F3S1xwsLrm9rlerXcsGuKXEoLWcfHCzFEbBSBBfc5FkGIg4JIPTe6vB8wzK3Ljv6xZjxH3in6OHqhwzLouXq9J5JPuLfa8pFIheMTktV0BzLd9TvN4wAivFB%2FPcLKgvb%2FJjaGOnJXlCbV7X6km2LyUCGnXKv874APC4Hh9TH%2FoYSbl9ZED1WKQ80Y6Otcc3p0t5SQidH0rZvzr4BNo0j&X-Amz-Signature=1857bdca5bc338baeda33378989c913fc8d188b10dbb8a7275c4c6e6699a6776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BE52PI%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFKjtuIMBHB5hAdlREhEio3vZgGKPRYybhmnpdP32IFAIgXeNVQwPAG%2Buk8fft9psBuE7PoLrQCoJMTp%2F31QhammQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwzOMte5CRN05M6AircA4Kox84fZo7oUx%2BbUF%2BXbXZIMko1sq0Vzj0OnrHp5EvtKkdkHgKecoIvEmnfQ1%2BoOsq6HTUnXF6HU1BMjSkv1KBAlCUBIaZC%2Bw38C81vghvVN%2Bv%2FQKt7HzgUWdRYeWGJ%2FnJitDVFAnDnps5IcnqmIQ8yvnWHdeVdb%2Fd9gaw2VrCn9yDbdvZpbokeYioeSkvChqYeKk6v%2BKG7pkBWbXO%2FduF26wwedgeGuGK0zReBeY1MXcl54p7ukuMrBT47muGSI3cB8ds6jdIx0oJIWINMkZs1qwFseEpw%2F8sjt3IZLUfwoOrBiQ%2Bc%2By%2FnoVbLshUzLi1VLGeUJ0CrzpX%2FwnXVBtJ8A8bJrTcsC2%2Bcokfr5DKDIRZQicvw2%2BlFTwcxbn9TPPX7axc0cZd1TMlUkQ%2FvoT4odgE6qtW%2FaiBHqIfoGKfbjS4N2jZQEs7JSAGTGkoZGnyjXnCGyD3Cs2xOesA25NJylXFgZwJ3QrWlUtdahbiZ05DDW4aCgxmXj2RMH8vjXki0trZsY8oRB2gDZD3AhBfQmQVg5PrheDx3JjG3mwaxXJR35klzh6zNjTfsP64omz%2FOnISkQNDZ1AkWglQ5Dpvzaid%2FqW3XIWw7JcmXcb83eQBP73nJ7jtDmy%2BNMLyggtIGOqUBMRfQ2Qf386bJVOj0rmCEcdhl%2BCzJ5fZzJdgXFo4Lg9TlbqjSNZPNbMB2RaPzjsqAeVK2tOHD3AGR9yu1HDIgp%2FGkry4BrJuUpdmDsnAe%2BBU3hHvKev9GoPLwZk8YYd9pcDouVdJ8akWrOP954Qt6e%2BXAddp9b2KTTfXKoRG2xTV8%2B4NRROqvgWdsWpD4vfXWCJoSqDZFlfstcVD8NO3JhXMyTLWU&X-Amz-Signature=c38d622c420bdb0747ce23db5156f17d7555d85d4327e18fbbc53b604130b0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
