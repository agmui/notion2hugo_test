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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=f9a43f8b41b671a67f4ed02f670b1b91f4bebbe96e588c193ace39fbf1878b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=d3c0a041a497c8b041e4ab61ff898f0d22ebb5eb7cc55018e16a27478f86e396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=6f25c976b767b0eecf7b545b71933d202582125574317d280db02073b2bc788c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=3ed48cc9742d48fb4c85cbafd14c23d30d2569643d272dc124da6f74d2ddc970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=d485086cb68b89649e6c1fade953fb868e3ea3a1288b4a7dcae5f28dbbbc7c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=8eb90e33346628a29ba925af9e41909388816cdeddfc3d402ceec0261553fbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=0c7002299d7a906936fbfceb928b921e79aea7da23b3ca6b0e67af06f7d762b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=26915d02cc9975b726275fb32a8307a16ddff338267436886ba6a7100c853066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=5f2f895b28e723ecf453583665339206a608c0c32719f3c58a8d0cea6447cf16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=ed283bfd0d0e29066a1c504b9068f54025b495aec1c3d470245157938aab8b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=365961b55a70adc6de71bfbfeb2ddb04b6e3db9c0af36cfbf403add4dec74e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=fbb017836d256692629e23e703d4c90c718f92f43b3f92576c58173b04da9287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645NEC7GA%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg5zxX6BZqBFVDnc8z%2F6AvfI53Ldzh6NS7uhVsernC%2BAiEAnWiLwn94f5eFAcF2u2ePUWTEZAnOMsfY4FFxMXMHCTwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZB%2F7c7EkvQbPN2ircA7S6qkZnDfgJDmqka34vmaxjUlAJIxehOktY2w5z55li99obQwKNIaEoWl8Tw5xkvzJC9jPcMMYLUpFsCLqlbx7Mxj4%2BbQu1rF2iwa7U1bbTkzmn0tDNrKrTp7g%2BGATT2%2Bi3M1G4llR3Gh2TNJYX%2BGvzrbYfexysO1MCbBcGWfcVPib3Hk9Aos2Mu3NitkWtrhpGvExcrMWg%2F5BDU5fIKAzzMDRHYfjPhLVEqkdxxSRNtMjBI%2FceFUd57a2u0QCRbEr1mrEZwXOYIC2FzMEa5OmVBQpTthP3Ufy4NcT82mGPBXItYvGUWfXbXH8KSN0LWnYOs6nSTecEvQDZfhLQzQOh%2BH0sFK0AwdVTBF8ruYvZ8DhRAiw%2B%2B7RR9kX2av0%2FiDSeh5rJwsGWFT36%2FdpLzQNZO2YLZsM5pcx4ajo0sBa8JpIs7rPTSYRZk2i2jRU3U1Gr9Z7TIP19ZnysJoSCfmlZRPBmL8ArNVFohvtVC4ZrZSmyT9Ey8CXEL18BOokW1g4V6JbLMnq0F3wiT%2BtcunF%2FcjRVOZoK%2F7Oq45gkH5eJ16PIPsbEpov0mGhwhf1EJN%2F5UzDNu%2BqVCWZGSxbYDQnrLZ%2F6ZkVrYneQ%2FvPSKd8rFfDBQLz%2BmcPeTV5kMJqGntEGOqUB6hSeqbW3jZ8DbLDFtNThhMcl5kRs5ruiAjUpWkP0BsTqaLhh3NtMayq6FDRNhdfACTRqoCidJJf%2B7F08Z5mTwnlHnVqpQrpGMhKWbUlnS6osum2he4RvxIH5pQUIaW5hjSceJKhM8lkTo8aj6ZXy6n6Dl3Xy16CvzvQbL%2FzW4tHUKj2V%2F9VG1tj9jkbjaWVaP96bg6vbtlD5JDfnqdwKcqr5yxt4&X-Amz-Signature=5e481227096bc56d96ba5311eff729e7c526de9c5a60ed513417de60ff59a742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
