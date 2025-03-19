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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TUQ35O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGYhN1%2FSLjoIZJ0mam5iAdzGD2Ks0RF4CEL0aQSXX23ZAiAXyUSW7JwBAU3%2FsXGGy0Sp0eToJeXxnLVrzvtA4rORlyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMIhIoJB9rO9X8mGF5KtwDarP48dJ%2BTkrURt36u9fPsXlD6tzhSB9YXX94gzYg5qJMdt%2FN5GIA6bFtQBeD%2Bkw6OHLJi%2FfRLiEkZWtKulQsIX%2B3X72%2FbnjMotEFn7oeYIvyubbrA8XhDe7m3uaUz5dV8iTspROKNSoZApxNvNIxgo81zjnNAu5CnMTwKaGr3FLRbztgKCJ3iXwjhiw1L1Dm7jF4hsdcjKkfNXQJ9C3EQU5JKxXPhSeHPaXs8NDZiFCndvIWITgvtYazxcAxtp%2F8yJgSGEFBYF3ScTD9p%2BUvWQb1FiEv%2FyEDDQa2KAJfE0PAq16Uf9wgBL2zx2OPeODns214Ogx%2BqOkDe3v9dRQkLwThltUkpzpfvPDLQQ8fIlBcBjfwdyY79yNssB7JJR3jpHGmW7D9cnLFJKh6udmoXfRGynY3vQH%2BwzMQSboVYA32vG0CAanDEEyo48nPkOZi1ev57mWrsGwqC%2Bv4YnJtT8N8x1UIYJ4SOGRiYRlCfwnvatW4%2F%2FLvzAcg6a1pwSrjpd6CvZDNNmZbKjJtcLHtkcw7uK5jd5d02v2l2uckIoq6NDeMVgFLNZdYTueJw0bLnkA1LcEVQDt3SFG%2FlAPhoFnzpEtOvGt4r8iuNyZD5s9TCj9JUJGnHhlDmVUw8%2F7qvgY6pgFnc1KBSznItX9vSV%2Fqnj5knDuC9ysyBQpGTGNMSRtl%2F54kG6zb9Qsn0tuOycMDUIRlDOk6P5vx08WLdUhF8RpMU2eq51Z2%2FPGRsluFlILq5OQjkg%2BHsgq0NKpRC6sDqWBuTG7HTRhSw%2FHaC4G1NWMrRBd4wTemoP4Wbxo9%2FCcp3zf6Y7H2ucQswr0H0V6%2F9KaiL2b9HSK1SqtfvNy4nOi58cjeY17d&X-Amz-Signature=ec02a2576200e8e03ebbcc15bd05873e48509c34613077041d6041a240fd7677&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TUQ35O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGYhN1%2FSLjoIZJ0mam5iAdzGD2Ks0RF4CEL0aQSXX23ZAiAXyUSW7JwBAU3%2FsXGGy0Sp0eToJeXxnLVrzvtA4rORlyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMIhIoJB9rO9X8mGF5KtwDarP48dJ%2BTkrURt36u9fPsXlD6tzhSB9YXX94gzYg5qJMdt%2FN5GIA6bFtQBeD%2Bkw6OHLJi%2FfRLiEkZWtKulQsIX%2B3X72%2FbnjMotEFn7oeYIvyubbrA8XhDe7m3uaUz5dV8iTspROKNSoZApxNvNIxgo81zjnNAu5CnMTwKaGr3FLRbztgKCJ3iXwjhiw1L1Dm7jF4hsdcjKkfNXQJ9C3EQU5JKxXPhSeHPaXs8NDZiFCndvIWITgvtYazxcAxtp%2F8yJgSGEFBYF3ScTD9p%2BUvWQb1FiEv%2FyEDDQa2KAJfE0PAq16Uf9wgBL2zx2OPeODns214Ogx%2BqOkDe3v9dRQkLwThltUkpzpfvPDLQQ8fIlBcBjfwdyY79yNssB7JJR3jpHGmW7D9cnLFJKh6udmoXfRGynY3vQH%2BwzMQSboVYA32vG0CAanDEEyo48nPkOZi1ev57mWrsGwqC%2Bv4YnJtT8N8x1UIYJ4SOGRiYRlCfwnvatW4%2F%2FLvzAcg6a1pwSrjpd6CvZDNNmZbKjJtcLHtkcw7uK5jd5d02v2l2uckIoq6NDeMVgFLNZdYTueJw0bLnkA1LcEVQDt3SFG%2FlAPhoFnzpEtOvGt4r8iuNyZD5s9TCj9JUJGnHhlDmVUw8%2F7qvgY6pgFnc1KBSznItX9vSV%2Fqnj5knDuC9ysyBQpGTGNMSRtl%2F54kG6zb9Qsn0tuOycMDUIRlDOk6P5vx08WLdUhF8RpMU2eq51Z2%2FPGRsluFlILq5OQjkg%2BHsgq0NKpRC6sDqWBuTG7HTRhSw%2FHaC4G1NWMrRBd4wTemoP4Wbxo9%2FCcp3zf6Y7H2ucQswr0H0V6%2F9KaiL2b9HSK1SqtfvNy4nOi58cjeY17d&X-Amz-Signature=b0d6df25c215bdb6b52d474bc57e3f4b7b0e2c248bb09e3d6462892d07f61d92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4REVFYG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIA08C8Gu2UTbXUoCk0ldQy0q0hfWYIrTEI5m6A7RTnDoAiEAxZhC5%2F%2BNZY%2BniVq6f2YhftCLUZ2QV38%2B5u%2FIjWuFojMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJOuHpVR9i1LS0OGcyrcA6aMvLZc3ModHpkmkej7tJhIrIdMYyQbFJ3QvVUWiDHEtob%2BOmkc92BJZ2yTahMm7iRlKOVHEvgM4K4JIEgGYXiWkrEuEgH6%2FEsuiwGyyJt3g0kNHFRjC4d6JNzXVCSDITIocmp1lnldaHU1RKEeWEo8bSbFltPmZyZLJqHiy4t0Q5Tjt5xOhzQDHF8nSamAXTFubKyfwJzJ%2F1HbTMeNur61DF7fhQWhONbZ6EUVGg53zuuCih2Vxs5gU26AjwXcI0R4%2FTLn%2F9sSEf1WZsO1ic9x0f%2FrZD3S76TfJQd2m9%2FnYL33e4KKgh9V%2FrcvDmQqa%2BEEge8LNNgvOJqumqwM3DU4Zqvpg2HG3NR0EcesfhpZjbqmuSU8%2ByaurhMKQUXxofJ%2FaMdYjfosWjWXwQcoQ4wbzT1jycBpS9nVBAYUFTX3E7QOv1KD%2FtL0QlwtAOy8WHL7Vyw%2BjkafgtQ1md8omaPssDRD6CYoKcWVTNVzYj1TplfaiZHE0PQlOuQCF2TWHIQt64UccvXPBktqErN0Nk0W7mX8CgiluRGNB2JrS5WOrEa3vAW4FBUNXuMsqjU4XMjcUCdqSsz5qL8UtlQf7SQUkN0GUE5hR2iMNj4JCUUXVyCCy%2FBVV3UbF%2F2cMOn%2B6r4GOqUB898kCx%2FTUd3NQx%2BavO73LXEINEqefETKvsQ%2BGcd3j5Ba20mUvm4PLmq945c1wVaDjZRrRRK2zO8uS2Pk4pGCyXgj3R2Nc7qb810pu5hbX%2B03gfWPuJ4gNHx%2B%2BlTLipJB8OagAIoAMheztsl7Q1brAe6B4sJgkg5hIiIJr9izC%2FpxKAWYSGHDnBB8ohPsR%2FJcj1JXG4%2BfjdLx4jl0U5X9fXXnAT2S&X-Amz-Signature=3a198c30bdd7218ef3a872ac60c980d15135fa63a30d1fedff6620f641b62259&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW52SYGY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFsjZrsURnxVn%2BS704EDf%2F0f3ni0z8AVeVwJ%2BkempChpAiEAi7j2FlypjJfwdURTm4MNfcST5%2FqIA7y5H9Zf18qBEvYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDFQUzhGpMBRR%2FmTN2ircA1t27anYDd73vYi%2B6bSFOyfO2aowEhSwZ69k3af3Jif7LNgcY9wDUQIyAcuhCF8n42Nejj%2BwQbVoNrZ0TR8cBDGWoUO75leO80TN5d7YwUDejGdB8NaRtWoSHqCiec7B%2B9sVzdj6hLFPSAcMCGESqByBVRpoVOrDXWhN9H5W6P%2B3fk1p5JiE4CUUYdP0AFH39x8%2BLmyq8wrV%2FH5EHvo8xYWJ91lW%2FgB%2BoF42ruvQjkYJVyXgt64012TcqUSb%2BNwmVHmayFvC6sSavjEf5eYLkUVJcQssXar0L7xQGREDbQcPOYz4XffKH2CjJeU3%2BOg%2FmIt%2FUuC%2BQXG4lCxn2lKn4io9l5fcSZjlV6wKOSDE35nViBX%2FVE3B3aYz8D6os91V2K3rx10DIquQJJgJZJRfvHNvrmWMqoBuV5GR%2FDHbLSc%2FdLR4wFaotpPvNP6%2BfwJf9sYWqueA0vw7ERaN2DGMH2k%2FUs%2Bk3EGH%2B3MD2oYVRo6fH57z2NIHfAHWKnr2G6koXSZtKrKR7pjHDGxTTmbYG1WUjhgosb%2FOikiqkaac5aXqH7w4WRnH8TYiYrPquV0jOJa8K54rwx%2FO40x140QdvewOGgGcHwYt7lFN8Myz5zwkh1NcQqX8s42cafZjMLP%2B6r4GOqUBBxOdbREsEwVN0egDNsz59XANZ%2FmsH677VWA9k%2BcbWBm6n7yZQ9N5jm5vNcau2DO%2BdWrPOvuuUHi1qpk4hw0xj08kcA7upvphuLlA8SkRdGaisj%2Buj30OSCsTcxjX5dNkpNL%2FcrItN%2B8D0Rd6Fh4Cv7lG3rh7kCkGHMaGEzhyMFw5mhrjLc3JX1ivWFdNico4PA8grRZol8fe1I7uuCGpaJc0fp2J&X-Amz-Signature=c16016cb0cfcd65399d86c19f6465eca8c54a6fcc8c760ef23bd6f2279b92f43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TUQ35O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGYhN1%2FSLjoIZJ0mam5iAdzGD2Ks0RF4CEL0aQSXX23ZAiAXyUSW7JwBAU3%2FsXGGy0Sp0eToJeXxnLVrzvtA4rORlyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMIhIoJB9rO9X8mGF5KtwDarP48dJ%2BTkrURt36u9fPsXlD6tzhSB9YXX94gzYg5qJMdt%2FN5GIA6bFtQBeD%2Bkw6OHLJi%2FfRLiEkZWtKulQsIX%2B3X72%2FbnjMotEFn7oeYIvyubbrA8XhDe7m3uaUz5dV8iTspROKNSoZApxNvNIxgo81zjnNAu5CnMTwKaGr3FLRbztgKCJ3iXwjhiw1L1Dm7jF4hsdcjKkfNXQJ9C3EQU5JKxXPhSeHPaXs8NDZiFCndvIWITgvtYazxcAxtp%2F8yJgSGEFBYF3ScTD9p%2BUvWQb1FiEv%2FyEDDQa2KAJfE0PAq16Uf9wgBL2zx2OPeODns214Ogx%2BqOkDe3v9dRQkLwThltUkpzpfvPDLQQ8fIlBcBjfwdyY79yNssB7JJR3jpHGmW7D9cnLFJKh6udmoXfRGynY3vQH%2BwzMQSboVYA32vG0CAanDEEyo48nPkOZi1ev57mWrsGwqC%2Bv4YnJtT8N8x1UIYJ4SOGRiYRlCfwnvatW4%2F%2FLvzAcg6a1pwSrjpd6CvZDNNmZbKjJtcLHtkcw7uK5jd5d02v2l2uckIoq6NDeMVgFLNZdYTueJw0bLnkA1LcEVQDt3SFG%2FlAPhoFnzpEtOvGt4r8iuNyZD5s9TCj9JUJGnHhlDmVUw8%2F7qvgY6pgFnc1KBSznItX9vSV%2Fqnj5knDuC9ysyBQpGTGNMSRtl%2F54kG6zb9Qsn0tuOycMDUIRlDOk6P5vx08WLdUhF8RpMU2eq51Z2%2FPGRsluFlILq5OQjkg%2BHsgq0NKpRC6sDqWBuTG7HTRhSw%2FHaC4G1NWMrRBd4wTemoP4Wbxo9%2FCcp3zf6Y7H2ucQswr0H0V6%2F9KaiL2b9HSK1SqtfvNy4nOi58cjeY17d&X-Amz-Signature=8b12510858956ccbb628efc4391faf014ff6e2104ffb067c755bad516bb9da93&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
