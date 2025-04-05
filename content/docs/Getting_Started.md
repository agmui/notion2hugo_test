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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QW4MWHK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHv9znTjpHt4JeidHjoycnBYLqEcxOLV4hDc9eb4m%2BZuAiEAnPeWyCUiTtjgktOef2dI0x2LHPejOQjsUsKU6xTrgaQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAJEXlEVViGIjsVaySrcA%2FdSVVZIeNugLjEvqo%2FWxPR7BVlKT%2FqxAcXN4HBgT4QWY3WGuYGYaAJg0RFuEJeV7xE%2FJe6%2B5DDCvHkvceYVIwDNxsUQCXQNdpsb0nFK3ZEkLPHOgViGN0RT9F%2FN46TxLYzU%2BwACphl9yXYJOGMkQ0ZOTGNRvFoBtIfiLzxGEaUBnQN1gN4ockTCCPbEgFb4dfwuxK2reFmZsp32dVIRDaAnQU3I316IK3WSlZ2I8cFxZO95Tt%2BspzF%2BBEXAtnN0QvVd3KT7DbDF%2BK34G9S7XYOjGS42mf4JmbEq5riTJaUjVqHITevNqvYx6tqcN1gjpKlDZ7rwbvPLbpK0DxCgbX7vXPzzB3L8waeQ2OszQNd%2F7aK51O0INC0CHw04iqX4IgWqAoCKv%2Fe0wMCY0uju24trgsvfupcmf8CQShC7iVjYKtE%2BVyVd0uDdMXVUv9p8CS0IkHfHwjggp4T3%2B7PWfTcDakl9OgUgCmLlmnhDva4edao1WUu88H8NPKd2gGg2SUhvJagTB%2FEmfSw74px79SU1j2GConElqkZnHk%2Fb9nwCklp9Seu00NXAtxxrYuWoVZw%2BnkemOgT1kK37vb4WWaAjoPWox2Tyh8hqZpUye5dEGuIamJpd0%2B91dwwZMOPjw78GOqUBbFQgO0r5iZ50Ofsk8zOysqsyN%2BKrBr46FCjVpYUoSVh6AZ%2F6dRijm4ce4KQgua23ULXcU%2FEuo3LVwtXwFOOCmgLZ8KiydCsIzn24hwAtdiZtZb0cMwGbs9hogQHfUTjAbeMP3h2pnZRKKEJobCN7ONk%2Fj3EAo0teGHUgjgME1RSVuk9WO9h4jCTME5Txdm1rlj7fgiXAfjkW6ZThfgXD7cciaQ3Y&X-Amz-Signature=ea4c93c1f288dcf89bf605672aba1c9689db816407083e8bac4645d25b6e0108&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QW4MWHK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHv9znTjpHt4JeidHjoycnBYLqEcxOLV4hDc9eb4m%2BZuAiEAnPeWyCUiTtjgktOef2dI0x2LHPejOQjsUsKU6xTrgaQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAJEXlEVViGIjsVaySrcA%2FdSVVZIeNugLjEvqo%2FWxPR7BVlKT%2FqxAcXN4HBgT4QWY3WGuYGYaAJg0RFuEJeV7xE%2FJe6%2B5DDCvHkvceYVIwDNxsUQCXQNdpsb0nFK3ZEkLPHOgViGN0RT9F%2FN46TxLYzU%2BwACphl9yXYJOGMkQ0ZOTGNRvFoBtIfiLzxGEaUBnQN1gN4ockTCCPbEgFb4dfwuxK2reFmZsp32dVIRDaAnQU3I316IK3WSlZ2I8cFxZO95Tt%2BspzF%2BBEXAtnN0QvVd3KT7DbDF%2BK34G9S7XYOjGS42mf4JmbEq5riTJaUjVqHITevNqvYx6tqcN1gjpKlDZ7rwbvPLbpK0DxCgbX7vXPzzB3L8waeQ2OszQNd%2F7aK51O0INC0CHw04iqX4IgWqAoCKv%2Fe0wMCY0uju24trgsvfupcmf8CQShC7iVjYKtE%2BVyVd0uDdMXVUv9p8CS0IkHfHwjggp4T3%2B7PWfTcDakl9OgUgCmLlmnhDva4edao1WUu88H8NPKd2gGg2SUhvJagTB%2FEmfSw74px79SU1j2GConElqkZnHk%2Fb9nwCklp9Seu00NXAtxxrYuWoVZw%2BnkemOgT1kK37vb4WWaAjoPWox2Tyh8hqZpUye5dEGuIamJpd0%2B91dwwZMOPjw78GOqUBbFQgO0r5iZ50Ofsk8zOysqsyN%2BKrBr46FCjVpYUoSVh6AZ%2F6dRijm4ce4KQgua23ULXcU%2FEuo3LVwtXwFOOCmgLZ8KiydCsIzn24hwAtdiZtZb0cMwGbs9hogQHfUTjAbeMP3h2pnZRKKEJobCN7ONk%2Fj3EAo0teGHUgjgME1RSVuk9WO9h4jCTME5Txdm1rlj7fgiXAfjkW6ZThfgXD7cciaQ3Y&X-Amz-Signature=b1ef55ebe4e59710413e9adaa5b7918224f2b750c8d7499e8be0d2ed51849e19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5ACOEZT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7b6GYe3HVtWGrxr9X12t2ZKk1P9UDQVgv0tezQ4ZtsQIgN70eB4KfQYPDQztjbGlKw5TaDHov970RBw%2FO5hAdIw4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDI9FngrtymBpkfkCASrcA2sKT8hT08yfVYxiDMNuWtG1sAEomk%2Fy84Y6crDAbD7n187i%2FCBwHVd42DZMoxPeCERh2Gl7Hr6VnWgzDxdeMo%2F0bYrcPOolklINPgk5Va4kvgJ%2BfisbYAIs93iXEpU17VObAsaqWOGcjjT4ugn6BYlBPQLy%2FmAjtCVO77W0MTWw8FE7VXr5KTN7ITNnQbNQ%2Bdbpx5kNTRYZPx6M%2BEmJQg6%2BTluNhLGZ8mK56pzu21ON5dO3frh8v0UEX9loJ01KH%2B4S3Jf1W6BcWVU%2B6ZjzkBMyMBArGJdUQpo4Iu8BlYMORbDyHqBCjmrpWs%2FL36d34XAbAodWhwfYrMDSq5WBi8J4CII%2BiAwryCyLFg4BSm%2FcigEea5hkuHTQgVdT7m7aB%2BMrg5GLonOZo6qYSv%2BQ%2B7Ds9YMFPuQ72BkJpiUJoGCGxrM7kR7wdonk%2B5THVMC%2B5h%2BevU7MQRLiB%2F7pZOzMlidG45pghtgpk4N4GwmWx0pnjPwRc%2BP%2FiWvtjIeGh3F2fB2t1xLSTT4OyhpXJSjb7rKsQG1ID%2Fx%2FICjaqZg1jZEQzD3tvrVY%2B7Dum6%2B7xTdQaB%2BAkfexwwz65HtK92nVgE9HjXGJ7woF3UAUslLs6sGXcXuZUjlQ93o4O38iMPTjw78GOqUBCWcDwOR5bJ9JeZjZMzA37r4SC57v1dO3eBuvUDfoY%2F8LFcaQRUyFZZy5rlXRh7OlfuPRq7zB8MZnecOl883AKF%2F%2BmDnNyn7PyaNWAajjgkyX%2B1J%2B7Z63tjqC4OWzP4nzBiLZdGnRZjA5JYHmSsgMNjJyNAK%2BjvEEUGPHjpJgrjHyu8B2dYsTUJTu%2FfMhlvBdEKZxKBpOFRLlwIuU7WLg8ZON8YFU&X-Amz-Signature=175124f9ac7d273acfa98cf06a3d8b3266524679445b8caad332987d45745b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5J2GPJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQC7C898LgbGwpz6SAzbAWcl08ALN6%2FB%2FweXj4ptwfQIhAMIyFbUTnPvZ%2FIsCPjwNRKHUX4pZVUPsNqxyJ4HhzlKVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzyWQNyz%2BsihKH4t%2FEq3APZifWefemXGoiQnCsAGNhyKqTtS7UwvnwQKxadcWcJB7YoKCKILwQUJW4Tschjcq6ej%2Fb%2BXmVTUxjeR4u%2B03Pyb6pEeBRJ28%2FHNtV4Bs%2FfRO2d3SNF79xUu32JC32Hg%2BHzTN3N5biNpGl9OL%2Brm2b9QNmaMr6ypj2hC9y1L64362OMRIo1dK29PQbF5GpaOvHUEXT0lw19c2XzkTO7Q73%2BndQ8cscvCj9UXsEB8GCXXWqgMEreBhfdFezlmvtyDH2gEr13Oc2bEPFd3phfTKAbMAzmuXyvWRKLJlzFCQdzXOg6SoI2aYhOMjshvLABGkQqK8mvjH5dxeSIbmt94nYsLY1kQtR6%2Fai35hEAvL4P2Lai95mc1SZbU7CYELZ6%2BmxmXW%2B5dCycPFvcFxWCDEZonzBqSar2TRuPVthUFPVk5zWjCIZWfMiHd6lbY%2FSihyuqg4lgRntTA7FEFczEI7z5JdkhFsJH8dytQas3GGOn3pGT3pM94JoNmoKA4RoBO2euoUKm2HjRvbXbeuzaGcvC%2Fp0IwtssmnteENV65kibugTXDJHkUNRlozaY5C1csYtouzC4cZww9XGo7QDwyF2cCGbCcD2ZwfRCS%2BU5vAnIoOd9CB6pAMQA6gbJhTDF5MO%2FBjqkAZ4wfohG4JJ%2FP8ugt9W52bwlW8uze3InnYmooWafUoFMFQ7V1AzAl%2FY6YMIa%2FCoeyQjkqeJ%2B405Wky3JJdDREdfNju6aAGNlMXKjh942yaUGFoaO6K%2BzkpC26Q3GR%2FjX3Zx9CuAfVwgl9b8WfMN0YDm2gfYH504SPOrtCJw%2BIItZ7vDWbY1cORGet787do0klFTGf2%2BOvKAc9zXC7JGBuRIDyog3&X-Amz-Signature=5fbb965367cc92034e15f78f53b4e03ea9383dcbb46bae33327d1b14e03f0443&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QW4MWHK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHv9znTjpHt4JeidHjoycnBYLqEcxOLV4hDc9eb4m%2BZuAiEAnPeWyCUiTtjgktOef2dI0x2LHPejOQjsUsKU6xTrgaQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAJEXlEVViGIjsVaySrcA%2FdSVVZIeNugLjEvqo%2FWxPR7BVlKT%2FqxAcXN4HBgT4QWY3WGuYGYaAJg0RFuEJeV7xE%2FJe6%2B5DDCvHkvceYVIwDNxsUQCXQNdpsb0nFK3ZEkLPHOgViGN0RT9F%2FN46TxLYzU%2BwACphl9yXYJOGMkQ0ZOTGNRvFoBtIfiLzxGEaUBnQN1gN4ockTCCPbEgFb4dfwuxK2reFmZsp32dVIRDaAnQU3I316IK3WSlZ2I8cFxZO95Tt%2BspzF%2BBEXAtnN0QvVd3KT7DbDF%2BK34G9S7XYOjGS42mf4JmbEq5riTJaUjVqHITevNqvYx6tqcN1gjpKlDZ7rwbvPLbpK0DxCgbX7vXPzzB3L8waeQ2OszQNd%2F7aK51O0INC0CHw04iqX4IgWqAoCKv%2Fe0wMCY0uju24trgsvfupcmf8CQShC7iVjYKtE%2BVyVd0uDdMXVUv9p8CS0IkHfHwjggp4T3%2B7PWfTcDakl9OgUgCmLlmnhDva4edao1WUu88H8NPKd2gGg2SUhvJagTB%2FEmfSw74px79SU1j2GConElqkZnHk%2Fb9nwCklp9Seu00NXAtxxrYuWoVZw%2BnkemOgT1kK37vb4WWaAjoPWox2Tyh8hqZpUye5dEGuIamJpd0%2B91dwwZMOPjw78GOqUBbFQgO0r5iZ50Ofsk8zOysqsyN%2BKrBr46FCjVpYUoSVh6AZ%2F6dRijm4ce4KQgua23ULXcU%2FEuo3LVwtXwFOOCmgLZ8KiydCsIzn24hwAtdiZtZb0cMwGbs9hogQHfUTjAbeMP3h2pnZRKKEJobCN7ONk%2Fj3EAo0teGHUgjgME1RSVuk9WO9h4jCTME5Txdm1rlj7fgiXAfjkW6ZThfgXD7cciaQ3Y&X-Amz-Signature=6ee138325568afa83bb3797cf68d80a447c601c0e601406f72a87cc40091d1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
