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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=4da92607e334850f665982f5f92ce3674387c4217b698762c4812fde2d8e3125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=4077c2d07f451bb91bc87c06fa21aeb268e5fe0ea719792ea8e75b3e0ac32e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=93e4d8813a0b20336a57c736c42229f6fe8ae62de4cd3773f1c91125026b7b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=60736be25d349cffd5cf211bbba2a223d4ffb0a1a4d786e1112a14fc9c880dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=7275eb007d463ed6fde155e89d28d399265190e8c39ddcf1ed0491fef7d82e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=2bb87724a6077f78e8ee442a334c7d02713577ec3811d3ab1f2be19eb47ee84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=df0fffba031e88002dcc18f80ddcc8ce07c438ca3c24a4de22120924f1d52842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=84bc9bbce0b6b83685446d4cd075f335934c36ed0e0f60cd923e108e67cbc19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=268f4d088b5270dd1cc9b9928ff77c534a01775688a501e3940f026fa8225f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=5833f925451842c6bf7ce257c7a30e73ab54cad91505c4638ff211aa8eb05631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=92ec198ab20b5b8c6fc97242cfb36086499922bf80f709535a9d99e985fcf64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=3f6ce34ac77c535252fb2e3842c6c02c90604e5098ab19df44d3c53a498e4b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DR22TY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSmVm%2FQ4MhroCI15l4G8MR3VDqD9KSiYoPCbsqgn8BgAiEArJ2Q3hYMHlyDL%2BuTIBnNNzawmIDKLbbq9uWV3%2B4Q2voqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BWjU0sX77bzbR3SrcA9xxsNHqxuAWlZM%2BHwKGX97K5pI6GjrKLwDiTfPC6%2Fpc3Uz9JOlnFjZ9x6DJocyQlrq%2FKZcjkAbTFyc4V%2BaD306%2FUiicx2kwykpEQCPg%2Bu9qRgyW7exljhu7lCI0kyBTXfI8hR%2B9a56etdEjP9M4gDD5A06Qq4RmeVLKLMpSQUNmiYD16KQplHn1G3PITTxfL8KmHtkRUEmta4hLAanf0ueieFXXwXyxvgFRvdAKIpNAlz5H0TRs6pFU6nWKqP%2FgPQN%2Bl9Q%2F4uvGRRuM8INWF8%2FCjprWA2hG75k%2F4Y0bku%2FHBhFF1HDlsfAS3OPgmdCMVtnP3f1Uc6qkgPO%2BOpiORDwKoTthhZru8acoQzmcj1UD%2BIEL5fYF0N0luDwFdsr4AmWd4ECejqdMEBqFI0zHeoBM9CzzYxauLsuUFaExvBmLoXiEM8EP3GfHetBvTOocYY3nfzJkpnxwYtxDn26xaop0m3SFP75CWR2So9U5d5Aq0L1zv08jmOnCxhT5%2BVkQPamPyrP9xiEM0zelCAByM%2FTn0c%2BWtLH6gQ6PJC%2BdrAZSw9GOhEm%2Bl7OMaieIQNSwpxRPOpdJ7%2Ffgonbea2wwcX75Inn%2Bp6zmhxU4URc66P%2F9xSIT64MTYme01F4RMMOmr8QGOqUB7R8zcoowu6p7lUoyR%2FDoek1hl7d22YNeD9YpZ1ZpCxaYJYje8tip6nXM78GRagL8KgUovNI0vBXFbow0FOzLUvZqPOAwU9IHBHe8wPWaj6lsIRs85eB%2BKdPcS4U9E%2BP3hGgcRPp4Ioyz7xL6J%2Fe2ilVNqM6fHzN0v4niMkDu4AUKeeF%2FI%2FkRbQSQDiOCsqBNi8kNsfQZGuMCx9XaZevAdgIIjbF1&X-Amz-Signature=fd0d25f00291cca91da0d06013a04d224dbbdd4ce95f9bc4cc121ac5bb8d2163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
