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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NN5G5XM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS3XkzqHUS%2FWxvUep78EvDk5yvhXybHuWs035uuEXQowIgFL3U0AEERr2YULu3cUn%2Ba1VNhqfG%2FOT%2FOKSAmTqKViMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO4yduEeRaqLsuByrcA1YZQXQkx%2FBL%2FMyPIbbWKp3xSgf18ibQmZDHqgM5LUvtNnQmFoVcAcmmXWN87Sy6NrglRypaBpwunZlYSqPvyrrrGssY3dBCYBB3AUfgeFSV5K3WpDeInaKKVq2fqg0uxK8TZhpp3Nrp5CV%2FDnb%2F9e4wW3PBj%2BssFJBLZzUPEAcvXDYftMHhcFwxlvlgP%2Bh%2FGW35yWBAvI%2B29P4ZHM2ObtpDm5f55pH0oEJeOmSn3Hgj7HYiuS5qk1qpIuyLvSGuzNa887VmiwDDx54aTaxrXiXpbZqU%2FKKQ4uZZTFRERn5AcR3cW5JOSgjX2JMF6XswXfvvoEdWJp%2FCea8rB8QxkOFUNuQBNd2CMEOrapIuUg45VQeLn4IGlgX30bQoxTzxEWoK35S4%2FQ3g2LaVWsw2BegDCywGfzneOfd8ZU8agQiWKb%2B5mFn4hlNSQMEK4IOS0KZEZjiHIZoxu089fAKeIK11NlXoWXwW%2B81lHhQ72N5UQRrLH1xRT2t2NJ%2ByyVPfO0zQaGe3n0V%2BcWMbIcyFEzs36Nvq6b4z3Emv4U3lajy4fI28BBHoVMLIsbmMk2jH0pXMGMqQ4xVjuHf6yd%2F6sq%2Fr6uXI%2BRLkXfyOplHbTyGPG0EtWc%2BGcLFV2weRMNa8lsMGOqUBoiCOvG61JlpFfaVtdfVmzFqVPl7FsL02Ha00%2FyZJhNSEIqRMGh3OOetCNVkNQ7HiSyYoDSyOS0bd7gna2FtJ2Tt6gpEQfQJjalvHpYW0dIaOPdC81eN8e3UdUVQVslEHntkB9xVifOGHZDzmPrP1ZDwnE%2BHmlwuxvIdDKJ6cdLuWcWDjr0164B8ZrEmk%2BWJO0KF09u2UdhJ6dU%2FKP44AeKs4pgX9&X-Amz-Signature=8c12a90845f1cd1951198ab01fcccfc54151191ba1653c65b53e5ff6a265a5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NN5G5XM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS3XkzqHUS%2FWxvUep78EvDk5yvhXybHuWs035uuEXQowIgFL3U0AEERr2YULu3cUn%2Ba1VNhqfG%2FOT%2FOKSAmTqKViMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO4yduEeRaqLsuByrcA1YZQXQkx%2FBL%2FMyPIbbWKp3xSgf18ibQmZDHqgM5LUvtNnQmFoVcAcmmXWN87Sy6NrglRypaBpwunZlYSqPvyrrrGssY3dBCYBB3AUfgeFSV5K3WpDeInaKKVq2fqg0uxK8TZhpp3Nrp5CV%2FDnb%2F9e4wW3PBj%2BssFJBLZzUPEAcvXDYftMHhcFwxlvlgP%2Bh%2FGW35yWBAvI%2B29P4ZHM2ObtpDm5f55pH0oEJeOmSn3Hgj7HYiuS5qk1qpIuyLvSGuzNa887VmiwDDx54aTaxrXiXpbZqU%2FKKQ4uZZTFRERn5AcR3cW5JOSgjX2JMF6XswXfvvoEdWJp%2FCea8rB8QxkOFUNuQBNd2CMEOrapIuUg45VQeLn4IGlgX30bQoxTzxEWoK35S4%2FQ3g2LaVWsw2BegDCywGfzneOfd8ZU8agQiWKb%2B5mFn4hlNSQMEK4IOS0KZEZjiHIZoxu089fAKeIK11NlXoWXwW%2B81lHhQ72N5UQRrLH1xRT2t2NJ%2ByyVPfO0zQaGe3n0V%2BcWMbIcyFEzs36Nvq6b4z3Emv4U3lajy4fI28BBHoVMLIsbmMk2jH0pXMGMqQ4xVjuHf6yd%2F6sq%2Fr6uXI%2BRLkXfyOplHbTyGPG0EtWc%2BGcLFV2weRMNa8lsMGOqUBoiCOvG61JlpFfaVtdfVmzFqVPl7FsL02Ha00%2FyZJhNSEIqRMGh3OOetCNVkNQ7HiSyYoDSyOS0bd7gna2FtJ2Tt6gpEQfQJjalvHpYW0dIaOPdC81eN8e3UdUVQVslEHntkB9xVifOGHZDzmPrP1ZDwnE%2BHmlwuxvIdDKJ6cdLuWcWDjr0164B8ZrEmk%2BWJO0KF09u2UdhJ6dU%2FKP44AeKs4pgX9&X-Amz-Signature=398eedd5532bc71b79228cb1987b0e7748b99d649d982a0e164dfad7ad316655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NN5G5XM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS3XkzqHUS%2FWxvUep78EvDk5yvhXybHuWs035uuEXQowIgFL3U0AEERr2YULu3cUn%2Ba1VNhqfG%2FOT%2FOKSAmTqKViMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO4yduEeRaqLsuByrcA1YZQXQkx%2FBL%2FMyPIbbWKp3xSgf18ibQmZDHqgM5LUvtNnQmFoVcAcmmXWN87Sy6NrglRypaBpwunZlYSqPvyrrrGssY3dBCYBB3AUfgeFSV5K3WpDeInaKKVq2fqg0uxK8TZhpp3Nrp5CV%2FDnb%2F9e4wW3PBj%2BssFJBLZzUPEAcvXDYftMHhcFwxlvlgP%2Bh%2FGW35yWBAvI%2B29P4ZHM2ObtpDm5f55pH0oEJeOmSn3Hgj7HYiuS5qk1qpIuyLvSGuzNa887VmiwDDx54aTaxrXiXpbZqU%2FKKQ4uZZTFRERn5AcR3cW5JOSgjX2JMF6XswXfvvoEdWJp%2FCea8rB8QxkOFUNuQBNd2CMEOrapIuUg45VQeLn4IGlgX30bQoxTzxEWoK35S4%2FQ3g2LaVWsw2BegDCywGfzneOfd8ZU8agQiWKb%2B5mFn4hlNSQMEK4IOS0KZEZjiHIZoxu089fAKeIK11NlXoWXwW%2B81lHhQ72N5UQRrLH1xRT2t2NJ%2ByyVPfO0zQaGe3n0V%2BcWMbIcyFEzs36Nvq6b4z3Emv4U3lajy4fI28BBHoVMLIsbmMk2jH0pXMGMqQ4xVjuHf6yd%2F6sq%2Fr6uXI%2BRLkXfyOplHbTyGPG0EtWc%2BGcLFV2weRMNa8lsMGOqUBoiCOvG61JlpFfaVtdfVmzFqVPl7FsL02Ha00%2FyZJhNSEIqRMGh3OOetCNVkNQ7HiSyYoDSyOS0bd7gna2FtJ2Tt6gpEQfQJjalvHpYW0dIaOPdC81eN8e3UdUVQVslEHntkB9xVifOGHZDzmPrP1ZDwnE%2BHmlwuxvIdDKJ6cdLuWcWDjr0164B8ZrEmk%2BWJO0KF09u2UdhJ6dU%2FKP44AeKs4pgX9&X-Amz-Signature=74ea75998494369509bc7b0a8c9473d5fbfcdcdceb25bc1a6eaa796ff14a1974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NN5G5XM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS3XkzqHUS%2FWxvUep78EvDk5yvhXybHuWs035uuEXQowIgFL3U0AEERr2YULu3cUn%2Ba1VNhqfG%2FOT%2FOKSAmTqKViMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO4yduEeRaqLsuByrcA1YZQXQkx%2FBL%2FMyPIbbWKp3xSgf18ibQmZDHqgM5LUvtNnQmFoVcAcmmXWN87Sy6NrglRypaBpwunZlYSqPvyrrrGssY3dBCYBB3AUfgeFSV5K3WpDeInaKKVq2fqg0uxK8TZhpp3Nrp5CV%2FDnb%2F9e4wW3PBj%2BssFJBLZzUPEAcvXDYftMHhcFwxlvlgP%2Bh%2FGW35yWBAvI%2B29P4ZHM2ObtpDm5f55pH0oEJeOmSn3Hgj7HYiuS5qk1qpIuyLvSGuzNa887VmiwDDx54aTaxrXiXpbZqU%2FKKQ4uZZTFRERn5AcR3cW5JOSgjX2JMF6XswXfvvoEdWJp%2FCea8rB8QxkOFUNuQBNd2CMEOrapIuUg45VQeLn4IGlgX30bQoxTzxEWoK35S4%2FQ3g2LaVWsw2BegDCywGfzneOfd8ZU8agQiWKb%2B5mFn4hlNSQMEK4IOS0KZEZjiHIZoxu089fAKeIK11NlXoWXwW%2B81lHhQ72N5UQRrLH1xRT2t2NJ%2ByyVPfO0zQaGe3n0V%2BcWMbIcyFEzs36Nvq6b4z3Emv4U3lajy4fI28BBHoVMLIsbmMk2jH0pXMGMqQ4xVjuHf6yd%2F6sq%2Fr6uXI%2BRLkXfyOplHbTyGPG0EtWc%2BGcLFV2weRMNa8lsMGOqUBoiCOvG61JlpFfaVtdfVmzFqVPl7FsL02Ha00%2FyZJhNSEIqRMGh3OOetCNVkNQ7HiSyYoDSyOS0bd7gna2FtJ2Tt6gpEQfQJjalvHpYW0dIaOPdC81eN8e3UdUVQVslEHntkB9xVifOGHZDzmPrP1ZDwnE%2BHmlwuxvIdDKJ6cdLuWcWDjr0164B8ZrEmk%2BWJO0KF09u2UdhJ6dU%2FKP44AeKs4pgX9&X-Amz-Signature=cc51046364c7f4e969e4af7629f88912cb5df0777b2c26eaad89a3b4624afca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NN5G5XM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS3XkzqHUS%2FWxvUep78EvDk5yvhXybHuWs035uuEXQowIgFL3U0AEERr2YULu3cUn%2Ba1VNhqfG%2FOT%2FOKSAmTqKViMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO4yduEeRaqLsuByrcA1YZQXQkx%2FBL%2FMyPIbbWKp3xSgf18ibQmZDHqgM5LUvtNnQmFoVcAcmmXWN87Sy6NrglRypaBpwunZlYSqPvyrrrGssY3dBCYBB3AUfgeFSV5K3WpDeInaKKVq2fqg0uxK8TZhpp3Nrp5CV%2FDnb%2F9e4wW3PBj%2BssFJBLZzUPEAcvXDYftMHhcFwxlvlgP%2Bh%2FGW35yWBAvI%2B29P4ZHM2ObtpDm5f55pH0oEJeOmSn3Hgj7HYiuS5qk1qpIuyLvSGuzNa887VmiwDDx54aTaxrXiXpbZqU%2FKKQ4uZZTFRERn5AcR3cW5JOSgjX2JMF6XswXfvvoEdWJp%2FCea8rB8QxkOFUNuQBNd2CMEOrapIuUg45VQeLn4IGlgX30bQoxTzxEWoK35S4%2FQ3g2LaVWsw2BegDCywGfzneOfd8ZU8agQiWKb%2B5mFn4hlNSQMEK4IOS0KZEZjiHIZoxu089fAKeIK11NlXoWXwW%2B81lHhQ72N5UQRrLH1xRT2t2NJ%2ByyVPfO0zQaGe3n0V%2BcWMbIcyFEzs36Nvq6b4z3Emv4U3lajy4fI28BBHoVMLIsbmMk2jH0pXMGMqQ4xVjuHf6yd%2F6sq%2Fr6uXI%2BRLkXfyOplHbTyGPG0EtWc%2BGcLFV2weRMNa8lsMGOqUBoiCOvG61JlpFfaVtdfVmzFqVPl7FsL02Ha00%2FyZJhNSEIqRMGh3OOetCNVkNQ7HiSyYoDSyOS0bd7gna2FtJ2Tt6gpEQfQJjalvHpYW0dIaOPdC81eN8e3UdUVQVslEHntkB9xVifOGHZDzmPrP1ZDwnE%2BHmlwuxvIdDKJ6cdLuWcWDjr0164B8ZrEmk%2BWJO0KF09u2UdhJ6dU%2FKP44AeKs4pgX9&X-Amz-Signature=da5e20cb57f452b5e92e3b6a34fbf0019f0545ad0c63c05ed97ab045911ace63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NN5G5XM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS3XkzqHUS%2FWxvUep78EvDk5yvhXybHuWs035uuEXQowIgFL3U0AEERr2YULu3cUn%2Ba1VNhqfG%2FOT%2FOKSAmTqKViMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjO4yduEeRaqLsuByrcA1YZQXQkx%2FBL%2FMyPIbbWKp3xSgf18ibQmZDHqgM5LUvtNnQmFoVcAcmmXWN87Sy6NrglRypaBpwunZlYSqPvyrrrGssY3dBCYBB3AUfgeFSV5K3WpDeInaKKVq2fqg0uxK8TZhpp3Nrp5CV%2FDnb%2F9e4wW3PBj%2BssFJBLZzUPEAcvXDYftMHhcFwxlvlgP%2Bh%2FGW35yWBAvI%2B29P4ZHM2ObtpDm5f55pH0oEJeOmSn3Hgj7HYiuS5qk1qpIuyLvSGuzNa887VmiwDDx54aTaxrXiXpbZqU%2FKKQ4uZZTFRERn5AcR3cW5JOSgjX2JMF6XswXfvvoEdWJp%2FCea8rB8QxkOFUNuQBNd2CMEOrapIuUg45VQeLn4IGlgX30bQoxTzxEWoK35S4%2FQ3g2LaVWsw2BegDCywGfzneOfd8ZU8agQiWKb%2B5mFn4hlNSQMEK4IOS0KZEZjiHIZoxu089fAKeIK11NlXoWXwW%2B81lHhQ72N5UQRrLH1xRT2t2NJ%2ByyVPfO0zQaGe3n0V%2BcWMbIcyFEzs36Nvq6b4z3Emv4U3lajy4fI28BBHoVMLIsbmMk2jH0pXMGMqQ4xVjuHf6yd%2F6sq%2Fr6uXI%2BRLkXfyOplHbTyGPG0EtWc%2BGcLFV2weRMNa8lsMGOqUBoiCOvG61JlpFfaVtdfVmzFqVPl7FsL02Ha00%2FyZJhNSEIqRMGh3OOetCNVkNQ7HiSyYoDSyOS0bd7gna2FtJ2Tt6gpEQfQJjalvHpYW0dIaOPdC81eN8e3UdUVQVslEHntkB9xVifOGHZDzmPrP1ZDwnE%2BHmlwuxvIdDKJ6cdLuWcWDjr0164B8ZrEmk%2BWJO0KF09u2UdhJ6dU%2FKP44AeKs4pgX9&X-Amz-Signature=f90f07307ea1bdb075af36ec72f8118bf233a042e1805125f36c643382af5bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
