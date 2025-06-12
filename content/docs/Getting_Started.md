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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVKAKF6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD98aWrSBZYqE6qCxavljAIg0mvvIlHd%2BxJiFavI2G0YQIhAP2UINPg4pChX0WCVeEaUPHSqK2vgJhFiPz56HtTd2UKKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyhT5yOrmuumFmp8gq3AOzsMuWTkirzXjhv4Wb%2Fij9jKFYy%2BaNXRHV19UXtih96k1Azvdi0JqgbmCZwddDtGXSQpmt4IyvYaKWVQT74Zl0zDD7DAIsn1d106yJv9tGZpJYvMfJnM5GyRRKZ1I19k63hof20JvB%2B2xZV2TW2GcTPT0ZF0%2BEdlimxJeUls4gabfCVN256Jt5GAMyzE4kCjYAQIWYQADhkS2nMLzePTUJr0BCWjaF6PrkZep0GNZo0glIT%2FPIEad0Yh6fd6Mp2PJq9e2F%2FqOkWvWcLzdG1S0Mh0BN5wAGk0mcvvxrSECA6yEFxHUGiV2qxMxL5XcGnOLU9sT6OPNkgDlDjhJfZmzYesBXqgOv2WSnuDndPB27ycofYFnZNbTMBYbx0OOZhQmrr8odv661oFT7She5qFkq%2Fb2LxeblvW7GoqN14qi6S%2BeuVhRh5wTq6K4hzPIXVokLuDlSXtJnRTuO0KNpBM9VCSTW9GOn%2Fubvv2%2B9UPmXRDVF93t2Ie4pcn6d1QPk47umsMyhUrZooPYgYA4tkQeVJlM73QGRqLE7mgus46QvPcQS%2FNR%2BGKqkdl%2B8bBe8ncvQicGit%2Bu7huzSugX4%2Bwa%2FTMQVRT7V5P0jdBKpMX3oTufRr26%2FQBk1RR%2FBhDCjlqnCBjqkAbkffSK7gkaKxcITy8ha%2FmTuZRYqr9WnWfe3%2BBQX68ogbG4PgHcK4xd9tAq%2FrxvOwBdQHvAg5maAHv6R7mGzvlx%2BIWEaRy70KefehtiWdfQTXWWhNabvCT0ognfzCRpkNzQqgwMcEcqvZ2zG1f9jlNeJIPc194ObpzE55VYqUvbbNo8lR2PDJ%2FraH0DC0jeXYgDHG1xjg6HrCuJW3GKVD94hr1dl&X-Amz-Signature=304ebbfc09efa7c158825b7b4f35082fc2411d2a3b7e1a80b86204e3abe1dc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVKAKF6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD98aWrSBZYqE6qCxavljAIg0mvvIlHd%2BxJiFavI2G0YQIhAP2UINPg4pChX0WCVeEaUPHSqK2vgJhFiPz56HtTd2UKKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyhT5yOrmuumFmp8gq3AOzsMuWTkirzXjhv4Wb%2Fij9jKFYy%2BaNXRHV19UXtih96k1Azvdi0JqgbmCZwddDtGXSQpmt4IyvYaKWVQT74Zl0zDD7DAIsn1d106yJv9tGZpJYvMfJnM5GyRRKZ1I19k63hof20JvB%2B2xZV2TW2GcTPT0ZF0%2BEdlimxJeUls4gabfCVN256Jt5GAMyzE4kCjYAQIWYQADhkS2nMLzePTUJr0BCWjaF6PrkZep0GNZo0glIT%2FPIEad0Yh6fd6Mp2PJq9e2F%2FqOkWvWcLzdG1S0Mh0BN5wAGk0mcvvxrSECA6yEFxHUGiV2qxMxL5XcGnOLU9sT6OPNkgDlDjhJfZmzYesBXqgOv2WSnuDndPB27ycofYFnZNbTMBYbx0OOZhQmrr8odv661oFT7She5qFkq%2Fb2LxeblvW7GoqN14qi6S%2BeuVhRh5wTq6K4hzPIXVokLuDlSXtJnRTuO0KNpBM9VCSTW9GOn%2Fubvv2%2B9UPmXRDVF93t2Ie4pcn6d1QPk47umsMyhUrZooPYgYA4tkQeVJlM73QGRqLE7mgus46QvPcQS%2FNR%2BGKqkdl%2B8bBe8ncvQicGit%2Bu7huzSugX4%2Bwa%2FTMQVRT7V5P0jdBKpMX3oTufRr26%2FQBk1RR%2FBhDCjlqnCBjqkAbkffSK7gkaKxcITy8ha%2FmTuZRYqr9WnWfe3%2BBQX68ogbG4PgHcK4xd9tAq%2FrxvOwBdQHvAg5maAHv6R7mGzvlx%2BIWEaRy70KefehtiWdfQTXWWhNabvCT0ognfzCRpkNzQqgwMcEcqvZ2zG1f9jlNeJIPc194ObpzE55VYqUvbbNo8lR2PDJ%2FraH0DC0jeXYgDHG1xjg6HrCuJW3GKVD94hr1dl&X-Amz-Signature=898d5f2d9c528eb3414afc621a5308778e5f1f601c401ef454e5ae5c6c3f54b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVKAKF6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD98aWrSBZYqE6qCxavljAIg0mvvIlHd%2BxJiFavI2G0YQIhAP2UINPg4pChX0WCVeEaUPHSqK2vgJhFiPz56HtTd2UKKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyhT5yOrmuumFmp8gq3AOzsMuWTkirzXjhv4Wb%2Fij9jKFYy%2BaNXRHV19UXtih96k1Azvdi0JqgbmCZwddDtGXSQpmt4IyvYaKWVQT74Zl0zDD7DAIsn1d106yJv9tGZpJYvMfJnM5GyRRKZ1I19k63hof20JvB%2B2xZV2TW2GcTPT0ZF0%2BEdlimxJeUls4gabfCVN256Jt5GAMyzE4kCjYAQIWYQADhkS2nMLzePTUJr0BCWjaF6PrkZep0GNZo0glIT%2FPIEad0Yh6fd6Mp2PJq9e2F%2FqOkWvWcLzdG1S0Mh0BN5wAGk0mcvvxrSECA6yEFxHUGiV2qxMxL5XcGnOLU9sT6OPNkgDlDjhJfZmzYesBXqgOv2WSnuDndPB27ycofYFnZNbTMBYbx0OOZhQmrr8odv661oFT7She5qFkq%2Fb2LxeblvW7GoqN14qi6S%2BeuVhRh5wTq6K4hzPIXVokLuDlSXtJnRTuO0KNpBM9VCSTW9GOn%2Fubvv2%2B9UPmXRDVF93t2Ie4pcn6d1QPk47umsMyhUrZooPYgYA4tkQeVJlM73QGRqLE7mgus46QvPcQS%2FNR%2BGKqkdl%2B8bBe8ncvQicGit%2Bu7huzSugX4%2Bwa%2FTMQVRT7V5P0jdBKpMX3oTufRr26%2FQBk1RR%2FBhDCjlqnCBjqkAbkffSK7gkaKxcITy8ha%2FmTuZRYqr9WnWfe3%2BBQX68ogbG4PgHcK4xd9tAq%2FrxvOwBdQHvAg5maAHv6R7mGzvlx%2BIWEaRy70KefehtiWdfQTXWWhNabvCT0ognfzCRpkNzQqgwMcEcqvZ2zG1f9jlNeJIPc194ObpzE55VYqUvbbNo8lR2PDJ%2FraH0DC0jeXYgDHG1xjg6HrCuJW3GKVD94hr1dl&X-Amz-Signature=d16b8a49ac4838d4ecafcc7693c8c6e5a644c186e692c7d067229677156f969e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2XG3DSW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCGQm7Vkp5za046gmQ9rK0R%2B9WasD4ynTBieCQfk4uaFQIgXGMrI%2BzWavuKN5VN3n7ZTyGsoTfWIYDOkUXlikDj4RMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvzQ%2F6Kb%2BpOOWWagyrcAztXeBDXeLjeRLrB2wi0sr9aO7Hvv%2BM4yNwi3ulVUi2AjE8AQ2%2BFIEQlMSQ8ckEWv8jk7H1Y%2FN5ZmiyMBvc%2BksSmVI5b%2FBOeTL6NpWyE%2F2EYE6mbe%2F2mWQqvRddbPCzBYBZuxjkuwhMjBVvDUkxXH91lS9Dl2ZGZ5rqbFYXBa5YhoEXtoufSC97%2BrBOARld%2FyHbu6TVKa1saeI1LHjkozLYNmiaRzXkrOG3EKnJ9bDmzCZoY2xe8AKrtrahHRGmhTjvgibdZKlLorNVT8jYRb5CcGKlCNMdpOBNADJO%2BtMgX58rCjEYncBgvfja4gGYWCNXEW7KRf82P5Sd10hJeB5TELteoJwInlCkkH6rj2fejK6PuidWW3HiUN6uKcsYlE%2FaXWjQlAIGmiUoLJgavEzfkyFWAN4Hito9xTPIU6TFQjYRGuby%2BgdBGzHlj5LhuFPweDbiHJG9sKwlFDi33umgYr53lqq82%2FOHuVeeVmHKVT%2BtxTCqn5XeISZFNdMlNOCqImYcqZPu6nr7vU0k1leexcgLaSwyQipW3v0hNwoQgKL7LDLKEgia8tG8X%2BCusef1SuH6kZusZnrqc2tHFNRS9jie4BTT00pnGaE8LBcVB5033behQXBiYujp3MIyXqcIGOqUBVy17XpBxQpXG7SOqJcKBPInvVxNlYC0xKjAclT94GnXy1wXd9085oJRde1rOOXcm6Ov8naJuADeEwmFgQ20%2FDICn7oZ7jXrWqjI8EBRfx1UoGOhsFzZxJ90ru0xIYFV9GpAvjwG%2BbNlxuOEDRTsW0iYrNrBgeCiGbBRL5i3fY814S7ovRGXIE8flDx7%2Fh9qMQ7gZytY0nIGmpBIlp0hKekCTRftS&X-Amz-Signature=a6e4d9b997e5f461eb285a720965ca181c79adfa16c57f02b56751a128f89641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7IRFBU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDjDOI5YemktCyCdCj3GZvEBxUu3qRDPu28fKY0H2%2B2RgIhAN0VtBw%2Flus8OBf13M0AHP5VxbS93nmUDG8RwtJ0gLQ4KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4kNS91wL%2BQUKeogoq3AOvaPIuYqBKJRrb5iy0welFupmFvh3419i4hLkLAK8rgMQEmeo%2FVn0Ny7X%2FMFTjK2W%2BmyiPxZwfOPUTOzNecPNEPPxWRgc8w%2Be3896AvFup23dHhUy3fBlsE3hklC4A%2FLV2YQ%2F6pgG7%2BrOZoGUISGMNsSen9O73ivpfBnJe%2Be5jL6KvSLlg1PIESDM8Jea6JOMceakwQltQnGAmbcev2Dpt%2B5MRyKbTLW4gU8AXi3RITCnlBBazf2TdbV3OKWeTmxU4WL6CXfywhj2JZ%2FbuAqcKKOvf7a6pMdpX8ibOAt1P5Y5fYmC4bD9Fm5TQv13ABtQEEY6dmAbj43CorRx3i%2BpV8XqPh9%2FaVcRqOSCuqSd16knsM7LuXyiBlwPBLicvqai1LVSoXeQhDbTZrK5TXUUrgych87xUhadSQlxvGEF67fKzJXC4IwIcCqdiev3U1uHzqvDdzs5xhePEpk%2BUmweUtec%2FjWhMnnU%2Fw68a78k0HBBi2AwhPlhR8f5azd2lu66vqBkzNsnV8DCJ2obFkhwqT%2Fm3JDAFcrKKF%2FgmjR1GXUER6NPqpNYYTg%2FsbM5sjcGS%2Bf4%2FShNN6T0wVnqUBcALVlfmGOZwTXvcwwdzfsaRrDYqNImokrqPOVlyyjDck6nCBjqkARJe1gIGelDCxCcI4uIonMYhJKNxe2ZO5ZJTLeXJdKz%2BbS1Av09pScbnDtfWcC77hoWoMhstBiYqbUxhAQkyBvUzI8ZQTRbKeUqZXlXKKyuDi6vXBCuIsFXQfoVqW4QN%2FhVvpl7LZZ%2FVnjJneGfLMCR3PeIt7ZJLDrmqDDxvXpUjtRfIVs%2B6EI85LsP%2BcvxqzwaccQA6w8NzJochvVdF7rk9nBTW&X-Amz-Signature=e099383dbd8df07b49fba4c684b1626eb04c6cedc0408e7000ffb1ea1f743052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVKAKF6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD98aWrSBZYqE6qCxavljAIg0mvvIlHd%2BxJiFavI2G0YQIhAP2UINPg4pChX0WCVeEaUPHSqK2vgJhFiPz56HtTd2UKKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyhT5yOrmuumFmp8gq3AOzsMuWTkirzXjhv4Wb%2Fij9jKFYy%2BaNXRHV19UXtih96k1Azvdi0JqgbmCZwddDtGXSQpmt4IyvYaKWVQT74Zl0zDD7DAIsn1d106yJv9tGZpJYvMfJnM5GyRRKZ1I19k63hof20JvB%2B2xZV2TW2GcTPT0ZF0%2BEdlimxJeUls4gabfCVN256Jt5GAMyzE4kCjYAQIWYQADhkS2nMLzePTUJr0BCWjaF6PrkZep0GNZo0glIT%2FPIEad0Yh6fd6Mp2PJq9e2F%2FqOkWvWcLzdG1S0Mh0BN5wAGk0mcvvxrSECA6yEFxHUGiV2qxMxL5XcGnOLU9sT6OPNkgDlDjhJfZmzYesBXqgOv2WSnuDndPB27ycofYFnZNbTMBYbx0OOZhQmrr8odv661oFT7She5qFkq%2Fb2LxeblvW7GoqN14qi6S%2BeuVhRh5wTq6K4hzPIXVokLuDlSXtJnRTuO0KNpBM9VCSTW9GOn%2Fubvv2%2B9UPmXRDVF93t2Ie4pcn6d1QPk47umsMyhUrZooPYgYA4tkQeVJlM73QGRqLE7mgus46QvPcQS%2FNR%2BGKqkdl%2B8bBe8ncvQicGit%2Bu7huzSugX4%2Bwa%2FTMQVRT7V5P0jdBKpMX3oTufRr26%2FQBk1RR%2FBhDCjlqnCBjqkAbkffSK7gkaKxcITy8ha%2FmTuZRYqr9WnWfe3%2BBQX68ogbG4PgHcK4xd9tAq%2FrxvOwBdQHvAg5maAHv6R7mGzvlx%2BIWEaRy70KefehtiWdfQTXWWhNabvCT0ognfzCRpkNzQqgwMcEcqvZ2zG1f9jlNeJIPc194ObpzE55VYqUvbbNo8lR2PDJ%2FraH0DC0jeXYgDHG1xjg6HrCuJW3GKVD94hr1dl&X-Amz-Signature=024015b05b1b265ed22e2dc71e01e4039f7cf0a4aff03b69c15459a3b42b06c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
