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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJUQOK4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaoPc3OOtD4VJcZcn%2B3CwX6dv6s%2FfdIhlVb%2Bz%2FJIcq1AiEAl%2BC%2Bo5tvyjbZCG8oj0m5%2BU%2Ff1ahk37ifr9b9XaLYZgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJL0MqQTqULJTH49ryrcA0%2FP4Afthh7pknQoQ%2FW2D6nafAIdDtqBelb4GXhmdHZ4hBt9eghWU1qvfXqpHubDQjjvImSvohqCBRADNHrPkFO%2FN29J9rpTg7GH6vxmGHOvyt%2FpczdE2mcQzA6CjWBpG%2F3vG1PyMs1fV2msl7QVZgIQy1qO10vOd6ytn3sVzxwTeUQmjoLa3LFdt5ThY3FY29bghx%2Fo3Bx75RZQoI6n9%2B66us6P%2FhFDLV7%2FdcbQtZPK7SpK4HynGiXFjmL5cHAbWqhRu8MWkqy0QC6HXwR2fGtS3MqBYSWu8IE31tfx1Yo2RO%2F9a6TSkwdm6sHGTatdKCrMD6htrifW25TEiwm7q2wAsJQMIiedCE8b2YNOeNIGTapSZAG%2BM1S%2BTAgMSoMLRbogKGyBMRmmaLLmY%2B4Uy05rXpdJcPJ23TkodT1ss8%2BKbD0g77XtMP71BlrucbFKABn5FTaoW8HawRzD8MNpP9i6o5YmD%2BbjmDWWT9MUWm82vhJXNOOBwNkP2fy%2FuYqQnElpqcSRHlJxyoV4K7UQZqiMaUYDN4ZUMvjhpcsic9zCwj5ahSNKroqYq5H4fq6X0rSKAN57RpLvwtU%2FMQehJJ0vPlTyrg8NzHbdjJD3gzD4PNKlUMI%2BiyfONkaIMKHF4b4GOqUBPfrWo9WUgk6oO%2F62adXYz0gEXk8s3wVlMLAzdovCBYIPmfLPhukPE%2B9vXmuIN3MzZ1R%2FUzfnVM%2FLZf3%2BkhjBEiMNvC8V0TLWwDPj%2B8%2B0HYBk%2BMkLzCzHLyNHxr1YIQ6HixdUu5A0To0urDqfxM67jkaSrM3VnGKomOhiXJUOwIEViMh%2BWnNK2oM4Zg5wwQBkR62QvVMK7kQmu0MjEWweCMzMeTWa&X-Amz-Signature=14d04d0a9623dfb498d8583aea0e1b6a7a434acc60c3c8988888227c13c4bb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJUQOK4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaoPc3OOtD4VJcZcn%2B3CwX6dv6s%2FfdIhlVb%2Bz%2FJIcq1AiEAl%2BC%2Bo5tvyjbZCG8oj0m5%2BU%2Ff1ahk37ifr9b9XaLYZgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJL0MqQTqULJTH49ryrcA0%2FP4Afthh7pknQoQ%2FW2D6nafAIdDtqBelb4GXhmdHZ4hBt9eghWU1qvfXqpHubDQjjvImSvohqCBRADNHrPkFO%2FN29J9rpTg7GH6vxmGHOvyt%2FpczdE2mcQzA6CjWBpG%2F3vG1PyMs1fV2msl7QVZgIQy1qO10vOd6ytn3sVzxwTeUQmjoLa3LFdt5ThY3FY29bghx%2Fo3Bx75RZQoI6n9%2B66us6P%2FhFDLV7%2FdcbQtZPK7SpK4HynGiXFjmL5cHAbWqhRu8MWkqy0QC6HXwR2fGtS3MqBYSWu8IE31tfx1Yo2RO%2F9a6TSkwdm6sHGTatdKCrMD6htrifW25TEiwm7q2wAsJQMIiedCE8b2YNOeNIGTapSZAG%2BM1S%2BTAgMSoMLRbogKGyBMRmmaLLmY%2B4Uy05rXpdJcPJ23TkodT1ss8%2BKbD0g77XtMP71BlrucbFKABn5FTaoW8HawRzD8MNpP9i6o5YmD%2BbjmDWWT9MUWm82vhJXNOOBwNkP2fy%2FuYqQnElpqcSRHlJxyoV4K7UQZqiMaUYDN4ZUMvjhpcsic9zCwj5ahSNKroqYq5H4fq6X0rSKAN57RpLvwtU%2FMQehJJ0vPlTyrg8NzHbdjJD3gzD4PNKlUMI%2BiyfONkaIMKHF4b4GOqUBPfrWo9WUgk6oO%2F62adXYz0gEXk8s3wVlMLAzdovCBYIPmfLPhukPE%2B9vXmuIN3MzZ1R%2FUzfnVM%2FLZf3%2BkhjBEiMNvC8V0TLWwDPj%2B8%2B0HYBk%2BMkLzCzHLyNHxr1YIQ6HixdUu5A0To0urDqfxM67jkaSrM3VnGKomOhiXJUOwIEViMh%2BWnNK2oM4Zg5wwQBkR62QvVMK7kQmu0MjEWweCMzMeTWa&X-Amz-Signature=c2b60190666adf4be76652eaf5cf280dcb30c94855d766b4679ec3a2034f24ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJUQOK4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaoPc3OOtD4VJcZcn%2B3CwX6dv6s%2FfdIhlVb%2Bz%2FJIcq1AiEAl%2BC%2Bo5tvyjbZCG8oj0m5%2BU%2Ff1ahk37ifr9b9XaLYZgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJL0MqQTqULJTH49ryrcA0%2FP4Afthh7pknQoQ%2FW2D6nafAIdDtqBelb4GXhmdHZ4hBt9eghWU1qvfXqpHubDQjjvImSvohqCBRADNHrPkFO%2FN29J9rpTg7GH6vxmGHOvyt%2FpczdE2mcQzA6CjWBpG%2F3vG1PyMs1fV2msl7QVZgIQy1qO10vOd6ytn3sVzxwTeUQmjoLa3LFdt5ThY3FY29bghx%2Fo3Bx75RZQoI6n9%2B66us6P%2FhFDLV7%2FdcbQtZPK7SpK4HynGiXFjmL5cHAbWqhRu8MWkqy0QC6HXwR2fGtS3MqBYSWu8IE31tfx1Yo2RO%2F9a6TSkwdm6sHGTatdKCrMD6htrifW25TEiwm7q2wAsJQMIiedCE8b2YNOeNIGTapSZAG%2BM1S%2BTAgMSoMLRbogKGyBMRmmaLLmY%2B4Uy05rXpdJcPJ23TkodT1ss8%2BKbD0g77XtMP71BlrucbFKABn5FTaoW8HawRzD8MNpP9i6o5YmD%2BbjmDWWT9MUWm82vhJXNOOBwNkP2fy%2FuYqQnElpqcSRHlJxyoV4K7UQZqiMaUYDN4ZUMvjhpcsic9zCwj5ahSNKroqYq5H4fq6X0rSKAN57RpLvwtU%2FMQehJJ0vPlTyrg8NzHbdjJD3gzD4PNKlUMI%2BiyfONkaIMKHF4b4GOqUBPfrWo9WUgk6oO%2F62adXYz0gEXk8s3wVlMLAzdovCBYIPmfLPhukPE%2B9vXmuIN3MzZ1R%2FUzfnVM%2FLZf3%2BkhjBEiMNvC8V0TLWwDPj%2B8%2B0HYBk%2BMkLzCzHLyNHxr1YIQ6HixdUu5A0To0urDqfxM67jkaSrM3VnGKomOhiXJUOwIEViMh%2BWnNK2oM4Zg5wwQBkR62QvVMK7kQmu0MjEWweCMzMeTWa&X-Amz-Signature=4e834c458c9a5a5aef5312172f0ed6b5b8b047d028d9cdbf3ac73d199abcec34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJUQOK4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaoPc3OOtD4VJcZcn%2B3CwX6dv6s%2FfdIhlVb%2Bz%2FJIcq1AiEAl%2BC%2Bo5tvyjbZCG8oj0m5%2BU%2Ff1ahk37ifr9b9XaLYZgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJL0MqQTqULJTH49ryrcA0%2FP4Afthh7pknQoQ%2FW2D6nafAIdDtqBelb4GXhmdHZ4hBt9eghWU1qvfXqpHubDQjjvImSvohqCBRADNHrPkFO%2FN29J9rpTg7GH6vxmGHOvyt%2FpczdE2mcQzA6CjWBpG%2F3vG1PyMs1fV2msl7QVZgIQy1qO10vOd6ytn3sVzxwTeUQmjoLa3LFdt5ThY3FY29bghx%2Fo3Bx75RZQoI6n9%2B66us6P%2FhFDLV7%2FdcbQtZPK7SpK4HynGiXFjmL5cHAbWqhRu8MWkqy0QC6HXwR2fGtS3MqBYSWu8IE31tfx1Yo2RO%2F9a6TSkwdm6sHGTatdKCrMD6htrifW25TEiwm7q2wAsJQMIiedCE8b2YNOeNIGTapSZAG%2BM1S%2BTAgMSoMLRbogKGyBMRmmaLLmY%2B4Uy05rXpdJcPJ23TkodT1ss8%2BKbD0g77XtMP71BlrucbFKABn5FTaoW8HawRzD8MNpP9i6o5YmD%2BbjmDWWT9MUWm82vhJXNOOBwNkP2fy%2FuYqQnElpqcSRHlJxyoV4K7UQZqiMaUYDN4ZUMvjhpcsic9zCwj5ahSNKroqYq5H4fq6X0rSKAN57RpLvwtU%2FMQehJJ0vPlTyrg8NzHbdjJD3gzD4PNKlUMI%2BiyfONkaIMKHF4b4GOqUBPfrWo9WUgk6oO%2F62adXYz0gEXk8s3wVlMLAzdovCBYIPmfLPhukPE%2B9vXmuIN3MzZ1R%2FUzfnVM%2FLZf3%2BkhjBEiMNvC8V0TLWwDPj%2B8%2B0HYBk%2BMkLzCzHLyNHxr1YIQ6HixdUu5A0To0urDqfxM67jkaSrM3VnGKomOhiXJUOwIEViMh%2BWnNK2oM4Zg5wwQBkR62QvVMK7kQmu0MjEWweCMzMeTWa&X-Amz-Signature=fa7b5e89f15e062c63fbf516de3e8c810da605b3b3d0f523a115016dbd0d12bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJUQOK4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaoPc3OOtD4VJcZcn%2B3CwX6dv6s%2FfdIhlVb%2Bz%2FJIcq1AiEAl%2BC%2Bo5tvyjbZCG8oj0m5%2BU%2Ff1ahk37ifr9b9XaLYZgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJL0MqQTqULJTH49ryrcA0%2FP4Afthh7pknQoQ%2FW2D6nafAIdDtqBelb4GXhmdHZ4hBt9eghWU1qvfXqpHubDQjjvImSvohqCBRADNHrPkFO%2FN29J9rpTg7GH6vxmGHOvyt%2FpczdE2mcQzA6CjWBpG%2F3vG1PyMs1fV2msl7QVZgIQy1qO10vOd6ytn3sVzxwTeUQmjoLa3LFdt5ThY3FY29bghx%2Fo3Bx75RZQoI6n9%2B66us6P%2FhFDLV7%2FdcbQtZPK7SpK4HynGiXFjmL5cHAbWqhRu8MWkqy0QC6HXwR2fGtS3MqBYSWu8IE31tfx1Yo2RO%2F9a6TSkwdm6sHGTatdKCrMD6htrifW25TEiwm7q2wAsJQMIiedCE8b2YNOeNIGTapSZAG%2BM1S%2BTAgMSoMLRbogKGyBMRmmaLLmY%2B4Uy05rXpdJcPJ23TkodT1ss8%2BKbD0g77XtMP71BlrucbFKABn5FTaoW8HawRzD8MNpP9i6o5YmD%2BbjmDWWT9MUWm82vhJXNOOBwNkP2fy%2FuYqQnElpqcSRHlJxyoV4K7UQZqiMaUYDN4ZUMvjhpcsic9zCwj5ahSNKroqYq5H4fq6X0rSKAN57RpLvwtU%2FMQehJJ0vPlTyrg8NzHbdjJD3gzD4PNKlUMI%2BiyfONkaIMKHF4b4GOqUBPfrWo9WUgk6oO%2F62adXYz0gEXk8s3wVlMLAzdovCBYIPmfLPhukPE%2B9vXmuIN3MzZ1R%2FUzfnVM%2FLZf3%2BkhjBEiMNvC8V0TLWwDPj%2B8%2B0HYBk%2BMkLzCzHLyNHxr1YIQ6HixdUu5A0To0urDqfxM67jkaSrM3VnGKomOhiXJUOwIEViMh%2BWnNK2oM4Zg5wwQBkR62QvVMK7kQmu0MjEWweCMzMeTWa&X-Amz-Signature=531808873d8650f637ed74e9e8f257eb48c827bf423411ffbdc76ba6c9c114fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJUQOK4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaoPc3OOtD4VJcZcn%2B3CwX6dv6s%2FfdIhlVb%2Bz%2FJIcq1AiEAl%2BC%2Bo5tvyjbZCG8oj0m5%2BU%2Ff1ahk37ifr9b9XaLYZgAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJL0MqQTqULJTH49ryrcA0%2FP4Afthh7pknQoQ%2FW2D6nafAIdDtqBelb4GXhmdHZ4hBt9eghWU1qvfXqpHubDQjjvImSvohqCBRADNHrPkFO%2FN29J9rpTg7GH6vxmGHOvyt%2FpczdE2mcQzA6CjWBpG%2F3vG1PyMs1fV2msl7QVZgIQy1qO10vOd6ytn3sVzxwTeUQmjoLa3LFdt5ThY3FY29bghx%2Fo3Bx75RZQoI6n9%2B66us6P%2FhFDLV7%2FdcbQtZPK7SpK4HynGiXFjmL5cHAbWqhRu8MWkqy0QC6HXwR2fGtS3MqBYSWu8IE31tfx1Yo2RO%2F9a6TSkwdm6sHGTatdKCrMD6htrifW25TEiwm7q2wAsJQMIiedCE8b2YNOeNIGTapSZAG%2BM1S%2BTAgMSoMLRbogKGyBMRmmaLLmY%2B4Uy05rXpdJcPJ23TkodT1ss8%2BKbD0g77XtMP71BlrucbFKABn5FTaoW8HawRzD8MNpP9i6o5YmD%2BbjmDWWT9MUWm82vhJXNOOBwNkP2fy%2FuYqQnElpqcSRHlJxyoV4K7UQZqiMaUYDN4ZUMvjhpcsic9zCwj5ahSNKroqYq5H4fq6X0rSKAN57RpLvwtU%2FMQehJJ0vPlTyrg8NzHbdjJD3gzD4PNKlUMI%2BiyfONkaIMKHF4b4GOqUBPfrWo9WUgk6oO%2F62adXYz0gEXk8s3wVlMLAzdovCBYIPmfLPhukPE%2B9vXmuIN3MzZ1R%2FUzfnVM%2FLZf3%2BkhjBEiMNvC8V0TLWwDPj%2B8%2B0HYBk%2BMkLzCzHLyNHxr1YIQ6HixdUu5A0To0urDqfxM67jkaSrM3VnGKomOhiXJUOwIEViMh%2BWnNK2oM4Zg5wwQBkR62QvVMK7kQmu0MjEWweCMzMeTWa&X-Amz-Signature=40c7b3b4f42e036440a731b29d889d68be00298728e06e1f055856d11c2e345d&X-Amz-SignedHeaders=host&x-id=GetObject)
