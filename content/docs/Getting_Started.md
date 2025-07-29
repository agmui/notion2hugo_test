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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJEESPOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJKSpWRkkMhsKZmdZpjf8KuyRjRuORLYsQFx1mPmQwkAiAP3AdCvq%2BAVebD7dayIIkiUo3tT9o1nHmWEDiVG%2BQEkyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnVfXngUISqdPcvP%2BKtwDZlUuZFf0O3K5T1KBOU7k%2FzsXvgvUJSIMroiDE8NqE7Nx7mF38aHJQaGRrImdQWaZ%2BUF3XE9AKoQPLp641mwZEWqlPgCq2ho6HCFPwoE2Wn%2FKTT5j9DgBDWMBpctC8GSMdj%2FMoJmsD1b4leFFJYU0y0hmBcpP0j7rvUJBCakRqKwHFpqsTpYCKGgKX51ERzBYcZCAVapIqjItRfTE6%2FQJqRZZJzBvfVeWnUlLOrseuNHbyi%2BAwb3sCfh33Yu9gW%2FcjlO9mrC4UrIoXjXl8kSWlrOEULClirdWHlZ74xvVfFg%2BVwKbulMkxG9qoK5PdtrD3lJhW5dHxebjxpaY0kYRsBEOeaSheE9s6sFAaJ2oSZqxqs4sNJclaxnEEpNM52Ad4cPN73WS187uQR%2FN4spLTP0yLx8JhmvmvyLfMg8QRAPyOiCYukzNaXYQZj0Z6qn23gXGLpIBZjh2I8zcnC6RjPE0DJvZr%2FaUCO3rhRvnx%2FxxjEpXkRYfsXd%2Fd9nQDBTt0o0FfkT8qb0g2Kv6qj3mIVoQbT517zPiy1R0y6zjuYwVl0lYx7AwZIWvpxYqOLR%2FUTWaJArJRgU%2B0P8nGp3U6B%2FYMb8CEifOeOu%2BSqVeCwNWGhRN%2F3SMMieDx%2BYw0P6jxAY6pgG4F1mVLQ3DQaX7VmcBjo9jFw5zvhIqHXIx7IaLf86mds2yRHrwOBSX%2FKsD0ke4kt6zCDqxPf9YrVJCbnanznFxyjOQA7u%2FJAwmaapedYD%2F%2FHI1eThFsWDeYcJ0y2gX%2FSqL5ypxsgd6goDwDMba1fFLeS44PTK812TFCRqL5%2FLKndFwPIHuRdbXvcHbc9yKA6FZBaYmNevxmlDj1MEnF5z7%2FVriJLP4&X-Amz-Signature=92a22d13a675a9b7c88ad846a7cb99c11e3d1c903b0b0080d9b8e82d81c89357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJEESPOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJKSpWRkkMhsKZmdZpjf8KuyRjRuORLYsQFx1mPmQwkAiAP3AdCvq%2BAVebD7dayIIkiUo3tT9o1nHmWEDiVG%2BQEkyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnVfXngUISqdPcvP%2BKtwDZlUuZFf0O3K5T1KBOU7k%2FzsXvgvUJSIMroiDE8NqE7Nx7mF38aHJQaGRrImdQWaZ%2BUF3XE9AKoQPLp641mwZEWqlPgCq2ho6HCFPwoE2Wn%2FKTT5j9DgBDWMBpctC8GSMdj%2FMoJmsD1b4leFFJYU0y0hmBcpP0j7rvUJBCakRqKwHFpqsTpYCKGgKX51ERzBYcZCAVapIqjItRfTE6%2FQJqRZZJzBvfVeWnUlLOrseuNHbyi%2BAwb3sCfh33Yu9gW%2FcjlO9mrC4UrIoXjXl8kSWlrOEULClirdWHlZ74xvVfFg%2BVwKbulMkxG9qoK5PdtrD3lJhW5dHxebjxpaY0kYRsBEOeaSheE9s6sFAaJ2oSZqxqs4sNJclaxnEEpNM52Ad4cPN73WS187uQR%2FN4spLTP0yLx8JhmvmvyLfMg8QRAPyOiCYukzNaXYQZj0Z6qn23gXGLpIBZjh2I8zcnC6RjPE0DJvZr%2FaUCO3rhRvnx%2FxxjEpXkRYfsXd%2Fd9nQDBTt0o0FfkT8qb0g2Kv6qj3mIVoQbT517zPiy1R0y6zjuYwVl0lYx7AwZIWvpxYqOLR%2FUTWaJArJRgU%2B0P8nGp3U6B%2FYMb8CEifOeOu%2BSqVeCwNWGhRN%2F3SMMieDx%2BYw0P6jxAY6pgG4F1mVLQ3DQaX7VmcBjo9jFw5zvhIqHXIx7IaLf86mds2yRHrwOBSX%2FKsD0ke4kt6zCDqxPf9YrVJCbnanznFxyjOQA7u%2FJAwmaapedYD%2F%2FHI1eThFsWDeYcJ0y2gX%2FSqL5ypxsgd6goDwDMba1fFLeS44PTK812TFCRqL5%2FLKndFwPIHuRdbXvcHbc9yKA6FZBaYmNevxmlDj1MEnF5z7%2FVriJLP4&X-Amz-Signature=4e435d00863ae94970afcf2af0457b97e8a03b97efd1a3aadfc8d09636b9e8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJEESPOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJKSpWRkkMhsKZmdZpjf8KuyRjRuORLYsQFx1mPmQwkAiAP3AdCvq%2BAVebD7dayIIkiUo3tT9o1nHmWEDiVG%2BQEkyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnVfXngUISqdPcvP%2BKtwDZlUuZFf0O3K5T1KBOU7k%2FzsXvgvUJSIMroiDE8NqE7Nx7mF38aHJQaGRrImdQWaZ%2BUF3XE9AKoQPLp641mwZEWqlPgCq2ho6HCFPwoE2Wn%2FKTT5j9DgBDWMBpctC8GSMdj%2FMoJmsD1b4leFFJYU0y0hmBcpP0j7rvUJBCakRqKwHFpqsTpYCKGgKX51ERzBYcZCAVapIqjItRfTE6%2FQJqRZZJzBvfVeWnUlLOrseuNHbyi%2BAwb3sCfh33Yu9gW%2FcjlO9mrC4UrIoXjXl8kSWlrOEULClirdWHlZ74xvVfFg%2BVwKbulMkxG9qoK5PdtrD3lJhW5dHxebjxpaY0kYRsBEOeaSheE9s6sFAaJ2oSZqxqs4sNJclaxnEEpNM52Ad4cPN73WS187uQR%2FN4spLTP0yLx8JhmvmvyLfMg8QRAPyOiCYukzNaXYQZj0Z6qn23gXGLpIBZjh2I8zcnC6RjPE0DJvZr%2FaUCO3rhRvnx%2FxxjEpXkRYfsXd%2Fd9nQDBTt0o0FfkT8qb0g2Kv6qj3mIVoQbT517zPiy1R0y6zjuYwVl0lYx7AwZIWvpxYqOLR%2FUTWaJArJRgU%2B0P8nGp3U6B%2FYMb8CEifOeOu%2BSqVeCwNWGhRN%2F3SMMieDx%2BYw0P6jxAY6pgG4F1mVLQ3DQaX7VmcBjo9jFw5zvhIqHXIx7IaLf86mds2yRHrwOBSX%2FKsD0ke4kt6zCDqxPf9YrVJCbnanznFxyjOQA7u%2FJAwmaapedYD%2F%2FHI1eThFsWDeYcJ0y2gX%2FSqL5ypxsgd6goDwDMba1fFLeS44PTK812TFCRqL5%2FLKndFwPIHuRdbXvcHbc9yKA6FZBaYmNevxmlDj1MEnF5z7%2FVriJLP4&X-Amz-Signature=2504e6a4db9e3c2176cca2a5c277e85a4c715f7141617172f173364b758ad9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64ZD56V%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTPckVdUN2R9mYYkhBc0XI2lzdaTHyeCiSHr8Zy4%2FyNwIhAMFap4Riy%2BI9sj%2FUpUKLU4adCWbl2Xb2%2FDJbYgWtlXjFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjs3XpAHkxMQPGn5sq3APP5MywqWF2v9QI3xa1RI2%2B%2BIE6lTCsCyS3TPaB1ctDlDp5PBuvUzpC83xveYyIus%2BgJVUdKdqVCNM%2FGQf8ADD4kzCexKFcog5lTlPbFwNJ7%2BEUikpStI8EoP%2B6mhEByvyV0i7aioqL6jRfrBiOu5GAKIeUCO1xlX28T0pbV5b0Fk4Zqz%2FMKyZootXhjrNFjmsBSiXYOP89boRZn5hXBWlTruV4RN7TPI0E6IuPUh42koLBpYwIzY0OYsjNyGhRenslBAFw8O4brhzKBrdOISIT2bjqAgB3VLZ9WooiifPaymOh3jXIxogryNdJg7CDrSKEN2LwpPBo%2Flr3iF90ekkwnmJ57njvBcVqsCNnfYEkC3cTb%2BI9A91jtxyhSmsSS7z4fPrIY%2BxbTNRjbgJS%2BGsjFMOb4NcvrAW0w%2FwxSZvWONN9n7ZYDLg9UIgsJW9sKOQeXrCII1Cj9rI46P8O%2F3CRNbBbCGeJJE5mmuYdhg%2BcGlNqUrwof2yNHk74AXoIplPRQ2MOPyOLPgH%2BqFZQUGTLYUsgkVXW41QTyFVRE1uHyzSb4h2lYSe8US83g0cAZJxt1uLJ8bUrV6O1vbV6x2QZ9jVBxKgsjzdkVXiUy8UUZho7GNZhaiaiapRcHTDg%2FqPEBjqkASbJ8WKQ1FCIm6BX9YjH7KP61fdUSny7F07I15Tu70eMyQv7vJynHG3gNlFTb5WpDwTH%2Bzl%2B065OEVhJxXBZRg0loZdj3R2XO2nnYfbKURGbIxgMQhy0YMoyhJKIyxUmwIYxfaIH6tQ8e9592UdyopUqkNyQdzDZ4D54Gn5W%2FqjRhvHIKvJSgt8RHzGpqXsNjT%2B2ur2tosMnflNQ5Pez7AjcJudl&X-Amz-Signature=0317a245b8595bd561c98d084f39b3d81a1d73652a04c3f8047c8b93eb4622ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KLYZWYE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDAAXh9dwxdOpurjZ4DKYtWhFY%2F77osolqgF4Osq6THAiEA9xaDC%2FsthigGFcvkjYVGTeEzDJJFp6skPMGbxq1t5HIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnJqo%2BoQeSrxGZmnyrcA9yeaLBUkYg%2F7XiovZDfOlxsuUYARBbtgLsiOb2mBSodP4v5F7%2BlIBkZsqMpwHFElq84lDRNJcLC%2FPzDfrl7muyILJJPkzoJhJy%2BgtVEeIfYcj2zkB9oE6vUZBF04KXubteTYbsfxdzNz8Z6Nw6e4lYfWZ97OG2PI9XZLzkipKwno31eSrHb0zK%2FsrImiK3oKqwRUCHb%2BTCYlpu0926pZIJyRo7Kn0jgCf8GvU6uWHGg3Nr6APvyMK7Er5IPhTPZR2VQbHwE1yyAR4uwthns26su3iIUoeyIkw2SK5Agk9tvd8BHtGJEJcmECWWTSFl9i5Jf8aZdQas%2BAGFxKJadNzEGa17%2FyaGUT17uzd%2B%2FcH1azt6%2BMeoLVXsp3%2BHDRZfWz7O2j3f%2FuPXeLCQIWpDo3ETwpazE9GQU%2BvKtU8FHXkmq1kHaSKQhRbssCOtZxXH7RPRTdTFHEBvnFGVa2hGh%2F8oMiAIbUFMyHmst9337jjgW3mddSCSAONtHw07Dd8tieCp13YHnYNKE97pBDWWXK9oUOJDFesUtamQJglX97b3H4%2FZdQOA9z4Tly5S08JeP3AVdKcL%2BAiMrR8EkHhrqzwZROtfbjrwm6gvgzau%2Fxugzvm6Uzhqy5KpBaqPPMKn%2Bo8QGOqUB6pUl4nybHN0vlQEkgNSNAmorERxekutuedfX9rmep85mY2sESkfc61f3LKNuw1HA%2Fyqz6GDFcaPaiKeG7e4T%2BGCUwPpbl4PIQ90L8lg5bbp%2FitaqZDjQiMXx9xu%2B%2FibhPGcLEh%2BnPwK8NRaqhY17YxgKCoOYXq6r9NuVhYWPjiHXVgbzCc%2FM5Wfo4lqWV8ZEqtG7LKOnVcqjE8lYcc4B%2FtxZGj%2F%2B&X-Amz-Signature=ce14a988611f2949f3ea520d4c4be69f8de1f971e57b7ff1dadd249f6761dcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJEESPOA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJKSpWRkkMhsKZmdZpjf8KuyRjRuORLYsQFx1mPmQwkAiAP3AdCvq%2BAVebD7dayIIkiUo3tT9o1nHmWEDiVG%2BQEkyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnVfXngUISqdPcvP%2BKtwDZlUuZFf0O3K5T1KBOU7k%2FzsXvgvUJSIMroiDE8NqE7Nx7mF38aHJQaGRrImdQWaZ%2BUF3XE9AKoQPLp641mwZEWqlPgCq2ho6HCFPwoE2Wn%2FKTT5j9DgBDWMBpctC8GSMdj%2FMoJmsD1b4leFFJYU0y0hmBcpP0j7rvUJBCakRqKwHFpqsTpYCKGgKX51ERzBYcZCAVapIqjItRfTE6%2FQJqRZZJzBvfVeWnUlLOrseuNHbyi%2BAwb3sCfh33Yu9gW%2FcjlO9mrC4UrIoXjXl8kSWlrOEULClirdWHlZ74xvVfFg%2BVwKbulMkxG9qoK5PdtrD3lJhW5dHxebjxpaY0kYRsBEOeaSheE9s6sFAaJ2oSZqxqs4sNJclaxnEEpNM52Ad4cPN73WS187uQR%2FN4spLTP0yLx8JhmvmvyLfMg8QRAPyOiCYukzNaXYQZj0Z6qn23gXGLpIBZjh2I8zcnC6RjPE0DJvZr%2FaUCO3rhRvnx%2FxxjEpXkRYfsXd%2Fd9nQDBTt0o0FfkT8qb0g2Kv6qj3mIVoQbT517zPiy1R0y6zjuYwVl0lYx7AwZIWvpxYqOLR%2FUTWaJArJRgU%2B0P8nGp3U6B%2FYMb8CEifOeOu%2BSqVeCwNWGhRN%2F3SMMieDx%2BYw0P6jxAY6pgG4F1mVLQ3DQaX7VmcBjo9jFw5zvhIqHXIx7IaLf86mds2yRHrwOBSX%2FKsD0ke4kt6zCDqxPf9YrVJCbnanznFxyjOQA7u%2FJAwmaapedYD%2F%2FHI1eThFsWDeYcJ0y2gX%2FSqL5ypxsgd6goDwDMba1fFLeS44PTK812TFCRqL5%2FLKndFwPIHuRdbXvcHbc9yKA6FZBaYmNevxmlDj1MEnF5z7%2FVriJLP4&X-Amz-Signature=0840949a6619befb911ab2a73e16db59f9ca099afa340b8cfb365f4a418232e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
