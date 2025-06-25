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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHUQM4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFxhN2BXj2f7dzoZuafbPw2DBMjMbZaFh%2F8w8toZ4c9AAiEAgYEhPwytU0XS6y%2BKeKUz2AW%2BHq0q1MuL7G2l6b%2F8HlIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOrtr%2FFZEwf1jEVMfircAylkPWoL1Hi6xD%2BwR7YKWS1UzAerAZ8%2B4eACfb%2B1RKg3nppLxaWoUGcsg1soxLmqC9dbm83hpR%2B9xHQZ756VvM2eyGYv4ju5IfQWDdGY1BK6uk5lqk7M75Vr%2BdZ3BIajoZuQytfruzcCxyBYlm04TUVkT89GDU6KB0Jja4oJIzSpiZqF9SvE4HsotgGde9G3Ci2qWUgMa0PiXzl9hbDTO7khWjkgY8eB5vvSklJlfb2JTko%2FJF6GgVcm0DqJt6lvyFrVEYjY1a4jyJytamcbvMkhcs2I6YIUMgnj3RsRVsVToqSv9RhobF6Wtz%2BJw5IeX%2BWu6nwU6m2c8uBmErSbg3dPrK7uXsTBCLrmmBRgcE9jcYvG9ZMINn8n3RDxhEh9Uz26Jd9NfNMZFaarRMe%2BEtFFxXxuERjVTgHkUzspvkwf5%2BQtlKCmEal8Pw%2BfuWJTKBn5BbHRwtjuEm5Al6U0zn8DkrSHMZ534jBbyZFMAVqAqMyuZ8p5BSFwClxFduHEkqLcrSFWcStNOp6BLrnvq606DDW7PYdNWZycyy6bltREQN0zKDVMcMQ7wZ20KbKksb58kPPFTu5UklpNr1CC%2B9Az27Q6jAIYcINLHP08nlIlpthR4vR70yhjcCq8MI2Q78IGOqUBTKCvcCB0GhoWuh6GZjMrHhBZSSmhfOEQKgyYwUR%2ByGFmCQM%2FzSAgruTYvAVtdh4wGVxqyy%2BrHH9rOmSXd%2B%2BAboChbCXmXw7exie66mSzTB7rRjrXMhRrJ8%2BAOkCQz8SWDwZO1ZCMi7C5oLUN%2FXrwYy%2FPKg2NmonHQCmmnewfBU3n0hBdXk4wYw0NoUXbX3r4jt4or76deuwg59nCS0g1xVBsetRH&X-Amz-Signature=f46e4bb1859307dbac30716c8a35cf04f8abd6dee836ebb74bb12a6b2ea05a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHUQM4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFxhN2BXj2f7dzoZuafbPw2DBMjMbZaFh%2F8w8toZ4c9AAiEAgYEhPwytU0XS6y%2BKeKUz2AW%2BHq0q1MuL7G2l6b%2F8HlIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOrtr%2FFZEwf1jEVMfircAylkPWoL1Hi6xD%2BwR7YKWS1UzAerAZ8%2B4eACfb%2B1RKg3nppLxaWoUGcsg1soxLmqC9dbm83hpR%2B9xHQZ756VvM2eyGYv4ju5IfQWDdGY1BK6uk5lqk7M75Vr%2BdZ3BIajoZuQytfruzcCxyBYlm04TUVkT89GDU6KB0Jja4oJIzSpiZqF9SvE4HsotgGde9G3Ci2qWUgMa0PiXzl9hbDTO7khWjkgY8eB5vvSklJlfb2JTko%2FJF6GgVcm0DqJt6lvyFrVEYjY1a4jyJytamcbvMkhcs2I6YIUMgnj3RsRVsVToqSv9RhobF6Wtz%2BJw5IeX%2BWu6nwU6m2c8uBmErSbg3dPrK7uXsTBCLrmmBRgcE9jcYvG9ZMINn8n3RDxhEh9Uz26Jd9NfNMZFaarRMe%2BEtFFxXxuERjVTgHkUzspvkwf5%2BQtlKCmEal8Pw%2BfuWJTKBn5BbHRwtjuEm5Al6U0zn8DkrSHMZ534jBbyZFMAVqAqMyuZ8p5BSFwClxFduHEkqLcrSFWcStNOp6BLrnvq606DDW7PYdNWZycyy6bltREQN0zKDVMcMQ7wZ20KbKksb58kPPFTu5UklpNr1CC%2B9Az27Q6jAIYcINLHP08nlIlpthR4vR70yhjcCq8MI2Q78IGOqUBTKCvcCB0GhoWuh6GZjMrHhBZSSmhfOEQKgyYwUR%2ByGFmCQM%2FzSAgruTYvAVtdh4wGVxqyy%2BrHH9rOmSXd%2B%2BAboChbCXmXw7exie66mSzTB7rRjrXMhRrJ8%2BAOkCQz8SWDwZO1ZCMi7C5oLUN%2FXrwYy%2FPKg2NmonHQCmmnewfBU3n0hBdXk4wYw0NoUXbX3r4jt4or76deuwg59nCS0g1xVBsetRH&X-Amz-Signature=64265cb180086a092c1cd63dcb464f511c5d37bdbfbbfa6937c31d9341fc20cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHUQM4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFxhN2BXj2f7dzoZuafbPw2DBMjMbZaFh%2F8w8toZ4c9AAiEAgYEhPwytU0XS6y%2BKeKUz2AW%2BHq0q1MuL7G2l6b%2F8HlIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOrtr%2FFZEwf1jEVMfircAylkPWoL1Hi6xD%2BwR7YKWS1UzAerAZ8%2B4eACfb%2B1RKg3nppLxaWoUGcsg1soxLmqC9dbm83hpR%2B9xHQZ756VvM2eyGYv4ju5IfQWDdGY1BK6uk5lqk7M75Vr%2BdZ3BIajoZuQytfruzcCxyBYlm04TUVkT89GDU6KB0Jja4oJIzSpiZqF9SvE4HsotgGde9G3Ci2qWUgMa0PiXzl9hbDTO7khWjkgY8eB5vvSklJlfb2JTko%2FJF6GgVcm0DqJt6lvyFrVEYjY1a4jyJytamcbvMkhcs2I6YIUMgnj3RsRVsVToqSv9RhobF6Wtz%2BJw5IeX%2BWu6nwU6m2c8uBmErSbg3dPrK7uXsTBCLrmmBRgcE9jcYvG9ZMINn8n3RDxhEh9Uz26Jd9NfNMZFaarRMe%2BEtFFxXxuERjVTgHkUzspvkwf5%2BQtlKCmEal8Pw%2BfuWJTKBn5BbHRwtjuEm5Al6U0zn8DkrSHMZ534jBbyZFMAVqAqMyuZ8p5BSFwClxFduHEkqLcrSFWcStNOp6BLrnvq606DDW7PYdNWZycyy6bltREQN0zKDVMcMQ7wZ20KbKksb58kPPFTu5UklpNr1CC%2B9Az27Q6jAIYcINLHP08nlIlpthR4vR70yhjcCq8MI2Q78IGOqUBTKCvcCB0GhoWuh6GZjMrHhBZSSmhfOEQKgyYwUR%2ByGFmCQM%2FzSAgruTYvAVtdh4wGVxqyy%2BrHH9rOmSXd%2B%2BAboChbCXmXw7exie66mSzTB7rRjrXMhRrJ8%2BAOkCQz8SWDwZO1ZCMi7C5oLUN%2FXrwYy%2FPKg2NmonHQCmmnewfBU3n0hBdXk4wYw0NoUXbX3r4jt4or76deuwg59nCS0g1xVBsetRH&X-Amz-Signature=fab04e4b300837eda99e258c0d3da8e286bad0188c2660735d17066de392bbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHUQM4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFxhN2BXj2f7dzoZuafbPw2DBMjMbZaFh%2F8w8toZ4c9AAiEAgYEhPwytU0XS6y%2BKeKUz2AW%2BHq0q1MuL7G2l6b%2F8HlIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOrtr%2FFZEwf1jEVMfircAylkPWoL1Hi6xD%2BwR7YKWS1UzAerAZ8%2B4eACfb%2B1RKg3nppLxaWoUGcsg1soxLmqC9dbm83hpR%2B9xHQZ756VvM2eyGYv4ju5IfQWDdGY1BK6uk5lqk7M75Vr%2BdZ3BIajoZuQytfruzcCxyBYlm04TUVkT89GDU6KB0Jja4oJIzSpiZqF9SvE4HsotgGde9G3Ci2qWUgMa0PiXzl9hbDTO7khWjkgY8eB5vvSklJlfb2JTko%2FJF6GgVcm0DqJt6lvyFrVEYjY1a4jyJytamcbvMkhcs2I6YIUMgnj3RsRVsVToqSv9RhobF6Wtz%2BJw5IeX%2BWu6nwU6m2c8uBmErSbg3dPrK7uXsTBCLrmmBRgcE9jcYvG9ZMINn8n3RDxhEh9Uz26Jd9NfNMZFaarRMe%2BEtFFxXxuERjVTgHkUzspvkwf5%2BQtlKCmEal8Pw%2BfuWJTKBn5BbHRwtjuEm5Al6U0zn8DkrSHMZ534jBbyZFMAVqAqMyuZ8p5BSFwClxFduHEkqLcrSFWcStNOp6BLrnvq606DDW7PYdNWZycyy6bltREQN0zKDVMcMQ7wZ20KbKksb58kPPFTu5UklpNr1CC%2B9Az27Q6jAIYcINLHP08nlIlpthR4vR70yhjcCq8MI2Q78IGOqUBTKCvcCB0GhoWuh6GZjMrHhBZSSmhfOEQKgyYwUR%2ByGFmCQM%2FzSAgruTYvAVtdh4wGVxqyy%2BrHH9rOmSXd%2B%2BAboChbCXmXw7exie66mSzTB7rRjrXMhRrJ8%2BAOkCQz8SWDwZO1ZCMi7C5oLUN%2FXrwYy%2FPKg2NmonHQCmmnewfBU3n0hBdXk4wYw0NoUXbX3r4jt4or76deuwg59nCS0g1xVBsetRH&X-Amz-Signature=975957990ef1cc7bff954d7fb7bad4fd46ef807a7ca4bed95c91926b150135e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHUQM4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFxhN2BXj2f7dzoZuafbPw2DBMjMbZaFh%2F8w8toZ4c9AAiEAgYEhPwytU0XS6y%2BKeKUz2AW%2BHq0q1MuL7G2l6b%2F8HlIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOrtr%2FFZEwf1jEVMfircAylkPWoL1Hi6xD%2BwR7YKWS1UzAerAZ8%2B4eACfb%2B1RKg3nppLxaWoUGcsg1soxLmqC9dbm83hpR%2B9xHQZ756VvM2eyGYv4ju5IfQWDdGY1BK6uk5lqk7M75Vr%2BdZ3BIajoZuQytfruzcCxyBYlm04TUVkT89GDU6KB0Jja4oJIzSpiZqF9SvE4HsotgGde9G3Ci2qWUgMa0PiXzl9hbDTO7khWjkgY8eB5vvSklJlfb2JTko%2FJF6GgVcm0DqJt6lvyFrVEYjY1a4jyJytamcbvMkhcs2I6YIUMgnj3RsRVsVToqSv9RhobF6Wtz%2BJw5IeX%2BWu6nwU6m2c8uBmErSbg3dPrK7uXsTBCLrmmBRgcE9jcYvG9ZMINn8n3RDxhEh9Uz26Jd9NfNMZFaarRMe%2BEtFFxXxuERjVTgHkUzspvkwf5%2BQtlKCmEal8Pw%2BfuWJTKBn5BbHRwtjuEm5Al6U0zn8DkrSHMZ534jBbyZFMAVqAqMyuZ8p5BSFwClxFduHEkqLcrSFWcStNOp6BLrnvq606DDW7PYdNWZycyy6bltREQN0zKDVMcMQ7wZ20KbKksb58kPPFTu5UklpNr1CC%2B9Az27Q6jAIYcINLHP08nlIlpthR4vR70yhjcCq8MI2Q78IGOqUBTKCvcCB0GhoWuh6GZjMrHhBZSSmhfOEQKgyYwUR%2ByGFmCQM%2FzSAgruTYvAVtdh4wGVxqyy%2BrHH9rOmSXd%2B%2BAboChbCXmXw7exie66mSzTB7rRjrXMhRrJ8%2BAOkCQz8SWDwZO1ZCMi7C5oLUN%2FXrwYy%2FPKg2NmonHQCmmnewfBU3n0hBdXk4wYw0NoUXbX3r4jt4or76deuwg59nCS0g1xVBsetRH&X-Amz-Signature=a047b45dc086edc08d48e785aea6fdb547aecb605a59c2b0e3239d23ffaecd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHUQM4L%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFxhN2BXj2f7dzoZuafbPw2DBMjMbZaFh%2F8w8toZ4c9AAiEAgYEhPwytU0XS6y%2BKeKUz2AW%2BHq0q1MuL7G2l6b%2F8HlIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOrtr%2FFZEwf1jEVMfircAylkPWoL1Hi6xD%2BwR7YKWS1UzAerAZ8%2B4eACfb%2B1RKg3nppLxaWoUGcsg1soxLmqC9dbm83hpR%2B9xHQZ756VvM2eyGYv4ju5IfQWDdGY1BK6uk5lqk7M75Vr%2BdZ3BIajoZuQytfruzcCxyBYlm04TUVkT89GDU6KB0Jja4oJIzSpiZqF9SvE4HsotgGde9G3Ci2qWUgMa0PiXzl9hbDTO7khWjkgY8eB5vvSklJlfb2JTko%2FJF6GgVcm0DqJt6lvyFrVEYjY1a4jyJytamcbvMkhcs2I6YIUMgnj3RsRVsVToqSv9RhobF6Wtz%2BJw5IeX%2BWu6nwU6m2c8uBmErSbg3dPrK7uXsTBCLrmmBRgcE9jcYvG9ZMINn8n3RDxhEh9Uz26Jd9NfNMZFaarRMe%2BEtFFxXxuERjVTgHkUzspvkwf5%2BQtlKCmEal8Pw%2BfuWJTKBn5BbHRwtjuEm5Al6U0zn8DkrSHMZ534jBbyZFMAVqAqMyuZ8p5BSFwClxFduHEkqLcrSFWcStNOp6BLrnvq606DDW7PYdNWZycyy6bltREQN0zKDVMcMQ7wZ20KbKksb58kPPFTu5UklpNr1CC%2B9Az27Q6jAIYcINLHP08nlIlpthR4vR70yhjcCq8MI2Q78IGOqUBTKCvcCB0GhoWuh6GZjMrHhBZSSmhfOEQKgyYwUR%2ByGFmCQM%2FzSAgruTYvAVtdh4wGVxqyy%2BrHH9rOmSXd%2B%2BAboChbCXmXw7exie66mSzTB7rRjrXMhRrJ8%2BAOkCQz8SWDwZO1ZCMi7C5oLUN%2FXrwYy%2FPKg2NmonHQCmmnewfBU3n0hBdXk4wYw0NoUXbX3r4jt4or76deuwg59nCS0g1xVBsetRH&X-Amz-Signature=206c51e56190b2304075199606592d57ca06b5d7d4fe21eea94609d5668d55ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
