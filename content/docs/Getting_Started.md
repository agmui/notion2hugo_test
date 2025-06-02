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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCVKSSP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDRwVF79Ify3haJoMDND9ivnPuitO5JeZFIvbme%2Fv9UGwIhAOKHKkkHRv%2FAUTL0rfbm8JNdNb5wkH6Ll%2FGikwW%2FUC1%2BKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzadsdkwLcaqL7vV%2BMq3AP041RsFm6%2BrEmNwx5Dngmd6QtVWSu0PEKKNqzN28bfSL3o04HowI5KNaA1xd3CNV5yd9VzOqm4d448qwBreJcFVbSApslryw%2BqkiNLB3iODoAFq%2B21V3g6At2UPq%2BDbBdxyaMKw%2FWWaflsWv%2BN0Kmn%2BB%2BJeTmwSQvFDK5kKKSkkKAEDrqDQ655w0d0L2U1MuvA3HzwWsOk5VMIRASEsYIUxxUkTYCLwIWTLV2lt8Jk3liukmwiKmYxQvrwWl5N1btEW2ZY9une2S90DPL%2FQw04TZ%2BXKi%2FrVKedWxV7HZroOzoareuYrDybkeJFn%2Fs7cNX6HgwrwweCUMYO0ohMEqS5xOlYpVhWefF68QLrI8hNTDWbhCLCCaBDRkjo864AABUDvWVmwsjQaxsxwgEqC2eUle5a9%2FbGigxVRiSj1IeU5s8Zf4er5Cv%2FQRB%2BXPeaP1UNIPzuMDfvos2rwqxc%2FxV5gUDvVIpf3Ie9b1jKJ6iouqmNlLkPeMTDbVL8it1gO6b5a1IeQeHyr3ReWlDV%2B6io7zRyRvFWtnN7GHKwoa%2BLOh2K0tRpQMc1LNHW%2FslZb5miSqjgcxSc2wG%2Bn5Vbz9dOXuBZZObDjgkAFrGtAEkTSrzwUmXzClNKr1K7xDCX2PTBBjqkAQYE55VenYzwu%2FihVsKnAtLhesItjtfJMJBIsS778GBIeFiFL%2B6nAoNn%2BkQcEi6sKLL4SBgCdWakEKfJ2Ukhm43M7MZ%2Fvt%2F5NEyyrEAMnUn0iJPmMcr%2BCnundsLRg2y45PKcQg0lWrucl1WlqUWyzEuOx8sWtD3R%2BhXdCyX7mfCogk2QpRNyeB5%2Fcx4EOeWIxK5k1NIkrjbuEg1OkGRmMdYWgf5n&X-Amz-Signature=6ed4f363bcc3d3bd94cb05238d6ad7b750022b08f8296192a28e25057729c2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCVKSSP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDRwVF79Ify3haJoMDND9ivnPuitO5JeZFIvbme%2Fv9UGwIhAOKHKkkHRv%2FAUTL0rfbm8JNdNb5wkH6Ll%2FGikwW%2FUC1%2BKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzadsdkwLcaqL7vV%2BMq3AP041RsFm6%2BrEmNwx5Dngmd6QtVWSu0PEKKNqzN28bfSL3o04HowI5KNaA1xd3CNV5yd9VzOqm4d448qwBreJcFVbSApslryw%2BqkiNLB3iODoAFq%2B21V3g6At2UPq%2BDbBdxyaMKw%2FWWaflsWv%2BN0Kmn%2BB%2BJeTmwSQvFDK5kKKSkkKAEDrqDQ655w0d0L2U1MuvA3HzwWsOk5VMIRASEsYIUxxUkTYCLwIWTLV2lt8Jk3liukmwiKmYxQvrwWl5N1btEW2ZY9une2S90DPL%2FQw04TZ%2BXKi%2FrVKedWxV7HZroOzoareuYrDybkeJFn%2Fs7cNX6HgwrwweCUMYO0ohMEqS5xOlYpVhWefF68QLrI8hNTDWbhCLCCaBDRkjo864AABUDvWVmwsjQaxsxwgEqC2eUle5a9%2FbGigxVRiSj1IeU5s8Zf4er5Cv%2FQRB%2BXPeaP1UNIPzuMDfvos2rwqxc%2FxV5gUDvVIpf3Ie9b1jKJ6iouqmNlLkPeMTDbVL8it1gO6b5a1IeQeHyr3ReWlDV%2B6io7zRyRvFWtnN7GHKwoa%2BLOh2K0tRpQMc1LNHW%2FslZb5miSqjgcxSc2wG%2Bn5Vbz9dOXuBZZObDjgkAFrGtAEkTSrzwUmXzClNKr1K7xDCX2PTBBjqkAQYE55VenYzwu%2FihVsKnAtLhesItjtfJMJBIsS778GBIeFiFL%2B6nAoNn%2BkQcEi6sKLL4SBgCdWakEKfJ2Ukhm43M7MZ%2Fvt%2F5NEyyrEAMnUn0iJPmMcr%2BCnundsLRg2y45PKcQg0lWrucl1WlqUWyzEuOx8sWtD3R%2BhXdCyX7mfCogk2QpRNyeB5%2Fcx4EOeWIxK5k1NIkrjbuEg1OkGRmMdYWgf5n&X-Amz-Signature=d451c08770b317524c94667675bf9bdeaf15c2172c3cf087ab8123af4a2a1f30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCVKSSP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDRwVF79Ify3haJoMDND9ivnPuitO5JeZFIvbme%2Fv9UGwIhAOKHKkkHRv%2FAUTL0rfbm8JNdNb5wkH6Ll%2FGikwW%2FUC1%2BKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzadsdkwLcaqL7vV%2BMq3AP041RsFm6%2BrEmNwx5Dngmd6QtVWSu0PEKKNqzN28bfSL3o04HowI5KNaA1xd3CNV5yd9VzOqm4d448qwBreJcFVbSApslryw%2BqkiNLB3iODoAFq%2B21V3g6At2UPq%2BDbBdxyaMKw%2FWWaflsWv%2BN0Kmn%2BB%2BJeTmwSQvFDK5kKKSkkKAEDrqDQ655w0d0L2U1MuvA3HzwWsOk5VMIRASEsYIUxxUkTYCLwIWTLV2lt8Jk3liukmwiKmYxQvrwWl5N1btEW2ZY9une2S90DPL%2FQw04TZ%2BXKi%2FrVKedWxV7HZroOzoareuYrDybkeJFn%2Fs7cNX6HgwrwweCUMYO0ohMEqS5xOlYpVhWefF68QLrI8hNTDWbhCLCCaBDRkjo864AABUDvWVmwsjQaxsxwgEqC2eUle5a9%2FbGigxVRiSj1IeU5s8Zf4er5Cv%2FQRB%2BXPeaP1UNIPzuMDfvos2rwqxc%2FxV5gUDvVIpf3Ie9b1jKJ6iouqmNlLkPeMTDbVL8it1gO6b5a1IeQeHyr3ReWlDV%2B6io7zRyRvFWtnN7GHKwoa%2BLOh2K0tRpQMc1LNHW%2FslZb5miSqjgcxSc2wG%2Bn5Vbz9dOXuBZZObDjgkAFrGtAEkTSrzwUmXzClNKr1K7xDCX2PTBBjqkAQYE55VenYzwu%2FihVsKnAtLhesItjtfJMJBIsS778GBIeFiFL%2B6nAoNn%2BkQcEi6sKLL4SBgCdWakEKfJ2Ukhm43M7MZ%2Fvt%2F5NEyyrEAMnUn0iJPmMcr%2BCnundsLRg2y45PKcQg0lWrucl1WlqUWyzEuOx8sWtD3R%2BhXdCyX7mfCogk2QpRNyeB5%2Fcx4EOeWIxK5k1NIkrjbuEg1OkGRmMdYWgf5n&X-Amz-Signature=0f4eaa63c30885a22ac049cdeac2d0456134b3aaf473e8017f1145e6944b0445&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KYXILM3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIAykmyY5PTPbgXHybv3x0NGO64Tt9PcYuHiues6PafbAAiAXLIh15EMuXzmaMnnQPOVIoOb%2FAfiCl7gkehRcR7iUeSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ5ffcUQJiATuAf3eKtwDC9nZ37pjjO97mVgU39IwtBJ60L%2F4RyUw4yOylIMJu1AxKfgc2rzCg9FVj06DFzc1Ypkx7PqEXUZHMFqrxQXhqQi1gdqmbNoEW94nsIXmS0dErCvfSYVGJ3qHMVuk45E6%2F49nwlhHFpDzMuC30LqcVJf9U7oufyYOLvrsGocKspan4FVeJgelTmlLbiaF0NNwt9ZbVRMQfCi1g6Nq%2BenfqyN7HcQ0wQ0JLn8ujrPbzXsfH1NpPIRV4nNpfR1komU2F6orIpHcIA23ZaDdjI6mKrW%2BmmwQhptMLOeQJ%2F0VPzNqYkzmvG0Sr9kih0TgqftG2rzWnhIWTitMFZBDcw5Z8eXCQ4Q%2BIOX9ae7O0rXc8ZFt9yw6hfoWkSP%2B59BtRRZ79Coe9eOGtRF3zmPIyeedNGh%2FauhLWKj9PUTzQ7CTZNHH%2BPq2P01AjqLALY0qsgKspGABl%2FJJ9PWz%2BHdS6SipY%2FD%2BYs0R0wh2y9FkFjX%2Ba3kPtMvCZgxnyRkzk8OtYWoxxqhqRT8WV2BrQuo0ewd8vXNhbpxJ7vsp64cn5sPeoNLdCMyziCe1M8WOb2oVv9XT8zOzZqozGXjBzowVItsj5SWnGglWR6jUXRJxAy8QeiLvuf%2FzBNqGYu9sz1Mw99f0wQY6pgHoe5TYKrD04rW4w%2Fa30qb%2BhDojgD%2Fw5XQ0GFieWFYg%2F3uhYw%2F8W8fo6%2BS4Zf%2BeFNvqvGsa7w9%2BV8jzHhUTzCAU3gQyeYd9Vqs2Z5Fv%2BEpMbDqWdY%2Bwz98Tt0%2FLAf3d3PG0D8eLoihu6NGUi%2BnbkRujvbPmco1iegxVmDwzkUBYnpE1DwtoWP1SuJkaVncDg1KJPr9%2FBok%2F6abYRCHaF0icDECDA7bp&X-Amz-Signature=51ae33ed81d9c698eb7f80d577b8a415f856f20c29b521970c4d93a79f6a59ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RECOPI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIB%2Foabkx2RE%2BN5V3UQWKkFIDHVUfEJhbUKJfIZleFmUuAiAd0bgjrypLrA7SKI8vYB1Ut3MAtgduegeoqKlmPbkfDiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QSYVrO1xa4Z7nf7KtwD%2FMr1bYuyroCn5bN%2F5m9j3AK%2FIoUwIKjsr1A6R11t6J98H3jN2N3UzIZjoR3GUAlqS%2F%2B33Xb8Pq8HAM2xmDpGxhd7Ve1Qj372VT9rvT4evZYr6hfdLAROZyxqOuCkI1lt%2F1AZ6OneegvoGDZYGQhghh9dwzO5%2Foa5DzM02Fj5lUZxqgML6rumjG3MByUqH%2FNdy1Mu%2BclL9EJwUDWFO3UgmA1f%2B4PRuHgYlRmRgVfDHgChVhcsbCq5HZyA%2BmwB03o6sMK5n1myznu9fn2Mn2jVpo9AXFoHwNwSNJYRe%2F0xy705vl7mmRX7t81xZanBGd2l2ukKfViYwuzmUEXUaoi%2B2bh%2FxZ8R7nYJoknCxOzuahZcvc8c2c288Jtu%2BFgkVUcZM6vBeV5MgbF39FGb%2FGoguEtjDwnTXqAlKDrdGGq3z1AIHCpqOGVKw7qKyZWTiObQyj8PpRRavKPmAxeGActztLuuSToFJ2bwOJbozK%2FUaFDbdSHmDR%2FIfvy%2BT52Dp0MhsZVpCfIAUZln%2BJ0jrcT8V%2FC5baDyg1kRVvwteV2v2hMn2ttFaJn5J0H5oat1AO9OBT6rPDgk9YFo3Hfn50WTt5OPkU5OLpqAtiww0PgYbTwtS0p6wOUG3e9moUswvNf0wQY6pgFUC7ACd3a3L5n5eoVJeuncJvKpq8zMfxBNIa%2FiyApC%2BK5F0zwIzfoJloeA0q5ZlqCcgYh7oxEAkXxtqbGx44w3621Mf34YK%2BuLW7PmKZ%2F4ZouO8kjkZw7XyUFNUhHdZ321Exf98N5gyPaDFr5bwMSKeD4qFa9s6AAcwkO8nXoePLWPgqQ5sTlEbbKjnSA6OP3OQgoFmKkLtoQX9kYJUC%2FU3J%2B%2FsZkP&X-Amz-Signature=e8e60c6fd2239b88fc9eef39bc2b7561eb532b2c69b03182e8606d5b691870e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCVKSSP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDRwVF79Ify3haJoMDND9ivnPuitO5JeZFIvbme%2Fv9UGwIhAOKHKkkHRv%2FAUTL0rfbm8JNdNb5wkH6Ll%2FGikwW%2FUC1%2BKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzadsdkwLcaqL7vV%2BMq3AP041RsFm6%2BrEmNwx5Dngmd6QtVWSu0PEKKNqzN28bfSL3o04HowI5KNaA1xd3CNV5yd9VzOqm4d448qwBreJcFVbSApslryw%2BqkiNLB3iODoAFq%2B21V3g6At2UPq%2BDbBdxyaMKw%2FWWaflsWv%2BN0Kmn%2BB%2BJeTmwSQvFDK5kKKSkkKAEDrqDQ655w0d0L2U1MuvA3HzwWsOk5VMIRASEsYIUxxUkTYCLwIWTLV2lt8Jk3liukmwiKmYxQvrwWl5N1btEW2ZY9une2S90DPL%2FQw04TZ%2BXKi%2FrVKedWxV7HZroOzoareuYrDybkeJFn%2Fs7cNX6HgwrwweCUMYO0ohMEqS5xOlYpVhWefF68QLrI8hNTDWbhCLCCaBDRkjo864AABUDvWVmwsjQaxsxwgEqC2eUle5a9%2FbGigxVRiSj1IeU5s8Zf4er5Cv%2FQRB%2BXPeaP1UNIPzuMDfvos2rwqxc%2FxV5gUDvVIpf3Ie9b1jKJ6iouqmNlLkPeMTDbVL8it1gO6b5a1IeQeHyr3ReWlDV%2B6io7zRyRvFWtnN7GHKwoa%2BLOh2K0tRpQMc1LNHW%2FslZb5miSqjgcxSc2wG%2Bn5Vbz9dOXuBZZObDjgkAFrGtAEkTSrzwUmXzClNKr1K7xDCX2PTBBjqkAQYE55VenYzwu%2FihVsKnAtLhesItjtfJMJBIsS778GBIeFiFL%2B6nAoNn%2BkQcEi6sKLL4SBgCdWakEKfJ2Ukhm43M7MZ%2Fvt%2F5NEyyrEAMnUn0iJPmMcr%2BCnundsLRg2y45PKcQg0lWrucl1WlqUWyzEuOx8sWtD3R%2BhXdCyX7mfCogk2QpRNyeB5%2Fcx4EOeWIxK5k1NIkrjbuEg1OkGRmMdYWgf5n&X-Amz-Signature=23be5473cb9c95962af70d05537b4d6f47a709071bd8b1e27c72533faabf5923&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
