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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSMPOCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAXRP5RJInuFr7D7djDgCTsH6W%2BZhIWbXfy5yyRRoReQIhAKCUk2EduYk4pr8XVLXT3BJ7YQ0xcRrqFSEZkTL3tIeOKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHHO%2BgyGroPAk8R%2FUq3AOWFBCK3Xck2j%2BNKRuLQ0Aqr5h1aYVIq2b3DrVGxhXjnnETzEfN7ZW8WycccM9Ctj5G65GguoxswvyD03zj%2FWuQJ89Z2aKEHJAVP7kF2%2Fn7P7xoU9MrKniWlIG3zNexQiBfwF3J%2ByeqtCx%2BJ5DeTwOL1vm9LEmHdFy3JdijLfAiFidFGR1AGbwqb5BuvbhrEKjjMe6HVt1PvVYfhWdKYsS3bA7qqHXWMcBL3JmJ3KNhXteEt%2B%2FumlHnVeDzJOoWKLwwtk1xlbWCdj1bJ2DAsFQjfal%2FLBSR3pakFTFXunSW7Px%2BXdKWMqgB7QbrF4Z8ijgCGu2n1pRyegudEmqe%2FzNk0i9zjsFH5N8IYeJgnbObKWcNPLjmrHaP%2FHbcU%2Bl%2B%2BYmJkDyw971WV1uSjPGeaEtXhH1R78nOA9gvXW7OTr695NJqLVgCGCm8suf%2BWbGQI0HB6xWfoS%2FOxVtrIMGBX8m081YTSE%2Bb70oKCaGJ7k5g6HZg3NhDVDwS2xVY06Nb3L%2F2PovUQ4I4PtaAnnt3d4JepZojXnoFsK1ZNpCl%2BMOa5R1nBed1sLtjbimJdtI9i8BV3u%2FxekxJ2cdpAbj212%2FL%2BwUKYG7fSJbEiB4VllFpQaUSOsr9FcPMjezArDC2ocjCBjqkAecxARFDbue2Tu8la5VTXhhvUjKCBftx%2Fhs15gVl68jZVIBRwdQcVs9AndY%2FGOP%2Fv7mnyDz7MN8GtPQ6JddSbRvuCoyg5efuyBYugric5Q8EUZAPZdklgN3e6%2FCi0nScCR1Bm7iAiZk9TLsfaZMPfUdDpzsiggP%2BQ9ftkmIp1jrdInqkU9e%2FMz2%2BIBMX8CYBzSD%2B7FuM7eClsPFd7uaSbtfzcnn3&X-Amz-Signature=cc6c9bcc6af2ed41bef2b31467a22d2bf7c2dff9a94ec8d92cab79b5711355e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSMPOCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAXRP5RJInuFr7D7djDgCTsH6W%2BZhIWbXfy5yyRRoReQIhAKCUk2EduYk4pr8XVLXT3BJ7YQ0xcRrqFSEZkTL3tIeOKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHHO%2BgyGroPAk8R%2FUq3AOWFBCK3Xck2j%2BNKRuLQ0Aqr5h1aYVIq2b3DrVGxhXjnnETzEfN7ZW8WycccM9Ctj5G65GguoxswvyD03zj%2FWuQJ89Z2aKEHJAVP7kF2%2Fn7P7xoU9MrKniWlIG3zNexQiBfwF3J%2ByeqtCx%2BJ5DeTwOL1vm9LEmHdFy3JdijLfAiFidFGR1AGbwqb5BuvbhrEKjjMe6HVt1PvVYfhWdKYsS3bA7qqHXWMcBL3JmJ3KNhXteEt%2B%2FumlHnVeDzJOoWKLwwtk1xlbWCdj1bJ2DAsFQjfal%2FLBSR3pakFTFXunSW7Px%2BXdKWMqgB7QbrF4Z8ijgCGu2n1pRyegudEmqe%2FzNk0i9zjsFH5N8IYeJgnbObKWcNPLjmrHaP%2FHbcU%2Bl%2B%2BYmJkDyw971WV1uSjPGeaEtXhH1R78nOA9gvXW7OTr695NJqLVgCGCm8suf%2BWbGQI0HB6xWfoS%2FOxVtrIMGBX8m081YTSE%2Bb70oKCaGJ7k5g6HZg3NhDVDwS2xVY06Nb3L%2F2PovUQ4I4PtaAnnt3d4JepZojXnoFsK1ZNpCl%2BMOa5R1nBed1sLtjbimJdtI9i8BV3u%2FxekxJ2cdpAbj212%2FL%2BwUKYG7fSJbEiB4VllFpQaUSOsr9FcPMjezArDC2ocjCBjqkAecxARFDbue2Tu8la5VTXhhvUjKCBftx%2Fhs15gVl68jZVIBRwdQcVs9AndY%2FGOP%2Fv7mnyDz7MN8GtPQ6JddSbRvuCoyg5efuyBYugric5Q8EUZAPZdklgN3e6%2FCi0nScCR1Bm7iAiZk9TLsfaZMPfUdDpzsiggP%2BQ9ftkmIp1jrdInqkU9e%2FMz2%2BIBMX8CYBzSD%2B7FuM7eClsPFd7uaSbtfzcnn3&X-Amz-Signature=2b557a7da2c91a8e5a8b51d249e098c0f9da95cd533dfb4751aa199114283b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSMPOCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAXRP5RJInuFr7D7djDgCTsH6W%2BZhIWbXfy5yyRRoReQIhAKCUk2EduYk4pr8XVLXT3BJ7YQ0xcRrqFSEZkTL3tIeOKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHHO%2BgyGroPAk8R%2FUq3AOWFBCK3Xck2j%2BNKRuLQ0Aqr5h1aYVIq2b3DrVGxhXjnnETzEfN7ZW8WycccM9Ctj5G65GguoxswvyD03zj%2FWuQJ89Z2aKEHJAVP7kF2%2Fn7P7xoU9MrKniWlIG3zNexQiBfwF3J%2ByeqtCx%2BJ5DeTwOL1vm9LEmHdFy3JdijLfAiFidFGR1AGbwqb5BuvbhrEKjjMe6HVt1PvVYfhWdKYsS3bA7qqHXWMcBL3JmJ3KNhXteEt%2B%2FumlHnVeDzJOoWKLwwtk1xlbWCdj1bJ2DAsFQjfal%2FLBSR3pakFTFXunSW7Px%2BXdKWMqgB7QbrF4Z8ijgCGu2n1pRyegudEmqe%2FzNk0i9zjsFH5N8IYeJgnbObKWcNPLjmrHaP%2FHbcU%2Bl%2B%2BYmJkDyw971WV1uSjPGeaEtXhH1R78nOA9gvXW7OTr695NJqLVgCGCm8suf%2BWbGQI0HB6xWfoS%2FOxVtrIMGBX8m081YTSE%2Bb70oKCaGJ7k5g6HZg3NhDVDwS2xVY06Nb3L%2F2PovUQ4I4PtaAnnt3d4JepZojXnoFsK1ZNpCl%2BMOa5R1nBed1sLtjbimJdtI9i8BV3u%2FxekxJ2cdpAbj212%2FL%2BwUKYG7fSJbEiB4VllFpQaUSOsr9FcPMjezArDC2ocjCBjqkAecxARFDbue2Tu8la5VTXhhvUjKCBftx%2Fhs15gVl68jZVIBRwdQcVs9AndY%2FGOP%2Fv7mnyDz7MN8GtPQ6JddSbRvuCoyg5efuyBYugric5Q8EUZAPZdklgN3e6%2FCi0nScCR1Bm7iAiZk9TLsfaZMPfUdDpzsiggP%2BQ9ftkmIp1jrdInqkU9e%2FMz2%2BIBMX8CYBzSD%2B7FuM7eClsPFd7uaSbtfzcnn3&X-Amz-Signature=66cb12f344b827b8882981710de152d7cea8fdcb18ae3b6d95cbaa7dc64d5704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDJI6QR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC33GJzppeIBCylShmGhEZuytgPyuuOoKGQAZIZofuolAiBAeRXgDI0vPmT7ViYqpLGsIsEaH5ZPPbmKRcQMjESHrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56GjtjENAxtqRwllKtwDI2FsX0RvBQPTa5deg8ZPzZawdTJKGBUHFfCAsPT7bs9KB3gV2tuekf5kHcnsM3c8wR%2Bro5Tiip12xQEt6wC1sRMNqKr5FiVGT414Hj94%2BxbZjEb4rM1IU8rLvAq1uE1Mur72B6XnNqqS%2FYxx7Zoz0DcT8sfm18KikTXfZVtiuCS%2F73dphL0el04TB6F7GVE14LPyWGtBYQ8RLVDyDcBMaG916l1PXripFlELvXIt4QhvMsvXAJUf9sx1wga9lZ207ySR7Q6RrYB26Gny2YrnWv7By2ZzP7sJGtvVd%2BqoxHTIJ2u5wakJkD8rbqb04Yat8P%2BgXc9GnLgoZC04cvTa9OVPLP6VPneQ66ZlVBhuvvXrTd9OsGHZ9q1GVL8lwiMrCFHIilUZA2sIBbC0U%2Fp4kKAvwHleAYw3jDRgA6FgBZCSGMC8NWAHKyy4of3I2yTJseojGU7XO2CrCSQCqDbheE%2FFwzHcnTavhPgJdEjU5fGTO1i38IKQcotHRst0zSvm1XAaQslQAu0MjhmMOR%2FhndUIt%2BIBx2%2FuQp5n1aAlk8QcKjRynB%2BUGAIV54JMsLz2zzWDAkl6aWwom8DDd5IpMQGl2BpA0qRUzVa12mnYW8sd9sUkV7EQCGbHN2cwhaHIwgY6pgGTc8z1sI9rqRG34pHPJxpByk6q%2BzZQmJzZ0Btchf7%2Bw4z6v7Tpcr7wZJP0tRR6QCoPW9eCpMH5b9GWsyS8yOn%2BH3Ibcmjhdvy1q7ahP68FNPFPcicJYYhBETuKG72quSLRe9kd3E4lK13PMhX%2BQ3VZfAsh8H194RVQgLXvpngDhHn34MyJ0%2BwvMcgnN5X7whJRZbPwrgg7SgSfZ%2BknplngMLbskUTU&X-Amz-Signature=1ec4c5d70b65b075e52cec1a3841272bc4b12b0e579710b55bd1f7f963ff5b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53GN52C%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDk%2FFCfCyV7k%2FBbvvwlh80zY71BT7lUqLndIOgO%2BergIhAJ5c5%2FmBlLh%2BpI5LY6pyFM7FaYPuLv63RGWOznpNcwjvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZabL27h59XWslwyYq3APAYLhoQbgbYZx6pMq1RR5PDcEGsFx32aksCyx5WRVXjc1NYw6ts2%2BRJlh2yYOpgtDio3%2Fjixp09zC%2BSbjFlvi0bA9jaszHR4s0PNkt8yPmXfV3rF6GgYzglCH1Y8xb3nHQU8c9xROC9g34vQm3XJL4AlXhjSU3rbnvjy91LGc1vhwwNuErfZ3wTZLMkEFrft5E0V%2FWL028305XHtx1tMhGvXrZWu2fBvpIQRpMXXL9iImr%2FRC7oeIwt9WsnCDZghJfEMi9KxgTPxP2KX723PFyxGzbZ3462COSW5R3Jy6dpIjxTRFXxn1J8Gng0hCQ4bb7ydAQLwBy0BmW0GhdFu36EY2vfeSGhuoF5h5oSzf%2FTO3Ld3Cqpu4Kn%2FS%2FHU1f1%2Bpw6%2BTQNbFqWlasZ%2FvjomcqimvYX9FsmZfbOFZyKwJOtN%2BPziD4h6t1LEOkp2IrZyPKGB%2FkVdFeyDYwQn75yK%2BSnozSBRyRW8qYTomDFUUkPY0S%2FWHM7T8L4X1PKdxT53zu7nnsmkE4djGD81Zz3alMjf7vUckOx546q%2FpT77lVYEzICrCqDXdXw25AWiOFbpWtltnNXBnTSI0AbaIq8hDnGwzZjg%2BTZGKweLj0cWdL%2FfTdOi6SKqzILoLV%2BzCqoMjCBjqkAYnRn4h61%2B5z1opJoqGZ9gqYDYnx1tuPDTAqld52jTYuXoUeex0D1jHjOv6FZWV4MMho8Oh7PWhXOVINug6UJLb2Z4TOKPMkB3UW1y6G31EA8g5Q0K6fmfjo0uS5o9m2v9nMpv%2F7RzMqy8bMMB%2F%2Bo3hpsY%2FujE5I7o4OCXT7zPATbNABmUDZnUpWpq4hkuDqWJox1JIzezptTkzf1PJgO4BQlqt1&X-Amz-Signature=b0b57c77d66600d3b01ca0dd8e09fceb5b11fd8cbc9c1c67ac663e17f06c6f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSMPOCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAXRP5RJInuFr7D7djDgCTsH6W%2BZhIWbXfy5yyRRoReQIhAKCUk2EduYk4pr8XVLXT3BJ7YQ0xcRrqFSEZkTL3tIeOKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHHO%2BgyGroPAk8R%2FUq3AOWFBCK3Xck2j%2BNKRuLQ0Aqr5h1aYVIq2b3DrVGxhXjnnETzEfN7ZW8WycccM9Ctj5G65GguoxswvyD03zj%2FWuQJ89Z2aKEHJAVP7kF2%2Fn7P7xoU9MrKniWlIG3zNexQiBfwF3J%2ByeqtCx%2BJ5DeTwOL1vm9LEmHdFy3JdijLfAiFidFGR1AGbwqb5BuvbhrEKjjMe6HVt1PvVYfhWdKYsS3bA7qqHXWMcBL3JmJ3KNhXteEt%2B%2FumlHnVeDzJOoWKLwwtk1xlbWCdj1bJ2DAsFQjfal%2FLBSR3pakFTFXunSW7Px%2BXdKWMqgB7QbrF4Z8ijgCGu2n1pRyegudEmqe%2FzNk0i9zjsFH5N8IYeJgnbObKWcNPLjmrHaP%2FHbcU%2Bl%2B%2BYmJkDyw971WV1uSjPGeaEtXhH1R78nOA9gvXW7OTr695NJqLVgCGCm8suf%2BWbGQI0HB6xWfoS%2FOxVtrIMGBX8m081YTSE%2Bb70oKCaGJ7k5g6HZg3NhDVDwS2xVY06Nb3L%2F2PovUQ4I4PtaAnnt3d4JepZojXnoFsK1ZNpCl%2BMOa5R1nBed1sLtjbimJdtI9i8BV3u%2FxekxJ2cdpAbj212%2FL%2BwUKYG7fSJbEiB4VllFpQaUSOsr9FcPMjezArDC2ocjCBjqkAecxARFDbue2Tu8la5VTXhhvUjKCBftx%2Fhs15gVl68jZVIBRwdQcVs9AndY%2FGOP%2Fv7mnyDz7MN8GtPQ6JddSbRvuCoyg5efuyBYugric5Q8EUZAPZdklgN3e6%2FCi0nScCR1Bm7iAiZk9TLsfaZMPfUdDpzsiggP%2BQ9ftkmIp1jrdInqkU9e%2FMz2%2BIBMX8CYBzSD%2B7FuM7eClsPFd7uaSbtfzcnn3&X-Amz-Signature=3f545a4e118cf0069e82e27293ad0fdb931cfc963263df9cb39c5d1a5dff083c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
