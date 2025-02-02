---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PKBTSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N7%2Bc2rlsTknahU6IA4GsR6fvRfwEOiInvxPpT%2Blu%2FAIgVCBERLppNgUod5fCm31dqLk9dePv1cXXZrT11OISDIgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFG0QOhDGDdMxKgRyrcA3%2BOTNuBdPZWWVjHZKMMDCnPeg%2BL6hq0dna4L3DGLapRQlx%2BeBF5%2Bzd0ywxSV8V53V3NAHHafsydllsbdxtk4RMcNtdFfYDHXlcHa3KL5qKadcYokfXtYGc21DvhL06AXw9xLVzSJrgPDr6l1ArWkdoCCfyT6zmNUoIZeDWhbqpEbo78pe3MrQqb7oM1o0WkvLNO4FnJ5ii3b5gE9f%2B2pI07hfd7b%2FNjCUpcjoCq3sW%2BykoyHy3YItumuFXgtztrkyu4%2FoVqcnvNtFUSCvT0ETa3V3tA7erkCFd3ozwzJ%2FpwlY7pOaj19LXt0LQMRL9cPKUMiRHVadjY07p0dYGfgjim8977uEspn84cD7roilbIhi%2Bu8AedBNL4myvEsTuDNcELeAPFfyLmK7Auw7ofz9ugGbOteCa7D5Ea7JaCmCtxZq%2B2PWVa80GtvZwehUFqI1gJB%2BiC4vTjtdOYnDBrmhpQBGFag4rRrrxuCcHLWZyL2uwRCa%2BrD0RebVhIJFfmUaK6m34KuSpb5p83HDgGDkBWwOjOOdPAS%2Buuw0%2FnxMOsTBIWGyML2s9h0e8z7q3BBuLWoJKhCGPvYqeanKgtj5j9wRV%2B%2BYmBqLPLBJlPCvquDs08aH0jVZA%2FSL94MK68%2B7wGOqUBg6f7OZOyvcreV5PU4yDiq3%2FlsGX%2FXXXabwMzNYw5VaLppo5rPU8SlZoVlbzYq8AlJ%2BG9ulhvr132b0opHwZQ4s%2Bff1KBFT3dlyEEaPuKeKZkOSa7hqyZiR1OwNJJabNcZQS%2Bc6nZnY5ziPWrlHsZ8vlrXWYH0JKsll2Oi1AMw4TBVpRz7vggZDKtdMu4tO%2FIs0QglAW4k%2FIqmHqfptCmsLNzXCgI&X-Amz-Signature=4e994db6413e71abe3b9b9dea36a0df0a1c790c06f60bdae19b246d25c4eea32&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PKBTSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N7%2Bc2rlsTknahU6IA4GsR6fvRfwEOiInvxPpT%2Blu%2FAIgVCBERLppNgUod5fCm31dqLk9dePv1cXXZrT11OISDIgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFG0QOhDGDdMxKgRyrcA3%2BOTNuBdPZWWVjHZKMMDCnPeg%2BL6hq0dna4L3DGLapRQlx%2BeBF5%2Bzd0ywxSV8V53V3NAHHafsydllsbdxtk4RMcNtdFfYDHXlcHa3KL5qKadcYokfXtYGc21DvhL06AXw9xLVzSJrgPDr6l1ArWkdoCCfyT6zmNUoIZeDWhbqpEbo78pe3MrQqb7oM1o0WkvLNO4FnJ5ii3b5gE9f%2B2pI07hfd7b%2FNjCUpcjoCq3sW%2BykoyHy3YItumuFXgtztrkyu4%2FoVqcnvNtFUSCvT0ETa3V3tA7erkCFd3ozwzJ%2FpwlY7pOaj19LXt0LQMRL9cPKUMiRHVadjY07p0dYGfgjim8977uEspn84cD7roilbIhi%2Bu8AedBNL4myvEsTuDNcELeAPFfyLmK7Auw7ofz9ugGbOteCa7D5Ea7JaCmCtxZq%2B2PWVa80GtvZwehUFqI1gJB%2BiC4vTjtdOYnDBrmhpQBGFag4rRrrxuCcHLWZyL2uwRCa%2BrD0RebVhIJFfmUaK6m34KuSpb5p83HDgGDkBWwOjOOdPAS%2Buuw0%2FnxMOsTBIWGyML2s9h0e8z7q3BBuLWoJKhCGPvYqeanKgtj5j9wRV%2B%2BYmBqLPLBJlPCvquDs08aH0jVZA%2FSL94MK68%2B7wGOqUBg6f7OZOyvcreV5PU4yDiq3%2FlsGX%2FXXXabwMzNYw5VaLppo5rPU8SlZoVlbzYq8AlJ%2BG9ulhvr132b0opHwZQ4s%2Bff1KBFT3dlyEEaPuKeKZkOSa7hqyZiR1OwNJJabNcZQS%2Bc6nZnY5ziPWrlHsZ8vlrXWYH0JKsll2Oi1AMw4TBVpRz7vggZDKtdMu4tO%2FIs0QglAW4k%2FIqmHqfptCmsLNzXCgI&X-Amz-Signature=3d549e8f85d8ba9f4f7ebd35f8e09aa89a78bc5268bf704b2390f3ccb725e644&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PKBTSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N7%2Bc2rlsTknahU6IA4GsR6fvRfwEOiInvxPpT%2Blu%2FAIgVCBERLppNgUod5fCm31dqLk9dePv1cXXZrT11OISDIgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFG0QOhDGDdMxKgRyrcA3%2BOTNuBdPZWWVjHZKMMDCnPeg%2BL6hq0dna4L3DGLapRQlx%2BeBF5%2Bzd0ywxSV8V53V3NAHHafsydllsbdxtk4RMcNtdFfYDHXlcHa3KL5qKadcYokfXtYGc21DvhL06AXw9xLVzSJrgPDr6l1ArWkdoCCfyT6zmNUoIZeDWhbqpEbo78pe3MrQqb7oM1o0WkvLNO4FnJ5ii3b5gE9f%2B2pI07hfd7b%2FNjCUpcjoCq3sW%2BykoyHy3YItumuFXgtztrkyu4%2FoVqcnvNtFUSCvT0ETa3V3tA7erkCFd3ozwzJ%2FpwlY7pOaj19LXt0LQMRL9cPKUMiRHVadjY07p0dYGfgjim8977uEspn84cD7roilbIhi%2Bu8AedBNL4myvEsTuDNcELeAPFfyLmK7Auw7ofz9ugGbOteCa7D5Ea7JaCmCtxZq%2B2PWVa80GtvZwehUFqI1gJB%2BiC4vTjtdOYnDBrmhpQBGFag4rRrrxuCcHLWZyL2uwRCa%2BrD0RebVhIJFfmUaK6m34KuSpb5p83HDgGDkBWwOjOOdPAS%2Buuw0%2FnxMOsTBIWGyML2s9h0e8z7q3BBuLWoJKhCGPvYqeanKgtj5j9wRV%2B%2BYmBqLPLBJlPCvquDs08aH0jVZA%2FSL94MK68%2B7wGOqUBg6f7OZOyvcreV5PU4yDiq3%2FlsGX%2FXXXabwMzNYw5VaLppo5rPU8SlZoVlbzYq8AlJ%2BG9ulhvr132b0opHwZQ4s%2Bff1KBFT3dlyEEaPuKeKZkOSa7hqyZiR1OwNJJabNcZQS%2Bc6nZnY5ziPWrlHsZ8vlrXWYH0JKsll2Oi1AMw4TBVpRz7vggZDKtdMu4tO%2FIs0QglAW4k%2FIqmHqfptCmsLNzXCgI&X-Amz-Signature=b6cad890cc7cf3f2d6a912301d53b80159991575da5c394b36d37e37045621c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PKBTSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N7%2Bc2rlsTknahU6IA4GsR6fvRfwEOiInvxPpT%2Blu%2FAIgVCBERLppNgUod5fCm31dqLk9dePv1cXXZrT11OISDIgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFG0QOhDGDdMxKgRyrcA3%2BOTNuBdPZWWVjHZKMMDCnPeg%2BL6hq0dna4L3DGLapRQlx%2BeBF5%2Bzd0ywxSV8V53V3NAHHafsydllsbdxtk4RMcNtdFfYDHXlcHa3KL5qKadcYokfXtYGc21DvhL06AXw9xLVzSJrgPDr6l1ArWkdoCCfyT6zmNUoIZeDWhbqpEbo78pe3MrQqb7oM1o0WkvLNO4FnJ5ii3b5gE9f%2B2pI07hfd7b%2FNjCUpcjoCq3sW%2BykoyHy3YItumuFXgtztrkyu4%2FoVqcnvNtFUSCvT0ETa3V3tA7erkCFd3ozwzJ%2FpwlY7pOaj19LXt0LQMRL9cPKUMiRHVadjY07p0dYGfgjim8977uEspn84cD7roilbIhi%2Bu8AedBNL4myvEsTuDNcELeAPFfyLmK7Auw7ofz9ugGbOteCa7D5Ea7JaCmCtxZq%2B2PWVa80GtvZwehUFqI1gJB%2BiC4vTjtdOYnDBrmhpQBGFag4rRrrxuCcHLWZyL2uwRCa%2BrD0RebVhIJFfmUaK6m34KuSpb5p83HDgGDkBWwOjOOdPAS%2Buuw0%2FnxMOsTBIWGyML2s9h0e8z7q3BBuLWoJKhCGPvYqeanKgtj5j9wRV%2B%2BYmBqLPLBJlPCvquDs08aH0jVZA%2FSL94MK68%2B7wGOqUBg6f7OZOyvcreV5PU4yDiq3%2FlsGX%2FXXXabwMzNYw5VaLppo5rPU8SlZoVlbzYq8AlJ%2BG9ulhvr132b0opHwZQ4s%2Bff1KBFT3dlyEEaPuKeKZkOSa7hqyZiR1OwNJJabNcZQS%2Bc6nZnY5ziPWrlHsZ8vlrXWYH0JKsll2Oi1AMw4TBVpRz7vggZDKtdMu4tO%2FIs0QglAW4k%2FIqmHqfptCmsLNzXCgI&X-Amz-Signature=f004dcd27f05f8b947379ef6bb4fe16e449dc95f4e3aa3d7808c7dba855af997&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PKBTSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N7%2Bc2rlsTknahU6IA4GsR6fvRfwEOiInvxPpT%2Blu%2FAIgVCBERLppNgUod5fCm31dqLk9dePv1cXXZrT11OISDIgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFG0QOhDGDdMxKgRyrcA3%2BOTNuBdPZWWVjHZKMMDCnPeg%2BL6hq0dna4L3DGLapRQlx%2BeBF5%2Bzd0ywxSV8V53V3NAHHafsydllsbdxtk4RMcNtdFfYDHXlcHa3KL5qKadcYokfXtYGc21DvhL06AXw9xLVzSJrgPDr6l1ArWkdoCCfyT6zmNUoIZeDWhbqpEbo78pe3MrQqb7oM1o0WkvLNO4FnJ5ii3b5gE9f%2B2pI07hfd7b%2FNjCUpcjoCq3sW%2BykoyHy3YItumuFXgtztrkyu4%2FoVqcnvNtFUSCvT0ETa3V3tA7erkCFd3ozwzJ%2FpwlY7pOaj19LXt0LQMRL9cPKUMiRHVadjY07p0dYGfgjim8977uEspn84cD7roilbIhi%2Bu8AedBNL4myvEsTuDNcELeAPFfyLmK7Auw7ofz9ugGbOteCa7D5Ea7JaCmCtxZq%2B2PWVa80GtvZwehUFqI1gJB%2BiC4vTjtdOYnDBrmhpQBGFag4rRrrxuCcHLWZyL2uwRCa%2BrD0RebVhIJFfmUaK6m34KuSpb5p83HDgGDkBWwOjOOdPAS%2Buuw0%2FnxMOsTBIWGyML2s9h0e8z7q3BBuLWoJKhCGPvYqeanKgtj5j9wRV%2B%2BYmBqLPLBJlPCvquDs08aH0jVZA%2FSL94MK68%2B7wGOqUBg6f7OZOyvcreV5PU4yDiq3%2FlsGX%2FXXXabwMzNYw5VaLppo5rPU8SlZoVlbzYq8AlJ%2BG9ulhvr132b0opHwZQ4s%2Bff1KBFT3dlyEEaPuKeKZkOSa7hqyZiR1OwNJJabNcZQS%2Bc6nZnY5ziPWrlHsZ8vlrXWYH0JKsll2Oi1AMw4TBVpRz7vggZDKtdMu4tO%2FIs0QglAW4k%2FIqmHqfptCmsLNzXCgI&X-Amz-Signature=3ea84acb46a04749e886d968b8eb2e419e112117c570bcb964d50b7810256645&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5PKBTSA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0N7%2Bc2rlsTknahU6IA4GsR6fvRfwEOiInvxPpT%2Blu%2FAIgVCBERLppNgUod5fCm31dqLk9dePv1cXXZrT11OISDIgqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFG0QOhDGDdMxKgRyrcA3%2BOTNuBdPZWWVjHZKMMDCnPeg%2BL6hq0dna4L3DGLapRQlx%2BeBF5%2Bzd0ywxSV8V53V3NAHHafsydllsbdxtk4RMcNtdFfYDHXlcHa3KL5qKadcYokfXtYGc21DvhL06AXw9xLVzSJrgPDr6l1ArWkdoCCfyT6zmNUoIZeDWhbqpEbo78pe3MrQqb7oM1o0WkvLNO4FnJ5ii3b5gE9f%2B2pI07hfd7b%2FNjCUpcjoCq3sW%2BykoyHy3YItumuFXgtztrkyu4%2FoVqcnvNtFUSCvT0ETa3V3tA7erkCFd3ozwzJ%2FpwlY7pOaj19LXt0LQMRL9cPKUMiRHVadjY07p0dYGfgjim8977uEspn84cD7roilbIhi%2Bu8AedBNL4myvEsTuDNcELeAPFfyLmK7Auw7ofz9ugGbOteCa7D5Ea7JaCmCtxZq%2B2PWVa80GtvZwehUFqI1gJB%2BiC4vTjtdOYnDBrmhpQBGFag4rRrrxuCcHLWZyL2uwRCa%2BrD0RebVhIJFfmUaK6m34KuSpb5p83HDgGDkBWwOjOOdPAS%2Buuw0%2FnxMOsTBIWGyML2s9h0e8z7q3BBuLWoJKhCGPvYqeanKgtj5j9wRV%2B%2BYmBqLPLBJlPCvquDs08aH0jVZA%2FSL94MK68%2B7wGOqUBg6f7OZOyvcreV5PU4yDiq3%2FlsGX%2FXXXabwMzNYw5VaLppo5rPU8SlZoVlbzYq8AlJ%2BG9ulhvr132b0opHwZQ4s%2Bff1KBFT3dlyEEaPuKeKZkOSa7hqyZiR1OwNJJabNcZQS%2Bc6nZnY5ziPWrlHsZ8vlrXWYH0JKsll2Oi1AMw4TBVpRz7vggZDKtdMu4tO%2FIs0QglAW4k%2FIqmHqfptCmsLNzXCgI&X-Amz-Signature=dc3e63cebb219d95e67a4d213223a0e7dd524f7c7ba5dad7735a50b67d74d6c7&X-Amz-SignedHeaders=host&x-id=GetObject)
