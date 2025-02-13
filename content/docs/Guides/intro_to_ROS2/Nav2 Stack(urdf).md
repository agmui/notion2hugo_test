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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FVOHED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOB8Hm%2B6lgB1EtplrmRgyWGlOta4IHndbspg443wuIFQIhALHWMBSy0m6j8WSt5l442cFTIDIKkGajTZR%2BXd%2BYcxHRKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQszvUtgPwS0SAFb4q3AN0xARjFPtHs4qSB8%2FsQhLjE9iHL477KM4tcawPSDHXLT2SXknucBIN%2FGLjEMJOATcpzd8Pi2saxAusOcz%2BLjLxMVk9ZA%2Bl8VN8zjmYQGO9C7NBPdmpfn3%2FbxyMLQDkLAj35kcwNRL0OfBd1rSuCpsm9oDK8TYbxFGwzo16lw0f%2BTWl5ZQhgaouuSjTQ%2BKnwbaYkYgm5fIt%2FJKx%2BxPcy8VkS4AnhEgmD2yxtq2wq3ZkEWqm21ex%2BYN09LqYkBqPYDmPC6mHKC4Wdz09x4K%2F%2BPi4IW65NhTrc9UJU%2BVvK%2BsP542g9fI2SV5grlDEQih1bfeqG%2B2U9b0dQyv37juDD4e5OSKq818vxwmCl7Eu3G%2Fu9HD%2FPaLF7E6%2F%2FRowfH%2FKemnIohDcLqlP89QgRTipUtGIS8tMmsJzjGB8KCCaj6QRMWYH%2BCXaahOwPyg7ORMFvvboRwfYvlMbtjvJakxZYkygXWdtjEVNZplZ32VcgvD%2BcO%2BjpapwT8fUtXP96krRqxSpVwJzPfKxAiQoaWT%2FY7sPI5K%2F5w9P4WXKnT07a2wCu9ZYHFBYgT2IoDh1%2FIo%2FqIn3AzYFhBPq9XXMcyalyHc1octTzRKuYbpZV%2F5m5Gg9C9MoR9CURvtU%2BJlNvzDqhre9BjqkAdjgmSr%2FZhqktsCBRt9mfdZJ%2F8UlPojyCH%2FB%2B7vDaMuGx0MWVlZb6vrHkPBOC1VnpZ%2FYlO%2Ftw6A0iFNWBAKtgOF15eeBzlTWSe1dyIvfisvO0ZH%2FxjjN%2FfHoxI%2B4EBGqQK6mLmeWTSMgLOk546fIOvXewMoT8G%2BR8Pi0%2FaA50QTmrNpKSDv378hRUA%2BQEx4P2wXx7yg1N5wRBV6Yy4Y5XvI2hQk3&X-Amz-Signature=a25ca8ca9e1099a5de87f4caf09993021b434532106eac25e311e447ed61b8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FVOHED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOB8Hm%2B6lgB1EtplrmRgyWGlOta4IHndbspg443wuIFQIhALHWMBSy0m6j8WSt5l442cFTIDIKkGajTZR%2BXd%2BYcxHRKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQszvUtgPwS0SAFb4q3AN0xARjFPtHs4qSB8%2FsQhLjE9iHL477KM4tcawPSDHXLT2SXknucBIN%2FGLjEMJOATcpzd8Pi2saxAusOcz%2BLjLxMVk9ZA%2Bl8VN8zjmYQGO9C7NBPdmpfn3%2FbxyMLQDkLAj35kcwNRL0OfBd1rSuCpsm9oDK8TYbxFGwzo16lw0f%2BTWl5ZQhgaouuSjTQ%2BKnwbaYkYgm5fIt%2FJKx%2BxPcy8VkS4AnhEgmD2yxtq2wq3ZkEWqm21ex%2BYN09LqYkBqPYDmPC6mHKC4Wdz09x4K%2F%2BPi4IW65NhTrc9UJU%2BVvK%2BsP542g9fI2SV5grlDEQih1bfeqG%2B2U9b0dQyv37juDD4e5OSKq818vxwmCl7Eu3G%2Fu9HD%2FPaLF7E6%2F%2FRowfH%2FKemnIohDcLqlP89QgRTipUtGIS8tMmsJzjGB8KCCaj6QRMWYH%2BCXaahOwPyg7ORMFvvboRwfYvlMbtjvJakxZYkygXWdtjEVNZplZ32VcgvD%2BcO%2BjpapwT8fUtXP96krRqxSpVwJzPfKxAiQoaWT%2FY7sPI5K%2F5w9P4WXKnT07a2wCu9ZYHFBYgT2IoDh1%2FIo%2FqIn3AzYFhBPq9XXMcyalyHc1octTzRKuYbpZV%2F5m5Gg9C9MoR9CURvtU%2BJlNvzDqhre9BjqkAdjgmSr%2FZhqktsCBRt9mfdZJ%2F8UlPojyCH%2FB%2B7vDaMuGx0MWVlZb6vrHkPBOC1VnpZ%2FYlO%2Ftw6A0iFNWBAKtgOF15eeBzlTWSe1dyIvfisvO0ZH%2FxjjN%2FfHoxI%2B4EBGqQK6mLmeWTSMgLOk546fIOvXewMoT8G%2BR8Pi0%2FaA50QTmrNpKSDv378hRUA%2BQEx4P2wXx7yg1N5wRBV6Yy4Y5XvI2hQk3&X-Amz-Signature=6745e0d3b074c23af8244fe79b84a256a6bc3f1f15a6bda9feabdf433b5b0bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FVOHED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOB8Hm%2B6lgB1EtplrmRgyWGlOta4IHndbspg443wuIFQIhALHWMBSy0m6j8WSt5l442cFTIDIKkGajTZR%2BXd%2BYcxHRKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQszvUtgPwS0SAFb4q3AN0xARjFPtHs4qSB8%2FsQhLjE9iHL477KM4tcawPSDHXLT2SXknucBIN%2FGLjEMJOATcpzd8Pi2saxAusOcz%2BLjLxMVk9ZA%2Bl8VN8zjmYQGO9C7NBPdmpfn3%2FbxyMLQDkLAj35kcwNRL0OfBd1rSuCpsm9oDK8TYbxFGwzo16lw0f%2BTWl5ZQhgaouuSjTQ%2BKnwbaYkYgm5fIt%2FJKx%2BxPcy8VkS4AnhEgmD2yxtq2wq3ZkEWqm21ex%2BYN09LqYkBqPYDmPC6mHKC4Wdz09x4K%2F%2BPi4IW65NhTrc9UJU%2BVvK%2BsP542g9fI2SV5grlDEQih1bfeqG%2B2U9b0dQyv37juDD4e5OSKq818vxwmCl7Eu3G%2Fu9HD%2FPaLF7E6%2F%2FRowfH%2FKemnIohDcLqlP89QgRTipUtGIS8tMmsJzjGB8KCCaj6QRMWYH%2BCXaahOwPyg7ORMFvvboRwfYvlMbtjvJakxZYkygXWdtjEVNZplZ32VcgvD%2BcO%2BjpapwT8fUtXP96krRqxSpVwJzPfKxAiQoaWT%2FY7sPI5K%2F5w9P4WXKnT07a2wCu9ZYHFBYgT2IoDh1%2FIo%2FqIn3AzYFhBPq9XXMcyalyHc1octTzRKuYbpZV%2F5m5Gg9C9MoR9CURvtU%2BJlNvzDqhre9BjqkAdjgmSr%2FZhqktsCBRt9mfdZJ%2F8UlPojyCH%2FB%2B7vDaMuGx0MWVlZb6vrHkPBOC1VnpZ%2FYlO%2Ftw6A0iFNWBAKtgOF15eeBzlTWSe1dyIvfisvO0ZH%2FxjjN%2FfHoxI%2B4EBGqQK6mLmeWTSMgLOk546fIOvXewMoT8G%2BR8Pi0%2FaA50QTmrNpKSDv378hRUA%2BQEx4P2wXx7yg1N5wRBV6Yy4Y5XvI2hQk3&X-Amz-Signature=ad1ae8b60f405904a3b97d36cc099a9291adda3e57059c493b8c432154def2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FVOHED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOB8Hm%2B6lgB1EtplrmRgyWGlOta4IHndbspg443wuIFQIhALHWMBSy0m6j8WSt5l442cFTIDIKkGajTZR%2BXd%2BYcxHRKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQszvUtgPwS0SAFb4q3AN0xARjFPtHs4qSB8%2FsQhLjE9iHL477KM4tcawPSDHXLT2SXknucBIN%2FGLjEMJOATcpzd8Pi2saxAusOcz%2BLjLxMVk9ZA%2Bl8VN8zjmYQGO9C7NBPdmpfn3%2FbxyMLQDkLAj35kcwNRL0OfBd1rSuCpsm9oDK8TYbxFGwzo16lw0f%2BTWl5ZQhgaouuSjTQ%2BKnwbaYkYgm5fIt%2FJKx%2BxPcy8VkS4AnhEgmD2yxtq2wq3ZkEWqm21ex%2BYN09LqYkBqPYDmPC6mHKC4Wdz09x4K%2F%2BPi4IW65NhTrc9UJU%2BVvK%2BsP542g9fI2SV5grlDEQih1bfeqG%2B2U9b0dQyv37juDD4e5OSKq818vxwmCl7Eu3G%2Fu9HD%2FPaLF7E6%2F%2FRowfH%2FKemnIohDcLqlP89QgRTipUtGIS8tMmsJzjGB8KCCaj6QRMWYH%2BCXaahOwPyg7ORMFvvboRwfYvlMbtjvJakxZYkygXWdtjEVNZplZ32VcgvD%2BcO%2BjpapwT8fUtXP96krRqxSpVwJzPfKxAiQoaWT%2FY7sPI5K%2F5w9P4WXKnT07a2wCu9ZYHFBYgT2IoDh1%2FIo%2FqIn3AzYFhBPq9XXMcyalyHc1octTzRKuYbpZV%2F5m5Gg9C9MoR9CURvtU%2BJlNvzDqhre9BjqkAdjgmSr%2FZhqktsCBRt9mfdZJ%2F8UlPojyCH%2FB%2B7vDaMuGx0MWVlZb6vrHkPBOC1VnpZ%2FYlO%2Ftw6A0iFNWBAKtgOF15eeBzlTWSe1dyIvfisvO0ZH%2FxjjN%2FfHoxI%2B4EBGqQK6mLmeWTSMgLOk546fIOvXewMoT8G%2BR8Pi0%2FaA50QTmrNpKSDv378hRUA%2BQEx4P2wXx7yg1N5wRBV6Yy4Y5XvI2hQk3&X-Amz-Signature=a59d3dd83760243b85e89756ccadcc6970385f6c36c9a55b131f6ca045da82fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FVOHED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOB8Hm%2B6lgB1EtplrmRgyWGlOta4IHndbspg443wuIFQIhALHWMBSy0m6j8WSt5l442cFTIDIKkGajTZR%2BXd%2BYcxHRKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQszvUtgPwS0SAFb4q3AN0xARjFPtHs4qSB8%2FsQhLjE9iHL477KM4tcawPSDHXLT2SXknucBIN%2FGLjEMJOATcpzd8Pi2saxAusOcz%2BLjLxMVk9ZA%2Bl8VN8zjmYQGO9C7NBPdmpfn3%2FbxyMLQDkLAj35kcwNRL0OfBd1rSuCpsm9oDK8TYbxFGwzo16lw0f%2BTWl5ZQhgaouuSjTQ%2BKnwbaYkYgm5fIt%2FJKx%2BxPcy8VkS4AnhEgmD2yxtq2wq3ZkEWqm21ex%2BYN09LqYkBqPYDmPC6mHKC4Wdz09x4K%2F%2BPi4IW65NhTrc9UJU%2BVvK%2BsP542g9fI2SV5grlDEQih1bfeqG%2B2U9b0dQyv37juDD4e5OSKq818vxwmCl7Eu3G%2Fu9HD%2FPaLF7E6%2F%2FRowfH%2FKemnIohDcLqlP89QgRTipUtGIS8tMmsJzjGB8KCCaj6QRMWYH%2BCXaahOwPyg7ORMFvvboRwfYvlMbtjvJakxZYkygXWdtjEVNZplZ32VcgvD%2BcO%2BjpapwT8fUtXP96krRqxSpVwJzPfKxAiQoaWT%2FY7sPI5K%2F5w9P4WXKnT07a2wCu9ZYHFBYgT2IoDh1%2FIo%2FqIn3AzYFhBPq9XXMcyalyHc1octTzRKuYbpZV%2F5m5Gg9C9MoR9CURvtU%2BJlNvzDqhre9BjqkAdjgmSr%2FZhqktsCBRt9mfdZJ%2F8UlPojyCH%2FB%2B7vDaMuGx0MWVlZb6vrHkPBOC1VnpZ%2FYlO%2Ftw6A0iFNWBAKtgOF15eeBzlTWSe1dyIvfisvO0ZH%2FxjjN%2FfHoxI%2B4EBGqQK6mLmeWTSMgLOk546fIOvXewMoT8G%2BR8Pi0%2FaA50QTmrNpKSDv378hRUA%2BQEx4P2wXx7yg1N5wRBV6Yy4Y5XvI2hQk3&X-Amz-Signature=1f0d51f529e4f6d7fef1f086ccd373d06b37a1a3f47cfb32d85d23514dae10f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6FVOHED%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOB8Hm%2B6lgB1EtplrmRgyWGlOta4IHndbspg443wuIFQIhALHWMBSy0m6j8WSt5l442cFTIDIKkGajTZR%2BXd%2BYcxHRKv8DCBMQABoMNjM3NDIzMTgzODA1IgyQszvUtgPwS0SAFb4q3AN0xARjFPtHs4qSB8%2FsQhLjE9iHL477KM4tcawPSDHXLT2SXknucBIN%2FGLjEMJOATcpzd8Pi2saxAusOcz%2BLjLxMVk9ZA%2Bl8VN8zjmYQGO9C7NBPdmpfn3%2FbxyMLQDkLAj35kcwNRL0OfBd1rSuCpsm9oDK8TYbxFGwzo16lw0f%2BTWl5ZQhgaouuSjTQ%2BKnwbaYkYgm5fIt%2FJKx%2BxPcy8VkS4AnhEgmD2yxtq2wq3ZkEWqm21ex%2BYN09LqYkBqPYDmPC6mHKC4Wdz09x4K%2F%2BPi4IW65NhTrc9UJU%2BVvK%2BsP542g9fI2SV5grlDEQih1bfeqG%2B2U9b0dQyv37juDD4e5OSKq818vxwmCl7Eu3G%2Fu9HD%2FPaLF7E6%2F%2FRowfH%2FKemnIohDcLqlP89QgRTipUtGIS8tMmsJzjGB8KCCaj6QRMWYH%2BCXaahOwPyg7ORMFvvboRwfYvlMbtjvJakxZYkygXWdtjEVNZplZ32VcgvD%2BcO%2BjpapwT8fUtXP96krRqxSpVwJzPfKxAiQoaWT%2FY7sPI5K%2F5w9P4WXKnT07a2wCu9ZYHFBYgT2IoDh1%2FIo%2FqIn3AzYFhBPq9XXMcyalyHc1octTzRKuYbpZV%2F5m5Gg9C9MoR9CURvtU%2BJlNvzDqhre9BjqkAdjgmSr%2FZhqktsCBRt9mfdZJ%2F8UlPojyCH%2FB%2B7vDaMuGx0MWVlZb6vrHkPBOC1VnpZ%2FYlO%2Ftw6A0iFNWBAKtgOF15eeBzlTWSe1dyIvfisvO0ZH%2FxjjN%2FfHoxI%2B4EBGqQK6mLmeWTSMgLOk546fIOvXewMoT8G%2BR8Pi0%2FaA50QTmrNpKSDv378hRUA%2BQEx4P2wXx7yg1N5wRBV6Yy4Y5XvI2hQk3&X-Amz-Signature=27454d9cafcca7eac2a576f309b2a4e6b2c5aeb58d32365936134a1fa66ffd1a&X-Amz-SignedHeaders=host&x-id=GetObject)
