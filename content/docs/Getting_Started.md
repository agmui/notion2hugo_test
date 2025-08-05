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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7XTKGR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEC1437M%2Bvu9tzBxbzCvWUx%2BJ6oYsKiA%2F4IrhgGv8mgJAiEAjDbkETL4WmyukDXeNpzcwMQxvSO0kd2njf5yH1glpKMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFCJDeX1TkpjJtLu1yrcAwmD2msEfx0TO0cUF53t75WK3KN80mr9Ik6R6WCDQTutoD4vNspAvIV%2BuDQCCOA1qs8fbG8N%2BdS8XW8sCC7E1uYY73G%2Bpwf20EZz7JnNINBpImY03gDQ6G60wGC20P0T9EQv6FupixnBSG67WJldof80tk6rYu4cSTaQpHf54nFGVkvsb0jlqEPnp1Q%2FABGdcUUj8f1RaVNFIWZt4wYAVLkdP0Vc919aPmQspJL0tFcrnB%2F23UBXUcwDe2N6eq%2FLcvqVXnDMvAZpJDDhsKhcP7ZMcCew6ff1F5ufVDrqCf5q7ZNRyETrOrabo%2BrplWT%2BCIKi%2Fg9z9%2Fa6qOKYCwMb7dDgjVYdYtN3WYd9mCufHErkuDl4hR1fW6IU%2BlvMm83bjWcpKfJP0vxI3EKsIPNnvw04AJhYsuWurphk0gIqAY%2Firw0hCwA3CuSxebj%2BD8ugj8YNgPXjAEt1mXC0iBKEtllIGXSl4bKBNLcS7m0yeRe6tAw1SG0Wn358FOA0K9u23AyuIiaI33nN8tc8qbHU8aX0WRJjxgtty0LsZmWkfAwKLf8S3qkBWVNbTpQDOtuRoFWupBXW9c3szUnuei%2BEjWKcn6Kdlbw%2F1URexegWlsPqXYFiZKRhTQKX%2BR7qMPCzxsQGOqUBP2kAP19hbm8mb5G259AtxdV5v8aCN7UTNozTFKi8S5Ld56yOA3z%2B8hjpUBCbuguAv2h8wQcwloiaKK5a2bYdZBCrVNLt0XRWwrgUxSZPmLPwpE82ipeUsnh1XYcE1QvzrbaWJT7GMos7VWIkzh1f4vk4mQqYoF0Hu3naa1Uxo0HHK7n8fw7KVgnc2jz0Ya42dvS9sN%2B6AXj%2BxiXcDraIBOkQUfXU&X-Amz-Signature=49936f6141e4dbab67e438a865038200912fa4d4e59cf274dd42e1335a13c055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7XTKGR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEC1437M%2Bvu9tzBxbzCvWUx%2BJ6oYsKiA%2F4IrhgGv8mgJAiEAjDbkETL4WmyukDXeNpzcwMQxvSO0kd2njf5yH1glpKMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFCJDeX1TkpjJtLu1yrcAwmD2msEfx0TO0cUF53t75WK3KN80mr9Ik6R6WCDQTutoD4vNspAvIV%2BuDQCCOA1qs8fbG8N%2BdS8XW8sCC7E1uYY73G%2Bpwf20EZz7JnNINBpImY03gDQ6G60wGC20P0T9EQv6FupixnBSG67WJldof80tk6rYu4cSTaQpHf54nFGVkvsb0jlqEPnp1Q%2FABGdcUUj8f1RaVNFIWZt4wYAVLkdP0Vc919aPmQspJL0tFcrnB%2F23UBXUcwDe2N6eq%2FLcvqVXnDMvAZpJDDhsKhcP7ZMcCew6ff1F5ufVDrqCf5q7ZNRyETrOrabo%2BrplWT%2BCIKi%2Fg9z9%2Fa6qOKYCwMb7dDgjVYdYtN3WYd9mCufHErkuDl4hR1fW6IU%2BlvMm83bjWcpKfJP0vxI3EKsIPNnvw04AJhYsuWurphk0gIqAY%2Firw0hCwA3CuSxebj%2BD8ugj8YNgPXjAEt1mXC0iBKEtllIGXSl4bKBNLcS7m0yeRe6tAw1SG0Wn358FOA0K9u23AyuIiaI33nN8tc8qbHU8aX0WRJjxgtty0LsZmWkfAwKLf8S3qkBWVNbTpQDOtuRoFWupBXW9c3szUnuei%2BEjWKcn6Kdlbw%2F1URexegWlsPqXYFiZKRhTQKX%2BR7qMPCzxsQGOqUBP2kAP19hbm8mb5G259AtxdV5v8aCN7UTNozTFKi8S5Ld56yOA3z%2B8hjpUBCbuguAv2h8wQcwloiaKK5a2bYdZBCrVNLt0XRWwrgUxSZPmLPwpE82ipeUsnh1XYcE1QvzrbaWJT7GMos7VWIkzh1f4vk4mQqYoF0Hu3naa1Uxo0HHK7n8fw7KVgnc2jz0Ya42dvS9sN%2B6AXj%2BxiXcDraIBOkQUfXU&X-Amz-Signature=90078e698c8130e8569ead3374ac122db59365bf2248d0070da9c8362cc0f168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7XTKGR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEC1437M%2Bvu9tzBxbzCvWUx%2BJ6oYsKiA%2F4IrhgGv8mgJAiEAjDbkETL4WmyukDXeNpzcwMQxvSO0kd2njf5yH1glpKMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFCJDeX1TkpjJtLu1yrcAwmD2msEfx0TO0cUF53t75WK3KN80mr9Ik6R6WCDQTutoD4vNspAvIV%2BuDQCCOA1qs8fbG8N%2BdS8XW8sCC7E1uYY73G%2Bpwf20EZz7JnNINBpImY03gDQ6G60wGC20P0T9EQv6FupixnBSG67WJldof80tk6rYu4cSTaQpHf54nFGVkvsb0jlqEPnp1Q%2FABGdcUUj8f1RaVNFIWZt4wYAVLkdP0Vc919aPmQspJL0tFcrnB%2F23UBXUcwDe2N6eq%2FLcvqVXnDMvAZpJDDhsKhcP7ZMcCew6ff1F5ufVDrqCf5q7ZNRyETrOrabo%2BrplWT%2BCIKi%2Fg9z9%2Fa6qOKYCwMb7dDgjVYdYtN3WYd9mCufHErkuDl4hR1fW6IU%2BlvMm83bjWcpKfJP0vxI3EKsIPNnvw04AJhYsuWurphk0gIqAY%2Firw0hCwA3CuSxebj%2BD8ugj8YNgPXjAEt1mXC0iBKEtllIGXSl4bKBNLcS7m0yeRe6tAw1SG0Wn358FOA0K9u23AyuIiaI33nN8tc8qbHU8aX0WRJjxgtty0LsZmWkfAwKLf8S3qkBWVNbTpQDOtuRoFWupBXW9c3szUnuei%2BEjWKcn6Kdlbw%2F1URexegWlsPqXYFiZKRhTQKX%2BR7qMPCzxsQGOqUBP2kAP19hbm8mb5G259AtxdV5v8aCN7UTNozTFKi8S5Ld56yOA3z%2B8hjpUBCbuguAv2h8wQcwloiaKK5a2bYdZBCrVNLt0XRWwrgUxSZPmLPwpE82ipeUsnh1XYcE1QvzrbaWJT7GMos7VWIkzh1f4vk4mQqYoF0Hu3naa1Uxo0HHK7n8fw7KVgnc2jz0Ya42dvS9sN%2B6AXj%2BxiXcDraIBOkQUfXU&X-Amz-Signature=9523489b633ad0495cad91a8766280fd6cec74f9a1f103c9b835fd1f8eec3b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPCHQVZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD0R5Mxzwp1hxa7RMcBFvI%2BpLo8f1uyp0VRceDOstvSnAIhAND%2Fji7Mwgk%2BQtJdPEkV263UJi7HOqdc6PgQYEgEJX8rKv8DCFcQABoMNjM3NDIzMTgzODA1Igys5p%2FpI2%2BukcGSnw0q3AOszkW7qn470g8DOtYOpjuDF4qeYpaaQHFNl5V2JT8NCipZN67REF6rpdhVHpuumnO4HlKO76Svoz1yPPgI42uaMGNvJuxlyPaUFeMMJakhuZ0%2FF8Iv85HqXkpBpggUjx3dAbfBEHWGZVfgFnAvy2LPhLXh6hbJuRZlDXBCzZgP9pYKpWwykq2NKWgGG%2FOIyswf%2Bag2FF85V6MZXIIOJHAh%2Bh0bxzmh3smq2o7sjTPDIKMcUXqrGGDMeADamq1LS0qZhJV7Qz2CsfCF6T5YdrzYAStaQvWjT%2BfINjTfv2NqSaQ5aDLbuDwzNr9ve9%2FINRA91yNrwb6SDZmm9zplPQthE9Wd43uvjvDV5jWvHSFqIpr%2BmKCSVZ%2BKL8j3U9tNx2iH1Hxfb%2BBVO6DuzbiFjOLmQW2MDD0nHjwTsKjmgXL9vpkY3nKSL1hIWivi60YT7e%2BU%2BM0ZNAOfwMkqTh284cPB2FfYawkQ0Fnpwdau7Z1DozIqT1%2FbpOFYZbyCkdmPl%2B504U8W3ocG3TqNfjJu7hLC%2BzXNBCiwJmjLkAx6lNYCcYkufX0lE5UOzwy67spR1oK6bII02WmibIIbLHnIOlNtY8ceTFrxwi4n%2FH0Jor3iiiD5NhhEiBr%2FiobAJDCYtMbEBjqkAZgiank433TJaQrdmPoL7zMs6Z3qjtPwGFiT%2Bv9XOnymdhkzmmYsRSBo2hEPseb5yUFS4gwVjRcBoSt27HDmhgv3X8B5amzQMD%2FsrcvHuDg0GrLrbAbSudAB41jVJx3n68Db6olqkXGlJ5P3nrxeAaeBcoVujPMBQnuk5YXgvU%2BvOjjgbnnihmRwEB22WQ1NKiIIveGaV9x19d%2FSpd%2FjPWQgXVgz&X-Amz-Signature=53246aebdd09c4bfe33b1ace55a46592c72c09ff8ffdf4bf9d05cacd4c9bcec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJYPNY2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCBhvQlaVjLrrEoMCgFmW2o%2BnR%2B6zF5vobm9RHnzr3tUwIhAILToGtr7OnVqD2oAgZG0bZ5dtIkkaMWDSc82ig3KTZ0Kv8DCFcQABoMNjM3NDIzMTgzODA1IgytjBMSCyRD%2FPHTIckq3APmg6aSSKlTtEJEokHX6GzLLX9Z1BFuwEXwQDLhe3AKlhKuj1Dej5cDd33RMBwdnQRPQP0J2I%2F2luv57KC9h7oYwQt8k1%2Fo5hYod0m9jGyWLhb8uNPaqxai6jO%2BuAB4%2FHeuin5ULppPE3WaQFakpNCUPErNv2POSD7Q16xpASLpA4YP9hr2Ms4eh7wywtJknm9vZZ177UILqztN%2BzmzNiqgXLYfIc%2FMa05LMY6%2BdJnh8BrqK4K1w%2FBzZXC%2BuDrWzMr%2BfDvR7L4xxkxXIZzqmqQXHnThX%2B2IEOpGPmXmLIzA9XRGN1ip4GCkBmIRn2qmSqt4uOMihk8clKS9kVPhr6A1j22hEMq2ZoSTSnvrd5t5hmA%2BHIXUFXiTcp3V%2BoZGA%2FazRphjejaKIOxTYqKg2EZGY5IGy2Hhp8srO7zkq0bY%2FNSIqrsX1rzHyUnkcNQbH%2BJNqNHrKyCCTOiIbbzbT8itKVRuD9dTD8TDsTPnWHdBJd4wZIVsl2ri6Y2eZ4BXues7ncNuskruZH1gGIWs01lveeexbN3iNeC8tyqdbA8D1hBmbUe5OggJ5CzIl2DFaQXmCGpkSFxKllgLPSv8ts9yxgU3XePaMhdjJGq2dEfcc8BONzaOY1ROhIVqczD2s8bEBjqkAfDy9AIpTZxcHcVt17lYBR1aQASh4LcpBgcH4psakKzI8%2Fanf7hzzJ7lQl9m7OPunDF9WMwctfsOOiI6y23sHB%2F%2BuhwnmYTCCk2Tu2Y86yLSrdoFsSsfgZtVUg02jXu8YFacOwMVuw8nVJWsZmFghNMk6GtqMYLqcfZbl02yjOa71SKQnDL71cQCf6lwHxhdvlzFt2pxhzEhXFosWlex%2BzWo89l%2B&X-Amz-Signature=a8a035fb7917cc156c2eec4dc2c6f6d42a4c35e9cc05e59d7b9b0b30f99763b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN7XTKGR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEC1437M%2Bvu9tzBxbzCvWUx%2BJ6oYsKiA%2F4IrhgGv8mgJAiEAjDbkETL4WmyukDXeNpzcwMQxvSO0kd2njf5yH1glpKMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFCJDeX1TkpjJtLu1yrcAwmD2msEfx0TO0cUF53t75WK3KN80mr9Ik6R6WCDQTutoD4vNspAvIV%2BuDQCCOA1qs8fbG8N%2BdS8XW8sCC7E1uYY73G%2Bpwf20EZz7JnNINBpImY03gDQ6G60wGC20P0T9EQv6FupixnBSG67WJldof80tk6rYu4cSTaQpHf54nFGVkvsb0jlqEPnp1Q%2FABGdcUUj8f1RaVNFIWZt4wYAVLkdP0Vc919aPmQspJL0tFcrnB%2F23UBXUcwDe2N6eq%2FLcvqVXnDMvAZpJDDhsKhcP7ZMcCew6ff1F5ufVDrqCf5q7ZNRyETrOrabo%2BrplWT%2BCIKi%2Fg9z9%2Fa6qOKYCwMb7dDgjVYdYtN3WYd9mCufHErkuDl4hR1fW6IU%2BlvMm83bjWcpKfJP0vxI3EKsIPNnvw04AJhYsuWurphk0gIqAY%2Firw0hCwA3CuSxebj%2BD8ugj8YNgPXjAEt1mXC0iBKEtllIGXSl4bKBNLcS7m0yeRe6tAw1SG0Wn358FOA0K9u23AyuIiaI33nN8tc8qbHU8aX0WRJjxgtty0LsZmWkfAwKLf8S3qkBWVNbTpQDOtuRoFWupBXW9c3szUnuei%2BEjWKcn6Kdlbw%2F1URexegWlsPqXYFiZKRhTQKX%2BR7qMPCzxsQGOqUBP2kAP19hbm8mb5G259AtxdV5v8aCN7UTNozTFKi8S5Ld56yOA3z%2B8hjpUBCbuguAv2h8wQcwloiaKK5a2bYdZBCrVNLt0XRWwrgUxSZPmLPwpE82ipeUsnh1XYcE1QvzrbaWJT7GMos7VWIkzh1f4vk4mQqYoF0Hu3naa1Uxo0HHK7n8fw7KVgnc2jz0Ya42dvS9sN%2B6AXj%2BxiXcDraIBOkQUfXU&X-Amz-Signature=7d6ad47eb32383e558dcd1190cc8a5a7caa52957b3e2e5770161d7617a561e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
