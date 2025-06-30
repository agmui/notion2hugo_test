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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDXLFO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWoZ1kIo4JX1Oa5oepXeGoX7LBRd8aFEDrQS7AHI9QAIgNXrTXkogV4JYZ4fESuZ8w4qwfwTttiOMadxaCnxKSnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEpIgtA5RAuBXjNIyrcA8W%2BP3ZdwWBrahVY81r0lR38xmeS7ch%2F8dIPFVkDNfagY4pqSb9RzLjSNmoP65N3CTGBFX7YBnVRE2ITmoIy1bXdVvPUv2XMLbQcYeVDYER9WuxQa%2BsYNImJtGqgIKwfBpXRmXW8gRozYCtgpnoRbPptbqZIUQfrbkGK%2Bs%2F0WcRhG14QmjKIT7XE0Xzyku7qBTC8O56qeyJQGrcqBCEi2gNskjV8OPXbL5if1T7Jz7HBO5HoWBD4TMbmdtInd1jnN1yvpP4swhnJNNBS7I4vHoufiTp%2FXP4SWX5cljKem6wsrk3BGy5EdkJDy8Kg5ldFRgMS%2Fl5gc%2FTbdFL%2Fb0h1q9CIJy50px8I2RJhdxVA1XUF2gnfAYBERnRewzn1w6L4B%2BTFO3NDHX6lbjcJzCc7I3aWPGQpfUIuaLKHbPkhy7i4Bz0bHhbPM2lI8zxCIyESIqz%2Fnktn2Z59DsdDbv0Xb1vp7E8raZ%2FTL4x0bO5Q8DNCvzoaLtsCXuZK0ATdFFfKVvhSJjzinOnRt01DBvAfVdVHtipc7zhks%2B62qptt0e6l4b%2BFRjj9Cc6t%2BJMYOs5mpyT7f9b7B2PJ52D%2FY4901yTl3N1PClDgoR2aLaeK8LgSDTfk1MbA86QcDIk9MODqisMGOqUBKeD6qYhKS%2FOaUaN2g7cFECIVZPxc1MJzB4EvrkrFE2TaAqXfYLYleS7Mj%2Bjptm6ci0Qnc2VUdoX9WxAG5nH7YMjkjM8mtfLLjhvkJI%2F4fIWWBDmzqJmK9Lb6f4iZXcx2c6KFxzMfLB1IWSjJCqs7sEbXVXH1G%2FaIoMDzms1nmewjDvq%2B7gB52XnN0sRG9VyfyLCtE0c6qeuJ5aDicDPBtcr3ln0N&X-Amz-Signature=c552bd24c7b03d6e24a0605e29d421caf6bfee701d4d46a1cb20de16262fe809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDXLFO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWoZ1kIo4JX1Oa5oepXeGoX7LBRd8aFEDrQS7AHI9QAIgNXrTXkogV4JYZ4fESuZ8w4qwfwTttiOMadxaCnxKSnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEpIgtA5RAuBXjNIyrcA8W%2BP3ZdwWBrahVY81r0lR38xmeS7ch%2F8dIPFVkDNfagY4pqSb9RzLjSNmoP65N3CTGBFX7YBnVRE2ITmoIy1bXdVvPUv2XMLbQcYeVDYER9WuxQa%2BsYNImJtGqgIKwfBpXRmXW8gRozYCtgpnoRbPptbqZIUQfrbkGK%2Bs%2F0WcRhG14QmjKIT7XE0Xzyku7qBTC8O56qeyJQGrcqBCEi2gNskjV8OPXbL5if1T7Jz7HBO5HoWBD4TMbmdtInd1jnN1yvpP4swhnJNNBS7I4vHoufiTp%2FXP4SWX5cljKem6wsrk3BGy5EdkJDy8Kg5ldFRgMS%2Fl5gc%2FTbdFL%2Fb0h1q9CIJy50px8I2RJhdxVA1XUF2gnfAYBERnRewzn1w6L4B%2BTFO3NDHX6lbjcJzCc7I3aWPGQpfUIuaLKHbPkhy7i4Bz0bHhbPM2lI8zxCIyESIqz%2Fnktn2Z59DsdDbv0Xb1vp7E8raZ%2FTL4x0bO5Q8DNCvzoaLtsCXuZK0ATdFFfKVvhSJjzinOnRt01DBvAfVdVHtipc7zhks%2B62qptt0e6l4b%2BFRjj9Cc6t%2BJMYOs5mpyT7f9b7B2PJ52D%2FY4901yTl3N1PClDgoR2aLaeK8LgSDTfk1MbA86QcDIk9MODqisMGOqUBKeD6qYhKS%2FOaUaN2g7cFECIVZPxc1MJzB4EvrkrFE2TaAqXfYLYleS7Mj%2Bjptm6ci0Qnc2VUdoX9WxAG5nH7YMjkjM8mtfLLjhvkJI%2F4fIWWBDmzqJmK9Lb6f4iZXcx2c6KFxzMfLB1IWSjJCqs7sEbXVXH1G%2FaIoMDzms1nmewjDvq%2B7gB52XnN0sRG9VyfyLCtE0c6qeuJ5aDicDPBtcr3ln0N&X-Amz-Signature=215c0c4488dec74ef706c95c43d7facc19757b0c8041e6ee7d834226127c2cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDXLFO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWoZ1kIo4JX1Oa5oepXeGoX7LBRd8aFEDrQS7AHI9QAIgNXrTXkogV4JYZ4fESuZ8w4qwfwTttiOMadxaCnxKSnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEpIgtA5RAuBXjNIyrcA8W%2BP3ZdwWBrahVY81r0lR38xmeS7ch%2F8dIPFVkDNfagY4pqSb9RzLjSNmoP65N3CTGBFX7YBnVRE2ITmoIy1bXdVvPUv2XMLbQcYeVDYER9WuxQa%2BsYNImJtGqgIKwfBpXRmXW8gRozYCtgpnoRbPptbqZIUQfrbkGK%2Bs%2F0WcRhG14QmjKIT7XE0Xzyku7qBTC8O56qeyJQGrcqBCEi2gNskjV8OPXbL5if1T7Jz7HBO5HoWBD4TMbmdtInd1jnN1yvpP4swhnJNNBS7I4vHoufiTp%2FXP4SWX5cljKem6wsrk3BGy5EdkJDy8Kg5ldFRgMS%2Fl5gc%2FTbdFL%2Fb0h1q9CIJy50px8I2RJhdxVA1XUF2gnfAYBERnRewzn1w6L4B%2BTFO3NDHX6lbjcJzCc7I3aWPGQpfUIuaLKHbPkhy7i4Bz0bHhbPM2lI8zxCIyESIqz%2Fnktn2Z59DsdDbv0Xb1vp7E8raZ%2FTL4x0bO5Q8DNCvzoaLtsCXuZK0ATdFFfKVvhSJjzinOnRt01DBvAfVdVHtipc7zhks%2B62qptt0e6l4b%2BFRjj9Cc6t%2BJMYOs5mpyT7f9b7B2PJ52D%2FY4901yTl3N1PClDgoR2aLaeK8LgSDTfk1MbA86QcDIk9MODqisMGOqUBKeD6qYhKS%2FOaUaN2g7cFECIVZPxc1MJzB4EvrkrFE2TaAqXfYLYleS7Mj%2Bjptm6ci0Qnc2VUdoX9WxAG5nH7YMjkjM8mtfLLjhvkJI%2F4fIWWBDmzqJmK9Lb6f4iZXcx2c6KFxzMfLB1IWSjJCqs7sEbXVXH1G%2FaIoMDzms1nmewjDvq%2B7gB52XnN0sRG9VyfyLCtE0c6qeuJ5aDicDPBtcr3ln0N&X-Amz-Signature=f2023a7fe691d6d48a4d481aef50ed309b25a95aac545c21c0b8043c61da9327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDXLFO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWoZ1kIo4JX1Oa5oepXeGoX7LBRd8aFEDrQS7AHI9QAIgNXrTXkogV4JYZ4fESuZ8w4qwfwTttiOMadxaCnxKSnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEpIgtA5RAuBXjNIyrcA8W%2BP3ZdwWBrahVY81r0lR38xmeS7ch%2F8dIPFVkDNfagY4pqSb9RzLjSNmoP65N3CTGBFX7YBnVRE2ITmoIy1bXdVvPUv2XMLbQcYeVDYER9WuxQa%2BsYNImJtGqgIKwfBpXRmXW8gRozYCtgpnoRbPptbqZIUQfrbkGK%2Bs%2F0WcRhG14QmjKIT7XE0Xzyku7qBTC8O56qeyJQGrcqBCEi2gNskjV8OPXbL5if1T7Jz7HBO5HoWBD4TMbmdtInd1jnN1yvpP4swhnJNNBS7I4vHoufiTp%2FXP4SWX5cljKem6wsrk3BGy5EdkJDy8Kg5ldFRgMS%2Fl5gc%2FTbdFL%2Fb0h1q9CIJy50px8I2RJhdxVA1XUF2gnfAYBERnRewzn1w6L4B%2BTFO3NDHX6lbjcJzCc7I3aWPGQpfUIuaLKHbPkhy7i4Bz0bHhbPM2lI8zxCIyESIqz%2Fnktn2Z59DsdDbv0Xb1vp7E8raZ%2FTL4x0bO5Q8DNCvzoaLtsCXuZK0ATdFFfKVvhSJjzinOnRt01DBvAfVdVHtipc7zhks%2B62qptt0e6l4b%2BFRjj9Cc6t%2BJMYOs5mpyT7f9b7B2PJ52D%2FY4901yTl3N1PClDgoR2aLaeK8LgSDTfk1MbA86QcDIk9MODqisMGOqUBKeD6qYhKS%2FOaUaN2g7cFECIVZPxc1MJzB4EvrkrFE2TaAqXfYLYleS7Mj%2Bjptm6ci0Qnc2VUdoX9WxAG5nH7YMjkjM8mtfLLjhvkJI%2F4fIWWBDmzqJmK9Lb6f4iZXcx2c6KFxzMfLB1IWSjJCqs7sEbXVXH1G%2FaIoMDzms1nmewjDvq%2B7gB52XnN0sRG9VyfyLCtE0c6qeuJ5aDicDPBtcr3ln0N&X-Amz-Signature=3e54ba9aaf4c2973cf97ece0f5436b5a52886979690269bd7543946c68149ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDXLFO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWoZ1kIo4JX1Oa5oepXeGoX7LBRd8aFEDrQS7AHI9QAIgNXrTXkogV4JYZ4fESuZ8w4qwfwTttiOMadxaCnxKSnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEpIgtA5RAuBXjNIyrcA8W%2BP3ZdwWBrahVY81r0lR38xmeS7ch%2F8dIPFVkDNfagY4pqSb9RzLjSNmoP65N3CTGBFX7YBnVRE2ITmoIy1bXdVvPUv2XMLbQcYeVDYER9WuxQa%2BsYNImJtGqgIKwfBpXRmXW8gRozYCtgpnoRbPptbqZIUQfrbkGK%2Bs%2F0WcRhG14QmjKIT7XE0Xzyku7qBTC8O56qeyJQGrcqBCEi2gNskjV8OPXbL5if1T7Jz7HBO5HoWBD4TMbmdtInd1jnN1yvpP4swhnJNNBS7I4vHoufiTp%2FXP4SWX5cljKem6wsrk3BGy5EdkJDy8Kg5ldFRgMS%2Fl5gc%2FTbdFL%2Fb0h1q9CIJy50px8I2RJhdxVA1XUF2gnfAYBERnRewzn1w6L4B%2BTFO3NDHX6lbjcJzCc7I3aWPGQpfUIuaLKHbPkhy7i4Bz0bHhbPM2lI8zxCIyESIqz%2Fnktn2Z59DsdDbv0Xb1vp7E8raZ%2FTL4x0bO5Q8DNCvzoaLtsCXuZK0ATdFFfKVvhSJjzinOnRt01DBvAfVdVHtipc7zhks%2B62qptt0e6l4b%2BFRjj9Cc6t%2BJMYOs5mpyT7f9b7B2PJ52D%2FY4901yTl3N1PClDgoR2aLaeK8LgSDTfk1MbA86QcDIk9MODqisMGOqUBKeD6qYhKS%2FOaUaN2g7cFECIVZPxc1MJzB4EvrkrFE2TaAqXfYLYleS7Mj%2Bjptm6ci0Qnc2VUdoX9WxAG5nH7YMjkjM8mtfLLjhvkJI%2F4fIWWBDmzqJmK9Lb6f4iZXcx2c6KFxzMfLB1IWSjJCqs7sEbXVXH1G%2FaIoMDzms1nmewjDvq%2B7gB52XnN0sRG9VyfyLCtE0c6qeuJ5aDicDPBtcr3ln0N&X-Amz-Signature=f5df1b0d33d786ff24c7ff43e6a89bdfec327ddd52ddfe93ae967da78899d964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FDDXLFO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaWoZ1kIo4JX1Oa5oepXeGoX7LBRd8aFEDrQS7AHI9QAIgNXrTXkogV4JYZ4fESuZ8w4qwfwTttiOMadxaCnxKSnIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEpIgtA5RAuBXjNIyrcA8W%2BP3ZdwWBrahVY81r0lR38xmeS7ch%2F8dIPFVkDNfagY4pqSb9RzLjSNmoP65N3CTGBFX7YBnVRE2ITmoIy1bXdVvPUv2XMLbQcYeVDYER9WuxQa%2BsYNImJtGqgIKwfBpXRmXW8gRozYCtgpnoRbPptbqZIUQfrbkGK%2Bs%2F0WcRhG14QmjKIT7XE0Xzyku7qBTC8O56qeyJQGrcqBCEi2gNskjV8OPXbL5if1T7Jz7HBO5HoWBD4TMbmdtInd1jnN1yvpP4swhnJNNBS7I4vHoufiTp%2FXP4SWX5cljKem6wsrk3BGy5EdkJDy8Kg5ldFRgMS%2Fl5gc%2FTbdFL%2Fb0h1q9CIJy50px8I2RJhdxVA1XUF2gnfAYBERnRewzn1w6L4B%2BTFO3NDHX6lbjcJzCc7I3aWPGQpfUIuaLKHbPkhy7i4Bz0bHhbPM2lI8zxCIyESIqz%2Fnktn2Z59DsdDbv0Xb1vp7E8raZ%2FTL4x0bO5Q8DNCvzoaLtsCXuZK0ATdFFfKVvhSJjzinOnRt01DBvAfVdVHtipc7zhks%2B62qptt0e6l4b%2BFRjj9Cc6t%2BJMYOs5mpyT7f9b7B2PJ52D%2FY4901yTl3N1PClDgoR2aLaeK8LgSDTfk1MbA86QcDIk9MODqisMGOqUBKeD6qYhKS%2FOaUaN2g7cFECIVZPxc1MJzB4EvrkrFE2TaAqXfYLYleS7Mj%2Bjptm6ci0Qnc2VUdoX9WxAG5nH7YMjkjM8mtfLLjhvkJI%2F4fIWWBDmzqJmK9Lb6f4iZXcx2c6KFxzMfLB1IWSjJCqs7sEbXVXH1G%2FaIoMDzms1nmewjDvq%2B7gB52XnN0sRG9VyfyLCtE0c6qeuJ5aDicDPBtcr3ln0N&X-Amz-Signature=2a8fe7587dc87c3cc6db33d379fa5cba708db923fa7e32aac09b843cc1cab7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
