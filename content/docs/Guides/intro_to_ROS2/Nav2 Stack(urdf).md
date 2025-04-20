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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBC5QG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCwfQcIVKZQ2ToZGPq729yv0QqQMcS7iwWdBswZXQagdwIhAM69yXsClNfpqhE3ndLHqU%2Ffvlm1NmCYZdV24%2B7yuxSrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1FWEuKT09ZWei7Uq3ANUA3FkGZKmnjfVvXYWApuYtpwtIXcbSj%2Bsy6vbNeg8MEAdrigHNfbCeiT4NdMXyEZKeSQUSP319q3PlBNCAbhB0se9EAe3wP4TlaAI7CJmN47ZwhZHY6huo88IhMU%2BR1I3U3U20ELaMvoDvSDwFkA2BzMn6UPqb99z7omViM3E%2FForvgf2pTxP7GWJLsAvMPmggAAIBDarfRRmpdhPqXFkTh90OCbRINpQa6o1%2Bq0DoZDv78dSM1Am8xurG71Hu0KTgiU55g4XX7gM3k9cW%2Be1TPPN21tQZ6qY%2B59pkx82Qm6DHuGssQxU1swPKOZ0cqvJEsfDdXr4sSR22RYxL%2FHYegE2PcTUeQbIOd1x9U4YeeJ0b7xN%2FdSYq6BhAy2LvBMIsspeOW2vijWRwbYtaEihtXPjyxb44xzet5iexPIdMNyFjbeWtQaAQNrlbmMu6zyt%2BAuRzIz3b0WYnAPNdlAO9BTSUQ75DlGUmxfFQ%2FUKYTSTq35BIbyS5BQ50StBDVIzp4Mz5Yg%2BZjAHXEEWAKsA2qcZ0aBaYDR1RAGu9ucfERd2STnj%2BSvCqYPQaW5qr%2Fl3O%2FKqCJPzCYhH8c1GmeJrJfQY04H8G%2BOIJc2pLTH%2F6oyIeD63eXq09CTRWDDH25XABjqkAVBdY5%2BIPQWS4SijirSrhwoCorUsS5Tf%2FXDoQyVO2q98E2EfQ79CMqyeMKfXJfxT4dBit6RiAH2eUfsan%2BuHocWGghA6%2BjHoAczbwdw8wG11beFTDr4Zu2%2Bdz%2BfB4aJc3V3H9HMxjGkEvxL5daDEly8sCkMYfnFlwIcr8mwbdz5kMTYjvK1ShNJ4oI7hnqtAEJfGc9dDJB2GtSorRrxmS1LgxG5C&X-Amz-Signature=17ad86e66b142f75a784a6dfc4c42cf63c003bc03164b332fbfa285114076763&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBC5QG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCwfQcIVKZQ2ToZGPq729yv0QqQMcS7iwWdBswZXQagdwIhAM69yXsClNfpqhE3ndLHqU%2Ffvlm1NmCYZdV24%2B7yuxSrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1FWEuKT09ZWei7Uq3ANUA3FkGZKmnjfVvXYWApuYtpwtIXcbSj%2Bsy6vbNeg8MEAdrigHNfbCeiT4NdMXyEZKeSQUSP319q3PlBNCAbhB0se9EAe3wP4TlaAI7CJmN47ZwhZHY6huo88IhMU%2BR1I3U3U20ELaMvoDvSDwFkA2BzMn6UPqb99z7omViM3E%2FForvgf2pTxP7GWJLsAvMPmggAAIBDarfRRmpdhPqXFkTh90OCbRINpQa6o1%2Bq0DoZDv78dSM1Am8xurG71Hu0KTgiU55g4XX7gM3k9cW%2Be1TPPN21tQZ6qY%2B59pkx82Qm6DHuGssQxU1swPKOZ0cqvJEsfDdXr4sSR22RYxL%2FHYegE2PcTUeQbIOd1x9U4YeeJ0b7xN%2FdSYq6BhAy2LvBMIsspeOW2vijWRwbYtaEihtXPjyxb44xzet5iexPIdMNyFjbeWtQaAQNrlbmMu6zyt%2BAuRzIz3b0WYnAPNdlAO9BTSUQ75DlGUmxfFQ%2FUKYTSTq35BIbyS5BQ50StBDVIzp4Mz5Yg%2BZjAHXEEWAKsA2qcZ0aBaYDR1RAGu9ucfERd2STnj%2BSvCqYPQaW5qr%2Fl3O%2FKqCJPzCYhH8c1GmeJrJfQY04H8G%2BOIJc2pLTH%2F6oyIeD63eXq09CTRWDDH25XABjqkAVBdY5%2BIPQWS4SijirSrhwoCorUsS5Tf%2FXDoQyVO2q98E2EfQ79CMqyeMKfXJfxT4dBit6RiAH2eUfsan%2BuHocWGghA6%2BjHoAczbwdw8wG11beFTDr4Zu2%2Bdz%2BfB4aJc3V3H9HMxjGkEvxL5daDEly8sCkMYfnFlwIcr8mwbdz5kMTYjvK1ShNJ4oI7hnqtAEJfGc9dDJB2GtSorRrxmS1LgxG5C&X-Amz-Signature=bcc724eba03d0fd5b8f6cf17329256e7cd1a60f7e2066c2b42419e0dcaf11dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBC5QG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCwfQcIVKZQ2ToZGPq729yv0QqQMcS7iwWdBswZXQagdwIhAM69yXsClNfpqhE3ndLHqU%2Ffvlm1NmCYZdV24%2B7yuxSrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1FWEuKT09ZWei7Uq3ANUA3FkGZKmnjfVvXYWApuYtpwtIXcbSj%2Bsy6vbNeg8MEAdrigHNfbCeiT4NdMXyEZKeSQUSP319q3PlBNCAbhB0se9EAe3wP4TlaAI7CJmN47ZwhZHY6huo88IhMU%2BR1I3U3U20ELaMvoDvSDwFkA2BzMn6UPqb99z7omViM3E%2FForvgf2pTxP7GWJLsAvMPmggAAIBDarfRRmpdhPqXFkTh90OCbRINpQa6o1%2Bq0DoZDv78dSM1Am8xurG71Hu0KTgiU55g4XX7gM3k9cW%2Be1TPPN21tQZ6qY%2B59pkx82Qm6DHuGssQxU1swPKOZ0cqvJEsfDdXr4sSR22RYxL%2FHYegE2PcTUeQbIOd1x9U4YeeJ0b7xN%2FdSYq6BhAy2LvBMIsspeOW2vijWRwbYtaEihtXPjyxb44xzet5iexPIdMNyFjbeWtQaAQNrlbmMu6zyt%2BAuRzIz3b0WYnAPNdlAO9BTSUQ75DlGUmxfFQ%2FUKYTSTq35BIbyS5BQ50StBDVIzp4Mz5Yg%2BZjAHXEEWAKsA2qcZ0aBaYDR1RAGu9ucfERd2STnj%2BSvCqYPQaW5qr%2Fl3O%2FKqCJPzCYhH8c1GmeJrJfQY04H8G%2BOIJc2pLTH%2F6oyIeD63eXq09CTRWDDH25XABjqkAVBdY5%2BIPQWS4SijirSrhwoCorUsS5Tf%2FXDoQyVO2q98E2EfQ79CMqyeMKfXJfxT4dBit6RiAH2eUfsan%2BuHocWGghA6%2BjHoAczbwdw8wG11beFTDr4Zu2%2Bdz%2BfB4aJc3V3H9HMxjGkEvxL5daDEly8sCkMYfnFlwIcr8mwbdz5kMTYjvK1ShNJ4oI7hnqtAEJfGc9dDJB2GtSorRrxmS1LgxG5C&X-Amz-Signature=687d53c8763c640b2ffb14bd80266b04f50e2b0d4f7da244db24be66028c8d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBC5QG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCwfQcIVKZQ2ToZGPq729yv0QqQMcS7iwWdBswZXQagdwIhAM69yXsClNfpqhE3ndLHqU%2Ffvlm1NmCYZdV24%2B7yuxSrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1FWEuKT09ZWei7Uq3ANUA3FkGZKmnjfVvXYWApuYtpwtIXcbSj%2Bsy6vbNeg8MEAdrigHNfbCeiT4NdMXyEZKeSQUSP319q3PlBNCAbhB0se9EAe3wP4TlaAI7CJmN47ZwhZHY6huo88IhMU%2BR1I3U3U20ELaMvoDvSDwFkA2BzMn6UPqb99z7omViM3E%2FForvgf2pTxP7GWJLsAvMPmggAAIBDarfRRmpdhPqXFkTh90OCbRINpQa6o1%2Bq0DoZDv78dSM1Am8xurG71Hu0KTgiU55g4XX7gM3k9cW%2Be1TPPN21tQZ6qY%2B59pkx82Qm6DHuGssQxU1swPKOZ0cqvJEsfDdXr4sSR22RYxL%2FHYegE2PcTUeQbIOd1x9U4YeeJ0b7xN%2FdSYq6BhAy2LvBMIsspeOW2vijWRwbYtaEihtXPjyxb44xzet5iexPIdMNyFjbeWtQaAQNrlbmMu6zyt%2BAuRzIz3b0WYnAPNdlAO9BTSUQ75DlGUmxfFQ%2FUKYTSTq35BIbyS5BQ50StBDVIzp4Mz5Yg%2BZjAHXEEWAKsA2qcZ0aBaYDR1RAGu9ucfERd2STnj%2BSvCqYPQaW5qr%2Fl3O%2FKqCJPzCYhH8c1GmeJrJfQY04H8G%2BOIJc2pLTH%2F6oyIeD63eXq09CTRWDDH25XABjqkAVBdY5%2BIPQWS4SijirSrhwoCorUsS5Tf%2FXDoQyVO2q98E2EfQ79CMqyeMKfXJfxT4dBit6RiAH2eUfsan%2BuHocWGghA6%2BjHoAczbwdw8wG11beFTDr4Zu2%2Bdz%2BfB4aJc3V3H9HMxjGkEvxL5daDEly8sCkMYfnFlwIcr8mwbdz5kMTYjvK1ShNJ4oI7hnqtAEJfGc9dDJB2GtSorRrxmS1LgxG5C&X-Amz-Signature=bcd7f8b5171501ca554c43ce7b3b3e69b2c4897990294759a64ec9b93c4da37c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBC5QG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCwfQcIVKZQ2ToZGPq729yv0QqQMcS7iwWdBswZXQagdwIhAM69yXsClNfpqhE3ndLHqU%2Ffvlm1NmCYZdV24%2B7yuxSrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1FWEuKT09ZWei7Uq3ANUA3FkGZKmnjfVvXYWApuYtpwtIXcbSj%2Bsy6vbNeg8MEAdrigHNfbCeiT4NdMXyEZKeSQUSP319q3PlBNCAbhB0se9EAe3wP4TlaAI7CJmN47ZwhZHY6huo88IhMU%2BR1I3U3U20ELaMvoDvSDwFkA2BzMn6UPqb99z7omViM3E%2FForvgf2pTxP7GWJLsAvMPmggAAIBDarfRRmpdhPqXFkTh90OCbRINpQa6o1%2Bq0DoZDv78dSM1Am8xurG71Hu0KTgiU55g4XX7gM3k9cW%2Be1TPPN21tQZ6qY%2B59pkx82Qm6DHuGssQxU1swPKOZ0cqvJEsfDdXr4sSR22RYxL%2FHYegE2PcTUeQbIOd1x9U4YeeJ0b7xN%2FdSYq6BhAy2LvBMIsspeOW2vijWRwbYtaEihtXPjyxb44xzet5iexPIdMNyFjbeWtQaAQNrlbmMu6zyt%2BAuRzIz3b0WYnAPNdlAO9BTSUQ75DlGUmxfFQ%2FUKYTSTq35BIbyS5BQ50StBDVIzp4Mz5Yg%2BZjAHXEEWAKsA2qcZ0aBaYDR1RAGu9ucfERd2STnj%2BSvCqYPQaW5qr%2Fl3O%2FKqCJPzCYhH8c1GmeJrJfQY04H8G%2BOIJc2pLTH%2F6oyIeD63eXq09CTRWDDH25XABjqkAVBdY5%2BIPQWS4SijirSrhwoCorUsS5Tf%2FXDoQyVO2q98E2EfQ79CMqyeMKfXJfxT4dBit6RiAH2eUfsan%2BuHocWGghA6%2BjHoAczbwdw8wG11beFTDr4Zu2%2Bdz%2BfB4aJc3V3H9HMxjGkEvxL5daDEly8sCkMYfnFlwIcr8mwbdz5kMTYjvK1ShNJ4oI7hnqtAEJfGc9dDJB2GtSorRrxmS1LgxG5C&X-Amz-Signature=3ac63bf89fa6f5656afa01e5884f31e8a6f26e9351ef9cc20e9b04728466b0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QPBC5QG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCwfQcIVKZQ2ToZGPq729yv0QqQMcS7iwWdBswZXQagdwIhAM69yXsClNfpqhE3ndLHqU%2Ffvlm1NmCYZdV24%2B7yuxSrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE1FWEuKT09ZWei7Uq3ANUA3FkGZKmnjfVvXYWApuYtpwtIXcbSj%2Bsy6vbNeg8MEAdrigHNfbCeiT4NdMXyEZKeSQUSP319q3PlBNCAbhB0se9EAe3wP4TlaAI7CJmN47ZwhZHY6huo88IhMU%2BR1I3U3U20ELaMvoDvSDwFkA2BzMn6UPqb99z7omViM3E%2FForvgf2pTxP7GWJLsAvMPmggAAIBDarfRRmpdhPqXFkTh90OCbRINpQa6o1%2Bq0DoZDv78dSM1Am8xurG71Hu0KTgiU55g4XX7gM3k9cW%2Be1TPPN21tQZ6qY%2B59pkx82Qm6DHuGssQxU1swPKOZ0cqvJEsfDdXr4sSR22RYxL%2FHYegE2PcTUeQbIOd1x9U4YeeJ0b7xN%2FdSYq6BhAy2LvBMIsspeOW2vijWRwbYtaEihtXPjyxb44xzet5iexPIdMNyFjbeWtQaAQNrlbmMu6zyt%2BAuRzIz3b0WYnAPNdlAO9BTSUQ75DlGUmxfFQ%2FUKYTSTq35BIbyS5BQ50StBDVIzp4Mz5Yg%2BZjAHXEEWAKsA2qcZ0aBaYDR1RAGu9ucfERd2STnj%2BSvCqYPQaW5qr%2Fl3O%2FKqCJPzCYhH8c1GmeJrJfQY04H8G%2BOIJc2pLTH%2F6oyIeD63eXq09CTRWDDH25XABjqkAVBdY5%2BIPQWS4SijirSrhwoCorUsS5Tf%2FXDoQyVO2q98E2EfQ79CMqyeMKfXJfxT4dBit6RiAH2eUfsan%2BuHocWGghA6%2BjHoAczbwdw8wG11beFTDr4Zu2%2Bdz%2BfB4aJc3V3H9HMxjGkEvxL5daDEly8sCkMYfnFlwIcr8mwbdz5kMTYjvK1ShNJ4oI7hnqtAEJfGc9dDJB2GtSorRrxmS1LgxG5C&X-Amz-Signature=d3485c8c17917a94853dc90fadebe305459089105f5a2074636bdb2af7e8fabb&X-Amz-SignedHeaders=host&x-id=GetObject)
