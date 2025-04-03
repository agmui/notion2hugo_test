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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATU4XGH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgfPl3RwT7TzMdf%2BS8Bd7NyyGwBnT4EnqLmVLbzt0vcAiAnQeciF%2FOV8Kf%2BmsORSkdi3Qyh5Vs3jJ9v2Z63fsUloiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZN1sK%2FYr%2Bh7c74%2BGKtwDIw7gf1N7w6Q8qH5tAjBh%2FEdTWdp%2FD8h%2BNVfOdSAvyMSn6FyuQQLjPQUWAIipdkCZBs31VA1l6iXdOFSyck6CkdDZnBxNwhkx7pTfquj%2FBwtEq9SXW6dXE%2FQOjCT5WL5%2FtGh6aYMGpqXMA1iTiOvoKqAID97YVVEE0i5mohCEywbXSr3deFBacdjIvLNGNKhw70qtA%2FGT7U9%2BH%2FWQCEuMPu%2FoFWRH2RWYoTnul3ChX0dhM3GSDPvexvhnCXplixwLVHEC2TG6a6v94Xocsl3PKTzD%2FEBBYAemfQq%2BhV8KZPjvcKMWC6D1XWC0OzqAkB5O1uPkBYENXZhmB5yanK1MP1Xq6K5PDK1zrU1qvkXbfBNyUjVScO%2B%2BWV4mC%2BUI7VplDaoJZxGmYQzLkao3XpPgSwzBYFYnDkJLoRw8CzWpcD9DwfIwxyfm0pA6E9gcl3gFJdqkk6iTvlmR34y1NDlmH8iznlrY1azUYkPIz5pbNyX%2FEJVdbvA2OAAHXTB3nO79SwBpfL%2F2XbzkoV8mewq2g8wwGazY1GQ8Sg5L%2BXoG6t%2FzzzSHjAkUITA%2BqmosLB8gNwD7qRxUBy9FlbfhGU2TY7xUJB%2BJ%2FPzAL8ZzuVKay7IDrIAwsK%2BcLk1KRBYw%2FOK5vwY6pgFYOsWExsHEscKOTmBHhR8meoZWH0%2Fyl5FHofiXcOgREfTnfZ7wd5Xd%2FywXLaClD0OFr9Sn69uNHvt5sMKA6lu1gCtgKIyBHFjd%2Fk%2BZFalGTuXLKNpahrENeBgSeFECDqzkfkHnfelGcAQVov5TPOp8LBvHrRv%2BxQZgtW%2Bv9Rswxb0W3Jd1ZIFHGjI8VtWBN3WEZh6jDDf5AcSz%2FACfeU%2FHNd2WX3G4&X-Amz-Signature=873daaafaf290566bae5a66111b2ad395c9a24bd0b2627840c40a7a3872156a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATU4XGH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgfPl3RwT7TzMdf%2BS8Bd7NyyGwBnT4EnqLmVLbzt0vcAiAnQeciF%2FOV8Kf%2BmsORSkdi3Qyh5Vs3jJ9v2Z63fsUloiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZN1sK%2FYr%2Bh7c74%2BGKtwDIw7gf1N7w6Q8qH5tAjBh%2FEdTWdp%2FD8h%2BNVfOdSAvyMSn6FyuQQLjPQUWAIipdkCZBs31VA1l6iXdOFSyck6CkdDZnBxNwhkx7pTfquj%2FBwtEq9SXW6dXE%2FQOjCT5WL5%2FtGh6aYMGpqXMA1iTiOvoKqAID97YVVEE0i5mohCEywbXSr3deFBacdjIvLNGNKhw70qtA%2FGT7U9%2BH%2FWQCEuMPu%2FoFWRH2RWYoTnul3ChX0dhM3GSDPvexvhnCXplixwLVHEC2TG6a6v94Xocsl3PKTzD%2FEBBYAemfQq%2BhV8KZPjvcKMWC6D1XWC0OzqAkB5O1uPkBYENXZhmB5yanK1MP1Xq6K5PDK1zrU1qvkXbfBNyUjVScO%2B%2BWV4mC%2BUI7VplDaoJZxGmYQzLkao3XpPgSwzBYFYnDkJLoRw8CzWpcD9DwfIwxyfm0pA6E9gcl3gFJdqkk6iTvlmR34y1NDlmH8iznlrY1azUYkPIz5pbNyX%2FEJVdbvA2OAAHXTB3nO79SwBpfL%2F2XbzkoV8mewq2g8wwGazY1GQ8Sg5L%2BXoG6t%2FzzzSHjAkUITA%2BqmosLB8gNwD7qRxUBy9FlbfhGU2TY7xUJB%2BJ%2FPzAL8ZzuVKay7IDrIAwsK%2BcLk1KRBYw%2FOK5vwY6pgFYOsWExsHEscKOTmBHhR8meoZWH0%2Fyl5FHofiXcOgREfTnfZ7wd5Xd%2FywXLaClD0OFr9Sn69uNHvt5sMKA6lu1gCtgKIyBHFjd%2Fk%2BZFalGTuXLKNpahrENeBgSeFECDqzkfkHnfelGcAQVov5TPOp8LBvHrRv%2BxQZgtW%2Bv9Rswxb0W3Jd1ZIFHGjI8VtWBN3WEZh6jDDf5AcSz%2FACfeU%2FHNd2WX3G4&X-Amz-Signature=a8c41cdfa710917fb6fe479388f272fc37713ea99f597ba5f1fa0513dfe6d344&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAUK5GK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzoVnrJZ5ig1y4wJjdpVDwa4CpafhVXyX5tFfRs4gEzAiEA4JQW7vGKHRqGDHpnIkVc9ZVPXcOt%2FOySxdZZg5Vob3wqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDts%2FzgfOZO0rmUlKyrcA6KCsnXaLxlu9dxzShxoAZw4BtbFds8rqWWlevqT7ZqvHhJuWCrWBnNDJjHZQVcwjFjfye4OV%2FLYu%2BRBiM2rDvZBEISNxojLcyK%2FCdmCFRUMd3JJIAzzUu3MahWWZhl5Gt%2BBDn1ZafSQs1iySfsP1K8fiJh6TsMnCQe0OERtHhs9gT1c7D0b0BqhkRi19uC7OO3ReXkJc6%2FBBD0Qsx1hxEbuBDTRq%2BVA1Op3ZPfNDRDY6Yn5H%2BirWvkYHZmzNHvH30vCxel8FfK%2F7Y6Kla0l8uLGeyi4UuJVk3pW5AiVnq3VFoA%2FmgJOpyPDJcgrEID%2F8QLnFmVG73xaUOyxCqUpPAqHOhkZFMtEpQkMjDOkq%2FkMflXVEabkWxiYUhEgYQiBjmos0q%2F6kx4aodsOp8gN13Op22d%2BpKCnj2FLd%2Farbk8z3UId0ARaCnj6e5jHuJLYUda0l3XHcbwzuaVuzYwV6r9fWcjCsaoKtk0YJTgLlmCQf1V6M0sZhDeXoJvZqLfwy3Lok%2FF4vAFnqcQ07wEeI5dw8wX8x9QlCwpi70DcCs2IFPOiorlSGN6%2BOKMvK4HxseMRdQIshj6Swf4ek987QSR1d63gAIClMIA9kCvY17uTTsLeUmXnQgn5ecv0MPzjub8GOqUBToHya5Ny5JTIVgETOVYBRFtJqDHg%2BLuJvCgip5GBJ9KqBKVtokNJeBwXZDvynGZNSUrOXiT6wkzX2n3Bc1bsDKBRNE4KeEYbOl8ulEdTKaCK2PXSrqlNRbxUBl1mYYSkH0jplHgfmOdpTGoytueTAKqgpISkREVXp9d8IgoF4PuBXtwPgPQEMR8YaQ0olDT37vK2kwzYH%2FgpTDu48oGBw5rWMple&X-Amz-Signature=1c13785c191059150ad1eeb3e065a9b13254c7c720cc965db7f825b0c251a75e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R26ZXRNS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1%2FPf%2FD6jPWukKsDMEwQNlSbcwvJS5uk%2ByESA%2BTBvuiAiAuoqz%2FBh1bxJSc1%2F3VA2mmrCOevFB%2Fo8KeIFWf%2FpJ5YiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7q9sYH2z5g61ElgIKtwDBH1a63lpeEO3QEkJik4Hjb9rvv2z5ehuYi2xX%2FPAbaitxn1meaG9EWzWsIuE3xwG55g%2BtHZZDsCwstZB2fvziec60MFo6O8MswfSbv6ja40yh2lReClRyaS9jCBl6N7MbjZk6N2KuK%2BLoQa7zWDxWA4mC2ixjMdakB3n3uN2d3sjk3qSQ8pE3svQoYkylkndKb7GzezOLCIl5yFnFSVWrxutCfjRWE%2Bb55dZ%2Fp3prP4maF5iRq7b23gSksiIIX73lr2JWlQtBzzDG%2FqnBgzLPZ7vQEs0FQLJClfZiHL3%2F8T4EBvu6SHvkSkc5w5lyqNxiZl8oHiCRdhpxm36qS%2BNR7DWRMkfV8wK5rXnnd9E8XXHW6RbYTnLA%2FrnhNyD0ib4Sovis9qcJsHMkEcOrhlekyefryhPB6HSKnVi47nf2EKIu2NHzLD09vG3n7CTkFyg3%2Faia1lh7V0I5cAlMeekPC%2FroeNcOdP%2Bu%2B31xJOLyoiOWO510c9R3idsCPtddt2t4sTj9aw5KqvwRugFP5xhJg3BADRKodofxkjycdja1aZxR5Ph9%2F8ZSs0c7%2FPafj7cmDo3jxY%2B06wsCg4GxAubfQ6QQC%2BOaNu1Zw4a8dNh4WpIxh4IKMUaFwCPencw4%2BO5vwY6pgFFaS8XXq3dGdy4bMtaiBuUzI46BLEyAmrem6ZLreuGCH6g0xXOGM6p%2FekTbJSDIxMDwpWt2w%2Bv0M8%2B66CsNMk5xjZC%2F%2BkXZ%2Fi2vkgS3FXwgrPAjmOikeqtl4UsscJPyhURVYng466tPrXMlc8U1g%2FU7QZkoI2VnMv7NClJdB8g7yuEuIwvRP4Y5BTed6n%2BSS5ubHrUCCiYd3xssiOw7vzXK48uPDtK&X-Amz-Signature=1af1580e15e4791ac1d26b1311f800dcaf0bb80b3eb74c93cc2d330c0163af61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATU4XGH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgfPl3RwT7TzMdf%2BS8Bd7NyyGwBnT4EnqLmVLbzt0vcAiAnQeciF%2FOV8Kf%2BmsORSkdi3Qyh5Vs3jJ9v2Z63fsUloiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZN1sK%2FYr%2Bh7c74%2BGKtwDIw7gf1N7w6Q8qH5tAjBh%2FEdTWdp%2FD8h%2BNVfOdSAvyMSn6FyuQQLjPQUWAIipdkCZBs31VA1l6iXdOFSyck6CkdDZnBxNwhkx7pTfquj%2FBwtEq9SXW6dXE%2FQOjCT5WL5%2FtGh6aYMGpqXMA1iTiOvoKqAID97YVVEE0i5mohCEywbXSr3deFBacdjIvLNGNKhw70qtA%2FGT7U9%2BH%2FWQCEuMPu%2FoFWRH2RWYoTnul3ChX0dhM3GSDPvexvhnCXplixwLVHEC2TG6a6v94Xocsl3PKTzD%2FEBBYAemfQq%2BhV8KZPjvcKMWC6D1XWC0OzqAkB5O1uPkBYENXZhmB5yanK1MP1Xq6K5PDK1zrU1qvkXbfBNyUjVScO%2B%2BWV4mC%2BUI7VplDaoJZxGmYQzLkao3XpPgSwzBYFYnDkJLoRw8CzWpcD9DwfIwxyfm0pA6E9gcl3gFJdqkk6iTvlmR34y1NDlmH8iznlrY1azUYkPIz5pbNyX%2FEJVdbvA2OAAHXTB3nO79SwBpfL%2F2XbzkoV8mewq2g8wwGazY1GQ8Sg5L%2BXoG6t%2FzzzSHjAkUITA%2BqmosLB8gNwD7qRxUBy9FlbfhGU2TY7xUJB%2BJ%2FPzAL8ZzuVKay7IDrIAwsK%2BcLk1KRBYw%2FOK5vwY6pgFYOsWExsHEscKOTmBHhR8meoZWH0%2Fyl5FHofiXcOgREfTnfZ7wd5Xd%2FywXLaClD0OFr9Sn69uNHvt5sMKA6lu1gCtgKIyBHFjd%2Fk%2BZFalGTuXLKNpahrENeBgSeFECDqzkfkHnfelGcAQVov5TPOp8LBvHrRv%2BxQZgtW%2Bv9Rswxb0W3Jd1ZIFHGjI8VtWBN3WEZh6jDDf5AcSz%2FACfeU%2FHNd2WX3G4&X-Amz-Signature=0e024788eee9845ffc4d47cd6b7575827a9f3b8c65de98ae2c74cb4fdb65bf71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
