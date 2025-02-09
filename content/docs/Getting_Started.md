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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFPMJZ4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRSp1%2FAK4eaH1tyTyASlbbG0fj%2Bk5CPvRaXmHlYzUJJAiEA93nlSbz5MQzn5DoqC9F0u%2ByRIBRLx0OlMN2E6xOanK0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI00mAfFMbJtKLar2CrcA8StTH2prgGWABvcbq99yuc5SKkvNg9X5GglyOKL0wr52jqePu6%2FbUNfnGBmCkHERJMltVZUQcObEPULkVEaRDvW8vWQYZqy2tKdrNHBr9TUi3Tf3b7BvRVUN6VbEBzImBLzxUGWrM7AgN9m0vDMYdaeAr5LLmM0RTebk6PjHu%2FYhCJkGluaKV5ivaqBfOknpxAY3pKJVAxRdYgqJDgl1nxEoO4e0u6gTD5uzTf7u09IfSU2c2GtMFNGq3LG6jZF7UaUoMGzHh6Tr5CMLguBx9GMHLkd%2BIWqYvmX7KfMgL0jKU5hj9OSuNecAhDkHC%2FGQWYKbxyHN45Wx4bd%2BaT8aO3azRLZyHFJEue8t0XoBWK5XWoQ9nQYqDa5GeLOOfFmWlBvceO0YL30veodb6vSel9rX9zmjssyspW%2FKyEHYLgyuvXer%2BMcHcjAZld2PPQVgEDMlD2JxKg%2FgfzPteAzTGRckVSc%2BHPfurFwhcFugFNN%2BhlhfRCzv4vt80oN2dG4tTVWOnkG%2Bk42TYfzI9d8gFGZ4Wuz5dS0fc3QQhICEwI99eJelOvv4slv3%2Fkge1lXO2VMG9coCWfbFNvQFUBuRyg%2BMX6oefB7r5QD%2B9ZA40aD%2F1Ss9NG3vTtuE%2BndMKmPpL0GOqUBiLGZrSslQtRqrI2%2FflJvUIMcyRt8WdqyJfIoleVrCpOo5O%2BCPge8DLQBp2%2FTNQlNEr6FwQIBlWOmXBUV%2BrSfiOyzH5lpEOkFHxXdB8w8iQ6ZFE%2FNluWqVJwEXcDbW4xaU17XnrMuf98w5ah1F3LlesA1VqE0%2Fr9qzl%2F29SghK23oN4fD3A%2B99mTShIB3CmBkMvz4I6YPqenYTe%2BkkoirCqarbT%2Ff&X-Amz-Signature=89e96ceadfe38aac1c151d66bb9750af029c9beafd0eed82d8d79beb8b5e4901&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFPMJZ4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRSp1%2FAK4eaH1tyTyASlbbG0fj%2Bk5CPvRaXmHlYzUJJAiEA93nlSbz5MQzn5DoqC9F0u%2ByRIBRLx0OlMN2E6xOanK0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI00mAfFMbJtKLar2CrcA8StTH2prgGWABvcbq99yuc5SKkvNg9X5GglyOKL0wr52jqePu6%2FbUNfnGBmCkHERJMltVZUQcObEPULkVEaRDvW8vWQYZqy2tKdrNHBr9TUi3Tf3b7BvRVUN6VbEBzImBLzxUGWrM7AgN9m0vDMYdaeAr5LLmM0RTebk6PjHu%2FYhCJkGluaKV5ivaqBfOknpxAY3pKJVAxRdYgqJDgl1nxEoO4e0u6gTD5uzTf7u09IfSU2c2GtMFNGq3LG6jZF7UaUoMGzHh6Tr5CMLguBx9GMHLkd%2BIWqYvmX7KfMgL0jKU5hj9OSuNecAhDkHC%2FGQWYKbxyHN45Wx4bd%2BaT8aO3azRLZyHFJEue8t0XoBWK5XWoQ9nQYqDa5GeLOOfFmWlBvceO0YL30veodb6vSel9rX9zmjssyspW%2FKyEHYLgyuvXer%2BMcHcjAZld2PPQVgEDMlD2JxKg%2FgfzPteAzTGRckVSc%2BHPfurFwhcFugFNN%2BhlhfRCzv4vt80oN2dG4tTVWOnkG%2Bk42TYfzI9d8gFGZ4Wuz5dS0fc3QQhICEwI99eJelOvv4slv3%2Fkge1lXO2VMG9coCWfbFNvQFUBuRyg%2BMX6oefB7r5QD%2B9ZA40aD%2F1Ss9NG3vTtuE%2BndMKmPpL0GOqUBiLGZrSslQtRqrI2%2FflJvUIMcyRt8WdqyJfIoleVrCpOo5O%2BCPge8DLQBp2%2FTNQlNEr6FwQIBlWOmXBUV%2BrSfiOyzH5lpEOkFHxXdB8w8iQ6ZFE%2FNluWqVJwEXcDbW4xaU17XnrMuf98w5ah1F3LlesA1VqE0%2Fr9qzl%2F29SghK23oN4fD3A%2B99mTShIB3CmBkMvz4I6YPqenYTe%2BkkoirCqarbT%2Ff&X-Amz-Signature=47f3a7796e09fed173581bad5f7596bb1f4772ed1103ff267fe632a444831f58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTUWM7AB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkxb7tUamDFeprLAx25aJIfnovso8Nw6vUnZlksK0yAAiEA%2BYBxcpWwp03xHwjc1nC5ARc7%2FJyNDvxHsLg2Zw7tkWcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINOBAdmknekCgB7LCrcA19alenBtNi6RN1b1r8A5LJ%2FB37GP5StuL4LFg4RxtAPtJtZxi3asxzkM8tvKq01kWDww2eHRRDEGJLHkAgSK4pKIinBBrLup%2FksY6%2BRSVk0Etoe%2BqW7bzkQhb9AEL4MftA6pGm5EyNQylB3FlX74D4EJipJ%2FNCFB1junp2j0MqimduUr%2BkFghB0F9bUhALEKGDDGimUe3VFUuD01fscuBQe6CXUKP17mYj0AKTpJSXl9SiMV9IIvK3CUanTlwM7w%2Fbw4zVVo9Hk%2FwxsB7Qqgn5GDKtLBBv4mS%2BTgH48202J1iD13OVLNcHKTLpubbpGzKsSEC1paK%2FbmT%2FQTBrH%2BItM7FiUW0nUXZ3n5G6KhWThejfkqrfX3yxONEEd64CLqbZT7CzWn4v8Cqda2mVtFSdQ280dDvGaftFna5KMOLcHjE8cWIueufdw3lfR1sjKI94qwfewx9TULSBAkNM9DdQKPKpudO25wZhiz3FpajzgAMEhC%2BZ%2BUdWnQdXfD3T0Qdk9QDw%2F1q3FPLRncSwYhZJQ3WRYSQP1XDGRgzZ7XJSBE6H%2FPA35wSLYu1nfyLa4U%2FbDWNSVYzjQJ0IpeWkZDlRuORPgsyTs3U9AKePVFUdMSn5ojXHY3n7lfI%2BuMOOOpL0GOqUBvM9zDksje4ZNOKDvlc%2BZc1niOVVTsiBz0gnmyRSQrOkFUjMknx1v5LSy1uVUQ54qc%2B1Tv4a2kBU90Jf%2BG6xDkDGIoWwdvS91KmBiuVs3buHJ7VK01q2I7rjwbWEFDjLneXSv6mrW%2BUVGCIcU%2FAIgMOmloist1gA724RvIT8JZXeqTko%2Fa1IoioFNCiA%2FBqGubpszJX%2FJtPvFYVRPIUCZdcqJyYvE&X-Amz-Signature=acb64ce05914edec00eec01eba84b289808b05afd25307d626d85e60c97bd7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNMU4NT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNw81DMdgZs5ZfqQgHBizUT3ayVOXkz2cgb8ONrXbz4AiEA0brpyB3TmW9qWOI4136RIa5CXDcnErDMKr%2Fu5wvbtVEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlX3fLRFmewQxiDHyrcA1GyZNJ%2B573hDBEyBkQnujeKfk0J1jGkmbB8rgXEaeZGrTJes5NcrtRJOMd07%2FxYkJnGAN19WOC%2F553wD5GPf%2F5bY9Fg3C%2BT3tyYzUleJ8c%2BtvS055mzEmZTj4fdXlmMmyK7VxbEGqKWEt1hssjUPfx9xLm8qwsjhWFTwd19STl7ZEsxxttSaWGCKYLyCgobivpj3qKJlMBJqE7r1qWIcaVtuY3cSgAQEVpRyAeNdhj9ceY597qtjAGUTrJI9WJL3ZckY1F%2FZTNxq8gWIgt5o7kg1qaemFSVdns40JEKV3K1WwgJ7YU3Ylq%2FvI6JOatw96L3BUZUM1Qpog%2BYGkvPEKK%2BG5lCocq%2FUXPZ18Yrqz933aHjo%2BL32a1ZAWvIo2RlcTisAb0bV63uH7PF7DBA0XOE11nQGrq9JyTj4t3X6qP5%2B9BHau50m5K8tfKBUQ1Fwhj6bLJOd8PY%2BOq%2Bd9wLIlOzoQF3VVUKa4d1%2BDZ%2BRKanSFlYiYdzcN6p4RoMuwsDqQmvj0KBEJkYWFR8whhXZr24hFGl9CqRnzUEkKIk2XB5p7RMw4Re0CRXA%2FkDqAZlfa5VmmyBjuDCeAbtdLsODGh%2BDLPQTmJ8LzySWWiOOijBN1UtvxB7KOFpqDK0MPSPpL0GOqUBxQpi9r8iZCqEiMXHq9aPDOq%2BiNBbbQlcTH9OFoqDyR9CmXsJ7PKRDEc8dbN28kHoj3DRhK2g66FzgaqeCxCiEztMIp5WB43cQWbqkcsSiZIPuEEeHnFGD3o43IJpzhSAv5PUsfMWi31OCwNO1c8lc1Nq2%2F1nCyt%2F7uwdjKfudCRHhltSHOe7%2FYmCy1LzIbU1SguxvHTCjS7k2lVuWCMVH%2By%2BCxtl&X-Amz-Signature=6366a73f56c35230c4e58ae6365f4f2fc934ec686537a9da76dd8420c974fa07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFPMJZ4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRSp1%2FAK4eaH1tyTyASlbbG0fj%2Bk5CPvRaXmHlYzUJJAiEA93nlSbz5MQzn5DoqC9F0u%2ByRIBRLx0OlMN2E6xOanK0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI00mAfFMbJtKLar2CrcA8StTH2prgGWABvcbq99yuc5SKkvNg9X5GglyOKL0wr52jqePu6%2FbUNfnGBmCkHERJMltVZUQcObEPULkVEaRDvW8vWQYZqy2tKdrNHBr9TUi3Tf3b7BvRVUN6VbEBzImBLzxUGWrM7AgN9m0vDMYdaeAr5LLmM0RTebk6PjHu%2FYhCJkGluaKV5ivaqBfOknpxAY3pKJVAxRdYgqJDgl1nxEoO4e0u6gTD5uzTf7u09IfSU2c2GtMFNGq3LG6jZF7UaUoMGzHh6Tr5CMLguBx9GMHLkd%2BIWqYvmX7KfMgL0jKU5hj9OSuNecAhDkHC%2FGQWYKbxyHN45Wx4bd%2BaT8aO3azRLZyHFJEue8t0XoBWK5XWoQ9nQYqDa5GeLOOfFmWlBvceO0YL30veodb6vSel9rX9zmjssyspW%2FKyEHYLgyuvXer%2BMcHcjAZld2PPQVgEDMlD2JxKg%2FgfzPteAzTGRckVSc%2BHPfurFwhcFugFNN%2BhlhfRCzv4vt80oN2dG4tTVWOnkG%2Bk42TYfzI9d8gFGZ4Wuz5dS0fc3QQhICEwI99eJelOvv4slv3%2Fkge1lXO2VMG9coCWfbFNvQFUBuRyg%2BMX6oefB7r5QD%2B9ZA40aD%2F1Ss9NG3vTtuE%2BndMKmPpL0GOqUBiLGZrSslQtRqrI2%2FflJvUIMcyRt8WdqyJfIoleVrCpOo5O%2BCPge8DLQBp2%2FTNQlNEr6FwQIBlWOmXBUV%2BrSfiOyzH5lpEOkFHxXdB8w8iQ6ZFE%2FNluWqVJwEXcDbW4xaU17XnrMuf98w5ah1F3LlesA1VqE0%2Fr9qzl%2F29SghK23oN4fD3A%2B99mTShIB3CmBkMvz4I6YPqenYTe%2BkkoirCqarbT%2Ff&X-Amz-Signature=6f410c68c1ecaf965852822c40afd86ddd61057ff95ad1df484aba2ca4d13934&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
