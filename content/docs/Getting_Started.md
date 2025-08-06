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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBQKAXM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCK%2FkxdYXk6fuCDezBxYVMOjAlcTJWwwCPbUUpWhjoe8gIhAKLO%2FcAiW1h7uunAe9QBSGHuGHyGC0q%2FAcdJWsXp2icfKv8DCH0QABoMNjM3NDIzMTgzODA1Igzn8tlKeCjpR5DQzjkq3AN7bQ6ZLLzw95GAuz5tltxUEHTjlb5GuPPMM1G4SUWbtXpufSv5syYZOonb2vnhb2obgGZ0PjBGlBWSzvIQo4hoM1Un%2BZQvrbbgGUVn0oyzNKcEDZuYe7RVA9t8yQGl0b54fgKm6oD7drk3w%2FwxawV%2FImd87G47JWX0ubDtCvImUzlNlGLvMUlnewDiwX0B0d67ache7PDts4ywffScKDlbNGzo9XVOcFKLgEjJ9GE9s8lahAtQTSJsmSqj%2Fdx4wpE7QC2P06rGwCFYY0K1ImJHC38fCu602D35HanPxlZT5b79onoLAuzuvfabymJLq%2BxpbfcA4W68S7uSHZBi2%2B8ovLbzR7T15TBaSwsvvMH%2Fo%2FHwCMuM0vRJ6OfnHffcYMjQx1C4P7QQv9xkYxV5J6ZYP6YQjpg8TMTR4w1IRzlFmOrVVEt%2B92G%2F4KdU5iNvi2oL2kYjrSHH87QUhdIvo6wRqoYa8uprzXPYnUKaaR5VEhBPxjm67l4rImtmb98Nw1vSdJca15UH5911QoOqdXIpLvtcmwlXhysbrWPJf3ZQp7AqNItyLS99iNG49WKP4OhXLmbkbmXHPwFgUP4h8KSG7RKqW0fc9VjNVRB15sOGbBkNpTVReNxaVY8LHjDc6s7EBjqkAQUzw1SNfhq7GTtUgVXpWXlmPRqcE%2BCgO6fRmyjASN2XqsBc%2FIrbHinlGPjPMO3mJhh9F4JOU%2Bc2tnzwNKpr2wBaPwqqYyX5zg%2Bb813qaMKmtnBUL9FqYiR%2ByD%2FHdxz5aotd%2F1lW%2Bicc9ySssNZLZHqLQaZong%2FX%2FUZk2MmAh1L4qBaeoDXvFah%2F8VJ6%2FcgUTyMcLTbtjzKoj54bzoTXIk4FYTZn&X-Amz-Signature=f48577a4d024003de03f18a6f2ed76daae69f3bf56e04d4adb9409acaa280d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBQKAXM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCK%2FkxdYXk6fuCDezBxYVMOjAlcTJWwwCPbUUpWhjoe8gIhAKLO%2FcAiW1h7uunAe9QBSGHuGHyGC0q%2FAcdJWsXp2icfKv8DCH0QABoMNjM3NDIzMTgzODA1Igzn8tlKeCjpR5DQzjkq3AN7bQ6ZLLzw95GAuz5tltxUEHTjlb5GuPPMM1G4SUWbtXpufSv5syYZOonb2vnhb2obgGZ0PjBGlBWSzvIQo4hoM1Un%2BZQvrbbgGUVn0oyzNKcEDZuYe7RVA9t8yQGl0b54fgKm6oD7drk3w%2FwxawV%2FImd87G47JWX0ubDtCvImUzlNlGLvMUlnewDiwX0B0d67ache7PDts4ywffScKDlbNGzo9XVOcFKLgEjJ9GE9s8lahAtQTSJsmSqj%2Fdx4wpE7QC2P06rGwCFYY0K1ImJHC38fCu602D35HanPxlZT5b79onoLAuzuvfabymJLq%2BxpbfcA4W68S7uSHZBi2%2B8ovLbzR7T15TBaSwsvvMH%2Fo%2FHwCMuM0vRJ6OfnHffcYMjQx1C4P7QQv9xkYxV5J6ZYP6YQjpg8TMTR4w1IRzlFmOrVVEt%2B92G%2F4KdU5iNvi2oL2kYjrSHH87QUhdIvo6wRqoYa8uprzXPYnUKaaR5VEhBPxjm67l4rImtmb98Nw1vSdJca15UH5911QoOqdXIpLvtcmwlXhysbrWPJf3ZQp7AqNItyLS99iNG49WKP4OhXLmbkbmXHPwFgUP4h8KSG7RKqW0fc9VjNVRB15sOGbBkNpTVReNxaVY8LHjDc6s7EBjqkAQUzw1SNfhq7GTtUgVXpWXlmPRqcE%2BCgO6fRmyjASN2XqsBc%2FIrbHinlGPjPMO3mJhh9F4JOU%2Bc2tnzwNKpr2wBaPwqqYyX5zg%2Bb813qaMKmtnBUL9FqYiR%2ByD%2FHdxz5aotd%2F1lW%2Bicc9ySssNZLZHqLQaZong%2FX%2FUZk2MmAh1L4qBaeoDXvFah%2F8VJ6%2FcgUTyMcLTbtjzKoj54bzoTXIk4FYTZn&X-Amz-Signature=280620f4df0fa108e04092b264c9149bdcb4b8d52ebfecc34942c52a7d0830c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBQKAXM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCK%2FkxdYXk6fuCDezBxYVMOjAlcTJWwwCPbUUpWhjoe8gIhAKLO%2FcAiW1h7uunAe9QBSGHuGHyGC0q%2FAcdJWsXp2icfKv8DCH0QABoMNjM3NDIzMTgzODA1Igzn8tlKeCjpR5DQzjkq3AN7bQ6ZLLzw95GAuz5tltxUEHTjlb5GuPPMM1G4SUWbtXpufSv5syYZOonb2vnhb2obgGZ0PjBGlBWSzvIQo4hoM1Un%2BZQvrbbgGUVn0oyzNKcEDZuYe7RVA9t8yQGl0b54fgKm6oD7drk3w%2FwxawV%2FImd87G47JWX0ubDtCvImUzlNlGLvMUlnewDiwX0B0d67ache7PDts4ywffScKDlbNGzo9XVOcFKLgEjJ9GE9s8lahAtQTSJsmSqj%2Fdx4wpE7QC2P06rGwCFYY0K1ImJHC38fCu602D35HanPxlZT5b79onoLAuzuvfabymJLq%2BxpbfcA4W68S7uSHZBi2%2B8ovLbzR7T15TBaSwsvvMH%2Fo%2FHwCMuM0vRJ6OfnHffcYMjQx1C4P7QQv9xkYxV5J6ZYP6YQjpg8TMTR4w1IRzlFmOrVVEt%2B92G%2F4KdU5iNvi2oL2kYjrSHH87QUhdIvo6wRqoYa8uprzXPYnUKaaR5VEhBPxjm67l4rImtmb98Nw1vSdJca15UH5911QoOqdXIpLvtcmwlXhysbrWPJf3ZQp7AqNItyLS99iNG49WKP4OhXLmbkbmXHPwFgUP4h8KSG7RKqW0fc9VjNVRB15sOGbBkNpTVReNxaVY8LHjDc6s7EBjqkAQUzw1SNfhq7GTtUgVXpWXlmPRqcE%2BCgO6fRmyjASN2XqsBc%2FIrbHinlGPjPMO3mJhh9F4JOU%2Bc2tnzwNKpr2wBaPwqqYyX5zg%2Bb813qaMKmtnBUL9FqYiR%2ByD%2FHdxz5aotd%2F1lW%2Bicc9ySssNZLZHqLQaZong%2FX%2FUZk2MmAh1L4qBaeoDXvFah%2F8VJ6%2FcgUTyMcLTbtjzKoj54bzoTXIk4FYTZn&X-Amz-Signature=88159bffb834490c49cf3a10f5360d90833ced0855d67daae8c9d99d7996ed6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DTHIYC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD1PUAyLkrdQ1wwmYf4LQbPAw%2BKowrr4QBJLhMgdIioSAIgUY7DJS4HDgGWVzvB7WgITu38Wn5PFKJ2prTJ5tTRCF8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAc6H%2FkA8GFRdoR41CrcA6ViRB2kWOHqHRw44DIGqdDjAEFoEU%2B0ohSWIk23600Ptf6vEIG357pW1CmoRmozrXkgev10tFnwthcuyhGp4g5m3ZZD6lzEGdigC92GhPYP7MtGleNAbun5CVLDz5joX1dUmr8Q9TMap2oH1It3326kGSnoZDHjceu%2FFkzvSmCfUELFf%2Fex6Yjc3rB1ODkzCTMg8%2BfKMmgA%2F33bt4Bs6SRrd86ATMKiqBhAVnHgA00Ej0eAun5yAScvOOjauB%2FKbldvCNiB%2FJHt3ZHfTxmWpE6zWhyhwqKc3Yc47e9DtKAn1aL9muNi5G2HizE%2Ffoyq7XetlHowYxam1emJoESrTsEDzJQR5d1rKQIb5riJgBnfQCex%2B5WJJAztRbtn139Y0BuExSY7WaGIb%2FF7otzSJ6BWx1CBvYkAEEvilu51SAyYdx7%2FxBZcaQmpHAXWjswMEcnLkkvyEsrLY2gg4eO0E8mcAXqdKjfaB1BNeJ97vg4VNHsfFBjucFEYf7izeS2Nl6TVlnn%2FPHLmlz%2BXUKIROHLShjZgtAMIXfHbCT4O4EPSPbz204fV0ewXzaC40PtDJfxoGilXDY9XHsmqHxt%2BfrEbF61%2BooYbpwPcfkl3A%2F%2BwK0LZDLuGuXQzkx12MMzqzsQGOqUBJXqk3bqGxLxDfp1AMRZEuGR6hx6RJ6zaQvOelIguSVbjTGNJMzmr975ruhdKW57ugYckuAABm3w%2FiVnAtvHvlKj6k0XjuuLfvKdZsB9t784%2BBXJJy6l9srbUcFwHkGI5CWovP%2Fsb1IvPJSI5W6F7DIG0bH%2Bq%2BE5CZjgJgzLkxR18TxVpWuj4hiAX4qUfOen%2FqdJVMQLX8QklfUdkyTeCe1PtiK2L&X-Amz-Signature=fb323ce2e775433e08f5350ac5b2380fdb81d26e9e167ac68e9184410390504a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IRRJP4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCOsAhnV6AATp27QCzmBgOZIJ4m%2FWZFCBxbtQ%2Fz3d4FzAIhAOMge7MAn8yCLGO%2FbxzjJLlPJfjNLV52dEFpMndUlLB%2BKv8DCH0QABoMNjM3NDIzMTgzODA1IgyjLBMlDpt4uZKMviIq3APU%2BN8VMR%2B2V0s4Emwi0tzVcYHDMzZ3gJk9t6DZnSFP15HYHReKkZt4RZ6hC0Rou7v%2BJS%2FwNFy%2FcUmbLcf56zrD2vObAqcgRtVmqf%2BZuSLs%2B2fEORoNWvdyAxtgIjwk6V9pZA3W34DSEzoOlaRjWe083RpXTuzP3hYsQ6IHGsQxBeIlIwwNcmhVIid2zTkiZaId3IMyiK3quaKfLLIohCjYmgFkP%2FFuwa235iHhUKS%2FJtSvPJK7AO0Rka6xZvrH8UNFJTI8wihCAUJUHQTEt25WEAgSxclO373WydUNxUhHId6dWHYRgqdmzNlMClMfTlEMl0Eejl3rri6b4jP%2F4GbP8B4ZhbOGsbQ3eKOMRDNzOXrF6yQy99L0a1eAaHHOVPAfepXMjxLNtVFTS3BZobxJwnwltAMVVces3j8Sg%2F7Is3e3V5cZZjR36GOF7phZRzB0Fhyo2H8qrS%2FHzs9ebL8ob5p3BLjVef7pG520Cy9zifJ0WuNJpX9379OfhO7T72fMAybWNuibAVzRFaDxShqrz9u6cIg2HqR5kioSi7OaE40hNBwyGpXyh4k9saoGL2R5PZBXuj9x12Knqf2ZlYc%2BUhxAa7LMVQ0FgDocd6ZEWVxYYgaIYP6%2Fgf9KMzCb687EBjqkAfRfJmifptAEViL%2FfDNvLuNYR2EZRQgu9uRMLPPl5JTWPW%2BjFugKfM4CvRRAIi%2FAjaT4Xy6V3Hp%2FqFmM1DIW3HlLYPKfDce8Yrz3qX0Bt3FEJVtmL7%2FkZbZvMrxoSSwggx9usAU1HfD71RwkwmriOEZBpesulu9JuVs6XkodaL2UTe4u1x7VrsozADLK60%2FHqgoKv%2FU%2FJgK9mfCswuI4L%2BC6Uf15&X-Amz-Signature=4ded9a5c3c43f2a8de20afc20d949cd522fb0e0734d3a47417b89149bae18eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBQKAXM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCK%2FkxdYXk6fuCDezBxYVMOjAlcTJWwwCPbUUpWhjoe8gIhAKLO%2FcAiW1h7uunAe9QBSGHuGHyGC0q%2FAcdJWsXp2icfKv8DCH0QABoMNjM3NDIzMTgzODA1Igzn8tlKeCjpR5DQzjkq3AN7bQ6ZLLzw95GAuz5tltxUEHTjlb5GuPPMM1G4SUWbtXpufSv5syYZOonb2vnhb2obgGZ0PjBGlBWSzvIQo4hoM1Un%2BZQvrbbgGUVn0oyzNKcEDZuYe7RVA9t8yQGl0b54fgKm6oD7drk3w%2FwxawV%2FImd87G47JWX0ubDtCvImUzlNlGLvMUlnewDiwX0B0d67ache7PDts4ywffScKDlbNGzo9XVOcFKLgEjJ9GE9s8lahAtQTSJsmSqj%2Fdx4wpE7QC2P06rGwCFYY0K1ImJHC38fCu602D35HanPxlZT5b79onoLAuzuvfabymJLq%2BxpbfcA4W68S7uSHZBi2%2B8ovLbzR7T15TBaSwsvvMH%2Fo%2FHwCMuM0vRJ6OfnHffcYMjQx1C4P7QQv9xkYxV5J6ZYP6YQjpg8TMTR4w1IRzlFmOrVVEt%2B92G%2F4KdU5iNvi2oL2kYjrSHH87QUhdIvo6wRqoYa8uprzXPYnUKaaR5VEhBPxjm67l4rImtmb98Nw1vSdJca15UH5911QoOqdXIpLvtcmwlXhysbrWPJf3ZQp7AqNItyLS99iNG49WKP4OhXLmbkbmXHPwFgUP4h8KSG7RKqW0fc9VjNVRB15sOGbBkNpTVReNxaVY8LHjDc6s7EBjqkAQUzw1SNfhq7GTtUgVXpWXlmPRqcE%2BCgO6fRmyjASN2XqsBc%2FIrbHinlGPjPMO3mJhh9F4JOU%2Bc2tnzwNKpr2wBaPwqqYyX5zg%2Bb813qaMKmtnBUL9FqYiR%2ByD%2FHdxz5aotd%2F1lW%2Bicc9ySssNZLZHqLQaZong%2FX%2FUZk2MmAh1L4qBaeoDXvFah%2F8VJ6%2FcgUTyMcLTbtjzKoj54bzoTXIk4FYTZn&X-Amz-Signature=b77fb633fece7aeea249798b05e0cfc8d6bfe4742937a80b76bb53b6e8356473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
