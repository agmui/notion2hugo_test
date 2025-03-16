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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3AAJP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACalo1mWOqA0Bs6jIm0S152B9vxYSAy6VtFhnTkH%2FFxAiAFGTSoQAJtEPmcc%2FebyJyMnzhmLdh%2F9plAdDvqsDjRCCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMXpx6RHXERIh%2FvPNMKtwDG1eleFs8hlwe1pSjMERf59UObz7nh14%2Fbly6bVy3EiVkFmB7Ao9u8N89vpEVx9OY6UoRE%2Fz4keNRPusITGoqsmsMbDUagCoSFz7jd4Lqp0TdA95HboRLiDK7ZGcDTo6Rhq%2BI6Jo9huOezZf0hRfkcV79PKN2WIph62kJ7Z6S4zz2X9edTbDeqlSgdVZhkKIHDm04EzXYkF0xfDFZ7eXW3KzK0FQtsIgdTtmNPox31dwq8xO4ZPpqvCslyCDDhOjAf%2FMeN%2BFmMOIk4Ie%2FGtF9psUoo2tFIadun1o3q3QV6zxqBBIoU9feA2O7X0DqyQ5oB0%2FAWK%2BXd63U4Po75be9NR9g6fnvZ6GhQBH2MW5yqzPwoGOFrARB2b3i19HbYBEcR0jReVTr02Wg67s3yol0Gnna%2FiviU2D5YEealN3TeOXtGujmSpRi5Yizk9xj1jXeZdML2KwnGl3K0akAA%2BXZHn58XV3FCX3W4DMJSYzdP5uy%2B0TwF%2Frgdu2xM1oE92Znay7e19Y%2FXF%2F66hvpVIUUPBPyMQj9qxgQfnbr4d%2BS9JxpZaa63SEFxtNkYd7f16UqwOHn%2B6TjR27lGOa9VJUUrr40eeZ9QzkaBdapgSSQ3z2TGWuV2WEpqSghecUwt9javgY6pgHW%2Bw858brtAFHHC6Q%2FEclErKpCeOl7wMVxOsgi6kdHcc%2F9bUQAtNGNPX9ehdcpL3Ga1lKkRybRp0BvjQBQJsepGIXuDaiwzh3Rs6GwLX8qTG2nclBcAv9fQDdOoQZpFtCQNmN%2Fr2saojqjZ249txqgE7vYNBWMuvkbsYRv1deHFOX%2FgfkIxEHPCG6WpAV2FVL3HJNa3d5%2Funu1gVMyl5%2FX%2Bw%2B9AdJ3&X-Amz-Signature=4eb74ca2ec535463c6977f372d355b3ba78cb929336422e5ef35f56ae03a8ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3AAJP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACalo1mWOqA0Bs6jIm0S152B9vxYSAy6VtFhnTkH%2FFxAiAFGTSoQAJtEPmcc%2FebyJyMnzhmLdh%2F9plAdDvqsDjRCCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMXpx6RHXERIh%2FvPNMKtwDG1eleFs8hlwe1pSjMERf59UObz7nh14%2Fbly6bVy3EiVkFmB7Ao9u8N89vpEVx9OY6UoRE%2Fz4keNRPusITGoqsmsMbDUagCoSFz7jd4Lqp0TdA95HboRLiDK7ZGcDTo6Rhq%2BI6Jo9huOezZf0hRfkcV79PKN2WIph62kJ7Z6S4zz2X9edTbDeqlSgdVZhkKIHDm04EzXYkF0xfDFZ7eXW3KzK0FQtsIgdTtmNPox31dwq8xO4ZPpqvCslyCDDhOjAf%2FMeN%2BFmMOIk4Ie%2FGtF9psUoo2tFIadun1o3q3QV6zxqBBIoU9feA2O7X0DqyQ5oB0%2FAWK%2BXd63U4Po75be9NR9g6fnvZ6GhQBH2MW5yqzPwoGOFrARB2b3i19HbYBEcR0jReVTr02Wg67s3yol0Gnna%2FiviU2D5YEealN3TeOXtGujmSpRi5Yizk9xj1jXeZdML2KwnGl3K0akAA%2BXZHn58XV3FCX3W4DMJSYzdP5uy%2B0TwF%2Frgdu2xM1oE92Znay7e19Y%2FXF%2F66hvpVIUUPBPyMQj9qxgQfnbr4d%2BS9JxpZaa63SEFxtNkYd7f16UqwOHn%2B6TjR27lGOa9VJUUrr40eeZ9QzkaBdapgSSQ3z2TGWuV2WEpqSghecUwt9javgY6pgHW%2Bw858brtAFHHC6Q%2FEclErKpCeOl7wMVxOsgi6kdHcc%2F9bUQAtNGNPX9ehdcpL3Ga1lKkRybRp0BvjQBQJsepGIXuDaiwzh3Rs6GwLX8qTG2nclBcAv9fQDdOoQZpFtCQNmN%2Fr2saojqjZ249txqgE7vYNBWMuvkbsYRv1deHFOX%2FgfkIxEHPCG6WpAV2FVL3HJNa3d5%2Funu1gVMyl5%2FX%2Bw%2B9AdJ3&X-Amz-Signature=140cf582aea4756926621c23e2e0d7b986bc4a970b09461d2fdbf0041b3779ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OQQM3X7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIe59UHbHi4MV2zOLTVJZwtbWxM0KFk3wfFUgd1YiZzAIhAOErpzwsQkv73dwd3qy2qEsVGJ2Ly9%2F7a10DI5pSqXvgKv8DCCwQABoMNjM3NDIzMTgzODA1IgzkQiz1WBaX%2F%2Fq4n4gq3AOWi26tCB9jgsqdGn8K3q0yn9FJ62nl46FNyTJvPkoAniiO%2F7ZeKRPyA%2F6vHsILZmh3BPREDj2vXhq1qXtGFPuLSOIFWuwHEDEB6nMNItBR7C28xwi%2FQD%2B3NKU4J8uT4R0UA3B%2FqR8BmUGg2ENFPp6Zkz%2BkgB0BiKO3XjkBBK9g7PHJG3xQAh%2BLGPDlNN6CEjyVAai2IbRr2E0c9TzInmtt%2BjI7al0xrA5K31jvTiphvpTNDcv45zI9PnEFhNi1x9s%2F3o8GAYjp3hclrWQmfHlQvG3uzmUx6qi9p4u4s561woYwJLTDxclJURPr6tu0IAgbVRs2HuPnoys2ET%2Fo08aaYdpYWKaIvXWRUHNdmyWRHKpUufZF55Z6SxVIXmA8BHhSaulw%2Fqcbu%2FxZxq%2ByvY3m%2FAd9EjA2V8ucLKC2KhpTFBuvXcCWd5oUUHmMxFgG0K13EuK1ASJRBGVGbxHUrTViMPuWgIFOmQk8jfRasXqVus10grnSBq3QBPpsbxXxXEflFfaKKJld5z9sZODjjZP51T54WI71qVpLRP2FtFk5lVyF9n4QTJaHZrBnT6%2FXwZuJmaALbZmadf4%2F3M9UvkKVx8WH5wehGwLaIdzXDGpaUyKZpe1KnvQBoPTA8DC92Nq%2BBjqkASnwKDkKBEAJMEz9Z9De3lD269lRYZH7rKV8VAoRm18vsmxMCcbXPqF4SiBXDeTi%2FWPMq0EdEufpeUEiqmvE%2By6ZOwb1lO0%2BHa8vbChdGnsdLwFKJZ1GxWN57ZIoPacXZGTuNnhcliXYHuKPFCbBgaf8zgKtotJHjZ3%2FkN9ot9iVHFY8uLpBJIEz2XYbvhM6UCMK20MWbuYP8CDksas6pXNm4oHR&X-Amz-Signature=af227aa6536e1ff67a1a032fb0076602669536b36a8eb26e7fce32ed07ebcdb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKGCSZ4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0jNtCWoEW291Sd%2FTMb91nZ5%2F3sWG0ffg%2BPr2qlC3o%2FAiEArgJLurUjmjysA2HEtFCfZ4hUpnXj59Z5hatzH%2B0tcWIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBEjMxCzSLD18mn3vyrcAw3bIA8TlXYLch2LJjN4MvffAbGaZfPdZvfgFJz1ntcNdIqjjDdljPPn%2BO%2B%2BpUuI%2FC%2B8L2ydRVGM1dotgWSNfrZrjogJIJcEjmFwVo%2BDrZUUW3uhRdwfCtaC3%2B8SyHdzGXlXVHgIvSPBTI9afG7B2gXIToLMEVnr1ZVCr%2BvJ76723K2fbHxSv3OLAt9hjZSEA267XQP4l44%2B0LHRKwWnm1P2DhfvtSiFkiaHzDvgelyzHjYuLvZlE3Duho6phNdo331aVe%2F6Uh5fUluaqa09konlxZbrWxYfPoL4oMXRxmB%2FkgSrtumS61Jf4BQIVf7B6r5apLMG2%2FFS5eTiMHLJlS63OCGZ%2B4DXmwGHZur6bXEB8YNBl0kwYRuEUAnU5yd3h7v0HpvEElrvdn3YYuh7vX1%2FFVlajKkwuihF9WKQ9Brf%2Fl%2Fse%2BpryE2NMk2m3baIAYY5t3SrJom9AmKH7ySNs67bzu6klj20rhscPdzH%2Fv5AlFG7lKiyGlu54%2B0bhT5is2o5AzpUx4jJ%2BnCopSh7%2BxnrXRzcus5NpUiXqHxtYj%2FSfBcdrHTKU%2F%2F1N1aEvnxwk9XWZFQ7XO%2BfDjXyAsiPEq1jsbCdslDPPKXZP6ZHumJuwOt4iOSd%2BBifxrPRMIah274GOqUBLUq%2Fx4XyMlgJK2CqlUyJwIt6Bs%2BBNQxSq%2FR2N13euB2insOAVUlZeA9oHUyOyu2evV7VCFDIq1RQsj6UfCBp7L%2BUWSNz0zPnpIbFbt7daBVk8JStYM4Do%2B9DSh90FRHPW0vbMsfNi8eriofJkTV%2Bxozujkw%2BALa%2FpfsvQK3xZRkhUSnO47guvYmQV%2BEO%2BddgCcZ6oqp1yq3zOAzZzjFGith31rI5&X-Amz-Signature=0aeeedf90833fde62f25b427a75e348d1d2cc1d37408a1bad3a997bd6ec07590&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM3AAJP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACalo1mWOqA0Bs6jIm0S152B9vxYSAy6VtFhnTkH%2FFxAiAFGTSoQAJtEPmcc%2FebyJyMnzhmLdh%2F9plAdDvqsDjRCCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMXpx6RHXERIh%2FvPNMKtwDG1eleFs8hlwe1pSjMERf59UObz7nh14%2Fbly6bVy3EiVkFmB7Ao9u8N89vpEVx9OY6UoRE%2Fz4keNRPusITGoqsmsMbDUagCoSFz7jd4Lqp0TdA95HboRLiDK7ZGcDTo6Rhq%2BI6Jo9huOezZf0hRfkcV79PKN2WIph62kJ7Z6S4zz2X9edTbDeqlSgdVZhkKIHDm04EzXYkF0xfDFZ7eXW3KzK0FQtsIgdTtmNPox31dwq8xO4ZPpqvCslyCDDhOjAf%2FMeN%2BFmMOIk4Ie%2FGtF9psUoo2tFIadun1o3q3QV6zxqBBIoU9feA2O7X0DqyQ5oB0%2FAWK%2BXd63U4Po75be9NR9g6fnvZ6GhQBH2MW5yqzPwoGOFrARB2b3i19HbYBEcR0jReVTr02Wg67s3yol0Gnna%2FiviU2D5YEealN3TeOXtGujmSpRi5Yizk9xj1jXeZdML2KwnGl3K0akAA%2BXZHn58XV3FCX3W4DMJSYzdP5uy%2B0TwF%2Frgdu2xM1oE92Znay7e19Y%2FXF%2F66hvpVIUUPBPyMQj9qxgQfnbr4d%2BS9JxpZaa63SEFxtNkYd7f16UqwOHn%2B6TjR27lGOa9VJUUrr40eeZ9QzkaBdapgSSQ3z2TGWuV2WEpqSghecUwt9javgY6pgHW%2Bw858brtAFHHC6Q%2FEclErKpCeOl7wMVxOsgi6kdHcc%2F9bUQAtNGNPX9ehdcpL3Ga1lKkRybRp0BvjQBQJsepGIXuDaiwzh3Rs6GwLX8qTG2nclBcAv9fQDdOoQZpFtCQNmN%2Fr2saojqjZ249txqgE7vYNBWMuvkbsYRv1deHFOX%2FgfkIxEHPCG6WpAV2FVL3HJNa3d5%2Funu1gVMyl5%2FX%2Bw%2B9AdJ3&X-Amz-Signature=946dc9d0d297d432ecda32aa10c96488be8693ebe0d9f29b02c6bc9c958bfb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
