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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIRZWUH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCTUPi3UFh0gcuWb8TOu8yAB9w0SAZUeIimcEycw9TCaQIgWa%2ByhXPWk4ouXTYCZPEP0B%2FiTu967JU48921jJ7SDzAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOmXnrNOfxxkQNhvSrcAzlzb17wcn2zAdyxCM7pPqRlSuTPa1DkgmGTjNDkQhNpnWaBWatlH54Z%2FRR0oWyh2thy1fCVIg1luLZyV8u37JOmPWksqudt6U0Nod2n9b91Hy7AjkrYaUx3zRAeMIRMcfZP8aZdk0H3J%2ByqtbWHXO5neWEA%2FdOxIBtooW3d1R268FEV8RbdTijK4FjqjcQnZbKPe2ECUw7tk%2FH8re8HZdkv057XkqXs7lzm5gnRSTIeQuSMVnoWerhBAve1Hw28yiIrA3ozuKdVKEVWpyTmmxkYQNdUyoiPLX5oRc8W3MHnNro1M2SONnBPjHYJzgZM2kkxuivdZa94lxlXjVouoPxVegCab8Xv4hGFef5E%2FKXkWgeQAxSpNej6UqGFW85RmKTnTfEEA%2Fn%2BLbDHUb2bkZ2yK%2BmAjYAIs%2FoYlwljuwh6xazKxhXOjkO1kcEivzEJ4CYVwqoY0slufsCMLJ8RIyOYAbdHtIlHuQVsK2%2BZSjN%2BrChOgs%2FmxNAdaRP5ZzV8m7sby9P57iU38pCHEvh7KKgURYCFagRXK0P7CxpsdzW7HIAeZKUeVp%2FykoTZLktnKVTm5hrpuhOcLWKLMrCnmKGQeKTJtiNGWFOBs1Khfn1KdcP9WiGUIVbLHRo9MLi23MoGOqUBtvc2DPXQxobkXu8lLYyhKGBP7DhGX6eita2DLU0Sp4ucMNwVOFW6l9Km73pZevqugtXzXUfZLHtJjBEP12o5X%2B4hAjGv2E73woLGwrDJVEym2As8Dl0lBuyAZ4yZ5SqbPaj0Gairxq52y09ua4oC5pd5fzXlsE1fEKySHWYdndkDseesBKcMpNyM5UEbqPi78DiKzhes5NWALZLMQkU%2FWZrpSuDK&X-Amz-Signature=1a7c6560b55825f877a01dac48ded54851655f6e9f5e9b646a067a4f0bbd077f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIRZWUH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCTUPi3UFh0gcuWb8TOu8yAB9w0SAZUeIimcEycw9TCaQIgWa%2ByhXPWk4ouXTYCZPEP0B%2FiTu967JU48921jJ7SDzAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOmXnrNOfxxkQNhvSrcAzlzb17wcn2zAdyxCM7pPqRlSuTPa1DkgmGTjNDkQhNpnWaBWatlH54Z%2FRR0oWyh2thy1fCVIg1luLZyV8u37JOmPWksqudt6U0Nod2n9b91Hy7AjkrYaUx3zRAeMIRMcfZP8aZdk0H3J%2ByqtbWHXO5neWEA%2FdOxIBtooW3d1R268FEV8RbdTijK4FjqjcQnZbKPe2ECUw7tk%2FH8re8HZdkv057XkqXs7lzm5gnRSTIeQuSMVnoWerhBAve1Hw28yiIrA3ozuKdVKEVWpyTmmxkYQNdUyoiPLX5oRc8W3MHnNro1M2SONnBPjHYJzgZM2kkxuivdZa94lxlXjVouoPxVegCab8Xv4hGFef5E%2FKXkWgeQAxSpNej6UqGFW85RmKTnTfEEA%2Fn%2BLbDHUb2bkZ2yK%2BmAjYAIs%2FoYlwljuwh6xazKxhXOjkO1kcEivzEJ4CYVwqoY0slufsCMLJ8RIyOYAbdHtIlHuQVsK2%2BZSjN%2BrChOgs%2FmxNAdaRP5ZzV8m7sby9P57iU38pCHEvh7KKgURYCFagRXK0P7CxpsdzW7HIAeZKUeVp%2FykoTZLktnKVTm5hrpuhOcLWKLMrCnmKGQeKTJtiNGWFOBs1Khfn1KdcP9WiGUIVbLHRo9MLi23MoGOqUBtvc2DPXQxobkXu8lLYyhKGBP7DhGX6eita2DLU0Sp4ucMNwVOFW6l9Km73pZevqugtXzXUfZLHtJjBEP12o5X%2B4hAjGv2E73woLGwrDJVEym2As8Dl0lBuyAZ4yZ5SqbPaj0Gairxq52y09ua4oC5pd5fzXlsE1fEKySHWYdndkDseesBKcMpNyM5UEbqPi78DiKzhes5NWALZLMQkU%2FWZrpSuDK&X-Amz-Signature=1d8f1035f97f6f2db6ca984c3aee97f51bf4aa73c150000e893959adeba180ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIRZWUH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCTUPi3UFh0gcuWb8TOu8yAB9w0SAZUeIimcEycw9TCaQIgWa%2ByhXPWk4ouXTYCZPEP0B%2FiTu967JU48921jJ7SDzAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOmXnrNOfxxkQNhvSrcAzlzb17wcn2zAdyxCM7pPqRlSuTPa1DkgmGTjNDkQhNpnWaBWatlH54Z%2FRR0oWyh2thy1fCVIg1luLZyV8u37JOmPWksqudt6U0Nod2n9b91Hy7AjkrYaUx3zRAeMIRMcfZP8aZdk0H3J%2ByqtbWHXO5neWEA%2FdOxIBtooW3d1R268FEV8RbdTijK4FjqjcQnZbKPe2ECUw7tk%2FH8re8HZdkv057XkqXs7lzm5gnRSTIeQuSMVnoWerhBAve1Hw28yiIrA3ozuKdVKEVWpyTmmxkYQNdUyoiPLX5oRc8W3MHnNro1M2SONnBPjHYJzgZM2kkxuivdZa94lxlXjVouoPxVegCab8Xv4hGFef5E%2FKXkWgeQAxSpNej6UqGFW85RmKTnTfEEA%2Fn%2BLbDHUb2bkZ2yK%2BmAjYAIs%2FoYlwljuwh6xazKxhXOjkO1kcEivzEJ4CYVwqoY0slufsCMLJ8RIyOYAbdHtIlHuQVsK2%2BZSjN%2BrChOgs%2FmxNAdaRP5ZzV8m7sby9P57iU38pCHEvh7KKgURYCFagRXK0P7CxpsdzW7HIAeZKUeVp%2FykoTZLktnKVTm5hrpuhOcLWKLMrCnmKGQeKTJtiNGWFOBs1Khfn1KdcP9WiGUIVbLHRo9MLi23MoGOqUBtvc2DPXQxobkXu8lLYyhKGBP7DhGX6eita2DLU0Sp4ucMNwVOFW6l9Km73pZevqugtXzXUfZLHtJjBEP12o5X%2B4hAjGv2E73woLGwrDJVEym2As8Dl0lBuyAZ4yZ5SqbPaj0Gairxq52y09ua4oC5pd5fzXlsE1fEKySHWYdndkDseesBKcMpNyM5UEbqPi78DiKzhes5NWALZLMQkU%2FWZrpSuDK&X-Amz-Signature=f8c7bcd8d023009755bb8fceed9201288bcb52b987e0ed6eebc69fe0aeae449b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CIRUFUE%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDrGYnMr3ZLUY5FgbloajmhxbP28GH4o1BFonttuBszMAIgcf7WDGvoutjTn%2B%2BOBVZ%2BTJML0ZF80cPKfB8lVWwVxZQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYTxGTHS0qpJerVqyrcA4YXDNU6qHYsxwpI0S7KA5iKkPnq%2BViMC4zVUM7egBkAMM6RsUnyahlMXSU3mNuNZyVMKOLpmhLPcaOGqQZZTqgT52%2FZJXr%2F5SsNB%2F7ukHywC7EzQSyqvXpaiuEL7XSWpCEA5%2B7T%2BIBWSJBcvB3VZsX9V1Rv0UWVISJR7qWjUfQ5GX5LHyQcQkKiGIImseXV2QYKgShaNkvuY2UBEeBnkSQRxbHP0BxU9O3Ee%2Bwi%2BagYKUl46RcBZuMGO8ddOsE2pSnkyiY2qFCwVxPFA%2B5h57x0GcrXN4ge7spkQmDXdOuCj3Wn7rtNzR4B8pYWq76jVt77methcVhPKIoy93BdR%2Ffh0%2Bd3Q6ZK5yOB6rR3mzM4iV05Sk5YIzV2tIeXNehsi1m%2FSBAS7eB3%2FdV0ePI82QUCCV8C5L1C33mkUnTp%2BBDCC%2B3Q2ZqHF%2FYdze4RjANnkk7UYqyW75UnUjLh2LIclCaCQKH392m2l8WYNyWygYiIyHSGPM2FWVlvyFP4nXbrTzaazOt6CM4y%2FD74t3J2HBFXzZqIcqImqXcjVJyR9%2FM9W7X6dICps04esgzRQ2m9TAc1v5vUv4gRhxuaU5Ge83SZ4irRtfP4mjEEW05nJKuFwuTQDwiRHgWXK5bIMLfB3MoGOqUBUxoBqO8rhJ5DuNXuvHmlS8%2BK0XZbGolRwOaZkxtI4PODUb3g5RwL4FQzNkWg9%2B8KOxjaQAR8CoVzQ27STz2ktRrTuXvc9Ym14nHJWVPeu%2BQET8iDtYBVRWFvM4szSAsezJAoMhpcMwkW9Cjc5hVVgdarUm49g61oaUj5YG2wbYQFJ%2FLWoAAxhysB%2BEsQfCDvYGCr9nMVRZNFbW%2BNEah8GUCNqoDL&X-Amz-Signature=eaa7668cd9f98fa5ebb60a6fc78c16b5f9a6b7d8c5bf8d819d27d398d49f18a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JXOQAZ%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGy5yklQcmOwhFU3dpSaxzibKlOqvTJS%2BHiOojRaQsVkAiBIuHk5KFgQLdFQwyw95D2vMGDiRgeQGdblOkLTqyrEcyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPIUfcQqaat3FCjtoKtwDPZvjWoB0FhEjDnW84MMsmic8woz7EuFCgoRMbvE%2BHDikPJtY0rTaZTfwO8GPDPIpw8EnnqpE8Dqc7vwOwEGyz1HExGSKUEPJj76ERtJsbCoNKTsSsNkGvjDLzFicB2yxuLJrJkH9KQF%2FPhXJwbNG3ceyWVb9ZwQB6uwdGivDRixhoSVZku9sLab80Zhn8AbXIJqMYuKrIWW0jFTX6jahIX7rhKp5mpsrEIKo4MPaMx5QOOFW6C%2FZBH8hQdb%2FIvTGWo%2Bbfkx42IdNJAUsQbBiL%2F0fAL4J5fmOBIf1jdppJsCLK98PCB28Fcs2f3D3rO4QwhlNqcoD0XAYXEA1UnCxr0SU%2FkqimhYFVRVnifcTUop%2BC6y9K9SupVQ83khH3AhFDJMa7kljw8Q5qRngUDBK7kLXH1QtxdOFF%2FniTK8RrIFuYBIqkXDXjT2qFjkQGTAfftyuYCbhH4vaPp25RSjFTC8qdH3vfvY6npK9C8lQCxpHovwM%2F4UyYquq3Ax7hUtTS3CW6x%2FBvMKMb%2Bx166Dfkp0vcHgYXRUlAuJYx2Ekb0KgPAsc73CtYMyakDjl3%2BMR9yF9%2F7hJN%2FWUlg8MwgIfdkzTScElsBukiN8H%2FynIrcSJPt3JGRhbGJJLtDIw4OvbygY6pgFhixERDz2LWQXTvShhh1r%2Bh0VWw8TeS03o7VkRTZ0wRUq48%2B1dyk5tLN%2FwAbsk7%2FAz91ijvUC2TXAJSxPnfHy15kAQZUGaMNxQ6z7NmfC7A3FnURsR3CalO%2BxDWX54qa5u9m4omJ6nwM1RIOONjzKLqG4%2F4zCGGOBNjXAdXOItSa67rDJiHxMiRMeCPIDmhCW%2BUffZS%2FugC%2FdYwD8BHI6E5b6XDYgM&X-Amz-Signature=f2a869b67220ceda687c28d1f367b6d406fb96843b67583807e13444823229c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIRZWUH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCTUPi3UFh0gcuWb8TOu8yAB9w0SAZUeIimcEycw9TCaQIgWa%2ByhXPWk4ouXTYCZPEP0B%2FiTu967JU48921jJ7SDzAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOmXnrNOfxxkQNhvSrcAzlzb17wcn2zAdyxCM7pPqRlSuTPa1DkgmGTjNDkQhNpnWaBWatlH54Z%2FRR0oWyh2thy1fCVIg1luLZyV8u37JOmPWksqudt6U0Nod2n9b91Hy7AjkrYaUx3zRAeMIRMcfZP8aZdk0H3J%2ByqtbWHXO5neWEA%2FdOxIBtooW3d1R268FEV8RbdTijK4FjqjcQnZbKPe2ECUw7tk%2FH8re8HZdkv057XkqXs7lzm5gnRSTIeQuSMVnoWerhBAve1Hw28yiIrA3ozuKdVKEVWpyTmmxkYQNdUyoiPLX5oRc8W3MHnNro1M2SONnBPjHYJzgZM2kkxuivdZa94lxlXjVouoPxVegCab8Xv4hGFef5E%2FKXkWgeQAxSpNej6UqGFW85RmKTnTfEEA%2Fn%2BLbDHUb2bkZ2yK%2BmAjYAIs%2FoYlwljuwh6xazKxhXOjkO1kcEivzEJ4CYVwqoY0slufsCMLJ8RIyOYAbdHtIlHuQVsK2%2BZSjN%2BrChOgs%2FmxNAdaRP5ZzV8m7sby9P57iU38pCHEvh7KKgURYCFagRXK0P7CxpsdzW7HIAeZKUeVp%2FykoTZLktnKVTm5hrpuhOcLWKLMrCnmKGQeKTJtiNGWFOBs1Khfn1KdcP9WiGUIVbLHRo9MLi23MoGOqUBtvc2DPXQxobkXu8lLYyhKGBP7DhGX6eita2DLU0Sp4ucMNwVOFW6l9Km73pZevqugtXzXUfZLHtJjBEP12o5X%2B4hAjGv2E73woLGwrDJVEym2As8Dl0lBuyAZ4yZ5SqbPaj0Gairxq52y09ua4oC5pd5fzXlsE1fEKySHWYdndkDseesBKcMpNyM5UEbqPi78DiKzhes5NWALZLMQkU%2FWZrpSuDK&X-Amz-Signature=84d51b2dfab6cb0b095a07d51849400409809adf90f28c467cbfeb7d59f3bf29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
