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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFGGAYM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg46BwaIv6wyCH03pib208B4iZCofS9st33IbesHt9GAiEAxfwyDuesC0rPFDtes8I7S7vPGH82Xbngb1QvuYyZGyMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBgGTeY%2FawtP2ZPuoSrcA1342QP6UzxI61bayZ5gBpU4PGX73g6wKu0kMsVZefHhpqy9gVKonQL1zjwwUeMU7%2BZMQwikHO88eV%2F0TD8UHWubhUr6wEjp7PaYdHWc%2BZ%2F1y%2BBEhy%2FzJndZnMS%2FXoXDATNeWhn96VaS1cCmFqpeEku7DTLtSe7DLXKzVOHD9BBCDGiT9vupOAvKOBo2e09DB7qRvAlvpkinMA010ZHDA3TAA7N3k2GFoJ%2Fe%2BfpS041nQD7HE0S1A%2B3HBs4E9npS%2FL7GaOw7HeQuhXD5avW8F9iqz40UpHWVii69iEah8QGNucu%2FeSC5sYYH5%2F87NkWInnQdJGX3WyAj8sw%2B%2FRfJXiiQR9ElObSYrK1NsgPC0J9rYBkxk17rX9Yv44R9tGlZeVVMU8XYuLi6lT5Ijplw4UA6RPohXkFBQYAeS3hdxrX%2F1kImsz5SZwc2cPQ7MoDD%2BPRFVCE1Yg9poxprTlhlzV2OHBxyy5xdWoTg2%2F0DI96lkU%2B1dQSVlqiIiwuASWH44ECSezPD8ymMQT106%2FCVlVi4VVVftovyTWfNoHFmJkdyIOaMCnZfEhszB%2BkkwqIZiweGlurI4EM4X2FAg0od1ospSe%2Bu5DcVGi%2BGSfB8YxHHtb9ICGRVtsVriP87MJucz78GOqUBKBk2Vm9abWsm%2B0jry3cpzGRQ9lTTKhCB2qbHH7XjWAz%2BWsbNJDI6aFzcTArOMZfJWvN5nvqTUvW102rSowmhGc6mfrXAgezDknto2q3Iy%2BZaeufKqxLAfsBJm05rYN5suhdS8%2FrImOS9S2MzKp6g2EuFzprrqD%2FYgZDWHlKEQGiCdRFPzoRVGN6vnVwvhnYlowg0Ww1tA06qWvfm2q%2BnqnpLRUcJ&X-Amz-Signature=c543b2b4925a5a356f21310d0b394274b143fb52571987f98b2be70ee14ba8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFGGAYM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg46BwaIv6wyCH03pib208B4iZCofS9st33IbesHt9GAiEAxfwyDuesC0rPFDtes8I7S7vPGH82Xbngb1QvuYyZGyMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBgGTeY%2FawtP2ZPuoSrcA1342QP6UzxI61bayZ5gBpU4PGX73g6wKu0kMsVZefHhpqy9gVKonQL1zjwwUeMU7%2BZMQwikHO88eV%2F0TD8UHWubhUr6wEjp7PaYdHWc%2BZ%2F1y%2BBEhy%2FzJndZnMS%2FXoXDATNeWhn96VaS1cCmFqpeEku7DTLtSe7DLXKzVOHD9BBCDGiT9vupOAvKOBo2e09DB7qRvAlvpkinMA010ZHDA3TAA7N3k2GFoJ%2Fe%2BfpS041nQD7HE0S1A%2B3HBs4E9npS%2FL7GaOw7HeQuhXD5avW8F9iqz40UpHWVii69iEah8QGNucu%2FeSC5sYYH5%2F87NkWInnQdJGX3WyAj8sw%2B%2FRfJXiiQR9ElObSYrK1NsgPC0J9rYBkxk17rX9Yv44R9tGlZeVVMU8XYuLi6lT5Ijplw4UA6RPohXkFBQYAeS3hdxrX%2F1kImsz5SZwc2cPQ7MoDD%2BPRFVCE1Yg9poxprTlhlzV2OHBxyy5xdWoTg2%2F0DI96lkU%2B1dQSVlqiIiwuASWH44ECSezPD8ymMQT106%2FCVlVi4VVVftovyTWfNoHFmJkdyIOaMCnZfEhszB%2BkkwqIZiweGlurI4EM4X2FAg0od1ospSe%2Bu5DcVGi%2BGSfB8YxHHtb9ICGRVtsVriP87MJucz78GOqUBKBk2Vm9abWsm%2B0jry3cpzGRQ9lTTKhCB2qbHH7XjWAz%2BWsbNJDI6aFzcTArOMZfJWvN5nvqTUvW102rSowmhGc6mfrXAgezDknto2q3Iy%2BZaeufKqxLAfsBJm05rYN5suhdS8%2FrImOS9S2MzKp6g2EuFzprrqD%2FYgZDWHlKEQGiCdRFPzoRVGN6vnVwvhnYlowg0Ww1tA06qWvfm2q%2BnqnpLRUcJ&X-Amz-Signature=4b8900355c3808b62cea68b63e7600889bf25bf900d1fa10a2879e64c6b0714d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBNQGO3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7JafOzX5v6b2iz%2BTarbxjcsByabz3nxY8V0Z5n19m4AIgCAA%2Fg4yCizXHOC4B3UE1FTsu%2F3cStKayM4YXMMqO3L0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCeyMO6lToYu6%2B9LyircAwWqzE2b%2FRvQF%2BFUeNwKxeCpLU%2BE8ACQL2FvcuRcMYatBpYvthWSxHuTmVekftzq7BVFu3Rsf%2FQir9F5IdAOhHkpRlRoDRJmU42z5pYCvABLAMdl%2B0hCBLgCNAneh3%2FLFNn0YzTshwLQHH4%2Bdr%2BY6YvvK%2F1bXbRmH2Y28n6HyjwwVCgAOaXB%2FWNCtAeAaqFd8t9EGJ7NPRW1HNWNulKOHiXT36%2FyPKl3dcHqF1TmfTauqWe%2FF%2F4n3FPmHSToVNCMxIrdRNfAQWgXUSqhJcQh4Y7Hg9sxtS5Jis9Io7vbJg6J0Rvixye53QHIH8zXwiwUzpMh38qT2c0O9iKMZLi%2Bykg0XvYWvDOtzrwjDwboyjJepnZLDVcg2ilrr4dRIE6dqAcGYWsoqeIj9ijiPiKNkkmqlPFSRumgiXtBHm55edlmCqJ4CAaASsl3tVoLUyNOKW7YDqFBlZkjJXT5p87aLcB855doh5Crc1orWX02tg4c%2BkEiqUraeQZ9qQo3eu9VOoHr3NnTDO0WL0R5mf0pWwnbezWUskpM5NkE74%2BmuoGu1qEwxMshCC1fex%2B%2FPn1gDQdpl57zYHgMk9%2BwtvxPoBQQ49gZlBa1QlURq%2BnSfNEsgEWeNLEtNhBAf1kuMLOdz78GOqUBlIl7XqHBVzG46E4upBRoILvBvHTW5nSiB8QwmyA8CMMoQAqZ%2BUrskRnPOXzhbNTTA1yV8nsgyl61iBdZI3MoRo71c26qFixcgLmBTAfz0%2FJow5w8PmCdfe818aD13qnYeupSuuve9Gh7sbJVkPh0XWZnwZSWz0LznMxj%2FRI%2ByF1uijnMyio8HXvHZZqmSF1jHEqyVme87l7xNjgFe%2FYwBItMc4lZ&X-Amz-Signature=ffbb47703c106411fbbce333be4fccc5ca5ef6c269e38e6b6a095f5fb4d49494&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHWU6E%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzJ4ydgXLlGEauDKAbalG81%2FUvNblDcc6bDEFY7qXCjAiACuRwblkcrrHRBeGlgBT1Ur5pfTyFakjZZlYvCfDktMyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM8K5xAwU6hszEfI%2BCKtwDeIehYmUhlq1%2B3J6a%2Fh0DGWP7ihoTDvY3INiaomFYP4hBd4D5gFBdheUlUaUBJJn7xOjBEDBUfSn5zrbQBWvk3I1Qb0Mbrw2hIuCu4CnwrYOuFaJ%2B7Peq5u64UHV3Oia1kKbxK6mr6QYz4aiKz6FD%2BsihPk3bBiY3QkftK99HIfCOtmKN1NqjgDD%2BdjlPcZCAWWnoFlBoUISoPG9FpXQuOd2Z65Sv2kqlA6h2jaZNSfiscb5kZ%2BV43Gi9Nsqvx0RCDetTcfFKVvhaa8yJDUgeOLtQ1aoSAeyQpwF7N%2BgaZB%2F%2BkcjGrleyxNLzypAfKLkHPGGsqyINHwZSI5wYDSRpJBjhFJR%2FYO%2BRuJfQrpntoCjYvyFw4%2BQcXihPSo9XovXL2pnUX%2BcQZUz155juMuQPLXptqf11Dca8ECtlXpfNNHPdK0qlxS3%2ByXWVV%2BlBSNDA%2FOb9lYu6lqhVLPip53Kg95ttGWxWcTDlUJp4ZFGNlK%2BlttVRF5IdWYCPoyWI0sivrw9596B6mcdpukTaTEp1M%2FN2vxuQXRvkESEnsjxfzCMBUevw7LXOJ3ehA%2BtZRffGjitIdMpShrQhHUebO9l6En3EGbZ%2F32m1g7mcreKEQ3T%2F4msY31PHLIBR7Pwwzp3PvwY6pgH5X5ZpiteL5webO1I08PRAe8fJbV87sHcB%2BogW5zYY%2F2VLLFoylwQgo2O0GqZqOYomv8aBaZ8g6tVbZKDE7Okm1q2tpABQ8jCGZpBqukA7K7Nx7ORTlU4QdZv34zKllaQfzjGp0w%2FKVUDOSJTK%2F8IlsU2yiOFnkLON8xonzYZdpabE83O9TxQfFk%2BuY8mYo2AQZ7YBp8BcOqhBahZ9cP78X4LHKWro&X-Amz-Signature=d0528f9882fde32153ea1f2f9aec9857332e47ef37476ba6a3213291c1b911d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFGGAYM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T132015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg46BwaIv6wyCH03pib208B4iZCofS9st33IbesHt9GAiEAxfwyDuesC0rPFDtes8I7S7vPGH82Xbngb1QvuYyZGyMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBgGTeY%2FawtP2ZPuoSrcA1342QP6UzxI61bayZ5gBpU4PGX73g6wKu0kMsVZefHhpqy9gVKonQL1zjwwUeMU7%2BZMQwikHO88eV%2F0TD8UHWubhUr6wEjp7PaYdHWc%2BZ%2F1y%2BBEhy%2FzJndZnMS%2FXoXDATNeWhn96VaS1cCmFqpeEku7DTLtSe7DLXKzVOHD9BBCDGiT9vupOAvKOBo2e09DB7qRvAlvpkinMA010ZHDA3TAA7N3k2GFoJ%2Fe%2BfpS041nQD7HE0S1A%2B3HBs4E9npS%2FL7GaOw7HeQuhXD5avW8F9iqz40UpHWVii69iEah8QGNucu%2FeSC5sYYH5%2F87NkWInnQdJGX3WyAj8sw%2B%2FRfJXiiQR9ElObSYrK1NsgPC0J9rYBkxk17rX9Yv44R9tGlZeVVMU8XYuLi6lT5Ijplw4UA6RPohXkFBQYAeS3hdxrX%2F1kImsz5SZwc2cPQ7MoDD%2BPRFVCE1Yg9poxprTlhlzV2OHBxyy5xdWoTg2%2F0DI96lkU%2B1dQSVlqiIiwuASWH44ECSezPD8ymMQT106%2FCVlVi4VVVftovyTWfNoHFmJkdyIOaMCnZfEhszB%2BkkwqIZiweGlurI4EM4X2FAg0od1ospSe%2Bu5DcVGi%2BGSfB8YxHHtb9ICGRVtsVriP87MJucz78GOqUBKBk2Vm9abWsm%2B0jry3cpzGRQ9lTTKhCB2qbHH7XjWAz%2BWsbNJDI6aFzcTArOMZfJWvN5nvqTUvW102rSowmhGc6mfrXAgezDknto2q3Iy%2BZaeufKqxLAfsBJm05rYN5suhdS8%2FrImOS9S2MzKp6g2EuFzprrqD%2FYgZDWHlKEQGiCdRFPzoRVGN6vnVwvhnYlowg0Ww1tA06qWvfm2q%2BnqnpLRUcJ&X-Amz-Signature=14123019b4de847c89f1b9d7f43a827021e57ded55f500b0ba4fd1170ab62fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
