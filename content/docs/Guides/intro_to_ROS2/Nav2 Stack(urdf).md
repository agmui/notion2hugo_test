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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVMXDF6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICvNyta23i79Ezvd%2FTl7VelOl88CZwWzP9H9QxQoDY3WAiA2LOme%2Bg0vSbqtdoatIGzbnQAR0HUUqIPog245NBmAhyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4DuG%2F9tELmoKrucDKtwDWtEMCT9Z%2Fmp4oo7wkZ2yIUl5V%2BfH2EIXIpFPJP%2Bng8RxQVcqdOQcYcCUFT4pTjECArOtsdwJ9HCsOIoSbd81aSnGuYaZgEPCWbKGutfiQqIEUBPYsdDCkkW6tw0ySc2Pw1gIAUaHRNiJpgJu3B4TosyOjMii2QLWi%2FSamxMKOh93HU%2FjbpdsQMcpIpd7%2FCIu8jXWSu4In2uwcukHFee%2FeQGTbhAtSSd5vXgACMcKZvOg2IsAC5vM29p8BkWXZ8AqCd6xJtEBcQKNA65RZQI0n5V6KEP6zgohe0i7QbEJuS9lKqShgJiw9qhQwvneALy8sqRwFDYHJcDisf%2B7yVt2z5MDA%2FXfprEHyxjWchWlit0scoyetnEp9KvMS9ElYgMC0QDcMDKZlXg7t7b2%2BBVL1rf0t0jVRiU66hkHQ2%2B4R%2FbHjwyyYK9M1nN1sLN%2BvaWsrwYa%2B9czZn3VRXtvmPpxWK2TJZNaCJ1uU266edDg4jY4kl88e8ivaQRNca1FvGOkGm3sN%2FRn%2BoLNL%2FBG9lLuT7KQve%2FKRlLZwOacCBS85UsxtM7KEG0RILcotVcfowRRmLbTQlFPlZtMb3KydmOePOSUDNayS0py2H6t5lX0NY5SXALKr5vKkg1dxZ0wjZHEvQY6pgG0A5hpvNQELjePYGHnAIHUP5G6U%2FbQXizYf3%2B6Uj0j0FQ7%2B4KyPjCORopg1LPmaQSO3eqAKKjv1w%2FDdWPYROTNd9g4NbJfFeRcCQ71xOdBL9jo1oxaHwo3v3h7tDEwqC3bXtLBGNr7B7TdCPD%2FmK48299U63GVrzM82Zh%2FheEp7oZ6dSaLj1RFaDvt%2FxpmYSAIHTGNy4T8eRpnzCSw2qDBD3V%2BGeBC&X-Amz-Signature=31b27bb9efa91fcfda14661b39dd252ed350f7ab708f3759fdeca2374d18c87b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVMXDF6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICvNyta23i79Ezvd%2FTl7VelOl88CZwWzP9H9QxQoDY3WAiA2LOme%2Bg0vSbqtdoatIGzbnQAR0HUUqIPog245NBmAhyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4DuG%2F9tELmoKrucDKtwDWtEMCT9Z%2Fmp4oo7wkZ2yIUl5V%2BfH2EIXIpFPJP%2Bng8RxQVcqdOQcYcCUFT4pTjECArOtsdwJ9HCsOIoSbd81aSnGuYaZgEPCWbKGutfiQqIEUBPYsdDCkkW6tw0ySc2Pw1gIAUaHRNiJpgJu3B4TosyOjMii2QLWi%2FSamxMKOh93HU%2FjbpdsQMcpIpd7%2FCIu8jXWSu4In2uwcukHFee%2FeQGTbhAtSSd5vXgACMcKZvOg2IsAC5vM29p8BkWXZ8AqCd6xJtEBcQKNA65RZQI0n5V6KEP6zgohe0i7QbEJuS9lKqShgJiw9qhQwvneALy8sqRwFDYHJcDisf%2B7yVt2z5MDA%2FXfprEHyxjWchWlit0scoyetnEp9KvMS9ElYgMC0QDcMDKZlXg7t7b2%2BBVL1rf0t0jVRiU66hkHQ2%2B4R%2FbHjwyyYK9M1nN1sLN%2BvaWsrwYa%2B9czZn3VRXtvmPpxWK2TJZNaCJ1uU266edDg4jY4kl88e8ivaQRNca1FvGOkGm3sN%2FRn%2BoLNL%2FBG9lLuT7KQve%2FKRlLZwOacCBS85UsxtM7KEG0RILcotVcfowRRmLbTQlFPlZtMb3KydmOePOSUDNayS0py2H6t5lX0NY5SXALKr5vKkg1dxZ0wjZHEvQY6pgG0A5hpvNQELjePYGHnAIHUP5G6U%2FbQXizYf3%2B6Uj0j0FQ7%2B4KyPjCORopg1LPmaQSO3eqAKKjv1w%2FDdWPYROTNd9g4NbJfFeRcCQ71xOdBL9jo1oxaHwo3v3h7tDEwqC3bXtLBGNr7B7TdCPD%2FmK48299U63GVrzM82Zh%2FheEp7oZ6dSaLj1RFaDvt%2FxpmYSAIHTGNy4T8eRpnzCSw2qDBD3V%2BGeBC&X-Amz-Signature=ccb54ca458dbec6f1af52723d4dbdaee8f93f79ac57a2b3cc88105cdde993a17&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVMXDF6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICvNyta23i79Ezvd%2FTl7VelOl88CZwWzP9H9QxQoDY3WAiA2LOme%2Bg0vSbqtdoatIGzbnQAR0HUUqIPog245NBmAhyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4DuG%2F9tELmoKrucDKtwDWtEMCT9Z%2Fmp4oo7wkZ2yIUl5V%2BfH2EIXIpFPJP%2Bng8RxQVcqdOQcYcCUFT4pTjECArOtsdwJ9HCsOIoSbd81aSnGuYaZgEPCWbKGutfiQqIEUBPYsdDCkkW6tw0ySc2Pw1gIAUaHRNiJpgJu3B4TosyOjMii2QLWi%2FSamxMKOh93HU%2FjbpdsQMcpIpd7%2FCIu8jXWSu4In2uwcukHFee%2FeQGTbhAtSSd5vXgACMcKZvOg2IsAC5vM29p8BkWXZ8AqCd6xJtEBcQKNA65RZQI0n5V6KEP6zgohe0i7QbEJuS9lKqShgJiw9qhQwvneALy8sqRwFDYHJcDisf%2B7yVt2z5MDA%2FXfprEHyxjWchWlit0scoyetnEp9KvMS9ElYgMC0QDcMDKZlXg7t7b2%2BBVL1rf0t0jVRiU66hkHQ2%2B4R%2FbHjwyyYK9M1nN1sLN%2BvaWsrwYa%2B9czZn3VRXtvmPpxWK2TJZNaCJ1uU266edDg4jY4kl88e8ivaQRNca1FvGOkGm3sN%2FRn%2BoLNL%2FBG9lLuT7KQve%2FKRlLZwOacCBS85UsxtM7KEG0RILcotVcfowRRmLbTQlFPlZtMb3KydmOePOSUDNayS0py2H6t5lX0NY5SXALKr5vKkg1dxZ0wjZHEvQY6pgG0A5hpvNQELjePYGHnAIHUP5G6U%2FbQXizYf3%2B6Uj0j0FQ7%2B4KyPjCORopg1LPmaQSO3eqAKKjv1w%2FDdWPYROTNd9g4NbJfFeRcCQ71xOdBL9jo1oxaHwo3v3h7tDEwqC3bXtLBGNr7B7TdCPD%2FmK48299U63GVrzM82Zh%2FheEp7oZ6dSaLj1RFaDvt%2FxpmYSAIHTGNy4T8eRpnzCSw2qDBD3V%2BGeBC&X-Amz-Signature=62a30a38df2d1497bd7cf802c97eb47a8f1609c3bb74598654004188a10a42a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVMXDF6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICvNyta23i79Ezvd%2FTl7VelOl88CZwWzP9H9QxQoDY3WAiA2LOme%2Bg0vSbqtdoatIGzbnQAR0HUUqIPog245NBmAhyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4DuG%2F9tELmoKrucDKtwDWtEMCT9Z%2Fmp4oo7wkZ2yIUl5V%2BfH2EIXIpFPJP%2Bng8RxQVcqdOQcYcCUFT4pTjECArOtsdwJ9HCsOIoSbd81aSnGuYaZgEPCWbKGutfiQqIEUBPYsdDCkkW6tw0ySc2Pw1gIAUaHRNiJpgJu3B4TosyOjMii2QLWi%2FSamxMKOh93HU%2FjbpdsQMcpIpd7%2FCIu8jXWSu4In2uwcukHFee%2FeQGTbhAtSSd5vXgACMcKZvOg2IsAC5vM29p8BkWXZ8AqCd6xJtEBcQKNA65RZQI0n5V6KEP6zgohe0i7QbEJuS9lKqShgJiw9qhQwvneALy8sqRwFDYHJcDisf%2B7yVt2z5MDA%2FXfprEHyxjWchWlit0scoyetnEp9KvMS9ElYgMC0QDcMDKZlXg7t7b2%2BBVL1rf0t0jVRiU66hkHQ2%2B4R%2FbHjwyyYK9M1nN1sLN%2BvaWsrwYa%2B9czZn3VRXtvmPpxWK2TJZNaCJ1uU266edDg4jY4kl88e8ivaQRNca1FvGOkGm3sN%2FRn%2BoLNL%2FBG9lLuT7KQve%2FKRlLZwOacCBS85UsxtM7KEG0RILcotVcfowRRmLbTQlFPlZtMb3KydmOePOSUDNayS0py2H6t5lX0NY5SXALKr5vKkg1dxZ0wjZHEvQY6pgG0A5hpvNQELjePYGHnAIHUP5G6U%2FbQXizYf3%2B6Uj0j0FQ7%2B4KyPjCORopg1LPmaQSO3eqAKKjv1w%2FDdWPYROTNd9g4NbJfFeRcCQ71xOdBL9jo1oxaHwo3v3h7tDEwqC3bXtLBGNr7B7TdCPD%2FmK48299U63GVrzM82Zh%2FheEp7oZ6dSaLj1RFaDvt%2FxpmYSAIHTGNy4T8eRpnzCSw2qDBD3V%2BGeBC&X-Amz-Signature=dab558dd26a1faa50405efcff025169a49545575ccaf87dce564dcc9b2309f20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVMXDF6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICvNyta23i79Ezvd%2FTl7VelOl88CZwWzP9H9QxQoDY3WAiA2LOme%2Bg0vSbqtdoatIGzbnQAR0HUUqIPog245NBmAhyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4DuG%2F9tELmoKrucDKtwDWtEMCT9Z%2Fmp4oo7wkZ2yIUl5V%2BfH2EIXIpFPJP%2Bng8RxQVcqdOQcYcCUFT4pTjECArOtsdwJ9HCsOIoSbd81aSnGuYaZgEPCWbKGutfiQqIEUBPYsdDCkkW6tw0ySc2Pw1gIAUaHRNiJpgJu3B4TosyOjMii2QLWi%2FSamxMKOh93HU%2FjbpdsQMcpIpd7%2FCIu8jXWSu4In2uwcukHFee%2FeQGTbhAtSSd5vXgACMcKZvOg2IsAC5vM29p8BkWXZ8AqCd6xJtEBcQKNA65RZQI0n5V6KEP6zgohe0i7QbEJuS9lKqShgJiw9qhQwvneALy8sqRwFDYHJcDisf%2B7yVt2z5MDA%2FXfprEHyxjWchWlit0scoyetnEp9KvMS9ElYgMC0QDcMDKZlXg7t7b2%2BBVL1rf0t0jVRiU66hkHQ2%2B4R%2FbHjwyyYK9M1nN1sLN%2BvaWsrwYa%2B9czZn3VRXtvmPpxWK2TJZNaCJ1uU266edDg4jY4kl88e8ivaQRNca1FvGOkGm3sN%2FRn%2BoLNL%2FBG9lLuT7KQve%2FKRlLZwOacCBS85UsxtM7KEG0RILcotVcfowRRmLbTQlFPlZtMb3KydmOePOSUDNayS0py2H6t5lX0NY5SXALKr5vKkg1dxZ0wjZHEvQY6pgG0A5hpvNQELjePYGHnAIHUP5G6U%2FbQXizYf3%2B6Uj0j0FQ7%2B4KyPjCORopg1LPmaQSO3eqAKKjv1w%2FDdWPYROTNd9g4NbJfFeRcCQ71xOdBL9jo1oxaHwo3v3h7tDEwqC3bXtLBGNr7B7TdCPD%2FmK48299U63GVrzM82Zh%2FheEp7oZ6dSaLj1RFaDvt%2FxpmYSAIHTGNy4T8eRpnzCSw2qDBD3V%2BGeBC&X-Amz-Signature=af7accbcd75ad692335e0b67b67ce57c69675749235f21f227b44fbbaf4da8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVMXDF6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCICvNyta23i79Ezvd%2FTl7VelOl88CZwWzP9H9QxQoDY3WAiA2LOme%2Bg0vSbqtdoatIGzbnQAR0HUUqIPog245NBmAhyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4DuG%2F9tELmoKrucDKtwDWtEMCT9Z%2Fmp4oo7wkZ2yIUl5V%2BfH2EIXIpFPJP%2Bng8RxQVcqdOQcYcCUFT4pTjECArOtsdwJ9HCsOIoSbd81aSnGuYaZgEPCWbKGutfiQqIEUBPYsdDCkkW6tw0ySc2Pw1gIAUaHRNiJpgJu3B4TosyOjMii2QLWi%2FSamxMKOh93HU%2FjbpdsQMcpIpd7%2FCIu8jXWSu4In2uwcukHFee%2FeQGTbhAtSSd5vXgACMcKZvOg2IsAC5vM29p8BkWXZ8AqCd6xJtEBcQKNA65RZQI0n5V6KEP6zgohe0i7QbEJuS9lKqShgJiw9qhQwvneALy8sqRwFDYHJcDisf%2B7yVt2z5MDA%2FXfprEHyxjWchWlit0scoyetnEp9KvMS9ElYgMC0QDcMDKZlXg7t7b2%2BBVL1rf0t0jVRiU66hkHQ2%2B4R%2FbHjwyyYK9M1nN1sLN%2BvaWsrwYa%2B9czZn3VRXtvmPpxWK2TJZNaCJ1uU266edDg4jY4kl88e8ivaQRNca1FvGOkGm3sN%2FRn%2BoLNL%2FBG9lLuT7KQve%2FKRlLZwOacCBS85UsxtM7KEG0RILcotVcfowRRmLbTQlFPlZtMb3KydmOePOSUDNayS0py2H6t5lX0NY5SXALKr5vKkg1dxZ0wjZHEvQY6pgG0A5hpvNQELjePYGHnAIHUP5G6U%2FbQXizYf3%2B6Uj0j0FQ7%2B4KyPjCORopg1LPmaQSO3eqAKKjv1w%2FDdWPYROTNd9g4NbJfFeRcCQ71xOdBL9jo1oxaHwo3v3h7tDEwqC3bXtLBGNr7B7TdCPD%2FmK48299U63GVrzM82Zh%2FheEp7oZ6dSaLj1RFaDvt%2FxpmYSAIHTGNy4T8eRpnzCSw2qDBD3V%2BGeBC&X-Amz-Signature=a71a711efe65043bf34d5ce7606c4aa4d40118b834608794c4b777ab75cd68f5&X-Amz-SignedHeaders=host&x-id=GetObject)
