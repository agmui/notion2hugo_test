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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYJYJLT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4fcdhZilSv04Qbfx7QhDtCf6Qeq9aXI4GvTsYYQCUNAiEAo8MtEouMZz0BPaxW5%2FttUk0o1CqBOMoTNS2RkIwCRQcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGXkxraHm1T%2F%2F4dODSrcA6f7wT%2FM5MPEM96uPpYVemokj2sZGCqDuIFN4vvEjntG2OEc5xN4SA8zspPdMuhFB3H1RDt3461YPGu5ra2QENBJOWoagN2StWQJjmxvpNr93OXq6qGa9JU3z%2Bk066bCgR94DndzCtPjYE6JtnkU8lD5qqO6uOlpkXeQob%2BoVnrN4t02v7qNsXL73ZtQWV3XCZOg1A17aUZzKlcc5sj9%2BVepaLIJ0nM2wNFulgpsTM05hlVn7LNPFyaGPrj6Oz9Gozs69t9MQ4h%2BRVJJvO6gaCyNGptk7w3mRCsxQuDM3qoHMDB%2BOGcNu5pf%2Brk8lGoHc717oAhOcMSH%2FY5z8846rBwgo%2FwGHwEH9xdlvauljgyNconAYJlryspVTbQ6rUb1gvfmn2pe8J4uOPHDXWIzx49Kj%2FAYYf4f3o8m72tGuUmL8L9vQ2GZJg4zGui9IiunCpZecD1I2b2yojOkam9fj92XoJfuT5oEn3yi3QJsYzuDIShPD6bkFMcDJPJUcNaZZECZ80YTCithLHMEPuDc0h3zQOvCcBqcHzcOYcohuWdbcfkIZIqPsERiW1NNOG6IoM8uVHYn6OpgfRu5jZdyB7NCEckrKy8Uxc74Xk%2BfBlqDf5KvN8tYEkdpGtseMOCXjL8GOqUBP44j7QmgErXVmHiymGj5HeGmHcxiySR4KPuverYwBjcxytWRyCKNFxNPlTp%2Ba%2FcvSIgY1pmhLOweIfry4WCY7ZGCEOP4VUY%2FJoRKYoujBOgEc0ByXl2eHVLrPCMSkCNLupJsZwmzxoVAHV9HFzeqFDDxIXzqbIbumyloIf%2FlaxoMEv5ESoUH3LSAls1L5eY7PNIkZfp0%2BAP7LTlcq2%2B1MfvgrCHH&X-Amz-Signature=11833879b33482a972d0fdd56a9e703a25be89e532c6f76466b4ae968ceb4e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYJYJLT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4fcdhZilSv04Qbfx7QhDtCf6Qeq9aXI4GvTsYYQCUNAiEAo8MtEouMZz0BPaxW5%2FttUk0o1CqBOMoTNS2RkIwCRQcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGXkxraHm1T%2F%2F4dODSrcA6f7wT%2FM5MPEM96uPpYVemokj2sZGCqDuIFN4vvEjntG2OEc5xN4SA8zspPdMuhFB3H1RDt3461YPGu5ra2QENBJOWoagN2StWQJjmxvpNr93OXq6qGa9JU3z%2Bk066bCgR94DndzCtPjYE6JtnkU8lD5qqO6uOlpkXeQob%2BoVnrN4t02v7qNsXL73ZtQWV3XCZOg1A17aUZzKlcc5sj9%2BVepaLIJ0nM2wNFulgpsTM05hlVn7LNPFyaGPrj6Oz9Gozs69t9MQ4h%2BRVJJvO6gaCyNGptk7w3mRCsxQuDM3qoHMDB%2BOGcNu5pf%2Brk8lGoHc717oAhOcMSH%2FY5z8846rBwgo%2FwGHwEH9xdlvauljgyNconAYJlryspVTbQ6rUb1gvfmn2pe8J4uOPHDXWIzx49Kj%2FAYYf4f3o8m72tGuUmL8L9vQ2GZJg4zGui9IiunCpZecD1I2b2yojOkam9fj92XoJfuT5oEn3yi3QJsYzuDIShPD6bkFMcDJPJUcNaZZECZ80YTCithLHMEPuDc0h3zQOvCcBqcHzcOYcohuWdbcfkIZIqPsERiW1NNOG6IoM8uVHYn6OpgfRu5jZdyB7NCEckrKy8Uxc74Xk%2BfBlqDf5KvN8tYEkdpGtseMOCXjL8GOqUBP44j7QmgErXVmHiymGj5HeGmHcxiySR4KPuverYwBjcxytWRyCKNFxNPlTp%2Ba%2FcvSIgY1pmhLOweIfry4WCY7ZGCEOP4VUY%2FJoRKYoujBOgEc0ByXl2eHVLrPCMSkCNLupJsZwmzxoVAHV9HFzeqFDDxIXzqbIbumyloIf%2FlaxoMEv5ESoUH3LSAls1L5eY7PNIkZfp0%2BAP7LTlcq2%2B1MfvgrCHH&X-Amz-Signature=b26b85fa77c30526d591177b0aeaf9faa940656e46bc081913a868d17153af91&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYJYJLT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4fcdhZilSv04Qbfx7QhDtCf6Qeq9aXI4GvTsYYQCUNAiEAo8MtEouMZz0BPaxW5%2FttUk0o1CqBOMoTNS2RkIwCRQcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGXkxraHm1T%2F%2F4dODSrcA6f7wT%2FM5MPEM96uPpYVemokj2sZGCqDuIFN4vvEjntG2OEc5xN4SA8zspPdMuhFB3H1RDt3461YPGu5ra2QENBJOWoagN2StWQJjmxvpNr93OXq6qGa9JU3z%2Bk066bCgR94DndzCtPjYE6JtnkU8lD5qqO6uOlpkXeQob%2BoVnrN4t02v7qNsXL73ZtQWV3XCZOg1A17aUZzKlcc5sj9%2BVepaLIJ0nM2wNFulgpsTM05hlVn7LNPFyaGPrj6Oz9Gozs69t9MQ4h%2BRVJJvO6gaCyNGptk7w3mRCsxQuDM3qoHMDB%2BOGcNu5pf%2Brk8lGoHc717oAhOcMSH%2FY5z8846rBwgo%2FwGHwEH9xdlvauljgyNconAYJlryspVTbQ6rUb1gvfmn2pe8J4uOPHDXWIzx49Kj%2FAYYf4f3o8m72tGuUmL8L9vQ2GZJg4zGui9IiunCpZecD1I2b2yojOkam9fj92XoJfuT5oEn3yi3QJsYzuDIShPD6bkFMcDJPJUcNaZZECZ80YTCithLHMEPuDc0h3zQOvCcBqcHzcOYcohuWdbcfkIZIqPsERiW1NNOG6IoM8uVHYn6OpgfRu5jZdyB7NCEckrKy8Uxc74Xk%2BfBlqDf5KvN8tYEkdpGtseMOCXjL8GOqUBP44j7QmgErXVmHiymGj5HeGmHcxiySR4KPuverYwBjcxytWRyCKNFxNPlTp%2Ba%2FcvSIgY1pmhLOweIfry4WCY7ZGCEOP4VUY%2FJoRKYoujBOgEc0ByXl2eHVLrPCMSkCNLupJsZwmzxoVAHV9HFzeqFDDxIXzqbIbumyloIf%2FlaxoMEv5ESoUH3LSAls1L5eY7PNIkZfp0%2BAP7LTlcq2%2B1MfvgrCHH&X-Amz-Signature=819eb80000bd022e30c7cfd01b00c3823f62f27da32e139cd5447a9e1901b80c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYJYJLT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4fcdhZilSv04Qbfx7QhDtCf6Qeq9aXI4GvTsYYQCUNAiEAo8MtEouMZz0BPaxW5%2FttUk0o1CqBOMoTNS2RkIwCRQcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGXkxraHm1T%2F%2F4dODSrcA6f7wT%2FM5MPEM96uPpYVemokj2sZGCqDuIFN4vvEjntG2OEc5xN4SA8zspPdMuhFB3H1RDt3461YPGu5ra2QENBJOWoagN2StWQJjmxvpNr93OXq6qGa9JU3z%2Bk066bCgR94DndzCtPjYE6JtnkU8lD5qqO6uOlpkXeQob%2BoVnrN4t02v7qNsXL73ZtQWV3XCZOg1A17aUZzKlcc5sj9%2BVepaLIJ0nM2wNFulgpsTM05hlVn7LNPFyaGPrj6Oz9Gozs69t9MQ4h%2BRVJJvO6gaCyNGptk7w3mRCsxQuDM3qoHMDB%2BOGcNu5pf%2Brk8lGoHc717oAhOcMSH%2FY5z8846rBwgo%2FwGHwEH9xdlvauljgyNconAYJlryspVTbQ6rUb1gvfmn2pe8J4uOPHDXWIzx49Kj%2FAYYf4f3o8m72tGuUmL8L9vQ2GZJg4zGui9IiunCpZecD1I2b2yojOkam9fj92XoJfuT5oEn3yi3QJsYzuDIShPD6bkFMcDJPJUcNaZZECZ80YTCithLHMEPuDc0h3zQOvCcBqcHzcOYcohuWdbcfkIZIqPsERiW1NNOG6IoM8uVHYn6OpgfRu5jZdyB7NCEckrKy8Uxc74Xk%2BfBlqDf5KvN8tYEkdpGtseMOCXjL8GOqUBP44j7QmgErXVmHiymGj5HeGmHcxiySR4KPuverYwBjcxytWRyCKNFxNPlTp%2Ba%2FcvSIgY1pmhLOweIfry4WCY7ZGCEOP4VUY%2FJoRKYoujBOgEc0ByXl2eHVLrPCMSkCNLupJsZwmzxoVAHV9HFzeqFDDxIXzqbIbumyloIf%2FlaxoMEv5ESoUH3LSAls1L5eY7PNIkZfp0%2BAP7LTlcq2%2B1MfvgrCHH&X-Amz-Signature=f4000681e63878adb859e65fea4e04de599229c4a083981eb88ef1960486293b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYJYJLT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4fcdhZilSv04Qbfx7QhDtCf6Qeq9aXI4GvTsYYQCUNAiEAo8MtEouMZz0BPaxW5%2FttUk0o1CqBOMoTNS2RkIwCRQcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGXkxraHm1T%2F%2F4dODSrcA6f7wT%2FM5MPEM96uPpYVemokj2sZGCqDuIFN4vvEjntG2OEc5xN4SA8zspPdMuhFB3H1RDt3461YPGu5ra2QENBJOWoagN2StWQJjmxvpNr93OXq6qGa9JU3z%2Bk066bCgR94DndzCtPjYE6JtnkU8lD5qqO6uOlpkXeQob%2BoVnrN4t02v7qNsXL73ZtQWV3XCZOg1A17aUZzKlcc5sj9%2BVepaLIJ0nM2wNFulgpsTM05hlVn7LNPFyaGPrj6Oz9Gozs69t9MQ4h%2BRVJJvO6gaCyNGptk7w3mRCsxQuDM3qoHMDB%2BOGcNu5pf%2Brk8lGoHc717oAhOcMSH%2FY5z8846rBwgo%2FwGHwEH9xdlvauljgyNconAYJlryspVTbQ6rUb1gvfmn2pe8J4uOPHDXWIzx49Kj%2FAYYf4f3o8m72tGuUmL8L9vQ2GZJg4zGui9IiunCpZecD1I2b2yojOkam9fj92XoJfuT5oEn3yi3QJsYzuDIShPD6bkFMcDJPJUcNaZZECZ80YTCithLHMEPuDc0h3zQOvCcBqcHzcOYcohuWdbcfkIZIqPsERiW1NNOG6IoM8uVHYn6OpgfRu5jZdyB7NCEckrKy8Uxc74Xk%2BfBlqDf5KvN8tYEkdpGtseMOCXjL8GOqUBP44j7QmgErXVmHiymGj5HeGmHcxiySR4KPuverYwBjcxytWRyCKNFxNPlTp%2Ba%2FcvSIgY1pmhLOweIfry4WCY7ZGCEOP4VUY%2FJoRKYoujBOgEc0ByXl2eHVLrPCMSkCNLupJsZwmzxoVAHV9HFzeqFDDxIXzqbIbumyloIf%2FlaxoMEv5ESoUH3LSAls1L5eY7PNIkZfp0%2BAP7LTlcq2%2B1MfvgrCHH&X-Amz-Signature=8a9f64fa2815ca9acb504b5acd7b0ea751a5fb2ea8904ce6c94a33e52408e02b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYJYJLT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4fcdhZilSv04Qbfx7QhDtCf6Qeq9aXI4GvTsYYQCUNAiEAo8MtEouMZz0BPaxW5%2FttUk0o1CqBOMoTNS2RkIwCRQcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDGXkxraHm1T%2F%2F4dODSrcA6f7wT%2FM5MPEM96uPpYVemokj2sZGCqDuIFN4vvEjntG2OEc5xN4SA8zspPdMuhFB3H1RDt3461YPGu5ra2QENBJOWoagN2StWQJjmxvpNr93OXq6qGa9JU3z%2Bk066bCgR94DndzCtPjYE6JtnkU8lD5qqO6uOlpkXeQob%2BoVnrN4t02v7qNsXL73ZtQWV3XCZOg1A17aUZzKlcc5sj9%2BVepaLIJ0nM2wNFulgpsTM05hlVn7LNPFyaGPrj6Oz9Gozs69t9MQ4h%2BRVJJvO6gaCyNGptk7w3mRCsxQuDM3qoHMDB%2BOGcNu5pf%2Brk8lGoHc717oAhOcMSH%2FY5z8846rBwgo%2FwGHwEH9xdlvauljgyNconAYJlryspVTbQ6rUb1gvfmn2pe8J4uOPHDXWIzx49Kj%2FAYYf4f3o8m72tGuUmL8L9vQ2GZJg4zGui9IiunCpZecD1I2b2yojOkam9fj92XoJfuT5oEn3yi3QJsYzuDIShPD6bkFMcDJPJUcNaZZECZ80YTCithLHMEPuDc0h3zQOvCcBqcHzcOYcohuWdbcfkIZIqPsERiW1NNOG6IoM8uVHYn6OpgfRu5jZdyB7NCEckrKy8Uxc74Xk%2BfBlqDf5KvN8tYEkdpGtseMOCXjL8GOqUBP44j7QmgErXVmHiymGj5HeGmHcxiySR4KPuverYwBjcxytWRyCKNFxNPlTp%2Ba%2FcvSIgY1pmhLOweIfry4WCY7ZGCEOP4VUY%2FJoRKYoujBOgEc0ByXl2eHVLrPCMSkCNLupJsZwmzxoVAHV9HFzeqFDDxIXzqbIbumyloIf%2FlaxoMEv5ESoUH3LSAls1L5eY7PNIkZfp0%2BAP7LTlcq2%2B1MfvgrCHH&X-Amz-Signature=c4ee37cccbf4f7639ce35faa9fdcb8c5034362868d87d602fa4d7748d2f4aeaf&X-Amz-SignedHeaders=host&x-id=GetObject)
