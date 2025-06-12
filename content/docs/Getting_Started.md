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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SRYN37%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFb4zBaRq7KU3NGR4tJIfm0DEbFrsMd3d3BJVV1vRd90AiEA8P1XDm6cIfr5OL0sbuD4R4L6Atg0zgsBKWb%2FQwwitxsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Zk3YASBCM4KJluircA1JDcwi6kqEr6rm6mML2coNSnflbuaLGUMpFGtU6TlDSDpABqzUUtpq6%2Fc9WFc6qXhb7tCIxBcZauUVkhduIHC1twsdAX5MbaWfB14eyhCpoqrqAmrJZydc6RDpbkqpi1iPe5sUX2tdeEqvtt6wqsJXxtY%2BczQBdggGDQDM8VPVz9Cn2qc96x3Z90VSfL%2BkXUo5Z%2BrPfJkygcWNoRBaVauT%2F4A%2F6ofQ6GMJGGYaWYctgAwonfDreMaReaomdLmd60pBPvWwkMQxcnYb4g0EMWeuKVDn5JEtAhu9CFsMWXdkORDLCmg3mnKWQe0gze4gjX%2BhuYD%2BsAPKp3dHb0yXUwur%2FD7pueskfnOXCqfS05ufnF96YVZLHX6yTEheak8J38%2FBxAl03CfM1SjzbWEBbAWIQpZwcR5F%2FHEJLXC2mY2lEB8nC3GyheO2Y%2Fu3oRtPmFWoMlTE%2F5iCmv1eRfaEtfdCMJjyQm%2B93TStZ3tmyBZSb%2FIEAKFH%2BmiiTCvZhtVcpbaUNVmWwNJRawGrU7h0z7QLMtEYrFlBKZf3qfYRHjEc7RSMrjcxiWIjrQVPl0xTwMIRf795cXynY38UsS9kAr2JGsNSjx94fthrSfUDpTk4wtzeHMiNoY4NJvGVuMJvDqcIGOqUB4cXNh5tOr5gNfVzdt1TiQ0GNQ6jyTuiLYoFl9K7hMJxvAq1%2FeN5G0F%2FS3Wv57uPBqEDOx10E4Mu5IrMuBSOvTWDlkQC67piG1VBVH6zk%2Bt9fVDQ1Ul%2BeF3hoEJg8G0q%2BN7ElQbGd4Fclo3yE2vEYIYJr34haQ6%2FqAqTvcKnSlD82baMU8uvcrAXuCNKElVumGUa1U09XUG%2FUMl%2BSI1%2BKDL8ZccGQ&X-Amz-Signature=375cab08a0d3407e72a48555dadcfefa3f5ede3a027788c8d9156b685904af11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SRYN37%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFb4zBaRq7KU3NGR4tJIfm0DEbFrsMd3d3BJVV1vRd90AiEA8P1XDm6cIfr5OL0sbuD4R4L6Atg0zgsBKWb%2FQwwitxsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Zk3YASBCM4KJluircA1JDcwi6kqEr6rm6mML2coNSnflbuaLGUMpFGtU6TlDSDpABqzUUtpq6%2Fc9WFc6qXhb7tCIxBcZauUVkhduIHC1twsdAX5MbaWfB14eyhCpoqrqAmrJZydc6RDpbkqpi1iPe5sUX2tdeEqvtt6wqsJXxtY%2BczQBdggGDQDM8VPVz9Cn2qc96x3Z90VSfL%2BkXUo5Z%2BrPfJkygcWNoRBaVauT%2F4A%2F6ofQ6GMJGGYaWYctgAwonfDreMaReaomdLmd60pBPvWwkMQxcnYb4g0EMWeuKVDn5JEtAhu9CFsMWXdkORDLCmg3mnKWQe0gze4gjX%2BhuYD%2BsAPKp3dHb0yXUwur%2FD7pueskfnOXCqfS05ufnF96YVZLHX6yTEheak8J38%2FBxAl03CfM1SjzbWEBbAWIQpZwcR5F%2FHEJLXC2mY2lEB8nC3GyheO2Y%2Fu3oRtPmFWoMlTE%2F5iCmv1eRfaEtfdCMJjyQm%2B93TStZ3tmyBZSb%2FIEAKFH%2BmiiTCvZhtVcpbaUNVmWwNJRawGrU7h0z7QLMtEYrFlBKZf3qfYRHjEc7RSMrjcxiWIjrQVPl0xTwMIRf795cXynY38UsS9kAr2JGsNSjx94fthrSfUDpTk4wtzeHMiNoY4NJvGVuMJvDqcIGOqUB4cXNh5tOr5gNfVzdt1TiQ0GNQ6jyTuiLYoFl9K7hMJxvAq1%2FeN5G0F%2FS3Wv57uPBqEDOx10E4Mu5IrMuBSOvTWDlkQC67piG1VBVH6zk%2Bt9fVDQ1Ul%2BeF3hoEJg8G0q%2BN7ElQbGd4Fclo3yE2vEYIYJr34haQ6%2FqAqTvcKnSlD82baMU8uvcrAXuCNKElVumGUa1U09XUG%2FUMl%2BSI1%2BKDL8ZccGQ&X-Amz-Signature=28a9444f523b8be3a5f0fed245fbb43d28e36569819d94750d25dad67ad3709a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SRYN37%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFb4zBaRq7KU3NGR4tJIfm0DEbFrsMd3d3BJVV1vRd90AiEA8P1XDm6cIfr5OL0sbuD4R4L6Atg0zgsBKWb%2FQwwitxsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Zk3YASBCM4KJluircA1JDcwi6kqEr6rm6mML2coNSnflbuaLGUMpFGtU6TlDSDpABqzUUtpq6%2Fc9WFc6qXhb7tCIxBcZauUVkhduIHC1twsdAX5MbaWfB14eyhCpoqrqAmrJZydc6RDpbkqpi1iPe5sUX2tdeEqvtt6wqsJXxtY%2BczQBdggGDQDM8VPVz9Cn2qc96x3Z90VSfL%2BkXUo5Z%2BrPfJkygcWNoRBaVauT%2F4A%2F6ofQ6GMJGGYaWYctgAwonfDreMaReaomdLmd60pBPvWwkMQxcnYb4g0EMWeuKVDn5JEtAhu9CFsMWXdkORDLCmg3mnKWQe0gze4gjX%2BhuYD%2BsAPKp3dHb0yXUwur%2FD7pueskfnOXCqfS05ufnF96YVZLHX6yTEheak8J38%2FBxAl03CfM1SjzbWEBbAWIQpZwcR5F%2FHEJLXC2mY2lEB8nC3GyheO2Y%2Fu3oRtPmFWoMlTE%2F5iCmv1eRfaEtfdCMJjyQm%2B93TStZ3tmyBZSb%2FIEAKFH%2BmiiTCvZhtVcpbaUNVmWwNJRawGrU7h0z7QLMtEYrFlBKZf3qfYRHjEc7RSMrjcxiWIjrQVPl0xTwMIRf795cXynY38UsS9kAr2JGsNSjx94fthrSfUDpTk4wtzeHMiNoY4NJvGVuMJvDqcIGOqUB4cXNh5tOr5gNfVzdt1TiQ0GNQ6jyTuiLYoFl9K7hMJxvAq1%2FeN5G0F%2FS3Wv57uPBqEDOx10E4Mu5IrMuBSOvTWDlkQC67piG1VBVH6zk%2Bt9fVDQ1Ul%2BeF3hoEJg8G0q%2BN7ElQbGd4Fclo3yE2vEYIYJr34haQ6%2FqAqTvcKnSlD82baMU8uvcrAXuCNKElVumGUa1U09XUG%2FUMl%2BSI1%2BKDL8ZccGQ&X-Amz-Signature=835eaa89978cda9b8791ad575dbaad1180f1580146612b9adebb5ae824273030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3R3G5D2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBL77asP5gkVlRf8VYsNK3q%2FHKUWqLD7lM5RdMNng5BeAiEA9KTDeDORhFNl%2B5uMSLxto%2BSEtr%2BRYOvI63APby1HHiMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjOUsanU5BgYWstDircA1cQbBi%2Fv3O4kP3TclrdIkRjq7sEwXDK06JisOIJRroTb%2FSDG3KqsDg6uT%2B4zJ5Td%2BydfE2xwaHMyZmI6CMGh74FDF%2BW6v66IMXvvPaeJFVGs0WR4px4dR9BH8%2FUO9jJLR1LrJUAx%2BSU9zeTwk%2B0RBOkECo8hK3hnsAaeRpjEnjt3Wif%2FQJ4PnFpTVll02v5yGUHrv%2Bfo2gJzcMS3IN%2FmMjjt%2BpNqdbEAQpK9%2FdsYii2KGtgVzt4baBD%2FyN1mFT3oYr%2BhpepiKq1qUMe2hqADlGkoAE85oUCYRLiI2exjiIn9UPMNjzEfwoD7aOV7RZX00yGOh7aadmMo%2BcdswA%2BE5xJE%2FR9JtqY6Ham5JsvEpxudeYbkgotcSj4BvWwYGWqCfiOATj5CBohe8im9SxRSX2eAY9yXJHQzM25NBi59Ki8oBfQHoMhtjPF1oR67J3LYyYhEjKeg7m1%2FZL65cRPnF35vCJW4LEP7In16GK9hHG7NJERgoSJh%2BurKHCrWDN5jNdhdAFVlcCfQzkd1t%2ByDvapt3z8Nh8dyJzZH7EsiJAs6PouczmhTvhnd%2BCEsTz219k6nZeaNFdAaTQSKCSPINLv0Fl6sIhiEx6tc36%2BEzRI4HDT8ekiRHrPN8qbMOnCqcIGOqUBvmSVdUtHqSycCjyDy6yGuPOtIdNyTBH04UHGwyvZKmfULZU7AwrkVk0dF%2BO9FMh7wfjDyPBVtseg%2FnlcLIrOKMHEUDYi4ah8HxatrcxCPg4D6rxDojYOKFYpWFu%2BYrainjvHhrN%2F6x1JL800LRFoaeVUSthI2hr1%2FXYEqExPDa2NVm1DX8jWsdcwfySxAcPFw%2BTl4p1u5MI2A3fIcBIrOUQPhqW%2F&X-Amz-Signature=393314f37964d50336edb9f259a44631dcd69514a8ada85ca5dff3825eb9b270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJEHJTJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFyi4XOfm09eMY4skG4NdOTbNQOwMMlz8YC0laX1BOi0AiEA7tN7OkI8M9HGi2ZwQsS1gu%2BufRjtcXhzyi20W3nCvSwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMONph%2BH6FDv7D0lCrcA%2FN6q1Kl%2BEzYxTtAXIvV1nSzDaB0avu1a0%2FgT4rsMhHd%2Bl6hTo5VL3A6cEpk0vPI9zgqqbi%2Bt9upFXp6rJK%2FScopNLSBXwAMmwtdlx3iXgS56RoWNVIFXszCMZzl6J5Ofan5dgNa4bqkb5utoLOZx47g4e9f0g6%2FPmnzQ6gXIP5ZXDfiJC9WRU2vWWis%2FX7a7TxtTyLdyXSrLPbQKtdlBmexkRV1kisIFb2sGvooZps5ZD8Vd7y4bwI6W3x6TWTFzxHH%2Bht6MiQLUZGBAlYgpDIGKPBHmIjWAF5GS5BH6APPMGQtmGn61qDdqJ4HClXj9gDEPEf5egHdbOfoCYAWNZR8lN7pMsSl0Q5L%2Bdma2eSUV64TyUzvl7O3WsVRLCDU7BYCtjGGvYZoSf3HWhKZLYWonkwkQzRWQXN%2BuJo2rHgbXGvE38%2Fp%2Bdyz%2FlX9vi9%2BuI5uvgOl3UmMkC4GyRqW0AqAKJlBXSzjsIHrxiz%2F%2BdFBz%2BrJYyeNv%2BznRyl8aai%2BrQCRKY7Wh479DLg109qU%2BUXujwbSkETryBHVkG9ubUW3t2Pfsy1yVln0moGSSSPht6f%2BuaS4sXBtNKHiZxmqqmz7XsDJ5pXYGBCvNa7sCLxLD%2F4c2r%2FWGLbH8nwVMOnCqcIGOqUBLzTLWWO7WFwCqq08LpW4McAD8AvYhzuapFXQ9VGnhyQeV1JimieffvCH1%2FyEOhZFPIzpzyVQ9EAvrgKTH8F5aRxrxVIt2COTV1X9q3CIT8cq9ASs1giZmKyc6sxS3JCHtQIAA%2FwqcqT%2BCuTfNJdiKPpoMmI0NXaH8OY%2FdbXZqeTINs5eQcf2nHp%2FHcJB2c96j%2FemJth7isCP7Ukv51EpmzRFSWOr&X-Amz-Signature=11dae984eb5b60942005ec4c6c93fd370a97d02213c0538ef839a708cd207a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SRYN37%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFb4zBaRq7KU3NGR4tJIfm0DEbFrsMd3d3BJVV1vRd90AiEA8P1XDm6cIfr5OL0sbuD4R4L6Atg0zgsBKWb%2FQwwitxsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5Zk3YASBCM4KJluircA1JDcwi6kqEr6rm6mML2coNSnflbuaLGUMpFGtU6TlDSDpABqzUUtpq6%2Fc9WFc6qXhb7tCIxBcZauUVkhduIHC1twsdAX5MbaWfB14eyhCpoqrqAmrJZydc6RDpbkqpi1iPe5sUX2tdeEqvtt6wqsJXxtY%2BczQBdggGDQDM8VPVz9Cn2qc96x3Z90VSfL%2BkXUo5Z%2BrPfJkygcWNoRBaVauT%2F4A%2F6ofQ6GMJGGYaWYctgAwonfDreMaReaomdLmd60pBPvWwkMQxcnYb4g0EMWeuKVDn5JEtAhu9CFsMWXdkORDLCmg3mnKWQe0gze4gjX%2BhuYD%2BsAPKp3dHb0yXUwur%2FD7pueskfnOXCqfS05ufnF96YVZLHX6yTEheak8J38%2FBxAl03CfM1SjzbWEBbAWIQpZwcR5F%2FHEJLXC2mY2lEB8nC3GyheO2Y%2Fu3oRtPmFWoMlTE%2F5iCmv1eRfaEtfdCMJjyQm%2B93TStZ3tmyBZSb%2FIEAKFH%2BmiiTCvZhtVcpbaUNVmWwNJRawGrU7h0z7QLMtEYrFlBKZf3qfYRHjEc7RSMrjcxiWIjrQVPl0xTwMIRf795cXynY38UsS9kAr2JGsNSjx94fthrSfUDpTk4wtzeHMiNoY4NJvGVuMJvDqcIGOqUB4cXNh5tOr5gNfVzdt1TiQ0GNQ6jyTuiLYoFl9K7hMJxvAq1%2FeN5G0F%2FS3Wv57uPBqEDOx10E4Mu5IrMuBSOvTWDlkQC67piG1VBVH6zk%2Bt9fVDQ1Ul%2BeF3hoEJg8G0q%2BN7ElQbGd4Fclo3yE2vEYIYJr34haQ6%2FqAqTvcKnSlD82baMU8uvcrAXuCNKElVumGUa1U09XUG%2FUMl%2BSI1%2BKDL8ZccGQ&X-Amz-Signature=d9981d22a74317b1d88ca6d9c6181d3e3cd2336efff6b9ebbe0077632330ed3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
