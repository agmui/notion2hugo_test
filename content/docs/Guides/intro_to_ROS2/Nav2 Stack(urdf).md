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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU4Z7QY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFX5Opt%2BxVyUBpaIAENzKuKspOQ1%2FZtdRrl0pWwGQCF3AiBDu0sFLpyN6JCmR7GhD%2BEzOM7PcDvQmJBx9OU3mm%2BJNyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBg8vrGy4%2F%2B6KRCtkKtwDfU8tuOkoNldpEWs0iH8BAOid7x3MGvDn3slryeLwpbZW%2B%2BUUACc5kybHvYr42RCuTHyqJm8H6JUQlVvfbX%2FOrfCINQdePgCRi97z6zq6EfEp5t7Fzs2liKnjXRIRU81nWOGp62jO%2BdprLAFCKsq6hhI%2FQjU4%2BTASH8l3dBpetBPDNn3qJ6%2FX3VUkA1CRFiIaixoWh1v5wErS8laDZ2RqdvCZW%2BpN8%2BsuRWu3eAbe9TZ2CPhiolkoDbyQAkjvhr%2BDMCgSnFtgL2iWUXYiIOPflBJ10yiDAMzVgtm7tI7kVzlx4Oxe248t7UkK9tECLBZEdnW1uy%2Fn5u%2FG4VK3pJd5TnDgzaeDIO7umCjkHCCAobFRo%2FetssCRXvmTXsVK1CZbvd2jkeo7irdZDAil3Ege0ijGpLm5XZwu8nxXj5tcPgMZKgOjuNtmC%2BNMHUqwL0x0x5FtgNtcukFsvXtjYKlc6xyzvSkhNbhZVrwlgnHL3zZIluFW6LaKAYxyIEsP4E1kwCn5Qz7BzVTu%2Be2XqZ0Y%2B9tbJQfoFTkVT%2FWHI7FhfPkS%2BKMzch4EpuiCm%2B8Av0j5iz%2Blsk%2Fgh8ACC2tDv%2F9TzxXCgGaaPoWIzpBEx9RIIhJ7wOGmiGTnMMZpeukwv%2BeDvQY6pgEYY1M4M1cZ8ZMpEXVSrknrGm3KR%2BltroqKOD4SxCqhKmm8OQ%2FCtOI10jYG3BbQeG2MoXUyQXzii52UBBTuu7baQQWONE2YbYxKtxQSmS1OZNaE9S5W76X53vTfk73knPjqFH8gLXV6kZg6ZIW9OIpW%2FfeJv6Pi3mYBAS0vhOG0XozLVvJkJGOZEDiSdxAE30IXFSJUoNFfzmjWND0O5W3Dg2X1tGYn&X-Amz-Signature=b54e63d8f2be9376cbd90eacbad4c735aedfffb96941f62a4e640ab3fdd8381f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU4Z7QY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFX5Opt%2BxVyUBpaIAENzKuKspOQ1%2FZtdRrl0pWwGQCF3AiBDu0sFLpyN6JCmR7GhD%2BEzOM7PcDvQmJBx9OU3mm%2BJNyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBg8vrGy4%2F%2B6KRCtkKtwDfU8tuOkoNldpEWs0iH8BAOid7x3MGvDn3slryeLwpbZW%2B%2BUUACc5kybHvYr42RCuTHyqJm8H6JUQlVvfbX%2FOrfCINQdePgCRi97z6zq6EfEp5t7Fzs2liKnjXRIRU81nWOGp62jO%2BdprLAFCKsq6hhI%2FQjU4%2BTASH8l3dBpetBPDNn3qJ6%2FX3VUkA1CRFiIaixoWh1v5wErS8laDZ2RqdvCZW%2BpN8%2BsuRWu3eAbe9TZ2CPhiolkoDbyQAkjvhr%2BDMCgSnFtgL2iWUXYiIOPflBJ10yiDAMzVgtm7tI7kVzlx4Oxe248t7UkK9tECLBZEdnW1uy%2Fn5u%2FG4VK3pJd5TnDgzaeDIO7umCjkHCCAobFRo%2FetssCRXvmTXsVK1CZbvd2jkeo7irdZDAil3Ege0ijGpLm5XZwu8nxXj5tcPgMZKgOjuNtmC%2BNMHUqwL0x0x5FtgNtcukFsvXtjYKlc6xyzvSkhNbhZVrwlgnHL3zZIluFW6LaKAYxyIEsP4E1kwCn5Qz7BzVTu%2Be2XqZ0Y%2B9tbJQfoFTkVT%2FWHI7FhfPkS%2BKMzch4EpuiCm%2B8Av0j5iz%2Blsk%2Fgh8ACC2tDv%2F9TzxXCgGaaPoWIzpBEx9RIIhJ7wOGmiGTnMMZpeukwv%2BeDvQY6pgEYY1M4M1cZ8ZMpEXVSrknrGm3KR%2BltroqKOD4SxCqhKmm8OQ%2FCtOI10jYG3BbQeG2MoXUyQXzii52UBBTuu7baQQWONE2YbYxKtxQSmS1OZNaE9S5W76X53vTfk73knPjqFH8gLXV6kZg6ZIW9OIpW%2FfeJv6Pi3mYBAS0vhOG0XozLVvJkJGOZEDiSdxAE30IXFSJUoNFfzmjWND0O5W3Dg2X1tGYn&X-Amz-Signature=2e5755a8a984f5cf3d69572bb5b7f172d70e5a21517f29bce95b9e26802de55e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU4Z7QY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFX5Opt%2BxVyUBpaIAENzKuKspOQ1%2FZtdRrl0pWwGQCF3AiBDu0sFLpyN6JCmR7GhD%2BEzOM7PcDvQmJBx9OU3mm%2BJNyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBg8vrGy4%2F%2B6KRCtkKtwDfU8tuOkoNldpEWs0iH8BAOid7x3MGvDn3slryeLwpbZW%2B%2BUUACc5kybHvYr42RCuTHyqJm8H6JUQlVvfbX%2FOrfCINQdePgCRi97z6zq6EfEp5t7Fzs2liKnjXRIRU81nWOGp62jO%2BdprLAFCKsq6hhI%2FQjU4%2BTASH8l3dBpetBPDNn3qJ6%2FX3VUkA1CRFiIaixoWh1v5wErS8laDZ2RqdvCZW%2BpN8%2BsuRWu3eAbe9TZ2CPhiolkoDbyQAkjvhr%2BDMCgSnFtgL2iWUXYiIOPflBJ10yiDAMzVgtm7tI7kVzlx4Oxe248t7UkK9tECLBZEdnW1uy%2Fn5u%2FG4VK3pJd5TnDgzaeDIO7umCjkHCCAobFRo%2FetssCRXvmTXsVK1CZbvd2jkeo7irdZDAil3Ege0ijGpLm5XZwu8nxXj5tcPgMZKgOjuNtmC%2BNMHUqwL0x0x5FtgNtcukFsvXtjYKlc6xyzvSkhNbhZVrwlgnHL3zZIluFW6LaKAYxyIEsP4E1kwCn5Qz7BzVTu%2Be2XqZ0Y%2B9tbJQfoFTkVT%2FWHI7FhfPkS%2BKMzch4EpuiCm%2B8Av0j5iz%2Blsk%2Fgh8ACC2tDv%2F9TzxXCgGaaPoWIzpBEx9RIIhJ7wOGmiGTnMMZpeukwv%2BeDvQY6pgEYY1M4M1cZ8ZMpEXVSrknrGm3KR%2BltroqKOD4SxCqhKmm8OQ%2FCtOI10jYG3BbQeG2MoXUyQXzii52UBBTuu7baQQWONE2YbYxKtxQSmS1OZNaE9S5W76X53vTfk73knPjqFH8gLXV6kZg6ZIW9OIpW%2FfeJv6Pi3mYBAS0vhOG0XozLVvJkJGOZEDiSdxAE30IXFSJUoNFfzmjWND0O5W3Dg2X1tGYn&X-Amz-Signature=cd206aaed21d75c2e1b774463aa208ea61d3fa0de4a7349f3a7b166e36e31148&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU4Z7QY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFX5Opt%2BxVyUBpaIAENzKuKspOQ1%2FZtdRrl0pWwGQCF3AiBDu0sFLpyN6JCmR7GhD%2BEzOM7PcDvQmJBx9OU3mm%2BJNyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBg8vrGy4%2F%2B6KRCtkKtwDfU8tuOkoNldpEWs0iH8BAOid7x3MGvDn3slryeLwpbZW%2B%2BUUACc5kybHvYr42RCuTHyqJm8H6JUQlVvfbX%2FOrfCINQdePgCRi97z6zq6EfEp5t7Fzs2liKnjXRIRU81nWOGp62jO%2BdprLAFCKsq6hhI%2FQjU4%2BTASH8l3dBpetBPDNn3qJ6%2FX3VUkA1CRFiIaixoWh1v5wErS8laDZ2RqdvCZW%2BpN8%2BsuRWu3eAbe9TZ2CPhiolkoDbyQAkjvhr%2BDMCgSnFtgL2iWUXYiIOPflBJ10yiDAMzVgtm7tI7kVzlx4Oxe248t7UkK9tECLBZEdnW1uy%2Fn5u%2FG4VK3pJd5TnDgzaeDIO7umCjkHCCAobFRo%2FetssCRXvmTXsVK1CZbvd2jkeo7irdZDAil3Ege0ijGpLm5XZwu8nxXj5tcPgMZKgOjuNtmC%2BNMHUqwL0x0x5FtgNtcukFsvXtjYKlc6xyzvSkhNbhZVrwlgnHL3zZIluFW6LaKAYxyIEsP4E1kwCn5Qz7BzVTu%2Be2XqZ0Y%2B9tbJQfoFTkVT%2FWHI7FhfPkS%2BKMzch4EpuiCm%2B8Av0j5iz%2Blsk%2Fgh8ACC2tDv%2F9TzxXCgGaaPoWIzpBEx9RIIhJ7wOGmiGTnMMZpeukwv%2BeDvQY6pgEYY1M4M1cZ8ZMpEXVSrknrGm3KR%2BltroqKOD4SxCqhKmm8OQ%2FCtOI10jYG3BbQeG2MoXUyQXzii52UBBTuu7baQQWONE2YbYxKtxQSmS1OZNaE9S5W76X53vTfk73knPjqFH8gLXV6kZg6ZIW9OIpW%2FfeJv6Pi3mYBAS0vhOG0XozLVvJkJGOZEDiSdxAE30IXFSJUoNFfzmjWND0O5W3Dg2X1tGYn&X-Amz-Signature=20525ce7e5519bb99305adddb9f5d9548fcb235df82240ab752e1fb8361f4079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU4Z7QY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFX5Opt%2BxVyUBpaIAENzKuKspOQ1%2FZtdRrl0pWwGQCF3AiBDu0sFLpyN6JCmR7GhD%2BEzOM7PcDvQmJBx9OU3mm%2BJNyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBg8vrGy4%2F%2B6KRCtkKtwDfU8tuOkoNldpEWs0iH8BAOid7x3MGvDn3slryeLwpbZW%2B%2BUUACc5kybHvYr42RCuTHyqJm8H6JUQlVvfbX%2FOrfCINQdePgCRi97z6zq6EfEp5t7Fzs2liKnjXRIRU81nWOGp62jO%2BdprLAFCKsq6hhI%2FQjU4%2BTASH8l3dBpetBPDNn3qJ6%2FX3VUkA1CRFiIaixoWh1v5wErS8laDZ2RqdvCZW%2BpN8%2BsuRWu3eAbe9TZ2CPhiolkoDbyQAkjvhr%2BDMCgSnFtgL2iWUXYiIOPflBJ10yiDAMzVgtm7tI7kVzlx4Oxe248t7UkK9tECLBZEdnW1uy%2Fn5u%2FG4VK3pJd5TnDgzaeDIO7umCjkHCCAobFRo%2FetssCRXvmTXsVK1CZbvd2jkeo7irdZDAil3Ege0ijGpLm5XZwu8nxXj5tcPgMZKgOjuNtmC%2BNMHUqwL0x0x5FtgNtcukFsvXtjYKlc6xyzvSkhNbhZVrwlgnHL3zZIluFW6LaKAYxyIEsP4E1kwCn5Qz7BzVTu%2Be2XqZ0Y%2B9tbJQfoFTkVT%2FWHI7FhfPkS%2BKMzch4EpuiCm%2B8Av0j5iz%2Blsk%2Fgh8ACC2tDv%2F9TzxXCgGaaPoWIzpBEx9RIIhJ7wOGmiGTnMMZpeukwv%2BeDvQY6pgEYY1M4M1cZ8ZMpEXVSrknrGm3KR%2BltroqKOD4SxCqhKmm8OQ%2FCtOI10jYG3BbQeG2MoXUyQXzii52UBBTuu7baQQWONE2YbYxKtxQSmS1OZNaE9S5W76X53vTfk73knPjqFH8gLXV6kZg6ZIW9OIpW%2FfeJv6Pi3mYBAS0vhOG0XozLVvJkJGOZEDiSdxAE30IXFSJUoNFfzmjWND0O5W3Dg2X1tGYn&X-Amz-Signature=b94b99c65f62a3925d275f7da95a8973e3ba10b6f64500aadfe52c6423ccf109&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU4Z7QY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFX5Opt%2BxVyUBpaIAENzKuKspOQ1%2FZtdRrl0pWwGQCF3AiBDu0sFLpyN6JCmR7GhD%2BEzOM7PcDvQmJBx9OU3mm%2BJNyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMBg8vrGy4%2F%2B6KRCtkKtwDfU8tuOkoNldpEWs0iH8BAOid7x3MGvDn3slryeLwpbZW%2B%2BUUACc5kybHvYr42RCuTHyqJm8H6JUQlVvfbX%2FOrfCINQdePgCRi97z6zq6EfEp5t7Fzs2liKnjXRIRU81nWOGp62jO%2BdprLAFCKsq6hhI%2FQjU4%2BTASH8l3dBpetBPDNn3qJ6%2FX3VUkA1CRFiIaixoWh1v5wErS8laDZ2RqdvCZW%2BpN8%2BsuRWu3eAbe9TZ2CPhiolkoDbyQAkjvhr%2BDMCgSnFtgL2iWUXYiIOPflBJ10yiDAMzVgtm7tI7kVzlx4Oxe248t7UkK9tECLBZEdnW1uy%2Fn5u%2FG4VK3pJd5TnDgzaeDIO7umCjkHCCAobFRo%2FetssCRXvmTXsVK1CZbvd2jkeo7irdZDAil3Ege0ijGpLm5XZwu8nxXj5tcPgMZKgOjuNtmC%2BNMHUqwL0x0x5FtgNtcukFsvXtjYKlc6xyzvSkhNbhZVrwlgnHL3zZIluFW6LaKAYxyIEsP4E1kwCn5Qz7BzVTu%2Be2XqZ0Y%2B9tbJQfoFTkVT%2FWHI7FhfPkS%2BKMzch4EpuiCm%2B8Av0j5iz%2Blsk%2Fgh8ACC2tDv%2F9TzxXCgGaaPoWIzpBEx9RIIhJ7wOGmiGTnMMZpeukwv%2BeDvQY6pgEYY1M4M1cZ8ZMpEXVSrknrGm3KR%2BltroqKOD4SxCqhKmm8OQ%2FCtOI10jYG3BbQeG2MoXUyQXzii52UBBTuu7baQQWONE2YbYxKtxQSmS1OZNaE9S5W76X53vTfk73knPjqFH8gLXV6kZg6ZIW9OIpW%2FfeJv6Pi3mYBAS0vhOG0XozLVvJkJGOZEDiSdxAE30IXFSJUoNFfzmjWND0O5W3Dg2X1tGYn&X-Amz-Signature=67d32c9e80ad6ac736bf726de15d1fb694eca0a14a8c75dfb1ab48db26061013&X-Amz-SignedHeaders=host&x-id=GetObject)
