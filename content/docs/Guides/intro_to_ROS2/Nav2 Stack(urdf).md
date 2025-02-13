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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQHVTOK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG0OfVCKo3c5sekzr%2Fgs6S9PS%2BZfdq%2F%2BCK3enL9Ql6iAiAD%2FochDelxr2im59u9ggwMMMaZLQEH4IUjjzgDkqOvZir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMzSj9nBsWkmKRmbbQKtwDrgROlDRcyYgOLfdki4CMUyAIJ0CsUjHpWxi1sp6haTgA0VUrKj2S8vUIoG3S1mwRJd6ZJZDJ%2Fldg2qNe%2BsfYQbCaHImO77x1xSvxoMSs3gA24UzKRyfzy3nsc%2BA3%2BRbO%2FsOBnuiL0hUUSDcBmhYqZbai7nvIC3EPRJwBKj6HoLM0hF2IbcHdikMScBULoprqqvYHGl1C%2FntXsHbMa4zzpcm0luNZkpf467d9cCiSbXhAcfrFd%2BQcquM09pamAvKLMxKXyNRfmsjwLWjXxUAG1NE6JIdKSpnrJdM%2FrrwkdZ%2FHB1kRKFlQoQ49RuVLWek%2Btxtyp4rEMsywhgb8dPIokQ7W41mIWNSZd9MYJE9fqfS3Hwgfgi%2BhDCeF9B%2FHsqvrErxrrRv8KZlRRdT6gHI%2BUy3eLXVjzSReuzLgJggesaYMM%2FhL%2F26p9quT6BF31ES9bG1UoeAMXEET%2FjHWHiDYow9ScPU2qMl4vc5zBqVyQqyTn6CJxfdN3y%2Fq9C8imzawBg0gxM%2F42gzRs3VIJe0h1k%2FU0wtFlJoC5JWA8BlLDWzcX8Aye%2FvTNR1YZ7QkU7I%2FAo1xqXUyKkfiRpWa3lQ443TQDcgRMKKiCLpvK3fe1XSOnuXwpLNKyyt7YbEwgr%2B4vQY6pgFa7J7Ndg8CWdootUTnGupJCABq9fduwoyAmNvRWo2YhMIn5OdE0rWxPNZy2oXetDVFrncETxlLDaw7eAp1IvXgo9T4ouxdmgnrmpy7COMOpb%2B0%2F%2Bx4pGbHDbZtGcUwbPO5o8X1vFAkcY42ClNIn%2B5H8P9F39VprS3Ht6ddAb42j8NaEyYQfp0CYFS5spJGHth%2FdLYTD1mMtXocErwHkr06td%2BGnR1n&X-Amz-Signature=1a75e3f15d66404333257170fd39d3ee2d5fe49f143987e456f22b7eab33c362&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQHVTOK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG0OfVCKo3c5sekzr%2Fgs6S9PS%2BZfdq%2F%2BCK3enL9Ql6iAiAD%2FochDelxr2im59u9ggwMMMaZLQEH4IUjjzgDkqOvZir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMzSj9nBsWkmKRmbbQKtwDrgROlDRcyYgOLfdki4CMUyAIJ0CsUjHpWxi1sp6haTgA0VUrKj2S8vUIoG3S1mwRJd6ZJZDJ%2Fldg2qNe%2BsfYQbCaHImO77x1xSvxoMSs3gA24UzKRyfzy3nsc%2BA3%2BRbO%2FsOBnuiL0hUUSDcBmhYqZbai7nvIC3EPRJwBKj6HoLM0hF2IbcHdikMScBULoprqqvYHGl1C%2FntXsHbMa4zzpcm0luNZkpf467d9cCiSbXhAcfrFd%2BQcquM09pamAvKLMxKXyNRfmsjwLWjXxUAG1NE6JIdKSpnrJdM%2FrrwkdZ%2FHB1kRKFlQoQ49RuVLWek%2Btxtyp4rEMsywhgb8dPIokQ7W41mIWNSZd9MYJE9fqfS3Hwgfgi%2BhDCeF9B%2FHsqvrErxrrRv8KZlRRdT6gHI%2BUy3eLXVjzSReuzLgJggesaYMM%2FhL%2F26p9quT6BF31ES9bG1UoeAMXEET%2FjHWHiDYow9ScPU2qMl4vc5zBqVyQqyTn6CJxfdN3y%2Fq9C8imzawBg0gxM%2F42gzRs3VIJe0h1k%2FU0wtFlJoC5JWA8BlLDWzcX8Aye%2FvTNR1YZ7QkU7I%2FAo1xqXUyKkfiRpWa3lQ443TQDcgRMKKiCLpvK3fe1XSOnuXwpLNKyyt7YbEwgr%2B4vQY6pgFa7J7Ndg8CWdootUTnGupJCABq9fduwoyAmNvRWo2YhMIn5OdE0rWxPNZy2oXetDVFrncETxlLDaw7eAp1IvXgo9T4ouxdmgnrmpy7COMOpb%2B0%2F%2Bx4pGbHDbZtGcUwbPO5o8X1vFAkcY42ClNIn%2B5H8P9F39VprS3Ht6ddAb42j8NaEyYQfp0CYFS5spJGHth%2FdLYTD1mMtXocErwHkr06td%2BGnR1n&X-Amz-Signature=bfbace1d13c8497b909c34288cd358f55a3a330f67be568ebebef62d1801bc5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQHVTOK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG0OfVCKo3c5sekzr%2Fgs6S9PS%2BZfdq%2F%2BCK3enL9Ql6iAiAD%2FochDelxr2im59u9ggwMMMaZLQEH4IUjjzgDkqOvZir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMzSj9nBsWkmKRmbbQKtwDrgROlDRcyYgOLfdki4CMUyAIJ0CsUjHpWxi1sp6haTgA0VUrKj2S8vUIoG3S1mwRJd6ZJZDJ%2Fldg2qNe%2BsfYQbCaHImO77x1xSvxoMSs3gA24UzKRyfzy3nsc%2BA3%2BRbO%2FsOBnuiL0hUUSDcBmhYqZbai7nvIC3EPRJwBKj6HoLM0hF2IbcHdikMScBULoprqqvYHGl1C%2FntXsHbMa4zzpcm0luNZkpf467d9cCiSbXhAcfrFd%2BQcquM09pamAvKLMxKXyNRfmsjwLWjXxUAG1NE6JIdKSpnrJdM%2FrrwkdZ%2FHB1kRKFlQoQ49RuVLWek%2Btxtyp4rEMsywhgb8dPIokQ7W41mIWNSZd9MYJE9fqfS3Hwgfgi%2BhDCeF9B%2FHsqvrErxrrRv8KZlRRdT6gHI%2BUy3eLXVjzSReuzLgJggesaYMM%2FhL%2F26p9quT6BF31ES9bG1UoeAMXEET%2FjHWHiDYow9ScPU2qMl4vc5zBqVyQqyTn6CJxfdN3y%2Fq9C8imzawBg0gxM%2F42gzRs3VIJe0h1k%2FU0wtFlJoC5JWA8BlLDWzcX8Aye%2FvTNR1YZ7QkU7I%2FAo1xqXUyKkfiRpWa3lQ443TQDcgRMKKiCLpvK3fe1XSOnuXwpLNKyyt7YbEwgr%2B4vQY6pgFa7J7Ndg8CWdootUTnGupJCABq9fduwoyAmNvRWo2YhMIn5OdE0rWxPNZy2oXetDVFrncETxlLDaw7eAp1IvXgo9T4ouxdmgnrmpy7COMOpb%2B0%2F%2Bx4pGbHDbZtGcUwbPO5o8X1vFAkcY42ClNIn%2B5H8P9F39VprS3Ht6ddAb42j8NaEyYQfp0CYFS5spJGHth%2FdLYTD1mMtXocErwHkr06td%2BGnR1n&X-Amz-Signature=24a5f91c3a5e9afaa739fb1fe1d96b20797c39d33924593da60aedb7851e353e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQHVTOK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG0OfVCKo3c5sekzr%2Fgs6S9PS%2BZfdq%2F%2BCK3enL9Ql6iAiAD%2FochDelxr2im59u9ggwMMMaZLQEH4IUjjzgDkqOvZir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMzSj9nBsWkmKRmbbQKtwDrgROlDRcyYgOLfdki4CMUyAIJ0CsUjHpWxi1sp6haTgA0VUrKj2S8vUIoG3S1mwRJd6ZJZDJ%2Fldg2qNe%2BsfYQbCaHImO77x1xSvxoMSs3gA24UzKRyfzy3nsc%2BA3%2BRbO%2FsOBnuiL0hUUSDcBmhYqZbai7nvIC3EPRJwBKj6HoLM0hF2IbcHdikMScBULoprqqvYHGl1C%2FntXsHbMa4zzpcm0luNZkpf467d9cCiSbXhAcfrFd%2BQcquM09pamAvKLMxKXyNRfmsjwLWjXxUAG1NE6JIdKSpnrJdM%2FrrwkdZ%2FHB1kRKFlQoQ49RuVLWek%2Btxtyp4rEMsywhgb8dPIokQ7W41mIWNSZd9MYJE9fqfS3Hwgfgi%2BhDCeF9B%2FHsqvrErxrrRv8KZlRRdT6gHI%2BUy3eLXVjzSReuzLgJggesaYMM%2FhL%2F26p9quT6BF31ES9bG1UoeAMXEET%2FjHWHiDYow9ScPU2qMl4vc5zBqVyQqyTn6CJxfdN3y%2Fq9C8imzawBg0gxM%2F42gzRs3VIJe0h1k%2FU0wtFlJoC5JWA8BlLDWzcX8Aye%2FvTNR1YZ7QkU7I%2FAo1xqXUyKkfiRpWa3lQ443TQDcgRMKKiCLpvK3fe1XSOnuXwpLNKyyt7YbEwgr%2B4vQY6pgFa7J7Ndg8CWdootUTnGupJCABq9fduwoyAmNvRWo2YhMIn5OdE0rWxPNZy2oXetDVFrncETxlLDaw7eAp1IvXgo9T4ouxdmgnrmpy7COMOpb%2B0%2F%2Bx4pGbHDbZtGcUwbPO5o8X1vFAkcY42ClNIn%2B5H8P9F39VprS3Ht6ddAb42j8NaEyYQfp0CYFS5spJGHth%2FdLYTD1mMtXocErwHkr06td%2BGnR1n&X-Amz-Signature=6ad81b08e27c5f2dc10ad2c946cfee0de4df39c7f9b5e9dd3b237963d14e4c64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQHVTOK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG0OfVCKo3c5sekzr%2Fgs6S9PS%2BZfdq%2F%2BCK3enL9Ql6iAiAD%2FochDelxr2im59u9ggwMMMaZLQEH4IUjjzgDkqOvZir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMzSj9nBsWkmKRmbbQKtwDrgROlDRcyYgOLfdki4CMUyAIJ0CsUjHpWxi1sp6haTgA0VUrKj2S8vUIoG3S1mwRJd6ZJZDJ%2Fldg2qNe%2BsfYQbCaHImO77x1xSvxoMSs3gA24UzKRyfzy3nsc%2BA3%2BRbO%2FsOBnuiL0hUUSDcBmhYqZbai7nvIC3EPRJwBKj6HoLM0hF2IbcHdikMScBULoprqqvYHGl1C%2FntXsHbMa4zzpcm0luNZkpf467d9cCiSbXhAcfrFd%2BQcquM09pamAvKLMxKXyNRfmsjwLWjXxUAG1NE6JIdKSpnrJdM%2FrrwkdZ%2FHB1kRKFlQoQ49RuVLWek%2Btxtyp4rEMsywhgb8dPIokQ7W41mIWNSZd9MYJE9fqfS3Hwgfgi%2BhDCeF9B%2FHsqvrErxrrRv8KZlRRdT6gHI%2BUy3eLXVjzSReuzLgJggesaYMM%2FhL%2F26p9quT6BF31ES9bG1UoeAMXEET%2FjHWHiDYow9ScPU2qMl4vc5zBqVyQqyTn6CJxfdN3y%2Fq9C8imzawBg0gxM%2F42gzRs3VIJe0h1k%2FU0wtFlJoC5JWA8BlLDWzcX8Aye%2FvTNR1YZ7QkU7I%2FAo1xqXUyKkfiRpWa3lQ443TQDcgRMKKiCLpvK3fe1XSOnuXwpLNKyyt7YbEwgr%2B4vQY6pgFa7J7Ndg8CWdootUTnGupJCABq9fduwoyAmNvRWo2YhMIn5OdE0rWxPNZy2oXetDVFrncETxlLDaw7eAp1IvXgo9T4ouxdmgnrmpy7COMOpb%2B0%2F%2Bx4pGbHDbZtGcUwbPO5o8X1vFAkcY42ClNIn%2B5H8P9F39VprS3Ht6ddAb42j8NaEyYQfp0CYFS5spJGHth%2FdLYTD1mMtXocErwHkr06td%2BGnR1n&X-Amz-Signature=8f49cdd8110e51e40671d0da4e325e3618425697837b96f18702cdae01d8cfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQHVTOK3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG0OfVCKo3c5sekzr%2Fgs6S9PS%2BZfdq%2F%2BCK3enL9Ql6iAiAD%2FochDelxr2im59u9ggwMMMaZLQEH4IUjjzgDkqOvZir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMzSj9nBsWkmKRmbbQKtwDrgROlDRcyYgOLfdki4CMUyAIJ0CsUjHpWxi1sp6haTgA0VUrKj2S8vUIoG3S1mwRJd6ZJZDJ%2Fldg2qNe%2BsfYQbCaHImO77x1xSvxoMSs3gA24UzKRyfzy3nsc%2BA3%2BRbO%2FsOBnuiL0hUUSDcBmhYqZbai7nvIC3EPRJwBKj6HoLM0hF2IbcHdikMScBULoprqqvYHGl1C%2FntXsHbMa4zzpcm0luNZkpf467d9cCiSbXhAcfrFd%2BQcquM09pamAvKLMxKXyNRfmsjwLWjXxUAG1NE6JIdKSpnrJdM%2FrrwkdZ%2FHB1kRKFlQoQ49RuVLWek%2Btxtyp4rEMsywhgb8dPIokQ7W41mIWNSZd9MYJE9fqfS3Hwgfgi%2BhDCeF9B%2FHsqvrErxrrRv8KZlRRdT6gHI%2BUy3eLXVjzSReuzLgJggesaYMM%2FhL%2F26p9quT6BF31ES9bG1UoeAMXEET%2FjHWHiDYow9ScPU2qMl4vc5zBqVyQqyTn6CJxfdN3y%2Fq9C8imzawBg0gxM%2F42gzRs3VIJe0h1k%2FU0wtFlJoC5JWA8BlLDWzcX8Aye%2FvTNR1YZ7QkU7I%2FAo1xqXUyKkfiRpWa3lQ443TQDcgRMKKiCLpvK3fe1XSOnuXwpLNKyyt7YbEwgr%2B4vQY6pgFa7J7Ndg8CWdootUTnGupJCABq9fduwoyAmNvRWo2YhMIn5OdE0rWxPNZy2oXetDVFrncETxlLDaw7eAp1IvXgo9T4ouxdmgnrmpy7COMOpb%2B0%2F%2Bx4pGbHDbZtGcUwbPO5o8X1vFAkcY42ClNIn%2B5H8P9F39VprS3Ht6ddAb42j8NaEyYQfp0CYFS5spJGHth%2FdLYTD1mMtXocErwHkr06td%2BGnR1n&X-Amz-Signature=2aa942fa93ef1e0ae96bddd71c244c8f7bb815916b1fbdb4ce8e7977d0290ef1&X-Amz-SignedHeaders=host&x-id=GetObject)
