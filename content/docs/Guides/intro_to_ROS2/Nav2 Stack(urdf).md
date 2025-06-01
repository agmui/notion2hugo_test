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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6GVNG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG3pUS71cl75hNR2TzVEwC8wF0yPwD0Fp43O19iOgL8tAiEAw%2FQ9akr1HS1GTx9LVKJBXaUKpSB5ErZf8nNhkymHNNYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj8n7BNVP0xbNhP%2FircA1fQ1Cy1Pl%2Bp08zW3j%2BTyb5v2dWN6FtTyDuNKvAKsaJaDt6Rrb30ZYCCbPBIpVy%2FCB0wYHtcJ1dSgijvpS807PxPIk2dM7z1q4qbb9yol0nbO6iMjaYcsz95Aa54yX%2FeLZoGV6IOrOF%2Bih3ZWs%2FYADC8%2FrHgDFJxirEvAq9N88sqBJd0Fl1SVlvOqIYqiP55%2Bye77yNo4BeWZMTU9ewACbZ4W7t%2F31I6zKyWZiTiaHE6VXDwngmszC7rkfc%2B4YNAMQqsYJIUU3HlXpIrkVRMtrdKShdFUAxdDVoLJqAnV2jXGT6SB3YAS%2FNEUdb1iOuxFKyf9c0rkgy%2FrO%2F%2BWqadlcqP9E0osuMlAuxLlcoYCPHjsAxT8U9QJoFIDp4vaODKwKcPqpob0ZzKtkBDeqRRQ76yKiSnHIxlMxmcwP%2FMAXw7NURxxUeMcKd5FIU6CcS3e8tns5WU%2BVztwDCslFd9srNtwYvBWZ9NDm9Z7VQnf8kQbBOZ72OHfK4HOK5TkQMK%2FHwl3Xb2oVI4V0PU0Khwh10wi7s%2F78%2BbghCo4l%2B6xG2ZF%2Fmrn0lzt8013adllLwEuNoodNUJSfV2GNF1ZXj%2FpH8fN4uqclUu97KHItt1wYp4i72vNmMNobzs4TKUMJqv7sEGOqUB7HTZTt5gFdgubAPw8V35WXgbV7W6yh3F4KZGMhVR%2FYmBEabGwNgk2L%2FmSazES5QwrMsWsTgpZugJzX5gjNjzgjeRBXkbsqEuNigFLZ0Xmip4bG%2BMs6xLSQwAnLlJHTK0wrEiOE0WQ79IIA9JaOd5gHRSl6Ggg6AtnHKNHEJlmnfchf9ot00A2HuoWLQSInxySGR5OvMN1C9Tm5Bqkmh%2FlcsUxCbl&X-Amz-Signature=883aa316f343708d795397347f01f0c8b1bbf09217e89f4e8278ccd7cd7603e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6GVNG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG3pUS71cl75hNR2TzVEwC8wF0yPwD0Fp43O19iOgL8tAiEAw%2FQ9akr1HS1GTx9LVKJBXaUKpSB5ErZf8nNhkymHNNYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj8n7BNVP0xbNhP%2FircA1fQ1Cy1Pl%2Bp08zW3j%2BTyb5v2dWN6FtTyDuNKvAKsaJaDt6Rrb30ZYCCbPBIpVy%2FCB0wYHtcJ1dSgijvpS807PxPIk2dM7z1q4qbb9yol0nbO6iMjaYcsz95Aa54yX%2FeLZoGV6IOrOF%2Bih3ZWs%2FYADC8%2FrHgDFJxirEvAq9N88sqBJd0Fl1SVlvOqIYqiP55%2Bye77yNo4BeWZMTU9ewACbZ4W7t%2F31I6zKyWZiTiaHE6VXDwngmszC7rkfc%2B4YNAMQqsYJIUU3HlXpIrkVRMtrdKShdFUAxdDVoLJqAnV2jXGT6SB3YAS%2FNEUdb1iOuxFKyf9c0rkgy%2FrO%2F%2BWqadlcqP9E0osuMlAuxLlcoYCPHjsAxT8U9QJoFIDp4vaODKwKcPqpob0ZzKtkBDeqRRQ76yKiSnHIxlMxmcwP%2FMAXw7NURxxUeMcKd5FIU6CcS3e8tns5WU%2BVztwDCslFd9srNtwYvBWZ9NDm9Z7VQnf8kQbBOZ72OHfK4HOK5TkQMK%2FHwl3Xb2oVI4V0PU0Khwh10wi7s%2F78%2BbghCo4l%2B6xG2ZF%2Fmrn0lzt8013adllLwEuNoodNUJSfV2GNF1ZXj%2FpH8fN4uqclUu97KHItt1wYp4i72vNmMNobzs4TKUMJqv7sEGOqUB7HTZTt5gFdgubAPw8V35WXgbV7W6yh3F4KZGMhVR%2FYmBEabGwNgk2L%2FmSazES5QwrMsWsTgpZugJzX5gjNjzgjeRBXkbsqEuNigFLZ0Xmip4bG%2BMs6xLSQwAnLlJHTK0wrEiOE0WQ79IIA9JaOd5gHRSl6Ggg6AtnHKNHEJlmnfchf9ot00A2HuoWLQSInxySGR5OvMN1C9Tm5Bqkmh%2FlcsUxCbl&X-Amz-Signature=7c9bc38d6125f914b37923aca4ea97782b221bfda5004697b20096fe28ae17ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6GVNG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG3pUS71cl75hNR2TzVEwC8wF0yPwD0Fp43O19iOgL8tAiEAw%2FQ9akr1HS1GTx9LVKJBXaUKpSB5ErZf8nNhkymHNNYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj8n7BNVP0xbNhP%2FircA1fQ1Cy1Pl%2Bp08zW3j%2BTyb5v2dWN6FtTyDuNKvAKsaJaDt6Rrb30ZYCCbPBIpVy%2FCB0wYHtcJ1dSgijvpS807PxPIk2dM7z1q4qbb9yol0nbO6iMjaYcsz95Aa54yX%2FeLZoGV6IOrOF%2Bih3ZWs%2FYADC8%2FrHgDFJxirEvAq9N88sqBJd0Fl1SVlvOqIYqiP55%2Bye77yNo4BeWZMTU9ewACbZ4W7t%2F31I6zKyWZiTiaHE6VXDwngmszC7rkfc%2B4YNAMQqsYJIUU3HlXpIrkVRMtrdKShdFUAxdDVoLJqAnV2jXGT6SB3YAS%2FNEUdb1iOuxFKyf9c0rkgy%2FrO%2F%2BWqadlcqP9E0osuMlAuxLlcoYCPHjsAxT8U9QJoFIDp4vaODKwKcPqpob0ZzKtkBDeqRRQ76yKiSnHIxlMxmcwP%2FMAXw7NURxxUeMcKd5FIU6CcS3e8tns5WU%2BVztwDCslFd9srNtwYvBWZ9NDm9Z7VQnf8kQbBOZ72OHfK4HOK5TkQMK%2FHwl3Xb2oVI4V0PU0Khwh10wi7s%2F78%2BbghCo4l%2B6xG2ZF%2Fmrn0lzt8013adllLwEuNoodNUJSfV2GNF1ZXj%2FpH8fN4uqclUu97KHItt1wYp4i72vNmMNobzs4TKUMJqv7sEGOqUB7HTZTt5gFdgubAPw8V35WXgbV7W6yh3F4KZGMhVR%2FYmBEabGwNgk2L%2FmSazES5QwrMsWsTgpZugJzX5gjNjzgjeRBXkbsqEuNigFLZ0Xmip4bG%2BMs6xLSQwAnLlJHTK0wrEiOE0WQ79IIA9JaOd5gHRSl6Ggg6AtnHKNHEJlmnfchf9ot00A2HuoWLQSInxySGR5OvMN1C9Tm5Bqkmh%2FlcsUxCbl&X-Amz-Signature=2aa6746bc395a53eba9b2d90d07306f6490d961f51a20874c46bd5b25dd7400f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6GVNG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG3pUS71cl75hNR2TzVEwC8wF0yPwD0Fp43O19iOgL8tAiEAw%2FQ9akr1HS1GTx9LVKJBXaUKpSB5ErZf8nNhkymHNNYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj8n7BNVP0xbNhP%2FircA1fQ1Cy1Pl%2Bp08zW3j%2BTyb5v2dWN6FtTyDuNKvAKsaJaDt6Rrb30ZYCCbPBIpVy%2FCB0wYHtcJ1dSgijvpS807PxPIk2dM7z1q4qbb9yol0nbO6iMjaYcsz95Aa54yX%2FeLZoGV6IOrOF%2Bih3ZWs%2FYADC8%2FrHgDFJxirEvAq9N88sqBJd0Fl1SVlvOqIYqiP55%2Bye77yNo4BeWZMTU9ewACbZ4W7t%2F31I6zKyWZiTiaHE6VXDwngmszC7rkfc%2B4YNAMQqsYJIUU3HlXpIrkVRMtrdKShdFUAxdDVoLJqAnV2jXGT6SB3YAS%2FNEUdb1iOuxFKyf9c0rkgy%2FrO%2F%2BWqadlcqP9E0osuMlAuxLlcoYCPHjsAxT8U9QJoFIDp4vaODKwKcPqpob0ZzKtkBDeqRRQ76yKiSnHIxlMxmcwP%2FMAXw7NURxxUeMcKd5FIU6CcS3e8tns5WU%2BVztwDCslFd9srNtwYvBWZ9NDm9Z7VQnf8kQbBOZ72OHfK4HOK5TkQMK%2FHwl3Xb2oVI4V0PU0Khwh10wi7s%2F78%2BbghCo4l%2B6xG2ZF%2Fmrn0lzt8013adllLwEuNoodNUJSfV2GNF1ZXj%2FpH8fN4uqclUu97KHItt1wYp4i72vNmMNobzs4TKUMJqv7sEGOqUB7HTZTt5gFdgubAPw8V35WXgbV7W6yh3F4KZGMhVR%2FYmBEabGwNgk2L%2FmSazES5QwrMsWsTgpZugJzX5gjNjzgjeRBXkbsqEuNigFLZ0Xmip4bG%2BMs6xLSQwAnLlJHTK0wrEiOE0WQ79IIA9JaOd5gHRSl6Ggg6AtnHKNHEJlmnfchf9ot00A2HuoWLQSInxySGR5OvMN1C9Tm5Bqkmh%2FlcsUxCbl&X-Amz-Signature=39338d0163849ea0c34cc0a078f90f93382997575a06676d336e62a849014597&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6GVNG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG3pUS71cl75hNR2TzVEwC8wF0yPwD0Fp43O19iOgL8tAiEAw%2FQ9akr1HS1GTx9LVKJBXaUKpSB5ErZf8nNhkymHNNYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj8n7BNVP0xbNhP%2FircA1fQ1Cy1Pl%2Bp08zW3j%2BTyb5v2dWN6FtTyDuNKvAKsaJaDt6Rrb30ZYCCbPBIpVy%2FCB0wYHtcJ1dSgijvpS807PxPIk2dM7z1q4qbb9yol0nbO6iMjaYcsz95Aa54yX%2FeLZoGV6IOrOF%2Bih3ZWs%2FYADC8%2FrHgDFJxirEvAq9N88sqBJd0Fl1SVlvOqIYqiP55%2Bye77yNo4BeWZMTU9ewACbZ4W7t%2F31I6zKyWZiTiaHE6VXDwngmszC7rkfc%2B4YNAMQqsYJIUU3HlXpIrkVRMtrdKShdFUAxdDVoLJqAnV2jXGT6SB3YAS%2FNEUdb1iOuxFKyf9c0rkgy%2FrO%2F%2BWqadlcqP9E0osuMlAuxLlcoYCPHjsAxT8U9QJoFIDp4vaODKwKcPqpob0ZzKtkBDeqRRQ76yKiSnHIxlMxmcwP%2FMAXw7NURxxUeMcKd5FIU6CcS3e8tns5WU%2BVztwDCslFd9srNtwYvBWZ9NDm9Z7VQnf8kQbBOZ72OHfK4HOK5TkQMK%2FHwl3Xb2oVI4V0PU0Khwh10wi7s%2F78%2BbghCo4l%2B6xG2ZF%2Fmrn0lzt8013adllLwEuNoodNUJSfV2GNF1ZXj%2FpH8fN4uqclUu97KHItt1wYp4i72vNmMNobzs4TKUMJqv7sEGOqUB7HTZTt5gFdgubAPw8V35WXgbV7W6yh3F4KZGMhVR%2FYmBEabGwNgk2L%2FmSazES5QwrMsWsTgpZugJzX5gjNjzgjeRBXkbsqEuNigFLZ0Xmip4bG%2BMs6xLSQwAnLlJHTK0wrEiOE0WQ79IIA9JaOd5gHRSl6Ggg6AtnHKNHEJlmnfchf9ot00A2HuoWLQSInxySGR5OvMN1C9Tm5Bqkmh%2FlcsUxCbl&X-Amz-Signature=18ffd87fb53db9c5febc0ff00dc81d5b25fba7bf6f26f5ea99fd6d6db8468ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6GVNG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIG3pUS71cl75hNR2TzVEwC8wF0yPwD0Fp43O19iOgL8tAiEAw%2FQ9akr1HS1GTx9LVKJBXaUKpSB5ErZf8nNhkymHNNYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj8n7BNVP0xbNhP%2FircA1fQ1Cy1Pl%2Bp08zW3j%2BTyb5v2dWN6FtTyDuNKvAKsaJaDt6Rrb30ZYCCbPBIpVy%2FCB0wYHtcJ1dSgijvpS807PxPIk2dM7z1q4qbb9yol0nbO6iMjaYcsz95Aa54yX%2FeLZoGV6IOrOF%2Bih3ZWs%2FYADC8%2FrHgDFJxirEvAq9N88sqBJd0Fl1SVlvOqIYqiP55%2Bye77yNo4BeWZMTU9ewACbZ4W7t%2F31I6zKyWZiTiaHE6VXDwngmszC7rkfc%2B4YNAMQqsYJIUU3HlXpIrkVRMtrdKShdFUAxdDVoLJqAnV2jXGT6SB3YAS%2FNEUdb1iOuxFKyf9c0rkgy%2FrO%2F%2BWqadlcqP9E0osuMlAuxLlcoYCPHjsAxT8U9QJoFIDp4vaODKwKcPqpob0ZzKtkBDeqRRQ76yKiSnHIxlMxmcwP%2FMAXw7NURxxUeMcKd5FIU6CcS3e8tns5WU%2BVztwDCslFd9srNtwYvBWZ9NDm9Z7VQnf8kQbBOZ72OHfK4HOK5TkQMK%2FHwl3Xb2oVI4V0PU0Khwh10wi7s%2F78%2BbghCo4l%2B6xG2ZF%2Fmrn0lzt8013adllLwEuNoodNUJSfV2GNF1ZXj%2FpH8fN4uqclUu97KHItt1wYp4i72vNmMNobzs4TKUMJqv7sEGOqUB7HTZTt5gFdgubAPw8V35WXgbV7W6yh3F4KZGMhVR%2FYmBEabGwNgk2L%2FmSazES5QwrMsWsTgpZugJzX5gjNjzgjeRBXkbsqEuNigFLZ0Xmip4bG%2BMs6xLSQwAnLlJHTK0wrEiOE0WQ79IIA9JaOd5gHRSl6Ggg6AtnHKNHEJlmnfchf9ot00A2HuoWLQSInxySGR5OvMN1C9Tm5Bqkmh%2FlcsUxCbl&X-Amz-Signature=b152b5be748adbad0d3c816f28d23c9e1c5710e3af933de4251e4a15015a0c5f&X-Amz-SignedHeaders=host&x-id=GetObject)
