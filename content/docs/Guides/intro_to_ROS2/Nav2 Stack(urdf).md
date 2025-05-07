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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=3a1245b4c9bdeaae29f094cbc4c38f26d7b93e8f89f57675fc3adc405a8e6219&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=7e50308f9f48d6c7a34f3633952f3371c3cb63125dc19a2939782acc2153ecc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=7370e4c03207e32d687f64bca0e2d320bc3826729e771163c9171158dcceb275&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=c1c0aaf2b966f1642efa869481181f9ff6af9b17414cfa1b31fd03c80a2d3cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=01952854912386bde12f967d399a4d8d75691f035e5063b2cd4ee929a1c40f35&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKDUEC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdRw26%2FjqmtDsgU3YBb5lKeKSmgSx6sebGLf4tT5I9VAiA26TnGmTeppa3ujthObgD1Qhi8KoA1wFv3CONWMwrJUSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMy7n5icxlE84xuqOOKtwDWnsJacD9OP46BtMESn6zlLxCspz%2B8SuscsxyCGMhZ7DPpOi7%2F4kxBuY7EcTCjtiaXsbtClqXs2Wlhh8NIXO3T4iHN3m3tlzzM2nJfZH6mP7uQOAZp6gG4DTE7mPx%2FTh9EVxBd9%2F0sqYuXQYwruvCHFDe5rMKkV4gQ6HM9Vt%2B2WlPOYYWGYaSVRbgMD8rxunqkpLHuAb%2F0nKzqZ%2BoMgPQSmeLujmHN44Rf5xbEe45wGd8%2FJnd7Xe2PKAfbT8DKXu28rwo6Yy7DF0%2B6qExylf3MteT1o7Ni75HqkmxnZVanz%2F9PYtrrqRNpRuHtaU9nn3SVDzHPrARsyGN289E86RaneytAkDx2OotqpYXoJrJkaty5IpAH1XhbQ2Dq9a5hiB395l47irnomwvZPEGYA9BwkU45YioPB1F%2FMxqBpX8vR1NZK5gWzadrLMxgh30Vd3WNTxsOy2QH4dYUY3M6%2BFPdD0iykq3NO4wPk569RLT2N7FNoHJHxrjlstUi93Vp8wCt2X25N9KTjVZv6BYNigCdg3r5VZhlIT3ae3uVusFVP6Pzlaiflai8rKB5kvEbU172T2qGSyksCI73GMk%2FNHQFgXeXCQa74XFOE9ypokB0EFC2HldZZhjX9%2BL%2FKUwp43vwAY6pgGB2GEpsGo8HjD8mudc7HI4dOCK4x5VVp4Rixc%2BQVMDkijdCOtvonNUskesmJKzWttATGuz%2BoTRDpPiOeSMd1kiC%2F%2F4mSlO5kRQTumq3ucINoi8gFfGhxPSLEDLcNAxaKcqdno34o5ZohVvVusPuRTCqT927IXSPq1sB49KCl2naiiVg6ZLfr4HCJzYP1TKItl0%2FacLfqDwaQAwrAO4TnkEuu6CKF4n&X-Amz-Signature=d819ef891244d064f864ca97552b96bf2e18f6d4d242b3cd0f0528d55af65399&X-Amz-SignedHeaders=host&x-id=GetObject)
