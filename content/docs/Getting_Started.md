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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WO3CHV6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCvyeka92thkhpHYEtTF4yp4renKaUgSUD0nj1Z5H8dcQIhAPez06ihG%2FcSi60gc9AHFNzPgkSUK2IYMUuUHcbTN0D3KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydD923jRLyugXOO7Eq3ANmV7pC8MKu66hwAY02eVO5WXvy3h8PAVtvmv6Bfm5gV6Tr3Bfx1XDQm607HDAlBGq5BeTbCComBB4m%2F02B2vAGRwhvLA5d8rwuoShZrnh%2FVdFL3I%2FlUZxKdWQ3yaNettLqBwwsp8M6NFvX9Vna0o7ytHcdbnrJl2TiTjCuujE34KSdxeHfVctEyNQneOE1ZJxzpPLhUhRVjao%2FwxbivvR7go%2FcD8w7vaWHO4mHnOrACgX0DfxvDu3QlyBBCvxVyjgGMpv57BA4uGNmxbErhbcGvKw6sf1Fbhw4ft2IvmAGymoLMiFPTJdL%2BfQTRjwpQbNvMt1XivuaCWW6hUhmu0FwFyvtZob1wmpqqwu%2F7FK%2FPAntuNxyERUT61KWBwsCVZnMSKF5EjeAiVQYYRWwVv0XSxiqtyt4AC%2B6FOWlEaC9c0hREhsuNAQApOTUU%2BeFTvhMF3FaSvdA3JEZFESYfYFn4m4uilDPN6pJo833joGn3Zryh4V0vBpLzwrJ%2BjZg1MleMJ8Xru7CblkG3JXCX7bAsAERydlBd%2FhLwyeydHcuscB%2BWELlloEIt0cyUtRyXlz1G3m5nnGYC8LuQ9dSrnBHT3Ml3It9TN7Gy9gVknW0ai6UQXC2bwEGuT%2F89DCP7ZzOBjqkAZckF7ufpNTus%2FZ6pUOdnAMfBmPEPeOHq9JBA%2FqA44HAmTs8qbQkYFKRbJ5vJcZB5EblVwFsKSMV0qScqQZmLs8PBng0ijERrpXAOWL%2B2SDXQKgl2%2By39dtfYEKrTXNuZvYkts1SVoYX1Gl4luuiGe8RlDe%2FyPNUPDXJmv%2Fy9zM9DENfBpEE0dchzzValVd8KGwEPQ6XmE%2FshUtT4wL4%2BmDy32rc&X-Amz-Signature=d7f548cc21e5f1b810596870d6ab129c8cbb1f584460b769474fce92bfe4e990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WO3CHV6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCvyeka92thkhpHYEtTF4yp4renKaUgSUD0nj1Z5H8dcQIhAPez06ihG%2FcSi60gc9AHFNzPgkSUK2IYMUuUHcbTN0D3KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydD923jRLyugXOO7Eq3ANmV7pC8MKu66hwAY02eVO5WXvy3h8PAVtvmv6Bfm5gV6Tr3Bfx1XDQm607HDAlBGq5BeTbCComBB4m%2F02B2vAGRwhvLA5d8rwuoShZrnh%2FVdFL3I%2FlUZxKdWQ3yaNettLqBwwsp8M6NFvX9Vna0o7ytHcdbnrJl2TiTjCuujE34KSdxeHfVctEyNQneOE1ZJxzpPLhUhRVjao%2FwxbivvR7go%2FcD8w7vaWHO4mHnOrACgX0DfxvDu3QlyBBCvxVyjgGMpv57BA4uGNmxbErhbcGvKw6sf1Fbhw4ft2IvmAGymoLMiFPTJdL%2BfQTRjwpQbNvMt1XivuaCWW6hUhmu0FwFyvtZob1wmpqqwu%2F7FK%2FPAntuNxyERUT61KWBwsCVZnMSKF5EjeAiVQYYRWwVv0XSxiqtyt4AC%2B6FOWlEaC9c0hREhsuNAQApOTUU%2BeFTvhMF3FaSvdA3JEZFESYfYFn4m4uilDPN6pJo833joGn3Zryh4V0vBpLzwrJ%2BjZg1MleMJ8Xru7CblkG3JXCX7bAsAERydlBd%2FhLwyeydHcuscB%2BWELlloEIt0cyUtRyXlz1G3m5nnGYC8LuQ9dSrnBHT3Ml3It9TN7Gy9gVknW0ai6UQXC2bwEGuT%2F89DCP7ZzOBjqkAZckF7ufpNTus%2FZ6pUOdnAMfBmPEPeOHq9JBA%2FqA44HAmTs8qbQkYFKRbJ5vJcZB5EblVwFsKSMV0qScqQZmLs8PBng0ijERrpXAOWL%2B2SDXQKgl2%2By39dtfYEKrTXNuZvYkts1SVoYX1Gl4luuiGe8RlDe%2FyPNUPDXJmv%2Fy9zM9DENfBpEE0dchzzValVd8KGwEPQ6XmE%2FshUtT4wL4%2BmDy32rc&X-Amz-Signature=3f21e93c11200f79241be89b76e75e146409b7b8c0fd8004c27030c01384921f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WO3CHV6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCvyeka92thkhpHYEtTF4yp4renKaUgSUD0nj1Z5H8dcQIhAPez06ihG%2FcSi60gc9AHFNzPgkSUK2IYMUuUHcbTN0D3KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydD923jRLyugXOO7Eq3ANmV7pC8MKu66hwAY02eVO5WXvy3h8PAVtvmv6Bfm5gV6Tr3Bfx1XDQm607HDAlBGq5BeTbCComBB4m%2F02B2vAGRwhvLA5d8rwuoShZrnh%2FVdFL3I%2FlUZxKdWQ3yaNettLqBwwsp8M6NFvX9Vna0o7ytHcdbnrJl2TiTjCuujE34KSdxeHfVctEyNQneOE1ZJxzpPLhUhRVjao%2FwxbivvR7go%2FcD8w7vaWHO4mHnOrACgX0DfxvDu3QlyBBCvxVyjgGMpv57BA4uGNmxbErhbcGvKw6sf1Fbhw4ft2IvmAGymoLMiFPTJdL%2BfQTRjwpQbNvMt1XivuaCWW6hUhmu0FwFyvtZob1wmpqqwu%2F7FK%2FPAntuNxyERUT61KWBwsCVZnMSKF5EjeAiVQYYRWwVv0XSxiqtyt4AC%2B6FOWlEaC9c0hREhsuNAQApOTUU%2BeFTvhMF3FaSvdA3JEZFESYfYFn4m4uilDPN6pJo833joGn3Zryh4V0vBpLzwrJ%2BjZg1MleMJ8Xru7CblkG3JXCX7bAsAERydlBd%2FhLwyeydHcuscB%2BWELlloEIt0cyUtRyXlz1G3m5nnGYC8LuQ9dSrnBHT3Ml3It9TN7Gy9gVknW0ai6UQXC2bwEGuT%2F89DCP7ZzOBjqkAZckF7ufpNTus%2FZ6pUOdnAMfBmPEPeOHq9JBA%2FqA44HAmTs8qbQkYFKRbJ5vJcZB5EblVwFsKSMV0qScqQZmLs8PBng0ijERrpXAOWL%2B2SDXQKgl2%2By39dtfYEKrTXNuZvYkts1SVoYX1Gl4luuiGe8RlDe%2FyPNUPDXJmv%2Fy9zM9DENfBpEE0dchzzValVd8KGwEPQ6XmE%2FshUtT4wL4%2BmDy32rc&X-Amz-Signature=cb71ff8e84e62b0685b59f48ba6f353edbd24317fa563db99cb52ada273c097e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642YXIXY3%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICRzQuzC4P6FNDXL1PQO0FkOCAzfgPVpu606Yn8F%2BL3VAiEA2q4RuQSgtIRBVCjmw3eERhKKp%2FXHV3vIS%2B8MV0Ld%2FNkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7mKxxVW4AUcsqpkCrcA48ChgbqPQYyq5UM4hg6NNOW3uJ%2FxWBSORTjGq23q5cxfeHRywXPc0mwXCekKbM9JT4l%2Ftr80Pa2CpvI4YoiXXjZVOkQpDac1MYVu1BqZoak07bFPIfXrJTx%2Fr2XSKhynIXrmImMLHxqKfr2lKe9%2BmgNRyL8bm0F9TzjItfX6EMBL5trctxH9qBQHQjR62ld0Beymv21WF5aexU0log4Tej%2FBCTmOkwHzqtOfym%2BuHlJQkgP3boTwyy7by8qZPe6DxLrlFYbWQC4GjNhZ5xnOv74JSogrvxg5PH48sZ5gE7DLkM9nTtH5TEW8MCDB6NJ%2Fkfw2UBSyBuNxlQvz5em6tImDStwL3OicvdPBjWgbIVtfQv%2BuvsjvTv7xfTofOJBWO9%2BZYoYLlXoeTqf4%2FgEnq9SZvS7tzfNbAvIEU73K%2FXJHYUFNqZgnYzBXLyAgJdg%2Bz93OUrzh2IN029JlMgAeOCe1ReUAnUHBgnO89p5Cr%2BFsp82VD%2FVZv%2BMT6nqany6V207NyFDTaFd%2Bhpab6lNfyLUaqemo2%2F9QOndZcQJItwW%2Fezi1HhY%2B43ajRKJNeo0azRrD2%2BWVBfRMkBcZaTn2DHa6jZYJhKyRF3N69FS7URaiiXgMepzJfYwgIEZMMztnM4GOqUBjw2LkfGTMRiNTk45LhR3VKgUYgX022DqXC5J2%2BrMBgMPdyGjiQQ7JkXk4lE4zHU25g2YDYiDK9M238our3TZORSgMdK2koyvNGjXmnBggI4D6l25R%2Bikxxgv403HvoutkUxM54i8XTZ%2FHg3MtbOicB%2BIPN4fYcr4SEijskbyDHFrLFNYMcbRGVvHXoVRTyBWFLR7F%2FJbQwQUOklhfh8tcpaj07e2&X-Amz-Signature=6513f3c91ffa26b289975a1cb0396c4da7d6f4175eb3a119baafd449578f7eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBLLGNE%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDbDF%2FImm4ElN651f603UAFYOcq6g%2BJSZEwMp6weuRwuwIhAPQI3EB%2FcdVMa5HhiYrKaphskytKUUgRW3POHlNkXq2wKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx86t4HiUH5WCVryEq3AM0JtHEK2skIlYYdii%2FkNc%2FWfXk%2Bu%2F9I17%2Bz8jgmoeg9O2V%2Fqr6gnt%2BYbzcDpXlapZRpvWEzNM1VyFr0pEKbMv92Xr7FW0lMxvMVBsBtZP6lGNq5DyIei1WaBnlbAROnEgKj%2BRDUb0%2BzFGHHlTm%2BE0uVi5FLL7u1oUWoZscYtfoXvYWbhyMfwYC0sy2KzGIjFueRfgGl93Wv9dMCDTEJrxDSAe7%2BcjEMTqiz5LaWFO3F5M3EL9NlGHnBoiQlgU5bv5vSIl%2F0B8sit1DTwbGVdZbRpLs%2BNwLc6UDJ7i7JWM9LzD4AkU93UBGqyti%2FyAQ55PgIt01zfqzj1yqj7HI50k9WtHg6zp7VZ%2B%2FEmlh6SGErw5Hqmxafo65bqOR2ZGhNBIjfWqE1tvWukSXpt6VgHO4F1grgzAJvJUZ8Frkv1whm8vIW1%2FFwGWmq3QAbPAy6AJBS7sYkgkSt6o3K44YBGaAr6ICfDcGUazlebBg%2B6%2By%2BRmQrPNzaQ9qLA4jVg%2FE7H4ESRDzCus05HMg%2F17%2Fjbm%2F6WcujPT%2F%2FMjbwh2rQKBWySGfr1RyFRWADu%2BN9JQ332zNoD9A8u%2BsoyBzpYCMjDyNDve4gXKns04h7qIhvJXkay%2B9dXAMd3jmedMuYjD665zOBjqkAffF58Uy4AfKVrz1y%2FbHb7D7mOd3QMvJ7OoDD8fsdfD%2FVFbMYHgIeYdMcWwy4mAlyk%2Bn09Wzkg90qf1lpSkjbNBq%2Fn7y%2BrLlRERU1dMJNclHxopzRJunSURbtaGsDixydtN8jWMdf8g0e3SH%2F9H%2BTqFtjSaYTVUzFYKtfzLDLHOVHxEh2PpSHfpiXrgku5QgwFarMwBaTBlu7x%2BeVn6DgVl6QQ1%2F&X-Amz-Signature=79d0a316f3a181a3253db5971a972d8623fb734f5def7ddb4ce2696a854709c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WO3CHV6%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCvyeka92thkhpHYEtTF4yp4renKaUgSUD0nj1Z5H8dcQIhAPez06ihG%2FcSi60gc9AHFNzPgkSUK2IYMUuUHcbTN0D3KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydD923jRLyugXOO7Eq3ANmV7pC8MKu66hwAY02eVO5WXvy3h8PAVtvmv6Bfm5gV6Tr3Bfx1XDQm607HDAlBGq5BeTbCComBB4m%2F02B2vAGRwhvLA5d8rwuoShZrnh%2FVdFL3I%2FlUZxKdWQ3yaNettLqBwwsp8M6NFvX9Vna0o7ytHcdbnrJl2TiTjCuujE34KSdxeHfVctEyNQneOE1ZJxzpPLhUhRVjao%2FwxbivvR7go%2FcD8w7vaWHO4mHnOrACgX0DfxvDu3QlyBBCvxVyjgGMpv57BA4uGNmxbErhbcGvKw6sf1Fbhw4ft2IvmAGymoLMiFPTJdL%2BfQTRjwpQbNvMt1XivuaCWW6hUhmu0FwFyvtZob1wmpqqwu%2F7FK%2FPAntuNxyERUT61KWBwsCVZnMSKF5EjeAiVQYYRWwVv0XSxiqtyt4AC%2B6FOWlEaC9c0hREhsuNAQApOTUU%2BeFTvhMF3FaSvdA3JEZFESYfYFn4m4uilDPN6pJo833joGn3Zryh4V0vBpLzwrJ%2BjZg1MleMJ8Xru7CblkG3JXCX7bAsAERydlBd%2FhLwyeydHcuscB%2BWELlloEIt0cyUtRyXlz1G3m5nnGYC8LuQ9dSrnBHT3Ml3It9TN7Gy9gVknW0ai6UQXC2bwEGuT%2F89DCP7ZzOBjqkAZckF7ufpNTus%2FZ6pUOdnAMfBmPEPeOHq9JBA%2FqA44HAmTs8qbQkYFKRbJ5vJcZB5EblVwFsKSMV0qScqQZmLs8PBng0ijERrpXAOWL%2B2SDXQKgl2%2By39dtfYEKrTXNuZvYkts1SVoYX1Gl4luuiGe8RlDe%2FyPNUPDXJmv%2Fy9zM9DENfBpEE0dchzzValVd8KGwEPQ6XmE%2FshUtT4wL4%2BmDy32rc&X-Amz-Signature=330c8d5837e8ffaa5699ae01fa431ec4f8ae0489e4546f9eb2ad6b6fb9233ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
