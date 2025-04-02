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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PIRWON%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDeuXLOi5LoZV38kkxichKIx5DhjjF5F0Vvw%2BbrVQljIQIgOprYoKrGlovzmUn3Tme0cFnwtFuBsukqW2I5JVXD6acqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4egzg5vfLYam8nyrcAwPLArlPMsmpXWmJrwTEguNyp9KXT7pPc0A%2FhCRbyqYFPRN%2B0skYMz1eevcwPw9nfyJ9zOZlmO7CTKHM1N6hSEQ%2B9PGwSHFup%2BYovT7HEuZ0FcVxY%2B4x%2BqL8Kd9bo9wDjA4Y93BxysX%2FeA%2FJKYezW40%2FUgEpTA0JihofneTOvHHpxggIOchnlhuqhtzqeDeCCJuEN5OLCEVD23IYzryxcRxN8qf8%2B3lwcIhC8Gi960WICOPtvWMujZnCMmbQBbHSd3EnFl%2BbnC%2FKIP1Yvm5xepyPxiqODb6vk9B8dHjW9TIi%2FaWLADQ3MRZvGvoVx6vtfzLZE12rhe6ubvcopkD2qg4C%2FyPFKFgTx50Ofba5lbDUKSauN8AoWhMSOgqubLQlUPxl9PsUP0M%2BruT5RcZI3l0EQmh6BEBq3SMQpMJFz0TtnHQRvrhvgrrlmkiyJiTVkRrVI0ZbdjU2KXlI3KTgiSbpfMvij9onkxSpwAEAyrDMBV7XF0qiHudCywwHncvjfsM1GmahbGIWOJXEm6VcpWwE%2BaTYO76%2BPhJ0AbVkA%2BHoG7%2BA5zY9Mw0TfXPF%2FfQvK5%2FsW2oA2%2BOMNhkaKj%2Fowfe3yg9TMnKJvPEBxefdfP66Sq3VpsJdonXyc8atMOvPsr8GOqUBc3Dx3AeJfCuLy%2FqtJa%2B6clDjS3NWzFEEa57RQeeol9kUR0uH%2Bngks4Bo1iMKv6VlbSdYjvnotjUVef8jIAiXfXAkzLEvShLdB%2Bc9%2F6IW5vRCn1XR0dN0a9KP9echkQJjGep1L2grel9p%2FXa4Ihcksg%2BgBeDjkNbBI4hCNM5NYtg4e6Kunnz7Q3o5Z3ElDz4UlWaFcFUc%2FNkzu9fowswuqkrNpFu7&X-Amz-Signature=0ec0d4eaee3100cd9daf18944372614b9d0cb5e1d483873bbd763084f1cfa92f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PIRWON%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDeuXLOi5LoZV38kkxichKIx5DhjjF5F0Vvw%2BbrVQljIQIgOprYoKrGlovzmUn3Tme0cFnwtFuBsukqW2I5JVXD6acqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4egzg5vfLYam8nyrcAwPLArlPMsmpXWmJrwTEguNyp9KXT7pPc0A%2FhCRbyqYFPRN%2B0skYMz1eevcwPw9nfyJ9zOZlmO7CTKHM1N6hSEQ%2B9PGwSHFup%2BYovT7HEuZ0FcVxY%2B4x%2BqL8Kd9bo9wDjA4Y93BxysX%2FeA%2FJKYezW40%2FUgEpTA0JihofneTOvHHpxggIOchnlhuqhtzqeDeCCJuEN5OLCEVD23IYzryxcRxN8qf8%2B3lwcIhC8Gi960WICOPtvWMujZnCMmbQBbHSd3EnFl%2BbnC%2FKIP1Yvm5xepyPxiqODb6vk9B8dHjW9TIi%2FaWLADQ3MRZvGvoVx6vtfzLZE12rhe6ubvcopkD2qg4C%2FyPFKFgTx50Ofba5lbDUKSauN8AoWhMSOgqubLQlUPxl9PsUP0M%2BruT5RcZI3l0EQmh6BEBq3SMQpMJFz0TtnHQRvrhvgrrlmkiyJiTVkRrVI0ZbdjU2KXlI3KTgiSbpfMvij9onkxSpwAEAyrDMBV7XF0qiHudCywwHncvjfsM1GmahbGIWOJXEm6VcpWwE%2BaTYO76%2BPhJ0AbVkA%2BHoG7%2BA5zY9Mw0TfXPF%2FfQvK5%2FsW2oA2%2BOMNhkaKj%2Fowfe3yg9TMnKJvPEBxefdfP66Sq3VpsJdonXyc8atMOvPsr8GOqUBc3Dx3AeJfCuLy%2FqtJa%2B6clDjS3NWzFEEa57RQeeol9kUR0uH%2Bngks4Bo1iMKv6VlbSdYjvnotjUVef8jIAiXfXAkzLEvShLdB%2Bc9%2F6IW5vRCn1XR0dN0a9KP9echkQJjGep1L2grel9p%2FXa4Ihcksg%2BgBeDjkNbBI4hCNM5NYtg4e6Kunnz7Q3o5Z3ElDz4UlWaFcFUc%2FNkzu9fowswuqkrNpFu7&X-Amz-Signature=584fcc79a4fff309a000014d8c79c82f3d774f753ab932f74e862937dfde44ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFRN5YB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDeSHcpRh35Y30PY5qWMChUiJfcdKhmTjp5maIGUCTaOwIgVQtgLqvS2Z9GoGM6cGnLQW%2B2Jli3ohrMcmkazfEKS%2BcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGC42r1LVl1zGN9v3SrcAwYeg6RXTpon2xQ%2FkQic5M2pyrQbL3h3pS6daJ4UwEx3tPVHumEfpOTWQOm1H2VNC3vMNMYLK74VHXcLQX8AoJ1eqEKxclhPB18wz22fuLmvpy%2BC9S%2F6X2zUiVwYng8Tg8Js1hab1CyJfy53h7csdHpJ3NqVMQlTGsdGmGiDfqBv1yIXcNUazuo8%2FdxpnpdpaidfbCyFg7M90ACq7h9VHRB6GCRUXYKsoaLRQfXyakbZNK6Fjj7Do9PHo7jfLRhFPpVeWNC0c4mp6SEMIVLXTET7EjiyARokgAUU5NLJphFmUey0kbDi3GYmOxN2Q6qwMuKxN85J5r2PxweJVOzK7zw67LF1Yh8FHsC1Dh2kz7YYZRt1hN72vw8thxD5FnC40%2FH0Az%2F%2BZB0kGTiMX5GjydxLSkR4GGbpyAhB8YU%2BNQi5ZiLj4%2Bl24yEAqYqj5fegjAVMiDfzp64pfrt9rNWxc%2FfArA%2FWDdCaduxQID3HrjDWqG1WMb4T7AAns9jGDXdWpFCEQ9czT%2FSZOT3KskepojjMgGND4Df3nDHPn%2F%2FRWfoDQtGVU2FNSx5JpKkrNLxlO2XVNapxJLVTreLwcjDpCHy7v8stXj0wNL7TPQV0j6LqQLnuLSon%2Fm5mNGUZMOPPsr8GOqUB5v4T4hZ5kPyTuioEh891K7AUBFm9MJsCoVdZc2Ep9AujjYDz0La9qmMJxVqbEpVjpBFH7UcV1ubHd6e1AcQIOC8KxeL6xchimSLRiV7T8XgPhbCipbZZZYrXMRGd832tBcHix5q64n04ykE1BkhmCIbqq0VQ1dW6PQTZdUX1J6cFKKC9rDIBySlmVmCd%2F3nKqoCZyW%2FoQz9vYhtEOpoMTorH992l&X-Amz-Signature=bf01c480f4f9a744018d3dd3f8474d46eb5ed53159a6a36f6585e572bd4540e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFEDV4QP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEco5avEY73KOtPyufJsifAsYM8lU0r3uyvyCojUMfPBAiEA8zJamLhP%2BcqRf89YHFndDcT0lo76QkmwzRe65qme2%2BsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdUpcGAZPDeRnNj2SrcA1k5OE5C7bm6EjXF%2Bx9JlZ8GqccBp0Ak6MQiSu8509bLJt2ZRoI4Iqci2uNuEHSjrPESGaGh75xVhgJuximkir3Tdj4cof0I52uHj4VYplgSPglP2GK%2BFapdNSYpTFjqp%2Bgl6UV36tqyknwyJBOwZ6fwDDxt01MD2iXygxAp%2BKtfyc695wHpDcL9P%2FgllJIgcLIYoyPhaOtIifvUC%2BlTgvXjelmaQHWYNgW1vf%2F5oWSXnvXrMiXkLhAOw1jCQVFlZJVXePjqehemecjOmFmR5tQn0ejTC0H5l8QyWp0t8GUsKeVV0RW4ylACrmgUGQVLlEBJm8P%2BRyx%2FIAC0%2ByvUdh6vaJwg63lbC2khbD1NlolexTwiPJzwqk5PxpCz08LpoYSLcESOYn%2BCC45INPlodQSYb%2Ft2z8FTky0qG8KQFmwGow6etHdEuLf%2B90LVDeQHHY9FqK8aSPcFzh2Ed2PqIe17YDLZgxcZ6NvHGLf%2FGaZus85dOqGnEs9nVNXm2XxXzNRtZpLTnUy2FX2BC2hIQiW24BUMXfOVMjtfH1FeMn%2BmSVoPdp%2FHXIGLRK61EN8NHQUzcx8Vpjp0A%2BX5N2L3IP02U%2FLbr548oMYfNBXlIukPmstpHsFqVr2RvapfMOvPsr8GOqUBqIxqzrqOX2sK0HeVbp55aE3KEobFEINRkQNM1H9iV4dM5jFxbfC%2FpfSTIHFRamOFt2BcrU3M9EcnYyXg1%2BXjNqND2aQU%2BOrQju6fUHXy3q6SbY52xQtjEUPl8r2Wrtmt%2BRdzeX7nvWzG8gOPSKybQEyyqtTHFcYVMEd3jNaPLPMrsuh8oTuRYsqAjkSH3lQ8zkrW6Y%2Ff%2Bs9SLhRREZiFFxYEJqFp&X-Amz-Signature=da07bf235125a7cbe9ba017df5a56e1d30894368a59fdeb7924ac20a8bb7f321&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PIRWON%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDeuXLOi5LoZV38kkxichKIx5DhjjF5F0Vvw%2BbrVQljIQIgOprYoKrGlovzmUn3Tme0cFnwtFuBsukqW2I5JVXD6acqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4egzg5vfLYam8nyrcAwPLArlPMsmpXWmJrwTEguNyp9KXT7pPc0A%2FhCRbyqYFPRN%2B0skYMz1eevcwPw9nfyJ9zOZlmO7CTKHM1N6hSEQ%2B9PGwSHFup%2BYovT7HEuZ0FcVxY%2B4x%2BqL8Kd9bo9wDjA4Y93BxysX%2FeA%2FJKYezW40%2FUgEpTA0JihofneTOvHHpxggIOchnlhuqhtzqeDeCCJuEN5OLCEVD23IYzryxcRxN8qf8%2B3lwcIhC8Gi960WICOPtvWMujZnCMmbQBbHSd3EnFl%2BbnC%2FKIP1Yvm5xepyPxiqODb6vk9B8dHjW9TIi%2FaWLADQ3MRZvGvoVx6vtfzLZE12rhe6ubvcopkD2qg4C%2FyPFKFgTx50Ofba5lbDUKSauN8AoWhMSOgqubLQlUPxl9PsUP0M%2BruT5RcZI3l0EQmh6BEBq3SMQpMJFz0TtnHQRvrhvgrrlmkiyJiTVkRrVI0ZbdjU2KXlI3KTgiSbpfMvij9onkxSpwAEAyrDMBV7XF0qiHudCywwHncvjfsM1GmahbGIWOJXEm6VcpWwE%2BaTYO76%2BPhJ0AbVkA%2BHoG7%2BA5zY9Mw0TfXPF%2FfQvK5%2FsW2oA2%2BOMNhkaKj%2Fowfe3yg9TMnKJvPEBxefdfP66Sq3VpsJdonXyc8atMOvPsr8GOqUBc3Dx3AeJfCuLy%2FqtJa%2B6clDjS3NWzFEEa57RQeeol9kUR0uH%2Bngks4Bo1iMKv6VlbSdYjvnotjUVef8jIAiXfXAkzLEvShLdB%2Bc9%2F6IW5vRCn1XR0dN0a9KP9echkQJjGep1L2grel9p%2FXa4Ihcksg%2BgBeDjkNbBI4hCNM5NYtg4e6Kunnz7Q3o5Z3ElDz4UlWaFcFUc%2FNkzu9fowswuqkrNpFu7&X-Amz-Signature=1821c3771e94141f2592316d3123821d257cf872d70aa3686201e8ec20fac8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
