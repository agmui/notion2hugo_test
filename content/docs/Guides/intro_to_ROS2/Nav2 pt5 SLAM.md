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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=304816d748301ea8e9674b35fa6e2a72ebe1365dd6139192890a53ea4297903d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=cb13d43554465d5171ac9540ad680a0752bceba70921a35742f32520187d5256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=dcf21f1361a91dcf719031b79cd708fba44d940fbd752ccece2e86fea88f0548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=6098d597a2c721d54a22fac54d1e813efd370cc662878fe2e11bb1a49eecf7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=dee035cc249145a2345af53df0213651b1435e9ed47cf2276de3d0d09a4c2ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=5a1b313d44600685dfffd89f260b2eb66e9c1935dd524daa8398dd3293c159ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=72b96002d824ab107d87d066d8334bb84cf59db6761b2fd0df5d050c42220766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=a988c51d4203808178c475acaedc7e11351fc470da5d0049b407b4bcbcbc196b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XI5TE6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH09PuEI3XArS9v%2FPXITevf5VrtYopbLtdmtTFf70zHQCIQCLLI7l0WMiZWQC%2B7bk3bcAPkcGCa0RzkwVN1uXCIFzSyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktUmdvV56jZ37%2BQHKtwDgJDOC6Ph5gEHLZtUprwtsvAEnylN%2BKnRJP%2B9WEVsHlGSlqpM9kevIOcX1ecdEd7gBk7C6pSAC6Rf5lfYAcp2Jwm1SL9mqhwsxXTtUasQq6Pk51QWYGpWnWT%2B8I91ULZXuvWscIAV%2BfGZKKS5cyCi1Zk9HNFPPo%2BlvEZV%2BdFigWjxEuqysiQZT5qFiQMd5ntFGYrGZpYlmuSYbAAblEzkoOqOSQ9m2oU%2BJJwV7JSzDqkcO1eupBCxtBYg3TUfzs8m4v%2F%2F%2B9pvMbSoy04ffH6HUn8J3cJA%2BHP2BNUQkcjJf0d7LmdFulpMFWmoe%2ByjOd6eRswphI%2FA6gCLE3EySACp%2BSD1%2FN5sMJZpdFacHRX%2FSb5VBEJ69xRSsC4F1Fl77m1pz5DYA5dbM601LsYZutGGpXrQAmwANyh%2Bb0vxMlySKJBCW3a5qHz5DtF3jBBDRcdwUbnYSu6%2BKH2YViWO8dwVS11zRpdVSJJ%2BWWGdqGURf9vD4otEkY8wpsJC0jaNigPZNHYUZ6nJvIym3NB92ysZ0SzSKN%2FAFwFXPdElfeaQabyTzy61774dznNodwvGdSjW6svapqhYWb4CZftiFvcZoNsC%2FQTNNWAVe8vmT69KSxGaf7MiDkhMARTaqTww8bOdxAY6pgGEGe7CHY99fUaPvTzmW3UkRVyRLGR5u7RtoMHohBmZE5IFb2%2ByU2%2BgErnOZm1ceQBbypDh0L7lM2Pz4uz5z9Q%2BteFDz3KZpABrn6V%2BafbLXs%2BgRdfL2e%2BLmlMieCzIkUQ3n0I3Vg1cwYbOTaW1XFLYsjhfLA4ynSgdlDfZHciwHMTxwlD9gU3gpP8RcRoEaXWZI09FL9EuLBe%2BtYqKmDsmwSyJQ6wo&X-Amz-Signature=3ce5f3a3eb9e31f5a2142e51509592ee259edd067bb70c687ed19d07c74c573e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
