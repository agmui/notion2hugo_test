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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQFMGM6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2B2gBiqZY1ou2Rx%2BEEgPELth9UAkn9LaUNmiB1XnZz9gIgDcCvqeT51BnCTTbLOthWRoEzKPIgxcjpoAWDVzOuscoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMf34J136QqtMje7ByrcA1TtT1kjt90gOnq%2BewfQAJgSoL1HYmqgLIyc82KJNz0GNWF%2FmZ%2BSpr74zYmx%2FCjggegx6JkNBIDwp3OdwhynpE45%2Bsc0uxdY6wNjQzW%2BXr%2FC7QgEzwvBYpFpWM4Br7lYP6sTfsTe2JxVlH%2FfNjgHrGfLd9ThxWq6%2F%2BM3OPI%2Ff66BbzyrHcCZuJ9%2Fa0PFBbKqKlGQzdeZTpBxOA7kamS8B%2BYsHVMXiegULvS8j%2F5XR9nnDObSD9381lrrImGYSZBj5j67ZcuYkoPmEifKVCJcCiDIYyjCp7LWIfFpTBIdky0%2FKefw2DUbVxdjEeRAiTSFuuvsr4AAxwiSDpjX%2F6TWz4242dr%2F9W7Mx8MeyaPJXaGXsdDhjNqKRRkFwchbHN%2FbZA0li3PNK4ZL%2FUlcd0h8GHra3%2FKd6AsbO%2FsezdS692Y2kT8ZIxg%2B7Ofv77VGCM4qJtT1r98VKHL%2BmZtZdAbfuDb8%2FD6Ac%2BIqJ79XB0RhJe1PSo19GdySAOtsNNTHC5Ryk7z3iOD%2Fr9we20K3eVjgOmLTaDuZnD5ja5ZhNyWD8KLFpoOe7NACFPD3k%2Fg%2FaoCnXlG3TF8%2BPgSQsxPNZuTrDMteMFcJT992KhSpauTHg2Sxw9nHHOsrgDEj31v9MOPW0MEGOqUBXoTcEgn3nvtO7802M%2FUs9GPvBggxC6zMs9J4v%2BiOYCIK2jOizZfky7%2BEnpMDWdQZkQPdVBlDa0j05D755fXPibrF31HQwq2XC9SkEMtXC2NADFHSZCy4oSiliscFfI6qtRIjT3kXPu5oe7IlAq6r%2FSC84C5799h4nCj4QprMe1o2rIUxPlXBSdUq1vbXAF%2FNulX9Zexsndug0%2FPLkz275FoMH5fq&X-Amz-Signature=0586f49ea642db2bc245a93f533d64027ca3fb13e872b26c978bcf37ddd51a38&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQFMGM6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2B2gBiqZY1ou2Rx%2BEEgPELth9UAkn9LaUNmiB1XnZz9gIgDcCvqeT51BnCTTbLOthWRoEzKPIgxcjpoAWDVzOuscoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMf34J136QqtMje7ByrcA1TtT1kjt90gOnq%2BewfQAJgSoL1HYmqgLIyc82KJNz0GNWF%2FmZ%2BSpr74zYmx%2FCjggegx6JkNBIDwp3OdwhynpE45%2Bsc0uxdY6wNjQzW%2BXr%2FC7QgEzwvBYpFpWM4Br7lYP6sTfsTe2JxVlH%2FfNjgHrGfLd9ThxWq6%2F%2BM3OPI%2Ff66BbzyrHcCZuJ9%2Fa0PFBbKqKlGQzdeZTpBxOA7kamS8B%2BYsHVMXiegULvS8j%2F5XR9nnDObSD9381lrrImGYSZBj5j67ZcuYkoPmEifKVCJcCiDIYyjCp7LWIfFpTBIdky0%2FKefw2DUbVxdjEeRAiTSFuuvsr4AAxwiSDpjX%2F6TWz4242dr%2F9W7Mx8MeyaPJXaGXsdDhjNqKRRkFwchbHN%2FbZA0li3PNK4ZL%2FUlcd0h8GHra3%2FKd6AsbO%2FsezdS692Y2kT8ZIxg%2B7Ofv77VGCM4qJtT1r98VKHL%2BmZtZdAbfuDb8%2FD6Ac%2BIqJ79XB0RhJe1PSo19GdySAOtsNNTHC5Ryk7z3iOD%2Fr9we20K3eVjgOmLTaDuZnD5ja5ZhNyWD8KLFpoOe7NACFPD3k%2Fg%2FaoCnXlG3TF8%2BPgSQsxPNZuTrDMteMFcJT992KhSpauTHg2Sxw9nHHOsrgDEj31v9MOPW0MEGOqUBXoTcEgn3nvtO7802M%2FUs9GPvBggxC6zMs9J4v%2BiOYCIK2jOizZfky7%2BEnpMDWdQZkQPdVBlDa0j05D755fXPibrF31HQwq2XC9SkEMtXC2NADFHSZCy4oSiliscFfI6qtRIjT3kXPu5oe7IlAq6r%2FSC84C5799h4nCj4QprMe1o2rIUxPlXBSdUq1vbXAF%2FNulX9Zexsndug0%2FPLkz275FoMH5fq&X-Amz-Signature=988efe4fa5a299c58b5ceaf44e6bf5d7328576643b170003d0a78826a74c82f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQFMGM6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2B2gBiqZY1ou2Rx%2BEEgPELth9UAkn9LaUNmiB1XnZz9gIgDcCvqeT51BnCTTbLOthWRoEzKPIgxcjpoAWDVzOuscoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMf34J136QqtMje7ByrcA1TtT1kjt90gOnq%2BewfQAJgSoL1HYmqgLIyc82KJNz0GNWF%2FmZ%2BSpr74zYmx%2FCjggegx6JkNBIDwp3OdwhynpE45%2Bsc0uxdY6wNjQzW%2BXr%2FC7QgEzwvBYpFpWM4Br7lYP6sTfsTe2JxVlH%2FfNjgHrGfLd9ThxWq6%2F%2BM3OPI%2Ff66BbzyrHcCZuJ9%2Fa0PFBbKqKlGQzdeZTpBxOA7kamS8B%2BYsHVMXiegULvS8j%2F5XR9nnDObSD9381lrrImGYSZBj5j67ZcuYkoPmEifKVCJcCiDIYyjCp7LWIfFpTBIdky0%2FKefw2DUbVxdjEeRAiTSFuuvsr4AAxwiSDpjX%2F6TWz4242dr%2F9W7Mx8MeyaPJXaGXsdDhjNqKRRkFwchbHN%2FbZA0li3PNK4ZL%2FUlcd0h8GHra3%2FKd6AsbO%2FsezdS692Y2kT8ZIxg%2B7Ofv77VGCM4qJtT1r98VKHL%2BmZtZdAbfuDb8%2FD6Ac%2BIqJ79XB0RhJe1PSo19GdySAOtsNNTHC5Ryk7z3iOD%2Fr9we20K3eVjgOmLTaDuZnD5ja5ZhNyWD8KLFpoOe7NACFPD3k%2Fg%2FaoCnXlG3TF8%2BPgSQsxPNZuTrDMteMFcJT992KhSpauTHg2Sxw9nHHOsrgDEj31v9MOPW0MEGOqUBXoTcEgn3nvtO7802M%2FUs9GPvBggxC6zMs9J4v%2BiOYCIK2jOizZfky7%2BEnpMDWdQZkQPdVBlDa0j05D755fXPibrF31HQwq2XC9SkEMtXC2NADFHSZCy4oSiliscFfI6qtRIjT3kXPu5oe7IlAq6r%2FSC84C5799h4nCj4QprMe1o2rIUxPlXBSdUq1vbXAF%2FNulX9Zexsndug0%2FPLkz275FoMH5fq&X-Amz-Signature=7d867b251ebc432653c953dea9eacf19f40184053bf4719e4d2fd70bcaeaa463&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQFMGM6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2B2gBiqZY1ou2Rx%2BEEgPELth9UAkn9LaUNmiB1XnZz9gIgDcCvqeT51BnCTTbLOthWRoEzKPIgxcjpoAWDVzOuscoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMf34J136QqtMje7ByrcA1TtT1kjt90gOnq%2BewfQAJgSoL1HYmqgLIyc82KJNz0GNWF%2FmZ%2BSpr74zYmx%2FCjggegx6JkNBIDwp3OdwhynpE45%2Bsc0uxdY6wNjQzW%2BXr%2FC7QgEzwvBYpFpWM4Br7lYP6sTfsTe2JxVlH%2FfNjgHrGfLd9ThxWq6%2F%2BM3OPI%2Ff66BbzyrHcCZuJ9%2Fa0PFBbKqKlGQzdeZTpBxOA7kamS8B%2BYsHVMXiegULvS8j%2F5XR9nnDObSD9381lrrImGYSZBj5j67ZcuYkoPmEifKVCJcCiDIYyjCp7LWIfFpTBIdky0%2FKefw2DUbVxdjEeRAiTSFuuvsr4AAxwiSDpjX%2F6TWz4242dr%2F9W7Mx8MeyaPJXaGXsdDhjNqKRRkFwchbHN%2FbZA0li3PNK4ZL%2FUlcd0h8GHra3%2FKd6AsbO%2FsezdS692Y2kT8ZIxg%2B7Ofv77VGCM4qJtT1r98VKHL%2BmZtZdAbfuDb8%2FD6Ac%2BIqJ79XB0RhJe1PSo19GdySAOtsNNTHC5Ryk7z3iOD%2Fr9we20K3eVjgOmLTaDuZnD5ja5ZhNyWD8KLFpoOe7NACFPD3k%2Fg%2FaoCnXlG3TF8%2BPgSQsxPNZuTrDMteMFcJT992KhSpauTHg2Sxw9nHHOsrgDEj31v9MOPW0MEGOqUBXoTcEgn3nvtO7802M%2FUs9GPvBggxC6zMs9J4v%2BiOYCIK2jOizZfky7%2BEnpMDWdQZkQPdVBlDa0j05D755fXPibrF31HQwq2XC9SkEMtXC2NADFHSZCy4oSiliscFfI6qtRIjT3kXPu5oe7IlAq6r%2FSC84C5799h4nCj4QprMe1o2rIUxPlXBSdUq1vbXAF%2FNulX9Zexsndug0%2FPLkz275FoMH5fq&X-Amz-Signature=854337d92203298c47ef1028e47d0b1187e1e9037c97dceae8927c43feae702c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQFMGM6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2B2gBiqZY1ou2Rx%2BEEgPELth9UAkn9LaUNmiB1XnZz9gIgDcCvqeT51BnCTTbLOthWRoEzKPIgxcjpoAWDVzOuscoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMf34J136QqtMje7ByrcA1TtT1kjt90gOnq%2BewfQAJgSoL1HYmqgLIyc82KJNz0GNWF%2FmZ%2BSpr74zYmx%2FCjggegx6JkNBIDwp3OdwhynpE45%2Bsc0uxdY6wNjQzW%2BXr%2FC7QgEzwvBYpFpWM4Br7lYP6sTfsTe2JxVlH%2FfNjgHrGfLd9ThxWq6%2F%2BM3OPI%2Ff66BbzyrHcCZuJ9%2Fa0PFBbKqKlGQzdeZTpBxOA7kamS8B%2BYsHVMXiegULvS8j%2F5XR9nnDObSD9381lrrImGYSZBj5j67ZcuYkoPmEifKVCJcCiDIYyjCp7LWIfFpTBIdky0%2FKefw2DUbVxdjEeRAiTSFuuvsr4AAxwiSDpjX%2F6TWz4242dr%2F9W7Mx8MeyaPJXaGXsdDhjNqKRRkFwchbHN%2FbZA0li3PNK4ZL%2FUlcd0h8GHra3%2FKd6AsbO%2FsezdS692Y2kT8ZIxg%2B7Ofv77VGCM4qJtT1r98VKHL%2BmZtZdAbfuDb8%2FD6Ac%2BIqJ79XB0RhJe1PSo19GdySAOtsNNTHC5Ryk7z3iOD%2Fr9we20K3eVjgOmLTaDuZnD5ja5ZhNyWD8KLFpoOe7NACFPD3k%2Fg%2FaoCnXlG3TF8%2BPgSQsxPNZuTrDMteMFcJT992KhSpauTHg2Sxw9nHHOsrgDEj31v9MOPW0MEGOqUBXoTcEgn3nvtO7802M%2FUs9GPvBggxC6zMs9J4v%2BiOYCIK2jOizZfky7%2BEnpMDWdQZkQPdVBlDa0j05D755fXPibrF31HQwq2XC9SkEMtXC2NADFHSZCy4oSiliscFfI6qtRIjT3kXPu5oe7IlAq6r%2FSC84C5799h4nCj4QprMe1o2rIUxPlXBSdUq1vbXAF%2FNulX9Zexsndug0%2FPLkz275FoMH5fq&X-Amz-Signature=759d5bbe5a252d09ec6be3faea73fba2479ace8f5a7d6b18fe130f7075a50b69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQFMGM6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2B2gBiqZY1ou2Rx%2BEEgPELth9UAkn9LaUNmiB1XnZz9gIgDcCvqeT51BnCTTbLOthWRoEzKPIgxcjpoAWDVzOuscoq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMf34J136QqtMje7ByrcA1TtT1kjt90gOnq%2BewfQAJgSoL1HYmqgLIyc82KJNz0GNWF%2FmZ%2BSpr74zYmx%2FCjggegx6JkNBIDwp3OdwhynpE45%2Bsc0uxdY6wNjQzW%2BXr%2FC7QgEzwvBYpFpWM4Br7lYP6sTfsTe2JxVlH%2FfNjgHrGfLd9ThxWq6%2F%2BM3OPI%2Ff66BbzyrHcCZuJ9%2Fa0PFBbKqKlGQzdeZTpBxOA7kamS8B%2BYsHVMXiegULvS8j%2F5XR9nnDObSD9381lrrImGYSZBj5j67ZcuYkoPmEifKVCJcCiDIYyjCp7LWIfFpTBIdky0%2FKefw2DUbVxdjEeRAiTSFuuvsr4AAxwiSDpjX%2F6TWz4242dr%2F9W7Mx8MeyaPJXaGXsdDhjNqKRRkFwchbHN%2FbZA0li3PNK4ZL%2FUlcd0h8GHra3%2FKd6AsbO%2FsezdS692Y2kT8ZIxg%2B7Ofv77VGCM4qJtT1r98VKHL%2BmZtZdAbfuDb8%2FD6Ac%2BIqJ79XB0RhJe1PSo19GdySAOtsNNTHC5Ryk7z3iOD%2Fr9we20K3eVjgOmLTaDuZnD5ja5ZhNyWD8KLFpoOe7NACFPD3k%2Fg%2FaoCnXlG3TF8%2BPgSQsxPNZuTrDMteMFcJT992KhSpauTHg2Sxw9nHHOsrgDEj31v9MOPW0MEGOqUBXoTcEgn3nvtO7802M%2FUs9GPvBggxC6zMs9J4v%2BiOYCIK2jOizZfky7%2BEnpMDWdQZkQPdVBlDa0j05D755fXPibrF31HQwq2XC9SkEMtXC2NADFHSZCy4oSiliscFfI6qtRIjT3kXPu5oe7IlAq6r%2FSC84C5799h4nCj4QprMe1o2rIUxPlXBSdUq1vbXAF%2FNulX9Zexsndug0%2FPLkz275FoMH5fq&X-Amz-Signature=388f39d119dcbc2e6e48841460a2355adb42e20774696a8e541407ca0fa23805&X-Amz-SignedHeaders=host&x-id=GetObject)
