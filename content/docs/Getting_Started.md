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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZIYSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDqJJCj8KASdJfwbS5%2BeSYtwJbAOWs9ETilRPah20qHUgIhAIksjq1elOICfad5EFGXzVxWdXN3C5mWkhjJ0SyOIZJKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG2nHPlvlfN2ftMJ8q3APSWsfw2ZKUi4SGFsAZ5fQqvQv2RFeuqZy7RZQL8h88Kmq72fs695vfcM%2F3LGr9EPLeY2pb6Os%2Bi7WuL9RGxpxhPIFGiG67ms4vQtoqITcmFC0b49VdblOxO9mJRO4rnZEJgF4FwdJgD8eAtlec8bFHq%2BcwIdJIEpDcmV2xj9Wvn85HGx1hiUF8HYX1UDzvVmpjr34FlJhb1IUn3sUeoSI7yPehwt3IzbEcbvFqTV6%2BIzrQ242G%2B11u8vovX8kOi1XnlWRPBkvtApk8Q%2F4qWQeHwDr9XoFNIGtuNj%2BwwPh2sJ7Q3Aw28vRN99vSzJCIVBjKudoyu2nkKkKmqRX9FG%2BSF8RmSuGaGYl62AmJAaTR7oJfsF93jkc%2ByIeeOQUsZoRWwcj%2B8brNuXoajDeDvLfSBierFA6AD3IHdRquRoh0CxozOKNe5lNFOWLcFrvrpuerHb6U9ivgLoG6%2BRnVY%2FJv9PDBsQ6oyd7tFwYdYG1Jck7Q8x3DPdPPW%2BsFgHqUuc4UDZ2Td9pFKKsy5AdASwE2ThyzdFnMTg0nAQa1jaMrjDHQcE%2FT7quqtCxSOu62zdkcegvDiZiPhnd2LROoL3u5IiBersUZt4C%2FclZjCzSaoWP1uaym3QtT7n4aSzC4kty%2FBjqkAftoeSKA7oHe95GFkY0%2FKAKpby9jv7UM0fgUaNBaCZBgVE6KY71BsJR6IwsOkHvz5Egozq77M%2BS2EUV4%2FRgLojhwuIOUeCvh21LqIJhLOOKvJkTQ2%2BERiaQscbibRusG%2BKXvU6QH2Ajjn79FdNEo%2FFWVC1nFarq%2F%2BD1igk8kmtt%2FIfr9kVtAsY2YvTOIHnCq4BCfSis3SJzejHB0G%2BG6sm%2BJbysU&X-Amz-Signature=9b7d5392fe60185626dbd9a4fff5cb20ac8076c5bcaaba6cceb5a1ddec9f3424&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZIYSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDqJJCj8KASdJfwbS5%2BeSYtwJbAOWs9ETilRPah20qHUgIhAIksjq1elOICfad5EFGXzVxWdXN3C5mWkhjJ0SyOIZJKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG2nHPlvlfN2ftMJ8q3APSWsfw2ZKUi4SGFsAZ5fQqvQv2RFeuqZy7RZQL8h88Kmq72fs695vfcM%2F3LGr9EPLeY2pb6Os%2Bi7WuL9RGxpxhPIFGiG67ms4vQtoqITcmFC0b49VdblOxO9mJRO4rnZEJgF4FwdJgD8eAtlec8bFHq%2BcwIdJIEpDcmV2xj9Wvn85HGx1hiUF8HYX1UDzvVmpjr34FlJhb1IUn3sUeoSI7yPehwt3IzbEcbvFqTV6%2BIzrQ242G%2B11u8vovX8kOi1XnlWRPBkvtApk8Q%2F4qWQeHwDr9XoFNIGtuNj%2BwwPh2sJ7Q3Aw28vRN99vSzJCIVBjKudoyu2nkKkKmqRX9FG%2BSF8RmSuGaGYl62AmJAaTR7oJfsF93jkc%2ByIeeOQUsZoRWwcj%2B8brNuXoajDeDvLfSBierFA6AD3IHdRquRoh0CxozOKNe5lNFOWLcFrvrpuerHb6U9ivgLoG6%2BRnVY%2FJv9PDBsQ6oyd7tFwYdYG1Jck7Q8x3DPdPPW%2BsFgHqUuc4UDZ2Td9pFKKsy5AdASwE2ThyzdFnMTg0nAQa1jaMrjDHQcE%2FT7quqtCxSOu62zdkcegvDiZiPhnd2LROoL3u5IiBersUZt4C%2FclZjCzSaoWP1uaym3QtT7n4aSzC4kty%2FBjqkAftoeSKA7oHe95GFkY0%2FKAKpby9jv7UM0fgUaNBaCZBgVE6KY71BsJR6IwsOkHvz5Egozq77M%2BS2EUV4%2FRgLojhwuIOUeCvh21LqIJhLOOKvJkTQ2%2BERiaQscbibRusG%2BKXvU6QH2Ajjn79FdNEo%2FFWVC1nFarq%2F%2BD1igk8kmtt%2FIfr9kVtAsY2YvTOIHnCq4BCfSis3SJzejHB0G%2BG6sm%2BJbysU&X-Amz-Signature=452166999e2143dbe5a9e8b76761ec233970761799843ffb840ab5221dcb0ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QVIYLX%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDf8zGvt8QJsWwHiu6rA5ANQ7%2BJRYyu3si5HMP8NDeqJQIgdwlndw6t%2BJSElKB1JBbqEbfHQ0rRi2dF%2BtK3CwcYOFgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONYgpb%2BrjOdPwyThCrcA8E5QpNFA8BNsihjQYVpJrqDF03eBzneqYWtvdaCaLHuWdNk86Nz277EgEkY1Nb1mia6MLGXna%2BRvhOQuas3O0UuHo87OcD3SXbSyEBFnnRiDY9R7Lvn2dJvS9slQe1KQ3luvc3bhY01dQWyvV6DPC6yIev3%2BKV8YDmfSkLeCGvGboo2OFaz8XGe5jVIBLQ%2FCXZIobi%2BOkRxgkwr0z4nP5rhOOyg5WmAGB1zugGVuUvvycLXoA6Beq9hhhnqXB37Vt2tnDni%2FFyOq7e%2FxYAokGxxewzgGbhGwQQgDKkU%2BzhnNalZ83Ctld1bhPD0jUrVvxxtVFrYBm7pdkeqn4ewktKeTNdkUNFQubR39KAfNR8csnhSkTEmH838ciqEhZ%2FVYFI%2BIJv%2FhxNUEB5oIIufmGA8ph1r36C5RJvodwkTuMqScmAnd8bchnPC%2FlnoFCf75NaPGMBWjMOQwuw%2FjaSUKi16dmZ%2BtTANbRMIfGtHKgl2Hszh36NUPJ%2BT8wAUXaX1agsWRRMDGJmiVaBHcOAeF8u%2BaIqKK7itnYJ%2FVRkaWdVqzxJmTzfnTNY78dPzX23kNyW%2FuvlyQCOoArs2iKax4lOzUNmJREamGEt1AF1%2FhwypHiBszOEBgkb9hcoeMIWS3L8GOqUBzjeJRD92xeRyrngArcxQFBCasW%2BGDnaS%2FXK5JMMPhmGfMXv%2FWkbJfJx0Vy0TJ6M4nvw6DFC4hN2rifcQ24XoLaVuTpXR6NRF6TOtaVYI%2BXYiQUZLF1rVIdIISyW%2FPRu3x0Ruv%2BSlHBBLBmIY6XAEx9IODbtm9mLzQqboaGrIBMBvGWrANiwqO%2F42Ddjmjy3PdMwI04YMq11Ydka1hsaJfWVAGYwr&X-Amz-Signature=fdc3d5359886403420d5b5cc8cf2d5a47458872ba141a2a41c99afacace55c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUH2T7V7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIEoXBhTHPrKEE9oiSXJK8O%2FQX8ACuh6kV1xDTTVnJ0HbAiBAHfbGWkn30A8wLfC%2FJ2l2ZoUGNWJPCS1sCuwMP2u1ICqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1hLcJ39IQ1iWpRLKtwDFYa3PZJNUdq5cbcgbdo1%2BoPcZVSDbNhss%2FLXbnDmQ2atEoGgwbkHiXYmFjpACzI9bNErYPSHaQ0df7Q3hv54TJdezE6uSdZmu7zOFu1Zk1%2Bf3Il86%2F6YGWxwFZxFa4o00Pp9jblHIZgsOcip%2FAXHEbpF11dW01ZIXbYMqSX2iP7S01FJLB8zmc91iZvfXtxfUkJNYZUsGsJ%2FKUYWB5pkP3OJpvMbKVw5uhY6cdjRLFMyzIW7LUF9SDyBamVuuqTxX1hxG%2FkL9%2BcvYVUZJz7krVgBqv%2Basy9GEMqF1nxnfzrTQNzIK%2Fy6YerC09omexoUUAkWJzR2t5I%2FfPNrgk0gB0R3OzyaRv4gW2BJedqYiV3t%2FnKGGf83GFkq2fzTU%2BE%2FQPtjDcY%2FMGc%2FMFNiBdImZkZB8GJE19PPs3PS6xhpP9iCyjEIV0%2FgCoPjcYYWhOo9xJwOOtgRtXaVGUCSpx%2FmCCA9uUoZhlshPWmB1M2Mb2m%2BGK9Ou%2F1ZriYxPCLgDi4zrZNIe2KZ0cqfB1wGZIMqNIyCqFrXw22pj8E9wGU0hXFODEpUREiha7pI0qbZGAZosseKGwSgoC6Mvsc94accC9enLAPZRC4ViH%2BVm1N3j5XJpJz2IkRqfNutgncw75LcvwY6pgEuZTa%2F1qFGPTNjMP24oahzgINej2fBE441EtDaVRztZtlxU0qLjNWAULaB8vi8lZcBZ%2B1kdAoQ8GK6Lf1B84tJSRXJmBE6wiTDlxTyJZnJFSl0DRI0SG1FcdetXKJq5%2FSOnCK7kaYkBVzX4bU7ERt1OaRCVNqFWye2nyt9t1RX3DmmD1yDQztyE7iuQukEO7hf48hFi26KzWRfPIs%2FrIkqrb%2B3OmZx&X-Amz-Signature=f89746973eca1d147cdfa31fec8c8aca4bb5e6ba8f25bd25cae5680d3254de20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZIYSAO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDqJJCj8KASdJfwbS5%2BeSYtwJbAOWs9ETilRPah20qHUgIhAIksjq1elOICfad5EFGXzVxWdXN3C5mWkhjJ0SyOIZJKKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG2nHPlvlfN2ftMJ8q3APSWsfw2ZKUi4SGFsAZ5fQqvQv2RFeuqZy7RZQL8h88Kmq72fs695vfcM%2F3LGr9EPLeY2pb6Os%2Bi7WuL9RGxpxhPIFGiG67ms4vQtoqITcmFC0b49VdblOxO9mJRO4rnZEJgF4FwdJgD8eAtlec8bFHq%2BcwIdJIEpDcmV2xj9Wvn85HGx1hiUF8HYX1UDzvVmpjr34FlJhb1IUn3sUeoSI7yPehwt3IzbEcbvFqTV6%2BIzrQ242G%2B11u8vovX8kOi1XnlWRPBkvtApk8Q%2F4qWQeHwDr9XoFNIGtuNj%2BwwPh2sJ7Q3Aw28vRN99vSzJCIVBjKudoyu2nkKkKmqRX9FG%2BSF8RmSuGaGYl62AmJAaTR7oJfsF93jkc%2ByIeeOQUsZoRWwcj%2B8brNuXoajDeDvLfSBierFA6AD3IHdRquRoh0CxozOKNe5lNFOWLcFrvrpuerHb6U9ivgLoG6%2BRnVY%2FJv9PDBsQ6oyd7tFwYdYG1Jck7Q8x3DPdPPW%2BsFgHqUuc4UDZ2Td9pFKKsy5AdASwE2ThyzdFnMTg0nAQa1jaMrjDHQcE%2FT7quqtCxSOu62zdkcegvDiZiPhnd2LROoL3u5IiBersUZt4C%2FclZjCzSaoWP1uaym3QtT7n4aSzC4kty%2FBjqkAftoeSKA7oHe95GFkY0%2FKAKpby9jv7UM0fgUaNBaCZBgVE6KY71BsJR6IwsOkHvz5Egozq77M%2BS2EUV4%2FRgLojhwuIOUeCvh21LqIJhLOOKvJkTQ2%2BERiaQscbibRusG%2BKXvU6QH2Ajjn79FdNEo%2FFWVC1nFarq%2F%2BD1igk8kmtt%2FIfr9kVtAsY2YvTOIHnCq4BCfSis3SJzejHB0G%2BG6sm%2BJbysU&X-Amz-Signature=91fb686180c620c7472eb69317d15212e66fc892272e7719e88ff373ce3caade&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
