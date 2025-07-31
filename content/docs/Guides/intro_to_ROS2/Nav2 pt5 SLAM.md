---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=f98d895a9014f1eb77a4abee43ca5724783aa1264247fc4beeb770de32b6eb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=c9971a432531297a5182c28136217b17c3d7b5b44d6eee13f7fe36a73507ac4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=6eec0d30226806b16624613fa58499c7f7b0b46c08389d42bc6dc73e1bc5a4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=4ce6c3bf2eadcf8d43fde798b310e1918168c11470d63051752838cba770db20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=1431303dc2f63dd042c737c75bbbfa68736a2aa80da1ce4f8912adb757e738fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=bc8135bb858aa0dbaa6a155da3b590aaa5264e9732ac54c200b8b16bab0e5b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=e1dd969252e006add4dd0a6b81eed348fe97f0335555621de428fbc447be7a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=ee667e25e90ac5e31cbb77c37dff65f4c27d3c55e0bc78d4ef787f88b4bf6b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=97cb7d30f32f28fc7d2dc5f91fca986dc5cdaa62118fea97fdb7ea68de965e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=a2398f164ceacd82cfd4f713193319f9c06fde16b8d477c3e3bcd2e35cf647ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=5ca1b5a7bf692ec7a6374030183537ef77956edd72e302a240b82cd9330ced0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=9f995daba48b69b0febdc7236afdb967fb38999968728faf37ab47354407abdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=d42de62e7ee867a271bccad11f307a0700a8426679a7f6dea95e527cd7186581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GQJ7A6G%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhhwG8X35X1FXLpV0OPvA6vfzKvpndRiGs4Fz3DTuIQIhAKnUqTDfhLdP1mbMzyDtUISOWiKoapxQq1R%2BIIh9E4yuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylBDYhkN8YqVt4fboq3AOZscGGkfjCcjB%2BvUAHozTQbquz%2F5pyyHbfKMzufu5oOMAWkf8aSzlRKVf3figx7zCG8LCvchQN1opxROqn4timmIdrXAzl6KkApEVnDnItmI%2FH9GsEj4BS9gn9bbtAoLJbjsXPVjTQG32%2F5y80TWt8A%2FPMAXxLFzxJSVuIvULFfVgw2KBTTOlCGlhRObkv3rLmz2VVM%2FlODy4V%2F6jPWt%2BIrXgX%2BqvG5UHfYnBsXtcW2D2dKfCMnPcrLaIxSsQ8hXJhDnLuXOUrW8dS9nUqdYlSHPi1vp%2FWg0SuyFXswWHjDv9D3d5r9PBUxh7%2FKIikZdK6wrz%2Fwx07N9HaomPK2CTDzCFsKPXK72chqfK0Ky6XK4YAls7Z9fXb%2Fvu%2FKt%2Fm4coloOdhZOamHmtkwvtcHVp8TsyCYbjMfE7Dtv7vz37y4xvCcYjUF%2BIMh%2FYjWOWp%2FbEHliR4uSeypVH63KoXL3vPCesyjk0KtqkEhvlZABvSMVdF7%2FBLQ8BLZUTm%2B%2F6Wx%2FRTbbr8n0u5ZN4M4tw%2Fr%2B7TZzOZZqIVe7AUUvmBiHW8nBJpNL5L%2BgBsyLw%2Fk8pBc4g97otZSQn1LLwYKIecA5PNu9PnpJK5733JTp9NnlzzTdcms2UuDtBP5Q46FjCwy6vEBjqkAT3ymo3%2BQursGJgvUwNDfGJWIc1N%2BObqfDT5Os8jWMuw6feDNb7S8Vfvvi7GDIIfXQ3OoH90s6smR3I0%2BV%2F0jzE9gVMXaWgnJH8%2BA08AG2fJ4JNYX5GIaC5ayAE0DTipXVj6ybMnQLSNi0SEWi0Zw%2FXecCn8V5R99OetI0AZ4pr5J79tnin3335iLn7LlYx%2BCiCGdy9JB49vzPwsywMSEXdY7rIz&X-Amz-Signature=75e506b05184e6c91e63cb7ecb5e7dcb3f4abaf2c219a2398c12ac44b289ec39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
