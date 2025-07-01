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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3BDKMD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs1YDgoKdKGeR%2BiXwvYIwSAxy55q1GLUvMaDJ8EH4xQAiEAi4hOjI5L3bhrjWYfG4Ap1nUALnuvOHXMgG0fQXYpAScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiVNUjgbXfYoWdWyyrcAyhLChfyq9JfnJaM%2FMTes6RzzFut9kjH%2FiRxBlyz1FzhpZe5E1qh1fbhDiLRO70vVCjtuWzszvr%2BPlXtumggZU1X1r%2BVi0z34Ki111FcwA2VxSM5TR7fsf8sufSLbLtgUjQ%2BM9qExaA2RfQmK6AH1O%2F7dDgWyaOW6pWS1PkXYY4Lc7CB6dIk1tscILKW%2FmIFQkD7uZiYwtcSDTnIwcbwpwhyJy2Qf6yxahyHCbVYK9ZSQmEXxNF2%2F0K%2BJQ%2BL4Pb5L0r1VXccDzR%2BuN0zKpDv%2F4UmEau8x7bKyZ9fZgQpmn6VL0oZquLbxiVvs8%2Bs9bSA372yujk0DADPrz9zuPCLTdz3QWPfU47jGxSavvggWgJZLOjibRi3wyFsSS%2F11P9XEghr4td2tucoPJEYhGyGynRexJzNxju19GkSSVwXUk3QhIHXFRA%2FYbAUpBYbUVYiRQzkuVH4Xue6Z7cs8KKeP1mV4KnStbJAiTxMptblB6Q3RwJIKNqvpu%2BVHcySXZDAQBK17Zcjsrrir7k6iChjdNkwADdNXumUFlTu6ckU4JPsyUheNJ5zhkNWJr7Cj46CStpRJD1JWd7xUopTw5yy%2BRf43CnYAEhCUMYk1RQSIM8beCGzvjsT6PfdN5ozMJ7NjcMGOqUBTGxXduLRz%2Fs7bhd9KewKN4yn6D5o5cfXcM7y3rInykVui4wL7mqjcB5c2cFTQvVgzopsb8XsnPMphEY4r64S8l1qUtqP5HJfNMjdl7V2HuSEVavd6QQZjnwcRb4r2%2F6ZOwUp0lBzczigLEwKTM9V55Cf7Tayf1KjXdELES4CW%2BA3mHsZ%2BhaR4VbQ0sz4CymrkuFYuyrN3gpCExXc7GAj%2F464kBob&X-Amz-Signature=c077dd6a45940b0ef758989312ec8033dbfc00174c6e0ea5521b4760b5c4745a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3BDKMD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs1YDgoKdKGeR%2BiXwvYIwSAxy55q1GLUvMaDJ8EH4xQAiEAi4hOjI5L3bhrjWYfG4Ap1nUALnuvOHXMgG0fQXYpAScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiVNUjgbXfYoWdWyyrcAyhLChfyq9JfnJaM%2FMTes6RzzFut9kjH%2FiRxBlyz1FzhpZe5E1qh1fbhDiLRO70vVCjtuWzszvr%2BPlXtumggZU1X1r%2BVi0z34Ki111FcwA2VxSM5TR7fsf8sufSLbLtgUjQ%2BM9qExaA2RfQmK6AH1O%2F7dDgWyaOW6pWS1PkXYY4Lc7CB6dIk1tscILKW%2FmIFQkD7uZiYwtcSDTnIwcbwpwhyJy2Qf6yxahyHCbVYK9ZSQmEXxNF2%2F0K%2BJQ%2BL4Pb5L0r1VXccDzR%2BuN0zKpDv%2F4UmEau8x7bKyZ9fZgQpmn6VL0oZquLbxiVvs8%2Bs9bSA372yujk0DADPrz9zuPCLTdz3QWPfU47jGxSavvggWgJZLOjibRi3wyFsSS%2F11P9XEghr4td2tucoPJEYhGyGynRexJzNxju19GkSSVwXUk3QhIHXFRA%2FYbAUpBYbUVYiRQzkuVH4Xue6Z7cs8KKeP1mV4KnStbJAiTxMptblB6Q3RwJIKNqvpu%2BVHcySXZDAQBK17Zcjsrrir7k6iChjdNkwADdNXumUFlTu6ckU4JPsyUheNJ5zhkNWJr7Cj46CStpRJD1JWd7xUopTw5yy%2BRf43CnYAEhCUMYk1RQSIM8beCGzvjsT6PfdN5ozMJ7NjcMGOqUBTGxXduLRz%2Fs7bhd9KewKN4yn6D5o5cfXcM7y3rInykVui4wL7mqjcB5c2cFTQvVgzopsb8XsnPMphEY4r64S8l1qUtqP5HJfNMjdl7V2HuSEVavd6QQZjnwcRb4r2%2F6ZOwUp0lBzczigLEwKTM9V55Cf7Tayf1KjXdELES4CW%2BA3mHsZ%2BhaR4VbQ0sz4CymrkuFYuyrN3gpCExXc7GAj%2F464kBob&X-Amz-Signature=733a18ee64e59b9e2c1c263a7035a44d5184a1b7237f8d0c913be0e58f1835dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3BDKMD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs1YDgoKdKGeR%2BiXwvYIwSAxy55q1GLUvMaDJ8EH4xQAiEAi4hOjI5L3bhrjWYfG4Ap1nUALnuvOHXMgG0fQXYpAScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiVNUjgbXfYoWdWyyrcAyhLChfyq9JfnJaM%2FMTes6RzzFut9kjH%2FiRxBlyz1FzhpZe5E1qh1fbhDiLRO70vVCjtuWzszvr%2BPlXtumggZU1X1r%2BVi0z34Ki111FcwA2VxSM5TR7fsf8sufSLbLtgUjQ%2BM9qExaA2RfQmK6AH1O%2F7dDgWyaOW6pWS1PkXYY4Lc7CB6dIk1tscILKW%2FmIFQkD7uZiYwtcSDTnIwcbwpwhyJy2Qf6yxahyHCbVYK9ZSQmEXxNF2%2F0K%2BJQ%2BL4Pb5L0r1VXccDzR%2BuN0zKpDv%2F4UmEau8x7bKyZ9fZgQpmn6VL0oZquLbxiVvs8%2Bs9bSA372yujk0DADPrz9zuPCLTdz3QWPfU47jGxSavvggWgJZLOjibRi3wyFsSS%2F11P9XEghr4td2tucoPJEYhGyGynRexJzNxju19GkSSVwXUk3QhIHXFRA%2FYbAUpBYbUVYiRQzkuVH4Xue6Z7cs8KKeP1mV4KnStbJAiTxMptblB6Q3RwJIKNqvpu%2BVHcySXZDAQBK17Zcjsrrir7k6iChjdNkwADdNXumUFlTu6ckU4JPsyUheNJ5zhkNWJr7Cj46CStpRJD1JWd7xUopTw5yy%2BRf43CnYAEhCUMYk1RQSIM8beCGzvjsT6PfdN5ozMJ7NjcMGOqUBTGxXduLRz%2Fs7bhd9KewKN4yn6D5o5cfXcM7y3rInykVui4wL7mqjcB5c2cFTQvVgzopsb8XsnPMphEY4r64S8l1qUtqP5HJfNMjdl7V2HuSEVavd6QQZjnwcRb4r2%2F6ZOwUp0lBzczigLEwKTM9V55Cf7Tayf1KjXdELES4CW%2BA3mHsZ%2BhaR4VbQ0sz4CymrkuFYuyrN3gpCExXc7GAj%2F464kBob&X-Amz-Signature=a8380d6a0537dff7fe72ba0a950d9fdf11f491857ed8ec01ef694d1cd163fc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3BDKMD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs1YDgoKdKGeR%2BiXwvYIwSAxy55q1GLUvMaDJ8EH4xQAiEAi4hOjI5L3bhrjWYfG4Ap1nUALnuvOHXMgG0fQXYpAScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiVNUjgbXfYoWdWyyrcAyhLChfyq9JfnJaM%2FMTes6RzzFut9kjH%2FiRxBlyz1FzhpZe5E1qh1fbhDiLRO70vVCjtuWzszvr%2BPlXtumggZU1X1r%2BVi0z34Ki111FcwA2VxSM5TR7fsf8sufSLbLtgUjQ%2BM9qExaA2RfQmK6AH1O%2F7dDgWyaOW6pWS1PkXYY4Lc7CB6dIk1tscILKW%2FmIFQkD7uZiYwtcSDTnIwcbwpwhyJy2Qf6yxahyHCbVYK9ZSQmEXxNF2%2F0K%2BJQ%2BL4Pb5L0r1VXccDzR%2BuN0zKpDv%2F4UmEau8x7bKyZ9fZgQpmn6VL0oZquLbxiVvs8%2Bs9bSA372yujk0DADPrz9zuPCLTdz3QWPfU47jGxSavvggWgJZLOjibRi3wyFsSS%2F11P9XEghr4td2tucoPJEYhGyGynRexJzNxju19GkSSVwXUk3QhIHXFRA%2FYbAUpBYbUVYiRQzkuVH4Xue6Z7cs8KKeP1mV4KnStbJAiTxMptblB6Q3RwJIKNqvpu%2BVHcySXZDAQBK17Zcjsrrir7k6iChjdNkwADdNXumUFlTu6ckU4JPsyUheNJ5zhkNWJr7Cj46CStpRJD1JWd7xUopTw5yy%2BRf43CnYAEhCUMYk1RQSIM8beCGzvjsT6PfdN5ozMJ7NjcMGOqUBTGxXduLRz%2Fs7bhd9KewKN4yn6D5o5cfXcM7y3rInykVui4wL7mqjcB5c2cFTQvVgzopsb8XsnPMphEY4r64S8l1qUtqP5HJfNMjdl7V2HuSEVavd6QQZjnwcRb4r2%2F6ZOwUp0lBzczigLEwKTM9V55Cf7Tayf1KjXdELES4CW%2BA3mHsZ%2BhaR4VbQ0sz4CymrkuFYuyrN3gpCExXc7GAj%2F464kBob&X-Amz-Signature=24eb6e7fe29832b4dff967002d3936b4593f7a4ffc6f4354d61739f4233fc1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3BDKMD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs1YDgoKdKGeR%2BiXwvYIwSAxy55q1GLUvMaDJ8EH4xQAiEAi4hOjI5L3bhrjWYfG4Ap1nUALnuvOHXMgG0fQXYpAScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiVNUjgbXfYoWdWyyrcAyhLChfyq9JfnJaM%2FMTes6RzzFut9kjH%2FiRxBlyz1FzhpZe5E1qh1fbhDiLRO70vVCjtuWzszvr%2BPlXtumggZU1X1r%2BVi0z34Ki111FcwA2VxSM5TR7fsf8sufSLbLtgUjQ%2BM9qExaA2RfQmK6AH1O%2F7dDgWyaOW6pWS1PkXYY4Lc7CB6dIk1tscILKW%2FmIFQkD7uZiYwtcSDTnIwcbwpwhyJy2Qf6yxahyHCbVYK9ZSQmEXxNF2%2F0K%2BJQ%2BL4Pb5L0r1VXccDzR%2BuN0zKpDv%2F4UmEau8x7bKyZ9fZgQpmn6VL0oZquLbxiVvs8%2Bs9bSA372yujk0DADPrz9zuPCLTdz3QWPfU47jGxSavvggWgJZLOjibRi3wyFsSS%2F11P9XEghr4td2tucoPJEYhGyGynRexJzNxju19GkSSVwXUk3QhIHXFRA%2FYbAUpBYbUVYiRQzkuVH4Xue6Z7cs8KKeP1mV4KnStbJAiTxMptblB6Q3RwJIKNqvpu%2BVHcySXZDAQBK17Zcjsrrir7k6iChjdNkwADdNXumUFlTu6ckU4JPsyUheNJ5zhkNWJr7Cj46CStpRJD1JWd7xUopTw5yy%2BRf43CnYAEhCUMYk1RQSIM8beCGzvjsT6PfdN5ozMJ7NjcMGOqUBTGxXduLRz%2Fs7bhd9KewKN4yn6D5o5cfXcM7y3rInykVui4wL7mqjcB5c2cFTQvVgzopsb8XsnPMphEY4r64S8l1qUtqP5HJfNMjdl7V2HuSEVavd6QQZjnwcRb4r2%2F6ZOwUp0lBzczigLEwKTM9V55Cf7Tayf1KjXdELES4CW%2BA3mHsZ%2BhaR4VbQ0sz4CymrkuFYuyrN3gpCExXc7GAj%2F464kBob&X-Amz-Signature=a83b482ad1372ec2feff1a00e8b75f282b8289eeef6f6bf9d5f1de373b65d006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3BDKMD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs1YDgoKdKGeR%2BiXwvYIwSAxy55q1GLUvMaDJ8EH4xQAiEAi4hOjI5L3bhrjWYfG4Ap1nUALnuvOHXMgG0fQXYpAScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiVNUjgbXfYoWdWyyrcAyhLChfyq9JfnJaM%2FMTes6RzzFut9kjH%2FiRxBlyz1FzhpZe5E1qh1fbhDiLRO70vVCjtuWzszvr%2BPlXtumggZU1X1r%2BVi0z34Ki111FcwA2VxSM5TR7fsf8sufSLbLtgUjQ%2BM9qExaA2RfQmK6AH1O%2F7dDgWyaOW6pWS1PkXYY4Lc7CB6dIk1tscILKW%2FmIFQkD7uZiYwtcSDTnIwcbwpwhyJy2Qf6yxahyHCbVYK9ZSQmEXxNF2%2F0K%2BJQ%2BL4Pb5L0r1VXccDzR%2BuN0zKpDv%2F4UmEau8x7bKyZ9fZgQpmn6VL0oZquLbxiVvs8%2Bs9bSA372yujk0DADPrz9zuPCLTdz3QWPfU47jGxSavvggWgJZLOjibRi3wyFsSS%2F11P9XEghr4td2tucoPJEYhGyGynRexJzNxju19GkSSVwXUk3QhIHXFRA%2FYbAUpBYbUVYiRQzkuVH4Xue6Z7cs8KKeP1mV4KnStbJAiTxMptblB6Q3RwJIKNqvpu%2BVHcySXZDAQBK17Zcjsrrir7k6iChjdNkwADdNXumUFlTu6ckU4JPsyUheNJ5zhkNWJr7Cj46CStpRJD1JWd7xUopTw5yy%2BRf43CnYAEhCUMYk1RQSIM8beCGzvjsT6PfdN5ozMJ7NjcMGOqUBTGxXduLRz%2Fs7bhd9KewKN4yn6D5o5cfXcM7y3rInykVui4wL7mqjcB5c2cFTQvVgzopsb8XsnPMphEY4r64S8l1qUtqP5HJfNMjdl7V2HuSEVavd6QQZjnwcRb4r2%2F6ZOwUp0lBzczigLEwKTM9V55Cf7Tayf1KjXdELES4CW%2BA3mHsZ%2BhaR4VbQ0sz4CymrkuFYuyrN3gpCExXc7GAj%2F464kBob&X-Amz-Signature=5ab58418e00d6458d1f104e697f04cf98ceaf6a88239a1b720e5e312e03e9a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
