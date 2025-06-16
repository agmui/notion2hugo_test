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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJF76SM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZGk0s0Qut2Djn85ZnvwbiHfpdYV5ydf1fOw8XjBlyBgIga2DR3ZcDK1UaBWSvPRG6BW4XAJj%2Bf3aN0PrxmWK0ZzUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBOoWdd73Ml7KzxrFSrcAwLZXV7z3QFkwbjeVJVcKUfe%2BX%2FsxIg5XAgqPNpD5zTzrWEwSabSx5ApHPQSXRKQvkAVzyY0MBodKYcWtgj%2F%2FlVIklAYZ4SbKeF91kIu%2BeeTq9wc2kAEFVQ3jdaUvjHPikH6yxs3mraXELrgsIvNy1lf1DRPk5yWtDxCsr1CbJAO6fht4JLdovz0p4yqBDyo4ZamgGdyTNy2yT%2FUASiYex4QOlVz7UEF9qu2kjq%2FSUz4LJgLnbRZKVUK%2FfnjA8UANHcbLfEU4bQ4FaN%2FrB%2BHTdRayhZVhxICOWinEWVcF57uDE36G9OQpj%2BCGGmNHS06S0yuhqfoXnPSZxTvyGc9UTC0WqN3nyb6t9MWEVc1xnLfdEjNLI3i28DZPm9Z9FPORl93%2FJIw0FExE9WCSR%2FQxaV5b8vwDpPy2y6TQVSg9tCFjgWArgId07QnXPVn9b3bXoEjxLqZkt0qQ9MuGoimIPiLiiZ3KfRYIhtOSn%2FK6GduCKi%2F7jh%2BXAv1JAGwB7AopemazNs66WD2T%2Fmv2I1Q5EL8ISNtKJae8bhntbJsF9nFeTqrPKygkwhjMmhPW%2BrGJV4vVWIILAkPxIkZLpC13QIhjM535PtUKPzVWsyqFfiCL9OcpaKTcxxVygIzMJXIwMIGOqUBzMbOm5vaURaQHrqPIN%2BqxOBDwbvhhoiG%2Be%2BSBtOGNlunc3F9WX6FRr%2FxOjXe4O7Sodybax%2Fo8aEkyxsyAwPUJ66ki6QBNsK5jos4mz45QWoR6VMzygDlPlUK0Oszo6%2FuiWgsbrRtlRwuMxwqD2T1o9g6jtCMOU9b1xfrwzIu0oWtnlqQ%2BtHEdE6eGIuRe8He2mAkieDA36sZg2otLbAVahsmAGin&X-Amz-Signature=c1d4bc0c0ef1b92095f7344ec95e1b4fbeb562bf723e2c8165e1f29290cc3354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJF76SM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZGk0s0Qut2Djn85ZnvwbiHfpdYV5ydf1fOw8XjBlyBgIga2DR3ZcDK1UaBWSvPRG6BW4XAJj%2Bf3aN0PrxmWK0ZzUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBOoWdd73Ml7KzxrFSrcAwLZXV7z3QFkwbjeVJVcKUfe%2BX%2FsxIg5XAgqPNpD5zTzrWEwSabSx5ApHPQSXRKQvkAVzyY0MBodKYcWtgj%2F%2FlVIklAYZ4SbKeF91kIu%2BeeTq9wc2kAEFVQ3jdaUvjHPikH6yxs3mraXELrgsIvNy1lf1DRPk5yWtDxCsr1CbJAO6fht4JLdovz0p4yqBDyo4ZamgGdyTNy2yT%2FUASiYex4QOlVz7UEF9qu2kjq%2FSUz4LJgLnbRZKVUK%2FfnjA8UANHcbLfEU4bQ4FaN%2FrB%2BHTdRayhZVhxICOWinEWVcF57uDE36G9OQpj%2BCGGmNHS06S0yuhqfoXnPSZxTvyGc9UTC0WqN3nyb6t9MWEVc1xnLfdEjNLI3i28DZPm9Z9FPORl93%2FJIw0FExE9WCSR%2FQxaV5b8vwDpPy2y6TQVSg9tCFjgWArgId07QnXPVn9b3bXoEjxLqZkt0qQ9MuGoimIPiLiiZ3KfRYIhtOSn%2FK6GduCKi%2F7jh%2BXAv1JAGwB7AopemazNs66WD2T%2Fmv2I1Q5EL8ISNtKJae8bhntbJsF9nFeTqrPKygkwhjMmhPW%2BrGJV4vVWIILAkPxIkZLpC13QIhjM535PtUKPzVWsyqFfiCL9OcpaKTcxxVygIzMJXIwMIGOqUBzMbOm5vaURaQHrqPIN%2BqxOBDwbvhhoiG%2Be%2BSBtOGNlunc3F9WX6FRr%2FxOjXe4O7Sodybax%2Fo8aEkyxsyAwPUJ66ki6QBNsK5jos4mz45QWoR6VMzygDlPlUK0Oszo6%2FuiWgsbrRtlRwuMxwqD2T1o9g6jtCMOU9b1xfrwzIu0oWtnlqQ%2BtHEdE6eGIuRe8He2mAkieDA36sZg2otLbAVahsmAGin&X-Amz-Signature=1d986c3e11ddfdc7d26408d95773b268a36debc8b1b32011a7d804c25fde19ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJF76SM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZGk0s0Qut2Djn85ZnvwbiHfpdYV5ydf1fOw8XjBlyBgIga2DR3ZcDK1UaBWSvPRG6BW4XAJj%2Bf3aN0PrxmWK0ZzUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBOoWdd73Ml7KzxrFSrcAwLZXV7z3QFkwbjeVJVcKUfe%2BX%2FsxIg5XAgqPNpD5zTzrWEwSabSx5ApHPQSXRKQvkAVzyY0MBodKYcWtgj%2F%2FlVIklAYZ4SbKeF91kIu%2BeeTq9wc2kAEFVQ3jdaUvjHPikH6yxs3mraXELrgsIvNy1lf1DRPk5yWtDxCsr1CbJAO6fht4JLdovz0p4yqBDyo4ZamgGdyTNy2yT%2FUASiYex4QOlVz7UEF9qu2kjq%2FSUz4LJgLnbRZKVUK%2FfnjA8UANHcbLfEU4bQ4FaN%2FrB%2BHTdRayhZVhxICOWinEWVcF57uDE36G9OQpj%2BCGGmNHS06S0yuhqfoXnPSZxTvyGc9UTC0WqN3nyb6t9MWEVc1xnLfdEjNLI3i28DZPm9Z9FPORl93%2FJIw0FExE9WCSR%2FQxaV5b8vwDpPy2y6TQVSg9tCFjgWArgId07QnXPVn9b3bXoEjxLqZkt0qQ9MuGoimIPiLiiZ3KfRYIhtOSn%2FK6GduCKi%2F7jh%2BXAv1JAGwB7AopemazNs66WD2T%2Fmv2I1Q5EL8ISNtKJae8bhntbJsF9nFeTqrPKygkwhjMmhPW%2BrGJV4vVWIILAkPxIkZLpC13QIhjM535PtUKPzVWsyqFfiCL9OcpaKTcxxVygIzMJXIwMIGOqUBzMbOm5vaURaQHrqPIN%2BqxOBDwbvhhoiG%2Be%2BSBtOGNlunc3F9WX6FRr%2FxOjXe4O7Sodybax%2Fo8aEkyxsyAwPUJ66ki6QBNsK5jos4mz45QWoR6VMzygDlPlUK0Oszo6%2FuiWgsbrRtlRwuMxwqD2T1o9g6jtCMOU9b1xfrwzIu0oWtnlqQ%2BtHEdE6eGIuRe8He2mAkieDA36sZg2otLbAVahsmAGin&X-Amz-Signature=196e4cd90b4d595c06306c457948fbc0b70aadaa0754ac28472f3e6710cc64a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO6O65G%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCgYmXGNARBUAqWWkNQ8CYrDocMAmQHbz1IE2CqVG0MdwIgRkWDxFgl%2FeVeiwwp2wA8kUo2md8nzMLARl7v9bEQ8Hkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGFDNmK7LGILnkQ10CrcAy2Jxi06iVuIyE%2BbwkHCVu82Jxjjqq29ByN22WgJMJNG6mPQeEH3PJ69ys8ssN66A6pZEtruQY1w4bft%2FxKEfQ0r%2B%2FdPJn1jIH9DCOrVzFZ7U7DoUbpa443VbsUeVlHIEB5vKlGsVVpLd86pYtyXQ7xEKb9CVcxfNAs3BptjwSjGHwGCsXfu8UhQGgS7PukbHGZ0cbAp9Pvkz9C9a4WWIi%2B5Y9JbMtrWinbGHfrq3FYAjJd81%2BmtLjTVpM1S8bFAg3fB0kxJKffdQbIDrRrFHkTWzQQTNMb9OzQCRkRICzCpk2syaDuhSA7iZCTJUzTCktLOb5sFZnQZb4PN3Gub9Od6XVtGBZD4WViBhKKnK3WYugLImIQLolpqw39MDhAmPn%2FiL4ChDYmTOUQRT%2B1D2UQ6Yfrmdzay5bmX0N6QKPhgU9r7CiB3poxnpY%2BY09Im4O97SFza7BuWWCYG60NZRDcBj0ovajTHUuZ5CrqJqzH92J13kjR%2BsLgZ30E%2BTT3coXnxXLlk1y774j8Iw%2FajaBxA7vCjD%2BIGQ7vY58B1C5%2B4w7VPcxVY1K6aPRRNuOumNZf4p4KWHXPuMmDlaDWcmlJ4PIL%2BiqmJrwECM%2BrjhxJ3IwqdT2qojWhzWUBmMMXIwMIGOqUB1zzG76ilssQskbinBvs2Zil%2BNbnW5EQwSIE%2FnMhbpe3QsrmBtTyb1Jv4eZAljXY08YzhnVYTanHvKFOCfIKYalvLKEvn1ENdaxD58aWa7kP1GDnFupCDyS1gWfb6W8Vo2MiGlYXBDJMqSA1lBeAetMfEG44GryfztIMnJ%2Bd7JjCzO8f54ARXb0UBskq4zFWcjvAo4n7hofRWd2WLviCNbgzb2zXa&X-Amz-Signature=06b425c208f28eb2a2b5c3aa7983d8ca2119c27b590667600da7af0c385c894d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SANTUV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIACGpZ6b%2F3gnwDYSqlTbPXtsU6WqSBPvqYTdX6GtqjIgAiBtNg1L06VHdc070e3AfbSwOV3rnMfSMpdIVXfe2CXAEir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMTpBJYvqPs5c9WKyDKtwD%2BMRsxk3AdQ47EsloRG60%2F9kpUSR4luqG%2BF8mmre9O%2FgPyN%2BwAK4Egm1QtrGF9%2F1DD2REK95gRX9Bb%2B%2BuaEwAbLrsUdSizJAFnltRYpvYevvjJXRhk%2B8f89vTjZm2lwdnNX9NLr4Fme6tiuv5%2Ff6b9cooRsXDoILweYzw9%2BwWHTgnIun3Jg5msUI%2F1ek3sWm6tAm9rcl6bS%2FLmQLhyGN8efsD81OAA5n8fj%2FlvKWG2Mn5cSHQpQZFhRoEdBbHGX7a1lZQ1bnCDFkQ3HZYhQUABPiF2RI4GR6eJ8wFb1X0gu1Ek8BNuxOCrhdKBoTySQMEuxTHbi%2BpFzaznb5Y%2FPQVNIou9L732ttn7NReZkTVQADx5k%2FzAxCWLsm%2BloOdV4CYiDacBP6xi5JNhE06XQo0b0VOWpEEpFKCWlD%2BnGf%2FiPAeKdJKlAWUUXj74TRurIvQyLbbfc6Tnpb%2BRYKWyfmUCsV4amhFHfB%2FD1%2B3E%2BMvZla86NSZ3Eh%2FfaL%2BeVZjzrQsSmn0hVL%2BF3rON9pRrGinX8msodO36HO1z1OgNdH%2FqMtpM6nY%2FHKXNyhsU3WAFYdNurerAUr4zX63l1DpYNSvpriuy71HE4gY%2Bc7ELvFL%2Fyv4hpdZoo53OTKoRYwwt8nAwgY6pgGOkeyc4by46CZWJ14zYCRRfuK9FXvwA9rIjjNIW621eK17hOkLRtiu0YtQ2ExdxU6Qo4gD5rAZsaku9IvzROSfCSnfGIZhJAUbD%2FK4PaADI%2B%2F4G5PFIAj6CK1cceKLiVXRG4sVHr%2FCXSqT8MoYRBOmUBzVYsLYZLFHLWC%2BuvxWtZVw1NvaVUsagQepkHCcIPyrSEkI7c1PFCc6LVl6byMZU%2FYqz1dr&X-Amz-Signature=f9ca5a598a9b511435f0ba2f52e4c7dcd5b11094bea1e61ac46a722c14207560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJF76SM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZGk0s0Qut2Djn85ZnvwbiHfpdYV5ydf1fOw8XjBlyBgIga2DR3ZcDK1UaBWSvPRG6BW4XAJj%2Bf3aN0PrxmWK0ZzUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBOoWdd73Ml7KzxrFSrcAwLZXV7z3QFkwbjeVJVcKUfe%2BX%2FsxIg5XAgqPNpD5zTzrWEwSabSx5ApHPQSXRKQvkAVzyY0MBodKYcWtgj%2F%2FlVIklAYZ4SbKeF91kIu%2BeeTq9wc2kAEFVQ3jdaUvjHPikH6yxs3mraXELrgsIvNy1lf1DRPk5yWtDxCsr1CbJAO6fht4JLdovz0p4yqBDyo4ZamgGdyTNy2yT%2FUASiYex4QOlVz7UEF9qu2kjq%2FSUz4LJgLnbRZKVUK%2FfnjA8UANHcbLfEU4bQ4FaN%2FrB%2BHTdRayhZVhxICOWinEWVcF57uDE36G9OQpj%2BCGGmNHS06S0yuhqfoXnPSZxTvyGc9UTC0WqN3nyb6t9MWEVc1xnLfdEjNLI3i28DZPm9Z9FPORl93%2FJIw0FExE9WCSR%2FQxaV5b8vwDpPy2y6TQVSg9tCFjgWArgId07QnXPVn9b3bXoEjxLqZkt0qQ9MuGoimIPiLiiZ3KfRYIhtOSn%2FK6GduCKi%2F7jh%2BXAv1JAGwB7AopemazNs66WD2T%2Fmv2I1Q5EL8ISNtKJae8bhntbJsF9nFeTqrPKygkwhjMmhPW%2BrGJV4vVWIILAkPxIkZLpC13QIhjM535PtUKPzVWsyqFfiCL9OcpaKTcxxVygIzMJXIwMIGOqUBzMbOm5vaURaQHrqPIN%2BqxOBDwbvhhoiG%2Be%2BSBtOGNlunc3F9WX6FRr%2FxOjXe4O7Sodybax%2Fo8aEkyxsyAwPUJ66ki6QBNsK5jos4mz45QWoR6VMzygDlPlUK0Oszo6%2FuiWgsbrRtlRwuMxwqD2T1o9g6jtCMOU9b1xfrwzIu0oWtnlqQ%2BtHEdE6eGIuRe8He2mAkieDA36sZg2otLbAVahsmAGin&X-Amz-Signature=06da8dd514e177f2e6c57077d12cb86f2059168396d38a221e6a1eee50cb38c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
