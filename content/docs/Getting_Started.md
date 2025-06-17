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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAW5Y73%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUioHtw%2F%2F3d88wZc7ED010ZBaWzuViiM8bjm0QsECH5QIgY%2FrZh5BjqlOC5gQMymdflfZQlGbpGbhInu0N1xuFZCAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ89PVP52HMn3bN6iircA1hL9ePBRWvEToD8d695ePbfrVYkMlcCWNDhZHUXRSlHy70VDi8wiNyCegXOMvGy8HiVLnJ0x0p%2BH2Fw4AuZtO8buAqHan8FR77n72VwGvqPnrK3F0WI0ZAOG2Ql4i0F2vrNq55EB0tH76w81U%2FRyg6J3g3%2BmnlGHPupS6q%2Bn5fXylL8Zz%2Fys6vHTU3yP%2Bm1bzPW82BKXzStN0k4ClCcA9TyfZVmTBMGu2z0nwV2liMwHnPzm4QnKZwHXR2Jr34MPbuqDuvqgcnjmtZzX0NNr7zAMm19vBFU%2BGcX1w5lmuR2UyvPC37A7wPYfCaxS9w4NMSMGV9wA%2FjPkhH3%2FMTBoJk28RPh%2FHw%2BAKqqvvGbzs8rCzC%2F4qNjApEB9N3j0Y%2FR3dbdqp2LTh8YgeWUKCD4xf353%2FaRxwtS81X3ywix37y0HJua49%2FRBtCxe5hu%2F%2F8Ys%2FzA9gO9ChIswpwzw4X0aT%2FcNu68GlJNiOBIM21HWhLRTKJH3lJh5nIfdCAlb6kzL5mP4DnEGV6QsVVtz%2Ffe%2BaUzDBsbxTVnEdDgviw%2FugGQfEGHpqxUuW0XCHN%2B29qOJLm2cPCAzIa6vbCALTo5%2F8AYl3yitaMkJw1fsxGAu2L7%2BqPXmX%2FXmwKJPAcvMPW0xsIGOqUB9Qn8eLx5ytBoFgCIyH%2Blulw6iM66CRWXmarTWWvvFl8lcZjqxjau2IkeMk6oR%2BgavyzGxgWIibtvy%2FAmshEGJVxaotycZQuPl%2B7K0ok5KmtfbnWVASLizEGw4EVtGkKzj%2FhwU4JBBxZRx%2F2cN06MMCteCD%2FSnbYu9%2F7J3gr5kSgiz2taSMAlkqkPyxfMmVYq9E0701HFNOt0WQUY%2BcrrPVBAFO%2FE&X-Amz-Signature=ee807fee442dec64ef024a49d6fb6486d0994c2dd7bc9453f9db85a743977d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAW5Y73%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUioHtw%2F%2F3d88wZc7ED010ZBaWzuViiM8bjm0QsECH5QIgY%2FrZh5BjqlOC5gQMymdflfZQlGbpGbhInu0N1xuFZCAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ89PVP52HMn3bN6iircA1hL9ePBRWvEToD8d695ePbfrVYkMlcCWNDhZHUXRSlHy70VDi8wiNyCegXOMvGy8HiVLnJ0x0p%2BH2Fw4AuZtO8buAqHan8FR77n72VwGvqPnrK3F0WI0ZAOG2Ql4i0F2vrNq55EB0tH76w81U%2FRyg6J3g3%2BmnlGHPupS6q%2Bn5fXylL8Zz%2Fys6vHTU3yP%2Bm1bzPW82BKXzStN0k4ClCcA9TyfZVmTBMGu2z0nwV2liMwHnPzm4QnKZwHXR2Jr34MPbuqDuvqgcnjmtZzX0NNr7zAMm19vBFU%2BGcX1w5lmuR2UyvPC37A7wPYfCaxS9w4NMSMGV9wA%2FjPkhH3%2FMTBoJk28RPh%2FHw%2BAKqqvvGbzs8rCzC%2F4qNjApEB9N3j0Y%2FR3dbdqp2LTh8YgeWUKCD4xf353%2FaRxwtS81X3ywix37y0HJua49%2FRBtCxe5hu%2F%2F8Ys%2FzA9gO9ChIswpwzw4X0aT%2FcNu68GlJNiOBIM21HWhLRTKJH3lJh5nIfdCAlb6kzL5mP4DnEGV6QsVVtz%2Ffe%2BaUzDBsbxTVnEdDgviw%2FugGQfEGHpqxUuW0XCHN%2B29qOJLm2cPCAzIa6vbCALTo5%2F8AYl3yitaMkJw1fsxGAu2L7%2BqPXmX%2FXmwKJPAcvMPW0xsIGOqUB9Qn8eLx5ytBoFgCIyH%2Blulw6iM66CRWXmarTWWvvFl8lcZjqxjau2IkeMk6oR%2BgavyzGxgWIibtvy%2FAmshEGJVxaotycZQuPl%2B7K0ok5KmtfbnWVASLizEGw4EVtGkKzj%2FhwU4JBBxZRx%2F2cN06MMCteCD%2FSnbYu9%2F7J3gr5kSgiz2taSMAlkqkPyxfMmVYq9E0701HFNOt0WQUY%2BcrrPVBAFO%2FE&X-Amz-Signature=8d6a3617374cd2388f5b61c1002d0538df501b61e08e8e430f269a2500922ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAW5Y73%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUioHtw%2F%2F3d88wZc7ED010ZBaWzuViiM8bjm0QsECH5QIgY%2FrZh5BjqlOC5gQMymdflfZQlGbpGbhInu0N1xuFZCAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ89PVP52HMn3bN6iircA1hL9ePBRWvEToD8d695ePbfrVYkMlcCWNDhZHUXRSlHy70VDi8wiNyCegXOMvGy8HiVLnJ0x0p%2BH2Fw4AuZtO8buAqHan8FR77n72VwGvqPnrK3F0WI0ZAOG2Ql4i0F2vrNq55EB0tH76w81U%2FRyg6J3g3%2BmnlGHPupS6q%2Bn5fXylL8Zz%2Fys6vHTU3yP%2Bm1bzPW82BKXzStN0k4ClCcA9TyfZVmTBMGu2z0nwV2liMwHnPzm4QnKZwHXR2Jr34MPbuqDuvqgcnjmtZzX0NNr7zAMm19vBFU%2BGcX1w5lmuR2UyvPC37A7wPYfCaxS9w4NMSMGV9wA%2FjPkhH3%2FMTBoJk28RPh%2FHw%2BAKqqvvGbzs8rCzC%2F4qNjApEB9N3j0Y%2FR3dbdqp2LTh8YgeWUKCD4xf353%2FaRxwtS81X3ywix37y0HJua49%2FRBtCxe5hu%2F%2F8Ys%2FzA9gO9ChIswpwzw4X0aT%2FcNu68GlJNiOBIM21HWhLRTKJH3lJh5nIfdCAlb6kzL5mP4DnEGV6QsVVtz%2Ffe%2BaUzDBsbxTVnEdDgviw%2FugGQfEGHpqxUuW0XCHN%2B29qOJLm2cPCAzIa6vbCALTo5%2F8AYl3yitaMkJw1fsxGAu2L7%2BqPXmX%2FXmwKJPAcvMPW0xsIGOqUB9Qn8eLx5ytBoFgCIyH%2Blulw6iM66CRWXmarTWWvvFl8lcZjqxjau2IkeMk6oR%2BgavyzGxgWIibtvy%2FAmshEGJVxaotycZQuPl%2B7K0ok5KmtfbnWVASLizEGw4EVtGkKzj%2FhwU4JBBxZRx%2F2cN06MMCteCD%2FSnbYu9%2F7J3gr5kSgiz2taSMAlkqkPyxfMmVYq9E0701HFNOt0WQUY%2BcrrPVBAFO%2FE&X-Amz-Signature=21063eb718595a91b52a7b58644418ce8c7b150020f494b298cd949ffaa17a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ER2OENG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzIQ8nkyuppJfyvJ8Tqeh30G%2FYknSuW8Th3BhfBM4AtAiEAnkGOEgHtgvfS%2BS9bSPt79Bm7OAk3hfz91wF%2FRM5ozLoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP94BoZ8lu4zOnAPASrcA7mbO9S4ljOimgSK3KxdA4yXRKQT%2FXAr0f5FJJZ8ME1C%2BTH5rdsvpn2zmSTkpkNU5EpNoiZOQIYO52Ijb73MfoplELjjsvokhnXyyJ7HdKocTaxM5V%2FwWCBxPNautySKk1ygBqNdFUMOo111jOzhU%2BddeKhrhorri98PdFj8j5q2tjO4xKnT%2F4lgKPdLciEdvMqCBZYsaZbQW8bXRW8VTHImIkA0ziHXwYO1beCx6Doz%2FUqVdAVHrpGm1%2BvPqFbmMnXMiJdOVz2MyjKVfLe2%2FcWRR7SmBPioHp1GZEHkaFje%2FJQqBzudbfe3XiOyROaByrmNf1zD0y%2BHlMsT91Lnu4EofzLFS%2F8n9r8SZRq7OZ8AxgRpvfZCaXAeUTGqJGeTpW%2BFxsZ14EKjlBJ47uRFFb0FFgAo6ND7H6UBxh6%2F%2F68ryoSWZRN2SRQXXpdsO7N%2FPA5cP20%2BjWM8UJn%2Fi0uqzfkVl2q8tmVYjMq6E5xNoI%2FOYU21aB1hLM3rsbQbnWtCCI6gOjOL%2FWzVyd%2Bm3FwEbL903pCrPL1O25mSrY2kyNSUaMXET73OvHnEUijNWJLLhv4SyrPMSpjNr032lZZfROV6tXqCZ6EIph4bo1QNhmM5a%2F84IR%2BSJx4vw%2Fb0MN%2B0xsIGOqUBRBfMrzSIktPAPlKFSwGfC52C7P2TJ5DCY3Y4MFLlSnkwn1BJX5lZHzO9qwLVlhpSH3APx%2BqADFe2K4rLtsVDQ6VG3nOWXeDsEh3RrH%2Fmz3AjhOSpSxYkvDNgSLzOa%2FneydJI%2BtIrLOUSJOw%2BcdnDv69TCobqb7h0VPhD%2Bf5bHqAslID2P%2BgE3AOdzHa6D1sfR%2Fpmd%2B9f3DWPhRbCSVasQDO%2Fqktl&X-Amz-Signature=97ca11577e9921cd020f80d1f63083c8031a117f2142147f1ae7a2d61480a302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NY4N6F3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaNzqoIZE8%2FIQREYF8NeT20iNeClb7o5m3X1wZLFhL%2FAiA9iTMrB6RcGMH%2BqA5GQtcUJhLk9GXyhoj%2B8A4G7Fg0mCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMbD3iAPMVpjL8nR%2F1KtwDvSCn4AAjb5HHZniNo%2BUcGYiwMRAh76ceiOkkxx1i9IIll7O%2FZ7cKz1Ah1Q6zB4OdwsN03e7WHm8Vq0P%2F8oQ5OzNDAbkwQ4ZPDPf%2FqKy4B00r1p6bTFyhxtU0UTmz1KuAS65G1kzoXpuVCQSWOKzXQS%2B%2BzP0Fnp%2FtJ5DYv0b9kTTzpycyf23wwqDvVBQn9IYdLeESKJSWMaD5hex%2B4UdoNO39%2BJCTCEmp1voOfjmWnZZt%2FCntT%2BJSL2GcZJEGv6P6sIh899qP7R%2FyIlrdpHR%2FClOQtdqRKvdahWtdOqVx3hQVq%2BBKBhz%2FIuB2%2Fdj5TrzK%2Fzv4W8WZLIscxQvR0MLGb4uAV%2BCiFD0QeoBnekJbZxraUZmfWXBQCwW6rUr0DtS0%2FT5zXEKNOuUbLo6CMyFSAvro0qG9RSH57dTw15Me5Ub7wYovhhGS5VwM1Sdla%2BXWLHHcvyW4o5xf%2BXn5O1Sb7HmFI6ziUlKMh6WgFjr2RENvgKSshTeMv1%2FVgo7XS983dhVkPXpzaxzqV6ixGJNsuWhwFipKG9UUk7K2aVEKXKaOJPKZH7jpQ72ZXKislELqZzPohlytbqt4xRO1kUi97Ah2Uv%2Bcl29Lu6YZEePakdjUTrfUsyTGba1FhW0woLTGwgY6pgGO%2BvRPlKTh%2FzpAb5xIarhuFO1tVyMU%2BvcONJ%2FDTnTAstHHO1iqpHaczIz09Lvs8XVZl3vJh%2FPNx2WssbCr%2BqoN7UCFUlqPrhtxp6JLCrpnKSyVoDFS34FwNUMWOVufa6N%2BK%2FZC66Nwhkdm%2FTq0j008QWtcMSlo1ikf1q%2BuZ32S3c0c%2BxPZvKSam74fk81i%2BN2UZ7i74XRw%2FjDFC%2BImhtDGbdRaT%2FFu&X-Amz-Signature=5d3f19969559c86838435b7d57cc68b0d4c2bcf682e378b72cfc093fde05ca7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAW5Y73%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUioHtw%2F%2F3d88wZc7ED010ZBaWzuViiM8bjm0QsECH5QIgY%2FrZh5BjqlOC5gQMymdflfZQlGbpGbhInu0N1xuFZCAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ89PVP52HMn3bN6iircA1hL9ePBRWvEToD8d695ePbfrVYkMlcCWNDhZHUXRSlHy70VDi8wiNyCegXOMvGy8HiVLnJ0x0p%2BH2Fw4AuZtO8buAqHan8FR77n72VwGvqPnrK3F0WI0ZAOG2Ql4i0F2vrNq55EB0tH76w81U%2FRyg6J3g3%2BmnlGHPupS6q%2Bn5fXylL8Zz%2Fys6vHTU3yP%2Bm1bzPW82BKXzStN0k4ClCcA9TyfZVmTBMGu2z0nwV2liMwHnPzm4QnKZwHXR2Jr34MPbuqDuvqgcnjmtZzX0NNr7zAMm19vBFU%2BGcX1w5lmuR2UyvPC37A7wPYfCaxS9w4NMSMGV9wA%2FjPkhH3%2FMTBoJk28RPh%2FHw%2BAKqqvvGbzs8rCzC%2F4qNjApEB9N3j0Y%2FR3dbdqp2LTh8YgeWUKCD4xf353%2FaRxwtS81X3ywix37y0HJua49%2FRBtCxe5hu%2F%2F8Ys%2FzA9gO9ChIswpwzw4X0aT%2FcNu68GlJNiOBIM21HWhLRTKJH3lJh5nIfdCAlb6kzL5mP4DnEGV6QsVVtz%2Ffe%2BaUzDBsbxTVnEdDgviw%2FugGQfEGHpqxUuW0XCHN%2B29qOJLm2cPCAzIa6vbCALTo5%2F8AYl3yitaMkJw1fsxGAu2L7%2BqPXmX%2FXmwKJPAcvMPW0xsIGOqUB9Qn8eLx5ytBoFgCIyH%2Blulw6iM66CRWXmarTWWvvFl8lcZjqxjau2IkeMk6oR%2BgavyzGxgWIibtvy%2FAmshEGJVxaotycZQuPl%2B7K0ok5KmtfbnWVASLizEGw4EVtGkKzj%2FhwU4JBBxZRx%2F2cN06MMCteCD%2FSnbYu9%2F7J3gr5kSgiz2taSMAlkqkPyxfMmVYq9E0701HFNOt0WQUY%2BcrrPVBAFO%2FE&X-Amz-Signature=86457f2d5f12ffedc4fd2d0df8fd175e504dd6a5d01280ada82b1d70fd1d162c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
