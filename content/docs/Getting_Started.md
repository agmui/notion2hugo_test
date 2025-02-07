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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WXEELO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCL5r4IGZnyOupTIalcHt8Z8Z3aJ%2FwD%2BZ1GV97XKU6PbgIhANI1P4F397XegzNXZcAVM4vZk6CNA9y7TUQv5YgQpWmSKv8DCH8QABoMNjM3NDIzMTgzODA1IgwikGQCrmrrGaEwpRwq3AMf9ZBFuzS0Wt2edlr1AYIj5TYXdZWEyPdr6TRSs3mMkzw5H5b7HfHcIU7qnUxXUfphPnqVQ1NAREf8vhjniStDIyqpIyHyfRzT1AzqW2rSKaVf8o452ezCSrjzvEPBH33jeHMEtf6YN4Bq5a7DVM3OHD1LfibhkXAer%2B2QrJiKE2SXHJEMTSKQ10Ai%2FfWpqnmtyvDLAwzJj4ZdYnUd%2FIhwKuAv29%2FAWnqqL3U00PoBLUQXmGpT2sFvXA2qpKgETyRn5lWL7syXu4tVq3gXVVHMMQHXV7QagKhe52FswFvUbOOVXSvAVPQGRjg0WaW4fw2jHinbBgJSgiHSHueuO9Zh5%2BZ3vwwVp%2BE7kfAeG96PmM5wD4DfJtlhdrXUYuKQJdpDVxwyXBmzb8L3RUHi6F7fOqwMS%2BP5d3jQrhun3I92UQDZZfzcONoDe57iAXhw1nFceLilCc%2F%2FvSlQkmFKFhL9fAnrCuM0j76%2BeIgTXHHnwJHFcUXgp0Hyi2br9yaQBaYD%2FHow2sMxgHsHHhUKx%2Feilh1j8G8DhYkhkNqA2ZA2f7kxUglzBdEzwm4jJMZoLmVdzjPJ%2BxRIWocOblWJi471OSiSD0EhyMiMFSWsavtAUtosNOfYYC%2B4B53hvTCegZq9BjqkAfqrxZegoij0yM86cDVXngmsi%2Fc6f5ZxjVzXXiL5Svyz6fq5lepeg%2Bt%2BDzEcY7lfdIiG0B5VJoImxCXNXOlqH79Zl4VK4Jh%2FcFbX1x%2B2Yp1o4ABInlk0JYQLp3Ks2X11AX%2FosRXI3YHeZYIDBTEeMhzeS3v2mIdgMGw4HnMykidHEwUlhn9S1a%2FnaWXa52UNHJzunkm49ScAZpPGqqVllMRyRX5l&X-Amz-Signature=f58b2b1d99613f15b7fb8181d66bce0cfce39725de43f8bf2c076542604e4ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WXEELO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCL5r4IGZnyOupTIalcHt8Z8Z3aJ%2FwD%2BZ1GV97XKU6PbgIhANI1P4F397XegzNXZcAVM4vZk6CNA9y7TUQv5YgQpWmSKv8DCH8QABoMNjM3NDIzMTgzODA1IgwikGQCrmrrGaEwpRwq3AMf9ZBFuzS0Wt2edlr1AYIj5TYXdZWEyPdr6TRSs3mMkzw5H5b7HfHcIU7qnUxXUfphPnqVQ1NAREf8vhjniStDIyqpIyHyfRzT1AzqW2rSKaVf8o452ezCSrjzvEPBH33jeHMEtf6YN4Bq5a7DVM3OHD1LfibhkXAer%2B2QrJiKE2SXHJEMTSKQ10Ai%2FfWpqnmtyvDLAwzJj4ZdYnUd%2FIhwKuAv29%2FAWnqqL3U00PoBLUQXmGpT2sFvXA2qpKgETyRn5lWL7syXu4tVq3gXVVHMMQHXV7QagKhe52FswFvUbOOVXSvAVPQGRjg0WaW4fw2jHinbBgJSgiHSHueuO9Zh5%2BZ3vwwVp%2BE7kfAeG96PmM5wD4DfJtlhdrXUYuKQJdpDVxwyXBmzb8L3RUHi6F7fOqwMS%2BP5d3jQrhun3I92UQDZZfzcONoDe57iAXhw1nFceLilCc%2F%2FvSlQkmFKFhL9fAnrCuM0j76%2BeIgTXHHnwJHFcUXgp0Hyi2br9yaQBaYD%2FHow2sMxgHsHHhUKx%2Feilh1j8G8DhYkhkNqA2ZA2f7kxUglzBdEzwm4jJMZoLmVdzjPJ%2BxRIWocOblWJi471OSiSD0EhyMiMFSWsavtAUtosNOfYYC%2B4B53hvTCegZq9BjqkAfqrxZegoij0yM86cDVXngmsi%2Fc6f5ZxjVzXXiL5Svyz6fq5lepeg%2Bt%2BDzEcY7lfdIiG0B5VJoImxCXNXOlqH79Zl4VK4Jh%2FcFbX1x%2B2Yp1o4ABInlk0JYQLp3Ks2X11AX%2FosRXI3YHeZYIDBTEeMhzeS3v2mIdgMGw4HnMykidHEwUlhn9S1a%2FnaWXa52UNHJzunkm49ScAZpPGqqVllMRyRX5l&X-Amz-Signature=f9cf3a2a2ec7a343ffb0e36c52ba8d5bbb7ceb7a4b5d94d2a1bd62ba0adb76d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466577ZYUIT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCC1snjrGkGVUg9vfJ04pdyLYxGjGP1hcjBDZaEDSIiaQIgfqwLBddeJzBgaBRgzZudQRrbVIzCMQA5SjPmm4qXQJUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFGbY05i8La1N420TSrcA0CG8U72hfIcxy5%2BpVG7OJYwaDlfvHtkJfow0sp6rXTmPp3MDL55mZDJir5ah3iEJwHBIJFi%2FVGzmQeT1jifjWnIjS6fADFpSt5fU1W86m04AtcSbnv5W7AfzLjD0lmVxKgzpf03R7PxazlzDxJRNnab5v0T5gF7RzWc015%2B6e71E4wqZLoV%2FMDZf0K3y1I3q8nXHeMhPIZDQNg1aUs1hvoBYPjNknOkmZ9dMgYHMCfMmQ07e5%2BHuVJX7mlTmm6hpugKEb7%2FP3Zqx9KM6710TJSFXLP%2BohdgdHxXgmEf8xfX0A0xkjXnmpIUYB%2FLOJb0shiWcaOsNXR1GJDLx6UWGjH37kSvgjkRfTWi71iNPvLgkZLA7SW2pgDx5WmFcwPUKASxBwf1uSXlqPNJmkTXPmVvcz2Epd66TaCqrO9uFndpy7SEYk%2BWK%2BC%2BpORHrMSZ7CBXNQeCxDLnK%2B%2F0cbKbJucSd%2Fje2IlU9%2BaASQpmMOpOBBgUkH%2Bzdjpq5UoWh%2BalA%2F8Iu6HlaWud%2BNcAvo0DrWgYRhhlqTYNxrb8DbfKabslWYJ9ZP7GmtlwZ6f1YN3xLtp29oxEulldvoojfGAUwMq3Swf%2BeR9ksxt9vOh0ZMxlMVdZjND27iSfoyhVMM7%2Fmb0GOqUBIGBeg7GFoFFswvagwfjVAXaLg25nI7x%2BPDZuBh01tmag2nfHpVvBSfmEvYfquzJ5jeDxZwIoRbOkQrcl4O8s%2F3GR%2B9LWlsHkcY4SWAhVn0In8X%2BdQOa%2FDEAmLw9XgFwGLdNQQnzXwr3QzLUNC7SRonMVPLqK2ZSc8ouFh2jB64xtgiMjrHYaVzlWgJlSRJkm7k5P5EhXKqm9mEC%2BuUqIz7qqtRGG&X-Amz-Signature=311cfeebb46fd7a6aecdfe54eaea1ab4ea336c608db6c971a74aee6936b3744b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIKWQAR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCOW2Knmxi5o7FQTgwUEdYAF1uRhGBrDm1hoehGbbT3sgIhANjk4zKik6Kx634gHUng5rLu0hpaQoYydibz9gQuoOidKv8DCH8QABoMNjM3NDIzMTgzODA1IgxnPfelponkw60W3Owq3ANs2GiqH55D7ZT1cM0sCy0KJHGN4jVsfv4QOh9yGCYhJn9xYcXTndEgf%2Bnf7k4YvqVC5eXx36MM3%2BAa%2B42GeAEsES9j7xYX1vSiyFUO%2BJ9Yy1hBvGtbD%2BPqTndva3n4wnhLAn%2F54fjX16gGOhQE12DiPfurEH2uV5By9xbsq5EOvdnoTf9S2aDnBzSfo8o98UeXNewYEO4xJIZoFsAsrnmRukcY9Es%2BYkRGwMQZEkK80wjhLQCuzWt78T0c4fC30IKp9RDkYyKMYg47PM3GtYBGeOz8b%2FauTV7SGWaNa08D3T0fky50lPs95dhiJmLdFow5%2FsKP0Ftxpf5tMOenHRRtzbNiBFA4N%2B8VZk0h3y4ACNFZIaUGvpnxIKHSW9letc%2BXoT4RQBSqJuIlETzVQL0QrQtoc65WAR5o2looULv%2BdyNENgydO%2FLMEHHIpJbDiBQFdxJhPtzgRoJxYf7JDardw4ZRkIa5Wrvvw%2F7BhHANTekrZhfDRnHZYzHpwS%2FP0c6m4vGZO9M%2FaSQB49Jwvfq%2FBXALZxSTnFNa1TM05lGP880WwZtE%2BWc8kWUS9SywdRps6v0HxgI1ngzA2jqnPUIK8ssrfhtEC%2FAzktrz4hbpx%2B7t2N%2FfWezM0M%2Bq4TC7%2F5m9BjqkAQIMYYkgTUVgbirIXpfwBm%2Ffu0dY8YY19LoBpg0G8JoAogwXYWujcRtH1OYas4qm79wAQNQnRn3a58V4PgySNDZYIkxRsvxFbEXwTink3f34nfCfv6neZ3uOv5G0JE6SjwIEzrLUbJVVShHbhZPda%2FqmXQhOolOOfFgqJ0NSdPfnjOZGYhhZWr4N8%2FkCdpPS8Qmfl3AdfxWbe5hk8wFoOv2IOf%2Bd&X-Amz-Signature=c8d75fb56ac8cb4c3617805731309c6b00a904770f545510dff129c91f442106&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WXEELO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCL5r4IGZnyOupTIalcHt8Z8Z3aJ%2FwD%2BZ1GV97XKU6PbgIhANI1P4F397XegzNXZcAVM4vZk6CNA9y7TUQv5YgQpWmSKv8DCH8QABoMNjM3NDIzMTgzODA1IgwikGQCrmrrGaEwpRwq3AMf9ZBFuzS0Wt2edlr1AYIj5TYXdZWEyPdr6TRSs3mMkzw5H5b7HfHcIU7qnUxXUfphPnqVQ1NAREf8vhjniStDIyqpIyHyfRzT1AzqW2rSKaVf8o452ezCSrjzvEPBH33jeHMEtf6YN4Bq5a7DVM3OHD1LfibhkXAer%2B2QrJiKE2SXHJEMTSKQ10Ai%2FfWpqnmtyvDLAwzJj4ZdYnUd%2FIhwKuAv29%2FAWnqqL3U00PoBLUQXmGpT2sFvXA2qpKgETyRn5lWL7syXu4tVq3gXVVHMMQHXV7QagKhe52FswFvUbOOVXSvAVPQGRjg0WaW4fw2jHinbBgJSgiHSHueuO9Zh5%2BZ3vwwVp%2BE7kfAeG96PmM5wD4DfJtlhdrXUYuKQJdpDVxwyXBmzb8L3RUHi6F7fOqwMS%2BP5d3jQrhun3I92UQDZZfzcONoDe57iAXhw1nFceLilCc%2F%2FvSlQkmFKFhL9fAnrCuM0j76%2BeIgTXHHnwJHFcUXgp0Hyi2br9yaQBaYD%2FHow2sMxgHsHHhUKx%2Feilh1j8G8DhYkhkNqA2ZA2f7kxUglzBdEzwm4jJMZoLmVdzjPJ%2BxRIWocOblWJi471OSiSD0EhyMiMFSWsavtAUtosNOfYYC%2B4B53hvTCegZq9BjqkAfqrxZegoij0yM86cDVXngmsi%2Fc6f5ZxjVzXXiL5Svyz6fq5lepeg%2Bt%2BDzEcY7lfdIiG0B5VJoImxCXNXOlqH79Zl4VK4Jh%2FcFbX1x%2B2Yp1o4ABInlk0JYQLp3Ks2X11AX%2FosRXI3YHeZYIDBTEeMhzeS3v2mIdgMGw4HnMykidHEwUlhn9S1a%2FnaWXa52UNHJzunkm49ScAZpPGqqVllMRyRX5l&X-Amz-Signature=7fb52833b89fdffeb40f631330d0d79ecd123dea9def852131078ef33f2c8a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
