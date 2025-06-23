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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIL5EN2V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCsAmyMlaurx4OGSMDBQzVLPIH85YIB3SjdfTUwFVSiRAIgdUQosmQkvyQE0YtQBy7oO1AvLZ60ilIWriCHPkJEPy4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC6DnCY6x1e882bUyrcA2gWAbq3P4BFtbpZLrRUGN2yxAvmqKSGCxASclhqdOOth882Z3MMXCMyTZDrDlF22CLpCG7SN7gQEHbU928X%2FnkPq%2BqhAq5%2FFFiCvp7IZSHd93qcqpb%2FHuLnxXhlOsbYyN3XfIPxKOKChouRNiIaqfY%2F1mT31IaCd0Morvr1RS5M3ELvZlWAvolzQQ40BCin1fQnsaFpfhkwq0K3LZVD4dF8sVQ0C%2BLof3BFAN2OLXEb8IFq%2BZqh9NlfU5wWEvmI9GjsxPU8oipgIbX7L2iCkiDJJAS%2BJCLziVE%2Fu5BkpQv08Qv8XzoA1Tt0D8YxayrNBOJuiAj3sMeNyNsBnAK9GIssQ9ibq1VVubzOw2kTQ6Y%2FRtHxAXY9%2BujhHBNxwFJEksxYbviC2yap5r3gpEVIbAHY5VI4SeuDFGyvJ2QLidyi3BadNdyOD7fqrEn4wn7WaZ455uk%2Fwk7XL3OGN8l1vTgavyhjRHpRbFTaIJXqUs%2Bf5diwdKmZicSynDsaP%2Bf7URA%2BFye8I%2B%2Bv7U9P1c3c6kb215%2BBnnlBiRx9rxCmc804Ca2BBaXEUrIK8FEwb2gRwx9SI4rr273jsJzvplaL%2BeZdfhP5pCly9vAQgTNhGvfwuhfiq0gqCw2gPaI7MLmw48IGOqUB0qlnQAcJuICs5AecVn8eMZcZtS6uGLIFC9s2n%2Bz1zuaOnjvs91bcpjzlR8icrrnTqvXDg0P6mOuI0ieS2jKSFBSVh9lcss9L%2FNOt4J8QjkOzaYF04A3nCbTKcHu0B4887dfP7uaYZyH3MTEsBtLE5bhFYqFVazbrlCBYtK53CathYMCAoHmIiGj3yJmZ%2BwjwnizRxtqUxzpAEhF5FUchDyQh6vm6&X-Amz-Signature=0eda785c03db05adf42fd3eaa5e7afdb4135f198a6f2a10b84f2e329683bf852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIL5EN2V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCsAmyMlaurx4OGSMDBQzVLPIH85YIB3SjdfTUwFVSiRAIgdUQosmQkvyQE0YtQBy7oO1AvLZ60ilIWriCHPkJEPy4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC6DnCY6x1e882bUyrcA2gWAbq3P4BFtbpZLrRUGN2yxAvmqKSGCxASclhqdOOth882Z3MMXCMyTZDrDlF22CLpCG7SN7gQEHbU928X%2FnkPq%2BqhAq5%2FFFiCvp7IZSHd93qcqpb%2FHuLnxXhlOsbYyN3XfIPxKOKChouRNiIaqfY%2F1mT31IaCd0Morvr1RS5M3ELvZlWAvolzQQ40BCin1fQnsaFpfhkwq0K3LZVD4dF8sVQ0C%2BLof3BFAN2OLXEb8IFq%2BZqh9NlfU5wWEvmI9GjsxPU8oipgIbX7L2iCkiDJJAS%2BJCLziVE%2Fu5BkpQv08Qv8XzoA1Tt0D8YxayrNBOJuiAj3sMeNyNsBnAK9GIssQ9ibq1VVubzOw2kTQ6Y%2FRtHxAXY9%2BujhHBNxwFJEksxYbviC2yap5r3gpEVIbAHY5VI4SeuDFGyvJ2QLidyi3BadNdyOD7fqrEn4wn7WaZ455uk%2Fwk7XL3OGN8l1vTgavyhjRHpRbFTaIJXqUs%2Bf5diwdKmZicSynDsaP%2Bf7URA%2BFye8I%2B%2Bv7U9P1c3c6kb215%2BBnnlBiRx9rxCmc804Ca2BBaXEUrIK8FEwb2gRwx9SI4rr273jsJzvplaL%2BeZdfhP5pCly9vAQgTNhGvfwuhfiq0gqCw2gPaI7MLmw48IGOqUB0qlnQAcJuICs5AecVn8eMZcZtS6uGLIFC9s2n%2Bz1zuaOnjvs91bcpjzlR8icrrnTqvXDg0P6mOuI0ieS2jKSFBSVh9lcss9L%2FNOt4J8QjkOzaYF04A3nCbTKcHu0B4887dfP7uaYZyH3MTEsBtLE5bhFYqFVazbrlCBYtK53CathYMCAoHmIiGj3yJmZ%2BwjwnizRxtqUxzpAEhF5FUchDyQh6vm6&X-Amz-Signature=bf4aab8b1ef9fe8b6aaf3c302bc66b68c0e41345cb800eb5177254b8fc8dd001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIL5EN2V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCsAmyMlaurx4OGSMDBQzVLPIH85YIB3SjdfTUwFVSiRAIgdUQosmQkvyQE0YtQBy7oO1AvLZ60ilIWriCHPkJEPy4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC6DnCY6x1e882bUyrcA2gWAbq3P4BFtbpZLrRUGN2yxAvmqKSGCxASclhqdOOth882Z3MMXCMyTZDrDlF22CLpCG7SN7gQEHbU928X%2FnkPq%2BqhAq5%2FFFiCvp7IZSHd93qcqpb%2FHuLnxXhlOsbYyN3XfIPxKOKChouRNiIaqfY%2F1mT31IaCd0Morvr1RS5M3ELvZlWAvolzQQ40BCin1fQnsaFpfhkwq0K3LZVD4dF8sVQ0C%2BLof3BFAN2OLXEb8IFq%2BZqh9NlfU5wWEvmI9GjsxPU8oipgIbX7L2iCkiDJJAS%2BJCLziVE%2Fu5BkpQv08Qv8XzoA1Tt0D8YxayrNBOJuiAj3sMeNyNsBnAK9GIssQ9ibq1VVubzOw2kTQ6Y%2FRtHxAXY9%2BujhHBNxwFJEksxYbviC2yap5r3gpEVIbAHY5VI4SeuDFGyvJ2QLidyi3BadNdyOD7fqrEn4wn7WaZ455uk%2Fwk7XL3OGN8l1vTgavyhjRHpRbFTaIJXqUs%2Bf5diwdKmZicSynDsaP%2Bf7URA%2BFye8I%2B%2Bv7U9P1c3c6kb215%2BBnnlBiRx9rxCmc804Ca2BBaXEUrIK8FEwb2gRwx9SI4rr273jsJzvplaL%2BeZdfhP5pCly9vAQgTNhGvfwuhfiq0gqCw2gPaI7MLmw48IGOqUB0qlnQAcJuICs5AecVn8eMZcZtS6uGLIFC9s2n%2Bz1zuaOnjvs91bcpjzlR8icrrnTqvXDg0P6mOuI0ieS2jKSFBSVh9lcss9L%2FNOt4J8QjkOzaYF04A3nCbTKcHu0B4887dfP7uaYZyH3MTEsBtLE5bhFYqFVazbrlCBYtK53CathYMCAoHmIiGj3yJmZ%2BwjwnizRxtqUxzpAEhF5FUchDyQh6vm6&X-Amz-Signature=b9b62d048010d9f89a6c5ec109320024d532ee1f51c6580dcec6f6613b0e9d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOUNUWO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD9Fz7kGvHEpAWG8wwN1%2B8nN0e9E6NGsg6V06RhUBU%2BxQIhAM5ThvX0IfEtFn1CSq0INwLMncZUZ0wcyHZfDgoDjF3%2FKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrOBPamwjV5USVAekq3AMnO%2FGC3rJHcZkvxgHjY4SwzW%2FrPyf78ctPGzTCa6pITP1Nfxgom4D6w%2BZ5eHjYXZoe4ng4TGf%2BX51c4MEyCEW%2FPdGIr9z2sXnGjEoZSb6SHfigziD1QnLFyd36tIK8w6I8GXp6xCHUFNdoCgDHsCEp00Gi0ESOZyTSseOdCa%2BQfiCFFq4qq7TLejS7XEE5eWGsn%2FPhOdo05Znyte%2FGbRGmmFCH0B%2FwruzkIZDCHQJo40fRmKQ2dcjHR2L7T%2FA9i8UJaQFmEqnrwEZiAibitfdpEuU3xWDz2RYdjbs2Kkr66zXUOrePth2QnRzNkDgquoPr6QeT6IhuHQJ3VxdkZbalGzmXG0gExWuHwjIbvBrMJNLsLOFY%2BWAwy3%2BclLAseUfDHnw9lwQ%2F%2FP%2FA%2Bp%2BBJkxR3TT19%2Ftp3TJfuXxvYe0M3BVpryI3ak1y1ygpWiupHdmkQSC9Wcq5GyILtoCPqWzBXNnL%2BsfgGw1CufXvVw1plzA5CKIF4jt3G4kNlfMuCKHZ%2FDt7EJepCZo9NbDobL9YFn60aLPvhNhckO9uws03Hb9MEJxQ5NimWToMBe7Igek8FTTvWbE5tGl2izimX77IsYoPu8x%2F0WsE4Sm5xcFxN%2B%2FYxvNKHG17gg3gTDCvsOPCBjqkAdJ9IOyR1QHstiB9vQxJLLaFjZDHwrnjd%2FC0BgtYZf1fwDMN9aIOQw2QTzHh10mdj%2B5uVIiW30HU1rFaDUFiGl%2BwJV%2BnKFNnQvlzHY7Pndln1DO%2FyJyuN3SMBTzZeEIvLNWQgZ5eemkqoN2ghSTp44KOpsKT9Fupi%2B6gptnYAIj0vkiHiavx3feZrK4910j9zcjgkjw%2FJbJcYdHiUEVKsRgtc8rE&X-Amz-Signature=e49ee4ce8e66cbef1a97e77efe9c3ff22cf915307905ae9c23a44b63b6a963e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFXVDU5E%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCMNtpjTZmFvO%2F6L013gPjqAv85pQ3AtiMG6t70aRkLsgIgawdOfr3WdQpxndepjigeGM12gXxsf%2Bi1z6JGRgoG2NoqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPovEoqt%2B%2FcJQqvmoCrcA2SKMZJ15%2BRkcJcS8zLbBUgtqAfKoPFJqVtaS2EtNBRZm0VrPxorV65lIDlbHyV8wdpFPUSme1leR2P0i7lFBUyk659n3EF%2BoDnLeX%2F01Njlh2S9bGFEAZZGRDL%2BzLfMo6u00TKWFO1Dg%2FHhE5LJvsYmz4ApCU9wCAfJIorrYlqnaAbQRmurb0sUZsehcWA57yefMfXwbkRp0MBkAe%2BmJzZzLwo1Ci4GoFva0sHQgCcIwDAnz6dMd6pKfilrncsGBySrLm80gm5mTtAQnq%2FBdvjvHqVTRPohpZ%2FVXhS7Ad%2B74fhFsfMp%2BTIeSurJ5yj%2FYhjwXvSnJqkBD%2BIqwnGyDJk9%2FA4OQQsfiaCgdb7L%2F0E25MRRTWa49%2F8QWSPwoatTwG%2FjLMBBebOVa2Xld6qeH1z9XRlaT7JvOAhNQ48%2F8X%2Bj07Y9nY2VsXLUjht1Ouh00XLXs%2BX%2FJ2JBhNjZSAkYXOibn%2FcdYOY6FY5UgyTFd9CKZV6k3q6e9Buf%2BXFJ1WQZgErQx%2FZdHTApF9r4rfCgkjVsgUZM2NwQ1bCfuFywK3PFZKbMnQBEBOpRMQ5q0%2Fejnk07kuPl9gTPJKCc3Qb50UADmhvwfSMRtZiM%2FRSz4VP5AvNmBxgCLuKQzvlrMJyw48IGOqUBaksCES78rcxg%2B2Vzx2rnfvKoaBm6cI8WAB1SCS%2BFiDCsDmStX3JmMRRJufl5s5wqCSJd71WBpjv34vpdIsKsvfuxksVyOOvXZew3Hv62il%2F8YIlOr3eeZjXDwid9IGtHXrAqLldDAsvfgWKdsNwDWMaSP1O%2B29axDx94ixcoJ5rVfPdg998z%2F71SFcUjE9hkKylOdSE3jCvvJPVHLv8Zpg9JinDG&X-Amz-Signature=15c78726e4fd9f82b93ce9487ce3491189b194483b625ceb7555bd3ca061cff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIL5EN2V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCsAmyMlaurx4OGSMDBQzVLPIH85YIB3SjdfTUwFVSiRAIgdUQosmQkvyQE0YtQBy7oO1AvLZ60ilIWriCHPkJEPy4qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC6DnCY6x1e882bUyrcA2gWAbq3P4BFtbpZLrRUGN2yxAvmqKSGCxASclhqdOOth882Z3MMXCMyTZDrDlF22CLpCG7SN7gQEHbU928X%2FnkPq%2BqhAq5%2FFFiCvp7IZSHd93qcqpb%2FHuLnxXhlOsbYyN3XfIPxKOKChouRNiIaqfY%2F1mT31IaCd0Morvr1RS5M3ELvZlWAvolzQQ40BCin1fQnsaFpfhkwq0K3LZVD4dF8sVQ0C%2BLof3BFAN2OLXEb8IFq%2BZqh9NlfU5wWEvmI9GjsxPU8oipgIbX7L2iCkiDJJAS%2BJCLziVE%2Fu5BkpQv08Qv8XzoA1Tt0D8YxayrNBOJuiAj3sMeNyNsBnAK9GIssQ9ibq1VVubzOw2kTQ6Y%2FRtHxAXY9%2BujhHBNxwFJEksxYbviC2yap5r3gpEVIbAHY5VI4SeuDFGyvJ2QLidyi3BadNdyOD7fqrEn4wn7WaZ455uk%2Fwk7XL3OGN8l1vTgavyhjRHpRbFTaIJXqUs%2Bf5diwdKmZicSynDsaP%2Bf7URA%2BFye8I%2B%2Bv7U9P1c3c6kb215%2BBnnlBiRx9rxCmc804Ca2BBaXEUrIK8FEwb2gRwx9SI4rr273jsJzvplaL%2BeZdfhP5pCly9vAQgTNhGvfwuhfiq0gqCw2gPaI7MLmw48IGOqUB0qlnQAcJuICs5AecVn8eMZcZtS6uGLIFC9s2n%2Bz1zuaOnjvs91bcpjzlR8icrrnTqvXDg0P6mOuI0ieS2jKSFBSVh9lcss9L%2FNOt4J8QjkOzaYF04A3nCbTKcHu0B4887dfP7uaYZyH3MTEsBtLE5bhFYqFVazbrlCBYtK53CathYMCAoHmIiGj3yJmZ%2BwjwnizRxtqUxzpAEhF5FUchDyQh6vm6&X-Amz-Signature=6980a5729ff5878f5ba65619905be4b0076dd2c6ca20fd1e264ebaf86dbb7ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
