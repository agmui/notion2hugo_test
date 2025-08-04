---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=3afbc219cb055d672cae5b9b7a147247579f7762007d3b7980405ef9d1592e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=992524cd02f64fdac8c13313bba4028c73f8f697c003c0a3b6424fe7ae199c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=c2b9ab7e2fb674c5d328dc125cda8d7751e00cb2e081fd15769c0b15b2a09c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=2ff255c953d97216566d332f25ca7fa8122a20e543a31d56fdf225ea54b8288d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=90a2184bc8c92cde481016e384a0a107dbad12a4fd6930b418b78bba4316f89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=ace95b5c05b6b42133bc72831b607715504c2330c996f90fd1c6b5852b6edf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=cfc9971b5da9e494d30506de0548a318013ca356c13137a10b433f0348d6e1fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=dbcf8753c6d7d67031a7ce1405208f0326b8da06b725abf73555c4079ccf8d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=a73f11d5f0f2fe39392cf72c2a7d24bfac98e4fa82f6677dd8fa6b4a2e3770b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=24d6b5bf0e2027162e0f389ed8b3c7302895225028eb5b50091bf53b24e5cd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=f8f3f845bf9e19f57ea06247deae5d983987609b29cd00afc8cb6037b45f83f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=0e721d3b78aceb3f023492d325913f5bada093ce741af1f4209e70590bc2f00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MESFM6S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIAKgrWyztuOsfyaPcsF5itQNZYDsJCvm0pge99vzRfn7AiAuNgDSvFVq1BnwgAj0%2BxbCgGipnpwNMraqY8rJMPnvgSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM5V4YqyytzMx9%2FjkQKtwDKKPXxwYd9yropVFJmNH74f5If%2B4AfFeA0%2B0LcPQ9SLBD58czRG2gwGijfzQuhTWOt042qYZu%2B3siutuM4z18%2FFTa5%2BcGtWAzAj4QT%2Fxz4W2S%2FclhUJQoeVFDkYOQsV2WWrZFNveL0arxnXuG25Lw%2Bqa%2BdCXZtQnMiqkdDnMdn2tEh985fiRS0Q74Yn%2Fu%2FvADGDCd%2F9A8BArxV%2Bn57DWBO9AUJ6z6c81pqhEz86OmSHzlra6Eks2Q%2FBNQMQuPemlmIChW88TGhYKVJlc9zRYNNHt5bguqO1pJmXUfXEgOaG5Q7P2UWROW8LL5GL73AKY9SDzLMbay6ozeR%2Fd7xjfBCW134Ti4wpZBbdrBuZAJUS3k8W3OKwkintZUunWXPtesKlB6D%2B0wrmlGWl1qP6ssxRMY%2BqdA4%2F7EqMKVCBck52iK4Mkrak7d6Jvpox6ZLRHqohm39NWdHky4Ia4CwzRtUMe50%2BbZahyd2%2F1huE%2BRQHKcrLgv6Zi0J6v0O7Ba5OFDY%2Fu3JCXze%2BqzhHQ2H23HDdMERyaGXkt7IyuVlI63KrahJLqBHzIy0fyS%2FW0su5KthYoDiPrIi4hmQO2dSJvDp7DXytk6HTuT5kef%2FY80RKevtbPfjvlttXRUbH4w75DDxAY6pgFBmIQyPtlVigLir1pkB%2BtOMdq6NIotUEqKKTGu8gS11K4Ofeef%2BMDkXCyD00%2B16GaPaYT09GVzi2vdJdibXLFW6qB5YNAht8Cb1hoZ4lki5d5lyRfHe%2BQpNRorAI1fYwAP%2ByaUcg56Ku954R2CmnEHbMpdUD16XUdJ2hU9ZP%2FxwH0PoMAtFsYEwko5fHIL%2BkmwNrYthvW1dV%2B7YkMGZjgYCNwFyObD&X-Amz-Signature=ce16c8c7ab4d1de7c3c2049d7306527948e4e23e04759c931ea7674ac9cb2423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
