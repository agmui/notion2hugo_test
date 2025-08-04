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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=356ce187e16c47b64874f56406d719d42d88c1f1731dc18e53536f6dff0faca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=364679e4a67576aa205fe17833ef5705d6e434a7a03ffd2cea78e6d4e0692f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=902ffe2c57427d30656c193446e31e60072d897a944f3c9be6ec1ebd4907eaea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=62d79608794dcb279194889666dba5ce81bbcf2bafd902e4dcd72d1374895728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=f4be98701479a51e72ebf675207e1793b9aae8c818568b41df03edacf01f3785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=347dd81e75fb72f27af3e7de993a811725ccc0b6967e86369412ae69a4bfeab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=928443c07febc5231572ed8b7bce5087df6d3b5d0f5c60bed1716f10deaca6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=036a0748ef7c3c968c9b92904967e1d9067fd42c7d693ff6f3f5e860f43068af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=615182f81db497dac41d793a000a4cd9571fca88cfa2d42b87dc05605ce2f7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=44eb4067356f2e1ecfb995af6d96e4260fdf521ba0a5e6481ffb78f91a611826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=71ce461fb37f6ea5b357e3758f0184d054e04b3a4d9aeb7a2a48afb203540e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=782b14e8474c2e2b08d79fe154fe7c30c7e0469b6be92493f77d88a9d97b1151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QWY4VM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFQ0VrnEPyR0uVwz%2BDAjv%2FUqAQ3U5DXUF5ANNagGK%2FXuAiEAgShhJCesRp2hcsIA0jsY%2BQlFteFmr5tpwTUOfGI4fTcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDInRDRxlF5CTDMdA2SrcAzhz5loIDqVetZEXcUh3K3quwjMcqw2Kbw1jX%2FwKiBqSXMNC3dikRStFVBGLOUA1X1PsoZpnCT7rLOj4GaHtfkadt1zl5uoz7YvvdkXWshoS9Vt74KODzfeXSXiTwZ9z4Lud%2BkOLc5Daf%2FgnzYOszELiSbEgMiTqA3QRY0DMR%2BqDMgwQRGPXaOVfqiUZkdNwHicSkDk51jM1duRPy2ADTd2dXhNImykN7ZdSmEErhAFScnosTpQ6SKvnDxLKYYUYDjp1RYaornqdydsVT02gj%2BDqg3kr3ANCqsogtclwRfEHzSxku180OIIn7uSwEtppcRtD%2BxC%2B0O4iJT58AKCzhRe%2Bw7YRW2Yu8Y3vipQ6M650mpF3LTImnXbfanTX0RfFN79qZGb23EdzMLCOdFYv1TPkBx2OvY5C1b2PtE7%2Bii8XkBQnrfpuA3qpFr%2Ba5diz5E2nvdlh6jRydYqugXfDQT1ectGIHN8f%2FM3N35InHgo8OfYJxjJZ2Hbiyt47OGePe5Jo2VDaCWHkY3MQ1vZorjWrnuNLV6YJeiJiSUFddjMpHXDI9GZqF7WbDGGeuAzD0WNFgSasPMAI%2FSviNNXtMUBEz3yIlwOyd6UYUpSJG5%2FtP4m1nXxr7xQoR63sMKmmwsQGOqUBoDqztuPiUww3ff3voNMb00bQHmGDVCONOBM7nvYPiciavtgHcQwXUOWdhAKl0A3irdRsXqwzT3nPPkWtwhV0FS8QI629rjSYBXnDEhdlYKp8EKeM4Z1rioE6I9EtpETYB1bAEGqVE9E3VwMUmm0XD0usC4BMJ7uFDej0zM2SInNnGFKxEUtvphE4OIsUkhhpc2l9ZXasYRKbrDWDkk30RxelTm%2Fr&X-Amz-Signature=1479f68cd3d54be360cb219dd02179758c48e8a19d586f5b2d67ae6701f580e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
