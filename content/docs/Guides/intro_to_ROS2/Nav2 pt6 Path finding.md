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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=2ba774acd1435482db7ed6a80ca8c9b610a7cb1a598d68a37277841fe88e42da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=9bab6e3e38223e93c92980bf082bfcd41d99de61760857d3aefac5f285892828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=a7448992b9f677aded75ed299773f7c57753edfe84f2c8b83006292a05eb8c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=9775090c8eae262addb70cd24c937c38017f2c5b26c4d8cdd5520f45c8ca7d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=526d4a4bc0710bd7bc3f087f1de68bb59e28a0e97c06f573264e4ecba0217bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=8f77bfb128d0420fb9877912a7385badcb0649c19ab0c0290caa8f5afef252f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=8103923e134ab2d4c101955832acc2d404b47093745d284deb1fa6a78adede55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=1310dafcbfe21b11140ed4ae2156fa8a6797bc04fe537b0abf72d35948d12a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=8ffa74f4c300ba375eee0f817278b912d7f057f05b402a8e53632659aa62448e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=d266482e857afdfde8fc5547ae0c6a67d6c1a8b0a30342db61d27e36727a2dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=b374e9822102b4b3ab1d3907e067cbe411ece9a517b8a7d9ea5d84d13a7f02c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=52e8bbdcc6ad231f26d4fc650b7a52dd0cefb1bd77cb9a0d8a42b115bf7393d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQUGO6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZ9X5K5pwpKZhOfCz2CwLMyVxPBJZeIJOqN9UfYgq1WAiEAtYzCJkPoTyMt0E6mqOr1P3GscKA8uW31qpQ3dpJbTTcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFCqJU0%2Bs2o0v3J0aSrcA7khrgCe6lgwrr1wDJeJTKOyBH2jspA%2BuZhEBA8CecVKvvIUK3ifj%2Bbdu%2Fj%2FO4Kn1nofxrAju7bLW4XUspRyLwA591QOuuo4OyO9j5bAEofi1YICtwfg1XaXjbHy5vUsr6DSpw5r2%2FCKZEiGhr%2BobznVF7YEEiOZ4EI4SPg3tPbTRrKVMP%2Fip0PMX8IdYcTDt%2Bg2%2BQDZUEg9Lecg84WbDPqobVuNXGceyi3rquAXiz%2FuahJEQB4gVjxheyzGj4kzIovzWpi%2BtwVH%2FOkA3DfgYWPDxVexOLARKOkg8CZCyJT8U0a48CS9IUnoZKLqhCBMXTnkeF56PHt9hMHrZaTxwU4i%2BomuJ05i059n6%2B1hXuvV9Qom65R2BOytjrx%2FKeszQsM5f8cunuwfjwPXylQOzGmsdta9XI%2BPeJ8AuY3FgyeRWT7TijTrMpXuG0gS4Zbf4jjVTTPUA3N1OUPbWwtWVjwZL7nG%2BkLcB63gBD0NSrEaR8y5Zl6qEo%2BNNkjZX%2Bkwqic2TnHVvdJLk7z8bwGDcqJI0CIKF4kNc%2BQl%2B58jki1PAOoeSUGUGpBw702aG%2BeFpTE43gelEsQ7VlwxQedFRCY9D4w1GgoRtyF1mIBfmcf4PSiGSKdBUew0%2BBvXMKOBusQGOqUB%2B15zwaZdgKQx1P1ue%2BKFXjO%2Bov1h1N6BSbSblnlZBA50cvcGWnsBwRonlB7uPInz9C%2FTAfM9yEMku4EDrnIOw%2BlXjN0OTElsh0HWsS6iQleJZ87HingSOVIDXngKvGrxfI7%2BZAMj1QGcUzdj8YGYPx9m2PjTazz3FgdZI5FXeaMM3gPyrUpbmhlODKzIM%2B6KN08RH3jN%2BxYNluksNxbZOiFso9hw&X-Amz-Signature=e6c03693d1a00dce6ad830944fb026d9eb5dc1542e3ef270c12f33abd539b398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
