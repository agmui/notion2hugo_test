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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHMT27D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA7fhXOA2gI40cZrdIqDGoe8R68f2lseEmDhbDGsuNVAiB6BuUpYvKbTwA5nKTlhK%2B1Y8dF0Ls%2FF%2BosaUXSAdY5kSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpKtT7ybRkhzgC8RFKtwD7L7MAMeeAf1tnnwwfjJufuOQO3AE3lg2iw2e02BfS8%2BMEAenFbVqikw%2BXIUtk3JTh7bksFI8IVO0JHN0LI2kb0nFuXfaBQxDpEVyY17ao766zs0DyiFytYM7BYhpc2xEDX2EWQevfi35Ex4jQlu%2Bgtqr%2Biv%2F%2BBLa6XFpTecNW5KWfMeHx697Z9etEwdoRQafcXXAlsGVytZvXg0G7DIdAQwbKI8bfxhmV5da4nnEVrmNgJdvWiuo1f1jOX0KJqfkI%2FGaEVd0dY7PSqPqU6sMCdlv71xVkFSx42CoeoUSPkpCTsajRgvq1pdhIeobOwsY0z4Qbt0tgNFPnyz%2BJBMyt7YKhlJnXarFAVKwdlOzuZlsb7mt8BotIvTU5xp2qxmrWW1NsXpcIu9mxsOkA8giWo6MS6aQ91FUVszM3UIYgx%2FuR1ppN6W8eYkwroIWQ2oAzXlr9bUFBWFX1g3ZpOtKoAL9LL1RjrPLDTp9IflWpfM8zPkrnLrXNol5TEy9tLys2PfZMIuxEOqFPiE%2Ba5Xr%2BXZ9yl04KmqxfnWcSATL17JuEAG0LPi2DwjM2mQzd3xaBYbHMi36brWnjPudDS1e%2BEaSCIUo1HHsq3wJgitQqhRtjJLW40iyfmyfiV8wobe%2FwAY6pgEmkh%2FVeF5F5fPjL0LOTs49BLe44avEy5gMVVgb4DYra1W%2BqSTk4%2BxQQAZXl%2FfPEzXqvKsSVzia8CRtaM8x%2BWhEbR0FdzUELbj5cfZqM1sFqSKDTJpx94xmimpa4yV%2Bi66TxUDbTeOcZS%2BhK%2Bs4gBC8qDDmvZTcI42NMg0lUavuy9Wb9SNIz4F%2BztPcFlY%2Ftz5NSf7J0Mp%2B8nFUAlzGcxbduSBYhg0b&X-Amz-Signature=0bbf1d5a0a71be422786e6774fc091a8863de5b593857d0fe7266a1a1a158f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHMT27D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA7fhXOA2gI40cZrdIqDGoe8R68f2lseEmDhbDGsuNVAiB6BuUpYvKbTwA5nKTlhK%2B1Y8dF0Ls%2FF%2BosaUXSAdY5kSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpKtT7ybRkhzgC8RFKtwD7L7MAMeeAf1tnnwwfjJufuOQO3AE3lg2iw2e02BfS8%2BMEAenFbVqikw%2BXIUtk3JTh7bksFI8IVO0JHN0LI2kb0nFuXfaBQxDpEVyY17ao766zs0DyiFytYM7BYhpc2xEDX2EWQevfi35Ex4jQlu%2Bgtqr%2Biv%2F%2BBLa6XFpTecNW5KWfMeHx697Z9etEwdoRQafcXXAlsGVytZvXg0G7DIdAQwbKI8bfxhmV5da4nnEVrmNgJdvWiuo1f1jOX0KJqfkI%2FGaEVd0dY7PSqPqU6sMCdlv71xVkFSx42CoeoUSPkpCTsajRgvq1pdhIeobOwsY0z4Qbt0tgNFPnyz%2BJBMyt7YKhlJnXarFAVKwdlOzuZlsb7mt8BotIvTU5xp2qxmrWW1NsXpcIu9mxsOkA8giWo6MS6aQ91FUVszM3UIYgx%2FuR1ppN6W8eYkwroIWQ2oAzXlr9bUFBWFX1g3ZpOtKoAL9LL1RjrPLDTp9IflWpfM8zPkrnLrXNol5TEy9tLys2PfZMIuxEOqFPiE%2Ba5Xr%2BXZ9yl04KmqxfnWcSATL17JuEAG0LPi2DwjM2mQzd3xaBYbHMi36brWnjPudDS1e%2BEaSCIUo1HHsq3wJgitQqhRtjJLW40iyfmyfiV8wobe%2FwAY6pgEmkh%2FVeF5F5fPjL0LOTs49BLe44avEy5gMVVgb4DYra1W%2BqSTk4%2BxQQAZXl%2FfPEzXqvKsSVzia8CRtaM8x%2BWhEbR0FdzUELbj5cfZqM1sFqSKDTJpx94xmimpa4yV%2Bi66TxUDbTeOcZS%2BhK%2Bs4gBC8qDDmvZTcI42NMg0lUavuy9Wb9SNIz4F%2BztPcFlY%2Ftz5NSf7J0Mp%2B8nFUAlzGcxbduSBYhg0b&X-Amz-Signature=d8e2d6627b7b40efa7b6212db90e0d19104c535432d5ea849763812c614dcb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHMT27D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA7fhXOA2gI40cZrdIqDGoe8R68f2lseEmDhbDGsuNVAiB6BuUpYvKbTwA5nKTlhK%2B1Y8dF0Ls%2FF%2BosaUXSAdY5kSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpKtT7ybRkhzgC8RFKtwD7L7MAMeeAf1tnnwwfjJufuOQO3AE3lg2iw2e02BfS8%2BMEAenFbVqikw%2BXIUtk3JTh7bksFI8IVO0JHN0LI2kb0nFuXfaBQxDpEVyY17ao766zs0DyiFytYM7BYhpc2xEDX2EWQevfi35Ex4jQlu%2Bgtqr%2Biv%2F%2BBLa6XFpTecNW5KWfMeHx697Z9etEwdoRQafcXXAlsGVytZvXg0G7DIdAQwbKI8bfxhmV5da4nnEVrmNgJdvWiuo1f1jOX0KJqfkI%2FGaEVd0dY7PSqPqU6sMCdlv71xVkFSx42CoeoUSPkpCTsajRgvq1pdhIeobOwsY0z4Qbt0tgNFPnyz%2BJBMyt7YKhlJnXarFAVKwdlOzuZlsb7mt8BotIvTU5xp2qxmrWW1NsXpcIu9mxsOkA8giWo6MS6aQ91FUVszM3UIYgx%2FuR1ppN6W8eYkwroIWQ2oAzXlr9bUFBWFX1g3ZpOtKoAL9LL1RjrPLDTp9IflWpfM8zPkrnLrXNol5TEy9tLys2PfZMIuxEOqFPiE%2Ba5Xr%2BXZ9yl04KmqxfnWcSATL17JuEAG0LPi2DwjM2mQzd3xaBYbHMi36brWnjPudDS1e%2BEaSCIUo1HHsq3wJgitQqhRtjJLW40iyfmyfiV8wobe%2FwAY6pgEmkh%2FVeF5F5fPjL0LOTs49BLe44avEy5gMVVgb4DYra1W%2BqSTk4%2BxQQAZXl%2FfPEzXqvKsSVzia8CRtaM8x%2BWhEbR0FdzUELbj5cfZqM1sFqSKDTJpx94xmimpa4yV%2Bi66TxUDbTeOcZS%2BhK%2Bs4gBC8qDDmvZTcI42NMg0lUavuy9Wb9SNIz4F%2BztPcFlY%2Ftz5NSf7J0Mp%2B8nFUAlzGcxbduSBYhg0b&X-Amz-Signature=aeba4209ecad7ddc94e5bb88c2d167a8a3466dac15fe9d31d30f0a2464379b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHMT27D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA7fhXOA2gI40cZrdIqDGoe8R68f2lseEmDhbDGsuNVAiB6BuUpYvKbTwA5nKTlhK%2B1Y8dF0Ls%2FF%2BosaUXSAdY5kSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpKtT7ybRkhzgC8RFKtwD7L7MAMeeAf1tnnwwfjJufuOQO3AE3lg2iw2e02BfS8%2BMEAenFbVqikw%2BXIUtk3JTh7bksFI8IVO0JHN0LI2kb0nFuXfaBQxDpEVyY17ao766zs0DyiFytYM7BYhpc2xEDX2EWQevfi35Ex4jQlu%2Bgtqr%2Biv%2F%2BBLa6XFpTecNW5KWfMeHx697Z9etEwdoRQafcXXAlsGVytZvXg0G7DIdAQwbKI8bfxhmV5da4nnEVrmNgJdvWiuo1f1jOX0KJqfkI%2FGaEVd0dY7PSqPqU6sMCdlv71xVkFSx42CoeoUSPkpCTsajRgvq1pdhIeobOwsY0z4Qbt0tgNFPnyz%2BJBMyt7YKhlJnXarFAVKwdlOzuZlsb7mt8BotIvTU5xp2qxmrWW1NsXpcIu9mxsOkA8giWo6MS6aQ91FUVszM3UIYgx%2FuR1ppN6W8eYkwroIWQ2oAzXlr9bUFBWFX1g3ZpOtKoAL9LL1RjrPLDTp9IflWpfM8zPkrnLrXNol5TEy9tLys2PfZMIuxEOqFPiE%2Ba5Xr%2BXZ9yl04KmqxfnWcSATL17JuEAG0LPi2DwjM2mQzd3xaBYbHMi36brWnjPudDS1e%2BEaSCIUo1HHsq3wJgitQqhRtjJLW40iyfmyfiV8wobe%2FwAY6pgEmkh%2FVeF5F5fPjL0LOTs49BLe44avEy5gMVVgb4DYra1W%2BqSTk4%2BxQQAZXl%2FfPEzXqvKsSVzia8CRtaM8x%2BWhEbR0FdzUELbj5cfZqM1sFqSKDTJpx94xmimpa4yV%2Bi66TxUDbTeOcZS%2BhK%2Bs4gBC8qDDmvZTcI42NMg0lUavuy9Wb9SNIz4F%2BztPcFlY%2Ftz5NSf7J0Mp%2B8nFUAlzGcxbduSBYhg0b&X-Amz-Signature=8c6d22602e33fa14e3c43ac195518a2f6f62fd67e00290865e1ea9b077ef8b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHMT27D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA7fhXOA2gI40cZrdIqDGoe8R68f2lseEmDhbDGsuNVAiB6BuUpYvKbTwA5nKTlhK%2B1Y8dF0Ls%2FF%2BosaUXSAdY5kSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpKtT7ybRkhzgC8RFKtwD7L7MAMeeAf1tnnwwfjJufuOQO3AE3lg2iw2e02BfS8%2BMEAenFbVqikw%2BXIUtk3JTh7bksFI8IVO0JHN0LI2kb0nFuXfaBQxDpEVyY17ao766zs0DyiFytYM7BYhpc2xEDX2EWQevfi35Ex4jQlu%2Bgtqr%2Biv%2F%2BBLa6XFpTecNW5KWfMeHx697Z9etEwdoRQafcXXAlsGVytZvXg0G7DIdAQwbKI8bfxhmV5da4nnEVrmNgJdvWiuo1f1jOX0KJqfkI%2FGaEVd0dY7PSqPqU6sMCdlv71xVkFSx42CoeoUSPkpCTsajRgvq1pdhIeobOwsY0z4Qbt0tgNFPnyz%2BJBMyt7YKhlJnXarFAVKwdlOzuZlsb7mt8BotIvTU5xp2qxmrWW1NsXpcIu9mxsOkA8giWo6MS6aQ91FUVszM3UIYgx%2FuR1ppN6W8eYkwroIWQ2oAzXlr9bUFBWFX1g3ZpOtKoAL9LL1RjrPLDTp9IflWpfM8zPkrnLrXNol5TEy9tLys2PfZMIuxEOqFPiE%2Ba5Xr%2BXZ9yl04KmqxfnWcSATL17JuEAG0LPi2DwjM2mQzd3xaBYbHMi36brWnjPudDS1e%2BEaSCIUo1HHsq3wJgitQqhRtjJLW40iyfmyfiV8wobe%2FwAY6pgEmkh%2FVeF5F5fPjL0LOTs49BLe44avEy5gMVVgb4DYra1W%2BqSTk4%2BxQQAZXl%2FfPEzXqvKsSVzia8CRtaM8x%2BWhEbR0FdzUELbj5cfZqM1sFqSKDTJpx94xmimpa4yV%2Bi66TxUDbTeOcZS%2BhK%2Bs4gBC8qDDmvZTcI42NMg0lUavuy9Wb9SNIz4F%2BztPcFlY%2Ftz5NSf7J0Mp%2B8nFUAlzGcxbduSBYhg0b&X-Amz-Signature=782c4d56377b007267ad93f15f54622f62771795ca2e44ee0907fc7bf5089e18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHMT27D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA7fhXOA2gI40cZrdIqDGoe8R68f2lseEmDhbDGsuNVAiB6BuUpYvKbTwA5nKTlhK%2B1Y8dF0Ls%2FF%2BosaUXSAdY5kSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpKtT7ybRkhzgC8RFKtwD7L7MAMeeAf1tnnwwfjJufuOQO3AE3lg2iw2e02BfS8%2BMEAenFbVqikw%2BXIUtk3JTh7bksFI8IVO0JHN0LI2kb0nFuXfaBQxDpEVyY17ao766zs0DyiFytYM7BYhpc2xEDX2EWQevfi35Ex4jQlu%2Bgtqr%2Biv%2F%2BBLa6XFpTecNW5KWfMeHx697Z9etEwdoRQafcXXAlsGVytZvXg0G7DIdAQwbKI8bfxhmV5da4nnEVrmNgJdvWiuo1f1jOX0KJqfkI%2FGaEVd0dY7PSqPqU6sMCdlv71xVkFSx42CoeoUSPkpCTsajRgvq1pdhIeobOwsY0z4Qbt0tgNFPnyz%2BJBMyt7YKhlJnXarFAVKwdlOzuZlsb7mt8BotIvTU5xp2qxmrWW1NsXpcIu9mxsOkA8giWo6MS6aQ91FUVszM3UIYgx%2FuR1ppN6W8eYkwroIWQ2oAzXlr9bUFBWFX1g3ZpOtKoAL9LL1RjrPLDTp9IflWpfM8zPkrnLrXNol5TEy9tLys2PfZMIuxEOqFPiE%2Ba5Xr%2BXZ9yl04KmqxfnWcSATL17JuEAG0LPi2DwjM2mQzd3xaBYbHMi36brWnjPudDS1e%2BEaSCIUo1HHsq3wJgitQqhRtjJLW40iyfmyfiV8wobe%2FwAY6pgEmkh%2FVeF5F5fPjL0LOTs49BLe44avEy5gMVVgb4DYra1W%2BqSTk4%2BxQQAZXl%2FfPEzXqvKsSVzia8CRtaM8x%2BWhEbR0FdzUELbj5cfZqM1sFqSKDTJpx94xmimpa4yV%2Bi66TxUDbTeOcZS%2BhK%2Bs4gBC8qDDmvZTcI42NMg0lUavuy9Wb9SNIz4F%2BztPcFlY%2Ftz5NSf7J0Mp%2B8nFUAlzGcxbduSBYhg0b&X-Amz-Signature=b709c5d36e7d57afe300a8f5ef762ade67e65a462acbd994fa6e7c6e72bebb5a&X-Amz-SignedHeaders=host&x-id=GetObject)
