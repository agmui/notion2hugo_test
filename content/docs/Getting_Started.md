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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BLASP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGS507P50jvrs67wDiPxAeBctA%2B6EfzERAkGSNpp6icmAiAXh7FJrcPKLUuSDsU3QxxBEDrloaLoNVCvNmgKwcdbKCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxB%2F2SvahNpO5WQ5YKtwDrtRaO6bzyEdXm3r%2F%2BNNvd55HWwJ%2FRsVqqDPSig3KsUmNXkw0Saww8M%2BeFVK52TuLUgTtOo3rFfPUS%2FNS90n2ZKm8KY9aodqzJjwjwBQOW8wGF%2BIcrgklgkokaH7TrYuedvWW1SBzQ5q9CCXl0kG5lzg4UxiKBFVFd1ZeHVJyDMOfYZ%2BHLo4au7UwCAemogXYZHySKHgV4OC9cgxgMG6AsE5XU6ob3gr5xWDbtbo1JwvFeBruCWb7l1DL9UkbwPGNAn3wRXQt8dTTfhrZlHI1ujRo915OY38TGFIXFbSp3VR1GOJJJYeJv29O0FkU75365CYQkCESmYK8LI5kNtI8HA0JuGEzCB1p7hiw%2BBvzp8O27VCa4GvkYgnniwqi1dF2Q0s%2FNZ21TmMgROJ9elev%2BVJaxQO6v5cnIhs2A6Yumrj7mMwOrRopvQne%2FXlYYZkX205yu63rQindfbumTZ%2BgwhhsCQ2x88vYNW%2BBSJmWh5ZKdE5un3u5lmPY%2BKCyIU%2Bg%2F8iRzNseyWZikQhUMJVXk1yV0fupK81Wn1Adll6T47Od%2FrhEOoiw2BVulZeGPxR7YoDp3%2FQkDxEWb%2FdITNyIOUSIcndvm%2Ft%2FB%2B1QtmUYMqcTL5Bh3AIaSGPMS%2Fsw9vTJwAY6pgHsM2NQ85HBVVgUQI%2BYUHU%2F9o1EClfVUOBdFpWqZVysNmoc8gocCQc94epqHLm%2FunlZ9VL6OxnsKsuUNAzjJ8E98HqYAkM8LSr7o8zEn%2F7lC7Yq9P2Oeiwu8iNjkp74SQ8GRi2Yl3fOcz42VoVDigA9HdPRFyEWiHJg9fSCPZ8kley4SOZFPaQUiyeVD0Ilj47KihC7KvamrLe4wWbZw0QlD91%2F%2BR4v&X-Amz-Signature=1f8ea928e7f4980ec87cd3c0dcf438d5306a93c8d9754484901dc7bdac248a43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BLASP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGS507P50jvrs67wDiPxAeBctA%2B6EfzERAkGSNpp6icmAiAXh7FJrcPKLUuSDsU3QxxBEDrloaLoNVCvNmgKwcdbKCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxB%2F2SvahNpO5WQ5YKtwDrtRaO6bzyEdXm3r%2F%2BNNvd55HWwJ%2FRsVqqDPSig3KsUmNXkw0Saww8M%2BeFVK52TuLUgTtOo3rFfPUS%2FNS90n2ZKm8KY9aodqzJjwjwBQOW8wGF%2BIcrgklgkokaH7TrYuedvWW1SBzQ5q9CCXl0kG5lzg4UxiKBFVFd1ZeHVJyDMOfYZ%2BHLo4au7UwCAemogXYZHySKHgV4OC9cgxgMG6AsE5XU6ob3gr5xWDbtbo1JwvFeBruCWb7l1DL9UkbwPGNAn3wRXQt8dTTfhrZlHI1ujRo915OY38TGFIXFbSp3VR1GOJJJYeJv29O0FkU75365CYQkCESmYK8LI5kNtI8HA0JuGEzCB1p7hiw%2BBvzp8O27VCa4GvkYgnniwqi1dF2Q0s%2FNZ21TmMgROJ9elev%2BVJaxQO6v5cnIhs2A6Yumrj7mMwOrRopvQne%2FXlYYZkX205yu63rQindfbumTZ%2BgwhhsCQ2x88vYNW%2BBSJmWh5ZKdE5un3u5lmPY%2BKCyIU%2Bg%2F8iRzNseyWZikQhUMJVXk1yV0fupK81Wn1Adll6T47Od%2FrhEOoiw2BVulZeGPxR7YoDp3%2FQkDxEWb%2FdITNyIOUSIcndvm%2Ft%2FB%2B1QtmUYMqcTL5Bh3AIaSGPMS%2Fsw9vTJwAY6pgHsM2NQ85HBVVgUQI%2BYUHU%2F9o1EClfVUOBdFpWqZVysNmoc8gocCQc94epqHLm%2FunlZ9VL6OxnsKsuUNAzjJ8E98HqYAkM8LSr7o8zEn%2F7lC7Yq9P2Oeiwu8iNjkp74SQ8GRi2Yl3fOcz42VoVDigA9HdPRFyEWiHJg9fSCPZ8kley4SOZFPaQUiyeVD0Ilj47KihC7KvamrLe4wWbZw0QlD91%2F%2BR4v&X-Amz-Signature=7d4fc8b908c2a10e1ace1292aff85e772687b27e28dd4e3ef1ee27bd17452b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BLASP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGS507P50jvrs67wDiPxAeBctA%2B6EfzERAkGSNpp6icmAiAXh7FJrcPKLUuSDsU3QxxBEDrloaLoNVCvNmgKwcdbKCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxB%2F2SvahNpO5WQ5YKtwDrtRaO6bzyEdXm3r%2F%2BNNvd55HWwJ%2FRsVqqDPSig3KsUmNXkw0Saww8M%2BeFVK52TuLUgTtOo3rFfPUS%2FNS90n2ZKm8KY9aodqzJjwjwBQOW8wGF%2BIcrgklgkokaH7TrYuedvWW1SBzQ5q9CCXl0kG5lzg4UxiKBFVFd1ZeHVJyDMOfYZ%2BHLo4au7UwCAemogXYZHySKHgV4OC9cgxgMG6AsE5XU6ob3gr5xWDbtbo1JwvFeBruCWb7l1DL9UkbwPGNAn3wRXQt8dTTfhrZlHI1ujRo915OY38TGFIXFbSp3VR1GOJJJYeJv29O0FkU75365CYQkCESmYK8LI5kNtI8HA0JuGEzCB1p7hiw%2BBvzp8O27VCa4GvkYgnniwqi1dF2Q0s%2FNZ21TmMgROJ9elev%2BVJaxQO6v5cnIhs2A6Yumrj7mMwOrRopvQne%2FXlYYZkX205yu63rQindfbumTZ%2BgwhhsCQ2x88vYNW%2BBSJmWh5ZKdE5un3u5lmPY%2BKCyIU%2Bg%2F8iRzNseyWZikQhUMJVXk1yV0fupK81Wn1Adll6T47Od%2FrhEOoiw2BVulZeGPxR7YoDp3%2FQkDxEWb%2FdITNyIOUSIcndvm%2Ft%2FB%2B1QtmUYMqcTL5Bh3AIaSGPMS%2Fsw9vTJwAY6pgHsM2NQ85HBVVgUQI%2BYUHU%2F9o1EClfVUOBdFpWqZVysNmoc8gocCQc94epqHLm%2FunlZ9VL6OxnsKsuUNAzjJ8E98HqYAkM8LSr7o8zEn%2F7lC7Yq9P2Oeiwu8iNjkp74SQ8GRi2Yl3fOcz42VoVDigA9HdPRFyEWiHJg9fSCPZ8kley4SOZFPaQUiyeVD0Ilj47KihC7KvamrLe4wWbZw0QlD91%2F%2BR4v&X-Amz-Signature=e5709ecff79e708b6a90692ed97149df08351d85675bda9a3b42efb9e6829d78&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDZO4JWB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD%2FOSjsUjr5o3refoykarT6sDxpkpKvlV7cEOT%2F9dTv9wIgJyw%2B49COiT5axc2LONZL4Q3Iu6epQfxYwn0Qhy1u5zYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWh4073Boq59KH6tSrcA9mu78xP81PeV0rVMW0eOuhyi3CujDeJwMi4KUsaljN7%2BY22RloF%2FhIXXW01wMo788HXLhD6X1MtXS0VRZTGrrthtskT1dD9xyXQg0aTDjbSxEpt5GMUgKoBoW0BATofmtrtejsFPyhAGrfwMN8OYe1MqbVcdVv2Tfy75jUT01%2FRs0jBjY%2FfGo43ICoW7jHpAOgn2sNlaQJZwJcgqkB9ewFg4gk0ZRjaKqlfsotL%2FKzOZjNw83pYCMDqUQRoohRPEe3Gwz%2BDrcxv%2Bg4xvBxzoU%2B%2Bc9F7TudRMcTpAWrHombvdqpmhJOTY3Lqkrw8eq3CRh3zslkhmic6K6asPpahSz7fylc42xqDcXywccyASW0Er2xpSsmWRQNwARdBHdXC490LS%2BxzNHwQkZgYuSVU%2BhB9kIL665xyt0bH09OAQYTRWReqO5Ru%2B2KzXtQY9aDc27aFhAHnEfz3lV2kwh8Kn%2F73Ky4Ixv2Dab0VsMmGCzRSB0jVHeSaRI3c2f6NTjbA11EVeixDEOM6s0mwDezd0OozfhZ2xmKy9JdU9DxIzYnKbXHQ3M8o17JdI0xk8sUBxnfiJRDBanAoJHe5YQ3UZxfwdVhVh%2BhARum2aArO6kxsOqsP%2Bhruqu59H6SYMN%2F0ycAGOqUBlzttRtgeKWPptGddQ50NNz5O9ytqfJMQUqyxOjv%2FmFBJS9i78LQ%2FdjcQQq5veiWx79%2BBHFH9HGJrYj6oeOvN7rLcNf3MG4u1lBZa1GHUlq2iw2RkaaJt4x%2Blrr%2Bszjp6XVzQHyZV2Sbfcto9ezLO%2BC4yzTdKjsUYGkgAzTCmv51VtSGWZs%2BH%2BIgtR0qSikSK3K3fdEyOTjAqmwJcgCDqDw83S2ni&X-Amz-Signature=1ab104f99b28dff010799c367a1d5f5e37db6fbdcc2eaf2acfd2749a9dc5a034&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUZWGDI2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIQCKZIUA2A3mSKji2s4pEKGQHaHysV10405gJL%2BZGEND5gIfeYwvH%2Fb7de0AIljbin1ICmbP9Y6IBDTo5f6n20a2viqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJtqTatJBzcfmVZOKtwDcnm%2BTZh2ZgLrkIePBAh7vxLETS%2FfHLR2E1kG4ef3VviVZt7wipxLXwlA0hTRdnbHqzBxzWIFGNybEtRqqqs9JAk6n41%2FM9k8SL%2BEFnlReScnuKDv3Vs4pUxPZoqTbX1BuEBHwYIFPsRmU05eFJps8REH7aTnKbqmlMCAScqdQIRqj2KsCAuXhfnu1PVWU4nCNpppPxcPGm%2FZZFiEmqX8CPD3ewAJIIvzSyfCUNOjhCmQNzBRN2lYAPVszT5jei92nBZ6bz82yZB0E1T2zmL%2B4jbYJxGUkB61wFKID%2FhvuTQKGjw1e8olO73hCCtWZnfUGvJ3mlpZkmp5lu%2F5xpDzYos%2FiESJOdDlPUURV0xxb9PpsP9jaENnA9gUmEBDvk6qbhNOFbk4Uy%2BwvhXHCljY%2BSHYXz%2FfkLvXVu0yMopHWBousjl6z%2F35pzhtP7a%2BqjwIstp58w%2F3zZH%2B60Rv%2FF7x7RuYLinppMVMVEtD1taLbWPHANVV7aZHw65xs9lOgiHZ7YZFbz2YipnMHSB3Ip8RXK9hiChmv%2FzIIbzrw%2FR5go%2FN1Iqa%2FcuxJ63AAzy6lZi8KoxZlqX4%2Fdqb5eb5%2F7paef8x46IXpDWkYpeDrNB6EJr%2FmLVog%2FWlAFHCj9AwkfXJwAY6pgGeIx%2FRTCgS2wiv52cVZZ4A9mvlx3DAfGL66r0ziL8xu9nP%2BBTt39K%2Fl05sahD0w2ZVpQF4FxxnbIhnaxnYUxbZrOe8N2p002K73SY%2BD%2BZQ8HP9kamP1MHeqAc%2FEsM9aCLD9GCH6EpJVycACx7VCCzwWhKNG5Ko3EAcUuCfopo9w8ApVIhw%2BtChq%2BZRQ2y3m77Io%2Fs8TJpdchXl5bAdevRMXfF6ZFI2&X-Amz-Signature=48fc5d47483679560d297400caa4fe1ffe729e7ff69a4a079990b0582d11c712&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47BLASP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGS507P50jvrs67wDiPxAeBctA%2B6EfzERAkGSNpp6icmAiAXh7FJrcPKLUuSDsU3QxxBEDrloaLoNVCvNmgKwcdbKCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxB%2F2SvahNpO5WQ5YKtwDrtRaO6bzyEdXm3r%2F%2BNNvd55HWwJ%2FRsVqqDPSig3KsUmNXkw0Saww8M%2BeFVK52TuLUgTtOo3rFfPUS%2FNS90n2ZKm8KY9aodqzJjwjwBQOW8wGF%2BIcrgklgkokaH7TrYuedvWW1SBzQ5q9CCXl0kG5lzg4UxiKBFVFd1ZeHVJyDMOfYZ%2BHLo4au7UwCAemogXYZHySKHgV4OC9cgxgMG6AsE5XU6ob3gr5xWDbtbo1JwvFeBruCWb7l1DL9UkbwPGNAn3wRXQt8dTTfhrZlHI1ujRo915OY38TGFIXFbSp3VR1GOJJJYeJv29O0FkU75365CYQkCESmYK8LI5kNtI8HA0JuGEzCB1p7hiw%2BBvzp8O27VCa4GvkYgnniwqi1dF2Q0s%2FNZ21TmMgROJ9elev%2BVJaxQO6v5cnIhs2A6Yumrj7mMwOrRopvQne%2FXlYYZkX205yu63rQindfbumTZ%2BgwhhsCQ2x88vYNW%2BBSJmWh5ZKdE5un3u5lmPY%2BKCyIU%2Bg%2F8iRzNseyWZikQhUMJVXk1yV0fupK81Wn1Adll6T47Od%2FrhEOoiw2BVulZeGPxR7YoDp3%2FQkDxEWb%2FdITNyIOUSIcndvm%2Ft%2FB%2B1QtmUYMqcTL5Bh3AIaSGPMS%2Fsw9vTJwAY6pgHsM2NQ85HBVVgUQI%2BYUHU%2F9o1EClfVUOBdFpWqZVysNmoc8gocCQc94epqHLm%2FunlZ9VL6OxnsKsuUNAzjJ8E98HqYAkM8LSr7o8zEn%2F7lC7Yq9P2Oeiwu8iNjkp74SQ8GRi2Yl3fOcz42VoVDigA9HdPRFyEWiHJg9fSCPZ8kley4SOZFPaQUiyeVD0Ilj47KihC7KvamrLe4wWbZw0QlD91%2F%2BR4v&X-Amz-Signature=3a2f7fd1cd8372d0ef18930f332a6a244809752ee3a7b17ffdbadbdac3b020f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
