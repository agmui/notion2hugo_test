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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQATEX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn7xIh1YxM5BM0Wfip2sM552PkSuGExkBe7YHixLu5QAiAI3HruzSc4swGCLkOMsxH3VVr6S79DLaxKGP3kACThaSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxSoC2P%2FEPT5ABy%2BKtwD3hE1OiSKTG7ZQydW6KBHgWqHqCK1RwwZEp%2FLkktQRJXswokpGaeMblkxfDZPP4H5YlxYhCFuDNv23llj2uTAtcynu0cDoYu9eMSB8RFzswXBmhYf9tJZ3tJq4rguxyiCD2V0bTL8THN6EsxrvetUJqsi2%2F7b2HJRwLEPd3SVDnGmZX7vXAZtIQ0p5BB5fos%2FSFA7fY22SuaWJsdOycb2QikmIY%2FWL61%2FozF96phI0jv65DavtGwh5N5bTIp6x34K5UgXRZLiW8mIqusElFlkSIwLEykdtOEFjcGVgttVzGQ4z9QNW%2B7606cgXjzoguMufjflMI3Nglg0Qo%2BMI2PNMpMKZnAcRG4Vqun64jstPfK1SgeotR6LMHn6K2tYTB%2FHLkxPxdsueMydZL4hHpOMHmR6hf1DDg0omBtR0XlY2%2FYZZJ%2BIRtsRWPJF8JnIjnZltjk2mKobidgtfXcquUhYCxe7657jFIH%2B%2BCHu%2FPMBnwQUiKkpeQnkUwjUNvlO5w8LkbCw0Q9vatOngrUDTSnxe0P9OghlK1NhKvyTNfdaEiQyR6QgQ3D7ovQceAAK0leJNOI9eGwZzO8XBF6x870KUbtCUE2CQE%2FsXXrfTqu7RqbpciKwTy%2FjogzYrekwpOrHwAY6pgEDd8Q8FL8fILakpCZG7MlH5yV84eHMHictcSUmV6CCYdXHgVbKXiB17BQu%2B6H08aaEOjhXhZx2CuCcJCSkT1tIhjy70tO5E1QOg81Z77tUV1hILlw2p8e4LSgrZ2%2FJ0IjJUm8j8%2ByLuHSMDNIOCel7Fv7WX9SIOdsvX5V%2Be6Exy3d4CWip%2F%2FtSWTK1AXK%2BfOmx%2Be%2BOS5EKTbQlvNIBCntRZiHXiuk2&X-Amz-Signature=2545a0abb6503a27f8f4cb59945b01d8eb26414dad01e8749ae549c45de18817&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQATEX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn7xIh1YxM5BM0Wfip2sM552PkSuGExkBe7YHixLu5QAiAI3HruzSc4swGCLkOMsxH3VVr6S79DLaxKGP3kACThaSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxSoC2P%2FEPT5ABy%2BKtwD3hE1OiSKTG7ZQydW6KBHgWqHqCK1RwwZEp%2FLkktQRJXswokpGaeMblkxfDZPP4H5YlxYhCFuDNv23llj2uTAtcynu0cDoYu9eMSB8RFzswXBmhYf9tJZ3tJq4rguxyiCD2V0bTL8THN6EsxrvetUJqsi2%2F7b2HJRwLEPd3SVDnGmZX7vXAZtIQ0p5BB5fos%2FSFA7fY22SuaWJsdOycb2QikmIY%2FWL61%2FozF96phI0jv65DavtGwh5N5bTIp6x34K5UgXRZLiW8mIqusElFlkSIwLEykdtOEFjcGVgttVzGQ4z9QNW%2B7606cgXjzoguMufjflMI3Nglg0Qo%2BMI2PNMpMKZnAcRG4Vqun64jstPfK1SgeotR6LMHn6K2tYTB%2FHLkxPxdsueMydZL4hHpOMHmR6hf1DDg0omBtR0XlY2%2FYZZJ%2BIRtsRWPJF8JnIjnZltjk2mKobidgtfXcquUhYCxe7657jFIH%2B%2BCHu%2FPMBnwQUiKkpeQnkUwjUNvlO5w8LkbCw0Q9vatOngrUDTSnxe0P9OghlK1NhKvyTNfdaEiQyR6QgQ3D7ovQceAAK0leJNOI9eGwZzO8XBF6x870KUbtCUE2CQE%2FsXXrfTqu7RqbpciKwTy%2FjogzYrekwpOrHwAY6pgEDd8Q8FL8fILakpCZG7MlH5yV84eHMHictcSUmV6CCYdXHgVbKXiB17BQu%2B6H08aaEOjhXhZx2CuCcJCSkT1tIhjy70tO5E1QOg81Z77tUV1hILlw2p8e4LSgrZ2%2FJ0IjJUm8j8%2ByLuHSMDNIOCel7Fv7WX9SIOdsvX5V%2Be6Exy3d4CWip%2F%2FtSWTK1AXK%2BfOmx%2Be%2BOS5EKTbQlvNIBCntRZiHXiuk2&X-Amz-Signature=c6d4d69954df34399ba8e1e60ad51c463766ecd95c02cfe726788de8096ef373&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQATEX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn7xIh1YxM5BM0Wfip2sM552PkSuGExkBe7YHixLu5QAiAI3HruzSc4swGCLkOMsxH3VVr6S79DLaxKGP3kACThaSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxSoC2P%2FEPT5ABy%2BKtwD3hE1OiSKTG7ZQydW6KBHgWqHqCK1RwwZEp%2FLkktQRJXswokpGaeMblkxfDZPP4H5YlxYhCFuDNv23llj2uTAtcynu0cDoYu9eMSB8RFzswXBmhYf9tJZ3tJq4rguxyiCD2V0bTL8THN6EsxrvetUJqsi2%2F7b2HJRwLEPd3SVDnGmZX7vXAZtIQ0p5BB5fos%2FSFA7fY22SuaWJsdOycb2QikmIY%2FWL61%2FozF96phI0jv65DavtGwh5N5bTIp6x34K5UgXRZLiW8mIqusElFlkSIwLEykdtOEFjcGVgttVzGQ4z9QNW%2B7606cgXjzoguMufjflMI3Nglg0Qo%2BMI2PNMpMKZnAcRG4Vqun64jstPfK1SgeotR6LMHn6K2tYTB%2FHLkxPxdsueMydZL4hHpOMHmR6hf1DDg0omBtR0XlY2%2FYZZJ%2BIRtsRWPJF8JnIjnZltjk2mKobidgtfXcquUhYCxe7657jFIH%2B%2BCHu%2FPMBnwQUiKkpeQnkUwjUNvlO5w8LkbCw0Q9vatOngrUDTSnxe0P9OghlK1NhKvyTNfdaEiQyR6QgQ3D7ovQceAAK0leJNOI9eGwZzO8XBF6x870KUbtCUE2CQE%2FsXXrfTqu7RqbpciKwTy%2FjogzYrekwpOrHwAY6pgEDd8Q8FL8fILakpCZG7MlH5yV84eHMHictcSUmV6CCYdXHgVbKXiB17BQu%2B6H08aaEOjhXhZx2CuCcJCSkT1tIhjy70tO5E1QOg81Z77tUV1hILlw2p8e4LSgrZ2%2FJ0IjJUm8j8%2ByLuHSMDNIOCel7Fv7WX9SIOdsvX5V%2Be6Exy3d4CWip%2F%2FtSWTK1AXK%2BfOmx%2Be%2BOS5EKTbQlvNIBCntRZiHXiuk2&X-Amz-Signature=43f4a549541365cdcdb9316cde57e4e035f8629bb47eeace2da81632cde2f14d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQATEX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn7xIh1YxM5BM0Wfip2sM552PkSuGExkBe7YHixLu5QAiAI3HruzSc4swGCLkOMsxH3VVr6S79DLaxKGP3kACThaSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxSoC2P%2FEPT5ABy%2BKtwD3hE1OiSKTG7ZQydW6KBHgWqHqCK1RwwZEp%2FLkktQRJXswokpGaeMblkxfDZPP4H5YlxYhCFuDNv23llj2uTAtcynu0cDoYu9eMSB8RFzswXBmhYf9tJZ3tJq4rguxyiCD2V0bTL8THN6EsxrvetUJqsi2%2F7b2HJRwLEPd3SVDnGmZX7vXAZtIQ0p5BB5fos%2FSFA7fY22SuaWJsdOycb2QikmIY%2FWL61%2FozF96phI0jv65DavtGwh5N5bTIp6x34K5UgXRZLiW8mIqusElFlkSIwLEykdtOEFjcGVgttVzGQ4z9QNW%2B7606cgXjzoguMufjflMI3Nglg0Qo%2BMI2PNMpMKZnAcRG4Vqun64jstPfK1SgeotR6LMHn6K2tYTB%2FHLkxPxdsueMydZL4hHpOMHmR6hf1DDg0omBtR0XlY2%2FYZZJ%2BIRtsRWPJF8JnIjnZltjk2mKobidgtfXcquUhYCxe7657jFIH%2B%2BCHu%2FPMBnwQUiKkpeQnkUwjUNvlO5w8LkbCw0Q9vatOngrUDTSnxe0P9OghlK1NhKvyTNfdaEiQyR6QgQ3D7ovQceAAK0leJNOI9eGwZzO8XBF6x870KUbtCUE2CQE%2FsXXrfTqu7RqbpciKwTy%2FjogzYrekwpOrHwAY6pgEDd8Q8FL8fILakpCZG7MlH5yV84eHMHictcSUmV6CCYdXHgVbKXiB17BQu%2B6H08aaEOjhXhZx2CuCcJCSkT1tIhjy70tO5E1QOg81Z77tUV1hILlw2p8e4LSgrZ2%2FJ0IjJUm8j8%2ByLuHSMDNIOCel7Fv7WX9SIOdsvX5V%2Be6Exy3d4CWip%2F%2FtSWTK1AXK%2BfOmx%2Be%2BOS5EKTbQlvNIBCntRZiHXiuk2&X-Amz-Signature=96eaac9554e4a2621384b774e8c3493a459ec7c129380ac5ab2433bfe56f7421&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQATEX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn7xIh1YxM5BM0Wfip2sM552PkSuGExkBe7YHixLu5QAiAI3HruzSc4swGCLkOMsxH3VVr6S79DLaxKGP3kACThaSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxSoC2P%2FEPT5ABy%2BKtwD3hE1OiSKTG7ZQydW6KBHgWqHqCK1RwwZEp%2FLkktQRJXswokpGaeMblkxfDZPP4H5YlxYhCFuDNv23llj2uTAtcynu0cDoYu9eMSB8RFzswXBmhYf9tJZ3tJq4rguxyiCD2V0bTL8THN6EsxrvetUJqsi2%2F7b2HJRwLEPd3SVDnGmZX7vXAZtIQ0p5BB5fos%2FSFA7fY22SuaWJsdOycb2QikmIY%2FWL61%2FozF96phI0jv65DavtGwh5N5bTIp6x34K5UgXRZLiW8mIqusElFlkSIwLEykdtOEFjcGVgttVzGQ4z9QNW%2B7606cgXjzoguMufjflMI3Nglg0Qo%2BMI2PNMpMKZnAcRG4Vqun64jstPfK1SgeotR6LMHn6K2tYTB%2FHLkxPxdsueMydZL4hHpOMHmR6hf1DDg0omBtR0XlY2%2FYZZJ%2BIRtsRWPJF8JnIjnZltjk2mKobidgtfXcquUhYCxe7657jFIH%2B%2BCHu%2FPMBnwQUiKkpeQnkUwjUNvlO5w8LkbCw0Q9vatOngrUDTSnxe0P9OghlK1NhKvyTNfdaEiQyR6QgQ3D7ovQceAAK0leJNOI9eGwZzO8XBF6x870KUbtCUE2CQE%2FsXXrfTqu7RqbpciKwTy%2FjogzYrekwpOrHwAY6pgEDd8Q8FL8fILakpCZG7MlH5yV84eHMHictcSUmV6CCYdXHgVbKXiB17BQu%2B6H08aaEOjhXhZx2CuCcJCSkT1tIhjy70tO5E1QOg81Z77tUV1hILlw2p8e4LSgrZ2%2FJ0IjJUm8j8%2ByLuHSMDNIOCel7Fv7WX9SIOdsvX5V%2Be6Exy3d4CWip%2F%2FtSWTK1AXK%2BfOmx%2Be%2BOS5EKTbQlvNIBCntRZiHXiuk2&X-Amz-Signature=5482cb6eeb029d333700b76ccad53fcb0a73f97b99950ec7b353da25a6ca26dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQATEX3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHn7xIh1YxM5BM0Wfip2sM552PkSuGExkBe7YHixLu5QAiAI3HruzSc4swGCLkOMsxH3VVr6S79DLaxKGP3kACThaSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxSoC2P%2FEPT5ABy%2BKtwD3hE1OiSKTG7ZQydW6KBHgWqHqCK1RwwZEp%2FLkktQRJXswokpGaeMblkxfDZPP4H5YlxYhCFuDNv23llj2uTAtcynu0cDoYu9eMSB8RFzswXBmhYf9tJZ3tJq4rguxyiCD2V0bTL8THN6EsxrvetUJqsi2%2F7b2HJRwLEPd3SVDnGmZX7vXAZtIQ0p5BB5fos%2FSFA7fY22SuaWJsdOycb2QikmIY%2FWL61%2FozF96phI0jv65DavtGwh5N5bTIp6x34K5UgXRZLiW8mIqusElFlkSIwLEykdtOEFjcGVgttVzGQ4z9QNW%2B7606cgXjzoguMufjflMI3Nglg0Qo%2BMI2PNMpMKZnAcRG4Vqun64jstPfK1SgeotR6LMHn6K2tYTB%2FHLkxPxdsueMydZL4hHpOMHmR6hf1DDg0omBtR0XlY2%2FYZZJ%2BIRtsRWPJF8JnIjnZltjk2mKobidgtfXcquUhYCxe7657jFIH%2B%2BCHu%2FPMBnwQUiKkpeQnkUwjUNvlO5w8LkbCw0Q9vatOngrUDTSnxe0P9OghlK1NhKvyTNfdaEiQyR6QgQ3D7ovQceAAK0leJNOI9eGwZzO8XBF6x870KUbtCUE2CQE%2FsXXrfTqu7RqbpciKwTy%2FjogzYrekwpOrHwAY6pgEDd8Q8FL8fILakpCZG7MlH5yV84eHMHictcSUmV6CCYdXHgVbKXiB17BQu%2B6H08aaEOjhXhZx2CuCcJCSkT1tIhjy70tO5E1QOg81Z77tUV1hILlw2p8e4LSgrZ2%2FJ0IjJUm8j8%2ByLuHSMDNIOCel7Fv7WX9SIOdsvX5V%2Be6Exy3d4CWip%2F%2FtSWTK1AXK%2BfOmx%2Be%2BOS5EKTbQlvNIBCntRZiHXiuk2&X-Amz-Signature=317c4c1a241b96d38906ed18ed3ba07c1c1501d2155e516efdd7846b938676a3&X-Amz-SignedHeaders=host&x-id=GetObject)
