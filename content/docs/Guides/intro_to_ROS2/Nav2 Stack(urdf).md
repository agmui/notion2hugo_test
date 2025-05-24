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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5MVYHU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG4qC8yW6zcaDAW3So9AVx%2BCEvyEFCLoW5Ez%2BQiEXoSCAiEA43%2FyhtZeUtqs9%2B7W014I1dEUertj9lfvH9m3S9j9FlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKrMOhcAYA9h39DhBCrcA67SgvbUUJVIqWE%2F8ddwYRC1KY4TYon69NkI8AuaJK135TflhhrwCbhJcZnpuAswQ7f325TmS47LRBiqnwmQEaA%2FkhziP7HxeiOhc37%2FYQFmJm8ehCj4K4HIuy3M8mshn3TgxvhBiGx64eo1f2najx%2FXG0Q8LI3I4%2BauGknMmbYG1MR0%2FRzB2uuGOwwHhLrrtzMfYO5eW6nhkYWSkn4k5XgGP%2F7UbEgnYF20gP5IIKuLv9jHh9VRvkdSTyO%2Buu%2BK%2FmzpNcFe2VD2Ngp8q866HTxxOME9vpGCQCHYmbVRkk8f04Sr%2BsziAeR63BCBy4psrsH1GLSSxxmAdb%2BFPQmLMS7XPMDkOA%2Fhxgh8TabHoyixZnsVR%2BweV%2BZ6RV90wqukT7ss7cASSnpQi3X%2BgMZbkouAugr6cKktxB0P88L35VS9RkshnZ6jyhUS0xGwUovfAOLlhibE9uHtBXNWdsiyTH3qPFDBJ%2BXfexv3twHoYXvhFXpiufJhumKL3pAmiDc1eHVqcOLPi3a7IjZA58UzXC%2FJhpr8S0Eo0JfXROYg27qO%2B0pm4BsIOGxEN9GD4Ll1yBVC5KpuibawKc57lHMMolKZfnov9kMePKAAjHD1nI%2Bf4UP4E56KCVYOHNaHMMvfxcEGOqUBZPGFv7LYJjBzss8Nd6Vb72RDboe%2Bb97FAWLd6OKw6GG45Kguh007yvpv039rHbWcQUniepwHvNe3nen1GurFvfR%2FVM1RAvSW0hViIVRBPNk%2B5Ih2lkfA%2Bvf4%2F1hUYF61NrhYk0o9oHTQTMrSb9CKehpSAkRIYL%2Baf3ot6wOp4wD08JULW2asRwGJR8Q3fGokJnKEEFA1Pg1aVECmPO71C5se1%2Fr7&X-Amz-Signature=18d0be892098f5a90add68113fcc938cd77d1acdf343837ae18b54707f38bc35&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5MVYHU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG4qC8yW6zcaDAW3So9AVx%2BCEvyEFCLoW5Ez%2BQiEXoSCAiEA43%2FyhtZeUtqs9%2B7W014I1dEUertj9lfvH9m3S9j9FlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKrMOhcAYA9h39DhBCrcA67SgvbUUJVIqWE%2F8ddwYRC1KY4TYon69NkI8AuaJK135TflhhrwCbhJcZnpuAswQ7f325TmS47LRBiqnwmQEaA%2FkhziP7HxeiOhc37%2FYQFmJm8ehCj4K4HIuy3M8mshn3TgxvhBiGx64eo1f2najx%2FXG0Q8LI3I4%2BauGknMmbYG1MR0%2FRzB2uuGOwwHhLrrtzMfYO5eW6nhkYWSkn4k5XgGP%2F7UbEgnYF20gP5IIKuLv9jHh9VRvkdSTyO%2Buu%2BK%2FmzpNcFe2VD2Ngp8q866HTxxOME9vpGCQCHYmbVRkk8f04Sr%2BsziAeR63BCBy4psrsH1GLSSxxmAdb%2BFPQmLMS7XPMDkOA%2Fhxgh8TabHoyixZnsVR%2BweV%2BZ6RV90wqukT7ss7cASSnpQi3X%2BgMZbkouAugr6cKktxB0P88L35VS9RkshnZ6jyhUS0xGwUovfAOLlhibE9uHtBXNWdsiyTH3qPFDBJ%2BXfexv3twHoYXvhFXpiufJhumKL3pAmiDc1eHVqcOLPi3a7IjZA58UzXC%2FJhpr8S0Eo0JfXROYg27qO%2B0pm4BsIOGxEN9GD4Ll1yBVC5KpuibawKc57lHMMolKZfnov9kMePKAAjHD1nI%2Bf4UP4E56KCVYOHNaHMMvfxcEGOqUBZPGFv7LYJjBzss8Nd6Vb72RDboe%2Bb97FAWLd6OKw6GG45Kguh007yvpv039rHbWcQUniepwHvNe3nen1GurFvfR%2FVM1RAvSW0hViIVRBPNk%2B5Ih2lkfA%2Bvf4%2F1hUYF61NrhYk0o9oHTQTMrSb9CKehpSAkRIYL%2Baf3ot6wOp4wD08JULW2asRwGJR8Q3fGokJnKEEFA1Pg1aVECmPO71C5se1%2Fr7&X-Amz-Signature=a6b441b44c3de7cf9adb35f9f03b89792d346c9f953b62d48e145f8f05467429&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5MVYHU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG4qC8yW6zcaDAW3So9AVx%2BCEvyEFCLoW5Ez%2BQiEXoSCAiEA43%2FyhtZeUtqs9%2B7W014I1dEUertj9lfvH9m3S9j9FlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKrMOhcAYA9h39DhBCrcA67SgvbUUJVIqWE%2F8ddwYRC1KY4TYon69NkI8AuaJK135TflhhrwCbhJcZnpuAswQ7f325TmS47LRBiqnwmQEaA%2FkhziP7HxeiOhc37%2FYQFmJm8ehCj4K4HIuy3M8mshn3TgxvhBiGx64eo1f2najx%2FXG0Q8LI3I4%2BauGknMmbYG1MR0%2FRzB2uuGOwwHhLrrtzMfYO5eW6nhkYWSkn4k5XgGP%2F7UbEgnYF20gP5IIKuLv9jHh9VRvkdSTyO%2Buu%2BK%2FmzpNcFe2VD2Ngp8q866HTxxOME9vpGCQCHYmbVRkk8f04Sr%2BsziAeR63BCBy4psrsH1GLSSxxmAdb%2BFPQmLMS7XPMDkOA%2Fhxgh8TabHoyixZnsVR%2BweV%2BZ6RV90wqukT7ss7cASSnpQi3X%2BgMZbkouAugr6cKktxB0P88L35VS9RkshnZ6jyhUS0xGwUovfAOLlhibE9uHtBXNWdsiyTH3qPFDBJ%2BXfexv3twHoYXvhFXpiufJhumKL3pAmiDc1eHVqcOLPi3a7IjZA58UzXC%2FJhpr8S0Eo0JfXROYg27qO%2B0pm4BsIOGxEN9GD4Ll1yBVC5KpuibawKc57lHMMolKZfnov9kMePKAAjHD1nI%2Bf4UP4E56KCVYOHNaHMMvfxcEGOqUBZPGFv7LYJjBzss8Nd6Vb72RDboe%2Bb97FAWLd6OKw6GG45Kguh007yvpv039rHbWcQUniepwHvNe3nen1GurFvfR%2FVM1RAvSW0hViIVRBPNk%2B5Ih2lkfA%2Bvf4%2F1hUYF61NrhYk0o9oHTQTMrSb9CKehpSAkRIYL%2Baf3ot6wOp4wD08JULW2asRwGJR8Q3fGokJnKEEFA1Pg1aVECmPO71C5se1%2Fr7&X-Amz-Signature=0b6dc1545e86d3f226d74ee87b98d2c70e29e02343a27471cf847f42070020ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5MVYHU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG4qC8yW6zcaDAW3So9AVx%2BCEvyEFCLoW5Ez%2BQiEXoSCAiEA43%2FyhtZeUtqs9%2B7W014I1dEUertj9lfvH9m3S9j9FlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKrMOhcAYA9h39DhBCrcA67SgvbUUJVIqWE%2F8ddwYRC1KY4TYon69NkI8AuaJK135TflhhrwCbhJcZnpuAswQ7f325TmS47LRBiqnwmQEaA%2FkhziP7HxeiOhc37%2FYQFmJm8ehCj4K4HIuy3M8mshn3TgxvhBiGx64eo1f2najx%2FXG0Q8LI3I4%2BauGknMmbYG1MR0%2FRzB2uuGOwwHhLrrtzMfYO5eW6nhkYWSkn4k5XgGP%2F7UbEgnYF20gP5IIKuLv9jHh9VRvkdSTyO%2Buu%2BK%2FmzpNcFe2VD2Ngp8q866HTxxOME9vpGCQCHYmbVRkk8f04Sr%2BsziAeR63BCBy4psrsH1GLSSxxmAdb%2BFPQmLMS7XPMDkOA%2Fhxgh8TabHoyixZnsVR%2BweV%2BZ6RV90wqukT7ss7cASSnpQi3X%2BgMZbkouAugr6cKktxB0P88L35VS9RkshnZ6jyhUS0xGwUovfAOLlhibE9uHtBXNWdsiyTH3qPFDBJ%2BXfexv3twHoYXvhFXpiufJhumKL3pAmiDc1eHVqcOLPi3a7IjZA58UzXC%2FJhpr8S0Eo0JfXROYg27qO%2B0pm4BsIOGxEN9GD4Ll1yBVC5KpuibawKc57lHMMolKZfnov9kMePKAAjHD1nI%2Bf4UP4E56KCVYOHNaHMMvfxcEGOqUBZPGFv7LYJjBzss8Nd6Vb72RDboe%2Bb97FAWLd6OKw6GG45Kguh007yvpv039rHbWcQUniepwHvNe3nen1GurFvfR%2FVM1RAvSW0hViIVRBPNk%2B5Ih2lkfA%2Bvf4%2F1hUYF61NrhYk0o9oHTQTMrSb9CKehpSAkRIYL%2Baf3ot6wOp4wD08JULW2asRwGJR8Q3fGokJnKEEFA1Pg1aVECmPO71C5se1%2Fr7&X-Amz-Signature=0cb323734be0aa17be63e8efffc6938940a35a7ac2edc2e04dcaad421af20c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5MVYHU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG4qC8yW6zcaDAW3So9AVx%2BCEvyEFCLoW5Ez%2BQiEXoSCAiEA43%2FyhtZeUtqs9%2B7W014I1dEUertj9lfvH9m3S9j9FlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKrMOhcAYA9h39DhBCrcA67SgvbUUJVIqWE%2F8ddwYRC1KY4TYon69NkI8AuaJK135TflhhrwCbhJcZnpuAswQ7f325TmS47LRBiqnwmQEaA%2FkhziP7HxeiOhc37%2FYQFmJm8ehCj4K4HIuy3M8mshn3TgxvhBiGx64eo1f2najx%2FXG0Q8LI3I4%2BauGknMmbYG1MR0%2FRzB2uuGOwwHhLrrtzMfYO5eW6nhkYWSkn4k5XgGP%2F7UbEgnYF20gP5IIKuLv9jHh9VRvkdSTyO%2Buu%2BK%2FmzpNcFe2VD2Ngp8q866HTxxOME9vpGCQCHYmbVRkk8f04Sr%2BsziAeR63BCBy4psrsH1GLSSxxmAdb%2BFPQmLMS7XPMDkOA%2Fhxgh8TabHoyixZnsVR%2BweV%2BZ6RV90wqukT7ss7cASSnpQi3X%2BgMZbkouAugr6cKktxB0P88L35VS9RkshnZ6jyhUS0xGwUovfAOLlhibE9uHtBXNWdsiyTH3qPFDBJ%2BXfexv3twHoYXvhFXpiufJhumKL3pAmiDc1eHVqcOLPi3a7IjZA58UzXC%2FJhpr8S0Eo0JfXROYg27qO%2B0pm4BsIOGxEN9GD4Ll1yBVC5KpuibawKc57lHMMolKZfnov9kMePKAAjHD1nI%2Bf4UP4E56KCVYOHNaHMMvfxcEGOqUBZPGFv7LYJjBzss8Nd6Vb72RDboe%2Bb97FAWLd6OKw6GG45Kguh007yvpv039rHbWcQUniepwHvNe3nen1GurFvfR%2FVM1RAvSW0hViIVRBPNk%2B5Ih2lkfA%2Bvf4%2F1hUYF61NrhYk0o9oHTQTMrSb9CKehpSAkRIYL%2Baf3ot6wOp4wD08JULW2asRwGJR8Q3fGokJnKEEFA1Pg1aVECmPO71C5se1%2Fr7&X-Amz-Signature=a40a9d03f1ab7ad209bcb0ae4f7ec1ebe0cb57b52db09cfdb8d224f8f21aeb67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB5MVYHU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIG4qC8yW6zcaDAW3So9AVx%2BCEvyEFCLoW5Ez%2BQiEXoSCAiEA43%2FyhtZeUtqs9%2B7W014I1dEUertj9lfvH9m3S9j9FlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKrMOhcAYA9h39DhBCrcA67SgvbUUJVIqWE%2F8ddwYRC1KY4TYon69NkI8AuaJK135TflhhrwCbhJcZnpuAswQ7f325TmS47LRBiqnwmQEaA%2FkhziP7HxeiOhc37%2FYQFmJm8ehCj4K4HIuy3M8mshn3TgxvhBiGx64eo1f2najx%2FXG0Q8LI3I4%2BauGknMmbYG1MR0%2FRzB2uuGOwwHhLrrtzMfYO5eW6nhkYWSkn4k5XgGP%2F7UbEgnYF20gP5IIKuLv9jHh9VRvkdSTyO%2Buu%2BK%2FmzpNcFe2VD2Ngp8q866HTxxOME9vpGCQCHYmbVRkk8f04Sr%2BsziAeR63BCBy4psrsH1GLSSxxmAdb%2BFPQmLMS7XPMDkOA%2Fhxgh8TabHoyixZnsVR%2BweV%2BZ6RV90wqukT7ss7cASSnpQi3X%2BgMZbkouAugr6cKktxB0P88L35VS9RkshnZ6jyhUS0xGwUovfAOLlhibE9uHtBXNWdsiyTH3qPFDBJ%2BXfexv3twHoYXvhFXpiufJhumKL3pAmiDc1eHVqcOLPi3a7IjZA58UzXC%2FJhpr8S0Eo0JfXROYg27qO%2B0pm4BsIOGxEN9GD4Ll1yBVC5KpuibawKc57lHMMolKZfnov9kMePKAAjHD1nI%2Bf4UP4E56KCVYOHNaHMMvfxcEGOqUBZPGFv7LYJjBzss8Nd6Vb72RDboe%2Bb97FAWLd6OKw6GG45Kguh007yvpv039rHbWcQUniepwHvNe3nen1GurFvfR%2FVM1RAvSW0hViIVRBPNk%2B5Ih2lkfA%2Bvf4%2F1hUYF61NrhYk0o9oHTQTMrSb9CKehpSAkRIYL%2Baf3ot6wOp4wD08JULW2asRwGJR8Q3fGokJnKEEFA1Pg1aVECmPO71C5se1%2Fr7&X-Amz-Signature=a79263ac0d318c022e3d074063c403879b67e87575291e1a90e1aa9b61e2367f&X-Amz-SignedHeaders=host&x-id=GetObject)
