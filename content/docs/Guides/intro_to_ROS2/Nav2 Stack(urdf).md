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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKITBJIF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsX%2Foo50perQzGw0C9QE80MUmiF%2FEARDd2%2BeN2JABZZAiAhRLGTTZlqZe8EOBMSspK8CHaqQuIq%2FrKwAeLmN1J0MCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnDL81OwGwG%2BA4uaKtwDeEXM4DZLoojXFRhl59J9krIZH66xHWTNNB1ZmPhmKEx700wAcSIVE1XxJif%2FgSpWtpQWMzTzIYecl6cZGYDEgmGuRVRJAOC%2FJw%2BE4oZM%2BxQQd%2BYiYHGi4Bo%2FQn0V5CwSLltafG351PGEq4FRkBIsRv91Uoqno2ufy%2FONsvFAsYcQ%2ByGKNWaOq6w%2FFT7EbPuQXSOVj7sNkp4C5%2F%2Fqpq9Uqn%2BYXBz1b7brJdwBSLpUTw%2Fq0%2FqH8osdwyJNgidjEMhzLDoluYPagSiMN3YktruAdAQ5t0XTvSk4IbeRQs7aLrAogAqXqSvOohjnefe%2BZu3HMYvawhNSu9GfoLAwm6390%2B%2F46Xrxr8R4sLhYHQGdIWqsCK2zdyX27wOFl4hEcUwc574SZKXMzIMboeYcz9myxT5acMW4mHFXYnbJtl2HepDI7f5Y580ftrrd9vIFaG7SiEcTCa9SYdinojI2R1wY5GtX0%2FaC6q4QkP2v22feowg9fPxVKUkWCmznoQFuINCHM3OrpncZxI7UvczY8PjZW6GMDkOE4VPIQAky3wwRhHJjriQoxabiNVLPRiDzgHwcod5NCgzydqqck94JB9DheZkrkG%2FKH53tfBKeeZJyrqvqTGohrCzwLNoNBtwwiKKMwAY6pgEIomKbjyxrO%2Bn6casWgVoqsrV9J4xukSh4pnCcUFChPrSlXsLnm80BNqE3xYc5T85h4Dnb1GkQnbB1TDseL7hSbXnn%2BnGwniT0mz9WpIxVKg3MQn3gLW1cbo6xPiC14v4vJEL0FYHCzED1QAtBvNgpanz06kLeMRBmXPdz4UdEZMKDELpBq74YAx6Mr7aeMOH4Y3d0jbXLyVXnXfcLbfkUPhvd%2Bq5e&X-Amz-Signature=4f38972f1672a40e455be2175b5a6971d86cc2841ab28207e3eed6c228fa8ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKITBJIF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsX%2Foo50perQzGw0C9QE80MUmiF%2FEARDd2%2BeN2JABZZAiAhRLGTTZlqZe8EOBMSspK8CHaqQuIq%2FrKwAeLmN1J0MCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnDL81OwGwG%2BA4uaKtwDeEXM4DZLoojXFRhl59J9krIZH66xHWTNNB1ZmPhmKEx700wAcSIVE1XxJif%2FgSpWtpQWMzTzIYecl6cZGYDEgmGuRVRJAOC%2FJw%2BE4oZM%2BxQQd%2BYiYHGi4Bo%2FQn0V5CwSLltafG351PGEq4FRkBIsRv91Uoqno2ufy%2FONsvFAsYcQ%2ByGKNWaOq6w%2FFT7EbPuQXSOVj7sNkp4C5%2F%2Fqpq9Uqn%2BYXBz1b7brJdwBSLpUTw%2Fq0%2FqH8osdwyJNgidjEMhzLDoluYPagSiMN3YktruAdAQ5t0XTvSk4IbeRQs7aLrAogAqXqSvOohjnefe%2BZu3HMYvawhNSu9GfoLAwm6390%2B%2F46Xrxr8R4sLhYHQGdIWqsCK2zdyX27wOFl4hEcUwc574SZKXMzIMboeYcz9myxT5acMW4mHFXYnbJtl2HepDI7f5Y580ftrrd9vIFaG7SiEcTCa9SYdinojI2R1wY5GtX0%2FaC6q4QkP2v22feowg9fPxVKUkWCmznoQFuINCHM3OrpncZxI7UvczY8PjZW6GMDkOE4VPIQAky3wwRhHJjriQoxabiNVLPRiDzgHwcod5NCgzydqqck94JB9DheZkrkG%2FKH53tfBKeeZJyrqvqTGohrCzwLNoNBtwwiKKMwAY6pgEIomKbjyxrO%2Bn6casWgVoqsrV9J4xukSh4pnCcUFChPrSlXsLnm80BNqE3xYc5T85h4Dnb1GkQnbB1TDseL7hSbXnn%2BnGwniT0mz9WpIxVKg3MQn3gLW1cbo6xPiC14v4vJEL0FYHCzED1QAtBvNgpanz06kLeMRBmXPdz4UdEZMKDELpBq74YAx6Mr7aeMOH4Y3d0jbXLyVXnXfcLbfkUPhvd%2Bq5e&X-Amz-Signature=5bf21cde8d00084f2dbf5196eef8c5584fbae4c71734be987216680670b875b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKITBJIF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsX%2Foo50perQzGw0C9QE80MUmiF%2FEARDd2%2BeN2JABZZAiAhRLGTTZlqZe8EOBMSspK8CHaqQuIq%2FrKwAeLmN1J0MCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnDL81OwGwG%2BA4uaKtwDeEXM4DZLoojXFRhl59J9krIZH66xHWTNNB1ZmPhmKEx700wAcSIVE1XxJif%2FgSpWtpQWMzTzIYecl6cZGYDEgmGuRVRJAOC%2FJw%2BE4oZM%2BxQQd%2BYiYHGi4Bo%2FQn0V5CwSLltafG351PGEq4FRkBIsRv91Uoqno2ufy%2FONsvFAsYcQ%2ByGKNWaOq6w%2FFT7EbPuQXSOVj7sNkp4C5%2F%2Fqpq9Uqn%2BYXBz1b7brJdwBSLpUTw%2Fq0%2FqH8osdwyJNgidjEMhzLDoluYPagSiMN3YktruAdAQ5t0XTvSk4IbeRQs7aLrAogAqXqSvOohjnefe%2BZu3HMYvawhNSu9GfoLAwm6390%2B%2F46Xrxr8R4sLhYHQGdIWqsCK2zdyX27wOFl4hEcUwc574SZKXMzIMboeYcz9myxT5acMW4mHFXYnbJtl2HepDI7f5Y580ftrrd9vIFaG7SiEcTCa9SYdinojI2R1wY5GtX0%2FaC6q4QkP2v22feowg9fPxVKUkWCmznoQFuINCHM3OrpncZxI7UvczY8PjZW6GMDkOE4VPIQAky3wwRhHJjriQoxabiNVLPRiDzgHwcod5NCgzydqqck94JB9DheZkrkG%2FKH53tfBKeeZJyrqvqTGohrCzwLNoNBtwwiKKMwAY6pgEIomKbjyxrO%2Bn6casWgVoqsrV9J4xukSh4pnCcUFChPrSlXsLnm80BNqE3xYc5T85h4Dnb1GkQnbB1TDseL7hSbXnn%2BnGwniT0mz9WpIxVKg3MQn3gLW1cbo6xPiC14v4vJEL0FYHCzED1QAtBvNgpanz06kLeMRBmXPdz4UdEZMKDELpBq74YAx6Mr7aeMOH4Y3d0jbXLyVXnXfcLbfkUPhvd%2Bq5e&X-Amz-Signature=afa1203bde392d89a572d253b5e4f814f0f40da7235de96fa580ac45a77fd4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKITBJIF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsX%2Foo50perQzGw0C9QE80MUmiF%2FEARDd2%2BeN2JABZZAiAhRLGTTZlqZe8EOBMSspK8CHaqQuIq%2FrKwAeLmN1J0MCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnDL81OwGwG%2BA4uaKtwDeEXM4DZLoojXFRhl59J9krIZH66xHWTNNB1ZmPhmKEx700wAcSIVE1XxJif%2FgSpWtpQWMzTzIYecl6cZGYDEgmGuRVRJAOC%2FJw%2BE4oZM%2BxQQd%2BYiYHGi4Bo%2FQn0V5CwSLltafG351PGEq4FRkBIsRv91Uoqno2ufy%2FONsvFAsYcQ%2ByGKNWaOq6w%2FFT7EbPuQXSOVj7sNkp4C5%2F%2Fqpq9Uqn%2BYXBz1b7brJdwBSLpUTw%2Fq0%2FqH8osdwyJNgidjEMhzLDoluYPagSiMN3YktruAdAQ5t0XTvSk4IbeRQs7aLrAogAqXqSvOohjnefe%2BZu3HMYvawhNSu9GfoLAwm6390%2B%2F46Xrxr8R4sLhYHQGdIWqsCK2zdyX27wOFl4hEcUwc574SZKXMzIMboeYcz9myxT5acMW4mHFXYnbJtl2HepDI7f5Y580ftrrd9vIFaG7SiEcTCa9SYdinojI2R1wY5GtX0%2FaC6q4QkP2v22feowg9fPxVKUkWCmznoQFuINCHM3OrpncZxI7UvczY8PjZW6GMDkOE4VPIQAky3wwRhHJjriQoxabiNVLPRiDzgHwcod5NCgzydqqck94JB9DheZkrkG%2FKH53tfBKeeZJyrqvqTGohrCzwLNoNBtwwiKKMwAY6pgEIomKbjyxrO%2Bn6casWgVoqsrV9J4xukSh4pnCcUFChPrSlXsLnm80BNqE3xYc5T85h4Dnb1GkQnbB1TDseL7hSbXnn%2BnGwniT0mz9WpIxVKg3MQn3gLW1cbo6xPiC14v4vJEL0FYHCzED1QAtBvNgpanz06kLeMRBmXPdz4UdEZMKDELpBq74YAx6Mr7aeMOH4Y3d0jbXLyVXnXfcLbfkUPhvd%2Bq5e&X-Amz-Signature=fb819777631436bb7bebba2a7e2ebd63cd52b2fb9bedf91fb959ab5768fedb48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKITBJIF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsX%2Foo50perQzGw0C9QE80MUmiF%2FEARDd2%2BeN2JABZZAiAhRLGTTZlqZe8EOBMSspK8CHaqQuIq%2FrKwAeLmN1J0MCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnDL81OwGwG%2BA4uaKtwDeEXM4DZLoojXFRhl59J9krIZH66xHWTNNB1ZmPhmKEx700wAcSIVE1XxJif%2FgSpWtpQWMzTzIYecl6cZGYDEgmGuRVRJAOC%2FJw%2BE4oZM%2BxQQd%2BYiYHGi4Bo%2FQn0V5CwSLltafG351PGEq4FRkBIsRv91Uoqno2ufy%2FONsvFAsYcQ%2ByGKNWaOq6w%2FFT7EbPuQXSOVj7sNkp4C5%2F%2Fqpq9Uqn%2BYXBz1b7brJdwBSLpUTw%2Fq0%2FqH8osdwyJNgidjEMhzLDoluYPagSiMN3YktruAdAQ5t0XTvSk4IbeRQs7aLrAogAqXqSvOohjnefe%2BZu3HMYvawhNSu9GfoLAwm6390%2B%2F46Xrxr8R4sLhYHQGdIWqsCK2zdyX27wOFl4hEcUwc574SZKXMzIMboeYcz9myxT5acMW4mHFXYnbJtl2HepDI7f5Y580ftrrd9vIFaG7SiEcTCa9SYdinojI2R1wY5GtX0%2FaC6q4QkP2v22feowg9fPxVKUkWCmznoQFuINCHM3OrpncZxI7UvczY8PjZW6GMDkOE4VPIQAky3wwRhHJjriQoxabiNVLPRiDzgHwcod5NCgzydqqck94JB9DheZkrkG%2FKH53tfBKeeZJyrqvqTGohrCzwLNoNBtwwiKKMwAY6pgEIomKbjyxrO%2Bn6casWgVoqsrV9J4xukSh4pnCcUFChPrSlXsLnm80BNqE3xYc5T85h4Dnb1GkQnbB1TDseL7hSbXnn%2BnGwniT0mz9WpIxVKg3MQn3gLW1cbo6xPiC14v4vJEL0FYHCzED1QAtBvNgpanz06kLeMRBmXPdz4UdEZMKDELpBq74YAx6Mr7aeMOH4Y3d0jbXLyVXnXfcLbfkUPhvd%2Bq5e&X-Amz-Signature=418993ace66799c8b7f408802816e5435290ee0fe63f59897d1285fc1d0b0661&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKITBJIF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsX%2Foo50perQzGw0C9QE80MUmiF%2FEARDd2%2BeN2JABZZAiAhRLGTTZlqZe8EOBMSspK8CHaqQuIq%2FrKwAeLmN1J0MCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfnDL81OwGwG%2BA4uaKtwDeEXM4DZLoojXFRhl59J9krIZH66xHWTNNB1ZmPhmKEx700wAcSIVE1XxJif%2FgSpWtpQWMzTzIYecl6cZGYDEgmGuRVRJAOC%2FJw%2BE4oZM%2BxQQd%2BYiYHGi4Bo%2FQn0V5CwSLltafG351PGEq4FRkBIsRv91Uoqno2ufy%2FONsvFAsYcQ%2ByGKNWaOq6w%2FFT7EbPuQXSOVj7sNkp4C5%2F%2Fqpq9Uqn%2BYXBz1b7brJdwBSLpUTw%2Fq0%2FqH8osdwyJNgidjEMhzLDoluYPagSiMN3YktruAdAQ5t0XTvSk4IbeRQs7aLrAogAqXqSvOohjnefe%2BZu3HMYvawhNSu9GfoLAwm6390%2B%2F46Xrxr8R4sLhYHQGdIWqsCK2zdyX27wOFl4hEcUwc574SZKXMzIMboeYcz9myxT5acMW4mHFXYnbJtl2HepDI7f5Y580ftrrd9vIFaG7SiEcTCa9SYdinojI2R1wY5GtX0%2FaC6q4QkP2v22feowg9fPxVKUkWCmznoQFuINCHM3OrpncZxI7UvczY8PjZW6GMDkOE4VPIQAky3wwRhHJjriQoxabiNVLPRiDzgHwcod5NCgzydqqck94JB9DheZkrkG%2FKH53tfBKeeZJyrqvqTGohrCzwLNoNBtwwiKKMwAY6pgEIomKbjyxrO%2Bn6casWgVoqsrV9J4xukSh4pnCcUFChPrSlXsLnm80BNqE3xYc5T85h4Dnb1GkQnbB1TDseL7hSbXnn%2BnGwniT0mz9WpIxVKg3MQn3gLW1cbo6xPiC14v4vJEL0FYHCzED1QAtBvNgpanz06kLeMRBmXPdz4UdEZMKDELpBq74YAx6Mr7aeMOH4Y3d0jbXLyVXnXfcLbfkUPhvd%2Bq5e&X-Amz-Signature=fcca72422cf59f771ef87001ea3550829e1b0a13cf7466cd026973f6bc7b085f&X-Amz-SignedHeaders=host&x-id=GetObject)
