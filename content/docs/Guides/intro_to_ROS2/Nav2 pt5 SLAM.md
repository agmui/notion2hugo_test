---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=ba10c77dbc81ce047d6cf4f061ea45f91b62a74600ffa45bc117a22c23d91607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=81d8751b4466404bdae6657e9100592504f34a5870ff7585acf1ee6162a8dabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=a276831dc50a03e36ae7a22b2bc8fcaa9952d399eaf06a5a2da8f913e84f4541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=5cd952f9eb814a5c9545b54f0550f99523ccfba9b6ab12d00ddfcf19711bd9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=90dfa06ab6c999be3d0374ec2a1260b8311cc17d9aa67661d75713f0f746436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=cf6e9a5d49b1b32b499de4128d1f4ddc2f031f6a5c21d652eca7ae8b9214772d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=48fe9430ea04f2a3d0f9eb756de237cd5d36b5d475895c86609e62bbbbcaeb4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=a3cd1deb834482cdc1450af54890436152fa64a27a7a6120d614a68850034cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=fd81817769a2b3524e6403a44731a59c6dec47a85027afa6f2a25ad96cb16531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=6d409d7b80cf01e0dcfa68a39fb8fed42dc28f2c5297c770dcbe80855271283b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=36361f3dc61e2a1798b795f8cb065e2ce0632035bf2883a33512558820a3a2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=151786c282dda5d3f889ca3b747efce7fa8816bbf5db71899e622f41b96022dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=f7ae8d8789c5a3a5ba14cce259d85dd40c87c874f5b49cb55fdb6b9223917f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQVVOO6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5JKCBvV8NnNfEYdD6JyLUHpqceQsL27mIabAwrYyvYAiEAoudoKsjTwab3bh%2FZHhuSGNQR1tzpaWDME%2Ba4C2vscOMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPvtbVGchHwbwD%2BSHyrcA12mwgirS0M1N9LwustuyBkA2QNzmDsjghruRQUDD4ddCxp%2FzRC6LTUrQyTIr73EqKG7rjljiEENJbDNTlfq6RslIi%2FIKt7yme8yDZtml6coZEPsjyiYDwdvbTLx1NeSyEqfTSOa72CdEiAbAD00iWZXXe2NF%2B%2FqGpt1SMOS96AahG8xsGElq%2Bq9H%2FO3qPi38sjF7%2FeUWbFWqnAl1zoo1PxiEbR1Rry1vHBD%2BiR9x%2FyJkeyHodiCcFUb3CQa%2BxTq9kGKNIY9YhrFbJeYRYQV%2B%2Fv6GfOyAnYdzrnBBt7jhNxY0UVmzaDdIOem99dh66sGpjrCQRqj3Hm7xV21plRfkThzvmHwnbYkBy%2BLIwUdIvOW3%2FKxhhH1L4ByWDKLQsTgIlLbLLXIIJNd%2Bo8H7OVJuigdLdYvJhZ7AwNCPLccwikBHR7Jp8dQRyFDdZh8VKu339fvgBahdR4zWdqqnaFXJ4Rdj2%2FP%2BftJcCIVa7wM%2BkDbEAD0J8IUNo7GWxLOEbsR4j4LqY3dd3qDiiH%2Fel5Yx7cZ6QchTiQKxfWIX06I%2FCSBZGWw9CZWATsRV0VNvcpOX05DzKMZ%2BDnUsEonK9v9ft63rHZTIjquJX9JkPcMhqwdn4iMm4d3bO5Gg326MLrMvMQGOqUBRYGAHcjk1tRoVSmblWInymnuD2mbiereXENs2%2FVeNFbTSidJD283qwCSRWdIbaouUp8bQuiJ6m%2B3Sju670DcdsApxei%2FrKBOJjw%2FIX8yqfSuMkZZAdilWuXfSC6T8JNlA8HlSrOkyPxBBIhFK2Kdqs17OVrm6N%2Bx1IaPnNZ35u%2FOWNEZFmTlZinLd8%2BqBUExLjs9mERrZmZcgzYHoyQWkO546P3M&X-Amz-Signature=236a780ff84cb699d098160a498b04647af6b908715c9495fc9e994bddf8d89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
