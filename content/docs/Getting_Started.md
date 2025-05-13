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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBLV6RQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDr6e7bu6RiyRsy91Syg8fqG%2B3sazL%2F3Vn7UFLpz04LeQIgcW752%2ByQSDWtpe6zwrNS359d6Lc3CnKLzkhA3LGWouEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOHkVEv%2FI1yJNnBjircA5uX3GqtQR%2FkBtKaKIyzvXGFPcbffFdcG19Xc0Ndx0fgAJN73jXaYFGKM%2FoGONHV6tXGfWXhlJkRuykeobgIwC7CfSx%2FhhIKBljwf8Ht0VLBEFsihSwG%2BINGUSQ4080wD8CVXhehXfbrmnU6Ey4sBcPWTZljrIV0U1rEvlaOI08A1HtbBXTwH15DSlw5dzJ0OYcLE3rOvKsrnjfcqzTHEQR%2F%2BhDY63BPxKG4OO49wS8wYYfeWYOwPvjCvAL60K6XaQikQzKWGcO55HEcl%2BuHw8mzkVXN8Mj4m4xvK1HwZqb2EWiWmiqq4%2F6tf1kBw%2FhRd4IzWJ42OAso5EnxRpS3OaQvpOTZC5%2BMS8ru5uZEVNi8vMBvIIYGPm8EuXRXAIeily7vVHyDyEnyEH4ZJgtZ7r6YvxTxPdfx91CK1JpeywMUTMGceQBmZgbgaMQLGAzSCWrhsx%2B1uYjojqLlQJ7eUJ4dEeo4ql7ITsf2MDklOGk1Q3I6fzlnNDKFp5obAG0grRlY2lps1yfZMPSHau5NAWUn%2BERXuqz%2FpuZU%2BocZBekYGQku%2BwBqDobFoqTJ2%2FUc4qfSbeFf9B1xgbpqJXdXG%2BkYN1K7%2B7UzEMNPxI2RSasx1g03JY%2B992llrS7FMK%2Fxi8EGOqUBEdIN%2FeYC9PluESLF0FCFlBGsJRtqbkuTT9f8X7yx3b9M5ytOPgbYYUmanHrIrSgkk%2FqkYtotQ7DJjGabQt74NA1uKTlCLb0I2326jjXtMiPDeXOTZUeYSRfOIQI3z7Y0AqSiTwafUx26ZDT0lxqh7%2BHk%2FHWLaD9UvYtQKhH3Xhb2kcRUuK3kaUjuwec44qDVTb6qaqcBhLxlQoQYWPXO0m%2BNWWtf&X-Amz-Signature=6f5f97830d0379d14437bab821ad277210c51ae053368b23f01f6002fb060959&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBLV6RQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDr6e7bu6RiyRsy91Syg8fqG%2B3sazL%2F3Vn7UFLpz04LeQIgcW752%2ByQSDWtpe6zwrNS359d6Lc3CnKLzkhA3LGWouEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOHkVEv%2FI1yJNnBjircA5uX3GqtQR%2FkBtKaKIyzvXGFPcbffFdcG19Xc0Ndx0fgAJN73jXaYFGKM%2FoGONHV6tXGfWXhlJkRuykeobgIwC7CfSx%2FhhIKBljwf8Ht0VLBEFsihSwG%2BINGUSQ4080wD8CVXhehXfbrmnU6Ey4sBcPWTZljrIV0U1rEvlaOI08A1HtbBXTwH15DSlw5dzJ0OYcLE3rOvKsrnjfcqzTHEQR%2F%2BhDY63BPxKG4OO49wS8wYYfeWYOwPvjCvAL60K6XaQikQzKWGcO55HEcl%2BuHw8mzkVXN8Mj4m4xvK1HwZqb2EWiWmiqq4%2F6tf1kBw%2FhRd4IzWJ42OAso5EnxRpS3OaQvpOTZC5%2BMS8ru5uZEVNi8vMBvIIYGPm8EuXRXAIeily7vVHyDyEnyEH4ZJgtZ7r6YvxTxPdfx91CK1JpeywMUTMGceQBmZgbgaMQLGAzSCWrhsx%2B1uYjojqLlQJ7eUJ4dEeo4ql7ITsf2MDklOGk1Q3I6fzlnNDKFp5obAG0grRlY2lps1yfZMPSHau5NAWUn%2BERXuqz%2FpuZU%2BocZBekYGQku%2BwBqDobFoqTJ2%2FUc4qfSbeFf9B1xgbpqJXdXG%2BkYN1K7%2B7UzEMNPxI2RSasx1g03JY%2B992llrS7FMK%2Fxi8EGOqUBEdIN%2FeYC9PluESLF0FCFlBGsJRtqbkuTT9f8X7yx3b9M5ytOPgbYYUmanHrIrSgkk%2FqkYtotQ7DJjGabQt74NA1uKTlCLb0I2326jjXtMiPDeXOTZUeYSRfOIQI3z7Y0AqSiTwafUx26ZDT0lxqh7%2BHk%2FHWLaD9UvYtQKhH3Xhb2kcRUuK3kaUjuwec44qDVTb6qaqcBhLxlQoQYWPXO0m%2BNWWtf&X-Amz-Signature=55e4141d11a304a15db1ad3ae011ee1f28f14ead1c1a8cdbf31801fd5864c5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBLV6RQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDr6e7bu6RiyRsy91Syg8fqG%2B3sazL%2F3Vn7UFLpz04LeQIgcW752%2ByQSDWtpe6zwrNS359d6Lc3CnKLzkhA3LGWouEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOHkVEv%2FI1yJNnBjircA5uX3GqtQR%2FkBtKaKIyzvXGFPcbffFdcG19Xc0Ndx0fgAJN73jXaYFGKM%2FoGONHV6tXGfWXhlJkRuykeobgIwC7CfSx%2FhhIKBljwf8Ht0VLBEFsihSwG%2BINGUSQ4080wD8CVXhehXfbrmnU6Ey4sBcPWTZljrIV0U1rEvlaOI08A1HtbBXTwH15DSlw5dzJ0OYcLE3rOvKsrnjfcqzTHEQR%2F%2BhDY63BPxKG4OO49wS8wYYfeWYOwPvjCvAL60K6XaQikQzKWGcO55HEcl%2BuHw8mzkVXN8Mj4m4xvK1HwZqb2EWiWmiqq4%2F6tf1kBw%2FhRd4IzWJ42OAso5EnxRpS3OaQvpOTZC5%2BMS8ru5uZEVNi8vMBvIIYGPm8EuXRXAIeily7vVHyDyEnyEH4ZJgtZ7r6YvxTxPdfx91CK1JpeywMUTMGceQBmZgbgaMQLGAzSCWrhsx%2B1uYjojqLlQJ7eUJ4dEeo4ql7ITsf2MDklOGk1Q3I6fzlnNDKFp5obAG0grRlY2lps1yfZMPSHau5NAWUn%2BERXuqz%2FpuZU%2BocZBekYGQku%2BwBqDobFoqTJ2%2FUc4qfSbeFf9B1xgbpqJXdXG%2BkYN1K7%2B7UzEMNPxI2RSasx1g03JY%2B992llrS7FMK%2Fxi8EGOqUBEdIN%2FeYC9PluESLF0FCFlBGsJRtqbkuTT9f8X7yx3b9M5ytOPgbYYUmanHrIrSgkk%2FqkYtotQ7DJjGabQt74NA1uKTlCLb0I2326jjXtMiPDeXOTZUeYSRfOIQI3z7Y0AqSiTwafUx26ZDT0lxqh7%2BHk%2FHWLaD9UvYtQKhH3Xhb2kcRUuK3kaUjuwec44qDVTb6qaqcBhLxlQoQYWPXO0m%2BNWWtf&X-Amz-Signature=3bd65e7e48b3120e02cef1986da975b552e2c42dc3263dd882419ee4ce131e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THLCZVX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCJXPlpBJm5XomspH6g0fd4qiYypZrxH2gvVpmXzjLsrAIgTU4iGjNV4HCHLCcPPMRm8o%2BGvXi2S89zIQGR4r4RJbUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXa9lj7NPTC338o7yrcAwc6%2FjWCUhm0QJjA%2FLl2UMv75JAdnzqKwGzEkMwPERCo5HyXt1QEUsXlIW1%2BrOYi2l7noT9G93xZWngL5RZpqoDIk3NA1Kantp%2BEzfuSCQh9Ca4rbraRtgbgWPLQPwZVIuKwSKtrUQEBlm5oba1hBBiq%2FToN4xLtI24zhcmjk3zyWEFjAdVaoLsFGpXaHw%2Ff2X%2BDN%2FcudT7fh780Peu4SXd07Gs846yxwjKlQIhfB9oK7cb%2FT4E4xxdAQdzk9p77fCgT2yzZkepzIlNDCWnqfT37hf9FHfvjALKvYt8zm05lobW6Xet9GZa4LWgqMW1e3gWjHmaqRHjzppjfk7KYXHzVj1gldz1ULqOaeGlGKJm8VGbix2LJXdsX%2FxowM%2FjcxBTXkior0c1I6oJ9BnruoDgqrIS1L%2B3Hy9%2F6CghX9xX9FelK8sVP12poDkg9VlMG8Zs6gJCSdOrVaxOV0zkQUJ2qHU%2FOrH7kxU9ShAVeaw1FH5tq20gGcj3yVnJVxG%2FK4PiLaK3a%2FH5qYBJikJGNXiY2999tZFDxkMq6tvrvFlZRjSaOjzccfeN5OZ6gbTCq8an1n2vP4KH%2FGT8d1gC2%2FbVLPpKWOFoXTPlSPk4oKk5Wqo69gY0fJmRtwXIfMKbxi8EGOqUBB4lHMMlSOe5HlQ0lJUlL%2FQbjX7TQSt9z5%2BYd4a2ZlJYEmlZ2uxHTqCpfiN3AGKS3Ke%2BFFFBKDLLWkaHL%2FXLzo2R2nD76SE7%2BscVyF8hx2HOp%2BQ8tLdIo4TqyyVt1vX6%2F%2Fy1qEpVKuEh0jUGHZyHD%2BJONWYjU8l7KthucwCRLoyIgHU5w9nr%2FzfHCPB8XAyUwLS9PQZ6ul3BSBePR1HCU9NHNAkkX&X-Amz-Signature=657d3d03242adffb2144f5e26b6cf1548d1943b8423d329c1b3af4ac3c3afee9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSI3EZI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIBjnLjskDMmy55ERyNdfltivisBV%2Fkipnjd%2F49MwMwEDAiEA7ZyhXShF%2FbZzw%2FeIUvjvXer72MP%2FB8YSkcAlDCKMKNQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjvzLqW6Agy%2FV1GTSrcA1hB1MdkzzhhBBFiXe3nBq%2FI8VCCnHi9JsUQ6NbrrLuT%2FbWIbqkTi2C6J4jsSU0NLKz8aiDsjP8ISV21sP6WaJvQkKiEI4AWrZY7wzpfT%2FEAOlLtfwi%2Bas60qdqGiAY8eTMD%2BpY88I1gNe6BbkVGi8%2FH841zhQ3m2cRApD5%2BXnNfc1JU5VfsvH4xaKqh3zbWkVHL0%2BOqXQi%2BfhXhgGYpbWEqoT8h0voeWia12OmzbciJbkUV1xTA%2FwbOmz91A1EKC9gdpon177C7oufZUFbR1rEwFMEpFrmm%2F0a0j%2FkMRIgSNd4%2B3pSmRX04aIBoVP%2FElDmJM5Mt0l14HLdkeYs0rlyggpNIkmRgVv6hkV9071%2BeYFgEQ%2Bfywss8nZeD4wnfW4jPomyR6pIRNnF0ZkB%2BW37KHDOsqomt5HXIB8soZrI%2F7AY7AK7PGoch5tja%2BsgL%2F0kCIoeiucklIa3mOeERzlL66m7DhpcirYLQWJLc8AwbiIh8mO6WOHfYzpiyDpDCSj9PqSAwef1esuPu22yAlz6oW4agAnRc0n5bS96huFZJd7%2BhE1wyPtomNGzRo7lKzgb31x0%2FzJqlL0ROeATh5lf3HMJ6uFd2%2BHO2kIXINfTRHuoVPtpsZ5IxcVl3MNDxi8EGOqUB4QsozyOF1%2FS3%2BRqNAUyiciSgIpUN3%2FKXvMSg%2FqJVoN6tw1ES29CD3wtr2mJHrek1bwitnAMzATB9dZV4qi5j6Vi2IijhryWEgnT%2BSnvUaVOiXCdCaOpH7%2FzyJwJAbWNlKQ%2BLv4I0V0PC70oPSXRP98jbPoN%2BDWNXHcWXWytrdtdOOsK8rBLQZXZqD5tAlgsV%2BIJob3H1a0Um1NZlL0DKuJb5axew&X-Amz-Signature=f72de19e9f6bdb0eeb4deed9be94c18a3a0b538409e8cbc4a9c0b56d0b690319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YBLV6RQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDr6e7bu6RiyRsy91Syg8fqG%2B3sazL%2F3Vn7UFLpz04LeQIgcW752%2ByQSDWtpe6zwrNS359d6Lc3CnKLzkhA3LGWouEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOHkVEv%2FI1yJNnBjircA5uX3GqtQR%2FkBtKaKIyzvXGFPcbffFdcG19Xc0Ndx0fgAJN73jXaYFGKM%2FoGONHV6tXGfWXhlJkRuykeobgIwC7CfSx%2FhhIKBljwf8Ht0VLBEFsihSwG%2BINGUSQ4080wD8CVXhehXfbrmnU6Ey4sBcPWTZljrIV0U1rEvlaOI08A1HtbBXTwH15DSlw5dzJ0OYcLE3rOvKsrnjfcqzTHEQR%2F%2BhDY63BPxKG4OO49wS8wYYfeWYOwPvjCvAL60K6XaQikQzKWGcO55HEcl%2BuHw8mzkVXN8Mj4m4xvK1HwZqb2EWiWmiqq4%2F6tf1kBw%2FhRd4IzWJ42OAso5EnxRpS3OaQvpOTZC5%2BMS8ru5uZEVNi8vMBvIIYGPm8EuXRXAIeily7vVHyDyEnyEH4ZJgtZ7r6YvxTxPdfx91CK1JpeywMUTMGceQBmZgbgaMQLGAzSCWrhsx%2B1uYjojqLlQJ7eUJ4dEeo4ql7ITsf2MDklOGk1Q3I6fzlnNDKFp5obAG0grRlY2lps1yfZMPSHau5NAWUn%2BERXuqz%2FpuZU%2BocZBekYGQku%2BwBqDobFoqTJ2%2FUc4qfSbeFf9B1xgbpqJXdXG%2BkYN1K7%2B7UzEMNPxI2RSasx1g03JY%2B992llrS7FMK%2Fxi8EGOqUBEdIN%2FeYC9PluESLF0FCFlBGsJRtqbkuTT9f8X7yx3b9M5ytOPgbYYUmanHrIrSgkk%2FqkYtotQ7DJjGabQt74NA1uKTlCLb0I2326jjXtMiPDeXOTZUeYSRfOIQI3z7Y0AqSiTwafUx26ZDT0lxqh7%2BHk%2FHWLaD9UvYtQKhH3Xhb2kcRUuK3kaUjuwec44qDVTb6qaqcBhLxlQoQYWPXO0m%2BNWWtf&X-Amz-Signature=7f1ce4d19835c94d3bff615e8addfe7bcb00f0a57c1f87e95b3eb4884871906a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
