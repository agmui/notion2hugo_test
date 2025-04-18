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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4C45OOJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3xOn2tlQ1iRwI%2B1J8Q152sTwSKTazZ2YUZZ3XstQuiAiBqPHdamzAQItzoosdeAndYazDw27ahpMUb%2FS3MWtJ4Eir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM8bnOXHksfIHuRqOOKtwDhQQykbw0xI8sS7pHW320hjTd15KwE8EvlJbway3Q9ID5oyiuAqKDGYzhKdfnXiJcCtwt8BbveOp02mMQx73isstSuem7HOSaE06OZB99rIKDlze%2BAm46NjFWhQzpX2z9Y0GCro06L6JAYlLTwxS8O%2BtHiEa7eONhkcnb3ojM3WOlxV0oRRdmKvA3zKq14jtZZrMGGVYMM9ESkewg5t1hGXUuQRCx7D4LtwWlSUL%2BTORcqZjabbWl%2Bh%2BuWrFk9E%2BhFAqJnCsMxOjd4HN%2FKK%2B4wo7C6AguArMwcmwz7m2OogsWZTMx2lmLv03D6LY03xR1RIY2gLs7QXRU9k1UlcpMZjSNW2pvKAxQTH3uGu3EGK2A8fvCSrjGeTjtEihhh8OHqMqpG2So9%2Fzj51O%2FfCSf0KnzI%2FyULvS9E8tC8SJmk71DdaaXF6YMnvtF9gAbkMxb8VblBxo1buvxUH9Q1TkFTBEbUPe9mWmd6RgyAZqHWTkrN7PqWl%2Fwktmdc4K6LGZhtzwGyUdaae%2B%2FeFMQVqkqcGKL1gqGPH05S%2B4S%2BIFcDgomdpiCxargkZQn4cUggvj7PUGSbpn1G3KD4szdinzTgIgLNy7G44aZbHl1vEkfn9jYJQ%2Bb27F2zGKVpL0wlvmJwAY6pgHdPQl78MlxV0jqAwdhWyn6R6dN98Z0jmCFm%2F81jaNC%2BZ98TTU2UcKpRMXVJbY7uOW2lr6V94AKunDsB%2Ftjathvr1iMTkFQIW8zmwXg9xfAEl7H0yzAdUYD78cBc7MkjmHqLVscvOdDF7mODbz7f2mF4rntMjB70i2079pOq3evFZSb%2ByYdAQ54FheIBTW%2FDgfI1IDpPmh6AKdp%2BtU9l81DJBCKun9A&X-Amz-Signature=bef9cda7a2f46261cd98d3f261ee346ae66aadf05b8574b43477c7eb0934719c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4C45OOJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3xOn2tlQ1iRwI%2B1J8Q152sTwSKTazZ2YUZZ3XstQuiAiBqPHdamzAQItzoosdeAndYazDw27ahpMUb%2FS3MWtJ4Eir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM8bnOXHksfIHuRqOOKtwDhQQykbw0xI8sS7pHW320hjTd15KwE8EvlJbway3Q9ID5oyiuAqKDGYzhKdfnXiJcCtwt8BbveOp02mMQx73isstSuem7HOSaE06OZB99rIKDlze%2BAm46NjFWhQzpX2z9Y0GCro06L6JAYlLTwxS8O%2BtHiEa7eONhkcnb3ojM3WOlxV0oRRdmKvA3zKq14jtZZrMGGVYMM9ESkewg5t1hGXUuQRCx7D4LtwWlSUL%2BTORcqZjabbWl%2Bh%2BuWrFk9E%2BhFAqJnCsMxOjd4HN%2FKK%2B4wo7C6AguArMwcmwz7m2OogsWZTMx2lmLv03D6LY03xR1RIY2gLs7QXRU9k1UlcpMZjSNW2pvKAxQTH3uGu3EGK2A8fvCSrjGeTjtEihhh8OHqMqpG2So9%2Fzj51O%2FfCSf0KnzI%2FyULvS9E8tC8SJmk71DdaaXF6YMnvtF9gAbkMxb8VblBxo1buvxUH9Q1TkFTBEbUPe9mWmd6RgyAZqHWTkrN7PqWl%2Fwktmdc4K6LGZhtzwGyUdaae%2B%2FeFMQVqkqcGKL1gqGPH05S%2B4S%2BIFcDgomdpiCxargkZQn4cUggvj7PUGSbpn1G3KD4szdinzTgIgLNy7G44aZbHl1vEkfn9jYJQ%2Bb27F2zGKVpL0wlvmJwAY6pgHdPQl78MlxV0jqAwdhWyn6R6dN98Z0jmCFm%2F81jaNC%2BZ98TTU2UcKpRMXVJbY7uOW2lr6V94AKunDsB%2Ftjathvr1iMTkFQIW8zmwXg9xfAEl7H0yzAdUYD78cBc7MkjmHqLVscvOdDF7mODbz7f2mF4rntMjB70i2079pOq3evFZSb%2ByYdAQ54FheIBTW%2FDgfI1IDpPmh6AKdp%2BtU9l81DJBCKun9A&X-Amz-Signature=13142561f4782807418d7bc340266b6c572d7b1f381588a86554bb9831ac1afa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIL5XUD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH4QclSlpmS4nYYw6UaVUCnJdkEz0H0AZcB3S%2BHsDcNAiEAt2Dvw7mtbKPYZgdn8DaG3zumZgL08wQhnD6GJwDRQE4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKkEzpXdAvwvhHpLkircA%2FQjWf1%2BpI6MgqIawq%2F46zh7UvqrGNzl53%2FfUkvOdMj9MlUsYoigiB%2FuNf%2F%2BOfStKu41x4DrlXrT6F5WFMVg8uL7L6YDCWZIKa6YEmAAc1GJu228Mi5JjsoEwCYca1THC2e2IlUCaw1f9zP3yYCjeURFcpameQ7lsi%2FkPv2dwvi59RvfUk70ctJCDIrXkcWBGOVyKC%2BZRes6r29eF6rlcFYI8KvbsguaXLEXcJ2jKdki1m%2FxJvotXNfMUTjM0HLGxEo412e%2F%2BY33o35maYYDBM9x5R1tZaBv%2FpZY%2B8WTeMXzm7o6p45ygwfXDUct%2BSIbEI8BaZuDAa1jAcNjYUf2Bo806%2BWloTCAlghX6Xe4%2BPYZJlyNyMtdWgFzPEjD%2Bv4dnat6z1a%2Fy6O2fuFGEArgXotgc8qGD76W%2FKMDbX5LUKSvAfrZHSeavO5Sjz4Pd3ITMXnmd4UU4juK%2FsR%2BAM42%2B1MhbtkkwStwKkJNbcQViqzjoLsmiMmw6GxstqLCqvSdbUepfDzckyJORsKljCIaslY0j0AWbahBSxfZvpwiFerwXTB9iMqV0G%2BWuSXvfrIocsVWtz9P2jnRKa2wUCD5Q8MyyBhWoLX0ulT2gWx9RjwVpKKO8fz4LjqyFUmGMMb5icAGOqUBs9lxYt1GJhnw4cqF4QXenmyZaUW5oxLJXVpzL93smLBnW9nt%2Bd%2BGFuaihW6AIOBj6zC6NLhwRty8ePd%2BANLMy0ECDACRDR86cq1U7byGa4ELPl6XKW2zVQ1Z3uAmCKMhAM5trVjwsCCNMkCF929bFZdDCkN9BTANcqi%2B72cMdTbd0rP%2BUk6zJrfU5zkZ5793eSCKGNkR4xNzb4dJCm1eXVQP0UTX&X-Amz-Signature=6cfe16d3320ebfd326fcc1045a950863c3f3c6802eeb8b5ca14d1f06e18f32b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPOCKCR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIzhSEJVXRW28jOnV258X9F67sDHesfxnYmZElVxUelAiBNs88IhTP0ZVJ3lqq9Fetqqzw1k6l0UGuzWBJp2gsiXyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMZ%2BL%2BMjSItq8pqub9KtwD4730s1VcAjl3RXfeFRwRZaqc1C5xhA1klKmzSkkxvzvu%2BQEeDGngm86fHskgrSapvgy2EZWL7mAEoXfNlYKMkACH101HHjOQe%2B4wZHRywQyLpLmJgaXByHiJ%2F7u%2FYYDAuBOYsd4TykXCZyvMQWYk%2B7PzShlYl2KZ8Ru390KC1%2FR1%2BR4kTySQXsMY8GbvzzRe0Z1AbaudwNd%2BiBxdVDM%2BJWSyp%2Fs9vpC7ACCmkn01eadfiF7IG0F5Z3zwoHtxGIl7UDcbgYI0SuyFE0sZ0uJiLy8dd4uTC5kt1A9yDMuENoXzfeHQg5Goept4v5HF8lxUJNJ50hGsSAcimBGhxTTOgdAXuxIynj5WM4WEU4duSE2RwqwmYNGYAuBoSKAYtDRkQ3ZiQkMzVqXrTKMkt7Kpw52YX%2ByQfTYo7zDq0A3YApRkYjO7SmxM1kWOapV1ymKH%2F75IkTwJQQrOsBeLKsW6pSQKqkI9DXfJ2y9z5sDXzDNpbl99yfPksgkHVEMiIr322C1zwOoV15Aqk3wqBqt6IdpoqYGhX7IGpYmFukPtLMn4XuJg2kwCtKPibAEdDe3U0QR42aLp5jQrgPmzINvUiO3VCGtACzaTVExCDkYSR2wRPWLhaqHkvgBx4cQw7vmJwAY6pgEY9IEXiQyDWuq1hz3xLtS4vnNYZ6UN4TgY8FwGoHKoW2SxKT%2F0lC5j4oEF0lWgXQYAx%2Fz95b5KkRoJAbuQbL56zTZx8fSyzlSVAcDdMt4kKybx%2BQYpwj59Hf%2FqO6bs9KEb55oMQFdb9PLcXh0GwjnKulxOUaVMWJEg2fAlSxzYfxTwN%2Fcn44p4I6HaYLUH7H2QWveqbqrjryupVp8iemR0oAgF%2Fkfi&X-Amz-Signature=864f19d6fa5f9caf500270b3ed26bef33805b03b955619d9ffadb2aa8edce2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4C45OOJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3xOn2tlQ1iRwI%2B1J8Q152sTwSKTazZ2YUZZ3XstQuiAiBqPHdamzAQItzoosdeAndYazDw27ahpMUb%2FS3MWtJ4Eir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM8bnOXHksfIHuRqOOKtwDhQQykbw0xI8sS7pHW320hjTd15KwE8EvlJbway3Q9ID5oyiuAqKDGYzhKdfnXiJcCtwt8BbveOp02mMQx73isstSuem7HOSaE06OZB99rIKDlze%2BAm46NjFWhQzpX2z9Y0GCro06L6JAYlLTwxS8O%2BtHiEa7eONhkcnb3ojM3WOlxV0oRRdmKvA3zKq14jtZZrMGGVYMM9ESkewg5t1hGXUuQRCx7D4LtwWlSUL%2BTORcqZjabbWl%2Bh%2BuWrFk9E%2BhFAqJnCsMxOjd4HN%2FKK%2B4wo7C6AguArMwcmwz7m2OogsWZTMx2lmLv03D6LY03xR1RIY2gLs7QXRU9k1UlcpMZjSNW2pvKAxQTH3uGu3EGK2A8fvCSrjGeTjtEihhh8OHqMqpG2So9%2Fzj51O%2FfCSf0KnzI%2FyULvS9E8tC8SJmk71DdaaXF6YMnvtF9gAbkMxb8VblBxo1buvxUH9Q1TkFTBEbUPe9mWmd6RgyAZqHWTkrN7PqWl%2Fwktmdc4K6LGZhtzwGyUdaae%2B%2FeFMQVqkqcGKL1gqGPH05S%2B4S%2BIFcDgomdpiCxargkZQn4cUggvj7PUGSbpn1G3KD4szdinzTgIgLNy7G44aZbHl1vEkfn9jYJQ%2Bb27F2zGKVpL0wlvmJwAY6pgHdPQl78MlxV0jqAwdhWyn6R6dN98Z0jmCFm%2F81jaNC%2BZ98TTU2UcKpRMXVJbY7uOW2lr6V94AKunDsB%2Ftjathvr1iMTkFQIW8zmwXg9xfAEl7H0yzAdUYD78cBc7MkjmHqLVscvOdDF7mODbz7f2mF4rntMjB70i2079pOq3evFZSb%2ByYdAQ54FheIBTW%2FDgfI1IDpPmh6AKdp%2BtU9l81DJBCKun9A&X-Amz-Signature=78339cffc118fd09ab197d8647dc79d98be34f7f412229c7fda5abe078e5996d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
