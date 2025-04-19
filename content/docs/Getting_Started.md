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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6OCDUJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAHpP33e6HeD7oIxCtIbAlVyqtjDBDqi5TOSXJ72S0nNAiAlDnqgTJaIGHNCpgd2cp%2FKjSsAaVmGcKz9cBoQ%2B8YNYSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjJvt1ZnrvHC312%2FKtwDq9aDsAvsj1YKBtir8KDO6R%2FdSh4qMo%2BxhfPWNkyvAbv0nKnitoOkmW7r%2FLFVUZ143K2I%2FFo51gGmkAxH4dJt1a%2Fx5hTTFnO%2F9TlLFjT%2FChDFuXdIoGYwzM%2Fiymt19GCGgjuLb23emwUAyv98KWmRaKvjueZNYnoBtBLQtuMUqew1blr0Ht6p32Ucnb6JClKbcodYS3xLdtle8DXTG82dP773Nm83L8L2NtceoiFdFdIlK4Vfixo2wqAOlg3tHQpJxHQBq36leJWKwtJnkLtn8TDPs4mKubDfNAwetwtdReOGvV%2B7UHovxRgh6REVUrpKoJheUcvAt9i1OmcGBmsTQMZDHDdrX0J4Mvhs8yhn58tH6ABGnmyoDXPlBnaUtwT1stFgQZaTBZoim3jb2MIiinxM%2Bml%2FIxewS5Gcfur%2FbGAOwodUseNs6sbcONakKVDS3emcFdWHnUYOBrVBlTg0d%2BkNwDw%2F1x5iKufQgcSwcfUQmbwOunpYH%2Bbusax7pJmpZJ45Eti1u9oBs4ok%2FstIGU%2FTlTS8nk48EOTbwccNJe3yCDz9%2FXw5cdNk4nfAuABzObaGb4D0TimeF2SzjVSDDVKNe6RrY1mRpTWPC73jUgg8szXIZ6Bcjm%2BZngIwkaCPwAY6pgGZRYQL9pkLExrLIm5EJ4h%2FzVewU1Me1k9sNt1s%2Bn%2B%2F1kE67oZDngwXMuKxOgAPlPAkf4S73uTUH5RWrhnadAFDae2yDo5CgQ16yGDmBdDH9C1epVD10S%2Foe6jla7sMErRNgYeSC%2FaBbgXmF9aSpWnbFBNc%2Fc56eLn8tVkfvz%2BkQSIDuk4yi%2FHxt9UcBw0wujiD5gbZaOVzZf5rh8bA54mHGBxkJoEb&X-Amz-Signature=40a22199b83814fa2aa1bfc6238d027b69659072df54b64650d57da1918678cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6OCDUJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAHpP33e6HeD7oIxCtIbAlVyqtjDBDqi5TOSXJ72S0nNAiAlDnqgTJaIGHNCpgd2cp%2FKjSsAaVmGcKz9cBoQ%2B8YNYSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjJvt1ZnrvHC312%2FKtwDq9aDsAvsj1YKBtir8KDO6R%2FdSh4qMo%2BxhfPWNkyvAbv0nKnitoOkmW7r%2FLFVUZ143K2I%2FFo51gGmkAxH4dJt1a%2Fx5hTTFnO%2F9TlLFjT%2FChDFuXdIoGYwzM%2Fiymt19GCGgjuLb23emwUAyv98KWmRaKvjueZNYnoBtBLQtuMUqew1blr0Ht6p32Ucnb6JClKbcodYS3xLdtle8DXTG82dP773Nm83L8L2NtceoiFdFdIlK4Vfixo2wqAOlg3tHQpJxHQBq36leJWKwtJnkLtn8TDPs4mKubDfNAwetwtdReOGvV%2B7UHovxRgh6REVUrpKoJheUcvAt9i1OmcGBmsTQMZDHDdrX0J4Mvhs8yhn58tH6ABGnmyoDXPlBnaUtwT1stFgQZaTBZoim3jb2MIiinxM%2Bml%2FIxewS5Gcfur%2FbGAOwodUseNs6sbcONakKVDS3emcFdWHnUYOBrVBlTg0d%2BkNwDw%2F1x5iKufQgcSwcfUQmbwOunpYH%2Bbusax7pJmpZJ45Eti1u9oBs4ok%2FstIGU%2FTlTS8nk48EOTbwccNJe3yCDz9%2FXw5cdNk4nfAuABzObaGb4D0TimeF2SzjVSDDVKNe6RrY1mRpTWPC73jUgg8szXIZ6Bcjm%2BZngIwkaCPwAY6pgGZRYQL9pkLExrLIm5EJ4h%2FzVewU1Me1k9sNt1s%2Bn%2B%2F1kE67oZDngwXMuKxOgAPlPAkf4S73uTUH5RWrhnadAFDae2yDo5CgQ16yGDmBdDH9C1epVD10S%2Foe6jla7sMErRNgYeSC%2FaBbgXmF9aSpWnbFBNc%2Fc56eLn8tVkfvz%2BkQSIDuk4yi%2FHxt9UcBw0wujiD5gbZaOVzZf5rh8bA54mHGBxkJoEb&X-Amz-Signature=cb9b918a19a582cdc4bd19a126b6bc15de0fefda500e3af8457c565ccbb33e7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NE4TDFY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEsmmbQeOKrGW9Rh3eNMOrbyxf3sc2Jfb8ttSbzml2zUAiEA92fhN5%2FLmPN1%2BrtEmUX6u0u3qVARVKHUE5kuGLOcMRoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqPAS%2BWuPqclAovySrcA6FG%2BOysDkd2EtXsPnbhaAkcj%2BWWyuQPZVJz2G7d0nVFGPBmPP13Mjq9IIh6omqIS4jEUyqA88qw3QgA%2Fv%2BHSAHjeisgGmzjGqm03S%2FsgRVpCQGP6ZRmiHtdGW%2FmE6vz8DmL8tEQtwkeiY4uM0NE91B8P2pg7V0V2wzvsMFu6OeB14oZmahO4XF0StVHWu8IgflVVkJuwjXQkspZp7BC5Tqnd6mpRLJm0HMNyxV8gtUhNp0we36MZRigm40L7eLFDPvC%2FBu2RxQ2Ahyq7SHlvEPv6WnOO0NdLERvUd2%2F%2FDMlHkTBCpZmCmfZS76PSxDurSukIgWtAqoXAK6Et3atFrs0%2B%2BX92bbU4HpI1r13Q56bgoRsq6GGSnqzCpCrAkFM%2FixqML7o3xDs72RNaG2SDFuDmUlt0qfWO9bcnekwCBOI4L3pVaeoKTHiHuo20CghPGo7oZZfBLC9H1l9%2BDxPELnK5bcQ%2B3HtKSnbZ%2B0GraLHaKBvMnpRje3PZQmc4Ww9dLOoiuEww78YHhkhMVNOag5bkZMPyyg%2FK14wR0k9Es15WeaR%2BnANjvhN2EM304bdIH6JdVJS8wXkAamTyrf4aVjhGQuW0RCRwZ0lvIol0ytbTMQFNVwhuA2AmRLDMMugj8AGOqUBeCidivIHTRNB7dYAgPmhbfNeACL%2BgaEVMFdzjs9pkmZCyIZ8awQzFc%2BxuxXpYrbspYFgyy9%2BnUkl7TaolTh0cP5N1g%2FMVb9LsAG%2FXAd7dSWCztL8kFDozk37T8%2Fu3ezn6bo9hfMyV0s%2F3iGx1DcNIwWP2nub0B29WY%2FQ2d%2Fhtj%2B2V6mHRZDL3KwpKTIp%2F0Oy%2FFCOFFhZEMId3ZbrvaIAIA%2BnHPWl&X-Amz-Signature=38cd6eee1242a2569f9c0cf1efc8ce194e803b4ddf0ecad751a5dd7c9d302d05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDL7I2Q%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEdsPRSDQDm2rRdgHUU2tLdabcINpttN8rMoUF%2FQvmLcAiAIlqraB6J58l8iQmJAWC9%2FyBawOMNlVB71CU6y7VqO7iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFi6LGn9tNgW4xIK7KtwDbbuy8uoXqz8RBSHEbLfxESO9QIQdMwUWxBkhKNAt5vMqVbe4KxJlHm3Zh3OU92Mw7UUbbHA%2FP1cyuZT6KO6X3CIVtqmxzgJT0SgsVSLL9i83IYMKQ0HJb%2Bw7AdAbJo%2BXkimaeKEW0qBU5dCMOOyurNzrjWtJFHF747Pp5f2yfssAwZZ%2F2NR7rmZybXmTSZtbo0zPGO3Jv%2FrpKS1%2F5f3uiyhEthPdYUfDOjVgsI1sfZg9oscv84B%2FNSfau2K9gDxMCfQYMBuX4jOg%2BFiKqrbzZHlNFt3sxLkSh5OqIVvAfs1%2BXGjqNjIJ11avH1IDbNNggUvaaf%2FXPaDKksSHHAKnVjtrkzA9S5Mxt%2FBf9QJzDm22W1l9tPHciIAs3YIXNlumfM3D0OfJVPOssDMtCQ%2F4aqQ79Bj%2FVW4EBDIJH5TG0WdE4MTKbNFNyMlL5BM4GZUbRsgEfUQ2XuZNyOguE3ZAAF9dLNE2qr24aNiNn1FwgLZ2C45EGhvvEThlHT2LDoC4Do2uBboXxz9rM76Sw39ygaOIvaQh5Hb5exfh%2FDUENjlj%2BbmjWZPV%2FrnE9P5ND5U4kawGqWrVnFujIk1AQhnK7GE%2FX0ylqUSXI%2BLrs5SHIH83oSn2qq8YpfswnzcwgqCPwAY6pgGz%2BxiRO0yAUElI3RJxcEnUt5IuLX%2FY5GvL6pY3zQuW49dBPFNjFQyDDcCOa8mp3DNeh9LvEW9Juh1eyzKqs9FRGGWgaxwrqBkXsJ5FUz%2BCbyzC2OvHmcu8cKjhwmxQe6y7Xl34M4%2B5LHzxyz7Zj416QTueUKLyJtX9ZhpnE0L2H06AgQ3ikO71Ye7QTzPFSSZ6KQpI31OUESVtC6qvjT98VC0umOcZ&X-Amz-Signature=e803396a843b01544d6195b11268b962ae2426c5d85470efeec4980069ae8a59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6OCDUJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAHpP33e6HeD7oIxCtIbAlVyqtjDBDqi5TOSXJ72S0nNAiAlDnqgTJaIGHNCpgd2cp%2FKjSsAaVmGcKz9cBoQ%2B8YNYSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjJvt1ZnrvHC312%2FKtwDq9aDsAvsj1YKBtir8KDO6R%2FdSh4qMo%2BxhfPWNkyvAbv0nKnitoOkmW7r%2FLFVUZ143K2I%2FFo51gGmkAxH4dJt1a%2Fx5hTTFnO%2F9TlLFjT%2FChDFuXdIoGYwzM%2Fiymt19GCGgjuLb23emwUAyv98KWmRaKvjueZNYnoBtBLQtuMUqew1blr0Ht6p32Ucnb6JClKbcodYS3xLdtle8DXTG82dP773Nm83L8L2NtceoiFdFdIlK4Vfixo2wqAOlg3tHQpJxHQBq36leJWKwtJnkLtn8TDPs4mKubDfNAwetwtdReOGvV%2B7UHovxRgh6REVUrpKoJheUcvAt9i1OmcGBmsTQMZDHDdrX0J4Mvhs8yhn58tH6ABGnmyoDXPlBnaUtwT1stFgQZaTBZoim3jb2MIiinxM%2Bml%2FIxewS5Gcfur%2FbGAOwodUseNs6sbcONakKVDS3emcFdWHnUYOBrVBlTg0d%2BkNwDw%2F1x5iKufQgcSwcfUQmbwOunpYH%2Bbusax7pJmpZJ45Eti1u9oBs4ok%2FstIGU%2FTlTS8nk48EOTbwccNJe3yCDz9%2FXw5cdNk4nfAuABzObaGb4D0TimeF2SzjVSDDVKNe6RrY1mRpTWPC73jUgg8szXIZ6Bcjm%2BZngIwkaCPwAY6pgGZRYQL9pkLExrLIm5EJ4h%2FzVewU1Me1k9sNt1s%2Bn%2B%2F1kE67oZDngwXMuKxOgAPlPAkf4S73uTUH5RWrhnadAFDae2yDo5CgQ16yGDmBdDH9C1epVD10S%2Foe6jla7sMErRNgYeSC%2FaBbgXmF9aSpWnbFBNc%2Fc56eLn8tVkfvz%2BkQSIDuk4yi%2FHxt9UcBw0wujiD5gbZaOVzZf5rh8bA54mHGBxkJoEb&X-Amz-Signature=aad7592852c88e28a51afb7b83da7e833b7bf032ff784cf2d20d531c14066edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
