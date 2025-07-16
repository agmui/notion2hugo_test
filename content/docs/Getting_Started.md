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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77L2IW6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICjo%2BC02hC8BHGgOdjubGiwV%2BYdPGm1Uoc95onA%2Fn%2BwMAiEAgqySYgAh7fIsXHESwlRLmeoNxGIV%2BbrjhTDPcpArE%2FMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBXzX2mbKHCmjaatHyrcA8tMiPI1sT916E5g%2BA930o8Zf9RK72NAOxhUmKzHi39FcHqLKZ2s2AibV39a%2BftVnCbDs3iKz0U8CM5K%2FhrNJIfofAeWq9FeajgE4IEiaemxPgRFQ5jljrXnhmzqxqhM50idH8IiUSEyIKFHdhXG8Zasxgnp9XpQh6VEdvFdCKqxIRQeMD03hi35tyyoeyV6kiCo2w%2Fx%2BErdjMQmqus61%2F4TyCcOJ5HQRHAGaV%2BHYdXndLhWuJITIpKIXrnvtnjD4g%2FMkzvz4t6lrqzRF%2FcB0W%2BjxfJLF4mR2X4XGgjBXclTjMDcU8a3mSq%2FveiA66jJOs1LGE9BmWMHMb64XDfQArYwVto%2BfNscMDALsMeAvgb3JtssmHWlJMKB5VbgC51UKdIkE39axcxv13B3ANdoKyDjI85ceQQ76nPngfTA3bHEyu0iaMm7O8kEYSBWN4X7SxpVsEX3%2Bp1dpgKbx%2BomX94kvi6%2B3vSx3DGEcjQc%2BgB0eG8L2928ZHjkne5Dh43k7k8n7NCQ2egGWRHb4U3xpZTXEx9LycIl8ts2VIqikyWPul2N%2BzJZWvKnz3pgDsHSxFNJ1cD4cAdljfGBw1aueUOnkORqlxzH3Ezg6Y%2BdcuN6Nmu63TPtjION6Aj9MIqT3sMGOqUBCTYcvGlFr7k0Ty5be7CIdrJ4HOv1PCGCM1Nuab4ddNhfMbEddHBjH%2F3dtBh8tVhEKXjmd4o9SCv2oEqli3rTuE5FrwSej3Jh1ypjeaUFS9zC5glVcRm7A7fcmM3CmKp0KnYRFHKw3Lkpo%2B2ER0SFt6K0LeW7WwAG1YZQbjGh99XuHuH6SrBdBmCMBy3hpcmah6zu%2BpOsA7jT86B1CKrFDO4bUv77&X-Amz-Signature=441811b4a794bbd5c6af4a3e6dc11355f5d3b07b7fa3f1b4dd5ad1c3348256bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77L2IW6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICjo%2BC02hC8BHGgOdjubGiwV%2BYdPGm1Uoc95onA%2Fn%2BwMAiEAgqySYgAh7fIsXHESwlRLmeoNxGIV%2BbrjhTDPcpArE%2FMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBXzX2mbKHCmjaatHyrcA8tMiPI1sT916E5g%2BA930o8Zf9RK72NAOxhUmKzHi39FcHqLKZ2s2AibV39a%2BftVnCbDs3iKz0U8CM5K%2FhrNJIfofAeWq9FeajgE4IEiaemxPgRFQ5jljrXnhmzqxqhM50idH8IiUSEyIKFHdhXG8Zasxgnp9XpQh6VEdvFdCKqxIRQeMD03hi35tyyoeyV6kiCo2w%2Fx%2BErdjMQmqus61%2F4TyCcOJ5HQRHAGaV%2BHYdXndLhWuJITIpKIXrnvtnjD4g%2FMkzvz4t6lrqzRF%2FcB0W%2BjxfJLF4mR2X4XGgjBXclTjMDcU8a3mSq%2FveiA66jJOs1LGE9BmWMHMb64XDfQArYwVto%2BfNscMDALsMeAvgb3JtssmHWlJMKB5VbgC51UKdIkE39axcxv13B3ANdoKyDjI85ceQQ76nPngfTA3bHEyu0iaMm7O8kEYSBWN4X7SxpVsEX3%2Bp1dpgKbx%2BomX94kvi6%2B3vSx3DGEcjQc%2BgB0eG8L2928ZHjkne5Dh43k7k8n7NCQ2egGWRHb4U3xpZTXEx9LycIl8ts2VIqikyWPul2N%2BzJZWvKnz3pgDsHSxFNJ1cD4cAdljfGBw1aueUOnkORqlxzH3Ezg6Y%2BdcuN6Nmu63TPtjION6Aj9MIqT3sMGOqUBCTYcvGlFr7k0Ty5be7CIdrJ4HOv1PCGCM1Nuab4ddNhfMbEddHBjH%2F3dtBh8tVhEKXjmd4o9SCv2oEqli3rTuE5FrwSej3Jh1ypjeaUFS9zC5glVcRm7A7fcmM3CmKp0KnYRFHKw3Lkpo%2B2ER0SFt6K0LeW7WwAG1YZQbjGh99XuHuH6SrBdBmCMBy3hpcmah6zu%2BpOsA7jT86B1CKrFDO4bUv77&X-Amz-Signature=e5ff3822f181ff32392a607b71807951b5feb8aab1b811113adf9d7b11d5ae35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77L2IW6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICjo%2BC02hC8BHGgOdjubGiwV%2BYdPGm1Uoc95onA%2Fn%2BwMAiEAgqySYgAh7fIsXHESwlRLmeoNxGIV%2BbrjhTDPcpArE%2FMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBXzX2mbKHCmjaatHyrcA8tMiPI1sT916E5g%2BA930o8Zf9RK72NAOxhUmKzHi39FcHqLKZ2s2AibV39a%2BftVnCbDs3iKz0U8CM5K%2FhrNJIfofAeWq9FeajgE4IEiaemxPgRFQ5jljrXnhmzqxqhM50idH8IiUSEyIKFHdhXG8Zasxgnp9XpQh6VEdvFdCKqxIRQeMD03hi35tyyoeyV6kiCo2w%2Fx%2BErdjMQmqus61%2F4TyCcOJ5HQRHAGaV%2BHYdXndLhWuJITIpKIXrnvtnjD4g%2FMkzvz4t6lrqzRF%2FcB0W%2BjxfJLF4mR2X4XGgjBXclTjMDcU8a3mSq%2FveiA66jJOs1LGE9BmWMHMb64XDfQArYwVto%2BfNscMDALsMeAvgb3JtssmHWlJMKB5VbgC51UKdIkE39axcxv13B3ANdoKyDjI85ceQQ76nPngfTA3bHEyu0iaMm7O8kEYSBWN4X7SxpVsEX3%2Bp1dpgKbx%2BomX94kvi6%2B3vSx3DGEcjQc%2BgB0eG8L2928ZHjkne5Dh43k7k8n7NCQ2egGWRHb4U3xpZTXEx9LycIl8ts2VIqikyWPul2N%2BzJZWvKnz3pgDsHSxFNJ1cD4cAdljfGBw1aueUOnkORqlxzH3Ezg6Y%2BdcuN6Nmu63TPtjION6Aj9MIqT3sMGOqUBCTYcvGlFr7k0Ty5be7CIdrJ4HOv1PCGCM1Nuab4ddNhfMbEddHBjH%2F3dtBh8tVhEKXjmd4o9SCv2oEqli3rTuE5FrwSej3Jh1ypjeaUFS9zC5glVcRm7A7fcmM3CmKp0KnYRFHKw3Lkpo%2B2ER0SFt6K0LeW7WwAG1YZQbjGh99XuHuH6SrBdBmCMBy3hpcmah6zu%2BpOsA7jT86B1CKrFDO4bUv77&X-Amz-Signature=a84c8c5d4e0227194f101e71170605ac8a6940e83305a5a26989a280dfb29bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPKLL5IU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDffj8Uvz8WJQwlfPDJDoel4w%2B7cKtwuENXvuVS5rA03gIgYrIwSNimcO9ZXnSBCDLF5zpyw%2BNR99mixBVmi4xrswgq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAqxb75zJyFTikH8PyrcA5D89cBLKLxw6Ffrn38indxr6w2p6ISLfycqQY53hQjDVIDEJbZfu%2B03tcq4sXg%2BG90%2Feth%2BnkEWydWUUVVv7S3BNvheDDDjFUZMLJPQlhp6Qs2NrJUcEcRaKfCw%2FfT9cKJMseMtC4ZxIfs86vQoZygpIUZPJEiywSKpqLfPNECgEA50XrNkmF5UfsNiJKYG0%2FE%2FW%2Bung42T02xs2PQoetMpEBdGGWxyggTpRsiPXSQAeLA2zPPgWwCJ%2BT%2Bf1bT2iAkVZ7XLLoU%2FP67jrilnP%2Fn8zb9MIh8a9uHpHYgruA5YjAQyQCLDP0XMQH0wHUf0BThc0aRYi36lMTyqzRoHa44ZpG6SATBj97xNuDacs1m1iK%2BwE6q5kgXkCfhjkTOtc5QQ1fqTRDurc%2F%2BZrsu2%2Fr8Co7h6yLqcqceSjScI3GgsbZlSssR2cTrnRwMhILZtU%2B9PRayRuBjyZPXyh8J6GX1b1DrBOJuEc%2F7Mo03Git5d0kSIL42lw09%2BYe3cPzaUPtFDFkDN6d4Lri2m%2FiVmN9oulvVHmAT5O7NvnMgEkUerbePezK2nEw4HArSbCJQXY%2BZaxMIZ9nHFyCCLII1VYMeZ1p3%2FqbJCZTru9lTdiYYuxMXNwH8DjNfp25ztMIiT3sMGOqUBVL7w3cOTkUN8EjzBt4f%2BOkRq9XW54qftLK1PXRQCp2hKkUexW5sFgL8RixEPe15%2BSRFTJ7YO4KgaE7s8jqcuGqVztvemaZOJwoAbsUJ%2BIHYlTj3jboPWm0ayj7UXSgzzR9TsgU8aYafWz0SL4yvqzkz31NqbBer6Dez3yqCG5xUjkXKIjzXD%2Bmc1JprZRIlPOfmhmSag1RPrU7MfO2kGA7GUVagy&X-Amz-Signature=818ec9ebe79b5acfd84cc72824b27df9b6c4d18fe0cfde45271fef9a7116752e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657B2LFUW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHukn1llZPc6PRjsBA76YxKHgVL3B1MwadGajR2i%2F%2FyiAiAOybtBFAAqOXiARpjlI0mjfTrWtWBL8Vk8eXAegQs9eSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM29lKrS%2Bp6Etvpu0qKtwD%2F4e7Ac8dpRl%2FSlgJCxa4q7DH7uZjZTzjTBYEa9oxwjLlMoo7VrJ4UygHyKwVC%2FioapO2klW%2FcYb%2BVoH7voyTOL%2BAMdhIMOyfJj0C8xNm7Q7WCpzuWmFlzRC6tejxOxmEusE0XZIqU51VaA2%2FQiBx9ZmYy3NyKMOOWZEzccFLGhLnKzQzWHLQJhncLRiqgyhVKhBAyKJ2VBsWgjyKWEaN7ezickc%2FwIF%2F1j4J9p22T0Ntlu1%2Fk%2BYC9eMYFZMT2bfQ25i0syKvffhRC3ibfzAzQ4cXfYOz6TkeLCI3to5oLk9a7FL27TZWAzw0qpIrVnUeraHktVjxCAZ4bAbfgGVDDykGVQ%2F0aTsy3MIpZbT%2FG7LpWuObD94CelsZkC9x6J5XoaAgj561%2Fmvbl9d2MFLslscPzcjL8b18LTDdEeVTnudrj%2FAB75S01R1R0FoRC5BK3bWDx1AadB2rKOerW%2Fh2Zr2H8Nww5hfrsRubNkUzdaWEAg4u85zcKSmmdRnVEwgV9PULr%2FvyCq1%2B34TqaY8t1bS%2BljDC4MlNLPD4%2BvgwqgoONCZPeKte%2BWoy7f9pYLXsXDAeMj0ghjNidife9DD1X8z1Br4YjW6xbqhICqqTZubwI5d8%2BMfx0KeXH0Mw8pLewwY6pgENBJ990CTRpI99Wy6LZXV7RLUTvqz%2BJSFyDnsgCtyqqy9KLfjmpoSh%2FCtWnjWW878L%2FbpmMNAIpobY22Ig%2B1xK5FeXK3bRgOgMV%2FwidMPyKptJdyvfwucjmxUsWsU4yDr8ZQulXe4499PwUx3%2FqlXf87ZabqnhdrKg%2BG7CxSQcPqmahBoBW0RfK3p0CjEZde5q7ynKfQHgHmTim8O7XmKQEBizKmS2&X-Amz-Signature=faa33e555a75a377915fb0da808609fcbf0b91d183677e8754401aca3741df02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X77L2IW6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICjo%2BC02hC8BHGgOdjubGiwV%2BYdPGm1Uoc95onA%2Fn%2BwMAiEAgqySYgAh7fIsXHESwlRLmeoNxGIV%2BbrjhTDPcpArE%2FMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBXzX2mbKHCmjaatHyrcA8tMiPI1sT916E5g%2BA930o8Zf9RK72NAOxhUmKzHi39FcHqLKZ2s2AibV39a%2BftVnCbDs3iKz0U8CM5K%2FhrNJIfofAeWq9FeajgE4IEiaemxPgRFQ5jljrXnhmzqxqhM50idH8IiUSEyIKFHdhXG8Zasxgnp9XpQh6VEdvFdCKqxIRQeMD03hi35tyyoeyV6kiCo2w%2Fx%2BErdjMQmqus61%2F4TyCcOJ5HQRHAGaV%2BHYdXndLhWuJITIpKIXrnvtnjD4g%2FMkzvz4t6lrqzRF%2FcB0W%2BjxfJLF4mR2X4XGgjBXclTjMDcU8a3mSq%2FveiA66jJOs1LGE9BmWMHMb64XDfQArYwVto%2BfNscMDALsMeAvgb3JtssmHWlJMKB5VbgC51UKdIkE39axcxv13B3ANdoKyDjI85ceQQ76nPngfTA3bHEyu0iaMm7O8kEYSBWN4X7SxpVsEX3%2Bp1dpgKbx%2BomX94kvi6%2B3vSx3DGEcjQc%2BgB0eG8L2928ZHjkne5Dh43k7k8n7NCQ2egGWRHb4U3xpZTXEx9LycIl8ts2VIqikyWPul2N%2BzJZWvKnz3pgDsHSxFNJ1cD4cAdljfGBw1aueUOnkORqlxzH3Ezg6Y%2BdcuN6Nmu63TPtjION6Aj9MIqT3sMGOqUBCTYcvGlFr7k0Ty5be7CIdrJ4HOv1PCGCM1Nuab4ddNhfMbEddHBjH%2F3dtBh8tVhEKXjmd4o9SCv2oEqli3rTuE5FrwSej3Jh1ypjeaUFS9zC5glVcRm7A7fcmM3CmKp0KnYRFHKw3Lkpo%2B2ER0SFt6K0LeW7WwAG1YZQbjGh99XuHuH6SrBdBmCMBy3hpcmah6zu%2BpOsA7jT86B1CKrFDO4bUv77&X-Amz-Signature=cc0a90bedd3676f9491c6608e4bd0af0e38bdc938f898fec616b34a7bdeaf7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
