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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=7d0627ea0897b3116acdb686339f511c21b358d143e1efe3e80e675744fa58ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=579773d644a18e5df52959b9ec4e49aed3ebe60fe6dde0d6c8a0b75e52e2885d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=ab9d849a3b026154f332b4659c5c0fc2f7c4ae64c0d836d28f29706044398680&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=0b0a710ddef16f4b5916dfc3af9e8cdb412e79c71fe91515cdcef1475eca8c06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=0138c0c9f86e4149cc09ab6884650c4ca91d494f2988e20863f3b8e629fd96c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=56f181454ee575891882da46d7f3989df8284c83f7a858b7d97bac63638819fa&X-Amz-SignedHeaders=host&x-id=GetObject)
