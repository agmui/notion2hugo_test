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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2XJO7G%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjltgFWyFYYPrVimWh7jLWwRRxCoCYDtRXw8Jh4hOkwAiACI9ijDIi7tpYhAgkOrscay%2Fa31O2QoGmMvmAovmyvoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMif8On0KVpYTQmXxdKtwDQhGUGQxgGZBRI92oLLwrFjWc9SFNqvELCrcoSFUiV%2B4OqagcqJSV%2FI9ILv%2BN6pyvVVrejNX90Nfm5IBwAqKbc7LqOZ0ulZ4dqyF1nPl2J3YH%2FYUgPALUU7GXKuz0dUucOyUr5G0Yflv9o9xWyPqepzcvwHL5Dlmm%2FH0dHDPpc%2FyGRUxxTUn%2B49tpkc1qlr5NTQmSXUTv0bNMlVkr%2B57N5%2BqL5B3Z9IAtJRNRDXzz9cgKzK1%2FPBUkZOU2OTQ4LGteaqG76nQcJ13l5LSEKfrKB5wQ6fTl1AhJo4KV5KPFrjcZELuMlJIsuYBzW9OM26UDDK5BZBf6auSg5DQCy9L4K3Wpq%2FswVrZJLJIWV736pNL6J6QiByokA67fT9f9Dbio9oXIZSIW0gwUNT0jvIAYSBFcocCqKnG%2BmqZPmOoWt1U5OQwbqby8SRONdDSUSpmSUObQAtRwPaYQePfMK9Wy3vZofrkJOeAdmFJ3wmRb2em%2FO4L68o6WR1IGWkJrqoymcp9G9Nk8m1V%2FRkva0%2FKHSYFhHax%2BKInWncnj%2F%2BypWOK6gk7RHhqTdeCtJeVxtZWDn9fJQDW5QPG%2BqREZH5C787IsJY2aPYqBvFIPyjcDLP%2FpzOTLQGaRqCoCXIYwp8y3wAY6pgGqqYcxUakgVLnfC%2B%2BjYUTBXvIKYsjyxU21AYbSQ0W%2F9fPXlYXC1CZ3F60PFMt4IR2XQR7hUq3KRZMscUcAjcDquajB9mIN6rhIzqmeUwtl1l7hROPMiuQh76u2OvgJbglxChfwfxTq2HHEx9AwEuxlVxCqFYJd3qW34%2BFHqhvs5EzzcD16POG2HRFWrTD1SXD%2BcrvoweyFAat6jHpFNtw%2FIpyGiBPE&X-Amz-Signature=1d70f4ad9b685974dc4fc0579272573d5b40f7638b65003c65dadfb1d98a3bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2XJO7G%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjltgFWyFYYPrVimWh7jLWwRRxCoCYDtRXw8Jh4hOkwAiACI9ijDIi7tpYhAgkOrscay%2Fa31O2QoGmMvmAovmyvoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMif8On0KVpYTQmXxdKtwDQhGUGQxgGZBRI92oLLwrFjWc9SFNqvELCrcoSFUiV%2B4OqagcqJSV%2FI9ILv%2BN6pyvVVrejNX90Nfm5IBwAqKbc7LqOZ0ulZ4dqyF1nPl2J3YH%2FYUgPALUU7GXKuz0dUucOyUr5G0Yflv9o9xWyPqepzcvwHL5Dlmm%2FH0dHDPpc%2FyGRUxxTUn%2B49tpkc1qlr5NTQmSXUTv0bNMlVkr%2B57N5%2BqL5B3Z9IAtJRNRDXzz9cgKzK1%2FPBUkZOU2OTQ4LGteaqG76nQcJ13l5LSEKfrKB5wQ6fTl1AhJo4KV5KPFrjcZELuMlJIsuYBzW9OM26UDDK5BZBf6auSg5DQCy9L4K3Wpq%2FswVrZJLJIWV736pNL6J6QiByokA67fT9f9Dbio9oXIZSIW0gwUNT0jvIAYSBFcocCqKnG%2BmqZPmOoWt1U5OQwbqby8SRONdDSUSpmSUObQAtRwPaYQePfMK9Wy3vZofrkJOeAdmFJ3wmRb2em%2FO4L68o6WR1IGWkJrqoymcp9G9Nk8m1V%2FRkva0%2FKHSYFhHax%2BKInWncnj%2F%2BypWOK6gk7RHhqTdeCtJeVxtZWDn9fJQDW5QPG%2BqREZH5C787IsJY2aPYqBvFIPyjcDLP%2FpzOTLQGaRqCoCXIYwp8y3wAY6pgGqqYcxUakgVLnfC%2B%2BjYUTBXvIKYsjyxU21AYbSQ0W%2F9fPXlYXC1CZ3F60PFMt4IR2XQR7hUq3KRZMscUcAjcDquajB9mIN6rhIzqmeUwtl1l7hROPMiuQh76u2OvgJbglxChfwfxTq2HHEx9AwEuxlVxCqFYJd3qW34%2BFHqhvs5EzzcD16POG2HRFWrTD1SXD%2BcrvoweyFAat6jHpFNtw%2FIpyGiBPE&X-Amz-Signature=37fa229a41ca4d884d846093870fe921a284037bb46bd9a741e9f653a89776eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAR7XBMW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcWVvZM52uAeyCAncxTbjtkftlca%2BRvJqCSaeWqplGhAIhAIF6fFpXrpFSA5047C%2BEmh5TQ3bSySvUg5okd4Meg4%2BfKv8DCFYQABoMNjM3NDIzMTgzODA1Igy4iZbcaGx1wqWOs6sq3ANULKfu2NesiQ4LIdTBFlZKxbl9ysb12ooAjd3fQsuwMEcGnaau4oFMbdoHstKeuV5%2FSvqTzD27z4nuScUD%2FnQP7MGfVoqlhbuCNGODwShIXl7rimcWHodGy8CiU%2FWtLhAviMVMUKod7YFv8c3sEFVsz6L1oR%2BdsJdLjnPPCG3I6fQ439QDwrdX%2FwFrhM3PT5e%2FO4qDvM07UpftfYcyWveV40iMkca0t5ZjnyT%2Fo1TX2fChkJcbI6IaL9B8Vmtwc8%2FTjvalz9xhBjkzx4TowQWNQDmbiigvH0dVwyw%2BenovUje5i%2BrYlK%2FYrp%2BFaaOgzwFcrmw3Tsm7Uzbv0MK9ZscUXza5GtRsYfsFySmZR2TNtR4ACL2jwE1oyYEPrcNwFIAwwHrruHxX2C%2F34hTUXf9FjELchV%2BmUTX3kVjZCxlC11iCqaq5d%2BNzsvzHH%2BrC%2BeTdBVZGug%2B1gTIcTuU5kf0142MLzmaYCg%2F33Ez6AcXkLC35HPjodXJ0RZqwSn88ptvU3IZj0xiWr5q6nyn6iYXLPo0WuExEa5JytnkNrGo%2FhHFI3u0KyeP%2FySebSYXIS5le3W%2BDS9yewtrf0OpX3saBcOr1ribX0VEETIEGivCNsoZHhyCpTFSWHqPJdjDw7LbABjqkAT4yX13HEqcGJEJ2TEfMjQfWDqpNSx1herkgvprEj1T7Lxt2KW%2BAEHRTVgwGiOYQ4upY7HSyIskfSwCN5nANd33UIdjeaoBjFyIJwHxIJ2CHu7PkzSc%2Fedx7fNg79zwnbDGTR9o%2FuyTKdd3QVXWZw0ECmEMKHNeNXP%2B%2B03HqqXWhjsPLDp95IhVD1ceXaqi4DmvDPvzwCnLnd5jxtEVZq2mjvXnu&X-Amz-Signature=64ee4be27a318b1fcedf40b324632a7bb62116e488e2785fea956eb696efd4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQJNDX6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKU4bYwz%2BbijPs71jMPNafIaHy09habxWvOz2lReUZVwIhAM2JkGSqIZ9nqFAqNa%2BgnJKGpca%2F118VwZtFAdxBAfPmKv8DCFcQABoMNjM3NDIzMTgzODA1IgzKCOxTalBuP4eBd1gq3APt7hL1zoBCQCdgMf4pNpK4z61WEZAB9LNiE2%2BzUjFkj4a%2F3DCYCQTZlef%2FthRczpPN%2Bl4JvRiDv5R4NDEdBNal4ayh3nNFjGNpTHKjCnogxM2%2FzCRIt9EoThkMf9F1rmYhTG7IdneylvKHrUyrjFSpNYjvstO13FLdW5UCuKX8idcsCXimeZm55JecvIuOt0YcZvOn3elPlj1UJxmlOMyKs2enybG80NAPwx3oVmhaH33pjEnhwsr8Xu8FLteULYYiEnl03Ekg%2BgbLJBmKZ64R7JEJiaqyh31q%2FTGQiqTCUtYG07WU%2Fledsaow%2FgGmqFZmFhAbPWq56VnKHtmv33NwZqxxphYWctQXIfZGFzyT2g1srZhCXP2ONdYlfeWilTpa%2FtadniXryX4he8bXAHL%2BbpdzqeHe62OctnJo2eZ%2B1qSdT2VPwmDHFj3DSpwMZDQ%2BN6lHQ6CXdfnVvl7qRyqFDBcXydK%2BlcFolDtdIIrbvP5GRhdbdUBWGXFWuH8hnFMHrkqeKJSxPvRdNZM%2B%2BLIUq9q6HUHrKWIT4EADk1n7O2FZARu64eWmo%2BDhkMgROIW09LIVKpbzXG%2FAJ%2FLSXyOW0dAq3dVKsFrbDMnHD4J%2FAU3B%2Bf0SgzOiemjlJjDngbfABjqkAVU7QzY4jpiVoimZKBD2TLzCR6bver6xfzhVOMWNjQyg%2BfHW%2FN28jqQQ9R%2FcM6XeUzl2i2JW3hUhQIMcpsmO40JOTrzXtSjCpVxdZCquxlGwQUm5ZU1aqKSzNSUhcyGbFQbsWurL3DeDsSQ%2F%2Bdw4trkwJ4qVczWousWo2KoCORCIVYkxaCFTa8Lml2%2Bdn7yNUjU3CiCYG%2F9MEZB2nw8BpK2Vbioc&X-Amz-Signature=3e67ea4bc81e6e75b8f13b05e00de76ebda256f6b9d11455626a97b18ebf345d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN2XJO7G%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjltgFWyFYYPrVimWh7jLWwRRxCoCYDtRXw8Jh4hOkwAiACI9ijDIi7tpYhAgkOrscay%2Fa31O2QoGmMvmAovmyvoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMif8On0KVpYTQmXxdKtwDQhGUGQxgGZBRI92oLLwrFjWc9SFNqvELCrcoSFUiV%2B4OqagcqJSV%2FI9ILv%2BN6pyvVVrejNX90Nfm5IBwAqKbc7LqOZ0ulZ4dqyF1nPl2J3YH%2FYUgPALUU7GXKuz0dUucOyUr5G0Yflv9o9xWyPqepzcvwHL5Dlmm%2FH0dHDPpc%2FyGRUxxTUn%2B49tpkc1qlr5NTQmSXUTv0bNMlVkr%2B57N5%2BqL5B3Z9IAtJRNRDXzz9cgKzK1%2FPBUkZOU2OTQ4LGteaqG76nQcJ13l5LSEKfrKB5wQ6fTl1AhJo4KV5KPFrjcZELuMlJIsuYBzW9OM26UDDK5BZBf6auSg5DQCy9L4K3Wpq%2FswVrZJLJIWV736pNL6J6QiByokA67fT9f9Dbio9oXIZSIW0gwUNT0jvIAYSBFcocCqKnG%2BmqZPmOoWt1U5OQwbqby8SRONdDSUSpmSUObQAtRwPaYQePfMK9Wy3vZofrkJOeAdmFJ3wmRb2em%2FO4L68o6WR1IGWkJrqoymcp9G9Nk8m1V%2FRkva0%2FKHSYFhHax%2BKInWncnj%2F%2BypWOK6gk7RHhqTdeCtJeVxtZWDn9fJQDW5QPG%2BqREZH5C787IsJY2aPYqBvFIPyjcDLP%2FpzOTLQGaRqCoCXIYwp8y3wAY6pgGqqYcxUakgVLnfC%2B%2BjYUTBXvIKYsjyxU21AYbSQ0W%2F9fPXlYXC1CZ3F60PFMt4IR2XQR7hUq3KRZMscUcAjcDquajB9mIN6rhIzqmeUwtl1l7hROPMiuQh76u2OvgJbglxChfwfxTq2HHEx9AwEuxlVxCqFYJd3qW34%2BFHqhvs5EzzcD16POG2HRFWrTD1SXD%2BcrvoweyFAat6jHpFNtw%2FIpyGiBPE&X-Amz-Signature=eb0fd01ad5502fafd52debee0c340b04f5e30818c3f8c2f915cd14f67bf5571b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
