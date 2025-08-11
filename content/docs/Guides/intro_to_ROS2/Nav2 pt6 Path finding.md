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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=7c3a23ee2634607591daeec36b88ecc22b9ae06c7cf2feda44cf24ee6e300b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=b61b8d9e247d692fcc1ea9cbdbd0f352cc67226bf2be1ab9d5fb0a627669ba44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=9daff54d867cdf3b94d0b04ed48ef0aa4da8daefbecda37dfc970ff0ce32c4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=80a6a6f63e823ec8a46458f76b0bbff7dc9df2439b4e1f0c9dd5ced3e7791fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=ad2ce289a58ccb609ae2bd72f608f2ee110b4c74cd667f4fd4b6ae097ca12bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=4a6fc5938fe2c7554e67c05224248b8ccf55aad3df8fb9d7bd244387f2fd9ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=dd0b7560f03f4b588da3becf42cf8e502b3e01620d6d4af3ecf75c476e48a9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=737a298182add07e676921d8fa0dee4294388cdd89d414650155cebc2be5c041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=538300f1c61ce79fed07d237b23c7c07ab5d206e11cb82e637f44fc37a06ba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=a74d151433e913ca6480bdce0e5a400433cdff8b562809b9968cc9457563895d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=283bc589d627308d7f193b96fcaa1b6456b2e3a7360169fc7eea69e3ec5ab69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=7cd444fcb09f0025f5f9d034cc8d6b14904096a18b5cccdecdbd1209cc1fac09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GHYT7J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLI6xrbG005tyKEQJgSN1jdF1xmmRQUpPntJWCezE50wIhAJsWdrzes7JkxtMLigABjAdDcPP6eEIUNLHajA1NtlUpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz65g3DViubPk97jIgq3AORhllTvo06Ksm0BIWgvDwCN7u76drAfYQ26Z8ZmVg30Xn9L6w3hZcOEBHcFZ6AQkyQIJIZcUXZNOdiW9pYl3trt1VRvfwlq267GcDHQDwWFgLiT6IaXf3ymjviNBvltrhcJ7iweNgs2sbUbfiE2VQv1ZBu75EGXnxZTjswmmi0IOwYNJ7Q0E%2FoHbVy3jgcXIUhQOchmWEvqmOJqBQvUcNuXJ2eW4kGH1XVkX%2FbdSM9qzPe6GAQ9EnCSeMvfV9C5fqg5wUU6V7gOjgNdWTgmEqmrH4%2FCAq7bT6misEL8b3FkX71vs7HWpo5xaRo0bERyTDULleGEKhQj8a7f0hJizqsABjAF%2F6Em4NQ8BTuX7ry91QjZqjAcf%2BJ6ZsV8QCJgSfweKxYtjv2%2FcvE4qZ0RdCgziEGBsAO%2BC7TMgtE8ZtWh%2FwCMnB%2FEDrDg0ZIq3lXuvxpGsYJ65AXAQZ25Kplxai39uJrpkR2rknRkBI%2BAOVb9F%2BoFfSu64od2a4OM4iwEZLZnpTTcenhee68PMG%2BsPel%2BDI5nUF7RR0aTO4gUeYIn4i5VIx7o5ilyb1ebWwG4nhVRC90sFAMO419PM2kXWYAmIOl8WXZ7WibofF1Ke7fpabNgfcZHq%2BRS%2FrAsDCKnuXEBjqkAdt02%2B%2B1IVGUSbRGcN22gmObOtb3e6FB%2FZjNaUT%2F%2BAfvEEhh%2FgUymtJnjm0YU14mktPOggsn7lTs69B%2F9ncOr5qJwo5IKSrcj3hIq1Ph2hoFskJ%2FeEJ2o2lAABRe4B5ISMnM1LpaumjZCcoaGadUpm0r7TN6RW0CmzNksvl71IpdfO9wkbtuBmbzWHjqLI5DlXk92aAHgdSbyg1lTQMQckbCiLNf&X-Amz-Signature=a7461c241340166a84a7f06f82d6527f449c91c4f73d28dfd7c9d48561ae2f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
