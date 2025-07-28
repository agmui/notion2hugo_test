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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=c5e9d1e1151b22c95d3bfac2932d92f04c90ae1caf3319b8e8df8e2779bb6533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=0ae0ee8fc56b4521c944760d16da648ecbcbec7b5ffde21e17f994a87f3f07b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=ae952de368421cc8a80e84a7a2e575158a657ad26a92b35076a62f49c7d72598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=9d18385c741b0028ee2a15becaa0311d967dcaa1f6f12a4758e4d592c9df0b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=5bf908138f04d46fd0c931a5f79d650619cf606b53e9306f98553b40f15b659a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=96358c6064fcaf355b9363cc93514d8c60b27c6ee1e0763763972f11e7ca2eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=ba6025d1110fc63ac5a48fb5c3f334f4aef939da7ebabe3f4d2b142656ce592f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=a2fdc0787a4f8f31a3a4224900ac07c7f0907442d4dc15ba6e4d79c6978b468b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJ3Y27D%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG%2Fo2Ro%2Fo%2F8ZHZsinbjAvdTD3o7NR438UrAsFltiuYNEAiBpDX7OkYhrsnjSS9mmzV0q%2B0AqihmVnL6ZVP4Sbtx6XyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcwuqPaXx7lAtfT81KtwDs%2Bn%2FmQjkbqtSj%2FObleCNf2%2BQdAAz1%2BKkzYpRoi3Fu6dUGlhCTnUkMWTM6oKIYkF4hNBcQ0gTPJa6v758XfP44PebuThzh6qKlauDkZsFzpgDRklSlTAtEJWe1m49hYijjq73XCcTe1k1YcVVz2ck7HgZlFWq9jboro6GBBuqta812x5Bxu91kZhFxOVW%2BvoJfmFiEahNIUsvzHLY7iF9VsElrMVdoq2aOLxQS5YfTxvd%2FNanlzQWFoGG4mNiagVhigeAXxKYQM2W68osMUddLeulvaXf485vYmaQOw7URMNKXfa6n83vOQw6pO1QQIKlMU0Q5%2FztXoZIpfQEbksdjFLsbi%2FC6MmyZPBOmZVzbq3jdl1NSU7HIsNQcaPQv4snAM7Nxo4BS2I7VS%2BTXguauUm%2FgPgx26NNXNA2gEER7w4OWqPCaPqoizYY6nOXGmtkxQWyWNmh3mC3%2BpP%2BRSSsrCXv4voAQKD%2Fkt3eq%2BzRdx0J0JRNbEXO7epMR51JidZJzNFeRvK6wNkTgRB3bBHgme%2BR5TRwiS%2B9c9UI93fIYvuXfVtN1junmoY2nUrh%2B6G4D94GsNZqaTxqYqvNH7s0t%2FDrPMBUI7RLh9CQkQ9bVkvKvixtViLfs3D24R8w6MWcxAY6pgFlcnub6DSGiV28kHd5KlzY5Z%2B5F0%2Bsy81mcs5NjiexVnOqTK62s5G74QzPtA%2BXy3m5%2B7wURrDdfiBVXz%2Bd%2F%2FjJXfSdpcnj%2Ft%2FaZts46JontOI0fNj8JK7GyuBdNbbHwsB2584p6BchH%2Baf8MCZ0bslqByARGkJsELFOR3hPk1WcC%2FPxYS7RehgpSq6Zx9PP%2FaZ2qtK3lItR6L97I8mkwpp6OrLEyGM&X-Amz-Signature=e50754e72df6633dacf999671b3b4c7cc371aa49972b4b233b65e0f8a53ed11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
