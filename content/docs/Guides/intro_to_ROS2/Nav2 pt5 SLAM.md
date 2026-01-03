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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=06d9523b278b1b1e561ba5b89f7505f29ce98a8c1b881abaafc3f61cb1340d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=6c35cdcc54b6cd2434edfbead4192aac122c8b74ee1ee9768f46e0dfe4465fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=3908e50382a4d6ff1f538cdae7b83f752ceecceea0ff46bcb169ab9ae9a4df68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=816b5fa306ba20b49ad2ee7b668c72b840e217ef39a1446526906c17e7237caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=6be0e81cbca0355f34fa9a354552863cec5a1a9d3a848f1b108a4ea484a14266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=b884c065c9e56cb7abab477bf0857b46f7eafab955476c1eb146c075ea937997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=9540a0ad6808a145a22f1af5d6b3d873e50063e07c93aa62df24871485bd5344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=b54ceeb4e44f77ac696566014f34c430ab76b223594a2b63d6b5f9ae0322ad7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=3d1bee60eac68e4d7a86b433b55894e68cd828b29c3b772fa8f2e814f012c03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=9bfdc0d9198e9431f4138204444b37068336cdcfbf7002cb1d77714d2716a297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=899e909e1d3157fd302ac5651011dc4fd5ae5622df4bb979f455a5ee80bbbc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=d094a2d0aee1a9c61de615f14e85ff80fc982c3fc7dd607909f62ea5ddd938a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=fe17d59530b2e754139669e4e1a7eeb1686b49e4494b8ef47e170e3feafce775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7WZ5ZO%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDL7v4ze4F4YUXnBhg2QDsUEy2fx6IZ7%2BrNVawmxNxRgAIhAMao%2B2HUV3w7PuOuIk34QsehnTMryScUpvewc%2BuYe11CKv8DCAoQABoMNjM3NDIzMTgzODA1IgzGkBvYAY537vK7UV8q3AOK%2FYqL%2BhDD3IjNYzkm%2F1uHM%2F2hPz%2BGqAAPaBv92mcA2P2lU7zfIJzSthihc2i%2F%2BQWwqYMJ60zlcZhH1jXzQQtGn6aBflMRXFOnPpNwPOKbYAth3gy8ZG7Qjm9i4HmqPVNKhx97yZwxbhA%2BRY2Eimc5QelLDClbZhO2LcsxWD9%2BdwWK%2FWj2eg3C0dX5gt5gxTHxHRlxKs%2B2T5upJrELxnb6ADD%2B6xa3v2h%2BzkR4nsORpPhoUXflGBSRkPVyH%2BwMGJPBWYo4OhpQKitHDnXlATqtxF6RtVuRO2LNLojOGFXHS7uXXB7Gm01YKiIesRpMJIHdTki%2FUfqiAD6WfQNoN1gTlpWZoNS0aScaKxKRifKu0fxMcY%2Bvq9AyNuRpjNbQZeypzADbU6IA5EHBu%2BfEaGMheXHmSclgTOBNUSkH5cetpmMv95EiYvtQJtviv2WhJ6JIkP0qIsw5XUuYeU3t3L%2FaYCp0Kq89MqdexNHbmInOE2IZvnO%2FB2BGALG1DieXbWXxYOPu6cXV%2F4P%2F%2Fdu7g1W5zJIEjB6eZelj5LAgsBvbFKHZ29bJmCShsK%2FdEisaa1X%2FIe%2FWHkN07%2FEW5X241zvK9o4JS1bEdnpQbWD%2FTXk1R0%2B1JG%2BzvI7iLWmobTCr2eHKBjqkActg31LLylP89vTMJAWd6XLKlblK1NnGbJSJap4cIbdOjihYzSFBpzH1aFQKiEWTo29QnJIrNmt3mgfLxqzl%2FeAfUTZUmpMq5Ps1S8lIjxQ0Hi%2BSI3LNUEhzzB4ofdA4SmhgKhDNXnwsBanpoGXrS1sn%2FZJ0yRs5LAbWawNNvmqlS5ytAx9DTM%2FZgY4mNryxvgMH8u93MwWxHEFYGltErDPrw61%2B&X-Amz-Signature=2816c8149ee2c983b4c43bf150def8e65dea0cc0ca9a30bf6b279203eb229c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
