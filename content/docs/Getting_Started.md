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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GLHODT3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDybiEHOuhQ0od8h3ywqNOHLhxOusQ0nwfPoLtwm0pgAAiEA0H%2FNt2BFklwagWzKhbX9ONtttma3NspCMIw84gEOL7YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIO58c3XGuldAIzt5yrcA91BvZWlef217XkC9bvB%2Fu3yXp0IYNuaOC89q7pew2Maf7oEKxO%2BE1HTsh0DO9Eiwh8dPZSc0dKLI6uSRqDwRVd3yJn5J%2BkVBGP93Apu%2FUtFD929TQdzx0W3ewvXJXYk8AQQYtN6AVZ8Zjus5SfzMfpA0Rsd8YXytWhm%2BJGPo%2F8qqvIOC7w5ddnWYm3vvycJNRZsztXQ%2FBUAYIoMGuEOT8WWulFS%2F7hRAL9QWvROBVx5yFOPiPJiukudpZusqnh47lc3zzxK5MWcM%2BaEKpQaGjiIPoI9suKLBpbXgSxEX9Oy%2BwA%2Fx9XAumu4rOJTXeEhVghVukbTKfj70dySgLrB1jPRe0tsJpw5bus7dX8eZl5Zut4%2FrADzZVSowdbKtk1f%2B0WXG5SigIPWh%2Bi6vVs3okS2ZsjQNsRbQjOoSC99MNJWQ4GXfDUzOu0Hh017IMkkSuGqT%2Fhu%2BEUoENj1lZCmk4V2RdqK2Vei7r1BCbRyYRQfiCH04M%2B%2BxnAXaFWKkQ6BMpbmA3HvxfNgJ2EkVxb1%2F8nUV4W4UNZZe4uY%2Fxp641VtDMTa4ogJOp5xLdFnUIvdpiNLEwQPScMs9kQSRVQRLBvojXz6A0T9GeWXFR0k7JboACLh%2FB7hhRrq4fedMNn%2Bob8GOqUBWRm0XmjzX8jbxYVidnuC2pir2cZVDG15BfmB6YRkGOl1aWgP53YK1ljhsefzB7DZ%2B5CBWe0NIpowIdIQN3t2BnEIN0Nf0rQeKlhV7R8XfMKu%2Fj%2BuI5pb5E6oJI1U5Yfw2nxzL7N4fsXK7C%2B4AUuxMq7edknrPYP4IGGgAW8UUjcZxcaBJMfXaW58O%2FqJv1CdxfB9BWumt%2Fdm8cwRnbqUIifWLkFL&X-Amz-Signature=02eff4d71322ebf482b90e1d64b9351e490b981d5f623d1fea88bfc661a7312f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GLHODT3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDybiEHOuhQ0od8h3ywqNOHLhxOusQ0nwfPoLtwm0pgAAiEA0H%2FNt2BFklwagWzKhbX9ONtttma3NspCMIw84gEOL7YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIO58c3XGuldAIzt5yrcA91BvZWlef217XkC9bvB%2Fu3yXp0IYNuaOC89q7pew2Maf7oEKxO%2BE1HTsh0DO9Eiwh8dPZSc0dKLI6uSRqDwRVd3yJn5J%2BkVBGP93Apu%2FUtFD929TQdzx0W3ewvXJXYk8AQQYtN6AVZ8Zjus5SfzMfpA0Rsd8YXytWhm%2BJGPo%2F8qqvIOC7w5ddnWYm3vvycJNRZsztXQ%2FBUAYIoMGuEOT8WWulFS%2F7hRAL9QWvROBVx5yFOPiPJiukudpZusqnh47lc3zzxK5MWcM%2BaEKpQaGjiIPoI9suKLBpbXgSxEX9Oy%2BwA%2Fx9XAumu4rOJTXeEhVghVukbTKfj70dySgLrB1jPRe0tsJpw5bus7dX8eZl5Zut4%2FrADzZVSowdbKtk1f%2B0WXG5SigIPWh%2Bi6vVs3okS2ZsjQNsRbQjOoSC99MNJWQ4GXfDUzOu0Hh017IMkkSuGqT%2Fhu%2BEUoENj1lZCmk4V2RdqK2Vei7r1BCbRyYRQfiCH04M%2B%2BxnAXaFWKkQ6BMpbmA3HvxfNgJ2EkVxb1%2F8nUV4W4UNZZe4uY%2Fxp641VtDMTa4ogJOp5xLdFnUIvdpiNLEwQPScMs9kQSRVQRLBvojXz6A0T9GeWXFR0k7JboACLh%2FB7hhRrq4fedMNn%2Bob8GOqUBWRm0XmjzX8jbxYVidnuC2pir2cZVDG15BfmB6YRkGOl1aWgP53YK1ljhsefzB7DZ%2B5CBWe0NIpowIdIQN3t2BnEIN0Nf0rQeKlhV7R8XfMKu%2Fj%2BuI5pb5E6oJI1U5Yfw2nxzL7N4fsXK7C%2B4AUuxMq7edknrPYP4IGGgAW8UUjcZxcaBJMfXaW58O%2FqJv1CdxfB9BWumt%2Fdm8cwRnbqUIifWLkFL&X-Amz-Signature=773f3e75597aefe4cb3f0e410e83d1082a47470d2e673483516a8f3eb0c2c172&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM7U6FDZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCTj3SVyJUMWy%2B42Mt5deQcsoltDxpuk%2F7gXPuUT%2FEdowIhANEp92iR2b6Y07kAqlKUsC6Rndu1vJjZ%2F0tKTGFAvYYGKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhaRdaNlSfrLVJFJkq3APs82SGhz2knBJZpqpJaD1Q%2BEQAOlDx7uuE%2Fzbem2pvGXJ6Wlj48ZEnQ4XJa2W%2FkXeRgg3EqdHFAZn9L0sd958r9ORqf0WoqYwV2DyOJlnA1rMW2UNrBqsrmf8eSpzp6QPUokAz3WrSXQZJpzIiCT6DA1%2F6wi5nR6f7cXs8IV4%2FZOSYu%2BcToK9QG1jPi%2BhwVQvpr7zQdo5YOWAFx2nUr%2B8j%2BF4nGO04FsQUeT0Vf9mVzMoaEBu2%2F1mKXbPEmkOwZdHtkF1geWT6el%2BL4hPfWqohbo%2BFR7oYgqaPUaeDneGvo%2FIscAnJLB3FCqdRmfWjFIK6E3BfWxQfBHbRJR5kLJ0SOz4opdXE8NQzwqZdVLWplyWtserXwGBqgzYILliZopSgbAQsPA%2FaWaTHF4xNVF%2FH82PgeBngT312i%2ByEwm1YIGjNRYGXFHt3rYfqhFrl9ZNkYXjdiU2d7EQ8YLTkCRRFYSamd3nQZDsqKV6JWHv2SFvIg1HZCF4WNxDUcUOgPU63sMj62WccPQMJRUNgqEm7VevzDscnFl1RRvkYt9khxqgGNO%2BatL4Ej%2Fxbk7zk8lFavc%2FIEocrk1RSpmWkVFjWjPmDxWsQs1OoRvWBQ8pQhxL8FhMr%2FMIV8cpaoDCC%2F6G%2FBjqkAbK3rJWWefZHUr246ZFWX%2B8f71T5Mo4D3TyChmubWAGJguEpymMQ69tSD0mrjhSMwVgOdocWqcfihdunpzXOoQusAdbHO%2FNXRR4OQJPT32vJ8arX%2F7k721j14YwNcYZrk44o21Ai189PwGFwrTrg39r60rWgPxF%2F2gbcUlMYgzl7%2BN2fHjvDbfVQntvXhfxGbK4qnZkb86eAQP1rOz746olA6GIv&X-Amz-Signature=ac5306812ff55f7eb72f6b957830ab9c63863d1bed36cea37844145095e650d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KXPKLVJ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCbpX3VJpubqmoLagV2QLavil7UpkOQ9zGQPyvPPvomAAIhALE9F%2F4q5wJQHkMsxhFjkov%2FodBZs6KMpjwYWa5dnTjgKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrrXheBDRu3FDUN9gq3ANsj%2FHMm%2FXrpvNP9hu5vmxSsHubATsHBkD0RrqzqdkFRZJ0EwbSMJ8pjs41FAOyQaAX1%2FLnpodrFc9RjX4TR53C7UJ5etYWhn2sza1uBNqH2pCRWLnWGlu4DafxUid3kiL7g759LwHHhCxeRW1%2BLQPBqJnXObiGLWZZjj6w%2FUf4UICLMEVSO81nXlHjOd5K7W15aw%2FVIyiP0DUov8HKdxGozvATirT1P4REha3DbmlCzdyhrVMW6E%2BPB4x7qiN074izMMT4QdpudVrc%2B%2FYCM9pVZfIn%2FUdy5DPgkMbJvC12uBH3IHRa1CClwLfVpFbEaf9QWI0oRQadTHbFSlfqy0lauLWzyTNmbdmvoLW3GMj29Ow3hYcWiDRCa143sUYDAT8tvBg40HOsjwpgMk1bldStcxVG%2Fvr%2FaESTFd22WFqIiAr58LTlMBvW6iRzWRL1nIGqMQwUcNgttFm4qdEXPx0yoJtaLgJARcVrTFu1zVpmKScJUhPo%2BsWhuE8x%2FutqG28JVEs5cKW8eSYJ0KTipSyL%2BAmG2HYbw6PZoatOfuY8jUoipZ4ZR2n1bfJgCLp8EViHV9eA7iWHYbrWel%2F99p5nVeDn5TisthZq89%2BV%2FPVdhyQL7lYKervyq0btmTD9%2FaG%2FBjqkAVGbfF3S7fsQjh6Cy3YUM4f%2FnVlmCr%2BUPxUyybbAcoo2rxh9LTR2ukJbLnO8TvTKT7kvDwHfx7MeFaytssYl7IhORP4MB0uZ0IBwiFn2nORJi4ULlhDGo6F6CwssUpVYATCIxwQWwwa2LSEOjmChK3Pc7NBfySJzZSgZ6MXL2hRoLHWjf%2Fr605Jg0d7NLOFAG4LN%2Fu8%2BslO1kDMrwHlSjS%2Bt%2Bvba&X-Amz-Signature=829a92d1a6d0bdbc6a7d89952cb81217f6019e65506acbb34619cfdcde6b6307&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GLHODT3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDybiEHOuhQ0od8h3ywqNOHLhxOusQ0nwfPoLtwm0pgAAiEA0H%2FNt2BFklwagWzKhbX9ONtttma3NspCMIw84gEOL7YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIO58c3XGuldAIzt5yrcA91BvZWlef217XkC9bvB%2Fu3yXp0IYNuaOC89q7pew2Maf7oEKxO%2BE1HTsh0DO9Eiwh8dPZSc0dKLI6uSRqDwRVd3yJn5J%2BkVBGP93Apu%2FUtFD929TQdzx0W3ewvXJXYk8AQQYtN6AVZ8Zjus5SfzMfpA0Rsd8YXytWhm%2BJGPo%2F8qqvIOC7w5ddnWYm3vvycJNRZsztXQ%2FBUAYIoMGuEOT8WWulFS%2F7hRAL9QWvROBVx5yFOPiPJiukudpZusqnh47lc3zzxK5MWcM%2BaEKpQaGjiIPoI9suKLBpbXgSxEX9Oy%2BwA%2Fx9XAumu4rOJTXeEhVghVukbTKfj70dySgLrB1jPRe0tsJpw5bus7dX8eZl5Zut4%2FrADzZVSowdbKtk1f%2B0WXG5SigIPWh%2Bi6vVs3okS2ZsjQNsRbQjOoSC99MNJWQ4GXfDUzOu0Hh017IMkkSuGqT%2Fhu%2BEUoENj1lZCmk4V2RdqK2Vei7r1BCbRyYRQfiCH04M%2B%2BxnAXaFWKkQ6BMpbmA3HvxfNgJ2EkVxb1%2F8nUV4W4UNZZe4uY%2Fxp641VtDMTa4ogJOp5xLdFnUIvdpiNLEwQPScMs9kQSRVQRLBvojXz6A0T9GeWXFR0k7JboACLh%2FB7hhRrq4fedMNn%2Bob8GOqUBWRm0XmjzX8jbxYVidnuC2pir2cZVDG15BfmB6YRkGOl1aWgP53YK1ljhsefzB7DZ%2B5CBWe0NIpowIdIQN3t2BnEIN0Nf0rQeKlhV7R8XfMKu%2Fj%2BuI5pb5E6oJI1U5Yfw2nxzL7N4fsXK7C%2B4AUuxMq7edknrPYP4IGGgAW8UUjcZxcaBJMfXaW58O%2FqJv1CdxfB9BWumt%2Fdm8cwRnbqUIifWLkFL&X-Amz-Signature=f64d0a6bb6b2c0d97d347fd0901249ec5d51775af8969ff1a23de64751b6d339&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
