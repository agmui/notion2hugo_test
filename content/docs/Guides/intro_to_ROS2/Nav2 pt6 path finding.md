---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWRWUUK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNgpYeEVh2wrVf1Ulny5WUUCjlMH71%2BNiVvSgJdgDfKQIhANXDejhGVbUjGz03YqFBsadHxNOTwLAZ%2F0clH2BvZ7dqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EqTBiHd1VxrV2M4q3AMsDlj4G9bulxq0Juu6Zj2wOwZYgXpbqZh9fJ%2BxkFwufj57dcYEmEkfKeVnIh9RLt9xNMn7ioWV9GQzGGUSEK3KlP7caQSrmSf1dCndPrU4YS%2Bc26eaCkA7otmyqy%2FCMoInoAOGdz5bdzd0pfIlfJiL07bJO03A7GoKEm%2BMtCsLn48pgBCVXluPm4gfxxcI5uDrVrw%2BP7NFwQTV4xLR2loAYRk7IXJCY2%2FP13Xkmur3BYr6n1QSMjOgm0yQn4EqYivkQ0g5ooWYYeKXmKnLU%2FwCDWNqodocvkMCHBCbTgZy1T3qeLKNMrtno2GG9%2BWSnG3z6wv9UEJwc4jnDBtjh9erNXR%2F4cmk3svOZYinNHHnJusxBZy96YiBMUESF9alim96eTpBOgkrdmmV%2Bv66YdSMRIVfeBZXw1ex4q10XvdukK4HefpBcCm9KapqwQmasZyzbnsI1nv46TTAhI6nmW3cjqfeJ94sZsH9%2FX50kjwQIipA0zKWhmKHrR1O2Onw6MoPn1u%2BC74ZgPtTrefxPZMgPJzqolWAM1a44Po6j8m8VMsI92xjB5rXW8x1XbJUJ6I4JweUhWxsQOG48Se8MlVicqtVaF4xW2%2Fya%2F20ibTaLrn7o%2FvhtTsyagOeOjDny6PEBjqkAbse803629TkyUkhZftrF3Q0a9SZTzAs4Zwhymr2mI0%2BEDBu8PFafS%2B4bCP4vC5sOGyX9toJpi9ch6hMn5waeQ146e71nA%2FqYQ2qT3RL8oRX9S5OAob%2B3dcf8CEmqxuTj1zWvwXgNLXdDL1sC0a5src9590QaQzS2HixoDMszXtIIbcQRP3u70LFTNI6oPWOsMjiakz6Zswfc3gA18J%2Bv5eX3u06&X-Amz-Signature=9996470b306f9030bc81496f3a714680d545b438e5ffd1cd0f4d064e567db5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWRWUUK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNgpYeEVh2wrVf1Ulny5WUUCjlMH71%2BNiVvSgJdgDfKQIhANXDejhGVbUjGz03YqFBsadHxNOTwLAZ%2F0clH2BvZ7dqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EqTBiHd1VxrV2M4q3AMsDlj4G9bulxq0Juu6Zj2wOwZYgXpbqZh9fJ%2BxkFwufj57dcYEmEkfKeVnIh9RLt9xNMn7ioWV9GQzGGUSEK3KlP7caQSrmSf1dCndPrU4YS%2Bc26eaCkA7otmyqy%2FCMoInoAOGdz5bdzd0pfIlfJiL07bJO03A7GoKEm%2BMtCsLn48pgBCVXluPm4gfxxcI5uDrVrw%2BP7NFwQTV4xLR2loAYRk7IXJCY2%2FP13Xkmur3BYr6n1QSMjOgm0yQn4EqYivkQ0g5ooWYYeKXmKnLU%2FwCDWNqodocvkMCHBCbTgZy1T3qeLKNMrtno2GG9%2BWSnG3z6wv9UEJwc4jnDBtjh9erNXR%2F4cmk3svOZYinNHHnJusxBZy96YiBMUESF9alim96eTpBOgkrdmmV%2Bv66YdSMRIVfeBZXw1ex4q10XvdukK4HefpBcCm9KapqwQmasZyzbnsI1nv46TTAhI6nmW3cjqfeJ94sZsH9%2FX50kjwQIipA0zKWhmKHrR1O2Onw6MoPn1u%2BC74ZgPtTrefxPZMgPJzqolWAM1a44Po6j8m8VMsI92xjB5rXW8x1XbJUJ6I4JweUhWxsQOG48Se8MlVicqtVaF4xW2%2Fya%2F20ibTaLrn7o%2FvhtTsyagOeOjDny6PEBjqkAbse803629TkyUkhZftrF3Q0a9SZTzAs4Zwhymr2mI0%2BEDBu8PFafS%2B4bCP4vC5sOGyX9toJpi9ch6hMn5waeQ146e71nA%2FqYQ2qT3RL8oRX9S5OAob%2B3dcf8CEmqxuTj1zWvwXgNLXdDL1sC0a5src9590QaQzS2HixoDMszXtIIbcQRP3u70LFTNI6oPWOsMjiakz6Zswfc3gA18J%2Bv5eX3u06&X-Amz-Signature=e6eb11011d4d6d1a84d2406524f6bd5ac74a43a1424d9bbc17ca632940ef6678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWRWUUK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNgpYeEVh2wrVf1Ulny5WUUCjlMH71%2BNiVvSgJdgDfKQIhANXDejhGVbUjGz03YqFBsadHxNOTwLAZ%2F0clH2BvZ7dqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EqTBiHd1VxrV2M4q3AMsDlj4G9bulxq0Juu6Zj2wOwZYgXpbqZh9fJ%2BxkFwufj57dcYEmEkfKeVnIh9RLt9xNMn7ioWV9GQzGGUSEK3KlP7caQSrmSf1dCndPrU4YS%2Bc26eaCkA7otmyqy%2FCMoInoAOGdz5bdzd0pfIlfJiL07bJO03A7GoKEm%2BMtCsLn48pgBCVXluPm4gfxxcI5uDrVrw%2BP7NFwQTV4xLR2loAYRk7IXJCY2%2FP13Xkmur3BYr6n1QSMjOgm0yQn4EqYivkQ0g5ooWYYeKXmKnLU%2FwCDWNqodocvkMCHBCbTgZy1T3qeLKNMrtno2GG9%2BWSnG3z6wv9UEJwc4jnDBtjh9erNXR%2F4cmk3svOZYinNHHnJusxBZy96YiBMUESF9alim96eTpBOgkrdmmV%2Bv66YdSMRIVfeBZXw1ex4q10XvdukK4HefpBcCm9KapqwQmasZyzbnsI1nv46TTAhI6nmW3cjqfeJ94sZsH9%2FX50kjwQIipA0zKWhmKHrR1O2Onw6MoPn1u%2BC74ZgPtTrefxPZMgPJzqolWAM1a44Po6j8m8VMsI92xjB5rXW8x1XbJUJ6I4JweUhWxsQOG48Se8MlVicqtVaF4xW2%2Fya%2F20ibTaLrn7o%2FvhtTsyagOeOjDny6PEBjqkAbse803629TkyUkhZftrF3Q0a9SZTzAs4Zwhymr2mI0%2BEDBu8PFafS%2B4bCP4vC5sOGyX9toJpi9ch6hMn5waeQ146e71nA%2FqYQ2qT3RL8oRX9S5OAob%2B3dcf8CEmqxuTj1zWvwXgNLXdDL1sC0a5src9590QaQzS2HixoDMszXtIIbcQRP3u70LFTNI6oPWOsMjiakz6Zswfc3gA18J%2Bv5eX3u06&X-Amz-Signature=77a7a795ba6d06f7ca0cd097a1a7032e10ba71d8096220a94071162e399414d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWRWUUK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNgpYeEVh2wrVf1Ulny5WUUCjlMH71%2BNiVvSgJdgDfKQIhANXDejhGVbUjGz03YqFBsadHxNOTwLAZ%2F0clH2BvZ7dqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EqTBiHd1VxrV2M4q3AMsDlj4G9bulxq0Juu6Zj2wOwZYgXpbqZh9fJ%2BxkFwufj57dcYEmEkfKeVnIh9RLt9xNMn7ioWV9GQzGGUSEK3KlP7caQSrmSf1dCndPrU4YS%2Bc26eaCkA7otmyqy%2FCMoInoAOGdz5bdzd0pfIlfJiL07bJO03A7GoKEm%2BMtCsLn48pgBCVXluPm4gfxxcI5uDrVrw%2BP7NFwQTV4xLR2loAYRk7IXJCY2%2FP13Xkmur3BYr6n1QSMjOgm0yQn4EqYivkQ0g5ooWYYeKXmKnLU%2FwCDWNqodocvkMCHBCbTgZy1T3qeLKNMrtno2GG9%2BWSnG3z6wv9UEJwc4jnDBtjh9erNXR%2F4cmk3svOZYinNHHnJusxBZy96YiBMUESF9alim96eTpBOgkrdmmV%2Bv66YdSMRIVfeBZXw1ex4q10XvdukK4HefpBcCm9KapqwQmasZyzbnsI1nv46TTAhI6nmW3cjqfeJ94sZsH9%2FX50kjwQIipA0zKWhmKHrR1O2Onw6MoPn1u%2BC74ZgPtTrefxPZMgPJzqolWAM1a44Po6j8m8VMsI92xjB5rXW8x1XbJUJ6I4JweUhWxsQOG48Se8MlVicqtVaF4xW2%2Fya%2F20ibTaLrn7o%2FvhtTsyagOeOjDny6PEBjqkAbse803629TkyUkhZftrF3Q0a9SZTzAs4Zwhymr2mI0%2BEDBu8PFafS%2B4bCP4vC5sOGyX9toJpi9ch6hMn5waeQ146e71nA%2FqYQ2qT3RL8oRX9S5OAob%2B3dcf8CEmqxuTj1zWvwXgNLXdDL1sC0a5src9590QaQzS2HixoDMszXtIIbcQRP3u70LFTNI6oPWOsMjiakz6Zswfc3gA18J%2Bv5eX3u06&X-Amz-Signature=01026859a00aea3e80daa2b37fcdc96df5bfad31155108d49f02f0fb270592f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWRWUUK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNgpYeEVh2wrVf1Ulny5WUUCjlMH71%2BNiVvSgJdgDfKQIhANXDejhGVbUjGz03YqFBsadHxNOTwLAZ%2F0clH2BvZ7dqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EqTBiHd1VxrV2M4q3AMsDlj4G9bulxq0Juu6Zj2wOwZYgXpbqZh9fJ%2BxkFwufj57dcYEmEkfKeVnIh9RLt9xNMn7ioWV9GQzGGUSEK3KlP7caQSrmSf1dCndPrU4YS%2Bc26eaCkA7otmyqy%2FCMoInoAOGdz5bdzd0pfIlfJiL07bJO03A7GoKEm%2BMtCsLn48pgBCVXluPm4gfxxcI5uDrVrw%2BP7NFwQTV4xLR2loAYRk7IXJCY2%2FP13Xkmur3BYr6n1QSMjOgm0yQn4EqYivkQ0g5ooWYYeKXmKnLU%2FwCDWNqodocvkMCHBCbTgZy1T3qeLKNMrtno2GG9%2BWSnG3z6wv9UEJwc4jnDBtjh9erNXR%2F4cmk3svOZYinNHHnJusxBZy96YiBMUESF9alim96eTpBOgkrdmmV%2Bv66YdSMRIVfeBZXw1ex4q10XvdukK4HefpBcCm9KapqwQmasZyzbnsI1nv46TTAhI6nmW3cjqfeJ94sZsH9%2FX50kjwQIipA0zKWhmKHrR1O2Onw6MoPn1u%2BC74ZgPtTrefxPZMgPJzqolWAM1a44Po6j8m8VMsI92xjB5rXW8x1XbJUJ6I4JweUhWxsQOG48Se8MlVicqtVaF4xW2%2Fya%2F20ibTaLrn7o%2FvhtTsyagOeOjDny6PEBjqkAbse803629TkyUkhZftrF3Q0a9SZTzAs4Zwhymr2mI0%2BEDBu8PFafS%2B4bCP4vC5sOGyX9toJpi9ch6hMn5waeQ146e71nA%2FqYQ2qT3RL8oRX9S5OAob%2B3dcf8CEmqxuTj1zWvwXgNLXdDL1sC0a5src9590QaQzS2HixoDMszXtIIbcQRP3u70LFTNI6oPWOsMjiakz6Zswfc3gA18J%2Bv5eX3u06&X-Amz-Signature=557e2a4f7e9d3e42d866ad980e48a7a53a1d351bad9e4da05f6e1911faef5efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWRWUUK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNgpYeEVh2wrVf1Ulny5WUUCjlMH71%2BNiVvSgJdgDfKQIhANXDejhGVbUjGz03YqFBsadHxNOTwLAZ%2F0clH2BvZ7dqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EqTBiHd1VxrV2M4q3AMsDlj4G9bulxq0Juu6Zj2wOwZYgXpbqZh9fJ%2BxkFwufj57dcYEmEkfKeVnIh9RLt9xNMn7ioWV9GQzGGUSEK3KlP7caQSrmSf1dCndPrU4YS%2Bc26eaCkA7otmyqy%2FCMoInoAOGdz5bdzd0pfIlfJiL07bJO03A7GoKEm%2BMtCsLn48pgBCVXluPm4gfxxcI5uDrVrw%2BP7NFwQTV4xLR2loAYRk7IXJCY2%2FP13Xkmur3BYr6n1QSMjOgm0yQn4EqYivkQ0g5ooWYYeKXmKnLU%2FwCDWNqodocvkMCHBCbTgZy1T3qeLKNMrtno2GG9%2BWSnG3z6wv9UEJwc4jnDBtjh9erNXR%2F4cmk3svOZYinNHHnJusxBZy96YiBMUESF9alim96eTpBOgkrdmmV%2Bv66YdSMRIVfeBZXw1ex4q10XvdukK4HefpBcCm9KapqwQmasZyzbnsI1nv46TTAhI6nmW3cjqfeJ94sZsH9%2FX50kjwQIipA0zKWhmKHrR1O2Onw6MoPn1u%2BC74ZgPtTrefxPZMgPJzqolWAM1a44Po6j8m8VMsI92xjB5rXW8x1XbJUJ6I4JweUhWxsQOG48Se8MlVicqtVaF4xW2%2Fya%2F20ibTaLrn7o%2FvhtTsyagOeOjDny6PEBjqkAbse803629TkyUkhZftrF3Q0a9SZTzAs4Zwhymr2mI0%2BEDBu8PFafS%2B4bCP4vC5sOGyX9toJpi9ch6hMn5waeQ146e71nA%2FqYQ2qT3RL8oRX9S5OAob%2B3dcf8CEmqxuTj1zWvwXgNLXdDL1sC0a5src9590QaQzS2HixoDMszXtIIbcQRP3u70LFTNI6oPWOsMjiakz6Zswfc3gA18J%2Bv5eX3u06&X-Amz-Signature=6e89dd2f25ca325485516454b56632bf3bb05a5373b74533cca147619aaab795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
