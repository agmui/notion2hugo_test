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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBMAUEZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2F7g0dRKTuUs9%2BauAfdKjNO0C1JHmk%2FHlvp0gaqAlSwIhAMmPVYjt%2FJA89wrBCPne86DqNYobpTzDQ2vJcHbtycx7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiWwLv8Q46NzaHt4q3AP7sceTiKOpa12Pju4HG0LTugT%2B4amVNlbvSps4DctASOG4rAocsn9yv%2Bqkc%2BLs9SbU9q0LTV1rl1rJKCttfftzo7Jq6SEEtneAZtMgZK2Xrdk%2F9P65ANLxFE7DOcH%2BRUlwTPiqPhYrZMgwPOUb0XUDwD%2BTVONwT3kNyPqZHJEOq%2BS%2FkjhzS0Y32ue%2FMxuuBtz8slLlqdMG%2F%2BBQEBFmhaLUDz2X%2FbZ7gRk3pu%2BMx%2FC3J%2F4OazgR%2FyIv6CYDVhFL5Lh3QXewMUwYuYMDgTCoRA%2BQrgnQW%2FMFlolfyVcjJDeBSaLnftmS04wyums9rXR6oi2sUyCMcSAVDFdbu3P08GFagOX38cxklIFD2R8lcyN8RG%2B%2FZjabkgAVZzZFQOW1VUay3%2FTl8LmD%2FFMtHmBXBVGFlyKyDZwC8LA3EO53XbV3iQaH1udOxZK1whKmAxiHi26Lj%2B7Eoxpi3b3VO6YNuDS5gZH4EYF2qppvKzWmL9%2BIcQwpeyahnAguTxFsDpBb%2FX06PWj%2BHngteqRWCylMrnz%2F0OecoB3SyHAwhY8PWiBRQehFhMmx%2FNZ%2FU1O4SYe7%2BngtVMudIwYGMuFKLkfwZdHyo7PQ4kBB%2Bf8w9wLwbwUtjUaqUAh%2Bmam4zoLtYDDC%2B%2BC9BjqkASdG24c5HEa5e5ruthRC%2FO5H5hF8CdBvg3Y926NYjNEUE6jddQGV7NVjFX5gqYBMlgOsz6jNBtzszh0CH9%2FpRe1DYLCk4GMXm3m4eo50DQDpEs1eQPio%2FCStkuEdC6Jy9WQIJd3bvfC3HyXf6V4KMmxn8di6jb5%2FrxhQnfz3psTXLqLqEyK%2FKBVgoxRtplHP%2FZgufvv0gi2S9EPXshRjNaRMYSBx&X-Amz-Signature=3569b07860ad5abcffdf1f711fd378a8d48823d3b0525dc72daf3f7bef6ea34b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBMAUEZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2F7g0dRKTuUs9%2BauAfdKjNO0C1JHmk%2FHlvp0gaqAlSwIhAMmPVYjt%2FJA89wrBCPne86DqNYobpTzDQ2vJcHbtycx7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiWwLv8Q46NzaHt4q3AP7sceTiKOpa12Pju4HG0LTugT%2B4amVNlbvSps4DctASOG4rAocsn9yv%2Bqkc%2BLs9SbU9q0LTV1rl1rJKCttfftzo7Jq6SEEtneAZtMgZK2Xrdk%2F9P65ANLxFE7DOcH%2BRUlwTPiqPhYrZMgwPOUb0XUDwD%2BTVONwT3kNyPqZHJEOq%2BS%2FkjhzS0Y32ue%2FMxuuBtz8slLlqdMG%2F%2BBQEBFmhaLUDz2X%2FbZ7gRk3pu%2BMx%2FC3J%2F4OazgR%2FyIv6CYDVhFL5Lh3QXewMUwYuYMDgTCoRA%2BQrgnQW%2FMFlolfyVcjJDeBSaLnftmS04wyums9rXR6oi2sUyCMcSAVDFdbu3P08GFagOX38cxklIFD2R8lcyN8RG%2B%2FZjabkgAVZzZFQOW1VUay3%2FTl8LmD%2FFMtHmBXBVGFlyKyDZwC8LA3EO53XbV3iQaH1udOxZK1whKmAxiHi26Lj%2B7Eoxpi3b3VO6YNuDS5gZH4EYF2qppvKzWmL9%2BIcQwpeyahnAguTxFsDpBb%2FX06PWj%2BHngteqRWCylMrnz%2F0OecoB3SyHAwhY8PWiBRQehFhMmx%2FNZ%2FU1O4SYe7%2BngtVMudIwYGMuFKLkfwZdHyo7PQ4kBB%2Bf8w9wLwbwUtjUaqUAh%2Bmam4zoLtYDDC%2B%2BC9BjqkASdG24c5HEa5e5ruthRC%2FO5H5hF8CdBvg3Y926NYjNEUE6jddQGV7NVjFX5gqYBMlgOsz6jNBtzszh0CH9%2FpRe1DYLCk4GMXm3m4eo50DQDpEs1eQPio%2FCStkuEdC6Jy9WQIJd3bvfC3HyXf6V4KMmxn8di6jb5%2FrxhQnfz3psTXLqLqEyK%2FKBVgoxRtplHP%2FZgufvv0gi2S9EPXshRjNaRMYSBx&X-Amz-Signature=a264aa0a1e7d5b9a9ac09c3cd8a5d4926fcfdfed139c93db8f1de44ecd51fa69&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBMAUEZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2F7g0dRKTuUs9%2BauAfdKjNO0C1JHmk%2FHlvp0gaqAlSwIhAMmPVYjt%2FJA89wrBCPne86DqNYobpTzDQ2vJcHbtycx7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiWwLv8Q46NzaHt4q3AP7sceTiKOpa12Pju4HG0LTugT%2B4amVNlbvSps4DctASOG4rAocsn9yv%2Bqkc%2BLs9SbU9q0LTV1rl1rJKCttfftzo7Jq6SEEtneAZtMgZK2Xrdk%2F9P65ANLxFE7DOcH%2BRUlwTPiqPhYrZMgwPOUb0XUDwD%2BTVONwT3kNyPqZHJEOq%2BS%2FkjhzS0Y32ue%2FMxuuBtz8slLlqdMG%2F%2BBQEBFmhaLUDz2X%2FbZ7gRk3pu%2BMx%2FC3J%2F4OazgR%2FyIv6CYDVhFL5Lh3QXewMUwYuYMDgTCoRA%2BQrgnQW%2FMFlolfyVcjJDeBSaLnftmS04wyums9rXR6oi2sUyCMcSAVDFdbu3P08GFagOX38cxklIFD2R8lcyN8RG%2B%2FZjabkgAVZzZFQOW1VUay3%2FTl8LmD%2FFMtHmBXBVGFlyKyDZwC8LA3EO53XbV3iQaH1udOxZK1whKmAxiHi26Lj%2B7Eoxpi3b3VO6YNuDS5gZH4EYF2qppvKzWmL9%2BIcQwpeyahnAguTxFsDpBb%2FX06PWj%2BHngteqRWCylMrnz%2F0OecoB3SyHAwhY8PWiBRQehFhMmx%2FNZ%2FU1O4SYe7%2BngtVMudIwYGMuFKLkfwZdHyo7PQ4kBB%2Bf8w9wLwbwUtjUaqUAh%2Bmam4zoLtYDDC%2B%2BC9BjqkASdG24c5HEa5e5ruthRC%2FO5H5hF8CdBvg3Y926NYjNEUE6jddQGV7NVjFX5gqYBMlgOsz6jNBtzszh0CH9%2FpRe1DYLCk4GMXm3m4eo50DQDpEs1eQPio%2FCStkuEdC6Jy9WQIJd3bvfC3HyXf6V4KMmxn8di6jb5%2FrxhQnfz3psTXLqLqEyK%2FKBVgoxRtplHP%2FZgufvv0gi2S9EPXshRjNaRMYSBx&X-Amz-Signature=bb9252b9e5563fa2231e14791de9a2ca9abbe246ce597db0025c30b96e113112&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBMAUEZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2F7g0dRKTuUs9%2BauAfdKjNO0C1JHmk%2FHlvp0gaqAlSwIhAMmPVYjt%2FJA89wrBCPne86DqNYobpTzDQ2vJcHbtycx7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiWwLv8Q46NzaHt4q3AP7sceTiKOpa12Pju4HG0LTugT%2B4amVNlbvSps4DctASOG4rAocsn9yv%2Bqkc%2BLs9SbU9q0LTV1rl1rJKCttfftzo7Jq6SEEtneAZtMgZK2Xrdk%2F9P65ANLxFE7DOcH%2BRUlwTPiqPhYrZMgwPOUb0XUDwD%2BTVONwT3kNyPqZHJEOq%2BS%2FkjhzS0Y32ue%2FMxuuBtz8slLlqdMG%2F%2BBQEBFmhaLUDz2X%2FbZ7gRk3pu%2BMx%2FC3J%2F4OazgR%2FyIv6CYDVhFL5Lh3QXewMUwYuYMDgTCoRA%2BQrgnQW%2FMFlolfyVcjJDeBSaLnftmS04wyums9rXR6oi2sUyCMcSAVDFdbu3P08GFagOX38cxklIFD2R8lcyN8RG%2B%2FZjabkgAVZzZFQOW1VUay3%2FTl8LmD%2FFMtHmBXBVGFlyKyDZwC8LA3EO53XbV3iQaH1udOxZK1whKmAxiHi26Lj%2B7Eoxpi3b3VO6YNuDS5gZH4EYF2qppvKzWmL9%2BIcQwpeyahnAguTxFsDpBb%2FX06PWj%2BHngteqRWCylMrnz%2F0OecoB3SyHAwhY8PWiBRQehFhMmx%2FNZ%2FU1O4SYe7%2BngtVMudIwYGMuFKLkfwZdHyo7PQ4kBB%2Bf8w9wLwbwUtjUaqUAh%2Bmam4zoLtYDDC%2B%2BC9BjqkASdG24c5HEa5e5ruthRC%2FO5H5hF8CdBvg3Y926NYjNEUE6jddQGV7NVjFX5gqYBMlgOsz6jNBtzszh0CH9%2FpRe1DYLCk4GMXm3m4eo50DQDpEs1eQPio%2FCStkuEdC6Jy9WQIJd3bvfC3HyXf6V4KMmxn8di6jb5%2FrxhQnfz3psTXLqLqEyK%2FKBVgoxRtplHP%2FZgufvv0gi2S9EPXshRjNaRMYSBx&X-Amz-Signature=dbd7728bb3e08f5124b8fb13234c94ceee53d526ac01e400ce7d35079f75e18b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBMAUEZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2F7g0dRKTuUs9%2BauAfdKjNO0C1JHmk%2FHlvp0gaqAlSwIhAMmPVYjt%2FJA89wrBCPne86DqNYobpTzDQ2vJcHbtycx7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiWwLv8Q46NzaHt4q3AP7sceTiKOpa12Pju4HG0LTugT%2B4amVNlbvSps4DctASOG4rAocsn9yv%2Bqkc%2BLs9SbU9q0LTV1rl1rJKCttfftzo7Jq6SEEtneAZtMgZK2Xrdk%2F9P65ANLxFE7DOcH%2BRUlwTPiqPhYrZMgwPOUb0XUDwD%2BTVONwT3kNyPqZHJEOq%2BS%2FkjhzS0Y32ue%2FMxuuBtz8slLlqdMG%2F%2BBQEBFmhaLUDz2X%2FbZ7gRk3pu%2BMx%2FC3J%2F4OazgR%2FyIv6CYDVhFL5Lh3QXewMUwYuYMDgTCoRA%2BQrgnQW%2FMFlolfyVcjJDeBSaLnftmS04wyums9rXR6oi2sUyCMcSAVDFdbu3P08GFagOX38cxklIFD2R8lcyN8RG%2B%2FZjabkgAVZzZFQOW1VUay3%2FTl8LmD%2FFMtHmBXBVGFlyKyDZwC8LA3EO53XbV3iQaH1udOxZK1whKmAxiHi26Lj%2B7Eoxpi3b3VO6YNuDS5gZH4EYF2qppvKzWmL9%2BIcQwpeyahnAguTxFsDpBb%2FX06PWj%2BHngteqRWCylMrnz%2F0OecoB3SyHAwhY8PWiBRQehFhMmx%2FNZ%2FU1O4SYe7%2BngtVMudIwYGMuFKLkfwZdHyo7PQ4kBB%2Bf8w9wLwbwUtjUaqUAh%2Bmam4zoLtYDDC%2B%2BC9BjqkASdG24c5HEa5e5ruthRC%2FO5H5hF8CdBvg3Y926NYjNEUE6jddQGV7NVjFX5gqYBMlgOsz6jNBtzszh0CH9%2FpRe1DYLCk4GMXm3m4eo50DQDpEs1eQPio%2FCStkuEdC6Jy9WQIJd3bvfC3HyXf6V4KMmxn8di6jb5%2FrxhQnfz3psTXLqLqEyK%2FKBVgoxRtplHP%2FZgufvv0gi2S9EPXshRjNaRMYSBx&X-Amz-Signature=f732efeaed074ef90ee90eba9ee2527f0724f264a38e57939193d205110e704e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBMAUEZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2F7g0dRKTuUs9%2BauAfdKjNO0C1JHmk%2FHlvp0gaqAlSwIhAMmPVYjt%2FJA89wrBCPne86DqNYobpTzDQ2vJcHbtycx7KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytiWwLv8Q46NzaHt4q3AP7sceTiKOpa12Pju4HG0LTugT%2B4amVNlbvSps4DctASOG4rAocsn9yv%2Bqkc%2BLs9SbU9q0LTV1rl1rJKCttfftzo7Jq6SEEtneAZtMgZK2Xrdk%2F9P65ANLxFE7DOcH%2BRUlwTPiqPhYrZMgwPOUb0XUDwD%2BTVONwT3kNyPqZHJEOq%2BS%2FkjhzS0Y32ue%2FMxuuBtz8slLlqdMG%2F%2BBQEBFmhaLUDz2X%2FbZ7gRk3pu%2BMx%2FC3J%2F4OazgR%2FyIv6CYDVhFL5Lh3QXewMUwYuYMDgTCoRA%2BQrgnQW%2FMFlolfyVcjJDeBSaLnftmS04wyums9rXR6oi2sUyCMcSAVDFdbu3P08GFagOX38cxklIFD2R8lcyN8RG%2B%2FZjabkgAVZzZFQOW1VUay3%2FTl8LmD%2FFMtHmBXBVGFlyKyDZwC8LA3EO53XbV3iQaH1udOxZK1whKmAxiHi26Lj%2B7Eoxpi3b3VO6YNuDS5gZH4EYF2qppvKzWmL9%2BIcQwpeyahnAguTxFsDpBb%2FX06PWj%2BHngteqRWCylMrnz%2F0OecoB3SyHAwhY8PWiBRQehFhMmx%2FNZ%2FU1O4SYe7%2BngtVMudIwYGMuFKLkfwZdHyo7PQ4kBB%2Bf8w9wLwbwUtjUaqUAh%2Bmam4zoLtYDDC%2B%2BC9BjqkASdG24c5HEa5e5ruthRC%2FO5H5hF8CdBvg3Y926NYjNEUE6jddQGV7NVjFX5gqYBMlgOsz6jNBtzszh0CH9%2FpRe1DYLCk4GMXm3m4eo50DQDpEs1eQPio%2FCStkuEdC6Jy9WQIJd3bvfC3HyXf6V4KMmxn8di6jb5%2FrxhQnfz3psTXLqLqEyK%2FKBVgoxRtplHP%2FZgufvv0gi2S9EPXshRjNaRMYSBx&X-Amz-Signature=f0773ab20f92a003a6dc1aee9f3c7d70a6c6f1c44613a7640c8d17507fa6377f&X-Amz-SignedHeaders=host&x-id=GetObject)
