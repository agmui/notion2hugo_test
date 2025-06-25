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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WVSD67O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICnhdYmI31P80tXtcPfT0siRoGFv4XKWbCYcZ%2Bx%2Be4QQAiBcyJwQ94cECm3ddqCPVukP4n4CqYGcwKj7WcZF%2BLF58yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMnt%2Fs6v%2FnkuwhuSJrKtwDppG%2FHUmWEpOpSXyLFIOYvADvwgk8F3GDKW9dvfXqxoSGis4kTdB1%2BBj4PrvZUecOdvXUgBElxrqvkOGMQX14bFZgdfmTuzTj%2FXSKkKeya7o7X7Ej%2B%2BeKCx0SQTa7FbQJz1aKOuooctPjwRkKXY5jQhpSSCulGueoyb4go%2Fg8DhH10Cd4vzKcj9%2Ft875yaMTE2s8RfFR2y8sKUntuVhCib2nhsNXEsB%2Fx8WSaJxKsrK7jsxp9LlFyOQ3TAW%2BEo2I5beYMBGNlu9ljpjLfJKkbFaCe67ziqcVHk4kzxi%2BxwyJY1ScMF4njhEtfP5A1YPgrwK3t2aAecraZgFEDFrFG51dKlle3eiVBYUEqRoqkE1e3m2oVQ3MJriFKJFlX6AMkAHhDoK5MbJoEbS7%2B0Y49gH0QqnfDRc0xVhETF0pTQMN%2F46GDOqfLyjn3g7DvExV29tZgs0Bg1%2FsgNZVCRgg6ytUqYAObbmr5oa6ITueQAtvtwfX43X5arryiKDo0CLj0cfCX7UXvGoVXCqH%2Bk7iLp1bB3FkhZPXN7%2BlJHxXNAlTeol%2FwuPCbrhSD6GFlYCS3iga661qGrh%2BVeJG3YIjGBH26sp0nV%2BVn%2BhdIivHVr7ZqaH%2BbMSvQ1hk1D4Ywvt7uwgY6pgF6VDGpBk67lgrkHbfFNT8s5C5TJFAM14rDzqOYP%2FPmdj2MUxywdx%2Ffcv%2B2a1iKjk6TWrweSRVGwI3O8m1G0yB60jvBKjfFi%2FSpkwvEcH%2F4Ae3Tn%2FrRVDj7s0CWzJmMBOYq0TeBxFh7tnd%2BB9lQqpthWcGDXH61m34KrBIufUgcEw5JZRKXcy%2BgI%2F%2Bvw4UREe4zfhkWejNX6HdtwwE2QccvKg%2BBdnHh&X-Amz-Signature=0329362b90e9cbcd3e8f2f3875d26eb49d53c049eed14bc8d221eca4e1bec4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WVSD67O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICnhdYmI31P80tXtcPfT0siRoGFv4XKWbCYcZ%2Bx%2Be4QQAiBcyJwQ94cECm3ddqCPVukP4n4CqYGcwKj7WcZF%2BLF58yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMnt%2Fs6v%2FnkuwhuSJrKtwDppG%2FHUmWEpOpSXyLFIOYvADvwgk8F3GDKW9dvfXqxoSGis4kTdB1%2BBj4PrvZUecOdvXUgBElxrqvkOGMQX14bFZgdfmTuzTj%2FXSKkKeya7o7X7Ej%2B%2BeKCx0SQTa7FbQJz1aKOuooctPjwRkKXY5jQhpSSCulGueoyb4go%2Fg8DhH10Cd4vzKcj9%2Ft875yaMTE2s8RfFR2y8sKUntuVhCib2nhsNXEsB%2Fx8WSaJxKsrK7jsxp9LlFyOQ3TAW%2BEo2I5beYMBGNlu9ljpjLfJKkbFaCe67ziqcVHk4kzxi%2BxwyJY1ScMF4njhEtfP5A1YPgrwK3t2aAecraZgFEDFrFG51dKlle3eiVBYUEqRoqkE1e3m2oVQ3MJriFKJFlX6AMkAHhDoK5MbJoEbS7%2B0Y49gH0QqnfDRc0xVhETF0pTQMN%2F46GDOqfLyjn3g7DvExV29tZgs0Bg1%2FsgNZVCRgg6ytUqYAObbmr5oa6ITueQAtvtwfX43X5arryiKDo0CLj0cfCX7UXvGoVXCqH%2Bk7iLp1bB3FkhZPXN7%2BlJHxXNAlTeol%2FwuPCbrhSD6GFlYCS3iga661qGrh%2BVeJG3YIjGBH26sp0nV%2BVn%2BhdIivHVr7ZqaH%2BbMSvQ1hk1D4Ywvt7uwgY6pgF6VDGpBk67lgrkHbfFNT8s5C5TJFAM14rDzqOYP%2FPmdj2MUxywdx%2Ffcv%2B2a1iKjk6TWrweSRVGwI3O8m1G0yB60jvBKjfFi%2FSpkwvEcH%2F4Ae3Tn%2FrRVDj7s0CWzJmMBOYq0TeBxFh7tnd%2BB9lQqpthWcGDXH61m34KrBIufUgcEw5JZRKXcy%2BgI%2F%2Bvw4UREe4zfhkWejNX6HdtwwE2QccvKg%2BBdnHh&X-Amz-Signature=2b62b79bb1eac82b56d9b0b8cc5e324d3844dbff1eb2736e90e45f39fcb919ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WVSD67O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICnhdYmI31P80tXtcPfT0siRoGFv4XKWbCYcZ%2Bx%2Be4QQAiBcyJwQ94cECm3ddqCPVukP4n4CqYGcwKj7WcZF%2BLF58yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMnt%2Fs6v%2FnkuwhuSJrKtwDppG%2FHUmWEpOpSXyLFIOYvADvwgk8F3GDKW9dvfXqxoSGis4kTdB1%2BBj4PrvZUecOdvXUgBElxrqvkOGMQX14bFZgdfmTuzTj%2FXSKkKeya7o7X7Ej%2B%2BeKCx0SQTa7FbQJz1aKOuooctPjwRkKXY5jQhpSSCulGueoyb4go%2Fg8DhH10Cd4vzKcj9%2Ft875yaMTE2s8RfFR2y8sKUntuVhCib2nhsNXEsB%2Fx8WSaJxKsrK7jsxp9LlFyOQ3TAW%2BEo2I5beYMBGNlu9ljpjLfJKkbFaCe67ziqcVHk4kzxi%2BxwyJY1ScMF4njhEtfP5A1YPgrwK3t2aAecraZgFEDFrFG51dKlle3eiVBYUEqRoqkE1e3m2oVQ3MJriFKJFlX6AMkAHhDoK5MbJoEbS7%2B0Y49gH0QqnfDRc0xVhETF0pTQMN%2F46GDOqfLyjn3g7DvExV29tZgs0Bg1%2FsgNZVCRgg6ytUqYAObbmr5oa6ITueQAtvtwfX43X5arryiKDo0CLj0cfCX7UXvGoVXCqH%2Bk7iLp1bB3FkhZPXN7%2BlJHxXNAlTeol%2FwuPCbrhSD6GFlYCS3iga661qGrh%2BVeJG3YIjGBH26sp0nV%2BVn%2BhdIivHVr7ZqaH%2BbMSvQ1hk1D4Ywvt7uwgY6pgF6VDGpBk67lgrkHbfFNT8s5C5TJFAM14rDzqOYP%2FPmdj2MUxywdx%2Ffcv%2B2a1iKjk6TWrweSRVGwI3O8m1G0yB60jvBKjfFi%2FSpkwvEcH%2F4Ae3Tn%2FrRVDj7s0CWzJmMBOYq0TeBxFh7tnd%2BB9lQqpthWcGDXH61m34KrBIufUgcEw5JZRKXcy%2BgI%2F%2Bvw4UREe4zfhkWejNX6HdtwwE2QccvKg%2BBdnHh&X-Amz-Signature=552595d4b59ab9f179139c485f9261a13f3f6018c9afc9665dfe747187e8a75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WNPIE6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIB4A2GAnYYG8rahn2EGzPMAjsHTaYQF7LJY%2BIP6D%2F8IIAiB3cr38%2BMHMhJ6Rtr063kkyXblxGzHg7ehFINjQSCtW%2Bir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMsNSGCoxi2dPFOoG4KtwD7tfDwun221qcZvTprfTExUdXapPWMxFTIqygz6kNqxsylCCIShgFvEb%2FPpCObJ61MfSGsNf7xnN2OecqowhwhYdWG3JJgnfdUvMTpmfqo1hqliFZebn2ypU150yakHZ6DUQw2gzKqWHYUtbCCgYGJhhSYpNoE6LP4ktC5i5XKvP3%2BTfd%2BKUa%2BlXq25otbbtVmps8ZskoyIW00SDKkYuP0LGG8I%2F%2FJfYTQ%2FTDLqJspagSnbgX0FaWO82by3v%2F2UYS6g9e6AIlr9DPrDCbGXJs3xV47DTptM6yhgcvd0F4OUYUikNzhMk63138eH9GahabuiVavfOD3e%2B0AKOCuRPHirSjwrF0Tius3AqgcG8rmUJSM%2BuwwCcDcyl%2BEx2tH2xSmf%2Bcjh%2B27435cmrKyWPOFD466Gfz%2BCR3UBfYGyXWNY7YN7CKpuxvpZbGBm6vnJQMT9oDrQ8QJm0rBHlVS%2B23DccbccHS%2Bl9urN8UtYPKnCucFDYlfgeUO3fVwKWyd4ULG0QyhdVY9EJDiVx8gFkIYi035re6BA1c8tSz4LQXPSTXpuuMz3R9I9og%2Fxi6Tea3i9kRYiAb7nKpL8IOAtBFeO5FVEVBBVV%2FFjL%2BmFwrfA6NoRPVYnrGxdCJmrkwtd7uwgY6pgEvGUH9sllOLBBN2zthgQxJ9hLWOweyXpBOPf0YGXlqv7KLYz2A4JSktP0UtM20d8U4YCg9Dnn53aPF8lDFh7FFHZEEwgePN17heOVIGUpoGiCy1WehrU07ThTEN5fifkCEQpw43kYSwXwugrCzyR%2Bd3SXjJGlmyeeuwmAUukzFVp8M2f%2F7YeLgjqejiAv%2FVUiOHSsiRUUJfHtctyiEA6MuNonpIL5V&X-Amz-Signature=80afc977ad367d16621b49f13b83beb7293f145c319882c6b5d051b705952727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4EFVVR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAc%2BJYhA8WbHxlJCRgeElipdyYh%2BowoDvL6CQ0I%2BQg3lAiEA0ZsdeWSiTbzXOU%2BqIbhQEbJDSrVqnX2gosHZ5bTI5l8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKLXpC45No1SuR%2BHjSrcA4Qi0KcmaASe9uUthLoOV1hTzLoHvcOmG3CA1uH3DYt%2BorVVrEwtirC94HCtEOEtyzJ7MMNO2tg8OWv6mVQUySyEeCIVEIFfI2PMkl4k5yGb%2BU0Fy81sesQu21tLhlNtIOfNc6KgvZXbeNfsJ%2B8lavxT66IA%2FBaMFTVwHpcFETG9otQir5SnxwbfwUOIHPxoNlUFc8uS7vSnMzc8fexPVcy22Aw1%2FqoBbNjgdd6fIKlE6BajoJVOEUVSLBuABJq9cqPe2del9nwZliIfhOtvT3dJJEWZNQtrZtJKJbeH905ni7PuXPW%2F257uTQmn3KZuMbu%2FrFKXvTtHY1tvLRld1YFWY%2FpJZw3wYBKyHDTRCXGMrM2HenWWSrd5rMvJczvnqsB89pAKOUE7y10ZSed0IOEivWCwQMCblIc9yIOuXZO6Ywvn4izXnyV73XiF8%2Bd2a4FnLW5yry2APjAWM7L8qwjn5koKlq9sUyJv4usFNM9m6uqeCmyW5j63kumg0gUBK7ZzhPR4mRHipRel4vkh5m5e%2FI7EeR75ruCXEI0wG9BnVJ0q82TAhbZIpgZSzv2axjbsoRMNN1h8151hT3Ww%2BqqH2JRcxtJvfcAcjQGq6MRoH23UV7%2B2EfbR08RnMLbe7sIGOqUBYCIqqVmbcsbovsnkTjIAf1PQZBc%2B6M0w5ihZhccHaxmt3kKIL5b1AY8bWJ3pT7X1hAzkSK34oIunE0am88kfP5CDAQz6k%2BO0LrUhzZexhhBNqvB3R5%2Ft2wbAGu6yuALdaXOJBCMPaU%2BCUrEVDO2vHUjBwP2Vytc9MW9Dt1uETCcO6I9JOI3fm7txGVHcyrAw3IXuBXljFiavEavDCJY8Zv%2F%2BeP%2Bh&X-Amz-Signature=0d61a90c1ee363c956195d66f704a60cef4dec632b556e0588e012644e9c5bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WVSD67O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICnhdYmI31P80tXtcPfT0siRoGFv4XKWbCYcZ%2Bx%2Be4QQAiBcyJwQ94cECm3ddqCPVukP4n4CqYGcwKj7WcZF%2BLF58yr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMnt%2Fs6v%2FnkuwhuSJrKtwDppG%2FHUmWEpOpSXyLFIOYvADvwgk8F3GDKW9dvfXqxoSGis4kTdB1%2BBj4PrvZUecOdvXUgBElxrqvkOGMQX14bFZgdfmTuzTj%2FXSKkKeya7o7X7Ej%2B%2BeKCx0SQTa7FbQJz1aKOuooctPjwRkKXY5jQhpSSCulGueoyb4go%2Fg8DhH10Cd4vzKcj9%2Ft875yaMTE2s8RfFR2y8sKUntuVhCib2nhsNXEsB%2Fx8WSaJxKsrK7jsxp9LlFyOQ3TAW%2BEo2I5beYMBGNlu9ljpjLfJKkbFaCe67ziqcVHk4kzxi%2BxwyJY1ScMF4njhEtfP5A1YPgrwK3t2aAecraZgFEDFrFG51dKlle3eiVBYUEqRoqkE1e3m2oVQ3MJriFKJFlX6AMkAHhDoK5MbJoEbS7%2B0Y49gH0QqnfDRc0xVhETF0pTQMN%2F46GDOqfLyjn3g7DvExV29tZgs0Bg1%2FsgNZVCRgg6ytUqYAObbmr5oa6ITueQAtvtwfX43X5arryiKDo0CLj0cfCX7UXvGoVXCqH%2Bk7iLp1bB3FkhZPXN7%2BlJHxXNAlTeol%2FwuPCbrhSD6GFlYCS3iga661qGrh%2BVeJG3YIjGBH26sp0nV%2BVn%2BhdIivHVr7ZqaH%2BbMSvQ1hk1D4Ywvt7uwgY6pgF6VDGpBk67lgrkHbfFNT8s5C5TJFAM14rDzqOYP%2FPmdj2MUxywdx%2Ffcv%2B2a1iKjk6TWrweSRVGwI3O8m1G0yB60jvBKjfFi%2FSpkwvEcH%2F4Ae3Tn%2FrRVDj7s0CWzJmMBOYq0TeBxFh7tnd%2BB9lQqpthWcGDXH61m34KrBIufUgcEw5JZRKXcy%2BgI%2F%2Bvw4UREe4zfhkWejNX6HdtwwE2QccvKg%2BBdnHh&X-Amz-Signature=b756a5cd999b7234dcff1345439af31b5192d2eee00f3e9cb8abc68534343707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
