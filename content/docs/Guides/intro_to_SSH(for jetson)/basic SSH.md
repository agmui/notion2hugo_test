---
sys:
  pageId: "253da3bc-6297-8089-a208-f7fd19bf3125"
  createdTime: "2025-08-18T09:34:00.000Z"
  lastEditedTime: "2025-08-20T08:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/basic SSH.md"
title: "basic SSH"
date: "2025-08-20T08:10:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 191
toc: false
icon: ""
---

[**What is ssh?:**](https://www.cloudflare.com/learning/access-management/what-is-ssh/)

SSH lets us connect to a computer through the internet. Its useful because for the jetson we don’t need to bring a monitor+keyboard everywhere we go. We just need a laptop and a connection to connect to the jetson. It is also useful for wireless setups so when the robot is moving so we can still be connected to the jetson.

## SSH command

{{% alert context="info" %}}

Note: make sure you are on the same wifi as the jetson / computer you want to connect to (for Rose students you may need to use a VPN if your off campus)

{{% /alert %}}

{{< tabs tabTotal="2">}}
{{% tab tabName="Linux/WSL/Mac" %}}

in the command line run:

```bash
ssh <username>@<ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}**example:**{{< /markdownify >}}</summary>
  
```cpp
ssh admin@192.167.188.15
```

</details>



{{% /tab %}}
{{% tab tabName="Windows" %}}

Recommend solution is to use the VS code SSH extention which the **SSH with VS code** part of the guide goes over.

Alternatively you could use [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and select ssh in the connection types

{{% /tab %}}
{{< /tabs >}}

---

{{% alert context="warning" %}}

<details>
  <summary>{{< markdownify >}}How to get the ip of your jetson without a monitor?{{< /markdownify >}}</summary>
  
Follow this guide: [**Connect to jetson using USB**](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_sshfor-jetson/connect-to-jetson-using-usb/)

</details>



{{% /alert %}}

## How do I get the ip of a computer?

run:

```cpp
ifconfig
```

and look at where it says `inet: ...`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIEKW7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDORMSkwsQXYI9WGGopsMGoC0IfvNy20mQQY9Q32Yc3DwIhANiXPQD1gDUiDTh%2FQiKO4dUaQ%2FVgMpx%2FgUnmOjznHFxzKv8DCHIQABoMNjM3NDIzMTgzODA1IgxqlD4WKo6MAPYHdCEq3AMBv1ZfrUmFqBO%2BbKzWOoMMwbXkXo6DSIhTYXghUQnERa%2BlEY%2Fd4fQ5G1BucpF0%2BNpbZ7BTAy8%2B17l%2BVCsvZ6nVBUiY4%2FnylTHj%2Fj9G8plbk19Zm2mEai4momM2avnYQJ2DpHlbGefNRi8TY5WrI8auqa3yV51BSzpJY0bEywSBEknPf8r8neFLTghV1EBxEKttuYZexIMFU18uEO5%2BVRAh7evhGJ1IsqApCs6NRPWuMB04eMBPuRZlmHjz6uwq2DT4XSxswmgmNhXByy3Hufl0FZDYJGTR%2FJYruxTYZ5UGzQ8gpPOaKDh%2BCodulKLPLQLu4JCemRSLzPfVfr0aUaqw6MuBP30WBxXTHyEup6ezSH1haga3ttCcpcp%2Bo3wt4UiPq3vNn9zAPfQ%2BpqqhVEb%2FrZQ1QCQ47q7%2BEvBjpQX9kByw9D2viLPPLJAadKDP93dKCBh9RkrTNh4WaOitqAcE83coMtHOXKSaqWFclQ1Uy%2B3VC4VE%2FOWlIVv5LFkKdNss33hE4DPTUNwFbPoKlhG1BuD1DO2wSGl%2BFmivAiaYPb2o2eCal2qO9ZLfIOqcA1Mpi%2BF3QMU%2FC9TxgUZyxbG%2BuZxcXWYHPapUO17XaXO4DOJuI%2BTPVI9UdaXDlTCN%2B4fKBjqkAc3wwBVI94v39%2FcMTvA4heFj5B4AAIPTT%2BYvGVyHjj6jFrd7iXbTxmBd9zqJDrb%2FMEC%2B6epQ513aXtWepPhtXpGCMnf0pcFrgjLAM9FNc%2FRy6G49%2FebKzOfA77s9%2B%2B9%2FF732O7h6%2FZJs25k4IyBrpotsqm4lTuaRAlva9T6KPXLZXxmF0jZMYiffNIqDAfxeawyvJUsB4pUMWZsu14ZQT%2Byp8AIV&X-Amz-Signature=385ff0ae9f9737eeec3d097a0a57cb015a5e1c7ac6fde6dc6c1bc1dc52d265d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREDL6A2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCvDcgubSun5cWEM%2Btzku1aqJkyxFOIODugnY9u0eTJAiEAxEkKoQcz5oC2SLRS%2BDQF1GEqJOkNWLTvTWpymsFjDC8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFKUMchXxKt3MBNZASrcA4Sy4zpn%2BdEyLRcqroktIo7EGMvOyLZvYArNgxjXV63Y%2B3bmthqpSrRS2Gl7GrAJ6J%2F5kv3Em01YaOJO%2BYZCby2MPSwuT8WVNcy7wW1D5p%2B3cszn51dRqkHrCiMYEGS1ea8MdS10umjLIauE2D1l5shfSn5I7KGURvmnmqJEpHHdkmcvrFlgit4vQr0%2BcrkgjSWNeKEUx7mkdY0NdSoAZ96OhhnB2OCjXbkG3J9OCcNfmt15tCsrh5Z2JkWfPvcoORWSj2P54nRJKk4g7Q1gqnYF1E3P4j5pxJMEagzQ%2FHh%2FkmuNyGLrTA9MBeWTlEeYDyYgUoFi7MbolELRbQJv3Ui7a0C2YR%2F1lzcizeQypP7shP8OCSXxMr2j%2FIsAUGDo8WV3gDO3LcI0GEZ3KptuMbeZO3t4xNE%2F4hGlCSniZQgPE0HGKL7mO2Fi%2FYmwmO%2Fsg972WndNZz4As6YIW%2ByoDfwC%2F5mJTe7fZrWfI3JEqiUWwKMmaiefK4%2Fr8mp4jNNXwIxFDPQ%2FiOsobkYydqk0Mt85a%2BtsRvuUBJ7ekI7YHB0Ii5nTVqGmrhFih5xVFOVXHcI3YYom4TOo14mzQRaMOJ6McOQaP6f%2BWauD%2FChh71dc6NJa%2FB2ZBpyND09iMLD6h8oGOqUBipZCgST7%2BTA02QDJ%2Fg6xUazw4cX7HwtNdMRkPwvEWFYlcznBukKWjis8xuXpbZH%2ByhDGgSXSut6sj6JXK3JADPDBmo5i2W05%2BZ1datSk2Ec4YyrshEnh3YhFF3E2oSWnjLJ5%2FPGVvdWHW6yotuhhnGdvqp9tQhVq8OwGJn916fEc5CquDNXen0wc77hoBm%2B1PMzfEFUq5sC5UHVs7Ne3BMP%2FC%2B5M&X-Amz-Signature=1a22c8af08685f0f6eb8758ea31850d914661f016803bb786562746c0a5eeff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



If you get a response then that likely means the computers can ssh to each other

## Forward windows

If you want to see a window pop up in your program over SSH say for example an OpenCV window of what your camera you can add the `-X` flag

```bash
ssh -X <username>@<ip of computer to ssh into>
```

you can test this by running `xclock` though the ssh connection and see a window get passed though

## Tailscale

[official tailscale docs](https://tailscale.com/)

Tailscale is a vpn that lets you buy pass the problem of always getting the ip of the jetson

---

## SSH with VS code

[**official guide**](https://code.visualstudio.com/docs/remote/ssh#_connect-to-a-remote-host)

{{<youtube "cOopQQIL8JU">}}

I recommend ssh with this method so you are able to edit files and not need to use vim or nano. You are also able to open multiple terminals this way too.

Another nice feature is, if you saved your workspace, every time you reopen vs code it automatically tries to connect via ssh.
