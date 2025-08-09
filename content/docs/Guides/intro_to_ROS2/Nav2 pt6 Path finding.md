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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=682429ca3f0403a475c6d286677bf1469149a8c8963f84f5e2563bd554cb2db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=1c0c9b1aea921907d5e84f0463acbeb173efac06dc3b697efcfba371f2c2b695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=40f140973a9fa722e77edd0259694f47d74b7d215d09c518223f412e52de0939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=85aa214a38fcca332c502d03ae4ee94f51b9ab129f35bc28059228d7d4799654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=25c549504f5cbf2b1188e36eaee38ebf73a89c72ebfa2297ed1285365eb4d6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=2ef14f3165a2438b8d8e45d254d95722d1cf1a7c333546d0462782d6ffc3d196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=933c5265683fcce3fcb9b344354714280aa5684755f292bd26667e1bdbb9bad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=9ad1e6235f186c6cb39bd4760e52801b6d47d0037c0bc8a5cee7c10db5a4ba1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=3f7fa08c7bad792543ff84e47da3392ce69f01dc9a34fed4459f9070fb84f85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=f2e0ad9875aad4ef84f526bfe035b235907e54aa00ffd6b798b4d419ce1e7a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=4919a0d856e4b95606587bead7e943c640610554033b4c18b9a30699ca1c59b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=1db74064a3681c32a4e2fde82c1c6ad9274de0848fca7bd91ffaa0457f8bf215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFD3L5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkpgersZbGpJ3xgZAYn5JpOWqo82HybTk8yDwek9o4iAiEA0aymFewhM0S6Dw6S6%2FGsYaqQzooWZ3J3X9XlqbqCmmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6aZnLzJykTdp%2BCJCrcA%2BNG6X%2BgeKGbN9oIHD79toHhgRTZA9MTLncmPoyJHuCPMFtQtI3nHQCfMJ67pvqUpxpub%2FER%2BrH%2FjU0qCCATr83%2FAOXCL0fXCMyPCW%2BpwpPCzCC0xOBRDaoJjFRlhlvCRt7ErYQScsAqiKwMxUqztCONH5tfi%2BHudORycajjz4v0JZ8p%2BreMbyUlxxiYLRbEfi2meThFrf%2BZ6lCOPNyM6q8cKr%2FiOWmT5zuL1XvHxxIr%2F5aY8MLJqRwkg6APAjHv7xuf%2BNQI5b%2BDp62wUd0QX5cotL7FKtoS1i4DQ1ZKc%2BUC%2F%2F%2FVxEPEl56yjHTjHab9OUZAVF7CD%2BZ5nCC%2FeRkb2vg3MjmQa1B2xd1jrzVqvzcu2OdAbEViOLNXmqjHzUtzB5I3Q838kbiPWF80X%2BQRCXkq4P%2FOVnsSE4hpMybQd0LgFE3Q2Fa0ZIfzU5dMsZctSIR%2BpLyivYXo1WmRDNcykRxCT90MlCXHpp5URoVKt2QhArgUeUmIEnsm5RSVgruHggkGpXkvcRGfYoPIS1BctBSlmjZtG%2FkbZPdCUMToru2RkHSZHXmQur9xOYNvYzkI4dIUHxqxh0Ocwpnp1%2Fvhc1322gfzTKoh6soece2HvXMtMvmxyOdcCtG4tL9bMNPp3MQGOqUBw%2FzW9yanJT8hicLxZXuG2puOF5hjbcFBcIrmsyV4xp7KYDRzedi96VmRRCuSy%2FBBtWA5iUt7WozxTlLYLMVR5oAZzX4VSWVQmQGIWTKUnWp3gMW72Jsv2XyUeI%2BR%2FSzgasSUMlnCs0uurxUD%2BEYrVpeC0Jl5oaPVuppzpivTHrW8olXcS5t5oy3zCFlg6DIkTPTinwVDGuu1LVz8fK1R1d1Y6aSc&X-Amz-Signature=7a63eff0b358592c6f4e99f83c8a4c23fef149c9f746928e5ee6fea61f42c413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
