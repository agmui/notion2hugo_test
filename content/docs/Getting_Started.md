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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHCHY7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigssk2xIrYGdQ%2Fwx6b8c%2B%2BJu1TM9LhEaiC6Y0FyfFlAiEA7hYx09dtkHuqsTLugdwQ%2BiGW6xgmGCy7OosUlu8zGY8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGmKCzBXuxwM8ycUMyrcA9yHsRHC0PwEYtFHE%2FQA5ATz9gfkWfxbIRvV%2F%2FN2E0PO8zqrzcCnuRqCfnfIvXD85U71gIpJu3K6CkWxckCjrDbREeVLmhF7QO1ovFeKsP2aeS1%2FA2kOEU25yANKZ0FWtWb4zL%2BEAsBqYRFD%2F0p48Y3mcYDeOVZAj2J6Z2Z02tp%2FCYCtiZGpS%2BE1dni8z8bJwi55Cxk57XLezDUieqMWMEiHEmVa%2BNbviI%2BMAAzg8heko0RMQqKq6Br%2FWDvLEomKM2cGuFpJ9HuR98fKuOq93yrGoBr40UtSE1jrs7MKyiuzr50UySWftZVIvtG3jxtMT3qFWQZa5d9DPhA9fdnBvWftSAgnzRg6N131AbmsJpN%2FlxRvd6TmNYN1A68q2vbb5P8i13H3ao5wXiUSfhrotzD0dlwhOxnDcostQe%2FegP7jTPbwnpVyQMKlOjUKwDHOGS2UrrAEUs0kAR7jm%2FnVn99kgXCJaN3FJxvaiBX5%2FzbMU%2FE2NreLyzz7%2B7hr%2FeWdXqmqWecoti9UoQa0u8ZwdDe%2Ba6BZRawlIy5S9xESeswlrOsKdfHq%2BE17QE22BJyQ2z0xyY8WOjCSYXs8g%2B5Ng02i8j9PqMeL1oZZB4FWzOuDqjB68wAYkjWWtS6fMOie8cQGOqUBpEbhBX5NWvCLpwS1T8ZggGFnCc8qAnp0RVulBvklvYVi2mtV2yyHKVeypuxkNDp%2BmOIdpF3Blop59BlWcdvdIIwL5ssZXlX5t2CELcoMV7uej1sdTv6nS%2B3XoUdcs8CDrD2rolGgZ51QR32WAnlnWXu1nw3r3t4NPJPb%2BmbVVw63W3mDanXci4HvSeS5kqfdf4exTm87dO0UqkPtjsBJt6g%2F1iXj&X-Amz-Signature=751e244255f12da382109ac87829a00683ca72799008108ebb15e0d05fcbc4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHCHY7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigssk2xIrYGdQ%2Fwx6b8c%2B%2BJu1TM9LhEaiC6Y0FyfFlAiEA7hYx09dtkHuqsTLugdwQ%2BiGW6xgmGCy7OosUlu8zGY8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGmKCzBXuxwM8ycUMyrcA9yHsRHC0PwEYtFHE%2FQA5ATz9gfkWfxbIRvV%2F%2FN2E0PO8zqrzcCnuRqCfnfIvXD85U71gIpJu3K6CkWxckCjrDbREeVLmhF7QO1ovFeKsP2aeS1%2FA2kOEU25yANKZ0FWtWb4zL%2BEAsBqYRFD%2F0p48Y3mcYDeOVZAj2J6Z2Z02tp%2FCYCtiZGpS%2BE1dni8z8bJwi55Cxk57XLezDUieqMWMEiHEmVa%2BNbviI%2BMAAzg8heko0RMQqKq6Br%2FWDvLEomKM2cGuFpJ9HuR98fKuOq93yrGoBr40UtSE1jrs7MKyiuzr50UySWftZVIvtG3jxtMT3qFWQZa5d9DPhA9fdnBvWftSAgnzRg6N131AbmsJpN%2FlxRvd6TmNYN1A68q2vbb5P8i13H3ao5wXiUSfhrotzD0dlwhOxnDcostQe%2FegP7jTPbwnpVyQMKlOjUKwDHOGS2UrrAEUs0kAR7jm%2FnVn99kgXCJaN3FJxvaiBX5%2FzbMU%2FE2NreLyzz7%2B7hr%2FeWdXqmqWecoti9UoQa0u8ZwdDe%2Ba6BZRawlIy5S9xESeswlrOsKdfHq%2BE17QE22BJyQ2z0xyY8WOjCSYXs8g%2B5Ng02i8j9PqMeL1oZZB4FWzOuDqjB68wAYkjWWtS6fMOie8cQGOqUBpEbhBX5NWvCLpwS1T8ZggGFnCc8qAnp0RVulBvklvYVi2mtV2yyHKVeypuxkNDp%2BmOIdpF3Blop59BlWcdvdIIwL5ssZXlX5t2CELcoMV7uej1sdTv6nS%2B3XoUdcs8CDrD2rolGgZ51QR32WAnlnWXu1nw3r3t4NPJPb%2BmbVVw63W3mDanXci4HvSeS5kqfdf4exTm87dO0UqkPtjsBJt6g%2F1iXj&X-Amz-Signature=aaf55a6b0bbf38623c2bac414b2f5d246fe3bb774b3af670aa0aa94baf7dfc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHCHY7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigssk2xIrYGdQ%2Fwx6b8c%2B%2BJu1TM9LhEaiC6Y0FyfFlAiEA7hYx09dtkHuqsTLugdwQ%2BiGW6xgmGCy7OosUlu8zGY8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGmKCzBXuxwM8ycUMyrcA9yHsRHC0PwEYtFHE%2FQA5ATz9gfkWfxbIRvV%2F%2FN2E0PO8zqrzcCnuRqCfnfIvXD85U71gIpJu3K6CkWxckCjrDbREeVLmhF7QO1ovFeKsP2aeS1%2FA2kOEU25yANKZ0FWtWb4zL%2BEAsBqYRFD%2F0p48Y3mcYDeOVZAj2J6Z2Z02tp%2FCYCtiZGpS%2BE1dni8z8bJwi55Cxk57XLezDUieqMWMEiHEmVa%2BNbviI%2BMAAzg8heko0RMQqKq6Br%2FWDvLEomKM2cGuFpJ9HuR98fKuOq93yrGoBr40UtSE1jrs7MKyiuzr50UySWftZVIvtG3jxtMT3qFWQZa5d9DPhA9fdnBvWftSAgnzRg6N131AbmsJpN%2FlxRvd6TmNYN1A68q2vbb5P8i13H3ao5wXiUSfhrotzD0dlwhOxnDcostQe%2FegP7jTPbwnpVyQMKlOjUKwDHOGS2UrrAEUs0kAR7jm%2FnVn99kgXCJaN3FJxvaiBX5%2FzbMU%2FE2NreLyzz7%2B7hr%2FeWdXqmqWecoti9UoQa0u8ZwdDe%2Ba6BZRawlIy5S9xESeswlrOsKdfHq%2BE17QE22BJyQ2z0xyY8WOjCSYXs8g%2B5Ng02i8j9PqMeL1oZZB4FWzOuDqjB68wAYkjWWtS6fMOie8cQGOqUBpEbhBX5NWvCLpwS1T8ZggGFnCc8qAnp0RVulBvklvYVi2mtV2yyHKVeypuxkNDp%2BmOIdpF3Blop59BlWcdvdIIwL5ssZXlX5t2CELcoMV7uej1sdTv6nS%2B3XoUdcs8CDrD2rolGgZ51QR32WAnlnWXu1nw3r3t4NPJPb%2BmbVVw63W3mDanXci4HvSeS5kqfdf4exTm87dO0UqkPtjsBJt6g%2F1iXj&X-Amz-Signature=628b5b1e99c776927241209428229c27741d36c82897e704f3d790cf8d959b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3RRWCBA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNhg%2F2%2FD88FU%2BkEoflX8OsOqZhvHEycfzj8qcUqczh5gIgW0QOqm45KZhrutknUsn1y3a6eaqGeJUDq9DmyIkGz8Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDByfhKBYlQs8R0GZ7SrcA18qXOw7NayLeJ1tgsgMDA0cgxmxy1LE2FyL9sfjyQ9GNS5lxwSlSD372UeqvDuHShLqYS8taYR12eFNfT6VKKmA6ZlS2gJRAiMvmyQ14ik%2BBrH3H7Gn7nTTG6ukg6IYt0%2BJbr11aqPiabOKzUekGVdb9Hg0PWepd%2FaYVNqMj6I8HhAENbqPqmBu10Xc5f%2FMganqVlFkfYyBw27TBMtZl5gyAg3g32eZmz5DZj%2B9pM4jgXvcN4oz7DDuZV%2FlZhd7ya5edO3jwGFQo1lOl0tIJIny8JuMuMhlLuPQidRzErmrBUW0pV9wKdAdKJGRn5ATNNyZKl3ag4CmDidDU58OaP7MSHtR147%2Bz%2B1ojwT%2BFsiA1X6TDiQGg3YXI%2F1Wv17ypo43bcymelYKyOzULc4bUcOTnN8ciOGVKYjNgA8t7xSpCOm2l0EV2G1O8Ycw2ltXP4wDhn%2BkpG2bvqHCt1vH0CCcUqxQxdzqMf7OrRE5EOY3iwk1mhspOd14k7gZYsI2FS%2Fw1IURXrumszFNmiDH8mD3FK1paz8BMeGAUb5D2T6Fm4iSc%2F6nWGDtXBWexB18RKbeJLSjZLRZvWo9rdikQAZFuEqrLHMe3ZgM4kf0UtSQfQrIN1TFECt1vEi1MMye8cQGOqUBQ9ZM1if9aOdxOVGH0kKmcBDxaRRkWzn%2B2Yp4OP5YUuygm6la5w04SygbZdId4p7tWXlD4gvDIWCh3rgQpdnfb5R30YN%2BOI%2FCkKTLM5GFly5XJKp2SPXOwA0a98qI%2BHsfWSr%2BcMDzQAW1MVNf7LZsVbvgIRIQUUGQs2M9OWtlIMfIZlij2ZQ%2B8HL4DZRZF89JAw0iFEdae57AuZtGvC%2BlFDisTSzO&X-Amz-Signature=8f5289b9bfd579b4d5e702c1d321458dcbb4832374794d65958b7c2fce4d8986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA2EWM3L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApOIVekKI1euaPcqkgXat%2FkrJYsc3bRaJvo47dRdfFwAiEAjVloEhr%2BpWqyAHGp6v6Xna0bnvPKsuYeV5MVXn4ypH4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLoeTD7oCUHIO4TpPyrcA2Pr6oiDeAIz7qVVB52nOUhOChvBHK1zS02tGky5qGYiJ1jXzhlxCEPf54ZoZai6A5%2BRkexoZfSlBUZbk36dyhawK%2BRw8y3Wp%2BxE6dyB8xrUUEOfiexbgjhV3TTDLGSXl%2BbZmf89M7BEwjZzL8ihYgeRfEqyuVc833WR27KgNE9K%2F48hMA6w3BJFB%2FhGw3NebUSP5gbMsFhBatl4X5l4WdUt5N5JnbeXS1RHMBnIDN%2B4WnkZBBtHT2d3rz9enO7I%2B%2F1fjfLEDTCK75ZtF8bfHE4%2BcbD8VJRcFsmtbhuOOJNpJNcdewF72IUrq6MXLNALxAceju1PBt1RFdv4BvrLUN6LBpXwwnxs%2FbDll6BmdRcBvxRxy3BE9sSrtOG6u8Y52a2DsyDcIkMhZyPMqBlfZaB3WXuZWfVVkIEVlci1ZvYPS7HEi0efurmXbJiyahfD11LEw8taU%2BfW1RSgPQynx1f%2Fv5VS0Srv9ckHIInygpNJE07mLXJ0Kb4OOHFVcuIs3Xo2yYiWu0nXy99FURz4EoKjIwRcclaBphUAv2EFHc5WWhke3kSwz5GK2IiYmiUsgLQyYrWIqJNLam4iEsVx5hW%2BMy8i5giE9PCLUv2CpY3LBSySTxYazIyW1sqvMKug8cQGOqUBHS6PH62YSirQzSt69Nk7VEuBNlUro5PNYmeIusRD%2BY0AznJyVh30RY82pD28AgyyBybX3FZfY9Tt6redaseBadt29T7X%2FkLgXXl%2FrOJRJsGs4zwLLhke4yxNhfghGp23g7WPdylU7e4jA435HY1vRs2Fhf2uJo3fKLwk30DWM9S8tP7yQ67xxjc0fHs6kbM9OkAJd6nNYlaPvz9Ne2oJUbIUJL27&X-Amz-Signature=3058149dac51697d15572186030f6cee47251cea1f716ac2a25db45db29bce90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHCHY7R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBigssk2xIrYGdQ%2Fwx6b8c%2B%2BJu1TM9LhEaiC6Y0FyfFlAiEA7hYx09dtkHuqsTLugdwQ%2BiGW6xgmGCy7OosUlu8zGY8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGmKCzBXuxwM8ycUMyrcA9yHsRHC0PwEYtFHE%2FQA5ATz9gfkWfxbIRvV%2F%2FN2E0PO8zqrzcCnuRqCfnfIvXD85U71gIpJu3K6CkWxckCjrDbREeVLmhF7QO1ovFeKsP2aeS1%2FA2kOEU25yANKZ0FWtWb4zL%2BEAsBqYRFD%2F0p48Y3mcYDeOVZAj2J6Z2Z02tp%2FCYCtiZGpS%2BE1dni8z8bJwi55Cxk57XLezDUieqMWMEiHEmVa%2BNbviI%2BMAAzg8heko0RMQqKq6Br%2FWDvLEomKM2cGuFpJ9HuR98fKuOq93yrGoBr40UtSE1jrs7MKyiuzr50UySWftZVIvtG3jxtMT3qFWQZa5d9DPhA9fdnBvWftSAgnzRg6N131AbmsJpN%2FlxRvd6TmNYN1A68q2vbb5P8i13H3ao5wXiUSfhrotzD0dlwhOxnDcostQe%2FegP7jTPbwnpVyQMKlOjUKwDHOGS2UrrAEUs0kAR7jm%2FnVn99kgXCJaN3FJxvaiBX5%2FzbMU%2FE2NreLyzz7%2B7hr%2FeWdXqmqWecoti9UoQa0u8ZwdDe%2Ba6BZRawlIy5S9xESeswlrOsKdfHq%2BE17QE22BJyQ2z0xyY8WOjCSYXs8g%2B5Ng02i8j9PqMeL1oZZB4FWzOuDqjB68wAYkjWWtS6fMOie8cQGOqUBpEbhBX5NWvCLpwS1T8ZggGFnCc8qAnp0RVulBvklvYVi2mtV2yyHKVeypuxkNDp%2BmOIdpF3Blop59BlWcdvdIIwL5ssZXlX5t2CELcoMV7uej1sdTv6nS%2B3XoUdcs8CDrD2rolGgZ51QR32WAnlnWXu1nw3r3t4NPJPb%2BmbVVw63W3mDanXci4HvSeS5kqfdf4exTm87dO0UqkPtjsBJt6g%2F1iXj&X-Amz-Signature=313e69b256dee488ff6dcb7c3393cb03629da9d147a4f1ff197eefea0a0fa280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
