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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KPJ2GP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6ONtys3lz5OYYtI5XkVVJg20vtNExForFsxQ76fMXGAiEAgZqwjqwYYhAoJWy4x9xxMmz9%2BF0P3xPPe%2FgsUNbzkHsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBCqXJUnwvCQFOICwCrcAzAgP2R%2FNTvdAMMoqpGwioNZJelKKMxrcn6J5dah%2Fp3Hdj9LVbYOD9E5yXQz6ZLsadkEe8bzvi6g9IQ9jp%2BxVjoYZ%2BuUHJDsvGNEQ7xyApoKYRuk6AwP%2BAkY9OqbHcRLkD8ksLSxnujEZnn1A6ZXFDdoUSRigNBy0AuUbZUGo0sl7GyuE5UoYjssgiSf1UeTtoZ3UfOxwCPF2Ecekn8SB43rW1QQxDoxZqHZdJIubACaKzCqemcBK9ttTDgUkgPoUPO6t3ECDsTgl5iB0H4Y1PzTqMhVkSPAbi%2BY5aT2TK7xk0SuvfECvkmqnEF%2F%2FwKTpBuV75vaNCQPZA4cstY01B%2BJsKFJutVcyC86Pa7bq7Ar9QsRvvE%2BZJE1yErPb3h1riA9rBVnN2bzVTY%2BYvCiYj0n4shI%2F6mFDQv3LJgRQ156Q164%2BpN91tn0NgGIAv43aHSxM47iT288VXoD%2B9Il35JrAunYxBbULw%2B5PqFi8J7OOw9Kt2YE9wN8G%2BOd2riz7MPtGHVs1mDMWNFQjIKXG1mkG69nMHv85Fp1MxR6nFH11JF9Q4J8kl6SmUcF90W3Mh%2Fl5dauF3xeV7L1DPT17Avg7nZkcvDquDSWhOrM3wvhKInErLzBFqzMM0c2MIPv1b4GOqUB57iEIqvmuUEGUh6OAcGsyBHvRN%2FKjOYANPogaChPfV02c81pNh2U6%2BTNYsZ9TD2F82zfpxGA0tWW7nLInUETLY1olkDKF%2F%2B4emind2P4zeDsEdDNEqUYQtuWxu1f6AiEtk%2F%2FqK1iec%2Fck%2FuxDvK8fIOouhV2EcXP%2BAUnwJdsxv32twjVv4mdOUWU7ksLtuYm2ukjk4USlCf6OrXRaAuSf3UkVFtH&X-Amz-Signature=e92fbfc00d28f9bbd82c575fa2a262f4c1a4ff0be88773468185a6bf0f757ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KPJ2GP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6ONtys3lz5OYYtI5XkVVJg20vtNExForFsxQ76fMXGAiEAgZqwjqwYYhAoJWy4x9xxMmz9%2BF0P3xPPe%2FgsUNbzkHsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBCqXJUnwvCQFOICwCrcAzAgP2R%2FNTvdAMMoqpGwioNZJelKKMxrcn6J5dah%2Fp3Hdj9LVbYOD9E5yXQz6ZLsadkEe8bzvi6g9IQ9jp%2BxVjoYZ%2BuUHJDsvGNEQ7xyApoKYRuk6AwP%2BAkY9OqbHcRLkD8ksLSxnujEZnn1A6ZXFDdoUSRigNBy0AuUbZUGo0sl7GyuE5UoYjssgiSf1UeTtoZ3UfOxwCPF2Ecekn8SB43rW1QQxDoxZqHZdJIubACaKzCqemcBK9ttTDgUkgPoUPO6t3ECDsTgl5iB0H4Y1PzTqMhVkSPAbi%2BY5aT2TK7xk0SuvfECvkmqnEF%2F%2FwKTpBuV75vaNCQPZA4cstY01B%2BJsKFJutVcyC86Pa7bq7Ar9QsRvvE%2BZJE1yErPb3h1riA9rBVnN2bzVTY%2BYvCiYj0n4shI%2F6mFDQv3LJgRQ156Q164%2BpN91tn0NgGIAv43aHSxM47iT288VXoD%2B9Il35JrAunYxBbULw%2B5PqFi8J7OOw9Kt2YE9wN8G%2BOd2riz7MPtGHVs1mDMWNFQjIKXG1mkG69nMHv85Fp1MxR6nFH11JF9Q4J8kl6SmUcF90W3Mh%2Fl5dauF3xeV7L1DPT17Avg7nZkcvDquDSWhOrM3wvhKInErLzBFqzMM0c2MIPv1b4GOqUB57iEIqvmuUEGUh6OAcGsyBHvRN%2FKjOYANPogaChPfV02c81pNh2U6%2BTNYsZ9TD2F82zfpxGA0tWW7nLInUETLY1olkDKF%2F%2B4emind2P4zeDsEdDNEqUYQtuWxu1f6AiEtk%2F%2FqK1iec%2Fck%2FuxDvK8fIOouhV2EcXP%2BAUnwJdsxv32twjVv4mdOUWU7ksLtuYm2ukjk4USlCf6OrXRaAuSf3UkVFtH&X-Amz-Signature=bc40e646a5a49cdb925e944fada057db41aa5d2e38782481587dc40ff39b68f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXAVT4Q%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIEbTPv8P67%2F5qotIVwXeZcI%2BYuCBi0TeqU86BsR9YAgIgRLoX%2BZYLB16Xhimc9X7wMQfg7Mjmm21d9dyGrfNfqc4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNqXAq4BzGvMuseZ%2FSrcA2gTFHnWF0gdDqPBcjbosTsDlo8iaKdSOhUJmOamxK8%2F44uIosmgHh7WO7AybgIecn3trd58g8cVNY1pBaiKXexzepxs40mTLoDp61ICi2qocpEiheyGUpXqH0gyetNo4%2FwgNSzRUbHOtC2%2BokEbfKRwOsoHrG7i441eahKGTS9h3OqkqcxpcB5Gol13TqSFXlBXnSzV1bARbtJj9aUU5jpBPzOghMX6Jxh0b7O5mgkHb03UOSMg4P5j4Qddx9u3jgIVVdjj%2F%2Bex62Elu%2BGfnQrIWp9FgFI5nbH7yKQ1QhPecXKDwywnMs89tqs5GTTAq%2BGldpKq36pNe0ZtsI2lJOg4NciodVo%2BFxG21LWSYqCqDfx6nX%2BX65GiTIuL6B2erKYEtnGtsg%2FEeKMy6EcfRcR7w9D0hFURW2IosVkj44tr9t%2F8xboiaX3alDu8GmfM29pICAbbWiU96JPUUU5DuBgCH6feLSpa49czXOudMgzgs5ss37udmiVvGYhqqxtGHk8r1VnWYsn%2F73PSiDDZklPMwipXHnq2nAhgE%2FErMgf4MTSlZADW0p96bk6R5fRA7NToFBNlT6vxpgwkk5MLsK1%2FyYoh6DgPE1mz8woObk5oaq9vqcjhDYPrbnY5MPrv1b4GOqUB2sromAd4y41p6S%2BF6v3je%2B2HRa6qv9KqYGR2QTJ2T5n3l6gXVuW2JI1NeH4jYQ6efVyT1r8mMfG6g4pSGsNbTs%2BmIIZwVVRpxI0wKe9%2BplgLLnBB%2Fv%2BUqEh48FiEM4TX3LOX4PNRMk0TzS1kfnM4W9L3YKZEeEWoaANBPf32%2BY90fU8m6tncffo5cvHxl4UufVxsMhDZnUUlN7TOsGNlULddQZfQ&X-Amz-Signature=088942f7aa9971d36051185ebb7ce94f6cf7540de1262a975b2bb1782293aa88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFCMOR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3rrowdvITpRpPvhffGHPpIHwagb7gZeUYTegApM%2BrdAIgAk1IoVGj5Z03s3IGPOsNdjmf8TLSwJJlGK2LlspukMwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB9jU4nVfYjjdvbQVSrcA9DYX3DOIRFuaTICcf9jB%2B0LNfSSQGpcO8sbZFRCLi1y8Gj3GFcmtq8UITpos4IdLYNERD%2Fx9undIxaDfumgI5iHOHWdBBMnIQ1ZxIYKVa5yD5yA%2BaQQsZxzRolUrTJda6rkeR0ae0Bb9z2VFupTJ8c8n6PSwiXSscUNXwiFzIj94HU1S9qtR4Ndg4xDqxfAufg13KXxDY%2BHF0C0SfyiipOSIkzH6kWiSFpOC3Q7%2F%2B%2FB%2Fcou9Okdu5SgJANzbGgLVVhHG1joKGtWGnXFob4nvjQHJu1f4OQMXXu5wBuxrmX5iVTMo84EDIhQFzfftswrONIkQG2uGBfh5swbD%2FH25ayMCqbuH38tSKq5WYCyqBwk%2FloM7KgLboy9ME0WAYuLdNT2e0DR%2Fbg7FyZ2uecgFiDHzDd9%2FN0UoeP%2BMLjmaiS6E59N%2BRfpn%2BfJhDe%2BB0kCHtcpY2%2FVwHA7lRHjIwlkHV13eloalLiZKhnxtJZHltXmNrXbvVvwdog22c1s9b16MbPBQSR%2FHimWkOf6t9LI3xHAGZsqC9sS2iuXdcpyGXQmsza76osaq0zxM5J4%2BXWJKkk1eL0gU9PsUPTHssUOEmWCFxpi8r63bJqW4JePIg4t9Tog5rTVxLhxmJZUMI%2Fv1b4GOqUB7evONKoE0DiXWZiiB1tfKmSm1DOOgM4zzIZf6ial0tHgdi6WcLMfTMusfRjLR%2BOPgEgfp4sMMHIqBfuLBqm2OD6LZgrq8V55dDNVfcjEjhVl3aZWDDyeeTskdo4KF6LGwpbUUThDq%2BxWAKNzYWaqHStrrG4Vzr9PUqAfR83rnvi9ReAKbhwIzPK9fWXLPnuF4AHkLs1z%2BJ%2F5qF22tmdQehA6LAPv&X-Amz-Signature=230753bbd5c41a791cdadad3f73b509a9784499cf144884626634107fa341e47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KPJ2GP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6ONtys3lz5OYYtI5XkVVJg20vtNExForFsxQ76fMXGAiEAgZqwjqwYYhAoJWy4x9xxMmz9%2BF0P3xPPe%2FgsUNbzkHsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBCqXJUnwvCQFOICwCrcAzAgP2R%2FNTvdAMMoqpGwioNZJelKKMxrcn6J5dah%2Fp3Hdj9LVbYOD9E5yXQz6ZLsadkEe8bzvi6g9IQ9jp%2BxVjoYZ%2BuUHJDsvGNEQ7xyApoKYRuk6AwP%2BAkY9OqbHcRLkD8ksLSxnujEZnn1A6ZXFDdoUSRigNBy0AuUbZUGo0sl7GyuE5UoYjssgiSf1UeTtoZ3UfOxwCPF2Ecekn8SB43rW1QQxDoxZqHZdJIubACaKzCqemcBK9ttTDgUkgPoUPO6t3ECDsTgl5iB0H4Y1PzTqMhVkSPAbi%2BY5aT2TK7xk0SuvfECvkmqnEF%2F%2FwKTpBuV75vaNCQPZA4cstY01B%2BJsKFJutVcyC86Pa7bq7Ar9QsRvvE%2BZJE1yErPb3h1riA9rBVnN2bzVTY%2BYvCiYj0n4shI%2F6mFDQv3LJgRQ156Q164%2BpN91tn0NgGIAv43aHSxM47iT288VXoD%2B9Il35JrAunYxBbULw%2B5PqFi8J7OOw9Kt2YE9wN8G%2BOd2riz7MPtGHVs1mDMWNFQjIKXG1mkG69nMHv85Fp1MxR6nFH11JF9Q4J8kl6SmUcF90W3Mh%2Fl5dauF3xeV7L1DPT17Avg7nZkcvDquDSWhOrM3wvhKInErLzBFqzMM0c2MIPv1b4GOqUB57iEIqvmuUEGUh6OAcGsyBHvRN%2FKjOYANPogaChPfV02c81pNh2U6%2BTNYsZ9TD2F82zfpxGA0tWW7nLInUETLY1olkDKF%2F%2B4emind2P4zeDsEdDNEqUYQtuWxu1f6AiEtk%2F%2FqK1iec%2Fck%2FuxDvK8fIOouhV2EcXP%2BAUnwJdsxv32twjVv4mdOUWU7ksLtuYm2ukjk4USlCf6OrXRaAuSf3UkVFtH&X-Amz-Signature=4c8fff6e77cd37f22101d00008d1f74f3036fa3687f42f585c6cc6c71400f435&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
