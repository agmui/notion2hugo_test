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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TL2SG4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC%2BmZ29UW8N31O9fEWOLW%2FLyQxBufdOb7qMB8zfqu8VhAiEAiJWaXkEjidvJnxle2mwX4P3pNCKxuK3pgPSzPSgg1iAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxCxn%2BFLojsqx8CIyrcA3WdregQht5pwCDX1JoIj2LeKGFP2pqVsWcRfILehCxqxXoRySwHOOIfcoXGpGGhtfgVqLj9wGvJQ9UH1u2yhYsq8zcrQTnyThJFvGJTQtO6sGe9MdB3%2Fj0zF37nwpmnCaWRcRKioVvfySWpF8qtO6SA5vLwP1Z1OT2u%2FVE2Im%2Fnb1PjDBT0YHWoCBJjitkWnmaTNTFez4dVZ1BK0%2BUB2vQcYTwr8qCGEALAt3oXuz%2Fe72SWMh2RqnbMmmET%2BC0QQbI5%2BqKIQUWr9544Y2wfvKIAbG%2BSy33KZKKr4i3YkqV%2FtRBmmyAzjkjcYE%2BNn3%2Fliw7k1J%2FeXwOWQr57wmZbQfSrm%2B5oX8Ode8vJpmy56S4B6MLeSQNdr%2FpOywC0hhkFFU7vlrRE6uEXgkOJiHDGUBiKov44j8n5%2F5JGBwRctuRlZcjzJOEazn2nOgjiKdyasNjo%2F6UnUV01tLk%2Ft91oynTodvTNO1G914NdRUsxdz97EKVhtSYtZG65hEichYVGqhawq1xNOdRlLKXV05lTgZ5Oy6Aw%2F%2B1CQ3OJ7OtShusuQNOJsTv9AsINlHxmW9h6ieqsIRY0bEOO3n7SabMomF2xPQqtVV7JtV6hm5vRep9SplewXJD1VzfGxKXJMPmIqsIGOqUBY4Yl2QVrmNeQ0AEW%2BgKMpO0XoEngIaovGeD5uL5B8p8%2Bskm0ReuR2iGIIGDgvx9TCMSSFWkrs214TIPYcsydDTV6pGQxU%2F%2BbG7c9VxoLfhYkd46SagH%2FjGwnjjTPXvL6jDdvpPNZMtJi9t2zYRlbAK3MWu45%2F5U9NN1dU3Vv3lnGb3DARh%2FhuH%2BCMlI0K%2FFXC8f83eoXaMSIkIOrBC%2BEl3IBGa4h&X-Amz-Signature=09cbdabd360d00720ccf17eed5edbf67efd1f017f7c9c64e7288358c4c101870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TL2SG4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC%2BmZ29UW8N31O9fEWOLW%2FLyQxBufdOb7qMB8zfqu8VhAiEAiJWaXkEjidvJnxle2mwX4P3pNCKxuK3pgPSzPSgg1iAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxCxn%2BFLojsqx8CIyrcA3WdregQht5pwCDX1JoIj2LeKGFP2pqVsWcRfILehCxqxXoRySwHOOIfcoXGpGGhtfgVqLj9wGvJQ9UH1u2yhYsq8zcrQTnyThJFvGJTQtO6sGe9MdB3%2Fj0zF37nwpmnCaWRcRKioVvfySWpF8qtO6SA5vLwP1Z1OT2u%2FVE2Im%2Fnb1PjDBT0YHWoCBJjitkWnmaTNTFez4dVZ1BK0%2BUB2vQcYTwr8qCGEALAt3oXuz%2Fe72SWMh2RqnbMmmET%2BC0QQbI5%2BqKIQUWr9544Y2wfvKIAbG%2BSy33KZKKr4i3YkqV%2FtRBmmyAzjkjcYE%2BNn3%2Fliw7k1J%2FeXwOWQr57wmZbQfSrm%2B5oX8Ode8vJpmy56S4B6MLeSQNdr%2FpOywC0hhkFFU7vlrRE6uEXgkOJiHDGUBiKov44j8n5%2F5JGBwRctuRlZcjzJOEazn2nOgjiKdyasNjo%2F6UnUV01tLk%2Ft91oynTodvTNO1G914NdRUsxdz97EKVhtSYtZG65hEichYVGqhawq1xNOdRlLKXV05lTgZ5Oy6Aw%2F%2B1CQ3OJ7OtShusuQNOJsTv9AsINlHxmW9h6ieqsIRY0bEOO3n7SabMomF2xPQqtVV7JtV6hm5vRep9SplewXJD1VzfGxKXJMPmIqsIGOqUBY4Yl2QVrmNeQ0AEW%2BgKMpO0XoEngIaovGeD5uL5B8p8%2Bskm0ReuR2iGIIGDgvx9TCMSSFWkrs214TIPYcsydDTV6pGQxU%2F%2BbG7c9VxoLfhYkd46SagH%2FjGwnjjTPXvL6jDdvpPNZMtJi9t2zYRlbAK3MWu45%2F5U9NN1dU3Vv3lnGb3DARh%2FhuH%2BCMlI0K%2FFXC8f83eoXaMSIkIOrBC%2BEl3IBGa4h&X-Amz-Signature=f6517e2d93389c95b6ff1bc57c8c53c6eec8f20a89a460aec8077c526d1db428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TL2SG4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC%2BmZ29UW8N31O9fEWOLW%2FLyQxBufdOb7qMB8zfqu8VhAiEAiJWaXkEjidvJnxle2mwX4P3pNCKxuK3pgPSzPSgg1iAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxCxn%2BFLojsqx8CIyrcA3WdregQht5pwCDX1JoIj2LeKGFP2pqVsWcRfILehCxqxXoRySwHOOIfcoXGpGGhtfgVqLj9wGvJQ9UH1u2yhYsq8zcrQTnyThJFvGJTQtO6sGe9MdB3%2Fj0zF37nwpmnCaWRcRKioVvfySWpF8qtO6SA5vLwP1Z1OT2u%2FVE2Im%2Fnb1PjDBT0YHWoCBJjitkWnmaTNTFez4dVZ1BK0%2BUB2vQcYTwr8qCGEALAt3oXuz%2Fe72SWMh2RqnbMmmET%2BC0QQbI5%2BqKIQUWr9544Y2wfvKIAbG%2BSy33KZKKr4i3YkqV%2FtRBmmyAzjkjcYE%2BNn3%2Fliw7k1J%2FeXwOWQr57wmZbQfSrm%2B5oX8Ode8vJpmy56S4B6MLeSQNdr%2FpOywC0hhkFFU7vlrRE6uEXgkOJiHDGUBiKov44j8n5%2F5JGBwRctuRlZcjzJOEazn2nOgjiKdyasNjo%2F6UnUV01tLk%2Ft91oynTodvTNO1G914NdRUsxdz97EKVhtSYtZG65hEichYVGqhawq1xNOdRlLKXV05lTgZ5Oy6Aw%2F%2B1CQ3OJ7OtShusuQNOJsTv9AsINlHxmW9h6ieqsIRY0bEOO3n7SabMomF2xPQqtVV7JtV6hm5vRep9SplewXJD1VzfGxKXJMPmIqsIGOqUBY4Yl2QVrmNeQ0AEW%2BgKMpO0XoEngIaovGeD5uL5B8p8%2Bskm0ReuR2iGIIGDgvx9TCMSSFWkrs214TIPYcsydDTV6pGQxU%2F%2BbG7c9VxoLfhYkd46SagH%2FjGwnjjTPXvL6jDdvpPNZMtJi9t2zYRlbAK3MWu45%2F5U9NN1dU3Vv3lnGb3DARh%2FhuH%2BCMlI0K%2FFXC8f83eoXaMSIkIOrBC%2BEl3IBGa4h&X-Amz-Signature=154751caa27589e3e0830357dac53253866eacf9df521af43a4d6b7ed4ff2d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFK6GFX5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDh7V3HbPROPWBGxC1gipifFLV7OaoZ%2F5iVM2hYitd7FgIgWFhHKi8aa6XNImRMQek6J%2F1kxtE6oRWjpz9Qyx%2BLIKkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3Cs%2FgojtjO13OD2yrcAyos2riEN4N2EzW0MMxEiu3WFWlMhGDkfVy3toLmlHFfrTYp4PqYeXHH09xnz48u%2FpMhuZBxoKRZHnt6H1RNsqbircWnEzqusa3ztMyvR5VdaHF9uAAMUb%2FWmly1EfH5zCnGm8NdAKnyPUtpXG%2BSoRaX%2Bg0wew0r03BSK7lZVCmunmK51ACabNVZyP0TJztG44HqI4eOAYadbdTZXD3tvBthsBM7pX7vMi4tC4wV%2FyzbuO%2Bn0Bls6Z05G5iTV87L2rl7Z2xegjEbi2OlhZsVkaHh9B5ATef%2BnBh1%2BKbu4YUL5Lw0RqNzLJnoaMUfscJ4XpFCITfsCbmSOVoK48sUy7HUGpWx2%2FRcmB7w41aQJFDFpZuZJ50rmQ10kBwFqi4%2BHEw%2FkkmEh1mm7VKfjhngmuQZ2rVNpVVl81xfawbs%2FOypiSGsdsyTlczcBduR2F7vZEEElZ7apB%2BdtJ1kvV%2FO2E1dI9QZ5yUIG00z7U%2Fsm%2FwKU%2B9h5JPwL6YOmeq5gV89TfinaOn3AO8GhsBNGYPCoIiv4m30VGhCL3N5lhlz7FvMz3LaYw3KzDiIuL%2Bxh8U4ZZXk1My3hvYmjzLDc%2FQAodcVRqvURCG9xnhTBjbR%2B8rfv4WkqixkjDsnehusMO2uqsIGOqUBMEXE7VKR%2FhLdWc7kAg4jPfKuxz4d7lAWQW7gdSu8oVFJ7EHTTsVrxrE7WSLtDMqGxHZvCil%2F28rPuhJTxDWA4y5EOfjTbyQ%2B%2B8cXM95zCEflb2Crp%2FKSqiujnYs6SdXqcVtrp%2FqUvl1q8lVcZo8m6VLqsPj1sLho5Ca0KPOE4YpI00fubovyrYwXUeBNmh5UAvk5qox9IfCzznCtFeWFtK%2Fa0Y7U&X-Amz-Signature=66f72cbc4debe6bf350fcde83e436a29076a86768e60fbd373054ea8483c3963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ74WU77%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDe%2FFpqHiOMQmVCQiH1C%2B4P%2BvrAe9G7d3o5eDiyUCTBbwIhAJCr0OzHzIOGMSFOLVtvS3wnjFq%2FBbOuym7L1Iu5EYzoKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyywWvbGc99t6rjuYkq3AMJL%2FfY0%2F121OApjTnYeqLrIe4A50OkTz1pyshhbXLqq%2BEtMFeyAfae2zfkceWZBX9MSTSGAU%2BYczeQ%2BODxMk%2FldwXl%2BhqzWVvnixWUH4iigCfiSvTEAkUJStMpJOIzBtMLrQIz%2BtOq0ud2k8%2B0SPBHKkXka7nbylOMYJQ4o1pdGZFF4EzQkeg8gnMfeb4E%2BAtyqEaLw0LRaxh7aqzn%2B3Bc8OtNZOB80%2BKwxDb686KZUtLNynKfIp4aJBGKsePdomCekxFOw%2BSns3gBT0l%2Fj5dvB7QfB0%2B%2B6bkBLvKE2jD%2B0%2Bdu5zs0zi%2BHIUnEc4RUFUcsjgPVzyw8FdjQDiLRwUOKoVPWyCrKMOJCKUborhvVtAyI3eZhtjG%2FRboRaATbNEmKO0OK0fqtGhjPptaSwaRPCWJBitwpQ55ykk7to4j%2BZuOusloDMunQ9QXPSmypnYgf4Z%2BsfxtCw%2BooOglFXpoSfr8D48hi43AQgPWzZoBwF0Qqo%2Fg00x1sDN5HqeH%2BthmfiFn2VKUNEx%2F4Jre6irHjUKE4WU6wMZLTP2kgB5hQFzQwE2%2BDJG28wavXGgXFzY2ZFYeWTNkYqarYzpDX%2BYmtPVUJvq1ItP8ib%2FRao7hBVwy9oGNaQvivAHHbhTD2iKrCBjqkAR363WaBJUtDIdl9N6BKbAcTxYLnLCwgNOcbshbY9ELUpWCHNqpBUZsrWTAaF83iXvDBIJrIUSnDR5luPcoJoK5vgf2uiQ00VTiJ4lVg8xfOdvDcFRqlw0BtEblhgtfw9pEsKWjFqq51fSPyvW943hXNmU5Bzk1fw%2FgLA4VEeAfagjI8vpHgFz2wI6818xL6I13lWNt2PquiazbIPyjnTuoNZ8ln&X-Amz-Signature=7d0c0c4c1422652bfa4bcc8e83fe2decceb097211379e45d3671ebf45c11ce2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2TL2SG4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC%2BmZ29UW8N31O9fEWOLW%2FLyQxBufdOb7qMB8zfqu8VhAiEAiJWaXkEjidvJnxle2mwX4P3pNCKxuK3pgPSzPSgg1iAqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxCxn%2BFLojsqx8CIyrcA3WdregQht5pwCDX1JoIj2LeKGFP2pqVsWcRfILehCxqxXoRySwHOOIfcoXGpGGhtfgVqLj9wGvJQ9UH1u2yhYsq8zcrQTnyThJFvGJTQtO6sGe9MdB3%2Fj0zF37nwpmnCaWRcRKioVvfySWpF8qtO6SA5vLwP1Z1OT2u%2FVE2Im%2Fnb1PjDBT0YHWoCBJjitkWnmaTNTFez4dVZ1BK0%2BUB2vQcYTwr8qCGEALAt3oXuz%2Fe72SWMh2RqnbMmmET%2BC0QQbI5%2BqKIQUWr9544Y2wfvKIAbG%2BSy33KZKKr4i3YkqV%2FtRBmmyAzjkjcYE%2BNn3%2Fliw7k1J%2FeXwOWQr57wmZbQfSrm%2B5oX8Ode8vJpmy56S4B6MLeSQNdr%2FpOywC0hhkFFU7vlrRE6uEXgkOJiHDGUBiKov44j8n5%2F5JGBwRctuRlZcjzJOEazn2nOgjiKdyasNjo%2F6UnUV01tLk%2Ft91oynTodvTNO1G914NdRUsxdz97EKVhtSYtZG65hEichYVGqhawq1xNOdRlLKXV05lTgZ5Oy6Aw%2F%2B1CQ3OJ7OtShusuQNOJsTv9AsINlHxmW9h6ieqsIRY0bEOO3n7SabMomF2xPQqtVV7JtV6hm5vRep9SplewXJD1VzfGxKXJMPmIqsIGOqUBY4Yl2QVrmNeQ0AEW%2BgKMpO0XoEngIaovGeD5uL5B8p8%2Bskm0ReuR2iGIIGDgvx9TCMSSFWkrs214TIPYcsydDTV6pGQxU%2F%2BbG7c9VxoLfhYkd46SagH%2FjGwnjjTPXvL6jDdvpPNZMtJi9t2zYRlbAK3MWu45%2F5U9NN1dU3Vv3lnGb3DARh%2FhuH%2BCMlI0K%2FFXC8f83eoXaMSIkIOrBC%2BEl3IBGa4h&X-Amz-Signature=371f6e74bb9a340d0d3edd163ace3037f85e2de01fc5f204348f7388d11c41e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
