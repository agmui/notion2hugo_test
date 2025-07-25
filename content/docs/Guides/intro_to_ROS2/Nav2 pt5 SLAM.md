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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=1756f7c917a744c1eec552e453044c93d4064fb314a3be3ddd5d583aef0cad02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=a2695e011f4416e61767567c6ac110775cce3a3edf3a38a79cfe7ff254d24f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=6caf868e9a86f40e012110694a85f9e9f90d5afe0e1ac5bbf8e2ecc74ca78c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=b778a5c2cec5f7e79daaddd76dc6848a2d6514a588c2a3db98fcb0a4ad1e3c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=53b786c0b0834d9aa30210593473e5c790dea9522204d1ce24d365e88862863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=205bd16b1d7a9355cbc3d38ec2ce6e3d57ecc81dac1ae3603f0ce0b790393c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=45eb921f0b6f79b5ac4a90f29366d030acf94eadd04950d7b9457ffe6d6fc361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=bc91d41b8d279c139efbd86c130e4b814a8b30dd3cfbb48ff96a13681c5add30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSFRPN2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVPZdbUYIryRLRKLDP7RHEun1r8kJ%2BpcLuyjiewkCLUgIgMhSi%2BDqPajiFcH8ILUkyNavjlcjW%2FoF4ySAAyqVX5gcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEaJr0vLq6Qwwqm2UyrcA4JdwOSGYcd0k3ZxqoOS25D627KffTxIhIWuOlJSAnGzxI7k6AmcTGLnVBSayoqNrqxXOaOgmGIwtrhyS7E3AiEkmYanyAadecjBIAPqPXiTvj%2FucMMyoxEFT6tSVD6l3DSdonriXVdvAbfe5W2BYfsya8pDVnaLFPxVpGLpMzAU3SllvbLOJVj%2Bqpi4OMnWMY8ZOj6plBEU%2BCe8RWiYfpzRoew0n84Ncx009lVmkjywIxTCtdk5WBw4m2jqIFRwGgbFUluLa3Rqbu0ROBaLDvOWT9iDVX%2FVJI%2B5eJ%2BySpWYsrvBZVdEJHbhxuwjl2rb%2FalHOvdEfGujxs%2FBKXECy%2F%2F2dFhpVnYdabvOFEamDoXiYNMufhGNlyU3eHMtovcwbneZgsQFv4cbv2nzKTi%2FEni4geyjecUKQaCfIN%2F42%2BZr1NkgjLnnt5S%2BdnvbKqUTevxgFEKXvVZqwmNWujB6jqo%2FAs4otCyJsAJC4TYuURGhhljfMKa8YVx24TesDL2sMxRHUwi6SGg%2FbMiPEpquWGJhB4AaZ%2FWfZXfjq0uEWrecizdO00tc7nOi8VeR4CC24BAETvuDqW6Y8ZPriJZSUS8WGE6Cs%2BY3MDSWiT5W45AesusytOD1JMokKpO8MJeNjcQGOqUBjL2vhLjNdvsa%2F0tBE%2BFsZtWZZPpOOceUq7%2F4OpqtdEUUFJ%2FsbwDqnVnsjy1%2BpuC5xUzhqBjt2M3Hrde4e54NBc7%2B6NbbILg9d%2FesgcmFS457m%2Fk6sL%2F1flKLDKmL8pYuEudJrl0h48Yv0c6BXIGQElvpqDY5qY%2Fiwtc8WHKmU3e8pq0sHQBq0gciFs6lQoPo6cRnXXcMk3Y17MsxysV7jwlyVINw&X-Amz-Signature=ff84e62800744e058b2f21df9e0fd6dd05644d63bb3d4a579f87227aa623825d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
