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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB5YKP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaBDD8yiy84exwCT%2Bfkqm6HqqAGCR1y7jkcwb5qe47WAIhAK5kpknhbORxBxOC63EjynLaOsESMVt9ifLgzHZfRkSoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy9dkeTNEOHL5E5Csq3APK7XhBT%2Bv0D8VfARRpKVA3gY9ErJskTFs4wgirIkg%2BzTIgrbp5OGJsBJih9IF3kStzCaYZ0jn52fojYyObv2fyC6i25v3JkpfV7yF5br4evpYWvA3AOd4Q6g9N2OmlQY1DyNhta%2F6gZbQAdh1aVYcJJJu8EVhd9NHikYZVcusG0kUOqaKFynrpqVY15TrBeLYbjYS0iKLz2bXUOExkjkTpr4fkyarfc4cuKln3NUnG%2Fn0IHScyq9VZsXkuiOoIegsDZSGoA9PMFUheOybVJp4PQqcUqbYNhOzOcAxb%2BL6t0pnkwfkI1gtYM2hjkfOVdgscuqmyQ8HN%2FDtfz%2FOCBzL1aGxX6XOUlBLqIrHt2Iz%2Fg22cBOb%2B2wK83sA%2FQ%2BC2U3vtE0XQk62wURzik6sBuNJWz0%2Fy9nn8bGNhK%2B%2FLja97xJXp0LkaqeadPvouoVDyxH52IsQ%2FpUzAWr3xD60N%2FECAB8sJaZFZDDA70ZcW8In6KeOSOCGFc8Ojt7vrFpeyGTu2SKVpwV04Ey72DNAyyZ0Nc0ccoX8xzyKIpFr3UI5HvTBmuN6Yg5VFw8DvGnXjl42GchlVEci9Hq3LWiqVkYHoWjk3iZklX%2B9JrEJszGXgd1HqPKKLmQqgeBVA5zC57ZjCBjqkATZNsjrYebzSJTyWvh0LjRPLiA3wAib7rXfapv1H7eLGRMCWWPBnfw8%2BvOkHHIvOjZXfNiO0n1uCLVFqEzyI89m83WwB2FNDVQldbeC8LJ1yDA88LBXZten2PKLnlJxG8sqbgfsvhwME2zFjLhH2ItUYOxXV02yxXA25RxoMBhnFBWVEy6ZZcipNdLMbpYqAefJz1q9Al%2FFZjuyocbauxrg1IXA%2B&X-Amz-Signature=ab9905315f96b3b65a5c4dab60fce44f7afce6ab42fb21761935becdb0b5923a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB5YKP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaBDD8yiy84exwCT%2Bfkqm6HqqAGCR1y7jkcwb5qe47WAIhAK5kpknhbORxBxOC63EjynLaOsESMVt9ifLgzHZfRkSoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy9dkeTNEOHL5E5Csq3APK7XhBT%2Bv0D8VfARRpKVA3gY9ErJskTFs4wgirIkg%2BzTIgrbp5OGJsBJih9IF3kStzCaYZ0jn52fojYyObv2fyC6i25v3JkpfV7yF5br4evpYWvA3AOd4Q6g9N2OmlQY1DyNhta%2F6gZbQAdh1aVYcJJJu8EVhd9NHikYZVcusG0kUOqaKFynrpqVY15TrBeLYbjYS0iKLz2bXUOExkjkTpr4fkyarfc4cuKln3NUnG%2Fn0IHScyq9VZsXkuiOoIegsDZSGoA9PMFUheOybVJp4PQqcUqbYNhOzOcAxb%2BL6t0pnkwfkI1gtYM2hjkfOVdgscuqmyQ8HN%2FDtfz%2FOCBzL1aGxX6XOUlBLqIrHt2Iz%2Fg22cBOb%2B2wK83sA%2FQ%2BC2U3vtE0XQk62wURzik6sBuNJWz0%2Fy9nn8bGNhK%2B%2FLja97xJXp0LkaqeadPvouoVDyxH52IsQ%2FpUzAWr3xD60N%2FECAB8sJaZFZDDA70ZcW8In6KeOSOCGFc8Ojt7vrFpeyGTu2SKVpwV04Ey72DNAyyZ0Nc0ccoX8xzyKIpFr3UI5HvTBmuN6Yg5VFw8DvGnXjl42GchlVEci9Hq3LWiqVkYHoWjk3iZklX%2B9JrEJszGXgd1HqPKKLmQqgeBVA5zC57ZjCBjqkATZNsjrYebzSJTyWvh0LjRPLiA3wAib7rXfapv1H7eLGRMCWWPBnfw8%2BvOkHHIvOjZXfNiO0n1uCLVFqEzyI89m83WwB2FNDVQldbeC8LJ1yDA88LBXZten2PKLnlJxG8sqbgfsvhwME2zFjLhH2ItUYOxXV02yxXA25RxoMBhnFBWVEy6ZZcipNdLMbpYqAefJz1q9Al%2FFZjuyocbauxrg1IXA%2B&X-Amz-Signature=a9966f157685459c5314b797c87e2f769069445ef87e8aa829d551470c524f39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB5YKP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaBDD8yiy84exwCT%2Bfkqm6HqqAGCR1y7jkcwb5qe47WAIhAK5kpknhbORxBxOC63EjynLaOsESMVt9ifLgzHZfRkSoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy9dkeTNEOHL5E5Csq3APK7XhBT%2Bv0D8VfARRpKVA3gY9ErJskTFs4wgirIkg%2BzTIgrbp5OGJsBJih9IF3kStzCaYZ0jn52fojYyObv2fyC6i25v3JkpfV7yF5br4evpYWvA3AOd4Q6g9N2OmlQY1DyNhta%2F6gZbQAdh1aVYcJJJu8EVhd9NHikYZVcusG0kUOqaKFynrpqVY15TrBeLYbjYS0iKLz2bXUOExkjkTpr4fkyarfc4cuKln3NUnG%2Fn0IHScyq9VZsXkuiOoIegsDZSGoA9PMFUheOybVJp4PQqcUqbYNhOzOcAxb%2BL6t0pnkwfkI1gtYM2hjkfOVdgscuqmyQ8HN%2FDtfz%2FOCBzL1aGxX6XOUlBLqIrHt2Iz%2Fg22cBOb%2B2wK83sA%2FQ%2BC2U3vtE0XQk62wURzik6sBuNJWz0%2Fy9nn8bGNhK%2B%2FLja97xJXp0LkaqeadPvouoVDyxH52IsQ%2FpUzAWr3xD60N%2FECAB8sJaZFZDDA70ZcW8In6KeOSOCGFc8Ojt7vrFpeyGTu2SKVpwV04Ey72DNAyyZ0Nc0ccoX8xzyKIpFr3UI5HvTBmuN6Yg5VFw8DvGnXjl42GchlVEci9Hq3LWiqVkYHoWjk3iZklX%2B9JrEJszGXgd1HqPKKLmQqgeBVA5zC57ZjCBjqkATZNsjrYebzSJTyWvh0LjRPLiA3wAib7rXfapv1H7eLGRMCWWPBnfw8%2BvOkHHIvOjZXfNiO0n1uCLVFqEzyI89m83WwB2FNDVQldbeC8LJ1yDA88LBXZten2PKLnlJxG8sqbgfsvhwME2zFjLhH2ItUYOxXV02yxXA25RxoMBhnFBWVEy6ZZcipNdLMbpYqAefJz1q9Al%2FFZjuyocbauxrg1IXA%2B&X-Amz-Signature=1597427a3bba558dad0b148ac14821d5e9bf0ee6c54f8c5ddb18e2fd69cdea46&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUUPKOB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FV%2BSV5Q4Qn6oo5R4DZ9quTpt0lEqS%2FWgIcvT3m0dVVAIhAK82U40U4NRsfv9vCL6A7FsmfR012fe5llPji8yMXAglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJniNHWM6KXmQt9%2Bkq3APUAZWr89Fcddvqv5MjaQoDqS%2FTsu2Q9lJGKj5AUesEfCkYCPfT6zAbl8ukeD%2Bf%2FHHkpfVaBcwHyJBvuy9hcYAz9ycUhuWnWGUzSn7siry9rpkZLYVxm%2B%2F%2FxZfBwhAh92juQYiJKGYeMV61667pqOAekiH6fupY2mR6R%2Boh5vhyq6b5OYfNSgo1J7ww2Os7FTeMQju5%2BQsiOHrs0d7cMTSAn%2FEdJlL90FhDoLhesdA8oHdh02m%2FUsSovsx1R9ziEHZmL7wVg3vFA%2BSUaWmz%2FvxEgIeHkTKfzbZDA5C8M8%2B2UmPwRcsGl4ponQjZDeSm%2BuTiqrITqKNTaxvE4W5HcrC1UJb7nW%2F22tXeZyTmdgSSFz43wNMHis4IkNCUc7WpzaU%2BBd7TiVtfP%2BctLd%2FAvkdcrrWHL6ksUlZ1e1diAP%2BZoZhsqJBijpVtqG5ExiyHkXJb3iCcmMKL8mfmFSVjNRF2p9UpDYSsLH%2B9gD5T8dfDpjOJkl7OYQRCvhyzagfoDDkWAGzbfVHi03k7HRiKJe5Py3HMNMXvBzP%2BqyAUPFg6c2stpJI2pg9Wp%2Fd5eMqiwtMBiYYyEL%2BaV02Sx5F76m6RyqaO5dZ6Ozoh7SDDLIpHW%2BmsCTFHg85hOWBMCjCBnJnCBjqkAQCCuEDxgdp5N2UP40Zo%2Fy0f9y6gY3a4tN23sahPBsJilc7GX0CXlg02d4lQbQr0mf9n4%2BYECz%2F80yhWd7eXLBOYRD46sB3kqokB6h7WO5qRqynhTV%2FBlNHnhXPht1S5jakMH4GVBv4%2FOkppc3f3mB4kneTCT4B648GkYOQ%2Fzz6HmpECuKO8lopSt%2FdCLKzfdKX%2BRZKpQ8%2F55ZJfePs61an0uAC3&X-Amz-Signature=786cd5d05c5c7638d0b5ddf32073ff22591a2499a9cae7f3dc4c86bc4c5f77db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6Z7DHN2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqNGx0Lj3QuYtfiZpw%2Fxv5tNyLuQt3vnA2jV7fLTvN7AiEA%2FlP%2BXB13tkWJTg7DxFkyFc90RWve51KfUnBDPZgJuwYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiQUmIfRROr4lbrUircA4lifB5xye8Lv0UIKZ1X2TWDLdNlR6iy2b0H%2FSShT2xuMSBQ%2Bi%2Ft9sV0XT2KA8%2Btbe02OCfqZxTGQLKsycI64nP%2BeQ76dCE4hQP9ZPBNhIlwq5eoQ42uS5HL11egBwYvgHiIDJfF7aSGCO7DRIJBJqjq8byfQ%2FvT46nBhKvhxUX55ALAjR1DQ7wvAc%2Fgy8Cj9Lhxyt1DLdL7xka4gyzA4mcucPQzAvxo2PpbxZylIOPmmj6pKQjAjAt2axhyJAAhQ7MDh%2F%2FzksdEmc6VF4o5AAHa3qEhiystBDzMeZI%2FXNjX469piCyxsGmfB1%2BML53zE1yummq4nX3fz3Ck9%2FlQQ5045TA%2BNRzcX5TFzFPEKR9CsQNbTrVnu1e1m%2F1UlJy1irWrUaZkoikCv6r6YTCGMOoKvNoo%2BXKKVdmtLV27ZZaTk%2BddRl%2FfcFybwNqvit8if7eAQQLyXFox9OiJelxB%2BebTatzIxqZjDuTMiAw1g%2B8JBNFoGWlwAb6VbXXuf3wwyp0nuIKV3xTO6VLVbv02Y1uAt2MYjDVY8xaiziS7LUKWoULFSPZLkAlEW8wd1gTWN%2FPS9gUmjnrxVtuAw0drklQw6LGwiA8FHxrUu6qnaUn2wGLvDgi%2BUStkNJhcMPrtmMIGOqUBVnj3qlLk2rT2EKI1AFfeRXkwg%2FGGYpvD%2FU6rmnf%2FChsy6WUPO%2Bu%2FchkwfKHJeUx78FjhNhls15TzUb8vn1uVJr0mTB6VoYsTy10WQWVPKjUDc%2BicM2jr12R92T9zDucSWRCxq8huFpYwEtDnjmgZ77TIhgt8vhTcfoLHhcI6w56QgZWqX4mbad9HYHKU087T%2FeXf80yEXP%2BIECV3ZvfvG9tsKnHO&X-Amz-Signature=8f614d403e7c4eb608762fe5babd7bf3b62e843934fc05e8a585e0a1184e37c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSB5YKP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaBDD8yiy84exwCT%2Bfkqm6HqqAGCR1y7jkcwb5qe47WAIhAK5kpknhbORxBxOC63EjynLaOsESMVt9ifLgzHZfRkSoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy9dkeTNEOHL5E5Csq3APK7XhBT%2Bv0D8VfARRpKVA3gY9ErJskTFs4wgirIkg%2BzTIgrbp5OGJsBJih9IF3kStzCaYZ0jn52fojYyObv2fyC6i25v3JkpfV7yF5br4evpYWvA3AOd4Q6g9N2OmlQY1DyNhta%2F6gZbQAdh1aVYcJJJu8EVhd9NHikYZVcusG0kUOqaKFynrpqVY15TrBeLYbjYS0iKLz2bXUOExkjkTpr4fkyarfc4cuKln3NUnG%2Fn0IHScyq9VZsXkuiOoIegsDZSGoA9PMFUheOybVJp4PQqcUqbYNhOzOcAxb%2BL6t0pnkwfkI1gtYM2hjkfOVdgscuqmyQ8HN%2FDtfz%2FOCBzL1aGxX6XOUlBLqIrHt2Iz%2Fg22cBOb%2B2wK83sA%2FQ%2BC2U3vtE0XQk62wURzik6sBuNJWz0%2Fy9nn8bGNhK%2B%2FLja97xJXp0LkaqeadPvouoVDyxH52IsQ%2FpUzAWr3xD60N%2FECAB8sJaZFZDDA70ZcW8In6KeOSOCGFc8Ojt7vrFpeyGTu2SKVpwV04Ey72DNAyyZ0Nc0ccoX8xzyKIpFr3UI5HvTBmuN6Yg5VFw8DvGnXjl42GchlVEci9Hq3LWiqVkYHoWjk3iZklX%2B9JrEJszGXgd1HqPKKLmQqgeBVA5zC57ZjCBjqkATZNsjrYebzSJTyWvh0LjRPLiA3wAib7rXfapv1H7eLGRMCWWPBnfw8%2BvOkHHIvOjZXfNiO0n1uCLVFqEzyI89m83WwB2FNDVQldbeC8LJ1yDA88LBXZten2PKLnlJxG8sqbgfsvhwME2zFjLhH2ItUYOxXV02yxXA25RxoMBhnFBWVEy6ZZcipNdLMbpYqAefJz1q9Al%2FFZjuyocbauxrg1IXA%2B&X-Amz-Signature=39d8815998e2229ebed631e3f70115e0e9d7b9281930701761828abd9bf002fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
