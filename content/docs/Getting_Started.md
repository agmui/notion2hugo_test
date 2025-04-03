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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7635FU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8fyYYDlaxiy57C017xvc3AmTjFLNi6AK3Y4u4gi5TcQIhAMSTgcLlNh8PUVvHXQ0oQG7R8owj4kNvB6E9YsENME%2BPKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHWaSp85xbVZiaGSAq3ANdGCUENBxL6wNwDZP0IUDln%2F9v4ikDaCCLuxWRArygXLLQKYau00sKiSi3L5ySNHVljyuBw9t8KNk7vp4nFSjcFcuY7nBRJVUmrIX5eir%2BJ7bUI%2FfVIQ%2BJ5TfQeGDQvCIbGL7Uu7K%2FCu1KXuJ50BHm115LnxVaFSqHX5iQNuWKGUohliz5vnKASEfNbHQ87KYjE6anJsaBulIJyqTKmsZ%2Bwif4F6NWckEv61v7nEBHQM9qhS4dVyobjIDcWv5EpEeSr3E2%2B7OBb1jYiVNvp1FMdA8HwzdAz5cgCzHOojgnI%2BoWfLKPU6rII47k1zWAqHsGZ9RZEAhFgHMffwewl6%2FNCCTb4XikuoqLs5RWGFi%2FSgKyVhOwn4%2FFaWqPrlPRZw7GtwJW4HDKqoNTWGw69%2B65MRIg4%2FKtCjS%2FjpSA5GehlZPHIFBTWirra5FjBsi2RQSAf31OnViZChLXAvoO%2Bzibc4VE3QgV7FOVuoNO5d7MePEpj1nSsmnf0tbFpXfbhHzzyz7eAn1h%2FnOiwGOJi5RNyRkWLRkdL3VLZbluxfZ1utgTK%2FzgfZjB3EQtQzDKQLJvkCQpMoV1bagKNdP4jDalvisDYr%2BIjbLLRkKhxQmp5TGwIcUA%2FMs6kgSltDCel7m%2FBjqkAQaDTP6z5ztL2fo4zCh6T6xcGhftUJho4JZb7HVTvx%2BAqfvdOkVC51Iw5ukhXkvAi7WhVzU%2BYQFdBgu0kEtF9%2BZNlTmVnMWVEgDBYS5LdB2s8pv1piueJieHF9y791XgCnDcl46mumPBowIZ809VYb2U4lSsmFDX5RpXlwwbx5w1ATWQ29eAPefOdtTBf8z5lVAbYXjfaOb59mSRcRUW80bYNReR&X-Amz-Signature=cb9a4f18c145d36e8647e7886bc54c26989322e1b62b715006a9ddc71775cdaa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7635FU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8fyYYDlaxiy57C017xvc3AmTjFLNi6AK3Y4u4gi5TcQIhAMSTgcLlNh8PUVvHXQ0oQG7R8owj4kNvB6E9YsENME%2BPKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHWaSp85xbVZiaGSAq3ANdGCUENBxL6wNwDZP0IUDln%2F9v4ikDaCCLuxWRArygXLLQKYau00sKiSi3L5ySNHVljyuBw9t8KNk7vp4nFSjcFcuY7nBRJVUmrIX5eir%2BJ7bUI%2FfVIQ%2BJ5TfQeGDQvCIbGL7Uu7K%2FCu1KXuJ50BHm115LnxVaFSqHX5iQNuWKGUohliz5vnKASEfNbHQ87KYjE6anJsaBulIJyqTKmsZ%2Bwif4F6NWckEv61v7nEBHQM9qhS4dVyobjIDcWv5EpEeSr3E2%2B7OBb1jYiVNvp1FMdA8HwzdAz5cgCzHOojgnI%2BoWfLKPU6rII47k1zWAqHsGZ9RZEAhFgHMffwewl6%2FNCCTb4XikuoqLs5RWGFi%2FSgKyVhOwn4%2FFaWqPrlPRZw7GtwJW4HDKqoNTWGw69%2B65MRIg4%2FKtCjS%2FjpSA5GehlZPHIFBTWirra5FjBsi2RQSAf31OnViZChLXAvoO%2Bzibc4VE3QgV7FOVuoNO5d7MePEpj1nSsmnf0tbFpXfbhHzzyz7eAn1h%2FnOiwGOJi5RNyRkWLRkdL3VLZbluxfZ1utgTK%2FzgfZjB3EQtQzDKQLJvkCQpMoV1bagKNdP4jDalvisDYr%2BIjbLLRkKhxQmp5TGwIcUA%2FMs6kgSltDCel7m%2FBjqkAQaDTP6z5ztL2fo4zCh6T6xcGhftUJho4JZb7HVTvx%2BAqfvdOkVC51Iw5ukhXkvAi7WhVzU%2BYQFdBgu0kEtF9%2BZNlTmVnMWVEgDBYS5LdB2s8pv1piueJieHF9y791XgCnDcl46mumPBowIZ809VYb2U4lSsmFDX5RpXlwwbx5w1ATWQ29eAPefOdtTBf8z5lVAbYXjfaOb59mSRcRUW80bYNReR&X-Amz-Signature=856ed96e40ac6b96e3c189f42b74d7045fc1aa61ad885a2b321384590d27d9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHYHVX5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC0x6pZcwhn3pz46wr49j%2FFsWmeMHHSNzMpCVjNe3vwAiBkLuAvWvxAYQonjhOSvmuudqhwYeOgM%2FurNx4zTc9CCCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9m9rPxweCWXiAfVKtwDTrZnu0BUupKIvIFFqHsOiQ%2BXfLwcR1XJnE6w5wz5tDhrU1M6QxsewpT00YdHXab5kFH%2FvV6io08YJmoTpWI%2Bn%2FV7h9mLW9mEnhlofsQ%2F%2FVahA2I2irxaFNopuxvrVTmAYCDG%2FSlOg1lhFMRpAfg5C8pdWgdV14ZGcvBKtJJhpzweE5sJ%2Fo5UcTcHqWqowBb0rBg%2B57PUY%2BgPIjAkLK0L6FHzwylRPKHYNwk1oM5lGJxayQnbE5M5h%2FcGg4tu5h5OuxcC%2FuFv%2FVis7cMVrbL%2FO8NlW44KFg6mhO7ti%2F83Xj7hEG0JzoP1l81ePu3Fd0GitVZrPHwhyq%2FUrK7rolyI0A6CNgPPWabqp4LK56Kx4gXzRi8oQQkkepulrjezWiwd1eA6QdXsQ8NCU63c6427mNOSaALal%2FNsob%2F66Jf8sMV37FntdyN8kQOGIIEn3dQmqWkXf94EkeerP8j9vi4Y6Gn7WHq2PYN11cYfHkoHigygTq7cEbGTFgh45pwCIet7eGiviR0L%2FnLtmc07DEA0RTJf7JS%2BTIYHkS%2Bu5lGIYeSTloYhLzvb3Q9d2VZCWr%2B6iE0OdWXVdMmCcge6ZU%2F3OX7K%2FjNBYo1dU2WipARB4bf83SgV98lrC5clhsAwp5a5vwY6pgGfSYGKRxg4yRJ1zSVzpPNh7lVrd26kCAixABHa4TSyoTmhZn4r3lFzmANO2cDBE5e9tQCui9fc8FYewN3XlDK9BVq06SUJ9TiwBnmw3oE7DD4vDw3OzyxHzB%2BvXItp3hHTx6eLn8sPjyjndqGdYwO%2FDsra2QrezbiYD7bsqe9R8rwf2bqJpNEr7dBZ5BjhduaKLOODck1KCw39u7%2BgPXkUqgUXghzm&X-Amz-Signature=d0cce287db1bf2114ea701ab4cb141445fc84f9de807a0740621f7f7b26c3672&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6LC2GO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNXVcomqOUp1WYJvP8ueNAbuOx4axQk4hEiBm%2B34Tq6AIgeyJxusgfWAgSE0zpvBKJ1MMqGpOn%2Ffw6u0ZpiTfe2TgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp9RbawtlpwYU2fuCrcA5%2FLuR4UMPiscRev2ti56z1RZe1sSPo2HUrlGjRS%2BdO%2BP9mZx793zyO0cOxSbJZjh%2BPKdR9zeCeJzAw6Rs4Gfpw0JrSdJnTLdojKyqXAKfk2ns94oieXAqmKZEz4zg0aJl76jhL7TG7tWDW3u%2FR3pk4PMCMBpaYIvUBBbYXkvsury2ljcB8eU4BWaqYDZU2xNh0o1%2B9%2FD81kqO46eTmCzr4eCmesFZkr8FDpSMegFER1rJSyAnvfsqvzKvKbwtJ1mQE4511NPhlpLXFwiiRNvqMoADFEgB1YlDr6%2BSY%2FTd%2BaT%2BS8sdGhvtaNP%2F4A%2BrDhp6rSDZPBerufLJ6a9xgBAnQKbIMH7j4rNOZgCL0vbFyBfF86yrk07zgcyx7NCR3RJRApx9gAE5fPnVlUI50HM%2BtIBkQ2lmDmmrZBIxYIS0rNaYD9gaLt4EmMO1zRNunIryjHEbM03%2B7rYoif1JvCGXvt4Dns8lvTlVqBC6f1Ob2bP1e8IyIN%2Fpa15NETe6XOqmsepLg0wCpJpAXRSSd%2FFFjKeOlMm6k7aWJA%2BHWzIiMTmiXlK1LM4AdSq1rOdCKkA4CWWdgHKZCQQx4apiJrbJGE%2Fw220Fu0TAlBZK0JukzlTjSOa7bjpQf2%2BGTsMPKWub8GOqUBZRxiB4rMuEFu%2BJvt76L91GDX0BPaMC6bNBKUOm%2F%2FjfbxlSHrgL%2B40WMQbIHzziTfZwFnZQqlykRyEln3ky7bUwx9l0Miakd2zvociO3Fkp%2Fza%2BvUS%2FXYxuh01WYvGVKtVwtB0XWVeO6SmUkm61skMU5vJKZuWGcdJh%2FyxXdSDFKrA8sxXNtPeV%2FLi2cWa4i4tQD%2BSz7dMP5Tzr3myg7mhIPMRBDw&X-Amz-Signature=6c36fb441ac0c2dd99b807f328141e0ab528e6cf20251eb5f915e7b78cd16ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7635FU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8fyYYDlaxiy57C017xvc3AmTjFLNi6AK3Y4u4gi5TcQIhAMSTgcLlNh8PUVvHXQ0oQG7R8owj4kNvB6E9YsENME%2BPKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHWaSp85xbVZiaGSAq3ANdGCUENBxL6wNwDZP0IUDln%2F9v4ikDaCCLuxWRArygXLLQKYau00sKiSi3L5ySNHVljyuBw9t8KNk7vp4nFSjcFcuY7nBRJVUmrIX5eir%2BJ7bUI%2FfVIQ%2BJ5TfQeGDQvCIbGL7Uu7K%2FCu1KXuJ50BHm115LnxVaFSqHX5iQNuWKGUohliz5vnKASEfNbHQ87KYjE6anJsaBulIJyqTKmsZ%2Bwif4F6NWckEv61v7nEBHQM9qhS4dVyobjIDcWv5EpEeSr3E2%2B7OBb1jYiVNvp1FMdA8HwzdAz5cgCzHOojgnI%2BoWfLKPU6rII47k1zWAqHsGZ9RZEAhFgHMffwewl6%2FNCCTb4XikuoqLs5RWGFi%2FSgKyVhOwn4%2FFaWqPrlPRZw7GtwJW4HDKqoNTWGw69%2B65MRIg4%2FKtCjS%2FjpSA5GehlZPHIFBTWirra5FjBsi2RQSAf31OnViZChLXAvoO%2Bzibc4VE3QgV7FOVuoNO5d7MePEpj1nSsmnf0tbFpXfbhHzzyz7eAn1h%2FnOiwGOJi5RNyRkWLRkdL3VLZbluxfZ1utgTK%2FzgfZjB3EQtQzDKQLJvkCQpMoV1bagKNdP4jDalvisDYr%2BIjbLLRkKhxQmp5TGwIcUA%2FMs6kgSltDCel7m%2FBjqkAQaDTP6z5ztL2fo4zCh6T6xcGhftUJho4JZb7HVTvx%2BAqfvdOkVC51Iw5ukhXkvAi7WhVzU%2BYQFdBgu0kEtF9%2BZNlTmVnMWVEgDBYS5LdB2s8pv1piueJieHF9y791XgCnDcl46mumPBowIZ809VYb2U4lSsmFDX5RpXlwwbx5w1ATWQ29eAPefOdtTBf8z5lVAbYXjfaOb59mSRcRUW80bYNReR&X-Amz-Signature=55af40d93e1cbb632e95094c8babea207d720d4734b2e09b27a0481f7d944045&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
