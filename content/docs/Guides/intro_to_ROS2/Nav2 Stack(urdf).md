---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SYRU73%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC7H%2FJ9sXgf%2FvSIuUCmuHSrcz%2BhrI%2FfeQG9ysdLMhHXAiB9z4MbXtUJAqYmzRlrSfKsJSj4ypVszrz5H0bRzZBRRSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNBzbjmbDFKicTvIKtwDoNRE1LVHMfsEG4kKvPgPisiItm4WbBIYd6aK1QdaLahyNCGkSkwwrqGLqxHZ4OLX2c4%2FZ3RXfU71SoW4sp29FwRQrS4SizoJKHV%2Fve76Z%2FT9m66lAvjvrLPXxbxF6dJjfF6jMlWspj6S5ig0%2Fp5ZRNQ7OLTFIFC%2Fo7ttjNe4oTSE5oK%2FDi2ZXTxN%2F8gwiw%2B8ioUlgoJt%2Fzkx9bdp4PNR%2FCPaANDkN%2BMrGnuzH9woXWyRniGF1%2B6dUt28nQd9I%2FAYZFhN1QBt32tL8LRro1G%2Fgwt3NWq6sApZBvCD4zdpiBGGz9hny%2FdaZAOfICjFb0EWYJO%2FVuA7c6uGYHTKGgIP8kZPgCjWNFYEfEtIplPfVbA8iouWZ43CvZN4kkWZ7FlJMFwbaMKQM6hq9AVSBmHVur6AdOs%2B9lfqhQ%2FE37w60IdixgSHXjwhvlwLSsVmsy712CBVl3%2FPDO%2FQKPJRRt5qwQqKXdsv%2BPfSFuSAdFI3W7TLZviygDeqqqo%2Bylb7e98Eh8vI9npcLvr8LYWJ8Ci3vp7TNQma%2BL2ZyNd5Ux%2Fg3ylMCtnXw1C%2BGYY7QsOxCcxWDVSg2owXU2TVn%2FqGmz7Ohc0346PLOH2CO8iVVdJs9H7l5mmYZ3zQ0TsBEpQwp%2B%2BYwgY6pgHaTa5U4271gnn0asUaw0BTsNKdGyj9Sc6LUJWe0KGbY%2FKzsy9b%2BcvyG2ARQt6iqgDeXH%2BYzWcMA1NumwxCZQngkCFg0fqnNOxzEY04Go51gXZQHcfX9aKixIRH7DtwQRsNJ2NnPNREHb43CASSN8sYRT%2B%2FwW1KkP0QMAFurU7PJz6CBStFPT1Jcz%2FFlaVvPpk2kyJ3pIYzgZgkxXbS%2BUfJX7ytiDo7&X-Amz-Signature=7b5adeb1a1093cefdef5c00f23aa0f59817f307aae72ad782b7b2e5aa8ec68ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SYRU73%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC7H%2FJ9sXgf%2FvSIuUCmuHSrcz%2BhrI%2FfeQG9ysdLMhHXAiB9z4MbXtUJAqYmzRlrSfKsJSj4ypVszrz5H0bRzZBRRSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNBzbjmbDFKicTvIKtwDoNRE1LVHMfsEG4kKvPgPisiItm4WbBIYd6aK1QdaLahyNCGkSkwwrqGLqxHZ4OLX2c4%2FZ3RXfU71SoW4sp29FwRQrS4SizoJKHV%2Fve76Z%2FT9m66lAvjvrLPXxbxF6dJjfF6jMlWspj6S5ig0%2Fp5ZRNQ7OLTFIFC%2Fo7ttjNe4oTSE5oK%2FDi2ZXTxN%2F8gwiw%2B8ioUlgoJt%2Fzkx9bdp4PNR%2FCPaANDkN%2BMrGnuzH9woXWyRniGF1%2B6dUt28nQd9I%2FAYZFhN1QBt32tL8LRro1G%2Fgwt3NWq6sApZBvCD4zdpiBGGz9hny%2FdaZAOfICjFb0EWYJO%2FVuA7c6uGYHTKGgIP8kZPgCjWNFYEfEtIplPfVbA8iouWZ43CvZN4kkWZ7FlJMFwbaMKQM6hq9AVSBmHVur6AdOs%2B9lfqhQ%2FE37w60IdixgSHXjwhvlwLSsVmsy712CBVl3%2FPDO%2FQKPJRRt5qwQqKXdsv%2BPfSFuSAdFI3W7TLZviygDeqqqo%2Bylb7e98Eh8vI9npcLvr8LYWJ8Ci3vp7TNQma%2BL2ZyNd5Ux%2Fg3ylMCtnXw1C%2BGYY7QsOxCcxWDVSg2owXU2TVn%2FqGmz7Ohc0346PLOH2CO8iVVdJs9H7l5mmYZ3zQ0TsBEpQwp%2B%2BYwgY6pgHaTa5U4271gnn0asUaw0BTsNKdGyj9Sc6LUJWe0KGbY%2FKzsy9b%2BcvyG2ARQt6iqgDeXH%2BYzWcMA1NumwxCZQngkCFg0fqnNOxzEY04Go51gXZQHcfX9aKixIRH7DtwQRsNJ2NnPNREHb43CASSN8sYRT%2B%2FwW1KkP0QMAFurU7PJz6CBStFPT1Jcz%2FFlaVvPpk2kyJ3pIYzgZgkxXbS%2BUfJX7ytiDo7&X-Amz-Signature=190129639f05585007b0f472dbbdf489b20830dd9f7bb2483874814b111e5928&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SYRU73%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC7H%2FJ9sXgf%2FvSIuUCmuHSrcz%2BhrI%2FfeQG9ysdLMhHXAiB9z4MbXtUJAqYmzRlrSfKsJSj4ypVszrz5H0bRzZBRRSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNBzbjmbDFKicTvIKtwDoNRE1LVHMfsEG4kKvPgPisiItm4WbBIYd6aK1QdaLahyNCGkSkwwrqGLqxHZ4OLX2c4%2FZ3RXfU71SoW4sp29FwRQrS4SizoJKHV%2Fve76Z%2FT9m66lAvjvrLPXxbxF6dJjfF6jMlWspj6S5ig0%2Fp5ZRNQ7OLTFIFC%2Fo7ttjNe4oTSE5oK%2FDi2ZXTxN%2F8gwiw%2B8ioUlgoJt%2Fzkx9bdp4PNR%2FCPaANDkN%2BMrGnuzH9woXWyRniGF1%2B6dUt28nQd9I%2FAYZFhN1QBt32tL8LRro1G%2Fgwt3NWq6sApZBvCD4zdpiBGGz9hny%2FdaZAOfICjFb0EWYJO%2FVuA7c6uGYHTKGgIP8kZPgCjWNFYEfEtIplPfVbA8iouWZ43CvZN4kkWZ7FlJMFwbaMKQM6hq9AVSBmHVur6AdOs%2B9lfqhQ%2FE37w60IdixgSHXjwhvlwLSsVmsy712CBVl3%2FPDO%2FQKPJRRt5qwQqKXdsv%2BPfSFuSAdFI3W7TLZviygDeqqqo%2Bylb7e98Eh8vI9npcLvr8LYWJ8Ci3vp7TNQma%2BL2ZyNd5Ux%2Fg3ylMCtnXw1C%2BGYY7QsOxCcxWDVSg2owXU2TVn%2FqGmz7Ohc0346PLOH2CO8iVVdJs9H7l5mmYZ3zQ0TsBEpQwp%2B%2BYwgY6pgHaTa5U4271gnn0asUaw0BTsNKdGyj9Sc6LUJWe0KGbY%2FKzsy9b%2BcvyG2ARQt6iqgDeXH%2BYzWcMA1NumwxCZQngkCFg0fqnNOxzEY04Go51gXZQHcfX9aKixIRH7DtwQRsNJ2NnPNREHb43CASSN8sYRT%2B%2FwW1KkP0QMAFurU7PJz6CBStFPT1Jcz%2FFlaVvPpk2kyJ3pIYzgZgkxXbS%2BUfJX7ytiDo7&X-Amz-Signature=bad8292b64c61caf61ddb77b52f993dc928eaf082a838474e03acf3eee5b1d26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SYRU73%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC7H%2FJ9sXgf%2FvSIuUCmuHSrcz%2BhrI%2FfeQG9ysdLMhHXAiB9z4MbXtUJAqYmzRlrSfKsJSj4ypVszrz5H0bRzZBRRSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNBzbjmbDFKicTvIKtwDoNRE1LVHMfsEG4kKvPgPisiItm4WbBIYd6aK1QdaLahyNCGkSkwwrqGLqxHZ4OLX2c4%2FZ3RXfU71SoW4sp29FwRQrS4SizoJKHV%2Fve76Z%2FT9m66lAvjvrLPXxbxF6dJjfF6jMlWspj6S5ig0%2Fp5ZRNQ7OLTFIFC%2Fo7ttjNe4oTSE5oK%2FDi2ZXTxN%2F8gwiw%2B8ioUlgoJt%2Fzkx9bdp4PNR%2FCPaANDkN%2BMrGnuzH9woXWyRniGF1%2B6dUt28nQd9I%2FAYZFhN1QBt32tL8LRro1G%2Fgwt3NWq6sApZBvCD4zdpiBGGz9hny%2FdaZAOfICjFb0EWYJO%2FVuA7c6uGYHTKGgIP8kZPgCjWNFYEfEtIplPfVbA8iouWZ43CvZN4kkWZ7FlJMFwbaMKQM6hq9AVSBmHVur6AdOs%2B9lfqhQ%2FE37w60IdixgSHXjwhvlwLSsVmsy712CBVl3%2FPDO%2FQKPJRRt5qwQqKXdsv%2BPfSFuSAdFI3W7TLZviygDeqqqo%2Bylb7e98Eh8vI9npcLvr8LYWJ8Ci3vp7TNQma%2BL2ZyNd5Ux%2Fg3ylMCtnXw1C%2BGYY7QsOxCcxWDVSg2owXU2TVn%2FqGmz7Ohc0346PLOH2CO8iVVdJs9H7l5mmYZ3zQ0TsBEpQwp%2B%2BYwgY6pgHaTa5U4271gnn0asUaw0BTsNKdGyj9Sc6LUJWe0KGbY%2FKzsy9b%2BcvyG2ARQt6iqgDeXH%2BYzWcMA1NumwxCZQngkCFg0fqnNOxzEY04Go51gXZQHcfX9aKixIRH7DtwQRsNJ2NnPNREHb43CASSN8sYRT%2B%2FwW1KkP0QMAFurU7PJz6CBStFPT1Jcz%2FFlaVvPpk2kyJ3pIYzgZgkxXbS%2BUfJX7ytiDo7&X-Amz-Signature=aa210cce0032f278a0e0cb5cdb43b7665a979efa6030de4f0161682345e98906&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SYRU73%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC7H%2FJ9sXgf%2FvSIuUCmuHSrcz%2BhrI%2FfeQG9ysdLMhHXAiB9z4MbXtUJAqYmzRlrSfKsJSj4ypVszrz5H0bRzZBRRSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNBzbjmbDFKicTvIKtwDoNRE1LVHMfsEG4kKvPgPisiItm4WbBIYd6aK1QdaLahyNCGkSkwwrqGLqxHZ4OLX2c4%2FZ3RXfU71SoW4sp29FwRQrS4SizoJKHV%2Fve76Z%2FT9m66lAvjvrLPXxbxF6dJjfF6jMlWspj6S5ig0%2Fp5ZRNQ7OLTFIFC%2Fo7ttjNe4oTSE5oK%2FDi2ZXTxN%2F8gwiw%2B8ioUlgoJt%2Fzkx9bdp4PNR%2FCPaANDkN%2BMrGnuzH9woXWyRniGF1%2B6dUt28nQd9I%2FAYZFhN1QBt32tL8LRro1G%2Fgwt3NWq6sApZBvCD4zdpiBGGz9hny%2FdaZAOfICjFb0EWYJO%2FVuA7c6uGYHTKGgIP8kZPgCjWNFYEfEtIplPfVbA8iouWZ43CvZN4kkWZ7FlJMFwbaMKQM6hq9AVSBmHVur6AdOs%2B9lfqhQ%2FE37w60IdixgSHXjwhvlwLSsVmsy712CBVl3%2FPDO%2FQKPJRRt5qwQqKXdsv%2BPfSFuSAdFI3W7TLZviygDeqqqo%2Bylb7e98Eh8vI9npcLvr8LYWJ8Ci3vp7TNQma%2BL2ZyNd5Ux%2Fg3ylMCtnXw1C%2BGYY7QsOxCcxWDVSg2owXU2TVn%2FqGmz7Ohc0346PLOH2CO8iVVdJs9H7l5mmYZ3zQ0TsBEpQwp%2B%2BYwgY6pgHaTa5U4271gnn0asUaw0BTsNKdGyj9Sc6LUJWe0KGbY%2FKzsy9b%2BcvyG2ARQt6iqgDeXH%2BYzWcMA1NumwxCZQngkCFg0fqnNOxzEY04Go51gXZQHcfX9aKixIRH7DtwQRsNJ2NnPNREHb43CASSN8sYRT%2B%2FwW1KkP0QMAFurU7PJz6CBStFPT1Jcz%2FFlaVvPpk2kyJ3pIYzgZgkxXbS%2BUfJX7ytiDo7&X-Amz-Signature=5ab5f585e5c12a1081c79418931b6988609495e5e6449c31e3d3c6ad69170bea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SYRU73%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC7H%2FJ9sXgf%2FvSIuUCmuHSrcz%2BhrI%2FfeQG9ysdLMhHXAiB9z4MbXtUJAqYmzRlrSfKsJSj4ypVszrz5H0bRzZBRRSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNBzbjmbDFKicTvIKtwDoNRE1LVHMfsEG4kKvPgPisiItm4WbBIYd6aK1QdaLahyNCGkSkwwrqGLqxHZ4OLX2c4%2FZ3RXfU71SoW4sp29FwRQrS4SizoJKHV%2Fve76Z%2FT9m66lAvjvrLPXxbxF6dJjfF6jMlWspj6S5ig0%2Fp5ZRNQ7OLTFIFC%2Fo7ttjNe4oTSE5oK%2FDi2ZXTxN%2F8gwiw%2B8ioUlgoJt%2Fzkx9bdp4PNR%2FCPaANDkN%2BMrGnuzH9woXWyRniGF1%2B6dUt28nQd9I%2FAYZFhN1QBt32tL8LRro1G%2Fgwt3NWq6sApZBvCD4zdpiBGGz9hny%2FdaZAOfICjFb0EWYJO%2FVuA7c6uGYHTKGgIP8kZPgCjWNFYEfEtIplPfVbA8iouWZ43CvZN4kkWZ7FlJMFwbaMKQM6hq9AVSBmHVur6AdOs%2B9lfqhQ%2FE37w60IdixgSHXjwhvlwLSsVmsy712CBVl3%2FPDO%2FQKPJRRt5qwQqKXdsv%2BPfSFuSAdFI3W7TLZviygDeqqqo%2Bylb7e98Eh8vI9npcLvr8LYWJ8Ci3vp7TNQma%2BL2ZyNd5Ux%2Fg3ylMCtnXw1C%2BGYY7QsOxCcxWDVSg2owXU2TVn%2FqGmz7Ohc0346PLOH2CO8iVVdJs9H7l5mmYZ3zQ0TsBEpQwp%2B%2BYwgY6pgHaTa5U4271gnn0asUaw0BTsNKdGyj9Sc6LUJWe0KGbY%2FKzsy9b%2BcvyG2ARQt6iqgDeXH%2BYzWcMA1NumwxCZQngkCFg0fqnNOxzEY04Go51gXZQHcfX9aKixIRH7DtwQRsNJ2NnPNREHb43CASSN8sYRT%2B%2FwW1KkP0QMAFurU7PJz6CBStFPT1Jcz%2FFlaVvPpk2kyJ3pIYzgZgkxXbS%2BUfJX7ytiDo7&X-Amz-Signature=67e8c301fef43e4c7bcf125ebeb57940dd569cf10eb5f5e9953af1f0b9f1634c&X-Amz-SignedHeaders=host&x-id=GetObject)
