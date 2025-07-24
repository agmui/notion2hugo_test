---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T10:35:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T10:35:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=a4262323131d1f0502bcc49f88a4500caa8f156a9d429d7140c29c857e5ed932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=556005fd7ab46f524bedd2a362bfd103606e581dbb14addf123b15abedd6e225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=3de42fd1893a5016c76eae6cf77804eeec6a6c81150c852bf1c8e8ce88d1caee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=623b9d42b54fb084bedd71ceb17d86458e96ec74154743ec4bd2dc76d34628b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=6c6f2e6f50e48b24bbae1edb6704d8958aba9f0d7a4d2849dbbf9a705648fcc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=7623dc92e9f7b4c89ea3328818a051f45bc99e6345522b7f82a5192b01a868ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=43e4d6cc34708528c52b17c9c2607b9ba85826376c39ddb90d9bd14522c608b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=a1511a3a1ab744abfbe41abedeeb6b1e98e0e38328a1ca755e3d437c3408232f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMU566%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICD3TGin5bqAPJ6xjlLE8I%2FWDs%2FbsZHGLbpOhIebQkmpAiEA%2FeTTgsxg0PXK3VlYRZfzdE1KgnZESgx9%2FawkBxvfPTcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKTyM%2BCpTqHY2O3TFSrcAy8dldB%2BPIl5mxFb5xJxt1NWyZ2ii03iGxHa6FFmv1Stg4cNZjUmwFT%2BHZRWK3fszQsX8atEYRYlIAbX9y1rACPUpMWS8SvT%2BcmUOKUOxZxcvKPf5RfTcTmbyL0toX6sFlCCT6nUXNgS%2B6McwaY7PufYbosUsXCSvKPdzXGii8dLmy%2BDrNgjgRk2ai0osylmAcZgO%2BcTWawHltUDDAFe7ezpmnLEDf%2F5zEgOXGFRyZzb6JDh1X%2FsO7Il14hxczl0TpO3cTzy2CbQfxWV7l93sn0KNFbHvfOO6fx21fpV2Pp%2B7ODWkkhqeGA7q2qhWHBlzXFUCzuyeOXQhYe3jX5SGKB0UiBGB1n1tUy9hok1IPW1sp2SeE54apZ%2FDiqR%2BbU5%2F27OWRL5Asm2kt%2BzfAqH4v5NjqnDmaWJfDUJEq5T6alFjprL%2Biu%2FTsf3MBA5ZaeA2UZfMzDwYIadB%2BPBj2RKtJ5hXvVz2Nk7MRMxw7EK7argFN9vs%2FIl7gAzzcq4xeKaUFN8qUjiNGRvUSclqFWdOQVC5KVQhF3%2BTpSLLSVwfd7I6C%2FXgzS4Ne1OQm4sLRj5q0HAoTb8CbnT35CN33x5eEKhSmCMevHDE2busnRcOahfOVtsuINPrIieQqXdMLO0isQGOqUBe8IfaVInJUHBm0Ogc5ID3W3pmQfvY7QnDuxGh9T%2B7ZEdQ%2BjbsvJAh39pchYv%2BUizCZCiBHatqkPXnt7wwPp950zEyIJuBvV7H39tQM5jGRITAK8hqF3bbSzpg9EgSHGR556Y6FsJTuBzXWa6Xw2OcFXEup55bAKdzv%2FXzoLD649nj8tvsC38GQOPlFZUpzg78M2PuSczOQz6r1jT%2FL1C18Hu83Ld&X-Amz-Signature=59a32187da06ac7aed365661358f838deeedc4a8ccff509c0e46e39d636a38de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
