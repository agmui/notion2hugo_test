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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GIW2IG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA7AhD4jbe5CTPEDLjYGOEvE2kj8YRlTXtoPVPqh8qscAiEAhre6jGe2l16ao2qjg5tHY8WApN6Ha8ML2AF8hSob2KEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYPBGl5ztI1TqzBpCrcAx%2FzQbWxNqugQBzk2bRceu%2BbIo7prLU3yhXdeC4mgCk4ol%2BV2ns2jOD30Mj8W6%2F18n3Pz3ziKGlUJMsB1bOkulssHovTBN5Sc3jT4dl9n76QuQ5St%2BcuUU%2FIKnw%2BG0qVfu0%2BalwdmSqMWxazxM2ABUl1%2FyhwKUUXzMYkLVb4UfPuo8JDNT5ZDE2S9jde2p%2FrzYR2ubZvlq6w0r52%2BHZ14TV4PFLq72vJmjwzdcNXjyqxciSSGZYIy3entaPtY58dRYVd98v2h88tj%2BJ13TsMBB9GxA625FDjHQTjUpi8MZbxSTVzaOWc%2BDwX3pszT5Sn9E8RiffAJvWLfl5HbW5gAZS0vLZ08xpqoVNdDlnVyxS739gWYmozChvuWhx5XwV4mB94Bc3a7f4OdpRD37pl3AMzCHw8P%2B5S4Y6MnuGlWUkcR817m8W2feA2YoLRvbWbhAsMcPZDaqxc3OzNTAuBuxGOlvk5aBUh4aXCPatOJObnceACdidy7RVLUynbYXv8AJFkqvR0s9iN8Zgli%2B4MgPDiB1AKJ3JFBXeB16fUHExdl9PM7GeX1lsnyGv4nOG8ebKI5MxScuxdcbNrLtLD4svGRuA%2FOC9w1KnlxImhTpNOCj6dY5%2FJXS84Co%2BfMNLV5r8GOqUBP16erR%2FeuFEiR%2B0o%2B40WMZEKgDUxJjEkk7kfSSrNXpandKL0ewmOVmC%2BqRG5H7ak%2BeffCa7OUyzOWQqR%2BUrzYcPADvqo9M2556O9SKN4bsnksz%2FYUVXz462R8MlzHWogaygvQ7YEwCO9QFvekBcU%2FsasYAqftnWJxbTXOwZJACBJs9EuhvYwGGfCViZxCNX0vKglLH6AhQ0YtWnUy6CIsjnOqpSD&X-Amz-Signature=ab822f047d244bc10b8a2c6eb5ef722abd82c225a7fd12f80ef43388f83f204b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GIW2IG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA7AhD4jbe5CTPEDLjYGOEvE2kj8YRlTXtoPVPqh8qscAiEAhre6jGe2l16ao2qjg5tHY8WApN6Ha8ML2AF8hSob2KEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYPBGl5ztI1TqzBpCrcAx%2FzQbWxNqugQBzk2bRceu%2BbIo7prLU3yhXdeC4mgCk4ol%2BV2ns2jOD30Mj8W6%2F18n3Pz3ziKGlUJMsB1bOkulssHovTBN5Sc3jT4dl9n76QuQ5St%2BcuUU%2FIKnw%2BG0qVfu0%2BalwdmSqMWxazxM2ABUl1%2FyhwKUUXzMYkLVb4UfPuo8JDNT5ZDE2S9jde2p%2FrzYR2ubZvlq6w0r52%2BHZ14TV4PFLq72vJmjwzdcNXjyqxciSSGZYIy3entaPtY58dRYVd98v2h88tj%2BJ13TsMBB9GxA625FDjHQTjUpi8MZbxSTVzaOWc%2BDwX3pszT5Sn9E8RiffAJvWLfl5HbW5gAZS0vLZ08xpqoVNdDlnVyxS739gWYmozChvuWhx5XwV4mB94Bc3a7f4OdpRD37pl3AMzCHw8P%2B5S4Y6MnuGlWUkcR817m8W2feA2YoLRvbWbhAsMcPZDaqxc3OzNTAuBuxGOlvk5aBUh4aXCPatOJObnceACdidy7RVLUynbYXv8AJFkqvR0s9iN8Zgli%2B4MgPDiB1AKJ3JFBXeB16fUHExdl9PM7GeX1lsnyGv4nOG8ebKI5MxScuxdcbNrLtLD4svGRuA%2FOC9w1KnlxImhTpNOCj6dY5%2FJXS84Co%2BfMNLV5r8GOqUBP16erR%2FeuFEiR%2B0o%2B40WMZEKgDUxJjEkk7kfSSrNXpandKL0ewmOVmC%2BqRG5H7ak%2BeffCa7OUyzOWQqR%2BUrzYcPADvqo9M2556O9SKN4bsnksz%2FYUVXz462R8MlzHWogaygvQ7YEwCO9QFvekBcU%2FsasYAqftnWJxbTXOwZJACBJs9EuhvYwGGfCViZxCNX0vKglLH6AhQ0YtWnUy6CIsjnOqpSD&X-Amz-Signature=875e41f3ed5350dc67b83d953dbe1168d5cf551256128e0c8e654075cb919733&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GIW2IG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA7AhD4jbe5CTPEDLjYGOEvE2kj8YRlTXtoPVPqh8qscAiEAhre6jGe2l16ao2qjg5tHY8WApN6Ha8ML2AF8hSob2KEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYPBGl5ztI1TqzBpCrcAx%2FzQbWxNqugQBzk2bRceu%2BbIo7prLU3yhXdeC4mgCk4ol%2BV2ns2jOD30Mj8W6%2F18n3Pz3ziKGlUJMsB1bOkulssHovTBN5Sc3jT4dl9n76QuQ5St%2BcuUU%2FIKnw%2BG0qVfu0%2BalwdmSqMWxazxM2ABUl1%2FyhwKUUXzMYkLVb4UfPuo8JDNT5ZDE2S9jde2p%2FrzYR2ubZvlq6w0r52%2BHZ14TV4PFLq72vJmjwzdcNXjyqxciSSGZYIy3entaPtY58dRYVd98v2h88tj%2BJ13TsMBB9GxA625FDjHQTjUpi8MZbxSTVzaOWc%2BDwX3pszT5Sn9E8RiffAJvWLfl5HbW5gAZS0vLZ08xpqoVNdDlnVyxS739gWYmozChvuWhx5XwV4mB94Bc3a7f4OdpRD37pl3AMzCHw8P%2B5S4Y6MnuGlWUkcR817m8W2feA2YoLRvbWbhAsMcPZDaqxc3OzNTAuBuxGOlvk5aBUh4aXCPatOJObnceACdidy7RVLUynbYXv8AJFkqvR0s9iN8Zgli%2B4MgPDiB1AKJ3JFBXeB16fUHExdl9PM7GeX1lsnyGv4nOG8ebKI5MxScuxdcbNrLtLD4svGRuA%2FOC9w1KnlxImhTpNOCj6dY5%2FJXS84Co%2BfMNLV5r8GOqUBP16erR%2FeuFEiR%2B0o%2B40WMZEKgDUxJjEkk7kfSSrNXpandKL0ewmOVmC%2BqRG5H7ak%2BeffCa7OUyzOWQqR%2BUrzYcPADvqo9M2556O9SKN4bsnksz%2FYUVXz462R8MlzHWogaygvQ7YEwCO9QFvekBcU%2FsasYAqftnWJxbTXOwZJACBJs9EuhvYwGGfCViZxCNX0vKglLH6AhQ0YtWnUy6CIsjnOqpSD&X-Amz-Signature=e27cadf392a16790b2dfea4fdd1c47e473787fcf1c86e97676458a89d0af94fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GIW2IG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA7AhD4jbe5CTPEDLjYGOEvE2kj8YRlTXtoPVPqh8qscAiEAhre6jGe2l16ao2qjg5tHY8WApN6Ha8ML2AF8hSob2KEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYPBGl5ztI1TqzBpCrcAx%2FzQbWxNqugQBzk2bRceu%2BbIo7prLU3yhXdeC4mgCk4ol%2BV2ns2jOD30Mj8W6%2F18n3Pz3ziKGlUJMsB1bOkulssHovTBN5Sc3jT4dl9n76QuQ5St%2BcuUU%2FIKnw%2BG0qVfu0%2BalwdmSqMWxazxM2ABUl1%2FyhwKUUXzMYkLVb4UfPuo8JDNT5ZDE2S9jde2p%2FrzYR2ubZvlq6w0r52%2BHZ14TV4PFLq72vJmjwzdcNXjyqxciSSGZYIy3entaPtY58dRYVd98v2h88tj%2BJ13TsMBB9GxA625FDjHQTjUpi8MZbxSTVzaOWc%2BDwX3pszT5Sn9E8RiffAJvWLfl5HbW5gAZS0vLZ08xpqoVNdDlnVyxS739gWYmozChvuWhx5XwV4mB94Bc3a7f4OdpRD37pl3AMzCHw8P%2B5S4Y6MnuGlWUkcR817m8W2feA2YoLRvbWbhAsMcPZDaqxc3OzNTAuBuxGOlvk5aBUh4aXCPatOJObnceACdidy7RVLUynbYXv8AJFkqvR0s9iN8Zgli%2B4MgPDiB1AKJ3JFBXeB16fUHExdl9PM7GeX1lsnyGv4nOG8ebKI5MxScuxdcbNrLtLD4svGRuA%2FOC9w1KnlxImhTpNOCj6dY5%2FJXS84Co%2BfMNLV5r8GOqUBP16erR%2FeuFEiR%2B0o%2B40WMZEKgDUxJjEkk7kfSSrNXpandKL0ewmOVmC%2BqRG5H7ak%2BeffCa7OUyzOWQqR%2BUrzYcPADvqo9M2556O9SKN4bsnksz%2FYUVXz462R8MlzHWogaygvQ7YEwCO9QFvekBcU%2FsasYAqftnWJxbTXOwZJACBJs9EuhvYwGGfCViZxCNX0vKglLH6AhQ0YtWnUy6CIsjnOqpSD&X-Amz-Signature=7eb564283530e960c23b1c8a0a0d4a5fc2ed245fb59954323f84c46e4330067e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GIW2IG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA7AhD4jbe5CTPEDLjYGOEvE2kj8YRlTXtoPVPqh8qscAiEAhre6jGe2l16ao2qjg5tHY8WApN6Ha8ML2AF8hSob2KEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYPBGl5ztI1TqzBpCrcAx%2FzQbWxNqugQBzk2bRceu%2BbIo7prLU3yhXdeC4mgCk4ol%2BV2ns2jOD30Mj8W6%2F18n3Pz3ziKGlUJMsB1bOkulssHovTBN5Sc3jT4dl9n76QuQ5St%2BcuUU%2FIKnw%2BG0qVfu0%2BalwdmSqMWxazxM2ABUl1%2FyhwKUUXzMYkLVb4UfPuo8JDNT5ZDE2S9jde2p%2FrzYR2ubZvlq6w0r52%2BHZ14TV4PFLq72vJmjwzdcNXjyqxciSSGZYIy3entaPtY58dRYVd98v2h88tj%2BJ13TsMBB9GxA625FDjHQTjUpi8MZbxSTVzaOWc%2BDwX3pszT5Sn9E8RiffAJvWLfl5HbW5gAZS0vLZ08xpqoVNdDlnVyxS739gWYmozChvuWhx5XwV4mB94Bc3a7f4OdpRD37pl3AMzCHw8P%2B5S4Y6MnuGlWUkcR817m8W2feA2YoLRvbWbhAsMcPZDaqxc3OzNTAuBuxGOlvk5aBUh4aXCPatOJObnceACdidy7RVLUynbYXv8AJFkqvR0s9iN8Zgli%2B4MgPDiB1AKJ3JFBXeB16fUHExdl9PM7GeX1lsnyGv4nOG8ebKI5MxScuxdcbNrLtLD4svGRuA%2FOC9w1KnlxImhTpNOCj6dY5%2FJXS84Co%2BfMNLV5r8GOqUBP16erR%2FeuFEiR%2B0o%2B40WMZEKgDUxJjEkk7kfSSrNXpandKL0ewmOVmC%2BqRG5H7ak%2BeffCa7OUyzOWQqR%2BUrzYcPADvqo9M2556O9SKN4bsnksz%2FYUVXz462R8MlzHWogaygvQ7YEwCO9QFvekBcU%2FsasYAqftnWJxbTXOwZJACBJs9EuhvYwGGfCViZxCNX0vKglLH6AhQ0YtWnUy6CIsjnOqpSD&X-Amz-Signature=e263a33639e96bbb4107dc575d856030c203a02c402a542d649537b720128ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GIW2IG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIA7AhD4jbe5CTPEDLjYGOEvE2kj8YRlTXtoPVPqh8qscAiEAhre6jGe2l16ao2qjg5tHY8WApN6Ha8ML2AF8hSob2KEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYPBGl5ztI1TqzBpCrcAx%2FzQbWxNqugQBzk2bRceu%2BbIo7prLU3yhXdeC4mgCk4ol%2BV2ns2jOD30Mj8W6%2F18n3Pz3ziKGlUJMsB1bOkulssHovTBN5Sc3jT4dl9n76QuQ5St%2BcuUU%2FIKnw%2BG0qVfu0%2BalwdmSqMWxazxM2ABUl1%2FyhwKUUXzMYkLVb4UfPuo8JDNT5ZDE2S9jde2p%2FrzYR2ubZvlq6w0r52%2BHZ14TV4PFLq72vJmjwzdcNXjyqxciSSGZYIy3entaPtY58dRYVd98v2h88tj%2BJ13TsMBB9GxA625FDjHQTjUpi8MZbxSTVzaOWc%2BDwX3pszT5Sn9E8RiffAJvWLfl5HbW5gAZS0vLZ08xpqoVNdDlnVyxS739gWYmozChvuWhx5XwV4mB94Bc3a7f4OdpRD37pl3AMzCHw8P%2B5S4Y6MnuGlWUkcR817m8W2feA2YoLRvbWbhAsMcPZDaqxc3OzNTAuBuxGOlvk5aBUh4aXCPatOJObnceACdidy7RVLUynbYXv8AJFkqvR0s9iN8Zgli%2B4MgPDiB1AKJ3JFBXeB16fUHExdl9PM7GeX1lsnyGv4nOG8ebKI5MxScuxdcbNrLtLD4svGRuA%2FOC9w1KnlxImhTpNOCj6dY5%2FJXS84Co%2BfMNLV5r8GOqUBP16erR%2FeuFEiR%2B0o%2B40WMZEKgDUxJjEkk7kfSSrNXpandKL0ewmOVmC%2BqRG5H7ak%2BeffCa7OUyzOWQqR%2BUrzYcPADvqo9M2556O9SKN4bsnksz%2FYUVXz462R8MlzHWogaygvQ7YEwCO9QFvekBcU%2FsasYAqftnWJxbTXOwZJACBJs9EuhvYwGGfCViZxCNX0vKglLH6AhQ0YtWnUy6CIsjnOqpSD&X-Amz-Signature=7d824f2c23f9d5ec2d6ebb301fd67cc9a8916fedc694496c7f3011b9fe2b14b8&X-Amz-SignedHeaders=host&x-id=GetObject)
