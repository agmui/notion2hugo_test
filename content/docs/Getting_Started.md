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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNWBNPQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBI%2FwqeGxQdOn5YMaDvoNe%2B9x4MIbURmjo20%2BX5%2Fcqe8AiEAuHT7KQ%2F%2B%2F86w4Yz2iY4VvqgVCh2tkhDWnIpagzZvI%2BUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwOxnqWF90GvZaw3CrcA5IkYkRDgnpDjWUZg0GskWs6GBIuixIa1V8%2FREcGFwdjsRBPbJEuZOQuQ6LKnteZBtrijCAYmBj%2FKfZas5rFYBBwd5vgCr0ILg5%2B%2BSzIk547sB3skZb6PMb5rKuK2bNZnZDRn0Q0S6iZ0WsAtLFCjwRqfedp1woTEbYEJPWbL%2FVtDqUP6Iz4WfQ2vudlFmsSlgYg75UbTD3JRZJdnoxpknkiSpmH8lbC4gys02o4oYqm0urStvVVfj6izcZhVU7fW5MR5Q8iru2Y7DwgcP3Bo7K6YlLu2PCQ1g66ojBT95yNhgyuGEOrxgYAy5gVGNxuEGfyrM8vVuIlhxxdIQsQ2kIU0XwXS7YmPu62sNicwpG%2F8BIdSpjzkLfsdeUq%2FJmV%2Bb3%2BHWXfOdZuc1dnxp6Zk5MIXDLIS4WUsilVUuWTemj%2FWSLI5SFK7NkHsfLKJu39Om5Wm7BMuf0N5Lt00AVe2%2BBhAzj4ubFhxTGk%2BFsImEJT3kvNX65JDdgZ7ZaXX0GAH3ziXavyPE82Yi3QXteuVYc4G5IcZbGq1HupJIwfk9WRjPDxkDypRna4OcOM1cxI%2FdQCrbTTWl94fopAejv3vB8IAZLkFcpV4LcJHrYPnNGV1YTApaHkScJlqzWoMKzI278GOqUB5lOe7Y%2FPXK%2FrZ0Mxi6CeGeqwItprDC8ppaQ42zAMNN0uSKIpfUlubU970FJY45mD3bQE7%2BtRGTHdHqixEMZJij%2Bhzq%2FH2ahKqy6LjG37JaBBRU6gpPhNiktMiUM8GAEgtP0vabWWda5BwhpUS4Xjeaub9Hg7Bfr%2FQ4AfXLayCyEoN%2Biy3T8yi3VFrEzQj8cftO4oSofhrdbCr9CcWpThE102N25L&X-Amz-Signature=0d4ffc22fed9b25fd65a629e05684ae87eea08a2055bf236e23e2a834e293513&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNWBNPQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBI%2FwqeGxQdOn5YMaDvoNe%2B9x4MIbURmjo20%2BX5%2Fcqe8AiEAuHT7KQ%2F%2B%2F86w4Yz2iY4VvqgVCh2tkhDWnIpagzZvI%2BUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwOxnqWF90GvZaw3CrcA5IkYkRDgnpDjWUZg0GskWs6GBIuixIa1V8%2FREcGFwdjsRBPbJEuZOQuQ6LKnteZBtrijCAYmBj%2FKfZas5rFYBBwd5vgCr0ILg5%2B%2BSzIk547sB3skZb6PMb5rKuK2bNZnZDRn0Q0S6iZ0WsAtLFCjwRqfedp1woTEbYEJPWbL%2FVtDqUP6Iz4WfQ2vudlFmsSlgYg75UbTD3JRZJdnoxpknkiSpmH8lbC4gys02o4oYqm0urStvVVfj6izcZhVU7fW5MR5Q8iru2Y7DwgcP3Bo7K6YlLu2PCQ1g66ojBT95yNhgyuGEOrxgYAy5gVGNxuEGfyrM8vVuIlhxxdIQsQ2kIU0XwXS7YmPu62sNicwpG%2F8BIdSpjzkLfsdeUq%2FJmV%2Bb3%2BHWXfOdZuc1dnxp6Zk5MIXDLIS4WUsilVUuWTemj%2FWSLI5SFK7NkHsfLKJu39Om5Wm7BMuf0N5Lt00AVe2%2BBhAzj4ubFhxTGk%2BFsImEJT3kvNX65JDdgZ7ZaXX0GAH3ziXavyPE82Yi3QXteuVYc4G5IcZbGq1HupJIwfk9WRjPDxkDypRna4OcOM1cxI%2FdQCrbTTWl94fopAejv3vB8IAZLkFcpV4LcJHrYPnNGV1YTApaHkScJlqzWoMKzI278GOqUB5lOe7Y%2FPXK%2FrZ0Mxi6CeGeqwItprDC8ppaQ42zAMNN0uSKIpfUlubU970FJY45mD3bQE7%2BtRGTHdHqixEMZJij%2Bhzq%2FH2ahKqy6LjG37JaBBRU6gpPhNiktMiUM8GAEgtP0vabWWda5BwhpUS4Xjeaub9Hg7Bfr%2FQ4AfXLayCyEoN%2Biy3T8yi3VFrEzQj8cftO4oSofhrdbCr9CcWpThE102N25L&X-Amz-Signature=891059c8adb292bd792f5b5e86621d8640a8b258658f617a986869b448729e53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHQ3ZXS%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICTrK%2FpocRepI%2FoRFC6YI584tFi%2BvOC5PYcB%2Bq%2BaYX4WAiEAyPDI%2BjJESbDT0j%2Bjx6iBY0bJGeNHPjCaPIcGLmvShF0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJGqSCmsF%2FPyK%2FgsircA5k7GRhjRFqtx3R6GcR655azLVYWQc0ZcrnsSwOZ3OUUJ%2FcxN%2BlWSPRZRpny9gy7m2QCKpfFi8Vk7aavAS3sm94plMLxJlqG17Z3idf%2F7NZh36qNYY8XAqf%2Ba1cHimUm7tiJIXm568h4%2Fl5%2BfFAnYlBy14pxgI66ig7z0vUmuOpHySmciRwxWz6jHX6xGLyjW%2FxTKElB1WYk7vCgUEtSX4wihCIjtWpKhYWjvyHEiUo9JKiyak7qke9XfDrYQwIwtVjvz70r%2Bqe%2B%2FdkExTf86fEJI8Z3PN6dJgA%2FEU%2F1KNQBAfS9vbqG1DqbRNtGJ5Hv%2F26gE8HNdfasAeklpzeTCGA65T%2Bheas7Ny%2BmgfpyBRubzQe%2BA5%2BSnt4lX4mAdrJWVHvtG6jOmgW24KnGjImiTHTgMFt0v61Bei9Mx1Df0XEmRk9t1hPi3HgrZFpm7btj4s1J6DV95K%2BwLE3oTsj2aiJBznn7lFv9Vmk8kB6Ipa29W6uToBskuvoHZvan0PJXwQ8e9vF7JjxTNBOirEVEoiPAvV4Fb4R9tZHcDpgQ2DIXlY6lAckbqj2ZoO%2F7ZS8mKx99SLBCBrmyx3swGdBGhzh2ObA%2BgKpYVEZopbsross40MBHQ9%2FpPOtCAHh5MJ%2FI278GOqUBB44dOLQlMMWSW7aAYbRL%2B3GfJxbVnc83UZR7fKKmTyyS2IAyZk7opZwLTn%2B0ZeOuInSrkRDlUBJVN3UKgeiL4tO5r6FAjolabqAlnk%2Fp5dfO8fcfuvJ4ltv6Y6NhOMeR2kQF2nwINnSIK7D3dvItq6AHZdyPA2yjOzRirjiEJ0gKtCns6NYrTXiNVRyM6jGGk0s2EfO3oAs069B3VoSi%2F%2FFxCYR2&X-Amz-Signature=cd9490059e7546b9e8443ffa07b7f09363720571d63f2eeb106277caa19b8901&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJ6JAYF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJFMEMCH3ZbQCYJk%2BlMPFOz9UfbBshokVCH9uVLcfZ9aiUVSCYCIF7%2BE8qPxqGFPOdlRJZh1XjQPHRnKQ6O9GoeijLlp6QXKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTHbH55TplwzwLHkMq3AMQB5YHTjenuiwwNgokJKjXgodLGN0SRNtAsIjbq%2Fj%2BtgXXwT98Ayci03KL0tR%2BEmx2epyc1%2BiQ7hS0eA0UL88UwFAZVl4BKB1u4Pb6OQo0Xn9yeVNculydJF%2BOcfdbk%2Bf4ywE5C99JNcvjjtK26NBa1r%2BgSEugxYXVtr4wbAblZ9fKNXtCX4P%2BbKR%2FIgS9oc8FDAKighXnLHoR%2FaCA0d9RGI4cZdiqgQ0Fmd5opbjh%2Fxo%2BNiSZhT3eXrJv2ilU4doSFF1bu%2FYbdH9EpEkINLZCs9VAI0DW7OMUiP9v7uMJYycKKZiTKgpXY6H9amfP95Q5VvIwoSeXaTGHX1Ed2pzNJxIQDbIG3vTfWBi9VcSYj0cWkWoL2gGIIOzTrxXoEM0ZgYMV1VZ3PYQ708%2Ft5C1XYQmqLCPdX2pkGHDu5ukOocF7aaHfgFhDIcI4FWqu%2BFR34sYuFHdTMiPDXvIeIfAtge%2FIIrtGkUZ23lP7MJYRUUeYZ2mtD%2B3QNrmu5DHWTs%2FZtRH02%2F1QLnyzZM7GP9Y49%2BfOnB%2FQd5HKQvddC7HoGZaawcO%2FB3wiFjrDnaA4Erzaq0umXKIcIPbR5QcxqPFoBgS3iD2KhDILD2wL0AvdWtgQKge%2BYaW0Nob49jCIydu%2FBjqnAUeOfqDIecQaeF5f4ZkDprh0tQ7ocHHLS20qVqazacsLIzYHuXv59DZICXN8zR7Qk1tCOBaktOfOGPkG89YobcOXbTTKkR292qPStT1R0IUOKgTUbKhXFDnXVkMG7W0po6SWFskHjyHlJ0bhD5iskJckrdsqA7qGQpDfCp2Wpejkqq5swk6sclotpduWApK2RLCfyG64KEqeQQaLxlALQgVVDDAem9LA&X-Amz-Signature=3c7383cb84f9072ff8009d20d9464577df069e23174dcab1c7807983091306a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNWBNPQ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBI%2FwqeGxQdOn5YMaDvoNe%2B9x4MIbURmjo20%2BX5%2Fcqe8AiEAuHT7KQ%2F%2B%2F86w4Yz2iY4VvqgVCh2tkhDWnIpagzZvI%2BUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwOxnqWF90GvZaw3CrcA5IkYkRDgnpDjWUZg0GskWs6GBIuixIa1V8%2FREcGFwdjsRBPbJEuZOQuQ6LKnteZBtrijCAYmBj%2FKfZas5rFYBBwd5vgCr0ILg5%2B%2BSzIk547sB3skZb6PMb5rKuK2bNZnZDRn0Q0S6iZ0WsAtLFCjwRqfedp1woTEbYEJPWbL%2FVtDqUP6Iz4WfQ2vudlFmsSlgYg75UbTD3JRZJdnoxpknkiSpmH8lbC4gys02o4oYqm0urStvVVfj6izcZhVU7fW5MR5Q8iru2Y7DwgcP3Bo7K6YlLu2PCQ1g66ojBT95yNhgyuGEOrxgYAy5gVGNxuEGfyrM8vVuIlhxxdIQsQ2kIU0XwXS7YmPu62sNicwpG%2F8BIdSpjzkLfsdeUq%2FJmV%2Bb3%2BHWXfOdZuc1dnxp6Zk5MIXDLIS4WUsilVUuWTemj%2FWSLI5SFK7NkHsfLKJu39Om5Wm7BMuf0N5Lt00AVe2%2BBhAzj4ubFhxTGk%2BFsImEJT3kvNX65JDdgZ7ZaXX0GAH3ziXavyPE82Yi3QXteuVYc4G5IcZbGq1HupJIwfk9WRjPDxkDypRna4OcOM1cxI%2FdQCrbTTWl94fopAejv3vB8IAZLkFcpV4LcJHrYPnNGV1YTApaHkScJlqzWoMKzI278GOqUB5lOe7Y%2FPXK%2FrZ0Mxi6CeGeqwItprDC8ppaQ42zAMNN0uSKIpfUlubU970FJY45mD3bQE7%2BtRGTHdHqixEMZJij%2Bhzq%2FH2ahKqy6LjG37JaBBRU6gpPhNiktMiUM8GAEgtP0vabWWda5BwhpUS4Xjeaub9Hg7Bfr%2FQ4AfXLayCyEoN%2Biy3T8yi3VFrEzQj8cftO4oSofhrdbCr9CcWpThE102N25L&X-Amz-Signature=4a5e770eecbe9917293957de3c35c9b3e8f5da23c55b0afc29ca39576fe1d64e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
