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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=23370e33f4b5dfae4dced17f6530907795871cfe47ff42021690d736d2eec827&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=813160a7ecee41f15602c329e69b117483ca43bd191cfbd028082c3c4594db59&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=f73ee2f0809fae4ad1e9a87dd85745dbea9b4783681fb539c290e0b6ed9954a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=d3247a2cffa26677df540611430ee8f040ef54118ab78e431a0085e3b63f6aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=024bc531b955850f4759c70b43de0eebfb62f75a7404ed9871351f8779709cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=d84877cb22696e646390d197977e5b8f75841e48f6cf1e334d89a3ca84f885e9&X-Amz-SignedHeaders=host&x-id=GetObject)
