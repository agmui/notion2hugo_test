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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=0cb8a589a141df8f4dd19bc99b74a2ab03236d0388d72115e9dbb414ee1303f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=6861d1c02c026b04735c66fd010eed82a48e37ab31a0174f432a40f858bb0e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=1613bb4edaf1a6b9aac7c411fe838427a82ca0efa8f625577f89db4616d1a539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=b1b90c3a43bea68e0cdbf4f54fca16c9742f8060ef04dd97393312b4069f4145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=1045ba07af7a47e955be8923730768cabf9957359fdee4a84db3ee78bd412a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=85623c973955b89089f5a05638b1a18529e488bfb845ce736014c8dfad17baa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=4441f1497e53bfbde033bd97a6919a0b00cab287d96488b9db05de55ff6cfd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=3cc77b3fc2e48543429fba403a9a670c5ba5d99ecb8788359ad4bee1280fdd37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=40df90270fac641dbaa7cbec6854e1f4d9a418dfb3a4660ad0ffd22171ce9416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=17b2cdcd02ea8698a4a37852edeb84dd80b4093598551c94d736a5296e93b9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=1b9f1055c25ce021e4c80fd619907a1f0de798b412eb6415c6b6dace9434b89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=645a5e63a05f475615f50edc831b921d1b274e64d06cb44dacda1c89de1a746e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=f831f152b857b8e2899b97f6e513c76c9e152a109d7afff80c7c02877a24217b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFO2GYPC%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAMvZ5BM6tozlz5acnUJ75wI%2BThLfawUXhe7QLqq5cxAiBUKbeEjPJ9nkuT6%2FM4oGbGQQIFiibeDBsxI69peA2lwSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMrELhe6uB%2F7AEMveWKtwDk%2FsQy0wT2Tp0SQwN7jpa2a9vKcaRnWVtoydnYE7dw%2FSF3IA%2FEAnJhdD6rtL9jfUj%2BGdxdu5HVxsLWcuLmIUgILlJs0Cd%2BKGrnNJ9qGmukNPtpjDy0vShi317%2BLTHHTVxwfW0P%2BQtEYbUKBpD%2BnliDgIAN9zodnGabJFTQbHpdygpr7HhXKeweMiszkKQYS%2B8C1HtL1jG4U4uXcG0NR28%2FJZL%2B7ybPIysnFE%2FqFIE0jUwpi1J0lkTfH7LsU2I8Tq49b2%2B3dj5kDlsDAoUEvc80oIspPcTH%2FZhMQBCGfFBb8I7fEA%2Ffwu7Tdl67aUrRPTYobSm159TMES2%2BdUH85g92D5wyD7a3VczqlGFmgWb%2BTTnKZb4RbhTGbeIttfpO8UM8PNg%2BgnRNYtmBLkgBv9gQvWx2mYu%2BpNlE%2BOTduhKKM2O0FnxM07ZhypnE8HbeFKSNvGaahSwMbAmcbYitiZdqbaj6K6bMKY%2Fikd2SNxZqbmBZYqx6jZTyFKU4tMMW93vWzoQTRh9uTejN4wV3I4LJMgCd6c9Zrz1wpntMn4KAjFwQX%2BZVuleresXv7De2uttUDN4OyiPbhN8X2iP9d2cPJuOQPSACAg6QKpU5FoMHDgGTkJNG38W6cs8TlUwq%2FjT0AY6pgE2V9VnZp5QK57O6v%2BrQsprfiWN5nh8oq2rFOqBfXXoUmiTYF3sSiAS%2BYOKdrDwWVO8f%2ByuFaSSMSOgWFy3X2SSjzdRQLa5y6ZQ002gCXV2hh9tcLO06EE9fO%2BNStReQSuL37GDK5OB6RKRVu2IwteswYY4cOyWtxbWKw9ftMMexvg7NU59SzbBAV9LP4ZyUOd%2F4lKbble5VwVZsK8G8dippaawkndX&X-Amz-Signature=d4499073fd7a80f903261b0abe69d6486c6ee73e3a21f0bd1e792208aab15b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
