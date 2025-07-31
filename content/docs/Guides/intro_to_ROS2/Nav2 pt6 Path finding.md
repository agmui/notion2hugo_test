---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=4ca5369facd66f3ebc453f5821966bf9a780592c5a091a0dfa62d479a8622a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=fd75089bc1ed78158f7e7485614eed65db5db1b0a927cd5ec16eccfcb775df43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=65c9ee2c8fb93eedfbb4918234cbea636384e12ba6b64988bd34cfa29d01b6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=9ca666d55ac9aded60d22300aaa446f0f3a593d9963b879ae9a3e3224b4129a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=b37780304a351f896230a43768ceed16d564cadc949115495b5fe2a018bf9cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=28266fe2a325684ac0e6b9babcaeffbd1a831413114cae16d44b19ce9061cbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=e035efbaace5d0bc59e99217693bd26a4d537f6ac9067e9809f54f31ef891f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=2ec37b8887d2457b937d22e5b28b92d239b2faea73913e762e3c90cd3492604f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=02172684177c4540d031b1f94f2b1e5c650e859640a7553ce31ecce4909e1575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=c4e601b6fc5d54e854a1d2467a88699fa3612077ce5e8ce2c403ea60f0ee2eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=c7bae706ecf591431d3934fd0d2873966f261f5c1467bd466319686103443db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=60ff53bb73f29ecef7458a231fbaef5e4cbd193bbea63580b89b5f1f6b533b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKOMNIG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8LWiSWEYdn9on8Kl0L4%2FmQWRS%2F68DQyNxs%2BEmWOTQrwIgZBgigyKD%2BUgk7teQXOW85eo9LWhQ1%2FqI8YGJfcWeD%2FEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4u9rd6zaAMJpfZyrcA1BROtEYn7mHrYly7soJpZ4i3BaLCBV7UrNAMMtKqE3%2Bfz%2BUSCAKplQXwILZgb9nJ1QL%2F9XnA7yZMRd52NxmlvVBlSwQpHNrwtcy0GG6ofiAjfuT%2FppSe4QMLxbEHRig%2BQ9wv9WslGblM%2BWXSAC1tvIjIZnUEKMB032oQ5GmtKGJggx6HSVOGAG9ENbIs3k5ifVv8UHPK2u0xtEl1CWhKd2zFJXrE3wA3gwTO%2B9SVupCrugR6JEGoy13MoaXvQP%2BaMS6Vd3zxD%2FG3y5KUaICG6oviMg1mHId9lfKOP4myn3POXOaokII9IbU5u93onnZrcFkHqX8HXXgndkOhBrN5Pou87COdVoOlSr3VwVCKRWEfbJ6U6%2BQ0Vc8qJdLaM5IXtY0GeC3yao3JDlVV0Cj9AxHh2LCl8igTrU0%2BQYskbTq4TwtTLKRc0E2safI22%2BSLKRaRuYM8MxLiKeKnMa4Rrwx%2F%2BYRSNtDDdYNkjuYhMvlgWw16BUR5nfaOynL17Hz1b0zncgzjPRRCRji18f7SA1Fi%2BSsduDoifXdCSrxhcgbzm06V5BocJ322BdgBU7DrbD0ePBEpFbXIduOYbXrhJ7v3oMikcE8Q%2BQOMx8Qa6pSH8ftV2tguz4AmX9VMKLprcQGOqUB%2Fybhh58kt71NA726TVCL1jcfGeUE3MlCflE%2B%2FJ%2FSKnDq8E22M31B82HZqTg%2BN2IepakW0jYHMfgMQWNXg91NTcy0alhi8og0ck7c%2FeRegD%2FQiPJUqftT%2Ft6RPo5JZFzZN9vOymXJcg2L6lP7zijcHGGFi6iQqM3QRd4HKd0yQvCDu%2FRQfK1XXaZPd%2B9714heond4MxQy6lMDb9tppjD%2ByZR35BYJ&X-Amz-Signature=39c11bcd7dbca84abb8288dc001cf0ee0f4766cc63ee5de60fe966096aa858e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Nav2 settings

TODO: change footprint?
