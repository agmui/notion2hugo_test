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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIAD6JX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL%2B28yTTCNy3RsOXHpd8CPOQDpLoG8ec5HvwcgAhbJ%2FAiEA8BCqmcxSg2%2BpUDN2znmFVIO7RA3Bi9zjebuOYHqk3Esq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNOFMmiVcZxxlNN1yircA%2BjH0oSAgczQgVsHPSNHrTlm9yaF7MkDA0UTZsgdRxpCfoRR3vta7wmHkdajCjQSuuYPT8kXdvc6lqJmdDLxCe9PTAhrFXTQWiiFLQnAEGsGXnGSxXVc2pWaMk9KinstzGj%2FmTTwhMf7awiSg%2FRW3%2B%2FnryDnJ8S6lZBpi1C1ra0bNpotspvNRglUVR6WH0ydOIUjyFwHv%2BJy%2FMoK1SJnXKuelgNpWf7zX32GzL8i%2BupIHFNLlsiuIrTuqCCQTlg55aKHEjmLnLwK49qIj2zq4gdtRfKxeEQMKIIVSTnJKsGp6%2BdzxxL%2F6SLmW4lxqbRw%2BoInAReenimhX%2BiO3VlkSvc6lL8sHeuh%2FT1uJ6HNK8cavAJhJ1rW7uIB3%2Bb7i5oERW1jQhpwqoQc5T%2FGYzZ1uyAPl61cwKanIpG0mTAWu%2BgQ15ahDr706mtAj0v2I4PqrvWMp9UwZqrc3uU5g1sS4ElJI%2FHG72j3M%2BfywOgMzCZs0Gt3bqIPitIuUxSupkBFuKoH%2FfiWgSCErQGsAd82xDOhbQ7QvWUytkq2uzlMW%2BKf%2B%2B2lNZDzxLDagukYGy%2FQjVyVmAx4VWckwkJbmWV14kriapiEamiCshr8WEBAWUZ3JbBs5x6RHAAZ7uslMKeT8L0GOqUBC7rMtRDjexrLYSaPzKqpwqHg0KnjH4LIxQUJfEgrarEkIQrDZu1fcOWfRVHVqi4%2FQShzFXYhD%2F6%2FRaTXXKYHMzSYmKKeqrgNMVGF%2Fs%2FbQlGDqBpFNZiqk3XdoX2xWoaYXbzatFCetllZ9BbPMFQNCnx6KUbSVp1ptyNzT%2F%2F9Q%2BFNQNPvvZdE8JOtMFO47HE4R0ldhV9k0JFz2vLPKBXxhskEbcXn&X-Amz-Signature=eb2f750939e0dbfb902db38f5e3b661bb8cc83f4a50dba7fecf554728e8f294d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIAD6JX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL%2B28yTTCNy3RsOXHpd8CPOQDpLoG8ec5HvwcgAhbJ%2FAiEA8BCqmcxSg2%2BpUDN2znmFVIO7RA3Bi9zjebuOYHqk3Esq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNOFMmiVcZxxlNN1yircA%2BjH0oSAgczQgVsHPSNHrTlm9yaF7MkDA0UTZsgdRxpCfoRR3vta7wmHkdajCjQSuuYPT8kXdvc6lqJmdDLxCe9PTAhrFXTQWiiFLQnAEGsGXnGSxXVc2pWaMk9KinstzGj%2FmTTwhMf7awiSg%2FRW3%2B%2FnryDnJ8S6lZBpi1C1ra0bNpotspvNRglUVR6WH0ydOIUjyFwHv%2BJy%2FMoK1SJnXKuelgNpWf7zX32GzL8i%2BupIHFNLlsiuIrTuqCCQTlg55aKHEjmLnLwK49qIj2zq4gdtRfKxeEQMKIIVSTnJKsGp6%2BdzxxL%2F6SLmW4lxqbRw%2BoInAReenimhX%2BiO3VlkSvc6lL8sHeuh%2FT1uJ6HNK8cavAJhJ1rW7uIB3%2Bb7i5oERW1jQhpwqoQc5T%2FGYzZ1uyAPl61cwKanIpG0mTAWu%2BgQ15ahDr706mtAj0v2I4PqrvWMp9UwZqrc3uU5g1sS4ElJI%2FHG72j3M%2BfywOgMzCZs0Gt3bqIPitIuUxSupkBFuKoH%2FfiWgSCErQGsAd82xDOhbQ7QvWUytkq2uzlMW%2BKf%2B%2B2lNZDzxLDagukYGy%2FQjVyVmAx4VWckwkJbmWV14kriapiEamiCshr8WEBAWUZ3JbBs5x6RHAAZ7uslMKeT8L0GOqUBC7rMtRDjexrLYSaPzKqpwqHg0KnjH4LIxQUJfEgrarEkIQrDZu1fcOWfRVHVqi4%2FQShzFXYhD%2F6%2FRaTXXKYHMzSYmKKeqrgNMVGF%2Fs%2FbQlGDqBpFNZiqk3XdoX2xWoaYXbzatFCetllZ9BbPMFQNCnx6KUbSVp1ptyNzT%2F%2F9Q%2BFNQNPvvZdE8JOtMFO47HE4R0ldhV9k0JFz2vLPKBXxhskEbcXn&X-Amz-Signature=a49fe28c384c060defe2250ece7e5c32b6fccbe0d33dc12d123c2f9658b151d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZSZBLY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKJyPRw%2FHk1F85vZnaXDCkC8BiqHvAva03WSDIG5denAiEAnlqNwmMk%2BGHLof9iGDWDA%2FbJK%2Bqhfsvpvvm4b2UKkXUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPQ3Z2KL3L6Mw8GQdyrcA2Opz4w0ZO8SxSaSV7xhhbam1nAZg4R7DqTTieU7uLTIBYvXJcSkCLfJlImqACJLWJlLFncBRo%2ByZ09bk9uOWcq5HQbg2u6qy6C4Vqf7Fv38p1wiXiXpJnHu%2FMkFG1aiOUP8TU5%2F9M%2BBqdgJg35Kt9pb1ibpKz%2BCRnaGnYvaX1kvuV3oE6dJFuPiIRp7G9vNBeY9K5jQiSjWqOYLTlhdx6kc8kAvuYqR9kAjRLM5BRQrXt0BkuoIFq5OcXBaN%2B7Ld50EvNQb8DXrggrJP6sEq9nOXJSXT2r%2BJoy5oJJD4y7hfTicYhDoESO6MQ%2FQxzQ6KmvEC%2FJ%2BRgPgEE5UtZdOH1j5nrIc4c3123TE0UPH0%2BGbARN5SCvouDXpsVzSXJ1cDfS%2FwRbz5uQ8cuypJFjaTnLR%2Bp9BDc76bqqH%2F09wCXztFUpZ4UmPOJD7UT9IOLgrFB6c2OfWi2WX0Lb1kWYcvc5PaNZWtCHnSdYRsrcAOjorSF1Lwlg6Ek2WEUeafFAa%2FjxC1J1N8RZ52yZiFmI49lC4UyHCSEM9kXgKHRm6nEbq5h5%2BXG%2Fgs7QN52qSnnGh1Y9AQurAmDJfKTKkWktQ6lDGod6Nu6tKgdGAmdqujg3RADYCcX08oiEFhurWMKWU8L0GOqUBtIMb9HisIysJch1MexS%2B0Vm%2BhRYd0Wrl7u3sx1lLTZJNTxfVS0UpgQI4ZTzQpI0IA3YOYO4eWwgiNefJwh8iBA6h7IIQfG7SyxkjWl9naol23Ej1TI2r9QlTE9TKv%2Bq7V3pjmsJJ7nVLhUnv%2FiTTNpiFKR7zteZyMSqCgeY5eZDmCsREpQ5oMPA%2BLFak4DHExf3xg6G%2FkM%2BQImj0X9psBXq6s45G&X-Amz-Signature=0a72aa51473d2261fa424c2c2b61c6ef885de2cd5d0ad5dee0e010d73b16be0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EANJWOB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxI39H57ydi2c%2BsHocHI3CEsgsbhVZFm3iNhecmLMtEAiBYOb%2FJJl3rKZ47MPbKih9R%2FeCh1pV5zC%2FoE7waBeXR4Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQqNtOMgxC7f9IE9LKtwDAQbVS65UjrHXOqZ2bvp%2BiW52JI3Jx9sHyrLpOxT1SmYA%2FphnHoLB8hvWyCkrMYMAt0MSCJOHS8SeBCiyiwv9LokdIRbAb%2F5pMSHvqOzZ89I6MPOPa5GZcHUMTBdeqHNLTYbRDj7A%2BXY%2FCGE%2Bte5iKGlNPUnqZpmJQPA5eDtwxa8qiiU1cmmZUauVKDsBvKFIEDWelNF%2FlcPnUlbIRrL3%2BSXg9NlhONtFaYbS2FQkFLVY%2FiAON57LWO1tf%2FE0WP0jnZjpf28Fgirp8tC%2Bu3BJY%2BTfZ6dnnCTLF%2F9k%2FfoufLm6WYcPWFzC2dvR%2BuglJfVojhoEfyljWoLLpJXys2lUhoBrBTnGmxw5df5hdHYZSlDTT6lji4M%2FgzxVxSItAEOUfTc1XNjbqjV8T6adTjHClnoanFuI%2BTavjF2zte2e3AobO3%2B6K%2FILsf4qCXXW71yAkRniK%2FhucZD6tlAGW9RBy5sy3hWsQSx1Ti8acP%2BoJaRCW5dbbDYZ4oBdEmc%2BBSCqYM8YTYnANbaphrI3R3tW3vtDAhKkrocGfMQMSfRdz9Ir5Ik74iyz8Rtc5s8rcOUTetZJKaOFSXYKx4e6CuUmVRom8BdLcjJbU0X7renGB4LxjbujqmIc6ByS5A8wtZTwvQY6pgErXxZoHaPgJaPNkb4Y%2Bx%2BDLH1xfaGKRIqbh3WoykZwoDxiDXkgtrfwaXzavhAKFRoDY4MuSP4j31DnxtRIKRoHA6VQhLxa2ekOVzb1Jh%2BFcwIxsjj9gO6uK0Fk%2FyBD2%2Fg8kphqY5%2FsgxWYZlx1Dw95vg3KRvXOI3yv8UUHqtZNi0noVOOl%2F%2FY6tbREIYW0o1DviqcHyZ1T2BVy3Y%2BNnJ0Wzx5x8GJE&X-Amz-Signature=8522c4e39a74ba33dcaf4317d46a17500c376b4d9df1c5953a6951027df82d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIAD6JX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL%2B28yTTCNy3RsOXHpd8CPOQDpLoG8ec5HvwcgAhbJ%2FAiEA8BCqmcxSg2%2BpUDN2znmFVIO7RA3Bi9zjebuOYHqk3Esq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNOFMmiVcZxxlNN1yircA%2BjH0oSAgczQgVsHPSNHrTlm9yaF7MkDA0UTZsgdRxpCfoRR3vta7wmHkdajCjQSuuYPT8kXdvc6lqJmdDLxCe9PTAhrFXTQWiiFLQnAEGsGXnGSxXVc2pWaMk9KinstzGj%2FmTTwhMf7awiSg%2FRW3%2B%2FnryDnJ8S6lZBpi1C1ra0bNpotspvNRglUVR6WH0ydOIUjyFwHv%2BJy%2FMoK1SJnXKuelgNpWf7zX32GzL8i%2BupIHFNLlsiuIrTuqCCQTlg55aKHEjmLnLwK49qIj2zq4gdtRfKxeEQMKIIVSTnJKsGp6%2BdzxxL%2F6SLmW4lxqbRw%2BoInAReenimhX%2BiO3VlkSvc6lL8sHeuh%2FT1uJ6HNK8cavAJhJ1rW7uIB3%2Bb7i5oERW1jQhpwqoQc5T%2FGYzZ1uyAPl61cwKanIpG0mTAWu%2BgQ15ahDr706mtAj0v2I4PqrvWMp9UwZqrc3uU5g1sS4ElJI%2FHG72j3M%2BfywOgMzCZs0Gt3bqIPitIuUxSupkBFuKoH%2FfiWgSCErQGsAd82xDOhbQ7QvWUytkq2uzlMW%2BKf%2B%2B2lNZDzxLDagukYGy%2FQjVyVmAx4VWckwkJbmWV14kriapiEamiCshr8WEBAWUZ3JbBs5x6RHAAZ7uslMKeT8L0GOqUBC7rMtRDjexrLYSaPzKqpwqHg0KnjH4LIxQUJfEgrarEkIQrDZu1fcOWfRVHVqi4%2FQShzFXYhD%2F6%2FRaTXXKYHMzSYmKKeqrgNMVGF%2Fs%2FbQlGDqBpFNZiqk3XdoX2xWoaYXbzatFCetllZ9BbPMFQNCnx6KUbSVp1ptyNzT%2F%2F9Q%2BFNQNPvvZdE8JOtMFO47HE4R0ldhV9k0JFz2vLPKBXxhskEbcXn&X-Amz-Signature=874ee2c2c3bd7f722ca570e0a9e521d7384340e1493e84d6796808af644a8407&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
