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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=6988e956b2db4fb938e6728eb4ae3e470c79c2a90f30fcc1e3fb8267a32a1a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=53e3f86757afd4f61679f89142e0968595eb6d653becbf54d0e2ce67cba175bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=7400922a367d1fc3a1db97a9999e50f6a3b245aa7b609b724554394b2b9ab591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=fcc4ff32eaccda7a7dec3682956068b8fa111e27d99359a8d8dabee8568cddce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=0c995f0f873a03656ade9980f3a0fba0598911f274867987d304b13e7e98273f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=0aa75ccac628b09b3d82499632839ddb21f4b9d2f4a335dae1ba4b9dfe27eb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=58f998a7cc3ed786f66111f8e58a265964e86684f7fa56e1891b3cf1cec29229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=93e2e6ec85905439749ca4a9fe5b9d68a3054e4f18fc50d9f467c7d4aa04f97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=b4094e029825ec916d54b8558a3560cb55353680f05915a9bcc4fe3c0a2542d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=14514c741885f6f72b12cc3c5cd3a10799925bf755adaa780678da8409eac36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=4a9523325725e3ff6649c1301bb2bcbce89486f7c9981eda994dc80a177f8c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=7c9406df68f35e111baadde94ac0d23ec122dbd4273afc4c5a847cf43a87ce7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=6fd56deacacc5b1786fd3ad49fc6f339e309b39aa5af7bfaf477ebf365e3f032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2XNGWA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDCWyIKUDWy1NqWgBqqi%2FCguzKz3BmC1VAg5xQucp2A4QIhALjcvqGxMqr3VtHiZLC8oumhataHCMoGoHNZiwUyh3FhKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfYAY2bn46JzxjkKEq3ANZuZI82hUrzAQqbYerHEOeFRE1QkXrZ7HGwvj50ehQlOUOGGyD5kxzNw%2FPbMjVeR8Gg46MGT%2FSPLE%2B%2FGHPtkrLDRAw%2FVJeIsfiviDGAXNERtxGg3neSS%2FPaQz8wkSMPVkdxqSx%2F0Lqf%2Fhg%2BTr16gJP2jj8txgpTvis4%2BJoLcxCO8gMwlGeNmEI9cM9idC3b4Pwq%2BRq%2BLgzghzt63jR1M1GyhdA9UlZbkPMZm7M1odWa6NY5s1ZtIhylm%2FHEuWeKWzhRUDunkXEAvW4%2B6djqhqYchFrfQMwV11Z0cXtz6nCO7FFv4rVL1YkD5%2FL%2B9BkU7gYSjgt%2FC%2Fq6elUccuDWy3it1m8rTJeTgf5L93etOaxYT7j7ayG8D%2FkFrMQcS6i0%2F4WYCGGY2X9NzraGKLw7F1aEZw30Oq1fd8OLMifo3L0CsTC76k5JNSeC4kvz8OWPoH5BT6c7m9xGMCqHspBecbkjiQ%2BVVVKMHtdxZJdA3i9lMHCpLheLLvtfnXGU5t59p9kL95s9518eC7EETQi86MxTQf9whSyEA8vrx%2BDtWYAdMM%2BlKK2AeoN5wxhqj9SLEkoA62OS0Ul0EqVpd%2FzuyfE0c6KYbfzhpfRoASWDDqXLtUPcofC131juaYYVzCJoNbEBjqkAWR7QSm%2F%2FQoaJ69ct7T9GbvI9T9KV2KM%2BCX0ATaoPu3L0lXyx8J7TCprMNjfOr%2FVTxyhCQZGiUpghI2mN94lBBMM0GMGevV4PaTgtpmI04%2Fh87%2FjJP0eB67LzVNRQm9N1VuhN2DwNh39UrLjLoFG8XT1cdTeEXVv8YWsA%2F58DHP38tg8uO0u8w1IetKLVCanNEQwBgFrEOS4V47LAgv63VuiaJdn&X-Amz-Signature=bec384fa560a4bd5b5d14fb84723828387cc450a7618991bc47a49c9f5a4ac08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
