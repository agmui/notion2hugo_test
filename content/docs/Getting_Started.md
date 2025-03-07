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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SIM3YX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQ8zk2bDiN4wuAoDv%2BKTU%2FZLRFJIlU4eSfLnvhCxrLwIhAO1gKhABcxvjnwG9TJ5Kqu%2FNE77JyLYPhLaNfLI2a94%2BKv8DCEIQABoMNjM3NDIzMTgzODA1IgxSRHsjRLDa35DRIl4q3AM7XWlTX5FlMtxgYp0sUzxQ0ADkCigXi8Rdi4rjT3VrY2HdmMUjlYEpKSHokej%2BLImPa6ymNZZv%2FGRkZCS1hoYYqq2TkgcPrrAnmwRE10tkA%2BVE5qUp4tlf9esTybZg9eCkjerrFEuclk%2FhwisQqXNkDtegriwvQBFiH%2FQz7jsHeBTRHBAj2j7ZXSN0T4JaP4XNPxttls3K5rcMf2KiJjd0E5ZrpSOXwVei2%2BtyREaq6o%2B23PewJXSgkmCaSTW3uRbQ4d104vm%2FRIP%2F5Axreu1aIWbPuIJ7aD%2FEZfRn6plammXvYnAU1Dp%2FQQxBl7GCTzM1%2BJxy6biYU8iI0YEqu%2BtuLHqgSY2dsolNGK8SUazWzDeWqpot57H8G88FSRmnlgtY3G%2Bds72iDRh1%2F2%2B4qIaAgmYcZ%2Fy1HyVEWHRUuDROvWPaOsu50KRNYxwGfZnwGnLjUSb%2BXGvWxuk%2F7OOkr77UfmR0KQ3jeoqWtmxg7LV3dzT%2Fpygmox3sdqpdwwuAUh5Nyd0e3Jquev%2BOwOJ2y6bgoTDNKqTF7O0UpK6eTV4A%2FBkv39iSc7ly15FzoZfYn3oASfc3FcmW3L2FQoFCNgLpOcn3JzAY0ALj7GIkzVYmiAlx4%2BoOYCURzUBD6TDb5qq%2BBjqkAWuF%2FRnRip5gf8UuRXPMhU3u9GqGe8fRv5VJM64ei%2FOwxnzXz%2FCy0hn8CFgxxw9vraWcK9L0%2F7O%2BUsoFvND9ZSRy3Gn6pIIW41AJ7l7YylHLMwAwuD3spE%2BA3EXedgCquOEFf1ADfozr7fQAPWmm3l0UW1QYXRAUC0h3iDBNlyA3%2Bs5rZr8TFEOkYC%2BLNk6wpSA9lHRVGEsdE1%2BfR1Mk9bH2xehs&X-Amz-Signature=161be2f0783cfa4a9cdcd490ac3a4052c509454eaea319330d18a240d8ead3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SIM3YX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQ8zk2bDiN4wuAoDv%2BKTU%2FZLRFJIlU4eSfLnvhCxrLwIhAO1gKhABcxvjnwG9TJ5Kqu%2FNE77JyLYPhLaNfLI2a94%2BKv8DCEIQABoMNjM3NDIzMTgzODA1IgxSRHsjRLDa35DRIl4q3AM7XWlTX5FlMtxgYp0sUzxQ0ADkCigXi8Rdi4rjT3VrY2HdmMUjlYEpKSHokej%2BLImPa6ymNZZv%2FGRkZCS1hoYYqq2TkgcPrrAnmwRE10tkA%2BVE5qUp4tlf9esTybZg9eCkjerrFEuclk%2FhwisQqXNkDtegriwvQBFiH%2FQz7jsHeBTRHBAj2j7ZXSN0T4JaP4XNPxttls3K5rcMf2KiJjd0E5ZrpSOXwVei2%2BtyREaq6o%2B23PewJXSgkmCaSTW3uRbQ4d104vm%2FRIP%2F5Axreu1aIWbPuIJ7aD%2FEZfRn6plammXvYnAU1Dp%2FQQxBl7GCTzM1%2BJxy6biYU8iI0YEqu%2BtuLHqgSY2dsolNGK8SUazWzDeWqpot57H8G88FSRmnlgtY3G%2Bds72iDRh1%2F2%2B4qIaAgmYcZ%2Fy1HyVEWHRUuDROvWPaOsu50KRNYxwGfZnwGnLjUSb%2BXGvWxuk%2F7OOkr77UfmR0KQ3jeoqWtmxg7LV3dzT%2Fpygmox3sdqpdwwuAUh5Nyd0e3Jquev%2BOwOJ2y6bgoTDNKqTF7O0UpK6eTV4A%2FBkv39iSc7ly15FzoZfYn3oASfc3FcmW3L2FQoFCNgLpOcn3JzAY0ALj7GIkzVYmiAlx4%2BoOYCURzUBD6TDb5qq%2BBjqkAWuF%2FRnRip5gf8UuRXPMhU3u9GqGe8fRv5VJM64ei%2FOwxnzXz%2FCy0hn8CFgxxw9vraWcK9L0%2F7O%2BUsoFvND9ZSRy3Gn6pIIW41AJ7l7YylHLMwAwuD3spE%2BA3EXedgCquOEFf1ADfozr7fQAPWmm3l0UW1QYXRAUC0h3iDBNlyA3%2Bs5rZr8TFEOkYC%2BLNk6wpSA9lHRVGEsdE1%2BfR1Mk9bH2xehs&X-Amz-Signature=5c9c37a68d4df37e70f3a29a2df4e27cd283bf1e76bc8c35e01c85738165a42d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQFU2H4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp1nNAVVG9wTtAGqIN%2FyeFAjqM1nyEb%2B7BhcHDfhUEiAiEA1HMWaD%2BOTXNRV3UY3KBSErFhJ5VjZnvMZ4vkhD5JzSsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHJJl5vIhLlRGRo0oyrcA8vUgm8jwPAO1Dc8SKWwQwvUECo8xmZcsCOF7P0zXWTOytCidJ1wQ0RFCdhUtxuKoRGamwXKbhBrOCX%2BQJ0UU58SO5E%2FXYfqwiQhWkKMAzntKpbAOEqWj8dN3%2BZo8UMEwcR6Bv2UaU3M%2BkDJxDr8QbCheCrCTjrwjo1MnIB7t9Hwg9E8Qd072rSBhW2sL6fuD7anJ3RMP3FQvCYhGeNGH5fkYBZOxRP8z95mdUFxVAHGGloGGQOtSRHL2nS8k%2FGSN8wcefZeM9lvO1io9syHINZW4r7FlutDsqKhGGkz17WjQa82DUOgP6SGolHMkwGDXCjiLz%2FWdoiRZIWyQYg6PRqG2D1fJT0esklXxUNxjFZ83Fm97WwTqlnft%2B31EECXBOjKuH5RMEieln7jv3%2F6n3n0n16q3seWr4UpbauVEnMqOOaLZ%2F1l7P%2F8WMRIngjEBGgZg6r8AUBeTcEbqKvNAf8qGQ3ate%2BmbSZjFayZmoVIEqfZ7BFHLkXzfhhInwDGEmXRphsjJTkSuQoRhBAA0Ukwnn%2BpDP7BIPxZIzJV%2BPBEgpdDLVuyKqmi8za0oDyCd%2FfAoYgCSbkIHWUqjlqPqA19GktzzrVklk4Z6ufNDEdKsZtIBcsTccnwMwRaMMvlqr4GOqUB%2FSObne732HAMY%2B2RzyRUM4skuHxHsw2gfaV81VTr6luT2qdxdUp9j2KhCYVohzI8%2FBR4eKxphbygOshMLxeQqqyoFQ3uU8fAsiYTgF76rOOm9%2BuzMNhWzFKRebk7wIcinYKFRKSyoHDaYp84wM%2FTMczynwiEtwkerJnVi2ndCr8LYbV6kkaJeFnsYFikdON0qfr5MuDM7Z%2BlNibfZGopiVh86zL7&X-Amz-Signature=491d58e3e5144444d2e33d5ba73012a9d95a6019ea8cee09dd76422dabf99817&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPPNTBB4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pV4owrb018qfua0aQAGdKlWY0PXMWgRq59gvKGyBKAIgFiqQ3xG%2BQbQg6vlURNSSHcoQPcg66oYTg5dnkhktojAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPjxVag2RcwL2tzexSrcA9fta7mjuqNjuWQ%2FDVEDuGeV5z7Z63%2ByuIoOKzJGCVqKBFa9U89OjVb6oIhqIOUOOtHIhLxvBTt1ThNg4SSxWNx2h6J3rNUTPDxj%2FmgNqQt9J9kmqnkR9PPemgfmStLZ21JpFjIvzcfuzlyfGKxvEYG57GN8BklCKlY%2F9RpwS4o5ju9%2FWwggzpFIciVr5kbP%2FuOg9fY5mvnqdEoPdLNTOu4rGdehmHO5QeCBp%2FQiwCJQvtzsopmsVoGKqDOIW3WYeNj%2FiirfeWaHW1%2BCIz%2F5enYGtp5dNZ95MCyZzKI6NUWjBIqYS%2BdklK34P1l4t0AojlpwufVVjpVDHfXoQJkDUH9%2FeS2miVWlNZQsyouUKf%2FA1%2FGYc7EX3jf9E3E07O%2BL%2FU%2BZG4u0WkP7BuNYYL%2Bz9slLprvCyNNNgjOcZwWDrzQg9cd0i%2BB7v63aUxy73dDTjEc8xVJub33uxN5aZ66yFo5Q70S7rYus1uudU13n0qOP5CgRDDsSvpqKuyTW0Bii2g9sComTMijpA4fNuJy%2FydJg9KOSEYe9r3FSX00ADD4rqEWfB0iHSDMQDz8Y06rc7nbKPkjEGpg%2FTiBJN%2BluTVemPhGhsrZXjFdhZhYkSJZhjXuPhkv370de8r8FMI%2Fmqr4GOqUBrnqJwCvoVyUwFTV4qXLJTv1ZjTrUqxxtVLDCzLSa2anK2iNfsYVWKuSgnT5p8zdlWNfmMEhBbrSP3TrtqLjRYQ%2F9h2aQNvix1CwgORSwokcgpGmtFnkGkaKwDt7UXt6LIPZ0lsJl4jaEeSQNnfT9eFhR1BqNceEBS%2FMaRPLM4Uv4THNMtfoYf%2BGRBbQXjRGfzi4ouOs%2F4D9LdE0Kmv3OqvI%2B%2BaY7&X-Amz-Signature=0361cbda36afc8ce323343f12e51347137c1994d103c74a7132a5c3cfd1e30e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SIM3YX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQ8zk2bDiN4wuAoDv%2BKTU%2FZLRFJIlU4eSfLnvhCxrLwIhAO1gKhABcxvjnwG9TJ5Kqu%2FNE77JyLYPhLaNfLI2a94%2BKv8DCEIQABoMNjM3NDIzMTgzODA1IgxSRHsjRLDa35DRIl4q3AM7XWlTX5FlMtxgYp0sUzxQ0ADkCigXi8Rdi4rjT3VrY2HdmMUjlYEpKSHokej%2BLImPa6ymNZZv%2FGRkZCS1hoYYqq2TkgcPrrAnmwRE10tkA%2BVE5qUp4tlf9esTybZg9eCkjerrFEuclk%2FhwisQqXNkDtegriwvQBFiH%2FQz7jsHeBTRHBAj2j7ZXSN0T4JaP4XNPxttls3K5rcMf2KiJjd0E5ZrpSOXwVei2%2BtyREaq6o%2B23PewJXSgkmCaSTW3uRbQ4d104vm%2FRIP%2F5Axreu1aIWbPuIJ7aD%2FEZfRn6plammXvYnAU1Dp%2FQQxBl7GCTzM1%2BJxy6biYU8iI0YEqu%2BtuLHqgSY2dsolNGK8SUazWzDeWqpot57H8G88FSRmnlgtY3G%2Bds72iDRh1%2F2%2B4qIaAgmYcZ%2Fy1HyVEWHRUuDROvWPaOsu50KRNYxwGfZnwGnLjUSb%2BXGvWxuk%2F7OOkr77UfmR0KQ3jeoqWtmxg7LV3dzT%2Fpygmox3sdqpdwwuAUh5Nyd0e3Jquev%2BOwOJ2y6bgoTDNKqTF7O0UpK6eTV4A%2FBkv39iSc7ly15FzoZfYn3oASfc3FcmW3L2FQoFCNgLpOcn3JzAY0ALj7GIkzVYmiAlx4%2BoOYCURzUBD6TDb5qq%2BBjqkAWuF%2FRnRip5gf8UuRXPMhU3u9GqGe8fRv5VJM64ei%2FOwxnzXz%2FCy0hn8CFgxxw9vraWcK9L0%2F7O%2BUsoFvND9ZSRy3Gn6pIIW41AJ7l7YylHLMwAwuD3spE%2BA3EXedgCquOEFf1ADfozr7fQAPWmm3l0UW1QYXRAUC0h3iDBNlyA3%2Bs5rZr8TFEOkYC%2BLNk6wpSA9lHRVGEsdE1%2BfR1Mk9bH2xehs&X-Amz-Signature=8351379c243f57560ae6f54b9dd804cd7c634db6532b5a4d9bf382f453c39465&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
