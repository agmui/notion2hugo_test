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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLBHDIR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDvYB1LroVKUGnMPwqQ3rRcTy%2F4lP%2BwUPzvA%2Fw7gtDqoQIhAJk9H3kByogR8ln8iNh%2FjqzSe6V5jE06Nh5zHRdK48fHKv8DCE4QABoMNjM3NDIzMTgzODA1IgxQuJJKoq9iWNZ1gzYq3ANNUqv9TgU9kTv%2FEYVQQto8LYf4DjeZlAAcsbb7pdva%2Bptl0AtCUGolrR0L3Kxx2brYtWgcRKSk%2BO4nKC7uk5deYiFL%2F5ZsmGoU0H5EjQ9Hl0u6sw%2Fvs0TxEW7vIKCqfezKOemi7mkIvmHmSEUuVKK%2BkPhKy00lQkxo3vuCWKP7IRvf82Yc0UTmpRguSVN546IFjUCMvUYHUASSwonknLRsKoW5OTMJlimshU3lV20%2Fmdt1v%2FiPWPXzr6bZULJqoxLLnPrRhw9bDi4b6x%2BhLXGN9qoq5kgLREuESu2drriky7QI1v1l4j8l98rJhgDGgzvL5PPfoj8148Yya%2BzX3wWMkhQhv%2Bwg5dmYMDAW7elSZTV7fMpM2Lrf%2FLOeyybXx92CQguCkSS7wSHqwZUYN6HW9rYHZCtfT7EXffei6kbYdjq7Ct%2FSCQVIZ472YHCKKaKy2NmbTvO8xkid0QlqAsRkZKVwHOtXI5D1m6cvBhb1DlcWdHBeAoZPVGqKy%2BUCT1gbJUdJI9q6mL5%2FZ0V0IwWD1CZMEjJFWYY5qwoRrZ2jzt02NS1HtLV%2FMdXQpV1S%2FpwEXElaX80L3xXledAXbOKYgQ%2FPWbWpWyYQaJ0eZT4yHaucWPhOQ1uKn77evjD9vq2%2BBjqkASMwo3IdNWf6R97sHe8jxqjNN%2FEjuD7HdWM9P2ToCFNhzS4eghG3At4uL%2Fyky1qRKivLEDJ%2BXF0LeIOajXGrLy1VQLfJl7oF%2Fr5TX4bbN%2FPw%2By2352iZW6%2F3%2B%2FjaQfyFXgHZWRGuERTGgDQ04BHBG8ExqYKFHb7podPJA44DDxj263czli1TbLKt37IVgDyH5MwmVFZPThgiCTMR%2BHNOmKsZjM8M&X-Amz-Signature=5d276f775e197428dabc0f3833c7a3e61bbf6abf86710ac754e971a28be6acbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLBHDIR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDvYB1LroVKUGnMPwqQ3rRcTy%2F4lP%2BwUPzvA%2Fw7gtDqoQIhAJk9H3kByogR8ln8iNh%2FjqzSe6V5jE06Nh5zHRdK48fHKv8DCE4QABoMNjM3NDIzMTgzODA1IgxQuJJKoq9iWNZ1gzYq3ANNUqv9TgU9kTv%2FEYVQQto8LYf4DjeZlAAcsbb7pdva%2Bptl0AtCUGolrR0L3Kxx2brYtWgcRKSk%2BO4nKC7uk5deYiFL%2F5ZsmGoU0H5EjQ9Hl0u6sw%2Fvs0TxEW7vIKCqfezKOemi7mkIvmHmSEUuVKK%2BkPhKy00lQkxo3vuCWKP7IRvf82Yc0UTmpRguSVN546IFjUCMvUYHUASSwonknLRsKoW5OTMJlimshU3lV20%2Fmdt1v%2FiPWPXzr6bZULJqoxLLnPrRhw9bDi4b6x%2BhLXGN9qoq5kgLREuESu2drriky7QI1v1l4j8l98rJhgDGgzvL5PPfoj8148Yya%2BzX3wWMkhQhv%2Bwg5dmYMDAW7elSZTV7fMpM2Lrf%2FLOeyybXx92CQguCkSS7wSHqwZUYN6HW9rYHZCtfT7EXffei6kbYdjq7Ct%2FSCQVIZ472YHCKKaKy2NmbTvO8xkid0QlqAsRkZKVwHOtXI5D1m6cvBhb1DlcWdHBeAoZPVGqKy%2BUCT1gbJUdJI9q6mL5%2FZ0V0IwWD1CZMEjJFWYY5qwoRrZ2jzt02NS1HtLV%2FMdXQpV1S%2FpwEXElaX80L3xXledAXbOKYgQ%2FPWbWpWyYQaJ0eZT4yHaucWPhOQ1uKn77evjD9vq2%2BBjqkASMwo3IdNWf6R97sHe8jxqjNN%2FEjuD7HdWM9P2ToCFNhzS4eghG3At4uL%2Fyky1qRKivLEDJ%2BXF0LeIOajXGrLy1VQLfJl7oF%2Fr5TX4bbN%2FPw%2By2352iZW6%2F3%2B%2FjaQfyFXgHZWRGuERTGgDQ04BHBG8ExqYKFHb7podPJA44DDxj263czli1TbLKt37IVgDyH5MwmVFZPThgiCTMR%2BHNOmKsZjM8M&X-Amz-Signature=9d8e57ac9875323c953802229366e3803b5a8d3967a3b3d1ac2dfcffa6419c34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEBOB4E%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAloPzzJ9AaRpPbt5M%2Bl0vxWYV6noaUhviEA6QmT9%2FFMAiEA7jCpAeGx5pwL8h2cQdcEEzg1l51Kdb3Q%2FqV%2BNdKJNmYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDS%2F2EDNlckbyDHBqCrcA%2FYGqdqVgfXFybPM4qCvdFeJkbOXlCexq1JKrbE0GUQm9A0aYGYmmvf%2FWUwP4scUJ32mwJyVu19d%2FFO%2FRUvtKSTrj9Xgq4rGJ%2FGctjYFRa9RGt71IAsCwAHV8n0ghpQvpl0lQhDv3FaPlgigRzeuSeRyYSu3WXN5smU44YPFYTZtvSFOrHcXQMsgyxgkJ1sT%2FA6FRKJW3zNUYM6tjhku4V6lDp82YprZLZqYipIVy9bJVoSZloTwqD4yxTHXz6LYol3gBjMPMtQ8sOom5tuR7RY8aRXnzXZYQrROWLRcrwKkRndsf9O3XNmb4xsis8Vy%2BKu1tdJ9D8xNBAtrSv5hXnK1fhgPHEMTeTjKkl6ywR%2FmR9dXurs6AH7nrzLgIcbIMyqcTgM5dRAiX15uRhcfkcZ4l5sH%2Fhzz%2BNpaY1fOkCxNfWHsIFO4QEzwoVh57p%2BW1FUVWTpKkkAyxsQEbqINVrRJDpumLdycOzDcwS6rycwaPd4K14rgDLJJVGUFK0dJRRaR7G98shkUeX8tqNbGZlQc%2FWlqyy3Rxz07mLDglP%2B2JHujSniAppqVJdDhUYjBAt6b751Xq6Gb2AWrg3WlOQGz5X1WM8%2FbJJ98fq0fEEWPpdw14gB%2FbOZDdaqiMPS%2Brb4GOqUB9c2o2tAbjGTJBQ7bh2%2FalAd1655hbwwA67LYWBfliiadWKiQKPtHJ6%2Fy9hTqMFoD2hA5UaRFerO9%2BhnkUfJ5yvDzV2NvCoE3S6PmTDajl00eF0CBpsyCv7lO91JyjoQdF1B1V2JDImph5gtCUhG9XpcgG%2F43UBfTrZFBzCzwgDD2hiBYQmh36lKeQEHg%2Bbt1PX4c7vruWXbYaHzRGA1GErR%2FWSsF&X-Amz-Signature=4a6548705825545348f2dfc970d5534b16e2b34cce3b684c0ad567186739ed35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIJQQDJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC72zc4q2Bsf0hAqKpYQ4uoDrW9uUhF0UXqSkehQgCSCQIgKmNhSa0q0YProanF0PIftT9lYDkZBGhVJmY72NM6KTYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDI4vgRyFzw14WuMl4ircA9jO9kTw8b%2FWSnOQ5N%2B6qAqmIVSBG2k5%2B7zYCJWTbqgt%2BEkEOJz3CMJrFIuWUFlqZDoXodalsZj1I3szG8TxrxIMnJHzIcbBwg%2BKpJFEmSgo8FYFWMc%2BhPcRpr1YpmuFPJf7SLIstMoo9VqjmW%2BtxZmbmxM1PGM1V6l1oRcjg6z2gCHv2SXI%2FsPdyu7MadSsf%2FEeIuEMtTNO124VtB%2B2cySai%2F%2FcrSKhVBjBx7YlX5wAJgr%2B72IZ4s0QlD3BmEh9QF31uKkFwURk8AEYkZJx2atBd9CvMCE%2FYxPRJrhYp0prXMY2%2B6MPPnsd4ZZZHwEie3KaMhFrpLM4RaFCPGxtOHt59SyNWGvJ2onW%2BngqaMwbFug0gU0SXjMVr2L2wdUg%2BEIHwJFc73b07PFkO%2BSlC6xR3Vb0NPz%2BoywMzUKHqKZX2Bxfy%2F2eztc3cH9xfsYan2aq38jz%2Faj6x%2BH3MY%2FubfwnBLG9GizQBObu5JXApUUlsPO%2F11jV1y6g66SLqdn%2FrganEhJcsXs0FP3Sb04F5euFqn02oxa0g7wS1W3jQ2xXZwwVSsSpopYajCiQWSaZS%2BNytd2aZAv4zmidz%2BZ7ygbUus2JymAsycf4vkIO4KoUSDVEHOyxLKTTt%2FQlMIa%2Frb4GOqUBdqIBKl8eXW7YX62D3jamHMHPSdA%2Ba5b0J6KxjmJkhMuhK1OzyYQDVfMIOjUbYzZ%2Bp2TmcY38RhBoDCkglxm%2Fr63prSZXPMtLqEGFFS6atqpdXprWn1mpsa260PnYlzPDJml3VfHYi%2FvYAU6T2VmUGlOQypEdoomqgMUKV%2FKdZyWIUnA8PKl%2BO4amGzI3JQdLB72v91vW%2FV%2FS%2BBJQlNjY3CuanfJh&X-Amz-Signature=982ea16688bd15ab3282a26a15950db913335429cc259cbf5a3e44760acfb74c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLBHDIR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDvYB1LroVKUGnMPwqQ3rRcTy%2F4lP%2BwUPzvA%2Fw7gtDqoQIhAJk9H3kByogR8ln8iNh%2FjqzSe6V5jE06Nh5zHRdK48fHKv8DCE4QABoMNjM3NDIzMTgzODA1IgxQuJJKoq9iWNZ1gzYq3ANNUqv9TgU9kTv%2FEYVQQto8LYf4DjeZlAAcsbb7pdva%2Bptl0AtCUGolrR0L3Kxx2brYtWgcRKSk%2BO4nKC7uk5deYiFL%2F5ZsmGoU0H5EjQ9Hl0u6sw%2Fvs0TxEW7vIKCqfezKOemi7mkIvmHmSEUuVKK%2BkPhKy00lQkxo3vuCWKP7IRvf82Yc0UTmpRguSVN546IFjUCMvUYHUASSwonknLRsKoW5OTMJlimshU3lV20%2Fmdt1v%2FiPWPXzr6bZULJqoxLLnPrRhw9bDi4b6x%2BhLXGN9qoq5kgLREuESu2drriky7QI1v1l4j8l98rJhgDGgzvL5PPfoj8148Yya%2BzX3wWMkhQhv%2Bwg5dmYMDAW7elSZTV7fMpM2Lrf%2FLOeyybXx92CQguCkSS7wSHqwZUYN6HW9rYHZCtfT7EXffei6kbYdjq7Ct%2FSCQVIZ472YHCKKaKy2NmbTvO8xkid0QlqAsRkZKVwHOtXI5D1m6cvBhb1DlcWdHBeAoZPVGqKy%2BUCT1gbJUdJI9q6mL5%2FZ0V0IwWD1CZMEjJFWYY5qwoRrZ2jzt02NS1HtLV%2FMdXQpV1S%2FpwEXElaX80L3xXledAXbOKYgQ%2FPWbWpWyYQaJ0eZT4yHaucWPhOQ1uKn77evjD9vq2%2BBjqkASMwo3IdNWf6R97sHe8jxqjNN%2FEjuD7HdWM9P2ToCFNhzS4eghG3At4uL%2Fyky1qRKivLEDJ%2BXF0LeIOajXGrLy1VQLfJl7oF%2Fr5TX4bbN%2FPw%2By2352iZW6%2F3%2B%2FjaQfyFXgHZWRGuERTGgDQ04BHBG8ExqYKFHb7podPJA44DDxj263czli1TbLKt37IVgDyH5MwmVFZPThgiCTMR%2BHNOmKsZjM8M&X-Amz-Signature=a3599cad5e112a7351a44336e04994578fa7416654aade0b75e479155c63dadb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
