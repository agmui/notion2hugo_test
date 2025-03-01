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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGJJDCI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHx5qtVJdOEw4Drb%2FF28QYbgGdazYsYyG94z7JwYy5qUAiBD0WpXUtl3WCwxbMdxQgd36wawP9Go9mS5GKwNL5IRjCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5a6pwcHRGmv%2FlkWKtwDqCDNKEdx31w6Kf0MOO2wgz9lMxc%2Bqzf%2FQArB2oMtEMUmCfzdqliHEi0i4FZvTetltxvSwOlPCpYXmOs7P5QzemlDN06WgN8w93GzaxQ0MLHPq%2BNjy4UuesMa6Hd6JOBtDtOllfSEhaXHFtkh5fp%2BE%2Fsu%2BjIqUghH4xXoNkAvCTr6MCitUBO2s%2BTPwcncueNij1GeXZRhSQSptPQ6NirDtaQ4exYRVQCStJe4sgWZZgkCluRoQbOuxlOXVHSFGyLaLio42Rf0JEPGOdC%2Bfg0K4em9qz1OwfNd48z8MXNAVs6IOYzUMsD%2BVEzxs3tOF56GyGfgFDisYayf55GJnR3x5%2FUIzp3ZXOr897THcN%2F%2FKhBagowbds6%2BTf7Kr3VGG%2F0I8mT02wYKvtAxSeG3cJaF0oez%2BiMBAewY4Mg0YsP%2BpScX46DZCYC5vXartBqw9GNAo%2B3UPDhEpnIiF3gbyQ6Pjn%2BlLedPl5ciEyDLQcEjV4JAi0%2F8mtu9KebTbmHZIOdH29oyy8V3madc2FYsWKG3UgkRFF17p%2FzbQOrNhC7qsf7sRD67qnHP1%2FnKpJ44mdY%2BMuaNx7ZYsHt2XGY24whzlCkKtfThCyhHIgUQxv6pAmviaJBpfDhGHThihIkwlLqLvgY6pgHC7XKcYYHQhxLGQ7u8%2BCh47RjfecVF8hg8r1oOpvvhijGMKtzVBNHwBNPBmAeay2n3b61ur8BlBQELmSSRXOEY9IMtp6964Cdv9B7RgjPuse%2FFX9ri6kR4zuetmkvXzwr%2BcUK3TLbkjx%2BdJOtBVlbCMbTup8qP7WoRwq874kcIscR051Lu695kihL939Wf5xZpHzMdsby8xTmZydDx91Dkipp7albI&X-Amz-Signature=030dfde6871952fb671e4612caf6535a5627000418e09618aa9c6034b01fbc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGJJDCI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHx5qtVJdOEw4Drb%2FF28QYbgGdazYsYyG94z7JwYy5qUAiBD0WpXUtl3WCwxbMdxQgd36wawP9Go9mS5GKwNL5IRjCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5a6pwcHRGmv%2FlkWKtwDqCDNKEdx31w6Kf0MOO2wgz9lMxc%2Bqzf%2FQArB2oMtEMUmCfzdqliHEi0i4FZvTetltxvSwOlPCpYXmOs7P5QzemlDN06WgN8w93GzaxQ0MLHPq%2BNjy4UuesMa6Hd6JOBtDtOllfSEhaXHFtkh5fp%2BE%2Fsu%2BjIqUghH4xXoNkAvCTr6MCitUBO2s%2BTPwcncueNij1GeXZRhSQSptPQ6NirDtaQ4exYRVQCStJe4sgWZZgkCluRoQbOuxlOXVHSFGyLaLio42Rf0JEPGOdC%2Bfg0K4em9qz1OwfNd48z8MXNAVs6IOYzUMsD%2BVEzxs3tOF56GyGfgFDisYayf55GJnR3x5%2FUIzp3ZXOr897THcN%2F%2FKhBagowbds6%2BTf7Kr3VGG%2F0I8mT02wYKvtAxSeG3cJaF0oez%2BiMBAewY4Mg0YsP%2BpScX46DZCYC5vXartBqw9GNAo%2B3UPDhEpnIiF3gbyQ6Pjn%2BlLedPl5ciEyDLQcEjV4JAi0%2F8mtu9KebTbmHZIOdH29oyy8V3madc2FYsWKG3UgkRFF17p%2FzbQOrNhC7qsf7sRD67qnHP1%2FnKpJ44mdY%2BMuaNx7ZYsHt2XGY24whzlCkKtfThCyhHIgUQxv6pAmviaJBpfDhGHThihIkwlLqLvgY6pgHC7XKcYYHQhxLGQ7u8%2BCh47RjfecVF8hg8r1oOpvvhijGMKtzVBNHwBNPBmAeay2n3b61ur8BlBQELmSSRXOEY9IMtp6964Cdv9B7RgjPuse%2FFX9ri6kR4zuetmkvXzwr%2BcUK3TLbkjx%2BdJOtBVlbCMbTup8qP7WoRwq874kcIscR051Lu695kihL939Wf5xZpHzMdsby8xTmZydDx91Dkipp7albI&X-Amz-Signature=db36408ae78f07506a8c3e5588847a383628d03ade05fcba1cc6e5184c693af1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMS577VT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD22KQxHOF0YqzrtD%2FGcIupPmx5H%2B5dwIWEOBLLMQz9XwIhAO64Rh8ndbRjkC%2Bc%2FVJ1s7Wpyu79AZg%2F%2FvhjMekx058kKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx53T8JHGdKtVjkTcMq3APeeG%2BPvy2S4wLxekXrvrIJ9C%2BPACnyx9M%2Bp5eINnPT4DXU0ilr7lv9UWeKn6Gv9thWWIkdJFi4ip9SPLOrx6ttp9Md9fso9RK1ZcUz3yC0rNvgQBf5UrA7UGNgpvOB9AtfQmKJDHPeSqiwIgX1SnAT7jW3hbkkV1iaCtZLiizUiOxuMHDaDOeNcxxx06ks%2BCNbeor%2BEJcvCfgwkiHIcOT9AEIyDYcoZpHdwo7zWdQbvErkdZsATaUIBDyf9ITMVlBeQYWkU2c%2Bn3V5lWU2bC9jQ%2FVCz%2B1JGbW4MnclK4%2FPslLuKF9g3jeFkIqNW5mt9C44Fo1IJUJMtcLB0oQdZJJo7mAVpPhQ8WD4nQGNO2YPz0AS1Y6cVeHVWHBd8u9AxYIfx9jTZ8FEbYlxHMiVHb376F5ngq7uUpPiwsiSfHz5SgaDlZIvbb2xXJZLqv4et9UWFD5kV4z%2Bo1aUV%2BpAi%2FFxfWweTYL5Lam97%2F4qwY8ynhacNnfRdoQcAMYDXgApYaeGPZVA8te%2FPORAij%2FWIejhT%2BCL7qKe%2B5kOIMhBozTtfFj46JGHSMn53MDXzSQb5MAUZ7mFGNO56io3EAvh4jpjArbwvPs9cXRcv%2BxRGO231SJKWBA5PjSBC5JHOjDVuou%2BBjqkAeyNItqNjouzPy48eUqqtxpfB6bmLZIyEb7zgSfj9siswupp%2FbW%2B3Wbp6mlH3FfA8WAmhDlOftflfQUPuUmDtbY4CtQJZouIgIPGTK%2FmKmeRmlHFvsJ8pIYZbilQjbPFgWxdvZtlZw4%2FS5B4Ad1AQ2N86TuOVrSrMxuDu6fj4SQDt3ZS8gIy1wnFvL4sfCM0J7Gu%2FKwhQRWh49YiA7JqhR73F9fA&X-Amz-Signature=ab29f749d8c8d0498712c8de407be4e021fed56344481a789ff244f12064441c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GWV5T2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDcEY8uIRt8KR7qNo%2F1xGjNbXRcxTwT0nuR7Jp4x7k4iwIhALjOSn5gscVMHEJASZ3pZCC3tkaVRYOc6isFRW2tTygqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycZ8LP7Z9kQxlxpc8q3AOyGIFDOhh9Fv7AUuI2zHQZtGTzI%2F0uSTcXWpxhZqV9WF3zruCNAyMNtoUH5YKTzpbT%2BOyljJTfzeYwZsjT1FeADQDEt0vE4ersHwaoYY6gHTbUwwHTmLQJLrlGmsv5CNEwQ0MINXfWPsOBbepWreBATHSb1YVPebkGXzJ%2BwvmkuA68TFVpZsCSeyvLTBxbw08SfjIS%2BsFIdK51SetY3qVflQcDs3HLTgKddtVCWY4hQMWLCdZwRf3r3vhKo8N%2BLHWVEqK8s0l7FiY2hibh6J8N%2FuMr7F7ykRb56jD%2ByhON5xJYljMMyux07DShEsdf0Qw3t6Lv%2FvoUtjQ6OkRjpfJ22sdHvRzZF8efZG%2BdomDq%2BO%2BDlLFopw8JAvjCSDtw69eAivGa8TIu13V9DD3KfOqvVFTntHbIprwDTLBKZslp0n8FW%2BE95aQUgMIDCdRRSLgWXzb%2BUFPJa8%2BoQCF2SxxScLcfuZVZyDTxreqq4JLYMs9x8DMnZnBKsz5mai4FP1N2%2FIJiB%2F1gX4qXL5zre%2FJqnE%2Fm1%2Fhecxz9bSSeuCkkV54muu0lJVF7yVSY7Jf7Z8dogmhrl%2Bsmn7qvP1D%2FCozXy5JxuvWYQPLyJ6WxW%2FmhkfqDgKQYAHzVaAUjEjDDuou%2BBjqkAaK5k1RIe7nmPsaAACX2HDjgWqcSiEx%2F3x%2F1LFRPI3SoR9vizTPIKtqRyXLbTg4WBK%2FMzbqIqzilBF90Lr2%2BFvKCKHIqFZoG5Aeiw1L9nPsu%2FSUkOqjTU2s3AZBUniNBfNHRXtSQK8BoCZ8RerHclq5LF08VJWq%2B6k4yvcgOGzOyytNJ0F4x4B%2B4DtJeG%2BEpS25fmJwobLUD6RZGseHZQsEDo4Pg&X-Amz-Signature=a43fc6a4093c62c8438dd603fd0e462313af03c4eff1c3f80594a333df3e6088&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGJJDCI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHx5qtVJdOEw4Drb%2FF28QYbgGdazYsYyG94z7JwYy5qUAiBD0WpXUtl3WCwxbMdxQgd36wawP9Go9mS5GKwNL5IRjCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5a6pwcHRGmv%2FlkWKtwDqCDNKEdx31w6Kf0MOO2wgz9lMxc%2Bqzf%2FQArB2oMtEMUmCfzdqliHEi0i4FZvTetltxvSwOlPCpYXmOs7P5QzemlDN06WgN8w93GzaxQ0MLHPq%2BNjy4UuesMa6Hd6JOBtDtOllfSEhaXHFtkh5fp%2BE%2Fsu%2BjIqUghH4xXoNkAvCTr6MCitUBO2s%2BTPwcncueNij1GeXZRhSQSptPQ6NirDtaQ4exYRVQCStJe4sgWZZgkCluRoQbOuxlOXVHSFGyLaLio42Rf0JEPGOdC%2Bfg0K4em9qz1OwfNd48z8MXNAVs6IOYzUMsD%2BVEzxs3tOF56GyGfgFDisYayf55GJnR3x5%2FUIzp3ZXOr897THcN%2F%2FKhBagowbds6%2BTf7Kr3VGG%2F0I8mT02wYKvtAxSeG3cJaF0oez%2BiMBAewY4Mg0YsP%2BpScX46DZCYC5vXartBqw9GNAo%2B3UPDhEpnIiF3gbyQ6Pjn%2BlLedPl5ciEyDLQcEjV4JAi0%2F8mtu9KebTbmHZIOdH29oyy8V3madc2FYsWKG3UgkRFF17p%2FzbQOrNhC7qsf7sRD67qnHP1%2FnKpJ44mdY%2BMuaNx7ZYsHt2XGY24whzlCkKtfThCyhHIgUQxv6pAmviaJBpfDhGHThihIkwlLqLvgY6pgHC7XKcYYHQhxLGQ7u8%2BCh47RjfecVF8hg8r1oOpvvhijGMKtzVBNHwBNPBmAeay2n3b61ur8BlBQELmSSRXOEY9IMtp6964Cdv9B7RgjPuse%2FFX9ri6kR4zuetmkvXzwr%2BcUK3TLbkjx%2BdJOtBVlbCMbTup8qP7WoRwq874kcIscR051Lu695kihL939Wf5xZpHzMdsby8xTmZydDx91Dkipp7albI&X-Amz-Signature=a872c4bebab8194b41c113d526457e3265c76d8dbd689eeb1cfab4dfaacf400d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
