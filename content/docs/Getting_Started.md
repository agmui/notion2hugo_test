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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WKAS6D%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1sNxdgPkcNTKejmVkSkaTCZYw3aakjS57xnQAqKkgtAiEAoSzZcIy%2BOaM0Z2Gt5lxmcIBTgCeoQZG4KUTkb%2BFvvMIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTeZjAqUDiUm%2FD6VyrcA4lcAx%2F%2F93D%2B7%2Fg1z06%2BgFhnqSAnB44kZ2kfw14nJV61%2FLlxw7cGhMvlzfe6dvpxlzlsDyclClIitmEynwhV42B6G0YltSBZ%2BKnaBOIBk623dRwXEkiJqcMpZPJIZxE11muQ1yKYS5idCHaKl0bgP3vOsKct202k5y1nSb8uFs7sZt5mydXfcHXruob6zPL5x%2BJgaTaykyjnWTYv1kWE3siHrbnxY9bqmbhhPqH5zYSVIOYjJVw6RaeFRIy1rw0CocZmwCHJGUULYVVpotHj3xA6CYBOnA9EYZO1QjyRIu9AM6wS7h0Rv71Y0R0UJnCWj5by%2FAs7pfyfsCYM9L1LBXG6Qkc1sdjGB%2BJzPa710HUVMA%2FHj3ORas%2FOW9BRw0DPI%2ByNOxAGvicUdwvSr2LwsbiVIRotiWFQntdzYPVstb9QMKHYDWEUtX2quaVXoCH4W%2FlLSKt4qbfnvWfAoOq5gk444Es1B4inRcZyj9FzAi0v2YlngOM2f1BvBxrPzbLCDFOcIuSo7ee00Gi0Urbewi0dgTr5gvvgX8pyBtF7%2BPJf5vRm2e7k0vBi3GZh9DWa2Adpf4WXckYANmRddP3i%2FN9M76FSdiuFpSOwb%2Bq05b%2Fq0XIcviFrz4RPbXWPMPyd%2FLwGOqUBxjFFgVKe4B3N9KHg%2FPuwiM2nIecGUfVHFI4XqxLvAN6nH8NEJw%2FUEiWgCc5HpRIOQaeJYgQB9Qo8ScwZ1d7IkMrG3AfSF%2B%2FY9kN4B5mcx2COfYomAo8QIQQhRSsJkMSbg%2FicfOpnDOaTZeyWtPlsCV9eT3fRhF0Iwy9ouBf9iL%2FZN8UoWbDdWG13W9fybcchdN0Ayn3dJI3nLFYB3pFuoHZlhNKa&X-Amz-Signature=2af177851cc44fdec7687cad49701e00597cd882c5102d734425e25338edbebe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WKAS6D%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1sNxdgPkcNTKejmVkSkaTCZYw3aakjS57xnQAqKkgtAiEAoSzZcIy%2BOaM0Z2Gt5lxmcIBTgCeoQZG4KUTkb%2BFvvMIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTeZjAqUDiUm%2FD6VyrcA4lcAx%2F%2F93D%2B7%2Fg1z06%2BgFhnqSAnB44kZ2kfw14nJV61%2FLlxw7cGhMvlzfe6dvpxlzlsDyclClIitmEynwhV42B6G0YltSBZ%2BKnaBOIBk623dRwXEkiJqcMpZPJIZxE11muQ1yKYS5idCHaKl0bgP3vOsKct202k5y1nSb8uFs7sZt5mydXfcHXruob6zPL5x%2BJgaTaykyjnWTYv1kWE3siHrbnxY9bqmbhhPqH5zYSVIOYjJVw6RaeFRIy1rw0CocZmwCHJGUULYVVpotHj3xA6CYBOnA9EYZO1QjyRIu9AM6wS7h0Rv71Y0R0UJnCWj5by%2FAs7pfyfsCYM9L1LBXG6Qkc1sdjGB%2BJzPa710HUVMA%2FHj3ORas%2FOW9BRw0DPI%2ByNOxAGvicUdwvSr2LwsbiVIRotiWFQntdzYPVstb9QMKHYDWEUtX2quaVXoCH4W%2FlLSKt4qbfnvWfAoOq5gk444Es1B4inRcZyj9FzAi0v2YlngOM2f1BvBxrPzbLCDFOcIuSo7ee00Gi0Urbewi0dgTr5gvvgX8pyBtF7%2BPJf5vRm2e7k0vBi3GZh9DWa2Adpf4WXckYANmRddP3i%2FN9M76FSdiuFpSOwb%2Bq05b%2Fq0XIcviFrz4RPbXWPMPyd%2FLwGOqUBxjFFgVKe4B3N9KHg%2FPuwiM2nIecGUfVHFI4XqxLvAN6nH8NEJw%2FUEiWgCc5HpRIOQaeJYgQB9Qo8ScwZ1d7IkMrG3AfSF%2B%2FY9kN4B5mcx2COfYomAo8QIQQhRSsJkMSbg%2FicfOpnDOaTZeyWtPlsCV9eT3fRhF0Iwy9ouBf9iL%2FZN8UoWbDdWG13W9fybcchdN0Ayn3dJI3nLFYB3pFuoHZlhNKa&X-Amz-Signature=65f86092fe5d1496b1cdf5bf651f02baa02e57c3169755e97ec0ab19dc7612e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SURFDJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYe%2BWs3f1FbFRJtCU%2BsYOYmRxn6wcgX9F%2FUbcU9J23PgIhAMyPnaCdP0kRy8MEfaVCmZoYlQCucxQrUDiS5Qi9i1kMKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbREg4Um1EiE%2FXWasq3ANop4h6yn4nMDD9rF3kC89NEp0n3dbYDtWxLnfQ7LQfL9Wg9%2BknK%2BH6%2FezSlk5yQ2B4mt9Gr2EY7KIaMs5ALIqECJWkNCFcY1c6XycxwWLQbfBTcx9RY3aKzlZszLpMvDm8oBQDj0GCgv4iO38I1qWbpL304miE1iBi82Dewfso934ohumES5%2BzLPS%2BUA0E%2Br%2F0H70E9z6zuKrIOpYc3z9l20GwzUCv%2FpZoTjTi%2F%2FIAMn4IzZJLmuT6HAvKHI4P2VMntjfH8DSichE%2BamDAyDtLppwqgKyZk1Qfi7yG3xHjwKYRfTjtEDduSrXo2B0nr48uxd0PVtZowjq6j5teFprUc1ISLvv62mg%2FTWfx5GsauMqgbt%2BWgLhXT3p6VdPo9F8Ea421k1lwfS9tTAn4gHJb%2BWQGP6NaIqJepfCZZ3FTVlX0kb1s3Xvxb%2Fc15ma2qw4jXF3lamBG7NhhvjjhjXJoEpGT5LWIviOuFa73j9%2FzbGDI%2Bw%2BkgIPlZ24df2Pkrxyym6boVqyxTT%2Bsd4%2BpTLWjUntq46UofGJaftkhclbk5pKz1ukPbwsp%2Bks71KMnH0M4d0gvGn1LLDtHbj7FNAQpLc3RU4We1ftP7avxdXjNvXnkk9CC7NiBnB0XXzC7nfy8BjqkAcEAqIhVLJ40ojoOgChVxRtd0W4xEY%2ByzDnvhBvK1uyzsObK0VW3JoSCx86PgLPZGLSJfd2itTmW6CpCw9JLOgeR9oQ46SIbGAdhuZl8v0fOv1iLIctELi7lgTqAyzvBQSurz4Fgbknd9WodTjpwYOZWxE6GdMuzG7utSLxE75G3skyyONsv0oHfyICxD%2BSN3CPLNtjULgylYZ1PlSJFPub5%2BG9w&X-Amz-Signature=0045b2276a2594af8ded86f92923b6a25ed0a84a67fa89a2c55cdafe44b1a3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V374NPRK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCrv80MBbSNGF%2BvujnsGY9O%2BpRz0OS0qZ4Cmw7zpiz9AiEAn3%2BJuhGKCdzlJZmqPquaX%2FxLfObQFFs96fvwbBS0d0AqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlYyf2upe%2FHwffARCrcA1ZtuXvOND2KATmrdz50SkoUJvqGyVIbLARVD%2Fm%2FZeEb3bm3%2Bubgz4xU49C9BJKvX6Je5R4gEEtv%2BEXDuly0NBV1bn5vqhjitvtxF16iYLqmgLk%2BhRdXlTp7DkxSa0wf2Vm69cCyL6XWrDmGpVQS19rXPKkeD7o6MrUUEeBfaf5kaac26IEGjFLCzTHRIz8o5b0i6Hf1BExoLkDN%2F%2B3Crrr4NhZg3RNUjsjbjsLtJ5MGKWEZfgFCA%2Bfip6WVrN3NwzRobnaUGWfz3FP%2FuupEtNwAYUM9I1Pr7zyvQR5i%2BXXm9xJ0AdO61pSXE1fSjR4uwkxX2TKw%2BPisPfi9tVRpDIuXqj5Pe%2F66tZZQPsv6c2SoeRyKtoc1Nq3dVz0t7MmBTP2BW2w3fc%2FlHjAoQoLXqKRENj%2BMFqwbaxklHmCNkmtzwE9ue4VvQJ8%2BpeBVSWLeNRa7nkJES5mWXnhRg441YXy9YIBW8kVLW2xYkvO8n82NgQ3AdnSyz8z7s8raSve6yZtupKjsYuzG1Yq7G8rnNT2A8M7cbR7I8exQ42VMZDrnGx6KWVqQG3dpeq2jBRTCaBgq8IcJukO%2FdyIgYDthmubq%2FO7hTcMvNaa2uosP6tJGPnFKBym86ehWzKFOMI%2Bd%2FLwGOqUBV%2FhA8QKs0JBk1xud73Uw07TB%2BcqY19G14toC64HDQWjKePUjGdLc7K5vRMWfWEzXnWSDOAAyhfs3crOf1H70qCEFoRhm%2FtYukuLCnZzDoYHap7A9SlghDyOWMnDY22jjObcNUPBGdTasLkFfl8JUFzKd5k3sG0iDpj%2BwQRdvgH15TESNVTrJQ33Q9c4OfOtI7jYZDlQCy1vArFfk2kFteR0MaWxE&X-Amz-Signature=2b4800cd348363e5856ceeb4c14e89c43c4e8990f298489e7730d18299965c79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WKAS6D%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1sNxdgPkcNTKejmVkSkaTCZYw3aakjS57xnQAqKkgtAiEAoSzZcIy%2BOaM0Z2Gt5lxmcIBTgCeoQZG4KUTkb%2BFvvMIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTeZjAqUDiUm%2FD6VyrcA4lcAx%2F%2F93D%2B7%2Fg1z06%2BgFhnqSAnB44kZ2kfw14nJV61%2FLlxw7cGhMvlzfe6dvpxlzlsDyclClIitmEynwhV42B6G0YltSBZ%2BKnaBOIBk623dRwXEkiJqcMpZPJIZxE11muQ1yKYS5idCHaKl0bgP3vOsKct202k5y1nSb8uFs7sZt5mydXfcHXruob6zPL5x%2BJgaTaykyjnWTYv1kWE3siHrbnxY9bqmbhhPqH5zYSVIOYjJVw6RaeFRIy1rw0CocZmwCHJGUULYVVpotHj3xA6CYBOnA9EYZO1QjyRIu9AM6wS7h0Rv71Y0R0UJnCWj5by%2FAs7pfyfsCYM9L1LBXG6Qkc1sdjGB%2BJzPa710HUVMA%2FHj3ORas%2FOW9BRw0DPI%2ByNOxAGvicUdwvSr2LwsbiVIRotiWFQntdzYPVstb9QMKHYDWEUtX2quaVXoCH4W%2FlLSKt4qbfnvWfAoOq5gk444Es1B4inRcZyj9FzAi0v2YlngOM2f1BvBxrPzbLCDFOcIuSo7ee00Gi0Urbewi0dgTr5gvvgX8pyBtF7%2BPJf5vRm2e7k0vBi3GZh9DWa2Adpf4WXckYANmRddP3i%2FN9M76FSdiuFpSOwb%2Bq05b%2Fq0XIcviFrz4RPbXWPMPyd%2FLwGOqUBxjFFgVKe4B3N9KHg%2FPuwiM2nIecGUfVHFI4XqxLvAN6nH8NEJw%2FUEiWgCc5HpRIOQaeJYgQB9Qo8ScwZ1d7IkMrG3AfSF%2B%2FY9kN4B5mcx2COfYomAo8QIQQhRSsJkMSbg%2FicfOpnDOaTZeyWtPlsCV9eT3fRhF0Iwy9ouBf9iL%2FZN8UoWbDdWG13W9fybcchdN0Ayn3dJI3nLFYB3pFuoHZlhNKa&X-Amz-Signature=e5ad4b70e3ee3ed0ef00950ea4d196dcf4e20bdbc5a47814e69999eb55556813&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
