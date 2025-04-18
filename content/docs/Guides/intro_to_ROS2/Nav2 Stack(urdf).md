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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DWZL6F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmRNmP8Z00LcnLLX8U6KJ8rEGV6mtHWW6MLwnMTfLU6AiAKzSoQ%2BC%2FaPEcYmt6nswoMdWjboLUMNWAO%2BZFF0eiARCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMOSspXXkdXDwV9JIQKtwDDDOAF1aF2xROKslOXEDLXXzX45Djze5ONIvBU8TBDEqMRJd5on02qlFmb8ecGYHrWY4%2Fng%2BXg3Dpxcl5vqyXwIIBBxjNy6dyj6%2F29khNKoWDHW4%2FiN%2BHAo9semZdnyIXEIdj7leN4EtmGWSR8DNCAC0gfCxFeJLPpQ%2FE0ncGoK2y47%2BSLkNszSCv5YQFasa4c6%2FLaHoMQ9VPLrXa43yj7AqfhmVHcQEulSM%2FoLU6p%2F0omJ1DpfyOy%2BH7lpeJYYfOjtqyFWK7UEXD8ElQFwmGrC7b24pV635XP2ln0QHpT8xVkqjoMVvGmtRBMvSc2JbcjPwOL2ABi4JZy3oe1c3Ld7iDOIoJyJduYGXBdTgEOFHpgPtfFOXi7TakQTziEFqO40slf9qKxVIzVCDuDdjQuzjHIHsOnPhtfcGTz7HWb%2FObPiQLQ4%2F6tQfjLZ5%2FWe%2FMoVudK5G8vwYlCWTVci61egdTg58ouZv%2Bgz%2BgYpFBlX4H4Gd7Rd2LxotuVLMVw6DQkaMxMJh%2BlGO8IFVjKGPk27OAmTSX90ZBmoLL4Nv5Pge2K4L%2BOc8bPXxcUieJGbmN7zuQDhYPZG7gjcv7zeGFHwFohfSTVGl54UKcLyxBZhUuJJYnCbMiGbN5tNQwycmKwAY6pgE4H3gjVaDOxYsF7MqWdbNTBpfc6f7SHnpV3rtsZgdDefa5hBxyj0vPhVrzkFEdppQYqakqxplKeJOoI9Al6V5dQqF5BhON6jXLwZvnIOlp4qLvljpftQ%2F4DiifxmIaR%2Fw5tPlEhx2aL1k9m5x0U8ENmpseDV7Vq1oTm8jjTLDs0o30wtAaC%2BYzhbtnIQefdh0m55KauGhFTMXZNpv335ief5Kht4IL&X-Amz-Signature=370abbb80644343193a8d2e3894233a83c4f693c234c3dfc8c2a1554d119e758&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DWZL6F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmRNmP8Z00LcnLLX8U6KJ8rEGV6mtHWW6MLwnMTfLU6AiAKzSoQ%2BC%2FaPEcYmt6nswoMdWjboLUMNWAO%2BZFF0eiARCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMOSspXXkdXDwV9JIQKtwDDDOAF1aF2xROKslOXEDLXXzX45Djze5ONIvBU8TBDEqMRJd5on02qlFmb8ecGYHrWY4%2Fng%2BXg3Dpxcl5vqyXwIIBBxjNy6dyj6%2F29khNKoWDHW4%2FiN%2BHAo9semZdnyIXEIdj7leN4EtmGWSR8DNCAC0gfCxFeJLPpQ%2FE0ncGoK2y47%2BSLkNszSCv5YQFasa4c6%2FLaHoMQ9VPLrXa43yj7AqfhmVHcQEulSM%2FoLU6p%2F0omJ1DpfyOy%2BH7lpeJYYfOjtqyFWK7UEXD8ElQFwmGrC7b24pV635XP2ln0QHpT8xVkqjoMVvGmtRBMvSc2JbcjPwOL2ABi4JZy3oe1c3Ld7iDOIoJyJduYGXBdTgEOFHpgPtfFOXi7TakQTziEFqO40slf9qKxVIzVCDuDdjQuzjHIHsOnPhtfcGTz7HWb%2FObPiQLQ4%2F6tQfjLZ5%2FWe%2FMoVudK5G8vwYlCWTVci61egdTg58ouZv%2Bgz%2BgYpFBlX4H4Gd7Rd2LxotuVLMVw6DQkaMxMJh%2BlGO8IFVjKGPk27OAmTSX90ZBmoLL4Nv5Pge2K4L%2BOc8bPXxcUieJGbmN7zuQDhYPZG7gjcv7zeGFHwFohfSTVGl54UKcLyxBZhUuJJYnCbMiGbN5tNQwycmKwAY6pgE4H3gjVaDOxYsF7MqWdbNTBpfc6f7SHnpV3rtsZgdDefa5hBxyj0vPhVrzkFEdppQYqakqxplKeJOoI9Al6V5dQqF5BhON6jXLwZvnIOlp4qLvljpftQ%2F4DiifxmIaR%2Fw5tPlEhx2aL1k9m5x0U8ENmpseDV7Vq1oTm8jjTLDs0o30wtAaC%2BYzhbtnIQefdh0m55KauGhFTMXZNpv335ief5Kht4IL&X-Amz-Signature=cef9af0d208e268567074ca548b88e1c7eb37e2646b24eb1899639b22b888add&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DWZL6F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmRNmP8Z00LcnLLX8U6KJ8rEGV6mtHWW6MLwnMTfLU6AiAKzSoQ%2BC%2FaPEcYmt6nswoMdWjboLUMNWAO%2BZFF0eiARCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMOSspXXkdXDwV9JIQKtwDDDOAF1aF2xROKslOXEDLXXzX45Djze5ONIvBU8TBDEqMRJd5on02qlFmb8ecGYHrWY4%2Fng%2BXg3Dpxcl5vqyXwIIBBxjNy6dyj6%2F29khNKoWDHW4%2FiN%2BHAo9semZdnyIXEIdj7leN4EtmGWSR8DNCAC0gfCxFeJLPpQ%2FE0ncGoK2y47%2BSLkNszSCv5YQFasa4c6%2FLaHoMQ9VPLrXa43yj7AqfhmVHcQEulSM%2FoLU6p%2F0omJ1DpfyOy%2BH7lpeJYYfOjtqyFWK7UEXD8ElQFwmGrC7b24pV635XP2ln0QHpT8xVkqjoMVvGmtRBMvSc2JbcjPwOL2ABi4JZy3oe1c3Ld7iDOIoJyJduYGXBdTgEOFHpgPtfFOXi7TakQTziEFqO40slf9qKxVIzVCDuDdjQuzjHIHsOnPhtfcGTz7HWb%2FObPiQLQ4%2F6tQfjLZ5%2FWe%2FMoVudK5G8vwYlCWTVci61egdTg58ouZv%2Bgz%2BgYpFBlX4H4Gd7Rd2LxotuVLMVw6DQkaMxMJh%2BlGO8IFVjKGPk27OAmTSX90ZBmoLL4Nv5Pge2K4L%2BOc8bPXxcUieJGbmN7zuQDhYPZG7gjcv7zeGFHwFohfSTVGl54UKcLyxBZhUuJJYnCbMiGbN5tNQwycmKwAY6pgE4H3gjVaDOxYsF7MqWdbNTBpfc6f7SHnpV3rtsZgdDefa5hBxyj0vPhVrzkFEdppQYqakqxplKeJOoI9Al6V5dQqF5BhON6jXLwZvnIOlp4qLvljpftQ%2F4DiifxmIaR%2Fw5tPlEhx2aL1k9m5x0U8ENmpseDV7Vq1oTm8jjTLDs0o30wtAaC%2BYzhbtnIQefdh0m55KauGhFTMXZNpv335ief5Kht4IL&X-Amz-Signature=87842c53c311be6f77b3c8a8e7b41dc52df947211d98e5da202bab605be28044&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DWZL6F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmRNmP8Z00LcnLLX8U6KJ8rEGV6mtHWW6MLwnMTfLU6AiAKzSoQ%2BC%2FaPEcYmt6nswoMdWjboLUMNWAO%2BZFF0eiARCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMOSspXXkdXDwV9JIQKtwDDDOAF1aF2xROKslOXEDLXXzX45Djze5ONIvBU8TBDEqMRJd5on02qlFmb8ecGYHrWY4%2Fng%2BXg3Dpxcl5vqyXwIIBBxjNy6dyj6%2F29khNKoWDHW4%2FiN%2BHAo9semZdnyIXEIdj7leN4EtmGWSR8DNCAC0gfCxFeJLPpQ%2FE0ncGoK2y47%2BSLkNszSCv5YQFasa4c6%2FLaHoMQ9VPLrXa43yj7AqfhmVHcQEulSM%2FoLU6p%2F0omJ1DpfyOy%2BH7lpeJYYfOjtqyFWK7UEXD8ElQFwmGrC7b24pV635XP2ln0QHpT8xVkqjoMVvGmtRBMvSc2JbcjPwOL2ABi4JZy3oe1c3Ld7iDOIoJyJduYGXBdTgEOFHpgPtfFOXi7TakQTziEFqO40slf9qKxVIzVCDuDdjQuzjHIHsOnPhtfcGTz7HWb%2FObPiQLQ4%2F6tQfjLZ5%2FWe%2FMoVudK5G8vwYlCWTVci61egdTg58ouZv%2Bgz%2BgYpFBlX4H4Gd7Rd2LxotuVLMVw6DQkaMxMJh%2BlGO8IFVjKGPk27OAmTSX90ZBmoLL4Nv5Pge2K4L%2BOc8bPXxcUieJGbmN7zuQDhYPZG7gjcv7zeGFHwFohfSTVGl54UKcLyxBZhUuJJYnCbMiGbN5tNQwycmKwAY6pgE4H3gjVaDOxYsF7MqWdbNTBpfc6f7SHnpV3rtsZgdDefa5hBxyj0vPhVrzkFEdppQYqakqxplKeJOoI9Al6V5dQqF5BhON6jXLwZvnIOlp4qLvljpftQ%2F4DiifxmIaR%2Fw5tPlEhx2aL1k9m5x0U8ENmpseDV7Vq1oTm8jjTLDs0o30wtAaC%2BYzhbtnIQefdh0m55KauGhFTMXZNpv335ief5Kht4IL&X-Amz-Signature=2e9c8e80a2428a1fbc338a4c690b87835c83ac58a2c13363aeadaee67e82a2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DWZL6F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmRNmP8Z00LcnLLX8U6KJ8rEGV6mtHWW6MLwnMTfLU6AiAKzSoQ%2BC%2FaPEcYmt6nswoMdWjboLUMNWAO%2BZFF0eiARCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMOSspXXkdXDwV9JIQKtwDDDOAF1aF2xROKslOXEDLXXzX45Djze5ONIvBU8TBDEqMRJd5on02qlFmb8ecGYHrWY4%2Fng%2BXg3Dpxcl5vqyXwIIBBxjNy6dyj6%2F29khNKoWDHW4%2FiN%2BHAo9semZdnyIXEIdj7leN4EtmGWSR8DNCAC0gfCxFeJLPpQ%2FE0ncGoK2y47%2BSLkNszSCv5YQFasa4c6%2FLaHoMQ9VPLrXa43yj7AqfhmVHcQEulSM%2FoLU6p%2F0omJ1DpfyOy%2BH7lpeJYYfOjtqyFWK7UEXD8ElQFwmGrC7b24pV635XP2ln0QHpT8xVkqjoMVvGmtRBMvSc2JbcjPwOL2ABi4JZy3oe1c3Ld7iDOIoJyJduYGXBdTgEOFHpgPtfFOXi7TakQTziEFqO40slf9qKxVIzVCDuDdjQuzjHIHsOnPhtfcGTz7HWb%2FObPiQLQ4%2F6tQfjLZ5%2FWe%2FMoVudK5G8vwYlCWTVci61egdTg58ouZv%2Bgz%2BgYpFBlX4H4Gd7Rd2LxotuVLMVw6DQkaMxMJh%2BlGO8IFVjKGPk27OAmTSX90ZBmoLL4Nv5Pge2K4L%2BOc8bPXxcUieJGbmN7zuQDhYPZG7gjcv7zeGFHwFohfSTVGl54UKcLyxBZhUuJJYnCbMiGbN5tNQwycmKwAY6pgE4H3gjVaDOxYsF7MqWdbNTBpfc6f7SHnpV3rtsZgdDefa5hBxyj0vPhVrzkFEdppQYqakqxplKeJOoI9Al6V5dQqF5BhON6jXLwZvnIOlp4qLvljpftQ%2F4DiifxmIaR%2Fw5tPlEhx2aL1k9m5x0U8ENmpseDV7Vq1oTm8jjTLDs0o30wtAaC%2BYzhbtnIQefdh0m55KauGhFTMXZNpv335ief5Kht4IL&X-Amz-Signature=46009583c28ad743bec5ce14db511fe6b4224d9a13d77442028f40b5b1faec25&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DWZL6F%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmRNmP8Z00LcnLLX8U6KJ8rEGV6mtHWW6MLwnMTfLU6AiAKzSoQ%2BC%2FaPEcYmt6nswoMdWjboLUMNWAO%2BZFF0eiARCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMOSspXXkdXDwV9JIQKtwDDDOAF1aF2xROKslOXEDLXXzX45Djze5ONIvBU8TBDEqMRJd5on02qlFmb8ecGYHrWY4%2Fng%2BXg3Dpxcl5vqyXwIIBBxjNy6dyj6%2F29khNKoWDHW4%2FiN%2BHAo9semZdnyIXEIdj7leN4EtmGWSR8DNCAC0gfCxFeJLPpQ%2FE0ncGoK2y47%2BSLkNszSCv5YQFasa4c6%2FLaHoMQ9VPLrXa43yj7AqfhmVHcQEulSM%2FoLU6p%2F0omJ1DpfyOy%2BH7lpeJYYfOjtqyFWK7UEXD8ElQFwmGrC7b24pV635XP2ln0QHpT8xVkqjoMVvGmtRBMvSc2JbcjPwOL2ABi4JZy3oe1c3Ld7iDOIoJyJduYGXBdTgEOFHpgPtfFOXi7TakQTziEFqO40slf9qKxVIzVCDuDdjQuzjHIHsOnPhtfcGTz7HWb%2FObPiQLQ4%2F6tQfjLZ5%2FWe%2FMoVudK5G8vwYlCWTVci61egdTg58ouZv%2Bgz%2BgYpFBlX4H4Gd7Rd2LxotuVLMVw6DQkaMxMJh%2BlGO8IFVjKGPk27OAmTSX90ZBmoLL4Nv5Pge2K4L%2BOc8bPXxcUieJGbmN7zuQDhYPZG7gjcv7zeGFHwFohfSTVGl54UKcLyxBZhUuJJYnCbMiGbN5tNQwycmKwAY6pgE4H3gjVaDOxYsF7MqWdbNTBpfc6f7SHnpV3rtsZgdDefa5hBxyj0vPhVrzkFEdppQYqakqxplKeJOoI9Al6V5dQqF5BhON6jXLwZvnIOlp4qLvljpftQ%2F4DiifxmIaR%2Fw5tPlEhx2aL1k9m5x0U8ENmpseDV7Vq1oTm8jjTLDs0o30wtAaC%2BYzhbtnIQefdh0m55KauGhFTMXZNpv335ief5Kht4IL&X-Amz-Signature=2771fed55a2fe0db4e43cec3f1521f12d4fa49b370a1287281e1196987abc6d3&X-Amz-SignedHeaders=host&x-id=GetObject)
