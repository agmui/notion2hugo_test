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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPEN2BUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFdWFu6dbq1XoM1GZmkQujTcZB80SBH8iC1aOZzfp5NAiBS%2FWAqaIEQqcnsPcCWrQ29AqOlHgDziwO%2Bo7GYBUgKhCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjSs7Y8%2BCpmczMBsKtwDDVvSGLNN83ZPCn0WBOQ5kCUmm%2FOetfEbvW1J9Ou80Hfb3wdR%2FUKHGyCLA3Lxw7sQpMYyLsoClh6zzzzDEJ3vcxDpxH1mCZx7%2FSKmW4Nlwtzypj%2BM0cly10%2B%2B3Ub65Krumcsp1FIxkBrQzUhvI3gbLiNuPzyQl2d5qOzW0WG%2F7GLoMXuo0UKNz%2BuPdYHearke4D4fmFCmRq2ucZweCURQAp8NwjjUK1XkwXNawqYSZPe7wp87m5wLHsecGlpCivvhSJrLNfHg0%2FDpwwRnmE2qlqNlAl5PGcpjjA1qfu1cp84Ynd2ONvb5fvecfbTd0sv39JhOqYZy9yS6ii%2BhzOFJf8Zv8tE2ZSiK3o2%2BqF7fTqMaWVGc0SFSl%2FEkNwh6egJeJTHsWTfXR268wxZOVTDEwwmWZ7DbgXE4GaGR3UqJIZpTnX%2BegFt%2F%2FOdf7j%2F4GHErMeQw2gU8%2Ft%2FWGNP%2FQBJuR1aiHWdtBl0decUSDU%2FBSO%2BMt5%2BA2rjUr%2Bz9nAKLrH59PaIIc2mVWZsuOGWq5vQePMISaOV%2FKF9kwkbu6OhX2OD2ggJbVHe7gdzR78kGUL0VeMGHfO7DEOAjm9sly7xdpVXLoDOj43QLFpsN6CFy%2BLVc4LsX4jZtpD19s6Uw%2BvzIwwY6pgEjfF2F%2BbWkYm5BDdyta9YNOdo3mdtI2L2NzkDU6%2B5h76lj1yZXvhwSAFAa%2FBdSqEA4LfyqYefmCZ5Yv1gR8QA%2FSlNFuKNYwrpYoR31nh9Im7IXLpSVp3ioZWsrb28bLHujKKLbU2k1kLeTUl0wqt7YC1FYRgXZ1asB6W2z6LrCaJXsQUGqU3YLSBdAsOY28Of7389XX3GKTWBdeivkBojf%2BSpQB38%2B&X-Amz-Signature=225d6e9a2f82985693241a23d8a689d5c9061114e0ebe247375f214306b9e932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPEN2BUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFdWFu6dbq1XoM1GZmkQujTcZB80SBH8iC1aOZzfp5NAiBS%2FWAqaIEQqcnsPcCWrQ29AqOlHgDziwO%2Bo7GYBUgKhCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjSs7Y8%2BCpmczMBsKtwDDVvSGLNN83ZPCn0WBOQ5kCUmm%2FOetfEbvW1J9Ou80Hfb3wdR%2FUKHGyCLA3Lxw7sQpMYyLsoClh6zzzzDEJ3vcxDpxH1mCZx7%2FSKmW4Nlwtzypj%2BM0cly10%2B%2B3Ub65Krumcsp1FIxkBrQzUhvI3gbLiNuPzyQl2d5qOzW0WG%2F7GLoMXuo0UKNz%2BuPdYHearke4D4fmFCmRq2ucZweCURQAp8NwjjUK1XkwXNawqYSZPe7wp87m5wLHsecGlpCivvhSJrLNfHg0%2FDpwwRnmE2qlqNlAl5PGcpjjA1qfu1cp84Ynd2ONvb5fvecfbTd0sv39JhOqYZy9yS6ii%2BhzOFJf8Zv8tE2ZSiK3o2%2BqF7fTqMaWVGc0SFSl%2FEkNwh6egJeJTHsWTfXR268wxZOVTDEwwmWZ7DbgXE4GaGR3UqJIZpTnX%2BegFt%2F%2FOdf7j%2F4GHErMeQw2gU8%2Ft%2FWGNP%2FQBJuR1aiHWdtBl0decUSDU%2FBSO%2BMt5%2BA2rjUr%2Bz9nAKLrH59PaIIc2mVWZsuOGWq5vQePMISaOV%2FKF9kwkbu6OhX2OD2ggJbVHe7gdzR78kGUL0VeMGHfO7DEOAjm9sly7xdpVXLoDOj43QLFpsN6CFy%2BLVc4LsX4jZtpD19s6Uw%2BvzIwwY6pgEjfF2F%2BbWkYm5BDdyta9YNOdo3mdtI2L2NzkDU6%2B5h76lj1yZXvhwSAFAa%2FBdSqEA4LfyqYefmCZ5Yv1gR8QA%2FSlNFuKNYwrpYoR31nh9Im7IXLpSVp3ioZWsrb28bLHujKKLbU2k1kLeTUl0wqt7YC1FYRgXZ1asB6W2z6LrCaJXsQUGqU3YLSBdAsOY28Of7389XX3GKTWBdeivkBojf%2BSpQB38%2B&X-Amz-Signature=276502d7a784b837720bc44acf9a9590f1ff46a9ac04212139459aa8c401af3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPEN2BUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFdWFu6dbq1XoM1GZmkQujTcZB80SBH8iC1aOZzfp5NAiBS%2FWAqaIEQqcnsPcCWrQ29AqOlHgDziwO%2Bo7GYBUgKhCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjSs7Y8%2BCpmczMBsKtwDDVvSGLNN83ZPCn0WBOQ5kCUmm%2FOetfEbvW1J9Ou80Hfb3wdR%2FUKHGyCLA3Lxw7sQpMYyLsoClh6zzzzDEJ3vcxDpxH1mCZx7%2FSKmW4Nlwtzypj%2BM0cly10%2B%2B3Ub65Krumcsp1FIxkBrQzUhvI3gbLiNuPzyQl2d5qOzW0WG%2F7GLoMXuo0UKNz%2BuPdYHearke4D4fmFCmRq2ucZweCURQAp8NwjjUK1XkwXNawqYSZPe7wp87m5wLHsecGlpCivvhSJrLNfHg0%2FDpwwRnmE2qlqNlAl5PGcpjjA1qfu1cp84Ynd2ONvb5fvecfbTd0sv39JhOqYZy9yS6ii%2BhzOFJf8Zv8tE2ZSiK3o2%2BqF7fTqMaWVGc0SFSl%2FEkNwh6egJeJTHsWTfXR268wxZOVTDEwwmWZ7DbgXE4GaGR3UqJIZpTnX%2BegFt%2F%2FOdf7j%2F4GHErMeQw2gU8%2Ft%2FWGNP%2FQBJuR1aiHWdtBl0decUSDU%2FBSO%2BMt5%2BA2rjUr%2Bz9nAKLrH59PaIIc2mVWZsuOGWq5vQePMISaOV%2FKF9kwkbu6OhX2OD2ggJbVHe7gdzR78kGUL0VeMGHfO7DEOAjm9sly7xdpVXLoDOj43QLFpsN6CFy%2BLVc4LsX4jZtpD19s6Uw%2BvzIwwY6pgEjfF2F%2BbWkYm5BDdyta9YNOdo3mdtI2L2NzkDU6%2B5h76lj1yZXvhwSAFAa%2FBdSqEA4LfyqYefmCZ5Yv1gR8QA%2FSlNFuKNYwrpYoR31nh9Im7IXLpSVp3ioZWsrb28bLHujKKLbU2k1kLeTUl0wqt7YC1FYRgXZ1asB6W2z6LrCaJXsQUGqU3YLSBdAsOY28Of7389XX3GKTWBdeivkBojf%2BSpQB38%2B&X-Amz-Signature=81f267268709966b815dedf77bd64747a50a0771305df1fd948f93b426208916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGD23CG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIDB9kJgXOHoxgwIjPzsL7Eb9KyHgrr%2B%2FpiRu36Dm0LAiBxHFak%2F%2BTYHZXboc7tb2oykaBeWGv6sQxEBj2mXBLqWSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVpKjprev%2FNMxepX1KtwDyqJsEMZBSmRcQMqXcpuvmJ1DwEw3%2BP2I50rwNI8w%2Fvav3RiDnayfP3lGYIWU%2BfbbLwdEx8Hq9gnLAAtuqEJtg9%2FcCIBHpPNAIQqxk2HAJjpbDl8%2BhAM%2FP5hRH3tOmzRa0cLdHlv8Vny3cLALzzKL63RsYNBqvdX5FM3njTf1iXa%2BcLjRzBPklb2dyWQUm4%2B5oX92XhmMujJ8f1599yBDQrtlzL2d3gyHx9%2B%2BZN9SZ6Q2GqfcLWelKlVUg7Z7WOXxogjqkdJUaupDrkTOgUw4l2ZximBdBBomuSs8nlb%2FYUlmqn8kGXbPzRGYbW9k6rrd4rCy9M4STP1D5eVpEHz3p8W%2FhKHUfTcPAcDxQV1x%2F9m0SOUt6%2B7qJJH%2Fpdjcov3K6DsAVLvYb5cG%2BkTNRDsOIilbwsM3b5lRAdXCCcCy8fOzOAwWDq5ymlUMOtoyuQousxiV5iqJ8bYR5p4QFb9gWHhaDFLKN24rabVzm%2BkbbIlYot2MGLlX%2BRfgXcxbYPDT5z3lmoNX0z9BnJyAU4tIte5bnwxmGqKQP%2FStKRKZI6NrYOPdExn%2FrCLUgi81DMVf5fER3SAXCbwyboEmAwRF6R7c1tDAseqKvbJZ35BovUqqO73nUr1YLKtCqCkwq%2F3IwwY6pgE6TSKvTGtyu368ampc6W1WCO6LJmw46%2FE7%2BYs9OmFNxisQviA%2FDvsvN3vkZhxWwPFO7oyQMHYHbP%2BlYjM8HVloAT3ZnsFwovicsm48ffmxv6yShmd376hxcm9jpnqcWh4f4tVGJvJ1B09hX1vdnPdTSbmVOdf%2F8TtgjvVQb4OvOeJVZ%2FZaS8pwKO6MXwNU%2FXchDARXFn7BpAvSCo4cko8jYuk9THht&X-Amz-Signature=13609d57fdae92f9dbb67b5ff104557f30b66f33392794fc89b2eaf20f6a2f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQVENEX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Z5pubrh16iZt5SXeplBb8NG5GCVhD8c0uhAGzgjYHAiEA1lLgu0Cq156U%2BKO94p%2BwIZOnNUNPuUd3g7WoZdoxOtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYDr9oGgpgNAFPZCyrcAxvxQKWpVkRFdsqev7bYrOAIzv7HAR7hazZbhUVUIgbYAuvQ4RSKbxEwVZSe6E20sM9Bmjmtx5SH%2FKPtq8qjC9S4t%2FGhdPytvu0QIRdDi5Zl2wP81uJ0qee6gUIvVsbq6bEft2ydZrbFuNo%2F44DdL9xHrrdt9HEc1sbnleAxjXkxwbxN3VmsA%2F4J%2F%2FT1AAtmnWPryabbpAPlhsWWPjQwEV2xK5A3SXeOZUCRm2v%2FV7hNzxAVHc8TNzBzn5N8rCrcnmyTdGRX1W0K%2FxaJ2stDBy2swkJGtvmon4xONa%2FnSCCPRS%2BWPv%2BwKO1oVZOaN9tpniY6sqEsvMe6AF9hGjGFWbQfxwXFV9zzKowXASPyjWMs9KPzZ7ft4kaUO%2FEjQReKWGvxf%2BVOOum9A8FRjlD%2FLuyirrG4yMs6BuYyVEW0x5qkGpgANZ0SCGu8olIxRHF8CyJxhDrPKZ6Jkz1kppWVdsxUy%2F3TfTlUVubj5l6Wiwkcf5ZgFZYPBOAQ7wtXLHDPXbRvBoQXLVJ%2BtAis7ijGrlKtlixj4oky7ANkgXqessJgG3NfSBBl01Xc%2FHgVqPl2CeSYW6ItkqRQNDXuRUSuNCG8DZMLU%2FPNVl72nBPjnYuAeAN9YnC4lEr%2FpMieMPD8yMMGOqUBQEBxe4baXNotBvsvy%2Bb7vSXKZ92VnCgCuDY3vEQysI8zUrEuGuajXDDdxvEH8H4GGHP1fxahs5FzvoEm6IWsTyA8KRQNQ9otlEZrZreRTZO0TxONt4d4kN8l0N6G9NX%2F4tSKHS1AtpX6ynZL7sr99EbswNQG0S701maqhqNQCzmPNpoc%2FgSRqWhcGFxeifp5cNhUjTG3B60LHrI8%2BsZ9VUZBuhiG&X-Amz-Signature=955f6072ed501dff185a0f577bd083b1a0c0804cf9be8e9c8f74a403b593e1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPEN2BUH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFdWFu6dbq1XoM1GZmkQujTcZB80SBH8iC1aOZzfp5NAiBS%2FWAqaIEQqcnsPcCWrQ29AqOlHgDziwO%2Bo7GYBUgKhCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjSs7Y8%2BCpmczMBsKtwDDVvSGLNN83ZPCn0WBOQ5kCUmm%2FOetfEbvW1J9Ou80Hfb3wdR%2FUKHGyCLA3Lxw7sQpMYyLsoClh6zzzzDEJ3vcxDpxH1mCZx7%2FSKmW4Nlwtzypj%2BM0cly10%2B%2B3Ub65Krumcsp1FIxkBrQzUhvI3gbLiNuPzyQl2d5qOzW0WG%2F7GLoMXuo0UKNz%2BuPdYHearke4D4fmFCmRq2ucZweCURQAp8NwjjUK1XkwXNawqYSZPe7wp87m5wLHsecGlpCivvhSJrLNfHg0%2FDpwwRnmE2qlqNlAl5PGcpjjA1qfu1cp84Ynd2ONvb5fvecfbTd0sv39JhOqYZy9yS6ii%2BhzOFJf8Zv8tE2ZSiK3o2%2BqF7fTqMaWVGc0SFSl%2FEkNwh6egJeJTHsWTfXR268wxZOVTDEwwmWZ7DbgXE4GaGR3UqJIZpTnX%2BegFt%2F%2FOdf7j%2F4GHErMeQw2gU8%2Ft%2FWGNP%2FQBJuR1aiHWdtBl0decUSDU%2FBSO%2BMt5%2BA2rjUr%2Bz9nAKLrH59PaIIc2mVWZsuOGWq5vQePMISaOV%2FKF9kwkbu6OhX2OD2ggJbVHe7gdzR78kGUL0VeMGHfO7DEOAjm9sly7xdpVXLoDOj43QLFpsN6CFy%2BLVc4LsX4jZtpD19s6Uw%2BvzIwwY6pgEjfF2F%2BbWkYm5BDdyta9YNOdo3mdtI2L2NzkDU6%2B5h76lj1yZXvhwSAFAa%2FBdSqEA4LfyqYefmCZ5Yv1gR8QA%2FSlNFuKNYwrpYoR31nh9Im7IXLpSVp3ioZWsrb28bLHujKKLbU2k1kLeTUl0wqt7YC1FYRgXZ1asB6W2z6LrCaJXsQUGqU3YLSBdAsOY28Of7389XX3GKTWBdeivkBojf%2BSpQB38%2B&X-Amz-Signature=df1b59fe6bd861e94a211224ac096d1c4456a1e258373d3d488ee389e5da5d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
