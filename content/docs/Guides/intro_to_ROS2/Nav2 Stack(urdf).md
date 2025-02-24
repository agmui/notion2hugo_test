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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6A52ZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA%2BOGpG2hHWGp3WK6s7TqOke%2B6l2TwyOTFVqZJKuDqrAiA25JBmoqaoMuqkNVyLwQVaFSMF9JT5%2BeBswRbldc5%2Fyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiGPF5z8iwxL5D3qRKtwD70B%2B28J3QXUgvNmi40KClOsYELdPnywhQ6j5mSW%2BZRVXtV5COtbDmvbZiEcTrhnphRxHC6Oks6jwBPiG%2BqEBqiEPUzzSH5CeQHrHpCARVQjTTx%2B71Gn6f9II%2BsZ4F%2BNoqf8O92AsDr5XO9dIBWXY3FrejrXAij2WtG49ZghzMvroMGcTFoN9o5JMvJ2yELXQZa5isRVmJ%2F3sT8ZxrLqNIDOk1MHuJHFNDYX6ArEicx3aQy1lOgw0JItqUN31bjZnNsmOslJZb0T3xSRhtYZGRWQR5ZdvXG%2Blt4eCQiEj%2BoihuPQCovw4lxq4rgNHB3nX3WaJlMXS0BqjfNqk%2F73TJEIGytjzABnAp%2BV3z95ZILulQAvaR6vB1aVWxaxaGP%2BCs359Bi%2FUkS2b7XYRNNH7%2BOpNH1Zp2AFplkXqJ6OX60H1hNu9Yhi8mvLzKjKzTIkxlU3%2B2WT59K18FFOGyOX6UcDtXgctmBAnnQVmIB9GbvuKm7u11nOM%2Blw05OK3I2nggRg%2FnfFlkPCbCwFLLVzJ8a8D3S2QhU8xDolDjFkV%2FWR%2FGkPZaA9jrngMjEDWLqQeRl8T3tzgdRIQPaP1wHoJU2IK51Xo4Vs%2Bo%2BTwMbeJAOU37HROp%2FRbWszvnLcwrNbzvQY6pgHEDm0PDO383Qc6pVh%2FgfCouO98Rszfj8Bqw6jiy%2BCGeRXTVN4PzgWmbzqhLjYRJD26iFuGMFO8%2BE0Hp9g6lBykHrRijQbTMErVA5Asn9mF99sFBQoZ0NsfC357xDGaw0UWcM7u4YOZs1oWVaTSqoqAJgbjefWqTSSYKO8%2FYBGxZZ2zQli3VjPldpZC3iMAOKA%2Bb56DBuh1YAlcSmOdZRsKPrcu7Y%2B%2F&X-Amz-Signature=302cdb5347924afd9b213fb4d1fbff12e5da855b189640a2afd6141870b0aadc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6A52ZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA%2BOGpG2hHWGp3WK6s7TqOke%2B6l2TwyOTFVqZJKuDqrAiA25JBmoqaoMuqkNVyLwQVaFSMF9JT5%2BeBswRbldc5%2Fyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiGPF5z8iwxL5D3qRKtwD70B%2B28J3QXUgvNmi40KClOsYELdPnywhQ6j5mSW%2BZRVXtV5COtbDmvbZiEcTrhnphRxHC6Oks6jwBPiG%2BqEBqiEPUzzSH5CeQHrHpCARVQjTTx%2B71Gn6f9II%2BsZ4F%2BNoqf8O92AsDr5XO9dIBWXY3FrejrXAij2WtG49ZghzMvroMGcTFoN9o5JMvJ2yELXQZa5isRVmJ%2F3sT8ZxrLqNIDOk1MHuJHFNDYX6ArEicx3aQy1lOgw0JItqUN31bjZnNsmOslJZb0T3xSRhtYZGRWQR5ZdvXG%2Blt4eCQiEj%2BoihuPQCovw4lxq4rgNHB3nX3WaJlMXS0BqjfNqk%2F73TJEIGytjzABnAp%2BV3z95ZILulQAvaR6vB1aVWxaxaGP%2BCs359Bi%2FUkS2b7XYRNNH7%2BOpNH1Zp2AFplkXqJ6OX60H1hNu9Yhi8mvLzKjKzTIkxlU3%2B2WT59K18FFOGyOX6UcDtXgctmBAnnQVmIB9GbvuKm7u11nOM%2Blw05OK3I2nggRg%2FnfFlkPCbCwFLLVzJ8a8D3S2QhU8xDolDjFkV%2FWR%2FGkPZaA9jrngMjEDWLqQeRl8T3tzgdRIQPaP1wHoJU2IK51Xo4Vs%2Bo%2BTwMbeJAOU37HROp%2FRbWszvnLcwrNbzvQY6pgHEDm0PDO383Qc6pVh%2FgfCouO98Rszfj8Bqw6jiy%2BCGeRXTVN4PzgWmbzqhLjYRJD26iFuGMFO8%2BE0Hp9g6lBykHrRijQbTMErVA5Asn9mF99sFBQoZ0NsfC357xDGaw0UWcM7u4YOZs1oWVaTSqoqAJgbjefWqTSSYKO8%2FYBGxZZ2zQli3VjPldpZC3iMAOKA%2Bb56DBuh1YAlcSmOdZRsKPrcu7Y%2B%2F&X-Amz-Signature=450e8c1eca9f0a9580bd77fa923eb7f89073f2e9722928e15ea57053ce7e4598&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6A52ZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA%2BOGpG2hHWGp3WK6s7TqOke%2B6l2TwyOTFVqZJKuDqrAiA25JBmoqaoMuqkNVyLwQVaFSMF9JT5%2BeBswRbldc5%2Fyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiGPF5z8iwxL5D3qRKtwD70B%2B28J3QXUgvNmi40KClOsYELdPnywhQ6j5mSW%2BZRVXtV5COtbDmvbZiEcTrhnphRxHC6Oks6jwBPiG%2BqEBqiEPUzzSH5CeQHrHpCARVQjTTx%2B71Gn6f9II%2BsZ4F%2BNoqf8O92AsDr5XO9dIBWXY3FrejrXAij2WtG49ZghzMvroMGcTFoN9o5JMvJ2yELXQZa5isRVmJ%2F3sT8ZxrLqNIDOk1MHuJHFNDYX6ArEicx3aQy1lOgw0JItqUN31bjZnNsmOslJZb0T3xSRhtYZGRWQR5ZdvXG%2Blt4eCQiEj%2BoihuPQCovw4lxq4rgNHB3nX3WaJlMXS0BqjfNqk%2F73TJEIGytjzABnAp%2BV3z95ZILulQAvaR6vB1aVWxaxaGP%2BCs359Bi%2FUkS2b7XYRNNH7%2BOpNH1Zp2AFplkXqJ6OX60H1hNu9Yhi8mvLzKjKzTIkxlU3%2B2WT59K18FFOGyOX6UcDtXgctmBAnnQVmIB9GbvuKm7u11nOM%2Blw05OK3I2nggRg%2FnfFlkPCbCwFLLVzJ8a8D3S2QhU8xDolDjFkV%2FWR%2FGkPZaA9jrngMjEDWLqQeRl8T3tzgdRIQPaP1wHoJU2IK51Xo4Vs%2Bo%2BTwMbeJAOU37HROp%2FRbWszvnLcwrNbzvQY6pgHEDm0PDO383Qc6pVh%2FgfCouO98Rszfj8Bqw6jiy%2BCGeRXTVN4PzgWmbzqhLjYRJD26iFuGMFO8%2BE0Hp9g6lBykHrRijQbTMErVA5Asn9mF99sFBQoZ0NsfC357xDGaw0UWcM7u4YOZs1oWVaTSqoqAJgbjefWqTSSYKO8%2FYBGxZZ2zQli3VjPldpZC3iMAOKA%2Bb56DBuh1YAlcSmOdZRsKPrcu7Y%2B%2F&X-Amz-Signature=6db4697e2384481aa6ba5d7cf1787b9039328cb1f4effef222b88533c4325fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6A52ZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA%2BOGpG2hHWGp3WK6s7TqOke%2B6l2TwyOTFVqZJKuDqrAiA25JBmoqaoMuqkNVyLwQVaFSMF9JT5%2BeBswRbldc5%2Fyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiGPF5z8iwxL5D3qRKtwD70B%2B28J3QXUgvNmi40KClOsYELdPnywhQ6j5mSW%2BZRVXtV5COtbDmvbZiEcTrhnphRxHC6Oks6jwBPiG%2BqEBqiEPUzzSH5CeQHrHpCARVQjTTx%2B71Gn6f9II%2BsZ4F%2BNoqf8O92AsDr5XO9dIBWXY3FrejrXAij2WtG49ZghzMvroMGcTFoN9o5JMvJ2yELXQZa5isRVmJ%2F3sT8ZxrLqNIDOk1MHuJHFNDYX6ArEicx3aQy1lOgw0JItqUN31bjZnNsmOslJZb0T3xSRhtYZGRWQR5ZdvXG%2Blt4eCQiEj%2BoihuPQCovw4lxq4rgNHB3nX3WaJlMXS0BqjfNqk%2F73TJEIGytjzABnAp%2BV3z95ZILulQAvaR6vB1aVWxaxaGP%2BCs359Bi%2FUkS2b7XYRNNH7%2BOpNH1Zp2AFplkXqJ6OX60H1hNu9Yhi8mvLzKjKzTIkxlU3%2B2WT59K18FFOGyOX6UcDtXgctmBAnnQVmIB9GbvuKm7u11nOM%2Blw05OK3I2nggRg%2FnfFlkPCbCwFLLVzJ8a8D3S2QhU8xDolDjFkV%2FWR%2FGkPZaA9jrngMjEDWLqQeRl8T3tzgdRIQPaP1wHoJU2IK51Xo4Vs%2Bo%2BTwMbeJAOU37HROp%2FRbWszvnLcwrNbzvQY6pgHEDm0PDO383Qc6pVh%2FgfCouO98Rszfj8Bqw6jiy%2BCGeRXTVN4PzgWmbzqhLjYRJD26iFuGMFO8%2BE0Hp9g6lBykHrRijQbTMErVA5Asn9mF99sFBQoZ0NsfC357xDGaw0UWcM7u4YOZs1oWVaTSqoqAJgbjefWqTSSYKO8%2FYBGxZZ2zQli3VjPldpZC3iMAOKA%2Bb56DBuh1YAlcSmOdZRsKPrcu7Y%2B%2F&X-Amz-Signature=199487e239cb63e2e3dc082b93d4f7a57cada4e3b12b30779976f45cbcb10322&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6A52ZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA%2BOGpG2hHWGp3WK6s7TqOke%2B6l2TwyOTFVqZJKuDqrAiA25JBmoqaoMuqkNVyLwQVaFSMF9JT5%2BeBswRbldc5%2Fyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiGPF5z8iwxL5D3qRKtwD70B%2B28J3QXUgvNmi40KClOsYELdPnywhQ6j5mSW%2BZRVXtV5COtbDmvbZiEcTrhnphRxHC6Oks6jwBPiG%2BqEBqiEPUzzSH5CeQHrHpCARVQjTTx%2B71Gn6f9II%2BsZ4F%2BNoqf8O92AsDr5XO9dIBWXY3FrejrXAij2WtG49ZghzMvroMGcTFoN9o5JMvJ2yELXQZa5isRVmJ%2F3sT8ZxrLqNIDOk1MHuJHFNDYX6ArEicx3aQy1lOgw0JItqUN31bjZnNsmOslJZb0T3xSRhtYZGRWQR5ZdvXG%2Blt4eCQiEj%2BoihuPQCovw4lxq4rgNHB3nX3WaJlMXS0BqjfNqk%2F73TJEIGytjzABnAp%2BV3z95ZILulQAvaR6vB1aVWxaxaGP%2BCs359Bi%2FUkS2b7XYRNNH7%2BOpNH1Zp2AFplkXqJ6OX60H1hNu9Yhi8mvLzKjKzTIkxlU3%2B2WT59K18FFOGyOX6UcDtXgctmBAnnQVmIB9GbvuKm7u11nOM%2Blw05OK3I2nggRg%2FnfFlkPCbCwFLLVzJ8a8D3S2QhU8xDolDjFkV%2FWR%2FGkPZaA9jrngMjEDWLqQeRl8T3tzgdRIQPaP1wHoJU2IK51Xo4Vs%2Bo%2BTwMbeJAOU37HROp%2FRbWszvnLcwrNbzvQY6pgHEDm0PDO383Qc6pVh%2FgfCouO98Rszfj8Bqw6jiy%2BCGeRXTVN4PzgWmbzqhLjYRJD26iFuGMFO8%2BE0Hp9g6lBykHrRijQbTMErVA5Asn9mF99sFBQoZ0NsfC357xDGaw0UWcM7u4YOZs1oWVaTSqoqAJgbjefWqTSSYKO8%2FYBGxZZ2zQli3VjPldpZC3iMAOKA%2Bb56DBuh1YAlcSmOdZRsKPrcu7Y%2B%2F&X-Amz-Signature=bcfea0363656e97254ec5d5cc14693090e7f5942e3ecd4b5286b61343ece9537&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6A52ZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA%2BOGpG2hHWGp3WK6s7TqOke%2B6l2TwyOTFVqZJKuDqrAiA25JBmoqaoMuqkNVyLwQVaFSMF9JT5%2BeBswRbldc5%2Fyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMiGPF5z8iwxL5D3qRKtwD70B%2B28J3QXUgvNmi40KClOsYELdPnywhQ6j5mSW%2BZRVXtV5COtbDmvbZiEcTrhnphRxHC6Oks6jwBPiG%2BqEBqiEPUzzSH5CeQHrHpCARVQjTTx%2B71Gn6f9II%2BsZ4F%2BNoqf8O92AsDr5XO9dIBWXY3FrejrXAij2WtG49ZghzMvroMGcTFoN9o5JMvJ2yELXQZa5isRVmJ%2F3sT8ZxrLqNIDOk1MHuJHFNDYX6ArEicx3aQy1lOgw0JItqUN31bjZnNsmOslJZb0T3xSRhtYZGRWQR5ZdvXG%2Blt4eCQiEj%2BoihuPQCovw4lxq4rgNHB3nX3WaJlMXS0BqjfNqk%2F73TJEIGytjzABnAp%2BV3z95ZILulQAvaR6vB1aVWxaxaGP%2BCs359Bi%2FUkS2b7XYRNNH7%2BOpNH1Zp2AFplkXqJ6OX60H1hNu9Yhi8mvLzKjKzTIkxlU3%2B2WT59K18FFOGyOX6UcDtXgctmBAnnQVmIB9GbvuKm7u11nOM%2Blw05OK3I2nggRg%2FnfFlkPCbCwFLLVzJ8a8D3S2QhU8xDolDjFkV%2FWR%2FGkPZaA9jrngMjEDWLqQeRl8T3tzgdRIQPaP1wHoJU2IK51Xo4Vs%2Bo%2BTwMbeJAOU37HROp%2FRbWszvnLcwrNbzvQY6pgHEDm0PDO383Qc6pVh%2FgfCouO98Rszfj8Bqw6jiy%2BCGeRXTVN4PzgWmbzqhLjYRJD26iFuGMFO8%2BE0Hp9g6lBykHrRijQbTMErVA5Asn9mF99sFBQoZ0NsfC357xDGaw0UWcM7u4YOZs1oWVaTSqoqAJgbjefWqTSSYKO8%2FYBGxZZ2zQli3VjPldpZC3iMAOKA%2Bb56DBuh1YAlcSmOdZRsKPrcu7Y%2B%2F&X-Amz-Signature=5bcdfd971e21e1b9e9c913f3d22efdcc102fddcccf453dbb692b5e45d971b87f&X-Amz-SignedHeaders=host&x-id=GetObject)
