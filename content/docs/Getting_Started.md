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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDBML6F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGD9ut%2BKY%2Ba6OWIA3AX4qurZvcNUI9nWi3Tki3VHJ5LgIhAOT8KYbSWTmb6G5MZZrHx6WoFZ6t7ZGCA%2BttcNbtn3MPKv8DCBoQABoMNjM3NDIzMTgzODA1IgxGekzBDCqqO6L19hoq3AM5ucRKm3yhabCX8YSBGc9itQhNE1dAYoZgfjSZj8522e%2FJNNpOVLFT0rXW3Cv0BjQH%2FoZvMO6unpQGN9YTZEIJ3AAEAE1zyZ7WANVk3RTjRbUMqIDzb3YI3hMT7liQGrwabigS1DAby4K2LvuFOxmNlqpi8B5JY424wR7RACHCB6v%2BXWx9mbMjY8fuJlfRzuLHtZ2q4%2BObRYzwmCBApAz%2BO%2FvRUB75vEeZv7mkqP3kVzu8T0SaHsE3dVUOePA67%2FMeAfX2%2BXbQc8sSc8ih30bHzZpGaKf19XsE5RNUxfsU9zn9lEF%2B8rBdWP3HtVWOxnRiB88WTvQB80Ds8eWIP8lfAv2fLbom16w%2FHnY2lnJtpY0glGNJu61YkoXkKBxBE8yjD%2BzloVPDWqGP1m6yF%2Fkljob5hjrLoqUi9aOKDsIUIGvaQ5KgWt2fiAonEB4q5Uvrhie2XiKgZvQcsHz5%2FOrtnskznHxAHpqmvjxU13NfpJuKQM4xXKd%2F9wYwC83SK7FEdj1UDX5eRh3bxHPU%2BuLb%2FGhQy%2FVaE5cO5JtH8%2F3NSJxhFDwmLYTK9fFyv29tMazn%2Bl%2FXO8cM%2Ftu3THMR2HkUklKBBqWPOjdh7YfQoeph%2FaSImlY5H8TO%2F6vJqTCIncC%2FBjqkAV2bXNICW74Ci%2Fcm%2FRZuZvspjKuo7V6wehsLSCQmJcVb0%2F0X%2BeyOiZwrrNHi3UmaPvzcA34IXTaamTr6T%2Fg%2BeSFiJLXZJ4a3gQArFUa9Fq%2B%2FumQuNxHNtYP5y2Ml9l6eiDhXrlVV5nxYxLNSEsANM1lNLQ2L2f5doxBi19kCSBmRuKfjqmJZW8f8UO61%2FJGupLq4qFRIeWc%2BDw94D2OYRZ7HOg%2FE&X-Amz-Signature=a899a52a4317bb59ff123bf0223df5c3267d39cb3a1e5c4c41dc10c06a06b397&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDBML6F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGD9ut%2BKY%2Ba6OWIA3AX4qurZvcNUI9nWi3Tki3VHJ5LgIhAOT8KYbSWTmb6G5MZZrHx6WoFZ6t7ZGCA%2BttcNbtn3MPKv8DCBoQABoMNjM3NDIzMTgzODA1IgxGekzBDCqqO6L19hoq3AM5ucRKm3yhabCX8YSBGc9itQhNE1dAYoZgfjSZj8522e%2FJNNpOVLFT0rXW3Cv0BjQH%2FoZvMO6unpQGN9YTZEIJ3AAEAE1zyZ7WANVk3RTjRbUMqIDzb3YI3hMT7liQGrwabigS1DAby4K2LvuFOxmNlqpi8B5JY424wR7RACHCB6v%2BXWx9mbMjY8fuJlfRzuLHtZ2q4%2BObRYzwmCBApAz%2BO%2FvRUB75vEeZv7mkqP3kVzu8T0SaHsE3dVUOePA67%2FMeAfX2%2BXbQc8sSc8ih30bHzZpGaKf19XsE5RNUxfsU9zn9lEF%2B8rBdWP3HtVWOxnRiB88WTvQB80Ds8eWIP8lfAv2fLbom16w%2FHnY2lnJtpY0glGNJu61YkoXkKBxBE8yjD%2BzloVPDWqGP1m6yF%2Fkljob5hjrLoqUi9aOKDsIUIGvaQ5KgWt2fiAonEB4q5Uvrhie2XiKgZvQcsHz5%2FOrtnskznHxAHpqmvjxU13NfpJuKQM4xXKd%2F9wYwC83SK7FEdj1UDX5eRh3bxHPU%2BuLb%2FGhQy%2FVaE5cO5JtH8%2F3NSJxhFDwmLYTK9fFyv29tMazn%2Bl%2FXO8cM%2Ftu3THMR2HkUklKBBqWPOjdh7YfQoeph%2FaSImlY5H8TO%2F6vJqTCIncC%2FBjqkAV2bXNICW74Ci%2Fcm%2FRZuZvspjKuo7V6wehsLSCQmJcVb0%2F0X%2BeyOiZwrrNHi3UmaPvzcA34IXTaamTr6T%2Fg%2BeSFiJLXZJ4a3gQArFUa9Fq%2B%2FumQuNxHNtYP5y2Ml9l6eiDhXrlVV5nxYxLNSEsANM1lNLQ2L2f5doxBi19kCSBmRuKfjqmJZW8f8UO61%2FJGupLq4qFRIeWc%2BDw94D2OYRZ7HOg%2FE&X-Amz-Signature=f42b2e010dba499a6aabe1204ade456a69386af06c81cd8363ab42db4e84fa0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DKLSQB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2aImcxSSuNh3leg3%2Bh0yJShTya06xwE5D8%2ByjSuyehAiBVPdRXjM1jUMZ0RDrK9AinMiXAr4r7ea%2FBVVmxmm9Geyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMYFDBmjmLtV%2FYRHbmKtwDjg3kZwOUSgvsOpuxthRS2Jev8Wbb4B39LOz4fz6xaQrUCQNSZlcZO8VH%2FKr5VEQHTNGNQJcdbQpKL3AqrHQmmVBKl1z6H8ow3X04uHaS0h4sETS6STUHEAj07Tfx2Eiyo36%2Bavy5KxpbsPEKeVd6HRCtDq85xJs54nomQIUPYV7VNWQRbDGnezqWU3mGNDmTB23pE6UWPObvq12rQhGH8OARo5yoCbU65ukkGKCCJz8SIGwZo%2Fh54gr1X7Ch%2FUvJfyqc%2FdRl0kYPXCr7qbKXR40C2d%2FNPO44L%2B36utGcD9kd%2BodDlPIzJ2A24zflMDe%2BbJeJESb3NNPJoliyzVic7NPZdd7pgNKyKJX28DzX5aQBLbvy6JPAYyVZxERh49DBLBh6QdO8g4kbZIlZaZ53D%2Fv2dH4T1shM3Z4M0p4Qtugs5W1U6AQmKV5OJONMOAd2BuAbPcltDFrXbTPAavv4d2tlU5e2xUWggBECifEDJrQ2lAuWesT%2BxS0QXKiw5Lg%2FzXpxFlC04biTsloCJZn%2F2CBSaarK5C6XRmjN6BE%2BieGVXNJ8aaosGySY29PKSgBWuZ%2F3k6rsP%2FzbnMJQIq46celvUcEkEUlFEquybJY1mkZxlw0Ugm94O%2BXW8wIwt5zAvwY6pgGQ7vPG2wo%2B9mHIo4b2IPy5%2F%2Bq8COUp6xjpTokWy19L56%2FrRA6IO%2BjZ%2Fv0OZ86vyn%2FyhRUNaqqOT0oWCaZ4EJfp%2FqcjA%2B2vgaTN9STxHYlD9sOvwbsZVidP6qEkKmL34B3sJja7JDWoSjLxozwiq%2B8EfkwnUtaYBmrzi6XwZFGNFwrFMLiphthmZbHbHxSXfntZh%2Breplv6uBPSnhZ7hEJM2B0OKpeS&X-Amz-Signature=d46ed2cc2347995a26732558cddd2922f32cb25e433fc9c35df6de2b7b5b2bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU62WIRP%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbKM%2BKB0g%2FyMd0F4odms1YqHyvncjOYKMM%2BMyEJ7YcxAiEArSA%2F3pWDjtz6VflsjL8k5njydpDgu7Xj8hbT2bR2arYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNBrlMLJvuxKlbWVKSrcAxNxfo0NtFhc2jXSL9UPwL%2BkAOeY1gvVZnBFQNDrHmxsWkQvK1EoekSd9XxHBbtF0fPn%2F9rN%2FAy7VdHKmrVaBsf3cHwTuk9GlmbhS6CKs%2BdBqzXvnJkZsloWfVNfrb4QJMhejsNwdt0BXiaP%2F2C5hd%2B1%2BUwLPqCBEd36Rkt1wA%2Be3FY7LbmmJ4vM0D60N0B9YPhl6bzIb9CsEuIIVqgJl4aMEYCmbGDFtWp6y0ZCMm4xGoTvutj7CvdAv%2FQjOdwozHrViJXcotON3dL10dr8KJRfrK2Voebd%2F5hvfBDyWd%2BZBX7qbQN58EgkfsuVc1Y1QRuuAOwnl5WhxzfV3mwO%2BPF1LE%2FS1Ck0zLIGBLBOO8%2FaF%2FQ%2BhdaFp8%2B%2FtRAu%2BTbqBnkSVfBTlvmSm2Klr5QIKfd%2BZo1ip50skargCjAt0BpM6t1KWtoDBK3oxkiLWostQp03jNBigtGHugzcSIfJm7Q6oZ9%2Fa96Q9BJekL0MiArAQHYtxEBvaXQorfmTPD489cobn4ZHuuMRR9yR64NXpOjpW9dIxhPG5YA%2Big6IqhXBY6gSEUvRE5fNYxxRuClN26tLDkTAUUwu39wPv4pkiowbZEZ9vNs3AzdcSC1Hr5UzpVwYkNKtTfQRbZSlMLudwL8GOqUBk%2Blb2Sm%2B5iw5QC4Gw3zzROBBTeVtcozur9JmXSr0jiW0rPlx3ZesvChOzTYD4US%2FkCqtKbTccxVKm4xQS0UBW4MhSAchz0DciKwG5JZ1rkOXt%2Bcbp2lVVSrF%2FVWp3MBSjm%2BIK7zQs5MN71FA5bvKlumsSn5Nce2rK9nlZ3rg99NZfX8GZ6j43eeLR4xnL5p9HgN4kaDilGeR2owww7k5Jv5IwPpc&X-Amz-Signature=3b315a76cb54adfc0ceefe4efccbd8ff73a2e9706a5a73bb1e695cc27cdda986&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDBML6F%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGD9ut%2BKY%2Ba6OWIA3AX4qurZvcNUI9nWi3Tki3VHJ5LgIhAOT8KYbSWTmb6G5MZZrHx6WoFZ6t7ZGCA%2BttcNbtn3MPKv8DCBoQABoMNjM3NDIzMTgzODA1IgxGekzBDCqqO6L19hoq3AM5ucRKm3yhabCX8YSBGc9itQhNE1dAYoZgfjSZj8522e%2FJNNpOVLFT0rXW3Cv0BjQH%2FoZvMO6unpQGN9YTZEIJ3AAEAE1zyZ7WANVk3RTjRbUMqIDzb3YI3hMT7liQGrwabigS1DAby4K2LvuFOxmNlqpi8B5JY424wR7RACHCB6v%2BXWx9mbMjY8fuJlfRzuLHtZ2q4%2BObRYzwmCBApAz%2BO%2FvRUB75vEeZv7mkqP3kVzu8T0SaHsE3dVUOePA67%2FMeAfX2%2BXbQc8sSc8ih30bHzZpGaKf19XsE5RNUxfsU9zn9lEF%2B8rBdWP3HtVWOxnRiB88WTvQB80Ds8eWIP8lfAv2fLbom16w%2FHnY2lnJtpY0glGNJu61YkoXkKBxBE8yjD%2BzloVPDWqGP1m6yF%2Fkljob5hjrLoqUi9aOKDsIUIGvaQ5KgWt2fiAonEB4q5Uvrhie2XiKgZvQcsHz5%2FOrtnskznHxAHpqmvjxU13NfpJuKQM4xXKd%2F9wYwC83SK7FEdj1UDX5eRh3bxHPU%2BuLb%2FGhQy%2FVaE5cO5JtH8%2F3NSJxhFDwmLYTK9fFyv29tMazn%2Bl%2FXO8cM%2Ftu3THMR2HkUklKBBqWPOjdh7YfQoeph%2FaSImlY5H8TO%2F6vJqTCIncC%2FBjqkAV2bXNICW74Ci%2Fcm%2FRZuZvspjKuo7V6wehsLSCQmJcVb0%2F0X%2BeyOiZwrrNHi3UmaPvzcA34IXTaamTr6T%2Fg%2BeSFiJLXZJ4a3gQArFUa9Fq%2B%2FumQuNxHNtYP5y2Ml9l6eiDhXrlVV5nxYxLNSEsANM1lNLQ2L2f5doxBi19kCSBmRuKfjqmJZW8f8UO61%2FJGupLq4qFRIeWc%2BDw94D2OYRZ7HOg%2FE&X-Amz-Signature=cec0a286e2e52ec4ddda4caef28436ad34bb4f883c0733f25922efa6ba0baab9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
