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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=73036eee683ea34fd2d1e137aa1e722e38299837602028a18c4eddb441139df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=e269de7f9171634a6036cdfc52d96dea369b16733668cf0e4b628c2a14a3dec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=2623f775466e487fc575d3c88e801a21fa87367aa588465d902f020c77abd183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=c7d37bb9c0684eedf77d1474d6bf13bd3384eb94855cbdd634ad128ff04b4f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=65c30d80ca487707262b7f3d95a49e89452b9af8a9d44b2c8df84a9df8f533da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=47b84658f7adc55780cb68fe7da9694cae0eff5389622e779416df4fe26730e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=93f8afcdc40bfe786204904d998c9414f01be35dbe7c89fc8d20b43341027aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=d7c6f1f1c85b62adb98397e4bb4ce3e98824a027fcdee101075b7afb202d3135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYRDAU7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQC96zVxb6iV1ehG27h1A2eXaEvxxZgsOrBnRyPddCccXwIhALlVMjE0uS6fhvlBwb%2FN5UY7OyNH4UQtgG9YorO%2Bc%2FZIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FgyUGbRu0oW913GUq3ANA3JCl8gA27SSfXB%2F6fpEXau0UkjwWU3jRC2Lb56fsEOf9vnWJz%2B1IhxmBV%2Fcf4W6MD7XTLmzO%2BdHeHwOH2gfUqPz2uNwfIg8wWzB4hV4mS%2BTShoMy%2BjGbC8qV0EbNT73%2FtX%2FqnSOBdNjFRmlUDCszQocdPzhNH8HEoeR5BS5IuSLjjAZyCag2jbMGlCRNRuA5nFtZwtOXnCUkFIuTuxQ%2BaHTzqKI7I8X6WJPIMFYVbZWkBnIfKVHi31L4SBtNLSe4819Jt%2BpTDNIPaZ9vIMmZiSe%2FVrFRhpeJOEXdiYm3sQmVCj36R2w1r5kIIN9kHCTlbeQddYLHqKNJ03IRkqzadreDR%2BRoQlwbCFxebZGWiUUmUJ2EHpWqrxd%2BXclDkaBhcquw8OoogLAuRNXBtBUOsxdHHDdAmw3iu%2Bwxno56wHXJ3iBUHvPLurpu%2FFleFP9yyJrlcrX7PQGvSKm8ifJiZwoZWtFl%2FxyeCVgsdKoUXJ1slxne9c6RgXZxpOOQj552MO3diu8d4lNnwyjLrXItQrewnN2gfMam5hgFFz%2BF4MdOt5CdbDnWjeOL%2BUhFFGDEroS6c%2BamuIcJfEsfZpkeCk3M3ezGcHD8Hv14S%2B9dDxV07jPU0b5z%2BXb3pjCSkJzEBjqkAVF%2BLQlW4knPoqwpD9LFU2Y3YcfPCmY%2BdN1YBB8sIGFk3jFJSSmfMrzPc%2FuiOusDauCRn4v27A62GP8O%2F4ys25Ln2fFVktZXsRg%2F0xPBmCanxo5Rv%2FXSXKH9MCkyLThFdI35BrW8G3MFV%2BhfyqTq9ptCxz4ll1STWrWDnXA%2B7LRRz5sccq6jEHnGpc4tgseR6PbJpg%2F1QbwrOthlgI9nuJmlW6xr&X-Amz-Signature=7ed564f7284cd07723741fad93c65a1aa06e7bffa16e24cb890990a4c9055a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
