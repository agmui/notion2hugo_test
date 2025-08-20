---
sys:
  pageId: "253da3bc-6297-8089-a208-f7fd19bf3125"
  createdTime: "2025-08-18T09:34:00.000Z"
  lastEditedTime: "2025-08-19T23:35:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/basic SSH.md"
title: "basic SSH"
date: "2025-08-19T23:35:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 191
toc: false
icon: ""
---

[**What is ssh?:**](https://www.cloudflare.com/learning/access-management/what-is-ssh/)

SSH lets us connect to a computer through the internet.

Its useful because for the jetson we don’t need to bring a monitor+keyboard everywhere we go. We just need a laptop and a connection to connect to the jetson.

It is also useful for wireless setups so when the robot is moving so we can still be connected to the jetson.

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

{{% alert context="warning" %}}

<details>
  <summary>{{< markdownify >}}How to get the ip of your jetson without a monitor?{{< /markdownify >}}</summary>
  
Follow this guide: **Connect to jetson using USB** TODO: link guide

</details>



{{% /alert %}}

## How do I get the ip of a computer?

run:

```cpp
ifconfig
```

and look at where it says `inet: ...`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5UBQOR5%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdjHqtJqXM1lSSjYQ7xfINcr7YJx9zEj0g5iGnVKG31AiBm%2FOmm%2B8iCWq6fWwOmqdbSuJKhSbqUJkdB12oHp5i1ayqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGklLocWYU1sFQfOKtwDZOeGlMvPHTAfY%2FeOOWsulK7b6kCvd7aWg7qDTkKdRhgEDfvi%2FeolZekIUNInG73IfrIqHodACqal4uAtZLJUbhzrlrGjZfaY1HGk%2BIiMpNAL%2Fj%2FUwuRTsqPWU3Qk30XbGiH4JhVM8sHtuMu7lu%2FJkapO%2FwWFVJAcn3b9yvrBo7pztXwZX%2F2f7Gi02NBMGlTUErNu6bc85GlFA7NxzlgBrALsVo8UbYTiOm30jKlBj8aiyJAMND9fJFySVEjyQW5nPHerAWo6GjK1TXd2PS7mo9bwG5NzNWy2eGgYFnhjaQCtYfT7efS%2FzRkbO7orfjJmTIoppRlXxrwRg9MhfZJPV21%2BwEJwrLC4m9JO4gJxhD710G6sHZWNQsFHdHy6es%2FpHKaMiHejTfaqtc8MrvwHIFgiab3goow6eQAv8A8yF3kwtpmwJNMSOsfg7IPHb%2B%2BF9Xkfj75SdJo4WYstuwMo4EOW5Am%2BeGUa12HS21W2qTU%2BGJFPynu%2B3xGXVyEACi6kv%2Fyimw3sboN2LYPLJOuhI00fDNKEaZvPKA82hLTt7nK61GnCj9sEOLtDFAk6MO0Jq7iKz0%2FxRs1KldjFl1Xe9iv%2Bu4TgrELU%2FewId1ks5lDpFYfLu6KcKVRGddowmfmVxQY6pgEvTOBX7LsyImIaylas5OCWXZg82pAJvobXrtvsM6SWCRoIz07g50clbP0GX3V2IgGETXDyBQ0MmI6V7tcHQDpcX5tD0VEulXIo1TqSBYwkcn22O%2FWaHY3y%2F7Q2M8hAtMlC0pDasOO2j3ciuZJdzteE%2BkhIgBUaK4Y79f7QgmUFNpiI94CO5fBpPfFT6QuxKJCN4q5OyQwa6gI71KAYn0gWnCqbTtOo&X-Amz-Signature=9ed489a131234687df235346c3bfa573c41a188386462b3bb440d11f04576ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK4PEZXE%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaMEmdJ%2ByyXajKrK9lOmY%2Bt8pvqZJafNh7EtBJ1nqZugIgVU%2FwWc%2FO%2B4iZdU8UrHBhBUEtfVe%2BpsAgVujXrezbgtQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5eia5kbtWydaXU9CrcA3qUw5WUDPd7RqcN%2FFR%2BpjmqEtqLwdTRkgWfbPbAWriL2JWQCVPxqzXZLw7OPhngJKM5%2FEgkROK14wpyGhHWO0Xxt8zDJQ13NnKvMEaqhoabf1paZZ%2Fa1jWVQ6Sm2Trg4V54GKvQpF%2F7cypTDhE%2FQqP%2B5kmWVBQijVMKh1MqEqGdmfLJxjXcdVkXuYgwPQZ20cRVOHptdYhpcq79SWKWMA4sY61L%2BRd7tz2lEMdhBxePIz8RnjTySoJKDQuAIS3TO9FwPKwGULODcWrZOJsFa87L7nTURaLhIImcRi5b82g3qzTyLeyeouwby5UgKRerBJmBhQkht6XnIS8%2BLaShW9dvaTetuDWblUkmVIkKc3tdVDb7E8LIpJR1qa8JaOatoSf2Z2JOFz1lu6fvleZz7T83WdEAWIbeV9b%2Beu2vqCxMKyQpNgyDmiQWVWkhOCNeWxIjBvc%2FcIbVwMFy3duNkFQkRrYBgeM76HEPfl16WfvO%2FNplnczyDf4JriN6yioxxwkqKPUd3qLGogne6sOeszXtH5r330mr%2BEAdaNc7AHdoIcaOJpk4rgGrUcNox4wSEjeab%2BlJVJfdl9DstaDfkFpXxGyUGEIRwqyGBgI3Z71JNF5mGl%2F3bhifajdiML34lcUGOqUBm2O624l4TIOQT87HYNDL5XsN6CdGcOzDKAAmhOyJBHUvzClzRhwOWca3CmrkUxIOFWiUtbelTJ57IiXsVLjrdmCfUPuj1soFOu8wQs5gz7yDhLVH%2BgZ7hzy%2FF3eXU21B%2FxQaAV7LESHRtZVpgSrxrApRCtTlULZ29uIe6ZpQYjFWIeMzXBVro4uiemjOIdic8hDBq33MI3g%2BQkOgWHBN4Ew5cswp&X-Amz-Signature=825f2e7746af8b3a128086b0150c4e300d5c43ccd4f33006c1fbb3bf14a510ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



If you get a response then that likely means the computers can ssh to each other

## Forward windows

If you want to see a window pop up in your program over SSH say for example an OpenCV window of what your camera you can add the `-X` flag

```bash
ssh -X <username>@<ip of computer to ssh into>
```

you can test this by running `xclock` though the ssh connection and see a window get passed though

---

## SSH with VS code

[**official guide**](https://code.visualstudio.com/docs/remote/ssh#_connect-to-a-remote-host)

{{<youtube "cOopQQIL8JU">}}

I recommend ssh with this method so you are able to edit files and not need to use vim or nano. You are also able to open multiple terminals this way too.

Another nice feature is, if you saved your workspace, every time you reopen vs code it automatically tries to connect via ssh.
