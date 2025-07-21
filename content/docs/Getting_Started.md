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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSYNJGF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLxIxYRn3MtUce6mwavw59PAkD0i6h2OkjfqNhrXhbkAiEA98g%2FEDqubVbCDS9HgLi7KLQws6D9ROdU5vTUoMKYllEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbSBw3ifsjZdMmd2ircAy4UdpQW%2FolcV9xGnxvHEya0d5V3NaFfvODtwZBGAt%2FHv8C1aiYKvnJ4o1xIZ9brq49Tr7cp6OQM5vVaD3oOdcuBZoxisE9rJvuqA7aaqS5ZOA3EsXjLvuYEO9vaiWlUZPCJZB1mh8qRW1u%2FjwrRpt1QcdC1Obj0xpyr4GXMKUlzp1L%2BI3PSWZUb416DXJbEohGuHdIxu8gEdiFXQpUosZc1FJR2rKABH7vQdRaKEQM32wD5lkYBbPs6dQDHXACcskdzAhmXUJ7DnEXju78Bmbsu1s4nqkVRpA3rRJrJiScM1%2F87fGIu%2F5iT%2BUVMcTEZj%2FYXPHhbaTvUPyjXjmSjA8e4S9zfKDkNZL67cUV%2Fgz27HuVLs88JIIgJZ9%2FhfQJdH3Kx2%2FAqSb2DBRWzMP0QveYFvnyBFzWjq5e9bNokNmISKMzZO42XSWvaCBXs9tWoDDjsV8kNAp9s3soyJHrBvWWlutYjJcia%2BsnurrLoMQRe1pV1KUHfSJ%2FsxNi9iBjt4zPfzEjvJfWOWkj2TpcfSRSdYUafONo%2FP7EaOKp3CZtUisN7lSEiP9iUtZjg3F%2FKz9GcEDUSR9QqP%2FIOd%2FfhfKsbQ0UAwsbCfDnnVkjoQncR91VOCKt7Y09wu3%2BAMLWT98MGOqUBRjrNRYwmCoJ%2Bi1IqaMYZc%2BemNZFv0edjNm0qbErX%2B9xY8vhIv7v2mUfHAhqooHQSUPKrCG7R9FBiFh%2Fw15Jolaz%2FbXTO1BPxKMOryc%2F2sS5ZP0LjnfhNQY8BSXTnnQcD%2BVjKHY30Fs5Cryn3cTX9ZrhAcutnCCBAYZU3JWEVr8wQ0U3vSC8Hdg%2FEFTfkmBj0QV5x0wIxLAFHI99ZjAXBSYeVAoKo&X-Amz-Signature=479b5ca774b59f8c7cd71de429ae0ffa776183196b46caf0de4bd3a733baee4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSYNJGF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLxIxYRn3MtUce6mwavw59PAkD0i6h2OkjfqNhrXhbkAiEA98g%2FEDqubVbCDS9HgLi7KLQws6D9ROdU5vTUoMKYllEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbSBw3ifsjZdMmd2ircAy4UdpQW%2FolcV9xGnxvHEya0d5V3NaFfvODtwZBGAt%2FHv8C1aiYKvnJ4o1xIZ9brq49Tr7cp6OQM5vVaD3oOdcuBZoxisE9rJvuqA7aaqS5ZOA3EsXjLvuYEO9vaiWlUZPCJZB1mh8qRW1u%2FjwrRpt1QcdC1Obj0xpyr4GXMKUlzp1L%2BI3PSWZUb416DXJbEohGuHdIxu8gEdiFXQpUosZc1FJR2rKABH7vQdRaKEQM32wD5lkYBbPs6dQDHXACcskdzAhmXUJ7DnEXju78Bmbsu1s4nqkVRpA3rRJrJiScM1%2F87fGIu%2F5iT%2BUVMcTEZj%2FYXPHhbaTvUPyjXjmSjA8e4S9zfKDkNZL67cUV%2Fgz27HuVLs88JIIgJZ9%2FhfQJdH3Kx2%2FAqSb2DBRWzMP0QveYFvnyBFzWjq5e9bNokNmISKMzZO42XSWvaCBXs9tWoDDjsV8kNAp9s3soyJHrBvWWlutYjJcia%2BsnurrLoMQRe1pV1KUHfSJ%2FsxNi9iBjt4zPfzEjvJfWOWkj2TpcfSRSdYUafONo%2FP7EaOKp3CZtUisN7lSEiP9iUtZjg3F%2FKz9GcEDUSR9QqP%2FIOd%2FfhfKsbQ0UAwsbCfDnnVkjoQncR91VOCKt7Y09wu3%2BAMLWT98MGOqUBRjrNRYwmCoJ%2Bi1IqaMYZc%2BemNZFv0edjNm0qbErX%2B9xY8vhIv7v2mUfHAhqooHQSUPKrCG7R9FBiFh%2Fw15Jolaz%2FbXTO1BPxKMOryc%2F2sS5ZP0LjnfhNQY8BSXTnnQcD%2BVjKHY30Fs5Cryn3cTX9ZrhAcutnCCBAYZU3JWEVr8wQ0U3vSC8Hdg%2FEFTfkmBj0QV5x0wIxLAFHI99ZjAXBSYeVAoKo&X-Amz-Signature=5c7dfa2fd07f627e86957efd71ce3bd13681309d7867bf07ec66821d6b1e1b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSYNJGF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLxIxYRn3MtUce6mwavw59PAkD0i6h2OkjfqNhrXhbkAiEA98g%2FEDqubVbCDS9HgLi7KLQws6D9ROdU5vTUoMKYllEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbSBw3ifsjZdMmd2ircAy4UdpQW%2FolcV9xGnxvHEya0d5V3NaFfvODtwZBGAt%2FHv8C1aiYKvnJ4o1xIZ9brq49Tr7cp6OQM5vVaD3oOdcuBZoxisE9rJvuqA7aaqS5ZOA3EsXjLvuYEO9vaiWlUZPCJZB1mh8qRW1u%2FjwrRpt1QcdC1Obj0xpyr4GXMKUlzp1L%2BI3PSWZUb416DXJbEohGuHdIxu8gEdiFXQpUosZc1FJR2rKABH7vQdRaKEQM32wD5lkYBbPs6dQDHXACcskdzAhmXUJ7DnEXju78Bmbsu1s4nqkVRpA3rRJrJiScM1%2F87fGIu%2F5iT%2BUVMcTEZj%2FYXPHhbaTvUPyjXjmSjA8e4S9zfKDkNZL67cUV%2Fgz27HuVLs88JIIgJZ9%2FhfQJdH3Kx2%2FAqSb2DBRWzMP0QveYFvnyBFzWjq5e9bNokNmISKMzZO42XSWvaCBXs9tWoDDjsV8kNAp9s3soyJHrBvWWlutYjJcia%2BsnurrLoMQRe1pV1KUHfSJ%2FsxNi9iBjt4zPfzEjvJfWOWkj2TpcfSRSdYUafONo%2FP7EaOKp3CZtUisN7lSEiP9iUtZjg3F%2FKz9GcEDUSR9QqP%2FIOd%2FfhfKsbQ0UAwsbCfDnnVkjoQncR91VOCKt7Y09wu3%2BAMLWT98MGOqUBRjrNRYwmCoJ%2Bi1IqaMYZc%2BemNZFv0edjNm0qbErX%2B9xY8vhIv7v2mUfHAhqooHQSUPKrCG7R9FBiFh%2Fw15Jolaz%2FbXTO1BPxKMOryc%2F2sS5ZP0LjnfhNQY8BSXTnnQcD%2BVjKHY30Fs5Cryn3cTX9ZrhAcutnCCBAYZU3JWEVr8wQ0U3vSC8Hdg%2FEFTfkmBj0QV5x0wIxLAFHI99ZjAXBSYeVAoKo&X-Amz-Signature=cc8af885b14c15d67f8bc495c45a5fd255387f40c12ea7f3fae53778ee292de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FPX6JLI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxhQw2Gcyi1zYKB%2BppGz%2FgFGAiZDf%2FbDEUvZybWSyvkAiBtopw7OhvIuQGN3a262Y8mpdOVKg7fZfQ6rV2R3ofsmyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCwjoXmkLjbxebdJaKtwDucHh6m%2F3oYO49EUKA6hWYAmQmsLQ0RdPH%2FUsXnT7UohTo3phcnmpIOc3M2zLyMGWvcZfdGpDV4VFsoM8awoSyQqWvsubvl4tTsKYAX4Np%2BKdJ1f6aG70A25w7fjxMcDCx4XH%2BuWCnlZzppGBCNdKfMutQKApqSgl%2BjPFqZhCkfzMwOnvrM694u9LEdR%2Bgasf7p3GW%2BTLtF06HIpFj%2BnioqZdmmOABf1ly4jR8kSDJyzBJv8c%2FMmHh5vOxPhP%2BBgdHSUx0xDpeWy3BjJFWg35jnZYFhHZtAXyF49q1MQeMq7kFLHrgzAXajq9viSdTkLMXl%2FwrjcQNEykZ2lbMEe9KtomRFkRaSEczBjO%2FIbLIhIPrw1zKFSqkY7Htf2M9nXgFiJsGAVD9eYlEGx2%2FBEiitIOSziBB8i178XnQaNBQQLh2TgulxR60t0XI0D%2F20IYylGG8BdSu30aIh2r8ROuctguJKI%2FN%2FP4ROdh%2Fx2YTVGDNYNRDxccpf6AS3pNubBQT8dTB7bqk1TPDVqpwMUCR8LpOh1VJerseSv9%2BT1US440w8H79tpYFVrKYgp4uHBphwxpswB8o7r6gduO5WucAYThzypp2%2BENCTXyL%2Fnoubln3FEf1tUsnL8LPUAwzpP3wwY6pgHYlIWoX1kGV7J%2FosDtds2zy2pTdtNqZRkzgjRV02IJ%2FxnyOhLic3%2F2rZBDGOs4CBN6%2FjZijvXM7S6KYoumwo5V9iHOFvnLx3m3PBGDg3yl6EMuKfamWY4aIhsWUG2a%2FXJsQ3%2Fxsqoh1xhTicCYLi8jRC2PYQlZlWYYlePsXhdoYBfReiZiZYrReFZicjuZ57cUSzZGiHGPoxkTY8Ky%2Bl4T9dm282tW&X-Amz-Signature=0a4171fe45661cd9b3ce6f46a88f8ef3fab5ef11fafac39c9480cdc701223c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRTM5STC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeMW8eoctlfT2dIOeADauQkEgf0cSTlGCknd%2BmR7EbMAIgBKUlN0TWwjZKhrO%2B5gJhgEHF273FM00EedL60YkkCGwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlHwGsdculjpqkPsSrcA%2BWbbhVRpZIr5FYCVC3dZVudqkvd42doQuwNX%2BBqS9sgxo2fhgwBUeHgYuvpjDJbwSBaHkEIwpYVPDYEdO%2BGGeU3cNEW%2FaUxgvyjzEMm96DT%2BhNeD9%2BwXhlTZJhRiFoDFuOQft%2BkVQpNgXbNeR6D5mLftX8I7E0r%2FRfHgPnTztID0PYzXnFP%2BAPzIwyMjXeZ2bNUkIokxEAk0qAYDDGzE0pQJQtOFz0Yme3dlDII1yxKX1tT1N8%2BJwWs4mLe8ldNlSSuMj1ynJgd7ZNPARchxvjFu0Wgs1zFrVZk%2Br3BB69T8vZnnuttZGq8Clnr%2F%2B2FUmVB69nexW6%2BMqd2qzkmCER6Z3qZePxC4ToZU6ePsGidAvsHVFzoXUFbOywcvct9W5HRkX4DCFYMWk5IPBb%2BaLfdACgZNu4ksvdE1zqvv1AUrRCdmAHsaIIIuKUVBq8qxBcW71V5X801%2BRuCHWq95DRxARGE3DdTOC5Q7gEM3YXWjCERZX7OnfK%2F596jrLJSK7nGAMVyfX6Yo8aFfHNIilAiSdIpW4w1%2FCcybG6RfuYRTY%2BZVoQOr1pL%2BrUOft%2F%2F6C9OPmNC4xKX3D7ufK7guVFdxx9h21aM9U4kxA9uH4UBRysuZ0CEu31i%2FXrWMPCS98MGOqUB3esXOPBFaiiVAVmbBjs70mykaSSTA%2B7e0%2FRh25mN05BhuEw2YasaVF4JGzFzyh42c55pztnv5yZEl9tnjoH2k%2FRJ2cxoPXoiEPQ9tCHcJcIvhGyiCKMFo%2BhFOAjYBqg5XevuNkQsxyQNe%2BEuVz3e8JchoSj2eGP640%2F%2BOr269t8s2j0is6Z1N%2F%2F%2BkSdJqqf5W%2FdqZ2dJ6hFLH6AkVkqSGmDXgste&X-Amz-Signature=21783cd0c4e736ad110303d60383247310a10ca4db4b477efa3963f9632f34af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSYNJGF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLxIxYRn3MtUce6mwavw59PAkD0i6h2OkjfqNhrXhbkAiEA98g%2FEDqubVbCDS9HgLi7KLQws6D9ROdU5vTUoMKYllEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbSBw3ifsjZdMmd2ircAy4UdpQW%2FolcV9xGnxvHEya0d5V3NaFfvODtwZBGAt%2FHv8C1aiYKvnJ4o1xIZ9brq49Tr7cp6OQM5vVaD3oOdcuBZoxisE9rJvuqA7aaqS5ZOA3EsXjLvuYEO9vaiWlUZPCJZB1mh8qRW1u%2FjwrRpt1QcdC1Obj0xpyr4GXMKUlzp1L%2BI3PSWZUb416DXJbEohGuHdIxu8gEdiFXQpUosZc1FJR2rKABH7vQdRaKEQM32wD5lkYBbPs6dQDHXACcskdzAhmXUJ7DnEXju78Bmbsu1s4nqkVRpA3rRJrJiScM1%2F87fGIu%2F5iT%2BUVMcTEZj%2FYXPHhbaTvUPyjXjmSjA8e4S9zfKDkNZL67cUV%2Fgz27HuVLs88JIIgJZ9%2FhfQJdH3Kx2%2FAqSb2DBRWzMP0QveYFvnyBFzWjq5e9bNokNmISKMzZO42XSWvaCBXs9tWoDDjsV8kNAp9s3soyJHrBvWWlutYjJcia%2BsnurrLoMQRe1pV1KUHfSJ%2FsxNi9iBjt4zPfzEjvJfWOWkj2TpcfSRSdYUafONo%2FP7EaOKp3CZtUisN7lSEiP9iUtZjg3F%2FKz9GcEDUSR9QqP%2FIOd%2FfhfKsbQ0UAwsbCfDnnVkjoQncR91VOCKt7Y09wu3%2BAMLWT98MGOqUBRjrNRYwmCoJ%2Bi1IqaMYZc%2BemNZFv0edjNm0qbErX%2B9xY8vhIv7v2mUfHAhqooHQSUPKrCG7R9FBiFh%2Fw15Jolaz%2FbXTO1BPxKMOryc%2F2sS5ZP0LjnfhNQY8BSXTnnQcD%2BVjKHY30Fs5Cryn3cTX9ZrhAcutnCCBAYZU3JWEVr8wQ0U3vSC8Hdg%2FEFTfkmBj0QV5x0wIxLAFHI99ZjAXBSYeVAoKo&X-Amz-Signature=5bddd7a9013905eac009cbafa2b4180a03684ae9e86c4f47808af4479ad38f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
