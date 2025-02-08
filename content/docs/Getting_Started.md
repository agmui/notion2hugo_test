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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR2TWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDzUFENP%2FFmY0suW7kbCE9o42XcGmOxWdeECNMqDBjt4gIhAJCuqMPezYvtACBraiLq%2FHqOXqpjx5UTC0xDi3pcGwJNKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj9X7ik768Io2dwB4q3AOk%2BWwUJXElR%2B7fyz7Q06HUwALDAlpnI76TZEtYKlnvzppumCXhcqY1B6SeO%2FaRbnedZHbJGmWQI0AaUVPJdzyVNg7WWPywgcxAsKEjyqKIOWZ9OOEMLRo72jmxOheMOw1zAG1akQvOc3di38LesHqEGMfrULiFaZ2px2Ihx6iOj6CxS8Qy97qdYUEUOU1DScYK0s6OPcnVVTzYRu2UExMrBBQmWJ3hlruvakcXy4OLUe8EcQ8gcg214tU2VxbWEDQlr6%2FOC7Qix1BA0i4DBK8%2BFX6y%2Br03u0GAUaWdrwhPjyzKqCGYPBIuVFQriC06fliKcwlGdn0lBqqkOG5VpUBJ%2BA58GfeMQjQV5BOiWa3%2F%2Fr68KQ9fDimQAg5cPQp6l4k55riz9H%2BGrnpgJDLHN6UllYIql2LzWtmgxMpKjKP9DMjVDhTddfehYH6m8o70wXrN7PZoQ8Azv4bqVk7Zl5jy8wNnPiAdNfRDuPuWEhxArA6QCdcrMZSb%2FqdgqXnGsvNgUxo0PV6D5Ijir6l8MLZ%2B1ssMGDXeKgtShWZb5DceQcbC3Indk6sAulX9mdLJ9X%2BpzH2n0yKbTzrZ%2B1KtYsa%2FK0H545TBBY9AVXFUCcJxwE85HFD%2ByO1Y8tD5%2FDC3wZ69BjqkAZf4A1d8EAmx0DP8oSckQCW6FUtslORuLX0TQ3KckgkhIceDxdmEfyw%2Bm3fbS22zRE7UIevAYnP3FL1ofV%2BiQtX3B20wtA9fgGtwHpPbUWyldFIDezlJu9a9stAxRopk03TEcVcXVGYqEgBub0urufG9ZxeR8pzBIxgB5lsm5rx7%2FGphJNPhmIgDjrS4oOGDWeU1wyjtbE9XCqpPfjtBIwohML%2Fk&X-Amz-Signature=e1e1ff4763d46d44997dbc0e3d9fe767ed1d06449017b04d30cae97ecd7d270f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR2TWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDzUFENP%2FFmY0suW7kbCE9o42XcGmOxWdeECNMqDBjt4gIhAJCuqMPezYvtACBraiLq%2FHqOXqpjx5UTC0xDi3pcGwJNKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj9X7ik768Io2dwB4q3AOk%2BWwUJXElR%2B7fyz7Q06HUwALDAlpnI76TZEtYKlnvzppumCXhcqY1B6SeO%2FaRbnedZHbJGmWQI0AaUVPJdzyVNg7WWPywgcxAsKEjyqKIOWZ9OOEMLRo72jmxOheMOw1zAG1akQvOc3di38LesHqEGMfrULiFaZ2px2Ihx6iOj6CxS8Qy97qdYUEUOU1DScYK0s6OPcnVVTzYRu2UExMrBBQmWJ3hlruvakcXy4OLUe8EcQ8gcg214tU2VxbWEDQlr6%2FOC7Qix1BA0i4DBK8%2BFX6y%2Br03u0GAUaWdrwhPjyzKqCGYPBIuVFQriC06fliKcwlGdn0lBqqkOG5VpUBJ%2BA58GfeMQjQV5BOiWa3%2F%2Fr68KQ9fDimQAg5cPQp6l4k55riz9H%2BGrnpgJDLHN6UllYIql2LzWtmgxMpKjKP9DMjVDhTddfehYH6m8o70wXrN7PZoQ8Azv4bqVk7Zl5jy8wNnPiAdNfRDuPuWEhxArA6QCdcrMZSb%2FqdgqXnGsvNgUxo0PV6D5Ijir6l8MLZ%2B1ssMGDXeKgtShWZb5DceQcbC3Indk6sAulX9mdLJ9X%2BpzH2n0yKbTzrZ%2B1KtYsa%2FK0H545TBBY9AVXFUCcJxwE85HFD%2ByO1Y8tD5%2FDC3wZ69BjqkAZf4A1d8EAmx0DP8oSckQCW6FUtslORuLX0TQ3KckgkhIceDxdmEfyw%2Bm3fbS22zRE7UIevAYnP3FL1ofV%2BiQtX3B20wtA9fgGtwHpPbUWyldFIDezlJu9a9stAxRopk03TEcVcXVGYqEgBub0urufG9ZxeR8pzBIxgB5lsm5rx7%2FGphJNPhmIgDjrS4oOGDWeU1wyjtbE9XCqpPfjtBIwohML%2Fk&X-Amz-Signature=6cf579b7641a3d04c45666674021fa632011cc5cfd3818f30710cbe0c06a4c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLCRESX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCxH%2FYcXQl2ql1lzhgvyM5vAjq5qyjPrhIkFjA9CH3WGAIhAORA14lO9qdwn1jvXIVuVN1oE2FL97AGiuXsGB1BmV3gKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF3hEnY5eus6DoNysq3AOT6clyJgQv8rH62jeMBsIfh2xgClhulw8wkUQibiSPRzsU5qEd%2BbjTMREXg4gCrscRinSdx4IgTBxil0ZMk1ne5dWCixGg9RI0sTqtnpg%2Bb%2BoZkUO4XNmqPzkBE8ztSasX8Jm39Z%2FEixanfYl%2FEsv0LvOwyMw3qtpR4ZbFIQKh8oPz3FTBvCTeNg%2BJ%2B3lLGhRw0F49FgM7PE9Z6JZX07n8fBZYI1lkLQEaEjv%2BDmObUtgji4BZdGmGxkDXBR40%2FGAkrUjuUkqYJAJ3r5c8wW1HlSMk6nrIy%2BuWcDdIvtLMsW9QaqizOVY%2FUtUYAWEEpgno3h2o5SuXkD1OVvgfiSo0czixGDKin7Ie6IKaU7h8oJbqmdvBYcabNLiyZIYs4zfhVFJzENGzX5wkQLb%2FWbRRn5tcBrbJCjJ1%2B8kj6QlkYoYfHMd%2BGqOoCf4BdBtLOmjLhNDmKDaxFQY9Vx4xzoDKBrFdv%2BYX%2BUSQwv1wQMF8bjey3U1GUXv6349LCz%2F684UQx1mq6xdVnmvv6BnEHnAear0QUUmULn3OQ4fixZbyYf0E1c2ubpKweRrV7vt4zr0dU5DEdkrw69I7%2F9DZW0qKaa7F801bW62HdCHaX0RjqOHJh7YZaoSmqzkfKjDNwZ69BjqkAa3mLIFcD%2F%2Ffk7h0M5TfFmeO76t22NbKDIa3RiRqSk%2FSt%2FVPpz%2F%2FP01zEhva%2By6TqBeXnbGczpKhcExJFYJJXLgl84bQ1epPisPJ92ty9pLWHVaZSEcNYcCEK7GXgZ9%2FAGQ8Od0uzeckng%2FPh%2B%2BtSoYNUSa3rc%2BBLqSYC8zw%2B%2FrGjWNrbbEKYJiOvdFXNz9paxCqEWZmpQkwvA3zMqGI1aS2%2FguL&X-Amz-Signature=85ced54e05898baa7228f433b8cee1cc05fc83f6e3dee7a939c5398dc8d638fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR2TWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDzUFENP%2FFmY0suW7kbCE9o42XcGmOxWdeECNMqDBjt4gIhAJCuqMPezYvtACBraiLq%2FHqOXqpjx5UTC0xDi3pcGwJNKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj9X7ik768Io2dwB4q3AOk%2BWwUJXElR%2B7fyz7Q06HUwALDAlpnI76TZEtYKlnvzppumCXhcqY1B6SeO%2FaRbnedZHbJGmWQI0AaUVPJdzyVNg7WWPywgcxAsKEjyqKIOWZ9OOEMLRo72jmxOheMOw1zAG1akQvOc3di38LesHqEGMfrULiFaZ2px2Ihx6iOj6CxS8Qy97qdYUEUOU1DScYK0s6OPcnVVTzYRu2UExMrBBQmWJ3hlruvakcXy4OLUe8EcQ8gcg214tU2VxbWEDQlr6%2FOC7Qix1BA0i4DBK8%2BFX6y%2Br03u0GAUaWdrwhPjyzKqCGYPBIuVFQriC06fliKcwlGdn0lBqqkOG5VpUBJ%2BA58GfeMQjQV5BOiWa3%2F%2Fr68KQ9fDimQAg5cPQp6l4k55riz9H%2BGrnpgJDLHN6UllYIql2LzWtmgxMpKjKP9DMjVDhTddfehYH6m8o70wXrN7PZoQ8Azv4bqVk7Zl5jy8wNnPiAdNfRDuPuWEhxArA6QCdcrMZSb%2FqdgqXnGsvNgUxo0PV6D5Ijir6l8MLZ%2B1ssMGDXeKgtShWZb5DceQcbC3Indk6sAulX9mdLJ9X%2BpzH2n0yKbTzrZ%2B1KtYsa%2FK0H545TBBY9AVXFUCcJxwE85HFD%2ByO1Y8tD5%2FDC3wZ69BjqkAZf4A1d8EAmx0DP8oSckQCW6FUtslORuLX0TQ3KckgkhIceDxdmEfyw%2Bm3fbS22zRE7UIevAYnP3FL1ofV%2BiQtX3B20wtA9fgGtwHpPbUWyldFIDezlJu9a9stAxRopk03TEcVcXVGYqEgBub0urufG9ZxeR8pzBIxgB5lsm5rx7%2FGphJNPhmIgDjrS4oOGDWeU1wyjtbE9XCqpPfjtBIwohML%2Fk&X-Amz-Signature=36679754e51c7389fb1583627e42938dffb487bde092b5cd0bb01dc84d70a645&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR2TWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDzUFENP%2FFmY0suW7kbCE9o42XcGmOxWdeECNMqDBjt4gIhAJCuqMPezYvtACBraiLq%2FHqOXqpjx5UTC0xDi3pcGwJNKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj9X7ik768Io2dwB4q3AOk%2BWwUJXElR%2B7fyz7Q06HUwALDAlpnI76TZEtYKlnvzppumCXhcqY1B6SeO%2FaRbnedZHbJGmWQI0AaUVPJdzyVNg7WWPywgcxAsKEjyqKIOWZ9OOEMLRo72jmxOheMOw1zAG1akQvOc3di38LesHqEGMfrULiFaZ2px2Ihx6iOj6CxS8Qy97qdYUEUOU1DScYK0s6OPcnVVTzYRu2UExMrBBQmWJ3hlruvakcXy4OLUe8EcQ8gcg214tU2VxbWEDQlr6%2FOC7Qix1BA0i4DBK8%2BFX6y%2Br03u0GAUaWdrwhPjyzKqCGYPBIuVFQriC06fliKcwlGdn0lBqqkOG5VpUBJ%2BA58GfeMQjQV5BOiWa3%2F%2Fr68KQ9fDimQAg5cPQp6l4k55riz9H%2BGrnpgJDLHN6UllYIql2LzWtmgxMpKjKP9DMjVDhTddfehYH6m8o70wXrN7PZoQ8Azv4bqVk7Zl5jy8wNnPiAdNfRDuPuWEhxArA6QCdcrMZSb%2FqdgqXnGsvNgUxo0PV6D5Ijir6l8MLZ%2B1ssMGDXeKgtShWZb5DceQcbC3Indk6sAulX9mdLJ9X%2BpzH2n0yKbTzrZ%2B1KtYsa%2FK0H545TBBY9AVXFUCcJxwE85HFD%2ByO1Y8tD5%2FDC3wZ69BjqkAZf4A1d8EAmx0DP8oSckQCW6FUtslORuLX0TQ3KckgkhIceDxdmEfyw%2Bm3fbS22zRE7UIevAYnP3FL1ofV%2BiQtX3B20wtA9fgGtwHpPbUWyldFIDezlJu9a9stAxRopk03TEcVcXVGYqEgBub0urufG9ZxeR8pzBIxgB5lsm5rx7%2FGphJNPhmIgDjrS4oOGDWeU1wyjtbE9XCqpPfjtBIwohML%2Fk&X-Amz-Signature=3f19bce1d9d6b816b9714a844aed97b2c749cf49a449e126a146784dc573f3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
