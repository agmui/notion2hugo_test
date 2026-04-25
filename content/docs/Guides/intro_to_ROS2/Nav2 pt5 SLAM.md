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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=cdb9f267ed88004e8b8577ceef29eb4459d1d5bf59734289073490d1fc0dfeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=ce89af2020abc4620a8b5ee6a2c59ce9a05c6d28b52bde14f01ba4133701cdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=eb2a84135dc8bee80b1d6a9f525d3bcf284dbb490f6d0c6614fb7ebc1790f686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=16da35c7891b42531631c930ca9564213fde2ab32415db660a68b89ee2daebe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=f780b3d9c340af343568d6b57d609712a71c71ea1ac94b31a6bee589145a054b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=25ded31f0045ac8b6546cc946c676f7c8a156b7cacf4f8476454a387f2bcfa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=2504b2f38b01453056369815f3c31ab02a0b449158eda06789ab87fd49ef1c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=8fb83420aacf0c684da2c87ac9fb6cd6f574fb89fca9b18597af6e3c041c08a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=e424deabc1c9586427201af59fd57c625e78cf66c7ca8e909eb797b455b9f59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=c453fd58d477c653d91794d0bd94f47a17e6d63dd6429293b311b12bf90da9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=5c9e5497b959309e18756fa881e676a29284b96a2dbc44847edb0d77bd790b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=0a074def2a8846ee2b2daafd61439a8336f2a4fb3ac47f5245976d7ce5b745de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=7f2fbe9c8b2f7004e5a39c627117cea9965a508cffd2b21100a454a8cf69a9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHPP7LU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd47wnYPJt0deGEzAGFrE4q7pGLBaLFWDSLFWAV4Mm%2BQIgOcHKT8EGtyXjOTTsLxPnfveaAhGjuY9RDOIXL%2B1yfdIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7vFnHlHyiOQND9CrcA5TiVzAsEBAD1bprLvW0du2rz3BUvqj1HdJDtnoPyiihPC4MKy0sU2Aahf%2BSMfEaFeKV%2B3560AB5S68TsC13KcvuV3xnHoNqu7CM%2BKDlTtA%2FpbIoE26KsaUwibSL547yQ%2FM%2FdsSsELOBt%2FnEHt8SdxnFJUYcCeFd%2BxyaF6WLI3Sl%2FV1gClH4RldJz9aub1HYCCHYvfS6LlUE2sHkUwgeYFmWXxoGfN0PP1vzqKttgLPYsdrLvGZYov7nID6YbNdO8dtBhIHEI2F7R9dzqpdo6dXbjDzYBb1pY7F0XUiIvLJie4Y7JbMbUyZbRtawWLaf0KapwQlSul3XyN0xHzsMGL374cIqSe2044tAyvVM425HfyoWIRlIQmRqRND59jg9pboGfMoCoh1xkFRUfcJ4ruTm7%2Bqx3oVedj5dqSPfrvbJ0RMNhC9fviyWdmqWgrZMavo6awFHvKss9yoifO0e2uAn%2BZOD8XyOUpsRYTtfJppAMZevZ1gsJgaDrHYCatPbrf5uX4P5iVmlhQTOA7f1wG9PfhxJSL4hqjR3rEbYXRtnqka%2FNgUWv3Nmxf9p0Q4wP5r5iZRp64f0FpNrIROUHpqXFlFUB%2FQedGw1y0WoEc96CFMYK1z%2F6vE%2Bie22MNa6sM8GOqUBQ%2F851vd%2FWTBfznYp4btBhC071Kqo17D8kZsGxxqvlsfDawGao0kTLqk0sTlf8R2HLIw5dscTDUff%2FyJnuchyHIim17coWl3HjA0c4rMLuA%2F6JvulXi6E9ZxVkzIDfAgcevndZj6jY5wN8z1YKfXpts5vn3gXsc29WK9DNi8FUrwZMcoNWLqfkyL2juTdpGYMSaF7XllKtA32pvAlpKu4WcpkxcrS&X-Amz-Signature=8495591a3a1fa65e7376c0f55be6d699073e26cb028732624726468b959221ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
