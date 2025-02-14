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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJSTDZL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHY50cypMiE1Uy%2BmUqRenPWWtealLa6QFkzwtAiK7fFrAiARwW8N5Hdk6fRUEc70SGmoAtEm2BEUqV9kZuqB268EKSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMq%2FCsFLomOToXNNY8KtwDzmyrfjJ89IloalGvQcutZMpUm%2B3wrrs8o4hI84P%2FezHtzPiIAGe8LSNlSlRu9FioV%2FJfP8PRTSB62cyFALLFZv3o9Lts6BVlREjPfITZx3kkfLf9nduag%2F4QPOLzUJ0t%2FAN%2BB58fTGekxEjCUlTpg8G87Gr7WkOfHyydzvywEqx%2BEIPcu%2FYTHmAHwgH0bRyFMvh%2B1Kk1EoT%2BVTVFw6a1VzjjxXNCtSZg9KCVquKYTaNS8hck3LgfUA%2FAuhTHvYkx9NWcg905xd5tpYQHj8cyyaizu1OO51Xdu92S1BELrjfvbOojYWeI%2BwbFfyXGMIgkXLhAsbqVXwKn5PI50CPoEsAD7gQF6lgL3iJ2gT8%2FELqwvNKKXUcChKLXVjSRYhLTVmAt2AATVAEXe4LSAdx2vnQUTzg42vYh25nKm44aIYTsuseS0ocI3ITWc%2FnfzZK2s6n%2Bd97UT8W4%2BH%2FcfsqDEZwG7URs4KTnAKfZ5S58k0MybTsYhJgAsMAll8ri5h3ZOFkpCYbr4Vkq8ueNhhMJIRGts8DtecdPf%2BcCh2%2FOSdK2JaIfYmXUNFbw4eQBQjGl21IwzZPM4ycN4OvNGYPOEsmUTKQnP%2BEtm%2Ff%2Bhx7eZNTqqrIUNF7us0iowqwwtZy%2BvQY6pgGtezFGKMLGl73C0AwOhHvT8C55akaKDxb9NFpq920cxl7%2FxtkcDc5rHu180FtvjvCYXS2aaDOzDuRm7xG4jVPB5HDyQJCYUq%2BCquJN64efZwkrtvKejN9uSeGAsgEY%2B2bMCPzC0C1JStLnp%2Bb%2FIl53gwMQ9tQaJ6lzL6uLxfUwmyUGlBy3oD435ycN6MGqCqFbeq%2B0aJ0ygTppU0PmeXBQWS8DN4OX&X-Amz-Signature=55d61b28f8859bfe710fd8a06e6d1454940120ae41cf5800aaf0f46a5c8122d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJSTDZL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHY50cypMiE1Uy%2BmUqRenPWWtealLa6QFkzwtAiK7fFrAiARwW8N5Hdk6fRUEc70SGmoAtEm2BEUqV9kZuqB268EKSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMq%2FCsFLomOToXNNY8KtwDzmyrfjJ89IloalGvQcutZMpUm%2B3wrrs8o4hI84P%2FezHtzPiIAGe8LSNlSlRu9FioV%2FJfP8PRTSB62cyFALLFZv3o9Lts6BVlREjPfITZx3kkfLf9nduag%2F4QPOLzUJ0t%2FAN%2BB58fTGekxEjCUlTpg8G87Gr7WkOfHyydzvywEqx%2BEIPcu%2FYTHmAHwgH0bRyFMvh%2B1Kk1EoT%2BVTVFw6a1VzjjxXNCtSZg9KCVquKYTaNS8hck3LgfUA%2FAuhTHvYkx9NWcg905xd5tpYQHj8cyyaizu1OO51Xdu92S1BELrjfvbOojYWeI%2BwbFfyXGMIgkXLhAsbqVXwKn5PI50CPoEsAD7gQF6lgL3iJ2gT8%2FELqwvNKKXUcChKLXVjSRYhLTVmAt2AATVAEXe4LSAdx2vnQUTzg42vYh25nKm44aIYTsuseS0ocI3ITWc%2FnfzZK2s6n%2Bd97UT8W4%2BH%2FcfsqDEZwG7URs4KTnAKfZ5S58k0MybTsYhJgAsMAll8ri5h3ZOFkpCYbr4Vkq8ueNhhMJIRGts8DtecdPf%2BcCh2%2FOSdK2JaIfYmXUNFbw4eQBQjGl21IwzZPM4ycN4OvNGYPOEsmUTKQnP%2BEtm%2Ff%2Bhx7eZNTqqrIUNF7us0iowqwwtZy%2BvQY6pgGtezFGKMLGl73C0AwOhHvT8C55akaKDxb9NFpq920cxl7%2FxtkcDc5rHu180FtvjvCYXS2aaDOzDuRm7xG4jVPB5HDyQJCYUq%2BCquJN64efZwkrtvKejN9uSeGAsgEY%2B2bMCPzC0C1JStLnp%2Bb%2FIl53gwMQ9tQaJ6lzL6uLxfUwmyUGlBy3oD435ycN6MGqCqFbeq%2B0aJ0ygTppU0PmeXBQWS8DN4OX&X-Amz-Signature=7e76062018438e77121f3e56bf90113de41494e11e05550007cac73941456858&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2FCY3Z%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGgheOfMCiRChuclfGN5CYTCNdtBmxS8haCG%2BJEf6GcRAiEAkOcbTlobZR06gTztfh0kSxbhe4XxrQ4e21gxfxE2Z5cq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMXU4l19feQIpDMeuCrcA8blBaSb%2FNzYwMI9AtsdxB%2B8TtPHluJ0kh3%2B3fkJGxYi2djTGhZfUHlpk%2Fg77iKHOpzd6UlcwX07kw8IWeX2SdDMznFtDDb43BQkzjAHHv3lf4mXPNbPdkqjB%2F9kn3wM4QqZnnL%2FqpxZyNDPH7TFjQv%2BJ79dvT0WeMp5HhbjCuQIUvz3iR87HxCajE7H9ZJQ1LE3bRUFLZbz3Tw7cIsgy73%2BkNRaiNe5GqgVYTwZh5o7koxbBbp%2Fv%2FXbNkBxWJfV2Z8P220hTGGWZHJZw%2BZssEI%2Fn76i8AdrsSXQFZiQ0U9RoP3kWHlsrJ7ggggWwBy%2FyHqa%2BvxvrZ752ROFN3PS5smGL%2F9FZhfFaV4MQki%2BqX8Zm9U%2B1bAWtkmlO4tjpfrd05brCuZQ87ERH8Aq6eMMQbTTAYRVp4RYCt0RWmtm3nP6KjLrQpe2NjerpNYBQJDUOELss3nkdPu8Xy7EkwdGtv13h9Ht1uhBmX8ufIunxN5QFN0kWbr1UwXSvSXvsBEtbQBfA5oyIU5LMHGv6GHf45Bh5w6zClKoEkceqYMc8%2F5Q%2FHJBWXSZvGvcIPIrgrLZOiG%2Fc4NHuZvyKUxiqQWppBa1P%2BGoirYRZuv51qoPPD8PPI1VIR%2Brv25uY9RFMLmcvr0GOqUB%2BBfB5ZkdYQpLyKtfsKLrJL27NAuA0GPzplwPPUid9MY9bsyWAx0hlVg%2BoPqyAWXyv%2FGTd8QyrREYGSfxyHYt5xG8wRWIB%2Fdp7J4zTvBkGxVH%2Bn%2Bh5WQEM%2FEnvNG3%2BQlV%2BidYUUMS7HYPKQrVRi93mbLnTRVOYoI7vz%2BWV5ky0%2FMetakTiKzktowrwBe1rm%2BKyykniEkW%2BqvgCZyvC%2FwcSu4U1kPc&X-Amz-Signature=493a782f27de1e29fae57cb2fe9a70079b4eb7d206f26060b9ad711d72164c65&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXKYW2T%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAiEJSWdjXcJxQK%2FOjVLj07nzY9eptRE%2FR0fbyGQwyPvAiEA2VJ1gf%2BEiCWWPQyN2FzeX4IemmSvspozSIQQiYd3HZYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM8p0nSbyLzd1dlDYCrcA1%2FaHrc7V%2FQthulDFRnBhgm3%2FypNJ0N4iMykHn5e4Ye4Na55wJQegTH3U4zZ4%2FqtH25ZtH0DxXmgZSEkxa6k7MDmQBwEI231gB7H66kNQtodwYfSa3DlQAp%2F8bJWMAPVmnDVUf66IK1YRTMbBLjZDLdmGQXNn%2BDRF2V7rAs2Mkwgr0s1GQ07CT8FObokOwUZyEyFt7HJNRvOy6Pp00jhNFOV2CS5k2Uc03MxpomZtWNsXe8IiBPut6yTI8ni9zqAodANyJ12Qin8LLiw4PY7arwFvQJIIgyrb7KYnjNPJ6e6%2FspkScdvrVxFtGqpuCZvtKteBQRsOK7nbC5tP3m5nQK4%2FAC52QfxcICFqmca8VyT34Sv8W1pKVtFKuGlOVkMueBsECX9AvecpKE5LjRvlfKpPkYEq29ugMCcBG3XnM1JNm45xJ0yN2OAyMPMM2DwtpcOJrneQcjttkYLUMembIJ3cMbjX%2BGnRC0g2z4v%2BmQt7ut%2BQjWn2eNkJX4QnjNS%2FyIqdeNAy01wPDZ8voPM7jlHfBZcSmyJzAkjg683%2Bvj8FwCXIdngpV1Wkvq6tzVWQV5jZs9yaIxBcAqvNthyeYJ8jycYqvC7ot1Xl62GxljFQz8IJCdT9EPZecnRMM2cvr0GOqUB80cBHZrDMWOgjbFbMC9CfRoaLFv1QD%2F%2FtGyXNCJNy6PlFYZSOihqMsbGX971EJh%2BFjSdpEs6TjWYHjKPqZQg8SahRmaAMoNEVs3tDgaMov%2F%2FV4%2BLSvTAm6r4OmHHVSHo3gicFrwJn2z0Lk%2FGEQsmsnhm7BOgB2QQ4rt52CiACFBqYtUFJjIKTciQpbnQvFujTZbT9GfRkyvXHUw%2BX3dVENYKURXu&X-Amz-Signature=3c50849dfb92e18f54807896555c012ad6721fb672649a52a8af912ca7616427&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJSTDZL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHY50cypMiE1Uy%2BmUqRenPWWtealLa6QFkzwtAiK7fFrAiARwW8N5Hdk6fRUEc70SGmoAtEm2BEUqV9kZuqB268EKSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMq%2FCsFLomOToXNNY8KtwDzmyrfjJ89IloalGvQcutZMpUm%2B3wrrs8o4hI84P%2FezHtzPiIAGe8LSNlSlRu9FioV%2FJfP8PRTSB62cyFALLFZv3o9Lts6BVlREjPfITZx3kkfLf9nduag%2F4QPOLzUJ0t%2FAN%2BB58fTGekxEjCUlTpg8G87Gr7WkOfHyydzvywEqx%2BEIPcu%2FYTHmAHwgH0bRyFMvh%2B1Kk1EoT%2BVTVFw6a1VzjjxXNCtSZg9KCVquKYTaNS8hck3LgfUA%2FAuhTHvYkx9NWcg905xd5tpYQHj8cyyaizu1OO51Xdu92S1BELrjfvbOojYWeI%2BwbFfyXGMIgkXLhAsbqVXwKn5PI50CPoEsAD7gQF6lgL3iJ2gT8%2FELqwvNKKXUcChKLXVjSRYhLTVmAt2AATVAEXe4LSAdx2vnQUTzg42vYh25nKm44aIYTsuseS0ocI3ITWc%2FnfzZK2s6n%2Bd97UT8W4%2BH%2FcfsqDEZwG7URs4KTnAKfZ5S58k0MybTsYhJgAsMAll8ri5h3ZOFkpCYbr4Vkq8ueNhhMJIRGts8DtecdPf%2BcCh2%2FOSdK2JaIfYmXUNFbw4eQBQjGl21IwzZPM4ycN4OvNGYPOEsmUTKQnP%2BEtm%2Ff%2Bhx7eZNTqqrIUNF7us0iowqwwtZy%2BvQY6pgGtezFGKMLGl73C0AwOhHvT8C55akaKDxb9NFpq920cxl7%2FxtkcDc5rHu180FtvjvCYXS2aaDOzDuRm7xG4jVPB5HDyQJCYUq%2BCquJN64efZwkrtvKejN9uSeGAsgEY%2B2bMCPzC0C1JStLnp%2Bb%2FIl53gwMQ9tQaJ6lzL6uLxfUwmyUGlBy3oD435ycN6MGqCqFbeq%2B0aJ0ygTppU0PmeXBQWS8DN4OX&X-Amz-Signature=8ec08b41167849381fccea072836427f62c39b0128a542cb35854d9c3f2451d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
