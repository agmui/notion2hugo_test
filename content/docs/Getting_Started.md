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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622F7UZ6T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE%2B3CKGdT3YSO18qGodlXsdMBGDP927VH1NODrlkqp8vAiBEDtwPWlXOAZbgWUHZtZjAhySK2ZOlh%2FbxMISuTbFJmyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMtLMvyMWqi%2B%2Fiy4g9KtwDb4ADGijbQ4jvcoNW7X8ZvjJJ%2FinqMez0xp4HPuifB%2B08malFYFD8TusmZJslmse3dTAJc3LVg5OOmHMWVyQXTTWkP74y1GFehz%2FL%2FeGmUdyMdegqP6Cnlj8iNCBFbbjFlXXacc78EBgliZT6grONaSJ7kspNjIzA48owb%2BlSR9aNiWxxu9bD2lF3mntW8D7afQ3UCvdotOnSval5IbUDsxyDfA3iS43qPnu%2FTv1ouEgVh1%2F3ey18GpOR9tnfDx2CBcoqq5QjGm3X3gwEwjz6so%2BsJYZxR9h3%2B0vkGFQwou3ACu%2B%2Fwqu5BsWxHTHOTZte3VyNNbxtNsSeUBu%2BphunF0gzWcbtIGnbeNG%2FsAoB%2FwH4vyfc7FrWvvdqBfukka%2Fhxo5HL2X9i7cDDwsvsv1306bicx5%2FVppGNRj5cO%2B7vyiBztSMsvZFZx7QQyDp8FZcAR2D3dmlGVtFkpV4MKBHSunQxToAf4FeBlT%2BGZ%2Bq8o0UmMs9U%2FxBgTsLtBlpX91KDexOqAnhwgerZBG9jC3YTl46GSzhEsI5PsCxHvW4BxgwDYSPDuyzd%2F4ptmRhPRPwr14pGDIKI7RSSvt9fILnb5BT3Sl8N8kpBmURXdI%2FzY6U5yidEED5kB5kXkowmbyOvQY6pgGrH5ZuSbO4RdERTIbAtkfTQPYJAKXUVkUM3VdKDN4dZaQuxTl893RcQmbrOw6RIk9FRxC%2BAIm5wrh6HWaj0AYv9HvSOD0KOfq%2FJlp%2F5NHf9McHf8Vjm5BEkQSKyPnGNB9YNgT7xroLeL200l%2FMC741xMPXSb7AziXQo8UmX2R9EefMDllPoKVu8pBxU%2B4WI2%2FzHsMxidmXE9tZEAq9qVfBsk1LCrrm&X-Amz-Signature=eef5d327b0b05ba85edef6e74947bd09e8b23ab8bb94a2490fcb9b941b6e45c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622F7UZ6T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE%2B3CKGdT3YSO18qGodlXsdMBGDP927VH1NODrlkqp8vAiBEDtwPWlXOAZbgWUHZtZjAhySK2ZOlh%2FbxMISuTbFJmyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMtLMvyMWqi%2B%2Fiy4g9KtwDb4ADGijbQ4jvcoNW7X8ZvjJJ%2FinqMez0xp4HPuifB%2B08malFYFD8TusmZJslmse3dTAJc3LVg5OOmHMWVyQXTTWkP74y1GFehz%2FL%2FeGmUdyMdegqP6Cnlj8iNCBFbbjFlXXacc78EBgliZT6grONaSJ7kspNjIzA48owb%2BlSR9aNiWxxu9bD2lF3mntW8D7afQ3UCvdotOnSval5IbUDsxyDfA3iS43qPnu%2FTv1ouEgVh1%2F3ey18GpOR9tnfDx2CBcoqq5QjGm3X3gwEwjz6so%2BsJYZxR9h3%2B0vkGFQwou3ACu%2B%2Fwqu5BsWxHTHOTZte3VyNNbxtNsSeUBu%2BphunF0gzWcbtIGnbeNG%2FsAoB%2FwH4vyfc7FrWvvdqBfukka%2Fhxo5HL2X9i7cDDwsvsv1306bicx5%2FVppGNRj5cO%2B7vyiBztSMsvZFZx7QQyDp8FZcAR2D3dmlGVtFkpV4MKBHSunQxToAf4FeBlT%2BGZ%2Bq8o0UmMs9U%2FxBgTsLtBlpX91KDexOqAnhwgerZBG9jC3YTl46GSzhEsI5PsCxHvW4BxgwDYSPDuyzd%2F4ptmRhPRPwr14pGDIKI7RSSvt9fILnb5BT3Sl8N8kpBmURXdI%2FzY6U5yidEED5kB5kXkowmbyOvQY6pgGrH5ZuSbO4RdERTIbAtkfTQPYJAKXUVkUM3VdKDN4dZaQuxTl893RcQmbrOw6RIk9FRxC%2BAIm5wrh6HWaj0AYv9HvSOD0KOfq%2FJlp%2F5NHf9McHf8Vjm5BEkQSKyPnGNB9YNgT7xroLeL200l%2FMC741xMPXSb7AziXQo8UmX2R9EefMDllPoKVu8pBxU%2B4WI2%2FzHsMxidmXE9tZEAq9qVfBsk1LCrrm&X-Amz-Signature=d984da0cf4272d31dfa8ed6e410adc64ab8a79f6f3054637fe6d7b6ec38a8047&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFRTDRJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIF2pJQvRBiQTUzTaytphHFRh9FDZdZUdNromGA0lM6weAiEAmkkbYkE%2BzuBSWiQjSPYZhN1v%2F7iL1PdD%2FAnlZz0GWiUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDMHVvqpj0KVprIo9FyrcA8IwK6ruQvv0fVQtAa9KSsHDnNuX6Ii7mujETk88DXU%2FvziAj2gjII%2FxFr4pMeBt%2F7hMmBSNEbyAl62syi6VVeORkKjpt0D47D86hM75nKcIdiBnafvGDthhtSzJI14%2BGrgTVOARe1gOS6pRbDHReBZejyfzQYOdSBFKxPgGznTA4Sf7oJBAF57IQSTFvLgILcFwJW03s6Hk6CGlm9OZ64r9rxDq3iP%2FiVrVA3hIXL%2FaFQpxtzhFtIU3UQSsXEx7wUHAWdUmi7y%2B3L7wdbgm%2B3mwO%2FLehs26etDC3PrKBHyesee8y8NKwcKUDBcJM0T5oRVJesNqlv0PTIBYiMBObuBj2n5cKWqNUuOz0MbhJmpw%2FIrVqo8tlRi3zwoGvh8BmbUybsitGh9fCcQynDQ4uC3%2B7n2j8bLGZlP0EGPVH9ddh7%2Bu%2BGUoyIJxAlZgpvuDsdFzyYwN8C8xsxk5yc2doBN27TWeephbnYHgqe%2BHSF%2BHzYXvef1uqLk9AtJTLTMdkqOG3avUZF1oSYVwP%2BGH9va1WTvaJLhyaj8e0fFwfjDFzEo9DiO%2BbUhyj9cvgwSHS%2BEsfXCHjELY%2FZGgZZlJvmERRYRBxFmssl1pNaswi%2FbsBu3fojLuqR64dT6vMJu8jr0GOqUB2Fb0XW4i3IYfuXiVmEBrQVpdBgvyCcud1L%2Fm5YdJTgaZkjtRYXgHVoY6Y1DdNPJIrT1bOWb3D5s3Xbau%2FxgCs0eLhLh45ggUH3W3IgsCi0RHwl7iU1%2F3NAKRbmCuJL3NKadIWbkEgA4G%2FacdFr4mIGPKfPQtt7ag8smxEALVEStfxtUoqXJmF4xAQg9JyY%2F%2BUXkq9Gt03mtiolH9kN72sf8W5SSK&X-Amz-Signature=10bd91bfda43679d2797960a97d62ca2d2e0f8a787fd15d708349072407af655&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDAXI46%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCWfgXgQD%2Fn9Y9H0fhuM549qz8HKKqCtHRG1F0yIzEdOwIgdsfk1xfBcYpJZ%2FKSA1j3g%2BXabfAvtLzbAUclujN3c60q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNmPPtiNdFwOWtg3VircA0Ohgh70KxL%2Baf5x%2Bs%2F9iIH%2FBQ3wJ20Y%2FPs3R37dGmNZuBmLB3VEiTvV%2FYX69KaHEImUbSng0cLj8XnJYluzhRFjiHP%2BIqLQgduYGOFBRLRBmiPFU0FD3Z9GKO%2BBU8GKDksQFZOkchU%2BUM17rQXr%2FBHMBvfwjup9pq6B4k4JNnXFu6cXNICzYZ0gaRq3fzeWuY5rW6q5Q8P3gUWPfoIBNhIkjHlqflaSAwAMamgU0BFR18Kpj8OOBME7CUkUxu3wbwtDKsNeVpx25QrS1HZtkUa%2F4440yMTKMgzA3e7FrI5nPrAyvGjm7TBjF3rmBS9gq5S2B0zwlQsk4jjmtUSL1%2Bly%2FvfCyheS7FoqguMGM10DrfJ8zJeD0eNTk01aIGgPASdYHMUk6YHrpxkLP%2B0Blw80KPgFbfVAkWk4aOBh8%2FiiEJHBamMoLUfUB2smSsPUvo70X61etpmXSerfvuiSEcqEKgwBpaEyFnGEbt3Fc0zNcAgXQHxAk9u9gFZlmilMzuIHBi6XuZsiNCc3ah9OH%2Bwr8Ewl7yIDAwF6yX4EvDjcPh6rFgh4zVZAdcdSJvrjjCnbDnPEcTBI1SkVU3XkjhIw2Uf7fHvlj3Ygx0VW2imzSThpd4rp2E0RzG%2FuMPy%2Fjr0GOqUBIaiyqHP0z%2BmBR6nm%2FPu5pm9vkB0kJ2YfTYPZ%2BGPa1iT6iUhfkujSV5a4qOq4q8kSGOucgu49JxYCfFqrZx0ibbdrSQ9z3RTAUDycbpVcwM1gHRwmcdXWN1P8YkaFfOJPCAZkkTI8KxIITQ%2B24PZYQhlH7O2Z2MCoJyijhfHdgzkrHRABlnZ9iMa3YxlWVyVcyin%2FBiopTTz7W0AEIuWM4CLCdPLc&X-Amz-Signature=b3352e9ef26496c7c0484add7e35bb6dc04bdd0da3fb7a6e1e139dfaa6b99be8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622F7UZ6T%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE%2B3CKGdT3YSO18qGodlXsdMBGDP927VH1NODrlkqp8vAiBEDtwPWlXOAZbgWUHZtZjAhySK2ZOlh%2FbxMISuTbFJmyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMtLMvyMWqi%2B%2Fiy4g9KtwDb4ADGijbQ4jvcoNW7X8ZvjJJ%2FinqMez0xp4HPuifB%2B08malFYFD8TusmZJslmse3dTAJc3LVg5OOmHMWVyQXTTWkP74y1GFehz%2FL%2FeGmUdyMdegqP6Cnlj8iNCBFbbjFlXXacc78EBgliZT6grONaSJ7kspNjIzA48owb%2BlSR9aNiWxxu9bD2lF3mntW8D7afQ3UCvdotOnSval5IbUDsxyDfA3iS43qPnu%2FTv1ouEgVh1%2F3ey18GpOR9tnfDx2CBcoqq5QjGm3X3gwEwjz6so%2BsJYZxR9h3%2B0vkGFQwou3ACu%2B%2Fwqu5BsWxHTHOTZte3VyNNbxtNsSeUBu%2BphunF0gzWcbtIGnbeNG%2FsAoB%2FwH4vyfc7FrWvvdqBfukka%2Fhxo5HL2X9i7cDDwsvsv1306bicx5%2FVppGNRj5cO%2B7vyiBztSMsvZFZx7QQyDp8FZcAR2D3dmlGVtFkpV4MKBHSunQxToAf4FeBlT%2BGZ%2Bq8o0UmMs9U%2FxBgTsLtBlpX91KDexOqAnhwgerZBG9jC3YTl46GSzhEsI5PsCxHvW4BxgwDYSPDuyzd%2F4ptmRhPRPwr14pGDIKI7RSSvt9fILnb5BT3Sl8N8kpBmURXdI%2FzY6U5yidEED5kB5kXkowmbyOvQY6pgGrH5ZuSbO4RdERTIbAtkfTQPYJAKXUVkUM3VdKDN4dZaQuxTl893RcQmbrOw6RIk9FRxC%2BAIm5wrh6HWaj0AYv9HvSOD0KOfq%2FJlp%2F5NHf9McHf8Vjm5BEkQSKyPnGNB9YNgT7xroLeL200l%2FMC741xMPXSb7AziXQo8UmX2R9EefMDllPoKVu8pBxU%2B4WI2%2FzHsMxidmXE9tZEAq9qVfBsk1LCrrm&X-Amz-Signature=e7f8e5c6be62df1fc898184861fc2adefd3d998d8df64b2b5eb6ab8220e5c0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
