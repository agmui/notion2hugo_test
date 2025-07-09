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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBAVPVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYJ1QPeKaQcCus8PSuuo40cI7WKWmpoqcH3vogMcFhyAiEArNRC94vzHaO2kLlDTWYvnTVLq3vhl5HzTCQ7hSF%2BurIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPrHwjKiW9jOFanHyrcA1UDwrK%2BteFRr31rWsoAu58ifDXBwFXX8H%2BrBdGhxnM7%2FbkLo2CVBeydmXYrgZcQcCTymKdx4rYu%2BooyOjjavhAOlfZtfSNcTmVAp9bmvgR8T%2FH4rQtKydP0b8%2F5fBoeAfNdqBVWgT8LhmNVT1oqUM3pCs7qonGgk6IWOSF6ricIy%2B6%2FuZPaqhSKUpkHHKL%2F9HUh5DAfFV4XoOsfB%2F7cWX6dUO1WvIAksnYlOp3CJbbkuqMk9Akod2Ocmzt%2FF8VgcGoYfLyFncs1QfszGmoYf9TFmySplu4vL2lIKE0Ty14FrfVSECk5EvmY1%2BHFs0KzaTm5sFK55nygD21YLh6wHZUqUUxHXCeMgJDE%2BS6Ulyy2RWfKQj2bPPHlt6lZ5DaLqWdVYc6TQafXfh3%2F%2FwuEFLoToEc1R92YHlZj5ZALvf1ZLa7cdMiuKYsoqGU5AOBcwC1ePRJqFteAEm4282D%2B%2BtCD2kpy7r%2BOcjQXGTDvjpbE44rBKErrYUwSHgU5%2FGjWyLCEJrgTOB0k9OQDkkHHZ8%2BYqgrCxjygtu5SOfBGHTXs6lrl2LUiMIS8QN%2BBSxPg5Q%2FEIVN%2BrBj6QhZ72dP%2BsGNNZMhLJe%2FVms5%2BhpOQyGY02O7Jmz%2BVsxfNw9BeMIfvusMGOqUBgsuEuG3EzSqzuIanL70A5yBm%2FABGIwPHwZ88JyawaNoCtBrsFq60rrWZf1ZljvTxp2yfz8slBDk3xJ6OCDrNuR0RRACzBw7mBoHpNKbEF4gky8IjO4bWF%2BsVVxW%2F2b3vYJR5PjOUaFTvAu5ioasd70v810Xf1LkDwK0vjdwxuvUFMnhqv%2B2LjgeTYz7zmYx6BxelWbhnWNBiSwzh0x9he%2BJU4CBG&X-Amz-Signature=2a8443ce630ca6551009b8d9d54836c862a7e6d1a8b4207c0ef048b0cfe1cd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBAVPVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYJ1QPeKaQcCus8PSuuo40cI7WKWmpoqcH3vogMcFhyAiEArNRC94vzHaO2kLlDTWYvnTVLq3vhl5HzTCQ7hSF%2BurIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPrHwjKiW9jOFanHyrcA1UDwrK%2BteFRr31rWsoAu58ifDXBwFXX8H%2BrBdGhxnM7%2FbkLo2CVBeydmXYrgZcQcCTymKdx4rYu%2BooyOjjavhAOlfZtfSNcTmVAp9bmvgR8T%2FH4rQtKydP0b8%2F5fBoeAfNdqBVWgT8LhmNVT1oqUM3pCs7qonGgk6IWOSF6ricIy%2B6%2FuZPaqhSKUpkHHKL%2F9HUh5DAfFV4XoOsfB%2F7cWX6dUO1WvIAksnYlOp3CJbbkuqMk9Akod2Ocmzt%2FF8VgcGoYfLyFncs1QfszGmoYf9TFmySplu4vL2lIKE0Ty14FrfVSECk5EvmY1%2BHFs0KzaTm5sFK55nygD21YLh6wHZUqUUxHXCeMgJDE%2BS6Ulyy2RWfKQj2bPPHlt6lZ5DaLqWdVYc6TQafXfh3%2F%2FwuEFLoToEc1R92YHlZj5ZALvf1ZLa7cdMiuKYsoqGU5AOBcwC1ePRJqFteAEm4282D%2B%2BtCD2kpy7r%2BOcjQXGTDvjpbE44rBKErrYUwSHgU5%2FGjWyLCEJrgTOB0k9OQDkkHHZ8%2BYqgrCxjygtu5SOfBGHTXs6lrl2LUiMIS8QN%2BBSxPg5Q%2FEIVN%2BrBj6QhZ72dP%2BsGNNZMhLJe%2FVms5%2BhpOQyGY02O7Jmz%2BVsxfNw9BeMIfvusMGOqUBgsuEuG3EzSqzuIanL70A5yBm%2FABGIwPHwZ88JyawaNoCtBrsFq60rrWZf1ZljvTxp2yfz8slBDk3xJ6OCDrNuR0RRACzBw7mBoHpNKbEF4gky8IjO4bWF%2BsVVxW%2F2b3vYJR5PjOUaFTvAu5ioasd70v810Xf1LkDwK0vjdwxuvUFMnhqv%2B2LjgeTYz7zmYx6BxelWbhnWNBiSwzh0x9he%2BJU4CBG&X-Amz-Signature=558b0ebc7ee842c9ae5088093eec6eec6eb3c7fabeb30114d30d7ea8f3c8f51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBAVPVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYJ1QPeKaQcCus8PSuuo40cI7WKWmpoqcH3vogMcFhyAiEArNRC94vzHaO2kLlDTWYvnTVLq3vhl5HzTCQ7hSF%2BurIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPrHwjKiW9jOFanHyrcA1UDwrK%2BteFRr31rWsoAu58ifDXBwFXX8H%2BrBdGhxnM7%2FbkLo2CVBeydmXYrgZcQcCTymKdx4rYu%2BooyOjjavhAOlfZtfSNcTmVAp9bmvgR8T%2FH4rQtKydP0b8%2F5fBoeAfNdqBVWgT8LhmNVT1oqUM3pCs7qonGgk6IWOSF6ricIy%2B6%2FuZPaqhSKUpkHHKL%2F9HUh5DAfFV4XoOsfB%2F7cWX6dUO1WvIAksnYlOp3CJbbkuqMk9Akod2Ocmzt%2FF8VgcGoYfLyFncs1QfszGmoYf9TFmySplu4vL2lIKE0Ty14FrfVSECk5EvmY1%2BHFs0KzaTm5sFK55nygD21YLh6wHZUqUUxHXCeMgJDE%2BS6Ulyy2RWfKQj2bPPHlt6lZ5DaLqWdVYc6TQafXfh3%2F%2FwuEFLoToEc1R92YHlZj5ZALvf1ZLa7cdMiuKYsoqGU5AOBcwC1ePRJqFteAEm4282D%2B%2BtCD2kpy7r%2BOcjQXGTDvjpbE44rBKErrYUwSHgU5%2FGjWyLCEJrgTOB0k9OQDkkHHZ8%2BYqgrCxjygtu5SOfBGHTXs6lrl2LUiMIS8QN%2BBSxPg5Q%2FEIVN%2BrBj6QhZ72dP%2BsGNNZMhLJe%2FVms5%2BhpOQyGY02O7Jmz%2BVsxfNw9BeMIfvusMGOqUBgsuEuG3EzSqzuIanL70A5yBm%2FABGIwPHwZ88JyawaNoCtBrsFq60rrWZf1ZljvTxp2yfz8slBDk3xJ6OCDrNuR0RRACzBw7mBoHpNKbEF4gky8IjO4bWF%2BsVVxW%2F2b3vYJR5PjOUaFTvAu5ioasd70v810Xf1LkDwK0vjdwxuvUFMnhqv%2B2LjgeTYz7zmYx6BxelWbhnWNBiSwzh0x9he%2BJU4CBG&X-Amz-Signature=6b0bdac873ad760f69fae61795aa0fcba774f6615c12bc9b8a52b76f631e28ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBAVPVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYJ1QPeKaQcCus8PSuuo40cI7WKWmpoqcH3vogMcFhyAiEArNRC94vzHaO2kLlDTWYvnTVLq3vhl5HzTCQ7hSF%2BurIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPrHwjKiW9jOFanHyrcA1UDwrK%2BteFRr31rWsoAu58ifDXBwFXX8H%2BrBdGhxnM7%2FbkLo2CVBeydmXYrgZcQcCTymKdx4rYu%2BooyOjjavhAOlfZtfSNcTmVAp9bmvgR8T%2FH4rQtKydP0b8%2F5fBoeAfNdqBVWgT8LhmNVT1oqUM3pCs7qonGgk6IWOSF6ricIy%2B6%2FuZPaqhSKUpkHHKL%2F9HUh5DAfFV4XoOsfB%2F7cWX6dUO1WvIAksnYlOp3CJbbkuqMk9Akod2Ocmzt%2FF8VgcGoYfLyFncs1QfszGmoYf9TFmySplu4vL2lIKE0Ty14FrfVSECk5EvmY1%2BHFs0KzaTm5sFK55nygD21YLh6wHZUqUUxHXCeMgJDE%2BS6Ulyy2RWfKQj2bPPHlt6lZ5DaLqWdVYc6TQafXfh3%2F%2FwuEFLoToEc1R92YHlZj5ZALvf1ZLa7cdMiuKYsoqGU5AOBcwC1ePRJqFteAEm4282D%2B%2BtCD2kpy7r%2BOcjQXGTDvjpbE44rBKErrYUwSHgU5%2FGjWyLCEJrgTOB0k9OQDkkHHZ8%2BYqgrCxjygtu5SOfBGHTXs6lrl2LUiMIS8QN%2BBSxPg5Q%2FEIVN%2BrBj6QhZ72dP%2BsGNNZMhLJe%2FVms5%2BhpOQyGY02O7Jmz%2BVsxfNw9BeMIfvusMGOqUBgsuEuG3EzSqzuIanL70A5yBm%2FABGIwPHwZ88JyawaNoCtBrsFq60rrWZf1ZljvTxp2yfz8slBDk3xJ6OCDrNuR0RRACzBw7mBoHpNKbEF4gky8IjO4bWF%2BsVVxW%2F2b3vYJR5PjOUaFTvAu5ioasd70v810Xf1LkDwK0vjdwxuvUFMnhqv%2B2LjgeTYz7zmYx6BxelWbhnWNBiSwzh0x9he%2BJU4CBG&X-Amz-Signature=7310ac8168a567d4e1fd502f09e7f3a65e529cd9584f30e147748ba6805a2b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBAVPVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYJ1QPeKaQcCus8PSuuo40cI7WKWmpoqcH3vogMcFhyAiEArNRC94vzHaO2kLlDTWYvnTVLq3vhl5HzTCQ7hSF%2BurIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPrHwjKiW9jOFanHyrcA1UDwrK%2BteFRr31rWsoAu58ifDXBwFXX8H%2BrBdGhxnM7%2FbkLo2CVBeydmXYrgZcQcCTymKdx4rYu%2BooyOjjavhAOlfZtfSNcTmVAp9bmvgR8T%2FH4rQtKydP0b8%2F5fBoeAfNdqBVWgT8LhmNVT1oqUM3pCs7qonGgk6IWOSF6ricIy%2B6%2FuZPaqhSKUpkHHKL%2F9HUh5DAfFV4XoOsfB%2F7cWX6dUO1WvIAksnYlOp3CJbbkuqMk9Akod2Ocmzt%2FF8VgcGoYfLyFncs1QfszGmoYf9TFmySplu4vL2lIKE0Ty14FrfVSECk5EvmY1%2BHFs0KzaTm5sFK55nygD21YLh6wHZUqUUxHXCeMgJDE%2BS6Ulyy2RWfKQj2bPPHlt6lZ5DaLqWdVYc6TQafXfh3%2F%2FwuEFLoToEc1R92YHlZj5ZALvf1ZLa7cdMiuKYsoqGU5AOBcwC1ePRJqFteAEm4282D%2B%2BtCD2kpy7r%2BOcjQXGTDvjpbE44rBKErrYUwSHgU5%2FGjWyLCEJrgTOB0k9OQDkkHHZ8%2BYqgrCxjygtu5SOfBGHTXs6lrl2LUiMIS8QN%2BBSxPg5Q%2FEIVN%2BrBj6QhZ72dP%2BsGNNZMhLJe%2FVms5%2BhpOQyGY02O7Jmz%2BVsxfNw9BeMIfvusMGOqUBgsuEuG3EzSqzuIanL70A5yBm%2FABGIwPHwZ88JyawaNoCtBrsFq60rrWZf1ZljvTxp2yfz8slBDk3xJ6OCDrNuR0RRACzBw7mBoHpNKbEF4gky8IjO4bWF%2BsVVxW%2F2b3vYJR5PjOUaFTvAu5ioasd70v810Xf1LkDwK0vjdwxuvUFMnhqv%2B2LjgeTYz7zmYx6BxelWbhnWNBiSwzh0x9he%2BJU4CBG&X-Amz-Signature=5fe467616b7f327651030a3654e93d517ff9276296842c952341e52184b6ee69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBAVPVW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYJ1QPeKaQcCus8PSuuo40cI7WKWmpoqcH3vogMcFhyAiEArNRC94vzHaO2kLlDTWYvnTVLq3vhl5HzTCQ7hSF%2BurIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPrHwjKiW9jOFanHyrcA1UDwrK%2BteFRr31rWsoAu58ifDXBwFXX8H%2BrBdGhxnM7%2FbkLo2CVBeydmXYrgZcQcCTymKdx4rYu%2BooyOjjavhAOlfZtfSNcTmVAp9bmvgR8T%2FH4rQtKydP0b8%2F5fBoeAfNdqBVWgT8LhmNVT1oqUM3pCs7qonGgk6IWOSF6ricIy%2B6%2FuZPaqhSKUpkHHKL%2F9HUh5DAfFV4XoOsfB%2F7cWX6dUO1WvIAksnYlOp3CJbbkuqMk9Akod2Ocmzt%2FF8VgcGoYfLyFncs1QfszGmoYf9TFmySplu4vL2lIKE0Ty14FrfVSECk5EvmY1%2BHFs0KzaTm5sFK55nygD21YLh6wHZUqUUxHXCeMgJDE%2BS6Ulyy2RWfKQj2bPPHlt6lZ5DaLqWdVYc6TQafXfh3%2F%2FwuEFLoToEc1R92YHlZj5ZALvf1ZLa7cdMiuKYsoqGU5AOBcwC1ePRJqFteAEm4282D%2B%2BtCD2kpy7r%2BOcjQXGTDvjpbE44rBKErrYUwSHgU5%2FGjWyLCEJrgTOB0k9OQDkkHHZ8%2BYqgrCxjygtu5SOfBGHTXs6lrl2LUiMIS8QN%2BBSxPg5Q%2FEIVN%2BrBj6QhZ72dP%2BsGNNZMhLJe%2FVms5%2BhpOQyGY02O7Jmz%2BVsxfNw9BeMIfvusMGOqUBgsuEuG3EzSqzuIanL70A5yBm%2FABGIwPHwZ88JyawaNoCtBrsFq60rrWZf1ZljvTxp2yfz8slBDk3xJ6OCDrNuR0RRACzBw7mBoHpNKbEF4gky8IjO4bWF%2BsVVxW%2F2b3vYJR5PjOUaFTvAu5ioasd70v810Xf1LkDwK0vjdwxuvUFMnhqv%2B2LjgeTYz7zmYx6BxelWbhnWNBiSwzh0x9he%2BJU4CBG&X-Amz-Signature=9edad7e5b4539b5cefd239c4c4cd441e94bacdfb0e1ba66c6e83b9b72e7a0dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
