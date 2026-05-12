---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3L7T5%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDPuVu54krmdE6mJf1Oq4W3T5hYzgX%2F3DVPKOFLYOPgTAiEA1%2Fg57UbiYYSphMwS6Aq5dS06otwx3iyKNaJi4CNR0sIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHi%2FSkHp%2Fo3xDjW6VyrcA3TCIF%2B1Ej0NMqafW7OaRIX8n4JfhD0ywsGqahx3lMKp%2BwGpNR4u8ntjGphFX9fKG%2FFka%2F0BI8MvJncdklBhJguha8%2Bh4A9hLoFqDfYHLxd9zfLyOmCKLc1dVCOhzHTBxTlhvcP7GChinDPOZVOd3F45YhyCKMGCydnoOxwfumi1RyX08%2BLZ609Ntt%2BqFacHSOIJo11VEOs9JzoON4jC5SLxeicPCkDjCvI2k6R%2BRZS12%2BZ1WOBbMAKdbEVQMllr4uLYiAfww%2F5mw5a8%2BHr2ei3HNwOIYrCHfrp2HEkBFOPbNi3o6vFqWYmD%2FeDCf2u9Gsq2f5EcymJSgweuXglzouuiRKTVVJyVKq1swHk%2B1c0pPblOGIQ1OM%2F%2BgmCyPSgoVfTri33TzF3liTr2hcK5eOexcEdu9ivtCdOrPocYwOH9NjmDpfP8djzujo5Yez8O0qMvU%2BrWIH2S%2BKhlD%2FJnWDLJ2vDyhRLbxzM0sZ%2FCe%2BrJHz4MV0V0dFnR5y7pisSX0qHJHHdTGmP5iMxFU8muUSyxp7v8AcWz25ZflW%2BHwaY7hNa5KlGubfpnI22kOJPxRWnQOOiO1ch1o%2FBVmRQrKL6HpyiOqH%2F%2BPzFs4ASzEDIqJk05edQ6LV4HQUGIMJCjitAGOqUBoM3Y%2FNPqn9ge8dHHDHxCDAujy5%2B6IJzzXmlSKX9MvgdHOu68XVnI3KIl8Nj6J1xBa1Kl4fswgRj1qD7iADkrKkgt9ajCptFdkLG6z3wpyU7uZX%2FV88vAcQj%2B%2BxB2kvbHy5jLAw23hoe96hIHQfnokEDsNU4B1%2BFPqSux6CldlWsbX%2FGIwsh%2BkcjlASDI42OAtKCas2Kd7VZPdm3SViN5w0%2F9Uuhz&X-Amz-Signature=69cdf2e7bd2fe5c18a1365e3e3265db0877cc8bd1c226f7bac655999f33b3f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3L7T5%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDPuVu54krmdE6mJf1Oq4W3T5hYzgX%2F3DVPKOFLYOPgTAiEA1%2Fg57UbiYYSphMwS6Aq5dS06otwx3iyKNaJi4CNR0sIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHi%2FSkHp%2Fo3xDjW6VyrcA3TCIF%2B1Ej0NMqafW7OaRIX8n4JfhD0ywsGqahx3lMKp%2BwGpNR4u8ntjGphFX9fKG%2FFka%2F0BI8MvJncdklBhJguha8%2Bh4A9hLoFqDfYHLxd9zfLyOmCKLc1dVCOhzHTBxTlhvcP7GChinDPOZVOd3F45YhyCKMGCydnoOxwfumi1RyX08%2BLZ609Ntt%2BqFacHSOIJo11VEOs9JzoON4jC5SLxeicPCkDjCvI2k6R%2BRZS12%2BZ1WOBbMAKdbEVQMllr4uLYiAfww%2F5mw5a8%2BHr2ei3HNwOIYrCHfrp2HEkBFOPbNi3o6vFqWYmD%2FeDCf2u9Gsq2f5EcymJSgweuXglzouuiRKTVVJyVKq1swHk%2B1c0pPblOGIQ1OM%2F%2BgmCyPSgoVfTri33TzF3liTr2hcK5eOexcEdu9ivtCdOrPocYwOH9NjmDpfP8djzujo5Yez8O0qMvU%2BrWIH2S%2BKhlD%2FJnWDLJ2vDyhRLbxzM0sZ%2FCe%2BrJHz4MV0V0dFnR5y7pisSX0qHJHHdTGmP5iMxFU8muUSyxp7v8AcWz25ZflW%2BHwaY7hNa5KlGubfpnI22kOJPxRWnQOOiO1ch1o%2FBVmRQrKL6HpyiOqH%2F%2BPzFs4ASzEDIqJk05edQ6LV4HQUGIMJCjitAGOqUBoM3Y%2FNPqn9ge8dHHDHxCDAujy5%2B6IJzzXmlSKX9MvgdHOu68XVnI3KIl8Nj6J1xBa1Kl4fswgRj1qD7iADkrKkgt9ajCptFdkLG6z3wpyU7uZX%2FV88vAcQj%2B%2BxB2kvbHy5jLAw23hoe96hIHQfnokEDsNU4B1%2BFPqSux6CldlWsbX%2FGIwsh%2BkcjlASDI42OAtKCas2Kd7VZPdm3SViN5w0%2F9Uuhz&X-Amz-Signature=430f6da7bf875f3c21f0d90f7c7dc44813a8e3692f425f0ccc431ae9bf40faa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3L7T5%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDPuVu54krmdE6mJf1Oq4W3T5hYzgX%2F3DVPKOFLYOPgTAiEA1%2Fg57UbiYYSphMwS6Aq5dS06otwx3iyKNaJi4CNR0sIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHi%2FSkHp%2Fo3xDjW6VyrcA3TCIF%2B1Ej0NMqafW7OaRIX8n4JfhD0ywsGqahx3lMKp%2BwGpNR4u8ntjGphFX9fKG%2FFka%2F0BI8MvJncdklBhJguha8%2Bh4A9hLoFqDfYHLxd9zfLyOmCKLc1dVCOhzHTBxTlhvcP7GChinDPOZVOd3F45YhyCKMGCydnoOxwfumi1RyX08%2BLZ609Ntt%2BqFacHSOIJo11VEOs9JzoON4jC5SLxeicPCkDjCvI2k6R%2BRZS12%2BZ1WOBbMAKdbEVQMllr4uLYiAfww%2F5mw5a8%2BHr2ei3HNwOIYrCHfrp2HEkBFOPbNi3o6vFqWYmD%2FeDCf2u9Gsq2f5EcymJSgweuXglzouuiRKTVVJyVKq1swHk%2B1c0pPblOGIQ1OM%2F%2BgmCyPSgoVfTri33TzF3liTr2hcK5eOexcEdu9ivtCdOrPocYwOH9NjmDpfP8djzujo5Yez8O0qMvU%2BrWIH2S%2BKhlD%2FJnWDLJ2vDyhRLbxzM0sZ%2FCe%2BrJHz4MV0V0dFnR5y7pisSX0qHJHHdTGmP5iMxFU8muUSyxp7v8AcWz25ZflW%2BHwaY7hNa5KlGubfpnI22kOJPxRWnQOOiO1ch1o%2FBVmRQrKL6HpyiOqH%2F%2BPzFs4ASzEDIqJk05edQ6LV4HQUGIMJCjitAGOqUBoM3Y%2FNPqn9ge8dHHDHxCDAujy5%2B6IJzzXmlSKX9MvgdHOu68XVnI3KIl8Nj6J1xBa1Kl4fswgRj1qD7iADkrKkgt9ajCptFdkLG6z3wpyU7uZX%2FV88vAcQj%2B%2BxB2kvbHy5jLAw23hoe96hIHQfnokEDsNU4B1%2BFPqSux6CldlWsbX%2FGIwsh%2BkcjlASDI42OAtKCas2Kd7VZPdm3SViN5w0%2F9Uuhz&X-Amz-Signature=8ea2858d9c329e510fe8aee7781f621e5e2211889d170a4ba521da92ff80682c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SY66PQ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCLiwX9VkPZzOVJ5NJDw69Zrvi9Syqmb7okDOOKmXSoxQIhAMDaYw9LOoS7KoShL37Famz9%2BUWa9q1cMJUDViU09bweKv8DCCQQABoMNjM3NDIzMTgzODA1IgxJNJrDcFrLpM%2FfwaMq3APQK0%2BLwX%2BAH2iggGNYNN8NkCnMqPgX%2BtqrayR0%2FzUWHJfhgUUuWHcrTuicbKH9IoPpnw6n5tPGO8xpbafZ8d%2FSOVEBai8%2FbZyjkGfYMYTUwa%2BrQ4FHTgVlDNlAKZk%2FoJus9U7LILk8HQ8sR828FXNZgA9gdq%2Fgojl7bwKQxxUHnVT%2B%2B4SghbCUoGwGm8hI%2F0KUTwa%2BrcvGmXT2sYRZgcQHT487%2FNCkJ90EjwWqSiabI8ywXW3vLsQRlSSrjoSq7IFCdE%2FVEersg1P7vDVMeXkSO4zHviD3eKeL6nItBtZgBj5XTL%2FooquUpWJQJds6BR01%2FWUcon7CAujVky9y4YBy4%2BxRLJInswy3nrdJZWb%2B3Q5Kp9l%2FI1AVELlPRqH6WKyZwhywixfuRiXgz80NuE63BK%2B3Kd5dAaduZay6Bd6fx8ugvRx4XQtelUQhCnqjJ7b5FnpUthnn4X3xE%2FUFsey3im0jxtb3M6uHCDEldXRGPm8gYfydpxs%2B6gL%2BxiEXkw8Qsjjs3%2Fa%2FXnt1qx1%2FkNT%2BdbOrdixvNU%2B13bbsq9JE1CpjZ4NwRhGnSBmNUpIWpOJcc9Vf3KzV4%2FFvKY8S7c9hpWdi%2BH8rBoKm6bQ%2FScjQ%2BwqLMULvysAyKgzWqDDPo4rQBjqkAYy06mQS2s2Q34J1CQyIfTZgwLYY9o1E7xf4BooT%2BmCLiJmerRfvsGG%2BPHm6ylxB1JKWpDvrI49%2F5YPVbeXAvX80l2YObLyVWIVf17tEf%2FvA7rfTf6NrvVcoCYLLzowMZZHbH8tKmsTeWKLjiqYVe4xT8Vb6CsZIPllLSLrnRDPoFeuQ9B1OXmy9GK6wM9lQVZiH%2FilqQZRhbk8LLZhD4cHv64JU&X-Amz-Signature=38ac0ad6eb2ea0b0c111efb611b4bd4f629344bf6e65cfde391c48d645bc2a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTD2FVG%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCSz4dBkoz3o%2BydlpVOfMchZh4Qe8WOaF90UzNJVIj7SAIhAIpGdq7sRgAebR9rGnnbnCPSVQBjsvq4wAIAxHnIHnc0Kv8DCCQQABoMNjM3NDIzMTgzODA1IgyRFvd2W2z1i65neVYq3AO6UP5Mu%2B8fb4xWhUX3dI%2FwXxmE6QOdJ3KQilmgVyB28p8hrzgEcMW9In%2BilqTAkUTpR4FlsDxt1B46AFDtmtoBa%2BviBex4BXZlEVREYGzxJs4l%2FWpOEyRHK4mCI078q%2F2sJ4%2FZoFY9pc6tL9aM12INgMhOYKrUXis83pfrSYdFPcpJVA5IjXICRbi2qIYIvls6DB%2FHl5xJ5GLf2Cr8RyP8O4sT%2Fo0d%2BqxBIShOqR4MRi0Auepm1uR7vZnTSVy%2BqH10c5FCoID%2F%2B7co2nE1WTXTUu%2BQwG4ffTltq3sAYWGlaOZZMUTrpHGjfj8JHbiAwjg9%2FJ2wxDuBtvETfT1Ha4OE1uWfpNlocaIDItpwQnaDuS47MD2wMx8hSyfmFOcrIZMtnx9a7c2SHg2J6dAlxYBcuUuInlf6gTMZh2mj56%2BY%2BK6B%2FOiEvvrJzxUDu3KuzdXDeqXmB0iC038StRzQc8mIsV2ysCm%2FhohKUPzVCeYzsb96vKGxDR1lxX7UFfE7LUFbC2j3n9VioMJiS5bp4MEFmUr1W58ct3Ky47cRuvRanScn1xLq4owN1SsDtZuFpsIbzq6BfKKMk7sv%2FmePINu2z0m%2BKKUfor3%2BJTKGMebkaORKMPVwTYxT%2BuXvwTCxpIrQBjqkARNWBFgGegnpDlfE0c6oS%2FkmPweWTyySUb2fBEw2u%2BQygsVF8bLGOq4MbNBnf8P501QoF8CsECutU%2BqH9rtzMUmdbTysqznTHlf58zOFunDpXWfI6ToPxD68wQnNYqkwadBS6N7I%2FwDr4GzTwHs2zkpz25OE8A0apnjseD4ytSDnwfhOQ1F9HvZF5CwRucaoXEQXBrIrPPUj1MOj1UHex5C%2Foq6q&X-Amz-Signature=e03b3900bb2dcaf0ef94c26ad45531a2907fa76c7855cbb1484c81b679f5fbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXR3L7T5%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDPuVu54krmdE6mJf1Oq4W3T5hYzgX%2F3DVPKOFLYOPgTAiEA1%2Fg57UbiYYSphMwS6Aq5dS06otwx3iyKNaJi4CNR0sIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHi%2FSkHp%2Fo3xDjW6VyrcA3TCIF%2B1Ej0NMqafW7OaRIX8n4JfhD0ywsGqahx3lMKp%2BwGpNR4u8ntjGphFX9fKG%2FFka%2F0BI8MvJncdklBhJguha8%2Bh4A9hLoFqDfYHLxd9zfLyOmCKLc1dVCOhzHTBxTlhvcP7GChinDPOZVOd3F45YhyCKMGCydnoOxwfumi1RyX08%2BLZ609Ntt%2BqFacHSOIJo11VEOs9JzoON4jC5SLxeicPCkDjCvI2k6R%2BRZS12%2BZ1WOBbMAKdbEVQMllr4uLYiAfww%2F5mw5a8%2BHr2ei3HNwOIYrCHfrp2HEkBFOPbNi3o6vFqWYmD%2FeDCf2u9Gsq2f5EcymJSgweuXglzouuiRKTVVJyVKq1swHk%2B1c0pPblOGIQ1OM%2F%2BgmCyPSgoVfTri33TzF3liTr2hcK5eOexcEdu9ivtCdOrPocYwOH9NjmDpfP8djzujo5Yez8O0qMvU%2BrWIH2S%2BKhlD%2FJnWDLJ2vDyhRLbxzM0sZ%2FCe%2BrJHz4MV0V0dFnR5y7pisSX0qHJHHdTGmP5iMxFU8muUSyxp7v8AcWz25ZflW%2BHwaY7hNa5KlGubfpnI22kOJPxRWnQOOiO1ch1o%2FBVmRQrKL6HpyiOqH%2F%2BPzFs4ASzEDIqJk05edQ6LV4HQUGIMJCjitAGOqUBoM3Y%2FNPqn9ge8dHHDHxCDAujy5%2B6IJzzXmlSKX9MvgdHOu68XVnI3KIl8Nj6J1xBa1Kl4fswgRj1qD7iADkrKkgt9ajCptFdkLG6z3wpyU7uZX%2FV88vAcQj%2B%2BxB2kvbHy5jLAw23hoe96hIHQfnokEDsNU4B1%2BFPqSux6CldlWsbX%2FGIwsh%2BkcjlASDI42OAtKCas2Kd7VZPdm3SViN5w0%2F9Uuhz&X-Amz-Signature=198745a1b6b526d99684dff42573c2be5370b3206562eef5a4087b6867d18c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
