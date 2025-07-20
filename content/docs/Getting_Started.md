---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QODWRN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHoHKpLTvQVuesUYtTWn%2BMCXktINc3zYMvZuJ55CRTiAiEAjCUDKJVW1%2F%2FVaY44Q%2FTNR8nH2AJSe9UD6CtIznWrUdAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnvFsGJ1%2B34kYt4dyrcA9NxcWAtw86jhMuOx9bgm8e%2BTBKsj5zK%2FeHkPSCOJd4LTUHus3S11jFnjPI0CYiQpVcLRuvmj9Z8xmDaGbv2n%2BMZ0S2YET1eFX4S6a0gG0IpTDbNwiVaXnWCJvEO1zRPBBwnCg7a%2FPi5PAhZUR7aQjAz%2BQPXs6%2BkhAe1pBxvMhAkSBoXLL6e0sWqVdIHs0BWgoCZoN1Wabj7ODUSj5%2BpiycOnhZUX1ifNR%2By80MY83dyD%2F7%2FEhwZ0BvokLKrii5a3ipyBFDcRTzkR1pi97ZckKAV0hILw2ci2IDnX6nhlDUc%2FCPX6gUF26%2FTSN21jUm6eZpKlXyG3isIUa16biG4w2MFdaWb%2BADdH9iLBXcK3lbTqMFbL%2B637dltSCjt3ALwZVFRxOYI9T5%2FgIjkVuataUX92CXKjTURPIyWjMKtE1b7f%2BD%2FKMWfq%2BkLsHNApqZaAzC6Vz35plZO4mwswTHf8a0EIQWY1grhxlLh49xRykOQa2FicYwB6Rbfsnph4cvGENoJ7D5RzvxmGW1p35Vce4TXtXEaLfH3lB%2FXkEtxo9T0oq3rmIPTiyTciHX2dULEDv%2BYtbp57epLwl1Vho%2BhkyunBgVzIFJ%2FGd03y9EPJ0NAFFRPwn55pZBE2mtEMPjt9MMGOqUB%2BOiF7G1Uk%2BHPaJEPQw6huyuzH89ynZd4ijRgdIJm5zG9Km7OCq1bUdQLU%2BY9jMHbkKZhGlPlTixgrFJZ5AnQwGeIHTJfAlBWX9EPrMKnBCf3UybMz%2Bi0oD7%2Ffk3IRIE6ao2%2FI7KvuhvzhAjjpxUGekaaTc3E%2BOgGH7ha1bYe3hBqrwNWkGMRrWxMGA0qV36BTwiqlUaAF%2FLwE91T%2BD31ICvbJJZk&X-Amz-Signature=9853883df07acca9414ca366e1bbf37a0e42085b0814240d5cbd20fc6bc5f4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QODWRN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHoHKpLTvQVuesUYtTWn%2BMCXktINc3zYMvZuJ55CRTiAiEAjCUDKJVW1%2F%2FVaY44Q%2FTNR8nH2AJSe9UD6CtIznWrUdAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnvFsGJ1%2B34kYt4dyrcA9NxcWAtw86jhMuOx9bgm8e%2BTBKsj5zK%2FeHkPSCOJd4LTUHus3S11jFnjPI0CYiQpVcLRuvmj9Z8xmDaGbv2n%2BMZ0S2YET1eFX4S6a0gG0IpTDbNwiVaXnWCJvEO1zRPBBwnCg7a%2FPi5PAhZUR7aQjAz%2BQPXs6%2BkhAe1pBxvMhAkSBoXLL6e0sWqVdIHs0BWgoCZoN1Wabj7ODUSj5%2BpiycOnhZUX1ifNR%2By80MY83dyD%2F7%2FEhwZ0BvokLKrii5a3ipyBFDcRTzkR1pi97ZckKAV0hILw2ci2IDnX6nhlDUc%2FCPX6gUF26%2FTSN21jUm6eZpKlXyG3isIUa16biG4w2MFdaWb%2BADdH9iLBXcK3lbTqMFbL%2B637dltSCjt3ALwZVFRxOYI9T5%2FgIjkVuataUX92CXKjTURPIyWjMKtE1b7f%2BD%2FKMWfq%2BkLsHNApqZaAzC6Vz35plZO4mwswTHf8a0EIQWY1grhxlLh49xRykOQa2FicYwB6Rbfsnph4cvGENoJ7D5RzvxmGW1p35Vce4TXtXEaLfH3lB%2FXkEtxo9T0oq3rmIPTiyTciHX2dULEDv%2BYtbp57epLwl1Vho%2BhkyunBgVzIFJ%2FGd03y9EPJ0NAFFRPwn55pZBE2mtEMPjt9MMGOqUB%2BOiF7G1Uk%2BHPaJEPQw6huyuzH89ynZd4ijRgdIJm5zG9Km7OCq1bUdQLU%2BY9jMHbkKZhGlPlTixgrFJZ5AnQwGeIHTJfAlBWX9EPrMKnBCf3UybMz%2Bi0oD7%2Ffk3IRIE6ao2%2FI7KvuhvzhAjjpxUGekaaTc3E%2BOgGH7ha1bYe3hBqrwNWkGMRrWxMGA0qV36BTwiqlUaAF%2FLwE91T%2BD31ICvbJJZk&X-Amz-Signature=b867e734da008870a37dca86e55613f510673b9c58f4cba7fb3d7190356fab35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QODWRN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHoHKpLTvQVuesUYtTWn%2BMCXktINc3zYMvZuJ55CRTiAiEAjCUDKJVW1%2F%2FVaY44Q%2FTNR8nH2AJSe9UD6CtIznWrUdAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnvFsGJ1%2B34kYt4dyrcA9NxcWAtw86jhMuOx9bgm8e%2BTBKsj5zK%2FeHkPSCOJd4LTUHus3S11jFnjPI0CYiQpVcLRuvmj9Z8xmDaGbv2n%2BMZ0S2YET1eFX4S6a0gG0IpTDbNwiVaXnWCJvEO1zRPBBwnCg7a%2FPi5PAhZUR7aQjAz%2BQPXs6%2BkhAe1pBxvMhAkSBoXLL6e0sWqVdIHs0BWgoCZoN1Wabj7ODUSj5%2BpiycOnhZUX1ifNR%2By80MY83dyD%2F7%2FEhwZ0BvokLKrii5a3ipyBFDcRTzkR1pi97ZckKAV0hILw2ci2IDnX6nhlDUc%2FCPX6gUF26%2FTSN21jUm6eZpKlXyG3isIUa16biG4w2MFdaWb%2BADdH9iLBXcK3lbTqMFbL%2B637dltSCjt3ALwZVFRxOYI9T5%2FgIjkVuataUX92CXKjTURPIyWjMKtE1b7f%2BD%2FKMWfq%2BkLsHNApqZaAzC6Vz35plZO4mwswTHf8a0EIQWY1grhxlLh49xRykOQa2FicYwB6Rbfsnph4cvGENoJ7D5RzvxmGW1p35Vce4TXtXEaLfH3lB%2FXkEtxo9T0oq3rmIPTiyTciHX2dULEDv%2BYtbp57epLwl1Vho%2BhkyunBgVzIFJ%2FGd03y9EPJ0NAFFRPwn55pZBE2mtEMPjt9MMGOqUB%2BOiF7G1Uk%2BHPaJEPQw6huyuzH89ynZd4ijRgdIJm5zG9Km7OCq1bUdQLU%2BY9jMHbkKZhGlPlTixgrFJZ5AnQwGeIHTJfAlBWX9EPrMKnBCf3UybMz%2Bi0oD7%2Ffk3IRIE6ao2%2FI7KvuhvzhAjjpxUGekaaTc3E%2BOgGH7ha1bYe3hBqrwNWkGMRrWxMGA0qV36BTwiqlUaAF%2FLwE91T%2BD31ICvbJJZk&X-Amz-Signature=3c7f9d63256255ee251c3f186048040bb1e1ee3b72a909fbdfaab716cd7b9e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXBQKC7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHuoIawfb%2Bf6gBO9XsZ54v0CJ71WjzH266Df%2F%2BvjDTTAiBAuSY6kzpWDxecQKlP0uO2PPTn34virAssdne6El2lOCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWT6uMgEJP0OjG%2Fj9KtwDkhvHho3yl6MTSkoqq4mEXQSvM5iPFG29ot7ibf69abn85sNUBYngY0hhB7f7HJ7QQU3ar1jQlUGrlhcVoQ1IWjEHuIMSmvvod6iUQS6Vimxy%2BB5s5RsQIYxz2n0vozHy4szqxwA0EUNxMKXSh9leLZp%2F3o3S%2F%2FKTazjYOKDvmuIGbhFH3uis81J%2FHsnRan2pIeTt0JYfLsC695lh4IsxVILNGFLI7Gg1DitJVS2FWRLbUcAbJL54%2BZ9M4ju%2FXHNOotVxdYfPBXTiTlQ6oaeuyLoYPZ%2FUtZW0ExEXoOQBi8qR2Wb%2FKJFudYBgL8zb%2FMFCSJJgPoktMfsJxhgYfW0ssO%2BcmtRbsqixMpy%2BrpCgnle4dLHg2gFxz2e%2Fno%2B68Fl6XncUNkXMtudjcME8YHmXX6JpeXSnTqQqoosrukRJIkeAXCpITSm0qNL9miLaxVMFqqMihAnXYPQBeGBx7B9TaniDB2z3qC1jGzvuiRyU1PuLCbwbH0iaqA8%2FP1OreSi6JAqedOnT%2FzuO09WbvQ6ju7Qw5uH76t2Bpbr7gqmyYVHtPrZ24EipWk8eP%2FtfvGqpHBX5XuwPBf5YRy%2BePpSkkaUvd2D2hZHMoatZh3O30brzAVTpTR5z68Qi9OQwqfz0wwY6pgFFS32pBgFKr9a0qllZBAalQDrtERR%2FSiEk1Z106m52P8ObP5P3%2F0SQWjcQfvbq2jw8Pkbi5mSC%2F6hqHEuOnONQCBfD7%2F8X94minHhah4iE99LEc6HmtiIzlXjJ5ZMQtF2mTSO4CnyOnXkQnRb40hdT%2BMUAquhvm5lcV5yVbd4yxdEV8t9dUG8YIvo%2BoG1F%2BXgo5NCsTk3VpiB5u5v9qgr3SV%2Bi7asl&X-Amz-Signature=6c4f9f89ba3243335f641deaaa5d9c85833162802a99accf0b60004b991ade84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDPPH6X%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbzmBE%2FNCcNR%2FhH5BbSP5yCXalSAnFZWpDt75OcxQngAIgQ%2BbN5DB8t1bP2lxqymrqEIAhk1RcVWwp84xTKKGdld8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyP5utvDRnV4j3lTCrcA8CqbUptpRGCup23spGD%2F%2FWVJdeNOcdOjQPizax6oyZzHtNRC3iyYbXr77MXLmNbcVSBKtEPu1j7a1iHDR7nhYkLhDHbpR%2FMgG1Q8XS%2Bsfrgd%2FeFtXzskrMliewQXfaHinO7siTsGGJhf9ASFHbQkgWk5ftzVFao4NDYFV5G0I4rhYEQdDGnrmTGWyMZthqM%2FAuMZ6teHQdVgx9msHMic74QrYWQu7eXmjyL0J4CkxTZLvhQcVb%2B5UbcjJZE8r30Zb2kIxAMBTxaDaQj7I4yTXuJvHEa3OZZzb2%2B7H0zq3Mqgz%2FMAacW82lBsq7s08wR4EHRkEQwHJ4YevpswUtWfz5rAdyxe%2FD7%2FQn3FtR2fpO1LtgCoivS8ytwn3JACeyetJxQLsTXLUuQxPSzmXl7KntO82BfryraBrrTp3HTAX7d5shHkX9EgZdJ%2Bs1Yh9OfmDUxCtYIkA6zrtYeDU6hE3UkovjQjvXGNQJsT2ea3I2Z9mi8I9QNSoIAyWGcnBTiGw2SRk2LAHLzxOZUHCGbbRrQMUfGCgwp8TVRvZ%2BAFnsjeOYH75dqw9HM4afcD9cQNocX7S1kNeG%2FrC3j9YXIRf4cw0%2BUm3Va8fopJA5s6Rp6Hw5P8FBU5T8rSWHPMKfz9MMGOqUBIlajdpGKyyceNdq7N7kxWAExr5QYstAymZkuqafAK9LjZ7fpKDdK537G1I8nIcqu55bbo72I9Qu73rm1%2BfEkI2I2CxwXY%2FRhWFV24FHD4i6z7ka7R9COMktCWIM85xcmUDs3wC4uDzWntxsSPgIUmor%2FAlju8lKIj8tIn9X5z%2BgiFRgZQvBMWP5cR93CyXQPjF5jtDjFbozonzu0rNkV%2BgSm%2F7mw&X-Amz-Signature=bba2daf25851a494b296563cfc9f25145b52a419835328f45602bdeca67e6e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QODWRN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHoHKpLTvQVuesUYtTWn%2BMCXktINc3zYMvZuJ55CRTiAiEAjCUDKJVW1%2F%2FVaY44Q%2FTNR8nH2AJSe9UD6CtIznWrUdAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnvFsGJ1%2B34kYt4dyrcA9NxcWAtw86jhMuOx9bgm8e%2BTBKsj5zK%2FeHkPSCOJd4LTUHus3S11jFnjPI0CYiQpVcLRuvmj9Z8xmDaGbv2n%2BMZ0S2YET1eFX4S6a0gG0IpTDbNwiVaXnWCJvEO1zRPBBwnCg7a%2FPi5PAhZUR7aQjAz%2BQPXs6%2BkhAe1pBxvMhAkSBoXLL6e0sWqVdIHs0BWgoCZoN1Wabj7ODUSj5%2BpiycOnhZUX1ifNR%2By80MY83dyD%2F7%2FEhwZ0BvokLKrii5a3ipyBFDcRTzkR1pi97ZckKAV0hILw2ci2IDnX6nhlDUc%2FCPX6gUF26%2FTSN21jUm6eZpKlXyG3isIUa16biG4w2MFdaWb%2BADdH9iLBXcK3lbTqMFbL%2B637dltSCjt3ALwZVFRxOYI9T5%2FgIjkVuataUX92CXKjTURPIyWjMKtE1b7f%2BD%2FKMWfq%2BkLsHNApqZaAzC6Vz35plZO4mwswTHf8a0EIQWY1grhxlLh49xRykOQa2FicYwB6Rbfsnph4cvGENoJ7D5RzvxmGW1p35Vce4TXtXEaLfH3lB%2FXkEtxo9T0oq3rmIPTiyTciHX2dULEDv%2BYtbp57epLwl1Vho%2BhkyunBgVzIFJ%2FGd03y9EPJ0NAFFRPwn55pZBE2mtEMPjt9MMGOqUB%2BOiF7G1Uk%2BHPaJEPQw6huyuzH89ynZd4ijRgdIJm5zG9Km7OCq1bUdQLU%2BY9jMHbkKZhGlPlTixgrFJZ5AnQwGeIHTJfAlBWX9EPrMKnBCf3UybMz%2Bi0oD7%2Ffk3IRIE6ao2%2FI7KvuhvzhAjjpxUGekaaTc3E%2BOgGH7ha1bYe3hBqrwNWkGMRrWxMGA0qV36BTwiqlUaAF%2FLwE91T%2BD31ICvbJJZk&X-Amz-Signature=c1c5fbcf431b82ef89bda210a9299e7bc62c958ea1b97368ab3f7507b19e0d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
