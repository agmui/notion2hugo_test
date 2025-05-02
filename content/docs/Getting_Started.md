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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6QSUVP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC4F7NIVG9r96Ez%2Ft1BZ41wYJuJ6NSh50acfMGBs9P6gIhAMVW6VzVIfqMJ%2B2GW79AcLxn2s05X2dPNReG4DgUQ8CHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysxV%2BIRvX3wlRm%2Fusq3AMBOvJBbqe0cX331t1Mfg2v0XKqkZX0ofP3gmrRKd9WWTxNBPfIdaP1231s2DfRyerrX22HW4rhasCsTjUbjHkoiQO2TdbwMVQ5NaW1l47qqOqXW%2BwOtXgob1SmHm3LLC9YKPHULUao4lPIme6XURaxCnbCSxOGZ%2F3IDZEGY5ie7t%2B1MhEoCGls76KwsZToDXKpoI%2Bah%2BwypYguB8zfYw%2F3qdLsxFhjTSlR%2BM3SsLsfzI1U9vLUaJwmKONcavTdpufwQ%2FY%2FEC8FSTZ56kIwr5o3oGNCuarr%2BasfQqkQCmpyoqk5h%2F%2BA4CKYIEv45207OTQ5XG4bVI3DJ5PIq4PxmU9LRPLvcECflcGHxg3XC1lEH9l6qY6%2FuF3qCvzOX3Ohsw6wlTgLStD4cIwwD3xM7YO4ZepxWDeAGRWEmd5%2FyhoJ9RVPSpBnMmfTdS7CI6wADUpGuiV%2F8h3gsbdqOJLgAONePZOrnRs%2Bq9UeMZVQ7YyJKHSiWVKUctUjB3foFAVcI3CO5PlUMGNAIx5t0Nv7N5Av0Fh6b3Sw7rqwhx4s%2FNJ0qoHgKVlIM3FYAxKa3JRy%2BgAZZ%2BZDw%2FVIyMWWn1DBYan0eqiq8MXp9jtDRIPhLkjHLqBEpR7%2BXRfMZYlz0jCO5dPABjqkAXRwie5Z4gai36aEv%2F4bj87bBahTkUHDlLyLbuutNFj9MUv1l6Tc0%2BC%2BoOQjM%2FHPzhaKrHrd9ZRLSGCI1EYVLI60TNS87ydSYhMOVHAM5lFfv%2Fy1w1eDZ42y0Nqq5ixNWH9r%2BMp26exZ7SRtYu%2BjOXgcUcRyIEfZOR4fkZs0NLkomPLU3%2Fetl5ZhD2I97zIacaWsqU2njwpnqXtl%2BxTEiflzqdSp&X-Amz-Signature=034feb58f7c3908e6dff6fc40be83a361e7b8cda13a9fa0f7b09b6825a75dbec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6QSUVP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC4F7NIVG9r96Ez%2Ft1BZ41wYJuJ6NSh50acfMGBs9P6gIhAMVW6VzVIfqMJ%2B2GW79AcLxn2s05X2dPNReG4DgUQ8CHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysxV%2BIRvX3wlRm%2Fusq3AMBOvJBbqe0cX331t1Mfg2v0XKqkZX0ofP3gmrRKd9WWTxNBPfIdaP1231s2DfRyerrX22HW4rhasCsTjUbjHkoiQO2TdbwMVQ5NaW1l47qqOqXW%2BwOtXgob1SmHm3LLC9YKPHULUao4lPIme6XURaxCnbCSxOGZ%2F3IDZEGY5ie7t%2B1MhEoCGls76KwsZToDXKpoI%2Bah%2BwypYguB8zfYw%2F3qdLsxFhjTSlR%2BM3SsLsfzI1U9vLUaJwmKONcavTdpufwQ%2FY%2FEC8FSTZ56kIwr5o3oGNCuarr%2BasfQqkQCmpyoqk5h%2F%2BA4CKYIEv45207OTQ5XG4bVI3DJ5PIq4PxmU9LRPLvcECflcGHxg3XC1lEH9l6qY6%2FuF3qCvzOX3Ohsw6wlTgLStD4cIwwD3xM7YO4ZepxWDeAGRWEmd5%2FyhoJ9RVPSpBnMmfTdS7CI6wADUpGuiV%2F8h3gsbdqOJLgAONePZOrnRs%2Bq9UeMZVQ7YyJKHSiWVKUctUjB3foFAVcI3CO5PlUMGNAIx5t0Nv7N5Av0Fh6b3Sw7rqwhx4s%2FNJ0qoHgKVlIM3FYAxKa3JRy%2BgAZZ%2BZDw%2FVIyMWWn1DBYan0eqiq8MXp9jtDRIPhLkjHLqBEpR7%2BXRfMZYlz0jCO5dPABjqkAXRwie5Z4gai36aEv%2F4bj87bBahTkUHDlLyLbuutNFj9MUv1l6Tc0%2BC%2BoOQjM%2FHPzhaKrHrd9ZRLSGCI1EYVLI60TNS87ydSYhMOVHAM5lFfv%2Fy1w1eDZ42y0Nqq5ixNWH9r%2BMp26exZ7SRtYu%2BjOXgcUcRyIEfZOR4fkZs0NLkomPLU3%2Fetl5ZhD2I97zIacaWsqU2njwpnqXtl%2BxTEiflzqdSp&X-Amz-Signature=47418556d253b5e956f9fc2baf1cfcc7b4e0bd991d1c3548cfde88be57c5b05c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6QSUVP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC4F7NIVG9r96Ez%2Ft1BZ41wYJuJ6NSh50acfMGBs9P6gIhAMVW6VzVIfqMJ%2B2GW79AcLxn2s05X2dPNReG4DgUQ8CHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysxV%2BIRvX3wlRm%2Fusq3AMBOvJBbqe0cX331t1Mfg2v0XKqkZX0ofP3gmrRKd9WWTxNBPfIdaP1231s2DfRyerrX22HW4rhasCsTjUbjHkoiQO2TdbwMVQ5NaW1l47qqOqXW%2BwOtXgob1SmHm3LLC9YKPHULUao4lPIme6XURaxCnbCSxOGZ%2F3IDZEGY5ie7t%2B1MhEoCGls76KwsZToDXKpoI%2Bah%2BwypYguB8zfYw%2F3qdLsxFhjTSlR%2BM3SsLsfzI1U9vLUaJwmKONcavTdpufwQ%2FY%2FEC8FSTZ56kIwr5o3oGNCuarr%2BasfQqkQCmpyoqk5h%2F%2BA4CKYIEv45207OTQ5XG4bVI3DJ5PIq4PxmU9LRPLvcECflcGHxg3XC1lEH9l6qY6%2FuF3qCvzOX3Ohsw6wlTgLStD4cIwwD3xM7YO4ZepxWDeAGRWEmd5%2FyhoJ9RVPSpBnMmfTdS7CI6wADUpGuiV%2F8h3gsbdqOJLgAONePZOrnRs%2Bq9UeMZVQ7YyJKHSiWVKUctUjB3foFAVcI3CO5PlUMGNAIx5t0Nv7N5Av0Fh6b3Sw7rqwhx4s%2FNJ0qoHgKVlIM3FYAxKa3JRy%2BgAZZ%2BZDw%2FVIyMWWn1DBYan0eqiq8MXp9jtDRIPhLkjHLqBEpR7%2BXRfMZYlz0jCO5dPABjqkAXRwie5Z4gai36aEv%2F4bj87bBahTkUHDlLyLbuutNFj9MUv1l6Tc0%2BC%2BoOQjM%2FHPzhaKrHrd9ZRLSGCI1EYVLI60TNS87ydSYhMOVHAM5lFfv%2Fy1w1eDZ42y0Nqq5ixNWH9r%2BMp26exZ7SRtYu%2BjOXgcUcRyIEfZOR4fkZs0NLkomPLU3%2Fetl5ZhD2I97zIacaWsqU2njwpnqXtl%2BxTEiflzqdSp&X-Amz-Signature=73187f59bb41a34e3e9c063e0c2d2fab750ab69df4c1aa5286ba9189d1146abb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCV5XS57%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBrdPeVas7Vxh7OoncXF0X3qffbh68xfDtz3RNitvV7IAiAo1x%2Bs6CHFIryWHyMCe%2B45K2Zars5RZrXRFKI5HVyXEyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqBUiE9SjOFoqYlSKtwD7rXdM8EytP6AIP8hLi4K8DodwkQiJKGQVC%2ByrPTPemmqXoVNQykw3gAv8ygJTawD2xid4o%2BWsR6NK%2BlvFUAVqWRdG7YfYfnDB4jQdz5EIdAt7pNuPw1l4FF3sC0Cl8sNqZVda71%2BE6IsA%2ByEVCz8T80gseohsI%2FQwkAmticu6SjdOEmMUFkLYy6FaMVCtPKFvzpUSo9pK5zOiuaWxmhsteOZimdNNlo9L7IO519cvrLe3%2FkR7tq4x0jwVl8%2B5haaE4rGkOmjhbAT5iM%2FoK3Tzg6A0E6a5ZbEmfjwogmiKwRjIzZNGuEMR6MNc9BQCVImplHf%2B37GbQUswT%2BMxqr%2FxIueCLbaubaYVjkYccN2OpdXIzKA0Vwmtbfv9WxgQRUHqoAzZ72ryiEsU3cr9NO%2Fp1HAz4FsBCuxfpgYJQ9wbpH25jyu2%2Frm6qLlR9maxbjYc91BszI5wK6Ampx7ZDn0fBqCvvytKyGFtsNFLiEetnIwJJkQ6AzNKWiM%2FpRVZ%2BPatryIrsmAPZAyy5tttLUXHOdtsGegz78ckcc3sakIcis%2FLA2CASJ535Kfjq8Frx39tVGClBmCd0fFtCqvw6pXDLKHG3zUsLrmqZEYMYLTzbPffEMZ9gELDwq17d4wiuXTwAY6pgE%2BKdOYf%2FKYo3Ghd8%2F8%2BKmVeLJe8Rb%2BztbkjvhLuEWJ9boAFhiupzA9IAUJPIlackf%2FC1nKBbOkUd3HP%2BpLtbLKwN%2FV4vMPsuqM7oQJeFhALUlmSl0JAYbkLAE53ghOM9uImhWbQBX85mBgOFI7P0%2BoYSWrDYklIZT2ItjmGoR92ExMPx69nMnRZPHvtVDAp17ke2WLP6eDhmoV6me9bQEEKqUieHNU&X-Amz-Signature=1e067c5b4e15216888c6d9ddefc5f6746282e47c4517a1a1105dc8c16d67b8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVYJZSP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDcsHvN%2Frf%2BdjEqShGTz%2B0Rl4CE0v4I79RRUgsK3NdnTwIhAMOU6gmSI%2BDZCJEHaWjNKyfqAtwdljOCFsFeZ00zbdbyKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUJnak8f%2Bl%2BljvQQq3AMEc4qGuAx%2BMXgCxI6KkO2rA2XxTGYUpqE3WInoFdE23YQK1rwejNB7c2fErVFwsXdFnYpIyRJeI7pM%2BeGUOhwrvWwECy6JpoJaUjkafoRRpFEOzCbZ1KOeveFF%2F10%2BdEb723pHLRb1NGQURCUdFJOjYC5KJVvTkZph17kwFsmZndu9FT2NaJqZ4diO98rBabMvuqprHBpXH7FeSRphBMuSJPiNpYIPC6WY7TbEWIyFqskV0HeQCagzfFHaj1X%2Fejvn4E6Ixe%2Bhre7EMT5XUnuYCS2TzKMAjPL4W29q3XiveMQtuQYaScSSZasVmdnYPgziBAL13Kyk2nRhUD91MPZXCJ%2Bv5UyHxs8ruEWQDOFC%2BmK%2FG%2BRcYgGUwngj0pdHMKRdmdgi61IlQ07lc0sXxTTmtGRODFPbttRiF8V1DNhoCR0DtC1fycmiEAkeNlZYitlZgb3K4ylOMvzE2GH98wUXuInaUiubAD4YrEuL0QujGuUm8jrRQpdTsJEvwa7TF4RGNBp9PLRRlOaqwG2bBObQOFRKQp%2B2lXJSYmFLAY2tfJCLEjl%2BBubVTDkXkDPHX7GSGp8UOmeBU3n8JWGOYkWUzcOofy4bUsPW1tgjriRIauDcdhLuh5f%2BcE4FfjCJ5dPABjqkASYo0oTbgODrpe7AN7UDhMCwIO%2F5zFyi%2BniZ6ymDaX82phYls9K6fQnEiigXlk76IwIQcdU65FcGnvSCKtjp%2BSwc4GFuvt5DQJ7P8RBW%2F%2Fr8AhHvRH1QG39WvrQG4JUW69Ux6uPZbYMJYOJygUz3NMHGi9akwL5h45JVNGW36hzjxplbt4HZfSwxsbKKILPgljXGz6dUKS3THu0AmCmmfJx%2FLqri&X-Amz-Signature=b9dd111b9990df7ec8f4da352ea472db8f7990192c9821949675b39898608ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM6QSUVP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC4F7NIVG9r96Ez%2Ft1BZ41wYJuJ6NSh50acfMGBs9P6gIhAMVW6VzVIfqMJ%2B2GW79AcLxn2s05X2dPNReG4DgUQ8CHKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysxV%2BIRvX3wlRm%2Fusq3AMBOvJBbqe0cX331t1Mfg2v0XKqkZX0ofP3gmrRKd9WWTxNBPfIdaP1231s2DfRyerrX22HW4rhasCsTjUbjHkoiQO2TdbwMVQ5NaW1l47qqOqXW%2BwOtXgob1SmHm3LLC9YKPHULUao4lPIme6XURaxCnbCSxOGZ%2F3IDZEGY5ie7t%2B1MhEoCGls76KwsZToDXKpoI%2Bah%2BwypYguB8zfYw%2F3qdLsxFhjTSlR%2BM3SsLsfzI1U9vLUaJwmKONcavTdpufwQ%2FY%2FEC8FSTZ56kIwr5o3oGNCuarr%2BasfQqkQCmpyoqk5h%2F%2BA4CKYIEv45207OTQ5XG4bVI3DJ5PIq4PxmU9LRPLvcECflcGHxg3XC1lEH9l6qY6%2FuF3qCvzOX3Ohsw6wlTgLStD4cIwwD3xM7YO4ZepxWDeAGRWEmd5%2FyhoJ9RVPSpBnMmfTdS7CI6wADUpGuiV%2F8h3gsbdqOJLgAONePZOrnRs%2Bq9UeMZVQ7YyJKHSiWVKUctUjB3foFAVcI3CO5PlUMGNAIx5t0Nv7N5Av0Fh6b3Sw7rqwhx4s%2FNJ0qoHgKVlIM3FYAxKa3JRy%2BgAZZ%2BZDw%2FVIyMWWn1DBYan0eqiq8MXp9jtDRIPhLkjHLqBEpR7%2BXRfMZYlz0jCO5dPABjqkAXRwie5Z4gai36aEv%2F4bj87bBahTkUHDlLyLbuutNFj9MUv1l6Tc0%2BC%2BoOQjM%2FHPzhaKrHrd9ZRLSGCI1EYVLI60TNS87ydSYhMOVHAM5lFfv%2Fy1w1eDZ42y0Nqq5ixNWH9r%2BMp26exZ7SRtYu%2BjOXgcUcRyIEfZOR4fkZs0NLkomPLU3%2Fetl5ZhD2I97zIacaWsqU2njwpnqXtl%2BxTEiflzqdSp&X-Amz-Signature=fd0c3ffceac2c11494475611b0ab2faeb1690ee18bde2473c1857a5783137856&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
