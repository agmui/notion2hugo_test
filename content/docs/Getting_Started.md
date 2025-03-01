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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KGD2V5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFAhVSg9umvx%2FjWah7pfYkZMt%2FmK0%2FFGq7yfz%2BP2GNW4AiAiSYf8VF9BSOCGKn7PRj%2BH6uDjuHD0vZgD3f5qIN5%2FNCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmop5i4dnCGZedMaKtwDEiGDWz2S8XPIlJ3X6r5WNutSoCOU795rWbnXtvOQst95Qbk5UhmTfUR75DDAL172t9jspwcPIZOGm4sIz8g9QtxOV6JetCCnU2iwcr06%2BiKjSeEZoQo8dL5GmGT7gk2UyvmZflbp0IYO2iYakjr485glL0HWDOeTcqR3wPh3Lr1TCZW4WDd%2FcOBPSixHzwlmh27y0fy7XKdUxGHEG85pUynYsvNICu9nw42hw0UJRbn1ZWMjdmOnfCT9hZKltSJN4QA1H%2Bgsk9LynEUKyS8um9WGVYHqCllB3m2qEyjtzAD57hwJVgLLZ0v8Yg1tfyRW6DCp7BVY9v6fAZh49gqvbn2GHJF95IPZ9Qb7i9AK%2Fv7sy5zOxHumR0fsQuS9vvldiqLFbMihO6toX2xbLqjOKiW%2B9aO0aoH81AlTo80%2BX6KSLBWOSz0to0Deyrralqw45hKeCQZr2GZUozN0bG06pk%2F3XgP%2FeKALrJwgKSpsaVC%2F1lemLXKSqL4xVct5PY3P89yNAKGiyLv9wqZq4PNsd00BFjf8pjHh%2Fw72Vu%2BF4W%2BScCZkAIdbK8gpoSLmkoe2D0hKlk0F5UtjI9T2EnZ19P8Gob6NuCyaNcRvet3SIEEKbjgmgiW195Bq3cgwv5CKvgY6pgGVNoxSiV6yQII%2BLf9xSamkHhzAMlIdcD1eSH9RYcPxxvOxo8AEe0CCqd7gj5AxyohRVg1N96lV1GBZKtwTwthqI%2FNXczu3RJj15JjobTeQs0zJ9cLc8hqWNKZ%2BM9G8EZAKsNhsXAG0wyJQaFLl7ykv3qm5%2FzSzE%2BEBFohY3ST86wIfj%2Fsol9aWVhYwglg1dbsm22u5BBIN%2Bip2ix5cRc%2BXE%2FZ28BWr&X-Amz-Signature=47aae9e9957e4c2e6a2881ba7fa67a9e8e8d2a8a2b5df16fdb11055afcf81684&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KGD2V5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFAhVSg9umvx%2FjWah7pfYkZMt%2FmK0%2FFGq7yfz%2BP2GNW4AiAiSYf8VF9BSOCGKn7PRj%2BH6uDjuHD0vZgD3f5qIN5%2FNCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmop5i4dnCGZedMaKtwDEiGDWz2S8XPIlJ3X6r5WNutSoCOU795rWbnXtvOQst95Qbk5UhmTfUR75DDAL172t9jspwcPIZOGm4sIz8g9QtxOV6JetCCnU2iwcr06%2BiKjSeEZoQo8dL5GmGT7gk2UyvmZflbp0IYO2iYakjr485glL0HWDOeTcqR3wPh3Lr1TCZW4WDd%2FcOBPSixHzwlmh27y0fy7XKdUxGHEG85pUynYsvNICu9nw42hw0UJRbn1ZWMjdmOnfCT9hZKltSJN4QA1H%2Bgsk9LynEUKyS8um9WGVYHqCllB3m2qEyjtzAD57hwJVgLLZ0v8Yg1tfyRW6DCp7BVY9v6fAZh49gqvbn2GHJF95IPZ9Qb7i9AK%2Fv7sy5zOxHumR0fsQuS9vvldiqLFbMihO6toX2xbLqjOKiW%2B9aO0aoH81AlTo80%2BX6KSLBWOSz0to0Deyrralqw45hKeCQZr2GZUozN0bG06pk%2F3XgP%2FeKALrJwgKSpsaVC%2F1lemLXKSqL4xVct5PY3P89yNAKGiyLv9wqZq4PNsd00BFjf8pjHh%2Fw72Vu%2BF4W%2BScCZkAIdbK8gpoSLmkoe2D0hKlk0F5UtjI9T2EnZ19P8Gob6NuCyaNcRvet3SIEEKbjgmgiW195Bq3cgwv5CKvgY6pgGVNoxSiV6yQII%2BLf9xSamkHhzAMlIdcD1eSH9RYcPxxvOxo8AEe0CCqd7gj5AxyohRVg1N96lV1GBZKtwTwthqI%2FNXczu3RJj15JjobTeQs0zJ9cLc8hqWNKZ%2BM9G8EZAKsNhsXAG0wyJQaFLl7ykv3qm5%2FzSzE%2BEBFohY3ST86wIfj%2Fsol9aWVhYwglg1dbsm22u5BBIN%2Bip2ix5cRc%2BXE%2FZ28BWr&X-Amz-Signature=d1a1df2961c31d96b568a402239db7250220f28ec884c2c2ef5cacf87f47d4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQIWBAJW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC5prHe3I9IZI9pArqsuQ0NwryRBEC3ouxIUnPqrkktQAIhAI7cDiZmn5BuNNqOiMlq%2BhRTd2l0%2F%2FlABdaLvozgBiVfKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZYpLcG0DQZd8zqF4q3APVPv25B90I5jZw7tBM6plnbzDIwp%2FQdaGjWpjGRco9cjlHO%2BXru69uOQhyXaQjiSpxYfBVCwsa6e7iyBZApHnA9tUEk4jUM5FPZGnS1K40M15MOVVWqs60oEWdw%2FlNPQ4Ua7a%2FEatDF%2ByRvYp9Jzn2g7OIPQDsAh5DOYj1LQoh4PvuBDGJDqfMFSpqmMeA43QwJgFNJwUKPXzU3F7c6ys5GAf7eGD6aldvQ5UnNiBJ00OB1DdfSrMiR69PmGjCda%2Fljv7byxKDi6dpgP4JLL54QFf3nNbGpe4TutsE8i%2FsnzoXG%2F%2FfLO9WRccA1JFNyxhXde4qnzcaCKe0BPkGbLOFluQcoj5K9fGDa3e%2B6wgKn6h97rMAocoYKPJ3pPFPan3dRAWrASLV2c7rJWUfHJAvnSGY0BPXb%2Bt3gOeGuBggLC%2FDAxY9FSDV8dNQJiyPQA6QYtk%2BI%2BkwcT%2BpYgqlwV4h%2FMVzYHd5KGQuasrZpRjuehoGmuD5EORSWofMLv%2B%2BLZGtoZQg93xnnsaOp0f2qFXd9wGEaQQZgwrTGQ%2FYy2wVAA7EryjaeW6KZw9L9TXN2lwbkXHt1Io4x5wnQUi5bGRIJrZXZp3LAGEx1tzhXlsZsxNSdW9fk2htVjy%2B6zC0kIq%2BBjqkAXJahyLiNwStCioBRGpRh%2Fg234tz4rHfbgtnCAhhA%2Bg%2FKzXyeV0QtaQYXilI5xOp30LUfV5O3GpSm%2B7wz8OJ%2FhJ0vrbhADfuArvZ1M8J5%2FpryNQWUPEEgPRphQkabL%2BCGVjIdW6PaES1JvZ7mIQ2H6AG21JRNLD%2FnBrHpHLhSDLjdbNPQaixRph2ZexjPyaEsUwHyXuC5IOiIoeq5rsZRWAx%2FiRe&X-Amz-Signature=ac02fddfdba17d2704438e93a943fef8fa6b5b920cfdf8e8c374a265ad9db366&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYAOCBL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDcz044eMoaPpwzuT3AvZ1%2FuKafqRwM07HO1rtAKQC4fwIgM7bBICr7xWuoBuKR5sZWldx%2B5MB5UHiwY1UFBfhN3fAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmoBeaWbHMJBwWy5SrcAyoCggy6%2FfYZ6QehGdcfO%2F29RMEaNBf0a9WEl1njj0FPE4ed9DcV7Yw1gPzJ2dnIgDveCxdPsLZbFKzmyuu%2F3%2Fon6pOfqS1dVph6b2D8vT7VKD14%2BjRAITQeNEP6%2FJRHAWuIuecjmmgvq%2Bo5vrUm7GbDU9QsJJXdU7HKp%2BLzhi7ym8jPDMDnklKkL0IeKRGeFeDAj4lYLJ8aSi6Wh5V0sGINRaronOUi8GQ6Ek4bm%2BEN28HmTHcLo6iJyBMvRsUtRmEY90321Y%2Bb93MGCHTXxP6JAmwQ%2BRJLAWhLKdhi8dZc8HhGk60PaTBSbzXl1KjxWBUtexo3smAawdjKuJL8eHkLifxp9kmX5fzkHU%2Bvxd7V7RqmWoiQl1lDUgwg6IbiYTfLAVt2MtSedjXGkRqUZe2M6ODlgeWSHX8bRJyJWlOyU6eeIG6Zzz%2BbViDTsFE5LRS2aQlowhSLFrS7%2BXZJaIBgxKs4c31BGQedG7QbfPlts%2FCkFnUnDbZV0ge4IZ3m31WMx1BaCHWMeM6Ka17I8qA%2BtKBkLXUOeWHzcg%2FvLwt3N8J9qiqj7ZI3RjrUtRVxHXaQxr7bpVUX5deAJvTKbxtYPQBdlS0yBIZHW6pZpDBLQ5FgFgI3e9D0YFSoMO2Qir4GOqUBasr0tv6YG41TdVMJpz2iK7BZsj5c1Q7AgUy1bU3%2Bao%2BzsvutXD5LzjiQ3gDsLYSTlNtJrGp6sMGklypusWc2kznO8k0OsyGAXz3nbUj86qnQD9muYAz9hMmhzjlwbIbAxMEqEVena%2FvSMy8TfKeNnMixcX7uNIBShWgW8JMfw%2FXxAVjKizRuK8zwzW7%2BB7evKb7bza6lP0yGy4NID39qehw0fG5w&X-Amz-Signature=6ca2499ec76bf1c09f283ba1bae0902c874c966fe96fb63f0fa66157ac505955&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KGD2V5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFAhVSg9umvx%2FjWah7pfYkZMt%2FmK0%2FFGq7yfz%2BP2GNW4AiAiSYf8VF9BSOCGKn7PRj%2BH6uDjuHD0vZgD3f5qIN5%2FNCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmop5i4dnCGZedMaKtwDEiGDWz2S8XPIlJ3X6r5WNutSoCOU795rWbnXtvOQst95Qbk5UhmTfUR75DDAL172t9jspwcPIZOGm4sIz8g9QtxOV6JetCCnU2iwcr06%2BiKjSeEZoQo8dL5GmGT7gk2UyvmZflbp0IYO2iYakjr485glL0HWDOeTcqR3wPh3Lr1TCZW4WDd%2FcOBPSixHzwlmh27y0fy7XKdUxGHEG85pUynYsvNICu9nw42hw0UJRbn1ZWMjdmOnfCT9hZKltSJN4QA1H%2Bgsk9LynEUKyS8um9WGVYHqCllB3m2qEyjtzAD57hwJVgLLZ0v8Yg1tfyRW6DCp7BVY9v6fAZh49gqvbn2GHJF95IPZ9Qb7i9AK%2Fv7sy5zOxHumR0fsQuS9vvldiqLFbMihO6toX2xbLqjOKiW%2B9aO0aoH81AlTo80%2BX6KSLBWOSz0to0Deyrralqw45hKeCQZr2GZUozN0bG06pk%2F3XgP%2FeKALrJwgKSpsaVC%2F1lemLXKSqL4xVct5PY3P89yNAKGiyLv9wqZq4PNsd00BFjf8pjHh%2Fw72Vu%2BF4W%2BScCZkAIdbK8gpoSLmkoe2D0hKlk0F5UtjI9T2EnZ19P8Gob6NuCyaNcRvet3SIEEKbjgmgiW195Bq3cgwv5CKvgY6pgGVNoxSiV6yQII%2BLf9xSamkHhzAMlIdcD1eSH9RYcPxxvOxo8AEe0CCqd7gj5AxyohRVg1N96lV1GBZKtwTwthqI%2FNXczu3RJj15JjobTeQs0zJ9cLc8hqWNKZ%2BM9G8EZAKsNhsXAG0wyJQaFLl7ykv3qm5%2FzSzE%2BEBFohY3ST86wIfj%2Fsol9aWVhYwglg1dbsm22u5BBIN%2Bip2ix5cRc%2BXE%2FZ28BWr&X-Amz-Signature=b5d5a933834ca0ef21e812da01e88051438de2cf94ff81565ae9308bfdddb228&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
