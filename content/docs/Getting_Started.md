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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSR4SBOR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG04Gvo%2F5XHrJrCO%2FO6WbfbSICmXsYyaX4Kjmf%2BS4nzBAiAHyXGVVo07yn2TtfL7FU2VFK6eiwjj%2B9ozRJFKa8IsCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMl7jnyBa4hFxsUCDpKtwD6ACuMpB1zWVjTB0npC9PyDYXByJfjELf0avhVrTyFVr735ZkvkQUWd6advB%2BTu5kDN9vXpweabZlowtYWVecVD7ZJVI1RR2%2BN3yJdbNFLhrhK%2FFsL246XaQ9dtov6Wn%2BcdtYawo3l02b%2F6PDOJlNOabT7Ll%2FkCM60OcY97Z8qfV%2BLjpgXmqbu4sdQMApIBRoijn3lF9COKvZDU5wV5PCP4aiTOdC%2BPy2sWyE55F%2F8K1nueQk%2FdTu4H8nic4cDOpKRfeo7DckNMyB71uBgIfwEduF2zi5iNhqAWcc5330ZenmyQn2cTVgKQJp22SjU%2FBjbIaB9%2B1h19Ixe8o6LSyhUVI3fGOTTIzNhhT6N4CTzghNqaoDhdBtfPXAIyH6FCPkX047ScH9I9M67Q4aQqkkohmcASvTSC1x%2F8mL9Q4jH%2FbH7v%2BrXbLMPsLPk2cdInFadumSgbV1X%2Bk0u6FAoCrr9dnLBiYp2cG6mK9R%2FjqXsOdSEqykk%2BYohIKIfily6hsoi5AaNSlMJZmInEk7Op%2FgPAAQX%2FspadeW4FpuH7foXuZBt8c3jCfulig9omwVBuDTWSur0J64FBXw8rnsN8Gm64XC0jFr3RNLS9dGhhw0DePQjnTvlmj491I2WyEwu6vSwQY6pgFYdZ5zXd7nhYbPNB2sTsHUuLZWvnn%2FX2p7O%2F6z80tC0zYHqah5kIzfbSFoyMMxKre%2FtvitNqlr3NvLlPqv0sr0togoaGcGEea89LRvCwMkaL7%2B9%2BfjZ8MLSLj8FdW2vxB1lSgm8jvqPvbCGZS2uUCifi%2FKe5JE2T7IFswROQHHUh%2ByHD4gYzadnDV%2F0mgb8BVZyFeMHqn%2B2G8zwShe13YLr28AAxRp&X-Amz-Signature=9d56d33210a21e6357a330e37b6be8c55648d3a95ce5ba21ff52bb176fa7162c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSR4SBOR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG04Gvo%2F5XHrJrCO%2FO6WbfbSICmXsYyaX4Kjmf%2BS4nzBAiAHyXGVVo07yn2TtfL7FU2VFK6eiwjj%2B9ozRJFKa8IsCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMl7jnyBa4hFxsUCDpKtwD6ACuMpB1zWVjTB0npC9PyDYXByJfjELf0avhVrTyFVr735ZkvkQUWd6advB%2BTu5kDN9vXpweabZlowtYWVecVD7ZJVI1RR2%2BN3yJdbNFLhrhK%2FFsL246XaQ9dtov6Wn%2BcdtYawo3l02b%2F6PDOJlNOabT7Ll%2FkCM60OcY97Z8qfV%2BLjpgXmqbu4sdQMApIBRoijn3lF9COKvZDU5wV5PCP4aiTOdC%2BPy2sWyE55F%2F8K1nueQk%2FdTu4H8nic4cDOpKRfeo7DckNMyB71uBgIfwEduF2zi5iNhqAWcc5330ZenmyQn2cTVgKQJp22SjU%2FBjbIaB9%2B1h19Ixe8o6LSyhUVI3fGOTTIzNhhT6N4CTzghNqaoDhdBtfPXAIyH6FCPkX047ScH9I9M67Q4aQqkkohmcASvTSC1x%2F8mL9Q4jH%2FbH7v%2BrXbLMPsLPk2cdInFadumSgbV1X%2Bk0u6FAoCrr9dnLBiYp2cG6mK9R%2FjqXsOdSEqykk%2BYohIKIfily6hsoi5AaNSlMJZmInEk7Op%2FgPAAQX%2FspadeW4FpuH7foXuZBt8c3jCfulig9omwVBuDTWSur0J64FBXw8rnsN8Gm64XC0jFr3RNLS9dGhhw0DePQjnTvlmj491I2WyEwu6vSwQY6pgFYdZ5zXd7nhYbPNB2sTsHUuLZWvnn%2FX2p7O%2F6z80tC0zYHqah5kIzfbSFoyMMxKre%2FtvitNqlr3NvLlPqv0sr0togoaGcGEea89LRvCwMkaL7%2B9%2BfjZ8MLSLj8FdW2vxB1lSgm8jvqPvbCGZS2uUCifi%2FKe5JE2T7IFswROQHHUh%2ByHD4gYzadnDV%2F0mgb8BVZyFeMHqn%2B2G8zwShe13YLr28AAxRp&X-Amz-Signature=db4349d5f2d5c0b3f18a906df506cc25f65cf3297e5bd9755b82c3b0ef4a198a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSR4SBOR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG04Gvo%2F5XHrJrCO%2FO6WbfbSICmXsYyaX4Kjmf%2BS4nzBAiAHyXGVVo07yn2TtfL7FU2VFK6eiwjj%2B9ozRJFKa8IsCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMl7jnyBa4hFxsUCDpKtwD6ACuMpB1zWVjTB0npC9PyDYXByJfjELf0avhVrTyFVr735ZkvkQUWd6advB%2BTu5kDN9vXpweabZlowtYWVecVD7ZJVI1RR2%2BN3yJdbNFLhrhK%2FFsL246XaQ9dtov6Wn%2BcdtYawo3l02b%2F6PDOJlNOabT7Ll%2FkCM60OcY97Z8qfV%2BLjpgXmqbu4sdQMApIBRoijn3lF9COKvZDU5wV5PCP4aiTOdC%2BPy2sWyE55F%2F8K1nueQk%2FdTu4H8nic4cDOpKRfeo7DckNMyB71uBgIfwEduF2zi5iNhqAWcc5330ZenmyQn2cTVgKQJp22SjU%2FBjbIaB9%2B1h19Ixe8o6LSyhUVI3fGOTTIzNhhT6N4CTzghNqaoDhdBtfPXAIyH6FCPkX047ScH9I9M67Q4aQqkkohmcASvTSC1x%2F8mL9Q4jH%2FbH7v%2BrXbLMPsLPk2cdInFadumSgbV1X%2Bk0u6FAoCrr9dnLBiYp2cG6mK9R%2FjqXsOdSEqykk%2BYohIKIfily6hsoi5AaNSlMJZmInEk7Op%2FgPAAQX%2FspadeW4FpuH7foXuZBt8c3jCfulig9omwVBuDTWSur0J64FBXw8rnsN8Gm64XC0jFr3RNLS9dGhhw0DePQjnTvlmj491I2WyEwu6vSwQY6pgFYdZ5zXd7nhYbPNB2sTsHUuLZWvnn%2FX2p7O%2F6z80tC0zYHqah5kIzfbSFoyMMxKre%2FtvitNqlr3NvLlPqv0sr0togoaGcGEea89LRvCwMkaL7%2B9%2BfjZ8MLSLj8FdW2vxB1lSgm8jvqPvbCGZS2uUCifi%2FKe5JE2T7IFswROQHHUh%2ByHD4gYzadnDV%2F0mgb8BVZyFeMHqn%2B2G8zwShe13YLr28AAxRp&X-Amz-Signature=8c569684e30c659c62c639196e0a373a33f1ae6651e618604a69ffab9a6b747a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW35W6LC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGSyP%2BRWG7mRnaAiBRMsj9mpkbdfq79fnb%2BGnH11cv8QIgWB%2FyjIkXwQFxzDFx8CvrPJRwWrE02xVqV%2BxZ%2Fb%2BDtZ8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBFx%2BlasM2H65EbIXircAyVB4e6jdP0wKgAqOjt1GiWBXSIiwAPTxYRL1i0aqlvrbaCz8Q%2BpOmhvTi2DEoGhmHqOkBM46H1acO7VpoeCy%2Fyy6wQhg07sl8%2F%2BJ6XHAuguuLM08FadTuWtH9iDdOMdNivfLcfW4sUW9fauqedl9btdk9ZamOxPXGOg0WU7mFzYs5HIhyRGthX9LU7tS4xwhrCAOIep7Lmg%2FcecE55tLcsjNOYQzwO9QPZnHF43dBimTZjV2CiO1Flf0FKMXNJ6%2FPFfBNH5g9Wkz0f85CKg%2BZZMoezesH3O08iluH4OGeGHZyeriOnOrdCuW3Rc%2FR4iHAWNTCLVfgube6XoADaL%2BidXSUup2nlLbF9dAHx5ObuDsD%2BIKh0zd9X8QMJSWYU%2BkG9C1ZBJoJpuR09emZUJUOrfT3pgi2qZdnIdSWbEok61HpducFz5A747NoNg%2FS%2BW5q8UFlJFNYn%2BkSR%2Bf1EE6TnAdXTnseLgu3ygOFnU4UZ%2BuWOzY6bWPXBstfRjYTl5dnbs5ZI0mKnhhm%2BEBnQV4yeqj1iqSfn87V1rQf4iJqF%2BjkSVzcFYtwsHLFkBi7%2FNObXXz4oR6rMZ6eN1QNdje64n2EwZQlcE8S0znkX4AaWhvZ932XB%2F08ebXdplMM6r0sEGOqUBDBBMG77BxSn7T25USvxSzwZRmPu%2FI15qhYJ%2FGZm8TWLHtNmRfCjai7GdVa0xwKnOIKyHhu0n3XqLYOjzCk5vxP9787tYLwM04xdKsQFGfU7IHR0WxXhuuIAqCN5qNVXs7rSzcf1l0C5mblrXIwt%2BouwUiMJSmzf%2BSxGQAFYZoZRnWHRVTBB4FrFb85nZiOllYyjINHg96j7OenUrdgdWbabPzB%2Bc&X-Amz-Signature=7b87a20276da11798b9bae484b6177d86b5b9d8ade6bf11ac6b8b9037f80b53a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPHP6L7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSwD4H8doh%2BIuJ5GU960uyfbK7brGKm%2F%2FvYj5%2BcPJ%2F2wIgT6TD%2BJXwyFoCMsw60kKxYtNQJO2SaJxbQfzxMK7HPhUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIoF1k5hxLQAY4keeSrcAyOQfnPf7%2FRke1yfM40Z8YF25gGSnAPEvOHKxuDae8yY0zGHopj%2FfJdhIc4fOpTEh%2BrIG3GVuiN3jbHk4LX2Gq%2BviZSYxWNY1%2FNL1VnLgyw2mJKaVrUJW9zIjRpyq4C4QmzBirUZmXkxbsBGKUJ21RyVOaobBbSgILoSg1FWK3SgpA88jFU77IXKuMaHA9cZv2MKN8%2FXK3Zh61my2QUd1ZUjoIFCokEVHVbjRaud26HFpuC%2FQcyjKxh1Q36oeliU6IFOzZqVbn9hnbclPSDMA4lUeEorp%2BBQhz85iCfkXgwRzYYQGXZsuBdndhxNgEAcbSRGC1QcgpRY2DhN1PxcYV3xqH%2FgJfgMtoU9LYQLPi7NgkFnXnYdmeQUfTFdWbnILqs%2BpfGMlM3u5R31ryEj8fUVobcYGK8P1hU%2FRJdTCNoV5FY8x6Od57oNKqcqdy5Ek3vZpnM4HUxBuiaqC1nY9amCJo8HT8%2BOL3fF3eay%2FLa3uFNxlBm6HX1G6h%2Fb1QjcIWA1F1Zt44bOM6oBLBjaPVe0HZabuLGi1YhQwtK%2FC1ctLKL0k4T6D1rUcOv8SWXHtorEEe2HbRVkxsrVyGVuTwf6%2F5z76BhpJ5ta%2BQHFSvwBVNTQCE2xjWtS9l0iMO%2Bq0sEGOqUBjlBVkotg38Qf8MxPqKdLn%2FUlbrLq%2FmbKgsUfPdhom7e0mkAYXB%2BlEYxFh033yRUW1ao4zl780lxOG6tdFaiRr5SY6CC%2FxAue01JOiMdKAmL985WsF02tQ8LlqC9cvFy%2B05GDm8MMzblei2Ex06pSKcYN5tOylW9b3V63RsIYQrWLbGNbrw%2FGMjcjHJ7y04znjTBjzCz7LehdSn5gjWKqmpWL34hL&X-Amz-Signature=b2b1fdf4e3547d8ecff30061a0a1a1769b8267545e73c3b4b9519258770345c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSR4SBOR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG04Gvo%2F5XHrJrCO%2FO6WbfbSICmXsYyaX4Kjmf%2BS4nzBAiAHyXGVVo07yn2TtfL7FU2VFK6eiwjj%2B9ozRJFKa8IsCCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMl7jnyBa4hFxsUCDpKtwD6ACuMpB1zWVjTB0npC9PyDYXByJfjELf0avhVrTyFVr735ZkvkQUWd6advB%2BTu5kDN9vXpweabZlowtYWVecVD7ZJVI1RR2%2BN3yJdbNFLhrhK%2FFsL246XaQ9dtov6Wn%2BcdtYawo3l02b%2F6PDOJlNOabT7Ll%2FkCM60OcY97Z8qfV%2BLjpgXmqbu4sdQMApIBRoijn3lF9COKvZDU5wV5PCP4aiTOdC%2BPy2sWyE55F%2F8K1nueQk%2FdTu4H8nic4cDOpKRfeo7DckNMyB71uBgIfwEduF2zi5iNhqAWcc5330ZenmyQn2cTVgKQJp22SjU%2FBjbIaB9%2B1h19Ixe8o6LSyhUVI3fGOTTIzNhhT6N4CTzghNqaoDhdBtfPXAIyH6FCPkX047ScH9I9M67Q4aQqkkohmcASvTSC1x%2F8mL9Q4jH%2FbH7v%2BrXbLMPsLPk2cdInFadumSgbV1X%2Bk0u6FAoCrr9dnLBiYp2cG6mK9R%2FjqXsOdSEqykk%2BYohIKIfily6hsoi5AaNSlMJZmInEk7Op%2FgPAAQX%2FspadeW4FpuH7foXuZBt8c3jCfulig9omwVBuDTWSur0J64FBXw8rnsN8Gm64XC0jFr3RNLS9dGhhw0DePQjnTvlmj491I2WyEwu6vSwQY6pgFYdZ5zXd7nhYbPNB2sTsHUuLZWvnn%2FX2p7O%2F6z80tC0zYHqah5kIzfbSFoyMMxKre%2FtvitNqlr3NvLlPqv0sr0togoaGcGEea89LRvCwMkaL7%2B9%2BfjZ8MLSLj8FdW2vxB1lSgm8jvqPvbCGZS2uUCifi%2FKe5JE2T7IFswROQHHUh%2ByHD4gYzadnDV%2F0mgb8BVZyFeMHqn%2B2G8zwShe13YLr28AAxRp&X-Amz-Signature=e6aabf0c217b862d99e83b90a778dab5b5041eec68fb279dcce1110fe121aec2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
