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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=2596d690ec317c05d97e60e5593b1caa15bc5cc4a986f52892bff192728c448f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=b02e7b43d3d808ce73bc7ed6f120c10d5f26787ca51df9f8f64bc140e6de5ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=311b0d3ef58a3a514fa9c9d79b96a56801a5d9bf420f5365acc9e849bb80eb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=1bebafa2ee65e8aafa3acedc8ae44d50a29cea00065e4febccbc55c19661a83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=bae204fb302dc86e0f419e6fc5b54ebd17cdd4e97d260c25dcec87a4795d45c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=6a35deb9640e8b3b1aa834e9b7e1581e198cd7999bd2edb26786f7a5e35708d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
