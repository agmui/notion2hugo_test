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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=8787560f9c9a1115ff95e11ff61b562ae6776749bb19e3a708f2c6a3e8b63fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=a13d9d66af228dd73d74a5ca5f1da4f1897f2996167801c3d75a491bf5cce313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=58b5301c201180b7dfd6d1474e769e138fcaa55a9e3b47a97280841cef3116dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=a1bb21eb9ae9793d5bb32a6291737f683dbc94e1c85b912cff46a1d805b1d923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=2b65605d6281f889e787c41c3785e1e39bd699018da4313a237d31b44d625825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=32523b0fa96d2775a462763b602474bd89fcd05567c03a0115708782dc6e7109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=9ca3319ed4473ddc782f65255909e2b5ba979618b2ece18996c1e1140bf982dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=d4cf330edfbf48f192e4c675c97315a04f86e11fffb408bbb8bfc928dc01d6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=dcc60ea9a7c7de6f138703505700ca46b4adc75b374603cf49fbdfa3f8b76f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=69eb5e7e13725f834f7066658484e3daf1e60ffbc64bc2b8228740017d0eab7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=48a838793f043a632fa8311060222cf6fa08c7bc5cdb86b7032484050e7cb588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=447301ad4bf5df1e12ceb7c6c1a135898d8b970ea27eec3923c8e9e0e7832c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=8c4325e5e09415ccd064772e4779be0067143f705f77a135b7c491d29ed1437b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJLHFPQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5u6fpIQcsmCZYYp4HvlJCVbZJ1Swi4j9eR2z1M09m%2BwIhAKDvyjqaqq%2FEPrVAng91jB3QyhWa7ggPLUaK3ncc7ifDKv8DCF4QABoMNjM3NDIzMTgzODA1IgwmJHVMjmLEZXJ0qHQq3ANmWkRUrPFDH8BskrUAqYUBDLuTPYqRuLXpivUVM2j3MuGAo3wXCYdPcaq2rG5y5f0figrkI%2BCrotsIq%2FF8l%2F9vQf0O9Ul4VM%2FD%2FQkbwO%2B6x8ozOjJols57q2yMwi2N0BnC5Y%2FsijyiJJYzGVy5W%2BO7NVvYahjBCbWwjW8Vy6xpZYZ9EXKin6Epd5DSKsmPZT6JsaJ9QMmDeoGRJaTYtN5Cdl0CM10mkoszjJsQ7qOJXnmxKeYPU0K9ARg%2F9Me1M7QMVE4z2JM33R8VmdgWwo%2BR45dt9z8zQXs9b7GUPagcooEIQxQpIW1y5Dl8TMgnSWgPNk%2FpC5UsmpgozpkAdQVysjS3WFaf%2Fv4Ej4zb5eHzhnAIHYmvhiZUrlcAAsrE%2FzgnveuAEkXvbKbGdbuqrZGgzFpqtAfjzPjfZmNwvW9jHproHPGiFjQE2khlQFlYtmRycAjorbzXn%2F9bddDmOStUUZp71A5qOroaPWYfOq%2FAaahr6SUU%2FHGpgOAw8DO1ItP2MLaAHe6u654F%2FZ8PnKLHGx037CrhW1uZtEQ8RKGY4wnb7OQHy%2FngFq8rakLn%2BTPKNm92qmcEaQBVpk0aqFTl8zo39zxyTGXijhFhZ5omcGpgUmNPQvk917rSWDCcg8jEBjqkAbJiSKV24JA44fbssoz77xWbqKOL9J8CMhg2Gln2U0OJm04KHWx5TNOB3ZAMynXfzpwQqUVD4WNg62NsE1jDwxnxPVMQc7STYEEulpUTtZC4h6BkaZWv3c8u2a6G6XK0mfSYJmDvwSdTalhce99gA21ERe0AZog%2F69%2FZiBWb7y4CVBat8V%2Fng2ffQ7Ss4W5Hi5qZYDprSnns9%2B3IeeI%2BTTPxyZZZ&X-Amz-Signature=3df9228bc46ba762b772634a5a357a2d7915388cf568dce954e4cf831ca50611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
