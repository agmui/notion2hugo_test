---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=fb9af9130a8605ebd4a645e3c7263ae3d1c2e02bc4a1d8f181783fb7f03cd4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=bbe947651f669b7490fecec135aca9f5365ee0b65982a4affc658c2e9197753e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=e5a59ef866cd1ef9e365c3dff7c88b3b78190e942eab1ae8c18cbd59265a6101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=a67af6ee55ee20b8b56ffd8ebd02ae2e48e4882a0fc44608bc133229690f42c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=12ae4f2c5c0dede78962544f5e6db1b6b377cc4e10978347695b0b8d00dc2384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=c00bcd3e45e55fdc1a7ab789a264ccaec7d1fb49ac545d37c9e6d4dfcf2bad24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=494710c0bae720978ab17f9ce7e6404e343eb30b7a681d169370c5fbea8648d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=e90b56e8ff15f60e119e262d2afdeb2d94db5d4fa059335b2d463f582e242067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=2d4e3a7b017494090f1417c0688cffbf823c048ef4ca34326127ff83a9522eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=01997460586e01e17c6c824f6da450bf50e2ae362796b071fac6e60d24354478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=28e958545e91102ad5995dec661d022ecb8dbc06b89e771d10119940997a2e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=9a6840f0c4f25eff3f942fef884bee5599f8a21fd9fa2cf8d0581d91e3cb24ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUEGCS6%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH74ELxREmY1bx9MmThUK81sWhRmfa5FVjBwD7L%2B5GMAiBXoo6eZnxqtzEQA8dckFxI53Lm5%2B%2Ffj4TZy6vfklgyQir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMaSX2raiPPpWQNoP6KtwD6clP0vtgmftsia5yRz6753wYiVi%2BhXHL1ynodRZKAaAKYnNkuSyjbnRUAD%2B7hrR70dTfpPNoIYKL1f5cg0NyJ7whqhIxmsxP24yjbv4LphZgC8wXmn%2BTmT63qJe6L2EygCYtYgpV2E9o7qBn22yTC1LjIcbsi1DKkkVtXTN9M9h58buID6UjPXDX60nTIO1NOsYMrCifKFiGZkk7%2BFXV17%2Fo06dFm4xAmBCFwKUKS15yMd4qwmaXa2dOMgr2iS9TNeUSptm%2BAKSvLeKiQpkwjLJNGxxBnxsnNw0kDqH0BsGIwucSYwlgt5b5ui9KNuoYgBjrt%2FmkbL6pClc7nGd6RftCOy2YSFkyHA5I12M%2FsPdqQCmxFLcJxaxsnjvT0idlG9iO2LNQnaVcE2SS0LdbavZV4Zh3NljReK0C%2BU4NQZX2hUpksrHLNaTQ6AtFYRW95j1SJoXMM3eqK70AUR4cXkeY8WQEf2ws8Xm5045pg0ZR7zEeOSBTo8YbnXXGhISqfsSTjQpsKvLtnox8QxOK3iyeDQ1NkRm3rk7iAz7v5mX9SMzabGs%2FlivRVrpVawc0Gr0FcisyfGDt6O0wS91aw02QX%2FX3rQy2%2Bj27B65M013Q2SZ0mL6aT22kxYYwgdLJ1AY6pgFHA%2FIvaqDezy3Km0oyNpTAKYI3TJoI6nyFyhlo3vsrTWWNOHJHfX94TqkISwJtc%2Fz8kVrBpSg0sQRbeRKsdPfSsLKXpToFtfQBGsfQhOK5zh4Oj3njj2AYkd6mRhkuS1Y1PIwopVANO0%2Bzn9Ntzc%2BrkV1kBxF3lauc%2F0kYcpJ11EJcKkdtlbFyP3t7Pgb3y9DEb6jJuegVOtwqfIEs1Wm5n4vji7WD&X-Amz-Signature=79c06aaa8eba8c46a11c4a51428e784de274dc5f21503f24958d9a4251c9ea41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
