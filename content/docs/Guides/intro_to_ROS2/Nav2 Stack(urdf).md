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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=2541d0521fe368696b43688b7e4d9ec2a4b8d0cd152fe3011e387392bc73d90e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=5e979c067887f05e5c7e27ed822efb90de8635de29402e7febdac6b7842de0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=6073eee52162e3a225803d327fbfe7006002c156f6e20af5ee486ccc26356b08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=d13fef0ff692660d0023a6d76c9047a69e4ffa21027c2d8c5d175f110acfbe3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=6c1ec0f69437bfd2dfc017fe76be525fc016a7072468b50a992ce53017ddb37d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVL6YLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWLA5daY%2FWiN71hOSTVxZvP3%2Bcxgtj7%2BitohjmGF9cmAiBNBrzBflG9YLjV%2BNaj%2B57mEKFUYNsfDjVjXtv77bRV0yqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3829xOAeEwJ88L80KtwDC8LFli7ZR%2BkoZ62usbWGImQwSQ%2FLiXmdsiyoHIoqYbz8PJQ%2B0Yawn5ThJ4aVyN2BygEcK%2Bh5kVxsLnV%2FoDWF1q%2FxqQh6ETtVDMB5hOkwmEmncK2xDlQEzcn5NQYN%2FE1fIFd8HtVVZ13%2BVyszqE%2FFQq34qHdVwnxnbDMOPhET8EsFZHqMb09K3xc6v4x8I5%2FcNVNTOIUq%2FEDyI2C%2BaDi1Ai8UY%2BW1uEt3hk3fGfHrCBoRvCDh9SrTJi4KT6JV8fTGQ0na4%2FWtf3igQKl%2F%2BkHF2GhSXTtbJfJC4YiG%2FUSxg8T4hfBrwADigs69UwX6voX%2BD6r%2BxHXW%2FmjPLi8abVy2dJgILLksGwBB%2Fx5kNMuDcOL9fuBBkz%2FPSYzMDWnaABW5mwILqSGPZfqx64Q8wZNl8jNpxGEdTFLW07hKfmEYPGtM9%2FJ4cudps9JrUWrGxDXXKGYmhtLjqx0AqKNYzdgQSTIDhGq5h9PQjXA3Y61ygQQNAvInktjfPflLwdy4%2FM6Ki5govFwZj%2Fw8D2jQ2xBH5pjzeHhHNKsGx%2FtCLV5uG1fSHlPhCctX2xyaijkix%2FgoAi2W%2BjT1L%2BLB%2FJc1YfhJkGZoHA51ONG77%2BxO6%2Bk%2FomAvY%2FWMsqkDrGd2t3gw%2B97XwAY6pgHxRaUrfvHGa%2FyhzVyXMiLc8bMt93gaU9istfGGitRpD5S3pndHCjgXGyjY8GUxmTlIoHjR9md7ISHmsQrIPajNobO4%2FvX%2F0fz3FdBK8scaZuqB%2FJHZTIcgcbp0iQQd7Zlg6FzfH%2BcFTAT5p0466JkOE9oLbkiywniZ9UJrUWJl23yowjg9a%2Fhr4vZIgETnUimAJynauCCnrmUUuqixMrmscYI4dEeR&X-Amz-Signature=8bc1407258fea902984f2b739ca95d16f049421b8282051950f4e1496dcc62ac&X-Amz-SignedHeaders=host&x-id=GetObject)
