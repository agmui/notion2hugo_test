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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=12974c0041a1e1fba604c3530c5c671f29d7621f4cda03ba939b0f3cbd9b97c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=05d839869738eb43dc23e2b5a3b2e95e68506e51d5b1f7225c48542d22e4bbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=84fdd1475ae75eadc950afe20ec6af6beb4246aeff430654cf2d91f9bc64361f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=b5ed070c688341b982f755d64ee1a1dc3d316aa29ac5594feed56ba53e800d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=04989774e40eb2dc9c598cbcff73dbe94cba718bc426bee073311e5a8955b7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=d278ec6ad6eab07ebe3da5b90301be7cb6411e6feff6753142987be04b072af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=305c336a7a60aa814be133636757d4dc1aad546c3cf8fb45e57830ecc3d5bba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=640cd860d4a39a65bddeaa4103765f2e90ab9098b5ffecc937d5c142004601b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6D2H233%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDiWu3bZUD9f4YRw7K4vhJ0HHw9%2FWkif8yyP3vLXsGvaAIhAPbagw8U2UXdItJOPB5JnUha8pSWI%2BN9p5fT654HYkzvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwrdrmaqxWsyilJ5Y8q3AO1BP0IZgm0%2FcpUxrcDVbAwxOymWgWQl0%2FnG1QJOFLE2uT%2F7pqKhCXts%2FALhyLxR0DkxFxu41Ye2j7YWZLm5suUhC1gz6o0imEw6ownfKG5GEakkTfB9YpCKNRwR1U0U1z1M%2FVeoyuV1aXCg0F40Aa%2BqUeRXJBt2noHgMtle0bowkx%2FfuBuzzzpoWb%2Fi0NRnANuLKnXFJWTPuE%2FZd%2FAPoxHBT4nHlDOVzZepFZjH6847mI1ijGosysq6HCGWFOzQBvnKgzV69OxlxOsrW%2BHXvUcoOzP85Htv0gZ6UKJRRAKlX7MkkJqENVZAmhV6g5Y%2BULVDfo%2FdWl0to7HKq9MDYpMVmWNx0DvtKVBzjaj096FMu3Q8K0sLXt7T8Rgwp0PCH178LL%2FuPfSAkI388Z94mKMXqM83%2Fps1Zh0nZwZOqIan2%2BShueM0yrfHJH17m9b%2Ba6DMgN9pwIbJgjyPVKGXIHPiTM8dBTkqnNcxzIhFuDtI1VN09nPZfH%2BvPeh4EDmDj2G%2BWZVATuWrDmU%2BGA73Wwn%2F%2FsNu2tYKTWdz1Zhgao8Y9wsRg8qIuFWDKO9q%2BL7K4tmGmTvDIPhWK9dILPnYinH2nQ50FxCDDN7rhXfEZPk8JBKgbKjB3LBc8AgmDCV2ojEBjqkAdd4CmF6RF2UXobvnmmDaLvijhzOW43LW84YbZSDxqg081GQgwpQ3pGalL93%2FVlFpUTOgu2OGFrWkqDjwBXF74rT%2BVIafewO8SPi7huMrWq3snezow0JjYUMCUZJVCfUyx69fSxWP79JdYdRTqjbpIcsYRnZZkt%2F8Kt42fRvkP99%2FQKedQDpZn3QUlaFUJ6FkyZbsEi8aWjVPQMopqXkJOpQJ5PI&X-Amz-Signature=179d0c3400d4e828625b77abaf4d6b68f8f531f27b7e9e07434a4cbe7cf9fa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
