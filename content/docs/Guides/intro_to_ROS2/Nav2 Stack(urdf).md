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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMYZBLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtaari0yebcJfFPvIJuebkv%2F%2BwdcFbt%2Fv2EET6ebUEAiEAx%2FVGZCGlHbFabvcNv1vo6oQn91KMKiRi7yfwfJRZ9aEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK%2Fg%2FC1A01bTQmeh%2ByrcAz24ifd5re10TDNJ%2BJ2EQbTLxnWz6nVv4Q%2FhFuEz6bWlZMOecZw9uivlyrb%2Fr8PcRdgpKBQT5P6zmgzNtQv8qKIuwLTkWfgn4o3rv789crC1g%2FhvQnWDtVuwdQYUNHnz63JiX%2FAVIizWiRWqkInJQmjZVp5NMQwbKfyYrX9o%2FQaZcPTPEV%2FA5VQwwstAto8xcK0piCybikD8Cbp%2Fo7kSeqwIOKqmENtmp%2F6VkPlCqD4a6PLoqOpg389cTyEznPHt2mu2DCi4rXZ7HIfMH8xZjhtBAIYCvfJBPYjJQ7Cc95pS5giuP9WAfSwPE8v4OzXcms1cbDy26Sw6rdLrZhwrAYpyqYT%2BLvKiEIoB8249VrE3HHCWpXJeik4f3TryaNHydhFwHKrKDPuD%2B3x3y9P3C%2FWKOvcmONSZyGf6oGsFyUcnr4a%2BB330lT2wLSWjJk43tQOEbdJauDpRwh5%2BuNCf1xuH6goAGUmxyFq2Js%2B6O7iTFoRm%2B0ZqImV4Z%2FQXmbE1Vfmr09OJbFNnFQzJIdeD482FI9ssGg2wv6LuK%2ByMHNild3m74jdLvFRjnYRLHApmAwmbisuWrjbhJTnZQeFKb%2BPq6JNDYgPOn7DHp%2F40Fs0yCRw9mvYhWAtEngJQMOzV5sAGOqUB8PikiXs%2FwKdJI9xvKikZCwpxdVYhvUzU2Tf865Y3wsqleqRBHOMjx%2B1p%2Bn%2FvNNOmx%2B0JPVxaywCJ%2B85pkW40JyhOk4o1NAVKtEQ0%2Fb9%2BAlfb7%2BDQ%2BzF25l1cTh1WlJgHbYx3lbyeDcTWFohhM87jRY8F8%2FJKcR4txhHNl6ia%2B7HW%2FQTRX9b9GXCQQAWyV3TQI8VMGfTSJIzwF29HqFa%2FomeTTR%2B5&X-Amz-Signature=e73e39232dc9add1451823fce7a7428652fc88fa493de01e2bcd0d88031ac501&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMYZBLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtaari0yebcJfFPvIJuebkv%2F%2BwdcFbt%2Fv2EET6ebUEAiEAx%2FVGZCGlHbFabvcNv1vo6oQn91KMKiRi7yfwfJRZ9aEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK%2Fg%2FC1A01bTQmeh%2ByrcAz24ifd5re10TDNJ%2BJ2EQbTLxnWz6nVv4Q%2FhFuEz6bWlZMOecZw9uivlyrb%2Fr8PcRdgpKBQT5P6zmgzNtQv8qKIuwLTkWfgn4o3rv789crC1g%2FhvQnWDtVuwdQYUNHnz63JiX%2FAVIizWiRWqkInJQmjZVp5NMQwbKfyYrX9o%2FQaZcPTPEV%2FA5VQwwstAto8xcK0piCybikD8Cbp%2Fo7kSeqwIOKqmENtmp%2F6VkPlCqD4a6PLoqOpg389cTyEznPHt2mu2DCi4rXZ7HIfMH8xZjhtBAIYCvfJBPYjJQ7Cc95pS5giuP9WAfSwPE8v4OzXcms1cbDy26Sw6rdLrZhwrAYpyqYT%2BLvKiEIoB8249VrE3HHCWpXJeik4f3TryaNHydhFwHKrKDPuD%2B3x3y9P3C%2FWKOvcmONSZyGf6oGsFyUcnr4a%2BB330lT2wLSWjJk43tQOEbdJauDpRwh5%2BuNCf1xuH6goAGUmxyFq2Js%2B6O7iTFoRm%2B0ZqImV4Z%2FQXmbE1Vfmr09OJbFNnFQzJIdeD482FI9ssGg2wv6LuK%2ByMHNild3m74jdLvFRjnYRLHApmAwmbisuWrjbhJTnZQeFKb%2BPq6JNDYgPOn7DHp%2F40Fs0yCRw9mvYhWAtEngJQMOzV5sAGOqUB8PikiXs%2FwKdJI9xvKikZCwpxdVYhvUzU2Tf865Y3wsqleqRBHOMjx%2B1p%2Bn%2FvNNOmx%2B0JPVxaywCJ%2B85pkW40JyhOk4o1NAVKtEQ0%2Fb9%2BAlfb7%2BDQ%2BzF25l1cTh1WlJgHbYx3lbyeDcTWFohhM87jRY8F8%2FJKcR4txhHNl6ia%2B7HW%2FQTRX9b9GXCQQAWyV3TQI8VMGfTSJIzwF29HqFa%2FomeTTR%2B5&X-Amz-Signature=edc508bf5f24142246e7ebd51570fc3933d8c4aee758add3d1d447fff6c241c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMYZBLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtaari0yebcJfFPvIJuebkv%2F%2BwdcFbt%2Fv2EET6ebUEAiEAx%2FVGZCGlHbFabvcNv1vo6oQn91KMKiRi7yfwfJRZ9aEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK%2Fg%2FC1A01bTQmeh%2ByrcAz24ifd5re10TDNJ%2BJ2EQbTLxnWz6nVv4Q%2FhFuEz6bWlZMOecZw9uivlyrb%2Fr8PcRdgpKBQT5P6zmgzNtQv8qKIuwLTkWfgn4o3rv789crC1g%2FhvQnWDtVuwdQYUNHnz63JiX%2FAVIizWiRWqkInJQmjZVp5NMQwbKfyYrX9o%2FQaZcPTPEV%2FA5VQwwstAto8xcK0piCybikD8Cbp%2Fo7kSeqwIOKqmENtmp%2F6VkPlCqD4a6PLoqOpg389cTyEznPHt2mu2DCi4rXZ7HIfMH8xZjhtBAIYCvfJBPYjJQ7Cc95pS5giuP9WAfSwPE8v4OzXcms1cbDy26Sw6rdLrZhwrAYpyqYT%2BLvKiEIoB8249VrE3HHCWpXJeik4f3TryaNHydhFwHKrKDPuD%2B3x3y9P3C%2FWKOvcmONSZyGf6oGsFyUcnr4a%2BB330lT2wLSWjJk43tQOEbdJauDpRwh5%2BuNCf1xuH6goAGUmxyFq2Js%2B6O7iTFoRm%2B0ZqImV4Z%2FQXmbE1Vfmr09OJbFNnFQzJIdeD482FI9ssGg2wv6LuK%2ByMHNild3m74jdLvFRjnYRLHApmAwmbisuWrjbhJTnZQeFKb%2BPq6JNDYgPOn7DHp%2F40Fs0yCRw9mvYhWAtEngJQMOzV5sAGOqUB8PikiXs%2FwKdJI9xvKikZCwpxdVYhvUzU2Tf865Y3wsqleqRBHOMjx%2B1p%2Bn%2FvNNOmx%2B0JPVxaywCJ%2B85pkW40JyhOk4o1NAVKtEQ0%2Fb9%2BAlfb7%2BDQ%2BzF25l1cTh1WlJgHbYx3lbyeDcTWFohhM87jRY8F8%2FJKcR4txhHNl6ia%2B7HW%2FQTRX9b9GXCQQAWyV3TQI8VMGfTSJIzwF29HqFa%2FomeTTR%2B5&X-Amz-Signature=030a0312229ff5c2fc75f0707df17e5129d2429c42235abdd164fab3ea7be473&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMYZBLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtaari0yebcJfFPvIJuebkv%2F%2BwdcFbt%2Fv2EET6ebUEAiEAx%2FVGZCGlHbFabvcNv1vo6oQn91KMKiRi7yfwfJRZ9aEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK%2Fg%2FC1A01bTQmeh%2ByrcAz24ifd5re10TDNJ%2BJ2EQbTLxnWz6nVv4Q%2FhFuEz6bWlZMOecZw9uivlyrb%2Fr8PcRdgpKBQT5P6zmgzNtQv8qKIuwLTkWfgn4o3rv789crC1g%2FhvQnWDtVuwdQYUNHnz63JiX%2FAVIizWiRWqkInJQmjZVp5NMQwbKfyYrX9o%2FQaZcPTPEV%2FA5VQwwstAto8xcK0piCybikD8Cbp%2Fo7kSeqwIOKqmENtmp%2F6VkPlCqD4a6PLoqOpg389cTyEznPHt2mu2DCi4rXZ7HIfMH8xZjhtBAIYCvfJBPYjJQ7Cc95pS5giuP9WAfSwPE8v4OzXcms1cbDy26Sw6rdLrZhwrAYpyqYT%2BLvKiEIoB8249VrE3HHCWpXJeik4f3TryaNHydhFwHKrKDPuD%2B3x3y9P3C%2FWKOvcmONSZyGf6oGsFyUcnr4a%2BB330lT2wLSWjJk43tQOEbdJauDpRwh5%2BuNCf1xuH6goAGUmxyFq2Js%2B6O7iTFoRm%2B0ZqImV4Z%2FQXmbE1Vfmr09OJbFNnFQzJIdeD482FI9ssGg2wv6LuK%2ByMHNild3m74jdLvFRjnYRLHApmAwmbisuWrjbhJTnZQeFKb%2BPq6JNDYgPOn7DHp%2F40Fs0yCRw9mvYhWAtEngJQMOzV5sAGOqUB8PikiXs%2FwKdJI9xvKikZCwpxdVYhvUzU2Tf865Y3wsqleqRBHOMjx%2B1p%2Bn%2FvNNOmx%2B0JPVxaywCJ%2B85pkW40JyhOk4o1NAVKtEQ0%2Fb9%2BAlfb7%2BDQ%2BzF25l1cTh1WlJgHbYx3lbyeDcTWFohhM87jRY8F8%2FJKcR4txhHNl6ia%2B7HW%2FQTRX9b9GXCQQAWyV3TQI8VMGfTSJIzwF29HqFa%2FomeTTR%2B5&X-Amz-Signature=9ac0fcd499a9e8d07eb1920729aa0194cac80fc832dc33fb5501362f2725b933&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMYZBLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtaari0yebcJfFPvIJuebkv%2F%2BwdcFbt%2Fv2EET6ebUEAiEAx%2FVGZCGlHbFabvcNv1vo6oQn91KMKiRi7yfwfJRZ9aEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK%2Fg%2FC1A01bTQmeh%2ByrcAz24ifd5re10TDNJ%2BJ2EQbTLxnWz6nVv4Q%2FhFuEz6bWlZMOecZw9uivlyrb%2Fr8PcRdgpKBQT5P6zmgzNtQv8qKIuwLTkWfgn4o3rv789crC1g%2FhvQnWDtVuwdQYUNHnz63JiX%2FAVIizWiRWqkInJQmjZVp5NMQwbKfyYrX9o%2FQaZcPTPEV%2FA5VQwwstAto8xcK0piCybikD8Cbp%2Fo7kSeqwIOKqmENtmp%2F6VkPlCqD4a6PLoqOpg389cTyEznPHt2mu2DCi4rXZ7HIfMH8xZjhtBAIYCvfJBPYjJQ7Cc95pS5giuP9WAfSwPE8v4OzXcms1cbDy26Sw6rdLrZhwrAYpyqYT%2BLvKiEIoB8249VrE3HHCWpXJeik4f3TryaNHydhFwHKrKDPuD%2B3x3y9P3C%2FWKOvcmONSZyGf6oGsFyUcnr4a%2BB330lT2wLSWjJk43tQOEbdJauDpRwh5%2BuNCf1xuH6goAGUmxyFq2Js%2B6O7iTFoRm%2B0ZqImV4Z%2FQXmbE1Vfmr09OJbFNnFQzJIdeD482FI9ssGg2wv6LuK%2ByMHNild3m74jdLvFRjnYRLHApmAwmbisuWrjbhJTnZQeFKb%2BPq6JNDYgPOn7DHp%2F40Fs0yCRw9mvYhWAtEngJQMOzV5sAGOqUB8PikiXs%2FwKdJI9xvKikZCwpxdVYhvUzU2Tf865Y3wsqleqRBHOMjx%2B1p%2Bn%2FvNNOmx%2B0JPVxaywCJ%2B85pkW40JyhOk4o1NAVKtEQ0%2Fb9%2BAlfb7%2BDQ%2BzF25l1cTh1WlJgHbYx3lbyeDcTWFohhM87jRY8F8%2FJKcR4txhHNl6ia%2B7HW%2FQTRX9b9GXCQQAWyV3TQI8VMGfTSJIzwF29HqFa%2FomeTTR%2B5&X-Amz-Signature=5cece42988bc5bac5c06963765f109d409653e577e091a0af0621ac390013111&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMYZBLP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBtaari0yebcJfFPvIJuebkv%2F%2BwdcFbt%2Fv2EET6ebUEAiEAx%2FVGZCGlHbFabvcNv1vo6oQn91KMKiRi7yfwfJRZ9aEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK%2Fg%2FC1A01bTQmeh%2ByrcAz24ifd5re10TDNJ%2BJ2EQbTLxnWz6nVv4Q%2FhFuEz6bWlZMOecZw9uivlyrb%2Fr8PcRdgpKBQT5P6zmgzNtQv8qKIuwLTkWfgn4o3rv789crC1g%2FhvQnWDtVuwdQYUNHnz63JiX%2FAVIizWiRWqkInJQmjZVp5NMQwbKfyYrX9o%2FQaZcPTPEV%2FA5VQwwstAto8xcK0piCybikD8Cbp%2Fo7kSeqwIOKqmENtmp%2F6VkPlCqD4a6PLoqOpg389cTyEznPHt2mu2DCi4rXZ7HIfMH8xZjhtBAIYCvfJBPYjJQ7Cc95pS5giuP9WAfSwPE8v4OzXcms1cbDy26Sw6rdLrZhwrAYpyqYT%2BLvKiEIoB8249VrE3HHCWpXJeik4f3TryaNHydhFwHKrKDPuD%2B3x3y9P3C%2FWKOvcmONSZyGf6oGsFyUcnr4a%2BB330lT2wLSWjJk43tQOEbdJauDpRwh5%2BuNCf1xuH6goAGUmxyFq2Js%2B6O7iTFoRm%2B0ZqImV4Z%2FQXmbE1Vfmr09OJbFNnFQzJIdeD482FI9ssGg2wv6LuK%2ByMHNild3m74jdLvFRjnYRLHApmAwmbisuWrjbhJTnZQeFKb%2BPq6JNDYgPOn7DHp%2F40Fs0yCRw9mvYhWAtEngJQMOzV5sAGOqUB8PikiXs%2FwKdJI9xvKikZCwpxdVYhvUzU2Tf865Y3wsqleqRBHOMjx%2B1p%2Bn%2FvNNOmx%2B0JPVxaywCJ%2B85pkW40JyhOk4o1NAVKtEQ0%2Fb9%2BAlfb7%2BDQ%2BzF25l1cTh1WlJgHbYx3lbyeDcTWFohhM87jRY8F8%2FJKcR4txhHNl6ia%2B7HW%2FQTRX9b9GXCQQAWyV3TQI8VMGfTSJIzwF29HqFa%2FomeTTR%2B5&X-Amz-Signature=41ce57b00fa4e614af327be338edd1d181b3cbb4a6d874f04b68fec9f3a38bd6&X-Amz-SignedHeaders=host&x-id=GetObject)
