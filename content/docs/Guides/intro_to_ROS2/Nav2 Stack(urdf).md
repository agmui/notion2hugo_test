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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LCIFAG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb0mpgaz42ZjvuG0SnjW%2BGG6gRwtHm4rCgv1hqWKOVAiEAl86S3AfJgUjer%2FZEWQlucq9jN10UfVAFOtZqZQDNUOgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2cLbYy3XBduOMPBCrcA%2FDr%2BBWXbYJprxDzXcP%2FmEoOykFjTY5nEPqLTrmetmSRI%2Bkh80D1gIKEeuyql2oKgmsWGOCap3LjEQwvXycy%2Buer6ge7uwhsZ6E5fnGytccc1G9g%2F%2FCdxrAM%2FS9TBeJx8JbpkU%2FNu%2F6GpzWtJ3k1uvpsv5UVid1Usy2n65ht0gjAfeaxIBSdKTa6s6nLFO4PLan5vF%2FVQ%2Br9aqdX4NyMP0CslLzWfuSHc7FkQ7TvOQGh%2Fcd9I28stXcgClsIhhEOkS8awG7U9fUjvCwZ4z38YDpzBN3njlKdCsCmo4vcyx6U0jXpTptaRdJp%2BO2%2FWSUDwpKoazpyFB6Fm4INQthjFQqRWJSNxpvG%2FVUG1FCmDbI6RZxUqoJvg5NkwTI8%2Fr%2Bk0DxmFzMxWrAlykoAfPbxp7qRpaPVoM7s4TABSgKIgMZNR8rBvnHNqy70ZavLdphTC%2BP0YDUoIpt7p3U5QwdInMXIm4kGWW4EoDKwy0N%2Bk3ahEcpOa2ArnGrnrWpC3AS%2BlAKQueuRSqTZVHoI2TulbjVYgagiN5ayPxkX6Ow3LV%2FUb2H1XSZAS%2F%2BssXVYW1eIww5zkfiTf2jS2%2FcQIY8nypnq175Mni%2FNJ57x4TSr00Vl7jgBNei2TRCukS13MMzzysIGOqUBy049TKTbJNCC7FHawXoqDM5vTJCVVRFUKGdB91nHW%2B3YyGI8ng3MqCNBi1VtjZ9%2B6Bu1RZ1xe%2Fk8ns0bk3GJqFdSbgqs6QHmntG3lkWAenfVlt%2BdrZtQFd7xQK2uRLAloNXmCibcAInZ6DodW3iMkXw92TSgqIP0vDhq0kFm672OFGQpPpDtyVOeGoAGB20trl1zM6IeRYj98rsQNAGmsoYdjQ8r&X-Amz-Signature=c42936fd2cdbf000a91f5e1610876a6236327b29cca2cf9b568d012c5b8fbac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LCIFAG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb0mpgaz42ZjvuG0SnjW%2BGG6gRwtHm4rCgv1hqWKOVAiEAl86S3AfJgUjer%2FZEWQlucq9jN10UfVAFOtZqZQDNUOgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2cLbYy3XBduOMPBCrcA%2FDr%2BBWXbYJprxDzXcP%2FmEoOykFjTY5nEPqLTrmetmSRI%2Bkh80D1gIKEeuyql2oKgmsWGOCap3LjEQwvXycy%2Buer6ge7uwhsZ6E5fnGytccc1G9g%2F%2FCdxrAM%2FS9TBeJx8JbpkU%2FNu%2F6GpzWtJ3k1uvpsv5UVid1Usy2n65ht0gjAfeaxIBSdKTa6s6nLFO4PLan5vF%2FVQ%2Br9aqdX4NyMP0CslLzWfuSHc7FkQ7TvOQGh%2Fcd9I28stXcgClsIhhEOkS8awG7U9fUjvCwZ4z38YDpzBN3njlKdCsCmo4vcyx6U0jXpTptaRdJp%2BO2%2FWSUDwpKoazpyFB6Fm4INQthjFQqRWJSNxpvG%2FVUG1FCmDbI6RZxUqoJvg5NkwTI8%2Fr%2Bk0DxmFzMxWrAlykoAfPbxp7qRpaPVoM7s4TABSgKIgMZNR8rBvnHNqy70ZavLdphTC%2BP0YDUoIpt7p3U5QwdInMXIm4kGWW4EoDKwy0N%2Bk3ahEcpOa2ArnGrnrWpC3AS%2BlAKQueuRSqTZVHoI2TulbjVYgagiN5ayPxkX6Ow3LV%2FUb2H1XSZAS%2F%2BssXVYW1eIww5zkfiTf2jS2%2FcQIY8nypnq175Mni%2FNJ57x4TSr00Vl7jgBNei2TRCukS13MMzzysIGOqUBy049TKTbJNCC7FHawXoqDM5vTJCVVRFUKGdB91nHW%2B3YyGI8ng3MqCNBi1VtjZ9%2B6Bu1RZ1xe%2Fk8ns0bk3GJqFdSbgqs6QHmntG3lkWAenfVlt%2BdrZtQFd7xQK2uRLAloNXmCibcAInZ6DodW3iMkXw92TSgqIP0vDhq0kFm672OFGQpPpDtyVOeGoAGB20trl1zM6IeRYj98rsQNAGmsoYdjQ8r&X-Amz-Signature=57a43402e15ade8a148990c241af6db31ba9e68ea3872c8eea5269463566f609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LCIFAG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb0mpgaz42ZjvuG0SnjW%2BGG6gRwtHm4rCgv1hqWKOVAiEAl86S3AfJgUjer%2FZEWQlucq9jN10UfVAFOtZqZQDNUOgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2cLbYy3XBduOMPBCrcA%2FDr%2BBWXbYJprxDzXcP%2FmEoOykFjTY5nEPqLTrmetmSRI%2Bkh80D1gIKEeuyql2oKgmsWGOCap3LjEQwvXycy%2Buer6ge7uwhsZ6E5fnGytccc1G9g%2F%2FCdxrAM%2FS9TBeJx8JbpkU%2FNu%2F6GpzWtJ3k1uvpsv5UVid1Usy2n65ht0gjAfeaxIBSdKTa6s6nLFO4PLan5vF%2FVQ%2Br9aqdX4NyMP0CslLzWfuSHc7FkQ7TvOQGh%2Fcd9I28stXcgClsIhhEOkS8awG7U9fUjvCwZ4z38YDpzBN3njlKdCsCmo4vcyx6U0jXpTptaRdJp%2BO2%2FWSUDwpKoazpyFB6Fm4INQthjFQqRWJSNxpvG%2FVUG1FCmDbI6RZxUqoJvg5NkwTI8%2Fr%2Bk0DxmFzMxWrAlykoAfPbxp7qRpaPVoM7s4TABSgKIgMZNR8rBvnHNqy70ZavLdphTC%2BP0YDUoIpt7p3U5QwdInMXIm4kGWW4EoDKwy0N%2Bk3ahEcpOa2ArnGrnrWpC3AS%2BlAKQueuRSqTZVHoI2TulbjVYgagiN5ayPxkX6Ow3LV%2FUb2H1XSZAS%2F%2BssXVYW1eIww5zkfiTf2jS2%2FcQIY8nypnq175Mni%2FNJ57x4TSr00Vl7jgBNei2TRCukS13MMzzysIGOqUBy049TKTbJNCC7FHawXoqDM5vTJCVVRFUKGdB91nHW%2B3YyGI8ng3MqCNBi1VtjZ9%2B6Bu1RZ1xe%2Fk8ns0bk3GJqFdSbgqs6QHmntG3lkWAenfVlt%2BdrZtQFd7xQK2uRLAloNXmCibcAInZ6DodW3iMkXw92TSgqIP0vDhq0kFm672OFGQpPpDtyVOeGoAGB20trl1zM6IeRYj98rsQNAGmsoYdjQ8r&X-Amz-Signature=849f37c57f731801b05be8f0b1b9f749d5e8637290ec5b9669f018d311caa821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LCIFAG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb0mpgaz42ZjvuG0SnjW%2BGG6gRwtHm4rCgv1hqWKOVAiEAl86S3AfJgUjer%2FZEWQlucq9jN10UfVAFOtZqZQDNUOgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2cLbYy3XBduOMPBCrcA%2FDr%2BBWXbYJprxDzXcP%2FmEoOykFjTY5nEPqLTrmetmSRI%2Bkh80D1gIKEeuyql2oKgmsWGOCap3LjEQwvXycy%2Buer6ge7uwhsZ6E5fnGytccc1G9g%2F%2FCdxrAM%2FS9TBeJx8JbpkU%2FNu%2F6GpzWtJ3k1uvpsv5UVid1Usy2n65ht0gjAfeaxIBSdKTa6s6nLFO4PLan5vF%2FVQ%2Br9aqdX4NyMP0CslLzWfuSHc7FkQ7TvOQGh%2Fcd9I28stXcgClsIhhEOkS8awG7U9fUjvCwZ4z38YDpzBN3njlKdCsCmo4vcyx6U0jXpTptaRdJp%2BO2%2FWSUDwpKoazpyFB6Fm4INQthjFQqRWJSNxpvG%2FVUG1FCmDbI6RZxUqoJvg5NkwTI8%2Fr%2Bk0DxmFzMxWrAlykoAfPbxp7qRpaPVoM7s4TABSgKIgMZNR8rBvnHNqy70ZavLdphTC%2BP0YDUoIpt7p3U5QwdInMXIm4kGWW4EoDKwy0N%2Bk3ahEcpOa2ArnGrnrWpC3AS%2BlAKQueuRSqTZVHoI2TulbjVYgagiN5ayPxkX6Ow3LV%2FUb2H1XSZAS%2F%2BssXVYW1eIww5zkfiTf2jS2%2FcQIY8nypnq175Mni%2FNJ57x4TSr00Vl7jgBNei2TRCukS13MMzzysIGOqUBy049TKTbJNCC7FHawXoqDM5vTJCVVRFUKGdB91nHW%2B3YyGI8ng3MqCNBi1VtjZ9%2B6Bu1RZ1xe%2Fk8ns0bk3GJqFdSbgqs6QHmntG3lkWAenfVlt%2BdrZtQFd7xQK2uRLAloNXmCibcAInZ6DodW3iMkXw92TSgqIP0vDhq0kFm672OFGQpPpDtyVOeGoAGB20trl1zM6IeRYj98rsQNAGmsoYdjQ8r&X-Amz-Signature=2a72877c6eb65fd50c44d8a077999ab7d84403cbd544656649e45a2bcdfa9a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LCIFAG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb0mpgaz42ZjvuG0SnjW%2BGG6gRwtHm4rCgv1hqWKOVAiEAl86S3AfJgUjer%2FZEWQlucq9jN10UfVAFOtZqZQDNUOgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2cLbYy3XBduOMPBCrcA%2FDr%2BBWXbYJprxDzXcP%2FmEoOykFjTY5nEPqLTrmetmSRI%2Bkh80D1gIKEeuyql2oKgmsWGOCap3LjEQwvXycy%2Buer6ge7uwhsZ6E5fnGytccc1G9g%2F%2FCdxrAM%2FS9TBeJx8JbpkU%2FNu%2F6GpzWtJ3k1uvpsv5UVid1Usy2n65ht0gjAfeaxIBSdKTa6s6nLFO4PLan5vF%2FVQ%2Br9aqdX4NyMP0CslLzWfuSHc7FkQ7TvOQGh%2Fcd9I28stXcgClsIhhEOkS8awG7U9fUjvCwZ4z38YDpzBN3njlKdCsCmo4vcyx6U0jXpTptaRdJp%2BO2%2FWSUDwpKoazpyFB6Fm4INQthjFQqRWJSNxpvG%2FVUG1FCmDbI6RZxUqoJvg5NkwTI8%2Fr%2Bk0DxmFzMxWrAlykoAfPbxp7qRpaPVoM7s4TABSgKIgMZNR8rBvnHNqy70ZavLdphTC%2BP0YDUoIpt7p3U5QwdInMXIm4kGWW4EoDKwy0N%2Bk3ahEcpOa2ArnGrnrWpC3AS%2BlAKQueuRSqTZVHoI2TulbjVYgagiN5ayPxkX6Ow3LV%2FUb2H1XSZAS%2F%2BssXVYW1eIww5zkfiTf2jS2%2FcQIY8nypnq175Mni%2FNJ57x4TSr00Vl7jgBNei2TRCukS13MMzzysIGOqUBy049TKTbJNCC7FHawXoqDM5vTJCVVRFUKGdB91nHW%2B3YyGI8ng3MqCNBi1VtjZ9%2B6Bu1RZ1xe%2Fk8ns0bk3GJqFdSbgqs6QHmntG3lkWAenfVlt%2BdrZtQFd7xQK2uRLAloNXmCibcAInZ6DodW3iMkXw92TSgqIP0vDhq0kFm672OFGQpPpDtyVOeGoAGB20trl1zM6IeRYj98rsQNAGmsoYdjQ8r&X-Amz-Signature=34ef31547eb31ebd783bb7f2f43223a511845ce03b05baa164607722702c1e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LCIFAG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdb0mpgaz42ZjvuG0SnjW%2BGG6gRwtHm4rCgv1hqWKOVAiEAl86S3AfJgUjer%2FZEWQlucq9jN10UfVAFOtZqZQDNUOgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2cLbYy3XBduOMPBCrcA%2FDr%2BBWXbYJprxDzXcP%2FmEoOykFjTY5nEPqLTrmetmSRI%2Bkh80D1gIKEeuyql2oKgmsWGOCap3LjEQwvXycy%2Buer6ge7uwhsZ6E5fnGytccc1G9g%2F%2FCdxrAM%2FS9TBeJx8JbpkU%2FNu%2F6GpzWtJ3k1uvpsv5UVid1Usy2n65ht0gjAfeaxIBSdKTa6s6nLFO4PLan5vF%2FVQ%2Br9aqdX4NyMP0CslLzWfuSHc7FkQ7TvOQGh%2Fcd9I28stXcgClsIhhEOkS8awG7U9fUjvCwZ4z38YDpzBN3njlKdCsCmo4vcyx6U0jXpTptaRdJp%2BO2%2FWSUDwpKoazpyFB6Fm4INQthjFQqRWJSNxpvG%2FVUG1FCmDbI6RZxUqoJvg5NkwTI8%2Fr%2Bk0DxmFzMxWrAlykoAfPbxp7qRpaPVoM7s4TABSgKIgMZNR8rBvnHNqy70ZavLdphTC%2BP0YDUoIpt7p3U5QwdInMXIm4kGWW4EoDKwy0N%2Bk3ahEcpOa2ArnGrnrWpC3AS%2BlAKQueuRSqTZVHoI2TulbjVYgagiN5ayPxkX6Ow3LV%2FUb2H1XSZAS%2F%2BssXVYW1eIww5zkfiTf2jS2%2FcQIY8nypnq175Mni%2FNJ57x4TSr00Vl7jgBNei2TRCukS13MMzzysIGOqUBy049TKTbJNCC7FHawXoqDM5vTJCVVRFUKGdB91nHW%2B3YyGI8ng3MqCNBi1VtjZ9%2B6Bu1RZ1xe%2Fk8ns0bk3GJqFdSbgqs6QHmntG3lkWAenfVlt%2BdrZtQFd7xQK2uRLAloNXmCibcAInZ6DodW3iMkXw92TSgqIP0vDhq0kFm672OFGQpPpDtyVOeGoAGB20trl1zM6IeRYj98rsQNAGmsoYdjQ8r&X-Amz-Signature=b4d821b6926cdde82cd291ac509e5a46756b3b0f1f8703cac8c79e86c2314792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
