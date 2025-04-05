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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIDKNIP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoMASt6emNCf%2F16sj75YDa8QLa8YPrBl7FVqr%2FUNt7PAIgBlFNzCJzusNjiQVhfUH6oRu3MyK3YhJyp%2F9GCAQXca8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAQb9e0hTzu1LvRhQircA%2F3NqgM1yV0QFC4yoR4eElJRMcE4kgfun6Kx%2FMOJo0hZTLtC%2FH5im%2BcDKM7JmABF4T2n3nwiuIiA8aXiaPuEQpT9pJ8Y5RT07bB3V20Gx5hHHWzplktbAXXh1eNtWDHxiE%2BqdEsLWldOESka%2F7i9JIafKrx1NpiXKqGDM5C9MN7WHTTL0vBC3dLLXK1j0nD9DYvA7JeqevTqX3mcWPfNcxozMgBZvHshpeE24fOPMET1DELaGlfE4Vdwa5w1sCyFMMnlpzmOA7gz1s7bKd8ftSKn4NB9jz3MgXESgTTGPxdOKAqmD9rtzgeOjI%2BaG8jzCzyDUSmOp3omNWBfCB3AAiphk41yWthElPKZOV3df4lqc60jr%2BF3pPnb70jpMIKqDnLpOTXqJlcNmfAlfO%2FVuG8p0s06LRoWXdwpBCrGQr1pKZte7Bk6QMxZS738e4PTOhYN9r4PfxzVBGp8nSmcU38HZHdEtsTJ0qYQ0eQHwbeiPxT7X7zbcaj8pHHYiMRIreDwb2fsVA9wv8le91xEoB1CGoANhBb3yKWtaLO73W5IUn7WVskNE5xfJg4CQWl6kumOJlBdwz0nyNqq696LH7SSIbHMR9Jx1%2BLq43z5i059NZra18UxGE9X%2BL5FMIjwwb8GOqUBd3A%2Fow6P%2BfyzRnUwl2CdXXxQ0J0J3veKFdEdQp3f1bZbd%2F1orvyyiFUSd2kNMBojLGje3QCErlEQUkq%2FyxekZywl3OhbErrPGvZQJsqxg%2FeZ9OCoQamPd8umtkZE%2B8Q2J5PC5qOYmTPlDX%2FtUkUNde05BMWEviKYLs68al9o07eqwgXccX31v3YI80lH0AJLYPO5S7yBdYGiERFXMb%2Ffc7ActOIT&X-Amz-Signature=6a36c369535e8fa4a885cb28168bb8b9767035eb6850847cc6508e251be02f63&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIDKNIP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoMASt6emNCf%2F16sj75YDa8QLa8YPrBl7FVqr%2FUNt7PAIgBlFNzCJzusNjiQVhfUH6oRu3MyK3YhJyp%2F9GCAQXca8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAQb9e0hTzu1LvRhQircA%2F3NqgM1yV0QFC4yoR4eElJRMcE4kgfun6Kx%2FMOJo0hZTLtC%2FH5im%2BcDKM7JmABF4T2n3nwiuIiA8aXiaPuEQpT9pJ8Y5RT07bB3V20Gx5hHHWzplktbAXXh1eNtWDHxiE%2BqdEsLWldOESka%2F7i9JIafKrx1NpiXKqGDM5C9MN7WHTTL0vBC3dLLXK1j0nD9DYvA7JeqevTqX3mcWPfNcxozMgBZvHshpeE24fOPMET1DELaGlfE4Vdwa5w1sCyFMMnlpzmOA7gz1s7bKd8ftSKn4NB9jz3MgXESgTTGPxdOKAqmD9rtzgeOjI%2BaG8jzCzyDUSmOp3omNWBfCB3AAiphk41yWthElPKZOV3df4lqc60jr%2BF3pPnb70jpMIKqDnLpOTXqJlcNmfAlfO%2FVuG8p0s06LRoWXdwpBCrGQr1pKZte7Bk6QMxZS738e4PTOhYN9r4PfxzVBGp8nSmcU38HZHdEtsTJ0qYQ0eQHwbeiPxT7X7zbcaj8pHHYiMRIreDwb2fsVA9wv8le91xEoB1CGoANhBb3yKWtaLO73W5IUn7WVskNE5xfJg4CQWl6kumOJlBdwz0nyNqq696LH7SSIbHMR9Jx1%2BLq43z5i059NZra18UxGE9X%2BL5FMIjwwb8GOqUBd3A%2Fow6P%2BfyzRnUwl2CdXXxQ0J0J3veKFdEdQp3f1bZbd%2F1orvyyiFUSd2kNMBojLGje3QCErlEQUkq%2FyxekZywl3OhbErrPGvZQJsqxg%2FeZ9OCoQamPd8umtkZE%2B8Q2J5PC5qOYmTPlDX%2FtUkUNde05BMWEviKYLs68al9o07eqwgXccX31v3YI80lH0AJLYPO5S7yBdYGiERFXMb%2Ffc7ActOIT&X-Amz-Signature=892592fc3b92df030c3ad8f3bbaf197a4b3ea726052b49542e961e07f8d3a88b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGJWHZK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVakBygrCwDB6jkZuV2dZh7hvuqkOp15SS4vUxledPfAiEA9TU8Of5BzbzxsC3tLFjekcyXpOvVZr2G9D%2FwNNeoirkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNaro1X66J3qpSSB2ircA5uoIv0rqxSmZiviUwt1YYQAd%2BIOrTu9GIiFBAvkFJlQTB1ovkX%2BaAMq5tXQAjNfQ5kt3a8LQHtFIW03isCMmgbzK7eKAK5bp%2FWEoVE2FlKAsUqCF7vezN8ZXoWA%2FGc5zNIubEcj3X7fzPt242rDHFSs3gId2bJlxDXJJ27du5mFoF5EhPFavotjP%2BkYyxtARvNKUQbqNAgM0mZgaB8cGvmhR8YNS7nqrvy8%2FgntEUyb9QT88bCu6rJwChr2QnJlZ6QcPgbLJfC531JzZQLDo7PS2BPOBtGKY5IvMAnmK36OBJl4nrDD3lvtvpJEZgbsPnp02YDt2L4zwcq0dO6y%2B%2B0%2BXtpIjWrPUYnjGYsv%2Fv1b9VSxF4nZT4Z%2Bp9TFygn%2Bq6fomtSuSzU3R8QN4y4jdDcVuyVLC8djR%2FqSg%2FZ1lSJCAdeEdJW5mUMFozuss3wlRLLtawJBHY1xW3YmfpYdgEctEjcEiPY8qwtBNeuUSCdvTorWYsMHw6mRMqvaiLi4McTzPtvcS7amZxQG1nLmyWio7yc4JiWnjYG1T6yFS8JQdDG0Ln7%2BELco4gdz8vjfXb9I3iPG2FFza0OK%2FASS1KXUmBCI73ks9TAreTxm%2FKy3LaiVohBtAHACo%2F0RMKHvwb8GOqUB5%2FhsDhHFfglXGXmmhxbv8gQa67JLw%2BBHreB%2B%2BUyiwm%2BmoRm9F6KA6x0Y5RFEYjjSFHxJ6%2FH4bGlyQzGZqvquWhnSUmFOOUJLeLh8RbT8YYZEmlE%2FfFllt9VLFTNsRlWIsNBjddSlsuRmFAHad5J3I2tcrRLOHCfsjc3vaEA5ckGs68P9N2RZ6ldAqH23WFVRfEhiJo4TE3wV37y6ZHr248Re79Nj&X-Amz-Signature=19858b1102aa1780f24059b49dd31a384a51403085313b537e1c575112bb461b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673N2TQDS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYVgkpVwtgH96Gqqo7gIOse1XASrckYTfK1zVM5MkffAiAbq65o05dZQHplVqePhu70SbejVT0k6fWraH7NHSHnkir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMYAXW3e0GqqgFuDQRKtwDsRygdfUBQ1LyjqzwAzyRCu9oT5c8Bo57tgvP7Xr4j7b2cd3xmrp%2BWpdUTN4fIa63KMESFk1%2BXEL82aT1iWcIUBYri7%2Fz%2FBbx4ZQNFtEQM9fPIVXwKE3HrALi%2FHQuuV2Wm1ofcZ%2FJtvBp64u2D%2BOjJfx01LQfPazvl0wmp4FnzBCsnmBPN5iG%2F7b0TRlcZQdVNZ9KAgdAdPjaYf0IxhFCf%2BPdp5l6LeCCIecs4brwtKl3tN4vUtFJ8m3yFLrIFIDPfliPCw9gcfg%2Be5DOLTRu38xHfCdjYdi9unvyCYSyupNRf6jXYSi08Lid%2FHIEzSGUeL6b7hQo8PtdqsYdJr0%2FGRat6MLueoAZGhI%2BdXGRudjBdj%2Bikcxjt9uiJs%2BW2Ga9ksOmAQzf7wGx8MuJin8Z3izfwvl8WpfcDfE%2BaUFrsPcLenJip5DnYAfA442nV3ReZcCTeCHCYdHQAoDG0y7VEDpAz8yvtY2brvp81s15CBDB446GAQi7iawy2hSq4449SW9ZQY7P%2BEKFwiF4tBPpBzCoxYDyQiES7Wi%2BgN4aSYVZ8sJ28N%2FOHl2jhUNqRYDudeIHX9HofiOf3HpXi2DQNy4%2FhLOUz3SC2%2FiVwqva%2Fc4seKB7bjyp4ij4HIkwou%2FBvwY6pgHHQryCYrJkkt7Vv8dQuY%2FNIg6xgUD2VZLNCRRpvaIUbR1dwiSVkI9uLswlOIa5UQz8lZRO0Qojf7RGskf9z5TKERG36%2F14uk13gc0vpIL6BgR%2FaCvmtKJdx5aJwTF9SeGdhVLJNhN%2FmtwB5fVQiQ4In%2BAeHlihp4Jbl1czUXM7OSg4kvmfb98MdgKcARG8yNA2EI1HnhegmSFYdAB30P3A%2FXjeTa14&X-Amz-Signature=48b1559c9bbfd4a7184120f7e28d357441057816d9cf8206fcd199304edb5c94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZIDKNIP%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoMASt6emNCf%2F16sj75YDa8QLa8YPrBl7FVqr%2FUNt7PAIgBlFNzCJzusNjiQVhfUH6oRu3MyK3YhJyp%2F9GCAQXca8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAQb9e0hTzu1LvRhQircA%2F3NqgM1yV0QFC4yoR4eElJRMcE4kgfun6Kx%2FMOJo0hZTLtC%2FH5im%2BcDKM7JmABF4T2n3nwiuIiA8aXiaPuEQpT9pJ8Y5RT07bB3V20Gx5hHHWzplktbAXXh1eNtWDHxiE%2BqdEsLWldOESka%2F7i9JIafKrx1NpiXKqGDM5C9MN7WHTTL0vBC3dLLXK1j0nD9DYvA7JeqevTqX3mcWPfNcxozMgBZvHshpeE24fOPMET1DELaGlfE4Vdwa5w1sCyFMMnlpzmOA7gz1s7bKd8ftSKn4NB9jz3MgXESgTTGPxdOKAqmD9rtzgeOjI%2BaG8jzCzyDUSmOp3omNWBfCB3AAiphk41yWthElPKZOV3df4lqc60jr%2BF3pPnb70jpMIKqDnLpOTXqJlcNmfAlfO%2FVuG8p0s06LRoWXdwpBCrGQr1pKZte7Bk6QMxZS738e4PTOhYN9r4PfxzVBGp8nSmcU38HZHdEtsTJ0qYQ0eQHwbeiPxT7X7zbcaj8pHHYiMRIreDwb2fsVA9wv8le91xEoB1CGoANhBb3yKWtaLO73W5IUn7WVskNE5xfJg4CQWl6kumOJlBdwz0nyNqq696LH7SSIbHMR9Jx1%2BLq43z5i059NZra18UxGE9X%2BL5FMIjwwb8GOqUBd3A%2Fow6P%2BfyzRnUwl2CdXXxQ0J0J3veKFdEdQp3f1bZbd%2F1orvyyiFUSd2kNMBojLGje3QCErlEQUkq%2FyxekZywl3OhbErrPGvZQJsqxg%2FeZ9OCoQamPd8umtkZE%2B8Q2J5PC5qOYmTPlDX%2FtUkUNde05BMWEviKYLs68al9o07eqwgXccX31v3YI80lH0AJLYPO5S7yBdYGiERFXMb%2Ffc7ActOIT&X-Amz-Signature=d0edfeeeef53cc6a6a19ab46695d591886de874315a77dd48ecd89df205f6c51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
