---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6K2MKO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDydUj1u%2FKX0bgZ4ft%2BabR7%2F3LmuCQjnAZsJpqdaNUO7AiEA4YyWIrVM4RXlZQqKpg66skRDhAnOnadx7AlkC5SfjckqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDUVkX7ukB9DwhdiSrcA5Pfb50Op454y690D3GPs4hBCLt3LXcnPW5OSgstvsFarj4IVGKcKQ5KSj9aOFpOvQjosrip4uf5vHYCPPVjxxYg8%2BjxthlsLQGaGDyUSmbDdT2%2Bib9awhsqyupJuN4tVEKq7M3OciSELuozDvnZPmq%2F8ZGsxfTlPeLBspAfDXD2d4VY8BDrtpLbMhnBY%2Bgm7NDg0T1xxO1VetpUALPy6qRxadJfS8HtYOE9BlcdYRUiGzeNtD9g97XOC1Bm5rOR4HpsN2PKAnZg0qroDw2y3fSSvyjEYQKO0uNrUZJzY566sU0IC7YvuZunujKVzgMOzvY6uxxGU0xKKixiV3lms2ZpzdL3NwWAayTEyMvNgDJYv0Op%2BXkw7wiFUBOf03r23KzuuQqqYdEy0InbyLVf1N3UjyV3FCcNOcX%2BKfVeBZFNp%2F0qLA8W2pd%2FQRfYFRfAk267KsOj91fidODK913kjl37Vvfmj6oESaLGyu3caOusVZLlr2CtkmbhM41fX3M3qWJXWnpNozi0S4uyzhSg8uNG24XwNp7662Dj9qubrZIcQeaCOHhoCZqMNZYcTx3cbl10eDOMdKFPCjcXundLA3aKqy9bz%2FrxHcGh9i8netIlhorywCyuEkt1STIUMNHPoskGOqUBeF0IU3cRbHZmMMqcWEjUmyvL1iJgE1BNChy9CDTxiWyRO6dbWDX4sr4E%2FCqgnZR0L4DDb%2FlUNYr0v2UDkCuCb3gJcIhkOtpw4rVy%2B%2BBDMZFISLzBM82PWBU%2FFaW%2BS1L%2B%2F4zMZIQ48YfxRPXwdUeOtUhQD3VJvJJ10FaFbB1shSVZBpNEAUKfn4R1obTCc%2Bweo9wxNg6gjYBqrCzHjG1E39srCZ9%2F&X-Amz-Signature=55b47eb7a9893727ed964108e9dba7818bb0633aca3714d1468a156811d52835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6K2MKO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDydUj1u%2FKX0bgZ4ft%2BabR7%2F3LmuCQjnAZsJpqdaNUO7AiEA4YyWIrVM4RXlZQqKpg66skRDhAnOnadx7AlkC5SfjckqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDUVkX7ukB9DwhdiSrcA5Pfb50Op454y690D3GPs4hBCLt3LXcnPW5OSgstvsFarj4IVGKcKQ5KSj9aOFpOvQjosrip4uf5vHYCPPVjxxYg8%2BjxthlsLQGaGDyUSmbDdT2%2Bib9awhsqyupJuN4tVEKq7M3OciSELuozDvnZPmq%2F8ZGsxfTlPeLBspAfDXD2d4VY8BDrtpLbMhnBY%2Bgm7NDg0T1xxO1VetpUALPy6qRxadJfS8HtYOE9BlcdYRUiGzeNtD9g97XOC1Bm5rOR4HpsN2PKAnZg0qroDw2y3fSSvyjEYQKO0uNrUZJzY566sU0IC7YvuZunujKVzgMOzvY6uxxGU0xKKixiV3lms2ZpzdL3NwWAayTEyMvNgDJYv0Op%2BXkw7wiFUBOf03r23KzuuQqqYdEy0InbyLVf1N3UjyV3FCcNOcX%2BKfVeBZFNp%2F0qLA8W2pd%2FQRfYFRfAk267KsOj91fidODK913kjl37Vvfmj6oESaLGyu3caOusVZLlr2CtkmbhM41fX3M3qWJXWnpNozi0S4uyzhSg8uNG24XwNp7662Dj9qubrZIcQeaCOHhoCZqMNZYcTx3cbl10eDOMdKFPCjcXundLA3aKqy9bz%2FrxHcGh9i8netIlhorywCyuEkt1STIUMNHPoskGOqUBeF0IU3cRbHZmMMqcWEjUmyvL1iJgE1BNChy9CDTxiWyRO6dbWDX4sr4E%2FCqgnZR0L4DDb%2FlUNYr0v2UDkCuCb3gJcIhkOtpw4rVy%2B%2BBDMZFISLzBM82PWBU%2FFaW%2BS1L%2B%2F4zMZIQ48YfxRPXwdUeOtUhQD3VJvJJ10FaFbB1shSVZBpNEAUKfn4R1obTCc%2Bweo9wxNg6gjYBqrCzHjG1E39srCZ9%2F&X-Amz-Signature=cae6588131818cfd6177f0055f5cbfb99b5ca3691e57dc8069c04e5d0dade511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6K2MKO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDydUj1u%2FKX0bgZ4ft%2BabR7%2F3LmuCQjnAZsJpqdaNUO7AiEA4YyWIrVM4RXlZQqKpg66skRDhAnOnadx7AlkC5SfjckqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDUVkX7ukB9DwhdiSrcA5Pfb50Op454y690D3GPs4hBCLt3LXcnPW5OSgstvsFarj4IVGKcKQ5KSj9aOFpOvQjosrip4uf5vHYCPPVjxxYg8%2BjxthlsLQGaGDyUSmbDdT2%2Bib9awhsqyupJuN4tVEKq7M3OciSELuozDvnZPmq%2F8ZGsxfTlPeLBspAfDXD2d4VY8BDrtpLbMhnBY%2Bgm7NDg0T1xxO1VetpUALPy6qRxadJfS8HtYOE9BlcdYRUiGzeNtD9g97XOC1Bm5rOR4HpsN2PKAnZg0qroDw2y3fSSvyjEYQKO0uNrUZJzY566sU0IC7YvuZunujKVzgMOzvY6uxxGU0xKKixiV3lms2ZpzdL3NwWAayTEyMvNgDJYv0Op%2BXkw7wiFUBOf03r23KzuuQqqYdEy0InbyLVf1N3UjyV3FCcNOcX%2BKfVeBZFNp%2F0qLA8W2pd%2FQRfYFRfAk267KsOj91fidODK913kjl37Vvfmj6oESaLGyu3caOusVZLlr2CtkmbhM41fX3M3qWJXWnpNozi0S4uyzhSg8uNG24XwNp7662Dj9qubrZIcQeaCOHhoCZqMNZYcTx3cbl10eDOMdKFPCjcXundLA3aKqy9bz%2FrxHcGh9i8netIlhorywCyuEkt1STIUMNHPoskGOqUBeF0IU3cRbHZmMMqcWEjUmyvL1iJgE1BNChy9CDTxiWyRO6dbWDX4sr4E%2FCqgnZR0L4DDb%2FlUNYr0v2UDkCuCb3gJcIhkOtpw4rVy%2B%2BBDMZFISLzBM82PWBU%2FFaW%2BS1L%2B%2F4zMZIQ48YfxRPXwdUeOtUhQD3VJvJJ10FaFbB1shSVZBpNEAUKfn4R1obTCc%2Bweo9wxNg6gjYBqrCzHjG1E39srCZ9%2F&X-Amz-Signature=9ccaafde4bfe519e19fcf29e38c3888d85e22532cb9e08bb15e9e6d00977c45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J75EPZN%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyaIRKBrrWu%2Br95dUu4VHhN7yzgj8xlJskdYnrobdc6AiAz5BXrasgsJsBfaQWMmZ2nTtKa%2FNEuisbvMf063gAsOSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoSSRf9UwI1CugvnKtwDAEilDHj%2FiI%2Fw6g%2BabMXIbKa32TkRAZnN6VB8kT8%2B%2B682Fj7PSYL8mJiZ7TEqXdx9TaRCRjsjripYfN%2FwMrYLE5h%2F9SHXAhIFqpcVxGCvn834YE4Lmt8Eftn1P63fTrd41jaGIUWePXbjZiJKGHzxB9UpVYihE1MBZ02nub3drqL40N%2Bma74%2B7Vio8nOl57lOpTOIW1b17Xyn6nrDDQziKwgA2scf0t6tKjvhmpPqM%2BaBU%2FN7%2BiO%2BiIi%2BlAqXF%2FEzvYhM06etMz9Jx6QaH8Ck021RHrEqvZYkVKnQKHoD4LayattLQxsIDZmBkdm9KMuP6kiTBtivIaHaKOaMdwmWDv%2Fhm1xZ0azHnsp3nKdCzR07GAIPAS%2FUTA6LFoa6SU9PUoqZl1DSmMR3DN9U2zbzBJonTyuImuC8cbtV96IloB5mZyZtC0mkALCzIWQ6PU%2BvUvBf8XPEtd3x9BZEckOeRpNYSqJ7aUHNcr8P3PPAljLLdlW8SNNVMtT8%2Fs5cHSwYXYDmbfr4cWOLliOI4NK2guMaPFogVnNZfDxVKrvBEugc4ja5igACF9iJGfoKd6One5BKV0RQ26NVSk5b0p9Ins%2BJbGEnS%2Bpz6%2BpaSZtZiFNXcTdt%2Fu%2BZ%2BN%2BUX7Qw6dqiyQY6pgHavVGZTPcA6BV%2BjCNxuqyQwBSwqC7kqdAfV8FRmQtb5wIUrZg4FrwOOcJ2SNNDmJXNN7JxFZVYV%2BBLiiFw%2BEp4Mr0MCvm5KJh2B5b1jtEihg%2BhTybmV2R0FCq3Lg5fezOZIGYTqsRb3nEN6DGhunV7BFciFyhpSKIs8DGnBfthi0vGQz4jwI3%2B5ZqUGspDGHxK7AJ93gnNKD0uxp1inJq5RmK%2BmpS%2F&X-Amz-Signature=9f721dd242ec8caa8727ecc004a2540651a21f39d3e0ab1f9e4c1e5bab7b19ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EHVMBLG%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7ly2YSAxjrJWscB8iJAjOpxJzaoUB6POQ3Cj4XvUesgIhAL3Lh2KrnzA8m3kgI5QyaE4dpeKp%2BEwXsZXX6DSpj9UWKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6ba9PmclEOX6Az6Uq3AP%2Flu4wTG33R4sWY17gIVKCpyD8O%2BWNnXZnfq39MANOrWbNtSNDn7eyldt6z00JcXCWgyfPMuptbCk8KqSumneWmhXZMnYy9gLMAeAKSTKjp%2B%2BTV9rHpc4fSBeYFNBsTFeWJk40jQ4bsuWjl8fasb7bzrJhNKK84Q466eySfdYCsHhg1814vLJ1Pw2%2BxXG%2FrnljR6EjBzFnLPZ5J8gjA66QeoUXln8c6euoAo9JF%2BGFG1DzZYZB78VY1%2BkJZzm6kSURhvD0Mm0MjcrLJKeKVUy%2BDHHO2U2en9FGZJVndUyEKruilzmzufi%2Bf7NQdwlrNRL1Mti9tQOqlcyYu4FiXXdBQ0il%2Bq5VhSLUF9UUnqfgVlMZe5Y80gVlZ0VkL42ImN9iQDxUr6WJwZdvcF6lDyPmrZpVtqyu8gK20MlTqzo7DmlOaRLObrDudZ0P5Angh2FdTi2d6C6uZCVhWCZfpcC8R8rjxgZi%2FwnsNuyHZcsRZaxR7W9NqcFHyvLnnGsV%2B2DoS1b0GrIrwttykE9NksKs3fv%2B5aD4XweL%2F3D7c5XhPe1XUDFlVFgop5Z3ZUs%2BUX4g8ypTuvKccL5T5GnZgqG4BZX2o3LOTybSQfCrbPXm0f61t0W2PSD3IRy8GDDV%2F6LJBjqkASP7VbNmqca1uDeKu6xRbhssEs6Xw7fNNE6X7GUUBpvAVogf9AaAI72zCa%2FwyaKnxIQCH%2Bm6UxCunFKZ1o5Wc9D8tqewSwel8n5dhbSfEcRHTKpbtY6ps7IzEuKMmrX%2Fqd0NFAT66ZAEdmvKgFWEsh8dDQvh08eXWba9NlvcAxkj9HGk9RHt8oDrcb51teN9USzBWxGZH9y8mh%2BcMUYtTfIfuJAY&X-Amz-Signature=a4dc40f82add5078decf1d5038f2e9271dd932da43f8964b0bd26dacb68639f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM6K2MKO%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDydUj1u%2FKX0bgZ4ft%2BabR7%2F3LmuCQjnAZsJpqdaNUO7AiEA4YyWIrVM4RXlZQqKpg66skRDhAnOnadx7AlkC5SfjckqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDUVkX7ukB9DwhdiSrcA5Pfb50Op454y690D3GPs4hBCLt3LXcnPW5OSgstvsFarj4IVGKcKQ5KSj9aOFpOvQjosrip4uf5vHYCPPVjxxYg8%2BjxthlsLQGaGDyUSmbDdT2%2Bib9awhsqyupJuN4tVEKq7M3OciSELuozDvnZPmq%2F8ZGsxfTlPeLBspAfDXD2d4VY8BDrtpLbMhnBY%2Bgm7NDg0T1xxO1VetpUALPy6qRxadJfS8HtYOE9BlcdYRUiGzeNtD9g97XOC1Bm5rOR4HpsN2PKAnZg0qroDw2y3fSSvyjEYQKO0uNrUZJzY566sU0IC7YvuZunujKVzgMOzvY6uxxGU0xKKixiV3lms2ZpzdL3NwWAayTEyMvNgDJYv0Op%2BXkw7wiFUBOf03r23KzuuQqqYdEy0InbyLVf1N3UjyV3FCcNOcX%2BKfVeBZFNp%2F0qLA8W2pd%2FQRfYFRfAk267KsOj91fidODK913kjl37Vvfmj6oESaLGyu3caOusVZLlr2CtkmbhM41fX3M3qWJXWnpNozi0S4uyzhSg8uNG24XwNp7662Dj9qubrZIcQeaCOHhoCZqMNZYcTx3cbl10eDOMdKFPCjcXundLA3aKqy9bz%2FrxHcGh9i8netIlhorywCyuEkt1STIUMNHPoskGOqUBeF0IU3cRbHZmMMqcWEjUmyvL1iJgE1BNChy9CDTxiWyRO6dbWDX4sr4E%2FCqgnZR0L4DDb%2FlUNYr0v2UDkCuCb3gJcIhkOtpw4rVy%2B%2BBDMZFISLzBM82PWBU%2FFaW%2BS1L%2B%2F4zMZIQ48YfxRPXwdUeOtUhQD3VJvJJ10FaFbB1shSVZBpNEAUKfn4R1obTCc%2Bweo9wxNg6gjYBqrCzHjG1E39srCZ9%2F&X-Amz-Signature=7d1ce47279b71ed5422945972d0cc68fc53b49bdeff0886e3545d7c2185599dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
