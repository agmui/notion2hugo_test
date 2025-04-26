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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OHPPCU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqZVuY49fwgk3%2BhE9pShoznIVvHt%2B0j6SHqsb8st0BQIhALOD%2FgqpUYz1bWlNlsoEyJb0jL256UWD%2BRBk29n1wkAAKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOof4gaiIWHviUv5Mq3AOV0c05U1gZv%2BktfQE7%2BCKBuQ7gco6eF51kTTYLx6G11tQr9zegOPDFi2N9%2FnnGrJfQ9tsLtFwI6O1H7qBBfFb2mzjiBHvXXkjqlxkpMaRUHulPpRv%2FkNb%2Bnv99slJlCIgHhqIdp0MTDIy%2FQ9KpMLFWnz0%2B9Juvhd1n0o6PFfkQ2RokWyb5PPXhbAJairKaihzm9diZqAnvBmSvhjNFtiQZjnLdhdjiW16zt0bhtH%2BugKMmMWn8NHF2tu5vYpjzc6x9xV8j7%2F9oy1jqTShC88xPlPjBm9JPXyy56wKGGiRo48gwNr4NS8MT2OaMwgoig07QwrTl6RwLBog2JcQ6G8dw5fDil53jetbxsn%2FDe15ioHfM7QAcWnnz8YsFXC385EacdTG4MITd1%2FPK5liMfTC%2BeskQraw4PDt1tak33HEVsZSpwHjbP%2BMyz5U48%2Fiy6uQEm3NxHj8dRuIJ6aKihcaFR1XpoiTpZaV9jw5SzZKyBBSLx%2B2EICVF3fD3PmUgftz7wazMwnSQMpaLMOotG4fw0BZzFtSZy%2BGs1VqeHIe4AFdg4kOlL7pmRtMsVnu9ysLz4lwh536ZLxiK8ijZibr7l2jeaIAWglHuW347uMxcL1CAr9EXlX40w9PpwjC1hLLABjqkAZfRzx9WQCnBZ0ZOPS9CcepBS0yzTwcHECUBmDRHrnDBVWnWR4LXOAbd2vXmPXodTf%2F6o8M8kIHWry4T3pwhxNWGFTkeRe8NelxJhmFDLaEYs2qf%2BnzbYdxSrmfNGf06qbUe4uYRj4EuKuA2rltxRHCLGyLZJs5hoA0%2FSAFheAwj1H5jIUa76UiNVZ1G6Kr2W7BqP2DgQhZ8Gft%2FZmqOOdCf%2F3SZ&X-Amz-Signature=db0dc25abbcc78a5381674abf27a5b386cd1156d95b5a94a52455d018456388c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OHPPCU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqZVuY49fwgk3%2BhE9pShoznIVvHt%2B0j6SHqsb8st0BQIhALOD%2FgqpUYz1bWlNlsoEyJb0jL256UWD%2BRBk29n1wkAAKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOof4gaiIWHviUv5Mq3AOV0c05U1gZv%2BktfQE7%2BCKBuQ7gco6eF51kTTYLx6G11tQr9zegOPDFi2N9%2FnnGrJfQ9tsLtFwI6O1H7qBBfFb2mzjiBHvXXkjqlxkpMaRUHulPpRv%2FkNb%2Bnv99slJlCIgHhqIdp0MTDIy%2FQ9KpMLFWnz0%2B9Juvhd1n0o6PFfkQ2RokWyb5PPXhbAJairKaihzm9diZqAnvBmSvhjNFtiQZjnLdhdjiW16zt0bhtH%2BugKMmMWn8NHF2tu5vYpjzc6x9xV8j7%2F9oy1jqTShC88xPlPjBm9JPXyy56wKGGiRo48gwNr4NS8MT2OaMwgoig07QwrTl6RwLBog2JcQ6G8dw5fDil53jetbxsn%2FDe15ioHfM7QAcWnnz8YsFXC385EacdTG4MITd1%2FPK5liMfTC%2BeskQraw4PDt1tak33HEVsZSpwHjbP%2BMyz5U48%2Fiy6uQEm3NxHj8dRuIJ6aKihcaFR1XpoiTpZaV9jw5SzZKyBBSLx%2B2EICVF3fD3PmUgftz7wazMwnSQMpaLMOotG4fw0BZzFtSZy%2BGs1VqeHIe4AFdg4kOlL7pmRtMsVnu9ysLz4lwh536ZLxiK8ijZibr7l2jeaIAWglHuW347uMxcL1CAr9EXlX40w9PpwjC1hLLABjqkAZfRzx9WQCnBZ0ZOPS9CcepBS0yzTwcHECUBmDRHrnDBVWnWR4LXOAbd2vXmPXodTf%2F6o8M8kIHWry4T3pwhxNWGFTkeRe8NelxJhmFDLaEYs2qf%2BnzbYdxSrmfNGf06qbUe4uYRj4EuKuA2rltxRHCLGyLZJs5hoA0%2FSAFheAwj1H5jIUa76UiNVZ1G6Kr2W7BqP2DgQhZ8Gft%2FZmqOOdCf%2F3SZ&X-Amz-Signature=1869dadc497b65f1ad82f401a59147e1c40a5a262171158e96d1123514ec2069&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD26Z6ER%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNL2KrYj4pw%2B5%2BRCz0TyW5oplLkTqY8X79IhU5nyL7rAIhAJ7viNhgxBMa3zxkqtY9I3nj8%2F6adwpqtkGB643UhTPoKv8DCEAQABoMNjM3NDIzMTgzODA1IgyPx073nravR7TQX%2F8q3AO35TiVVflOlHdH1%2B7Cj4ucV%2Bj66XYOBSlBJ6WnaojX%2B9wSBSHBB%2F%2BoIQSgpsvEOtrUcmRo7KPOLStZeWLhenLTAD%2ByqHsuq39bbHwBv8to8gvixzPai5YIs10myXPxfXoL5s9CgdWSX0qqK4JHkS5QVzn3ZGSjxnqMWa4cTgOzumx%2BDSyRkRahMDiyFwPCZ2a7HVi6EjA6OGChryTKHzx88jPKiZNybhNdYJ3jb1%2FIL3bhLtf7nwWIHp0ZsMoKWnTKh0ajVM2P%2FsFGISGREq59%2FIh%2B7tVvz6J6U9rS0xbVFfcmHYXcfNyHdsJjcjQxbGEZOO%2FFEMAunBiwbOei6xv0lFSz3sc03yPscjSnf8B9Wu1%2FE12mqu1OTXhici3u2e36IaUL2Y35heIyPr2Y1pSLiqiE1kE%2FFZbT7xjoUwKpgbB0SF61vglCTz1%2FTTZ8Erh1KDgat%2Fl0uqEOwqbANE%2BR%2BDyzhSoqAPOGow7p%2F15IOIbRNNPRhlJRwWCiMEPm1zMOv4nwC7TgwKfDiUazei6Myck99Kcx7Wx8%2FZvtEh8r78IkLBRoWUC%2FlInLibw6Fp4fNWKIrPOFjLWdhu%2FZgwIMrHabaAHKZ8B9VaPkQl6yhfFpNOPdO4O7t6PhuzDGhLLABjqkAfz1n5SmecODqrmILj8ucXUtPiYJOQcgATDmn7TJFMV%2FI3Vmx%2Fn06mDCaFRtSNIu76JAw5VNaO0Iegu4vVEtvnmz6cffsqEv77U6EWN6hkQyZJuQzKFygEOLnXHDm%2FN7tUo8c1OE22uX3XIxUq3GMU1%2B5PUankOXY2RCEOM033mLSv%2FprQqqQCdBmTJYmLk7v0phjFz5NVwzsQt0umUh9OWhxFq%2F&X-Amz-Signature=762d1a1d75b5678c70bfd7323777dfd1bcfdf28889ab8dc2b82dc0999af5c9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P4AZYUP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIWNtTtx3YOB4ZcANX31qmAA2uJvHAXFMehG8ennMLaAiAW24S5yew1lQlF6pmmSqThYnq6Gq%2FRlEirK%2FHu2vvnair%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpURkl3XjDqmvV8btKtwDIpzHkzM9%2FVJ1fnj0TG8hySvGd49n2oqJJINzaHG8D8xoM8jFYCixTEq0t8FfzxwkYJkXXAp%2BlOfjRN10LVRRT8D6q%2FPgOnIK7Ce7d1cEFBMoaKKk035K%2BVHd%2Fweq53NLMPH0enSbNxSzojbebA19hVlkKh1V%2FFAeOyrkTfUQtFikUccbjmvkbqLtyWmCC0cNA5nQQU0J8QlozH%2BJ00s4Z0Tvm73if2yFN60ccuP5KKxarwyUC1WUKhPctC2w8GS6ISyowflKjg4A27CkrEpEFiBxZr4TjzKDc%2F8e8MHT5jPc4OYKhbiSD%2Fn2YNSZaA8iuJuhoEwBBnD8A7trp0L%2BJ2pfzkA%2FNr5nuqJjPiDW16YvfioIenYHHAFpBbnWqsybPKsM4sx8KUvvtWNHdcvYLHjKuZzyhRC536DqhmI0uelgc1JaN9rTPLZXKXLEdPe8qDB%2BAINF3iBBhCiVSl4kvJERxrQhIvqfjpEW%2B71yT297djh9AhqdKF%2B0b5aFqreimlBSPmdL1URsG%2FQMhEksadoKFNUjdOKSEx9yEj49kMGmDICGMsQg3c6dp6xjRsWHiaOc%2Fv77L1kwgELJXZwANTx6RLlYdMPQ5qZO26WsVrNJRiCZZ74fvzTX1iow94OywAY6pgGlruvHVu7fHihRVartLzwNEHq7eKl%2FxFlIsHXKBggqH%2BmzZ%2FwTOhRJLzmKOrJ61faIwjAuIdpd4KnFN1OpzJYZsQJYPNgNAGY05PIdadUDkK9MBkbDOzhSArCvj3ih07El06kjSljiREkQFDVg%2F5CjCwOY8oSgreMlQins2nOXgnBkVEXCBo%2F75AAqrKIv33mat0TOjr4ryvlTmQNs%2FlfoeBq2p2wE&X-Amz-Signature=4a7afe6e6ec6c9b807880a7dbaa26abc4625119a01d53e751e31e23fd783e5c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OHPPCU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqZVuY49fwgk3%2BhE9pShoznIVvHt%2B0j6SHqsb8st0BQIhALOD%2FgqpUYz1bWlNlsoEyJb0jL256UWD%2BRBk29n1wkAAKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOof4gaiIWHviUv5Mq3AOV0c05U1gZv%2BktfQE7%2BCKBuQ7gco6eF51kTTYLx6G11tQr9zegOPDFi2N9%2FnnGrJfQ9tsLtFwI6O1H7qBBfFb2mzjiBHvXXkjqlxkpMaRUHulPpRv%2FkNb%2Bnv99slJlCIgHhqIdp0MTDIy%2FQ9KpMLFWnz0%2B9Juvhd1n0o6PFfkQ2RokWyb5PPXhbAJairKaihzm9diZqAnvBmSvhjNFtiQZjnLdhdjiW16zt0bhtH%2BugKMmMWn8NHF2tu5vYpjzc6x9xV8j7%2F9oy1jqTShC88xPlPjBm9JPXyy56wKGGiRo48gwNr4NS8MT2OaMwgoig07QwrTl6RwLBog2JcQ6G8dw5fDil53jetbxsn%2FDe15ioHfM7QAcWnnz8YsFXC385EacdTG4MITd1%2FPK5liMfTC%2BeskQraw4PDt1tak33HEVsZSpwHjbP%2BMyz5U48%2Fiy6uQEm3NxHj8dRuIJ6aKihcaFR1XpoiTpZaV9jw5SzZKyBBSLx%2B2EICVF3fD3PmUgftz7wazMwnSQMpaLMOotG4fw0BZzFtSZy%2BGs1VqeHIe4AFdg4kOlL7pmRtMsVnu9ysLz4lwh536ZLxiK8ijZibr7l2jeaIAWglHuW347uMxcL1CAr9EXlX40w9PpwjC1hLLABjqkAZfRzx9WQCnBZ0ZOPS9CcepBS0yzTwcHECUBmDRHrnDBVWnWR4LXOAbd2vXmPXodTf%2F6o8M8kIHWry4T3pwhxNWGFTkeRe8NelxJhmFDLaEYs2qf%2BnzbYdxSrmfNGf06qbUe4uYRj4EuKuA2rltxRHCLGyLZJs5hoA0%2FSAFheAwj1H5jIUa76UiNVZ1G6Kr2W7BqP2DgQhZ8Gft%2FZmqOOdCf%2F3SZ&X-Amz-Signature=5c8ce18609943a84e60317cd2e850b7798cd78d1fb144b4305de37c8a6cde72b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
