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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHC6R5R%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOyHXIgN%2FDdqyQCulh7NbA6iD1d9jJuCAfiuQk6bgJQIhAKhtAl1mVlQC2FHIPKYZ6xyZ6ggzNKafiruqotou5th9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwhXa%2BXsks6e%2BCUXfYq3AMCJzySldV8253y7lZkIVUJ4Uas29sQimf6AfeokWRhVmlZcRBsflh5iDvveX2nx%2BSb7ps9OL5eWAWnoxyiOJvsAUjRDDuaJtdOExbAgTX6RWBX550AD9lsj8eyGO1xMI0JfMM7zCSq%2B9rW7yk%2BGHcTEc9%2FjmFYJ1alE6J%2Fy%2Bk9Tsv%2BRfT0kKLR8gjXayu44bCKlOkjEDLeplGSblahJ%2FrGJeCL7SjIgL1fOjI0gDHIDxuKeMlo3VRI3l9K7QcED3igi0fKxsVqJZHvIUxp8Sign6nsIPBiu9VUJ%2FqCs7eaGAE6j65qcaU0CkdxoXf%2BPttSlkTKEB6V1%2BSL8BIpx9gIy%2F4567Ry7gZ%2F9kYLOQmRM8MV0C64xV%2Bpnvlqz31S0X2rPUewpKO1QGh0Q%2FYDqeJr%2ByMaL03LCyQ5aOw5zj4PRGhO%2BzpjxC24tcVC2p10PBwvLSwnLjxQPbvkxEvmamzv9KMmYc3PPZYygCkomrQ5aI%2FNBviKFhoy9itHm2201CT4ITpOJIXUUBFw83Ok73gxzT1t05PfRILWDJE97SuR6pdVc%2BRspjN30p3Rt1SJX0Bheid9SDfs4aiV6JRqD%2Ff6%2BEsc%2BEYmhPObtuIkyrIJ5S3lN%2Fr6PpF04CY1zzCErLm9BjqkAd5Df0ZxMsTx8IZH1xY7VL8pW52Ea2r7qcyavU3Q3t%2Bsp0yx%2FN9rXl5tQ4gNBqsaYPh4928YyINfDLhjB1tcpOMv83t3cXmBVL0fYQGx8dHOc4brcxIXKk6HEBh0SSVGbOUuZKSrmItUaOklr%2FMrIoqhW4%2BPjqv2HnNcbYQgZ823mVylQ295EOrcX9bf9b0auanFTZfNnruxBOB%2FJ76M3%2F2kDItS&X-Amz-Signature=fa3bd4e7eea08034badfca121e83df60f2f77c0590feaa6f183a790ee4922547&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHC6R5R%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOyHXIgN%2FDdqyQCulh7NbA6iD1d9jJuCAfiuQk6bgJQIhAKhtAl1mVlQC2FHIPKYZ6xyZ6ggzNKafiruqotou5th9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwhXa%2BXsks6e%2BCUXfYq3AMCJzySldV8253y7lZkIVUJ4Uas29sQimf6AfeokWRhVmlZcRBsflh5iDvveX2nx%2BSb7ps9OL5eWAWnoxyiOJvsAUjRDDuaJtdOExbAgTX6RWBX550AD9lsj8eyGO1xMI0JfMM7zCSq%2B9rW7yk%2BGHcTEc9%2FjmFYJ1alE6J%2Fy%2Bk9Tsv%2BRfT0kKLR8gjXayu44bCKlOkjEDLeplGSblahJ%2FrGJeCL7SjIgL1fOjI0gDHIDxuKeMlo3VRI3l9K7QcED3igi0fKxsVqJZHvIUxp8Sign6nsIPBiu9VUJ%2FqCs7eaGAE6j65qcaU0CkdxoXf%2BPttSlkTKEB6V1%2BSL8BIpx9gIy%2F4567Ry7gZ%2F9kYLOQmRM8MV0C64xV%2Bpnvlqz31S0X2rPUewpKO1QGh0Q%2FYDqeJr%2ByMaL03LCyQ5aOw5zj4PRGhO%2BzpjxC24tcVC2p10PBwvLSwnLjxQPbvkxEvmamzv9KMmYc3PPZYygCkomrQ5aI%2FNBviKFhoy9itHm2201CT4ITpOJIXUUBFw83Ok73gxzT1t05PfRILWDJE97SuR6pdVc%2BRspjN30p3Rt1SJX0Bheid9SDfs4aiV6JRqD%2Ff6%2BEsc%2BEYmhPObtuIkyrIJ5S3lN%2Fr6PpF04CY1zzCErLm9BjqkAd5Df0ZxMsTx8IZH1xY7VL8pW52Ea2r7qcyavU3Q3t%2Bsp0yx%2FN9rXl5tQ4gNBqsaYPh4928YyINfDLhjB1tcpOMv83t3cXmBVL0fYQGx8dHOc4brcxIXKk6HEBh0SSVGbOUuZKSrmItUaOklr%2FMrIoqhW4%2BPjqv2HnNcbYQgZ823mVylQ295EOrcX9bf9b0auanFTZfNnruxBOB%2FJ76M3%2F2kDItS&X-Amz-Signature=02366c382eb05438d087e1d1a14021f4cbfb3fffacc961592abb6d266ed12219&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F2LR737%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk00Gdm%2BLjKob%2Ft6Z11WpTdaXrBlujZ6MU6cJON3oM%2FAIhAKmLxXsgVx6pURxOuHuLGqd8lK0LHPfThgrbsAd4L%2B0zKv8DCB4QABoMNjM3NDIzMTgzODA1IgwqpQOytyR6WBogQZYq3APjx8M50eVYtMU5xuvT1dN%2BVrDd%2BF5Q3LpXw9zuuGTtyMpx1IcG4CuNotjpum7ZMsvoTctjPeivHN99JBGyMNeHsYsIOZJwRKEJflNQNZwShFL7wLN2ZdVbSXVMyLX86i5QI%2FzwxKeV0fxzjFcdFHqwN2Z5DyRtaEWNbO2VRaKq3XU5yTcNsAZ%2BzML1ELWJjw4o0%2Flk%2ByVyc7bb%2Bur5uqpdFK6qmdrzfOXiwqcz24oO5T5hmaW8N4Hu7kV3PrdsrhqWCVJwTyVOA6UpyLV1eALiU%2F3NwtxiqWShrJ2WH%2B1tUyRZjhBHjAi%2Be5vflzqH1wtb%2BTpE1EsHgyuuA%2BU17rNbJ0PWnLPfWtzgExxCCg1aEBURZpYoaa41HPWUhX41hJ5eEe%2BIBZ7%2BWhFlRSlosNEZYVAx2MMhOdGqH%2Bdz14n8evfTKd6A12%2FgToJVJ1emNHILYbmvS%2Bz1Eu7zR44QRe7PS9QUAHPmo%2F5Gx%2BDQVPVpR05dctjH2QLnnD2MxqVf61LY8PbdZAh2PkFGkWhtiUSG6aqqQUfEPZquPOkFBiq%2BGeGrHVLW%2Fhvp8yneiPRsV02PgHFc5qxamTt6qRLSXz7pM6es0xh7K1dfN3fORvCFsFJQNdj5HyPJ45NlrjD4rLm9BjqkATYniSvL%2BUL27dttrJokRYodyBxKNHuDJh4m4VotgOpfdarnGiz%2BlMPM6miF9cJ0IgfW1KKhWnENQcUCiXlqinVN5xNFEF53ciUvIt8punkiPEp7pPHYR2bAxgSuQvain0d6CIx56o28cTbi%2FkjJk2cXdVrYPSrJc8FOCC%2BwMZ%2F6NZdFsevfwo2Z6Vya3BAVdt4K7PGZzham0il6GsxLg9CEIKOp&X-Amz-Signature=bf550dd40c1e4d73e99ac2b45ab12bceeea0cca50186a25812542a837f8a0a49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EF56WL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOeALpioyCemnI5cpWf%2BSN95kV854OkzDGaDb%2FEYa6jAiEAjv4guFPv5dmjFGbbt00hhBV9Ohd%2Fs%2FKc1P7XGz1xlZkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKRKWdFYEkkYwZpCNircA5SR8aXeHHlrDdmqPkBJn4AbWCBwEl5hR6a%2B0MvPXx327UlTxMIQgiw1t8lLSOWl8dWHXbvEAzdd%2BjcwNMRf3gel4swd%2B7kNTlTyivrXgGIaTsXgNvP7dymthn5dTOZLmYTcAZOOe8w2qY9dBqldYUecVnNK1HiDuOxtg8td%2F1R5J6Wh5clTFwhV5QLFneTe1TcYztXnZ2KpnImq%2BczE6vt4yarCS%2Fuu5iUITBRm05fSOT7Xm8F3Wmo44PPFj8MKe86VE%2BqgN8QKyuyWPhyAg%2Fx07wjPAZ6Zhe2U3y67QNymHN4dymv8nsRT9Aim7bfGPUmpeuSJfvVQgDUmkQBiYBh8Ol7YsEPgDBRW8Z40fYfDMS%2FSP%2BQvdkzCWyWRI2VKKLf3e5tbKNiUOYWBD5VE7pC6feDBCTd8R56H64efWqQODMC3SKiMBraj2VhlZkpJOUZ7JRd3K5pV9cwdAqixFezuqJEUJlIJqLIAjzUk6rOMUM9rrGh89r54V%2F5vDS%2B%2FTFXGLBWqkre9oYKLJMIAR%2BH%2Fr8lKqRyWHUc1cQigHn9D9%2FoaipzGJ7RpQzDrtyt4zEZHWZBfb%2Bndk3k1jYzlq%2Bsk053%2BpOsXylQ2u0tdLdOEA0ycHHvzADh9zUN3MKSsub0GOqUB7HzF8KkoOYj7p0vF7y5xZ1s%2Bb%2B2uRJPnua6VD0jfynVJrGO%2ByX4nq2tv0upKD%2B52%2Fe8BVY01vdTyWQTSbNAVgh58oQ4hsKxp5gEvX195I%2FrWPeI0Uv%2FkxELzfY6EegglAPARNcycn4KH65d15lA37%2BDEXcGEbpJ4HNLuvwlSzeAb5JEVNLYyk968XGkjU8Pq%2FcEpWGnn6sr6qMn8gf7OkzqdUElu&X-Amz-Signature=6cf70f89fcc6936cfe0566b12007080436b188ce046380cb55da79758ae19f66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHC6R5R%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzOyHXIgN%2FDdqyQCulh7NbA6iD1d9jJuCAfiuQk6bgJQIhAKhtAl1mVlQC2FHIPKYZ6xyZ6ggzNKafiruqotou5th9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgwhXa%2BXsks6e%2BCUXfYq3AMCJzySldV8253y7lZkIVUJ4Uas29sQimf6AfeokWRhVmlZcRBsflh5iDvveX2nx%2BSb7ps9OL5eWAWnoxyiOJvsAUjRDDuaJtdOExbAgTX6RWBX550AD9lsj8eyGO1xMI0JfMM7zCSq%2B9rW7yk%2BGHcTEc9%2FjmFYJ1alE6J%2Fy%2Bk9Tsv%2BRfT0kKLR8gjXayu44bCKlOkjEDLeplGSblahJ%2FrGJeCL7SjIgL1fOjI0gDHIDxuKeMlo3VRI3l9K7QcED3igi0fKxsVqJZHvIUxp8Sign6nsIPBiu9VUJ%2FqCs7eaGAE6j65qcaU0CkdxoXf%2BPttSlkTKEB6V1%2BSL8BIpx9gIy%2F4567Ry7gZ%2F9kYLOQmRM8MV0C64xV%2Bpnvlqz31S0X2rPUewpKO1QGh0Q%2FYDqeJr%2ByMaL03LCyQ5aOw5zj4PRGhO%2BzpjxC24tcVC2p10PBwvLSwnLjxQPbvkxEvmamzv9KMmYc3PPZYygCkomrQ5aI%2FNBviKFhoy9itHm2201CT4ITpOJIXUUBFw83Ok73gxzT1t05PfRILWDJE97SuR6pdVc%2BRspjN30p3Rt1SJX0Bheid9SDfs4aiV6JRqD%2Ff6%2BEsc%2BEYmhPObtuIkyrIJ5S3lN%2Fr6PpF04CY1zzCErLm9BjqkAd5Df0ZxMsTx8IZH1xY7VL8pW52Ea2r7qcyavU3Q3t%2Bsp0yx%2FN9rXl5tQ4gNBqsaYPh4928YyINfDLhjB1tcpOMv83t3cXmBVL0fYQGx8dHOc4brcxIXKk6HEBh0SSVGbOUuZKSrmItUaOklr%2FMrIoqhW4%2BPjqv2HnNcbYQgZ823mVylQ295EOrcX9bf9b0auanFTZfNnruxBOB%2FJ76M3%2F2kDItS&X-Amz-Signature=186107995333c80de93da016ebda2cab42e5684302f69f8d0a301d00e9731dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
