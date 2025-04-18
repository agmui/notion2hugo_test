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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XPSQJD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6x3rnWZTOdgAmdR%2Bp8xdbXA1GXz9q%2F8CbnowUt846xAiEA3mke2Csn26HPix0r58S5PxRWECaNz%2Ff6iVCdJ3d%2F6o0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGwdQ6JNe1hBmDF0HSrcAw7tHmFTGwQZsm3Nlj6kb6lbS%2Fu%2BuisAsJpPNmeEwFfN%2BCwMiDBJPsl13Ae245p9%2FVj2bMKiHYM4RSDXjRox5YIMpH8Vi7jRHd8avRYQCQpzBjwE3C%2Fff4dDeknqShAxBdTIpxSNNGXr0dx%2Fa1waQsXrGAdMNh4EwwXeZDWeq%2BAEPFm6p2dIGi9mWqZ8pOQNoQ1eXgD2HMcoqsyNMCgCSpyNWeTppWec6nVFJBMROY7feSNSbKCmqQsA3Dmk%2FTH04ZjR4puG9RCYiWUddODQpYl7oNeVU0EGjvwcTSwhYf8vSy0GaoNGlmbzGYMhZ5wKKAaAncm4OwGMMXIMAfc1XKLK%2Bilhw2rBk2z3JuE35ncW0gTOwyvAak6wfDzPasV6I9LR%2B6eAtYvYC1FmOCQqjr6A2vRhN38WBTc3ttYE6QnzU6GaGwQn8PAk02NiIhC6M8ef8MFdmOXvaBnKrR2jB2QmU5sbMoHBU4FM3k9bRSnycvIXFUT5QrIk1LyWjbHC5G0mY8EdIKhpH%2FBj6MG339I1klz6akJwWJecm3TBJjcZ2xGcXMmfFdl5Y90lYYVNChoM1wCPjX0gHmAMkjZ7UHdX1J8GNNBKU5Ci8hhNBBjIUoYL%2F037U0g%2BUbcdMI30hsAGOqUBa%2FDkSlOxtzKPaAC7KW3DnWzA%2BpLmF251kJQvIfuBdZ0zOdbkHtqC%2FV7V7Ys94sRwrddZ1rg%2FufiQ4ish2TganlP8bPsSTlYmw74iWqyA%2FCeBpXJ5FrmJetzkS7cIsmovt0cfSbqYboxCO1zF4kEvuxVnrqBUwIxradxlqo6e1Ccj2%2BYLpoPzKI%2BFZq6hMO%2BkTLCmhYWthCk0nP3pUYQ%2FNkFCaZQi&X-Amz-Signature=9925f2525aa1584fd851f9a3772707a3c0be5e4411829167bf81bf1430400cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XPSQJD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6x3rnWZTOdgAmdR%2Bp8xdbXA1GXz9q%2F8CbnowUt846xAiEA3mke2Csn26HPix0r58S5PxRWECaNz%2Ff6iVCdJ3d%2F6o0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGwdQ6JNe1hBmDF0HSrcAw7tHmFTGwQZsm3Nlj6kb6lbS%2Fu%2BuisAsJpPNmeEwFfN%2BCwMiDBJPsl13Ae245p9%2FVj2bMKiHYM4RSDXjRox5YIMpH8Vi7jRHd8avRYQCQpzBjwE3C%2Fff4dDeknqShAxBdTIpxSNNGXr0dx%2Fa1waQsXrGAdMNh4EwwXeZDWeq%2BAEPFm6p2dIGi9mWqZ8pOQNoQ1eXgD2HMcoqsyNMCgCSpyNWeTppWec6nVFJBMROY7feSNSbKCmqQsA3Dmk%2FTH04ZjR4puG9RCYiWUddODQpYl7oNeVU0EGjvwcTSwhYf8vSy0GaoNGlmbzGYMhZ5wKKAaAncm4OwGMMXIMAfc1XKLK%2Bilhw2rBk2z3JuE35ncW0gTOwyvAak6wfDzPasV6I9LR%2B6eAtYvYC1FmOCQqjr6A2vRhN38WBTc3ttYE6QnzU6GaGwQn8PAk02NiIhC6M8ef8MFdmOXvaBnKrR2jB2QmU5sbMoHBU4FM3k9bRSnycvIXFUT5QrIk1LyWjbHC5G0mY8EdIKhpH%2FBj6MG339I1klz6akJwWJecm3TBJjcZ2xGcXMmfFdl5Y90lYYVNChoM1wCPjX0gHmAMkjZ7UHdX1J8GNNBKU5Ci8hhNBBjIUoYL%2F037U0g%2BUbcdMI30hsAGOqUBa%2FDkSlOxtzKPaAC7KW3DnWzA%2BpLmF251kJQvIfuBdZ0zOdbkHtqC%2FV7V7Ys94sRwrddZ1rg%2FufiQ4ish2TganlP8bPsSTlYmw74iWqyA%2FCeBpXJ5FrmJetzkS7cIsmovt0cfSbqYboxCO1zF4kEvuxVnrqBUwIxradxlqo6e1Ccj2%2BYLpoPzKI%2BFZq6hMO%2BkTLCmhYWthCk0nP3pUYQ%2FNkFCaZQi&X-Amz-Signature=abefbde5c2322c3e33e309c0c81be72037e86e9d3f0e79c45f455f63e5f6ffc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XPSQJD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6x3rnWZTOdgAmdR%2Bp8xdbXA1GXz9q%2F8CbnowUt846xAiEA3mke2Csn26HPix0r58S5PxRWECaNz%2Ff6iVCdJ3d%2F6o0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGwdQ6JNe1hBmDF0HSrcAw7tHmFTGwQZsm3Nlj6kb6lbS%2Fu%2BuisAsJpPNmeEwFfN%2BCwMiDBJPsl13Ae245p9%2FVj2bMKiHYM4RSDXjRox5YIMpH8Vi7jRHd8avRYQCQpzBjwE3C%2Fff4dDeknqShAxBdTIpxSNNGXr0dx%2Fa1waQsXrGAdMNh4EwwXeZDWeq%2BAEPFm6p2dIGi9mWqZ8pOQNoQ1eXgD2HMcoqsyNMCgCSpyNWeTppWec6nVFJBMROY7feSNSbKCmqQsA3Dmk%2FTH04ZjR4puG9RCYiWUddODQpYl7oNeVU0EGjvwcTSwhYf8vSy0GaoNGlmbzGYMhZ5wKKAaAncm4OwGMMXIMAfc1XKLK%2Bilhw2rBk2z3JuE35ncW0gTOwyvAak6wfDzPasV6I9LR%2B6eAtYvYC1FmOCQqjr6A2vRhN38WBTc3ttYE6QnzU6GaGwQn8PAk02NiIhC6M8ef8MFdmOXvaBnKrR2jB2QmU5sbMoHBU4FM3k9bRSnycvIXFUT5QrIk1LyWjbHC5G0mY8EdIKhpH%2FBj6MG339I1klz6akJwWJecm3TBJjcZ2xGcXMmfFdl5Y90lYYVNChoM1wCPjX0gHmAMkjZ7UHdX1J8GNNBKU5Ci8hhNBBjIUoYL%2F037U0g%2BUbcdMI30hsAGOqUBa%2FDkSlOxtzKPaAC7KW3DnWzA%2BpLmF251kJQvIfuBdZ0zOdbkHtqC%2FV7V7Ys94sRwrddZ1rg%2FufiQ4ish2TganlP8bPsSTlYmw74iWqyA%2FCeBpXJ5FrmJetzkS7cIsmovt0cfSbqYboxCO1zF4kEvuxVnrqBUwIxradxlqo6e1Ccj2%2BYLpoPzKI%2BFZq6hMO%2BkTLCmhYWthCk0nP3pUYQ%2FNkFCaZQi&X-Amz-Signature=788d4187ed25c4d3656ae565a711c0845b640427485e11439435105aedc64d63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XPSQJD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6x3rnWZTOdgAmdR%2Bp8xdbXA1GXz9q%2F8CbnowUt846xAiEA3mke2Csn26HPix0r58S5PxRWECaNz%2Ff6iVCdJ3d%2F6o0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGwdQ6JNe1hBmDF0HSrcAw7tHmFTGwQZsm3Nlj6kb6lbS%2Fu%2BuisAsJpPNmeEwFfN%2BCwMiDBJPsl13Ae245p9%2FVj2bMKiHYM4RSDXjRox5YIMpH8Vi7jRHd8avRYQCQpzBjwE3C%2Fff4dDeknqShAxBdTIpxSNNGXr0dx%2Fa1waQsXrGAdMNh4EwwXeZDWeq%2BAEPFm6p2dIGi9mWqZ8pOQNoQ1eXgD2HMcoqsyNMCgCSpyNWeTppWec6nVFJBMROY7feSNSbKCmqQsA3Dmk%2FTH04ZjR4puG9RCYiWUddODQpYl7oNeVU0EGjvwcTSwhYf8vSy0GaoNGlmbzGYMhZ5wKKAaAncm4OwGMMXIMAfc1XKLK%2Bilhw2rBk2z3JuE35ncW0gTOwyvAak6wfDzPasV6I9LR%2B6eAtYvYC1FmOCQqjr6A2vRhN38WBTc3ttYE6QnzU6GaGwQn8PAk02NiIhC6M8ef8MFdmOXvaBnKrR2jB2QmU5sbMoHBU4FM3k9bRSnycvIXFUT5QrIk1LyWjbHC5G0mY8EdIKhpH%2FBj6MG339I1klz6akJwWJecm3TBJjcZ2xGcXMmfFdl5Y90lYYVNChoM1wCPjX0gHmAMkjZ7UHdX1J8GNNBKU5Ci8hhNBBjIUoYL%2F037U0g%2BUbcdMI30hsAGOqUBa%2FDkSlOxtzKPaAC7KW3DnWzA%2BpLmF251kJQvIfuBdZ0zOdbkHtqC%2FV7V7Ys94sRwrddZ1rg%2FufiQ4ish2TganlP8bPsSTlYmw74iWqyA%2FCeBpXJ5FrmJetzkS7cIsmovt0cfSbqYboxCO1zF4kEvuxVnrqBUwIxradxlqo6e1Ccj2%2BYLpoPzKI%2BFZq6hMO%2BkTLCmhYWthCk0nP3pUYQ%2FNkFCaZQi&X-Amz-Signature=7634d8d3edae8908de9e8a2e02f31ea1477653a7a3658a9d48305dbef9620f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XPSQJD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6x3rnWZTOdgAmdR%2Bp8xdbXA1GXz9q%2F8CbnowUt846xAiEA3mke2Csn26HPix0r58S5PxRWECaNz%2Ff6iVCdJ3d%2F6o0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGwdQ6JNe1hBmDF0HSrcAw7tHmFTGwQZsm3Nlj6kb6lbS%2Fu%2BuisAsJpPNmeEwFfN%2BCwMiDBJPsl13Ae245p9%2FVj2bMKiHYM4RSDXjRox5YIMpH8Vi7jRHd8avRYQCQpzBjwE3C%2Fff4dDeknqShAxBdTIpxSNNGXr0dx%2Fa1waQsXrGAdMNh4EwwXeZDWeq%2BAEPFm6p2dIGi9mWqZ8pOQNoQ1eXgD2HMcoqsyNMCgCSpyNWeTppWec6nVFJBMROY7feSNSbKCmqQsA3Dmk%2FTH04ZjR4puG9RCYiWUddODQpYl7oNeVU0EGjvwcTSwhYf8vSy0GaoNGlmbzGYMhZ5wKKAaAncm4OwGMMXIMAfc1XKLK%2Bilhw2rBk2z3JuE35ncW0gTOwyvAak6wfDzPasV6I9LR%2B6eAtYvYC1FmOCQqjr6A2vRhN38WBTc3ttYE6QnzU6GaGwQn8PAk02NiIhC6M8ef8MFdmOXvaBnKrR2jB2QmU5sbMoHBU4FM3k9bRSnycvIXFUT5QrIk1LyWjbHC5G0mY8EdIKhpH%2FBj6MG339I1klz6akJwWJecm3TBJjcZ2xGcXMmfFdl5Y90lYYVNChoM1wCPjX0gHmAMkjZ7UHdX1J8GNNBKU5Ci8hhNBBjIUoYL%2F037U0g%2BUbcdMI30hsAGOqUBa%2FDkSlOxtzKPaAC7KW3DnWzA%2BpLmF251kJQvIfuBdZ0zOdbkHtqC%2FV7V7Ys94sRwrddZ1rg%2FufiQ4ish2TganlP8bPsSTlYmw74iWqyA%2FCeBpXJ5FrmJetzkS7cIsmovt0cfSbqYboxCO1zF4kEvuxVnrqBUwIxradxlqo6e1Ccj2%2BYLpoPzKI%2BFZq6hMO%2BkTLCmhYWthCk0nP3pUYQ%2FNkFCaZQi&X-Amz-Signature=575bd5d2b6f77ae11407b4a8f634a9dae4d65e57cb6c597425ebcab56ff50773&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663XPSQJD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6x3rnWZTOdgAmdR%2Bp8xdbXA1GXz9q%2F8CbnowUt846xAiEA3mke2Csn26HPix0r58S5PxRWECaNz%2Ff6iVCdJ3d%2F6o0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGwdQ6JNe1hBmDF0HSrcAw7tHmFTGwQZsm3Nlj6kb6lbS%2Fu%2BuisAsJpPNmeEwFfN%2BCwMiDBJPsl13Ae245p9%2FVj2bMKiHYM4RSDXjRox5YIMpH8Vi7jRHd8avRYQCQpzBjwE3C%2Fff4dDeknqShAxBdTIpxSNNGXr0dx%2Fa1waQsXrGAdMNh4EwwXeZDWeq%2BAEPFm6p2dIGi9mWqZ8pOQNoQ1eXgD2HMcoqsyNMCgCSpyNWeTppWec6nVFJBMROY7feSNSbKCmqQsA3Dmk%2FTH04ZjR4puG9RCYiWUddODQpYl7oNeVU0EGjvwcTSwhYf8vSy0GaoNGlmbzGYMhZ5wKKAaAncm4OwGMMXIMAfc1XKLK%2Bilhw2rBk2z3JuE35ncW0gTOwyvAak6wfDzPasV6I9LR%2B6eAtYvYC1FmOCQqjr6A2vRhN38WBTc3ttYE6QnzU6GaGwQn8PAk02NiIhC6M8ef8MFdmOXvaBnKrR2jB2QmU5sbMoHBU4FM3k9bRSnycvIXFUT5QrIk1LyWjbHC5G0mY8EdIKhpH%2FBj6MG339I1klz6akJwWJecm3TBJjcZ2xGcXMmfFdl5Y90lYYVNChoM1wCPjX0gHmAMkjZ7UHdX1J8GNNBKU5Ci8hhNBBjIUoYL%2F037U0g%2BUbcdMI30hsAGOqUBa%2FDkSlOxtzKPaAC7KW3DnWzA%2BpLmF251kJQvIfuBdZ0zOdbkHtqC%2FV7V7Ys94sRwrddZ1rg%2FufiQ4ish2TganlP8bPsSTlYmw74iWqyA%2FCeBpXJ5FrmJetzkS7cIsmovt0cfSbqYboxCO1zF4kEvuxVnrqBUwIxradxlqo6e1Ccj2%2BYLpoPzKI%2BFZq6hMO%2BkTLCmhYWthCk0nP3pUYQ%2FNkFCaZQi&X-Amz-Signature=afc00d3ebb6064c15614e5060e13b81b94c677f819efe5fd6642664f0c5d81f5&X-Amz-SignedHeaders=host&x-id=GetObject)
