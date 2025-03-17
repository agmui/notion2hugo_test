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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5JNCPW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCNI%2Fmv0z2jf2jyJ5mwmWS4dJvV4V5Hq5kAKh2O3SvdAiEA8WBBuB%2Fe9mmJM8op%2FFoPqigwmLC4B1Ei7f9qF3j%2FTr4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAczHrBFXa%2FMsNJGpircA4J6jLkdEPi08Uu7mHM%2FtH7S2aEdHERq2ZJjEPdV%2FxhKw8LBj36YMI2lm0Cy5ic%2FrxVhLgwIpd06i%2BwLt%2B5dUZnX8dNu8T0HdEDdYOk%2B9UFJrmcBMhqxPi%2FUp%2BKKSTkzKdD7ADwP4b4A6S%2FHJe%2BwAJS0%2FBA4Z1HogJr6pyPKQfEyqvoRx9VwcktSOSxPTSigFR9ohJyyfQDg%2Bn5f8%2BthQRYzIXHft5LCw6OBAvEmpl89MW0GuPXk3ZfZLMsl3xnhFl98QrqbTBWBF7jD%2FYm4afAArYY%2FZeA8sU4ztZCQM07xES8id0i6Lxh%2B5tlLcwkolH6kfsizuomt1wu9u3kIlNMCaEe1ZxbcQ88QdfoycnbXQ03Qb82jSLDRBitu6cgIeMpq5FTZ%2BQhrauuaF9b7YXVNEPv1AjRz0Wb7TbHPvqXLMmml7gTj09Q%2BEN9qD7aT26DyQ53rycqbmT4%2BcTW0DjA3KkQER3vpF%2BOVCwGU4bPcS1PdUuZk4Z2BBg2RrdtYAoDsojC2faG4Ai%2By0g8nknnkCa4PLAsk4KSdWvDv5BXz9PDNFzAxKjPE0LJzJPg6Cy87yNo8bhkSafBRs4chXv%2BPil02HB3URM6COQFm3iES3O1d2te%2FRy6Qu3AtMI7t374GOqUBq38FuNb3q0It8asTaUZQW4dNCDPzgVdzoFeAfuJ3lBMqx6u3Q10D9tNfU8R08%2FNfamRtOyy%2Fa%2FXjQ0ZEtdisTQuOAwrgulFx46wFgahcirGD6rfzJthpXssSviOgStOUXRpr%2FC5XhzG0RMwjITxeswbZzzVrhv363I6RUjECZkOyNpYW2J9DtCQSmGGSm5Wn%2BrcffZZPceenNrsTQNOXm68KoxQE&X-Amz-Signature=8f5ef5c54c9a3603d081c0a84d46d90f4b053cfc1ad8f6ae838472152fa54917&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5JNCPW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCNI%2Fmv0z2jf2jyJ5mwmWS4dJvV4V5Hq5kAKh2O3SvdAiEA8WBBuB%2Fe9mmJM8op%2FFoPqigwmLC4B1Ei7f9qF3j%2FTr4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAczHrBFXa%2FMsNJGpircA4J6jLkdEPi08Uu7mHM%2FtH7S2aEdHERq2ZJjEPdV%2FxhKw8LBj36YMI2lm0Cy5ic%2FrxVhLgwIpd06i%2BwLt%2B5dUZnX8dNu8T0HdEDdYOk%2B9UFJrmcBMhqxPi%2FUp%2BKKSTkzKdD7ADwP4b4A6S%2FHJe%2BwAJS0%2FBA4Z1HogJr6pyPKQfEyqvoRx9VwcktSOSxPTSigFR9ohJyyfQDg%2Bn5f8%2BthQRYzIXHft5LCw6OBAvEmpl89MW0GuPXk3ZfZLMsl3xnhFl98QrqbTBWBF7jD%2FYm4afAArYY%2FZeA8sU4ztZCQM07xES8id0i6Lxh%2B5tlLcwkolH6kfsizuomt1wu9u3kIlNMCaEe1ZxbcQ88QdfoycnbXQ03Qb82jSLDRBitu6cgIeMpq5FTZ%2BQhrauuaF9b7YXVNEPv1AjRz0Wb7TbHPvqXLMmml7gTj09Q%2BEN9qD7aT26DyQ53rycqbmT4%2BcTW0DjA3KkQER3vpF%2BOVCwGU4bPcS1PdUuZk4Z2BBg2RrdtYAoDsojC2faG4Ai%2By0g8nknnkCa4PLAsk4KSdWvDv5BXz9PDNFzAxKjPE0LJzJPg6Cy87yNo8bhkSafBRs4chXv%2BPil02HB3URM6COQFm3iES3O1d2te%2FRy6Qu3AtMI7t374GOqUBq38FuNb3q0It8asTaUZQW4dNCDPzgVdzoFeAfuJ3lBMqx6u3Q10D9tNfU8R08%2FNfamRtOyy%2Fa%2FXjQ0ZEtdisTQuOAwrgulFx46wFgahcirGD6rfzJthpXssSviOgStOUXRpr%2FC5XhzG0RMwjITxeswbZzzVrhv363I6RUjECZkOyNpYW2J9DtCQSmGGSm5Wn%2BrcffZZPceenNrsTQNOXm68KoxQE&X-Amz-Signature=acc50d53d86e84263c682731da7746cd49633f3c18f0f8478380507a09ffcaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCFXWA5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnyxtW%2BoGuOJdHDORhZsagEFyD79IefZUqiBWuUqVQzAiEA4iS%2F9Q8YV%2BU5dsBcKO%2BdPjlpMBJ%2FVF7BVx6aSlreSWIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHKTNsEdzjXcXl%2F06yrcA4osO%2FfRKnALrfeyOippvJ5JwpA2jpM4axgjzQ961bNKESmkUI%2FLSVDSQVMn4zhencqZb5UO9WlbJiiRi2u2bbd2laSrBZEGz%2BypgNrKHj63v8co4HRcvfmcTeUvh3Py6WUtasYj0ZUei3g4K5%2BWgioFJ4Ouht2QDs5o3xK6FfUmY2Rs0mDo8tq7C35wEraBPEqJTfsGzW941xVwo949zC6KyRuxWNeGGXHVVaDQ58OmsSDe1zzgGzns7p5tPZP6OodKise6NLCsQsZX57vG09so8x6fVLjM3DyXag%2F3Rwq3CuChRiS0%2B87gAoOPjw9AUo0IewMA139qcsC9rsM9nLXuccG93S2ckAHEGj5%2FfBxM9MJs6G5eEvFwa5h7HsLJ8u5iDN1WnYhfhEyFzwFow%2BUY3jmfaAGWLtxQYq6yQlOlXSpbDkXg%2Fleq4GWO7rRlHobe0MvDQ8VOspZhVSv8xFSx%2B4rNCrp%2FW93faqNFORtvTMg46GUqJ6zrfS0c0yQx%2B4jgN1%2Bu%2Fv4V%2BXllc%2BboJrRp%2FO898zDx%2BnliGI%2FUMHE978OfabtsdUj71FeTByS%2FLpU%2Fkw9zcquW2lm4J2Y1gL9AxEn0xXA9Gg8mtvG6ZILG0LarpatBS542k4ARMNvs374GOqUB%2FqNyGXERQvxcMROk09YJ6u1%2BWciLLksdtRvZcDKrY0GysZ0Vhm9h5A7K9Vruv2TEny2ukuUBHhAP0IuOVDK%2B2eaiRxi%2FwoxRUrK93iCus5ZkUqbn7CQN3wBEkH%2FpvjNVquYMogIivZxMbViT%2Bwz5KbOefrqZ5Lv8TIyH%2FB7OzA0A3QSbKhmaqAusdTyVFr%2BjOuZOR40IXT7vLdsvEXvydGhOywSO&X-Amz-Signature=6332fdf021229d0ca2b1da121976745ae975378dfd945ecf641a8b439b75c82d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DHLEVV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmtGGnSo3BbkrJ2vBdGxUB5YPElALYFTNS0Wfec5G%2FxAiBBrDJS3IzdakkCHzccjAClwo65Nw3ZUAGL8zvFmWJduCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMg4i%2FLczmzezRD%2B5%2FKtwDvG%2F1W3HuaeBrynKuPEraV9b6i22Bt27AY%2BHmkAs2kNfkTihbkQdcfj5VcEPmakNPFSTVhNHQ9BiUCCrFuHMep613ezn%2BbZQuK%2FvvkeBfinA%2FgEBOeQYP931zjCCe4C0lJ9A2bTjJXp8IhMMcZVe%2BnEnnVeAKKl45KEU6RUzuOZE8JJdFLkUOZcthl6wE%2BCbuhUx2%2BZJVs6nvW8gk4h5jufSpQixLZA4lDMwP3QigBhWqKJWTeMkvD6URlZfKXAhgJYDJrY5YO%2FrT54LERmJsQO4XUl84KaQSIo63SP1nctj9oNh%2FscEj6Lr8AlWsfzUB6HsETMa%2FeiEuBccSUX62QUEISSB4HgHXEzViYm83Ng%2FSmwpCZXD26aI98sZrsylQhQRa%2ByZEkqfFBFGT3nGcvmDeQSCfk4PA8P4k8DVzpR05L9N%2BOgtXTjvbu%2BAOJTcGfRW9H0UpFFgiAfo%2BpqjbWYo0fTMkpULeIX0nt2cvIAikHCK%2BTCiA1xSN%2F672xOg6do7IIFkMtZlopvAUxGR7CdxD17WhzgyfAw0PWS%2FPVysaGp0ssa55lmCtCPMfFqwrjKlvkKwSQhUp%2FUNiV4lmfHokLTDCM1W%2FNBoSZaZyhKthHyQE9HkA2gJ4zJcwwu3fvgY6pgFl8DYebfXi4iohz8kjxOe923OA0UpgmZWPns9bB93IiZt8VofTLyVENv0ww7YOGXr1YhDzpqBWTPq75E35k4pOsZtObwCxJpM9LdZu6KtqCnYMXp9r1PRlmwjkqxP7uktbtPCldgxpZtr45G0VKkv3sgAbHHKsTPGlOALwK8YGgwhEPxgXuztp41d%2BmDubLqRrc6LhUofRT4eWi6%2BYOXF0F1FsXwcw&X-Amz-Signature=dfa04f6c70383d8dff2bcd19e721655e37ab41e41b144aea8fedd190f3edc7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA5JNCPW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCNI%2Fmv0z2jf2jyJ5mwmWS4dJvV4V5Hq5kAKh2O3SvdAiEA8WBBuB%2Fe9mmJM8op%2FFoPqigwmLC4B1Ei7f9qF3j%2FTr4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAczHrBFXa%2FMsNJGpircA4J6jLkdEPi08Uu7mHM%2FtH7S2aEdHERq2ZJjEPdV%2FxhKw8LBj36YMI2lm0Cy5ic%2FrxVhLgwIpd06i%2BwLt%2B5dUZnX8dNu8T0HdEDdYOk%2B9UFJrmcBMhqxPi%2FUp%2BKKSTkzKdD7ADwP4b4A6S%2FHJe%2BwAJS0%2FBA4Z1HogJr6pyPKQfEyqvoRx9VwcktSOSxPTSigFR9ohJyyfQDg%2Bn5f8%2BthQRYzIXHft5LCw6OBAvEmpl89MW0GuPXk3ZfZLMsl3xnhFl98QrqbTBWBF7jD%2FYm4afAArYY%2FZeA8sU4ztZCQM07xES8id0i6Lxh%2B5tlLcwkolH6kfsizuomt1wu9u3kIlNMCaEe1ZxbcQ88QdfoycnbXQ03Qb82jSLDRBitu6cgIeMpq5FTZ%2BQhrauuaF9b7YXVNEPv1AjRz0Wb7TbHPvqXLMmml7gTj09Q%2BEN9qD7aT26DyQ53rycqbmT4%2BcTW0DjA3KkQER3vpF%2BOVCwGU4bPcS1PdUuZk4Z2BBg2RrdtYAoDsojC2faG4Ai%2By0g8nknnkCa4PLAsk4KSdWvDv5BXz9PDNFzAxKjPE0LJzJPg6Cy87yNo8bhkSafBRs4chXv%2BPil02HB3URM6COQFm3iES3O1d2te%2FRy6Qu3AtMI7t374GOqUBq38FuNb3q0It8asTaUZQW4dNCDPzgVdzoFeAfuJ3lBMqx6u3Q10D9tNfU8R08%2FNfamRtOyy%2Fa%2FXjQ0ZEtdisTQuOAwrgulFx46wFgahcirGD6rfzJthpXssSviOgStOUXRpr%2FC5XhzG0RMwjITxeswbZzzVrhv363I6RUjECZkOyNpYW2J9DtCQSmGGSm5Wn%2BrcffZZPceenNrsTQNOXm68KoxQE&X-Amz-Signature=91c499a620951959b66ca405f24fa93858c07fc64ee65e1ce0eb6352abb08ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
