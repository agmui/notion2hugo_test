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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFH6O4X%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCSmkOTtyDpNR7gG50SKNWBDAteK4AHfjYPse5nAdxgIhANTYF2bhsZkDEWF58JKH6zXsOGFNQfsNo7AVV28%2Bs9aWKv8DCGAQABoMNjM3NDIzMTgzODA1IgxE%2BCAZaaFRnF7D2Kcq3AM8miCd46HduXB2Oc3SVAe8yedkfcfVInXztcs9aHOa9OrH2Q%2BoJaq0W05MUK0f7336pxG0hMvH3TwbOGk7WKEnv%2BDNLjAeHX%2BN1uKjVqkltWUFz0DKE0ON9VeQlFqT9kqSTsvTq5EmsOacfUiiAO7RaaTaRDT3%2BDJOmBq4S53MGZ5kdpbjx%2ByfSi6R368Zjz3k5FHZ5Sdp6HEVrG89D3h0SXOtRtqNEy0%2BGxaxy7nlekoi91acPmog6032ssZLVwIbVtbmtPnpdQa4J89cX3lbAv5VmxkQ%2BnRVWIh5P001fZtS1SK%2FnRxSvc7NjkJb1dVCfnwoDBk1wS0IrvEsSRkkw1hsOc2D5j5Jw9c4VvOi49aFergC4K2SVX44m5J3I134N4hVXHR9Q3QrJ%2FeO8flx9%2BoUe1MHaKW2RW40KGtNoOVWMmIOJhBr4ySP7uF2ouSQiKVtIwuHtsRSP4H%2BMbcVl%2ByngJ2mtr11aV1bpVOA3C8NKVJQ9m%2BzEYAQNoPLDkJuNUIbIfKSCt331Mrt3Q7imZzgUrauPf7O2vefAIE6lJec9p0BbGMJa%2Fqb2fy%2BrvYQMwfOuqM2Pujfha8Otr71adptepF7IiQ0fiolaHBn7AJ5gh9iabGmLur%2BazDoypPJBjqkARa4MoygcEWGmg%2FQkFaBN2w0zcggbGYDzn7feGEIfNKdwMckev3%2B43r0XAxnfG8CVpSyebgOxsHFB4AiLfDkdeSzx9X5zwOx%2FVlZqMqtaFw%2By4fWXNsjRa%2F1XceDG6kn0uNb9lZiI1C%2Ft%2FvS%2FQGHqcTeYV0OlBHGD%2BpzJs1jGDdbCWCi%2Fhj1Tyg7O2Mp%2BcoykbDvoCnlHGBDYuk2a2jEY9G7%2Bwch&X-Amz-Signature=12cbc9cfe9326a4ea780bada8f8c1cfc6484335ba428b6ae500688cf84eff756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFH6O4X%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCSmkOTtyDpNR7gG50SKNWBDAteK4AHfjYPse5nAdxgIhANTYF2bhsZkDEWF58JKH6zXsOGFNQfsNo7AVV28%2Bs9aWKv8DCGAQABoMNjM3NDIzMTgzODA1IgxE%2BCAZaaFRnF7D2Kcq3AM8miCd46HduXB2Oc3SVAe8yedkfcfVInXztcs9aHOa9OrH2Q%2BoJaq0W05MUK0f7336pxG0hMvH3TwbOGk7WKEnv%2BDNLjAeHX%2BN1uKjVqkltWUFz0DKE0ON9VeQlFqT9kqSTsvTq5EmsOacfUiiAO7RaaTaRDT3%2BDJOmBq4S53MGZ5kdpbjx%2ByfSi6R368Zjz3k5FHZ5Sdp6HEVrG89D3h0SXOtRtqNEy0%2BGxaxy7nlekoi91acPmog6032ssZLVwIbVtbmtPnpdQa4J89cX3lbAv5VmxkQ%2BnRVWIh5P001fZtS1SK%2FnRxSvc7NjkJb1dVCfnwoDBk1wS0IrvEsSRkkw1hsOc2D5j5Jw9c4VvOi49aFergC4K2SVX44m5J3I134N4hVXHR9Q3QrJ%2FeO8flx9%2BoUe1MHaKW2RW40KGtNoOVWMmIOJhBr4ySP7uF2ouSQiKVtIwuHtsRSP4H%2BMbcVl%2ByngJ2mtr11aV1bpVOA3C8NKVJQ9m%2BzEYAQNoPLDkJuNUIbIfKSCt331Mrt3Q7imZzgUrauPf7O2vefAIE6lJec9p0BbGMJa%2Fqb2fy%2BrvYQMwfOuqM2Pujfha8Otr71adptepF7IiQ0fiolaHBn7AJ5gh9iabGmLur%2BazDoypPJBjqkARa4MoygcEWGmg%2FQkFaBN2w0zcggbGYDzn7feGEIfNKdwMckev3%2B43r0XAxnfG8CVpSyebgOxsHFB4AiLfDkdeSzx9X5zwOx%2FVlZqMqtaFw%2By4fWXNsjRa%2F1XceDG6kn0uNb9lZiI1C%2Ft%2FvS%2FQGHqcTeYV0OlBHGD%2BpzJs1jGDdbCWCi%2Fhj1Tyg7O2Mp%2BcoykbDvoCnlHGBDYuk2a2jEY9G7%2Bwch&X-Amz-Signature=3c0af9b810182d2ae82ff6d7f1d1cc0a5d98b32462719f52ebbce324c8aa9a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFH6O4X%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCSmkOTtyDpNR7gG50SKNWBDAteK4AHfjYPse5nAdxgIhANTYF2bhsZkDEWF58JKH6zXsOGFNQfsNo7AVV28%2Bs9aWKv8DCGAQABoMNjM3NDIzMTgzODA1IgxE%2BCAZaaFRnF7D2Kcq3AM8miCd46HduXB2Oc3SVAe8yedkfcfVInXztcs9aHOa9OrH2Q%2BoJaq0W05MUK0f7336pxG0hMvH3TwbOGk7WKEnv%2BDNLjAeHX%2BN1uKjVqkltWUFz0DKE0ON9VeQlFqT9kqSTsvTq5EmsOacfUiiAO7RaaTaRDT3%2BDJOmBq4S53MGZ5kdpbjx%2ByfSi6R368Zjz3k5FHZ5Sdp6HEVrG89D3h0SXOtRtqNEy0%2BGxaxy7nlekoi91acPmog6032ssZLVwIbVtbmtPnpdQa4J89cX3lbAv5VmxkQ%2BnRVWIh5P001fZtS1SK%2FnRxSvc7NjkJb1dVCfnwoDBk1wS0IrvEsSRkkw1hsOc2D5j5Jw9c4VvOi49aFergC4K2SVX44m5J3I134N4hVXHR9Q3QrJ%2FeO8flx9%2BoUe1MHaKW2RW40KGtNoOVWMmIOJhBr4ySP7uF2ouSQiKVtIwuHtsRSP4H%2BMbcVl%2ByngJ2mtr11aV1bpVOA3C8NKVJQ9m%2BzEYAQNoPLDkJuNUIbIfKSCt331Mrt3Q7imZzgUrauPf7O2vefAIE6lJec9p0BbGMJa%2Fqb2fy%2BrvYQMwfOuqM2Pujfha8Otr71adptepF7IiQ0fiolaHBn7AJ5gh9iabGmLur%2BazDoypPJBjqkARa4MoygcEWGmg%2FQkFaBN2w0zcggbGYDzn7feGEIfNKdwMckev3%2B43r0XAxnfG8CVpSyebgOxsHFB4AiLfDkdeSzx9X5zwOx%2FVlZqMqtaFw%2By4fWXNsjRa%2F1XceDG6kn0uNb9lZiI1C%2Ft%2FvS%2FQGHqcTeYV0OlBHGD%2BpzJs1jGDdbCWCi%2Fhj1Tyg7O2Mp%2BcoykbDvoCnlHGBDYuk2a2jEY9G7%2Bwch&X-Amz-Signature=ab104d5b59ebf18c42f212863d5eb639883e16eb9a6520288a85ffe0d495bb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UC6KLF4%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqRNA%2B8wBAiJq575wsf%2BThdFvB%2FEmQ%2Frxvmxwpyw6J5AiEA1c1XWQdhV22QkjGDjud5ri8vyjqpFtfIvRuKrrOYEuAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHGNEJOMlvtHnYBLfyrcA5s%2BhEpLdyHactYrkHK1dP%2BCl2z7swp2u16GbUnS3xAaxGqEBT77Y6GeaDexxRRM7oWi4DyoDzQ6Brg3ScN3857RfWPqY2pU0uMdLIn5XNJC2vYsNjyxn9egupE%2BGt57rZO0RulpQlDu21uwJC%2FFPrskEgBTQTqbVRv7%2FPywNqQXem3wspE5u2rsGLfI1jOu%2BMG%2B%2BxEPqhVjo7onwo21MnIijKzVcc9KZ22FUxbsSZVXuB1yrhPhywSvyvnc%2BzhY7XblYlvirQBhb0XYkb13yImU1BwQ%2BEI0L2oHgORFQbHaVuZgFOVzkEQO3F3YU033nlolroeCNUifVTOWxkiCbGmvrzlW%2BwBau8XLOg%2FqfO0i%2BGnreI7nAlWx1Ql%2F%2F0XFZ8TkGii64AWjm5lfbSpWnVZWI%2B6eQ7WP%2FXoF8MnF1qKyreigCemTY4sTBrhPkFvg%2FBd9%2FvASBYP5xd0jRKH8jwe834kV3g2XMK8KOg7N90itqQvy5sPW7uWnFiDfhg7ym4nTjgfRsN56rLvhhLJ7SsVwF7emM%2Fe6iAnjk7y%2FTv9Zz%2BYmIHIIX%2BSXUZytEYiCg%2BCjDV0za4xC2tEaIKaan1dtuI%2Fcs5dAih8rtrtuITTMN%2Bg8tMYzZpqgh2xnMI3Lk8kGOqUBxvj6vYzMUDhmU%2FKhF%2BS9doJSMzHcyAoySnFt47NUVuyuPzz4y4BgrUadFIqYPGf6cBgLD4jtPPFiySqVKal3Wgq7NsxOsvKmVuvJDEMu77x2gTtgqifV6OKBg8UTilPeBEjH2%2FSO9gnrgwqZ%2BqMpVEj9JCe8JwZrULrUxXHZmlhYsiRVXH3IEuWEpOpue%2FbtFwZDNGHS7DkIrA%2B5t6xiqcjvYKth&X-Amz-Signature=fbe2a5a988f009a96a4aee24253e0d260341d8fdd445e0ad6d7aa49f92fe44b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWEWK2HS%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxClrtRLFhguSdI4jsu1hgdJPGluKrFdlEg%2FiRMQLyJQIhAJPJt6J40PQmnHmgdr99zIZXfvUbPdJpHZ337aoxvsmYKv8DCGAQABoMNjM3NDIzMTgzODA1Igx66y2ZNIihR5y3Hsgq3ANcksTN6lruStdphluPC9wvQvtd3r%2BhXag%2BVxnrm%2FcOki1Q0hkMcfrI5o7AGPxsT07nsF%2FCdVWoj66YciXOZbtOYuwOLjfO3qB%2BZfZTYCryE2ffvDk9d7KeLWATv%2Bks9GHDopS3hJcc%2FufkUmtMz6dUIJAeo6uPATowEzDqDDTGxD126K2o2kserNz%2F0DU3RLX9rd5mswecGPYaxyhNvo7qmWmvV4FQA2ir5U4hAKL0RvYwfXcYpVxB2kemNc2gUdREofc4B3DEr8S%2BxeihO3BVg1tatc9MuPo24YtZ%2BP%2FqET3u%2FDubrFNsZjOlOTYt7sA%2B1VZEnbtTYR7fBfYXz5g8uTQYCdRoHpfFXPn%2FEHosM6788P6ltEiZnJkapnfUGE1deqtoJz8Wj8NZeDySwxhX%2FUGotYSfZRYAGYWbCtfHI%2FxOrSnJ%2FJMCx7KeeNksQ6Y4khDMxkJOoZcYBl9VrC4wc93z0Vki4%2BxIlxtxGi4fvrKcp8131QWWCi5zAgUNBiD8%2BmDoJPJ1n5VhiieqX%2B4lVye4HDTT1LnjVwwX7S9fXAjsExiCXPQamigY2i5rObaGXny29BXTO2YKlPtMnHI10uzRCYlUvJ2L9rUYsVCCXu9gD3kneksOhRxJtDD5ypPJBjqkAUThr9GC80U%2BfH4n6q%2Fk1eZyN6ea3iJ0ponHThfmp87w9xqv0%2BWJjIHvH8stdIZ%2BAfqWlsSMnmILBKc5If9fJvQf7OM%2Foc%2BhJtlwKOKuowRDW8%2F7cM%2Fnrp3ExnIPGLS0yqx8qydFOOB1pgIK2soauPgkIT4IstNPUQVEADGSOmzjr9YmPYjjeKspBIGB7bUpX6iZmp4G8L5%2BAF5NeK4M3vwDuBtJ&X-Amz-Signature=46472f715cbaf74c51157921e11afd11c89840c51e9eae3ec6f370c3b58a01bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFH6O4X%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCSmkOTtyDpNR7gG50SKNWBDAteK4AHfjYPse5nAdxgIhANTYF2bhsZkDEWF58JKH6zXsOGFNQfsNo7AVV28%2Bs9aWKv8DCGAQABoMNjM3NDIzMTgzODA1IgxE%2BCAZaaFRnF7D2Kcq3AM8miCd46HduXB2Oc3SVAe8yedkfcfVInXztcs9aHOa9OrH2Q%2BoJaq0W05MUK0f7336pxG0hMvH3TwbOGk7WKEnv%2BDNLjAeHX%2BN1uKjVqkltWUFz0DKE0ON9VeQlFqT9kqSTsvTq5EmsOacfUiiAO7RaaTaRDT3%2BDJOmBq4S53MGZ5kdpbjx%2ByfSi6R368Zjz3k5FHZ5Sdp6HEVrG89D3h0SXOtRtqNEy0%2BGxaxy7nlekoi91acPmog6032ssZLVwIbVtbmtPnpdQa4J89cX3lbAv5VmxkQ%2BnRVWIh5P001fZtS1SK%2FnRxSvc7NjkJb1dVCfnwoDBk1wS0IrvEsSRkkw1hsOc2D5j5Jw9c4VvOi49aFergC4K2SVX44m5J3I134N4hVXHR9Q3QrJ%2FeO8flx9%2BoUe1MHaKW2RW40KGtNoOVWMmIOJhBr4ySP7uF2ouSQiKVtIwuHtsRSP4H%2BMbcVl%2ByngJ2mtr11aV1bpVOA3C8NKVJQ9m%2BzEYAQNoPLDkJuNUIbIfKSCt331Mrt3Q7imZzgUrauPf7O2vefAIE6lJec9p0BbGMJa%2Fqb2fy%2BrvYQMwfOuqM2Pujfha8Otr71adptepF7IiQ0fiolaHBn7AJ5gh9iabGmLur%2BazDoypPJBjqkARa4MoygcEWGmg%2FQkFaBN2w0zcggbGYDzn7feGEIfNKdwMckev3%2B43r0XAxnfG8CVpSyebgOxsHFB4AiLfDkdeSzx9X5zwOx%2FVlZqMqtaFw%2By4fWXNsjRa%2F1XceDG6kn0uNb9lZiI1C%2Ft%2FvS%2FQGHqcTeYV0OlBHGD%2BpzJs1jGDdbCWCi%2Fhj1Tyg7O2Mp%2BcoykbDvoCnlHGBDYuk2a2jEY9G7%2Bwch&X-Amz-Signature=104c19d3c5fa37309d8e24fbaba1a886ab22098d6dff0b989b0eec332362bdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
