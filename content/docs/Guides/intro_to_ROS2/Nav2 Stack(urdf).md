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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICYA7TI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAyBXDh0BoSkWDidIzQSf9dgB2zzBoccRnc%2Fz0OxXXq4AiEA48xxT19X6dCZxBU4WKjLUhKq05yYEFenK4oR2fnikfEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFK1%2FysXW4lT09doRSrcA4GJi4tydkRvpIck5lV5k5PwTiA%2F0Mlj8%2BUXoB4fUVnuQhvbw7%2BAGWTyTZG9u1D0pt1e6ldfenHpYvtYBEAVkvx3ve9HY8hZt3dYZWqi2yBpE2x0LHNykKZJBauHHFpSQqN4dx0j9ghwtOJuj5XUGAbXuDGapPxxhfPr8WFoz6XAnRT1kPejAVilFkHVbzjUV6bopB6iYzE9YqRNwDFJoR1stN0YTZkCionHmP7IV6nnOJUNM%2FE2WfAzI7RB%2BqBh7lSZ86rouf%2BHfdlrGQoQx7IQ1gUONBNH06aN97TFTeb8GJND1v4ahN91i3Xi76E%2F8sY5g5KO1WZkUkjYXokEZ%2FNFECtkZBEduNXh1MjXARcuZDU5a1XSePndodi0k2pUJsilCDgbbnTwmattsKetD6Ubjz7iisEsJ8PygwYNzFPDYmma%2FLNaTFvu5%2FMb4NJcs32a8SFWAdnL2zaP9X%2FJg7n42z3bU5BQIgTXLohC7X%2FaRF5ZQv5OfTSfPyod2g%2B26Ho8wUAPtrs9Fb2fn3MrPKmghAA8Rnr5gNsOmOkxTROH16Nb2sjQODtgHB685DPlMyWMSEtLcNOPM7OsQmZsMXglH%2FvJOHHCkOLczyZ8CLrBUgpK8F0EdJFqNWByMMD85LwGOqUB6%2FWEaZO0A2IpYPs5UQen78zxo6HnrGReFR%2BMM3WPMAAXkcp%2BmUy7h0OG1tiJRoz6PjrICLfddVn1B3DvtKP0CPlv6%2Bzg4RLHju%2BCowIKDTZWxn0IQfCrIuZAZtxMb2OylQ6%2BKOAYuGXINjG4IlmOovgXNhs%2FLYDLvLqHM1z%2FhPRUG6LTKJlAi2p5iNIGVnpjGiTgUWO3RVXB3VfQXr8kK7Lefmqi&X-Amz-Signature=94d4cbe8c4afe48bbec13f35a4ed2a6f67e305b5117836e5374e8570553e33de&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICYA7TI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAyBXDh0BoSkWDidIzQSf9dgB2zzBoccRnc%2Fz0OxXXq4AiEA48xxT19X6dCZxBU4WKjLUhKq05yYEFenK4oR2fnikfEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFK1%2FysXW4lT09doRSrcA4GJi4tydkRvpIck5lV5k5PwTiA%2F0Mlj8%2BUXoB4fUVnuQhvbw7%2BAGWTyTZG9u1D0pt1e6ldfenHpYvtYBEAVkvx3ve9HY8hZt3dYZWqi2yBpE2x0LHNykKZJBauHHFpSQqN4dx0j9ghwtOJuj5XUGAbXuDGapPxxhfPr8WFoz6XAnRT1kPejAVilFkHVbzjUV6bopB6iYzE9YqRNwDFJoR1stN0YTZkCionHmP7IV6nnOJUNM%2FE2WfAzI7RB%2BqBh7lSZ86rouf%2BHfdlrGQoQx7IQ1gUONBNH06aN97TFTeb8GJND1v4ahN91i3Xi76E%2F8sY5g5KO1WZkUkjYXokEZ%2FNFECtkZBEduNXh1MjXARcuZDU5a1XSePndodi0k2pUJsilCDgbbnTwmattsKetD6Ubjz7iisEsJ8PygwYNzFPDYmma%2FLNaTFvu5%2FMb4NJcs32a8SFWAdnL2zaP9X%2FJg7n42z3bU5BQIgTXLohC7X%2FaRF5ZQv5OfTSfPyod2g%2B26Ho8wUAPtrs9Fb2fn3MrPKmghAA8Rnr5gNsOmOkxTROH16Nb2sjQODtgHB685DPlMyWMSEtLcNOPM7OsQmZsMXglH%2FvJOHHCkOLczyZ8CLrBUgpK8F0EdJFqNWByMMD85LwGOqUB6%2FWEaZO0A2IpYPs5UQen78zxo6HnrGReFR%2BMM3WPMAAXkcp%2BmUy7h0OG1tiJRoz6PjrICLfddVn1B3DvtKP0CPlv6%2Bzg4RLHju%2BCowIKDTZWxn0IQfCrIuZAZtxMb2OylQ6%2BKOAYuGXINjG4IlmOovgXNhs%2FLYDLvLqHM1z%2FhPRUG6LTKJlAi2p5iNIGVnpjGiTgUWO3RVXB3VfQXr8kK7Lefmqi&X-Amz-Signature=14ee4e25bfba288f0eb2bc6fbdf7cf74139201937b7f33278840cb586416dd31&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICYA7TI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAyBXDh0BoSkWDidIzQSf9dgB2zzBoccRnc%2Fz0OxXXq4AiEA48xxT19X6dCZxBU4WKjLUhKq05yYEFenK4oR2fnikfEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFK1%2FysXW4lT09doRSrcA4GJi4tydkRvpIck5lV5k5PwTiA%2F0Mlj8%2BUXoB4fUVnuQhvbw7%2BAGWTyTZG9u1D0pt1e6ldfenHpYvtYBEAVkvx3ve9HY8hZt3dYZWqi2yBpE2x0LHNykKZJBauHHFpSQqN4dx0j9ghwtOJuj5XUGAbXuDGapPxxhfPr8WFoz6XAnRT1kPejAVilFkHVbzjUV6bopB6iYzE9YqRNwDFJoR1stN0YTZkCionHmP7IV6nnOJUNM%2FE2WfAzI7RB%2BqBh7lSZ86rouf%2BHfdlrGQoQx7IQ1gUONBNH06aN97TFTeb8GJND1v4ahN91i3Xi76E%2F8sY5g5KO1WZkUkjYXokEZ%2FNFECtkZBEduNXh1MjXARcuZDU5a1XSePndodi0k2pUJsilCDgbbnTwmattsKetD6Ubjz7iisEsJ8PygwYNzFPDYmma%2FLNaTFvu5%2FMb4NJcs32a8SFWAdnL2zaP9X%2FJg7n42z3bU5BQIgTXLohC7X%2FaRF5ZQv5OfTSfPyod2g%2B26Ho8wUAPtrs9Fb2fn3MrPKmghAA8Rnr5gNsOmOkxTROH16Nb2sjQODtgHB685DPlMyWMSEtLcNOPM7OsQmZsMXglH%2FvJOHHCkOLczyZ8CLrBUgpK8F0EdJFqNWByMMD85LwGOqUB6%2FWEaZO0A2IpYPs5UQen78zxo6HnrGReFR%2BMM3WPMAAXkcp%2BmUy7h0OG1tiJRoz6PjrICLfddVn1B3DvtKP0CPlv6%2Bzg4RLHju%2BCowIKDTZWxn0IQfCrIuZAZtxMb2OylQ6%2BKOAYuGXINjG4IlmOovgXNhs%2FLYDLvLqHM1z%2FhPRUG6LTKJlAi2p5iNIGVnpjGiTgUWO3RVXB3VfQXr8kK7Lefmqi&X-Amz-Signature=7b5aaecaf3b2fb6db34a3fcbfc93d4110b0a75575ed6a19c0f87f03468ca3a56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICYA7TI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAyBXDh0BoSkWDidIzQSf9dgB2zzBoccRnc%2Fz0OxXXq4AiEA48xxT19X6dCZxBU4WKjLUhKq05yYEFenK4oR2fnikfEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFK1%2FysXW4lT09doRSrcA4GJi4tydkRvpIck5lV5k5PwTiA%2F0Mlj8%2BUXoB4fUVnuQhvbw7%2BAGWTyTZG9u1D0pt1e6ldfenHpYvtYBEAVkvx3ve9HY8hZt3dYZWqi2yBpE2x0LHNykKZJBauHHFpSQqN4dx0j9ghwtOJuj5XUGAbXuDGapPxxhfPr8WFoz6XAnRT1kPejAVilFkHVbzjUV6bopB6iYzE9YqRNwDFJoR1stN0YTZkCionHmP7IV6nnOJUNM%2FE2WfAzI7RB%2BqBh7lSZ86rouf%2BHfdlrGQoQx7IQ1gUONBNH06aN97TFTeb8GJND1v4ahN91i3Xi76E%2F8sY5g5KO1WZkUkjYXokEZ%2FNFECtkZBEduNXh1MjXARcuZDU5a1XSePndodi0k2pUJsilCDgbbnTwmattsKetD6Ubjz7iisEsJ8PygwYNzFPDYmma%2FLNaTFvu5%2FMb4NJcs32a8SFWAdnL2zaP9X%2FJg7n42z3bU5BQIgTXLohC7X%2FaRF5ZQv5OfTSfPyod2g%2B26Ho8wUAPtrs9Fb2fn3MrPKmghAA8Rnr5gNsOmOkxTROH16Nb2sjQODtgHB685DPlMyWMSEtLcNOPM7OsQmZsMXglH%2FvJOHHCkOLczyZ8CLrBUgpK8F0EdJFqNWByMMD85LwGOqUB6%2FWEaZO0A2IpYPs5UQen78zxo6HnrGReFR%2BMM3WPMAAXkcp%2BmUy7h0OG1tiJRoz6PjrICLfddVn1B3DvtKP0CPlv6%2Bzg4RLHju%2BCowIKDTZWxn0IQfCrIuZAZtxMb2OylQ6%2BKOAYuGXINjG4IlmOovgXNhs%2FLYDLvLqHM1z%2FhPRUG6LTKJlAi2p5iNIGVnpjGiTgUWO3RVXB3VfQXr8kK7Lefmqi&X-Amz-Signature=1b6e24f8984540b4c097019649bd79b20f4af94639ef72ed036e2f87fe2dfcdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICYA7TI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAyBXDh0BoSkWDidIzQSf9dgB2zzBoccRnc%2Fz0OxXXq4AiEA48xxT19X6dCZxBU4WKjLUhKq05yYEFenK4oR2fnikfEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFK1%2FysXW4lT09doRSrcA4GJi4tydkRvpIck5lV5k5PwTiA%2F0Mlj8%2BUXoB4fUVnuQhvbw7%2BAGWTyTZG9u1D0pt1e6ldfenHpYvtYBEAVkvx3ve9HY8hZt3dYZWqi2yBpE2x0LHNykKZJBauHHFpSQqN4dx0j9ghwtOJuj5XUGAbXuDGapPxxhfPr8WFoz6XAnRT1kPejAVilFkHVbzjUV6bopB6iYzE9YqRNwDFJoR1stN0YTZkCionHmP7IV6nnOJUNM%2FE2WfAzI7RB%2BqBh7lSZ86rouf%2BHfdlrGQoQx7IQ1gUONBNH06aN97TFTeb8GJND1v4ahN91i3Xi76E%2F8sY5g5KO1WZkUkjYXokEZ%2FNFECtkZBEduNXh1MjXARcuZDU5a1XSePndodi0k2pUJsilCDgbbnTwmattsKetD6Ubjz7iisEsJ8PygwYNzFPDYmma%2FLNaTFvu5%2FMb4NJcs32a8SFWAdnL2zaP9X%2FJg7n42z3bU5BQIgTXLohC7X%2FaRF5ZQv5OfTSfPyod2g%2B26Ho8wUAPtrs9Fb2fn3MrPKmghAA8Rnr5gNsOmOkxTROH16Nb2sjQODtgHB685DPlMyWMSEtLcNOPM7OsQmZsMXglH%2FvJOHHCkOLczyZ8CLrBUgpK8F0EdJFqNWByMMD85LwGOqUB6%2FWEaZO0A2IpYPs5UQen78zxo6HnrGReFR%2BMM3WPMAAXkcp%2BmUy7h0OG1tiJRoz6PjrICLfddVn1B3DvtKP0CPlv6%2Bzg4RLHju%2BCowIKDTZWxn0IQfCrIuZAZtxMb2OylQ6%2BKOAYuGXINjG4IlmOovgXNhs%2FLYDLvLqHM1z%2FhPRUG6LTKJlAi2p5iNIGVnpjGiTgUWO3RVXB3VfQXr8kK7Lefmqi&X-Amz-Signature=45833b99048b4b8730792424b4afd6b7e122342644839488b3a249eb48324438&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICYA7TI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIAyBXDh0BoSkWDidIzQSf9dgB2zzBoccRnc%2Fz0OxXXq4AiEA48xxT19X6dCZxBU4WKjLUhKq05yYEFenK4oR2fnikfEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFK1%2FysXW4lT09doRSrcA4GJi4tydkRvpIck5lV5k5PwTiA%2F0Mlj8%2BUXoB4fUVnuQhvbw7%2BAGWTyTZG9u1D0pt1e6ldfenHpYvtYBEAVkvx3ve9HY8hZt3dYZWqi2yBpE2x0LHNykKZJBauHHFpSQqN4dx0j9ghwtOJuj5XUGAbXuDGapPxxhfPr8WFoz6XAnRT1kPejAVilFkHVbzjUV6bopB6iYzE9YqRNwDFJoR1stN0YTZkCionHmP7IV6nnOJUNM%2FE2WfAzI7RB%2BqBh7lSZ86rouf%2BHfdlrGQoQx7IQ1gUONBNH06aN97TFTeb8GJND1v4ahN91i3Xi76E%2F8sY5g5KO1WZkUkjYXokEZ%2FNFECtkZBEduNXh1MjXARcuZDU5a1XSePndodi0k2pUJsilCDgbbnTwmattsKetD6Ubjz7iisEsJ8PygwYNzFPDYmma%2FLNaTFvu5%2FMb4NJcs32a8SFWAdnL2zaP9X%2FJg7n42z3bU5BQIgTXLohC7X%2FaRF5ZQv5OfTSfPyod2g%2B26Ho8wUAPtrs9Fb2fn3MrPKmghAA8Rnr5gNsOmOkxTROH16Nb2sjQODtgHB685DPlMyWMSEtLcNOPM7OsQmZsMXglH%2FvJOHHCkOLczyZ8CLrBUgpK8F0EdJFqNWByMMD85LwGOqUB6%2FWEaZO0A2IpYPs5UQen78zxo6HnrGReFR%2BMM3WPMAAXkcp%2BmUy7h0OG1tiJRoz6PjrICLfddVn1B3DvtKP0CPlv6%2Bzg4RLHju%2BCowIKDTZWxn0IQfCrIuZAZtxMb2OylQ6%2BKOAYuGXINjG4IlmOovgXNhs%2FLYDLvLqHM1z%2FhPRUG6LTKJlAi2p5iNIGVnpjGiTgUWO3RVXB3VfQXr8kK7Lefmqi&X-Amz-Signature=3359fad80864a68e569202bb2eb125830b98a369a28ef27642c731c55ac4b84b&X-Amz-SignedHeaders=host&x-id=GetObject)
