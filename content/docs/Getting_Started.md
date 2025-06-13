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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQMIG6S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGjHr0leIlFGlr21%2BpIQUvN5Wf%2BymQqTwxgKnkGbZpG6AiAhHW3hP6wMFEnlar8vGnxWeYhY%2FhLiMtRH1EGQyFWS4Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMM97ycAozt5QL%2BkL3KtwDp5m7zGCN6WSagMlDKPWKZa%2Bzs17UEqxIxjP4FcKdoGSIbJutOGfFdJ3AM2%2B8VqS6YubxyYvncJW7LtZWQL0rlaUDFoOeSaQZh67UhdIjxfds9F%2FoqCM1QNlMhZKxyxcLZ%2F2h%2Fc4TVy4p5wOTXJOumJk79mNAjEHlTBm0F3u6KtniBpGx8e6W45avLD87ea3xWwED7rQ4cs%2FZJb7ERlDQnDL3oAGSfZTq%2FfajVJwtHjZEwVQDFylEJZugj8HRuiwOXFZQC9owm%2B4iYLL3jzoREOhQdU2B7v2kup3wusbzgKUAenTgTcgVCGN2VUsVbO5lfClyE5hoc5fnZGhQqgY0A%2Bgbpnt0xjSqYv86kk8Hc583b%2Fmg5XohKkxLPCHqv2OZ09ojFyps1kXrzhp65U9Nuj%2FgXnrtTPukXYNfOzsXr4XvdH2%2FPY28aU7Vz350ETg8zqu4hmGQj1ykYct%2BibMJuOFEqzS2ZUyPGocH6DRv2ScOyPcxgsIoBIVrl%2BV%2FXeJSVRWJOTg3IKhrKrfXuWHQkHK5jJd4J1%2FvJLZrb12AnY2xshbvOZEDB%2BahvqFBK3vbhELjb%2BG7tS7TInEjQ974bfIrAX2uby9Uin3xOR%2F8WH0xpB%2BDJWL9B%2BuqEYQw7LmwwgY6pgHpZyyV%2B8vfFAvTxedWdGVXkZBQ5vCnYn3Azc5fEWFZ1Co3Cm1PMaQWcA0iVpulg32QLVCnlUNOnxlPdXmCm8sKr5CHLjTX%2BR5kU0LlZkeZLnuKnDHnvDQ9h6%2Bimcf3DfHptbWLSm8jb4ZaFF8Ekgg1sNUydO5sOxfsNQ0CpzB8Xm2i93QiJpKH7VVWGjeoJjHwjtctu9XIqVd%2F4TGiqtKQu0l7mKLF&X-Amz-Signature=a1ec41c17a2c313cd6437c4ecec8e984fdc0b87b2cfbe3ca045f7c15732042d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQMIG6S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGjHr0leIlFGlr21%2BpIQUvN5Wf%2BymQqTwxgKnkGbZpG6AiAhHW3hP6wMFEnlar8vGnxWeYhY%2FhLiMtRH1EGQyFWS4Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMM97ycAozt5QL%2BkL3KtwDp5m7zGCN6WSagMlDKPWKZa%2Bzs17UEqxIxjP4FcKdoGSIbJutOGfFdJ3AM2%2B8VqS6YubxyYvncJW7LtZWQL0rlaUDFoOeSaQZh67UhdIjxfds9F%2FoqCM1QNlMhZKxyxcLZ%2F2h%2Fc4TVy4p5wOTXJOumJk79mNAjEHlTBm0F3u6KtniBpGx8e6W45avLD87ea3xWwED7rQ4cs%2FZJb7ERlDQnDL3oAGSfZTq%2FfajVJwtHjZEwVQDFylEJZugj8HRuiwOXFZQC9owm%2B4iYLL3jzoREOhQdU2B7v2kup3wusbzgKUAenTgTcgVCGN2VUsVbO5lfClyE5hoc5fnZGhQqgY0A%2Bgbpnt0xjSqYv86kk8Hc583b%2Fmg5XohKkxLPCHqv2OZ09ojFyps1kXrzhp65U9Nuj%2FgXnrtTPukXYNfOzsXr4XvdH2%2FPY28aU7Vz350ETg8zqu4hmGQj1ykYct%2BibMJuOFEqzS2ZUyPGocH6DRv2ScOyPcxgsIoBIVrl%2BV%2FXeJSVRWJOTg3IKhrKrfXuWHQkHK5jJd4J1%2FvJLZrb12AnY2xshbvOZEDB%2BahvqFBK3vbhELjb%2BG7tS7TInEjQ974bfIrAX2uby9Uin3xOR%2F8WH0xpB%2BDJWL9B%2BuqEYQw7LmwwgY6pgHpZyyV%2B8vfFAvTxedWdGVXkZBQ5vCnYn3Azc5fEWFZ1Co3Cm1PMaQWcA0iVpulg32QLVCnlUNOnxlPdXmCm8sKr5CHLjTX%2BR5kU0LlZkeZLnuKnDHnvDQ9h6%2Bimcf3DfHptbWLSm8jb4ZaFF8Ekgg1sNUydO5sOxfsNQ0CpzB8Xm2i93QiJpKH7VVWGjeoJjHwjtctu9XIqVd%2F4TGiqtKQu0l7mKLF&X-Amz-Signature=0d069109f62982376cd830ba13e3acdddbfff4ae5e965bfa13f6e7b38984d65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQMIG6S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGjHr0leIlFGlr21%2BpIQUvN5Wf%2BymQqTwxgKnkGbZpG6AiAhHW3hP6wMFEnlar8vGnxWeYhY%2FhLiMtRH1EGQyFWS4Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMM97ycAozt5QL%2BkL3KtwDp5m7zGCN6WSagMlDKPWKZa%2Bzs17UEqxIxjP4FcKdoGSIbJutOGfFdJ3AM2%2B8VqS6YubxyYvncJW7LtZWQL0rlaUDFoOeSaQZh67UhdIjxfds9F%2FoqCM1QNlMhZKxyxcLZ%2F2h%2Fc4TVy4p5wOTXJOumJk79mNAjEHlTBm0F3u6KtniBpGx8e6W45avLD87ea3xWwED7rQ4cs%2FZJb7ERlDQnDL3oAGSfZTq%2FfajVJwtHjZEwVQDFylEJZugj8HRuiwOXFZQC9owm%2B4iYLL3jzoREOhQdU2B7v2kup3wusbzgKUAenTgTcgVCGN2VUsVbO5lfClyE5hoc5fnZGhQqgY0A%2Bgbpnt0xjSqYv86kk8Hc583b%2Fmg5XohKkxLPCHqv2OZ09ojFyps1kXrzhp65U9Nuj%2FgXnrtTPukXYNfOzsXr4XvdH2%2FPY28aU7Vz350ETg8zqu4hmGQj1ykYct%2BibMJuOFEqzS2ZUyPGocH6DRv2ScOyPcxgsIoBIVrl%2BV%2FXeJSVRWJOTg3IKhrKrfXuWHQkHK5jJd4J1%2FvJLZrb12AnY2xshbvOZEDB%2BahvqFBK3vbhELjb%2BG7tS7TInEjQ974bfIrAX2uby9Uin3xOR%2F8WH0xpB%2BDJWL9B%2BuqEYQw7LmwwgY6pgHpZyyV%2B8vfFAvTxedWdGVXkZBQ5vCnYn3Azc5fEWFZ1Co3Cm1PMaQWcA0iVpulg32QLVCnlUNOnxlPdXmCm8sKr5CHLjTX%2BR5kU0LlZkeZLnuKnDHnvDQ9h6%2Bimcf3DfHptbWLSm8jb4ZaFF8Ekgg1sNUydO5sOxfsNQ0CpzB8Xm2i93QiJpKH7VVWGjeoJjHwjtctu9XIqVd%2F4TGiqtKQu0l7mKLF&X-Amz-Signature=fed5ba46d6632d5a901558dc8a2f1a2cc68a0ccf16827ef8546f2c5e91a97fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJT6DGI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDkOQCYCImcGMejDI5w7PfqsN%2F7gwGLDkpU2%2FAWtsNRhwIgM3gondBzDnAy89neWm3FuRqZ78K%2F8xVjGAEvKf6cq38q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMWXZyyzS6YolaZVEircA2Zdl0l19jj0s7A2Qc0KKW848FjyoqOk%2BD83BohLmWASvu%2FONqCmlhvIl5jZdEaflzCmyno%2BgxEO%2Ft%2FPqjpbujd6w3Xpz4o648YzCtholvv%2FUmyWO3iOe27%2FYRx4T2L4mPRGcGtzuXYpRULeLHB2dR0PcjjyuF%2FQgFvAsXM9Sl3Wyx%2FMVfXtUhHwAOJKBnLxoADoLvGsXjJlm4X22xe3zt3h%2FKZkYsuCG59ksegFRxj9O4nUVKhOhwqsWD4KfJITvK%2FSk%2FAr6494PzDgkLAIrdFAp7AXi0xeLADvPa8VAkkzh2GzhEVtXxrVmnn02JsIeRkXjLo5GezSKmv3OO8XpojoVbpYEY4uJCOPK6zoroJhXc5dW5q2gF4FPB%2BBvS4eisCo71hcMW4d6p2jlF%2FWjQQwj%2BDawAFx1uwe%2FS2kYrXZOALYuYqomm3inkZwdieoPOfKfmu1cjgCqJfaQLOehVP6mlyuiDyAqYTM00XSKOzA%2FvN0gsIvA4Q7yqCtvYtpdOQwXOweE1Esp38a5bClWR6u8MM0cqxNOMfjFyALZ6tKXCQ81spl547J4%2FQ5JkLNN0ovi8rM2PrkD2%2BMtNlCwCVJRm%2FzQ1I0%2BJNbrhG6d%2FH4eFxxPXkYysLe9CtTMK6psMIGOqUBrCMN0gjoqxfePN3%2B%2FcN3iNE0Epjmj700QlvIhwmNpZtA4zLexxCVOJuKzKwWwKVQUqvfGa%2F%2FlQ1Dc%2FNAMdply5XBTz7nTI3y%2B5zC%2BcsZMwYwScGDMhuhi%2FAhxrJU5q3FVhgPuVET8RGuQZ0fZQTgc5zxVRvu%2B5s7TwahFQ3nas77x2Kc2D8cNWo%2Fdjg%2F%2Fizc1DLdZGZeHTqGPth9HDuovKg%2BjHis&X-Amz-Signature=c91ccbc8a2f5997b8cc6fc7be49f12a97cc4c1977e0cef454864d9afb74f16d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXVNKSG%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB5c9ZKfkq1QyxI8DG1fAtmlAzqIQ%2FWSzZyPI2TZCiO%2FAiBTRo2W2DRzY%2F4z6fXYh2TxOwXcBxZ6KBkY7G7MgLscuyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM6gkNJg3vcEJc3NPYKtwDHLr6FBO1cDWzXi7c8BFH7gmhnjJ59bUPGhCtdSRtU7ejfah4frfFpPh19sPw8fE%2BoGWe63pXaoY7hZk%2FaoYAmWtLSmhIYUm46xMOU%2BMygFYqvmN4Glv9KtKOv1CcvgacaTMcKBXapEwjnYZ2pqT9nvrZt1GZ2kMbVD5uiv6dWgv6JidCNZuMlbaOSHv67vTcVsPLpoJFHIDcS5S%2BNwnlYyWtKBO7to7oMt9Ndmy7i6WKfENhI%2BiVt5XReltLoDOm%2BoGAc44wOleKQKEgt5ytMs%2B%2FDZeauPWtDZOV%2BW1hKNe7gk1w3ys7xd4hrpgxTql3n%2BewhCr2UDSc4JzIfdtTHGVX%2Bl5X2R2TaKmk%2BJDNB0HKo4J%2BUfYZaEyaJEGCjPeKfsMwtfICEn9VQnFa6BU6Qj%2BlUcUefYHF7i64RCj%2BrwkMFXJ4Xqw1H4ERjZd8jGRLtbsiRs8XHaXjlkHDdroFkpEhmdPMeCzjlX6LIEywJrp7hpWdW0oyfdABlzg4K7i1Zgx7I4Ku%2BE8R%2B5WliyqQw3XIXh4HQ0VeavI3HpygxiQcLKQxljC4ETbJCHrMkmW%2BC%2FvpQ4IK30atUNdNp7CYL0m6CygCixRbnFdXNkTrhSKUXcETqzphAgORinEw2KmwwgY6pgH795seqbVBG1IcN9%2BePK423W32EfXDQik2tMVDz1sRDd11oFAdTx%2FRUbcSjIDBnacwuh96sHROwLQs51AN%2ByfHCgZTGswJfyAZUXnTLdKsevld5BKwsl2vPKBHvdnzf6sub1TqsXboM2jhUVsHD1JGgqNz99FQ5RHx7sXlnIT3ExyqF3axVr6OmPtmdlJnjss20Qh1gTB2wFqI7KMjbEa7KmS1v2hk&X-Amz-Signature=849b42e5364b6cd429eb33d4a420aee98b3360685e5e8c14e3535450f5ff7c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQMIG6S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGjHr0leIlFGlr21%2BpIQUvN5Wf%2BymQqTwxgKnkGbZpG6AiAhHW3hP6wMFEnlar8vGnxWeYhY%2FhLiMtRH1EGQyFWS4Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMM97ycAozt5QL%2BkL3KtwDp5m7zGCN6WSagMlDKPWKZa%2Bzs17UEqxIxjP4FcKdoGSIbJutOGfFdJ3AM2%2B8VqS6YubxyYvncJW7LtZWQL0rlaUDFoOeSaQZh67UhdIjxfds9F%2FoqCM1QNlMhZKxyxcLZ%2F2h%2Fc4TVy4p5wOTXJOumJk79mNAjEHlTBm0F3u6KtniBpGx8e6W45avLD87ea3xWwED7rQ4cs%2FZJb7ERlDQnDL3oAGSfZTq%2FfajVJwtHjZEwVQDFylEJZugj8HRuiwOXFZQC9owm%2B4iYLL3jzoREOhQdU2B7v2kup3wusbzgKUAenTgTcgVCGN2VUsVbO5lfClyE5hoc5fnZGhQqgY0A%2Bgbpnt0xjSqYv86kk8Hc583b%2Fmg5XohKkxLPCHqv2OZ09ojFyps1kXrzhp65U9Nuj%2FgXnrtTPukXYNfOzsXr4XvdH2%2FPY28aU7Vz350ETg8zqu4hmGQj1ykYct%2BibMJuOFEqzS2ZUyPGocH6DRv2ScOyPcxgsIoBIVrl%2BV%2FXeJSVRWJOTg3IKhrKrfXuWHQkHK5jJd4J1%2FvJLZrb12AnY2xshbvOZEDB%2BahvqFBK3vbhELjb%2BG7tS7TInEjQ974bfIrAX2uby9Uin3xOR%2F8WH0xpB%2BDJWL9B%2BuqEYQw7LmwwgY6pgHpZyyV%2B8vfFAvTxedWdGVXkZBQ5vCnYn3Azc5fEWFZ1Co3Cm1PMaQWcA0iVpulg32QLVCnlUNOnxlPdXmCm8sKr5CHLjTX%2BR5kU0LlZkeZLnuKnDHnvDQ9h6%2Bimcf3DfHptbWLSm8jb4ZaFF8Ekgg1sNUydO5sOxfsNQ0CpzB8Xm2i93QiJpKH7VVWGjeoJjHwjtctu9XIqVd%2F4TGiqtKQu0l7mKLF&X-Amz-Signature=e5586f35c6c82a21238e5593aa8ad241d419cbc08866a6e6de39eda030e86199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
