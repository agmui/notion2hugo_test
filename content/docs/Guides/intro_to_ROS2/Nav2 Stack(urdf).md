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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=6bcf62dd33ded1f8436a337c168e12ebc258028413d06d777d90393c0325d190&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=3fc6bab49b1c46f68dd02274013e72ec07a89380e42ed7a9def707c3ac85d725&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=997bceb17a47a031548ff29132ecc5851aed75e3433798c436b673b1bbb9c5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=e4e291d79d46b41944495f13bde74c4ac7d289049b6100d73e23e9adb9c05d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=e62bf5075043a84ad221a6cf56d5318fb8e31dc6c071f5202657903499d780f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXD35QFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWDSjpiPhal7DU7T0iwWNMi8qEG52AocQAhtbkAF%2FItAiEAlYe7iBLWqc%2F1bhvjVex9%2BaFjTjFgfblB1lBBOjaQ%2BOIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDGWcTmAqm0DhLT5xByrcA4B%2BujkOmTnesBkLh4jH86Sq7PECli0avpWrF2HiMFgsGOqBCKqp8RJLVr4sMslvysq6Czi5emIqv0QKMsAR1IR5Hv3HAtWRVs8Ismc6vTSFGg3hZA5b7DThfs105HqoJQHeHYfQQX%2BtXqOrgwPqYRFmP5%2BD1VA61iBP7fvvpnSf5djLHwbfasHafjYBKzJciTW8OnOq2AevIKDsePncL8VbLlwPrV%2Fk9MwGXQBMl%2BWfuFQqtIoDD3EsE407hZqiYXJVAMwBgM0EyFa4UVA03l1LHQ71r7XQB%2BcfGyvXi2PNVsFDQ3CSZ2dZjhls2GSl1LHL07g%2BlViSq77SxNJbazNZa7wYnCc0XCeTZfMcgyas8sL7G7eUDiDusrMdS7F0%2F2EqNKomTAjhjx%2FcEaCbHiavXBeIIzMph78K%2B7kvUO9BFBLszosq7pQW8QK7ylAxKAY10MAV79J%2BlDECYN4sBmWQ2hUTEGHC51ylPHZjP%2F1l3h1OYIKK6gzoQpD7iq5mSoZpsJiczG35Y%2BL10RzkC2U6zKQ5gj%2BEuAUZxWe8aIFeESaCqdQTHdNgczzu%2B31p8pEKUSKd4SUDrotePpEtVPU%2Fk5QdJTNy4xQj96BmCZdmm7NfsokJR7%2Fna61CML2Fi78GOqUB%2BQVDmWow8XAK9549rPa%2BXhrhBevV5bUA%2BLl%2FAC5J2IO3uyYW3prkNOdKJKbEu0y32iKxy5UuxGqAnFii6GDot0o%2FL2IZDDWZZZNBJNrihg5oS%2BsfC4sShqgx8brJKiA9oUwR%2BGPGtpni2Hi%2Ftejor3XGKPYhEVa894axnQEGUa4CHS6%2Bm7xZrIfhjx60d%2B7j5n3EHNoCSrLA3GTnHTTEJ1n3ovUY&X-Amz-Signature=8129ae8ed7df521730a162206ce88928b22f5c231ca275ce640369d79b20c8cd&X-Amz-SignedHeaders=host&x-id=GetObject)
