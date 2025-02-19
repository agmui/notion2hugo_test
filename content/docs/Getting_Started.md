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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7M5XYS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGptcW84gnJrSwRHd7184CWH1DQQcEA20FKCj%2FIlxvKJAiEAiEZ4j93XNOoynok74BZCdHUkIRQQIYbEDJOE0F4ofJYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJadDo%2BnDqJd4qQXdyrcA1EHjnJ%2Fa7am36X8%2BfyPj34v4xRU2kksrz%2B2w11Rl34%2BU6cvpGbRWlnA6cjUwsiJIlCTr5%2BwnVrSxbdno%2FCExoitYZQisxFypaRgMQN%2F8laydnenZU%2B3Q6div6mdWEM1g%2BIQA5NZdxywZIJFz%2FoZP16PAPUmqvNMQt2H%2Bn0BcmS6Ih0WCXUqrpATxAFDlfBFJ07pt5dGvlRcSooFae22UkBw1W4i1%2FJAYf3RNFqz8QbEGIgfUAqBV5J%2B6%2FOhiz4wYvnZ1UxntKbBZnXOpeuOe3LXORyjP8Kk19jfNFT%2Bef2O6pwpJ9tOH%2B9VewQDYRZJ44uOuSVx%2F5TX3VdrnX7NQLhsItSxWQazfR8x8Svb%2B%2FLKimxs7a9jvXL4p%2Bg3n3TDTTpAUj0U7ZzJ%2BtH%2Bxb5hiqZYM0dPRdP3puW0m9d4ofolkegI6mhmq%2BX2gS%2FoLmroJ8KUYPmkujvEQEpRIph7llMEh3a2GQ40bRoJHQ6gHsmBiOrQUQzHm%2BzXpjouzoFTbAfNTFitZy6ae8V0MJCrfLLKZbaBmdC8tVtGgFuskLdJfe6aXc64ZEGhPhkDvdFkWxHo5DVYiVtq%2F3XNS861wi8R776i30O3mSAsBgzgILZUhYBc5o4LJkMhE%2BUfMJD%2F1b0GOqUBS5%2FktIJjmXcWRiyawkaUC5St3xXJiZ5HbfLf0sRoK%2BMfOK8UQM5mjkRCG44N8rcIxPBfKjqX7CVIcS3WbttJOpPl4qn3O%2F6mzHnGnoc80NMxcC2KUVzW%2FoPukkf0pCrnoyYp8lXvYWfq9RX7tkc5yAkhMWXq56dA35US%2FmrYDYL7mSpHP%2B8KVaCe0sN5LG83VllRZb4hOxBn4bgWKXk%2ByLaDi33d&X-Amz-Signature=5fe9b481cca6abccb6bdf08de90e3684f7c5a4dedd70e8c39c161e762260d787&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7M5XYS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGptcW84gnJrSwRHd7184CWH1DQQcEA20FKCj%2FIlxvKJAiEAiEZ4j93XNOoynok74BZCdHUkIRQQIYbEDJOE0F4ofJYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJadDo%2BnDqJd4qQXdyrcA1EHjnJ%2Fa7am36X8%2BfyPj34v4xRU2kksrz%2B2w11Rl34%2BU6cvpGbRWlnA6cjUwsiJIlCTr5%2BwnVrSxbdno%2FCExoitYZQisxFypaRgMQN%2F8laydnenZU%2B3Q6div6mdWEM1g%2BIQA5NZdxywZIJFz%2FoZP16PAPUmqvNMQt2H%2Bn0BcmS6Ih0WCXUqrpATxAFDlfBFJ07pt5dGvlRcSooFae22UkBw1W4i1%2FJAYf3RNFqz8QbEGIgfUAqBV5J%2B6%2FOhiz4wYvnZ1UxntKbBZnXOpeuOe3LXORyjP8Kk19jfNFT%2Bef2O6pwpJ9tOH%2B9VewQDYRZJ44uOuSVx%2F5TX3VdrnX7NQLhsItSxWQazfR8x8Svb%2B%2FLKimxs7a9jvXL4p%2Bg3n3TDTTpAUj0U7ZzJ%2BtH%2Bxb5hiqZYM0dPRdP3puW0m9d4ofolkegI6mhmq%2BX2gS%2FoLmroJ8KUYPmkujvEQEpRIph7llMEh3a2GQ40bRoJHQ6gHsmBiOrQUQzHm%2BzXpjouzoFTbAfNTFitZy6ae8V0MJCrfLLKZbaBmdC8tVtGgFuskLdJfe6aXc64ZEGhPhkDvdFkWxHo5DVYiVtq%2F3XNS861wi8R776i30O3mSAsBgzgILZUhYBc5o4LJkMhE%2BUfMJD%2F1b0GOqUBS5%2FktIJjmXcWRiyawkaUC5St3xXJiZ5HbfLf0sRoK%2BMfOK8UQM5mjkRCG44N8rcIxPBfKjqX7CVIcS3WbttJOpPl4qn3O%2F6mzHnGnoc80NMxcC2KUVzW%2FoPukkf0pCrnoyYp8lXvYWfq9RX7tkc5yAkhMWXq56dA35US%2FmrYDYL7mSpHP%2B8KVaCe0sN5LG83VllRZb4hOxBn4bgWKXk%2ByLaDi33d&X-Amz-Signature=f88c1da3e452b525c68bc7242cd8acf7673a40aff2b87e40ac04febf387f130e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBOF5MB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBjdQEW6HAVziVuVsvO0Ub1vfOyqUaDtziFfReBMgqisAiBhk5kLSn3r1WY5P2E5wDjEmzFkAZJDeFnd%2F3ry7nkSiiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RCmOJdmEjwS%2BRx5KtwDvAfza7SLW32KDW2dUvH0eFNsATdKA1cjHzHI2DOGumGTlEGhjN3ZFbUekxZtkEOvvX6WZUgrB%2BP4TcB2BMAqKFkpK%2FzwP6pJJDBrqnZrEWvdM%2B3fDGSOdcTbm1RRYDPYVoiMtETQmHR7x8W6XV5TSGOsDFCGqOrYHds3OgeqiPQ1J3Z9Hc2ri%2F3gjFcl8rRgigZwmk4kmaXZGhfabC1Z6SxvOQQPorr7YEGHEbvcaGVzt0H89pNjGPEueaBNgx0lmkv8nDzOpGTt2zQ0lje%2FfHcOw79rPj6Hz2wzWVS65hSl80vry%2Fy3OnsnLVtLc5W%2FHbTp%2BmKTOZVRXpCuKXfs7lTCEnJ2yxjpcTlhMB4HMsvaEOVgLgwjLvoJ6211Cy3YFd0FjOIDMmASLBilQ8ytA2k%2Bx1YfObz22TXVtKJ419lAN7BxV%2F%2FtOysZn9oVMBd25qiAM9Vxro%2FDf5Z5ESYKuhN3fE7yPn7x9cJdROU7UmkiRKNgGjDBTeT9gC%2FJJmiwou7eeF%2Bz4%2Fz1YtC1WEvG3Yv%2BRqJdywtmJkmROFDVpye6PL6aLbJ43v3WbsQo7Vy%2Fg9BLjIThPt68o4brmaMy9jZbheXOdSNAfzUiOX5iwKXyd1%2ByxE3a%2FqIH9Uswm%2F%2FVvQY6pgEBeum6O5kZ%2B%2BuE1TtLhsGxnwgRLOLNhTqcXMzSRUp%2BlANfMVvXrcLCBsXTiixAgtzc0STjPh7Od%2BCiJAIzl21ERFFnoOdMy0%2FVZUVGDr86z41CWvLDQULHmbM87sRwceDB3KzYWsna65L1pHsMW2TM4%2BqmRomXopl3CVJwPslam8ZBYBvHTm5oDC35Gi9M5QVk1HN874arHMgOCECmmkhqbvxBsjbd&X-Amz-Signature=9db80133046ed9caab006a7bb749e9d0700dda878c1778b5922a9a352cbbafe3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURJLYL7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFgV9pay%2BQ3RlQp2oE%2BducsAM%2BTXfjHFio9JI9b6W6soAiBKywK9%2Fjcbz8Azq2lIC5z0YGqplmJ2gbkWWfbXyI26JyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVdoMpjjCcpyU8fd1KtwD%2B2ArG%2FvJITLasWYd20CQs4%2Fqht2ZYuCEHNXO9M9NSL7vS%2BZBdmPJDC1q2o%2BKQ4ptbTf02p%2FaBtEkxl7iWH88Fswqt%2F1pFz%2FpYldyautCe6FgyQVzBp1SyvL1haaIS0HYrykOXI5HTYRvCWLGUwDfc56wQw4zbqYMyhhOY%2F3xNn8sTrYkv7DZOp8m5UzadacwWag9VMUok5uxxLf2ZPgszF9V3TlWfwmmtKuogAwz26F73X9azdtL7l9X1gtX8S2oQHGfsgpe68LFQvyJ3mqvK63MjB%2BA5TZXZyxM9Ili9%2B1rhlPia70m8G%2FZPD8mNTvvNcaA8dxQXwnylIBugbbDNglXx673tFykbaxL4ihqeXyEcKG60zftUCh4q0u43Z8weSlCUwpmvDCGvHK9nt9i%2BnhT7W5oti9IyU%2FjYUFJm214qANGl3HbaXjH9ONKQrEcHp%2BHLzpoWHWPAoOvfmTnlURv485JlW1ix8Hz1dDLJzcwGDKmiFzw5govM%2FewA5IHMY%2FjVcBadaygYj9w1fzeGZm0UK48bFZiP%2BimXx%2F%2BJ0Cq6KZgC%2FcSRRiGJn8ZdXG1BLuK24vCdMGneAnSvTzI3IiT0u1yWb%2BxELU0c09isRpT%2BK0ss8lATPdobbAwsP7VvQY6pgG4x42Ix%2FPJzsoDaxchJpt1SsvwkcMSOGW5etj4bWAdq38Yi8%2Fkicc5Ik8hPN2dH%2Fb58IBYpThfr5CTxEL%2BPWmuKmxTi0uV%2BY03rhQARgCYlDQyAXPASsWqrfyvo6Xwe7sC29GWlUHbop0kJ3WJ1Z1UlSnk4uaDlSoTvz%2FpyBlcLmB4H%2F6dxI8OemAdP33G6u0dkyP1wjEbEtlb2KnPHO%2FIgRz7kta1&X-Amz-Signature=b5cb48f1b62357d6925323737afbb58fbdaa8be6991eb9547aa191a07877d4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7M5XYS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGptcW84gnJrSwRHd7184CWH1DQQcEA20FKCj%2FIlxvKJAiEAiEZ4j93XNOoynok74BZCdHUkIRQQIYbEDJOE0F4ofJYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJadDo%2BnDqJd4qQXdyrcA1EHjnJ%2Fa7am36X8%2BfyPj34v4xRU2kksrz%2B2w11Rl34%2BU6cvpGbRWlnA6cjUwsiJIlCTr5%2BwnVrSxbdno%2FCExoitYZQisxFypaRgMQN%2F8laydnenZU%2B3Q6div6mdWEM1g%2BIQA5NZdxywZIJFz%2FoZP16PAPUmqvNMQt2H%2Bn0BcmS6Ih0WCXUqrpATxAFDlfBFJ07pt5dGvlRcSooFae22UkBw1W4i1%2FJAYf3RNFqz8QbEGIgfUAqBV5J%2B6%2FOhiz4wYvnZ1UxntKbBZnXOpeuOe3LXORyjP8Kk19jfNFT%2Bef2O6pwpJ9tOH%2B9VewQDYRZJ44uOuSVx%2F5TX3VdrnX7NQLhsItSxWQazfR8x8Svb%2B%2FLKimxs7a9jvXL4p%2Bg3n3TDTTpAUj0U7ZzJ%2BtH%2Bxb5hiqZYM0dPRdP3puW0m9d4ofolkegI6mhmq%2BX2gS%2FoLmroJ8KUYPmkujvEQEpRIph7llMEh3a2GQ40bRoJHQ6gHsmBiOrQUQzHm%2BzXpjouzoFTbAfNTFitZy6ae8V0MJCrfLLKZbaBmdC8tVtGgFuskLdJfe6aXc64ZEGhPhkDvdFkWxHo5DVYiVtq%2F3XNS861wi8R776i30O3mSAsBgzgILZUhYBc5o4LJkMhE%2BUfMJD%2F1b0GOqUBS5%2FktIJjmXcWRiyawkaUC5St3xXJiZ5HbfLf0sRoK%2BMfOK8UQM5mjkRCG44N8rcIxPBfKjqX7CVIcS3WbttJOpPl4qn3O%2F6mzHnGnoc80NMxcC2KUVzW%2FoPukkf0pCrnoyYp8lXvYWfq9RX7tkc5yAkhMWXq56dA35US%2FmrYDYL7mSpHP%2B8KVaCe0sN5LG83VllRZb4hOxBn4bgWKXk%2ByLaDi33d&X-Amz-Signature=d6c9ff7aa94b0763e352b0bdf50960d5853b4ae12b98f3a757bdfc41ccc2785d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
