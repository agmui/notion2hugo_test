---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWW4BA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG9CB4H1HCZ0SSiC52f9SyTDFkz0swnTlxTMN8zEU236AiEAjo%2FMu04Amd7w%2B9HZhDfoeuKO3ZIhof%2Bn4WDNUk63FxMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPP5N6LeSF59yKceESrcAyusbZ3AKSkFHV%2BAK9HU%2FYrbFy%2BMBYqTgsCoE0sh8U4tW5%2BdDieKyU4rWlTk7XNkagRLsCtY%2BAh5fEm3Sa76hxI3wZwmk7B5KpiupicaiThAJCpUQyacH4p7lFuirZse3CT80rI%2BWH%2Foks%2Bjn5ZiHxOQd8Mt0wt%2BXKMLSIkNFUeSe%2BwhgenDdnvjYo7eOo3l14%2F3nCN6788oAR8wTGOkby0oY%2BtmEa22pmaJukOUoGgUDbZkNPWJppssFjagtLAZ8SvfjgNlXYcNmC1B15svXiO8%2BXLdjbqbq9CH5Q8XydQZ62hDGHcrkaUPrfNUsSpkyv4sxSQOUjpT0iitQfPi%2BaIPoqpxXvgQ4uP2qz5GZCr1WPzKRvMb2BC66yg0kND2VF02hw%2FxCEz0T6u5lB7tVc3BbHSeqzdsdeKjyjiGhBQVRwfV0yJFt8TiGaGWxY8t%2Ff%2BbnllxnB49VZIjuhITIio7OJRpg9cCyqEifasPajfbRGi80OU9JoC2hCCcCkYakdIpA0GSBrB66tsflDXBbqxW%2FhDuqeuwlmSl9yrk4sqBIrRQ1GjpLpP7%2FcHxHpKpsflj2u9%2BfI%2FgSQUxktpv7gjv1Bh1%2BP4b7D7VsxPgPSMLd6xgFao5IP%2B4SjDaMJ%2FZiMQGOqUBAJjVCrHKwvsZiNcu7u3PgKXvTA2OT9jZVh2UmgJ5nT9GhkJg%2FD5UEssv1dQzbq%2B9r5NS70Fa6AtXRJwqAS%2FyzavNteUr5VboKJEOKseANa630tN7pefC%2BOBnFvxwSnBwSrQkZVbeAo1%2FJ5xd7fjuOGX05IRdWvVtfcTxGtrS79QipUgLXX23SrunMHmGA7VoKmT1qzsfFmo9CitY4mdyJEpaSPBr&X-Amz-Signature=dc5365a17d10ca7bb43474d78b9e7f8138d8508d52969677716edd8883fa2323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWW4BA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG9CB4H1HCZ0SSiC52f9SyTDFkz0swnTlxTMN8zEU236AiEAjo%2FMu04Amd7w%2B9HZhDfoeuKO3ZIhof%2Bn4WDNUk63FxMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPP5N6LeSF59yKceESrcAyusbZ3AKSkFHV%2BAK9HU%2FYrbFy%2BMBYqTgsCoE0sh8U4tW5%2BdDieKyU4rWlTk7XNkagRLsCtY%2BAh5fEm3Sa76hxI3wZwmk7B5KpiupicaiThAJCpUQyacH4p7lFuirZse3CT80rI%2BWH%2Foks%2Bjn5ZiHxOQd8Mt0wt%2BXKMLSIkNFUeSe%2BwhgenDdnvjYo7eOo3l14%2F3nCN6788oAR8wTGOkby0oY%2BtmEa22pmaJukOUoGgUDbZkNPWJppssFjagtLAZ8SvfjgNlXYcNmC1B15svXiO8%2BXLdjbqbq9CH5Q8XydQZ62hDGHcrkaUPrfNUsSpkyv4sxSQOUjpT0iitQfPi%2BaIPoqpxXvgQ4uP2qz5GZCr1WPzKRvMb2BC66yg0kND2VF02hw%2FxCEz0T6u5lB7tVc3BbHSeqzdsdeKjyjiGhBQVRwfV0yJFt8TiGaGWxY8t%2Ff%2BbnllxnB49VZIjuhITIio7OJRpg9cCyqEifasPajfbRGi80OU9JoC2hCCcCkYakdIpA0GSBrB66tsflDXBbqxW%2FhDuqeuwlmSl9yrk4sqBIrRQ1GjpLpP7%2FcHxHpKpsflj2u9%2BfI%2FgSQUxktpv7gjv1Bh1%2BP4b7D7VsxPgPSMLd6xgFao5IP%2B4SjDaMJ%2FZiMQGOqUBAJjVCrHKwvsZiNcu7u3PgKXvTA2OT9jZVh2UmgJ5nT9GhkJg%2FD5UEssv1dQzbq%2B9r5NS70Fa6AtXRJwqAS%2FyzavNteUr5VboKJEOKseANa630tN7pefC%2BOBnFvxwSnBwSrQkZVbeAo1%2FJ5xd7fjuOGX05IRdWvVtfcTxGtrS79QipUgLXX23SrunMHmGA7VoKmT1qzsfFmo9CitY4mdyJEpaSPBr&X-Amz-Signature=17d89de38f862ce21262bfd50eff6bacd8db08cd24fb66f6ab3ba2f7b34e3333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWW4BA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG9CB4H1HCZ0SSiC52f9SyTDFkz0swnTlxTMN8zEU236AiEAjo%2FMu04Amd7w%2B9HZhDfoeuKO3ZIhof%2Bn4WDNUk63FxMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPP5N6LeSF59yKceESrcAyusbZ3AKSkFHV%2BAK9HU%2FYrbFy%2BMBYqTgsCoE0sh8U4tW5%2BdDieKyU4rWlTk7XNkagRLsCtY%2BAh5fEm3Sa76hxI3wZwmk7B5KpiupicaiThAJCpUQyacH4p7lFuirZse3CT80rI%2BWH%2Foks%2Bjn5ZiHxOQd8Mt0wt%2BXKMLSIkNFUeSe%2BwhgenDdnvjYo7eOo3l14%2F3nCN6788oAR8wTGOkby0oY%2BtmEa22pmaJukOUoGgUDbZkNPWJppssFjagtLAZ8SvfjgNlXYcNmC1B15svXiO8%2BXLdjbqbq9CH5Q8XydQZ62hDGHcrkaUPrfNUsSpkyv4sxSQOUjpT0iitQfPi%2BaIPoqpxXvgQ4uP2qz5GZCr1WPzKRvMb2BC66yg0kND2VF02hw%2FxCEz0T6u5lB7tVc3BbHSeqzdsdeKjyjiGhBQVRwfV0yJFt8TiGaGWxY8t%2Ff%2BbnllxnB49VZIjuhITIio7OJRpg9cCyqEifasPajfbRGi80OU9JoC2hCCcCkYakdIpA0GSBrB66tsflDXBbqxW%2FhDuqeuwlmSl9yrk4sqBIrRQ1GjpLpP7%2FcHxHpKpsflj2u9%2BfI%2FgSQUxktpv7gjv1Bh1%2BP4b7D7VsxPgPSMLd6xgFao5IP%2B4SjDaMJ%2FZiMQGOqUBAJjVCrHKwvsZiNcu7u3PgKXvTA2OT9jZVh2UmgJ5nT9GhkJg%2FD5UEssv1dQzbq%2B9r5NS70Fa6AtXRJwqAS%2FyzavNteUr5VboKJEOKseANa630tN7pefC%2BOBnFvxwSnBwSrQkZVbeAo1%2FJ5xd7fjuOGX05IRdWvVtfcTxGtrS79QipUgLXX23SrunMHmGA7VoKmT1qzsfFmo9CitY4mdyJEpaSPBr&X-Amz-Signature=1498f9e94c3e5a358e740887278474ac8a08cd8dbfea4e71d7208edf315168a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWW4BA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG9CB4H1HCZ0SSiC52f9SyTDFkz0swnTlxTMN8zEU236AiEAjo%2FMu04Amd7w%2B9HZhDfoeuKO3ZIhof%2Bn4WDNUk63FxMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPP5N6LeSF59yKceESrcAyusbZ3AKSkFHV%2BAK9HU%2FYrbFy%2BMBYqTgsCoE0sh8U4tW5%2BdDieKyU4rWlTk7XNkagRLsCtY%2BAh5fEm3Sa76hxI3wZwmk7B5KpiupicaiThAJCpUQyacH4p7lFuirZse3CT80rI%2BWH%2Foks%2Bjn5ZiHxOQd8Mt0wt%2BXKMLSIkNFUeSe%2BwhgenDdnvjYo7eOo3l14%2F3nCN6788oAR8wTGOkby0oY%2BtmEa22pmaJukOUoGgUDbZkNPWJppssFjagtLAZ8SvfjgNlXYcNmC1B15svXiO8%2BXLdjbqbq9CH5Q8XydQZ62hDGHcrkaUPrfNUsSpkyv4sxSQOUjpT0iitQfPi%2BaIPoqpxXvgQ4uP2qz5GZCr1WPzKRvMb2BC66yg0kND2VF02hw%2FxCEz0T6u5lB7tVc3BbHSeqzdsdeKjyjiGhBQVRwfV0yJFt8TiGaGWxY8t%2Ff%2BbnllxnB49VZIjuhITIio7OJRpg9cCyqEifasPajfbRGi80OU9JoC2hCCcCkYakdIpA0GSBrB66tsflDXBbqxW%2FhDuqeuwlmSl9yrk4sqBIrRQ1GjpLpP7%2FcHxHpKpsflj2u9%2BfI%2FgSQUxktpv7gjv1Bh1%2BP4b7D7VsxPgPSMLd6xgFao5IP%2B4SjDaMJ%2FZiMQGOqUBAJjVCrHKwvsZiNcu7u3PgKXvTA2OT9jZVh2UmgJ5nT9GhkJg%2FD5UEssv1dQzbq%2B9r5NS70Fa6AtXRJwqAS%2FyzavNteUr5VboKJEOKseANa630tN7pefC%2BOBnFvxwSnBwSrQkZVbeAo1%2FJ5xd7fjuOGX05IRdWvVtfcTxGtrS79QipUgLXX23SrunMHmGA7VoKmT1qzsfFmo9CitY4mdyJEpaSPBr&X-Amz-Signature=45647d826a8193bdef161b16788d246755f31cf3e9435ba085536b0d99cd6447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWW4BA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG9CB4H1HCZ0SSiC52f9SyTDFkz0swnTlxTMN8zEU236AiEAjo%2FMu04Amd7w%2B9HZhDfoeuKO3ZIhof%2Bn4WDNUk63FxMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPP5N6LeSF59yKceESrcAyusbZ3AKSkFHV%2BAK9HU%2FYrbFy%2BMBYqTgsCoE0sh8U4tW5%2BdDieKyU4rWlTk7XNkagRLsCtY%2BAh5fEm3Sa76hxI3wZwmk7B5KpiupicaiThAJCpUQyacH4p7lFuirZse3CT80rI%2BWH%2Foks%2Bjn5ZiHxOQd8Mt0wt%2BXKMLSIkNFUeSe%2BwhgenDdnvjYo7eOo3l14%2F3nCN6788oAR8wTGOkby0oY%2BtmEa22pmaJukOUoGgUDbZkNPWJppssFjagtLAZ8SvfjgNlXYcNmC1B15svXiO8%2BXLdjbqbq9CH5Q8XydQZ62hDGHcrkaUPrfNUsSpkyv4sxSQOUjpT0iitQfPi%2BaIPoqpxXvgQ4uP2qz5GZCr1WPzKRvMb2BC66yg0kND2VF02hw%2FxCEz0T6u5lB7tVc3BbHSeqzdsdeKjyjiGhBQVRwfV0yJFt8TiGaGWxY8t%2Ff%2BbnllxnB49VZIjuhITIio7OJRpg9cCyqEifasPajfbRGi80OU9JoC2hCCcCkYakdIpA0GSBrB66tsflDXBbqxW%2FhDuqeuwlmSl9yrk4sqBIrRQ1GjpLpP7%2FcHxHpKpsflj2u9%2BfI%2FgSQUxktpv7gjv1Bh1%2BP4b7D7VsxPgPSMLd6xgFao5IP%2B4SjDaMJ%2FZiMQGOqUBAJjVCrHKwvsZiNcu7u3PgKXvTA2OT9jZVh2UmgJ5nT9GhkJg%2FD5UEssv1dQzbq%2B9r5NS70Fa6AtXRJwqAS%2FyzavNteUr5VboKJEOKseANa630tN7pefC%2BOBnFvxwSnBwSrQkZVbeAo1%2FJ5xd7fjuOGX05IRdWvVtfcTxGtrS79QipUgLXX23SrunMHmGA7VoKmT1qzsfFmo9CitY4mdyJEpaSPBr&X-Amz-Signature=9afcb8a56102db58df16ca376b5b9cc52371ffbede1971032a56fea2e2e2cd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWW4BA2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG9CB4H1HCZ0SSiC52f9SyTDFkz0swnTlxTMN8zEU236AiEAjo%2FMu04Amd7w%2B9HZhDfoeuKO3ZIhof%2Bn4WDNUk63FxMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPP5N6LeSF59yKceESrcAyusbZ3AKSkFHV%2BAK9HU%2FYrbFy%2BMBYqTgsCoE0sh8U4tW5%2BdDieKyU4rWlTk7XNkagRLsCtY%2BAh5fEm3Sa76hxI3wZwmk7B5KpiupicaiThAJCpUQyacH4p7lFuirZse3CT80rI%2BWH%2Foks%2Bjn5ZiHxOQd8Mt0wt%2BXKMLSIkNFUeSe%2BwhgenDdnvjYo7eOo3l14%2F3nCN6788oAR8wTGOkby0oY%2BtmEa22pmaJukOUoGgUDbZkNPWJppssFjagtLAZ8SvfjgNlXYcNmC1B15svXiO8%2BXLdjbqbq9CH5Q8XydQZ62hDGHcrkaUPrfNUsSpkyv4sxSQOUjpT0iitQfPi%2BaIPoqpxXvgQ4uP2qz5GZCr1WPzKRvMb2BC66yg0kND2VF02hw%2FxCEz0T6u5lB7tVc3BbHSeqzdsdeKjyjiGhBQVRwfV0yJFt8TiGaGWxY8t%2Ff%2BbnllxnB49VZIjuhITIio7OJRpg9cCyqEifasPajfbRGi80OU9JoC2hCCcCkYakdIpA0GSBrB66tsflDXBbqxW%2FhDuqeuwlmSl9yrk4sqBIrRQ1GjpLpP7%2FcHxHpKpsflj2u9%2BfI%2FgSQUxktpv7gjv1Bh1%2BP4b7D7VsxPgPSMLd6xgFao5IP%2B4SjDaMJ%2FZiMQGOqUBAJjVCrHKwvsZiNcu7u3PgKXvTA2OT9jZVh2UmgJ5nT9GhkJg%2FD5UEssv1dQzbq%2B9r5NS70Fa6AtXRJwqAS%2FyzavNteUr5VboKJEOKseANa630tN7pefC%2BOBnFvxwSnBwSrQkZVbeAo1%2FJ5xd7fjuOGX05IRdWvVtfcTxGtrS79QipUgLXX23SrunMHmGA7VoKmT1qzsfFmo9CitY4mdyJEpaSPBr&X-Amz-Signature=59cf8a3ee555f8af618ccee491dd4121973269199d9167e299f4bb477cdd2dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
