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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVWWPQM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQgwhd%2Blz3Mfu%2FeYcNmDsJcCRV0fNZn%2BqcWEqnRseIiAiEAl9atGN0UVHF9oGbBzELXo5UYCom%2F5zPqvpt51P5eR%2B0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDM7dBTLIz4ROGeiiWyrcA61n7%2BNNtSo%2B1A6s1Abn7GfiqphwXbnmjLejPpL9ibyFo6T8Tfbdy7mJZ%2B9AC4H5340rbMqJpiZiKq%2FCfawDDjZCYOYzbt7Rng1LM5FRwA%2BjH0HxVPBgynYrlvWNN5B20Oq1qKhNogmkGUf04%2B%2BEMKG5oUzF757Eb%2F4BbYVSYDJ%2B7WEla%2FwlCtLsjybyok1yoagCt5LuJRqAG1oPbVC0No1dZwG9oi%2BlNI8OQy3wxl9Qp8LPIWXWghPBJC9N8peNAcMet7suTdMlRpyCZv6e3ybgwalP7eWdvvPvKW5y%2FOY7MLJLJOHcF5CiDzt2herSnMDeAX1V4YKuHOyKX4Pmy16jm4PCkGPd6OY5l7KJEW8P9ufbl5zvIs8yjfDXUwy0n6Eeax7R3%2Fw4f%2BmO3HeK0%2B%2FqwRZTURZP21OfZbB5u%2Bm7ckWsHdJZ%2Fxk%2BEJxmkZnYXYlQL08A6dwtajOHmlwjzB0LbrplUMQl4De7g5aRzpY6D9ImI57ly6Zh9wbp%2F0xOD0LOxLs%2BC5QWVQ69KOI%2FpuBS7OT8uM1SOvhvBBbplHnW8h6o13wJUEuMt7MuMacrmX%2FG9lxnuKNrJuVHYGJIKozkTqkG7tP80wxpZO8Lurn%2FbMq5N%2Ff23v0brYYxMIyr1sEGOqUBqzqSlXb95DmYyVlu2cFPD42jOQSCNRAooJsdfsj8BdVhXQDjEhN5%2FuVle41gBwqjdhfNFUwlJJxt%2FkN5ZCYSm7hUQsXtQ8h4Omx7bErC7nv1g90pXrQDLNx9kazYgXzo5zigIUcFp%2BezrwmDYbMP5hCMCiZrpo1aS6nctnGCYaHyK%2FSkqwwy7%2Bwh6Ams0dOsJESmpnXhZTbUicNKsgxTGp7%2B1FJc&X-Amz-Signature=c6bcb8cd3b94d6594a5dcc0738b99cd497f4db9128a12a088284af4b0adb51ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVWWPQM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQgwhd%2Blz3Mfu%2FeYcNmDsJcCRV0fNZn%2BqcWEqnRseIiAiEAl9atGN0UVHF9oGbBzELXo5UYCom%2F5zPqvpt51P5eR%2B0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDM7dBTLIz4ROGeiiWyrcA61n7%2BNNtSo%2B1A6s1Abn7GfiqphwXbnmjLejPpL9ibyFo6T8Tfbdy7mJZ%2B9AC4H5340rbMqJpiZiKq%2FCfawDDjZCYOYzbt7Rng1LM5FRwA%2BjH0HxVPBgynYrlvWNN5B20Oq1qKhNogmkGUf04%2B%2BEMKG5oUzF757Eb%2F4BbYVSYDJ%2B7WEla%2FwlCtLsjybyok1yoagCt5LuJRqAG1oPbVC0No1dZwG9oi%2BlNI8OQy3wxl9Qp8LPIWXWghPBJC9N8peNAcMet7suTdMlRpyCZv6e3ybgwalP7eWdvvPvKW5y%2FOY7MLJLJOHcF5CiDzt2herSnMDeAX1V4YKuHOyKX4Pmy16jm4PCkGPd6OY5l7KJEW8P9ufbl5zvIs8yjfDXUwy0n6Eeax7R3%2Fw4f%2BmO3HeK0%2B%2FqwRZTURZP21OfZbB5u%2Bm7ckWsHdJZ%2Fxk%2BEJxmkZnYXYlQL08A6dwtajOHmlwjzB0LbrplUMQl4De7g5aRzpY6D9ImI57ly6Zh9wbp%2F0xOD0LOxLs%2BC5QWVQ69KOI%2FpuBS7OT8uM1SOvhvBBbplHnW8h6o13wJUEuMt7MuMacrmX%2FG9lxnuKNrJuVHYGJIKozkTqkG7tP80wxpZO8Lurn%2FbMq5N%2Ff23v0brYYxMIyr1sEGOqUBqzqSlXb95DmYyVlu2cFPD42jOQSCNRAooJsdfsj8BdVhXQDjEhN5%2FuVle41gBwqjdhfNFUwlJJxt%2FkN5ZCYSm7hUQsXtQ8h4Omx7bErC7nv1g90pXrQDLNx9kazYgXzo5zigIUcFp%2BezrwmDYbMP5hCMCiZrpo1aS6nctnGCYaHyK%2FSkqwwy7%2Bwh6Ams0dOsJESmpnXhZTbUicNKsgxTGp7%2B1FJc&X-Amz-Signature=a5a9c66eda60faa06bf2ffdeb23461a02fd0344c2dbb98fbdc6842c128147ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVWWPQM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQgwhd%2Blz3Mfu%2FeYcNmDsJcCRV0fNZn%2BqcWEqnRseIiAiEAl9atGN0UVHF9oGbBzELXo5UYCom%2F5zPqvpt51P5eR%2B0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDM7dBTLIz4ROGeiiWyrcA61n7%2BNNtSo%2B1A6s1Abn7GfiqphwXbnmjLejPpL9ibyFo6T8Tfbdy7mJZ%2B9AC4H5340rbMqJpiZiKq%2FCfawDDjZCYOYzbt7Rng1LM5FRwA%2BjH0HxVPBgynYrlvWNN5B20Oq1qKhNogmkGUf04%2B%2BEMKG5oUzF757Eb%2F4BbYVSYDJ%2B7WEla%2FwlCtLsjybyok1yoagCt5LuJRqAG1oPbVC0No1dZwG9oi%2BlNI8OQy3wxl9Qp8LPIWXWghPBJC9N8peNAcMet7suTdMlRpyCZv6e3ybgwalP7eWdvvPvKW5y%2FOY7MLJLJOHcF5CiDzt2herSnMDeAX1V4YKuHOyKX4Pmy16jm4PCkGPd6OY5l7KJEW8P9ufbl5zvIs8yjfDXUwy0n6Eeax7R3%2Fw4f%2BmO3HeK0%2B%2FqwRZTURZP21OfZbB5u%2Bm7ckWsHdJZ%2Fxk%2BEJxmkZnYXYlQL08A6dwtajOHmlwjzB0LbrplUMQl4De7g5aRzpY6D9ImI57ly6Zh9wbp%2F0xOD0LOxLs%2BC5QWVQ69KOI%2FpuBS7OT8uM1SOvhvBBbplHnW8h6o13wJUEuMt7MuMacrmX%2FG9lxnuKNrJuVHYGJIKozkTqkG7tP80wxpZO8Lurn%2FbMq5N%2Ff23v0brYYxMIyr1sEGOqUBqzqSlXb95DmYyVlu2cFPD42jOQSCNRAooJsdfsj8BdVhXQDjEhN5%2FuVle41gBwqjdhfNFUwlJJxt%2FkN5ZCYSm7hUQsXtQ8h4Omx7bErC7nv1g90pXrQDLNx9kazYgXzo5zigIUcFp%2BezrwmDYbMP5hCMCiZrpo1aS6nctnGCYaHyK%2FSkqwwy7%2Bwh6Ams0dOsJESmpnXhZTbUicNKsgxTGp7%2B1FJc&X-Amz-Signature=e31ec7dda5b29d821f71777421cadf8b3ca5f6d196460d5b056944d7eb0ec7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNFIB6OD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7x6WcxIaQD6J2kPJYzU9bW8dl0pEd9sCFd8kgk0Rn7wIgG1QK3yM9iuprBCjkpY%2F2Az6ZK8%2BNpapNQsoFCe7mkdEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOxFOESfNmn9BZZ%2BtircAyGa3Kb1seKyrVjd83NA1emeWazpp%2BGNk72Vg%2Bbc4%2BoG9p9vCQnvk57DDUn9Q8nAdz1Bw1WmQ%2BdFZHaujxJeIbSz02CADr5pOLa5TMB8Zlj6trcOs0yZMOd7qmppWVwZSXVwoZi7ltwxJPZwwsZ%2BKxuvehnqwBGTVDhvDG98cWoBEdRoo%2FsV5QM%2B72cdz135NPFTOK5o2bEoSjxs0EDAdRo2Jy3YGyCuTZ4Hlf5z17aRjKt4YJqrY45xteGivcAsnqTALBluyckaExWdObrSC31KhQG%2F5S0pHH%2F1JcCIefPVdepDoeIZ2FSp3RdMrb%2F5dsysB5KpVXcBxqSpazSPLWpD8jzLjVOXVCgSC%2FwK8cI6AN4zcJ32s9f5lEoij1MFi3RvrZxrAL8jYvLck1mOufELXYEM%2B%2BBfrpCYZ%2F2NlNEbe1VrOfzck%2B3RWQ1dxH7xNNEia5%2B4bnDtXQhen2Fri7zW44XhMFv3ZNqS2J8QHTB3yYwWBK9lDQ%2FOoZfEoaxV4sOGvPUaRVduDUyH9maWQNk9Fa3cMu5tF8BB3VxL90VaQNuUE9HLTxXzckqdt%2FHr%2BVIOFmRZdU8iqTL4ufRB63Ew%2F0mFFA8GPIHDirDM3kwEam1R6boMn0eIm5H8MJGr1sEGOqUBTpSJtjq4aPudPgQ%2F5ApfMmH9Qo%2Bh168Oixojj8xp5YAlcGHuVo6ZzWssPhujluWBJMQkvZQmX7t%2Bys16pOccR2OJxZw77BgWU5pa67p8ZKraecLlQ7%2FM0b%2BNn8v7wg4K8J0PhLtBHD%2B4jM273yzmQml%2B0CgJ9pbhXcm%2Bt5QhlVsUNmCy%2Fypuedy6y1u9NfIxYHt9PKu7X2cLWbCe5hL%2BvIBeDDqV&X-Amz-Signature=15f3ce59086b3447b55e307c6a72f93b081967803fecbc4f5702eced4de1cdbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JJLE3L%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FLkgNBdxECS2ySviZCqE5f2HkEU02z%2FwzkE7PwNNToAiEA893IEHmtoJ67uGxlKRvzOgrjgUe%2FU9XsUFwVTSYvxL8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDF58DL9LDiF79b4iTSrcA7gyaJCEWFhL7iR5KsrFuiKZTQuA%2F4O9iXqxwd9l9fH542qTDs82Q%2F27qxKw5N3teRp36Y99pnudCFx%2Fylu9GZb8TsgTkN3qTwO6hUmuQNUArZUss6Nolq%2FmoWuRlC92sRekUk%2FgEvQgLyU9fUe7GhGbazq0ehJ4qQWLL8pwN2vfVAklkI%2FhmEYsjOq2ggXY0xMxJaOOtZWPaNoTMTDg8DsoHNxgWgLUSWA75lnOIkWRs3efpcVzLq6bvkyV5YLqE%2BFRxQQFCCnetN8zt9JmoE%2BIqKy7Bf68RmQayDbfWcHA6Vih5XIquCthfZG7Vp40dwXH9Gu8FoQas0FZaDR4DJ5hyxpwIH2fE1NYMGhJ5zpMZBoAD3yWEKZLhFuMsxCwMBuZiaKTw2xpKXerKRKlfbubRfD1NeEe3Oq9QvybyHG%2BoKPafi71v7LLkuRry%2FBrSD2x15VdqFs9RnE5kC4PYq06FaR8lsBO6sdtlu7ha7pQd43ibhWJkYkW6ye74Dt3vl1e2B%2B03IYkJ9HZvOa4yEnXzjo1Qs2yo%2BkPGEnVfLjdFnh37xI21cn37NCIPwzxkJlQVGZWl8XAp97K44hNNc3TFw5knpDRtJXO2XaDVx3NMG8jKzWtfdYsCpiJMIys1sEGOqUBDRdWlW1vhlkIxWf4eSAczX7BcTqTYkdBBXNmOSZ0uvzz%2BRaLNTaG47Ch%2FuWOm%2FemLhIWeFAVpW1VamQaRVd90EQ%2Bek7abzLYR51iNy2Xp40j4Xtz7MdDa1nQOZhB18Jo2VUVArCTzDPMPGCCB41wnHXtqQuFiMx8aDi4oclBzB3UWWhMzUQb6WgnBK7Y2VVSTtFz6tizYmUw%2FwX7bEXyhsTEG8Pn&X-Amz-Signature=cb70cffb6bc9cebaa3383cdbb817436502c15bc21cc717d5ac9f58c26d8a114b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVWWPQM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQgwhd%2Blz3Mfu%2FeYcNmDsJcCRV0fNZn%2BqcWEqnRseIiAiEAl9atGN0UVHF9oGbBzELXo5UYCom%2F5zPqvpt51P5eR%2B0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDM7dBTLIz4ROGeiiWyrcA61n7%2BNNtSo%2B1A6s1Abn7GfiqphwXbnmjLejPpL9ibyFo6T8Tfbdy7mJZ%2B9AC4H5340rbMqJpiZiKq%2FCfawDDjZCYOYzbt7Rng1LM5FRwA%2BjH0HxVPBgynYrlvWNN5B20Oq1qKhNogmkGUf04%2B%2BEMKG5oUzF757Eb%2F4BbYVSYDJ%2B7WEla%2FwlCtLsjybyok1yoagCt5LuJRqAG1oPbVC0No1dZwG9oi%2BlNI8OQy3wxl9Qp8LPIWXWghPBJC9N8peNAcMet7suTdMlRpyCZv6e3ybgwalP7eWdvvPvKW5y%2FOY7MLJLJOHcF5CiDzt2herSnMDeAX1V4YKuHOyKX4Pmy16jm4PCkGPd6OY5l7KJEW8P9ufbl5zvIs8yjfDXUwy0n6Eeax7R3%2Fw4f%2BmO3HeK0%2B%2FqwRZTURZP21OfZbB5u%2Bm7ckWsHdJZ%2Fxk%2BEJxmkZnYXYlQL08A6dwtajOHmlwjzB0LbrplUMQl4De7g5aRzpY6D9ImI57ly6Zh9wbp%2F0xOD0LOxLs%2BC5QWVQ69KOI%2FpuBS7OT8uM1SOvhvBBbplHnW8h6o13wJUEuMt7MuMacrmX%2FG9lxnuKNrJuVHYGJIKozkTqkG7tP80wxpZO8Lurn%2FbMq5N%2Ff23v0brYYxMIyr1sEGOqUBqzqSlXb95DmYyVlu2cFPD42jOQSCNRAooJsdfsj8BdVhXQDjEhN5%2FuVle41gBwqjdhfNFUwlJJxt%2FkN5ZCYSm7hUQsXtQ8h4Omx7bErC7nv1g90pXrQDLNx9kazYgXzo5zigIUcFp%2BezrwmDYbMP5hCMCiZrpo1aS6nctnGCYaHyK%2FSkqwwy7%2Bwh6Ams0dOsJESmpnXhZTbUicNKsgxTGp7%2B1FJc&X-Amz-Signature=6ee7e59f24c503a52bf96918e86daa51575a6416b848261c7f5223fec90dcd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
