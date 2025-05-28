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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=0b4d3489cefe2e6e69eb68fef466a0132f27bc7f7c1b81aabaf75bb0b3794111&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=4137e4d7853b5e9215853df0e2a3b4fd2868fcc4f76c7135746bf1337ea8c847&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=8766e7004c2ccf5c4333699f80ecf4161dcb9d2a4878bac6daee572baa701b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=8c3c2e106ddc9c1bbcc2e6ff5377e3e604811fe732001e99898343460cef3c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=7683a37be47c0095213aebb8e1c99a18bbc2acbe979d46dc151e6735080889f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=1b29e4015fbc17b4ea9410a60c8df7bffcb9171368ff8d81e30ecf232132ed2b&X-Amz-SignedHeaders=host&x-id=GetObject)
