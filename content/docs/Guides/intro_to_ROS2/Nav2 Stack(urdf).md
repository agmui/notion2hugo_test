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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY6U5VU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58Ew2%2BbshqI7gzLOjPJotRtqu0cZTcRH7jb0NZf36KQIhAN7GJHnlp8dfmN6DpRdhvXKSEC4Ig5Lh3VpEDHZkKiW6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lPTiJKHi%2B0lHCHIq3AMrbhguxQnsMiSUwPT2xwFpQJi3qNJT3%2BFAvUqxa9f9pWFC08TjmB7BycmkECR09jcSJyNljN6PJkTXq%2FIfqLmYMINf6RxOSykA%2Ffn0HRGaD04jOC4JRP%2F8suEyS8GMKjP0SXBqBBg3TzY4Zy3Vt0Hl7InQk0D0Q0Ow0X93vTRRVmj3vek184BZx6BoRFFxMrRi7z9GjuP%2Fj5MVhoI6Inx9CiP9Drf%2BYlw5OhGZTO%2F0Baoh5PFXamlmI%2F%2BJ%2Bo3QbEdQEMxGH1GlYGYUajcZXtYD69lc2MjyQ4xmy0uRWrjGbJCw6jZKW2oxPXW4vsUUFUJk%2BtKpVSbnb7j0hJoEVmOTCgli4sXC1hKjS4E3w0AxrUTrbzPs%2FXocghtxIwNWtACESiZxo0LVMkj9zYcnAVUXkhnyJ4%2BzLCsjpD4uD0W6K6iNdWwMQ6i3DfM7J3HUZohUhWj90juQ5751xrPPJoGpwqhAt0Z24wj8Lhy8NyG1kPo07Mdskz%2FAiFI%2BoE2IMWha%2FEddlkNE9vTlCCQVGReCcE9hrYHuxnPWe%2F%2BPo%2BYzuUIlEE7jy7do5xkeXkixkKSbukZIAsG5zbJHmM64NVoJujT1D2HTRdNkBXJPb3UeRJtoNPgT4tY1EIFA4zCB1cPDBjqkAc6SpEY2%2FRj9RHZ3mnld%2FiZwQUl9qUdVHiAafeM4S%2F5q9HESVrbBWmuCLL0UA99ltKTUNHnYV%2B%2Bi9HUBUzJ2FcshHE2nBFSHS9QYLpSuxQqkuvy3hPKCB9tlwPWSPKcIfmhSyh7ZBsdEQx9l1VApNs7ebiqFthV8Ld3uA5oNPK47zxEc0jTfNmFvusrUcjHEdPZTnUROa1A6P2RtaR0swYE6It%2B2&X-Amz-Signature=63c0927f4b0798924dc62dced5bb38b80073830305502fb5b79697639b6242e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY6U5VU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58Ew2%2BbshqI7gzLOjPJotRtqu0cZTcRH7jb0NZf36KQIhAN7GJHnlp8dfmN6DpRdhvXKSEC4Ig5Lh3VpEDHZkKiW6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lPTiJKHi%2B0lHCHIq3AMrbhguxQnsMiSUwPT2xwFpQJi3qNJT3%2BFAvUqxa9f9pWFC08TjmB7BycmkECR09jcSJyNljN6PJkTXq%2FIfqLmYMINf6RxOSykA%2Ffn0HRGaD04jOC4JRP%2F8suEyS8GMKjP0SXBqBBg3TzY4Zy3Vt0Hl7InQk0D0Q0Ow0X93vTRRVmj3vek184BZx6BoRFFxMrRi7z9GjuP%2Fj5MVhoI6Inx9CiP9Drf%2BYlw5OhGZTO%2F0Baoh5PFXamlmI%2F%2BJ%2Bo3QbEdQEMxGH1GlYGYUajcZXtYD69lc2MjyQ4xmy0uRWrjGbJCw6jZKW2oxPXW4vsUUFUJk%2BtKpVSbnb7j0hJoEVmOTCgli4sXC1hKjS4E3w0AxrUTrbzPs%2FXocghtxIwNWtACESiZxo0LVMkj9zYcnAVUXkhnyJ4%2BzLCsjpD4uD0W6K6iNdWwMQ6i3DfM7J3HUZohUhWj90juQ5751xrPPJoGpwqhAt0Z24wj8Lhy8NyG1kPo07Mdskz%2FAiFI%2BoE2IMWha%2FEddlkNE9vTlCCQVGReCcE9hrYHuxnPWe%2F%2BPo%2BYzuUIlEE7jy7do5xkeXkixkKSbukZIAsG5zbJHmM64NVoJujT1D2HTRdNkBXJPb3UeRJtoNPgT4tY1EIFA4zCB1cPDBjqkAc6SpEY2%2FRj9RHZ3mnld%2FiZwQUl9qUdVHiAafeM4S%2F5q9HESVrbBWmuCLL0UA99ltKTUNHnYV%2B%2Bi9HUBUzJ2FcshHE2nBFSHS9QYLpSuxQqkuvy3hPKCB9tlwPWSPKcIfmhSyh7ZBsdEQx9l1VApNs7ebiqFthV8Ld3uA5oNPK47zxEc0jTfNmFvusrUcjHEdPZTnUROa1A6P2RtaR0swYE6It%2B2&X-Amz-Signature=dfeaba6092ef84a01031baa7d302d2411b367eee4b5a2466987ac2a5afe523c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY6U5VU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58Ew2%2BbshqI7gzLOjPJotRtqu0cZTcRH7jb0NZf36KQIhAN7GJHnlp8dfmN6DpRdhvXKSEC4Ig5Lh3VpEDHZkKiW6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lPTiJKHi%2B0lHCHIq3AMrbhguxQnsMiSUwPT2xwFpQJi3qNJT3%2BFAvUqxa9f9pWFC08TjmB7BycmkECR09jcSJyNljN6PJkTXq%2FIfqLmYMINf6RxOSykA%2Ffn0HRGaD04jOC4JRP%2F8suEyS8GMKjP0SXBqBBg3TzY4Zy3Vt0Hl7InQk0D0Q0Ow0X93vTRRVmj3vek184BZx6BoRFFxMrRi7z9GjuP%2Fj5MVhoI6Inx9CiP9Drf%2BYlw5OhGZTO%2F0Baoh5PFXamlmI%2F%2BJ%2Bo3QbEdQEMxGH1GlYGYUajcZXtYD69lc2MjyQ4xmy0uRWrjGbJCw6jZKW2oxPXW4vsUUFUJk%2BtKpVSbnb7j0hJoEVmOTCgli4sXC1hKjS4E3w0AxrUTrbzPs%2FXocghtxIwNWtACESiZxo0LVMkj9zYcnAVUXkhnyJ4%2BzLCsjpD4uD0W6K6iNdWwMQ6i3DfM7J3HUZohUhWj90juQ5751xrPPJoGpwqhAt0Z24wj8Lhy8NyG1kPo07Mdskz%2FAiFI%2BoE2IMWha%2FEddlkNE9vTlCCQVGReCcE9hrYHuxnPWe%2F%2BPo%2BYzuUIlEE7jy7do5xkeXkixkKSbukZIAsG5zbJHmM64NVoJujT1D2HTRdNkBXJPb3UeRJtoNPgT4tY1EIFA4zCB1cPDBjqkAc6SpEY2%2FRj9RHZ3mnld%2FiZwQUl9qUdVHiAafeM4S%2F5q9HESVrbBWmuCLL0UA99ltKTUNHnYV%2B%2Bi9HUBUzJ2FcshHE2nBFSHS9QYLpSuxQqkuvy3hPKCB9tlwPWSPKcIfmhSyh7ZBsdEQx9l1VApNs7ebiqFthV8Ld3uA5oNPK47zxEc0jTfNmFvusrUcjHEdPZTnUROa1A6P2RtaR0swYE6It%2B2&X-Amz-Signature=097596d71127e073508969828b6cc3f58bcc844bf499a7dafeb47db35bfee05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY6U5VU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58Ew2%2BbshqI7gzLOjPJotRtqu0cZTcRH7jb0NZf36KQIhAN7GJHnlp8dfmN6DpRdhvXKSEC4Ig5Lh3VpEDHZkKiW6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lPTiJKHi%2B0lHCHIq3AMrbhguxQnsMiSUwPT2xwFpQJi3qNJT3%2BFAvUqxa9f9pWFC08TjmB7BycmkECR09jcSJyNljN6PJkTXq%2FIfqLmYMINf6RxOSykA%2Ffn0HRGaD04jOC4JRP%2F8suEyS8GMKjP0SXBqBBg3TzY4Zy3Vt0Hl7InQk0D0Q0Ow0X93vTRRVmj3vek184BZx6BoRFFxMrRi7z9GjuP%2Fj5MVhoI6Inx9CiP9Drf%2BYlw5OhGZTO%2F0Baoh5PFXamlmI%2F%2BJ%2Bo3QbEdQEMxGH1GlYGYUajcZXtYD69lc2MjyQ4xmy0uRWrjGbJCw6jZKW2oxPXW4vsUUFUJk%2BtKpVSbnb7j0hJoEVmOTCgli4sXC1hKjS4E3w0AxrUTrbzPs%2FXocghtxIwNWtACESiZxo0LVMkj9zYcnAVUXkhnyJ4%2BzLCsjpD4uD0W6K6iNdWwMQ6i3DfM7J3HUZohUhWj90juQ5751xrPPJoGpwqhAt0Z24wj8Lhy8NyG1kPo07Mdskz%2FAiFI%2BoE2IMWha%2FEddlkNE9vTlCCQVGReCcE9hrYHuxnPWe%2F%2BPo%2BYzuUIlEE7jy7do5xkeXkixkKSbukZIAsG5zbJHmM64NVoJujT1D2HTRdNkBXJPb3UeRJtoNPgT4tY1EIFA4zCB1cPDBjqkAc6SpEY2%2FRj9RHZ3mnld%2FiZwQUl9qUdVHiAafeM4S%2F5q9HESVrbBWmuCLL0UA99ltKTUNHnYV%2B%2Bi9HUBUzJ2FcshHE2nBFSHS9QYLpSuxQqkuvy3hPKCB9tlwPWSPKcIfmhSyh7ZBsdEQx9l1VApNs7ebiqFthV8Ld3uA5oNPK47zxEc0jTfNmFvusrUcjHEdPZTnUROa1A6P2RtaR0swYE6It%2B2&X-Amz-Signature=f281a935219177fc031ee6932f0d69a80b568d321d328fe0a57a63b79a1f65ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY6U5VU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58Ew2%2BbshqI7gzLOjPJotRtqu0cZTcRH7jb0NZf36KQIhAN7GJHnlp8dfmN6DpRdhvXKSEC4Ig5Lh3VpEDHZkKiW6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lPTiJKHi%2B0lHCHIq3AMrbhguxQnsMiSUwPT2xwFpQJi3qNJT3%2BFAvUqxa9f9pWFC08TjmB7BycmkECR09jcSJyNljN6PJkTXq%2FIfqLmYMINf6RxOSykA%2Ffn0HRGaD04jOC4JRP%2F8suEyS8GMKjP0SXBqBBg3TzY4Zy3Vt0Hl7InQk0D0Q0Ow0X93vTRRVmj3vek184BZx6BoRFFxMrRi7z9GjuP%2Fj5MVhoI6Inx9CiP9Drf%2BYlw5OhGZTO%2F0Baoh5PFXamlmI%2F%2BJ%2Bo3QbEdQEMxGH1GlYGYUajcZXtYD69lc2MjyQ4xmy0uRWrjGbJCw6jZKW2oxPXW4vsUUFUJk%2BtKpVSbnb7j0hJoEVmOTCgli4sXC1hKjS4E3w0AxrUTrbzPs%2FXocghtxIwNWtACESiZxo0LVMkj9zYcnAVUXkhnyJ4%2BzLCsjpD4uD0W6K6iNdWwMQ6i3DfM7J3HUZohUhWj90juQ5751xrPPJoGpwqhAt0Z24wj8Lhy8NyG1kPo07Mdskz%2FAiFI%2BoE2IMWha%2FEddlkNE9vTlCCQVGReCcE9hrYHuxnPWe%2F%2BPo%2BYzuUIlEE7jy7do5xkeXkixkKSbukZIAsG5zbJHmM64NVoJujT1D2HTRdNkBXJPb3UeRJtoNPgT4tY1EIFA4zCB1cPDBjqkAc6SpEY2%2FRj9RHZ3mnld%2FiZwQUl9qUdVHiAafeM4S%2F5q9HESVrbBWmuCLL0UA99ltKTUNHnYV%2B%2Bi9HUBUzJ2FcshHE2nBFSHS9QYLpSuxQqkuvy3hPKCB9tlwPWSPKcIfmhSyh7ZBsdEQx9l1VApNs7ebiqFthV8Ld3uA5oNPK47zxEc0jTfNmFvusrUcjHEdPZTnUROa1A6P2RtaR0swYE6It%2B2&X-Amz-Signature=e0b550f4a70487f96841d364491ab250b9a2eb5a6750cedb02f99c13c4599fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYY6U5VU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58Ew2%2BbshqI7gzLOjPJotRtqu0cZTcRH7jb0NZf36KQIhAN7GJHnlp8dfmN6DpRdhvXKSEC4Ig5Lh3VpEDHZkKiW6KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1lPTiJKHi%2B0lHCHIq3AMrbhguxQnsMiSUwPT2xwFpQJi3qNJT3%2BFAvUqxa9f9pWFC08TjmB7BycmkECR09jcSJyNljN6PJkTXq%2FIfqLmYMINf6RxOSykA%2Ffn0HRGaD04jOC4JRP%2F8suEyS8GMKjP0SXBqBBg3TzY4Zy3Vt0Hl7InQk0D0Q0Ow0X93vTRRVmj3vek184BZx6BoRFFxMrRi7z9GjuP%2Fj5MVhoI6Inx9CiP9Drf%2BYlw5OhGZTO%2F0Baoh5PFXamlmI%2F%2BJ%2Bo3QbEdQEMxGH1GlYGYUajcZXtYD69lc2MjyQ4xmy0uRWrjGbJCw6jZKW2oxPXW4vsUUFUJk%2BtKpVSbnb7j0hJoEVmOTCgli4sXC1hKjS4E3w0AxrUTrbzPs%2FXocghtxIwNWtACESiZxo0LVMkj9zYcnAVUXkhnyJ4%2BzLCsjpD4uD0W6K6iNdWwMQ6i3DfM7J3HUZohUhWj90juQ5751xrPPJoGpwqhAt0Z24wj8Lhy8NyG1kPo07Mdskz%2FAiFI%2BoE2IMWha%2FEddlkNE9vTlCCQVGReCcE9hrYHuxnPWe%2F%2BPo%2BYzuUIlEE7jy7do5xkeXkixkKSbukZIAsG5zbJHmM64NVoJujT1D2HTRdNkBXJPb3UeRJtoNPgT4tY1EIFA4zCB1cPDBjqkAc6SpEY2%2FRj9RHZ3mnld%2FiZwQUl9qUdVHiAafeM4S%2F5q9HESVrbBWmuCLL0UA99ltKTUNHnYV%2B%2Bi9HUBUzJ2FcshHE2nBFSHS9QYLpSuxQqkuvy3hPKCB9tlwPWSPKcIfmhSyh7ZBsdEQx9l1VApNs7ebiqFthV8Ld3uA5oNPK47zxEc0jTfNmFvusrUcjHEdPZTnUROa1A6P2RtaR0swYE6It%2B2&X-Amz-Signature=c8c79fbded98dca5ea3a7cb6677281ff16fe5b49cc4f69a62c14b2cdf637d891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
