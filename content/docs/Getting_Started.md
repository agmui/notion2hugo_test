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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNBDDQE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEXVzHXOEq1kx5OTIvyIx8dtY%2FJrz9PKDuM1PAFjFAInAiEA%2Fu3b5owXYCT%2BLPeVmeDGMncJGvszAKW9o0CkAAlE0XkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Flo2uh23D%2BJbNEVSrcA2JhQgT67mbFFaSgwQtxPGIRvjiOgePY7asBBQAqNjSTiTgcHmROhK%2Bh8IkiE6MrAK2UzKsnCnVBIhxHaeuyx2Fp74TR%2BPTIlt376pK0fvs2AMtcQsJPTG8PPpEoVX6KLzo5vIW4%2BxGyd2eMpyKEcfwnzn%2BlJ14dcInLXxwXpIpjx3tNHLsn69OfsYGkROQIBiIAKT8wy%2FB63YwMkNTASlTDKCmc%2FqtxUGYkqdl1XX7WIUHBHeQHS8y0De3IlVYumC3rCRUJKhZIYlIxg4gksNM17%2B5ABYlpLyG3d%2B%2FnnidmM%2FtoOMktiSHyoGjcB3QxbZTWyGdoxnvNyT8r4J9PyLrsZZVbxoMVW6qE2wBqOt5Hk%2BRBBOfwOdxAjq5hAQj%2Fk6QoFqjKlS9VAnDxlBKOfrVSS2LW3Uu3g3JgaEj2MEQTOOBgLtTOPDJkMCEjgof2nInK8gsHmq5udJyub1%2BT5JtHiNlafGeHStfQ3zWed0klEg5D3owX2LJ2dfgOLooKO0zg1TkHC%2FszTmsO2qCR1sI81cpPgL5YMolhWD%2BVpKvgyy9UGl5MrNQiEi3P7NJGOgUMj4Qy0swf1V0o8%2BoVcACNhEP%2BRn6LQ5mBJcwbkXWrHCfVXffouuucid5TMKHH4cIGOqUBaqhqweDG8njFqGrhn6WhGUuX0vgol%2BNKvUxKsRAUi3J2FQTIWGo1cw%2FgUdt%2ByFmbhDhF18odV1b23uxwSReRrYTTZk5ym87iZPesiqtiWqTWL8G9K6RA75xNEEvDn%2BZDHGI2Q6wKfEe73GnKUorfz7nr%2BhrkFLlBj9PqRZHC7dXKHGFEMkhYE6cE2yOWeY9FLl1b1jbxenMwVgt80s85Hr91N96m&X-Amz-Signature=cd2029214c8445ed6ab006637f1cbb120880b8f2780a433d5201a395c3cfc6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNBDDQE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEXVzHXOEq1kx5OTIvyIx8dtY%2FJrz9PKDuM1PAFjFAInAiEA%2Fu3b5owXYCT%2BLPeVmeDGMncJGvszAKW9o0CkAAlE0XkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Flo2uh23D%2BJbNEVSrcA2JhQgT67mbFFaSgwQtxPGIRvjiOgePY7asBBQAqNjSTiTgcHmROhK%2Bh8IkiE6MrAK2UzKsnCnVBIhxHaeuyx2Fp74TR%2BPTIlt376pK0fvs2AMtcQsJPTG8PPpEoVX6KLzo5vIW4%2BxGyd2eMpyKEcfwnzn%2BlJ14dcInLXxwXpIpjx3tNHLsn69OfsYGkROQIBiIAKT8wy%2FB63YwMkNTASlTDKCmc%2FqtxUGYkqdl1XX7WIUHBHeQHS8y0De3IlVYumC3rCRUJKhZIYlIxg4gksNM17%2B5ABYlpLyG3d%2B%2FnnidmM%2FtoOMktiSHyoGjcB3QxbZTWyGdoxnvNyT8r4J9PyLrsZZVbxoMVW6qE2wBqOt5Hk%2BRBBOfwOdxAjq5hAQj%2Fk6QoFqjKlS9VAnDxlBKOfrVSS2LW3Uu3g3JgaEj2MEQTOOBgLtTOPDJkMCEjgof2nInK8gsHmq5udJyub1%2BT5JtHiNlafGeHStfQ3zWed0klEg5D3owX2LJ2dfgOLooKO0zg1TkHC%2FszTmsO2qCR1sI81cpPgL5YMolhWD%2BVpKvgyy9UGl5MrNQiEi3P7NJGOgUMj4Qy0swf1V0o8%2BoVcACNhEP%2BRn6LQ5mBJcwbkXWrHCfVXffouuucid5TMKHH4cIGOqUBaqhqweDG8njFqGrhn6WhGUuX0vgol%2BNKvUxKsRAUi3J2FQTIWGo1cw%2FgUdt%2ByFmbhDhF18odV1b23uxwSReRrYTTZk5ym87iZPesiqtiWqTWL8G9K6RA75xNEEvDn%2BZDHGI2Q6wKfEe73GnKUorfz7nr%2BhrkFLlBj9PqRZHC7dXKHGFEMkhYE6cE2yOWeY9FLl1b1jbxenMwVgt80s85Hr91N96m&X-Amz-Signature=0f1a78509a02fd9768f7583e34378849f62c08bc389ff2d57430871e9350ff18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNBDDQE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEXVzHXOEq1kx5OTIvyIx8dtY%2FJrz9PKDuM1PAFjFAInAiEA%2Fu3b5owXYCT%2BLPeVmeDGMncJGvszAKW9o0CkAAlE0XkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Flo2uh23D%2BJbNEVSrcA2JhQgT67mbFFaSgwQtxPGIRvjiOgePY7asBBQAqNjSTiTgcHmROhK%2Bh8IkiE6MrAK2UzKsnCnVBIhxHaeuyx2Fp74TR%2BPTIlt376pK0fvs2AMtcQsJPTG8PPpEoVX6KLzo5vIW4%2BxGyd2eMpyKEcfwnzn%2BlJ14dcInLXxwXpIpjx3tNHLsn69OfsYGkROQIBiIAKT8wy%2FB63YwMkNTASlTDKCmc%2FqtxUGYkqdl1XX7WIUHBHeQHS8y0De3IlVYumC3rCRUJKhZIYlIxg4gksNM17%2B5ABYlpLyG3d%2B%2FnnidmM%2FtoOMktiSHyoGjcB3QxbZTWyGdoxnvNyT8r4J9PyLrsZZVbxoMVW6qE2wBqOt5Hk%2BRBBOfwOdxAjq5hAQj%2Fk6QoFqjKlS9VAnDxlBKOfrVSS2LW3Uu3g3JgaEj2MEQTOOBgLtTOPDJkMCEjgof2nInK8gsHmq5udJyub1%2BT5JtHiNlafGeHStfQ3zWed0klEg5D3owX2LJ2dfgOLooKO0zg1TkHC%2FszTmsO2qCR1sI81cpPgL5YMolhWD%2BVpKvgyy9UGl5MrNQiEi3P7NJGOgUMj4Qy0swf1V0o8%2BoVcACNhEP%2BRn6LQ5mBJcwbkXWrHCfVXffouuucid5TMKHH4cIGOqUBaqhqweDG8njFqGrhn6WhGUuX0vgol%2BNKvUxKsRAUi3J2FQTIWGo1cw%2FgUdt%2ByFmbhDhF18odV1b23uxwSReRrYTTZk5ym87iZPesiqtiWqTWL8G9K6RA75xNEEvDn%2BZDHGI2Q6wKfEe73GnKUorfz7nr%2BhrkFLlBj9PqRZHC7dXKHGFEMkhYE6cE2yOWeY9FLl1b1jbxenMwVgt80s85Hr91N96m&X-Amz-Signature=bb0bf0a2a5f93edbf678cc5db2411f8f9b367cb4189f428916a2205b62d69bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXRPQCQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD58H5t4JzjGToN3pcYPv4Dia0moScxJHYc212zsSsO5gIhAMMOPZcoe9QuwiuQq9pqrWLpofvrD12ZtOUk2sXYPx8mKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS64%2BpYc%2FN3d08YCsq3AOa5tlG9zQxdWQgLKgU5pDJveiFhsmiwZaNhd%2ByyxD43dQ%2BNcORbHbQiama0DtAlc%2BUWiswHMj3twXX6x5eUteEl%2FGTjQz3AbC2zeRY0PbQB7vstfLp3sV7gws%2BOB5ujgBm7lGOGlGlGfGCONPFjJyMgWI1z4P8O7hA2s0UG8fJu3Fni%2FopwytZBxf1mdW2wLYBoq7FhxS5fgDMkhkStAFh4Y5Nkmw3cMOhL79ORAzaqaPQ4ZW%2BbXv%2FKeRDD%2B%2BoTbm4K2P2rmnIPliFM90T1%2BFplAybIg80ZqQ%2BZ6x0R7qtWt14uK9cI7qnhBc9CSXN5V3JrO7I58D8R9A4mT%2FGsa7IE%2BCzk7OmRrBOz3bFfqPlrJCcVtgGMiFKj1lj48LebnBggttjp3wXBzGLs%2BVfUpU0WcCB4MKOBjeOQI6th3ZKOnJxSCRalv90PHJjVi6AHx3n30llG2LIQgwjd6LYseQ%2Fgd10nFTXflEVyb2sKfD26nXXKVExpa6hYJpn8vmdLs4uZrWlT39OiSTaa3g8jgZjJ8iom9FNer5kU44FHOeGRDxlrkILGAwPR3ccpDcVOreZUKRF28CtVzU2bCRTEIScj5WqbxJjQWmBImZSBHscHoSFgeZb%2ByJazxWb%2BTD0x%2BHCBjqkAe2vbuxZ6o83orC58qQpnSoMIWBfNsUoy7z46jIuc4eJvecVurckmjrIOpJTGJWY7P0vA5Ig5v8yL3W3D7oaEihthUOx9O7RaZzKcx2dnJ7N2OisLwm7iJAgQ1QNiftfRLpjD4Ub1jiQ74k2Cp3jCoSVDPk%2BSpW0K%2BZeE4E4WetlleV3SE3zx6WjV7TVZNvQW1MOylpIQGoJ3uq4FooiKBdgXGwl&X-Amz-Signature=cb12156a23e257252fd94f6f47ebc17aa05b7563eca6a601b34835f271412627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHAADUL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIF%2FdVyejoyC0uyNjaN0Q8D1UVtLT1QkANbwnav3kv97YAiBCZ%2BvXhgc10tvGvxKB%2BwAm7p3pzlTsEFVMc7P4PUicoiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfmuT2iBpkhf09rBMKtwDZtgI0S8v7x6kD3LNOAsl72WjkgkFXs5zHEQ%2BJsRrNI68mIlsPlz8vJD3aIODZFZbBLViaxGvCAqhYp1kTiE6hnhI%2Ff6KnxkKXuxnvUCOqoNg%2FabtfOY7OtJHJCdU8X9dEyw%2FQCgXsQ%2Bs1LCkVX7SUAdsM0CxF9%2FQwkNAC76ce22foV2KKQ8tnvvSf%2B2GWppLHfJjhj33CuVHf2Ham1F3NVERghUZhoXbbZH4YXg9n2dgakiIu2S0RagjUs%2BKiNbz9ZstfjY05phRtA0Ro0Lz6LIWdisU4TpJxoo41Y6uxrIKSbOMY6Zw01ZoGgI7MGTiS46n1qxi1iRH4R9NfnsfmSwqQHDd4riIaGh%2Fvjs%2FMmrkg6NyBtGOHS8NZe6LGW0MSmosH%2FzWBuAPI%2Bpgw%2FpfffP7vkXDwQMVbXXPyEH4lWWJWHtrfiel%2F%2BEUmEQbsFRC145%2F1oNGFLroIU8jj8n1QW5N6LEBI8uUWD7QcX7bSghpFzhh30uJt%2Bw3kL41Xsazeii70D1%2BIPAXYK8JlmB%2FTtEP2YYmlsCUb53UqMJA7xLQxzkOk%2FWvFX7bwsNcX9TX3lPpp4Loue30ADjKG83PMMd7pcSbwQT2B%2BKTkv%2F9L4L0v4pDoZ7iE7HG8YAwjMfhwgY6pgEBfa0jnPOrSmnSMyzfojhHe%2F3vHAKc1lptFejWZcCRP92g77%2BJmHPtnSmj7e06hpc2FlHZqv%2BEvOuZJmcZ%2FF8IyqxjSjqLpOSiH55rp4GMVrOTKt2EWCkLfdbwjgmyNWtW74DZ1LTKJZdBN2MOmG7BGYWL1X%2FlfXQRabgX9R3ZPplRJslMTPCaOQxcjZ0GtOJqpaDV0h98vERFejxbmh1EpswKwBLc&X-Amz-Signature=a3e2f2cec0daa195e56f63b1b3b47230ea8898a86f988bbffd717c992708fb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNBDDQE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEXVzHXOEq1kx5OTIvyIx8dtY%2FJrz9PKDuM1PAFjFAInAiEA%2Fu3b5owXYCT%2BLPeVmeDGMncJGvszAKW9o0CkAAlE0XkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Flo2uh23D%2BJbNEVSrcA2JhQgT67mbFFaSgwQtxPGIRvjiOgePY7asBBQAqNjSTiTgcHmROhK%2Bh8IkiE6MrAK2UzKsnCnVBIhxHaeuyx2Fp74TR%2BPTIlt376pK0fvs2AMtcQsJPTG8PPpEoVX6KLzo5vIW4%2BxGyd2eMpyKEcfwnzn%2BlJ14dcInLXxwXpIpjx3tNHLsn69OfsYGkROQIBiIAKT8wy%2FB63YwMkNTASlTDKCmc%2FqtxUGYkqdl1XX7WIUHBHeQHS8y0De3IlVYumC3rCRUJKhZIYlIxg4gksNM17%2B5ABYlpLyG3d%2B%2FnnidmM%2FtoOMktiSHyoGjcB3QxbZTWyGdoxnvNyT8r4J9PyLrsZZVbxoMVW6qE2wBqOt5Hk%2BRBBOfwOdxAjq5hAQj%2Fk6QoFqjKlS9VAnDxlBKOfrVSS2LW3Uu3g3JgaEj2MEQTOOBgLtTOPDJkMCEjgof2nInK8gsHmq5udJyub1%2BT5JtHiNlafGeHStfQ3zWed0klEg5D3owX2LJ2dfgOLooKO0zg1TkHC%2FszTmsO2qCR1sI81cpPgL5YMolhWD%2BVpKvgyy9UGl5MrNQiEi3P7NJGOgUMj4Qy0swf1V0o8%2BoVcACNhEP%2BRn6LQ5mBJcwbkXWrHCfVXffouuucid5TMKHH4cIGOqUBaqhqweDG8njFqGrhn6WhGUuX0vgol%2BNKvUxKsRAUi3J2FQTIWGo1cw%2FgUdt%2ByFmbhDhF18odV1b23uxwSReRrYTTZk5ym87iZPesiqtiWqTWL8G9K6RA75xNEEvDn%2BZDHGI2Q6wKfEe73GnKUorfz7nr%2BhrkFLlBj9PqRZHC7dXKHGFEMkhYE6cE2yOWeY9FLl1b1jbxenMwVgt80s85Hr91N96m&X-Amz-Signature=07991dccf6c2839e1e0ff5899953add2891a4ff8c02849afd06664f16ee69bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
