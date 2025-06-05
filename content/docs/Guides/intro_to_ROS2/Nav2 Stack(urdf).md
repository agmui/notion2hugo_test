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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB3QU2J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4i4l%2F%2Fc9B61x5SRYK9Qk0%2Fg9liiPX143JE3j4MMuqpgIgUrorLkMYR4lzUgNhBTgcoMC%2Ft47Ih7FBk1SPn1%2FZdH0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJxLoqB6jt2YdD6chircA3DkMHsICsJ5rNiboQmKwlsYIjyHYYiKv5%2F0rhtHbF8oV7yJZKsFZeVSVO72efqnDSjxIVDxVqr0XRygqG%2BG5n2LhhouwiHwEmWTHB9xDp%2BAwY1siw%2Fu2JSzrE66bzt56l4Nds%2FRIF5kaVC8n1ZNrGcj%2B4z7L7H0FA7gcYYoybrYE%2F2H2wyNSJRIgKTJ5ZYeJIFG6TplAaGjEpUO6WZPqbquUCBylrTT%2FqAMROYz%2FdJZ0RNRLZotA5PHEV9Y2BgNXs6nsS6GEibnBbYFkBgHR38ExTV17ceHjRYbvqUtpWgNtYLiSC4%2BjlpNq7AQmetj1ar64R9VsAxazcfua1IVGwVyRzJXOP%2F2uS3Llz2ZVBDdRLDhxHRu6dX8ULdHXZo7vhO7no8hkanjbXe6EC%2FJgr9KphksF7W8z9lVTBrncOG46RAeYafR3zeEmnkxG7TirdfSYYz2U07fWc7vpigJOyJWjQAHhwFy%2BV1yzcNKe9MnKry6ESP9UC6fqm5dRnVfrbXbBORmG7hn5QX1Er8ZiOAa0HL%2FLgKPSWz9Dkfpn%2F3yEf0UVTs95YGkPMqRA5X3ItHGJ2z%2Bx%2BxC7Z8CQQZdIidAX9uwtZbRpbNuBBlRXk6ZJNUTxW59EtC%2FOXWyMM3lhMIGOqUBC%2BjhBL0vI%2BOBudYr8uJizo%2FWwqPZkb1n06kbMu%2BQveMfk%2BUxY4mZukC1h9yK7wjbAiW%2FxSxzB4sTVHXgWGN3u9pmqZgBXdS8Z%2B1DGqrKShnQelq%2FX4K%2FR61PbZT5UMlgL5os42h0cenRAdOkp4hWqossEDDtzFe60ie4q5LkvfaFty%2B49omdxQ%2FoigzCCBW4gtHaevRNwbcJCYKkG%2FAYUklZrZiX&X-Amz-Signature=eedbd117a3572525313ab761f0097863022ca9f3d082cb06ed6d4a967905b0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB3QU2J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4i4l%2F%2Fc9B61x5SRYK9Qk0%2Fg9liiPX143JE3j4MMuqpgIgUrorLkMYR4lzUgNhBTgcoMC%2Ft47Ih7FBk1SPn1%2FZdH0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJxLoqB6jt2YdD6chircA3DkMHsICsJ5rNiboQmKwlsYIjyHYYiKv5%2F0rhtHbF8oV7yJZKsFZeVSVO72efqnDSjxIVDxVqr0XRygqG%2BG5n2LhhouwiHwEmWTHB9xDp%2BAwY1siw%2Fu2JSzrE66bzt56l4Nds%2FRIF5kaVC8n1ZNrGcj%2B4z7L7H0FA7gcYYoybrYE%2F2H2wyNSJRIgKTJ5ZYeJIFG6TplAaGjEpUO6WZPqbquUCBylrTT%2FqAMROYz%2FdJZ0RNRLZotA5PHEV9Y2BgNXs6nsS6GEibnBbYFkBgHR38ExTV17ceHjRYbvqUtpWgNtYLiSC4%2BjlpNq7AQmetj1ar64R9VsAxazcfua1IVGwVyRzJXOP%2F2uS3Llz2ZVBDdRLDhxHRu6dX8ULdHXZo7vhO7no8hkanjbXe6EC%2FJgr9KphksF7W8z9lVTBrncOG46RAeYafR3zeEmnkxG7TirdfSYYz2U07fWc7vpigJOyJWjQAHhwFy%2BV1yzcNKe9MnKry6ESP9UC6fqm5dRnVfrbXbBORmG7hn5QX1Er8ZiOAa0HL%2FLgKPSWz9Dkfpn%2F3yEf0UVTs95YGkPMqRA5X3ItHGJ2z%2Bx%2BxC7Z8CQQZdIidAX9uwtZbRpbNuBBlRXk6ZJNUTxW59EtC%2FOXWyMM3lhMIGOqUBC%2BjhBL0vI%2BOBudYr8uJizo%2FWwqPZkb1n06kbMu%2BQveMfk%2BUxY4mZukC1h9yK7wjbAiW%2FxSxzB4sTVHXgWGN3u9pmqZgBXdS8Z%2B1DGqrKShnQelq%2FX4K%2FR61PbZT5UMlgL5os42h0cenRAdOkp4hWqossEDDtzFe60ie4q5LkvfaFty%2B49omdxQ%2FoigzCCBW4gtHaevRNwbcJCYKkG%2FAYUklZrZiX&X-Amz-Signature=0de3a58b6ea51a64d3028b21a55b6cfc3d78a5164ee8516de59ecc4c1b8aed79&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB3QU2J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4i4l%2F%2Fc9B61x5SRYK9Qk0%2Fg9liiPX143JE3j4MMuqpgIgUrorLkMYR4lzUgNhBTgcoMC%2Ft47Ih7FBk1SPn1%2FZdH0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJxLoqB6jt2YdD6chircA3DkMHsICsJ5rNiboQmKwlsYIjyHYYiKv5%2F0rhtHbF8oV7yJZKsFZeVSVO72efqnDSjxIVDxVqr0XRygqG%2BG5n2LhhouwiHwEmWTHB9xDp%2BAwY1siw%2Fu2JSzrE66bzt56l4Nds%2FRIF5kaVC8n1ZNrGcj%2B4z7L7H0FA7gcYYoybrYE%2F2H2wyNSJRIgKTJ5ZYeJIFG6TplAaGjEpUO6WZPqbquUCBylrTT%2FqAMROYz%2FdJZ0RNRLZotA5PHEV9Y2BgNXs6nsS6GEibnBbYFkBgHR38ExTV17ceHjRYbvqUtpWgNtYLiSC4%2BjlpNq7AQmetj1ar64R9VsAxazcfua1IVGwVyRzJXOP%2F2uS3Llz2ZVBDdRLDhxHRu6dX8ULdHXZo7vhO7no8hkanjbXe6EC%2FJgr9KphksF7W8z9lVTBrncOG46RAeYafR3zeEmnkxG7TirdfSYYz2U07fWc7vpigJOyJWjQAHhwFy%2BV1yzcNKe9MnKry6ESP9UC6fqm5dRnVfrbXbBORmG7hn5QX1Er8ZiOAa0HL%2FLgKPSWz9Dkfpn%2F3yEf0UVTs95YGkPMqRA5X3ItHGJ2z%2Bx%2BxC7Z8CQQZdIidAX9uwtZbRpbNuBBlRXk6ZJNUTxW59EtC%2FOXWyMM3lhMIGOqUBC%2BjhBL0vI%2BOBudYr8uJizo%2FWwqPZkb1n06kbMu%2BQveMfk%2BUxY4mZukC1h9yK7wjbAiW%2FxSxzB4sTVHXgWGN3u9pmqZgBXdS8Z%2B1DGqrKShnQelq%2FX4K%2FR61PbZT5UMlgL5os42h0cenRAdOkp4hWqossEDDtzFe60ie4q5LkvfaFty%2B49omdxQ%2FoigzCCBW4gtHaevRNwbcJCYKkG%2FAYUklZrZiX&X-Amz-Signature=2ecf19ef0821ae0066d8d5fad58f66a45a7b03873195bfe3b232018ecebe026c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB3QU2J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4i4l%2F%2Fc9B61x5SRYK9Qk0%2Fg9liiPX143JE3j4MMuqpgIgUrorLkMYR4lzUgNhBTgcoMC%2Ft47Ih7FBk1SPn1%2FZdH0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJxLoqB6jt2YdD6chircA3DkMHsICsJ5rNiboQmKwlsYIjyHYYiKv5%2F0rhtHbF8oV7yJZKsFZeVSVO72efqnDSjxIVDxVqr0XRygqG%2BG5n2LhhouwiHwEmWTHB9xDp%2BAwY1siw%2Fu2JSzrE66bzt56l4Nds%2FRIF5kaVC8n1ZNrGcj%2B4z7L7H0FA7gcYYoybrYE%2F2H2wyNSJRIgKTJ5ZYeJIFG6TplAaGjEpUO6WZPqbquUCBylrTT%2FqAMROYz%2FdJZ0RNRLZotA5PHEV9Y2BgNXs6nsS6GEibnBbYFkBgHR38ExTV17ceHjRYbvqUtpWgNtYLiSC4%2BjlpNq7AQmetj1ar64R9VsAxazcfua1IVGwVyRzJXOP%2F2uS3Llz2ZVBDdRLDhxHRu6dX8ULdHXZo7vhO7no8hkanjbXe6EC%2FJgr9KphksF7W8z9lVTBrncOG46RAeYafR3zeEmnkxG7TirdfSYYz2U07fWc7vpigJOyJWjQAHhwFy%2BV1yzcNKe9MnKry6ESP9UC6fqm5dRnVfrbXbBORmG7hn5QX1Er8ZiOAa0HL%2FLgKPSWz9Dkfpn%2F3yEf0UVTs95YGkPMqRA5X3ItHGJ2z%2Bx%2BxC7Z8CQQZdIidAX9uwtZbRpbNuBBlRXk6ZJNUTxW59EtC%2FOXWyMM3lhMIGOqUBC%2BjhBL0vI%2BOBudYr8uJizo%2FWwqPZkb1n06kbMu%2BQveMfk%2BUxY4mZukC1h9yK7wjbAiW%2FxSxzB4sTVHXgWGN3u9pmqZgBXdS8Z%2B1DGqrKShnQelq%2FX4K%2FR61PbZT5UMlgL5os42h0cenRAdOkp4hWqossEDDtzFe60ie4q5LkvfaFty%2B49omdxQ%2FoigzCCBW4gtHaevRNwbcJCYKkG%2FAYUklZrZiX&X-Amz-Signature=2c84c85b2d02e767fa19cf4d77c7a3b9618b3ed587133419c3077c0d9d969b87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB3QU2J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4i4l%2F%2Fc9B61x5SRYK9Qk0%2Fg9liiPX143JE3j4MMuqpgIgUrorLkMYR4lzUgNhBTgcoMC%2Ft47Ih7FBk1SPn1%2FZdH0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJxLoqB6jt2YdD6chircA3DkMHsICsJ5rNiboQmKwlsYIjyHYYiKv5%2F0rhtHbF8oV7yJZKsFZeVSVO72efqnDSjxIVDxVqr0XRygqG%2BG5n2LhhouwiHwEmWTHB9xDp%2BAwY1siw%2Fu2JSzrE66bzt56l4Nds%2FRIF5kaVC8n1ZNrGcj%2B4z7L7H0FA7gcYYoybrYE%2F2H2wyNSJRIgKTJ5ZYeJIFG6TplAaGjEpUO6WZPqbquUCBylrTT%2FqAMROYz%2FdJZ0RNRLZotA5PHEV9Y2BgNXs6nsS6GEibnBbYFkBgHR38ExTV17ceHjRYbvqUtpWgNtYLiSC4%2BjlpNq7AQmetj1ar64R9VsAxazcfua1IVGwVyRzJXOP%2F2uS3Llz2ZVBDdRLDhxHRu6dX8ULdHXZo7vhO7no8hkanjbXe6EC%2FJgr9KphksF7W8z9lVTBrncOG46RAeYafR3zeEmnkxG7TirdfSYYz2U07fWc7vpigJOyJWjQAHhwFy%2BV1yzcNKe9MnKry6ESP9UC6fqm5dRnVfrbXbBORmG7hn5QX1Er8ZiOAa0HL%2FLgKPSWz9Dkfpn%2F3yEf0UVTs95YGkPMqRA5X3ItHGJ2z%2Bx%2BxC7Z8CQQZdIidAX9uwtZbRpbNuBBlRXk6ZJNUTxW59EtC%2FOXWyMM3lhMIGOqUBC%2BjhBL0vI%2BOBudYr8uJizo%2FWwqPZkb1n06kbMu%2BQveMfk%2BUxY4mZukC1h9yK7wjbAiW%2FxSxzB4sTVHXgWGN3u9pmqZgBXdS8Z%2B1DGqrKShnQelq%2FX4K%2FR61PbZT5UMlgL5os42h0cenRAdOkp4hWqossEDDtzFe60ie4q5LkvfaFty%2B49omdxQ%2FoigzCCBW4gtHaevRNwbcJCYKkG%2FAYUklZrZiX&X-Amz-Signature=b5f02fe3970afb153cd04c2d25ac776b1a4ba31255d7cd85ffb814d7644ea48e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB3QU2J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4i4l%2F%2Fc9B61x5SRYK9Qk0%2Fg9liiPX143JE3j4MMuqpgIgUrorLkMYR4lzUgNhBTgcoMC%2Ft47Ih7FBk1SPn1%2FZdH0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJxLoqB6jt2YdD6chircA3DkMHsICsJ5rNiboQmKwlsYIjyHYYiKv5%2F0rhtHbF8oV7yJZKsFZeVSVO72efqnDSjxIVDxVqr0XRygqG%2BG5n2LhhouwiHwEmWTHB9xDp%2BAwY1siw%2Fu2JSzrE66bzt56l4Nds%2FRIF5kaVC8n1ZNrGcj%2B4z7L7H0FA7gcYYoybrYE%2F2H2wyNSJRIgKTJ5ZYeJIFG6TplAaGjEpUO6WZPqbquUCBylrTT%2FqAMROYz%2FdJZ0RNRLZotA5PHEV9Y2BgNXs6nsS6GEibnBbYFkBgHR38ExTV17ceHjRYbvqUtpWgNtYLiSC4%2BjlpNq7AQmetj1ar64R9VsAxazcfua1IVGwVyRzJXOP%2F2uS3Llz2ZVBDdRLDhxHRu6dX8ULdHXZo7vhO7no8hkanjbXe6EC%2FJgr9KphksF7W8z9lVTBrncOG46RAeYafR3zeEmnkxG7TirdfSYYz2U07fWc7vpigJOyJWjQAHhwFy%2BV1yzcNKe9MnKry6ESP9UC6fqm5dRnVfrbXbBORmG7hn5QX1Er8ZiOAa0HL%2FLgKPSWz9Dkfpn%2F3yEf0UVTs95YGkPMqRA5X3ItHGJ2z%2Bx%2BxC7Z8CQQZdIidAX9uwtZbRpbNuBBlRXk6ZJNUTxW59EtC%2FOXWyMM3lhMIGOqUBC%2BjhBL0vI%2BOBudYr8uJizo%2FWwqPZkb1n06kbMu%2BQveMfk%2BUxY4mZukC1h9yK7wjbAiW%2FxSxzB4sTVHXgWGN3u9pmqZgBXdS8Z%2B1DGqrKShnQelq%2FX4K%2FR61PbZT5UMlgL5os42h0cenRAdOkp4hWqossEDDtzFe60ie4q5LkvfaFty%2B49omdxQ%2FoigzCCBW4gtHaevRNwbcJCYKkG%2FAYUklZrZiX&X-Amz-Signature=332029729286cc9f407e9339fc43f0329e410d1cf467deae873388e2f22d7249&X-Amz-SignedHeaders=host&x-id=GetObject)
