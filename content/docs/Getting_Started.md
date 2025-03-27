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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQNUTC3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSpOg%2FmjaViHt2nRTtYR%2BBplNNmQM1CGSdmx7UHlzakwIhAIUT4UaDsHkyKsUgGDLdxKPZkTRMxaC3xSV8LR9Gwxm%2BKv8DCEsQABoMNjM3NDIzMTgzODA1Igyhq%2BFnbTpedsQd%2F4Mq3AMZ7d9jU7xaMbTkOZQn1VkBa1fUlnp7lCMTGCGGIs%2FyBFvHCYVK3bvfHbN%2FNs%2Bdq%2BreQ0rtJ8Zk%2Fbny%2B%2FZu4Q1eHV61llLkAGs%2FKsoxv6xswGay8aXXvhttjvSSCq2ZTQWfSuhk%2B%2FDbDaSW%2BkKZOg6y2qbQLYKCV0liu2qzrYwwnuvBwJmT1Q2dEiPFFUbZv28mA1qVDRCdl%2BWCzxyO6Zv8ZpLgh6UNKQJs91SaDf6SMsR20utktijX5g8Z2dVSOrU9VIQVIe96xoLuZ%2FsZc3REBoLZDyg%2FKhh8CwXL1%2BQ1IPhJGQOHtX7wNG%2FwV6Uk5K7U9X%2BIIzfmKFfzuTkCzzhEbb7zlgUjqJEGvhMfXJm04UmorwDsYV8FzUUDVTLPaQfKmmcDWWJihEcl0A%2FiF07PHUm0k%2Bp3%2FLHVxmvcUYZSnLdAnIyzyHjldQVJZQzIko9VFi2xV78YW1HTkhO9vAkO5z8bh%2Bo77cU6xCl2xT2xB8v%2FiALqsfUXwJi53WPfPHkdtKjl2KIZB0vlB%2B3IITivgseEnRv7fnWHxMA8eqgXDR%2FdeD%2BwoexzRF0qg3%2FCc3eXWQWwY%2FPZrS%2BaYo%2FWuKVLrfr9Tb2YhDaAzW2qNVhitg54THUnhUYYDItICzDlopa%2FBjqkAfzvZLITr10qnb4m9fokS2nymzq6LRflBxWqS8pc29xHaVmvNPpnc0MthGqY12wiNnNAHX6na3qKw7S3RZ44pH5%2F0SopgdUnMSQUNcX%2F3MX%2F4iPjxMG0T90S8nrd6zQ3iz5fQ7Ze7E1gAlZpMHEaBJtVWtVEdpHKnImpUa0AJVhQoAczd3ahVbtSHlKoDiA%2FhJQY9eNP%2F8neEuV1d68UMqDc%2BlqY&X-Amz-Signature=1c7fcc3a8f6f9c2b4c48beec366c47e51e81b57a0ff1ee94477e8f788d0d9046&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQNUTC3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSpOg%2FmjaViHt2nRTtYR%2BBplNNmQM1CGSdmx7UHlzakwIhAIUT4UaDsHkyKsUgGDLdxKPZkTRMxaC3xSV8LR9Gwxm%2BKv8DCEsQABoMNjM3NDIzMTgzODA1Igyhq%2BFnbTpedsQd%2F4Mq3AMZ7d9jU7xaMbTkOZQn1VkBa1fUlnp7lCMTGCGGIs%2FyBFvHCYVK3bvfHbN%2FNs%2Bdq%2BreQ0rtJ8Zk%2Fbny%2B%2FZu4Q1eHV61llLkAGs%2FKsoxv6xswGay8aXXvhttjvSSCq2ZTQWfSuhk%2B%2FDbDaSW%2BkKZOg6y2qbQLYKCV0liu2qzrYwwnuvBwJmT1Q2dEiPFFUbZv28mA1qVDRCdl%2BWCzxyO6Zv8ZpLgh6UNKQJs91SaDf6SMsR20utktijX5g8Z2dVSOrU9VIQVIe96xoLuZ%2FsZc3REBoLZDyg%2FKhh8CwXL1%2BQ1IPhJGQOHtX7wNG%2FwV6Uk5K7U9X%2BIIzfmKFfzuTkCzzhEbb7zlgUjqJEGvhMfXJm04UmorwDsYV8FzUUDVTLPaQfKmmcDWWJihEcl0A%2FiF07PHUm0k%2Bp3%2FLHVxmvcUYZSnLdAnIyzyHjldQVJZQzIko9VFi2xV78YW1HTkhO9vAkO5z8bh%2Bo77cU6xCl2xT2xB8v%2FiALqsfUXwJi53WPfPHkdtKjl2KIZB0vlB%2B3IITivgseEnRv7fnWHxMA8eqgXDR%2FdeD%2BwoexzRF0qg3%2FCc3eXWQWwY%2FPZrS%2BaYo%2FWuKVLrfr9Tb2YhDaAzW2qNVhitg54THUnhUYYDItICzDlopa%2FBjqkAfzvZLITr10qnb4m9fokS2nymzq6LRflBxWqS8pc29xHaVmvNPpnc0MthGqY12wiNnNAHX6na3qKw7S3RZ44pH5%2F0SopgdUnMSQUNcX%2F3MX%2F4iPjxMG0T90S8nrd6zQ3iz5fQ7Ze7E1gAlZpMHEaBJtVWtVEdpHKnImpUa0AJVhQoAczd3ahVbtSHlKoDiA%2FhJQY9eNP%2F8neEuV1d68UMqDc%2BlqY&X-Amz-Signature=c4deb9ad469235f3ec32f0f3595b2eddc1608cd802370301de4d5c620e7c95af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYQARAX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb1v6yV4N%2BDiP00RTowK0bHadVBX3wO20VUxvCQm5gbgIgLfUyv0uK3KAIaDr%2FiYhn9ISPVHHl9SaqnepZ%2Bl8SwFYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIKcFGlA%2BhsPeF3tySrcAzndLhoaTaNSquiCzD8IDEFiIenvsXUkzDP9D1QBD7UgT2D%2Fld0J0hleIp5GVdpB7%2BAc2qAhbPmkiZP1BPHjQPrVRyslnIvv4AjpNcobEavVf8c4uWqJZwyFqKa%2BmRK0tn99ZMBLP1TMYKTnSzSGUDBPiVQSssUjujv7kYTCeje4Ma5lbMr4mMy5s5yu0RiZ52LQd1wkaJh5v293mAr71IjSPsUi%2FBEiuH66isJ6NlUsBsd1inawHz6PoLI1MiTaqCx7YZvxv0SzHLOd%2BsIiTZin%2BQJySN5CpqcpRGq8iRr1djQpMA9%2B6tGg1EXOr5UizXzy0idmg85chdxYtTkxxvPULPfB8GArYxXgPYc5IFdEscn4DCih4WSgy7N4PkCKZMeAJLRr9af%2F%2BO8f0jfyZK3BXGRXfghU3XaYWpoftQ1E3VvX5frj3nc879TwigNs0Mmt3uqOGXi3lLahB%2FIdhEPzkjirAADDC4qAaOcO0tkVLlpCXL5TyWK7U0S7CN7YxiLFSzed1nbJEYDQjFTZx8rxMUmUUqnniwYr2UmdCsavkcy1UmEt6Yi3V8Eckplv9HnlJF0dylYaB2YYXDOOq6loyEGIzMVuNnTS67TtKxRJ9yq4Hsl5FA1yKx4pMPC%2Flr8GOqUBEU%2Fi5uuZKBZmdwke0rnAZivsASiD6AA%2FPrJGeh%2BmVT9QY9%2Bt9tqhdStdwUQU3j5HMtmNBfHunwsYAHZdzImmq6Znpsocawg%2B6EA8m8a3g0X7prP3tVN7v7AqYAUd%2BIwrUFR2PLDcNzIIka1nNe5EBSNG9w5hJ5DpaFwSbgv9wBoi%2FdP1gNWN6onyv%2FN6yd7Gwu5BAKXx7rk5beifJbLDILHYr9Wq&X-Amz-Signature=87e0811874ef1f883b892bec58d868906d0a35fe2da10dbab6186042397ef7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNOMIZI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSQsmzpZM14ZhY2xu%2FJXLEorX40CVT82dhW%2F5a1fk%2BrAiBhem7BCy6UbHdPWVo4kJ5iem64xxj8nHwyjUEzmC8RMyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHEsAG8Ps2CdvCNr%2FKtwD0E%2F9XQHkkH%2FttgHiG5H4nhFKHEtDlXW9mqJzhqZoVLB5ZjQAvy8fHGP%2FYKG8yzTaNkU%2Fpgcx5DsaAKpUSid0vCAbZYbdjislp0EsQqlh09Ibgzi%2F%2BsLWTbrPmazachHunie6y8vduZTeNI9J%2FYSARUTlwB86zavE7YcxKgDKlGZGpgNXHHupQBqDYW%2BpS5z7JqXliLrjTYdKcxQyELJ76sIaiOqjEN%2F5zW5FKqxcGAvsRB1UnYWPwSIfSOYNGwbWG4z3l0f2N8pnZAzUam5Rg5cFwukkdr%2FHs3JLnmLpuZDUpMkImfup78Q%2FDrL0KSPjrNsoW1HOprryBVgtjeG1HWM3VKlPikF3YME%2F4VTC5a3W1SrocOdA36cz%2BCsIUfrhk86uz5W6ehaOhP7LL6a9srDjaacaHLyvFechajWwFh4ba%2BEixGArNLHv8QjZx3z50NVaurBFIKze4norNq9U6ZtG9AgdyMJghQq5tcf%2BOyxyMia8%2Fy4zDekwbqT8bErcuoACmiLNq4KyXBWlcpNrDE8TUv83Gx42JaO%2BcKvDoqDdnb3X37SNY9KB4yb%2FxNURjQdZZzghyZclvY3D3AeT6RgiEDkDm5%2FrOWUBZjvee59U4onTcTIGolfknnEwmcCWvwY6pgF6PO5WwIU4Fhtz4r6Bv08yS1O64YYTdf5DkSeQKpLBHl9FHiMVs74lpspKS3BXq45dBPH4n1wZpskkp%2BdmzpMtnng9K3rJN537GbAoAzG%2F0zgQoZqKCcfjsBWq5TKFRNBDihJ6fzA142PHExGcOwKAB5L3yjO%2FKm0faEhwJ%2B%2FDfvWdz1jCYh%2FlQKON%2FRBNT7%2Br%2ByBfDGLjEJA3B5EMhzrFsi4GN4Ic&X-Amz-Signature=90c3514c273d5dfea6d9a0a7e6ba84e0f0d4292cc6ab01d61a7d62631efeaecf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQNUTC3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSpOg%2FmjaViHt2nRTtYR%2BBplNNmQM1CGSdmx7UHlzakwIhAIUT4UaDsHkyKsUgGDLdxKPZkTRMxaC3xSV8LR9Gwxm%2BKv8DCEsQABoMNjM3NDIzMTgzODA1Igyhq%2BFnbTpedsQd%2F4Mq3AMZ7d9jU7xaMbTkOZQn1VkBa1fUlnp7lCMTGCGGIs%2FyBFvHCYVK3bvfHbN%2FNs%2Bdq%2BreQ0rtJ8Zk%2Fbny%2B%2FZu4Q1eHV61llLkAGs%2FKsoxv6xswGay8aXXvhttjvSSCq2ZTQWfSuhk%2B%2FDbDaSW%2BkKZOg6y2qbQLYKCV0liu2qzrYwwnuvBwJmT1Q2dEiPFFUbZv28mA1qVDRCdl%2BWCzxyO6Zv8ZpLgh6UNKQJs91SaDf6SMsR20utktijX5g8Z2dVSOrU9VIQVIe96xoLuZ%2FsZc3REBoLZDyg%2FKhh8CwXL1%2BQ1IPhJGQOHtX7wNG%2FwV6Uk5K7U9X%2BIIzfmKFfzuTkCzzhEbb7zlgUjqJEGvhMfXJm04UmorwDsYV8FzUUDVTLPaQfKmmcDWWJihEcl0A%2FiF07PHUm0k%2Bp3%2FLHVxmvcUYZSnLdAnIyzyHjldQVJZQzIko9VFi2xV78YW1HTkhO9vAkO5z8bh%2Bo77cU6xCl2xT2xB8v%2FiALqsfUXwJi53WPfPHkdtKjl2KIZB0vlB%2B3IITivgseEnRv7fnWHxMA8eqgXDR%2FdeD%2BwoexzRF0qg3%2FCc3eXWQWwY%2FPZrS%2BaYo%2FWuKVLrfr9Tb2YhDaAzW2qNVhitg54THUnhUYYDItICzDlopa%2FBjqkAfzvZLITr10qnb4m9fokS2nymzq6LRflBxWqS8pc29xHaVmvNPpnc0MthGqY12wiNnNAHX6na3qKw7S3RZ44pH5%2F0SopgdUnMSQUNcX%2F3MX%2F4iPjxMG0T90S8nrd6zQ3iz5fQ7Ze7E1gAlZpMHEaBJtVWtVEdpHKnImpUa0AJVhQoAczd3ahVbtSHlKoDiA%2FhJQY9eNP%2F8neEuV1d68UMqDc%2BlqY&X-Amz-Signature=0886819065645e42f7735394a057c9fb3d6ae5e33215e57bb4f2dd3ebd7c03c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
