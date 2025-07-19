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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBVPG2F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo4Z6woeYSlXdBSv5WbQsUHBK9Nj9c72m7FyM4mAOEvAIhAKgkoK3lKEKsX81xAKFHNXxCDUXZ%2F%2FR%2BNwyUxi7HY%2FbPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscWH3TaKTiI2jAbgq3AOJo0FYFLu%2F%2Bqv8FwwiDvQ%2FIF620XxNrXSpLh0Ekz3EZG4xPXeEMUwLpls%2BLDlJHlx3Y920M3xne7VCBaT0v2D7xGJkJXZkR8iHvIFKnpByAZjsXYS%2BzF0YIIi7FVzVVnyxnhkMfTBo52JqE%2FSR%2FiPiVwqONHJBmD0mHTSp9xTJnYULXmas699IhN7r7iVCJfd4EAzNdF%2FNxPRq%2FrYzLHMRsmEY%2FU4F7KwaTlEIXle6uG6ogWe3nlZfJMlWKzx6xSt4ZAXi2w9Vs0H8TrfMioYjGjKCn%2FpfqL01PZKNMp3AhuDytHVaaSw%2Fxnr0soRrElQmpOnRILpwKt6Y3cbeCc5m%2FUM2fkznJ59xrASpz7r0OE2x%2BDcPTOS6wqzU3D96LmM%2Ft2IVJ2fZjT%2BjA0nWIfk8zLbJm5PPJ9YVbiw3JhDNaikEZi8Oa1O1lRwdM25O%2BTjI9tXbsI2apfZCtqNg1fDQU45qpxOd2KvYb48PIQxcbVYHSIhxw5QMU0hpse6kjQrmnr0jrBAn8kNN9SmCt0IgNheC7fOZfcfc%2B9U20xiSRJFnCIvA4gbWtnosfnjR8CHP3A3uZSQqEC5blKCS9IgOiKftQzJ9AKQPfpmf5G46trkjZKQuU00YOOXBrTCmxezDBjqkAVi0VMoBiFgNQIRy6TPZoBIJelprMpov7YcL9O3UeSgtoyGpnsf%2BIpe4uNv%2FXZjNXlOeedfmBPRmRafR8VAYgkCFmnEkfFmmhTD7%2BSGyHRsSWN0wNmQoXF0mj4uuoe4oX9bKscLRBChJMePOLNaeNchXLB4NCisKjVsD4w2RKM%2FaI2nleDdsXo8v6CmlP%2F0jISJM7P2dy7MVo0N9PmpX4wqtRg5m&X-Amz-Signature=0edb036e1ba9f9e764441d0fa1226c05131085f68abe3ae6b4425c467873b3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBVPG2F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo4Z6woeYSlXdBSv5WbQsUHBK9Nj9c72m7FyM4mAOEvAIhAKgkoK3lKEKsX81xAKFHNXxCDUXZ%2F%2FR%2BNwyUxi7HY%2FbPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscWH3TaKTiI2jAbgq3AOJo0FYFLu%2F%2Bqv8FwwiDvQ%2FIF620XxNrXSpLh0Ekz3EZG4xPXeEMUwLpls%2BLDlJHlx3Y920M3xne7VCBaT0v2D7xGJkJXZkR8iHvIFKnpByAZjsXYS%2BzF0YIIi7FVzVVnyxnhkMfTBo52JqE%2FSR%2FiPiVwqONHJBmD0mHTSp9xTJnYULXmas699IhN7r7iVCJfd4EAzNdF%2FNxPRq%2FrYzLHMRsmEY%2FU4F7KwaTlEIXle6uG6ogWe3nlZfJMlWKzx6xSt4ZAXi2w9Vs0H8TrfMioYjGjKCn%2FpfqL01PZKNMp3AhuDytHVaaSw%2Fxnr0soRrElQmpOnRILpwKt6Y3cbeCc5m%2FUM2fkznJ59xrASpz7r0OE2x%2BDcPTOS6wqzU3D96LmM%2Ft2IVJ2fZjT%2BjA0nWIfk8zLbJm5PPJ9YVbiw3JhDNaikEZi8Oa1O1lRwdM25O%2BTjI9tXbsI2apfZCtqNg1fDQU45qpxOd2KvYb48PIQxcbVYHSIhxw5QMU0hpse6kjQrmnr0jrBAn8kNN9SmCt0IgNheC7fOZfcfc%2B9U20xiSRJFnCIvA4gbWtnosfnjR8CHP3A3uZSQqEC5blKCS9IgOiKftQzJ9AKQPfpmf5G46trkjZKQuU00YOOXBrTCmxezDBjqkAVi0VMoBiFgNQIRy6TPZoBIJelprMpov7YcL9O3UeSgtoyGpnsf%2BIpe4uNv%2FXZjNXlOeedfmBPRmRafR8VAYgkCFmnEkfFmmhTD7%2BSGyHRsSWN0wNmQoXF0mj4uuoe4oX9bKscLRBChJMePOLNaeNchXLB4NCisKjVsD4w2RKM%2FaI2nleDdsXo8v6CmlP%2F0jISJM7P2dy7MVo0N9PmpX4wqtRg5m&X-Amz-Signature=ad3216cf6f3c7056f0461ea1a2a17a7dbb1923d23d42e0d2fd8b9ad0fab75004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBVPG2F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo4Z6woeYSlXdBSv5WbQsUHBK9Nj9c72m7FyM4mAOEvAIhAKgkoK3lKEKsX81xAKFHNXxCDUXZ%2F%2FR%2BNwyUxi7HY%2FbPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscWH3TaKTiI2jAbgq3AOJo0FYFLu%2F%2Bqv8FwwiDvQ%2FIF620XxNrXSpLh0Ekz3EZG4xPXeEMUwLpls%2BLDlJHlx3Y920M3xne7VCBaT0v2D7xGJkJXZkR8iHvIFKnpByAZjsXYS%2BzF0YIIi7FVzVVnyxnhkMfTBo52JqE%2FSR%2FiPiVwqONHJBmD0mHTSp9xTJnYULXmas699IhN7r7iVCJfd4EAzNdF%2FNxPRq%2FrYzLHMRsmEY%2FU4F7KwaTlEIXle6uG6ogWe3nlZfJMlWKzx6xSt4ZAXi2w9Vs0H8TrfMioYjGjKCn%2FpfqL01PZKNMp3AhuDytHVaaSw%2Fxnr0soRrElQmpOnRILpwKt6Y3cbeCc5m%2FUM2fkznJ59xrASpz7r0OE2x%2BDcPTOS6wqzU3D96LmM%2Ft2IVJ2fZjT%2BjA0nWIfk8zLbJm5PPJ9YVbiw3JhDNaikEZi8Oa1O1lRwdM25O%2BTjI9tXbsI2apfZCtqNg1fDQU45qpxOd2KvYb48PIQxcbVYHSIhxw5QMU0hpse6kjQrmnr0jrBAn8kNN9SmCt0IgNheC7fOZfcfc%2B9U20xiSRJFnCIvA4gbWtnosfnjR8CHP3A3uZSQqEC5blKCS9IgOiKftQzJ9AKQPfpmf5G46trkjZKQuU00YOOXBrTCmxezDBjqkAVi0VMoBiFgNQIRy6TPZoBIJelprMpov7YcL9O3UeSgtoyGpnsf%2BIpe4uNv%2FXZjNXlOeedfmBPRmRafR8VAYgkCFmnEkfFmmhTD7%2BSGyHRsSWN0wNmQoXF0mj4uuoe4oX9bKscLRBChJMePOLNaeNchXLB4NCisKjVsD4w2RKM%2FaI2nleDdsXo8v6CmlP%2F0jISJM7P2dy7MVo0N9PmpX4wqtRg5m&X-Amz-Signature=d6d747406edd3ca231c32ca769b12d0eb7dad15f9aaef045779a73ed17ae1bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC6YLWBP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FU0znWM2pDg%2B0%2FyzgPgeNcHeLnZcZKq5RG6EMubZdnAiEAtQuOifndYkvMBGz%2BUcGdw4hKgNIWJ7IfBtiRIMLyBCYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAIZa9cxIXTEN7pfSrcA7PtVeDdUji92jM0qHCh8r1W3H0zSbWyhj19%2FwJDDPZWt8PgR9b5AdSKYgfMtT3a4PfTIwSFnhGoc0ANen7gwrbApuEea41hBHkb%2BseexjRN25WoWwiCEtW3ZqvnJgUka0C69X94g3k7kYDB%2FnaJnwT2uX88d1U3riz8TC9wq7BOGzZN6ZDDp%2BmQy723CdFrqqtJsxZLFIDNGJ1k%2BQqI%2FQPpTKqshVtRq6DjcH9rYfRRD6%2F6O3zbDJojDxV0pKS%2BYEcW45VJR%2Bw8kwOXdgms9lz7RTXSUT4yOYEssdfakVr5L9PeazMrVVjOSy14AxVaAySjekLISRLW15YB0yZ%2BlUtlwOCK4SWlqf6al4km7q0mvBN6Ob7p3D44Bsi74BEfMhP27fQevM73HlJ5n63Xb5fkSunTtjOzaWuckI3aO5PxKvKQamlzbVM1eAPCWgSWfL0owG1QVkkObvtWHw6s79iJSMXlZnST4t9DAszdC5x0ZW1EeCOITtU9CuUADwghlGhhr4QNABfC1rXeoDDVH1BZrWhfP06IxFqiNURKgP%2BD9n4he5z6LZVe2DKLC0sQz%2Bmb2vlSxaTTmRbCcO10CnZ5WS%2FUx7GflTkbjmjVyxqwbCAaYb59njksWaprMMTF7MMGOqUBoAD4SQNJh%2B6lehHOtlvpyXYUtUzejsP3VWRaxy17syAtGCGI6nbnICrJB0AkU%2F8FCBEXFfCaxC7AzfAV4%2Bpv7iRPPIH9Q8hCtTB65PiNqoahDCwE95v5FOePuZ89aA%2FfqCqQTxi1SLwsQ%2ByAgl9y%2BJY02WDjdFCNrDMHVWObwBytyWIVNrP%2BcdTC9Pm6RfeHowgJgOelhtltZpM%2FNqjACqzRsVEo&X-Amz-Signature=83aaba55df96d70758416553822b333a157369bfa4790b9a616af4e3b5af96df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35UIY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu3%2BhBSANRfwz5qzNs5eYCKgcM5zu4NSxTkUxtzdgZAAiBR1h9opHqFmykKCG3ebEIQuRjh8N3RdtDYLtDsoIX72SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLT1FheLXxWLNMR3HKtwD%2FyRW1H5oCOGLH8K5kvt85%2B%2BbIzm9TDYbuZVyes9exn3v2skPK8sQ7fYfEP6zeBued1gd4gTkxGWIeHmn7%2FWURSjgR46OJZoiCFE7DXB%2F6Aulz3PZVCretzAKTYaYjCgt%2BbqvN%2FK9roCmgJrhz%2B%2BXkLQAozqXM7I8Mcj4BLeEdaoh%2BxlInmAcmq%2FOF1YlpGA2ysoOaWmktplpTkNhyOBSm2auVoXXgOrocDj5iBh69nQ7xCYPEZVpcV4hnr3F93U8FDnvufaqrvTtH436xE%2BEUsO3zr12PGfrgWelBmGiSOQnQmG3Gb4N5QGCxE21nBCLuY7QN7iwXzmECmqUuxFDEompVWBCi1%2F3L7iaB8wHa7nopWIyli44ES2ESmfVSf8Sqy%2BPrtvHBZVD%2Bg1gezpgNV9XAloprIcpB7QAg3eRacOSdNFrYTjTq%2BIhhKAxoxeojqEf5EqHKZyWMxhp3gCokaepFKaGy471p1A7XheplAHL%2FTvN9ezNZErNTOii8w2Bd4K8X%2F1iRnt6BOkR5c5gHsVYRwm9RmngW5N70RpRGHlJ1VIPDVZb6kRB939y9%2BzerrHEopE8z9ELn427sq9e%2B3PkEjqFG8IYbSB3GOXCkLkgTEFWqgYzwd17%2F%2FQwhsXswwY6pgGx21324tGed6FwOdlgLwkGY1hvTW1lmUG1xYG%2BqE1PAqsPmEFLU68YrHd4Uhldtem2buAuCMAKWUcdxS%2Bnb6oPffk0yf6%2FLXd5WqHpgzD%2FDU3fGojMJEJY8x1wfwa%2BoxNpzMNjQFL%2F0CN0Fqo92O9bzwcfP%2BfuUvky19vvrNt0U9YhHt%2BsaPFp1gGxBRakea7viIZIjABScIyNhHPQsR0iNqYqmYXD&X-Amz-Signature=d1e217be15995de4c1651344da8f44c309502d0b6f89b3b085d77c3537ef9b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBVPG2F%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo4Z6woeYSlXdBSv5WbQsUHBK9Nj9c72m7FyM4mAOEvAIhAKgkoK3lKEKsX81xAKFHNXxCDUXZ%2F%2FR%2BNwyUxi7HY%2FbPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscWH3TaKTiI2jAbgq3AOJo0FYFLu%2F%2Bqv8FwwiDvQ%2FIF620XxNrXSpLh0Ekz3EZG4xPXeEMUwLpls%2BLDlJHlx3Y920M3xne7VCBaT0v2D7xGJkJXZkR8iHvIFKnpByAZjsXYS%2BzF0YIIi7FVzVVnyxnhkMfTBo52JqE%2FSR%2FiPiVwqONHJBmD0mHTSp9xTJnYULXmas699IhN7r7iVCJfd4EAzNdF%2FNxPRq%2FrYzLHMRsmEY%2FU4F7KwaTlEIXle6uG6ogWe3nlZfJMlWKzx6xSt4ZAXi2w9Vs0H8TrfMioYjGjKCn%2FpfqL01PZKNMp3AhuDytHVaaSw%2Fxnr0soRrElQmpOnRILpwKt6Y3cbeCc5m%2FUM2fkznJ59xrASpz7r0OE2x%2BDcPTOS6wqzU3D96LmM%2Ft2IVJ2fZjT%2BjA0nWIfk8zLbJm5PPJ9YVbiw3JhDNaikEZi8Oa1O1lRwdM25O%2BTjI9tXbsI2apfZCtqNg1fDQU45qpxOd2KvYb48PIQxcbVYHSIhxw5QMU0hpse6kjQrmnr0jrBAn8kNN9SmCt0IgNheC7fOZfcfc%2B9U20xiSRJFnCIvA4gbWtnosfnjR8CHP3A3uZSQqEC5blKCS9IgOiKftQzJ9AKQPfpmf5G46trkjZKQuU00YOOXBrTCmxezDBjqkAVi0VMoBiFgNQIRy6TPZoBIJelprMpov7YcL9O3UeSgtoyGpnsf%2BIpe4uNv%2FXZjNXlOeedfmBPRmRafR8VAYgkCFmnEkfFmmhTD7%2BSGyHRsSWN0wNmQoXF0mj4uuoe4oX9bKscLRBChJMePOLNaeNchXLB4NCisKjVsD4w2RKM%2FaI2nleDdsXo8v6CmlP%2F0jISJM7P2dy7MVo0N9PmpX4wqtRg5m&X-Amz-Signature=74fcff64eec2481d1b333e9ad30491557ca8425185beacf6ffc1b54e1b87cfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
