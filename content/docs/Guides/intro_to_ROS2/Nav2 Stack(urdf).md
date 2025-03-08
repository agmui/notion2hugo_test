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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53A4HZH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCl%2BOCvd2wqMd7Lyd9ULGiW1JgrgWrri%2BhTDQNE6Mzc8AIhANuSffCxGK8%2FYTdvHaye8PTFCXtGiSigdbeMisRumvbNKv8DCFQQABoMNjM3NDIzMTgzODA1Igxtnk%2BMfqXAdVBga%2Fsq3AOv4WuReXxSWJ%2Bjyd%2B4xpsF1cH6wBdibDMCIAO7%2B7xR8ECkKHyA7DHeQQzy5nKOXluc%2F%2FQdoQpqkvc8gsdNfZo44oS9Px%2FENQSR4ZZXHFB2yKVVO3IMrlsu3Tae7mQDIbgexsvMZ8d%2B5BGXGj%2Bu3bo1%2FCiVnkpDRa8ieyyKUxddoElXN0Z5kQVaddHpxRonoMFbypv1QsmmDlfNySAfVpN03XYs%2FByMotbY2Z87jRj3CzxbiTY7fv1yBDmBy%2FMxzRdH1O3vJHsIX38U0YQiXQ8Prv7Z0eV4gLXWr7eaZufDHE6YN4XSmMLT3IQFoWPEQY0Czt3PIUfZ81ib1nEs1iheQ40naBTdvgTxW80ExYh92MF%2FAV52zfD6mBdXcDey3cC7Jj2m8CFRPT%2B5dvjAkGVP3QZdBfBY6rUeqoyTj9zBby7eCucGrlTMIfRER2WIDqNI05LQRESPtCuYNEN%2F%2Fb26A2MRfsKs1ZI5GF0cGIz8b7cwV%2FWgxAM0eMf1ok8Tp7Z17TwqeHTA6PxivSZDYi%2B8wYwBA2TEdfu15QwhI8UvqsIB2XMCz70tDRmuz2tsDg5bVl7lKyBFCppQ9%2FWBBvANRVGSNcTB0yZEQZJl%2Fm9bdvKdu6deOx%2F6kJISCTD63K6%2BBjqkAd78xvaiFCaZG1tSIzEXfaC09ucUdu270kAOKr6lf6L4nLifmDCfC7PIDRiK2PkXU9E%2BhM%2FOg3RtGhDpAOMSY8IqwjNApfDdMiHl1GQf5y8UW3VUXPEazeEjiiV3uR9XBJrhgDHxMwZ531Xm%2BD51Fz5y2RRe3gW4rIbG4LgiFU8laGochX1WyGD616nknOGS60HO%2F6CBJTaQOdcLWcDnuHnpeJ%2BQ&X-Amz-Signature=4d1baf262aa85da7642515c52a5a90dec27971ff2a19af3eda3606ec3feab146&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53A4HZH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCl%2BOCvd2wqMd7Lyd9ULGiW1JgrgWrri%2BhTDQNE6Mzc8AIhANuSffCxGK8%2FYTdvHaye8PTFCXtGiSigdbeMisRumvbNKv8DCFQQABoMNjM3NDIzMTgzODA1Igxtnk%2BMfqXAdVBga%2Fsq3AOv4WuReXxSWJ%2Bjyd%2B4xpsF1cH6wBdibDMCIAO7%2B7xR8ECkKHyA7DHeQQzy5nKOXluc%2F%2FQdoQpqkvc8gsdNfZo44oS9Px%2FENQSR4ZZXHFB2yKVVO3IMrlsu3Tae7mQDIbgexsvMZ8d%2B5BGXGj%2Bu3bo1%2FCiVnkpDRa8ieyyKUxddoElXN0Z5kQVaddHpxRonoMFbypv1QsmmDlfNySAfVpN03XYs%2FByMotbY2Z87jRj3CzxbiTY7fv1yBDmBy%2FMxzRdH1O3vJHsIX38U0YQiXQ8Prv7Z0eV4gLXWr7eaZufDHE6YN4XSmMLT3IQFoWPEQY0Czt3PIUfZ81ib1nEs1iheQ40naBTdvgTxW80ExYh92MF%2FAV52zfD6mBdXcDey3cC7Jj2m8CFRPT%2B5dvjAkGVP3QZdBfBY6rUeqoyTj9zBby7eCucGrlTMIfRER2WIDqNI05LQRESPtCuYNEN%2F%2Fb26A2MRfsKs1ZI5GF0cGIz8b7cwV%2FWgxAM0eMf1ok8Tp7Z17TwqeHTA6PxivSZDYi%2B8wYwBA2TEdfu15QwhI8UvqsIB2XMCz70tDRmuz2tsDg5bVl7lKyBFCppQ9%2FWBBvANRVGSNcTB0yZEQZJl%2Fm9bdvKdu6deOx%2F6kJISCTD63K6%2BBjqkAd78xvaiFCaZG1tSIzEXfaC09ucUdu270kAOKr6lf6L4nLifmDCfC7PIDRiK2PkXU9E%2BhM%2FOg3RtGhDpAOMSY8IqwjNApfDdMiHl1GQf5y8UW3VUXPEazeEjiiV3uR9XBJrhgDHxMwZ531Xm%2BD51Fz5y2RRe3gW4rIbG4LgiFU8laGochX1WyGD616nknOGS60HO%2F6CBJTaQOdcLWcDnuHnpeJ%2BQ&X-Amz-Signature=ecb84aef8e5ae1097cf188740cc6896eb1a02b4ba3a91e7536b56627b57ce889&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53A4HZH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCl%2BOCvd2wqMd7Lyd9ULGiW1JgrgWrri%2BhTDQNE6Mzc8AIhANuSffCxGK8%2FYTdvHaye8PTFCXtGiSigdbeMisRumvbNKv8DCFQQABoMNjM3NDIzMTgzODA1Igxtnk%2BMfqXAdVBga%2Fsq3AOv4WuReXxSWJ%2Bjyd%2B4xpsF1cH6wBdibDMCIAO7%2B7xR8ECkKHyA7DHeQQzy5nKOXluc%2F%2FQdoQpqkvc8gsdNfZo44oS9Px%2FENQSR4ZZXHFB2yKVVO3IMrlsu3Tae7mQDIbgexsvMZ8d%2B5BGXGj%2Bu3bo1%2FCiVnkpDRa8ieyyKUxddoElXN0Z5kQVaddHpxRonoMFbypv1QsmmDlfNySAfVpN03XYs%2FByMotbY2Z87jRj3CzxbiTY7fv1yBDmBy%2FMxzRdH1O3vJHsIX38U0YQiXQ8Prv7Z0eV4gLXWr7eaZufDHE6YN4XSmMLT3IQFoWPEQY0Czt3PIUfZ81ib1nEs1iheQ40naBTdvgTxW80ExYh92MF%2FAV52zfD6mBdXcDey3cC7Jj2m8CFRPT%2B5dvjAkGVP3QZdBfBY6rUeqoyTj9zBby7eCucGrlTMIfRER2WIDqNI05LQRESPtCuYNEN%2F%2Fb26A2MRfsKs1ZI5GF0cGIz8b7cwV%2FWgxAM0eMf1ok8Tp7Z17TwqeHTA6PxivSZDYi%2B8wYwBA2TEdfu15QwhI8UvqsIB2XMCz70tDRmuz2tsDg5bVl7lKyBFCppQ9%2FWBBvANRVGSNcTB0yZEQZJl%2Fm9bdvKdu6deOx%2F6kJISCTD63K6%2BBjqkAd78xvaiFCaZG1tSIzEXfaC09ucUdu270kAOKr6lf6L4nLifmDCfC7PIDRiK2PkXU9E%2BhM%2FOg3RtGhDpAOMSY8IqwjNApfDdMiHl1GQf5y8UW3VUXPEazeEjiiV3uR9XBJrhgDHxMwZ531Xm%2BD51Fz5y2RRe3gW4rIbG4LgiFU8laGochX1WyGD616nknOGS60HO%2F6CBJTaQOdcLWcDnuHnpeJ%2BQ&X-Amz-Signature=66f83e5e507d5a776e61674d2f6158f58b7f8e164daa7efca85e70f0c70ade21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53A4HZH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCl%2BOCvd2wqMd7Lyd9ULGiW1JgrgWrri%2BhTDQNE6Mzc8AIhANuSffCxGK8%2FYTdvHaye8PTFCXtGiSigdbeMisRumvbNKv8DCFQQABoMNjM3NDIzMTgzODA1Igxtnk%2BMfqXAdVBga%2Fsq3AOv4WuReXxSWJ%2Bjyd%2B4xpsF1cH6wBdibDMCIAO7%2B7xR8ECkKHyA7DHeQQzy5nKOXluc%2F%2FQdoQpqkvc8gsdNfZo44oS9Px%2FENQSR4ZZXHFB2yKVVO3IMrlsu3Tae7mQDIbgexsvMZ8d%2B5BGXGj%2Bu3bo1%2FCiVnkpDRa8ieyyKUxddoElXN0Z5kQVaddHpxRonoMFbypv1QsmmDlfNySAfVpN03XYs%2FByMotbY2Z87jRj3CzxbiTY7fv1yBDmBy%2FMxzRdH1O3vJHsIX38U0YQiXQ8Prv7Z0eV4gLXWr7eaZufDHE6YN4XSmMLT3IQFoWPEQY0Czt3PIUfZ81ib1nEs1iheQ40naBTdvgTxW80ExYh92MF%2FAV52zfD6mBdXcDey3cC7Jj2m8CFRPT%2B5dvjAkGVP3QZdBfBY6rUeqoyTj9zBby7eCucGrlTMIfRER2WIDqNI05LQRESPtCuYNEN%2F%2Fb26A2MRfsKs1ZI5GF0cGIz8b7cwV%2FWgxAM0eMf1ok8Tp7Z17TwqeHTA6PxivSZDYi%2B8wYwBA2TEdfu15QwhI8UvqsIB2XMCz70tDRmuz2tsDg5bVl7lKyBFCppQ9%2FWBBvANRVGSNcTB0yZEQZJl%2Fm9bdvKdu6deOx%2F6kJISCTD63K6%2BBjqkAd78xvaiFCaZG1tSIzEXfaC09ucUdu270kAOKr6lf6L4nLifmDCfC7PIDRiK2PkXU9E%2BhM%2FOg3RtGhDpAOMSY8IqwjNApfDdMiHl1GQf5y8UW3VUXPEazeEjiiV3uR9XBJrhgDHxMwZ531Xm%2BD51Fz5y2RRe3gW4rIbG4LgiFU8laGochX1WyGD616nknOGS60HO%2F6CBJTaQOdcLWcDnuHnpeJ%2BQ&X-Amz-Signature=31cfa32a6315b09d46338dfbb338939b0ce77d9103ec19b8f5699bbc45a00ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53A4HZH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCl%2BOCvd2wqMd7Lyd9ULGiW1JgrgWrri%2BhTDQNE6Mzc8AIhANuSffCxGK8%2FYTdvHaye8PTFCXtGiSigdbeMisRumvbNKv8DCFQQABoMNjM3NDIzMTgzODA1Igxtnk%2BMfqXAdVBga%2Fsq3AOv4WuReXxSWJ%2Bjyd%2B4xpsF1cH6wBdibDMCIAO7%2B7xR8ECkKHyA7DHeQQzy5nKOXluc%2F%2FQdoQpqkvc8gsdNfZo44oS9Px%2FENQSR4ZZXHFB2yKVVO3IMrlsu3Tae7mQDIbgexsvMZ8d%2B5BGXGj%2Bu3bo1%2FCiVnkpDRa8ieyyKUxddoElXN0Z5kQVaddHpxRonoMFbypv1QsmmDlfNySAfVpN03XYs%2FByMotbY2Z87jRj3CzxbiTY7fv1yBDmBy%2FMxzRdH1O3vJHsIX38U0YQiXQ8Prv7Z0eV4gLXWr7eaZufDHE6YN4XSmMLT3IQFoWPEQY0Czt3PIUfZ81ib1nEs1iheQ40naBTdvgTxW80ExYh92MF%2FAV52zfD6mBdXcDey3cC7Jj2m8CFRPT%2B5dvjAkGVP3QZdBfBY6rUeqoyTj9zBby7eCucGrlTMIfRER2WIDqNI05LQRESPtCuYNEN%2F%2Fb26A2MRfsKs1ZI5GF0cGIz8b7cwV%2FWgxAM0eMf1ok8Tp7Z17TwqeHTA6PxivSZDYi%2B8wYwBA2TEdfu15QwhI8UvqsIB2XMCz70tDRmuz2tsDg5bVl7lKyBFCppQ9%2FWBBvANRVGSNcTB0yZEQZJl%2Fm9bdvKdu6deOx%2F6kJISCTD63K6%2BBjqkAd78xvaiFCaZG1tSIzEXfaC09ucUdu270kAOKr6lf6L4nLifmDCfC7PIDRiK2PkXU9E%2BhM%2FOg3RtGhDpAOMSY8IqwjNApfDdMiHl1GQf5y8UW3VUXPEazeEjiiV3uR9XBJrhgDHxMwZ531Xm%2BD51Fz5y2RRe3gW4rIbG4LgiFU8laGochX1WyGD616nknOGS60HO%2F6CBJTaQOdcLWcDnuHnpeJ%2BQ&X-Amz-Signature=df2603f3abb697c20647850c3dd2940bef132c926835a9bba056466120b5ab1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W53A4HZH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCl%2BOCvd2wqMd7Lyd9ULGiW1JgrgWrri%2BhTDQNE6Mzc8AIhANuSffCxGK8%2FYTdvHaye8PTFCXtGiSigdbeMisRumvbNKv8DCFQQABoMNjM3NDIzMTgzODA1Igxtnk%2BMfqXAdVBga%2Fsq3AOv4WuReXxSWJ%2Bjyd%2B4xpsF1cH6wBdibDMCIAO7%2B7xR8ECkKHyA7DHeQQzy5nKOXluc%2F%2FQdoQpqkvc8gsdNfZo44oS9Px%2FENQSR4ZZXHFB2yKVVO3IMrlsu3Tae7mQDIbgexsvMZ8d%2B5BGXGj%2Bu3bo1%2FCiVnkpDRa8ieyyKUxddoElXN0Z5kQVaddHpxRonoMFbypv1QsmmDlfNySAfVpN03XYs%2FByMotbY2Z87jRj3CzxbiTY7fv1yBDmBy%2FMxzRdH1O3vJHsIX38U0YQiXQ8Prv7Z0eV4gLXWr7eaZufDHE6YN4XSmMLT3IQFoWPEQY0Czt3PIUfZ81ib1nEs1iheQ40naBTdvgTxW80ExYh92MF%2FAV52zfD6mBdXcDey3cC7Jj2m8CFRPT%2B5dvjAkGVP3QZdBfBY6rUeqoyTj9zBby7eCucGrlTMIfRER2WIDqNI05LQRESPtCuYNEN%2F%2Fb26A2MRfsKs1ZI5GF0cGIz8b7cwV%2FWgxAM0eMf1ok8Tp7Z17TwqeHTA6PxivSZDYi%2B8wYwBA2TEdfu15QwhI8UvqsIB2XMCz70tDRmuz2tsDg5bVl7lKyBFCppQ9%2FWBBvANRVGSNcTB0yZEQZJl%2Fm9bdvKdu6deOx%2F6kJISCTD63K6%2BBjqkAd78xvaiFCaZG1tSIzEXfaC09ucUdu270kAOKr6lf6L4nLifmDCfC7PIDRiK2PkXU9E%2BhM%2FOg3RtGhDpAOMSY8IqwjNApfDdMiHl1GQf5y8UW3VUXPEazeEjiiV3uR9XBJrhgDHxMwZ531Xm%2BD51Fz5y2RRe3gW4rIbG4LgiFU8laGochX1WyGD616nknOGS60HO%2F6CBJTaQOdcLWcDnuHnpeJ%2BQ&X-Amz-Signature=25e80b60170f980ab1a6dfcc23598c5888a1c7a8a732dee560889d51ac31b303&X-Amz-SignedHeaders=host&x-id=GetObject)
