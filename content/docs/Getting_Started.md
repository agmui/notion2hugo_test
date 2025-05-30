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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLK7CPCJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7ziZfu70aJ%2BSt2iC7BIsPRLm9urXPTiu8QCH6iA96QIhAMPbpeEojtA4BlcMo7O4%2FFBarPJ8eoEKw76gVOZqxbV7KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylgu6gM3C4yRuCTv0q3ANfNpH2P%2Brn5feHnzcMsYt%2BxilIMUQDC0KwjQeNkrtyR3fZj96BeqVJXPZwYogSsJjCU5e1a7lG18BbN%2B7DQsUXEzUFUIGlwE6rr%2BkV7misuyLsWIaI%2FsZc91DSgcZvHCXTL%2FEmJlfRavnY8%2FtUzzehobtvsdnbtb9AZIpGMRtNSBpAQJB0R6MoUCZr60g1H%2BorUr5lp3eGHdwGQ0bTHzLQx6H6SPeB%2BfwTnYf4UNqxiM3xa2kiAloeJn%2BBgexKzppqKTKZuhhT0yb81Zkpyvlw9zG2WeVrlLChh8xourl%2FWbtlSMVVnOp6G4X3zLaTFOxagmD3Voes1J6rldjSUCiyLAG7J03htI71D3Yv4CMMKDVoQcfDcQI9ZVsM1Nq%2FErf1uZZE5gUItvZze4pGImDSdrR2ENMJJMxtBN8WWYEiEFHZd25mqdbW2nln4cYbDMeQ2IackaPJJcnfs3Sxdz9mevzOfLIKs1gglqYyXlvUphj3wobY9Zzsx9VIMsmZxjIcuGSX2ByZF3Q8zJweQu08VH%2F2NmKA47PiuDwULqSJ2FQnXHLaTo%2FOxgla7BgAwuJomYwexvkQ%2Bi5bQ%2FLLCFY14Aq7HwlcxYyM1d0dPMdtyJ82kx7P1Kcm0qE23zCf%2F%2BTBBjqkAXsWoGt4ggIk8g1sVXE5V8Xh9VGvrL5JRf9ECwuBXOVNFPE%2FrGMw%2BkKKBZsY%2FxazkX17vUGh6VEeT9Dp%2FwVmgVJBSQar5M%2B8UFEBIlEc0IkxCl1D4VY8WuhbhdPP%2F%2FanonFKnmeOOtivimeK4dJ19DBROtXrdMl8OKDU2UjJ6sL0XHfo1MQNV1IiU8tC5s8oVepjU2GBsvdCgK51W0969E5uO762&X-Amz-Signature=ad3c5a46a52585228768ad4e93bee7da327985e12b2a25953a7e6109326db374&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLK7CPCJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7ziZfu70aJ%2BSt2iC7BIsPRLm9urXPTiu8QCH6iA96QIhAMPbpeEojtA4BlcMo7O4%2FFBarPJ8eoEKw76gVOZqxbV7KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylgu6gM3C4yRuCTv0q3ANfNpH2P%2Brn5feHnzcMsYt%2BxilIMUQDC0KwjQeNkrtyR3fZj96BeqVJXPZwYogSsJjCU5e1a7lG18BbN%2B7DQsUXEzUFUIGlwE6rr%2BkV7misuyLsWIaI%2FsZc91DSgcZvHCXTL%2FEmJlfRavnY8%2FtUzzehobtvsdnbtb9AZIpGMRtNSBpAQJB0R6MoUCZr60g1H%2BorUr5lp3eGHdwGQ0bTHzLQx6H6SPeB%2BfwTnYf4UNqxiM3xa2kiAloeJn%2BBgexKzppqKTKZuhhT0yb81Zkpyvlw9zG2WeVrlLChh8xourl%2FWbtlSMVVnOp6G4X3zLaTFOxagmD3Voes1J6rldjSUCiyLAG7J03htI71D3Yv4CMMKDVoQcfDcQI9ZVsM1Nq%2FErf1uZZE5gUItvZze4pGImDSdrR2ENMJJMxtBN8WWYEiEFHZd25mqdbW2nln4cYbDMeQ2IackaPJJcnfs3Sxdz9mevzOfLIKs1gglqYyXlvUphj3wobY9Zzsx9VIMsmZxjIcuGSX2ByZF3Q8zJweQu08VH%2F2NmKA47PiuDwULqSJ2FQnXHLaTo%2FOxgla7BgAwuJomYwexvkQ%2Bi5bQ%2FLLCFY14Aq7HwlcxYyM1d0dPMdtyJ82kx7P1Kcm0qE23zCf%2F%2BTBBjqkAXsWoGt4ggIk8g1sVXE5V8Xh9VGvrL5JRf9ECwuBXOVNFPE%2FrGMw%2BkKKBZsY%2FxazkX17vUGh6VEeT9Dp%2FwVmgVJBSQar5M%2B8UFEBIlEc0IkxCl1D4VY8WuhbhdPP%2F%2FanonFKnmeOOtivimeK4dJ19DBROtXrdMl8OKDU2UjJ6sL0XHfo1MQNV1IiU8tC5s8oVepjU2GBsvdCgK51W0969E5uO762&X-Amz-Signature=33c7d753378fbdebf670a4d1599880ac13973d8f47565f8284696e942e11e7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLK7CPCJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7ziZfu70aJ%2BSt2iC7BIsPRLm9urXPTiu8QCH6iA96QIhAMPbpeEojtA4BlcMo7O4%2FFBarPJ8eoEKw76gVOZqxbV7KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylgu6gM3C4yRuCTv0q3ANfNpH2P%2Brn5feHnzcMsYt%2BxilIMUQDC0KwjQeNkrtyR3fZj96BeqVJXPZwYogSsJjCU5e1a7lG18BbN%2B7DQsUXEzUFUIGlwE6rr%2BkV7misuyLsWIaI%2FsZc91DSgcZvHCXTL%2FEmJlfRavnY8%2FtUzzehobtvsdnbtb9AZIpGMRtNSBpAQJB0R6MoUCZr60g1H%2BorUr5lp3eGHdwGQ0bTHzLQx6H6SPeB%2BfwTnYf4UNqxiM3xa2kiAloeJn%2BBgexKzppqKTKZuhhT0yb81Zkpyvlw9zG2WeVrlLChh8xourl%2FWbtlSMVVnOp6G4X3zLaTFOxagmD3Voes1J6rldjSUCiyLAG7J03htI71D3Yv4CMMKDVoQcfDcQI9ZVsM1Nq%2FErf1uZZE5gUItvZze4pGImDSdrR2ENMJJMxtBN8WWYEiEFHZd25mqdbW2nln4cYbDMeQ2IackaPJJcnfs3Sxdz9mevzOfLIKs1gglqYyXlvUphj3wobY9Zzsx9VIMsmZxjIcuGSX2ByZF3Q8zJweQu08VH%2F2NmKA47PiuDwULqSJ2FQnXHLaTo%2FOxgla7BgAwuJomYwexvkQ%2Bi5bQ%2FLLCFY14Aq7HwlcxYyM1d0dPMdtyJ82kx7P1Kcm0qE23zCf%2F%2BTBBjqkAXsWoGt4ggIk8g1sVXE5V8Xh9VGvrL5JRf9ECwuBXOVNFPE%2FrGMw%2BkKKBZsY%2FxazkX17vUGh6VEeT9Dp%2FwVmgVJBSQar5M%2B8UFEBIlEc0IkxCl1D4VY8WuhbhdPP%2F%2FanonFKnmeOOtivimeK4dJ19DBROtXrdMl8OKDU2UjJ6sL0XHfo1MQNV1IiU8tC5s8oVepjU2GBsvdCgK51W0969E5uO762&X-Amz-Signature=6effbd9a16d135a1b34fa1d34c223f340ac34cfa678f3cce283085d7ec318211&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YPRHLL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBxwA3FnGpxbExqqgcXvUR4dTReETrzxBPLa7XsILiIAiAwC61MZ%2BZxaP8daLh%2BwSF%2B%2BYX2H8o5V2vKmdyZpFXkpiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9uzzCf8mlmK7VrBKtwDuIyMvVqf7QgHGAtd7tU%2B4qz37LQHLbBBoRX37eIp%2BojleQy1bZG7yykBMIRIuh3NMV1xn21BPT8pzdFGpbGM1luulOdMvr0KhlDxg6kM4aOVnVRZ9hMtANpCY%2FWvRqmEvjwYrWYteOPBWyQqq8d%2FQ0ARSrhvTPYJFS3oMyt8SF9J5F3beraE17Egn5dcq2moxkp%2FU5uH1E51evYbh%2BHV%2BYEMaSfzff5pwqdqSLiiF%2FCTpNo5wYY%2BwcACbTtbhsmogHP0uvSrCPuAQd7t8RRDr44cuouKwKHcsWZH%2FYMV%2BP%2BRVwyn87PSR%2FE4aHFBW8NMrbFdTxlEUVtP%2BorBCvT2C26s83TI%2BQ17zp7jkwhlgvbBbcV39GfcYP1vtKKMlxo2%2F%2BRfKR8eIDfY%2FYFpOmHuXgw9Q6hN2n45R%2FIHX%2Bfnhf%2Fz4qovlj8OoWtii9Codi5nDgNViHQ9MspVsTsTestt2z36HA60qSfXttXPJuQTwiSsut%2BmCuYtlHLom7H7QTB1ZiO9MXR4sNPXo0xpPOwTOjXqvBdJO8fYfzyr%2FVBQpuJTJkYBLrLkpjkCEs4mcoKAy43eHKgz6Hab%2FlBvOI%2FEoBUbQtoNzcGYwXyXxoGj1H6SdKvx5z93aH3H%2FlEwk%2F%2FkwQY6pgFYI6mbmGQ8NAs6oqAGpECvQkBDavc2vXTOzB3uenHSmKpSbIHt%2Bt9teVXcz%2B7xqp9ZntXTtvFi38WioY0WRmMoVyK7nOPvM4uUlMbr26I5xs14cnnndaagbUcAWl5YABpos1o2nYYWqgTnfDq918u8C8ypdzR1ZM9Lqy6JytGArR3OXhhmtrpTSCEzYKUXpP6iFewOOZ%2FxrJ95n8EpSh9uxMNQUoWe&X-Amz-Signature=4f59b8e8c791bb9b9bf41c251d45fd4708acee682ba57e813cc42b8d4f7d85d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664VXWK2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvUH9G3JUY3uzcwR%2BB6ECCkp%2FlMkf5RY2Oi7tbvRuIcAiAJnSSWimGjj8ERoYZN6G6uzio%2BFpW2w9fDLYLD9J6q%2FiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU5IwPacLRqgRnc0vKtwDG9uf5UAz4wyEg1mMHBaQfsuZgIO3OTcnX9EnZAr%2BUtAQFroTkeGGeBtx58h248suiApGWL0f%2BT83H2G1mIJeFairGxTwj%2FAkFDaVJKF0pIwalTc5Y0z%2BtUdOyVNRXv1tc9lDBZa%2FqWmy2GDR5%2FAW4C6rQbuvv8oYb%2B%2BAVdJhIG3N8y5eSy4E0arY%2FzL9RKQX6Bq3Za%2BwDh5vgLRh8zv%2BfY3tm8lXLkyb1q87iDu9iaV0P9UQAMXxhalVRB2GwCIPLcomSchobu%2BdiTGdMwejUEk%2Fw%2FN%2FoseshBY8h7JCZltTsk%2BhaPTzkxjfuHCvt5utlSK6AK9bwOfCL3HNwh35koaFT8b0ate9xUCNqSYScEaCAuNgozaDQROyteMz12CIO8zU1URj2%2FLYihsHqc35H1%2Bw6sTrWWthYJs54ZzSSBLohK7IWIB2ER9UX3MYFcQxyCWn8TcwaxtGDjsO6D8ykOhFFFLZ0p%2BZphC68lIdNlpN3w%2FNE9mOFGQ6wxynh%2FT1pqn4bMYLs2kbFyG70BSSJuEZoB8geSSRjL939L9nUb%2BgaohyaKX1psZrXQsfZ43p7fmkuHKqZDJ2s6cGlw9CAlck%2FIzZ2Wq3DhMRUlpnXG%2F4bKibZgkLS8Ij1EMwgP%2FkwQY6pgGFTApsPX%2F4pG7N95Z9lJjAg4OsdXPdNX8TGITEdvOIxJXDDUlFRuGy%2FuDgC7f5dfHAjN3W7Z%2FDv61wlbK7Gt2qck052yW8wli%2FP3ckqlUxazPN7dyxX5TrBN23tCIlUZCSuN8ciDrW4Jata0hDUFU1Kx2qIibL49G9bjuNU9mlU1vd5%2F1Fhx76J5%2FRmjbtCeW5sU8JDC0YDOHQi%2FJIGwlO2eJbUiq8&X-Amz-Signature=732ba2581462abeaec7b55c3ca6874baed1a6c24ae6bd4c8464c637ca5a3a092&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLK7CPCJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7ziZfu70aJ%2BSt2iC7BIsPRLm9urXPTiu8QCH6iA96QIhAMPbpeEojtA4BlcMo7O4%2FFBarPJ8eoEKw76gVOZqxbV7KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igylgu6gM3C4yRuCTv0q3ANfNpH2P%2Brn5feHnzcMsYt%2BxilIMUQDC0KwjQeNkrtyR3fZj96BeqVJXPZwYogSsJjCU5e1a7lG18BbN%2B7DQsUXEzUFUIGlwE6rr%2BkV7misuyLsWIaI%2FsZc91DSgcZvHCXTL%2FEmJlfRavnY8%2FtUzzehobtvsdnbtb9AZIpGMRtNSBpAQJB0R6MoUCZr60g1H%2BorUr5lp3eGHdwGQ0bTHzLQx6H6SPeB%2BfwTnYf4UNqxiM3xa2kiAloeJn%2BBgexKzppqKTKZuhhT0yb81Zkpyvlw9zG2WeVrlLChh8xourl%2FWbtlSMVVnOp6G4X3zLaTFOxagmD3Voes1J6rldjSUCiyLAG7J03htI71D3Yv4CMMKDVoQcfDcQI9ZVsM1Nq%2FErf1uZZE5gUItvZze4pGImDSdrR2ENMJJMxtBN8WWYEiEFHZd25mqdbW2nln4cYbDMeQ2IackaPJJcnfs3Sxdz9mevzOfLIKs1gglqYyXlvUphj3wobY9Zzsx9VIMsmZxjIcuGSX2ByZF3Q8zJweQu08VH%2F2NmKA47PiuDwULqSJ2FQnXHLaTo%2FOxgla7BgAwuJomYwexvkQ%2Bi5bQ%2FLLCFY14Aq7HwlcxYyM1d0dPMdtyJ82kx7P1Kcm0qE23zCf%2F%2BTBBjqkAXsWoGt4ggIk8g1sVXE5V8Xh9VGvrL5JRf9ECwuBXOVNFPE%2FrGMw%2BkKKBZsY%2FxazkX17vUGh6VEeT9Dp%2FwVmgVJBSQar5M%2B8UFEBIlEc0IkxCl1D4VY8WuhbhdPP%2F%2FanonFKnmeOOtivimeK4dJ19DBROtXrdMl8OKDU2UjJ6sL0XHfo1MQNV1IiU8tC5s8oVepjU2GBsvdCgK51W0969E5uO762&X-Amz-Signature=ae36f98114977ca8c7282867a011ca3257155d85fadc552f2012aee2c25be139&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
