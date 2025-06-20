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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263NAVQ2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwJxYQappuvt4jSuUXev8WIylaOWzbL%2FucA3PaRBvqwIhAOp4OuCLFBrR5SHaMJexl2i81UWuIgW5nvEkqgGfnwGGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUNvPprxb%2BJeVVdJ8q3AOToPM9KxxWWEaVevo6brTn21UQ7N60uh0io1hS%2B6h7I2AKh06D5qeAnDbh%2BRDzcJEtCtsyYVpJjLFuDti3AMAGmbtbcKBjyfP%2BB3t1IpvURY9BNDISiCgrTbS7be8OceCD7%2BokZHSdc6W%2Fl2DgNO4Fnva4lswXEKSIVboeICFCj7AG4LHBwny4kD6yKhKzfF%2FD4HOMVd6J3cjKNzkM%2BayJhv4N%2FN3hRGdHwl0EtymOST9E8hCJPIOXJKZxsTw5SpA5MxCTMoUZg9V13vnU9%2F%2FhsSOQbCmAhhQWCZSu5QIPu%2BxjFcExhW0EDh5SkAPUTe1B8msiwYAPehaXW0b98BDExZwo78b8RKfKnQ1KEqkVb4hneDLzSvL%2FvdHyb4nEtE9fLsTMkoIjpednQaJwpkyaNHud%2BuXKciISfM1IqlhHpkXMIeLQireAYY37Fnw3KJpNfLNqNCUEVfmkXG6hFK5a%2Bhqobfwmzw8Dh8SO7wfx263AElOUgygk06shuSlM525S3zV8yb0y4tbL%2BluuYD2I3ENwGDyhSdQm7oCgjHTBLQn3rZ6zxKjJ1D2APUjot7278fQqUxfXZOFmpnDgnUEWkiGvRnVOpdn9Jez8KFRNwg%2F0xAwY%2FfnQRQhhMTCOs9bCBjqkAVlvnYzkSLVumBoBkWUTBHSGUCxPONOmenBb4lJG5yTEi%2FXSZA5E8SK7W0Za3GAW2MFgMeLvBQui7MbVOPzqsZrtSI44vm5UwTvFdV3UQ5vVRdEIr6Dnl7RPBovg4TQjwgWhQwekaKgC26BAjCG9gv6DAPtI9sivpsh3VgMwTSmc%2F%2F7zI6yGm8k1P6bwqR%2BUBQP0TJKT%2BK%2FcDAfPCjM9H8FnBRkf&X-Amz-Signature=fca324ca884d52c99284622d3c7f0561e23b3cc542dac87970b4a78824b51747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263NAVQ2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwJxYQappuvt4jSuUXev8WIylaOWzbL%2FucA3PaRBvqwIhAOp4OuCLFBrR5SHaMJexl2i81UWuIgW5nvEkqgGfnwGGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUNvPprxb%2BJeVVdJ8q3AOToPM9KxxWWEaVevo6brTn21UQ7N60uh0io1hS%2B6h7I2AKh06D5qeAnDbh%2BRDzcJEtCtsyYVpJjLFuDti3AMAGmbtbcKBjyfP%2BB3t1IpvURY9BNDISiCgrTbS7be8OceCD7%2BokZHSdc6W%2Fl2DgNO4Fnva4lswXEKSIVboeICFCj7AG4LHBwny4kD6yKhKzfF%2FD4HOMVd6J3cjKNzkM%2BayJhv4N%2FN3hRGdHwl0EtymOST9E8hCJPIOXJKZxsTw5SpA5MxCTMoUZg9V13vnU9%2F%2FhsSOQbCmAhhQWCZSu5QIPu%2BxjFcExhW0EDh5SkAPUTe1B8msiwYAPehaXW0b98BDExZwo78b8RKfKnQ1KEqkVb4hneDLzSvL%2FvdHyb4nEtE9fLsTMkoIjpednQaJwpkyaNHud%2BuXKciISfM1IqlhHpkXMIeLQireAYY37Fnw3KJpNfLNqNCUEVfmkXG6hFK5a%2Bhqobfwmzw8Dh8SO7wfx263AElOUgygk06shuSlM525S3zV8yb0y4tbL%2BluuYD2I3ENwGDyhSdQm7oCgjHTBLQn3rZ6zxKjJ1D2APUjot7278fQqUxfXZOFmpnDgnUEWkiGvRnVOpdn9Jez8KFRNwg%2F0xAwY%2FfnQRQhhMTCOs9bCBjqkAVlvnYzkSLVumBoBkWUTBHSGUCxPONOmenBb4lJG5yTEi%2FXSZA5E8SK7W0Za3GAW2MFgMeLvBQui7MbVOPzqsZrtSI44vm5UwTvFdV3UQ5vVRdEIr6Dnl7RPBovg4TQjwgWhQwekaKgC26BAjCG9gv6DAPtI9sivpsh3VgMwTSmc%2F%2F7zI6yGm8k1P6bwqR%2BUBQP0TJKT%2BK%2FcDAfPCjM9H8FnBRkf&X-Amz-Signature=9a56b5b9d5c7c5bb416bcf8dfc729751f962433cee60aaf367ecb3b8626791fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263NAVQ2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwJxYQappuvt4jSuUXev8WIylaOWzbL%2FucA3PaRBvqwIhAOp4OuCLFBrR5SHaMJexl2i81UWuIgW5nvEkqgGfnwGGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUNvPprxb%2BJeVVdJ8q3AOToPM9KxxWWEaVevo6brTn21UQ7N60uh0io1hS%2B6h7I2AKh06D5qeAnDbh%2BRDzcJEtCtsyYVpJjLFuDti3AMAGmbtbcKBjyfP%2BB3t1IpvURY9BNDISiCgrTbS7be8OceCD7%2BokZHSdc6W%2Fl2DgNO4Fnva4lswXEKSIVboeICFCj7AG4LHBwny4kD6yKhKzfF%2FD4HOMVd6J3cjKNzkM%2BayJhv4N%2FN3hRGdHwl0EtymOST9E8hCJPIOXJKZxsTw5SpA5MxCTMoUZg9V13vnU9%2F%2FhsSOQbCmAhhQWCZSu5QIPu%2BxjFcExhW0EDh5SkAPUTe1B8msiwYAPehaXW0b98BDExZwo78b8RKfKnQ1KEqkVb4hneDLzSvL%2FvdHyb4nEtE9fLsTMkoIjpednQaJwpkyaNHud%2BuXKciISfM1IqlhHpkXMIeLQireAYY37Fnw3KJpNfLNqNCUEVfmkXG6hFK5a%2Bhqobfwmzw8Dh8SO7wfx263AElOUgygk06shuSlM525S3zV8yb0y4tbL%2BluuYD2I3ENwGDyhSdQm7oCgjHTBLQn3rZ6zxKjJ1D2APUjot7278fQqUxfXZOFmpnDgnUEWkiGvRnVOpdn9Jez8KFRNwg%2F0xAwY%2FfnQRQhhMTCOs9bCBjqkAVlvnYzkSLVumBoBkWUTBHSGUCxPONOmenBb4lJG5yTEi%2FXSZA5E8SK7W0Za3GAW2MFgMeLvBQui7MbVOPzqsZrtSI44vm5UwTvFdV3UQ5vVRdEIr6Dnl7RPBovg4TQjwgWhQwekaKgC26BAjCG9gv6DAPtI9sivpsh3VgMwTSmc%2F%2F7zI6yGm8k1P6bwqR%2BUBQP0TJKT%2BK%2FcDAfPCjM9H8FnBRkf&X-Amz-Signature=a2bb751e3ee8aac568cb5dc02ada2707837a6fcce0a9dcdf2b32bb8997e5faf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263NAVQ2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwJxYQappuvt4jSuUXev8WIylaOWzbL%2FucA3PaRBvqwIhAOp4OuCLFBrR5SHaMJexl2i81UWuIgW5nvEkqgGfnwGGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUNvPprxb%2BJeVVdJ8q3AOToPM9KxxWWEaVevo6brTn21UQ7N60uh0io1hS%2B6h7I2AKh06D5qeAnDbh%2BRDzcJEtCtsyYVpJjLFuDti3AMAGmbtbcKBjyfP%2BB3t1IpvURY9BNDISiCgrTbS7be8OceCD7%2BokZHSdc6W%2Fl2DgNO4Fnva4lswXEKSIVboeICFCj7AG4LHBwny4kD6yKhKzfF%2FD4HOMVd6J3cjKNzkM%2BayJhv4N%2FN3hRGdHwl0EtymOST9E8hCJPIOXJKZxsTw5SpA5MxCTMoUZg9V13vnU9%2F%2FhsSOQbCmAhhQWCZSu5QIPu%2BxjFcExhW0EDh5SkAPUTe1B8msiwYAPehaXW0b98BDExZwo78b8RKfKnQ1KEqkVb4hneDLzSvL%2FvdHyb4nEtE9fLsTMkoIjpednQaJwpkyaNHud%2BuXKciISfM1IqlhHpkXMIeLQireAYY37Fnw3KJpNfLNqNCUEVfmkXG6hFK5a%2Bhqobfwmzw8Dh8SO7wfx263AElOUgygk06shuSlM525S3zV8yb0y4tbL%2BluuYD2I3ENwGDyhSdQm7oCgjHTBLQn3rZ6zxKjJ1D2APUjot7278fQqUxfXZOFmpnDgnUEWkiGvRnVOpdn9Jez8KFRNwg%2F0xAwY%2FfnQRQhhMTCOs9bCBjqkAVlvnYzkSLVumBoBkWUTBHSGUCxPONOmenBb4lJG5yTEi%2FXSZA5E8SK7W0Za3GAW2MFgMeLvBQui7MbVOPzqsZrtSI44vm5UwTvFdV3UQ5vVRdEIr6Dnl7RPBovg4TQjwgWhQwekaKgC26BAjCG9gv6DAPtI9sivpsh3VgMwTSmc%2F%2F7zI6yGm8k1P6bwqR%2BUBQP0TJKT%2BK%2FcDAfPCjM9H8FnBRkf&X-Amz-Signature=6f3824df9976c7be064a3c6c807ea21ad865eb163842598def50e46e9b0b531e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263NAVQ2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwJxYQappuvt4jSuUXev8WIylaOWzbL%2FucA3PaRBvqwIhAOp4OuCLFBrR5SHaMJexl2i81UWuIgW5nvEkqgGfnwGGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUNvPprxb%2BJeVVdJ8q3AOToPM9KxxWWEaVevo6brTn21UQ7N60uh0io1hS%2B6h7I2AKh06D5qeAnDbh%2BRDzcJEtCtsyYVpJjLFuDti3AMAGmbtbcKBjyfP%2BB3t1IpvURY9BNDISiCgrTbS7be8OceCD7%2BokZHSdc6W%2Fl2DgNO4Fnva4lswXEKSIVboeICFCj7AG4LHBwny4kD6yKhKzfF%2FD4HOMVd6J3cjKNzkM%2BayJhv4N%2FN3hRGdHwl0EtymOST9E8hCJPIOXJKZxsTw5SpA5MxCTMoUZg9V13vnU9%2F%2FhsSOQbCmAhhQWCZSu5QIPu%2BxjFcExhW0EDh5SkAPUTe1B8msiwYAPehaXW0b98BDExZwo78b8RKfKnQ1KEqkVb4hneDLzSvL%2FvdHyb4nEtE9fLsTMkoIjpednQaJwpkyaNHud%2BuXKciISfM1IqlhHpkXMIeLQireAYY37Fnw3KJpNfLNqNCUEVfmkXG6hFK5a%2Bhqobfwmzw8Dh8SO7wfx263AElOUgygk06shuSlM525S3zV8yb0y4tbL%2BluuYD2I3ENwGDyhSdQm7oCgjHTBLQn3rZ6zxKjJ1D2APUjot7278fQqUxfXZOFmpnDgnUEWkiGvRnVOpdn9Jez8KFRNwg%2F0xAwY%2FfnQRQhhMTCOs9bCBjqkAVlvnYzkSLVumBoBkWUTBHSGUCxPONOmenBb4lJG5yTEi%2FXSZA5E8SK7W0Za3GAW2MFgMeLvBQui7MbVOPzqsZrtSI44vm5UwTvFdV3UQ5vVRdEIr6Dnl7RPBovg4TQjwgWhQwekaKgC26BAjCG9gv6DAPtI9sivpsh3VgMwTSmc%2F%2F7zI6yGm8k1P6bwqR%2BUBQP0TJKT%2BK%2FcDAfPCjM9H8FnBRkf&X-Amz-Signature=1ca23f687b95d0f7013bf93f0d19807da6e7843de712c0e99388579deebc89d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263NAVQ2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwJxYQappuvt4jSuUXev8WIylaOWzbL%2FucA3PaRBvqwIhAOp4OuCLFBrR5SHaMJexl2i81UWuIgW5nvEkqgGfnwGGKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUNvPprxb%2BJeVVdJ8q3AOToPM9KxxWWEaVevo6brTn21UQ7N60uh0io1hS%2B6h7I2AKh06D5qeAnDbh%2BRDzcJEtCtsyYVpJjLFuDti3AMAGmbtbcKBjyfP%2BB3t1IpvURY9BNDISiCgrTbS7be8OceCD7%2BokZHSdc6W%2Fl2DgNO4Fnva4lswXEKSIVboeICFCj7AG4LHBwny4kD6yKhKzfF%2FD4HOMVd6J3cjKNzkM%2BayJhv4N%2FN3hRGdHwl0EtymOST9E8hCJPIOXJKZxsTw5SpA5MxCTMoUZg9V13vnU9%2F%2FhsSOQbCmAhhQWCZSu5QIPu%2BxjFcExhW0EDh5SkAPUTe1B8msiwYAPehaXW0b98BDExZwo78b8RKfKnQ1KEqkVb4hneDLzSvL%2FvdHyb4nEtE9fLsTMkoIjpednQaJwpkyaNHud%2BuXKciISfM1IqlhHpkXMIeLQireAYY37Fnw3KJpNfLNqNCUEVfmkXG6hFK5a%2Bhqobfwmzw8Dh8SO7wfx263AElOUgygk06shuSlM525S3zV8yb0y4tbL%2BluuYD2I3ENwGDyhSdQm7oCgjHTBLQn3rZ6zxKjJ1D2APUjot7278fQqUxfXZOFmpnDgnUEWkiGvRnVOpdn9Jez8KFRNwg%2F0xAwY%2FfnQRQhhMTCOs9bCBjqkAVlvnYzkSLVumBoBkWUTBHSGUCxPONOmenBb4lJG5yTEi%2FXSZA5E8SK7W0Za3GAW2MFgMeLvBQui7MbVOPzqsZrtSI44vm5UwTvFdV3UQ5vVRdEIr6Dnl7RPBovg4TQjwgWhQwekaKgC26BAjCG9gv6DAPtI9sivpsh3VgMwTSmc%2F%2F7zI6yGm8k1P6bwqR%2BUBQP0TJKT%2BK%2FcDAfPCjM9H8FnBRkf&X-Amz-Signature=75249d111f43b413232d4dc09445f5f23a381ff05fddde19d039c336c701cf8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
