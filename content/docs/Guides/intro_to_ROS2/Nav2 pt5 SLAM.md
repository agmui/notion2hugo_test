---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=c58e270f71f44f23d38f7c22f524b58a1e5ff36e17ebee6a06f2d74e4a23d32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=31c4d968b948e1f0dc497019b04b14de90757440a827d8a23623814d97a47420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=13f921439839df3db459dd032d84e5ff464e592bf72568495dd28bd10acd6ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=f68a5f264845cb579141001290543b728844ee36bf60b57f67a0d9cb0b6d403d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=54c952aeab7860b4c56673492a12242b4064670b76c14080cf5fef5aab7c0854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=67fbb55445841c2c23b8959d8e0baafc35b37aac6e2a43e5968ef142c4ae8e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=bfcfa48c5a9639586aa6efc83d4865badd4081f9f96ebe780396e6a49f0325b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=629ecc6c345915ba94982fab44737947b81dd8ac4f7219e8686cd2038e494b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA75T3X7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGX9ifmPfAw5D%2FS5TEVYnZoZV2bTWE1XDmkWtPDiB6vfAiEA4ZZJDBsNb89ebfoRqI%2FHuLfF6Fp2E%2BHi0zkMcq2GPYkqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByd%2Bcxawh%2F%2BC64RpCrcA9Y0xOIMW9Ew3HL3rBe4ANQpY%2F0Zf8ZoVwrLRhPn%2BFzzQVXVi%2Bv52a%2Bgf9O7GZkNf721LIl4vMVSjMTPxCJfQleZrKI9YW7M9TGoiY39ppHpmCmbMX6B%2Fv6lXieGhI4L1XMjGj27Qa1JPpzAC%2BvKBWr4R7CALXtDYsU7%2Bx7Yfegvcn3I%2BQxyIF5fqxqzF6cO%2BbHmdILROdc%2FJHNQwdiGS6EdJLjPPKCwWE3K5TeDepmIMN6xpWCTIq0HR%2F%2FIW8isO9h4wNIRnmOVChupmJTB9FpUYtYG1Lg8Y1PI6uhKW79XozCnSoA7wPENtViPiavYcb6EX41PwlxXYNF3%2BbCzh5jLgbkMiHIEagpa4RIFO%2BZj4X9r%2FXjM%2FXFAyf0Z35uCrj4fBZblJ3YO5L5F21jW7Y6iYHIZS3n%2Fedq5W5TFqqQQIqSKo44%2FcGnaBCjW2IplwO2PenRGvVIqrshJ4ZeGFs%2B%2Bwm%2FjIqtyD47KORrkzUrXPlcFFQR%2Ffbr9Gv0pN8%2BZkzKUNM0%2FBfdkr5FbPCU01uL3UuaaAd9vJPvhyMYuc2Exs0uaZR9Hrb9eq4AmHXC7NTMFRsLKVAeBrOs0K%2Bx8WeeIAjMPp%2BmBGbzIlggq8sZSRwF7UALXIINlcAcOMIeTm8QGOqUBvTld89JikK1Bz9J5%2BqeQqRqEvoSGWZEwN22xs7xIYWxWH0UPueU7QX5bbUIEEauy2iQV7kYYddZ5pVB%2F%2FK3hw1ciCTppWRg6mvKuUMWb424CTuvv5NXYHYFZOPzOOPCAY8CGyfmm0FHQceoThZ%2FDLKEmZQn9%2FpLPbLOieUcq99wJ5dm95nSfbqv2%2FQBS8%2B6tTch02LJ6Y63urTPwiMBeX6pKp746&X-Amz-Signature=422d56fae88c82d2e3db301e1b6752b1e591029f685ae360c4c46ebe62ac6f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
