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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774WZW5L%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDFDA2gKMjirv6B7xYOrDpPy9yz0oXhAHntxnX5OR0jeQIhAPWTr0%2FujLtQ13Kb6p0xKdyv3tEu8FYbk8C3YmgGa3X%2BKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylvm%2BAVRIPnFGHuLYq3AMVKN4dbQ4kl912LrklflfeFgLISCFCLx0tRYgs%2ByemrXNgjutgPSCLsvLu5ss%2BvvAVfYpOxNLHHve6PcbfDq0YBkAVr2OKb8lkZeRmImfaZEQ4cDv1dL86COLmRB8Xdl4cmOaP5%2FY%2FRPfjAvZdKgEf0fla%2FWK2UzYwFyJnzfo9kOlLpUV%2Bb1UDgE5qWQuXRJYT8Wu7vVMJZ3jRgZNpxADL4LdTm4pzYceikEyFtER9b6zNgtNYxXQKQ4E6s649VXZzCorJ1n0oShXMYzJUjjCUD6DmvzMkG59GDoxm9V%2FKhzS9aZt8gdKkzMzJj0rrXFLlGmfr6U89Ys%2F0e%2FD64xAxX9eChxbvE0h%2BXIX5sNcKtwR69HP36umjESVmpGIM3c8aCsc2mFmP3bHZLpqoKcLfdf1zg083CNR8L0jYKfYkBBAkkYwJI579AGmKGfoFofApH6ngsLKzPI%2BMVvvqmkTQwFN%2BA80Lf4mHIJeAPow89T4KMmTsHjm%2B%2F7xh%2BHnfuRbzZWRLdriJvBPFdaLuLmuBlOiwtq2o%2BjB%2B7H4sOlZZ9CINdL9hTCQX0i06fRq3zvEmE02eeo%2BmXnDE6gCVpB5KKw3AjS0sav6Jcy2gfwZ%2BkSB6m1Bneo%2BAFAmWajCTlYy%2BBjqkAU6rCz%2BXKZJM00fUVoOstZVaUAVQv51xp0jG8FSRSbgbt6i9YC0OKEUJup0zY%2FMCwquZFqWgIOAWYj8K2pRhNzczbKX2CvztqV3MkOv7SnOxRviKSQpIl8RAEA377Y1EOnI2DIWSJyy%2Be8WBPKjQWH%2FXk4cQmQfVrflwsi6Ondw7dlpdYuVACYLlo%2FqWTCebwHg0aNbMF5MdcUyz1603XvP%2FvWg8&X-Amz-Signature=796411fedfe71be31ca20edf3440d7267b2cc8ad8c66fd3c61c6028aac5d79ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774WZW5L%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDFDA2gKMjirv6B7xYOrDpPy9yz0oXhAHntxnX5OR0jeQIhAPWTr0%2FujLtQ13Kb6p0xKdyv3tEu8FYbk8C3YmgGa3X%2BKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylvm%2BAVRIPnFGHuLYq3AMVKN4dbQ4kl912LrklflfeFgLISCFCLx0tRYgs%2ByemrXNgjutgPSCLsvLu5ss%2BvvAVfYpOxNLHHve6PcbfDq0YBkAVr2OKb8lkZeRmImfaZEQ4cDv1dL86COLmRB8Xdl4cmOaP5%2FY%2FRPfjAvZdKgEf0fla%2FWK2UzYwFyJnzfo9kOlLpUV%2Bb1UDgE5qWQuXRJYT8Wu7vVMJZ3jRgZNpxADL4LdTm4pzYceikEyFtER9b6zNgtNYxXQKQ4E6s649VXZzCorJ1n0oShXMYzJUjjCUD6DmvzMkG59GDoxm9V%2FKhzS9aZt8gdKkzMzJj0rrXFLlGmfr6U89Ys%2F0e%2FD64xAxX9eChxbvE0h%2BXIX5sNcKtwR69HP36umjESVmpGIM3c8aCsc2mFmP3bHZLpqoKcLfdf1zg083CNR8L0jYKfYkBBAkkYwJI579AGmKGfoFofApH6ngsLKzPI%2BMVvvqmkTQwFN%2BA80Lf4mHIJeAPow89T4KMmTsHjm%2B%2F7xh%2BHnfuRbzZWRLdriJvBPFdaLuLmuBlOiwtq2o%2BjB%2B7H4sOlZZ9CINdL9hTCQX0i06fRq3zvEmE02eeo%2BmXnDE6gCVpB5KKw3AjS0sav6Jcy2gfwZ%2BkSB6m1Bneo%2BAFAmWajCTlYy%2BBjqkAU6rCz%2BXKZJM00fUVoOstZVaUAVQv51xp0jG8FSRSbgbt6i9YC0OKEUJup0zY%2FMCwquZFqWgIOAWYj8K2pRhNzczbKX2CvztqV3MkOv7SnOxRviKSQpIl8RAEA377Y1EOnI2DIWSJyy%2Be8WBPKjQWH%2FXk4cQmQfVrflwsi6Ondw7dlpdYuVACYLlo%2FqWTCebwHg0aNbMF5MdcUyz1603XvP%2FvWg8&X-Amz-Signature=fe7a4cc6302d50a571d181c293185b0637631677f186ab1b299d25affd2c7ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THY4LJBT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB5qRVM%2Bu98Q%2FMNNK93kFBLSBqFlLtxVC4GZJ2oxOaFTAiBbVwsHVccHkqTyrpgCZU386RMpLLcaPpB2a4%2Fry8tHISqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqv6q%2F5aPyjkodLUHKtwD%2Fet4ixaoHWjdhGoeK73yVtXHXm8GbUy9A8EUGgXaPfkFYS1%2B3q9L3XUxeXyVhU4U6lvovcR7AJyzrl56MkmALzFLwWv7rMO2LiIy6C0tYYqN4HsNA0esweqfj9t%2BXf2K1Eu2JgCnWgXqXe3ViMyz6tGIjQqTsDr%2BRS2a2%2BgKx6DJz0uJwmJig3A5yMAXlGlcYKBIFE28d8fZ1XPO1uLYhxhuDet8lHKUHXSRSyS8ymHxiy2NnbfFgdW1jqc%2FYzn99PANb3o6Sy7e7tI%2FArqxCQCt1b9rFRAEI1K0x5ULjTpzsxy5Sl4%2B7foK6Qqp73O5jk3URh5%2F70hlsBIJZtv29UHufWZo%2Bpuu1JG8%2FW0is9OpUg7x0a0SU25H1eTrr5a5QleNjSxVIebrHJWdtFTGhqqdra0A6u0s1GDwLzgSL9y5R%2FYOEuHpITyWz4NgUe9NA6YkC17MfhYXrtzOrPbKmyZWV%2BPVC2AlpgndHwX3iHCd8JnsJViXlLUCBERv6uTqAoTYZgkd%2FZ3VwMe2AZBsj43nT3ICdLFaARx8DM6U20bq0huv1TKWF1sLJdlAsbA0lKLfauujosGvObWg%2FJD%2FRhYRl1ZikKHdG6P9PVeLdTRIV2HR%2FFDi2r9bAOIwnpWMvgY6pgEeJtf9SCweHi7%2F6H1mXY9t1bHqEV1cNzWmcdO3Rawy%2BwSFlmpn%2FTuI6DFT23Zf54UDTW2rRf0oaRHgEevGLoJs6mCjD0UvqUcKVPXWtJv703FlTSax4k4%2BhCVtbFM%2BfrlUGMz5R%2Bw90zDsacT6AkWckP5Ph2ZoQ9paITKQMWcOlvG8qCDG3j5o2Fgg9XzDqBrHHk9VvvyiCOUH3%2FYIeEzRptvk3aiU&X-Amz-Signature=b18ba93708e52909f047cb5c77089d7104095a91d5c3476a4948772a4c5e7404&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4YJBJFW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCwhPoCNV3%2B3g4DTT%2B%2Bby8QVN32sS4W19CHB2vDCJh9PAIhAKI2GwO8McgPg6aZY4l%2B6KQWPfOPRZ9FqLnU73gBDZgoKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy39kq8ricPei8wT6sq3ANxc9%2FFaYjHowlca3URff1yMqYylQpesjtA2jVEm6QHgVnzrvX00UcHvTyweXg7SyUJt%2BoHgm4Kgfb9AfUfvnCj0h5LlH5o6elH9Y59l9QaT8OntKScltyzljvxgG4FiEp7jlsqeOdmCynq0ayKdg8Hk%2BLRDDgcbaUG%2FBAQW2wbjaMxha4xCThWYu5Hz7vpONK6tlJhEvzLdXY%2BhydzJ7G%2F43pDQexEpfaJWhDFoEhibSGeSu86Hn%2B5wLBr0hr2eC%2Fj64hk89tJNMDujnFLRSwEBuuntaf5EOwLE91VP%2FJjJqLHz3VO7RQ3%2F5oEx0nm%2FAI9FazN6PKntWOaOOCWvR0gQIkdGo2CdRGwg1krFjoovMDzlAaho6baRcpJOYiQCUiE2%2Fa8if4aMAtpMQXuqXDGKR%2F5ntRTeV9l7zp%2BkcWlOUqgc64z%2BMVZot3%2B2MMDjgVhpuyZMMdHVVrkBNOFJDh2Ps6n5pLjnhK17IE6egf0rj7D56vYS8x2cDyY3sIqhR4bAzGTMSl0CB%2B7VhJiVcsv8wFUCLlUnYvMnL5DTlor2VjQGWc6YwpaIpSi3WubFfgJz7sQOgpiD9HEursvCTUX7gBdkE9O6wIxXTzAfUxh1mU5SzD7vKCgnDhY7jCKlYy%2BBjqkAS8WLBtHBnWTt6WnnsAF3PehG%2BwK3qULSF2nZxW1sPgpq7%2FYvNqRIJJGqx5iPMizWomRPsmccVKUXSp5mAfVpPxBWtthJJ82%2B%2B0DF46yfs0UhBglcAtObtOdDs4rACH2DDXLvRuYuiGHoVTppYeNAx6K46x5YTop2IZmRHz%2BszerWuUXJqlBKH0mphjPvBS7QhnFjjuccoCEqlUTomcirTRCidL8&X-Amz-Signature=8358f68ef9c88654b50f86a247d7763091701bf2c773ab6e4f37689139eb6059&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774WZW5L%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDFDA2gKMjirv6B7xYOrDpPy9yz0oXhAHntxnX5OR0jeQIhAPWTr0%2FujLtQ13Kb6p0xKdyv3tEu8FYbk8C3YmgGa3X%2BKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylvm%2BAVRIPnFGHuLYq3AMVKN4dbQ4kl912LrklflfeFgLISCFCLx0tRYgs%2ByemrXNgjutgPSCLsvLu5ss%2BvvAVfYpOxNLHHve6PcbfDq0YBkAVr2OKb8lkZeRmImfaZEQ4cDv1dL86COLmRB8Xdl4cmOaP5%2FY%2FRPfjAvZdKgEf0fla%2FWK2UzYwFyJnzfo9kOlLpUV%2Bb1UDgE5qWQuXRJYT8Wu7vVMJZ3jRgZNpxADL4LdTm4pzYceikEyFtER9b6zNgtNYxXQKQ4E6s649VXZzCorJ1n0oShXMYzJUjjCUD6DmvzMkG59GDoxm9V%2FKhzS9aZt8gdKkzMzJj0rrXFLlGmfr6U89Ys%2F0e%2FD64xAxX9eChxbvE0h%2BXIX5sNcKtwR69HP36umjESVmpGIM3c8aCsc2mFmP3bHZLpqoKcLfdf1zg083CNR8L0jYKfYkBBAkkYwJI579AGmKGfoFofApH6ngsLKzPI%2BMVvvqmkTQwFN%2BA80Lf4mHIJeAPow89T4KMmTsHjm%2B%2F7xh%2BHnfuRbzZWRLdriJvBPFdaLuLmuBlOiwtq2o%2BjB%2B7H4sOlZZ9CINdL9hTCQX0i06fRq3zvEmE02eeo%2BmXnDE6gCVpB5KKw3AjS0sav6Jcy2gfwZ%2BkSB6m1Bneo%2BAFAmWajCTlYy%2BBjqkAU6rCz%2BXKZJM00fUVoOstZVaUAVQv51xp0jG8FSRSbgbt6i9YC0OKEUJup0zY%2FMCwquZFqWgIOAWYj8K2pRhNzczbKX2CvztqV3MkOv7SnOxRviKSQpIl8RAEA377Y1EOnI2DIWSJyy%2Be8WBPKjQWH%2FXk4cQmQfVrflwsi6Ondw7dlpdYuVACYLlo%2FqWTCebwHg0aNbMF5MdcUyz1603XvP%2FvWg8&X-Amz-Signature=9199e1b082ac2e75e8867c2669e829e5d6c063163916e6943b7dc1a2a311cc30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
