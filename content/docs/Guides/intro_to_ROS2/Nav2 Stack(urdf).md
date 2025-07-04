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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4U7JUS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCSpIitkr5Jmni8K4BK45AKI9Bo6Yir5QxfaV3Bly0L%2FgIgL1Zewx2FiqVLVKqWiq%2FlLSVssA0h2Cl1R%2BimEBPzM5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGY7GQXfseM3v7HEUSrcA6MMbUE291hqBZwwSvtacHI0dGbks2ZADfMnTOrDhQ7Dxqi1J6xDMugRN7s0xHgjLSqkU16wKtuFw%2FcoigaVRp4U%2FQSUvQ7xlaZhTlZjHZCLDUJQumd5e9Pd%2FIv9WechvhJ%2FGxIoT4Gowl%2FSD8qmMsJvItNCyrnqT1tSkMeoHV2wRI4myQBn9qjvFqxbmwdt%2Fh5ny0PRIPsMdACIWL8NexA3iVVXgz%2BJ24BzIJJS3Q5RM1L7VDydpV%2BiSSc0HrWtdfzBH9Dj%2BInESKntv2F66nBTJkeIgf%2FdVa7BNgVH%2Fjt52LI3PhLj4j%2FW4AdVQ8aSzKOrwid5xVlFTcznlAwGYQgANFyH%2BFqIHXEIG0OLmaF86Pg9wG1K9Q0VtD5wndKzqdhE7XBFQTLwsRTg%2BwSuZJu2Ih5BxoPHkDgBKzxLv2hUeISTI6o55qJlmlBZmG%2BIBRI0digWI2jOrOi10hrlMWcR7M%2FVRTp%2B6YmxcZCzRYrXJ5nRLwTAWkJF30NFBNWI%2BKP7nrYHCt8DKfOnK%2BHM2T6EC3nEtmnLEAHRhp41GnyL1CEVfQ5IMD1j8s9%2F6UOZAibIHEn8TK3qpLcL1u%2FSt6rxcaEkz%2F3psnxrwEemzczD2JVF6TCRs9NxBH3kMI6WoMMGOqUBJqCRjASon5x98egbJwvTQ0mFHAQflaH3uyDcTSnM38hDr1HY2vo23sP7JB82TtCicc6YYPH4YstkY85YYRXs2qhCPqdSUHq%2BlwVDR3O%2BELuq%2FRylv8LNrev44knkRATHQiSUURWoF6cJkHtz5VcBN8pDchKr%2FYo3u2CE11CZzhkPosJwARhxPuxiQCsODFJZoGmqNvBTkaZYrwmI8QCiV%2FeB5OmQ&X-Amz-Signature=33eb8c4a664fe554eba50b3a7f3667c16f5085581d7567bb50728dae0211f597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4U7JUS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCSpIitkr5Jmni8K4BK45AKI9Bo6Yir5QxfaV3Bly0L%2FgIgL1Zewx2FiqVLVKqWiq%2FlLSVssA0h2Cl1R%2BimEBPzM5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGY7GQXfseM3v7HEUSrcA6MMbUE291hqBZwwSvtacHI0dGbks2ZADfMnTOrDhQ7Dxqi1J6xDMugRN7s0xHgjLSqkU16wKtuFw%2FcoigaVRp4U%2FQSUvQ7xlaZhTlZjHZCLDUJQumd5e9Pd%2FIv9WechvhJ%2FGxIoT4Gowl%2FSD8qmMsJvItNCyrnqT1tSkMeoHV2wRI4myQBn9qjvFqxbmwdt%2Fh5ny0PRIPsMdACIWL8NexA3iVVXgz%2BJ24BzIJJS3Q5RM1L7VDydpV%2BiSSc0HrWtdfzBH9Dj%2BInESKntv2F66nBTJkeIgf%2FdVa7BNgVH%2Fjt52LI3PhLj4j%2FW4AdVQ8aSzKOrwid5xVlFTcznlAwGYQgANFyH%2BFqIHXEIG0OLmaF86Pg9wG1K9Q0VtD5wndKzqdhE7XBFQTLwsRTg%2BwSuZJu2Ih5BxoPHkDgBKzxLv2hUeISTI6o55qJlmlBZmG%2BIBRI0digWI2jOrOi10hrlMWcR7M%2FVRTp%2B6YmxcZCzRYrXJ5nRLwTAWkJF30NFBNWI%2BKP7nrYHCt8DKfOnK%2BHM2T6EC3nEtmnLEAHRhp41GnyL1CEVfQ5IMD1j8s9%2F6UOZAibIHEn8TK3qpLcL1u%2FSt6rxcaEkz%2F3psnxrwEemzczD2JVF6TCRs9NxBH3kMI6WoMMGOqUBJqCRjASon5x98egbJwvTQ0mFHAQflaH3uyDcTSnM38hDr1HY2vo23sP7JB82TtCicc6YYPH4YstkY85YYRXs2qhCPqdSUHq%2BlwVDR3O%2BELuq%2FRylv8LNrev44knkRATHQiSUURWoF6cJkHtz5VcBN8pDchKr%2FYo3u2CE11CZzhkPosJwARhxPuxiQCsODFJZoGmqNvBTkaZYrwmI8QCiV%2FeB5OmQ&X-Amz-Signature=486397e341fdd52e65b4228a0a1a4ae41791e5b2dab3d6023bc913a55cd1f1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4U7JUS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCSpIitkr5Jmni8K4BK45AKI9Bo6Yir5QxfaV3Bly0L%2FgIgL1Zewx2FiqVLVKqWiq%2FlLSVssA0h2Cl1R%2BimEBPzM5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGY7GQXfseM3v7HEUSrcA6MMbUE291hqBZwwSvtacHI0dGbks2ZADfMnTOrDhQ7Dxqi1J6xDMugRN7s0xHgjLSqkU16wKtuFw%2FcoigaVRp4U%2FQSUvQ7xlaZhTlZjHZCLDUJQumd5e9Pd%2FIv9WechvhJ%2FGxIoT4Gowl%2FSD8qmMsJvItNCyrnqT1tSkMeoHV2wRI4myQBn9qjvFqxbmwdt%2Fh5ny0PRIPsMdACIWL8NexA3iVVXgz%2BJ24BzIJJS3Q5RM1L7VDydpV%2BiSSc0HrWtdfzBH9Dj%2BInESKntv2F66nBTJkeIgf%2FdVa7BNgVH%2Fjt52LI3PhLj4j%2FW4AdVQ8aSzKOrwid5xVlFTcznlAwGYQgANFyH%2BFqIHXEIG0OLmaF86Pg9wG1K9Q0VtD5wndKzqdhE7XBFQTLwsRTg%2BwSuZJu2Ih5BxoPHkDgBKzxLv2hUeISTI6o55qJlmlBZmG%2BIBRI0digWI2jOrOi10hrlMWcR7M%2FVRTp%2B6YmxcZCzRYrXJ5nRLwTAWkJF30NFBNWI%2BKP7nrYHCt8DKfOnK%2BHM2T6EC3nEtmnLEAHRhp41GnyL1CEVfQ5IMD1j8s9%2F6UOZAibIHEn8TK3qpLcL1u%2FSt6rxcaEkz%2F3psnxrwEemzczD2JVF6TCRs9NxBH3kMI6WoMMGOqUBJqCRjASon5x98egbJwvTQ0mFHAQflaH3uyDcTSnM38hDr1HY2vo23sP7JB82TtCicc6YYPH4YstkY85YYRXs2qhCPqdSUHq%2BlwVDR3O%2BELuq%2FRylv8LNrev44knkRATHQiSUURWoF6cJkHtz5VcBN8pDchKr%2FYo3u2CE11CZzhkPosJwARhxPuxiQCsODFJZoGmqNvBTkaZYrwmI8QCiV%2FeB5OmQ&X-Amz-Signature=54ac5c5439c38aa91a66cbbe1781525c0c24651e9e6eff7ffc1647f1747689d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4U7JUS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCSpIitkr5Jmni8K4BK45AKI9Bo6Yir5QxfaV3Bly0L%2FgIgL1Zewx2FiqVLVKqWiq%2FlLSVssA0h2Cl1R%2BimEBPzM5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGY7GQXfseM3v7HEUSrcA6MMbUE291hqBZwwSvtacHI0dGbks2ZADfMnTOrDhQ7Dxqi1J6xDMugRN7s0xHgjLSqkU16wKtuFw%2FcoigaVRp4U%2FQSUvQ7xlaZhTlZjHZCLDUJQumd5e9Pd%2FIv9WechvhJ%2FGxIoT4Gowl%2FSD8qmMsJvItNCyrnqT1tSkMeoHV2wRI4myQBn9qjvFqxbmwdt%2Fh5ny0PRIPsMdACIWL8NexA3iVVXgz%2BJ24BzIJJS3Q5RM1L7VDydpV%2BiSSc0HrWtdfzBH9Dj%2BInESKntv2F66nBTJkeIgf%2FdVa7BNgVH%2Fjt52LI3PhLj4j%2FW4AdVQ8aSzKOrwid5xVlFTcznlAwGYQgANFyH%2BFqIHXEIG0OLmaF86Pg9wG1K9Q0VtD5wndKzqdhE7XBFQTLwsRTg%2BwSuZJu2Ih5BxoPHkDgBKzxLv2hUeISTI6o55qJlmlBZmG%2BIBRI0digWI2jOrOi10hrlMWcR7M%2FVRTp%2B6YmxcZCzRYrXJ5nRLwTAWkJF30NFBNWI%2BKP7nrYHCt8DKfOnK%2BHM2T6EC3nEtmnLEAHRhp41GnyL1CEVfQ5IMD1j8s9%2F6UOZAibIHEn8TK3qpLcL1u%2FSt6rxcaEkz%2F3psnxrwEemzczD2JVF6TCRs9NxBH3kMI6WoMMGOqUBJqCRjASon5x98egbJwvTQ0mFHAQflaH3uyDcTSnM38hDr1HY2vo23sP7JB82TtCicc6YYPH4YstkY85YYRXs2qhCPqdSUHq%2BlwVDR3O%2BELuq%2FRylv8LNrev44knkRATHQiSUURWoF6cJkHtz5VcBN8pDchKr%2FYo3u2CE11CZzhkPosJwARhxPuxiQCsODFJZoGmqNvBTkaZYrwmI8QCiV%2FeB5OmQ&X-Amz-Signature=d67b377dc3289a0221b7ed42f86d80b299290ff88840be27708133d209b3e189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4U7JUS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCSpIitkr5Jmni8K4BK45AKI9Bo6Yir5QxfaV3Bly0L%2FgIgL1Zewx2FiqVLVKqWiq%2FlLSVssA0h2Cl1R%2BimEBPzM5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGY7GQXfseM3v7HEUSrcA6MMbUE291hqBZwwSvtacHI0dGbks2ZADfMnTOrDhQ7Dxqi1J6xDMugRN7s0xHgjLSqkU16wKtuFw%2FcoigaVRp4U%2FQSUvQ7xlaZhTlZjHZCLDUJQumd5e9Pd%2FIv9WechvhJ%2FGxIoT4Gowl%2FSD8qmMsJvItNCyrnqT1tSkMeoHV2wRI4myQBn9qjvFqxbmwdt%2Fh5ny0PRIPsMdACIWL8NexA3iVVXgz%2BJ24BzIJJS3Q5RM1L7VDydpV%2BiSSc0HrWtdfzBH9Dj%2BInESKntv2F66nBTJkeIgf%2FdVa7BNgVH%2Fjt52LI3PhLj4j%2FW4AdVQ8aSzKOrwid5xVlFTcznlAwGYQgANFyH%2BFqIHXEIG0OLmaF86Pg9wG1K9Q0VtD5wndKzqdhE7XBFQTLwsRTg%2BwSuZJu2Ih5BxoPHkDgBKzxLv2hUeISTI6o55qJlmlBZmG%2BIBRI0digWI2jOrOi10hrlMWcR7M%2FVRTp%2B6YmxcZCzRYrXJ5nRLwTAWkJF30NFBNWI%2BKP7nrYHCt8DKfOnK%2BHM2T6EC3nEtmnLEAHRhp41GnyL1CEVfQ5IMD1j8s9%2F6UOZAibIHEn8TK3qpLcL1u%2FSt6rxcaEkz%2F3psnxrwEemzczD2JVF6TCRs9NxBH3kMI6WoMMGOqUBJqCRjASon5x98egbJwvTQ0mFHAQflaH3uyDcTSnM38hDr1HY2vo23sP7JB82TtCicc6YYPH4YstkY85YYRXs2qhCPqdSUHq%2BlwVDR3O%2BELuq%2FRylv8LNrev44knkRATHQiSUURWoF6cJkHtz5VcBN8pDchKr%2FYo3u2CE11CZzhkPosJwARhxPuxiQCsODFJZoGmqNvBTkaZYrwmI8QCiV%2FeB5OmQ&X-Amz-Signature=2afd364ac362193c46738c2d2f9129e4fa6c9b52a4f7141c7864cf2134abcdb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4U7JUS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCSpIitkr5Jmni8K4BK45AKI9Bo6Yir5QxfaV3Bly0L%2FgIgL1Zewx2FiqVLVKqWiq%2FlLSVssA0h2Cl1R%2BimEBPzM5Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGY7GQXfseM3v7HEUSrcA6MMbUE291hqBZwwSvtacHI0dGbks2ZADfMnTOrDhQ7Dxqi1J6xDMugRN7s0xHgjLSqkU16wKtuFw%2FcoigaVRp4U%2FQSUvQ7xlaZhTlZjHZCLDUJQumd5e9Pd%2FIv9WechvhJ%2FGxIoT4Gowl%2FSD8qmMsJvItNCyrnqT1tSkMeoHV2wRI4myQBn9qjvFqxbmwdt%2Fh5ny0PRIPsMdACIWL8NexA3iVVXgz%2BJ24BzIJJS3Q5RM1L7VDydpV%2BiSSc0HrWtdfzBH9Dj%2BInESKntv2F66nBTJkeIgf%2FdVa7BNgVH%2Fjt52LI3PhLj4j%2FW4AdVQ8aSzKOrwid5xVlFTcznlAwGYQgANFyH%2BFqIHXEIG0OLmaF86Pg9wG1K9Q0VtD5wndKzqdhE7XBFQTLwsRTg%2BwSuZJu2Ih5BxoPHkDgBKzxLv2hUeISTI6o55qJlmlBZmG%2BIBRI0digWI2jOrOi10hrlMWcR7M%2FVRTp%2B6YmxcZCzRYrXJ5nRLwTAWkJF30NFBNWI%2BKP7nrYHCt8DKfOnK%2BHM2T6EC3nEtmnLEAHRhp41GnyL1CEVfQ5IMD1j8s9%2F6UOZAibIHEn8TK3qpLcL1u%2FSt6rxcaEkz%2F3psnxrwEemzczD2JVF6TCRs9NxBH3kMI6WoMMGOqUBJqCRjASon5x98egbJwvTQ0mFHAQflaH3uyDcTSnM38hDr1HY2vo23sP7JB82TtCicc6YYPH4YstkY85YYRXs2qhCPqdSUHq%2BlwVDR3O%2BELuq%2FRylv8LNrev44knkRATHQiSUURWoF6cJkHtz5VcBN8pDchKr%2FYo3u2CE11CZzhkPosJwARhxPuxiQCsODFJZoGmqNvBTkaZYrwmI8QCiV%2FeB5OmQ&X-Amz-Signature=675c8130a13f55d9d59b94c66df2f66e0e49dd4841a4e587eac8a190f263f26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
