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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZPVEFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCV2mFpvNvQhnWSG9x659d8PzyoJRzMG%2FTtw14hFZoAIhAINmjo7ePvNBF0GOss6jJE5P8wvQFyHmk9BVYFVZ68F9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT4bfv9KqGQd5RFOEq3AOO9sVMC8lvQX2aJ3akz9mr%2FwAINBuqlwAdSpSZedwppet0soG2WfU40seeWhSZf2nbAN%2Fw%2FNnA1decg9l4HQortCEMjcOvmKsrgnXPmI9XTASAvgmOAVVYb6CBl1R3V%2FvcfZUwkUMC%2FvjeyQS0Bvp%2BcS680GSrF8mPblAVV5iuXML9p3AhttHNkhi2Kh4zMWq%2B2k9KpfUda4728OXXsKSiPVjcWE%2FLo%2ByHdrHNinh6UZgQRAX%2BIFw3PHyb8BdwLnzmQjnBpzhm1x6x2Hud2%2B%2B1wlELhfM6hf5BEF9SkLAiDswvnZ92DZKWjMXb7pDrrfYGUN3vDQPKGX6u5G827usUuwFpXJR32pvjaR8XaXXAseFHpsK6D9RID5%2B7tBU8WhCWMVZgYxIl72vw2vwRdbW3XY2byMNTV98fgWcbPVCL16u%2FDa8UHX8t53sjo91HRpwpBfQquEuM2Z0ozgztVTt%2FMWZnRkZk6neg4tG8tJCYvq%2F1aROplFNb6zCmY7kv3Zy7X95hULbOBDhIwbrg%2BIXWVF4Os48kzBctg563iSsOBcDJP3dQ308Ch%2Fu5mMT6d2msUuy6wvtPKrTlDCdI1FhXxNpoORRJiuvIYs9tlX7BNo9nReINP8qHlLxCCjC7jO28BjqkAaxjRDPXHa3odBcTSLVn3W3fWsDWFNjnI8%2Bsj0KPvgeNQTkzq256Co6y3%2F15Gqr3vUQBciVXPlRHpDs5rVr8VuK8ASZIp66YXfPB3qR%2B9wFObwdUfGcbLrXoASj8NwmDmDeiYQp%2BFZ%2B2Q9ufowiYkyb60%2BE8GkD4Rl6Bun64zg%2FiYN2zuiMQe8LwO%2BccX2G5Fvjmt2oyQnbIemftets5mSLilzeV&X-Amz-Signature=56ffc763c1bf725d621fd087a3ddb46761862e0906cae1b24fc676e6cf60e25b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZPVEFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCV2mFpvNvQhnWSG9x659d8PzyoJRzMG%2FTtw14hFZoAIhAINmjo7ePvNBF0GOss6jJE5P8wvQFyHmk9BVYFVZ68F9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT4bfv9KqGQd5RFOEq3AOO9sVMC8lvQX2aJ3akz9mr%2FwAINBuqlwAdSpSZedwppet0soG2WfU40seeWhSZf2nbAN%2Fw%2FNnA1decg9l4HQortCEMjcOvmKsrgnXPmI9XTASAvgmOAVVYb6CBl1R3V%2FvcfZUwkUMC%2FvjeyQS0Bvp%2BcS680GSrF8mPblAVV5iuXML9p3AhttHNkhi2Kh4zMWq%2B2k9KpfUda4728OXXsKSiPVjcWE%2FLo%2ByHdrHNinh6UZgQRAX%2BIFw3PHyb8BdwLnzmQjnBpzhm1x6x2Hud2%2B%2B1wlELhfM6hf5BEF9SkLAiDswvnZ92DZKWjMXb7pDrrfYGUN3vDQPKGX6u5G827usUuwFpXJR32pvjaR8XaXXAseFHpsK6D9RID5%2B7tBU8WhCWMVZgYxIl72vw2vwRdbW3XY2byMNTV98fgWcbPVCL16u%2FDa8UHX8t53sjo91HRpwpBfQquEuM2Z0ozgztVTt%2FMWZnRkZk6neg4tG8tJCYvq%2F1aROplFNb6zCmY7kv3Zy7X95hULbOBDhIwbrg%2BIXWVF4Os48kzBctg563iSsOBcDJP3dQ308Ch%2Fu5mMT6d2msUuy6wvtPKrTlDCdI1FhXxNpoORRJiuvIYs9tlX7BNo9nReINP8qHlLxCCjC7jO28BjqkAaxjRDPXHa3odBcTSLVn3W3fWsDWFNjnI8%2Bsj0KPvgeNQTkzq256Co6y3%2F15Gqr3vUQBciVXPlRHpDs5rVr8VuK8ASZIp66YXfPB3qR%2B9wFObwdUfGcbLrXoASj8NwmDmDeiYQp%2BFZ%2B2Q9ufowiYkyb60%2BE8GkD4Rl6Bun64zg%2FiYN2zuiMQe8LwO%2BccX2G5Fvjmt2oyQnbIemftets5mSLilzeV&X-Amz-Signature=9432d9ddd8f331e4eb23ad07234d03f8c033e10a616bbd2750bcc8c068ebe281&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZPVEFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCV2mFpvNvQhnWSG9x659d8PzyoJRzMG%2FTtw14hFZoAIhAINmjo7ePvNBF0GOss6jJE5P8wvQFyHmk9BVYFVZ68F9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT4bfv9KqGQd5RFOEq3AOO9sVMC8lvQX2aJ3akz9mr%2FwAINBuqlwAdSpSZedwppet0soG2WfU40seeWhSZf2nbAN%2Fw%2FNnA1decg9l4HQortCEMjcOvmKsrgnXPmI9XTASAvgmOAVVYb6CBl1R3V%2FvcfZUwkUMC%2FvjeyQS0Bvp%2BcS680GSrF8mPblAVV5iuXML9p3AhttHNkhi2Kh4zMWq%2B2k9KpfUda4728OXXsKSiPVjcWE%2FLo%2ByHdrHNinh6UZgQRAX%2BIFw3PHyb8BdwLnzmQjnBpzhm1x6x2Hud2%2B%2B1wlELhfM6hf5BEF9SkLAiDswvnZ92DZKWjMXb7pDrrfYGUN3vDQPKGX6u5G827usUuwFpXJR32pvjaR8XaXXAseFHpsK6D9RID5%2B7tBU8WhCWMVZgYxIl72vw2vwRdbW3XY2byMNTV98fgWcbPVCL16u%2FDa8UHX8t53sjo91HRpwpBfQquEuM2Z0ozgztVTt%2FMWZnRkZk6neg4tG8tJCYvq%2F1aROplFNb6zCmY7kv3Zy7X95hULbOBDhIwbrg%2BIXWVF4Os48kzBctg563iSsOBcDJP3dQ308Ch%2Fu5mMT6d2msUuy6wvtPKrTlDCdI1FhXxNpoORRJiuvIYs9tlX7BNo9nReINP8qHlLxCCjC7jO28BjqkAaxjRDPXHa3odBcTSLVn3W3fWsDWFNjnI8%2Bsj0KPvgeNQTkzq256Co6y3%2F15Gqr3vUQBciVXPlRHpDs5rVr8VuK8ASZIp66YXfPB3qR%2B9wFObwdUfGcbLrXoASj8NwmDmDeiYQp%2BFZ%2B2Q9ufowiYkyb60%2BE8GkD4Rl6Bun64zg%2FiYN2zuiMQe8LwO%2BccX2G5Fvjmt2oyQnbIemftets5mSLilzeV&X-Amz-Signature=6f7e1cf0a4ebfb18aa9d0e00756a4514ca5b2dd7810f313f3137c0ac6a9e9e21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZPVEFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCV2mFpvNvQhnWSG9x659d8PzyoJRzMG%2FTtw14hFZoAIhAINmjo7ePvNBF0GOss6jJE5P8wvQFyHmk9BVYFVZ68F9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT4bfv9KqGQd5RFOEq3AOO9sVMC8lvQX2aJ3akz9mr%2FwAINBuqlwAdSpSZedwppet0soG2WfU40seeWhSZf2nbAN%2Fw%2FNnA1decg9l4HQortCEMjcOvmKsrgnXPmI9XTASAvgmOAVVYb6CBl1R3V%2FvcfZUwkUMC%2FvjeyQS0Bvp%2BcS680GSrF8mPblAVV5iuXML9p3AhttHNkhi2Kh4zMWq%2B2k9KpfUda4728OXXsKSiPVjcWE%2FLo%2ByHdrHNinh6UZgQRAX%2BIFw3PHyb8BdwLnzmQjnBpzhm1x6x2Hud2%2B%2B1wlELhfM6hf5BEF9SkLAiDswvnZ92DZKWjMXb7pDrrfYGUN3vDQPKGX6u5G827usUuwFpXJR32pvjaR8XaXXAseFHpsK6D9RID5%2B7tBU8WhCWMVZgYxIl72vw2vwRdbW3XY2byMNTV98fgWcbPVCL16u%2FDa8UHX8t53sjo91HRpwpBfQquEuM2Z0ozgztVTt%2FMWZnRkZk6neg4tG8tJCYvq%2F1aROplFNb6zCmY7kv3Zy7X95hULbOBDhIwbrg%2BIXWVF4Os48kzBctg563iSsOBcDJP3dQ308Ch%2Fu5mMT6d2msUuy6wvtPKrTlDCdI1FhXxNpoORRJiuvIYs9tlX7BNo9nReINP8qHlLxCCjC7jO28BjqkAaxjRDPXHa3odBcTSLVn3W3fWsDWFNjnI8%2Bsj0KPvgeNQTkzq256Co6y3%2F15Gqr3vUQBciVXPlRHpDs5rVr8VuK8ASZIp66YXfPB3qR%2B9wFObwdUfGcbLrXoASj8NwmDmDeiYQp%2BFZ%2B2Q9ufowiYkyb60%2BE8GkD4Rl6Bun64zg%2FiYN2zuiMQe8LwO%2BccX2G5Fvjmt2oyQnbIemftets5mSLilzeV&X-Amz-Signature=46eca977579201d2d30cb78e3bc16ac165f0cb78c637a0bacf6c63e34341388b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZPVEFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCV2mFpvNvQhnWSG9x659d8PzyoJRzMG%2FTtw14hFZoAIhAINmjo7ePvNBF0GOss6jJE5P8wvQFyHmk9BVYFVZ68F9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT4bfv9KqGQd5RFOEq3AOO9sVMC8lvQX2aJ3akz9mr%2FwAINBuqlwAdSpSZedwppet0soG2WfU40seeWhSZf2nbAN%2Fw%2FNnA1decg9l4HQortCEMjcOvmKsrgnXPmI9XTASAvgmOAVVYb6CBl1R3V%2FvcfZUwkUMC%2FvjeyQS0Bvp%2BcS680GSrF8mPblAVV5iuXML9p3AhttHNkhi2Kh4zMWq%2B2k9KpfUda4728OXXsKSiPVjcWE%2FLo%2ByHdrHNinh6UZgQRAX%2BIFw3PHyb8BdwLnzmQjnBpzhm1x6x2Hud2%2B%2B1wlELhfM6hf5BEF9SkLAiDswvnZ92DZKWjMXb7pDrrfYGUN3vDQPKGX6u5G827usUuwFpXJR32pvjaR8XaXXAseFHpsK6D9RID5%2B7tBU8WhCWMVZgYxIl72vw2vwRdbW3XY2byMNTV98fgWcbPVCL16u%2FDa8UHX8t53sjo91HRpwpBfQquEuM2Z0ozgztVTt%2FMWZnRkZk6neg4tG8tJCYvq%2F1aROplFNb6zCmY7kv3Zy7X95hULbOBDhIwbrg%2BIXWVF4Os48kzBctg563iSsOBcDJP3dQ308Ch%2Fu5mMT6d2msUuy6wvtPKrTlDCdI1FhXxNpoORRJiuvIYs9tlX7BNo9nReINP8qHlLxCCjC7jO28BjqkAaxjRDPXHa3odBcTSLVn3W3fWsDWFNjnI8%2Bsj0KPvgeNQTkzq256Co6y3%2F15Gqr3vUQBciVXPlRHpDs5rVr8VuK8ASZIp66YXfPB3qR%2B9wFObwdUfGcbLrXoASj8NwmDmDeiYQp%2BFZ%2B2Q9ufowiYkyb60%2BE8GkD4Rl6Bun64zg%2FiYN2zuiMQe8LwO%2BccX2G5Fvjmt2oyQnbIemftets5mSLilzeV&X-Amz-Signature=08d0d8e72672c5a7b048f835023124f6cb8a192d90a8ece6fdf1dea07d89b96d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZPVEFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCV2mFpvNvQhnWSG9x659d8PzyoJRzMG%2FTtw14hFZoAIhAINmjo7ePvNBF0GOss6jJE5P8wvQFyHmk9BVYFVZ68F9KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT4bfv9KqGQd5RFOEq3AOO9sVMC8lvQX2aJ3akz9mr%2FwAINBuqlwAdSpSZedwppet0soG2WfU40seeWhSZf2nbAN%2Fw%2FNnA1decg9l4HQortCEMjcOvmKsrgnXPmI9XTASAvgmOAVVYb6CBl1R3V%2FvcfZUwkUMC%2FvjeyQS0Bvp%2BcS680GSrF8mPblAVV5iuXML9p3AhttHNkhi2Kh4zMWq%2B2k9KpfUda4728OXXsKSiPVjcWE%2FLo%2ByHdrHNinh6UZgQRAX%2BIFw3PHyb8BdwLnzmQjnBpzhm1x6x2Hud2%2B%2B1wlELhfM6hf5BEF9SkLAiDswvnZ92DZKWjMXb7pDrrfYGUN3vDQPKGX6u5G827usUuwFpXJR32pvjaR8XaXXAseFHpsK6D9RID5%2B7tBU8WhCWMVZgYxIl72vw2vwRdbW3XY2byMNTV98fgWcbPVCL16u%2FDa8UHX8t53sjo91HRpwpBfQquEuM2Z0ozgztVTt%2FMWZnRkZk6neg4tG8tJCYvq%2F1aROplFNb6zCmY7kv3Zy7X95hULbOBDhIwbrg%2BIXWVF4Os48kzBctg563iSsOBcDJP3dQ308Ch%2Fu5mMT6d2msUuy6wvtPKrTlDCdI1FhXxNpoORRJiuvIYs9tlX7BNo9nReINP8qHlLxCCjC7jO28BjqkAaxjRDPXHa3odBcTSLVn3W3fWsDWFNjnI8%2Bsj0KPvgeNQTkzq256Co6y3%2F15Gqr3vUQBciVXPlRHpDs5rVr8VuK8ASZIp66YXfPB3qR%2B9wFObwdUfGcbLrXoASj8NwmDmDeiYQp%2BFZ%2B2Q9ufowiYkyb60%2BE8GkD4Rl6Bun64zg%2FiYN2zuiMQe8LwO%2BccX2G5Fvjmt2oyQnbIemftets5mSLilzeV&X-Amz-Signature=005991a2fb05bd56c11d8e76db4c36bef490787bde3fb29cc09b97114d8fc8a2&X-Amz-SignedHeaders=host&x-id=GetObject)
