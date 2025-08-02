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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NUY356%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvGn70jiddevEV9r%2FjhBoHa4Fu8Btw0dklKPQuMml5AiA5X90c4%2FXsqNJSZz8Ah4gKn1%2BU%2B9Wu6N9VrS%2BBQ9manyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxihRupY%2FTety%2BeGFKtwDCe%2FEpyk6NUC%2FNByAkiZ7vwqm3B2uxd1x2KpUIlnwLXyQXdE3EUx683XcPG8NBIkG8ulzd1urDz3UmXgPqs21I%2BEByQUsG94dOctqx9B8v0xjDGqD5%2B70BVVFfXS0CjTA1ni8Mr7OpuNs5lzDVunRJEq76U8v4yuVfEYVrnH048Th4B21B0qfY7zgM%2BE2mv5xEXFalAz45JIFTwqapWhqEOrTWs5334ggeaGk0AM3%2FrAsBYFjzBe7BrlypJ%2FcW6q89yqHDohWIMKSd3xupv7EvycR1eoNOyNiGBOe83y0Rb3ih2T0CoDhzFxkVoQDhkNlDsSE4Xv5iE%2B%2BbWvKl57pFKRgVLhLMsr%2Fe3fZQJNyABEAsoq0ZSnwEAV5tUO1JAPZndTcLSCA%2ByS%2B5tn%2Bz9Bphamuno4XROu1ZTcnZUFNm8kmTwl3O9zg%2BIPvHHB14BlVUHn7XxKmaldyvEaB7MYGsRN5%2F3zjVbwmglvL1N30JzEU1Bm0Xa7W1vyWW1pv7oZdfjETfkccIp6x69x6gkXRWwSElVDj%2F9IGegjG%2BBJXG%2BSYshIp9oK22VJLEzNDny8otLIRvevPFBmMpRNG484zsyPIOR5J2eW0%2B7KgMshS9qO77avgDK%2Fp%2BoIcFngw1sq2xAY6pgFum%2BrjbX92YEso7fm3WU%2FJb5%2Boljcw2uIUz9CTs5jhZmeI6hnP63MbSlSasVCh%2Bee1cHb0QarHne1Zzkr8JLlypdCh%2F4nP45foYTEWF2O0tOF0U%2FaGNZ6AMXan%2BEh438%2BCZT2nY5aNAtD7y8ujFzM2FWu67QzxEBhUe6dsXsCrp5Jjg7%2FtRxZia9n9JnM8ytsDRWKeM3MjLe3j9uYuQAG5oSC0K2nM&X-Amz-Signature=9346d7d849a09a0ac03c2adb3e934910f75e9c39f9562ad5a5faf13d060bf2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NUY356%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvGn70jiddevEV9r%2FjhBoHa4Fu8Btw0dklKPQuMml5AiA5X90c4%2FXsqNJSZz8Ah4gKn1%2BU%2B9Wu6N9VrS%2BBQ9manyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxihRupY%2FTety%2BeGFKtwDCe%2FEpyk6NUC%2FNByAkiZ7vwqm3B2uxd1x2KpUIlnwLXyQXdE3EUx683XcPG8NBIkG8ulzd1urDz3UmXgPqs21I%2BEByQUsG94dOctqx9B8v0xjDGqD5%2B70BVVFfXS0CjTA1ni8Mr7OpuNs5lzDVunRJEq76U8v4yuVfEYVrnH048Th4B21B0qfY7zgM%2BE2mv5xEXFalAz45JIFTwqapWhqEOrTWs5334ggeaGk0AM3%2FrAsBYFjzBe7BrlypJ%2FcW6q89yqHDohWIMKSd3xupv7EvycR1eoNOyNiGBOe83y0Rb3ih2T0CoDhzFxkVoQDhkNlDsSE4Xv5iE%2B%2BbWvKl57pFKRgVLhLMsr%2Fe3fZQJNyABEAsoq0ZSnwEAV5tUO1JAPZndTcLSCA%2ByS%2B5tn%2Bz9Bphamuno4XROu1ZTcnZUFNm8kmTwl3O9zg%2BIPvHHB14BlVUHn7XxKmaldyvEaB7MYGsRN5%2F3zjVbwmglvL1N30JzEU1Bm0Xa7W1vyWW1pv7oZdfjETfkccIp6x69x6gkXRWwSElVDj%2F9IGegjG%2BBJXG%2BSYshIp9oK22VJLEzNDny8otLIRvevPFBmMpRNG484zsyPIOR5J2eW0%2B7KgMshS9qO77avgDK%2Fp%2BoIcFngw1sq2xAY6pgFum%2BrjbX92YEso7fm3WU%2FJb5%2Boljcw2uIUz9CTs5jhZmeI6hnP63MbSlSasVCh%2Bee1cHb0QarHne1Zzkr8JLlypdCh%2F4nP45foYTEWF2O0tOF0U%2FaGNZ6AMXan%2BEh438%2BCZT2nY5aNAtD7y8ujFzM2FWu67QzxEBhUe6dsXsCrp5Jjg7%2FtRxZia9n9JnM8ytsDRWKeM3MjLe3j9uYuQAG5oSC0K2nM&X-Amz-Signature=658d5c946239cf135f4e7a804dc8f82b178fc8b39125abe31003cc0b3139bb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NUY356%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvGn70jiddevEV9r%2FjhBoHa4Fu8Btw0dklKPQuMml5AiA5X90c4%2FXsqNJSZz8Ah4gKn1%2BU%2B9Wu6N9VrS%2BBQ9manyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxihRupY%2FTety%2BeGFKtwDCe%2FEpyk6NUC%2FNByAkiZ7vwqm3B2uxd1x2KpUIlnwLXyQXdE3EUx683XcPG8NBIkG8ulzd1urDz3UmXgPqs21I%2BEByQUsG94dOctqx9B8v0xjDGqD5%2B70BVVFfXS0CjTA1ni8Mr7OpuNs5lzDVunRJEq76U8v4yuVfEYVrnH048Th4B21B0qfY7zgM%2BE2mv5xEXFalAz45JIFTwqapWhqEOrTWs5334ggeaGk0AM3%2FrAsBYFjzBe7BrlypJ%2FcW6q89yqHDohWIMKSd3xupv7EvycR1eoNOyNiGBOe83y0Rb3ih2T0CoDhzFxkVoQDhkNlDsSE4Xv5iE%2B%2BbWvKl57pFKRgVLhLMsr%2Fe3fZQJNyABEAsoq0ZSnwEAV5tUO1JAPZndTcLSCA%2ByS%2B5tn%2Bz9Bphamuno4XROu1ZTcnZUFNm8kmTwl3O9zg%2BIPvHHB14BlVUHn7XxKmaldyvEaB7MYGsRN5%2F3zjVbwmglvL1N30JzEU1Bm0Xa7W1vyWW1pv7oZdfjETfkccIp6x69x6gkXRWwSElVDj%2F9IGegjG%2BBJXG%2BSYshIp9oK22VJLEzNDny8otLIRvevPFBmMpRNG484zsyPIOR5J2eW0%2B7KgMshS9qO77avgDK%2Fp%2BoIcFngw1sq2xAY6pgFum%2BrjbX92YEso7fm3WU%2FJb5%2Boljcw2uIUz9CTs5jhZmeI6hnP63MbSlSasVCh%2Bee1cHb0QarHne1Zzkr8JLlypdCh%2F4nP45foYTEWF2O0tOF0U%2FaGNZ6AMXan%2BEh438%2BCZT2nY5aNAtD7y8ujFzM2FWu67QzxEBhUe6dsXsCrp5Jjg7%2FtRxZia9n9JnM8ytsDRWKeM3MjLe3j9uYuQAG5oSC0K2nM&X-Amz-Signature=e546cf7de5259848862402858d0b7dd616596e34f4c8bc207df5d72d8493444d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TES5RHU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3hTetAnQC7z%2B91P6Rr1xtx%2BJ2r4w3k64IZOzhyxfmCAiA4qWMjc7z5lOGYlm3Nd3vKSWgLLWILDy4rqVyIFJLGnCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOr4vhv2mtRmZUXWDKtwDQjm%2FUroUgEU%2Bg%2BkMT%2Fe1KiTainS%2Brl5knbWqrFX9u%2B3Zq%2FPGtepuuYFlT04py6%2BHifxgOyZIldjk%2FWM9%2FhqjEt6%2Bp%2FW%2B%2FlGRjUq9OxoKyugYXzP2MyZszDkg4sQZuGJ5kQ25kxr8UGYofxB4TnHd%2B5VuAUWCWoWUUMXxRN8f8Z6cduPQm9M%2F%2BHMBKbuwcm7QAsPNK4eGB1%2BpA9bjzdkxdLNpg%2FcZpd7IthemVLfGPhZaFn%2BKZgGhvGVctKUO%2FQNFpcjSvxsyfUI4ug6q9PmFexTOxgis%2Fj6yHe1Uua8dWx%2FsanD7vydF3f2qauAkPC1fFGxKW5ByDrNje3yJXyghLQAnqUjbLo1u%2FcxeZIaXChj7VO1mkVdpjkaF2ZBTAvmavpzIxD8fFQWBaR%2FZA4d0LDTvAt9s07A9TUg%2FMRbEjvuw5MPIXIFdIkEmS0ASf7ZMK8vqoVLCuQAqftQpAcepcQiYryIvDCmkrqiq3asj%2FWaPSeRUv3GM4V6gm9oVyhrLh%2F4Pgb9VQ2t7k%2FnQh%2FKBc7brPQB5Jr3IAlIj6bW4ZFc9Vprzuu5MdLnmjExFmISbcgKupBXdLcIUMEnHs0w9wgmmCuuD0Iq4agJ%2BTYjBJY2gqzfouq7UTMpqngsw9cq2xAY6pgGV439RD2YHIjQMj9lkcP%2BcbY%2Fwv58euhx8b1%2Ftc8YH%2F6b3pz5pjLXPtaKA9LRvI77xkpQgHuUQ%2B%2BuFYrHq7NH3Wj%2B3vH3%2F5XrVIhzNvDi5ogOMRsBgmj8JKdRnlhL8ciEP876Lf8%2FqXcv%2FHyouez7QDf%2Buz0PjsvDp%2FTZyusv3nyMIf4tVaaC4cl667hdwMe1%2FtTstqC6GMOLeC7X02SHgNkQo4%2FkM&X-Amz-Signature=932cd5238c915873250d824cd012b516e62d26ffd486b3b62db08a114f2b3a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGIO3TY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjHaRCDJNqQcXzgXcWabQuAs0B2ob9kxmnyV4hcujqIAiBiUo5ZfAnUWmyo2RszOzKfXjAxbm0E4cWtxCpfxLWlZyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSazshXCWr8OW5wV4KtwDq8ghJkM3E97qLVfxo%2F%2FzmgZysbgWfTJhVWrvepSUed%2BsBWigcy%2BIGk%2FoEQLtjnc0uNIF2X7yxr1QzU2%2BwAUOcecgSzxwq%2Fn13pUTsUTcmbw4jvr%2BJtG88QaCsVhpZWO8Eo%2BrZKJ32%2BdRKdDmLhJhBDKsC60ZjLRcf%2BzMbFTXF2BW4MeJEfgi%2F1brTyE6lpCkubky9Hk50WdZ0LHaID9CsuAc1zzlRfrUkvJeYdg1bJL7xnZNGaUOARjamTS%2BK%2BDeAwYPfhll0Cjp7hPkWsUiAYfLwXWnQcP7MNJN%2F4%2FXUkZVzavII7bYDXGL5LOHUxH3%2FiehwW%2Fme6J7Yu9TUYDLWi7mq2boZp0FGSVrw3hP4lU2N%2Bnjz2UBmnUKRhdOyaWQocsBfgPvvqqJ2Lr9P0CjW1xSr2jy9slptlf59IoOShqy1UBW0KIZNp1o%2B1NeI7XwWij9eo6wfqw8vFo7jS9wONCo7dKSI%2Fajy6TwUBsjRsJrceFzAjmk%2FXAtz4ggQ1DUHsnELD4NbiyB0R30eTogv%2BRPvwYKNyk%2BAl%2B7ZixIfjak3VavQdTFDMbWQaETGnNHxRwxKEAuwNM%2Bm28%2FBKgKikJ0Grrw7L%2FxLygQrQqSIPebIYfmH4LeCi3BW3Uwg8u2xAY6pgHvFCnUxFUUCS3cMiRG0hjrhnJadA6spXffDfc9azPmXrN7KyAneOwymHtz9oLnhIah0VNTyoEGmSqJA3nNSLmpM77JJFL44jBlUI2rSZsoCV7k7Mc%2Fn6AJkPRxeizhEw%2FIWDKiZnv9DTLpIL1lhcRmBszSvB%2Fh42Ix0AY8PnpoT1F1oaziMfNH%2F40EgaKoHEE3lQxQLS7sSlCsBzRphG58mcE2tVx7&X-Amz-Signature=aa218d3ac55ad18bf9f0ed94ac8908d7a91d7fa615ac7cb29b068b6ca837dd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NUY356%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvGn70jiddevEV9r%2FjhBoHa4Fu8Btw0dklKPQuMml5AiA5X90c4%2FXsqNJSZz8Ah4gKn1%2BU%2B9Wu6N9VrS%2BBQ9manyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxihRupY%2FTety%2BeGFKtwDCe%2FEpyk6NUC%2FNByAkiZ7vwqm3B2uxd1x2KpUIlnwLXyQXdE3EUx683XcPG8NBIkG8ulzd1urDz3UmXgPqs21I%2BEByQUsG94dOctqx9B8v0xjDGqD5%2B70BVVFfXS0CjTA1ni8Mr7OpuNs5lzDVunRJEq76U8v4yuVfEYVrnH048Th4B21B0qfY7zgM%2BE2mv5xEXFalAz45JIFTwqapWhqEOrTWs5334ggeaGk0AM3%2FrAsBYFjzBe7BrlypJ%2FcW6q89yqHDohWIMKSd3xupv7EvycR1eoNOyNiGBOe83y0Rb3ih2T0CoDhzFxkVoQDhkNlDsSE4Xv5iE%2B%2BbWvKl57pFKRgVLhLMsr%2Fe3fZQJNyABEAsoq0ZSnwEAV5tUO1JAPZndTcLSCA%2ByS%2B5tn%2Bz9Bphamuno4XROu1ZTcnZUFNm8kmTwl3O9zg%2BIPvHHB14BlVUHn7XxKmaldyvEaB7MYGsRN5%2F3zjVbwmglvL1N30JzEU1Bm0Xa7W1vyWW1pv7oZdfjETfkccIp6x69x6gkXRWwSElVDj%2F9IGegjG%2BBJXG%2BSYshIp9oK22VJLEzNDny8otLIRvevPFBmMpRNG484zsyPIOR5J2eW0%2B7KgMshS9qO77avgDK%2Fp%2BoIcFngw1sq2xAY6pgFum%2BrjbX92YEso7fm3WU%2FJb5%2Boljcw2uIUz9CTs5jhZmeI6hnP63MbSlSasVCh%2Bee1cHb0QarHne1Zzkr8JLlypdCh%2F4nP45foYTEWF2O0tOF0U%2FaGNZ6AMXan%2BEh438%2BCZT2nY5aNAtD7y8ujFzM2FWu67QzxEBhUe6dsXsCrp5Jjg7%2FtRxZia9n9JnM8ytsDRWKeM3MjLe3j9uYuQAG5oSC0K2nM&X-Amz-Signature=f4a03ddc81e79f7ec9d7550617eaa4b9c55e36d8145702cb9f7ce8ad26f45f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
