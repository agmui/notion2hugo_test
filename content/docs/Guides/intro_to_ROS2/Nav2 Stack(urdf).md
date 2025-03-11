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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWM4ZT5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEhP0CQC%2Fz7EMFNuHySPhJEJcHMa5t8aKJEa8SUm59MPAiEAxjvWONHY7G24D28iLHSeULjO%2FSW2FIeRa6MDdEOGtq0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVD5tzFspHHCMGg0SrcA39TeUi9xTmnD2xtN0mwmlbtAS1IkG%2FSr7dd4E8Z4X7plqxfR9b8Ca0FuudpKOYtO1KK2Fsh2Df4ZZtQ7kBs8YlNYZC%2FTcu7zL%2BbeuSnH4twT8q9wspal9dXbxuWCkTBvkOcM1gpOHwIM%2BLcGrpRFRZ%2BmSAsdzLg58g%2BaGIdPvgSm6wcDS7JvNRX7PLypppP2l3xoXZvFr7ivfHrDAUQIsY5aOqqCG8qRDBWIYWF%2BEUzFDSOU4viURriIPb08lRIQq22ViE1fJvD6gajdfXsMwoGsbw8KOAppIUwSj3PUH4BjljTtmlPso07tFCeO1s4vRHd7LUustKllBDHh0JQtwjvfLfGFv6Ji6UKMI7y7N3GlF5QE3lqaI%2FleTCSk9psciGSBZKIGcBDUKvtxCRaFnapWE7mmYEF5Vx6%2FOMBQnjiEb7GgahuWf5jl9SdcGw6rCvH0MxgEitzrMszEBuN0EXwdsvwhe6Dz8r2u7Hf7hp6isbR2bL5obfN1TyFEgzjPx%2F8GmHTxZFBhgzdHwb%2FfpNyIIOJ4ju3nKit1BLPvT41Ny63C9%2BhAzgsCDS8YW9PKNrhiHLrAj3J3QhYKZyBp5AOLMcU03Lf97ZOmwZKWYluyBCgGX79nrrC9OeUMLOQwr4GOqUBOPevedxljRWViAJxAJDfa%2FK%2BghAmBPyohLroXpZFGYartpo%2FpX9flLSFl3aUV5s5ZDv0Y0kbG8swcnBnKuIhZze7ufHDprGnfXxH3EET8Q5zgKsxZJSlvzJSW7whFhq682CxCPAJ7vGnCRmXXmkAc8tGcfb2efnpHnKnNg03AeyZUU8H1ODqW9HlnRWfnFLVQBeRv%2FdISMLmC8n7E6YKREMvkHrH&X-Amz-Signature=269cbad59159f78b4068ebffed75d7443171685da0ef4dad79fb7a637a66ccdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWM4ZT5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEhP0CQC%2Fz7EMFNuHySPhJEJcHMa5t8aKJEa8SUm59MPAiEAxjvWONHY7G24D28iLHSeULjO%2FSW2FIeRa6MDdEOGtq0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVD5tzFspHHCMGg0SrcA39TeUi9xTmnD2xtN0mwmlbtAS1IkG%2FSr7dd4E8Z4X7plqxfR9b8Ca0FuudpKOYtO1KK2Fsh2Df4ZZtQ7kBs8YlNYZC%2FTcu7zL%2BbeuSnH4twT8q9wspal9dXbxuWCkTBvkOcM1gpOHwIM%2BLcGrpRFRZ%2BmSAsdzLg58g%2BaGIdPvgSm6wcDS7JvNRX7PLypppP2l3xoXZvFr7ivfHrDAUQIsY5aOqqCG8qRDBWIYWF%2BEUzFDSOU4viURriIPb08lRIQq22ViE1fJvD6gajdfXsMwoGsbw8KOAppIUwSj3PUH4BjljTtmlPso07tFCeO1s4vRHd7LUustKllBDHh0JQtwjvfLfGFv6Ji6UKMI7y7N3GlF5QE3lqaI%2FleTCSk9psciGSBZKIGcBDUKvtxCRaFnapWE7mmYEF5Vx6%2FOMBQnjiEb7GgahuWf5jl9SdcGw6rCvH0MxgEitzrMszEBuN0EXwdsvwhe6Dz8r2u7Hf7hp6isbR2bL5obfN1TyFEgzjPx%2F8GmHTxZFBhgzdHwb%2FfpNyIIOJ4ju3nKit1BLPvT41Ny63C9%2BhAzgsCDS8YW9PKNrhiHLrAj3J3QhYKZyBp5AOLMcU03Lf97ZOmwZKWYluyBCgGX79nrrC9OeUMLOQwr4GOqUBOPevedxljRWViAJxAJDfa%2FK%2BghAmBPyohLroXpZFGYartpo%2FpX9flLSFl3aUV5s5ZDv0Y0kbG8swcnBnKuIhZze7ufHDprGnfXxH3EET8Q5zgKsxZJSlvzJSW7whFhq682CxCPAJ7vGnCRmXXmkAc8tGcfb2efnpHnKnNg03AeyZUU8H1ODqW9HlnRWfnFLVQBeRv%2FdISMLmC8n7E6YKREMvkHrH&X-Amz-Signature=67acd5f4dc58b2121075a801ed49a830fb7521aa9bc1e35a49a39567c95743b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWM4ZT5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEhP0CQC%2Fz7EMFNuHySPhJEJcHMa5t8aKJEa8SUm59MPAiEAxjvWONHY7G24D28iLHSeULjO%2FSW2FIeRa6MDdEOGtq0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVD5tzFspHHCMGg0SrcA39TeUi9xTmnD2xtN0mwmlbtAS1IkG%2FSr7dd4E8Z4X7plqxfR9b8Ca0FuudpKOYtO1KK2Fsh2Df4ZZtQ7kBs8YlNYZC%2FTcu7zL%2BbeuSnH4twT8q9wspal9dXbxuWCkTBvkOcM1gpOHwIM%2BLcGrpRFRZ%2BmSAsdzLg58g%2BaGIdPvgSm6wcDS7JvNRX7PLypppP2l3xoXZvFr7ivfHrDAUQIsY5aOqqCG8qRDBWIYWF%2BEUzFDSOU4viURriIPb08lRIQq22ViE1fJvD6gajdfXsMwoGsbw8KOAppIUwSj3PUH4BjljTtmlPso07tFCeO1s4vRHd7LUustKllBDHh0JQtwjvfLfGFv6Ji6UKMI7y7N3GlF5QE3lqaI%2FleTCSk9psciGSBZKIGcBDUKvtxCRaFnapWE7mmYEF5Vx6%2FOMBQnjiEb7GgahuWf5jl9SdcGw6rCvH0MxgEitzrMszEBuN0EXwdsvwhe6Dz8r2u7Hf7hp6isbR2bL5obfN1TyFEgzjPx%2F8GmHTxZFBhgzdHwb%2FfpNyIIOJ4ju3nKit1BLPvT41Ny63C9%2BhAzgsCDS8YW9PKNrhiHLrAj3J3QhYKZyBp5AOLMcU03Lf97ZOmwZKWYluyBCgGX79nrrC9OeUMLOQwr4GOqUBOPevedxljRWViAJxAJDfa%2FK%2BghAmBPyohLroXpZFGYartpo%2FpX9flLSFl3aUV5s5ZDv0Y0kbG8swcnBnKuIhZze7ufHDprGnfXxH3EET8Q5zgKsxZJSlvzJSW7whFhq682CxCPAJ7vGnCRmXXmkAc8tGcfb2efnpHnKnNg03AeyZUU8H1ODqW9HlnRWfnFLVQBeRv%2FdISMLmC8n7E6YKREMvkHrH&X-Amz-Signature=d433616b59562dcd3369bfaa70ef43a0f13ee54396ecdaf584a67bf18f8f0b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWM4ZT5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEhP0CQC%2Fz7EMFNuHySPhJEJcHMa5t8aKJEa8SUm59MPAiEAxjvWONHY7G24D28iLHSeULjO%2FSW2FIeRa6MDdEOGtq0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVD5tzFspHHCMGg0SrcA39TeUi9xTmnD2xtN0mwmlbtAS1IkG%2FSr7dd4E8Z4X7plqxfR9b8Ca0FuudpKOYtO1KK2Fsh2Df4ZZtQ7kBs8YlNYZC%2FTcu7zL%2BbeuSnH4twT8q9wspal9dXbxuWCkTBvkOcM1gpOHwIM%2BLcGrpRFRZ%2BmSAsdzLg58g%2BaGIdPvgSm6wcDS7JvNRX7PLypppP2l3xoXZvFr7ivfHrDAUQIsY5aOqqCG8qRDBWIYWF%2BEUzFDSOU4viURriIPb08lRIQq22ViE1fJvD6gajdfXsMwoGsbw8KOAppIUwSj3PUH4BjljTtmlPso07tFCeO1s4vRHd7LUustKllBDHh0JQtwjvfLfGFv6Ji6UKMI7y7N3GlF5QE3lqaI%2FleTCSk9psciGSBZKIGcBDUKvtxCRaFnapWE7mmYEF5Vx6%2FOMBQnjiEb7GgahuWf5jl9SdcGw6rCvH0MxgEitzrMszEBuN0EXwdsvwhe6Dz8r2u7Hf7hp6isbR2bL5obfN1TyFEgzjPx%2F8GmHTxZFBhgzdHwb%2FfpNyIIOJ4ju3nKit1BLPvT41Ny63C9%2BhAzgsCDS8YW9PKNrhiHLrAj3J3QhYKZyBp5AOLMcU03Lf97ZOmwZKWYluyBCgGX79nrrC9OeUMLOQwr4GOqUBOPevedxljRWViAJxAJDfa%2FK%2BghAmBPyohLroXpZFGYartpo%2FpX9flLSFl3aUV5s5ZDv0Y0kbG8swcnBnKuIhZze7ufHDprGnfXxH3EET8Q5zgKsxZJSlvzJSW7whFhq682CxCPAJ7vGnCRmXXmkAc8tGcfb2efnpHnKnNg03AeyZUU8H1ODqW9HlnRWfnFLVQBeRv%2FdISMLmC8n7E6YKREMvkHrH&X-Amz-Signature=88d4c175874e4565000613ad997101653b0cb12fb23b209b71f13cbcea0cddf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWM4ZT5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEhP0CQC%2Fz7EMFNuHySPhJEJcHMa5t8aKJEa8SUm59MPAiEAxjvWONHY7G24D28iLHSeULjO%2FSW2FIeRa6MDdEOGtq0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVD5tzFspHHCMGg0SrcA39TeUi9xTmnD2xtN0mwmlbtAS1IkG%2FSr7dd4E8Z4X7plqxfR9b8Ca0FuudpKOYtO1KK2Fsh2Df4ZZtQ7kBs8YlNYZC%2FTcu7zL%2BbeuSnH4twT8q9wspal9dXbxuWCkTBvkOcM1gpOHwIM%2BLcGrpRFRZ%2BmSAsdzLg58g%2BaGIdPvgSm6wcDS7JvNRX7PLypppP2l3xoXZvFr7ivfHrDAUQIsY5aOqqCG8qRDBWIYWF%2BEUzFDSOU4viURriIPb08lRIQq22ViE1fJvD6gajdfXsMwoGsbw8KOAppIUwSj3PUH4BjljTtmlPso07tFCeO1s4vRHd7LUustKllBDHh0JQtwjvfLfGFv6Ji6UKMI7y7N3GlF5QE3lqaI%2FleTCSk9psciGSBZKIGcBDUKvtxCRaFnapWE7mmYEF5Vx6%2FOMBQnjiEb7GgahuWf5jl9SdcGw6rCvH0MxgEitzrMszEBuN0EXwdsvwhe6Dz8r2u7Hf7hp6isbR2bL5obfN1TyFEgzjPx%2F8GmHTxZFBhgzdHwb%2FfpNyIIOJ4ju3nKit1BLPvT41Ny63C9%2BhAzgsCDS8YW9PKNrhiHLrAj3J3QhYKZyBp5AOLMcU03Lf97ZOmwZKWYluyBCgGX79nrrC9OeUMLOQwr4GOqUBOPevedxljRWViAJxAJDfa%2FK%2BghAmBPyohLroXpZFGYartpo%2FpX9flLSFl3aUV5s5ZDv0Y0kbG8swcnBnKuIhZze7ufHDprGnfXxH3EET8Q5zgKsxZJSlvzJSW7whFhq682CxCPAJ7vGnCRmXXmkAc8tGcfb2efnpHnKnNg03AeyZUU8H1ODqW9HlnRWfnFLVQBeRv%2FdISMLmC8n7E6YKREMvkHrH&X-Amz-Signature=4a8c3b0f4eb5ede074bb60de83ad5ae8bfc6fa9f45b726126980ef9257bc86b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWM4ZT5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEhP0CQC%2Fz7EMFNuHySPhJEJcHMa5t8aKJEa8SUm59MPAiEAxjvWONHY7G24D28iLHSeULjO%2FSW2FIeRa6MDdEOGtq0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVD5tzFspHHCMGg0SrcA39TeUi9xTmnD2xtN0mwmlbtAS1IkG%2FSr7dd4E8Z4X7plqxfR9b8Ca0FuudpKOYtO1KK2Fsh2Df4ZZtQ7kBs8YlNYZC%2FTcu7zL%2BbeuSnH4twT8q9wspal9dXbxuWCkTBvkOcM1gpOHwIM%2BLcGrpRFRZ%2BmSAsdzLg58g%2BaGIdPvgSm6wcDS7JvNRX7PLypppP2l3xoXZvFr7ivfHrDAUQIsY5aOqqCG8qRDBWIYWF%2BEUzFDSOU4viURriIPb08lRIQq22ViE1fJvD6gajdfXsMwoGsbw8KOAppIUwSj3PUH4BjljTtmlPso07tFCeO1s4vRHd7LUustKllBDHh0JQtwjvfLfGFv6Ji6UKMI7y7N3GlF5QE3lqaI%2FleTCSk9psciGSBZKIGcBDUKvtxCRaFnapWE7mmYEF5Vx6%2FOMBQnjiEb7GgahuWf5jl9SdcGw6rCvH0MxgEitzrMszEBuN0EXwdsvwhe6Dz8r2u7Hf7hp6isbR2bL5obfN1TyFEgzjPx%2F8GmHTxZFBhgzdHwb%2FfpNyIIOJ4ju3nKit1BLPvT41Ny63C9%2BhAzgsCDS8YW9PKNrhiHLrAj3J3QhYKZyBp5AOLMcU03Lf97ZOmwZKWYluyBCgGX79nrrC9OeUMLOQwr4GOqUBOPevedxljRWViAJxAJDfa%2FK%2BghAmBPyohLroXpZFGYartpo%2FpX9flLSFl3aUV5s5ZDv0Y0kbG8swcnBnKuIhZze7ufHDprGnfXxH3EET8Q5zgKsxZJSlvzJSW7whFhq682CxCPAJ7vGnCRmXXmkAc8tGcfb2efnpHnKnNg03AeyZUU8H1ODqW9HlnRWfnFLVQBeRv%2FdISMLmC8n7E6YKREMvkHrH&X-Amz-Signature=b4f1efcd965b1b693dc6160c5e7182a4b5e4c057611252b12ad01e39cb28ec8a&X-Amz-SignedHeaders=host&x-id=GetObject)
