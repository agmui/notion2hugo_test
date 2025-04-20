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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQKI6D%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA468RTxLUwx1tSr9ibar%2FoL%2FOTu9bHDH932XG%2F7Wpg6AiEA126CvxGWICbN%2FpHrZGDk3aY%2B%2FJxHGkkIlxjVfe9pfnQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmosUKZexjsBrSwryrcA4DoJRE7d1RMRH8yfWM8PaQoBozclCr8sz39uli6eSpDMVsDfzYIdLy5xQaVzn1hgXe1gExaBq%2FlnW8UVvpxg71mqN%2FqPB8bQJBAjP2kqH7yG2ApZ2LATGdIeFyCAle%2FLYRE6Xipj%2Bsofqr%2Bgy4H7CbysmUJ8qvBjfaOYFHlXwZlILv0TJwAAkHgycLrHoWZZyBtYTDVHq1jSL7x5khL6GwqYHu0xxz%2BNZMHUodWmU4AhwSH4YYrLU%2BMYS9l4jvbZxzko6OiM8qMneGIbuK7qbng2rCwUYTj1hvZvAaqd9rPNBGBnsFXLZ9UNsdRrWXefyv%2FTJEdcOHWBhu417OR1LcyfOl2EC%2F2yd1pYmZKDEqOMXJ57eNIcXibn2z%2BYhxEqE8zs3Yn5C2PoyOsUvlqholCEtGTE2W88x2M56BHu0Tsy0alJQvALTCYJvFPafjo86eXIcnAlOog%2FzplXwW0OCdwy1ngBypKECtfFY10bNnapSM4wufI9Si81Ww8OmZIaxce7yRmkV%2BLF2efNJ8AmxLTPulGehDqaKoPieupSTEd8vNpQPtst2ottBcJMr8QS%2B%2Br0HJv3neU8FFgng8L8wqjJcLhznXgQqdPEh9EEDMgTLQGxzZwc75bC1CpMK7Ck8AGOqUBa%2FGzMoP47Fkk5aop%2FkV9CBDkpbgD1QHMm8zozNGnvUXvjsC0Lx1o7UrFGO%2FUJEZ62bpciXWQlnjqbSNYKYmWVLjbXoqKDZy4jRcJaLX6s42MbgyfEFQZ5Ibo7RolTsoD76rp%2FHUUdnavTGgNm74F2vSa9BVM%2FcLRr0w2lEk7tAFVYhVh%2FNWlKzHLxKG7Vyk%2BUDZRZgazVajKzqPgnxklJEJDxdIx&X-Amz-Signature=580446b7666ca293c916b05a389eb83218d6e3143c0e53aa50e20c09e8030924&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQKI6D%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA468RTxLUwx1tSr9ibar%2FoL%2FOTu9bHDH932XG%2F7Wpg6AiEA126CvxGWICbN%2FpHrZGDk3aY%2B%2FJxHGkkIlxjVfe9pfnQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmosUKZexjsBrSwryrcA4DoJRE7d1RMRH8yfWM8PaQoBozclCr8sz39uli6eSpDMVsDfzYIdLy5xQaVzn1hgXe1gExaBq%2FlnW8UVvpxg71mqN%2FqPB8bQJBAjP2kqH7yG2ApZ2LATGdIeFyCAle%2FLYRE6Xipj%2Bsofqr%2Bgy4H7CbysmUJ8qvBjfaOYFHlXwZlILv0TJwAAkHgycLrHoWZZyBtYTDVHq1jSL7x5khL6GwqYHu0xxz%2BNZMHUodWmU4AhwSH4YYrLU%2BMYS9l4jvbZxzko6OiM8qMneGIbuK7qbng2rCwUYTj1hvZvAaqd9rPNBGBnsFXLZ9UNsdRrWXefyv%2FTJEdcOHWBhu417OR1LcyfOl2EC%2F2yd1pYmZKDEqOMXJ57eNIcXibn2z%2BYhxEqE8zs3Yn5C2PoyOsUvlqholCEtGTE2W88x2M56BHu0Tsy0alJQvALTCYJvFPafjo86eXIcnAlOog%2FzplXwW0OCdwy1ngBypKECtfFY10bNnapSM4wufI9Si81Ww8OmZIaxce7yRmkV%2BLF2efNJ8AmxLTPulGehDqaKoPieupSTEd8vNpQPtst2ottBcJMr8QS%2B%2Br0HJv3neU8FFgng8L8wqjJcLhznXgQqdPEh9EEDMgTLQGxzZwc75bC1CpMK7Ck8AGOqUBa%2FGzMoP47Fkk5aop%2FkV9CBDkpbgD1QHMm8zozNGnvUXvjsC0Lx1o7UrFGO%2FUJEZ62bpciXWQlnjqbSNYKYmWVLjbXoqKDZy4jRcJaLX6s42MbgyfEFQZ5Ibo7RolTsoD76rp%2FHUUdnavTGgNm74F2vSa9BVM%2FcLRr0w2lEk7tAFVYhVh%2FNWlKzHLxKG7Vyk%2BUDZRZgazVajKzqPgnxklJEJDxdIx&X-Amz-Signature=a15c90fa577a1a168e596e0bb8b9c0ce7764c5ca0d809cbe19ee2364de3a52e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQKI6D%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA468RTxLUwx1tSr9ibar%2FoL%2FOTu9bHDH932XG%2F7Wpg6AiEA126CvxGWICbN%2FpHrZGDk3aY%2B%2FJxHGkkIlxjVfe9pfnQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmosUKZexjsBrSwryrcA4DoJRE7d1RMRH8yfWM8PaQoBozclCr8sz39uli6eSpDMVsDfzYIdLy5xQaVzn1hgXe1gExaBq%2FlnW8UVvpxg71mqN%2FqPB8bQJBAjP2kqH7yG2ApZ2LATGdIeFyCAle%2FLYRE6Xipj%2Bsofqr%2Bgy4H7CbysmUJ8qvBjfaOYFHlXwZlILv0TJwAAkHgycLrHoWZZyBtYTDVHq1jSL7x5khL6GwqYHu0xxz%2BNZMHUodWmU4AhwSH4YYrLU%2BMYS9l4jvbZxzko6OiM8qMneGIbuK7qbng2rCwUYTj1hvZvAaqd9rPNBGBnsFXLZ9UNsdRrWXefyv%2FTJEdcOHWBhu417OR1LcyfOl2EC%2F2yd1pYmZKDEqOMXJ57eNIcXibn2z%2BYhxEqE8zs3Yn5C2PoyOsUvlqholCEtGTE2W88x2M56BHu0Tsy0alJQvALTCYJvFPafjo86eXIcnAlOog%2FzplXwW0OCdwy1ngBypKECtfFY10bNnapSM4wufI9Si81Ww8OmZIaxce7yRmkV%2BLF2efNJ8AmxLTPulGehDqaKoPieupSTEd8vNpQPtst2ottBcJMr8QS%2B%2Br0HJv3neU8FFgng8L8wqjJcLhznXgQqdPEh9EEDMgTLQGxzZwc75bC1CpMK7Ck8AGOqUBa%2FGzMoP47Fkk5aop%2FkV9CBDkpbgD1QHMm8zozNGnvUXvjsC0Lx1o7UrFGO%2FUJEZ62bpciXWQlnjqbSNYKYmWVLjbXoqKDZy4jRcJaLX6s42MbgyfEFQZ5Ibo7RolTsoD76rp%2FHUUdnavTGgNm74F2vSa9BVM%2FcLRr0w2lEk7tAFVYhVh%2FNWlKzHLxKG7Vyk%2BUDZRZgazVajKzqPgnxklJEJDxdIx&X-Amz-Signature=4ecae29e6900d224ac71532b8edafcafab85dcb94f589dc1cc872603193c0a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQKI6D%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA468RTxLUwx1tSr9ibar%2FoL%2FOTu9bHDH932XG%2F7Wpg6AiEA126CvxGWICbN%2FpHrZGDk3aY%2B%2FJxHGkkIlxjVfe9pfnQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmosUKZexjsBrSwryrcA4DoJRE7d1RMRH8yfWM8PaQoBozclCr8sz39uli6eSpDMVsDfzYIdLy5xQaVzn1hgXe1gExaBq%2FlnW8UVvpxg71mqN%2FqPB8bQJBAjP2kqH7yG2ApZ2LATGdIeFyCAle%2FLYRE6Xipj%2Bsofqr%2Bgy4H7CbysmUJ8qvBjfaOYFHlXwZlILv0TJwAAkHgycLrHoWZZyBtYTDVHq1jSL7x5khL6GwqYHu0xxz%2BNZMHUodWmU4AhwSH4YYrLU%2BMYS9l4jvbZxzko6OiM8qMneGIbuK7qbng2rCwUYTj1hvZvAaqd9rPNBGBnsFXLZ9UNsdRrWXefyv%2FTJEdcOHWBhu417OR1LcyfOl2EC%2F2yd1pYmZKDEqOMXJ57eNIcXibn2z%2BYhxEqE8zs3Yn5C2PoyOsUvlqholCEtGTE2W88x2M56BHu0Tsy0alJQvALTCYJvFPafjo86eXIcnAlOog%2FzplXwW0OCdwy1ngBypKECtfFY10bNnapSM4wufI9Si81Ww8OmZIaxce7yRmkV%2BLF2efNJ8AmxLTPulGehDqaKoPieupSTEd8vNpQPtst2ottBcJMr8QS%2B%2Br0HJv3neU8FFgng8L8wqjJcLhznXgQqdPEh9EEDMgTLQGxzZwc75bC1CpMK7Ck8AGOqUBa%2FGzMoP47Fkk5aop%2FkV9CBDkpbgD1QHMm8zozNGnvUXvjsC0Lx1o7UrFGO%2FUJEZ62bpciXWQlnjqbSNYKYmWVLjbXoqKDZy4jRcJaLX6s42MbgyfEFQZ5Ibo7RolTsoD76rp%2FHUUdnavTGgNm74F2vSa9BVM%2FcLRr0w2lEk7tAFVYhVh%2FNWlKzHLxKG7Vyk%2BUDZRZgazVajKzqPgnxklJEJDxdIx&X-Amz-Signature=f90fb21418ec4859bb303167146ff20916dea1f287c863a63ed69be2390b219c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQKI6D%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA468RTxLUwx1tSr9ibar%2FoL%2FOTu9bHDH932XG%2F7Wpg6AiEA126CvxGWICbN%2FpHrZGDk3aY%2B%2FJxHGkkIlxjVfe9pfnQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmosUKZexjsBrSwryrcA4DoJRE7d1RMRH8yfWM8PaQoBozclCr8sz39uli6eSpDMVsDfzYIdLy5xQaVzn1hgXe1gExaBq%2FlnW8UVvpxg71mqN%2FqPB8bQJBAjP2kqH7yG2ApZ2LATGdIeFyCAle%2FLYRE6Xipj%2Bsofqr%2Bgy4H7CbysmUJ8qvBjfaOYFHlXwZlILv0TJwAAkHgycLrHoWZZyBtYTDVHq1jSL7x5khL6GwqYHu0xxz%2BNZMHUodWmU4AhwSH4YYrLU%2BMYS9l4jvbZxzko6OiM8qMneGIbuK7qbng2rCwUYTj1hvZvAaqd9rPNBGBnsFXLZ9UNsdRrWXefyv%2FTJEdcOHWBhu417OR1LcyfOl2EC%2F2yd1pYmZKDEqOMXJ57eNIcXibn2z%2BYhxEqE8zs3Yn5C2PoyOsUvlqholCEtGTE2W88x2M56BHu0Tsy0alJQvALTCYJvFPafjo86eXIcnAlOog%2FzplXwW0OCdwy1ngBypKECtfFY10bNnapSM4wufI9Si81Ww8OmZIaxce7yRmkV%2BLF2efNJ8AmxLTPulGehDqaKoPieupSTEd8vNpQPtst2ottBcJMr8QS%2B%2Br0HJv3neU8FFgng8L8wqjJcLhznXgQqdPEh9EEDMgTLQGxzZwc75bC1CpMK7Ck8AGOqUBa%2FGzMoP47Fkk5aop%2FkV9CBDkpbgD1QHMm8zozNGnvUXvjsC0Lx1o7UrFGO%2FUJEZ62bpciXWQlnjqbSNYKYmWVLjbXoqKDZy4jRcJaLX6s42MbgyfEFQZ5Ibo7RolTsoD76rp%2FHUUdnavTGgNm74F2vSa9BVM%2FcLRr0w2lEk7tAFVYhVh%2FNWlKzHLxKG7Vyk%2BUDZRZgazVajKzqPgnxklJEJDxdIx&X-Amz-Signature=2ee806a31263d4ede2b97cde2afdcc8eceafe111b49f5fdfa4c9ad3ac28fddc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQQKI6D%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA468RTxLUwx1tSr9ibar%2FoL%2FOTu9bHDH932XG%2F7Wpg6AiEA126CvxGWICbN%2FpHrZGDk3aY%2B%2FJxHGkkIlxjVfe9pfnQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmosUKZexjsBrSwryrcA4DoJRE7d1RMRH8yfWM8PaQoBozclCr8sz39uli6eSpDMVsDfzYIdLy5xQaVzn1hgXe1gExaBq%2FlnW8UVvpxg71mqN%2FqPB8bQJBAjP2kqH7yG2ApZ2LATGdIeFyCAle%2FLYRE6Xipj%2Bsofqr%2Bgy4H7CbysmUJ8qvBjfaOYFHlXwZlILv0TJwAAkHgycLrHoWZZyBtYTDVHq1jSL7x5khL6GwqYHu0xxz%2BNZMHUodWmU4AhwSH4YYrLU%2BMYS9l4jvbZxzko6OiM8qMneGIbuK7qbng2rCwUYTj1hvZvAaqd9rPNBGBnsFXLZ9UNsdRrWXefyv%2FTJEdcOHWBhu417OR1LcyfOl2EC%2F2yd1pYmZKDEqOMXJ57eNIcXibn2z%2BYhxEqE8zs3Yn5C2PoyOsUvlqholCEtGTE2W88x2M56BHu0Tsy0alJQvALTCYJvFPafjo86eXIcnAlOog%2FzplXwW0OCdwy1ngBypKECtfFY10bNnapSM4wufI9Si81Ww8OmZIaxce7yRmkV%2BLF2efNJ8AmxLTPulGehDqaKoPieupSTEd8vNpQPtst2ottBcJMr8QS%2B%2Br0HJv3neU8FFgng8L8wqjJcLhznXgQqdPEh9EEDMgTLQGxzZwc75bC1CpMK7Ck8AGOqUBa%2FGzMoP47Fkk5aop%2FkV9CBDkpbgD1QHMm8zozNGnvUXvjsC0Lx1o7UrFGO%2FUJEZ62bpciXWQlnjqbSNYKYmWVLjbXoqKDZy4jRcJaLX6s42MbgyfEFQZ5Ibo7RolTsoD76rp%2FHUUdnavTGgNm74F2vSa9BVM%2FcLRr0w2lEk7tAFVYhVh%2FNWlKzHLxKG7Vyk%2BUDZRZgazVajKzqPgnxklJEJDxdIx&X-Amz-Signature=6dce54a182df74c3a8f039ef30596ee44ff8e510e292df334ca059263ec69af3&X-Amz-SignedHeaders=host&x-id=GetObject)
