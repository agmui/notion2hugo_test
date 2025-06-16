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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJYHHOQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCs8OEGgEDWV%2FeMSCCyVwQaR2xNT3BAixHCPsbg1I1yGAIgTkAFWS%2FN6RLSO4tCrbE%2FWJK93vUWW0yGTjMZIcF2z4wq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEcPPGVH8Uw%2BnfRQ2SrcA540q%2F9IhXO%2Btqrj2RmcH53ubSe5VYo8NhOVMx4K9%2BXYsaa9ndLXxzTjqHmg2XTihWWlp0SxrF6ZH4TNPvfaRM2iliU2y7kNFwHzfIS%2FeFSsbN3UksaPuNp9kIXL7brbS8KM%2BZoGALQrvRVpJjj5MOkjqYWo9UqUNvBCQW3n%2Fh5tTw4WAZUHfBWADM%2BOiCf07TmHoLzQkD5xaC4Wnvj06jhcdAo4BcbUQHzd8vynsotsTTxppv3OZuBzCZzDXo5rS3jvKcMJu5GvmJ%2F8cKIVIE%2F0t5jO4hsgGMjDt8r4%2F%2B1Ar0fOClvIFvFog1zwLdTtH0DDMKoa6fb7EtnC5oR1lNeEcEhXwyYPiYqJYgwACu1vZpfuO%2FXJPk7OsIZkk2NwqoTvEuDRRyqk3B9gs67wUXWnDCXDqXBst4%2BURhAMJx24D9QKUfa39S8QIwFZlxounXlaLqNhH3%2ByHGK1qJHmXgf0SSiU3Z35r5CXCoY%2F9GcdTNV8kkmUb5qhEWbObLdOxNBUzo%2BbGRx0svQnmLqeewGyreLb0G4MsHgtvGMXhNZjQJXAToIpzqOb3gk9WvooPpx%2BtcRr9ZLuvFLU4m%2BKlpU4NdJKtCf8ZRS394I9zthDRVn%2FU7HevJgJo0ZHMO6NwsIGOqUBSLP2xFLE5mVRSXOqXfUYxG%2BptyRLrEcIZHK1p20r%2FPRL1Oc5%2FWsqNVRwteRSn0CK3%2B%2BObIEmRWuTaw3In2%2BKgHz%2F%2FvQ1BxX8LnabF8sxnUUjgS0CJJ2cMDSuykAz8rzyVUyuYt3PdIg5wDm0NHC2g3gtp%2B8NLTzgWyYkZvPWw6Zz%2Bs0CCwpWzQhrFJqt9HCAibLgqpjCZVY46bGgDyy48KT6boYp&X-Amz-Signature=38ab161bfa458420e00f1fc415d6f25654b29ce5800d5b095799a1d6055e0479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJYHHOQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCs8OEGgEDWV%2FeMSCCyVwQaR2xNT3BAixHCPsbg1I1yGAIgTkAFWS%2FN6RLSO4tCrbE%2FWJK93vUWW0yGTjMZIcF2z4wq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEcPPGVH8Uw%2BnfRQ2SrcA540q%2F9IhXO%2Btqrj2RmcH53ubSe5VYo8NhOVMx4K9%2BXYsaa9ndLXxzTjqHmg2XTihWWlp0SxrF6ZH4TNPvfaRM2iliU2y7kNFwHzfIS%2FeFSsbN3UksaPuNp9kIXL7brbS8KM%2BZoGALQrvRVpJjj5MOkjqYWo9UqUNvBCQW3n%2Fh5tTw4WAZUHfBWADM%2BOiCf07TmHoLzQkD5xaC4Wnvj06jhcdAo4BcbUQHzd8vynsotsTTxppv3OZuBzCZzDXo5rS3jvKcMJu5GvmJ%2F8cKIVIE%2F0t5jO4hsgGMjDt8r4%2F%2B1Ar0fOClvIFvFog1zwLdTtH0DDMKoa6fb7EtnC5oR1lNeEcEhXwyYPiYqJYgwACu1vZpfuO%2FXJPk7OsIZkk2NwqoTvEuDRRyqk3B9gs67wUXWnDCXDqXBst4%2BURhAMJx24D9QKUfa39S8QIwFZlxounXlaLqNhH3%2ByHGK1qJHmXgf0SSiU3Z35r5CXCoY%2F9GcdTNV8kkmUb5qhEWbObLdOxNBUzo%2BbGRx0svQnmLqeewGyreLb0G4MsHgtvGMXhNZjQJXAToIpzqOb3gk9WvooPpx%2BtcRr9ZLuvFLU4m%2BKlpU4NdJKtCf8ZRS394I9zthDRVn%2FU7HevJgJo0ZHMO6NwsIGOqUBSLP2xFLE5mVRSXOqXfUYxG%2BptyRLrEcIZHK1p20r%2FPRL1Oc5%2FWsqNVRwteRSn0CK3%2B%2BObIEmRWuTaw3In2%2BKgHz%2F%2FvQ1BxX8LnabF8sxnUUjgS0CJJ2cMDSuykAz8rzyVUyuYt3PdIg5wDm0NHC2g3gtp%2B8NLTzgWyYkZvPWw6Zz%2Bs0CCwpWzQhrFJqt9HCAibLgqpjCZVY46bGgDyy48KT6boYp&X-Amz-Signature=285fe2219930a4fdfb6596cbaa2ccde47313cad0c4f07d4c85ad2d10e94969b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJYHHOQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCs8OEGgEDWV%2FeMSCCyVwQaR2xNT3BAixHCPsbg1I1yGAIgTkAFWS%2FN6RLSO4tCrbE%2FWJK93vUWW0yGTjMZIcF2z4wq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEcPPGVH8Uw%2BnfRQ2SrcA540q%2F9IhXO%2Btqrj2RmcH53ubSe5VYo8NhOVMx4K9%2BXYsaa9ndLXxzTjqHmg2XTihWWlp0SxrF6ZH4TNPvfaRM2iliU2y7kNFwHzfIS%2FeFSsbN3UksaPuNp9kIXL7brbS8KM%2BZoGALQrvRVpJjj5MOkjqYWo9UqUNvBCQW3n%2Fh5tTw4WAZUHfBWADM%2BOiCf07TmHoLzQkD5xaC4Wnvj06jhcdAo4BcbUQHzd8vynsotsTTxppv3OZuBzCZzDXo5rS3jvKcMJu5GvmJ%2F8cKIVIE%2F0t5jO4hsgGMjDt8r4%2F%2B1Ar0fOClvIFvFog1zwLdTtH0DDMKoa6fb7EtnC5oR1lNeEcEhXwyYPiYqJYgwACu1vZpfuO%2FXJPk7OsIZkk2NwqoTvEuDRRyqk3B9gs67wUXWnDCXDqXBst4%2BURhAMJx24D9QKUfa39S8QIwFZlxounXlaLqNhH3%2ByHGK1qJHmXgf0SSiU3Z35r5CXCoY%2F9GcdTNV8kkmUb5qhEWbObLdOxNBUzo%2BbGRx0svQnmLqeewGyreLb0G4MsHgtvGMXhNZjQJXAToIpzqOb3gk9WvooPpx%2BtcRr9ZLuvFLU4m%2BKlpU4NdJKtCf8ZRS394I9zthDRVn%2FU7HevJgJo0ZHMO6NwsIGOqUBSLP2xFLE5mVRSXOqXfUYxG%2BptyRLrEcIZHK1p20r%2FPRL1Oc5%2FWsqNVRwteRSn0CK3%2B%2BObIEmRWuTaw3In2%2BKgHz%2F%2FvQ1BxX8LnabF8sxnUUjgS0CJJ2cMDSuykAz8rzyVUyuYt3PdIg5wDm0NHC2g3gtp%2B8NLTzgWyYkZvPWw6Zz%2Bs0CCwpWzQhrFJqt9HCAibLgqpjCZVY46bGgDyy48KT6boYp&X-Amz-Signature=c7135ce7454b8e75035dbb09f524f1e8a6bc4ff52dd0333afc6b9fa11d85cbe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRO6HD5N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDh4eUf7w4tduNvRfVa6OHMKhQkFEU7CVbj52aNCmxJRQIhAJkRDruFvpryEmR0olMOxiC24bIRI7BtcbILUmAccZ%2FtKv8DCGYQABoMNjM3NDIzMTgzODA1IgxDKO%2BCC24QVV8BfmUq3AO2eOwwudVaih5bV2hnMT%2FZRugoHKeLCwWZeBHne0tXGfQo%2BQGROsB8kDpZqauWQIV3V%2BzJpKLn76vw60%2BIydsmS3cL%2FL4aho53w9JrdzAzo%2BzoNxKvR2V3PibWSReqHxC2%2BClsNPEvoXzadJKEZ442Y3bI40p%2FtzB6powMofiVqUhOXOnme7XbenTq879F51dTnFeKe8VD1Pz8d0YQsT56wOsPnTrvpwxwVd%2FDIQLP7UUUHsZqduPTxukze2PlQyXKNsKzXyoQYap2tUzR5ioobs5LuOO0JZtJ9KJs2aHPp%2BcUdIaM%2F6QxOsfkvI3XF0xEAV5Aja8w7xGnTJcPY6lSqx3ymbzB8HVSpxGxVastjpmyP972M1xuyMsc%2FoqCWzLp2rSDZtL5xUAbYqpBjFxK6PK0HKTrKfxn92e2qAAPLufKCKGMwwJFkKPq8PLqC5BHfoV%2F9%2BAQRbyXyPxf9sqb%2BhGNpNnP5GD%2BGbQOotu3mnZ71YSxCw%2B9jslpIvzL%2BATBO9KIJWUULOzq661sJOWBc4%2BkAG9V1W%2F%2BsqAbpid1JfV3uUJRY%2B9WEpRtKjEM2VFcJ5%2FwivdzaSt6C3k7Ixobfq7rndXqwKb5ifL69kTmWb6fr%2B5zcBZjFCWdrDCxjsLCBjqkAahhNv%2BmOuRrgZUHmxtl79w2WG7Mo8wmrsoIFvO4BIPJGGNyb4vNMi002FtdNedk%2BFbk673Lsyr7vJKZ9LEy1ecMKe38kL1mVYLgO6XEK67puA8z9lFMe7DhbfskoACezG%2FAUEthkOTnLAonl77WzDPSxfZ0teTo7Hmc7q9ir75D0PICWm6G5Pu68mqRBmnM7nuWkNItJ3r0%2Ba%2Fb7ZK%2B1WBouNcT&X-Amz-Signature=33eaaa86f53944af899d2367c957423f413dbccaab3f6bc2ca6de15decd74c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKZZVGR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICeBjEFoezdNhQAEg2uLGGAG3feqt14pIb23H8ZN0XliAiEAnypM1TOvEUIlG%2FlqAKQo7TTY9go7N3VzKDcDqOPzt54q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLR7dMDRbY2jL4GXHyrcA70b9JdCIb3xLWSnXxQWodv%2BLAuVF8A7CttCnEf5bZJQuamhr8JyRdz0odVqOql76oef0a1f3i4b3W1HRMcWONAqfBtnWXGDE7UMO7%2BMoT17%2FSRuUYNlfDFlIQ%2FRb9CwKgz%2F4NzpcW4XNSSs5bB4SZqZIv5ZOMulGTGNoYTNN%2BRrZ5oa7Wqx2oUpf5rCCoW3Y4PYSc9%2F0sgP%2Bk%2F5zfFM1VMzHI1BsIv971MCnzJYo%2FgJtQSG3jfYs2ZjrYgSZI9PWOxdvzmJYdJIGgCkh2%2BzR6XCYux48gz0H0y%2BFa6edv1kP18F8VEK3YIfngmLLDR59FpH4JAx1HPwoxJP04zEMLHVLwkPWt8wE%2FkeD3UTxSNY9SAXQA8OsLRZz68JPVzU2f66BQjqXcnnjpS%2FsujGCr%2BigTcvOpk7MHvROhCQUI3mN9WTnFhxCQdGU3pxH8eM8oZ6RJ4CKLfzI4W1%2F5K9ByHyW1IRB9lQhggYlLhtSYVlFW13mSIunmnpf%2BzymZTZigT3BP4nhaZwo5Kht4wBdAdtZjJ3JlSDC3OflKuH1b8lg4FRAmNMWP%2BfPn1hLiZx2Jz4zyWHUGEHkT0pSB%2FeXWZQcNrjoHZRq1QCNc4eOJDbLau2zGrsX7fal%2Fq3MJyOwsIGOqUBqGvwLVd3u4ka9chDruOutuKCSn9uzKSICGY6hSWaUEsOLsEjQU9EYdIPCRWRwc32vcNPxElUs6JOBKLy6CLsyHF%2Fm7drewUoIK5w4WfkjhdVGHrsmIc9QzFJOUOJdZ91CqavlqkGx4YFTssgdyGzj0%2BYW1aq9qk1GXEEnm9ELB3JI773cEBU7jNdLPfzK3ECD81MaBHCXMctNhmQo7pOoeD9ADdw&X-Amz-Signature=1eb825654560717431aee59ccc78e855402d2c1b4eb1a0fe5faf2877c82f86e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJYHHOQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCs8OEGgEDWV%2FeMSCCyVwQaR2xNT3BAixHCPsbg1I1yGAIgTkAFWS%2FN6RLSO4tCrbE%2FWJK93vUWW0yGTjMZIcF2z4wq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEcPPGVH8Uw%2BnfRQ2SrcA540q%2F9IhXO%2Btqrj2RmcH53ubSe5VYo8NhOVMx4K9%2BXYsaa9ndLXxzTjqHmg2XTihWWlp0SxrF6ZH4TNPvfaRM2iliU2y7kNFwHzfIS%2FeFSsbN3UksaPuNp9kIXL7brbS8KM%2BZoGALQrvRVpJjj5MOkjqYWo9UqUNvBCQW3n%2Fh5tTw4WAZUHfBWADM%2BOiCf07TmHoLzQkD5xaC4Wnvj06jhcdAo4BcbUQHzd8vynsotsTTxppv3OZuBzCZzDXo5rS3jvKcMJu5GvmJ%2F8cKIVIE%2F0t5jO4hsgGMjDt8r4%2F%2B1Ar0fOClvIFvFog1zwLdTtH0DDMKoa6fb7EtnC5oR1lNeEcEhXwyYPiYqJYgwACu1vZpfuO%2FXJPk7OsIZkk2NwqoTvEuDRRyqk3B9gs67wUXWnDCXDqXBst4%2BURhAMJx24D9QKUfa39S8QIwFZlxounXlaLqNhH3%2ByHGK1qJHmXgf0SSiU3Z35r5CXCoY%2F9GcdTNV8kkmUb5qhEWbObLdOxNBUzo%2BbGRx0svQnmLqeewGyreLb0G4MsHgtvGMXhNZjQJXAToIpzqOb3gk9WvooPpx%2BtcRr9ZLuvFLU4m%2BKlpU4NdJKtCf8ZRS394I9zthDRVn%2FU7HevJgJo0ZHMO6NwsIGOqUBSLP2xFLE5mVRSXOqXfUYxG%2BptyRLrEcIZHK1p20r%2FPRL1Oc5%2FWsqNVRwteRSn0CK3%2B%2BObIEmRWuTaw3In2%2BKgHz%2F%2FvQ1BxX8LnabF8sxnUUjgS0CJJ2cMDSuykAz8rzyVUyuYt3PdIg5wDm0NHC2g3gtp%2B8NLTzgWyYkZvPWw6Zz%2Bs0CCwpWzQhrFJqt9HCAibLgqpjCZVY46bGgDyy48KT6boYp&X-Amz-Signature=21b0c73749ffcd49677414fb6a22f30a0bff22dc3a8707bb9977102bd8a61b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
