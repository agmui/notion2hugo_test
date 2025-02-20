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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF7CG7I%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3zPP2YUg3TPYm88oZPTahAVv7i9oZl92Bp0Fpi4zyQIhANvCtBk95NWaPlhONNX8NlejjKYD7TiHz2lnkj4Mx051KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKtRZ9%2FWv7J1KV5zMq3ANUVsysN7HTlfFYBjk8GFq4Qbme2TGOFmwMCPZu0zi%2BFaAQzlaO166PgGAyEACYcVmlF3Y3%2BY7LGXxIoKDdTSQdiWh6cDV91RyRNwrk3Mh9hfIy0nrqahqYINxuVduCXBD1Pi%2FoWBjQMjAAHqQ7AC1GXQcY%2FnKORhThN5xFOP4e%2BZ7iXMEhYSWl%2FdRBmuCKiis3jkVYPzJ6QuvgPcG9CU4kjWVPb87YC%2BtCzvr0O0a0AwwG%2BFVm45obH9xXLBzNwM3HXqbhGS7j6zUH%2FKCGRLLU83QZSdqmHxYXLIVfTYOnD%2FdB%2BUNRAVvEJcejLw6lOpopjbQqbr4tGAixzERJQKlUOQZR9qMSSQUiXpbLmEl8rsjdAkSmpqNTCRJtK1lS9xpoDNW8upmLp%2BSMP7JeoQqSbUCjZCEOPp2HfH6bKUQO4SF3KUb3nkpzhS%2FA0fZvjr41s4fl1Mn2EZnvN4giJlzp5S0qxthe4UosJ9UqkqIeumlycJl49n7hIp3ScNNI%2BGNxBONTOuMa46KUfbsf7BJq2sNMwwpMO3oIxDCudtNEXXQF9mazj0DAJKkxeGyU4IQejhrohH5kEs7UPBgz7C1H%2BAvavy%2F9Hyu6G25zDqeD8OFr65Zt4GDyofjIMzDv39q9BjqkAfV4ALQOw1zfdIhodLmk4i%2BbdWLMsvBRF9J7tBLSfLSGt1iDvi397fSN76qcLrCbZr3Jbcc5yn0ljBvW71xaFbV0FXAmz1duv2esdwYQ0no0lUWyNE5vhOUkgopfN3Set6S2plKR1b30STaPJrLR8Y72EUoDFUYmyDZysI8y7kVImccNdpuUdBqv80SXz4letaaHrvulwRnBKJ34UtWJnXuY00Am&X-Amz-Signature=baea6bba49f5e030a041279e422df378e3f061dc5964301f677cb03853d9ac80&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF7CG7I%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3zPP2YUg3TPYm88oZPTahAVv7i9oZl92Bp0Fpi4zyQIhANvCtBk95NWaPlhONNX8NlejjKYD7TiHz2lnkj4Mx051KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKtRZ9%2FWv7J1KV5zMq3ANUVsysN7HTlfFYBjk8GFq4Qbme2TGOFmwMCPZu0zi%2BFaAQzlaO166PgGAyEACYcVmlF3Y3%2BY7LGXxIoKDdTSQdiWh6cDV91RyRNwrk3Mh9hfIy0nrqahqYINxuVduCXBD1Pi%2FoWBjQMjAAHqQ7AC1GXQcY%2FnKORhThN5xFOP4e%2BZ7iXMEhYSWl%2FdRBmuCKiis3jkVYPzJ6QuvgPcG9CU4kjWVPb87YC%2BtCzvr0O0a0AwwG%2BFVm45obH9xXLBzNwM3HXqbhGS7j6zUH%2FKCGRLLU83QZSdqmHxYXLIVfTYOnD%2FdB%2BUNRAVvEJcejLw6lOpopjbQqbr4tGAixzERJQKlUOQZR9qMSSQUiXpbLmEl8rsjdAkSmpqNTCRJtK1lS9xpoDNW8upmLp%2BSMP7JeoQqSbUCjZCEOPp2HfH6bKUQO4SF3KUb3nkpzhS%2FA0fZvjr41s4fl1Mn2EZnvN4giJlzp5S0qxthe4UosJ9UqkqIeumlycJl49n7hIp3ScNNI%2BGNxBONTOuMa46KUfbsf7BJq2sNMwwpMO3oIxDCudtNEXXQF9mazj0DAJKkxeGyU4IQejhrohH5kEs7UPBgz7C1H%2BAvavy%2F9Hyu6G25zDqeD8OFr65Zt4GDyofjIMzDv39q9BjqkAfV4ALQOw1zfdIhodLmk4i%2BbdWLMsvBRF9J7tBLSfLSGt1iDvi397fSN76qcLrCbZr3Jbcc5yn0ljBvW71xaFbV0FXAmz1duv2esdwYQ0no0lUWyNE5vhOUkgopfN3Set6S2plKR1b30STaPJrLR8Y72EUoDFUYmyDZysI8y7kVImccNdpuUdBqv80SXz4letaaHrvulwRnBKJ34UtWJnXuY00Am&X-Amz-Signature=8d7ddfb5030363438af1ca00c61a33e3f1fe5bcdc3192336c0b8046f7ca2b607&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF7CG7I%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3zPP2YUg3TPYm88oZPTahAVv7i9oZl92Bp0Fpi4zyQIhANvCtBk95NWaPlhONNX8NlejjKYD7TiHz2lnkj4Mx051KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKtRZ9%2FWv7J1KV5zMq3ANUVsysN7HTlfFYBjk8GFq4Qbme2TGOFmwMCPZu0zi%2BFaAQzlaO166PgGAyEACYcVmlF3Y3%2BY7LGXxIoKDdTSQdiWh6cDV91RyRNwrk3Mh9hfIy0nrqahqYINxuVduCXBD1Pi%2FoWBjQMjAAHqQ7AC1GXQcY%2FnKORhThN5xFOP4e%2BZ7iXMEhYSWl%2FdRBmuCKiis3jkVYPzJ6QuvgPcG9CU4kjWVPb87YC%2BtCzvr0O0a0AwwG%2BFVm45obH9xXLBzNwM3HXqbhGS7j6zUH%2FKCGRLLU83QZSdqmHxYXLIVfTYOnD%2FdB%2BUNRAVvEJcejLw6lOpopjbQqbr4tGAixzERJQKlUOQZR9qMSSQUiXpbLmEl8rsjdAkSmpqNTCRJtK1lS9xpoDNW8upmLp%2BSMP7JeoQqSbUCjZCEOPp2HfH6bKUQO4SF3KUb3nkpzhS%2FA0fZvjr41s4fl1Mn2EZnvN4giJlzp5S0qxthe4UosJ9UqkqIeumlycJl49n7hIp3ScNNI%2BGNxBONTOuMa46KUfbsf7BJq2sNMwwpMO3oIxDCudtNEXXQF9mazj0DAJKkxeGyU4IQejhrohH5kEs7UPBgz7C1H%2BAvavy%2F9Hyu6G25zDqeD8OFr65Zt4GDyofjIMzDv39q9BjqkAfV4ALQOw1zfdIhodLmk4i%2BbdWLMsvBRF9J7tBLSfLSGt1iDvi397fSN76qcLrCbZr3Jbcc5yn0ljBvW71xaFbV0FXAmz1duv2esdwYQ0no0lUWyNE5vhOUkgopfN3Set6S2plKR1b30STaPJrLR8Y72EUoDFUYmyDZysI8y7kVImccNdpuUdBqv80SXz4letaaHrvulwRnBKJ34UtWJnXuY00Am&X-Amz-Signature=68727d95218e2665a596d0ace6596c305b3e51ed69a7cf92e0af97cdc2a0c01c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF7CG7I%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3zPP2YUg3TPYm88oZPTahAVv7i9oZl92Bp0Fpi4zyQIhANvCtBk95NWaPlhONNX8NlejjKYD7TiHz2lnkj4Mx051KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKtRZ9%2FWv7J1KV5zMq3ANUVsysN7HTlfFYBjk8GFq4Qbme2TGOFmwMCPZu0zi%2BFaAQzlaO166PgGAyEACYcVmlF3Y3%2BY7LGXxIoKDdTSQdiWh6cDV91RyRNwrk3Mh9hfIy0nrqahqYINxuVduCXBD1Pi%2FoWBjQMjAAHqQ7AC1GXQcY%2FnKORhThN5xFOP4e%2BZ7iXMEhYSWl%2FdRBmuCKiis3jkVYPzJ6QuvgPcG9CU4kjWVPb87YC%2BtCzvr0O0a0AwwG%2BFVm45obH9xXLBzNwM3HXqbhGS7j6zUH%2FKCGRLLU83QZSdqmHxYXLIVfTYOnD%2FdB%2BUNRAVvEJcejLw6lOpopjbQqbr4tGAixzERJQKlUOQZR9qMSSQUiXpbLmEl8rsjdAkSmpqNTCRJtK1lS9xpoDNW8upmLp%2BSMP7JeoQqSbUCjZCEOPp2HfH6bKUQO4SF3KUb3nkpzhS%2FA0fZvjr41s4fl1Mn2EZnvN4giJlzp5S0qxthe4UosJ9UqkqIeumlycJl49n7hIp3ScNNI%2BGNxBONTOuMa46KUfbsf7BJq2sNMwwpMO3oIxDCudtNEXXQF9mazj0DAJKkxeGyU4IQejhrohH5kEs7UPBgz7C1H%2BAvavy%2F9Hyu6G25zDqeD8OFr65Zt4GDyofjIMzDv39q9BjqkAfV4ALQOw1zfdIhodLmk4i%2BbdWLMsvBRF9J7tBLSfLSGt1iDvi397fSN76qcLrCbZr3Jbcc5yn0ljBvW71xaFbV0FXAmz1duv2esdwYQ0no0lUWyNE5vhOUkgopfN3Set6S2plKR1b30STaPJrLR8Y72EUoDFUYmyDZysI8y7kVImccNdpuUdBqv80SXz4letaaHrvulwRnBKJ34UtWJnXuY00Am&X-Amz-Signature=ecba337b219b67e9600334d427bd20300e4ea28b8687f0ee28145c7b6893639c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF7CG7I%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3zPP2YUg3TPYm88oZPTahAVv7i9oZl92Bp0Fpi4zyQIhANvCtBk95NWaPlhONNX8NlejjKYD7TiHz2lnkj4Mx051KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKtRZ9%2FWv7J1KV5zMq3ANUVsysN7HTlfFYBjk8GFq4Qbme2TGOFmwMCPZu0zi%2BFaAQzlaO166PgGAyEACYcVmlF3Y3%2BY7LGXxIoKDdTSQdiWh6cDV91RyRNwrk3Mh9hfIy0nrqahqYINxuVduCXBD1Pi%2FoWBjQMjAAHqQ7AC1GXQcY%2FnKORhThN5xFOP4e%2BZ7iXMEhYSWl%2FdRBmuCKiis3jkVYPzJ6QuvgPcG9CU4kjWVPb87YC%2BtCzvr0O0a0AwwG%2BFVm45obH9xXLBzNwM3HXqbhGS7j6zUH%2FKCGRLLU83QZSdqmHxYXLIVfTYOnD%2FdB%2BUNRAVvEJcejLw6lOpopjbQqbr4tGAixzERJQKlUOQZR9qMSSQUiXpbLmEl8rsjdAkSmpqNTCRJtK1lS9xpoDNW8upmLp%2BSMP7JeoQqSbUCjZCEOPp2HfH6bKUQO4SF3KUb3nkpzhS%2FA0fZvjr41s4fl1Mn2EZnvN4giJlzp5S0qxthe4UosJ9UqkqIeumlycJl49n7hIp3ScNNI%2BGNxBONTOuMa46KUfbsf7BJq2sNMwwpMO3oIxDCudtNEXXQF9mazj0DAJKkxeGyU4IQejhrohH5kEs7UPBgz7C1H%2BAvavy%2F9Hyu6G25zDqeD8OFr65Zt4GDyofjIMzDv39q9BjqkAfV4ALQOw1zfdIhodLmk4i%2BbdWLMsvBRF9J7tBLSfLSGt1iDvi397fSN76qcLrCbZr3Jbcc5yn0ljBvW71xaFbV0FXAmz1duv2esdwYQ0no0lUWyNE5vhOUkgopfN3Set6S2plKR1b30STaPJrLR8Y72EUoDFUYmyDZysI8y7kVImccNdpuUdBqv80SXz4letaaHrvulwRnBKJ34UtWJnXuY00Am&X-Amz-Signature=095845ebd84beb78534a7ec254efee7e8d32ee252fe1786edaf61c21aefdb702&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REF7CG7I%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp3zPP2YUg3TPYm88oZPTahAVv7i9oZl92Bp0Fpi4zyQIhANvCtBk95NWaPlhONNX8NlejjKYD7TiHz2lnkj4Mx051KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKtRZ9%2FWv7J1KV5zMq3ANUVsysN7HTlfFYBjk8GFq4Qbme2TGOFmwMCPZu0zi%2BFaAQzlaO166PgGAyEACYcVmlF3Y3%2BY7LGXxIoKDdTSQdiWh6cDV91RyRNwrk3Mh9hfIy0nrqahqYINxuVduCXBD1Pi%2FoWBjQMjAAHqQ7AC1GXQcY%2FnKORhThN5xFOP4e%2BZ7iXMEhYSWl%2FdRBmuCKiis3jkVYPzJ6QuvgPcG9CU4kjWVPb87YC%2BtCzvr0O0a0AwwG%2BFVm45obH9xXLBzNwM3HXqbhGS7j6zUH%2FKCGRLLU83QZSdqmHxYXLIVfTYOnD%2FdB%2BUNRAVvEJcejLw6lOpopjbQqbr4tGAixzERJQKlUOQZR9qMSSQUiXpbLmEl8rsjdAkSmpqNTCRJtK1lS9xpoDNW8upmLp%2BSMP7JeoQqSbUCjZCEOPp2HfH6bKUQO4SF3KUb3nkpzhS%2FA0fZvjr41s4fl1Mn2EZnvN4giJlzp5S0qxthe4UosJ9UqkqIeumlycJl49n7hIp3ScNNI%2BGNxBONTOuMa46KUfbsf7BJq2sNMwwpMO3oIxDCudtNEXXQF9mazj0DAJKkxeGyU4IQejhrohH5kEs7UPBgz7C1H%2BAvavy%2F9Hyu6G25zDqeD8OFr65Zt4GDyofjIMzDv39q9BjqkAfV4ALQOw1zfdIhodLmk4i%2BbdWLMsvBRF9J7tBLSfLSGt1iDvi397fSN76qcLrCbZr3Jbcc5yn0ljBvW71xaFbV0FXAmz1duv2esdwYQ0no0lUWyNE5vhOUkgopfN3Set6S2plKR1b30STaPJrLR8Y72EUoDFUYmyDZysI8y7kVImccNdpuUdBqv80SXz4letaaHrvulwRnBKJ34UtWJnXuY00Am&X-Amz-Signature=1160ca7e76c7a0f06f395ba68d4639f753206a7b1e323125145da69e8882ed3d&X-Amz-SignedHeaders=host&x-id=GetObject)
