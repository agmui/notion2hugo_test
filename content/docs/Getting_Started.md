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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRWOR4T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYlVNsIXvx0WVS%2FhoWzcNQN7dROTjOgBaPc1p6bcyggAiAqd0DCm1ke6I894QgGNa2EAYJqQYzS0gZzmj%2BGTbYtKCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMkJDuvRdA0nAi3SqeKtwDmEgLFnMfSpsnUQonTgmjg%2BVD%2FTtLkAmzxpxT8n60XMcnvu21tldStrBniB%2FRN6mPpzTDTrWYhoZPk%2BmycvUxg%2BwYNucxexORQ%2BtoIgWt4C0eLDxO5XtWIrRwFYQFmpoINkrx3Bst5pN%2BaR8FTVmXTW%2BhmOGYZgmET3EtFnKOH86Jt9fEPZ73mQDnBwW2ULnmPv1w%2B8403KxkVDPeg7%2FoYjAWlFYVYU9vvMjXyaMSXVvqaQdx3N0Z7XSPPKXKTqgckFZvCGZXzAZ4NPTZYtZ6SNlpVKNlSQ%2B0s4yoASbGYjeypT45De7cNmIX4mrU7N%2BAv8WVvdF%2FyAOfTuhc7FgvBEz3lg88ulHScG%2Fjoq1Cc9Z2CqilhMKHlQQ59Vj%2Bak%2B4F4d4Y0LzM7Q0nx8LYJUuAerNaoa10%2Fwrswn3f2bXWu5E%2BkvM35k6cRF%2FJeKamSDSS41EMy2ILu5u24tcpYhDEDIa7bnfg4p%2BjDOJbe5dU2ye8FJ9nq9TTAOQfXrxDFmCURxT6fs4mbFauj5ddLHxOYNS2DG7K4HFyh87R9Vgjgc3ehIGZYLodmbZYYoyUtwkCVjjlLpX%2F9xR7j%2B3V7eHezJhvDJMJ6PLWNPv%2BKLGk5r0UI%2FKLDwWDCF7tTEwnbHywAY6pgHIlLR3%2F%2FD5ct1e6zb9MFj0wRJn%2F21Q7peZzb1RHMh9PnrSccrFPBM8R5RnTUowjlTsHuHkNRoV08PFFQ%2FCJcjQIWmZ4fUFYMqgQdxYwSNyH5tKFiWp1%2BwJSfCvBLf8nFy4ylf2V7Ca13zP3sASf0tyef9nhoeHrxTumU9BoDmK0KnqKFs8ZCdZlh%2BmN4N1XFGyTKB7XmD3Er0FR0uoCD%2Bp3D7eq0ao&X-Amz-Signature=285f9f573af92f677b6469726e2d28e9e5cdbae5ee52a81f07f6fbbbd8d2baa2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRWOR4T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYlVNsIXvx0WVS%2FhoWzcNQN7dROTjOgBaPc1p6bcyggAiAqd0DCm1ke6I894QgGNa2EAYJqQYzS0gZzmj%2BGTbYtKCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMkJDuvRdA0nAi3SqeKtwDmEgLFnMfSpsnUQonTgmjg%2BVD%2FTtLkAmzxpxT8n60XMcnvu21tldStrBniB%2FRN6mPpzTDTrWYhoZPk%2BmycvUxg%2BwYNucxexORQ%2BtoIgWt4C0eLDxO5XtWIrRwFYQFmpoINkrx3Bst5pN%2BaR8FTVmXTW%2BhmOGYZgmET3EtFnKOH86Jt9fEPZ73mQDnBwW2ULnmPv1w%2B8403KxkVDPeg7%2FoYjAWlFYVYU9vvMjXyaMSXVvqaQdx3N0Z7XSPPKXKTqgckFZvCGZXzAZ4NPTZYtZ6SNlpVKNlSQ%2B0s4yoASbGYjeypT45De7cNmIX4mrU7N%2BAv8WVvdF%2FyAOfTuhc7FgvBEz3lg88ulHScG%2Fjoq1Cc9Z2CqilhMKHlQQ59Vj%2Bak%2B4F4d4Y0LzM7Q0nx8LYJUuAerNaoa10%2Fwrswn3f2bXWu5E%2BkvM35k6cRF%2FJeKamSDSS41EMy2ILu5u24tcpYhDEDIa7bnfg4p%2BjDOJbe5dU2ye8FJ9nq9TTAOQfXrxDFmCURxT6fs4mbFauj5ddLHxOYNS2DG7K4HFyh87R9Vgjgc3ehIGZYLodmbZYYoyUtwkCVjjlLpX%2F9xR7j%2B3V7eHezJhvDJMJ6PLWNPv%2BKLGk5r0UI%2FKLDwWDCF7tTEwnbHywAY6pgHIlLR3%2F%2FD5ct1e6zb9MFj0wRJn%2F21Q7peZzb1RHMh9PnrSccrFPBM8R5RnTUowjlTsHuHkNRoV08PFFQ%2FCJcjQIWmZ4fUFYMqgQdxYwSNyH5tKFiWp1%2BwJSfCvBLf8nFy4ylf2V7Ca13zP3sASf0tyef9nhoeHrxTumU9BoDmK0KnqKFs8ZCdZlh%2BmN4N1XFGyTKB7XmD3Er0FR0uoCD%2Bp3D7eq0ao&X-Amz-Signature=f9cd88f7360422d423811c9e6892fe4815944000a169a41f9e1e96c6de2a5d45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRWOR4T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYlVNsIXvx0WVS%2FhoWzcNQN7dROTjOgBaPc1p6bcyggAiAqd0DCm1ke6I894QgGNa2EAYJqQYzS0gZzmj%2BGTbYtKCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMkJDuvRdA0nAi3SqeKtwDmEgLFnMfSpsnUQonTgmjg%2BVD%2FTtLkAmzxpxT8n60XMcnvu21tldStrBniB%2FRN6mPpzTDTrWYhoZPk%2BmycvUxg%2BwYNucxexORQ%2BtoIgWt4C0eLDxO5XtWIrRwFYQFmpoINkrx3Bst5pN%2BaR8FTVmXTW%2BhmOGYZgmET3EtFnKOH86Jt9fEPZ73mQDnBwW2ULnmPv1w%2B8403KxkVDPeg7%2FoYjAWlFYVYU9vvMjXyaMSXVvqaQdx3N0Z7XSPPKXKTqgckFZvCGZXzAZ4NPTZYtZ6SNlpVKNlSQ%2B0s4yoASbGYjeypT45De7cNmIX4mrU7N%2BAv8WVvdF%2FyAOfTuhc7FgvBEz3lg88ulHScG%2Fjoq1Cc9Z2CqilhMKHlQQ59Vj%2Bak%2B4F4d4Y0LzM7Q0nx8LYJUuAerNaoa10%2Fwrswn3f2bXWu5E%2BkvM35k6cRF%2FJeKamSDSS41EMy2ILu5u24tcpYhDEDIa7bnfg4p%2BjDOJbe5dU2ye8FJ9nq9TTAOQfXrxDFmCURxT6fs4mbFauj5ddLHxOYNS2DG7K4HFyh87R9Vgjgc3ehIGZYLodmbZYYoyUtwkCVjjlLpX%2F9xR7j%2B3V7eHezJhvDJMJ6PLWNPv%2BKLGk5r0UI%2FKLDwWDCF7tTEwnbHywAY6pgHIlLR3%2F%2FD5ct1e6zb9MFj0wRJn%2F21Q7peZzb1RHMh9PnrSccrFPBM8R5RnTUowjlTsHuHkNRoV08PFFQ%2FCJcjQIWmZ4fUFYMqgQdxYwSNyH5tKFiWp1%2BwJSfCvBLf8nFy4ylf2V7Ca13zP3sASf0tyef9nhoeHrxTumU9BoDmK0KnqKFs8ZCdZlh%2BmN4N1XFGyTKB7XmD3Er0FR0uoCD%2Bp3D7eq0ao&X-Amz-Signature=11c28583c47b3dcd54194646ce53dcb8a0e629a3882221cb5bde86ce12f0a191&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZDEYCAM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBBMbv6FGB9cAMgtcoZQASCDysZeBW7I1gJDAFy%2BHnBQIgOARQ7d%2B5N0p3wpW%2B2Od3tkRLWwssNucR7BJO7TETR14q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA275%2BKYGwWnq%2FVjEyrcA8TSzxlNfuo75uet1up%2FfMj3GfuXMRSeGv3gmmzGyKf1JeXwykZUFOsb1xEzNzDQv8mYrG2Gu7hqqkrVx3aBdefZuwJmpCtrZacjRzLsqelJ1%2B8sZlqu7U5dOFqmfvVE4t3fyf8zTPDORjtvKpPoTiNpMot%2BvYveu%2Fi8uwCf3GhiFc19JQTQzu9sShbMnS1kOjyo3297LrrauhGKYJSHiabmfT51lqLnN19tlEqvIu21IDyH3L4dRAQPp71NWedgyXKFFhHTzlB9dA08XFGkvfy%2FEmJx0Ebq9fo6KmXARy9K2ITIdk%2BASj1EXXOl3qMfmpiyyM5j6tupQFU0fg1vrhLhlYv7rp26PVfMvNJoarzyCSB%2BNCfZal6Mijm1Sz2Mw1hUIlN%2F2K4m9s9ApN3ThxhFcw3%2BA8pk5V1lKdib9YC6yAb1l7X%2FEFzZ0PiZ7ismTHeSq9GAwgEc2eMsg%2BvFq9SZm47rmwg5k1eB6bQygv5X6njLcY%2FdBsaU0qRyd1EpiJ2QsdkCQa01zlIC2cMDevN0YCJ8ahGCCHhGFeqFfEg5C6WdKufaxdVv4qLCRu56Ox465UYENqTatfWCQ2LSuIdI1z2dla%2BIINSqztHRiWN2lhTO%2F2zcJ4%2FfDz4sMJyx8sAGOqUB4229R8wQrsFThHykjEtwR7OH6fZPX5ZTEaCrsmo35vlpjW3kelyt0HYto7ZwdfeU3%2FzgEGI%2BFhO2S3ySdgV%2Fpcuh5sRXssdzKiPYi%2Fuc7%2Bi5W2iCxHHRp0YLB%2F%2F4KeJlPNs7LHXB%2BmnW7YvLpsUbpuMSHioWnhMer4D5eviOk%2FD%2FiJh9Z9f9lDLishjoVYlxG236F72UPzNHmRH18ZQ9F9XDYYnL&X-Amz-Signature=e313457c71846395c3500d3cbd855838409e041d5c25d184001e322e8a5d9e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETZRVCR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDunDsKlHJyaIXtS06FvaULBZkPLBI6OtA1aRWYKUN9YAiBYUTgXysUX4qrpOxP9sAoP2fwijVe5ATrbkMj8HG%2BOpyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtIR9jfmKh%2BN8sM7DKtwDbUkXuSJkrqsIg%2BTs2s5p%2B4MQ0Pi2nonfJdVYbc3bAzEDDPbNfZ%2F0SesRHJzgKM0iCy1LSbi0K6bpPNvRB0R2GXDRTRT1%2B0nWpJdyLVS0DXoAikxBkSFLQQRQnEDnHGc%2F8GJYGUYGXFg%2B2tHDNufnpjzekSUGx0m%2BosCDU81C1cH70thrHQoIQr%2BWbfutkE%2FSZqL0ZpSZfOG12Z4ffAifcCYTe4vsX01MmGuEF9oN%2Br%2B8mDI58yyCpIBlvYkeuXS%2Fkit8EtPkWX1hxFA2Ikyi5Mfza%2BQ%2FCvT8Crk3k50RIG7sLn6cuh7LuC36yhVrIDWyNN3UNwnNyoWoAJQcZaN0PyqkYYQu8De0ccnasAvbsaLZF5C2nRGrusRDGMpWy3pLoVy8zTgR%2BivOtuug5b2ePsu7G645j%2B9ijOguk0IdhEB6txkVIZ9H6uXOeWnF2vp%2FlVTc4oQGIO7vFYF3%2B2%2BAHouhtKhJNBs5b6eazbuykjLPlY0bMq7BctgTZI5TMYOOT8jpaCk84bqAghjisi0IOtli7Q8AcZBHzQ5ggeSCz%2FY3XAxD%2FPpS6RLTkxjoSEiH7%2B%2FM7race3MX8cYcCbMZ%2BCHFiHM5j2K9ddzgQkXQ36870kOqBGcRj89sJ%2FYwi7HywAY6pgGSnDGCteLmKHGZeSVHYvkAFRfndcWfQoptXuzOnQMfdjLCGUGcdcxYeijuJQR5iDTVup6JylrHrgorOAXvBFg6NTeh76zVHFOHkAHZouEHZi7WRCK7QZPeisvyK9L%2Fo8XUnmxZ4DLWuIz%2BJvhX4sx9%2B27GIfZuy5B%2BSJeUyIIQ4cEG9Lgqndl5aAFO56mLmmAre4fKZqvJO3KsAj69MSb9VWeY7%2Bns&X-Amz-Signature=06175f515b587f062e9c3ed20fb690209d0b9c6b6419956b78dfcad44a92f814&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXRWOR4T%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYlVNsIXvx0WVS%2FhoWzcNQN7dROTjOgBaPc1p6bcyggAiAqd0DCm1ke6I894QgGNa2EAYJqQYzS0gZzmj%2BGTbYtKCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMkJDuvRdA0nAi3SqeKtwDmEgLFnMfSpsnUQonTgmjg%2BVD%2FTtLkAmzxpxT8n60XMcnvu21tldStrBniB%2FRN6mPpzTDTrWYhoZPk%2BmycvUxg%2BwYNucxexORQ%2BtoIgWt4C0eLDxO5XtWIrRwFYQFmpoINkrx3Bst5pN%2BaR8FTVmXTW%2BhmOGYZgmET3EtFnKOH86Jt9fEPZ73mQDnBwW2ULnmPv1w%2B8403KxkVDPeg7%2FoYjAWlFYVYU9vvMjXyaMSXVvqaQdx3N0Z7XSPPKXKTqgckFZvCGZXzAZ4NPTZYtZ6SNlpVKNlSQ%2B0s4yoASbGYjeypT45De7cNmIX4mrU7N%2BAv8WVvdF%2FyAOfTuhc7FgvBEz3lg88ulHScG%2Fjoq1Cc9Z2CqilhMKHlQQ59Vj%2Bak%2B4F4d4Y0LzM7Q0nx8LYJUuAerNaoa10%2Fwrswn3f2bXWu5E%2BkvM35k6cRF%2FJeKamSDSS41EMy2ILu5u24tcpYhDEDIa7bnfg4p%2BjDOJbe5dU2ye8FJ9nq9TTAOQfXrxDFmCURxT6fs4mbFauj5ddLHxOYNS2DG7K4HFyh87R9Vgjgc3ehIGZYLodmbZYYoyUtwkCVjjlLpX%2F9xR7j%2B3V7eHezJhvDJMJ6PLWNPv%2BKLGk5r0UI%2FKLDwWDCF7tTEwnbHywAY6pgHIlLR3%2F%2FD5ct1e6zb9MFj0wRJn%2F21Q7peZzb1RHMh9PnrSccrFPBM8R5RnTUowjlTsHuHkNRoV08PFFQ%2FCJcjQIWmZ4fUFYMqgQdxYwSNyH5tKFiWp1%2BwJSfCvBLf8nFy4ylf2V7Ca13zP3sASf0tyef9nhoeHrxTumU9BoDmK0KnqKFs8ZCdZlh%2BmN4N1XFGyTKB7XmD3Er0FR0uoCD%2Bp3D7eq0ao&X-Amz-Signature=65ef737de33dfba831cb566d53c5b21eb2689bcf77ef8940edb8c7176a2909f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
