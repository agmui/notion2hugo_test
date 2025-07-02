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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HIM77X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Pvz%2BKYVFgjxSqbzDWvQK3FiCBaxhCGhhJKCg8x6HIgIhANw1q%2Fayc9UiK1fxhfi3GMgDAe4gpQugHf7np2yQcKX6KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtuzfYc%2FxuIr4CqBcq3ANy5x8KeL9vZmhRA%2Bc3F4%2FRcQyPBRGuyzo%2Bx68745GF3OvtYH%2FXxcons2EEOmaQ5Ft6h6KXu8XqXjJQUFNbC17KrkX7BCHe%2FoS3nNfHpWKSLnzXgUqoJEEBVjWidbtM8Iy4K58lYFWW%2B8hTgONAqATEsnCkHqSBZR4MyNkPFf%2B2ilwnsUuYf4ewEiNdqznX0wZY8rjzYyFqp4GDEhJXQDhV0Rbmmpa1AYRNaGVKxDMZFhOE3IpIrKyIeB7OKwpe5C9T8CKn5sIOoOWwf%2FcSX7jdTYAiXo3YP8bg%2F3iXlFN3Cij9cHR1c0pQ0QngAxUcHDqd9S84fS4zhcRg8mvsciHnEaNLQeXz4MYwZcYaNj1ashNdQZgRkqLq4THz1iElHkzMCS1YcxcwpahGxiIkoyfJ6w8h3cysuRAaNZEkzbYGgVQ9cJdUXelkVAtHXeE2YtMHiU7hATF9gV4txhe%2BObtdA5eNU3oke5ZR%2Fk%2BTpEh8wUVyTl7%2FV24z6CasI7bMCwNSxc504rPzE%2Bzdl8LVciMpjB1Z0QlDGg6HRdA1fwRSHCmsHTu1xxX95rbjR6R8JqTKt75J7YzgDh8XEQbcd0RaX2N%2FVTeTz5IPARIFyO5WXaih9%2FdoeJcr3X0hNDDZi5PDBjqkAV%2FSQOmpVzq5nMedft3mcpROJtfBpeAHmsuFlGEHjQlloJlB%2F2mU%2BZjyyHA6%2BpEtNNR6WwTY61WDyQckMy6OpPPhYbtJOBVl%2FT1uGwRXrCAwZPizE3ZjxnodZhhV1D9lqOsjwwcXwoBY%2FgRwU3ToKqdEXunnnbbu4lunirbdQqDdw4CGZfXGC3l7WMd7c0prfJLFIPt6vk7VCnjEoJ35OYThZW9Z&X-Amz-Signature=4418827ae7c0630f443bb2babd4fc98dbfd819ee5e6dc17d9ab1c0b2c7a73597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HIM77X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Pvz%2BKYVFgjxSqbzDWvQK3FiCBaxhCGhhJKCg8x6HIgIhANw1q%2Fayc9UiK1fxhfi3GMgDAe4gpQugHf7np2yQcKX6KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtuzfYc%2FxuIr4CqBcq3ANy5x8KeL9vZmhRA%2Bc3F4%2FRcQyPBRGuyzo%2Bx68745GF3OvtYH%2FXxcons2EEOmaQ5Ft6h6KXu8XqXjJQUFNbC17KrkX7BCHe%2FoS3nNfHpWKSLnzXgUqoJEEBVjWidbtM8Iy4K58lYFWW%2B8hTgONAqATEsnCkHqSBZR4MyNkPFf%2B2ilwnsUuYf4ewEiNdqznX0wZY8rjzYyFqp4GDEhJXQDhV0Rbmmpa1AYRNaGVKxDMZFhOE3IpIrKyIeB7OKwpe5C9T8CKn5sIOoOWwf%2FcSX7jdTYAiXo3YP8bg%2F3iXlFN3Cij9cHR1c0pQ0QngAxUcHDqd9S84fS4zhcRg8mvsciHnEaNLQeXz4MYwZcYaNj1ashNdQZgRkqLq4THz1iElHkzMCS1YcxcwpahGxiIkoyfJ6w8h3cysuRAaNZEkzbYGgVQ9cJdUXelkVAtHXeE2YtMHiU7hATF9gV4txhe%2BObtdA5eNU3oke5ZR%2Fk%2BTpEh8wUVyTl7%2FV24z6CasI7bMCwNSxc504rPzE%2Bzdl8LVciMpjB1Z0QlDGg6HRdA1fwRSHCmsHTu1xxX95rbjR6R8JqTKt75J7YzgDh8XEQbcd0RaX2N%2FVTeTz5IPARIFyO5WXaih9%2FdoeJcr3X0hNDDZi5PDBjqkAV%2FSQOmpVzq5nMedft3mcpROJtfBpeAHmsuFlGEHjQlloJlB%2F2mU%2BZjyyHA6%2BpEtNNR6WwTY61WDyQckMy6OpPPhYbtJOBVl%2FT1uGwRXrCAwZPizE3ZjxnodZhhV1D9lqOsjwwcXwoBY%2FgRwU3ToKqdEXunnnbbu4lunirbdQqDdw4CGZfXGC3l7WMd7c0prfJLFIPt6vk7VCnjEoJ35OYThZW9Z&X-Amz-Signature=30cfce0cfcbfcc11b4995911d8db21c9fc442d06c5b4d40a6e1b4e7aee3b1a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HIM77X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Pvz%2BKYVFgjxSqbzDWvQK3FiCBaxhCGhhJKCg8x6HIgIhANw1q%2Fayc9UiK1fxhfi3GMgDAe4gpQugHf7np2yQcKX6KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtuzfYc%2FxuIr4CqBcq3ANy5x8KeL9vZmhRA%2Bc3F4%2FRcQyPBRGuyzo%2Bx68745GF3OvtYH%2FXxcons2EEOmaQ5Ft6h6KXu8XqXjJQUFNbC17KrkX7BCHe%2FoS3nNfHpWKSLnzXgUqoJEEBVjWidbtM8Iy4K58lYFWW%2B8hTgONAqATEsnCkHqSBZR4MyNkPFf%2B2ilwnsUuYf4ewEiNdqznX0wZY8rjzYyFqp4GDEhJXQDhV0Rbmmpa1AYRNaGVKxDMZFhOE3IpIrKyIeB7OKwpe5C9T8CKn5sIOoOWwf%2FcSX7jdTYAiXo3YP8bg%2F3iXlFN3Cij9cHR1c0pQ0QngAxUcHDqd9S84fS4zhcRg8mvsciHnEaNLQeXz4MYwZcYaNj1ashNdQZgRkqLq4THz1iElHkzMCS1YcxcwpahGxiIkoyfJ6w8h3cysuRAaNZEkzbYGgVQ9cJdUXelkVAtHXeE2YtMHiU7hATF9gV4txhe%2BObtdA5eNU3oke5ZR%2Fk%2BTpEh8wUVyTl7%2FV24z6CasI7bMCwNSxc504rPzE%2Bzdl8LVciMpjB1Z0QlDGg6HRdA1fwRSHCmsHTu1xxX95rbjR6R8JqTKt75J7YzgDh8XEQbcd0RaX2N%2FVTeTz5IPARIFyO5WXaih9%2FdoeJcr3X0hNDDZi5PDBjqkAV%2FSQOmpVzq5nMedft3mcpROJtfBpeAHmsuFlGEHjQlloJlB%2F2mU%2BZjyyHA6%2BpEtNNR6WwTY61WDyQckMy6OpPPhYbtJOBVl%2FT1uGwRXrCAwZPizE3ZjxnodZhhV1D9lqOsjwwcXwoBY%2FgRwU3ToKqdEXunnnbbu4lunirbdQqDdw4CGZfXGC3l7WMd7c0prfJLFIPt6vk7VCnjEoJ35OYThZW9Z&X-Amz-Signature=98f88938bdcc2c1cf55355ee638a8f3637808e7e42159a34ee6897f2babd81ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7XGSZR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzZ1BWvqvC4b9qxfJwwm%2Bnz1Sk3YbJOGEUSw05ChG6NAiEAiV1qAlNzLJoUo3qI8NOW%2BYM1Ha%2F1KsPWn%2Fzl%2BYcJlYcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE7Q1ZAJVev4zuUHCrcA7OHcSt9%2F1BuXKhiAVJQ4r9a13FfaPEWjfHf4FqZ6cjlKW9Fu61sVO2ojexjv%2BqFVlpe4EvyQ1U9Ira%2FerSG%2BAiPjHNZUIj6UiF6lb6qNLeuOK6uR1EjyaswgwbWy0WzLhd5RbYYsKTDelAbGiGDarR61wzkB3YyKBY%2BV3cSc0kDzJ9AmyGsrOKk3bJjxYOFCXr5z7Jdc2e6Zr99v%2BSgPAWrKT001sY40Fqwa7ksp85c%2BBDHVTT6sXbE2lPjnDiciPlZfS4aTavCC4KSdjQo5lrftJfSQd2pu0H3rLAHTR2r8%2FuLsA6mZs1J1uN4BxjtTIArD1ky6jsygov6VS15fvWkEkr33s0SuvZBZUnMTinjkHxZ0EQOVpwX5bXBBb2h1PnH4KitWvNLdOOwondFtnlQXPkTR6cXKdv%2B%2BBi8ArbcosOtDhDyvtsvupc6hE8zUFOfFQ8IulWibVeDQahJxE6odAKcr8qy2MHCoCu1YxFWo%2BYOcyDSmchNl3peam1v7ygYg3FYBgjLH1iHNoenkd%2BYLonnN6Sp1LNYrrye4Ui94bjh%2FPt2qDeKR%2FlwUcloUpAQ%2FbFTj1RwZlv72zgO4ZhVoMZUPY5iNqeWAT%2BU3rfzE6L%2FblLoXzmZOGk9MOCKk8MGOqUBSTTPOq6aS%2FBXizTNmxzH6IlwZIE%2FxOC4Z61shNZCKu6zn0kwMM2JgDkmKkqsjaRMqbQy%2FlQfw14qApIe5VJHEkAaRqp7%2BU2VGwJZeLPFwXh0lB2Zdk2dD4zU8I%2FYWYuAicw2GOSeerC3vm5d6DJ9Rdnabbx2cYU8j9dFjes6HKqLvxsXODISkTEOJjsLHybBr1MuSZ8jI4%2BSLQ5sctwdZs7YGC6w&X-Amz-Signature=aba222b1f4b5ef593d40d33e667d62586bca160e6af2e5787014bdb957f399e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6EFGZB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaRYiq89ULMohZCKneXlrcZ4UCJK6a3%2BQ2LpuWVyR%2BIgIgaEbU3G3HmBAWqF2xqpmS3mjMK%2FkqFh5xauKSh8EKylsqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKUA4w%2BNkNjEy02PSrcA1jtHSAcyo1kRMxKcj7IQKmBOPOp5lDm6TbHXpAL9Y2k51%2FNO2n9Q2SDUVAJiM2361NPkcfj1J73AtJFC0f6bFS%2B%2BN9F4tojvjUX7aB7z4bexky96XtGzktzruC4qE0YSFqPrSm%2FugSbx4d5Agc4Y5rVveAMe7v%2F2LEkYDv%2BEqkI%2FtFQzDPIKMUKJwRzKbHHs7jRqLcfgfy4rnnqM1VI4FX%2F8U%2FVJn1KAnxzYP%2F8SG6ddXIwXT2xtlywJv4WkPgD919%2FJwsFl27ghkuVwG9wHNL5FrZGyoUpdvsjRrm9CjHZpSke%2F%2B44ertka5OncBpkbp9Rw5Z7Xa45WA1dKVUCobn1rLSEBEeHpofRgG74QO7SrbvCs8ZeFzQnbsOlV9MlUUdUT%2FISnbuwLUYWagQhvyMQfeSuG88FeT0PdIhnjJ4rScrHLDvpx16K6NGAnGoH5%2FLfbdMxozrZgNibVuRobyZ2TIqnv0HtpKhM8977jOZvSFL1awEHGXqD5xSzUgqoj4hmCKVx1aXQDdQjhmOnFoAl3%2BrkA3a36bKFwiGHw7Ytk0n16V081JSNIWPuvxVdeXsOaMAGnUWiEc6wabV3aitpbJXKcecBEuHzMjOhUYTV9H8%2Fd99xTQ18t8lNMIWMk8MGOqUBpa4arMY%2Bo3xd%2BEkBRkXnj%2FUr2vHRRQ6GXbxM1sNO11p5RFcIAn%2FV%2BaatgVYQymtyVaLBzbo9fuj6Mn6wkK1CA10rowClDFzrxETaIGPImOMxJCPmfaQ9xQq1Q0nTczu2A9HW1%2FePcISnRDI7XrqD1D6%2BnDPp5xVzx1Q%2F6lGw3MfG1tBV%2BZIG0NNS71NzdsX5eAlMjU69u%2Bij2gzBqySjHLPwPMlE&X-Amz-Signature=9e2ce99664ab7a413d18bc6446066f544b60acae94b1ba4433772b457d293835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HIM77X%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Pvz%2BKYVFgjxSqbzDWvQK3FiCBaxhCGhhJKCg8x6HIgIhANw1q%2Fayc9UiK1fxhfi3GMgDAe4gpQugHf7np2yQcKX6KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtuzfYc%2FxuIr4CqBcq3ANy5x8KeL9vZmhRA%2Bc3F4%2FRcQyPBRGuyzo%2Bx68745GF3OvtYH%2FXxcons2EEOmaQ5Ft6h6KXu8XqXjJQUFNbC17KrkX7BCHe%2FoS3nNfHpWKSLnzXgUqoJEEBVjWidbtM8Iy4K58lYFWW%2B8hTgONAqATEsnCkHqSBZR4MyNkPFf%2B2ilwnsUuYf4ewEiNdqznX0wZY8rjzYyFqp4GDEhJXQDhV0Rbmmpa1AYRNaGVKxDMZFhOE3IpIrKyIeB7OKwpe5C9T8CKn5sIOoOWwf%2FcSX7jdTYAiXo3YP8bg%2F3iXlFN3Cij9cHR1c0pQ0QngAxUcHDqd9S84fS4zhcRg8mvsciHnEaNLQeXz4MYwZcYaNj1ashNdQZgRkqLq4THz1iElHkzMCS1YcxcwpahGxiIkoyfJ6w8h3cysuRAaNZEkzbYGgVQ9cJdUXelkVAtHXeE2YtMHiU7hATF9gV4txhe%2BObtdA5eNU3oke5ZR%2Fk%2BTpEh8wUVyTl7%2FV24z6CasI7bMCwNSxc504rPzE%2Bzdl8LVciMpjB1Z0QlDGg6HRdA1fwRSHCmsHTu1xxX95rbjR6R8JqTKt75J7YzgDh8XEQbcd0RaX2N%2FVTeTz5IPARIFyO5WXaih9%2FdoeJcr3X0hNDDZi5PDBjqkAV%2FSQOmpVzq5nMedft3mcpROJtfBpeAHmsuFlGEHjQlloJlB%2F2mU%2BZjyyHA6%2BpEtNNR6WwTY61WDyQckMy6OpPPhYbtJOBVl%2FT1uGwRXrCAwZPizE3ZjxnodZhhV1D9lqOsjwwcXwoBY%2FgRwU3ToKqdEXunnnbbu4lunirbdQqDdw4CGZfXGC3l7WMd7c0prfJLFIPt6vk7VCnjEoJ35OYThZW9Z&X-Amz-Signature=5a647eae488fd98322f4693a75ab69cfc1557f63a47b15f8551401157eda5afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
