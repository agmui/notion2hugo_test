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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMIILEF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B%2BQZlOo4ogAWVJSA6vHAhwT2ANDWVLx33rYqBL1t8MAiEA4xtnT4wSUz%2FSo2D9AyIwZJvQJYenMtVOB3NhcAX4d6wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgSxJrp8t7kknTFMircA2N6PQWhHjRrTOpHT75%2B%2F2ljXUIu2NizOx5gizKYHofldxO4%2Bvr1NHSmXTCKU1HFEOIwhxenWFY82HsVrVBjRhO4etaJ9BNxPokn7BVCRh7pObvQMSXsebZ0xYwXwgiLIHtslAhp9JijeEIp5LMTJ%2Br5oWGLChWoeP%2FhZn2gJYAbCSZLiiUu3JYpYADoVtVjh0GJFyfYnN4%2FHwR3c6IXKGBCMbRyS%2FF0gZ3oKlg2582onQQzS8Yraw9PDCJAnWswXa6JHBkbssS%2FwYhaaRkDg6PGxBTFd5c%2Bxkd9ZEjSZuiyoBhm472uB9KBx%2FiDKDo2QDaAt3nS6VXs6fdvauF8QNlaZoO5uq3nMTNFWXHWglz9n3Zfv5%2BtkmWt3DAmX6gN46PolpLHtF3x25X8idpLG1SYm%2FVGEAFe9M4ed%2FenDnHo03L8LXk1h9DWifYURsFMf41jK1iOOpR9VXiQ1TrkLFecSBbhDDT2Ra8TVT28VL2uuDSYmL2MHhX1tS8WPbotL5WRVDrr0YDlOHuWjNGB6zvmusIiWu8%2FFOlzoUfM5M8ECdcNmqz5o8UDkTD0xxbr8YxKJuIu8H4zxC9FhvNmmW0PDO%2BVKzJhlshu%2FpFjbFTbPLeGP1yBZSCQZtepMISl7MEGOqUBDnU%2BfD2q50kKes1u2zePN8QAyc7mEiYeYy4%2F1V7I4pBKonRnFP%2F5ev9%2BsSPWW4VHHnJEBZ4iq7%2FjStINlk9vk1c%2FSmKbgz5iNe4bMwrUj2c0PXi7vDS6ItA891RuzfKgTdcecsMZKeSbbhFKgAMsjpLvNszgUlDlD5tMPqhRkRgNPMpQwbsKnsSXTE9KsFwLH%2FN0%2FvHXU50slQejVj9aKrpN3wkm&X-Amz-Signature=1c0ef99433ae6a7de288aac2cd89bb09790482cc2140142d406b4a156206cb92&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMIILEF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B%2BQZlOo4ogAWVJSA6vHAhwT2ANDWVLx33rYqBL1t8MAiEA4xtnT4wSUz%2FSo2D9AyIwZJvQJYenMtVOB3NhcAX4d6wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgSxJrp8t7kknTFMircA2N6PQWhHjRrTOpHT75%2B%2F2ljXUIu2NizOx5gizKYHofldxO4%2Bvr1NHSmXTCKU1HFEOIwhxenWFY82HsVrVBjRhO4etaJ9BNxPokn7BVCRh7pObvQMSXsebZ0xYwXwgiLIHtslAhp9JijeEIp5LMTJ%2Br5oWGLChWoeP%2FhZn2gJYAbCSZLiiUu3JYpYADoVtVjh0GJFyfYnN4%2FHwR3c6IXKGBCMbRyS%2FF0gZ3oKlg2582onQQzS8Yraw9PDCJAnWswXa6JHBkbssS%2FwYhaaRkDg6PGxBTFd5c%2Bxkd9ZEjSZuiyoBhm472uB9KBx%2FiDKDo2QDaAt3nS6VXs6fdvauF8QNlaZoO5uq3nMTNFWXHWglz9n3Zfv5%2BtkmWt3DAmX6gN46PolpLHtF3x25X8idpLG1SYm%2FVGEAFe9M4ed%2FenDnHo03L8LXk1h9DWifYURsFMf41jK1iOOpR9VXiQ1TrkLFecSBbhDDT2Ra8TVT28VL2uuDSYmL2MHhX1tS8WPbotL5WRVDrr0YDlOHuWjNGB6zvmusIiWu8%2FFOlzoUfM5M8ECdcNmqz5o8UDkTD0xxbr8YxKJuIu8H4zxC9FhvNmmW0PDO%2BVKzJhlshu%2FpFjbFTbPLeGP1yBZSCQZtepMISl7MEGOqUBDnU%2BfD2q50kKes1u2zePN8QAyc7mEiYeYy4%2F1V7I4pBKonRnFP%2F5ev9%2BsSPWW4VHHnJEBZ4iq7%2FjStINlk9vk1c%2FSmKbgz5iNe4bMwrUj2c0PXi7vDS6ItA891RuzfKgTdcecsMZKeSbbhFKgAMsjpLvNszgUlDlD5tMPqhRkRgNPMpQwbsKnsSXTE9KsFwLH%2FN0%2FvHXU50slQejVj9aKrpN3wkm&X-Amz-Signature=4b77ed5e42ca1460785f6ee267fc5ca6fd0270285c4fb99b429d78fbfc12a8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMIILEF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B%2BQZlOo4ogAWVJSA6vHAhwT2ANDWVLx33rYqBL1t8MAiEA4xtnT4wSUz%2FSo2D9AyIwZJvQJYenMtVOB3NhcAX4d6wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgSxJrp8t7kknTFMircA2N6PQWhHjRrTOpHT75%2B%2F2ljXUIu2NizOx5gizKYHofldxO4%2Bvr1NHSmXTCKU1HFEOIwhxenWFY82HsVrVBjRhO4etaJ9BNxPokn7BVCRh7pObvQMSXsebZ0xYwXwgiLIHtslAhp9JijeEIp5LMTJ%2Br5oWGLChWoeP%2FhZn2gJYAbCSZLiiUu3JYpYADoVtVjh0GJFyfYnN4%2FHwR3c6IXKGBCMbRyS%2FF0gZ3oKlg2582onQQzS8Yraw9PDCJAnWswXa6JHBkbssS%2FwYhaaRkDg6PGxBTFd5c%2Bxkd9ZEjSZuiyoBhm472uB9KBx%2FiDKDo2QDaAt3nS6VXs6fdvauF8QNlaZoO5uq3nMTNFWXHWglz9n3Zfv5%2BtkmWt3DAmX6gN46PolpLHtF3x25X8idpLG1SYm%2FVGEAFe9M4ed%2FenDnHo03L8LXk1h9DWifYURsFMf41jK1iOOpR9VXiQ1TrkLFecSBbhDDT2Ra8TVT28VL2uuDSYmL2MHhX1tS8WPbotL5WRVDrr0YDlOHuWjNGB6zvmusIiWu8%2FFOlzoUfM5M8ECdcNmqz5o8UDkTD0xxbr8YxKJuIu8H4zxC9FhvNmmW0PDO%2BVKzJhlshu%2FpFjbFTbPLeGP1yBZSCQZtepMISl7MEGOqUBDnU%2BfD2q50kKes1u2zePN8QAyc7mEiYeYy4%2F1V7I4pBKonRnFP%2F5ev9%2BsSPWW4VHHnJEBZ4iq7%2FjStINlk9vk1c%2FSmKbgz5iNe4bMwrUj2c0PXi7vDS6ItA891RuzfKgTdcecsMZKeSbbhFKgAMsjpLvNszgUlDlD5tMPqhRkRgNPMpQwbsKnsSXTE9KsFwLH%2FN0%2FvHXU50slQejVj9aKrpN3wkm&X-Amz-Signature=b3ff83a0f232beec55b2e5dbd8991f8ca3a27074ae0bf0d73c78a8ed82cda14e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJC5U75F%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDjtJOXXWxvzBWiSvvYvC82XtbzYdF3Thv0nWpWBrGoAiAa%2FiXkuH0W96QFrjNYIsBfOwosgV2GjxtFztCSjwn08SqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FaR%2BCJf7mHnJCHLWKtwDtlZSM6tyiUG1SicB%2B%2FQ1CGLkBJyhuWZvA0Da%2BnmFatLdY1%2FIE3WgANIypT87qiZxbRwjLdzKk45w51XqJd4zsox1WVnrvIN8xsnZ7XvrNm80d2kmRUI%2BsiQZykozlYvGqr6URwHknxUCzWdP1iPzMbw8OBHSbaWJmKbdN8tXaGBK%2BL94nifPklGPqJOTOYwhpRjDJk5KzfbORdhu52lPQtVrj4r5G8oCtMJUKnqf%2Bc70u6Y0gyEIggmFhnyzXsNbdRf4%2Bxd%2B8MAAtPbFumEXre16QH1RcRkc%2BDei3enb7gTZ%2B940McrboxiLcKE4p%2FQqGwhyPYCbg9FIXrcrA6%2FDaqrH3wyxX45dqWe101bVh9oceYddOvq3plM0FEWHiFOBA5YZkFHM9iJ6OGIcsFNalXthhBKRE7jhN3ynCML6OKY71KRqj8x5BtZnWkL4KQ72P87kmIGagZ5sPJOMKMMjB%2Fb0uW5okW23kNzz%2BSwtROWEqNigggjIEA5h%2FJ49TvUwWYYutuxfcfRdriycRpt9stFAq9wONjbLa%2Fy8z4NIOO6P%2BJDZzZzT4J1toDwv5K4ZTJHyvQpFyRh2bmUwoNTTkBMGGNb0N%2FbOrmNm1wpFRbtbqhIlwXL5rWSFUWcwr6bswQY6pgE2H6UpMQo9GSTojyXHE%2BFdSSb7iyadZEp8vNbQS%2BnNdC5u9vQQzNPmnNKsBz%2BugXISPFZaVjL8vGVIyQviGDz%2FIs0friTQwtEvL8MpsME9wMra34A4gaaglVJll25dlOYNDqJR4A9sDsMGL967LudrQ3ykJpJm3Pk818A0apvMYkSqMDFZ20KLg8GhGAN8De9F2B7YjeIsseyLcZtawqsYUEDLwq%2Bi&X-Amz-Signature=55584bf1d057958e62f2541dbbd273f9802414cf71f23fdbef86f7b5d209408e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C7NXPK4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFj6bCyKDqQJNwcyXPCoIxoVkZZJHQUgSWVMqEF8DJ5sAiBz3a82JX6ZYlCPHGaavMzH0Q%2F3G9eAqAq%2FyqfV5dX7ViqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlDY92FjYNYK4nP22KtwD9p8k2PC4khL9Dk7V0QXOzuq17y12XwPp41KzGiTS%2B8efExCtiXue3xYqEwRQBS%2BLeOC57sN3Y%2FQ7L9v%2FWU1mcP9iR1zppxW5M%2FHXQJEaDL3sFIXN%2F4M7U6IpwCRXYcLOeitjQ%2FYoSwwYz68aYcvbb1wiyczj1WqVOEBlWZEybGdxZQW8bF8w544aLpl7JOzz28htsg3rbgDLQvLy1YgR6iyOM0QdcHWc12Mk1nys%2FuuUuJ1aQwHZfq9tMvB%2FVdjRfSfkIpd03XngdAn62JfwmqXbz6Zq5jmuO8gESvBJxBgchrqaHO%2B20MyRlFGNm%2FLy1IszwA6gCy2%2FoGI5O0FWLBQkWB8cTaXLnYsksTjpgLI0FoWYobZ9CmyB9tcpAvtOUC3vRHCthAmZdnDg2xmg7q9Q0GjvJqleaFKNkVw5wniBs88EONeGl7nbSpe2NffyhYu7UE7ImJENJSM35Xi711YgGcHa9F6v5jnAJeQtYu9A5NNIUg8olwlnl3%2F3GHuvMmPqGh8aALAc9CfJ0vWWONBYZ5g51r8s7V0KlWgA9s%2F6gLKNdLTHb4IU%2BtTIYnqOvpnxVx%2BQMeXG0dO0jH%2F9QH9XkFUVPfS0HByDLpGAXq%2BIzNnAoRV3Ixmy644wiLzrwQY6pgGP9HckB%2Bwn1aJ8w2fSSYKw4HG1yIZhhGMveh8yMZYQ0SNDo3IOMUefqTAHKK7w6gSB%2BhQHLgwsIxKHtm%2BPRNe0Y19N5QRNbfQCE7zNGu2AV%2Fmxv43Kt02oUhuN0exceNGbhDDYHxiaWQEzc6%2Fp8yLsRQS3gJRqEIqTWFi5EYJFCQ2LInNsno0xRQkwoV42PQ1bAUQjgFXGqMvhPZjI7H1m1mvobaRK&X-Amz-Signature=af83c42e953e1ab329ca17df0adc4de6144a8252e08dd4e9cc986eccb0940663&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMIILEF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2B%2BQZlOo4ogAWVJSA6vHAhwT2ANDWVLx33rYqBL1t8MAiEA4xtnT4wSUz%2FSo2D9AyIwZJvQJYenMtVOB3NhcAX4d6wqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgSxJrp8t7kknTFMircA2N6PQWhHjRrTOpHT75%2B%2F2ljXUIu2NizOx5gizKYHofldxO4%2Bvr1NHSmXTCKU1HFEOIwhxenWFY82HsVrVBjRhO4etaJ9BNxPokn7BVCRh7pObvQMSXsebZ0xYwXwgiLIHtslAhp9JijeEIp5LMTJ%2Br5oWGLChWoeP%2FhZn2gJYAbCSZLiiUu3JYpYADoVtVjh0GJFyfYnN4%2FHwR3c6IXKGBCMbRyS%2FF0gZ3oKlg2582onQQzS8Yraw9PDCJAnWswXa6JHBkbssS%2FwYhaaRkDg6PGxBTFd5c%2Bxkd9ZEjSZuiyoBhm472uB9KBx%2FiDKDo2QDaAt3nS6VXs6fdvauF8QNlaZoO5uq3nMTNFWXHWglz9n3Zfv5%2BtkmWt3DAmX6gN46PolpLHtF3x25X8idpLG1SYm%2FVGEAFe9M4ed%2FenDnHo03L8LXk1h9DWifYURsFMf41jK1iOOpR9VXiQ1TrkLFecSBbhDDT2Ra8TVT28VL2uuDSYmL2MHhX1tS8WPbotL5WRVDrr0YDlOHuWjNGB6zvmusIiWu8%2FFOlzoUfM5M8ECdcNmqz5o8UDkTD0xxbr8YxKJuIu8H4zxC9FhvNmmW0PDO%2BVKzJhlshu%2FpFjbFTbPLeGP1yBZSCQZtepMISl7MEGOqUBDnU%2BfD2q50kKes1u2zePN8QAyc7mEiYeYy4%2F1V7I4pBKonRnFP%2F5ev9%2BsSPWW4VHHnJEBZ4iq7%2FjStINlk9vk1c%2FSmKbgz5iNe4bMwrUj2c0PXi7vDS6ItA891RuzfKgTdcecsMZKeSbbhFKgAMsjpLvNszgUlDlD5tMPqhRkRgNPMpQwbsKnsSXTE9KsFwLH%2FN0%2FvHXU50slQejVj9aKrpN3wkm&X-Amz-Signature=d54f490d59766fdd829b77d242b0247326ad9a33a6b2450432c878d9a91c2917&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
