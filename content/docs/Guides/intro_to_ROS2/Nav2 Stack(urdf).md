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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZAWL2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeKhrKqdwhrY4sAjMwirofC%2BCZTNjaeEoy09srvZ7xUQIhANLCluZVA9yHlpqNl7aJ6wR0dYWVYLDPWrpj5ZwCdyExKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY4fxlkzSiKExKAJgq3AMO3muaBuR8JiXvpG%2F9nU9epw9lxFO1wsYYPAUHt0MgX13Daob3y6xLIpqgD2AWAUXd8VsDhPrBEL3lYnlXsHjFaghr%2BuJ2oBT2ARMhLiVmmv4Q0RvByZpQUIjtT9Ts4LPbLsSnl3RAzoh7qxUyI6Aj58uDm5BV%2FEbUbfMIv3Vod4uwdSs%2FVksUd%2B%2FHvpxdhHvmO2iJ4jassl5yXnimybeam5djpPAkwxUpaFuIF8IsP6nbEDBjhmHqgY0n7%2FkyXkDDFRYCaxfOqQS4nmdDKtHgzMN0HQjXi2bHzWbNjmW822OVHXKhHjlLxURw9gc98kV%2Bi4VPZ7rghYF8CpHalEfpu1ZJbB9gtSlG8yq07lEsxkhqNrTKwI5xUnYM2ZpBzpiNlIfVA2OVJhuJaf4VoGckbalv5JN9h1GPyUA4uk0eGLYAfGiZNPzvTJ72uSfo2PY80wv2PFzTjoS12wlDCzl9CpNGATNjKRi8BamMa8ezzAqFrGOZXDs61ZaddAi21rxCL85gECo%2FRBUp6iy5t2mkECxgUoUbS1TNGi8PMYRVeAxDjX1wPmyvD8UqoGUO%2B%2BYcCPb3tgVhdl0%2B%2F2WtEAiKT3zPRgo0UjDXlCjeYF7V4S74Dk%2FAbZbgqBbG6DDL3tfABjqkAfbaBtucXg7JgMd%2BK1M7dYN8l89VuXql0wPu7%2BjP%2F4BJM6Ej0Kzm8yfwKR6EKabboBYiqszw30EQkmts2Z%2Fkl86fJScZ%2Bbs5WXp3j1wrcgcG1Vi371qVt7R7JZFm%2BrIvI7cqMLugQHrESpPQ94S%2F0%2FeUB8CDN%2BPv4nPgoi%2BkdVR6r%2Bvzx%2FXBmbHkZTu5CSmZQAejP%2B1k9%2BzTj5x5SZRXoDvOTbmK&X-Amz-Signature=9011eebd2b9069bc42a8f5ff2c7333a5bbe5192a5082a1b8c47eba773d0c3dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZAWL2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeKhrKqdwhrY4sAjMwirofC%2BCZTNjaeEoy09srvZ7xUQIhANLCluZVA9yHlpqNl7aJ6wR0dYWVYLDPWrpj5ZwCdyExKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY4fxlkzSiKExKAJgq3AMO3muaBuR8JiXvpG%2F9nU9epw9lxFO1wsYYPAUHt0MgX13Daob3y6xLIpqgD2AWAUXd8VsDhPrBEL3lYnlXsHjFaghr%2BuJ2oBT2ARMhLiVmmv4Q0RvByZpQUIjtT9Ts4LPbLsSnl3RAzoh7qxUyI6Aj58uDm5BV%2FEbUbfMIv3Vod4uwdSs%2FVksUd%2B%2FHvpxdhHvmO2iJ4jassl5yXnimybeam5djpPAkwxUpaFuIF8IsP6nbEDBjhmHqgY0n7%2FkyXkDDFRYCaxfOqQS4nmdDKtHgzMN0HQjXi2bHzWbNjmW822OVHXKhHjlLxURw9gc98kV%2Bi4VPZ7rghYF8CpHalEfpu1ZJbB9gtSlG8yq07lEsxkhqNrTKwI5xUnYM2ZpBzpiNlIfVA2OVJhuJaf4VoGckbalv5JN9h1GPyUA4uk0eGLYAfGiZNPzvTJ72uSfo2PY80wv2PFzTjoS12wlDCzl9CpNGATNjKRi8BamMa8ezzAqFrGOZXDs61ZaddAi21rxCL85gECo%2FRBUp6iy5t2mkECxgUoUbS1TNGi8PMYRVeAxDjX1wPmyvD8UqoGUO%2B%2BYcCPb3tgVhdl0%2B%2F2WtEAiKT3zPRgo0UjDXlCjeYF7V4S74Dk%2FAbZbgqBbG6DDL3tfABjqkAfbaBtucXg7JgMd%2BK1M7dYN8l89VuXql0wPu7%2BjP%2F4BJM6Ej0Kzm8yfwKR6EKabboBYiqszw30EQkmts2Z%2Fkl86fJScZ%2Bbs5WXp3j1wrcgcG1Vi371qVt7R7JZFm%2BrIvI7cqMLugQHrESpPQ94S%2F0%2FeUB8CDN%2BPv4nPgoi%2BkdVR6r%2Bvzx%2FXBmbHkZTu5CSmZQAejP%2B1k9%2BzTj5x5SZRXoDvOTbmK&X-Amz-Signature=5861b8b9442e726a434ab68a700d8195bcda29e7ab0412d76b3532f50d638eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZAWL2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeKhrKqdwhrY4sAjMwirofC%2BCZTNjaeEoy09srvZ7xUQIhANLCluZVA9yHlpqNl7aJ6wR0dYWVYLDPWrpj5ZwCdyExKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY4fxlkzSiKExKAJgq3AMO3muaBuR8JiXvpG%2F9nU9epw9lxFO1wsYYPAUHt0MgX13Daob3y6xLIpqgD2AWAUXd8VsDhPrBEL3lYnlXsHjFaghr%2BuJ2oBT2ARMhLiVmmv4Q0RvByZpQUIjtT9Ts4LPbLsSnl3RAzoh7qxUyI6Aj58uDm5BV%2FEbUbfMIv3Vod4uwdSs%2FVksUd%2B%2FHvpxdhHvmO2iJ4jassl5yXnimybeam5djpPAkwxUpaFuIF8IsP6nbEDBjhmHqgY0n7%2FkyXkDDFRYCaxfOqQS4nmdDKtHgzMN0HQjXi2bHzWbNjmW822OVHXKhHjlLxURw9gc98kV%2Bi4VPZ7rghYF8CpHalEfpu1ZJbB9gtSlG8yq07lEsxkhqNrTKwI5xUnYM2ZpBzpiNlIfVA2OVJhuJaf4VoGckbalv5JN9h1GPyUA4uk0eGLYAfGiZNPzvTJ72uSfo2PY80wv2PFzTjoS12wlDCzl9CpNGATNjKRi8BamMa8ezzAqFrGOZXDs61ZaddAi21rxCL85gECo%2FRBUp6iy5t2mkECxgUoUbS1TNGi8PMYRVeAxDjX1wPmyvD8UqoGUO%2B%2BYcCPb3tgVhdl0%2B%2F2WtEAiKT3zPRgo0UjDXlCjeYF7V4S74Dk%2FAbZbgqBbG6DDL3tfABjqkAfbaBtucXg7JgMd%2BK1M7dYN8l89VuXql0wPu7%2BjP%2F4BJM6Ej0Kzm8yfwKR6EKabboBYiqszw30EQkmts2Z%2Fkl86fJScZ%2Bbs5WXp3j1wrcgcG1Vi371qVt7R7JZFm%2BrIvI7cqMLugQHrESpPQ94S%2F0%2FeUB8CDN%2BPv4nPgoi%2BkdVR6r%2Bvzx%2FXBmbHkZTu5CSmZQAejP%2B1k9%2BzTj5x5SZRXoDvOTbmK&X-Amz-Signature=69284ce5c7c378851eae4fe5a6925a96a91b1612c9c76711dd20f5eb39b086a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZAWL2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeKhrKqdwhrY4sAjMwirofC%2BCZTNjaeEoy09srvZ7xUQIhANLCluZVA9yHlpqNl7aJ6wR0dYWVYLDPWrpj5ZwCdyExKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY4fxlkzSiKExKAJgq3AMO3muaBuR8JiXvpG%2F9nU9epw9lxFO1wsYYPAUHt0MgX13Daob3y6xLIpqgD2AWAUXd8VsDhPrBEL3lYnlXsHjFaghr%2BuJ2oBT2ARMhLiVmmv4Q0RvByZpQUIjtT9Ts4LPbLsSnl3RAzoh7qxUyI6Aj58uDm5BV%2FEbUbfMIv3Vod4uwdSs%2FVksUd%2B%2FHvpxdhHvmO2iJ4jassl5yXnimybeam5djpPAkwxUpaFuIF8IsP6nbEDBjhmHqgY0n7%2FkyXkDDFRYCaxfOqQS4nmdDKtHgzMN0HQjXi2bHzWbNjmW822OVHXKhHjlLxURw9gc98kV%2Bi4VPZ7rghYF8CpHalEfpu1ZJbB9gtSlG8yq07lEsxkhqNrTKwI5xUnYM2ZpBzpiNlIfVA2OVJhuJaf4VoGckbalv5JN9h1GPyUA4uk0eGLYAfGiZNPzvTJ72uSfo2PY80wv2PFzTjoS12wlDCzl9CpNGATNjKRi8BamMa8ezzAqFrGOZXDs61ZaddAi21rxCL85gECo%2FRBUp6iy5t2mkECxgUoUbS1TNGi8PMYRVeAxDjX1wPmyvD8UqoGUO%2B%2BYcCPb3tgVhdl0%2B%2F2WtEAiKT3zPRgo0UjDXlCjeYF7V4S74Dk%2FAbZbgqBbG6DDL3tfABjqkAfbaBtucXg7JgMd%2BK1M7dYN8l89VuXql0wPu7%2BjP%2F4BJM6Ej0Kzm8yfwKR6EKabboBYiqszw30EQkmts2Z%2Fkl86fJScZ%2Bbs5WXp3j1wrcgcG1Vi371qVt7R7JZFm%2BrIvI7cqMLugQHrESpPQ94S%2F0%2FeUB8CDN%2BPv4nPgoi%2BkdVR6r%2Bvzx%2FXBmbHkZTu5CSmZQAejP%2B1k9%2BzTj5x5SZRXoDvOTbmK&X-Amz-Signature=ec35a3d4a46faa05d274ac8944022c26c3db1a21546c0101613a0498ed3b856b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZAWL2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeKhrKqdwhrY4sAjMwirofC%2BCZTNjaeEoy09srvZ7xUQIhANLCluZVA9yHlpqNl7aJ6wR0dYWVYLDPWrpj5ZwCdyExKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY4fxlkzSiKExKAJgq3AMO3muaBuR8JiXvpG%2F9nU9epw9lxFO1wsYYPAUHt0MgX13Daob3y6xLIpqgD2AWAUXd8VsDhPrBEL3lYnlXsHjFaghr%2BuJ2oBT2ARMhLiVmmv4Q0RvByZpQUIjtT9Ts4LPbLsSnl3RAzoh7qxUyI6Aj58uDm5BV%2FEbUbfMIv3Vod4uwdSs%2FVksUd%2B%2FHvpxdhHvmO2iJ4jassl5yXnimybeam5djpPAkwxUpaFuIF8IsP6nbEDBjhmHqgY0n7%2FkyXkDDFRYCaxfOqQS4nmdDKtHgzMN0HQjXi2bHzWbNjmW822OVHXKhHjlLxURw9gc98kV%2Bi4VPZ7rghYF8CpHalEfpu1ZJbB9gtSlG8yq07lEsxkhqNrTKwI5xUnYM2ZpBzpiNlIfVA2OVJhuJaf4VoGckbalv5JN9h1GPyUA4uk0eGLYAfGiZNPzvTJ72uSfo2PY80wv2PFzTjoS12wlDCzl9CpNGATNjKRi8BamMa8ezzAqFrGOZXDs61ZaddAi21rxCL85gECo%2FRBUp6iy5t2mkECxgUoUbS1TNGi8PMYRVeAxDjX1wPmyvD8UqoGUO%2B%2BYcCPb3tgVhdl0%2B%2F2WtEAiKT3zPRgo0UjDXlCjeYF7V4S74Dk%2FAbZbgqBbG6DDL3tfABjqkAfbaBtucXg7JgMd%2BK1M7dYN8l89VuXql0wPu7%2BjP%2F4BJM6Ej0Kzm8yfwKR6EKabboBYiqszw30EQkmts2Z%2Fkl86fJScZ%2Bbs5WXp3j1wrcgcG1Vi371qVt7R7JZFm%2BrIvI7cqMLugQHrESpPQ94S%2F0%2FeUB8CDN%2BPv4nPgoi%2BkdVR6r%2Bvzx%2FXBmbHkZTu5CSmZQAejP%2B1k9%2BzTj5x5SZRXoDvOTbmK&X-Amz-Signature=ece954113eba603fed8341c1c73998b8bccf5621fccb12f292bffed1acd32e30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EFZAWL2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeKhrKqdwhrY4sAjMwirofC%2BCZTNjaeEoy09srvZ7xUQIhANLCluZVA9yHlpqNl7aJ6wR0dYWVYLDPWrpj5ZwCdyExKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY4fxlkzSiKExKAJgq3AMO3muaBuR8JiXvpG%2F9nU9epw9lxFO1wsYYPAUHt0MgX13Daob3y6xLIpqgD2AWAUXd8VsDhPrBEL3lYnlXsHjFaghr%2BuJ2oBT2ARMhLiVmmv4Q0RvByZpQUIjtT9Ts4LPbLsSnl3RAzoh7qxUyI6Aj58uDm5BV%2FEbUbfMIv3Vod4uwdSs%2FVksUd%2B%2FHvpxdhHvmO2iJ4jassl5yXnimybeam5djpPAkwxUpaFuIF8IsP6nbEDBjhmHqgY0n7%2FkyXkDDFRYCaxfOqQS4nmdDKtHgzMN0HQjXi2bHzWbNjmW822OVHXKhHjlLxURw9gc98kV%2Bi4VPZ7rghYF8CpHalEfpu1ZJbB9gtSlG8yq07lEsxkhqNrTKwI5xUnYM2ZpBzpiNlIfVA2OVJhuJaf4VoGckbalv5JN9h1GPyUA4uk0eGLYAfGiZNPzvTJ72uSfo2PY80wv2PFzTjoS12wlDCzl9CpNGATNjKRi8BamMa8ezzAqFrGOZXDs61ZaddAi21rxCL85gECo%2FRBUp6iy5t2mkECxgUoUbS1TNGi8PMYRVeAxDjX1wPmyvD8UqoGUO%2B%2BYcCPb3tgVhdl0%2B%2F2WtEAiKT3zPRgo0UjDXlCjeYF7V4S74Dk%2FAbZbgqBbG6DDL3tfABjqkAfbaBtucXg7JgMd%2BK1M7dYN8l89VuXql0wPu7%2BjP%2F4BJM6Ej0Kzm8yfwKR6EKabboBYiqszw30EQkmts2Z%2Fkl86fJScZ%2Bbs5WXp3j1wrcgcG1Vi371qVt7R7JZFm%2BrIvI7cqMLugQHrESpPQ94S%2F0%2FeUB8CDN%2BPv4nPgoi%2BkdVR6r%2Bvzx%2FXBmbHkZTu5CSmZQAejP%2B1k9%2BzTj5x5SZRXoDvOTbmK&X-Amz-Signature=8e4a07ac54b1931be2183642009a52fe12e5b1e35c72793d40e5e6d143bb9067&X-Amz-SignedHeaders=host&x-id=GetObject)
