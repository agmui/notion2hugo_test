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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM5NMUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCmpecSJbjj0W7sm1kyfUsqUWif%2Bd3J3Xj2aEd5Zd1gFQIhALetYIHAievU%2BciiR%2BMkhiniBair8SNxky6%2BZBqbvll6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy2GLERLrblSp0xO8q3AO9m%2FqpKwqNQJL%2BmZhFs%2FiYaMYQ7D%2FHaldfPaw%2FigQXwh2fF2gpqLZqXIK73S5wmvAREGq%2BXPQDT%2FSgtQv7BCiI%2FegpxeBwp04RfmC4uWOWeknPPD8AhHbH%2Fq2suOAGiqSTILFnbSbC2BCjA5rvSH8ymRo4JdOkR91LRRREjizRmi3KHI7a0MJMNWP0QZqpxrkdc5eGBnqrX3PtbbVP13vn4BrpZ1Mb3xTYAYibv7OilGbkqoCT8H4eep1biyKvZnVN9e0tt5BiOq90QUFjaQPFuylz0uRx2RAMeVatxbK%2Bl6c6E67t%2BQFqchy1JTtSztntNRiGERK2AZX9EeGd1g9OxIXd%2FsurHewtjwa9LbdGRFPZ9Zr%2BKdmvwnGQgsgnYeTb%2Bo9IXogIJG8L5AagOQe1fRyAAyX%2F7Cl8SV5xq75uduOtv3Va1N%2BO2duu9FHzFFC55wRNg5Zh2vkiz75Dt%2FSt%2BDpiG%2FxLG8pcRK2zkhWqvnY82i74KzVdnvR5LV3fEc1klfuc%2BczaCjko6SN0N26U5Dizg2yqX8LvUh%2BrkZPTADxXunj%2FfRWq9EhTyibmqjtZcFpWrVqw2HhsGn9omnZKuO71NCBEw8AiHVTHtTIijMYRa40uPGIHneud%2FTDuj5y9BjqkATBw8VNBTmtOwKnYj2SDGGdHzmifr3j8gMIPUEE8ELAMaxwQb0Y8c%2FJSeqocAbZQk3e1iAoPbRDQtOfsWZJs43dWWbp9gZS9OGg7VO4bB3WzDDzO7NHT%2FGD4MPoboOKpVrFPqxAmy%2ButbSuValCpFMnCjp2rvv0IFuUmC%2Bo6RDeHJ6KuFhZHATvT8rbsthASPO020telKYJDedftLmRuCc8ZeSxK&X-Amz-Signature=368ac9b090f730966ffc9c35e30e06f8408f8d871a36fe8e9a031e1f4ac71305&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM5NMUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCmpecSJbjj0W7sm1kyfUsqUWif%2Bd3J3Xj2aEd5Zd1gFQIhALetYIHAievU%2BciiR%2BMkhiniBair8SNxky6%2BZBqbvll6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy2GLERLrblSp0xO8q3AO9m%2FqpKwqNQJL%2BmZhFs%2FiYaMYQ7D%2FHaldfPaw%2FigQXwh2fF2gpqLZqXIK73S5wmvAREGq%2BXPQDT%2FSgtQv7BCiI%2FegpxeBwp04RfmC4uWOWeknPPD8AhHbH%2Fq2suOAGiqSTILFnbSbC2BCjA5rvSH8ymRo4JdOkR91LRRREjizRmi3KHI7a0MJMNWP0QZqpxrkdc5eGBnqrX3PtbbVP13vn4BrpZ1Mb3xTYAYibv7OilGbkqoCT8H4eep1biyKvZnVN9e0tt5BiOq90QUFjaQPFuylz0uRx2RAMeVatxbK%2Bl6c6E67t%2BQFqchy1JTtSztntNRiGERK2AZX9EeGd1g9OxIXd%2FsurHewtjwa9LbdGRFPZ9Zr%2BKdmvwnGQgsgnYeTb%2Bo9IXogIJG8L5AagOQe1fRyAAyX%2F7Cl8SV5xq75uduOtv3Va1N%2BO2duu9FHzFFC55wRNg5Zh2vkiz75Dt%2FSt%2BDpiG%2FxLG8pcRK2zkhWqvnY82i74KzVdnvR5LV3fEc1klfuc%2BczaCjko6SN0N26U5Dizg2yqX8LvUh%2BrkZPTADxXunj%2FfRWq9EhTyibmqjtZcFpWrVqw2HhsGn9omnZKuO71NCBEw8AiHVTHtTIijMYRa40uPGIHneud%2FTDuj5y9BjqkATBw8VNBTmtOwKnYj2SDGGdHzmifr3j8gMIPUEE8ELAMaxwQb0Y8c%2FJSeqocAbZQk3e1iAoPbRDQtOfsWZJs43dWWbp9gZS9OGg7VO4bB3WzDDzO7NHT%2FGD4MPoboOKpVrFPqxAmy%2ButbSuValCpFMnCjp2rvv0IFuUmC%2Bo6RDeHJ6KuFhZHATvT8rbsthASPO020telKYJDedftLmRuCc8ZeSxK&X-Amz-Signature=f0caa171e82e644a3dde426d2fdc8a2503557175060b9900d79c24660570b5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG5NXJC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHdQdcyLhy9S7guOH31%2FgCxpQqlg2UTf51%2F79BdtxLmcAiEA5P0k%2F5HfpdZjFOekAwShzWA5NmKWMbGOBNWyqRjZ64IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZo4vtP5A1D4V6VySrcAzLQNqXuziz%2BgK4BSiz%2FdQe%2BZK0bL3LSZiSyQvzBP0cZbnVxBXZDt%2F7LWhKfHNAnzs%2BJX11PllAsvcsr1gv7LTTz8mmG1pqRDqPP1PFdlb3c1Ok5nKkiDWWk6deE5f%2BhlQ%2B0lHlWZv%2F29evrwgFYlcwtQAItcmj4VKTZ8dc2UAdCIuM4Kt68uCUufiQFrSTrNtytFSP4TbeT4apYxzBRZRy%2FyoGbregfEgb9YPCTiYF63vZPGmrI3fhporlw1zY0Q2yXvduFxthHHr%2BT7IENBisiBTAcge2Y3yCDTPSBHPOML8Zu39uFRj9RRlZuIl9yWXLmDtYlPqDqaGhpBe0c7Vnj8F1hb%2FjRMXMA26coetTr1eTBVe%2B9BoXA9xxUMsNsY7bsZ9ddl8yolluTtW%2BBeKu8cKkY677y1D1A2vKGAzGRR%2BZXlfR9lzW1K%2FLp3EcbxDtwJCeBAuy5jstK3ERWGtQnW3PzrUto2cUHmR6dzi7qwHKDmcBX9TFliSeysn9g7QQPLyWF4jirA%2FpYAnP18%2Bq7GLSpr4oooJE0k9ZX8YGrEU4qfn9Le8kvdUdE2bcYO0fVlKpnfqERG7JiiZDwWan0%2F7%2BczKCs3%2FCrp6V%2BXJW%2F9M4biPOPhFnVfh1wMIKQnL0GOqUBpcDGVe0i23v%2BxjjKU99EfykxkGCAQBJxKBwKxmw%2BbJjLUUvYfUKe7AYeXCGG3QezNUN0JoQo6mpMvY9jU0bElZkzSh8Enhj0f4OWaMD%2F83cPof9RAovWhHvTfCjJ%2BHJYkRddf2ZUehIJWXkASLwYKjbh161Thr4naefShYOm4sFWEa9hNc0GC70uHt0KDaGgeEzu9bbdwOEWdPtCJGnQQwxjY21z&X-Amz-Signature=5f3b919787069f43dbf897b4ab25f3626a05eb55d9aecf4b2854b76a143b126a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOUR3GBX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCID4srEoOQlnUE6bUVqb0OXxtfkLBWwDMsF6nakmbh%2FG%2BAiAg6IMZT60GkIV42k%2FEZwL%2FTqV%2BoQAGikHGAzNuiCo0XyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR1kqJaxYaADvbPkwKtwDFRi92xvgP4lJgUJ4ZvYqHJRbF3rQ7bJRNBnDwCMnsGxTARIHrw5RYqHlZQVAkccr7Vj0T6EC9W1H00Jm82nrw%2FCK2m6Zmeai9G49%2FP711xao%2FGL%2F7ACRHCDIDrnCJwYk5siAE4RhGD8l9GHL9e8ROn47bf1pDvmMP5AtlKc3sAcMIhiwLnXg%2Boq3IunY4fjnDzCfyqQirj8WMl2JWmJonhwg7j4QwVPO1Wt9DUWN%2BYhaLCx9S4QWEv0Cg1wN9PJW7IXlKDTdwZADdkHZ3alamwBmnD%2B8KdIhMRMjAzxYhkOMvAUfIZu1GHVp5UtRVYR5aqw4EN7T4pZz3P%2FA9cdZQduiB%2BK8dPQOknyfW%2FE%2FjfFAq%2FIrn1f56sW0cB3pv4MX8iMAa5fo0zulrpP3h7kGJe4rh%2F%2FlQlWjZdrLP1aM2ASbFjywC%2Fw%2Bp5dNrCjBRUfvwYc4MCSdY5evphOCpf1B8nfDBh7Er8C%2F7gCYvKALqYA6KDGTknbXdvp2vsHz%2F1l3CM7sKggRY1ZXDO5OE8E1xJUDLpoVX00L1SXcJNMGRFbuKXCCY6BMW%2BPNCeiUuiPs2s2MEMpag9yxU8qZek6s%2F2gjjszoOcDtTDtd67d0DiRf3dsCvpwlGWnQDNEw34%2BcvQY6pgHzqVQC7XaU63hJgTy03hOby7y2tJae1v6APt6xungThavdRKa0Q9WsrYHZk23Q7sgarDyaaUBbMIZuy%2BzQzId2k1AbFynECHrS%2FpZSaOitJ4bSHWoKuhkp%2FD5cxGXXFpsfsiuu9irbMloH1qFRYgdO9H7vFva%2F6M4jA56wA50dI3h4JOsB%2FLVL1bm5RTiY4oLkCkbYsffwjyQ44zFdsHEX7zZe6tvv&X-Amz-Signature=40f9e4fb7a81d64f6b66210c7b675eaa92b4f4a27f6d221006ba6ca61f1a30c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM5NMUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCmpecSJbjj0W7sm1kyfUsqUWif%2Bd3J3Xj2aEd5Zd1gFQIhALetYIHAievU%2BciiR%2BMkhiniBair8SNxky6%2BZBqbvll6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzy2GLERLrblSp0xO8q3AO9m%2FqpKwqNQJL%2BmZhFs%2FiYaMYQ7D%2FHaldfPaw%2FigQXwh2fF2gpqLZqXIK73S5wmvAREGq%2BXPQDT%2FSgtQv7BCiI%2FegpxeBwp04RfmC4uWOWeknPPD8AhHbH%2Fq2suOAGiqSTILFnbSbC2BCjA5rvSH8ymRo4JdOkR91LRRREjizRmi3KHI7a0MJMNWP0QZqpxrkdc5eGBnqrX3PtbbVP13vn4BrpZ1Mb3xTYAYibv7OilGbkqoCT8H4eep1biyKvZnVN9e0tt5BiOq90QUFjaQPFuylz0uRx2RAMeVatxbK%2Bl6c6E67t%2BQFqchy1JTtSztntNRiGERK2AZX9EeGd1g9OxIXd%2FsurHewtjwa9LbdGRFPZ9Zr%2BKdmvwnGQgsgnYeTb%2Bo9IXogIJG8L5AagOQe1fRyAAyX%2F7Cl8SV5xq75uduOtv3Va1N%2BO2duu9FHzFFC55wRNg5Zh2vkiz75Dt%2FSt%2BDpiG%2FxLG8pcRK2zkhWqvnY82i74KzVdnvR5LV3fEc1klfuc%2BczaCjko6SN0N26U5Dizg2yqX8LvUh%2BrkZPTADxXunj%2FfRWq9EhTyibmqjtZcFpWrVqw2HhsGn9omnZKuO71NCBEw8AiHVTHtTIijMYRa40uPGIHneud%2FTDuj5y9BjqkATBw8VNBTmtOwKnYj2SDGGdHzmifr3j8gMIPUEE8ELAMaxwQb0Y8c%2FJSeqocAbZQk3e1iAoPbRDQtOfsWZJs43dWWbp9gZS9OGg7VO4bB3WzDDzO7NHT%2FGD4MPoboOKpVrFPqxAmy%2ButbSuValCpFMnCjp2rvv0IFuUmC%2Bo6RDeHJ6KuFhZHATvT8rbsthASPO020telKYJDedftLmRuCc8ZeSxK&X-Amz-Signature=68a913461d28080b40bfb3dd0eb767b1b4754ad92f4efa8938b8d9d47bdc4ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
