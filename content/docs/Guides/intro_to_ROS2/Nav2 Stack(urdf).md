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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6544WXV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FmWTn3wYLVtUQkmyHGv3trycXMLWcKWsxpCPL9W9gAIgKiGNFrocRRVlYfgm7cIMzpZyjMNpuQ7qcKANiq%2FnRs4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIodEf0t%2BAhBSFRyZSrcA%2F8b1nqSDiNctojt02i%2FaCgMrHr5PoYkqBnBixLpgYFO1KujKHty6giEsr0bgRi3sa88kB8%2Bj%2Bsp5aWpI2Sw%2BPiquXzhl0rehFhdy9ceruR51ANEX1347M1wKKsTJGGAF%2Bci6FtvIhpFVbV%2FIfWim8VEfNkqvfXXdTPyPctv9XB0zGyyN%2BNMMnP0WEseIYTUYv2GVdXBe8CCtEEc%2Fev%2BEj3XQ%2Bqk8xHLIa2XoAPd5NjTAcT9ULi6aF1ckFWdkPUMlfYuKVzGnMTyXiOHOQnk2IV1Tgzsu3kat%2FBINz%2FHSDWkyQBdnqEXmmuNm8ZgJSu4fYJXd14VDR7rJdW44cqJ90IO3CdxmK1H926sdF8hatXiinIAO0hDVqfEiJrGX4j7CteIwpimMySNEs8%2FU23DUhAcy0Ynxw7J1s%2B57NrYuEQ2VEBASBjz1%2BrU7uf5vtabv6Ct9iiz10mJVgFCEyqMqVKeSDxhgPrbdW9%2B9vGsGDKKkqe2qlSHuDKJOMn3V3IN3TOdelQ5fxPX9wCjoRCwZhQHV7gWwfJaLKTRYCDcj1vQ6cRe79lsPRIJkTtc5%2Bi5UapYu2d0nuFBqDJOBRQ1CKnfn2s%2FFgcXgrySjziAhbTXBYbFCy4bY6UwxdPhMPbSrL0GOqUB9hQXgobfsWMxUzlVUFeMGx4YdEqUZ%2FMfw6hsR4qBMNejadBQRuyfqy%2FCsPOyLGjT3sThbiAqZ%2BJsWGKluazK0RoyjqaBFoN6mupdr431U8rV2V2FjetjBvirP4EFFjgLxvHyv00Td1JrtIJ5r63Kr8KyDkfc%2FeLil5az9MqZVThFLY3518hhD6Z23RbFfpdes2C%2B1JVCRc8e8CDZ2xAgEuI8Eab2&X-Amz-Signature=fad314a8998fd6e849d9dabe03bacb119676992990874bdc3b765bcd2e688b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6544WXV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FmWTn3wYLVtUQkmyHGv3trycXMLWcKWsxpCPL9W9gAIgKiGNFrocRRVlYfgm7cIMzpZyjMNpuQ7qcKANiq%2FnRs4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIodEf0t%2BAhBSFRyZSrcA%2F8b1nqSDiNctojt02i%2FaCgMrHr5PoYkqBnBixLpgYFO1KujKHty6giEsr0bgRi3sa88kB8%2Bj%2Bsp5aWpI2Sw%2BPiquXzhl0rehFhdy9ceruR51ANEX1347M1wKKsTJGGAF%2Bci6FtvIhpFVbV%2FIfWim8VEfNkqvfXXdTPyPctv9XB0zGyyN%2BNMMnP0WEseIYTUYv2GVdXBe8CCtEEc%2Fev%2BEj3XQ%2Bqk8xHLIa2XoAPd5NjTAcT9ULi6aF1ckFWdkPUMlfYuKVzGnMTyXiOHOQnk2IV1Tgzsu3kat%2FBINz%2FHSDWkyQBdnqEXmmuNm8ZgJSu4fYJXd14VDR7rJdW44cqJ90IO3CdxmK1H926sdF8hatXiinIAO0hDVqfEiJrGX4j7CteIwpimMySNEs8%2FU23DUhAcy0Ynxw7J1s%2B57NrYuEQ2VEBASBjz1%2BrU7uf5vtabv6Ct9iiz10mJVgFCEyqMqVKeSDxhgPrbdW9%2B9vGsGDKKkqe2qlSHuDKJOMn3V3IN3TOdelQ5fxPX9wCjoRCwZhQHV7gWwfJaLKTRYCDcj1vQ6cRe79lsPRIJkTtc5%2Bi5UapYu2d0nuFBqDJOBRQ1CKnfn2s%2FFgcXgrySjziAhbTXBYbFCy4bY6UwxdPhMPbSrL0GOqUB9hQXgobfsWMxUzlVUFeMGx4YdEqUZ%2FMfw6hsR4qBMNejadBQRuyfqy%2FCsPOyLGjT3sThbiAqZ%2BJsWGKluazK0RoyjqaBFoN6mupdr431U8rV2V2FjetjBvirP4EFFjgLxvHyv00Td1JrtIJ5r63Kr8KyDkfc%2FeLil5az9MqZVThFLY3518hhD6Z23RbFfpdes2C%2B1JVCRc8e8CDZ2xAgEuI8Eab2&X-Amz-Signature=5114c15924831e356ea8e16f6a62a470f75471cfc1f4e6e696b3dba0cc963d00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6544WXV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FmWTn3wYLVtUQkmyHGv3trycXMLWcKWsxpCPL9W9gAIgKiGNFrocRRVlYfgm7cIMzpZyjMNpuQ7qcKANiq%2FnRs4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIodEf0t%2BAhBSFRyZSrcA%2F8b1nqSDiNctojt02i%2FaCgMrHr5PoYkqBnBixLpgYFO1KujKHty6giEsr0bgRi3sa88kB8%2Bj%2Bsp5aWpI2Sw%2BPiquXzhl0rehFhdy9ceruR51ANEX1347M1wKKsTJGGAF%2Bci6FtvIhpFVbV%2FIfWim8VEfNkqvfXXdTPyPctv9XB0zGyyN%2BNMMnP0WEseIYTUYv2GVdXBe8CCtEEc%2Fev%2BEj3XQ%2Bqk8xHLIa2XoAPd5NjTAcT9ULi6aF1ckFWdkPUMlfYuKVzGnMTyXiOHOQnk2IV1Tgzsu3kat%2FBINz%2FHSDWkyQBdnqEXmmuNm8ZgJSu4fYJXd14VDR7rJdW44cqJ90IO3CdxmK1H926sdF8hatXiinIAO0hDVqfEiJrGX4j7CteIwpimMySNEs8%2FU23DUhAcy0Ynxw7J1s%2B57NrYuEQ2VEBASBjz1%2BrU7uf5vtabv6Ct9iiz10mJVgFCEyqMqVKeSDxhgPrbdW9%2B9vGsGDKKkqe2qlSHuDKJOMn3V3IN3TOdelQ5fxPX9wCjoRCwZhQHV7gWwfJaLKTRYCDcj1vQ6cRe79lsPRIJkTtc5%2Bi5UapYu2d0nuFBqDJOBRQ1CKnfn2s%2FFgcXgrySjziAhbTXBYbFCy4bY6UwxdPhMPbSrL0GOqUB9hQXgobfsWMxUzlVUFeMGx4YdEqUZ%2FMfw6hsR4qBMNejadBQRuyfqy%2FCsPOyLGjT3sThbiAqZ%2BJsWGKluazK0RoyjqaBFoN6mupdr431U8rV2V2FjetjBvirP4EFFjgLxvHyv00Td1JrtIJ5r63Kr8KyDkfc%2FeLil5az9MqZVThFLY3518hhD6Z23RbFfpdes2C%2B1JVCRc8e8CDZ2xAgEuI8Eab2&X-Amz-Signature=076ba8e9e09d25de6f1f6ce399adbb3d5467e4b61f5e2060e415da2a0ae78166&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6544WXV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FmWTn3wYLVtUQkmyHGv3trycXMLWcKWsxpCPL9W9gAIgKiGNFrocRRVlYfgm7cIMzpZyjMNpuQ7qcKANiq%2FnRs4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIodEf0t%2BAhBSFRyZSrcA%2F8b1nqSDiNctojt02i%2FaCgMrHr5PoYkqBnBixLpgYFO1KujKHty6giEsr0bgRi3sa88kB8%2Bj%2Bsp5aWpI2Sw%2BPiquXzhl0rehFhdy9ceruR51ANEX1347M1wKKsTJGGAF%2Bci6FtvIhpFVbV%2FIfWim8VEfNkqvfXXdTPyPctv9XB0zGyyN%2BNMMnP0WEseIYTUYv2GVdXBe8CCtEEc%2Fev%2BEj3XQ%2Bqk8xHLIa2XoAPd5NjTAcT9ULi6aF1ckFWdkPUMlfYuKVzGnMTyXiOHOQnk2IV1Tgzsu3kat%2FBINz%2FHSDWkyQBdnqEXmmuNm8ZgJSu4fYJXd14VDR7rJdW44cqJ90IO3CdxmK1H926sdF8hatXiinIAO0hDVqfEiJrGX4j7CteIwpimMySNEs8%2FU23DUhAcy0Ynxw7J1s%2B57NrYuEQ2VEBASBjz1%2BrU7uf5vtabv6Ct9iiz10mJVgFCEyqMqVKeSDxhgPrbdW9%2B9vGsGDKKkqe2qlSHuDKJOMn3V3IN3TOdelQ5fxPX9wCjoRCwZhQHV7gWwfJaLKTRYCDcj1vQ6cRe79lsPRIJkTtc5%2Bi5UapYu2d0nuFBqDJOBRQ1CKnfn2s%2FFgcXgrySjziAhbTXBYbFCy4bY6UwxdPhMPbSrL0GOqUB9hQXgobfsWMxUzlVUFeMGx4YdEqUZ%2FMfw6hsR4qBMNejadBQRuyfqy%2FCsPOyLGjT3sThbiAqZ%2BJsWGKluazK0RoyjqaBFoN6mupdr431U8rV2V2FjetjBvirP4EFFjgLxvHyv00Td1JrtIJ5r63Kr8KyDkfc%2FeLil5az9MqZVThFLY3518hhD6Z23RbFfpdes2C%2B1JVCRc8e8CDZ2xAgEuI8Eab2&X-Amz-Signature=00437bf359e797571ed9757ac128d3fe736e15d3454ff19e70fa1c3d035de63c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6544WXV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FmWTn3wYLVtUQkmyHGv3trycXMLWcKWsxpCPL9W9gAIgKiGNFrocRRVlYfgm7cIMzpZyjMNpuQ7qcKANiq%2FnRs4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIodEf0t%2BAhBSFRyZSrcA%2F8b1nqSDiNctojt02i%2FaCgMrHr5PoYkqBnBixLpgYFO1KujKHty6giEsr0bgRi3sa88kB8%2Bj%2Bsp5aWpI2Sw%2BPiquXzhl0rehFhdy9ceruR51ANEX1347M1wKKsTJGGAF%2Bci6FtvIhpFVbV%2FIfWim8VEfNkqvfXXdTPyPctv9XB0zGyyN%2BNMMnP0WEseIYTUYv2GVdXBe8CCtEEc%2Fev%2BEj3XQ%2Bqk8xHLIa2XoAPd5NjTAcT9ULi6aF1ckFWdkPUMlfYuKVzGnMTyXiOHOQnk2IV1Tgzsu3kat%2FBINz%2FHSDWkyQBdnqEXmmuNm8ZgJSu4fYJXd14VDR7rJdW44cqJ90IO3CdxmK1H926sdF8hatXiinIAO0hDVqfEiJrGX4j7CteIwpimMySNEs8%2FU23DUhAcy0Ynxw7J1s%2B57NrYuEQ2VEBASBjz1%2BrU7uf5vtabv6Ct9iiz10mJVgFCEyqMqVKeSDxhgPrbdW9%2B9vGsGDKKkqe2qlSHuDKJOMn3V3IN3TOdelQ5fxPX9wCjoRCwZhQHV7gWwfJaLKTRYCDcj1vQ6cRe79lsPRIJkTtc5%2Bi5UapYu2d0nuFBqDJOBRQ1CKnfn2s%2FFgcXgrySjziAhbTXBYbFCy4bY6UwxdPhMPbSrL0GOqUB9hQXgobfsWMxUzlVUFeMGx4YdEqUZ%2FMfw6hsR4qBMNejadBQRuyfqy%2FCsPOyLGjT3sThbiAqZ%2BJsWGKluazK0RoyjqaBFoN6mupdr431U8rV2V2FjetjBvirP4EFFjgLxvHyv00Td1JrtIJ5r63Kr8KyDkfc%2FeLil5az9MqZVThFLY3518hhD6Z23RbFfpdes2C%2B1JVCRc8e8CDZ2xAgEuI8Eab2&X-Amz-Signature=03b693dd0d7fb21c5be141caf941d48b4f0045bc2bccbebe82adb59e8e832804&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6544WXV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FmWTn3wYLVtUQkmyHGv3trycXMLWcKWsxpCPL9W9gAIgKiGNFrocRRVlYfgm7cIMzpZyjMNpuQ7qcKANiq%2FnRs4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIodEf0t%2BAhBSFRyZSrcA%2F8b1nqSDiNctojt02i%2FaCgMrHr5PoYkqBnBixLpgYFO1KujKHty6giEsr0bgRi3sa88kB8%2Bj%2Bsp5aWpI2Sw%2BPiquXzhl0rehFhdy9ceruR51ANEX1347M1wKKsTJGGAF%2Bci6FtvIhpFVbV%2FIfWim8VEfNkqvfXXdTPyPctv9XB0zGyyN%2BNMMnP0WEseIYTUYv2GVdXBe8CCtEEc%2Fev%2BEj3XQ%2Bqk8xHLIa2XoAPd5NjTAcT9ULi6aF1ckFWdkPUMlfYuKVzGnMTyXiOHOQnk2IV1Tgzsu3kat%2FBINz%2FHSDWkyQBdnqEXmmuNm8ZgJSu4fYJXd14VDR7rJdW44cqJ90IO3CdxmK1H926sdF8hatXiinIAO0hDVqfEiJrGX4j7CteIwpimMySNEs8%2FU23DUhAcy0Ynxw7J1s%2B57NrYuEQ2VEBASBjz1%2BrU7uf5vtabv6Ct9iiz10mJVgFCEyqMqVKeSDxhgPrbdW9%2B9vGsGDKKkqe2qlSHuDKJOMn3V3IN3TOdelQ5fxPX9wCjoRCwZhQHV7gWwfJaLKTRYCDcj1vQ6cRe79lsPRIJkTtc5%2Bi5UapYu2d0nuFBqDJOBRQ1CKnfn2s%2FFgcXgrySjziAhbTXBYbFCy4bY6UwxdPhMPbSrL0GOqUB9hQXgobfsWMxUzlVUFeMGx4YdEqUZ%2FMfw6hsR4qBMNejadBQRuyfqy%2FCsPOyLGjT3sThbiAqZ%2BJsWGKluazK0RoyjqaBFoN6mupdr431U8rV2V2FjetjBvirP4EFFjgLxvHyv00Td1JrtIJ5r63Kr8KyDkfc%2FeLil5az9MqZVThFLY3518hhD6Z23RbFfpdes2C%2B1JVCRc8e8CDZ2xAgEuI8Eab2&X-Amz-Signature=90f5d433b39496e01f579d937cb9382434e6445322bbd4b6724730db1354a712&X-Amz-SignedHeaders=host&x-id=GetObject)
