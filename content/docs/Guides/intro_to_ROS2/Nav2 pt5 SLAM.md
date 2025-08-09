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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=b2c84e4a67dac06c317161096b0db234d88c8b69d46595b885e3fbc338c60bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=74faca7874f333e89a42182f30114782e917a142a5815ee889ce854afa3768f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=947a2942e389c77f28960ad9d4f6caba3e2227837c2b6242117991036921996a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=233668accf6bb6e8c3fcd171cee425f6986f51f2d181ea1cba35cff3b68be31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=d72702743191933b6928f1a1576d9eaea5050099844bb8a15a05260dccb8ecc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=9bc31b4ae0b887eab7678d0615c02bed96797c23d283389c1b8cbc061cabd63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=f1a0ff9919e092b2e0d7c4ee90c7a2ce9d5d417e2b7e989eba7300a450afabe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=d13e7e96a137425ecdb15be8e044c59cee958a44b73d1dbc383977b5b33a3bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=9240e5b4d5b1221f31ba3439da445c323ca1cfd86af067bc7e5a8299fbfef643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=b32463d8c9d7d24e43ebc8653b1c089238f74a408786e6083542f01ddd7efdc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=cf84c543b3a90885e212206c459ccb8245a8081ab95867af977ddaa9740f3488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=997a502cccbcb1e9042745186a82de81fe647c19092a0b7a8190e98ec8b19ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=077df7b15e12cdd6abc122784df67e7a1af9aad41103b46259e28d494996ebd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDD3PWRS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBNXY8PKYsfPTLpX1zMHr%2FljiqM6tljzCsku4n7Byv63AiEAiHI3eKGkRpC7M8xbDFdKP9fDfcdKrd%2F9%2BuwcvCpxHAwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuXrurAFlXcWGStTCrcA72sxvAPsUTMY2oKpRQ6B4OY9lj%2BAoC%2BrDseVWTRv0e3uzzeicvMK1920tU1LKz0O1aHEy7ugokLgHK6ZbofkqoqqkjG66bX3bHJrbbSyGLj%2BsXV1bP6Rfg0xYhjZ5vvti1lTUzmcA4eyey2lCEOtYFT1ajXrZRaRdsL2SQsrnQo%2BQmtgn0%2FYpQkC5zVdfLt%2Bjh7LCR9p%2BWvT8t0WNjSQicYq9ahpMYjDTLOZhZlgYAm1JB15sBrzRr56hj611vaI3rz7FEEjIsZHQFBgDriDlVuLkUM4scj745tbuwJncoR6i%2B5EEMDx1B3kFvk9Su5ScKDqTSUH5i6ZPjClpgTYHJA6rnvrZgC6a6HPPzqFgz0w86Kx%2FbgOIJlaIb9eyFGUPQnsAMc3rEoqVQBb%2FgsOxzy36bpCOf6xZCwvuV6Quv0UU58hzgwThSIiqVTLVZ8UwSzqXEzU8WoPmI2FizZuw0%2FuU5Dkm3H9PfeUKLb%2FJIvus4uB2zqu7ttRYYDw5DuZx%2Fr3YXuVCcNDDuJR8rksaaG%2FXbIicTRkqpokKilDhKHA94gS8VlqKZ9cyGfYHl7Pegr3%2B9QvHl9AZolw11DGEnZ0KgSPazryLDAdaB0stLFsFhOGBOjuguZ7VBHMKD22sQGOqUB9THg4CcmunNagysgB6m0HLWOWQhmdtkmZeXqQlswXz8ZS0bgvjIv9fLwTvWrHjLTgUurWvXj1hnIG3z2JxcUIpQV1AGbw0%2FZZT0O9nf93m0dOHBsbPUckzd0Pdf3xBubYLDhMWssK2MQ%2BWEWyN%2BN6T13mNKzB6in8o2rWTeGmk3d5NctPsPq23C1xf5kgdilUnC4uyyar6pVu0TRoWIETozGi2PW&X-Amz-Signature=ebe97201c9a2f9b0cf424bdb5379ada8eb55a905d369419bb7e7d938c7798492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
