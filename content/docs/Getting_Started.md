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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXAIA7O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFbZH57R2Cz0tO%2Bd3NNWiGhzm1U6zlU%2BsN%2BMQcQi7CKAiByRF%2F26cF2tBMYDH1P%2F1VPUr18%2BtUPDkMC4Bsp0QZNuir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbAIWJbrKrQmG4NJ1KtwDJGY7ShmnK8NC%2BE6zgQYZpvypwmNfQMXTe0Z%2Fbx6KRscl9vFLfGs3jAGvwXcw7fkUHXVfiyTwo8BcYVvdaq46Q3HoT5ZVF041KnP0TqhZqAFUNlcZJf2f822uOpKdGJuag46vG9JLw4AL6b1w78Ppuj80V9fakJ%2F5dicMDZMmVDAxvicixyBOxo3YAPg9KSoErxaeLgThiP%2FnQDq2dOPavVX5mcdpWaz4%2F45Gqjd1lP8JMmoBixBTrEi6%2BO5hSmvaaOHkUwwvW2j1icOgbHcePG1xGbfUXnu%2BxGz9fJcd287yKHiCAbezV3cEorIzZdQE2uEAWYrqrFDJWwfIgtQqKePSbiMR59cwhaR1y6M%2F3bBCOhOaS68fiw0xFMW56AwvkpZ6RRwE4xLrplg11EoO8WuX3gG0xbBFm5QoKrZvlPO%2FcnYnBO2B0A0poWFUJxSic7C0%2FX%2F6I2NMMVc4tmY%2BUHA5XAvKTQ2M5%2FVqo%2FF3b4UVuxwVW6WQqBreFQl5SHIJjR0%2FbLwMoMLKT00S9%2B%2BqC%2FCPUCczLQICDJMoWNKtYxV4NqdfGjsY0gwuzme0irZ3uvn0gvh4%2FflTFmnkhCf8E4fFEFRiQ%2BFOl3Xh04m8KgMBtKCFr6wF8GLVqHgwu57LvwY6pgFhxTzPKhtcXxiO%2FopJSHmPGBAajiYLNvjnAXUt8UDx0nthnWJom%2BE0fOST87euNkNg%2BlBlpmihihoAXTZtTBEkXyNzI3B0DCQTskDhuJirbUeoCGQN7mPhuXKPZYx%2F12mU3Ka3XT2SOhOOQqDUSZYDsfxIt8hwlwhHomuth0zKD80ciXxPJ99qEBT6v8u0mlGbEHH7hp%2F82fY22WG7RWZdydBXScGw&X-Amz-Signature=79190434f9ec2dc58d1b594aa076f8c9855c65baed55add298ff4f59059558f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXAIA7O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFbZH57R2Cz0tO%2Bd3NNWiGhzm1U6zlU%2BsN%2BMQcQi7CKAiByRF%2F26cF2tBMYDH1P%2F1VPUr18%2BtUPDkMC4Bsp0QZNuir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbAIWJbrKrQmG4NJ1KtwDJGY7ShmnK8NC%2BE6zgQYZpvypwmNfQMXTe0Z%2Fbx6KRscl9vFLfGs3jAGvwXcw7fkUHXVfiyTwo8BcYVvdaq46Q3HoT5ZVF041KnP0TqhZqAFUNlcZJf2f822uOpKdGJuag46vG9JLw4AL6b1w78Ppuj80V9fakJ%2F5dicMDZMmVDAxvicixyBOxo3YAPg9KSoErxaeLgThiP%2FnQDq2dOPavVX5mcdpWaz4%2F45Gqjd1lP8JMmoBixBTrEi6%2BO5hSmvaaOHkUwwvW2j1icOgbHcePG1xGbfUXnu%2BxGz9fJcd287yKHiCAbezV3cEorIzZdQE2uEAWYrqrFDJWwfIgtQqKePSbiMR59cwhaR1y6M%2F3bBCOhOaS68fiw0xFMW56AwvkpZ6RRwE4xLrplg11EoO8WuX3gG0xbBFm5QoKrZvlPO%2FcnYnBO2B0A0poWFUJxSic7C0%2FX%2F6I2NMMVc4tmY%2BUHA5XAvKTQ2M5%2FVqo%2FF3b4UVuxwVW6WQqBreFQl5SHIJjR0%2FbLwMoMLKT00S9%2B%2BqC%2FCPUCczLQICDJMoWNKtYxV4NqdfGjsY0gwuzme0irZ3uvn0gvh4%2FflTFmnkhCf8E4fFEFRiQ%2BFOl3Xh04m8KgMBtKCFr6wF8GLVqHgwu57LvwY6pgFhxTzPKhtcXxiO%2FopJSHmPGBAajiYLNvjnAXUt8UDx0nthnWJom%2BE0fOST87euNkNg%2BlBlpmihihoAXTZtTBEkXyNzI3B0DCQTskDhuJirbUeoCGQN7mPhuXKPZYx%2F12mU3Ka3XT2SOhOOQqDUSZYDsfxIt8hwlwhHomuth0zKD80ciXxPJ99qEBT6v8u0mlGbEHH7hp%2F82fY22WG7RWZdydBXScGw&X-Amz-Signature=e614adf1e1372c186741c1c770c69d522ab7d8fa6e7df9331b994f51196ddb5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZDJJDV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUL0L9WBjhFqxbwOu%2FvhiwFDDL78HqeOPFSCFd2kxMiAiEA8p8aT8bY%2FzVidHSOWvQrIxGmNGwBsClbBni3mHFbvtgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBXSjQH4fxCkZl0N4SrcA9JOh0z%2FeRFWxCWJS7Mk4%2B67RZ70THxGdrq7pI%2FmvxhAlcVSBzBha3qZDcNN9pgw%2BjU39lS%2BK8tysqdNO9iltgZCvS0uY8AZesS8yY3QgPIpWK1Y5mNmpooQ0y1L%2Ft8JSVwOaE8yC19Uygovbyr%2BPKG%2BkGnjIZaNgdfum5zNr5zUed%2BgVB5gst%2BEtCavXPAlbTNvWxoOxbP3JTyYm69OeyFnrDwbPDwHsmqpTyVRlEUsM8ar7eVSYaKrTquKoibXD7RkdYF%2BajZaISb2MkfsWQDHzvM5dkgDO0y1mcpjSVuGK4uu3iaghz5WowV2bzU98WZ1xvrdG%2BFpop3hwRCvXwsDIWOmHnw6FruZZYfZrTAsSqlKZuCeDNWzvMeYHUrgCgA%2By%2BbIovcrB%2F4Um9oDm2wdF0Jk72FuqWNq05L9Ws2OoYYeDQHhGeyMc1t2WNHxkST0CvpXGOxFZ9G7S9hJHUl4n6Wdwh53hX7aguj794iu29H8BOs4iJjNlksVnwoNdyWmg%2Fy3hxiXOqzJcIb3d7xZ8LbHTcLcYTlbxAJcaXlhHjUU9%2FTPlF5pC1Jqzxz1eptl7TkLyzXo5in37zjXOuV3dyqqr1zBAAcTnJdWvoiiW5Aik91IjUPaic23MIOey78GOqUBamI%2BzTNOaNN0vGFZMG5y5eaJX4bee5O4NmxZq7NlgbfJ%2F5TDcxQt0YpO%2FjOWFVyR%2F4%2BBwsmtFxFcXGGyATcNQqgickzmB53PdbP4hRZm8wuPdIgtrRniFrg3Vv5dYjXFp05BpNOuS6NVyCXIBKynj%2FJ7Jdsq8VQRGx4D320HA3VC0QbBgZlnPKOQwFD7yH5rym0TWbDKwI1w1Ff4YCpg92a4ParF&X-Amz-Signature=67386afbe4396f95505d7d5986c486a03a36b57bc19dad9f783fcd07a055eb68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3SBRWL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMWVGq1wD4DtXdFNTtPeEQj5uy%2FZz8yycmYLcbTc70DQIhAM4J9a1LdUGwK4OTk%2FHLJ2YivLvDf2By4bniynHLjuHbKv8DCEwQABoMNjM3NDIzMTgzODA1IgytBEZWzJRBBVDV%2B30q3AMZnn5w%2FKQlNqRRneMCgdhCui3geHRtGoQ2oneDPfg4lJPWYiJRF9%2FlBtka1DjHmPnG3NLDBD0iTnCoE69Ux2l0YB7u7%2BytnPt%2FMGT06755txZjxIcB4nWJNLSnrfp1gtbyb5iuL4lKbPzQjvxvzGhu%2BgxgGqiGKUD4pFG8VOHnAF21eWYfjcashTj6nCMX21MEDnmVt8KMEZVePjE3Xe54U%2FgpFTcZLo%2FhjTPwi2o8LgeX8xrPAU37xB0E3Ch2rLwJbaWlbu2cv05t18x74V3kMeesRc%2BoEbI06NoXz%2BKA%2F5e4DMMBh4yjVeISidqyecT5l5qfn3qU89FftWpZzlAIwcs0wK9TfV%2BlosTMsmPgqbAVvvFeibdFzCWwT1%2B3YJiYl4oIqJGpeWdge8akkx4FJchMmHy%2FSaw4ivI5u0nwq8gMtt9W7WgGUwsMsinnXM%2BVPFTZAew6Qk%2B4EhyBbj03%2FXclQIZhnBzuDppzgKcpQ5o8o04sArT12jet%2F57tm5O7Vo9uUo%2BVnHLfWNM%2BBU7sdqf17ecETfSZQoCWSwZFd8xj2G011q3PP88U2G5XYBfWDePXtDxP%2FIxdkjNznT9KnrU3VT5hgM%2FHJGXgep%2FCtm9TnIHptM7cJLLVyDCjnsu%2FBjqkATu3dRqTTnjCr2tq3mk0AwbsRC5mn4fVq92J%2BvE0xC6C36xoLotycFypDsDKCqZqRRZXVZHKgA%2FwGS5yjXK7HFQvSBj%2FGtrJT1lfTTzILSRFfkTvCX8ZybfBcV4CFdgPBZKE%2BTIeEmfwi5GbgSFuD8TdxqAfeu4rK71T%2BsmNV0jUC8X2mEjWechNypLRapnLvWT3aCnxAZ5lDkPfCZgZ7psnOcZ5&X-Amz-Signature=8e5915c28dd7c94ce1fbd9e0c303fde2aac0d64b59d00e28e9c19be2f45cc210&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXAIA7O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFbZH57R2Cz0tO%2Bd3NNWiGhzm1U6zlU%2BsN%2BMQcQi7CKAiByRF%2F26cF2tBMYDH1P%2F1VPUr18%2BtUPDkMC4Bsp0QZNuir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbAIWJbrKrQmG4NJ1KtwDJGY7ShmnK8NC%2BE6zgQYZpvypwmNfQMXTe0Z%2Fbx6KRscl9vFLfGs3jAGvwXcw7fkUHXVfiyTwo8BcYVvdaq46Q3HoT5ZVF041KnP0TqhZqAFUNlcZJf2f822uOpKdGJuag46vG9JLw4AL6b1w78Ppuj80V9fakJ%2F5dicMDZMmVDAxvicixyBOxo3YAPg9KSoErxaeLgThiP%2FnQDq2dOPavVX5mcdpWaz4%2F45Gqjd1lP8JMmoBixBTrEi6%2BO5hSmvaaOHkUwwvW2j1icOgbHcePG1xGbfUXnu%2BxGz9fJcd287yKHiCAbezV3cEorIzZdQE2uEAWYrqrFDJWwfIgtQqKePSbiMR59cwhaR1y6M%2F3bBCOhOaS68fiw0xFMW56AwvkpZ6RRwE4xLrplg11EoO8WuX3gG0xbBFm5QoKrZvlPO%2FcnYnBO2B0A0poWFUJxSic7C0%2FX%2F6I2NMMVc4tmY%2BUHA5XAvKTQ2M5%2FVqo%2FF3b4UVuxwVW6WQqBreFQl5SHIJjR0%2FbLwMoMLKT00S9%2B%2BqC%2FCPUCczLQICDJMoWNKtYxV4NqdfGjsY0gwuzme0irZ3uvn0gvh4%2FflTFmnkhCf8E4fFEFRiQ%2BFOl3Xh04m8KgMBtKCFr6wF8GLVqHgwu57LvwY6pgFhxTzPKhtcXxiO%2FopJSHmPGBAajiYLNvjnAXUt8UDx0nthnWJom%2BE0fOST87euNkNg%2BlBlpmihihoAXTZtTBEkXyNzI3B0DCQTskDhuJirbUeoCGQN7mPhuXKPZYx%2F12mU3Ka3XT2SOhOOQqDUSZYDsfxIt8hwlwhHomuth0zKD80ciXxPJ99qEBT6v8u0mlGbEHH7hp%2F82fY22WG7RWZdydBXScGw&X-Amz-Signature=eac43460ec5cea47422196d2eea2c3bcfa53b0a3891db38b0543cf197c620a90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
