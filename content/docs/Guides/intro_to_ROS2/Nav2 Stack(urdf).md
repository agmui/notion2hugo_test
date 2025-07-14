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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7R7NFX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBxlKgvpKxf%2BQ7V%2FQwpXkG5k0uoAEe4N%2F9fmnAhMDEA6AiEAtI7cCj2L5sYaqYDMUv8GtMXRi9kxYupLCj8NiWFiE6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJCS%2Bizn3iRLkLEtlSrcAwYeDFV5nfnXM4cMSum%2BAhEGE%2BlieFSO%2Bvic%2BtuftLK324axs0augLopWJrIBIjFR24zf5MUH7k5bdhXvR5db%2B5U6vN5RGdjQ8%2Fy1QggcgKvU4fv0MU0NKvjzMxjzqVo5gx5g1d7V5LdajHDY%2B8AsTGtm3b0A9%2Beu0L%2Fa%2FGHDyBtFhCoNZnFr3yacOnXfV2mBOZkGG5fBz8erpEGD1DzV6KsJCkHFFmK20YzJ8G9fUlr%2FBWPMBiuI4U0nI4bHp2OPIJCf5xlBS8EjNwAf2W8etUsDr6KJnZbJXsocMBJ61dnM2h5XZED6AWj73nWovVFyZMs9kxd5GKP1nZpRFwQUW1iFer5F1OoPY2yvOHKpaa0c377fj4qPHWo9OAF6kgP2BuCCO6GnEKWHp6nrl3S0m2WjhGnbOyxseFtfHiXcBSyOTWRXRHVkv%2F%2FOj9UvETJDveZPBDjSS%2FBX5RUF5EfDmCzMszdriuyPX2NMfK7lFG9Yy0WfiJw7kJRoad1%2BaEF1e18PgrI5zNddolMti4C7C1F9u8vbQGayLyCfR0WEJK5gPQCG%2BqD05udFeUsWzoT4y5GJ22Z0oGZrwkuLuJPNy5SCrRVwcZOLeDjXYhF3h%2BOp%2F0THw1PdO0wwqGBMO2E1MMGOqUB%2B9%2FfylQ%2BRPOU2yspDpNl2GR7ZiLk4DFCuejEhsA9qUlrjBqvNiaemAEzLjJqslsOX1xZ7ogLj6mt68dIqWPSchmiNgezR2bKzMTtJjB%2Fq3zzPPGLQmHOVH%2BSJ%2BMOQyfaCIJ71H6pXU3%2BwaUMbdHMiuUbD4QdA7qbg5LszCLMPfDXB5670RoDcqTf7g4iAZTEDaj2ZQoB2DHkMvW5ALTtPy%2Fg4bFZ&X-Amz-Signature=c983dfaf2239d1de8890963069e5497a18498353e9b29a4d8967ca09c495163a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7R7NFX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBxlKgvpKxf%2BQ7V%2FQwpXkG5k0uoAEe4N%2F9fmnAhMDEA6AiEAtI7cCj2L5sYaqYDMUv8GtMXRi9kxYupLCj8NiWFiE6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJCS%2Bizn3iRLkLEtlSrcAwYeDFV5nfnXM4cMSum%2BAhEGE%2BlieFSO%2Bvic%2BtuftLK324axs0augLopWJrIBIjFR24zf5MUH7k5bdhXvR5db%2B5U6vN5RGdjQ8%2Fy1QggcgKvU4fv0MU0NKvjzMxjzqVo5gx5g1d7V5LdajHDY%2B8AsTGtm3b0A9%2Beu0L%2Fa%2FGHDyBtFhCoNZnFr3yacOnXfV2mBOZkGG5fBz8erpEGD1DzV6KsJCkHFFmK20YzJ8G9fUlr%2FBWPMBiuI4U0nI4bHp2OPIJCf5xlBS8EjNwAf2W8etUsDr6KJnZbJXsocMBJ61dnM2h5XZED6AWj73nWovVFyZMs9kxd5GKP1nZpRFwQUW1iFer5F1OoPY2yvOHKpaa0c377fj4qPHWo9OAF6kgP2BuCCO6GnEKWHp6nrl3S0m2WjhGnbOyxseFtfHiXcBSyOTWRXRHVkv%2F%2FOj9UvETJDveZPBDjSS%2FBX5RUF5EfDmCzMszdriuyPX2NMfK7lFG9Yy0WfiJw7kJRoad1%2BaEF1e18PgrI5zNddolMti4C7C1F9u8vbQGayLyCfR0WEJK5gPQCG%2BqD05udFeUsWzoT4y5GJ22Z0oGZrwkuLuJPNy5SCrRVwcZOLeDjXYhF3h%2BOp%2F0THw1PdO0wwqGBMO2E1MMGOqUB%2B9%2FfylQ%2BRPOU2yspDpNl2GR7ZiLk4DFCuejEhsA9qUlrjBqvNiaemAEzLjJqslsOX1xZ7ogLj6mt68dIqWPSchmiNgezR2bKzMTtJjB%2Fq3zzPPGLQmHOVH%2BSJ%2BMOQyfaCIJ71H6pXU3%2BwaUMbdHMiuUbD4QdA7qbg5LszCLMPfDXB5670RoDcqTf7g4iAZTEDaj2ZQoB2DHkMvW5ALTtPy%2Fg4bFZ&X-Amz-Signature=aa525c175e7e0042f5c876d775ecdbdab63f097998e19f447eafec3ac781d5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7R7NFX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBxlKgvpKxf%2BQ7V%2FQwpXkG5k0uoAEe4N%2F9fmnAhMDEA6AiEAtI7cCj2L5sYaqYDMUv8GtMXRi9kxYupLCj8NiWFiE6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJCS%2Bizn3iRLkLEtlSrcAwYeDFV5nfnXM4cMSum%2BAhEGE%2BlieFSO%2Bvic%2BtuftLK324axs0augLopWJrIBIjFR24zf5MUH7k5bdhXvR5db%2B5U6vN5RGdjQ8%2Fy1QggcgKvU4fv0MU0NKvjzMxjzqVo5gx5g1d7V5LdajHDY%2B8AsTGtm3b0A9%2Beu0L%2Fa%2FGHDyBtFhCoNZnFr3yacOnXfV2mBOZkGG5fBz8erpEGD1DzV6KsJCkHFFmK20YzJ8G9fUlr%2FBWPMBiuI4U0nI4bHp2OPIJCf5xlBS8EjNwAf2W8etUsDr6KJnZbJXsocMBJ61dnM2h5XZED6AWj73nWovVFyZMs9kxd5GKP1nZpRFwQUW1iFer5F1OoPY2yvOHKpaa0c377fj4qPHWo9OAF6kgP2BuCCO6GnEKWHp6nrl3S0m2WjhGnbOyxseFtfHiXcBSyOTWRXRHVkv%2F%2FOj9UvETJDveZPBDjSS%2FBX5RUF5EfDmCzMszdriuyPX2NMfK7lFG9Yy0WfiJw7kJRoad1%2BaEF1e18PgrI5zNddolMti4C7C1F9u8vbQGayLyCfR0WEJK5gPQCG%2BqD05udFeUsWzoT4y5GJ22Z0oGZrwkuLuJPNy5SCrRVwcZOLeDjXYhF3h%2BOp%2F0THw1PdO0wwqGBMO2E1MMGOqUB%2B9%2FfylQ%2BRPOU2yspDpNl2GR7ZiLk4DFCuejEhsA9qUlrjBqvNiaemAEzLjJqslsOX1xZ7ogLj6mt68dIqWPSchmiNgezR2bKzMTtJjB%2Fq3zzPPGLQmHOVH%2BSJ%2BMOQyfaCIJ71H6pXU3%2BwaUMbdHMiuUbD4QdA7qbg5LszCLMPfDXB5670RoDcqTf7g4iAZTEDaj2ZQoB2DHkMvW5ALTtPy%2Fg4bFZ&X-Amz-Signature=0fb8227b3cfddf2ea49736a31d323c6c5b5af4d15b2129ccafa8718d5b109161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7R7NFX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBxlKgvpKxf%2BQ7V%2FQwpXkG5k0uoAEe4N%2F9fmnAhMDEA6AiEAtI7cCj2L5sYaqYDMUv8GtMXRi9kxYupLCj8NiWFiE6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJCS%2Bizn3iRLkLEtlSrcAwYeDFV5nfnXM4cMSum%2BAhEGE%2BlieFSO%2Bvic%2BtuftLK324axs0augLopWJrIBIjFR24zf5MUH7k5bdhXvR5db%2B5U6vN5RGdjQ8%2Fy1QggcgKvU4fv0MU0NKvjzMxjzqVo5gx5g1d7V5LdajHDY%2B8AsTGtm3b0A9%2Beu0L%2Fa%2FGHDyBtFhCoNZnFr3yacOnXfV2mBOZkGG5fBz8erpEGD1DzV6KsJCkHFFmK20YzJ8G9fUlr%2FBWPMBiuI4U0nI4bHp2OPIJCf5xlBS8EjNwAf2W8etUsDr6KJnZbJXsocMBJ61dnM2h5XZED6AWj73nWovVFyZMs9kxd5GKP1nZpRFwQUW1iFer5F1OoPY2yvOHKpaa0c377fj4qPHWo9OAF6kgP2BuCCO6GnEKWHp6nrl3S0m2WjhGnbOyxseFtfHiXcBSyOTWRXRHVkv%2F%2FOj9UvETJDveZPBDjSS%2FBX5RUF5EfDmCzMszdriuyPX2NMfK7lFG9Yy0WfiJw7kJRoad1%2BaEF1e18PgrI5zNddolMti4C7C1F9u8vbQGayLyCfR0WEJK5gPQCG%2BqD05udFeUsWzoT4y5GJ22Z0oGZrwkuLuJPNy5SCrRVwcZOLeDjXYhF3h%2BOp%2F0THw1PdO0wwqGBMO2E1MMGOqUB%2B9%2FfylQ%2BRPOU2yspDpNl2GR7ZiLk4DFCuejEhsA9qUlrjBqvNiaemAEzLjJqslsOX1xZ7ogLj6mt68dIqWPSchmiNgezR2bKzMTtJjB%2Fq3zzPPGLQmHOVH%2BSJ%2BMOQyfaCIJ71H6pXU3%2BwaUMbdHMiuUbD4QdA7qbg5LszCLMPfDXB5670RoDcqTf7g4iAZTEDaj2ZQoB2DHkMvW5ALTtPy%2Fg4bFZ&X-Amz-Signature=e739f58c78f4de339f7b902d9a99afac5be8b4b88df5dde53f2b8430749b4ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7R7NFX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBxlKgvpKxf%2BQ7V%2FQwpXkG5k0uoAEe4N%2F9fmnAhMDEA6AiEAtI7cCj2L5sYaqYDMUv8GtMXRi9kxYupLCj8NiWFiE6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJCS%2Bizn3iRLkLEtlSrcAwYeDFV5nfnXM4cMSum%2BAhEGE%2BlieFSO%2Bvic%2BtuftLK324axs0augLopWJrIBIjFR24zf5MUH7k5bdhXvR5db%2B5U6vN5RGdjQ8%2Fy1QggcgKvU4fv0MU0NKvjzMxjzqVo5gx5g1d7V5LdajHDY%2B8AsTGtm3b0A9%2Beu0L%2Fa%2FGHDyBtFhCoNZnFr3yacOnXfV2mBOZkGG5fBz8erpEGD1DzV6KsJCkHFFmK20YzJ8G9fUlr%2FBWPMBiuI4U0nI4bHp2OPIJCf5xlBS8EjNwAf2W8etUsDr6KJnZbJXsocMBJ61dnM2h5XZED6AWj73nWovVFyZMs9kxd5GKP1nZpRFwQUW1iFer5F1OoPY2yvOHKpaa0c377fj4qPHWo9OAF6kgP2BuCCO6GnEKWHp6nrl3S0m2WjhGnbOyxseFtfHiXcBSyOTWRXRHVkv%2F%2FOj9UvETJDveZPBDjSS%2FBX5RUF5EfDmCzMszdriuyPX2NMfK7lFG9Yy0WfiJw7kJRoad1%2BaEF1e18PgrI5zNddolMti4C7C1F9u8vbQGayLyCfR0WEJK5gPQCG%2BqD05udFeUsWzoT4y5GJ22Z0oGZrwkuLuJPNy5SCrRVwcZOLeDjXYhF3h%2BOp%2F0THw1PdO0wwqGBMO2E1MMGOqUB%2B9%2FfylQ%2BRPOU2yspDpNl2GR7ZiLk4DFCuejEhsA9qUlrjBqvNiaemAEzLjJqslsOX1xZ7ogLj6mt68dIqWPSchmiNgezR2bKzMTtJjB%2Fq3zzPPGLQmHOVH%2BSJ%2BMOQyfaCIJ71H6pXU3%2BwaUMbdHMiuUbD4QdA7qbg5LszCLMPfDXB5670RoDcqTf7g4iAZTEDaj2ZQoB2DHkMvW5ALTtPy%2Fg4bFZ&X-Amz-Signature=fcf20e528da145c3c460c9dbaa1402be23e9ab5dfd9b4ed2e43dfa61587e319f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7R7NFX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBxlKgvpKxf%2BQ7V%2FQwpXkG5k0uoAEe4N%2F9fmnAhMDEA6AiEAtI7cCj2L5sYaqYDMUv8GtMXRi9kxYupLCj8NiWFiE6sq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJCS%2Bizn3iRLkLEtlSrcAwYeDFV5nfnXM4cMSum%2BAhEGE%2BlieFSO%2Bvic%2BtuftLK324axs0augLopWJrIBIjFR24zf5MUH7k5bdhXvR5db%2B5U6vN5RGdjQ8%2Fy1QggcgKvU4fv0MU0NKvjzMxjzqVo5gx5g1d7V5LdajHDY%2B8AsTGtm3b0A9%2Beu0L%2Fa%2FGHDyBtFhCoNZnFr3yacOnXfV2mBOZkGG5fBz8erpEGD1DzV6KsJCkHFFmK20YzJ8G9fUlr%2FBWPMBiuI4U0nI4bHp2OPIJCf5xlBS8EjNwAf2W8etUsDr6KJnZbJXsocMBJ61dnM2h5XZED6AWj73nWovVFyZMs9kxd5GKP1nZpRFwQUW1iFer5F1OoPY2yvOHKpaa0c377fj4qPHWo9OAF6kgP2BuCCO6GnEKWHp6nrl3S0m2WjhGnbOyxseFtfHiXcBSyOTWRXRHVkv%2F%2FOj9UvETJDveZPBDjSS%2FBX5RUF5EfDmCzMszdriuyPX2NMfK7lFG9Yy0WfiJw7kJRoad1%2BaEF1e18PgrI5zNddolMti4C7C1F9u8vbQGayLyCfR0WEJK5gPQCG%2BqD05udFeUsWzoT4y5GJ22Z0oGZrwkuLuJPNy5SCrRVwcZOLeDjXYhF3h%2BOp%2F0THw1PdO0wwqGBMO2E1MMGOqUB%2B9%2FfylQ%2BRPOU2yspDpNl2GR7ZiLk4DFCuejEhsA9qUlrjBqvNiaemAEzLjJqslsOX1xZ7ogLj6mt68dIqWPSchmiNgezR2bKzMTtJjB%2Fq3zzPPGLQmHOVH%2BSJ%2BMOQyfaCIJ71H6pXU3%2BwaUMbdHMiuUbD4QdA7qbg5LszCLMPfDXB5670RoDcqTf7g4iAZTEDaj2ZQoB2DHkMvW5ALTtPy%2Fg4bFZ&X-Amz-Signature=6f59a88bd2e2b3f84112e0cde6370dff26c8460d2a39637c286168737647e777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
