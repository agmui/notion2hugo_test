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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AUQ5CB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCTDijRiW11zkzaMsNgp8W1U%2FFK5%2F4u9HapxxLEC9t11wIgJqD2P8pmxVK0pY1AeLyMwAnyYa05JAnEVc22%2BwDXctcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUDad1mRgI%2FELDbircA209EmGTfhdDSXN4PGob%2FprTKeQGVOpveGCr9Azthd1iguHmjBjXjIBpgheLPf8brdAxVB1CQId39VLdn1y02lOC7jmaxXO0Gf5RRfQqSjJtvTP5K5AHV%2Bolof7qYkq2ma%2FqiOOsAbgCHXteIn2g3gMCiZYw61nOyocurtZ2IA4rfvs6OWkAthlD354U0xEZhCaGnH0UHg5Aif0yNgqTMoQIyBce9LYbVaPZ63Tk10paKxGhRvgcp4Isae08ExvfBNMGk4Lmg%2FotVsvqlj1r%2FxclrSjUrhr4di7IyOwZux6YMf8w%2BIR8%2FlMTBw9oHX51xdDsCF%2BokxDAtMBg032V%2BPsW2y%2B4ueaV61AukxhoSUpFgTTbllHnKC0zyOyM6Jemdrkb89bpLokXwmD30wVr9T3xJuOi9ld9LuUFducriIAMRu1Kj5R%2FHGePa4BL9e3myPNtsO4Li2S4h6d4XxNw19L94f2IyiGhmtcChOoN4ymVtiZmQAyPF5l9K%2FjGF1Zxys6h2Uv29wvJEYCjUz6AMSf4MolK%2BdaZqKpPjyz25xZDEet0EwngCpQ4Ap89pE%2BaFzVn7lZqZOkPJlEj5JvvDqzrUEajSEnKqAzxEBYdl4rRG8qoiWkcOVMwDTT6MPjR28AGOqUBryOWFLKCt9gX8BFU48YlnCJnI85tfHtCpAqiBLSCLn0rJXyR7qDu8%2BH%2BE1VwJI86%2BIJYAUa1%2BlSM%2BeimH9FHEzfrEvBRcfZQZINJ4OeXZA%2F05YcI9drDy6oSqGK5qj1ShUytW%2B3hw%2F0yR43x36WUpqb5lOvdGkZAaHkDFd0C3zvThXswAsZDlXrkLEnwwOUSs1DjtTHnV32b7lxZUpgYlHxYyh2r&X-Amz-Signature=0e1cd07f4b50b9e5d39778880ffc56099ec2f5bd5b33ac9956c4c8c4b43f1da3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AUQ5CB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCTDijRiW11zkzaMsNgp8W1U%2FFK5%2F4u9HapxxLEC9t11wIgJqD2P8pmxVK0pY1AeLyMwAnyYa05JAnEVc22%2BwDXctcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUDad1mRgI%2FELDbircA209EmGTfhdDSXN4PGob%2FprTKeQGVOpveGCr9Azthd1iguHmjBjXjIBpgheLPf8brdAxVB1CQId39VLdn1y02lOC7jmaxXO0Gf5RRfQqSjJtvTP5K5AHV%2Bolof7qYkq2ma%2FqiOOsAbgCHXteIn2g3gMCiZYw61nOyocurtZ2IA4rfvs6OWkAthlD354U0xEZhCaGnH0UHg5Aif0yNgqTMoQIyBce9LYbVaPZ63Tk10paKxGhRvgcp4Isae08ExvfBNMGk4Lmg%2FotVsvqlj1r%2FxclrSjUrhr4di7IyOwZux6YMf8w%2BIR8%2FlMTBw9oHX51xdDsCF%2BokxDAtMBg032V%2BPsW2y%2B4ueaV61AukxhoSUpFgTTbllHnKC0zyOyM6Jemdrkb89bpLokXwmD30wVr9T3xJuOi9ld9LuUFducriIAMRu1Kj5R%2FHGePa4BL9e3myPNtsO4Li2S4h6d4XxNw19L94f2IyiGhmtcChOoN4ymVtiZmQAyPF5l9K%2FjGF1Zxys6h2Uv29wvJEYCjUz6AMSf4MolK%2BdaZqKpPjyz25xZDEet0EwngCpQ4Ap89pE%2BaFzVn7lZqZOkPJlEj5JvvDqzrUEajSEnKqAzxEBYdl4rRG8qoiWkcOVMwDTT6MPjR28AGOqUBryOWFLKCt9gX8BFU48YlnCJnI85tfHtCpAqiBLSCLn0rJXyR7qDu8%2BH%2BE1VwJI86%2BIJYAUa1%2BlSM%2BeimH9FHEzfrEvBRcfZQZINJ4OeXZA%2F05YcI9drDy6oSqGK5qj1ShUytW%2B3hw%2F0yR43x36WUpqb5lOvdGkZAaHkDFd0C3zvThXswAsZDlXrkLEnwwOUSs1DjtTHnV32b7lxZUpgYlHxYyh2r&X-Amz-Signature=b291227d378d1b875062b7a120292e70d7b7bbee06d03f70146e8511ebb31428&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AUQ5CB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCTDijRiW11zkzaMsNgp8W1U%2FFK5%2F4u9HapxxLEC9t11wIgJqD2P8pmxVK0pY1AeLyMwAnyYa05JAnEVc22%2BwDXctcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUDad1mRgI%2FELDbircA209EmGTfhdDSXN4PGob%2FprTKeQGVOpveGCr9Azthd1iguHmjBjXjIBpgheLPf8brdAxVB1CQId39VLdn1y02lOC7jmaxXO0Gf5RRfQqSjJtvTP5K5AHV%2Bolof7qYkq2ma%2FqiOOsAbgCHXteIn2g3gMCiZYw61nOyocurtZ2IA4rfvs6OWkAthlD354U0xEZhCaGnH0UHg5Aif0yNgqTMoQIyBce9LYbVaPZ63Tk10paKxGhRvgcp4Isae08ExvfBNMGk4Lmg%2FotVsvqlj1r%2FxclrSjUrhr4di7IyOwZux6YMf8w%2BIR8%2FlMTBw9oHX51xdDsCF%2BokxDAtMBg032V%2BPsW2y%2B4ueaV61AukxhoSUpFgTTbllHnKC0zyOyM6Jemdrkb89bpLokXwmD30wVr9T3xJuOi9ld9LuUFducriIAMRu1Kj5R%2FHGePa4BL9e3myPNtsO4Li2S4h6d4XxNw19L94f2IyiGhmtcChOoN4ymVtiZmQAyPF5l9K%2FjGF1Zxys6h2Uv29wvJEYCjUz6AMSf4MolK%2BdaZqKpPjyz25xZDEet0EwngCpQ4Ap89pE%2BaFzVn7lZqZOkPJlEj5JvvDqzrUEajSEnKqAzxEBYdl4rRG8qoiWkcOVMwDTT6MPjR28AGOqUBryOWFLKCt9gX8BFU48YlnCJnI85tfHtCpAqiBLSCLn0rJXyR7qDu8%2BH%2BE1VwJI86%2BIJYAUa1%2BlSM%2BeimH9FHEzfrEvBRcfZQZINJ4OeXZA%2F05YcI9drDy6oSqGK5qj1ShUytW%2B3hw%2F0yR43x36WUpqb5lOvdGkZAaHkDFd0C3zvThXswAsZDlXrkLEnwwOUSs1DjtTHnV32b7lxZUpgYlHxYyh2r&X-Amz-Signature=54fd6829f65b8097199b88cdd88f898e0f80a0f97acecbbbb54534f9ac1d336f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AUQ5CB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCTDijRiW11zkzaMsNgp8W1U%2FFK5%2F4u9HapxxLEC9t11wIgJqD2P8pmxVK0pY1AeLyMwAnyYa05JAnEVc22%2BwDXctcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUDad1mRgI%2FELDbircA209EmGTfhdDSXN4PGob%2FprTKeQGVOpveGCr9Azthd1iguHmjBjXjIBpgheLPf8brdAxVB1CQId39VLdn1y02lOC7jmaxXO0Gf5RRfQqSjJtvTP5K5AHV%2Bolof7qYkq2ma%2FqiOOsAbgCHXteIn2g3gMCiZYw61nOyocurtZ2IA4rfvs6OWkAthlD354U0xEZhCaGnH0UHg5Aif0yNgqTMoQIyBce9LYbVaPZ63Tk10paKxGhRvgcp4Isae08ExvfBNMGk4Lmg%2FotVsvqlj1r%2FxclrSjUrhr4di7IyOwZux6YMf8w%2BIR8%2FlMTBw9oHX51xdDsCF%2BokxDAtMBg032V%2BPsW2y%2B4ueaV61AukxhoSUpFgTTbllHnKC0zyOyM6Jemdrkb89bpLokXwmD30wVr9T3xJuOi9ld9LuUFducriIAMRu1Kj5R%2FHGePa4BL9e3myPNtsO4Li2S4h6d4XxNw19L94f2IyiGhmtcChOoN4ymVtiZmQAyPF5l9K%2FjGF1Zxys6h2Uv29wvJEYCjUz6AMSf4MolK%2BdaZqKpPjyz25xZDEet0EwngCpQ4Ap89pE%2BaFzVn7lZqZOkPJlEj5JvvDqzrUEajSEnKqAzxEBYdl4rRG8qoiWkcOVMwDTT6MPjR28AGOqUBryOWFLKCt9gX8BFU48YlnCJnI85tfHtCpAqiBLSCLn0rJXyR7qDu8%2BH%2BE1VwJI86%2BIJYAUa1%2BlSM%2BeimH9FHEzfrEvBRcfZQZINJ4OeXZA%2F05YcI9drDy6oSqGK5qj1ShUytW%2B3hw%2F0yR43x36WUpqb5lOvdGkZAaHkDFd0C3zvThXswAsZDlXrkLEnwwOUSs1DjtTHnV32b7lxZUpgYlHxYyh2r&X-Amz-Signature=5c3f51a87f140808652c1613c1216af59aa1d3ee0826bde9f836b807c53c1c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AUQ5CB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCTDijRiW11zkzaMsNgp8W1U%2FFK5%2F4u9HapxxLEC9t11wIgJqD2P8pmxVK0pY1AeLyMwAnyYa05JAnEVc22%2BwDXctcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUDad1mRgI%2FELDbircA209EmGTfhdDSXN4PGob%2FprTKeQGVOpveGCr9Azthd1iguHmjBjXjIBpgheLPf8brdAxVB1CQId39VLdn1y02lOC7jmaxXO0Gf5RRfQqSjJtvTP5K5AHV%2Bolof7qYkq2ma%2FqiOOsAbgCHXteIn2g3gMCiZYw61nOyocurtZ2IA4rfvs6OWkAthlD354U0xEZhCaGnH0UHg5Aif0yNgqTMoQIyBce9LYbVaPZ63Tk10paKxGhRvgcp4Isae08ExvfBNMGk4Lmg%2FotVsvqlj1r%2FxclrSjUrhr4di7IyOwZux6YMf8w%2BIR8%2FlMTBw9oHX51xdDsCF%2BokxDAtMBg032V%2BPsW2y%2B4ueaV61AukxhoSUpFgTTbllHnKC0zyOyM6Jemdrkb89bpLokXwmD30wVr9T3xJuOi9ld9LuUFducriIAMRu1Kj5R%2FHGePa4BL9e3myPNtsO4Li2S4h6d4XxNw19L94f2IyiGhmtcChOoN4ymVtiZmQAyPF5l9K%2FjGF1Zxys6h2Uv29wvJEYCjUz6AMSf4MolK%2BdaZqKpPjyz25xZDEet0EwngCpQ4Ap89pE%2BaFzVn7lZqZOkPJlEj5JvvDqzrUEajSEnKqAzxEBYdl4rRG8qoiWkcOVMwDTT6MPjR28AGOqUBryOWFLKCt9gX8BFU48YlnCJnI85tfHtCpAqiBLSCLn0rJXyR7qDu8%2BH%2BE1VwJI86%2BIJYAUa1%2BlSM%2BeimH9FHEzfrEvBRcfZQZINJ4OeXZA%2F05YcI9drDy6oSqGK5qj1ShUytW%2B3hw%2F0yR43x36WUpqb5lOvdGkZAaHkDFd0C3zvThXswAsZDlXrkLEnwwOUSs1DjtTHnV32b7lxZUpgYlHxYyh2r&X-Amz-Signature=421c863921cb1038170967984d91245de0d5cc702273e2d68c160b3dabd4caee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AUQ5CB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCTDijRiW11zkzaMsNgp8W1U%2FFK5%2F4u9HapxxLEC9t11wIgJqD2P8pmxVK0pY1AeLyMwAnyYa05JAnEVc22%2BwDXctcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaUDad1mRgI%2FELDbircA209EmGTfhdDSXN4PGob%2FprTKeQGVOpveGCr9Azthd1iguHmjBjXjIBpgheLPf8brdAxVB1CQId39VLdn1y02lOC7jmaxXO0Gf5RRfQqSjJtvTP5K5AHV%2Bolof7qYkq2ma%2FqiOOsAbgCHXteIn2g3gMCiZYw61nOyocurtZ2IA4rfvs6OWkAthlD354U0xEZhCaGnH0UHg5Aif0yNgqTMoQIyBce9LYbVaPZ63Tk10paKxGhRvgcp4Isae08ExvfBNMGk4Lmg%2FotVsvqlj1r%2FxclrSjUrhr4di7IyOwZux6YMf8w%2BIR8%2FlMTBw9oHX51xdDsCF%2BokxDAtMBg032V%2BPsW2y%2B4ueaV61AukxhoSUpFgTTbllHnKC0zyOyM6Jemdrkb89bpLokXwmD30wVr9T3xJuOi9ld9LuUFducriIAMRu1Kj5R%2FHGePa4BL9e3myPNtsO4Li2S4h6d4XxNw19L94f2IyiGhmtcChOoN4ymVtiZmQAyPF5l9K%2FjGF1Zxys6h2Uv29wvJEYCjUz6AMSf4MolK%2BdaZqKpPjyz25xZDEet0EwngCpQ4Ap89pE%2BaFzVn7lZqZOkPJlEj5JvvDqzrUEajSEnKqAzxEBYdl4rRG8qoiWkcOVMwDTT6MPjR28AGOqUBryOWFLKCt9gX8BFU48YlnCJnI85tfHtCpAqiBLSCLn0rJXyR7qDu8%2BH%2BE1VwJI86%2BIJYAUa1%2BlSM%2BeimH9FHEzfrEvBRcfZQZINJ4OeXZA%2F05YcI9drDy6oSqGK5qj1ShUytW%2B3hw%2F0yR43x36WUpqb5lOvdGkZAaHkDFd0C3zvThXswAsZDlXrkLEnwwOUSs1DjtTHnV32b7lxZUpgYlHxYyh2r&X-Amz-Signature=9e25ea82265e9ef5f57272e6e12559633bd300f6cd981b04ec47bc58976f56ad&X-Amz-SignedHeaders=host&x-id=GetObject)
