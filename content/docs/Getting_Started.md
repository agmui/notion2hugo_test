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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5DMD4L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCcpmfnpY2uScMQSNDhuZt6nvl7mp9g7SxKSDsl7WFSwIhAL90P4Y0lxF7QqReGvvoCH1ExfaWV4%2B9uCFfsxx4U%2FzRKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUpqdtx5fvC0pUcPUq3AOQoJ4iaUnDUnjyBtphYeb425bVUy4%2FfqEXmPOlKUhOPhNBeed9Mo0W7vXcCNpuALM8RLeO3Ncm94hbgn3DvLLUbPwoQQk9gd0be8d7JGPgJ5PiaIn7HqynPHD1dHaFoK%2Bbt%2B4CW5M9%2FUjlPsPb%2FeAoRy5njU467dJ%2FasrYbkk%2FYSHJsUdrZQrHbUSE%2BNjx6p6yTPWqYz1xqLmWbMUppTMDc0MfAmn%2BAH7o2TkCREYyaKiGC91exF%2BBZSbft6SgnQlDTKvRBG04g12KlC72uWwOmLdV3r%2BEWduPMWngFg%2FdERzXDnqeUyueYgKNgVmKiCv6tyZ7TcKASp7hF5pjzznZy8X5JYBZZd4ddX4rv%2Bf%2FXAWEt%2B%2FcNewWzCPIJrFvXgBixFpHPvUOPUW5f5Ax3ecoBGsIbeI7ObtTHM3rdfolKb%2BNwMrvtXP5Llcref7FM6EtK9JHs0LOUZhnJbXD1aBNTLQbMnsKBIBumLpmwfV8mqyJbZ6XCMvjxOpgJ7%2F3%2BF80FNOQprKzhOol6EHDOEueOWif%2BS1hy9LPs6PLDLYFvnnF4aUjmABKe%2F%2FK05dvD6mnEyKvomy4bCVo88qDjH5IeHJt%2B1iXAvUlMATMdHgLu26T%2BQSfrr08eiOfFjCA25a%2BBjqkAVGUaTNMTpOMEmWQs342F8c94W%2FnR%2FhohlxD%2BPk320%2BVPhWT9MjlITuG1oiksd4PXuIxAjGvZpkjTjASV03hkSM6wWC1%2FqSxOdmLX0pKLcWS7AQXVqBrYiWpUYd%2FKbdSHI43c0aXGgUgsaqUpanVwCaujfOdSjVuCZGzSKeFxUR1GVdx9hELweWdIpqlERCizV9JMXWTlHkRzAy4q%2FujlM5hnH%2B2&X-Amz-Signature=4b2956d576b7f6d3798f58ab0ab039e9449d24f1fd59a2b008b57b9409b90487&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5DMD4L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCcpmfnpY2uScMQSNDhuZt6nvl7mp9g7SxKSDsl7WFSwIhAL90P4Y0lxF7QqReGvvoCH1ExfaWV4%2B9uCFfsxx4U%2FzRKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUpqdtx5fvC0pUcPUq3AOQoJ4iaUnDUnjyBtphYeb425bVUy4%2FfqEXmPOlKUhOPhNBeed9Mo0W7vXcCNpuALM8RLeO3Ncm94hbgn3DvLLUbPwoQQk9gd0be8d7JGPgJ5PiaIn7HqynPHD1dHaFoK%2Bbt%2B4CW5M9%2FUjlPsPb%2FeAoRy5njU467dJ%2FasrYbkk%2FYSHJsUdrZQrHbUSE%2BNjx6p6yTPWqYz1xqLmWbMUppTMDc0MfAmn%2BAH7o2TkCREYyaKiGC91exF%2BBZSbft6SgnQlDTKvRBG04g12KlC72uWwOmLdV3r%2BEWduPMWngFg%2FdERzXDnqeUyueYgKNgVmKiCv6tyZ7TcKASp7hF5pjzznZy8X5JYBZZd4ddX4rv%2Bf%2FXAWEt%2B%2FcNewWzCPIJrFvXgBixFpHPvUOPUW5f5Ax3ecoBGsIbeI7ObtTHM3rdfolKb%2BNwMrvtXP5Llcref7FM6EtK9JHs0LOUZhnJbXD1aBNTLQbMnsKBIBumLpmwfV8mqyJbZ6XCMvjxOpgJ7%2F3%2BF80FNOQprKzhOol6EHDOEueOWif%2BS1hy9LPs6PLDLYFvnnF4aUjmABKe%2F%2FK05dvD6mnEyKvomy4bCVo88qDjH5IeHJt%2B1iXAvUlMATMdHgLu26T%2BQSfrr08eiOfFjCA25a%2BBjqkAVGUaTNMTpOMEmWQs342F8c94W%2FnR%2FhohlxD%2BPk320%2BVPhWT9MjlITuG1oiksd4PXuIxAjGvZpkjTjASV03hkSM6wWC1%2FqSxOdmLX0pKLcWS7AQXVqBrYiWpUYd%2FKbdSHI43c0aXGgUgsaqUpanVwCaujfOdSjVuCZGzSKeFxUR1GVdx9hELweWdIpqlERCizV9JMXWTlHkRzAy4q%2FujlM5hnH%2B2&X-Amz-Signature=805e6dd85e952e584203840c570c6fdf2f84a493eaf6bcc9e6bedf8eee18fe19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QL5ONPJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKLgrEHvg0AEH9Cg8Z8bDongYMRTOTz4NoGHsBB%2FRFAIgF90ePNoTuQ6B5xIKk7hAzqGCP%2FR0JD%2FWx3KS42Cue%2B0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6iWni2wUbdSWRtNircA7XCZy0E6RW7XP6pGiFpyybAyNnJgt%2BdH5s%2BvJgSShdG58aYqZ4ENvW3AYStjVI3a2u6kKgWgopHv41lil6BKqg07j2dDJNZ4tJ3l8shjSXIEUEcmNwZ%2Fl4aUjhR33CNB5BNaYDXxQr%2BWut4vXS3whe0BVpoA%2BhgNigNpNuGr7Lgy5Rf1ZBgkhgboIEKQ5m8yYtllinwvog9ZbisrKzna9j1DOkN0YSon2H%2FV%2BTZX599hEK5ked201z7S1udHUEWohdjUnBBT6uZQP69wtfb5K40WBtBTx8j74UjuxdCPhA8qf0rPtfjqK%2F79d%2FFLPPsHLNsl9qU%2FRzFc7CVusHtUmyKcMT9L3ZyNr0qd29%2F0UT2nB5g2m3EY67kxEfO48irYuxTw2o3z9ibmPrcBF5e6FfWZECoDcfR2pwi78l69JAJT2SemoiN%2F7n%2BGfHWF%2FaKRQw%2F%2FVkV3JwX03Yo%2FuUjPaEnM%2BcGDXezfvaFgGBY%2BcRivfu8mWnt3g%2FTs9KoEovE9JvwwK4LL%2FIAzSgfogxzrvgQtFhFhvB8ITt8uj1oYVmbwbcONUlmfHtvMzoPxcwyFMixlWmKfXZp3GA3i5bjJUBPiQPFTeEa56ZIMWD2t4tdp3JQOqeVONDFoM1nMP7alr4GOqUBisu9L%2BhMNR4oBhTsUH27YThE7UUIxHkBmjjjxLgRuP6uRNV3rOH05bruiQqHZQSF5SWKG1v9Mk2TqtqzBymJuDH35eAedrZCo6R5AUpGFU00kg%2F7B7AQsWHROcRCuUn6uuZy%2B%2Bk4tJp%2BPVJDDsTEyZ6%2BRHaatr5YdpoGckOHvs4B8NO9Ez9SgymiRFFzh%2FE43ZqRtfZgGgqUEBueP2La49DqtTTz&X-Amz-Signature=c7433a81c3e106ba3e724ed814c6ed4773cd4b95dd146c23f4d02aa61c02feed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHHFHMY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxEitl6C7SUICKSApKBLZ7tJRf4Wit%2F3wnmVelwS8XJAIhAORbEmCHkUP9Ln1aJv7NxCCBwOpAZ8lAVIt9fgCT7mhLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdHn3jjEMO80pRXloq3AOhX9IHZqpMg2zZTw9cUBPE8B5iWaRWUPIpQ%2FZxpHEc4JdYAAWf54on11Bejdsv8KGsENwAPgK%2B6RFmFg%2BBRFL62xyoXYL8DChDfJLuiBv170tSiuPaNDu4D5JPklQTPvDEOZtudR6aCdm7sOtby5ZpQB%2Bz1X3fZUVzwdto0b3VSJlgJRK%2Bjh1vxtnf1dpDB%2BUBRVn4qwBCwZxMGIizrpfzwP0QOa0TQCYfhjxwNgw0nrcToBbFxyJzta%2BLWXchIwMQ%2BldpZBi7NvaGKnLf4oaCaqozM91EkiJR3%2FcOr0QnHMvHfFmx%2FA8armNHe3kIbvQrlRL%2FetVdKM0nQw9URh7CN63Zo6d11sSeJy76mYG4ytqXNu1kbofIISntqtZyhCGAXKa3%2BMgR7BOtyuR911jgTWxh%2F6C35%2B6cHtZFdJXkF0Lp1AIWaEJYPz9Iq%2BE8sJWXVsuwKW13jxSRcy12rZClgVr0BWS71fqXp4r3htN5HRQ8d4KBeKY6UKLZxvbC2v4izYvrc6d2Tyhq7PWR6GxRz6CYB4tJCzeRnwcRmjG9lZJZCmd6lwYaLHBfW1lgHLLZ7q1H1%2BdpXxeheM5NfdVvYqNCDiqqNT%2BDIahW6yu64ibcmXA9aH0L1LD1VzDA2Za%2BBjqkAfYKSpq5ZSKc8du%2B6P6IrWtkTobEC%2F87gUoJCvgwAIXL%2BFrXOwrH3eAg0hVyr95cDcK9ty4wK%2FGZWDp71KgZe22XBAGF43RO3Y%2FdwJNeG9zhP5xZNT9MD5xar7Q%2Fq0nSSitGUmHtudd1HaIxjOxtHsayJ00BdKBgYkDY8lKtnzjeB%2BeNej5j8%2FwkhfE4nEmmm6DEx1p3yiAX9PrK0my%2FfsZnDweg&X-Amz-Signature=b407588a911877f1fd845a9ec83850a9a1f508a155198d4bc92ebd0ec758649c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5DMD4L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCcpmfnpY2uScMQSNDhuZt6nvl7mp9g7SxKSDsl7WFSwIhAL90P4Y0lxF7QqReGvvoCH1ExfaWV4%2B9uCFfsxx4U%2FzRKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUpqdtx5fvC0pUcPUq3AOQoJ4iaUnDUnjyBtphYeb425bVUy4%2FfqEXmPOlKUhOPhNBeed9Mo0W7vXcCNpuALM8RLeO3Ncm94hbgn3DvLLUbPwoQQk9gd0be8d7JGPgJ5PiaIn7HqynPHD1dHaFoK%2Bbt%2B4CW5M9%2FUjlPsPb%2FeAoRy5njU467dJ%2FasrYbkk%2FYSHJsUdrZQrHbUSE%2BNjx6p6yTPWqYz1xqLmWbMUppTMDc0MfAmn%2BAH7o2TkCREYyaKiGC91exF%2BBZSbft6SgnQlDTKvRBG04g12KlC72uWwOmLdV3r%2BEWduPMWngFg%2FdERzXDnqeUyueYgKNgVmKiCv6tyZ7TcKASp7hF5pjzznZy8X5JYBZZd4ddX4rv%2Bf%2FXAWEt%2B%2FcNewWzCPIJrFvXgBixFpHPvUOPUW5f5Ax3ecoBGsIbeI7ObtTHM3rdfolKb%2BNwMrvtXP5Llcref7FM6EtK9JHs0LOUZhnJbXD1aBNTLQbMnsKBIBumLpmwfV8mqyJbZ6XCMvjxOpgJ7%2F3%2BF80FNOQprKzhOol6EHDOEueOWif%2BS1hy9LPs6PLDLYFvnnF4aUjmABKe%2F%2FK05dvD6mnEyKvomy4bCVo88qDjH5IeHJt%2B1iXAvUlMATMdHgLu26T%2BQSfrr08eiOfFjCA25a%2BBjqkAVGUaTNMTpOMEmWQs342F8c94W%2FnR%2FhohlxD%2BPk320%2BVPhWT9MjlITuG1oiksd4PXuIxAjGvZpkjTjASV03hkSM6wWC1%2FqSxOdmLX0pKLcWS7AQXVqBrYiWpUYd%2FKbdSHI43c0aXGgUgsaqUpanVwCaujfOdSjVuCZGzSKeFxUR1GVdx9hELweWdIpqlERCizV9JMXWTlHkRzAy4q%2FujlM5hnH%2B2&X-Amz-Signature=6d1d8d16a43d6e441d1e7f13135de1d532fb250b04f4c63d29419133a24e66bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
