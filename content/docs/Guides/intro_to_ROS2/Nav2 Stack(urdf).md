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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNVK43M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WsR7jNppoX7Qq%2BkE8B3qDIdBiX%2Feyqxx1AADXyPC2wIgEX2eniahGs6gROyWNlHMXk06Xq%2FCECHkV4GYPPA41CgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCOZ75Fc3BPpis8wSrcA85kLO8Gngx3WslME3pzi5dI78SnQtaok4%2FzLepobKqbNzBHKR%2BVMyOih9hIeKim1OFL4aXDSqvM3L08H0Asl7ZvuaxhPIAINLZSSJV1dcaNyqfGnM4m0pjBO2MfjhNpFt10%2FVtKFGjgbC%2Bl9rSJUj%2BRFH29fxLjo329FUIbpccGbnPnDCCL6Nci0vTm1tFFL%2FTqDqP1KTYPFbwS5Pl66%2B641efZHRS1iHqm%2F3my2vo2kpxqtRDCmUSXU5T1SVZcPQmtoksuVo2%2B%2BcNGk5%2FVDJE%2BsSHKBO%2FCo93Z%2FeOoWycf9n%2FGZrcXchg3oAl8lVYzOj%2FLqNG2ckjCiO5Xm18JPNbGv1Tbc7CgdfK70aY7wi8Ik3o544GQ4gWbhlRyd8KJbS3oZfcdgYn0pRwyGfnVh0McilxUq8RpbpegHLWO9v27UY3T%2BhbqX3okjREA3v%2B%2BhbKjekWEV%2FrAu3fsgBgssPiwaSe4S7BUc5%2FVFXau7l4%2B%2B7XfpnLVn26KGC0%2F%2F1PVaiX4XL5O%2B9W8b9N828CIPxG7pqituU9SI7KoJGS46P0R8s71Hoe%2FeyvFN7RGQgXyMHLRQPgd9FRDFF2jSLE9nFmwZypIjD7Hq%2F2JOenfu0ujjIL4aDz%2FZ%2FtMv%2FdsMI33zMIGOqUBHRUNcrpAMmXtFLoUqbvq3larq9u7HCSvprB%2Bx%2FEGPZJ58REIEjrnXCFrc%2FZg4eNxlen%2BXLd8OmefQfUQWmp0n%2FP%2BoD5IXKw5c1bxwJJ9SJg%2BNeDH3ND7T%2Fv9rtSllCLJ1sWZbbNENf9Lp4hTxPBXEHFJv53lBbsY%2BtrYFK1KHY%2FgNJiQnVthaYSvJS5X0TsD8jgTLdQrXmqoT6uHxnt7Wzbqp5DZ&X-Amz-Signature=5eea3e69603575293ce355749237a279ff2c9856dc0978a6a39418350afdcbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNVK43M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WsR7jNppoX7Qq%2BkE8B3qDIdBiX%2Feyqxx1AADXyPC2wIgEX2eniahGs6gROyWNlHMXk06Xq%2FCECHkV4GYPPA41CgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCOZ75Fc3BPpis8wSrcA85kLO8Gngx3WslME3pzi5dI78SnQtaok4%2FzLepobKqbNzBHKR%2BVMyOih9hIeKim1OFL4aXDSqvM3L08H0Asl7ZvuaxhPIAINLZSSJV1dcaNyqfGnM4m0pjBO2MfjhNpFt10%2FVtKFGjgbC%2Bl9rSJUj%2BRFH29fxLjo329FUIbpccGbnPnDCCL6Nci0vTm1tFFL%2FTqDqP1KTYPFbwS5Pl66%2B641efZHRS1iHqm%2F3my2vo2kpxqtRDCmUSXU5T1SVZcPQmtoksuVo2%2B%2BcNGk5%2FVDJE%2BsSHKBO%2FCo93Z%2FeOoWycf9n%2FGZrcXchg3oAl8lVYzOj%2FLqNG2ckjCiO5Xm18JPNbGv1Tbc7CgdfK70aY7wi8Ik3o544GQ4gWbhlRyd8KJbS3oZfcdgYn0pRwyGfnVh0McilxUq8RpbpegHLWO9v27UY3T%2BhbqX3okjREA3v%2B%2BhbKjekWEV%2FrAu3fsgBgssPiwaSe4S7BUc5%2FVFXau7l4%2B%2B7XfpnLVn26KGC0%2F%2F1PVaiX4XL5O%2B9W8b9N828CIPxG7pqituU9SI7KoJGS46P0R8s71Hoe%2FeyvFN7RGQgXyMHLRQPgd9FRDFF2jSLE9nFmwZypIjD7Hq%2F2JOenfu0ujjIL4aDz%2FZ%2FtMv%2FdsMI33zMIGOqUBHRUNcrpAMmXtFLoUqbvq3larq9u7HCSvprB%2Bx%2FEGPZJ58REIEjrnXCFrc%2FZg4eNxlen%2BXLd8OmefQfUQWmp0n%2FP%2BoD5IXKw5c1bxwJJ9SJg%2BNeDH3ND7T%2Fv9rtSllCLJ1sWZbbNENf9Lp4hTxPBXEHFJv53lBbsY%2BtrYFK1KHY%2FgNJiQnVthaYSvJS5X0TsD8jgTLdQrXmqoT6uHxnt7Wzbqp5DZ&X-Amz-Signature=2b6a5a6aa17e702d189e5cea1acf2492ab9310fe5d3f1db7a184ade0d1dbd1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNVK43M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WsR7jNppoX7Qq%2BkE8B3qDIdBiX%2Feyqxx1AADXyPC2wIgEX2eniahGs6gROyWNlHMXk06Xq%2FCECHkV4GYPPA41CgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCOZ75Fc3BPpis8wSrcA85kLO8Gngx3WslME3pzi5dI78SnQtaok4%2FzLepobKqbNzBHKR%2BVMyOih9hIeKim1OFL4aXDSqvM3L08H0Asl7ZvuaxhPIAINLZSSJV1dcaNyqfGnM4m0pjBO2MfjhNpFt10%2FVtKFGjgbC%2Bl9rSJUj%2BRFH29fxLjo329FUIbpccGbnPnDCCL6Nci0vTm1tFFL%2FTqDqP1KTYPFbwS5Pl66%2B641efZHRS1iHqm%2F3my2vo2kpxqtRDCmUSXU5T1SVZcPQmtoksuVo2%2B%2BcNGk5%2FVDJE%2BsSHKBO%2FCo93Z%2FeOoWycf9n%2FGZrcXchg3oAl8lVYzOj%2FLqNG2ckjCiO5Xm18JPNbGv1Tbc7CgdfK70aY7wi8Ik3o544GQ4gWbhlRyd8KJbS3oZfcdgYn0pRwyGfnVh0McilxUq8RpbpegHLWO9v27UY3T%2BhbqX3okjREA3v%2B%2BhbKjekWEV%2FrAu3fsgBgssPiwaSe4S7BUc5%2FVFXau7l4%2B%2B7XfpnLVn26KGC0%2F%2F1PVaiX4XL5O%2B9W8b9N828CIPxG7pqituU9SI7KoJGS46P0R8s71Hoe%2FeyvFN7RGQgXyMHLRQPgd9FRDFF2jSLE9nFmwZypIjD7Hq%2F2JOenfu0ujjIL4aDz%2FZ%2FtMv%2FdsMI33zMIGOqUBHRUNcrpAMmXtFLoUqbvq3larq9u7HCSvprB%2Bx%2FEGPZJ58REIEjrnXCFrc%2FZg4eNxlen%2BXLd8OmefQfUQWmp0n%2FP%2BoD5IXKw5c1bxwJJ9SJg%2BNeDH3ND7T%2Fv9rtSllCLJ1sWZbbNENf9Lp4hTxPBXEHFJv53lBbsY%2BtrYFK1KHY%2FgNJiQnVthaYSvJS5X0TsD8jgTLdQrXmqoT6uHxnt7Wzbqp5DZ&X-Amz-Signature=7ae6e0a11f6dd8fe04d671a943ceb6eb89808b6bb1479c2658507631847a09b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNVK43M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WsR7jNppoX7Qq%2BkE8B3qDIdBiX%2Feyqxx1AADXyPC2wIgEX2eniahGs6gROyWNlHMXk06Xq%2FCECHkV4GYPPA41CgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCOZ75Fc3BPpis8wSrcA85kLO8Gngx3WslME3pzi5dI78SnQtaok4%2FzLepobKqbNzBHKR%2BVMyOih9hIeKim1OFL4aXDSqvM3L08H0Asl7ZvuaxhPIAINLZSSJV1dcaNyqfGnM4m0pjBO2MfjhNpFt10%2FVtKFGjgbC%2Bl9rSJUj%2BRFH29fxLjo329FUIbpccGbnPnDCCL6Nci0vTm1tFFL%2FTqDqP1KTYPFbwS5Pl66%2B641efZHRS1iHqm%2F3my2vo2kpxqtRDCmUSXU5T1SVZcPQmtoksuVo2%2B%2BcNGk5%2FVDJE%2BsSHKBO%2FCo93Z%2FeOoWycf9n%2FGZrcXchg3oAl8lVYzOj%2FLqNG2ckjCiO5Xm18JPNbGv1Tbc7CgdfK70aY7wi8Ik3o544GQ4gWbhlRyd8KJbS3oZfcdgYn0pRwyGfnVh0McilxUq8RpbpegHLWO9v27UY3T%2BhbqX3okjREA3v%2B%2BhbKjekWEV%2FrAu3fsgBgssPiwaSe4S7BUc5%2FVFXau7l4%2B%2B7XfpnLVn26KGC0%2F%2F1PVaiX4XL5O%2B9W8b9N828CIPxG7pqituU9SI7KoJGS46P0R8s71Hoe%2FeyvFN7RGQgXyMHLRQPgd9FRDFF2jSLE9nFmwZypIjD7Hq%2F2JOenfu0ujjIL4aDz%2FZ%2FtMv%2FdsMI33zMIGOqUBHRUNcrpAMmXtFLoUqbvq3larq9u7HCSvprB%2Bx%2FEGPZJ58REIEjrnXCFrc%2FZg4eNxlen%2BXLd8OmefQfUQWmp0n%2FP%2BoD5IXKw5c1bxwJJ9SJg%2BNeDH3ND7T%2Fv9rtSllCLJ1sWZbbNENf9Lp4hTxPBXEHFJv53lBbsY%2BtrYFK1KHY%2FgNJiQnVthaYSvJS5X0TsD8jgTLdQrXmqoT6uHxnt7Wzbqp5DZ&X-Amz-Signature=4f60944d88720cba26209ed4b6c0ac2b70b0827b527cbbf324062fb30dc08939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNVK43M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WsR7jNppoX7Qq%2BkE8B3qDIdBiX%2Feyqxx1AADXyPC2wIgEX2eniahGs6gROyWNlHMXk06Xq%2FCECHkV4GYPPA41CgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCOZ75Fc3BPpis8wSrcA85kLO8Gngx3WslME3pzi5dI78SnQtaok4%2FzLepobKqbNzBHKR%2BVMyOih9hIeKim1OFL4aXDSqvM3L08H0Asl7ZvuaxhPIAINLZSSJV1dcaNyqfGnM4m0pjBO2MfjhNpFt10%2FVtKFGjgbC%2Bl9rSJUj%2BRFH29fxLjo329FUIbpccGbnPnDCCL6Nci0vTm1tFFL%2FTqDqP1KTYPFbwS5Pl66%2B641efZHRS1iHqm%2F3my2vo2kpxqtRDCmUSXU5T1SVZcPQmtoksuVo2%2B%2BcNGk5%2FVDJE%2BsSHKBO%2FCo93Z%2FeOoWycf9n%2FGZrcXchg3oAl8lVYzOj%2FLqNG2ckjCiO5Xm18JPNbGv1Tbc7CgdfK70aY7wi8Ik3o544GQ4gWbhlRyd8KJbS3oZfcdgYn0pRwyGfnVh0McilxUq8RpbpegHLWO9v27UY3T%2BhbqX3okjREA3v%2B%2BhbKjekWEV%2FrAu3fsgBgssPiwaSe4S7BUc5%2FVFXau7l4%2B%2B7XfpnLVn26KGC0%2F%2F1PVaiX4XL5O%2B9W8b9N828CIPxG7pqituU9SI7KoJGS46P0R8s71Hoe%2FeyvFN7RGQgXyMHLRQPgd9FRDFF2jSLE9nFmwZypIjD7Hq%2F2JOenfu0ujjIL4aDz%2FZ%2FtMv%2FdsMI33zMIGOqUBHRUNcrpAMmXtFLoUqbvq3larq9u7HCSvprB%2Bx%2FEGPZJ58REIEjrnXCFrc%2FZg4eNxlen%2BXLd8OmefQfUQWmp0n%2FP%2BoD5IXKw5c1bxwJJ9SJg%2BNeDH3ND7T%2Fv9rtSllCLJ1sWZbbNENf9Lp4hTxPBXEHFJv53lBbsY%2BtrYFK1KHY%2FgNJiQnVthaYSvJS5X0TsD8jgTLdQrXmqoT6uHxnt7Wzbqp5DZ&X-Amz-Signature=77df0211670940276a0b32bd94008cc75f858ca6cae55acdcc53fecd6ec7af8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NNVK43M%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7WsR7jNppoX7Qq%2BkE8B3qDIdBiX%2Feyqxx1AADXyPC2wIgEX2eniahGs6gROyWNlHMXk06Xq%2FCECHkV4GYPPA41CgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCOZ75Fc3BPpis8wSrcA85kLO8Gngx3WslME3pzi5dI78SnQtaok4%2FzLepobKqbNzBHKR%2BVMyOih9hIeKim1OFL4aXDSqvM3L08H0Asl7ZvuaxhPIAINLZSSJV1dcaNyqfGnM4m0pjBO2MfjhNpFt10%2FVtKFGjgbC%2Bl9rSJUj%2BRFH29fxLjo329FUIbpccGbnPnDCCL6Nci0vTm1tFFL%2FTqDqP1KTYPFbwS5Pl66%2B641efZHRS1iHqm%2F3my2vo2kpxqtRDCmUSXU5T1SVZcPQmtoksuVo2%2B%2BcNGk5%2FVDJE%2BsSHKBO%2FCo93Z%2FeOoWycf9n%2FGZrcXchg3oAl8lVYzOj%2FLqNG2ckjCiO5Xm18JPNbGv1Tbc7CgdfK70aY7wi8Ik3o544GQ4gWbhlRyd8KJbS3oZfcdgYn0pRwyGfnVh0McilxUq8RpbpegHLWO9v27UY3T%2BhbqX3okjREA3v%2B%2BhbKjekWEV%2FrAu3fsgBgssPiwaSe4S7BUc5%2FVFXau7l4%2B%2B7XfpnLVn26KGC0%2F%2F1PVaiX4XL5O%2B9W8b9N828CIPxG7pqituU9SI7KoJGS46P0R8s71Hoe%2FeyvFN7RGQgXyMHLRQPgd9FRDFF2jSLE9nFmwZypIjD7Hq%2F2JOenfu0ujjIL4aDz%2FZ%2FtMv%2FdsMI33zMIGOqUBHRUNcrpAMmXtFLoUqbvq3larq9u7HCSvprB%2Bx%2FEGPZJ58REIEjrnXCFrc%2FZg4eNxlen%2BXLd8OmefQfUQWmp0n%2FP%2BoD5IXKw5c1bxwJJ9SJg%2BNeDH3ND7T%2Fv9rtSllCLJ1sWZbbNENf9Lp4hTxPBXEHFJv53lBbsY%2BtrYFK1KHY%2FgNJiQnVthaYSvJS5X0TsD8jgTLdQrXmqoT6uHxnt7Wzbqp5DZ&X-Amz-Signature=5d99a95ea8b0b07d3e3ff77655439bc394c4b5a67a401ab602d1933b60a42321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
