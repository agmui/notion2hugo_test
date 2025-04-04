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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZOIXGM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9t%2FsWvOjx8YzY8XzmfXU42QhUG67L3gF4UF6tKPNEyAiAcrQ%2Bm2xBMDQ0IQUQGYIZ6l%2F%2FpvKH5AIen2fhknP7gdSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMqz7z6Nfh2JQWBKjxKtwDAUCkaQIPIfDjPPLEZTahqw0GkW%2Fj%2Bo0KP15Ou%2FoJwss66zQso9YjYNPbAWME3NbTfyy%2Ft28hZALifglHGZOqcK81wynHcxh72SDt5xzVYb%2FUdqb6n2RP3UUDmD7H%2BHOexjCwON0Iwd4o3zOonu5A7aJXcGQzLkwjk5hxxuyswgRZKMcxmbGt%2FmFtkCNTVQfxOAsfBOKtnALaXX8cbPZ3cXUQL5j2dtWmFaA%2B0nZWlbNOhUc%2BipCPhpOeuMSP%2B85jR%2BED4S4bVsEVLxYhhkbt9YDu632o9De5XHUo92zq79agPCvYbBFzRSrjG%2BYzp%2FymPwcH9FwKBRA5hflnMv7BiJbKAlVDWuwXKQ5BCjdGVwXn%2F8WYZ3eLZmtKNlZ0Grvso57qE1iNe9fzrF%2FVE5YXoLApIBxWCPJ1fQUjPDnNRWg7bEJNhR6zv4J%2B0c0kNC9YkxmyNAaJK3PETxnetU%2FXqm0f%2F2%2FWd2Oh6x4cmKoSkGex252Sfb6rFCi6xAjEDgwtucJ6UAL%2BsLHAMDlr%2FoMdY8mVA6Halka7NScS%2FyN9dAenW%2BuuzWJBr0PuOmZGYWkCTvQP%2BiBjS6Nkmk5uKDWwtdsMLbk%2Fm0nu0Gb019Vr4s6y%2B2W2nzAB4I9R%2BBEw17zBvwY6pgHXCKHoPNHAXoDg2aFk7yUtobApxXKD8cXVugcGXHCJbTcyLSfcvOtkWYDXwd5FKt9bNPAh21hV4lwL8no3bj9FrIOG%2FxmSxKnpbkV%2FelKL9%2F%2BbdUo8nowRxz6odwp5an4XLKdf%2FZOoLrf3KDtr%2FHs63a0yYkFKzKdT2OUXDGh6wlwFEnqFl%2Fvq%2FvpSZobAMqfjyaRrZRXhYWcJSpAIeFIdcscGjt2g&X-Amz-Signature=7a43bb195cd6f3616f13206e33ad7543fdf1c6c718b9a4fcbbdc9a8964fe9441&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZOIXGM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9t%2FsWvOjx8YzY8XzmfXU42QhUG67L3gF4UF6tKPNEyAiAcrQ%2Bm2xBMDQ0IQUQGYIZ6l%2F%2FpvKH5AIen2fhknP7gdSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMqz7z6Nfh2JQWBKjxKtwDAUCkaQIPIfDjPPLEZTahqw0GkW%2Fj%2Bo0KP15Ou%2FoJwss66zQso9YjYNPbAWME3NbTfyy%2Ft28hZALifglHGZOqcK81wynHcxh72SDt5xzVYb%2FUdqb6n2RP3UUDmD7H%2BHOexjCwON0Iwd4o3zOonu5A7aJXcGQzLkwjk5hxxuyswgRZKMcxmbGt%2FmFtkCNTVQfxOAsfBOKtnALaXX8cbPZ3cXUQL5j2dtWmFaA%2B0nZWlbNOhUc%2BipCPhpOeuMSP%2B85jR%2BED4S4bVsEVLxYhhkbt9YDu632o9De5XHUo92zq79agPCvYbBFzRSrjG%2BYzp%2FymPwcH9FwKBRA5hflnMv7BiJbKAlVDWuwXKQ5BCjdGVwXn%2F8WYZ3eLZmtKNlZ0Grvso57qE1iNe9fzrF%2FVE5YXoLApIBxWCPJ1fQUjPDnNRWg7bEJNhR6zv4J%2B0c0kNC9YkxmyNAaJK3PETxnetU%2FXqm0f%2F2%2FWd2Oh6x4cmKoSkGex252Sfb6rFCi6xAjEDgwtucJ6UAL%2BsLHAMDlr%2FoMdY8mVA6Halka7NScS%2FyN9dAenW%2BuuzWJBr0PuOmZGYWkCTvQP%2BiBjS6Nkmk5uKDWwtdsMLbk%2Fm0nu0Gb019Vr4s6y%2B2W2nzAB4I9R%2BBEw17zBvwY6pgHXCKHoPNHAXoDg2aFk7yUtobApxXKD8cXVugcGXHCJbTcyLSfcvOtkWYDXwd5FKt9bNPAh21hV4lwL8no3bj9FrIOG%2FxmSxKnpbkV%2FelKL9%2F%2BbdUo8nowRxz6odwp5an4XLKdf%2FZOoLrf3KDtr%2FHs63a0yYkFKzKdT2OUXDGh6wlwFEnqFl%2Fvq%2FvpSZobAMqfjyaRrZRXhYWcJSpAIeFIdcscGjt2g&X-Amz-Signature=7f602684bad31d42f17a2266bc3ed384d47213efaf826d09c7f907b3effb4fad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Q6Y2WF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLMTZj7HRdyRmocl0w2UkoQAwnL64bAIZ2gH1PRTlOnwIhAJrxVZeGsu7SAx4Lmsf%2BroivfB43KHFyQWQq3D8vf9akKv8DCCAQABoMNjM3NDIzMTgzODA1IgxF%2BmYP7sK0NwupQdIq3AOv229WZYe5KzN6yiYoPjhRU51tkUm8r87puV74IzJJiBFUeKdfxUDRmLUfdNUZYHCM470WdwHkFxU95MX7Wy0XY%2Fi4FKnmJkRER46FatvNNjE%2BljLSyiPLbkEPr%2BVE0DHduE1sL%2Bg6zEIg3EJeC6yTMi8MS20ossrZSOB5oR%2FBL2N6T5yg6Hg%2FSnDaphHgs3aqJf2ab%2F1yt5LFCjYBFyczcVJzFQ4zR3xGtQdeU21ZOqsi%2BNbQBiP%2FGXvsTgiAdGTrLquj416XQVAblP4DDj44f53rOPNbrgwINZaYD9rhMh5WEuCFAGxhk9HwGH5zEhKaOjbgznBARiP6ptKfpOADE8LIoQi00L%2Bj%2BshawRyMLnCm3iDYBmsXu5ZCdnkQq6UIaTx%2BpgErBwwjcWJgVQZLtdn%2ByiJW4NvuBOxQEpGLmqQx4ZCD6m5raO4e5UK%2Bnh%2BFJoXMiGDRDmRn7dLTwj5IKj2IGJiWUZXngWIKg4LZl9UpRfBtotsH%2FanG%2FPdXGPqniVBr%2BUIV6C%2F0n%2Bo%2Ba6Sc89xEOkuhtrFjyKGchCB8NpfLlcja7uAOlIvrr40mk17oFcGnKhhooCRJp3ePMJePUAsfS35EXVEOKeR8qQtIaSf00cJ5QDd1LBKGaDCcvMG%2FBjqkAYmPvUxQG%2FGZrl3qotH29uo4nALh5KdfactQRdo1dCOJxF25oXXXShdV0Z5GdvBUpiujXN4Omoc93B6tb5a%2FJmU303t5nnOWhmU34t9k9s%2FZudf3PzsUcw1LfN8pys539PBvt8sHhr6MRsRsheh45YKk%2F%2BU9DyUEwv1O%2FPyX6WrwaflH9BXmqaiKbCdJDy46SSfqH1XKNXU7QOCih0BTIVXhtsa3&X-Amz-Signature=e9f2b83a5c1fcb948b4e66dd638e09a65c242cbfbdc9a3bbc5ec198039df6452&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTEYBUNE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ7g2cj%2BSJvn9vNUfv4lo%2BPf9hmlsmteIbyUfNuBZ6eAiEA0LnRNCWQ50ol4DAZLcjDVjfxs%2FHm9WUyPBkt1Wo93kUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDM7qvt89Ob0%2F5weoiyrcA3jwqfBrDGZRUzAdMKj7LI3mc0JetvWh16CE0UxzJt7AFeufoeM07CgatYoBB%2Bk8Qa9uwAh3NsnTsdPK%2FNxSvl3ru3A7h092%2FRlgcmWwCNl1ey%2F0dkz6b2r8o8D2RZCXJgkdsrMFGj1rOgBXR8zH9gQegJ7XWgLrdRrIbWMQafrA2TXCFF%2B3FbWRrxP0nTWdIT6h2uYAWirL41PtLOumDjQDaPdUk59yAfzl0TlHEJxmtYnFojxRgFXxpbeAhlkOKYqJk7ZbET9ebedR7cOOMUO1%2FDzqlqStU3TiIDWL7O2H3nG7RzptiNcPzxG%2BxDF9otF64n2Ky6EN%2BRQ6XSRT0ruckQ0joWDX3xy6Pm9nNZayKr7S0h3sN4Zw9CQlsZwCnsIMlbsAjOz7QUP6E%2FfC384QLKy3LEuLOvEaNakWCFOkCwJHPnFoBP8aCACr7p1kgFboVvGcCsofV7MyoRmAky6EKOVYn2L4O9Lbz5AHlATX%2FrFOyoqtcwRA7Q3e0mw1DmvZ2hbM558LEi2626tifKIVBei8OGtuci%2B5rN1xX50m6ruiW5Q3gyenMRYzyV9Lf99it2thSqpqU53dDEGD7QpqsZKhGrMYJS%2FRw7Rn7Vm5mYnZi3gVKXdmrpBKMIK9wb8GOqUBS7R%2BwW91v8ixHsdZ%2BX56%2BYCxPa1oU4dzCwrn4agWVS%2FdfQyPwbqeZoE8yW9Jh7ysz0OODWWKywV3Czh7Fh3%2FB4K%2BCpTLWB44sCKeXm%2Ftw%2FEFJxwpWqc%2F4hw5nYWtIbmjo37EzgD80rfw3Q609TmS9VyA%2FTavuhKaEOa7eWqCqW5PBR14IkshqnFmlMxjB4XKbeEGEPzSPrsvMrrG%2Bv%2FBw5m0THEo&X-Amz-Signature=663d3bee00e9eb62af15c43ce991bd114281a04a8fe405ff5bb3f5d53e1c38dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZOIXGM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9t%2FsWvOjx8YzY8XzmfXU42QhUG67L3gF4UF6tKPNEyAiAcrQ%2Bm2xBMDQ0IQUQGYIZ6l%2F%2FpvKH5AIen2fhknP7gdSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMqz7z6Nfh2JQWBKjxKtwDAUCkaQIPIfDjPPLEZTahqw0GkW%2Fj%2Bo0KP15Ou%2FoJwss66zQso9YjYNPbAWME3NbTfyy%2Ft28hZALifglHGZOqcK81wynHcxh72SDt5xzVYb%2FUdqb6n2RP3UUDmD7H%2BHOexjCwON0Iwd4o3zOonu5A7aJXcGQzLkwjk5hxxuyswgRZKMcxmbGt%2FmFtkCNTVQfxOAsfBOKtnALaXX8cbPZ3cXUQL5j2dtWmFaA%2B0nZWlbNOhUc%2BipCPhpOeuMSP%2B85jR%2BED4S4bVsEVLxYhhkbt9YDu632o9De5XHUo92zq79agPCvYbBFzRSrjG%2BYzp%2FymPwcH9FwKBRA5hflnMv7BiJbKAlVDWuwXKQ5BCjdGVwXn%2F8WYZ3eLZmtKNlZ0Grvso57qE1iNe9fzrF%2FVE5YXoLApIBxWCPJ1fQUjPDnNRWg7bEJNhR6zv4J%2B0c0kNC9YkxmyNAaJK3PETxnetU%2FXqm0f%2F2%2FWd2Oh6x4cmKoSkGex252Sfb6rFCi6xAjEDgwtucJ6UAL%2BsLHAMDlr%2FoMdY8mVA6Halka7NScS%2FyN9dAenW%2BuuzWJBr0PuOmZGYWkCTvQP%2BiBjS6Nkmk5uKDWwtdsMLbk%2Fm0nu0Gb019Vr4s6y%2B2W2nzAB4I9R%2BBEw17zBvwY6pgHXCKHoPNHAXoDg2aFk7yUtobApxXKD8cXVugcGXHCJbTcyLSfcvOtkWYDXwd5FKt9bNPAh21hV4lwL8no3bj9FrIOG%2FxmSxKnpbkV%2FelKL9%2F%2BbdUo8nowRxz6odwp5an4XLKdf%2FZOoLrf3KDtr%2FHs63a0yYkFKzKdT2OUXDGh6wlwFEnqFl%2Fvq%2FvpSZobAMqfjyaRrZRXhYWcJSpAIeFIdcscGjt2g&X-Amz-Signature=8e8023b72fb103ea0e409906a0cdef4e8d209adb4f0550295ab576855fead4ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
