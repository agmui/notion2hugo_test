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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJWI7NK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFyiIIuMApCFWMOG6yLXKHofhxYlX9A2N64zyu1gOTJ4AiEAsH0TbLB7LAFl7KfRR57lHKiTjWvK%2BMukIuGabtduY9UqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEapQnuNDNOygmZO6SrcA7Gw3mxai%2FYWIdunmPeGTu5CEdur3v51vq%2B54tHEUwv278iHk9PWsE8u%2FpZoUbx42UrSsGCUOkHrQNo2t7%2F0HbyNJfWpgUtbG3Epqe4vROLZVTlyziMeQ8UZB%2B0so1lYJwUCYV4ZfDwnZaFgO9ygR5K7NV9ZPLdcKy2X0WMliUHMd4uj9cIAQh1PVk3wQMc0NwrHB%2BvvAxgqATqnKd%2FPFrsTiiVvbQ17Ycl5MAPHmfStRNaninSjhYO9u%2Fx66cIiiF%2B%2B%2FmBuBgW5MaD6r6fKGTRGqODeiia8zbcOL6769JVrsdWng8nYSHqKHJgnZK4r2h4AB4zXDCZf8ipN8z8MSPCyC8s%2B8fzzA0Qo7LM4i8dk3pPBLPwJnHc0jpf7pM9b8XbgimstnAkOCXQ224VwG5e5nDUxvRH%2Fu4%2BnDgXesKCGsVXCiYmFShJYx%2BIGVJAXjmNlFwG9b%2FRnclNnwvkXnGiNo%2FMFz%2B0ndXWL7u%2B2yrw%2FKeW4UJX8f2EJONK1S8q7UGNorv91S3bI0oXiGIUEfdkVhcNG0%2B7oJue%2BIHsfOc30gGXYV6MdCnfWWhRWQ5PB9By%2BlKe7zlx%2BpAZx74x%2BQ5tO5p4Ao6gCrrgT1QV6%2BpzRDS1iTGmc1iPbpredMPHC9cEGOqUBpI%2Bjlx7xWPfQR6QVsFIVtKKX%2BeGOFYOU6la%2F1fAlvTQ0CR6ixdL8jKftg1W%2B11R5FwhdyzVxmB%2FfJEPh1bxxCHUU2IQKHjeCYVESe6ZLwU2eDe0z%2BsbffN%2BVJJW3GBAqtmiZP5c5CzTkCxwzMjSINUdvuCuSQpkZRn2nUf8XbFVLZsU5AkcSA2c4E%2BQYo6NNqTpmxeDqM6Tx92SchixerBnsn4Yj&X-Amz-Signature=74b968ca8c5aa598b9df70b01753b61baa9b20847e69071fc5ebd46f73d5ab09&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJWI7NK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFyiIIuMApCFWMOG6yLXKHofhxYlX9A2N64zyu1gOTJ4AiEAsH0TbLB7LAFl7KfRR57lHKiTjWvK%2BMukIuGabtduY9UqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEapQnuNDNOygmZO6SrcA7Gw3mxai%2FYWIdunmPeGTu5CEdur3v51vq%2B54tHEUwv278iHk9PWsE8u%2FpZoUbx42UrSsGCUOkHrQNo2t7%2F0HbyNJfWpgUtbG3Epqe4vROLZVTlyziMeQ8UZB%2B0so1lYJwUCYV4ZfDwnZaFgO9ygR5K7NV9ZPLdcKy2X0WMliUHMd4uj9cIAQh1PVk3wQMc0NwrHB%2BvvAxgqATqnKd%2FPFrsTiiVvbQ17Ycl5MAPHmfStRNaninSjhYO9u%2Fx66cIiiF%2B%2B%2FmBuBgW5MaD6r6fKGTRGqODeiia8zbcOL6769JVrsdWng8nYSHqKHJgnZK4r2h4AB4zXDCZf8ipN8z8MSPCyC8s%2B8fzzA0Qo7LM4i8dk3pPBLPwJnHc0jpf7pM9b8XbgimstnAkOCXQ224VwG5e5nDUxvRH%2Fu4%2BnDgXesKCGsVXCiYmFShJYx%2BIGVJAXjmNlFwG9b%2FRnclNnwvkXnGiNo%2FMFz%2B0ndXWL7u%2B2yrw%2FKeW4UJX8f2EJONK1S8q7UGNorv91S3bI0oXiGIUEfdkVhcNG0%2B7oJue%2BIHsfOc30gGXYV6MdCnfWWhRWQ5PB9By%2BlKe7zlx%2BpAZx74x%2BQ5tO5p4Ao6gCrrgT1QV6%2BpzRDS1iTGmc1iPbpredMPHC9cEGOqUBpI%2Bjlx7xWPfQR6QVsFIVtKKX%2BeGOFYOU6la%2F1fAlvTQ0CR6ixdL8jKftg1W%2B11R5FwhdyzVxmB%2FfJEPh1bxxCHUU2IQKHjeCYVESe6ZLwU2eDe0z%2BsbffN%2BVJJW3GBAqtmiZP5c5CzTkCxwzMjSINUdvuCuSQpkZRn2nUf8XbFVLZsU5AkcSA2c4E%2BQYo6NNqTpmxeDqM6Tx92SchixerBnsn4Yj&X-Amz-Signature=98b735d81048938392568e97894485344c844c44c878f8b6acb5aed0e9745877&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJWI7NK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFyiIIuMApCFWMOG6yLXKHofhxYlX9A2N64zyu1gOTJ4AiEAsH0TbLB7LAFl7KfRR57lHKiTjWvK%2BMukIuGabtduY9UqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEapQnuNDNOygmZO6SrcA7Gw3mxai%2FYWIdunmPeGTu5CEdur3v51vq%2B54tHEUwv278iHk9PWsE8u%2FpZoUbx42UrSsGCUOkHrQNo2t7%2F0HbyNJfWpgUtbG3Epqe4vROLZVTlyziMeQ8UZB%2B0so1lYJwUCYV4ZfDwnZaFgO9ygR5K7NV9ZPLdcKy2X0WMliUHMd4uj9cIAQh1PVk3wQMc0NwrHB%2BvvAxgqATqnKd%2FPFrsTiiVvbQ17Ycl5MAPHmfStRNaninSjhYO9u%2Fx66cIiiF%2B%2B%2FmBuBgW5MaD6r6fKGTRGqODeiia8zbcOL6769JVrsdWng8nYSHqKHJgnZK4r2h4AB4zXDCZf8ipN8z8MSPCyC8s%2B8fzzA0Qo7LM4i8dk3pPBLPwJnHc0jpf7pM9b8XbgimstnAkOCXQ224VwG5e5nDUxvRH%2Fu4%2BnDgXesKCGsVXCiYmFShJYx%2BIGVJAXjmNlFwG9b%2FRnclNnwvkXnGiNo%2FMFz%2B0ndXWL7u%2B2yrw%2FKeW4UJX8f2EJONK1S8q7UGNorv91S3bI0oXiGIUEfdkVhcNG0%2B7oJue%2BIHsfOc30gGXYV6MdCnfWWhRWQ5PB9By%2BlKe7zlx%2BpAZx74x%2BQ5tO5p4Ao6gCrrgT1QV6%2BpzRDS1iTGmc1iPbpredMPHC9cEGOqUBpI%2Bjlx7xWPfQR6QVsFIVtKKX%2BeGOFYOU6la%2F1fAlvTQ0CR6ixdL8jKftg1W%2B11R5FwhdyzVxmB%2FfJEPh1bxxCHUU2IQKHjeCYVESe6ZLwU2eDe0z%2BsbffN%2BVJJW3GBAqtmiZP5c5CzTkCxwzMjSINUdvuCuSQpkZRn2nUf8XbFVLZsU5AkcSA2c4E%2BQYo6NNqTpmxeDqM6Tx92SchixerBnsn4Yj&X-Amz-Signature=60dafb8d2517aea3fd9e1ab175ffe7e1afcbd6660312a30c6164f80a580c2b08&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUIHSAD7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDgk%2F3XX%2FOXZ1Kb3M7waFLeix8ypamM5udnYbS%2FzW61OwIhAPXdFbU%2FE5fNLB06EL%2F%2BWN2FM2GmiqBXXTuVffT7e9MbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTvZGZlZOVtoYoaxsq3AP9zGkinSfwM8hIRUHhoHwB6cpPdUUi4sZaCx8mPcrW31UGabxhi7Ie%2FdSDowWjVpu0ZhMYFYgzuFJXXstxnzdvcs3bzdDilFRym5XDuw54kZUa65iQBzFZHKfUKCxo5UDxH8f63imIRzGF1ogrGs8EqWC1WuZ5y%2Bn0bhtr%2FuH%2FbkNIzkgYa3oHDcCunA0xWI5m0rUh0VuHDV8tcCJ240%2FW6RuhsPIHG%2FIDGxUmsi0TFAQfMuij66itcR%2FOaNT9YvYsEOzpKLEtaeOYg7fTG0kElbEHDA%2FcjaUZPikDoHaOvR31uslFSl2aabZcyG14AjgodsTWi%2FMJlStz95DTSIdGuSx%2FEck6CL8NKaToC8zhrd%2FOKyv8vlL2rTaxOIbCcIuDPSgcr%2BzwrOTpYUSvscxKp7g9TFKo1IKr2esdS4iUVHlnBhJABBt0xoeOqlVIw%2FZW7DH0hESRDz3NO7bPDYKykXyZYZjUDyLg8vzNss13Tndbm8BJ4SMdX5pOhuZNTsBcez2ohhHzMezfaSqBI38JvUUhHnk5J1CD5sqA95ThnToXDu%2BwhyPj2AgjiU9NgK6%2BPDwl3DufG8%2FCzs%2FXFSysJezY0hGKCd99gYBTHRtHKoqBPTd45bb0HAGXuzDWwvXBBjqkAVxGiJ2QDeXvTfHyxT1vpZfOUw2H76j3ViY92uUQmmZY7ItfjWY9%2Fllzicz84AcLhXAnBZq2rxWd%2BQytSXjt4GxHY2qnkw4o%2FMAeQr9X6y4xuPWXai5RarLfmUh1%2BX6JC5PQKk9c5yAWIeViY2BCbrYuhcyAMCqvG3P53MUQqP3puXlbRG%2BmEsk3fgdXssw7oRQ5AJ%2BO04OkOP8a5HpGPs8i354u&X-Amz-Signature=71150860ca46ef68e1bb18a2afc47362dc4e60a4dba5d81f6f397d7a458c26f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634M7NIB5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDoBKdIGBHLvofzsLCVxEm6gXoTweJQVMJUuXvq6sUEUQIhAPfJTMoyqaVlasJb2WlqO30zvutDcgCXQrn6xIcirVmVKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRDgDoBPr3yLOb5%2FUq3AN3IkH8vdEaTgh%2FMKnH7PrHBb5vCAYRzkOZ%2BmdFXu%2Fge6ObOkicGxP%2BHjUzV7OtuXgPVn9ouFUejXAnniJKnFVUu6RaIbcWPrRv1J8hi2l%2Frd%2FQdz6A9vZtT4o97EHCIhTtGwhfgT%2B1CFXsPaiQiH6EN5B5TUSaGYBOdi35eCnBjcWwX0DOrpRtQdfypo67JOlhRBVPK%2FvNVNV3rvBCUAhpN1dgC7SiXtOEJKMdpWCcWY6DNKD8Ksv3KqesgKlpkwdOeXlAy3bmaiyjrI2kFcctopA127HgH7iCBi7yE0zZASFnvG44KWp1%2BbQTTIfU4Of7MX042wC2v9Wf%2F1V%2FldqtwkZ%2BA7BYFeQ8nIC8rB5nn8iKg5gyc7kYnDTS16AAsEIjm0mLOjF7NOA%2BIYFa113oO5xBjbmMNNKabYAuxpJ6fEzJLuWNn9zGiaIXeZF7r4SFqLmI8vSau7JtEJXvMSKRv6pEy%2FojqJhP9PgIuRRi8bEdgdn7nGoT5XD0zvB0q1wedmcZRQgYPVOnJbnuXMorb97vnOUv8T9m8rS1ptF57soyGnXBVpa4cu09%2B5%2B2ivhppxyHSFuTrZ%2FHOBjr0ppMdBdB%2B2GOFrK%2BZtpsXvcgFTw3IxSN3NCvDemZlTD%2FwvXBBjqkAcigkg5ALBDxRif3FjaiiHhVx0%2FWCEDCjIMoIE%2BRbw6VV8CHfYYSc2MgqQZToyNpUhdUOtINid8%2BqXjtFxX%2BJYyZ7laXC%2BhXom8ImHCe8bVDVD3TtToHFYzdlltv5BMvZBfz9wSfR9q7HNVzilE8evL%2BhvHV7xbU9HEEuEcqcXhiSN7BY%2F4HyA0DsJTl81crWCiT0VVul6lKgoRl5xrLCiDzISH7&X-Amz-Signature=d6feead03c2367159f4bb2a2d581e83fe71aadebe292f3cd3094e6b26fb64abf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJWI7NK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFyiIIuMApCFWMOG6yLXKHofhxYlX9A2N64zyu1gOTJ4AiEAsH0TbLB7LAFl7KfRR57lHKiTjWvK%2BMukIuGabtduY9UqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEapQnuNDNOygmZO6SrcA7Gw3mxai%2FYWIdunmPeGTu5CEdur3v51vq%2B54tHEUwv278iHk9PWsE8u%2FpZoUbx42UrSsGCUOkHrQNo2t7%2F0HbyNJfWpgUtbG3Epqe4vROLZVTlyziMeQ8UZB%2B0so1lYJwUCYV4ZfDwnZaFgO9ygR5K7NV9ZPLdcKy2X0WMliUHMd4uj9cIAQh1PVk3wQMc0NwrHB%2BvvAxgqATqnKd%2FPFrsTiiVvbQ17Ycl5MAPHmfStRNaninSjhYO9u%2Fx66cIiiF%2B%2B%2FmBuBgW5MaD6r6fKGTRGqODeiia8zbcOL6769JVrsdWng8nYSHqKHJgnZK4r2h4AB4zXDCZf8ipN8z8MSPCyC8s%2B8fzzA0Qo7LM4i8dk3pPBLPwJnHc0jpf7pM9b8XbgimstnAkOCXQ224VwG5e5nDUxvRH%2Fu4%2BnDgXesKCGsVXCiYmFShJYx%2BIGVJAXjmNlFwG9b%2FRnclNnwvkXnGiNo%2FMFz%2B0ndXWL7u%2B2yrw%2FKeW4UJX8f2EJONK1S8q7UGNorv91S3bI0oXiGIUEfdkVhcNG0%2B7oJue%2BIHsfOc30gGXYV6MdCnfWWhRWQ5PB9By%2BlKe7zlx%2BpAZx74x%2BQ5tO5p4Ao6gCrrgT1QV6%2BpzRDS1iTGmc1iPbpredMPHC9cEGOqUBpI%2Bjlx7xWPfQR6QVsFIVtKKX%2BeGOFYOU6la%2F1fAlvTQ0CR6ixdL8jKftg1W%2B11R5FwhdyzVxmB%2FfJEPh1bxxCHUU2IQKHjeCYVESe6ZLwU2eDe0z%2BsbffN%2BVJJW3GBAqtmiZP5c5CzTkCxwzMjSINUdvuCuSQpkZRn2nUf8XbFVLZsU5AkcSA2c4E%2BQYo6NNqTpmxeDqM6Tx92SchixerBnsn4Yj&X-Amz-Signature=40f29924618b911a0a6643853ab0e12d46a8461fa9e45f216e705f834774e309&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
