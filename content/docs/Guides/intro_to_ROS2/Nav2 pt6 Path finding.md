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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=c20fa2b7470bd5d25e35f0977a7bae21a142dc70cdc1fb94afc5f86be4458df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=171b5f6623ca221023573db55bbd8df1e2ffae6e74d2266285632e479c6f4239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=5b5b2a4a5dddf423f4162a8a8f7fca83ec1e5f45fbb19e18047f9d72ac3667fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=7d1cf50edfa25a20544d993b9394a98b4d9226c8d29e97f193c050cb0d5f854c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=31fbee03d5b3edb401749150fb41212cd65d5875831b1b993e4aaf1d5933f3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=4c3067c0e4a410b8e5bf33d91d328106b436a6d91a4a53260728b983244339c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=7c228d86099f722ad1b9d4c50e5d36a94698c31bf57417b56628be0c752331b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=421abd535c3908f8f2bf7255b6bd2b996761e771738de6027c0ad86d6440b0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=587ea6d9ad8573d764ab1c916bdb6fed3dc4d77bc4bd5b9d6d4041ab4ab8a814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=7aba49cd6c4e41c9a8e11f7766e7d4489c559e2e8cc4636d13ed707e1d080f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=19b8fc8701296b8082542ea96ec3c9d99349e81809354e8a1c07f4c7d72faf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=497d49d38b4ae176b634fb465779a0a362f4810a71294b380efcdf456bbf64a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSSGPFJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDiDns3Wt00c574T0JZZeIGYQBp281QJob1xItd9rPN9AIgfmCsEB2fi9nu6%2F1kxfu2lIe%2FEYC7b%2B5ohWTf1BlIjM8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPaZecdcHkfTlbtkSrcA6ijQSk%2BlfbhoCMoTzGGodmCQvs%2Bs0l%2Ft%2BGV7NnHt8%2B4kNl05AwinyrchH5Dr7rNJZfPeyfL1xrP82mSzc3GMD63NJnGbXtSO17xp7s5wlS%2B4gnSAdHslqsW7nWGCzvaqgisthNHbBc%2BJn8cKd%2BmcHfRVetrRPP%2FwgRknO6ozek5VUV9V5kd%2FQxZNwabZDAKHKjGlFuYXi5TOoaf1UK2f5uW2nxVAP4AIk5B3SMvLzoWdsoluDamD59Q8eW8TMYrhd1v5dEXQIIkwpRYupCowcYY4pKwh8%2BfdjGLESUjzgba4JATXE%2FL%2FVCoBKbDoacf7xEqkojilM7OPWOu65wlbCxYI7%2BxjtCVBnnZkaO19wiT8C4MGl0IYmBIGdy%2FZVtOirpoZF1Yrwp1Nga%2FwyQYC%2FxDB8pxquowL4SaEEIN9r9tbXQYWJHCF54BN61xmUKk0IA4xbzjtPqNRVYXXWPL3PWS%2BE7U%2BZ%2B%2BmnFE%2FHXeR%2B6ps74oW%2BSZou4KwENC99HFDKB9ZLGKGDMtzMxwVOgpzJRUYpPgNq8CKAYo8hP%2Fk%2FU%2F3YWddF3Vv12UW8DZSWRx9Gtl1CXIhlslr%2FNo6IV2P7mvocQUj7xUtXeA1Me8dyUmdzCRNimAR76ITj%2F8MKWn2MQGOqUB9itxwvhFWB5FScCVZ1M3p6eXOZT4OflTAielr3HcgwGB7ERBfPIb2bG8Py%2FYuZqVCE8X0sFFxAyZiVog4P%2FfrNhso6hGnZSPkG%2FpTbo%2F0bHuiWGznoS954dkwFuJ%2BFiNgig4vB4r8RBCQxaV7RQg0bn8gJApnL65DuWJKx2Vs8Sc0dnRBtNLhS3WVjnEk6lprhx%2FNyLIjFVf6P85wMV4ZjrXnqE4&X-Amz-Signature=2ec0ff1fee21272e997bc2097a6775c1d97e4ddeb93ff2aca70f92f063f983ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
