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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZKYVPG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDfUCt6bAd99%2B%2F5NmLkkvDZ8DMS%2Bxl8sK7VNv2gopeSMQIhAOfN5pnzLbLV6TjSTT%2BnpuCuH00jltXHR4xAYEC77cOiKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfBexsYw%2F0K4U%2B0SMq3AOaJln9efc972d2mpwYwWV9Yil9fuiB1fjOvUbPwPOvPNaT5QUIrDQdEKC0bbda8kV4T%2BBNl3DyddN9aHP2mVzaQp9MNXo5ty4mVjqJXaC1BvX%2Bw2auP%2FNFMg7RfQDUkVV1wNeqIVuhBJO70cdNNACkWekFJ6iGBtEO1p%2BUih94AKpd7dxNoTuROc6nWewK7Jd9grnvMhByjz4TZEIynL3RdkvBBJlWR9OSpqV8kqNmspkaxRQN1mBluflIt1GkR0rNT5ltcn8GlXCRGGRKGEbIJnxpUJbn8lkzIjph%2FZ27hkGouhfQceRTzVNABoZE%2F8Rqk%2FjWqCdTrj0KjQqZ%2BuhqpBRT9ZntnPTgdp%2FufNfJyGxeab%2Bom%2FpdijJ35feoYJnT1hxdShJawGo5IcnqURPf%2FJvU5umR2JkktCskyS7LG5DmU8AJvxrJRZg47IVPCj0DSiLgq3nruERyCQLukPUuxRA3iODHnFq9Ilodq8tvzkMd8DVC0dfQP0MAuSe%2B0oZ2osp8qigA9622PCE8rAibkpZl%2B1uj8EhZVViC4tYMCh81pK8Ml57Y9B5%2Bh1QN%2Bbsv6z6R2GkqMxApc1ZnZ%2FlE7NuN%2BvqgUQfLbHwDlgNp4X3RPFnPN%2B66m1WdbDC%2Bx42%2BBjqkAczIgRuxdFjpsfbHga6DI5JTxki6Zrh0BeAaZS4HhL3fDupXGPzfYT2k5v%2FvrvQrfeaxMaIcDQ2lOkPHkkgOpLjSJ2%2FwbZDErx56gEnnYgt9LMXJxnqz3Yk44YF4UP0cibHQS2O7jvqBORlVAH3De1FUJnJeeOFCrNghiXf7n7Vf8rHvtR8Lu5C3VwGYzE%2FUFy3nCFrphro%2B68e36sGEjyHzf%2FcR&X-Amz-Signature=2bc0364828020c23165e27104d824411c77ca79bfd53f0aca06e83d07bc72576&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZKYVPG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDfUCt6bAd99%2B%2F5NmLkkvDZ8DMS%2Bxl8sK7VNv2gopeSMQIhAOfN5pnzLbLV6TjSTT%2BnpuCuH00jltXHR4xAYEC77cOiKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfBexsYw%2F0K4U%2B0SMq3AOaJln9efc972d2mpwYwWV9Yil9fuiB1fjOvUbPwPOvPNaT5QUIrDQdEKC0bbda8kV4T%2BBNl3DyddN9aHP2mVzaQp9MNXo5ty4mVjqJXaC1BvX%2Bw2auP%2FNFMg7RfQDUkVV1wNeqIVuhBJO70cdNNACkWekFJ6iGBtEO1p%2BUih94AKpd7dxNoTuROc6nWewK7Jd9grnvMhByjz4TZEIynL3RdkvBBJlWR9OSpqV8kqNmspkaxRQN1mBluflIt1GkR0rNT5ltcn8GlXCRGGRKGEbIJnxpUJbn8lkzIjph%2FZ27hkGouhfQceRTzVNABoZE%2F8Rqk%2FjWqCdTrj0KjQqZ%2BuhqpBRT9ZntnPTgdp%2FufNfJyGxeab%2Bom%2FpdijJ35feoYJnT1hxdShJawGo5IcnqURPf%2FJvU5umR2JkktCskyS7LG5DmU8AJvxrJRZg47IVPCj0DSiLgq3nruERyCQLukPUuxRA3iODHnFq9Ilodq8tvzkMd8DVC0dfQP0MAuSe%2B0oZ2osp8qigA9622PCE8rAibkpZl%2B1uj8EhZVViC4tYMCh81pK8Ml57Y9B5%2Bh1QN%2Bbsv6z6R2GkqMxApc1ZnZ%2FlE7NuN%2BvqgUQfLbHwDlgNp4X3RPFnPN%2B66m1WdbDC%2Bx42%2BBjqkAczIgRuxdFjpsfbHga6DI5JTxki6Zrh0BeAaZS4HhL3fDupXGPzfYT2k5v%2FvrvQrfeaxMaIcDQ2lOkPHkkgOpLjSJ2%2FwbZDErx56gEnnYgt9LMXJxnqz3Yk44YF4UP0cibHQS2O7jvqBORlVAH3De1FUJnJeeOFCrNghiXf7n7Vf8rHvtR8Lu5C3VwGYzE%2FUFy3nCFrphro%2B68e36sGEjyHzf%2FcR&X-Amz-Signature=ab5de534d0bbb6ccd84da8237430b57ce5f94aa3e0b8295ac9549f9ec7342b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYCXEFM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB7gp1THQ0mOZ21OSnBfYrvxjgESj2t3B0LhiQEBF3ZjAiEAh6WZn9KyE9ppsoT7n%2BC7OjmpklKDy60BpRu6z8cAiT0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrfmtRLrnB3CwGZ1CrcAxVEIcELjtfipCQaOcW9P01x8%2FHuZcyCBZNB3kQr2pf7CYNhnX7hO75jZits0cG7EyeBtAe%2BEIWuy106KBEYIKl8ZuivTQ5qW7hmQ8qKj38nNmVKCsACqp4jX9djSx02xVHZV%2Fmu7UgwKJEZNn3io%2BQeXHdWGhJxsdhVL5NpNXR%2Ber2e%2Bk93QsQ%2BaM6xdie0GU%2FKnK7TJ6brzuD4drpgjZl4niS5Xh18wgnkM2i%2B1cFSzWWc7SPN2HtAbL8A2tZPYDCqUlWvKI3%2BhYhe71owX4SheAx3Cq92Jlyex5uryol4dGj%2FIPthe7%2BmNhlEUvWK25We4iGBTtH2Dvwy%2FPoTAsuSbw3MFs7V0%2BmEds2N2UJfmX%2FptMYwbbxj93xO%2BJ9kYmMSb9giPwzOCRoibI5%2F2mt1eHL5DGT03g59I4MWwVAmpXBxJe3wewbpBWJssGVXnTlTnI753LLIvHWarRURXeP8AvnE%2FPBYhPpYRfFjhNZFdFmS26bECjvEKYJ%2B2jsyvCJadYIC461PkCQOppMubnclt2m398yPW%2BZOelkFwMxFrVNDW6Nj7XUt%2FaTvNRloe2br%2BY4KupSbYyXPzYLgixNyjhbTvgVOYRnJQmgQqG260YdQ8fiE1jlpaVMiMIrHjb4GOqUBSNwRXZ8CRXkvTE6BmCjX2dKwAm77EMlImmxyMljBeO6BE5798iESRczVBDDcrxbJF%2FqZrcVFms43OIlY57YcI77f2h91G2AEBP7KR9WDkp9Jd8xC0XWpC811aPyq%2FTBIcjz2h9sL2EiJqEPkjW3S8Eaznmmf%2FAQTsRNZZf0m6oVFmITlE39HuLRf2LvieJ7fNVteuZrLFEwYT8e1QWeA6GoK8MV%2F&X-Amz-Signature=4793bfe4811d3eac36c09555517d9ffaba81de6894ae4ec22cc2b2b71597511b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQKS5QVE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC26%2BStrkmNeEW942vH6a8j53r4syErsCFFzivS3J9qJgIhANz%2F8meZYvbKKsY7%2F%2FREExmqWIszxtiGbMtsYAmkJydfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPpJCadvAxlmRs%2BxYq3ANtdgx4BdGHaedulffWVlRuS%2FCJ%2Bwkei4ibHxebEFr6RTySwNliUedI4UZ%2BUB6hDACKWa%2BQwtEEG21437ozTpcmTopfV40MRnQIJ%2FnC5RLSNnJ9DUTro9vv8Twod2RbfyzmBnOlWCeGki8yE5UMgiIeuQyKlFHB%2BDJM4TNXyHJH1xRr3o4vOrU%2B2DM00oB1B%2FeZjwAqkFg3q2pULJ%2FhWmDeskcJSx6n8s0HBYAmXBuGNLpCwfLJWahkJ58r1CbSEJ4gxVmhpNuUyn4HFRoRjLxJfU0SUFrqi4UgaBgZosUPJyj9FsNpqbab28vheDj92ID9V5SwZHw1HoH8z0f7UeTTewh639dQUv%2B%2BN4gzPoftfrxB5L90h9gzam63zOEU5AsLbf324uJHl3GFZFfOcsU1wMzB1fcfOdNVWlh%2FltzphdcfFFHkcULGFOyLbB5Ml97zV4njM8U7J4tbJhvZuqahXS4SeJZvy2nCIxChL20c5ePm%2BAqRD4NKdYvlUuASBCoUjQmalTYEJeSemRL9XAnC1AefZy55kMMGtoF2Q9yg5u%2BWiToLq4BUzf9dUexDlXdW%2BXsP7vfcy3lZ6KSymS5TcbDYyoy6Rpxsq%2FNe0zJxxhO3GZo7Of7wv3GBqzCox42%2BBjqkAfjKnY8dcY3b1h5I%2BdLvoCaLvLLoKc8xNoj3WErAwYYOXcTk%2BrdONeBao8zJ7YOgbbPwqNnoaRP859IMk6QKtIPZK9cJyrFToRRk1qmSguuGu2FOia4HVdeOCzwI6eJhe%2FUib2%2BjySW2NClIV4AcIPEFhCND27SyHcS4lWXllty9iVwzC5D6JRkZG%2F7FRUCc0URKcD7Q22aqhemXOHzixytjxiv%2F&X-Amz-Signature=4ebbf31c7b4149ef0d1b180f7c6f042cdb0f0b487c36836acc1fc2ff9a00af36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZKYVPG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDfUCt6bAd99%2B%2F5NmLkkvDZ8DMS%2Bxl8sK7VNv2gopeSMQIhAOfN5pnzLbLV6TjSTT%2BnpuCuH00jltXHR4xAYEC77cOiKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfBexsYw%2F0K4U%2B0SMq3AOaJln9efc972d2mpwYwWV9Yil9fuiB1fjOvUbPwPOvPNaT5QUIrDQdEKC0bbda8kV4T%2BBNl3DyddN9aHP2mVzaQp9MNXo5ty4mVjqJXaC1BvX%2Bw2auP%2FNFMg7RfQDUkVV1wNeqIVuhBJO70cdNNACkWekFJ6iGBtEO1p%2BUih94AKpd7dxNoTuROc6nWewK7Jd9grnvMhByjz4TZEIynL3RdkvBBJlWR9OSpqV8kqNmspkaxRQN1mBluflIt1GkR0rNT5ltcn8GlXCRGGRKGEbIJnxpUJbn8lkzIjph%2FZ27hkGouhfQceRTzVNABoZE%2F8Rqk%2FjWqCdTrj0KjQqZ%2BuhqpBRT9ZntnPTgdp%2FufNfJyGxeab%2Bom%2FpdijJ35feoYJnT1hxdShJawGo5IcnqURPf%2FJvU5umR2JkktCskyS7LG5DmU8AJvxrJRZg47IVPCj0DSiLgq3nruERyCQLukPUuxRA3iODHnFq9Ilodq8tvzkMd8DVC0dfQP0MAuSe%2B0oZ2osp8qigA9622PCE8rAibkpZl%2B1uj8EhZVViC4tYMCh81pK8Ml57Y9B5%2Bh1QN%2Bbsv6z6R2GkqMxApc1ZnZ%2FlE7NuN%2BvqgUQfLbHwDlgNp4X3RPFnPN%2B66m1WdbDC%2Bx42%2BBjqkAczIgRuxdFjpsfbHga6DI5JTxki6Zrh0BeAaZS4HhL3fDupXGPzfYT2k5v%2FvrvQrfeaxMaIcDQ2lOkPHkkgOpLjSJ2%2FwbZDErx56gEnnYgt9LMXJxnqz3Yk44YF4UP0cibHQS2O7jvqBORlVAH3De1FUJnJeeOFCrNghiXf7n7Vf8rHvtR8Lu5C3VwGYzE%2FUFy3nCFrphro%2B68e36sGEjyHzf%2FcR&X-Amz-Signature=03826d4cf050a8a7ef88ff71a1d438decd31690d835843b4a870610e80833f25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
