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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNBNJFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClH%2FbwYm%2BWthHmDHzx%2FuIcUHULWuQQroZx1rJgXsrkqgIgTdM1A1jrq%2FBaBsC4ivImFx07GZW4VOce0vcHJh1YA5sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGfFzDS3puJpc7fqlSrcAweJl%2Ff7XKdPm5DN%2Fo%2B4CGM9LQnTwR7fCcmY%2FfqSKu7Gay2rIzNDni%2F%2B4XvyPsT48fPF2ugovVC1822k5Ihfx%2Bzi2Ev6wtusji%2BJGNXmj2MeEnMk6TbgG2TG9GKOstGZXbG47jRlx8cVW2tB3xUcX669BWr8q4WHeHbg%2Fm6EgyaG3S2aec7Wrq4bqTrHFs3CTV%2F%2FL0W2MrqMAndm5pikzEJ5Dg3l%2BShRud1ozZ%2BRuYP7JdSjXVVhOZ9%2BdDrpSj4nLA6yeKOf2fXpF5pHV2KhKMjg01XBzZBvzXLtdGjNV0qZYlnJc%2FAFaBbyUv9fRg8nHJgRfKFBtLrs63gkUjCucgPvq4%2BaY1iKzlL6ehY23r6jT1gM17a8%2BDgkSgCoO47%2BZIhaH4FJQaHR%2FbjS8YrB6QuotfLt%2FPaBQ6ax3DfD6rNUG2dAB41zcS3vHlWM9cxhzAKGkoedN5tl1Vz%2FPElqzqYW0ghs3PPe6aiZrgr81ODrccPwyzpOGXnbL400CQm%2FQP27nSQ8MXtdYZqJ55gCRjg0QJX5YsW4oxrtJ0n4V2EWVk6FYRvzks9zJo1mxXKxMV6ScNcAqklh3IkbT5cKezoNVgMICUtqLLTU1burajb89m7OiYj0AtcU%2FwntMNmCosMGOqUBZCm%2B%2B%2Bte%2BKbdGuGj0Gm1EcQRVR8QM%2B%2BtX13JS8Fl6VGU50x78%2FpMt5Ys7cmvGtjQtSVjJbrlzk%2BCU1J8VzqIIriA56COUmzKMkmhVQtzKX5dlXWqHqEYc4vDb9S30SzuwxoCuOxXzxO4QG5SkEXvuLW1e9ZlTEZkUJKBCFJriBlj5fT3Z6Le9sDXr5Qb8IJLY362%2BHNInNymTg45HRTmKLHzKhbM&X-Amz-Signature=f7ae0cc46395c45da7c97466346a254c0edf085d9155870ad9374fad355d8deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNBNJFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClH%2FbwYm%2BWthHmDHzx%2FuIcUHULWuQQroZx1rJgXsrkqgIgTdM1A1jrq%2FBaBsC4ivImFx07GZW4VOce0vcHJh1YA5sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGfFzDS3puJpc7fqlSrcAweJl%2Ff7XKdPm5DN%2Fo%2B4CGM9LQnTwR7fCcmY%2FfqSKu7Gay2rIzNDni%2F%2B4XvyPsT48fPF2ugovVC1822k5Ihfx%2Bzi2Ev6wtusji%2BJGNXmj2MeEnMk6TbgG2TG9GKOstGZXbG47jRlx8cVW2tB3xUcX669BWr8q4WHeHbg%2Fm6EgyaG3S2aec7Wrq4bqTrHFs3CTV%2F%2FL0W2MrqMAndm5pikzEJ5Dg3l%2BShRud1ozZ%2BRuYP7JdSjXVVhOZ9%2BdDrpSj4nLA6yeKOf2fXpF5pHV2KhKMjg01XBzZBvzXLtdGjNV0qZYlnJc%2FAFaBbyUv9fRg8nHJgRfKFBtLrs63gkUjCucgPvq4%2BaY1iKzlL6ehY23r6jT1gM17a8%2BDgkSgCoO47%2BZIhaH4FJQaHR%2FbjS8YrB6QuotfLt%2FPaBQ6ax3DfD6rNUG2dAB41zcS3vHlWM9cxhzAKGkoedN5tl1Vz%2FPElqzqYW0ghs3PPe6aiZrgr81ODrccPwyzpOGXnbL400CQm%2FQP27nSQ8MXtdYZqJ55gCRjg0QJX5YsW4oxrtJ0n4V2EWVk6FYRvzks9zJo1mxXKxMV6ScNcAqklh3IkbT5cKezoNVgMICUtqLLTU1burajb89m7OiYj0AtcU%2FwntMNmCosMGOqUBZCm%2B%2B%2Bte%2BKbdGuGj0Gm1EcQRVR8QM%2B%2BtX13JS8Fl6VGU50x78%2FpMt5Ys7cmvGtjQtSVjJbrlzk%2BCU1J8VzqIIriA56COUmzKMkmhVQtzKX5dlXWqHqEYc4vDb9S30SzuwxoCuOxXzxO4QG5SkEXvuLW1e9ZlTEZkUJKBCFJriBlj5fT3Z6Le9sDXr5Qb8IJLY362%2BHNInNymTg45HRTmKLHzKhbM&X-Amz-Signature=4d4069eae75f094e5d4ac41c2773c5d24d6beb94e5af59e0f41420cf095ad07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNBNJFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClH%2FbwYm%2BWthHmDHzx%2FuIcUHULWuQQroZx1rJgXsrkqgIgTdM1A1jrq%2FBaBsC4ivImFx07GZW4VOce0vcHJh1YA5sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGfFzDS3puJpc7fqlSrcAweJl%2Ff7XKdPm5DN%2Fo%2B4CGM9LQnTwR7fCcmY%2FfqSKu7Gay2rIzNDni%2F%2B4XvyPsT48fPF2ugovVC1822k5Ihfx%2Bzi2Ev6wtusji%2BJGNXmj2MeEnMk6TbgG2TG9GKOstGZXbG47jRlx8cVW2tB3xUcX669BWr8q4WHeHbg%2Fm6EgyaG3S2aec7Wrq4bqTrHFs3CTV%2F%2FL0W2MrqMAndm5pikzEJ5Dg3l%2BShRud1ozZ%2BRuYP7JdSjXVVhOZ9%2BdDrpSj4nLA6yeKOf2fXpF5pHV2KhKMjg01XBzZBvzXLtdGjNV0qZYlnJc%2FAFaBbyUv9fRg8nHJgRfKFBtLrs63gkUjCucgPvq4%2BaY1iKzlL6ehY23r6jT1gM17a8%2BDgkSgCoO47%2BZIhaH4FJQaHR%2FbjS8YrB6QuotfLt%2FPaBQ6ax3DfD6rNUG2dAB41zcS3vHlWM9cxhzAKGkoedN5tl1Vz%2FPElqzqYW0ghs3PPe6aiZrgr81ODrccPwyzpOGXnbL400CQm%2FQP27nSQ8MXtdYZqJ55gCRjg0QJX5YsW4oxrtJ0n4V2EWVk6FYRvzks9zJo1mxXKxMV6ScNcAqklh3IkbT5cKezoNVgMICUtqLLTU1burajb89m7OiYj0AtcU%2FwntMNmCosMGOqUBZCm%2B%2B%2Bte%2BKbdGuGj0Gm1EcQRVR8QM%2B%2BtX13JS8Fl6VGU50x78%2FpMt5Ys7cmvGtjQtSVjJbrlzk%2BCU1J8VzqIIriA56COUmzKMkmhVQtzKX5dlXWqHqEYc4vDb9S30SzuwxoCuOxXzxO4QG5SkEXvuLW1e9ZlTEZkUJKBCFJriBlj5fT3Z6Le9sDXr5Qb8IJLY362%2BHNInNymTg45HRTmKLHzKhbM&X-Amz-Signature=13733e5c220825aae3675195b8d8d4d4eec2ee969900a10ea7f2a65239847069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNBNJFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClH%2FbwYm%2BWthHmDHzx%2FuIcUHULWuQQroZx1rJgXsrkqgIgTdM1A1jrq%2FBaBsC4ivImFx07GZW4VOce0vcHJh1YA5sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGfFzDS3puJpc7fqlSrcAweJl%2Ff7XKdPm5DN%2Fo%2B4CGM9LQnTwR7fCcmY%2FfqSKu7Gay2rIzNDni%2F%2B4XvyPsT48fPF2ugovVC1822k5Ihfx%2Bzi2Ev6wtusji%2BJGNXmj2MeEnMk6TbgG2TG9GKOstGZXbG47jRlx8cVW2tB3xUcX669BWr8q4WHeHbg%2Fm6EgyaG3S2aec7Wrq4bqTrHFs3CTV%2F%2FL0W2MrqMAndm5pikzEJ5Dg3l%2BShRud1ozZ%2BRuYP7JdSjXVVhOZ9%2BdDrpSj4nLA6yeKOf2fXpF5pHV2KhKMjg01XBzZBvzXLtdGjNV0qZYlnJc%2FAFaBbyUv9fRg8nHJgRfKFBtLrs63gkUjCucgPvq4%2BaY1iKzlL6ehY23r6jT1gM17a8%2BDgkSgCoO47%2BZIhaH4FJQaHR%2FbjS8YrB6QuotfLt%2FPaBQ6ax3DfD6rNUG2dAB41zcS3vHlWM9cxhzAKGkoedN5tl1Vz%2FPElqzqYW0ghs3PPe6aiZrgr81ODrccPwyzpOGXnbL400CQm%2FQP27nSQ8MXtdYZqJ55gCRjg0QJX5YsW4oxrtJ0n4V2EWVk6FYRvzks9zJo1mxXKxMV6ScNcAqklh3IkbT5cKezoNVgMICUtqLLTU1burajb89m7OiYj0AtcU%2FwntMNmCosMGOqUBZCm%2B%2B%2Bte%2BKbdGuGj0Gm1EcQRVR8QM%2B%2BtX13JS8Fl6VGU50x78%2FpMt5Ys7cmvGtjQtSVjJbrlzk%2BCU1J8VzqIIriA56COUmzKMkmhVQtzKX5dlXWqHqEYc4vDb9S30SzuwxoCuOxXzxO4QG5SkEXvuLW1e9ZlTEZkUJKBCFJriBlj5fT3Z6Le9sDXr5Qb8IJLY362%2BHNInNymTg45HRTmKLHzKhbM&X-Amz-Signature=e42133761cd165ae4c0181f35411442d99aa6a32e8c02c9944808888e912e6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNBNJFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClH%2FbwYm%2BWthHmDHzx%2FuIcUHULWuQQroZx1rJgXsrkqgIgTdM1A1jrq%2FBaBsC4ivImFx07GZW4VOce0vcHJh1YA5sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGfFzDS3puJpc7fqlSrcAweJl%2Ff7XKdPm5DN%2Fo%2B4CGM9LQnTwR7fCcmY%2FfqSKu7Gay2rIzNDni%2F%2B4XvyPsT48fPF2ugovVC1822k5Ihfx%2Bzi2Ev6wtusji%2BJGNXmj2MeEnMk6TbgG2TG9GKOstGZXbG47jRlx8cVW2tB3xUcX669BWr8q4WHeHbg%2Fm6EgyaG3S2aec7Wrq4bqTrHFs3CTV%2F%2FL0W2MrqMAndm5pikzEJ5Dg3l%2BShRud1ozZ%2BRuYP7JdSjXVVhOZ9%2BdDrpSj4nLA6yeKOf2fXpF5pHV2KhKMjg01XBzZBvzXLtdGjNV0qZYlnJc%2FAFaBbyUv9fRg8nHJgRfKFBtLrs63gkUjCucgPvq4%2BaY1iKzlL6ehY23r6jT1gM17a8%2BDgkSgCoO47%2BZIhaH4FJQaHR%2FbjS8YrB6QuotfLt%2FPaBQ6ax3DfD6rNUG2dAB41zcS3vHlWM9cxhzAKGkoedN5tl1Vz%2FPElqzqYW0ghs3PPe6aiZrgr81ODrccPwyzpOGXnbL400CQm%2FQP27nSQ8MXtdYZqJ55gCRjg0QJX5YsW4oxrtJ0n4V2EWVk6FYRvzks9zJo1mxXKxMV6ScNcAqklh3IkbT5cKezoNVgMICUtqLLTU1burajb89m7OiYj0AtcU%2FwntMNmCosMGOqUBZCm%2B%2B%2Bte%2BKbdGuGj0Gm1EcQRVR8QM%2B%2BtX13JS8Fl6VGU50x78%2FpMt5Ys7cmvGtjQtSVjJbrlzk%2BCU1J8VzqIIriA56COUmzKMkmhVQtzKX5dlXWqHqEYc4vDb9S30SzuwxoCuOxXzxO4QG5SkEXvuLW1e9ZlTEZkUJKBCFJriBlj5fT3Z6Le9sDXr5Qb8IJLY362%2BHNInNymTg45HRTmKLHzKhbM&X-Amz-Signature=d3b677871c77ea468d1c2361823b8b3bdbffc8a6674861c0ffd5f7fbf37e0ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNBNJFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQClH%2FbwYm%2BWthHmDHzx%2FuIcUHULWuQQroZx1rJgXsrkqgIgTdM1A1jrq%2FBaBsC4ivImFx07GZW4VOce0vcHJh1YA5sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGfFzDS3puJpc7fqlSrcAweJl%2Ff7XKdPm5DN%2Fo%2B4CGM9LQnTwR7fCcmY%2FfqSKu7Gay2rIzNDni%2F%2B4XvyPsT48fPF2ugovVC1822k5Ihfx%2Bzi2Ev6wtusji%2BJGNXmj2MeEnMk6TbgG2TG9GKOstGZXbG47jRlx8cVW2tB3xUcX669BWr8q4WHeHbg%2Fm6EgyaG3S2aec7Wrq4bqTrHFs3CTV%2F%2FL0W2MrqMAndm5pikzEJ5Dg3l%2BShRud1ozZ%2BRuYP7JdSjXVVhOZ9%2BdDrpSj4nLA6yeKOf2fXpF5pHV2KhKMjg01XBzZBvzXLtdGjNV0qZYlnJc%2FAFaBbyUv9fRg8nHJgRfKFBtLrs63gkUjCucgPvq4%2BaY1iKzlL6ehY23r6jT1gM17a8%2BDgkSgCoO47%2BZIhaH4FJQaHR%2FbjS8YrB6QuotfLt%2FPaBQ6ax3DfD6rNUG2dAB41zcS3vHlWM9cxhzAKGkoedN5tl1Vz%2FPElqzqYW0ghs3PPe6aiZrgr81ODrccPwyzpOGXnbL400CQm%2FQP27nSQ8MXtdYZqJ55gCRjg0QJX5YsW4oxrtJ0n4V2EWVk6FYRvzks9zJo1mxXKxMV6ScNcAqklh3IkbT5cKezoNVgMICUtqLLTU1burajb89m7OiYj0AtcU%2FwntMNmCosMGOqUBZCm%2B%2B%2Bte%2BKbdGuGj0Gm1EcQRVR8QM%2B%2BtX13JS8Fl6VGU50x78%2FpMt5Ys7cmvGtjQtSVjJbrlzk%2BCU1J8VzqIIriA56COUmzKMkmhVQtzKX5dlXWqHqEYc4vDb9S30SzuwxoCuOxXzxO4QG5SkEXvuLW1e9ZlTEZkUJKBCFJriBlj5fT3Z6Le9sDXr5Qb8IJLY362%2BHNInNymTg45HRTmKLHzKhbM&X-Amz-Signature=8398d2d619a26fa471d462cf62e8675eec8160611af9c7ce1f3e86a556940fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
