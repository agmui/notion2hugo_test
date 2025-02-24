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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OIK55J%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq%2BLSKjC7eWbpzK1oYzIpz8LsOPv8ZGb85adHYuzUuNQIgAWCBwGiEiXGqKaJKQG9o%2BnQ7ik7FooX2qd3CdcVItZAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJpOkUG41QipgmjkJircA6vYnOid%2BkHHygKrASww%2FZtqrrPywc801u%2BkuyLE5SpiILysTypJ9YR0LtxoQPlcheyDrG%2FxuMoZmRG5RKxq2EgN9%2F7%2B6ZKDhxwyxenQt2%2FOKAotVVyMF5tXNBBxRxKx8EAKNhxMTu8IU1UUmXUn1fRMXszsSEYTeUY9QZOpgNM%2BSMPvvRFvYF4DI6yTkK3dJsuRc6JsIZLzoEwcQesmyua54fXn%2FcGgUWtt%2FY%2BHL1Xv3n0I2vQNT3tWyDQeUdroB6jKholJ9k908Oo9bR%2F4b6paUjbN3DoAjdIbWYGDFMsOSk45%2FOl%2BVLaVeQBT5pz70LlLtWGJ79Mfoeboqoun98x0OGNuIkcHdM3ns69mutrdYpfVyU0YZn8wVmQcpmUbbGXBYHByEDDTZu%2BCWiWWLFHLoK1iMMPEiLQmWfSiXoIuwP2ZAJ3%2BeHw9LW0hD14x9xbrBuD4nQGs3E1E5FloeB5MLIfgqX%2F0v6FxPrbvihN9aDQ%2FA3Y%2ByYBLOQ7ZdAIjE4AJd3Njq7%2BoerWiQNPuwrsevXdsKQOXvFYCRuGlZg%2BvGzZZqTqe583Dw%2FnFGMwUr56btfThNFEgFjPXgJ6igg%2BjGsA7hOr%2B46yHylZ%2BHUAscdUkc30etqryOnQfMKr98r0GOqUBu5Yj4P%2Flhkvii97nL%2BiAH6MF3kmYWTBHFb%2F%2FvY5cmmS1pAPcNmLv%2FHBPpjm6IebrhwyrafszkcGglrhaq39dehLCQeJj8qhHVZklnsh21mCgF7eUATcUcdz4N%2FBnEl4ropVaDguA66lhIKb%2BkoqlWkfpxQXC33xkuwAfsoBZ7slZow25378twc4Dxl6ttdqxNSB2gPqWP%2FZgRkd6tKJx4KyLOFlB&X-Amz-Signature=df7f3fc058cd95734c01090e8a99e2e2a411db7c115c0d5db6e67fc49f6ef892&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OIK55J%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq%2BLSKjC7eWbpzK1oYzIpz8LsOPv8ZGb85adHYuzUuNQIgAWCBwGiEiXGqKaJKQG9o%2BnQ7ik7FooX2qd3CdcVItZAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJpOkUG41QipgmjkJircA6vYnOid%2BkHHygKrASww%2FZtqrrPywc801u%2BkuyLE5SpiILysTypJ9YR0LtxoQPlcheyDrG%2FxuMoZmRG5RKxq2EgN9%2F7%2B6ZKDhxwyxenQt2%2FOKAotVVyMF5tXNBBxRxKx8EAKNhxMTu8IU1UUmXUn1fRMXszsSEYTeUY9QZOpgNM%2BSMPvvRFvYF4DI6yTkK3dJsuRc6JsIZLzoEwcQesmyua54fXn%2FcGgUWtt%2FY%2BHL1Xv3n0I2vQNT3tWyDQeUdroB6jKholJ9k908Oo9bR%2F4b6paUjbN3DoAjdIbWYGDFMsOSk45%2FOl%2BVLaVeQBT5pz70LlLtWGJ79Mfoeboqoun98x0OGNuIkcHdM3ns69mutrdYpfVyU0YZn8wVmQcpmUbbGXBYHByEDDTZu%2BCWiWWLFHLoK1iMMPEiLQmWfSiXoIuwP2ZAJ3%2BeHw9LW0hD14x9xbrBuD4nQGs3E1E5FloeB5MLIfgqX%2F0v6FxPrbvihN9aDQ%2FA3Y%2ByYBLOQ7ZdAIjE4AJd3Njq7%2BoerWiQNPuwrsevXdsKQOXvFYCRuGlZg%2BvGzZZqTqe583Dw%2FnFGMwUr56btfThNFEgFjPXgJ6igg%2BjGsA7hOr%2B46yHylZ%2BHUAscdUkc30etqryOnQfMKr98r0GOqUBu5Yj4P%2Flhkvii97nL%2BiAH6MF3kmYWTBHFb%2F%2FvY5cmmS1pAPcNmLv%2FHBPpjm6IebrhwyrafszkcGglrhaq39dehLCQeJj8qhHVZklnsh21mCgF7eUATcUcdz4N%2FBnEl4ropVaDguA66lhIKb%2BkoqlWkfpxQXC33xkuwAfsoBZ7slZow25378twc4Dxl6ttdqxNSB2gPqWP%2FZgRkd6tKJx4KyLOFlB&X-Amz-Signature=5475dd3f1210ce4d5348c7de7799c749ec9f4232d2e064325bbdf25d0e35216c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DM45EM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDDquuuLONtXSGevsfNuFj0q6ie36yAB2%2FGNATxgbS0QIhAPJfIp81sjvo2RJG5Gyq09jTkWZq2fIsUlus7PuCDzN9Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzvxH1baZ%2F25%2B%2BQmpEq3AO0ewyvXJZEpWduMEqU4o9Q6NuoNW%2BeZ9YXV5eyoBWK0Wv%2FPAeY2tKnaxeRHXuV%2B4VRy8uP1E6Kejoo7s1Lq7tFUE7PgEN2qPa4CGMTIlzUinJrZK%2BJJVjTyiWqHJCRK8XQvkZkAjtiTQjf6AabiNEw7FdQGKOz5jX0IgPujf39qsOl1w0QF4fGrG16axF8BQ98GMsRaPv%2BsrAaxgedBwHDgZ8rjDB%2BrOtOk2Twn1i3BnwvOJ1Stglh8e05jwaqGLUnpwEslUwhbCJJXG2fGyHnop5r0z8UboAWcZHBk2uRC3mh8gH%2BakXwS7giNrgV3FTui6basTY6GrHgqyViKlqkxln3WR%2Bo7aX650wICGfrc48kanpxlJCavjW6kszV856ugnaTz%2BIWZh7QsWYEDmeJOFxXJHVlUwwhhB5R7GyE1XT1tg78zwqMqR7uvqFvcwTgw7ZkcuLzbJq8CAsNup96yTJiyD7UQeht9WSDOfvwRmEWT30VfY711Gq9SNEJ3rfXJfkNqFlsl0POkUyB%2Bw2YWZVe9QQV9e2ggcE36vUCpzt%2Fy7oFvTHdFm3tOlYABF4gzJuFn%2BBaxggcTB1s2Y52Q3jgTyfpRKmpx6e1Pz9h07YFyWSQDk6imdEe9zDU%2FPK9BjqkAcNL%2FREqaGAk7bKuPdkT1iJ6L31KMvUU8uv3S84jxO4NpW6tv44Tdh7Lh0hfIZ%2FmRiqqjUy%2BRDTZAFRjztVia14mFpj0tbHUxf03NB3nX7Nj1mgaIWAoLT3F3wijrBYXemMK9%2BTNKLakpMqBhi%2FcIkr7uxh%2Fkwi5tOZxvkLB%2BIXJz7FbDF4D7JL%2BteM9XMq04QT2rcm8wuOAxskDExcMgGzppbO5&X-Amz-Signature=8cb38aebdcf2f7732a2eab2b3aedda72098a98ae4d4597224ea7098d750f3b65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKMUCL2%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUWqPOQx3hZjVd%2F7bNiDzI8BFt%2FFUtM72DUV%2BasZCmQAiEA5tp%2FpTrFKdx1sUXiVKWbkRGj7dq2Jk4kjoYG%2F17HbSUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDL2K%2FcPofvc%2BpVCLySrcA%2FPxeVG8QjO1Ez1AnCKE%2BbX%2BTCan7stzd5uYYp%2BOz%2FJczQqnQ4kWq4aY7%2FgIt%2BHCmTB27EO%2B%2BsZkBvQilJvUBwMztoZpTyKsWH9dpEuEQcdztNC85SGkYivtQfrQLjt6ijYkMtyUoOMjTyFDipiIa%2FFCcx8a2kqwaxKtNRlkf9ll9VtcDnJJWpMVLyYBNaP5beh8IMvWJM9StiY3CkPgyRGbtCVyVcSp986yCWOV0RenJdFJJJnCGCKvcraKPKc9BusIIDbX4JF%2BLlhIkOEHIqWEm3FJerYYQhU7Qzhrb29T3iAY0KrA7uzstbj01NqVnP%2BDkkr2HmYQR%2FCu0C5GE%2BgLrHnYidrgejXmzGBPchtQ0PzSt%2BOU8lkKsR0pDbeWF4djjQn5K%2FXwOsR6Na7juxsiF3fMFzQuhPBLdDcjYrKbv0Et0PVsIkZQG%2FLgfkNCSKNlV%2FXN11tjxgI3CoQWgusr2frzCmHbawY6AznOxEf2RlQglhuxBnY11N5%2B0jcs4mRWATuekiD%2FQWAeZY8n4TyAAGZLdyywSIQdHkLAtn%2Ftu3mwelS%2Fi0DpEifzY5krd7xxnPDmfLUjBfKz7wsXsjfAQ2xE8s1OYj%2BsgfAwfH68385zVNwjDTRjK3aPMKH98r0GOqUBWYAJmQ33WsIfvKoAkzkTL0l1eWg6HmwWgP%2F79U9ZHjHfsdw%2BUIBmScjFWXh1Qom450BvzjOzIv%2BF5L5Htr8H2E%2BK3BC7t9BeQts%2F96atm0RsL6HLfy5ipLSwvmlraQ3vfMNoiBsGSHp9doza9Y0DV1E%2FyDmpfjp78yUfA4Ce7HDfahVx5gRGCwR4EdJGSk19Y0ZxozwMovO85T10fbCZVYufODLm&X-Amz-Signature=546a863aefdd8930daec8f52c51bf4c643e289e72a5609229085e7e1a35813d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OIK55J%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq%2BLSKjC7eWbpzK1oYzIpz8LsOPv8ZGb85adHYuzUuNQIgAWCBwGiEiXGqKaJKQG9o%2BnQ7ik7FooX2qd3CdcVItZAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJpOkUG41QipgmjkJircA6vYnOid%2BkHHygKrASww%2FZtqrrPywc801u%2BkuyLE5SpiILysTypJ9YR0LtxoQPlcheyDrG%2FxuMoZmRG5RKxq2EgN9%2F7%2B6ZKDhxwyxenQt2%2FOKAotVVyMF5tXNBBxRxKx8EAKNhxMTu8IU1UUmXUn1fRMXszsSEYTeUY9QZOpgNM%2BSMPvvRFvYF4DI6yTkK3dJsuRc6JsIZLzoEwcQesmyua54fXn%2FcGgUWtt%2FY%2BHL1Xv3n0I2vQNT3tWyDQeUdroB6jKholJ9k908Oo9bR%2F4b6paUjbN3DoAjdIbWYGDFMsOSk45%2FOl%2BVLaVeQBT5pz70LlLtWGJ79Mfoeboqoun98x0OGNuIkcHdM3ns69mutrdYpfVyU0YZn8wVmQcpmUbbGXBYHByEDDTZu%2BCWiWWLFHLoK1iMMPEiLQmWfSiXoIuwP2ZAJ3%2BeHw9LW0hD14x9xbrBuD4nQGs3E1E5FloeB5MLIfgqX%2F0v6FxPrbvihN9aDQ%2FA3Y%2ByYBLOQ7ZdAIjE4AJd3Njq7%2BoerWiQNPuwrsevXdsKQOXvFYCRuGlZg%2BvGzZZqTqe583Dw%2FnFGMwUr56btfThNFEgFjPXgJ6igg%2BjGsA7hOr%2B46yHylZ%2BHUAscdUkc30etqryOnQfMKr98r0GOqUBu5Yj4P%2Flhkvii97nL%2BiAH6MF3kmYWTBHFb%2F%2FvY5cmmS1pAPcNmLv%2FHBPpjm6IebrhwyrafszkcGglrhaq39dehLCQeJj8qhHVZklnsh21mCgF7eUATcUcdz4N%2FBnEl4ropVaDguA66lhIKb%2BkoqlWkfpxQXC33xkuwAfsoBZ7slZow25378twc4Dxl6ttdqxNSB2gPqWP%2FZgRkd6tKJx4KyLOFlB&X-Amz-Signature=3b9e7fdb064cd56e6f59d69740d27178d08b41e58e487b46eae5d908f8603ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
