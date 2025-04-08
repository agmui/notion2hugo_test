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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2TDM3D%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnSb69djdlvlbwWntZIBvf8BIoL37KEHSIFACiMksSAiEAsIExjFgBvzVBziIA0OdxgjkKtjjMBQioo7LM0B0N9aMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIajTRNmSklx1tUucyrcA%2B%2BQOWdy1kiAUG2ZbYI4p0gLcPMuHc1w92OlWOfbXzPIfXcKOMrgqZxkgqOXm5BCVHCJNe6YH7yPfwOMCsSzgMgSP8UhCCwfGt7%2BnLhL5OXsZYZkYkB7Hki26bCSYDI%2BZX7Sw7NRUpKJoB5VzdgyBR6op3qFzio%2BCSK0hfodumDuFNWRueYaJcqOHFdeQJghAxEEQgzu79JooetNsKxAwTNrAxC08B3nr7BozspGbcsjUOyxA%2FeL5BLMtQm4cfP0ILmBphjECfbrE6KynK%2FMAOBRHh0dN6j%2F5071s7ktm22sxhQWkIwuuC1bczk3UUwRkp8EZH2OuxmvUNHFtsWEutKlvyj9D17ROCrR3xd8L5moIvsH9mnaYHL3QvwutJUUJgDkNkIcA%2Bm2Uq2xMhpnyVm%2F5VM%2FOu2qMSQdnoOAWF6cD2I21%2FVgOBHePJzvbeQrSPInV14Vyqy6RrzpBuplg9KsOp%2BweWYH6zGQEo2BNH3lkZ7ebmvx6%2BgQOJDss%2Ba%2ByUCDS%2FIsf6ogzTlk3F9fVt6V3%2Bajpccpdhp7GRkq%2FogOohS5JFfRHe6FNs3c2hy5pZdFKXeoCq6GTdG%2Bs0rExb7EtnoVX1rTIIn2qOqlYA3MEuaqIvnG63DI9hd5ML6l1L8GOqUBxjYTLGhJRn1lpTdwWlcHX8NODkzGjrTuePa96ZzJC7Y7lvigAi7rK6E4ZnLJJfMI6VGypGW9bFSxOwrR02bhRN0%2FJdynIvKG%2BlGVeVP8hBIOULPdhstuUVvSl4%2FBEDnKs7g3scWjg0l6GmVmdDHz5RGVA8Yw%2Bj6UDc225hexsB1fDEppmK%2B1mS3MLTbR4G6DaAPPMhd1lcSET2Vtilw1%2BjzTU%2Fw%2B&X-Amz-Signature=2eb2cf820a8b1a2cfb2015143fb32dd2deea47ea6391ee327f8c2dd67f7e7dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2TDM3D%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnSb69djdlvlbwWntZIBvf8BIoL37KEHSIFACiMksSAiEAsIExjFgBvzVBziIA0OdxgjkKtjjMBQioo7LM0B0N9aMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIajTRNmSklx1tUucyrcA%2B%2BQOWdy1kiAUG2ZbYI4p0gLcPMuHc1w92OlWOfbXzPIfXcKOMrgqZxkgqOXm5BCVHCJNe6YH7yPfwOMCsSzgMgSP8UhCCwfGt7%2BnLhL5OXsZYZkYkB7Hki26bCSYDI%2BZX7Sw7NRUpKJoB5VzdgyBR6op3qFzio%2BCSK0hfodumDuFNWRueYaJcqOHFdeQJghAxEEQgzu79JooetNsKxAwTNrAxC08B3nr7BozspGbcsjUOyxA%2FeL5BLMtQm4cfP0ILmBphjECfbrE6KynK%2FMAOBRHh0dN6j%2F5071s7ktm22sxhQWkIwuuC1bczk3UUwRkp8EZH2OuxmvUNHFtsWEutKlvyj9D17ROCrR3xd8L5moIvsH9mnaYHL3QvwutJUUJgDkNkIcA%2Bm2Uq2xMhpnyVm%2F5VM%2FOu2qMSQdnoOAWF6cD2I21%2FVgOBHePJzvbeQrSPInV14Vyqy6RrzpBuplg9KsOp%2BweWYH6zGQEo2BNH3lkZ7ebmvx6%2BgQOJDss%2Ba%2ByUCDS%2FIsf6ogzTlk3F9fVt6V3%2Bajpccpdhp7GRkq%2FogOohS5JFfRHe6FNs3c2hy5pZdFKXeoCq6GTdG%2Bs0rExb7EtnoVX1rTIIn2qOqlYA3MEuaqIvnG63DI9hd5ML6l1L8GOqUBxjYTLGhJRn1lpTdwWlcHX8NODkzGjrTuePa96ZzJC7Y7lvigAi7rK6E4ZnLJJfMI6VGypGW9bFSxOwrR02bhRN0%2FJdynIvKG%2BlGVeVP8hBIOULPdhstuUVvSl4%2FBEDnKs7g3scWjg0l6GmVmdDHz5RGVA8Yw%2Bj6UDc225hexsB1fDEppmK%2B1mS3MLTbR4G6DaAPPMhd1lcSET2Vtilw1%2BjzTU%2Fw%2B&X-Amz-Signature=e9f42862f826b005964cf407b5125babb1991244cae9a101eaee4e99bb713466&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVYL4DHZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaq8afGK5NnVbpBbO%2Fpqy47kLnQbPvU6TB0TjxA%2FHVZgIhAOkK%2FlcHYC9bk4ITdflbOMFkzDlDFRxLxmKJTEa0ledmKv8DCHUQABoMNjM3NDIzMTgzODA1IgxKw9GoGA%2BY%2BjLTmNQq3ANbl3z1uo0q2s6hscEhZpXbtKvEuWC6%2F6kiit2Laf4Coz4WS35r8ZxBSkLAC1ozY7fASTWEWE5mx8B77TnKLY0pgvmk1VppoZANiz4WK1kIMbWM4qOHIJSACSZCrHETp%2FW2xWqiXguBqZLCV6Xxvvy4dudpkwzGr5h%2Fc26N%2FybYyd0YkqSL%2B2y3zaqBdcOSPEI%2Fv9RN%2B7QqTnMaRLBX8NkHRbkuLpss8Ojr5%2FEZSA8r38Pv088cFm3hYGSgHTOOUmk8Ja8sUEULf0bLC6NpOOFFLkx6ER%2BJUATHSz1eVigoezkp1LtBzcO7QZzKl2F7U99mgshimDQYX%2FAxvPUe%2F7Z5U%2Byt%2F1bvBgOXF6kYNpE4OsGEsCWiL3gABq2fEbVSf%2BK2uzYlMhy2fPtQ1UgfO20WBnz5IXKPpeXtfr%2BlJV8pUAYHWTtHyhY3gKA8UHGXf7VD865tRfcoQEOcLJC4c4coareGdnuL4mt6kZM%2BuS7kWoSegKDrnjSAe4BQjIQ7GKWPABh3ATIknaM4zKewum1PIHjkXXRKIEg3md3%2Bf7Zg8pzsomWTbVihlhCTBuYgQcnFiGhN%2BTT7oX8FC4%2BcxIMsKfnW%2FmiKSjKAsUTJRp9ZPBTe2Z%2FOSH3KY2I%2ByDCDpdS%2FBjqkAe84M0IMfzCqpfeQjVJZM5lGbldUxMyju%2F6iYw%2BrBqWlaIDs6Z5x52ubPSffQoC2RouKp92wOHHqC6H3ubFAI8iOkXNISAZExGtMWFrAcxbG0c6m9vQ5JTUdjdrAoQHj1dchc4JurnLjsDVDDXBOCN0vlUQ0zmNRLsCNx9Qj6%2B8CqqS5txxKJ%2F0y%2BTjSHzTerlZnQsxIi3Jek1fFfW1PQH%2FPrOsP&X-Amz-Signature=11f1a1a01594acc1d24de45d30b421caf01720c512dd6f532275682c4702a035&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLQJ5AQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuBZooxYCKfgIMof27Q%2F%2F0atAvOEVdn0sll99erlnKAIgByy0RP%2BuqIr56DfY0mhJvdkUSmAJ%2BVO6pP9oxwiRp94q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP8P9ynqp7F0tk%2B4CircA7vbMzsNuNB7GCnoFrpC14KeGauwTUh6y2WRx80RUcC5hTYt0XTROAaDFwhOdyxWncpY3OsYIgSEnp2puJEh3ikH2XRQ3EGFJKpQ4JL9teSuHkLsdh1XCWKlgr11dX77ipJESAKeU%2Bm%2BURK8asdb3nje2Z4dOVmv5nh6wzlKIffVUTRlJzLqbiNvaAHk6jHZfVko%2BTogfBHULubdPnat9ZRS8ngxppvCzYBq%2FrGn2%2BAqhTdptjfuGx28AnQa8BaJ5%2FVabe6khstA3iiyyskYnl1%2Fb8fN7l%2B4UbdI7rSrCpS2fLL6CgSDgoygeEklBTAIQV8aMbNCX6oWDjgpb3LjsQBvxd%2Fq5N3p6MSB91IlES9cEeU7fEi34tGc2UvzgW1fWRfY%2BOrwoW7s4%2Bxy7UAKVZDdj9Chl7PgJ30aaPrpNmLbugP8tkKfQguPL%2FJxffVDTnMwVfHh5%2BZjFRtDLuKpnd4LBH3wd%2B%2BqtFL2q1ObsK9LLfQT%2BPyQlZgT4rqxwo56CbNty4N1YeLimi%2B%2B4PC%2FhwlE5OFPgVX48tpGodogWzhihU31%2FBoSXdyt7gWWlSimoGwhP1ibNKRs1mj5Ql2p3%2BQvc5nafKez%2FzjubdOCOHfyXnaK8ByhZuKgVNt8MMuk1L8GOqUB%2BR1nW1i6n279NtgzdajzCnb0y9SrEwq5JR6qfEOzYB%2BTqWAvXPngrqmSkBy4iVr%2BqZKeCvYbljG1G3vH4m5wib%2BPB%2BQUfO1d%2BfOVq90XWZlSVMmWql6vIRedEehgQdu5iMmxnk5qcH4Uuz3fIJS98r1Y7Lvdex%2F5eoDvZFhgeBaOJ1ymwjJlSeR8IlJg9U28r6MjLWpc8bnm8i7lofV3iGlEcJ1g&X-Amz-Signature=63189c12f331512e6dc65c2af89785c3d1f4de520eb79e986fc130ef487f1023&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2TDM3D%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSnSb69djdlvlbwWntZIBvf8BIoL37KEHSIFACiMksSAiEAsIExjFgBvzVBziIA0OdxgjkKtjjMBQioo7LM0B0N9aMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIajTRNmSklx1tUucyrcA%2B%2BQOWdy1kiAUG2ZbYI4p0gLcPMuHc1w92OlWOfbXzPIfXcKOMrgqZxkgqOXm5BCVHCJNe6YH7yPfwOMCsSzgMgSP8UhCCwfGt7%2BnLhL5OXsZYZkYkB7Hki26bCSYDI%2BZX7Sw7NRUpKJoB5VzdgyBR6op3qFzio%2BCSK0hfodumDuFNWRueYaJcqOHFdeQJghAxEEQgzu79JooetNsKxAwTNrAxC08B3nr7BozspGbcsjUOyxA%2FeL5BLMtQm4cfP0ILmBphjECfbrE6KynK%2FMAOBRHh0dN6j%2F5071s7ktm22sxhQWkIwuuC1bczk3UUwRkp8EZH2OuxmvUNHFtsWEutKlvyj9D17ROCrR3xd8L5moIvsH9mnaYHL3QvwutJUUJgDkNkIcA%2Bm2Uq2xMhpnyVm%2F5VM%2FOu2qMSQdnoOAWF6cD2I21%2FVgOBHePJzvbeQrSPInV14Vyqy6RrzpBuplg9KsOp%2BweWYH6zGQEo2BNH3lkZ7ebmvx6%2BgQOJDss%2Ba%2ByUCDS%2FIsf6ogzTlk3F9fVt6V3%2Bajpccpdhp7GRkq%2FogOohS5JFfRHe6FNs3c2hy5pZdFKXeoCq6GTdG%2Bs0rExb7EtnoVX1rTIIn2qOqlYA3MEuaqIvnG63DI9hd5ML6l1L8GOqUBxjYTLGhJRn1lpTdwWlcHX8NODkzGjrTuePa96ZzJC7Y7lvigAi7rK6E4ZnLJJfMI6VGypGW9bFSxOwrR02bhRN0%2FJdynIvKG%2BlGVeVP8hBIOULPdhstuUVvSl4%2FBEDnKs7g3scWjg0l6GmVmdDHz5RGVA8Yw%2Bj6UDc225hexsB1fDEppmK%2B1mS3MLTbR4G6DaAPPMhd1lcSET2Vtilw1%2BjzTU%2Fw%2B&X-Amz-Signature=4ba626af2a90996712f11f61b67d3f5af202c5c8e0f11ed6bcb703533807c1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
