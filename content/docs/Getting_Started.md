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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJJI5FJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDi1%2B73%2FBsSGlfSZJQYycIG6odHkDk5dtObKfV23%2FBUJwIgUzPdzwhCr3FsffF79u3ow3NuCNgutgDskWOldWq6rH4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIut4xP%2FHvBC0EP2vyrcA9lZybvgIcpJe0VaU2tPxeiQK%2FZnKN0TfRwM4EDyTxLj3ggkL4YZPgj0AVH6WtYeUb9Ftjlh0aFRaKhIU%2FMpd%2F1buNHB1MlKDJUC46niEZ1ZH6Pqti4Yd4S36cdET8L9eTKDYOCEU4iB%2Bjejm8hnEntJfpnz5tRFAWuU54HQ2wnUUeYPUmR7iTH9J9AXFw4ZtdnzQbB5%2BRfTRxjRi4vrML3ubTU8EEWixHyJdHJal46ynlufR47WVLuHNyY3PB3Deo3Q8eDU41S5o%2FNtNkix58HsQ81xoQJOV6x%2B3X%2BdqSCiRGql%2FQkCY3vJSvfFwtoE9u81iStKcwql%2FtL5%2BteeIprlkR6FbDwMGsgoTeDkjWsjss1%2BGj0vuWLsR5t9hLzna2RCPZTAXiMUIsolp5NzZwkeNageFfxp6vZ7mR6jgj5P0wHMPjZC0Weh8Y3zvzeRlkxcIoPh0dfLYz6QoIUgajqxtZtiwBjJ5pu8uShsGF8zZ%2FYzbmRJSColODE3%2BN1FZkhkBiPoszkdpxhKINF%2FDbK41sIXaw2v5GaW345q5mjrfHpjtxrnlUrLlnZ9AqGSayI0xsD9xLYEFddaDnWNs6%2BmVYnIkyM0vokl6Bqlyok%2BB3m1TRnuwtO7jrBnMNm5ysEGOqUB1X7%2BPBZ3kRr4gbrsmuVX8BhtFQDv1IDGnXHFiAu%2BCizzSzVxP54hlVDhBimh0OYENCEnKGuPmmO%2F6DGJFr3FqoLfN%2F8VbbKD%2FN6QRXpNPA%2FbirKS%2FpEhA2OTY78RHqS%2F%2FWKjRsuUPrns0X%2FNYSH95L8K9Dv281tbPAu%2FnuzQLwVV5g0F1YUajeMFMGhIigJsgIvn1tQ1%2B5gz3upCYlWZ09fTbZ8M&X-Amz-Signature=784ee7da45baea0bbdb672a06cec6de274afeb22818cef5ceab159ea599d5931&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJJI5FJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDi1%2B73%2FBsSGlfSZJQYycIG6odHkDk5dtObKfV23%2FBUJwIgUzPdzwhCr3FsffF79u3ow3NuCNgutgDskWOldWq6rH4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIut4xP%2FHvBC0EP2vyrcA9lZybvgIcpJe0VaU2tPxeiQK%2FZnKN0TfRwM4EDyTxLj3ggkL4YZPgj0AVH6WtYeUb9Ftjlh0aFRaKhIU%2FMpd%2F1buNHB1MlKDJUC46niEZ1ZH6Pqti4Yd4S36cdET8L9eTKDYOCEU4iB%2Bjejm8hnEntJfpnz5tRFAWuU54HQ2wnUUeYPUmR7iTH9J9AXFw4ZtdnzQbB5%2BRfTRxjRi4vrML3ubTU8EEWixHyJdHJal46ynlufR47WVLuHNyY3PB3Deo3Q8eDU41S5o%2FNtNkix58HsQ81xoQJOV6x%2B3X%2BdqSCiRGql%2FQkCY3vJSvfFwtoE9u81iStKcwql%2FtL5%2BteeIprlkR6FbDwMGsgoTeDkjWsjss1%2BGj0vuWLsR5t9hLzna2RCPZTAXiMUIsolp5NzZwkeNageFfxp6vZ7mR6jgj5P0wHMPjZC0Weh8Y3zvzeRlkxcIoPh0dfLYz6QoIUgajqxtZtiwBjJ5pu8uShsGF8zZ%2FYzbmRJSColODE3%2BN1FZkhkBiPoszkdpxhKINF%2FDbK41sIXaw2v5GaW345q5mjrfHpjtxrnlUrLlnZ9AqGSayI0xsD9xLYEFddaDnWNs6%2BmVYnIkyM0vokl6Bqlyok%2BB3m1TRnuwtO7jrBnMNm5ysEGOqUB1X7%2BPBZ3kRr4gbrsmuVX8BhtFQDv1IDGnXHFiAu%2BCizzSzVxP54hlVDhBimh0OYENCEnKGuPmmO%2F6DGJFr3FqoLfN%2F8VbbKD%2FN6QRXpNPA%2FbirKS%2FpEhA2OTY78RHqS%2F%2FWKjRsuUPrns0X%2FNYSH95L8K9Dv281tbPAu%2FnuzQLwVV5g0F1YUajeMFMGhIigJsgIvn1tQ1%2B5gz3upCYlWZ09fTbZ8M&X-Amz-Signature=03034c90e76ccf46be05a51b48d4a32570a6efc052364d64006a5fe10e71327e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJJI5FJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDi1%2B73%2FBsSGlfSZJQYycIG6odHkDk5dtObKfV23%2FBUJwIgUzPdzwhCr3FsffF79u3ow3NuCNgutgDskWOldWq6rH4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIut4xP%2FHvBC0EP2vyrcA9lZybvgIcpJe0VaU2tPxeiQK%2FZnKN0TfRwM4EDyTxLj3ggkL4YZPgj0AVH6WtYeUb9Ftjlh0aFRaKhIU%2FMpd%2F1buNHB1MlKDJUC46niEZ1ZH6Pqti4Yd4S36cdET8L9eTKDYOCEU4iB%2Bjejm8hnEntJfpnz5tRFAWuU54HQ2wnUUeYPUmR7iTH9J9AXFw4ZtdnzQbB5%2BRfTRxjRi4vrML3ubTU8EEWixHyJdHJal46ynlufR47WVLuHNyY3PB3Deo3Q8eDU41S5o%2FNtNkix58HsQ81xoQJOV6x%2B3X%2BdqSCiRGql%2FQkCY3vJSvfFwtoE9u81iStKcwql%2FtL5%2BteeIprlkR6FbDwMGsgoTeDkjWsjss1%2BGj0vuWLsR5t9hLzna2RCPZTAXiMUIsolp5NzZwkeNageFfxp6vZ7mR6jgj5P0wHMPjZC0Weh8Y3zvzeRlkxcIoPh0dfLYz6QoIUgajqxtZtiwBjJ5pu8uShsGF8zZ%2FYzbmRJSColODE3%2BN1FZkhkBiPoszkdpxhKINF%2FDbK41sIXaw2v5GaW345q5mjrfHpjtxrnlUrLlnZ9AqGSayI0xsD9xLYEFddaDnWNs6%2BmVYnIkyM0vokl6Bqlyok%2BB3m1TRnuwtO7jrBnMNm5ysEGOqUB1X7%2BPBZ3kRr4gbrsmuVX8BhtFQDv1IDGnXHFiAu%2BCizzSzVxP54hlVDhBimh0OYENCEnKGuPmmO%2F6DGJFr3FqoLfN%2F8VbbKD%2FN6QRXpNPA%2FbirKS%2FpEhA2OTY78RHqS%2F%2FWKjRsuUPrns0X%2FNYSH95L8K9Dv281tbPAu%2FnuzQLwVV5g0F1YUajeMFMGhIigJsgIvn1tQ1%2B5gz3upCYlWZ09fTbZ8M&X-Amz-Signature=2c048ce1ad82484809a23c9352edd60a22d9c1011553221b257f76cf6b1fd0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYYTPS5W%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH%2Fe36JGhJNwKWmMMc5dGfai%2BwO3n2cUvleq06wNKJtuAiBbPxswGcscbi6%2Fg5pn%2BnZTM9ZbGNHsg%2FU2Vn2mzLO58Cr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMcuyeoGiy94MXqk9cKtwDMdaoiq5%2Fng4tej6Xb%2BETZnkNzLBVq7haQn6zHWvFFN0vdnPjZwCt2ncSqzNhI35a9EY92oUnwSk%2BphkzCX7tCxzjOhbOlZUIWBhEMAwvEZcrSno%2Fx0fyL6PQRTMNHcbxXbtmIuy6k8tXYTgbchBEHOTDVT2lWCT%2Fp4bt%2F5wRPx9e2T7Nh2xaT4OBkGadYGoccjEcMLCH%2Bhk3bpr7H6xJhrWzoziRhoPht9m93L4x2rKJ8TEg0UI%2FlseqTfBVPQmbwYK0CaT3rvFjDLEVO2UecQdRhSEeLxrHkmnq5u%2F%2FML4N5U1Ij2X2dkkmVQ%2BhqZDRZ2cZvtjiSR12RF70eO5sAgTPGsSCnHSdNvOWdnjDdVmkEoGBhagrmqBbsRfHOziKNIxAmCcg8Gj6au7k1ZJfdid24yxqzBmZq6E0rZ1rWeEctTSHvdO%2BWVVKTjqCr8Cv1czlrTbqoIowryjrQQ50cAsqGVhkCC6xUS4gC4se1Sm6UqayrcrFCToIbryzl9Sw5mKQpPUAD8kCtQvjLxCqljHtf%2F3FxqHoydUTHtwTDohzvlLU8tTghu3KpPPzmMHK88H3%2FnuyNX7DYsb2DK902VSQUc2uTVjcauchWmUQeCDTSLNBf8AaHvuV2P8w%2BbjKwQY6pgFOG0yykwpi68HDTLQE9MLdeps7K2VL18kLsPATpbkXtnEkFeYJutK%2Bo4meovouGJec0TLJgcAI9JuVNCipWPTNQ2OYB%2FjIgRPemGWix935GfURkCYcZzyOnLvLvej5zkCDOznEVzLqAslbBNoeBvJ8jwESRTCpvPrMGWXGDTzohoIH7ofWMDjfno%2FloQM4zl7PmAhQ7t2aDp1vvxQcCAq%2Bo%2Fl99o%2B7&X-Amz-Signature=2f5e50cee1a2817c83d43846fb11ef4915a3119a005607fd938f2c19ec33f9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIRG6IA2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvuoq2qeGm580lFy38cLr6712GMAxnuofI9jZeCF4SLgIgBw4AolJyaiQaKbHn9LLz4wtqbCkktVv%2Br2YVCHkQE7Mq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJIHHNh9Cx%2FKNBlxzyrcAxmeiFv4iDcXfwSh0KfqWoeEy%2FLExV%2BmpvfT3Paq2v%2Bx6IMSXzlp%2BTssJwjKbWDYSfuNMOn%2F3ym0t9kHyIY44lh3srPor5JYNLcXBRa7nJHu7pJsHrqv22Swbg3MHhon6SBI0hOzDk5kSEnSZn6tKum7eQqTFd2iUb3Qy0f0%2FFwYCpjIov4K8nIuTYRSf5F0k1Wn2u7yz0UZJrNKNLUPPTLXU3V45V5ADocg%2FRsb5ncGnzQ5Jf3GFemKjuXuVAw5sCWRz3O8q%2BsR%2FtLN%2FuNEcquzE0yJRjzFXgYNcIZaSwVU%2BTjDxinbrVGDJqlXyd5xXN2np5WLxAuIVSZkAWIZcuNRGNBvsgAY4idjrzTKPlzlRezLaENdekr4HQ%2FIclMW3FS83ejtLSy19AZQ8zPXkSW0%2FbO3jVjBZZbG4QymVSkJHGuokFYXkcdMlymS2IB9PAf2wSRHuLzlOgV171%2B1czH5AvN%2FB73mcJrphDO4axTcb0EvFTHD9dO0bZN6cv5ximcU0dV22R4MexeASY%2BvNCbsW16BoTxGtqpJYiXQt%2BcVATpQKq2mErwrfdP91PL4oLaRORYjSOQYONvEgTKzNOrDZHAYYTrikWcCiFqAPj4sn8rDOq0HaYL2I9iDMIe5ysEGOqUBM3SXtleGVLzYFv9%2FO9%2BBIBlbBb%2FpgKhsE3wNNWyGl7FBAz9sk8FJbOPkPqocUx1TwLmFOVvwWST6H0nctageQKJ9Cvhg4aWlWm498%2B6WsdlB2XeCxQfPkMiorYJ27K0o9XSrxH7Jg7uxOHgruz6dgfm%2FiUS81lKMZv6vSWJpIGiwGBvO9ELvA9XdrcrnBsBJ2gycS0mPejGqEIv5yxi8MR8kQDga&X-Amz-Signature=4b10253a0c88b60c61fddc6c41ca75821e291d3bb23b53a391bfa9472628960c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJJI5FJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDi1%2B73%2FBsSGlfSZJQYycIG6odHkDk5dtObKfV23%2FBUJwIgUzPdzwhCr3FsffF79u3ow3NuCNgutgDskWOldWq6rH4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIut4xP%2FHvBC0EP2vyrcA9lZybvgIcpJe0VaU2tPxeiQK%2FZnKN0TfRwM4EDyTxLj3ggkL4YZPgj0AVH6WtYeUb9Ftjlh0aFRaKhIU%2FMpd%2F1buNHB1MlKDJUC46niEZ1ZH6Pqti4Yd4S36cdET8L9eTKDYOCEU4iB%2Bjejm8hnEntJfpnz5tRFAWuU54HQ2wnUUeYPUmR7iTH9J9AXFw4ZtdnzQbB5%2BRfTRxjRi4vrML3ubTU8EEWixHyJdHJal46ynlufR47WVLuHNyY3PB3Deo3Q8eDU41S5o%2FNtNkix58HsQ81xoQJOV6x%2B3X%2BdqSCiRGql%2FQkCY3vJSvfFwtoE9u81iStKcwql%2FtL5%2BteeIprlkR6FbDwMGsgoTeDkjWsjss1%2BGj0vuWLsR5t9hLzna2RCPZTAXiMUIsolp5NzZwkeNageFfxp6vZ7mR6jgj5P0wHMPjZC0Weh8Y3zvzeRlkxcIoPh0dfLYz6QoIUgajqxtZtiwBjJ5pu8uShsGF8zZ%2FYzbmRJSColODE3%2BN1FZkhkBiPoszkdpxhKINF%2FDbK41sIXaw2v5GaW345q5mjrfHpjtxrnlUrLlnZ9AqGSayI0xsD9xLYEFddaDnWNs6%2BmVYnIkyM0vokl6Bqlyok%2BB3m1TRnuwtO7jrBnMNm5ysEGOqUB1X7%2BPBZ3kRr4gbrsmuVX8BhtFQDv1IDGnXHFiAu%2BCizzSzVxP54hlVDhBimh0OYENCEnKGuPmmO%2F6DGJFr3FqoLfN%2F8VbbKD%2FN6QRXpNPA%2FbirKS%2FpEhA2OTY78RHqS%2F%2FWKjRsuUPrns0X%2FNYSH95L8K9Dv281tbPAu%2FnuzQLwVV5g0F1YUajeMFMGhIigJsgIvn1tQ1%2B5gz3upCYlWZ09fTbZ8M&X-Amz-Signature=8dfed2a4ead2bd21618c622a82ea18a716dc16195fae5724b5c12177c3e2b405&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
