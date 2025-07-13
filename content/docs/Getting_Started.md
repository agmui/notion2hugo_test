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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLBLH4G%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCABK3vFj36AdAiwLbuSmSgauBIFfT8JaVF9zByhLznxAIgXcNKUpiCmC6dx1a6nn%2Fnm0JySJlZ2KEsCA5d9n8zmoEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAdxi3HORH38z50wgircA%2FQnJAZttjU6mptDmyCw6k3kqcdBSV14IQFVRjNPUrssZft2blzTDS%2F6I1OwrCTYXr3BodK1NWXOrGQOJUJchv9kpb9CObPxYPs%2Bj039EOobqd1yZ3yV5zL2XpoUReG4dCH5drVOqQK03Lr%2FDvnyFqGPBQBmwOjKiUVyL3buC0tT6%2F5hW4pL97XjRWqyfKm30ihLBfl6W%2Fx%2BSCP%2FUvJQMA3MWNEKvbEwdNKR%2F92lhK9NbTP6gIUpmWQet4tP3SRHZjwhyNXSEwr4WWJrnZ1c0emXyRjqUf5VeZaIDxn55eyfMZQ%2BfboiB7%2FqITvOwXT2M8VZqozQ%2Fc8RaNW1K81xu%2BlOoh1r5WWdVJDBUA9MeOIVvpfYVPQH9oZf%2FIYl%2BHEix%2BG%2F5g8bTkZ6HnV0ZcHkFZoJsA7ozgM%2Fz5SIiyP20O7hH7SP4c%2B8QeMuj%2FQUamu49aX2e1o6YRuTUe5bZiyRY0eTKLsr2clJfyLEf1IwBy%2FHPy4zD3mUSXkWHmWxAQQSasrIiXArkkthZJebIBEqIRDi4%2BRwDVLhiubgKNXQNyLAUe%2BqrrT1drbZ79ZUsg8AZzvgAvkrvf2hE6JfNMCHUXNL2CImKS7NYRf4sDEPeiNLYD80%2F98g3t0IdDgcMKPI0MMGOqUBVGxXjK5YR6v0hSyY6smglEbZktL8UDVla4zuVc8B6SA%2BdFaOx%2Bml0KQTdXMrsfoah0X%2Flkheru6A9zW5gbaOBaXwYFO8juw6R4XKvIDdGkms7fEhhzQpcxHyLqLN6%2BG2ObYMdTF8ll3zLaCNnRMpTg%2BetQwqTMJLR%2Be1VlfcS2SwooS8Ktf2fnNoOesXZ%2F8QSFR6yZcP0DTOJG%2F%2FDAjD342NNJYG&X-Amz-Signature=7edf199c0d1ab947bdf1af3993951efb0ba8bce69d81b502440f0349067e7f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLBLH4G%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCABK3vFj36AdAiwLbuSmSgauBIFfT8JaVF9zByhLznxAIgXcNKUpiCmC6dx1a6nn%2Fnm0JySJlZ2KEsCA5d9n8zmoEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAdxi3HORH38z50wgircA%2FQnJAZttjU6mptDmyCw6k3kqcdBSV14IQFVRjNPUrssZft2blzTDS%2F6I1OwrCTYXr3BodK1NWXOrGQOJUJchv9kpb9CObPxYPs%2Bj039EOobqd1yZ3yV5zL2XpoUReG4dCH5drVOqQK03Lr%2FDvnyFqGPBQBmwOjKiUVyL3buC0tT6%2F5hW4pL97XjRWqyfKm30ihLBfl6W%2Fx%2BSCP%2FUvJQMA3MWNEKvbEwdNKR%2F92lhK9NbTP6gIUpmWQet4tP3SRHZjwhyNXSEwr4WWJrnZ1c0emXyRjqUf5VeZaIDxn55eyfMZQ%2BfboiB7%2FqITvOwXT2M8VZqozQ%2Fc8RaNW1K81xu%2BlOoh1r5WWdVJDBUA9MeOIVvpfYVPQH9oZf%2FIYl%2BHEix%2BG%2F5g8bTkZ6HnV0ZcHkFZoJsA7ozgM%2Fz5SIiyP20O7hH7SP4c%2B8QeMuj%2FQUamu49aX2e1o6YRuTUe5bZiyRY0eTKLsr2clJfyLEf1IwBy%2FHPy4zD3mUSXkWHmWxAQQSasrIiXArkkthZJebIBEqIRDi4%2BRwDVLhiubgKNXQNyLAUe%2BqrrT1drbZ79ZUsg8AZzvgAvkrvf2hE6JfNMCHUXNL2CImKS7NYRf4sDEPeiNLYD80%2F98g3t0IdDgcMKPI0MMGOqUBVGxXjK5YR6v0hSyY6smglEbZktL8UDVla4zuVc8B6SA%2BdFaOx%2Bml0KQTdXMrsfoah0X%2Flkheru6A9zW5gbaOBaXwYFO8juw6R4XKvIDdGkms7fEhhzQpcxHyLqLN6%2BG2ObYMdTF8ll3zLaCNnRMpTg%2BetQwqTMJLR%2Be1VlfcS2SwooS8Ktf2fnNoOesXZ%2F8QSFR6yZcP0DTOJG%2F%2FDAjD342NNJYG&X-Amz-Signature=d4e2e130bf037fdff4c224c597dceaa8e990045b3dba68b76fc33b294587aa35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLBLH4G%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCABK3vFj36AdAiwLbuSmSgauBIFfT8JaVF9zByhLznxAIgXcNKUpiCmC6dx1a6nn%2Fnm0JySJlZ2KEsCA5d9n8zmoEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAdxi3HORH38z50wgircA%2FQnJAZttjU6mptDmyCw6k3kqcdBSV14IQFVRjNPUrssZft2blzTDS%2F6I1OwrCTYXr3BodK1NWXOrGQOJUJchv9kpb9CObPxYPs%2Bj039EOobqd1yZ3yV5zL2XpoUReG4dCH5drVOqQK03Lr%2FDvnyFqGPBQBmwOjKiUVyL3buC0tT6%2F5hW4pL97XjRWqyfKm30ihLBfl6W%2Fx%2BSCP%2FUvJQMA3MWNEKvbEwdNKR%2F92lhK9NbTP6gIUpmWQet4tP3SRHZjwhyNXSEwr4WWJrnZ1c0emXyRjqUf5VeZaIDxn55eyfMZQ%2BfboiB7%2FqITvOwXT2M8VZqozQ%2Fc8RaNW1K81xu%2BlOoh1r5WWdVJDBUA9MeOIVvpfYVPQH9oZf%2FIYl%2BHEix%2BG%2F5g8bTkZ6HnV0ZcHkFZoJsA7ozgM%2Fz5SIiyP20O7hH7SP4c%2B8QeMuj%2FQUamu49aX2e1o6YRuTUe5bZiyRY0eTKLsr2clJfyLEf1IwBy%2FHPy4zD3mUSXkWHmWxAQQSasrIiXArkkthZJebIBEqIRDi4%2BRwDVLhiubgKNXQNyLAUe%2BqrrT1drbZ79ZUsg8AZzvgAvkrvf2hE6JfNMCHUXNL2CImKS7NYRf4sDEPeiNLYD80%2F98g3t0IdDgcMKPI0MMGOqUBVGxXjK5YR6v0hSyY6smglEbZktL8UDVla4zuVc8B6SA%2BdFaOx%2Bml0KQTdXMrsfoah0X%2Flkheru6A9zW5gbaOBaXwYFO8juw6R4XKvIDdGkms7fEhhzQpcxHyLqLN6%2BG2ObYMdTF8ll3zLaCNnRMpTg%2BetQwqTMJLR%2Be1VlfcS2SwooS8Ktf2fnNoOesXZ%2F8QSFR6yZcP0DTOJG%2F%2FDAjD342NNJYG&X-Amz-Signature=a61e1dfa1af5afce0fbf4fd86425117dcd6a6739f66cc3180eb09d9a4beb13c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLZJQMP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAEzhBUY%2Bc4FeJm5HltiBLSM9eKQY3e5vU12f6G%2Fy3dtAiBBCxObZAeIHa6UzjM%2FEIghikksGe8Khod6dr%2F95CWJDir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMA%2BO9bmIXi3YF4yoFKtwDqnh2Qs9VhAPHrhgBXMzCev80RRsSK0Ce8kKwkMPzTqDYl3Zdjle2Hhvh4izbiCck3mG2R4jZV8kNrV1xjwaX4ee7P6SfNLSFN%2F41I68vmO57KIh4fTXs26sZJ0ktqedyGVr%2F7DU4YL%2BPbhfH26%2BdXBFZq%2FnRZFH4zcnCK43xZoAmIOHdhmpwWNFSZt96SNZ11Wce4TZMKMQ%2BhqwIXgaskHRhuVQnEmZtsh0se2%2BVmPSqQgv3xQouZroD5uXgIeXtCBaGQve1orKFQkfhWHletRQQ%2BrPhhKXw7TmA9H2eEcoB4xqZLgjV5p5euYpSZxvyhQybTSml1cl7DuzXJ3ICY40%2BLH1vbOmstzIoklfnH2b1ZiafcVmLcYdzlPotna2NMIDcyF1dcer%2Fazxr3wD88tJH0mLuVXbpo2PbTINzsY%2BYRx6wyOMVdKC2%2FNsdDlfMcveATRWHfd3vmH8k5L0vF5IJOkFC1osXFDNMRFPTUbxt%2BKDcqrndlXrK1ncoikrVuePr%2BwwYKvSVRS3Eq2brYI1wD6Bs2D6yV0VL6qnBoo0GcWyfteNiUyUXPlkrwbnjkIiVqhEYzfMp8n9w7CIEhcBeL8SHo15P7le%2BLSjhhzXhpAGeaTn8DiEvNmww1cjQwwY6pgHmLRa769Wq1ZlvEvaAzEn0VAjkPTyIJq2Xuszs5P7rZD%2FvY8DMGd33xAlK1%2FouFoPwkzpH9WOkZh%2FJXvXvRPRW2RI5vWXeAVQ8HUod5pPw6lBY76x1qwlKYf6uSDrpdeAyVAniCHVGtCCsmhmcywcpO0ZmQ5dgo62crET3xQgMzw4LRMfiM4ja3BzN70hZUJ%2BRDmFelMwDhGkyHOwphgAVACtyrDcJ&X-Amz-Signature=063914d82e76139822b6a7d41f8fefb048986ac4b62f1714b76bc22803706654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y3EVA3K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDR08pHloS%2Bx6MgXQiiJkWQomjOvOWx%2BmGPBzFokJ0XbAIhAKQ0Uj%2BvfLh%2Bs3%2B%2BXUfS6zwKnbD6iWyvdGZ39dCeZjurKv8DCB4QABoMNjM3NDIzMTgzODA1IgyY0%2Bb%2F7ULpySLLWvIq3AP4jmx6uCSep201YEykylA4GhihXHPkNfBfk%2FFEq8Rsso6n4cIDd1zbqjcbgCvyJcqBHna0ZPXk16UR2LeuRqkSfCh8VJ7z75kUzJunbf6DV%2FLfx4CtUSzlRbGxYO0vLzHzWsj8idYz5r5YtruWEhFv7Y9lbK9bmIrgrWW4W71Bub8%2FOuF5Xt%2BncpkqVCkiuP8SQMJ%2BY%2BjC3r%2FCX%2B7DamW%2BJssDzRhVL%2FGMH5Z%2B8cOQ6IrjEXY72sDI0gQ9fqQK9iR%2FNCqIBO5v9UH6eHcPkYKhjm7wcyTLB7%2BuDBClltUsjGYjGw0UXGyZigXoSPbx3upRSjMko8ohAvmf6i3H%2BnXiSuob6YQjmYj4KL8%2FCZiY5rS6gzJ4X7FDvNrnChLz6EJXbnkuRnsqz6RJMbEI8XbKgmNUkRKNcwDcDxs00z632D44Wr5EaLBKt72dcRgNLpHynCT%2BFRduFYQuLgoX%2BQPAtFc6AQk6U4lTdxlMMibJnMw1CZFAV%2FisiDQ7xBuWfr%2FewkjPiosj7IH3Yi1jsO7s8R7Gq77ynh5olo1C6kAGJEDPsEdPZHWeUnuSVGZ%2Bi%2BJvKUcw5tI%2FlZAGBbnaHcZdhIxqa2yn5kgGt16QJT%2BBkLyfIeyzxIFqI5bZcTD4x9DDBjqkAU84JxuUNGPHIQV58iXcBdGPpBz%2BSYal95ztaMP7dD4E4ZH%2FPUz70YHrfYCYaOtJ%2FXpwisPrTfpyjJMjjeFc%2FuV2zLduvKlAN5WgQylmopP4LltOVVzW%2BX8pU7fkCEiYJ056esIHUJtl%2FyMNiD6YAJdPQRmPlhS%2FEoBThisKJ4RCcgp5Nar2PcVjmMyb1peeo4mqrQHEoQN4r36asAKp2FpjX3Dp&X-Amz-Signature=ce2c65268de7c77e69a80f276be5cf296ecd68fcaa08f0eba875f4231dfe96bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLBLH4G%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCABK3vFj36AdAiwLbuSmSgauBIFfT8JaVF9zByhLznxAIgXcNKUpiCmC6dx1a6nn%2Fnm0JySJlZ2KEsCA5d9n8zmoEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAdxi3HORH38z50wgircA%2FQnJAZttjU6mptDmyCw6k3kqcdBSV14IQFVRjNPUrssZft2blzTDS%2F6I1OwrCTYXr3BodK1NWXOrGQOJUJchv9kpb9CObPxYPs%2Bj039EOobqd1yZ3yV5zL2XpoUReG4dCH5drVOqQK03Lr%2FDvnyFqGPBQBmwOjKiUVyL3buC0tT6%2F5hW4pL97XjRWqyfKm30ihLBfl6W%2Fx%2BSCP%2FUvJQMA3MWNEKvbEwdNKR%2F92lhK9NbTP6gIUpmWQet4tP3SRHZjwhyNXSEwr4WWJrnZ1c0emXyRjqUf5VeZaIDxn55eyfMZQ%2BfboiB7%2FqITvOwXT2M8VZqozQ%2Fc8RaNW1K81xu%2BlOoh1r5WWdVJDBUA9MeOIVvpfYVPQH9oZf%2FIYl%2BHEix%2BG%2F5g8bTkZ6HnV0ZcHkFZoJsA7ozgM%2Fz5SIiyP20O7hH7SP4c%2B8QeMuj%2FQUamu49aX2e1o6YRuTUe5bZiyRY0eTKLsr2clJfyLEf1IwBy%2FHPy4zD3mUSXkWHmWxAQQSasrIiXArkkthZJebIBEqIRDi4%2BRwDVLhiubgKNXQNyLAUe%2BqrrT1drbZ79ZUsg8AZzvgAvkrvf2hE6JfNMCHUXNL2CImKS7NYRf4sDEPeiNLYD80%2F98g3t0IdDgcMKPI0MMGOqUBVGxXjK5YR6v0hSyY6smglEbZktL8UDVla4zuVc8B6SA%2BdFaOx%2Bml0KQTdXMrsfoah0X%2Flkheru6A9zW5gbaOBaXwYFO8juw6R4XKvIDdGkms7fEhhzQpcxHyLqLN6%2BG2ObYMdTF8ll3zLaCNnRMpTg%2BetQwqTMJLR%2Be1VlfcS2SwooS8Ktf2fnNoOesXZ%2F8QSFR6yZcP0DTOJG%2F%2FDAjD342NNJYG&X-Amz-Signature=cf3f4560693cfbfdebb8e637301392fb0a58fdb6bcbc0de8f507153644c748d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
