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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCD6YD5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCv4R%2B6OUk%2BXFZiDtojwleyuHbkKfufYGhqWba5bJ9urQIhALAfcecWi2qZ5XdQ0QyXUCbc4eSHEfYuIyeSwfs1rHdeKv8DCH4QABoMNjM3NDIzMTgzODA1Igwn9j89a28Fvm%2Fnd2Yq3AM2Q%2FVLXUjeDUrC0xzC7f5MTZ0NSdTCfbJyUyuLoTcisI3sg5%2BerZUSOOTPd7WRhQGOCfUi75LjJd23COxVY1AsRUzoT%2FYh3aMyrR%2F8dy4WW%2BCJKvESdy%2BCRSTwRzWzKM7bpeUW%2BLN9%2FSGXbykACswZ4NcbAaG4Yp49EDsJR%2BWZ%2FZ83TPOERkjry64ngpYBeJIO4iGUNfYmTg%2FJDouz7ht29BWLjKUrUMqmSO50oQswbqQvQkxnXChklvVspRwE5RJBmgRBxoo0hrwmwmlAjmZ1JR4ojsGU1QbnjyaBkiJtYuAzltCl9uRF2FRM%2BQpthzzeNNgXPRKQbdk6N0XNFcgzhWptZ3OMw%2FiWufMgaYmqijCnfK6GDd67oFI5jFgWjHL8Himp6nTsURHIsuKAltr%2BD7lD8M4yDCTErE358qUWCNI506oUQTtmX9GfKQcAHOy5x4ewjuEfPwA%2FAopAoKxFd1xRd8vmNP4ozbQMmlU13gmlVchenKuacmbixPbXGvohgftNdvQqlIWTJ5RKKMsuyrjQaesif3bOJHRrvXsFPiI93bRAx2ILOVsvaj1Bx9N8X0lGwPnxSju%2BH6UjE8CZS2xMtEdi3BN%2BUE1puxVQRp83iQ%2FkBpHLjJEoPjCJ2ey%2BBjqkAWpqr7bXz0qkHFd0NLj7tKRUa5iXFhup5wWH5B5gYDKYnZHrfdq15PrqoPkaV9z2NJDjEQezaeLfakJW%2FR3afFDTq0sC4Rsc8MhNB08bQ4x2do9J1FaDcpaEWMJ1WKTH7sSb743AB5gEACtUg4sCDM9hNi9sygZaIPNqriYnX%2Fhn1prDDC4jkR4Fjhf2H83JAz0vw%2B80Q02TCqGObRwREzcgYueu&X-Amz-Signature=b052bcfa0cbfc8c715b5b2a2c21db999d85ad2ea93203d7cb6c1ce00d5ef840e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCD6YD5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCv4R%2B6OUk%2BXFZiDtojwleyuHbkKfufYGhqWba5bJ9urQIhALAfcecWi2qZ5XdQ0QyXUCbc4eSHEfYuIyeSwfs1rHdeKv8DCH4QABoMNjM3NDIzMTgzODA1Igwn9j89a28Fvm%2Fnd2Yq3AM2Q%2FVLXUjeDUrC0xzC7f5MTZ0NSdTCfbJyUyuLoTcisI3sg5%2BerZUSOOTPd7WRhQGOCfUi75LjJd23COxVY1AsRUzoT%2FYh3aMyrR%2F8dy4WW%2BCJKvESdy%2BCRSTwRzWzKM7bpeUW%2BLN9%2FSGXbykACswZ4NcbAaG4Yp49EDsJR%2BWZ%2FZ83TPOERkjry64ngpYBeJIO4iGUNfYmTg%2FJDouz7ht29BWLjKUrUMqmSO50oQswbqQvQkxnXChklvVspRwE5RJBmgRBxoo0hrwmwmlAjmZ1JR4ojsGU1QbnjyaBkiJtYuAzltCl9uRF2FRM%2BQpthzzeNNgXPRKQbdk6N0XNFcgzhWptZ3OMw%2FiWufMgaYmqijCnfK6GDd67oFI5jFgWjHL8Himp6nTsURHIsuKAltr%2BD7lD8M4yDCTErE358qUWCNI506oUQTtmX9GfKQcAHOy5x4ewjuEfPwA%2FAopAoKxFd1xRd8vmNP4ozbQMmlU13gmlVchenKuacmbixPbXGvohgftNdvQqlIWTJ5RKKMsuyrjQaesif3bOJHRrvXsFPiI93bRAx2ILOVsvaj1Bx9N8X0lGwPnxSju%2BH6UjE8CZS2xMtEdi3BN%2BUE1puxVQRp83iQ%2FkBpHLjJEoPjCJ2ey%2BBjqkAWpqr7bXz0qkHFd0NLj7tKRUa5iXFhup5wWH5B5gYDKYnZHrfdq15PrqoPkaV9z2NJDjEQezaeLfakJW%2FR3afFDTq0sC4Rsc8MhNB08bQ4x2do9J1FaDcpaEWMJ1WKTH7sSb743AB5gEACtUg4sCDM9hNi9sygZaIPNqriYnX%2Fhn1prDDC4jkR4Fjhf2H83JAz0vw%2B80Q02TCqGObRwREzcgYueu&X-Amz-Signature=c0e8e5256fef44574038128405a61062feed065d71328cf65b64356acc729c35&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCD6YD5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCv4R%2B6OUk%2BXFZiDtojwleyuHbkKfufYGhqWba5bJ9urQIhALAfcecWi2qZ5XdQ0QyXUCbc4eSHEfYuIyeSwfs1rHdeKv8DCH4QABoMNjM3NDIzMTgzODA1Igwn9j89a28Fvm%2Fnd2Yq3AM2Q%2FVLXUjeDUrC0xzC7f5MTZ0NSdTCfbJyUyuLoTcisI3sg5%2BerZUSOOTPd7WRhQGOCfUi75LjJd23COxVY1AsRUzoT%2FYh3aMyrR%2F8dy4WW%2BCJKvESdy%2BCRSTwRzWzKM7bpeUW%2BLN9%2FSGXbykACswZ4NcbAaG4Yp49EDsJR%2BWZ%2FZ83TPOERkjry64ngpYBeJIO4iGUNfYmTg%2FJDouz7ht29BWLjKUrUMqmSO50oQswbqQvQkxnXChklvVspRwE5RJBmgRBxoo0hrwmwmlAjmZ1JR4ojsGU1QbnjyaBkiJtYuAzltCl9uRF2FRM%2BQpthzzeNNgXPRKQbdk6N0XNFcgzhWptZ3OMw%2FiWufMgaYmqijCnfK6GDd67oFI5jFgWjHL8Himp6nTsURHIsuKAltr%2BD7lD8M4yDCTErE358qUWCNI506oUQTtmX9GfKQcAHOy5x4ewjuEfPwA%2FAopAoKxFd1xRd8vmNP4ozbQMmlU13gmlVchenKuacmbixPbXGvohgftNdvQqlIWTJ5RKKMsuyrjQaesif3bOJHRrvXsFPiI93bRAx2ILOVsvaj1Bx9N8X0lGwPnxSju%2BH6UjE8CZS2xMtEdi3BN%2BUE1puxVQRp83iQ%2FkBpHLjJEoPjCJ2ey%2BBjqkAWpqr7bXz0qkHFd0NLj7tKRUa5iXFhup5wWH5B5gYDKYnZHrfdq15PrqoPkaV9z2NJDjEQezaeLfakJW%2FR3afFDTq0sC4Rsc8MhNB08bQ4x2do9J1FaDcpaEWMJ1WKTH7sSb743AB5gEACtUg4sCDM9hNi9sygZaIPNqriYnX%2Fhn1prDDC4jkR4Fjhf2H83JAz0vw%2B80Q02TCqGObRwREzcgYueu&X-Amz-Signature=864714551921751517104196d493ec4788d501d2bf80888b297955230449da17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCD6YD5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCv4R%2B6OUk%2BXFZiDtojwleyuHbkKfufYGhqWba5bJ9urQIhALAfcecWi2qZ5XdQ0QyXUCbc4eSHEfYuIyeSwfs1rHdeKv8DCH4QABoMNjM3NDIzMTgzODA1Igwn9j89a28Fvm%2Fnd2Yq3AM2Q%2FVLXUjeDUrC0xzC7f5MTZ0NSdTCfbJyUyuLoTcisI3sg5%2BerZUSOOTPd7WRhQGOCfUi75LjJd23COxVY1AsRUzoT%2FYh3aMyrR%2F8dy4WW%2BCJKvESdy%2BCRSTwRzWzKM7bpeUW%2BLN9%2FSGXbykACswZ4NcbAaG4Yp49EDsJR%2BWZ%2FZ83TPOERkjry64ngpYBeJIO4iGUNfYmTg%2FJDouz7ht29BWLjKUrUMqmSO50oQswbqQvQkxnXChklvVspRwE5RJBmgRBxoo0hrwmwmlAjmZ1JR4ojsGU1QbnjyaBkiJtYuAzltCl9uRF2FRM%2BQpthzzeNNgXPRKQbdk6N0XNFcgzhWptZ3OMw%2FiWufMgaYmqijCnfK6GDd67oFI5jFgWjHL8Himp6nTsURHIsuKAltr%2BD7lD8M4yDCTErE358qUWCNI506oUQTtmX9GfKQcAHOy5x4ewjuEfPwA%2FAopAoKxFd1xRd8vmNP4ozbQMmlU13gmlVchenKuacmbixPbXGvohgftNdvQqlIWTJ5RKKMsuyrjQaesif3bOJHRrvXsFPiI93bRAx2ILOVsvaj1Bx9N8X0lGwPnxSju%2BH6UjE8CZS2xMtEdi3BN%2BUE1puxVQRp83iQ%2FkBpHLjJEoPjCJ2ey%2BBjqkAWpqr7bXz0qkHFd0NLj7tKRUa5iXFhup5wWH5B5gYDKYnZHrfdq15PrqoPkaV9z2NJDjEQezaeLfakJW%2FR3afFDTq0sC4Rsc8MhNB08bQ4x2do9J1FaDcpaEWMJ1WKTH7sSb743AB5gEACtUg4sCDM9hNi9sygZaIPNqriYnX%2Fhn1prDDC4jkR4Fjhf2H83JAz0vw%2B80Q02TCqGObRwREzcgYueu&X-Amz-Signature=7f77b35d0ff34811790081050de55a34f9e677b742142e5caa8caf04edf49c94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCD6YD5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCv4R%2B6OUk%2BXFZiDtojwleyuHbkKfufYGhqWba5bJ9urQIhALAfcecWi2qZ5XdQ0QyXUCbc4eSHEfYuIyeSwfs1rHdeKv8DCH4QABoMNjM3NDIzMTgzODA1Igwn9j89a28Fvm%2Fnd2Yq3AM2Q%2FVLXUjeDUrC0xzC7f5MTZ0NSdTCfbJyUyuLoTcisI3sg5%2BerZUSOOTPd7WRhQGOCfUi75LjJd23COxVY1AsRUzoT%2FYh3aMyrR%2F8dy4WW%2BCJKvESdy%2BCRSTwRzWzKM7bpeUW%2BLN9%2FSGXbykACswZ4NcbAaG4Yp49EDsJR%2BWZ%2FZ83TPOERkjry64ngpYBeJIO4iGUNfYmTg%2FJDouz7ht29BWLjKUrUMqmSO50oQswbqQvQkxnXChklvVspRwE5RJBmgRBxoo0hrwmwmlAjmZ1JR4ojsGU1QbnjyaBkiJtYuAzltCl9uRF2FRM%2BQpthzzeNNgXPRKQbdk6N0XNFcgzhWptZ3OMw%2FiWufMgaYmqijCnfK6GDd67oFI5jFgWjHL8Himp6nTsURHIsuKAltr%2BD7lD8M4yDCTErE358qUWCNI506oUQTtmX9GfKQcAHOy5x4ewjuEfPwA%2FAopAoKxFd1xRd8vmNP4ozbQMmlU13gmlVchenKuacmbixPbXGvohgftNdvQqlIWTJ5RKKMsuyrjQaesif3bOJHRrvXsFPiI93bRAx2ILOVsvaj1Bx9N8X0lGwPnxSju%2BH6UjE8CZS2xMtEdi3BN%2BUE1puxVQRp83iQ%2FkBpHLjJEoPjCJ2ey%2BBjqkAWpqr7bXz0qkHFd0NLj7tKRUa5iXFhup5wWH5B5gYDKYnZHrfdq15PrqoPkaV9z2NJDjEQezaeLfakJW%2FR3afFDTq0sC4Rsc8MhNB08bQ4x2do9J1FaDcpaEWMJ1WKTH7sSb743AB5gEACtUg4sCDM9hNi9sygZaIPNqriYnX%2Fhn1prDDC4jkR4Fjhf2H83JAz0vw%2B80Q02TCqGObRwREzcgYueu&X-Amz-Signature=119b358de565e129005c8d9881bd2379343af479ab1043459d2a61cd2ca234fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCD6YD5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCv4R%2B6OUk%2BXFZiDtojwleyuHbkKfufYGhqWba5bJ9urQIhALAfcecWi2qZ5XdQ0QyXUCbc4eSHEfYuIyeSwfs1rHdeKv8DCH4QABoMNjM3NDIzMTgzODA1Igwn9j89a28Fvm%2Fnd2Yq3AM2Q%2FVLXUjeDUrC0xzC7f5MTZ0NSdTCfbJyUyuLoTcisI3sg5%2BerZUSOOTPd7WRhQGOCfUi75LjJd23COxVY1AsRUzoT%2FYh3aMyrR%2F8dy4WW%2BCJKvESdy%2BCRSTwRzWzKM7bpeUW%2BLN9%2FSGXbykACswZ4NcbAaG4Yp49EDsJR%2BWZ%2FZ83TPOERkjry64ngpYBeJIO4iGUNfYmTg%2FJDouz7ht29BWLjKUrUMqmSO50oQswbqQvQkxnXChklvVspRwE5RJBmgRBxoo0hrwmwmlAjmZ1JR4ojsGU1QbnjyaBkiJtYuAzltCl9uRF2FRM%2BQpthzzeNNgXPRKQbdk6N0XNFcgzhWptZ3OMw%2FiWufMgaYmqijCnfK6GDd67oFI5jFgWjHL8Himp6nTsURHIsuKAltr%2BD7lD8M4yDCTErE358qUWCNI506oUQTtmX9GfKQcAHOy5x4ewjuEfPwA%2FAopAoKxFd1xRd8vmNP4ozbQMmlU13gmlVchenKuacmbixPbXGvohgftNdvQqlIWTJ5RKKMsuyrjQaesif3bOJHRrvXsFPiI93bRAx2ILOVsvaj1Bx9N8X0lGwPnxSju%2BH6UjE8CZS2xMtEdi3BN%2BUE1puxVQRp83iQ%2FkBpHLjJEoPjCJ2ey%2BBjqkAWpqr7bXz0qkHFd0NLj7tKRUa5iXFhup5wWH5B5gYDKYnZHrfdq15PrqoPkaV9z2NJDjEQezaeLfakJW%2FR3afFDTq0sC4Rsc8MhNB08bQ4x2do9J1FaDcpaEWMJ1WKTH7sSb743AB5gEACtUg4sCDM9hNi9sygZaIPNqriYnX%2Fhn1prDDC4jkR4Fjhf2H83JAz0vw%2B80Q02TCqGObRwREzcgYueu&X-Amz-Signature=0198874ae84308db40ddce0744781d2ecdc5576dff93da532856e4dfe678ea29&X-Amz-SignedHeaders=host&x-id=GetObject)
