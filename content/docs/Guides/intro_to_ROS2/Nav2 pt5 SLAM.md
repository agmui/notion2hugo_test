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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=daf8441059537a3c5d379b2622d3c96172625d9cafa17593e76fdc5b6055e2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=35d23adaf2ce528744f4dc7c1798cd1ffa6e24e2aecb26d66de1ffd6d059a65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=661f112ba255266751f069285356df79a05ab4b429462df1018155094f4f2c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=2cf3c823c8622b9dc68dceb6e1d60401a5cb6f48ede0eb85f8880106f924f0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=7b1556273cd9e6f26355b4e2ebbad42d958f35dd2800778618fd9171d994c7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=c8c59c05cad65651611176eb5628f7a5b82cf9fc9a7f20b1a6ec99d906fee470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=f6cdc47e89016020dca5690a2ea21a0d169c54634e4f6163d00717ca3924b238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=1bcb8b96487c41153ea546b2c2ae644eefabcd279f7c536c71800d43bfb218fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=3713c60b8a2bce5a228766ada5ee31c5c12f51cd051cfffccb98d64284e755aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=218a61de728cd794fc81d94b806dee9dfe003ee6ff89a0accaf699600a8f7b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=39ce99f40531a9ea26b4c96f15ac40479ea69384daddf89aa1aff6d28f4b573c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=7f988df9225751e8a65c6f7cf9582a61296f25a6474129ff55449210d9668394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=e6f3eb04bb9ecd2feb0b277a613b3d6075c34b7e34ce076e434b9f02679572bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WLVMDL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDo6VfNdQUZDF93ok05mrNkAC4MNSqbY9XsCfxwSuRmTwIhANxFaRnR6ZWPpp6A8xd%2BVCAvqLKKv5XE0yIEDXUk73qtKv8DCHkQABoMNjM3NDIzMTgzODA1Igz%2B5onVy1PTeRj5kKwq3AMsbxvVq8IOgq8CQm8ACop0NvjXn99oaFAHcS81QpeuGJ8HodExgS%2BryL1tP1%2FMYPKul3MwhkGzwCYpxRV7XsWBIR%2BS3HOlSYB2okZ88bLI7auL%2FVgwfkPcuK1yUd3rq1SpcgyhrQVUHvYPoQv4YMFE3%2BxSxij3fkqmvqFXZTelZk7W6jD47gbBALJ88Qqjb3FUimDhppy%2FPNJWCRkv8XiHySctRahXcr6wvSAf1B9Nb02X6FUWYH%2FMsydrkeHEgqrQNeul4WtdrE1E1RQ4jrNyL2vLHOxhXCni7QxzLZZalgVUzGMykOhUsjicKx6UnBxkxAQwGIIBL0LSJzdGEi4d%2BcC5wEWcAZ%2B4l54i%2BP0ZU%2Bpb1SHy3udWnVbLpzB%2Fufb9hl6XSti7oBSW%2BbMtrhtpRhmUsl3jvQcFeItcj%2Fgycsnwg0LpgVV8wKA0mbO06xUdoou9Pu1PJg5Cu7MooochhMkuYm4u%2FEcMSNM2WHsGRYzcLD8JmEEzq%2BSjlWt6JOsPpsIhbhf1WXtBN8cLX0bT3uoYWMyjcz6mpqufzOL%2FgUlvIj9qqDcMXfgzhMZ5OtAbfUX8sORH8bFkg4S2nsDu0OgTdqmEekAjiyf0OFU%2Bntm7R7QFaiaYlMh%2FRTCJ%2FM3EBjqkARsLLMhQwxH%2Bu%2BEohhOYAH4uymncpuJ8YWiyRWj6ixluqP1DrD5rlGQ0YwCUwQITyV%2Bdd1YUhzOYLwCZl6miRgvfmsgcdxE%2B8dM1HenqO5Wr61gTlMNaf3gXd6iRZZ4jqRWe3TvB0uFmc4TGAGIKJ5thMbzIgX4SVcX7kc685QPsuqVHaKh9q%2BEGMPUC8ASWDWpZAJEeOn%2FDI4EPEUQ%2BGq5xxXIL&X-Amz-Signature=9d443396582f6f407de0e9a8c1002d4fc0adc0c1c4063c6c555b813218a16b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
