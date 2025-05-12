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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLR7IHW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAPNBnKDxKqDM%2FAZOAxrURILRQ1iH0UH%2BTwxlAdtgtZzAiEA%2FiuaiUrH677pWc7M9vI6izumPneLgWfORB5PLEdgF04qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzjXL3FGJA2rp4ahCrcA2iIa7KZI9wvfcXkVbS1qhCRllZy%2BkFzqtCLXYj0UTLtSURPWbVl3Qz7vhfijPVasoi6NQkLMg%2Bi3SX18wfeu6%2F3GL9StL3jzprR5Koet5hO6QVVr7fd5lI7bnRejh0z7VvOnnJU1MGNmxtCp42K3Dta2L%2F%2F4nii9rH%2B2P%2BhzYmJa8z0SX%2FniGT605bNRWaPUs3lHcYltjoCUXejZ1lJ%2F6a3FEozdcxGJGLVz8my%2BcQfxSuiIo0tpKSPuZ3kq1nUbYWZaECqZ7wxzBWq6aN2YLAlabXZiWETurYLVyyt0VH1Xe5MnCmPtBhHafmmxMFuY0tqc3D3Z91fCqk8kj75UPNTNdnMZIFouYS87Q9vvhKBN5fJEM3SjnWDi3M%2BjMxAEw1oKVZYkYB%2Fg6MKWjcKU9KM1ZVWPC6DUx1SK1B%2BLgQOQIXmgjN4Q09pQ2Xs1lFRSY1mtA7PieqIpmzF4jVRDhXzLifl%2Fq4SGEBYEl0rSvv7vejiOZk4WmZIvoKEw0KetvCMgW1DNwSxbE27DeEcEUWxAXcmyXeCVcpuewt0LoYreH%2FFmBB2PjvkOxSW2U3F7hwUC4LQV%2FGSq6%2Fxz4IAdq7LxUXLR7wT2KSFXcQvCKkDDhMieFF2JNolbZS1MKyhh8EGOqUBEm5vbMVwWlBqZNaDMl56xA0HaTpwI3aK1Ee8JmLAEYwS0SiMMH20Hb7YxZE2i%2FYeWlYDsApvX72VQDoL9Hn5uRC2ue270GjXaSkuFqehaRU8yHF2M9Oz4TfpnQUUfnR1q7jJIAUnHCEjXXKsZ21wjrI1rWAz4lNbfG%2FIiaz%2BCbZHGV9Qsa35D7toFp8Tp98flhbK8A%2FcQH6Q4IOORWUWH3J%2FGREk&X-Amz-Signature=e1bc67ca13c5ff8bab96bc17116220d83aa8639e969554f1a802ef9d728374b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLR7IHW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAPNBnKDxKqDM%2FAZOAxrURILRQ1iH0UH%2BTwxlAdtgtZzAiEA%2FiuaiUrH677pWc7M9vI6izumPneLgWfORB5PLEdgF04qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzjXL3FGJA2rp4ahCrcA2iIa7KZI9wvfcXkVbS1qhCRllZy%2BkFzqtCLXYj0UTLtSURPWbVl3Qz7vhfijPVasoi6NQkLMg%2Bi3SX18wfeu6%2F3GL9StL3jzprR5Koet5hO6QVVr7fd5lI7bnRejh0z7VvOnnJU1MGNmxtCp42K3Dta2L%2F%2F4nii9rH%2B2P%2BhzYmJa8z0SX%2FniGT605bNRWaPUs3lHcYltjoCUXejZ1lJ%2F6a3FEozdcxGJGLVz8my%2BcQfxSuiIo0tpKSPuZ3kq1nUbYWZaECqZ7wxzBWq6aN2YLAlabXZiWETurYLVyyt0VH1Xe5MnCmPtBhHafmmxMFuY0tqc3D3Z91fCqk8kj75UPNTNdnMZIFouYS87Q9vvhKBN5fJEM3SjnWDi3M%2BjMxAEw1oKVZYkYB%2Fg6MKWjcKU9KM1ZVWPC6DUx1SK1B%2BLgQOQIXmgjN4Q09pQ2Xs1lFRSY1mtA7PieqIpmzF4jVRDhXzLifl%2Fq4SGEBYEl0rSvv7vejiOZk4WmZIvoKEw0KetvCMgW1DNwSxbE27DeEcEUWxAXcmyXeCVcpuewt0LoYreH%2FFmBB2PjvkOxSW2U3F7hwUC4LQV%2FGSq6%2Fxz4IAdq7LxUXLR7wT2KSFXcQvCKkDDhMieFF2JNolbZS1MKyhh8EGOqUBEm5vbMVwWlBqZNaDMl56xA0HaTpwI3aK1Ee8JmLAEYwS0SiMMH20Hb7YxZE2i%2FYeWlYDsApvX72VQDoL9Hn5uRC2ue270GjXaSkuFqehaRU8yHF2M9Oz4TfpnQUUfnR1q7jJIAUnHCEjXXKsZ21wjrI1rWAz4lNbfG%2FIiaz%2BCbZHGV9Qsa35D7toFp8Tp98flhbK8A%2FcQH6Q4IOORWUWH3J%2FGREk&X-Amz-Signature=71f2105d9d5f6afc09d33838c8d1b576ab5965295f8cd1b589c28fa0d830a51a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLR7IHW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAPNBnKDxKqDM%2FAZOAxrURILRQ1iH0UH%2BTwxlAdtgtZzAiEA%2FiuaiUrH677pWc7M9vI6izumPneLgWfORB5PLEdgF04qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzjXL3FGJA2rp4ahCrcA2iIa7KZI9wvfcXkVbS1qhCRllZy%2BkFzqtCLXYj0UTLtSURPWbVl3Qz7vhfijPVasoi6NQkLMg%2Bi3SX18wfeu6%2F3GL9StL3jzprR5Koet5hO6QVVr7fd5lI7bnRejh0z7VvOnnJU1MGNmxtCp42K3Dta2L%2F%2F4nii9rH%2B2P%2BhzYmJa8z0SX%2FniGT605bNRWaPUs3lHcYltjoCUXejZ1lJ%2F6a3FEozdcxGJGLVz8my%2BcQfxSuiIo0tpKSPuZ3kq1nUbYWZaECqZ7wxzBWq6aN2YLAlabXZiWETurYLVyyt0VH1Xe5MnCmPtBhHafmmxMFuY0tqc3D3Z91fCqk8kj75UPNTNdnMZIFouYS87Q9vvhKBN5fJEM3SjnWDi3M%2BjMxAEw1oKVZYkYB%2Fg6MKWjcKU9KM1ZVWPC6DUx1SK1B%2BLgQOQIXmgjN4Q09pQ2Xs1lFRSY1mtA7PieqIpmzF4jVRDhXzLifl%2Fq4SGEBYEl0rSvv7vejiOZk4WmZIvoKEw0KetvCMgW1DNwSxbE27DeEcEUWxAXcmyXeCVcpuewt0LoYreH%2FFmBB2PjvkOxSW2U3F7hwUC4LQV%2FGSq6%2Fxz4IAdq7LxUXLR7wT2KSFXcQvCKkDDhMieFF2JNolbZS1MKyhh8EGOqUBEm5vbMVwWlBqZNaDMl56xA0HaTpwI3aK1Ee8JmLAEYwS0SiMMH20Hb7YxZE2i%2FYeWlYDsApvX72VQDoL9Hn5uRC2ue270GjXaSkuFqehaRU8yHF2M9Oz4TfpnQUUfnR1q7jJIAUnHCEjXXKsZ21wjrI1rWAz4lNbfG%2FIiaz%2BCbZHGV9Qsa35D7toFp8Tp98flhbK8A%2FcQH6Q4IOORWUWH3J%2FGREk&X-Amz-Signature=21ce319430d47f42a4b5bac92e58d80a40788d1c54c5f8b9837ecf004d8ead8e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPUQ7FN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC3sluCEGeEaRxJ%2BSkEsq8rYnDU2fT4eWVnbcRkICbyuAiEAu2oMxTXirqG2W%2F9lWA6bXoRSYzP3%2BeVtuktuMpmckwAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCYwW0dCz6ZpKeVTCrcA5fYoNnW1bopAkcsOUhSESXetp71AJ9jZ6a9P1SVFts7Y7G1qT%2F%2FJDNCr36nLlnwGZJE22HLfzvhljj94s0A0T03WSRSftGXnUaXXBV8IUnEnr99qpV9MKOb%2Bol%2F6QJwU3V729D1549eBrk4BNq7oJXGhTxNVo3qUE5XEUVh5ukhGlIs8nSC4PeDG0IVfldqDlbGBvfWPVZmep2BtCA6WYIelRHFejMRdu0GKb2%2B%2BqLOYkbqI0WeADIKu%2BXeRb7997pRJm%2BD7SVSjwAY69oSOwXhfGTV8M1d1rdUWPc8ljwkOczHEA0EsB4C%2FsU6ItJcjDdz1trLUSEjbgN0UQv8RG%2Fd0NDVsAYPDMWISBDY1C78tHgHkiWfsQG5u4%2F9U0dEEblt1J4MzjubOhuO8B6T8DwFfWKq%2FFccBhcjE2OeKSprrd6WZvtNFewCpQdwkg30hDjOHvveHpn9PJLkM1Ucn0qUy81%2BX8%2F4Lu8qcScklL%2FwL%2FBN0ej7FAAdaM2RER%2F4cFdUk172Wu1tcJmjAKxh0X4yTCMi48jRtKalA4PjcQeXlQQkMsJHtbqrtcmkEWv4x5zxRh7vjZm%2BhfyIXp6pEnYihLZbXGQy1%2FVluPr3DgncXhtALJry3PHLoafhMNGch8EGOqUB2MsoIb3KVjoFVImF%2BI5VFbuARivzoGIrdA17iNPNXOkHhn6xykrMyDLQlHAsYTHNfngutjX0jydkxHcXgjfgyFbz8a7F7fZY2Xi3axRHA94b9H8mgSq5Pc3ZAs5ZSj%2F3DbTkwTjeY7aZQ5EQ3eB3gYUlZ2hLZ7Hjms9cnZfnWenkFEWT%2BUC3r5NfLsgn7O5kc4f%2BMvfuU4xQgnTJJolVUjrKejtO&X-Amz-Signature=23d147a6c1fc3c086e67889750b0524f84265ce095c4e0650cf9ba9111455718&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSE2PG4S%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDsyKDXszYXWi6wsBv1hHdq9tLoUPx%2FqHYRo7MVuG6newIhAPK6BFr0xB%2BuJGL9m%2FRJYUSnbl5X13VObjt%2Fh4WoT8a7KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk4heb3vQpopSNZLIq3ANv%2FSHBMtKT%2BoK1oOm6N2kgjO%2FnlCJNmQnd%2FUdDyotF1HEVSkPeRhSC8hBwjwpkhvDLoDDGXMsvtnSc0%2B9h%2Br9EaTvG5LOvJMD4WP%2FHy5OZkE18u6X9ZE8y3VZilyhL7F3TSerRV%2BcahSz9JMIsVgYmc%2FOoZyEhh54zYJ0nmMytPb%2FOoD%2FMVInYeUyCsX2XGldKZnH5KEe4RCyNoFHLO16u9TA0DaeudU6Pa%2FatQW2mY4e3z2KMhR34AlgAjDMJJHtYDQNNuesC6kOT%2FF11rDjQQ3TwbJEzBStihfHJmsutjdVV2O56cYu5FLJjD7eBLqg2DeCCpoWo9q0Iz%2B5%2FoIak4%2FNSV4b3PxxJkqAjHoVFJNi6p4%2FEln8h5s8nh3ascvD3syK22MxYJQFsCusSxPY4zyIwZ%2BwjSov%2B8Wz6kNG8RM9AlkuiXQhODw80qTSP4vjdZXuZQc9ZRZw10Ou6AC6I8PRsVrfEPvJGElN5er5HZ7s%2Bdjxl%2FoM9FoQQNy7Xyuvb2ruKkX5HXnuoskB5%2FVp5X1SYn96euq9xibe%2B13Gt7CzvYSZYOUcQYphy6aOQKhtWOiJJC20y0rZUWYh%2FSb3UMpXxGG6JxrBEkuxp6hiSYUCEuxN1GSUwFk2u%2FzC0nIfBBjqkAXCgDen1Ts0Xc1B0ICkRQ3ID0vqqkTjrVOb57PC8Q9nqwO5933TRnD8XjvP4Ocb%2Fd5%2FzamaYBn5zsXxO5fgVwKomOkIl0ZLCrtPBlQiU3KP%2F5pAMolY7WCjYPe88RUu08DHGKiuB9ZSF01eIkX9wG8q7PALCZV1M0CnbFYTsjlKAQEf%2F1fKcrNjGxVtwlWUjrLBE8m91YY9Ahk%2Fudu1LH6vNUyY0&X-Amz-Signature=d6011f2bae970f8e5e691730a6e4b1891ac1c803ab22b8989e544f28a5164530&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTLR7IHW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAPNBnKDxKqDM%2FAZOAxrURILRQ1iH0UH%2BTwxlAdtgtZzAiEA%2FiuaiUrH677pWc7M9vI6izumPneLgWfORB5PLEdgF04qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzjXL3FGJA2rp4ahCrcA2iIa7KZI9wvfcXkVbS1qhCRllZy%2BkFzqtCLXYj0UTLtSURPWbVl3Qz7vhfijPVasoi6NQkLMg%2Bi3SX18wfeu6%2F3GL9StL3jzprR5Koet5hO6QVVr7fd5lI7bnRejh0z7VvOnnJU1MGNmxtCp42K3Dta2L%2F%2F4nii9rH%2B2P%2BhzYmJa8z0SX%2FniGT605bNRWaPUs3lHcYltjoCUXejZ1lJ%2F6a3FEozdcxGJGLVz8my%2BcQfxSuiIo0tpKSPuZ3kq1nUbYWZaECqZ7wxzBWq6aN2YLAlabXZiWETurYLVyyt0VH1Xe5MnCmPtBhHafmmxMFuY0tqc3D3Z91fCqk8kj75UPNTNdnMZIFouYS87Q9vvhKBN5fJEM3SjnWDi3M%2BjMxAEw1oKVZYkYB%2Fg6MKWjcKU9KM1ZVWPC6DUx1SK1B%2BLgQOQIXmgjN4Q09pQ2Xs1lFRSY1mtA7PieqIpmzF4jVRDhXzLifl%2Fq4SGEBYEl0rSvv7vejiOZk4WmZIvoKEw0KetvCMgW1DNwSxbE27DeEcEUWxAXcmyXeCVcpuewt0LoYreH%2FFmBB2PjvkOxSW2U3F7hwUC4LQV%2FGSq6%2Fxz4IAdq7LxUXLR7wT2KSFXcQvCKkDDhMieFF2JNolbZS1MKyhh8EGOqUBEm5vbMVwWlBqZNaDMl56xA0HaTpwI3aK1Ee8JmLAEYwS0SiMMH20Hb7YxZE2i%2FYeWlYDsApvX72VQDoL9Hn5uRC2ue270GjXaSkuFqehaRU8yHF2M9Oz4TfpnQUUfnR1q7jJIAUnHCEjXXKsZ21wjrI1rWAz4lNbfG%2FIiaz%2BCbZHGV9Qsa35D7toFp8Tp98flhbK8A%2FcQH6Q4IOORWUWH3J%2FGREk&X-Amz-Signature=7218dfa43e0f1ca09741397037d1e39169d5e30524899b545792cdf54d9f9655&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
