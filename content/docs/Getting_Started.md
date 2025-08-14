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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MIDID7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICAgiSroEX74OIz7Sh95MPD9cAf50msoMck1MVEyh27wAiEA6svLWfw8%2Fmlt6veFAILYq9he7AYZr8VQ9wi1MrmJOqsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIoXmC1jl1n7BB2xGyrcA1WHeZCEMll3E9GZpIQpYKcq8QqdQRaYk0syWfVmr%2BjvQ2lTEGi%2BB7g24VztRRjwmCAigCxGa%2BVizGMHz%2F7od80Dvh6RGPjz9kDB3tul6HW2%2FXRrpqjRbaNKc%2F8CT1CIUKITSYCFm%2F%2FPNqkMZj6E1NjjQQB3sDIUIHetcoYEf1inIMa7SxZ8LwGWCheSOzGLK9GClKkkWtefh7AZSwpdSeZYpdINjW%2F%2FPVKkDJMCfveNbNulpoTJq5%2FX%2By2ZlXu3MiHIy8v6tLylyW0YwO9CWFhsAbMmBp2x3IO%2BPlTlIhKUZ4WWEEfzitgD6UxYXSVHibg8N%2FtZ8V0SIWw2DR1q8gpxmjIsKNFTajPl3v34QqfwdksjpFemn505UNHTl5NcMI%2F0EjjR%2BLjBmPvwU4PGt4J8fk3DzoP84FSMlBiVghIanL%2BbDesSTpWLiVl0xFjSxzGG0CHxdxpk6tG%2Faas6SrAA%2Fz%2BRILdwTa6n4Qk5D4z7CPwVyyMfQ2UpoT6%2BRFOttMcd6Yk6EC9G6tf9NfYRaNikgm3Ftu%2B2KjjG9oKJI65kayx7DOvKJXVOL82XLXndSZq8Vh0XkeHoz9KKqzcrpodLAfUxeRW0DrPrN%2FPbeicAvrzInNMg4tx56De4MMmy%2BcQGOqUBR85qv5e1oQnSVJE3IKO74RB8vYv24kKJRxWeOWA%2BmEd6FXLw2vmCmU%2F%2BsBh9v2ocmvL2KRg%2B400UWZiGMN7A4zfp0c7VOj9e%2FXRXSRbPb2WK62LMrYNp%2BcANmGl2zf9qASHoDmq0z5oQ3T2JfKT9VXRpsLuHg5MlxAMCP0%2BjuKgjmyeaXdIGbU3cTCnLE9MDPzk2B5IgFG8y8JlA4yp0m08WkPcJ&X-Amz-Signature=cca5fac566329b71e373b603e007198b9e87dbcf37a87f3c54677cc9590e511c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MIDID7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICAgiSroEX74OIz7Sh95MPD9cAf50msoMck1MVEyh27wAiEA6svLWfw8%2Fmlt6veFAILYq9he7AYZr8VQ9wi1MrmJOqsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIoXmC1jl1n7BB2xGyrcA1WHeZCEMll3E9GZpIQpYKcq8QqdQRaYk0syWfVmr%2BjvQ2lTEGi%2BB7g24VztRRjwmCAigCxGa%2BVizGMHz%2F7od80Dvh6RGPjz9kDB3tul6HW2%2FXRrpqjRbaNKc%2F8CT1CIUKITSYCFm%2F%2FPNqkMZj6E1NjjQQB3sDIUIHetcoYEf1inIMa7SxZ8LwGWCheSOzGLK9GClKkkWtefh7AZSwpdSeZYpdINjW%2F%2FPVKkDJMCfveNbNulpoTJq5%2FX%2By2ZlXu3MiHIy8v6tLylyW0YwO9CWFhsAbMmBp2x3IO%2BPlTlIhKUZ4WWEEfzitgD6UxYXSVHibg8N%2FtZ8V0SIWw2DR1q8gpxmjIsKNFTajPl3v34QqfwdksjpFemn505UNHTl5NcMI%2F0EjjR%2BLjBmPvwU4PGt4J8fk3DzoP84FSMlBiVghIanL%2BbDesSTpWLiVl0xFjSxzGG0CHxdxpk6tG%2Faas6SrAA%2Fz%2BRILdwTa6n4Qk5D4z7CPwVyyMfQ2UpoT6%2BRFOttMcd6Yk6EC9G6tf9NfYRaNikgm3Ftu%2B2KjjG9oKJI65kayx7DOvKJXVOL82XLXndSZq8Vh0XkeHoz9KKqzcrpodLAfUxeRW0DrPrN%2FPbeicAvrzInNMg4tx56De4MMmy%2BcQGOqUBR85qv5e1oQnSVJE3IKO74RB8vYv24kKJRxWeOWA%2BmEd6FXLw2vmCmU%2F%2BsBh9v2ocmvL2KRg%2B400UWZiGMN7A4zfp0c7VOj9e%2FXRXSRbPb2WK62LMrYNp%2BcANmGl2zf9qASHoDmq0z5oQ3T2JfKT9VXRpsLuHg5MlxAMCP0%2BjuKgjmyeaXdIGbU3cTCnLE9MDPzk2B5IgFG8y8JlA4yp0m08WkPcJ&X-Amz-Signature=75cff5fc65e008fc032ddf90251d49e7acf82696d9e26a09da4d06ecf82eaabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MIDID7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICAgiSroEX74OIz7Sh95MPD9cAf50msoMck1MVEyh27wAiEA6svLWfw8%2Fmlt6veFAILYq9he7AYZr8VQ9wi1MrmJOqsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIoXmC1jl1n7BB2xGyrcA1WHeZCEMll3E9GZpIQpYKcq8QqdQRaYk0syWfVmr%2BjvQ2lTEGi%2BB7g24VztRRjwmCAigCxGa%2BVizGMHz%2F7od80Dvh6RGPjz9kDB3tul6HW2%2FXRrpqjRbaNKc%2F8CT1CIUKITSYCFm%2F%2FPNqkMZj6E1NjjQQB3sDIUIHetcoYEf1inIMa7SxZ8LwGWCheSOzGLK9GClKkkWtefh7AZSwpdSeZYpdINjW%2F%2FPVKkDJMCfveNbNulpoTJq5%2FX%2By2ZlXu3MiHIy8v6tLylyW0YwO9CWFhsAbMmBp2x3IO%2BPlTlIhKUZ4WWEEfzitgD6UxYXSVHibg8N%2FtZ8V0SIWw2DR1q8gpxmjIsKNFTajPl3v34QqfwdksjpFemn505UNHTl5NcMI%2F0EjjR%2BLjBmPvwU4PGt4J8fk3DzoP84FSMlBiVghIanL%2BbDesSTpWLiVl0xFjSxzGG0CHxdxpk6tG%2Faas6SrAA%2Fz%2BRILdwTa6n4Qk5D4z7CPwVyyMfQ2UpoT6%2BRFOttMcd6Yk6EC9G6tf9NfYRaNikgm3Ftu%2B2KjjG9oKJI65kayx7DOvKJXVOL82XLXndSZq8Vh0XkeHoz9KKqzcrpodLAfUxeRW0DrPrN%2FPbeicAvrzInNMg4tx56De4MMmy%2BcQGOqUBR85qv5e1oQnSVJE3IKO74RB8vYv24kKJRxWeOWA%2BmEd6FXLw2vmCmU%2F%2BsBh9v2ocmvL2KRg%2B400UWZiGMN7A4zfp0c7VOj9e%2FXRXSRbPb2WK62LMrYNp%2BcANmGl2zf9qASHoDmq0z5oQ3T2JfKT9VXRpsLuHg5MlxAMCP0%2BjuKgjmyeaXdIGbU3cTCnLE9MDPzk2B5IgFG8y8JlA4yp0m08WkPcJ&X-Amz-Signature=68f721e860850d8dd3fc48c9b73eb69795ed4f9b47a0e8b71186982e6119c79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKLBN5R%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC8Ury3cGfSR3nFSHZ%2ByxIudJCMIKj%2FUjLsQhvVwERAFgIhANZsFPqbOkaCPMny67emOoUP9Ee9pGaW3%2BWbiEDBm7mvKv8DCE8QABoMNjM3NDIzMTgzODA1IgzHDxRBf%2BlHu1YNcL4q3ANMjb8YBagKXa0qXb2opCPeW5RJh%2F%2FBeDQ0xTyyXu96Z9LxSPFxdHYVjQOTAzV37zUadJDlAXqDH%2BlpP5MYuEkAGmGCP3%2FKwf7UkJ4ShN0V35b%2BiNc%2BMgPJ1haIBcaWNjq5y9j2Gu62hdFVDQiszpFsnqj%2FKpavG5AitTa7LOKnduRVcx6S2gkHtq1joWL1IWqC8wB97OWOQwCiEablynSrYHw3ZNHS3eVrkidhdg2b9xRZHUJ8jHACAJTalMgT7X57%2BxVFj5iKj92qtBLXf0oo%2Fo7FMOVGD%2BwZLu3h5nROMdnf1vctVmtuubIlhAH0pYpy2uJqA1RcxN6h8Ak8gEbNvEv5nYm5VPQtO0JR1rNEG5Yy5goIkKWS8K4ahfOpaY06hOnOsB0N1Jgvo7wlhiAYsLnLixEZjCnompmmfGQPnhlN1NUhHC3wJdXogPFIy%2F24gnTcnDzG90iR3jOsL2kyQIBrhV8h9oPFcFotJThrnWLYqFea7ytWXdexQQ%2BqKSW84ghjEFn%2FKVOXgEZncq7OUW8gVyUNpASysoJCKY3rNOSr26uOHV2MyGujpPZzcrTD4cBJqrc87b7%2BcdL566OGQEI3IS8b%2FjOzk8Vmra4tzendXWDk7Iw7nnHwmjD%2BsvnEBjqkAWTnUYezE7WTmAoBvLp%2FigxotYJaqA265xLEZX6Zy%2B9goZrpBnip%2Fn%2FfOywwzYELzXg5OJHcj0wzYclN4rcQP5Qv1UFXSDBqYE%2FIuj7VI8lwYyeURVsor%2BPG7fna%2FAw3WeSe%2BCAQMdyJR9d5nAikrGlJ3%2Bi%2BAewupYudyLbrz8hyjVvni0NrPAB5rPRFA7xGSXkdZHRKrPkv7ObDw0O5xo1pYSrE&X-Amz-Signature=228480ece1f02676174ab2aa37aae01b447ef89fd10c134870ab19db03b3bdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZY2Z4W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH95lSzrVxEDsLIfuXvi8oQIg%2FMVB%2F7il6JQ5aKN%2BG4hAiEAnLOfkfB2b8Qhke9%2BDviX1bIIEY1OUA6dNCc%2BmnOTqjcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPCNo2%2FQeSsud%2BxQBircA2GhlCvnk2Y4%2FvEUIn20LOuFjBREGvBM%2FIK9yRZoD5QIkD9%2F5jQUuubZ37NDMkV9tjeqJ8AVu14PIbX3RsFiEj9B3rUKDlyJltyhKG3seA5W1jfLHRY8aeJnIqalW39MjoPBo2AY0a2QDC6lfdCzqt13RsiifctI%2F2vjV%2BeeupjvRHwM1LcLj7m0eHWppUORyzVdxUemIBKg1tCBh100XCv5c18yV%2FkE04P6nCoLBMd8nMEXz4T%2BrY6AnI3VnqSOs7pUqklEWPHVHlp5OumZN4ttzAQGNgbo1ls%2FFXoE%2FXscVT%2FVRNnaHf8g1VXwQ3CSiBDfgsaAI6AJ8I5hOsXg5IvFcEj7ErK3PlzbXN8B1qWjRc%2F2AwzC8MVo9kuxfOuFvEJTOwRPC5MOJi%2BWuqCt%2BF04FWHP157uG0L797YQwUg7U6G3b4JAV0z7ceqtss9hmaE%2B3l8q%2BrHIIt4SP8xdXHSZaIaETnsyIYS3qvW5jWFxwTkIe6L5ZK0zT%2BjceoFB6X4MEyH%2FFWTEURLzwi2%2F7mC4hHvfXF9q0fjWWpR9M3pF569DzzbKNUWEiqmvEdjlZ%2FxY1rwpDK4XeuaNOaHZB3KhrR8HRE7iPBgZH4f2fofR9AdN4LJqOOU2AlBXMOyy%2BcQGOqUBtH%2FA3lMI5%2Bh3rtYKnHfCQYR9TwzLmzRZUGDyxhmFRrpCo2kWCaN1QiwNqdV5CkajPIzaLLrdmKARQb5zK8rqDz6Za5uS3U6%2F7pKqflLoyHmPrxXZH6xMeTAbkfOjDwl8wBMNnTccBRvBP8aeGm2e%2BVuIChMwUvEu6z9We1ACxMzGoh1afgf7AhhyntKrvJsEfAJ5YygU5f7IASMRaZAYTcuxx7k5&X-Amz-Signature=5cd08611b269d4cf179862930e11b010590f9160ec3dbbe81cc9878e70fbd0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MIDID7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCICAgiSroEX74OIz7Sh95MPD9cAf50msoMck1MVEyh27wAiEA6svLWfw8%2Fmlt6veFAILYq9he7AYZr8VQ9wi1MrmJOqsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIoXmC1jl1n7BB2xGyrcA1WHeZCEMll3E9GZpIQpYKcq8QqdQRaYk0syWfVmr%2BjvQ2lTEGi%2BB7g24VztRRjwmCAigCxGa%2BVizGMHz%2F7od80Dvh6RGPjz9kDB3tul6HW2%2FXRrpqjRbaNKc%2F8CT1CIUKITSYCFm%2F%2FPNqkMZj6E1NjjQQB3sDIUIHetcoYEf1inIMa7SxZ8LwGWCheSOzGLK9GClKkkWtefh7AZSwpdSeZYpdINjW%2F%2FPVKkDJMCfveNbNulpoTJq5%2FX%2By2ZlXu3MiHIy8v6tLylyW0YwO9CWFhsAbMmBp2x3IO%2BPlTlIhKUZ4WWEEfzitgD6UxYXSVHibg8N%2FtZ8V0SIWw2DR1q8gpxmjIsKNFTajPl3v34QqfwdksjpFemn505UNHTl5NcMI%2F0EjjR%2BLjBmPvwU4PGt4J8fk3DzoP84FSMlBiVghIanL%2BbDesSTpWLiVl0xFjSxzGG0CHxdxpk6tG%2Faas6SrAA%2Fz%2BRILdwTa6n4Qk5D4z7CPwVyyMfQ2UpoT6%2BRFOttMcd6Yk6EC9G6tf9NfYRaNikgm3Ftu%2B2KjjG9oKJI65kayx7DOvKJXVOL82XLXndSZq8Vh0XkeHoz9KKqzcrpodLAfUxeRW0DrPrN%2FPbeicAvrzInNMg4tx56De4MMmy%2BcQGOqUBR85qv5e1oQnSVJE3IKO74RB8vYv24kKJRxWeOWA%2BmEd6FXLw2vmCmU%2F%2BsBh9v2ocmvL2KRg%2B400UWZiGMN7A4zfp0c7VOj9e%2FXRXSRbPb2WK62LMrYNp%2BcANmGl2zf9qASHoDmq0z5oQ3T2JfKT9VXRpsLuHg5MlxAMCP0%2BjuKgjmyeaXdIGbU3cTCnLE9MDPzk2B5IgFG8y8JlA4yp0m08WkPcJ&X-Amz-Signature=6835fc291b73a453ffc603ac16bb1bac51fcccf63198ec3cbfc54bdff2231799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
