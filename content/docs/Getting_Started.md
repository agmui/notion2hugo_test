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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODDJCHS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwYJDsS%2Fzw%2BRntv6N9VfcluKyBtZpXoPj9b2PzjMVxdgIgYr5TMRSWqazT8Ezk9W8cgnPpt%2BUxaPwEkW0czeevUOYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxBerOwgHesSKH%2FCrcA3SNC7pUZRMpc1GzpXBTT4ntxEvJ8jo%2BEw2%2F1pQgIlMs5ww2%2BoIWfrXTkNSGcrm%2BqbNn%2BfJqd0dmnHa3JBMvh3SspQtJoKpQTJCDWWpua5LEWYqNWqyy1aTs3oZhDlti2P%2BdnyZ%2BuSueUWzS5KUOfEI3%2BUhR8Fc8qeLUXdxK2dDuKdYw9CHnyX6goYP6O1IWcmZ3RZIiONp3%2BPbWBru7h2xiOYK%2Fu6uzezQKM%2B0m41L4ExnUEIrGcvxWhvsK8R1%2BDCTm%2FLcIsDHUp4um4qzbEuOHxE8CbXnLkJ255OcrQKlbUZ4mKMRgYMo2DsbPkNgsWO1oEiXcG2CIDQXxB%2B%2BiERb8I4NXxH76VoiN0jehuMQkwNuI3%2BjwytASnlhNG8xc4BNZ6x7iSrmTe8tzETxVX%2FS%2BzCiXI0%2FpemufV%2FKCvRLxn1SsY8nKsQYI3hDZEBMNHvpC6SdTlaacSnG86lpbc62pb1uqtAF52%2BhWZf1RoiujX%2FzFo%2BhYDIe%2Bq27OUKUAxEWm5fw5cldwfsz0Bqg3ZVDsTvdb8XGFuveUoxKIMEWu9brOPGBqbj49ccAzYylmgBtS%2BQkeiT0IAa9nvv3srBv1ZTAi%2FybNii7ZoBs61zoSyzvSsCtIwN2qod4hMIfI7cEGOqUBsx1La7Hp39xrlFk7j%2B72OoVJu7SNLL%2F5gACyFiF7KS7N30OfJd3p4reh62RtHdRfhvxabaiw73bWLEjE6LSFPEnWqxTr0%2BFJE1qDIVWC90StQKRoWw4scv2D5Js4yTTyGRPXs5GlKljK5ZXUI6wXU8c46jsk2IaErIbysCWLjzBtCi9CyhJ8Ci%2FZin%2FtoDJ20zfy1vtFVs%2BZHsPg6pjBZ%2BePNL0O&X-Amz-Signature=b01244e500c818fa998cf67a57726b92d045bdadd23b04aeaea73719424993fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODDJCHS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwYJDsS%2Fzw%2BRntv6N9VfcluKyBtZpXoPj9b2PzjMVxdgIgYr5TMRSWqazT8Ezk9W8cgnPpt%2BUxaPwEkW0czeevUOYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxBerOwgHesSKH%2FCrcA3SNC7pUZRMpc1GzpXBTT4ntxEvJ8jo%2BEw2%2F1pQgIlMs5ww2%2BoIWfrXTkNSGcrm%2BqbNn%2BfJqd0dmnHa3JBMvh3SspQtJoKpQTJCDWWpua5LEWYqNWqyy1aTs3oZhDlti2P%2BdnyZ%2BuSueUWzS5KUOfEI3%2BUhR8Fc8qeLUXdxK2dDuKdYw9CHnyX6goYP6O1IWcmZ3RZIiONp3%2BPbWBru7h2xiOYK%2Fu6uzezQKM%2B0m41L4ExnUEIrGcvxWhvsK8R1%2BDCTm%2FLcIsDHUp4um4qzbEuOHxE8CbXnLkJ255OcrQKlbUZ4mKMRgYMo2DsbPkNgsWO1oEiXcG2CIDQXxB%2B%2BiERb8I4NXxH76VoiN0jehuMQkwNuI3%2BjwytASnlhNG8xc4BNZ6x7iSrmTe8tzETxVX%2FS%2BzCiXI0%2FpemufV%2FKCvRLxn1SsY8nKsQYI3hDZEBMNHvpC6SdTlaacSnG86lpbc62pb1uqtAF52%2BhWZf1RoiujX%2FzFo%2BhYDIe%2Bq27OUKUAxEWm5fw5cldwfsz0Bqg3ZVDsTvdb8XGFuveUoxKIMEWu9brOPGBqbj49ccAzYylmgBtS%2BQkeiT0IAa9nvv3srBv1ZTAi%2FybNii7ZoBs61zoSyzvSsCtIwN2qod4hMIfI7cEGOqUBsx1La7Hp39xrlFk7j%2B72OoVJu7SNLL%2F5gACyFiF7KS7N30OfJd3p4reh62RtHdRfhvxabaiw73bWLEjE6LSFPEnWqxTr0%2BFJE1qDIVWC90StQKRoWw4scv2D5Js4yTTyGRPXs5GlKljK5ZXUI6wXU8c46jsk2IaErIbysCWLjzBtCi9CyhJ8Ci%2FZin%2FtoDJ20zfy1vtFVs%2BZHsPg6pjBZ%2BePNL0O&X-Amz-Signature=d384dc56f1a180da1093c57d8895a5a558a5ef5703417939b26664ab7feea7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODDJCHS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwYJDsS%2Fzw%2BRntv6N9VfcluKyBtZpXoPj9b2PzjMVxdgIgYr5TMRSWqazT8Ezk9W8cgnPpt%2BUxaPwEkW0czeevUOYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxBerOwgHesSKH%2FCrcA3SNC7pUZRMpc1GzpXBTT4ntxEvJ8jo%2BEw2%2F1pQgIlMs5ww2%2BoIWfrXTkNSGcrm%2BqbNn%2BfJqd0dmnHa3JBMvh3SspQtJoKpQTJCDWWpua5LEWYqNWqyy1aTs3oZhDlti2P%2BdnyZ%2BuSueUWzS5KUOfEI3%2BUhR8Fc8qeLUXdxK2dDuKdYw9CHnyX6goYP6O1IWcmZ3RZIiONp3%2BPbWBru7h2xiOYK%2Fu6uzezQKM%2B0m41L4ExnUEIrGcvxWhvsK8R1%2BDCTm%2FLcIsDHUp4um4qzbEuOHxE8CbXnLkJ255OcrQKlbUZ4mKMRgYMo2DsbPkNgsWO1oEiXcG2CIDQXxB%2B%2BiERb8I4NXxH76VoiN0jehuMQkwNuI3%2BjwytASnlhNG8xc4BNZ6x7iSrmTe8tzETxVX%2FS%2BzCiXI0%2FpemufV%2FKCvRLxn1SsY8nKsQYI3hDZEBMNHvpC6SdTlaacSnG86lpbc62pb1uqtAF52%2BhWZf1RoiujX%2FzFo%2BhYDIe%2Bq27OUKUAxEWm5fw5cldwfsz0Bqg3ZVDsTvdb8XGFuveUoxKIMEWu9brOPGBqbj49ccAzYylmgBtS%2BQkeiT0IAa9nvv3srBv1ZTAi%2FybNii7ZoBs61zoSyzvSsCtIwN2qod4hMIfI7cEGOqUBsx1La7Hp39xrlFk7j%2B72OoVJu7SNLL%2F5gACyFiF7KS7N30OfJd3p4reh62RtHdRfhvxabaiw73bWLEjE6LSFPEnWqxTr0%2BFJE1qDIVWC90StQKRoWw4scv2D5Js4yTTyGRPXs5GlKljK5ZXUI6wXU8c46jsk2IaErIbysCWLjzBtCi9CyhJ8Ci%2FZin%2FtoDJ20zfy1vtFVs%2BZHsPg6pjBZ%2BePNL0O&X-Amz-Signature=aadced45c56eea52245fb1d77560eaf538edfe970d56182df251f4e9def56d07&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLFDLDE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATFXltNNQo2h3BZkVWP7QSBH8nbqIHUCTm9Ic3CmWqGAiBKANQRRXl0JxTB8zPMISsIckJGDjRMjcXK5bD%2BdkcoXSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5gLDRujd1B0KKPhKtwDmVVGIZie2TBPV97SYMB%2FsOGQwAllTNH0sCWGHDgLK1qsghwcyaLD73%2F9mj7aBg6Gs%2B3RYkduEp0CnoNCUG0CWBbkHlviO9zpbRkSgsIezEAnCNqfqqi6KkqStWrUygjk%2BsR9tvczWYmuRqSu5aAiy%2Fio4YsKjDOtU%2BWel4d87y6DznkTjpA49QDcH0%2F8yD6ECC3BmXhPkpCQI8H8E1x9H8guexbdJZtgU4H5cq6S4O3fR5oPM67vbIgn%2F61m3ZscO1NFkO9uq06%2FrO6UaJcL2EEWhmuKjtqbZ%2FdOBjaX5RqD65gj%2FBv4lbXzpkbZFktDdmVOcfZvX4v2LXyb2ZCp48VRvKRvDO%2F815bi0vKTFe3hJ89MjVYKQ4FxwnusoNNrMygfrUrccf0tULOikmi%2F3fmB3PDAYe%2FyLZZ8ahtHNJKgz4b%2B7DiwIoHZYZVgwPuQsI51dwY9xkgCEG%2Bp7SRadczRrM8YhU8tNxUUBx%2FhxKxPcoJHm8Zo0TlTysEpNcdQFjfFFfWqZJ0ofeogtZVsJn40G40aPYNw%2BRdKCByTRms7syELKodswhjP%2BLIxuAafVHED5VhikSW8deTlsTXbqWJjGFbCdI2MXVGJGRvyAsXxPnZhFdPu97zgZO0w%2BsftwQY6pgFkXqjnjxqZgDor59KOpAw%2FnYMNME8lJfHaid%2BcZTbHAB3dRIjv6zIU3Jc%2F4djknqEEJvmJrtZROffXTXr2qZp4QfwEu1gxfZQoH6rxKpWbov9QNcyOGpuVCc%2Fb1ML%2Fi1GV0w6C1q06OBNkI4JThJQw3OPm2UvhVHM05tv0AXEAhWOUe4t7EHy7QDyVYf%2BV9Ccg0yqk6PfcnXiyfblQ84w2y7IVhyRk&X-Amz-Signature=baa96699680ccf7bf4cbf85a803e2154ab1afffbeadf8d10c671ddee1f6ff982&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXX3AET4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwC%2BX3kCbYChf8xu34ULvIjGGIoXZ%2BCEBSAWDBFKupLAIgZIEjXDBu7Lf4w%2B3axtjgd%2FqchK6kc99oYLJE6EsEdkAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKn38py7hIvOD90cyrcA2Ac7fyJVH1Az6Kw4M5iU6nh4C388eoyLO5UepkrM5kuJsrPXr5sGzn4TUEISxM0HJS3RcNUjBzXyDnW%2FrkysabjbXTdIRRutVW3IznK1l1wcqNDTsgXweEfnuPSRZzrd7mxcBmwxyC9qK8iXJEpEB7ezIk7AucOmtjOlqHgiNKgzxvAgmmVBx9puruKuGS8SxmZdyWOrM9WDjLO9jFgEibzTeyXzIKV16oa1gjSqvHG%2Bn9e%2F%2FMViR2WaymyVZ8dDUV5YwzAPv%2BXNqXtLNdEUBjxY3psb1QvML%2BIIzSr8d%2F7Wj3GsblEnTZHCKc8O29vI1bND1dVgKPI81WliEJtCQ91oGNZH2TCSCsc52a4Y30kz%2FQOo0Y6Ig0C2zPD8zg5%2BJH0XSeCdyzKBTP6dRab0dmvl%2F0id9fioVDyo63GB7V3CNJWEMJ8BkxbjU0mkxs%2FUzG5DCcCVsz6OVjgiSOK5E1sQZ4pKyTciXD4T%2B1F5La6F1ixY63pD9SphF5foKJ3P3dfkvINDB1DOg9E8fZnjKRJx%2BFPNGycjjc4JcBsF6nELEo7zaICSfU1ioQ7nfapsv%2FfPR99tfSyA9WJdbgii9uv1utkeJhlf0b2MRoXzdRQdNVQlC77sOVgMlgpMJSw7cEGOqUB7JTatI5KpjKxJf9P%2Bqt3xY1n1SuVWlPqMsMbJgS00krlp8aMpgTqtcrJ8SVEWh%2BH1fiMUruUeOw5UzuFAvELJDmvY%2BRHYMFuMC7Vg96W89ES%2BNAUxpyfcxMH1NQIIvS8w427jbTRK5JmkhJ43taHQoHhGXN9BQHHqYCk%2Fr19U6lzjrhfGbfGEnh62aT3yxtFuCGK3IAUyQ7YA83t782s0%2FSMDWDY&X-Amz-Signature=bc181041ae1dac6948cb0355d7f29ad31c54d8e3669a6174db7b3a798d74ae53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODDJCHS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwYJDsS%2Fzw%2BRntv6N9VfcluKyBtZpXoPj9b2PzjMVxdgIgYr5TMRSWqazT8Ezk9W8cgnPpt%2BUxaPwEkW0czeevUOYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxBerOwgHesSKH%2FCrcA3SNC7pUZRMpc1GzpXBTT4ntxEvJ8jo%2BEw2%2F1pQgIlMs5ww2%2BoIWfrXTkNSGcrm%2BqbNn%2BfJqd0dmnHa3JBMvh3SspQtJoKpQTJCDWWpua5LEWYqNWqyy1aTs3oZhDlti2P%2BdnyZ%2BuSueUWzS5KUOfEI3%2BUhR8Fc8qeLUXdxK2dDuKdYw9CHnyX6goYP6O1IWcmZ3RZIiONp3%2BPbWBru7h2xiOYK%2Fu6uzezQKM%2B0m41L4ExnUEIrGcvxWhvsK8R1%2BDCTm%2FLcIsDHUp4um4qzbEuOHxE8CbXnLkJ255OcrQKlbUZ4mKMRgYMo2DsbPkNgsWO1oEiXcG2CIDQXxB%2B%2BiERb8I4NXxH76VoiN0jehuMQkwNuI3%2BjwytASnlhNG8xc4BNZ6x7iSrmTe8tzETxVX%2FS%2BzCiXI0%2FpemufV%2FKCvRLxn1SsY8nKsQYI3hDZEBMNHvpC6SdTlaacSnG86lpbc62pb1uqtAF52%2BhWZf1RoiujX%2FzFo%2BhYDIe%2Bq27OUKUAxEWm5fw5cldwfsz0Bqg3ZVDsTvdb8XGFuveUoxKIMEWu9brOPGBqbj49ccAzYylmgBtS%2BQkeiT0IAa9nvv3srBv1ZTAi%2FybNii7ZoBs61zoSyzvSsCtIwN2qod4hMIfI7cEGOqUBsx1La7Hp39xrlFk7j%2B72OoVJu7SNLL%2F5gACyFiF7KS7N30OfJd3p4reh62RtHdRfhvxabaiw73bWLEjE6LSFPEnWqxTr0%2BFJE1qDIVWC90StQKRoWw4scv2D5Js4yTTyGRPXs5GlKljK5ZXUI6wXU8c46jsk2IaErIbysCWLjzBtCi9CyhJ8Ci%2FZin%2FtoDJ20zfy1vtFVs%2BZHsPg6pjBZ%2BePNL0O&X-Amz-Signature=d1373d85a26ecdcdc76af7c5c6f07f52c2d3f14ebe5edd1f0421c607203afcd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
