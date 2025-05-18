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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZVYCUV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuQLnePpBkfLuN4zCp4AdQihRMDO8IkhBtXFWezTZhxAiEA7I0tkK%2FcF1kGPHzjv6T4lOWNEFr74OtsKr2Cci20bHYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAPn4%2FeE7Taxtwce%2ByrcAwHaEWYcyFLSFULz5ZLfV9jGpBZWkuD3Uo5auPmrcBEi0%2F1h4KhW1WITQrCEGpM9T%2B93VxrtBMrfgCvW8jwSXcwKhNG4U7nNuesa79K0kjGQnq04ss%2FgS1UXfqdMwoKyOAzez1szugc6aN7MjJUdPImDCTzPdeA8piKOZsXcvU52vXAoyG6yCFVYyaQLTN7bQkbBSELcFkuZG2dPhTk8l56NOmUTjB8MOYreXUhJtCumaht6qhYr6V4QYb9sg%2ByAbRCTQ%2BRuN4Tj05nw5tzvM59ZNA8yV0oPgtApnVK4unaVZXP2r12f7xk8%2BBj55%2F%2BkWHRvZO0XJdqN3CJ4c%2BCZUGv%2BmJoW7beve8Z%2FFJl2AeZ1qIQEwXvWXGOODENjkF6z5vHOng0Ul0cHgEX3Xz35OG5txoGH8A%2BPxsoIltyC3OhGfXCpkJGXkyZeF8xIOpdAHUp5%2B8%2FqV9N%2FfQK9st3IZaJcWj8ijvl5qyHD0gtNy6ukZR8pGhkj3onzsvrVPHMASDyYxKpkRti9njRMurlbw3fP4V5ffxCOhEc8hrwP36OAWhNDzUwhhk3L9JLIVC%2F31HpdpKwnnfveSJIEuGKBilP1PqL1yK1vlsxVLv9mFkkMTKkbU3bSi4nRhSd1MJzBpsEGOqUBdFDxpV1axSnZwkSqFXIHvkGi9%2BVoBCZo8bStjhtDSqbUSZTGpJQj1qwBCaDtBT3KRlFJ%2FOW5o6F6lofwaL2DIS79uWX91g2jlvADXELdJ0kwTMH%2FLAk6qK6TZgXrqF9y7E72qmmKkwBsK9KidAzcGg5XonFmMJ2ireGEhpNeIxGAM5j9iDCnGknWM48qTZ5JzKhaZVfnbBz04WrZqT3hcqeqk3n3&X-Amz-Signature=1adc9ad04a6f1ccdd5691887454c3a89dfa0aae796e506fdddbee0d6713314c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZVYCUV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuQLnePpBkfLuN4zCp4AdQihRMDO8IkhBtXFWezTZhxAiEA7I0tkK%2FcF1kGPHzjv6T4lOWNEFr74OtsKr2Cci20bHYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAPn4%2FeE7Taxtwce%2ByrcAwHaEWYcyFLSFULz5ZLfV9jGpBZWkuD3Uo5auPmrcBEi0%2F1h4KhW1WITQrCEGpM9T%2B93VxrtBMrfgCvW8jwSXcwKhNG4U7nNuesa79K0kjGQnq04ss%2FgS1UXfqdMwoKyOAzez1szugc6aN7MjJUdPImDCTzPdeA8piKOZsXcvU52vXAoyG6yCFVYyaQLTN7bQkbBSELcFkuZG2dPhTk8l56NOmUTjB8MOYreXUhJtCumaht6qhYr6V4QYb9sg%2ByAbRCTQ%2BRuN4Tj05nw5tzvM59ZNA8yV0oPgtApnVK4unaVZXP2r12f7xk8%2BBj55%2F%2BkWHRvZO0XJdqN3CJ4c%2BCZUGv%2BmJoW7beve8Z%2FFJl2AeZ1qIQEwXvWXGOODENjkF6z5vHOng0Ul0cHgEX3Xz35OG5txoGH8A%2BPxsoIltyC3OhGfXCpkJGXkyZeF8xIOpdAHUp5%2B8%2FqV9N%2FfQK9st3IZaJcWj8ijvl5qyHD0gtNy6ukZR8pGhkj3onzsvrVPHMASDyYxKpkRti9njRMurlbw3fP4V5ffxCOhEc8hrwP36OAWhNDzUwhhk3L9JLIVC%2F31HpdpKwnnfveSJIEuGKBilP1PqL1yK1vlsxVLv9mFkkMTKkbU3bSi4nRhSd1MJzBpsEGOqUBdFDxpV1axSnZwkSqFXIHvkGi9%2BVoBCZo8bStjhtDSqbUSZTGpJQj1qwBCaDtBT3KRlFJ%2FOW5o6F6lofwaL2DIS79uWX91g2jlvADXELdJ0kwTMH%2FLAk6qK6TZgXrqF9y7E72qmmKkwBsK9KidAzcGg5XonFmMJ2ireGEhpNeIxGAM5j9iDCnGknWM48qTZ5JzKhaZVfnbBz04WrZqT3hcqeqk3n3&X-Amz-Signature=abd920bdb0b4307369a9c5f1cba8298a6afb24c49fa3661bb231725183b8c217&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZVYCUV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuQLnePpBkfLuN4zCp4AdQihRMDO8IkhBtXFWezTZhxAiEA7I0tkK%2FcF1kGPHzjv6T4lOWNEFr74OtsKr2Cci20bHYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAPn4%2FeE7Taxtwce%2ByrcAwHaEWYcyFLSFULz5ZLfV9jGpBZWkuD3Uo5auPmrcBEi0%2F1h4KhW1WITQrCEGpM9T%2B93VxrtBMrfgCvW8jwSXcwKhNG4U7nNuesa79K0kjGQnq04ss%2FgS1UXfqdMwoKyOAzez1szugc6aN7MjJUdPImDCTzPdeA8piKOZsXcvU52vXAoyG6yCFVYyaQLTN7bQkbBSELcFkuZG2dPhTk8l56NOmUTjB8MOYreXUhJtCumaht6qhYr6V4QYb9sg%2ByAbRCTQ%2BRuN4Tj05nw5tzvM59ZNA8yV0oPgtApnVK4unaVZXP2r12f7xk8%2BBj55%2F%2BkWHRvZO0XJdqN3CJ4c%2BCZUGv%2BmJoW7beve8Z%2FFJl2AeZ1qIQEwXvWXGOODENjkF6z5vHOng0Ul0cHgEX3Xz35OG5txoGH8A%2BPxsoIltyC3OhGfXCpkJGXkyZeF8xIOpdAHUp5%2B8%2FqV9N%2FfQK9st3IZaJcWj8ijvl5qyHD0gtNy6ukZR8pGhkj3onzsvrVPHMASDyYxKpkRti9njRMurlbw3fP4V5ffxCOhEc8hrwP36OAWhNDzUwhhk3L9JLIVC%2F31HpdpKwnnfveSJIEuGKBilP1PqL1yK1vlsxVLv9mFkkMTKkbU3bSi4nRhSd1MJzBpsEGOqUBdFDxpV1axSnZwkSqFXIHvkGi9%2BVoBCZo8bStjhtDSqbUSZTGpJQj1qwBCaDtBT3KRlFJ%2FOW5o6F6lofwaL2DIS79uWX91g2jlvADXELdJ0kwTMH%2FLAk6qK6TZgXrqF9y7E72qmmKkwBsK9KidAzcGg5XonFmMJ2ireGEhpNeIxGAM5j9iDCnGknWM48qTZ5JzKhaZVfnbBz04WrZqT3hcqeqk3n3&X-Amz-Signature=764c2e035f9550db41bcefbeb119ce771dceebae1f2ee68e3b3ac2e021efd8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZVYCUV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuQLnePpBkfLuN4zCp4AdQihRMDO8IkhBtXFWezTZhxAiEA7I0tkK%2FcF1kGPHzjv6T4lOWNEFr74OtsKr2Cci20bHYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAPn4%2FeE7Taxtwce%2ByrcAwHaEWYcyFLSFULz5ZLfV9jGpBZWkuD3Uo5auPmrcBEi0%2F1h4KhW1WITQrCEGpM9T%2B93VxrtBMrfgCvW8jwSXcwKhNG4U7nNuesa79K0kjGQnq04ss%2FgS1UXfqdMwoKyOAzez1szugc6aN7MjJUdPImDCTzPdeA8piKOZsXcvU52vXAoyG6yCFVYyaQLTN7bQkbBSELcFkuZG2dPhTk8l56NOmUTjB8MOYreXUhJtCumaht6qhYr6V4QYb9sg%2ByAbRCTQ%2BRuN4Tj05nw5tzvM59ZNA8yV0oPgtApnVK4unaVZXP2r12f7xk8%2BBj55%2F%2BkWHRvZO0XJdqN3CJ4c%2BCZUGv%2BmJoW7beve8Z%2FFJl2AeZ1qIQEwXvWXGOODENjkF6z5vHOng0Ul0cHgEX3Xz35OG5txoGH8A%2BPxsoIltyC3OhGfXCpkJGXkyZeF8xIOpdAHUp5%2B8%2FqV9N%2FfQK9st3IZaJcWj8ijvl5qyHD0gtNy6ukZR8pGhkj3onzsvrVPHMASDyYxKpkRti9njRMurlbw3fP4V5ffxCOhEc8hrwP36OAWhNDzUwhhk3L9JLIVC%2F31HpdpKwnnfveSJIEuGKBilP1PqL1yK1vlsxVLv9mFkkMTKkbU3bSi4nRhSd1MJzBpsEGOqUBdFDxpV1axSnZwkSqFXIHvkGi9%2BVoBCZo8bStjhtDSqbUSZTGpJQj1qwBCaDtBT3KRlFJ%2FOW5o6F6lofwaL2DIS79uWX91g2jlvADXELdJ0kwTMH%2FLAk6qK6TZgXrqF9y7E72qmmKkwBsK9KidAzcGg5XonFmMJ2ireGEhpNeIxGAM5j9iDCnGknWM48qTZ5JzKhaZVfnbBz04WrZqT3hcqeqk3n3&X-Amz-Signature=8285a23ce5a2c8edf44d767b98c023965d026385fd5d68e761d0bf2ef7867456&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZVYCUV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuQLnePpBkfLuN4zCp4AdQihRMDO8IkhBtXFWezTZhxAiEA7I0tkK%2FcF1kGPHzjv6T4lOWNEFr74OtsKr2Cci20bHYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAPn4%2FeE7Taxtwce%2ByrcAwHaEWYcyFLSFULz5ZLfV9jGpBZWkuD3Uo5auPmrcBEi0%2F1h4KhW1WITQrCEGpM9T%2B93VxrtBMrfgCvW8jwSXcwKhNG4U7nNuesa79K0kjGQnq04ss%2FgS1UXfqdMwoKyOAzez1szugc6aN7MjJUdPImDCTzPdeA8piKOZsXcvU52vXAoyG6yCFVYyaQLTN7bQkbBSELcFkuZG2dPhTk8l56NOmUTjB8MOYreXUhJtCumaht6qhYr6V4QYb9sg%2ByAbRCTQ%2BRuN4Tj05nw5tzvM59ZNA8yV0oPgtApnVK4unaVZXP2r12f7xk8%2BBj55%2F%2BkWHRvZO0XJdqN3CJ4c%2BCZUGv%2BmJoW7beve8Z%2FFJl2AeZ1qIQEwXvWXGOODENjkF6z5vHOng0Ul0cHgEX3Xz35OG5txoGH8A%2BPxsoIltyC3OhGfXCpkJGXkyZeF8xIOpdAHUp5%2B8%2FqV9N%2FfQK9st3IZaJcWj8ijvl5qyHD0gtNy6ukZR8pGhkj3onzsvrVPHMASDyYxKpkRti9njRMurlbw3fP4V5ffxCOhEc8hrwP36OAWhNDzUwhhk3L9JLIVC%2F31HpdpKwnnfveSJIEuGKBilP1PqL1yK1vlsxVLv9mFkkMTKkbU3bSi4nRhSd1MJzBpsEGOqUBdFDxpV1axSnZwkSqFXIHvkGi9%2BVoBCZo8bStjhtDSqbUSZTGpJQj1qwBCaDtBT3KRlFJ%2FOW5o6F6lofwaL2DIS79uWX91g2jlvADXELdJ0kwTMH%2FLAk6qK6TZgXrqF9y7E72qmmKkwBsK9KidAzcGg5XonFmMJ2ireGEhpNeIxGAM5j9iDCnGknWM48qTZ5JzKhaZVfnbBz04WrZqT3hcqeqk3n3&X-Amz-Signature=229edf559881e1879737f88fa4679d4ef247533a08007291269b6e5631f1a447&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RZVYCUV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuQLnePpBkfLuN4zCp4AdQihRMDO8IkhBtXFWezTZhxAiEA7I0tkK%2FcF1kGPHzjv6T4lOWNEFr74OtsKr2Cci20bHYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAPn4%2FeE7Taxtwce%2ByrcAwHaEWYcyFLSFULz5ZLfV9jGpBZWkuD3Uo5auPmrcBEi0%2F1h4KhW1WITQrCEGpM9T%2B93VxrtBMrfgCvW8jwSXcwKhNG4U7nNuesa79K0kjGQnq04ss%2FgS1UXfqdMwoKyOAzez1szugc6aN7MjJUdPImDCTzPdeA8piKOZsXcvU52vXAoyG6yCFVYyaQLTN7bQkbBSELcFkuZG2dPhTk8l56NOmUTjB8MOYreXUhJtCumaht6qhYr6V4QYb9sg%2ByAbRCTQ%2BRuN4Tj05nw5tzvM59ZNA8yV0oPgtApnVK4unaVZXP2r12f7xk8%2BBj55%2F%2BkWHRvZO0XJdqN3CJ4c%2BCZUGv%2BmJoW7beve8Z%2FFJl2AeZ1qIQEwXvWXGOODENjkF6z5vHOng0Ul0cHgEX3Xz35OG5txoGH8A%2BPxsoIltyC3OhGfXCpkJGXkyZeF8xIOpdAHUp5%2B8%2FqV9N%2FfQK9st3IZaJcWj8ijvl5qyHD0gtNy6ukZR8pGhkj3onzsvrVPHMASDyYxKpkRti9njRMurlbw3fP4V5ffxCOhEc8hrwP36OAWhNDzUwhhk3L9JLIVC%2F31HpdpKwnnfveSJIEuGKBilP1PqL1yK1vlsxVLv9mFkkMTKkbU3bSi4nRhSd1MJzBpsEGOqUBdFDxpV1axSnZwkSqFXIHvkGi9%2BVoBCZo8bStjhtDSqbUSZTGpJQj1qwBCaDtBT3KRlFJ%2FOW5o6F6lofwaL2DIS79uWX91g2jlvADXELdJ0kwTMH%2FLAk6qK6TZgXrqF9y7E72qmmKkwBsK9KidAzcGg5XonFmMJ2ireGEhpNeIxGAM5j9iDCnGknWM48qTZ5JzKhaZVfnbBz04WrZqT3hcqeqk3n3&X-Amz-Signature=deb70f73c94ca2b1d80ccaf65884234a0c3f5fc41f68ad2cb2e709d7e3de4459&X-Amz-SignedHeaders=host&x-id=GetObject)
