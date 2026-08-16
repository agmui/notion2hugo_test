---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AKAKDB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID5GCuosflyA7uJTXg1a%2BXlg%2F5wnOgOWzlZn20WY5MHQAiB7kHlwNZjtQ%2Bxu89IttdAGaFkdsy30cyCMfV54nbojNCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMN2JB3zBaCMDu4LW%2FKtwDobkQGODLsb9YEhzpJC7LZRDS27k%2F%2FdTiF98qLqM1BY8Wyw79KL4dGvJbwkbVmQYEZ%2FbPDy3sgcPKrdMDpeKA1X5haTs97zeUuWWXMDHzIMQsTKZ0blJxF5HKvJYB4pRgiEUOD%2BWd%2FzrmXV81wYTfRadikS0ViqixdVlR5kGN5aAfI1Vnw3nMzP%2BJAW0qzSFXfCWMdRvUL%2F2J0iWXC%2BzHcgmUBbGxUDtEZnA1OH%2FpW2GdpDyPIQae03KpPnyqptVK0Hr2aILpVb1vqjKml%2Ft%2BZWv%2Fkn7QRPzVFHoog9tDCz6EK9QCdySgohYp0EByPDpvU42k%2Fx39VwvnQvGXafxc5ptXLVFSeJtWspurj1N%2B0GUznWrAx%2BIDE3FxAT%2Fq5OsnQa6iZABZDpWvvfB5ZuC3mZ%2BzCK5spo6jghEq74ZNJqNPCqmDBYfS%2BerImnlCsXsIpr6w8yYhuj15efoRlpzzXlXRSjQ8w3QJbPPRapc%2FJvV7DCrM7XXS2zZI3UplD2lvv%2BhKG%2BkFlJfHj%2BRd0hi%2B08KjMs4MbnXJF9lGF%2FhAbNmWAx%2FXvUvxIqj0vkqMer0sib82icYJBkc3oNiHnhQ1lh2amdI4mpblZSELsm%2FmiJlP2ScrFL5FCpV97OMw5%2BuD1AY6pgGcDFgANu3muPcCeV8sVwE9PZ174%2FbR2HwObYrTfr%2FgDIdq0UB4miRlmcnrHNS1sr9ELWwwGgAZAbPUa3Y9z1KpdtQwODZxZsYo7ZmhhIs1SPwXXlGRaEVT2W6yYe1q0%2FGxISWbCO1G7yjH7OUKPzie2QZyJbgts%2FQD%2BXqSWe7FdhRrNL42nd6Yvvwye84PB6PDhfjklrNi%2Bn1RqKk2lH8YnssVx%2BOz&X-Amz-Signature=543e9305f6f51a4782381f89f4f5339c0eaef8c8216db2e742bec0796898d8b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AKAKDB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID5GCuosflyA7uJTXg1a%2BXlg%2F5wnOgOWzlZn20WY5MHQAiB7kHlwNZjtQ%2Bxu89IttdAGaFkdsy30cyCMfV54nbojNCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMN2JB3zBaCMDu4LW%2FKtwDobkQGODLsb9YEhzpJC7LZRDS27k%2F%2FdTiF98qLqM1BY8Wyw79KL4dGvJbwkbVmQYEZ%2FbPDy3sgcPKrdMDpeKA1X5haTs97zeUuWWXMDHzIMQsTKZ0blJxF5HKvJYB4pRgiEUOD%2BWd%2FzrmXV81wYTfRadikS0ViqixdVlR5kGN5aAfI1Vnw3nMzP%2BJAW0qzSFXfCWMdRvUL%2F2J0iWXC%2BzHcgmUBbGxUDtEZnA1OH%2FpW2GdpDyPIQae03KpPnyqptVK0Hr2aILpVb1vqjKml%2Ft%2BZWv%2Fkn7QRPzVFHoog9tDCz6EK9QCdySgohYp0EByPDpvU42k%2Fx39VwvnQvGXafxc5ptXLVFSeJtWspurj1N%2B0GUznWrAx%2BIDE3FxAT%2Fq5OsnQa6iZABZDpWvvfB5ZuC3mZ%2BzCK5spo6jghEq74ZNJqNPCqmDBYfS%2BerImnlCsXsIpr6w8yYhuj15efoRlpzzXlXRSjQ8w3QJbPPRapc%2FJvV7DCrM7XXS2zZI3UplD2lvv%2BhKG%2BkFlJfHj%2BRd0hi%2B08KjMs4MbnXJF9lGF%2FhAbNmWAx%2FXvUvxIqj0vkqMer0sib82icYJBkc3oNiHnhQ1lh2amdI4mpblZSELsm%2FmiJlP2ScrFL5FCpV97OMw5%2BuD1AY6pgGcDFgANu3muPcCeV8sVwE9PZ174%2FbR2HwObYrTfr%2FgDIdq0UB4miRlmcnrHNS1sr9ELWwwGgAZAbPUa3Y9z1KpdtQwODZxZsYo7ZmhhIs1SPwXXlGRaEVT2W6yYe1q0%2FGxISWbCO1G7yjH7OUKPzie2QZyJbgts%2FQD%2BXqSWe7FdhRrNL42nd6Yvvwye84PB6PDhfjklrNi%2Bn1RqKk2lH8YnssVx%2BOz&X-Amz-Signature=e20e91810f74927ca9e3eb6f6340630bf04933c69f6df0a8d6fdd23ab5d17893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AKAKDB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID5GCuosflyA7uJTXg1a%2BXlg%2F5wnOgOWzlZn20WY5MHQAiB7kHlwNZjtQ%2Bxu89IttdAGaFkdsy30cyCMfV54nbojNCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMN2JB3zBaCMDu4LW%2FKtwDobkQGODLsb9YEhzpJC7LZRDS27k%2F%2FdTiF98qLqM1BY8Wyw79KL4dGvJbwkbVmQYEZ%2FbPDy3sgcPKrdMDpeKA1X5haTs97zeUuWWXMDHzIMQsTKZ0blJxF5HKvJYB4pRgiEUOD%2BWd%2FzrmXV81wYTfRadikS0ViqixdVlR5kGN5aAfI1Vnw3nMzP%2BJAW0qzSFXfCWMdRvUL%2F2J0iWXC%2BzHcgmUBbGxUDtEZnA1OH%2FpW2GdpDyPIQae03KpPnyqptVK0Hr2aILpVb1vqjKml%2Ft%2BZWv%2Fkn7QRPzVFHoog9tDCz6EK9QCdySgohYp0EByPDpvU42k%2Fx39VwvnQvGXafxc5ptXLVFSeJtWspurj1N%2B0GUznWrAx%2BIDE3FxAT%2Fq5OsnQa6iZABZDpWvvfB5ZuC3mZ%2BzCK5spo6jghEq74ZNJqNPCqmDBYfS%2BerImnlCsXsIpr6w8yYhuj15efoRlpzzXlXRSjQ8w3QJbPPRapc%2FJvV7DCrM7XXS2zZI3UplD2lvv%2BhKG%2BkFlJfHj%2BRd0hi%2B08KjMs4MbnXJF9lGF%2FhAbNmWAx%2FXvUvxIqj0vkqMer0sib82icYJBkc3oNiHnhQ1lh2amdI4mpblZSELsm%2FmiJlP2ScrFL5FCpV97OMw5%2BuD1AY6pgGcDFgANu3muPcCeV8sVwE9PZ174%2FbR2HwObYrTfr%2FgDIdq0UB4miRlmcnrHNS1sr9ELWwwGgAZAbPUa3Y9z1KpdtQwODZxZsYo7ZmhhIs1SPwXXlGRaEVT2W6yYe1q0%2FGxISWbCO1G7yjH7OUKPzie2QZyJbgts%2FQD%2BXqSWe7FdhRrNL42nd6Yvvwye84PB6PDhfjklrNi%2Bn1RqKk2lH8YnssVx%2BOz&X-Amz-Signature=047d2ef59fb21feb03ba2dbe40d25653e89984e795d4247422a1f7662734cb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3LNHSC%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIOBuW7MaIpdOBZGqLaj1a3sCeguS79TgbXF%2BQOocLmwIhAKqDCEXlC5TvngpMIXdCIQr8HrgPzF9rKQkgr1wABvz7Kv8DCCEQABoMNjM3NDIzMTgzODA1IgyNW49l3AiyGgIikoAq3AOW%2Fusc18Bx7obN37ZaRBMj7WILruMewwtIpm31jCU7OfLHcdqh%2BKDnCbxGTl1reBIginFracw56nAJ6mzrCQKOeykQc68wydaIh6bnMEYg9K41xgf7UWOMUuGucAnyxdWXI4R07Rpwn9qhnUrsOLCZHHuKCDjt3toabx4r4kXmJsD54nnjpFoej6t1WRnN4rtMYxhZ%2BOwN%2FGjV1djzIQ8ZPTIoDVaDSEKgatDTvIlCKnFZa0sskvMG5M6Uai7qOVFuczD0zGWsxriYu2Gke1h%2Fj%2FbxUb9mlQPKdDmasAHk7XNZ7a0ViNdjpGYoiVQBX%2Bgmxi2wZEBjt8oanyam4LYASd8mGDNEiesPnZmL%2BuGHlyC5%2BMdHkD33BQjC8F14C%2FT1lGNJrQ%2FxxaCn47k3T8dkJLUcxmww4BxmaSqZglCBu28at89yENF7BAed2Vdk8ELiilKmHZD0KZbFMWQG4VsFCNR1gx4%2BtBPU1VJcuJMO7OatE%2Flz%2FLR8ZhYJJj%2FRQ8faqdYIWh2gHC6IAQFVXLoh2e9cY0evjbalEMwJHdQsilcf6E5Ec4q46bkQXErFw8Mh%2FPub0rR8hU4R%2BuVO%2BosgRzWwWcnnNkSCurApNSottLfqrWzIBiww5EtOXTDn7YPUBjqkAaAoFQU11BYJdEoLH%2Fgo0Ui5ZiW5hb53aR918psBW9V5mVY%2Bm1hUkNDnXPueZrYuWUErd2D8IaX0aFKJy%2FmWE8w%2F1rNA3It2fwUKswh2jfLF6hJy0KEYuwCx2PAK4QsbTpYWEFLEoWcU7B1MVYabFB%2FzXnnwQfDo6aMmz%2BUJlqz%2BBiil5%2B6nUPvQjR%2F1qC48oUny4YRrkOvSNVHILwT35ICGvxnK&X-Amz-Signature=4a2d00cbb3ef9304f14e4804fae290d0109a55fd7244d640355b13094235cc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRRGAV2%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFmX4uLmBMdkfUMXA8buHapwSNCskARzWwTksWqbh9L8AiA%2BPy8Nx0Fc4wxJ3sZEvtoVu%2BYwIuV%2FKbdfMe7oIG3sVSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMy%2BiLxnTBuO5UjGOTKtwDNQANQKxVVoDsqBZnkNLkWD%2FdcAaIQwBheM8esYoD%2FV%2Fzqr6t%2BUOaJzoEY4eFcU%2By29IOLEQbjK3rra%2BLQlsKWFys9cIHx%2FuxHJyHDPX9mJ9GKgS7ZD%2FiBE58At5rq5bnIbG3sxFz7QfQc7nwBVdDLIQmiOLhAuZTJY9je7qJ3FnjiZuCmiRSunSK%2FFKbkKZ%2FyekE6JYuGs%2FIpeh1B%2FSFmt%2FRzMfOSTjiFPkKmYDZMS3SWc26Kc8vQQJ2XOLigMCMj%2Fru0C7rcicGr3eqt8hi1li%2BcAheya9D3lJ1%2FTtUk%2B1RA4r3ZvrsjEzC1UXVdXFzEZOlgNg%2B5VcgNE9mpCfT1ozp7HrkUQsg%2FQ6ubk1%2FXL6cAt%2BpxO5E4Yasjm8OYyRpnfuMHhpMQ2F4eKInzEXCwIeWL6HFVbDNmSeZJwYmjZ2OlQcUegun8OdYtSvffmZjvDpvPjYuKYvzfceZIrjtyd8N9%2BEfHQ2KEwNIPZSDLj3c%2B05Ap6Ye%2FJae7OnYAMOx8N537efe0CV7j8H%2FZRea5K2CsHxXZGx%2FeniQtLTB9cSq7gJQ7gWXFBxlwwZVKzdkPoX%2BkfML6cMwMnyTTfDK%2BSSF4g65I%2BiW%2BrLxO%2FxbdNtMS5a6iot4i7o9ScYwzOuD1AY6pgGmAFK24wAu0KYSW%2B7tU84MzcxijpOlhmZAdGrFXpZwMi6cDpzWy4rPoxMcA1wsSerHqokX1EN1BWAXT5xkUb6XWJEW6eakYPeOfwiv3YI36IB%2Fzsm4A0GJd1X1DRRejmHNhOQMGJ5BRtUhq%2BJBTEaow%2FcvCJGN7uYyNU%2FFnSuWMRa7DniBVJeKbRBzDzRqjNOi%2FcJqdy6XgZJoAJKVmgVV9QF8wzpL&X-Amz-Signature=5273a329787ad654eaad45c39339a3f6e8f3d3dd188a73878a7ed0918d7a712d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AKAKDB%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID5GCuosflyA7uJTXg1a%2BXlg%2F5wnOgOWzlZn20WY5MHQAiB7kHlwNZjtQ%2Bxu89IttdAGaFkdsy30cyCMfV54nbojNCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMN2JB3zBaCMDu4LW%2FKtwDobkQGODLsb9YEhzpJC7LZRDS27k%2F%2FdTiF98qLqM1BY8Wyw79KL4dGvJbwkbVmQYEZ%2FbPDy3sgcPKrdMDpeKA1X5haTs97zeUuWWXMDHzIMQsTKZ0blJxF5HKvJYB4pRgiEUOD%2BWd%2FzrmXV81wYTfRadikS0ViqixdVlR5kGN5aAfI1Vnw3nMzP%2BJAW0qzSFXfCWMdRvUL%2F2J0iWXC%2BzHcgmUBbGxUDtEZnA1OH%2FpW2GdpDyPIQae03KpPnyqptVK0Hr2aILpVb1vqjKml%2Ft%2BZWv%2Fkn7QRPzVFHoog9tDCz6EK9QCdySgohYp0EByPDpvU42k%2Fx39VwvnQvGXafxc5ptXLVFSeJtWspurj1N%2B0GUznWrAx%2BIDE3FxAT%2Fq5OsnQa6iZABZDpWvvfB5ZuC3mZ%2BzCK5spo6jghEq74ZNJqNPCqmDBYfS%2BerImnlCsXsIpr6w8yYhuj15efoRlpzzXlXRSjQ8w3QJbPPRapc%2FJvV7DCrM7XXS2zZI3UplD2lvv%2BhKG%2BkFlJfHj%2BRd0hi%2B08KjMs4MbnXJF9lGF%2FhAbNmWAx%2FXvUvxIqj0vkqMer0sib82icYJBkc3oNiHnhQ1lh2amdI4mpblZSELsm%2FmiJlP2ScrFL5FCpV97OMw5%2BuD1AY6pgGcDFgANu3muPcCeV8sVwE9PZ174%2FbR2HwObYrTfr%2FgDIdq0UB4miRlmcnrHNS1sr9ELWwwGgAZAbPUa3Y9z1KpdtQwODZxZsYo7ZmhhIs1SPwXXlGRaEVT2W6yYe1q0%2FGxISWbCO1G7yjH7OUKPzie2QZyJbgts%2FQD%2BXqSWe7FdhRrNL42nd6Yvvwye84PB6PDhfjklrNi%2Bn1RqKk2lH8YnssVx%2BOz&X-Amz-Signature=540d4efd8ee96bf3717dddee143b5689b26d601eea2dbbe3f561722552272cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
