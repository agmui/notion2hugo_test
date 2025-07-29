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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYSYVM4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDJ%2BCHuS38ZLxUCLgJc7IE%2ByON76Vc6b5%2Fr7mvaQpJg9gIgXWX4pz8WSf8FnlSt7am%2FvvjU6YgjTmo0DhfMFEupsRkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVMkhyHkEEOAhHnKircA0j0OzbIBSb5YGYjdMAhaIr9SSOcsUyw521Y0fWGqIiZwf%2FR7wcWnqBXtl%2BN488S5FGeLE5VaDmYUulCjP11DQceAOT%2B1UJJ7eflbweo%2FtMmg0MrMsj7Cl%2Fw7JtxW1FrHTFaOGrGqVk%2BofE3kcXCZjEBtbSkvAbZmbo8gsklP55JrlLljVtTX1xo5sQRwhkfOoQfpgMc7hYHQ782A4a48ovCtLc9K%2FRjDVykZmgQyomWnuksRzy796CFXDkLUtm73gjY%2F2Lz6y7W9CzU%2Fovtppwxex6JZ5wrOCh0KJ3%2FKJajt5xXW5VT8LDSA3kZB642XYvZ1ZjJYhl36AVSNCy%2BS%2F98AxXq9An66i9iJOmUSpWTiFar6XDHDbxBPEpnATacw5z7z0KHknuKElDQv3vSOzGRBT1Yh2J7fsyUqOVnuGh4wl%2B7HekEba7qAg0Y5qPowiVStlRnU2LqPDTypcGNQFzEf811YfKh9Ex8B6I4aWC4XjkwB9sI2ywlW2Zr%2FPetznrkJDIgpcz5RB2uQoddNUEVukfmU4%2FXt7SRgqdlmi0QFGIN%2BnnuogG63LzavJpz8vIFppX%2BQ0WZaX9lpa2Ln%2FLgUZcS%2Fv1xDTSzoTB77g8X7p2gqLjZ8WuFKHHeMNDnosQGOqUBHO98tPR4meEfXJSxOcPQFesJzxdmv6tWSfIpA%2BISA%2Bfss1X%2B5TvaLclsxdke1jdjBunCkPSrNDQQq0DC%2FmWyhR7EHxELOgNr97tiwpmdE9hBZMhcB1BUcaY2fs0DC1guUHF4KjM3J%2FbXiRoD45RXeUITJhyBb1CGlX%2Fj6g%2BNORviwKmkn6bnSzSG9rBT5%2FpSCHckQsSb%2Fg%2Feo9tkFqxhEmMpVFGz&X-Amz-Signature=8cdfcee1f7a086295726cf03b1a24e552f75c8eeecbfb2b610488977add6869f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYSYVM4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDJ%2BCHuS38ZLxUCLgJc7IE%2ByON76Vc6b5%2Fr7mvaQpJg9gIgXWX4pz8WSf8FnlSt7am%2FvvjU6YgjTmo0DhfMFEupsRkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVMkhyHkEEOAhHnKircA0j0OzbIBSb5YGYjdMAhaIr9SSOcsUyw521Y0fWGqIiZwf%2FR7wcWnqBXtl%2BN488S5FGeLE5VaDmYUulCjP11DQceAOT%2B1UJJ7eflbweo%2FtMmg0MrMsj7Cl%2Fw7JtxW1FrHTFaOGrGqVk%2BofE3kcXCZjEBtbSkvAbZmbo8gsklP55JrlLljVtTX1xo5sQRwhkfOoQfpgMc7hYHQ782A4a48ovCtLc9K%2FRjDVykZmgQyomWnuksRzy796CFXDkLUtm73gjY%2F2Lz6y7W9CzU%2Fovtppwxex6JZ5wrOCh0KJ3%2FKJajt5xXW5VT8LDSA3kZB642XYvZ1ZjJYhl36AVSNCy%2BS%2F98AxXq9An66i9iJOmUSpWTiFar6XDHDbxBPEpnATacw5z7z0KHknuKElDQv3vSOzGRBT1Yh2J7fsyUqOVnuGh4wl%2B7HekEba7qAg0Y5qPowiVStlRnU2LqPDTypcGNQFzEf811YfKh9Ex8B6I4aWC4XjkwB9sI2ywlW2Zr%2FPetznrkJDIgpcz5RB2uQoddNUEVukfmU4%2FXt7SRgqdlmi0QFGIN%2BnnuogG63LzavJpz8vIFppX%2BQ0WZaX9lpa2Ln%2FLgUZcS%2Fv1xDTSzoTB77g8X7p2gqLjZ8WuFKHHeMNDnosQGOqUBHO98tPR4meEfXJSxOcPQFesJzxdmv6tWSfIpA%2BISA%2Bfss1X%2B5TvaLclsxdke1jdjBunCkPSrNDQQq0DC%2FmWyhR7EHxELOgNr97tiwpmdE9hBZMhcB1BUcaY2fs0DC1guUHF4KjM3J%2FbXiRoD45RXeUITJhyBb1CGlX%2Fj6g%2BNORviwKmkn6bnSzSG9rBT5%2FpSCHckQsSb%2Fg%2Feo9tkFqxhEmMpVFGz&X-Amz-Signature=3f8a288a879fdaaebba0c2d740a790b157bb08c574d8b44e341b9d19d5f1f3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYSYVM4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDJ%2BCHuS38ZLxUCLgJc7IE%2ByON76Vc6b5%2Fr7mvaQpJg9gIgXWX4pz8WSf8FnlSt7am%2FvvjU6YgjTmo0DhfMFEupsRkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVMkhyHkEEOAhHnKircA0j0OzbIBSb5YGYjdMAhaIr9SSOcsUyw521Y0fWGqIiZwf%2FR7wcWnqBXtl%2BN488S5FGeLE5VaDmYUulCjP11DQceAOT%2B1UJJ7eflbweo%2FtMmg0MrMsj7Cl%2Fw7JtxW1FrHTFaOGrGqVk%2BofE3kcXCZjEBtbSkvAbZmbo8gsklP55JrlLljVtTX1xo5sQRwhkfOoQfpgMc7hYHQ782A4a48ovCtLc9K%2FRjDVykZmgQyomWnuksRzy796CFXDkLUtm73gjY%2F2Lz6y7W9CzU%2Fovtppwxex6JZ5wrOCh0KJ3%2FKJajt5xXW5VT8LDSA3kZB642XYvZ1ZjJYhl36AVSNCy%2BS%2F98AxXq9An66i9iJOmUSpWTiFar6XDHDbxBPEpnATacw5z7z0KHknuKElDQv3vSOzGRBT1Yh2J7fsyUqOVnuGh4wl%2B7HekEba7qAg0Y5qPowiVStlRnU2LqPDTypcGNQFzEf811YfKh9Ex8B6I4aWC4XjkwB9sI2ywlW2Zr%2FPetznrkJDIgpcz5RB2uQoddNUEVukfmU4%2FXt7SRgqdlmi0QFGIN%2BnnuogG63LzavJpz8vIFppX%2BQ0WZaX9lpa2Ln%2FLgUZcS%2Fv1xDTSzoTB77g8X7p2gqLjZ8WuFKHHeMNDnosQGOqUBHO98tPR4meEfXJSxOcPQFesJzxdmv6tWSfIpA%2BISA%2Bfss1X%2B5TvaLclsxdke1jdjBunCkPSrNDQQq0DC%2FmWyhR7EHxELOgNr97tiwpmdE9hBZMhcB1BUcaY2fs0DC1guUHF4KjM3J%2FbXiRoD45RXeUITJhyBb1CGlX%2Fj6g%2BNORviwKmkn6bnSzSG9rBT5%2FpSCHckQsSb%2Fg%2Feo9tkFqxhEmMpVFGz&X-Amz-Signature=61de2205bab6d473074a627457864a165087446ade62d2b574df035554512f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CUGONKG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIG6G6IdvnmXlq5HaoT%2F5VYnfChi90O1VEpzGZC3OSsZHAiEAlfH%2F2HDHUo9vVDFG8biNMZ6c13V%2Bg%2F8YtzLzjFtIC2IqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxZxHHTHyG1mXq8oSrcA4VY%2FwnSIVRvCVnBCEzoneAsTDj7VB4TqVOznlIPPl%2Fw7XA5XQjWHUndTUj7ArIX2%2BJ%2BiSahOxaZjRNX1aAPdtw0aMGvswM7tky4CP9kVQzaVCZDd7R%2ByJNHS4H4vpvTpk1splh6muGoF%2B1cGf14SBF2x3T9JRAoA6OSNFpa9l5Z5tvCuSWJYwaYyu0UInAg2pLktD0GRmx24PK9OCUiATAUY4ZJ%2F8bMDduZIL4XPqtjxBqIfppqSGMMQnjq4rgYzW7VZ4PDz5TRUU3pWycd3iXELvWm50hCqUgUcjaNFn%2FCU3zR9YdMoPfeb%2FphiFGfRUFcc79ZNlTG6bD7e6ugUxMvllUV1W9qc4mxMfYDP%2BcIvL6gQksi2JkndhTNKCbUOgpIak2%2Fy8eNtGZ73HxGE5HdSjcntFMLV1pwBdL9ktWQFOxEJ%2BQUQJVEzKO%2FaxPDZhvzfUJSrxfbaE7wsSpFebTcetbkafq0%2FVR9Qb7AjNpBkTwmVSt2j16paRJBwYIgyz7bzeoc8o4Zxkr2FJJnJFJpP8qU6PzCVtoNZX9UA4vjA7XpqrUmlcgbirnOVGvLzg5UAmP1m8RXzDXrs7V8FCwrCkoBZVrPEcs3U4IH8kCQu4DalYEe6cFS%2FJlPMPzmosQGOqUB94Yavfu%2FWBLEqFi%2BrVEUCZ6bIY0%2BIASU4w2Whg1gAQH7RJaVDCYeanxUqYbawZU45u1ra7mq47LRC07gkn%2BTXL9fQ7%2F36Srlnp0TaPldsgfoG2M7dnVHEPauVEEaq9bUEVDX2sRBwVOsnxUQ%2BUtxhpuA9AMZwrkCDZ1SUVM6hNSvZ5zSjJlskNAEFiSkyCVlMBrfAnLUzzqTfBGqnO7OyxKhD37s&X-Amz-Signature=7804928b7406ce91b83a78f87f9a81f60fab3461aeefcc8b81599a5a22193e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JYZOKE%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBbg1QKhaIQOvWiIXyP%2FipyxWGjvtshe3EDWz%2BtlW7nFAiBVDzthHW0nLv%2FXtTDhCFkpY7%2B4rJSt0J5RseMgwBTWxCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDuG7iC%2F%2FjHMAArryKtwDn8pb%2FDZhWOR%2BwpxtaGtElke0%2BOymbq8haNbchHt2wnMUpp7Y9y4lHiXebQPxiyMpmRBpRimGSXn%2BpzH1jAddU3y9f7sV5Ht992xB6gCn%2F%2FjbNOVOFm8tCirG8xtKcBdoqewivojGcqSnM4sH6Eyczyv2JGVjwLuiTIRcAizvB0etgsmLPp%2BmC1Wixe4wcCFRhUBId7Zj%2FHad7oSQqKBmW%2FJ6cxBawk%2FfVBWO40lMktd4QL22jFC5yzSZZ3kz2V%2BLVSL1LIgetT6MpdJdnq8ZzQjUZN1kqbpKOprk4tkqsK1WPCQQMif1y9jvFbuxJvvsCPtpHVu7lAXQGAP40M4ct2vnfMCaXPbajrgfgfCyFWztBvoIEJcdTZfJkSWfIzUMzyo%2FLUqFlaGpPN2Jm4D92NDy1qrgVZNblpA%2Bplp%2FXhnrB7tq%2FsTGH%2FCQynqNQz9BxiQBA%2BitjEodb12gaXHF8HDQmTxYM2%2Bwmqz3bbtLy5vlXQENzIzC3sSWNFKAo%2FsXp6ZGJnKTJiuU2V1wkSImTf9d4nX%2BmrWZyTQwpIW1TvbV3i7r%2BXSn4%2FM7u5kFJx1pqXpW%2Fx2RBNsBxrZhEl6idVuqxyuLMHPozlgtQogVam2HljhT%2FXEYi9rEVfAwvueixAY6pgFrnJfOuqwGQQbgBLABXrBsUh59blMzZJPIUNlxQU%2FiAB13sQXRhQYFTp3gV3NEdEDkuCkQEJpLjq7Oe3JsSA9OAAOutCO11oWQ5L79VGU6nu62R%2Bu9ERvNOuYCkc5RYh%2B0PPRrW9DWBosONlJFL%2BgFyO3BmRvFyT4PSWxF3gKx2nsxsJt3WYDPhJ1tpLNbBPiDQsX0WtlHeQRvjo6BG5RF%2BukfdWDK&X-Amz-Signature=4a18c4346b9bd213a07339d6552571c688a257a48227950f7343ca67de52f232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYSYVM4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDJ%2BCHuS38ZLxUCLgJc7IE%2ByON76Vc6b5%2Fr7mvaQpJg9gIgXWX4pz8WSf8FnlSt7am%2FvvjU6YgjTmo0DhfMFEupsRkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVMkhyHkEEOAhHnKircA0j0OzbIBSb5YGYjdMAhaIr9SSOcsUyw521Y0fWGqIiZwf%2FR7wcWnqBXtl%2BN488S5FGeLE5VaDmYUulCjP11DQceAOT%2B1UJJ7eflbweo%2FtMmg0MrMsj7Cl%2Fw7JtxW1FrHTFaOGrGqVk%2BofE3kcXCZjEBtbSkvAbZmbo8gsklP55JrlLljVtTX1xo5sQRwhkfOoQfpgMc7hYHQ782A4a48ovCtLc9K%2FRjDVykZmgQyomWnuksRzy796CFXDkLUtm73gjY%2F2Lz6y7W9CzU%2Fovtppwxex6JZ5wrOCh0KJ3%2FKJajt5xXW5VT8LDSA3kZB642XYvZ1ZjJYhl36AVSNCy%2BS%2F98AxXq9An66i9iJOmUSpWTiFar6XDHDbxBPEpnATacw5z7z0KHknuKElDQv3vSOzGRBT1Yh2J7fsyUqOVnuGh4wl%2B7HekEba7qAg0Y5qPowiVStlRnU2LqPDTypcGNQFzEf811YfKh9Ex8B6I4aWC4XjkwB9sI2ywlW2Zr%2FPetznrkJDIgpcz5RB2uQoddNUEVukfmU4%2FXt7SRgqdlmi0QFGIN%2BnnuogG63LzavJpz8vIFppX%2BQ0WZaX9lpa2Ln%2FLgUZcS%2Fv1xDTSzoTB77g8X7p2gqLjZ8WuFKHHeMNDnosQGOqUBHO98tPR4meEfXJSxOcPQFesJzxdmv6tWSfIpA%2BISA%2Bfss1X%2B5TvaLclsxdke1jdjBunCkPSrNDQQq0DC%2FmWyhR7EHxELOgNr97tiwpmdE9hBZMhcB1BUcaY2fs0DC1guUHF4KjM3J%2FbXiRoD45RXeUITJhyBb1CGlX%2Fj6g%2BNORviwKmkn6bnSzSG9rBT5%2FpSCHckQsSb%2Fg%2Feo9tkFqxhEmMpVFGz&X-Amz-Signature=c86111058dcec56b581fb7ee149f234b7d9d7e42b1271d6c908354e6ed136301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
