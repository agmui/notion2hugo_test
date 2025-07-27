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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=6c6fd144c35797f96fc27fc4a16cbeb9eaa0522489cb97407b99baf1d4af1691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=6d7cef4f287e5e4cbec7553c7e8fb99c7d96b55e88e60f150e06e3488e053832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=cea42fc5ca77b267ffd4991f8c0caa1ef3deb2b0d3bb498393dca767ea3e4515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=8d629c82a625243a87012f83cf773b922c9073a164ffb401a57ee68b65304800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=af9acb677b5e2fd4135fa90f5633bf6add1d07b136dda97949364f3061ffa6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=522a202808a8cf5c28dbbb1daea24f9c47d35d09a01eb04e27551702919d8803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=fbfad9a6ee32a3849fed578d2321912b70ccc59369a1ff1c241f7952d74ed1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=d776f5cd3b48bd78d551a24c87f34681a118dd5a85f0b08f7edb76bb1133dc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLQUBZ7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGK5siV0ey88tbiUt%2B8EM0beb96JvtMjLB1rTBjs2vKSAiEA%2BlAo%2FkCi71EAI4%2FanIe19JPdcwKwaKbb1XysKkr%2FCDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPP8vS8bJ50c5ykdKyrcA27Z8TfiMnwe8G7i6165w8hPQLj8kr5uSQUG563OjnMQgGUsZqDWrxBzT8UP4b%2BJMEtflEsDIQmTXEI%2F2La7ttZs0w%2F9HJ56Qp8pDXYxp6VpNcfWuKOssP6vKpLMZN4D3sjdeVBIjs%2FbVIhN90pkfO0wtu5BMaUy19AP1lka%2BBlgL%2FmIFjyW97e9Euwi1cuZDnp7X3PoNBYX7NRu6XlfR32NC0Uq4Y4hTAeae2BEBrsQw58X3Te7VpQR3DtzgNgYkB8yR3ktskjrUmQvCHtuAFrHcnx10XEixAvNxgU6HD75hfbBe0e4raWTHiKpAlPMJ2u4DwG7woDZxCzMrqw%2BC%2BAHDDIPFacAFz059qW36fze%2BPWak2W4BZW62X6E0aBS6kJsmbQgfp%2Bc%2FuZLylAMv6SgMCG0Xrf8OSUmhjvR5eJVIinwuFdi7ek5o%2BSf9iF7ESVH00A%2BC0A1cxUXQfaC08uMBDfaz%2BBKshpbh5hCHlHVAJ91c2TffN2kNJ8KBTDxmRQ%2F73NAKyuuPUDG1ctifyM8x%2FvdGOis9VeuV%2FCcnjR7tnq9NSwAaHaqBiVwocBmqV6sF2QgQinueK8q4ILu9yALT3eI98WxWrTsnezLUJOVk549maCAQs6iOYDcMJn1mMQGOqUBy5n5si693roGjPwkNzYKGA4nTDrdV7tuncm0bqsNPSxuLkazXqamnydj4g6YMd86R23cQGgSdZ23tmpMxGrtmJAWKpvfHJUcNDQJsDDwP7YMC5IwjpeALZ5ztavkWWvVmKAI1Gx422J2fzIP6Wa1LTw9q5XExTiosFaBtNCZeywesM8B66A69oDKiAg3oCdoltdCiX3TME8CuMJK3OFgSlVbnrXE&X-Amz-Signature=7b6073930195f00ee0cc30aca65337b29d9772fb92e2c2b6143f159dca9da6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
