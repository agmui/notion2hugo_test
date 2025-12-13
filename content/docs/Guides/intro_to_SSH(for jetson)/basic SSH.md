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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DXPT4TW%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEEG7yWyztVXrZtSzGm2YEFwA%2BiWUxmE2NVqGQ7EATbmAiEArzhHNYUKs1ZI2Aa0F7lpBheQlHlgH2grHigABWW0xPwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKILSnoO%2B0O3FqyU8yrcA6k%2FfI8c6Ur8%2BivbpaPue1J7blsTWg8jQOrjWD6eGFdRe2l9FVaVGA9a0SmKEsvU6X%2B1SM32UNvG736uQLNN3av8I07WqlxJgKxY1TH5YsScIxHO%2FhiHDyrC8LBCAr6wtXyAHo2SP19pe15ze5j01DMogcamoajKSmv5mHDxwXG0z84iFNP0Q1JGusa8ByQPzmtWZI48bKK7%2FCS%2BMoDuzttsSv5I84aYdVhtovjFEu9gYqm%2FOizf7F0aOKxgll8P0k64inYfKTdw%2FHgr6NFsf%2F6sTZEQ%2BZ435EnX3PI67vNaDTTIPvslWTBkHAcBiPPNrycLPRWNneqVDZp9C5EHVJfFhKaLstpGOBD8gSiKD98toZ09%2BhpWKQ6CgZ2gkcai4bApnaDzVvsPcJq%2FVN%2B1Olz5WfZB2eBdgmMETYuLtFHTvnSgMao%2FEH2JBre2DsXexZyhQ5M%2BLLn8Kw9VqqduSGcUke2vLyiy%2B1%2B7L0XUFis%2BkaLr2yCPy8zEPedfA0k2CLV49c7Xp31dcBCvXxW2yh3HxDCZoG%2FXR7Ftg%2Fdgq%2FShZN49bkU7deNn78cp5kFiRMolzcSXkYBRGtuxvUXIB4JGQ6d%2Fn8FXb71WM58UF7j%2FYYQdkqE8%2BK3mr7buMKrz8skGOqUBzIBlAcStnFTXKVmz8bTfG5jqO4SqYPXHMenzcKSxITfIU7ZdQwOoI9m0Eh999wojmL1WAxN5abYOH0l5C5ugTulTs3jl7XE%2B4am7Dxl8NEJ%2B9q%2FAyQ%2F%2F5lOYtQOiEHHQ7mRe%2BDxyxrhb3ngIV34iDusOr5p210FNUbsgSMDOdlheDvHH1e8pXfMrb3ofxgf0i59PWxiBeVPzIGlKE9UtUyoGZnMO&X-Amz-Signature=6b6d5023306c5d6578773b419a13387a28ff133eadf7d4853a5e7cb7f96a4df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYPE2YL%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIECtJ7HHi99vIm7novEAWWXrv9A%2FF5YBu7YCIScthTBxAiB6ti8p92WrapyENn%2BmURZkfiqa4IfVu5z%2FYXVK5aAVlSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMtf1pZ%2BGK6SE2CP7BKtwD9t%2BIEF1%2FAi5NxYVTRnLSF45x7yT%2FWLtVBVT4ioqbHAgG3uiZl9vWEcUVUHnOoIyVuCnNidyDR5rC4cwdNrii0W9KAunmaZZCMGvni6IEI472IPP2LEv1XZTyJsxGdApWIhB48BgX6iGC1Z5oCacoB9Uf3NV9Q%2BppnKxbtTF%2FTUGBl3kMQdzpgmZq7o5IKfY%2BRpmfQ4a41NiSR%2FnPd2wihDSMvovoqD0XIE5adXZ2nNwGUVG1PDsU8zSa0MhSVDgPBM%2BAoABrYNSLhR%2FL222WqQVvaOzHDaC4ltwp63D5U5OEe8COL4nmp8IA3YoILRwtkCjpQJjHVnMPSwaJSPbVJQ5HCcnKxG1RhDUjPZ0QLq%2FE0sFZLHVY2zuCJidH1JPPQlj0G3RkP2Q94K1pq%2FCM6eQSOztWa0uLEU7XXoqNUVruJWXqk7MnQHwnyF6FBFonJ%2F%2F9veu5ALWdA7pMt6cgZdAIctqtm0q4Cf6Rzf05A%2F3%2FbJ%2FMm8jwXBuvyCOOm7aUsVGLSE5YoyCbyFznSnTmYXKLYOQ3hNR%2BN8mS48K6wcd4gmyerI8xePiEPFGYJYOcfb370kx5xuQHfjOlN3SLHZ%2FDtl5uoYFahOlcmKauml8AnSaZXMcvju1PFHAwzPPyyQY6pgEBKRbbp00tKYnoWDbVOM105He4LrhQ0J7B1oiBImelMkzCAuPyjGYlVmR8WYQtVfpbathNRD9Gu5jlfWUwubHUy7PySuRdBVLzmfA8gS9SgxaEod3y%2B1EiW9hCzgZKUx%2BPsyOY8ft%2Fh%2BqI0h%2BaZjl%2FtMTBkVxprPXP1VkDW9YsXKMKXwTOearGg0UrEWj24R24kdQlFGm0MrzL%2FfbYFuSQsijK%2BXsg&X-Amz-Signature=502222af7cd38ca6d6e3d92ff80dfe6f8d82b15593bfd00d14024c65ad6c961d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
