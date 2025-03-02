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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJMNLOLW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQClLNtDOdDE9%2B74R7mZ5F8rjqPZuN6RZ%2FNKpOJ6h8zPzgIgIy0eDI1cMGDknNzbVYwHGAqsUTMpY7ohWVstbbAWcV0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhP8PqUi0tQE3v9yrcA2%2FvD6wg3l%2FplvkisSI5a90I0C%2BrcivmXzRpF%2B9oiTRIANHzuVLwz9gL%2FEPrxaWkGmaxnqAWAiHKbr7ES7epzv9UaYfcLeufHuzwGouQguwu6ZUimgFfvHIt5MNAs0LU8y2XHZpZzWZIKlYtn%2FFgiWwZ8M7wUMge9RWniursxVULKRRUfu9a%2B6%2Fzfpnqmn37nza%2Bi%2BrI8YPC563LMLR1aIB45fQnkizFAK2L%2FYdWkZdGNecd9Qt2LgkKwU6S0rySWVTOI34FtjVypNGK6Z9ZR80Zv7HxELnuyGlo%2BpPxz3fn2b%2FcBjKwuB3HXg4jz9O%2FsKxHsVVsnYXNI%2F7QCLZoArNoSGjAs1ONd2p6kD9bMd%2FAe1%2BHiGyDd1BZbNdVJOr3Ol0eO8XQAX4mVoVmI6NS17PpSqq%2Fa0JvHMSCcQ4p%2B%2FflplPsxg8vXWRwv9b4hKmaW05kMhNvv0MUHku5iOprNqw%2BWIv7iVezFpC1pGzbWUAjmMYgAfFCVwmAJbS5uHte88cpRWKOTtZKKXf%2B0NEPPpHaWXQmXuwMRYEyyyzJq9CGjqgRnekihOmih36qFpR5P7x4YkP0fN7lvqBi0zRXr9zCBuNyDC2FLSFgtyh33WPk1v2TdkcymsORjBJLMPTXj74GOqUBJfrru6QZlrD%2FBQ9ZrwYxd6YZFepUns0pNMVzUkoi%2Bs1gYq8o%2FjxpL9MkMk2nSAyJzUbPHH7PbVWaG6s%2Fp3Pp7CS%2BCEbTZ5mUJjQr1esZ43uv8n58BzT28MNz5c5IrrjUAOWVeUsFySpC0tu1SpVUoTTL4f%2BTFLOgm9P%2FUwo%2F%2B9aFmfsqIPY%2FpNgLHQS3x0teX79Gd6RzvUg8pkP9eBL%2B%2FRp%2BQ8ER&X-Amz-Signature=3c27e8307a698b9daa817a508e9ff3d5dbd6f3e734853f0c4ef26fb2a7810116&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJMNLOLW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQClLNtDOdDE9%2B74R7mZ5F8rjqPZuN6RZ%2FNKpOJ6h8zPzgIgIy0eDI1cMGDknNzbVYwHGAqsUTMpY7ohWVstbbAWcV0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhP8PqUi0tQE3v9yrcA2%2FvD6wg3l%2FplvkisSI5a90I0C%2BrcivmXzRpF%2B9oiTRIANHzuVLwz9gL%2FEPrxaWkGmaxnqAWAiHKbr7ES7epzv9UaYfcLeufHuzwGouQguwu6ZUimgFfvHIt5MNAs0LU8y2XHZpZzWZIKlYtn%2FFgiWwZ8M7wUMge9RWniursxVULKRRUfu9a%2B6%2Fzfpnqmn37nza%2Bi%2BrI8YPC563LMLR1aIB45fQnkizFAK2L%2FYdWkZdGNecd9Qt2LgkKwU6S0rySWVTOI34FtjVypNGK6Z9ZR80Zv7HxELnuyGlo%2BpPxz3fn2b%2FcBjKwuB3HXg4jz9O%2FsKxHsVVsnYXNI%2F7QCLZoArNoSGjAs1ONd2p6kD9bMd%2FAe1%2BHiGyDd1BZbNdVJOr3Ol0eO8XQAX4mVoVmI6NS17PpSqq%2Fa0JvHMSCcQ4p%2B%2FflplPsxg8vXWRwv9b4hKmaW05kMhNvv0MUHku5iOprNqw%2BWIv7iVezFpC1pGzbWUAjmMYgAfFCVwmAJbS5uHte88cpRWKOTtZKKXf%2B0NEPPpHaWXQmXuwMRYEyyyzJq9CGjqgRnekihOmih36qFpR5P7x4YkP0fN7lvqBi0zRXr9zCBuNyDC2FLSFgtyh33WPk1v2TdkcymsORjBJLMPTXj74GOqUBJfrru6QZlrD%2FBQ9ZrwYxd6YZFepUns0pNMVzUkoi%2Bs1gYq8o%2FjxpL9MkMk2nSAyJzUbPHH7PbVWaG6s%2Fp3Pp7CS%2BCEbTZ5mUJjQr1esZ43uv8n58BzT28MNz5c5IrrjUAOWVeUsFySpC0tu1SpVUoTTL4f%2BTFLOgm9P%2FUwo%2F%2B9aFmfsqIPY%2FpNgLHQS3x0teX79Gd6RzvUg8pkP9eBL%2B%2FRp%2BQ8ER&X-Amz-Signature=ad8689c5321baa7a16cf40f53b74f4155fda3748c46a53facb5979448e5808fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QMZTKW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBaoZ1OHQlHTpNOh9T4eiQvCZKr%2BKHomsH%2BnvLDN5STVAiB2e%2FmVnQGg2rlNBTIItG9uHWfYecPeJjbyIM7C4Eb6VSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM99g0JiE0u%2FybkeIuKtwDYJ2FtCd5nYnh0qByFDuFSorh1nk6hn46Eh7WG9Bzs2%2Fhw8EHYT19A%2BlRx9Y4hjQQfev87HAJxn2fuPzWbW%2FHX%2FNwxAanZ%2BB%2FD%2FrCOfo4AzY3oz7BzbnvXO00CDEkgaDQV%2B1em2sQmZkeWIWQJHNFK1oI5Ox%2BXXDwbsoOHWPFuP%2BF3CP0IMLAwU4AqBV8b2zFyn5NgSJ4qS7c21iE2Snb%2FGpsZZBO4%2FnG88t360zNYMbkgt%2F%2F2BPzroZPB6Up53oCQtU9TzuaxpUjgawDtYT6YprOBRjZk%2FRV4KMKMpf4i6xECQV4YZRxS9zbHf1LrSk9ESqANtXQb%2FrWI6XtJZjx5%2FPdRSrlvsxQ%2B%2FMn7SRqbcQzDeBUWvZceyxzZ8e6kK9o7%2FuectJPtkKpbWgbkYmzYFm0EXFR56Q5FxLDDgZWGp%2BsUE08lzvFO%2B4%2BgNjC3S%2F%2FsEu%2BEOsau%2F82tpFGMM1mY2JqHvcgLyLX6l2XbGGPQeY2gibMILGlUt4m8h2PdOK%2Fte0L%2FOIlOrbq9O%2BpXYXoU1j%2FgVUicMV7xNxpB8GnPOAJfsnlf6pq3Ur0qfevRW771T%2FyXDFfhLRVjX3qS%2Brw42pocrz2BZ0pXPXEprxowF%2FuiquaoudASH8Cd4Yw6tePvgY6pgE1Z34qp6GsGpnP2MG3Hw%2BnyFibykE61%2FpfVBGaIMec9KtQGw5lRpQOEDAE1ssFaeU33Gjx1uWosMtZ5hLQcbgyuAQxCBL0oo5dxvkol%2BvRgs%2BCDrH6LU0GQhhmsls0SscqIZasMsvCLOrE58%2B80yvVzrtkSfuc%2FpxPLFijciP77tzSP2GOQeIe9LvE6m7wZixij%2BoZ77Ib4zJ74d2%2FMmbeCPN7tH2n&X-Amz-Signature=2944c3d3ebb2a24b13bbd5d5e334843bd81a6e42d42054ccdf1a4f8a4ff8d947&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DLRDJYB%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDA%2FUzdlPDR6L6FuI4UQHr3pRjkrTqLViYO3AaCglcqpgIgGYGb4g7Gkcv2NuasUyBs2%2F3FKraQnqeFeSkhle2OdU4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2KEmVjFuZz08xTUyrcA%2B7DcBRXnkxnOyr%2Bo7EA1rVq%2FvlPYhKqpvNlm2NWUJTWyZynsZgRi3O%2FEO55vjOx%2B0liIK83JpAljgzK3SHYMLPBv%2BXeoxqPYRgRQQ1sQgK%2BfUG0uyFuziPvbBIxa5CKJwT%2B1OH8dS1yftN1DnVg%2FVqVFJhWLKn3OLHcoIf5MDq5ILN2ApuuP8hh0RivJfdn8fdfNLcl2ym3n%2FkkuT3YTXJhSH6utXhQOxO1gzYrT02V0stRO2%2BwDNTGg%2Bz7TiZHdHcopiXvWkzaP9Ms2lC8DvJz70Y1ZpMgkl39R4CcT6H0f5Fl86gYOeRFeJ9gd4gyyMQJpvn0AbrKRfymC1WxKTBfP1m6ord%2FcwKX5FPIuPzg%2Bcnni5JS6HCjmdWvABfji4sN0HqcyAN4N2pBjbooOUqaA0cOa0oy2jQWOhZNBvE85ceGHB7FVQMuOBCZLXvXliSKnLssYtiQon%2BHYX7yfHfdWjG7HA%2FuG2hCPeM1iGVGx3omYBswgdsmCp0203Ot%2B91khSkbZWebuDCIMixRtd59okKYFz4SINB%2BszQtbuSdRkH%2Fyl%2F%2FTVFmO8tOYJvDnZeBDH3fgm6v2v3A9c%2FW%2BfP0A5RGZtHxaYshgoCrd%2BwYx3tOxajs6xMt1CRTML7Xj74GOqUByKmZihs71Wb2QWuWwrhpOUqlGLHzeeny78CH%2F32wQHUl0M1VqboGpdqW0%2F0ovhyZlpZo1KUthJZLTPcFHvx8U2E%2Bt%2BjuDqktzwkfFfXdt2v9YVe%2BpQCyEl5v4BSF9Px1PlSJZYd1eHeYX0Py9q5gtGiOii2zpueS8Ud%2FXaXcsQz96zbxCkIhMRe9exZlD2pFwl1%2FsZiq9hdPIqxOFRijVOU5Dgoa&X-Amz-Signature=5b344fbec6b81d22407673a7d9c8797393816a1b677da5276f5cc80bf23bcf63&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJMNLOLW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQClLNtDOdDE9%2B74R7mZ5F8rjqPZuN6RZ%2FNKpOJ6h8zPzgIgIy0eDI1cMGDknNzbVYwHGAqsUTMpY7ohWVstbbAWcV0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEhP8PqUi0tQE3v9yrcA2%2FvD6wg3l%2FplvkisSI5a90I0C%2BrcivmXzRpF%2B9oiTRIANHzuVLwz9gL%2FEPrxaWkGmaxnqAWAiHKbr7ES7epzv9UaYfcLeufHuzwGouQguwu6ZUimgFfvHIt5MNAs0LU8y2XHZpZzWZIKlYtn%2FFgiWwZ8M7wUMge9RWniursxVULKRRUfu9a%2B6%2Fzfpnqmn37nza%2Bi%2BrI8YPC563LMLR1aIB45fQnkizFAK2L%2FYdWkZdGNecd9Qt2LgkKwU6S0rySWVTOI34FtjVypNGK6Z9ZR80Zv7HxELnuyGlo%2BpPxz3fn2b%2FcBjKwuB3HXg4jz9O%2FsKxHsVVsnYXNI%2F7QCLZoArNoSGjAs1ONd2p6kD9bMd%2FAe1%2BHiGyDd1BZbNdVJOr3Ol0eO8XQAX4mVoVmI6NS17PpSqq%2Fa0JvHMSCcQ4p%2B%2FflplPsxg8vXWRwv9b4hKmaW05kMhNvv0MUHku5iOprNqw%2BWIv7iVezFpC1pGzbWUAjmMYgAfFCVwmAJbS5uHte88cpRWKOTtZKKXf%2B0NEPPpHaWXQmXuwMRYEyyyzJq9CGjqgRnekihOmih36qFpR5P7x4YkP0fN7lvqBi0zRXr9zCBuNyDC2FLSFgtyh33WPk1v2TdkcymsORjBJLMPTXj74GOqUBJfrru6QZlrD%2FBQ9ZrwYxd6YZFepUns0pNMVzUkoi%2Bs1gYq8o%2FjxpL9MkMk2nSAyJzUbPHH7PbVWaG6s%2Fp3Pp7CS%2BCEbTZ5mUJjQr1esZ43uv8n58BzT28MNz5c5IrrjUAOWVeUsFySpC0tu1SpVUoTTL4f%2BTFLOgm9P%2FUwo%2F%2B9aFmfsqIPY%2FpNgLHQS3x0teX79Gd6RzvUg8pkP9eBL%2B%2FRp%2BQ8ER&X-Amz-Signature=8e13469d228fe3ff820bc479b0ce8bb89eea9310cf3f775f85dbfef549307f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
