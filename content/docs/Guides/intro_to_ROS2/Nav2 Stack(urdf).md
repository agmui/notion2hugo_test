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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBLGXRM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCfwjm2%2FxDzlYiL%2F4dF52Ceh%2FTwV6WM2MXIXameK7I5FwIga9SEr0uJpOLsmKKtyAAFWyVghyYwBSHHiqoT4i3f5QkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoctrSA%2BntZKQjOrCrcA%2BjnIlnCAqnHb9FYeEmioB4kUSGaksSBq69rrgHZqLTONqVymkDPfk8X5lkaRb%2Br86dshsfQHTvaCz%2FQteURzRMTOsG6%2FIzHY71po8vIPUfcn8zh96x23beYYJTTBuH0VQ4c3s52Pl4HlL6AX1Lrv1RpSIzmvlKFpNiR3%2FGnOPZuQbcZE4z2Ns0Krskgt5ywgPgdueBwIErszjCFocts6hCxmYbfdyjzCxW9UJja6E0qYDMHAH%2BvC4lwG0xc5SwTCBoJ%2FtDr8l3LvJH0ZM%2FPwIN1kbvsN6k8XAoHv2snNga9pF8yW50QtLcuzdhYsTM06aGsux3c%2F1Luf%2B5Dx2zAYpfIytjltpwMyXdQZYI5eE7%2B9OkwwoT16z5DxWMMxuUzFaGd8eABbJIgsiJJruPI9yOoqCQukd8fPspfOc%2BIitDoMABtMDvkqezkg%2BBM9q1TicRT9PsdTQNwFHZL1%2FHx4q7b9Wa4OBwgUZnxzyDWFG1uItKoLrpvu9GTQPq5%2F1QSBaGcwbHav7DVE8mV8guAZMMvQ94aG0fglGhufcjj4vTKY3g5ApZ7fw1INnqklIEFZU8PnpbLr%2B%2BSUE8NuUSd9YSA%2Fgw5hYXC3dHFg7oOHLGtQwWklTyXJvsXZY5tMNOjksAGOqUBvuL5WW4skkd9YdzOMoQGMuqW7skCXh8lux2MJETvyMJxcHs%2BRcPaw3GY1KQ%2FRoOgy8yd1ws2c7GJhYf63RxPtF1X4tMVsZCSyoHgrtGzYvdC6vwHDExhtx3sL05GejNxxKOze49yezTnCi6HzGI%2BDDX4R4naHWdDw1F2QTc%2BnQH3LJbG1M%2BqoHbv6cN9noWKQa7enBTdYDrXFDqlEPDmPmvaDQk3&X-Amz-Signature=0dc25b6db4a04f6c31bcdd9dce27230fbb32d00e176c7e8a5117af755cc42db9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBLGXRM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCfwjm2%2FxDzlYiL%2F4dF52Ceh%2FTwV6WM2MXIXameK7I5FwIga9SEr0uJpOLsmKKtyAAFWyVghyYwBSHHiqoT4i3f5QkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoctrSA%2BntZKQjOrCrcA%2BjnIlnCAqnHb9FYeEmioB4kUSGaksSBq69rrgHZqLTONqVymkDPfk8X5lkaRb%2Br86dshsfQHTvaCz%2FQteURzRMTOsG6%2FIzHY71po8vIPUfcn8zh96x23beYYJTTBuH0VQ4c3s52Pl4HlL6AX1Lrv1RpSIzmvlKFpNiR3%2FGnOPZuQbcZE4z2Ns0Krskgt5ywgPgdueBwIErszjCFocts6hCxmYbfdyjzCxW9UJja6E0qYDMHAH%2BvC4lwG0xc5SwTCBoJ%2FtDr8l3LvJH0ZM%2FPwIN1kbvsN6k8XAoHv2snNga9pF8yW50QtLcuzdhYsTM06aGsux3c%2F1Luf%2B5Dx2zAYpfIytjltpwMyXdQZYI5eE7%2B9OkwwoT16z5DxWMMxuUzFaGd8eABbJIgsiJJruPI9yOoqCQukd8fPspfOc%2BIitDoMABtMDvkqezkg%2BBM9q1TicRT9PsdTQNwFHZL1%2FHx4q7b9Wa4OBwgUZnxzyDWFG1uItKoLrpvu9GTQPq5%2F1QSBaGcwbHav7DVE8mV8guAZMMvQ94aG0fglGhufcjj4vTKY3g5ApZ7fw1INnqklIEFZU8PnpbLr%2B%2BSUE8NuUSd9YSA%2Fgw5hYXC3dHFg7oOHLGtQwWklTyXJvsXZY5tMNOjksAGOqUBvuL5WW4skkd9YdzOMoQGMuqW7skCXh8lux2MJETvyMJxcHs%2BRcPaw3GY1KQ%2FRoOgy8yd1ws2c7GJhYf63RxPtF1X4tMVsZCSyoHgrtGzYvdC6vwHDExhtx3sL05GejNxxKOze49yezTnCi6HzGI%2BDDX4R4naHWdDw1F2QTc%2BnQH3LJbG1M%2BqoHbv6cN9noWKQa7enBTdYDrXFDqlEPDmPmvaDQk3&X-Amz-Signature=5bc5167d36e4fd840fa818b6981cb2e6d86aa1059e60455540e943338aa5d3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBLGXRM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCfwjm2%2FxDzlYiL%2F4dF52Ceh%2FTwV6WM2MXIXameK7I5FwIga9SEr0uJpOLsmKKtyAAFWyVghyYwBSHHiqoT4i3f5QkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoctrSA%2BntZKQjOrCrcA%2BjnIlnCAqnHb9FYeEmioB4kUSGaksSBq69rrgHZqLTONqVymkDPfk8X5lkaRb%2Br86dshsfQHTvaCz%2FQteURzRMTOsG6%2FIzHY71po8vIPUfcn8zh96x23beYYJTTBuH0VQ4c3s52Pl4HlL6AX1Lrv1RpSIzmvlKFpNiR3%2FGnOPZuQbcZE4z2Ns0Krskgt5ywgPgdueBwIErszjCFocts6hCxmYbfdyjzCxW9UJja6E0qYDMHAH%2BvC4lwG0xc5SwTCBoJ%2FtDr8l3LvJH0ZM%2FPwIN1kbvsN6k8XAoHv2snNga9pF8yW50QtLcuzdhYsTM06aGsux3c%2F1Luf%2B5Dx2zAYpfIytjltpwMyXdQZYI5eE7%2B9OkwwoT16z5DxWMMxuUzFaGd8eABbJIgsiJJruPI9yOoqCQukd8fPspfOc%2BIitDoMABtMDvkqezkg%2BBM9q1TicRT9PsdTQNwFHZL1%2FHx4q7b9Wa4OBwgUZnxzyDWFG1uItKoLrpvu9GTQPq5%2F1QSBaGcwbHav7DVE8mV8guAZMMvQ94aG0fglGhufcjj4vTKY3g5ApZ7fw1INnqklIEFZU8PnpbLr%2B%2BSUE8NuUSd9YSA%2Fgw5hYXC3dHFg7oOHLGtQwWklTyXJvsXZY5tMNOjksAGOqUBvuL5WW4skkd9YdzOMoQGMuqW7skCXh8lux2MJETvyMJxcHs%2BRcPaw3GY1KQ%2FRoOgy8yd1ws2c7GJhYf63RxPtF1X4tMVsZCSyoHgrtGzYvdC6vwHDExhtx3sL05GejNxxKOze49yezTnCi6HzGI%2BDDX4R4naHWdDw1F2QTc%2BnQH3LJbG1M%2BqoHbv6cN9noWKQa7enBTdYDrXFDqlEPDmPmvaDQk3&X-Amz-Signature=a55353f3a3a51bf4d29b0ccf6e8553cd65ad68604c6211147e5e6795070ed8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBLGXRM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCfwjm2%2FxDzlYiL%2F4dF52Ceh%2FTwV6WM2MXIXameK7I5FwIga9SEr0uJpOLsmKKtyAAFWyVghyYwBSHHiqoT4i3f5QkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoctrSA%2BntZKQjOrCrcA%2BjnIlnCAqnHb9FYeEmioB4kUSGaksSBq69rrgHZqLTONqVymkDPfk8X5lkaRb%2Br86dshsfQHTvaCz%2FQteURzRMTOsG6%2FIzHY71po8vIPUfcn8zh96x23beYYJTTBuH0VQ4c3s52Pl4HlL6AX1Lrv1RpSIzmvlKFpNiR3%2FGnOPZuQbcZE4z2Ns0Krskgt5ywgPgdueBwIErszjCFocts6hCxmYbfdyjzCxW9UJja6E0qYDMHAH%2BvC4lwG0xc5SwTCBoJ%2FtDr8l3LvJH0ZM%2FPwIN1kbvsN6k8XAoHv2snNga9pF8yW50QtLcuzdhYsTM06aGsux3c%2F1Luf%2B5Dx2zAYpfIytjltpwMyXdQZYI5eE7%2B9OkwwoT16z5DxWMMxuUzFaGd8eABbJIgsiJJruPI9yOoqCQukd8fPspfOc%2BIitDoMABtMDvkqezkg%2BBM9q1TicRT9PsdTQNwFHZL1%2FHx4q7b9Wa4OBwgUZnxzyDWFG1uItKoLrpvu9GTQPq5%2F1QSBaGcwbHav7DVE8mV8guAZMMvQ94aG0fglGhufcjj4vTKY3g5ApZ7fw1INnqklIEFZU8PnpbLr%2B%2BSUE8NuUSd9YSA%2Fgw5hYXC3dHFg7oOHLGtQwWklTyXJvsXZY5tMNOjksAGOqUBvuL5WW4skkd9YdzOMoQGMuqW7skCXh8lux2MJETvyMJxcHs%2BRcPaw3GY1KQ%2FRoOgy8yd1ws2c7GJhYf63RxPtF1X4tMVsZCSyoHgrtGzYvdC6vwHDExhtx3sL05GejNxxKOze49yezTnCi6HzGI%2BDDX4R4naHWdDw1F2QTc%2BnQH3LJbG1M%2BqoHbv6cN9noWKQa7enBTdYDrXFDqlEPDmPmvaDQk3&X-Amz-Signature=c4e0fc0ae7c91f3f03358a9fccfdd03cf1686bae530f127457a5c253f7d3f255&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBLGXRM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCfwjm2%2FxDzlYiL%2F4dF52Ceh%2FTwV6WM2MXIXameK7I5FwIga9SEr0uJpOLsmKKtyAAFWyVghyYwBSHHiqoT4i3f5QkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoctrSA%2BntZKQjOrCrcA%2BjnIlnCAqnHb9FYeEmioB4kUSGaksSBq69rrgHZqLTONqVymkDPfk8X5lkaRb%2Br86dshsfQHTvaCz%2FQteURzRMTOsG6%2FIzHY71po8vIPUfcn8zh96x23beYYJTTBuH0VQ4c3s52Pl4HlL6AX1Lrv1RpSIzmvlKFpNiR3%2FGnOPZuQbcZE4z2Ns0Krskgt5ywgPgdueBwIErszjCFocts6hCxmYbfdyjzCxW9UJja6E0qYDMHAH%2BvC4lwG0xc5SwTCBoJ%2FtDr8l3LvJH0ZM%2FPwIN1kbvsN6k8XAoHv2snNga9pF8yW50QtLcuzdhYsTM06aGsux3c%2F1Luf%2B5Dx2zAYpfIytjltpwMyXdQZYI5eE7%2B9OkwwoT16z5DxWMMxuUzFaGd8eABbJIgsiJJruPI9yOoqCQukd8fPspfOc%2BIitDoMABtMDvkqezkg%2BBM9q1TicRT9PsdTQNwFHZL1%2FHx4q7b9Wa4OBwgUZnxzyDWFG1uItKoLrpvu9GTQPq5%2F1QSBaGcwbHav7DVE8mV8guAZMMvQ94aG0fglGhufcjj4vTKY3g5ApZ7fw1INnqklIEFZU8PnpbLr%2B%2BSUE8NuUSd9YSA%2Fgw5hYXC3dHFg7oOHLGtQwWklTyXJvsXZY5tMNOjksAGOqUBvuL5WW4skkd9YdzOMoQGMuqW7skCXh8lux2MJETvyMJxcHs%2BRcPaw3GY1KQ%2FRoOgy8yd1ws2c7GJhYf63RxPtF1X4tMVsZCSyoHgrtGzYvdC6vwHDExhtx3sL05GejNxxKOze49yezTnCi6HzGI%2BDDX4R4naHWdDw1F2QTc%2BnQH3LJbG1M%2BqoHbv6cN9noWKQa7enBTdYDrXFDqlEPDmPmvaDQk3&X-Amz-Signature=a13de68b8c5c85d383ebfd509d7b0c9a4e101851eb728fe43250086cd6459725&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBLGXRM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCfwjm2%2FxDzlYiL%2F4dF52Ceh%2FTwV6WM2MXIXameK7I5FwIga9SEr0uJpOLsmKKtyAAFWyVghyYwBSHHiqoT4i3f5QkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoctrSA%2BntZKQjOrCrcA%2BjnIlnCAqnHb9FYeEmioB4kUSGaksSBq69rrgHZqLTONqVymkDPfk8X5lkaRb%2Br86dshsfQHTvaCz%2FQteURzRMTOsG6%2FIzHY71po8vIPUfcn8zh96x23beYYJTTBuH0VQ4c3s52Pl4HlL6AX1Lrv1RpSIzmvlKFpNiR3%2FGnOPZuQbcZE4z2Ns0Krskgt5ywgPgdueBwIErszjCFocts6hCxmYbfdyjzCxW9UJja6E0qYDMHAH%2BvC4lwG0xc5SwTCBoJ%2FtDr8l3LvJH0ZM%2FPwIN1kbvsN6k8XAoHv2snNga9pF8yW50QtLcuzdhYsTM06aGsux3c%2F1Luf%2B5Dx2zAYpfIytjltpwMyXdQZYI5eE7%2B9OkwwoT16z5DxWMMxuUzFaGd8eABbJIgsiJJruPI9yOoqCQukd8fPspfOc%2BIitDoMABtMDvkqezkg%2BBM9q1TicRT9PsdTQNwFHZL1%2FHx4q7b9Wa4OBwgUZnxzyDWFG1uItKoLrpvu9GTQPq5%2F1QSBaGcwbHav7DVE8mV8guAZMMvQ94aG0fglGhufcjj4vTKY3g5ApZ7fw1INnqklIEFZU8PnpbLr%2B%2BSUE8NuUSd9YSA%2Fgw5hYXC3dHFg7oOHLGtQwWklTyXJvsXZY5tMNOjksAGOqUBvuL5WW4skkd9YdzOMoQGMuqW7skCXh8lux2MJETvyMJxcHs%2BRcPaw3GY1KQ%2FRoOgy8yd1ws2c7GJhYf63RxPtF1X4tMVsZCSyoHgrtGzYvdC6vwHDExhtx3sL05GejNxxKOze49yezTnCi6HzGI%2BDDX4R4naHWdDw1F2QTc%2BnQH3LJbG1M%2BqoHbv6cN9noWKQa7enBTdYDrXFDqlEPDmPmvaDQk3&X-Amz-Signature=d4e3e1ea2fdd5a95c220e818dbba496840e55c1f6c276e8d6410f5be4df2275f&X-Amz-SignedHeaders=host&x-id=GetObject)
