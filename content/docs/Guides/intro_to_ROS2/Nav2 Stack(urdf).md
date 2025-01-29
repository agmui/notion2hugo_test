---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBRSG25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZEn2jm4encEP8wrujCQwVoX%2BBJd3sLKqW33HGfOu9QIgGK7ykd09LxYd4D2LmNkGB3p%2FyR2DwJt2Q9YbBC4P5ygqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCoF6tSo987wgQsxyrcA2WDRxVpIu5w0qEyrwZ72pPXhVmOZnqHUNV%2BLO92kCSpX%2Fiw%2FMShCFryyrYWjmzQldtfb0WLxjlDzYJ6sIVns8Qpv2LTC9G5fpA7XyklyCktueR4xTUgZNfmf9efKeXLugYvpn8NL2%2F2joX2ofL%2FZi5uuBP66LD4cuoeR30dvFPUkeq%2BdJ8LN3rHB17XRTFVXkSZZRz2NtTfBHzRGeXMI6%2BKtYixcYMUZtbQVTUXRo9vwhY66wHlnYQo%2FvK5iWAVQJS9s3cE6X4ypsEW6f%2FfQ0QXdSf%2Bg3zGJYdyBBfciPMjT%2B1m8GWp8dSiixpSGskvG%2BhzIngpBcBBT4fRDCDRNuBm2X2fzhrlNahu%2BtkpGVX5qdw0NhNNW%2FgcwmHes4cUY20NVOKmIyZJOGdyp1F5wEd0Y5KDcptfDJ3EPSV%2FH0Q99QBwkyEfwNsg%2Bmpo%2BSA4WWkgS8YSYgKjyheuc%2BjogAd%2B57uHWOYsNT30zsHgCKwoGiaUc2Gn178BB%2BCCIOIgNIM5EWOZWFy1V1Q0hu8GgeANluRu5glUmpD8rVpJtDvtYWJTdKpb%2F0Hqk8d%2F1vI89L6mfyxdGzXf2Ogfrl49y5GzJHyw0LZ6n3cRyRjFGwAR7sUXCjArOTm2t3gIMPH16bwGOqUBVgxCRD3L%2BHTfff7cPS5m1K0DFoZx3s95hMCzPmmFgpryjsF%2F7NA%2F%2FSEoHSF5%2FYg5AVKq7Jv2cmB4kTCzCrRwNWc%2FkB3VuavMbD2dSVDPU3OzpYDZ4wL3BLIbVqZ7dyNsTx%2BLkAF2i%2F9poa%2BEJdqm%2FqF%2BOVDj5AoxNG21QU62YJeGd6OENMDomXH6ZxB9zIWY1ZF%2BNpUGGgEc9uWdLUnWg7lHD1Rf&X-Amz-Signature=9ff632dbad177d3b574ac1cc1325cde95e90de18ab0a590e03e37bdf1b9fb814&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBRSG25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZEn2jm4encEP8wrujCQwVoX%2BBJd3sLKqW33HGfOu9QIgGK7ykd09LxYd4D2LmNkGB3p%2FyR2DwJt2Q9YbBC4P5ygqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCoF6tSo987wgQsxyrcA2WDRxVpIu5w0qEyrwZ72pPXhVmOZnqHUNV%2BLO92kCSpX%2Fiw%2FMShCFryyrYWjmzQldtfb0WLxjlDzYJ6sIVns8Qpv2LTC9G5fpA7XyklyCktueR4xTUgZNfmf9efKeXLugYvpn8NL2%2F2joX2ofL%2FZi5uuBP66LD4cuoeR30dvFPUkeq%2BdJ8LN3rHB17XRTFVXkSZZRz2NtTfBHzRGeXMI6%2BKtYixcYMUZtbQVTUXRo9vwhY66wHlnYQo%2FvK5iWAVQJS9s3cE6X4ypsEW6f%2FfQ0QXdSf%2Bg3zGJYdyBBfciPMjT%2B1m8GWp8dSiixpSGskvG%2BhzIngpBcBBT4fRDCDRNuBm2X2fzhrlNahu%2BtkpGVX5qdw0NhNNW%2FgcwmHes4cUY20NVOKmIyZJOGdyp1F5wEd0Y5KDcptfDJ3EPSV%2FH0Q99QBwkyEfwNsg%2Bmpo%2BSA4WWkgS8YSYgKjyheuc%2BjogAd%2B57uHWOYsNT30zsHgCKwoGiaUc2Gn178BB%2BCCIOIgNIM5EWOZWFy1V1Q0hu8GgeANluRu5glUmpD8rVpJtDvtYWJTdKpb%2F0Hqk8d%2F1vI89L6mfyxdGzXf2Ogfrl49y5GzJHyw0LZ6n3cRyRjFGwAR7sUXCjArOTm2t3gIMPH16bwGOqUBVgxCRD3L%2BHTfff7cPS5m1K0DFoZx3s95hMCzPmmFgpryjsF%2F7NA%2F%2FSEoHSF5%2FYg5AVKq7Jv2cmB4kTCzCrRwNWc%2FkB3VuavMbD2dSVDPU3OzpYDZ4wL3BLIbVqZ7dyNsTx%2BLkAF2i%2F9poa%2BEJdqm%2FqF%2BOVDj5AoxNG21QU62YJeGd6OENMDomXH6ZxB9zIWY1ZF%2BNpUGGgEc9uWdLUnWg7lHD1Rf&X-Amz-Signature=c820fce53a2e68aeae95d84ca877095466b22cc45b3d5306e2224be74889dfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBRSG25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZEn2jm4encEP8wrujCQwVoX%2BBJd3sLKqW33HGfOu9QIgGK7ykd09LxYd4D2LmNkGB3p%2FyR2DwJt2Q9YbBC4P5ygqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCoF6tSo987wgQsxyrcA2WDRxVpIu5w0qEyrwZ72pPXhVmOZnqHUNV%2BLO92kCSpX%2Fiw%2FMShCFryyrYWjmzQldtfb0WLxjlDzYJ6sIVns8Qpv2LTC9G5fpA7XyklyCktueR4xTUgZNfmf9efKeXLugYvpn8NL2%2F2joX2ofL%2FZi5uuBP66LD4cuoeR30dvFPUkeq%2BdJ8LN3rHB17XRTFVXkSZZRz2NtTfBHzRGeXMI6%2BKtYixcYMUZtbQVTUXRo9vwhY66wHlnYQo%2FvK5iWAVQJS9s3cE6X4ypsEW6f%2FfQ0QXdSf%2Bg3zGJYdyBBfciPMjT%2B1m8GWp8dSiixpSGskvG%2BhzIngpBcBBT4fRDCDRNuBm2X2fzhrlNahu%2BtkpGVX5qdw0NhNNW%2FgcwmHes4cUY20NVOKmIyZJOGdyp1F5wEd0Y5KDcptfDJ3EPSV%2FH0Q99QBwkyEfwNsg%2Bmpo%2BSA4WWkgS8YSYgKjyheuc%2BjogAd%2B57uHWOYsNT30zsHgCKwoGiaUc2Gn178BB%2BCCIOIgNIM5EWOZWFy1V1Q0hu8GgeANluRu5glUmpD8rVpJtDvtYWJTdKpb%2F0Hqk8d%2F1vI89L6mfyxdGzXf2Ogfrl49y5GzJHyw0LZ6n3cRyRjFGwAR7sUXCjArOTm2t3gIMPH16bwGOqUBVgxCRD3L%2BHTfff7cPS5m1K0DFoZx3s95hMCzPmmFgpryjsF%2F7NA%2F%2FSEoHSF5%2FYg5AVKq7Jv2cmB4kTCzCrRwNWc%2FkB3VuavMbD2dSVDPU3OzpYDZ4wL3BLIbVqZ7dyNsTx%2BLkAF2i%2F9poa%2BEJdqm%2FqF%2BOVDj5AoxNG21QU62YJeGd6OENMDomXH6ZxB9zIWY1ZF%2BNpUGGgEc9uWdLUnWg7lHD1Rf&X-Amz-Signature=73307fd4b51b2b34b45c2647e31a5fe0d5b7b272c400a73d25bcb94787c02678&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBRSG25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZEn2jm4encEP8wrujCQwVoX%2BBJd3sLKqW33HGfOu9QIgGK7ykd09LxYd4D2LmNkGB3p%2FyR2DwJt2Q9YbBC4P5ygqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCoF6tSo987wgQsxyrcA2WDRxVpIu5w0qEyrwZ72pPXhVmOZnqHUNV%2BLO92kCSpX%2Fiw%2FMShCFryyrYWjmzQldtfb0WLxjlDzYJ6sIVns8Qpv2LTC9G5fpA7XyklyCktueR4xTUgZNfmf9efKeXLugYvpn8NL2%2F2joX2ofL%2FZi5uuBP66LD4cuoeR30dvFPUkeq%2BdJ8LN3rHB17XRTFVXkSZZRz2NtTfBHzRGeXMI6%2BKtYixcYMUZtbQVTUXRo9vwhY66wHlnYQo%2FvK5iWAVQJS9s3cE6X4ypsEW6f%2FfQ0QXdSf%2Bg3zGJYdyBBfciPMjT%2B1m8GWp8dSiixpSGskvG%2BhzIngpBcBBT4fRDCDRNuBm2X2fzhrlNahu%2BtkpGVX5qdw0NhNNW%2FgcwmHes4cUY20NVOKmIyZJOGdyp1F5wEd0Y5KDcptfDJ3EPSV%2FH0Q99QBwkyEfwNsg%2Bmpo%2BSA4WWkgS8YSYgKjyheuc%2BjogAd%2B57uHWOYsNT30zsHgCKwoGiaUc2Gn178BB%2BCCIOIgNIM5EWOZWFy1V1Q0hu8GgeANluRu5glUmpD8rVpJtDvtYWJTdKpb%2F0Hqk8d%2F1vI89L6mfyxdGzXf2Ogfrl49y5GzJHyw0LZ6n3cRyRjFGwAR7sUXCjArOTm2t3gIMPH16bwGOqUBVgxCRD3L%2BHTfff7cPS5m1K0DFoZx3s95hMCzPmmFgpryjsF%2F7NA%2F%2FSEoHSF5%2FYg5AVKq7Jv2cmB4kTCzCrRwNWc%2FkB3VuavMbD2dSVDPU3OzpYDZ4wL3BLIbVqZ7dyNsTx%2BLkAF2i%2F9poa%2BEJdqm%2FqF%2BOVDj5AoxNG21QU62YJeGd6OENMDomXH6ZxB9zIWY1ZF%2BNpUGGgEc9uWdLUnWg7lHD1Rf&X-Amz-Signature=8ea212edbc4b57cedb9cc23ca71f63c9c40d8b8d070b73914f8e7ae09fec00e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBRSG25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZEn2jm4encEP8wrujCQwVoX%2BBJd3sLKqW33HGfOu9QIgGK7ykd09LxYd4D2LmNkGB3p%2FyR2DwJt2Q9YbBC4P5ygqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCoF6tSo987wgQsxyrcA2WDRxVpIu5w0qEyrwZ72pPXhVmOZnqHUNV%2BLO92kCSpX%2Fiw%2FMShCFryyrYWjmzQldtfb0WLxjlDzYJ6sIVns8Qpv2LTC9G5fpA7XyklyCktueR4xTUgZNfmf9efKeXLugYvpn8NL2%2F2joX2ofL%2FZi5uuBP66LD4cuoeR30dvFPUkeq%2BdJ8LN3rHB17XRTFVXkSZZRz2NtTfBHzRGeXMI6%2BKtYixcYMUZtbQVTUXRo9vwhY66wHlnYQo%2FvK5iWAVQJS9s3cE6X4ypsEW6f%2FfQ0QXdSf%2Bg3zGJYdyBBfciPMjT%2B1m8GWp8dSiixpSGskvG%2BhzIngpBcBBT4fRDCDRNuBm2X2fzhrlNahu%2BtkpGVX5qdw0NhNNW%2FgcwmHes4cUY20NVOKmIyZJOGdyp1F5wEd0Y5KDcptfDJ3EPSV%2FH0Q99QBwkyEfwNsg%2Bmpo%2BSA4WWkgS8YSYgKjyheuc%2BjogAd%2B57uHWOYsNT30zsHgCKwoGiaUc2Gn178BB%2BCCIOIgNIM5EWOZWFy1V1Q0hu8GgeANluRu5glUmpD8rVpJtDvtYWJTdKpb%2F0Hqk8d%2F1vI89L6mfyxdGzXf2Ogfrl49y5GzJHyw0LZ6n3cRyRjFGwAR7sUXCjArOTm2t3gIMPH16bwGOqUBVgxCRD3L%2BHTfff7cPS5m1K0DFoZx3s95hMCzPmmFgpryjsF%2F7NA%2F%2FSEoHSF5%2FYg5AVKq7Jv2cmB4kTCzCrRwNWc%2FkB3VuavMbD2dSVDPU3OzpYDZ4wL3BLIbVqZ7dyNsTx%2BLkAF2i%2F9poa%2BEJdqm%2FqF%2BOVDj5AoxNG21QU62YJeGd6OENMDomXH6ZxB9zIWY1ZF%2BNpUGGgEc9uWdLUnWg7lHD1Rf&X-Amz-Signature=17b57295f15b4ff74f2e012e2743ee657817589afc0e49c9c164b08887a6bc71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMBRSG25%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZEn2jm4encEP8wrujCQwVoX%2BBJd3sLKqW33HGfOu9QIgGK7ykd09LxYd4D2LmNkGB3p%2FyR2DwJt2Q9YbBC4P5ygqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCoF6tSo987wgQsxyrcA2WDRxVpIu5w0qEyrwZ72pPXhVmOZnqHUNV%2BLO92kCSpX%2Fiw%2FMShCFryyrYWjmzQldtfb0WLxjlDzYJ6sIVns8Qpv2LTC9G5fpA7XyklyCktueR4xTUgZNfmf9efKeXLugYvpn8NL2%2F2joX2ofL%2FZi5uuBP66LD4cuoeR30dvFPUkeq%2BdJ8LN3rHB17XRTFVXkSZZRz2NtTfBHzRGeXMI6%2BKtYixcYMUZtbQVTUXRo9vwhY66wHlnYQo%2FvK5iWAVQJS9s3cE6X4ypsEW6f%2FfQ0QXdSf%2Bg3zGJYdyBBfciPMjT%2B1m8GWp8dSiixpSGskvG%2BhzIngpBcBBT4fRDCDRNuBm2X2fzhrlNahu%2BtkpGVX5qdw0NhNNW%2FgcwmHes4cUY20NVOKmIyZJOGdyp1F5wEd0Y5KDcptfDJ3EPSV%2FH0Q99QBwkyEfwNsg%2Bmpo%2BSA4WWkgS8YSYgKjyheuc%2BjogAd%2B57uHWOYsNT30zsHgCKwoGiaUc2Gn178BB%2BCCIOIgNIM5EWOZWFy1V1Q0hu8GgeANluRu5glUmpD8rVpJtDvtYWJTdKpb%2F0Hqk8d%2F1vI89L6mfyxdGzXf2Ogfrl49y5GzJHyw0LZ6n3cRyRjFGwAR7sUXCjArOTm2t3gIMPH16bwGOqUBVgxCRD3L%2BHTfff7cPS5m1K0DFoZx3s95hMCzPmmFgpryjsF%2F7NA%2F%2FSEoHSF5%2FYg5AVKq7Jv2cmB4kTCzCrRwNWc%2FkB3VuavMbD2dSVDPU3OzpYDZ4wL3BLIbVqZ7dyNsTx%2BLkAF2i%2F9poa%2BEJdqm%2FqF%2BOVDj5AoxNG21QU62YJeGd6OENMDomXH6ZxB9zIWY1ZF%2BNpUGGgEc9uWdLUnWg7lHD1Rf&X-Amz-Signature=ce91505f7d4517bd754a7ce4037dad43d567afe43ac31baab911758ce0f33939&X-Amz-SignedHeaders=host&x-id=GetObject)
