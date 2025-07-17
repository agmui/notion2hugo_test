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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPT2IUU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCEJWte3oOUcL4PvPDhoDvkjJSI%2FaBGqDJ2vUZ7vgYoxgIhAMdsO%2BCra%2BbKMvoBpexMzRWnKDiDOf1zsHWoEg63T0kYKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9afGnEMSe%2Bir2a1oq3APVi%2FQDS257GUpOZBBO9xnhRxf00zvj7ZoT5UVq3YiWKIi9FNF4JCEF%2BhI85O4FQPTUmnmBnREyzB%2Ba1O4pUCl1bZ6rNRY3sHVoaBOEOTxZYamvrWJyo1Nz1dsNxVD7UnwB016Hmk%2B7eJS7ki1egDN5eCmPcZtMOYOle3GnlplLUU2oKnp%2FiFn3cIOKJfLEsnjDQrZjUi3mywz%2FRbTdHwUuhms3AuvF0skMqBZ9dt2BoBLknXp1Lv0sEUSRLpkUAQhukh%2FB5jyXMyycve%2BaQacAhg1HG0yHxZYcnDPgN62VMwuSyk8N7UFLfYWow6AYOEdg1zSGK%2BF4OHkFpEH6qdoXmqIBdjsOTU%2Byb9vjpNm1HeroOjpNjXH%2FQypdyVuasBU6P1XxSXx4MBkJn2oe3D3jO3hzEYbq0XGJYAMhqL3GE7lOmqgtfUPFFPjNBel9JKIMmyLz7UkVJ8AdsUC9caEGx9G58zuXetyBBGy91WZ3EZFMXx65lzowKZvjtBekZT2lt%2FAdLoahC%2Fs9gWfnoXRX%2F4uKb6I5VNxNmzzZUtxTcxa1oNpAqeBBYw0%2F5zVK3i0%2FLYgkAwG%2FnLlib9C8wol%2BnFyORophwp47oCgX69tw%2FWDjcC8nwH589lWBJzDct%2BXDBjqkAeXumJuIYXgQx83z7OxC4K5%2F3%2F6O4FNnFCRcu2I5%2BbiH5R9Fkt7tWMp%2FQf7s77HQ%2FJ6VXs8l6TFMYJ7lr%2B9suFzByFiMXReVoE8lNfUxLCV7MkQXH6crrBkUu8n2u1F7VX%2FdYO9fcgK%2F7P0dsVs7xk3zLHqnsuJE%2F1cOoswQ8cleEc%2FLilXgVWPOFgLTuqC0dUqJlme790wd47ayBXCk0oDkGh9L&X-Amz-Signature=57db8fe3c8167640168985946326c24141be5e5cb5072e36a15db95a5f6f7948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPT2IUU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCEJWte3oOUcL4PvPDhoDvkjJSI%2FaBGqDJ2vUZ7vgYoxgIhAMdsO%2BCra%2BbKMvoBpexMzRWnKDiDOf1zsHWoEg63T0kYKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9afGnEMSe%2Bir2a1oq3APVi%2FQDS257GUpOZBBO9xnhRxf00zvj7ZoT5UVq3YiWKIi9FNF4JCEF%2BhI85O4FQPTUmnmBnREyzB%2Ba1O4pUCl1bZ6rNRY3sHVoaBOEOTxZYamvrWJyo1Nz1dsNxVD7UnwB016Hmk%2B7eJS7ki1egDN5eCmPcZtMOYOle3GnlplLUU2oKnp%2FiFn3cIOKJfLEsnjDQrZjUi3mywz%2FRbTdHwUuhms3AuvF0skMqBZ9dt2BoBLknXp1Lv0sEUSRLpkUAQhukh%2FB5jyXMyycve%2BaQacAhg1HG0yHxZYcnDPgN62VMwuSyk8N7UFLfYWow6AYOEdg1zSGK%2BF4OHkFpEH6qdoXmqIBdjsOTU%2Byb9vjpNm1HeroOjpNjXH%2FQypdyVuasBU6P1XxSXx4MBkJn2oe3D3jO3hzEYbq0XGJYAMhqL3GE7lOmqgtfUPFFPjNBel9JKIMmyLz7UkVJ8AdsUC9caEGx9G58zuXetyBBGy91WZ3EZFMXx65lzowKZvjtBekZT2lt%2FAdLoahC%2Fs9gWfnoXRX%2F4uKb6I5VNxNmzzZUtxTcxa1oNpAqeBBYw0%2F5zVK3i0%2FLYgkAwG%2FnLlib9C8wol%2BnFyORophwp47oCgX69tw%2FWDjcC8nwH589lWBJzDct%2BXDBjqkAeXumJuIYXgQx83z7OxC4K5%2F3%2F6O4FNnFCRcu2I5%2BbiH5R9Fkt7tWMp%2FQf7s77HQ%2FJ6VXs8l6TFMYJ7lr%2B9suFzByFiMXReVoE8lNfUxLCV7MkQXH6crrBkUu8n2u1F7VX%2FdYO9fcgK%2F7P0dsVs7xk3zLHqnsuJE%2F1cOoswQ8cleEc%2FLilXgVWPOFgLTuqC0dUqJlme790wd47ayBXCk0oDkGh9L&X-Amz-Signature=18d66c29c48c4d9f65ecd1c66cde462a508f5097967c00b127365a98aff46025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPT2IUU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCEJWte3oOUcL4PvPDhoDvkjJSI%2FaBGqDJ2vUZ7vgYoxgIhAMdsO%2BCra%2BbKMvoBpexMzRWnKDiDOf1zsHWoEg63T0kYKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9afGnEMSe%2Bir2a1oq3APVi%2FQDS257GUpOZBBO9xnhRxf00zvj7ZoT5UVq3YiWKIi9FNF4JCEF%2BhI85O4FQPTUmnmBnREyzB%2Ba1O4pUCl1bZ6rNRY3sHVoaBOEOTxZYamvrWJyo1Nz1dsNxVD7UnwB016Hmk%2B7eJS7ki1egDN5eCmPcZtMOYOle3GnlplLUU2oKnp%2FiFn3cIOKJfLEsnjDQrZjUi3mywz%2FRbTdHwUuhms3AuvF0skMqBZ9dt2BoBLknXp1Lv0sEUSRLpkUAQhukh%2FB5jyXMyycve%2BaQacAhg1HG0yHxZYcnDPgN62VMwuSyk8N7UFLfYWow6AYOEdg1zSGK%2BF4OHkFpEH6qdoXmqIBdjsOTU%2Byb9vjpNm1HeroOjpNjXH%2FQypdyVuasBU6P1XxSXx4MBkJn2oe3D3jO3hzEYbq0XGJYAMhqL3GE7lOmqgtfUPFFPjNBel9JKIMmyLz7UkVJ8AdsUC9caEGx9G58zuXetyBBGy91WZ3EZFMXx65lzowKZvjtBekZT2lt%2FAdLoahC%2Fs9gWfnoXRX%2F4uKb6I5VNxNmzzZUtxTcxa1oNpAqeBBYw0%2F5zVK3i0%2FLYgkAwG%2FnLlib9C8wol%2BnFyORophwp47oCgX69tw%2FWDjcC8nwH589lWBJzDct%2BXDBjqkAeXumJuIYXgQx83z7OxC4K5%2F3%2F6O4FNnFCRcu2I5%2BbiH5R9Fkt7tWMp%2FQf7s77HQ%2FJ6VXs8l6TFMYJ7lr%2B9suFzByFiMXReVoE8lNfUxLCV7MkQXH6crrBkUu8n2u1F7VX%2FdYO9fcgK%2F7P0dsVs7xk3zLHqnsuJE%2F1cOoswQ8cleEc%2FLilXgVWPOFgLTuqC0dUqJlme790wd47ayBXCk0oDkGh9L&X-Amz-Signature=be3a07d4d24f0995e24915bee340e6bcf09ba43e2ef363b909e64c58687f1817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQGDNLDR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDo%2Bsw8q7%2FJhsFmMIKKQCgA%2FKVuGjIUwrn3tVjJwUUQDQIhALJKpQvO4eCOAwFspo6Zf92ZOoBUgGJtdUuPLsK8UTcbKv8DCH0QABoMNjM3NDIzMTgzODA1Igy1dPSDgeYnCd598Kkq3AOprqQMl6WXm%2FU6FKCH%2FFkY98ycncesswG8HnzP8HZsy%2Bvk%2F%2BZ1vP48z5%2FRiBDLUrO9huL%2F3MJYHyhLM4enDIt%2FYm5gQm5L%2FzFlGVDJr2jhDbPspUEg95djQ9Fu8SNzD9Oj0VEig3Q5saqYs%2BK4y7JIvZJh0BiYJJ7zRnXyDwIms%2BvO7alBxmIwcL3Lx2%2BHsiZ%2Fj8nEBUCNuw8nHOJSaNJpgaRyz0hoFZhNGivgefc3mo52JlWpG8%2Fo%2F26hCix5wyk3isw5lDdhQLdOPcEK65ilrZ88y%2BBG2O7pfXoXUQJzHb92AGin59XYNjLSVEaluG3Ha32H%2FoEEISvf1GaiXD3Tn3ZE61b8RtELFNcx9nnZof99zYVBZADLylGnXTt%2B%2FOplPoHvo1Vm8gWmH2jAUAGfNTuaIsJczTHo%2FDuDxQ9AmLgJVFWC9CXkHeNr935dIM29s%2FC3kyAme123erhTDKiKM86P0Vf%2FtHirMt1QLwCufQHQp7s3HuyPf30odZg6qpy75YOcd9rGxftJLsa80%2BrxznQZOF%2FsbG4%2BLumwTWMGzbDTb%2F%2Fp5yzFx%2BPLr0xqPJO%2FvxFBw6LIuyqMX0fFynJUL3wzgX6tqGQMWseNtckgVnaXp%2BbdGOVfeWr3ezDduOXDBjqkAfnUgqNq1EJyybgkAvHhbznkYoNuCS%2BcY0iJKlqzu3OgLpIcaVLjLf7M3lLBLebAOLXjn7FNthgNYLMrHxfr8RDcQtYKrhn87UYV0RowzX2VbFG5%2FWNIhcjD7%2Fh9rFyONXdGysQeil528%2FSknw%2FE6UQ8GHSCX28PiqZtwApt6hgPGJEq1zWyzwMN%2FFFWPynFPhCuYW7Vhm5ZqwQ%2Flu2uc47XQyTy&X-Amz-Signature=8feed3cbabdb89319db5319461132e821c8af308e68a2044b66f2e401f98ce5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSTMHTO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEwDsdZnn0R4zicldtOKJnrHzC86kuMzEcX45XsQZmJbAiBaByLvkbpDPnOwPDoRXSn%2FyWhswMSddpOqAadyRrBzbir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMy9bWOKmbTVLcEn7nKtwD4ecVO25eHwk%2BTsI4G%2FnjG1W1zfiADmm5kADdb6J2aolazRlvjQu5rxMG2zKiKmPu%2FYvCzD5clxhKqtqnnx%2F1aHEPR%2FV5tJis6hM71zuBH73BLy4RMT%2Fy0c8ypAPQhItJo4V%2BiWeXpTVjRHHE4Vx%2BwVMG2M9%2BAG010Tbt3E7lhWzdTDiASnXjrafpiQNfpBzEsuQnzjnBFZYx8vjTjMIQH%2FpSp6NnYs0Pa1dk5c4TdXwhFH9qTVQHyldf%2BMrfxhpZOEvsaH43j1L2XaNafvH4lHoXydwpgytAJQ0USbDq09Rfzlosb%2BQ%2BIwa0DWqDECyLkcT6A%2BWvsqjPz%2BXIADRBE1%2B2JmhMgdKSmdnvkGrVgK9pphQ755mJg5L%2FQaRMRao9j2Udjs2%2B3eVJK2n10%2BA%2Bfc4%2FpT%2FHL699JcFrNpJVSyTSy0H2RVLIw4zI4YgBAmmjc%2BFaDjhhE6UTxsepMrJuvO7ACA2v7YEvYrYx6%2FIo3yYR%2BAdCe%2BjzL6RoLAXJn%2FZphW0xkmOYBqXH8ekpSpC6sF9GXTDd11jxRw1WeKqXccJiimjG1Gv%2B%2BqgJ1j4Ygc4kYxOJ1afO%2BLQ15fSGW%2BZKwbGqJA8MK3AmmdvYSi7n9tVZqrhJ%2FRIglnnf3kEwsrjlwwY6pgGFIE4Unz%2BIDK8au1cY9cNkn2JloQ2oJSpgm3Da2K%2FdbHKELp%2BCNBsHgTmUxz3XZmCq61C3g2YPIbGSXG6JB7ThoW6R6lD9WGx1rFKM7%2B42UNGIliyxGRbmBQe3H8ILUeoqLhySYf9foYj1D9QWEkAoV3%2FiwS25fNBfwI8qFvD4e8XRbNebNWeY7eAa%2BXthsE9nm5tymLabcMT6%2B6rXgkOa%2F6ei9bme&X-Amz-Signature=67be4fef5dc047e5ffaef58de860d256f600efd3ada0e98409592eddceda2317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPT2IUU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCEJWte3oOUcL4PvPDhoDvkjJSI%2FaBGqDJ2vUZ7vgYoxgIhAMdsO%2BCra%2BbKMvoBpexMzRWnKDiDOf1zsHWoEg63T0kYKv8DCH0QABoMNjM3NDIzMTgzODA1Igz9afGnEMSe%2Bir2a1oq3APVi%2FQDS257GUpOZBBO9xnhRxf00zvj7ZoT5UVq3YiWKIi9FNF4JCEF%2BhI85O4FQPTUmnmBnREyzB%2Ba1O4pUCl1bZ6rNRY3sHVoaBOEOTxZYamvrWJyo1Nz1dsNxVD7UnwB016Hmk%2B7eJS7ki1egDN5eCmPcZtMOYOle3GnlplLUU2oKnp%2FiFn3cIOKJfLEsnjDQrZjUi3mywz%2FRbTdHwUuhms3AuvF0skMqBZ9dt2BoBLknXp1Lv0sEUSRLpkUAQhukh%2FB5jyXMyycve%2BaQacAhg1HG0yHxZYcnDPgN62VMwuSyk8N7UFLfYWow6AYOEdg1zSGK%2BF4OHkFpEH6qdoXmqIBdjsOTU%2Byb9vjpNm1HeroOjpNjXH%2FQypdyVuasBU6P1XxSXx4MBkJn2oe3D3jO3hzEYbq0XGJYAMhqL3GE7lOmqgtfUPFFPjNBel9JKIMmyLz7UkVJ8AdsUC9caEGx9G58zuXetyBBGy91WZ3EZFMXx65lzowKZvjtBekZT2lt%2FAdLoahC%2Fs9gWfnoXRX%2F4uKb6I5VNxNmzzZUtxTcxa1oNpAqeBBYw0%2F5zVK3i0%2FLYgkAwG%2FnLlib9C8wol%2BnFyORophwp47oCgX69tw%2FWDjcC8nwH589lWBJzDct%2BXDBjqkAeXumJuIYXgQx83z7OxC4K5%2F3%2F6O4FNnFCRcu2I5%2BbiH5R9Fkt7tWMp%2FQf7s77HQ%2FJ6VXs8l6TFMYJ7lr%2B9suFzByFiMXReVoE8lNfUxLCV7MkQXH6crrBkUu8n2u1F7VX%2FdYO9fcgK%2F7P0dsVs7xk3zLHqnsuJE%2F1cOoswQ8cleEc%2FLilXgVWPOFgLTuqC0dUqJlme790wd47ayBXCk0oDkGh9L&X-Amz-Signature=e9bd781eef88ae3e4a51ea076bf7704a0dbc6266643849ea92d17817bbbb2f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
