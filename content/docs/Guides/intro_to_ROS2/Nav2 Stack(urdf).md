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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNZY2MK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDQe1UoWb5h%2FTAWMP4GLCwJn4%2B%2F9phH0%2FBjFQxioL7DuAIhAIs%2B7MDHHM34jHUHsT4ZzcyfJwWUKLbB6GbAfiM%2BeeirKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPfKJc9zEa64RHdAYq3AN5sOVpCaeCOeo2KQvV8V%2FjE4nbpdFq9x7JAfH1uV9FMpqEhzKFKuJ3rJpOUJrKRi1387wM7HFy24OOam9KWSp%2FOaor%2Fc4AALOCpM5oNGq7B5yoctV8dtulYVvvpQvfemRMxcrKOkXzbtdw0RlbFvNWAXYlw3ZN3CKJbVhnM3TZrqLS2epeKhnx0Pbcoqwy9RwNS015z3H2wnJSaQQc28PovwzuARBPTixcA9qw2yfpc8OBthpBSouUdnJetDisSe8Gcvu32B5Ga0BpxQu2MHoUN1MoLoSge2mo7Kb6QLnyfNQ4pYDG5Z3fqEflvoJIMLtfjU8TFvoxRq%2Bx16ucKtgY%2FzeZ2EvuZCSG%2B7ta4jtYBu4ekQHDYRHQsMX4bTFKbCTrx2pcsgMhiIwE%2BueYwO59g0HCi1X20uAvrRqSRb4aD1Y6DUcz6oDvx9qeW4FVEelyT7IbbXh2ufjL%2FsY3HhpxvPFXTrApQ%2BLSi7Jhjf8KnZUbhJIR5NilH7WnMcMhSbKQX3EpOtV1igMd9emQ9T%2FThoGOzFmrw3BQshDVpCpR19MYb5tsaWir9h6lsznoYUmdWXkPsltOLIRfGV%2BHuH2gCYp6TJbuSGLUbQgbKnOhdl16aYiJs9W9iv2TMDC3ws29BjqkAfYE8r2%2BRC%2Bm4ICUN2uQeZx%2FQzMzwGlk3RLmsi25r%2Bj4LPlnFdC49EfatSn0BPhRF1bQaLXa%2BpvywyMfnzvf7TuYZhHYs6XSfxQtmfVQEClwTUU8gz9LjwMi62XIvS2%2FLD1fAu6ZM2oZfTtAJIV%2BrbgjIG%2Bz3SlxOg9QIK1vpvrSgQdvsgew1cJTPxnqaQ4s35neUzLt%2BXMqPyI%2BbBEgFMjlrMGj&X-Amz-Signature=5e3aa0dde5fb91146c8aa39de231eca0de6b195831dbe74debab25bcb9c03cef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNZY2MK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDQe1UoWb5h%2FTAWMP4GLCwJn4%2B%2F9phH0%2FBjFQxioL7DuAIhAIs%2B7MDHHM34jHUHsT4ZzcyfJwWUKLbB6GbAfiM%2BeeirKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPfKJc9zEa64RHdAYq3AN5sOVpCaeCOeo2KQvV8V%2FjE4nbpdFq9x7JAfH1uV9FMpqEhzKFKuJ3rJpOUJrKRi1387wM7HFy24OOam9KWSp%2FOaor%2Fc4AALOCpM5oNGq7B5yoctV8dtulYVvvpQvfemRMxcrKOkXzbtdw0RlbFvNWAXYlw3ZN3CKJbVhnM3TZrqLS2epeKhnx0Pbcoqwy9RwNS015z3H2wnJSaQQc28PovwzuARBPTixcA9qw2yfpc8OBthpBSouUdnJetDisSe8Gcvu32B5Ga0BpxQu2MHoUN1MoLoSge2mo7Kb6QLnyfNQ4pYDG5Z3fqEflvoJIMLtfjU8TFvoxRq%2Bx16ucKtgY%2FzeZ2EvuZCSG%2B7ta4jtYBu4ekQHDYRHQsMX4bTFKbCTrx2pcsgMhiIwE%2BueYwO59g0HCi1X20uAvrRqSRb4aD1Y6DUcz6oDvx9qeW4FVEelyT7IbbXh2ufjL%2FsY3HhpxvPFXTrApQ%2BLSi7Jhjf8KnZUbhJIR5NilH7WnMcMhSbKQX3EpOtV1igMd9emQ9T%2FThoGOzFmrw3BQshDVpCpR19MYb5tsaWir9h6lsznoYUmdWXkPsltOLIRfGV%2BHuH2gCYp6TJbuSGLUbQgbKnOhdl16aYiJs9W9iv2TMDC3ws29BjqkAfYE8r2%2BRC%2Bm4ICUN2uQeZx%2FQzMzwGlk3RLmsi25r%2Bj4LPlnFdC49EfatSn0BPhRF1bQaLXa%2BpvywyMfnzvf7TuYZhHYs6XSfxQtmfVQEClwTUU8gz9LjwMi62XIvS2%2FLD1fAu6ZM2oZfTtAJIV%2BrbgjIG%2Bz3SlxOg9QIK1vpvrSgQdvsgew1cJTPxnqaQ4s35neUzLt%2BXMqPyI%2BbBEgFMjlrMGj&X-Amz-Signature=efc66d794b73ea0e8b1904e6a47e316c6986e5fabd09b50a125160f91d760fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNZY2MK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDQe1UoWb5h%2FTAWMP4GLCwJn4%2B%2F9phH0%2FBjFQxioL7DuAIhAIs%2B7MDHHM34jHUHsT4ZzcyfJwWUKLbB6GbAfiM%2BeeirKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPfKJc9zEa64RHdAYq3AN5sOVpCaeCOeo2KQvV8V%2FjE4nbpdFq9x7JAfH1uV9FMpqEhzKFKuJ3rJpOUJrKRi1387wM7HFy24OOam9KWSp%2FOaor%2Fc4AALOCpM5oNGq7B5yoctV8dtulYVvvpQvfemRMxcrKOkXzbtdw0RlbFvNWAXYlw3ZN3CKJbVhnM3TZrqLS2epeKhnx0Pbcoqwy9RwNS015z3H2wnJSaQQc28PovwzuARBPTixcA9qw2yfpc8OBthpBSouUdnJetDisSe8Gcvu32B5Ga0BpxQu2MHoUN1MoLoSge2mo7Kb6QLnyfNQ4pYDG5Z3fqEflvoJIMLtfjU8TFvoxRq%2Bx16ucKtgY%2FzeZ2EvuZCSG%2B7ta4jtYBu4ekQHDYRHQsMX4bTFKbCTrx2pcsgMhiIwE%2BueYwO59g0HCi1X20uAvrRqSRb4aD1Y6DUcz6oDvx9qeW4FVEelyT7IbbXh2ufjL%2FsY3HhpxvPFXTrApQ%2BLSi7Jhjf8KnZUbhJIR5NilH7WnMcMhSbKQX3EpOtV1igMd9emQ9T%2FThoGOzFmrw3BQshDVpCpR19MYb5tsaWir9h6lsznoYUmdWXkPsltOLIRfGV%2BHuH2gCYp6TJbuSGLUbQgbKnOhdl16aYiJs9W9iv2TMDC3ws29BjqkAfYE8r2%2BRC%2Bm4ICUN2uQeZx%2FQzMzwGlk3RLmsi25r%2Bj4LPlnFdC49EfatSn0BPhRF1bQaLXa%2BpvywyMfnzvf7TuYZhHYs6XSfxQtmfVQEClwTUU8gz9LjwMi62XIvS2%2FLD1fAu6ZM2oZfTtAJIV%2BrbgjIG%2Bz3SlxOg9QIK1vpvrSgQdvsgew1cJTPxnqaQ4s35neUzLt%2BXMqPyI%2BbBEgFMjlrMGj&X-Amz-Signature=037b1a0b0d8c1af9b884a16347a2f9b8b8de7e9bf2ef816831b7ad3aaf726c51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNZY2MK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDQe1UoWb5h%2FTAWMP4GLCwJn4%2B%2F9phH0%2FBjFQxioL7DuAIhAIs%2B7MDHHM34jHUHsT4ZzcyfJwWUKLbB6GbAfiM%2BeeirKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPfKJc9zEa64RHdAYq3AN5sOVpCaeCOeo2KQvV8V%2FjE4nbpdFq9x7JAfH1uV9FMpqEhzKFKuJ3rJpOUJrKRi1387wM7HFy24OOam9KWSp%2FOaor%2Fc4AALOCpM5oNGq7B5yoctV8dtulYVvvpQvfemRMxcrKOkXzbtdw0RlbFvNWAXYlw3ZN3CKJbVhnM3TZrqLS2epeKhnx0Pbcoqwy9RwNS015z3H2wnJSaQQc28PovwzuARBPTixcA9qw2yfpc8OBthpBSouUdnJetDisSe8Gcvu32B5Ga0BpxQu2MHoUN1MoLoSge2mo7Kb6QLnyfNQ4pYDG5Z3fqEflvoJIMLtfjU8TFvoxRq%2Bx16ucKtgY%2FzeZ2EvuZCSG%2B7ta4jtYBu4ekQHDYRHQsMX4bTFKbCTrx2pcsgMhiIwE%2BueYwO59g0HCi1X20uAvrRqSRb4aD1Y6DUcz6oDvx9qeW4FVEelyT7IbbXh2ufjL%2FsY3HhpxvPFXTrApQ%2BLSi7Jhjf8KnZUbhJIR5NilH7WnMcMhSbKQX3EpOtV1igMd9emQ9T%2FThoGOzFmrw3BQshDVpCpR19MYb5tsaWir9h6lsznoYUmdWXkPsltOLIRfGV%2BHuH2gCYp6TJbuSGLUbQgbKnOhdl16aYiJs9W9iv2TMDC3ws29BjqkAfYE8r2%2BRC%2Bm4ICUN2uQeZx%2FQzMzwGlk3RLmsi25r%2Bj4LPlnFdC49EfatSn0BPhRF1bQaLXa%2BpvywyMfnzvf7TuYZhHYs6XSfxQtmfVQEClwTUU8gz9LjwMi62XIvS2%2FLD1fAu6ZM2oZfTtAJIV%2BrbgjIG%2Bz3SlxOg9QIK1vpvrSgQdvsgew1cJTPxnqaQ4s35neUzLt%2BXMqPyI%2BbBEgFMjlrMGj&X-Amz-Signature=872bd3afbbb2e8d63dc848f722caa68153914a7ac03af0cfd230bae8e0538bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNZY2MK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDQe1UoWb5h%2FTAWMP4GLCwJn4%2B%2F9phH0%2FBjFQxioL7DuAIhAIs%2B7MDHHM34jHUHsT4ZzcyfJwWUKLbB6GbAfiM%2BeeirKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPfKJc9zEa64RHdAYq3AN5sOVpCaeCOeo2KQvV8V%2FjE4nbpdFq9x7JAfH1uV9FMpqEhzKFKuJ3rJpOUJrKRi1387wM7HFy24OOam9KWSp%2FOaor%2Fc4AALOCpM5oNGq7B5yoctV8dtulYVvvpQvfemRMxcrKOkXzbtdw0RlbFvNWAXYlw3ZN3CKJbVhnM3TZrqLS2epeKhnx0Pbcoqwy9RwNS015z3H2wnJSaQQc28PovwzuARBPTixcA9qw2yfpc8OBthpBSouUdnJetDisSe8Gcvu32B5Ga0BpxQu2MHoUN1MoLoSge2mo7Kb6QLnyfNQ4pYDG5Z3fqEflvoJIMLtfjU8TFvoxRq%2Bx16ucKtgY%2FzeZ2EvuZCSG%2B7ta4jtYBu4ekQHDYRHQsMX4bTFKbCTrx2pcsgMhiIwE%2BueYwO59g0HCi1X20uAvrRqSRb4aD1Y6DUcz6oDvx9qeW4FVEelyT7IbbXh2ufjL%2FsY3HhpxvPFXTrApQ%2BLSi7Jhjf8KnZUbhJIR5NilH7WnMcMhSbKQX3EpOtV1igMd9emQ9T%2FThoGOzFmrw3BQshDVpCpR19MYb5tsaWir9h6lsznoYUmdWXkPsltOLIRfGV%2BHuH2gCYp6TJbuSGLUbQgbKnOhdl16aYiJs9W9iv2TMDC3ws29BjqkAfYE8r2%2BRC%2Bm4ICUN2uQeZx%2FQzMzwGlk3RLmsi25r%2Bj4LPlnFdC49EfatSn0BPhRF1bQaLXa%2BpvywyMfnzvf7TuYZhHYs6XSfxQtmfVQEClwTUU8gz9LjwMi62XIvS2%2FLD1fAu6ZM2oZfTtAJIV%2BrbgjIG%2Bz3SlxOg9QIK1vpvrSgQdvsgew1cJTPxnqaQ4s35neUzLt%2BXMqPyI%2BbBEgFMjlrMGj&X-Amz-Signature=487d0dabd1779a8872d1a6d93641d33e3fa8299517fd9cee082fb30fa5d4fa46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNZY2MK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDQe1UoWb5h%2FTAWMP4GLCwJn4%2B%2F9phH0%2FBjFQxioL7DuAIhAIs%2B7MDHHM34jHUHsT4ZzcyfJwWUKLbB6GbAfiM%2BeeirKv8DCHkQABoMNjM3NDIzMTgzODA1IgzPfKJc9zEa64RHdAYq3AN5sOVpCaeCOeo2KQvV8V%2FjE4nbpdFq9x7JAfH1uV9FMpqEhzKFKuJ3rJpOUJrKRi1387wM7HFy24OOam9KWSp%2FOaor%2Fc4AALOCpM5oNGq7B5yoctV8dtulYVvvpQvfemRMxcrKOkXzbtdw0RlbFvNWAXYlw3ZN3CKJbVhnM3TZrqLS2epeKhnx0Pbcoqwy9RwNS015z3H2wnJSaQQc28PovwzuARBPTixcA9qw2yfpc8OBthpBSouUdnJetDisSe8Gcvu32B5Ga0BpxQu2MHoUN1MoLoSge2mo7Kb6QLnyfNQ4pYDG5Z3fqEflvoJIMLtfjU8TFvoxRq%2Bx16ucKtgY%2FzeZ2EvuZCSG%2B7ta4jtYBu4ekQHDYRHQsMX4bTFKbCTrx2pcsgMhiIwE%2BueYwO59g0HCi1X20uAvrRqSRb4aD1Y6DUcz6oDvx9qeW4FVEelyT7IbbXh2ufjL%2FsY3HhpxvPFXTrApQ%2BLSi7Jhjf8KnZUbhJIR5NilH7WnMcMhSbKQX3EpOtV1igMd9emQ9T%2FThoGOzFmrw3BQshDVpCpR19MYb5tsaWir9h6lsznoYUmdWXkPsltOLIRfGV%2BHuH2gCYp6TJbuSGLUbQgbKnOhdl16aYiJs9W9iv2TMDC3ws29BjqkAfYE8r2%2BRC%2Bm4ICUN2uQeZx%2FQzMzwGlk3RLmsi25r%2Bj4LPlnFdC49EfatSn0BPhRF1bQaLXa%2BpvywyMfnzvf7TuYZhHYs6XSfxQtmfVQEClwTUU8gz9LjwMi62XIvS2%2FLD1fAu6ZM2oZfTtAJIV%2BrbgjIG%2Bz3SlxOg9QIK1vpvrSgQdvsgew1cJTPxnqaQ4s35neUzLt%2BXMqPyI%2BbBEgFMjlrMGj&X-Amz-Signature=a004a587eb9d5b041f2a5d61d330b07e133b24437e338ee449a15dc2d23536d4&X-Amz-SignedHeaders=host&x-id=GetObject)
