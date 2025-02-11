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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAEENTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHS2cNRNcC4cfkVqVsxXi9FbsUyUF1Lrb5IFitKV7ZEAiEA9hoO6TIYKpgmhzvV%2Bj83VucFEIYiKjy0X4B1JXRmsyQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdLlc2kYdA3Y6rtcircAzSMwja3B8xLvmGpj8729IOa6gLuzMSky8gDR0vzZU58pWQpycwYasyUXDD2NeUQXiO3itM%2FS1aqd3KbZByudjstY0DuDdk6ydAfHRvGdJBVuQA4CPX6BWRMr9Pb%2BQIps56tIZ%2BYskmHtReMPbj4U0768SrOV7N6OS6HByu%2BHVCIqU7iymCNmQ0CcKxkabzLBAUicrlldc21%2B84LZdhRt7Ag6q%2Br3jY6LHxRkz%2Bdfh0dN5BGafn2qRc4hoYex8VYknIuIfrPlA2aOOxIYCbzWnptKVVab2X9qTH8Mg3oSlFJq0hSMp6V%2BIJCrO%2FLtf%2F03uNf0SDc%2Bt0u3yiezdkUVmZA9RoNM%2FnDSsj%2FWd4kPDqcIQ1m1lAGHSKRfnE8husVkFrNGXzuAze0%2BffkluYi6l8flrSUQNP%2FF0pxkCW47C%2BXHWW8QcBnUZ1sHSen2Hj9GWX5A%2FPck9Ionf4bR7W44CMZcdnBysfmkJ%2FXOHCqDtdnUPY6qzhKGNLkTd7RpfN4LxtOMTQT5ZihDo1Bj3JFbhrvJOEtCyY%2Bmo7xZWs9B10Y5Ds3xv4k0ILSXEARJEzTmFElhr%2FQUazKb4jwCsCfmNdkMDLmC8%2BucIEwxPhsYI%2FFZQRrju74AnBtOJXFMJTdqr0GOqUBucLW4An6AmK%2FQIsVegZCpHinGmyVRR7RlL8fh5NQLeiXYv5%2FZv9XHnS3ox2GnDLgJ0SRlgTot5W1hbrqPANyy6rErHQYfe%2FRxkyXjq4Ex%2Bv6wpOPJe77GOSJTbdWBGUBE%2BNyz0k4k8IAev%2BFCmfPiuaY3G%2F7vPkQ8%2Fvx%2Bke1c0myz%2Bdc%2B%2B9zZp4aiNOT0IzK0KG03kugS43iBvSfUrFg0RLro5I3&X-Amz-Signature=406a09c18a93f5d9b174bfd4a6d82d4c0d8684a617972744ff2ee9607d858f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAEENTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHS2cNRNcC4cfkVqVsxXi9FbsUyUF1Lrb5IFitKV7ZEAiEA9hoO6TIYKpgmhzvV%2Bj83VucFEIYiKjy0X4B1JXRmsyQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdLlc2kYdA3Y6rtcircAzSMwja3B8xLvmGpj8729IOa6gLuzMSky8gDR0vzZU58pWQpycwYasyUXDD2NeUQXiO3itM%2FS1aqd3KbZByudjstY0DuDdk6ydAfHRvGdJBVuQA4CPX6BWRMr9Pb%2BQIps56tIZ%2BYskmHtReMPbj4U0768SrOV7N6OS6HByu%2BHVCIqU7iymCNmQ0CcKxkabzLBAUicrlldc21%2B84LZdhRt7Ag6q%2Br3jY6LHxRkz%2Bdfh0dN5BGafn2qRc4hoYex8VYknIuIfrPlA2aOOxIYCbzWnptKVVab2X9qTH8Mg3oSlFJq0hSMp6V%2BIJCrO%2FLtf%2F03uNf0SDc%2Bt0u3yiezdkUVmZA9RoNM%2FnDSsj%2FWd4kPDqcIQ1m1lAGHSKRfnE8husVkFrNGXzuAze0%2BffkluYi6l8flrSUQNP%2FF0pxkCW47C%2BXHWW8QcBnUZ1sHSen2Hj9GWX5A%2FPck9Ionf4bR7W44CMZcdnBysfmkJ%2FXOHCqDtdnUPY6qzhKGNLkTd7RpfN4LxtOMTQT5ZihDo1Bj3JFbhrvJOEtCyY%2Bmo7xZWs9B10Y5Ds3xv4k0ILSXEARJEzTmFElhr%2FQUazKb4jwCsCfmNdkMDLmC8%2BucIEwxPhsYI%2FFZQRrju74AnBtOJXFMJTdqr0GOqUBucLW4An6AmK%2FQIsVegZCpHinGmyVRR7RlL8fh5NQLeiXYv5%2FZv9XHnS3ox2GnDLgJ0SRlgTot5W1hbrqPANyy6rErHQYfe%2FRxkyXjq4Ex%2Bv6wpOPJe77GOSJTbdWBGUBE%2BNyz0k4k8IAev%2BFCmfPiuaY3G%2F7vPkQ8%2Fvx%2Bke1c0myz%2Bdc%2B%2B9zZp4aiNOT0IzK0KG03kugS43iBvSfUrFg0RLro5I3&X-Amz-Signature=6f372db2716edac902f73596da23500dfb495a706a568a759ae599ec1dcd433d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAEENTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHS2cNRNcC4cfkVqVsxXi9FbsUyUF1Lrb5IFitKV7ZEAiEA9hoO6TIYKpgmhzvV%2Bj83VucFEIYiKjy0X4B1JXRmsyQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdLlc2kYdA3Y6rtcircAzSMwja3B8xLvmGpj8729IOa6gLuzMSky8gDR0vzZU58pWQpycwYasyUXDD2NeUQXiO3itM%2FS1aqd3KbZByudjstY0DuDdk6ydAfHRvGdJBVuQA4CPX6BWRMr9Pb%2BQIps56tIZ%2BYskmHtReMPbj4U0768SrOV7N6OS6HByu%2BHVCIqU7iymCNmQ0CcKxkabzLBAUicrlldc21%2B84LZdhRt7Ag6q%2Br3jY6LHxRkz%2Bdfh0dN5BGafn2qRc4hoYex8VYknIuIfrPlA2aOOxIYCbzWnptKVVab2X9qTH8Mg3oSlFJq0hSMp6V%2BIJCrO%2FLtf%2F03uNf0SDc%2Bt0u3yiezdkUVmZA9RoNM%2FnDSsj%2FWd4kPDqcIQ1m1lAGHSKRfnE8husVkFrNGXzuAze0%2BffkluYi6l8flrSUQNP%2FF0pxkCW47C%2BXHWW8QcBnUZ1sHSen2Hj9GWX5A%2FPck9Ionf4bR7W44CMZcdnBysfmkJ%2FXOHCqDtdnUPY6qzhKGNLkTd7RpfN4LxtOMTQT5ZihDo1Bj3JFbhrvJOEtCyY%2Bmo7xZWs9B10Y5Ds3xv4k0ILSXEARJEzTmFElhr%2FQUazKb4jwCsCfmNdkMDLmC8%2BucIEwxPhsYI%2FFZQRrju74AnBtOJXFMJTdqr0GOqUBucLW4An6AmK%2FQIsVegZCpHinGmyVRR7RlL8fh5NQLeiXYv5%2FZv9XHnS3ox2GnDLgJ0SRlgTot5W1hbrqPANyy6rErHQYfe%2FRxkyXjq4Ex%2Bv6wpOPJe77GOSJTbdWBGUBE%2BNyz0k4k8IAev%2BFCmfPiuaY3G%2F7vPkQ8%2Fvx%2Bke1c0myz%2Bdc%2B%2B9zZp4aiNOT0IzK0KG03kugS43iBvSfUrFg0RLro5I3&X-Amz-Signature=618ad2e8be47969d96c75baa943c0cde5a7fc47867cac8f861d620c7b1d4f66c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAEENTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHS2cNRNcC4cfkVqVsxXi9FbsUyUF1Lrb5IFitKV7ZEAiEA9hoO6TIYKpgmhzvV%2Bj83VucFEIYiKjy0X4B1JXRmsyQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdLlc2kYdA3Y6rtcircAzSMwja3B8xLvmGpj8729IOa6gLuzMSky8gDR0vzZU58pWQpycwYasyUXDD2NeUQXiO3itM%2FS1aqd3KbZByudjstY0DuDdk6ydAfHRvGdJBVuQA4CPX6BWRMr9Pb%2BQIps56tIZ%2BYskmHtReMPbj4U0768SrOV7N6OS6HByu%2BHVCIqU7iymCNmQ0CcKxkabzLBAUicrlldc21%2B84LZdhRt7Ag6q%2Br3jY6LHxRkz%2Bdfh0dN5BGafn2qRc4hoYex8VYknIuIfrPlA2aOOxIYCbzWnptKVVab2X9qTH8Mg3oSlFJq0hSMp6V%2BIJCrO%2FLtf%2F03uNf0SDc%2Bt0u3yiezdkUVmZA9RoNM%2FnDSsj%2FWd4kPDqcIQ1m1lAGHSKRfnE8husVkFrNGXzuAze0%2BffkluYi6l8flrSUQNP%2FF0pxkCW47C%2BXHWW8QcBnUZ1sHSen2Hj9GWX5A%2FPck9Ionf4bR7W44CMZcdnBysfmkJ%2FXOHCqDtdnUPY6qzhKGNLkTd7RpfN4LxtOMTQT5ZihDo1Bj3JFbhrvJOEtCyY%2Bmo7xZWs9B10Y5Ds3xv4k0ILSXEARJEzTmFElhr%2FQUazKb4jwCsCfmNdkMDLmC8%2BucIEwxPhsYI%2FFZQRrju74AnBtOJXFMJTdqr0GOqUBucLW4An6AmK%2FQIsVegZCpHinGmyVRR7RlL8fh5NQLeiXYv5%2FZv9XHnS3ox2GnDLgJ0SRlgTot5W1hbrqPANyy6rErHQYfe%2FRxkyXjq4Ex%2Bv6wpOPJe77GOSJTbdWBGUBE%2BNyz0k4k8IAev%2BFCmfPiuaY3G%2F7vPkQ8%2Fvx%2Bke1c0myz%2Bdc%2B%2B9zZp4aiNOT0IzK0KG03kugS43iBvSfUrFg0RLro5I3&X-Amz-Signature=a2c7338f8a22e6ddf75508ea436a1220d70b1cadc710ad490f924d1452a4113c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAEENTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHS2cNRNcC4cfkVqVsxXi9FbsUyUF1Lrb5IFitKV7ZEAiEA9hoO6TIYKpgmhzvV%2Bj83VucFEIYiKjy0X4B1JXRmsyQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdLlc2kYdA3Y6rtcircAzSMwja3B8xLvmGpj8729IOa6gLuzMSky8gDR0vzZU58pWQpycwYasyUXDD2NeUQXiO3itM%2FS1aqd3KbZByudjstY0DuDdk6ydAfHRvGdJBVuQA4CPX6BWRMr9Pb%2BQIps56tIZ%2BYskmHtReMPbj4U0768SrOV7N6OS6HByu%2BHVCIqU7iymCNmQ0CcKxkabzLBAUicrlldc21%2B84LZdhRt7Ag6q%2Br3jY6LHxRkz%2Bdfh0dN5BGafn2qRc4hoYex8VYknIuIfrPlA2aOOxIYCbzWnptKVVab2X9qTH8Mg3oSlFJq0hSMp6V%2BIJCrO%2FLtf%2F03uNf0SDc%2Bt0u3yiezdkUVmZA9RoNM%2FnDSsj%2FWd4kPDqcIQ1m1lAGHSKRfnE8husVkFrNGXzuAze0%2BffkluYi6l8flrSUQNP%2FF0pxkCW47C%2BXHWW8QcBnUZ1sHSen2Hj9GWX5A%2FPck9Ionf4bR7W44CMZcdnBysfmkJ%2FXOHCqDtdnUPY6qzhKGNLkTd7RpfN4LxtOMTQT5ZihDo1Bj3JFbhrvJOEtCyY%2Bmo7xZWs9B10Y5Ds3xv4k0ILSXEARJEzTmFElhr%2FQUazKb4jwCsCfmNdkMDLmC8%2BucIEwxPhsYI%2FFZQRrju74AnBtOJXFMJTdqr0GOqUBucLW4An6AmK%2FQIsVegZCpHinGmyVRR7RlL8fh5NQLeiXYv5%2FZv9XHnS3ox2GnDLgJ0SRlgTot5W1hbrqPANyy6rErHQYfe%2FRxkyXjq4Ex%2Bv6wpOPJe77GOSJTbdWBGUBE%2BNyz0k4k8IAev%2BFCmfPiuaY3G%2F7vPkQ8%2Fvx%2Bke1c0myz%2Bdc%2B%2B9zZp4aiNOT0IzK0KG03kugS43iBvSfUrFg0RLro5I3&X-Amz-Signature=d1cdd1135b3045224a97bfd6e0f719061bfcadf1d53be76cce07f7203f26a705&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAEENTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHS2cNRNcC4cfkVqVsxXi9FbsUyUF1Lrb5IFitKV7ZEAiEA9hoO6TIYKpgmhzvV%2Bj83VucFEIYiKjy0X4B1JXRmsyQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdLlc2kYdA3Y6rtcircAzSMwja3B8xLvmGpj8729IOa6gLuzMSky8gDR0vzZU58pWQpycwYasyUXDD2NeUQXiO3itM%2FS1aqd3KbZByudjstY0DuDdk6ydAfHRvGdJBVuQA4CPX6BWRMr9Pb%2BQIps56tIZ%2BYskmHtReMPbj4U0768SrOV7N6OS6HByu%2BHVCIqU7iymCNmQ0CcKxkabzLBAUicrlldc21%2B84LZdhRt7Ag6q%2Br3jY6LHxRkz%2Bdfh0dN5BGafn2qRc4hoYex8VYknIuIfrPlA2aOOxIYCbzWnptKVVab2X9qTH8Mg3oSlFJq0hSMp6V%2BIJCrO%2FLtf%2F03uNf0SDc%2Bt0u3yiezdkUVmZA9RoNM%2FnDSsj%2FWd4kPDqcIQ1m1lAGHSKRfnE8husVkFrNGXzuAze0%2BffkluYi6l8flrSUQNP%2FF0pxkCW47C%2BXHWW8QcBnUZ1sHSen2Hj9GWX5A%2FPck9Ionf4bR7W44CMZcdnBysfmkJ%2FXOHCqDtdnUPY6qzhKGNLkTd7RpfN4LxtOMTQT5ZihDo1Bj3JFbhrvJOEtCyY%2Bmo7xZWs9B10Y5Ds3xv4k0ILSXEARJEzTmFElhr%2FQUazKb4jwCsCfmNdkMDLmC8%2BucIEwxPhsYI%2FFZQRrju74AnBtOJXFMJTdqr0GOqUBucLW4An6AmK%2FQIsVegZCpHinGmyVRR7RlL8fh5NQLeiXYv5%2FZv9XHnS3ox2GnDLgJ0SRlgTot5W1hbrqPANyy6rErHQYfe%2FRxkyXjq4Ex%2Bv6wpOPJe77GOSJTbdWBGUBE%2BNyz0k4k8IAev%2BFCmfPiuaY3G%2F7vPkQ8%2Fvx%2Bke1c0myz%2Bdc%2B%2B9zZp4aiNOT0IzK0KG03kugS43iBvSfUrFg0RLro5I3&X-Amz-Signature=612b53b0f08ebef560c93bbd1af5ba0a5e1ddeb87fb0ba3b64a081c7f1aab3d4&X-Amz-SignedHeaders=host&x-id=GetObject)
