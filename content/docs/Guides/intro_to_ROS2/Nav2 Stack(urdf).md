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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDREPKQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjtPH5oMVFod29RQNz9PwxdKWt7Yu7w8zSjCmGiAaVCAiAt9MhjWg83JElamH6%2B%2Bjd1GDoz4aHugD8fixT9jx21lyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqsCaNd%2BLE27xKkuKtwDXNUwGZJUWLhWGR%2FGg48Da%2B3JR4wCZ2eSLUa%2BnNHiVZ03KE5TnW6f2FM8Lsr2I%2F6pKcp0PtkrvG6RqyZzjDkplfP%2B1%2F7RWrMDx25KLbSdZwJKxPXaPFI2CX39wkyamQjBbABu%2FtUJ%2F1QBOCegEUPM8RzjnX%2FaSKsXGLjuvSPZHu1ltnKBZlaXpsry90fP50CL3jMyOqk%2FIVUI3wg8U3j8J8X27P2%2BgE%2FDDr%2B2SR%2B4s5ds8OnEg1bcMkhnnVjhdi2auJ0iDMwfhNsPmFLrXf4iZ5lhZjLmboyBJJYQpOgxfEARXbghrU8f1b8pe8oRMTvPu9N3EA2%2FnnbqzPs0X5IXbEXyJjFWrw%2BiNVgNxBJFFVxMnWypm2k6B6vPnWaCx9YSKTbZIMTHXukwdmzCXYBD%2BCeoGePifv9AETkP7U%2Fl4m6vQYO7%2F%2FmMmv9mBd%2BYWK1Ds%2BHkZrhQijgXVzWtNk2wgb4BDWVDFwT7OujDQwp1ZnKePLRkFVrVLniVrAqEFiaQ6qyPwmPmuvf4cDd71wSkYY%2BZn%2FJmYVRtYTrXAUfyUrbbvs5mqbgiY0r0lHdhtLOE3X6Vza%2FP%2FkL4iRMjcow1HtZsAWSJOZtKF4wbGxsru%2FhUkeuvU6kZfHGtj3Ew2cjswQY6pgEeCILfVceQtdaFZ%2BBSCkyTXV7CDEvx2gD74bDTtIeHJ29sbs0Ic8ha6w%2BBKODcMz94RGhAV5s6LlTBecNykwfQbfDhvGWfQn9DaubDwOynt6ABFpM668b2xBcYHE7XBz9SXcghGj7bKr%2FcxzbEFT6Y77wuZaniSlNpn4nwhzTeTvBHULU13UfKnX3aGfMX3%2BDDXMQ%2BudJcDyjTljOWyKFruitsw%2BFO&X-Amz-Signature=83f31620ca15fb57105154c542bfd4209b13fce6cccf6f21cc87be5018b8739c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDREPKQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjtPH5oMVFod29RQNz9PwxdKWt7Yu7w8zSjCmGiAaVCAiAt9MhjWg83JElamH6%2B%2Bjd1GDoz4aHugD8fixT9jx21lyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqsCaNd%2BLE27xKkuKtwDXNUwGZJUWLhWGR%2FGg48Da%2B3JR4wCZ2eSLUa%2BnNHiVZ03KE5TnW6f2FM8Lsr2I%2F6pKcp0PtkrvG6RqyZzjDkplfP%2B1%2F7RWrMDx25KLbSdZwJKxPXaPFI2CX39wkyamQjBbABu%2FtUJ%2F1QBOCegEUPM8RzjnX%2FaSKsXGLjuvSPZHu1ltnKBZlaXpsry90fP50CL3jMyOqk%2FIVUI3wg8U3j8J8X27P2%2BgE%2FDDr%2B2SR%2B4s5ds8OnEg1bcMkhnnVjhdi2auJ0iDMwfhNsPmFLrXf4iZ5lhZjLmboyBJJYQpOgxfEARXbghrU8f1b8pe8oRMTvPu9N3EA2%2FnnbqzPs0X5IXbEXyJjFWrw%2BiNVgNxBJFFVxMnWypm2k6B6vPnWaCx9YSKTbZIMTHXukwdmzCXYBD%2BCeoGePifv9AETkP7U%2Fl4m6vQYO7%2F%2FmMmv9mBd%2BYWK1Ds%2BHkZrhQijgXVzWtNk2wgb4BDWVDFwT7OujDQwp1ZnKePLRkFVrVLniVrAqEFiaQ6qyPwmPmuvf4cDd71wSkYY%2BZn%2FJmYVRtYTrXAUfyUrbbvs5mqbgiY0r0lHdhtLOE3X6Vza%2FP%2FkL4iRMjcow1HtZsAWSJOZtKF4wbGxsru%2FhUkeuvU6kZfHGtj3Ew2cjswQY6pgEeCILfVceQtdaFZ%2BBSCkyTXV7CDEvx2gD74bDTtIeHJ29sbs0Ic8ha6w%2BBKODcMz94RGhAV5s6LlTBecNykwfQbfDhvGWfQn9DaubDwOynt6ABFpM668b2xBcYHE7XBz9SXcghGj7bKr%2FcxzbEFT6Y77wuZaniSlNpn4nwhzTeTvBHULU13UfKnX3aGfMX3%2BDDXMQ%2BudJcDyjTljOWyKFruitsw%2BFO&X-Amz-Signature=cf52b6308e9899cb9eca3a63c573d0e41c38581f96859ebcb6e5fd3460cf2315&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDREPKQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjtPH5oMVFod29RQNz9PwxdKWt7Yu7w8zSjCmGiAaVCAiAt9MhjWg83JElamH6%2B%2Bjd1GDoz4aHugD8fixT9jx21lyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqsCaNd%2BLE27xKkuKtwDXNUwGZJUWLhWGR%2FGg48Da%2B3JR4wCZ2eSLUa%2BnNHiVZ03KE5TnW6f2FM8Lsr2I%2F6pKcp0PtkrvG6RqyZzjDkplfP%2B1%2F7RWrMDx25KLbSdZwJKxPXaPFI2CX39wkyamQjBbABu%2FtUJ%2F1QBOCegEUPM8RzjnX%2FaSKsXGLjuvSPZHu1ltnKBZlaXpsry90fP50CL3jMyOqk%2FIVUI3wg8U3j8J8X27P2%2BgE%2FDDr%2B2SR%2B4s5ds8OnEg1bcMkhnnVjhdi2auJ0iDMwfhNsPmFLrXf4iZ5lhZjLmboyBJJYQpOgxfEARXbghrU8f1b8pe8oRMTvPu9N3EA2%2FnnbqzPs0X5IXbEXyJjFWrw%2BiNVgNxBJFFVxMnWypm2k6B6vPnWaCx9YSKTbZIMTHXukwdmzCXYBD%2BCeoGePifv9AETkP7U%2Fl4m6vQYO7%2F%2FmMmv9mBd%2BYWK1Ds%2BHkZrhQijgXVzWtNk2wgb4BDWVDFwT7OujDQwp1ZnKePLRkFVrVLniVrAqEFiaQ6qyPwmPmuvf4cDd71wSkYY%2BZn%2FJmYVRtYTrXAUfyUrbbvs5mqbgiY0r0lHdhtLOE3X6Vza%2FP%2FkL4iRMjcow1HtZsAWSJOZtKF4wbGxsru%2FhUkeuvU6kZfHGtj3Ew2cjswQY6pgEeCILfVceQtdaFZ%2BBSCkyTXV7CDEvx2gD74bDTtIeHJ29sbs0Ic8ha6w%2BBKODcMz94RGhAV5s6LlTBecNykwfQbfDhvGWfQn9DaubDwOynt6ABFpM668b2xBcYHE7XBz9SXcghGj7bKr%2FcxzbEFT6Y77wuZaniSlNpn4nwhzTeTvBHULU13UfKnX3aGfMX3%2BDDXMQ%2BudJcDyjTljOWyKFruitsw%2BFO&X-Amz-Signature=02e27b019336236f653e55035639be867cc6ce076b349ada51f7d9d6a112feea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDREPKQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjtPH5oMVFod29RQNz9PwxdKWt7Yu7w8zSjCmGiAaVCAiAt9MhjWg83JElamH6%2B%2Bjd1GDoz4aHugD8fixT9jx21lyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqsCaNd%2BLE27xKkuKtwDXNUwGZJUWLhWGR%2FGg48Da%2B3JR4wCZ2eSLUa%2BnNHiVZ03KE5TnW6f2FM8Lsr2I%2F6pKcp0PtkrvG6RqyZzjDkplfP%2B1%2F7RWrMDx25KLbSdZwJKxPXaPFI2CX39wkyamQjBbABu%2FtUJ%2F1QBOCegEUPM8RzjnX%2FaSKsXGLjuvSPZHu1ltnKBZlaXpsry90fP50CL3jMyOqk%2FIVUI3wg8U3j8J8X27P2%2BgE%2FDDr%2B2SR%2B4s5ds8OnEg1bcMkhnnVjhdi2auJ0iDMwfhNsPmFLrXf4iZ5lhZjLmboyBJJYQpOgxfEARXbghrU8f1b8pe8oRMTvPu9N3EA2%2FnnbqzPs0X5IXbEXyJjFWrw%2BiNVgNxBJFFVxMnWypm2k6B6vPnWaCx9YSKTbZIMTHXukwdmzCXYBD%2BCeoGePifv9AETkP7U%2Fl4m6vQYO7%2F%2FmMmv9mBd%2BYWK1Ds%2BHkZrhQijgXVzWtNk2wgb4BDWVDFwT7OujDQwp1ZnKePLRkFVrVLniVrAqEFiaQ6qyPwmPmuvf4cDd71wSkYY%2BZn%2FJmYVRtYTrXAUfyUrbbvs5mqbgiY0r0lHdhtLOE3X6Vza%2FP%2FkL4iRMjcow1HtZsAWSJOZtKF4wbGxsru%2FhUkeuvU6kZfHGtj3Ew2cjswQY6pgEeCILfVceQtdaFZ%2BBSCkyTXV7CDEvx2gD74bDTtIeHJ29sbs0Ic8ha6w%2BBKODcMz94RGhAV5s6LlTBecNykwfQbfDhvGWfQn9DaubDwOynt6ABFpM668b2xBcYHE7XBz9SXcghGj7bKr%2FcxzbEFT6Y77wuZaniSlNpn4nwhzTeTvBHULU13UfKnX3aGfMX3%2BDDXMQ%2BudJcDyjTljOWyKFruitsw%2BFO&X-Amz-Signature=93ea78096637933f75a5d3df95669c3003e2dad0338a12f59465b8abc66cbfd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDREPKQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjtPH5oMVFod29RQNz9PwxdKWt7Yu7w8zSjCmGiAaVCAiAt9MhjWg83JElamH6%2B%2Bjd1GDoz4aHugD8fixT9jx21lyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqsCaNd%2BLE27xKkuKtwDXNUwGZJUWLhWGR%2FGg48Da%2B3JR4wCZ2eSLUa%2BnNHiVZ03KE5TnW6f2FM8Lsr2I%2F6pKcp0PtkrvG6RqyZzjDkplfP%2B1%2F7RWrMDx25KLbSdZwJKxPXaPFI2CX39wkyamQjBbABu%2FtUJ%2F1QBOCegEUPM8RzjnX%2FaSKsXGLjuvSPZHu1ltnKBZlaXpsry90fP50CL3jMyOqk%2FIVUI3wg8U3j8J8X27P2%2BgE%2FDDr%2B2SR%2B4s5ds8OnEg1bcMkhnnVjhdi2auJ0iDMwfhNsPmFLrXf4iZ5lhZjLmboyBJJYQpOgxfEARXbghrU8f1b8pe8oRMTvPu9N3EA2%2FnnbqzPs0X5IXbEXyJjFWrw%2BiNVgNxBJFFVxMnWypm2k6B6vPnWaCx9YSKTbZIMTHXukwdmzCXYBD%2BCeoGePifv9AETkP7U%2Fl4m6vQYO7%2F%2FmMmv9mBd%2BYWK1Ds%2BHkZrhQijgXVzWtNk2wgb4BDWVDFwT7OujDQwp1ZnKePLRkFVrVLniVrAqEFiaQ6qyPwmPmuvf4cDd71wSkYY%2BZn%2FJmYVRtYTrXAUfyUrbbvs5mqbgiY0r0lHdhtLOE3X6Vza%2FP%2FkL4iRMjcow1HtZsAWSJOZtKF4wbGxsru%2FhUkeuvU6kZfHGtj3Ew2cjswQY6pgEeCILfVceQtdaFZ%2BBSCkyTXV7CDEvx2gD74bDTtIeHJ29sbs0Ic8ha6w%2BBKODcMz94RGhAV5s6LlTBecNykwfQbfDhvGWfQn9DaubDwOynt6ABFpM668b2xBcYHE7XBz9SXcghGj7bKr%2FcxzbEFT6Y77wuZaniSlNpn4nwhzTeTvBHULU13UfKnX3aGfMX3%2BDDXMQ%2BudJcDyjTljOWyKFruitsw%2BFO&X-Amz-Signature=7775abe06f7d89702d3b9ab8738e6363234979126b19c4567e86319635c14d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDREPKQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjtPH5oMVFod29RQNz9PwxdKWt7Yu7w8zSjCmGiAaVCAiAt9MhjWg83JElamH6%2B%2Bjd1GDoz4aHugD8fixT9jx21lyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqsCaNd%2BLE27xKkuKtwDXNUwGZJUWLhWGR%2FGg48Da%2B3JR4wCZ2eSLUa%2BnNHiVZ03KE5TnW6f2FM8Lsr2I%2F6pKcp0PtkrvG6RqyZzjDkplfP%2B1%2F7RWrMDx25KLbSdZwJKxPXaPFI2CX39wkyamQjBbABu%2FtUJ%2F1QBOCegEUPM8RzjnX%2FaSKsXGLjuvSPZHu1ltnKBZlaXpsry90fP50CL3jMyOqk%2FIVUI3wg8U3j8J8X27P2%2BgE%2FDDr%2B2SR%2B4s5ds8OnEg1bcMkhnnVjhdi2auJ0iDMwfhNsPmFLrXf4iZ5lhZjLmboyBJJYQpOgxfEARXbghrU8f1b8pe8oRMTvPu9N3EA2%2FnnbqzPs0X5IXbEXyJjFWrw%2BiNVgNxBJFFVxMnWypm2k6B6vPnWaCx9YSKTbZIMTHXukwdmzCXYBD%2BCeoGePifv9AETkP7U%2Fl4m6vQYO7%2F%2FmMmv9mBd%2BYWK1Ds%2BHkZrhQijgXVzWtNk2wgb4BDWVDFwT7OujDQwp1ZnKePLRkFVrVLniVrAqEFiaQ6qyPwmPmuvf4cDd71wSkYY%2BZn%2FJmYVRtYTrXAUfyUrbbvs5mqbgiY0r0lHdhtLOE3X6Vza%2FP%2FkL4iRMjcow1HtZsAWSJOZtKF4wbGxsru%2FhUkeuvU6kZfHGtj3Ew2cjswQY6pgEeCILfVceQtdaFZ%2BBSCkyTXV7CDEvx2gD74bDTtIeHJ29sbs0Ic8ha6w%2BBKODcMz94RGhAV5s6LlTBecNykwfQbfDhvGWfQn9DaubDwOynt6ABFpM668b2xBcYHE7XBz9SXcghGj7bKr%2FcxzbEFT6Y77wuZaniSlNpn4nwhzTeTvBHULU13UfKnX3aGfMX3%2BDDXMQ%2BudJcDyjTljOWyKFruitsw%2BFO&X-Amz-Signature=3679cdca6862de605fe3360302d62f625da35b960832f4b0d1a8fad00ebe9874&X-Amz-SignedHeaders=host&x-id=GetObject)
