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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63ONXJW%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQDA0pp2x%2FKPTp10eT8XI%2BDiopBoSKrhtCgp17QT4W6AIhAM4%2F8ByFjAXmVNkNktG6lgn6wXnlluvma7%2BpzhyXE6UiKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B3d6%2FskikR78%2BBxUq3AMGLcj0JcfvAu%2FDPsPZo8EacbsAM8h8XR4KB3yJaetBApVxda%2BPZnCM94hu0nw76cvHNJ5EgUIzwNfnFJkjHvCEXIjg%2BRVJobvmVeTXJwhyJFdX52p7SiMFq7qJ0ULDaxXI9XWkSdKmP0qAXu8QjzUPsHK26BFOmP%2BpX3bV5expiNrkIoxozKSswVO%2BoKphARDbnliSWz%2BfdIiSRCKbh8v5XvHBFfwy1sGCcJqhRdHe5RGQLvozhxrFuesl8zZH3vjPzL7w%2BlibygXu9q1Si5wn4%2BEcVY1oEtkF7AvtRjsP5hb436PvZrHVhAFM72pst2cav09N%2FyDn8LqrFYlmAHf7UkqD6unJ8fQX9amoIhavIUZJnh1%2Fo1tO8oPl%2FTBC1pSRkPkIc%2FeZHLil%2FHf5hyIJ49BMPafNrqekCT2lVt09%2BysS8KOAftxOgu5dGIFMO02Czt%2ByeKaNhWhJEV2G4QeO7Nf50%2F6O0tdirhrsp%2B0F0ifUryB3tI8kBHfn%2FvKCABpUq49W0KvxUKThF9e5OKnrrOIB26CRvdHngxHexJfnzntClfo5mWHC0iqisCXgqmelRBmJBn4jQ1T8kMN12ASrhhDq8dtWFKGXiAUIG3U3WTo4v3Bdqjv10%2FnszTCDgLjGBjqkAdVDJbTiEMxlXUvm9BZN7WSDnPISeKcdzjTtzpvPif%2FhiT3mX87lyT96iFHvCyYiQ0PSD%2B5gEDlQpZi4Gxe6fwNVXRvRuuW%2Bh2o5mEaPpWyECBq78%2B1HmVkaEuCsZZOHxvb5Jlwizhekt0uxfQ7pEpFmsskoVvwEv%2Besv8VI%2FDgvhwq2178o0CuGJzYTvpJEwdJ%2Fzp1Vrq9HGQJgkwuaS2lK86Pp&X-Amz-Signature=dde86c24c895a7c2ba0a0c36f895305a7cd06f2a944d0161dc5cdcd3cadbe626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOK5TGOL%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIC1TCixcw6qhhTX3uZKWQhiTiSKy9VfNG8CvzuXQL8rnAiEAhFOSR7H0lm2ZgOcUJwItFSKc1MofFv5HFQI%2B7f3rHB0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvgHNtRZlfjYhzzbSrcA7HLeUp%2F%2F%2F6VU6RUtsbPYFLJGFyyoYyrwaiPvokVCx7B0aETwJRipfvrGiiSXUIOcph9tiQ06Juo7MXie9Srl%2FmllujvzBfJdA7r2K4597FrPT%2B7j9Ud4U6cAwR30305Xtg5wQ6gPy17ScuzdtDMCC8tA%2B4aAQu9DoqRXh8qPzqZ9h1%2BiHfLut4AdK9dTldXgD%2Bjfa1i5bxPihHHj8BCgWjiwXrxlkkZNBa72UG5MbEg0uAvrVhbyIKDWbzAl8vOGBHvLITzWqNVt%2BozdPldInGxKHBOqTF4wtdnRj03wpbO%2FHgXi2yMXREMadNfrlNgbnWvdyHwyk%2BsxEikHmup8FiN3FVsMPQa8%2F8qFdF%2Fj6y%2F0EOJROtToOUlwKr2JiO5ohGy8ZdLZBS0gkwN10D4Puy2%2FPI0CYUPC1vIdxrhLWZcjj3i%2Fe7vFU22t3n6Cm2ibE6Nd%2BI5u2e%2FZ%2BoPcdYPZhIe8y1xOpIHZ5k%2BA8oVxSgqy2Bh12%2FCEL%2FVe43OD7cShoUdJZQ3L7Cts2e1vqTI%2FZHhKT9oN%2FT41SjFxZhCi%2FrvJS2a6ESYoaz55JboS9aCzdYCJ4BdzUxOaaMdrwG%2FoYNJY09KFNN0QjZBeNZqk7A%2B6sD502q6ARzhtmDoMOn%2Ft8YGOqUBnyUZDKTPTZ3wmKk0ioorgSOLAHTbJcDpU3tTKOxJgW5y97shhaKV1LWLFImND%2FsYHUgwfRWw9YKTEUeKftqY2wcPMUfqBM14GFASCqAUeU1CMr3ESMlV0JigDBX3xgiFNTniRYq%2Bs6JxOyfr%2BTHyfo%2BtQbmRI10BzJH4La%2BhSFan4fvvkcqVeD1mLSzf4mu2AZizvBS49EdBtUR5HQEpb993SYp3&X-Amz-Signature=11e4bd3dcea896ec68c5f1adc0c7bcf339316b624d5dc51d8b38d9fdc9abe278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
