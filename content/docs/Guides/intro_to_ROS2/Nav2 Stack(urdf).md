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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZL6QJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhnJ%2BBmHsaf27EpGZvL1mC2iyJjHlZl7%2BqOT6b8VDSbwIhAMkqUM%2BZ0vvjFtvpdiJDLs2pg02SnfN4%2FH2ZOk4RTPxQKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2RQvplmwJJd4K59sq3ANC6TV5cngyQs08RbE6SpF8iSVDiDQRiPV2P92%2BeCnMHXc9X5lk4MsKWo8bOSIzCsrIBA6mRhVrTjmdZu1wSwychOW9VdsjcVswOPqJrSU4pcmOVIbC4NXzkbsQBpxhuo9oDzctCbneN4i3RKsmingx35uvrHE97Rr4m5i51Pp9iA7Om2Yd0HPN5xvXzcMwGrYFFhRBfPEp%2Fv%2BoIJIlTRb0Dw%2Fwa5Kfbk98rj2VtDGhztPa0DliHsRg%2BfLwVP2JJCbs%2BUgYvek6jeNX1E%2BN%2F3Ue15shzLh6SDGcUpLCA3fthalZ6ajcmQpmBj9SqXLJrnmsvdXs%2FmEnSja0kuwKBHPLzr1zS9kM07iSLtQQ5XDYZABSdGsgDKQFQNRb6xKRlgvSofaas3c9mwdcUMiSPLY9vIzjq2h6HTM75kEKFBKdiyvX2C9nRuP7BsIA%2FanaFK%2FkxMuPzeXorI6oNK4TlykTwUfO5f1E7ZUKXVqptRlXGVmJw9W02tqsveZ%2FjrHGA35r3quXVqpDyVdmsCR63rzZZSqieXt8zPNJbhEuqfDiYARnKSNvZrYp97FqDklu6OLUXpsQ%2B669EqZ7M5T7ByJ6XZx1iGstyE7Y6VhP3R9yARI8edd4WVGAdYWMdDCyu7bCBjqkAUyxrxTbLzl1WE4K%2FKJhfCh5GCVRanfFPSwRkslgQ45kiIcjbmZBzABXy0mjwJL0MDAQ0Tw%2Bxu6I5DgDsxrS9xmEw%2BpR2XHL8EQemm%2FoZnNe%2BxUIkaPT6BlB2J5UVtNU2%2B3%2F270FGBNy6sbWKLD54%2BwPu%2F2%2BUFbOziK6238USl0ni70DTpUr9UwIlFIMSJ2S%2BhrjgvvYfza8u0nZC0bxWYn%2FNQ8P&X-Amz-Signature=ed714e0837668c7e7106b3fa27a6911dc97e446ecb09702551e31918698652d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZL6QJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhnJ%2BBmHsaf27EpGZvL1mC2iyJjHlZl7%2BqOT6b8VDSbwIhAMkqUM%2BZ0vvjFtvpdiJDLs2pg02SnfN4%2FH2ZOk4RTPxQKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2RQvplmwJJd4K59sq3ANC6TV5cngyQs08RbE6SpF8iSVDiDQRiPV2P92%2BeCnMHXc9X5lk4MsKWo8bOSIzCsrIBA6mRhVrTjmdZu1wSwychOW9VdsjcVswOPqJrSU4pcmOVIbC4NXzkbsQBpxhuo9oDzctCbneN4i3RKsmingx35uvrHE97Rr4m5i51Pp9iA7Om2Yd0HPN5xvXzcMwGrYFFhRBfPEp%2Fv%2BoIJIlTRb0Dw%2Fwa5Kfbk98rj2VtDGhztPa0DliHsRg%2BfLwVP2JJCbs%2BUgYvek6jeNX1E%2BN%2F3Ue15shzLh6SDGcUpLCA3fthalZ6ajcmQpmBj9SqXLJrnmsvdXs%2FmEnSja0kuwKBHPLzr1zS9kM07iSLtQQ5XDYZABSdGsgDKQFQNRb6xKRlgvSofaas3c9mwdcUMiSPLY9vIzjq2h6HTM75kEKFBKdiyvX2C9nRuP7BsIA%2FanaFK%2FkxMuPzeXorI6oNK4TlykTwUfO5f1E7ZUKXVqptRlXGVmJw9W02tqsveZ%2FjrHGA35r3quXVqpDyVdmsCR63rzZZSqieXt8zPNJbhEuqfDiYARnKSNvZrYp97FqDklu6OLUXpsQ%2B669EqZ7M5T7ByJ6XZx1iGstyE7Y6VhP3R9yARI8edd4WVGAdYWMdDCyu7bCBjqkAUyxrxTbLzl1WE4K%2FKJhfCh5GCVRanfFPSwRkslgQ45kiIcjbmZBzABXy0mjwJL0MDAQ0Tw%2Bxu6I5DgDsxrS9xmEw%2BpR2XHL8EQemm%2FoZnNe%2BxUIkaPT6BlB2J5UVtNU2%2B3%2F270FGBNy6sbWKLD54%2BwPu%2F2%2BUFbOziK6238USl0ni70DTpUr9UwIlFIMSJ2S%2BhrjgvvYfza8u0nZC0bxWYn%2FNQ8P&X-Amz-Signature=f55595935b50b30e8a9a9ae4e766af7c7a2fa0187da381be35f00424663e6f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZL6QJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhnJ%2BBmHsaf27EpGZvL1mC2iyJjHlZl7%2BqOT6b8VDSbwIhAMkqUM%2BZ0vvjFtvpdiJDLs2pg02SnfN4%2FH2ZOk4RTPxQKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2RQvplmwJJd4K59sq3ANC6TV5cngyQs08RbE6SpF8iSVDiDQRiPV2P92%2BeCnMHXc9X5lk4MsKWo8bOSIzCsrIBA6mRhVrTjmdZu1wSwychOW9VdsjcVswOPqJrSU4pcmOVIbC4NXzkbsQBpxhuo9oDzctCbneN4i3RKsmingx35uvrHE97Rr4m5i51Pp9iA7Om2Yd0HPN5xvXzcMwGrYFFhRBfPEp%2Fv%2BoIJIlTRb0Dw%2Fwa5Kfbk98rj2VtDGhztPa0DliHsRg%2BfLwVP2JJCbs%2BUgYvek6jeNX1E%2BN%2F3Ue15shzLh6SDGcUpLCA3fthalZ6ajcmQpmBj9SqXLJrnmsvdXs%2FmEnSja0kuwKBHPLzr1zS9kM07iSLtQQ5XDYZABSdGsgDKQFQNRb6xKRlgvSofaas3c9mwdcUMiSPLY9vIzjq2h6HTM75kEKFBKdiyvX2C9nRuP7BsIA%2FanaFK%2FkxMuPzeXorI6oNK4TlykTwUfO5f1E7ZUKXVqptRlXGVmJw9W02tqsveZ%2FjrHGA35r3quXVqpDyVdmsCR63rzZZSqieXt8zPNJbhEuqfDiYARnKSNvZrYp97FqDklu6OLUXpsQ%2B669EqZ7M5T7ByJ6XZx1iGstyE7Y6VhP3R9yARI8edd4WVGAdYWMdDCyu7bCBjqkAUyxrxTbLzl1WE4K%2FKJhfCh5GCVRanfFPSwRkslgQ45kiIcjbmZBzABXy0mjwJL0MDAQ0Tw%2Bxu6I5DgDsxrS9xmEw%2BpR2XHL8EQemm%2FoZnNe%2BxUIkaPT6BlB2J5UVtNU2%2B3%2F270FGBNy6sbWKLD54%2BwPu%2F2%2BUFbOziK6238USl0ni70DTpUr9UwIlFIMSJ2S%2BhrjgvvYfza8u0nZC0bxWYn%2FNQ8P&X-Amz-Signature=f791e384e94d701d7de64f789fabe4e2bec2133f3fc1993c7c4077cbacfe34e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZL6QJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhnJ%2BBmHsaf27EpGZvL1mC2iyJjHlZl7%2BqOT6b8VDSbwIhAMkqUM%2BZ0vvjFtvpdiJDLs2pg02SnfN4%2FH2ZOk4RTPxQKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2RQvplmwJJd4K59sq3ANC6TV5cngyQs08RbE6SpF8iSVDiDQRiPV2P92%2BeCnMHXc9X5lk4MsKWo8bOSIzCsrIBA6mRhVrTjmdZu1wSwychOW9VdsjcVswOPqJrSU4pcmOVIbC4NXzkbsQBpxhuo9oDzctCbneN4i3RKsmingx35uvrHE97Rr4m5i51Pp9iA7Om2Yd0HPN5xvXzcMwGrYFFhRBfPEp%2Fv%2BoIJIlTRb0Dw%2Fwa5Kfbk98rj2VtDGhztPa0DliHsRg%2BfLwVP2JJCbs%2BUgYvek6jeNX1E%2BN%2F3Ue15shzLh6SDGcUpLCA3fthalZ6ajcmQpmBj9SqXLJrnmsvdXs%2FmEnSja0kuwKBHPLzr1zS9kM07iSLtQQ5XDYZABSdGsgDKQFQNRb6xKRlgvSofaas3c9mwdcUMiSPLY9vIzjq2h6HTM75kEKFBKdiyvX2C9nRuP7BsIA%2FanaFK%2FkxMuPzeXorI6oNK4TlykTwUfO5f1E7ZUKXVqptRlXGVmJw9W02tqsveZ%2FjrHGA35r3quXVqpDyVdmsCR63rzZZSqieXt8zPNJbhEuqfDiYARnKSNvZrYp97FqDklu6OLUXpsQ%2B669EqZ7M5T7ByJ6XZx1iGstyE7Y6VhP3R9yARI8edd4WVGAdYWMdDCyu7bCBjqkAUyxrxTbLzl1WE4K%2FKJhfCh5GCVRanfFPSwRkslgQ45kiIcjbmZBzABXy0mjwJL0MDAQ0Tw%2Bxu6I5DgDsxrS9xmEw%2BpR2XHL8EQemm%2FoZnNe%2BxUIkaPT6BlB2J5UVtNU2%2B3%2F270FGBNy6sbWKLD54%2BwPu%2F2%2BUFbOziK6238USl0ni70DTpUr9UwIlFIMSJ2S%2BhrjgvvYfza8u0nZC0bxWYn%2FNQ8P&X-Amz-Signature=7c9fac6deeb23b74a61defcd5bb07f75790137e150f1c1bf58c3efd82c27f62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZL6QJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhnJ%2BBmHsaf27EpGZvL1mC2iyJjHlZl7%2BqOT6b8VDSbwIhAMkqUM%2BZ0vvjFtvpdiJDLs2pg02SnfN4%2FH2ZOk4RTPxQKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2RQvplmwJJd4K59sq3ANC6TV5cngyQs08RbE6SpF8iSVDiDQRiPV2P92%2BeCnMHXc9X5lk4MsKWo8bOSIzCsrIBA6mRhVrTjmdZu1wSwychOW9VdsjcVswOPqJrSU4pcmOVIbC4NXzkbsQBpxhuo9oDzctCbneN4i3RKsmingx35uvrHE97Rr4m5i51Pp9iA7Om2Yd0HPN5xvXzcMwGrYFFhRBfPEp%2Fv%2BoIJIlTRb0Dw%2Fwa5Kfbk98rj2VtDGhztPa0DliHsRg%2BfLwVP2JJCbs%2BUgYvek6jeNX1E%2BN%2F3Ue15shzLh6SDGcUpLCA3fthalZ6ajcmQpmBj9SqXLJrnmsvdXs%2FmEnSja0kuwKBHPLzr1zS9kM07iSLtQQ5XDYZABSdGsgDKQFQNRb6xKRlgvSofaas3c9mwdcUMiSPLY9vIzjq2h6HTM75kEKFBKdiyvX2C9nRuP7BsIA%2FanaFK%2FkxMuPzeXorI6oNK4TlykTwUfO5f1E7ZUKXVqptRlXGVmJw9W02tqsveZ%2FjrHGA35r3quXVqpDyVdmsCR63rzZZSqieXt8zPNJbhEuqfDiYARnKSNvZrYp97FqDklu6OLUXpsQ%2B669EqZ7M5T7ByJ6XZx1iGstyE7Y6VhP3R9yARI8edd4WVGAdYWMdDCyu7bCBjqkAUyxrxTbLzl1WE4K%2FKJhfCh5GCVRanfFPSwRkslgQ45kiIcjbmZBzABXy0mjwJL0MDAQ0Tw%2Bxu6I5DgDsxrS9xmEw%2BpR2XHL8EQemm%2FoZnNe%2BxUIkaPT6BlB2J5UVtNU2%2B3%2F270FGBNy6sbWKLD54%2BwPu%2F2%2BUFbOziK6238USl0ni70DTpUr9UwIlFIMSJ2S%2BhrjgvvYfza8u0nZC0bxWYn%2FNQ8P&X-Amz-Signature=0ffd5ab35c47b0e5e83d32a56bf385b72535071a70d5c33f31d1eb82a49af082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZL6QJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhnJ%2BBmHsaf27EpGZvL1mC2iyJjHlZl7%2BqOT6b8VDSbwIhAMkqUM%2BZ0vvjFtvpdiJDLs2pg02SnfN4%2FH2ZOk4RTPxQKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2RQvplmwJJd4K59sq3ANC6TV5cngyQs08RbE6SpF8iSVDiDQRiPV2P92%2BeCnMHXc9X5lk4MsKWo8bOSIzCsrIBA6mRhVrTjmdZu1wSwychOW9VdsjcVswOPqJrSU4pcmOVIbC4NXzkbsQBpxhuo9oDzctCbneN4i3RKsmingx35uvrHE97Rr4m5i51Pp9iA7Om2Yd0HPN5xvXzcMwGrYFFhRBfPEp%2Fv%2BoIJIlTRb0Dw%2Fwa5Kfbk98rj2VtDGhztPa0DliHsRg%2BfLwVP2JJCbs%2BUgYvek6jeNX1E%2BN%2F3Ue15shzLh6SDGcUpLCA3fthalZ6ajcmQpmBj9SqXLJrnmsvdXs%2FmEnSja0kuwKBHPLzr1zS9kM07iSLtQQ5XDYZABSdGsgDKQFQNRb6xKRlgvSofaas3c9mwdcUMiSPLY9vIzjq2h6HTM75kEKFBKdiyvX2C9nRuP7BsIA%2FanaFK%2FkxMuPzeXorI6oNK4TlykTwUfO5f1E7ZUKXVqptRlXGVmJw9W02tqsveZ%2FjrHGA35r3quXVqpDyVdmsCR63rzZZSqieXt8zPNJbhEuqfDiYARnKSNvZrYp97FqDklu6OLUXpsQ%2B669EqZ7M5T7ByJ6XZx1iGstyE7Y6VhP3R9yARI8edd4WVGAdYWMdDCyu7bCBjqkAUyxrxTbLzl1WE4K%2FKJhfCh5GCVRanfFPSwRkslgQ45kiIcjbmZBzABXy0mjwJL0MDAQ0Tw%2Bxu6I5DgDsxrS9xmEw%2BpR2XHL8EQemm%2FoZnNe%2BxUIkaPT6BlB2J5UVtNU2%2B3%2F270FGBNy6sbWKLD54%2BwPu%2F2%2BUFbOziK6238USl0ni70DTpUr9UwIlFIMSJ2S%2BhrjgvvYfza8u0nZC0bxWYn%2FNQ8P&X-Amz-Signature=30824b4b198a3604c3f25ac695ca706d59a321deaa12b506a697ba9b2e9956bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
