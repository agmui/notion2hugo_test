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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEEXVQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTF13ncZCNy522ULCQT0HRl6F0mCbk6jLhLz%2B8AmRJzAiEAjdrOgrAofnFL5m8lVKyd2pyxTTPj5J6abm2sfRD%2FMqoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNe%2FrRAdhMihHsz3hyrcA%2BE5tIiElTG6MRcpvw0dqnpW9uALKcdyW%2FXeHdrEO0YEJO8vbWKKyogXLBjll5EhuvA%2FOdxDh0Qzc%2BDg8vw8TempjAWEo8trt1lL5ayE8Qrt6hY4qf3RROeuspeKoeRgp09%2B5NLA6ihAYYkuNiWcO9h916clSvK6DXxCb8hdSzZuJZKQl8sRVOK7xaGulK6tiyx%2BKCRfTUrGkgX0crxG6Vrrm1FhsV3t6B3%2F5s8ThGEnJyihygqrnXnP6CZk3m7FQF92twMedTrwfRKRJ%2Bh6fTB16LVZosdt9UvahlyeyNApz%2FvUjbTIzCkJOgkCeEGQfFPD8E7hrbCezWd2YC7JNZpW6CPSOufLCqc4jn71RVDpVAvvbtgyM6bMmed87Xen%2BPqwsbc4Gyz5MWCxYH4J%2FLBzJjyNhKKpDghFlWVUmiSo%2BaP1aDHh8Ohb%2FIwhxEzUNeo5RsY19rkDh2ut0OVBY0YNng95WML4BRWCmhSIjR7dYQBh%2BdM44buE5EXTgdbD87rbmUw20IJ6849%2FRZSDHVqakQ3a2%2Fha87i65%2B17zxKJCYAZZg%2Fwg%2FldxEbNgup9v6Im%2B%2FzQd%2BAaUnBWN5S46ZGnJXfND1JVbYDuXuzex3lAU0ZUH4J0eAYK0utsMILBqMEGOqUBdWOatcxenqXW6nvfnlsQiK0p1Tt47x08hHNKN%2FfIf23P5kH11R1oG9cHLDQNRFPvT360nSnFjd0rDxbGXh0FDggf8389zHJUTstLIjheBVOjBDFZFxWOPhDKcA95rkHo%2F7s%2Bow898%2BLgwR%2Fq6CalMbNlD02Wd%2BNf16tgnM9YrB%2FHNx3P4OnHGPHrnTcZgppPR9vjzKQ8bOohFbWxoX3GfqrnQlfi&X-Amz-Signature=8d0e4dbe7f793575112e23b3e0aa2e568bfba032ebf2e08dd842c98e30a35a16&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEEXVQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTF13ncZCNy522ULCQT0HRl6F0mCbk6jLhLz%2B8AmRJzAiEAjdrOgrAofnFL5m8lVKyd2pyxTTPj5J6abm2sfRD%2FMqoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNe%2FrRAdhMihHsz3hyrcA%2BE5tIiElTG6MRcpvw0dqnpW9uALKcdyW%2FXeHdrEO0YEJO8vbWKKyogXLBjll5EhuvA%2FOdxDh0Qzc%2BDg8vw8TempjAWEo8trt1lL5ayE8Qrt6hY4qf3RROeuspeKoeRgp09%2B5NLA6ihAYYkuNiWcO9h916clSvK6DXxCb8hdSzZuJZKQl8sRVOK7xaGulK6tiyx%2BKCRfTUrGkgX0crxG6Vrrm1FhsV3t6B3%2F5s8ThGEnJyihygqrnXnP6CZk3m7FQF92twMedTrwfRKRJ%2Bh6fTB16LVZosdt9UvahlyeyNApz%2FvUjbTIzCkJOgkCeEGQfFPD8E7hrbCezWd2YC7JNZpW6CPSOufLCqc4jn71RVDpVAvvbtgyM6bMmed87Xen%2BPqwsbc4Gyz5MWCxYH4J%2FLBzJjyNhKKpDghFlWVUmiSo%2BaP1aDHh8Ohb%2FIwhxEzUNeo5RsY19rkDh2ut0OVBY0YNng95WML4BRWCmhSIjR7dYQBh%2BdM44buE5EXTgdbD87rbmUw20IJ6849%2FRZSDHVqakQ3a2%2Fha87i65%2B17zxKJCYAZZg%2Fwg%2FldxEbNgup9v6Im%2B%2FzQd%2BAaUnBWN5S46ZGnJXfND1JVbYDuXuzex3lAU0ZUH4J0eAYK0utsMILBqMEGOqUBdWOatcxenqXW6nvfnlsQiK0p1Tt47x08hHNKN%2FfIf23P5kH11R1oG9cHLDQNRFPvT360nSnFjd0rDxbGXh0FDggf8389zHJUTstLIjheBVOjBDFZFxWOPhDKcA95rkHo%2F7s%2Bow898%2BLgwR%2Fq6CalMbNlD02Wd%2BNf16tgnM9YrB%2FHNx3P4OnHGPHrnTcZgppPR9vjzKQ8bOohFbWxoX3GfqrnQlfi&X-Amz-Signature=0be4fd7b2d7ed27d3f8f362eb570a2313c6952fb7364526675f982dd07686b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEEXVQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTF13ncZCNy522ULCQT0HRl6F0mCbk6jLhLz%2B8AmRJzAiEAjdrOgrAofnFL5m8lVKyd2pyxTTPj5J6abm2sfRD%2FMqoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNe%2FrRAdhMihHsz3hyrcA%2BE5tIiElTG6MRcpvw0dqnpW9uALKcdyW%2FXeHdrEO0YEJO8vbWKKyogXLBjll5EhuvA%2FOdxDh0Qzc%2BDg8vw8TempjAWEo8trt1lL5ayE8Qrt6hY4qf3RROeuspeKoeRgp09%2B5NLA6ihAYYkuNiWcO9h916clSvK6DXxCb8hdSzZuJZKQl8sRVOK7xaGulK6tiyx%2BKCRfTUrGkgX0crxG6Vrrm1FhsV3t6B3%2F5s8ThGEnJyihygqrnXnP6CZk3m7FQF92twMedTrwfRKRJ%2Bh6fTB16LVZosdt9UvahlyeyNApz%2FvUjbTIzCkJOgkCeEGQfFPD8E7hrbCezWd2YC7JNZpW6CPSOufLCqc4jn71RVDpVAvvbtgyM6bMmed87Xen%2BPqwsbc4Gyz5MWCxYH4J%2FLBzJjyNhKKpDghFlWVUmiSo%2BaP1aDHh8Ohb%2FIwhxEzUNeo5RsY19rkDh2ut0OVBY0YNng95WML4BRWCmhSIjR7dYQBh%2BdM44buE5EXTgdbD87rbmUw20IJ6849%2FRZSDHVqakQ3a2%2Fha87i65%2B17zxKJCYAZZg%2Fwg%2FldxEbNgup9v6Im%2B%2FzQd%2BAaUnBWN5S46ZGnJXfND1JVbYDuXuzex3lAU0ZUH4J0eAYK0utsMILBqMEGOqUBdWOatcxenqXW6nvfnlsQiK0p1Tt47x08hHNKN%2FfIf23P5kH11R1oG9cHLDQNRFPvT360nSnFjd0rDxbGXh0FDggf8389zHJUTstLIjheBVOjBDFZFxWOPhDKcA95rkHo%2F7s%2Bow898%2BLgwR%2Fq6CalMbNlD02Wd%2BNf16tgnM9YrB%2FHNx3P4OnHGPHrnTcZgppPR9vjzKQ8bOohFbWxoX3GfqrnQlfi&X-Amz-Signature=57955451b29066adf579768719b6888cc8ca504d2228ce5bc146768344a2229c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEEXVQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTF13ncZCNy522ULCQT0HRl6F0mCbk6jLhLz%2B8AmRJzAiEAjdrOgrAofnFL5m8lVKyd2pyxTTPj5J6abm2sfRD%2FMqoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNe%2FrRAdhMihHsz3hyrcA%2BE5tIiElTG6MRcpvw0dqnpW9uALKcdyW%2FXeHdrEO0YEJO8vbWKKyogXLBjll5EhuvA%2FOdxDh0Qzc%2BDg8vw8TempjAWEo8trt1lL5ayE8Qrt6hY4qf3RROeuspeKoeRgp09%2B5NLA6ihAYYkuNiWcO9h916clSvK6DXxCb8hdSzZuJZKQl8sRVOK7xaGulK6tiyx%2BKCRfTUrGkgX0crxG6Vrrm1FhsV3t6B3%2F5s8ThGEnJyihygqrnXnP6CZk3m7FQF92twMedTrwfRKRJ%2Bh6fTB16LVZosdt9UvahlyeyNApz%2FvUjbTIzCkJOgkCeEGQfFPD8E7hrbCezWd2YC7JNZpW6CPSOufLCqc4jn71RVDpVAvvbtgyM6bMmed87Xen%2BPqwsbc4Gyz5MWCxYH4J%2FLBzJjyNhKKpDghFlWVUmiSo%2BaP1aDHh8Ohb%2FIwhxEzUNeo5RsY19rkDh2ut0OVBY0YNng95WML4BRWCmhSIjR7dYQBh%2BdM44buE5EXTgdbD87rbmUw20IJ6849%2FRZSDHVqakQ3a2%2Fha87i65%2B17zxKJCYAZZg%2Fwg%2FldxEbNgup9v6Im%2B%2FzQd%2BAaUnBWN5S46ZGnJXfND1JVbYDuXuzex3lAU0ZUH4J0eAYK0utsMILBqMEGOqUBdWOatcxenqXW6nvfnlsQiK0p1Tt47x08hHNKN%2FfIf23P5kH11R1oG9cHLDQNRFPvT360nSnFjd0rDxbGXh0FDggf8389zHJUTstLIjheBVOjBDFZFxWOPhDKcA95rkHo%2F7s%2Bow898%2BLgwR%2Fq6CalMbNlD02Wd%2BNf16tgnM9YrB%2FHNx3P4OnHGPHrnTcZgppPR9vjzKQ8bOohFbWxoX3GfqrnQlfi&X-Amz-Signature=8c3e556ceb7ed866f683402b2a373278867eaa7bd28035758b0a3d2f138dfa83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEEXVQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTF13ncZCNy522ULCQT0HRl6F0mCbk6jLhLz%2B8AmRJzAiEAjdrOgrAofnFL5m8lVKyd2pyxTTPj5J6abm2sfRD%2FMqoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNe%2FrRAdhMihHsz3hyrcA%2BE5tIiElTG6MRcpvw0dqnpW9uALKcdyW%2FXeHdrEO0YEJO8vbWKKyogXLBjll5EhuvA%2FOdxDh0Qzc%2BDg8vw8TempjAWEo8trt1lL5ayE8Qrt6hY4qf3RROeuspeKoeRgp09%2B5NLA6ihAYYkuNiWcO9h916clSvK6DXxCb8hdSzZuJZKQl8sRVOK7xaGulK6tiyx%2BKCRfTUrGkgX0crxG6Vrrm1FhsV3t6B3%2F5s8ThGEnJyihygqrnXnP6CZk3m7FQF92twMedTrwfRKRJ%2Bh6fTB16LVZosdt9UvahlyeyNApz%2FvUjbTIzCkJOgkCeEGQfFPD8E7hrbCezWd2YC7JNZpW6CPSOufLCqc4jn71RVDpVAvvbtgyM6bMmed87Xen%2BPqwsbc4Gyz5MWCxYH4J%2FLBzJjyNhKKpDghFlWVUmiSo%2BaP1aDHh8Ohb%2FIwhxEzUNeo5RsY19rkDh2ut0OVBY0YNng95WML4BRWCmhSIjR7dYQBh%2BdM44buE5EXTgdbD87rbmUw20IJ6849%2FRZSDHVqakQ3a2%2Fha87i65%2B17zxKJCYAZZg%2Fwg%2FldxEbNgup9v6Im%2B%2FzQd%2BAaUnBWN5S46ZGnJXfND1JVbYDuXuzex3lAU0ZUH4J0eAYK0utsMILBqMEGOqUBdWOatcxenqXW6nvfnlsQiK0p1Tt47x08hHNKN%2FfIf23P5kH11R1oG9cHLDQNRFPvT360nSnFjd0rDxbGXh0FDggf8389zHJUTstLIjheBVOjBDFZFxWOPhDKcA95rkHo%2F7s%2Bow898%2BLgwR%2Fq6CalMbNlD02Wd%2BNf16tgnM9YrB%2FHNx3P4OnHGPHrnTcZgppPR9vjzKQ8bOohFbWxoX3GfqrnQlfi&X-Amz-Signature=ab9c9965318f4e927cefc911a63cda6addade0c6421ebd78a26737a99aed038c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEEXVQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTF13ncZCNy522ULCQT0HRl6F0mCbk6jLhLz%2B8AmRJzAiEAjdrOgrAofnFL5m8lVKyd2pyxTTPj5J6abm2sfRD%2FMqoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNe%2FrRAdhMihHsz3hyrcA%2BE5tIiElTG6MRcpvw0dqnpW9uALKcdyW%2FXeHdrEO0YEJO8vbWKKyogXLBjll5EhuvA%2FOdxDh0Qzc%2BDg8vw8TempjAWEo8trt1lL5ayE8Qrt6hY4qf3RROeuspeKoeRgp09%2B5NLA6ihAYYkuNiWcO9h916clSvK6DXxCb8hdSzZuJZKQl8sRVOK7xaGulK6tiyx%2BKCRfTUrGkgX0crxG6Vrrm1FhsV3t6B3%2F5s8ThGEnJyihygqrnXnP6CZk3m7FQF92twMedTrwfRKRJ%2Bh6fTB16LVZosdt9UvahlyeyNApz%2FvUjbTIzCkJOgkCeEGQfFPD8E7hrbCezWd2YC7JNZpW6CPSOufLCqc4jn71RVDpVAvvbtgyM6bMmed87Xen%2BPqwsbc4Gyz5MWCxYH4J%2FLBzJjyNhKKpDghFlWVUmiSo%2BaP1aDHh8Ohb%2FIwhxEzUNeo5RsY19rkDh2ut0OVBY0YNng95WML4BRWCmhSIjR7dYQBh%2BdM44buE5EXTgdbD87rbmUw20IJ6849%2FRZSDHVqakQ3a2%2Fha87i65%2B17zxKJCYAZZg%2Fwg%2FldxEbNgup9v6Im%2B%2FzQd%2BAaUnBWN5S46ZGnJXfND1JVbYDuXuzex3lAU0ZUH4J0eAYK0utsMILBqMEGOqUBdWOatcxenqXW6nvfnlsQiK0p1Tt47x08hHNKN%2FfIf23P5kH11R1oG9cHLDQNRFPvT360nSnFjd0rDxbGXh0FDggf8389zHJUTstLIjheBVOjBDFZFxWOPhDKcA95rkHo%2F7s%2Bow898%2BLgwR%2Fq6CalMbNlD02Wd%2BNf16tgnM9YrB%2FHNx3P4OnHGPHrnTcZgppPR9vjzKQ8bOohFbWxoX3GfqrnQlfi&X-Amz-Signature=c2f637aa949bc34b3e7b68d7d4c0ae500511baf8ac283cf285a4b79f3bbb6236&X-Amz-SignedHeaders=host&x-id=GetObject)
