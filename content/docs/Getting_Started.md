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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55SUDEJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqlyueDrubsbVN9m60HLCTkXsep0t1qTkwfwSMa%2F0V0AiEA9d4GBfva%2BtRcblH7y6zL8Xj6thwRHbdd%2BPS0lz4Byv8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFMtf7btcI1KsrH4bCrcA7CfYVZHcorDzXEJIY3oOBM%2F0ebQSgGtxCX2n1yZcIY%2FWv9KmfLjqs3Ckj4W%2FNirD4VrNAvFL6C%2BwNyZkU5yF0u1JDqWRgn6dr1JZzmMtSpLN82RZDHEk7hueX1BtKA4qV14uD2bAuCr4lcgrlGZPARy%2FGT%2Bnlimanru9vdzq2FMoZG9D8cshx2bY3dn8UJTicOQp%2BZi4Gh%2FwSrJA0PhTqdPBFVxNZ5nAi6qasF%2BCnzXguhjeTsnyQ0SUsf9zfZANXCB%2BL45uMgg1uIvfNr25hQLw7IMaSFK2llUmWrWr0OikhHcVXqsmW%2B9OPcLBiZk1KorUVfXI7wagiBY6wtZAMJkW552luVP4w2D2gtrJJ6Xqr%2F%2FKZpsnTlJkp4KIs8Juys4oi0UBqd1wiLuKK7vWOJkYJpEpC8IFeZqh9K55%2BMM2oeLfiXSQNSiQRw6VRSUxEZUCb64OB3KQskykYUOYsyoAejDxCjWce%2Fi%2F74sIJAFYbL1DpSxxhN9ylfytoS8hOWwKACl4zxTrb0jbsafP1ItM8gaIC529KTMPudR8R8QBvpIohmmkcCZh9C4gQ6lBIxIjMzoQx0qbjtryDixfxMzunPVPd60hlthJk68PVjRRMzLxN9qsvEReXloMP%2BMhsIGOqUBUmQ9v3%2Bo3RcSUtbsHC%2FsQ3J%2BcTFk86%2Fhve2Sv572UQTkMmh9HGI6N1QEDKiTyEjF38JkSqq4qdX5eGIksD0W5Gx7k5OItHfAGwaubNB4kXTSWZO74V%2FKeMDVyMSepX%2BJfISYWiU2YD8wJOr8n%2BVrSOIWn4HICQGcVItkeEqtTLWU9OAM0AfCV4Em%2B9H6I29lSJbzmefaXmJAyrw%2Bko%2FtSph094QA&X-Amz-Signature=349bc042dbe323be2093428e472106c8a5583c3efbf3a634519137ada5f204a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55SUDEJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqlyueDrubsbVN9m60HLCTkXsep0t1qTkwfwSMa%2F0V0AiEA9d4GBfva%2BtRcblH7y6zL8Xj6thwRHbdd%2BPS0lz4Byv8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFMtf7btcI1KsrH4bCrcA7CfYVZHcorDzXEJIY3oOBM%2F0ebQSgGtxCX2n1yZcIY%2FWv9KmfLjqs3Ckj4W%2FNirD4VrNAvFL6C%2BwNyZkU5yF0u1JDqWRgn6dr1JZzmMtSpLN82RZDHEk7hueX1BtKA4qV14uD2bAuCr4lcgrlGZPARy%2FGT%2Bnlimanru9vdzq2FMoZG9D8cshx2bY3dn8UJTicOQp%2BZi4Gh%2FwSrJA0PhTqdPBFVxNZ5nAi6qasF%2BCnzXguhjeTsnyQ0SUsf9zfZANXCB%2BL45uMgg1uIvfNr25hQLw7IMaSFK2llUmWrWr0OikhHcVXqsmW%2B9OPcLBiZk1KorUVfXI7wagiBY6wtZAMJkW552luVP4w2D2gtrJJ6Xqr%2F%2FKZpsnTlJkp4KIs8Juys4oi0UBqd1wiLuKK7vWOJkYJpEpC8IFeZqh9K55%2BMM2oeLfiXSQNSiQRw6VRSUxEZUCb64OB3KQskykYUOYsyoAejDxCjWce%2Fi%2F74sIJAFYbL1DpSxxhN9ylfytoS8hOWwKACl4zxTrb0jbsafP1ItM8gaIC529KTMPudR8R8QBvpIohmmkcCZh9C4gQ6lBIxIjMzoQx0qbjtryDixfxMzunPVPd60hlthJk68PVjRRMzLxN9qsvEReXloMP%2BMhsIGOqUBUmQ9v3%2Bo3RcSUtbsHC%2FsQ3J%2BcTFk86%2Fhve2Sv572UQTkMmh9HGI6N1QEDKiTyEjF38JkSqq4qdX5eGIksD0W5Gx7k5OItHfAGwaubNB4kXTSWZO74V%2FKeMDVyMSepX%2BJfISYWiU2YD8wJOr8n%2BVrSOIWn4HICQGcVItkeEqtTLWU9OAM0AfCV4Em%2B9H6I29lSJbzmefaXmJAyrw%2Bko%2FtSph094QA&X-Amz-Signature=7de8a7718a779c0d08780aaa03ad3403cd228c50f3e3dbd58c46136353b99be7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55SUDEJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqlyueDrubsbVN9m60HLCTkXsep0t1qTkwfwSMa%2F0V0AiEA9d4GBfva%2BtRcblH7y6zL8Xj6thwRHbdd%2BPS0lz4Byv8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFMtf7btcI1KsrH4bCrcA7CfYVZHcorDzXEJIY3oOBM%2F0ebQSgGtxCX2n1yZcIY%2FWv9KmfLjqs3Ckj4W%2FNirD4VrNAvFL6C%2BwNyZkU5yF0u1JDqWRgn6dr1JZzmMtSpLN82RZDHEk7hueX1BtKA4qV14uD2bAuCr4lcgrlGZPARy%2FGT%2Bnlimanru9vdzq2FMoZG9D8cshx2bY3dn8UJTicOQp%2BZi4Gh%2FwSrJA0PhTqdPBFVxNZ5nAi6qasF%2BCnzXguhjeTsnyQ0SUsf9zfZANXCB%2BL45uMgg1uIvfNr25hQLw7IMaSFK2llUmWrWr0OikhHcVXqsmW%2B9OPcLBiZk1KorUVfXI7wagiBY6wtZAMJkW552luVP4w2D2gtrJJ6Xqr%2F%2FKZpsnTlJkp4KIs8Juys4oi0UBqd1wiLuKK7vWOJkYJpEpC8IFeZqh9K55%2BMM2oeLfiXSQNSiQRw6VRSUxEZUCb64OB3KQskykYUOYsyoAejDxCjWce%2Fi%2F74sIJAFYbL1DpSxxhN9ylfytoS8hOWwKACl4zxTrb0jbsafP1ItM8gaIC529KTMPudR8R8QBvpIohmmkcCZh9C4gQ6lBIxIjMzoQx0qbjtryDixfxMzunPVPd60hlthJk68PVjRRMzLxN9qsvEReXloMP%2BMhsIGOqUBUmQ9v3%2Bo3RcSUtbsHC%2FsQ3J%2BcTFk86%2Fhve2Sv572UQTkMmh9HGI6N1QEDKiTyEjF38JkSqq4qdX5eGIksD0W5Gx7k5OItHfAGwaubNB4kXTSWZO74V%2FKeMDVyMSepX%2BJfISYWiU2YD8wJOr8n%2BVrSOIWn4HICQGcVItkeEqtTLWU9OAM0AfCV4Em%2B9H6I29lSJbzmefaXmJAyrw%2Bko%2FtSph094QA&X-Amz-Signature=fc3139a06fcc82f273a12e21beec03735ae1556be1f4e73d69aa3b5a54a18fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHXXANU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICU21AXlGxEc0F9UM%2BbAhLGTRZ8U3ql5nSFnTr1TbZhYAiEAvTwC0oPHLNThemQtRgRTMA%2B1e83F0%2BFaOXXsmve8wf0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJVzFulzHxJwlj3tBCrcA8fJXTtB2bs5D7VIdPoI4crmq2WJotejHQH6iCHFedpL8EIerKdZx4Vc3rl%2BvbxhXKBGsanhrHRczLLRTZqOScdKWNvEY95wzpXCtYmWlcf0zYCAV2HdgekWIzhGo5ab8RZVqfsf9lM3PS9r85QuK19Veaqqxh%2BYk2VJ7MK1LCNpIDwgj4N0oDmS8T9A7yKoNoysoHxYLG77NYYUh4BMOtJO5Y5ZZ1liI%2BHjIYyhp%2BojAQYC%2BW0gvl4h9sq3pVh%2FzW4phFT6GuD1ekdipeivFPrbQ0%2FuKfZCJwIQGHqBBJW1k1Qt7%2FQnIYGYUnKeyKBCbtd2oigXztNIiRrEylRFFMigdl9GtH3T4AvZa0Nilz9KhkA9Yglk7XRpuovCx9uxhknL%2FJnJBJbTgUOXiutD2y6PpKvCjeJEJ6mibo5Wxxr2QNpvrdrInVZeLp%2Fk5Ap9vYrPmpuM3zabi0vVEKjAIHLYDcWtxKp2OaxqduFssFiN6H9AMVaQYzU0VwqqlGouxdfkbkxGDD1YiWXjA8%2BOx32QGWh2cDDybm31rm1MARxW2JNfYZYTQEtau%2Fy7eKoIXwG2nmHCLvZY0R2vLr6mAqHDHaBp%2BSj3jucfiwPeEa9Omv1AWAC8n7KsMQn7MIaNhsIGOqUBa3BJyhCjSM%2BmP2o9MpK4PGhQovrtxTDhkLrlSbHhw1r%2FoMDzCqmn51I1QosCeKJeqgjr5wCFpdiGz1hV%2FiMOb%2FEGO4MrSItbBYPDFCjmHfvwrGa9eL%2B6GaLWtUuDWkwYM1CmQBW6SZJCletsb%2FADO%2FLARgP5cO4EdMk%2BadVUwoTJvODfBCnT%2FBMxSTuHMcLOQEePpDCNtISxEfQE9ldHZmlBIpn9&X-Amz-Signature=a0ee9ae2850fba2aea033bdf2aa53754fc4161aa129997dc3215ad3e1c516df8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC42O6FN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCWeq9IIjLY048pkiQKmjWJH3zT221hzHvYyOVOKkn1wwIgKUIMa9o3xoNLg9rBSPquq0lHAg4qzqO0Dso3kwQRIq4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDL4bgA18e%2BfIpLOUiCrcAxNTNuQmtQfzxXk6%2B8RjvjGTj8iGDl6Vg223HF5wB23gLdpuo86s08WHcVSQaVUinuMzPF3Uq1pL30BhvfD1o1t6AMSXJK5TNyPGvzT%2BSjKWWtnuAPhi%2BhOSjF7eWyo12aDP9YoeCbdviEd5JHZQSnEWYW%2FDlhNiqOKhZS9FmvO6wVG8iMyY7ypLIZ%2FJqGnR%2BsxqwFOwxI10fSzpX7B3p%2BQGoK4HYgYhnYekb0dp9irEV00uuR91pKWZm6JXFQptpdprWJAcXVBVpPWfGLUJdBeoqpA705hbvhLnN5Dfm1lZclFTbC2xMwJasw9fBFZ30o2EQqWNt%2FxvbBMzuTVf2ReHXNJxz6nJLIJ%2FdS1aI5TwOcP9viXPtdRhMx4NW3gZeBs%2FiBLNsomhGRYA6UEPejPJo%2BQ0SYeFTQ6zgRI%2F%2FR1qzgXUbGkBRZZgprz1OMGksa21XVMfkLHthF0hbCNKg2mAqFNwk7lbcRTfiFFWjBApZ4E1t%2FnhupxTo80yJz92PIT4266%2Br8iDwfcqeYCdkjLyiLcquWp7jihtymab%2Fjmxpoy7GNUbbYjBSO6qWxwP8LhXmsJpeF41erUlZrPLokalON%2B3vE4aJQKqs0cPgmVd5OBmgH6CiogumdvkMMOMhsIGOqUBrRJKRiEcbH0z8Y%2FLiRD1bpeFxyuQs5aKfYWELpe1AD%2F5rMl6a%2Fzbi7l0gjoi8gpjyOELGVRDFQE9%2BEV5SNKJwaWCa7%2B%2F1Eq4DYW7Kthz52jakBnz2sbjC10Ozob5GxubDI0GRChl6puqusUJieANrDLCSDZcJagEIy97uk4PiCFKWY9cCVRvmbjsToH1KboTaYhCsnpmaD%2Blzi2O9b704mx1Mh4T&X-Amz-Signature=62d53f8957b50ed5dfc27483b220bd15f8f3c6fe3a8a73fcd36a0116f76cdf6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55SUDEJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFqlyueDrubsbVN9m60HLCTkXsep0t1qTkwfwSMa%2F0V0AiEA9d4GBfva%2BtRcblH7y6zL8Xj6thwRHbdd%2BPS0lz4Byv8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFMtf7btcI1KsrH4bCrcA7CfYVZHcorDzXEJIY3oOBM%2F0ebQSgGtxCX2n1yZcIY%2FWv9KmfLjqs3Ckj4W%2FNirD4VrNAvFL6C%2BwNyZkU5yF0u1JDqWRgn6dr1JZzmMtSpLN82RZDHEk7hueX1BtKA4qV14uD2bAuCr4lcgrlGZPARy%2FGT%2Bnlimanru9vdzq2FMoZG9D8cshx2bY3dn8UJTicOQp%2BZi4Gh%2FwSrJA0PhTqdPBFVxNZ5nAi6qasF%2BCnzXguhjeTsnyQ0SUsf9zfZANXCB%2BL45uMgg1uIvfNr25hQLw7IMaSFK2llUmWrWr0OikhHcVXqsmW%2B9OPcLBiZk1KorUVfXI7wagiBY6wtZAMJkW552luVP4w2D2gtrJJ6Xqr%2F%2FKZpsnTlJkp4KIs8Juys4oi0UBqd1wiLuKK7vWOJkYJpEpC8IFeZqh9K55%2BMM2oeLfiXSQNSiQRw6VRSUxEZUCb64OB3KQskykYUOYsyoAejDxCjWce%2Fi%2F74sIJAFYbL1DpSxxhN9ylfytoS8hOWwKACl4zxTrb0jbsafP1ItM8gaIC529KTMPudR8R8QBvpIohmmkcCZh9C4gQ6lBIxIjMzoQx0qbjtryDixfxMzunPVPd60hlthJk68PVjRRMzLxN9qsvEReXloMP%2BMhsIGOqUBUmQ9v3%2Bo3RcSUtbsHC%2FsQ3J%2BcTFk86%2Fhve2Sv572UQTkMmh9HGI6N1QEDKiTyEjF38JkSqq4qdX5eGIksD0W5Gx7k5OItHfAGwaubNB4kXTSWZO74V%2FKeMDVyMSepX%2BJfISYWiU2YD8wJOr8n%2BVrSOIWn4HICQGcVItkeEqtTLWU9OAM0AfCV4Em%2B9H6I29lSJbzmefaXmJAyrw%2Bko%2FtSph094QA&X-Amz-Signature=9a6f50332a5447a38c95a5e5896ce85158cb80a57adb8c8e47ed8f57c59bc9de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
