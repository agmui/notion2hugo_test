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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQPBFSB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12dUfeqU6tpPYYV8ZN7fXgeV8JMERieWznBFzW10x0AIgZ0Um6d%2FdP4exSGM%2Fv50AhazdQrA%2F6SIErj%2Faq4gjsl8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDSPKS55LGQKXE%2BYDCrcA9hhEsyrgYdK%2FSOj37Eb0rIydCyALokO%2FFSRhb0ZBXeQRaWwLsL6cLvQ3XF6IKPO3aYwJRsxWmxDX1PyE8O2nAjvO8XEcYZlYsG7oBWIhN5VeRESUA06obAhm8TWjDhNs%2BTY%2FZXbETKiKYVS74RipNE32v%2F6Ymnq52MSIPAyo7x%2BRpBeZmxyh7VBljXj0y6hj%2FNDD8RUzaHt0aQdrdM86mp74b5ddDbVl3y5ZMJQnQhWB%2B80Y7r2feZ%2BG9rVfBZGs5Iu1rAz%2FGciDY8O9hnTbKkvkecC%2Ftxt2vfEYKZDvru26jfv5YfNDSLoLgvaK%2F67Ushao4H7LveeMBsFP9BPT5vpYsTbmZbH7rlXEgBl6xBb2sH%2FXrFBORdlGFvuYEmv3IFZF%2FnzOoqOwGJBebs%2F7FerQxSKr3o3Vt0z1ZnRxFg%2Bg9WtgM7TzOFn4F%2F5nvP6AChb3yz8Xi4zIEY7XGqp1wjrdyp5jxuI9pmvwRAfg4Ce9lcjJ5hMjvWbqmUSmQjSONeYWFgqIXQwWcvb7l2lOr4lsIsB03yhilmzG0%2FCit5S60Tbs%2FhluGAGel9RJPMZ1gNh6JUPeb5fbIYqaDeHjQuvHHx5sjESmHkFnT94ZafpfhP0n5YljYFHGkZBMLvC8MAGOqUBfyXY96DF5WQuATyQpLsNdTzzTv6rMgswlnW1anUhhqy%2BiHbO%2FMwA2PQejVFszrTIjBlVP8TRwoQnGqXK9CY6Ke6E2mjNe7rzz%2Bh9cwQxePIS2zDeBc3zryHJj6d8KKs7XEGOLhECMyWyu64VHGGNS2fbKnyKjD1NRBxJ%2BuxMRfS4cS%2BwYOO1c37P5c6wwL8HMy3TBZHw3L2ZFyueEf9rYe7VVbII&X-Amz-Signature=62a27eeff887caa8b07dd8ea222f4687c10439127d94a6c9cba96b9120cb0a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQPBFSB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12dUfeqU6tpPYYV8ZN7fXgeV8JMERieWznBFzW10x0AIgZ0Um6d%2FdP4exSGM%2Fv50AhazdQrA%2F6SIErj%2Faq4gjsl8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDSPKS55LGQKXE%2BYDCrcA9hhEsyrgYdK%2FSOj37Eb0rIydCyALokO%2FFSRhb0ZBXeQRaWwLsL6cLvQ3XF6IKPO3aYwJRsxWmxDX1PyE8O2nAjvO8XEcYZlYsG7oBWIhN5VeRESUA06obAhm8TWjDhNs%2BTY%2FZXbETKiKYVS74RipNE32v%2F6Ymnq52MSIPAyo7x%2BRpBeZmxyh7VBljXj0y6hj%2FNDD8RUzaHt0aQdrdM86mp74b5ddDbVl3y5ZMJQnQhWB%2B80Y7r2feZ%2BG9rVfBZGs5Iu1rAz%2FGciDY8O9hnTbKkvkecC%2Ftxt2vfEYKZDvru26jfv5YfNDSLoLgvaK%2F67Ushao4H7LveeMBsFP9BPT5vpYsTbmZbH7rlXEgBl6xBb2sH%2FXrFBORdlGFvuYEmv3IFZF%2FnzOoqOwGJBebs%2F7FerQxSKr3o3Vt0z1ZnRxFg%2Bg9WtgM7TzOFn4F%2F5nvP6AChb3yz8Xi4zIEY7XGqp1wjrdyp5jxuI9pmvwRAfg4Ce9lcjJ5hMjvWbqmUSmQjSONeYWFgqIXQwWcvb7l2lOr4lsIsB03yhilmzG0%2FCit5S60Tbs%2FhluGAGel9RJPMZ1gNh6JUPeb5fbIYqaDeHjQuvHHx5sjESmHkFnT94ZafpfhP0n5YljYFHGkZBMLvC8MAGOqUBfyXY96DF5WQuATyQpLsNdTzzTv6rMgswlnW1anUhhqy%2BiHbO%2FMwA2PQejVFszrTIjBlVP8TRwoQnGqXK9CY6Ke6E2mjNe7rzz%2Bh9cwQxePIS2zDeBc3zryHJj6d8KKs7XEGOLhECMyWyu64VHGGNS2fbKnyKjD1NRBxJ%2BuxMRfS4cS%2BwYOO1c37P5c6wwL8HMy3TBZHw3L2ZFyueEf9rYe7VVbII&X-Amz-Signature=ff36ed19003d2a7cd08b1553bcb82080cf7d2575d29b176f442627a84f874496&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQPBFSB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12dUfeqU6tpPYYV8ZN7fXgeV8JMERieWznBFzW10x0AIgZ0Um6d%2FdP4exSGM%2Fv50AhazdQrA%2F6SIErj%2Faq4gjsl8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDSPKS55LGQKXE%2BYDCrcA9hhEsyrgYdK%2FSOj37Eb0rIydCyALokO%2FFSRhb0ZBXeQRaWwLsL6cLvQ3XF6IKPO3aYwJRsxWmxDX1PyE8O2nAjvO8XEcYZlYsG7oBWIhN5VeRESUA06obAhm8TWjDhNs%2BTY%2FZXbETKiKYVS74RipNE32v%2F6Ymnq52MSIPAyo7x%2BRpBeZmxyh7VBljXj0y6hj%2FNDD8RUzaHt0aQdrdM86mp74b5ddDbVl3y5ZMJQnQhWB%2B80Y7r2feZ%2BG9rVfBZGs5Iu1rAz%2FGciDY8O9hnTbKkvkecC%2Ftxt2vfEYKZDvru26jfv5YfNDSLoLgvaK%2F67Ushao4H7LveeMBsFP9BPT5vpYsTbmZbH7rlXEgBl6xBb2sH%2FXrFBORdlGFvuYEmv3IFZF%2FnzOoqOwGJBebs%2F7FerQxSKr3o3Vt0z1ZnRxFg%2Bg9WtgM7TzOFn4F%2F5nvP6AChb3yz8Xi4zIEY7XGqp1wjrdyp5jxuI9pmvwRAfg4Ce9lcjJ5hMjvWbqmUSmQjSONeYWFgqIXQwWcvb7l2lOr4lsIsB03yhilmzG0%2FCit5S60Tbs%2FhluGAGel9RJPMZ1gNh6JUPeb5fbIYqaDeHjQuvHHx5sjESmHkFnT94ZafpfhP0n5YljYFHGkZBMLvC8MAGOqUBfyXY96DF5WQuATyQpLsNdTzzTv6rMgswlnW1anUhhqy%2BiHbO%2FMwA2PQejVFszrTIjBlVP8TRwoQnGqXK9CY6Ke6E2mjNe7rzz%2Bh9cwQxePIS2zDeBc3zryHJj6d8KKs7XEGOLhECMyWyu64VHGGNS2fbKnyKjD1NRBxJ%2BuxMRfS4cS%2BwYOO1c37P5c6wwL8HMy3TBZHw3L2ZFyueEf9rYe7VVbII&X-Amz-Signature=a3eae046db0a704b39e5ec368b3932dbc025faffb2093604a61461a5394e0ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z35TQ2D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDasvag1QZlORQfsS%2FJLORxmS9C9YzaZ%2Bb2Lw3%2FlIdAAIgfYPSQidBCL%2B9eIafxYtvUdYLlu6C758B5%2FqgrkvzfWwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCojQ8OG9efFbEpWISrcA%2BYaCnIRh1RLXQlJczKv%2BQ%2BtcL4%2BYSDNXoz2B33Y3F71F7%2F57n97PQkT%2FjQdPk0WF6EXQP%2FAFK3VEuuvpAVobjT%2BhndlB0FMjPPxGIB%2B%2BybYko5qTzRb0OuiiqCWZaPEM0xVnytoRTBkIOCl4lEwIqgFjUP3xS%2FaUc6FLmR2bVmXI3YisyfNIUCEQfB0SSmsKyksxjcgO%2FT9OBBWOpx7pmb9bJeuqDhh3yJaf63v6cmdsCHKpxrBxtGTKb%2FD8qleuE%2BDFEWFJQgos7lL81B6dzztIXaRrcxihnuY32JaJZgKDNF%2FCfadfrHTRsaLsrsP3BuUvMwwfn0A%2FX%2B1yVv%2BA9t%2FY7x6scd%2FeIKictiSJqlKvQFXgOZV1EOhqaGQFtMVRs1qSWsRxyTwyN%2FljtxX0nVD%2FQo4SusUKRdUEQTrldfNbByStlBYfJzY4u%2BEu8VBNCTDr0scDsLjm09DnEoh%2FEvPX93Kn96CYaX%2BTqZnv8gs%2BUA5PWfSDIib1RzIR%2BPsFa%2FK%2B6I04z5OGbYl4wuRewhyFbFgzcTymicTiOjebGRWnLaJTZ5qGIZEkAYtiy6Vq6GJ5RRdvDq%2BQ9B%2Bc%2FECs%2B0HqZ7USnephF%2B94DyZ91wblSDYNqi0ob91z64QMIPQ8MAGOqUB1jskqv1oDqLXE6khYSyTI%2BSF5hB48x%2BWJdHsXykFDlwdf1u19sV%2BW2EOol7EbmJFvcT7exW1z39Cr6b2qICgU7eD%2FfjrTw8MGmgKIV4K3YvLsq%2FeJcesvSRHmFXlqLbRZ4DVcV6DBoDP4%2B%2Fy%2BOpWLekVDIry9JtzxITbzNHDVPKW5lQLKDYFZwziiUorI5gvbSkZU97nm%2BoOzdGgFfDy0lY8cYrI&X-Amz-Signature=5b4d1917b4f62ca8d3e099540a1c87f977553b17eddc412b8f2279e94de7b3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAZYE24%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOGZunCUtkf%2F0beTu8XfdM9qR5YbJkZ%2B%2BZKIzeVnqSBwIhAMnaEm6wfAXrxq5duyt0wopjM74HiQp4%2B0gZ4twV6NbKKv8DCGwQABoMNjM3NDIzMTgzODA1IgxPebDz59lJNxJgItgq3ANAmv1Wiz0pyl46t38oufXayjijP6a%2Fa0sYQvxKdX%2B3C8ibrBMHopVZsTsrTWoIxukYN6F%2BggsQlC6Rujm7A3kKHTkB0xUwulY2Lfl8uVLqVzZ5aE6yxO7mQFex%2FuQzQJN8%2FNtJVBwttW4mlMrc0cJr6MM1Oce%2FSOG6x5QKHhN6hNHYhdvQHquxgHswxXMAr5KsTn4BdCDyhn3Zz1%2BGCusNbSOIRVV9fcfNcFYLje0jOGMkJrSRrC13uchUTv0SVU9Yh4lvbcGSe3bqEa%2FNRL8mfNMNBpiZloTLahHczllCqDkuaEjIivJFXKwbq0kD5FwjBc%2F44mexOfl4KddhrAzmN5efk%2BmJBd5q5YvI0%2FJdDF3VvI07WUZVFSwTuwGWJSBQnza8uOldcbygf6DW5OfK0ipjkz4trP04s0CYAt6vG4tZ73etb8Fb6%2FvCn8gVRjBGSqM9aBUiY9%2BE8O5r1yQFqAEIbQS4mSEbykBB2XkQozBdTDJSxr4nLLvuP3yrvViasOi47At4Uv7yMFmkMmn1jnDv3hxdlaUjP9P4Uycv3y%2FBTxXdZljbKwoEMXoTnqkuF940Jgp%2FoAhxvxa5GPQeIfPisqGoVb%2Bxved8XhAzCZPlW1xllhEDNP9CEjCfwvDABjqkAdP0v2Pm8sAml%2FJEsouNj2bqFz07SZJYiL3lRvGClQOT%2F5NFNxhoO47L7uB5rzJNWHb8PVbB82TVHwfdbhk53%2BWvoPrs6xy%2Fku5sFdIvzCFJrbykKvtIGj295ECe2NSkXJhXjAdRt3LCIJ%2BI92fOi9wtsy3feGHggS%2BukUq4d3v9XzJsYbOv3upZSMnvjXuJUP6xEBm4L2PGqnaFEkRoCrP%2Bd%2FvF&X-Amz-Signature=e64e3d984666f9418b131558240017bcd905f6d8953caf6cc8d21ac101b38b05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQPBFSB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD12dUfeqU6tpPYYV8ZN7fXgeV8JMERieWznBFzW10x0AIgZ0Um6d%2FdP4exSGM%2Fv50AhazdQrA%2F6SIErj%2Faq4gjsl8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDSPKS55LGQKXE%2BYDCrcA9hhEsyrgYdK%2FSOj37Eb0rIydCyALokO%2FFSRhb0ZBXeQRaWwLsL6cLvQ3XF6IKPO3aYwJRsxWmxDX1PyE8O2nAjvO8XEcYZlYsG7oBWIhN5VeRESUA06obAhm8TWjDhNs%2BTY%2FZXbETKiKYVS74RipNE32v%2F6Ymnq52MSIPAyo7x%2BRpBeZmxyh7VBljXj0y6hj%2FNDD8RUzaHt0aQdrdM86mp74b5ddDbVl3y5ZMJQnQhWB%2B80Y7r2feZ%2BG9rVfBZGs5Iu1rAz%2FGciDY8O9hnTbKkvkecC%2Ftxt2vfEYKZDvru26jfv5YfNDSLoLgvaK%2F67Ushao4H7LveeMBsFP9BPT5vpYsTbmZbH7rlXEgBl6xBb2sH%2FXrFBORdlGFvuYEmv3IFZF%2FnzOoqOwGJBebs%2F7FerQxSKr3o3Vt0z1ZnRxFg%2Bg9WtgM7TzOFn4F%2F5nvP6AChb3yz8Xi4zIEY7XGqp1wjrdyp5jxuI9pmvwRAfg4Ce9lcjJ5hMjvWbqmUSmQjSONeYWFgqIXQwWcvb7l2lOr4lsIsB03yhilmzG0%2FCit5S60Tbs%2FhluGAGel9RJPMZ1gNh6JUPeb5fbIYqaDeHjQuvHHx5sjESmHkFnT94ZafpfhP0n5YljYFHGkZBMLvC8MAGOqUBfyXY96DF5WQuATyQpLsNdTzzTv6rMgswlnW1anUhhqy%2BiHbO%2FMwA2PQejVFszrTIjBlVP8TRwoQnGqXK9CY6Ke6E2mjNe7rzz%2Bh9cwQxePIS2zDeBc3zryHJj6d8KKs7XEGOLhECMyWyu64VHGGNS2fbKnyKjD1NRBxJ%2BuxMRfS4cS%2BwYOO1c37P5c6wwL8HMy3TBZHw3L2ZFyueEf9rYe7VVbII&X-Amz-Signature=f83ff511dd9e408165039197424ecf455650eef9232fbd30e2624dab65880dea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
