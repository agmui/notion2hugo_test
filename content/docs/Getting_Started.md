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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2VJGT4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIB9G%2F5erabUFJQUit4kK1d8yoSa0jONK%2BJJut8VghxBUAiEAwwCExKsYO%2Bu7iEAlHqBKWJX0gOrwvnusrQbKZCmp%2FQwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLK0wuXH0FZQB75pkCrcA4OrrZuwHHatRtDLuHn%2FITDNzToQZlJrJWbHM83TbZ6sMR62J4x51ZQif5pUJV9BHywBizcgkJLQdjbnoggOqRy2LDxrYNpxz0CXC3qfeC4OoT4uLxl6e5tdxBTz647kFCBGDyiavl0CwYisjdEiBiy2wIj%2BjCD92K3SkKSj8H70RPLlURcPP7gddjRbA0YWIxdGblb8fLCHkAKwKpCCuDiDA5AKesb3ZDUremNbYN1HpiCg5pB9OQK32HdCbgoX0k3VQMQqSOZxbsDj7y3UTcQ%2B8%2Bgl6bhgVy21T8e%2B2fUjtjirPeZ40hIFvspdc0qbq4yZk2bp1OMZyt7im13hTfDdEXb7s0FDiM5%2FI2ShZqT%2BIB01wih5QQEN7E3o367F%2FdQWlx9SrWWFirWsjEMRVgBxMBSDfNIAa2QhsYm6U80b1WXTZmAMw7O7GcKUYsj11FJ0ThTtCwQmOKcG2DcErTClqdr09jL%2BkxMiWoMTF7q3NN0CjsgmgSXzUeaMr2P8Opnk76Bw3WinNV4r47NN9xJPuFkURqvN7veJtqlk%2FKqG7jmdQPqNt7kMEPEec56OKg%2Bod6DqDcWjxfS17wjDZVRQ%2F4J9pGyCtkp%2FteWL3yoUmOzvN5TkvEH2Idw2MLiG1b8GOqUBjlgjC%2BoGKMNcLv2uXTuZ5ozxBI%2FIz9FnzwVe9CGyauHlK94UinK%2BalJinXipVd9UtiOhr7X8dGP8leopHGCwv%2FF0YUasJVRSkpAM8pI7ikp72ENtePvOfvsw4dAggIi1pBD2lsXaXXF2j1jdFnuYrE4nFxFmt7GmPWspVQXn6jCvQnS9Mqkw4b6bIaCg47xxVJ7GQDhKNUvH8MUmDCE2xtwyumr%2F&X-Amz-Signature=b63429571fef72c08c5137ef69ad125ba4798b7f25694dad56f5bbde4c933d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2VJGT4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIB9G%2F5erabUFJQUit4kK1d8yoSa0jONK%2BJJut8VghxBUAiEAwwCExKsYO%2Bu7iEAlHqBKWJX0gOrwvnusrQbKZCmp%2FQwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLK0wuXH0FZQB75pkCrcA4OrrZuwHHatRtDLuHn%2FITDNzToQZlJrJWbHM83TbZ6sMR62J4x51ZQif5pUJV9BHywBizcgkJLQdjbnoggOqRy2LDxrYNpxz0CXC3qfeC4OoT4uLxl6e5tdxBTz647kFCBGDyiavl0CwYisjdEiBiy2wIj%2BjCD92K3SkKSj8H70RPLlURcPP7gddjRbA0YWIxdGblb8fLCHkAKwKpCCuDiDA5AKesb3ZDUremNbYN1HpiCg5pB9OQK32HdCbgoX0k3VQMQqSOZxbsDj7y3UTcQ%2B8%2Bgl6bhgVy21T8e%2B2fUjtjirPeZ40hIFvspdc0qbq4yZk2bp1OMZyt7im13hTfDdEXb7s0FDiM5%2FI2ShZqT%2BIB01wih5QQEN7E3o367F%2FdQWlx9SrWWFirWsjEMRVgBxMBSDfNIAa2QhsYm6U80b1WXTZmAMw7O7GcKUYsj11FJ0ThTtCwQmOKcG2DcErTClqdr09jL%2BkxMiWoMTF7q3NN0CjsgmgSXzUeaMr2P8Opnk76Bw3WinNV4r47NN9xJPuFkURqvN7veJtqlk%2FKqG7jmdQPqNt7kMEPEec56OKg%2Bod6DqDcWjxfS17wjDZVRQ%2F4J9pGyCtkp%2FteWL3yoUmOzvN5TkvEH2Idw2MLiG1b8GOqUBjlgjC%2BoGKMNcLv2uXTuZ5ozxBI%2FIz9FnzwVe9CGyauHlK94UinK%2BalJinXipVd9UtiOhr7X8dGP8leopHGCwv%2FF0YUasJVRSkpAM8pI7ikp72ENtePvOfvsw4dAggIi1pBD2lsXaXXF2j1jdFnuYrE4nFxFmt7GmPWspVQXn6jCvQnS9Mqkw4b6bIaCg47xxVJ7GQDhKNUvH8MUmDCE2xtwyumr%2F&X-Amz-Signature=c6ae4be03ebe9562a56d4603ee4de8aabe786abb51d849241f572064ec0f6c50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGHD47U6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCSGOVPOPNJWEMoQCtufI%2B3j6%2FeydOUiK3XqaTbNH3SzAIhAIGSP3oVZ02ft3TOHYVvvxsCZWzfC24tL1n8AezdaVKwKv8DCHkQABoMNjM3NDIzMTgzODA1Igyd6lgDpUljqxLAilkq3ANZowe1idc3sy79agnh3rWlXqUWZQCAVaV2YY1AFBeYTIe6YM8Y%2BTUHgI%2FXjT1CuEDTWaR7mvFOrP88GNRh5kmOy5%2BzKnEY22jnNGpOL7zJXBGe%2BdPANmU6rVwI0z8dDqXf38hBgRVSSHP%2BRLGhe0h4B6rE11c7FToj6BVUVcy1QdNqj9d3n3lTTCITO0ESRZ9GKInNQXcgyghmW4LZdkq67duLIX%2Fht%2Ber%2FnKkDqXdrwPyIHOAYK79eWQAuMD%2F943OAWQ%2Fjq8cEvF7jTASYK8D0nub69BUtpD6zQ53GFyGil8i8G%2FvxlwyDLhtDpH3TBCavcXbZUnCg9e9tJILrrMKwLxI0032Tyny3eR%2FWtio9542odQHkhfeDyICza81HG1yXZrqjHoZz8JH%2FcWD%2FqJOeTkLeN8KIlEkTBVZKw96kRKVeVFQ8FcKSSs5cylYjU7haOmqBY5XLnDsKB%2BoNWDc%2Fg4yVtj9MqBvX2ABEwG0KadJ2YCtSmh3u302ENBwWaOiM6r%2F0%2FW81eiHU1EtYMyfaZp4Thy4Bcv%2BMqBKVWk298PPN3N3AU2aYnK5kQq39GMTggGT2e0qV0zI5Pq5W3Va55Dbwti9A%2BbQnBR5ppvdxQEi%2Fw%2FkGqltPrStMjDShtW%2FBjqkAR4ujXqQcfvZwU5K%2Fs7AAdVxV0K3VOqmN6Umoswzq%2FSSoVblrM1MOfQ1iYb8maKIL37L66%2F5%2BLEqocI3SMJ5Wr17ykQ1sXS8t3TpSAjvIr5wLLXepr2HI8izXouModSSIc7TvPazYjBZPTM5zaVfoH5J6rgpPC9QnSyXyUv%2FBys4qeUiR%2BMEZmErAyNSoq0X7lFi8YpmLlArdZ8tYN%2FjGGC4%2F4a5&X-Amz-Signature=f3c2f212f4b98f509651dbd4919b2541eee70096acb181980759875a44630f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCUIRLXS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIBIJPjE0u%2BdAsdGexd3VNuwkv2bkYj78SG%2B7jnbKuW5%2BAiAGEbOFE%2BILAl4A6AhwM08BG7DAtPgXyl4euMM2XSNbLyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM3lCWiE67P%2FivZ7xgKtwDKuTKP0u%2FBaMQB8d3%2B0XaFgGmm5q%2BUMT2IjRa8%2B0aAr6lmtqayvUaGNx87PGb18gxxxGKnEDvZxAVlK09KvX%2BMEpc9P269RaLSgDt4d1bH9z9PXT5sbfjpHH95DdGRdo0eb19LAZuSgfja5TL8c2wwc6aJO%2Bobzz7VcKdP3Yl0Hq7%2F3P9dc2Inl%2FQRq7X243YRWUUMBfgyf7EBI3CI%2BGJRrEYAEw8AiwC74gbz7OblgJAKXp3Mx8TsMZae%2FmDeWmNnj5l%2FhawWM4c9pCRUD5esHHETc04BAI2JbO9CQKJfdg4oi7rOd32%2FTOtbS%2Fy6rUeCZggiAoyDcyKLSnnVx3CfuoQoEpEzWj5voKML8gSHksthRyhQXYVN%2Fj5xIQVX0i1A38y4vsWVvOGlEyRcqTkqi2ZZ9YkGGLCBMin1gDmhe%2BCWfV9mpGthmIS9IgpjbO%2BeyEeI5dPlV2rS0ckKh9wdbxIvhQkJTDUDrAe32Wl%2BoDYGIx2J9V6Xwcgzri%2B3GYw8RWXFxWh2RSQ4fmjNS%2Fw%2Bk37yWcIOITecirmODSA3Cp57p17fNkQ3iskkaFW0NDTl%2Fp7VCGE2r9e3Gd4GstjjZeiM3pP1uE9h5vO7loNyEcQAuWHDrWQffUlajEwg4fVvwY6pgFC4nCaIAQkFbZaLACaccr3ZgdC1BqKm6HfkwKm%2BMKRFeEz5QkyTJa6RaRds9R6nzJ%2FESjYKYugyhAHSgRGdXgE77rcXXB3IW0oDq%2BQ5PF4ipDrDpfWaeAtaVCX8dpg0JU39hJw%2BMHk4y1anUgH3zlujRWEBqLQd6Cx9I2BstMz%2FrR9Ivq3S%2BruLGztGPtIQNW3zMWSS2Lx41G0pr%2FScU1BwPY5mWzo&X-Amz-Signature=a504b0c6a8d3bbf0995d6294709600bc3e466e3aed9273b708746eaa10b17f46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV2VJGT4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIB9G%2F5erabUFJQUit4kK1d8yoSa0jONK%2BJJut8VghxBUAiEAwwCExKsYO%2Bu7iEAlHqBKWJX0gOrwvnusrQbKZCmp%2FQwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLK0wuXH0FZQB75pkCrcA4OrrZuwHHatRtDLuHn%2FITDNzToQZlJrJWbHM83TbZ6sMR62J4x51ZQif5pUJV9BHywBizcgkJLQdjbnoggOqRy2LDxrYNpxz0CXC3qfeC4OoT4uLxl6e5tdxBTz647kFCBGDyiavl0CwYisjdEiBiy2wIj%2BjCD92K3SkKSj8H70RPLlURcPP7gddjRbA0YWIxdGblb8fLCHkAKwKpCCuDiDA5AKesb3ZDUremNbYN1HpiCg5pB9OQK32HdCbgoX0k3VQMQqSOZxbsDj7y3UTcQ%2B8%2Bgl6bhgVy21T8e%2B2fUjtjirPeZ40hIFvspdc0qbq4yZk2bp1OMZyt7im13hTfDdEXb7s0FDiM5%2FI2ShZqT%2BIB01wih5QQEN7E3o367F%2FdQWlx9SrWWFirWsjEMRVgBxMBSDfNIAa2QhsYm6U80b1WXTZmAMw7O7GcKUYsj11FJ0ThTtCwQmOKcG2DcErTClqdr09jL%2BkxMiWoMTF7q3NN0CjsgmgSXzUeaMr2P8Opnk76Bw3WinNV4r47NN9xJPuFkURqvN7veJtqlk%2FKqG7jmdQPqNt7kMEPEec56OKg%2Bod6DqDcWjxfS17wjDZVRQ%2F4J9pGyCtkp%2FteWL3yoUmOzvN5TkvEH2Idw2MLiG1b8GOqUBjlgjC%2BoGKMNcLv2uXTuZ5ozxBI%2FIz9FnzwVe9CGyauHlK94UinK%2BalJinXipVd9UtiOhr7X8dGP8leopHGCwv%2FF0YUasJVRSkpAM8pI7ikp72ENtePvOfvsw4dAggIi1pBD2lsXaXXF2j1jdFnuYrE4nFxFmt7GmPWspVQXn6jCvQnS9Mqkw4b6bIaCg47xxVJ7GQDhKNUvH8MUmDCE2xtwyumr%2F&X-Amz-Signature=34cd28dc02617f9d26756b54105c08e2dc93ebbac11fca803b260dbed064b64a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
