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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOZFBBV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEOqsGKji%2Fh7IIth5XWApDIVORnNW7aEeJ%2FTKE1S0HVbAiBHG02nTHbqP%2B8GShC%2BvCbXNt45Bpyh%2Fp7jAjzcQWy2LSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdB2fy0qNeM8FDPZUKtwDKUwyilXrJ4D68zqkPMjkdXNgkekxfzM42DGhcz%2Brjwhqfc6uOwn3poX9LP2mmFkaUcg9r6AUx1xO2ncgjJnyKgtFxq3k64b%2FatSPvFDm2p7FHo4yu8aMNYu%2FcBxbua0hVom9u7UIMLiIteclu%2BENVdi4wC2bW%2FkUl8atJPbmtoANDwsHB%2BIBOUHcLCeICG5nwbmuLh0iuBGqaR28Snsm1%2Bs%2Bjis8C5tCLBdiW77Tx2rdHonvmClRbpAtvqGcYJuHQrGTviInIrtjvSoGhSPwAjBt4mpFNX6aTO6%2B6WqmMRXCQ7kyizINSYIutjxYyYefnuF1KG6zX1BdVJ36QLvXM5Dn0%2FYAeF5ksBkNxUSLM3qMV0T6LMU815sflH71E%2BxJyGz3bFKj1rwdh8Ir1PCrd%2Bg8fEou92YmRwwrlTu6TgYo0RVNs%2FM9kYFmJbXJSaj940yD4pibF7ZdbGeHy8s2zZhjXqloxC3rV5g9bFfx0pvQ1q3Lwu1qydEWKqUL3ALg2yVdO5M0USTyOMedwz486BiSL1j1XeCgeBmzavSqjDqhiNSRyf%2Fm3kazs3SycHM5k3vcVzeMMEjT1Kyod7%2FRfJLh5wTT6liBc23EEuIM%2BCs8%2B1M6xfuFeTTekDMwzor5vgY6pgFDV2KS9iIb%2FhJB2VnxUIVEDzGZOC8PyqBC5g65bO2UUSM5eQTjARHj6lICvXmbPM8EqPIFrppcjg7Wx4KT0Y5YOSoEjPSF%2FSeYqEanVwiWFoDtzss3tY2xNw0YxqX%2FbLFUb2kg%2BEbSIzzbymAYcPQxnlNR%2BoRd0B%2FN3rY%2FUy02sf0GOeGc42LRZLnpNLgiJp4%2BVhNOTdlcX3Etr%2B8601L6YF16D02W&X-Amz-Signature=352ab39386f472518c1af34d1cf081a3c6071e2e5d1d9a93c4ffa6f554ad3f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOZFBBV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEOqsGKji%2Fh7IIth5XWApDIVORnNW7aEeJ%2FTKE1S0HVbAiBHG02nTHbqP%2B8GShC%2BvCbXNt45Bpyh%2Fp7jAjzcQWy2LSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdB2fy0qNeM8FDPZUKtwDKUwyilXrJ4D68zqkPMjkdXNgkekxfzM42DGhcz%2Brjwhqfc6uOwn3poX9LP2mmFkaUcg9r6AUx1xO2ncgjJnyKgtFxq3k64b%2FatSPvFDm2p7FHo4yu8aMNYu%2FcBxbua0hVom9u7UIMLiIteclu%2BENVdi4wC2bW%2FkUl8atJPbmtoANDwsHB%2BIBOUHcLCeICG5nwbmuLh0iuBGqaR28Snsm1%2Bs%2Bjis8C5tCLBdiW77Tx2rdHonvmClRbpAtvqGcYJuHQrGTviInIrtjvSoGhSPwAjBt4mpFNX6aTO6%2B6WqmMRXCQ7kyizINSYIutjxYyYefnuF1KG6zX1BdVJ36QLvXM5Dn0%2FYAeF5ksBkNxUSLM3qMV0T6LMU815sflH71E%2BxJyGz3bFKj1rwdh8Ir1PCrd%2Bg8fEou92YmRwwrlTu6TgYo0RVNs%2FM9kYFmJbXJSaj940yD4pibF7ZdbGeHy8s2zZhjXqloxC3rV5g9bFfx0pvQ1q3Lwu1qydEWKqUL3ALg2yVdO5M0USTyOMedwz486BiSL1j1XeCgeBmzavSqjDqhiNSRyf%2Fm3kazs3SycHM5k3vcVzeMMEjT1Kyod7%2FRfJLh5wTT6liBc23EEuIM%2BCs8%2B1M6xfuFeTTekDMwzor5vgY6pgFDV2KS9iIb%2FhJB2VnxUIVEDzGZOC8PyqBC5g65bO2UUSM5eQTjARHj6lICvXmbPM8EqPIFrppcjg7Wx4KT0Y5YOSoEjPSF%2FSeYqEanVwiWFoDtzss3tY2xNw0YxqX%2FbLFUb2kg%2BEbSIzzbymAYcPQxnlNR%2BoRd0B%2FN3rY%2FUy02sf0GOeGc42LRZLnpNLgiJp4%2BVhNOTdlcX3Etr%2B8601L6YF16D02W&X-Amz-Signature=9517b28376a365b0ea62a2a948b39911608f6afaef9f29fcee315a972724e360&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKQJA45%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDFP8o%2BBGLeSnuxSu5wEfbGWHBIxbimRiNq14Qs%2BdWqrgIgfZlZ7I%2FUxFfJ2sOLXHTS0jWBPQQggPlYdymVIHWlyWAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMv4AhImpzw%2BpJHwUSrcA9BIOVZvOtW%2FyTYuZYu%2Fsts0PN0mvhGCuj885y%2F3bLK%2FKlztw5eZUFqxECemxOeTHbLRpEOor1DiQPGN6aZ9VEG9yhFAVZt3lJ3RR517rxwryF5ZzKue%2BFS0V6EEY3vVDbP81bbYtzcENSqiROvu01v%2FadunYrGURJWK%2BUri03YFMRVLTixXy6qKvL2SN89WqjBs%2FXsJ2j7KPl1224wFKjGcIbXO7SA3zrciHf5EgrAN8BLN%2B4BmLGTO3YKYFhtAWSuv19shILCbVW4CV14dW6ov7FO3wIkpvcDsP7NNPXxcIsj7WdeUxaYs2BvMwYn3niE7HWPjUBlz7ngw%2FJ4KEDv%2BjP2i7jgjLxr1BtCG%2Bj3rIgGXmeFXlUOo6ov6phKFRGx69q1S%2BL1Sam7tRXyszLYDwMTA8ldcfpq3fhs7vN%2BYl81WjkE%2FKG8VU4AT8%2Fk12BTZb8mJrBPLFE7QabGyxS5%2BQ6OsI5rmdXhVDA1c8bKog5jMMzwjru59eQwyEee7B%2BdFlnqC6Q0ZDE9xweVfWDxU1rm84o11VyoHQWxY9QC20eB83ThPYT234uex2c4M%2FIDCh7mPTbk6L6m0YN5DIxlEL%2BbOcD2QjLEuoQ3R4jSrJlRA802ims54DOEZMI%2Fp%2BL4GOqUBfHOpGfKWbYHcLnPn5lPouacGOJWI3vwjtSi9tYXJK3IFgSbi5Wa6hlXWUoN99BW1v%2BiVTxkgq%2F3wWqAzQ8fNcXW0Vtcbv8IDsijG73%2FdGnZ8baK8SFx6yJoo0lS0dbwic36xaY7GqKf1J7%2BMTNm6VfK3eVaSHlT%2FK8BksTUdrweOg62adCQh5I4XUNCsY8uoA4A58eT4yw8YD%2Bci6iSuzR21mi9B&X-Amz-Signature=298e2c21679592449600f92bfdcfdde055d9fa0b37504602ad8cc2481f9abf9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XTSMTM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICdUSumaoN33Ws5gDOgMZ2C8ARUkgth2n1prpfJ%2F3wKyAiEAz3bJsfynfcXN0nsHKTbvswd7AatAWYZsYDu4rpU2OS0qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2B%2FeqJ%2BDBppVcobHSrcAx2uGcxtvGuT7l7gIADqVeCTCRsR9KgqMpy2rpSCEM%2FUjFGCF%2Fz7dHstG3r4AEquu6hAGWsLheNilH%2Bmr7ZsBkJFBVqCawE96xyZQdC2sywuQbQC6J9leuhhsQNkpeH9hhXs5IsroledPAW%2FmdG2imROFRhWVGD7WXXPd%2BwviwI%2FuU86jeQ0ViZakAg7%2Fin%2Fd2o15BMhwjKnO8yIHAUsdfP3St%2FTuhjr9ypn6e7dhvzRWeyaLa0HNzUq5%2Bpd5S3xq0uPOqY%2FIVvxvAHKf0F%2BenQ7msSQETzOcSahbeea%2B6LVva%2FsQrtikoxc7EuSgvgFrmWSe%2BzYd81ZGRu99R69hyHViUyqI8CsWJ9SUuB5V%2BPFtQhmJ7aa8yiKT3YMEJA%2F4A8Ipodpe%2FNLs5E%2FCtO%2FJykkIzGrWBMrnnz850%2B6o9JXIAhHdLbkKa7Xn6LDzKU9fgrCH7NclpTTZ5vyXJ8kFTa73Q7N0SxDSjsUOBrrDHzhd49oTa3ZF0qZf9yVTRNVRKnSYxZ4wK15%2BWDZQcu9i63S7IuIEz5gJVNHi8yv9ePrPci6ZPXnxWmvNzT5PtD1nPoQ8uuyT%2FVgwItM5cgMi4RZTiyI22rjKz5DzrkmJ8VK9B7GDEMiytlg5D00MMqK%2Bb4GOqUB2dWnvzPvsQucHgrgkQFfjfST0NezEtrgknRbfBydpesxhE9pAw7rd9A4hoUsK4oSuXzeSp0SNhFGhjw0mW9uuncp9u31RT7JkqRo0LiKftoxZRaCN4fh%2FAY3JEd8ydyoifxOhV9RU0nlTnvGiXrUZtFNfWv5upOCjnu7CkLDuKEW4CF6NcvAvrbd8YXBzUJBIqJsEfLpZA8MswFGiTKr5GqTy1W%2F&X-Amz-Signature=ada87241ada8591bbde040c40c39c5285ac52fa4b1555312246cf6cccd5c7b15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOZFBBV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEOqsGKji%2Fh7IIth5XWApDIVORnNW7aEeJ%2FTKE1S0HVbAiBHG02nTHbqP%2B8GShC%2BvCbXNt45Bpyh%2Fp7jAjzcQWy2LSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdB2fy0qNeM8FDPZUKtwDKUwyilXrJ4D68zqkPMjkdXNgkekxfzM42DGhcz%2Brjwhqfc6uOwn3poX9LP2mmFkaUcg9r6AUx1xO2ncgjJnyKgtFxq3k64b%2FatSPvFDm2p7FHo4yu8aMNYu%2FcBxbua0hVom9u7UIMLiIteclu%2BENVdi4wC2bW%2FkUl8atJPbmtoANDwsHB%2BIBOUHcLCeICG5nwbmuLh0iuBGqaR28Snsm1%2Bs%2Bjis8C5tCLBdiW77Tx2rdHonvmClRbpAtvqGcYJuHQrGTviInIrtjvSoGhSPwAjBt4mpFNX6aTO6%2B6WqmMRXCQ7kyizINSYIutjxYyYefnuF1KG6zX1BdVJ36QLvXM5Dn0%2FYAeF5ksBkNxUSLM3qMV0T6LMU815sflH71E%2BxJyGz3bFKj1rwdh8Ir1PCrd%2Bg8fEou92YmRwwrlTu6TgYo0RVNs%2FM9kYFmJbXJSaj940yD4pibF7ZdbGeHy8s2zZhjXqloxC3rV5g9bFfx0pvQ1q3Lwu1qydEWKqUL3ALg2yVdO5M0USTyOMedwz486BiSL1j1XeCgeBmzavSqjDqhiNSRyf%2Fm3kazs3SycHM5k3vcVzeMMEjT1Kyod7%2FRfJLh5wTT6liBc23EEuIM%2BCs8%2B1M6xfuFeTTekDMwzor5vgY6pgFDV2KS9iIb%2FhJB2VnxUIVEDzGZOC8PyqBC5g65bO2UUSM5eQTjARHj6lICvXmbPM8EqPIFrppcjg7Wx4KT0Y5YOSoEjPSF%2FSeYqEanVwiWFoDtzss3tY2xNw0YxqX%2FbLFUb2kg%2BEbSIzzbymAYcPQxnlNR%2BoRd0B%2FN3rY%2FUy02sf0GOeGc42LRZLnpNLgiJp4%2BVhNOTdlcX3Etr%2B8601L6YF16D02W&X-Amz-Signature=48df08f5fee767e25b5a532ca3dc66cb90dcf311d53b30d7f84906cfb64c71f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
