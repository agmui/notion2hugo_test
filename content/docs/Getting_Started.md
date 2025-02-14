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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HML5EBX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD1ZB4ZRbtXzo2FT9twg814g4WmI0vwFnlIEQC6%2FIzR3gIhAK6PfLhBPQH4b99NWdWOrYlQ44KYNGDpQULFY4OjyXhmKv8DCC0QABoMNjM3NDIzMTgzODA1IgzW7H6x7emwQJc0iwQq3APRDT9H%2BfD9cO8le3EbP%2BuMIYzrsGJ1dCIzVDxmzMAZkDPB99YARsi2SaSBWb0JrNJxtIcP8BdeBI6kutyLbHviPXt6AAk4HAjYXku0mdwiX1gXzreJvACr3dE8E9W%2FKOmXuGNFl9%2Bwk2DzjyJIB8rv7YWTutKdGf1D5mnSVI5Qvm7bfscwooKs3AiA0%2FkYWoX0SfI6BtPVPLcC9tfOyJjJNo4drT%2B1VZWKCopXpIamikG8yXMqvxbf5WWGVz28D1uRUbjYsfOj5QbjW7aKKrpDTXN3JJm2nG3vVVxYivlDZjZJrqtO7aAZl2cJ2rXQ%2BDgE6qSMISTpSs4IdN0LPMaqka%2Fl%2BrMke42340h7YKpFOomW9WIybE55kVhScMR9bNJ9bzNODXokZzCM%2BUp0iv0jEyXMcoNbAnxgxVAQFX%2BrzI3JxmMXE4xoYRUAJ%2FWVwVMLp5gm56pjcNDzaBwZG39b6vgHA6oe4DvxYeFhkMT95IU%2BjZN9mV6wJUHTkeX1NuXW6JWDHqDhs1LTuAN2TO71jh0hsmRjUuuMsZvi6vFZrdO6MhedT1a3oBfnPi0s0A654IomeuacZHTtcuxACwgzmhzwJhaWnyUV7w6ELMwrinGn35sFWqZRb7HYVTDZ6ry9BjqkAfbEM8A6TxwQZbbQdNbn0FOXLPOrC4LX3NHO%2B8hCbQ9UAOJBbAln92%2F0ummZ8OTsBMe9q4XZryxtogIqRB1B9YAaw3EPRC6swzmAyI3RxfNDwUOnVUr7M8IB67RZgl%2BGkGTY2GaBqwRx95mA2KTGFI17Q6gpbTl8lwYekvC7BVuUb5eWhK0UxfoXShlB%2FgmoYc6u6DJLpbvQ%2BXCNfYsdbjg3WQkG&X-Amz-Signature=4f2d38e8461d7edcd3e10eff18759c77f3e13cd43c5c600ad206022b672b4a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HML5EBX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD1ZB4ZRbtXzo2FT9twg814g4WmI0vwFnlIEQC6%2FIzR3gIhAK6PfLhBPQH4b99NWdWOrYlQ44KYNGDpQULFY4OjyXhmKv8DCC0QABoMNjM3NDIzMTgzODA1IgzW7H6x7emwQJc0iwQq3APRDT9H%2BfD9cO8le3EbP%2BuMIYzrsGJ1dCIzVDxmzMAZkDPB99YARsi2SaSBWb0JrNJxtIcP8BdeBI6kutyLbHviPXt6AAk4HAjYXku0mdwiX1gXzreJvACr3dE8E9W%2FKOmXuGNFl9%2Bwk2DzjyJIB8rv7YWTutKdGf1D5mnSVI5Qvm7bfscwooKs3AiA0%2FkYWoX0SfI6BtPVPLcC9tfOyJjJNo4drT%2B1VZWKCopXpIamikG8yXMqvxbf5WWGVz28D1uRUbjYsfOj5QbjW7aKKrpDTXN3JJm2nG3vVVxYivlDZjZJrqtO7aAZl2cJ2rXQ%2BDgE6qSMISTpSs4IdN0LPMaqka%2Fl%2BrMke42340h7YKpFOomW9WIybE55kVhScMR9bNJ9bzNODXokZzCM%2BUp0iv0jEyXMcoNbAnxgxVAQFX%2BrzI3JxmMXE4xoYRUAJ%2FWVwVMLp5gm56pjcNDzaBwZG39b6vgHA6oe4DvxYeFhkMT95IU%2BjZN9mV6wJUHTkeX1NuXW6JWDHqDhs1LTuAN2TO71jh0hsmRjUuuMsZvi6vFZrdO6MhedT1a3oBfnPi0s0A654IomeuacZHTtcuxACwgzmhzwJhaWnyUV7w6ELMwrinGn35sFWqZRb7HYVTDZ6ry9BjqkAfbEM8A6TxwQZbbQdNbn0FOXLPOrC4LX3NHO%2B8hCbQ9UAOJBbAln92%2F0ummZ8OTsBMe9q4XZryxtogIqRB1B9YAaw3EPRC6swzmAyI3RxfNDwUOnVUr7M8IB67RZgl%2BGkGTY2GaBqwRx95mA2KTGFI17Q6gpbTl8lwYekvC7BVuUb5eWhK0UxfoXShlB%2FgmoYc6u6DJLpbvQ%2BXCNfYsdbjg3WQkG&X-Amz-Signature=9cefcfeea686f04f247fe4b0cf2eb3c9f9cd2e4e3f9bb8417e06f67a1f3a182f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRR73HO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICa2Sa9zrW6LwszxzepwMYJSktTKQYs0YzHXz4SGV3DsAiB9cjOmF0KjlqrPFYpckWT3UHdfMOxWWd6%2BAHB7bXCzbyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMfBWB2xXN1HmAn21sKtwDSL8bWEn2qPgnnFjjIjn2P%2FCsRSV22k9Zq%2Bf6%2FAfprhzpKjvhwj38mOPbyFGj9N8YPNZfJEabk0FeVmhfZz5BAf%2Bc6XB5AXvvR7wsiSK6cXtD6w%2BvfVNyHhLfrgQzNmrC%2FURRQhe6ukfQ6mzIj54ht0V2mEdtmP6dvo%2FxEtlb5g8xqTm%2FNeED3NuGNfwiRCXgsa5xGGyKVSXBBaJNAYPWwHJSx0%2BKb6AFtO5s%2B4666XCybHCZ7cnzbsS45tFOS2hED5Swr%2FsuaqsQTOwWo9FKjuRy7sxV8Kla9HcBvQtUOjL62QAh1G6O7MGlO4Mos3KMzdeH0ZYltZqBvMA1QRYGqcB79T40CAMvI6gknJZblt1Wtnv2Ww4zLoLHZoGPcipKNTdQMnHNloGVKJnruHQxIKqU342kSOR4RgP6VxbrmPq3kx%2BWSE4iDzWpoSfiN%2BPTLhDDJbLz8I1x0wmMfmCAaxLXHW1lReDTwrSbwV%2F67l%2BdpgarbVmyphw0rbCoKHYJIlGKUK01QX3P4pcXxRAzEopy0ROcOi9UTT1Opz%2BnxptaHyUNhM3wlUFm48rIlJa30NwEb6g5YCKYcltOEgDuKSJWosi%2BEu9fRKBzyCqScZvMm2x6Y8JbAq%2FLgpkwr%2Bq8vQY6pgFHq30kW6LkSCbFrelHqigLbbaLAaRvGdM99nrsIKZo4NvS49zc0rDwmIgmhNmbNe5EnLX4yXu4nwaLD9ml3Q4XbsOEgV3i3Bow%2BO9PlWr%2BQ8jiaqKAZ3pBFWv3IsU3%2F1aR3zT%2BO1erILepZ4SKyzkZka5s0gg3BPICzj2JAItrJEfCtcKRrvffSFUbjrDjGMT1mPS6BkaDK8na4LODDBP2ZaXohebm&X-Amz-Signature=2faede5087e2d5c30e8003af7f6b1da1375f3ceccd4adb328cecac3961e479de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJIW2JWE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAMdMFL8UiPPN9bEyTtIuknHJ7Y2OsJPimXcFt%2BdfanvAiBwgHOuCwdFfRcJGQhmnW3M27g2KxWFJgOWvl4QCJ6nKCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM0g0j6tKa3xWDDaJ8KtwDz2IH4KoC03AhMvUEN8feHTJyVo%2BgjB0M06s9Sf2f5ohnEUokmfv0Yf89i2RBnt4KN0iNxNt1uoBO%2FYpR0NaDAdpONjFDM3mTowC1EfOf65V6nbPflwHm%2BdTrJygfA1%2F%2BUOCV2tkdMpR4ON20G%2BT7UBvHASwzlG42%2Fqez4LAOFWWRJ00gIIBmvyMbtYB3rsB3aJcLA5hV3ClX1JxbYqLYiNCV5%2Bu%2BpXfXPVV7gtcYjtvLcnpJwoesXsLJXbSu5FQUnebi8rmUgjQArIbBodTyM7MiywnPNy887%2FG%2FxRo10EBDXipSsKanZFMsRz%2FYlT66b62FA%2BpBeHgAYb%2Bm7pj%2Fg0g4XOQk8MeC26ktCE7wdm9lksORMz7fctbWqNrrDCjJqQqeOtjWEitaCxWVS1J2NJpSTV6kShj9DoxGqk4VzUirufGkyFLjP7w42HxaDzXvHYYM2peoAj6gwmCAcovChx4HQx8HSKvRhg4UhXKFoeIJ%2BaJXIVu3dk4JZcp4lDc7r8jesfg9cnMVHZDJ4800KHOvR4I8WCiqY3rdRpz3h3mJzMq0isAw2pTAsLvVDGInP2aRjnHpG%2Fk0w4qHDVs%2FFhNQEKm2DLPxAQ%2FdbzMc9ZRRZC%2B2rwzUfKje%2B90wy%2Bq8vQY6pgHzhXNzJxNJqw1TvYWcKTAKg%2BXBKWGc8cyqO7NhYhKi5XSJBOlQdSl%2Bfjy3c8dO7%2FNRGex4Q33CSggxGfoheVPNf1nDwuIRphCsoOjbTY%2FhsRSuqEGivzicjcSGNSpffk43bokJ8l%2FGuKrBVz9I79Z5%2Bn85gHG6Kme3NKgsTFuSWuQFk8wV6MWwDRre3hx%2F55pOwM%2BONKfCEPfrs9SrQlLk6EYj83%2BM&X-Amz-Signature=812b449891a0394298ae2e8af2ef02da802e8493d4a39276ffb1badb99086e01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HML5EBX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD1ZB4ZRbtXzo2FT9twg814g4WmI0vwFnlIEQC6%2FIzR3gIhAK6PfLhBPQH4b99NWdWOrYlQ44KYNGDpQULFY4OjyXhmKv8DCC0QABoMNjM3NDIzMTgzODA1IgzW7H6x7emwQJc0iwQq3APRDT9H%2BfD9cO8le3EbP%2BuMIYzrsGJ1dCIzVDxmzMAZkDPB99YARsi2SaSBWb0JrNJxtIcP8BdeBI6kutyLbHviPXt6AAk4HAjYXku0mdwiX1gXzreJvACr3dE8E9W%2FKOmXuGNFl9%2Bwk2DzjyJIB8rv7YWTutKdGf1D5mnSVI5Qvm7bfscwooKs3AiA0%2FkYWoX0SfI6BtPVPLcC9tfOyJjJNo4drT%2B1VZWKCopXpIamikG8yXMqvxbf5WWGVz28D1uRUbjYsfOj5QbjW7aKKrpDTXN3JJm2nG3vVVxYivlDZjZJrqtO7aAZl2cJ2rXQ%2BDgE6qSMISTpSs4IdN0LPMaqka%2Fl%2BrMke42340h7YKpFOomW9WIybE55kVhScMR9bNJ9bzNODXokZzCM%2BUp0iv0jEyXMcoNbAnxgxVAQFX%2BrzI3JxmMXE4xoYRUAJ%2FWVwVMLp5gm56pjcNDzaBwZG39b6vgHA6oe4DvxYeFhkMT95IU%2BjZN9mV6wJUHTkeX1NuXW6JWDHqDhs1LTuAN2TO71jh0hsmRjUuuMsZvi6vFZrdO6MhedT1a3oBfnPi0s0A654IomeuacZHTtcuxACwgzmhzwJhaWnyUV7w6ELMwrinGn35sFWqZRb7HYVTDZ6ry9BjqkAfbEM8A6TxwQZbbQdNbn0FOXLPOrC4LX3NHO%2B8hCbQ9UAOJBbAln92%2F0ummZ8OTsBMe9q4XZryxtogIqRB1B9YAaw3EPRC6swzmAyI3RxfNDwUOnVUr7M8IB67RZgl%2BGkGTY2GaBqwRx95mA2KTGFI17Q6gpbTl8lwYekvC7BVuUb5eWhK0UxfoXShlB%2FgmoYc6u6DJLpbvQ%2BXCNfYsdbjg3WQkG&X-Amz-Signature=8d2ac71d71bf4a412cc335b99b1a564eb548b30ce4f28659d70aa04989406343&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
