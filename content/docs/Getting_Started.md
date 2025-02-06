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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3OKIPQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD6c33hlqZs0oeEqNX2Zq%2FRSMpi9TPEzErOljydbpcwCAIgWcrgEhNPmimuY7Ji5gmU9vJvxW3KjVg2BIWSFtmrQuAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOnb8FIACnUMNDP7gircAyqLlGzL6xonf%2B3QIu1IQfW2pVEid4RzyTFlufwMXVbAnWJgK59q5IYkTpdQgt0JL3Zu8z%2Bv8a9Hs4QS%2Ftm%2BnNm%2BbPSvVJTBaJLZ6eG0vf1nYzG%2BE66e2Jc6tnjNjqaQ5O9rS1HWCiD4r%2FgjQPvqxdRiZLNvd8bBOBB9BnUwnq8cJIBKCMwqPoGJtYKxdZ2TmAtTHzvKVFaSxszHHBTiow%2FMf3KXAWSIon85AZ9KxEThG0P08c9WYm655mWem%2BTGM4LPzO7cTi4NrnNc5OSSJBOLDNxUq5J5i%2FfVnHNnflMV9ZVUwITE9KrCOGIRLEf5NyMIMnaDxEjG7n%2BEAUq6Yt4eqelJkE843E15Sm2eEecm3wppMGKpROaFw2yorfHsApnrG0C%2BQ8a9ZZMELNOvYVqipLOCb8F4zd0YIjrS5vPG%2FCVnRDeo56bn1FAIA5ChbXyvVNNSU5SGwP2X11twSoVOEgmNJcABSaVDheNsWKrgMHTWFkYy8Eww1tjhO7GV3UEj6NOgnZYDaI%2F4EsmgyhbnTc9XEOQrKUs6BRoLDQmX04dLQAS%2Fk2mp2ooZJBY0KnDTlapcIQFGR5pHqq1PRHNLlzKdz0jRURLXoiaLQOO2hUamz%2BY2MZkDBeaIMMjEkr0GOqUBOyK4czwSXFIg0A4jxpHfkfXaOxC64%2FjwQ7hFNrNHjj8zUikUP%2BZub%2FWNOo7GknDsht0%2B6FEPdpcLwVtokKu15M6luPMR3uW8%2FGmLiO9Fq0WMCedfBiYIoB82svXdvcqaJGtC8PqqQqx08FMIrDMUGAq%2FcZFpj65%2FHgygrkI3wwI6HKAdS2cSM0Xu0rcs1qXoqypM%2FwZAyAl2Gvz9u0DQF5tfeoJ0&X-Amz-Signature=8bcd28f10d5ee770e88a1c91a37f64670318844223a64d106cbab6bab5765b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3OKIPQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD6c33hlqZs0oeEqNX2Zq%2FRSMpi9TPEzErOljydbpcwCAIgWcrgEhNPmimuY7Ji5gmU9vJvxW3KjVg2BIWSFtmrQuAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOnb8FIACnUMNDP7gircAyqLlGzL6xonf%2B3QIu1IQfW2pVEid4RzyTFlufwMXVbAnWJgK59q5IYkTpdQgt0JL3Zu8z%2Bv8a9Hs4QS%2Ftm%2BnNm%2BbPSvVJTBaJLZ6eG0vf1nYzG%2BE66e2Jc6tnjNjqaQ5O9rS1HWCiD4r%2FgjQPvqxdRiZLNvd8bBOBB9BnUwnq8cJIBKCMwqPoGJtYKxdZ2TmAtTHzvKVFaSxszHHBTiow%2FMf3KXAWSIon85AZ9KxEThG0P08c9WYm655mWem%2BTGM4LPzO7cTi4NrnNc5OSSJBOLDNxUq5J5i%2FfVnHNnflMV9ZVUwITE9KrCOGIRLEf5NyMIMnaDxEjG7n%2BEAUq6Yt4eqelJkE843E15Sm2eEecm3wppMGKpROaFw2yorfHsApnrG0C%2BQ8a9ZZMELNOvYVqipLOCb8F4zd0YIjrS5vPG%2FCVnRDeo56bn1FAIA5ChbXyvVNNSU5SGwP2X11twSoVOEgmNJcABSaVDheNsWKrgMHTWFkYy8Eww1tjhO7GV3UEj6NOgnZYDaI%2F4EsmgyhbnTc9XEOQrKUs6BRoLDQmX04dLQAS%2Fk2mp2ooZJBY0KnDTlapcIQFGR5pHqq1PRHNLlzKdz0jRURLXoiaLQOO2hUamz%2BY2MZkDBeaIMMjEkr0GOqUBOyK4czwSXFIg0A4jxpHfkfXaOxC64%2FjwQ7hFNrNHjj8zUikUP%2BZub%2FWNOo7GknDsht0%2B6FEPdpcLwVtokKu15M6luPMR3uW8%2FGmLiO9Fq0WMCedfBiYIoB82svXdvcqaJGtC8PqqQqx08FMIrDMUGAq%2FcZFpj65%2FHgygrkI3wwI6HKAdS2cSM0Xu0rcs1qXoqypM%2FwZAyAl2Gvz9u0DQF5tfeoJ0&X-Amz-Signature=a0f17482acc93aaa3bb1cc361514d9f290105a4f2a9ba16baf8705a0ed1abe8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FD4MMTR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHNFVZEFtmAbRbSiiMMEdJatoKhiwjwB3%2F0CYd2Vdl%2FBAiA7b4iSaBIHSh7S%2Fm%2FeH3nJHoJfNBgXqnG4U3H5MWkD9Sr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMlUyHkDaDLBAs6ymdKtwDxR8FERnncNlOs2jkoTklDVeAiTUcmKQ6q49r1B4impLbzQ6Vcoz%2BnoRLR06uR9zopLB6yDOwwQ3PT%2B2QwoOCVr0PHzzrXDyac%2BkLC5o84jy4tplcjXwR5J9pIHzdmylXx1TVSwIjJZ%2BPFsU5MW7sVJUigbD7nsPjpFwmfa94LptdK93xxhU5hamkx6L0ox3rP5gQ98PDAuojJY%2FK4ms2rvYBvf2KmFUtUflK79mqCjCXAZIJqKUNtA2YYHd500bSPRaFJzq%2Fi7VH6rvLhQky0IFzTFWDUvi%2BKYxl0U4IYo2wscYROkQbRaDDVZDRDFFUpH6lGzbjXjRuiC6Eww4hm80uUITDmmYPFbI%2BTzeOpAj7UMOQUtu2zCHNKIKwsDLXtlfEbh9BWFvmUT34JTHqzGoyVJqeYMP79vrMUFrDmr1r6YFJmVR2n%2BCJZ2MBHV%2BMmVeYSWZ7gDBUXgl3rjeRf9Wy2vh%2FPU2c8lOx5JvHARX7CtPi1UB2PilQlO%2FeEvRI2yukVrwqeClY6HjBvCYi4cUFexFdTnDOrX0VyBiPVk9jZUqUa7yAprAIwTlg4%2B6h26epGv%2BdY8DgFfDlneAV5secDI8vYsgYbTQtK5kh2NY6y1EKiVZg9uRb%2B04w3sSSvQY6pgGMqSHTGLB14iP4tMrrtWpOLF1rhg5TAqypKT88cVliZuzRc%2FOuV2gA6RXpbVbPOYE6QBCKuGgmXdHKOPsdWRCbdjY3ZyiL0criO9L7HaHE4mNcTjk%2F%2B5%2F0Mpk%2Fb964o9Cw7pBgMA7xmlrZmCy2bPugkWyHSU86lu7j07uiUPnS6yp6lrD2ygYW4gEh4jl3pwrzuK7ScXKIgn7xlr02%2F4i9y8GngFBj&X-Amz-Signature=e5fb86fd33b6f1a3b319c2ca4f6e9d0220076110545bce41f8d597d3a7f423a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRLWK5D%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFeoKKFFbrjdA6xWZt3TL07V5%2Fqg860A%2BE%2BAHarthhi5AiEA5DKJTG9Vh%2FCyMY7hb88jQjyRXjTMTlbXEk%2FKvauarQAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOniOUfEkIH8VXZsjircA4oAwUqdUV3NKm5%2BlAPAxigHdK%2BRBNJ2Z36bUzhgISAcIt6CBJGgmHg9NDWTyWZPqNgFgZJUPjgQkW9xGi8mBfXzpjxihl4khsUiNt6cVNMbAKjoTKHCCNHg9AW7PBNvccyeqbHhfA4LurcEYuXT9wdMlz6FgJl4VK7OhMGvU1THuX0Zu6QlsK9x4Usj7HBcAhvp%2BqMiRb9mXOzxi7tCrREdRkZPifPY%2FiDHRlfUeHzO4Y7NS4VMv0GhtsjnIObw%2Bd6IPaFDBVAIvaMVzcuvy2%2FLIBympv5PAyGBhxpdlYAIlOj1VYGY5J78ZoJa6Hs2kHOD7xnJXqJwSbmBWWupqGXkWvJeS9hXxlScwcoppisjK4G8v0pwv4twEYpidNx4zfPe5Sh3Yb3qJU8IHvr8diD9g1184U%2FwMyQbmmZzTQAiymi4kj4LApi3NNb6Y7kS9pKvOz6sJIqaCWIdkglUedht8L4%2FSydv26HsPQ0A6u%2FrptAoxJWB4OfgJ%2FHgKwjc2fr5p2e6bqg1nntbIZpb4WM7IXGdjXwi3i9I09SvU3mNPpK8rC41QQzauTHBgIURmkOd2ZIFBMBgsTkFY8NVAHKrKSSGT9RN2%2Bk9Ok4A6HZBwy7hg45VHcNejFjcMNTEkr0GOqUB%2Fei2wsIprSzuUBT7vgrK0XyfvG%2BrQn88%2FhQEWst0AaR2SoEnzizBwnoNVvqmp0V82mvv0Sgbn0xA6NELSDuVJ2sFAH8B7mrHKdi%2FLyZ7JKdq2N%2F2d9qTiKrzSy4AeHwQ2ZCF%2FZV5aioKutDP2PmLcgVmNRWnffPkxlmNsw5P74BTj4%2BRSZb7wn5k9pM1mW%2F%2BJlvkoIimxVbv37t2kJcXb3Ks%2BaR9&X-Amz-Signature=669c7553bc4e08835823e7273e61c7d7a8eb5dd27ef74ee022d6ac1a8c46cddf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3OKIPQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD6c33hlqZs0oeEqNX2Zq%2FRSMpi9TPEzErOljydbpcwCAIgWcrgEhNPmimuY7Ji5gmU9vJvxW3KjVg2BIWSFtmrQuAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOnb8FIACnUMNDP7gircAyqLlGzL6xonf%2B3QIu1IQfW2pVEid4RzyTFlufwMXVbAnWJgK59q5IYkTpdQgt0JL3Zu8z%2Bv8a9Hs4QS%2Ftm%2BnNm%2BbPSvVJTBaJLZ6eG0vf1nYzG%2BE66e2Jc6tnjNjqaQ5O9rS1HWCiD4r%2FgjQPvqxdRiZLNvd8bBOBB9BnUwnq8cJIBKCMwqPoGJtYKxdZ2TmAtTHzvKVFaSxszHHBTiow%2FMf3KXAWSIon85AZ9KxEThG0P08c9WYm655mWem%2BTGM4LPzO7cTi4NrnNc5OSSJBOLDNxUq5J5i%2FfVnHNnflMV9ZVUwITE9KrCOGIRLEf5NyMIMnaDxEjG7n%2BEAUq6Yt4eqelJkE843E15Sm2eEecm3wppMGKpROaFw2yorfHsApnrG0C%2BQ8a9ZZMELNOvYVqipLOCb8F4zd0YIjrS5vPG%2FCVnRDeo56bn1FAIA5ChbXyvVNNSU5SGwP2X11twSoVOEgmNJcABSaVDheNsWKrgMHTWFkYy8Eww1tjhO7GV3UEj6NOgnZYDaI%2F4EsmgyhbnTc9XEOQrKUs6BRoLDQmX04dLQAS%2Fk2mp2ooZJBY0KnDTlapcIQFGR5pHqq1PRHNLlzKdz0jRURLXoiaLQOO2hUamz%2BY2MZkDBeaIMMjEkr0GOqUBOyK4czwSXFIg0A4jxpHfkfXaOxC64%2FjwQ7hFNrNHjj8zUikUP%2BZub%2FWNOo7GknDsht0%2B6FEPdpcLwVtokKu15M6luPMR3uW8%2FGmLiO9Fq0WMCedfBiYIoB82svXdvcqaJGtC8PqqQqx08FMIrDMUGAq%2FcZFpj65%2FHgygrkI3wwI6HKAdS2cSM0Xu0rcs1qXoqypM%2FwZAyAl2Gvz9u0DQF5tfeoJ0&X-Amz-Signature=d024764ba8b206c9f133289823fdc124b6d3929be3c4d46827c6eaab7781ba25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
