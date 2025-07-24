---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:29:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:29:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VT4JHK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBPCNojCyQQM3nZSOiggr36F0wK13VIZ5pTyPZjJIer7AiEAgOXjtKmxaQOG3Z5PVyDQJaP%2F%2Bel%2BqE55EqrNIdzTHWUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAlFRv1H0JEblUSWsSrcA7NtVv0puGFzSf2PUgY8vMMGAHAEr4Ba5TYdMe4dU6GgJ6SPkAojzRqgYZy4fCYUs8O5gGpSE2qjnAPEjkMkwZG%2BHcQLt22KY7CcPm8EoAU4bGQROMHNLLj2AJLqitZfGRw5XJTVW0UPThEFRK4QuQeT2H5DNSApMV05TRu%2BI93%2BdIL1fZ7eGr51CIUHBAD2OO8BYvVSc4ncsSssSczoAyXmV%2F67wXjmEamhHT0b0FSnSDsCQGojaXlngIE2xcHupEv4mEdE%2BMNUtkYPt3SYxpwwYlpFfbBMDGbJJa3HrKa0qK4fus6YKDpZbkzSftOlfrJWBKHhTWYbsvGKIEwPm7%2FRutH7xd%2FAk9zxt34QwnoI89wnCE3XJBkEm%2B4D9ei61Il8hlwAOCFsv6w2NbPxgGB6Jygeefj0iWqAw%2B%2BOri5hxF4rlR2jLC6A8FiLyfsu0a8JzO%2FgCY95mGON86z93GspM7aka3IL0OC%2BkstFPBNsIJJftx8a06hUfafNiaVNCAFJGYTYzvRv%2FwF8pfVuwHZHzuKFRHBzfIzw66KJ%2Bm%2F3TPAPBtIYtRgM0whR%2FRErxLtJsq%2Bvp2cX%2BglS8PSgQDV5HZxg6XxdidUx3APDZW0zJO5nX%2FeOjqyx7IYBMIGQiMQGOqUBLqju%2FdvsrPwnmAlS1qSEH6RW4Lig8kBDgzVJi8M9vUZEzaD7xRaaXwiDBIPu20fkzoCpt3t0WjWsR78Jh9J0SUOagt8lutCRI1NXFa6k6wZAlUuw3HQGw3oTGnyaHOijFuIIdbxxXQjQAum%2Fp%2Fmvg7icjLuvkAVWMXTdP63ADw4MAKGBOEO9kdfYZw2B9PDR%2FPUqC2mKEeG4wWfKnxD%2Fn0xdhXc1&X-Amz-Signature=dfa0b1675315541f583301f533d6cff019bd91dd1236a36f5c8b34ea251747d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VT4JHK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBPCNojCyQQM3nZSOiggr36F0wK13VIZ5pTyPZjJIer7AiEAgOXjtKmxaQOG3Z5PVyDQJaP%2F%2Bel%2BqE55EqrNIdzTHWUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAlFRv1H0JEblUSWsSrcA7NtVv0puGFzSf2PUgY8vMMGAHAEr4Ba5TYdMe4dU6GgJ6SPkAojzRqgYZy4fCYUs8O5gGpSE2qjnAPEjkMkwZG%2BHcQLt22KY7CcPm8EoAU4bGQROMHNLLj2AJLqitZfGRw5XJTVW0UPThEFRK4QuQeT2H5DNSApMV05TRu%2BI93%2BdIL1fZ7eGr51CIUHBAD2OO8BYvVSc4ncsSssSczoAyXmV%2F67wXjmEamhHT0b0FSnSDsCQGojaXlngIE2xcHupEv4mEdE%2BMNUtkYPt3SYxpwwYlpFfbBMDGbJJa3HrKa0qK4fus6YKDpZbkzSftOlfrJWBKHhTWYbsvGKIEwPm7%2FRutH7xd%2FAk9zxt34QwnoI89wnCE3XJBkEm%2B4D9ei61Il8hlwAOCFsv6w2NbPxgGB6Jygeefj0iWqAw%2B%2BOri5hxF4rlR2jLC6A8FiLyfsu0a8JzO%2FgCY95mGON86z93GspM7aka3IL0OC%2BkstFPBNsIJJftx8a06hUfafNiaVNCAFJGYTYzvRv%2FwF8pfVuwHZHzuKFRHBzfIzw66KJ%2Bm%2F3TPAPBtIYtRgM0whR%2FRErxLtJsq%2Bvp2cX%2BglS8PSgQDV5HZxg6XxdidUx3APDZW0zJO5nX%2FeOjqyx7IYBMIGQiMQGOqUBLqju%2FdvsrPwnmAlS1qSEH6RW4Lig8kBDgzVJi8M9vUZEzaD7xRaaXwiDBIPu20fkzoCpt3t0WjWsR78Jh9J0SUOagt8lutCRI1NXFa6k6wZAlUuw3HQGw3oTGnyaHOijFuIIdbxxXQjQAum%2Fp%2Fmvg7icjLuvkAVWMXTdP63ADw4MAKGBOEO9kdfYZw2B9PDR%2FPUqC2mKEeG4wWfKnxD%2Fn0xdhXc1&X-Amz-Signature=2349d7a5666f55d6fc7fe896aec3be006bdd690e8e36d1b9eed9af2f094b426f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VT4JHK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBPCNojCyQQM3nZSOiggr36F0wK13VIZ5pTyPZjJIer7AiEAgOXjtKmxaQOG3Z5PVyDQJaP%2F%2Bel%2BqE55EqrNIdzTHWUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAlFRv1H0JEblUSWsSrcA7NtVv0puGFzSf2PUgY8vMMGAHAEr4Ba5TYdMe4dU6GgJ6SPkAojzRqgYZy4fCYUs8O5gGpSE2qjnAPEjkMkwZG%2BHcQLt22KY7CcPm8EoAU4bGQROMHNLLj2AJLqitZfGRw5XJTVW0UPThEFRK4QuQeT2H5DNSApMV05TRu%2BI93%2BdIL1fZ7eGr51CIUHBAD2OO8BYvVSc4ncsSssSczoAyXmV%2F67wXjmEamhHT0b0FSnSDsCQGojaXlngIE2xcHupEv4mEdE%2BMNUtkYPt3SYxpwwYlpFfbBMDGbJJa3HrKa0qK4fus6YKDpZbkzSftOlfrJWBKHhTWYbsvGKIEwPm7%2FRutH7xd%2FAk9zxt34QwnoI89wnCE3XJBkEm%2B4D9ei61Il8hlwAOCFsv6w2NbPxgGB6Jygeefj0iWqAw%2B%2BOri5hxF4rlR2jLC6A8FiLyfsu0a8JzO%2FgCY95mGON86z93GspM7aka3IL0OC%2BkstFPBNsIJJftx8a06hUfafNiaVNCAFJGYTYzvRv%2FwF8pfVuwHZHzuKFRHBzfIzw66KJ%2Bm%2F3TPAPBtIYtRgM0whR%2FRErxLtJsq%2Bvp2cX%2BglS8PSgQDV5HZxg6XxdidUx3APDZW0zJO5nX%2FeOjqyx7IYBMIGQiMQGOqUBLqju%2FdvsrPwnmAlS1qSEH6RW4Lig8kBDgzVJi8M9vUZEzaD7xRaaXwiDBIPu20fkzoCpt3t0WjWsR78Jh9J0SUOagt8lutCRI1NXFa6k6wZAlUuw3HQGw3oTGnyaHOijFuIIdbxxXQjQAum%2Fp%2Fmvg7icjLuvkAVWMXTdP63ADw4MAKGBOEO9kdfYZw2B9PDR%2FPUqC2mKEeG4wWfKnxD%2Fn0xdhXc1&X-Amz-Signature=a7b8cd001f404ad41bfb6ee17669f74072f4a57c8ec6f39a3cb0a6273615c2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VT4JHK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBPCNojCyQQM3nZSOiggr36F0wK13VIZ5pTyPZjJIer7AiEAgOXjtKmxaQOG3Z5PVyDQJaP%2F%2Bel%2BqE55EqrNIdzTHWUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAlFRv1H0JEblUSWsSrcA7NtVv0puGFzSf2PUgY8vMMGAHAEr4Ba5TYdMe4dU6GgJ6SPkAojzRqgYZy4fCYUs8O5gGpSE2qjnAPEjkMkwZG%2BHcQLt22KY7CcPm8EoAU4bGQROMHNLLj2AJLqitZfGRw5XJTVW0UPThEFRK4QuQeT2H5DNSApMV05TRu%2BI93%2BdIL1fZ7eGr51CIUHBAD2OO8BYvVSc4ncsSssSczoAyXmV%2F67wXjmEamhHT0b0FSnSDsCQGojaXlngIE2xcHupEv4mEdE%2BMNUtkYPt3SYxpwwYlpFfbBMDGbJJa3HrKa0qK4fus6YKDpZbkzSftOlfrJWBKHhTWYbsvGKIEwPm7%2FRutH7xd%2FAk9zxt34QwnoI89wnCE3XJBkEm%2B4D9ei61Il8hlwAOCFsv6w2NbPxgGB6Jygeefj0iWqAw%2B%2BOri5hxF4rlR2jLC6A8FiLyfsu0a8JzO%2FgCY95mGON86z93GspM7aka3IL0OC%2BkstFPBNsIJJftx8a06hUfafNiaVNCAFJGYTYzvRv%2FwF8pfVuwHZHzuKFRHBzfIzw66KJ%2Bm%2F3TPAPBtIYtRgM0whR%2FRErxLtJsq%2Bvp2cX%2BglS8PSgQDV5HZxg6XxdidUx3APDZW0zJO5nX%2FeOjqyx7IYBMIGQiMQGOqUBLqju%2FdvsrPwnmAlS1qSEH6RW4Lig8kBDgzVJi8M9vUZEzaD7xRaaXwiDBIPu20fkzoCpt3t0WjWsR78Jh9J0SUOagt8lutCRI1NXFa6k6wZAlUuw3HQGw3oTGnyaHOijFuIIdbxxXQjQAum%2Fp%2Fmvg7icjLuvkAVWMXTdP63ADw4MAKGBOEO9kdfYZw2B9PDR%2FPUqC2mKEeG4wWfKnxD%2Fn0xdhXc1&X-Amz-Signature=3a2bf072d5a399e02fca60908ed53c6fea0eab6e8337378085383c9bc2a17ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

