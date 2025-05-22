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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMY2FALD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIETofxfCMUhVf4maaDlDP%2Fl9sEWHDw8bWe6ycULuLMxsAiBR8dGqUnicv2sgsWE71aPq9NldkA0ekdHXZymQhi29VyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAgouR%2FcTD7EoDbKKtwDa7aT73tWHJ%2BH7DhvJed66QO6Y6bVUy8v%2B9Gw59ocGWnrho1ylwZkcgT0dQ24BzdXJTFdCboTn2Jq9%2B9ZiVHRyHWJkXVZ%2BycEc3MIN65dk6czKV23bJWGK08UoQlRuh4LI8i50xeX%2B7v0NSgEqJU8Pmb8qV0TsaKtrCTFm1%2BVj%2FEmQJIalnyI6bsu86BLOEUoW3jRlYxA9TOb%2FM0gimI6aNyZM55C3mVl%2BrYgt6NLegF8ZKUOiD5b4FX7y%2BcwIc5BvtRMj6kbowC4OIjOsdS78xSLlPjqiNMRmD0rojqYuUTjxyEH3%2FSl0EjXnGIBo3Sg%2FtGDw46fpLoQUYsMe6EdDS2v2%2F8e7ZV7R%2Fqz%2B2YUw%2F4k5uG%2BI1n%2F2JGQ2Jg5vGzO6i8jW786l1dAqrNlWLM5O%2FvfpaDopG2P%2BLWM6VMPQ7Hw0%2Fe6Kr8VQNn7igqsha8vT0gqRVb4jRbQtMvWxk1jE2mDoJLJOCIsfxkXfRztM3O2keAh5Ojtfw4XQKnpYvDCcDOBBT4ae47FLKAfFBUoyyMnZU9RDADnSZs75%2FIwiIR32rTpc1Xo4Cvj5%2BYP8rAD2NpgZgfuxWsR%2BfPa8AGKpcFOmHMswiAxgz5x80AMuumiPmc8ZrFug2snUIcw4uG8wQY6pgGZmArBU%2BtrpVTKmhWi6e1vySTaNgpwRTED1JLr6npIPKWqDcuiu8bEpEMyzaJrVlLfVtVreg%2BAAxjDcQr5B2Df4gfIWADiAn8aPj13OE6DaZuowQBWIod%2FACW36vm%2BgCQHzcsQHrH2g%2FlPTndjii%2BOZ8KGlVtcJpLizkx%2BKFj9RhgbzIWKFYHofXx%2Bknw4ij73nmLJ80APWdO25IEEHNxMcAOBX3Pk&X-Amz-Signature=9e75d8c9300676bba46ca63b2f1c28fa4f481431a4d47b585f5bbe59d67da5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMY2FALD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIETofxfCMUhVf4maaDlDP%2Fl9sEWHDw8bWe6ycULuLMxsAiBR8dGqUnicv2sgsWE71aPq9NldkA0ekdHXZymQhi29VyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAgouR%2FcTD7EoDbKKtwDa7aT73tWHJ%2BH7DhvJed66QO6Y6bVUy8v%2B9Gw59ocGWnrho1ylwZkcgT0dQ24BzdXJTFdCboTn2Jq9%2B9ZiVHRyHWJkXVZ%2BycEc3MIN65dk6czKV23bJWGK08UoQlRuh4LI8i50xeX%2B7v0NSgEqJU8Pmb8qV0TsaKtrCTFm1%2BVj%2FEmQJIalnyI6bsu86BLOEUoW3jRlYxA9TOb%2FM0gimI6aNyZM55C3mVl%2BrYgt6NLegF8ZKUOiD5b4FX7y%2BcwIc5BvtRMj6kbowC4OIjOsdS78xSLlPjqiNMRmD0rojqYuUTjxyEH3%2FSl0EjXnGIBo3Sg%2FtGDw46fpLoQUYsMe6EdDS2v2%2F8e7ZV7R%2Fqz%2B2YUw%2F4k5uG%2BI1n%2F2JGQ2Jg5vGzO6i8jW786l1dAqrNlWLM5O%2FvfpaDopG2P%2BLWM6VMPQ7Hw0%2Fe6Kr8VQNn7igqsha8vT0gqRVb4jRbQtMvWxk1jE2mDoJLJOCIsfxkXfRztM3O2keAh5Ojtfw4XQKnpYvDCcDOBBT4ae47FLKAfFBUoyyMnZU9RDADnSZs75%2FIwiIR32rTpc1Xo4Cvj5%2BYP8rAD2NpgZgfuxWsR%2BfPa8AGKpcFOmHMswiAxgz5x80AMuumiPmc8ZrFug2snUIcw4uG8wQY6pgGZmArBU%2BtrpVTKmhWi6e1vySTaNgpwRTED1JLr6npIPKWqDcuiu8bEpEMyzaJrVlLfVtVreg%2BAAxjDcQr5B2Df4gfIWADiAn8aPj13OE6DaZuowQBWIod%2FACW36vm%2BgCQHzcsQHrH2g%2FlPTndjii%2BOZ8KGlVtcJpLizkx%2BKFj9RhgbzIWKFYHofXx%2Bknw4ij73nmLJ80APWdO25IEEHNxMcAOBX3Pk&X-Amz-Signature=f795d8824f3efecccae672a7d6421387446c3b595e165799e316fdea83c7b765&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMY2FALD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIETofxfCMUhVf4maaDlDP%2Fl9sEWHDw8bWe6ycULuLMxsAiBR8dGqUnicv2sgsWE71aPq9NldkA0ekdHXZymQhi29VyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAgouR%2FcTD7EoDbKKtwDa7aT73tWHJ%2BH7DhvJed66QO6Y6bVUy8v%2B9Gw59ocGWnrho1ylwZkcgT0dQ24BzdXJTFdCboTn2Jq9%2B9ZiVHRyHWJkXVZ%2BycEc3MIN65dk6czKV23bJWGK08UoQlRuh4LI8i50xeX%2B7v0NSgEqJU8Pmb8qV0TsaKtrCTFm1%2BVj%2FEmQJIalnyI6bsu86BLOEUoW3jRlYxA9TOb%2FM0gimI6aNyZM55C3mVl%2BrYgt6NLegF8ZKUOiD5b4FX7y%2BcwIc5BvtRMj6kbowC4OIjOsdS78xSLlPjqiNMRmD0rojqYuUTjxyEH3%2FSl0EjXnGIBo3Sg%2FtGDw46fpLoQUYsMe6EdDS2v2%2F8e7ZV7R%2Fqz%2B2YUw%2F4k5uG%2BI1n%2F2JGQ2Jg5vGzO6i8jW786l1dAqrNlWLM5O%2FvfpaDopG2P%2BLWM6VMPQ7Hw0%2Fe6Kr8VQNn7igqsha8vT0gqRVb4jRbQtMvWxk1jE2mDoJLJOCIsfxkXfRztM3O2keAh5Ojtfw4XQKnpYvDCcDOBBT4ae47FLKAfFBUoyyMnZU9RDADnSZs75%2FIwiIR32rTpc1Xo4Cvj5%2BYP8rAD2NpgZgfuxWsR%2BfPa8AGKpcFOmHMswiAxgz5x80AMuumiPmc8ZrFug2snUIcw4uG8wQY6pgGZmArBU%2BtrpVTKmhWi6e1vySTaNgpwRTED1JLr6npIPKWqDcuiu8bEpEMyzaJrVlLfVtVreg%2BAAxjDcQr5B2Df4gfIWADiAn8aPj13OE6DaZuowQBWIod%2FACW36vm%2BgCQHzcsQHrH2g%2FlPTndjii%2BOZ8KGlVtcJpLizkx%2BKFj9RhgbzIWKFYHofXx%2Bknw4ij73nmLJ80APWdO25IEEHNxMcAOBX3Pk&X-Amz-Signature=f02e859e473b70bffcfc432b9e758594e749ebeec77dd7af0726619b0d50ef9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COEXF4K%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCPi%2Fql0ghwcvh%2BijQ%2FEi6BDt9rxgh88e5eGHHdgq5wfgIgHFdg5m09HT3u39OEIGY%2BPn8PUR0YwMReBTLrsPa08oMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7qGXf7tEIQvYRf7ircAwZoxsaMWc3mpA46GKpqiWFTa4dLR9GKUwmo%2FNsIOYwd%2B4g0If%2BBb0m%2FDjRWq9WHClGY8tm17Xuh5VTOLcJ%2Fa04Po526qpnWhkktTxmwYLraN%2FyJmp4n%2BK4sY9aEDOaloehB%2FSvT6QOb6VVm2dgyZ%2FFsMwJrDAXwTMgJLbLGEORvc4%2F25Q9efcsxSpo19eJXFDuUqOdAN01%2BxYFtSf2B5cfbDqBQ55vlHGFqUbNF8T0MqQS8fHIJYeBJhzmWKUCGp8BY91lZ4V6SDDYs7N81LJC%2BXPtdjegTEp4HdZyY0hlnoJwHppMXd6cwvTQ5AHgNnu7SYcXHFY8myMDf0ak6cPnsNMuxZjM6htwTkemSOImBbKo5NaD3NbH%2BAnpjyc3wpfr98RAcnGZH3Iy2jb2H5pu7iYbGC8QxjarVbgnqbzZgpEv3eis8U4nEUUn5emycl4lNe3oEDJQdGcXFz%2FzTs%2F%2BEm%2BYW%2BePr6h2dblCv6S9ZUhYMaKwbJLE%2FW%2Bkh5wZGWNn22%2FVnwUAzY1Mewh6MT%2FuQQ8wLhr3CUtE4IlizSIkN3VlfPYuujtGOFOYGki16Kdch52EB%2Bysf97p3xj%2Bh87a5Pn0njH2GVYU8CaVu6CgVTZgvODJfN9VC2vJcMPThvMEGOqUBOHKmL7RYIea5HtbmT0kF6fGCGqTgelxVY0%2FExU2%2Bl0JnJdGjKBYegsxZNUdIB2KI6Iwl7Lkuo1b8XFKRmAa%2FLNUDasBQFEE8nP16F75KZQqR40A7QsdMh6MEI0gifN3OWNlBtaDi3S3FbH6dYgpe3Y6nMOwA0%2FLRblVyTcNBQanG8%2B%2Bt8YlU2Fe2hM8pVUMbkvl1TXXhbs32WHCSKQI%2Bfp8Do4ao&X-Amz-Signature=a4d5fdd7de2ce18e50b410a13c80fc5cb2d0e01021f6a6a458df4cc4215d75f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6JIZN6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCPc31puBNRfIjENt%2FAPSWyf4rYqtGpONlmNFdESFdM9QIgVJGooMC28tt6QslnbpWZbOqFCBh7GevflCg6POvwYUoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9Fc7t8V2QfWv1i2ircA5yd8umS1m7wlsFEPQgGPFNsFNcnr%2Fx9k9J9bIgMOXKC8wJkYPhWijOxfbYeUBBYTd9Kjs83TlOQedqu4IoMICQPfztJKzhiO%2FUYjv1mmkS00CrH4rw36BPI8gNJ6SG1kcqdnyJTMSoicmHzcy0M80ffoWEyCLnz50Xk8fZMcH5uMKaVfsf0c8ju2h1nhgOaRgJGcsVyD1cEhr%2BkOw80TDuNOORl8vWPICDyHF%2FmxQRE38gMDqy2QUGJg%2BB%2BG8IWs6IDPFEB%2F32B2q5s0RVmfOMwm6zL32lvLpUsk8UIooQJPQoW9DxTQmMpiRS045P3aFrzgPXWf2hYQ9hxtFOtcq%2BTLBlwMyiLd833Jdfv2Il5XONKFVkMW%2BT9J3HCwT7%2FPKkCO2SQTCA9IaHgzSDYDcuZmNkN3WfSzbv6Fah4Se9V6VOm%2FCQvsqAG%2BGcX1HwG2polIqrbn6FCuUwvOZQQY2bpioBOudpWvdVi84pBmBucTYJ0hLW%2F2QqeQLO0YK2KvbJi9QLPu8n50E7B1jhxz%2FbJEfHvB0LVSq2IAP6WiWpTtKwitWoO%2Bo1Ial1JXYSNKWRx8zJa6ZpGj3oalRVZmSYqQ5GesL%2FX4a0%2F3mI9hz1dYkPhjd8sTSXDwIfKMM7ivMEGOqUBqF0bXZn3Ks8lgRUCBE8vFLw5n85nyOSL0GWKQtyQLLrqeqMSRsQf4vW%2BzEHoUJ3A7A8%2F4Gzi5BKsI9iUtaZkvqgnxxKxCuF50Gf5VFFfrQzRiJNqxNRrhGxijMZJJBqslmM5OiZeTl9UMwvyR%2FK1RzYGkT0RVkjSjykCX9hrh4NDayIg0S%2B%2BD0Lomt33dp8aKCJhA0Of5S%2FM8omL04Hyg%2FzEYp3S&X-Amz-Signature=b521ee4e7df521840d9aa887a08c6aa2fd5984538bed050ad62df94912298521&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMY2FALD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIETofxfCMUhVf4maaDlDP%2Fl9sEWHDw8bWe6ycULuLMxsAiBR8dGqUnicv2sgsWE71aPq9NldkA0ekdHXZymQhi29VyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAgouR%2FcTD7EoDbKKtwDa7aT73tWHJ%2BH7DhvJed66QO6Y6bVUy8v%2B9Gw59ocGWnrho1ylwZkcgT0dQ24BzdXJTFdCboTn2Jq9%2B9ZiVHRyHWJkXVZ%2BycEc3MIN65dk6czKV23bJWGK08UoQlRuh4LI8i50xeX%2B7v0NSgEqJU8Pmb8qV0TsaKtrCTFm1%2BVj%2FEmQJIalnyI6bsu86BLOEUoW3jRlYxA9TOb%2FM0gimI6aNyZM55C3mVl%2BrYgt6NLegF8ZKUOiD5b4FX7y%2BcwIc5BvtRMj6kbowC4OIjOsdS78xSLlPjqiNMRmD0rojqYuUTjxyEH3%2FSl0EjXnGIBo3Sg%2FtGDw46fpLoQUYsMe6EdDS2v2%2F8e7ZV7R%2Fqz%2B2YUw%2F4k5uG%2BI1n%2F2JGQ2Jg5vGzO6i8jW786l1dAqrNlWLM5O%2FvfpaDopG2P%2BLWM6VMPQ7Hw0%2Fe6Kr8VQNn7igqsha8vT0gqRVb4jRbQtMvWxk1jE2mDoJLJOCIsfxkXfRztM3O2keAh5Ojtfw4XQKnpYvDCcDOBBT4ae47FLKAfFBUoyyMnZU9RDADnSZs75%2FIwiIR32rTpc1Xo4Cvj5%2BYP8rAD2NpgZgfuxWsR%2BfPa8AGKpcFOmHMswiAxgz5x80AMuumiPmc8ZrFug2snUIcw4uG8wQY6pgGZmArBU%2BtrpVTKmhWi6e1vySTaNgpwRTED1JLr6npIPKWqDcuiu8bEpEMyzaJrVlLfVtVreg%2BAAxjDcQr5B2Df4gfIWADiAn8aPj13OE6DaZuowQBWIod%2FACW36vm%2BgCQHzcsQHrH2g%2FlPTndjii%2BOZ8KGlVtcJpLizkx%2BKFj9RhgbzIWKFYHofXx%2Bknw4ij73nmLJ80APWdO25IEEHNxMcAOBX3Pk&X-Amz-Signature=202e8ce83dbae04fa487e23f1c7eea4537a3f7c0d0d92a101437e724bf31b713&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
