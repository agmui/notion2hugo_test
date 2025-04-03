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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26EG2BZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzNWmP7RB%2FcLeSA0MLdcfkiJBr7SP1Nz%2Bo6eT4Hb5SfAiEAzUMCj8bbA41Q2hL0okhUGvQLTsCoMpaC3tD4cY%2FNnIwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC7x36vtg6mMPLnfircA4y6tB%2FHzyOBZ6We9Rak5GC%2Bost5MOLfBgHF4BR4R%2B819k6XcsfIBM2QYHwJJYoU9Taz%2Fjntlo9Z%2F32BXDqVs058lkzawXNsru1QmKXPkPIeifSVgqPMXOaJGkGQt7rMq2ltwUsuxmLZKDGfMZEPS3AWmlDTka1ba254pP%2Bp%2FvV5WpYUEmGxOhvh7eUFc%2Bqg9S9wP%2BneYlehDMgrvJEP1sttEN0ZvYCpuAe5Is5ob9P2CqYO9rOhWDtH18RPJ6VcI9n0UYQQV1hHJRD86Dt4izjcfAcx7L98LQhFsfngyr0nLoiKSfLzOn4CJpEl7yhrH8PppeQxTsCKedITnyrIf0%2BS1jVwuhX3akSkMKLQ5LLEJ32rQJuuveeXlR5AVGYq6GhhnqhDo53R3TXdSP%2BAqyX3reOQROzw901iRXZwgMGHIa%2B83mnureI1iROJwkIwOgYC55aBt2fYy4rm6%2FkboUVcmMbnC7c3eNDj4RiSkAlpODSzaISNR44d%2BbDfLYH23CNYve0pJ%2FgVGj3tts9QXr3gaiH%2FXDSBM%2Fpd9ggV46og6xGg7Uh8IBGGbCU1RcywR8oYRI4Sr1K%2BYIhUAa1iWP5fjz9kyRRo95tArY3%2FhDYWWPjVrj3WdcP1UpnmMNOwub8GOqUBBf5HIYyOue4ucMYuz%2Bxg7BES6YL47D67XfpdTp0z4RvAcz5IeVKp8DbiVMftG00JZHQzsTEzq3z6ZcwbJYNErVeGC9ozj2UYTULr9w%2B5juCwtxR2NgutCcPddpqVIzOI4376hvp3MYi9x%2BylLqjQUu2snczKM1Sorxn%2FRlKBVx76hzgTfVU%2Fehqn4kwp9RuYp3QsNUdJFlKxBqg34d818IBY2bLp&X-Amz-Signature=ca29343111138c80e2bbb0abe6dbb5e94c003f3b402d98d31e295989ee186f51&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26EG2BZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzNWmP7RB%2FcLeSA0MLdcfkiJBr7SP1Nz%2Bo6eT4Hb5SfAiEAzUMCj8bbA41Q2hL0okhUGvQLTsCoMpaC3tD4cY%2FNnIwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC7x36vtg6mMPLnfircA4y6tB%2FHzyOBZ6We9Rak5GC%2Bost5MOLfBgHF4BR4R%2B819k6XcsfIBM2QYHwJJYoU9Taz%2Fjntlo9Z%2F32BXDqVs058lkzawXNsru1QmKXPkPIeifSVgqPMXOaJGkGQt7rMq2ltwUsuxmLZKDGfMZEPS3AWmlDTka1ba254pP%2Bp%2FvV5WpYUEmGxOhvh7eUFc%2Bqg9S9wP%2BneYlehDMgrvJEP1sttEN0ZvYCpuAe5Is5ob9P2CqYO9rOhWDtH18RPJ6VcI9n0UYQQV1hHJRD86Dt4izjcfAcx7L98LQhFsfngyr0nLoiKSfLzOn4CJpEl7yhrH8PppeQxTsCKedITnyrIf0%2BS1jVwuhX3akSkMKLQ5LLEJ32rQJuuveeXlR5AVGYq6GhhnqhDo53R3TXdSP%2BAqyX3reOQROzw901iRXZwgMGHIa%2B83mnureI1iROJwkIwOgYC55aBt2fYy4rm6%2FkboUVcmMbnC7c3eNDj4RiSkAlpODSzaISNR44d%2BbDfLYH23CNYve0pJ%2FgVGj3tts9QXr3gaiH%2FXDSBM%2Fpd9ggV46og6xGg7Uh8IBGGbCU1RcywR8oYRI4Sr1K%2BYIhUAa1iWP5fjz9kyRRo95tArY3%2FhDYWWPjVrj3WdcP1UpnmMNOwub8GOqUBBf5HIYyOue4ucMYuz%2Bxg7BES6YL47D67XfpdTp0z4RvAcz5IeVKp8DbiVMftG00JZHQzsTEzq3z6ZcwbJYNErVeGC9ozj2UYTULr9w%2B5juCwtxR2NgutCcPddpqVIzOI4376hvp3MYi9x%2BylLqjQUu2snczKM1Sorxn%2FRlKBVx76hzgTfVU%2Fehqn4kwp9RuYp3QsNUdJFlKxBqg34d818IBY2bLp&X-Amz-Signature=47c772839c6b06da596a0c7d398d827fe27b9795e23c2447d74910ad62822714&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26EG2BZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzNWmP7RB%2FcLeSA0MLdcfkiJBr7SP1Nz%2Bo6eT4Hb5SfAiEAzUMCj8bbA41Q2hL0okhUGvQLTsCoMpaC3tD4cY%2FNnIwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC7x36vtg6mMPLnfircA4y6tB%2FHzyOBZ6We9Rak5GC%2Bost5MOLfBgHF4BR4R%2B819k6XcsfIBM2QYHwJJYoU9Taz%2Fjntlo9Z%2F32BXDqVs058lkzawXNsru1QmKXPkPIeifSVgqPMXOaJGkGQt7rMq2ltwUsuxmLZKDGfMZEPS3AWmlDTka1ba254pP%2Bp%2FvV5WpYUEmGxOhvh7eUFc%2Bqg9S9wP%2BneYlehDMgrvJEP1sttEN0ZvYCpuAe5Is5ob9P2CqYO9rOhWDtH18RPJ6VcI9n0UYQQV1hHJRD86Dt4izjcfAcx7L98LQhFsfngyr0nLoiKSfLzOn4CJpEl7yhrH8PppeQxTsCKedITnyrIf0%2BS1jVwuhX3akSkMKLQ5LLEJ32rQJuuveeXlR5AVGYq6GhhnqhDo53R3TXdSP%2BAqyX3reOQROzw901iRXZwgMGHIa%2B83mnureI1iROJwkIwOgYC55aBt2fYy4rm6%2FkboUVcmMbnC7c3eNDj4RiSkAlpODSzaISNR44d%2BbDfLYH23CNYve0pJ%2FgVGj3tts9QXr3gaiH%2FXDSBM%2Fpd9ggV46og6xGg7Uh8IBGGbCU1RcywR8oYRI4Sr1K%2BYIhUAa1iWP5fjz9kyRRo95tArY3%2FhDYWWPjVrj3WdcP1UpnmMNOwub8GOqUBBf5HIYyOue4ucMYuz%2Bxg7BES6YL47D67XfpdTp0z4RvAcz5IeVKp8DbiVMftG00JZHQzsTEzq3z6ZcwbJYNErVeGC9ozj2UYTULr9w%2B5juCwtxR2NgutCcPddpqVIzOI4376hvp3MYi9x%2BylLqjQUu2snczKM1Sorxn%2FRlKBVx76hzgTfVU%2Fehqn4kwp9RuYp3QsNUdJFlKxBqg34d818IBY2bLp&X-Amz-Signature=8db37f042dd99a5a560b6e4bb60e58587c13f443fd8a2be5f4e30f3ab9ff5a18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26EG2BZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzNWmP7RB%2FcLeSA0MLdcfkiJBr7SP1Nz%2Bo6eT4Hb5SfAiEAzUMCj8bbA41Q2hL0okhUGvQLTsCoMpaC3tD4cY%2FNnIwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC7x36vtg6mMPLnfircA4y6tB%2FHzyOBZ6We9Rak5GC%2Bost5MOLfBgHF4BR4R%2B819k6XcsfIBM2QYHwJJYoU9Taz%2Fjntlo9Z%2F32BXDqVs058lkzawXNsru1QmKXPkPIeifSVgqPMXOaJGkGQt7rMq2ltwUsuxmLZKDGfMZEPS3AWmlDTka1ba254pP%2Bp%2FvV5WpYUEmGxOhvh7eUFc%2Bqg9S9wP%2BneYlehDMgrvJEP1sttEN0ZvYCpuAe5Is5ob9P2CqYO9rOhWDtH18RPJ6VcI9n0UYQQV1hHJRD86Dt4izjcfAcx7L98LQhFsfngyr0nLoiKSfLzOn4CJpEl7yhrH8PppeQxTsCKedITnyrIf0%2BS1jVwuhX3akSkMKLQ5LLEJ32rQJuuveeXlR5AVGYq6GhhnqhDo53R3TXdSP%2BAqyX3reOQROzw901iRXZwgMGHIa%2B83mnureI1iROJwkIwOgYC55aBt2fYy4rm6%2FkboUVcmMbnC7c3eNDj4RiSkAlpODSzaISNR44d%2BbDfLYH23CNYve0pJ%2FgVGj3tts9QXr3gaiH%2FXDSBM%2Fpd9ggV46og6xGg7Uh8IBGGbCU1RcywR8oYRI4Sr1K%2BYIhUAa1iWP5fjz9kyRRo95tArY3%2FhDYWWPjVrj3WdcP1UpnmMNOwub8GOqUBBf5HIYyOue4ucMYuz%2Bxg7BES6YL47D67XfpdTp0z4RvAcz5IeVKp8DbiVMftG00JZHQzsTEzq3z6ZcwbJYNErVeGC9ozj2UYTULr9w%2B5juCwtxR2NgutCcPddpqVIzOI4376hvp3MYi9x%2BylLqjQUu2snczKM1Sorxn%2FRlKBVx76hzgTfVU%2Fehqn4kwp9RuYp3QsNUdJFlKxBqg34d818IBY2bLp&X-Amz-Signature=d0245cbf88a44637d25f41bc4ddb18c045b393a757d100724fa01fa31ae6b471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26EG2BZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzNWmP7RB%2FcLeSA0MLdcfkiJBr7SP1Nz%2Bo6eT4Hb5SfAiEAzUMCj8bbA41Q2hL0okhUGvQLTsCoMpaC3tD4cY%2FNnIwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC7x36vtg6mMPLnfircA4y6tB%2FHzyOBZ6We9Rak5GC%2Bost5MOLfBgHF4BR4R%2B819k6XcsfIBM2QYHwJJYoU9Taz%2Fjntlo9Z%2F32BXDqVs058lkzawXNsru1QmKXPkPIeifSVgqPMXOaJGkGQt7rMq2ltwUsuxmLZKDGfMZEPS3AWmlDTka1ba254pP%2Bp%2FvV5WpYUEmGxOhvh7eUFc%2Bqg9S9wP%2BneYlehDMgrvJEP1sttEN0ZvYCpuAe5Is5ob9P2CqYO9rOhWDtH18RPJ6VcI9n0UYQQV1hHJRD86Dt4izjcfAcx7L98LQhFsfngyr0nLoiKSfLzOn4CJpEl7yhrH8PppeQxTsCKedITnyrIf0%2BS1jVwuhX3akSkMKLQ5LLEJ32rQJuuveeXlR5AVGYq6GhhnqhDo53R3TXdSP%2BAqyX3reOQROzw901iRXZwgMGHIa%2B83mnureI1iROJwkIwOgYC55aBt2fYy4rm6%2FkboUVcmMbnC7c3eNDj4RiSkAlpODSzaISNR44d%2BbDfLYH23CNYve0pJ%2FgVGj3tts9QXr3gaiH%2FXDSBM%2Fpd9ggV46og6xGg7Uh8IBGGbCU1RcywR8oYRI4Sr1K%2BYIhUAa1iWP5fjz9kyRRo95tArY3%2FhDYWWPjVrj3WdcP1UpnmMNOwub8GOqUBBf5HIYyOue4ucMYuz%2Bxg7BES6YL47D67XfpdTp0z4RvAcz5IeVKp8DbiVMftG00JZHQzsTEzq3z6ZcwbJYNErVeGC9ozj2UYTULr9w%2B5juCwtxR2NgutCcPddpqVIzOI4376hvp3MYi9x%2BylLqjQUu2snczKM1Sorxn%2FRlKBVx76hzgTfVU%2Fehqn4kwp9RuYp3QsNUdJFlKxBqg34d818IBY2bLp&X-Amz-Signature=b939f77f7b5b21faf244ae83d714212e75bd1b1cb34a9c4c6badb948f8de59d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26EG2BZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzNWmP7RB%2FcLeSA0MLdcfkiJBr7SP1Nz%2Bo6eT4Hb5SfAiEAzUMCj8bbA41Q2hL0okhUGvQLTsCoMpaC3tD4cY%2FNnIwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC7x36vtg6mMPLnfircA4y6tB%2FHzyOBZ6We9Rak5GC%2Bost5MOLfBgHF4BR4R%2B819k6XcsfIBM2QYHwJJYoU9Taz%2Fjntlo9Z%2F32BXDqVs058lkzawXNsru1QmKXPkPIeifSVgqPMXOaJGkGQt7rMq2ltwUsuxmLZKDGfMZEPS3AWmlDTka1ba254pP%2Bp%2FvV5WpYUEmGxOhvh7eUFc%2Bqg9S9wP%2BneYlehDMgrvJEP1sttEN0ZvYCpuAe5Is5ob9P2CqYO9rOhWDtH18RPJ6VcI9n0UYQQV1hHJRD86Dt4izjcfAcx7L98LQhFsfngyr0nLoiKSfLzOn4CJpEl7yhrH8PppeQxTsCKedITnyrIf0%2BS1jVwuhX3akSkMKLQ5LLEJ32rQJuuveeXlR5AVGYq6GhhnqhDo53R3TXdSP%2BAqyX3reOQROzw901iRXZwgMGHIa%2B83mnureI1iROJwkIwOgYC55aBt2fYy4rm6%2FkboUVcmMbnC7c3eNDj4RiSkAlpODSzaISNR44d%2BbDfLYH23CNYve0pJ%2FgVGj3tts9QXr3gaiH%2FXDSBM%2Fpd9ggV46og6xGg7Uh8IBGGbCU1RcywR8oYRI4Sr1K%2BYIhUAa1iWP5fjz9kyRRo95tArY3%2FhDYWWPjVrj3WdcP1UpnmMNOwub8GOqUBBf5HIYyOue4ucMYuz%2Bxg7BES6YL47D67XfpdTp0z4RvAcz5IeVKp8DbiVMftG00JZHQzsTEzq3z6ZcwbJYNErVeGC9ozj2UYTULr9w%2B5juCwtxR2NgutCcPddpqVIzOI4376hvp3MYi9x%2BylLqjQUu2snczKM1Sorxn%2FRlKBVx76hzgTfVU%2Fehqn4kwp9RuYp3QsNUdJFlKxBqg34d818IBY2bLp&X-Amz-Signature=45269815e72cdc3ad9beb0e83bdad3a8050ad4c5dc437b7b5a5650ee9b226b3f&X-Amz-SignedHeaders=host&x-id=GetObject)
