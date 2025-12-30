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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=7fa40caf36f43a26a60eed141f3c5a8f6c902ba02a580b7df33fd29c4a6e6f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=4ddf5e085f502c819e6a6e7243a85881ca1e2ed2f99d23c762218709c2d1cd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=5bf9d5ab775487e990973e87951f3c1d16d206c84d759dbecd62c87274b1e29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=1280f0dbb39925c1591e0aaf1d45a47eff1a399187082ad96b42f681b78c18e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=0f209f7576d746c0dcdd0c2d45b9712ad45f706f1842634e142358fde3ce45dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=b692e04f5a80d40c64b0fbf2e06597d122d6c3d4b2b4650bf65aeebe1198a02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=9066a44defb4d606b8bd5aa6f8802e7e010220cba5796b9f4ba8c5b35daf0690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=1df03f36820c863d265698975e9c0aba707a6dd7fdaf74cf9443d2746cf642e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=3fa96ff67024c49b5c7e319b9384c20ce77d94409836ba25310b966ad44db12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=fbfdf2f1fa1722977f7356218eeb802cb6905293e2b9950374d3d91f8251a9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=7bdac41e8771d1a270a545cb1dab6740fd22bfa7010e6f4b581590fa62dc0eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=5ea149d05ed20b450fbf875957d4419c014265d45feaa4323b54ed37038e401d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=c995163db16de265576fcce024661e9c5b60254c5d5aab9b2423e53b75b26921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKGGCFA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7juyFRbDCzPSzOt%2F%2FFUihOCxudAFy4pmilniyuLjlgIhALDt3OuZ63e7wm0LjH1CcHHhErSWEO9NxJBtqxdc8CfYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtpy2j5CE8Rj27ps8q3APO8mYikXifJyqpHr2YdzEmpLXGnx32OtHD3mRQU2batqk8wF6yR7UrpAsUUsPiAlk8egB%2Bec%2BjEGRHG0yV40mkQnvK2wCrRmZHgewFJO1YVmSPotJq6T%2BMAtFbWtaQvYeO2D2ZgjX7QJqjn%2F%2F3bhBIUJ6JWh4mkUqk%2FI0Nv8LTTNNmAz4bnxDkT8safPL6nX4xhMZcp5dTXF3bSxt4Kvy3KKeTcWqC7THxjz3WgrByeWR0D%2BEA1jirGLKAaGuoerzq%2Fcwus%2F1HmwPF5ilT0Sh4u7ow9u8zukoJk2dzewJmu1NaQppdcPm0qdn4XnBb4d%2B1qLZulwpXAE0%2FTzDUu8FGd0pQlNGJOW1TEIxkkGdKUXwSEc3rRCXWE1OZpWk1cnmrWzdvSD%2Fy5T2D6jPOSLGCosA4Js3X%2F385lhw%2F%2FnnaJLeTfo6Q3NR5qNL3DnRuzXtf2YCco9mKbto2fL%2Fkuw79%2BOSmZJwYmBj%2BtIhi89FwNMZ2Q6HiBAeE3Ot4h3AO73KYy6ZnczXJcgjQrs%2F7GEx0p0THZVOKhgwuVxqFu9lUXLFgnr7v3PA2PzbajruKk2uoxMCRM%2FQcSXL8zM27u88cgPrTsAEnk55lEPj9asNsERtDdzCzNVOZNo7SPDCpucvKBjqkAWoXJf47N0pjvx8ZIR83NVQi%2FBWOVmXAlKF8N9k28XyWovX1uMiJSR6y0INoAEU%2BLjvlRpf2kE%2Bec5QfxlalyMDxu5Fp07SzvkE0uw16IPFzMwVpUXvuQ%2F7jhB1KGk9okuA5c1vSxE81oLgCbN6peVoEAD1byWKOa5iR7wsFOFUn15Jm7yYCEy4X05KZ4IkW7ChCGG5PDPDqbe2h1%2F25DtWpyT5%2B&X-Amz-Signature=c4d640c5ead6d9dd5732f99e8f83051d72792af83491f53f2d2d77f36d25cb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
