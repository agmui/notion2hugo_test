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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SFZTP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs573cYyrWoWOTJ2tEfZDfHTjOBoEjIWpo0JcCK2vSgIgUZJ4My1gMS2gixiv4muAvyomE5OrXhj2rF1epcjPeqsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpbvtw1mGQDXpw6vircAyhQn1Nl%2BbB%2F7W0bFW%2B4%2FZvm0%2BL7INqXnAgMSZng%2Bky7lTcMI9L8AO9Y3alQY%2FCcq9eVvSCTPjyOm101dBGrXqrk3iHgPeVgD4bV1bidpqERawUmIteoTFZne7mJziJ3ffogz3UhaztmtzDHuDVf0fHoY%2Flv5%2B2JNPa71zENFprKA%2BnGvV6MEWsr3DTdmD7lQWh4iRANBXkHT3IzJgK2E0f3a5kiifRdp2zTwUsAUVSSY3SY8sj4EeXs6EMKTFl3z2vSz1JErBhlUNDvMkQ8aEcOp2mVZ7IEQin4alEztywgvUbNUPvEtIVhvJT0wD%2BXzODIFL9UqiwY%2Bo5ef7Mk3dBd14BO32KSWVmGoOVVRX8Z3l%2F8eRz5iP81u1Pd8H5usYoidv3ZJJUboaIV0NcSSyHNA4zb5jNRoSKAsb61g0AESZB4Ph37xPFsA6OVJ1KFAh2jjdD2uDNuM0wCOGUysj%2FuG8ZW%2FurliKKu9%2BFgWdfOczZ6p2VvaHMkxia7nCeDBgUSJ7AN%2FzXv9ELeDbMzuW%2BruNCako6xWRb50gc%2FTFNFZU5upRrpq1dWr2OaPpAvLOErrnS95t9G3ncjU5q2UhREvUNwyKKUO3OQ8ETrFw94ZPJslXMsSnC0GlYoMM2dmsIGOqUBZrF5hejykoZHksyHhyscbCkG8DMd6D9IybKqXvmSmJBqpe6X%2BpBotjGnOOQmmLsiMNkadhYzEZ3sv8SeyjTd4kuv9Sj57PPHMwM6BNJNf%2BGE2qGtSduExXaBM6cHYdFBhOhc8gs3%2BIzDXiEr%2FGsrLvn%2FPbh5OFrtQW7F1WgWrvi%2BpF9L3YB1p7pZigDf8jexxjx9QUJI9d0qqwg9avNVkQ8qQ6EQ&X-Amz-Signature=de5a4b72016ea6553aadefcf2335f6a3a88a069352193fce0d7c51ea71976c45&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SFZTP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs573cYyrWoWOTJ2tEfZDfHTjOBoEjIWpo0JcCK2vSgIgUZJ4My1gMS2gixiv4muAvyomE5OrXhj2rF1epcjPeqsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpbvtw1mGQDXpw6vircAyhQn1Nl%2BbB%2F7W0bFW%2B4%2FZvm0%2BL7INqXnAgMSZng%2Bky7lTcMI9L8AO9Y3alQY%2FCcq9eVvSCTPjyOm101dBGrXqrk3iHgPeVgD4bV1bidpqERawUmIteoTFZne7mJziJ3ffogz3UhaztmtzDHuDVf0fHoY%2Flv5%2B2JNPa71zENFprKA%2BnGvV6MEWsr3DTdmD7lQWh4iRANBXkHT3IzJgK2E0f3a5kiifRdp2zTwUsAUVSSY3SY8sj4EeXs6EMKTFl3z2vSz1JErBhlUNDvMkQ8aEcOp2mVZ7IEQin4alEztywgvUbNUPvEtIVhvJT0wD%2BXzODIFL9UqiwY%2Bo5ef7Mk3dBd14BO32KSWVmGoOVVRX8Z3l%2F8eRz5iP81u1Pd8H5usYoidv3ZJJUboaIV0NcSSyHNA4zb5jNRoSKAsb61g0AESZB4Ph37xPFsA6OVJ1KFAh2jjdD2uDNuM0wCOGUysj%2FuG8ZW%2FurliKKu9%2BFgWdfOczZ6p2VvaHMkxia7nCeDBgUSJ7AN%2FzXv9ELeDbMzuW%2BruNCako6xWRb50gc%2FTFNFZU5upRrpq1dWr2OaPpAvLOErrnS95t9G3ncjU5q2UhREvUNwyKKUO3OQ8ETrFw94ZPJslXMsSnC0GlYoMM2dmsIGOqUBZrF5hejykoZHksyHhyscbCkG8DMd6D9IybKqXvmSmJBqpe6X%2BpBotjGnOOQmmLsiMNkadhYzEZ3sv8SeyjTd4kuv9Sj57PPHMwM6BNJNf%2BGE2qGtSduExXaBM6cHYdFBhOhc8gs3%2BIzDXiEr%2FGsrLvn%2FPbh5OFrtQW7F1WgWrvi%2BpF9L3YB1p7pZigDf8jexxjx9QUJI9d0qqwg9avNVkQ8qQ6EQ&X-Amz-Signature=679595820fe8959280a310429bb554616252f9fcdfa134a88814192ab53ea16d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SFZTP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs573cYyrWoWOTJ2tEfZDfHTjOBoEjIWpo0JcCK2vSgIgUZJ4My1gMS2gixiv4muAvyomE5OrXhj2rF1epcjPeqsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpbvtw1mGQDXpw6vircAyhQn1Nl%2BbB%2F7W0bFW%2B4%2FZvm0%2BL7INqXnAgMSZng%2Bky7lTcMI9L8AO9Y3alQY%2FCcq9eVvSCTPjyOm101dBGrXqrk3iHgPeVgD4bV1bidpqERawUmIteoTFZne7mJziJ3ffogz3UhaztmtzDHuDVf0fHoY%2Flv5%2B2JNPa71zENFprKA%2BnGvV6MEWsr3DTdmD7lQWh4iRANBXkHT3IzJgK2E0f3a5kiifRdp2zTwUsAUVSSY3SY8sj4EeXs6EMKTFl3z2vSz1JErBhlUNDvMkQ8aEcOp2mVZ7IEQin4alEztywgvUbNUPvEtIVhvJT0wD%2BXzODIFL9UqiwY%2Bo5ef7Mk3dBd14BO32KSWVmGoOVVRX8Z3l%2F8eRz5iP81u1Pd8H5usYoidv3ZJJUboaIV0NcSSyHNA4zb5jNRoSKAsb61g0AESZB4Ph37xPFsA6OVJ1KFAh2jjdD2uDNuM0wCOGUysj%2FuG8ZW%2FurliKKu9%2BFgWdfOczZ6p2VvaHMkxia7nCeDBgUSJ7AN%2FzXv9ELeDbMzuW%2BruNCako6xWRb50gc%2FTFNFZU5upRrpq1dWr2OaPpAvLOErrnS95t9G3ncjU5q2UhREvUNwyKKUO3OQ8ETrFw94ZPJslXMsSnC0GlYoMM2dmsIGOqUBZrF5hejykoZHksyHhyscbCkG8DMd6D9IybKqXvmSmJBqpe6X%2BpBotjGnOOQmmLsiMNkadhYzEZ3sv8SeyjTd4kuv9Sj57PPHMwM6BNJNf%2BGE2qGtSduExXaBM6cHYdFBhOhc8gs3%2BIzDXiEr%2FGsrLvn%2FPbh5OFrtQW7F1WgWrvi%2BpF9L3YB1p7pZigDf8jexxjx9QUJI9d0qqwg9avNVkQ8qQ6EQ&X-Amz-Signature=2f112abde178df35f6e2d80a1d5bfaaefa694af1412483cd28f0e2f77fea34ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SFZTP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs573cYyrWoWOTJ2tEfZDfHTjOBoEjIWpo0JcCK2vSgIgUZJ4My1gMS2gixiv4muAvyomE5OrXhj2rF1epcjPeqsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpbvtw1mGQDXpw6vircAyhQn1Nl%2BbB%2F7W0bFW%2B4%2FZvm0%2BL7INqXnAgMSZng%2Bky7lTcMI9L8AO9Y3alQY%2FCcq9eVvSCTPjyOm101dBGrXqrk3iHgPeVgD4bV1bidpqERawUmIteoTFZne7mJziJ3ffogz3UhaztmtzDHuDVf0fHoY%2Flv5%2B2JNPa71zENFprKA%2BnGvV6MEWsr3DTdmD7lQWh4iRANBXkHT3IzJgK2E0f3a5kiifRdp2zTwUsAUVSSY3SY8sj4EeXs6EMKTFl3z2vSz1JErBhlUNDvMkQ8aEcOp2mVZ7IEQin4alEztywgvUbNUPvEtIVhvJT0wD%2BXzODIFL9UqiwY%2Bo5ef7Mk3dBd14BO32KSWVmGoOVVRX8Z3l%2F8eRz5iP81u1Pd8H5usYoidv3ZJJUboaIV0NcSSyHNA4zb5jNRoSKAsb61g0AESZB4Ph37xPFsA6OVJ1KFAh2jjdD2uDNuM0wCOGUysj%2FuG8ZW%2FurliKKu9%2BFgWdfOczZ6p2VvaHMkxia7nCeDBgUSJ7AN%2FzXv9ELeDbMzuW%2BruNCako6xWRb50gc%2FTFNFZU5upRrpq1dWr2OaPpAvLOErrnS95t9G3ncjU5q2UhREvUNwyKKUO3OQ8ETrFw94ZPJslXMsSnC0GlYoMM2dmsIGOqUBZrF5hejykoZHksyHhyscbCkG8DMd6D9IybKqXvmSmJBqpe6X%2BpBotjGnOOQmmLsiMNkadhYzEZ3sv8SeyjTd4kuv9Sj57PPHMwM6BNJNf%2BGE2qGtSduExXaBM6cHYdFBhOhc8gs3%2BIzDXiEr%2FGsrLvn%2FPbh5OFrtQW7F1WgWrvi%2BpF9L3YB1p7pZigDf8jexxjx9QUJI9d0qqwg9avNVkQ8qQ6EQ&X-Amz-Signature=2648a6cfee873fa021d291cc8b878cac4770248136e3ce7a97266902ae47f7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SFZTP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs573cYyrWoWOTJ2tEfZDfHTjOBoEjIWpo0JcCK2vSgIgUZJ4My1gMS2gixiv4muAvyomE5OrXhj2rF1epcjPeqsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpbvtw1mGQDXpw6vircAyhQn1Nl%2BbB%2F7W0bFW%2B4%2FZvm0%2BL7INqXnAgMSZng%2Bky7lTcMI9L8AO9Y3alQY%2FCcq9eVvSCTPjyOm101dBGrXqrk3iHgPeVgD4bV1bidpqERawUmIteoTFZne7mJziJ3ffogz3UhaztmtzDHuDVf0fHoY%2Flv5%2B2JNPa71zENFprKA%2BnGvV6MEWsr3DTdmD7lQWh4iRANBXkHT3IzJgK2E0f3a5kiifRdp2zTwUsAUVSSY3SY8sj4EeXs6EMKTFl3z2vSz1JErBhlUNDvMkQ8aEcOp2mVZ7IEQin4alEztywgvUbNUPvEtIVhvJT0wD%2BXzODIFL9UqiwY%2Bo5ef7Mk3dBd14BO32KSWVmGoOVVRX8Z3l%2F8eRz5iP81u1Pd8H5usYoidv3ZJJUboaIV0NcSSyHNA4zb5jNRoSKAsb61g0AESZB4Ph37xPFsA6OVJ1KFAh2jjdD2uDNuM0wCOGUysj%2FuG8ZW%2FurliKKu9%2BFgWdfOczZ6p2VvaHMkxia7nCeDBgUSJ7AN%2FzXv9ELeDbMzuW%2BruNCako6xWRb50gc%2FTFNFZU5upRrpq1dWr2OaPpAvLOErrnS95t9G3ncjU5q2UhREvUNwyKKUO3OQ8ETrFw94ZPJslXMsSnC0GlYoMM2dmsIGOqUBZrF5hejykoZHksyHhyscbCkG8DMd6D9IybKqXvmSmJBqpe6X%2BpBotjGnOOQmmLsiMNkadhYzEZ3sv8SeyjTd4kuv9Sj57PPHMwM6BNJNf%2BGE2qGtSduExXaBM6cHYdFBhOhc8gs3%2BIzDXiEr%2FGsrLvn%2FPbh5OFrtQW7F1WgWrvi%2BpF9L3YB1p7pZigDf8jexxjx9QUJI9d0qqwg9avNVkQ8qQ6EQ&X-Amz-Signature=a038bf85b62984cddac6ff57a867f6a0dfc8d960f1643e626a417e9f382b5aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2SFZTP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFs573cYyrWoWOTJ2tEfZDfHTjOBoEjIWpo0JcCK2vSgIgUZJ4My1gMS2gixiv4muAvyomE5OrXhj2rF1epcjPeqsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpbvtw1mGQDXpw6vircAyhQn1Nl%2BbB%2F7W0bFW%2B4%2FZvm0%2BL7INqXnAgMSZng%2Bky7lTcMI9L8AO9Y3alQY%2FCcq9eVvSCTPjyOm101dBGrXqrk3iHgPeVgD4bV1bidpqERawUmIteoTFZne7mJziJ3ffogz3UhaztmtzDHuDVf0fHoY%2Flv5%2B2JNPa71zENFprKA%2BnGvV6MEWsr3DTdmD7lQWh4iRANBXkHT3IzJgK2E0f3a5kiifRdp2zTwUsAUVSSY3SY8sj4EeXs6EMKTFl3z2vSz1JErBhlUNDvMkQ8aEcOp2mVZ7IEQin4alEztywgvUbNUPvEtIVhvJT0wD%2BXzODIFL9UqiwY%2Bo5ef7Mk3dBd14BO32KSWVmGoOVVRX8Z3l%2F8eRz5iP81u1Pd8H5usYoidv3ZJJUboaIV0NcSSyHNA4zb5jNRoSKAsb61g0AESZB4Ph37xPFsA6OVJ1KFAh2jjdD2uDNuM0wCOGUysj%2FuG8ZW%2FurliKKu9%2BFgWdfOczZ6p2VvaHMkxia7nCeDBgUSJ7AN%2FzXv9ELeDbMzuW%2BruNCako6xWRb50gc%2FTFNFZU5upRrpq1dWr2OaPpAvLOErrnS95t9G3ncjU5q2UhREvUNwyKKUO3OQ8ETrFw94ZPJslXMsSnC0GlYoMM2dmsIGOqUBZrF5hejykoZHksyHhyscbCkG8DMd6D9IybKqXvmSmJBqpe6X%2BpBotjGnOOQmmLsiMNkadhYzEZ3sv8SeyjTd4kuv9Sj57PPHMwM6BNJNf%2BGE2qGtSduExXaBM6cHYdFBhOhc8gs3%2BIzDXiEr%2FGsrLvn%2FPbh5OFrtQW7F1WgWrvi%2BpF9L3YB1p7pZigDf8jexxjx9QUJI9d0qqwg9avNVkQ8qQ6EQ&X-Amz-Signature=532783510e0f0e2469db4ce6986d5178df6958f5c4fcdd34276fa7415dc7110f&X-Amz-SignedHeaders=host&x-id=GetObject)
