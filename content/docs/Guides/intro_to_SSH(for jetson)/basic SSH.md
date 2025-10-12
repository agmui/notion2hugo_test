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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUGOWEE%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCeiUvaJ1pdMERD9zwVWkHE65FEHsas6f13vWAcIgkHAgIgb%2Fxzr0JGxUrZt31TGG7Zx4jRZNKAENvbmJasoJXgTvoq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDD0cMEoSJEVh6odhZyrcA3zC%2BNANy8XhESbeFxQjAYeN0t0LvdzQ2C0dAu5eVAej2F2%2BFI%2FBrzzcutWVfjwyAAwEoX4244jYwzPVXeGU0I8YDaD6TiX9cB1GMBdjembGk1Msguzn6jhzA4S%2FUB8zr2nlcy%2Fepn4hkrIDtHtKGnGp45rBsN8qiwRjLywDDfJRYERb%2BXoIqBvSR8oRPRIH51o6p%2Bi%2BjzxHIUinz1STFxiPbYupeBEzbF84iOaNVX%2FmRPxjZ3FwIHXvAgqyoxXfugksV62Q8JiX4S%2B%2BDZKBIhkHqXvbsWWeCMGptATBLO50JN0BZeBcOYltYDjKz5MLTRc8mZTr%2FveSzfb0v6gJ9wGEkTNMGYm5FtIEorsSwt%2BUba9MzdFs1RD63wuE8PJ%2BEBFBOPDjqQxm%2BeNnHQ1YAIWFW2RKfEvhzpvoxqLfysyIRVQUAUbr6VaWiNBfpwxA0OBD6jv1ikTpmsGTWMNLnKkiiwlA9c3ODvIfZoWMDQTWuZaQEwF4fdYl8I%2FLSEOjw1OxQFw8QbOU2aVVMpdE8UnBQPRq%2FtMzx7ma1Qmy%2F2HAWEQ%2FD4zwbp5oyu7nawnjSW%2FCMSpyBDrRLigJfRVbi%2FnYt3zTx1JEezPbJVMW%2FQc9foNC2E3TiX0aUE5xMKO5q8cGOqUBTE2MwcF7b5qC7jeIB1IoieqZ7bFVfHrrhFWbKHOV67knFdnAPBM%2B1im0xa3VjB6HrU5vJyXmFB7OHEevLxpbqKvDP9mTXwxAj55LJkcCZZcT3wPLFEBFP6593yYaGIDJc2sFZo0ET98tZ38aJt9ibz27BnEBQIbR%2F%2BpeBNyul2kZgoE2qJHbySQ4H1EhkNLMNFQeXF6wUEO1fPgdVWKg61cKlLE3&X-Amz-Signature=5b0e2f51dea936b088159a9af17283e29fdea7727c836aa117cc55ed8d64f450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6DILAP%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDMu8ylUqRpUZFKCG97dSvBY0TJ67uGRcWWyZ0Rushs9wIgNjXNoTfAoUYzjPMg1ihtyimbz9pArTWQqA5flUyAReYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEulgmnZxMfEH19KBCrcA0WmqH9IgM%2BnTk9Q2lKtG1w2v63jnpHOre1GumtS0UQSoC82bk9xxfyCdMzHWefxz4B0wRhqspuLfLNorFBqOoSNBuEhCqtsR5%2FLY9wgKeux2U3kjz6TShbY3jQR0wghZaW%2F%2FeZxjkGjOmbp5TRk1bs2a3gNv9nQKkxPJttMkoMvV9SG8vQxUVtUX0s129%2FjcMSPq5oFqGkJ2kBFSkkBf7WQMLLM4VBy8ou2CWuodU5eIgRCo2oMuZMRZRP%2FIpPWQzdMJMoxd8Hp2zydks2p7xSCFYHtTEGJOGsmiBE1RT%2BCSdpqKYZ3UZkdhj7%2BI7diWwlpO49LqlGVtbjD8TTqti%2Fol2HuB6%2Bnjozwq2h7CtcD7lYD7W311GJzCpjmIIvNsMHVXyG4jX7gat%2FKQuYRnwCD55%2FgzEJD7ZF0rfzCyKui8DMEd9PKacH8xZezSeHGlkaVu28j4RjrvMW%2BuWhBNKIv%2Fm%2F5xPIB5XwsOhgTduqoaITQcgDNLJrYtnNIcV7k8mPEKMmosnQKlbDh%2Bggmywhh%2B1GUX9SNvtAlRTFnwCSfw%2FCljBdIfDcfTxI8plggUBf9at4Kz88iV2TaIwTyL0vkSSlqLfkmDFw1LD01G9nceL1D8lA6FmjHOP6kMNC4q8cGOqUBmFBcsWgQtlW%2BfuqFXBm531KiV%2BbOcaq9SR%2FisBdEgd3U4tl623DDwszvQNtmErpr%2F%2BuElSp%2BiEwRBBdZoJizlXN%2BKYgYV1gXyjSem%2B09FbweMj8Sb1reB2uLfdGoWEiROhoAtB0yKm22MvDGx6tKBqFqFnFWHOAIcDfFppwFD57EtpsXZLahdG9i%2BGMuuA%2FcFDFIsFV3KY270PWXpT%2BJ%2BcQ3Cy%2Fy&X-Amz-Signature=da795d86ad41caa98455b2c173b5e0df99c77755c4448a43f928d0a3284db2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
