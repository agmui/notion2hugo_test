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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQ4WCHW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtXjh9ofwbolLx4yeUfVMCt7S7xUQ5SaVRLD9CTxJM2AiBgVa7p32mTQRNJYyZNijb%2B%2FSgmSquoWZ1Bx5eWMyxuBir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BaOxjSpwAdIyx9O2KtwDSB6uX0jaa1uii8bCIRFnMw37x%2BX2t2VoGZU2IW41xclPdfznbef%2FxUL6NUvIefS7lwAgtxSe93i6FUH8e%2FdzcZ5TCmJktLlGJlBPLHHpTiFZbg7%2FyMsqLzFIIvSMuNqHWOYQS1%2Fgc%2B%2FWYI%2FwiqVrmCmUaLjO%2BcjK1cLVnZ%2FXa%2FgBGh6c%2BU%2B7OP3zQO9gGEzxTdYKGGQZRW2aUd3%2FQE7tb%2FyQKGnhX6rec78udaM2fiGS87vjAM0QGvGyhnFRNyyBjwBXCmBookVljCi9LM5GRlkuRmPWWBvkl9DYnMGQQDGFMJ1P7sKfDSCp2JPpzY%2FYemOIOqOvBnSZ6comztOXjrIbw8GdOrTB1IfDM9YNKIKXye%2FCvvGG%2F6KeNfKMV4CVIrHE8ZgYBQgNYoXGegPVDj%2FMiCCuOD01CVCIuWj62OYDg%2FAAtMk%2FOItMBvwMQAnZHkKzItKc4ZEXgQRp4eISw%2BSYQQ4liOB8cnP5Ni7SbYS3Z51idYkAHuTXR11qb6WjuuojmWa6cxLrSjx0kDxBppAO4jO1UgXt2aWY6SIeDaAjgmwYXo6hp43pFeUKIXi%2F%2B5iMXHh%2BIFIlXdKIo54pFHp%2F%2FU3Xgd7z76OOZHt9tm1YVBbUyW5NFAkUWGAwjf7lwAY6pgH%2BdsQXRRoY6Hbql7wc5%2Bl1zLtPRvPcBsFxey6p2HMPLX%2BiSI3sCZ7zkzCVK46P6ZVlBxOWO9l%2FeXgefA8P%2FCF9lbuUeE0PC%2Bsbe2LVMlEjjHPw6ndnDysFquDya3FG0fDhcGDkAZzql0Bf8Z5whApYGXlcMqVj8AkzVysYx4DfMZxhwUrE7JGceAUmlMr9380AzZQF9HjjgCmfHbCSwDZ1OTuEGyOh&X-Amz-Signature=46a9ad448ef5b385c7f45e74105dca23bf1a289f892e2756ffed51823faf044b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQ4WCHW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtXjh9ofwbolLx4yeUfVMCt7S7xUQ5SaVRLD9CTxJM2AiBgVa7p32mTQRNJYyZNijb%2B%2FSgmSquoWZ1Bx5eWMyxuBir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BaOxjSpwAdIyx9O2KtwDSB6uX0jaa1uii8bCIRFnMw37x%2BX2t2VoGZU2IW41xclPdfznbef%2FxUL6NUvIefS7lwAgtxSe93i6FUH8e%2FdzcZ5TCmJktLlGJlBPLHHpTiFZbg7%2FyMsqLzFIIvSMuNqHWOYQS1%2Fgc%2B%2FWYI%2FwiqVrmCmUaLjO%2BcjK1cLVnZ%2FXa%2FgBGh6c%2BU%2B7OP3zQO9gGEzxTdYKGGQZRW2aUd3%2FQE7tb%2FyQKGnhX6rec78udaM2fiGS87vjAM0QGvGyhnFRNyyBjwBXCmBookVljCi9LM5GRlkuRmPWWBvkl9DYnMGQQDGFMJ1P7sKfDSCp2JPpzY%2FYemOIOqOvBnSZ6comztOXjrIbw8GdOrTB1IfDM9YNKIKXye%2FCvvGG%2F6KeNfKMV4CVIrHE8ZgYBQgNYoXGegPVDj%2FMiCCuOD01CVCIuWj62OYDg%2FAAtMk%2FOItMBvwMQAnZHkKzItKc4ZEXgQRp4eISw%2BSYQQ4liOB8cnP5Ni7SbYS3Z51idYkAHuTXR11qb6WjuuojmWa6cxLrSjx0kDxBppAO4jO1UgXt2aWY6SIeDaAjgmwYXo6hp43pFeUKIXi%2F%2B5iMXHh%2BIFIlXdKIo54pFHp%2F%2FU3Xgd7z76OOZHt9tm1YVBbUyW5NFAkUWGAwjf7lwAY6pgH%2BdsQXRRoY6Hbql7wc5%2Bl1zLtPRvPcBsFxey6p2HMPLX%2BiSI3sCZ7zkzCVK46P6ZVlBxOWO9l%2FeXgefA8P%2FCF9lbuUeE0PC%2Bsbe2LVMlEjjHPw6ndnDysFquDya3FG0fDhcGDkAZzql0Bf8Z5whApYGXlcMqVj8AkzVysYx4DfMZxhwUrE7JGceAUmlMr9380AzZQF9HjjgCmfHbCSwDZ1OTuEGyOh&X-Amz-Signature=f616ec2f21ef74c068d7d8fe87d3f329d2589f3b69bdc030e66dc7adf59263a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQ4WCHW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtXjh9ofwbolLx4yeUfVMCt7S7xUQ5SaVRLD9CTxJM2AiBgVa7p32mTQRNJYyZNijb%2B%2FSgmSquoWZ1Bx5eWMyxuBir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BaOxjSpwAdIyx9O2KtwDSB6uX0jaa1uii8bCIRFnMw37x%2BX2t2VoGZU2IW41xclPdfznbef%2FxUL6NUvIefS7lwAgtxSe93i6FUH8e%2FdzcZ5TCmJktLlGJlBPLHHpTiFZbg7%2FyMsqLzFIIvSMuNqHWOYQS1%2Fgc%2B%2FWYI%2FwiqVrmCmUaLjO%2BcjK1cLVnZ%2FXa%2FgBGh6c%2BU%2B7OP3zQO9gGEzxTdYKGGQZRW2aUd3%2FQE7tb%2FyQKGnhX6rec78udaM2fiGS87vjAM0QGvGyhnFRNyyBjwBXCmBookVljCi9LM5GRlkuRmPWWBvkl9DYnMGQQDGFMJ1P7sKfDSCp2JPpzY%2FYemOIOqOvBnSZ6comztOXjrIbw8GdOrTB1IfDM9YNKIKXye%2FCvvGG%2F6KeNfKMV4CVIrHE8ZgYBQgNYoXGegPVDj%2FMiCCuOD01CVCIuWj62OYDg%2FAAtMk%2FOItMBvwMQAnZHkKzItKc4ZEXgQRp4eISw%2BSYQQ4liOB8cnP5Ni7SbYS3Z51idYkAHuTXR11qb6WjuuojmWa6cxLrSjx0kDxBppAO4jO1UgXt2aWY6SIeDaAjgmwYXo6hp43pFeUKIXi%2F%2B5iMXHh%2BIFIlXdKIo54pFHp%2F%2FU3Xgd7z76OOZHt9tm1YVBbUyW5NFAkUWGAwjf7lwAY6pgH%2BdsQXRRoY6Hbql7wc5%2Bl1zLtPRvPcBsFxey6p2HMPLX%2BiSI3sCZ7zkzCVK46P6ZVlBxOWO9l%2FeXgefA8P%2FCF9lbuUeE0PC%2Bsbe2LVMlEjjHPw6ndnDysFquDya3FG0fDhcGDkAZzql0Bf8Z5whApYGXlcMqVj8AkzVysYx4DfMZxhwUrE7JGceAUmlMr9380AzZQF9HjjgCmfHbCSwDZ1OTuEGyOh&X-Amz-Signature=f993101d6099534f8cc0edbcfccf4acfc7aa59654db2e891e86051b241136b32&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773SCP3C%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvyhdtfOdldmMEX4yTM2JK0LuFwa%2FPpR%2F5Fu8UL9IggIgdcrDqJfojJRtY%2FplRA3hpPO%2FxceqOgVK7bYf4yuF3icq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC%2B%2FRdmfjUfa1JcT4ircAzCCZyI%2B2AjNRO95XX49BzlkmEacYJ2nEHCpv9ioe5sgWcLLXBDd35ekNny7jBwvkEUcFC%2FMwxi%2BZWP4KvJvdQ09tdTScA%2BL5J7x4EjRSjwFiqMoF%2FmrLQaFFiaHteF158U99QLsb%2FBZe0Qf36vAajaCwHp6zJLPOwpQIbK9CJwfLBj4SSsg2eRv9h4K6GTTuGWSq9GjXniDRLQtv7OnRObwNkU4SDSENlg624x1LRv%2FKdu%2Bt8kpYlysiAe4WKDA2%2Bzp9B9KHHw9VUQlTTdzaizLWPafX0zUhPZ5OdFWmTUHL1lTnmQunwT8MhkOjMUBZXmpCd3WGAsLqgCym2MWIVvMMTEZec8ilF4IcFuhRfQfZR%2FIBV0RVDpkPENONPHL1SqSrR28Hap1JgqyTZUSmbbbMiGHjOOGuxDAKVURFnRD0sO6dfCWVnY94ZjbE1bAPwfcK7B8LL9vEFjZ0wd8o2D8esx9bJANh%2FviTalhPfykT%2F7E%2BCjEoeIC9NP4%2BFf02Q6SAo%2BGhgyCbUOfH7BYDHXI%2FoorQxxxLdA3GNkH5Fd2fshKEk3WS2tzKuqPqMzrsXTcj91AqDw5KKh17%2FyuRfLIv16SLYgCtTo7h7VgU1GRP7yMkWHAvweynka9MKH%2B5cAGOqUBI2PEGlOY9ZpdUBZm6mBDAkjw5k%2FxecyvjLVkaHN9lplr%2BvCEw5xFNtcv3isbF540ij267phFff0%2FqOAmmrEO55Qa7990uPf%2BFC7J3pnMJihUszW18HjvXOwtnU8Rvq74vh6zPVctD%2BuUIQQRl%2FFWKXIdDf4piLnPl65LN2O7JE5nvxZTr0cbyuSigGPH%2FPrVms9aLuYj%2F6YSl6lAkAOTCnnQvz3N&X-Amz-Signature=ba9dcc52ef4b831cc2e6348ed20d337a2da04be41b1578ebefb30dc4810c76c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LM6Y5L%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxaYscWtgcj3zZPBijjgEY71lVuba76V3HMe3A9s1SmAiEAxS2gra1pJQvwd8e%2F3pfKTjQVDSKiNuL89GIBRVNMjrYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCmimG%2BfCGwegpsA1SrcAwFUXDU3OfbRFb4zw%2FvOpJsot%2FmO3K7EdBWOnlpCJtPKtA68EONIEFGYLTydGEl3%2Fo7RsWOH%2FC%2BA%2FMAhtYyHli5L0de5oPdcuIGhvfZzSHUX7tgyUpLJjX2fEUtVZj7VjH1zpPqatHk%2FFt0nlXihaEih6vo2AE6sx4TTkkbLx8TEiarGbtalqavKzIiR9z%2FefKmicxy%2BkekmRqeiR38UYMb39Zz8GqZa43tbpMouiwnALDn3jfO0%2FRbbBgQ95qbMSwwUAaAIuTjdptFT%2FKcp3Bq%2FNtyaeDpSZf373LIgLltbE7mx%2Bw3GtYo%2BQgFrZwFq1e2btUS%2F4uslrYF6%2Fs2TKQeuPpL32Uc4rZ%2FmN5ciMOnEI%2BnDDUKjIQAm7oZTEkdf75QxJ8G3Z6CVOFSVW7EjpHXcW%2Fhw6wkAyMEeR2oDdlgo6SVVq%2BST09xye7lttFU4nCJ1Ea51ZhWKOUBzvvimBkorERrdWC1wsvmaqet%2FvPYCF%2BEi38z6Kw2lZgpxfsn%2FKzbkJcouWyqrka3pTz4gjULou7bRZ9lBNxbR6vhs5UPqQwt1T%2Bm%2BKI6Q%2FFSjM6rNfz2prok6tM4gFS%2BwkVeUj%2Fp0YYa17NJi41ixo8oDEep43knQ8H%2FSiA%2Fjm0DGMLH%2B5cAGOqUBBB0%2BKGffz9Xc02k5Zm546kfYl91KiK1S%2BYyOGKSeRbqGn6TGQyMCi3tKKvqiLXxhQog%2Bb6PtLKT50aJvYtg3iWFLVQ8uZutWSJAXI2G1BvTZgez22%2FNPYyZrlIt%2Bil%2BZ7570gnE3Jaw1%2BzYbnguHDfMjfBt3%2FRJkl4GzUQQXx5YeZjlKABhweda%2BuCoqzJ2EvPMAwU9%2BLpg8ZfFk7pZuLlugvNzk&X-Amz-Signature=f0baabc8d72d0e0e472fb48bf03c0a13cf3a281213db10174f131d09c6265697&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQ4WCHW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtXjh9ofwbolLx4yeUfVMCt7S7xUQ5SaVRLD9CTxJM2AiBgVa7p32mTQRNJYyZNijb%2B%2FSgmSquoWZ1Bx5eWMyxuBir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2BaOxjSpwAdIyx9O2KtwDSB6uX0jaa1uii8bCIRFnMw37x%2BX2t2VoGZU2IW41xclPdfznbef%2FxUL6NUvIefS7lwAgtxSe93i6FUH8e%2FdzcZ5TCmJktLlGJlBPLHHpTiFZbg7%2FyMsqLzFIIvSMuNqHWOYQS1%2Fgc%2B%2FWYI%2FwiqVrmCmUaLjO%2BcjK1cLVnZ%2FXa%2FgBGh6c%2BU%2B7OP3zQO9gGEzxTdYKGGQZRW2aUd3%2FQE7tb%2FyQKGnhX6rec78udaM2fiGS87vjAM0QGvGyhnFRNyyBjwBXCmBookVljCi9LM5GRlkuRmPWWBvkl9DYnMGQQDGFMJ1P7sKfDSCp2JPpzY%2FYemOIOqOvBnSZ6comztOXjrIbw8GdOrTB1IfDM9YNKIKXye%2FCvvGG%2F6KeNfKMV4CVIrHE8ZgYBQgNYoXGegPVDj%2FMiCCuOD01CVCIuWj62OYDg%2FAAtMk%2FOItMBvwMQAnZHkKzItKc4ZEXgQRp4eISw%2BSYQQ4liOB8cnP5Ni7SbYS3Z51idYkAHuTXR11qb6WjuuojmWa6cxLrSjx0kDxBppAO4jO1UgXt2aWY6SIeDaAjgmwYXo6hp43pFeUKIXi%2F%2B5iMXHh%2BIFIlXdKIo54pFHp%2F%2FU3Xgd7z76OOZHt9tm1YVBbUyW5NFAkUWGAwjf7lwAY6pgH%2BdsQXRRoY6Hbql7wc5%2Bl1zLtPRvPcBsFxey6p2HMPLX%2BiSI3sCZ7zkzCVK46P6ZVlBxOWO9l%2FeXgefA8P%2FCF9lbuUeE0PC%2Bsbe2LVMlEjjHPw6ndnDysFquDya3FG0fDhcGDkAZzql0Bf8Z5whApYGXlcMqVj8AkzVysYx4DfMZxhwUrE7JGceAUmlMr9380AzZQF9HjjgCmfHbCSwDZ1OTuEGyOh&X-Amz-Signature=c606f1f115b37c2b0cf97b70b96422e1872cd07c7072ab3ec0260d598ee70493&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
