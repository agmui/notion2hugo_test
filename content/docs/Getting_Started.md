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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNUQ5Q7G%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZYPwDX1RfRyskmCiMz99I6oGP6fCqPVkl480d74pdwIhAKfL0s8fp0exwBfk6qcWTYxjjQMpza9zYCxv3rpcmv0LKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydLxVCPyzqNxXA4K0q3AN3bFL2VvFYhbhDkDK3GOKLX2IBcPE820OqQfFGsatBW9jWDM%2BMtt1ai5ssP0lW5n2XEtNkHsuVppXWBHaF0QmGQw%2FcW1MtlcOWfBH0GDs98kZiWu%2FSvWP3wxbCTD42azpHi02KFW5%2BFnlU7TdY%2F9NTC3LLSaCZe0IamwjfNGMobDvwdnRnDBxQbD4rWWN0bzcivoWMIwZbSU8uMHx54ab2LLDzwnD%2BfpjHQDJ%2F1%2B2PZIqtpeaeLjo%2FEgx52K2wKDBOa58ptBXfaH7WoHHHikUp4CE46lGqcEdR2il3BQhX57iwngrowYvEyUicVFHJvRcozqUxSKvLDgoDpz%2B1PPotyynOIzHJleLdAkzPCTd9oJRa4AtxwQNFIGBZrrSi1fpTzY4UyXwLLwsSVNNbUhdNWZNwm89n4iTeegvUmCcV1Db%2BY0qcZIZAyFVJVT3sVW%2Bob3LlPUj847qKNISqJcEfXIzM9tZEEJ2GXac4QCX5bnNb4JptMiw%2BBQ3CgMPpdVtv%2FQe4HFqY1qWt08ywq2l8JDWuAnDcX2SHY0Lzlna27i6u75y045Hd3xTvnOsdSGhB7Q0m7KTcwJowE6W19M2seQuzPB6vfROvruib7An5elaprzj6QBW%2BIudBqzCx%2Ftq9BjqkAfH9GCJkoR%2Fm4lROU0mpQefk5YAMXwxAeXnlSrOu2pvgMhrm%2FQLgjg19Kq484OogEFpEENKt4LfwNQd2Zjpo3uteMsLGBagWLjzyysWCNFcGjnreOkDBy8hZ6JjIkOtErE9T0qq2Z1d0WUsq1xpkpqqy5%2BpcBZmPSoVzRecQ0zOwSN3ZxQ3iKAhSbbZseSHd1x2J%2BbMMoScKV%2B0LLWZYSbi9tlmR&X-Amz-Signature=652b7521f92bd5879b58c34267fd2bda6f66ab04b09237b3705a8a047d603b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNUQ5Q7G%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZYPwDX1RfRyskmCiMz99I6oGP6fCqPVkl480d74pdwIhAKfL0s8fp0exwBfk6qcWTYxjjQMpza9zYCxv3rpcmv0LKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydLxVCPyzqNxXA4K0q3AN3bFL2VvFYhbhDkDK3GOKLX2IBcPE820OqQfFGsatBW9jWDM%2BMtt1ai5ssP0lW5n2XEtNkHsuVppXWBHaF0QmGQw%2FcW1MtlcOWfBH0GDs98kZiWu%2FSvWP3wxbCTD42azpHi02KFW5%2BFnlU7TdY%2F9NTC3LLSaCZe0IamwjfNGMobDvwdnRnDBxQbD4rWWN0bzcivoWMIwZbSU8uMHx54ab2LLDzwnD%2BfpjHQDJ%2F1%2B2PZIqtpeaeLjo%2FEgx52K2wKDBOa58ptBXfaH7WoHHHikUp4CE46lGqcEdR2il3BQhX57iwngrowYvEyUicVFHJvRcozqUxSKvLDgoDpz%2B1PPotyynOIzHJleLdAkzPCTd9oJRa4AtxwQNFIGBZrrSi1fpTzY4UyXwLLwsSVNNbUhdNWZNwm89n4iTeegvUmCcV1Db%2BY0qcZIZAyFVJVT3sVW%2Bob3LlPUj847qKNISqJcEfXIzM9tZEEJ2GXac4QCX5bnNb4JptMiw%2BBQ3CgMPpdVtv%2FQe4HFqY1qWt08ywq2l8JDWuAnDcX2SHY0Lzlna27i6u75y045Hd3xTvnOsdSGhB7Q0m7KTcwJowE6W19M2seQuzPB6vfROvruib7An5elaprzj6QBW%2BIudBqzCx%2Ftq9BjqkAfH9GCJkoR%2Fm4lROU0mpQefk5YAMXwxAeXnlSrOu2pvgMhrm%2FQLgjg19Kq484OogEFpEENKt4LfwNQd2Zjpo3uteMsLGBagWLjzyysWCNFcGjnreOkDBy8hZ6JjIkOtErE9T0qq2Z1d0WUsq1xpkpqqy5%2BpcBZmPSoVzRecQ0zOwSN3ZxQ3iKAhSbbZseSHd1x2J%2BbMMoScKV%2B0LLWZYSbi9tlmR&X-Amz-Signature=0d05eb49d7790452e4346ce3131275f580998d719c324ac45adf6ad3467612c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMARSWF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2CMLDA%2FhSW0XJf0wNO8HTg8JzJKlxLLswWJMdaYZdUQIhAM6FDicSR%2FKbBkxJEgH1uVbqExJBW2s7fqBUn2Ol6maEKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9TmYhxcFFOHPbTh4q3AM6P3T%2FWzOdK7I07NFZM419B3ZUXRF%2BDc5ra7h0vaJ02vJus1ckdH%2FssRt1XOO%2BU%2FMC9MF9YGax2nrUxXXX72dTw1GhNVfzghz7PD3Qb8L660OxaSKI8rX4zUVBVQZ%2FpCgs3EKAMS7MEwQLcvT6orcOxUH0UfdIgOBibLeiIltCNusT5nLvJPWuytutPYub%2B1IdzOXUGo8aujO11OQHUoYflI8C51UewraOx4QAQAKu%2FI2yCFj1I29OV4aSWdq%2FWZAtjOaDh0qRIvZ4ftlQQ%2FbvSDxcuhn2ehLm4a4g5iW89JJf6SKLEqeMMMl5z%2F22EoIRWLyvzWmEqGUGvwdwLDfehIY4hFcsz7%2Fbv0BDvOcMyc4ZmrrTEqQNwqn2foA4K7%2BSwoydNURHuhkfMDYVeRvkAhgJEZxe7BHfhhnjcezkYIwve1LGPuJnajEpJSa6bI79rHAuyM10BJdr35bX8SjPIWtCGUDOc%2F6UhMJc7MSdYEUhofd6L%2Bd1UVZGlSXFzemkTiM4Ht%2FgqpVM%2BaAGRIe3jsiNfvpirmRsf0Ap3ZKQHjGpsjBhmwiQPRq6%2FBqQ7ymsBoR89mGiXgP%2BoOYKKAlHj5Zhm7bow7Z9HfCjFNEgaq9qylrz7HVQYBCBojCn%2Ftq9BjqkAQ60p1nJswZEf1MCBzzim4HcGpvP49mzUvYbqO0voP3ZVYuAGLmtqx48OVrUmH7ZMwSBceHFotGl944drr0ep7y9ntM%2FSFH3dU%2Bx%2BZBPjAXlYDc78V019i0M9uhnYgDa9cNl%2F8lKggLcZimS7dN2qZQnvEuanXVbX4sbk3e9D1%2FRb7pO5qiX6yCozte48ASLryHUUOSropPOyOUxznq%2FUBEuipJS&X-Amz-Signature=23020d9702852769c9f6f3b2ad1a61443042d1ae1303d3f62147a7597feaba30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PMNTG76%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZgJKgwXvE39bAd3njvXEMZ3Z0JuI8NesYpRnzrVp%2BSAiEAobnghqhbkBTCawhUK2txeRwmTBwY0AD55NdOof4lnb8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1oH9ToBoHSCXcmLCrcA%2BpAvCFWlhz%2FSCZd%2F75%2Frd66VQtloLOCXUmHXwA%2BNoXTqaYspWES5cDGkmvvlmocyZrO2oQ6LERMgRKl3c%2Fne11biEHLNlyHVv9IgbIuP1%2F1242N1fbX3MrZauitjjYw57xoAQ%2FHL7iMgZF%2FovyqY5OzKSrb6b5nhSvatlbOIZlwtFnjRjK6Xjy9uRc7UwFqZJkq8VGhLBPDnrG%2FFIFhWJYdKszvWMAuWrIWHBZ8%2FVabuFtWw%2BIz6ZW%2BcMR2cmV4%2BZHm3IsIaRbcwU9Lt09dH7Y%2FVF3IeWmtrV72ih8kOieH21XT4OfqDEA4OHaddqB4RAW%2BOYgfV6CQ2%2FmnkyYrOzUJwXdiu8nuD0KCxmpFBjakW1o58XSuCi%2B5vfbKbZGB33THTLsvZlt%2Bb06Q9JvWAvS022DlEx%2FDyG7DzTZ2aU7bYXs8cJYvaFjEO1e6MGE%2FGGm8isaFVJinvKiK3TMjhu9ApAAS2RWBPIoJAeIeJnUM%2FN%2BQqkYms1uG3mblenAw2mb85BmKIzY3SfzLBAzgqvZweX7rEQJnsP90FlaNwQptUROfKShGwz5PhVhFuczXM1vSpvQAw93R6WcO92mOo6Dce%2FNpc%2BeTLeUV7dgKl7lHxpGWPBVQkGv7dq2uMN792r0GOqUB3Rs0Yu8T4QafdQO4QHegXIg7Ww9sy7ZEUJ0PHU1cYaskD7POymCZi3uaI07vmQw99e9OF%2FSXFRtt7obD8tu58Uj0luWPX8tdFcW8suAx3FZSgbT4CI4rgWxb0ds4tMqAndhojCziq5UEvOClV3skyErUEc4PHmuRBDSAxcj1Linez0D8NNCmhblQgvfZ8PfWeubyY8URmfy1TTPy7wEG0zVyueCh&X-Amz-Signature=cbe590ff3baff835f2668ab879854e3debb1fdbc41af5d05bc39fb7875032608&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNUQ5Q7G%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ZYPwDX1RfRyskmCiMz99I6oGP6fCqPVkl480d74pdwIhAKfL0s8fp0exwBfk6qcWTYxjjQMpza9zYCxv3rpcmv0LKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydLxVCPyzqNxXA4K0q3AN3bFL2VvFYhbhDkDK3GOKLX2IBcPE820OqQfFGsatBW9jWDM%2BMtt1ai5ssP0lW5n2XEtNkHsuVppXWBHaF0QmGQw%2FcW1MtlcOWfBH0GDs98kZiWu%2FSvWP3wxbCTD42azpHi02KFW5%2BFnlU7TdY%2F9NTC3LLSaCZe0IamwjfNGMobDvwdnRnDBxQbD4rWWN0bzcivoWMIwZbSU8uMHx54ab2LLDzwnD%2BfpjHQDJ%2F1%2B2PZIqtpeaeLjo%2FEgx52K2wKDBOa58ptBXfaH7WoHHHikUp4CE46lGqcEdR2il3BQhX57iwngrowYvEyUicVFHJvRcozqUxSKvLDgoDpz%2B1PPotyynOIzHJleLdAkzPCTd9oJRa4AtxwQNFIGBZrrSi1fpTzY4UyXwLLwsSVNNbUhdNWZNwm89n4iTeegvUmCcV1Db%2BY0qcZIZAyFVJVT3sVW%2Bob3LlPUj847qKNISqJcEfXIzM9tZEEJ2GXac4QCX5bnNb4JptMiw%2BBQ3CgMPpdVtv%2FQe4HFqY1qWt08ywq2l8JDWuAnDcX2SHY0Lzlna27i6u75y045Hd3xTvnOsdSGhB7Q0m7KTcwJowE6W19M2seQuzPB6vfROvruib7An5elaprzj6QBW%2BIudBqzCx%2Ftq9BjqkAfH9GCJkoR%2Fm4lROU0mpQefk5YAMXwxAeXnlSrOu2pvgMhrm%2FQLgjg19Kq484OogEFpEENKt4LfwNQd2Zjpo3uteMsLGBagWLjzyysWCNFcGjnreOkDBy8hZ6JjIkOtErE9T0qq2Z1d0WUsq1xpkpqqy5%2BpcBZmPSoVzRecQ0zOwSN3ZxQ3iKAhSbbZseSHd1x2J%2BbMMoScKV%2B0LLWZYSbi9tlmR&X-Amz-Signature=64bf830d561d2ea442ffbdb448602ecf2768bd8b1e7af481788eca6750c142e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
