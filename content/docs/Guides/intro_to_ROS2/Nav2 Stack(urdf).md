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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOE77L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzTfod26GMQbkuYgcYgXRgiFqlARF1Ex7s%2FmwmfVhrQAiBUFBUxEonZKoscd7K9kDlNZLObDDlUG8cifkyZ0S5HryqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS%2Fs6im3ZW3UEu%2FqKtwD3HazA6mwpMvyYE2sv4gKSYP1SPdAprxDYiNnFj6O9EVYDGdc4ygUOOPbBsj5twgrSMN5rUjFjeEMc%2Bh6abPfq%2FuizjGvdYk14Pt13iJkDxQGkDmbXxSEbcbWqUunibc66HQlxCfwDCOgpNHC%2FHm7YMsPKHhVMvVHZU3j6fbXk54pMeHw22B8%2B%2BLpv9KvCGHvj8uaKWvGTH5SY5cjT%2FkUgKDB0JVVwAc8OiVn9HdJ4Xy5QoD7gjdAUYR7aqiWMY8oUpi2brRQfoemup1FLC1R7oopDFP8GrrM3qkUz%2BalqnBuGUnBgmHzw16EcubHAhwGVhcmJ%2FA2bUGzo3rTaqPPekgdhjDwanVtI7pQeqJAAntCdOmhPKLsCHD0%2BXcGLUkAezm%2B9EZm9EU50GYge3ggM%2BRhVNgcihmAAJ0EHobWxKSCkHcoGEigpoyQN0GpjaJgDFQbSaR237Bw63eTuCFTnJNcZ9x1V6Ac%2BucEaaL32YFcMc9za8SVPAZkMFZXGfj9wlK9wiPrvOtcGQ6T9rMyPGa1gbLhETXso5pYsYuAmZhtw1qlQ6GySNK5YyFlK%2B74fmZrYjSi25u5qCu1z051AOBEcGmH2L3gtf3TFZOIkxM2MakIIrHB%2FRV6q%2Bsw66ONwwY6pgGv85KLHHL2SExxZv5G4f0XuDG1MWA0zVfztH9QPWjIyUU06szqojYwOR5F6R17zNLK%2FccJsS2nXQ7DUzXCVY26nNXkHBXb9ERlBupj9%2FZ5HudUZO7RzNth442WzEeqYqKgN0ABkpDDt%2Br2Bj0%2F%2Fz%2Fl1U5%2FilNvxtFPQkbCwJwQg2z6bJmBtB7aEtqWdd3MG%2BjFjBH%2FSpxcHybPtLZxxw2i3Ay0Im5z&X-Amz-Signature=7ac15b5913d50207f9abf4dad74e0e54c05ad5253e030e87d064dda921a26694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOE77L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzTfod26GMQbkuYgcYgXRgiFqlARF1Ex7s%2FmwmfVhrQAiBUFBUxEonZKoscd7K9kDlNZLObDDlUG8cifkyZ0S5HryqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS%2Fs6im3ZW3UEu%2FqKtwD3HazA6mwpMvyYE2sv4gKSYP1SPdAprxDYiNnFj6O9EVYDGdc4ygUOOPbBsj5twgrSMN5rUjFjeEMc%2Bh6abPfq%2FuizjGvdYk14Pt13iJkDxQGkDmbXxSEbcbWqUunibc66HQlxCfwDCOgpNHC%2FHm7YMsPKHhVMvVHZU3j6fbXk54pMeHw22B8%2B%2BLpv9KvCGHvj8uaKWvGTH5SY5cjT%2FkUgKDB0JVVwAc8OiVn9HdJ4Xy5QoD7gjdAUYR7aqiWMY8oUpi2brRQfoemup1FLC1R7oopDFP8GrrM3qkUz%2BalqnBuGUnBgmHzw16EcubHAhwGVhcmJ%2FA2bUGzo3rTaqPPekgdhjDwanVtI7pQeqJAAntCdOmhPKLsCHD0%2BXcGLUkAezm%2B9EZm9EU50GYge3ggM%2BRhVNgcihmAAJ0EHobWxKSCkHcoGEigpoyQN0GpjaJgDFQbSaR237Bw63eTuCFTnJNcZ9x1V6Ac%2BucEaaL32YFcMc9za8SVPAZkMFZXGfj9wlK9wiPrvOtcGQ6T9rMyPGa1gbLhETXso5pYsYuAmZhtw1qlQ6GySNK5YyFlK%2B74fmZrYjSi25u5qCu1z051AOBEcGmH2L3gtf3TFZOIkxM2MakIIrHB%2FRV6q%2Bsw66ONwwY6pgGv85KLHHL2SExxZv5G4f0XuDG1MWA0zVfztH9QPWjIyUU06szqojYwOR5F6R17zNLK%2FccJsS2nXQ7DUzXCVY26nNXkHBXb9ERlBupj9%2FZ5HudUZO7RzNth442WzEeqYqKgN0ABkpDDt%2Br2Bj0%2F%2Fz%2Fl1U5%2FilNvxtFPQkbCwJwQg2z6bJmBtB7aEtqWdd3MG%2BjFjBH%2FSpxcHybPtLZxxw2i3Ay0Im5z&X-Amz-Signature=ad47529cdca70ad144a089bb6f51b8e43a220f53c996a74aebc2055692fb5da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOE77L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzTfod26GMQbkuYgcYgXRgiFqlARF1Ex7s%2FmwmfVhrQAiBUFBUxEonZKoscd7K9kDlNZLObDDlUG8cifkyZ0S5HryqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS%2Fs6im3ZW3UEu%2FqKtwD3HazA6mwpMvyYE2sv4gKSYP1SPdAprxDYiNnFj6O9EVYDGdc4ygUOOPbBsj5twgrSMN5rUjFjeEMc%2Bh6abPfq%2FuizjGvdYk14Pt13iJkDxQGkDmbXxSEbcbWqUunibc66HQlxCfwDCOgpNHC%2FHm7YMsPKHhVMvVHZU3j6fbXk54pMeHw22B8%2B%2BLpv9KvCGHvj8uaKWvGTH5SY5cjT%2FkUgKDB0JVVwAc8OiVn9HdJ4Xy5QoD7gjdAUYR7aqiWMY8oUpi2brRQfoemup1FLC1R7oopDFP8GrrM3qkUz%2BalqnBuGUnBgmHzw16EcubHAhwGVhcmJ%2FA2bUGzo3rTaqPPekgdhjDwanVtI7pQeqJAAntCdOmhPKLsCHD0%2BXcGLUkAezm%2B9EZm9EU50GYge3ggM%2BRhVNgcihmAAJ0EHobWxKSCkHcoGEigpoyQN0GpjaJgDFQbSaR237Bw63eTuCFTnJNcZ9x1V6Ac%2BucEaaL32YFcMc9za8SVPAZkMFZXGfj9wlK9wiPrvOtcGQ6T9rMyPGa1gbLhETXso5pYsYuAmZhtw1qlQ6GySNK5YyFlK%2B74fmZrYjSi25u5qCu1z051AOBEcGmH2L3gtf3TFZOIkxM2MakIIrHB%2FRV6q%2Bsw66ONwwY6pgGv85KLHHL2SExxZv5G4f0XuDG1MWA0zVfztH9QPWjIyUU06szqojYwOR5F6R17zNLK%2FccJsS2nXQ7DUzXCVY26nNXkHBXb9ERlBupj9%2FZ5HudUZO7RzNth442WzEeqYqKgN0ABkpDDt%2Br2Bj0%2F%2Fz%2Fl1U5%2FilNvxtFPQkbCwJwQg2z6bJmBtB7aEtqWdd3MG%2BjFjBH%2FSpxcHybPtLZxxw2i3Ay0Im5z&X-Amz-Signature=ecd62ab1cb988aa2376ef013e785938abbbe2f01feec66a199e7ab3a891cf5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOE77L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzTfod26GMQbkuYgcYgXRgiFqlARF1Ex7s%2FmwmfVhrQAiBUFBUxEonZKoscd7K9kDlNZLObDDlUG8cifkyZ0S5HryqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS%2Fs6im3ZW3UEu%2FqKtwD3HazA6mwpMvyYE2sv4gKSYP1SPdAprxDYiNnFj6O9EVYDGdc4ygUOOPbBsj5twgrSMN5rUjFjeEMc%2Bh6abPfq%2FuizjGvdYk14Pt13iJkDxQGkDmbXxSEbcbWqUunibc66HQlxCfwDCOgpNHC%2FHm7YMsPKHhVMvVHZU3j6fbXk54pMeHw22B8%2B%2BLpv9KvCGHvj8uaKWvGTH5SY5cjT%2FkUgKDB0JVVwAc8OiVn9HdJ4Xy5QoD7gjdAUYR7aqiWMY8oUpi2brRQfoemup1FLC1R7oopDFP8GrrM3qkUz%2BalqnBuGUnBgmHzw16EcubHAhwGVhcmJ%2FA2bUGzo3rTaqPPekgdhjDwanVtI7pQeqJAAntCdOmhPKLsCHD0%2BXcGLUkAezm%2B9EZm9EU50GYge3ggM%2BRhVNgcihmAAJ0EHobWxKSCkHcoGEigpoyQN0GpjaJgDFQbSaR237Bw63eTuCFTnJNcZ9x1V6Ac%2BucEaaL32YFcMc9za8SVPAZkMFZXGfj9wlK9wiPrvOtcGQ6T9rMyPGa1gbLhETXso5pYsYuAmZhtw1qlQ6GySNK5YyFlK%2B74fmZrYjSi25u5qCu1z051AOBEcGmH2L3gtf3TFZOIkxM2MakIIrHB%2FRV6q%2Bsw66ONwwY6pgGv85KLHHL2SExxZv5G4f0XuDG1MWA0zVfztH9QPWjIyUU06szqojYwOR5F6R17zNLK%2FccJsS2nXQ7DUzXCVY26nNXkHBXb9ERlBupj9%2FZ5HudUZO7RzNth442WzEeqYqKgN0ABkpDDt%2Br2Bj0%2F%2Fz%2Fl1U5%2FilNvxtFPQkbCwJwQg2z6bJmBtB7aEtqWdd3MG%2BjFjBH%2FSpxcHybPtLZxxw2i3Ay0Im5z&X-Amz-Signature=4a314816af2417707a35c292f1a3e50a4c13d0473ad6156c785c8d3a5e23b77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOE77L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzTfod26GMQbkuYgcYgXRgiFqlARF1Ex7s%2FmwmfVhrQAiBUFBUxEonZKoscd7K9kDlNZLObDDlUG8cifkyZ0S5HryqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS%2Fs6im3ZW3UEu%2FqKtwD3HazA6mwpMvyYE2sv4gKSYP1SPdAprxDYiNnFj6O9EVYDGdc4ygUOOPbBsj5twgrSMN5rUjFjeEMc%2Bh6abPfq%2FuizjGvdYk14Pt13iJkDxQGkDmbXxSEbcbWqUunibc66HQlxCfwDCOgpNHC%2FHm7YMsPKHhVMvVHZU3j6fbXk54pMeHw22B8%2B%2BLpv9KvCGHvj8uaKWvGTH5SY5cjT%2FkUgKDB0JVVwAc8OiVn9HdJ4Xy5QoD7gjdAUYR7aqiWMY8oUpi2brRQfoemup1FLC1R7oopDFP8GrrM3qkUz%2BalqnBuGUnBgmHzw16EcubHAhwGVhcmJ%2FA2bUGzo3rTaqPPekgdhjDwanVtI7pQeqJAAntCdOmhPKLsCHD0%2BXcGLUkAezm%2B9EZm9EU50GYge3ggM%2BRhVNgcihmAAJ0EHobWxKSCkHcoGEigpoyQN0GpjaJgDFQbSaR237Bw63eTuCFTnJNcZ9x1V6Ac%2BucEaaL32YFcMc9za8SVPAZkMFZXGfj9wlK9wiPrvOtcGQ6T9rMyPGa1gbLhETXso5pYsYuAmZhtw1qlQ6GySNK5YyFlK%2B74fmZrYjSi25u5qCu1z051AOBEcGmH2L3gtf3TFZOIkxM2MakIIrHB%2FRV6q%2Bsw66ONwwY6pgGv85KLHHL2SExxZv5G4f0XuDG1MWA0zVfztH9QPWjIyUU06szqojYwOR5F6R17zNLK%2FccJsS2nXQ7DUzXCVY26nNXkHBXb9ERlBupj9%2FZ5HudUZO7RzNth442WzEeqYqKgN0ABkpDDt%2Br2Bj0%2F%2Fz%2Fl1U5%2FilNvxtFPQkbCwJwQg2z6bJmBtB7aEtqWdd3MG%2BjFjBH%2FSpxcHybPtLZxxw2i3Ay0Im5z&X-Amz-Signature=a273d4b10d2088ac0cef04d445cca2d3234c47ecab00fe535526b8a21b8a86a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOE77L%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzTfod26GMQbkuYgcYgXRgiFqlARF1Ex7s%2FmwmfVhrQAiBUFBUxEonZKoscd7K9kDlNZLObDDlUG8cifkyZ0S5HryqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQS%2Fs6im3ZW3UEu%2FqKtwD3HazA6mwpMvyYE2sv4gKSYP1SPdAprxDYiNnFj6O9EVYDGdc4ygUOOPbBsj5twgrSMN5rUjFjeEMc%2Bh6abPfq%2FuizjGvdYk14Pt13iJkDxQGkDmbXxSEbcbWqUunibc66HQlxCfwDCOgpNHC%2FHm7YMsPKHhVMvVHZU3j6fbXk54pMeHw22B8%2B%2BLpv9KvCGHvj8uaKWvGTH5SY5cjT%2FkUgKDB0JVVwAc8OiVn9HdJ4Xy5QoD7gjdAUYR7aqiWMY8oUpi2brRQfoemup1FLC1R7oopDFP8GrrM3qkUz%2BalqnBuGUnBgmHzw16EcubHAhwGVhcmJ%2FA2bUGzo3rTaqPPekgdhjDwanVtI7pQeqJAAntCdOmhPKLsCHD0%2BXcGLUkAezm%2B9EZm9EU50GYge3ggM%2BRhVNgcihmAAJ0EHobWxKSCkHcoGEigpoyQN0GpjaJgDFQbSaR237Bw63eTuCFTnJNcZ9x1V6Ac%2BucEaaL32YFcMc9za8SVPAZkMFZXGfj9wlK9wiPrvOtcGQ6T9rMyPGa1gbLhETXso5pYsYuAmZhtw1qlQ6GySNK5YyFlK%2B74fmZrYjSi25u5qCu1z051AOBEcGmH2L3gtf3TFZOIkxM2MakIIrHB%2FRV6q%2Bsw66ONwwY6pgGv85KLHHL2SExxZv5G4f0XuDG1MWA0zVfztH9QPWjIyUU06szqojYwOR5F6R17zNLK%2FccJsS2nXQ7DUzXCVY26nNXkHBXb9ERlBupj9%2FZ5HudUZO7RzNth442WzEeqYqKgN0ABkpDDt%2Br2Bj0%2F%2Fz%2Fl1U5%2FilNvxtFPQkbCwJwQg2z6bJmBtB7aEtqWdd3MG%2BjFjBH%2FSpxcHybPtLZxxw2i3Ay0Im5z&X-Amz-Signature=857e91fafdf3aab7ff29d28036af96a774d09c9cbd5885e88ef2d92312081f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
