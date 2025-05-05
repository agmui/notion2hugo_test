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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBXD25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26RJoDocI3IPFNyTp3HlPcMV9IS7J81kEIVyAdN%2Bo%2BwIhANQS4Op1dcm1uMrsHqtyaV%2B1%2FtoIS5u%2F9Z6bX%2FWLSJg0Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzpp42HAc%2ByqMCs8mkq3APPQ2k0fAnFfYFSvMblUrQ5%2BjN7kdBurgGRMU8VHezV8JZjiT7lg242t3QlN07iUDvbF3aBnk5AxQYtDCF6rExXou1hmnP%2Bz2gWH9ThQ6omH9XUAKGdrsEttAgJeszW3h4hoecLinq%2BJAnL0DcuWhNzW%2BXiM69JyiFtoLfSa0EkwqKT1YU4UI5g6NjcqmFuWUAkpkwzIdfd6LyVvBfyo8PKPog911%2Fz5HjXlhQIapkwnVfgw2lvA3PDS5sXgUZzICR3FB7TElpnLq6etLbwHLgfJuarxMQRzb4%2FxibdDjyHashKC%2FbvOOL9fm9fNOiMMt3CYKT5A2gFFwjvLWbHQoJ8XJjdpDAwG3Ya6R4dLPF8eY3sxIAEBcMCeVNX3tvI4A2xS2Swhs83fktzBigNdsum6BSVlTNTkmzIVLmkBgtY%2B%2B1l6IGcQLpxiSrJQ5kg%2Bp7qzHrTJ%2F2u1PnvKFXml1nNPBA9auuJgwUorx%2BaLhrSouf82q7gWjpaAtc8%2FHvFSVJYirtFYJHT0jYwhYaWJ1wI6xi7iZSfdgpbeEyFhTcnGKSwszGBl5aQ7XXkHYs3f%2BhDa6Tcg4%2FXmsyJr2u5Wm5VuplrgD%2B7bH%2B9cXx18A7rQOdadHasDoHFDYYgKDCTluPABjqkAaLs4toxU6JTnNiNP18JQQx8ir4%2FpSCJNLI5a6fWSwawG9R8nLy4AV714cHoGf4QK3ljvPoYUP9%2Fn%2BWkECHXGZAOMx1ou0Mb%2BdlF8kbr6zv%2BwhQXg92fBVYMiXyZc4HPxKTRprWOeFWJhvKwTemC0q8OIWd1WCSEkj3O7cDzwjo4ad%2BeltQcUHiUYzTUTCLd5itS3ML4J0KvPoAEiF6YC1guQE4A&X-Amz-Signature=2696f149a46bd621d50f4a3f5eee2bd99f4767490f8fb19b18de23ba3f56d6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBXD25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26RJoDocI3IPFNyTp3HlPcMV9IS7J81kEIVyAdN%2Bo%2BwIhANQS4Op1dcm1uMrsHqtyaV%2B1%2FtoIS5u%2F9Z6bX%2FWLSJg0Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzpp42HAc%2ByqMCs8mkq3APPQ2k0fAnFfYFSvMblUrQ5%2BjN7kdBurgGRMU8VHezV8JZjiT7lg242t3QlN07iUDvbF3aBnk5AxQYtDCF6rExXou1hmnP%2Bz2gWH9ThQ6omH9XUAKGdrsEttAgJeszW3h4hoecLinq%2BJAnL0DcuWhNzW%2BXiM69JyiFtoLfSa0EkwqKT1YU4UI5g6NjcqmFuWUAkpkwzIdfd6LyVvBfyo8PKPog911%2Fz5HjXlhQIapkwnVfgw2lvA3PDS5sXgUZzICR3FB7TElpnLq6etLbwHLgfJuarxMQRzb4%2FxibdDjyHashKC%2FbvOOL9fm9fNOiMMt3CYKT5A2gFFwjvLWbHQoJ8XJjdpDAwG3Ya6R4dLPF8eY3sxIAEBcMCeVNX3tvI4A2xS2Swhs83fktzBigNdsum6BSVlTNTkmzIVLmkBgtY%2B%2B1l6IGcQLpxiSrJQ5kg%2Bp7qzHrTJ%2F2u1PnvKFXml1nNPBA9auuJgwUorx%2BaLhrSouf82q7gWjpaAtc8%2FHvFSVJYirtFYJHT0jYwhYaWJ1wI6xi7iZSfdgpbeEyFhTcnGKSwszGBl5aQ7XXkHYs3f%2BhDa6Tcg4%2FXmsyJr2u5Wm5VuplrgD%2B7bH%2B9cXx18A7rQOdadHasDoHFDYYgKDCTluPABjqkAaLs4toxU6JTnNiNP18JQQx8ir4%2FpSCJNLI5a6fWSwawG9R8nLy4AV714cHoGf4QK3ljvPoYUP9%2Fn%2BWkECHXGZAOMx1ou0Mb%2BdlF8kbr6zv%2BwhQXg92fBVYMiXyZc4HPxKTRprWOeFWJhvKwTemC0q8OIWd1WCSEkj3O7cDzwjo4ad%2BeltQcUHiUYzTUTCLd5itS3ML4J0KvPoAEiF6YC1guQE4A&X-Amz-Signature=c37cbc47e8a47a393c685be4b22f6a6879c1ef7cf02441e78aa392f5541cce3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBXD25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26RJoDocI3IPFNyTp3HlPcMV9IS7J81kEIVyAdN%2Bo%2BwIhANQS4Op1dcm1uMrsHqtyaV%2B1%2FtoIS5u%2F9Z6bX%2FWLSJg0Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzpp42HAc%2ByqMCs8mkq3APPQ2k0fAnFfYFSvMblUrQ5%2BjN7kdBurgGRMU8VHezV8JZjiT7lg242t3QlN07iUDvbF3aBnk5AxQYtDCF6rExXou1hmnP%2Bz2gWH9ThQ6omH9XUAKGdrsEttAgJeszW3h4hoecLinq%2BJAnL0DcuWhNzW%2BXiM69JyiFtoLfSa0EkwqKT1YU4UI5g6NjcqmFuWUAkpkwzIdfd6LyVvBfyo8PKPog911%2Fz5HjXlhQIapkwnVfgw2lvA3PDS5sXgUZzICR3FB7TElpnLq6etLbwHLgfJuarxMQRzb4%2FxibdDjyHashKC%2FbvOOL9fm9fNOiMMt3CYKT5A2gFFwjvLWbHQoJ8XJjdpDAwG3Ya6R4dLPF8eY3sxIAEBcMCeVNX3tvI4A2xS2Swhs83fktzBigNdsum6BSVlTNTkmzIVLmkBgtY%2B%2B1l6IGcQLpxiSrJQ5kg%2Bp7qzHrTJ%2F2u1PnvKFXml1nNPBA9auuJgwUorx%2BaLhrSouf82q7gWjpaAtc8%2FHvFSVJYirtFYJHT0jYwhYaWJ1wI6xi7iZSfdgpbeEyFhTcnGKSwszGBl5aQ7XXkHYs3f%2BhDa6Tcg4%2FXmsyJr2u5Wm5VuplrgD%2B7bH%2B9cXx18A7rQOdadHasDoHFDYYgKDCTluPABjqkAaLs4toxU6JTnNiNP18JQQx8ir4%2FpSCJNLI5a6fWSwawG9R8nLy4AV714cHoGf4QK3ljvPoYUP9%2Fn%2BWkECHXGZAOMx1ou0Mb%2BdlF8kbr6zv%2BwhQXg92fBVYMiXyZc4HPxKTRprWOeFWJhvKwTemC0q8OIWd1WCSEkj3O7cDzwjo4ad%2BeltQcUHiUYzTUTCLd5itS3ML4J0KvPoAEiF6YC1guQE4A&X-Amz-Signature=45d8a969a87c96c17efe8f790546e5e683918c866300ed670954328e2b528053&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBXD25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26RJoDocI3IPFNyTp3HlPcMV9IS7J81kEIVyAdN%2Bo%2BwIhANQS4Op1dcm1uMrsHqtyaV%2B1%2FtoIS5u%2F9Z6bX%2FWLSJg0Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzpp42HAc%2ByqMCs8mkq3APPQ2k0fAnFfYFSvMblUrQ5%2BjN7kdBurgGRMU8VHezV8JZjiT7lg242t3QlN07iUDvbF3aBnk5AxQYtDCF6rExXou1hmnP%2Bz2gWH9ThQ6omH9XUAKGdrsEttAgJeszW3h4hoecLinq%2BJAnL0DcuWhNzW%2BXiM69JyiFtoLfSa0EkwqKT1YU4UI5g6NjcqmFuWUAkpkwzIdfd6LyVvBfyo8PKPog911%2Fz5HjXlhQIapkwnVfgw2lvA3PDS5sXgUZzICR3FB7TElpnLq6etLbwHLgfJuarxMQRzb4%2FxibdDjyHashKC%2FbvOOL9fm9fNOiMMt3CYKT5A2gFFwjvLWbHQoJ8XJjdpDAwG3Ya6R4dLPF8eY3sxIAEBcMCeVNX3tvI4A2xS2Swhs83fktzBigNdsum6BSVlTNTkmzIVLmkBgtY%2B%2B1l6IGcQLpxiSrJQ5kg%2Bp7qzHrTJ%2F2u1PnvKFXml1nNPBA9auuJgwUorx%2BaLhrSouf82q7gWjpaAtc8%2FHvFSVJYirtFYJHT0jYwhYaWJ1wI6xi7iZSfdgpbeEyFhTcnGKSwszGBl5aQ7XXkHYs3f%2BhDa6Tcg4%2FXmsyJr2u5Wm5VuplrgD%2B7bH%2B9cXx18A7rQOdadHasDoHFDYYgKDCTluPABjqkAaLs4toxU6JTnNiNP18JQQx8ir4%2FpSCJNLI5a6fWSwawG9R8nLy4AV714cHoGf4QK3ljvPoYUP9%2Fn%2BWkECHXGZAOMx1ou0Mb%2BdlF8kbr6zv%2BwhQXg92fBVYMiXyZc4HPxKTRprWOeFWJhvKwTemC0q8OIWd1WCSEkj3O7cDzwjo4ad%2BeltQcUHiUYzTUTCLd5itS3ML4J0KvPoAEiF6YC1guQE4A&X-Amz-Signature=8e502c1eb228f65516cd33a277fdf0cd70962a8305a9510d557b875b1b33bd2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBXD25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26RJoDocI3IPFNyTp3HlPcMV9IS7J81kEIVyAdN%2Bo%2BwIhANQS4Op1dcm1uMrsHqtyaV%2B1%2FtoIS5u%2F9Z6bX%2FWLSJg0Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzpp42HAc%2ByqMCs8mkq3APPQ2k0fAnFfYFSvMblUrQ5%2BjN7kdBurgGRMU8VHezV8JZjiT7lg242t3QlN07iUDvbF3aBnk5AxQYtDCF6rExXou1hmnP%2Bz2gWH9ThQ6omH9XUAKGdrsEttAgJeszW3h4hoecLinq%2BJAnL0DcuWhNzW%2BXiM69JyiFtoLfSa0EkwqKT1YU4UI5g6NjcqmFuWUAkpkwzIdfd6LyVvBfyo8PKPog911%2Fz5HjXlhQIapkwnVfgw2lvA3PDS5sXgUZzICR3FB7TElpnLq6etLbwHLgfJuarxMQRzb4%2FxibdDjyHashKC%2FbvOOL9fm9fNOiMMt3CYKT5A2gFFwjvLWbHQoJ8XJjdpDAwG3Ya6R4dLPF8eY3sxIAEBcMCeVNX3tvI4A2xS2Swhs83fktzBigNdsum6BSVlTNTkmzIVLmkBgtY%2B%2B1l6IGcQLpxiSrJQ5kg%2Bp7qzHrTJ%2F2u1PnvKFXml1nNPBA9auuJgwUorx%2BaLhrSouf82q7gWjpaAtc8%2FHvFSVJYirtFYJHT0jYwhYaWJ1wI6xi7iZSfdgpbeEyFhTcnGKSwszGBl5aQ7XXkHYs3f%2BhDa6Tcg4%2FXmsyJr2u5Wm5VuplrgD%2B7bH%2B9cXx18A7rQOdadHasDoHFDYYgKDCTluPABjqkAaLs4toxU6JTnNiNP18JQQx8ir4%2FpSCJNLI5a6fWSwawG9R8nLy4AV714cHoGf4QK3ljvPoYUP9%2Fn%2BWkECHXGZAOMx1ou0Mb%2BdlF8kbr6zv%2BwhQXg92fBVYMiXyZc4HPxKTRprWOeFWJhvKwTemC0q8OIWd1WCSEkj3O7cDzwjo4ad%2BeltQcUHiUYzTUTCLd5itS3ML4J0KvPoAEiF6YC1guQE4A&X-Amz-Signature=976966a1bd075af59a023e2589ad05b1b7629443bff6ef0cff0c4f3870c6b9d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXBXD25%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26RJoDocI3IPFNyTp3HlPcMV9IS7J81kEIVyAdN%2Bo%2BwIhANQS4Op1dcm1uMrsHqtyaV%2B1%2FtoIS5u%2F9Z6bX%2FWLSJg0Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzpp42HAc%2ByqMCs8mkq3APPQ2k0fAnFfYFSvMblUrQ5%2BjN7kdBurgGRMU8VHezV8JZjiT7lg242t3QlN07iUDvbF3aBnk5AxQYtDCF6rExXou1hmnP%2Bz2gWH9ThQ6omH9XUAKGdrsEttAgJeszW3h4hoecLinq%2BJAnL0DcuWhNzW%2BXiM69JyiFtoLfSa0EkwqKT1YU4UI5g6NjcqmFuWUAkpkwzIdfd6LyVvBfyo8PKPog911%2Fz5HjXlhQIapkwnVfgw2lvA3PDS5sXgUZzICR3FB7TElpnLq6etLbwHLgfJuarxMQRzb4%2FxibdDjyHashKC%2FbvOOL9fm9fNOiMMt3CYKT5A2gFFwjvLWbHQoJ8XJjdpDAwG3Ya6R4dLPF8eY3sxIAEBcMCeVNX3tvI4A2xS2Swhs83fktzBigNdsum6BSVlTNTkmzIVLmkBgtY%2B%2B1l6IGcQLpxiSrJQ5kg%2Bp7qzHrTJ%2F2u1PnvKFXml1nNPBA9auuJgwUorx%2BaLhrSouf82q7gWjpaAtc8%2FHvFSVJYirtFYJHT0jYwhYaWJ1wI6xi7iZSfdgpbeEyFhTcnGKSwszGBl5aQ7XXkHYs3f%2BhDa6Tcg4%2FXmsyJr2u5Wm5VuplrgD%2B7bH%2B9cXx18A7rQOdadHasDoHFDYYgKDCTluPABjqkAaLs4toxU6JTnNiNP18JQQx8ir4%2FpSCJNLI5a6fWSwawG9R8nLy4AV714cHoGf4QK3ljvPoYUP9%2Fn%2BWkECHXGZAOMx1ou0Mb%2BdlF8kbr6zv%2BwhQXg92fBVYMiXyZc4HPxKTRprWOeFWJhvKwTemC0q8OIWd1WCSEkj3O7cDzwjo4ad%2BeltQcUHiUYzTUTCLd5itS3ML4J0KvPoAEiF6YC1guQE4A&X-Amz-Signature=211804ed5f2a492db4d2acc6a3c797660d04f74c52154dd2243ae12073062788&X-Amz-SignedHeaders=host&x-id=GetObject)
