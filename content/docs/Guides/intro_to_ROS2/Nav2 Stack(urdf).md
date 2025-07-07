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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JMF3ZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkTrMRLROmj4vW5flvt2QV7Tlaajx5vGBgDx2GpO4%2ByAIgC2AnrIh8a95D%2Fg%2BKFKbccORbh0B30walmVuWwXmeYH8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLzG4ym5%2FoQtwWhQmSrcA0cjGQ1dKrDQ%2BEf2XqzuBOQFJ1f%2FO%2F3uMGdS3LaVSK26EPsLUSNAOtOcoqrdEfRO71Xojjk7oau16U4q%2BPsXnnKWfYmGpP7jmq2skKPwdNck5vr4Y48cDo3PbGNca1JntwlOtWXoQCROXMYpj8Z%2FU5hOgrChHr9Oj%2BIf%2BfB%2BHFdSFNEfO2Q196vNzXxPnypud5Ub5WbCFV%2FNoYhRQjvPozlp3HC6UM58Enuy5SIVKD%2B%2F1tZRzoGW1pFMra5TgdqbGeE1lDj4L05P%2BiW1hhDbQKctWsC1k9DhWSoXoH1GYfsU6zQAMhpeqDWEZdiIo9cgEc9EkpP0Ur1tXrarZ6ewkeTPX9%2BCJq2h9vwwX16HOp0Yg2m7CBZSVBV3dAF4J4PCkPjE55moWc8IY8oZKcHUY2UKzmBuZ1bGzCKP8DEqAJctnQf9oYQadfqAK3nC1g%2B3DXJqoAg6gUgrW0rNvbiKYMv3zYu1nIlI2RNXMkwugkXs6QvwijHpYxJ%2Frl4hgxBsoi6lgT0wGRswEZsNpxYp0dV%2F0QZj6EKEKuNJ4X%2BZRzA1ZJF4RtIJ3AAzuIcF%2FEfxxh5HcdHQjjXmC8bLjjE5IfH1iKSViC6naXdJCMfAfazUMBTLB86U0G%2BoAGwNMNu4rsMGOqUBqIJGNde5WmS%2F1lHuqQ6k6HdgI7ZIGQ1T0LRIe1WxI%2BLatIUFPlTS1nsEaL4PZg8lBYD19U2K0J2vc9YzjkOT8TmbUx0KdqnmK0%2BbYYaRjH66TbyRqj9YPgKnS44jce9bbV35ucq1eiyPRgvzgt%2BEJ3zobGLyCd3Esy8KDH8Sbd3du0GN0JveuNqbVROVDS4vEp1ANGKY%2FbI2RHCNUKLvuUmeQznS&X-Amz-Signature=5486b204388e886b569e90373f2d8172e70518a2b5a60117df11177ae03fd17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JMF3ZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkTrMRLROmj4vW5flvt2QV7Tlaajx5vGBgDx2GpO4%2ByAIgC2AnrIh8a95D%2Fg%2BKFKbccORbh0B30walmVuWwXmeYH8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLzG4ym5%2FoQtwWhQmSrcA0cjGQ1dKrDQ%2BEf2XqzuBOQFJ1f%2FO%2F3uMGdS3LaVSK26EPsLUSNAOtOcoqrdEfRO71Xojjk7oau16U4q%2BPsXnnKWfYmGpP7jmq2skKPwdNck5vr4Y48cDo3PbGNca1JntwlOtWXoQCROXMYpj8Z%2FU5hOgrChHr9Oj%2BIf%2BfB%2BHFdSFNEfO2Q196vNzXxPnypud5Ub5WbCFV%2FNoYhRQjvPozlp3HC6UM58Enuy5SIVKD%2B%2F1tZRzoGW1pFMra5TgdqbGeE1lDj4L05P%2BiW1hhDbQKctWsC1k9DhWSoXoH1GYfsU6zQAMhpeqDWEZdiIo9cgEc9EkpP0Ur1tXrarZ6ewkeTPX9%2BCJq2h9vwwX16HOp0Yg2m7CBZSVBV3dAF4J4PCkPjE55moWc8IY8oZKcHUY2UKzmBuZ1bGzCKP8DEqAJctnQf9oYQadfqAK3nC1g%2B3DXJqoAg6gUgrW0rNvbiKYMv3zYu1nIlI2RNXMkwugkXs6QvwijHpYxJ%2Frl4hgxBsoi6lgT0wGRswEZsNpxYp0dV%2F0QZj6EKEKuNJ4X%2BZRzA1ZJF4RtIJ3AAzuIcF%2FEfxxh5HcdHQjjXmC8bLjjE5IfH1iKSViC6naXdJCMfAfazUMBTLB86U0G%2BoAGwNMNu4rsMGOqUBqIJGNde5WmS%2F1lHuqQ6k6HdgI7ZIGQ1T0LRIe1WxI%2BLatIUFPlTS1nsEaL4PZg8lBYD19U2K0J2vc9YzjkOT8TmbUx0KdqnmK0%2BbYYaRjH66TbyRqj9YPgKnS44jce9bbV35ucq1eiyPRgvzgt%2BEJ3zobGLyCd3Esy8KDH8Sbd3du0GN0JveuNqbVROVDS4vEp1ANGKY%2FbI2RHCNUKLvuUmeQznS&X-Amz-Signature=c47babb7013f72d2f6e903aa8f146e2babfd30495d0935fb6ae22457d9009f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JMF3ZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkTrMRLROmj4vW5flvt2QV7Tlaajx5vGBgDx2GpO4%2ByAIgC2AnrIh8a95D%2Fg%2BKFKbccORbh0B30walmVuWwXmeYH8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLzG4ym5%2FoQtwWhQmSrcA0cjGQ1dKrDQ%2BEf2XqzuBOQFJ1f%2FO%2F3uMGdS3LaVSK26EPsLUSNAOtOcoqrdEfRO71Xojjk7oau16U4q%2BPsXnnKWfYmGpP7jmq2skKPwdNck5vr4Y48cDo3PbGNca1JntwlOtWXoQCROXMYpj8Z%2FU5hOgrChHr9Oj%2BIf%2BfB%2BHFdSFNEfO2Q196vNzXxPnypud5Ub5WbCFV%2FNoYhRQjvPozlp3HC6UM58Enuy5SIVKD%2B%2F1tZRzoGW1pFMra5TgdqbGeE1lDj4L05P%2BiW1hhDbQKctWsC1k9DhWSoXoH1GYfsU6zQAMhpeqDWEZdiIo9cgEc9EkpP0Ur1tXrarZ6ewkeTPX9%2BCJq2h9vwwX16HOp0Yg2m7CBZSVBV3dAF4J4PCkPjE55moWc8IY8oZKcHUY2UKzmBuZ1bGzCKP8DEqAJctnQf9oYQadfqAK3nC1g%2B3DXJqoAg6gUgrW0rNvbiKYMv3zYu1nIlI2RNXMkwugkXs6QvwijHpYxJ%2Frl4hgxBsoi6lgT0wGRswEZsNpxYp0dV%2F0QZj6EKEKuNJ4X%2BZRzA1ZJF4RtIJ3AAzuIcF%2FEfxxh5HcdHQjjXmC8bLjjE5IfH1iKSViC6naXdJCMfAfazUMBTLB86U0G%2BoAGwNMNu4rsMGOqUBqIJGNde5WmS%2F1lHuqQ6k6HdgI7ZIGQ1T0LRIe1WxI%2BLatIUFPlTS1nsEaL4PZg8lBYD19U2K0J2vc9YzjkOT8TmbUx0KdqnmK0%2BbYYaRjH66TbyRqj9YPgKnS44jce9bbV35ucq1eiyPRgvzgt%2BEJ3zobGLyCd3Esy8KDH8Sbd3du0GN0JveuNqbVROVDS4vEp1ANGKY%2FbI2RHCNUKLvuUmeQznS&X-Amz-Signature=da046464404d8655c9209f5446bb4cf88210021c7024c24489619df7c9ae691a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JMF3ZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkTrMRLROmj4vW5flvt2QV7Tlaajx5vGBgDx2GpO4%2ByAIgC2AnrIh8a95D%2Fg%2BKFKbccORbh0B30walmVuWwXmeYH8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLzG4ym5%2FoQtwWhQmSrcA0cjGQ1dKrDQ%2BEf2XqzuBOQFJ1f%2FO%2F3uMGdS3LaVSK26EPsLUSNAOtOcoqrdEfRO71Xojjk7oau16U4q%2BPsXnnKWfYmGpP7jmq2skKPwdNck5vr4Y48cDo3PbGNca1JntwlOtWXoQCROXMYpj8Z%2FU5hOgrChHr9Oj%2BIf%2BfB%2BHFdSFNEfO2Q196vNzXxPnypud5Ub5WbCFV%2FNoYhRQjvPozlp3HC6UM58Enuy5SIVKD%2B%2F1tZRzoGW1pFMra5TgdqbGeE1lDj4L05P%2BiW1hhDbQKctWsC1k9DhWSoXoH1GYfsU6zQAMhpeqDWEZdiIo9cgEc9EkpP0Ur1tXrarZ6ewkeTPX9%2BCJq2h9vwwX16HOp0Yg2m7CBZSVBV3dAF4J4PCkPjE55moWc8IY8oZKcHUY2UKzmBuZ1bGzCKP8DEqAJctnQf9oYQadfqAK3nC1g%2B3DXJqoAg6gUgrW0rNvbiKYMv3zYu1nIlI2RNXMkwugkXs6QvwijHpYxJ%2Frl4hgxBsoi6lgT0wGRswEZsNpxYp0dV%2F0QZj6EKEKuNJ4X%2BZRzA1ZJF4RtIJ3AAzuIcF%2FEfxxh5HcdHQjjXmC8bLjjE5IfH1iKSViC6naXdJCMfAfazUMBTLB86U0G%2BoAGwNMNu4rsMGOqUBqIJGNde5WmS%2F1lHuqQ6k6HdgI7ZIGQ1T0LRIe1WxI%2BLatIUFPlTS1nsEaL4PZg8lBYD19U2K0J2vc9YzjkOT8TmbUx0KdqnmK0%2BbYYaRjH66TbyRqj9YPgKnS44jce9bbV35ucq1eiyPRgvzgt%2BEJ3zobGLyCd3Esy8KDH8Sbd3du0GN0JveuNqbVROVDS4vEp1ANGKY%2FbI2RHCNUKLvuUmeQznS&X-Amz-Signature=d8e7cdad07527f16619fb54f182fb7e6bdbb45526d3751229a88ae3b0d09e1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JMF3ZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkTrMRLROmj4vW5flvt2QV7Tlaajx5vGBgDx2GpO4%2ByAIgC2AnrIh8a95D%2Fg%2BKFKbccORbh0B30walmVuWwXmeYH8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLzG4ym5%2FoQtwWhQmSrcA0cjGQ1dKrDQ%2BEf2XqzuBOQFJ1f%2FO%2F3uMGdS3LaVSK26EPsLUSNAOtOcoqrdEfRO71Xojjk7oau16U4q%2BPsXnnKWfYmGpP7jmq2skKPwdNck5vr4Y48cDo3PbGNca1JntwlOtWXoQCROXMYpj8Z%2FU5hOgrChHr9Oj%2BIf%2BfB%2BHFdSFNEfO2Q196vNzXxPnypud5Ub5WbCFV%2FNoYhRQjvPozlp3HC6UM58Enuy5SIVKD%2B%2F1tZRzoGW1pFMra5TgdqbGeE1lDj4L05P%2BiW1hhDbQKctWsC1k9DhWSoXoH1GYfsU6zQAMhpeqDWEZdiIo9cgEc9EkpP0Ur1tXrarZ6ewkeTPX9%2BCJq2h9vwwX16HOp0Yg2m7CBZSVBV3dAF4J4PCkPjE55moWc8IY8oZKcHUY2UKzmBuZ1bGzCKP8DEqAJctnQf9oYQadfqAK3nC1g%2B3DXJqoAg6gUgrW0rNvbiKYMv3zYu1nIlI2RNXMkwugkXs6QvwijHpYxJ%2Frl4hgxBsoi6lgT0wGRswEZsNpxYp0dV%2F0QZj6EKEKuNJ4X%2BZRzA1ZJF4RtIJ3AAzuIcF%2FEfxxh5HcdHQjjXmC8bLjjE5IfH1iKSViC6naXdJCMfAfazUMBTLB86U0G%2BoAGwNMNu4rsMGOqUBqIJGNde5WmS%2F1lHuqQ6k6HdgI7ZIGQ1T0LRIe1WxI%2BLatIUFPlTS1nsEaL4PZg8lBYD19U2K0J2vc9YzjkOT8TmbUx0KdqnmK0%2BbYYaRjH66TbyRqj9YPgKnS44jce9bbV35ucq1eiyPRgvzgt%2BEJ3zobGLyCd3Esy8KDH8Sbd3du0GN0JveuNqbVROVDS4vEp1ANGKY%2FbI2RHCNUKLvuUmeQznS&X-Amz-Signature=7fe6d6e97fc145a65f2f49bffc01cc1fe77d085a0c367fa39e2bbb3d17ad3655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JMF3ZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCkTrMRLROmj4vW5flvt2QV7Tlaajx5vGBgDx2GpO4%2ByAIgC2AnrIh8a95D%2Fg%2BKFKbccORbh0B30walmVuWwXmeYH8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLzG4ym5%2FoQtwWhQmSrcA0cjGQ1dKrDQ%2BEf2XqzuBOQFJ1f%2FO%2F3uMGdS3LaVSK26EPsLUSNAOtOcoqrdEfRO71Xojjk7oau16U4q%2BPsXnnKWfYmGpP7jmq2skKPwdNck5vr4Y48cDo3PbGNca1JntwlOtWXoQCROXMYpj8Z%2FU5hOgrChHr9Oj%2BIf%2BfB%2BHFdSFNEfO2Q196vNzXxPnypud5Ub5WbCFV%2FNoYhRQjvPozlp3HC6UM58Enuy5SIVKD%2B%2F1tZRzoGW1pFMra5TgdqbGeE1lDj4L05P%2BiW1hhDbQKctWsC1k9DhWSoXoH1GYfsU6zQAMhpeqDWEZdiIo9cgEc9EkpP0Ur1tXrarZ6ewkeTPX9%2BCJq2h9vwwX16HOp0Yg2m7CBZSVBV3dAF4J4PCkPjE55moWc8IY8oZKcHUY2UKzmBuZ1bGzCKP8DEqAJctnQf9oYQadfqAK3nC1g%2B3DXJqoAg6gUgrW0rNvbiKYMv3zYu1nIlI2RNXMkwugkXs6QvwijHpYxJ%2Frl4hgxBsoi6lgT0wGRswEZsNpxYp0dV%2F0QZj6EKEKuNJ4X%2BZRzA1ZJF4RtIJ3AAzuIcF%2FEfxxh5HcdHQjjXmC8bLjjE5IfH1iKSViC6naXdJCMfAfazUMBTLB86U0G%2BoAGwNMNu4rsMGOqUBqIJGNde5WmS%2F1lHuqQ6k6HdgI7ZIGQ1T0LRIe1WxI%2BLatIUFPlTS1nsEaL4PZg8lBYD19U2K0J2vc9YzjkOT8TmbUx0KdqnmK0%2BbYYaRjH66TbyRqj9YPgKnS44jce9bbV35ucq1eiyPRgvzgt%2BEJ3zobGLyCd3Esy8KDH8Sbd3du0GN0JveuNqbVROVDS4vEp1ANGKY%2FbI2RHCNUKLvuUmeQznS&X-Amz-Signature=6480738d36f4670d702d584ee0218714f2ad9420e0c3d9dba2afc311b88473d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
