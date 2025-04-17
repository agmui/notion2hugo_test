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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK77VG2O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGA6sy4Rap6XCkWF2jbt1sFR6iaoCjTAoa7G3NlBelAiB5Q%2FUsl6bkC%2FXDhSduqGcT1TsMXDLdfBj8p6Dm1xAuZyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMvbqp3pTk5EpJ69HDKtwDTR7xAtPeqzn0W%2BuZO2ETa99fz3sjAJGcLRRrvjRv%2F%2BnyBIBJ1P2SG1M5APS6xsdvlZYnHcon4XDDak65X0KilqOg49oGBfswHX8XX2ghBMVPczq%2Bi5JPS48rVq6yfi4XJXXgn4jDjuulgTOlb2g5tzyfS3X503MykBCzYYHGulT0U3yefdOCGFnQGq8PZjRWKGaEL4psHHgakp7VNRXCb2neLkN0qJyPvY9B%2BsUCYo5%2BEBwUHZPxT5PDwmabaEMOyRKWmFA9kq6Zf9KWGtyYyDHKO6XWLdJJsxbBFC8rY0RNpb316gg%2B5udNOOvnLxGWTI%2F6Y2tx33acuNE5vxyyzBhkpXt%2Fexw7POxgoe3%2BUaVJVuU4ei7%2FoGKXnIwyGt%2FT%2FpOxcbTJ2NRrpadn0Aa3EUlE8gC3a5e7vLXcdgWv2cva9L457PUY4DvJrNN9x4Aqbr%2FrNC87w%2Fr5BFojCMPSYwLGNAijLLndTfCoLVXT%2F2QptL3sEYqR1TLoMeTdkzc64dJQBzdJc%2F%2FSwdkPUwsc5RXgzryyiTHtB%2B474BbwegN4PguH7TRAUTPPAMEPPbFHKuNhZgiqCEh7xp1YGqgOV1f15EDY2ctt9ITc2iV24Vg4UgA46AYILtAEa6sw2OGCwAY6pgHu8pbCgVPiRys90Z3f%2FAa2lARAL345GgyrfpbDFUWADdILNaMh0%2BLptyl7llGBhMDBMZ2LpHrsHRVrnSM7KBOES6HhFjXchrBlX8CDb%2F0DeAATDZ5wOHpjk6ppWqXiiHIPaJ9FiFsHply3zxCFWk3bhNRiGu1fdvcf%2BkI8ANcYpeNIPFXhnFIxmYaT3FBjVfCHKBWmxzokzXHqoXCR94P03tQX1OSP&X-Amz-Signature=d7444516ba394490b72a1a0d259c086476ef7c80e2a84f7e1595e031c1740df5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK77VG2O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGA6sy4Rap6XCkWF2jbt1sFR6iaoCjTAoa7G3NlBelAiB5Q%2FUsl6bkC%2FXDhSduqGcT1TsMXDLdfBj8p6Dm1xAuZyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMvbqp3pTk5EpJ69HDKtwDTR7xAtPeqzn0W%2BuZO2ETa99fz3sjAJGcLRRrvjRv%2F%2BnyBIBJ1P2SG1M5APS6xsdvlZYnHcon4XDDak65X0KilqOg49oGBfswHX8XX2ghBMVPczq%2Bi5JPS48rVq6yfi4XJXXgn4jDjuulgTOlb2g5tzyfS3X503MykBCzYYHGulT0U3yefdOCGFnQGq8PZjRWKGaEL4psHHgakp7VNRXCb2neLkN0qJyPvY9B%2BsUCYo5%2BEBwUHZPxT5PDwmabaEMOyRKWmFA9kq6Zf9KWGtyYyDHKO6XWLdJJsxbBFC8rY0RNpb316gg%2B5udNOOvnLxGWTI%2F6Y2tx33acuNE5vxyyzBhkpXt%2Fexw7POxgoe3%2BUaVJVuU4ei7%2FoGKXnIwyGt%2FT%2FpOxcbTJ2NRrpadn0Aa3EUlE8gC3a5e7vLXcdgWv2cva9L457PUY4DvJrNN9x4Aqbr%2FrNC87w%2Fr5BFojCMPSYwLGNAijLLndTfCoLVXT%2F2QptL3sEYqR1TLoMeTdkzc64dJQBzdJc%2F%2FSwdkPUwsc5RXgzryyiTHtB%2B474BbwegN4PguH7TRAUTPPAMEPPbFHKuNhZgiqCEh7xp1YGqgOV1f15EDY2ctt9ITc2iV24Vg4UgA46AYILtAEa6sw2OGCwAY6pgHu8pbCgVPiRys90Z3f%2FAa2lARAL345GgyrfpbDFUWADdILNaMh0%2BLptyl7llGBhMDBMZ2LpHrsHRVrnSM7KBOES6HhFjXchrBlX8CDb%2F0DeAATDZ5wOHpjk6ppWqXiiHIPaJ9FiFsHply3zxCFWk3bhNRiGu1fdvcf%2BkI8ANcYpeNIPFXhnFIxmYaT3FBjVfCHKBWmxzokzXHqoXCR94P03tQX1OSP&X-Amz-Signature=cf991ef648619bb32693e34f6d916e01e7965091f0ab41770d6699622f1cb7be&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK77VG2O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGA6sy4Rap6XCkWF2jbt1sFR6iaoCjTAoa7G3NlBelAiB5Q%2FUsl6bkC%2FXDhSduqGcT1TsMXDLdfBj8p6Dm1xAuZyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMvbqp3pTk5EpJ69HDKtwDTR7xAtPeqzn0W%2BuZO2ETa99fz3sjAJGcLRRrvjRv%2F%2BnyBIBJ1P2SG1M5APS6xsdvlZYnHcon4XDDak65X0KilqOg49oGBfswHX8XX2ghBMVPczq%2Bi5JPS48rVq6yfi4XJXXgn4jDjuulgTOlb2g5tzyfS3X503MykBCzYYHGulT0U3yefdOCGFnQGq8PZjRWKGaEL4psHHgakp7VNRXCb2neLkN0qJyPvY9B%2BsUCYo5%2BEBwUHZPxT5PDwmabaEMOyRKWmFA9kq6Zf9KWGtyYyDHKO6XWLdJJsxbBFC8rY0RNpb316gg%2B5udNOOvnLxGWTI%2F6Y2tx33acuNE5vxyyzBhkpXt%2Fexw7POxgoe3%2BUaVJVuU4ei7%2FoGKXnIwyGt%2FT%2FpOxcbTJ2NRrpadn0Aa3EUlE8gC3a5e7vLXcdgWv2cva9L457PUY4DvJrNN9x4Aqbr%2FrNC87w%2Fr5BFojCMPSYwLGNAijLLndTfCoLVXT%2F2QptL3sEYqR1TLoMeTdkzc64dJQBzdJc%2F%2FSwdkPUwsc5RXgzryyiTHtB%2B474BbwegN4PguH7TRAUTPPAMEPPbFHKuNhZgiqCEh7xp1YGqgOV1f15EDY2ctt9ITc2iV24Vg4UgA46AYILtAEa6sw2OGCwAY6pgHu8pbCgVPiRys90Z3f%2FAa2lARAL345GgyrfpbDFUWADdILNaMh0%2BLptyl7llGBhMDBMZ2LpHrsHRVrnSM7KBOES6HhFjXchrBlX8CDb%2F0DeAATDZ5wOHpjk6ppWqXiiHIPaJ9FiFsHply3zxCFWk3bhNRiGu1fdvcf%2BkI8ANcYpeNIPFXhnFIxmYaT3FBjVfCHKBWmxzokzXHqoXCR94P03tQX1OSP&X-Amz-Signature=a64208e79a5c9df25ae2aefbd6a54dac8d9382bd77ec0d99f0a66084d18fd3df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK77VG2O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGA6sy4Rap6XCkWF2jbt1sFR6iaoCjTAoa7G3NlBelAiB5Q%2FUsl6bkC%2FXDhSduqGcT1TsMXDLdfBj8p6Dm1xAuZyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMvbqp3pTk5EpJ69HDKtwDTR7xAtPeqzn0W%2BuZO2ETa99fz3sjAJGcLRRrvjRv%2F%2BnyBIBJ1P2SG1M5APS6xsdvlZYnHcon4XDDak65X0KilqOg49oGBfswHX8XX2ghBMVPczq%2Bi5JPS48rVq6yfi4XJXXgn4jDjuulgTOlb2g5tzyfS3X503MykBCzYYHGulT0U3yefdOCGFnQGq8PZjRWKGaEL4psHHgakp7VNRXCb2neLkN0qJyPvY9B%2BsUCYo5%2BEBwUHZPxT5PDwmabaEMOyRKWmFA9kq6Zf9KWGtyYyDHKO6XWLdJJsxbBFC8rY0RNpb316gg%2B5udNOOvnLxGWTI%2F6Y2tx33acuNE5vxyyzBhkpXt%2Fexw7POxgoe3%2BUaVJVuU4ei7%2FoGKXnIwyGt%2FT%2FpOxcbTJ2NRrpadn0Aa3EUlE8gC3a5e7vLXcdgWv2cva9L457PUY4DvJrNN9x4Aqbr%2FrNC87w%2Fr5BFojCMPSYwLGNAijLLndTfCoLVXT%2F2QptL3sEYqR1TLoMeTdkzc64dJQBzdJc%2F%2FSwdkPUwsc5RXgzryyiTHtB%2B474BbwegN4PguH7TRAUTPPAMEPPbFHKuNhZgiqCEh7xp1YGqgOV1f15EDY2ctt9ITc2iV24Vg4UgA46AYILtAEa6sw2OGCwAY6pgHu8pbCgVPiRys90Z3f%2FAa2lARAL345GgyrfpbDFUWADdILNaMh0%2BLptyl7llGBhMDBMZ2LpHrsHRVrnSM7KBOES6HhFjXchrBlX8CDb%2F0DeAATDZ5wOHpjk6ppWqXiiHIPaJ9FiFsHply3zxCFWk3bhNRiGu1fdvcf%2BkI8ANcYpeNIPFXhnFIxmYaT3FBjVfCHKBWmxzokzXHqoXCR94P03tQX1OSP&X-Amz-Signature=8832a48e4ecdf2811949e01e73047c8c2a4cf9b8adee93a293198a43b243215e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK77VG2O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGA6sy4Rap6XCkWF2jbt1sFR6iaoCjTAoa7G3NlBelAiB5Q%2FUsl6bkC%2FXDhSduqGcT1TsMXDLdfBj8p6Dm1xAuZyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMvbqp3pTk5EpJ69HDKtwDTR7xAtPeqzn0W%2BuZO2ETa99fz3sjAJGcLRRrvjRv%2F%2BnyBIBJ1P2SG1M5APS6xsdvlZYnHcon4XDDak65X0KilqOg49oGBfswHX8XX2ghBMVPczq%2Bi5JPS48rVq6yfi4XJXXgn4jDjuulgTOlb2g5tzyfS3X503MykBCzYYHGulT0U3yefdOCGFnQGq8PZjRWKGaEL4psHHgakp7VNRXCb2neLkN0qJyPvY9B%2BsUCYo5%2BEBwUHZPxT5PDwmabaEMOyRKWmFA9kq6Zf9KWGtyYyDHKO6XWLdJJsxbBFC8rY0RNpb316gg%2B5udNOOvnLxGWTI%2F6Y2tx33acuNE5vxyyzBhkpXt%2Fexw7POxgoe3%2BUaVJVuU4ei7%2FoGKXnIwyGt%2FT%2FpOxcbTJ2NRrpadn0Aa3EUlE8gC3a5e7vLXcdgWv2cva9L457PUY4DvJrNN9x4Aqbr%2FrNC87w%2Fr5BFojCMPSYwLGNAijLLndTfCoLVXT%2F2QptL3sEYqR1TLoMeTdkzc64dJQBzdJc%2F%2FSwdkPUwsc5RXgzryyiTHtB%2B474BbwegN4PguH7TRAUTPPAMEPPbFHKuNhZgiqCEh7xp1YGqgOV1f15EDY2ctt9ITc2iV24Vg4UgA46AYILtAEa6sw2OGCwAY6pgHu8pbCgVPiRys90Z3f%2FAa2lARAL345GgyrfpbDFUWADdILNaMh0%2BLptyl7llGBhMDBMZ2LpHrsHRVrnSM7KBOES6HhFjXchrBlX8CDb%2F0DeAATDZ5wOHpjk6ppWqXiiHIPaJ9FiFsHply3zxCFWk3bhNRiGu1fdvcf%2BkI8ANcYpeNIPFXhnFIxmYaT3FBjVfCHKBWmxzokzXHqoXCR94P03tQX1OSP&X-Amz-Signature=8a08e6cdfc7e1808900462733842bcd65f0434ed5e6b65cc6db69c6e5f144058&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK77VG2O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGA6sy4Rap6XCkWF2jbt1sFR6iaoCjTAoa7G3NlBelAiB5Q%2FUsl6bkC%2FXDhSduqGcT1TsMXDLdfBj8p6Dm1xAuZyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMvbqp3pTk5EpJ69HDKtwDTR7xAtPeqzn0W%2BuZO2ETa99fz3sjAJGcLRRrvjRv%2F%2BnyBIBJ1P2SG1M5APS6xsdvlZYnHcon4XDDak65X0KilqOg49oGBfswHX8XX2ghBMVPczq%2Bi5JPS48rVq6yfi4XJXXgn4jDjuulgTOlb2g5tzyfS3X503MykBCzYYHGulT0U3yefdOCGFnQGq8PZjRWKGaEL4psHHgakp7VNRXCb2neLkN0qJyPvY9B%2BsUCYo5%2BEBwUHZPxT5PDwmabaEMOyRKWmFA9kq6Zf9KWGtyYyDHKO6XWLdJJsxbBFC8rY0RNpb316gg%2B5udNOOvnLxGWTI%2F6Y2tx33acuNE5vxyyzBhkpXt%2Fexw7POxgoe3%2BUaVJVuU4ei7%2FoGKXnIwyGt%2FT%2FpOxcbTJ2NRrpadn0Aa3EUlE8gC3a5e7vLXcdgWv2cva9L457PUY4DvJrNN9x4Aqbr%2FrNC87w%2Fr5BFojCMPSYwLGNAijLLndTfCoLVXT%2F2QptL3sEYqR1TLoMeTdkzc64dJQBzdJc%2F%2FSwdkPUwsc5RXgzryyiTHtB%2B474BbwegN4PguH7TRAUTPPAMEPPbFHKuNhZgiqCEh7xp1YGqgOV1f15EDY2ctt9ITc2iV24Vg4UgA46AYILtAEa6sw2OGCwAY6pgHu8pbCgVPiRys90Z3f%2FAa2lARAL345GgyrfpbDFUWADdILNaMh0%2BLptyl7llGBhMDBMZ2LpHrsHRVrnSM7KBOES6HhFjXchrBlX8CDb%2F0DeAATDZ5wOHpjk6ppWqXiiHIPaJ9FiFsHply3zxCFWk3bhNRiGu1fdvcf%2BkI8ANcYpeNIPFXhnFIxmYaT3FBjVfCHKBWmxzokzXHqoXCR94P03tQX1OSP&X-Amz-Signature=48017220da4331def47eb6a5fc9d76325719cd278e46456a6a8a95b86d310c6e&X-Amz-SignedHeaders=host&x-id=GetObject)
