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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUFLYPR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDqOAybYK8IX35GYnBRtCs4E0OrTi9JCG2KXRC9eEPsMgIgFKnAzRaK7FBsrhXYyyQ35GFRjdikHZdzS4Xl7r2VMBoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLYS7FsrItS7lVHuSrcA9JFYojwDMMAMKZ617wPQLPAo%2FC0Bm6VaulpWxpBw14g7Xy79%2BdmWz%2BLxm5TIaZV6oCw9%2BwyAAfsB6R0AdgayVGnwf6TB4v%2FrOAC1MH8UIFxUOLe5QtkmgCp6thHW2hw1O%2BizSTgJg0zy7SvokoQMsr4Mzmweh0slMCTUq4TzXG4a6AZAe0xsZihyllGUVb6ZUTrh2ImYDZkJPAdByXsenDYL9hMX6RYMzjVk4WkFLVrZpNJ1r%2FJTFS%2FXfAfg3Vequ2ZBk2251jsVcnnTjLY8kmN15fPoa6aKIzUl%2Bp%2Bx7A6deUd04zXzUO0F0d1NGPmykmV1LaBAtAvi%2Fd2a4J4U8nKFRXamqibtV6pVaBdtKiZS1oFBy1fHryc9M18msXoV95sEGO4VBNYbFRQm6B2MOOfQg%2BG19CxzW%2F9GXqo0j5DGQg%2F4VTCDaUwXx0iQtDOvX0niI58W%2BCneHDR3afNaEyLddAJS%2BiCJvZJR6OgGS249u2g2Kj8a1aRByL%2BXSl25J%2FLkb6PIYsj1skfL9Wx3b4I3hdVJovRy69zWhVSN4VJhqQXHEsMN9R7yHJoSXw8%2Bd4hKuIjLI8%2F8%2BYLHY1kO4k62lujJohH0tMlRMbLUnNAlc3%2FLIJ3GPeFTnC6MMb3kMQGOqUBQ4l0G7sT0G5NkShnS8YcdMKesb6FbL5X%2FfPgUSCtLuY%2FD3lO0Vql6%2FCYZCCGYzK4W6EbyotgDLHA2B%2FVE6uBstiAolHnwdN4dDDAmohftQxVD4IaX0SHw6OLETdJntz1KbR1d0jzF9aGG1O8URtOORIev74ibmDM5zoO5jm%2BpMFY34SMJVE%2FaLk0ky%2BpXoubK7TjUy7niK0dobVMoa4WRg7fB%2FPU&X-Amz-Signature=1b0345e23fdf29eaf228edbfd3145f2e63fa29b8bf828af4b0c745626bf9ce38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUFLYPR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDqOAybYK8IX35GYnBRtCs4E0OrTi9JCG2KXRC9eEPsMgIgFKnAzRaK7FBsrhXYyyQ35GFRjdikHZdzS4Xl7r2VMBoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLYS7FsrItS7lVHuSrcA9JFYojwDMMAMKZ617wPQLPAo%2FC0Bm6VaulpWxpBw14g7Xy79%2BdmWz%2BLxm5TIaZV6oCw9%2BwyAAfsB6R0AdgayVGnwf6TB4v%2FrOAC1MH8UIFxUOLe5QtkmgCp6thHW2hw1O%2BizSTgJg0zy7SvokoQMsr4Mzmweh0slMCTUq4TzXG4a6AZAe0xsZihyllGUVb6ZUTrh2ImYDZkJPAdByXsenDYL9hMX6RYMzjVk4WkFLVrZpNJ1r%2FJTFS%2FXfAfg3Vequ2ZBk2251jsVcnnTjLY8kmN15fPoa6aKIzUl%2Bp%2Bx7A6deUd04zXzUO0F0d1NGPmykmV1LaBAtAvi%2Fd2a4J4U8nKFRXamqibtV6pVaBdtKiZS1oFBy1fHryc9M18msXoV95sEGO4VBNYbFRQm6B2MOOfQg%2BG19CxzW%2F9GXqo0j5DGQg%2F4VTCDaUwXx0iQtDOvX0niI58W%2BCneHDR3afNaEyLddAJS%2BiCJvZJR6OgGS249u2g2Kj8a1aRByL%2BXSl25J%2FLkb6PIYsj1skfL9Wx3b4I3hdVJovRy69zWhVSN4VJhqQXHEsMN9R7yHJoSXw8%2Bd4hKuIjLI8%2F8%2BYLHY1kO4k62lujJohH0tMlRMbLUnNAlc3%2FLIJ3GPeFTnC6MMb3kMQGOqUBQ4l0G7sT0G5NkShnS8YcdMKesb6FbL5X%2FfPgUSCtLuY%2FD3lO0Vql6%2FCYZCCGYzK4W6EbyotgDLHA2B%2FVE6uBstiAolHnwdN4dDDAmohftQxVD4IaX0SHw6OLETdJntz1KbR1d0jzF9aGG1O8URtOORIev74ibmDM5zoO5jm%2BpMFY34SMJVE%2FaLk0ky%2BpXoubK7TjUy7niK0dobVMoa4WRg7fB%2FPU&X-Amz-Signature=c13baffb28fee6cdb9cd3b290609b111c4739a776ea14c1cdf3a7cc4539e7922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUFLYPR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDqOAybYK8IX35GYnBRtCs4E0OrTi9JCG2KXRC9eEPsMgIgFKnAzRaK7FBsrhXYyyQ35GFRjdikHZdzS4Xl7r2VMBoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLYS7FsrItS7lVHuSrcA9JFYojwDMMAMKZ617wPQLPAo%2FC0Bm6VaulpWxpBw14g7Xy79%2BdmWz%2BLxm5TIaZV6oCw9%2BwyAAfsB6R0AdgayVGnwf6TB4v%2FrOAC1MH8UIFxUOLe5QtkmgCp6thHW2hw1O%2BizSTgJg0zy7SvokoQMsr4Mzmweh0slMCTUq4TzXG4a6AZAe0xsZihyllGUVb6ZUTrh2ImYDZkJPAdByXsenDYL9hMX6RYMzjVk4WkFLVrZpNJ1r%2FJTFS%2FXfAfg3Vequ2ZBk2251jsVcnnTjLY8kmN15fPoa6aKIzUl%2Bp%2Bx7A6deUd04zXzUO0F0d1NGPmykmV1LaBAtAvi%2Fd2a4J4U8nKFRXamqibtV6pVaBdtKiZS1oFBy1fHryc9M18msXoV95sEGO4VBNYbFRQm6B2MOOfQg%2BG19CxzW%2F9GXqo0j5DGQg%2F4VTCDaUwXx0iQtDOvX0niI58W%2BCneHDR3afNaEyLddAJS%2BiCJvZJR6OgGS249u2g2Kj8a1aRByL%2BXSl25J%2FLkb6PIYsj1skfL9Wx3b4I3hdVJovRy69zWhVSN4VJhqQXHEsMN9R7yHJoSXw8%2Bd4hKuIjLI8%2F8%2BYLHY1kO4k62lujJohH0tMlRMbLUnNAlc3%2FLIJ3GPeFTnC6MMb3kMQGOqUBQ4l0G7sT0G5NkShnS8YcdMKesb6FbL5X%2FfPgUSCtLuY%2FD3lO0Vql6%2FCYZCCGYzK4W6EbyotgDLHA2B%2FVE6uBstiAolHnwdN4dDDAmohftQxVD4IaX0SHw6OLETdJntz1KbR1d0jzF9aGG1O8URtOORIev74ibmDM5zoO5jm%2BpMFY34SMJVE%2FaLk0ky%2BpXoubK7TjUy7niK0dobVMoa4WRg7fB%2FPU&X-Amz-Signature=d68702c3ca0a7599e5ab5bdb66ad5840e03742321d4b7a858e7a32850b7539a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUFLYPR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDqOAybYK8IX35GYnBRtCs4E0OrTi9JCG2KXRC9eEPsMgIgFKnAzRaK7FBsrhXYyyQ35GFRjdikHZdzS4Xl7r2VMBoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLYS7FsrItS7lVHuSrcA9JFYojwDMMAMKZ617wPQLPAo%2FC0Bm6VaulpWxpBw14g7Xy79%2BdmWz%2BLxm5TIaZV6oCw9%2BwyAAfsB6R0AdgayVGnwf6TB4v%2FrOAC1MH8UIFxUOLe5QtkmgCp6thHW2hw1O%2BizSTgJg0zy7SvokoQMsr4Mzmweh0slMCTUq4TzXG4a6AZAe0xsZihyllGUVb6ZUTrh2ImYDZkJPAdByXsenDYL9hMX6RYMzjVk4WkFLVrZpNJ1r%2FJTFS%2FXfAfg3Vequ2ZBk2251jsVcnnTjLY8kmN15fPoa6aKIzUl%2Bp%2Bx7A6deUd04zXzUO0F0d1NGPmykmV1LaBAtAvi%2Fd2a4J4U8nKFRXamqibtV6pVaBdtKiZS1oFBy1fHryc9M18msXoV95sEGO4VBNYbFRQm6B2MOOfQg%2BG19CxzW%2F9GXqo0j5DGQg%2F4VTCDaUwXx0iQtDOvX0niI58W%2BCneHDR3afNaEyLddAJS%2BiCJvZJR6OgGS249u2g2Kj8a1aRByL%2BXSl25J%2FLkb6PIYsj1skfL9Wx3b4I3hdVJovRy69zWhVSN4VJhqQXHEsMN9R7yHJoSXw8%2Bd4hKuIjLI8%2F8%2BYLHY1kO4k62lujJohH0tMlRMbLUnNAlc3%2FLIJ3GPeFTnC6MMb3kMQGOqUBQ4l0G7sT0G5NkShnS8YcdMKesb6FbL5X%2FfPgUSCtLuY%2FD3lO0Vql6%2FCYZCCGYzK4W6EbyotgDLHA2B%2FVE6uBstiAolHnwdN4dDDAmohftQxVD4IaX0SHw6OLETdJntz1KbR1d0jzF9aGG1O8URtOORIev74ibmDM5zoO5jm%2BpMFY34SMJVE%2FaLk0ky%2BpXoubK7TjUy7niK0dobVMoa4WRg7fB%2FPU&X-Amz-Signature=bb7251f8360fc3335f684ae7bf78546d463232654577e7758af9d3bddaf1640e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUFLYPR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDqOAybYK8IX35GYnBRtCs4E0OrTi9JCG2KXRC9eEPsMgIgFKnAzRaK7FBsrhXYyyQ35GFRjdikHZdzS4Xl7r2VMBoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLYS7FsrItS7lVHuSrcA9JFYojwDMMAMKZ617wPQLPAo%2FC0Bm6VaulpWxpBw14g7Xy79%2BdmWz%2BLxm5TIaZV6oCw9%2BwyAAfsB6R0AdgayVGnwf6TB4v%2FrOAC1MH8UIFxUOLe5QtkmgCp6thHW2hw1O%2BizSTgJg0zy7SvokoQMsr4Mzmweh0slMCTUq4TzXG4a6AZAe0xsZihyllGUVb6ZUTrh2ImYDZkJPAdByXsenDYL9hMX6RYMzjVk4WkFLVrZpNJ1r%2FJTFS%2FXfAfg3Vequ2ZBk2251jsVcnnTjLY8kmN15fPoa6aKIzUl%2Bp%2Bx7A6deUd04zXzUO0F0d1NGPmykmV1LaBAtAvi%2Fd2a4J4U8nKFRXamqibtV6pVaBdtKiZS1oFBy1fHryc9M18msXoV95sEGO4VBNYbFRQm6B2MOOfQg%2BG19CxzW%2F9GXqo0j5DGQg%2F4VTCDaUwXx0iQtDOvX0niI58W%2BCneHDR3afNaEyLddAJS%2BiCJvZJR6OgGS249u2g2Kj8a1aRByL%2BXSl25J%2FLkb6PIYsj1skfL9Wx3b4I3hdVJovRy69zWhVSN4VJhqQXHEsMN9R7yHJoSXw8%2Bd4hKuIjLI8%2F8%2BYLHY1kO4k62lujJohH0tMlRMbLUnNAlc3%2FLIJ3GPeFTnC6MMb3kMQGOqUBQ4l0G7sT0G5NkShnS8YcdMKesb6FbL5X%2FfPgUSCtLuY%2FD3lO0Vql6%2FCYZCCGYzK4W6EbyotgDLHA2B%2FVE6uBstiAolHnwdN4dDDAmohftQxVD4IaX0SHw6OLETdJntz1KbR1d0jzF9aGG1O8URtOORIev74ibmDM5zoO5jm%2BpMFY34SMJVE%2FaLk0ky%2BpXoubK7TjUy7niK0dobVMoa4WRg7fB%2FPU&X-Amz-Signature=a678c28ce69fe5bd050dcff71354c039526dd6f1a17dd32db4a303d319e25135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUFLYPR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDqOAybYK8IX35GYnBRtCs4E0OrTi9JCG2KXRC9eEPsMgIgFKnAzRaK7FBsrhXYyyQ35GFRjdikHZdzS4Xl7r2VMBoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHLYS7FsrItS7lVHuSrcA9JFYojwDMMAMKZ617wPQLPAo%2FC0Bm6VaulpWxpBw14g7Xy79%2BdmWz%2BLxm5TIaZV6oCw9%2BwyAAfsB6R0AdgayVGnwf6TB4v%2FrOAC1MH8UIFxUOLe5QtkmgCp6thHW2hw1O%2BizSTgJg0zy7SvokoQMsr4Mzmweh0slMCTUq4TzXG4a6AZAe0xsZihyllGUVb6ZUTrh2ImYDZkJPAdByXsenDYL9hMX6RYMzjVk4WkFLVrZpNJ1r%2FJTFS%2FXfAfg3Vequ2ZBk2251jsVcnnTjLY8kmN15fPoa6aKIzUl%2Bp%2Bx7A6deUd04zXzUO0F0d1NGPmykmV1LaBAtAvi%2Fd2a4J4U8nKFRXamqibtV6pVaBdtKiZS1oFBy1fHryc9M18msXoV95sEGO4VBNYbFRQm6B2MOOfQg%2BG19CxzW%2F9GXqo0j5DGQg%2F4VTCDaUwXx0iQtDOvX0niI58W%2BCneHDR3afNaEyLddAJS%2BiCJvZJR6OgGS249u2g2Kj8a1aRByL%2BXSl25J%2FLkb6PIYsj1skfL9Wx3b4I3hdVJovRy69zWhVSN4VJhqQXHEsMN9R7yHJoSXw8%2Bd4hKuIjLI8%2F8%2BYLHY1kO4k62lujJohH0tMlRMbLUnNAlc3%2FLIJ3GPeFTnC6MMb3kMQGOqUBQ4l0G7sT0G5NkShnS8YcdMKesb6FbL5X%2FfPgUSCtLuY%2FD3lO0Vql6%2FCYZCCGYzK4W6EbyotgDLHA2B%2FVE6uBstiAolHnwdN4dDDAmohftQxVD4IaX0SHw6OLETdJntz1KbR1d0jzF9aGG1O8URtOORIev74ibmDM5zoO5jm%2BpMFY34SMJVE%2FaLk0ky%2BpXoubK7TjUy7niK0dobVMoa4WRg7fB%2FPU&X-Amz-Signature=2b48388e3d57423cbb89c038fe19602e0bf3074448b2b90223f52e4ac37d5868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
