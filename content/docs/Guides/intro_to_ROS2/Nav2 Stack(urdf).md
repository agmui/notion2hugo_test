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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3P3IOF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeVMB0Z4EQ5jl%2BQr303dMxTNFMAp5Qxl00xl7uFg6hCAiBnOiyfwSM1LcuAKeoRk4r8RKN9cTMfUGzGDpUJQ%2Bm7RyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XtK7Wk%2BWCm%2BquL6KtwD28IOhlRRVTdni%2FW6C6d9edQlX2Q2AFc5P5CGeDbUre6t0cmCIu74bsCeQya2Io87eYPEON9B3Soe2AHEyNDxDvd%2FMG%2BRe0QeKi04zRnnOWi7ZOH%2BtQGFC%2F2ideyoGx88HX27OomM27D4RudUeJ6rtQwqa0%2BECJhbzK9ZTUD0Lx72d1P82oI%2FIIN28Bin0T5wcRjH06UaGDF3s3oXphqGQslzFKZ7xhpLaSiYRmEbXt%2F7RiyfR8ZqKhLuNzYkFPiZHZZb4p4%2BQr8rKIWrfv2brw7jOyz%2BpQ5GTYTWLcxEuiMgqkAqqXzevTBMBAOAwXRLjt8T%2B0D2dJqYay95%2B0dBwcxmdZd%2B6CA8QYls20P3vVy2Orbw%2B9xYWASPu94JEGPvH%2BK96OQMZCJhZTrFE7OHryR0eBzZGpbwrfAadl9xMEMndSp%2B%2Fsc8LNMZqUJaNpyvGIQfCMQ94TtKaki3mGpsGnm4OF%2F7hHNBxX%2BNWfClenU0Xa0TSuuKoUf%2BKx1HcVq8SqC89kIQHe5krzLmuMjqi7oSPasDgITb%2FtmtzZrj0dQea7hG4lzJKs2nm8HEipxg3o1KzC4UY8VvjcWBaWJl8uN1n%2FVQyPiX040b2LubgEKO8njqRGfYBNypH5Mwn7bRwgY6pgG1P3bCqZ9wJwBlq3isItxpAM7rGnUQh9j6U%2FdD6zvYGoUkkgQ4FQW8G8%2BmKdwetf1s15sG8VRkhqMlDqjFp1vRQuo6zKj4jYdlHvRKRStRD6z9yNaZ0pGbZfkDaGXuH%2BmtgDL5moI8Ld%2Fk95rkEYix2XoNdylpmEClFpsMZVjnSU14BWKh3EDLlGdzm%2BgDl%2BEiXIb7ciyamabnCVi8Hs0z1cwUWNIa&X-Amz-Signature=a98d00d23c31c07fc02339ccb7ac4ccb0f79b9f2c9a368054f2b1cb604bbe45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3P3IOF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeVMB0Z4EQ5jl%2BQr303dMxTNFMAp5Qxl00xl7uFg6hCAiBnOiyfwSM1LcuAKeoRk4r8RKN9cTMfUGzGDpUJQ%2Bm7RyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XtK7Wk%2BWCm%2BquL6KtwD28IOhlRRVTdni%2FW6C6d9edQlX2Q2AFc5P5CGeDbUre6t0cmCIu74bsCeQya2Io87eYPEON9B3Soe2AHEyNDxDvd%2FMG%2BRe0QeKi04zRnnOWi7ZOH%2BtQGFC%2F2ideyoGx88HX27OomM27D4RudUeJ6rtQwqa0%2BECJhbzK9ZTUD0Lx72d1P82oI%2FIIN28Bin0T5wcRjH06UaGDF3s3oXphqGQslzFKZ7xhpLaSiYRmEbXt%2F7RiyfR8ZqKhLuNzYkFPiZHZZb4p4%2BQr8rKIWrfv2brw7jOyz%2BpQ5GTYTWLcxEuiMgqkAqqXzevTBMBAOAwXRLjt8T%2B0D2dJqYay95%2B0dBwcxmdZd%2B6CA8QYls20P3vVy2Orbw%2B9xYWASPu94JEGPvH%2BK96OQMZCJhZTrFE7OHryR0eBzZGpbwrfAadl9xMEMndSp%2B%2Fsc8LNMZqUJaNpyvGIQfCMQ94TtKaki3mGpsGnm4OF%2F7hHNBxX%2BNWfClenU0Xa0TSuuKoUf%2BKx1HcVq8SqC89kIQHe5krzLmuMjqi7oSPasDgITb%2FtmtzZrj0dQea7hG4lzJKs2nm8HEipxg3o1KzC4UY8VvjcWBaWJl8uN1n%2FVQyPiX040b2LubgEKO8njqRGfYBNypH5Mwn7bRwgY6pgG1P3bCqZ9wJwBlq3isItxpAM7rGnUQh9j6U%2FdD6zvYGoUkkgQ4FQW8G8%2BmKdwetf1s15sG8VRkhqMlDqjFp1vRQuo6zKj4jYdlHvRKRStRD6z9yNaZ0pGbZfkDaGXuH%2BmtgDL5moI8Ld%2Fk95rkEYix2XoNdylpmEClFpsMZVjnSU14BWKh3EDLlGdzm%2BgDl%2BEiXIb7ciyamabnCVi8Hs0z1cwUWNIa&X-Amz-Signature=26e42c32a2dc89fcb9c6a7efe2ed3b55ada041030f946c785c5c0fcfd961b8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3P3IOF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeVMB0Z4EQ5jl%2BQr303dMxTNFMAp5Qxl00xl7uFg6hCAiBnOiyfwSM1LcuAKeoRk4r8RKN9cTMfUGzGDpUJQ%2Bm7RyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XtK7Wk%2BWCm%2BquL6KtwD28IOhlRRVTdni%2FW6C6d9edQlX2Q2AFc5P5CGeDbUre6t0cmCIu74bsCeQya2Io87eYPEON9B3Soe2AHEyNDxDvd%2FMG%2BRe0QeKi04zRnnOWi7ZOH%2BtQGFC%2F2ideyoGx88HX27OomM27D4RudUeJ6rtQwqa0%2BECJhbzK9ZTUD0Lx72d1P82oI%2FIIN28Bin0T5wcRjH06UaGDF3s3oXphqGQslzFKZ7xhpLaSiYRmEbXt%2F7RiyfR8ZqKhLuNzYkFPiZHZZb4p4%2BQr8rKIWrfv2brw7jOyz%2BpQ5GTYTWLcxEuiMgqkAqqXzevTBMBAOAwXRLjt8T%2B0D2dJqYay95%2B0dBwcxmdZd%2B6CA8QYls20P3vVy2Orbw%2B9xYWASPu94JEGPvH%2BK96OQMZCJhZTrFE7OHryR0eBzZGpbwrfAadl9xMEMndSp%2B%2Fsc8LNMZqUJaNpyvGIQfCMQ94TtKaki3mGpsGnm4OF%2F7hHNBxX%2BNWfClenU0Xa0TSuuKoUf%2BKx1HcVq8SqC89kIQHe5krzLmuMjqi7oSPasDgITb%2FtmtzZrj0dQea7hG4lzJKs2nm8HEipxg3o1KzC4UY8VvjcWBaWJl8uN1n%2FVQyPiX040b2LubgEKO8njqRGfYBNypH5Mwn7bRwgY6pgG1P3bCqZ9wJwBlq3isItxpAM7rGnUQh9j6U%2FdD6zvYGoUkkgQ4FQW8G8%2BmKdwetf1s15sG8VRkhqMlDqjFp1vRQuo6zKj4jYdlHvRKRStRD6z9yNaZ0pGbZfkDaGXuH%2BmtgDL5moI8Ld%2Fk95rkEYix2XoNdylpmEClFpsMZVjnSU14BWKh3EDLlGdzm%2BgDl%2BEiXIb7ciyamabnCVi8Hs0z1cwUWNIa&X-Amz-Signature=704c694a59f427599941f45a69f7a747ba1b0e6f0cd5d6ada99f2d20e3d6def9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3P3IOF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeVMB0Z4EQ5jl%2BQr303dMxTNFMAp5Qxl00xl7uFg6hCAiBnOiyfwSM1LcuAKeoRk4r8RKN9cTMfUGzGDpUJQ%2Bm7RyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XtK7Wk%2BWCm%2BquL6KtwD28IOhlRRVTdni%2FW6C6d9edQlX2Q2AFc5P5CGeDbUre6t0cmCIu74bsCeQya2Io87eYPEON9B3Soe2AHEyNDxDvd%2FMG%2BRe0QeKi04zRnnOWi7ZOH%2BtQGFC%2F2ideyoGx88HX27OomM27D4RudUeJ6rtQwqa0%2BECJhbzK9ZTUD0Lx72d1P82oI%2FIIN28Bin0T5wcRjH06UaGDF3s3oXphqGQslzFKZ7xhpLaSiYRmEbXt%2F7RiyfR8ZqKhLuNzYkFPiZHZZb4p4%2BQr8rKIWrfv2brw7jOyz%2BpQ5GTYTWLcxEuiMgqkAqqXzevTBMBAOAwXRLjt8T%2B0D2dJqYay95%2B0dBwcxmdZd%2B6CA8QYls20P3vVy2Orbw%2B9xYWASPu94JEGPvH%2BK96OQMZCJhZTrFE7OHryR0eBzZGpbwrfAadl9xMEMndSp%2B%2Fsc8LNMZqUJaNpyvGIQfCMQ94TtKaki3mGpsGnm4OF%2F7hHNBxX%2BNWfClenU0Xa0TSuuKoUf%2BKx1HcVq8SqC89kIQHe5krzLmuMjqi7oSPasDgITb%2FtmtzZrj0dQea7hG4lzJKs2nm8HEipxg3o1KzC4UY8VvjcWBaWJl8uN1n%2FVQyPiX040b2LubgEKO8njqRGfYBNypH5Mwn7bRwgY6pgG1P3bCqZ9wJwBlq3isItxpAM7rGnUQh9j6U%2FdD6zvYGoUkkgQ4FQW8G8%2BmKdwetf1s15sG8VRkhqMlDqjFp1vRQuo6zKj4jYdlHvRKRStRD6z9yNaZ0pGbZfkDaGXuH%2BmtgDL5moI8Ld%2Fk95rkEYix2XoNdylpmEClFpsMZVjnSU14BWKh3EDLlGdzm%2BgDl%2BEiXIb7ciyamabnCVi8Hs0z1cwUWNIa&X-Amz-Signature=0e154c8764a80389d28aff928e2abdb903f2d91c4aab7c4090060ee6625f1129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3P3IOF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeVMB0Z4EQ5jl%2BQr303dMxTNFMAp5Qxl00xl7uFg6hCAiBnOiyfwSM1LcuAKeoRk4r8RKN9cTMfUGzGDpUJQ%2Bm7RyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XtK7Wk%2BWCm%2BquL6KtwD28IOhlRRVTdni%2FW6C6d9edQlX2Q2AFc5P5CGeDbUre6t0cmCIu74bsCeQya2Io87eYPEON9B3Soe2AHEyNDxDvd%2FMG%2BRe0QeKi04zRnnOWi7ZOH%2BtQGFC%2F2ideyoGx88HX27OomM27D4RudUeJ6rtQwqa0%2BECJhbzK9ZTUD0Lx72d1P82oI%2FIIN28Bin0T5wcRjH06UaGDF3s3oXphqGQslzFKZ7xhpLaSiYRmEbXt%2F7RiyfR8ZqKhLuNzYkFPiZHZZb4p4%2BQr8rKIWrfv2brw7jOyz%2BpQ5GTYTWLcxEuiMgqkAqqXzevTBMBAOAwXRLjt8T%2B0D2dJqYay95%2B0dBwcxmdZd%2B6CA8QYls20P3vVy2Orbw%2B9xYWASPu94JEGPvH%2BK96OQMZCJhZTrFE7OHryR0eBzZGpbwrfAadl9xMEMndSp%2B%2Fsc8LNMZqUJaNpyvGIQfCMQ94TtKaki3mGpsGnm4OF%2F7hHNBxX%2BNWfClenU0Xa0TSuuKoUf%2BKx1HcVq8SqC89kIQHe5krzLmuMjqi7oSPasDgITb%2FtmtzZrj0dQea7hG4lzJKs2nm8HEipxg3o1KzC4UY8VvjcWBaWJl8uN1n%2FVQyPiX040b2LubgEKO8njqRGfYBNypH5Mwn7bRwgY6pgG1P3bCqZ9wJwBlq3isItxpAM7rGnUQh9j6U%2FdD6zvYGoUkkgQ4FQW8G8%2BmKdwetf1s15sG8VRkhqMlDqjFp1vRQuo6zKj4jYdlHvRKRStRD6z9yNaZ0pGbZfkDaGXuH%2BmtgDL5moI8Ld%2Fk95rkEYix2XoNdylpmEClFpsMZVjnSU14BWKh3EDLlGdzm%2BgDl%2BEiXIb7ciyamabnCVi8Hs0z1cwUWNIa&X-Amz-Signature=2de54f029f844f4e9d7fdee1e33ebd4209ca60105cb1b6f3de2a4b82542da541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3P3IOF%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeVMB0Z4EQ5jl%2BQr303dMxTNFMAp5Qxl00xl7uFg6hCAiBnOiyfwSM1LcuAKeoRk4r8RKN9cTMfUGzGDpUJQ%2Bm7RyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XtK7Wk%2BWCm%2BquL6KtwD28IOhlRRVTdni%2FW6C6d9edQlX2Q2AFc5P5CGeDbUre6t0cmCIu74bsCeQya2Io87eYPEON9B3Soe2AHEyNDxDvd%2FMG%2BRe0QeKi04zRnnOWi7ZOH%2BtQGFC%2F2ideyoGx88HX27OomM27D4RudUeJ6rtQwqa0%2BECJhbzK9ZTUD0Lx72d1P82oI%2FIIN28Bin0T5wcRjH06UaGDF3s3oXphqGQslzFKZ7xhpLaSiYRmEbXt%2F7RiyfR8ZqKhLuNzYkFPiZHZZb4p4%2BQr8rKIWrfv2brw7jOyz%2BpQ5GTYTWLcxEuiMgqkAqqXzevTBMBAOAwXRLjt8T%2B0D2dJqYay95%2B0dBwcxmdZd%2B6CA8QYls20P3vVy2Orbw%2B9xYWASPu94JEGPvH%2BK96OQMZCJhZTrFE7OHryR0eBzZGpbwrfAadl9xMEMndSp%2B%2Fsc8LNMZqUJaNpyvGIQfCMQ94TtKaki3mGpsGnm4OF%2F7hHNBxX%2BNWfClenU0Xa0TSuuKoUf%2BKx1HcVq8SqC89kIQHe5krzLmuMjqi7oSPasDgITb%2FtmtzZrj0dQea7hG4lzJKs2nm8HEipxg3o1KzC4UY8VvjcWBaWJl8uN1n%2FVQyPiX040b2LubgEKO8njqRGfYBNypH5Mwn7bRwgY6pgG1P3bCqZ9wJwBlq3isItxpAM7rGnUQh9j6U%2FdD6zvYGoUkkgQ4FQW8G8%2BmKdwetf1s15sG8VRkhqMlDqjFp1vRQuo6zKj4jYdlHvRKRStRD6z9yNaZ0pGbZfkDaGXuH%2BmtgDL5moI8Ld%2Fk95rkEYix2XoNdylpmEClFpsMZVjnSU14BWKh3EDLlGdzm%2BgDl%2BEiXIb7ciyamabnCVi8Hs0z1cwUWNIa&X-Amz-Signature=a89b87de9bb9ad01b0f777a3e6f49a53688553b007ac904007e9d1ad13427022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
