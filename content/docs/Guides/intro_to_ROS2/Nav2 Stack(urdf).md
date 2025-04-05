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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSBLNJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiii75WVmQ8CPPSf3xyCfXwWZjWamSxZaYOaBiPEOxegIhAMiV22hi6%2BiaIq%2BjiDWpfCmFDUkMZHlxDE2zcJL8BQSgKv8DCCkQABoMNjM3NDIzMTgzODA1IgzjjsyENNGsEDqdFAUq3APV04kY9O7eP2P60Os%2Fz1ULPWpE5uyzDLD9Yo1BpWAfY3EdSIBEVJYRSo1cgvBd1KxGDyuz%2FsPkKRvlEOiNLSLAz%2BTdJuZAJmakUdTH%2FkWaAXK77558YRwN2KI8Bvz8o0g1Wdvt%2F5xS1330pQFStDhRKxnnhRfYEALGS6mg%2FPM%2FIfguIracWB6W%2FtTP%2Fbax%2BbsShRBJBiGZcN%2BsHZJoO8M1UdKDz%2FaL4GGVorORAHg34dnnwpQnQ95ouRjeX%2FUPbbrN52BMOdnZ63Ewr1bP5dHp3s4RjYpcaJNIDP7oGW3UXG3RAmyrjrLfXrmML6TLCfJXFzvr%2BGOYYzau7slNxhMIjQ7igbAW29VH4lqJBLkmpXpGyhfzCXqsxGIbZQ4bnkOImIjOKb%2BS7C6ze4isOLKL%2Bx%2BC9te5LuWJs2warbTObfD8hd0pjTOFhx6hfkRT67%2Blq69UVlpJxOI5dG7Ots72hwTKnXXmQkI3e%2FlhZCnGvxiW3bVcnyotcBGAawlvBsoP1ByQQ3y%2F44JrrcbqlcGZzIXOiGG9w1UDSwz8x7hnjXCui7hA5R7TRnRiya08VvULPFfIoOlETg6IQM7cjypBiGRjg3NwxrSb0NFRW8HMd7s8hgecynZ1AxkJHTDvu8O%2FBjqkAWQV5t029UKE9%2BwfZUIMYVUI4hpDmw%2BQ3SrOCD%2B2lZajaYaUKfrWuuTMKSO6p5FhK%2FdbKNJ8anWaKLi0TePNlXfPxq306ZngdOAC%2BF%2F49mkEc%2BAa5W7qk8F%2Blm5xWUhaK%2F%2F9OogjlpN6%2BdFQsk9dLfiHTE3b3PjIfFEK1KlXgy4OJFMnFRoB65hjEGuvMofyhBha%2BmmbFDBLJEReVNnpaV8tZofy&X-Amz-Signature=3054e832f521522d05c269d08ad7b9ed800e51b3110302d2a84e136c06c1bffa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSBLNJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiii75WVmQ8CPPSf3xyCfXwWZjWamSxZaYOaBiPEOxegIhAMiV22hi6%2BiaIq%2BjiDWpfCmFDUkMZHlxDE2zcJL8BQSgKv8DCCkQABoMNjM3NDIzMTgzODA1IgzjjsyENNGsEDqdFAUq3APV04kY9O7eP2P60Os%2Fz1ULPWpE5uyzDLD9Yo1BpWAfY3EdSIBEVJYRSo1cgvBd1KxGDyuz%2FsPkKRvlEOiNLSLAz%2BTdJuZAJmakUdTH%2FkWaAXK77558YRwN2KI8Bvz8o0g1Wdvt%2F5xS1330pQFStDhRKxnnhRfYEALGS6mg%2FPM%2FIfguIracWB6W%2FtTP%2Fbax%2BbsShRBJBiGZcN%2BsHZJoO8M1UdKDz%2FaL4GGVorORAHg34dnnwpQnQ95ouRjeX%2FUPbbrN52BMOdnZ63Ewr1bP5dHp3s4RjYpcaJNIDP7oGW3UXG3RAmyrjrLfXrmML6TLCfJXFzvr%2BGOYYzau7slNxhMIjQ7igbAW29VH4lqJBLkmpXpGyhfzCXqsxGIbZQ4bnkOImIjOKb%2BS7C6ze4isOLKL%2Bx%2BC9te5LuWJs2warbTObfD8hd0pjTOFhx6hfkRT67%2Blq69UVlpJxOI5dG7Ots72hwTKnXXmQkI3e%2FlhZCnGvxiW3bVcnyotcBGAawlvBsoP1ByQQ3y%2F44JrrcbqlcGZzIXOiGG9w1UDSwz8x7hnjXCui7hA5R7TRnRiya08VvULPFfIoOlETg6IQM7cjypBiGRjg3NwxrSb0NFRW8HMd7s8hgecynZ1AxkJHTDvu8O%2FBjqkAWQV5t029UKE9%2BwfZUIMYVUI4hpDmw%2BQ3SrOCD%2B2lZajaYaUKfrWuuTMKSO6p5FhK%2FdbKNJ8anWaKLi0TePNlXfPxq306ZngdOAC%2BF%2F49mkEc%2BAa5W7qk8F%2Blm5xWUhaK%2F%2F9OogjlpN6%2BdFQsk9dLfiHTE3b3PjIfFEK1KlXgy4OJFMnFRoB65hjEGuvMofyhBha%2BmmbFDBLJEReVNnpaV8tZofy&X-Amz-Signature=f8c7bc8eb762566fa762425d208c7f3c8ff6f08cd3149ded0202435b66ff03ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSBLNJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiii75WVmQ8CPPSf3xyCfXwWZjWamSxZaYOaBiPEOxegIhAMiV22hi6%2BiaIq%2BjiDWpfCmFDUkMZHlxDE2zcJL8BQSgKv8DCCkQABoMNjM3NDIzMTgzODA1IgzjjsyENNGsEDqdFAUq3APV04kY9O7eP2P60Os%2Fz1ULPWpE5uyzDLD9Yo1BpWAfY3EdSIBEVJYRSo1cgvBd1KxGDyuz%2FsPkKRvlEOiNLSLAz%2BTdJuZAJmakUdTH%2FkWaAXK77558YRwN2KI8Bvz8o0g1Wdvt%2F5xS1330pQFStDhRKxnnhRfYEALGS6mg%2FPM%2FIfguIracWB6W%2FtTP%2Fbax%2BbsShRBJBiGZcN%2BsHZJoO8M1UdKDz%2FaL4GGVorORAHg34dnnwpQnQ95ouRjeX%2FUPbbrN52BMOdnZ63Ewr1bP5dHp3s4RjYpcaJNIDP7oGW3UXG3RAmyrjrLfXrmML6TLCfJXFzvr%2BGOYYzau7slNxhMIjQ7igbAW29VH4lqJBLkmpXpGyhfzCXqsxGIbZQ4bnkOImIjOKb%2BS7C6ze4isOLKL%2Bx%2BC9te5LuWJs2warbTObfD8hd0pjTOFhx6hfkRT67%2Blq69UVlpJxOI5dG7Ots72hwTKnXXmQkI3e%2FlhZCnGvxiW3bVcnyotcBGAawlvBsoP1ByQQ3y%2F44JrrcbqlcGZzIXOiGG9w1UDSwz8x7hnjXCui7hA5R7TRnRiya08VvULPFfIoOlETg6IQM7cjypBiGRjg3NwxrSb0NFRW8HMd7s8hgecynZ1AxkJHTDvu8O%2FBjqkAWQV5t029UKE9%2BwfZUIMYVUI4hpDmw%2BQ3SrOCD%2B2lZajaYaUKfrWuuTMKSO6p5FhK%2FdbKNJ8anWaKLi0TePNlXfPxq306ZngdOAC%2BF%2F49mkEc%2BAa5W7qk8F%2Blm5xWUhaK%2F%2F9OogjlpN6%2BdFQsk9dLfiHTE3b3PjIfFEK1KlXgy4OJFMnFRoB65hjEGuvMofyhBha%2BmmbFDBLJEReVNnpaV8tZofy&X-Amz-Signature=50fb2045a9087fdcb08f6f488d3b78518adf82da663e19767a6beebd0960333c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSBLNJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiii75WVmQ8CPPSf3xyCfXwWZjWamSxZaYOaBiPEOxegIhAMiV22hi6%2BiaIq%2BjiDWpfCmFDUkMZHlxDE2zcJL8BQSgKv8DCCkQABoMNjM3NDIzMTgzODA1IgzjjsyENNGsEDqdFAUq3APV04kY9O7eP2P60Os%2Fz1ULPWpE5uyzDLD9Yo1BpWAfY3EdSIBEVJYRSo1cgvBd1KxGDyuz%2FsPkKRvlEOiNLSLAz%2BTdJuZAJmakUdTH%2FkWaAXK77558YRwN2KI8Bvz8o0g1Wdvt%2F5xS1330pQFStDhRKxnnhRfYEALGS6mg%2FPM%2FIfguIracWB6W%2FtTP%2Fbax%2BbsShRBJBiGZcN%2BsHZJoO8M1UdKDz%2FaL4GGVorORAHg34dnnwpQnQ95ouRjeX%2FUPbbrN52BMOdnZ63Ewr1bP5dHp3s4RjYpcaJNIDP7oGW3UXG3RAmyrjrLfXrmML6TLCfJXFzvr%2BGOYYzau7slNxhMIjQ7igbAW29VH4lqJBLkmpXpGyhfzCXqsxGIbZQ4bnkOImIjOKb%2BS7C6ze4isOLKL%2Bx%2BC9te5LuWJs2warbTObfD8hd0pjTOFhx6hfkRT67%2Blq69UVlpJxOI5dG7Ots72hwTKnXXmQkI3e%2FlhZCnGvxiW3bVcnyotcBGAawlvBsoP1ByQQ3y%2F44JrrcbqlcGZzIXOiGG9w1UDSwz8x7hnjXCui7hA5R7TRnRiya08VvULPFfIoOlETg6IQM7cjypBiGRjg3NwxrSb0NFRW8HMd7s8hgecynZ1AxkJHTDvu8O%2FBjqkAWQV5t029UKE9%2BwfZUIMYVUI4hpDmw%2BQ3SrOCD%2B2lZajaYaUKfrWuuTMKSO6p5FhK%2FdbKNJ8anWaKLi0TePNlXfPxq306ZngdOAC%2BF%2F49mkEc%2BAa5W7qk8F%2Blm5xWUhaK%2F%2F9OogjlpN6%2BdFQsk9dLfiHTE3b3PjIfFEK1KlXgy4OJFMnFRoB65hjEGuvMofyhBha%2BmmbFDBLJEReVNnpaV8tZofy&X-Amz-Signature=479e2ef9dac74711ec5f88a081a672c08a5aaed1be7c72ed209fd4f90de440dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSBLNJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiii75WVmQ8CPPSf3xyCfXwWZjWamSxZaYOaBiPEOxegIhAMiV22hi6%2BiaIq%2BjiDWpfCmFDUkMZHlxDE2zcJL8BQSgKv8DCCkQABoMNjM3NDIzMTgzODA1IgzjjsyENNGsEDqdFAUq3APV04kY9O7eP2P60Os%2Fz1ULPWpE5uyzDLD9Yo1BpWAfY3EdSIBEVJYRSo1cgvBd1KxGDyuz%2FsPkKRvlEOiNLSLAz%2BTdJuZAJmakUdTH%2FkWaAXK77558YRwN2KI8Bvz8o0g1Wdvt%2F5xS1330pQFStDhRKxnnhRfYEALGS6mg%2FPM%2FIfguIracWB6W%2FtTP%2Fbax%2BbsShRBJBiGZcN%2BsHZJoO8M1UdKDz%2FaL4GGVorORAHg34dnnwpQnQ95ouRjeX%2FUPbbrN52BMOdnZ63Ewr1bP5dHp3s4RjYpcaJNIDP7oGW3UXG3RAmyrjrLfXrmML6TLCfJXFzvr%2BGOYYzau7slNxhMIjQ7igbAW29VH4lqJBLkmpXpGyhfzCXqsxGIbZQ4bnkOImIjOKb%2BS7C6ze4isOLKL%2Bx%2BC9te5LuWJs2warbTObfD8hd0pjTOFhx6hfkRT67%2Blq69UVlpJxOI5dG7Ots72hwTKnXXmQkI3e%2FlhZCnGvxiW3bVcnyotcBGAawlvBsoP1ByQQ3y%2F44JrrcbqlcGZzIXOiGG9w1UDSwz8x7hnjXCui7hA5R7TRnRiya08VvULPFfIoOlETg6IQM7cjypBiGRjg3NwxrSb0NFRW8HMd7s8hgecynZ1AxkJHTDvu8O%2FBjqkAWQV5t029UKE9%2BwfZUIMYVUI4hpDmw%2BQ3SrOCD%2B2lZajaYaUKfrWuuTMKSO6p5FhK%2FdbKNJ8anWaKLi0TePNlXfPxq306ZngdOAC%2BF%2F49mkEc%2BAa5W7qk8F%2Blm5xWUhaK%2F%2F9OogjlpN6%2BdFQsk9dLfiHTE3b3PjIfFEK1KlXgy4OJFMnFRoB65hjEGuvMofyhBha%2BmmbFDBLJEReVNnpaV8tZofy&X-Amz-Signature=523c158e7bde67fbebecac75d8063f7b4f42c99846aff2cef56dc4b372cf5153&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSBLNJZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiii75WVmQ8CPPSf3xyCfXwWZjWamSxZaYOaBiPEOxegIhAMiV22hi6%2BiaIq%2BjiDWpfCmFDUkMZHlxDE2zcJL8BQSgKv8DCCkQABoMNjM3NDIzMTgzODA1IgzjjsyENNGsEDqdFAUq3APV04kY9O7eP2P60Os%2Fz1ULPWpE5uyzDLD9Yo1BpWAfY3EdSIBEVJYRSo1cgvBd1KxGDyuz%2FsPkKRvlEOiNLSLAz%2BTdJuZAJmakUdTH%2FkWaAXK77558YRwN2KI8Bvz8o0g1Wdvt%2F5xS1330pQFStDhRKxnnhRfYEALGS6mg%2FPM%2FIfguIracWB6W%2FtTP%2Fbax%2BbsShRBJBiGZcN%2BsHZJoO8M1UdKDz%2FaL4GGVorORAHg34dnnwpQnQ95ouRjeX%2FUPbbrN52BMOdnZ63Ewr1bP5dHp3s4RjYpcaJNIDP7oGW3UXG3RAmyrjrLfXrmML6TLCfJXFzvr%2BGOYYzau7slNxhMIjQ7igbAW29VH4lqJBLkmpXpGyhfzCXqsxGIbZQ4bnkOImIjOKb%2BS7C6ze4isOLKL%2Bx%2BC9te5LuWJs2warbTObfD8hd0pjTOFhx6hfkRT67%2Blq69UVlpJxOI5dG7Ots72hwTKnXXmQkI3e%2FlhZCnGvxiW3bVcnyotcBGAawlvBsoP1ByQQ3y%2F44JrrcbqlcGZzIXOiGG9w1UDSwz8x7hnjXCui7hA5R7TRnRiya08VvULPFfIoOlETg6IQM7cjypBiGRjg3NwxrSb0NFRW8HMd7s8hgecynZ1AxkJHTDvu8O%2FBjqkAWQV5t029UKE9%2BwfZUIMYVUI4hpDmw%2BQ3SrOCD%2B2lZajaYaUKfrWuuTMKSO6p5FhK%2FdbKNJ8anWaKLi0TePNlXfPxq306ZngdOAC%2BF%2F49mkEc%2BAa5W7qk8F%2Blm5xWUhaK%2F%2F9OogjlpN6%2BdFQsk9dLfiHTE3b3PjIfFEK1KlXgy4OJFMnFRoB65hjEGuvMofyhBha%2BmmbFDBLJEReVNnpaV8tZofy&X-Amz-Signature=6a92bb30486c35198b0ec565cc8ab9118fc257f77ebb309bf909119ff5d546b8&X-Amz-SignedHeaders=host&x-id=GetObject)
