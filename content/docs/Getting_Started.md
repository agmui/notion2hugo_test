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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256I7NJ4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAc23TPrF8Cvpws3Lmkj%2BmHIw9oBn7S8PnluOaECcAQIgIX0K9MOwtCFYYBZUwITp%2BWVF0V7fRtkntmj8BU8XzyEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLHpgtwchNLQETQ2PCrcA%2FRiyKJ5Zr35x1QkUJHC%2FkiYNmcZ0fhtsOsDZNijRLuawByoIxcEowzIT7WN4XnmPxh4rLq5%2F2FCygTPmXD4TSQFzcK9UiDfrCNNlzVXANCzkKsuuCO18BQntr4p1I2FMTLFnqt6OR2s41qLWVWAMR5ktPuz1pYbV%2F91eVIOHSQsekv5yrG1lddJxD4uXxqCKVv7GVrMLIlnv3FroSwZsvJ7n5cuuoWBUgt%2BrrnbPfFhCclVNqAzk87Ff6orcCwv2gevzf1kEtKNno%2BHc96o7AUDrVjmaxgZWeQbXfrkcQkmPXBacma7UNpE0hW09ggy30%2FrN2Bi6RqY9NlDBQJFnU3rLWBpBARvN%2FiO7Vq5eCf4S3tjlH4OuAGh6KRtXc6XRXpwCcRlfs%2BpA9HEAr%2FrHfDzZRCtol6N9U%2Bs2eGFtLLxHLU3VIOqmlbFu7bAW3eIzgSQmZ7Krek613nmvDTwgxdhFCSXxPl86kluGsm9W0%2BS9XwpDHfrJSnzXQnSl0SMedmaUZlmPyZUBWP3tQtIVWekJYHvceg86K4MTeO28fA5llJMTnYrVauf2TQD1JHx6Yq%2Bh9SSUS9OrtNxI%2FQ5JWW%2FC%2FlMjhZUdcAR0fFwkDmtSM7bFmi4Kp%2Fb%2FbukMPq47sAGOqUBjDONdvHoaJJxFfEPwfeIogK12PXST16zWfqWDHTiBwUZ0MPxGu0GlJTCmAjvBII69VzsQDHyEccimOs6vpU3n6T5%2BQX2cW4vigG61mNT9LTjLYkdsUT6d0Dz%2FiRl1mSUe3zdpnRsKkGUzhiaAz9maQlFiO39G35smI%2Flw%2Fx%2Fkhegee6s%2Flc3IvhOhsihNtCcxWKLe%2Fo%2F0JJrwjfuWAWoQcfXIF7L&X-Amz-Signature=c903de85333f637c28589b9bb3267f3c60de1de2a7c6571f8c0f6ddaa64d6126&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256I7NJ4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAc23TPrF8Cvpws3Lmkj%2BmHIw9oBn7S8PnluOaECcAQIgIX0K9MOwtCFYYBZUwITp%2BWVF0V7fRtkntmj8BU8XzyEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLHpgtwchNLQETQ2PCrcA%2FRiyKJ5Zr35x1QkUJHC%2FkiYNmcZ0fhtsOsDZNijRLuawByoIxcEowzIT7WN4XnmPxh4rLq5%2F2FCygTPmXD4TSQFzcK9UiDfrCNNlzVXANCzkKsuuCO18BQntr4p1I2FMTLFnqt6OR2s41qLWVWAMR5ktPuz1pYbV%2F91eVIOHSQsekv5yrG1lddJxD4uXxqCKVv7GVrMLIlnv3FroSwZsvJ7n5cuuoWBUgt%2BrrnbPfFhCclVNqAzk87Ff6orcCwv2gevzf1kEtKNno%2BHc96o7AUDrVjmaxgZWeQbXfrkcQkmPXBacma7UNpE0hW09ggy30%2FrN2Bi6RqY9NlDBQJFnU3rLWBpBARvN%2FiO7Vq5eCf4S3tjlH4OuAGh6KRtXc6XRXpwCcRlfs%2BpA9HEAr%2FrHfDzZRCtol6N9U%2Bs2eGFtLLxHLU3VIOqmlbFu7bAW3eIzgSQmZ7Krek613nmvDTwgxdhFCSXxPl86kluGsm9W0%2BS9XwpDHfrJSnzXQnSl0SMedmaUZlmPyZUBWP3tQtIVWekJYHvceg86K4MTeO28fA5llJMTnYrVauf2TQD1JHx6Yq%2Bh9SSUS9OrtNxI%2FQ5JWW%2FC%2FlMjhZUdcAR0fFwkDmtSM7bFmi4Kp%2Fb%2FbukMPq47sAGOqUBjDONdvHoaJJxFfEPwfeIogK12PXST16zWfqWDHTiBwUZ0MPxGu0GlJTCmAjvBII69VzsQDHyEccimOs6vpU3n6T5%2BQX2cW4vigG61mNT9LTjLYkdsUT6d0Dz%2FiRl1mSUe3zdpnRsKkGUzhiaAz9maQlFiO39G35smI%2Flw%2Fx%2Fkhegee6s%2Flc3IvhOhsihNtCcxWKLe%2Fo%2F0JJrwjfuWAWoQcfXIF7L&X-Amz-Signature=9231e16163f25fab91022ce029fbf3262ea31468211f36ad46fc3c9320be5f63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256I7NJ4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAc23TPrF8Cvpws3Lmkj%2BmHIw9oBn7S8PnluOaECcAQIgIX0K9MOwtCFYYBZUwITp%2BWVF0V7fRtkntmj8BU8XzyEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLHpgtwchNLQETQ2PCrcA%2FRiyKJ5Zr35x1QkUJHC%2FkiYNmcZ0fhtsOsDZNijRLuawByoIxcEowzIT7WN4XnmPxh4rLq5%2F2FCygTPmXD4TSQFzcK9UiDfrCNNlzVXANCzkKsuuCO18BQntr4p1I2FMTLFnqt6OR2s41qLWVWAMR5ktPuz1pYbV%2F91eVIOHSQsekv5yrG1lddJxD4uXxqCKVv7GVrMLIlnv3FroSwZsvJ7n5cuuoWBUgt%2BrrnbPfFhCclVNqAzk87Ff6orcCwv2gevzf1kEtKNno%2BHc96o7AUDrVjmaxgZWeQbXfrkcQkmPXBacma7UNpE0hW09ggy30%2FrN2Bi6RqY9NlDBQJFnU3rLWBpBARvN%2FiO7Vq5eCf4S3tjlH4OuAGh6KRtXc6XRXpwCcRlfs%2BpA9HEAr%2FrHfDzZRCtol6N9U%2Bs2eGFtLLxHLU3VIOqmlbFu7bAW3eIzgSQmZ7Krek613nmvDTwgxdhFCSXxPl86kluGsm9W0%2BS9XwpDHfrJSnzXQnSl0SMedmaUZlmPyZUBWP3tQtIVWekJYHvceg86K4MTeO28fA5llJMTnYrVauf2TQD1JHx6Yq%2Bh9SSUS9OrtNxI%2FQ5JWW%2FC%2FlMjhZUdcAR0fFwkDmtSM7bFmi4Kp%2Fb%2FbukMPq47sAGOqUBjDONdvHoaJJxFfEPwfeIogK12PXST16zWfqWDHTiBwUZ0MPxGu0GlJTCmAjvBII69VzsQDHyEccimOs6vpU3n6T5%2BQX2cW4vigG61mNT9LTjLYkdsUT6d0Dz%2FiRl1mSUe3zdpnRsKkGUzhiaAz9maQlFiO39G35smI%2Flw%2Fx%2Fkhegee6s%2Flc3IvhOhsihNtCcxWKLe%2Fo%2F0JJrwjfuWAWoQcfXIF7L&X-Amz-Signature=29d4a662a49956adbc379afa7166a84323ae6f66c0fb54bb984ff7acb83e3973&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A47PJNQ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWOZnd0%2Be7qQvm8zQDqbDejw%2FpTBM39GG20aEnh0s62AiBVCdghHuE%2Fs65AoFL5gQ%2BIl%2BHoQ%2BFqzgcXUrOn%2FomJKCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMlml5K6NRFCSJfVirKtwDeAuTg3XZStATmmGq%2FrqU5oDF4U07okh2ds3RwfmMnynGfkwYBfoyf3jvJy7JrzO4GO8bZG5dzsdewUIdsYj%2B0d7RukW%2FC5ikOZmZq2qApOB9IJbiNyqTukT1pvkJKvx%2FNuaGSNW9r2OGwuYk7hLT0eE777VYDnr8DCc3rPfHC7qwnQrTe1IZdDjP6%2F9PqombOluwqZMJ4FJEIwScecpeScGdWE0V5sbcmaXJz%2FZ6sOd0fG5CFjmfMEcvEWY%2BZQfypN9RXjkkK1YgoRD5U4CWnbECN%2BhTUDssq6Nrgats7dLm4TArEZrdnjKZ1pS%2BTb5HfU2BneKdeGM6e46Yv%2FycrFDvjNffdBGtCXjVfQHm9swhi%2FO4V3%2FNoC%2FbCXupxKzFS7d%2Fp2e6J%2FhETBc191ASKQrrCwfZZyjVqY1sZeWZYW77ztuK4PTvRmk1eekxVHW3%2BxsnkLv%2BOdLS3YZjQTO1R068IwH05nI7UJG6SlcE%2BueEZBwRXC6dgYro4hocXi9uPeIUJ0drbmiejXVHWayEXpjPtZjogLkWfRdVvKxkCGTpdByatK06eRzRBnZ%2FXY3V4%2FgcMPgUU6xk3Wt%2Bd9lGW7424%2BmfspE91uiOsiXaM8krByCBFAUQW%2BNeBPkwwLnuwAY6pgEXgpILeXcZPLrjKfV7p34vw%2BPf4NhJkILiuB43OnDxqvuAPKQJF8erneCEwGWRJJFajaHitzc0JSpF3FEQcMeKr6KyGndLgnNrijk6F0sZ%2F5s8Anxr06lDr70swu4UfRkEMBec9sEnqOdRcIxy5kBnRMAt76KsUPa0Pnxj0jhFdwFY%2Bq%2BjZ3wrbfwxOG9mrE07jWxK1ZyqikJsBRAVFihrA3v80tpq&X-Amz-Signature=9b32e1b07b6f8313ab4b3b5f4ca11514c74d28f63f07cef1d55a084c2611946d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALSWCDH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrMVyNYxlModC1RrtDd%2BkKspiLmORiOsu7CeHmuV%2BYwIgBXUYU1AGBEztCvG%2FiPHPM0czspF6yOZf%2Fl0rTdhtRnsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL63CUAHQs19oWM41yrcA4uAtA1BxdYBWrlV071EaaHsXbGCmjxpyjlYO4yBNbTYSrNbGtchZT%2BucofJEaEpTAUplDiusqae8%2F3NTrlR97jZNQWNo4P3hy3hgSg7w81UfrVN9VFqYcpZ84lOxuNuCWGUJFWDx14xDXZgtG6CuZjPtBJ8bxEpr%2FX%2BGOXGmnImkfvzIjbvbTHrSO7e3QVZ%2FCMHqXTcmKwX%2FWhplwmY5HVigFAQvopzqFHCZ3DrJB5yThnZSNH7un9oWUsEM112yHElRIkz3GjLhOyokzuUmUM5xHpddZUearh1jYgBohBB0uE1LGhXCuL7%2BfckBwj9yl18O47H43BGBLIa6xmQ99CdwIexof8lmcyugpSyNBvvkOm%2Be6vm52DbiNY2HuUxZUpfwv7u%2F6%2BWXGtFbklZ5533yBh2GhgsKC6uRyfinoR0Rg%2Fm74MtBeV0A1m78LeTT3hRxEvSpBy%2Fu72vn2pBF1vlQqi%2BePRo76H6VVCZ1kyg78%2B3y%2BR24sb8IxKFqnhe8A0gxK8ZBgvcHyB542MNWfnk1bV1WS6T%2FmKW4RKSSLeKKWJk8p3b%2FQixzq9UQM%2BkcrQqCp%2BSE6aay0CmlsrKpEPeQ3cbTXBEu5oHIDmbbbZ7I2y9qCO8SA1%2BSJc8MIe57sAGOqUBhNWiyeVikVaA2OXEttGgjhmUiTCpzg9paPRpC9kZ%2B1ct5Wf%2FWALpOY1dOGUoANkEDn2JBiI1DeoaJ0yyS%2BWQ7sDTYvlyT4TBiAMyGU7ub%2F2JXdzyknBoCaWEoLhl7d7lOXX7eyMM29kjcdfl%2FBOZ1NPTrsHqGhDaMKeohL2TggRppjFiTfcXIgpBhVSkE8qA8T%2B6AQes4hORXkkdxewRNvYtx%2Bvb&X-Amz-Signature=aa64ca1597188960712dead3141218fa620545de4138c7740043ebc82a6e67ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466256I7NJ4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAc23TPrF8Cvpws3Lmkj%2BmHIw9oBn7S8PnluOaECcAQIgIX0K9MOwtCFYYBZUwITp%2BWVF0V7fRtkntmj8BU8XzyEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLHpgtwchNLQETQ2PCrcA%2FRiyKJ5Zr35x1QkUJHC%2FkiYNmcZ0fhtsOsDZNijRLuawByoIxcEowzIT7WN4XnmPxh4rLq5%2F2FCygTPmXD4TSQFzcK9UiDfrCNNlzVXANCzkKsuuCO18BQntr4p1I2FMTLFnqt6OR2s41qLWVWAMR5ktPuz1pYbV%2F91eVIOHSQsekv5yrG1lddJxD4uXxqCKVv7GVrMLIlnv3FroSwZsvJ7n5cuuoWBUgt%2BrrnbPfFhCclVNqAzk87Ff6orcCwv2gevzf1kEtKNno%2BHc96o7AUDrVjmaxgZWeQbXfrkcQkmPXBacma7UNpE0hW09ggy30%2FrN2Bi6RqY9NlDBQJFnU3rLWBpBARvN%2FiO7Vq5eCf4S3tjlH4OuAGh6KRtXc6XRXpwCcRlfs%2BpA9HEAr%2FrHfDzZRCtol6N9U%2Bs2eGFtLLxHLU3VIOqmlbFu7bAW3eIzgSQmZ7Krek613nmvDTwgxdhFCSXxPl86kluGsm9W0%2BS9XwpDHfrJSnzXQnSl0SMedmaUZlmPyZUBWP3tQtIVWekJYHvceg86K4MTeO28fA5llJMTnYrVauf2TQD1JHx6Yq%2Bh9SSUS9OrtNxI%2FQ5JWW%2FC%2FlMjhZUdcAR0fFwkDmtSM7bFmi4Kp%2Fb%2FbukMPq47sAGOqUBjDONdvHoaJJxFfEPwfeIogK12PXST16zWfqWDHTiBwUZ0MPxGu0GlJTCmAjvBII69VzsQDHyEccimOs6vpU3n6T5%2BQX2cW4vigG61mNT9LTjLYkdsUT6d0Dz%2FiRl1mSUe3zdpnRsKkGUzhiaAz9maQlFiO39G35smI%2Flw%2Fx%2Fkhegee6s%2Flc3IvhOhsihNtCcxWKLe%2Fo%2F0JJrwjfuWAWoQcfXIF7L&X-Amz-Signature=857f35f9214f5b3ccf38a375a9283493c8370b50644d3fabeb478444a9b45ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
