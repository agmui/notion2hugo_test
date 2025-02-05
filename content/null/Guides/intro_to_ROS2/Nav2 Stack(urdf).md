---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCN3JJCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDckBN%2FAMoRO1AhwNjEVImCrDo2cMcTUF%2FJi1YT%2F5idXAIgXMoevZDQ8xukMWdOpo6OFRC49JDvh4P7kvWaxKizfWAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAbKfpOuvit%2B9cHaSircA0BRxtsO96nYqjl41vBaar6oKwT8%2BYeZ2kf4J5nmd49wpjh9%2BK%2FG7dtDTdpJ8xvG5DteenAFm9fOWeXFAcExt4SHuRac0Vrp%2BYNkLIIcT3Pd781JDd%2Fg9e5bpu0awd60dgZZFgo%2BHYFmVKCcbOUaVHwLvopB521JnKF%2FCf%2BP1PEN%2FYCB3Aq8K9UKnnQlcO5wS9RWP5UUfx%2F%2FKuTd1N4soUg0Sec1pFRvo3VwE9sZnXtnYIOTwZL5sSJybwk%2FUkzMoCYTPbYZ4y9yMpCCtiCI7hO9XlIhGUxUd4zcP4eb8mqTFsGeRD3El0a22YNFRzDtjSXUFzWLZt%2B2jSkZ6XR7lTdiCnrAX%2BNrxoy4vPxUawFJcWQ2foZzADTGBZYEQwMRcZXr1yNOK5wdql0tRi%2B%2FaY1Z4vbUVBqf3RgiUxnkYqEjMkjN7K39CKSwbeEPGalijjIA%2FEk%2BeIy6P5TXSq4qmzxFJrEN0ikGsKTzflpR3OaIbTfAgSelv6InRo%2FtRk7hh3oIzUwfyaKEqzY7wO5cJEYY%2BY0wu9xJqdADVTetFrp%2BxMwebp%2FELQi4ZNmI%2FIY1wmb6aY08UdYvR3%2Btf5XzyIC15mWrGyi6hOtW9wtHM%2BsziJveYSDsi%2FOMB2T%2BMNjei70GOqUBzteuf6cYJ9d%2BdcYTzPnbpqK289cVbqslXRcsGG%2B2p%2FguG%2BJCbG52wzHa2ajX5kSjwyoqvoXxMtx%2BnBJDM8KjhE9Cr0%2BIkoAyBBNlTLp715fvgzmHb8WvN44gbubQMZJ1R5WShn3HTndJCrbVFBpnyX3F217vlGHKj8vDhB3KZM3NkVQNDbapi%2BBacXcAs1skJ1Tq3XJxjiXlHqAAxfSEDwqcV%2Bgo&X-Amz-Signature=2981b33ee22f72846de94d7dc9da58bb15c5f495e5aaa4fc2115e55648bf0afa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCN3JJCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDckBN%2FAMoRO1AhwNjEVImCrDo2cMcTUF%2FJi1YT%2F5idXAIgXMoevZDQ8xukMWdOpo6OFRC49JDvh4P7kvWaxKizfWAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAbKfpOuvit%2B9cHaSircA0BRxtsO96nYqjl41vBaar6oKwT8%2BYeZ2kf4J5nmd49wpjh9%2BK%2FG7dtDTdpJ8xvG5DteenAFm9fOWeXFAcExt4SHuRac0Vrp%2BYNkLIIcT3Pd781JDd%2Fg9e5bpu0awd60dgZZFgo%2BHYFmVKCcbOUaVHwLvopB521JnKF%2FCf%2BP1PEN%2FYCB3Aq8K9UKnnQlcO5wS9RWP5UUfx%2F%2FKuTd1N4soUg0Sec1pFRvo3VwE9sZnXtnYIOTwZL5sSJybwk%2FUkzMoCYTPbYZ4y9yMpCCtiCI7hO9XlIhGUxUd4zcP4eb8mqTFsGeRD3El0a22YNFRzDtjSXUFzWLZt%2B2jSkZ6XR7lTdiCnrAX%2BNrxoy4vPxUawFJcWQ2foZzADTGBZYEQwMRcZXr1yNOK5wdql0tRi%2B%2FaY1Z4vbUVBqf3RgiUxnkYqEjMkjN7K39CKSwbeEPGalijjIA%2FEk%2BeIy6P5TXSq4qmzxFJrEN0ikGsKTzflpR3OaIbTfAgSelv6InRo%2FtRk7hh3oIzUwfyaKEqzY7wO5cJEYY%2BY0wu9xJqdADVTetFrp%2BxMwebp%2FELQi4ZNmI%2FIY1wmb6aY08UdYvR3%2Btf5XzyIC15mWrGyi6hOtW9wtHM%2BsziJveYSDsi%2FOMB2T%2BMNjei70GOqUBzteuf6cYJ9d%2BdcYTzPnbpqK289cVbqslXRcsGG%2B2p%2FguG%2BJCbG52wzHa2ajX5kSjwyoqvoXxMtx%2BnBJDM8KjhE9Cr0%2BIkoAyBBNlTLp715fvgzmHb8WvN44gbubQMZJ1R5WShn3HTndJCrbVFBpnyX3F217vlGHKj8vDhB3KZM3NkVQNDbapi%2BBacXcAs1skJ1Tq3XJxjiXlHqAAxfSEDwqcV%2Bgo&X-Amz-Signature=a347ca1b84f64c9f25548d86bff12cbb9ec43547f99da8b24e176319f33c0a08&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCN3JJCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDckBN%2FAMoRO1AhwNjEVImCrDo2cMcTUF%2FJi1YT%2F5idXAIgXMoevZDQ8xukMWdOpo6OFRC49JDvh4P7kvWaxKizfWAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAbKfpOuvit%2B9cHaSircA0BRxtsO96nYqjl41vBaar6oKwT8%2BYeZ2kf4J5nmd49wpjh9%2BK%2FG7dtDTdpJ8xvG5DteenAFm9fOWeXFAcExt4SHuRac0Vrp%2BYNkLIIcT3Pd781JDd%2Fg9e5bpu0awd60dgZZFgo%2BHYFmVKCcbOUaVHwLvopB521JnKF%2FCf%2BP1PEN%2FYCB3Aq8K9UKnnQlcO5wS9RWP5UUfx%2F%2FKuTd1N4soUg0Sec1pFRvo3VwE9sZnXtnYIOTwZL5sSJybwk%2FUkzMoCYTPbYZ4y9yMpCCtiCI7hO9XlIhGUxUd4zcP4eb8mqTFsGeRD3El0a22YNFRzDtjSXUFzWLZt%2B2jSkZ6XR7lTdiCnrAX%2BNrxoy4vPxUawFJcWQ2foZzADTGBZYEQwMRcZXr1yNOK5wdql0tRi%2B%2FaY1Z4vbUVBqf3RgiUxnkYqEjMkjN7K39CKSwbeEPGalijjIA%2FEk%2BeIy6P5TXSq4qmzxFJrEN0ikGsKTzflpR3OaIbTfAgSelv6InRo%2FtRk7hh3oIzUwfyaKEqzY7wO5cJEYY%2BY0wu9xJqdADVTetFrp%2BxMwebp%2FELQi4ZNmI%2FIY1wmb6aY08UdYvR3%2Btf5XzyIC15mWrGyi6hOtW9wtHM%2BsziJveYSDsi%2FOMB2T%2BMNjei70GOqUBzteuf6cYJ9d%2BdcYTzPnbpqK289cVbqslXRcsGG%2B2p%2FguG%2BJCbG52wzHa2ajX5kSjwyoqvoXxMtx%2BnBJDM8KjhE9Cr0%2BIkoAyBBNlTLp715fvgzmHb8WvN44gbubQMZJ1R5WShn3HTndJCrbVFBpnyX3F217vlGHKj8vDhB3KZM3NkVQNDbapi%2BBacXcAs1skJ1Tq3XJxjiXlHqAAxfSEDwqcV%2Bgo&X-Amz-Signature=3a3e21182fd0318254db42f626ee2354db2c6d983b3381ce294aa4c03a263f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCN3JJCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDckBN%2FAMoRO1AhwNjEVImCrDo2cMcTUF%2FJi1YT%2F5idXAIgXMoevZDQ8xukMWdOpo6OFRC49JDvh4P7kvWaxKizfWAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAbKfpOuvit%2B9cHaSircA0BRxtsO96nYqjl41vBaar6oKwT8%2BYeZ2kf4J5nmd49wpjh9%2BK%2FG7dtDTdpJ8xvG5DteenAFm9fOWeXFAcExt4SHuRac0Vrp%2BYNkLIIcT3Pd781JDd%2Fg9e5bpu0awd60dgZZFgo%2BHYFmVKCcbOUaVHwLvopB521JnKF%2FCf%2BP1PEN%2FYCB3Aq8K9UKnnQlcO5wS9RWP5UUfx%2F%2FKuTd1N4soUg0Sec1pFRvo3VwE9sZnXtnYIOTwZL5sSJybwk%2FUkzMoCYTPbYZ4y9yMpCCtiCI7hO9XlIhGUxUd4zcP4eb8mqTFsGeRD3El0a22YNFRzDtjSXUFzWLZt%2B2jSkZ6XR7lTdiCnrAX%2BNrxoy4vPxUawFJcWQ2foZzADTGBZYEQwMRcZXr1yNOK5wdql0tRi%2B%2FaY1Z4vbUVBqf3RgiUxnkYqEjMkjN7K39CKSwbeEPGalijjIA%2FEk%2BeIy6P5TXSq4qmzxFJrEN0ikGsKTzflpR3OaIbTfAgSelv6InRo%2FtRk7hh3oIzUwfyaKEqzY7wO5cJEYY%2BY0wu9xJqdADVTetFrp%2BxMwebp%2FELQi4ZNmI%2FIY1wmb6aY08UdYvR3%2Btf5XzyIC15mWrGyi6hOtW9wtHM%2BsziJveYSDsi%2FOMB2T%2BMNjei70GOqUBzteuf6cYJ9d%2BdcYTzPnbpqK289cVbqslXRcsGG%2B2p%2FguG%2BJCbG52wzHa2ajX5kSjwyoqvoXxMtx%2BnBJDM8KjhE9Cr0%2BIkoAyBBNlTLp715fvgzmHb8WvN44gbubQMZJ1R5WShn3HTndJCrbVFBpnyX3F217vlGHKj8vDhB3KZM3NkVQNDbapi%2BBacXcAs1skJ1Tq3XJxjiXlHqAAxfSEDwqcV%2Bgo&X-Amz-Signature=8211e0288e0895691c62d6ffae6922f9c754c2ec3171cd040ce70378d944e2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCN3JJCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDckBN%2FAMoRO1AhwNjEVImCrDo2cMcTUF%2FJi1YT%2F5idXAIgXMoevZDQ8xukMWdOpo6OFRC49JDvh4P7kvWaxKizfWAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAbKfpOuvit%2B9cHaSircA0BRxtsO96nYqjl41vBaar6oKwT8%2BYeZ2kf4J5nmd49wpjh9%2BK%2FG7dtDTdpJ8xvG5DteenAFm9fOWeXFAcExt4SHuRac0Vrp%2BYNkLIIcT3Pd781JDd%2Fg9e5bpu0awd60dgZZFgo%2BHYFmVKCcbOUaVHwLvopB521JnKF%2FCf%2BP1PEN%2FYCB3Aq8K9UKnnQlcO5wS9RWP5UUfx%2F%2FKuTd1N4soUg0Sec1pFRvo3VwE9sZnXtnYIOTwZL5sSJybwk%2FUkzMoCYTPbYZ4y9yMpCCtiCI7hO9XlIhGUxUd4zcP4eb8mqTFsGeRD3El0a22YNFRzDtjSXUFzWLZt%2B2jSkZ6XR7lTdiCnrAX%2BNrxoy4vPxUawFJcWQ2foZzADTGBZYEQwMRcZXr1yNOK5wdql0tRi%2B%2FaY1Z4vbUVBqf3RgiUxnkYqEjMkjN7K39CKSwbeEPGalijjIA%2FEk%2BeIy6P5TXSq4qmzxFJrEN0ikGsKTzflpR3OaIbTfAgSelv6InRo%2FtRk7hh3oIzUwfyaKEqzY7wO5cJEYY%2BY0wu9xJqdADVTetFrp%2BxMwebp%2FELQi4ZNmI%2FIY1wmb6aY08UdYvR3%2Btf5XzyIC15mWrGyi6hOtW9wtHM%2BsziJveYSDsi%2FOMB2T%2BMNjei70GOqUBzteuf6cYJ9d%2BdcYTzPnbpqK289cVbqslXRcsGG%2B2p%2FguG%2BJCbG52wzHa2ajX5kSjwyoqvoXxMtx%2BnBJDM8KjhE9Cr0%2BIkoAyBBNlTLp715fvgzmHb8WvN44gbubQMZJ1R5WShn3HTndJCrbVFBpnyX3F217vlGHKj8vDhB3KZM3NkVQNDbapi%2BBacXcAs1skJ1Tq3XJxjiXlHqAAxfSEDwqcV%2Bgo&X-Amz-Signature=bd7ab3f1abaf3be8b86f984b8f5f32a8f88b970915a1b491fb81c89a0c98026e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCN3JJCN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDckBN%2FAMoRO1AhwNjEVImCrDo2cMcTUF%2FJi1YT%2F5idXAIgXMoevZDQ8xukMWdOpo6OFRC49JDvh4P7kvWaxKizfWAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAbKfpOuvit%2B9cHaSircA0BRxtsO96nYqjl41vBaar6oKwT8%2BYeZ2kf4J5nmd49wpjh9%2BK%2FG7dtDTdpJ8xvG5DteenAFm9fOWeXFAcExt4SHuRac0Vrp%2BYNkLIIcT3Pd781JDd%2Fg9e5bpu0awd60dgZZFgo%2BHYFmVKCcbOUaVHwLvopB521JnKF%2FCf%2BP1PEN%2FYCB3Aq8K9UKnnQlcO5wS9RWP5UUfx%2F%2FKuTd1N4soUg0Sec1pFRvo3VwE9sZnXtnYIOTwZL5sSJybwk%2FUkzMoCYTPbYZ4y9yMpCCtiCI7hO9XlIhGUxUd4zcP4eb8mqTFsGeRD3El0a22YNFRzDtjSXUFzWLZt%2B2jSkZ6XR7lTdiCnrAX%2BNrxoy4vPxUawFJcWQ2foZzADTGBZYEQwMRcZXr1yNOK5wdql0tRi%2B%2FaY1Z4vbUVBqf3RgiUxnkYqEjMkjN7K39CKSwbeEPGalijjIA%2FEk%2BeIy6P5TXSq4qmzxFJrEN0ikGsKTzflpR3OaIbTfAgSelv6InRo%2FtRk7hh3oIzUwfyaKEqzY7wO5cJEYY%2BY0wu9xJqdADVTetFrp%2BxMwebp%2FELQi4ZNmI%2FIY1wmb6aY08UdYvR3%2Btf5XzyIC15mWrGyi6hOtW9wtHM%2BsziJveYSDsi%2FOMB2T%2BMNjei70GOqUBzteuf6cYJ9d%2BdcYTzPnbpqK289cVbqslXRcsGG%2B2p%2FguG%2BJCbG52wzHa2ajX5kSjwyoqvoXxMtx%2BnBJDM8KjhE9Cr0%2BIkoAyBBNlTLp715fvgzmHb8WvN44gbubQMZJ1R5WShn3HTndJCrbVFBpnyX3F217vlGHKj8vDhB3KZM3NkVQNDbapi%2BBacXcAs1skJ1Tq3XJxjiXlHqAAxfSEDwqcV%2Bgo&X-Amz-Signature=4d5a4be432b69f200af50774657b307174242bcec81af85ecf74985ee13f5453&X-Amz-SignedHeaders=host&x-id=GetObject)
