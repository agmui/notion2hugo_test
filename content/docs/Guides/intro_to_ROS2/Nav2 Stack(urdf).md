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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZULPJ47%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1BIZ1iggaivVRLkd0%2BDuMtDUZkpbPYOTe8%2B%2BaoTfbwIgdLcY%2FOiaO%2Bmd8f9uPtkpe%2FnyVNzhSGpvT8hduobQJEQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKD138fUSHrdKHuNSrcA%2Bzqr9mmtyy0NAG1MaR0DgSA%2FNA9k9leFb7KhJOOhQT98PlDNKwLJ8hwuAX2ITHkdDm20HewWHpwulbKBeWLWF%2FLAjnZCf5nqX4C9X4v6wX43QyrLDI93QUk5sfbrxkN104uHMMeGZV2E2CJmZrW1h8N0nvItUuKhUqtpVzCZBRHOR5vZqd44BIuO20cctdHgGgGNiAhVifGAeDs%2BMrK7zC9cVYxFNliYjTqnR6G2ghw%2Bmv7yOuTwgAPylrDsHvo%2FTYqgO5%2FU7aF2Bt6jgp4rm8lTHuSeUX%2BxSCC0n2g4p%2BGg%2B4OULDe3WVYJE4NgCL2lIc0uuvCHT8Kj%2FSPbF7mrzV%2BcgfqZkEgzG5aTjPo%2BHhmQTXTzU8PxlTi7hOFBsbxDjFQvpnj%2BaoqPGici7FYiRd1bQrAQNW%2Fp9NdLahqDvBtqMxR2tpKToJzf%2FMaPx6gbkmchua62u3iEHsjfEdXnmJPliv16owA%2BUWGaQPVdzUSBb5oZeImo1Y%2B0gDPsokFXq58m%2FThuWIN6ylVzGQMzEmZ0IkLucAH9cH%2FoQ0QSPvd4UunvIl1f661eWYBXq61K%2FfL4797YLt%2BTMbjEADbmNIiLAARhom03E8jmZkhNCO7E9okrxkw0TgWFYrZMNmpq74GOqUBzGumrOK1lmDIKMYmJL55nz2znzMy5vZ8PliX2owfG42EHRnFaqURbSgbXvifruya5geb7qrAmcNSn0wFDlFj%2BYq5pR0XHF9nYDZEACa5IXRDuwyLQ6HiHG48yUSFylboqXI0inBL%2BHolaIDV8C0JgSW2uKKqu%2BZMBxADe%2Fr7t5tQf0m3huv0JGcyniv3cBju0uGHo6Nf54SjaAJ9tOBVMqPtVbNs&X-Amz-Signature=ffa5f41fa920ad18ad97a77fc565d7dac68ab99e86ce9ff0133410e9c7cd8f48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZULPJ47%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1BIZ1iggaivVRLkd0%2BDuMtDUZkpbPYOTe8%2B%2BaoTfbwIgdLcY%2FOiaO%2Bmd8f9uPtkpe%2FnyVNzhSGpvT8hduobQJEQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKD138fUSHrdKHuNSrcA%2Bzqr9mmtyy0NAG1MaR0DgSA%2FNA9k9leFb7KhJOOhQT98PlDNKwLJ8hwuAX2ITHkdDm20HewWHpwulbKBeWLWF%2FLAjnZCf5nqX4C9X4v6wX43QyrLDI93QUk5sfbrxkN104uHMMeGZV2E2CJmZrW1h8N0nvItUuKhUqtpVzCZBRHOR5vZqd44BIuO20cctdHgGgGNiAhVifGAeDs%2BMrK7zC9cVYxFNliYjTqnR6G2ghw%2Bmv7yOuTwgAPylrDsHvo%2FTYqgO5%2FU7aF2Bt6jgp4rm8lTHuSeUX%2BxSCC0n2g4p%2BGg%2B4OULDe3WVYJE4NgCL2lIc0uuvCHT8Kj%2FSPbF7mrzV%2BcgfqZkEgzG5aTjPo%2BHhmQTXTzU8PxlTi7hOFBsbxDjFQvpnj%2BaoqPGici7FYiRd1bQrAQNW%2Fp9NdLahqDvBtqMxR2tpKToJzf%2FMaPx6gbkmchua62u3iEHsjfEdXnmJPliv16owA%2BUWGaQPVdzUSBb5oZeImo1Y%2B0gDPsokFXq58m%2FThuWIN6ylVzGQMzEmZ0IkLucAH9cH%2FoQ0QSPvd4UunvIl1f661eWYBXq61K%2FfL4797YLt%2BTMbjEADbmNIiLAARhom03E8jmZkhNCO7E9okrxkw0TgWFYrZMNmpq74GOqUBzGumrOK1lmDIKMYmJL55nz2znzMy5vZ8PliX2owfG42EHRnFaqURbSgbXvifruya5geb7qrAmcNSn0wFDlFj%2BYq5pR0XHF9nYDZEACa5IXRDuwyLQ6HiHG48yUSFylboqXI0inBL%2BHolaIDV8C0JgSW2uKKqu%2BZMBxADe%2Fr7t5tQf0m3huv0JGcyniv3cBju0uGHo6Nf54SjaAJ9tOBVMqPtVbNs&X-Amz-Signature=5cb3771f5bfb46de8327fea25a99327e6c74b9199266534285181827becc71d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZULPJ47%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1BIZ1iggaivVRLkd0%2BDuMtDUZkpbPYOTe8%2B%2BaoTfbwIgdLcY%2FOiaO%2Bmd8f9uPtkpe%2FnyVNzhSGpvT8hduobQJEQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKD138fUSHrdKHuNSrcA%2Bzqr9mmtyy0NAG1MaR0DgSA%2FNA9k9leFb7KhJOOhQT98PlDNKwLJ8hwuAX2ITHkdDm20HewWHpwulbKBeWLWF%2FLAjnZCf5nqX4C9X4v6wX43QyrLDI93QUk5sfbrxkN104uHMMeGZV2E2CJmZrW1h8N0nvItUuKhUqtpVzCZBRHOR5vZqd44BIuO20cctdHgGgGNiAhVifGAeDs%2BMrK7zC9cVYxFNliYjTqnR6G2ghw%2Bmv7yOuTwgAPylrDsHvo%2FTYqgO5%2FU7aF2Bt6jgp4rm8lTHuSeUX%2BxSCC0n2g4p%2BGg%2B4OULDe3WVYJE4NgCL2lIc0uuvCHT8Kj%2FSPbF7mrzV%2BcgfqZkEgzG5aTjPo%2BHhmQTXTzU8PxlTi7hOFBsbxDjFQvpnj%2BaoqPGici7FYiRd1bQrAQNW%2Fp9NdLahqDvBtqMxR2tpKToJzf%2FMaPx6gbkmchua62u3iEHsjfEdXnmJPliv16owA%2BUWGaQPVdzUSBb5oZeImo1Y%2B0gDPsokFXq58m%2FThuWIN6ylVzGQMzEmZ0IkLucAH9cH%2FoQ0QSPvd4UunvIl1f661eWYBXq61K%2FfL4797YLt%2BTMbjEADbmNIiLAARhom03E8jmZkhNCO7E9okrxkw0TgWFYrZMNmpq74GOqUBzGumrOK1lmDIKMYmJL55nz2znzMy5vZ8PliX2owfG42EHRnFaqURbSgbXvifruya5geb7qrAmcNSn0wFDlFj%2BYq5pR0XHF9nYDZEACa5IXRDuwyLQ6HiHG48yUSFylboqXI0inBL%2BHolaIDV8C0JgSW2uKKqu%2BZMBxADe%2Fr7t5tQf0m3huv0JGcyniv3cBju0uGHo6Nf54SjaAJ9tOBVMqPtVbNs&X-Amz-Signature=1db18c080ef1f17f29ff617cbab8cc3dfc259f85cb603677cae04e207a1a5cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZULPJ47%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1BIZ1iggaivVRLkd0%2BDuMtDUZkpbPYOTe8%2B%2BaoTfbwIgdLcY%2FOiaO%2Bmd8f9uPtkpe%2FnyVNzhSGpvT8hduobQJEQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKD138fUSHrdKHuNSrcA%2Bzqr9mmtyy0NAG1MaR0DgSA%2FNA9k9leFb7KhJOOhQT98PlDNKwLJ8hwuAX2ITHkdDm20HewWHpwulbKBeWLWF%2FLAjnZCf5nqX4C9X4v6wX43QyrLDI93QUk5sfbrxkN104uHMMeGZV2E2CJmZrW1h8N0nvItUuKhUqtpVzCZBRHOR5vZqd44BIuO20cctdHgGgGNiAhVifGAeDs%2BMrK7zC9cVYxFNliYjTqnR6G2ghw%2Bmv7yOuTwgAPylrDsHvo%2FTYqgO5%2FU7aF2Bt6jgp4rm8lTHuSeUX%2BxSCC0n2g4p%2BGg%2B4OULDe3WVYJE4NgCL2lIc0uuvCHT8Kj%2FSPbF7mrzV%2BcgfqZkEgzG5aTjPo%2BHhmQTXTzU8PxlTi7hOFBsbxDjFQvpnj%2BaoqPGici7FYiRd1bQrAQNW%2Fp9NdLahqDvBtqMxR2tpKToJzf%2FMaPx6gbkmchua62u3iEHsjfEdXnmJPliv16owA%2BUWGaQPVdzUSBb5oZeImo1Y%2B0gDPsokFXq58m%2FThuWIN6ylVzGQMzEmZ0IkLucAH9cH%2FoQ0QSPvd4UunvIl1f661eWYBXq61K%2FfL4797YLt%2BTMbjEADbmNIiLAARhom03E8jmZkhNCO7E9okrxkw0TgWFYrZMNmpq74GOqUBzGumrOK1lmDIKMYmJL55nz2znzMy5vZ8PliX2owfG42EHRnFaqURbSgbXvifruya5geb7qrAmcNSn0wFDlFj%2BYq5pR0XHF9nYDZEACa5IXRDuwyLQ6HiHG48yUSFylboqXI0inBL%2BHolaIDV8C0JgSW2uKKqu%2BZMBxADe%2Fr7t5tQf0m3huv0JGcyniv3cBju0uGHo6Nf54SjaAJ9tOBVMqPtVbNs&X-Amz-Signature=c39cb823bd826f053daa12dc1cdccc740acfbc3605d557454e89deee3bcbcda8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZULPJ47%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1BIZ1iggaivVRLkd0%2BDuMtDUZkpbPYOTe8%2B%2BaoTfbwIgdLcY%2FOiaO%2Bmd8f9uPtkpe%2FnyVNzhSGpvT8hduobQJEQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKD138fUSHrdKHuNSrcA%2Bzqr9mmtyy0NAG1MaR0DgSA%2FNA9k9leFb7KhJOOhQT98PlDNKwLJ8hwuAX2ITHkdDm20HewWHpwulbKBeWLWF%2FLAjnZCf5nqX4C9X4v6wX43QyrLDI93QUk5sfbrxkN104uHMMeGZV2E2CJmZrW1h8N0nvItUuKhUqtpVzCZBRHOR5vZqd44BIuO20cctdHgGgGNiAhVifGAeDs%2BMrK7zC9cVYxFNliYjTqnR6G2ghw%2Bmv7yOuTwgAPylrDsHvo%2FTYqgO5%2FU7aF2Bt6jgp4rm8lTHuSeUX%2BxSCC0n2g4p%2BGg%2B4OULDe3WVYJE4NgCL2lIc0uuvCHT8Kj%2FSPbF7mrzV%2BcgfqZkEgzG5aTjPo%2BHhmQTXTzU8PxlTi7hOFBsbxDjFQvpnj%2BaoqPGici7FYiRd1bQrAQNW%2Fp9NdLahqDvBtqMxR2tpKToJzf%2FMaPx6gbkmchua62u3iEHsjfEdXnmJPliv16owA%2BUWGaQPVdzUSBb5oZeImo1Y%2B0gDPsokFXq58m%2FThuWIN6ylVzGQMzEmZ0IkLucAH9cH%2FoQ0QSPvd4UunvIl1f661eWYBXq61K%2FfL4797YLt%2BTMbjEADbmNIiLAARhom03E8jmZkhNCO7E9okrxkw0TgWFYrZMNmpq74GOqUBzGumrOK1lmDIKMYmJL55nz2znzMy5vZ8PliX2owfG42EHRnFaqURbSgbXvifruya5geb7qrAmcNSn0wFDlFj%2BYq5pR0XHF9nYDZEACa5IXRDuwyLQ6HiHG48yUSFylboqXI0inBL%2BHolaIDV8C0JgSW2uKKqu%2BZMBxADe%2Fr7t5tQf0m3huv0JGcyniv3cBju0uGHo6Nf54SjaAJ9tOBVMqPtVbNs&X-Amz-Signature=d5e0984c1fd8f7e9f7a5278e6318aadd9f1327260eb647e23f5af9f51db26795&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZULPJ47%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1BIZ1iggaivVRLkd0%2BDuMtDUZkpbPYOTe8%2B%2BaoTfbwIgdLcY%2FOiaO%2Bmd8f9uPtkpe%2FnyVNzhSGpvT8hduobQJEQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKD138fUSHrdKHuNSrcA%2Bzqr9mmtyy0NAG1MaR0DgSA%2FNA9k9leFb7KhJOOhQT98PlDNKwLJ8hwuAX2ITHkdDm20HewWHpwulbKBeWLWF%2FLAjnZCf5nqX4C9X4v6wX43QyrLDI93QUk5sfbrxkN104uHMMeGZV2E2CJmZrW1h8N0nvItUuKhUqtpVzCZBRHOR5vZqd44BIuO20cctdHgGgGNiAhVifGAeDs%2BMrK7zC9cVYxFNliYjTqnR6G2ghw%2Bmv7yOuTwgAPylrDsHvo%2FTYqgO5%2FU7aF2Bt6jgp4rm8lTHuSeUX%2BxSCC0n2g4p%2BGg%2B4OULDe3WVYJE4NgCL2lIc0uuvCHT8Kj%2FSPbF7mrzV%2BcgfqZkEgzG5aTjPo%2BHhmQTXTzU8PxlTi7hOFBsbxDjFQvpnj%2BaoqPGici7FYiRd1bQrAQNW%2Fp9NdLahqDvBtqMxR2tpKToJzf%2FMaPx6gbkmchua62u3iEHsjfEdXnmJPliv16owA%2BUWGaQPVdzUSBb5oZeImo1Y%2B0gDPsokFXq58m%2FThuWIN6ylVzGQMzEmZ0IkLucAH9cH%2FoQ0QSPvd4UunvIl1f661eWYBXq61K%2FfL4797YLt%2BTMbjEADbmNIiLAARhom03E8jmZkhNCO7E9okrxkw0TgWFYrZMNmpq74GOqUBzGumrOK1lmDIKMYmJL55nz2znzMy5vZ8PliX2owfG42EHRnFaqURbSgbXvifruya5geb7qrAmcNSn0wFDlFj%2BYq5pR0XHF9nYDZEACa5IXRDuwyLQ6HiHG48yUSFylboqXI0inBL%2BHolaIDV8C0JgSW2uKKqu%2BZMBxADe%2Fr7t5tQf0m3huv0JGcyniv3cBju0uGHo6Nf54SjaAJ9tOBVMqPtVbNs&X-Amz-Signature=d389c52221573741b4fa1dbefae2049e8d92868c54362993edbe9294a2464cd6&X-Amz-SignedHeaders=host&x-id=GetObject)
