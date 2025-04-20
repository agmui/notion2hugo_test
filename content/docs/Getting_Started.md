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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKSR4UV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAcOAJeCgW00kXdokn9tkFM6%2BkA%2BsXC4Y6WwLVlumErmAiB%2FCBO%2Bpu21enaFYd77eEKwcHaw3bBMoWSLNIZj%2FchO7CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1mlBS9yVffPRpSEKtwDqS6UYs32A8Zs6G5EhGPJa9GvLFdcPxehg7To%2FHbTI4s3X2IIYw6ZeLm4Ge0EU9p%2BrfzIsS75BYrM4vnpADDeI3z76eFBKrS19NyINw7e2hfOuA3Z03JALe9N6prdxFecnlkAJznY8UUbQDicMisEt%2B%2F9OPQR8Aj7Y7fPelTEd56w4KwQiP0qsTA3m3AWbO6GCtvkpDwkSl%2FQrRLWI9neiAIAIQ5fthzPepbZi5m5kyQ4oky7HZ59ZRWGifLqFqesG51WxBmY77uY2tvUKNzp9AjJtA9QT7uvFe3ZBZdE0x4zI7FYo33UqHvYcIdHPaB%2BMjOWkqez9zoHJyNUNaefBiHIa9xiW6thMZzf%2BGMhUrxpMD7rZxunpmLxYtX16Yaf4cJY2NBZBV0WjbvJbmXGci3MvONHqKXwS8sEHuOklKSXW0so26NQS%2F0C3G7rfdY%2BHmrEIeHAY6zbpl%2B51nSM0XopYWLEJrl7np8S149z6YqSqWURw1mPMiBt46eGpKH4EJOWtFTkFrs8YgOosz%2ByRUZz1VazOPPMmxBV0liwgS5SrMqxtmD8nkR05k5S%2FcQvhklMfeEbx642EiKIfxmQoryp9bBjSMKQ%2BYXlyK113PFbZtXAkLjDugHEwtkw14GRwAY6pgEnHY1WJfXw5ygyeiz6m2Ey2Y5IhDx61z6vnK%2BmipDyEi5ooQG5wqpQryVlshlmO7rEFi%2FNv0jLd79v6py3QBCVrQgDoUt67JSlE%2BSFVQK0lLaSBl8HilhvOnzRY2vEwTvtR9MZAeNJX75TOAXtdnUrubmbrOHHtE9jPJ7GrlBbZ8idRjOKbK5b5AjB7ZfdD4PLK%2BwS3%2BVdCZTh45fjthh0Zi%2F3EGQ%2B&X-Amz-Signature=c39e23e239de5f6e0a14c50fe1b52b7611b059ec346202c01c44491eab491580&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKSR4UV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAcOAJeCgW00kXdokn9tkFM6%2BkA%2BsXC4Y6WwLVlumErmAiB%2FCBO%2Bpu21enaFYd77eEKwcHaw3bBMoWSLNIZj%2FchO7CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1mlBS9yVffPRpSEKtwDqS6UYs32A8Zs6G5EhGPJa9GvLFdcPxehg7To%2FHbTI4s3X2IIYw6ZeLm4Ge0EU9p%2BrfzIsS75BYrM4vnpADDeI3z76eFBKrS19NyINw7e2hfOuA3Z03JALe9N6prdxFecnlkAJznY8UUbQDicMisEt%2B%2F9OPQR8Aj7Y7fPelTEd56w4KwQiP0qsTA3m3AWbO6GCtvkpDwkSl%2FQrRLWI9neiAIAIQ5fthzPepbZi5m5kyQ4oky7HZ59ZRWGifLqFqesG51WxBmY77uY2tvUKNzp9AjJtA9QT7uvFe3ZBZdE0x4zI7FYo33UqHvYcIdHPaB%2BMjOWkqez9zoHJyNUNaefBiHIa9xiW6thMZzf%2BGMhUrxpMD7rZxunpmLxYtX16Yaf4cJY2NBZBV0WjbvJbmXGci3MvONHqKXwS8sEHuOklKSXW0so26NQS%2F0C3G7rfdY%2BHmrEIeHAY6zbpl%2B51nSM0XopYWLEJrl7np8S149z6YqSqWURw1mPMiBt46eGpKH4EJOWtFTkFrs8YgOosz%2ByRUZz1VazOPPMmxBV0liwgS5SrMqxtmD8nkR05k5S%2FcQvhklMfeEbx642EiKIfxmQoryp9bBjSMKQ%2BYXlyK113PFbZtXAkLjDugHEwtkw14GRwAY6pgEnHY1WJfXw5ygyeiz6m2Ey2Y5IhDx61z6vnK%2BmipDyEi5ooQG5wqpQryVlshlmO7rEFi%2FNv0jLd79v6py3QBCVrQgDoUt67JSlE%2BSFVQK0lLaSBl8HilhvOnzRY2vEwTvtR9MZAeNJX75TOAXtdnUrubmbrOHHtE9jPJ7GrlBbZ8idRjOKbK5b5AjB7ZfdD4PLK%2BwS3%2BVdCZTh45fjthh0Zi%2F3EGQ%2B&X-Amz-Signature=e73d1e126419228d8f6c483f3d3dca7f7d84f422d04634d68389e3c2e4b7b6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KJCP3A%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDEnHCO2QrU8j2NJazU7WnWk%2BOMsIVbfgfUiL4q2dtEjQIgD%2FbEfhrkpkPHmB3LXNH16tcaZ7l%2FHYrJbBSAdGdozoYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiFfy3vwlALeF69oircA%2F0OfMUvrz7uYGd2yFTaw5EDpkZG6oqtpD1hpCQvaWFoIlveOEhg6RmJLoStzuFGWOzl7Q%2FQxqxk%2BI1i1locGSYVYAXcFvgwb3qo%2BPjQnpzvV%2FewUw8DhJzRnDo%2BYvAp6BJsY6wKZurVfeJ9s78wk3y6D7Dk7uQYCSvkTivrjRT6vkTMTq9yFo1hDNjawh959xH3nISSx36wmZcxKAWN2YWdrZpwrFQGtnoBELHSBBgVLRR2Zoxg%2FcDZ9j5yIF%2FXn04RU2XwwpoM9W6HOccou5vitr9gNFCzepWRkvzfzG5gPosIApf7hcZ5ee0xgyAHwhCz%2B4Axv7Vr%2F00JmhEnNUY1b%2FGoPm9cfX7vIk1T%2FfoPZpUWmJz44ripfWzkCK7kunPYMI%2FyOrmy5zoFUo9VHqOTRbUzemowE9ZO8pYEYIT7SeSQWMvE6mb3A4OqTrww9oeC1rmvDwvz27JmIFxKXRpRyaS%2F8faScMG9cUA5qkNJ8Agj6Mzz%2BaLxDxgmbaPy6NPIQRyCPmMdq19b9EhPHYnfZnVkjGg3JmaBzHlItTZzXqHoApbEZXCDvfOV8NerPOfPbplDqDJ1fdjPfc7FkygIi13MYZEJQr6VJrtBE3hXCEdsPZYLmu8Uxj01MPKBkcAGOqUBMnSq4S8SOlhnuGgzrenzqihSQIAZT45l9CI86jdjOk5H9GLJJf5sI%2F4Q9s0bESo3zvx0dF0iHS7gbs0MNhNM7CEL3Xze9%2Fz6xQQqZ3JqWMWqY3ksTI6wqircJ21LS%2FjdF4xwdzU6oB7hBxVpDPCB2L7Pz%2FgIfr5Ji7h6XouVPMTapWdbjW3GS%2F1IQxtFg5yi5Sy13mRM1sYIbtsqydFMxyYH3dwH&X-Amz-Signature=faf62c723ae73e1bc101d86a21c33dc172ac5e3a7c01d07ea6edf78e75048fda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWOBJY6R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG2MOhnoek9UoLmmzT4KGv06VK1R%2FdHzjwWc2rA6kvR%2BAiBuu8GINloMF%2Bv99jNaOzpf%2BSYuttncd3ymPSg3J5T1oyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Oy3nVaWbIZnWIgzKtwDw8y9gSJcL75FCAytWLzHK0A9HHyVXhLkrkCXXroLT8RZge1b%2FbK7tOkRWH2VKOP276nkDE1cqPtQG7Z0HfSFyuoY4KjtuuvoPs4GXLeWs5UHwQt5cXo1Kgc3k3716%2Fwkz%2BzUI3ks1eEnDb%2BfsC0PVGu9QqM8w6br9N4PxJmrHlNVedeRej%2Bv59RT8EBqqkupZV8uGFqiq5kjvs7JGVJmFcH%2FPltERmLKZFX1mnqsrUnmMa0wphorkb9Sqbb4O5FVEuoRwkZPr%2BRVDNjGj3XwDLpiZ4yGafLbZDU0QCcDLgvu3oIz3tJU%2BP0IpFebPM3InGP3rHJCF8CJ3iWJiuONhi5E16nG11364AbI%2Be0ebtGEb4I%2Fv0%2BWh2dNrnyMebGnR7jfYMjErnlHxTK7ObV%2FtJMCo0ByhVWD5K1nvelVrvIKAsSNjGks1CXBcMphADDVqdI5VO4PbeYXGa0rbOHbBbfIfT5Y3JDmqpPchNKa9mxlB761DO%2B7S%2BJMsxZNhz2505CAVuXqoP6HdFP8K8dYblqAK%2FmiQOtD%2BFXrjwwqXYh7MsBvdVW2AAM1ACmNX6YbC5o%2FpqOElLSmBpN0SjHPtIHmFm3YNQ87ExuOzA3KJnSGCm%2FjgxZ9JGEQedAwjYKRwAY6pgGlmWnq9%2BC%2B4awasCUQ%2FA85LjxzVXXKCrFCuF%2BzFqtS70x87VrEHv3%2BMMq5wFweem%2FlXv%2Bb2tdYewh%2B1s5%2B1WVp5FhHHmBOX%2F%2FQRXHtqDtOqaOA5z0qcj5wyLiqUTQHFU0KcfZoQOHkzhMnH1F83YED4WX0arN%2BRxCuYCXlhHiAuDZfq24r7MavXJbeXXWSZxtR%2F5d4mBUW5vLI7If4Iujt5EkGa9dk&X-Amz-Signature=3930a54917c1715804e2129259550be4b6a8ae740acdb2e5a8d75f9bc09155db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKSR4UV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAcOAJeCgW00kXdokn9tkFM6%2BkA%2BsXC4Y6WwLVlumErmAiB%2FCBO%2Bpu21enaFYd77eEKwcHaw3bBMoWSLNIZj%2FchO7CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1mlBS9yVffPRpSEKtwDqS6UYs32A8Zs6G5EhGPJa9GvLFdcPxehg7To%2FHbTI4s3X2IIYw6ZeLm4Ge0EU9p%2BrfzIsS75BYrM4vnpADDeI3z76eFBKrS19NyINw7e2hfOuA3Z03JALe9N6prdxFecnlkAJznY8UUbQDicMisEt%2B%2F9OPQR8Aj7Y7fPelTEd56w4KwQiP0qsTA3m3AWbO6GCtvkpDwkSl%2FQrRLWI9neiAIAIQ5fthzPepbZi5m5kyQ4oky7HZ59ZRWGifLqFqesG51WxBmY77uY2tvUKNzp9AjJtA9QT7uvFe3ZBZdE0x4zI7FYo33UqHvYcIdHPaB%2BMjOWkqez9zoHJyNUNaefBiHIa9xiW6thMZzf%2BGMhUrxpMD7rZxunpmLxYtX16Yaf4cJY2NBZBV0WjbvJbmXGci3MvONHqKXwS8sEHuOklKSXW0so26NQS%2F0C3G7rfdY%2BHmrEIeHAY6zbpl%2B51nSM0XopYWLEJrl7np8S149z6YqSqWURw1mPMiBt46eGpKH4EJOWtFTkFrs8YgOosz%2ByRUZz1VazOPPMmxBV0liwgS5SrMqxtmD8nkR05k5S%2FcQvhklMfeEbx642EiKIfxmQoryp9bBjSMKQ%2BYXlyK113PFbZtXAkLjDugHEwtkw14GRwAY6pgEnHY1WJfXw5ygyeiz6m2Ey2Y5IhDx61z6vnK%2BmipDyEi5ooQG5wqpQryVlshlmO7rEFi%2FNv0jLd79v6py3QBCVrQgDoUt67JSlE%2BSFVQK0lLaSBl8HilhvOnzRY2vEwTvtR9MZAeNJX75TOAXtdnUrubmbrOHHtE9jPJ7GrlBbZ8idRjOKbK5b5AjB7ZfdD4PLK%2BwS3%2BVdCZTh45fjthh0Zi%2F3EGQ%2B&X-Amz-Signature=612f00956b9e25822e2f130dce971f1f9cfb1a1787d89ba78829458fb1b7dbec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
