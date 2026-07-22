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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=c2feb422d5e227b59354a731c8e90ec896efc9fda752815eb03c2792a6945359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=874a3d11ca9e5000df1dd41bbc9cece78bb5237527053128ad27a7793cf3fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=752d2812f096c8d8a7681d70f7f75dd0f0bd8af5dedeb01edc4a7f0fac99c4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=f8ecd790fb2082c50c342498f648867227ab33c743aa573f55631b6adc70bfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=7550ba13779e935e8873510693fafe271795cba0bdba0d274b7eb5f6c293f0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=4b215d04edda52c86f275b8d56fff45f34209bfcd2287ba496cca6a791e5301a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=4012e2a6699ad13681f7444f67fd2a0597bffe9d416e5548a22951547974bb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=bfe68e418f012d8b1b62c6803be92947f4aa273efa49cb57389580adcf3f6a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=0dc25b3a4d415b723027898bfba56352e4d58267a678286ccbf0c81f81121b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=c035b4383ff548b9eb25e0893713d2e9a5bb7ebbf72e66579855f754cf4782c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=74babb0e38b1dbaf334fa8a957f80bfc224ba2d81d2cc0d4a988776889469511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=d425a11187ca741966d13fefbc95f3422ea1794bcaac6d005ebf5dbd59a99596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BYYPMR%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4GnEO%2BHYF4E99eLLzUcJPSwZcKyUOGz0tifJ0fngeBwIhAIhntB8IkULUokBAv5%2Fd9%2BiwOmbPZyo6roRnUS43fy8BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA67a0wYeminAbDKwq3AM5kFVuPpLvjjAMVPu1RNfqFex%2BfshVg0hXNc1qbrBvGhaHwV%2BSPNYPhZgDf30i977KFQYbhexf4%2BceAdUMOhWDE96%2FbI7%2B3OOnu2faiac3Mwc%2Fj567JmCh%2Bd7uQKyzEs7EaYZnHeXmq3wgYpZlknFNB8Tsgk9fbSJSzuvxpyqGDxCPY8MDIdaIgRLj9PKCTufizZrW2n3wjZjp3mSCmxuovbJIlca3M7dkGVtqCXPrIolw2r2dY9cOu42MmjO7%2FdtBCJMD7k5wHBCbC23ipF4zYXdYo1mRXULbZ1JRYaExvMHyui1cmsi5OfnK6Hcl7PO3ZnTMj0FyuE%2BvoPtaNJaApliRA4XI6Q8Bblw5uLjyJ5nqGrhople%2BgukOA6cFjGb3jlu01io6cSEmi1%2FUFqHRLyJelxqJje8msoTlEHQimV71FNWONB3vnzYQz1svSlrmeKPeq44s9SyNH1X3Xx2DnoTAxLsP75tgYhzKLzgZgzeQvsq3r6iJ5I%2FYSDcOta6EbwrncsXsg%2F4IevGWD1V7q8w%2BK6YCFPM7lpUmu5zrox62aG80rHrQUza55rLGtGr6xY6Na%2Bff8HUhBS9O9CShQeq2Abq72fCK7lMa87jqAZCGV2BOdfO6JwMmRDDEx4DTBjqkARPPqIjt5dexKlfwdw8upIKjqoOisKveRPBVGudG%2Bk5nrAyoxHbNTgXPhWrL2RgsI%2BF8XNKQVWs63MD1J7fAo5IWeT5gJjIcgKLs59Z4J%2Bse8iD9sZxEc5fhsV71XnuxfvKSq%2BjQgln6xPDchfoHh%2FwZgnrIizch4QCpR5rHj0a%2BBJuHJK0jv%2FMiN6tco4w2uF9f1tx62iWozxUBwEFkAqGzQi2x&X-Amz-Signature=93fff5b06e60a4ad5224c700bc8c58fcceb0a1932f68defc2bfb7818fd16657a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
