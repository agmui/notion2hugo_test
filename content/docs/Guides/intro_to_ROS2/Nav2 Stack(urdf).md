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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ6FXYX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDhmFHNxLQGkGzkiRfqpUrifvuq%2FmdLiZqzeQ14lDhchQIhAOgS0fuKYxNR7rybbeFukWwmsMi5iXtwnMyaFYDZlXR7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgwxopnX86PJ1lc84e8q3AM252%2FLRF%2B1kwdDlby%2BrGJmG2PT7Hr9bF9rEU8j0kM0eL6demyYw4GaoS8Vxq5isiMo2zdK8wmmBFCJ7yNM7gXbQj67PTzizZF76bDEihE2rXrs%2FOGX97OAAwYl637LRXemTKd4uuhKEQKn0dtXeVXIpP6RPoEnGT4H7nRpk6CAGf4qE%2FUXc1j2b62el3BKRu5%2Fn63wXogquXqsWuDZgUKDCGFh9D3hTYNUzD9%2F44jNzfRx3HQUK9sgvRVPunJ0YBSaDMJ6PMR%2FZrpmleixpVjjtVfwrTbTRq%2F8%2BLdXzIOIvMFlS%2FSgU0rlGtmpXnwwyoMcuCcqcJCXlvxKk8I0Op8grHpXvlGeMhQLVwcvX%2BBOWexrodYo8zNwhTbGQhNR%2BXhtx9D48UT8mteB8FIGXOsbJ%2B%2FFsAOn1QhjiKpTtcSxZW8GOjWYfqKTiNZlo0q1vQd8cQb8VVweaQF9qnrMExGxEVuvScIvUwp3%2Bfg0G98A5F3Eqft1x1JzdmY0%2F5952DUh2%2FAn5DTrTa0IgODmbAgdbJ9ZopPfZ0eonCPisImaOlalzTGPFaUroYsHAnyThe5%2BLdjwyeBiboUCRvXiwBTXc%2BX3f1G41r7moSHw7%2FtRrY4u2kL5zRb6TkQjzTDUore%2BBjqkAQEc8jw4hcdHrbeg4qi3DIozCiNqEPU%2B3Vx3bd%2FRNHVJwUUQ%2FZHlLwtYfBmBtCPy0UovuqFYZPFhoVlElqcgcJ%2BmEnf2wZeXr70P0Lx4WSeDUj38rtqif%2BjNjPSzIug%2B2C%2FkI8pF3ponSpFbg7Z6udRxAeDgfFtYcZw%2FXHUUzwNpJEjdLC6Njh8c4ZOkFPQtc8fjCeGL9jhL4jGBfnW6DY23YcwE&X-Amz-Signature=36b8916d0ae87dad811dea1490d3a0d71cd4bf0809cc055ac9da64cf5417715f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ6FXYX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDhmFHNxLQGkGzkiRfqpUrifvuq%2FmdLiZqzeQ14lDhchQIhAOgS0fuKYxNR7rybbeFukWwmsMi5iXtwnMyaFYDZlXR7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgwxopnX86PJ1lc84e8q3AM252%2FLRF%2B1kwdDlby%2BrGJmG2PT7Hr9bF9rEU8j0kM0eL6demyYw4GaoS8Vxq5isiMo2zdK8wmmBFCJ7yNM7gXbQj67PTzizZF76bDEihE2rXrs%2FOGX97OAAwYl637LRXemTKd4uuhKEQKn0dtXeVXIpP6RPoEnGT4H7nRpk6CAGf4qE%2FUXc1j2b62el3BKRu5%2Fn63wXogquXqsWuDZgUKDCGFh9D3hTYNUzD9%2F44jNzfRx3HQUK9sgvRVPunJ0YBSaDMJ6PMR%2FZrpmleixpVjjtVfwrTbTRq%2F8%2BLdXzIOIvMFlS%2FSgU0rlGtmpXnwwyoMcuCcqcJCXlvxKk8I0Op8grHpXvlGeMhQLVwcvX%2BBOWexrodYo8zNwhTbGQhNR%2BXhtx9D48UT8mteB8FIGXOsbJ%2B%2FFsAOn1QhjiKpTtcSxZW8GOjWYfqKTiNZlo0q1vQd8cQb8VVweaQF9qnrMExGxEVuvScIvUwp3%2Bfg0G98A5F3Eqft1x1JzdmY0%2F5952DUh2%2FAn5DTrTa0IgODmbAgdbJ9ZopPfZ0eonCPisImaOlalzTGPFaUroYsHAnyThe5%2BLdjwyeBiboUCRvXiwBTXc%2BX3f1G41r7moSHw7%2FtRrY4u2kL5zRb6TkQjzTDUore%2BBjqkAQEc8jw4hcdHrbeg4qi3DIozCiNqEPU%2B3Vx3bd%2FRNHVJwUUQ%2FZHlLwtYfBmBtCPy0UovuqFYZPFhoVlElqcgcJ%2BmEnf2wZeXr70P0Lx4WSeDUj38rtqif%2BjNjPSzIug%2B2C%2FkI8pF3ponSpFbg7Z6udRxAeDgfFtYcZw%2FXHUUzwNpJEjdLC6Njh8c4ZOkFPQtc8fjCeGL9jhL4jGBfnW6DY23YcwE&X-Amz-Signature=4436c04fa9b32ad3ad4f946c5019251fa1cf407f809b44bc26865f96b6113aca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ6FXYX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDhmFHNxLQGkGzkiRfqpUrifvuq%2FmdLiZqzeQ14lDhchQIhAOgS0fuKYxNR7rybbeFukWwmsMi5iXtwnMyaFYDZlXR7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgwxopnX86PJ1lc84e8q3AM252%2FLRF%2B1kwdDlby%2BrGJmG2PT7Hr9bF9rEU8j0kM0eL6demyYw4GaoS8Vxq5isiMo2zdK8wmmBFCJ7yNM7gXbQj67PTzizZF76bDEihE2rXrs%2FOGX97OAAwYl637LRXemTKd4uuhKEQKn0dtXeVXIpP6RPoEnGT4H7nRpk6CAGf4qE%2FUXc1j2b62el3BKRu5%2Fn63wXogquXqsWuDZgUKDCGFh9D3hTYNUzD9%2F44jNzfRx3HQUK9sgvRVPunJ0YBSaDMJ6PMR%2FZrpmleixpVjjtVfwrTbTRq%2F8%2BLdXzIOIvMFlS%2FSgU0rlGtmpXnwwyoMcuCcqcJCXlvxKk8I0Op8grHpXvlGeMhQLVwcvX%2BBOWexrodYo8zNwhTbGQhNR%2BXhtx9D48UT8mteB8FIGXOsbJ%2B%2FFsAOn1QhjiKpTtcSxZW8GOjWYfqKTiNZlo0q1vQd8cQb8VVweaQF9qnrMExGxEVuvScIvUwp3%2Bfg0G98A5F3Eqft1x1JzdmY0%2F5952DUh2%2FAn5DTrTa0IgODmbAgdbJ9ZopPfZ0eonCPisImaOlalzTGPFaUroYsHAnyThe5%2BLdjwyeBiboUCRvXiwBTXc%2BX3f1G41r7moSHw7%2FtRrY4u2kL5zRb6TkQjzTDUore%2BBjqkAQEc8jw4hcdHrbeg4qi3DIozCiNqEPU%2B3Vx3bd%2FRNHVJwUUQ%2FZHlLwtYfBmBtCPy0UovuqFYZPFhoVlElqcgcJ%2BmEnf2wZeXr70P0Lx4WSeDUj38rtqif%2BjNjPSzIug%2B2C%2FkI8pF3ponSpFbg7Z6udRxAeDgfFtYcZw%2FXHUUzwNpJEjdLC6Njh8c4ZOkFPQtc8fjCeGL9jhL4jGBfnW6DY23YcwE&X-Amz-Signature=29941e8b9890562cde7caaf7c28b25d5a640bc93877fe591d70de583f226be86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ6FXYX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDhmFHNxLQGkGzkiRfqpUrifvuq%2FmdLiZqzeQ14lDhchQIhAOgS0fuKYxNR7rybbeFukWwmsMi5iXtwnMyaFYDZlXR7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgwxopnX86PJ1lc84e8q3AM252%2FLRF%2B1kwdDlby%2BrGJmG2PT7Hr9bF9rEU8j0kM0eL6demyYw4GaoS8Vxq5isiMo2zdK8wmmBFCJ7yNM7gXbQj67PTzizZF76bDEihE2rXrs%2FOGX97OAAwYl637LRXemTKd4uuhKEQKn0dtXeVXIpP6RPoEnGT4H7nRpk6CAGf4qE%2FUXc1j2b62el3BKRu5%2Fn63wXogquXqsWuDZgUKDCGFh9D3hTYNUzD9%2F44jNzfRx3HQUK9sgvRVPunJ0YBSaDMJ6PMR%2FZrpmleixpVjjtVfwrTbTRq%2F8%2BLdXzIOIvMFlS%2FSgU0rlGtmpXnwwyoMcuCcqcJCXlvxKk8I0Op8grHpXvlGeMhQLVwcvX%2BBOWexrodYo8zNwhTbGQhNR%2BXhtx9D48UT8mteB8FIGXOsbJ%2B%2FFsAOn1QhjiKpTtcSxZW8GOjWYfqKTiNZlo0q1vQd8cQb8VVweaQF9qnrMExGxEVuvScIvUwp3%2Bfg0G98A5F3Eqft1x1JzdmY0%2F5952DUh2%2FAn5DTrTa0IgODmbAgdbJ9ZopPfZ0eonCPisImaOlalzTGPFaUroYsHAnyThe5%2BLdjwyeBiboUCRvXiwBTXc%2BX3f1G41r7moSHw7%2FtRrY4u2kL5zRb6TkQjzTDUore%2BBjqkAQEc8jw4hcdHrbeg4qi3DIozCiNqEPU%2B3Vx3bd%2FRNHVJwUUQ%2FZHlLwtYfBmBtCPy0UovuqFYZPFhoVlElqcgcJ%2BmEnf2wZeXr70P0Lx4WSeDUj38rtqif%2BjNjPSzIug%2B2C%2FkI8pF3ponSpFbg7Z6udRxAeDgfFtYcZw%2FXHUUzwNpJEjdLC6Njh8c4ZOkFPQtc8fjCeGL9jhL4jGBfnW6DY23YcwE&X-Amz-Signature=41c677d07bfaca009a4c22991337e904f349f9b3023e80ddcc2f5acd7ba79f91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ6FXYX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDhmFHNxLQGkGzkiRfqpUrifvuq%2FmdLiZqzeQ14lDhchQIhAOgS0fuKYxNR7rybbeFukWwmsMi5iXtwnMyaFYDZlXR7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgwxopnX86PJ1lc84e8q3AM252%2FLRF%2B1kwdDlby%2BrGJmG2PT7Hr9bF9rEU8j0kM0eL6demyYw4GaoS8Vxq5isiMo2zdK8wmmBFCJ7yNM7gXbQj67PTzizZF76bDEihE2rXrs%2FOGX97OAAwYl637LRXemTKd4uuhKEQKn0dtXeVXIpP6RPoEnGT4H7nRpk6CAGf4qE%2FUXc1j2b62el3BKRu5%2Fn63wXogquXqsWuDZgUKDCGFh9D3hTYNUzD9%2F44jNzfRx3HQUK9sgvRVPunJ0YBSaDMJ6PMR%2FZrpmleixpVjjtVfwrTbTRq%2F8%2BLdXzIOIvMFlS%2FSgU0rlGtmpXnwwyoMcuCcqcJCXlvxKk8I0Op8grHpXvlGeMhQLVwcvX%2BBOWexrodYo8zNwhTbGQhNR%2BXhtx9D48UT8mteB8FIGXOsbJ%2B%2FFsAOn1QhjiKpTtcSxZW8GOjWYfqKTiNZlo0q1vQd8cQb8VVweaQF9qnrMExGxEVuvScIvUwp3%2Bfg0G98A5F3Eqft1x1JzdmY0%2F5952DUh2%2FAn5DTrTa0IgODmbAgdbJ9ZopPfZ0eonCPisImaOlalzTGPFaUroYsHAnyThe5%2BLdjwyeBiboUCRvXiwBTXc%2BX3f1G41r7moSHw7%2FtRrY4u2kL5zRb6TkQjzTDUore%2BBjqkAQEc8jw4hcdHrbeg4qi3DIozCiNqEPU%2B3Vx3bd%2FRNHVJwUUQ%2FZHlLwtYfBmBtCPy0UovuqFYZPFhoVlElqcgcJ%2BmEnf2wZeXr70P0Lx4WSeDUj38rtqif%2BjNjPSzIug%2B2C%2FkI8pF3ponSpFbg7Z6udRxAeDgfFtYcZw%2FXHUUzwNpJEjdLC6Njh8c4ZOkFPQtc8fjCeGL9jhL4jGBfnW6DY23YcwE&X-Amz-Signature=9d9bcd14869754eba8b5d2c6e1d08b9aa49ac9a0a27a685278cf521d1335614a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ6FXYX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDhmFHNxLQGkGzkiRfqpUrifvuq%2FmdLiZqzeQ14lDhchQIhAOgS0fuKYxNR7rybbeFukWwmsMi5iXtwnMyaFYDZlXR7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgwxopnX86PJ1lc84e8q3AM252%2FLRF%2B1kwdDlby%2BrGJmG2PT7Hr9bF9rEU8j0kM0eL6demyYw4GaoS8Vxq5isiMo2zdK8wmmBFCJ7yNM7gXbQj67PTzizZF76bDEihE2rXrs%2FOGX97OAAwYl637LRXemTKd4uuhKEQKn0dtXeVXIpP6RPoEnGT4H7nRpk6CAGf4qE%2FUXc1j2b62el3BKRu5%2Fn63wXogquXqsWuDZgUKDCGFh9D3hTYNUzD9%2F44jNzfRx3HQUK9sgvRVPunJ0YBSaDMJ6PMR%2FZrpmleixpVjjtVfwrTbTRq%2F8%2BLdXzIOIvMFlS%2FSgU0rlGtmpXnwwyoMcuCcqcJCXlvxKk8I0Op8grHpXvlGeMhQLVwcvX%2BBOWexrodYo8zNwhTbGQhNR%2BXhtx9D48UT8mteB8FIGXOsbJ%2B%2FFsAOn1QhjiKpTtcSxZW8GOjWYfqKTiNZlo0q1vQd8cQb8VVweaQF9qnrMExGxEVuvScIvUwp3%2Bfg0G98A5F3Eqft1x1JzdmY0%2F5952DUh2%2FAn5DTrTa0IgODmbAgdbJ9ZopPfZ0eonCPisImaOlalzTGPFaUroYsHAnyThe5%2BLdjwyeBiboUCRvXiwBTXc%2BX3f1G41r7moSHw7%2FtRrY4u2kL5zRb6TkQjzTDUore%2BBjqkAQEc8jw4hcdHrbeg4qi3DIozCiNqEPU%2B3Vx3bd%2FRNHVJwUUQ%2FZHlLwtYfBmBtCPy0UovuqFYZPFhoVlElqcgcJ%2BmEnf2wZeXr70P0Lx4WSeDUj38rtqif%2BjNjPSzIug%2B2C%2FkI8pF3ponSpFbg7Z6udRxAeDgfFtYcZw%2FXHUUzwNpJEjdLC6Njh8c4ZOkFPQtc8fjCeGL9jhL4jGBfnW6DY23YcwE&X-Amz-Signature=e4e9ca4e56424bb52c848a061e630ddd77175812649ea176d8cd03e632ab616b&X-Amz-SignedHeaders=host&x-id=GetObject)
