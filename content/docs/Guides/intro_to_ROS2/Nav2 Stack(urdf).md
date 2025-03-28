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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXHBSAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA5uBTLNP8jjKnF69LFggwOpNtlva%2FxkyQJuV2kS2%2FhQIhAKKZGpcdc3aol30OZge8R1WqcIGeHHwxf1jBlIoDsSFIKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZIi3XhNTDTKEKeEsq3ANdCLX4EvBYS8JPwOstpe6SxOUeBZ4ifV%2FVcA8v1cRouUWatyeHIFh4msQepsLghdrZ8anZ%2BBYiWwtkyCLpWK1VU0y72MD2RzzoeI%2B%2B8izWmmkIhVWodRn7TK4diRRgryUoopgVTfx3jE%2FG4Qb0U9pjSj8YLP8hZZ4kc285m1oA7UlXBCWG%2FOOJRqsbM4tCj7vVLfr%2FmrNpQ9992z%2Bxc%2Bo8FM1Rm1YoVRtw4chzb5bx%2BqipN437Fhunx6K6e5nMvFVq%2BU9gPvrX7m8QeHFm1MPRVYqa5oawDfObu7eDGPRH1XvQJWKw0j9844hvdj8UqDEt%2FOTP1ETZd4mpG9sFACgO3os%2BYroy%2BUYFZkSBwh%2BOvxjhS%2B74KytXZDy%2FSFmfMsDJF43%2Fu%2FueU%2FgwOz7rOkf6ppSMRz%2BiQPEJxr3Bso5Dm8UGTmpljtj6pbcEaJbZTev8606%2FhMfHtvqSj%2FZSx%2FYH4p8Kqp4TGI2KCFEbeAyjfo5uRRyNG0bkFdmNxH5QYmwIiU%2BoQ6Jj7P8EVwo4oSD13Bu32StTT824GRIi6hIm7oOL84W6MXtMBTI8xuSHpA9OaMsmjUNpGTrZ5CzQhphNZSzpv%2FElV7nNjy1u%2Frn0UHXDByUTWw8WlRkTazDolJq%2FBjqkATR7op6Ny1iK%2BGE6nleFrgE8oCxRaYFVLUKGl%2BuP5%2BHj4v2vxHsbzwXmP0n0bD0PtO9tkODgOsF8MceGHvOKrL6a5GEaDttUnDPGyzdE3qr7LSJrsdOJVdE8OBPW00evNJt3CcV9cdH%2BHNEMOiVGo1ioyAZbRdyv%2FFJ5BXZWM8ivucsOQgevJO8YLHucKgZ%2BSwxoCzqY3nPhjbKfkkSMpzQHILij&X-Amz-Signature=9b04692f2e7fcea0542e794792f17d1a273ac6abbf58a6f3e82a1415c47232f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXHBSAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA5uBTLNP8jjKnF69LFggwOpNtlva%2FxkyQJuV2kS2%2FhQIhAKKZGpcdc3aol30OZge8R1WqcIGeHHwxf1jBlIoDsSFIKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZIi3XhNTDTKEKeEsq3ANdCLX4EvBYS8JPwOstpe6SxOUeBZ4ifV%2FVcA8v1cRouUWatyeHIFh4msQepsLghdrZ8anZ%2BBYiWwtkyCLpWK1VU0y72MD2RzzoeI%2B%2B8izWmmkIhVWodRn7TK4diRRgryUoopgVTfx3jE%2FG4Qb0U9pjSj8YLP8hZZ4kc285m1oA7UlXBCWG%2FOOJRqsbM4tCj7vVLfr%2FmrNpQ9992z%2Bxc%2Bo8FM1Rm1YoVRtw4chzb5bx%2BqipN437Fhunx6K6e5nMvFVq%2BU9gPvrX7m8QeHFm1MPRVYqa5oawDfObu7eDGPRH1XvQJWKw0j9844hvdj8UqDEt%2FOTP1ETZd4mpG9sFACgO3os%2BYroy%2BUYFZkSBwh%2BOvxjhS%2B74KytXZDy%2FSFmfMsDJF43%2Fu%2FueU%2FgwOz7rOkf6ppSMRz%2BiQPEJxr3Bso5Dm8UGTmpljtj6pbcEaJbZTev8606%2FhMfHtvqSj%2FZSx%2FYH4p8Kqp4TGI2KCFEbeAyjfo5uRRyNG0bkFdmNxH5QYmwIiU%2BoQ6Jj7P8EVwo4oSD13Bu32StTT824GRIi6hIm7oOL84W6MXtMBTI8xuSHpA9OaMsmjUNpGTrZ5CzQhphNZSzpv%2FElV7nNjy1u%2Frn0UHXDByUTWw8WlRkTazDolJq%2FBjqkATR7op6Ny1iK%2BGE6nleFrgE8oCxRaYFVLUKGl%2BuP5%2BHj4v2vxHsbzwXmP0n0bD0PtO9tkODgOsF8MceGHvOKrL6a5GEaDttUnDPGyzdE3qr7LSJrsdOJVdE8OBPW00evNJt3CcV9cdH%2BHNEMOiVGo1ioyAZbRdyv%2FFJ5BXZWM8ivucsOQgevJO8YLHucKgZ%2BSwxoCzqY3nPhjbKfkkSMpzQHILij&X-Amz-Signature=fa15eead603b64b0494a0025295b197cf8b1abf5d7a99cd4d0bb7be5a4ecb76c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXHBSAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA5uBTLNP8jjKnF69LFggwOpNtlva%2FxkyQJuV2kS2%2FhQIhAKKZGpcdc3aol30OZge8R1WqcIGeHHwxf1jBlIoDsSFIKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZIi3XhNTDTKEKeEsq3ANdCLX4EvBYS8JPwOstpe6SxOUeBZ4ifV%2FVcA8v1cRouUWatyeHIFh4msQepsLghdrZ8anZ%2BBYiWwtkyCLpWK1VU0y72MD2RzzoeI%2B%2B8izWmmkIhVWodRn7TK4diRRgryUoopgVTfx3jE%2FG4Qb0U9pjSj8YLP8hZZ4kc285m1oA7UlXBCWG%2FOOJRqsbM4tCj7vVLfr%2FmrNpQ9992z%2Bxc%2Bo8FM1Rm1YoVRtw4chzb5bx%2BqipN437Fhunx6K6e5nMvFVq%2BU9gPvrX7m8QeHFm1MPRVYqa5oawDfObu7eDGPRH1XvQJWKw0j9844hvdj8UqDEt%2FOTP1ETZd4mpG9sFACgO3os%2BYroy%2BUYFZkSBwh%2BOvxjhS%2B74KytXZDy%2FSFmfMsDJF43%2Fu%2FueU%2FgwOz7rOkf6ppSMRz%2BiQPEJxr3Bso5Dm8UGTmpljtj6pbcEaJbZTev8606%2FhMfHtvqSj%2FZSx%2FYH4p8Kqp4TGI2KCFEbeAyjfo5uRRyNG0bkFdmNxH5QYmwIiU%2BoQ6Jj7P8EVwo4oSD13Bu32StTT824GRIi6hIm7oOL84W6MXtMBTI8xuSHpA9OaMsmjUNpGTrZ5CzQhphNZSzpv%2FElV7nNjy1u%2Frn0UHXDByUTWw8WlRkTazDolJq%2FBjqkATR7op6Ny1iK%2BGE6nleFrgE8oCxRaYFVLUKGl%2BuP5%2BHj4v2vxHsbzwXmP0n0bD0PtO9tkODgOsF8MceGHvOKrL6a5GEaDttUnDPGyzdE3qr7LSJrsdOJVdE8OBPW00evNJt3CcV9cdH%2BHNEMOiVGo1ioyAZbRdyv%2FFJ5BXZWM8ivucsOQgevJO8YLHucKgZ%2BSwxoCzqY3nPhjbKfkkSMpzQHILij&X-Amz-Signature=41467327b1885cad571961bde022b0e48711eb8c661f2c32aef36d2610350ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXHBSAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA5uBTLNP8jjKnF69LFggwOpNtlva%2FxkyQJuV2kS2%2FhQIhAKKZGpcdc3aol30OZge8R1WqcIGeHHwxf1jBlIoDsSFIKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZIi3XhNTDTKEKeEsq3ANdCLX4EvBYS8JPwOstpe6SxOUeBZ4ifV%2FVcA8v1cRouUWatyeHIFh4msQepsLghdrZ8anZ%2BBYiWwtkyCLpWK1VU0y72MD2RzzoeI%2B%2B8izWmmkIhVWodRn7TK4diRRgryUoopgVTfx3jE%2FG4Qb0U9pjSj8YLP8hZZ4kc285m1oA7UlXBCWG%2FOOJRqsbM4tCj7vVLfr%2FmrNpQ9992z%2Bxc%2Bo8FM1Rm1YoVRtw4chzb5bx%2BqipN437Fhunx6K6e5nMvFVq%2BU9gPvrX7m8QeHFm1MPRVYqa5oawDfObu7eDGPRH1XvQJWKw0j9844hvdj8UqDEt%2FOTP1ETZd4mpG9sFACgO3os%2BYroy%2BUYFZkSBwh%2BOvxjhS%2B74KytXZDy%2FSFmfMsDJF43%2Fu%2FueU%2FgwOz7rOkf6ppSMRz%2BiQPEJxr3Bso5Dm8UGTmpljtj6pbcEaJbZTev8606%2FhMfHtvqSj%2FZSx%2FYH4p8Kqp4TGI2KCFEbeAyjfo5uRRyNG0bkFdmNxH5QYmwIiU%2BoQ6Jj7P8EVwo4oSD13Bu32StTT824GRIi6hIm7oOL84W6MXtMBTI8xuSHpA9OaMsmjUNpGTrZ5CzQhphNZSzpv%2FElV7nNjy1u%2Frn0UHXDByUTWw8WlRkTazDolJq%2FBjqkATR7op6Ny1iK%2BGE6nleFrgE8oCxRaYFVLUKGl%2BuP5%2BHj4v2vxHsbzwXmP0n0bD0PtO9tkODgOsF8MceGHvOKrL6a5GEaDttUnDPGyzdE3qr7LSJrsdOJVdE8OBPW00evNJt3CcV9cdH%2BHNEMOiVGo1ioyAZbRdyv%2FFJ5BXZWM8ivucsOQgevJO8YLHucKgZ%2BSwxoCzqY3nPhjbKfkkSMpzQHILij&X-Amz-Signature=8fe45c520260ff15be4d2376287380c47ae2414d0d0dbc52528c34ad2c8eab3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXHBSAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA5uBTLNP8jjKnF69LFggwOpNtlva%2FxkyQJuV2kS2%2FhQIhAKKZGpcdc3aol30OZge8R1WqcIGeHHwxf1jBlIoDsSFIKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZIi3XhNTDTKEKeEsq3ANdCLX4EvBYS8JPwOstpe6SxOUeBZ4ifV%2FVcA8v1cRouUWatyeHIFh4msQepsLghdrZ8anZ%2BBYiWwtkyCLpWK1VU0y72MD2RzzoeI%2B%2B8izWmmkIhVWodRn7TK4diRRgryUoopgVTfx3jE%2FG4Qb0U9pjSj8YLP8hZZ4kc285m1oA7UlXBCWG%2FOOJRqsbM4tCj7vVLfr%2FmrNpQ9992z%2Bxc%2Bo8FM1Rm1YoVRtw4chzb5bx%2BqipN437Fhunx6K6e5nMvFVq%2BU9gPvrX7m8QeHFm1MPRVYqa5oawDfObu7eDGPRH1XvQJWKw0j9844hvdj8UqDEt%2FOTP1ETZd4mpG9sFACgO3os%2BYroy%2BUYFZkSBwh%2BOvxjhS%2B74KytXZDy%2FSFmfMsDJF43%2Fu%2FueU%2FgwOz7rOkf6ppSMRz%2BiQPEJxr3Bso5Dm8UGTmpljtj6pbcEaJbZTev8606%2FhMfHtvqSj%2FZSx%2FYH4p8Kqp4TGI2KCFEbeAyjfo5uRRyNG0bkFdmNxH5QYmwIiU%2BoQ6Jj7P8EVwo4oSD13Bu32StTT824GRIi6hIm7oOL84W6MXtMBTI8xuSHpA9OaMsmjUNpGTrZ5CzQhphNZSzpv%2FElV7nNjy1u%2Frn0UHXDByUTWw8WlRkTazDolJq%2FBjqkATR7op6Ny1iK%2BGE6nleFrgE8oCxRaYFVLUKGl%2BuP5%2BHj4v2vxHsbzwXmP0n0bD0PtO9tkODgOsF8MceGHvOKrL6a5GEaDttUnDPGyzdE3qr7LSJrsdOJVdE8OBPW00evNJt3CcV9cdH%2BHNEMOiVGo1ioyAZbRdyv%2FFJ5BXZWM8ivucsOQgevJO8YLHucKgZ%2BSwxoCzqY3nPhjbKfkkSMpzQHILij&X-Amz-Signature=8037b891d539a1f3a3447c4083ff95f13645f5cca3d4d86800de84aeed1cb33a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXHBSAU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA5uBTLNP8jjKnF69LFggwOpNtlva%2FxkyQJuV2kS2%2FhQIhAKKZGpcdc3aol30OZge8R1WqcIGeHHwxf1jBlIoDsSFIKv8DCF0QABoMNjM3NDIzMTgzODA1IgxZIi3XhNTDTKEKeEsq3ANdCLX4EvBYS8JPwOstpe6SxOUeBZ4ifV%2FVcA8v1cRouUWatyeHIFh4msQepsLghdrZ8anZ%2BBYiWwtkyCLpWK1VU0y72MD2RzzoeI%2B%2B8izWmmkIhVWodRn7TK4diRRgryUoopgVTfx3jE%2FG4Qb0U9pjSj8YLP8hZZ4kc285m1oA7UlXBCWG%2FOOJRqsbM4tCj7vVLfr%2FmrNpQ9992z%2Bxc%2Bo8FM1Rm1YoVRtw4chzb5bx%2BqipN437Fhunx6K6e5nMvFVq%2BU9gPvrX7m8QeHFm1MPRVYqa5oawDfObu7eDGPRH1XvQJWKw0j9844hvdj8UqDEt%2FOTP1ETZd4mpG9sFACgO3os%2BYroy%2BUYFZkSBwh%2BOvxjhS%2B74KytXZDy%2FSFmfMsDJF43%2Fu%2FueU%2FgwOz7rOkf6ppSMRz%2BiQPEJxr3Bso5Dm8UGTmpljtj6pbcEaJbZTev8606%2FhMfHtvqSj%2FZSx%2FYH4p8Kqp4TGI2KCFEbeAyjfo5uRRyNG0bkFdmNxH5QYmwIiU%2BoQ6Jj7P8EVwo4oSD13Bu32StTT824GRIi6hIm7oOL84W6MXtMBTI8xuSHpA9OaMsmjUNpGTrZ5CzQhphNZSzpv%2FElV7nNjy1u%2Frn0UHXDByUTWw8WlRkTazDolJq%2FBjqkATR7op6Ny1iK%2BGE6nleFrgE8oCxRaYFVLUKGl%2BuP5%2BHj4v2vxHsbzwXmP0n0bD0PtO9tkODgOsF8MceGHvOKrL6a5GEaDttUnDPGyzdE3qr7LSJrsdOJVdE8OBPW00evNJt3CcV9cdH%2BHNEMOiVGo1ioyAZbRdyv%2FFJ5BXZWM8ivucsOQgevJO8YLHucKgZ%2BSwxoCzqY3nPhjbKfkkSMpzQHILij&X-Amz-Signature=fff33284c06b201200d0c834518926af159cea29c1fbef8f4a67df059d8db3f6&X-Amz-SignedHeaders=host&x-id=GetObject)
