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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSQ465Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDRjUHFxWQph7z2QAzheHp%2FKW5UUC6Aa8o%2BrMwOXw86xQIgJuPUfGfxZk%2Fb6ApuKlereY3tt%2FWM%2FZTlZVdxXgJQSNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIen3W0LMK9kwCPYxircA8iQDTx8YwkTBEz0V9RqZNUM55H%2BPZEoKnPjIE1XCfOYkw6NyrbJvmQAy7Qq6RsM7ZjudsuWjkx%2FiDz5o%2BDv4cgiEfSwmeXlkvCdFIjR2qqMLGp%2FZa20pw7%2BBaeK2btNOHINtRFY6py3AQqrufa2J2ghxyFnNbPaH2lrMsqOPbwjlxGSxmFZ8Ua2ADUr0fmKp7s3z197iXzEyr8SA4HrMfHzrAWUL6j3W5%2Bsu6nyVOG0SI7YJN2CDlRoXfdXxSgIZCtfNGho4SJX0xeQIfgXdO%2FYC7x4vJoAj5hlXbn%2B6%2BjC05%2BDZivD8pQCAZa5EkfIn4NSmnirH2EeXG8B%2FGrreqbvDb%2FJGT5oRTCxZTvCT9NkOP88qvdQuRx9P%2BYr7YccHE0wE2f1GkGWaSLVIC%2BlgZce%2BvFwzasUgqJVlcmCK%2BOaKxAmNYfuwjxI8ZFuefMEhz5lxG4L1usSRC%2BqJVffkhwKyGgjLo%2Fl6t5GcwiZjRuYLY62xCdFuTNgeCvGJ2fPEVDfkmaExxED79dZxB7nBZnJtAynkCuuBuK4AsS1DrZIGobcknV5Md15mWa4x8rfGjoaeoV2dHl629PN4JE%2BozwUPzhxk%2B9uJCzZxvouBV6gfwSAUU1b2wuSzTAGMOrE28QGOqUB6skw3LBzlYXrROR67GttBSt7HyuDRaUCw%2BGX09yqRSZMHGbsCM4rcvG%2Fr4t8oC%2FdF6j%2F0kv%2B%2BuwYyDXjGphkC71zFUfs%2Bk0d9ow%2FbTraZa%2FuPxW1JjEDRP72qjD8cmLdRzwl2PLWxBxoZJ0dtPSVeDkesq%2BlIuYASWWkvqKCzRT%2FfQVT9slFdHrD6CoOwmJl6%2FQ%2Fj1bqQxIvxoHz5rR%2BsxYe%2FLij&X-Amz-Signature=ff2ba9844da0b7194bd98d46ce0bef3cd65dc62d21a9791a896f1cb57917807a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSQ465Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDRjUHFxWQph7z2QAzheHp%2FKW5UUC6Aa8o%2BrMwOXw86xQIgJuPUfGfxZk%2Fb6ApuKlereY3tt%2FWM%2FZTlZVdxXgJQSNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIen3W0LMK9kwCPYxircA8iQDTx8YwkTBEz0V9RqZNUM55H%2BPZEoKnPjIE1XCfOYkw6NyrbJvmQAy7Qq6RsM7ZjudsuWjkx%2FiDz5o%2BDv4cgiEfSwmeXlkvCdFIjR2qqMLGp%2FZa20pw7%2BBaeK2btNOHINtRFY6py3AQqrufa2J2ghxyFnNbPaH2lrMsqOPbwjlxGSxmFZ8Ua2ADUr0fmKp7s3z197iXzEyr8SA4HrMfHzrAWUL6j3W5%2Bsu6nyVOG0SI7YJN2CDlRoXfdXxSgIZCtfNGho4SJX0xeQIfgXdO%2FYC7x4vJoAj5hlXbn%2B6%2BjC05%2BDZivD8pQCAZa5EkfIn4NSmnirH2EeXG8B%2FGrreqbvDb%2FJGT5oRTCxZTvCT9NkOP88qvdQuRx9P%2BYr7YccHE0wE2f1GkGWaSLVIC%2BlgZce%2BvFwzasUgqJVlcmCK%2BOaKxAmNYfuwjxI8ZFuefMEhz5lxG4L1usSRC%2BqJVffkhwKyGgjLo%2Fl6t5GcwiZjRuYLY62xCdFuTNgeCvGJ2fPEVDfkmaExxED79dZxB7nBZnJtAynkCuuBuK4AsS1DrZIGobcknV5Md15mWa4x8rfGjoaeoV2dHl629PN4JE%2BozwUPzhxk%2B9uJCzZxvouBV6gfwSAUU1b2wuSzTAGMOrE28QGOqUB6skw3LBzlYXrROR67GttBSt7HyuDRaUCw%2BGX09yqRSZMHGbsCM4rcvG%2Fr4t8oC%2FdF6j%2F0kv%2B%2BuwYyDXjGphkC71zFUfs%2Bk0d9ow%2FbTraZa%2FuPxW1JjEDRP72qjD8cmLdRzwl2PLWxBxoZJ0dtPSVeDkesq%2BlIuYASWWkvqKCzRT%2FfQVT9slFdHrD6CoOwmJl6%2FQ%2Fj1bqQxIvxoHz5rR%2BsxYe%2FLij&X-Amz-Signature=35d3931f293b0ae5c4d6819003d8a76d5ab2c395ad4d6e495117a5b3f28cce37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSQ465Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDRjUHFxWQph7z2QAzheHp%2FKW5UUC6Aa8o%2BrMwOXw86xQIgJuPUfGfxZk%2Fb6ApuKlereY3tt%2FWM%2FZTlZVdxXgJQSNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIen3W0LMK9kwCPYxircA8iQDTx8YwkTBEz0V9RqZNUM55H%2BPZEoKnPjIE1XCfOYkw6NyrbJvmQAy7Qq6RsM7ZjudsuWjkx%2FiDz5o%2BDv4cgiEfSwmeXlkvCdFIjR2qqMLGp%2FZa20pw7%2BBaeK2btNOHINtRFY6py3AQqrufa2J2ghxyFnNbPaH2lrMsqOPbwjlxGSxmFZ8Ua2ADUr0fmKp7s3z197iXzEyr8SA4HrMfHzrAWUL6j3W5%2Bsu6nyVOG0SI7YJN2CDlRoXfdXxSgIZCtfNGho4SJX0xeQIfgXdO%2FYC7x4vJoAj5hlXbn%2B6%2BjC05%2BDZivD8pQCAZa5EkfIn4NSmnirH2EeXG8B%2FGrreqbvDb%2FJGT5oRTCxZTvCT9NkOP88qvdQuRx9P%2BYr7YccHE0wE2f1GkGWaSLVIC%2BlgZce%2BvFwzasUgqJVlcmCK%2BOaKxAmNYfuwjxI8ZFuefMEhz5lxG4L1usSRC%2BqJVffkhwKyGgjLo%2Fl6t5GcwiZjRuYLY62xCdFuTNgeCvGJ2fPEVDfkmaExxED79dZxB7nBZnJtAynkCuuBuK4AsS1DrZIGobcknV5Md15mWa4x8rfGjoaeoV2dHl629PN4JE%2BozwUPzhxk%2B9uJCzZxvouBV6gfwSAUU1b2wuSzTAGMOrE28QGOqUB6skw3LBzlYXrROR67GttBSt7HyuDRaUCw%2BGX09yqRSZMHGbsCM4rcvG%2Fr4t8oC%2FdF6j%2F0kv%2B%2BuwYyDXjGphkC71zFUfs%2Bk0d9ow%2FbTraZa%2FuPxW1JjEDRP72qjD8cmLdRzwl2PLWxBxoZJ0dtPSVeDkesq%2BlIuYASWWkvqKCzRT%2FfQVT9slFdHrD6CoOwmJl6%2FQ%2Fj1bqQxIvxoHz5rR%2BsxYe%2FLij&X-Amz-Signature=a10d9cfc03fd3f6cc8a6dbbc2b74f743d4705213c3150f40410325f4300c1d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4T3JVF2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAqd96e%2FwQYMmJr0DsUliRDIFujWva9X7qwDBQFRJqllAiEAiArNw8%2BFXvo2ZWlkjl6iZSl202x5NfRJETYqOHnyuKwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLNf4G%2BWOfxkBq9sSrcA%2B9RC9FecqmPrBPC%2BPHMFiPkQllIm4wfJLtoIlq%2BfhmrscSuT06e3OfxC5a6mGwWyBF0BuInpuLVHSzPtydnc3tiKZgTMM23KFe5S9d9pLpEr4gvIblypdI3GFg665ticFZPtSdT51G3RHzWQCDmbXC16gl6Lz1E7PAxMDN3HeSh2sEbDH24pnUqL2hY0iL3MpYkZTiHkzIr7q6tiDFdQ9%2FkqCB9LdPLSnZPttsFFHwzWluG7nEtOiDXFjiXtsN3CiQkF04XDldNEpEgU10yVbA0M1WvtxbKKIZy2GbQKn0JqTuDOmVG2z4EhvXtIZ0KHNrLw24DaYWwD3EeeTVDM2C4pl25ZNgk402yRvBioP%2B7zM%2BDpAhMlTuekrf0tp5jJZ6BYcySPArDJzg5kvB%2FMpWwP1AyxYdr9esZ0FxwYgHcUje9mtvJgcsK0O1mVYaNVTDH9bszSoXjBGpzIl%2FU8b8AfPoYvhoajb7lp4ZV2VjpHai07%2B7%2F3w3VnY53GiKTEpuDqra9vlpobZIFd%2FEyItPMIzp2kgHHDmX%2F18APfjyd%2FXy7ZP5XHgxuGUxN6vDgqPYleM4Jyvl4BNjGC%2BcuNwRXFApRhKZc6i5ynEDAIQGpOG9rRVFavCw9KaghMMrE28QGOqUBCgMEaZz5f0cg%2FaQjuCEMlFkk%2FQOo0Nk%2F2%2Fd8LZGNzeTJK5e2NRg2XKdUfy9yc0MaCJ67klMWkVahHcwN6lwBwxJa%2Bn%2FBtYnsbalKzcbbuejiCDyBn%2BOLFK7bt%2FI4qY8Izy25dkuIustW2xPpL5hb%2FIk4XFiH4sogLLcuZnKlHnzjfyRvGfDRfT1LiT%2F%2BiSnsDAs%2BRTWS7RMwk3pN3c5%2Fhr4Rzw%2Bz&X-Amz-Signature=a6af5a040a58e86d02d3c96fc812e073adb281e0151079b99889356f4b3de701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNVJLGP4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCfb5wfFdExn2Sj3g5iNkvAfavCOkLri7EA1IRtdY%2BiwwIhAK3FuyEYGKtuFqnY%2B%2BBO0Zc932e8xXrMvhCXWYbzyOfwKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVNxjsn3jTL6Ylp54q3AOwsasGjqJt9fbd%2FcITNiPBbTSVWcLYlT3vOrugVY2uQZnRS8TcTuMPOMSHYTEv9sn98tglhHz0zMZYkd1j2zzHrFGa2dJmaRhFENEqa47JOMDEoI0L%2BCLvyD7xG8SbHEzJYYomRsTUBoGvhN1K11r4Lo557b6kBw7hZibiX77BCvC8qIYkS94XtbPVxnMw2PClsY%2FziYMYc9YIFMtp1LPOLuodRWk%2F9tGG4rKPzVjWcDONCPDbtnTjOr24X5KJ0USYkMIHN5l0Ls2uKaX3X%2BLhpjzDV5eJk3rajZkfYxJl4nKnUtKwvzeQDEqExCcMkPCr11BhReZgNKyo3%2FYQB6%2BOpUMz%2BIrFMpggDg6of0OMgZsQcfyczzMO446OQ3xZL%2FImkfTLE%2FcqUs68DoosnnHxqTyAOlOrx1ZM077rZdw8Jq9yxpLSrfll2ihAOrmAs1UWMO0IpOfRc0SWI1ceOC0QJeh1OkZ2acuxWy8%2Bf%2FvbfGybVByrNym1aGC%2F5C5hS5W%2F26NaR82Bz%2FFyrL6lH435782ne95ai6DdDNPxPPiUF8nveWUDV9EoVT5Fm7J9D5%2Bie07yNcbCQohYsuRlHIQZeBdIXJHTjV%2BbhEk7NlzDm9fNls%2FV6hp026%2FfXTDPxNvEBjqkAd%2FrFmkQpaTGuWnq4MABdtaju0U9o5x3AVv4d4xUctGspoYHsj9JRNls2VkCJdGLc7nFfiXcNd6N%2BxYovCGapSHMZM2Wds0Hs3q0ovJnD5y%2FKgYFgJd7A9ZM2zWXrEPJfoR4ZgH4fzS9sM%2FJA%2FGtXIPgR1HShc5C%2FNqJ5XHavoC%2B1Y8XRgHmCMLSMnUqFNboQe%2BW2jDmEtnmbSmAsAct2m6j2%2F1K&X-Amz-Signature=623acd99308fe850fdbc331c9c374f933e6a484bad6f0aab561d9c272641dd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSQ465Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDRjUHFxWQph7z2QAzheHp%2FKW5UUC6Aa8o%2BrMwOXw86xQIgJuPUfGfxZk%2Fb6ApuKlereY3tt%2FWM%2FZTlZVdxXgJQSNcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIen3W0LMK9kwCPYxircA8iQDTx8YwkTBEz0V9RqZNUM55H%2BPZEoKnPjIE1XCfOYkw6NyrbJvmQAy7Qq6RsM7ZjudsuWjkx%2FiDz5o%2BDv4cgiEfSwmeXlkvCdFIjR2qqMLGp%2FZa20pw7%2BBaeK2btNOHINtRFY6py3AQqrufa2J2ghxyFnNbPaH2lrMsqOPbwjlxGSxmFZ8Ua2ADUr0fmKp7s3z197iXzEyr8SA4HrMfHzrAWUL6j3W5%2Bsu6nyVOG0SI7YJN2CDlRoXfdXxSgIZCtfNGho4SJX0xeQIfgXdO%2FYC7x4vJoAj5hlXbn%2B6%2BjC05%2BDZivD8pQCAZa5EkfIn4NSmnirH2EeXG8B%2FGrreqbvDb%2FJGT5oRTCxZTvCT9NkOP88qvdQuRx9P%2BYr7YccHE0wE2f1GkGWaSLVIC%2BlgZce%2BvFwzasUgqJVlcmCK%2BOaKxAmNYfuwjxI8ZFuefMEhz5lxG4L1usSRC%2BqJVffkhwKyGgjLo%2Fl6t5GcwiZjRuYLY62xCdFuTNgeCvGJ2fPEVDfkmaExxED79dZxB7nBZnJtAynkCuuBuK4AsS1DrZIGobcknV5Md15mWa4x8rfGjoaeoV2dHl629PN4JE%2BozwUPzhxk%2B9uJCzZxvouBV6gfwSAUU1b2wuSzTAGMOrE28QGOqUB6skw3LBzlYXrROR67GttBSt7HyuDRaUCw%2BGX09yqRSZMHGbsCM4rcvG%2Fr4t8oC%2FdF6j%2F0kv%2B%2BuwYyDXjGphkC71zFUfs%2Bk0d9ow%2FbTraZa%2FuPxW1JjEDRP72qjD8cmLdRzwl2PLWxBxoZJ0dtPSVeDkesq%2BlIuYASWWkvqKCzRT%2FfQVT9slFdHrD6CoOwmJl6%2FQ%2Fj1bqQxIvxoHz5rR%2BsxYe%2FLij&X-Amz-Signature=92dd55ba96b504d6a63f62c1564e798ef3382ac1dd267b9159e78b573c816b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
