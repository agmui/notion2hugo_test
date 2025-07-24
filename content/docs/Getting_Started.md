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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJEG24Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCIg3y65u8JGHkq4KSX1CI4nn%2BbV64KTwJcp%2FnYNftsLAIgGxZq33jBcHf2suVS8%2F7jqoYhElLJcaf%2FirpzjcVnec8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIHia7btBeQopX5AwSrcA6jZ5yL%2FsAjrweg7FqHlMN12LkW609qXASBID4JaIi3kUZPPN9IRZT1CKKr%2F52xUIKlyDoBhp2xs%2Fk8vNPFi%2FZ7XMM8eClQdolptf9wxocnJXpprYtlB0eeK1PrrJUa4lDNQYQiF1cAB0Gq8DmyD6RB6gL82EbBe%2Fo08%2BxyiJNgwoTw1bqqqd6%2Br%2B8h7v4mWHCt333uIksQdcJEmc18N92QpooQoxPT4Yh%2F5DF%2F%2Bqw3OQvSOCJpfYtEWRrCZONzJrOn2SnhpqvsBncl3RGl42Nc9R1YUyasmDLk5iM4p7tj0%2BG74EpQnJlb6%2Brpxom1eTk4Ob%2FlwPqiMeE%2BNfXQsdyUMmjuPxUkmVkfr1ww68Sfs3usoaOEEMpblrFVG%2Fnu0owkDhyn2ALItOmxwi%2FXt192E0SzJBJXa4%2BMe25ltbgAHqKZo9nEgKojdqMDmKxca5soPZPsyL2gxxrE%2F%2B0g3CElywqhq4pE0Qtin8KZdK9uTCzEOqw7EkZLaonboT9%2F7XykAmZLG7wlzxNpZAFJoQUqZL1orLVbGEHf7Q225sipGDOujpypcgdJj1SRXBvstcTsKMUsGM7mruMUYb0%2BE4Rf4vC%2BNGiWWOKRT1zrk5FpmLi4B3jfufcNMpEd7MPu0isQGOqUBTGrtNp%2FLT%2Bo%2FJZ2NldrbjJVXynwsDKhr3MoU4bsVB2ogYV8dFIUaiLPHZ%2Flrkg3siMI6hUMnaJP84h9zRn77nGXMMCsjC8CPBcN3qaV6f3czYzg0F%2F77apIXQU8%2B%2FhiCvuWOg8w9jilbC0SD0g3A7Ip4jOFNLQ1gfKpwK8BadzeFKwV05ZiapAhmPOImXXatr275W92zVDNGeYERx7VKAkExzTmw&X-Amz-Signature=2176461c1a40ba88cb80ccf2609716972abfafc42b761c89552e4437a691a51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJEG24Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCIg3y65u8JGHkq4KSX1CI4nn%2BbV64KTwJcp%2FnYNftsLAIgGxZq33jBcHf2suVS8%2F7jqoYhElLJcaf%2FirpzjcVnec8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIHia7btBeQopX5AwSrcA6jZ5yL%2FsAjrweg7FqHlMN12LkW609qXASBID4JaIi3kUZPPN9IRZT1CKKr%2F52xUIKlyDoBhp2xs%2Fk8vNPFi%2FZ7XMM8eClQdolptf9wxocnJXpprYtlB0eeK1PrrJUa4lDNQYQiF1cAB0Gq8DmyD6RB6gL82EbBe%2Fo08%2BxyiJNgwoTw1bqqqd6%2Br%2B8h7v4mWHCt333uIksQdcJEmc18N92QpooQoxPT4Yh%2F5DF%2F%2Bqw3OQvSOCJpfYtEWRrCZONzJrOn2SnhpqvsBncl3RGl42Nc9R1YUyasmDLk5iM4p7tj0%2BG74EpQnJlb6%2Brpxom1eTk4Ob%2FlwPqiMeE%2BNfXQsdyUMmjuPxUkmVkfr1ww68Sfs3usoaOEEMpblrFVG%2Fnu0owkDhyn2ALItOmxwi%2FXt192E0SzJBJXa4%2BMe25ltbgAHqKZo9nEgKojdqMDmKxca5soPZPsyL2gxxrE%2F%2B0g3CElywqhq4pE0Qtin8KZdK9uTCzEOqw7EkZLaonboT9%2F7XykAmZLG7wlzxNpZAFJoQUqZL1orLVbGEHf7Q225sipGDOujpypcgdJj1SRXBvstcTsKMUsGM7mruMUYb0%2BE4Rf4vC%2BNGiWWOKRT1zrk5FpmLi4B3jfufcNMpEd7MPu0isQGOqUBTGrtNp%2FLT%2Bo%2FJZ2NldrbjJVXynwsDKhr3MoU4bsVB2ogYV8dFIUaiLPHZ%2Flrkg3siMI6hUMnaJP84h9zRn77nGXMMCsjC8CPBcN3qaV6f3czYzg0F%2F77apIXQU8%2B%2FhiCvuWOg8w9jilbC0SD0g3A7Ip4jOFNLQ1gfKpwK8BadzeFKwV05ZiapAhmPOImXXatr275W92zVDNGeYERx7VKAkExzTmw&X-Amz-Signature=8ffa2dd3d5a9b07545b43576027c60a67210e4c9155208ce0caaafbd1bf2b0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJEG24Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCIg3y65u8JGHkq4KSX1CI4nn%2BbV64KTwJcp%2FnYNftsLAIgGxZq33jBcHf2suVS8%2F7jqoYhElLJcaf%2FirpzjcVnec8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIHia7btBeQopX5AwSrcA6jZ5yL%2FsAjrweg7FqHlMN12LkW609qXASBID4JaIi3kUZPPN9IRZT1CKKr%2F52xUIKlyDoBhp2xs%2Fk8vNPFi%2FZ7XMM8eClQdolptf9wxocnJXpprYtlB0eeK1PrrJUa4lDNQYQiF1cAB0Gq8DmyD6RB6gL82EbBe%2Fo08%2BxyiJNgwoTw1bqqqd6%2Br%2B8h7v4mWHCt333uIksQdcJEmc18N92QpooQoxPT4Yh%2F5DF%2F%2Bqw3OQvSOCJpfYtEWRrCZONzJrOn2SnhpqvsBncl3RGl42Nc9R1YUyasmDLk5iM4p7tj0%2BG74EpQnJlb6%2Brpxom1eTk4Ob%2FlwPqiMeE%2BNfXQsdyUMmjuPxUkmVkfr1ww68Sfs3usoaOEEMpblrFVG%2Fnu0owkDhyn2ALItOmxwi%2FXt192E0SzJBJXa4%2BMe25ltbgAHqKZo9nEgKojdqMDmKxca5soPZPsyL2gxxrE%2F%2B0g3CElywqhq4pE0Qtin8KZdK9uTCzEOqw7EkZLaonboT9%2F7XykAmZLG7wlzxNpZAFJoQUqZL1orLVbGEHf7Q225sipGDOujpypcgdJj1SRXBvstcTsKMUsGM7mruMUYb0%2BE4Rf4vC%2BNGiWWOKRT1zrk5FpmLi4B3jfufcNMpEd7MPu0isQGOqUBTGrtNp%2FLT%2Bo%2FJZ2NldrbjJVXynwsDKhr3MoU4bsVB2ogYV8dFIUaiLPHZ%2Flrkg3siMI6hUMnaJP84h9zRn77nGXMMCsjC8CPBcN3qaV6f3czYzg0F%2F77apIXQU8%2B%2FhiCvuWOg8w9jilbC0SD0g3A7Ip4jOFNLQ1gfKpwK8BadzeFKwV05ZiapAhmPOImXXatr275W92zVDNGeYERx7VKAkExzTmw&X-Amz-Signature=39cce8a501492238b528b71f1928ab5eca24942cf4c8e80cb2db0680ccc5cbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MO6FDBN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCVQUDK6klHhB9Bpa97t%2BwZsVtp%2FJl02xxHJfdD%2ByZk5AIgToNK2HE5RuaYTOBIsb1%2FE3WNKtUwHL1VkB4Elfkrb6Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGLgm4w%2B2ndAPUjXUCrcAzkND4FMsnU6M7OQUaALHAoBVcEs0QaqqRVBzkDCejGhEZBr7yTPW7C4s41PGDkfiBiwBCT6wUYwnnEoW1ASH56Du1TaKS13CWOF7bYueEM6Cnmn2IXgWqj75bEgUvaA100s2%2BomzKcSBMiW9edTydtRAoTAtdpwSo16RpJ63RRVwEeL%2FTWYPbCbQJLFurkElIIu4NtackOv30SeGkXKx1HfblQ2NWOdL6Zu%2B9zqJG91SOZjAmyI7W2b3aC02uOfpTPZ6pBvN6NJkU6ooQugGQeTTnEfZb9ToC2iu%2BCQVkGyWbrhJ%2Bh7Bt3qqHtUakbAudayn9JIk7GgGZoMyPhye%2FBRlUyCINmmCHvXHhr%2FrwioTzeVkURP4JoM9E7PQ6IxPcR2Q%2Bv1p3fk6jg5NWJnbY52jWQX45R5sy%2BGp3IJjk5MRWXSyrS7uoE6RAfFStS14jAcmavp4QapSi0kxxkAjJt4gUQrfYPT1hNQU1WmJRokX3HIIhd6dGClKelKrpT9PKnBgWcqAa8mtDHLaeyCe5iSQz4aIMYffmf13pDH9QO1sU3sD5wmMFZtNJNc2tGud4dbH97Jn2IfZb%2BSVYtKqYZJT3ZxXzFn%2F6w1SDLcGE4GHcMqfzbLkVNxG1cjMJq1isQGOqUBUdQrs%2FskktFDnNK%2FqR2rDwBiM%2BtybiviFgm1MkgpbbhkAC9LWPP0evkJd8HWhtw699r3Ynu4jRM4MnGENkBCqHr9D4iIOJa%2FAr6UiNb%2FA%2BOObwgHozb3zNJRBqXuF0Ubik1EIOFJoQak2tXzcttIr7sLqkxj9mAiyoPWOAS2lpN9cbuxpvvhyLdB0iHPaR0FGacYBVaLXySnREHC7cWTchVqiytc&X-Amz-Signature=803da84fabfc8a82593f215f5eb9d3f7bd62b40ce715fc2eba26c510e8a2e997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDS2DFC%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIA6SEgM4wJgxLCXBXOLrxeuexnt1wlQIqqojBqrqUNpOAiEA%2FJA4aeSYj3nqj44mOChL%2BFlaqPsMJ018XQRul5YgnRYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNkjJgbOohhOktBq6yrcA%2BF5VYXke2pEeBHSQJG1LIdsbJo%2FRak%2BNphEa%2F8wSiVvrA3SNuDgAtkPy0t12GBFc7FrCs2N%2BjaA918%2BPBQQYjAJL3HmEhBM2ws5UzYqFdQFVy6YNHuibCY2AnLJST3y1mueS3LyAJAildrAzfEccwslNQepExiAw6MDYxv50HBLz4VUakKDUic%2BkgFtF0O9ggcMjV36ejZkjQUYJPUcVfhi6mQY4HXqGEnwr9ZGPwjZ5rjX5aOd5kapvPD7qgXLppkEuvMem6RFOPXh%2FocuYxk9dus7EPzPg2poF8d5RlMmSVYe%2FH6PMIE7sJpP1vJlPN3j0NRvPxL9tTTB%2FPjKxsqNNOqmlt2%2BV%2FJP5G%2FGkfStnBnmbralhdWsLmpmt4QtI%2Bc5RoAB6jjUAuv21x8FsLaaOvwZ7cm24MrIYKl75dQXOc6kbtrbG%2BLmxg47pr%2FkLxM%2F3MObMbfdEAvlWsMaVwd%2F%2B%2BdSge6vkcKBBrYMdHemmqpcaQMLySngwYQTPHTTgAUBGfriwlOMbllUdZMZtSaFjtI8raw3Ch227N2PTeTuaPAA%2Fe3myrqoc7tEUSRssoSpW0O1nFC7fwZk3%2B0wMFKJ0ogjLk%2Fx0Qiaj6w1Q7cl2pqoREXt0GIsBQWyML60isQGOqUB42kuxr2rx9Qkdg1Mcdt3onuCdiMT%2BOO%2FUbNuUpjK7t2dFvSIzjmuzzsH%2FTrAnI485%2BjMzSQyvqqUKcWfOX%2BBE46Zywx91cnA0Y6IsJhjKa%2B%2FjJSseFWoQQ3j4E1Qte0wGsUp%2Bt1bKxdEH3Sv%2BmdVlvV73ZFcwm6DNL1iI0k9OwxaGgCi26G2574Nt58KCrdQIpgLQ4DK6x1KCtzWv3NB1%2BcTaY3k&X-Amz-Signature=fe2a0dc37d61563b3a537a708b8c308a13423711bf4e0f0c0432dbdc092c8c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJEG24Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCIg3y65u8JGHkq4KSX1CI4nn%2BbV64KTwJcp%2FnYNftsLAIgGxZq33jBcHf2suVS8%2F7jqoYhElLJcaf%2FirpzjcVnec8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIHia7btBeQopX5AwSrcA6jZ5yL%2FsAjrweg7FqHlMN12LkW609qXASBID4JaIi3kUZPPN9IRZT1CKKr%2F52xUIKlyDoBhp2xs%2Fk8vNPFi%2FZ7XMM8eClQdolptf9wxocnJXpprYtlB0eeK1PrrJUa4lDNQYQiF1cAB0Gq8DmyD6RB6gL82EbBe%2Fo08%2BxyiJNgwoTw1bqqqd6%2Br%2B8h7v4mWHCt333uIksQdcJEmc18N92QpooQoxPT4Yh%2F5DF%2F%2Bqw3OQvSOCJpfYtEWRrCZONzJrOn2SnhpqvsBncl3RGl42Nc9R1YUyasmDLk5iM4p7tj0%2BG74EpQnJlb6%2Brpxom1eTk4Ob%2FlwPqiMeE%2BNfXQsdyUMmjuPxUkmVkfr1ww68Sfs3usoaOEEMpblrFVG%2Fnu0owkDhyn2ALItOmxwi%2FXt192E0SzJBJXa4%2BMe25ltbgAHqKZo9nEgKojdqMDmKxca5soPZPsyL2gxxrE%2F%2B0g3CElywqhq4pE0Qtin8KZdK9uTCzEOqw7EkZLaonboT9%2F7XykAmZLG7wlzxNpZAFJoQUqZL1orLVbGEHf7Q225sipGDOujpypcgdJj1SRXBvstcTsKMUsGM7mruMUYb0%2BE4Rf4vC%2BNGiWWOKRT1zrk5FpmLi4B3jfufcNMpEd7MPu0isQGOqUBTGrtNp%2FLT%2Bo%2FJZ2NldrbjJVXynwsDKhr3MoU4bsVB2ogYV8dFIUaiLPHZ%2Flrkg3siMI6hUMnaJP84h9zRn77nGXMMCsjC8CPBcN3qaV6f3czYzg0F%2F77apIXQU8%2B%2FhiCvuWOg8w9jilbC0SD0g3A7Ip4jOFNLQ1gfKpwK8BadzeFKwV05ZiapAhmPOImXXatr275W92zVDNGeYERx7VKAkExzTmw&X-Amz-Signature=f0859b50b08d4e9d491e111cde575aad05b1b23e9a1573cd937cf488d1722ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
