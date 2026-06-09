---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRHQPPP%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiucwm2cSHMmb0a%2F%2B47PHV3qLzwP%2F8q0S6ZcsfLtF10gIhALEHrhZY5JqSCmTrK86szTbbZvMZaLEXkagVRRdNUBDFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLTnTHRCctQkVsxwoq3APwR7Ci0QP7iXE4DtzTrh4QOt0Yy2poE%2Fm9RFrnqVZn%2BIyDjBp8IzhKFnpFXm%2BiR5%2FBPbN39w0OAoWLIlXZkdEn4FKNbfouUGoPA78ZJsJwDsx15md3D%2FcggHIHZ1Tvh7Rps0Hw8QE8muGcJG2E%2FPObFqvQls2rNHxOPW46z%2FHqLqHVPcOjghTaF4FCGUvuGfi9QVeAJLGRjlHUNiD%2FMv5UVrlKldMjNSlAIzRYZGEltgdX%2FKqnoynjWW1jai5Jt%2BABRQWfMZKwGmjTp7K%2FWBmXomikjp1xCOWsRlTmfue7LWgVxwe3qr09CcMbPFt3X%2BWVek4DZU9tSRXNMoF5KiD3v1Jc7KKCfJnajj58f3JR4OOcOa3E9HuYw%2FZgl795V%2Fa4%2Bj1UG5Wi4A4PKFXvI4nqz0sl3XbBTnZf4mLFNZMWe4xbi7O2bc9m4%2FNoDjxYagqBO6YZdbEGQDKBk0V4yMWQW%2B%2FL9kri8i6dyK3lBFHZ%2FlopRdVydXqtQWinjH1NOIyLoceOLOhMdf8iX8BuDm%2BX6%2FIaAxXO0cSB48s7G1FCwkdvBArMiilYMDkmR5VoXYLrv%2FNQQlxdYpbql%2Ft7F1IMhPq23NcKK%2FSYn4Kzsapxa6eFKsIA3AsK67jm8jDzhZ7RBjqkAbntZ%2FHkpiIcjGfvmzI8G2SxuUQmRilAFumilTwmmDxh0vddWlc0V%2B6NDnQ%2BgujZ%2FHLBpCow33l%2Bj1wP3d3oCzm8sfNEl03ZCadBALSgBWzrY87eqVysqCRMQ%2FG5pP6lay4eBcnh1k3J0Pt5GOE8HEAN0Zz%2BO13m43QjKDrU8zvTH5EmGQIjb3wYDAWmfBTbPSUGU9t6kLqIb8Rbpt1tsBfNSyzF&X-Amz-Signature=67c2a1f9fe7b3459bd8f544f5d3b39ce0ce3e40e1f43b2576ec2dafcea222da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRHQPPP%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiucwm2cSHMmb0a%2F%2B47PHV3qLzwP%2F8q0S6ZcsfLtF10gIhALEHrhZY5JqSCmTrK86szTbbZvMZaLEXkagVRRdNUBDFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLTnTHRCctQkVsxwoq3APwR7Ci0QP7iXE4DtzTrh4QOt0Yy2poE%2Fm9RFrnqVZn%2BIyDjBp8IzhKFnpFXm%2BiR5%2FBPbN39w0OAoWLIlXZkdEn4FKNbfouUGoPA78ZJsJwDsx15md3D%2FcggHIHZ1Tvh7Rps0Hw8QE8muGcJG2E%2FPObFqvQls2rNHxOPW46z%2FHqLqHVPcOjghTaF4FCGUvuGfi9QVeAJLGRjlHUNiD%2FMv5UVrlKldMjNSlAIzRYZGEltgdX%2FKqnoynjWW1jai5Jt%2BABRQWfMZKwGmjTp7K%2FWBmXomikjp1xCOWsRlTmfue7LWgVxwe3qr09CcMbPFt3X%2BWVek4DZU9tSRXNMoF5KiD3v1Jc7KKCfJnajj58f3JR4OOcOa3E9HuYw%2FZgl795V%2Fa4%2Bj1UG5Wi4A4PKFXvI4nqz0sl3XbBTnZf4mLFNZMWe4xbi7O2bc9m4%2FNoDjxYagqBO6YZdbEGQDKBk0V4yMWQW%2B%2FL9kri8i6dyK3lBFHZ%2FlopRdVydXqtQWinjH1NOIyLoceOLOhMdf8iX8BuDm%2BX6%2FIaAxXO0cSB48s7G1FCwkdvBArMiilYMDkmR5VoXYLrv%2FNQQlxdYpbql%2Ft7F1IMhPq23NcKK%2FSYn4Kzsapxa6eFKsIA3AsK67jm8jDzhZ7RBjqkAbntZ%2FHkpiIcjGfvmzI8G2SxuUQmRilAFumilTwmmDxh0vddWlc0V%2B6NDnQ%2BgujZ%2FHLBpCow33l%2Bj1wP3d3oCzm8sfNEl03ZCadBALSgBWzrY87eqVysqCRMQ%2FG5pP6lay4eBcnh1k3J0Pt5GOE8HEAN0Zz%2BO13m43QjKDrU8zvTH5EmGQIjb3wYDAWmfBTbPSUGU9t6kLqIb8Rbpt1tsBfNSyzF&X-Amz-Signature=10c564e35128dad707123649b3da35e063c38d3e4a782c26ff58550c9b612afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRHQPPP%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiucwm2cSHMmb0a%2F%2B47PHV3qLzwP%2F8q0S6ZcsfLtF10gIhALEHrhZY5JqSCmTrK86szTbbZvMZaLEXkagVRRdNUBDFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLTnTHRCctQkVsxwoq3APwR7Ci0QP7iXE4DtzTrh4QOt0Yy2poE%2Fm9RFrnqVZn%2BIyDjBp8IzhKFnpFXm%2BiR5%2FBPbN39w0OAoWLIlXZkdEn4FKNbfouUGoPA78ZJsJwDsx15md3D%2FcggHIHZ1Tvh7Rps0Hw8QE8muGcJG2E%2FPObFqvQls2rNHxOPW46z%2FHqLqHVPcOjghTaF4FCGUvuGfi9QVeAJLGRjlHUNiD%2FMv5UVrlKldMjNSlAIzRYZGEltgdX%2FKqnoynjWW1jai5Jt%2BABRQWfMZKwGmjTp7K%2FWBmXomikjp1xCOWsRlTmfue7LWgVxwe3qr09CcMbPFt3X%2BWVek4DZU9tSRXNMoF5KiD3v1Jc7KKCfJnajj58f3JR4OOcOa3E9HuYw%2FZgl795V%2Fa4%2Bj1UG5Wi4A4PKFXvI4nqz0sl3XbBTnZf4mLFNZMWe4xbi7O2bc9m4%2FNoDjxYagqBO6YZdbEGQDKBk0V4yMWQW%2B%2FL9kri8i6dyK3lBFHZ%2FlopRdVydXqtQWinjH1NOIyLoceOLOhMdf8iX8BuDm%2BX6%2FIaAxXO0cSB48s7G1FCwkdvBArMiilYMDkmR5VoXYLrv%2FNQQlxdYpbql%2Ft7F1IMhPq23NcKK%2FSYn4Kzsapxa6eFKsIA3AsK67jm8jDzhZ7RBjqkAbntZ%2FHkpiIcjGfvmzI8G2SxuUQmRilAFumilTwmmDxh0vddWlc0V%2B6NDnQ%2BgujZ%2FHLBpCow33l%2Bj1wP3d3oCzm8sfNEl03ZCadBALSgBWzrY87eqVysqCRMQ%2FG5pP6lay4eBcnh1k3J0Pt5GOE8HEAN0Zz%2BO13m43QjKDrU8zvTH5EmGQIjb3wYDAWmfBTbPSUGU9t6kLqIb8Rbpt1tsBfNSyzF&X-Amz-Signature=d813a6c011bcdd3cf2c5144273c47abb9d31214a6ed6b00e6c0edef5d74750e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SPYD6F%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdT6VemsZYlSxwxkUDnpE%2FagGcCUAmFvK3SGF1YYLZ8QIhAIQWAVLP3%2F8Hlb4WNNKyYfa9pHWPcpmP2%2FreuMCSUM66KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLMxKydO0%2BFDo6Udkq3AMVk8FwCC%2BJIIHMlCUJK7oQOowcu%2FMc6irIAWIv3QC61BaYOznD6GQIU8VYE7FQLdPlLs7qfgE%2FpLMQcIo%2F3IsUm34hEt%2BAjWpEzDXUcyndF5khlQkgMX5qtsBO9d4Q6Cq1C8hsuXh%2BKgMmBMNJZaLPJLDG%2F1RaDlxBKT2l4VP4ioGbuaasVEU9z7Q%2FG5CjfDQvL1o04PEQsWFlOqkN%2F916HRWx4Uq9aNL2Qi%2FIzp1qvLECmLOVFEX%2FlHGDmUM%2B81lkls3w96Trqsqh4mUYStaw%2BGaMEbP7dYlss%2BiQYxqJHZKK%2BgOZVlLI1QgS8wjtK83XoSq8ZfjM5xl8XAouP4VEWBbK8xdBCxJKSIjVP%2BPNi5fY41BzOul3Hp6lKYTNvyFVuT9IylGiKvemGKDeLh30%2Fsha8xSCOu4PnSxMHbqsiK130pjQTslLaJOy5JWbzn9pxAgG02fv6QBkYteBYU%2BGcZmvSC8TFr8tnF98LzPtFQKrK9UFhJ7SeoXEaYZFkAPZI9f3hpBtO%2BX5drhJAaP5EczHfFIP03S%2F5rG%2FM2ih156MhgoLzr7I%2FRPrhhnF93FXOWDKlfz%2FRgUh0PuvLScMcK2rI7CXSEfYYkMbgP61JjMjeMyh%2B4gnNxK%2BVjDjhJ7RBjqkAcWqKVsQhl9igPdIkuv%2BZiGTyLA%2ByKZwnnADluiZJQPU3hHe0X2DD83xCG7jooFdoEQQfLuh5%2BfYRzZRfJLMJaNtKTvaBHbSWnqSGh3khq70iXUhKukshMBwveGwZrLjQcxkMDM7I2423PbWN76pogfio2QFQDHDNCbnN3sevjSVohIR4cbXSxiXA%2BzzpEIUowHQbZhkzil9XgdRwvVF7epnbX%2FZ&X-Amz-Signature=783531afcb29823a08d4f6381beb468da627de8595519af936f0c1840b0a6b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD46C6CY%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlAIg6e7VzdzWVUsEuhc4o11TKoC3N5p6Wr1ZjsOHj6gIhAKSZzIgLxTe60tpUdIzkkTXV5nZbBBDGDfJwRExDT3G5KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEYMIcOfcQxrvzy7Mq3AO3k9nBbtgdaq9zR%2BFz0FqPYssK%2BUMo432IjD2GAMj8rcotOwxl%2BvhfnlKwWILjO8unIC7g%2BuWfw%2FZXba8FKbm6l9O3CBHWEfjH7beABi8Hygq2FYYEASgNxPKuxtjP0wIUz%2FnXe%2BIvWo4zU%2F02ezRWg3jMFZxAiq59ZmlaJRwFkGY0TlCXRefuJxH%2FCUczIVuDFwqpZaDAL7BVJ7B2P2qLkscKMGVs%2B80DX6WE8ECWFXfEXmO4Af%2F%2FhOXt4JvpBkIlPTFSHns7dj%2BEMayxhBrQKO35Icoo9ALOyjuRMN78PTSzdseqcM65CQ53LgK6aXSpDTWcsG4rs9aDuq1rzxby0G1gDbRgZh9ZFYsd2NK2V4Ooivw6vSrimD2y%2Fk3P%2FHlCuNVjvr%2FyO4KBOWA3vaJeRj5IPbO%2Bj9nPOoAZxuEScroWdBJ1gTghznSY0VGYgnqV2XzDSbPA9BS4IR8VImED0qHOpv%2FMoCu5PdoZWuwfvGPNRqDMnWh2ItK%2BSPNLhVpj0%2FOaLRe3C5X3W9hQE1UyYDtjxjSvvk2lvKyPGDXY9ed3x57ws2lNGPDGdok8HX0dhyEa2S6VoQ9b%2F8LSdNJCRJbmVDxyYOG2oG%2Bc1NJGhdKqLdTLvUYX5qk8kDD%2BhJ7RBjqkAZm2RXy98dH4v8gZJ7aK%2BEOUEsnLicyu8CdzChYnJyBuQpEEzpmW6rD1oXST3I8hjSeVuVOqoYpcehcEwELEARkV81LdulJS6KLexA2Vv2%2FiYk%2BHGudaAKIgKqhrAZcSaa9lZHbhLH8A2e9o%2FL%2BKMTbwa7MG0HNYnH6KAeXAnNyJU04q1%2BvyTaTexUqyV%2Bg%2BXQ7%2Fi%2FZ%2BNffg91wTUG1pYYsOPu3e&X-Amz-Signature=426b6029cb49e93969371828c8ea0a1549bf0fb3ccb402804c022170747a671b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRHQPPP%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiucwm2cSHMmb0a%2F%2B47PHV3qLzwP%2F8q0S6ZcsfLtF10gIhALEHrhZY5JqSCmTrK86szTbbZvMZaLEXkagVRRdNUBDFKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLTnTHRCctQkVsxwoq3APwR7Ci0QP7iXE4DtzTrh4QOt0Yy2poE%2Fm9RFrnqVZn%2BIyDjBp8IzhKFnpFXm%2BiR5%2FBPbN39w0OAoWLIlXZkdEn4FKNbfouUGoPA78ZJsJwDsx15md3D%2FcggHIHZ1Tvh7Rps0Hw8QE8muGcJG2E%2FPObFqvQls2rNHxOPW46z%2FHqLqHVPcOjghTaF4FCGUvuGfi9QVeAJLGRjlHUNiD%2FMv5UVrlKldMjNSlAIzRYZGEltgdX%2FKqnoynjWW1jai5Jt%2BABRQWfMZKwGmjTp7K%2FWBmXomikjp1xCOWsRlTmfue7LWgVxwe3qr09CcMbPFt3X%2BWVek4DZU9tSRXNMoF5KiD3v1Jc7KKCfJnajj58f3JR4OOcOa3E9HuYw%2FZgl795V%2Fa4%2Bj1UG5Wi4A4PKFXvI4nqz0sl3XbBTnZf4mLFNZMWe4xbi7O2bc9m4%2FNoDjxYagqBO6YZdbEGQDKBk0V4yMWQW%2B%2FL9kri8i6dyK3lBFHZ%2FlopRdVydXqtQWinjH1NOIyLoceOLOhMdf8iX8BuDm%2BX6%2FIaAxXO0cSB48s7G1FCwkdvBArMiilYMDkmR5VoXYLrv%2FNQQlxdYpbql%2Ft7F1IMhPq23NcKK%2FSYn4Kzsapxa6eFKsIA3AsK67jm8jDzhZ7RBjqkAbntZ%2FHkpiIcjGfvmzI8G2SxuUQmRilAFumilTwmmDxh0vddWlc0V%2B6NDnQ%2BgujZ%2FHLBpCow33l%2Bj1wP3d3oCzm8sfNEl03ZCadBALSgBWzrY87eqVysqCRMQ%2FG5pP6lay4eBcnh1k3J0Pt5GOE8HEAN0Zz%2BO13m43QjKDrU8zvTH5EmGQIjb3wYDAWmfBTbPSUGU9t6kLqIb8Rbpt1tsBfNSyzF&X-Amz-Signature=306ad843eb59ce6bcc8e417cee2e19dd2fc9f1f90ba6e2b064987d82bf782545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
