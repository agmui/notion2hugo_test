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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP4GI26%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbCgMPsE9KuzIqExLPXTepCQAaozXXTAeSJS0NIln1KAiEA0IlTC0YFU61IBlMzHrq8Li%2Bq4DQLjE65GmAQnDK0BWgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIUyXEYP8BHgfZHbJircA9pIwt%2FKleMBfXf%2B4QggL6pPzpExcUdXsNhbx88UGE7Wu6wwh3BQFLliP1pYBckFrpHztiruTafKdF6brBCDLLHAg9tTuvDqSAMhSnd9%2FdDrRDWROrzYOdxwVw1Sp24pGwETS65jEFciVVzI2ajJHgaQeB8Fn26N5VI4a8llcjsEQBaMvMwF5p%2BgcSrCTFAR5LkTsru%2F%2BOCi75RahlUXmPBtOiKC4Tfzka6hGQxRNyrbHumsm9t9k3lQom4oaK%2FBhpKHqnCh00%2B7dmxv6EDvm6bKIAhq8vUyanTF%2FjORdbdGTTymOo9HtTSSTTLQrd6jYvp%2BJyQfhWhJwDn%2FWNZ8gtQc3xECa%2BLMl3lzQQtEnZSnlJscj86lM67Z63g5xyc4qstOEZiUfKJHHaCQEkpAb1CaY8kK%2FHky3MsMJwYzDDra039bae7QuhELeVgOjYNu4zUFYR3zvRbpDhFObATsUucBcSCSLNyQPo13CIHKpzFoI7tXF5G41G27IzMXAW%2FDcBJ8YJzFOLCXzLVxWsthijJoxG9d%2Fyw8daDfJD7igXy5QK8%2Fmw0wr4NGf68MT5D7%2FeaHaKYujAPwXjkaS2XZ20tnGRgTrc48eupkJiI14CVqSaGRh8TYfik8rVEEMNXXjMIGOqUBQIe6o%2B%2Fu3bHCiips7q1VxI7Uoaw4g2Y1NDZjDhSQBE4r0jfDwKX23rutcNoMamnOG%2FzsaBnXYhb%2Fk7JmwwBmc3HCnHPV3H8f9KfIxBf2sTeE7blx2p92c%2BdHvu3H01vK%2F%2FWaW%2BgLzRJYhxLtNzk6THEBjP5X5AsVTOaNeaPbQtfj1BXp4O1BIH0bf12C4WouEYf0bcwHR%2F%2BDXgs0gbO0DNqdFife&X-Amz-Signature=70e931a3e533531005f36a0cdc0df01ba6277d3fa3666b427f134298b6264eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP4GI26%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbCgMPsE9KuzIqExLPXTepCQAaozXXTAeSJS0NIln1KAiEA0IlTC0YFU61IBlMzHrq8Li%2Bq4DQLjE65GmAQnDK0BWgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIUyXEYP8BHgfZHbJircA9pIwt%2FKleMBfXf%2B4QggL6pPzpExcUdXsNhbx88UGE7Wu6wwh3BQFLliP1pYBckFrpHztiruTafKdF6brBCDLLHAg9tTuvDqSAMhSnd9%2FdDrRDWROrzYOdxwVw1Sp24pGwETS65jEFciVVzI2ajJHgaQeB8Fn26N5VI4a8llcjsEQBaMvMwF5p%2BgcSrCTFAR5LkTsru%2F%2BOCi75RahlUXmPBtOiKC4Tfzka6hGQxRNyrbHumsm9t9k3lQom4oaK%2FBhpKHqnCh00%2B7dmxv6EDvm6bKIAhq8vUyanTF%2FjORdbdGTTymOo9HtTSSTTLQrd6jYvp%2BJyQfhWhJwDn%2FWNZ8gtQc3xECa%2BLMl3lzQQtEnZSnlJscj86lM67Z63g5xyc4qstOEZiUfKJHHaCQEkpAb1CaY8kK%2FHky3MsMJwYzDDra039bae7QuhELeVgOjYNu4zUFYR3zvRbpDhFObATsUucBcSCSLNyQPo13CIHKpzFoI7tXF5G41G27IzMXAW%2FDcBJ8YJzFOLCXzLVxWsthijJoxG9d%2Fyw8daDfJD7igXy5QK8%2Fmw0wr4NGf68MT5D7%2FeaHaKYujAPwXjkaS2XZ20tnGRgTrc48eupkJiI14CVqSaGRh8TYfik8rVEEMNXXjMIGOqUBQIe6o%2B%2Fu3bHCiips7q1VxI7Uoaw4g2Y1NDZjDhSQBE4r0jfDwKX23rutcNoMamnOG%2FzsaBnXYhb%2Fk7JmwwBmc3HCnHPV3H8f9KfIxBf2sTeE7blx2p92c%2BdHvu3H01vK%2F%2FWaW%2BgLzRJYhxLtNzk6THEBjP5X5AsVTOaNeaPbQtfj1BXp4O1BIH0bf12C4WouEYf0bcwHR%2F%2BDXgs0gbO0DNqdFife&X-Amz-Signature=7d8f117263553c37d901cea1cc697331bb334b4f83cb50e28059c425b1cae2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP4GI26%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbCgMPsE9KuzIqExLPXTepCQAaozXXTAeSJS0NIln1KAiEA0IlTC0YFU61IBlMzHrq8Li%2Bq4DQLjE65GmAQnDK0BWgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIUyXEYP8BHgfZHbJircA9pIwt%2FKleMBfXf%2B4QggL6pPzpExcUdXsNhbx88UGE7Wu6wwh3BQFLliP1pYBckFrpHztiruTafKdF6brBCDLLHAg9tTuvDqSAMhSnd9%2FdDrRDWROrzYOdxwVw1Sp24pGwETS65jEFciVVzI2ajJHgaQeB8Fn26N5VI4a8llcjsEQBaMvMwF5p%2BgcSrCTFAR5LkTsru%2F%2BOCi75RahlUXmPBtOiKC4Tfzka6hGQxRNyrbHumsm9t9k3lQom4oaK%2FBhpKHqnCh00%2B7dmxv6EDvm6bKIAhq8vUyanTF%2FjORdbdGTTymOo9HtTSSTTLQrd6jYvp%2BJyQfhWhJwDn%2FWNZ8gtQc3xECa%2BLMl3lzQQtEnZSnlJscj86lM67Z63g5xyc4qstOEZiUfKJHHaCQEkpAb1CaY8kK%2FHky3MsMJwYzDDra039bae7QuhELeVgOjYNu4zUFYR3zvRbpDhFObATsUucBcSCSLNyQPo13CIHKpzFoI7tXF5G41G27IzMXAW%2FDcBJ8YJzFOLCXzLVxWsthijJoxG9d%2Fyw8daDfJD7igXy5QK8%2Fmw0wr4NGf68MT5D7%2FeaHaKYujAPwXjkaS2XZ20tnGRgTrc48eupkJiI14CVqSaGRh8TYfik8rVEEMNXXjMIGOqUBQIe6o%2B%2Fu3bHCiips7q1VxI7Uoaw4g2Y1NDZjDhSQBE4r0jfDwKX23rutcNoMamnOG%2FzsaBnXYhb%2Fk7JmwwBmc3HCnHPV3H8f9KfIxBf2sTeE7blx2p92c%2BdHvu3H01vK%2F%2FWaW%2BgLzRJYhxLtNzk6THEBjP5X5AsVTOaNeaPbQtfj1BXp4O1BIH0bf12C4WouEYf0bcwHR%2F%2BDXgs0gbO0DNqdFife&X-Amz-Signature=22285ac2a064d6f5941fef17554956fa5c44526d679d1a57befe68a5af961c05&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XADMENDD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCogTTq8jhCD7VaLkQsamMGtVPPsb7m3cMWCnJ2tNs3OwIgTuK0R9lT9Q%2FuJcOg%2F7Ew6rswNJqmPtiAWm2XXHZHr8Aq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2BzS81nufJJUab4SSrcAzv48Z9wTonie07e15peDXCLwU0nDxFR%2FIpJyLKGopJ8d9l7%2FliGFuSHqvB5455Ixf29DeY0QK5tpLGwJjXRGfue06VI9EdzOqCtleq34hnEa%2FlbsLVMfoMjMhk6d4x7Ot%2F0Wi5oTY3LxHC5qrqkGOfRnnX0MAQaxrQblojkR8BsAgBaYL%2B3qd3Sf45ocq2HfoCi0OoQ2Ct5hP%2FOyhBv6icJrzEgiKoRr1bAnneDeyhtJhz9XmXKtBGe%2FodnONfmnX8orrWo95wtgvNh4OrPgqwS1UsE1%2FRPIsJJy9udJdVJMqmaUdVaFsVBdvppUWaSQb9UmWXQW%2BvYRWKkvMsEET6hkSs5HTuRnGNIuGuPQEBR2L2VJcZvCBODHSPMKrdE9Kbp0bmt79ELsQ0HJdmwoQwKouaiWSeN3Qa0YM9S6W0sYg63ybH5qmQXzeRiv5X3DPFYfYKZ0%2FK5hhGAE%2BG4l%2FwWJgNaeE74Faa%2Bvr3as8hxtF1sv3pH564u%2FUyS5sTo%2Fww%2BYjMrIrWNfo%2FuyicRhRh22fMp%2FjchGRj1OkGCqFBKxAE9nFfY9fb0nNHeMZnu7HqSaNN%2FvI8YDdmiHkBF319CWju4LaAG1OlDV6d39o1YC1YZqkzcdPPazmfjMNPWjMIGOqUB8%2BA7fD6fkJca6x7%2Ba1ttl5Vf6MgRFLgKOYbrnvYoLotIEeTkVUEDCExVhKeLURKSo8eFzUC0UlIJYnK6ceU6yb4aAq6xiEfJbBfbkBq76DEPnNhi%2FK0Jic8TiZLU%2BvaztB6ybFDe%2FC9sLtKm5OgC8oNjrlJ92D2XdpGk%2BMlk1%2Fu%2F8fivBETJkJGubt1naZsqqikjAIUHysHgSRRw%2BOoltDq1Hy%2F9&X-Amz-Signature=ef8a1ef8a42af12c3094bbebc7c5ade2b8af26102d405b7ab25aa34f6cb5cc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPXKRKBD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYLNsjgRZEDS2r3dwON3zpmqNmXSVPYpFGuqKXEVnCAiBAfkXiKUtOD5WWAXSERIUDDsM%2FwkA849rg6rTQ0pgPEir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMd97NZgSKpuWRRTh9KtwDqWGOj0dAmhwKnLROdWSkMBDqJBs8geiSpULdTbR%2FHyU%2FCBu25Mo%2F2L8MwtfH4zdxNkNVzaBH7%2FScJYJmnnfzRENQLSQ0gE4EwwCXquEArrCJ9OfkYZxZghZz4OIcMcM7p45K7Fr4VBnMsA6ZBd6Hk9VZPwBLwjuSep42kdtHPMGZjcIbawm0HvbBI9V6CKwyAhNTw1lJdlia02yeiO8MWRIbLWC3zejyJTpAvnZerWwaO1q8rcGHwujn4XYV3sHNJtb8Lc2dpxpoK37D08PaxNihFNv2rWvTiLOgvdWB4QHMT6ILSDt%2Bl0CPG3HSLB8nU7c0U7fULk4fl9snRUKtfeX8XGY%2FDyEYDf%2FWXd9by4ShFp9daIo%2FctjFohYiBl%2FBOPFENDzjiXeWFaFiqTf2Zr2jyqNtov0ssFmGJvfbe7czO8r9duJ6fnldxITMnB5QdxzCIYy9WdAJMbPLofhhQCD52VTLO5dyxO7Tv38iPMWE8rPT7yAURuM80NPodrHhSADlaOJBKxTYOzSh8ES7gAotc8%2FKxPJsy78Dau%2Fs%2B9t859ZJ65B86lG95XGW7hriWGZCJmwve9tMgJYMEsQFsSElZ%2BcN38Th2INKzI752fOEsGWYjHLBp1NHJe0w2daMwgY6pgFMHo5fevBirFFyA6wL228X6AFAvREFUwbvWYS%2FV3AsfEcq%2Fd%2FCpOSxeGmwEZTPs3%2B5tzqbSWQq9iHwKlsikhjZ%2BGXC2UcNM7MzmbDlhdfWXQcbMOlym5UVBhp2hJI90n446gfh8R5WI32K0vNTb7rA4Z7eDECabPm6zLCvKd%2BUUyV5BMJ0nUQRn%2BcdR%2BbzrwTUPbdcdTEE3ifQIUwQI9BEZG5srbGW&X-Amz-Signature=0e798063a8b38a91906a4fc1c58b5f7ec32be4b1c06fa593f4a335949d0e9990&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP4GI26%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbCgMPsE9KuzIqExLPXTepCQAaozXXTAeSJS0NIln1KAiEA0IlTC0YFU61IBlMzHrq8Li%2Bq4DQLjE65GmAQnDK0BWgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIUyXEYP8BHgfZHbJircA9pIwt%2FKleMBfXf%2B4QggL6pPzpExcUdXsNhbx88UGE7Wu6wwh3BQFLliP1pYBckFrpHztiruTafKdF6brBCDLLHAg9tTuvDqSAMhSnd9%2FdDrRDWROrzYOdxwVw1Sp24pGwETS65jEFciVVzI2ajJHgaQeB8Fn26N5VI4a8llcjsEQBaMvMwF5p%2BgcSrCTFAR5LkTsru%2F%2BOCi75RahlUXmPBtOiKC4Tfzka6hGQxRNyrbHumsm9t9k3lQom4oaK%2FBhpKHqnCh00%2B7dmxv6EDvm6bKIAhq8vUyanTF%2FjORdbdGTTymOo9HtTSSTTLQrd6jYvp%2BJyQfhWhJwDn%2FWNZ8gtQc3xECa%2BLMl3lzQQtEnZSnlJscj86lM67Z63g5xyc4qstOEZiUfKJHHaCQEkpAb1CaY8kK%2FHky3MsMJwYzDDra039bae7QuhELeVgOjYNu4zUFYR3zvRbpDhFObATsUucBcSCSLNyQPo13CIHKpzFoI7tXF5G41G27IzMXAW%2FDcBJ8YJzFOLCXzLVxWsthijJoxG9d%2Fyw8daDfJD7igXy5QK8%2Fmw0wr4NGf68MT5D7%2FeaHaKYujAPwXjkaS2XZ20tnGRgTrc48eupkJiI14CVqSaGRh8TYfik8rVEEMNXXjMIGOqUBQIe6o%2B%2Fu3bHCiips7q1VxI7Uoaw4g2Y1NDZjDhSQBE4r0jfDwKX23rutcNoMamnOG%2FzsaBnXYhb%2Fk7JmwwBmc3HCnHPV3H8f9KfIxBf2sTeE7blx2p92c%2BdHvu3H01vK%2F%2FWaW%2BgLzRJYhxLtNzk6THEBjP5X5AsVTOaNeaPbQtfj1BXp4O1BIH0bf12C4WouEYf0bcwHR%2F%2BDXgs0gbO0DNqdFife&X-Amz-Signature=a56a61f21e23bcf2c081aef179b920020fc64044d3ea1e16f1fe7894a03df8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
