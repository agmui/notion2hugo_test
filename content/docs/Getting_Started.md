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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVSFKW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGFTlCs4o2sRNURioMb9OPr9WFj92KYX%2F2LAp7HNu%2BrOAiEApoLXljixzEslXs2WTXuaErfsiMX%2FrkgULVdq771jaJoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVZ%2FGgu%2Fftuet%2F0DyrcAzESu42k775cbuxZzR6oMNJvAcCgoofj2bjx9y8EZTYKzvscAuzDUkD1AL82tPhxPduTMZ6J2rCCFgrKfA60IRx8FQr2BRdsfkfy5t4lAcrOpxQ8y04ozbHfY8XgdAeQRhtVxuEF62u444rSS8sGh51Lra0rLJjg07nW7HGuIc%2B2Jv2Xzgl8rGVed1pMQ9MaMswpyLQRpJsWBU9XbHbMeQ0uAt%2Fy%2BziRlAkqQsofrDjqW3ZUJ4OO4q05WAaFHh%2B0KtrsMb%2Bq5cOf98hgNGD8FjQXgaFN8Nvm4JpbOnzzkJPoojA%2BOSsFtoovgLNwPixYtX%2F67NUBwdiKq6hcYVfq4JdjcitqcqbQxN1Q4T%2B7rhcWHJikDDMnEOry1rXVb2%2FBTidHXk4cF2CtjNQfE1nplRYLFxsGvDYhM858s%2BpVXWyrotHVJhKRRCu%2Baa8gP1sM2vbK2Yzj2R5Qs5pBIoNfyxFKWbhD5CgBezpFwZ9noi7zrFmB5wvxWYHxT%2FWs%2F9aHY6DechQQK8LcyzLuVUZ%2B3w0XSVn1UA%2BezJUrP%2BXkABdXicwc7xot9XXCjLdi%2Fra7%2ByA1ymZ46gIo%2FhBVqM7ZG8ZauJg49%2FgHqfNq9LBvIEsTgVTzfPXMh4Oaj6WUMN2P0cQGOqUBUQ3JxpXufydsEkhUtTos2CKSpEadq%2BTQuZQhgFOHGV5QFT1nahoA9F5zLBckH%2FbmdzAmHsps8dpOYPC%2FcncEJi2BcO%2FlmKJpxD5ep3ynmPWT5SRIbNd501l6E6GPU%2Bd0h5D73mu9TSomApiCnFcSM5KnW4WT8GMROwGiDbPFey6SKLeExNlIfjyC8mFX3bJsuc5b7Zat8hpdlEyKrOOUGrGHtBnb&X-Amz-Signature=b812b6f45b4132e91b04065fbc6f7d4ee0b32225ad9df5ce859ed09a19a4ad41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVSFKW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGFTlCs4o2sRNURioMb9OPr9WFj92KYX%2F2LAp7HNu%2BrOAiEApoLXljixzEslXs2WTXuaErfsiMX%2FrkgULVdq771jaJoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVZ%2FGgu%2Fftuet%2F0DyrcAzESu42k775cbuxZzR6oMNJvAcCgoofj2bjx9y8EZTYKzvscAuzDUkD1AL82tPhxPduTMZ6J2rCCFgrKfA60IRx8FQr2BRdsfkfy5t4lAcrOpxQ8y04ozbHfY8XgdAeQRhtVxuEF62u444rSS8sGh51Lra0rLJjg07nW7HGuIc%2B2Jv2Xzgl8rGVed1pMQ9MaMswpyLQRpJsWBU9XbHbMeQ0uAt%2Fy%2BziRlAkqQsofrDjqW3ZUJ4OO4q05WAaFHh%2B0KtrsMb%2Bq5cOf98hgNGD8FjQXgaFN8Nvm4JpbOnzzkJPoojA%2BOSsFtoovgLNwPixYtX%2F67NUBwdiKq6hcYVfq4JdjcitqcqbQxN1Q4T%2B7rhcWHJikDDMnEOry1rXVb2%2FBTidHXk4cF2CtjNQfE1nplRYLFxsGvDYhM858s%2BpVXWyrotHVJhKRRCu%2Baa8gP1sM2vbK2Yzj2R5Qs5pBIoNfyxFKWbhD5CgBezpFwZ9noi7zrFmB5wvxWYHxT%2FWs%2F9aHY6DechQQK8LcyzLuVUZ%2B3w0XSVn1UA%2BezJUrP%2BXkABdXicwc7xot9XXCjLdi%2Fra7%2ByA1ymZ46gIo%2FhBVqM7ZG8ZauJg49%2FgHqfNq9LBvIEsTgVTzfPXMh4Oaj6WUMN2P0cQGOqUBUQ3JxpXufydsEkhUtTos2CKSpEadq%2BTQuZQhgFOHGV5QFT1nahoA9F5zLBckH%2FbmdzAmHsps8dpOYPC%2FcncEJi2BcO%2FlmKJpxD5ep3ynmPWT5SRIbNd501l6E6GPU%2Bd0h5D73mu9TSomApiCnFcSM5KnW4WT8GMROwGiDbPFey6SKLeExNlIfjyC8mFX3bJsuc5b7Zat8hpdlEyKrOOUGrGHtBnb&X-Amz-Signature=7059b3f3d827a061b2e312d94c3b462aca6d315296562569cc73b1add63eb2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVSFKW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGFTlCs4o2sRNURioMb9OPr9WFj92KYX%2F2LAp7HNu%2BrOAiEApoLXljixzEslXs2WTXuaErfsiMX%2FrkgULVdq771jaJoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVZ%2FGgu%2Fftuet%2F0DyrcAzESu42k775cbuxZzR6oMNJvAcCgoofj2bjx9y8EZTYKzvscAuzDUkD1AL82tPhxPduTMZ6J2rCCFgrKfA60IRx8FQr2BRdsfkfy5t4lAcrOpxQ8y04ozbHfY8XgdAeQRhtVxuEF62u444rSS8sGh51Lra0rLJjg07nW7HGuIc%2B2Jv2Xzgl8rGVed1pMQ9MaMswpyLQRpJsWBU9XbHbMeQ0uAt%2Fy%2BziRlAkqQsofrDjqW3ZUJ4OO4q05WAaFHh%2B0KtrsMb%2Bq5cOf98hgNGD8FjQXgaFN8Nvm4JpbOnzzkJPoojA%2BOSsFtoovgLNwPixYtX%2F67NUBwdiKq6hcYVfq4JdjcitqcqbQxN1Q4T%2B7rhcWHJikDDMnEOry1rXVb2%2FBTidHXk4cF2CtjNQfE1nplRYLFxsGvDYhM858s%2BpVXWyrotHVJhKRRCu%2Baa8gP1sM2vbK2Yzj2R5Qs5pBIoNfyxFKWbhD5CgBezpFwZ9noi7zrFmB5wvxWYHxT%2FWs%2F9aHY6DechQQK8LcyzLuVUZ%2B3w0XSVn1UA%2BezJUrP%2BXkABdXicwc7xot9XXCjLdi%2Fra7%2ByA1ymZ46gIo%2FhBVqM7ZG8ZauJg49%2FgHqfNq9LBvIEsTgVTzfPXMh4Oaj6WUMN2P0cQGOqUBUQ3JxpXufydsEkhUtTos2CKSpEadq%2BTQuZQhgFOHGV5QFT1nahoA9F5zLBckH%2FbmdzAmHsps8dpOYPC%2FcncEJi2BcO%2FlmKJpxD5ep3ynmPWT5SRIbNd501l6E6GPU%2Bd0h5D73mu9TSomApiCnFcSM5KnW4WT8GMROwGiDbPFey6SKLeExNlIfjyC8mFX3bJsuc5b7Zat8hpdlEyKrOOUGrGHtBnb&X-Amz-Signature=85bb3942a1c8011dad9e402a90a289fde8fbb52a185c26fa6c2fd47c75faa993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TDDIQA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIBC78QuQmXJni28cBe3SSPK8JIeWwBPSMiGtPcSCh1FoAiBHoSZQomrzpO7lEl27O60AMl9FqubfjQnNxyDAvAtHESqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSZcRu3IlLvqsfVMKtwDHX3GMq%2B8TaCgxWQ01nQ48WuUlcdW71sMNyq9vsQnt%2FEwtQSPxT7vNbazFYrTcvOdB%2FBMd4x%2FpM16iJdK1brIe2fOwSLwXbIQnh6PaE660RGHNrly38Rszsxf6LbLZXT1G68nGRCyHs0IE1PjsuG5v12BcJVr7eAXdtCpwoExtJJbSKc0CvvR58aA81MyhkvSCYk4LrENDfhVCPNvwoWNTbG0gFQympwEgyu9bhBgtAl0zcjGndjO7TgBmupNzCYnmT8bswPxVqSvWCR4YJZwP%2BUa9%2BCqQjNQB6FkAmv1mDcyy5M14Rnwt7lxU6x%2B8NwMnRA2hyxxK%2Ff5KPraVOiR6kJv1fDT4n7sQn28lJbdZEdGjm%2F67nmG0cjVG3VcnE5TIVg7%2BwK3MfQaiK65QJYz3J%2FGJaOVSJRX5TtMuU3WYQ6oqOdetkjsRHk8POvC5QHEFbU1Sav%2B9p%2BuC7MoKUpuTkSA%2FroMaki%2B%2BlVDLuD31TCtInhuXwEvAU6Pp4VLmHVQ4xS9HNs9qbI%2FivKHqzZ42H7LUWVbqhhG1aycuLW0c2YBu0FZv64mDRx32qVt3%2BGtUfRaL13F66fjlJubd9Qm73ouaJ7Ne5WTfkERHGyuWPc84Btb0lf1OSe%2FWfMw25DRxAY6pgGD%2FBYJ27z3nd%2FzHLxWbc2dRt%2BenxnQh%2FYH92k8apR1r%2FMWvqosBamYyqpJI6NDzVzVQPmO3u7xVLuravD7bZYROUky9xMR4%2BYkLWPNi61ACE%2BxFA94NVPbOPruGaDYeBDXyxoMTCig3eKa6eEQk9PxkchhA4UI%2FHpAC0XUUX28BlOW%2FqihgEJkIhJsC%2BYdOuScK727yxgw5ibjzjmec1KPYftHLmGb&X-Amz-Signature=c83ebbb7d37be5cd7ea1d860e79254b51b653d87df948c42dbced501fed0d77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNMEKRP4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVp2fFkRxXLqevsdj4kRJ6kShOFpnXrpalUtMhHyVBowIhAJimihNsJFy2Ko6%2B1MVRHSo8JrdcbRzbxbzrlnY%2FRhP6KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBagJJQL09WKiCiZsq3APLYYAWqk0d%2B90%2B5Nb3nl7pR7Asw8uzCpV9E4zylsEK6HxXw%2FZEZapaUnzmLTYs9OXPRFMg0D8GW%2BVLs8n8QFkQe58yPd6JRF6tXa0luCoybN1FE9LE7paVoTx6EZejA2nGH%2BV8Mm1bBhTFJrUTHrcbunomXVylZJRqPZn3xBzCjgmvjc2bt6pNC8QIrT2DnwrlJgCG5DKniEndjAJB87kaKdJ3HLHdMoofBLx2bVR4f7KA9mur4Tz7HJKJDKSBX2YTbwlweHZ3pQ9AlwQzcdqarYUPq1m3SvYSecEp%2F7UifdUBrT6L6Z7iJ5CnGDtTkcDQ7%2FevjxnHj%2FXMYAv8nEUTf0HcyyM%2BZ%2Bd7nGNaSBZWXKH%2FElKHEFDe1VVcW%2B9kKcp69aN1QVGnz77YFy5Oen%2Finhwwpu80SIO5scfxYqK3TeHOdz4GLGvahFAUVXB8qikqR1bnv6yjH77odRwYQ7DNgQiR2%2FLR%2B6E0tFsBloyOmw23Gfhty3zS34zPOQLQTz%2B%2FDzdrvxy6hBeWCTol2zCDoUDPoP5TF1%2BbItbt88a5YdyE1FH1xWFtXV4Wjuv4U94ogcbvSoavFzzbOILXPjD5LSubW1yphItR2Fcdci%2Ftxr%2B2p7Yu%2FYZGK7LF%2BzD4j9HEBjqkAbtOMLx1aIkvIwoLJSiSNbcpjSjTe%2FjQ78RcuMQ8sUfILD2JUj%2FL%2F96P2Oz7VMhdOK%2BmS7ld2KlZxYzX%2FN8WVqbdNNVWR%2FU9Fuc60193O0aLsOagyeDV9Q%2FJA%2B1J%2B1wqbELVOYkpk9qFNN0u8Tkb4KvhTb4tQnKAt4ozCFPVc66bCb3YRNcmqtD5gF5c447m4i38XJJ4D0dzqOMFJuI%2Fn0sv7NJt&X-Amz-Signature=c521a9313d42796f7209a2356224aef98c772928057197bbda245460c5dddcb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVSFKW4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGFTlCs4o2sRNURioMb9OPr9WFj92KYX%2F2LAp7HNu%2BrOAiEApoLXljixzEslXs2WTXuaErfsiMX%2FrkgULVdq771jaJoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVZ%2FGgu%2Fftuet%2F0DyrcAzESu42k775cbuxZzR6oMNJvAcCgoofj2bjx9y8EZTYKzvscAuzDUkD1AL82tPhxPduTMZ6J2rCCFgrKfA60IRx8FQr2BRdsfkfy5t4lAcrOpxQ8y04ozbHfY8XgdAeQRhtVxuEF62u444rSS8sGh51Lra0rLJjg07nW7HGuIc%2B2Jv2Xzgl8rGVed1pMQ9MaMswpyLQRpJsWBU9XbHbMeQ0uAt%2Fy%2BziRlAkqQsofrDjqW3ZUJ4OO4q05WAaFHh%2B0KtrsMb%2Bq5cOf98hgNGD8FjQXgaFN8Nvm4JpbOnzzkJPoojA%2BOSsFtoovgLNwPixYtX%2F67NUBwdiKq6hcYVfq4JdjcitqcqbQxN1Q4T%2B7rhcWHJikDDMnEOry1rXVb2%2FBTidHXk4cF2CtjNQfE1nplRYLFxsGvDYhM858s%2BpVXWyrotHVJhKRRCu%2Baa8gP1sM2vbK2Yzj2R5Qs5pBIoNfyxFKWbhD5CgBezpFwZ9noi7zrFmB5wvxWYHxT%2FWs%2F9aHY6DechQQK8LcyzLuVUZ%2B3w0XSVn1UA%2BezJUrP%2BXkABdXicwc7xot9XXCjLdi%2Fra7%2ByA1ymZ46gIo%2FhBVqM7ZG8ZauJg49%2FgHqfNq9LBvIEsTgVTzfPXMh4Oaj6WUMN2P0cQGOqUBUQ3JxpXufydsEkhUtTos2CKSpEadq%2BTQuZQhgFOHGV5QFT1nahoA9F5zLBckH%2FbmdzAmHsps8dpOYPC%2FcncEJi2BcO%2FlmKJpxD5ep3ynmPWT5SRIbNd501l6E6GPU%2Bd0h5D73mu9TSomApiCnFcSM5KnW4WT8GMROwGiDbPFey6SKLeExNlIfjyC8mFX3bJsuc5b7Zat8hpdlEyKrOOUGrGHtBnb&X-Amz-Signature=f1edef98f4489f1c72025fce64d5e34e947e9adead29f6b93e64aa4742c71952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
