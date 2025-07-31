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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=8d2d4b57d98ece0c54be3fab115b5e61d0a8b616062dd701e085636444f66eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=6fae66390fb0df56ea42b7ae69b1ebef37109902705a7d5fedcca357eba91b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=27a542d82aabe79b46defbebb0eb21dbad0c5821e6861237ad1cf57cd7309406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=b484dc0516e86d479fbdecf5b8a5b16e708c33350fce3f8c7ba447de2a81f943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=6fee75060199f14d1b9ab3d8967042fdaf63b29d07e50b8bbb6d491c75d4b8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=1ff353f60d615a105759884592f37ffeeb730ca4eb69357149570223f2f32a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=b701670a3eef3a31fa15caa4aef754131030cefcad22b452deed4469d1f99f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=9c87f4eb2eb30f5ef03d23c7c88652bb4709a33f12ee477d95ef7afd35b0e461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=363e3065f0f263a3faea75454fe0a459d82d70fab1c9b6a50c5146acfc3e8809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=e415b9260857017650189a71f1cf992722a47276de0b538e3a9b5225bb2166ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=e4bf5471e8da5c8ed60b90ae62a131693535583665e8ab9ef7e737285625f7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=d4243f132a647f90c594f2f81f406e8810de9c3de06f0aa00587f04afa4c1c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=4624dc59fa1cf890792685ecaa32172178cdd9cc23d17591cfefceab942f451e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK3EM4O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpB8K2OU7hg3Go12xKms4bNsec4BRZR66jbzeE1K61fAiEAiQnm1FVuOrUH0sWhqypBCb3WGP1YsaUWtqbj8fgsgcgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnaO5MW2dB%2FGJfsICrcAw5jbhSC0L5M%2F2206hqq9XOlMXetXPVqM7Ig1jEKn6vcR7Wn7Jjctqy0y%2BoBfQeyQZw2%2FK%2FxaKABv00vSDPexcm%2BYwJYNyalr%2By7EyJ8deVytxPt%2BskIWHHMOIrS5ExQ%2FQLsLN5p8Ok1E6fZ2wC2XPH3AMqztTIssSOXJw0z0GbuX5n9psTttTn5Ca%2FimyzodujLy39IXJGU6hRusBKxEnnIhLWyN%2Bw4nAKXgEyo108ki%2Fzzgslf5paFCv8Oy0q0gYIHSg1yCp1BBHLaYFxzhAgnnHHfzayXO927CPP6UNzrtw7Jf%2BhKsjJB4zMTkgOIXC4WEUHT1mWUkMD83IDOTGgCT3cCviZMF3xoTl0qVleY50hJjM9W0DCtna1ymLwYwnLFX4BdxL7T%2B%2F2fXOatO5WSxfTf7J6pGPKkOSnnR1tcxAlzrfVIosYaw4sESQe5%2FTEnvlYdGq%2BMmD01HbcmGkoANAHEgRGhVOUfBPrzau5jMJajLxpms4EEA1AeWUCutmskmjQ5P8BW7Xpc2UOJxpkQm%2F7NtB0IxPKxJxs8Adcf8WiCYLpXv5wQ2iw39vwlpzIuXEyN5thtkJs%2BIMg8uLA1vRUQfUU6oTD5iJSgegfeRL%2B4092qexRLQBS0MJjqrcQGOqUB3G7abBsGKvnNwGKhrhVXfoo2kTHulEaBjYeasB5RY6M0t%2FZdQ1rEJLjxAJEtnn0K8BztVvd4pssIPoJ%2BmINXTBSQQ9rhzLQKCMEqzZ5XFBTha49jGtLVNtmGgMyLLu%2Fp8NZYAhs53dmJkRO5UdScDScL9It3s7HxQ75hp89R7eHTETzL3pesh6RKCYgdNzy0VUJpQp%2BIYId5lKrodi02QExYPgQ1&X-Amz-Signature=36877da3b79ce3f2072ddf385d2e087ba68ef951b5c0ad8ed5eb89ed1e3df449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
