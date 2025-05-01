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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KX7J3IK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAh7tLsKG6lv7E0FOPkq6HXRHbuFBDucC0rSFy3Smw9aAiAWHoHLF1M0uxFq6OA%2FxF80KE9kOEjd0EhRHLq8FDQt3iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuwZ91pQNn%2Bq75XfKtwD5CNSHg%2Fek8FY4nZS34ObZHBy7%2BT0%2BzZJiO9DrwtqvYR6dnAvTBvQ%2BfKf0ih8FqkoPFBhP1YDuAYkpZoe0JLDbc4ifJApk54OlJtl9kjJoYzHaxxuRj8ct2XPDW%2BwIngSBAHJ2RUO9djGZO%2BnrgDnYMFry%2FxRANBLRKRBnjXGf7hRhoNqGNIN21c0%2FPyy2LG7Z3ZE6B1zLLcdw6yeESXyf0F72%2B893hQlWU1BMIaeLNPSAapSqdMo%2BB1cKvwefrrdBzb1OFgqUSsig4TZUEXnBaRc9bkxeh5oeLBRlHdjf%2F0wblHM6fNPt8PUqxDL%2FGo7HReynWFpO6y9eD8We6k7iLIlhZxYKA8CdI5E3pVMrFXUYfg06a6aeRIiupE6IYWpid0LAlRBW4Gno86tOyzLkr53H3zOTU54R94BQW1HR5qTuiU4Eh6CtvZYe2H0f2mvjN1y40MGrNkey3T9ZcTyUsVyewnMuMm2%2FAmr8GL7iqFP5wILBaaaPiEgGdR%2FzgV8Vd2855atDLV5Aa6AtIJvxQE8FBHyt310Gi9yim3gncSWewW1h5reRWzQTSs0E2A%2BtgJz%2FUJGE5Td%2BCUCAVf1sfJcLj375GWZQa%2F0bCMlvDDpOG%2FvLPfRIMkQCbQwkMnNwAY6pgGsoPwX3kugXHGvFPYygzO2bBb7r%2FvpRH9bbaMp9KfNNQN7PRmDCkQUZgHwlH0NE06bwHjRRoW5R6Xw6JrVJ2p2qLgqsAskmT7cXugxU7g39O%2FDr5ntZaWmxnhlcIYf5bIvqFGGgafI1aXxFuWaH%2FiDvbbNqMHbgl8GtTU88Nq68HTApYeZJ9eGkwwAAbL22bjEOxGNaZe804VDWo7PYtXkxy%2B5Efq1&X-Amz-Signature=5d785893e585897b1b8a74eea30bf76177cb64aad0f62da414c5d1a43d328ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KX7J3IK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAh7tLsKG6lv7E0FOPkq6HXRHbuFBDucC0rSFy3Smw9aAiAWHoHLF1M0uxFq6OA%2FxF80KE9kOEjd0EhRHLq8FDQt3iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuwZ91pQNn%2Bq75XfKtwD5CNSHg%2Fek8FY4nZS34ObZHBy7%2BT0%2BzZJiO9DrwtqvYR6dnAvTBvQ%2BfKf0ih8FqkoPFBhP1YDuAYkpZoe0JLDbc4ifJApk54OlJtl9kjJoYzHaxxuRj8ct2XPDW%2BwIngSBAHJ2RUO9djGZO%2BnrgDnYMFry%2FxRANBLRKRBnjXGf7hRhoNqGNIN21c0%2FPyy2LG7Z3ZE6B1zLLcdw6yeESXyf0F72%2B893hQlWU1BMIaeLNPSAapSqdMo%2BB1cKvwefrrdBzb1OFgqUSsig4TZUEXnBaRc9bkxeh5oeLBRlHdjf%2F0wblHM6fNPt8PUqxDL%2FGo7HReynWFpO6y9eD8We6k7iLIlhZxYKA8CdI5E3pVMrFXUYfg06a6aeRIiupE6IYWpid0LAlRBW4Gno86tOyzLkr53H3zOTU54R94BQW1HR5qTuiU4Eh6CtvZYe2H0f2mvjN1y40MGrNkey3T9ZcTyUsVyewnMuMm2%2FAmr8GL7iqFP5wILBaaaPiEgGdR%2FzgV8Vd2855atDLV5Aa6AtIJvxQE8FBHyt310Gi9yim3gncSWewW1h5reRWzQTSs0E2A%2BtgJz%2FUJGE5Td%2BCUCAVf1sfJcLj375GWZQa%2F0bCMlvDDpOG%2FvLPfRIMkQCbQwkMnNwAY6pgGsoPwX3kugXHGvFPYygzO2bBb7r%2FvpRH9bbaMp9KfNNQN7PRmDCkQUZgHwlH0NE06bwHjRRoW5R6Xw6JrVJ2p2qLgqsAskmT7cXugxU7g39O%2FDr5ntZaWmxnhlcIYf5bIvqFGGgafI1aXxFuWaH%2FiDvbbNqMHbgl8GtTU88Nq68HTApYeZJ9eGkwwAAbL22bjEOxGNaZe804VDWo7PYtXkxy%2B5Efq1&X-Amz-Signature=585be1e1344b10e6f601319a2f8215ddd394f442724fb3eaa4f7531bfb20fd19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KX7J3IK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAh7tLsKG6lv7E0FOPkq6HXRHbuFBDucC0rSFy3Smw9aAiAWHoHLF1M0uxFq6OA%2FxF80KE9kOEjd0EhRHLq8FDQt3iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuwZ91pQNn%2Bq75XfKtwD5CNSHg%2Fek8FY4nZS34ObZHBy7%2BT0%2BzZJiO9DrwtqvYR6dnAvTBvQ%2BfKf0ih8FqkoPFBhP1YDuAYkpZoe0JLDbc4ifJApk54OlJtl9kjJoYzHaxxuRj8ct2XPDW%2BwIngSBAHJ2RUO9djGZO%2BnrgDnYMFry%2FxRANBLRKRBnjXGf7hRhoNqGNIN21c0%2FPyy2LG7Z3ZE6B1zLLcdw6yeESXyf0F72%2B893hQlWU1BMIaeLNPSAapSqdMo%2BB1cKvwefrrdBzb1OFgqUSsig4TZUEXnBaRc9bkxeh5oeLBRlHdjf%2F0wblHM6fNPt8PUqxDL%2FGo7HReynWFpO6y9eD8We6k7iLIlhZxYKA8CdI5E3pVMrFXUYfg06a6aeRIiupE6IYWpid0LAlRBW4Gno86tOyzLkr53H3zOTU54R94BQW1HR5qTuiU4Eh6CtvZYe2H0f2mvjN1y40MGrNkey3T9ZcTyUsVyewnMuMm2%2FAmr8GL7iqFP5wILBaaaPiEgGdR%2FzgV8Vd2855atDLV5Aa6AtIJvxQE8FBHyt310Gi9yim3gncSWewW1h5reRWzQTSs0E2A%2BtgJz%2FUJGE5Td%2BCUCAVf1sfJcLj375GWZQa%2F0bCMlvDDpOG%2FvLPfRIMkQCbQwkMnNwAY6pgGsoPwX3kugXHGvFPYygzO2bBb7r%2FvpRH9bbaMp9KfNNQN7PRmDCkQUZgHwlH0NE06bwHjRRoW5R6Xw6JrVJ2p2qLgqsAskmT7cXugxU7g39O%2FDr5ntZaWmxnhlcIYf5bIvqFGGgafI1aXxFuWaH%2FiDvbbNqMHbgl8GtTU88Nq68HTApYeZJ9eGkwwAAbL22bjEOxGNaZe804VDWo7PYtXkxy%2B5Efq1&X-Amz-Signature=ec7c33ffccb0cfc7625e60802f996c012423c3c9bc9beaef1abf34a9b0b55e74&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNYGAEM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD97bLGqoeA9WiZEAkO7IiPZAzkMpv3FlAffOwafjOUGAIhAO0yR2rebJjM4vtZMucpJXQ8RP3MG3eGfyBd%2Bh%2FHLudIKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmbrn8CS1F%2BjeHCU0q3AMY6bWdd5V9n%2B3aJgrQsthDOGnqcs2vdiEfuuuGjrPOZbbYsdgWIkQdXOHZqc9l%2B4f76bPDIiQELVrSjROY%2BJJQpMiFWBLg3bzynJGz2TJ0yY87k1%2BmnXIyMpIJdsQpPXv%2Bd2LRFcBAxjhK69erTsnROJ98h4NfAW6gyvog14Ffco%2Fh7Ew7lFau4gbcKPwED2hFOFv8ad9%2BPvl1%2BVvWRc4AKeHBwjc82TCtw%2FUHWyNGvRIfycSuxA2ZR46KjVc5laiSn0bygEKTFvfr5EQewtBeWBVmto3pcUJnIjRVTApz6VEcLy0%2FrLdMVLGZC52ujcqpqf%2BnOZOA%2F9izsWG7XkHz30o5aj4n6XN%2FYwAUP4TbMYItfw1HCqgylAcUQNeFXao%2FOgMQXYdVOlEx11sJm2AfnsXDQxL%2B79L%2Bpx50f5JXPm8%2BFzQi60tfYtenBjLRqN3dqwo1XmvcKq12BBlSEariTnrDVcq1Xp1UiiezCSudgRywmobVHPpDCYPX272I0HyvxnHFoC%2BC%2BciN287F06q5IB5lsRWgNgv8JJS1x%2FI8OhGMJldVp0oijNE2LfYsLm04cizdDPfvhtWd58hP91w23NvAEaV2n3ngLxquIjoiHQApXDkkCETspFjYgDDJyM3ABjqkAdXkJjsDiv3iSuJI09%2B8wRh5ICIQLPAV5Xf99wDb6XztDJ0zswdfgTm6JHwOUX28%2FjxQsWlFXPHb9EGD0iQd85oYWYLGktvivBlpHxeuUghDTDINgxphdW87dBgCmSVt%2B2FaDRkuidFyBQTTcBh%2FWKIxenZKYm5VpeXc1ZNXonpEutO65zuFgzQv4t50L5Pt2NsJXslIFBto7DGuCZPbgmYif5w0&X-Amz-Signature=f1a5a7a582b9b77ca69e2a5386748aa4b0d8c93ac54678b621673e1942218350&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYX23R3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDdsqB5s%2F7IXLigfD5MeXtTe%2Fw4ttVFiLT%2BefByvrdfoAiEAh3qYtDShzdhrs4D%2B2vIkk2wkoOkO3fSPJ2fC6A8kvPMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3PdPChTK3y2gIVlircA0nvvlEctYkNMsToeG6i4STK6%2BZxqb3lVXzh0krKrYwKIL0mzPiTRjGphPYFaycJkTEt873N7UDfg3pjqf0qlWkqF9vix6CO4N3tX05ucDqXyLMU1Ydty06rM9zuYSyEKHzhhZ4vOIPbWXN52vw38qwGE%2BxRDm9K6Ks%2FGibyZ1us61Q39Po%2F1NKQ04Ps1C1%2F24ohGRisk58x7RPFpn6BH%2FCiSwLmuxzfsVi0F%2BiYWaQJ0RRa6%2BU8ngI4cCG8Qv5e9Xos0MQReT1plXLHXVgAJ5JOMfMWs2MIgvlDARXeIcuUWGPuFxZOb8Zs1equhxD%2B8k0JeLDmIZkSXeyZUchaFJd8yUhhUkR9pWD91hYqQH6mrbikwab0vad%2BH0B%2BfnizGpZWfqXeq5fW6HZB5q1nFX5Oo7BWNu1qJEhqgIHVE5kWg5omvE2FUAPrFXEAMLM%2FqUD9EYvQ%2BtLVFjzgPVGP0f14cuST8WtPSYG2aQdXqRxMChy1ByEk31mQAUbo91AmBUvzT1xwh1VbiQ8Rk2MxFQGeGyQbLxI3MRsVqgbdqEOY7fldGuK8WmoQKDiOWcSeM%2BY2WujLySVYF3DiS%2F9GZqqPtCOa%2BdRM331L2oi8bcnmBPTADEPbbKt5aZ41MKTJzcAGOqUBKQJQmQz1L0nf6QWc6MOVdYOE3tnr7WuVLIOSzEgkusoCrnhqItA5%2BQldDurGJok5mTqUTRgx0R9opw8fHdd%2FUBY%2B3sQqNQ20m6VRhaSISRSz2nYkuwxDaClHWVPQo0HT1TLGW260N6Mpa8dM9txUtervUqj6uF19yEkeriUlMCwkjKeVSJ5101ysoliGuQWzDbFXfwa2M15KAWx7aVlNTGZDFVko&X-Amz-Signature=c597575fffb5be070d6840df6e181242dcb63375031dfd3e2433201ce67de896&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KX7J3IK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAh7tLsKG6lv7E0FOPkq6HXRHbuFBDucC0rSFy3Smw9aAiAWHoHLF1M0uxFq6OA%2FxF80KE9kOEjd0EhRHLq8FDQt3iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuwZ91pQNn%2Bq75XfKtwD5CNSHg%2Fek8FY4nZS34ObZHBy7%2BT0%2BzZJiO9DrwtqvYR6dnAvTBvQ%2BfKf0ih8FqkoPFBhP1YDuAYkpZoe0JLDbc4ifJApk54OlJtl9kjJoYzHaxxuRj8ct2XPDW%2BwIngSBAHJ2RUO9djGZO%2BnrgDnYMFry%2FxRANBLRKRBnjXGf7hRhoNqGNIN21c0%2FPyy2LG7Z3ZE6B1zLLcdw6yeESXyf0F72%2B893hQlWU1BMIaeLNPSAapSqdMo%2BB1cKvwefrrdBzb1OFgqUSsig4TZUEXnBaRc9bkxeh5oeLBRlHdjf%2F0wblHM6fNPt8PUqxDL%2FGo7HReynWFpO6y9eD8We6k7iLIlhZxYKA8CdI5E3pVMrFXUYfg06a6aeRIiupE6IYWpid0LAlRBW4Gno86tOyzLkr53H3zOTU54R94BQW1HR5qTuiU4Eh6CtvZYe2H0f2mvjN1y40MGrNkey3T9ZcTyUsVyewnMuMm2%2FAmr8GL7iqFP5wILBaaaPiEgGdR%2FzgV8Vd2855atDLV5Aa6AtIJvxQE8FBHyt310Gi9yim3gncSWewW1h5reRWzQTSs0E2A%2BtgJz%2FUJGE5Td%2BCUCAVf1sfJcLj375GWZQa%2F0bCMlvDDpOG%2FvLPfRIMkQCbQwkMnNwAY6pgGsoPwX3kugXHGvFPYygzO2bBb7r%2FvpRH9bbaMp9KfNNQN7PRmDCkQUZgHwlH0NE06bwHjRRoW5R6Xw6JrVJ2p2qLgqsAskmT7cXugxU7g39O%2FDr5ntZaWmxnhlcIYf5bIvqFGGgafI1aXxFuWaH%2FiDvbbNqMHbgl8GtTU88Nq68HTApYeZJ9eGkwwAAbL22bjEOxGNaZe804VDWo7PYtXkxy%2B5Efq1&X-Amz-Signature=943f9ad413b2c46cda776b22ef87f9b718f0dc249d9e71d815d29d5c31599595&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
