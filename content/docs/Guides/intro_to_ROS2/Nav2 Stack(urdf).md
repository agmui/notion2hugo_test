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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4E2THI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6lDp3SRPbEXLUtgfsrdHlaQodT3l1BZzz9EnkZTDOvAiEArzo02Wb2UYooykwWKfUEHTINP7CC6WcSdOcUM85U17EqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQX9TRTcIbuDfMyHSrcA84o%2Fjl39mvvteKnQ0gFHJ2U4%2BR9RiYwES5CzpPuGmXy0HTD9fW4qksBIGZ%2BiXZmO6d42HI1G0DrbvMUQwhHT3nN%2Bm%2BEPJa8QCknsfcVeR%2F1C2vIpjW5EYxYKLozLk4m3O2%2BU5XyLzFmCk6TPTMxD1Qiikc9xQ81%2B15qLkoz3C8FcVeV0W%2BOmaF2Fcf5Petq4Ke5Nf8PKKSzUZfhaFuCxyl47fShWzqNieIlMXHu2ND2%2B20iyGqieE9iazapf0pwC5RzDdYgMHFg4kMjpLV0ySV9%2FB%2BefSZYGxXkT2P3SZIOUzJkCmRME8J6O%2FjJwIznbFXSF7SG8vujeOv6vOgfdRom0xFjORi8ocGbBDeLbhkzF0ULrJlrvMjv6yN%2BE4EMt3mZK%2FpKywM7xvi63DhZ%2BkZV9wDEPJEhpgU89Tkh2jajygL%2FOy3%2BYIh%2BJiW7wVT62OtOp9XwvlFqZNoPWPga2Fpi0s5LlZvO5aOiwQA%2F3fJAytkG03yQY3x47sfoco%2FUw33%2BuMz%2BWQKmbdHX6ZtHIF%2FqtI5dNrvVsYBdcSA5SNPqYFeq2%2B8%2FLGZdCzzKPfVQrx7DSupega9KYyTanwo8IGu4iEDVLFLIiV6p0GVREldcsdwVE9JTC3v8%2FU5oMMPE%2BcMGOqUB0CrtyB6Q0LtmvPUQLqX6%2BePv%2BCMSPZtB3Ltclev1xD9UNHrDBCrpyHvMorDE9tkwgxIHflfb2ym9PF7gfLxJ%2ByPOYyyoAfMex9ap3vDIBuV%2BsQGqqf%2BrkC6krwCFC1oDvudoiSUwR%2BHs2e0H7Ti39wcWFeJ5ILzjMAgMnjZwqPQWCDmNMX41NFHI13iqxl6L%2FsutgZPk7RDE6y%2BdlRnK5gm3GnZr&X-Amz-Signature=3b580e35c5508d87b317c04a45b21df1289f8fe355f81ed3bc7c31f4c595e2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4E2THI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6lDp3SRPbEXLUtgfsrdHlaQodT3l1BZzz9EnkZTDOvAiEArzo02Wb2UYooykwWKfUEHTINP7CC6WcSdOcUM85U17EqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQX9TRTcIbuDfMyHSrcA84o%2Fjl39mvvteKnQ0gFHJ2U4%2BR9RiYwES5CzpPuGmXy0HTD9fW4qksBIGZ%2BiXZmO6d42HI1G0DrbvMUQwhHT3nN%2Bm%2BEPJa8QCknsfcVeR%2F1C2vIpjW5EYxYKLozLk4m3O2%2BU5XyLzFmCk6TPTMxD1Qiikc9xQ81%2B15qLkoz3C8FcVeV0W%2BOmaF2Fcf5Petq4Ke5Nf8PKKSzUZfhaFuCxyl47fShWzqNieIlMXHu2ND2%2B20iyGqieE9iazapf0pwC5RzDdYgMHFg4kMjpLV0ySV9%2FB%2BefSZYGxXkT2P3SZIOUzJkCmRME8J6O%2FjJwIznbFXSF7SG8vujeOv6vOgfdRom0xFjORi8ocGbBDeLbhkzF0ULrJlrvMjv6yN%2BE4EMt3mZK%2FpKywM7xvi63DhZ%2BkZV9wDEPJEhpgU89Tkh2jajygL%2FOy3%2BYIh%2BJiW7wVT62OtOp9XwvlFqZNoPWPga2Fpi0s5LlZvO5aOiwQA%2F3fJAytkG03yQY3x47sfoco%2FUw33%2BuMz%2BWQKmbdHX6ZtHIF%2FqtI5dNrvVsYBdcSA5SNPqYFeq2%2B8%2FLGZdCzzKPfVQrx7DSupega9KYyTanwo8IGu4iEDVLFLIiV6p0GVREldcsdwVE9JTC3v8%2FU5oMMPE%2BcMGOqUB0CrtyB6Q0LtmvPUQLqX6%2BePv%2BCMSPZtB3Ltclev1xD9UNHrDBCrpyHvMorDE9tkwgxIHflfb2ym9PF7gfLxJ%2ByPOYyyoAfMex9ap3vDIBuV%2BsQGqqf%2BrkC6krwCFC1oDvudoiSUwR%2BHs2e0H7Ti39wcWFeJ5ILzjMAgMnjZwqPQWCDmNMX41NFHI13iqxl6L%2FsutgZPk7RDE6y%2BdlRnK5gm3GnZr&X-Amz-Signature=8166e42d31efb7cca0712adde7e6f72fb729f7f1e6fbdb0a533f2239ebcb51f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4E2THI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6lDp3SRPbEXLUtgfsrdHlaQodT3l1BZzz9EnkZTDOvAiEArzo02Wb2UYooykwWKfUEHTINP7CC6WcSdOcUM85U17EqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQX9TRTcIbuDfMyHSrcA84o%2Fjl39mvvteKnQ0gFHJ2U4%2BR9RiYwES5CzpPuGmXy0HTD9fW4qksBIGZ%2BiXZmO6d42HI1G0DrbvMUQwhHT3nN%2Bm%2BEPJa8QCknsfcVeR%2F1C2vIpjW5EYxYKLozLk4m3O2%2BU5XyLzFmCk6TPTMxD1Qiikc9xQ81%2B15qLkoz3C8FcVeV0W%2BOmaF2Fcf5Petq4Ke5Nf8PKKSzUZfhaFuCxyl47fShWzqNieIlMXHu2ND2%2B20iyGqieE9iazapf0pwC5RzDdYgMHFg4kMjpLV0ySV9%2FB%2BefSZYGxXkT2P3SZIOUzJkCmRME8J6O%2FjJwIznbFXSF7SG8vujeOv6vOgfdRom0xFjORi8ocGbBDeLbhkzF0ULrJlrvMjv6yN%2BE4EMt3mZK%2FpKywM7xvi63DhZ%2BkZV9wDEPJEhpgU89Tkh2jajygL%2FOy3%2BYIh%2BJiW7wVT62OtOp9XwvlFqZNoPWPga2Fpi0s5LlZvO5aOiwQA%2F3fJAytkG03yQY3x47sfoco%2FUw33%2BuMz%2BWQKmbdHX6ZtHIF%2FqtI5dNrvVsYBdcSA5SNPqYFeq2%2B8%2FLGZdCzzKPfVQrx7DSupega9KYyTanwo8IGu4iEDVLFLIiV6p0GVREldcsdwVE9JTC3v8%2FU5oMMPE%2BcMGOqUB0CrtyB6Q0LtmvPUQLqX6%2BePv%2BCMSPZtB3Ltclev1xD9UNHrDBCrpyHvMorDE9tkwgxIHflfb2ym9PF7gfLxJ%2ByPOYyyoAfMex9ap3vDIBuV%2BsQGqqf%2BrkC6krwCFC1oDvudoiSUwR%2BHs2e0H7Ti39wcWFeJ5ILzjMAgMnjZwqPQWCDmNMX41NFHI13iqxl6L%2FsutgZPk7RDE6y%2BdlRnK5gm3GnZr&X-Amz-Signature=ad1424861638e05aa0f39a548a8e4cadc89ab376a37405b27e99b882ccc83b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4E2THI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6lDp3SRPbEXLUtgfsrdHlaQodT3l1BZzz9EnkZTDOvAiEArzo02Wb2UYooykwWKfUEHTINP7CC6WcSdOcUM85U17EqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQX9TRTcIbuDfMyHSrcA84o%2Fjl39mvvteKnQ0gFHJ2U4%2BR9RiYwES5CzpPuGmXy0HTD9fW4qksBIGZ%2BiXZmO6d42HI1G0DrbvMUQwhHT3nN%2Bm%2BEPJa8QCknsfcVeR%2F1C2vIpjW5EYxYKLozLk4m3O2%2BU5XyLzFmCk6TPTMxD1Qiikc9xQ81%2B15qLkoz3C8FcVeV0W%2BOmaF2Fcf5Petq4Ke5Nf8PKKSzUZfhaFuCxyl47fShWzqNieIlMXHu2ND2%2B20iyGqieE9iazapf0pwC5RzDdYgMHFg4kMjpLV0ySV9%2FB%2BefSZYGxXkT2P3SZIOUzJkCmRME8J6O%2FjJwIznbFXSF7SG8vujeOv6vOgfdRom0xFjORi8ocGbBDeLbhkzF0ULrJlrvMjv6yN%2BE4EMt3mZK%2FpKywM7xvi63DhZ%2BkZV9wDEPJEhpgU89Tkh2jajygL%2FOy3%2BYIh%2BJiW7wVT62OtOp9XwvlFqZNoPWPga2Fpi0s5LlZvO5aOiwQA%2F3fJAytkG03yQY3x47sfoco%2FUw33%2BuMz%2BWQKmbdHX6ZtHIF%2FqtI5dNrvVsYBdcSA5SNPqYFeq2%2B8%2FLGZdCzzKPfVQrx7DSupega9KYyTanwo8IGu4iEDVLFLIiV6p0GVREldcsdwVE9JTC3v8%2FU5oMMPE%2BcMGOqUB0CrtyB6Q0LtmvPUQLqX6%2BePv%2BCMSPZtB3Ltclev1xD9UNHrDBCrpyHvMorDE9tkwgxIHflfb2ym9PF7gfLxJ%2ByPOYyyoAfMex9ap3vDIBuV%2BsQGqqf%2BrkC6krwCFC1oDvudoiSUwR%2BHs2e0H7Ti39wcWFeJ5ILzjMAgMnjZwqPQWCDmNMX41NFHI13iqxl6L%2FsutgZPk7RDE6y%2BdlRnK5gm3GnZr&X-Amz-Signature=97cdced2ad94b221edb5de4176ecd08fad0e57c9bc3a6aa1feefdcc76473707c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4E2THI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6lDp3SRPbEXLUtgfsrdHlaQodT3l1BZzz9EnkZTDOvAiEArzo02Wb2UYooykwWKfUEHTINP7CC6WcSdOcUM85U17EqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQX9TRTcIbuDfMyHSrcA84o%2Fjl39mvvteKnQ0gFHJ2U4%2BR9RiYwES5CzpPuGmXy0HTD9fW4qksBIGZ%2BiXZmO6d42HI1G0DrbvMUQwhHT3nN%2Bm%2BEPJa8QCknsfcVeR%2F1C2vIpjW5EYxYKLozLk4m3O2%2BU5XyLzFmCk6TPTMxD1Qiikc9xQ81%2B15qLkoz3C8FcVeV0W%2BOmaF2Fcf5Petq4Ke5Nf8PKKSzUZfhaFuCxyl47fShWzqNieIlMXHu2ND2%2B20iyGqieE9iazapf0pwC5RzDdYgMHFg4kMjpLV0ySV9%2FB%2BefSZYGxXkT2P3SZIOUzJkCmRME8J6O%2FjJwIznbFXSF7SG8vujeOv6vOgfdRom0xFjORi8ocGbBDeLbhkzF0ULrJlrvMjv6yN%2BE4EMt3mZK%2FpKywM7xvi63DhZ%2BkZV9wDEPJEhpgU89Tkh2jajygL%2FOy3%2BYIh%2BJiW7wVT62OtOp9XwvlFqZNoPWPga2Fpi0s5LlZvO5aOiwQA%2F3fJAytkG03yQY3x47sfoco%2FUw33%2BuMz%2BWQKmbdHX6ZtHIF%2FqtI5dNrvVsYBdcSA5SNPqYFeq2%2B8%2FLGZdCzzKPfVQrx7DSupega9KYyTanwo8IGu4iEDVLFLIiV6p0GVREldcsdwVE9JTC3v8%2FU5oMMPE%2BcMGOqUB0CrtyB6Q0LtmvPUQLqX6%2BePv%2BCMSPZtB3Ltclev1xD9UNHrDBCrpyHvMorDE9tkwgxIHflfb2ym9PF7gfLxJ%2ByPOYyyoAfMex9ap3vDIBuV%2BsQGqqf%2BrkC6krwCFC1oDvudoiSUwR%2BHs2e0H7Ti39wcWFeJ5ILzjMAgMnjZwqPQWCDmNMX41NFHI13iqxl6L%2FsutgZPk7RDE6y%2BdlRnK5gm3GnZr&X-Amz-Signature=41e8adb156fa83ca59054947adfed644f2cfafed9849c89dd0315611e1257b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4E2THI%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6lDp3SRPbEXLUtgfsrdHlaQodT3l1BZzz9EnkZTDOvAiEArzo02Wb2UYooykwWKfUEHTINP7CC6WcSdOcUM85U17EqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQX9TRTcIbuDfMyHSrcA84o%2Fjl39mvvteKnQ0gFHJ2U4%2BR9RiYwES5CzpPuGmXy0HTD9fW4qksBIGZ%2BiXZmO6d42HI1G0DrbvMUQwhHT3nN%2Bm%2BEPJa8QCknsfcVeR%2F1C2vIpjW5EYxYKLozLk4m3O2%2BU5XyLzFmCk6TPTMxD1Qiikc9xQ81%2B15qLkoz3C8FcVeV0W%2BOmaF2Fcf5Petq4Ke5Nf8PKKSzUZfhaFuCxyl47fShWzqNieIlMXHu2ND2%2B20iyGqieE9iazapf0pwC5RzDdYgMHFg4kMjpLV0ySV9%2FB%2BefSZYGxXkT2P3SZIOUzJkCmRME8J6O%2FjJwIznbFXSF7SG8vujeOv6vOgfdRom0xFjORi8ocGbBDeLbhkzF0ULrJlrvMjv6yN%2BE4EMt3mZK%2FpKywM7xvi63DhZ%2BkZV9wDEPJEhpgU89Tkh2jajygL%2FOy3%2BYIh%2BJiW7wVT62OtOp9XwvlFqZNoPWPga2Fpi0s5LlZvO5aOiwQA%2F3fJAytkG03yQY3x47sfoco%2FUw33%2BuMz%2BWQKmbdHX6ZtHIF%2FqtI5dNrvVsYBdcSA5SNPqYFeq2%2B8%2FLGZdCzzKPfVQrx7DSupega9KYyTanwo8IGu4iEDVLFLIiV6p0GVREldcsdwVE9JTC3v8%2FU5oMMPE%2BcMGOqUB0CrtyB6Q0LtmvPUQLqX6%2BePv%2BCMSPZtB3Ltclev1xD9UNHrDBCrpyHvMorDE9tkwgxIHflfb2ym9PF7gfLxJ%2ByPOYyyoAfMex9ap3vDIBuV%2BsQGqqf%2BrkC6krwCFC1oDvudoiSUwR%2BHs2e0H7Ti39wcWFeJ5ILzjMAgMnjZwqPQWCDmNMX41NFHI13iqxl6L%2FsutgZPk7RDE6y%2BdlRnK5gm3GnZr&X-Amz-Signature=60ca75bc4f96f6ca9830f04cec350c85a675d6166218cd6637ab63cdfb6c381c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