</div>
<div>

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VT4JHK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBPCNojCyQQM3nZSOiggr36F0wK13VIZ5pTyPZjJIer7AiEAgOXjtKmxaQOG3Z5PVyDQJaP%2F%2Bel%2BqE55EqrNIdzTHWUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAlFRv1H0JEblUSWsSrcA7NtVv0puGFzSf2PUgY8vMMGAHAEr4Ba5TYdMe4dU6GgJ6SPkAojzRqgYZy4fCYUs8O5gGpSE2qjnAPEjkMkwZG%2BHcQLt22KY7CcPm8EoAU4bGQROMHNLLj2AJLqitZfGRw5XJTVW0UPThEFRK4QuQeT2H5DNSApMV05TRu%2BI93%2BdIL1fZ7eGr51CIUHBAD2OO8BYvVSc4ncsSssSczoAyXmV%2F67wXjmEamhHT0b0FSnSDsCQGojaXlngIE2xcHupEv4mEdE%2BMNUtkYPt3SYxpwwYlpFfbBMDGbJJa3HrKa0qK4fus6YKDpZbkzSftOlfrJWBKHhTWYbsvGKIEwPm7%2FRutH7xd%2FAk9zxt34QwnoI89wnCE3XJBkEm%2B4D9ei61Il8hlwAOCFsv6w2NbPxgGB6Jygeefj0iWqAw%2B%2BOri5hxF4rlR2jLC6A8FiLyfsu0a8JzO%2FgCY95mGON86z93GspM7aka3IL0OC%2BkstFPBNsIJJftx8a06hUfafNiaVNCAFJGYTYzvRv%2FwF8pfVuwHZHzuKFRHBzfIzw66KJ%2Bm%2F3TPAPBtIYtRgM0whR%2FRErxLtJsq%2Bvp2cX%2BglS8PSgQDV5HZxg6XxdidUx3APDZW0zJO5nX%2FeOjqyx7IYBMIGQiMQGOqUBLqju%2FdvsrPwnmAlS1qSEH6RW4Lig8kBDgzVJi8M9vUZEzaD7xRaaXwiDBIPu20fkzoCpt3t0WjWsR78Jh9J0SUOagt8lutCRI1NXFa6k6wZAlUuw3HQGw3oTGnyaHOijFuIIdbxxXQjQAum%2Fp%2Fmvg7icjLuvkAVWMXTdP63ADw4MAKGBOEO9kdfYZw2B9PDR%2FPUqC2mKEeG4wWfKnxD%2Fn0xdhXc1&X-Amz-Signature=549b85ec7e1ef888cd987b4f843c743c94d36568f6406d1758d0940a98ca14db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5VT4JHK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBPCNojCyQQM3nZSOiggr36F0wK13VIZ5pTyPZjJIer7AiEAgOXjtKmxaQOG3Z5PVyDQJaP%2F%2Bel%2BqE55EqrNIdzTHWUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAlFRv1H0JEblUSWsSrcA7NtVv0puGFzSf2PUgY8vMMGAHAEr4Ba5TYdMe4dU6GgJ6SPkAojzRqgYZy4fCYUs8O5gGpSE2qjnAPEjkMkwZG%2BHcQLt22KY7CcPm8EoAU4bGQROMHNLLj2AJLqitZfGRw5XJTVW0UPThEFRK4QuQeT2H5DNSApMV05TRu%2BI93%2BdIL1fZ7eGr51CIUHBAD2OO8BYvVSc4ncsSssSczoAyXmV%2F67wXjmEamhHT0b0FSnSDsCQGojaXlngIE2xcHupEv4mEdE%2BMNUtkYPt3SYxpwwYlpFfbBMDGbJJa3HrKa0qK4fus6YKDpZbkzSftOlfrJWBKHhTWYbsvGKIEwPm7%2FRutH7xd%2FAk9zxt34QwnoI89wnCE3XJBkEm%2B4D9ei61Il8hlwAOCFsv6w2NbPxgGB6Jygeefj0iWqAw%2B%2BOri5hxF4rlR2jLC6A8FiLyfsu0a8JzO%2FgCY95mGON86z93GspM7aka3IL0OC%2BkstFPBNsIJJftx8a06hUfafNiaVNCAFJGYTYzvRv%2FwF8pfVuwHZHzuKFRHBzfIzw66KJ%2Bm%2F3TPAPBtIYtRgM0whR%2FRErxLtJsq%2Bvp2cX%2BglS8PSgQDV5HZxg6XxdidUx3APDZW0zJO5nX%2FeOjqyx7IYBMIGQiMQGOqUBLqju%2FdvsrPwnmAlS1qSEH6RW4Lig8kBDgzVJi8M9vUZEzaD7xRaaXwiDBIPu20fkzoCpt3t0WjWsR78Jh9J0SUOagt8lutCRI1NXFa6k6wZAlUuw3HQGw3oTGnyaHOijFuIIdbxxXQjQAum%2Fp%2Fmvg7icjLuvkAVWMXTdP63ADw4MAKGBOEO9kdfYZw2B9PDR%2FPUqC2mKEeG4wWfKnxD%2Fn0xdhXc1&X-Amz-Signature=5dca216335243bfee676d6319c5641a2696385eda23ed36bda12dfda50e9466b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

</div>
<div>

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

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
