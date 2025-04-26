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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5D6ICV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpTmd9jWBWHa31mg7AZ9ra9tWj0T7g4zn02wovjUNMgIhAJUAfdu%2FbBbneCyF3RdehJQFGxirDxFiUeJI%2BunO%2F8X%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgweVnP7M%2FASA7TMphsq3AN7kVmUOx05dlXVwK1TJDfI7WVD4gs5WqYoe1JBi8OIEUbGNmCGj4VL2OANBduXnM28pwLEhPw9x6Zf4IiVbv%2F7JLcm%2FfS8B5miqDOJURBR79zDxK%2FbJowaQgCdD08Pr2zR3ccaQAXSakDicx%2FwiLTPju%2FNN7cgQdfX1kB9FoI%2FH57%2B74%2FCgWLc8zHpu8m76bs%2BoHbtADAqPEDU4kkdCi%2BpVDNHskKP06lTum4dNNPJb7LHCxP8Z48sLdPIEuTAu2uVpC0B%2FNy%2BUTGUmpZ%2Fsy%2Bg9tjfMZOVs8Zo0eei1GasCRNobKEKZowr4rGYakqYKk7Hrv8oVY%2F4t5OoFa8gIBBsiRS9IEvTKacfWJ%2B%2F8nhzua7EIJIGLeZeOtuNb9sCgYdFCjqKv34DA92oQ0pJwrZzUdEU%2BoSH1q1GPMEEsnQsp%2FOiJH95Bsu91NLsLiZ7VNyU6xAqJGXTmMpYiPV9VplMPYGFBWXVAefqfREhpmBFRGi2V16w%2Fp%2BDBBD0WOMrXjVBc5TYq95mrJypmAbXC%2FYPoCo0XwLIDMwlQXUlvyMYo58cHtdyO686V7NCp4BLQ%2BGqGkJqnd3mvHYSE6p9LgKt8rdvz8aP%2Bg8TLwqbQlHZ1pqcIi%2Bf2Gne6rv8mDDzobPABjqkAUcFlWCg1EbgAfEfK7RUoLc4f%2BFw9UAsvjmn1v0o6uaioSvjJIn5A0gFzpEPXeCoK94RnMBf%2B8KsGDi7Vpy9EDiG5E9LNps8AWkjqZ1jOa9UXcCYnhIEiLWdkh1SoowlnlsPsPCoZPFnPaNa%2FiyhzXOk2xF5h%2BAQs3lIkhtJPXoMPOSwUNqwYRiPDcFvOTk1mWxDSdCcPMT3vpDkdlU%2B8OKTs4JU&X-Amz-Signature=6fa348346fa5ed24664969377abf46ab9a4b0c7a3f3abc9a328c54094f979d23&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5D6ICV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpTmd9jWBWHa31mg7AZ9ra9tWj0T7g4zn02wovjUNMgIhAJUAfdu%2FbBbneCyF3RdehJQFGxirDxFiUeJI%2BunO%2F8X%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgweVnP7M%2FASA7TMphsq3AN7kVmUOx05dlXVwK1TJDfI7WVD4gs5WqYoe1JBi8OIEUbGNmCGj4VL2OANBduXnM28pwLEhPw9x6Zf4IiVbv%2F7JLcm%2FfS8B5miqDOJURBR79zDxK%2FbJowaQgCdD08Pr2zR3ccaQAXSakDicx%2FwiLTPju%2FNN7cgQdfX1kB9FoI%2FH57%2B74%2FCgWLc8zHpu8m76bs%2BoHbtADAqPEDU4kkdCi%2BpVDNHskKP06lTum4dNNPJb7LHCxP8Z48sLdPIEuTAu2uVpC0B%2FNy%2BUTGUmpZ%2Fsy%2Bg9tjfMZOVs8Zo0eei1GasCRNobKEKZowr4rGYakqYKk7Hrv8oVY%2F4t5OoFa8gIBBsiRS9IEvTKacfWJ%2B%2F8nhzua7EIJIGLeZeOtuNb9sCgYdFCjqKv34DA92oQ0pJwrZzUdEU%2BoSH1q1GPMEEsnQsp%2FOiJH95Bsu91NLsLiZ7VNyU6xAqJGXTmMpYiPV9VplMPYGFBWXVAefqfREhpmBFRGi2V16w%2Fp%2BDBBD0WOMrXjVBc5TYq95mrJypmAbXC%2FYPoCo0XwLIDMwlQXUlvyMYo58cHtdyO686V7NCp4BLQ%2BGqGkJqnd3mvHYSE6p9LgKt8rdvz8aP%2Bg8TLwqbQlHZ1pqcIi%2Bf2Gne6rv8mDDzobPABjqkAUcFlWCg1EbgAfEfK7RUoLc4f%2BFw9UAsvjmn1v0o6uaioSvjJIn5A0gFzpEPXeCoK94RnMBf%2B8KsGDi7Vpy9EDiG5E9LNps8AWkjqZ1jOa9UXcCYnhIEiLWdkh1SoowlnlsPsPCoZPFnPaNa%2FiyhzXOk2xF5h%2BAQs3lIkhtJPXoMPOSwUNqwYRiPDcFvOTk1mWxDSdCcPMT3vpDkdlU%2B8OKTs4JU&X-Amz-Signature=b1da37bc5bd1426f0eecab27692432a280d38417db424e6df97004522091d933&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5D6ICV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpTmd9jWBWHa31mg7AZ9ra9tWj0T7g4zn02wovjUNMgIhAJUAfdu%2FbBbneCyF3RdehJQFGxirDxFiUeJI%2BunO%2F8X%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgweVnP7M%2FASA7TMphsq3AN7kVmUOx05dlXVwK1TJDfI7WVD4gs5WqYoe1JBi8OIEUbGNmCGj4VL2OANBduXnM28pwLEhPw9x6Zf4IiVbv%2F7JLcm%2FfS8B5miqDOJURBR79zDxK%2FbJowaQgCdD08Pr2zR3ccaQAXSakDicx%2FwiLTPju%2FNN7cgQdfX1kB9FoI%2FH57%2B74%2FCgWLc8zHpu8m76bs%2BoHbtADAqPEDU4kkdCi%2BpVDNHskKP06lTum4dNNPJb7LHCxP8Z48sLdPIEuTAu2uVpC0B%2FNy%2BUTGUmpZ%2Fsy%2Bg9tjfMZOVs8Zo0eei1GasCRNobKEKZowr4rGYakqYKk7Hrv8oVY%2F4t5OoFa8gIBBsiRS9IEvTKacfWJ%2B%2F8nhzua7EIJIGLeZeOtuNb9sCgYdFCjqKv34DA92oQ0pJwrZzUdEU%2BoSH1q1GPMEEsnQsp%2FOiJH95Bsu91NLsLiZ7VNyU6xAqJGXTmMpYiPV9VplMPYGFBWXVAefqfREhpmBFRGi2V16w%2Fp%2BDBBD0WOMrXjVBc5TYq95mrJypmAbXC%2FYPoCo0XwLIDMwlQXUlvyMYo58cHtdyO686V7NCp4BLQ%2BGqGkJqnd3mvHYSE6p9LgKt8rdvz8aP%2Bg8TLwqbQlHZ1pqcIi%2Bf2Gne6rv8mDDzobPABjqkAUcFlWCg1EbgAfEfK7RUoLc4f%2BFw9UAsvjmn1v0o6uaioSvjJIn5A0gFzpEPXeCoK94RnMBf%2B8KsGDi7Vpy9EDiG5E9LNps8AWkjqZ1jOa9UXcCYnhIEiLWdkh1SoowlnlsPsPCoZPFnPaNa%2FiyhzXOk2xF5h%2BAQs3lIkhtJPXoMPOSwUNqwYRiPDcFvOTk1mWxDSdCcPMT3vpDkdlU%2B8OKTs4JU&X-Amz-Signature=39d7fdfdd5c8f7a0fce3ce58fb3fa8329a7134a338489be879ca533fc39bf061&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5D6ICV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpTmd9jWBWHa31mg7AZ9ra9tWj0T7g4zn02wovjUNMgIhAJUAfdu%2FbBbneCyF3RdehJQFGxirDxFiUeJI%2BunO%2F8X%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgweVnP7M%2FASA7TMphsq3AN7kVmUOx05dlXVwK1TJDfI7WVD4gs5WqYoe1JBi8OIEUbGNmCGj4VL2OANBduXnM28pwLEhPw9x6Zf4IiVbv%2F7JLcm%2FfS8B5miqDOJURBR79zDxK%2FbJowaQgCdD08Pr2zR3ccaQAXSakDicx%2FwiLTPju%2FNN7cgQdfX1kB9FoI%2FH57%2B74%2FCgWLc8zHpu8m76bs%2BoHbtADAqPEDU4kkdCi%2BpVDNHskKP06lTum4dNNPJb7LHCxP8Z48sLdPIEuTAu2uVpC0B%2FNy%2BUTGUmpZ%2Fsy%2Bg9tjfMZOVs8Zo0eei1GasCRNobKEKZowr4rGYakqYKk7Hrv8oVY%2F4t5OoFa8gIBBsiRS9IEvTKacfWJ%2B%2F8nhzua7EIJIGLeZeOtuNb9sCgYdFCjqKv34DA92oQ0pJwrZzUdEU%2BoSH1q1GPMEEsnQsp%2FOiJH95Bsu91NLsLiZ7VNyU6xAqJGXTmMpYiPV9VplMPYGFBWXVAefqfREhpmBFRGi2V16w%2Fp%2BDBBD0WOMrXjVBc5TYq95mrJypmAbXC%2FYPoCo0XwLIDMwlQXUlvyMYo58cHtdyO686V7NCp4BLQ%2BGqGkJqnd3mvHYSE6p9LgKt8rdvz8aP%2Bg8TLwqbQlHZ1pqcIi%2Bf2Gne6rv8mDDzobPABjqkAUcFlWCg1EbgAfEfK7RUoLc4f%2BFw9UAsvjmn1v0o6uaioSvjJIn5A0gFzpEPXeCoK94RnMBf%2B8KsGDi7Vpy9EDiG5E9LNps8AWkjqZ1jOa9UXcCYnhIEiLWdkh1SoowlnlsPsPCoZPFnPaNa%2FiyhzXOk2xF5h%2BAQs3lIkhtJPXoMPOSwUNqwYRiPDcFvOTk1mWxDSdCcPMT3vpDkdlU%2B8OKTs4JU&X-Amz-Signature=77cf81b7b459ee1c5a07805142b05ac37ae8c63a7e605f678512005feff85f30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5D6ICV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpTmd9jWBWHa31mg7AZ9ra9tWj0T7g4zn02wovjUNMgIhAJUAfdu%2FbBbneCyF3RdehJQFGxirDxFiUeJI%2BunO%2F8X%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgweVnP7M%2FASA7TMphsq3AN7kVmUOx05dlXVwK1TJDfI7WVD4gs5WqYoe1JBi8OIEUbGNmCGj4VL2OANBduXnM28pwLEhPw9x6Zf4IiVbv%2F7JLcm%2FfS8B5miqDOJURBR79zDxK%2FbJowaQgCdD08Pr2zR3ccaQAXSakDicx%2FwiLTPju%2FNN7cgQdfX1kB9FoI%2FH57%2B74%2FCgWLc8zHpu8m76bs%2BoHbtADAqPEDU4kkdCi%2BpVDNHskKP06lTum4dNNPJb7LHCxP8Z48sLdPIEuTAu2uVpC0B%2FNy%2BUTGUmpZ%2Fsy%2Bg9tjfMZOVs8Zo0eei1GasCRNobKEKZowr4rGYakqYKk7Hrv8oVY%2F4t5OoFa8gIBBsiRS9IEvTKacfWJ%2B%2F8nhzua7EIJIGLeZeOtuNb9sCgYdFCjqKv34DA92oQ0pJwrZzUdEU%2BoSH1q1GPMEEsnQsp%2FOiJH95Bsu91NLsLiZ7VNyU6xAqJGXTmMpYiPV9VplMPYGFBWXVAefqfREhpmBFRGi2V16w%2Fp%2BDBBD0WOMrXjVBc5TYq95mrJypmAbXC%2FYPoCo0XwLIDMwlQXUlvyMYo58cHtdyO686V7NCp4BLQ%2BGqGkJqnd3mvHYSE6p9LgKt8rdvz8aP%2Bg8TLwqbQlHZ1pqcIi%2Bf2Gne6rv8mDDzobPABjqkAUcFlWCg1EbgAfEfK7RUoLc4f%2BFw9UAsvjmn1v0o6uaioSvjJIn5A0gFzpEPXeCoK94RnMBf%2B8KsGDi7Vpy9EDiG5E9LNps8AWkjqZ1jOa9UXcCYnhIEiLWdkh1SoowlnlsPsPCoZPFnPaNa%2FiyhzXOk2xF5h%2BAQs3lIkhtJPXoMPOSwUNqwYRiPDcFvOTk1mWxDSdCcPMT3vpDkdlU%2B8OKTs4JU&X-Amz-Signature=61434f99c11c425f54ec8bd0ce0eb7e05bd6cefc07135007e7c7acbe5f675dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5D6ICV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbpTmd9jWBWHa31mg7AZ9ra9tWj0T7g4zn02wovjUNMgIhAJUAfdu%2FbBbneCyF3RdehJQFGxirDxFiUeJI%2BunO%2F8X%2FKv8DCEYQABoMNjM3NDIzMTgzODA1IgweVnP7M%2FASA7TMphsq3AN7kVmUOx05dlXVwK1TJDfI7WVD4gs5WqYoe1JBi8OIEUbGNmCGj4VL2OANBduXnM28pwLEhPw9x6Zf4IiVbv%2F7JLcm%2FfS8B5miqDOJURBR79zDxK%2FbJowaQgCdD08Pr2zR3ccaQAXSakDicx%2FwiLTPju%2FNN7cgQdfX1kB9FoI%2FH57%2B74%2FCgWLc8zHpu8m76bs%2BoHbtADAqPEDU4kkdCi%2BpVDNHskKP06lTum4dNNPJb7LHCxP8Z48sLdPIEuTAu2uVpC0B%2FNy%2BUTGUmpZ%2Fsy%2Bg9tjfMZOVs8Zo0eei1GasCRNobKEKZowr4rGYakqYKk7Hrv8oVY%2F4t5OoFa8gIBBsiRS9IEvTKacfWJ%2B%2F8nhzua7EIJIGLeZeOtuNb9sCgYdFCjqKv34DA92oQ0pJwrZzUdEU%2BoSH1q1GPMEEsnQsp%2FOiJH95Bsu91NLsLiZ7VNyU6xAqJGXTmMpYiPV9VplMPYGFBWXVAefqfREhpmBFRGi2V16w%2Fp%2BDBBD0WOMrXjVBc5TYq95mrJypmAbXC%2FYPoCo0XwLIDMwlQXUlvyMYo58cHtdyO686V7NCp4BLQ%2BGqGkJqnd3mvHYSE6p9LgKt8rdvz8aP%2Bg8TLwqbQlHZ1pqcIi%2Bf2Gne6rv8mDDzobPABjqkAUcFlWCg1EbgAfEfK7RUoLc4f%2BFw9UAsvjmn1v0o6uaioSvjJIn5A0gFzpEPXeCoK94RnMBf%2B8KsGDi7Vpy9EDiG5E9LNps8AWkjqZ1jOa9UXcCYnhIEiLWdkh1SoowlnlsPsPCoZPFnPaNa%2FiyhzXOk2xF5h%2BAQs3lIkhtJPXoMPOSwUNqwYRiPDcFvOTk1mWxDSdCcPMT3vpDkdlU%2B8OKTs4JU&X-Amz-Signature=4f13a24ff48970187c72c7c900ead9cdd63fb3480abae5d049c05b0dbe13da74&X-Amz-SignedHeaders=host&x-id=GetObject)
