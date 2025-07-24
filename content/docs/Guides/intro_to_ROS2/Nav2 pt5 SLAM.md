---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T10:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T10:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=d2d1575caeaf2d5025d3335231231d1d68043e2a13657dd504d01ecec30cf898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=4825a245f32373a0f279cc488ada6119fd0747d59b5dd6a0bedaf15f27924385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

</div>
<div>

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

TODO: add rviz guide of viewing scanned map

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=a3cab324e89bd7bd298a7493ece8088fb73805c755af9274d3d61b9692005994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```xml
ros2 launch slam_toolbox online_async_launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=57ded0a330b1a3789b772ae16dba83a4228f0ccf27aff30e423abbf3f7dcca48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=7f4f8682478b993d514f36f808f8202e0941398b85d7fb8317e0fd242518d029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=deb1a8e11762595119729815b5a8d669b7102183bf058b9ece5a8e00ab0baa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=88bdc402ef45204ad6d38e30c1418fdc10a1ec1a4aab026bc0a56d98ae5d4013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=69f0ab3aea65bb13a2930dbbbc510bcf4d0ba4edc9a9a42f41ad59065f93d734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IJLOFB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDwXJ%2BJddK9TQJKsXRaO58IeQOUQrIJBx%2F2gYk4apPhuAiAv4do15KhGWQ6ktQ6S%2Bl9jyZ2LJnDUEX6SBcnOJDZtXir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMveXV648pAyT%2BZqJbKtwD6p4%2FhXU%2BVEbsq4Aqy%2BG9AdceC7FAoyA3Dv%2FGtLkMRGLZAqHxZ%2FwP3Dzu6LwtQj1vfr4n5HYLQR08rqy%2BTM0lIbbLxLUf06wjv1ffh0rxTSuyYJ%2BrT8ypXTYjZLHEIOfscsn5cITBAYay86DCqY9ltqTRIfcXQcsu7H85AukVIF9Z6wsTw5YJSQhaRGvGaIUPa5kN%2Fm76b05PUryhOMpWYdMYe9nATFA58jaEMSjYDg9tAsnKR6XrsjnZKF1H03buUyC2GalvGn6iJYHGAn0sfZsv0rLCZC%2FCjlfnyF2pGWiQ8DjFYlkdFtCFE4zK5LdWsjm009IiDVCsNbaR%2FLrNuxIZ6LGmH8greXC9yr0dl6io4z6v9yprTXIoqdJxYYF9KdAV%2Ft4UvUXacTF6mem2eCkcKTPGLKLbhte09bTDCPeyGNs4tAvZHguHk6FDcZffRVNAnCelxZ12hWDBsrjq4Ot1D6Y68cpf1wI%2FS5ucPbSbQY6uREDBPsdLO32szlPE67gFISNhaBApOM4PatBKCG4KV%2FOQT4KhQHjHFyOSYXVdcLm1ScOWtho2%2FMFh%2BPku%2FiN9ZT8GNfVJMxQtG03qdRpuQlhZ79IwxLb%2BFjgjW%2B1yquI1T8ZXHBa7Opsw1o%2BIxAY6pgEKRTePoRbvgKZT%2Fpn4DMSHXej63V9nJqw0XoRjjKXRMCLMaoRyzFx92Q3Mmqke4j%2BnDunrIwW1%2FrD00mIO7ChzO7WZzJIk6fdsa2%2B8UT7h4ZKSbJ8Ijj72QWJbTFWC%2Fh1cN7M7r7f0Mq4l9xltr5hkBHMsD4Czz55r3fVS7YA5Vh4e5JW5%2BmsAmTFHDWo84LtdusVuxOBAOhplp5bxwxiKZRWCPmwq&X-Amz-Signature=6832074b660cc266eddc56d4d0bb9625b3cbe78f0a509bce4dda4beca888d368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
