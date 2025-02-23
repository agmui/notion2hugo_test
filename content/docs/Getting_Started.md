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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RH76MOI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW%2BKEDXTH9IOYhWg8jl8hPJO%2FnIiWENOciXqXOA%2BxEtAiEA%2F7wFyeGZQayDJnQ3qP1JG8aRlcDdPPmweaf8eTtHN%2BIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPM%2F8PqOMNG3rT2OlyrcA1120AkAYbueeeKTqA4YxZsK6Ui95%2BTsgtcJiQcnM%2BPFUZG3CA5rYXfylcs0Uf3dxKpLZe9NaHTAbeTKsTiFTc6vI3fZgud9UQvGqjOItNIMGLa44wCZzSPDbZ89%2BociG4XtzRq0AlKtZcYOEi2ciPmnRfUd0K4K23jnhmBCYHzN8sr05Ppa%2FsytknpJHdIyt%2FQEXJVTV3ClvA%2BhN5b2AX0v%2Buah35Fzyzax4gxzulsclUM1Z4EShb7XBorVMqvc7gwquXdmK6seJRtoGWmk%2Fr%2FcVhveQHpEBspSL9fFnNy1eCTaKPfIpfImq%2Fztg7CF%2BQzz1Eb5ptG4UqAi4geAJalhtW6sDASeGyKtw0SEpCRaenpohb%2BeTW%2BUO7l6DrtNGCC3xzjtChWYxrjzGZImjZemzORuEXhVuZ07xa3wQOWplp%2BBoULJTDXzzN7m1k4KXUrX%2B11%2FJw7lNDVmmpzMjAvy1JQII%2FL35mK1BwaIXTsv8qm4speagjG084vX0dgBKWM00eFmeYgFMI1qDRNCDk9rS31RKG2ZPICRoEcQVnxaAUnnDLCIWbB14ET7JUKJlDiqVv9iIyGrCYPC1saKhzQufn2tm1U%2FchL9Bok2tgd29rrr7UDYDl7bRDmKMKqJ7b0GOqUBkA397HIsptHPaKntdvnkaTjW8QssxtH3kuLfBE8vbxc%2FijbZizbEnDJd%2FCU%2FJtHzEa%2BX5Yn39XCcLfrv0fn0dCpIwIozxNXknWZkZjPSKtp%2FXf2%2FXDr61G1nLoqnHgx89R419h68fO4JAKwN03MpCSQblaOExCoeDpmeZ0JiQGSTcaUYXycV8uQyvJPojg5h6Vl5wueC%2FF0ojIIAR%2BhnKtZyKpW1&X-Amz-Signature=d9463bab96a74d29bd538fd5ff3c631d8394ba23fce902191909e6bec137aceb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RH76MOI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW%2BKEDXTH9IOYhWg8jl8hPJO%2FnIiWENOciXqXOA%2BxEtAiEA%2F7wFyeGZQayDJnQ3qP1JG8aRlcDdPPmweaf8eTtHN%2BIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPM%2F8PqOMNG3rT2OlyrcA1120AkAYbueeeKTqA4YxZsK6Ui95%2BTsgtcJiQcnM%2BPFUZG3CA5rYXfylcs0Uf3dxKpLZe9NaHTAbeTKsTiFTc6vI3fZgud9UQvGqjOItNIMGLa44wCZzSPDbZ89%2BociG4XtzRq0AlKtZcYOEi2ciPmnRfUd0K4K23jnhmBCYHzN8sr05Ppa%2FsytknpJHdIyt%2FQEXJVTV3ClvA%2BhN5b2AX0v%2Buah35Fzyzax4gxzulsclUM1Z4EShb7XBorVMqvc7gwquXdmK6seJRtoGWmk%2Fr%2FcVhveQHpEBspSL9fFnNy1eCTaKPfIpfImq%2Fztg7CF%2BQzz1Eb5ptG4UqAi4geAJalhtW6sDASeGyKtw0SEpCRaenpohb%2BeTW%2BUO7l6DrtNGCC3xzjtChWYxrjzGZImjZemzORuEXhVuZ07xa3wQOWplp%2BBoULJTDXzzN7m1k4KXUrX%2B11%2FJw7lNDVmmpzMjAvy1JQII%2FL35mK1BwaIXTsv8qm4speagjG084vX0dgBKWM00eFmeYgFMI1qDRNCDk9rS31RKG2ZPICRoEcQVnxaAUnnDLCIWbB14ET7JUKJlDiqVv9iIyGrCYPC1saKhzQufn2tm1U%2FchL9Bok2tgd29rrr7UDYDl7bRDmKMKqJ7b0GOqUBkA397HIsptHPaKntdvnkaTjW8QssxtH3kuLfBE8vbxc%2FijbZizbEnDJd%2FCU%2FJtHzEa%2BX5Yn39XCcLfrv0fn0dCpIwIozxNXknWZkZjPSKtp%2FXf2%2FXDr61G1nLoqnHgx89R419h68fO4JAKwN03MpCSQblaOExCoeDpmeZ0JiQGSTcaUYXycV8uQyvJPojg5h6Vl5wueC%2FF0ojIIAR%2BhnKtZyKpW1&X-Amz-Signature=4df9d6889642b07e8468c1ab31e0baf0a809a23a8fc80983c1393c4d16b78349&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLAFBFWK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9tb5pzlO8BgXDFVnQbWENWsMsGshYNbux5IXFJe9RJAiB0Rkw7jdUcnBtZKfRsn9NngTbHyzKJkC%2FdIvrQ8EOd1Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqIe2syAuig9R0BGDKtwDyUKwvKaIgQCrPY9C1kIkWdMaG1UlhWoQj89BDPMJ6FFcP0%2FovoiL44eCP3L%2Fp4pmtds8aaeInzjGrISujTzYAvbBXHYHYXLFYag540zZhpM%2BoThCqn43XNSm%2FhtSqda9lH9lcJ8%2FfG8dTS6f5caxUBdKdFzuDPw1xrgj4Liumr0ZyZn5GOnKjwUsWbxDKhWBJOcld3OyO5QXha2Oo7MWaDc2jS%2BBxko9CNfzYp1xpz308lNLnMq9uRIzmBuzKKEfdcbwGvvy7C%2BHJtNRjmFHa5ThILAjZPTc6ZP3IZfDBmYhI1MT9byL3hqO4AgIsPzJrEYXLwuCb2VT8La9UNfIB0AX8PoytvZnZ34mfgq9TYl70%2BQ%2Ba1nv7U%2FwnEMCwxx7rDYFpJwwYf4Y7L460kuogMWVPlGfl99MobEn4zNVKrjwnclvNX76zn3hql%2F0sURDPjyPIDwOW9VxA6TXd3ruee9SqUvHZAHySMchO5VXFthuhRx062ZgQxF86NrQcQXkEC%2FjUVHZPNmQ3YPb1lSf0yWFnLNCPai8S8e3K%2F9fwCmbfNSWJAi3kpjZAFsg9LY5zmn33myy9ofZp%2Bzv52VNwB%2B01BgZ3I0XpBCfAXPHlMJXIusclcNRx56ut%2FQwz5jtvQY6pgELS5S6U7KpgGWMnQtaGCkfz4Ay6ZCgp4OAimud3T0z0YFRD0GIkisW5f%2Bpa3txSZkKC9xOZc5Gi8a%2Bt5Bmz8iSGX3nV95Eab2I4YLt5pIeai8XfA7g4Tko0lSkqjosOeRZrzbMiwiqyrHT%2FGWjSHCvBZGY8KMvXVzh8fEDAI8%2FE3JVXLbbATBxrebTPypirgTHb5%2FU%2FGdMKmcIjHRSfbnMF4v%2FzLCO&X-Amz-Signature=41b92eeed05c3d5aa6b75460e24d18e2db6e3b80b0bfff9329b5a10dc6c4a4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMILZHMW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FRM3BzjH0HX2HjKIN7Hu193R1laP%2BMNZomdWlYO%2FrqAIhANiC5Uaik36cg9yEiP435GnaG8ZFMF4R7Dq%2FgdYdC7R0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igztiwndfug3%2B3y59aQq3AN9kUQ9SMzQFL0pl1zeNYfnQspfUbAGUoERv8R%2Bix%2BWXfZxgjCT1hmjtA0A0qCp505qjJ%2BH%2FIajarkvvry1t6vfG%2F1i%2F%2BQlWlsI0PLOUoa4aPMzzBsdVXU0MG9doQEMUHIHdsXt0JISAL9YcZbu4hTTqAl2zCfXTlqEjYo25xKw4QYNy58Qa6IyV8SPlvJE9GtZu6ecvkZB3u3TCMOCt%2FHJ8%2Bhie%2FIHR5Y%2BLKdsRZb3BE3GRxkTVITlRDQgXrn63hnzEUkYRVvimmR9PdicI54qv%2FBtS80%2BXFQlAy%2FbNFiD0phsypF1NJ7oxM8t%2B15uPvtTtLOAnO%2FK5AFsdE5oWSGJ%2BhvfcUMEAe7UlZmU%2FZTWIFB8gXL0G34WDyu71uoaLlHPmIpvssZG%2F6K%2FkBSfrv0tsCmGy%2FGL8mUgpHW963sEBEawETZINctFuYepsdGYvRLuhboe9Ph4KzFQPN%2B%2FRmxenc30VrBKcpoOurtIvcq1ePsmR9mR6mdJLbsLSvH%2BkqDY0mWd5dRWb8BxCuBWU57ijgI3PXc3H28yIw3EQqmMSut%2F4tMX0gZOvW0FvvI9amuB4tXgdeeQLFb27GIM4rsc6zTZXVseDqjHE5RtzIm0JxDtf%2BS0Maxozx5PlDDQpO29BjqkAV0fEDzauDexWuIGLBALvpcVJ3oYK5K%2F2fCfVnlF5EEGzTxPQOIxeq3qOCECsg5dXz0XN0d9eX3brFfnpMkjSpSdWDzutvxi5a%2BSe9KjNaUI925ODkuUor1h3pv8gAt7%2FId1sPmnwLpzxHTicKIpTgsUoifDhnw2UMiEN2yyHa372lJx59rkOU1F4xMpUG1shlxC%2BGGxqvMw8cBlRXFFsjcxjIt3&X-Amz-Signature=edc94943fc0780dfa9c45735d2d663b65ad5a756fe0d3963ca775a5d3ee721d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RH76MOI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW%2BKEDXTH9IOYhWg8jl8hPJO%2FnIiWENOciXqXOA%2BxEtAiEA%2F7wFyeGZQayDJnQ3qP1JG8aRlcDdPPmweaf8eTtHN%2BIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPM%2F8PqOMNG3rT2OlyrcA1120AkAYbueeeKTqA4YxZsK6Ui95%2BTsgtcJiQcnM%2BPFUZG3CA5rYXfylcs0Uf3dxKpLZe9NaHTAbeTKsTiFTc6vI3fZgud9UQvGqjOItNIMGLa44wCZzSPDbZ89%2BociG4XtzRq0AlKtZcYOEi2ciPmnRfUd0K4K23jnhmBCYHzN8sr05Ppa%2FsytknpJHdIyt%2FQEXJVTV3ClvA%2BhN5b2AX0v%2Buah35Fzyzax4gxzulsclUM1Z4EShb7XBorVMqvc7gwquXdmK6seJRtoGWmk%2Fr%2FcVhveQHpEBspSL9fFnNy1eCTaKPfIpfImq%2Fztg7CF%2BQzz1Eb5ptG4UqAi4geAJalhtW6sDASeGyKtw0SEpCRaenpohb%2BeTW%2BUO7l6DrtNGCC3xzjtChWYxrjzGZImjZemzORuEXhVuZ07xa3wQOWplp%2BBoULJTDXzzN7m1k4KXUrX%2B11%2FJw7lNDVmmpzMjAvy1JQII%2FL35mK1BwaIXTsv8qm4speagjG084vX0dgBKWM00eFmeYgFMI1qDRNCDk9rS31RKG2ZPICRoEcQVnxaAUnnDLCIWbB14ET7JUKJlDiqVv9iIyGrCYPC1saKhzQufn2tm1U%2FchL9Bok2tgd29rrr7UDYDl7bRDmKMKqJ7b0GOqUBkA397HIsptHPaKntdvnkaTjW8QssxtH3kuLfBE8vbxc%2FijbZizbEnDJd%2FCU%2FJtHzEa%2BX5Yn39XCcLfrv0fn0dCpIwIozxNXknWZkZjPSKtp%2FXf2%2FXDr61G1nLoqnHgx89R419h68fO4JAKwN03MpCSQblaOExCoeDpmeZ0JiQGSTcaUYXycV8uQyvJPojg5h6Vl5wueC%2FF0ojIIAR%2BhnKtZyKpW1&X-Amz-Signature=5d1597177a72193d6a851f57b966c1c9167e1a34802a956c9d0f09332ec38abd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
