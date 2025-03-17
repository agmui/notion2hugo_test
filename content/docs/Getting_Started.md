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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQZYM7E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnKNBoa6zHfuGe2YgloA4eCd5HZ3km0hfovXnAb%2FlRiAiBzBRA0pslqpaqJh3BWZBQfBR7t2JGz6%2FgnX2%2BlVY7N9yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMElE3m%2F%2FL9jfkF9m1KtwDb%2Fv6D9%2Fgd9PgFPCFxzcEl3W9EVIrIUT%2F7anEUjSv0V9HynFso7twaTxsiRlXUTHlMGGlb099K7jNLCamr3HX30S1HkY3TA4IRowvdnsn411FVdva5wDJbQcFRCgK6QBSctVlN2RHA89X4LR%2BdtrXl5QDTI492lugo%2Fvae9GKeVwoa6jQhXHW3AJS0k4vOnl%2BN2tQ40Q5h0wJHJg0d5RnHrh1tdK5bQOa4%2FiTP9fPXU7Zd%2BU4FTS6Lt1C3m1OwJgH3f%2BDQ86jCUsBXiyihurmDOOh5tzZdP4fibkQjif3BCG%2BCCBQN00B%2BML3%2Bpf0S8StZJHqq9AYtR8JE6AqFC5qXwErPf6jLqcjLr0l7dq9Vc7Qv8mtuPh3U8oC8tS8wT%2B9nOZNxHt8HxF0Ck%2BbDUTfK%2F2fBeP5zuqxOp7%2FTL1YmF1vm6seLz1rm1cCkzjGnsfTbO7ze4hvmRDHPRf6DP0D0iN7x%2BUmfzDM09T9GCAt7oAnJKdFQCwebC670WP6v0EFoHDtVJzPQoruqZj27MH%2FrMTX0tHHp1vXELdr3ZSW0ADKsNMZ3CQZiC0H26fvrv0uIDYowAYQGq31u%2FJJ7uK9oyaxQIBcoEZQyYFKKc6DLAw3Jl1okoed8KG8QVswic%2FfvgY6pgE%2BESb3ueOWu%2BGaOQiv7Yf1Qr2n%2FV3wKcu7tD4iZR%2BwZi0cfmZIaETXxDhyyuVZT9w49Zt1C8BLj7QQmpsFHpvnZKb2KU1fmOpuGejg5v%2FyydP09B5Tuh5KKa84LVzWVMymyuenyoT%2FzZQOttHTu9aJqWm4SNdlmmctb8ixrbTKroD%2FZiCj8ryc6c%2FY4MCR%2BJdMXp9tBFE7ABYWc8WrkZt4B%2ByEkjKU&X-Amz-Signature=0404d583818b559a5797d0f487615990fa7c98717d07d5631eaa927c434d46f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQZYM7E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnKNBoa6zHfuGe2YgloA4eCd5HZ3km0hfovXnAb%2FlRiAiBzBRA0pslqpaqJh3BWZBQfBR7t2JGz6%2FgnX2%2BlVY7N9yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMElE3m%2F%2FL9jfkF9m1KtwDb%2Fv6D9%2Fgd9PgFPCFxzcEl3W9EVIrIUT%2F7anEUjSv0V9HynFso7twaTxsiRlXUTHlMGGlb099K7jNLCamr3HX30S1HkY3TA4IRowvdnsn411FVdva5wDJbQcFRCgK6QBSctVlN2RHA89X4LR%2BdtrXl5QDTI492lugo%2Fvae9GKeVwoa6jQhXHW3AJS0k4vOnl%2BN2tQ40Q5h0wJHJg0d5RnHrh1tdK5bQOa4%2FiTP9fPXU7Zd%2BU4FTS6Lt1C3m1OwJgH3f%2BDQ86jCUsBXiyihurmDOOh5tzZdP4fibkQjif3BCG%2BCCBQN00B%2BML3%2Bpf0S8StZJHqq9AYtR8JE6AqFC5qXwErPf6jLqcjLr0l7dq9Vc7Qv8mtuPh3U8oC8tS8wT%2B9nOZNxHt8HxF0Ck%2BbDUTfK%2F2fBeP5zuqxOp7%2FTL1YmF1vm6seLz1rm1cCkzjGnsfTbO7ze4hvmRDHPRf6DP0D0iN7x%2BUmfzDM09T9GCAt7oAnJKdFQCwebC670WP6v0EFoHDtVJzPQoruqZj27MH%2FrMTX0tHHp1vXELdr3ZSW0ADKsNMZ3CQZiC0H26fvrv0uIDYowAYQGq31u%2FJJ7uK9oyaxQIBcoEZQyYFKKc6DLAw3Jl1okoed8KG8QVswic%2FfvgY6pgE%2BESb3ueOWu%2BGaOQiv7Yf1Qr2n%2FV3wKcu7tD4iZR%2BwZi0cfmZIaETXxDhyyuVZT9w49Zt1C8BLj7QQmpsFHpvnZKb2KU1fmOpuGejg5v%2FyydP09B5Tuh5KKa84LVzWVMymyuenyoT%2FzZQOttHTu9aJqWm4SNdlmmctb8ixrbTKroD%2FZiCj8ryc6c%2FY4MCR%2BJdMXp9tBFE7ABYWc8WrkZt4B%2ByEkjKU&X-Amz-Signature=79952b84782b5b2b26d74931dc5c4f50487253c965b53a578586a02293d81268&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQ7U3W5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDET5ouJ2TBrWQt1FVP8pbgiLG0em2eM%2FHmjsDzyGTWHgIhAN0gIpAi26WUJykHooxo6Zj1h%2FwYeZm2vDycKT98DkZlKv8DCEIQABoMNjM3NDIzMTgzODA1IgyzZeyMx4xLaeBmwOQq3AMmlq%2Bu7dO8ZLxoIzr17B%2BTusCd20IKyjVex9hctMJd0xpgvZapQq4k6hB727xle4%2Ft2KRJMmd6OvltnJYzrs8aJJpu8D4a01DRV25rv%2BqiV%2BQQrjNs0MgevIPmePHWp6PeCfWuGGsRlNMFvl%2BQ8gXyfWxsMayTT1Uysv9xrmKr4J6hT0FsRoF4kb7dZ5gBtNQaL%2FtXicCzwUDDpwpkYYsHgikRksBLEPyjqDlstaYhQoqkiB2Hmc5lGeD4fTg7BjxSnl4hyH%2BY%2F6nwmDndnZz8trIUG1rzyMstpVKwxBqbBJUMJ%2F2Zgubnb3dCbB9VJYWJ9Aqy5Q1Sfud%2BE4SV1%2B3LvHj2PZsS6yt5FfusYY9Qvh%2Fz6f7QNXuEkQLAg5owKciM3xqt16SiOLCbgQHKGBQRp4AgaH2b1MdC%2BnbN3GojhkcbPMyViUuXRQQL4fgflj9KYOGKMWDCUwQxb4phv95fD%2FuqlIqlDI%2FHifFM8jZPemk9Wz%2FND3AhEio3OdwoarUUIcUqc%2F5rs%2Fftt9QIIGmeK698t35ZBMoAr6zciZwvvABnmQYSv5EwCUffR1tjxedDqEuKEDFjOKx8Cg2iTlmKakuNIr97S%2Bb1DfqoWBmAo%2FY%2BZh0APst5MUqG1DCgz9%2B%2BBjqkAaNtUWIAsm7zEGmsMh2WrrZVQJJrsPOfUMA7DleD7yUXJX74WVQUnbTQPIR0hFLccRloyMPHFcQIbklGldNt7WRqiSOvpVuJOTKB8ncWYfE3XDmilYt7xXzhO6hWIlOmCc73Q4PDeRBRvexSgQW4e5lQwfoe3qjq7R5r9D7QkiY9AX0v5uUajxCmVxRlscUdO5BHReiyoV5ZMPX7R3aNkOhZMJ%2Fx&X-Amz-Signature=5d7fe3ff8d80cc6728924128a6937f2b2f26947e16fb1073f4dba1f4fdcc7660&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4D5YIZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgOntoYZj%2FHtwMMFJofaO4FDHEjm%2BX6anx7U%2BMJIxV3AiEAxZMwM3eSA%2FbJyugh3Bud5P5h1CtPoNtr1cbE1JzA1zAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDOZ8PENdTvj7bSZgxSrcA8%2FUhypTKp580inCOSIYyAKLX%2B4AK3i30fU8Hi%2Bstdxnj8dv7p0H2sjFMeQkXutP25wGc7CULdckEFkj%2Fve4myRs%2BZuomn%2BAZtw40whHgc8MrVpOJQJLM%2FeOH8E6pLnWxeAtUBNmdYcZwWK6LTHBGSnuCuekQb3oTKiIluES1HgyoFadIPMkKLDLB%2BLVMeVtXK93dH36bfEhvxDoz%2BX7REA7O%2FCz7T7lDtPjH97eOjYfSljiAXTSt7ioPR2dKYLPK%2BcBfYpU%2BpkHi6pgSJzXe1rWI8xKaGdrpU1n6aVfUY95CEKCmlYxGVXSfKwD9Zzpzbg2mJT8CbsCwP6eDIX9uzA0j1zOYhmXPTlawwyDNC7yaonBT1EK8yLvEPDU7c%2FDd5r3wHh00BQ9g%2FDNrtvOl74dMIS%2FRMv0bJR411C8XIHDYyzE6qJ7JJktu8zaOgVSmhkJY9sCiy6Ql%2FzzdyyxGxjYgDivpNFrKkJRkCV0dRtKL98xRt%2FiOKmj0ZnsaQ9%2BORuxSQWqNUyEPhIhmoxZJMPr%2FUnCP%2FGq0D1Y%2BxFjCyR%2Bnn8amZTiuaMeruiXjL3LGiNQERQa5B3VSTvCgDRdeOalqmcgde6b%2Fif1Oggptpz%2FWHsaXUcrBID05DFPMNvO374GOqUBUTYM%2Fv7IkWLgzHLibO%2Fn3S%2Fr0HAxesYgfbF9p99lBSIxERWhiXLnPez2oK5iH1ZS0GzIpSItdGpM3XLxmznmg2J8x9D0%2BFJiA2Bd1khy6LGUOz3mafNsFxhbbHQ10MMqYobwQrcixSqCIeYHW4HFYaMDIWb2%2FEq5Sd9XFjOFHCTU5ZTAehVlHtUslIxZVWne8HyF7wKi8UPI7UFwqu5e6%2Fcb4nul&X-Amz-Signature=7fb5e2f4fd569f344eb4315e6bc9697d44deaa9bbd609023b940b7856440c0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQZYM7E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnKNBoa6zHfuGe2YgloA4eCd5HZ3km0hfovXnAb%2FlRiAiBzBRA0pslqpaqJh3BWZBQfBR7t2JGz6%2FgnX2%2BlVY7N9yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMElE3m%2F%2FL9jfkF9m1KtwDb%2Fv6D9%2Fgd9PgFPCFxzcEl3W9EVIrIUT%2F7anEUjSv0V9HynFso7twaTxsiRlXUTHlMGGlb099K7jNLCamr3HX30S1HkY3TA4IRowvdnsn411FVdva5wDJbQcFRCgK6QBSctVlN2RHA89X4LR%2BdtrXl5QDTI492lugo%2Fvae9GKeVwoa6jQhXHW3AJS0k4vOnl%2BN2tQ40Q5h0wJHJg0d5RnHrh1tdK5bQOa4%2FiTP9fPXU7Zd%2BU4FTS6Lt1C3m1OwJgH3f%2BDQ86jCUsBXiyihurmDOOh5tzZdP4fibkQjif3BCG%2BCCBQN00B%2BML3%2Bpf0S8StZJHqq9AYtR8JE6AqFC5qXwErPf6jLqcjLr0l7dq9Vc7Qv8mtuPh3U8oC8tS8wT%2B9nOZNxHt8HxF0Ck%2BbDUTfK%2F2fBeP5zuqxOp7%2FTL1YmF1vm6seLz1rm1cCkzjGnsfTbO7ze4hvmRDHPRf6DP0D0iN7x%2BUmfzDM09T9GCAt7oAnJKdFQCwebC670WP6v0EFoHDtVJzPQoruqZj27MH%2FrMTX0tHHp1vXELdr3ZSW0ADKsNMZ3CQZiC0H26fvrv0uIDYowAYQGq31u%2FJJ7uK9oyaxQIBcoEZQyYFKKc6DLAw3Jl1okoed8KG8QVswic%2FfvgY6pgE%2BESb3ueOWu%2BGaOQiv7Yf1Qr2n%2FV3wKcu7tD4iZR%2BwZi0cfmZIaETXxDhyyuVZT9w49Zt1C8BLj7QQmpsFHpvnZKb2KU1fmOpuGejg5v%2FyydP09B5Tuh5KKa84LVzWVMymyuenyoT%2FzZQOttHTu9aJqWm4SNdlmmctb8ixrbTKroD%2FZiCj8ryc6c%2FY4MCR%2BJdMXp9tBFE7ABYWc8WrkZt4B%2ByEkjKU&X-Amz-Signature=a8412750c766a025170f281dcda62f6b2407849c4ef556dcad0d0c5427e527b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
