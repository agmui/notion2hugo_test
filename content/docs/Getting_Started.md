---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV5QMYL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCWdM3AJCLK7r1W9%2BzWA%2B2DgCf%2BJ4neqUqayPMxdXXvMwIgbbGNm9%2B7HSUO9tZuciSOkh7gblXA66FHUjCdmTLpDysqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2WkAoMDrljhFJ4CrcA6jLPdHJf7hwEfjezarb4GBVeKO%2F6lrlZCQRD1JdjGU62mJXm4smuV4AGq7PWm6GwB7hYTQUeCB7dR8JBJDnMaVrs2LaDW4UINe9WbsKfLe9cen0nv3Ky0GJN8jlezLP1o%2FU1qAbmiTjCvybKgWYhl1wa7meeLh5KIn2lR%2BvlzMfRYHyvudja7y31JlNsYZrhr4ThMfKJGo7yBHGoC%2BaKz4%2FQO9vj0zoDh%2FrHdH3Wusi419QfHNtBQfrnvOkJLz4fWktAsp%2FntLA%2BqJTlg3aoi6zyoEkoz0hCp%2FH6Mx6yN6rlfdANXGt1xYfSckVQzQrRt8e2GW46sdBJt7RtPm7BDHlum2%2BP1chgTZq3eIckzKcCArmkGO%2BQRPzKpQMKnoWxCNP1C38Yr4c7yxSEJquAMnFxZ3iIAaPkhpQOw7H6GxNtfEIDuoaUt%2FweSJeSJeGCvrtd3v13oj6md%2BZI7oqHPYPswBOW4AE94vSByAlknzkWlNz0QkqOBoiENQKNR4olCrwO%2Fzn7B7V11i81vFlZ%2FEob4b1IdYxktoppqgcyIRrzMq1I8XzbNXfjNVM9X%2FYWJIjB8rVTBsBuoYHCtTn%2BfOrVtVWTtOm%2FqtQcUCxzVJrWD8Q7pvNI2v8mOmwMOKiyL4GOqUBQV0%2BG3jPH%2Fd5Kk4%2FX10xQXtHd7QwzCWI0%2FeaTOdqelFEEg7L0iAAv9f92NqY%2FjH6snjcJ904RESImvdK12ZG6QO0AqCrsZ71PaIb06n2nSb1u%2BAPLFY0dAXwGpELlNBzu22Y9JIhMCL%2BmW47HW%2BMbGRgSNr15nTRpqD72x0QrTgbrUUDggWQn%2BGCajpcqfdruNPXoIcQPdkytxNALslp56U8ZzGG&X-Amz-Signature=400d2742a4a10f5c586449da25f13efd95a71dabb99a4b404c99b37d91ef7b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV5QMYL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCWdM3AJCLK7r1W9%2BzWA%2B2DgCf%2BJ4neqUqayPMxdXXvMwIgbbGNm9%2B7HSUO9tZuciSOkh7gblXA66FHUjCdmTLpDysqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2WkAoMDrljhFJ4CrcA6jLPdHJf7hwEfjezarb4GBVeKO%2F6lrlZCQRD1JdjGU62mJXm4smuV4AGq7PWm6GwB7hYTQUeCB7dR8JBJDnMaVrs2LaDW4UINe9WbsKfLe9cen0nv3Ky0GJN8jlezLP1o%2FU1qAbmiTjCvybKgWYhl1wa7meeLh5KIn2lR%2BvlzMfRYHyvudja7y31JlNsYZrhr4ThMfKJGo7yBHGoC%2BaKz4%2FQO9vj0zoDh%2FrHdH3Wusi419QfHNtBQfrnvOkJLz4fWktAsp%2FntLA%2BqJTlg3aoi6zyoEkoz0hCp%2FH6Mx6yN6rlfdANXGt1xYfSckVQzQrRt8e2GW46sdBJt7RtPm7BDHlum2%2BP1chgTZq3eIckzKcCArmkGO%2BQRPzKpQMKnoWxCNP1C38Yr4c7yxSEJquAMnFxZ3iIAaPkhpQOw7H6GxNtfEIDuoaUt%2FweSJeSJeGCvrtd3v13oj6md%2BZI7oqHPYPswBOW4AE94vSByAlknzkWlNz0QkqOBoiENQKNR4olCrwO%2Fzn7B7V11i81vFlZ%2FEob4b1IdYxktoppqgcyIRrzMq1I8XzbNXfjNVM9X%2FYWJIjB8rVTBsBuoYHCtTn%2BfOrVtVWTtOm%2FqtQcUCxzVJrWD8Q7pvNI2v8mOmwMOKiyL4GOqUBQV0%2BG3jPH%2Fd5Kk4%2FX10xQXtHd7QwzCWI0%2FeaTOdqelFEEg7L0iAAv9f92NqY%2FjH6snjcJ904RESImvdK12ZG6QO0AqCrsZ71PaIb06n2nSb1u%2BAPLFY0dAXwGpELlNBzu22Y9JIhMCL%2BmW47HW%2BMbGRgSNr15nTRpqD72x0QrTgbrUUDggWQn%2BGCajpcqfdruNPXoIcQPdkytxNALslp56U8ZzGG&X-Amz-Signature=62b7ffa479f092e3f530eb1912fcb839ec37f057913a8442b5ca7b8ee663dee6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UUX7Y6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGzgXJsUofXDK7%2BfZEdID2FyAZopjDlByEjpnbXuR527AiEA6KGmxtVIvIiOsQuu8s%2BQ%2Bh4t3FCnE4Qj4J0%2Bd21y7Q4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtE1LrnkfXCWSJpoircA%2BEeNHII3vxwXZZxxa5TlDpjpmrHanyvKmlL2mMNsHjIUVs0TTlfO76pTjLfYKZsoK9mypaGgdUstnnim%2Fc0qNaikfXfoT15AQbE0aU3e5wrratnnS7u%2FYXD2wpgj6MP%2BZUBPU7uvVPmy%2FzAJnriBOKiFSZ7HmpZel4oSiVGOUyvqe%2FiTOQypmnOpQJqAhqcqNtrkQGxN2n6u3asjf6X5gbqV3jRSqtwqF%2F0ELxY1piFiawETOOpGiQm49HTLfAy1YEAZ0g6B59ehT%2F3JENlD7QWOMujkO8E4fGAD8wrZSS9nPMDDqjqaXaaLg1jHw6v1y4jAj5RetjT0uLus8RODq7%2FPVBPDyZiI3x7LQevQgQlQulta%2FT2Dn%2BJfsUAWEA095IIybw48fiqkezGLH7dSf2tQ1nf621ya%2BwqQrNDsW4odF1hU%2FeLDtY9sK8%2F4Y9cWz4QklSDdMohNv%2F39ouSg3Co7hKMzs2HyTDZT57C9JPzMxLCdrjzZ3s6QuUHTHTEheXwl%2FARR7R2l4vqcAU9Hc%2FJBL%2FdqtGe65e2ffMHmWD1x67aAI%2BNN9W%2Fwv6QnlWciKA%2FZ8%2BxTA3ddgJZ46xlfY%2FqN1P2XTgxwkAKcPt%2BcQg%2BCD%2BZCc4WPnQpShicMMiiyL4GOqUBmsvaDLuAk3ibyjzzz63uTQGBhiUvg2rnLXEIiQ2i0l0pX01vEVnpPwdiqqls4dKk3UgHt0Ugx5xiOrUUuorvUwDCfieIftHvwZkCjhR%2Fw9FnGzTtmCjn0sIn1atnoCK2ZTbFcEsJZ8A0HievlyU3uqC3DySCq61hPEj9F7Nwl7OSGK%2BfqCwrAbCQs%2Bugjlsqo51L0yQ5O%2BEWgxHUs5SztCIiJNZe&X-Amz-Signature=b07d8acf50903d06c71de77b8f6fe72eaf11374d84b0bce65421e058c855869d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASIKRQI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDlbrwiM9aqiSGtXlCyYSAbzmg0PKxIU%2FUKPFbQsZESOQIhALAcix6Kea1XDKphIKSkBhK2pH%2B5SLMobbWANd8urFrvKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza1TpbJJq4z15Hfr8q3ANoqzqztQlWbWz9dvGwTOMf0Bzclwf2o8OzgNckH9KnUwTxpNFG9%2FzPrsKwIYNglymt%2BateeOGfoioIaVfIGRWIEzoj7iHIHntQh8CeVaYVuGufGxIcghyzX%2FIuvAbrbuB%2BBPZtLPNfEFfLm2vakURtsphXf%2F7re4BsFnH%2FQr6bB3rARiCjNJsToVL76jwo%2BaeuR%2FEYUQ6Rw1amqJV3LcRpm5XMlmZu%2B6HwyvcpZ0aKUV7FUBspHz98MIVI4RNS1mSj4OSuG7iq3bD1nieLI8CBioF0FIMqqhVXuFTXKvKmbpzZrUSlO8vi0hSyViMuCJOC7VjIosdaFa0mRHxTLZiRM6YOUJx8jXfF%2FyfJ78cq2EE%2BHtYvq5ZT0ybavTzyXJX2kjIxvPdMGGJ9j55YdM%2FgzBgAU1o3EtkveDAFtm6yJMTw0%2BC3xWYqwNEajfos5si3E5Nx3MRjwTsrYTZv12uWsJ%2Fw0Vmf4eiYf0BQPd0cYpWdC8DWqHL2U5KNia2nIFonAomgYlzV7aG%2B%2F%2F9RkK0R2%2B4WjtK3wTMN8aWL4iH2RPMFkpN5IoPkVFKAJCpO8WnHpngEY8wXMR%2FTKSi68rDGIGxCe0RB0JaKgT8W7ul2snGpGJWyaCj8A7qywjDQosi%2BBjqkAV0ZM2XzHZPiF%2FNaI5s7N%2Fgakh1wujvCtVTHtNadwcO9n%2BDBgAXvay7AhiU4BJv%2BJkQoGv9AYb9fZEpTKrFp7bqJmcCYmzK8pfUQKXac9Yp8xvl4IrZF68cUBpCNVdVRaFILxmk%2BbF7YjOGfZ0teGH8jd7JZXWiYiSE%2Fsn6H0njrD6rtFW6z2fIdINyOPCQmKc5h89DFk7yaNVkC2Ckj2Cvkp%2FOm&X-Amz-Signature=684e55785bdf0dcc8ef8fd415f00e78bbdeb143a1ef3ef1a0ae0a73176d87d38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TV5QMYL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCWdM3AJCLK7r1W9%2BzWA%2B2DgCf%2BJ4neqUqayPMxdXXvMwIgbbGNm9%2B7HSUO9tZuciSOkh7gblXA66FHUjCdmTLpDysqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2WkAoMDrljhFJ4CrcA6jLPdHJf7hwEfjezarb4GBVeKO%2F6lrlZCQRD1JdjGU62mJXm4smuV4AGq7PWm6GwB7hYTQUeCB7dR8JBJDnMaVrs2LaDW4UINe9WbsKfLe9cen0nv3Ky0GJN8jlezLP1o%2FU1qAbmiTjCvybKgWYhl1wa7meeLh5KIn2lR%2BvlzMfRYHyvudja7y31JlNsYZrhr4ThMfKJGo7yBHGoC%2BaKz4%2FQO9vj0zoDh%2FrHdH3Wusi419QfHNtBQfrnvOkJLz4fWktAsp%2FntLA%2BqJTlg3aoi6zyoEkoz0hCp%2FH6Mx6yN6rlfdANXGt1xYfSckVQzQrRt8e2GW46sdBJt7RtPm7BDHlum2%2BP1chgTZq3eIckzKcCArmkGO%2BQRPzKpQMKnoWxCNP1C38Yr4c7yxSEJquAMnFxZ3iIAaPkhpQOw7H6GxNtfEIDuoaUt%2FweSJeSJeGCvrtd3v13oj6md%2BZI7oqHPYPswBOW4AE94vSByAlknzkWlNz0QkqOBoiENQKNR4olCrwO%2Fzn7B7V11i81vFlZ%2FEob4b1IdYxktoppqgcyIRrzMq1I8XzbNXfjNVM9X%2FYWJIjB8rVTBsBuoYHCtTn%2BfOrVtVWTtOm%2FqtQcUCxzVJrWD8Q7pvNI2v8mOmwMOKiyL4GOqUBQV0%2BG3jPH%2Fd5Kk4%2FX10xQXtHd7QwzCWI0%2FeaTOdqelFEEg7L0iAAv9f92NqY%2FjH6snjcJ904RESImvdK12ZG6QO0AqCrsZ71PaIb06n2nSb1u%2BAPLFY0dAXwGpELlNBzu22Y9JIhMCL%2BmW47HW%2BMbGRgSNr15nTRpqD72x0QrTgbrUUDggWQn%2BGCajpcqfdruNPXoIcQPdkytxNALslp56U8ZzGG&X-Amz-Signature=a758f4c1a15ca2b9e70146450fe4222dd3ae68853265a991660189aeaf3e7ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
