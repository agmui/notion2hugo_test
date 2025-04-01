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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW55EV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0aNLujey46Ai73MM3dOV4DEU5avhZMkddfeE57EMI9gIgKH2Btp7oKqU1wXd5hllfDgsvRVJlOs03bBKiP%2FJUu08qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfaq%2FMzwmb%2FOgUo4yrcA5WfCDupOmcYO5%2Frereewg0BQsZ5TzplWzcThaVO6q5WTp2ZwcqMRwXvnQvxKU%2BFlqPc0J7HFqrrkLQUCyu5rVrk63Qeh%2FWJ08BOq9Mpdt76alfO8z4B9sg6oWj0xcXts833q4WI42eYK4vprV3rVJwSyJyKfNodQjwTKpuUIJnRE9nXckQa43Q0VgG0cjixEP2smr7Y4ghAzAHRmxX%2BZxlnKDAbjeVcQ8va3SQSCatUzfBBsf%2ByT3I5k%2BOVay7hD%2FB92j6CnLCGzIcvcoNlAHHDkY4EArMc1sV%2Brv2kajapyr2Tw82KyWvwGYYFTRpmWPcB%2F5c47%2Bc6t9LuVBv8MFfuZ5GeWu450S6Cs93PRn7%2FtAwA%2FOzS7juSWexZFioJADjne9FBL5vM0RZYOeol3cAFRWFj7f3KrOJLqTr%2F3%2Bn8YM%2BvqRU4zdV3%2FF772ToG5RRUdxwqFeDdVSr4yC14RgSQ9gf69pUIaUkVj5ke76zRLWZdlXscUn4zzXbLk5xWeDZvvRYAXhVxZUW8CjiTpF4hAlcgCqIchBJvXi7mXgxAhQQa2G6Sk22SjOlKBrVRhkggYN7Bp5Ai6S5BZGNUKdnKNXFd1m2SgbHVO7N8dejBktANK5og6mwE%2BD6KMJnbrL8GOqUBOs9DYAgI60%2Bopb%2BzFNlEnVK500%2BO8SZQMRl4H00TVRnp19W0ANO1FMF3%2FKQBIDLLEmj3jTBxFByDQ5%2FPClJCjMM%2FNFeBl8shV7bAaCCQQOqoWaaLPRSOG7tGfSxssf2TyerqtzXm6V6SpB9Xl7MbXXv3UQji8s1N37Kl%2BpA4WUED28bPU4%2B%2FaWnwhZBenxpPc%2BEZ3mQ678LQFbyx8kKidG8sM0bY&X-Amz-Signature=10f07bcff06ff4e427dca7d2926e6f0cc2a7c5405e1538200e1dabf81eb37807&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW55EV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0aNLujey46Ai73MM3dOV4DEU5avhZMkddfeE57EMI9gIgKH2Btp7oKqU1wXd5hllfDgsvRVJlOs03bBKiP%2FJUu08qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfaq%2FMzwmb%2FOgUo4yrcA5WfCDupOmcYO5%2Frereewg0BQsZ5TzplWzcThaVO6q5WTp2ZwcqMRwXvnQvxKU%2BFlqPc0J7HFqrrkLQUCyu5rVrk63Qeh%2FWJ08BOq9Mpdt76alfO8z4B9sg6oWj0xcXts833q4WI42eYK4vprV3rVJwSyJyKfNodQjwTKpuUIJnRE9nXckQa43Q0VgG0cjixEP2smr7Y4ghAzAHRmxX%2BZxlnKDAbjeVcQ8va3SQSCatUzfBBsf%2ByT3I5k%2BOVay7hD%2FB92j6CnLCGzIcvcoNlAHHDkY4EArMc1sV%2Brv2kajapyr2Tw82KyWvwGYYFTRpmWPcB%2F5c47%2Bc6t9LuVBv8MFfuZ5GeWu450S6Cs93PRn7%2FtAwA%2FOzS7juSWexZFioJADjne9FBL5vM0RZYOeol3cAFRWFj7f3KrOJLqTr%2F3%2Bn8YM%2BvqRU4zdV3%2FF772ToG5RRUdxwqFeDdVSr4yC14RgSQ9gf69pUIaUkVj5ke76zRLWZdlXscUn4zzXbLk5xWeDZvvRYAXhVxZUW8CjiTpF4hAlcgCqIchBJvXi7mXgxAhQQa2G6Sk22SjOlKBrVRhkggYN7Bp5Ai6S5BZGNUKdnKNXFd1m2SgbHVO7N8dejBktANK5og6mwE%2BD6KMJnbrL8GOqUBOs9DYAgI60%2Bopb%2BzFNlEnVK500%2BO8SZQMRl4H00TVRnp19W0ANO1FMF3%2FKQBIDLLEmj3jTBxFByDQ5%2FPClJCjMM%2FNFeBl8shV7bAaCCQQOqoWaaLPRSOG7tGfSxssf2TyerqtzXm6V6SpB9Xl7MbXXv3UQji8s1N37Kl%2BpA4WUED28bPU4%2B%2FaWnwhZBenxpPc%2BEZ3mQ678LQFbyx8kKidG8sM0bY&X-Amz-Signature=34fa4d75c2f8d907e9edb7feec8b8e2a4519c6a7b439696f4c1ac1e2827c8721&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW55EV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0aNLujey46Ai73MM3dOV4DEU5avhZMkddfeE57EMI9gIgKH2Btp7oKqU1wXd5hllfDgsvRVJlOs03bBKiP%2FJUu08qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfaq%2FMzwmb%2FOgUo4yrcA5WfCDupOmcYO5%2Frereewg0BQsZ5TzplWzcThaVO6q5WTp2ZwcqMRwXvnQvxKU%2BFlqPc0J7HFqrrkLQUCyu5rVrk63Qeh%2FWJ08BOq9Mpdt76alfO8z4B9sg6oWj0xcXts833q4WI42eYK4vprV3rVJwSyJyKfNodQjwTKpuUIJnRE9nXckQa43Q0VgG0cjixEP2smr7Y4ghAzAHRmxX%2BZxlnKDAbjeVcQ8va3SQSCatUzfBBsf%2ByT3I5k%2BOVay7hD%2FB92j6CnLCGzIcvcoNlAHHDkY4EArMc1sV%2Brv2kajapyr2Tw82KyWvwGYYFTRpmWPcB%2F5c47%2Bc6t9LuVBv8MFfuZ5GeWu450S6Cs93PRn7%2FtAwA%2FOzS7juSWexZFioJADjne9FBL5vM0RZYOeol3cAFRWFj7f3KrOJLqTr%2F3%2Bn8YM%2BvqRU4zdV3%2FF772ToG5RRUdxwqFeDdVSr4yC14RgSQ9gf69pUIaUkVj5ke76zRLWZdlXscUn4zzXbLk5xWeDZvvRYAXhVxZUW8CjiTpF4hAlcgCqIchBJvXi7mXgxAhQQa2G6Sk22SjOlKBrVRhkggYN7Bp5Ai6S5BZGNUKdnKNXFd1m2SgbHVO7N8dejBktANK5og6mwE%2BD6KMJnbrL8GOqUBOs9DYAgI60%2Bopb%2BzFNlEnVK500%2BO8SZQMRl4H00TVRnp19W0ANO1FMF3%2FKQBIDLLEmj3jTBxFByDQ5%2FPClJCjMM%2FNFeBl8shV7bAaCCQQOqoWaaLPRSOG7tGfSxssf2TyerqtzXm6V6SpB9Xl7MbXXv3UQji8s1N37Kl%2BpA4WUED28bPU4%2B%2FaWnwhZBenxpPc%2BEZ3mQ678LQFbyx8kKidG8sM0bY&X-Amz-Signature=f3f5072a8967d683e1b6d9800a02e4905e9990fdab2c722c75ec114668b3a152&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW55EV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0aNLujey46Ai73MM3dOV4DEU5avhZMkddfeE57EMI9gIgKH2Btp7oKqU1wXd5hllfDgsvRVJlOs03bBKiP%2FJUu08qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfaq%2FMzwmb%2FOgUo4yrcA5WfCDupOmcYO5%2Frereewg0BQsZ5TzplWzcThaVO6q5WTp2ZwcqMRwXvnQvxKU%2BFlqPc0J7HFqrrkLQUCyu5rVrk63Qeh%2FWJ08BOq9Mpdt76alfO8z4B9sg6oWj0xcXts833q4WI42eYK4vprV3rVJwSyJyKfNodQjwTKpuUIJnRE9nXckQa43Q0VgG0cjixEP2smr7Y4ghAzAHRmxX%2BZxlnKDAbjeVcQ8va3SQSCatUzfBBsf%2ByT3I5k%2BOVay7hD%2FB92j6CnLCGzIcvcoNlAHHDkY4EArMc1sV%2Brv2kajapyr2Tw82KyWvwGYYFTRpmWPcB%2F5c47%2Bc6t9LuVBv8MFfuZ5GeWu450S6Cs93PRn7%2FtAwA%2FOzS7juSWexZFioJADjne9FBL5vM0RZYOeol3cAFRWFj7f3KrOJLqTr%2F3%2Bn8YM%2BvqRU4zdV3%2FF772ToG5RRUdxwqFeDdVSr4yC14RgSQ9gf69pUIaUkVj5ke76zRLWZdlXscUn4zzXbLk5xWeDZvvRYAXhVxZUW8CjiTpF4hAlcgCqIchBJvXi7mXgxAhQQa2G6Sk22SjOlKBrVRhkggYN7Bp5Ai6S5BZGNUKdnKNXFd1m2SgbHVO7N8dejBktANK5og6mwE%2BD6KMJnbrL8GOqUBOs9DYAgI60%2Bopb%2BzFNlEnVK500%2BO8SZQMRl4H00TVRnp19W0ANO1FMF3%2FKQBIDLLEmj3jTBxFByDQ5%2FPClJCjMM%2FNFeBl8shV7bAaCCQQOqoWaaLPRSOG7tGfSxssf2TyerqtzXm6V6SpB9Xl7MbXXv3UQji8s1N37Kl%2BpA4WUED28bPU4%2B%2FaWnwhZBenxpPc%2BEZ3mQ678LQFbyx8kKidG8sM0bY&X-Amz-Signature=aab3d295ce5dc69cc1cb6da3ed104b3a4041f3446d3f1e37f64ae65dc72a41b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW55EV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0aNLujey46Ai73MM3dOV4DEU5avhZMkddfeE57EMI9gIgKH2Btp7oKqU1wXd5hllfDgsvRVJlOs03bBKiP%2FJUu08qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfaq%2FMzwmb%2FOgUo4yrcA5WfCDupOmcYO5%2Frereewg0BQsZ5TzplWzcThaVO6q5WTp2ZwcqMRwXvnQvxKU%2BFlqPc0J7HFqrrkLQUCyu5rVrk63Qeh%2FWJ08BOq9Mpdt76alfO8z4B9sg6oWj0xcXts833q4WI42eYK4vprV3rVJwSyJyKfNodQjwTKpuUIJnRE9nXckQa43Q0VgG0cjixEP2smr7Y4ghAzAHRmxX%2BZxlnKDAbjeVcQ8va3SQSCatUzfBBsf%2ByT3I5k%2BOVay7hD%2FB92j6CnLCGzIcvcoNlAHHDkY4EArMc1sV%2Brv2kajapyr2Tw82KyWvwGYYFTRpmWPcB%2F5c47%2Bc6t9LuVBv8MFfuZ5GeWu450S6Cs93PRn7%2FtAwA%2FOzS7juSWexZFioJADjne9FBL5vM0RZYOeol3cAFRWFj7f3KrOJLqTr%2F3%2Bn8YM%2BvqRU4zdV3%2FF772ToG5RRUdxwqFeDdVSr4yC14RgSQ9gf69pUIaUkVj5ke76zRLWZdlXscUn4zzXbLk5xWeDZvvRYAXhVxZUW8CjiTpF4hAlcgCqIchBJvXi7mXgxAhQQa2G6Sk22SjOlKBrVRhkggYN7Bp5Ai6S5BZGNUKdnKNXFd1m2SgbHVO7N8dejBktANK5og6mwE%2BD6KMJnbrL8GOqUBOs9DYAgI60%2Bopb%2BzFNlEnVK500%2BO8SZQMRl4H00TVRnp19W0ANO1FMF3%2FKQBIDLLEmj3jTBxFByDQ5%2FPClJCjMM%2FNFeBl8shV7bAaCCQQOqoWaaLPRSOG7tGfSxssf2TyerqtzXm6V6SpB9Xl7MbXXv3UQji8s1N37Kl%2BpA4WUED28bPU4%2B%2FaWnwhZBenxpPc%2BEZ3mQ678LQFbyx8kKidG8sM0bY&X-Amz-Signature=4d4800da95f04a64c578aa9c9a22ce922f224286b50c62d611409d1fa97a7c06&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW55EV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD0aNLujey46Ai73MM3dOV4DEU5avhZMkddfeE57EMI9gIgKH2Btp7oKqU1wXd5hllfDgsvRVJlOs03bBKiP%2FJUu08qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfaq%2FMzwmb%2FOgUo4yrcA5WfCDupOmcYO5%2Frereewg0BQsZ5TzplWzcThaVO6q5WTp2ZwcqMRwXvnQvxKU%2BFlqPc0J7HFqrrkLQUCyu5rVrk63Qeh%2FWJ08BOq9Mpdt76alfO8z4B9sg6oWj0xcXts833q4WI42eYK4vprV3rVJwSyJyKfNodQjwTKpuUIJnRE9nXckQa43Q0VgG0cjixEP2smr7Y4ghAzAHRmxX%2BZxlnKDAbjeVcQ8va3SQSCatUzfBBsf%2ByT3I5k%2BOVay7hD%2FB92j6CnLCGzIcvcoNlAHHDkY4EArMc1sV%2Brv2kajapyr2Tw82KyWvwGYYFTRpmWPcB%2F5c47%2Bc6t9LuVBv8MFfuZ5GeWu450S6Cs93PRn7%2FtAwA%2FOzS7juSWexZFioJADjne9FBL5vM0RZYOeol3cAFRWFj7f3KrOJLqTr%2F3%2Bn8YM%2BvqRU4zdV3%2FF772ToG5RRUdxwqFeDdVSr4yC14RgSQ9gf69pUIaUkVj5ke76zRLWZdlXscUn4zzXbLk5xWeDZvvRYAXhVxZUW8CjiTpF4hAlcgCqIchBJvXi7mXgxAhQQa2G6Sk22SjOlKBrVRhkggYN7Bp5Ai6S5BZGNUKdnKNXFd1m2SgbHVO7N8dejBktANK5og6mwE%2BD6KMJnbrL8GOqUBOs9DYAgI60%2Bopb%2BzFNlEnVK500%2BO8SZQMRl4H00TVRnp19W0ANO1FMF3%2FKQBIDLLEmj3jTBxFByDQ5%2FPClJCjMM%2FNFeBl8shV7bAaCCQQOqoWaaLPRSOG7tGfSxssf2TyerqtzXm6V6SpB9Xl7MbXXv3UQji8s1N37Kl%2BpA4WUED28bPU4%2B%2FaWnwhZBenxpPc%2BEZ3mQ678LQFbyx8kKidG8sM0bY&X-Amz-Signature=d6b6a390bbf05ed89d9bb15a5e79d41e2c4a595fd1816ec1f3472e1dcf644013&X-Amz-SignedHeaders=host&x-id=GetObject)
