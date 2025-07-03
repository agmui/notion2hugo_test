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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDXASJP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFc0%2BrZXvVE9ZofE6zLLISw74HoYgWj4%2B37iwm5gjp2VAiEAhG24dz5N7bXPovWs4Ph6MWNzrdohwXsyo5AknXVV3pwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLUgvVkZejosaXHawircA6t1I3IAMqJ071RdKlZWi7eMXbaHdFKhTZchaLiIBWD7oydCpkVf47JPnlqS54aHQexsatrd12ccSGAcGw4Vhk2zQd6IrEnatEynhuxl9yL%2BouRQTq9aK4lj7SBJdVTmAh4MgSvmgjar1q1RdRSD5nDjypNhhu8P8MoR%2BrUZY%2FuUm0RNPfW2tftrw5RQkJEgMt%2F1bCtKJKSj7Sc8rhKHQNR%2FkAYgftW3Wg5RGvPHqmk1D%2Bv1zB3aiQPEuDohE1UWWteIoXFIrbRMFXCQIp3826Nano8GjsKuDkaRIw%2B6gEtj6J4LdPDueQvFt%2BtNmHUrwpuefS9JtESFaeJ539NOHNSl6MKlwJkYJ2kkv%2BjGL90vcRjOTQAXQ0DZwWQQH8%2B6QMUgtySm4WMv1C1fnu3OhxYopaDs9lqHZ5ktqAv7JuWw9ZXJ8HK%2Bz5I6tcGPM%2BCJY1QT4xlObE2nqv%2BmvjIEIFUGm3UnhBHilymmoEkURujB3qgSf9H5RdTi2SChItquUn7yybpDZGDsGcf3enb1Nyk1AXXTwoViq8Vw4nKo9MX6JoZqN%2FDGK97YrCO4xeMY%2BgvOgWOq6DaixiYEAWqZzuhdX6ckuvtbsIn9PtnQ1CLzxZAQdcX4lVyWU2%2BtMJeImcMGOqUBlvQLjMXyhQFzxKWbIIcp8aAHe8pwUZqbqRFqypfUm6SE3fRhd%2Br9F8SgzThGLHJ2GVefmNZ%2BeYi694xkMsLyywSGXf8bDWYSWH5mo0g68QCggtRadCuqSAHZDXOzwIYDXgEpAOvuv%2BPbEcymArBDw%2FPI4RQJinCC9Yh%2FX8a4A4PL1X53zFLjALVPUQpd8F7MhHjnOnMdL2%2FaZLSXm0%2FVjqhvt3EF&X-Amz-Signature=65fb17deb8f5ce64a466b5eaa116a8faa1565416515f7418841a19d2990cdc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDXASJP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFc0%2BrZXvVE9ZofE6zLLISw74HoYgWj4%2B37iwm5gjp2VAiEAhG24dz5N7bXPovWs4Ph6MWNzrdohwXsyo5AknXVV3pwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLUgvVkZejosaXHawircA6t1I3IAMqJ071RdKlZWi7eMXbaHdFKhTZchaLiIBWD7oydCpkVf47JPnlqS54aHQexsatrd12ccSGAcGw4Vhk2zQd6IrEnatEynhuxl9yL%2BouRQTq9aK4lj7SBJdVTmAh4MgSvmgjar1q1RdRSD5nDjypNhhu8P8MoR%2BrUZY%2FuUm0RNPfW2tftrw5RQkJEgMt%2F1bCtKJKSj7Sc8rhKHQNR%2FkAYgftW3Wg5RGvPHqmk1D%2Bv1zB3aiQPEuDohE1UWWteIoXFIrbRMFXCQIp3826Nano8GjsKuDkaRIw%2B6gEtj6J4LdPDueQvFt%2BtNmHUrwpuefS9JtESFaeJ539NOHNSl6MKlwJkYJ2kkv%2BjGL90vcRjOTQAXQ0DZwWQQH8%2B6QMUgtySm4WMv1C1fnu3OhxYopaDs9lqHZ5ktqAv7JuWw9ZXJ8HK%2Bz5I6tcGPM%2BCJY1QT4xlObE2nqv%2BmvjIEIFUGm3UnhBHilymmoEkURujB3qgSf9H5RdTi2SChItquUn7yybpDZGDsGcf3enb1Nyk1AXXTwoViq8Vw4nKo9MX6JoZqN%2FDGK97YrCO4xeMY%2BgvOgWOq6DaixiYEAWqZzuhdX6ckuvtbsIn9PtnQ1CLzxZAQdcX4lVyWU2%2BtMJeImcMGOqUBlvQLjMXyhQFzxKWbIIcp8aAHe8pwUZqbqRFqypfUm6SE3fRhd%2Br9F8SgzThGLHJ2GVefmNZ%2BeYi694xkMsLyywSGXf8bDWYSWH5mo0g68QCggtRadCuqSAHZDXOzwIYDXgEpAOvuv%2BPbEcymArBDw%2FPI4RQJinCC9Yh%2FX8a4A4PL1X53zFLjALVPUQpd8F7MhHjnOnMdL2%2FaZLSXm0%2FVjqhvt3EF&X-Amz-Signature=a676abeb39e1300abe9b8473026b64c7fb04891bf444460f50c5258c673d585c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDXASJP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFc0%2BrZXvVE9ZofE6zLLISw74HoYgWj4%2B37iwm5gjp2VAiEAhG24dz5N7bXPovWs4Ph6MWNzrdohwXsyo5AknXVV3pwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLUgvVkZejosaXHawircA6t1I3IAMqJ071RdKlZWi7eMXbaHdFKhTZchaLiIBWD7oydCpkVf47JPnlqS54aHQexsatrd12ccSGAcGw4Vhk2zQd6IrEnatEynhuxl9yL%2BouRQTq9aK4lj7SBJdVTmAh4MgSvmgjar1q1RdRSD5nDjypNhhu8P8MoR%2BrUZY%2FuUm0RNPfW2tftrw5RQkJEgMt%2F1bCtKJKSj7Sc8rhKHQNR%2FkAYgftW3Wg5RGvPHqmk1D%2Bv1zB3aiQPEuDohE1UWWteIoXFIrbRMFXCQIp3826Nano8GjsKuDkaRIw%2B6gEtj6J4LdPDueQvFt%2BtNmHUrwpuefS9JtESFaeJ539NOHNSl6MKlwJkYJ2kkv%2BjGL90vcRjOTQAXQ0DZwWQQH8%2B6QMUgtySm4WMv1C1fnu3OhxYopaDs9lqHZ5ktqAv7JuWw9ZXJ8HK%2Bz5I6tcGPM%2BCJY1QT4xlObE2nqv%2BmvjIEIFUGm3UnhBHilymmoEkURujB3qgSf9H5RdTi2SChItquUn7yybpDZGDsGcf3enb1Nyk1AXXTwoViq8Vw4nKo9MX6JoZqN%2FDGK97YrCO4xeMY%2BgvOgWOq6DaixiYEAWqZzuhdX6ckuvtbsIn9PtnQ1CLzxZAQdcX4lVyWU2%2BtMJeImcMGOqUBlvQLjMXyhQFzxKWbIIcp8aAHe8pwUZqbqRFqypfUm6SE3fRhd%2Br9F8SgzThGLHJ2GVefmNZ%2BeYi694xkMsLyywSGXf8bDWYSWH5mo0g68QCggtRadCuqSAHZDXOzwIYDXgEpAOvuv%2BPbEcymArBDw%2FPI4RQJinCC9Yh%2FX8a4A4PL1X53zFLjALVPUQpd8F7MhHjnOnMdL2%2FaZLSXm0%2FVjqhvt3EF&X-Amz-Signature=d97caf20d820219d234c618434f925d3b15345a16b083af1f696a014bf0097f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDXASJP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFc0%2BrZXvVE9ZofE6zLLISw74HoYgWj4%2B37iwm5gjp2VAiEAhG24dz5N7bXPovWs4Ph6MWNzrdohwXsyo5AknXVV3pwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLUgvVkZejosaXHawircA6t1I3IAMqJ071RdKlZWi7eMXbaHdFKhTZchaLiIBWD7oydCpkVf47JPnlqS54aHQexsatrd12ccSGAcGw4Vhk2zQd6IrEnatEynhuxl9yL%2BouRQTq9aK4lj7SBJdVTmAh4MgSvmgjar1q1RdRSD5nDjypNhhu8P8MoR%2BrUZY%2FuUm0RNPfW2tftrw5RQkJEgMt%2F1bCtKJKSj7Sc8rhKHQNR%2FkAYgftW3Wg5RGvPHqmk1D%2Bv1zB3aiQPEuDohE1UWWteIoXFIrbRMFXCQIp3826Nano8GjsKuDkaRIw%2B6gEtj6J4LdPDueQvFt%2BtNmHUrwpuefS9JtESFaeJ539NOHNSl6MKlwJkYJ2kkv%2BjGL90vcRjOTQAXQ0DZwWQQH8%2B6QMUgtySm4WMv1C1fnu3OhxYopaDs9lqHZ5ktqAv7JuWw9ZXJ8HK%2Bz5I6tcGPM%2BCJY1QT4xlObE2nqv%2BmvjIEIFUGm3UnhBHilymmoEkURujB3qgSf9H5RdTi2SChItquUn7yybpDZGDsGcf3enb1Nyk1AXXTwoViq8Vw4nKo9MX6JoZqN%2FDGK97YrCO4xeMY%2BgvOgWOq6DaixiYEAWqZzuhdX6ckuvtbsIn9PtnQ1CLzxZAQdcX4lVyWU2%2BtMJeImcMGOqUBlvQLjMXyhQFzxKWbIIcp8aAHe8pwUZqbqRFqypfUm6SE3fRhd%2Br9F8SgzThGLHJ2GVefmNZ%2BeYi694xkMsLyywSGXf8bDWYSWH5mo0g68QCggtRadCuqSAHZDXOzwIYDXgEpAOvuv%2BPbEcymArBDw%2FPI4RQJinCC9Yh%2FX8a4A4PL1X53zFLjALVPUQpd8F7MhHjnOnMdL2%2FaZLSXm0%2FVjqhvt3EF&X-Amz-Signature=7c759ebced2aa35462f8ede3df172a865d485e3f0bdce131d1a0597727b268e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDXASJP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFc0%2BrZXvVE9ZofE6zLLISw74HoYgWj4%2B37iwm5gjp2VAiEAhG24dz5N7bXPovWs4Ph6MWNzrdohwXsyo5AknXVV3pwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLUgvVkZejosaXHawircA6t1I3IAMqJ071RdKlZWi7eMXbaHdFKhTZchaLiIBWD7oydCpkVf47JPnlqS54aHQexsatrd12ccSGAcGw4Vhk2zQd6IrEnatEynhuxl9yL%2BouRQTq9aK4lj7SBJdVTmAh4MgSvmgjar1q1RdRSD5nDjypNhhu8P8MoR%2BrUZY%2FuUm0RNPfW2tftrw5RQkJEgMt%2F1bCtKJKSj7Sc8rhKHQNR%2FkAYgftW3Wg5RGvPHqmk1D%2Bv1zB3aiQPEuDohE1UWWteIoXFIrbRMFXCQIp3826Nano8GjsKuDkaRIw%2B6gEtj6J4LdPDueQvFt%2BtNmHUrwpuefS9JtESFaeJ539NOHNSl6MKlwJkYJ2kkv%2BjGL90vcRjOTQAXQ0DZwWQQH8%2B6QMUgtySm4WMv1C1fnu3OhxYopaDs9lqHZ5ktqAv7JuWw9ZXJ8HK%2Bz5I6tcGPM%2BCJY1QT4xlObE2nqv%2BmvjIEIFUGm3UnhBHilymmoEkURujB3qgSf9H5RdTi2SChItquUn7yybpDZGDsGcf3enb1Nyk1AXXTwoViq8Vw4nKo9MX6JoZqN%2FDGK97YrCO4xeMY%2BgvOgWOq6DaixiYEAWqZzuhdX6ckuvtbsIn9PtnQ1CLzxZAQdcX4lVyWU2%2BtMJeImcMGOqUBlvQLjMXyhQFzxKWbIIcp8aAHe8pwUZqbqRFqypfUm6SE3fRhd%2Br9F8SgzThGLHJ2GVefmNZ%2BeYi694xkMsLyywSGXf8bDWYSWH5mo0g68QCggtRadCuqSAHZDXOzwIYDXgEpAOvuv%2BPbEcymArBDw%2FPI4RQJinCC9Yh%2FX8a4A4PL1X53zFLjALVPUQpd8F7MhHjnOnMdL2%2FaZLSXm0%2FVjqhvt3EF&X-Amz-Signature=66191a7d5d0566293a20522339636157bb2e2b1d7f90326304842ea0682517d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDXASJP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFc0%2BrZXvVE9ZofE6zLLISw74HoYgWj4%2B37iwm5gjp2VAiEAhG24dz5N7bXPovWs4Ph6MWNzrdohwXsyo5AknXVV3pwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLUgvVkZejosaXHawircA6t1I3IAMqJ071RdKlZWi7eMXbaHdFKhTZchaLiIBWD7oydCpkVf47JPnlqS54aHQexsatrd12ccSGAcGw4Vhk2zQd6IrEnatEynhuxl9yL%2BouRQTq9aK4lj7SBJdVTmAh4MgSvmgjar1q1RdRSD5nDjypNhhu8P8MoR%2BrUZY%2FuUm0RNPfW2tftrw5RQkJEgMt%2F1bCtKJKSj7Sc8rhKHQNR%2FkAYgftW3Wg5RGvPHqmk1D%2Bv1zB3aiQPEuDohE1UWWteIoXFIrbRMFXCQIp3826Nano8GjsKuDkaRIw%2B6gEtj6J4LdPDueQvFt%2BtNmHUrwpuefS9JtESFaeJ539NOHNSl6MKlwJkYJ2kkv%2BjGL90vcRjOTQAXQ0DZwWQQH8%2B6QMUgtySm4WMv1C1fnu3OhxYopaDs9lqHZ5ktqAv7JuWw9ZXJ8HK%2Bz5I6tcGPM%2BCJY1QT4xlObE2nqv%2BmvjIEIFUGm3UnhBHilymmoEkURujB3qgSf9H5RdTi2SChItquUn7yybpDZGDsGcf3enb1Nyk1AXXTwoViq8Vw4nKo9MX6JoZqN%2FDGK97YrCO4xeMY%2BgvOgWOq6DaixiYEAWqZzuhdX6ckuvtbsIn9PtnQ1CLzxZAQdcX4lVyWU2%2BtMJeImcMGOqUBlvQLjMXyhQFzxKWbIIcp8aAHe8pwUZqbqRFqypfUm6SE3fRhd%2Br9F8SgzThGLHJ2GVefmNZ%2BeYi694xkMsLyywSGXf8bDWYSWH5mo0g68QCggtRadCuqSAHZDXOzwIYDXgEpAOvuv%2BPbEcymArBDw%2FPI4RQJinCC9Yh%2FX8a4A4PL1X53zFLjALVPUQpd8F7MhHjnOnMdL2%2FaZLSXm0%2FVjqhvt3EF&X-Amz-Signature=d9f0ba7cafb4b96a9439c8dfde382a0eead21552839cc22797a228845329f4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
