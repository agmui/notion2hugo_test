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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=f67e0d676e59a8e35ecfba79f0aaa99c224f6c6c740e65e57b31619a716d2e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=d18ff24a76322a3dd257e965e319199fd80ca56180d39959e4a078e492445acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=53c2e030772841e1d5e3357f6124ee71d2c2a32730876af28979709e9447dc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=a5940a9641fdce89dad414b5932a0cbf9d2c575a18431cd922c5c302ad464480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=b698f67407dad1516d8f7a762bc77eecdb67454c4e7c3e7da57121d6375829fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=df6ce238a8e63c030e9b93aa08361e5c453be51a812d89fc873a2ce1055f66af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=458c91f020af508a12d14d05a53df6053564fb035a38c955f986f37c110906e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=3f8a44344c795c7e2dd035d0801796cfa2734926ed957d891c397f0c5190d858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=cc6975ca8014b7e2e3edfae2bca023180777371842b100ca9c94bb58597bb6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=d869b2e3d5c78298fe6245d8e05dad6ce610ab8654c7a76b46efe08077807c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=e9949c88355f1be8aeb622dbd1f1c9882d2a054e9a20d955f5318159213abef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=ad7ef334999b6bdb300e3c26bd4f85bb2a79c1ddebe0a77aed83cd2d8385d185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=3bf79f0af88d58827643779f95ec542b02253e7bd147acb9c27751a0634f5300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZJEW3VO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkYfDvh35qoyYOyxRyZWl2zwkrKWBETkJtBlh5ZV81SgIgIuDaHcdd0rwJ8jyQdAncmzBmJW18hfxBYAluC%2FNh5SoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2B7SNOBRFmKojskyrcA2m%2FN3XXRzMR8iItQJh97uK7%2BG036geVXH8EYPWM0wDsMy%2BXxTKOaCWrYUJsNfz5yFfNIjUcYJyAoNFuZvr94%2BfOYjhSQVJjrUMWfWrHSvM6u67QsPbx8DbpsxPEv8h6PqpVDLqkLOsinPjzYiuVW%2Bg6bji7Q8YCLpq09K7I9aE44q47kQIQR0%2B3SEcziHUvr57appMaxQ7wlXVD%2FjpnEAjVWIlxz266EXNODKmZk1UfskjQ3kGys15u3f0ZpI6QP7yo1QHZgcKK2M8LNXrrZiPi1Y9TsKK3nI9gmqOStoBFkVsW2VHqSpSC0NJVwdqg44Pmx2IEkqS6dRLOYf3jtWvk6MKtU8JiyolfJumpxU%2BggWuGAXKHOKyNM1ilZ%2FAkNDvmAc7o4fjnqbcJ8HUYNzqydyQiDL67%2FTqJZzpYipZltDvgjOrBD3dDyaEoqrAuNdXnRMLv9MRbxtdDoGj%2BT%2BUciUdHPq27ndBPrNsInfdx5A5PtBC5eQoJ45pWVwjfiHW2XbBOM2aYXpxT8ncrWVIqukmb1ctsvU%2BmR3yOHAkv4fgzEPBBt7QnabbBgaev54hRn%2BEj78FvWfP7bBx%2FqMXzkGJOi7NUkogYxxrZiJhpJGtfnoHFYInmnnE%2BMJ3Mr8QGOqUBzB6XEDoKyZY9P%2FkDwBmeQaqg2400f5PZIOfqAfuM0jE9639JwgXdIbFqyB13V8HUQU40LbiVaB3nJz8UoK%2FI9BWcUSBsrXQbQrgbdTMXcuVksjkzp9mhOSm17rRnca0zw80R%2BN0l4suZGOS5UguDBqCMZCusGUwR%2BWhGwBlo1B319vNc6VgJW%2FsqLZ395PBLmgqyokRc%2FeQFjCFEY3b7QxeSHpjk&X-Amz-Signature=80f030295caed0901e56ac5557a2841adec6eb8c3b5e9165b05c69d92368c23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
