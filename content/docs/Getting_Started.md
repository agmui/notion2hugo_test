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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZXLENJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEgFK%2BtKFlWNAErcluOZvgZLl%2B5sGQ2lXBuwsdU%2FFzxvAiB9t8i8LFhGPL5O%2BZB7YTLB8si1xDw7wEdgOtlYfvyhMCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMmXJYR0vrmHV5Rig6KtwDCuKI5fPy76hYoK56UBx37jLL19RyiGx92wvhvDCrJm%2BYOCREKirtd5%2BQcmYXhBOKORH1o7y4SSCQUSxKfTQiZ8zukMSqHwssXSdN7mbR3HM65lHMiqexTXMv86YXaUjt2ThTkRI7NH2%2B6WX7ereqUdEbCXzAESFSJ%2FZ9xvEVtbnC51UmhXG%2BJv75NOOgLKlYZkbrBFrlbZLOcK7JjmU6%2FpU6CXBWZ9fkVnGUTQdzkIb2QIKycVpX9RDwGNcWKlnCBEi%2BYfkACDkOeI5vpP7xGQ4GZ9evBjcTbz6yb8O7Svas9WKfqgy4DK3%2Bbj9uWmhlNQsdbFIVN3EUzYv3zVlXwSa5wdG5%2BgY4%2B6rmbUrtp65dtlQsPyz406tuRiPcUKRZs%2BxOCsPYEj8PAayA81nP%2F1W8yXoJ6j4R2OCkdMqQ3IcwZZ9OAKL2K%2BvtPaYApOCArzNHfq5s74Jvj%2Fq%2FJTXYjd1eF9TZWusKpj3Bnik5wMrXcM6PPdYI2SrCxXUUlYunzaoEwQJ4pv5pjIM%2B6rZSjupZbZ85N0LF5AyPNe%2BJqjrY7NI0hJC9qA4GOg7GLkyjI1GEkCnt7zcoInTkK5gHBnQNTW%2FSYEfSIwRnYS3w%2FLNinC0ctaRupIb1YeAw85XIwQY6pgGZ76u5sxt5AnCFvwWb9CGNallqGMdC9XclW01GYzGFPlohu6snhr7nOldnCI0TinMdTvpzynKC04WisPikM4wZz1vbRIkOJmN3WvBj5q8pi49k1fVtvs6jSt9qnd31sSF8o7BIntmfXBhRv7a44MTX0uihRsgqd1mBgISl2q27X925ftnNGWbCn7pOmSJqV%2FOlnUY4JghdTARX4NRIeOa9SWijyMv3&X-Amz-Signature=8c63f87acdffa488bff76664b52c9db473dfff6b8f67993b25ed7bfa86213a43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZXLENJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEgFK%2BtKFlWNAErcluOZvgZLl%2B5sGQ2lXBuwsdU%2FFzxvAiB9t8i8LFhGPL5O%2BZB7YTLB8si1xDw7wEdgOtlYfvyhMCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMmXJYR0vrmHV5Rig6KtwDCuKI5fPy76hYoK56UBx37jLL19RyiGx92wvhvDCrJm%2BYOCREKirtd5%2BQcmYXhBOKORH1o7y4SSCQUSxKfTQiZ8zukMSqHwssXSdN7mbR3HM65lHMiqexTXMv86YXaUjt2ThTkRI7NH2%2B6WX7ereqUdEbCXzAESFSJ%2FZ9xvEVtbnC51UmhXG%2BJv75NOOgLKlYZkbrBFrlbZLOcK7JjmU6%2FpU6CXBWZ9fkVnGUTQdzkIb2QIKycVpX9RDwGNcWKlnCBEi%2BYfkACDkOeI5vpP7xGQ4GZ9evBjcTbz6yb8O7Svas9WKfqgy4DK3%2Bbj9uWmhlNQsdbFIVN3EUzYv3zVlXwSa5wdG5%2BgY4%2B6rmbUrtp65dtlQsPyz406tuRiPcUKRZs%2BxOCsPYEj8PAayA81nP%2F1W8yXoJ6j4R2OCkdMqQ3IcwZZ9OAKL2K%2BvtPaYApOCArzNHfq5s74Jvj%2Fq%2FJTXYjd1eF9TZWusKpj3Bnik5wMrXcM6PPdYI2SrCxXUUlYunzaoEwQJ4pv5pjIM%2B6rZSjupZbZ85N0LF5AyPNe%2BJqjrY7NI0hJC9qA4GOg7GLkyjI1GEkCnt7zcoInTkK5gHBnQNTW%2FSYEfSIwRnYS3w%2FLNinC0ctaRupIb1YeAw85XIwQY6pgGZ76u5sxt5AnCFvwWb9CGNallqGMdC9XclW01GYzGFPlohu6snhr7nOldnCI0TinMdTvpzynKC04WisPikM4wZz1vbRIkOJmN3WvBj5q8pi49k1fVtvs6jSt9qnd31sSF8o7BIntmfXBhRv7a44MTX0uihRsgqd1mBgISl2q27X925ftnNGWbCn7pOmSJqV%2FOlnUY4JghdTARX4NRIeOa9SWijyMv3&X-Amz-Signature=d718244532bddbbd7437f9f89b30f03510f668bf945e7a5bbec0b957f1953e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZXLENJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEgFK%2BtKFlWNAErcluOZvgZLl%2B5sGQ2lXBuwsdU%2FFzxvAiB9t8i8LFhGPL5O%2BZB7YTLB8si1xDw7wEdgOtlYfvyhMCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMmXJYR0vrmHV5Rig6KtwDCuKI5fPy76hYoK56UBx37jLL19RyiGx92wvhvDCrJm%2BYOCREKirtd5%2BQcmYXhBOKORH1o7y4SSCQUSxKfTQiZ8zukMSqHwssXSdN7mbR3HM65lHMiqexTXMv86YXaUjt2ThTkRI7NH2%2B6WX7ereqUdEbCXzAESFSJ%2FZ9xvEVtbnC51UmhXG%2BJv75NOOgLKlYZkbrBFrlbZLOcK7JjmU6%2FpU6CXBWZ9fkVnGUTQdzkIb2QIKycVpX9RDwGNcWKlnCBEi%2BYfkACDkOeI5vpP7xGQ4GZ9evBjcTbz6yb8O7Svas9WKfqgy4DK3%2Bbj9uWmhlNQsdbFIVN3EUzYv3zVlXwSa5wdG5%2BgY4%2B6rmbUrtp65dtlQsPyz406tuRiPcUKRZs%2BxOCsPYEj8PAayA81nP%2F1W8yXoJ6j4R2OCkdMqQ3IcwZZ9OAKL2K%2BvtPaYApOCArzNHfq5s74Jvj%2Fq%2FJTXYjd1eF9TZWusKpj3Bnik5wMrXcM6PPdYI2SrCxXUUlYunzaoEwQJ4pv5pjIM%2B6rZSjupZbZ85N0LF5AyPNe%2BJqjrY7NI0hJC9qA4GOg7GLkyjI1GEkCnt7zcoInTkK5gHBnQNTW%2FSYEfSIwRnYS3w%2FLNinC0ctaRupIb1YeAw85XIwQY6pgGZ76u5sxt5AnCFvwWb9CGNallqGMdC9XclW01GYzGFPlohu6snhr7nOldnCI0TinMdTvpzynKC04WisPikM4wZz1vbRIkOJmN3WvBj5q8pi49k1fVtvs6jSt9qnd31sSF8o7BIntmfXBhRv7a44MTX0uihRsgqd1mBgISl2q27X925ftnNGWbCn7pOmSJqV%2FOlnUY4JghdTARX4NRIeOa9SWijyMv3&X-Amz-Signature=ff590dbdf542b14f7a7124fc91e5275b5e5e46ae645ff456e7045be3454036f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKL6VHZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDySxmBno3K14E06xmItc7zC6t6NZp0uzdweTrWMpfouAIhAP7KKHtXnQvEfs%2BUWbFAA76ThfeH6KxYhM48B4NVlflHKv8DCBsQABoMNjM3NDIzMTgzODA1Igw1QWrM2knpo1CDoDAq3APVrLrLmB6uQhz4D6d87XIHJ5LPO3O6%2B%2FmZwMBvbctTFQzQqSay7FRy3PmLCpVzP1R5Vk48bXVPMlAUn5Kd85InvxSm86wV7BQZEe7cm8Vhim1dd6dY8c8y%2BYduwhOmDF6lMtoVBclAUCGaZ2E9Q5I1Nri2VcU7D048xfatpXfL%2B3rZ%2FOOkaT1k1iul%2BYRUm4ghTfem9gsVIR%2BnP0jnByC%2FiTjeocQHNABLZ3OLR4FtG3yzSlOpb2Gk7AdLGVWVth%2BRd%2FityUY5Z7RgZi0dC8mzkV7Sxw43OosbP7KWrqEcGcWCo%2Fm1LdgqtiOp1TdeMPpdmjGn5RfDd0GQOUklxc5YGvai0%2FcAT2T1AsT6A6blOAEMYLcTqxGzSpLvsF%2BCM8XA1wg5dyM49SoduZWMh41TUmtpavoT%2FvBUuzmD%2F%2FhipxzP78A8C7tdyBkgB3vYWdh98WzmKpVVEDuFrGZnyFz%2Fh%2Brj9dEDyQdxW28BCGdNrS5hpT8GtIRR2%2FKjxJwhhwbele95ODgeIrvLKYZmBc9rEr%2BmAgic6%2BzSrh87kJDziEtzfT4rsblJ9ZDlPZRsjoJ9aVpVxuFadjX8vWK5bNLAozO8ruTdhtLZagINDiJVTt5Wh6Tdb7CC7EKE2DCzlsjBBjqkAb4zZ0Vipfz8hsUpnlu626UuEituVDxgK%2BxNB3xKvl%2Fe6GuTOAOZDvuVLKrpaTdUO8FCYc1m4VJKLWQjQdO%2BKana8uz2HXNjmcNFABLDYPMmRmWMuHyfixCcQmYs63m27RCgiJ79UDkJV65JjnwujN%2BvdBOFZyhv5MUgOs7lXNU0AzGXlr%2Bq39GTm7CeP4yjCZy2Ki0xu%2BtFCNUaSLDcWVhcHtUT&X-Amz-Signature=161eb49e7aceb3271544e3cbb1661d546089bb3524ecea308f0fba4b794f8358&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MSLYAG3%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDmVh1zSMpijFtSXfAqlWUZV3%2FhVNBh9WszWV1C29uW%2FQIgZMUcF3XBLSKw65ECiMsJDXzkRnzN74r7gWmf4CuDnGIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDLJi6za%2BcAijkPMdircA0wZsMMhTtu%2B6NdmweBUabxOfrLz4b0rLamayTTCuN5Nc2XP7m%2FVVFukzpP3BY3JtvGQHwYz8vv2InhOoaZSteMSF%2F8D%2FXI4dYQVhx8Qz3Gal0GoNW7clMPDx1FDlbBgJAu4DgC3yCFn%2FcrfXvuyVhb4g69Xq0DiItBzgFnzJCUitS0bgqEBk%2FVoV412yR%2BRFu4hiQJ69N1HC7nxmMEdJHqDguzpCqgT1JIllmXRTNzpG7%2FoUTYfpuwV6%2B4uX37m%2FYaoIXvNicETvyqCd%2FywS654kM9Lf0reRVaSrZ29cDpiK%2BpOOXpRCOdSZzbyiWSY1FNrEmXZQSVQCU21wbrKqtIdN8%2B%2BhGoaVzgxiFY%2BzOiRzU1BYgk420%2FyU4boqfbD9m603U5ix6%2Fxkz0Jgr%2BMrZJx8JO067IE3SFNBFIXweKhP3I1epD9nwPMJ34igRfAOQX2nFDbbPEuV6ni96n90XERRN9YrCuk2wSNZS4ZXpBPUXrSSbxA%2FSTXsJM7r2%2FXvYP%2B1lVXDZukpvxXAD%2FuyLdm7dJc6CNgJIH%2FgYmUc4rA3WHWUtmrDbbgzoQEAGGT5CHpNjNvmg5hinX7lZVBSV4Y5F3Rt4pInCSL6VMcky%2BFxVdbCkjoDsZTiIlSMOuVyMEGOqUBYsbLLgAkJqTJZUdwRD2JHB9iM39TT3JG1HD44gFmKTiqeMPDqe9n3cpTAzlQfNxQvm0JlRIwtaMAJH2OKbSbiBYhHl6pDQOwJ2TzUhxwfdbI2wjLliNX8c3Ha7DHViNAPuPvazfMMFxhe5MCIoR%2FRpUmsV1zknx%2FPo0hJGAXloVkoiDnDd2vjfKMd3VdpmKnW3wK9Ken46YjIhT3bgBwxQRm4hgr&X-Amz-Signature=c679e26dbc2ea28c5af88e6ef5f33e3c0065b9bcdaea5243960ee15ecb6c6bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZXLENJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIEgFK%2BtKFlWNAErcluOZvgZLl%2B5sGQ2lXBuwsdU%2FFzxvAiB9t8i8LFhGPL5O%2BZB7YTLB8si1xDw7wEdgOtlYfvyhMCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMmXJYR0vrmHV5Rig6KtwDCuKI5fPy76hYoK56UBx37jLL19RyiGx92wvhvDCrJm%2BYOCREKirtd5%2BQcmYXhBOKORH1o7y4SSCQUSxKfTQiZ8zukMSqHwssXSdN7mbR3HM65lHMiqexTXMv86YXaUjt2ThTkRI7NH2%2B6WX7ereqUdEbCXzAESFSJ%2FZ9xvEVtbnC51UmhXG%2BJv75NOOgLKlYZkbrBFrlbZLOcK7JjmU6%2FpU6CXBWZ9fkVnGUTQdzkIb2QIKycVpX9RDwGNcWKlnCBEi%2BYfkACDkOeI5vpP7xGQ4GZ9evBjcTbz6yb8O7Svas9WKfqgy4DK3%2Bbj9uWmhlNQsdbFIVN3EUzYv3zVlXwSa5wdG5%2BgY4%2B6rmbUrtp65dtlQsPyz406tuRiPcUKRZs%2BxOCsPYEj8PAayA81nP%2F1W8yXoJ6j4R2OCkdMqQ3IcwZZ9OAKL2K%2BvtPaYApOCArzNHfq5s74Jvj%2Fq%2FJTXYjd1eF9TZWusKpj3Bnik5wMrXcM6PPdYI2SrCxXUUlYunzaoEwQJ4pv5pjIM%2B6rZSjupZbZ85N0LF5AyPNe%2BJqjrY7NI0hJC9qA4GOg7GLkyjI1GEkCnt7zcoInTkK5gHBnQNTW%2FSYEfSIwRnYS3w%2FLNinC0ctaRupIb1YeAw85XIwQY6pgGZ76u5sxt5AnCFvwWb9CGNallqGMdC9XclW01GYzGFPlohu6snhr7nOldnCI0TinMdTvpzynKC04WisPikM4wZz1vbRIkOJmN3WvBj5q8pi49k1fVtvs6jSt9qnd31sSF8o7BIntmfXBhRv7a44MTX0uihRsgqd1mBgISl2q27X925ftnNGWbCn7pOmSJqV%2FOlnUY4JghdTARX4NRIeOa9SWijyMv3&X-Amz-Signature=68dc988763b75da740d37861c5bf74777bf8690e2f5244ef9eae134275796b34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
