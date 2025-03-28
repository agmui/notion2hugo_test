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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYLJ7WD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsAXK1T4IyTQrEyYteXkN8py2wlh3Ds3puJpxOisOrFAiAajeaZE8HeBSvc%2BZQQJn45hr3my2ZYDjTcW3lS2IfiJSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMT0T16ka%2BBer147BNKtwDeyyz4k1fu98SbXl%2FARdRn2a806%2FU5PrQokQAtiyMmBBLqfIzOhlkYDD%2F88Kvmk5u2V2zx4YwxWT%2BJz1m8Lwd%2BaOIlCoLIUlP7Wy8e0F%2BZ2Fik6mXVyJtBuAi19l6PkISlxu8OmauwjsBvNv%2BXjgJrdUT3aeNcMJ2RwwLjizmCiY3pYeLpElbYHYNPKTOD6CpsO1C8dZVHTyShAeXGUJswLUlX%2BrX%2B2JeRf1DDbf4IwpTWQ9vl4VkYrG0OqGXwhjOQjgnNZWiRNfzogC4dik5JML0rMzzbvKwJXpDD51BH4B4gu4MQB%2BCVjBc39h1yyMoZKtinGMtdsUq8QP%2BZxXsuY4ur4o8EK%2FXbBYhFGSh9glG4LntXr9HlhiJtqh%2FJkPSXut3m6Dgf1ND1v6xSlhWU3%2FtMOJ7gN1A5SaSEoWGkt2hcKBTQXFwKFNwriflFvF5IPrelA65l0kjs%2BBddumI%2BL62UWZwyuChgVFLD31yxmUhOU3tf2%2Fz6AOKfjdC0aJIYkfswnpkKECHisJsBxcNXUgkpx0g59Zspq8Q3y97vSh36qKNCtnlfTsHMnMoPVyovMnSZizKLmNYBQmm9nwmxgN1z3LCWaD757LYwx%2Fv%2F1Rr0jH0kseSZe%2FRxd4w9sOcvwY6pgHCzcc4jc244CKcVd%2BNXoHTJwSQqKe5Ibrk34EZJCcxuvKwghS6CpnE%2B2PvkII%2BF7MEu11jrHG0O4nOw9aPfP1GTQLj9j6xo8Io4uWQD3g4OWUpEE2rZ8KksxAJBMCft6HlBdodSf6quiMAih7X04RFTYbfPuJQzvq2pLAFXKL8uT3AVTL6rbyEf6omV%2B%2B4t0vMpoPg%2BFXYmBAVlSLZIOvlUX4VEVeM&X-Amz-Signature=2041e9b84c5adfba794b6de674d970fde0d0d0c777f310d3c34e9e2f1612127a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYLJ7WD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsAXK1T4IyTQrEyYteXkN8py2wlh3Ds3puJpxOisOrFAiAajeaZE8HeBSvc%2BZQQJn45hr3my2ZYDjTcW3lS2IfiJSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMT0T16ka%2BBer147BNKtwDeyyz4k1fu98SbXl%2FARdRn2a806%2FU5PrQokQAtiyMmBBLqfIzOhlkYDD%2F88Kvmk5u2V2zx4YwxWT%2BJz1m8Lwd%2BaOIlCoLIUlP7Wy8e0F%2BZ2Fik6mXVyJtBuAi19l6PkISlxu8OmauwjsBvNv%2BXjgJrdUT3aeNcMJ2RwwLjizmCiY3pYeLpElbYHYNPKTOD6CpsO1C8dZVHTyShAeXGUJswLUlX%2BrX%2B2JeRf1DDbf4IwpTWQ9vl4VkYrG0OqGXwhjOQjgnNZWiRNfzogC4dik5JML0rMzzbvKwJXpDD51BH4B4gu4MQB%2BCVjBc39h1yyMoZKtinGMtdsUq8QP%2BZxXsuY4ur4o8EK%2FXbBYhFGSh9glG4LntXr9HlhiJtqh%2FJkPSXut3m6Dgf1ND1v6xSlhWU3%2FtMOJ7gN1A5SaSEoWGkt2hcKBTQXFwKFNwriflFvF5IPrelA65l0kjs%2BBddumI%2BL62UWZwyuChgVFLD31yxmUhOU3tf2%2Fz6AOKfjdC0aJIYkfswnpkKECHisJsBxcNXUgkpx0g59Zspq8Q3y97vSh36qKNCtnlfTsHMnMoPVyovMnSZizKLmNYBQmm9nwmxgN1z3LCWaD757LYwx%2Fv%2F1Rr0jH0kseSZe%2FRxd4w9sOcvwY6pgHCzcc4jc244CKcVd%2BNXoHTJwSQqKe5Ibrk34EZJCcxuvKwghS6CpnE%2B2PvkII%2BF7MEu11jrHG0O4nOw9aPfP1GTQLj9j6xo8Io4uWQD3g4OWUpEE2rZ8KksxAJBMCft6HlBdodSf6quiMAih7X04RFTYbfPuJQzvq2pLAFXKL8uT3AVTL6rbyEf6omV%2B%2B4t0vMpoPg%2BFXYmBAVlSLZIOvlUX4VEVeM&X-Amz-Signature=dc7312af1e68a5a392760741fbc6aab7d435e93c98583480cf246c3b9bb4a4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275BLRVY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYsQpj24GYJ8Ixd7LMIJNwcbq%2FS8WlQRjbfq4qLrP%2BJAiEAiynPDofud%2FFpGrqjkvkgw5Gh45bODHDzR8BSNn3XIeAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDFOEaPvSyY7dWA1G6SrcA3L9XcGareG7YSpZv1%2BRkQGZCjmJbD4lc%2BZjmxIFqu9FUYNIj1Zpz8u%2FX87EZhXiFGAgzuoI7rlV77TshwK6wlcWEUzXIP%2BURsldlUGtZHB%2BMYTy64OauCsi5GkdlqnfMc1zDvE1Uq4dvNEpHj35SPGSzYIlF4%2FT7ABzqHVAmeuApw6HOPW9MkjGf%2FPZEXRbkk7TwqSTQRi2gHz97SG9T7chh1twxfbfnO32vq9KHBlDETzxJbmpmcrhK65HxFSKKAI3m%2BGplTvwzBmPBqNOJnKcZBRlVBFn%2BRr78pJgdUy6%2Bj%2BiyhG4C6Y62DeaQgr9xbgST9wIRCF36MKRVx7zfovjbRR8HTjyxfUT%2F0KfVl0hsG6VhbuKWaj%2BjlAy1LSfJksTyp7CtiHmN9WIVHP1q02FSAttN7UyhSfRSDxLpDpVBrargRjBHcT3Fo9XI%2FThayHaGRTtkd0yHNk2nsKrAus%2B12uEz82rqqD7ej%2BjZNkEHwRstYKdzFYtenz%2FUxz917pg%2FLdINS9f%2BynN4TownomO6VNmudmRlWuk8oVTV8P2wqtAjGfFqa5t1zVEri4MQR6J9DYRM4edwR2tNj43Z1nvSX1qfLiVg5bCC1Rt63fYA%2BmFdXp1DpGSGnOYMKjEnL8GOqUBHBoxwHNWnZ069E6792%2BQ8drfNs2JfeeFnViIol7NO1YNl%2BXeGZKjzGEtuPNBZ0xqxfr5lLWCnDCGvPDWQB4Js3tDDTan3%2BuQyP1QiW3S9MvTONONKDPDdkVgFK7TOsxo0KG3Fnzi%2BdiroKtwfseimBAX333ZOnvLYnZ6usqr2piO%2BRaZdrt3%2BI5yOf4uAKBQiBq71w%2Bhd9yfMKwAo2VyzWBNg2h4&X-Amz-Signature=2dd7a75efac5bddade648dfb7de145f919c3e4ffbbac8e6f5af4ecfcbc2df4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCIKAJO4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW0cdbYeyxkljVzfaBWmR%2BIR%2FM65zQa2YxevOUr3oQ0AiBgnEbxZjEOe7z1qXEiln8jZhhFURpfYmgEd4nCnaWBUCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMiuo3MV1Qiu2Z%2FbbjKtwDlQhT5CRFwiypmfAyy3lUbIDAH84rbrIPBRdBCyy30HRCAEmK%2Fe7XkTQfmb5yPfVp2I0soiQ5L6zMK%2FSAS5dAsMYcvcEhk7KS784C7DkNA3F3WLz1mumKIDROcwogPRXIvXbqwUj%2FpK4twwXDKbbLNJIzIO3PRsqfb7vFFXhVucrH8d5ku4563TN7d%2B9si3XU6QeKuAXVKh8F%2FucALKQlrr4%2BzcB%2FZYxV7irju%2FmL9jC3GF7ocnqPO%2Fn24UnL%2BSv8cWdFp63RYHIqtyRZ%2BCkXGV7LEcKC2O%2Fv9KVYzItyHV92dARu9coXww1jgD9HieOI%2BSHT6nQzFGBTXzIpedZYDQETHBPqHI2GtULuASoUcSYKhR6jJhIuwdSjAf3EhQcyJNxaooy5lHPz%2F5%2FPc6vXB1xv7k3Gx2SLvgQ%2FwcjgfH8Zc7S3%2BTjm9SPpPD7JlF4DMr%2FoCDqNq7nm3GSPzuFtv3U2XP7poxY9d3XhgkOsnW65aFztq0Jlqs1ws2PySw3lgZCjHh%2BFCLFFDr05nmPjOiW90IdSqkMA1tDFGKKP7A4vyDS0vQv62ib%2BvhR4VIigtFaX7pF3b62CoeMhTn9B%2BS8zFYDqquL%2Bs%2BudxcJggjC%2F%2BISJSQVdSrsUcUgw%2BsOcvwY6pgHQOKcH7E3ahy4oQ3hRosZMk7JzGmpbE28kvBVBIpvFAUhqo2RO2tA14C2pKdg6Tq01w3mxzLE2vofa8tvaPpplDU5Hea2oqEZSlTW07I1IofySLjK0s5gA0eTiInUpfrmqQZ5kr9%2F9Oc%2BbvXydeTb7nn%2FBSse1KFoFdxJwlilU4p%2BnEmJb%2B%2BAot8QVURW9f2qMjcWRVu6LU4%2FNaKB4Eoty%2F9BM0J%2Fz&X-Amz-Signature=ef2fb3c453dae896ffc5a96a505d3be6b4740df23aa8e979811c7feb9244eaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYLJ7WD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsAXK1T4IyTQrEyYteXkN8py2wlh3Ds3puJpxOisOrFAiAajeaZE8HeBSvc%2BZQQJn45hr3my2ZYDjTcW3lS2IfiJSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMT0T16ka%2BBer147BNKtwDeyyz4k1fu98SbXl%2FARdRn2a806%2FU5PrQokQAtiyMmBBLqfIzOhlkYDD%2F88Kvmk5u2V2zx4YwxWT%2BJz1m8Lwd%2BaOIlCoLIUlP7Wy8e0F%2BZ2Fik6mXVyJtBuAi19l6PkISlxu8OmauwjsBvNv%2BXjgJrdUT3aeNcMJ2RwwLjizmCiY3pYeLpElbYHYNPKTOD6CpsO1C8dZVHTyShAeXGUJswLUlX%2BrX%2B2JeRf1DDbf4IwpTWQ9vl4VkYrG0OqGXwhjOQjgnNZWiRNfzogC4dik5JML0rMzzbvKwJXpDD51BH4B4gu4MQB%2BCVjBc39h1yyMoZKtinGMtdsUq8QP%2BZxXsuY4ur4o8EK%2FXbBYhFGSh9glG4LntXr9HlhiJtqh%2FJkPSXut3m6Dgf1ND1v6xSlhWU3%2FtMOJ7gN1A5SaSEoWGkt2hcKBTQXFwKFNwriflFvF5IPrelA65l0kjs%2BBddumI%2BL62UWZwyuChgVFLD31yxmUhOU3tf2%2Fz6AOKfjdC0aJIYkfswnpkKECHisJsBxcNXUgkpx0g59Zspq8Q3y97vSh36qKNCtnlfTsHMnMoPVyovMnSZizKLmNYBQmm9nwmxgN1z3LCWaD757LYwx%2Fv%2F1Rr0jH0kseSZe%2FRxd4w9sOcvwY6pgHCzcc4jc244CKcVd%2BNXoHTJwSQqKe5Ibrk34EZJCcxuvKwghS6CpnE%2B2PvkII%2BF7MEu11jrHG0O4nOw9aPfP1GTQLj9j6xo8Io4uWQD3g4OWUpEE2rZ8KksxAJBMCft6HlBdodSf6quiMAih7X04RFTYbfPuJQzvq2pLAFXKL8uT3AVTL6rbyEf6omV%2B%2B4t0vMpoPg%2BFXYmBAVlSLZIOvlUX4VEVeM&X-Amz-Signature=d2d6329b542681406a77da80b600c30a5cb8324312ab3db88000f4b497939d98&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
