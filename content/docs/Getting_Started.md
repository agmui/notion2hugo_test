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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKVHIJK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIArg74tdmz%2FD3%2B%2B4WPLh9nXYCehJelEZuEqtjl16rrgSAiEA325oHcLJK1Hsi38OCL6BsVHmvej8Z3MyQzqD9N07Wisq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPIXaB2L12FMf%2F1YyircAxFswh9rQfZtTIURL8P2ALySIWP5oJJX5TakMBoIXKAqxvHIvoHBnYCEh4HBMZtLXwbXdKcmr9zUSDkisMeC26NtKITPZVfMZO%2FrClW2OHd%2F5N1RtihkL%2BW5yFzlwTSK6Etjf5pRXn97Ey6CUj%2F53zKoXBTV0%2Br0JaBkXNdYUJ2ab1f%2BKlL6mtgqpU%2BNI9HXEUYz3EIItLFTBukwxVXht0dnACuF%2BeQDcg1E6JZwGv%2BMXUVeaGBe3jS%2FbPG1Vo08ErWrxXgtlv8yUJCWEDXTSLo54t74pQc2pt0jgwQCloiyoBUI466KX1MhatGc1i%2FVzz9ps11cndYlMkXni2hjPoSAOUYIPY1b3Xjyech3Lf6ImK2cxUxmDi2IoM5hroZs28x2CkGAuiO%2B%2BKM9QZQcikfqxduBBDkrmEVhx64wDhS9GhqaXD88uspCr0UP4f5PaAuOxXlnzEZTlEexGbcu%2Bfb3kx13dReQKHp%2FzoILU%2BigeZFPhjRBvCbtJSxFBc7OL41jzonaOg9YvrmNhPMY6%2B%2F9ee9U9GdnLuV56rPfI0ZGJ8zoarAWOtEB%2BDmymLgmQkE8UfWV37rKdQhCnxPKACipQU471kgk7fnuyeYHs7RFCjCf7gduYfBq4hA1MKCJ5sIGOqUBe%2BapxPQCxpId5bigy9HZUHTIr%2FOGml59j5l6PNLHawBrnQpHy%2Ff0sv%2Bbfdad53EXptQ4kXyrk1NE%2FybTZwvLlZLCQeoojZ3yYPCJwBoiOIuldKkrs9tcTd3TMc9k4QiJGTmqI9O5z%2FNqU025U%2F%2BiH%2B8X0MuGyJw9kWXVe%2FzzXy4kbPrw6BiO1PKfLpKy5TwBWik984HSM9SNBEdrwO4XCi%2BgMr2v&X-Amz-Signature=4efa7c1cc47e49d06dceafe41dbf289c22277186d7103ed40ae8411700acc1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKVHIJK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIArg74tdmz%2FD3%2B%2B4WPLh9nXYCehJelEZuEqtjl16rrgSAiEA325oHcLJK1Hsi38OCL6BsVHmvej8Z3MyQzqD9N07Wisq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPIXaB2L12FMf%2F1YyircAxFswh9rQfZtTIURL8P2ALySIWP5oJJX5TakMBoIXKAqxvHIvoHBnYCEh4HBMZtLXwbXdKcmr9zUSDkisMeC26NtKITPZVfMZO%2FrClW2OHd%2F5N1RtihkL%2BW5yFzlwTSK6Etjf5pRXn97Ey6CUj%2F53zKoXBTV0%2Br0JaBkXNdYUJ2ab1f%2BKlL6mtgqpU%2BNI9HXEUYz3EIItLFTBukwxVXht0dnACuF%2BeQDcg1E6JZwGv%2BMXUVeaGBe3jS%2FbPG1Vo08ErWrxXgtlv8yUJCWEDXTSLo54t74pQc2pt0jgwQCloiyoBUI466KX1MhatGc1i%2FVzz9ps11cndYlMkXni2hjPoSAOUYIPY1b3Xjyech3Lf6ImK2cxUxmDi2IoM5hroZs28x2CkGAuiO%2B%2BKM9QZQcikfqxduBBDkrmEVhx64wDhS9GhqaXD88uspCr0UP4f5PaAuOxXlnzEZTlEexGbcu%2Bfb3kx13dReQKHp%2FzoILU%2BigeZFPhjRBvCbtJSxFBc7OL41jzonaOg9YvrmNhPMY6%2B%2F9ee9U9GdnLuV56rPfI0ZGJ8zoarAWOtEB%2BDmymLgmQkE8UfWV37rKdQhCnxPKACipQU471kgk7fnuyeYHs7RFCjCf7gduYfBq4hA1MKCJ5sIGOqUBe%2BapxPQCxpId5bigy9HZUHTIr%2FOGml59j5l6PNLHawBrnQpHy%2Ff0sv%2Bbfdad53EXptQ4kXyrk1NE%2FybTZwvLlZLCQeoojZ3yYPCJwBoiOIuldKkrs9tcTd3TMc9k4QiJGTmqI9O5z%2FNqU025U%2F%2BiH%2B8X0MuGyJw9kWXVe%2FzzXy4kbPrw6BiO1PKfLpKy5TwBWik984HSM9SNBEdrwO4XCi%2BgMr2v&X-Amz-Signature=8f16c481e556686f3899fd9af45ca8c994c5716b95c6950beab85ef927793921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKVHIJK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIArg74tdmz%2FD3%2B%2B4WPLh9nXYCehJelEZuEqtjl16rrgSAiEA325oHcLJK1Hsi38OCL6BsVHmvej8Z3MyQzqD9N07Wisq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPIXaB2L12FMf%2F1YyircAxFswh9rQfZtTIURL8P2ALySIWP5oJJX5TakMBoIXKAqxvHIvoHBnYCEh4HBMZtLXwbXdKcmr9zUSDkisMeC26NtKITPZVfMZO%2FrClW2OHd%2F5N1RtihkL%2BW5yFzlwTSK6Etjf5pRXn97Ey6CUj%2F53zKoXBTV0%2Br0JaBkXNdYUJ2ab1f%2BKlL6mtgqpU%2BNI9HXEUYz3EIItLFTBukwxVXht0dnACuF%2BeQDcg1E6JZwGv%2BMXUVeaGBe3jS%2FbPG1Vo08ErWrxXgtlv8yUJCWEDXTSLo54t74pQc2pt0jgwQCloiyoBUI466KX1MhatGc1i%2FVzz9ps11cndYlMkXni2hjPoSAOUYIPY1b3Xjyech3Lf6ImK2cxUxmDi2IoM5hroZs28x2CkGAuiO%2B%2BKM9QZQcikfqxduBBDkrmEVhx64wDhS9GhqaXD88uspCr0UP4f5PaAuOxXlnzEZTlEexGbcu%2Bfb3kx13dReQKHp%2FzoILU%2BigeZFPhjRBvCbtJSxFBc7OL41jzonaOg9YvrmNhPMY6%2B%2F9ee9U9GdnLuV56rPfI0ZGJ8zoarAWOtEB%2BDmymLgmQkE8UfWV37rKdQhCnxPKACipQU471kgk7fnuyeYHs7RFCjCf7gduYfBq4hA1MKCJ5sIGOqUBe%2BapxPQCxpId5bigy9HZUHTIr%2FOGml59j5l6PNLHawBrnQpHy%2Ff0sv%2Bbfdad53EXptQ4kXyrk1NE%2FybTZwvLlZLCQeoojZ3yYPCJwBoiOIuldKkrs9tcTd3TMc9k4QiJGTmqI9O5z%2FNqU025U%2F%2BiH%2B8X0MuGyJw9kWXVe%2FzzXy4kbPrw6BiO1PKfLpKy5TwBWik984HSM9SNBEdrwO4XCi%2BgMr2v&X-Amz-Signature=561395cb43e15af576b0e2afa22de19560ffe71b396e0836de753493317bfc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2UVIR7O%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC6uHv2Kk1LA1nZ1dyBB1YMKZSZHvOdLiTXAhq8iq4eewIhAMNejWrTGB7a3SUnCUNgkPoI6HtOS%2BbmPSX4Syk8BcmjKv8DCBoQABoMNjM3NDIzMTgzODA1IgzfpO2quKNMn9rtS68q3AM6KPfQyq0CyfWyGV0cyNSO4bOBE6qZ7Se5TmOzYGsswfxAcncqg%2F%2F37xWK%2FpjgqVNF9DXhUelzlXoBrcGQxwS%2F5rXboUD%2F0RbIP81pXnfFFfQ4CzTDqVDQispGw9RZ1SNl4zRHDEjBasOvBXHQrHLWXm7EMIWbZq2jXo3xg8PJSXTeFSrrNxHyPic7vZjCh7VTFsM0l6nWjlitT%2FdUzelDuQeoAKV2D5uXqwxsB1oPD5TVJ8zK9aNd7LeT%2BtLwFFu61wrJHUQQhUwMrUbWAmyk%2FaxaUQIeIweIFa%2BTRZFyHcS1Gj3cTg7xLkAU7jU3CmmZqbDF01iWJCotDU93P1Pd5El93Ds9zkteUnIRFoUZUd0WpxUbNRXmTO%2BDQ9Ql9gOb%2Fi8gvOYIq39C9GQMw0Y2KU6j%2BUgsVpjlnjFILMAIeCFoJ2zUQDzQudN73NetYZiNeiaIJnLdI3YY41IX%2Bk4qfDz%2FuJSEGPX6v%2BI8MFlpu4WtPjb2RA9j6eqLxFrO9g1J6PAEGdtTc3deLkEcTgQDNV31u7WXKcWLjGQNSMe0YBEmrzcT98hjFu%2FgCpx8lwwhcuoT1k5tFZwvTcykR3MREtdGMeSIVgDdYFQBkgzpTTRlvZR4jtOaZS48bjDEiObCBjqkAXFElD%2B2FZ9WdOKAqmwcbFp1TIAVg6TszFTfhtEjJqh%2FVb%2Fw66PGEh8Qpk3aUnjiwz%2FyisoSjuZgCaNUIoZ1vqSmz7J2nw%2Blm5VYIfu%2BIIzfdj106OEQ%2FdIIwewH00zhakN7AcHV2WmUMOob0ZdCdYGxd9Mx0dgO4in5hZzmt7Tsc5ggfX%2FJx8HXNuVdKuatGnBNiBPpvoJD0s4dV6yADRuf601c&X-Amz-Signature=d0f32d515c2884822236aed6e2e5afb483a423a94e6c77f2eb7a20c80b905ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3JYSI7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIGxYIJFkFfaycf2U1SckaFSBlOjniwKDjQO4nyFcIqIlAiEA55vKdTuOb1eEPoZQyAlcKNFsIX6suld4NWUuzMf%2FG%2FIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB9k2Bv7o%2BbOKRp%2BLircAyvml32Og9I35Hfm7aBFWF8AXemEKJl8W25gS38jzNPat3bnmH5bdvec6iAPzKPxP2mOW4eKZQ5xKUkWrDIRPaMoLSzKeerOVb4u%2FLSYUMn2W%2FRBXhKGNampJ%2BBILSw6rhpCv5HiNoiGXITrV7gV8mV6Rk5pD30A1AGNy3IDEaLgoc8R%2Fyln6l%2BC6RxcQ1DZaIQp7B33K0fK01vhLBQLW1kiRt9P9mUhmDVYfZd%2FC%2FVbanm2i43nGl8pj6PVo0kBVvAaqChSbQe7CesBihw5YXIbNtYz4ojn3NEnJapamvbgXGAbgJ7BdriqWfDhfS5TRBJdgRvQmUDPSfkmvHy57rPtYIRAzG%2BkLWR0oWQDUAm%2FvPwh7ty4vE9FFUs4ZFjxhg0sMFHlUIFs21kaVzKF%2B8F1iGJvuLqX5g04jnpVNCnaeLE%2FEzPrx4CDpuAiZFZ3TEAjYcrDdJuEwguLLmPuGc%2Ftw5bQsphjLMXk90rmGQ%2BQW9zhsyGY7m0kHzElKMb2b1LJF8C43pRAhsu5%2FiozWy1P3t%2FlIIfOjU1yN0KsMA84YRbOL9StS665wd8QzoZFx6JZMTKlufKGa6O4yymkQ5rQI%2Fy0%2FcOHxOYKn99i5%2Btd7tljgwdb5SUFUZOLMICJ5sIGOqUBCvO03jBiQ5z3WMpbOEADyHpfo%2FaN6n7o986Yc8l2JzmAGvWYbEv12uStGHyIP%2B0M6vjLUeEuSiwxhHUaiAnyYRKXZGhYfX1RrbGjXPT4q8sC9wWpIXhor8ESllbxjB%2FHTO8i1XlXrgMEbQabDqPVxi7sCnUbjvcG6LXco1u%2Bk3Ysj%2FMn1co5DBcfXyw5wzR0iu5yPVr2sUg1INIOBqmOyYg5DWzI&X-Amz-Signature=64b511ba99e379b6a2c9ff97ab0f01758fe9539e0cf6e74718d61e1658f5fdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKVHIJK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIArg74tdmz%2FD3%2B%2B4WPLh9nXYCehJelEZuEqtjl16rrgSAiEA325oHcLJK1Hsi38OCL6BsVHmvej8Z3MyQzqD9N07Wisq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPIXaB2L12FMf%2F1YyircAxFswh9rQfZtTIURL8P2ALySIWP5oJJX5TakMBoIXKAqxvHIvoHBnYCEh4HBMZtLXwbXdKcmr9zUSDkisMeC26NtKITPZVfMZO%2FrClW2OHd%2F5N1RtihkL%2BW5yFzlwTSK6Etjf5pRXn97Ey6CUj%2F53zKoXBTV0%2Br0JaBkXNdYUJ2ab1f%2BKlL6mtgqpU%2BNI9HXEUYz3EIItLFTBukwxVXht0dnACuF%2BeQDcg1E6JZwGv%2BMXUVeaGBe3jS%2FbPG1Vo08ErWrxXgtlv8yUJCWEDXTSLo54t74pQc2pt0jgwQCloiyoBUI466KX1MhatGc1i%2FVzz9ps11cndYlMkXni2hjPoSAOUYIPY1b3Xjyech3Lf6ImK2cxUxmDi2IoM5hroZs28x2CkGAuiO%2B%2BKM9QZQcikfqxduBBDkrmEVhx64wDhS9GhqaXD88uspCr0UP4f5PaAuOxXlnzEZTlEexGbcu%2Bfb3kx13dReQKHp%2FzoILU%2BigeZFPhjRBvCbtJSxFBc7OL41jzonaOg9YvrmNhPMY6%2B%2F9ee9U9GdnLuV56rPfI0ZGJ8zoarAWOtEB%2BDmymLgmQkE8UfWV37rKdQhCnxPKACipQU471kgk7fnuyeYHs7RFCjCf7gduYfBq4hA1MKCJ5sIGOqUBe%2BapxPQCxpId5bigy9HZUHTIr%2FOGml59j5l6PNLHawBrnQpHy%2Ff0sv%2Bbfdad53EXptQ4kXyrk1NE%2FybTZwvLlZLCQeoojZ3yYPCJwBoiOIuldKkrs9tcTd3TMc9k4QiJGTmqI9O5z%2FNqU025U%2F%2BiH%2B8X0MuGyJw9kWXVe%2FzzXy4kbPrw6BiO1PKfLpKy5TwBWik984HSM9SNBEdrwO4XCi%2BgMr2v&X-Amz-Signature=bc92ef9ab5c78d57648ef0f01f7ee6b3cf4a50ddc1f2a47170cdef1c1d279abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
