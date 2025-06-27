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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDYWYJG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh6HQ0A47rDabSDdXujjSjnmKuvWOnJUfDEoMmsVKavwIhAJyY6xK5qDBq%2FsCyTlxTQdJ4T0I7PMlbXwL2fezmvOtBKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2BGmtgF4RjeEMLrPUq3ANpR%2BVl6jl8d4ey7VJuS6XUpiYCvE5%2BvahpjR%2BJQ0K1FfKIibJ9aDa5bFfDA4uikzRBUayvv%2FEbiCd8I4TtxFzJz81RAnwqvWWRbjpq%2FFIacqQIjV3U4Nd9EBxsoykqlcg65os5fi54uLoG9wnQrX4OfjGsFrJUvBKHxQEh6nQ%2Fgii2Nu508w%2BFhqv8wj2Lh8CotfwjK1IOrxf2pDKEEYrIELAi4P6z95lVliDvctYjzpQCet28rRP74L58gk5KZ8cXmkQriTOEjb7DgPmRzOi6mt3urQ%2BJ%2BnzVBO3rsId7m3Jd84odjtQIexVJP9jpaiqNhq4glQmNyFreRYwVhAIih5w10wWU2XUE%2BD3JQVWvkTObSOENRYCxbdiLw%2BGisQZS0FfU08zmOPrkZ8xUslYHpldbwsRUAaF2zExDMd6hDaA2Jpj1eqEKIMQNm4ySHhj7Ntur1KZaTDmm5gcgBsGxIgXYHEBkQbLo3ddi3bCqQQIotb8Biw6VINheCAirgxOxP0wOVYJ7UMSPVy5i7hp6lt8vNsQEfYiqoxLP%2FMDz0XrOaE740S45RGpt%2BK0yVCn8qRhAjatBnBpeL5TrP6nrMl2%2B2Th08OSKlieRGh9d9r51ZOWtFszpqCaWPjDp0%2FnCBjqkAVT0zbmz26PnO3Km4VDGgIfA8%2F6fceuVR3eGPiaCfTBta4eKv%2FGOqQqmqtMZQeMRaog78Ftb8hU2hHXP1qRUyEZBCBdsgHdayoyOgjMbLCcP6k8NW4dIo4aF8AOe4iE87SrPbxlCR1mISW1fA384Y185pXy2PM9230NNCovK9nEe1JeH7E1424GtU8flfHfb0%2BTm4b%2BN7GnWrkIk9YRyIf2QxotB&X-Amz-Signature=344221f22b224544b8f99aee4f06bd813bfe18e40ca89a27d1628818edd9dae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDYWYJG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh6HQ0A47rDabSDdXujjSjnmKuvWOnJUfDEoMmsVKavwIhAJyY6xK5qDBq%2FsCyTlxTQdJ4T0I7PMlbXwL2fezmvOtBKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2BGmtgF4RjeEMLrPUq3ANpR%2BVl6jl8d4ey7VJuS6XUpiYCvE5%2BvahpjR%2BJQ0K1FfKIibJ9aDa5bFfDA4uikzRBUayvv%2FEbiCd8I4TtxFzJz81RAnwqvWWRbjpq%2FFIacqQIjV3U4Nd9EBxsoykqlcg65os5fi54uLoG9wnQrX4OfjGsFrJUvBKHxQEh6nQ%2Fgii2Nu508w%2BFhqv8wj2Lh8CotfwjK1IOrxf2pDKEEYrIELAi4P6z95lVliDvctYjzpQCet28rRP74L58gk5KZ8cXmkQriTOEjb7DgPmRzOi6mt3urQ%2BJ%2BnzVBO3rsId7m3Jd84odjtQIexVJP9jpaiqNhq4glQmNyFreRYwVhAIih5w10wWU2XUE%2BD3JQVWvkTObSOENRYCxbdiLw%2BGisQZS0FfU08zmOPrkZ8xUslYHpldbwsRUAaF2zExDMd6hDaA2Jpj1eqEKIMQNm4ySHhj7Ntur1KZaTDmm5gcgBsGxIgXYHEBkQbLo3ddi3bCqQQIotb8Biw6VINheCAirgxOxP0wOVYJ7UMSPVy5i7hp6lt8vNsQEfYiqoxLP%2FMDz0XrOaE740S45RGpt%2BK0yVCn8qRhAjatBnBpeL5TrP6nrMl2%2B2Th08OSKlieRGh9d9r51ZOWtFszpqCaWPjDp0%2FnCBjqkAVT0zbmz26PnO3Km4VDGgIfA8%2F6fceuVR3eGPiaCfTBta4eKv%2FGOqQqmqtMZQeMRaog78Ftb8hU2hHXP1qRUyEZBCBdsgHdayoyOgjMbLCcP6k8NW4dIo4aF8AOe4iE87SrPbxlCR1mISW1fA384Y185pXy2PM9230NNCovK9nEe1JeH7E1424GtU8flfHfb0%2BTm4b%2BN7GnWrkIk9YRyIf2QxotB&X-Amz-Signature=36fb046f07b63463b2ceedfdcaeb8133e2ae26c982ed8b0d9cd28f27803547a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDYWYJG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh6HQ0A47rDabSDdXujjSjnmKuvWOnJUfDEoMmsVKavwIhAJyY6xK5qDBq%2FsCyTlxTQdJ4T0I7PMlbXwL2fezmvOtBKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2BGmtgF4RjeEMLrPUq3ANpR%2BVl6jl8d4ey7VJuS6XUpiYCvE5%2BvahpjR%2BJQ0K1FfKIibJ9aDa5bFfDA4uikzRBUayvv%2FEbiCd8I4TtxFzJz81RAnwqvWWRbjpq%2FFIacqQIjV3U4Nd9EBxsoykqlcg65os5fi54uLoG9wnQrX4OfjGsFrJUvBKHxQEh6nQ%2Fgii2Nu508w%2BFhqv8wj2Lh8CotfwjK1IOrxf2pDKEEYrIELAi4P6z95lVliDvctYjzpQCet28rRP74L58gk5KZ8cXmkQriTOEjb7DgPmRzOi6mt3urQ%2BJ%2BnzVBO3rsId7m3Jd84odjtQIexVJP9jpaiqNhq4glQmNyFreRYwVhAIih5w10wWU2XUE%2BD3JQVWvkTObSOENRYCxbdiLw%2BGisQZS0FfU08zmOPrkZ8xUslYHpldbwsRUAaF2zExDMd6hDaA2Jpj1eqEKIMQNm4ySHhj7Ntur1KZaTDmm5gcgBsGxIgXYHEBkQbLo3ddi3bCqQQIotb8Biw6VINheCAirgxOxP0wOVYJ7UMSPVy5i7hp6lt8vNsQEfYiqoxLP%2FMDz0XrOaE740S45RGpt%2BK0yVCn8qRhAjatBnBpeL5TrP6nrMl2%2B2Th08OSKlieRGh9d9r51ZOWtFszpqCaWPjDp0%2FnCBjqkAVT0zbmz26PnO3Km4VDGgIfA8%2F6fceuVR3eGPiaCfTBta4eKv%2FGOqQqmqtMZQeMRaog78Ftb8hU2hHXP1qRUyEZBCBdsgHdayoyOgjMbLCcP6k8NW4dIo4aF8AOe4iE87SrPbxlCR1mISW1fA384Y185pXy2PM9230NNCovK9nEe1JeH7E1424GtU8flfHfb0%2BTm4b%2BN7GnWrkIk9YRyIf2QxotB&X-Amz-Signature=96f64dc7fa26f3c3e0d0a5215c718bc17a4c2c25ead5468af272343d7bfe2ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R255ZSA%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCamEuQVB2m72I6lSFq6KgtUTPbw7xhuZrlMwZXZDy2IwIgd8B994rGJVP7qCS8IlSjJgA5cuoyqqyWkd2ZNeHzeg8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGa%2BvMS6p8Czm%2BMJqSrcA1VJsJ8FJxJ%2FMCFuIEkzUY584kUpDaYaIPhEb33Id9mYznMoYNRQsDIYxRr%2Bk48talZHPDx4UBkWjhyCQ7UoIAV%2Bn8W5JX1rkRup7b3w0afxQ0s7hGLOW77QFTR9oVjlpH0pVyoU6MTjsbsm6ko4ofhkhw0dMHnk1%2FGEiCpr7ORzOlekGf7ddgh6QQvF4TMd9MsFcyfBNefXXh730hgZ867SjJPS0PpKdT8rXsg1mNlTggOufIU22yMd0Ru59JFhdlb%2BofS%2BVHB7otvZXiOmLS05sX20uifYwHW%2Fhk26Xr%2F5bm3Mu9rAAukvMPp4UVtVhoeFWUS0xVbKd%2FuNjHVxgqdiIJJCaRCN3PPGZ8e4bAk0B0GLN9VPpX81j%2B43RLFfj3FDq8WRRmhu5pMPqhyGf16qOVQi8s%2BBHzlFhsGCAsAZ5II2mQIbw0CO6KZKyaOz3WDJ15h%2BxCkJ5Cn3UGQsUbAgESZJmMg1ymgKDM8GpcehHfHIPOXFmleF40bsn1riiKDeBfPIa%2F107hl%2Bp5j5Ik1strzTHBNiEcWslZ0XW%2BoBxirUYHj9cyzSpX%2Bgi%2FonzYgDWFfYX5%2FeDA%2Bav7gGwO9cCVLYY07wVzuraoHefvBRS1MoFPGzViiBs9SRMPbT%2BcIGOqUB7%2BcuLjEFdZTEFD3%2FaJg3crEGLTd1GQxVT9xdvHdr7O2NGx4OOMbd9nmfMu6mNm6hGJ0SJ06EIxpYTUDcQH7JnffXU3uJG8XvrtpkYPIe5RQlrDIFyyhh9weaFfZF7Paxd%2BQ2vm56PPGxgMF%2BKPeJMl7TX9jzqNPK4v0BtUXwQLKEtLGYp8bufFbhpHfQG1Ug7X4HXifhKHEFC%2BNUXwg8oRfMaLuB&X-Amz-Signature=1bcb2d88e34618aa992e6ce3d84052db60fe0066893bbdf0b6c59ba457bed18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUCOLXHC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDfZBbGhVuYV94Uw4vsgswVBez3dti7vdxoZZ5O4HEzrwIhALvlTsOdu0nKdYjuaGXOz44ka0ouGq2a0Um5Cy4vdqWRKv8DCHMQABoMNjM3NDIzMTgzODA1IgwgYaoNUxw5cAODJJ4q3APp8WJzKrn7tZsaNe3qIUwP%2F%2BlcoUgL6Ns1cXhv05qWrWlh4dJLXAOKBrWharUJjM2HYNRWIbF5Y2LGmaQUphHGJwFlNK1hgXFed0vQWTvvi35mwW5%2FoPbPxdyNIohr%2FKsrpt9IBLlBAF4aFVuFPtjdkGrTejoS87iXdkgZaf6Z9OJMJEloe2pcGPn4h9D390SWKks%2F2OOHagxfAT9rOyG6kSzqZFk3B8CYgXW4CnPshaDSKIKFhJFzDQBruiZ3RBEJ08Hjn21RABkMKaI6FPhazywWEJ9VfQeOGuLp568fKl2g%2BegfYtQ8pn9%2BX8zbsIzIplfTgtuUud4XRYlcYsY0J1sjH%2BU95irfsM8%2F6B7pZfRUA%2FmZ681NkyINAbeh%2FvGAQs549pxrgtcgEe3xLmYPVckx8mWOSFuEUV%2FzXBCJnKroQnL%2F5lLSvNu6x0aTxLVzrvOy2sg7ylHKPAOPOZS1YdFaD2pKk%2FQEKGKDmBGru2frilq6ZVLea4jOnHFQtdyLqIMOBZAgyW4cyiLomzvQsZqg0WIxr4YSmShFkFJI1EMsJugIzM0hEc8hdlD4gbiq0DCZ8kRkuyXk0hiXRgVeA2N278lq1%2BNm4ktjl1LVdfTlqDIi2zPFAIx2nDDH0%2FnCBjqkAXTh%2B56OqXczazjF%2B%2BsTjdobre0OkzkkoA0iTYAYSl7w2KmALK4xqAPpwIFa8wcBzKC9v9%2BEQt1gx%2B70xwwzeeBu2Gcjwp3pklemAO2Fb4hSqGclkaZFHkAjYgzCmQ4RFpf5eFLAvYQryKM5g07YAZI4W0C6jltNNe5ZTl4%2FPpMuEpXF8Jd16fRK5ZaEM6O74VsZq2U3PmGxy8UTitxE3ELEGFJP&X-Amz-Signature=f53da7c1aaa0c18e835e09fef027df8288e7fd99512a82174a0abfcff1bd55c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDYWYJG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh6HQ0A47rDabSDdXujjSjnmKuvWOnJUfDEoMmsVKavwIhAJyY6xK5qDBq%2FsCyTlxTQdJ4T0I7PMlbXwL2fezmvOtBKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2BGmtgF4RjeEMLrPUq3ANpR%2BVl6jl8d4ey7VJuS6XUpiYCvE5%2BvahpjR%2BJQ0K1FfKIibJ9aDa5bFfDA4uikzRBUayvv%2FEbiCd8I4TtxFzJz81RAnwqvWWRbjpq%2FFIacqQIjV3U4Nd9EBxsoykqlcg65os5fi54uLoG9wnQrX4OfjGsFrJUvBKHxQEh6nQ%2Fgii2Nu508w%2BFhqv8wj2Lh8CotfwjK1IOrxf2pDKEEYrIELAi4P6z95lVliDvctYjzpQCet28rRP74L58gk5KZ8cXmkQriTOEjb7DgPmRzOi6mt3urQ%2BJ%2BnzVBO3rsId7m3Jd84odjtQIexVJP9jpaiqNhq4glQmNyFreRYwVhAIih5w10wWU2XUE%2BD3JQVWvkTObSOENRYCxbdiLw%2BGisQZS0FfU08zmOPrkZ8xUslYHpldbwsRUAaF2zExDMd6hDaA2Jpj1eqEKIMQNm4ySHhj7Ntur1KZaTDmm5gcgBsGxIgXYHEBkQbLo3ddi3bCqQQIotb8Biw6VINheCAirgxOxP0wOVYJ7UMSPVy5i7hp6lt8vNsQEfYiqoxLP%2FMDz0XrOaE740S45RGpt%2BK0yVCn8qRhAjatBnBpeL5TrP6nrMl2%2B2Th08OSKlieRGh9d9r51ZOWtFszpqCaWPjDp0%2FnCBjqkAVT0zbmz26PnO3Km4VDGgIfA8%2F6fceuVR3eGPiaCfTBta4eKv%2FGOqQqmqtMZQeMRaog78Ftb8hU2hHXP1qRUyEZBCBdsgHdayoyOgjMbLCcP6k8NW4dIo4aF8AOe4iE87SrPbxlCR1mISW1fA384Y185pXy2PM9230NNCovK9nEe1JeH7E1424GtU8flfHfb0%2BTm4b%2BN7GnWrkIk9YRyIf2QxotB&X-Amz-Signature=7e3f7a6207fbe8b1e3bf66347454038246f94d4e2287258a75176407596c35e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
