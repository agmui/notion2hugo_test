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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXNXAPE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOU6rU0sToM5I3pbvjrQgP8Z%2BsUVo8kDlI40q1guaCqAIhAMQ%2BliRM8ihS18snPbISdOJEt5OsS1MZ%2BeBUgqB%2BfXW7KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPI25%2BXHnWRkRZ24oq3AOS6H6wxeyZUJDmrw70%2BY%2F57dBFYCNMZhxK4JBlDDzB1KH6aPTAqwk4nFiTLsy0PnmNyL4C4SBbW%2BgqCrgWzD65IPC3vM5b%2BS6rZD8l2STIVX1TL4M%2F9Kfu8Km4VcSpz93pnbc6TwssoyALdKVTbeLoY1d%2FRieLfcKrvdogX3z6Q8rCihYU2KXycOzpdAALbnutYX%2BEwKRvet3bcFSGvz0qZ9gglQP%2F0xqgAHCSgQCjJEdmt44IX%2FhFkksqTOfuyi4%2FpLBYsRI1T%2B%2BHMUP8sSZ6BM3nr3utTMJs%2Fqi2tKYlYDlWgbv%2BUQx%2FHPWnPfMD1RjS7bWtBxnSnzCau5ZZIhZv2leUY0jfcWXPJpzBzDjCKwIOrlGrMejz0DgqEu3dTaVxlzsjc4MLveFucq3o9A4wywQysZZcYirhq8Uxk4gNKbqm%2BJTCqvkSdIcwfURsW%2B6fVSQate6lJvktcRY7IVHpm5cTJLMtI7lbrxJ03%2FbqiqjmfiKnxAxdITuo9pqHmqUbGfsvPJCus6e3zgH0u97VjROswpHG4pImBRKVxAvGtl7yomwdn3u7ht3NP2BF7tTelhFDNNJDEHlhaizjmzlEvNQkMgvTERxyzNCWwq0vyeNPKO0DF8VZWmi5vTDy2Zi%2BBjqkAezr4Wj0pLEA75oWWsrXUS%2FyuB9s%2B1j7xUCLSpBlDIeuO5zDgTFM3umeIFbdamFD7vTBjOcyy2tAXVcRGyKtvUJ3mdeZIyIjDUJXl4xrrSMWKZ3sGBSy3c2zwbr85Ikrkmjm5M6vj0X02YwSnPwSSPGw057nALaG%2B7Gota4kV9CgKfP%2F8KmDc4H%2FaX33kPjwg88OyHfw1FzsjpVmO8vOHQ0a5G5Z&X-Amz-Signature=dfc7951b0effb020cf67b4c31bd4c8af016526d2da049e60c615403ad269999d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXNXAPE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOU6rU0sToM5I3pbvjrQgP8Z%2BsUVo8kDlI40q1guaCqAIhAMQ%2BliRM8ihS18snPbISdOJEt5OsS1MZ%2BeBUgqB%2BfXW7KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPI25%2BXHnWRkRZ24oq3AOS6H6wxeyZUJDmrw70%2BY%2F57dBFYCNMZhxK4JBlDDzB1KH6aPTAqwk4nFiTLsy0PnmNyL4C4SBbW%2BgqCrgWzD65IPC3vM5b%2BS6rZD8l2STIVX1TL4M%2F9Kfu8Km4VcSpz93pnbc6TwssoyALdKVTbeLoY1d%2FRieLfcKrvdogX3z6Q8rCihYU2KXycOzpdAALbnutYX%2BEwKRvet3bcFSGvz0qZ9gglQP%2F0xqgAHCSgQCjJEdmt44IX%2FhFkksqTOfuyi4%2FpLBYsRI1T%2B%2BHMUP8sSZ6BM3nr3utTMJs%2Fqi2tKYlYDlWgbv%2BUQx%2FHPWnPfMD1RjS7bWtBxnSnzCau5ZZIhZv2leUY0jfcWXPJpzBzDjCKwIOrlGrMejz0DgqEu3dTaVxlzsjc4MLveFucq3o9A4wywQysZZcYirhq8Uxk4gNKbqm%2BJTCqvkSdIcwfURsW%2B6fVSQate6lJvktcRY7IVHpm5cTJLMtI7lbrxJ03%2FbqiqjmfiKnxAxdITuo9pqHmqUbGfsvPJCus6e3zgH0u97VjROswpHG4pImBRKVxAvGtl7yomwdn3u7ht3NP2BF7tTelhFDNNJDEHlhaizjmzlEvNQkMgvTERxyzNCWwq0vyeNPKO0DF8VZWmi5vTDy2Zi%2BBjqkAezr4Wj0pLEA75oWWsrXUS%2FyuB9s%2B1j7xUCLSpBlDIeuO5zDgTFM3umeIFbdamFD7vTBjOcyy2tAXVcRGyKtvUJ3mdeZIyIjDUJXl4xrrSMWKZ3sGBSy3c2zwbr85Ikrkmjm5M6vj0X02YwSnPwSSPGw057nALaG%2B7Gota4kV9CgKfP%2F8KmDc4H%2FaX33kPjwg88OyHfw1FzsjpVmO8vOHQ0a5G5Z&X-Amz-Signature=961b826611974904df24b3233bdb372b1f4824fcd0c4d22602744b9766e11be6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXNXAPE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOU6rU0sToM5I3pbvjrQgP8Z%2BsUVo8kDlI40q1guaCqAIhAMQ%2BliRM8ihS18snPbISdOJEt5OsS1MZ%2BeBUgqB%2BfXW7KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPI25%2BXHnWRkRZ24oq3AOS6H6wxeyZUJDmrw70%2BY%2F57dBFYCNMZhxK4JBlDDzB1KH6aPTAqwk4nFiTLsy0PnmNyL4C4SBbW%2BgqCrgWzD65IPC3vM5b%2BS6rZD8l2STIVX1TL4M%2F9Kfu8Km4VcSpz93pnbc6TwssoyALdKVTbeLoY1d%2FRieLfcKrvdogX3z6Q8rCihYU2KXycOzpdAALbnutYX%2BEwKRvet3bcFSGvz0qZ9gglQP%2F0xqgAHCSgQCjJEdmt44IX%2FhFkksqTOfuyi4%2FpLBYsRI1T%2B%2BHMUP8sSZ6BM3nr3utTMJs%2Fqi2tKYlYDlWgbv%2BUQx%2FHPWnPfMD1RjS7bWtBxnSnzCau5ZZIhZv2leUY0jfcWXPJpzBzDjCKwIOrlGrMejz0DgqEu3dTaVxlzsjc4MLveFucq3o9A4wywQysZZcYirhq8Uxk4gNKbqm%2BJTCqvkSdIcwfURsW%2B6fVSQate6lJvktcRY7IVHpm5cTJLMtI7lbrxJ03%2FbqiqjmfiKnxAxdITuo9pqHmqUbGfsvPJCus6e3zgH0u97VjROswpHG4pImBRKVxAvGtl7yomwdn3u7ht3NP2BF7tTelhFDNNJDEHlhaizjmzlEvNQkMgvTERxyzNCWwq0vyeNPKO0DF8VZWmi5vTDy2Zi%2BBjqkAezr4Wj0pLEA75oWWsrXUS%2FyuB9s%2B1j7xUCLSpBlDIeuO5zDgTFM3umeIFbdamFD7vTBjOcyy2tAXVcRGyKtvUJ3mdeZIyIjDUJXl4xrrSMWKZ3sGBSy3c2zwbr85Ikrkmjm5M6vj0X02YwSnPwSSPGw057nALaG%2B7Gota4kV9CgKfP%2F8KmDc4H%2FaX33kPjwg88OyHfw1FzsjpVmO8vOHQ0a5G5Z&X-Amz-Signature=0bab80ffd7501d712a02cbc0e576a3146256598350966d0c9a6c6159b668ec15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXNXAPE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOU6rU0sToM5I3pbvjrQgP8Z%2BsUVo8kDlI40q1guaCqAIhAMQ%2BliRM8ihS18snPbISdOJEt5OsS1MZ%2BeBUgqB%2BfXW7KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPI25%2BXHnWRkRZ24oq3AOS6H6wxeyZUJDmrw70%2BY%2F57dBFYCNMZhxK4JBlDDzB1KH6aPTAqwk4nFiTLsy0PnmNyL4C4SBbW%2BgqCrgWzD65IPC3vM5b%2BS6rZD8l2STIVX1TL4M%2F9Kfu8Km4VcSpz93pnbc6TwssoyALdKVTbeLoY1d%2FRieLfcKrvdogX3z6Q8rCihYU2KXycOzpdAALbnutYX%2BEwKRvet3bcFSGvz0qZ9gglQP%2F0xqgAHCSgQCjJEdmt44IX%2FhFkksqTOfuyi4%2FpLBYsRI1T%2B%2BHMUP8sSZ6BM3nr3utTMJs%2Fqi2tKYlYDlWgbv%2BUQx%2FHPWnPfMD1RjS7bWtBxnSnzCau5ZZIhZv2leUY0jfcWXPJpzBzDjCKwIOrlGrMejz0DgqEu3dTaVxlzsjc4MLveFucq3o9A4wywQysZZcYirhq8Uxk4gNKbqm%2BJTCqvkSdIcwfURsW%2B6fVSQate6lJvktcRY7IVHpm5cTJLMtI7lbrxJ03%2FbqiqjmfiKnxAxdITuo9pqHmqUbGfsvPJCus6e3zgH0u97VjROswpHG4pImBRKVxAvGtl7yomwdn3u7ht3NP2BF7tTelhFDNNJDEHlhaizjmzlEvNQkMgvTERxyzNCWwq0vyeNPKO0DF8VZWmi5vTDy2Zi%2BBjqkAezr4Wj0pLEA75oWWsrXUS%2FyuB9s%2B1j7xUCLSpBlDIeuO5zDgTFM3umeIFbdamFD7vTBjOcyy2tAXVcRGyKtvUJ3mdeZIyIjDUJXl4xrrSMWKZ3sGBSy3c2zwbr85Ikrkmjm5M6vj0X02YwSnPwSSPGw057nALaG%2B7Gota4kV9CgKfP%2F8KmDc4H%2FaX33kPjwg88OyHfw1FzsjpVmO8vOHQ0a5G5Z&X-Amz-Signature=e2cce45b8aaed7985bef689c1990223ace11c5e12c4aa17ac337ac85da07764c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXNXAPE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOU6rU0sToM5I3pbvjrQgP8Z%2BsUVo8kDlI40q1guaCqAIhAMQ%2BliRM8ihS18snPbISdOJEt5OsS1MZ%2BeBUgqB%2BfXW7KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPI25%2BXHnWRkRZ24oq3AOS6H6wxeyZUJDmrw70%2BY%2F57dBFYCNMZhxK4JBlDDzB1KH6aPTAqwk4nFiTLsy0PnmNyL4C4SBbW%2BgqCrgWzD65IPC3vM5b%2BS6rZD8l2STIVX1TL4M%2F9Kfu8Km4VcSpz93pnbc6TwssoyALdKVTbeLoY1d%2FRieLfcKrvdogX3z6Q8rCihYU2KXycOzpdAALbnutYX%2BEwKRvet3bcFSGvz0qZ9gglQP%2F0xqgAHCSgQCjJEdmt44IX%2FhFkksqTOfuyi4%2FpLBYsRI1T%2B%2BHMUP8sSZ6BM3nr3utTMJs%2Fqi2tKYlYDlWgbv%2BUQx%2FHPWnPfMD1RjS7bWtBxnSnzCau5ZZIhZv2leUY0jfcWXPJpzBzDjCKwIOrlGrMejz0DgqEu3dTaVxlzsjc4MLveFucq3o9A4wywQysZZcYirhq8Uxk4gNKbqm%2BJTCqvkSdIcwfURsW%2B6fVSQate6lJvktcRY7IVHpm5cTJLMtI7lbrxJ03%2FbqiqjmfiKnxAxdITuo9pqHmqUbGfsvPJCus6e3zgH0u97VjROswpHG4pImBRKVxAvGtl7yomwdn3u7ht3NP2BF7tTelhFDNNJDEHlhaizjmzlEvNQkMgvTERxyzNCWwq0vyeNPKO0DF8VZWmi5vTDy2Zi%2BBjqkAezr4Wj0pLEA75oWWsrXUS%2FyuB9s%2B1j7xUCLSpBlDIeuO5zDgTFM3umeIFbdamFD7vTBjOcyy2tAXVcRGyKtvUJ3mdeZIyIjDUJXl4xrrSMWKZ3sGBSy3c2zwbr85Ikrkmjm5M6vj0X02YwSnPwSSPGw057nALaG%2B7Gota4kV9CgKfP%2F8KmDc4H%2FaX33kPjwg88OyHfw1FzsjpVmO8vOHQ0a5G5Z&X-Amz-Signature=26cca2e4b5b9f568301c136fe424ca035ffd1a10ac8f73a962f742456421ede7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXNXAPE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOU6rU0sToM5I3pbvjrQgP8Z%2BsUVo8kDlI40q1guaCqAIhAMQ%2BliRM8ihS18snPbISdOJEt5OsS1MZ%2BeBUgqB%2BfXW7KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPI25%2BXHnWRkRZ24oq3AOS6H6wxeyZUJDmrw70%2BY%2F57dBFYCNMZhxK4JBlDDzB1KH6aPTAqwk4nFiTLsy0PnmNyL4C4SBbW%2BgqCrgWzD65IPC3vM5b%2BS6rZD8l2STIVX1TL4M%2F9Kfu8Km4VcSpz93pnbc6TwssoyALdKVTbeLoY1d%2FRieLfcKrvdogX3z6Q8rCihYU2KXycOzpdAALbnutYX%2BEwKRvet3bcFSGvz0qZ9gglQP%2F0xqgAHCSgQCjJEdmt44IX%2FhFkksqTOfuyi4%2FpLBYsRI1T%2B%2BHMUP8sSZ6BM3nr3utTMJs%2Fqi2tKYlYDlWgbv%2BUQx%2FHPWnPfMD1RjS7bWtBxnSnzCau5ZZIhZv2leUY0jfcWXPJpzBzDjCKwIOrlGrMejz0DgqEu3dTaVxlzsjc4MLveFucq3o9A4wywQysZZcYirhq8Uxk4gNKbqm%2BJTCqvkSdIcwfURsW%2B6fVSQate6lJvktcRY7IVHpm5cTJLMtI7lbrxJ03%2FbqiqjmfiKnxAxdITuo9pqHmqUbGfsvPJCus6e3zgH0u97VjROswpHG4pImBRKVxAvGtl7yomwdn3u7ht3NP2BF7tTelhFDNNJDEHlhaizjmzlEvNQkMgvTERxyzNCWwq0vyeNPKO0DF8VZWmi5vTDy2Zi%2BBjqkAezr4Wj0pLEA75oWWsrXUS%2FyuB9s%2B1j7xUCLSpBlDIeuO5zDgTFM3umeIFbdamFD7vTBjOcyy2tAXVcRGyKtvUJ3mdeZIyIjDUJXl4xrrSMWKZ3sGBSy3c2zwbr85Ikrkmjm5M6vj0X02YwSnPwSSPGw057nALaG%2B7Gota4kV9CgKfP%2F8KmDc4H%2FaX33kPjwg88OyHfw1FzsjpVmO8vOHQ0a5G5Z&X-Amz-Signature=0f5bfa1c3db68075a2b63eef0dc1bff567a69709eeb5ae04fd7550ab965ca53a&X-Amz-SignedHeaders=host&x-id=GetObject)
