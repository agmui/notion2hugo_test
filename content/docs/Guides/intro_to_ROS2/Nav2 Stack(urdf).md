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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJWB6Y6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFbCPfgxM%2BNt6LWbT5U%2B6HeTNk2RFtxJl1kja%2BRbbOCAiEAxDwrevM3Uj7UnBkfRI3VwygoiFgyFzhA%2FqB88Rt0sXAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGarBd5pwSx5yCFSLSrcAzX7Ni13nP5F%2FSvaZPlK5uywf%2F4xKeJEOZIe%2F7pSPVjwWw5HtPzwWpVS7rKY0wYArwZBM%2B66l%2BKFQZ%2BgsMcDlVCf0wGhNcERixgzKVc6UQfJ0JTYmo4IF3hFJ42DJN5HnP7rWskcn2qKz8KW%2BvkhpF7JB9rmOnippRumnJGChgoMI7obQLvsCEq7Z6PMrVeNc3qzswmdT2qnRmgOhVhEikwJC%2BQ8M0tspjjpBz55Xec2qqu4F9pWeYrNK8VjM33nfjVCi8Klm856QdlLhEazNcedU3VvD%2Fnu%2F3Wd5SAskiDrXNasxy%2FW2aJTfRoM1dn3zz6s30KiNY9dpZiEbdpDrRdeA5oqNcevBbvZCqeITv2DU0VxViWVan5X%2BiYJBys%2F%2FhzmcJ%2Fu3fKDwMQElEG3Oc7RJ%2BNPnxNII2YUiNspDfW8uAs4Vso%2BKxkKzDDYumS51wD4hTIMi8X67M3Tlc9wS%2BwsWDZ9Jt7uywqTOdhrsGX%2BMSIhQy9nXeVOOH7YhZDNVxOE45Fcna3BqOra%2BAQDDFTwjhSjp%2FxgCpdjVCt2rRxYHCe5uwx9FUJTNwVidIgdJBuNvzTWnL6V0mHaRD1u1KMaX65W4wxS%2Fpn6r0YCa83TgLGAsMOOjYP0elWDMLXIrr0GOqUB0yK%2FgWkGL4i7%2FvQqiCN%2B9%2Bbi5%2FqHEe5v7blK3W6VGXSJGuTA6VmC%2BbjeN3iySEGvNfxu7PgePbW0GBerk7Lf2VK9TRv1F6BPoqCnvZtNvQumgru25bcEDB2NpkjD93c2Y4moultt%2BSYHfHG0oXjYkmYR7S%2BGvTvDzUQbsHoP3PYjTEMrPf%2FCLlw7LnM9T6M%2Ftz7duWGeuBENUIoq3v9u3dMoRykF&X-Amz-Signature=390e23eb460d33147678ce3f941f66fb58c3642a1e683fe85a9075f8a0aae27b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJWB6Y6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFbCPfgxM%2BNt6LWbT5U%2B6HeTNk2RFtxJl1kja%2BRbbOCAiEAxDwrevM3Uj7UnBkfRI3VwygoiFgyFzhA%2FqB88Rt0sXAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGarBd5pwSx5yCFSLSrcAzX7Ni13nP5F%2FSvaZPlK5uywf%2F4xKeJEOZIe%2F7pSPVjwWw5HtPzwWpVS7rKY0wYArwZBM%2B66l%2BKFQZ%2BgsMcDlVCf0wGhNcERixgzKVc6UQfJ0JTYmo4IF3hFJ42DJN5HnP7rWskcn2qKz8KW%2BvkhpF7JB9rmOnippRumnJGChgoMI7obQLvsCEq7Z6PMrVeNc3qzswmdT2qnRmgOhVhEikwJC%2BQ8M0tspjjpBz55Xec2qqu4F9pWeYrNK8VjM33nfjVCi8Klm856QdlLhEazNcedU3VvD%2Fnu%2F3Wd5SAskiDrXNasxy%2FW2aJTfRoM1dn3zz6s30KiNY9dpZiEbdpDrRdeA5oqNcevBbvZCqeITv2DU0VxViWVan5X%2BiYJBys%2F%2FhzmcJ%2Fu3fKDwMQElEG3Oc7RJ%2BNPnxNII2YUiNspDfW8uAs4Vso%2BKxkKzDDYumS51wD4hTIMi8X67M3Tlc9wS%2BwsWDZ9Jt7uywqTOdhrsGX%2BMSIhQy9nXeVOOH7YhZDNVxOE45Fcna3BqOra%2BAQDDFTwjhSjp%2FxgCpdjVCt2rRxYHCe5uwx9FUJTNwVidIgdJBuNvzTWnL6V0mHaRD1u1KMaX65W4wxS%2Fpn6r0YCa83TgLGAsMOOjYP0elWDMLXIrr0GOqUB0yK%2FgWkGL4i7%2FvQqiCN%2B9%2Bbi5%2FqHEe5v7blK3W6VGXSJGuTA6VmC%2BbjeN3iySEGvNfxu7PgePbW0GBerk7Lf2VK9TRv1F6BPoqCnvZtNvQumgru25bcEDB2NpkjD93c2Y4moultt%2BSYHfHG0oXjYkmYR7S%2BGvTvDzUQbsHoP3PYjTEMrPf%2FCLlw7LnM9T6M%2Ftz7duWGeuBENUIoq3v9u3dMoRykF&X-Amz-Signature=234cc4753cb363bf16a05f68babd991855b15070bf282104d208420443df0eac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJWB6Y6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFbCPfgxM%2BNt6LWbT5U%2B6HeTNk2RFtxJl1kja%2BRbbOCAiEAxDwrevM3Uj7UnBkfRI3VwygoiFgyFzhA%2FqB88Rt0sXAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGarBd5pwSx5yCFSLSrcAzX7Ni13nP5F%2FSvaZPlK5uywf%2F4xKeJEOZIe%2F7pSPVjwWw5HtPzwWpVS7rKY0wYArwZBM%2B66l%2BKFQZ%2BgsMcDlVCf0wGhNcERixgzKVc6UQfJ0JTYmo4IF3hFJ42DJN5HnP7rWskcn2qKz8KW%2BvkhpF7JB9rmOnippRumnJGChgoMI7obQLvsCEq7Z6PMrVeNc3qzswmdT2qnRmgOhVhEikwJC%2BQ8M0tspjjpBz55Xec2qqu4F9pWeYrNK8VjM33nfjVCi8Klm856QdlLhEazNcedU3VvD%2Fnu%2F3Wd5SAskiDrXNasxy%2FW2aJTfRoM1dn3zz6s30KiNY9dpZiEbdpDrRdeA5oqNcevBbvZCqeITv2DU0VxViWVan5X%2BiYJBys%2F%2FhzmcJ%2Fu3fKDwMQElEG3Oc7RJ%2BNPnxNII2YUiNspDfW8uAs4Vso%2BKxkKzDDYumS51wD4hTIMi8X67M3Tlc9wS%2BwsWDZ9Jt7uywqTOdhrsGX%2BMSIhQy9nXeVOOH7YhZDNVxOE45Fcna3BqOra%2BAQDDFTwjhSjp%2FxgCpdjVCt2rRxYHCe5uwx9FUJTNwVidIgdJBuNvzTWnL6V0mHaRD1u1KMaX65W4wxS%2Fpn6r0YCa83TgLGAsMOOjYP0elWDMLXIrr0GOqUB0yK%2FgWkGL4i7%2FvQqiCN%2B9%2Bbi5%2FqHEe5v7blK3W6VGXSJGuTA6VmC%2BbjeN3iySEGvNfxu7PgePbW0GBerk7Lf2VK9TRv1F6BPoqCnvZtNvQumgru25bcEDB2NpkjD93c2Y4moultt%2BSYHfHG0oXjYkmYR7S%2BGvTvDzUQbsHoP3PYjTEMrPf%2FCLlw7LnM9T6M%2Ftz7duWGeuBENUIoq3v9u3dMoRykF&X-Amz-Signature=9ced866fa47272e2938d70f645189d3f429045ba66ffd8117c1c902895696215&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJWB6Y6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFbCPfgxM%2BNt6LWbT5U%2B6HeTNk2RFtxJl1kja%2BRbbOCAiEAxDwrevM3Uj7UnBkfRI3VwygoiFgyFzhA%2FqB88Rt0sXAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGarBd5pwSx5yCFSLSrcAzX7Ni13nP5F%2FSvaZPlK5uywf%2F4xKeJEOZIe%2F7pSPVjwWw5HtPzwWpVS7rKY0wYArwZBM%2B66l%2BKFQZ%2BgsMcDlVCf0wGhNcERixgzKVc6UQfJ0JTYmo4IF3hFJ42DJN5HnP7rWskcn2qKz8KW%2BvkhpF7JB9rmOnippRumnJGChgoMI7obQLvsCEq7Z6PMrVeNc3qzswmdT2qnRmgOhVhEikwJC%2BQ8M0tspjjpBz55Xec2qqu4F9pWeYrNK8VjM33nfjVCi8Klm856QdlLhEazNcedU3VvD%2Fnu%2F3Wd5SAskiDrXNasxy%2FW2aJTfRoM1dn3zz6s30KiNY9dpZiEbdpDrRdeA5oqNcevBbvZCqeITv2DU0VxViWVan5X%2BiYJBys%2F%2FhzmcJ%2Fu3fKDwMQElEG3Oc7RJ%2BNPnxNII2YUiNspDfW8uAs4Vso%2BKxkKzDDYumS51wD4hTIMi8X67M3Tlc9wS%2BwsWDZ9Jt7uywqTOdhrsGX%2BMSIhQy9nXeVOOH7YhZDNVxOE45Fcna3BqOra%2BAQDDFTwjhSjp%2FxgCpdjVCt2rRxYHCe5uwx9FUJTNwVidIgdJBuNvzTWnL6V0mHaRD1u1KMaX65W4wxS%2Fpn6r0YCa83TgLGAsMOOjYP0elWDMLXIrr0GOqUB0yK%2FgWkGL4i7%2FvQqiCN%2B9%2Bbi5%2FqHEe5v7blK3W6VGXSJGuTA6VmC%2BbjeN3iySEGvNfxu7PgePbW0GBerk7Lf2VK9TRv1F6BPoqCnvZtNvQumgru25bcEDB2NpkjD93c2Y4moultt%2BSYHfHG0oXjYkmYR7S%2BGvTvDzUQbsHoP3PYjTEMrPf%2FCLlw7LnM9T6M%2Ftz7duWGeuBENUIoq3v9u3dMoRykF&X-Amz-Signature=db796334ba6e38e76d8bd5ef50de93f4052166a974887dc17ed2f6b119ca2790&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJWB6Y6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFbCPfgxM%2BNt6LWbT5U%2B6HeTNk2RFtxJl1kja%2BRbbOCAiEAxDwrevM3Uj7UnBkfRI3VwygoiFgyFzhA%2FqB88Rt0sXAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGarBd5pwSx5yCFSLSrcAzX7Ni13nP5F%2FSvaZPlK5uywf%2F4xKeJEOZIe%2F7pSPVjwWw5HtPzwWpVS7rKY0wYArwZBM%2B66l%2BKFQZ%2BgsMcDlVCf0wGhNcERixgzKVc6UQfJ0JTYmo4IF3hFJ42DJN5HnP7rWskcn2qKz8KW%2BvkhpF7JB9rmOnippRumnJGChgoMI7obQLvsCEq7Z6PMrVeNc3qzswmdT2qnRmgOhVhEikwJC%2BQ8M0tspjjpBz55Xec2qqu4F9pWeYrNK8VjM33nfjVCi8Klm856QdlLhEazNcedU3VvD%2Fnu%2F3Wd5SAskiDrXNasxy%2FW2aJTfRoM1dn3zz6s30KiNY9dpZiEbdpDrRdeA5oqNcevBbvZCqeITv2DU0VxViWVan5X%2BiYJBys%2F%2FhzmcJ%2Fu3fKDwMQElEG3Oc7RJ%2BNPnxNII2YUiNspDfW8uAs4Vso%2BKxkKzDDYumS51wD4hTIMi8X67M3Tlc9wS%2BwsWDZ9Jt7uywqTOdhrsGX%2BMSIhQy9nXeVOOH7YhZDNVxOE45Fcna3BqOra%2BAQDDFTwjhSjp%2FxgCpdjVCt2rRxYHCe5uwx9FUJTNwVidIgdJBuNvzTWnL6V0mHaRD1u1KMaX65W4wxS%2Fpn6r0YCa83TgLGAsMOOjYP0elWDMLXIrr0GOqUB0yK%2FgWkGL4i7%2FvQqiCN%2B9%2Bbi5%2FqHEe5v7blK3W6VGXSJGuTA6VmC%2BbjeN3iySEGvNfxu7PgePbW0GBerk7Lf2VK9TRv1F6BPoqCnvZtNvQumgru25bcEDB2NpkjD93c2Y4moultt%2BSYHfHG0oXjYkmYR7S%2BGvTvDzUQbsHoP3PYjTEMrPf%2FCLlw7LnM9T6M%2Ftz7duWGeuBENUIoq3v9u3dMoRykF&X-Amz-Signature=3d0d07b29014f7ff87ddcd86dcbaab3dc7cd95b8649d06f9532152fd97210b16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZJWB6Y6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFbCPfgxM%2BNt6LWbT5U%2B6HeTNk2RFtxJl1kja%2BRbbOCAiEAxDwrevM3Uj7UnBkfRI3VwygoiFgyFzhA%2FqB88Rt0sXAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGarBd5pwSx5yCFSLSrcAzX7Ni13nP5F%2FSvaZPlK5uywf%2F4xKeJEOZIe%2F7pSPVjwWw5HtPzwWpVS7rKY0wYArwZBM%2B66l%2BKFQZ%2BgsMcDlVCf0wGhNcERixgzKVc6UQfJ0JTYmo4IF3hFJ42DJN5HnP7rWskcn2qKz8KW%2BvkhpF7JB9rmOnippRumnJGChgoMI7obQLvsCEq7Z6PMrVeNc3qzswmdT2qnRmgOhVhEikwJC%2BQ8M0tspjjpBz55Xec2qqu4F9pWeYrNK8VjM33nfjVCi8Klm856QdlLhEazNcedU3VvD%2Fnu%2F3Wd5SAskiDrXNasxy%2FW2aJTfRoM1dn3zz6s30KiNY9dpZiEbdpDrRdeA5oqNcevBbvZCqeITv2DU0VxViWVan5X%2BiYJBys%2F%2FhzmcJ%2Fu3fKDwMQElEG3Oc7RJ%2BNPnxNII2YUiNspDfW8uAs4Vso%2BKxkKzDDYumS51wD4hTIMi8X67M3Tlc9wS%2BwsWDZ9Jt7uywqTOdhrsGX%2BMSIhQy9nXeVOOH7YhZDNVxOE45Fcna3BqOra%2BAQDDFTwjhSjp%2FxgCpdjVCt2rRxYHCe5uwx9FUJTNwVidIgdJBuNvzTWnL6V0mHaRD1u1KMaX65W4wxS%2Fpn6r0YCa83TgLGAsMOOjYP0elWDMLXIrr0GOqUB0yK%2FgWkGL4i7%2FvQqiCN%2B9%2Bbi5%2FqHEe5v7blK3W6VGXSJGuTA6VmC%2BbjeN3iySEGvNfxu7PgePbW0GBerk7Lf2VK9TRv1F6BPoqCnvZtNvQumgru25bcEDB2NpkjD93c2Y4moultt%2BSYHfHG0oXjYkmYR7S%2BGvTvDzUQbsHoP3PYjTEMrPf%2FCLlw7LnM9T6M%2Ftz7duWGeuBENUIoq3v9u3dMoRykF&X-Amz-Signature=b25f0cadb023041e965a38e1e173d85e15ee6c492ef6ce0954a58f579ccf33d7&X-Amz-SignedHeaders=host&x-id=GetObject)
