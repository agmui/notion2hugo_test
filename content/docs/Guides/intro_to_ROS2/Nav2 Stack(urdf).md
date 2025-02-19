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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6SHARC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUlbayPO1qpNbvkWmBeh3lKGvf2uYDIgW3rYzlK3Oc8AIhALWYZm%2Fu7feG5C62CyosbdUeBriispcNExoZ8SSKb%2BJ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Ba%2BLZN2zmcfsZr4q3ANRs56GyO2940SYtTmeLI%2F0UzLPmVpl0vDEGNgQToWahTFDw66eYQU%2FwFU9cOEm%2BfMz9zPud2QWkGHKhRkeAoxX5LQN4xmc6fnzKZTv2z2%2FNbsBnHtzvvdysfjpwgGwLhi24GwIHvmZfmP%2By619ccgc088Ua1xnMn7SCf0EGxIsk7CxpjB%2BbZvo7afIgYdbyhDsnCaAdt5oxZVLtmcyKG26BYL%2F9KnUkqKPOKaIOeqBa75Fm3YFvfk3l%2BxWlFG61kKq8hPgHynbBVZK82%2B57%2By0dLtCQhSwAIKXfHdja1yvGyWNDlsSNuMplQef4VBTfDiOGkT6MRw%2BsPhXQmYc7G0rHLTOnFRxV3zJ05KsTD%2FaOFgmG0hfiqo0%2Fam6YtXTsZyEB6QbhS4pwa12IoMeBGaty0fmYXsM0dgKEPW1t%2F%2F2fajOxFvBUyrvqz7wwr1CN%2BvvMtGByGzRizlVovc%2BAYNgSvmAAa%2BO7UDnvso9oGhvR5HXBqIgat0a6ct3L2IRwy%2BW1E%2FU20PxLu8rKXlNqV78cm6xqJBPp9FMjGInLh5gXBpQHYdAFI0NgR8%2FAkFGeDhQT1rByOkffXjccwVFVT1GBIWyhp04PFPwwzdJWkSmvUb7X%2BgsBB7naJkmFjDR6dS9BjqkAbJiDVb7yjRGVb%2FOVg1yK%2BUDu9N9HLP0xQZeHzjxCyGUMxwbIuBwvxq06kKeRj0HJOh%2BJY42a1AjNGJIJKoHN89GBNQmaaHJ6M7MPr1p4VbXs7x05W3iT7LOQNZaQqIRMX6znXVyKlrOEULNtCoLklcfxf%2FEx84n453q9QzvTFqwDgRDAszfwed5MbIyJEEjWrMKz1emVmFvBpHrDA6ELsLI5Bw3&X-Amz-Signature=e228941799399ff8d59beca318b5ee67133c76997b1e029e8c80838b219f29b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6SHARC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUlbayPO1qpNbvkWmBeh3lKGvf2uYDIgW3rYzlK3Oc8AIhALWYZm%2Fu7feG5C62CyosbdUeBriispcNExoZ8SSKb%2BJ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Ba%2BLZN2zmcfsZr4q3ANRs56GyO2940SYtTmeLI%2F0UzLPmVpl0vDEGNgQToWahTFDw66eYQU%2FwFU9cOEm%2BfMz9zPud2QWkGHKhRkeAoxX5LQN4xmc6fnzKZTv2z2%2FNbsBnHtzvvdysfjpwgGwLhi24GwIHvmZfmP%2By619ccgc088Ua1xnMn7SCf0EGxIsk7CxpjB%2BbZvo7afIgYdbyhDsnCaAdt5oxZVLtmcyKG26BYL%2F9KnUkqKPOKaIOeqBa75Fm3YFvfk3l%2BxWlFG61kKq8hPgHynbBVZK82%2B57%2By0dLtCQhSwAIKXfHdja1yvGyWNDlsSNuMplQef4VBTfDiOGkT6MRw%2BsPhXQmYc7G0rHLTOnFRxV3zJ05KsTD%2FaOFgmG0hfiqo0%2Fam6YtXTsZyEB6QbhS4pwa12IoMeBGaty0fmYXsM0dgKEPW1t%2F%2F2fajOxFvBUyrvqz7wwr1CN%2BvvMtGByGzRizlVovc%2BAYNgSvmAAa%2BO7UDnvso9oGhvR5HXBqIgat0a6ct3L2IRwy%2BW1E%2FU20PxLu8rKXlNqV78cm6xqJBPp9FMjGInLh5gXBpQHYdAFI0NgR8%2FAkFGeDhQT1rByOkffXjccwVFVT1GBIWyhp04PFPwwzdJWkSmvUb7X%2BgsBB7naJkmFjDR6dS9BjqkAbJiDVb7yjRGVb%2FOVg1yK%2BUDu9N9HLP0xQZeHzjxCyGUMxwbIuBwvxq06kKeRj0HJOh%2BJY42a1AjNGJIJKoHN89GBNQmaaHJ6M7MPr1p4VbXs7x05W3iT7LOQNZaQqIRMX6znXVyKlrOEULNtCoLklcfxf%2FEx84n453q9QzvTFqwDgRDAszfwed5MbIyJEEjWrMKz1emVmFvBpHrDA6ELsLI5Bw3&X-Amz-Signature=c5b3ea952846179966bcad7b1f47daf0af06c4473978dce60d20263e59d3e72e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6SHARC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUlbayPO1qpNbvkWmBeh3lKGvf2uYDIgW3rYzlK3Oc8AIhALWYZm%2Fu7feG5C62CyosbdUeBriispcNExoZ8SSKb%2BJ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Ba%2BLZN2zmcfsZr4q3ANRs56GyO2940SYtTmeLI%2F0UzLPmVpl0vDEGNgQToWahTFDw66eYQU%2FwFU9cOEm%2BfMz9zPud2QWkGHKhRkeAoxX5LQN4xmc6fnzKZTv2z2%2FNbsBnHtzvvdysfjpwgGwLhi24GwIHvmZfmP%2By619ccgc088Ua1xnMn7SCf0EGxIsk7CxpjB%2BbZvo7afIgYdbyhDsnCaAdt5oxZVLtmcyKG26BYL%2F9KnUkqKPOKaIOeqBa75Fm3YFvfk3l%2BxWlFG61kKq8hPgHynbBVZK82%2B57%2By0dLtCQhSwAIKXfHdja1yvGyWNDlsSNuMplQef4VBTfDiOGkT6MRw%2BsPhXQmYc7G0rHLTOnFRxV3zJ05KsTD%2FaOFgmG0hfiqo0%2Fam6YtXTsZyEB6QbhS4pwa12IoMeBGaty0fmYXsM0dgKEPW1t%2F%2F2fajOxFvBUyrvqz7wwr1CN%2BvvMtGByGzRizlVovc%2BAYNgSvmAAa%2BO7UDnvso9oGhvR5HXBqIgat0a6ct3L2IRwy%2BW1E%2FU20PxLu8rKXlNqV78cm6xqJBPp9FMjGInLh5gXBpQHYdAFI0NgR8%2FAkFGeDhQT1rByOkffXjccwVFVT1GBIWyhp04PFPwwzdJWkSmvUb7X%2BgsBB7naJkmFjDR6dS9BjqkAbJiDVb7yjRGVb%2FOVg1yK%2BUDu9N9HLP0xQZeHzjxCyGUMxwbIuBwvxq06kKeRj0HJOh%2BJY42a1AjNGJIJKoHN89GBNQmaaHJ6M7MPr1p4VbXs7x05W3iT7LOQNZaQqIRMX6znXVyKlrOEULNtCoLklcfxf%2FEx84n453q9QzvTFqwDgRDAszfwed5MbIyJEEjWrMKz1emVmFvBpHrDA6ELsLI5Bw3&X-Amz-Signature=4cb3ad994dc1cf8ffab57acba5ff2735d475363f17d739b91fa9ccc3622cdbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6SHARC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUlbayPO1qpNbvkWmBeh3lKGvf2uYDIgW3rYzlK3Oc8AIhALWYZm%2Fu7feG5C62CyosbdUeBriispcNExoZ8SSKb%2BJ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Ba%2BLZN2zmcfsZr4q3ANRs56GyO2940SYtTmeLI%2F0UzLPmVpl0vDEGNgQToWahTFDw66eYQU%2FwFU9cOEm%2BfMz9zPud2QWkGHKhRkeAoxX5LQN4xmc6fnzKZTv2z2%2FNbsBnHtzvvdysfjpwgGwLhi24GwIHvmZfmP%2By619ccgc088Ua1xnMn7SCf0EGxIsk7CxpjB%2BbZvo7afIgYdbyhDsnCaAdt5oxZVLtmcyKG26BYL%2F9KnUkqKPOKaIOeqBa75Fm3YFvfk3l%2BxWlFG61kKq8hPgHynbBVZK82%2B57%2By0dLtCQhSwAIKXfHdja1yvGyWNDlsSNuMplQef4VBTfDiOGkT6MRw%2BsPhXQmYc7G0rHLTOnFRxV3zJ05KsTD%2FaOFgmG0hfiqo0%2Fam6YtXTsZyEB6QbhS4pwa12IoMeBGaty0fmYXsM0dgKEPW1t%2F%2F2fajOxFvBUyrvqz7wwr1CN%2BvvMtGByGzRizlVovc%2BAYNgSvmAAa%2BO7UDnvso9oGhvR5HXBqIgat0a6ct3L2IRwy%2BW1E%2FU20PxLu8rKXlNqV78cm6xqJBPp9FMjGInLh5gXBpQHYdAFI0NgR8%2FAkFGeDhQT1rByOkffXjccwVFVT1GBIWyhp04PFPwwzdJWkSmvUb7X%2BgsBB7naJkmFjDR6dS9BjqkAbJiDVb7yjRGVb%2FOVg1yK%2BUDu9N9HLP0xQZeHzjxCyGUMxwbIuBwvxq06kKeRj0HJOh%2BJY42a1AjNGJIJKoHN89GBNQmaaHJ6M7MPr1p4VbXs7x05W3iT7LOQNZaQqIRMX6znXVyKlrOEULNtCoLklcfxf%2FEx84n453q9QzvTFqwDgRDAszfwed5MbIyJEEjWrMKz1emVmFvBpHrDA6ELsLI5Bw3&X-Amz-Signature=901c7e6d30973c0115766b45593a1f6f69efefdad63c4f21e7226874a63f12fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6SHARC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUlbayPO1qpNbvkWmBeh3lKGvf2uYDIgW3rYzlK3Oc8AIhALWYZm%2Fu7feG5C62CyosbdUeBriispcNExoZ8SSKb%2BJ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Ba%2BLZN2zmcfsZr4q3ANRs56GyO2940SYtTmeLI%2F0UzLPmVpl0vDEGNgQToWahTFDw66eYQU%2FwFU9cOEm%2BfMz9zPud2QWkGHKhRkeAoxX5LQN4xmc6fnzKZTv2z2%2FNbsBnHtzvvdysfjpwgGwLhi24GwIHvmZfmP%2By619ccgc088Ua1xnMn7SCf0EGxIsk7CxpjB%2BbZvo7afIgYdbyhDsnCaAdt5oxZVLtmcyKG26BYL%2F9KnUkqKPOKaIOeqBa75Fm3YFvfk3l%2BxWlFG61kKq8hPgHynbBVZK82%2B57%2By0dLtCQhSwAIKXfHdja1yvGyWNDlsSNuMplQef4VBTfDiOGkT6MRw%2BsPhXQmYc7G0rHLTOnFRxV3zJ05KsTD%2FaOFgmG0hfiqo0%2Fam6YtXTsZyEB6QbhS4pwa12IoMeBGaty0fmYXsM0dgKEPW1t%2F%2F2fajOxFvBUyrvqz7wwr1CN%2BvvMtGByGzRizlVovc%2BAYNgSvmAAa%2BO7UDnvso9oGhvR5HXBqIgat0a6ct3L2IRwy%2BW1E%2FU20PxLu8rKXlNqV78cm6xqJBPp9FMjGInLh5gXBpQHYdAFI0NgR8%2FAkFGeDhQT1rByOkffXjccwVFVT1GBIWyhp04PFPwwzdJWkSmvUb7X%2BgsBB7naJkmFjDR6dS9BjqkAbJiDVb7yjRGVb%2FOVg1yK%2BUDu9N9HLP0xQZeHzjxCyGUMxwbIuBwvxq06kKeRj0HJOh%2BJY42a1AjNGJIJKoHN89GBNQmaaHJ6M7MPr1p4VbXs7x05W3iT7LOQNZaQqIRMX6znXVyKlrOEULNtCoLklcfxf%2FEx84n453q9QzvTFqwDgRDAszfwed5MbIyJEEjWrMKz1emVmFvBpHrDA6ELsLI5Bw3&X-Amz-Signature=dd17ad761e54d348da12fab31811bc7ba956a03f60f9458f47b9439a5e82e430&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I6SHARC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUlbayPO1qpNbvkWmBeh3lKGvf2uYDIgW3rYzlK3Oc8AIhALWYZm%2Fu7feG5C62CyosbdUeBriispcNExoZ8SSKb%2BJ7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg%2Ba%2BLZN2zmcfsZr4q3ANRs56GyO2940SYtTmeLI%2F0UzLPmVpl0vDEGNgQToWahTFDw66eYQU%2FwFU9cOEm%2BfMz9zPud2QWkGHKhRkeAoxX5LQN4xmc6fnzKZTv2z2%2FNbsBnHtzvvdysfjpwgGwLhi24GwIHvmZfmP%2By619ccgc088Ua1xnMn7SCf0EGxIsk7CxpjB%2BbZvo7afIgYdbyhDsnCaAdt5oxZVLtmcyKG26BYL%2F9KnUkqKPOKaIOeqBa75Fm3YFvfk3l%2BxWlFG61kKq8hPgHynbBVZK82%2B57%2By0dLtCQhSwAIKXfHdja1yvGyWNDlsSNuMplQef4VBTfDiOGkT6MRw%2BsPhXQmYc7G0rHLTOnFRxV3zJ05KsTD%2FaOFgmG0hfiqo0%2Fam6YtXTsZyEB6QbhS4pwa12IoMeBGaty0fmYXsM0dgKEPW1t%2F%2F2fajOxFvBUyrvqz7wwr1CN%2BvvMtGByGzRizlVovc%2BAYNgSvmAAa%2BO7UDnvso9oGhvR5HXBqIgat0a6ct3L2IRwy%2BW1E%2FU20PxLu8rKXlNqV78cm6xqJBPp9FMjGInLh5gXBpQHYdAFI0NgR8%2FAkFGeDhQT1rByOkffXjccwVFVT1GBIWyhp04PFPwwzdJWkSmvUb7X%2BgsBB7naJkmFjDR6dS9BjqkAbJiDVb7yjRGVb%2FOVg1yK%2BUDu9N9HLP0xQZeHzjxCyGUMxwbIuBwvxq06kKeRj0HJOh%2BJY42a1AjNGJIJKoHN89GBNQmaaHJ6M7MPr1p4VbXs7x05W3iT7LOQNZaQqIRMX6znXVyKlrOEULNtCoLklcfxf%2FEx84n453q9QzvTFqwDgRDAszfwed5MbIyJEEjWrMKz1emVmFvBpHrDA6ELsLI5Bw3&X-Amz-Signature=4e493864bdc0d2c6c5604a9f85410f010e1f33e676d69e46a03877596b83dcff&X-Amz-SignedHeaders=host&x-id=GetObject)
