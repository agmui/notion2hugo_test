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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ERBAYT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcZbyJsf7w8vrXCHORTKoYTvgxfPUe5YqvQ4%2F6TdMhAIgfUPuthl8M0aP3lQ1o0axvK%2BjN7T63BsR%2FVLasT%2BHwjsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH61C4fonSUQn%2Bf4hyrcAzi%2FhwFlJkBHA40Jwx3o4ZsjoDWmr86Cc0FQqGmaulG4OVct8jVyfZ%2B8hrnHKt1Kz1n3%2BoWrFe4XRn3v6PrfMuy06P2YyyH7wQYGWa79L4MTRU9V6aJT%2FIEqCwt%2BOAK4G9BFu4jlh46oLE7pnjzziy3u2qQ9RBv7Sc6oeQMkgU6PlrKNu9F6emqZxlXsz2Xq01JaulfpGJ9i73aUjYWcWPKNMQw%2FTsXHWBitRYaeKC8w4rorBw0bGW%2B95zNWeqjbg0CK94415iW8DmJY0js8l4ZkY9D9UAi1JDWUcYezUlQH5Pk4APX8c3jP87z%2ByrilYXkqlNH0LkpMwH2jYUHr%2FNMNdz2Oo11qhpPEiuoTbX9seKb5HsebpGPvAfkVTmRRVlBQiUKtrpiA9K%2Fath7mqUCeCuIcGgg1ui0s6%2FB7tWOF9a%2FCNw%2BVP5OiofQmITkfROZ70hk5qTGo5QCvBcMcUmHPQ%2FnX73AGttjTAeCSoQpkqWNcsZKyeh2ErTkdBPHT2wqynKWbfQjxLU1q%2FLik7eAkczEjj8APfB31uyaJvDt3zCDv%2ByZ9NysOcdnInZOjvWuBr7crb439BpoDi0EB%2FZfmId2jw5ktgKNbOQ1yCCNQmfAQOJWD54lqgkc%2BMMHYjMAGOqUBYaN%2Bm5GQdSA3QCGd8%2F1PG8rBcKQrH6Z8jtDK45CKFsTa9YQd%2B%2F11kmCBVHjuSsJH4j3%2F%2BhtHrZJlJt87jyqeL1Ki58m%2B4J91GBxtylz5V6tDipj0TXd3y5URtdk2tHCC0%2BZlnl97O55JASLlNziWkchd4IWSFy7jiwokMf0NNpzXZrTe%2Fe7hwlA10rNLdEqcuJW2hozvl6Ro5Gmd0f5wEFX%2BAcwv&X-Amz-Signature=5a28717b2350b406ec6c424c28c4b97cff7af9b3d2d14bc40ce8ee06cfb2bfaf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ERBAYT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcZbyJsf7w8vrXCHORTKoYTvgxfPUe5YqvQ4%2F6TdMhAIgfUPuthl8M0aP3lQ1o0axvK%2BjN7T63BsR%2FVLasT%2BHwjsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH61C4fonSUQn%2Bf4hyrcAzi%2FhwFlJkBHA40Jwx3o4ZsjoDWmr86Cc0FQqGmaulG4OVct8jVyfZ%2B8hrnHKt1Kz1n3%2BoWrFe4XRn3v6PrfMuy06P2YyyH7wQYGWa79L4MTRU9V6aJT%2FIEqCwt%2BOAK4G9BFu4jlh46oLE7pnjzziy3u2qQ9RBv7Sc6oeQMkgU6PlrKNu9F6emqZxlXsz2Xq01JaulfpGJ9i73aUjYWcWPKNMQw%2FTsXHWBitRYaeKC8w4rorBw0bGW%2B95zNWeqjbg0CK94415iW8DmJY0js8l4ZkY9D9UAi1JDWUcYezUlQH5Pk4APX8c3jP87z%2ByrilYXkqlNH0LkpMwH2jYUHr%2FNMNdz2Oo11qhpPEiuoTbX9seKb5HsebpGPvAfkVTmRRVlBQiUKtrpiA9K%2Fath7mqUCeCuIcGgg1ui0s6%2FB7tWOF9a%2FCNw%2BVP5OiofQmITkfROZ70hk5qTGo5QCvBcMcUmHPQ%2FnX73AGttjTAeCSoQpkqWNcsZKyeh2ErTkdBPHT2wqynKWbfQjxLU1q%2FLik7eAkczEjj8APfB31uyaJvDt3zCDv%2ByZ9NysOcdnInZOjvWuBr7crb439BpoDi0EB%2FZfmId2jw5ktgKNbOQ1yCCNQmfAQOJWD54lqgkc%2BMMHYjMAGOqUBYaN%2Bm5GQdSA3QCGd8%2F1PG8rBcKQrH6Z8jtDK45CKFsTa9YQd%2B%2F11kmCBVHjuSsJH4j3%2F%2BhtHrZJlJt87jyqeL1Ki58m%2B4J91GBxtylz5V6tDipj0TXd3y5URtdk2tHCC0%2BZlnl97O55JASLlNziWkchd4IWSFy7jiwokMf0NNpzXZrTe%2Fe7hwlA10rNLdEqcuJW2hozvl6Ro5Gmd0f5wEFX%2BAcwv&X-Amz-Signature=d59557448ba718ad9ba57742d838e80e57d5330396423e8b85d096f06da409cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYQK4Q7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0gEYR1ceK7wCAys9IbP9geA6ova9DSL5bBAfVZuMlmwIgb9BsmwcoEV8tROSw0MrkdM69aB3opCX6MpANucPpRkwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnP2M3NE4rAVxsX8ircA0DpMXDZWJbpZclQzs6zxL%2F27ALiMQkH3d38tHezZkjnWVZ006JpESpDEZgMXOHQof4fj2kFEBVAhMGcKpAu5cjGUvzdCWPeNCd3gwCxwKD7X983fMZNyd9L4eroYn2n%2FWDmHXPqPzqFxtfRZP22ex2H2MwPD%2BnUh2hrMtGD%2FP%2BiUB%2Bb656c%2BDGa1YYQbB5Z%2BFnL4G6JgQ2P8rIaHPPx1l8oIaF4QbyzdOWaf9B%2F%2BENohZpaY1urJKjvVNnSH%2Bm5Jo1aEKr3JtbLf453OB0ZwYrexzXOz01MA05O8cu%2BSBmiQ6pNrFWXHH8ZW5XjmGh36QcL10qzI2aj666Wm2AENhPn0tdlepU36AFeUl%2BZWF%2B9in8YYm%2Bat9ZNexGImfXX5JqcWLDX%2BY%2B4VJ7otKbG2d76ov0FuvPyMq2xuMsOlDVL6BvS8jJEMgKHR89xA791BanshOlaA58UwTmK2QlcRsuBMzEgiqGQOeji2Zs8PuZ6skcy9sBwdIYOAK0BVfg5Pe%2FHUaa%2Fn3ilfcx4cKJ%2FnGYK4QCCkpqMb4O090NqazHvRiETbZG4IoH5%2FdOmg8wwwND%2BgVGQs7m4DFQO5%2FK%2BIKi%2BW%2B00W2u%2BLef4MmU6iYLHPJH9aQYblEMaXFm8MOr7jMAGOqUBFmIH4ED9wkOvpiBetNF4xf5QqthD%2B03u07xy1A5F47ey0BD4gl0LGn7B2%2FOS6gKYcuUZsPBFOZoH7o4cZu74tCHQTm%2FhCrccErlL%2BGxJY2OyTjbPVZXooveOOANpE7MGzmY3FdxiSBJsLCBRf0mBcy1zqu0uVvmGppvK7BTd%2BfA%2BMDyiOzxAgDJ5uxl7BTLWZhWYLtcZ0zIn1a6VrbsU1YHGqiDW&X-Amz-Signature=3c6e9c9946ba4ff987021bd6445a11e0de4174be1ae946ba91006ea8f404c00f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKCPUNV%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfGoudwPhp%2F4VvTaM1zp4I%2FBM%2Fmqqywg8zXaW8j6FoDAIhAJ7JVIsmwjfdn1BXGn75hIY40XFxl28u1X4Hel0acK7wKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzybCQ%2Bs39666F3ungq3AM8W0wVj120JiUa30uZTYOZ339ZREHS4h2r759yoSgQKfA%2FSlFbCINcYebOSydgiN%2FNW1UKiLnP8vv5k%2FQ105SwOngj7fvdEmv6iXWflTbNFqyz9aGtz737QmRhfz2UwTDBkHK4lQfCrlK746dquqT%2BNdSeSbAelVctb9NuCpEto8F%2BSrsqJbLMMvaSPUpOLiVYpFHqNHw%2BGCAlNNTfGsnMs431P2IhuRlquQuGEsE%2FwS4iP%2FKxHOTIxNzUIIWK5%2BmJdEj4%2Bol%2F8z7Yi8sb8lZIHJa1ND6d8akLCasbWgnqdV3kd7GZFBV%2BBPXy1z3xczYi5O31TIHaWZKWylCJ4laMQ8J6CSGrij3AyyiMIZ5VLxPpuZEfrkTwUKXCz0uFQXtkZdEL9%2BTF7v89RKHNo16iSKGxM46HBFjXIY9Jluhq%2FV%2BIY5f2w9%2BxZ%2B8yzrCCClJ3V%2BbHO8ovrzWWc1BY8ru1iTRWEmKrpBNDbNME9%2FGKHdFQikOVpgAJyEqSTNw%2BcN7M5fDOSb9GdEsgRfvVVcYHT6GWXh1bkKeHZfLkvdxhdKd9M%2FtK5RJ3f%2FyiWxG6dUBGHA1tlmPXi35O7efUVWDlP50aXWGIWAMkxkBgdPSj56tMjQflHyoMJG9uxTD214zABjqkAXplDS2YKLiA3RncVAcq01DV6HN6UOpzivkRo8HRY%2BeamXlLrMGLIvFUNmaw1tN35kUwfZsMWcwgHqJcsIXisrDVzv2zal0stAMXBLJmB9ti8sgF9EI%2FWW9Ocs5wyW4xV2HKUnlLAJldvTT0HcOiOZh5%2Bco8706Z%2Fq0cBn44fLmKwB5NLuh9YhdvWdLTIWGfH26EaShb1gyWJ9iulA1OA1zBMuZX&X-Amz-Signature=fae54e0b9d2d2c18ccd42fdc1d4819510074195547ed83a871b4cb1bcf4db6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ERBAYT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcZbyJsf7w8vrXCHORTKoYTvgxfPUe5YqvQ4%2F6TdMhAIgfUPuthl8M0aP3lQ1o0axvK%2BjN7T63BsR%2FVLasT%2BHwjsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH61C4fonSUQn%2Bf4hyrcAzi%2FhwFlJkBHA40Jwx3o4ZsjoDWmr86Cc0FQqGmaulG4OVct8jVyfZ%2B8hrnHKt1Kz1n3%2BoWrFe4XRn3v6PrfMuy06P2YyyH7wQYGWa79L4MTRU9V6aJT%2FIEqCwt%2BOAK4G9BFu4jlh46oLE7pnjzziy3u2qQ9RBv7Sc6oeQMkgU6PlrKNu9F6emqZxlXsz2Xq01JaulfpGJ9i73aUjYWcWPKNMQw%2FTsXHWBitRYaeKC8w4rorBw0bGW%2B95zNWeqjbg0CK94415iW8DmJY0js8l4ZkY9D9UAi1JDWUcYezUlQH5Pk4APX8c3jP87z%2ByrilYXkqlNH0LkpMwH2jYUHr%2FNMNdz2Oo11qhpPEiuoTbX9seKb5HsebpGPvAfkVTmRRVlBQiUKtrpiA9K%2Fath7mqUCeCuIcGgg1ui0s6%2FB7tWOF9a%2FCNw%2BVP5OiofQmITkfROZ70hk5qTGo5QCvBcMcUmHPQ%2FnX73AGttjTAeCSoQpkqWNcsZKyeh2ErTkdBPHT2wqynKWbfQjxLU1q%2FLik7eAkczEjj8APfB31uyaJvDt3zCDv%2ByZ9NysOcdnInZOjvWuBr7crb439BpoDi0EB%2FZfmId2jw5ktgKNbOQ1yCCNQmfAQOJWD54lqgkc%2BMMHYjMAGOqUBYaN%2Bm5GQdSA3QCGd8%2F1PG8rBcKQrH6Z8jtDK45CKFsTa9YQd%2B%2F11kmCBVHjuSsJH4j3%2F%2BhtHrZJlJt87jyqeL1Ki58m%2B4J91GBxtylz5V6tDipj0TXd3y5URtdk2tHCC0%2BZlnl97O55JASLlNziWkchd4IWSFy7jiwokMf0NNpzXZrTe%2Fe7hwlA10rNLdEqcuJW2hozvl6Ro5Gmd0f5wEFX%2BAcwv&X-Amz-Signature=c261ed478eca978bf0124f083398d1e712c082ed558a9f5e16bd8688d3a8470f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
