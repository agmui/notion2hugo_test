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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIDBEAC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ3NubleSDTcNh40zGXdgiEmnSyuNfhJQw1T3wANsOHAiEAv6fla7LTltscTr3iU0ljOZN%2FPzevvsRJo0Kt2Ul5qPMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOLDj4cjhREA9Tl5JyrcAzGILWLkD%2BtNjxivfR2LrXYm7yhI85KGvxvrH9QXzZBvppOwrSAp0A8BMgkhka%2BWGPFdTuyzo1UmNa31DnyOgZDpFw0107tU2xutrFkjNpi691%2FJhstYWASz6hmeT1lEOUIU5DqsNJhWJJXgbik5raPruExtF9Ixpo7z47hCSWCZ%2BZT5dtljZR3sie9FyYYORPNaNbRu6YzY5oufhsQVzrDJ1JCw%2FXQznbnsEa6ZLmMlfDxt5jYZX6MtVI2aVPbF2peUxw3eIzYu0lhJauLLi8vGINM6r%2FMCD2PChFuWW%2FZLwjrKtZankguhLl9EU3IWVGY%2FFPmzvC8lixkHYimVjX8nEo5YtQy%2FtpGtMxpCKc4UeIyN%2BkYZ9dVxS434omGrhLP51eqpP6BqQDQw86%2FX%2FOzExpc2LQNZNpc4V9O8CnuCGlwxkD%2BR%2Bf2twZ5sMnzGSs2PzyvBr%2FvaB7IQLgA8B5yut%2FQzmKtJLY8AD26OLkzbMAldzjvBxzkLwyzXVchoUzwnitNKhSk1XPtpq55hOVvAgXV42PG%2FffdckURUWnA%2F7JVZRS6exZst4mJfnhE0T0wQJvoUbHXKDo7KhhLcjhy6iCYew596GA88vw2RBBEMO5R98RxSexETW4v2MIGOkr8GOqUBawAz%2BzMPa9ig0fdZSzUGXC6evxOUSD9%2F51FiRNj4ydo1XLfDT8QMndpFpdgMZMt5WbdRQlBqfqPGI72rINni%2FhY4otnC4hTP0mXmj15uZYQfPQxVQHzUJ3YsdtM6WWrjC27XZre8lE9mzKziFY%2BkmtDhBIKV1zsZJn4HbVwo6aE4aMyuiIhNX3NRnwHfv5m6rLNq%2FyWW44Kf8seS4aGlDd6F%2BzMY&X-Amz-Signature=5ec2e9afd5d1a851620463320480718b13fd3542f4f4509554a6bb82272f6e20&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIDBEAC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ3NubleSDTcNh40zGXdgiEmnSyuNfhJQw1T3wANsOHAiEAv6fla7LTltscTr3iU0ljOZN%2FPzevvsRJo0Kt2Ul5qPMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOLDj4cjhREA9Tl5JyrcAzGILWLkD%2BtNjxivfR2LrXYm7yhI85KGvxvrH9QXzZBvppOwrSAp0A8BMgkhka%2BWGPFdTuyzo1UmNa31DnyOgZDpFw0107tU2xutrFkjNpi691%2FJhstYWASz6hmeT1lEOUIU5DqsNJhWJJXgbik5raPruExtF9Ixpo7z47hCSWCZ%2BZT5dtljZR3sie9FyYYORPNaNbRu6YzY5oufhsQVzrDJ1JCw%2FXQznbnsEa6ZLmMlfDxt5jYZX6MtVI2aVPbF2peUxw3eIzYu0lhJauLLi8vGINM6r%2FMCD2PChFuWW%2FZLwjrKtZankguhLl9EU3IWVGY%2FFPmzvC8lixkHYimVjX8nEo5YtQy%2FtpGtMxpCKc4UeIyN%2BkYZ9dVxS434omGrhLP51eqpP6BqQDQw86%2FX%2FOzExpc2LQNZNpc4V9O8CnuCGlwxkD%2BR%2Bf2twZ5sMnzGSs2PzyvBr%2FvaB7IQLgA8B5yut%2FQzmKtJLY8AD26OLkzbMAldzjvBxzkLwyzXVchoUzwnitNKhSk1XPtpq55hOVvAgXV42PG%2FffdckURUWnA%2F7JVZRS6exZst4mJfnhE0T0wQJvoUbHXKDo7KhhLcjhy6iCYew596GA88vw2RBBEMO5R98RxSexETW4v2MIGOkr8GOqUBawAz%2BzMPa9ig0fdZSzUGXC6evxOUSD9%2F51FiRNj4ydo1XLfDT8QMndpFpdgMZMt5WbdRQlBqfqPGI72rINni%2FhY4otnC4hTP0mXmj15uZYQfPQxVQHzUJ3YsdtM6WWrjC27XZre8lE9mzKziFY%2BkmtDhBIKV1zsZJn4HbVwo6aE4aMyuiIhNX3NRnwHfv5m6rLNq%2FyWW44Kf8seS4aGlDd6F%2BzMY&X-Amz-Signature=2d14beae29a92403598037c44289d7fcbf288304cd2719a429c800751cc23739&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXXODJX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhWcVA1gSlSP6qiyHU3jegCFgs4EzgXwH9R80oFGKgRQIhANKIvvdgSlnuZlv8V5TsXjOeUOX4bDTqFLu812sZ%2BMVrKv8DCDgQABoMNjM3NDIzMTgzODA1IgwNxy28Lg%2FGIOOHBCwq3APbhKjtLtXkX3lDoQTsaaGPG6R4MgJIS1TmSmxxTkgojlEkTxQMC2iY04sLkTQSUir3t8ebNno59cVegr3YIdUMr8NaDQAyECDXI%2FtuiWZgSK9LxkdxzY15E85EyMSGAqvaVY8nKCrPeUWFqTqD4TEYPZu4ovhiy6WjvbTpIk79EmyeVSx6xKiY6oSjNt7ngKbSQyCMn2f4bSfpA0w6T1XYCmMx46MoOFY5Z9J2mMG0khfmPToHNZFG%2FxdVGffVRGcgUXgtls5cjx%2B9MujnXpLLJDKEMrtNHgvtYldfoZiIL93BVvlDHjurL%2B%2FjSiTLM%2FysX9l8BrU%2B5SG%2BL5uwWU1bR97lmIWEXtrbDGvvQ7OE7g0VuF3tYUVMTai93DMtmYkH6nyv1Z2zWuDKR3tozknGWEj4clKgt361%2Fmqe9ToYRPda0xcOt3%2BvAQe6eCxQtYFkiqPXzc%2F7HcMu1HyXZ6zx6NBEQARiuaao3ezWGV%2F6IjqaiBVXkk03FTUCDRWkyRVZ3mYlUw%2FSDBrVjmVo%2Fl6NI8DOJCSNpoSzoZsgguUcACtON1b1oehN72qY0YyC4K9GoPAzsuALYekIWliR%2FDnbNVvGvGcB6KgT2fKcmkBY8A32gIUvYZ%2BjwBl4jDDijJK%2FBjqkAQxK5YgrpG%2Furu6ttofWlnQi4PezD7I6dQYjP6nlh6YjK1hZ7oi9%2FSKok1bSwLwdWC7%2FAfLbuEUGXPgWI0s3v1t4wHW0%2BtCLQD7TDJw3su9j24FNee9UQ1iaOY0h%2FPbTEiy8zyCHZqPRZ1dNrSB5rO21S6GfZFLzjIo27s8cCqVX1n4tROEVbQrQcYwcnDfBKZHgwC%2BPbiCA2Hz4qGTcAH294wsW&X-Amz-Signature=4d625d8d841ae33f0e378892318b8ae481ce95db23ad162fb45dda528296cd24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IRAB7I%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8xOxJzRCLLX4ctq1vtyKJERzKgk3JPm5OVY4wuZSbzgIgRgAzN0KdNtxOkMtcZfrDbkA%2Bc6nvAxQHTB%2FlTPAZ7XAq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDO2xRL5vzByTswL3hCrcAya8iP7S6z5YQTyEYpmvexPEDqSvH2RcEMDb8b4l5adssbiUcsg4%2FZxTNNahHuOeVOauflV1T3tAJ62ZlabU3FQY76S2SaxGSuiOclyNaNRuaY5UxRO5tDRiPfAD5wwviUQrLtiH5rorRCxQifScvx5OhnIdoAJHuoI1Scl5n8qcpMlhS9Idc8%2BW8jxuA4UjpP9JiAveB55M3Vs0fc9BoQl9Pbdshb2hh49xtxkSTvyJ4jT3vfPaijJ2tvxa7yxwgDg4XZaJJ0lcL5EZveh1Lbn4veMO8IqZob8wcN%2FxTIMr4ZmbKw5yicWR1qyF%2B2V9tGL6mjMe8d7%2BVqIngZy03I37OFKADv2YUd6bgnmYxXI6s0s6ntctzy8HN5jPG5nv0i%2FQ724RpA1QEQjX8jL49iKexkjoUQKQoChjjFWrJJ34JQZXH4OaDBkibxQeP66306tHc8ay904S5t2qy7Dpdxy3ZNnWE%2B0xjt4Yfn1GN8PFN%2Fu%2B4OAggFu0m3lniQ%2BLaq1nO9IeWVbA5Mip3FAxgZZHZnEa5jc6q32ghK9EBqZzCM6MHW6pjtbrrcgxylOC%2FdKXBEjMz69Oew%2BYDXXczHUkQDYdUnh4lHOZUZs7gFbza88A6W%2F7B6GXjGeUMJONkr8GOqUBVQ1vv7XWbD1%2Btbtm7RG9FAsp9SRXzJvprrk7UNUL%2FfsiODEnFY0C8XjYt2eAMqZQQGo0yKhUP9psJHHZR6ggo0IGnuXpCwZ1l3Fnh4IitpUmPqEGbwUsZJ1YJns7LqlJ1USx0zZka1vw%2Bq7HSQ%2BnzSPuZSNiQU4i1KthBnA3Lm5%2Bhs%2F10pmh6TqdRgioAaFqQNB4q2dcuIVkCpjvQBtJo2h1JIDa&X-Amz-Signature=7960266634cbb653356f41bdfa02f61f32b25d795c7937678262916e508aeef0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NIDBEAC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ3NubleSDTcNh40zGXdgiEmnSyuNfhJQw1T3wANsOHAiEAv6fla7LTltscTr3iU0ljOZN%2FPzevvsRJo0Kt2Ul5qPMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOLDj4cjhREA9Tl5JyrcAzGILWLkD%2BtNjxivfR2LrXYm7yhI85KGvxvrH9QXzZBvppOwrSAp0A8BMgkhka%2BWGPFdTuyzo1UmNa31DnyOgZDpFw0107tU2xutrFkjNpi691%2FJhstYWASz6hmeT1lEOUIU5DqsNJhWJJXgbik5raPruExtF9Ixpo7z47hCSWCZ%2BZT5dtljZR3sie9FyYYORPNaNbRu6YzY5oufhsQVzrDJ1JCw%2FXQznbnsEa6ZLmMlfDxt5jYZX6MtVI2aVPbF2peUxw3eIzYu0lhJauLLi8vGINM6r%2FMCD2PChFuWW%2FZLwjrKtZankguhLl9EU3IWVGY%2FFPmzvC8lixkHYimVjX8nEo5YtQy%2FtpGtMxpCKc4UeIyN%2BkYZ9dVxS434omGrhLP51eqpP6BqQDQw86%2FX%2FOzExpc2LQNZNpc4V9O8CnuCGlwxkD%2BR%2Bf2twZ5sMnzGSs2PzyvBr%2FvaB7IQLgA8B5yut%2FQzmKtJLY8AD26OLkzbMAldzjvBxzkLwyzXVchoUzwnitNKhSk1XPtpq55hOVvAgXV42PG%2FffdckURUWnA%2F7JVZRS6exZst4mJfnhE0T0wQJvoUbHXKDo7KhhLcjhy6iCYew596GA88vw2RBBEMO5R98RxSexETW4v2MIGOkr8GOqUBawAz%2BzMPa9ig0fdZSzUGXC6evxOUSD9%2F51FiRNj4ydo1XLfDT8QMndpFpdgMZMt5WbdRQlBqfqPGI72rINni%2FhY4otnC4hTP0mXmj15uZYQfPQxVQHzUJ3YsdtM6WWrjC27XZre8lE9mzKziFY%2BkmtDhBIKV1zsZJn4HbVwo6aE4aMyuiIhNX3NRnwHfv5m6rLNq%2FyWW44Kf8seS4aGlDd6F%2BzMY&X-Amz-Signature=c083acb28c95239105436c64e40a88ee8af3ba7cf7d7b3ac0c808e7f45b2952c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
