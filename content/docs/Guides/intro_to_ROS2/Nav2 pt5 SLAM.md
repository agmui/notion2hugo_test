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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=54c2b0ab2339bd9c8162c73c7bcd3aab127f8282144fddf8d82cb5e298993130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=51aa325d5dd05be116d78bfa532e93fcfce58bd3ea7f3e279400e6db54be4b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=fa5fd46ea38d4debcae59e4f75042e854a774802646ac91deed5463c4b73bd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=bd2320f41f423408907dc377119f9fc9e8c83b81811678a7a89d77120a5c0c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=7e1e0b6bbc1f7c1e0d69b3604de3456f077ca8f09996a6b088d9e7500a23c4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=d5ba67bcb09acde7cc8bc884158284e8073d7c5ca0162e2be26580bb0f5143d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=c2ab9449b391f3269f1c46fa27a79c32ca3459068c754aec6d109cae9aace628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=c679f9af1f6b47815863f64a64bc56d73f2faad4730a05106d1ab1c21dfd9176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=cd832e9e937da17cad216ec929a8600abc8044821288b07bf0e244942c235be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=49e5e2efd94e3ef4593a2b6bf84fc6faad029146a96a501bdf0edabc4bbeb35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=978a53e4fce259c459fc591c5cf7bd60517065046944fe3b0f4ccc8729414888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=c6a7f8581f44e2b24ed530222d9045926a54be12292edad0f19e73e0aed142c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=cfd0c90b36e416e20023a95e712634465b3b6b1d33d5c09af6a2d65737ff57ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3NSP4ET%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD7JTJPgV0iqhFG1wZs%2B%2BADu3FEzHtOaqPlspDmXIhQuAIhAJCmiLeNAnDobfWkitRp9XMeY6jvshw9IEgSbmKOiXyRKv8DCAwQABoMNjM3NDIzMTgzODA1Igy0PnzfWyaZGtgU550q3AMfxPb5NtJMKvk4XgY1aMpwCRIq8bTtS%2BZa1WJ66a5p36ymzwd%2B2scHwjQPovuTCA%2BZTTMqYNHWVCBAyjskLPnYlXR7eZHdnH6D31o8N%2Be9uWl3zdbGU8DRXZPwzs3D5jy07UH2yxh5rcobqWLfiDoW3ibJTLxTleQRIIRdX0Y%2FjNZp22JRA0%2FttFidS%2Bfw5Soh2qAeTUbmZzyhiJW4g5xjUgatMdospu7CaPToY0D2Obxy0isdmHYmhGW1E4%2FW3ofi%2B6RKV31UOhN5ttZaNvfBK5Q2%2B6mKxSJjwHy20fVtHr2zA25bynjN0Uhf%2Ff4mtZzfBVRFsccqgUq3jG1YCkDlQNRF7pPpGUBbKm5v0A5xAsB1tk89%2BAKWRmMe4pRolMFNMCHJDpLC8cmOJK8b%2FYS%2BmceXSdb5pioQPmthYUWyQYN%2B84mW5m8uErL78qROvWdZtKkkLQg%2B%2BrI6QohZx4vDqBE0j%2FC7Cdbq0PgKzlNGIrGDt6NO%2FK9AW5sR6q2A9oKCaJZEqwShn3tZRbujO3nqxPJDV2vYhZEEOXf35bqyHbTf5%2FmTsUEF6zs3EClVYlRoHOkdaL383ABZxj2UY6HCQxZnE1O8QxwkVrj3QohHj1dhrDKzgbH3Hta93TD7g4XQBjqkAVhSgY3y%2BCq%2ByuxW2SHlvBzbIn%2BS16hPQJM1oooBKQ4sXD3XWIeArjqkzeNTnDH56ehw%2BjAVMWzsgLlVouBKTHwIxyuZNRg7sxGFAzan1UEfj1zTLdOUu3fPOA2jdL%2BUW1v6CjR6QAVCV8kogC1tV6MAlJyykPfzwa9OKSgVODe8QQD4tisw7ds28d%2BqWB0L0LCe2wPe%2BIXe54hQ5SQoDs6Gl0Zf&X-Amz-Signature=14f60d912f5b1b31efc8eb57da22541cf1e2abb7dbe6b7390f91f4c22e7b11f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
