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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILKSWIK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICuBdGcErAMmRanh6bSwraKiFiBOpZUv7b9vFeKxHbSgAiEAqEVS1p84pmd3PiOujqEBf172Z1xq%2FqARrqNSffKwUlMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOM%2BoTBt8n0YcB%2FKircA9zWY4BlyoE%2FUrD%2F6dz0Q26sTjPbOrycAqV5%2FrRATUziP6P5RMvWDuUUKO4BZsIkKxd59jsYnHM1Gs%2BP5WJ7DPSt1b1HJ9yqGs6bZBjjFKYy5%2FHRcxjKSa7BJgX1Jw1m17eJanUebuHcOjkR3%2BcBzP6xtuu8737t38hSuvNsYlxifnyX0NajlWdBeySiNf6P1557CVNwkvs6IuZbTI39W1upm1foiKY5E79HKiPbH%2FfV58vRFJ7DVsOEsLT1MZ2a%2FBGvsYiVgpmL7PPrLTmf%2BaLxIQYa7OfYN1pfwm6TcsWDm2PibeZSrx7owY%2BbGGW1p6KdRmxYXCJ44LktnA7W7Zft4HxOTB%2FvKMFMyYPwNSu999CIX1LkVhu3Otu00fhHtgoB51nnO3ipV0pViTsrjcL1plaOPg0koK5C%2FxKCW%2BIJnZZWLnAi0US2kkDfzuMdgvHqL%2FqoBXw5J4N5NA0EXJv4ZpFQ8Lw9E6q2j0EHyqIyUmbmzReqXgMEAeIALC%2BQPkmzhzc0laTR3rq%2FAmzHIyqvAtdbOGB6d9FWvquDvrs%2Bw4v4BzTpglqBQk6WSpjLE7leaYpoYuTnWQTrqE%2F3N5kDIoXy3XjSszQ3euOLBtGirW0R49kv2gS17tiDMKHc9r4GOqUBvGha9Q4kAE47swW4v7T1n4Fc7FSy1WvHAH8DHb1KoJ4Ykjyer%2B7vFCj0j%2BE9ycfD7ozNd4RH6eN3ciWDbFE%2FIUKh9WHeWNrDlbuMVNHYcnY7XGm0bnmDK5WQZ1DFiWA8RW5G8WNJSAYBjE07b4WaG0GAlRm3d0CeJk53rqjTSjlmPXMlEhImMoewel2AnztyRdHilJGX6%2F%2B9OUD4Rz7inaFhURWj&X-Amz-Signature=006956d0f6611a0e9f6dcd6a303e48d3c8451be440def5645aede45918dcd815&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILKSWIK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICuBdGcErAMmRanh6bSwraKiFiBOpZUv7b9vFeKxHbSgAiEAqEVS1p84pmd3PiOujqEBf172Z1xq%2FqARrqNSffKwUlMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOM%2BoTBt8n0YcB%2FKircA9zWY4BlyoE%2FUrD%2F6dz0Q26sTjPbOrycAqV5%2FrRATUziP6P5RMvWDuUUKO4BZsIkKxd59jsYnHM1Gs%2BP5WJ7DPSt1b1HJ9yqGs6bZBjjFKYy5%2FHRcxjKSa7BJgX1Jw1m17eJanUebuHcOjkR3%2BcBzP6xtuu8737t38hSuvNsYlxifnyX0NajlWdBeySiNf6P1557CVNwkvs6IuZbTI39W1upm1foiKY5E79HKiPbH%2FfV58vRFJ7DVsOEsLT1MZ2a%2FBGvsYiVgpmL7PPrLTmf%2BaLxIQYa7OfYN1pfwm6TcsWDm2PibeZSrx7owY%2BbGGW1p6KdRmxYXCJ44LktnA7W7Zft4HxOTB%2FvKMFMyYPwNSu999CIX1LkVhu3Otu00fhHtgoB51nnO3ipV0pViTsrjcL1plaOPg0koK5C%2FxKCW%2BIJnZZWLnAi0US2kkDfzuMdgvHqL%2FqoBXw5J4N5NA0EXJv4ZpFQ8Lw9E6q2j0EHyqIyUmbmzReqXgMEAeIALC%2BQPkmzhzc0laTR3rq%2FAmzHIyqvAtdbOGB6d9FWvquDvrs%2Bw4v4BzTpglqBQk6WSpjLE7leaYpoYuTnWQTrqE%2F3N5kDIoXy3XjSszQ3euOLBtGirW0R49kv2gS17tiDMKHc9r4GOqUBvGha9Q4kAE47swW4v7T1n4Fc7FSy1WvHAH8DHb1KoJ4Ykjyer%2B7vFCj0j%2BE9ycfD7ozNd4RH6eN3ciWDbFE%2FIUKh9WHeWNrDlbuMVNHYcnY7XGm0bnmDK5WQZ1DFiWA8RW5G8WNJSAYBjE07b4WaG0GAlRm3d0CeJk53rqjTSjlmPXMlEhImMoewel2AnztyRdHilJGX6%2F%2B9OUD4Rz7inaFhURWj&X-Amz-Signature=22b9582f642a5925fb2aa93fd7d62a215e977ad4a6c1e2172fefe03ff4fe1f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE3VFBZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGuy0L8f%2FYrGRNskXjQjp3ZlpPKSKwfUF0hllpmCZOFNAiAdbnLObU9EJRSjDEiSCZwZMCGdwlwUrjpcGq9jdt5IvyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfr7RhrlmeUiv4LreKtwDKOJGRfqBs9H3sjuS4uCLdkpuPQW4XC5FX8N5q71SZo9S79iT97fZ6A2pE15llUnah6k0fXrzDLdcFRg%2BsKsrHwcfyX5Dwpc4a%2B%2B17YbMOow44W5KAMQuKgUrRilyG6m0d3Qc10zkaNxwiabPNctyKN%2BIZuW62Xiqv03a2FWnM79wnUnxMzpiYxRYH29Gj%2Bop0UlVo4u6614bBDmIsSeNC6v5CuYr0q4qY0kEGDX4bNazjd6S8JMWbOjI0CmCy4WScDbek%2FIy1k8VnSby3C35NzA7rPJHngXf8TZt7XpcyGz%2BTGRy60B4qsLH3tMhg29P5XsSis0nkKAkkdN6iq6TCoaAumh1fe2Z%2BtHliVG%2Btj5wr3f1kgc7Uko0CliUstInLKAaOlnTqXssPVPeUMHck3zQvuZ4d78RbmCbM%2F6In9nUmHMfqdByQjEcGgr3yyz2B0jNVPcM61nqNpr0he0Z532fXKk8uw7hEjyYNvQcTLEkY63iE6lvfJest5l%2Bff0jULfgIZFh2x68EofmbakKICvaKZ2p1dTfW1Mx7TYVMiD1i0gaifXiqpXbU%2B%2B1MOOfkS0P4HDKb0elVCRSoYdiebQ1dK4OTog6qXTUxIHShxDAj8xQP0EIJmR%2Fttcwjtv2vgY6pgEogKMOLHrjbBTfXtGZo2sL0I4T%2BUqD0yfAcOZaJspwxmB5BEWbaxT4m8%2B6T9MdCiOxjLdk%2BckkLhkbY%2B4ajY5FjQof9xZPbtAAce5ViLa%2Fs%2Bm3SYJ36hYiFQKhzn1kA8v%2F3ZkYVSMOYXBFKCccDuGnoWrKrqBkZTfcrk15aDJJfkbYCtLtYZDHCGdzt%2Fk5cns66aD4Mg6QPbosPalmbV%2BSkHYGmiCS&X-Amz-Signature=a8860a67e5408580ccf9266466d2e034620df4cca9ee82d8b50d409a2915f8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVGIOXU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIB5Jw5zq8naIf0%2F5GqY3Ubt8FNNFbU2c97zUk6lPFqTqAiBj%2BHxH1yp%2BBMAWfS9CJIt8f8XG2hZyP25xDxbJGAeOySqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8c1LjgBHdAU95QdlKtwDp6MITQTWadH6MzP%2FuC15tSOqX2mwMcru2AraDIpDEdXoIRE2cAclmJ5bUUpGJYDcA6d5iQ2suPT7upxQDgeUBN5wvmJEUVenLOhnt%2FLqxxSmN19LyDQIZ1lfyw79TtInY6BfrdZQep3yPyGlsTiC3ibJeffDvZ30IUjv9Lg5KHpkZqg1tyjZvJWrIa3aerGNzhkhz5xglSOjKBXpyhoaDJd1SbQ4cGyLUFWPubP31HnGcnGR%2Fk3tcuwB2EXf%2Fsg%2F4ru64yfP3lYwvSbz%2B0HTywR6Ep9%2FUM2d71%2FAee10gLUw2Y5TbGfJW%2BBpvX3Twf2gnky0RjgKx29LuXTcfIAA%2FPiimxraldiM4UmFdtjOQww2RDCURUlVoc%2BZU5BFlnM7YjWMl9plHqqf6LA7T8uOMYd9aGoIyp6oQ4WfRarYZ6%2FD48V6KGDfwuq9rcmMGZgwf%2FFoY%2F6y0pWYORVa3xigu9ii2facwR%2Fcl9mk1tmPA7B6Q9nt4LX1M1ZyMrtSrCEwDqflD8RMtY5pM6oh7uDiJ70MEsXLSEQdJB5fikCIMMqMR58B%2BhJsrMsmZVgYuucKo8TY%2Bn3layyPUkvsoKgxQ63v38sa8uAxMOsfZ%2BQpbh1SuUegV5JlOO17Am4widz2vgY6pgFGWjW8hAL3WmtaZAbUwycEGrnDqnzjS8Y9KwG5yzCtOyR%2FCi3wmQsgZutVCZ6G7cKlI7dUmDYBIX85gXfrY6haK0Rx0nTY8bGfaRS%2F7pzqRU8P5ULbIrVxAEAmP70xZdhKe09dH9vxK7j6SzDt1BZOIMPuZSoc0bAVQLy%2BQJNqFID6SDj5dOW4E4vl0T8N9D0ZMbAdBFoEbz4%2Fv9Sryzjx082Wmq0m&X-Amz-Signature=43ee3d83129da2087ce5699feffd206a5951d2343abf67e5ac455163c0acaa1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ILKSWIK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICuBdGcErAMmRanh6bSwraKiFiBOpZUv7b9vFeKxHbSgAiEAqEVS1p84pmd3PiOujqEBf172Z1xq%2FqARrqNSffKwUlMqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOM%2BoTBt8n0YcB%2FKircA9zWY4BlyoE%2FUrD%2F6dz0Q26sTjPbOrycAqV5%2FrRATUziP6P5RMvWDuUUKO4BZsIkKxd59jsYnHM1Gs%2BP5WJ7DPSt1b1HJ9yqGs6bZBjjFKYy5%2FHRcxjKSa7BJgX1Jw1m17eJanUebuHcOjkR3%2BcBzP6xtuu8737t38hSuvNsYlxifnyX0NajlWdBeySiNf6P1557CVNwkvs6IuZbTI39W1upm1foiKY5E79HKiPbH%2FfV58vRFJ7DVsOEsLT1MZ2a%2FBGvsYiVgpmL7PPrLTmf%2BaLxIQYa7OfYN1pfwm6TcsWDm2PibeZSrx7owY%2BbGGW1p6KdRmxYXCJ44LktnA7W7Zft4HxOTB%2FvKMFMyYPwNSu999CIX1LkVhu3Otu00fhHtgoB51nnO3ipV0pViTsrjcL1plaOPg0koK5C%2FxKCW%2BIJnZZWLnAi0US2kkDfzuMdgvHqL%2FqoBXw5J4N5NA0EXJv4ZpFQ8Lw9E6q2j0EHyqIyUmbmzReqXgMEAeIALC%2BQPkmzhzc0laTR3rq%2FAmzHIyqvAtdbOGB6d9FWvquDvrs%2Bw4v4BzTpglqBQk6WSpjLE7leaYpoYuTnWQTrqE%2F3N5kDIoXy3XjSszQ3euOLBtGirW0R49kv2gS17tiDMKHc9r4GOqUBvGha9Q4kAE47swW4v7T1n4Fc7FSy1WvHAH8DHb1KoJ4Ykjyer%2B7vFCj0j%2BE9ycfD7ozNd4RH6eN3ciWDbFE%2FIUKh9WHeWNrDlbuMVNHYcnY7XGm0bnmDK5WQZ1DFiWA8RW5G8WNJSAYBjE07b4WaG0GAlRm3d0CeJk53rqjTSjlmPXMlEhImMoewel2AnztyRdHilJGX6%2F%2B9OUD4Rz7inaFhURWj&X-Amz-Signature=7563a35de40a4e9d0499e84677e37b27e67204b1ed5ae446f79af617cd7b613f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
