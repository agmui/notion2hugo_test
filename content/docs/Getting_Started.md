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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SV3CR5A%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Tq4ulI5PDl0ltJwIUyewdQUpFPXfHeqbNxxUoG8eqQIgS6pjcE%2FrDR81P2r7%2BQcmiyP264kIHTWY%2B81%2BYTii6WkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7wimqIOhK2ubOMqyrcA0BR5v3h0SVt%2B0OwKjIniBqan9MU2NRnI3zUqmNCX8JD9ykmeVqtAr02el%2FsyXMTdnttqzMVCNkyMxosEnT%2FlE9w5%2Bza18NUPTNPOqYU8BZ%2F9AUj3aj7JMnzxdVVxzJIvyA1QrX0Rk5pWcCoL5t3f8ZmRU6GCZg32jNBMTgbBkk8sSy49mqQYRhmbjyFdlJFsyQ9wkRNGhPNmhih6ol2bpIjWtSa7muB4Zg7EEmHg8BC0wHh0sq2nihQf9uBbDh9FfSrka01pxuKYAyCDVAhOTc073CQly6gBXLGff6uO8h3bCifIrTTxXOgFnlI%2FJqGpUbnbY78C%2BwOvf%2B6PLC6nJpdoUZt7XFYCkxkwYjtoKtkTdFk%2FvdJOdYpGdWLUp4mafJZKCeq6rYZumRMwSZFtTxr%2Fynzp0PqfCH9zmBlpLs7xySVovMkD5Vwy5uLsFJmjySqmoKhwGqS%2B92PTgFz7cJuguPoCM9b5jgoOPETHy1XRbijfIc7RvZsCdeiaFJioYvXUo%2BQTtTucIBIoIdcwCtZ5DycyHo3I0uhELBcQsG0ilOyHa%2Bi7AkU4fAtndrSSU50UD7rE9Z9b2tN4ppUF3N5kiNFX4EgfbrvZl5ONL8QLpeXEAsW1cRh%2FxynMOnkob0GOqUBX3FsrqyTIkW9birAYSi9Xao8uR%2FOCZimUnL4MEvII%2F%2BGmGhcozKlBfIKwaeiEw1Bxwy8H2a7sao4RGSCQTWneUVHu0U3vkqcUDOOCPVFSkaYv5IxeX4CILMkAwpQ67KBkFXnM32oquZE5RGMYBuaOxxrIE2YSsck2au4t%2BIUb%2BCde9YEdqg%2BHHiK8n07LrbFIc3fOSavcu%2F49PnmBYyXnGmE0%2FBv&X-Amz-Signature=45f6be237d9bc423416c943775622dbf7a699c9ca207beea52ec1da8bb7ac7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SV3CR5A%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Tq4ulI5PDl0ltJwIUyewdQUpFPXfHeqbNxxUoG8eqQIgS6pjcE%2FrDR81P2r7%2BQcmiyP264kIHTWY%2B81%2BYTii6WkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7wimqIOhK2ubOMqyrcA0BR5v3h0SVt%2B0OwKjIniBqan9MU2NRnI3zUqmNCX8JD9ykmeVqtAr02el%2FsyXMTdnttqzMVCNkyMxosEnT%2FlE9w5%2Bza18NUPTNPOqYU8BZ%2F9AUj3aj7JMnzxdVVxzJIvyA1QrX0Rk5pWcCoL5t3f8ZmRU6GCZg32jNBMTgbBkk8sSy49mqQYRhmbjyFdlJFsyQ9wkRNGhPNmhih6ol2bpIjWtSa7muB4Zg7EEmHg8BC0wHh0sq2nihQf9uBbDh9FfSrka01pxuKYAyCDVAhOTc073CQly6gBXLGff6uO8h3bCifIrTTxXOgFnlI%2FJqGpUbnbY78C%2BwOvf%2B6PLC6nJpdoUZt7XFYCkxkwYjtoKtkTdFk%2FvdJOdYpGdWLUp4mafJZKCeq6rYZumRMwSZFtTxr%2Fynzp0PqfCH9zmBlpLs7xySVovMkD5Vwy5uLsFJmjySqmoKhwGqS%2B92PTgFz7cJuguPoCM9b5jgoOPETHy1XRbijfIc7RvZsCdeiaFJioYvXUo%2BQTtTucIBIoIdcwCtZ5DycyHo3I0uhELBcQsG0ilOyHa%2Bi7AkU4fAtndrSSU50UD7rE9Z9b2tN4ppUF3N5kiNFX4EgfbrvZl5ONL8QLpeXEAsW1cRh%2FxynMOnkob0GOqUBX3FsrqyTIkW9birAYSi9Xao8uR%2FOCZimUnL4MEvII%2F%2BGmGhcozKlBfIKwaeiEw1Bxwy8H2a7sao4RGSCQTWneUVHu0U3vkqcUDOOCPVFSkaYv5IxeX4CILMkAwpQ67KBkFXnM32oquZE5RGMYBuaOxxrIE2YSsck2au4t%2BIUb%2BCde9YEdqg%2BHHiK8n07LrbFIc3fOSavcu%2F49PnmBYyXnGmE0%2FBv&X-Amz-Signature=9413090f63a8f7982e2144b3e3443cf73bcc0b89784ed1a174f04773a8644726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQ6M7WY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5NdrOdicAFysHs1WIu8yqgGCdOr2BxA6oE8a%2Fk6HugIhAPMsZMnHr7RmmivMUE2yk5kty778w%2BDG31wopCZ2fr%2BbKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLbEdKoUICF7%2BVLjUq3APkoWWO8JXxnY1CYzkyLXcKyPNg6iFQkozjGWK%2FXPgByGzIvcZixh4ez%2Bmt5xiUSFi9EuBG4Ymn0J%2B5twORiDjM6WN1CPR2d%2FTowHWQwtaSiNDB2Mi9tfUYHw4Bv5CAvaMCMUopg4RHZ%2FtlIkJicYGtCyq8dR8KWpEmGsxbAPmudKJ6J0mpLxts%2F0GDYp6KmbauIQ9x18RhUKmjP%2FE5tZJSBARkKZFlMLiHp%2FCotle2NWmNztzS%2F%2BBOswDM28dUE7wRsei06so34xrnU%2FfBFhzgmCkzwGCOzQtoyDbrCVgt30KQp14VfteumuBD9geGuYJncCDiuaqMW8iPrJkGuDZEnS2RKn6xlYlSA3gKAHmGJtahLtITTu3Xqzw9Ew1rkCVwduN8WyOWxAB%2BS3YJMKgPvOCZRHgcPudUrFn6GiUYaWicnNKbbFa5LjQFFds40JO%2FiJzSNQ%2FGcPc16Hd1zp%2Fkb7TQ%2BCiuwSCS9P8XYJzLuFINmCloOT4ZmaRyy2aF5sWFJ%2FEUWFYCbKvK8fTB9S3XzytJNuGj3E0PbFcTD%2Fwht%2BLZ7nBlaV9gVbsL7tPmwNiGAO7UfEtTsoRKXQip7W%2BZy%2FLFLqNbkDar08gFQu6RheTYNJoF9Pcwjbz76TD046G9BjqkAXcM49kCzcXYXdJWWMeI2N88mQA6%2FvyWLn5BNuEJfcDfRyEJ%2BdSjDpJaNTMGUnLzWwFJF%2FeOg69%2FF1gncRenYk4iHfdi%2FxsIr4VslijnJWXfr%2F%2BrH1Uj6adpTWlBataq4XsGM09MN8guJrbz1dN%2Bap%2FCROLid9cJikE0TFO50hlHB%2FyXuubehJT5qzrictjJXLAZ8%2FO409w4y8qK%2FZ629CNmRPL8&X-Amz-Signature=471bd19474705df2a45b96557ab82756b52b7b66ef335340bd3ea3f3e3ac0096&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IISUGX5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYsXTPqfFzCtDXax6U0nL5gg9XwhyFBuny8OQruvMQcAiEAxcLk795SE%2FBnik%2BahkfC2tjeMgAa4Y133GXM7f2jOtcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVuHDv4DIxM3bkHGSrcA4i7PuJeQz8STws9zG3oP4Zzwy76X3JQFn4XQ23S8gh6vQymvUFemACcmN4G4XF6aS8TjUuTF%2Bo5H%2BQhbE1KIvw2zHG6IcQFngV4grj5URTMA6NL5pXI3P8jj%2Fi65D4Iji8T8%2Ba5uM5qHkIxX8B%2B6ruIOKIfhg%2BN10ZhN1OHwmYZMTTIGb0rLuhF3Td8g0KZnrwwAFdDJcyznVv07En%2B57ucPK%2BIUIzqQCroojL%2Fx%2ByaExdwaj0vzLTXvXy%2Fmqi0kbAPVvBTH%2FTaCLOZ9E8fGOGboO0kGCAzqp66ESTjqmZZ4oovf2mPCWrtcN3c%2FuByAxoI6Ggq5mTPjVW76BsMmpbTIf8hLms3REPgoKRN8%2BAqbKJo2ZVEWubTv%2Bc%2FR4qbfOG92ypYSOttG3F1bsjQ4HbFeh5gpcSdUbggOk1xTPWjuN7v2tP7326sX6WZ8R6MNqH6e1RVxHIPGjPyhX59JxGo%2BvGRSzPY4PXyHiFsH2sr8gIX%2FLePvGIbUaDGQ1WdaOdFZo3JcRSxuUzentClyvHARkoU%2BQi172DsRzwxgMmOLBQL5rp14ma4j8FZ7d8D79zT3Ln3hPBevjKmLg99yiFKlWe4P1bkRQlGi%2Bwp1A7eNhluA%2FwAdj6fmid7MOPjob0GOqUBqSF7SDRjjPM3D6efzAPD0Itu7Ptv6Erdeu2nNaVE%2FpGMdZghtObZCMFlIJgynYElJ6VO3vtkNh8NLB57QYTAgS%2BNn96C2pbc2t2IfyT3aPgf1sQHUM2eOdQfeG8btX0%2BLQsEiAxhHYumimWaXdaeqI1EMLExJMDU1y1NYHUXmsf72x%2BjkSEtYSYvAM9Czve2YcTz8t2o9PfSWwIlzS7rl9vI5MMV&X-Amz-Signature=bc954964463eee21c2013c9eb020401b1b73f68bccbbb7172276cb6c51783a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SV3CR5A%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Tq4ulI5PDl0ltJwIUyewdQUpFPXfHeqbNxxUoG8eqQIgS6pjcE%2FrDR81P2r7%2BQcmiyP264kIHTWY%2B81%2BYTii6WkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7wimqIOhK2ubOMqyrcA0BR5v3h0SVt%2B0OwKjIniBqan9MU2NRnI3zUqmNCX8JD9ykmeVqtAr02el%2FsyXMTdnttqzMVCNkyMxosEnT%2FlE9w5%2Bza18NUPTNPOqYU8BZ%2F9AUj3aj7JMnzxdVVxzJIvyA1QrX0Rk5pWcCoL5t3f8ZmRU6GCZg32jNBMTgbBkk8sSy49mqQYRhmbjyFdlJFsyQ9wkRNGhPNmhih6ol2bpIjWtSa7muB4Zg7EEmHg8BC0wHh0sq2nihQf9uBbDh9FfSrka01pxuKYAyCDVAhOTc073CQly6gBXLGff6uO8h3bCifIrTTxXOgFnlI%2FJqGpUbnbY78C%2BwOvf%2B6PLC6nJpdoUZt7XFYCkxkwYjtoKtkTdFk%2FvdJOdYpGdWLUp4mafJZKCeq6rYZumRMwSZFtTxr%2Fynzp0PqfCH9zmBlpLs7xySVovMkD5Vwy5uLsFJmjySqmoKhwGqS%2B92PTgFz7cJuguPoCM9b5jgoOPETHy1XRbijfIc7RvZsCdeiaFJioYvXUo%2BQTtTucIBIoIdcwCtZ5DycyHo3I0uhELBcQsG0ilOyHa%2Bi7AkU4fAtndrSSU50UD7rE9Z9b2tN4ppUF3N5kiNFX4EgfbrvZl5ONL8QLpeXEAsW1cRh%2FxynMOnkob0GOqUBX3FsrqyTIkW9birAYSi9Xao8uR%2FOCZimUnL4MEvII%2F%2BGmGhcozKlBfIKwaeiEw1Bxwy8H2a7sao4RGSCQTWneUVHu0U3vkqcUDOOCPVFSkaYv5IxeX4CILMkAwpQ67KBkFXnM32oquZE5RGMYBuaOxxrIE2YSsck2au4t%2BIUb%2BCde9YEdqg%2BHHiK8n07LrbFIc3fOSavcu%2F49PnmBYyXnGmE0%2FBv&X-Amz-Signature=69b9d4c7cfc6183e7ac9e974b10870d52b5dbe0b8a342578b401744de75cf4ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
