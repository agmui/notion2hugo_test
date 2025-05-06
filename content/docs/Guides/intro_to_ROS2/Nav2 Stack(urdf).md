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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOZZNEG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7orrcLbxYrGreY3dOC74J%2BiovjlLzISc%2F6kX1QAlyQIgJh%2BYaOxpM4FB%2FRocrNrR1dKGt7YOlgVcJkEapSnL%2B%2Fcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJkB8T8PkmLHaLlAaircA1et46mcEjP%2FKsdCspiA7vfCnmGWHzI2UlagrGg%2BiEqMWwj6dPM8IA3eRF5WJddJQ3bN6ONdd1flz2ozyGWUtnGYjL8CCzik%2BMOddz1%2FA0Vykza2oHYesEmHknY%2BoDss04cjnsui%2Fer%2F%2FBUIJTR9onmc0ZCb1Y5ze7utUyQdKvy%2BpquGi8N8CBeKqAhVhbutVSCWP0M4YP%2FbK0x1Jn6FErNvzpgSjPbia8k7gKcUTja0fM8JhfTW2zi1Kg%2BVedVSIRn87uDnbnJeldEgGJV5cNml61e9WrV1thJ2zV%2FLOEr0tmP4ZsfxDDLP3wvASiCSdQ0zpCNsIcHX0CAI8N%2BoLoUWjX62y%2F1aZljwEvn2lean%2Bn%2FHARG8JawvrdCUMU0%2BHB1pQ3OWL%2FD%2BXPdjKqEzM9fHUYOJkEFU8qwXwHTIaT7Qt3bJRJVcUShzJ4%2FCqbfqgorLgG5%2Ffc88yD67AyC2LYOuAoKALDsjDxm8RvVre4t0zVJUtIEs3s3Ck8%2Fb2LcIQcYS0fiRgGZpH6Yrorvage8u5sHW5jd290ronPzHcjvaJUpw0Tfm%2BQlCAc3PSjPL84jjDeLPDjZ%2FfIs%2FWmSrG7g2eQzsWYANrkmvViU6vD0EVahuaiI1NyM8orHdMNCY6MAGOqUBi6X4dl59ggvpCgB10rG3NhPaS4r0hA8H7bTZAIyIsYJxyBwX%2BQTPiOEcyg7ycMUIdj7c2Smw3HQxFM6tyLWzWnKqAxy%2FAdmLAyjhspycjsycpMTRehbpnAurdSnxKq2Gm2E3dKjiPyxKBtqh3I3UqKul02Le61XwX85dtBlEgBL9vDAg%2Fs%2B56eUht5JSkYME8qPTpEAoCGFyOVGGez79H4IQ%2Fqb1&X-Amz-Signature=33ce9db262a3c7f99e5828dea4a99e1f2f1affa72e424fefe6c465a27092404a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOZZNEG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7orrcLbxYrGreY3dOC74J%2BiovjlLzISc%2F6kX1QAlyQIgJh%2BYaOxpM4FB%2FRocrNrR1dKGt7YOlgVcJkEapSnL%2B%2Fcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJkB8T8PkmLHaLlAaircA1et46mcEjP%2FKsdCspiA7vfCnmGWHzI2UlagrGg%2BiEqMWwj6dPM8IA3eRF5WJddJQ3bN6ONdd1flz2ozyGWUtnGYjL8CCzik%2BMOddz1%2FA0Vykza2oHYesEmHknY%2BoDss04cjnsui%2Fer%2F%2FBUIJTR9onmc0ZCb1Y5ze7utUyQdKvy%2BpquGi8N8CBeKqAhVhbutVSCWP0M4YP%2FbK0x1Jn6FErNvzpgSjPbia8k7gKcUTja0fM8JhfTW2zi1Kg%2BVedVSIRn87uDnbnJeldEgGJV5cNml61e9WrV1thJ2zV%2FLOEr0tmP4ZsfxDDLP3wvASiCSdQ0zpCNsIcHX0CAI8N%2BoLoUWjX62y%2F1aZljwEvn2lean%2Bn%2FHARG8JawvrdCUMU0%2BHB1pQ3OWL%2FD%2BXPdjKqEzM9fHUYOJkEFU8qwXwHTIaT7Qt3bJRJVcUShzJ4%2FCqbfqgorLgG5%2Ffc88yD67AyC2LYOuAoKALDsjDxm8RvVre4t0zVJUtIEs3s3Ck8%2Fb2LcIQcYS0fiRgGZpH6Yrorvage8u5sHW5jd290ronPzHcjvaJUpw0Tfm%2BQlCAc3PSjPL84jjDeLPDjZ%2FfIs%2FWmSrG7g2eQzsWYANrkmvViU6vD0EVahuaiI1NyM8orHdMNCY6MAGOqUBi6X4dl59ggvpCgB10rG3NhPaS4r0hA8H7bTZAIyIsYJxyBwX%2BQTPiOEcyg7ycMUIdj7c2Smw3HQxFM6tyLWzWnKqAxy%2FAdmLAyjhspycjsycpMTRehbpnAurdSnxKq2Gm2E3dKjiPyxKBtqh3I3UqKul02Le61XwX85dtBlEgBL9vDAg%2Fs%2B56eUht5JSkYME8qPTpEAoCGFyOVGGez79H4IQ%2Fqb1&X-Amz-Signature=17ed5f7f8f373c04bfe74561b13d6871bd610bba246960a4eb51146f3aa6bd16&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOZZNEG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7orrcLbxYrGreY3dOC74J%2BiovjlLzISc%2F6kX1QAlyQIgJh%2BYaOxpM4FB%2FRocrNrR1dKGt7YOlgVcJkEapSnL%2B%2Fcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJkB8T8PkmLHaLlAaircA1et46mcEjP%2FKsdCspiA7vfCnmGWHzI2UlagrGg%2BiEqMWwj6dPM8IA3eRF5WJddJQ3bN6ONdd1flz2ozyGWUtnGYjL8CCzik%2BMOddz1%2FA0Vykza2oHYesEmHknY%2BoDss04cjnsui%2Fer%2F%2FBUIJTR9onmc0ZCb1Y5ze7utUyQdKvy%2BpquGi8N8CBeKqAhVhbutVSCWP0M4YP%2FbK0x1Jn6FErNvzpgSjPbia8k7gKcUTja0fM8JhfTW2zi1Kg%2BVedVSIRn87uDnbnJeldEgGJV5cNml61e9WrV1thJ2zV%2FLOEr0tmP4ZsfxDDLP3wvASiCSdQ0zpCNsIcHX0CAI8N%2BoLoUWjX62y%2F1aZljwEvn2lean%2Bn%2FHARG8JawvrdCUMU0%2BHB1pQ3OWL%2FD%2BXPdjKqEzM9fHUYOJkEFU8qwXwHTIaT7Qt3bJRJVcUShzJ4%2FCqbfqgorLgG5%2Ffc88yD67AyC2LYOuAoKALDsjDxm8RvVre4t0zVJUtIEs3s3Ck8%2Fb2LcIQcYS0fiRgGZpH6Yrorvage8u5sHW5jd290ronPzHcjvaJUpw0Tfm%2BQlCAc3PSjPL84jjDeLPDjZ%2FfIs%2FWmSrG7g2eQzsWYANrkmvViU6vD0EVahuaiI1NyM8orHdMNCY6MAGOqUBi6X4dl59ggvpCgB10rG3NhPaS4r0hA8H7bTZAIyIsYJxyBwX%2BQTPiOEcyg7ycMUIdj7c2Smw3HQxFM6tyLWzWnKqAxy%2FAdmLAyjhspycjsycpMTRehbpnAurdSnxKq2Gm2E3dKjiPyxKBtqh3I3UqKul02Le61XwX85dtBlEgBL9vDAg%2Fs%2B56eUht5JSkYME8qPTpEAoCGFyOVGGez79H4IQ%2Fqb1&X-Amz-Signature=6e324dbe494fc6d165f3f05ed9bd4b19efe17592ad66ce75a0a1adafaeb1daa3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOZZNEG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7orrcLbxYrGreY3dOC74J%2BiovjlLzISc%2F6kX1QAlyQIgJh%2BYaOxpM4FB%2FRocrNrR1dKGt7YOlgVcJkEapSnL%2B%2Fcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJkB8T8PkmLHaLlAaircA1et46mcEjP%2FKsdCspiA7vfCnmGWHzI2UlagrGg%2BiEqMWwj6dPM8IA3eRF5WJddJQ3bN6ONdd1flz2ozyGWUtnGYjL8CCzik%2BMOddz1%2FA0Vykza2oHYesEmHknY%2BoDss04cjnsui%2Fer%2F%2FBUIJTR9onmc0ZCb1Y5ze7utUyQdKvy%2BpquGi8N8CBeKqAhVhbutVSCWP0M4YP%2FbK0x1Jn6FErNvzpgSjPbia8k7gKcUTja0fM8JhfTW2zi1Kg%2BVedVSIRn87uDnbnJeldEgGJV5cNml61e9WrV1thJ2zV%2FLOEr0tmP4ZsfxDDLP3wvASiCSdQ0zpCNsIcHX0CAI8N%2BoLoUWjX62y%2F1aZljwEvn2lean%2Bn%2FHARG8JawvrdCUMU0%2BHB1pQ3OWL%2FD%2BXPdjKqEzM9fHUYOJkEFU8qwXwHTIaT7Qt3bJRJVcUShzJ4%2FCqbfqgorLgG5%2Ffc88yD67AyC2LYOuAoKALDsjDxm8RvVre4t0zVJUtIEs3s3Ck8%2Fb2LcIQcYS0fiRgGZpH6Yrorvage8u5sHW5jd290ronPzHcjvaJUpw0Tfm%2BQlCAc3PSjPL84jjDeLPDjZ%2FfIs%2FWmSrG7g2eQzsWYANrkmvViU6vD0EVahuaiI1NyM8orHdMNCY6MAGOqUBi6X4dl59ggvpCgB10rG3NhPaS4r0hA8H7bTZAIyIsYJxyBwX%2BQTPiOEcyg7ycMUIdj7c2Smw3HQxFM6tyLWzWnKqAxy%2FAdmLAyjhspycjsycpMTRehbpnAurdSnxKq2Gm2E3dKjiPyxKBtqh3I3UqKul02Le61XwX85dtBlEgBL9vDAg%2Fs%2B56eUht5JSkYME8qPTpEAoCGFyOVGGez79H4IQ%2Fqb1&X-Amz-Signature=fe1a30a12de20ae269a027c921b2dde4ee2afe8de8483e6927d18ed774196589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOZZNEG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7orrcLbxYrGreY3dOC74J%2BiovjlLzISc%2F6kX1QAlyQIgJh%2BYaOxpM4FB%2FRocrNrR1dKGt7YOlgVcJkEapSnL%2B%2Fcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJkB8T8PkmLHaLlAaircA1et46mcEjP%2FKsdCspiA7vfCnmGWHzI2UlagrGg%2BiEqMWwj6dPM8IA3eRF5WJddJQ3bN6ONdd1flz2ozyGWUtnGYjL8CCzik%2BMOddz1%2FA0Vykza2oHYesEmHknY%2BoDss04cjnsui%2Fer%2F%2FBUIJTR9onmc0ZCb1Y5ze7utUyQdKvy%2BpquGi8N8CBeKqAhVhbutVSCWP0M4YP%2FbK0x1Jn6FErNvzpgSjPbia8k7gKcUTja0fM8JhfTW2zi1Kg%2BVedVSIRn87uDnbnJeldEgGJV5cNml61e9WrV1thJ2zV%2FLOEr0tmP4ZsfxDDLP3wvASiCSdQ0zpCNsIcHX0CAI8N%2BoLoUWjX62y%2F1aZljwEvn2lean%2Bn%2FHARG8JawvrdCUMU0%2BHB1pQ3OWL%2FD%2BXPdjKqEzM9fHUYOJkEFU8qwXwHTIaT7Qt3bJRJVcUShzJ4%2FCqbfqgorLgG5%2Ffc88yD67AyC2LYOuAoKALDsjDxm8RvVre4t0zVJUtIEs3s3Ck8%2Fb2LcIQcYS0fiRgGZpH6Yrorvage8u5sHW5jd290ronPzHcjvaJUpw0Tfm%2BQlCAc3PSjPL84jjDeLPDjZ%2FfIs%2FWmSrG7g2eQzsWYANrkmvViU6vD0EVahuaiI1NyM8orHdMNCY6MAGOqUBi6X4dl59ggvpCgB10rG3NhPaS4r0hA8H7bTZAIyIsYJxyBwX%2BQTPiOEcyg7ycMUIdj7c2Smw3HQxFM6tyLWzWnKqAxy%2FAdmLAyjhspycjsycpMTRehbpnAurdSnxKq2Gm2E3dKjiPyxKBtqh3I3UqKul02Le61XwX85dtBlEgBL9vDAg%2Fs%2B56eUht5JSkYME8qPTpEAoCGFyOVGGez79H4IQ%2Fqb1&X-Amz-Signature=6640adb7c18abf9e237aa6432310e53be96744c31eab65f6ba9522d0b6f74666&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DOZZNEG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ7orrcLbxYrGreY3dOC74J%2BiovjlLzISc%2F6kX1QAlyQIgJh%2BYaOxpM4FB%2FRocrNrR1dKGt7YOlgVcJkEapSnL%2B%2Fcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJkB8T8PkmLHaLlAaircA1et46mcEjP%2FKsdCspiA7vfCnmGWHzI2UlagrGg%2BiEqMWwj6dPM8IA3eRF5WJddJQ3bN6ONdd1flz2ozyGWUtnGYjL8CCzik%2BMOddz1%2FA0Vykza2oHYesEmHknY%2BoDss04cjnsui%2Fer%2F%2FBUIJTR9onmc0ZCb1Y5ze7utUyQdKvy%2BpquGi8N8CBeKqAhVhbutVSCWP0M4YP%2FbK0x1Jn6FErNvzpgSjPbia8k7gKcUTja0fM8JhfTW2zi1Kg%2BVedVSIRn87uDnbnJeldEgGJV5cNml61e9WrV1thJ2zV%2FLOEr0tmP4ZsfxDDLP3wvASiCSdQ0zpCNsIcHX0CAI8N%2BoLoUWjX62y%2F1aZljwEvn2lean%2Bn%2FHARG8JawvrdCUMU0%2BHB1pQ3OWL%2FD%2BXPdjKqEzM9fHUYOJkEFU8qwXwHTIaT7Qt3bJRJVcUShzJ4%2FCqbfqgorLgG5%2Ffc88yD67AyC2LYOuAoKALDsjDxm8RvVre4t0zVJUtIEs3s3Ck8%2Fb2LcIQcYS0fiRgGZpH6Yrorvage8u5sHW5jd290ronPzHcjvaJUpw0Tfm%2BQlCAc3PSjPL84jjDeLPDjZ%2FfIs%2FWmSrG7g2eQzsWYANrkmvViU6vD0EVahuaiI1NyM8orHdMNCY6MAGOqUBi6X4dl59ggvpCgB10rG3NhPaS4r0hA8H7bTZAIyIsYJxyBwX%2BQTPiOEcyg7ycMUIdj7c2Smw3HQxFM6tyLWzWnKqAxy%2FAdmLAyjhspycjsycpMTRehbpnAurdSnxKq2Gm2E3dKjiPyxKBtqh3I3UqKul02Le61XwX85dtBlEgBL9vDAg%2Fs%2B56eUht5JSkYME8qPTpEAoCGFyOVGGez79H4IQ%2Fqb1&X-Amz-Signature=b6dfb69b6d1da207011e1758595ac16fef7b95b9d9dd18f24a8ab59170f06fa5&X-Amz-SignedHeaders=host&x-id=GetObject)
