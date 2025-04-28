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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWBN7VN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi3SJnl%2BdihLIWAvtL6tOIHY3qd5kYMDMq8pKn6L1sXgIgByKF4os%2FUeI%2F7Q3IjKojpUZQFSEu%2FTd9Cm8yLsqU7MAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOKiW6CXX4NyjBknoircA15VNFavuVxsXYVUVivWq8GVLWEX9asufrZlxal8d1UAIBWkfT1ZFc5ecngFio5KAUTRFka2NOMyGAy4GY5EuNi0e5yGpFT5FuNJ23%2FGg4h675CYI6lqbSyabLAaxFtX5fnTU8WD9dCF9Nb00%2FYk%2Fn3%2FlwEpsJCXGLLBETHaeFrfd%2BYaHvmWUOS00KSz6fS65QTt91wmHIkB9kc2u3WeVCvP6MUrpM1ViOooUE0hw35rqScOOLmMZxoWdXURAaHTsvVL7N6qqmK%2FhrJq%2F1ZGhS7IVlR4PfLWO45LRuaFzllOfgd7OS7aiks7%2FfHDf2zvTR8TUKBpceFWuL0hZuwQvjRmCTymIWc08%2BCr1ZGeg%2B1NeVdnlEoXS9zHPEWeEs7XMhD6YJBK8K4OyYRjnRebHYUYRTt88%2FwJf%2FtSIHdqbgNUtzlAK2cVbvoneObx2q4FZulO%2FDWnEbf0IEm2o80HdjRKfmOvp4MkjVCBDIhsWAbqMaWYO5psXuh0r9twdbVhFoulZzbRhfm6wCrjCYodvGktCQF%2BzyjVKaXKg4%2BUhZAfFeuLqHzfzdTlXICOvuxcqCQXp3zZw2pBK%2FpWQGD8akO0tnydsqzFP10B6OlogB0%2FYjbR7SFWx4xC9PXeMKGEvsAGOqUBCPJDcWPsleTWpMSy1cKDK8dPEdW5MGKw350FMw9BHZJx0gldOMspHpy2g0WMp%2BUSf77g5vxwRxK1PMlPwnIILCGHATBgoitbwmfBXQlC9KCL%2FX7MXQtpPQnzic91V1OOzgaJ79z8oCkooqv3q%2FHQs%2BQPdmW0lBN8G3JhlFvTsTtgY9oCpxGvTmviSyUKv8MLSc%2FtKZ5YDc17w3ttKre1KKm1iDWm&X-Amz-Signature=e7ac05a5ae84c8a958a4cac1256c41609b7e1f4e07bb21fce67c4e7f79bd495d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWBN7VN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi3SJnl%2BdihLIWAvtL6tOIHY3qd5kYMDMq8pKn6L1sXgIgByKF4os%2FUeI%2F7Q3IjKojpUZQFSEu%2FTd9Cm8yLsqU7MAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOKiW6CXX4NyjBknoircA15VNFavuVxsXYVUVivWq8GVLWEX9asufrZlxal8d1UAIBWkfT1ZFc5ecngFio5KAUTRFka2NOMyGAy4GY5EuNi0e5yGpFT5FuNJ23%2FGg4h675CYI6lqbSyabLAaxFtX5fnTU8WD9dCF9Nb00%2FYk%2Fn3%2FlwEpsJCXGLLBETHaeFrfd%2BYaHvmWUOS00KSz6fS65QTt91wmHIkB9kc2u3WeVCvP6MUrpM1ViOooUE0hw35rqScOOLmMZxoWdXURAaHTsvVL7N6qqmK%2FhrJq%2F1ZGhS7IVlR4PfLWO45LRuaFzllOfgd7OS7aiks7%2FfHDf2zvTR8TUKBpceFWuL0hZuwQvjRmCTymIWc08%2BCr1ZGeg%2B1NeVdnlEoXS9zHPEWeEs7XMhD6YJBK8K4OyYRjnRebHYUYRTt88%2FwJf%2FtSIHdqbgNUtzlAK2cVbvoneObx2q4FZulO%2FDWnEbf0IEm2o80HdjRKfmOvp4MkjVCBDIhsWAbqMaWYO5psXuh0r9twdbVhFoulZzbRhfm6wCrjCYodvGktCQF%2BzyjVKaXKg4%2BUhZAfFeuLqHzfzdTlXICOvuxcqCQXp3zZw2pBK%2FpWQGD8akO0tnydsqzFP10B6OlogB0%2FYjbR7SFWx4xC9PXeMKGEvsAGOqUBCPJDcWPsleTWpMSy1cKDK8dPEdW5MGKw350FMw9BHZJx0gldOMspHpy2g0WMp%2BUSf77g5vxwRxK1PMlPwnIILCGHATBgoitbwmfBXQlC9KCL%2FX7MXQtpPQnzic91V1OOzgaJ79z8oCkooqv3q%2FHQs%2BQPdmW0lBN8G3JhlFvTsTtgY9oCpxGvTmviSyUKv8MLSc%2FtKZ5YDc17w3ttKre1KKm1iDWm&X-Amz-Signature=c37488fc70afaf8bada318de4fdf73053a7a4d036e155e203854c1603206ec4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWBN7VN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi3SJnl%2BdihLIWAvtL6tOIHY3qd5kYMDMq8pKn6L1sXgIgByKF4os%2FUeI%2F7Q3IjKojpUZQFSEu%2FTd9Cm8yLsqU7MAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOKiW6CXX4NyjBknoircA15VNFavuVxsXYVUVivWq8GVLWEX9asufrZlxal8d1UAIBWkfT1ZFc5ecngFio5KAUTRFka2NOMyGAy4GY5EuNi0e5yGpFT5FuNJ23%2FGg4h675CYI6lqbSyabLAaxFtX5fnTU8WD9dCF9Nb00%2FYk%2Fn3%2FlwEpsJCXGLLBETHaeFrfd%2BYaHvmWUOS00KSz6fS65QTt91wmHIkB9kc2u3WeVCvP6MUrpM1ViOooUE0hw35rqScOOLmMZxoWdXURAaHTsvVL7N6qqmK%2FhrJq%2F1ZGhS7IVlR4PfLWO45LRuaFzllOfgd7OS7aiks7%2FfHDf2zvTR8TUKBpceFWuL0hZuwQvjRmCTymIWc08%2BCr1ZGeg%2B1NeVdnlEoXS9zHPEWeEs7XMhD6YJBK8K4OyYRjnRebHYUYRTt88%2FwJf%2FtSIHdqbgNUtzlAK2cVbvoneObx2q4FZulO%2FDWnEbf0IEm2o80HdjRKfmOvp4MkjVCBDIhsWAbqMaWYO5psXuh0r9twdbVhFoulZzbRhfm6wCrjCYodvGktCQF%2BzyjVKaXKg4%2BUhZAfFeuLqHzfzdTlXICOvuxcqCQXp3zZw2pBK%2FpWQGD8akO0tnydsqzFP10B6OlogB0%2FYjbR7SFWx4xC9PXeMKGEvsAGOqUBCPJDcWPsleTWpMSy1cKDK8dPEdW5MGKw350FMw9BHZJx0gldOMspHpy2g0WMp%2BUSf77g5vxwRxK1PMlPwnIILCGHATBgoitbwmfBXQlC9KCL%2FX7MXQtpPQnzic91V1OOzgaJ79z8oCkooqv3q%2FHQs%2BQPdmW0lBN8G3JhlFvTsTtgY9oCpxGvTmviSyUKv8MLSc%2FtKZ5YDc17w3ttKre1KKm1iDWm&X-Amz-Signature=986759391c7d22cb41f31cd506e44ed1b9f840110051b1ba1d8a278b1eb2fc36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWBN7VN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi3SJnl%2BdihLIWAvtL6tOIHY3qd5kYMDMq8pKn6L1sXgIgByKF4os%2FUeI%2F7Q3IjKojpUZQFSEu%2FTd9Cm8yLsqU7MAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOKiW6CXX4NyjBknoircA15VNFavuVxsXYVUVivWq8GVLWEX9asufrZlxal8d1UAIBWkfT1ZFc5ecngFio5KAUTRFka2NOMyGAy4GY5EuNi0e5yGpFT5FuNJ23%2FGg4h675CYI6lqbSyabLAaxFtX5fnTU8WD9dCF9Nb00%2FYk%2Fn3%2FlwEpsJCXGLLBETHaeFrfd%2BYaHvmWUOS00KSz6fS65QTt91wmHIkB9kc2u3WeVCvP6MUrpM1ViOooUE0hw35rqScOOLmMZxoWdXURAaHTsvVL7N6qqmK%2FhrJq%2F1ZGhS7IVlR4PfLWO45LRuaFzllOfgd7OS7aiks7%2FfHDf2zvTR8TUKBpceFWuL0hZuwQvjRmCTymIWc08%2BCr1ZGeg%2B1NeVdnlEoXS9zHPEWeEs7XMhD6YJBK8K4OyYRjnRebHYUYRTt88%2FwJf%2FtSIHdqbgNUtzlAK2cVbvoneObx2q4FZulO%2FDWnEbf0IEm2o80HdjRKfmOvp4MkjVCBDIhsWAbqMaWYO5psXuh0r9twdbVhFoulZzbRhfm6wCrjCYodvGktCQF%2BzyjVKaXKg4%2BUhZAfFeuLqHzfzdTlXICOvuxcqCQXp3zZw2pBK%2FpWQGD8akO0tnydsqzFP10B6OlogB0%2FYjbR7SFWx4xC9PXeMKGEvsAGOqUBCPJDcWPsleTWpMSy1cKDK8dPEdW5MGKw350FMw9BHZJx0gldOMspHpy2g0WMp%2BUSf77g5vxwRxK1PMlPwnIILCGHATBgoitbwmfBXQlC9KCL%2FX7MXQtpPQnzic91V1OOzgaJ79z8oCkooqv3q%2FHQs%2BQPdmW0lBN8G3JhlFvTsTtgY9oCpxGvTmviSyUKv8MLSc%2FtKZ5YDc17w3ttKre1KKm1iDWm&X-Amz-Signature=aa162052c634c12e711da282015427460646d60723b77ca1c3c7b9ec71a0b28f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWBN7VN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi3SJnl%2BdihLIWAvtL6tOIHY3qd5kYMDMq8pKn6L1sXgIgByKF4os%2FUeI%2F7Q3IjKojpUZQFSEu%2FTd9Cm8yLsqU7MAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOKiW6CXX4NyjBknoircA15VNFavuVxsXYVUVivWq8GVLWEX9asufrZlxal8d1UAIBWkfT1ZFc5ecngFio5KAUTRFka2NOMyGAy4GY5EuNi0e5yGpFT5FuNJ23%2FGg4h675CYI6lqbSyabLAaxFtX5fnTU8WD9dCF9Nb00%2FYk%2Fn3%2FlwEpsJCXGLLBETHaeFrfd%2BYaHvmWUOS00KSz6fS65QTt91wmHIkB9kc2u3WeVCvP6MUrpM1ViOooUE0hw35rqScOOLmMZxoWdXURAaHTsvVL7N6qqmK%2FhrJq%2F1ZGhS7IVlR4PfLWO45LRuaFzllOfgd7OS7aiks7%2FfHDf2zvTR8TUKBpceFWuL0hZuwQvjRmCTymIWc08%2BCr1ZGeg%2B1NeVdnlEoXS9zHPEWeEs7XMhD6YJBK8K4OyYRjnRebHYUYRTt88%2FwJf%2FtSIHdqbgNUtzlAK2cVbvoneObx2q4FZulO%2FDWnEbf0IEm2o80HdjRKfmOvp4MkjVCBDIhsWAbqMaWYO5psXuh0r9twdbVhFoulZzbRhfm6wCrjCYodvGktCQF%2BzyjVKaXKg4%2BUhZAfFeuLqHzfzdTlXICOvuxcqCQXp3zZw2pBK%2FpWQGD8akO0tnydsqzFP10B6OlogB0%2FYjbR7SFWx4xC9PXeMKGEvsAGOqUBCPJDcWPsleTWpMSy1cKDK8dPEdW5MGKw350FMw9BHZJx0gldOMspHpy2g0WMp%2BUSf77g5vxwRxK1PMlPwnIILCGHATBgoitbwmfBXQlC9KCL%2FX7MXQtpPQnzic91V1OOzgaJ79z8oCkooqv3q%2FHQs%2BQPdmW0lBN8G3JhlFvTsTtgY9oCpxGvTmviSyUKv8MLSc%2FtKZ5YDc17w3ttKre1KKm1iDWm&X-Amz-Signature=57f2e41617ba53cd539087c02a52c10204f003049c5174c28151700ff32179fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWBN7VN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi3SJnl%2BdihLIWAvtL6tOIHY3qd5kYMDMq8pKn6L1sXgIgByKF4os%2FUeI%2F7Q3IjKojpUZQFSEu%2FTd9Cm8yLsqU7MAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOKiW6CXX4NyjBknoircA15VNFavuVxsXYVUVivWq8GVLWEX9asufrZlxal8d1UAIBWkfT1ZFc5ecngFio5KAUTRFka2NOMyGAy4GY5EuNi0e5yGpFT5FuNJ23%2FGg4h675CYI6lqbSyabLAaxFtX5fnTU8WD9dCF9Nb00%2FYk%2Fn3%2FlwEpsJCXGLLBETHaeFrfd%2BYaHvmWUOS00KSz6fS65QTt91wmHIkB9kc2u3WeVCvP6MUrpM1ViOooUE0hw35rqScOOLmMZxoWdXURAaHTsvVL7N6qqmK%2FhrJq%2F1ZGhS7IVlR4PfLWO45LRuaFzllOfgd7OS7aiks7%2FfHDf2zvTR8TUKBpceFWuL0hZuwQvjRmCTymIWc08%2BCr1ZGeg%2B1NeVdnlEoXS9zHPEWeEs7XMhD6YJBK8K4OyYRjnRebHYUYRTt88%2FwJf%2FtSIHdqbgNUtzlAK2cVbvoneObx2q4FZulO%2FDWnEbf0IEm2o80HdjRKfmOvp4MkjVCBDIhsWAbqMaWYO5psXuh0r9twdbVhFoulZzbRhfm6wCrjCYodvGktCQF%2BzyjVKaXKg4%2BUhZAfFeuLqHzfzdTlXICOvuxcqCQXp3zZw2pBK%2FpWQGD8akO0tnydsqzFP10B6OlogB0%2FYjbR7SFWx4xC9PXeMKGEvsAGOqUBCPJDcWPsleTWpMSy1cKDK8dPEdW5MGKw350FMw9BHZJx0gldOMspHpy2g0WMp%2BUSf77g5vxwRxK1PMlPwnIILCGHATBgoitbwmfBXQlC9KCL%2FX7MXQtpPQnzic91V1OOzgaJ79z8oCkooqv3q%2FHQs%2BQPdmW0lBN8G3JhlFvTsTtgY9oCpxGvTmviSyUKv8MLSc%2FtKZ5YDc17w3ttKre1KKm1iDWm&X-Amz-Signature=9aa06a24f10844763d2574f5aa9fad777eddd76ed0f26674684592b6b93101db&X-Amz-SignedHeaders=host&x-id=GetObject)
