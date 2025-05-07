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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EI54AV2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC0UoBmaiG4Jp7HkTfE2G6vj3LKhq%2F0%2FiPK8UCBU1rAIgKTkPQh8giC%2BonuiKsepc5mIk2z5W766988v0G3PoZk4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJmrRQRYZ8%2BghTdb1ircA5%2BFZkQVTOAFKViEiObuY1cSnOGrq6q5nm0t42ysz%2B73mC7jbkoy8GQ8O11AnqGeTr449m5iKQpsu5ejfHvfn0eo2TKR%2BBi5Uzh1lgcXayS7XEZbLteN0P0z2D0VGWKM4LZHNZeGV7MeF4pGI08nQicwbyzgMMIbLahDQTGLCo2ZjS3jSlo4rySCczSvORLJzk3nczDCCPpqYoBk2Ld973ulxU57DmlPJEhvKg8PqDnmotUAQuYs50ETvSLcUfv8d2xTTr8xkYNwbOfIgY5qVT4yc%2FdC48BbTBDkLYN%2FKHceAXkTJPPCZrxQMxkTaKjnExiUzzV%2FW1W67I%2Flq3%2Bd2hZDz5yVDo0xWkDCLIvnEjfPBE2hZ3AAAwWyMoskr9JqD15G2xqoJVjvVO64HYMChWCzSWzTTtPVlSOZh4mtpokWtoXCJcAZTvwf3yrZ1i7YjrbNUs4GVd33YbQgrM0ktGS3CUoeMmgyMzNtUpvX3T4J4euA1aOCpRATYdKJlfVCW25ZvYmi2e4KQJFhoBcP6npRZUGIz7rpGvh25GreHSXjOUYUbDkdm%2BmACOXu1HVT1DmVRx96GLaq%2BuizUWY%2F2x8muJtwYu03umvc%2BtBU4W0oHc18Zy1YB9ZysrR3ML3o7cAGOqUBzzZjfCURZx78VUMzGyaoHPF2Zy%2BbF%2F2etdxMB%2Fp0TMqzZMTJPCA11e3AjHyE7yXtdmt4iBTaaUgB8Ohn30lPR9DJfqpOLYoYgCbIJ513PrUoSTM4Xos5d1q0YPrJgzyROsFAdu3KGTaOxPtR8nvqi07uUOO6JjSuq1VeNGTC%2F%2Fd58GTZ%2BAkSLFin8FS1IIkvsmp5vEnlizMt2TIS3qjNU%2FsInHwT&X-Amz-Signature=b7262f00c126ccd6133a69904b924b0b6bc4e6cf7ae834587a294a3fbb3ff02a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EI54AV2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC0UoBmaiG4Jp7HkTfE2G6vj3LKhq%2F0%2FiPK8UCBU1rAIgKTkPQh8giC%2BonuiKsepc5mIk2z5W766988v0G3PoZk4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJmrRQRYZ8%2BghTdb1ircA5%2BFZkQVTOAFKViEiObuY1cSnOGrq6q5nm0t42ysz%2B73mC7jbkoy8GQ8O11AnqGeTr449m5iKQpsu5ejfHvfn0eo2TKR%2BBi5Uzh1lgcXayS7XEZbLteN0P0z2D0VGWKM4LZHNZeGV7MeF4pGI08nQicwbyzgMMIbLahDQTGLCo2ZjS3jSlo4rySCczSvORLJzk3nczDCCPpqYoBk2Ld973ulxU57DmlPJEhvKg8PqDnmotUAQuYs50ETvSLcUfv8d2xTTr8xkYNwbOfIgY5qVT4yc%2FdC48BbTBDkLYN%2FKHceAXkTJPPCZrxQMxkTaKjnExiUzzV%2FW1W67I%2Flq3%2Bd2hZDz5yVDo0xWkDCLIvnEjfPBE2hZ3AAAwWyMoskr9JqD15G2xqoJVjvVO64HYMChWCzSWzTTtPVlSOZh4mtpokWtoXCJcAZTvwf3yrZ1i7YjrbNUs4GVd33YbQgrM0ktGS3CUoeMmgyMzNtUpvX3T4J4euA1aOCpRATYdKJlfVCW25ZvYmi2e4KQJFhoBcP6npRZUGIz7rpGvh25GreHSXjOUYUbDkdm%2BmACOXu1HVT1DmVRx96GLaq%2BuizUWY%2F2x8muJtwYu03umvc%2BtBU4W0oHc18Zy1YB9ZysrR3ML3o7cAGOqUBzzZjfCURZx78VUMzGyaoHPF2Zy%2BbF%2F2etdxMB%2Fp0TMqzZMTJPCA11e3AjHyE7yXtdmt4iBTaaUgB8Ohn30lPR9DJfqpOLYoYgCbIJ513PrUoSTM4Xos5d1q0YPrJgzyROsFAdu3KGTaOxPtR8nvqi07uUOO6JjSuq1VeNGTC%2F%2Fd58GTZ%2BAkSLFin8FS1IIkvsmp5vEnlizMt2TIS3qjNU%2FsInHwT&X-Amz-Signature=36c28051b9997de451df4599f3916c9f8ca597de884cb9cacb61f2369538cd03&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EI54AV2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC0UoBmaiG4Jp7HkTfE2G6vj3LKhq%2F0%2FiPK8UCBU1rAIgKTkPQh8giC%2BonuiKsepc5mIk2z5W766988v0G3PoZk4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJmrRQRYZ8%2BghTdb1ircA5%2BFZkQVTOAFKViEiObuY1cSnOGrq6q5nm0t42ysz%2B73mC7jbkoy8GQ8O11AnqGeTr449m5iKQpsu5ejfHvfn0eo2TKR%2BBi5Uzh1lgcXayS7XEZbLteN0P0z2D0VGWKM4LZHNZeGV7MeF4pGI08nQicwbyzgMMIbLahDQTGLCo2ZjS3jSlo4rySCczSvORLJzk3nczDCCPpqYoBk2Ld973ulxU57DmlPJEhvKg8PqDnmotUAQuYs50ETvSLcUfv8d2xTTr8xkYNwbOfIgY5qVT4yc%2FdC48BbTBDkLYN%2FKHceAXkTJPPCZrxQMxkTaKjnExiUzzV%2FW1W67I%2Flq3%2Bd2hZDz5yVDo0xWkDCLIvnEjfPBE2hZ3AAAwWyMoskr9JqD15G2xqoJVjvVO64HYMChWCzSWzTTtPVlSOZh4mtpokWtoXCJcAZTvwf3yrZ1i7YjrbNUs4GVd33YbQgrM0ktGS3CUoeMmgyMzNtUpvX3T4J4euA1aOCpRATYdKJlfVCW25ZvYmi2e4KQJFhoBcP6npRZUGIz7rpGvh25GreHSXjOUYUbDkdm%2BmACOXu1HVT1DmVRx96GLaq%2BuizUWY%2F2x8muJtwYu03umvc%2BtBU4W0oHc18Zy1YB9ZysrR3ML3o7cAGOqUBzzZjfCURZx78VUMzGyaoHPF2Zy%2BbF%2F2etdxMB%2Fp0TMqzZMTJPCA11e3AjHyE7yXtdmt4iBTaaUgB8Ohn30lPR9DJfqpOLYoYgCbIJ513PrUoSTM4Xos5d1q0YPrJgzyROsFAdu3KGTaOxPtR8nvqi07uUOO6JjSuq1VeNGTC%2F%2Fd58GTZ%2BAkSLFin8FS1IIkvsmp5vEnlizMt2TIS3qjNU%2FsInHwT&X-Amz-Signature=3d8cbe5388293a35ba5d3f6b0a6df5783dd631a2b582d68861be841348464c07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EI54AV2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC0UoBmaiG4Jp7HkTfE2G6vj3LKhq%2F0%2FiPK8UCBU1rAIgKTkPQh8giC%2BonuiKsepc5mIk2z5W766988v0G3PoZk4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJmrRQRYZ8%2BghTdb1ircA5%2BFZkQVTOAFKViEiObuY1cSnOGrq6q5nm0t42ysz%2B73mC7jbkoy8GQ8O11AnqGeTr449m5iKQpsu5ejfHvfn0eo2TKR%2BBi5Uzh1lgcXayS7XEZbLteN0P0z2D0VGWKM4LZHNZeGV7MeF4pGI08nQicwbyzgMMIbLahDQTGLCo2ZjS3jSlo4rySCczSvORLJzk3nczDCCPpqYoBk2Ld973ulxU57DmlPJEhvKg8PqDnmotUAQuYs50ETvSLcUfv8d2xTTr8xkYNwbOfIgY5qVT4yc%2FdC48BbTBDkLYN%2FKHceAXkTJPPCZrxQMxkTaKjnExiUzzV%2FW1W67I%2Flq3%2Bd2hZDz5yVDo0xWkDCLIvnEjfPBE2hZ3AAAwWyMoskr9JqD15G2xqoJVjvVO64HYMChWCzSWzTTtPVlSOZh4mtpokWtoXCJcAZTvwf3yrZ1i7YjrbNUs4GVd33YbQgrM0ktGS3CUoeMmgyMzNtUpvX3T4J4euA1aOCpRATYdKJlfVCW25ZvYmi2e4KQJFhoBcP6npRZUGIz7rpGvh25GreHSXjOUYUbDkdm%2BmACOXu1HVT1DmVRx96GLaq%2BuizUWY%2F2x8muJtwYu03umvc%2BtBU4W0oHc18Zy1YB9ZysrR3ML3o7cAGOqUBzzZjfCURZx78VUMzGyaoHPF2Zy%2BbF%2F2etdxMB%2Fp0TMqzZMTJPCA11e3AjHyE7yXtdmt4iBTaaUgB8Ohn30lPR9DJfqpOLYoYgCbIJ513PrUoSTM4Xos5d1q0YPrJgzyROsFAdu3KGTaOxPtR8nvqi07uUOO6JjSuq1VeNGTC%2F%2Fd58GTZ%2BAkSLFin8FS1IIkvsmp5vEnlizMt2TIS3qjNU%2FsInHwT&X-Amz-Signature=fa6259291ce3527fc65b2e342cec6d32f63bc6309618a9b63b53de351bf1cce6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EI54AV2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC0UoBmaiG4Jp7HkTfE2G6vj3LKhq%2F0%2FiPK8UCBU1rAIgKTkPQh8giC%2BonuiKsepc5mIk2z5W766988v0G3PoZk4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJmrRQRYZ8%2BghTdb1ircA5%2BFZkQVTOAFKViEiObuY1cSnOGrq6q5nm0t42ysz%2B73mC7jbkoy8GQ8O11AnqGeTr449m5iKQpsu5ejfHvfn0eo2TKR%2BBi5Uzh1lgcXayS7XEZbLteN0P0z2D0VGWKM4LZHNZeGV7MeF4pGI08nQicwbyzgMMIbLahDQTGLCo2ZjS3jSlo4rySCczSvORLJzk3nczDCCPpqYoBk2Ld973ulxU57DmlPJEhvKg8PqDnmotUAQuYs50ETvSLcUfv8d2xTTr8xkYNwbOfIgY5qVT4yc%2FdC48BbTBDkLYN%2FKHceAXkTJPPCZrxQMxkTaKjnExiUzzV%2FW1W67I%2Flq3%2Bd2hZDz5yVDo0xWkDCLIvnEjfPBE2hZ3AAAwWyMoskr9JqD15G2xqoJVjvVO64HYMChWCzSWzTTtPVlSOZh4mtpokWtoXCJcAZTvwf3yrZ1i7YjrbNUs4GVd33YbQgrM0ktGS3CUoeMmgyMzNtUpvX3T4J4euA1aOCpRATYdKJlfVCW25ZvYmi2e4KQJFhoBcP6npRZUGIz7rpGvh25GreHSXjOUYUbDkdm%2BmACOXu1HVT1DmVRx96GLaq%2BuizUWY%2F2x8muJtwYu03umvc%2BtBU4W0oHc18Zy1YB9ZysrR3ML3o7cAGOqUBzzZjfCURZx78VUMzGyaoHPF2Zy%2BbF%2F2etdxMB%2Fp0TMqzZMTJPCA11e3AjHyE7yXtdmt4iBTaaUgB8Ohn30lPR9DJfqpOLYoYgCbIJ513PrUoSTM4Xos5d1q0YPrJgzyROsFAdu3KGTaOxPtR8nvqi07uUOO6JjSuq1VeNGTC%2F%2Fd58GTZ%2BAkSLFin8FS1IIkvsmp5vEnlizMt2TIS3qjNU%2FsInHwT&X-Amz-Signature=f55926d1aa3a3182c7fe2bcf4fefa28262405ffb32219b91faa8039909241aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EI54AV2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC0UoBmaiG4Jp7HkTfE2G6vj3LKhq%2F0%2FiPK8UCBU1rAIgKTkPQh8giC%2BonuiKsepc5mIk2z5W766988v0G3PoZk4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJmrRQRYZ8%2BghTdb1ircA5%2BFZkQVTOAFKViEiObuY1cSnOGrq6q5nm0t42ysz%2B73mC7jbkoy8GQ8O11AnqGeTr449m5iKQpsu5ejfHvfn0eo2TKR%2BBi5Uzh1lgcXayS7XEZbLteN0P0z2D0VGWKM4LZHNZeGV7MeF4pGI08nQicwbyzgMMIbLahDQTGLCo2ZjS3jSlo4rySCczSvORLJzk3nczDCCPpqYoBk2Ld973ulxU57DmlPJEhvKg8PqDnmotUAQuYs50ETvSLcUfv8d2xTTr8xkYNwbOfIgY5qVT4yc%2FdC48BbTBDkLYN%2FKHceAXkTJPPCZrxQMxkTaKjnExiUzzV%2FW1W67I%2Flq3%2Bd2hZDz5yVDo0xWkDCLIvnEjfPBE2hZ3AAAwWyMoskr9JqD15G2xqoJVjvVO64HYMChWCzSWzTTtPVlSOZh4mtpokWtoXCJcAZTvwf3yrZ1i7YjrbNUs4GVd33YbQgrM0ktGS3CUoeMmgyMzNtUpvX3T4J4euA1aOCpRATYdKJlfVCW25ZvYmi2e4KQJFhoBcP6npRZUGIz7rpGvh25GreHSXjOUYUbDkdm%2BmACOXu1HVT1DmVRx96GLaq%2BuizUWY%2F2x8muJtwYu03umvc%2BtBU4W0oHc18Zy1YB9ZysrR3ML3o7cAGOqUBzzZjfCURZx78VUMzGyaoHPF2Zy%2BbF%2F2etdxMB%2Fp0TMqzZMTJPCA11e3AjHyE7yXtdmt4iBTaaUgB8Ohn30lPR9DJfqpOLYoYgCbIJ513PrUoSTM4Xos5d1q0YPrJgzyROsFAdu3KGTaOxPtR8nvqi07uUOO6JjSuq1VeNGTC%2F%2Fd58GTZ%2BAkSLFin8FS1IIkvsmp5vEnlizMt2TIS3qjNU%2FsInHwT&X-Amz-Signature=254bb3c01da1902b9087b4ccea9c40ba7efc8ea7bdfd1e7481a130255e4858d8&X-Amz-SignedHeaders=host&x-id=GetObject)
