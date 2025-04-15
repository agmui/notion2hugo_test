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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWB2UY2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeOYCvzbq5EQLpPpqgWioBq%2FWj88QwVb01wstpSGMdWgIhAI88arPRiN94UNtzMjh8dR%2BVLxQJmycbthztEk%2BYiLRtKv8DCDQQABoMNjM3NDIzMTgzODA1Igw8I3meb%2B5jcB5P5%2BIq3AMF%2BNaA%2BwhU1PjuAH6xxLVa6Sj5iVUoHNbOA3fhTSbpobWsAiBxEBX6s1e1m6DUUavtqXkbdqAMldPohvkLiXArAEYr4rxAteJ4D6zpdgxwdESBdZjqagfK0cYE8wx6jUIm2VF2oFROdbXnfR2p1DIxZIz7gqAH71EkGh7w4LPy4EZ%2FT22wki3Fli0z%2BwTXfiYSKIUMWyTLbEJd6WMpm0oDvueKfy0c2fO1XbBHVPUMlBWmNY7%2Fh6PXyIy6WNjAcLHPU%2FhW3KdOFwlcVJj9Hw59MBfXW7bieAIZ%2F%2BTU1b%2BuqQWCjY%2F6sxJY%2BKKKHL2WHJVyzTlt0t4okvAPlVKuQv7BvrermwV5CbIysnsbcjr7VO1lYjH7ikGM7PL%2BjsfD2Cm1hIAu%2FjOm%2BP0SQ2Y5r4DNHV08fHKLl5Scq93Mw1pDYOVANgN7iqeB7%2FJvv%2FT46JpKHnOnZPrqb%2FScn5tjyGUoDxbmA1MxUcNk%2B0gFFBEtunOVG5Z8De58sULhCc5XXPndV8rAyvUtasriDQJl3Q%2B%2BQ2Ib4Iy%2BRnq6bxZKU6coiqImcYcyJEfjOsfLFACI4lAFjNLpcIWVTxr3ozgsUNaa8GgRPkcsO39nEwaZwiPnF7R2qgr7zWZiRjflrjCN1%2Fq%2FBjqkAamWKBDswTJlI0lpHk1ipesNWRX4B4dEHNpkll48oIoJAkzbJ8w6MEOWbjSzNGLU6wWYFWU12m1Eqxxh2WRfA1s9A5x4H2hy%2FDmIEurnB00zZqtNT4uX4TG9wHEgkGjL0rke15LT9JGbje%2BAh3Oh%2FfwgKPzDBPXGeS%2FyAKI1M4oGYWMMfM%2B9z4SSi9gtjOUUP5y11JEcWNVHR1QwWTVwhHIckx3D&X-Amz-Signature=b5938f991df4be969623cbe6e5847283ad69a3008e8de5d7a8c46bad07a37fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWB2UY2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeOYCvzbq5EQLpPpqgWioBq%2FWj88QwVb01wstpSGMdWgIhAI88arPRiN94UNtzMjh8dR%2BVLxQJmycbthztEk%2BYiLRtKv8DCDQQABoMNjM3NDIzMTgzODA1Igw8I3meb%2B5jcB5P5%2BIq3AMF%2BNaA%2BwhU1PjuAH6xxLVa6Sj5iVUoHNbOA3fhTSbpobWsAiBxEBX6s1e1m6DUUavtqXkbdqAMldPohvkLiXArAEYr4rxAteJ4D6zpdgxwdESBdZjqagfK0cYE8wx6jUIm2VF2oFROdbXnfR2p1DIxZIz7gqAH71EkGh7w4LPy4EZ%2FT22wki3Fli0z%2BwTXfiYSKIUMWyTLbEJd6WMpm0oDvueKfy0c2fO1XbBHVPUMlBWmNY7%2Fh6PXyIy6WNjAcLHPU%2FhW3KdOFwlcVJj9Hw59MBfXW7bieAIZ%2F%2BTU1b%2BuqQWCjY%2F6sxJY%2BKKKHL2WHJVyzTlt0t4okvAPlVKuQv7BvrermwV5CbIysnsbcjr7VO1lYjH7ikGM7PL%2BjsfD2Cm1hIAu%2FjOm%2BP0SQ2Y5r4DNHV08fHKLl5Scq93Mw1pDYOVANgN7iqeB7%2FJvv%2FT46JpKHnOnZPrqb%2FScn5tjyGUoDxbmA1MxUcNk%2B0gFFBEtunOVG5Z8De58sULhCc5XXPndV8rAyvUtasriDQJl3Q%2B%2BQ2Ib4Iy%2BRnq6bxZKU6coiqImcYcyJEfjOsfLFACI4lAFjNLpcIWVTxr3ozgsUNaa8GgRPkcsO39nEwaZwiPnF7R2qgr7zWZiRjflrjCN1%2Fq%2FBjqkAamWKBDswTJlI0lpHk1ipesNWRX4B4dEHNpkll48oIoJAkzbJ8w6MEOWbjSzNGLU6wWYFWU12m1Eqxxh2WRfA1s9A5x4H2hy%2FDmIEurnB00zZqtNT4uX4TG9wHEgkGjL0rke15LT9JGbje%2BAh3Oh%2FfwgKPzDBPXGeS%2FyAKI1M4oGYWMMfM%2B9z4SSi9gtjOUUP5y11JEcWNVHR1QwWTVwhHIckx3D&X-Amz-Signature=fd796bffc34aeb55412c36829bf4749ab008de4f67d6a49acf40ea16977987aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYJPIRB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4KIa76bKFDgoHc%2B25LcNvhNkER6WyCeDprs%2F87xWsUgIgDH6u3Cx6W52ujrYIN9cCAAR8GcxWM6CxvrWPwvRM6D8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ%2BcGPsatqnd1uSvCyrcA%2BkdhN5YtZXVDhXmH4BxeB3svXSVU6FGZWjD0136x7wBFrBiChgl4%2BGs5j%2Fzmy40%2F6bxiZi8nFhLD%2FX%2Fb8vTqVSzMHO4ze%2Bd7OGavGqJc2equrTcwHe%2Fa%2BmNCmsl2tLj4yF8z%2FEH9tO4E2vYWE4%2FL1EqSy6bywAyqc6UMqJlgZKxfPl1t3Llrlye5RCo%2BI2uZ2o9trng9pRhJQi2HNK6%2FLxfG%2FxhnmkLWMqD9VEaRkACTR8i%2FMWTIIglJcAFC7qL0uJiJNTucHEPAYDuo3Wc2UokYrJyTdgYMhMWJ3UyweGS%2BqkkBQ%2BxGor7y6D1qvOFxrw6B4pgvyCeqEYVlIi2LT5zqRLBeSxgmCQpD0MiOjhEmfWCS%2Bjyy85ecM910lM5plZNnReKNV88PO6hy9iTC4yPtbO3PCR9Cq5%2FzJgpk7bih%2FkWBDaXTgVp6ZzvS6Fe1%2FzT27AzJbHqE8JRCUzKbKpceIDOM7UDpMvb%2FQlNyugljRyukHC4d%2BvCyylZRSrVCdTvfFKM%2FDet9LmHNjJmqRibUjckdlovu06tk%2Bv2ta2%2FyDuvBekQgvwlvyUKhyHlxoXv7YlRdsjYilZ%2Fh0NI9My21FhZI%2Fc6AYJOd8EvdQbrBWClku%2BIaFs9P2skMPfV%2Br8GOqUB589t7TxrBg594jr15Xb9N8LFKVXXSRL4%2BPUSMojA6mvClUOLJdwAZ6djxB%2BA2t%2BNPRkFgv1BGhtEqKhXQmGsM2s5qaufBE8THR0R7GobXcoMLftlgI2Q4%2F6PFALpN4IRGDPk%2Fjw7xTDWc0ybWThyb5fEkOEmcNXZphstwe%2Fyjqdnh71Y9%2F%2FnCeOAbAECDdQcFclvGQUfzFcC9PjNz%2Bc7yetrF4y1&X-Amz-Signature=7a375ebd176b1792cc09da9fec0b9e2791752c25473166a89fdd9aba0929a506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDSSEHLZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbQIf93b8jqGqpKlX7EmrLs%2BVFHCbi9BhtZ0AIyc45jgIhAN8k9F%2FcA%2F%2Bh0n%2B%2FkNfPR55YrMmzRYH%2F9TI%2BUPnuRTzfKv8DCDQQABoMNjM3NDIzMTgzODA1IgzVycVZMdX7t0BnopYq3APawmRcf5%2BbJmUeqmMC4fY7QZ1fdh87PMl9yhPlAIn1QnpnJwD4of0Bb59uF%2Fg3k%2Fo2aHwpvD4vSjUd2e9rvgDB%2B92G23Mg%2Fx0Fjog7U9B3vHHRnR2HEAqHj1AjPjmDP2PmTP0aMtnrpwqZ4m08ra2YRLdI%2BM2a%2Bdhn5dcN%2FVP%2F%2BsOigNC0ph5XKSvSTOwdrBxhlI0KbYQK4uo3sQjAC%2BO8cvEXno3nO0Y2cFhx1e1zFt%2FjI9ReYzYKDWvWvGCs4aL5AfLfF6Sj5ajeLEStX9xHgvkOW1YDBsP0M%2Bbvoli6uzVcig%2BGmuNpUHpbNZVZyoOCpWQ9M16QYNwE3meic96vwc2JiRhxY2f6Ma3ZJPQsbkLR2luEqhsy4bdp99cWa0fb8fiM91JbgZKp89c6JST2ceHUxgSkSt80VqWlwqej7OK0hAAQrKAIQilNkxwQan63eNZQIhiV2np0%2BFXTZvuhSyGqt4PDODGJLGK8kPQJ%2F6RVO1vC%2F2ZDFnDptLXJiZP%2B%2BaQJCbMjamFxuCSoWcfKIdbi%2FCrTmkb38o2A95Pccksc2WwoOmF6J5c3IHy2Rk44u%2B0gXTryj8DANDmNxgQaO1th91WpUIYsATgrbiTrcdxHccnG4MxxGx60vDDy1vq%2FBjqkAZa8dzdIgUQkHHul5CXo3HhlGa2QugTJF274yVoGz3t%2BJDx0jTaThqI9heV%2FWZXMLdrEWuE0IBm6ySw0l0OWRVqbNSfoqBFv9D3Ve2FHl8Mqri4WfjLNFgFVGHbg4%2BQluY13Z3Ic%2BO%2Bng7DgPXNAmfA6IC7SEzQe8Hh%2Fi6AbHas3SbIGGemhEyZn5NI3JmCkvuVwNIzLUtiK3IF2DV%2FbxFcIqtB4&X-Amz-Signature=1759a29e0e6a70647e4987354a430716e1b3b1df22a84aa3be7ea564a16c70d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLWB2UY2%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeOYCvzbq5EQLpPpqgWioBq%2FWj88QwVb01wstpSGMdWgIhAI88arPRiN94UNtzMjh8dR%2BVLxQJmycbthztEk%2BYiLRtKv8DCDQQABoMNjM3NDIzMTgzODA1Igw8I3meb%2B5jcB5P5%2BIq3AMF%2BNaA%2BwhU1PjuAH6xxLVa6Sj5iVUoHNbOA3fhTSbpobWsAiBxEBX6s1e1m6DUUavtqXkbdqAMldPohvkLiXArAEYr4rxAteJ4D6zpdgxwdESBdZjqagfK0cYE8wx6jUIm2VF2oFROdbXnfR2p1DIxZIz7gqAH71EkGh7w4LPy4EZ%2FT22wki3Fli0z%2BwTXfiYSKIUMWyTLbEJd6WMpm0oDvueKfy0c2fO1XbBHVPUMlBWmNY7%2Fh6PXyIy6WNjAcLHPU%2FhW3KdOFwlcVJj9Hw59MBfXW7bieAIZ%2F%2BTU1b%2BuqQWCjY%2F6sxJY%2BKKKHL2WHJVyzTlt0t4okvAPlVKuQv7BvrermwV5CbIysnsbcjr7VO1lYjH7ikGM7PL%2BjsfD2Cm1hIAu%2FjOm%2BP0SQ2Y5r4DNHV08fHKLl5Scq93Mw1pDYOVANgN7iqeB7%2FJvv%2FT46JpKHnOnZPrqb%2FScn5tjyGUoDxbmA1MxUcNk%2B0gFFBEtunOVG5Z8De58sULhCc5XXPndV8rAyvUtasriDQJl3Q%2B%2BQ2Ib4Iy%2BRnq6bxZKU6coiqImcYcyJEfjOsfLFACI4lAFjNLpcIWVTxr3ozgsUNaa8GgRPkcsO39nEwaZwiPnF7R2qgr7zWZiRjflrjCN1%2Fq%2FBjqkAamWKBDswTJlI0lpHk1ipesNWRX4B4dEHNpkll48oIoJAkzbJ8w6MEOWbjSzNGLU6wWYFWU12m1Eqxxh2WRfA1s9A5x4H2hy%2FDmIEurnB00zZqtNT4uX4TG9wHEgkGjL0rke15LT9JGbje%2BAh3Oh%2FfwgKPzDBPXGeS%2FyAKI1M4oGYWMMfM%2B9z4SSi9gtjOUUP5y11JEcWNVHR1QwWTVwhHIckx3D&X-Amz-Signature=e1f97696004d01d4a17315a366c0d9b6650e87008b0718b185dc1a5dbcbdfc58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
