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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NBYHFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG5aTxAIMEZykdRHkMF768N2uDnZx9kwYoy%2B%2B1aECqegIhAP7YYHLlDdskJLtcqt2UcyJLnOMdYZI2nWswS8MO3flJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFzCfKt%2F898x4g4EYq3AOyULzBMD7BVjD2ekiZHlCjlOqqYlLzhQTpde%2B0NF5YB%2BdOLMXEZLUej06f7rkjlf9LLZIwnOrpjwWTVNfSlLl7cERoJQrfv5hI7%2Bl%2F1Y5wRmzreOS%2Fx4cFqkDzCdOK2M%2FP1esF1f35r6b%2FhgITKiI7tDuWiIZUzFzsH2YjOLdhyE3n1cxfA2RHdAGBppt9cKaZSVUOrBaHvXRJhsVG5EArMybPu6B4%2B%2BDj%2BjWoKkjrfiXxo%2FpOfNlbUr9alpo3eeU8e7dvq3kcyPJjR8g731bTu4FaDBzmBXhorJJ3OhzAsF5RIs2Sb6hs2hebQ0v6QQa1oF6eT4wGgQZDhWcFgGEC1%2B2KMMV4W%2Bupvkol1YhhIRyx%2F7SYjhEjKuwfIPsc%2BSt%2F9ZLR55ZTTp%2BFe9dhtlKLYxAJh7owUCm%2BhkL0rS8UsPgbei7ECS4pVQHKodjkS8RqYOZlNpg7Ft6HOb%2B5gXz5gd2APoSEMguV9dk02KTc46q4FLbqE7ZozRd2lYGFq%2FBNQhoicLUHuA%2BKRwMeBJDw5n1bWEAlw8qsjg0kf2lxHFOCXgtPmlz0VM9pJbG7BiLNIEOEWpydvnWw9xhB8h5Ye4RMmC%2BaNMg0DtWsWsq3qzgWhne%2FkcZRBwOqpzCUnvy8BjqkAcfXGkNW0j82gviJ%2Bu7KgXfKUHz2UoYyCmjpnJvygYVYLJ1wODMoNCULQskRD8Gc15rMCOzOgKR7ANoQdivdVYfsDTIT%2FiDGizNKPvhElNsW1Lzvk4Iy5e5ei4GHeLGdLW5FVwg82Es3BgcXNLUSGHXsauhKFFhTI7X%2BC%2FL%2B56FYIbSUdfjkcRfHZaH15%2Fk7Kbd4IonoxBJ9JnKagGaIp3XwfOJN&X-Amz-Signature=384a2936a5e78543d20f3c788e5ef33fe6ff86b9cbb0213669e5a77bda087be9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NBYHFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG5aTxAIMEZykdRHkMF768N2uDnZx9kwYoy%2B%2B1aECqegIhAP7YYHLlDdskJLtcqt2UcyJLnOMdYZI2nWswS8MO3flJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFzCfKt%2F898x4g4EYq3AOyULzBMD7BVjD2ekiZHlCjlOqqYlLzhQTpde%2B0NF5YB%2BdOLMXEZLUej06f7rkjlf9LLZIwnOrpjwWTVNfSlLl7cERoJQrfv5hI7%2Bl%2F1Y5wRmzreOS%2Fx4cFqkDzCdOK2M%2FP1esF1f35r6b%2FhgITKiI7tDuWiIZUzFzsH2YjOLdhyE3n1cxfA2RHdAGBppt9cKaZSVUOrBaHvXRJhsVG5EArMybPu6B4%2B%2BDj%2BjWoKkjrfiXxo%2FpOfNlbUr9alpo3eeU8e7dvq3kcyPJjR8g731bTu4FaDBzmBXhorJJ3OhzAsF5RIs2Sb6hs2hebQ0v6QQa1oF6eT4wGgQZDhWcFgGEC1%2B2KMMV4W%2Bupvkol1YhhIRyx%2F7SYjhEjKuwfIPsc%2BSt%2F9ZLR55ZTTp%2BFe9dhtlKLYxAJh7owUCm%2BhkL0rS8UsPgbei7ECS4pVQHKodjkS8RqYOZlNpg7Ft6HOb%2B5gXz5gd2APoSEMguV9dk02KTc46q4FLbqE7ZozRd2lYGFq%2FBNQhoicLUHuA%2BKRwMeBJDw5n1bWEAlw8qsjg0kf2lxHFOCXgtPmlz0VM9pJbG7BiLNIEOEWpydvnWw9xhB8h5Ye4RMmC%2BaNMg0DtWsWsq3qzgWhne%2FkcZRBwOqpzCUnvy8BjqkAcfXGkNW0j82gviJ%2Bu7KgXfKUHz2UoYyCmjpnJvygYVYLJ1wODMoNCULQskRD8Gc15rMCOzOgKR7ANoQdivdVYfsDTIT%2FiDGizNKPvhElNsW1Lzvk4Iy5e5ei4GHeLGdLW5FVwg82Es3BgcXNLUSGHXsauhKFFhTI7X%2BC%2FL%2B56FYIbSUdfjkcRfHZaH15%2Fk7Kbd4IonoxBJ9JnKagGaIp3XwfOJN&X-Amz-Signature=2cb269a7740d0d4edc3e2c5eca99525004b790ce1947423259316d193c85c6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RYLEFF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC840iw%2B9%2Fn5D%2Fvkaoe9dcfE6wka48nGqeHRhEuLG2DKAiBz6n2QDSxPYMGzmqdSMInpNL88qmrX1bnHhK5rGPtL0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9VtvX3%2BiwplaHK1YKtwDHvEfmflFyAQZMq%2FxKdIG1lbbHdWRzjRg54DChbkaO6%2BsTpO0rDHSyDjP9VDYALgpA6YprMCE9BSXSHIvufM6BqUzTODlgPP2U8yqLbGJHALzehjEPv0Htd4Q2PAAW%2Fn82zkmcNQb6lN%2BUygN9KXtQSl0Psw%2BZQkTMlHu7vgarYPfGAWzLGNJCJvGAkQTuDO5diNq6YjjorWmHxlw9QIexxpnPltCQBsG%2BmxmebgsAZuqbfy4FFqjBN1ReU0P%2FnfcXYrTGADUsfOCJlWfhtr4536TATKqVQVvY4rSds3YueUcaNKqudIwPfVPGgbIN7ke0uoR8BO8mHVMtCrpBFZU5kgglpGE1hyjrr7%2FgWmNdm1Wq11AtjDuY7ujFz3tf3GQmYgtd6rOsjC%2BlQvkxMnoGuSLrNoTCgBNvvFT6crKCHmf1vqpFVqDjaSCrpRpbEO2A0kRw45sLOpYqzgQN%2BnbtTBSm49xUdoigRpZ0G0tkqsejvAqOjlLE8mhp1tBuHpkN2NSNZI9GoZUOwxatOUj14o4qdQgZkV6L9b9dWdljuMxvq0l96Bk4S1vdqUnvmdEWIkl7JBUNvBz2zfpON%2FCxHwJzHOCZ7cfF6d9iStWGptx66c8Dlmvsiew6fwwuJ78vAY6pgHIcIywQfCKIJN9LrZsofVuTiiD%2F59NM5GgXklsPn%2F4D0NJfafri3ibymAfjscU%2FS7mu43wOlhfQoXwzVJA0KiB91fMforvKw5J%2B8b4vYVJFK4WdKrMJ4XHJlRWssYWNXud0LS8GRuPttn6U3dU5k5S7izRrKk7v5DBujN%2BA1DepyfcgIlIySD0cNPwcnQ3D1WQqjsryAsY3PcpDI1tG1LK%2FXD0gUNZ&X-Amz-Signature=0a10463f22e5b528de0ebf043ef39b41b342ba340f7d043c5eaad93b0883b8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULJ6OXK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe7J7%2Fzou7Y8HWCYF83qigKFCahjERdVmBwEd1mxAzNAiBMUhCtWr0mNEsC40U2FwY5G%2FGr91udykMtXbv%2BHMhHuCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4fpHRZVQWsjT3N1OKtwDv%2Fe0xscEmJfrtixJNkx2snwGjPS6p6cXfTYZYLEtyPOdaT6NxuprPpXvvpx4hiSDAOqZiIzN4Bigyr%2FZQyVnYJ296rAsXAUbLwK6bW9kJwesAS6nRbSml7H6htHA%2FaJjMQBppXQpLCwdzH1NL2Wmc1%2BcuwShDjC8u%2FJacyq0YWPd2pMv6tnnHwTOGCBpWFgKXnoeO4I4G8OHEvtZvWQ9LOBhartEN0QBNxiPVF3hEG1J7LLDAufbfI0GMXQrQRAhe7t0zNY1sQZQk49sVzDlM3ad2p%2FILLqFEX%2F7vuXvh3uZ%2F7dUjYKB5p5p9HFaxws6qfTU945Ki%2FDCCcbfuCVf%2BS%2FyNC9MbtCf5Ljbz6AcaiAAUgelovn7Zyj1MIIebfadKIulNmnglQ%2FJgV0UosepOYBBwjriOFzXaBk4Zw%2FzzqKrDSOPyOsV2MD%2FkI6WEddUoZehwVnVNaOfxE4Fqu%2BBQa%2BxEmIhwb8WB1zLfdA5g4YKS7bamCuv%2F4OM6qmORifAxNp6Aks%2BQW6mA1EfX0PbpfeePSNh30SItCgVD31NIXbe3HF3Q1i4oQkJJk65CqtGpY%2Fh1Y8vf0%2BEb%2BYV2XO3VULalHXo1d9JODrubNp%2BVMA2h0kKuHE5WlrSZMYwh538vAY6pgF%2BnBqyrF2TyCgPQdQxRyB0cN%2B2HlrhHsBL9vz%2FEWuxQCuglmvx%2BCKxeaG4LcZHaSXqTyVjdiNjWgsThZo%2Fr6dbMIp9SS93%2FqUqDCPx8jPs4jyxeWI9FE6qNidNui1%2BZSFjICA6FS6%2FSF4VFa4Cmt1iM%2BP96onGCYjXxrAP2EsGX9TQxixYWaZHhFmmLMzn8QyLQ3q%2FGtE9zhunYVd9Tk9xTAAJUQHU&X-Amz-Signature=79339326b734fd75896f75abbccd494d0f6cca34243d7a8f37f8f913dae464d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NBYHFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG5aTxAIMEZykdRHkMF768N2uDnZx9kwYoy%2B%2B1aECqegIhAP7YYHLlDdskJLtcqt2UcyJLnOMdYZI2nWswS8MO3flJKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFzCfKt%2F898x4g4EYq3AOyULzBMD7BVjD2ekiZHlCjlOqqYlLzhQTpde%2B0NF5YB%2BdOLMXEZLUej06f7rkjlf9LLZIwnOrpjwWTVNfSlLl7cERoJQrfv5hI7%2Bl%2F1Y5wRmzreOS%2Fx4cFqkDzCdOK2M%2FP1esF1f35r6b%2FhgITKiI7tDuWiIZUzFzsH2YjOLdhyE3n1cxfA2RHdAGBppt9cKaZSVUOrBaHvXRJhsVG5EArMybPu6B4%2B%2BDj%2BjWoKkjrfiXxo%2FpOfNlbUr9alpo3eeU8e7dvq3kcyPJjR8g731bTu4FaDBzmBXhorJJ3OhzAsF5RIs2Sb6hs2hebQ0v6QQa1oF6eT4wGgQZDhWcFgGEC1%2B2KMMV4W%2Bupvkol1YhhIRyx%2F7SYjhEjKuwfIPsc%2BSt%2F9ZLR55ZTTp%2BFe9dhtlKLYxAJh7owUCm%2BhkL0rS8UsPgbei7ECS4pVQHKodjkS8RqYOZlNpg7Ft6HOb%2B5gXz5gd2APoSEMguV9dk02KTc46q4FLbqE7ZozRd2lYGFq%2FBNQhoicLUHuA%2BKRwMeBJDw5n1bWEAlw8qsjg0kf2lxHFOCXgtPmlz0VM9pJbG7BiLNIEOEWpydvnWw9xhB8h5Ye4RMmC%2BaNMg0DtWsWsq3qzgWhne%2FkcZRBwOqpzCUnvy8BjqkAcfXGkNW0j82gviJ%2Bu7KgXfKUHz2UoYyCmjpnJvygYVYLJ1wODMoNCULQskRD8Gc15rMCOzOgKR7ANoQdivdVYfsDTIT%2FiDGizNKPvhElNsW1Lzvk4Iy5e5ei4GHeLGdLW5FVwg82Es3BgcXNLUSGHXsauhKFFhTI7X%2BC%2FL%2B56FYIbSUdfjkcRfHZaH15%2Fk7Kbd4IonoxBJ9JnKagGaIp3XwfOJN&X-Amz-Signature=a40394e4315819eef2d92553258c0abef45bbc63ee1454cdae89a538cc06b775&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
