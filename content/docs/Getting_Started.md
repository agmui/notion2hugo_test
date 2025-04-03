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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QGOWI4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt1Np2FPkMfT0Weg419nVG3%2B9r7rg1H4E%2BrAdiTvTlaAiAwD6opqpVgrwwVJy22Qi4NXrzruqxshdOoWEZnzWIZmCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIxeBT%2BjVzyuHb4f3KtwDXtSwIlu3S0CEoTJoU%2B4ywsG%2BA3pzt6zfeAfZmD2WXYKzsAhGCCOXTbK9WY%2Bp%2BIrXO9xROyFhB888t%2B99QS5yJf2fMlB8%2FiiNG7ROxkpP5BklaJeBQCbSOZIy%2FVgM6AlCAruGiT4FCd7ovOZOsUqqOc1AYt8ps1o9chXolMOViKwEBEj5P6Lq%2BFJ3TV%2Bi1ElK4r2BQ7qPtX8bt4g3eU59qhiPN74rvY8A0hqQ2LwiUOYVux0jl6OP%2BvxJtmdamDltUMu2CjfIgy6OKs%2B5kCpmJnoy8W32HbbQZAIzk%2FSTLeqyYKjUJllQmoXK%2FfOuL9LQYIxAfgVkyFwekNXSqfCexEgqktt8%2BbDwdI6Z2uWadJ2XcNoKV1vcLWtZEj2ICjahrfhYGfcpt4o%2FT%2BbZuw%2BJj2K%2BGCRTBvyPEtUEpml0d8gEfl8dC0bJJzoi%2BrCSpbhd8e7nG3K6AR3ZtRctIjrrwPVBk4oxxclOKksNpRHIPP%2FxfR8iTfdj4diwEege9zO8lDBWfydr%2FQk2%2B7RIyQUENc%2FEmUBS3nOBozw78ohipSOVGYU8yVQ%2FEbRhzk2%2BVSf6H0G7%2BKQW5o%2BtSvz95Mdj3Rwe6BesswUavYJRZHC2niIDPjn8nUgLbRAGlS0wwP25vwY6pgHzaliMGIxgD%2B95tOFuTL8sxDYiulaZDKzlVb5oHAoIfw%2B0HOHsozLCLxQ7kHO%2FGVFQaiA88KxGARQrXRji7YpR0l8Zn8i1TCbqUuUn6CZ0%2B3VD%2BoY4ncrYdjDWZaEF4hbBgJlcnfPtOqUf2hfprGJA%2BpknLqU%2Bgv5RZLO%2BEdAu7d%2FOW%2BTSdjVyxfQ1PyBmRYLKNKDYWeN1DqJfSAN6hFA0WyA3Jtci&X-Amz-Signature=8e957e797f6dc9baafdf67311cd0c468d45c91efae2052eb2b239504d5c4ae72&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QGOWI4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt1Np2FPkMfT0Weg419nVG3%2B9r7rg1H4E%2BrAdiTvTlaAiAwD6opqpVgrwwVJy22Qi4NXrzruqxshdOoWEZnzWIZmCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIxeBT%2BjVzyuHb4f3KtwDXtSwIlu3S0CEoTJoU%2B4ywsG%2BA3pzt6zfeAfZmD2WXYKzsAhGCCOXTbK9WY%2Bp%2BIrXO9xROyFhB888t%2B99QS5yJf2fMlB8%2FiiNG7ROxkpP5BklaJeBQCbSOZIy%2FVgM6AlCAruGiT4FCd7ovOZOsUqqOc1AYt8ps1o9chXolMOViKwEBEj5P6Lq%2BFJ3TV%2Bi1ElK4r2BQ7qPtX8bt4g3eU59qhiPN74rvY8A0hqQ2LwiUOYVux0jl6OP%2BvxJtmdamDltUMu2CjfIgy6OKs%2B5kCpmJnoy8W32HbbQZAIzk%2FSTLeqyYKjUJllQmoXK%2FfOuL9LQYIxAfgVkyFwekNXSqfCexEgqktt8%2BbDwdI6Z2uWadJ2XcNoKV1vcLWtZEj2ICjahrfhYGfcpt4o%2FT%2BbZuw%2BJj2K%2BGCRTBvyPEtUEpml0d8gEfl8dC0bJJzoi%2BrCSpbhd8e7nG3K6AR3ZtRctIjrrwPVBk4oxxclOKksNpRHIPP%2FxfR8iTfdj4diwEege9zO8lDBWfydr%2FQk2%2B7RIyQUENc%2FEmUBS3nOBozw78ohipSOVGYU8yVQ%2FEbRhzk2%2BVSf6H0G7%2BKQW5o%2BtSvz95Mdj3Rwe6BesswUavYJRZHC2niIDPjn8nUgLbRAGlS0wwP25vwY6pgHzaliMGIxgD%2B95tOFuTL8sxDYiulaZDKzlVb5oHAoIfw%2B0HOHsozLCLxQ7kHO%2FGVFQaiA88KxGARQrXRji7YpR0l8Zn8i1TCbqUuUn6CZ0%2B3VD%2BoY4ncrYdjDWZaEF4hbBgJlcnfPtOqUf2hfprGJA%2BpknLqU%2Bgv5RZLO%2BEdAu7d%2FOW%2BTSdjVyxfQ1PyBmRYLKNKDYWeN1DqJfSAN6hFA0WyA3Jtci&X-Amz-Signature=f0c200ab93866d81bdcbdfcbf4a3de4bb78d0331fb73dce8be5b0b52565ae6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR427MLK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5hrF9GHFBJ5bbXAHFRiaqP17ybstRpl9jOD6DetaXhAiEA7D4E4NInPp%2BLxm3f7yQPhTpFM%2FjUCDD1ykW4LkqkgQAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVP%2FojlcG7Sw8cTQCrcA96Tzf8YjlsxiZxQFI0jei0pnIOA%2Bob%2BPdsi5QDIo4yO5VtPOEZMhsVc%2FM7kZet46a4LsEz6id0VoJDcLrDtewkiNX%2FdZ2LWdc2NOxs05abshKLWjM9jqh%2FkGNDDpw6hH2ctRZRY3zLaVU3%2FNssG6HJGA73Vj97m3acPeKkzORgshVfT4vTRt6n1vIyI4UrQEka%2F4rZeEOUYvT5IZJnazq8yhX0CWklmoSsM4fq9DJI7MkcNIW9cOTXo8Q%2FLzw98EaVjH3rIn6IJ0Can3oNGLecaZj3uVyxOJlAutmMJLsNuxTM0MePwzj%2F5VRyv8Xk1%2FmuWowM20PC3fOKRk6oEL5jMfqoEdDx%2Bh0wn9aVHyk1qGEDMmQSXi0TRly2QPTtaoWJhzwnDpTaXhE%2B74GrgpcKSDMItgT6HX6wCNXTjuXyzMd%2FI75zjzZfPfpiDsyMU80KROFKr0P5hqwAW7i%2FP4Zi92vONo%2FYg1V87NzPHAQrchteYeX6uoJSc8w%2FXI8uEviNg3S%2BvCWIwN4HJ3nVaDkjeJ3%2FD4SWt8sp7%2Bdhv1FNA7UZU%2FMDBD7gHTa9Prgb22fFQgmq82SJPiX7zBOOuBtENh7wPnGRM0PvncQ5fJUBOjdMxw3xBIP8ivXz8MMX9ub8GOqUBEU7cxbQzmNe50RNlGQ8htvuKWi8Jp66NIzFPk215%2BZuYyURYurJtoNojgSGzS3kqkhmw6vRQrOL%2FFwC7YMO5usaCVzvhZqRPchcUVGeGroDSKFwBxaoboPmW5dIxa1Jx%2BvNOjXbJXDpaKErH0BxHFDg8YCCHPJUpsWLIKfscGNHl0tmOFa%2FcQfIICX%2F8SX4rxhSUaWUkiE0JBzr4AmuUS%2FfxNw76&X-Amz-Signature=a5fc6c1765e356f665bd5311fecbd5e8704312bbf7b5d819e6ec9405ff7714e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2AH24E%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmXbFHIuJuMN64OGb3uPxxEEt4FSxgX%2FBRAxECZVKjqAIhAM4zxW5X7ZVhKNGSD8miVWhTW%2F7lhGs2J0F8kwlM19eBKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl%2FLXJaNrqKNHxbEUq3AMugwCs6XI4wG380w7ymDiF6zPL%2Fq2vsy4nxzTl%2Bb6dl%2BBM0ux8BprqpWlHqAv0JS3KGAWoBDTky9jMVQG4myvYG1e2WETNFstUiM284TE%2BTyAg8IoL7p8uujx50ZtgZ6gKa0tBetLnsTZmGNPo7V4SaHqjdxUODrCT%2FSt0Uo6%2F5ccOhgtZKJvDQn5NsRzK8GFLdNil3P3pwcOwjdAO5vTYNdlcVltP8y3E7GWzGmewv57O1fSbQUSYH8i%2BJp5cd7MgYxDPftx8ZefTxpIg1oSDBDBSK4M%2FBpcKySu8R%2FiZei4Pbf6TNKig%2BC9f9LmcG2GIEnxocIKcO0iXdKqHFH1BejRezONNMZlfNDh5UCiQ9aTu4wdRN%2FUtDr25S6rdMi80Emi6x0UUp9XL2V7oMWb%2Fnp7UxL%2BhXnph0CQv8sJ%2FC%2B0lzoQDCDQLppzZORY%2BT%2FeXuTmEKaA1KhS%2BBtoiV0qLvVTTZsgfwXub%2FEu8M21zgDJspgorRVDaZJREmVUTs2CqxsXBIWqgeUywMcYl46SYna5bK6ugrNJSxIbjgu8jEVji1iX9GJQDoZt2OKdWfnN0gxZZQyKW2uJx9lUK785%2Fo6TUwNdSgumY%2BbthWZIUKXRInoEZ5jQVHBjOijDF%2Fbm%2FBjqkAVGvyIYekXh7Z60SlYnWfhReEFsFdWgTRr2gjcINGsy%2FfG8PpKy2CZAD%2Fll%2FN3UPmUbIfgJj%2BC4lPtdDs3Bd03b6u1aLURRF%2FcfE5Bl1UrCebvRm0LT4TuTgxJ10xSKXPaOgLGiWAhXtnT76AXoYttUPtcdfz%2FKH%2FuBUvWYlcN%2FV0Qp07Je5LjlZYvlhFhqte0jQMQ90YnV7337EhcqdttJGUnEd&X-Amz-Signature=d4559f68b1009c64087e4caa615d0e193c7ce2a6d2b4e2d80f6a164535a13190&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QGOWI4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt1Np2FPkMfT0Weg419nVG3%2B9r7rg1H4E%2BrAdiTvTlaAiAwD6opqpVgrwwVJy22Qi4NXrzruqxshdOoWEZnzWIZmCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIxeBT%2BjVzyuHb4f3KtwDXtSwIlu3S0CEoTJoU%2B4ywsG%2BA3pzt6zfeAfZmD2WXYKzsAhGCCOXTbK9WY%2Bp%2BIrXO9xROyFhB888t%2B99QS5yJf2fMlB8%2FiiNG7ROxkpP5BklaJeBQCbSOZIy%2FVgM6AlCAruGiT4FCd7ovOZOsUqqOc1AYt8ps1o9chXolMOViKwEBEj5P6Lq%2BFJ3TV%2Bi1ElK4r2BQ7qPtX8bt4g3eU59qhiPN74rvY8A0hqQ2LwiUOYVux0jl6OP%2BvxJtmdamDltUMu2CjfIgy6OKs%2B5kCpmJnoy8W32HbbQZAIzk%2FSTLeqyYKjUJllQmoXK%2FfOuL9LQYIxAfgVkyFwekNXSqfCexEgqktt8%2BbDwdI6Z2uWadJ2XcNoKV1vcLWtZEj2ICjahrfhYGfcpt4o%2FT%2BbZuw%2BJj2K%2BGCRTBvyPEtUEpml0d8gEfl8dC0bJJzoi%2BrCSpbhd8e7nG3K6AR3ZtRctIjrrwPVBk4oxxclOKksNpRHIPP%2FxfR8iTfdj4diwEege9zO8lDBWfydr%2FQk2%2B7RIyQUENc%2FEmUBS3nOBozw78ohipSOVGYU8yVQ%2FEbRhzk2%2BVSf6H0G7%2BKQW5o%2BtSvz95Mdj3Rwe6BesswUavYJRZHC2niIDPjn8nUgLbRAGlS0wwP25vwY6pgHzaliMGIxgD%2B95tOFuTL8sxDYiulaZDKzlVb5oHAoIfw%2B0HOHsozLCLxQ7kHO%2FGVFQaiA88KxGARQrXRji7YpR0l8Zn8i1TCbqUuUn6CZ0%2B3VD%2BoY4ncrYdjDWZaEF4hbBgJlcnfPtOqUf2hfprGJA%2BpknLqU%2Bgv5RZLO%2BEdAu7d%2FOW%2BTSdjVyxfQ1PyBmRYLKNKDYWeN1DqJfSAN6hFA0WyA3Jtci&X-Amz-Signature=22268eb3bebbf75fb331039438a0a0c91862eb81d9676946cf781263359719e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
