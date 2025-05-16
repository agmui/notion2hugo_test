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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB45BZI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7NaN%2BHecd71iWj8q3Y154BuK9b1epZBNXF0BqfWyNlwIgHMgIOZ2%2BDOhaZNZW5BfC1rgkEDZnaLvnjhyfzyiRdZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEyIXKgOS7Xwf6T8cyrcA5el6jhkzioXL1Q1BE7ly%2B1%2FPhbhqN%2FDOsjY6NfjSFOzJR%2Fyl%2BNTFak9%2FwpZi3AOQzDVLOB4USrwfSaWUvWDjwyKdHfW4lYIso6ahtBOcSFo9%2FUny3JXuBQFMyduoQ5icdyUALBBxZ9Kq5dhQbJxPQ50E7l8PUNznUCGu0K9UWiFeT2J1Q4O3oFC0nSTcgBSXf%2Fu1HC1X6lI9KIZXetHCzzuLkWfPyTXUL%2FFgXZKBABPeWHp4Xe0KKDUgbOHLWmjK8ayPYcrp3PU7Cy3QmrTlHjlmDKeKhSWXL5YliBXx09rBs%2FaXYyng6vIzqIE0vZT54GxOtomrHucdEwERWAExFmqVtvO61mNpDA7liOiwCwflHwW34AqMDx36AdjuwgKujx%2F7tGigzHdqkJ%2F4bgB2h8yzqilyTF1RhWd4JtL9Qd1qjvBDY7XOfnNJGuNW7gejKbqVzll1oFij8epGGQqNZT%2FAiV9G31HiDX72S2tuEeT%2BXi31xn8S5t1Ars50dXs57KY8q3TbnW68XQOL3I%2BjiSirMgrtjTRFw0AKrqsWLzKbLldvXwh4uDp%2BR1VB7R824otRtEOX%2FiC42%2Bpt9Po9MFojj%2F05lk%2B3J7Hm1QFXSnfhSG8dghbS8ZpuV8FMN%2BQnsEGOqUBJCv1kztUeblvEgEVrdTfd63PGPbAxZEqIWBoMTi86H1jwAQqNzue4DdynLy%2FLIKqyFxE9HMQ6YD7rCtXBCoTZfudqL8dXtd3eIwYDb4nRqCwRM5JDqe9cnEFFglD6TCGDnJDl2KG5Dmc6mJ8gYUrJ6yeTaqxz2zYtgoUYFGnbpPFP0QwS8z35g6alcGbWaOh7rYrZ8JkKJtRvlIsVIvyKYZYZgi0&X-Amz-Signature=86c06bc3c78ba979ead20c05b9bd42557a839905761c4bd7d876100245510aee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB45BZI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7NaN%2BHecd71iWj8q3Y154BuK9b1epZBNXF0BqfWyNlwIgHMgIOZ2%2BDOhaZNZW5BfC1rgkEDZnaLvnjhyfzyiRdZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEyIXKgOS7Xwf6T8cyrcA5el6jhkzioXL1Q1BE7ly%2B1%2FPhbhqN%2FDOsjY6NfjSFOzJR%2Fyl%2BNTFak9%2FwpZi3AOQzDVLOB4USrwfSaWUvWDjwyKdHfW4lYIso6ahtBOcSFo9%2FUny3JXuBQFMyduoQ5icdyUALBBxZ9Kq5dhQbJxPQ50E7l8PUNznUCGu0K9UWiFeT2J1Q4O3oFC0nSTcgBSXf%2Fu1HC1X6lI9KIZXetHCzzuLkWfPyTXUL%2FFgXZKBABPeWHp4Xe0KKDUgbOHLWmjK8ayPYcrp3PU7Cy3QmrTlHjlmDKeKhSWXL5YliBXx09rBs%2FaXYyng6vIzqIE0vZT54GxOtomrHucdEwERWAExFmqVtvO61mNpDA7liOiwCwflHwW34AqMDx36AdjuwgKujx%2F7tGigzHdqkJ%2F4bgB2h8yzqilyTF1RhWd4JtL9Qd1qjvBDY7XOfnNJGuNW7gejKbqVzll1oFij8epGGQqNZT%2FAiV9G31HiDX72S2tuEeT%2BXi31xn8S5t1Ars50dXs57KY8q3TbnW68XQOL3I%2BjiSirMgrtjTRFw0AKrqsWLzKbLldvXwh4uDp%2BR1VB7R824otRtEOX%2FiC42%2Bpt9Po9MFojj%2F05lk%2B3J7Hm1QFXSnfhSG8dghbS8ZpuV8FMN%2BQnsEGOqUBJCv1kztUeblvEgEVrdTfd63PGPbAxZEqIWBoMTi86H1jwAQqNzue4DdynLy%2FLIKqyFxE9HMQ6YD7rCtXBCoTZfudqL8dXtd3eIwYDb4nRqCwRM5JDqe9cnEFFglD6TCGDnJDl2KG5Dmc6mJ8gYUrJ6yeTaqxz2zYtgoUYFGnbpPFP0QwS8z35g6alcGbWaOh7rYrZ8JkKJtRvlIsVIvyKYZYZgi0&X-Amz-Signature=01d0c571bf159a19ed68ddcd8c3f9d57d2634096c423a761fb6c991521a04189&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB45BZI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7NaN%2BHecd71iWj8q3Y154BuK9b1epZBNXF0BqfWyNlwIgHMgIOZ2%2BDOhaZNZW5BfC1rgkEDZnaLvnjhyfzyiRdZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEyIXKgOS7Xwf6T8cyrcA5el6jhkzioXL1Q1BE7ly%2B1%2FPhbhqN%2FDOsjY6NfjSFOzJR%2Fyl%2BNTFak9%2FwpZi3AOQzDVLOB4USrwfSaWUvWDjwyKdHfW4lYIso6ahtBOcSFo9%2FUny3JXuBQFMyduoQ5icdyUALBBxZ9Kq5dhQbJxPQ50E7l8PUNznUCGu0K9UWiFeT2J1Q4O3oFC0nSTcgBSXf%2Fu1HC1X6lI9KIZXetHCzzuLkWfPyTXUL%2FFgXZKBABPeWHp4Xe0KKDUgbOHLWmjK8ayPYcrp3PU7Cy3QmrTlHjlmDKeKhSWXL5YliBXx09rBs%2FaXYyng6vIzqIE0vZT54GxOtomrHucdEwERWAExFmqVtvO61mNpDA7liOiwCwflHwW34AqMDx36AdjuwgKujx%2F7tGigzHdqkJ%2F4bgB2h8yzqilyTF1RhWd4JtL9Qd1qjvBDY7XOfnNJGuNW7gejKbqVzll1oFij8epGGQqNZT%2FAiV9G31HiDX72S2tuEeT%2BXi31xn8S5t1Ars50dXs57KY8q3TbnW68XQOL3I%2BjiSirMgrtjTRFw0AKrqsWLzKbLldvXwh4uDp%2BR1VB7R824otRtEOX%2FiC42%2Bpt9Po9MFojj%2F05lk%2B3J7Hm1QFXSnfhSG8dghbS8ZpuV8FMN%2BQnsEGOqUBJCv1kztUeblvEgEVrdTfd63PGPbAxZEqIWBoMTi86H1jwAQqNzue4DdynLy%2FLIKqyFxE9HMQ6YD7rCtXBCoTZfudqL8dXtd3eIwYDb4nRqCwRM5JDqe9cnEFFglD6TCGDnJDl2KG5Dmc6mJ8gYUrJ6yeTaqxz2zYtgoUYFGnbpPFP0QwS8z35g6alcGbWaOh7rYrZ8JkKJtRvlIsVIvyKYZYZgi0&X-Amz-Signature=4af94bf14937f8fc47a66cec2fae1bb0fc7519d3af1ed58294c3dcda01525422&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB45BZI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7NaN%2BHecd71iWj8q3Y154BuK9b1epZBNXF0BqfWyNlwIgHMgIOZ2%2BDOhaZNZW5BfC1rgkEDZnaLvnjhyfzyiRdZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEyIXKgOS7Xwf6T8cyrcA5el6jhkzioXL1Q1BE7ly%2B1%2FPhbhqN%2FDOsjY6NfjSFOzJR%2Fyl%2BNTFak9%2FwpZi3AOQzDVLOB4USrwfSaWUvWDjwyKdHfW4lYIso6ahtBOcSFo9%2FUny3JXuBQFMyduoQ5icdyUALBBxZ9Kq5dhQbJxPQ50E7l8PUNznUCGu0K9UWiFeT2J1Q4O3oFC0nSTcgBSXf%2Fu1HC1X6lI9KIZXetHCzzuLkWfPyTXUL%2FFgXZKBABPeWHp4Xe0KKDUgbOHLWmjK8ayPYcrp3PU7Cy3QmrTlHjlmDKeKhSWXL5YliBXx09rBs%2FaXYyng6vIzqIE0vZT54GxOtomrHucdEwERWAExFmqVtvO61mNpDA7liOiwCwflHwW34AqMDx36AdjuwgKujx%2F7tGigzHdqkJ%2F4bgB2h8yzqilyTF1RhWd4JtL9Qd1qjvBDY7XOfnNJGuNW7gejKbqVzll1oFij8epGGQqNZT%2FAiV9G31HiDX72S2tuEeT%2BXi31xn8S5t1Ars50dXs57KY8q3TbnW68XQOL3I%2BjiSirMgrtjTRFw0AKrqsWLzKbLldvXwh4uDp%2BR1VB7R824otRtEOX%2FiC42%2Bpt9Po9MFojj%2F05lk%2B3J7Hm1QFXSnfhSG8dghbS8ZpuV8FMN%2BQnsEGOqUBJCv1kztUeblvEgEVrdTfd63PGPbAxZEqIWBoMTi86H1jwAQqNzue4DdynLy%2FLIKqyFxE9HMQ6YD7rCtXBCoTZfudqL8dXtd3eIwYDb4nRqCwRM5JDqe9cnEFFglD6TCGDnJDl2KG5Dmc6mJ8gYUrJ6yeTaqxz2zYtgoUYFGnbpPFP0QwS8z35g6alcGbWaOh7rYrZ8JkKJtRvlIsVIvyKYZYZgi0&X-Amz-Signature=72470235a37772c23e89b364a9525afe8988b19ef606c790f4b210db4eb44ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB45BZI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7NaN%2BHecd71iWj8q3Y154BuK9b1epZBNXF0BqfWyNlwIgHMgIOZ2%2BDOhaZNZW5BfC1rgkEDZnaLvnjhyfzyiRdZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEyIXKgOS7Xwf6T8cyrcA5el6jhkzioXL1Q1BE7ly%2B1%2FPhbhqN%2FDOsjY6NfjSFOzJR%2Fyl%2BNTFak9%2FwpZi3AOQzDVLOB4USrwfSaWUvWDjwyKdHfW4lYIso6ahtBOcSFo9%2FUny3JXuBQFMyduoQ5icdyUALBBxZ9Kq5dhQbJxPQ50E7l8PUNznUCGu0K9UWiFeT2J1Q4O3oFC0nSTcgBSXf%2Fu1HC1X6lI9KIZXetHCzzuLkWfPyTXUL%2FFgXZKBABPeWHp4Xe0KKDUgbOHLWmjK8ayPYcrp3PU7Cy3QmrTlHjlmDKeKhSWXL5YliBXx09rBs%2FaXYyng6vIzqIE0vZT54GxOtomrHucdEwERWAExFmqVtvO61mNpDA7liOiwCwflHwW34AqMDx36AdjuwgKujx%2F7tGigzHdqkJ%2F4bgB2h8yzqilyTF1RhWd4JtL9Qd1qjvBDY7XOfnNJGuNW7gejKbqVzll1oFij8epGGQqNZT%2FAiV9G31HiDX72S2tuEeT%2BXi31xn8S5t1Ars50dXs57KY8q3TbnW68XQOL3I%2BjiSirMgrtjTRFw0AKrqsWLzKbLldvXwh4uDp%2BR1VB7R824otRtEOX%2FiC42%2Bpt9Po9MFojj%2F05lk%2B3J7Hm1QFXSnfhSG8dghbS8ZpuV8FMN%2BQnsEGOqUBJCv1kztUeblvEgEVrdTfd63PGPbAxZEqIWBoMTi86H1jwAQqNzue4DdynLy%2FLIKqyFxE9HMQ6YD7rCtXBCoTZfudqL8dXtd3eIwYDb4nRqCwRM5JDqe9cnEFFglD6TCGDnJDl2KG5Dmc6mJ8gYUrJ6yeTaqxz2zYtgoUYFGnbpPFP0QwS8z35g6alcGbWaOh7rYrZ8JkKJtRvlIsVIvyKYZYZgi0&X-Amz-Signature=c51beb4429f164957d5f8b657de3b00f56a515a9aeab1424ef17c7d11a9281ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB45BZI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7NaN%2BHecd71iWj8q3Y154BuK9b1epZBNXF0BqfWyNlwIgHMgIOZ2%2BDOhaZNZW5BfC1rgkEDZnaLvnjhyfzyiRdZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEyIXKgOS7Xwf6T8cyrcA5el6jhkzioXL1Q1BE7ly%2B1%2FPhbhqN%2FDOsjY6NfjSFOzJR%2Fyl%2BNTFak9%2FwpZi3AOQzDVLOB4USrwfSaWUvWDjwyKdHfW4lYIso6ahtBOcSFo9%2FUny3JXuBQFMyduoQ5icdyUALBBxZ9Kq5dhQbJxPQ50E7l8PUNznUCGu0K9UWiFeT2J1Q4O3oFC0nSTcgBSXf%2Fu1HC1X6lI9KIZXetHCzzuLkWfPyTXUL%2FFgXZKBABPeWHp4Xe0KKDUgbOHLWmjK8ayPYcrp3PU7Cy3QmrTlHjlmDKeKhSWXL5YliBXx09rBs%2FaXYyng6vIzqIE0vZT54GxOtomrHucdEwERWAExFmqVtvO61mNpDA7liOiwCwflHwW34AqMDx36AdjuwgKujx%2F7tGigzHdqkJ%2F4bgB2h8yzqilyTF1RhWd4JtL9Qd1qjvBDY7XOfnNJGuNW7gejKbqVzll1oFij8epGGQqNZT%2FAiV9G31HiDX72S2tuEeT%2BXi31xn8S5t1Ars50dXs57KY8q3TbnW68XQOL3I%2BjiSirMgrtjTRFw0AKrqsWLzKbLldvXwh4uDp%2BR1VB7R824otRtEOX%2FiC42%2Bpt9Po9MFojj%2F05lk%2B3J7Hm1QFXSnfhSG8dghbS8ZpuV8FMN%2BQnsEGOqUBJCv1kztUeblvEgEVrdTfd63PGPbAxZEqIWBoMTi86H1jwAQqNzue4DdynLy%2FLIKqyFxE9HMQ6YD7rCtXBCoTZfudqL8dXtd3eIwYDb4nRqCwRM5JDqe9cnEFFglD6TCGDnJDl2KG5Dmc6mJ8gYUrJ6yeTaqxz2zYtgoUYFGnbpPFP0QwS8z35g6alcGbWaOh7rYrZ8JkKJtRvlIsVIvyKYZYZgi0&X-Amz-Signature=0e86befdfe8aa1106ac08847167902efcc38138a1fea697754d3a3419d2f77d7&X-Amz-SignedHeaders=host&x-id=GetObject)
