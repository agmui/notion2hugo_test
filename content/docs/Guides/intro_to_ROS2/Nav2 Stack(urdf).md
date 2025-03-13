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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53OZ5K6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGMob3DZ6YTK%2FkCu7gIX6CEAYty%2BrEOLV0dYpB5ym32AiA8q7nQYAAIEN2cjopqmf2oEDporUxUGKR6Xr22ppfQ%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt%2FEbfNeYBGKzgsVKtwDIWL1tXGsEGV7pyxYz0O8zXjKhgt1NmLNdUXDTTynVY1dwH1Sqs6Ms%2BI7LCAW1D9J3Kn2ofx41U%2FAdHiE6uVZgzK%2BIA%2BMal0sHP1CWm8t0tJLn9qWTv3fkuc%2FYVOgCKiqGnhhI%2F1ZUEutJ7wz0S1JDcxkX7aiuICPcqH0d8ZrMgMX7r6ouwDVaiD84pJCpHJ75CXExd3FFn2mrc%2BDkXCOHB2k8seR0cxYYl8kXkpjAkxcjjqjqfjQa%2BUddQEr1FT%2FwnWBz%2BTaoMU0Pek0ysejerarTWxsgFca6SKPIFfoq5OnNsztxgVZ3KmMdcs6ChZALI3S08dlBXA87dj%2BMbv7qQ2lhiqM0G84jVYEYH6IO22FKwGhytu3IcU0jb2uMqzgnPPtLbJJzd2U8gb3saFtRUaZ2sZ0KWEgyZXEDQdWFI51bq4LFdVrmmoWmWTm6WY7vwX%2B1%2FK%2B1ClynoaUbsTILX0ixS7UfwO73GdRDXJtKRMIcnjHdTcmL5BLQ%2Bhywq9upUXJJY8DpwlM97KmTap1ltBm6glDGlgUjGVE69oot9deyyPxAct2Y7jhtxQPv%2FFHfJXs5wdyhiPdCd5ISvjqQROwCp0lf5pygYCGuE8LJaQfLhlqMTdLwKpiM1YwrqPKvgY6pgH3uUeiVtqMvCRUckOvP1wS%2BmI0yd2grHEJ4rgUsH0kajQxqOeX9w1JE6EWr2CKKyU5FwPrjvs4lyhcfPc4jm7ofMtvouUzz9MPRsNgLalaKzTe5dYAxHD3lI9lrEih7X%2BbDHekte171hdlDVLWrwyPEjdUVa7viaWrSZqxJW8TcpY57f31RtJ9EEzMQEOXtFZrOi%2BnCNTlFNXGZts6Wo%2FO%2FHdYLPz%2F&X-Amz-Signature=354e4f7bae1fbbb0a0886a972cbff016536496ed82ace3962a6902432bae1f27&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53OZ5K6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGMob3DZ6YTK%2FkCu7gIX6CEAYty%2BrEOLV0dYpB5ym32AiA8q7nQYAAIEN2cjopqmf2oEDporUxUGKR6Xr22ppfQ%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt%2FEbfNeYBGKzgsVKtwDIWL1tXGsEGV7pyxYz0O8zXjKhgt1NmLNdUXDTTynVY1dwH1Sqs6Ms%2BI7LCAW1D9J3Kn2ofx41U%2FAdHiE6uVZgzK%2BIA%2BMal0sHP1CWm8t0tJLn9qWTv3fkuc%2FYVOgCKiqGnhhI%2F1ZUEutJ7wz0S1JDcxkX7aiuICPcqH0d8ZrMgMX7r6ouwDVaiD84pJCpHJ75CXExd3FFn2mrc%2BDkXCOHB2k8seR0cxYYl8kXkpjAkxcjjqjqfjQa%2BUddQEr1FT%2FwnWBz%2BTaoMU0Pek0ysejerarTWxsgFca6SKPIFfoq5OnNsztxgVZ3KmMdcs6ChZALI3S08dlBXA87dj%2BMbv7qQ2lhiqM0G84jVYEYH6IO22FKwGhytu3IcU0jb2uMqzgnPPtLbJJzd2U8gb3saFtRUaZ2sZ0KWEgyZXEDQdWFI51bq4LFdVrmmoWmWTm6WY7vwX%2B1%2FK%2B1ClynoaUbsTILX0ixS7UfwO73GdRDXJtKRMIcnjHdTcmL5BLQ%2Bhywq9upUXJJY8DpwlM97KmTap1ltBm6glDGlgUjGVE69oot9deyyPxAct2Y7jhtxQPv%2FFHfJXs5wdyhiPdCd5ISvjqQROwCp0lf5pygYCGuE8LJaQfLhlqMTdLwKpiM1YwrqPKvgY6pgH3uUeiVtqMvCRUckOvP1wS%2BmI0yd2grHEJ4rgUsH0kajQxqOeX9w1JE6EWr2CKKyU5FwPrjvs4lyhcfPc4jm7ofMtvouUzz9MPRsNgLalaKzTe5dYAxHD3lI9lrEih7X%2BbDHekte171hdlDVLWrwyPEjdUVa7viaWrSZqxJW8TcpY57f31RtJ9EEzMQEOXtFZrOi%2BnCNTlFNXGZts6Wo%2FO%2FHdYLPz%2F&X-Amz-Signature=d8d2952b8adaf853f3f141847960ab149cf514b844dcb3488d30bf574437bcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53OZ5K6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGMob3DZ6YTK%2FkCu7gIX6CEAYty%2BrEOLV0dYpB5ym32AiA8q7nQYAAIEN2cjopqmf2oEDporUxUGKR6Xr22ppfQ%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt%2FEbfNeYBGKzgsVKtwDIWL1tXGsEGV7pyxYz0O8zXjKhgt1NmLNdUXDTTynVY1dwH1Sqs6Ms%2BI7LCAW1D9J3Kn2ofx41U%2FAdHiE6uVZgzK%2BIA%2BMal0sHP1CWm8t0tJLn9qWTv3fkuc%2FYVOgCKiqGnhhI%2F1ZUEutJ7wz0S1JDcxkX7aiuICPcqH0d8ZrMgMX7r6ouwDVaiD84pJCpHJ75CXExd3FFn2mrc%2BDkXCOHB2k8seR0cxYYl8kXkpjAkxcjjqjqfjQa%2BUddQEr1FT%2FwnWBz%2BTaoMU0Pek0ysejerarTWxsgFca6SKPIFfoq5OnNsztxgVZ3KmMdcs6ChZALI3S08dlBXA87dj%2BMbv7qQ2lhiqM0G84jVYEYH6IO22FKwGhytu3IcU0jb2uMqzgnPPtLbJJzd2U8gb3saFtRUaZ2sZ0KWEgyZXEDQdWFI51bq4LFdVrmmoWmWTm6WY7vwX%2B1%2FK%2B1ClynoaUbsTILX0ixS7UfwO73GdRDXJtKRMIcnjHdTcmL5BLQ%2Bhywq9upUXJJY8DpwlM97KmTap1ltBm6glDGlgUjGVE69oot9deyyPxAct2Y7jhtxQPv%2FFHfJXs5wdyhiPdCd5ISvjqQROwCp0lf5pygYCGuE8LJaQfLhlqMTdLwKpiM1YwrqPKvgY6pgH3uUeiVtqMvCRUckOvP1wS%2BmI0yd2grHEJ4rgUsH0kajQxqOeX9w1JE6EWr2CKKyU5FwPrjvs4lyhcfPc4jm7ofMtvouUzz9MPRsNgLalaKzTe5dYAxHD3lI9lrEih7X%2BbDHekte171hdlDVLWrwyPEjdUVa7viaWrSZqxJW8TcpY57f31RtJ9EEzMQEOXtFZrOi%2BnCNTlFNXGZts6Wo%2FO%2FHdYLPz%2F&X-Amz-Signature=c7629df83b8e5b846bf5d9498e46f7920c7c68cdeace17ac070744e4175c4ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53OZ5K6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGMob3DZ6YTK%2FkCu7gIX6CEAYty%2BrEOLV0dYpB5ym32AiA8q7nQYAAIEN2cjopqmf2oEDporUxUGKR6Xr22ppfQ%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt%2FEbfNeYBGKzgsVKtwDIWL1tXGsEGV7pyxYz0O8zXjKhgt1NmLNdUXDTTynVY1dwH1Sqs6Ms%2BI7LCAW1D9J3Kn2ofx41U%2FAdHiE6uVZgzK%2BIA%2BMal0sHP1CWm8t0tJLn9qWTv3fkuc%2FYVOgCKiqGnhhI%2F1ZUEutJ7wz0S1JDcxkX7aiuICPcqH0d8ZrMgMX7r6ouwDVaiD84pJCpHJ75CXExd3FFn2mrc%2BDkXCOHB2k8seR0cxYYl8kXkpjAkxcjjqjqfjQa%2BUddQEr1FT%2FwnWBz%2BTaoMU0Pek0ysejerarTWxsgFca6SKPIFfoq5OnNsztxgVZ3KmMdcs6ChZALI3S08dlBXA87dj%2BMbv7qQ2lhiqM0G84jVYEYH6IO22FKwGhytu3IcU0jb2uMqzgnPPtLbJJzd2U8gb3saFtRUaZ2sZ0KWEgyZXEDQdWFI51bq4LFdVrmmoWmWTm6WY7vwX%2B1%2FK%2B1ClynoaUbsTILX0ixS7UfwO73GdRDXJtKRMIcnjHdTcmL5BLQ%2Bhywq9upUXJJY8DpwlM97KmTap1ltBm6glDGlgUjGVE69oot9deyyPxAct2Y7jhtxQPv%2FFHfJXs5wdyhiPdCd5ISvjqQROwCp0lf5pygYCGuE8LJaQfLhlqMTdLwKpiM1YwrqPKvgY6pgH3uUeiVtqMvCRUckOvP1wS%2BmI0yd2grHEJ4rgUsH0kajQxqOeX9w1JE6EWr2CKKyU5FwPrjvs4lyhcfPc4jm7ofMtvouUzz9MPRsNgLalaKzTe5dYAxHD3lI9lrEih7X%2BbDHekte171hdlDVLWrwyPEjdUVa7viaWrSZqxJW8TcpY57f31RtJ9EEzMQEOXtFZrOi%2BnCNTlFNXGZts6Wo%2FO%2FHdYLPz%2F&X-Amz-Signature=24c355bcfc796c8ff06184e0f5dc15c0616452857320d6b3d83ee185f46d2dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53OZ5K6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGMob3DZ6YTK%2FkCu7gIX6CEAYty%2BrEOLV0dYpB5ym32AiA8q7nQYAAIEN2cjopqmf2oEDporUxUGKR6Xr22ppfQ%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt%2FEbfNeYBGKzgsVKtwDIWL1tXGsEGV7pyxYz0O8zXjKhgt1NmLNdUXDTTynVY1dwH1Sqs6Ms%2BI7LCAW1D9J3Kn2ofx41U%2FAdHiE6uVZgzK%2BIA%2BMal0sHP1CWm8t0tJLn9qWTv3fkuc%2FYVOgCKiqGnhhI%2F1ZUEutJ7wz0S1JDcxkX7aiuICPcqH0d8ZrMgMX7r6ouwDVaiD84pJCpHJ75CXExd3FFn2mrc%2BDkXCOHB2k8seR0cxYYl8kXkpjAkxcjjqjqfjQa%2BUddQEr1FT%2FwnWBz%2BTaoMU0Pek0ysejerarTWxsgFca6SKPIFfoq5OnNsztxgVZ3KmMdcs6ChZALI3S08dlBXA87dj%2BMbv7qQ2lhiqM0G84jVYEYH6IO22FKwGhytu3IcU0jb2uMqzgnPPtLbJJzd2U8gb3saFtRUaZ2sZ0KWEgyZXEDQdWFI51bq4LFdVrmmoWmWTm6WY7vwX%2B1%2FK%2B1ClynoaUbsTILX0ixS7UfwO73GdRDXJtKRMIcnjHdTcmL5BLQ%2Bhywq9upUXJJY8DpwlM97KmTap1ltBm6glDGlgUjGVE69oot9deyyPxAct2Y7jhtxQPv%2FFHfJXs5wdyhiPdCd5ISvjqQROwCp0lf5pygYCGuE8LJaQfLhlqMTdLwKpiM1YwrqPKvgY6pgH3uUeiVtqMvCRUckOvP1wS%2BmI0yd2grHEJ4rgUsH0kajQxqOeX9w1JE6EWr2CKKyU5FwPrjvs4lyhcfPc4jm7ofMtvouUzz9MPRsNgLalaKzTe5dYAxHD3lI9lrEih7X%2BbDHekte171hdlDVLWrwyPEjdUVa7viaWrSZqxJW8TcpY57f31RtJ9EEzMQEOXtFZrOi%2BnCNTlFNXGZts6Wo%2FO%2FHdYLPz%2F&X-Amz-Signature=6d0a6d5b969503fcb84025eecff865d7a705d45d0574d1afa772de1420432ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53OZ5K6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGMob3DZ6YTK%2FkCu7gIX6CEAYty%2BrEOLV0dYpB5ym32AiA8q7nQYAAIEN2cjopqmf2oEDporUxUGKR6Xr22ppfQ%2FSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxt%2FEbfNeYBGKzgsVKtwDIWL1tXGsEGV7pyxYz0O8zXjKhgt1NmLNdUXDTTynVY1dwH1Sqs6Ms%2BI7LCAW1D9J3Kn2ofx41U%2FAdHiE6uVZgzK%2BIA%2BMal0sHP1CWm8t0tJLn9qWTv3fkuc%2FYVOgCKiqGnhhI%2F1ZUEutJ7wz0S1JDcxkX7aiuICPcqH0d8ZrMgMX7r6ouwDVaiD84pJCpHJ75CXExd3FFn2mrc%2BDkXCOHB2k8seR0cxYYl8kXkpjAkxcjjqjqfjQa%2BUddQEr1FT%2FwnWBz%2BTaoMU0Pek0ysejerarTWxsgFca6SKPIFfoq5OnNsztxgVZ3KmMdcs6ChZALI3S08dlBXA87dj%2BMbv7qQ2lhiqM0G84jVYEYH6IO22FKwGhytu3IcU0jb2uMqzgnPPtLbJJzd2U8gb3saFtRUaZ2sZ0KWEgyZXEDQdWFI51bq4LFdVrmmoWmWTm6WY7vwX%2B1%2FK%2B1ClynoaUbsTILX0ixS7UfwO73GdRDXJtKRMIcnjHdTcmL5BLQ%2Bhywq9upUXJJY8DpwlM97KmTap1ltBm6glDGlgUjGVE69oot9deyyPxAct2Y7jhtxQPv%2FFHfJXs5wdyhiPdCd5ISvjqQROwCp0lf5pygYCGuE8LJaQfLhlqMTdLwKpiM1YwrqPKvgY6pgH3uUeiVtqMvCRUckOvP1wS%2BmI0yd2grHEJ4rgUsH0kajQxqOeX9w1JE6EWr2CKKyU5FwPrjvs4lyhcfPc4jm7ofMtvouUzz9MPRsNgLalaKzTe5dYAxHD3lI9lrEih7X%2BbDHekte171hdlDVLWrwyPEjdUVa7viaWrSZqxJW8TcpY57f31RtJ9EEzMQEOXtFZrOi%2BnCNTlFNXGZts6Wo%2FO%2FHdYLPz%2F&X-Amz-Signature=cbf8396647016861bb26a093c2302bc030ee1b25f0e3d038d8dd2c779228b7a5&X-Amz-SignedHeaders=host&x-id=GetObject)
