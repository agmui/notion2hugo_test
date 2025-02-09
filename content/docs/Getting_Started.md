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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPWLEKV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB7NrZ74Fz16kgnKcn2z7D5t%2Flex%2BLyy7JgjjPZXEtSwIgWrd%2BgfWIlW2eKH0F4up7uVYZ1FKlvD4PByevNYRJbt8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJERIHimPijO9Gw1eCrcA6Gr1BSO%2BnVbMEa%2FwTvKFCS6G2UAPuxE4eLsuh11fGD7Qa9uHtPkXz8gD5vNlOOP12cOyfzYgHhQj514Ej6aT%2FF1nRmdTUoMNw2%2BhkbWNt%2FHdNg8aOADczDcnlIhHGo1mks5mPD%2B0QskV9nAJXeArjgWue17sb3AkBFmnrj1kOpjM%2FR1CTWGWUteAjo1dYtOS6IuAJI1nNfMERCJvG3pQl9EGYJznpUsHsmslCGNEBnoyWGvaKbO3yzDvP2WOLckjDtdOhaX%2Fgl8RdcMg5xiSzjnptmqhaRyYxBKG7g9lQ7p6fb3SlriMGfQezo1L%2B8MzL3eGpOLLDp1n6xJJXTzQVysxh7CK%2FFfnk9EMJozBiFQqV40Gr2u86HK1fbf7VcSF3wLxLXL5JI9yz6T7Jbs4Csl093Hamxm7n54huMIg6ChBSeCfuRTsTuvSUPCiFW96PxInXUAEbUVpNnkiApXuiKO7wqM4JpGu5cwRbx24U4vHsyWb9bAoRDr7ZF2LKMSBOV7y%2BO3ziEbGBTxJ2GUmOad0SLZiKcdpRqO74ihs5fgnzgq%2Fai4XLI0K6J1EMiyLOwbU1DQo2xbeC0R0HBkNcxhvtieUtNkGNmplde8Clv%2BHKChSnuMdSThfu3jMLDhpL0GOqUBhZnUO1V9qDBEO3na4p4cc0ItxkGO9EHyBOrimBe%2BKK5TH9V1Zxty3whMt5wj5KlNjnQPSh3JxDGnWI4BNJlvePMATLgdIkcLzhxQVXbTSSl6Mf2JqbTUYfNRH1D6qHuo5dAge2VHCBgdXF0LzDawNC3vOY7Lu4oO1F%2FoE%2FnBw9Ggxk9naj2aQwQxnvU%2BqzUbICnJ%2B5fJBoYKPys9nGp6he1Mn6fB&X-Amz-Signature=51a6f708b77e6c09a0cda4f313016f3afcc3535d85f58c10de8dd155a2266f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPWLEKV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB7NrZ74Fz16kgnKcn2z7D5t%2Flex%2BLyy7JgjjPZXEtSwIgWrd%2BgfWIlW2eKH0F4up7uVYZ1FKlvD4PByevNYRJbt8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJERIHimPijO9Gw1eCrcA6Gr1BSO%2BnVbMEa%2FwTvKFCS6G2UAPuxE4eLsuh11fGD7Qa9uHtPkXz8gD5vNlOOP12cOyfzYgHhQj514Ej6aT%2FF1nRmdTUoMNw2%2BhkbWNt%2FHdNg8aOADczDcnlIhHGo1mks5mPD%2B0QskV9nAJXeArjgWue17sb3AkBFmnrj1kOpjM%2FR1CTWGWUteAjo1dYtOS6IuAJI1nNfMERCJvG3pQl9EGYJznpUsHsmslCGNEBnoyWGvaKbO3yzDvP2WOLckjDtdOhaX%2Fgl8RdcMg5xiSzjnptmqhaRyYxBKG7g9lQ7p6fb3SlriMGfQezo1L%2B8MzL3eGpOLLDp1n6xJJXTzQVysxh7CK%2FFfnk9EMJozBiFQqV40Gr2u86HK1fbf7VcSF3wLxLXL5JI9yz6T7Jbs4Csl093Hamxm7n54huMIg6ChBSeCfuRTsTuvSUPCiFW96PxInXUAEbUVpNnkiApXuiKO7wqM4JpGu5cwRbx24U4vHsyWb9bAoRDr7ZF2LKMSBOV7y%2BO3ziEbGBTxJ2GUmOad0SLZiKcdpRqO74ihs5fgnzgq%2Fai4XLI0K6J1EMiyLOwbU1DQo2xbeC0R0HBkNcxhvtieUtNkGNmplde8Clv%2BHKChSnuMdSThfu3jMLDhpL0GOqUBhZnUO1V9qDBEO3na4p4cc0ItxkGO9EHyBOrimBe%2BKK5TH9V1Zxty3whMt5wj5KlNjnQPSh3JxDGnWI4BNJlvePMATLgdIkcLzhxQVXbTSSl6Mf2JqbTUYfNRH1D6qHuo5dAge2VHCBgdXF0LzDawNC3vOY7Lu4oO1F%2FoE%2FnBw9Ggxk9naj2aQwQxnvU%2BqzUbICnJ%2B5fJBoYKPys9nGp6he1Mn6fB&X-Amz-Signature=ec6ca0acbdf26dd162eabb8b2497bad5549af34b0d7dc23adb3b3ba2c67b9c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR235PPN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWMEZdf3tcOFai6mGGXVaejEb9lumOhoRSOb9kzxD%2BkAiEAuANn2KbRhE4xhT8Hv0lFe7hsWHnpkVixTK5z3uIxdhQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc6vuFNDGrBnnDImyrcAxhvikvqVl4b%2B4XovHfN4CjNbHybbMzydBcdFRFeE8FkBjMVGb%2BlRm7oGKgcxDdngCMg7n5wFWKl0hnorhLcr0Pt0tyUWHo3OM5wkC8Pe0gzc6TLcA45B4jJORTBBs6b1Xv6RctKzGrc%2Fkl9f6WHUDY5caKmaLAeG1LtFG1XaAMiLW8cUwSYuTpQXNTaoIzwHhuiVNQCmL4TydnjyjcmjUXVaKum%2FyzN6RU%2FNAKzyQBj0OZjI9pHXoAATMuZJQXQhqdN7yrUXjtpDgAyD6oyh7fjK%2BV%2BAhyPT2834Bye5SQhrSKIHPw3AWv%2FX%2Bdr0eJCw82wXSw1xx8NNMoDRLGhRsYD9ak1KZ6Ad3Q6ulzAhy7xfr3000rtZtAr8yxWPGVhCR3Pc90xCP5uEIpqdGQJddB4UrVZG9dg5ZmgDugQZjNZ6Jf2343KTKRh1ubO1zz4uygrV%2BRZ0Yr6PgGRj9b3ryLU7uM5XRHrC0v%2Fsgu14rJpWB3bpx%2BHC910E4ftomTvkRzxNT3hCh%2Ff4T0H5QyPlEC9nnbIoyoKSSthWfI1DXXzjGW%2BV8g%2FZ21UCTjR4xZONBm3N8%2BQ%2FhCg%2Bkd9tvA%2BvW1RsKwESoWUCPN%2FqTJ2IjD46Lk5nWtM5HM0IKG7MKbgpL0GOqUBJUhu8osZ1QNgP2f%2FYQcsWtROJU%2Bxlhqz0R8mc2vWgspjwMfdD0vKGSxg30ZK6DXoGl1r2rnUuYr94WlQG0ZLDF6ueHcrGEJYlIkreGZFRKDbEckTIbLbyV76FroStxRT6WAFFkcLA45ZHLqOaIl5u6KvXAmmnZsrfTPFy0ebw%2Bd4tkkWa%2BMBF01bL2ZLP4K96BlUTUCEwKtc71WetHjushhwWUoO&X-Amz-Signature=d371f1b99a0356b073c9efb1835a51851f9d715dec804f1da6d07f4985efc323&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKQM63T%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq1F4oiZ9qCRdm1OrYgiwK4p%2BcRYLohmeTkH4Edc%2Bo3AiBUCCf98t9tufCdXMYtj%2BFnc0vMJkVS3TpqQreQBvxY8CqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCoHgRBR0CiOhj5%2BvKtwDjNpS1zAmhEHIVJs8302lu6FwzpL1%2BdiGF5kcekDqdW43tu2LXShA0JFbBLgP1EiAg%2B58woNw6zdS9mMolHOPmDj1ZbxSHvMlMIddaNdkd7s4PNUdd2JwLDmxlfuko9ObSHsTYYYAsY6ks%2BU%2Be%2FyZvipk9klm8La8nqKV3dTl%2FpDs%2FeWCm2i4TLYms%2FyaiPZh6oEpNgRDEMpg76DycDz%2BSX8F1p3DM8BlQpQGC5BPP5rQbz07rsJr8xI8ozvnaRvgGKKMNkhmCHSAqHzpKriGg0SBR8C8Qic02xjYiqKpoM2ygsk0Orpv7fgqI0ySe%2F6HFKwUeQ55PaiCimWkkIJM9IBgnWc6o2qcLqLFTRsJSVNTc%2FI%2BeQMhUj9HXppDyfgEpFEz3MeWbrht2yyPBYnr6e1M%2FCL6QlnY1ktbStk890%2FMdAlkUOCqhQ28GUut%2Bnz5CsG%2FsNbv4lbG4Dv02uWBftpT4P8iKOwmRnea6c65dUCRFhqR8%2BY5fQuJWzU%2F5eU15EDx5PqhgeZkwhm9Qlcn5X3T8elLa9IF%2Fq1rW8QV9rfZvinz6owPkGSuJRm%2FtPQ8tUz5STsikC6IAEb1Y3Z0KMUaCxz%2FL2ZBmgV%2Ft3nI7q67UgMW%2BIort0K1OVYwoOCkvQY6pgEyDbhswR00aQmdahmjuA3HwwXOs8hqkFrtsjHMbl%2BzJQTazKFHNMQpFIzTV9TbAoyCjzlg%2FESwU0Sp8k8ewZ2VqMQgsgcFujVUwam7r%2F1tj2V9kOPdWsKMI0FNQoBgF0gFGHAbdw8Hp%2FlW5q99JhOmAwhVDl3DzNipNSIt8ZAR99RhpWnVaex%2FaKYwntM9z1CAlXyWrU7EsgaT%2FYbUUauD8bG9l18b&X-Amz-Signature=9043f41731726d28841ccc4bd2c492301b72910528520dcd0d112fb4b0106256&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPWLEKV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB7NrZ74Fz16kgnKcn2z7D5t%2Flex%2BLyy7JgjjPZXEtSwIgWrd%2BgfWIlW2eKH0F4up7uVYZ1FKlvD4PByevNYRJbt8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJERIHimPijO9Gw1eCrcA6Gr1BSO%2BnVbMEa%2FwTvKFCS6G2UAPuxE4eLsuh11fGD7Qa9uHtPkXz8gD5vNlOOP12cOyfzYgHhQj514Ej6aT%2FF1nRmdTUoMNw2%2BhkbWNt%2FHdNg8aOADczDcnlIhHGo1mks5mPD%2B0QskV9nAJXeArjgWue17sb3AkBFmnrj1kOpjM%2FR1CTWGWUteAjo1dYtOS6IuAJI1nNfMERCJvG3pQl9EGYJznpUsHsmslCGNEBnoyWGvaKbO3yzDvP2WOLckjDtdOhaX%2Fgl8RdcMg5xiSzjnptmqhaRyYxBKG7g9lQ7p6fb3SlriMGfQezo1L%2B8MzL3eGpOLLDp1n6xJJXTzQVysxh7CK%2FFfnk9EMJozBiFQqV40Gr2u86HK1fbf7VcSF3wLxLXL5JI9yz6T7Jbs4Csl093Hamxm7n54huMIg6ChBSeCfuRTsTuvSUPCiFW96PxInXUAEbUVpNnkiApXuiKO7wqM4JpGu5cwRbx24U4vHsyWb9bAoRDr7ZF2LKMSBOV7y%2BO3ziEbGBTxJ2GUmOad0SLZiKcdpRqO74ihs5fgnzgq%2Fai4XLI0K6J1EMiyLOwbU1DQo2xbeC0R0HBkNcxhvtieUtNkGNmplde8Clv%2BHKChSnuMdSThfu3jMLDhpL0GOqUBhZnUO1V9qDBEO3na4p4cc0ItxkGO9EHyBOrimBe%2BKK5TH9V1Zxty3whMt5wj5KlNjnQPSh3JxDGnWI4BNJlvePMATLgdIkcLzhxQVXbTSSl6Mf2JqbTUYfNRH1D6qHuo5dAge2VHCBgdXF0LzDawNC3vOY7Lu4oO1F%2FoE%2FnBw9Ggxk9naj2aQwQxnvU%2BqzUbICnJ%2B5fJBoYKPys9nGp6he1Mn6fB&X-Amz-Signature=9e961ce3305a564ccf5d0e753b313e2cc911a7e84675c466f6b078228b5f9121&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
