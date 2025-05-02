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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYLOOVB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvIEnv5AzAzff5XV%2Fk06Fsvc8lKAnGo07DvbcWRsIKKAiEAyu9R5oD1ZBpClUENaDy9Agkwk4VUObARIETAzp%2FgnE4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfNrS79VqDSaLeRCCrcA7WdgqwPjGDPZHD3X4ggGLDpSYAgKlCh4vrks5sFpDcuC99YzhgIlmfjQAquOIaDEUBgAp1XznE8F897I5SnA%2BrMn0NBrVyYZyaHS1MR5hUolqTdJHUTLvf8cbL8sd%2BrOhIZnN5vCNU%2BPoTSULbSoqj3BLFAHttqSlGOU2qDsVe8bTm58FGFAGavlIVLi8y8iVVsPSlS2vlMo1ZWGpa3QeuJdT32J7gvmY4u2pXHFI2MHCGs%2F0mZPkA19cSWqBsssoCLAMbGZGwxirExei1J5Ci0MOK5p%2Fpv%2FxmdUL0WYXZtM3RAqyns2e9mCvXGiJv20qyzRBczepYFP9Yi1RnZCteRiXqBztcgndlgeYs6bXATI56tWNR0%2FSttEC8QjPcjT47tKBWf6wjEqbzndcPXXwyfacGtD8%2BBDXbtPSMmBsm9fvM8Cq2DIY5BWziNhMS9BQXrAC6UamxR2K5cKGji3O7wiz9rqCO5GBNIV%2Fd61xBE9hN32htl0sr4%2B%2B6%2FVPEriaAV9biMVqmt0FnmEyyLEaP5nwvnd5huebrc4%2FQuPQAkYssnoSs0QmP0ewiTHgNfiwtH%2F%2FQHVf8Q19pU2FHItJq3YnSDaDQw5%2FBJ6%2Bi5nI%2FRKpQoQmYAPep54g6UMOeM1MAGOqUBK8XpfVJGVq14z5x4TchMYXx6dxxIOxe6Oo2xsYDn%2FCsFm1q0Bz%2FpSdWkL5JzM73At60qt1S91Rpl73OTUEUwc2hrSrX6eB6l8UsalXI4uMG74AZmlMixBiflZCppLVkL8nYLHxHS55qgGh7PFYb2rKjMNOXbcmJjvHQurpHafVns7xJVFniEnGUowF43j6LwwQBaxhlgpTzJgxLDFNMvNrKMCIPx&X-Amz-Signature=05838fedad3ea7350b65cec1e081f5c75df9ad394b804ec66c43ac841419c049&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYLOOVB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvIEnv5AzAzff5XV%2Fk06Fsvc8lKAnGo07DvbcWRsIKKAiEAyu9R5oD1ZBpClUENaDy9Agkwk4VUObARIETAzp%2FgnE4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfNrS79VqDSaLeRCCrcA7WdgqwPjGDPZHD3X4ggGLDpSYAgKlCh4vrks5sFpDcuC99YzhgIlmfjQAquOIaDEUBgAp1XznE8F897I5SnA%2BrMn0NBrVyYZyaHS1MR5hUolqTdJHUTLvf8cbL8sd%2BrOhIZnN5vCNU%2BPoTSULbSoqj3BLFAHttqSlGOU2qDsVe8bTm58FGFAGavlIVLi8y8iVVsPSlS2vlMo1ZWGpa3QeuJdT32J7gvmY4u2pXHFI2MHCGs%2F0mZPkA19cSWqBsssoCLAMbGZGwxirExei1J5Ci0MOK5p%2Fpv%2FxmdUL0WYXZtM3RAqyns2e9mCvXGiJv20qyzRBczepYFP9Yi1RnZCteRiXqBztcgndlgeYs6bXATI56tWNR0%2FSttEC8QjPcjT47tKBWf6wjEqbzndcPXXwyfacGtD8%2BBDXbtPSMmBsm9fvM8Cq2DIY5BWziNhMS9BQXrAC6UamxR2K5cKGji3O7wiz9rqCO5GBNIV%2Fd61xBE9hN32htl0sr4%2B%2B6%2FVPEriaAV9biMVqmt0FnmEyyLEaP5nwvnd5huebrc4%2FQuPQAkYssnoSs0QmP0ewiTHgNfiwtH%2F%2FQHVf8Q19pU2FHItJq3YnSDaDQw5%2FBJ6%2Bi5nI%2FRKpQoQmYAPep54g6UMOeM1MAGOqUBK8XpfVJGVq14z5x4TchMYXx6dxxIOxe6Oo2xsYDn%2FCsFm1q0Bz%2FpSdWkL5JzM73At60qt1S91Rpl73OTUEUwc2hrSrX6eB6l8UsalXI4uMG74AZmlMixBiflZCppLVkL8nYLHxHS55qgGh7PFYb2rKjMNOXbcmJjvHQurpHafVns7xJVFniEnGUowF43j6LwwQBaxhlgpTzJgxLDFNMvNrKMCIPx&X-Amz-Signature=34053d8f1908cd701a7ffec0dc7cdfe1b0408d72946372e068a6fa400178a094&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYLOOVB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvIEnv5AzAzff5XV%2Fk06Fsvc8lKAnGo07DvbcWRsIKKAiEAyu9R5oD1ZBpClUENaDy9Agkwk4VUObARIETAzp%2FgnE4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfNrS79VqDSaLeRCCrcA7WdgqwPjGDPZHD3X4ggGLDpSYAgKlCh4vrks5sFpDcuC99YzhgIlmfjQAquOIaDEUBgAp1XznE8F897I5SnA%2BrMn0NBrVyYZyaHS1MR5hUolqTdJHUTLvf8cbL8sd%2BrOhIZnN5vCNU%2BPoTSULbSoqj3BLFAHttqSlGOU2qDsVe8bTm58FGFAGavlIVLi8y8iVVsPSlS2vlMo1ZWGpa3QeuJdT32J7gvmY4u2pXHFI2MHCGs%2F0mZPkA19cSWqBsssoCLAMbGZGwxirExei1J5Ci0MOK5p%2Fpv%2FxmdUL0WYXZtM3RAqyns2e9mCvXGiJv20qyzRBczepYFP9Yi1RnZCteRiXqBztcgndlgeYs6bXATI56tWNR0%2FSttEC8QjPcjT47tKBWf6wjEqbzndcPXXwyfacGtD8%2BBDXbtPSMmBsm9fvM8Cq2DIY5BWziNhMS9BQXrAC6UamxR2K5cKGji3O7wiz9rqCO5GBNIV%2Fd61xBE9hN32htl0sr4%2B%2B6%2FVPEriaAV9biMVqmt0FnmEyyLEaP5nwvnd5huebrc4%2FQuPQAkYssnoSs0QmP0ewiTHgNfiwtH%2F%2FQHVf8Q19pU2FHItJq3YnSDaDQw5%2FBJ6%2Bi5nI%2FRKpQoQmYAPep54g6UMOeM1MAGOqUBK8XpfVJGVq14z5x4TchMYXx6dxxIOxe6Oo2xsYDn%2FCsFm1q0Bz%2FpSdWkL5JzM73At60qt1S91Rpl73OTUEUwc2hrSrX6eB6l8UsalXI4uMG74AZmlMixBiflZCppLVkL8nYLHxHS55qgGh7PFYb2rKjMNOXbcmJjvHQurpHafVns7xJVFniEnGUowF43j6LwwQBaxhlgpTzJgxLDFNMvNrKMCIPx&X-Amz-Signature=7de28ecfa5ac5947591be092f6c9b7ed6cb99afcd0ada565e587c2eb2b6d1d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYLOOVB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvIEnv5AzAzff5XV%2Fk06Fsvc8lKAnGo07DvbcWRsIKKAiEAyu9R5oD1ZBpClUENaDy9Agkwk4VUObARIETAzp%2FgnE4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfNrS79VqDSaLeRCCrcA7WdgqwPjGDPZHD3X4ggGLDpSYAgKlCh4vrks5sFpDcuC99YzhgIlmfjQAquOIaDEUBgAp1XznE8F897I5SnA%2BrMn0NBrVyYZyaHS1MR5hUolqTdJHUTLvf8cbL8sd%2BrOhIZnN5vCNU%2BPoTSULbSoqj3BLFAHttqSlGOU2qDsVe8bTm58FGFAGavlIVLi8y8iVVsPSlS2vlMo1ZWGpa3QeuJdT32J7gvmY4u2pXHFI2MHCGs%2F0mZPkA19cSWqBsssoCLAMbGZGwxirExei1J5Ci0MOK5p%2Fpv%2FxmdUL0WYXZtM3RAqyns2e9mCvXGiJv20qyzRBczepYFP9Yi1RnZCteRiXqBztcgndlgeYs6bXATI56tWNR0%2FSttEC8QjPcjT47tKBWf6wjEqbzndcPXXwyfacGtD8%2BBDXbtPSMmBsm9fvM8Cq2DIY5BWziNhMS9BQXrAC6UamxR2K5cKGji3O7wiz9rqCO5GBNIV%2Fd61xBE9hN32htl0sr4%2B%2B6%2FVPEriaAV9biMVqmt0FnmEyyLEaP5nwvnd5huebrc4%2FQuPQAkYssnoSs0QmP0ewiTHgNfiwtH%2F%2FQHVf8Q19pU2FHItJq3YnSDaDQw5%2FBJ6%2Bi5nI%2FRKpQoQmYAPep54g6UMOeM1MAGOqUBK8XpfVJGVq14z5x4TchMYXx6dxxIOxe6Oo2xsYDn%2FCsFm1q0Bz%2FpSdWkL5JzM73At60qt1S91Rpl73OTUEUwc2hrSrX6eB6l8UsalXI4uMG74AZmlMixBiflZCppLVkL8nYLHxHS55qgGh7PFYb2rKjMNOXbcmJjvHQurpHafVns7xJVFniEnGUowF43j6LwwQBaxhlgpTzJgxLDFNMvNrKMCIPx&X-Amz-Signature=87b8af6d6be807cd72103b06e656650d074be74eb000903d387cb36ff6bbae78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYLOOVB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvIEnv5AzAzff5XV%2Fk06Fsvc8lKAnGo07DvbcWRsIKKAiEAyu9R5oD1ZBpClUENaDy9Agkwk4VUObARIETAzp%2FgnE4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfNrS79VqDSaLeRCCrcA7WdgqwPjGDPZHD3X4ggGLDpSYAgKlCh4vrks5sFpDcuC99YzhgIlmfjQAquOIaDEUBgAp1XznE8F897I5SnA%2BrMn0NBrVyYZyaHS1MR5hUolqTdJHUTLvf8cbL8sd%2BrOhIZnN5vCNU%2BPoTSULbSoqj3BLFAHttqSlGOU2qDsVe8bTm58FGFAGavlIVLi8y8iVVsPSlS2vlMo1ZWGpa3QeuJdT32J7gvmY4u2pXHFI2MHCGs%2F0mZPkA19cSWqBsssoCLAMbGZGwxirExei1J5Ci0MOK5p%2Fpv%2FxmdUL0WYXZtM3RAqyns2e9mCvXGiJv20qyzRBczepYFP9Yi1RnZCteRiXqBztcgndlgeYs6bXATI56tWNR0%2FSttEC8QjPcjT47tKBWf6wjEqbzndcPXXwyfacGtD8%2BBDXbtPSMmBsm9fvM8Cq2DIY5BWziNhMS9BQXrAC6UamxR2K5cKGji3O7wiz9rqCO5GBNIV%2Fd61xBE9hN32htl0sr4%2B%2B6%2FVPEriaAV9biMVqmt0FnmEyyLEaP5nwvnd5huebrc4%2FQuPQAkYssnoSs0QmP0ewiTHgNfiwtH%2F%2FQHVf8Q19pU2FHItJq3YnSDaDQw5%2FBJ6%2Bi5nI%2FRKpQoQmYAPep54g6UMOeM1MAGOqUBK8XpfVJGVq14z5x4TchMYXx6dxxIOxe6Oo2xsYDn%2FCsFm1q0Bz%2FpSdWkL5JzM73At60qt1S91Rpl73OTUEUwc2hrSrX6eB6l8UsalXI4uMG74AZmlMixBiflZCppLVkL8nYLHxHS55qgGh7PFYb2rKjMNOXbcmJjvHQurpHafVns7xJVFniEnGUowF43j6LwwQBaxhlgpTzJgxLDFNMvNrKMCIPx&X-Amz-Signature=98c043a04a8bdbcb6ecd75c07d3b624b3e09cd48557d7ad63f6df33c1b1aae0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYLOOVB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFvIEnv5AzAzff5XV%2Fk06Fsvc8lKAnGo07DvbcWRsIKKAiEAyu9R5oD1ZBpClUENaDy9Agkwk4VUObARIETAzp%2FgnE4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfNrS79VqDSaLeRCCrcA7WdgqwPjGDPZHD3X4ggGLDpSYAgKlCh4vrks5sFpDcuC99YzhgIlmfjQAquOIaDEUBgAp1XznE8F897I5SnA%2BrMn0NBrVyYZyaHS1MR5hUolqTdJHUTLvf8cbL8sd%2BrOhIZnN5vCNU%2BPoTSULbSoqj3BLFAHttqSlGOU2qDsVe8bTm58FGFAGavlIVLi8y8iVVsPSlS2vlMo1ZWGpa3QeuJdT32J7gvmY4u2pXHFI2MHCGs%2F0mZPkA19cSWqBsssoCLAMbGZGwxirExei1J5Ci0MOK5p%2Fpv%2FxmdUL0WYXZtM3RAqyns2e9mCvXGiJv20qyzRBczepYFP9Yi1RnZCteRiXqBztcgndlgeYs6bXATI56tWNR0%2FSttEC8QjPcjT47tKBWf6wjEqbzndcPXXwyfacGtD8%2BBDXbtPSMmBsm9fvM8Cq2DIY5BWziNhMS9BQXrAC6UamxR2K5cKGji3O7wiz9rqCO5GBNIV%2Fd61xBE9hN32htl0sr4%2B%2B6%2FVPEriaAV9biMVqmt0FnmEyyLEaP5nwvnd5huebrc4%2FQuPQAkYssnoSs0QmP0ewiTHgNfiwtH%2F%2FQHVf8Q19pU2FHItJq3YnSDaDQw5%2FBJ6%2Bi5nI%2FRKpQoQmYAPep54g6UMOeM1MAGOqUBK8XpfVJGVq14z5x4TchMYXx6dxxIOxe6Oo2xsYDn%2FCsFm1q0Bz%2FpSdWkL5JzM73At60qt1S91Rpl73OTUEUwc2hrSrX6eB6l8UsalXI4uMG74AZmlMixBiflZCppLVkL8nYLHxHS55qgGh7PFYb2rKjMNOXbcmJjvHQurpHafVns7xJVFniEnGUowF43j6LwwQBaxhlgpTzJgxLDFNMvNrKMCIPx&X-Amz-Signature=9341dc542f7d4c3cf86163f29c90d70085c4791b4f328777cd839a38858d82b3&X-Amz-SignedHeaders=host&x-id=GetObject)
