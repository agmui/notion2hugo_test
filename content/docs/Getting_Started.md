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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IAWOZFV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMF2aanqIyT9DW0v2RKcLmLl%2Flw4tYLYQ0i9XpjfgXAAiBcjp%2B%2B3GpJYaw9P0o80%2B2AjjSnN2BFIAbSx%2FmZtWpwtCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F7Ww7qiy%2FY326xhVKtwDb3NFCbDCFR6qhLjgaXcswnk8LAcvkPW5iiC4HMnjellsKhVs04k6scoFoI4z4bbNmxTt2hzRm%2BWrrzJzmxxOXDDodsqLSzF9kWV4SuyijjJLMvm7yJ5833J5KrVOyTBgzx2DeEgEAw2sNoH2qwPq7CRgmeuEyqNISNiwUNKlmYO3iMAyic3zZBBzHmW%2BG55GMspPi8tAIAPdlAZAVU8QEOPBuHsqsX%2FKuSx9BuyQOvbpIGWPCoq5ypumNy5%2B9dMFwAHWkvPq%2BvscllALzSeSBNouz3hliMbnqtoC7EEzKDUwy2LV0RyZIJum3vhCxhgDVbuta6Y3WD%2BWth32nJqr0KF29BC3LUCnE%2For8QshQH8AZrQZUhmIHvT96dMK3oTCBON3CCVAK0GD8B6m0WttaCpJu64a7phn1vjOaY3iqKmw1PAj%2BzPnWWxVIzrFjO2vRNWp3gXMxNY%2BF927EtPSEI%2FADRnu4DF6eQPcU24pVxCCmFooL3xMmnnhB8o3h%2FNk%2B%2FBLhd3RlB%2BU9j4bLV%2BTtgJ1uqJhS8kXkQJKgfWRya6VQuqTjyON4UNvDBu8QpTcP5AeQ%2FENNGthm9P4VUh9lUHwDrewJROCEsLVqifFW3lEpwamSAuGjq0hP%2BAw%2FrmYvgY6pgHTNOE11nRlGnV7IT%2Bg7JwSK4rZCTSujWeZEJNIwPfFrbUr%2FTo2qHUV8AscSXTuM1k6PQyT9FKzjcH%2BvIdhMJmYHp7wiWnCm1da7o7ZarR%2BKwZyfcGmJyJ1NuIuWbdulhZP80YjRsx3uAjcA%2BwzTkTh07Gyb0woCm3Aje8RiFed2W0iKrEaLFodno97XgZZ9189FN%2B7N18%2BFZVFdeQAGqWrZ2PPufk9&X-Amz-Signature=3bb2e1f0bfc5117998ea22d5084e1c30aa1003009b62d84e8d3e7ebeb30875c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IAWOZFV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMF2aanqIyT9DW0v2RKcLmLl%2Flw4tYLYQ0i9XpjfgXAAiBcjp%2B%2B3GpJYaw9P0o80%2B2AjjSnN2BFIAbSx%2FmZtWpwtCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F7Ww7qiy%2FY326xhVKtwDb3NFCbDCFR6qhLjgaXcswnk8LAcvkPW5iiC4HMnjellsKhVs04k6scoFoI4z4bbNmxTt2hzRm%2BWrrzJzmxxOXDDodsqLSzF9kWV4SuyijjJLMvm7yJ5833J5KrVOyTBgzx2DeEgEAw2sNoH2qwPq7CRgmeuEyqNISNiwUNKlmYO3iMAyic3zZBBzHmW%2BG55GMspPi8tAIAPdlAZAVU8QEOPBuHsqsX%2FKuSx9BuyQOvbpIGWPCoq5ypumNy5%2B9dMFwAHWkvPq%2BvscllALzSeSBNouz3hliMbnqtoC7EEzKDUwy2LV0RyZIJum3vhCxhgDVbuta6Y3WD%2BWth32nJqr0KF29BC3LUCnE%2For8QshQH8AZrQZUhmIHvT96dMK3oTCBON3CCVAK0GD8B6m0WttaCpJu64a7phn1vjOaY3iqKmw1PAj%2BzPnWWxVIzrFjO2vRNWp3gXMxNY%2BF927EtPSEI%2FADRnu4DF6eQPcU24pVxCCmFooL3xMmnnhB8o3h%2FNk%2B%2FBLhd3RlB%2BU9j4bLV%2BTtgJ1uqJhS8kXkQJKgfWRya6VQuqTjyON4UNvDBu8QpTcP5AeQ%2FENNGthm9P4VUh9lUHwDrewJROCEsLVqifFW3lEpwamSAuGjq0hP%2BAw%2FrmYvgY6pgHTNOE11nRlGnV7IT%2Bg7JwSK4rZCTSujWeZEJNIwPfFrbUr%2FTo2qHUV8AscSXTuM1k6PQyT9FKzjcH%2BvIdhMJmYHp7wiWnCm1da7o7ZarR%2BKwZyfcGmJyJ1NuIuWbdulhZP80YjRsx3uAjcA%2BwzTkTh07Gyb0woCm3Aje8RiFed2W0iKrEaLFodno97XgZZ9189FN%2B7N18%2BFZVFdeQAGqWrZ2PPufk9&X-Amz-Signature=d418914768e57c04dad404d559379079c8d822614f82739ef8441de2890759b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMXURK5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3LsIYHJ8cJnepdRo3Wi%2FB4T6DlwA5Ppy5O24xrvvxNAiBKsLwr3iq47BiNwyUqqKb9osW15eQmTMifPmgMbvOCXyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tU4HdUi6ohGohKZKtwDpmVL5slI1EyRy02lsVmCThxhB%2BDeWFOINhd%2FDYLQIuezZ7QXfRDEKOs8m6jF7XBK3x4KCCT9RCI8vcrBcXzmg6N8MP5VsbmkjDtWQe7tE1L5pyb8nzMVI9NQ8KkAMvHOAxEJAr4LjOz6khvcRQxqzuvT%2BwpM0VfLVQYcgyufLHbpwGPgHBA2ZM3MzUNxAAV4TmwHdrHBm9OuuRWMrwkMBmZF5HHdGPJ1a6s5a66SWoBkLYR0TnaOj4rtjioz7FPNoOU6vl7wZPkG%2FrbsTsFmwkXhjJF3JV%2BgnoKXkUapYTL9gnHBhJnH3%2FO2Gda69z0JHIY%2BNYytpWzGtR4jHlT9hZ%2FQqYzHxcmsSGYBP0wgTVipgHcDaRG5LAgBUC9pHfTnCKt0%2F1lCQczvkWZNguGSt3dRwJS8Ef7wpwA2TWk%2FJ58Su8W3%2BVE52D%2FJAbgH8XHIdcA8iOY2%2FZMqpDR%2Bk1Gh5NsMghB1%2FtEpL4Z8StxxsUVJj%2F12HUX2pzBenE0balKlSQ%2FUU8Gfhw4EvBotLJXxDhyLPFfaT5uLEI1y5He5s%2B3WGY4t9m34dMHYGytbIwL%2BUY5ZRpXBJ8G8Amct%2FpUyvlZOsHR9X2YNSRLq1D5zwWVanLCYfpyqDgB71zswjLqYvgY6pgF5GttLywFD9%2BFN2uNcG3Mvz3pE%2FrLKRtXVqFrmL2PeQ18NSufz9419djYQN4jBYKWR%2FI4gxe5vJtc%2F72ewxglqzI7qyl0yIfGEWZGGPUeZtInqAr9edPe9VFamt9hsqZpvaEOcTgtRUzF1KvbKsHhV7rha3MQTBZWm2AtyXOBUn8C0TgZVmAmA2z6TF%2FJNT4EdApWhZ%2FPWo4NMstdJ%2BEB6w2%2Bc8txd&X-Amz-Signature=e42a09d43d194f72f149ae4cc0c2345843c48fc204570c1e3ba6060bd3295e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGMNHS5V%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAa03JeT5NTwcWv4SEGV7ow9Va%2FLuk9DbWIkK7e6uUBBAiAL5BshUiUL%2B%2FJJ3DztcOjOs%2B8HGWW1kybAGK1c0jDdrCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlooado4mUs%2FpWHWEKtwD6D3N9%2F65eijTVtN0Oyuulqx9ww%2BJX9kScMGyDrk64R4NOZMaQVz0T1mOGD7pNKg5uN8IT6QlHfA496uYKFyCe30TJ7aRg9FrWwzM4AbnJthkwE1EB%2B0MLiBIdEaDTCd34VlxJIruJhH%2BTDwD0BGHOA7D7E9gQfL6diZzfkvgsTAwSaj7Q6srAn5jNp0kjXoow4kf2bGcjIrZELvcNT%2B54LNM6ly4wkhV49%2BpIv1I6I3o4eCgZHL8Xg7exX91v71cqI%2Fcpn%2FJjW5s86g4t%2BswH3OibC6mXi9NdwEjdunSpp2V6lZcRgiwNAyDvWspmzgr4x%2BdJ5XnLLS1mqBxnXhhJHO3RhCrJywu7p2rawOJSh4AmqtwecpbHmPufyPjBy1EKbvoJ3jmnNexMSQlOfoxV4o%2BiH2JWvSs8RmwzwuxNdsFA3b%2BBxfK6njzJZtEPHTs8q%2BRWhmSYX4MESjRxKdGvRJPibsy4GLoN6xEArt3RFZ0LdDvgBcCwZ0Th4tF2WxznTTwRcqXWh5BF1kg0W0JI1PWcTYCGnxZyoHO8XFIrMO987X0xdsyxjHt0XzSwurNsUpbQVUGmUyxKkxnFiPl%2Fa9d%2BvCKjQlC%2B0%2FBZ4YSrs9Dp6N0rumilKjjxsswoLqYvgY6pgHKBF4q%2Bp1sGj7uxZgWfViQ8Q9zIFDucEMh2D4Ax9l7NO47hbcX8VMyzPo7OjA7KJ7jSRykvin%2FVp8OB9GfUojoZ1iKjklDuw2T%2Fe9BAaLRKrVzDjjDkdY3PuV1Ohw2xCMOAjMf9DZirNE%2Fl72CQIXaBepMl3YYIEvrWvq5ExY0yAUe27RJ3Uu5ysJG%2FQcjcxa6XF8SlKf1rhOr8D94%2FHrcc8aNn90V&X-Amz-Signature=c399c94c6b19b682e11f95067b8141a626b09149fdd987fd256b6fb751bf8d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IAWOZFV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMF2aanqIyT9DW0v2RKcLmLl%2Flw4tYLYQ0i9XpjfgXAAiBcjp%2B%2B3GpJYaw9P0o80%2B2AjjSnN2BFIAbSx%2FmZtWpwtCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F7Ww7qiy%2FY326xhVKtwDb3NFCbDCFR6qhLjgaXcswnk8LAcvkPW5iiC4HMnjellsKhVs04k6scoFoI4z4bbNmxTt2hzRm%2BWrrzJzmxxOXDDodsqLSzF9kWV4SuyijjJLMvm7yJ5833J5KrVOyTBgzx2DeEgEAw2sNoH2qwPq7CRgmeuEyqNISNiwUNKlmYO3iMAyic3zZBBzHmW%2BG55GMspPi8tAIAPdlAZAVU8QEOPBuHsqsX%2FKuSx9BuyQOvbpIGWPCoq5ypumNy5%2B9dMFwAHWkvPq%2BvscllALzSeSBNouz3hliMbnqtoC7EEzKDUwy2LV0RyZIJum3vhCxhgDVbuta6Y3WD%2BWth32nJqr0KF29BC3LUCnE%2For8QshQH8AZrQZUhmIHvT96dMK3oTCBON3CCVAK0GD8B6m0WttaCpJu64a7phn1vjOaY3iqKmw1PAj%2BzPnWWxVIzrFjO2vRNWp3gXMxNY%2BF927EtPSEI%2FADRnu4DF6eQPcU24pVxCCmFooL3xMmnnhB8o3h%2FNk%2B%2FBLhd3RlB%2BU9j4bLV%2BTtgJ1uqJhS8kXkQJKgfWRya6VQuqTjyON4UNvDBu8QpTcP5AeQ%2FENNGthm9P4VUh9lUHwDrewJROCEsLVqifFW3lEpwamSAuGjq0hP%2BAw%2FrmYvgY6pgHTNOE11nRlGnV7IT%2Bg7JwSK4rZCTSujWeZEJNIwPfFrbUr%2FTo2qHUV8AscSXTuM1k6PQyT9FKzjcH%2BvIdhMJmYHp7wiWnCm1da7o7ZarR%2BKwZyfcGmJyJ1NuIuWbdulhZP80YjRsx3uAjcA%2BwzTkTh07Gyb0woCm3Aje8RiFed2W0iKrEaLFodno97XgZZ9189FN%2B7N18%2BFZVFdeQAGqWrZ2PPufk9&X-Amz-Signature=66ebf8e3f43aaacaaf9fe199d250460d540ece787c6299a32529c551488807f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
