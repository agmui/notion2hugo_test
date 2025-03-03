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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KMG7HM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIja89F%2B4kvEiSt3Y2LxMkquibZalAZTGVVFJnknBZ4wIgQx9wTI0qXCzfprd0jOdBw5aYH30UL%2Fm5CvYCd3tPBqIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQM39le4QBGsyrgFircA2ISuduHk1g9O1jXBDkaMNXWBbGYEKXTcjCojib0VgpxLZXgo2e5ei4DMWNsUq3%2FGn%2Bz%2FMER6rTYi7KPs3fypj%2BKYInKi76zLiNpb7VlEjxeoqGcSC843wdQ5fQJvAXsne1GMjJ5wjFmuCBKZeeBNsD439EDk4QILcgU%2FDEWhMCjw8RU6M%2Byo%2BzBeC70Xu4pMfp427hBmRp%2BiBzPwINuuYq9yJ5fAWxjmUTFaRvPty8PbpKgW2U%2FtkIAB5HC91ZrzavBo%2FyyHsQux8Uf3pvo2OC7lHySKiCQCq%2Fb5PrmvIlq8T7louexXCMy4eC325eG%2B%2Bp46doITbsIEPQ7zXav04pbUbZmVVr77oTeROZyQP7xtlVPcLRnA4DgIbLC7iFx2sv2mWcN6zemgd78b%2FBNuFPgJIfQY5J9AwvRpQAsHZxo0QHQgINz4CFnzMJ9ezunxa83eVSl2v%2F2FfzXQKZtjqOlaBU5tDnNliO4MUGBO%2B%2FGdlfcP7MxFMBBhk4AWnRYjrYlJN7thz2tOwyhCHRmPDoOoOmsBUhacgxyCjGSApW%2BpapyVGgambGC7tIIBVsYyulRScW2XFitHYxanD6S799Mp1Mwp10W3etJBUqGyhciJB9mEYBiCsKojEuFMIX9lb4GOqUBYdoK7lFI2aHvGfeBLX4YT%2Bdh4ekV4BgN3AG5jgAC3Ey%2BFRzznWykKc0QX%2B%2FU5mcFul5sB3NQGcMqOoN%2B6dPEvSmug3gWxzbOmrClV4Td0fLXW2kHf91VgrCltM96JTEJfU2c%2BzhbBcsvTbS2kc7CFpyO1Vy7H3DvAtN0cWtelaIO%2FZkffH8GprEwCQrKPTWx9ML06zETnroVu5K7OdubXK2ogMbw&X-Amz-Signature=cef501f05d1cb60e2ca6dc126c1b8ac203a194bd2715be9975923fb5e02102a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KMG7HM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIja89F%2B4kvEiSt3Y2LxMkquibZalAZTGVVFJnknBZ4wIgQx9wTI0qXCzfprd0jOdBw5aYH30UL%2Fm5CvYCd3tPBqIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQM39le4QBGsyrgFircA2ISuduHk1g9O1jXBDkaMNXWBbGYEKXTcjCojib0VgpxLZXgo2e5ei4DMWNsUq3%2FGn%2Bz%2FMER6rTYi7KPs3fypj%2BKYInKi76zLiNpb7VlEjxeoqGcSC843wdQ5fQJvAXsne1GMjJ5wjFmuCBKZeeBNsD439EDk4QILcgU%2FDEWhMCjw8RU6M%2Byo%2BzBeC70Xu4pMfp427hBmRp%2BiBzPwINuuYq9yJ5fAWxjmUTFaRvPty8PbpKgW2U%2FtkIAB5HC91ZrzavBo%2FyyHsQux8Uf3pvo2OC7lHySKiCQCq%2Fb5PrmvIlq8T7louexXCMy4eC325eG%2B%2Bp46doITbsIEPQ7zXav04pbUbZmVVr77oTeROZyQP7xtlVPcLRnA4DgIbLC7iFx2sv2mWcN6zemgd78b%2FBNuFPgJIfQY5J9AwvRpQAsHZxo0QHQgINz4CFnzMJ9ezunxa83eVSl2v%2F2FfzXQKZtjqOlaBU5tDnNliO4MUGBO%2B%2FGdlfcP7MxFMBBhk4AWnRYjrYlJN7thz2tOwyhCHRmPDoOoOmsBUhacgxyCjGSApW%2BpapyVGgambGC7tIIBVsYyulRScW2XFitHYxanD6S799Mp1Mwp10W3etJBUqGyhciJB9mEYBiCsKojEuFMIX9lb4GOqUBYdoK7lFI2aHvGfeBLX4YT%2Bdh4ekV4BgN3AG5jgAC3Ey%2BFRzznWykKc0QX%2B%2FU5mcFul5sB3NQGcMqOoN%2B6dPEvSmug3gWxzbOmrClV4Td0fLXW2kHf91VgrCltM96JTEJfU2c%2BzhbBcsvTbS2kc7CFpyO1Vy7H3DvAtN0cWtelaIO%2FZkffH8GprEwCQrKPTWx9ML06zETnroVu5K7OdubXK2ogMbw&X-Amz-Signature=b756920d2be2a959254233797d1d4a792ebea42701733f67777d38cc775a4780&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFG3RCM6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiugEMygZ5Bxdw4UnvIfU6DbJwux2jHX49Qv4Hv7s%2BeAiEAkJ86%2FY8U%2BsMWgedSTHRDbpNzQqFg26L0R7xO4GDsDGoqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9QuCxSBGAYO%2BftWSrcA%2BbC%2B9mgQaJAyxfZzWkrlywi%2FFzEJrj8d9kLbp34V2MNU3LVIn7K65Liw9eTOMK315Z8oW%2FcQGrXezaBprU0ut7P515srS6Ad9lrn6HnL2aMQ%2F8DQEz98LiRrrK%2FoNg0isoTioFPhI6QLO4NdmXCVFYKRDYOaHkauV8esppHZ%2BgLKMJnSKaWA%2FToCuhnVx9XozLomkFifDE4hvXHnpgIh7EF%2B6IcA0ZQ%2FKQqydWdTYHndY6V%2Fq9Vr2MNNBY9HNFEG2Y%2FeclcopWWR%2BibqkPCLwU2ke3N%2Fi8%2FQE6UNsZTD1sHunFrGeJSAC1cAl56RJYJGPrLZ%2BvZXQUmxG8T%2FtNYhaJbq%2BcO8xffustNO45lo3b%2FhstoqbN9pdFtmQ3XmsV7vWNDX9yRb0LUjP2vtB46D77Oq1FwcXnrB4ZsWIHbijHJU8L3bqLDC%2FjuVXJmg2q9AfRV7iRJ8Bxd2BvxbWm8VSIOmgXmiuTWxLvqD%2BjmxKNrnHW0oDhSHCVlAGJ9IX3t2LgZn6J%2FHOnfhM%2BvZabBHHXU6pz58Zs37JV0Cv3qzP0q6SWHe6wGu66uzlDEZXn6S712a5Ywxxh47C6Xf%2BveUJJ3nXxIEGyZAvVWNIaElpEM7BaV5EcjiGltMKFEMPz8lb4GOqUBdYa7Hw2JkItn9fo9iAejkKB1x6bYhngg2p7TE3kmUWN2Epz32sr2Tq6c2nQyJf%2Fa758zezQv%2BdMlwAi5SC%2BnvpScmG9Be21WLY54N1yvi5FVtMZ2P3zIrkcYRtN%2FX9B8YrWqyoiDdN0O4Cps%2BpXwttWV%2B2tUvbNb5WQ3gkfFmdrzIgxuy2tUyoTAP4YPzy%2FvE1aBRoxWfynova9itynZ8jqGaRxi&X-Amz-Signature=ed1e5935cf04574bfdf5661fc92b2ea102e668662db3bebe10b8ef2fa842ae23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUSWJGU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCih%2FXf5TU%2FZ6urzIfOQSjg537AuyWnSt5VEHT%2B6uYm2QIhAJYvXAuo451FY5zPA0ufG6AZw7JuYv%2BpXtqsivciJwEfKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxglRuLAIY1Zvkw4OAq3ANNoQAvruGmSl881GBScZM4CDLnFhWGuK%2F50M6cPvHkpyBvPcZkRm7PUa67BZ6zftmm8148FDC4%2F6mQhU8JAlkDZg83VVgXMGr%2BcVIpC%2FIqLzy5lll233nfBs%2FFj5GSRPu2n3Rlh%2Fs0TZbnJnOsYEXQHbZDqwvWMNvskEq1nMeEMcePQ1HlA99dj65vZaL8Ijjb4LJsQ7Rkp4k8CoN%2FglEFsdNOefP7EsGQvqQPPO2ydTZOmZMFpZY%2B7nPAF6SIv7Qkf%2B4VsgdOaTkGDtu6uh7zIkxj6VB6VMSMG4JF%2FD%2BNuxbe4HyDc1fSgzEbXANw%2FuHy47Pq140RBEFUQQY3bpnRV6Ii1j4j3tjbh2CGsnv6bZLCHUhH4PHWEqfS2Dj36vDvGKXYm28oVjCxnIKWIqs0Gcqollhd2PoA3g0sqKeXxYJw7EzvEWWqbt0ib6TwXJ1fF2wUsyN8w2VNFbKr0Z7IAK4D8JJf0AcemU3wZkhdvByfrxKwM6F7rKjI8uQABF%2Bj%2FnB%2F6O6gyOlzUjjRn4Fto7THqmX%2Bk%2BVePPpDmi%2BdJzXjCYazse3Sti5mGuSxVyxcBxJ8wtigrBdnUWW9YvInsgopjx%2Be7aV38QtW2gZsUJVKW9lqGpcueX0KtTDR%2FZW%2BBjqkAcPsAkX3rMLAC4AJxzgY%2BUr7BpAFUWkIBLJ2FLAmkurPhyG%2FakA3uCSNA93bdT0EJslzNIQlj3YVnG12jJgXXOL2r2O9%2BvbBoej0TqpOVoolvfCtwzua%2Bj9CIA3%2BSa48vvTS9g8vvxTSr5IgNvk5bfhV3FLTr1rr%2FYZlOqT3WJNnrTNPjNOIM%2Fd%2FCM3K55AjZbjGBrQzPvPHNk7%2F5Tw83Fs1weLo&X-Amz-Signature=2dc34755dc96e859b9f05231a395217c50ccfcf16cd73f8d6e84ed3ad01f5814&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2KMG7HM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIja89F%2B4kvEiSt3Y2LxMkquibZalAZTGVVFJnknBZ4wIgQx9wTI0qXCzfprd0jOdBw5aYH30UL%2Fm5CvYCd3tPBqIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQM39le4QBGsyrgFircA2ISuduHk1g9O1jXBDkaMNXWBbGYEKXTcjCojib0VgpxLZXgo2e5ei4DMWNsUq3%2FGn%2Bz%2FMER6rTYi7KPs3fypj%2BKYInKi76zLiNpb7VlEjxeoqGcSC843wdQ5fQJvAXsne1GMjJ5wjFmuCBKZeeBNsD439EDk4QILcgU%2FDEWhMCjw8RU6M%2Byo%2BzBeC70Xu4pMfp427hBmRp%2BiBzPwINuuYq9yJ5fAWxjmUTFaRvPty8PbpKgW2U%2FtkIAB5HC91ZrzavBo%2FyyHsQux8Uf3pvo2OC7lHySKiCQCq%2Fb5PrmvIlq8T7louexXCMy4eC325eG%2B%2Bp46doITbsIEPQ7zXav04pbUbZmVVr77oTeROZyQP7xtlVPcLRnA4DgIbLC7iFx2sv2mWcN6zemgd78b%2FBNuFPgJIfQY5J9AwvRpQAsHZxo0QHQgINz4CFnzMJ9ezunxa83eVSl2v%2F2FfzXQKZtjqOlaBU5tDnNliO4MUGBO%2B%2FGdlfcP7MxFMBBhk4AWnRYjrYlJN7thz2tOwyhCHRmPDoOoOmsBUhacgxyCjGSApW%2BpapyVGgambGC7tIIBVsYyulRScW2XFitHYxanD6S799Mp1Mwp10W3etJBUqGyhciJB9mEYBiCsKojEuFMIX9lb4GOqUBYdoK7lFI2aHvGfeBLX4YT%2Bdh4ekV4BgN3AG5jgAC3Ey%2BFRzznWykKc0QX%2B%2FU5mcFul5sB3NQGcMqOoN%2B6dPEvSmug3gWxzbOmrClV4Td0fLXW2kHf91VgrCltM96JTEJfU2c%2BzhbBcsvTbS2kc7CFpyO1Vy7H3DvAtN0cWtelaIO%2FZkffH8GprEwCQrKPTWx9ML06zETnroVu5K7OdubXK2ogMbw&X-Amz-Signature=90624aae86e679cb7fa9136d282d9bd158f419b1e5c035dd0542c6fb01bd7312&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
