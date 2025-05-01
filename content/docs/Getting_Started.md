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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7XGJP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA3nVe9xBc1SxnD3uP3m6WkBDLypAgwNow447N9dhieoAiBjMMryRueG0cz6cAhDd8%2FNUMdUkYbvQb%2F94OKZVSEQFiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMAVly6mfH8gtZKJKtwD9%2FKUCmjl2J8A2%2FWNkQHE5m20sWaZXsdFbFrUTH3AL9FxTiOs7fOuL%2Fui%2BvI%2FFMyz7kS102xsUjvybQaXcGqFO2oNYkuE5UwwAs7TbxM5oTTMfuWAJKVX%2FvbfTnkCny0lj%2FR9sBSD%2BR1DM%2F7ZZN9Ys4dQichYfOqMKXW9xqoKskKu%2FmpzTen9sSfyU7Mhd83oJeTLXo2Qvqqvh0hovMPnluo%2FqbV5eZTLCBimT3q90opN8RUuJcbZJLgINRFGdE2q5WamK2NLVongxZXnMuDgdiddC3FBee6j1ODMFoh4O0%2B6oTXhrzIW78KaE2tq6sRh8D0AJwa044%2FqYDzZXDythBPejONzP2Hd%2F2fOxwspOzILO2wL%2Bi0CL6Gtispuu%2Fd1l6phn50XsUwBuEIZZ7j8ZwdOJL40F7FbL21ZZG%2BqQzW7jd%2BANuTyCY8E32vc8CwQ%2F4cRJYKHmwKs%2Bi%2FNwPEG7nMspWtmV3vfn0WHs7gZRO9wXyn98FwwNWEkkqMo9vSqiJl45mmK8jwxZ3mXnejg7bFiD8N9oobOascsAHWPwVn9fkqlpjptty5w%2BPrirjcvIug4Qkx2%2BA7FbMCkwOxvn5XdZTBgqJq5c6eoLVpBWnydo6eZO7sxRUSwfMAwm8fPwAY6pgGwACxbYy20Kv6vAI%2FzWBdXRYYDrcSHPG63CdKPzbgF9C%2FfMqbt11JM5z7sOObTFBrIcDk%2Btoq4YbKFGseWOt7C77bWg90c1ri%2FbJwessVNHa%2FS3kVpuBR%2BTVWBUreyMCKzhdozHAoup01CtW7iibik8IF8%2FpH2Ce%2FowwroBCI9Y5FrI8gRf4ufsELKO12EN9dHFwyjdBvH4cf9FdoAJKXzbFKMbWiM&X-Amz-Signature=9da66ceef462d2c01b5146dabfb41bb454fd475d4f4c70e9315fc217bfadac0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7XGJP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA3nVe9xBc1SxnD3uP3m6WkBDLypAgwNow447N9dhieoAiBjMMryRueG0cz6cAhDd8%2FNUMdUkYbvQb%2F94OKZVSEQFiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMAVly6mfH8gtZKJKtwD9%2FKUCmjl2J8A2%2FWNkQHE5m20sWaZXsdFbFrUTH3AL9FxTiOs7fOuL%2Fui%2BvI%2FFMyz7kS102xsUjvybQaXcGqFO2oNYkuE5UwwAs7TbxM5oTTMfuWAJKVX%2FvbfTnkCny0lj%2FR9sBSD%2BR1DM%2F7ZZN9Ys4dQichYfOqMKXW9xqoKskKu%2FmpzTen9sSfyU7Mhd83oJeTLXo2Qvqqvh0hovMPnluo%2FqbV5eZTLCBimT3q90opN8RUuJcbZJLgINRFGdE2q5WamK2NLVongxZXnMuDgdiddC3FBee6j1ODMFoh4O0%2B6oTXhrzIW78KaE2tq6sRh8D0AJwa044%2FqYDzZXDythBPejONzP2Hd%2F2fOxwspOzILO2wL%2Bi0CL6Gtispuu%2Fd1l6phn50XsUwBuEIZZ7j8ZwdOJL40F7FbL21ZZG%2BqQzW7jd%2BANuTyCY8E32vc8CwQ%2F4cRJYKHmwKs%2Bi%2FNwPEG7nMspWtmV3vfn0WHs7gZRO9wXyn98FwwNWEkkqMo9vSqiJl45mmK8jwxZ3mXnejg7bFiD8N9oobOascsAHWPwVn9fkqlpjptty5w%2BPrirjcvIug4Qkx2%2BA7FbMCkwOxvn5XdZTBgqJq5c6eoLVpBWnydo6eZO7sxRUSwfMAwm8fPwAY6pgGwACxbYy20Kv6vAI%2FzWBdXRYYDrcSHPG63CdKPzbgF9C%2FfMqbt11JM5z7sOObTFBrIcDk%2Btoq4YbKFGseWOt7C77bWg90c1ri%2FbJwessVNHa%2FS3kVpuBR%2BTVWBUreyMCKzhdozHAoup01CtW7iibik8IF8%2FpH2Ce%2FowwroBCI9Y5FrI8gRf4ufsELKO12EN9dHFwyjdBvH4cf9FdoAJKXzbFKMbWiM&X-Amz-Signature=1c9628c6682806478a118ab85ef1254e5cd686f3df2de38c44835c6102b86eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7XGJP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA3nVe9xBc1SxnD3uP3m6WkBDLypAgwNow447N9dhieoAiBjMMryRueG0cz6cAhDd8%2FNUMdUkYbvQb%2F94OKZVSEQFiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMAVly6mfH8gtZKJKtwD9%2FKUCmjl2J8A2%2FWNkQHE5m20sWaZXsdFbFrUTH3AL9FxTiOs7fOuL%2Fui%2BvI%2FFMyz7kS102xsUjvybQaXcGqFO2oNYkuE5UwwAs7TbxM5oTTMfuWAJKVX%2FvbfTnkCny0lj%2FR9sBSD%2BR1DM%2F7ZZN9Ys4dQichYfOqMKXW9xqoKskKu%2FmpzTen9sSfyU7Mhd83oJeTLXo2Qvqqvh0hovMPnluo%2FqbV5eZTLCBimT3q90opN8RUuJcbZJLgINRFGdE2q5WamK2NLVongxZXnMuDgdiddC3FBee6j1ODMFoh4O0%2B6oTXhrzIW78KaE2tq6sRh8D0AJwa044%2FqYDzZXDythBPejONzP2Hd%2F2fOxwspOzILO2wL%2Bi0CL6Gtispuu%2Fd1l6phn50XsUwBuEIZZ7j8ZwdOJL40F7FbL21ZZG%2BqQzW7jd%2BANuTyCY8E32vc8CwQ%2F4cRJYKHmwKs%2Bi%2FNwPEG7nMspWtmV3vfn0WHs7gZRO9wXyn98FwwNWEkkqMo9vSqiJl45mmK8jwxZ3mXnejg7bFiD8N9oobOascsAHWPwVn9fkqlpjptty5w%2BPrirjcvIug4Qkx2%2BA7FbMCkwOxvn5XdZTBgqJq5c6eoLVpBWnydo6eZO7sxRUSwfMAwm8fPwAY6pgGwACxbYy20Kv6vAI%2FzWBdXRYYDrcSHPG63CdKPzbgF9C%2FfMqbt11JM5z7sOObTFBrIcDk%2Btoq4YbKFGseWOt7C77bWg90c1ri%2FbJwessVNHa%2FS3kVpuBR%2BTVWBUreyMCKzhdozHAoup01CtW7iibik8IF8%2FpH2Ce%2FowwroBCI9Y5FrI8gRf4ufsELKO12EN9dHFwyjdBvH4cf9FdoAJKXzbFKMbWiM&X-Amz-Signature=e72d294f807efef2e0a37a1b56fd33ae0ed064122a3cc4a121f559bb57179a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5K4PGLY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCFJVKqltSgL4KPPl%2BhJXXBlSPd0vN6QTLyMjkZdqkw9gIhALpjoN0kGzqG6QoJzAlmXy6TH%2B0n7QPAMQBpI%2B8xc1LnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw9AELpdd7nbz1%2FzEq3AO7ibQKydBLL7YcOz9eOOHbEd2Wz9%2BEOVjmCqIsfNB4Bv8j4OfHdRk3DBot%2FIBVltmR7osYYImH3%2F8%2FxqqMCBrdAooJiAeZLPf0ZOrJDzYVfSI0b2tzNL%2BRizlPXukZicHd16ArdODAIMJ8RZw2kreMMRCZNKufHHvETVovzDyZG%2BJl5a2HvjyPA%2F0Q5hUDgJtPujdJ801Ctl0h7U7b0gTGUpqCKRsl6H%2BNkF40x3tDjkmcE776TyEb8nSa%2B8QAOs3qsX0CUtKJwzlzO9M85n4mQfLDAFtXdxlD8gHxPzfAeuwf3GriWY6cTiAF8CEgUs8NVSEcKstcBjx9eA6MLYLskArJSuhTcv21ja5FkPnL6tzhJFE3qEYLiMUmnLqDN9RPRr8Rmx1yYV76tTD6jH3BJXaH3WKPdHUMvfQjN5e2VXdJ7N4NDti5ScSQxzPwzodex4Ww4t97JTj3bq%2BdyEiYns5K7UA957DlnM0sNcUDiiewItElK8Wgcs1YlQQPuMXq0jdHX7GGhM0Db02UYCDUS2A1vOxkJS7OQR5Wia9H17phoXD9WJDcYR%2B6MVCdlSEZoo8yDmJEkBeWo6OWtQ%2BZszbt%2BP5WU38iMkYaQdSxwt1ZcaX3snerUHHysTC3x8%2FABjqkAT5MDHe1picRJNHKRnhgYOLCtdpZKLqdOCVylF%2FrRUZ0OPEvxb429DLjkMDiC%2F4e9Haspehfi6Z6TrbHDdN%2BMGe8lpXTUZAvnXRFk8RoibBq5TYuvQbwVHHZv0XpO%2BCOqoUTkayXtsE%2BBdDnxqX3mQNZTMWsZqlcyRVWaSKMa3JWuaLnKR5GrqFntgl4aLF%2BjQjH%2Ft%2FV4QDIZikqIxsbC11Q0%2B7D&X-Amz-Signature=7536b8da486536be48c6c4b536cdd93b2c93b95bdbac486befbe9c42266f0ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTDXLHC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDQNxbDhPorRtx9VTOVxCLAAlfTK2RJbGoAGJuzdThfowIhAMHSbLuYaGcf8%2FT%2B4b7L11pQ2uQynn1hBCPZC16ucn50KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrMGhh16ivWA1l5CUq3AM5jBwRzqayttwSoXEtcSotCv5nJLhMXcXhWkxiL%2B7pLa%2FUEOE%2FOjqejBVOmx%2Bvbs%2BFwoyF1GLu6c0joHzDmgnUXPl0llrVIyd2kvpuU4NCfcL4uDKisC9kFmFWz1%2BlPdZnFyMuK7hK7EUuVPgmqPv%2FftJRHNlNF%2FyzUqE8GtYlQw8HAEs2WWtb9SCFeULz2T66OqC1A9kwj3Tacx3pUa1GZIFR3JfTXiBGoGefUG%2FRszlqmto48V%2FMvTYRyG3K2Y4Vb6%2Fn4dPautaq4WFZt%2BpzkgNmoGifEREiGvx1255HT08INQz4l9Yi3LnIe40JXo5b7KFqiO9hZmvGvf7qqesHKBLMdliKQH%2Fm19Tk7rgSD%2FVgJ8AeZ3uRgKkowOvmfNWBJrmHE00Uv0Pcio6NHvQbGxixQo5W%2B4fC4uLRApB4OW3Ev%2FiRz6cMhkfF1IB7eFPHAA4ysUaO55ZRhbQAov5BnZuTwrOACMP54i%2Bqr5wnEPAV0YpTJMbfZm3yb%2BVwXaCG4StBsSdXzRryroFY7d8M3Cll5gSPl1uBjRJRTRkUYTKnZXV9f5POkqLRZu8E6rVPoEjEDj4dCNkYadfbWmpFFcI%2F%2F7fQQul%2FEx6fkPJHMxHmDiewYTDxYdVEIzDBx8%2FABjqkAUpMNe9YdeLg%2FkOlua8wK9LKfO2rvnsMskGcqy8w2ZlQSCnroQiU8GVOE4Jcx0fZ%2FNdolPyVvnANHYVI7mJvOKvnVnmRdKv9VSYpIJ3p5iJEbaE6NmcvH%2BEu7OZy6tXQlVr%2FskH6ywt9xH0K0pcF3sW4VhHcg7oFzKRuNi0%2FKMKVWt5QdGYZt6f%2Fa4KLERV%2BynBraYLzG3aTcHO8VzzJpcIQfy9P&X-Amz-Signature=bce1a2eb48d8cb3536e735ba7e468aad71a1da0b8e89f0b92d60b8fd97d42c09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7XGJP4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIA3nVe9xBc1SxnD3uP3m6WkBDLypAgwNow447N9dhieoAiBjMMryRueG0cz6cAhDd8%2FNUMdUkYbvQb%2F94OKZVSEQFiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMAVly6mfH8gtZKJKtwD9%2FKUCmjl2J8A2%2FWNkQHE5m20sWaZXsdFbFrUTH3AL9FxTiOs7fOuL%2Fui%2BvI%2FFMyz7kS102xsUjvybQaXcGqFO2oNYkuE5UwwAs7TbxM5oTTMfuWAJKVX%2FvbfTnkCny0lj%2FR9sBSD%2BR1DM%2F7ZZN9Ys4dQichYfOqMKXW9xqoKskKu%2FmpzTen9sSfyU7Mhd83oJeTLXo2Qvqqvh0hovMPnluo%2FqbV5eZTLCBimT3q90opN8RUuJcbZJLgINRFGdE2q5WamK2NLVongxZXnMuDgdiddC3FBee6j1ODMFoh4O0%2B6oTXhrzIW78KaE2tq6sRh8D0AJwa044%2FqYDzZXDythBPejONzP2Hd%2F2fOxwspOzILO2wL%2Bi0CL6Gtispuu%2Fd1l6phn50XsUwBuEIZZ7j8ZwdOJL40F7FbL21ZZG%2BqQzW7jd%2BANuTyCY8E32vc8CwQ%2F4cRJYKHmwKs%2Bi%2FNwPEG7nMspWtmV3vfn0WHs7gZRO9wXyn98FwwNWEkkqMo9vSqiJl45mmK8jwxZ3mXnejg7bFiD8N9oobOascsAHWPwVn9fkqlpjptty5w%2BPrirjcvIug4Qkx2%2BA7FbMCkwOxvn5XdZTBgqJq5c6eoLVpBWnydo6eZO7sxRUSwfMAwm8fPwAY6pgGwACxbYy20Kv6vAI%2FzWBdXRYYDrcSHPG63CdKPzbgF9C%2FfMqbt11JM5z7sOObTFBrIcDk%2Btoq4YbKFGseWOt7C77bWg90c1ri%2FbJwessVNHa%2FS3kVpuBR%2BTVWBUreyMCKzhdozHAoup01CtW7iibik8IF8%2FpH2Ce%2FowwroBCI9Y5FrI8gRf4ufsELKO12EN9dHFwyjdBvH4cf9FdoAJKXzbFKMbWiM&X-Amz-Signature=d3eb4a89015f92e81783c672e005932c1a2181d1347100edd2f07ba0230333ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
