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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJ4OELW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaMdD8%2F1t9wO3N02VotsCl6hFQjiYITdwasBi2YGpwhAiEA3O%2Bc933WrMSWQUlOzJWhshrLBnN8in8TJP73opCGJoIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFf3Kgm2rf8t0NRhGCrcAytajmB3%2Ba%2FF4wY1THKwgWvV5f%2B2BuZSe7mkTKRW35Ad7DQlfPnw0HxeTWqKNvuHdby2ZXqCzj54sB%2FbXJHdSUPj%2F0K8WzXuacV6OoeNH5q88pV1%2F1%2Fr2oNYVI0ngGVPhiwbullWKPjR51jYV5ifZAEz2A%2BpIW0pJSD341M1cnfMtyK7%2BCT9lkt5nYo4AeMBwW8WgzrXmKEqPSxE%2FB0PlK783Qn6fC%2BhIn%2B3Oj%2FMmo8HSRrkH2I3N5wmUQRcxF%2BH%2FhHDJdqccMbX08mJ%2BVbn0XgZaFsS%2B1%2FgdR1b05puLCMDi6PaSGmzGiqyagXw2YT00dgc4Pf9G%2BRycnDeaaXZLEfLaRDPxHmYoQPPI7XLVOq5R%2FuWvybF%2FFvkQ7VpLGC75HzTZJ43rGcZ0UtCyjM%2BSxzqTvqaq8btitDGBazvaeQpZgPhNOzsM53phhMqbiPzgRwu5d1YRk8I8zgw5O2IW276RXwIeQo76FTz32z1aVgWmI7IgO3lCOWwhnfAR0Z1n1sCK%2FeXqauNP3gGw3CzlpJ7eEEqJzoyHACUEMXszJqWAVsaqMzBfjJtR%2Fen1vuomcnAy9J4tG1lOktvU5p%2FMLenhZ2gdWUeZ9JrdXUj8LQNh%2F8jzl3aTztCzopfMIOp8MAGOqUBZhmlfIJh%2BvNPOUwihPDDg7gLLlUTrK7eZMaFr%2B2peW6Gpt6Uv30Ucy0B99mXHREy1oNSaiYm%2B%2FiIkOsu%2FgSMNB2gw%2Bj1epsD7N3qTywYm%2FpB%2FbUxCK0aZwuIoF0gIEqUkpOhbAqOYzaHf4VjE8xY593AcMiwZJZPN3UvFXqPKyGINXrpOCFb33YYIPu8b4kPoy3ZtcNOD4ig3edm1%2Fnzd2b0ksAJ&X-Amz-Signature=2be2cef5918cd9100351fe4a7ae17dedcbb8a24a63ac3f04ba4b4b2d73d12ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJ4OELW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaMdD8%2F1t9wO3N02VotsCl6hFQjiYITdwasBi2YGpwhAiEA3O%2Bc933WrMSWQUlOzJWhshrLBnN8in8TJP73opCGJoIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFf3Kgm2rf8t0NRhGCrcAytajmB3%2Ba%2FF4wY1THKwgWvV5f%2B2BuZSe7mkTKRW35Ad7DQlfPnw0HxeTWqKNvuHdby2ZXqCzj54sB%2FbXJHdSUPj%2F0K8WzXuacV6OoeNH5q88pV1%2F1%2Fr2oNYVI0ngGVPhiwbullWKPjR51jYV5ifZAEz2A%2BpIW0pJSD341M1cnfMtyK7%2BCT9lkt5nYo4AeMBwW8WgzrXmKEqPSxE%2FB0PlK783Qn6fC%2BhIn%2B3Oj%2FMmo8HSRrkH2I3N5wmUQRcxF%2BH%2FhHDJdqccMbX08mJ%2BVbn0XgZaFsS%2B1%2FgdR1b05puLCMDi6PaSGmzGiqyagXw2YT00dgc4Pf9G%2BRycnDeaaXZLEfLaRDPxHmYoQPPI7XLVOq5R%2FuWvybF%2FFvkQ7VpLGC75HzTZJ43rGcZ0UtCyjM%2BSxzqTvqaq8btitDGBazvaeQpZgPhNOzsM53phhMqbiPzgRwu5d1YRk8I8zgw5O2IW276RXwIeQo76FTz32z1aVgWmI7IgO3lCOWwhnfAR0Z1n1sCK%2FeXqauNP3gGw3CzlpJ7eEEqJzoyHACUEMXszJqWAVsaqMzBfjJtR%2Fen1vuomcnAy9J4tG1lOktvU5p%2FMLenhZ2gdWUeZ9JrdXUj8LQNh%2F8jzl3aTztCzopfMIOp8MAGOqUBZhmlfIJh%2BvNPOUwihPDDg7gLLlUTrK7eZMaFr%2B2peW6Gpt6Uv30Ucy0B99mXHREy1oNSaiYm%2B%2FiIkOsu%2FgSMNB2gw%2Bj1epsD7N3qTywYm%2FpB%2FbUxCK0aZwuIoF0gIEqUkpOhbAqOYzaHf4VjE8xY593AcMiwZJZPN3UvFXqPKyGINXrpOCFb33YYIPu8b4kPoy3ZtcNOD4ig3edm1%2Fnzd2b0ksAJ&X-Amz-Signature=47613780e84c2aed1cd746d1bde3095c7371803f6b3298132427f2f34523c7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJ4OELW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaMdD8%2F1t9wO3N02VotsCl6hFQjiYITdwasBi2YGpwhAiEA3O%2Bc933WrMSWQUlOzJWhshrLBnN8in8TJP73opCGJoIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFf3Kgm2rf8t0NRhGCrcAytajmB3%2Ba%2FF4wY1THKwgWvV5f%2B2BuZSe7mkTKRW35Ad7DQlfPnw0HxeTWqKNvuHdby2ZXqCzj54sB%2FbXJHdSUPj%2F0K8WzXuacV6OoeNH5q88pV1%2F1%2Fr2oNYVI0ngGVPhiwbullWKPjR51jYV5ifZAEz2A%2BpIW0pJSD341M1cnfMtyK7%2BCT9lkt5nYo4AeMBwW8WgzrXmKEqPSxE%2FB0PlK783Qn6fC%2BhIn%2B3Oj%2FMmo8HSRrkH2I3N5wmUQRcxF%2BH%2FhHDJdqccMbX08mJ%2BVbn0XgZaFsS%2B1%2FgdR1b05puLCMDi6PaSGmzGiqyagXw2YT00dgc4Pf9G%2BRycnDeaaXZLEfLaRDPxHmYoQPPI7XLVOq5R%2FuWvybF%2FFvkQ7VpLGC75HzTZJ43rGcZ0UtCyjM%2BSxzqTvqaq8btitDGBazvaeQpZgPhNOzsM53phhMqbiPzgRwu5d1YRk8I8zgw5O2IW276RXwIeQo76FTz32z1aVgWmI7IgO3lCOWwhnfAR0Z1n1sCK%2FeXqauNP3gGw3CzlpJ7eEEqJzoyHACUEMXszJqWAVsaqMzBfjJtR%2Fen1vuomcnAy9J4tG1lOktvU5p%2FMLenhZ2gdWUeZ9JrdXUj8LQNh%2F8jzl3aTztCzopfMIOp8MAGOqUBZhmlfIJh%2BvNPOUwihPDDg7gLLlUTrK7eZMaFr%2B2peW6Gpt6Uv30Ucy0B99mXHREy1oNSaiYm%2B%2FiIkOsu%2FgSMNB2gw%2Bj1epsD7N3qTywYm%2FpB%2FbUxCK0aZwuIoF0gIEqUkpOhbAqOYzaHf4VjE8xY593AcMiwZJZPN3UvFXqPKyGINXrpOCFb33YYIPu8b4kPoy3ZtcNOD4ig3edm1%2Fnzd2b0ksAJ&X-Amz-Signature=a2e0e72f899f0ff70eddbdeddd828c7e1f8236f180206ae8b24c50ca99a32249&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJ4OELW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaMdD8%2F1t9wO3N02VotsCl6hFQjiYITdwasBi2YGpwhAiEA3O%2Bc933WrMSWQUlOzJWhshrLBnN8in8TJP73opCGJoIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFf3Kgm2rf8t0NRhGCrcAytajmB3%2Ba%2FF4wY1THKwgWvV5f%2B2BuZSe7mkTKRW35Ad7DQlfPnw0HxeTWqKNvuHdby2ZXqCzj54sB%2FbXJHdSUPj%2F0K8WzXuacV6OoeNH5q88pV1%2F1%2Fr2oNYVI0ngGVPhiwbullWKPjR51jYV5ifZAEz2A%2BpIW0pJSD341M1cnfMtyK7%2BCT9lkt5nYo4AeMBwW8WgzrXmKEqPSxE%2FB0PlK783Qn6fC%2BhIn%2B3Oj%2FMmo8HSRrkH2I3N5wmUQRcxF%2BH%2FhHDJdqccMbX08mJ%2BVbn0XgZaFsS%2B1%2FgdR1b05puLCMDi6PaSGmzGiqyagXw2YT00dgc4Pf9G%2BRycnDeaaXZLEfLaRDPxHmYoQPPI7XLVOq5R%2FuWvybF%2FFvkQ7VpLGC75HzTZJ43rGcZ0UtCyjM%2BSxzqTvqaq8btitDGBazvaeQpZgPhNOzsM53phhMqbiPzgRwu5d1YRk8I8zgw5O2IW276RXwIeQo76FTz32z1aVgWmI7IgO3lCOWwhnfAR0Z1n1sCK%2FeXqauNP3gGw3CzlpJ7eEEqJzoyHACUEMXszJqWAVsaqMzBfjJtR%2Fen1vuomcnAy9J4tG1lOktvU5p%2FMLenhZ2gdWUeZ9JrdXUj8LQNh%2F8jzl3aTztCzopfMIOp8MAGOqUBZhmlfIJh%2BvNPOUwihPDDg7gLLlUTrK7eZMaFr%2B2peW6Gpt6Uv30Ucy0B99mXHREy1oNSaiYm%2B%2FiIkOsu%2FgSMNB2gw%2Bj1epsD7N3qTywYm%2FpB%2FbUxCK0aZwuIoF0gIEqUkpOhbAqOYzaHf4VjE8xY593AcMiwZJZPN3UvFXqPKyGINXrpOCFb33YYIPu8b4kPoy3ZtcNOD4ig3edm1%2Fnzd2b0ksAJ&X-Amz-Signature=7cfbcf77efb0266b5c24e9dcc819c81ddf714bf28ebe49783424f53804ccfd46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJ4OELW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaMdD8%2F1t9wO3N02VotsCl6hFQjiYITdwasBi2YGpwhAiEA3O%2Bc933WrMSWQUlOzJWhshrLBnN8in8TJP73opCGJoIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFf3Kgm2rf8t0NRhGCrcAytajmB3%2Ba%2FF4wY1THKwgWvV5f%2B2BuZSe7mkTKRW35Ad7DQlfPnw0HxeTWqKNvuHdby2ZXqCzj54sB%2FbXJHdSUPj%2F0K8WzXuacV6OoeNH5q88pV1%2F1%2Fr2oNYVI0ngGVPhiwbullWKPjR51jYV5ifZAEz2A%2BpIW0pJSD341M1cnfMtyK7%2BCT9lkt5nYo4AeMBwW8WgzrXmKEqPSxE%2FB0PlK783Qn6fC%2BhIn%2B3Oj%2FMmo8HSRrkH2I3N5wmUQRcxF%2BH%2FhHDJdqccMbX08mJ%2BVbn0XgZaFsS%2B1%2FgdR1b05puLCMDi6PaSGmzGiqyagXw2YT00dgc4Pf9G%2BRycnDeaaXZLEfLaRDPxHmYoQPPI7XLVOq5R%2FuWvybF%2FFvkQ7VpLGC75HzTZJ43rGcZ0UtCyjM%2BSxzqTvqaq8btitDGBazvaeQpZgPhNOzsM53phhMqbiPzgRwu5d1YRk8I8zgw5O2IW276RXwIeQo76FTz32z1aVgWmI7IgO3lCOWwhnfAR0Z1n1sCK%2FeXqauNP3gGw3CzlpJ7eEEqJzoyHACUEMXszJqWAVsaqMzBfjJtR%2Fen1vuomcnAy9J4tG1lOktvU5p%2FMLenhZ2gdWUeZ9JrdXUj8LQNh%2F8jzl3aTztCzopfMIOp8MAGOqUBZhmlfIJh%2BvNPOUwihPDDg7gLLlUTrK7eZMaFr%2B2peW6Gpt6Uv30Ucy0B99mXHREy1oNSaiYm%2B%2FiIkOsu%2FgSMNB2gw%2Bj1epsD7N3qTywYm%2FpB%2FbUxCK0aZwuIoF0gIEqUkpOhbAqOYzaHf4VjE8xY593AcMiwZJZPN3UvFXqPKyGINXrpOCFb33YYIPu8b4kPoy3ZtcNOD4ig3edm1%2Fnzd2b0ksAJ&X-Amz-Signature=ac855033ed6929622ca2deb7b7295a0d01c3f59dc94061fe7351a6d11ab33c97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJ4OELW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaMdD8%2F1t9wO3N02VotsCl6hFQjiYITdwasBi2YGpwhAiEA3O%2Bc933WrMSWQUlOzJWhshrLBnN8in8TJP73opCGJoIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFf3Kgm2rf8t0NRhGCrcAytajmB3%2Ba%2FF4wY1THKwgWvV5f%2B2BuZSe7mkTKRW35Ad7DQlfPnw0HxeTWqKNvuHdby2ZXqCzj54sB%2FbXJHdSUPj%2F0K8WzXuacV6OoeNH5q88pV1%2F1%2Fr2oNYVI0ngGVPhiwbullWKPjR51jYV5ifZAEz2A%2BpIW0pJSD341M1cnfMtyK7%2BCT9lkt5nYo4AeMBwW8WgzrXmKEqPSxE%2FB0PlK783Qn6fC%2BhIn%2B3Oj%2FMmo8HSRrkH2I3N5wmUQRcxF%2BH%2FhHDJdqccMbX08mJ%2BVbn0XgZaFsS%2B1%2FgdR1b05puLCMDi6PaSGmzGiqyagXw2YT00dgc4Pf9G%2BRycnDeaaXZLEfLaRDPxHmYoQPPI7XLVOq5R%2FuWvybF%2FFvkQ7VpLGC75HzTZJ43rGcZ0UtCyjM%2BSxzqTvqaq8btitDGBazvaeQpZgPhNOzsM53phhMqbiPzgRwu5d1YRk8I8zgw5O2IW276RXwIeQo76FTz32z1aVgWmI7IgO3lCOWwhnfAR0Z1n1sCK%2FeXqauNP3gGw3CzlpJ7eEEqJzoyHACUEMXszJqWAVsaqMzBfjJtR%2Fen1vuomcnAy9J4tG1lOktvU5p%2FMLenhZ2gdWUeZ9JrdXUj8LQNh%2F8jzl3aTztCzopfMIOp8MAGOqUBZhmlfIJh%2BvNPOUwihPDDg7gLLlUTrK7eZMaFr%2B2peW6Gpt6Uv30Ucy0B99mXHREy1oNSaiYm%2B%2FiIkOsu%2FgSMNB2gw%2Bj1epsD7N3qTywYm%2FpB%2FbUxCK0aZwuIoF0gIEqUkpOhbAqOYzaHf4VjE8xY593AcMiwZJZPN3UvFXqPKyGINXrpOCFb33YYIPu8b4kPoy3ZtcNOD4ig3edm1%2Fnzd2b0ksAJ&X-Amz-Signature=52c8ae61fc0e66f23ae986966a7b57cb1000b02acbddd221d2142fa85cae641d&X-Amz-SignedHeaders=host&x-id=GetObject)
