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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W62T3TDL%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCWZQ%2BtbYwUA%2F%2FzUck8m6jGCJShHUSwXwTH2Tj%2FyML7%2FgIgHFbtlsV0Nl7lkjQJHeJ191AUZ29kMosICCz23rPabtUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHF2S2CkjkT4lGvWgCrcAxVRKrudk6CisPh%2BDWkBrpZ%2BFhzo902iVUVMXyheG%2BrGO4s%2BlFhysP1NVXKqczXqU1niZiTV6TpPjxv%2Fuyi7%2FciAs3V%2FEco2xcokKE3vL%2FDOql0w9s5Iu9iiWW5wRCwcEXuxuWPHHxBjCRQbIX8rxrxFgv%2FBqRvb4HUunDkM0Zs5vq3H%2FFAijWl6qzN9BSZBham8pv5tT5vg224hOLG%2FZRU3UJtkBhjFmVTbLhmmOWp8QeOWdgdYfyhLGVASjL4tKP%2BAiMusUYVbhu9xeDgZ7Mj4XfZ6DiBYWYeqsMjttMfm1ggrKY4P1junvXN3UFioaYcJkxWvjkSqF5ZEjoDy%2BDJWN%2BoU3clrkrVIG1uC51tO7Dk7KZ8%2F6g3ynwPbgqNkibb4nYLwwtB1aAhuafHw2iXm9cGS1NCn28amG0D%2FiUU3BKal2GSgIXQ9aCZxlRDYSpv3fphxNeBahxvswc1pMoWdWPayMsXRr4p6SWVa0nZoZj5R%2FdWlD0w7f%2BF4AZq3ZHB420dXWJBCjnSbcPr4len0H3FDJOnmxtQ8DqxWT7euENgbLVL%2BLjmCJsGo9O8v5yE9w8BMcTIvz5XCPHpH2aF9jgEhfi8IpwLqaH%2BD7CHSngxdY558NthPpYT1MPXY4tEGOqUBdLVz%2FqxO9CFvD7SCGK6Zuhtst3%2BDHnGNhSAqwhRiKQK%2FL8iUfaqxZN6B0zzJdUBebMerUgQ79XjYlsd0yoXNYCRKE5QB055tKzYgZNOWjQ2k4KwTkzZyig2VdgeQdiKXQh0QS0apMGWdJcHbRJRHu2iPOWkuD%2BnoUX%2B%2FQYlBYVZfTL1IVDX27LcUWRRjl5jy%2BYrR0uJiKZ41UbZiR1ZYdkjQ32uQ&X-Amz-Signature=a9817797582d49b93f78aad9fa79b4fbe6c36aa8c352505bdfbf7ec259e5fbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZ5TCVT%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCKHBNRli%2BH0ZGRkF%2FnaxdcZff6HMN6sXiDhJ3skoZR3gIgMEGwZ3QLGE%2Fq%2B0BpU0vedi0ePxoQYPfc3%2FbPkDyPiLQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMb%2BVbAp7iXJZmklhyrcA%2FtC7YNigeBGbM3ChfOX1iUVAJ3gp%2BGUelt%2FARIh50d4XXsbaHlSwxFwJqS00lzjiX9lO40JlBFtXu%2FzP6PelZttZwS9KYZANXAopGajm1g619Sn%2FSdo9k7dTH3uPyZivt43tClEkUKrJzSzh00wZSSF6UZgMUOSLt13SpTvK%2BT402evdjla%2F1F%2Bfcds%2F%2FSjH5iOeDvqVwaXJwRG7xp8sja6kkK1bKI3xzWPz3TF%2FkRmd8C%2BhFbxKK4iT%2FTCFpf1ZnmGyZJqXUTKmAhrNoQbZq7OEHq9fih2qAk16OsnmNriBX%2BogyoWmJcho5LYW%2Feop8cmi3gXcZiEgW2vbYhVhxyEDHRQTGOQJgh2P2cqwLh%2BCYPhtAnqIdnzAR5MAJR8LqFAeMLxu6FuYHEs4GijR5S2fVT6N5UwE6OzSSw8PyfEG1Z8Dd1IXxuJSZk9KEW3iTEwmgBnktHc17WOM6KDRH0Fa%2BIGicw%2FTpNPPcsu8%2BD9F5IR3HcXLyANsixg3UAbYNOXt4pC8FJiCMcfoFMCF26pH91mWki04dS6dzQ9qRKlmjyGodxPf4BiM2Ll%2F4SDuSatxMzSyxTT1LOKQAKxWX39fbVpGrcVQKBuD7mtsarbuP4Cxhmmd1SbPY14MKnX4tEGOqUB961gSNVRY0auQOmb07OJks0R%2Fvy8i2ZCltVYIXAjoL%2B3zkERrIhypGrqJCyFJDrxhRIG%2BVQhpQmnpnQVmscpcbD3AV0OUJbVxKK3fkQPJqtURGcGa4hgRFYfqwSBcK5U6kDO6blraQuSEVoMRj488hlqcrPEqfvESx%2FIRH6RuUM078nHvuFj4MAKJ6pkF7KFWZT9wpzVhAbus6UlD7lfylSj5QDE&X-Amz-Signature=f903c69218a603149f8a5a98af185fd6dfef2107ac340840d265bc62ec26e8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
