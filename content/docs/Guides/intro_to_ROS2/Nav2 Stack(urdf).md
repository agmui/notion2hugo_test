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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YYVZW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLLPXisMiMx6QzyIB%2FUkTPn0dwdFL%2Fk5neHudxNSQj9AIhAML2J6APjwB62YLDAU1a%2BQwHxXYG9zIrkcGc2ak5yf47KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmCF62kLcUtTtchh4q3AP6%2Fn0Nm3itmgrgaIzd%2FwHmI3qRCdxP5xpJt%2BeJ13N0TaUI97R02%2Fjq655vfpDelAbxR2pfydOy4S17r%2BgM%2BpR5ZCg0EWAx1sCgNkiLtt5MCAm3TstMCezeMyigTuuhK5BTLFQCeFacRYZZCDnzZZkvOGHRgCHVQvtrFJ%2FJpIxR3CQqgL4gXr%2F6EqCpOqV9LRiy5nMX%2FLxBWlIbAxZYsO006P4wzaYtLO13IuuyXv1PVFTIpRFrcjLaWa2nJaWoZvoONxqmgXvf9i51s5Th922aVrSr%2F56SQqiYy1ql%2B9sMBcYZmeswdVMAJlAkHkTuaRJPIOLcOOjz9O6YkhvbOTC4r182M0mAGHv6sguN17V0%2F3ttjwMrdpD9VNjh%2FCKTT7LCUJ2PvWpIatuuW0Xco2oUoQVCphD%2BR38wsKqLojQRQ8PZ66fKZZP5SCUt0WJS91e%2F2EDC14oFhjoLo7mEDStQAo%2F747MzCQWhA7COIjnifpjD7yfa9hCwYH8q8bqq372F7PL8XqAxv5lxmGjq%2FWXAzsysG%2Bz0nGf%2FE5hldL4ZlQi%2BiQcIFch26mbVAcq7Ywf%2BsntAgRtIYeCHgmcnWKkMMPedO5ASLO91xp58Gl175AehRz2PEzL5zNpX%2BjCIxo7BBjqkAUYqy9Kvu7YFiIakz3SpE0bu0PJPXbejmOM6pMD8DQ%2FaA%2Bnh79JH7U%2BCDrsKAVwj0stzQN86gJTJCjHcEup2IZzfsSgHWhfI9y0XzPIi4sQM44dXDWyiKagpQwb3LHqTy%2F6Iu7gCTl3CKFgYFZnSqzd8Lyi9PlzXSgSCSDC8mglB%2Fu%2FCCPcNEdvjtCyuerQO150lru2IK5hCKND4NetY%2FNqQ44wl&X-Amz-Signature=d93b918a1ea9d5ee04c2148c9cf4d8a7c2decd3db977754e2a711e7d681c1969&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YYVZW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLLPXisMiMx6QzyIB%2FUkTPn0dwdFL%2Fk5neHudxNSQj9AIhAML2J6APjwB62YLDAU1a%2BQwHxXYG9zIrkcGc2ak5yf47KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmCF62kLcUtTtchh4q3AP6%2Fn0Nm3itmgrgaIzd%2FwHmI3qRCdxP5xpJt%2BeJ13N0TaUI97R02%2Fjq655vfpDelAbxR2pfydOy4S17r%2BgM%2BpR5ZCg0EWAx1sCgNkiLtt5MCAm3TstMCezeMyigTuuhK5BTLFQCeFacRYZZCDnzZZkvOGHRgCHVQvtrFJ%2FJpIxR3CQqgL4gXr%2F6EqCpOqV9LRiy5nMX%2FLxBWlIbAxZYsO006P4wzaYtLO13IuuyXv1PVFTIpRFrcjLaWa2nJaWoZvoONxqmgXvf9i51s5Th922aVrSr%2F56SQqiYy1ql%2B9sMBcYZmeswdVMAJlAkHkTuaRJPIOLcOOjz9O6YkhvbOTC4r182M0mAGHv6sguN17V0%2F3ttjwMrdpD9VNjh%2FCKTT7LCUJ2PvWpIatuuW0Xco2oUoQVCphD%2BR38wsKqLojQRQ8PZ66fKZZP5SCUt0WJS91e%2F2EDC14oFhjoLo7mEDStQAo%2F747MzCQWhA7COIjnifpjD7yfa9hCwYH8q8bqq372F7PL8XqAxv5lxmGjq%2FWXAzsysG%2Bz0nGf%2FE5hldL4ZlQi%2BiQcIFch26mbVAcq7Ywf%2BsntAgRtIYeCHgmcnWKkMMPedO5ASLO91xp58Gl175AehRz2PEzL5zNpX%2BjCIxo7BBjqkAUYqy9Kvu7YFiIakz3SpE0bu0PJPXbejmOM6pMD8DQ%2FaA%2Bnh79JH7U%2BCDrsKAVwj0stzQN86gJTJCjHcEup2IZzfsSgHWhfI9y0XzPIi4sQM44dXDWyiKagpQwb3LHqTy%2F6Iu7gCTl3CKFgYFZnSqzd8Lyi9PlzXSgSCSDC8mglB%2Fu%2FCCPcNEdvjtCyuerQO150lru2IK5hCKND4NetY%2FNqQ44wl&X-Amz-Signature=c043c84d39c6d1e13b43a78fe0d202db494e8ab9b3a75d04c93ccb2f223b09c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YYVZW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLLPXisMiMx6QzyIB%2FUkTPn0dwdFL%2Fk5neHudxNSQj9AIhAML2J6APjwB62YLDAU1a%2BQwHxXYG9zIrkcGc2ak5yf47KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmCF62kLcUtTtchh4q3AP6%2Fn0Nm3itmgrgaIzd%2FwHmI3qRCdxP5xpJt%2BeJ13N0TaUI97R02%2Fjq655vfpDelAbxR2pfydOy4S17r%2BgM%2BpR5ZCg0EWAx1sCgNkiLtt5MCAm3TstMCezeMyigTuuhK5BTLFQCeFacRYZZCDnzZZkvOGHRgCHVQvtrFJ%2FJpIxR3CQqgL4gXr%2F6EqCpOqV9LRiy5nMX%2FLxBWlIbAxZYsO006P4wzaYtLO13IuuyXv1PVFTIpRFrcjLaWa2nJaWoZvoONxqmgXvf9i51s5Th922aVrSr%2F56SQqiYy1ql%2B9sMBcYZmeswdVMAJlAkHkTuaRJPIOLcOOjz9O6YkhvbOTC4r182M0mAGHv6sguN17V0%2F3ttjwMrdpD9VNjh%2FCKTT7LCUJ2PvWpIatuuW0Xco2oUoQVCphD%2BR38wsKqLojQRQ8PZ66fKZZP5SCUt0WJS91e%2F2EDC14oFhjoLo7mEDStQAo%2F747MzCQWhA7COIjnifpjD7yfa9hCwYH8q8bqq372F7PL8XqAxv5lxmGjq%2FWXAzsysG%2Bz0nGf%2FE5hldL4ZlQi%2BiQcIFch26mbVAcq7Ywf%2BsntAgRtIYeCHgmcnWKkMMPedO5ASLO91xp58Gl175AehRz2PEzL5zNpX%2BjCIxo7BBjqkAUYqy9Kvu7YFiIakz3SpE0bu0PJPXbejmOM6pMD8DQ%2FaA%2Bnh79JH7U%2BCDrsKAVwj0stzQN86gJTJCjHcEup2IZzfsSgHWhfI9y0XzPIi4sQM44dXDWyiKagpQwb3LHqTy%2F6Iu7gCTl3CKFgYFZnSqzd8Lyi9PlzXSgSCSDC8mglB%2Fu%2FCCPcNEdvjtCyuerQO150lru2IK5hCKND4NetY%2FNqQ44wl&X-Amz-Signature=4f7faaa7b742bf8502c18296682da0b3cb100b901be8ee3d50e79ba394109ead&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YYVZW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLLPXisMiMx6QzyIB%2FUkTPn0dwdFL%2Fk5neHudxNSQj9AIhAML2J6APjwB62YLDAU1a%2BQwHxXYG9zIrkcGc2ak5yf47KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmCF62kLcUtTtchh4q3AP6%2Fn0Nm3itmgrgaIzd%2FwHmI3qRCdxP5xpJt%2BeJ13N0TaUI97R02%2Fjq655vfpDelAbxR2pfydOy4S17r%2BgM%2BpR5ZCg0EWAx1sCgNkiLtt5MCAm3TstMCezeMyigTuuhK5BTLFQCeFacRYZZCDnzZZkvOGHRgCHVQvtrFJ%2FJpIxR3CQqgL4gXr%2F6EqCpOqV9LRiy5nMX%2FLxBWlIbAxZYsO006P4wzaYtLO13IuuyXv1PVFTIpRFrcjLaWa2nJaWoZvoONxqmgXvf9i51s5Th922aVrSr%2F56SQqiYy1ql%2B9sMBcYZmeswdVMAJlAkHkTuaRJPIOLcOOjz9O6YkhvbOTC4r182M0mAGHv6sguN17V0%2F3ttjwMrdpD9VNjh%2FCKTT7LCUJ2PvWpIatuuW0Xco2oUoQVCphD%2BR38wsKqLojQRQ8PZ66fKZZP5SCUt0WJS91e%2F2EDC14oFhjoLo7mEDStQAo%2F747MzCQWhA7COIjnifpjD7yfa9hCwYH8q8bqq372F7PL8XqAxv5lxmGjq%2FWXAzsysG%2Bz0nGf%2FE5hldL4ZlQi%2BiQcIFch26mbVAcq7Ywf%2BsntAgRtIYeCHgmcnWKkMMPedO5ASLO91xp58Gl175AehRz2PEzL5zNpX%2BjCIxo7BBjqkAUYqy9Kvu7YFiIakz3SpE0bu0PJPXbejmOM6pMD8DQ%2FaA%2Bnh79JH7U%2BCDrsKAVwj0stzQN86gJTJCjHcEup2IZzfsSgHWhfI9y0XzPIi4sQM44dXDWyiKagpQwb3LHqTy%2F6Iu7gCTl3CKFgYFZnSqzd8Lyi9PlzXSgSCSDC8mglB%2Fu%2FCCPcNEdvjtCyuerQO150lru2IK5hCKND4NetY%2FNqQ44wl&X-Amz-Signature=adc431bc81ffc7d1c7ac5f585a10f267fdfdd221de55d4043ea98dbb5feca0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YYVZW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLLPXisMiMx6QzyIB%2FUkTPn0dwdFL%2Fk5neHudxNSQj9AIhAML2J6APjwB62YLDAU1a%2BQwHxXYG9zIrkcGc2ak5yf47KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmCF62kLcUtTtchh4q3AP6%2Fn0Nm3itmgrgaIzd%2FwHmI3qRCdxP5xpJt%2BeJ13N0TaUI97R02%2Fjq655vfpDelAbxR2pfydOy4S17r%2BgM%2BpR5ZCg0EWAx1sCgNkiLtt5MCAm3TstMCezeMyigTuuhK5BTLFQCeFacRYZZCDnzZZkvOGHRgCHVQvtrFJ%2FJpIxR3CQqgL4gXr%2F6EqCpOqV9LRiy5nMX%2FLxBWlIbAxZYsO006P4wzaYtLO13IuuyXv1PVFTIpRFrcjLaWa2nJaWoZvoONxqmgXvf9i51s5Th922aVrSr%2F56SQqiYy1ql%2B9sMBcYZmeswdVMAJlAkHkTuaRJPIOLcOOjz9O6YkhvbOTC4r182M0mAGHv6sguN17V0%2F3ttjwMrdpD9VNjh%2FCKTT7LCUJ2PvWpIatuuW0Xco2oUoQVCphD%2BR38wsKqLojQRQ8PZ66fKZZP5SCUt0WJS91e%2F2EDC14oFhjoLo7mEDStQAo%2F747MzCQWhA7COIjnifpjD7yfa9hCwYH8q8bqq372F7PL8XqAxv5lxmGjq%2FWXAzsysG%2Bz0nGf%2FE5hldL4ZlQi%2BiQcIFch26mbVAcq7Ywf%2BsntAgRtIYeCHgmcnWKkMMPedO5ASLO91xp58Gl175AehRz2PEzL5zNpX%2BjCIxo7BBjqkAUYqy9Kvu7YFiIakz3SpE0bu0PJPXbejmOM6pMD8DQ%2FaA%2Bnh79JH7U%2BCDrsKAVwj0stzQN86gJTJCjHcEup2IZzfsSgHWhfI9y0XzPIi4sQM44dXDWyiKagpQwb3LHqTy%2F6Iu7gCTl3CKFgYFZnSqzd8Lyi9PlzXSgSCSDC8mglB%2Fu%2FCCPcNEdvjtCyuerQO150lru2IK5hCKND4NetY%2FNqQ44wl&X-Amz-Signature=35950719f2d1bc78f6811dc9735c2c5124bc3396c5bb5dd8748229344a277498&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4YYVZW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLLPXisMiMx6QzyIB%2FUkTPn0dwdFL%2Fk5neHudxNSQj9AIhAML2J6APjwB62YLDAU1a%2BQwHxXYG9zIrkcGc2ak5yf47KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmCF62kLcUtTtchh4q3AP6%2Fn0Nm3itmgrgaIzd%2FwHmI3qRCdxP5xpJt%2BeJ13N0TaUI97R02%2Fjq655vfpDelAbxR2pfydOy4S17r%2BgM%2BpR5ZCg0EWAx1sCgNkiLtt5MCAm3TstMCezeMyigTuuhK5BTLFQCeFacRYZZCDnzZZkvOGHRgCHVQvtrFJ%2FJpIxR3CQqgL4gXr%2F6EqCpOqV9LRiy5nMX%2FLxBWlIbAxZYsO006P4wzaYtLO13IuuyXv1PVFTIpRFrcjLaWa2nJaWoZvoONxqmgXvf9i51s5Th922aVrSr%2F56SQqiYy1ql%2B9sMBcYZmeswdVMAJlAkHkTuaRJPIOLcOOjz9O6YkhvbOTC4r182M0mAGHv6sguN17V0%2F3ttjwMrdpD9VNjh%2FCKTT7LCUJ2PvWpIatuuW0Xco2oUoQVCphD%2BR38wsKqLojQRQ8PZ66fKZZP5SCUt0WJS91e%2F2EDC14oFhjoLo7mEDStQAo%2F747MzCQWhA7COIjnifpjD7yfa9hCwYH8q8bqq372F7PL8XqAxv5lxmGjq%2FWXAzsysG%2Bz0nGf%2FE5hldL4ZlQi%2BiQcIFch26mbVAcq7Ywf%2BsntAgRtIYeCHgmcnWKkMMPedO5ASLO91xp58Gl175AehRz2PEzL5zNpX%2BjCIxo7BBjqkAUYqy9Kvu7YFiIakz3SpE0bu0PJPXbejmOM6pMD8DQ%2FaA%2Bnh79JH7U%2BCDrsKAVwj0stzQN86gJTJCjHcEup2IZzfsSgHWhfI9y0XzPIi4sQM44dXDWyiKagpQwb3LHqTy%2F6Iu7gCTl3CKFgYFZnSqzd8Lyi9PlzXSgSCSDC8mglB%2Fu%2FCCPcNEdvjtCyuerQO150lru2IK5hCKND4NetY%2FNqQ44wl&X-Amz-Signature=96d2f9d9130fd3ea348b9e5dd5c395c8ff66031f3ba7a1d71497b4f4d66326ee&X-Amz-SignedHeaders=host&x-id=GetObject)
