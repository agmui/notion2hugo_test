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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KXOOWE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFldpbIjOja5eqUSJjgagfkao%2B%2FQ7aTUAcR3YlHtVCc2AiEA94tiZICQOWEQu9M1GvVIBlNGOpjgs23x%2BpUjXT6KVKAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGrVdE9oKD6L3j7zCrcA03Fcuydl7ZjoikwH9BInMG3EbsSEm8wMqa1IWZfF7GqRmt%2F7IH6udEfenlBn65nEyRL%2BFN1k5qW14dYeeU8bESa%2FA1UdCXwQ9Jcp9oxaNNyTIdGSInxIB7mFzB%2Bh%2Fzv2CNvLlyCDu5yAQ3szCo0K%2FQwh60Q2wiGO7ItX9FmF3qqkQ9Gpv8oF2mxrGaMOUidI4fjEZYpkE5JgYMz8B39A8D0W4yDiiHnpfici3Dq8K3ElhA%2FnQzqQD7Xy9VI6MD1NxzX5ehDiELh6qF6Z7MHvQR8pNTq5UBbfbGvSW6%2Bry%2BinAOViHGZTwjOe0aoDnPIiPFPaPjLhyHsUj3rMhJSPNBZ%2FkxmX8p390chj2499Qea7k%2FJQuxBBleNvjIzYq2IjIgH3C4sA%2B5BM5%2FNU39ATrh%2BqWRcNVBMyyrXmkYHU3YefxDKlcR01EDOPZppT3nyX0iNkwu8AEewAgCJCsCjWYdKXu99bKOnsOU5SYoEYxq3ROk0UMlPWCBE9goCqF2buFSPT8RbtnWJIkRKiIiWcR14uS99PEsZ7PqPe4UgKCEP8FX1rzvM4trDF%2BQHf%2BUA%2BkEzXDSkOBe3sFBp1vQHf7hOqXXQFDVef%2F6NbUoTVz3s7l4Xs0gddapg7L0iMLXY270GOqUBo6SH0Dw4ECx38kc3RuOUDnDFl5912toGtOqmzimL6uBylsmG1etH1GjZpPNOGibk%2FseiMX8nojbvd3mgG%2FDuLh3hG80VOrfMEvaTkQYn6Jh%2FLEmJpDvw0qzkjVQI40QieVUI2bi%2B2DVMtJq8CiHAcmJ2SwIU%2BRpu9YLmng0mHek7QHNfFXy%2FWdEkAo78nOF0RHIcJaBEVss6rTsy84QpEjtqRrvB&X-Amz-Signature=004654901b2cb4100fa06d838bbd4e2b82d468291fe0773d24d972a05676b2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KXOOWE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFldpbIjOja5eqUSJjgagfkao%2B%2FQ7aTUAcR3YlHtVCc2AiEA94tiZICQOWEQu9M1GvVIBlNGOpjgs23x%2BpUjXT6KVKAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGrVdE9oKD6L3j7zCrcA03Fcuydl7ZjoikwH9BInMG3EbsSEm8wMqa1IWZfF7GqRmt%2F7IH6udEfenlBn65nEyRL%2BFN1k5qW14dYeeU8bESa%2FA1UdCXwQ9Jcp9oxaNNyTIdGSInxIB7mFzB%2Bh%2Fzv2CNvLlyCDu5yAQ3szCo0K%2FQwh60Q2wiGO7ItX9FmF3qqkQ9Gpv8oF2mxrGaMOUidI4fjEZYpkE5JgYMz8B39A8D0W4yDiiHnpfici3Dq8K3ElhA%2FnQzqQD7Xy9VI6MD1NxzX5ehDiELh6qF6Z7MHvQR8pNTq5UBbfbGvSW6%2Bry%2BinAOViHGZTwjOe0aoDnPIiPFPaPjLhyHsUj3rMhJSPNBZ%2FkxmX8p390chj2499Qea7k%2FJQuxBBleNvjIzYq2IjIgH3C4sA%2B5BM5%2FNU39ATrh%2BqWRcNVBMyyrXmkYHU3YefxDKlcR01EDOPZppT3nyX0iNkwu8AEewAgCJCsCjWYdKXu99bKOnsOU5SYoEYxq3ROk0UMlPWCBE9goCqF2buFSPT8RbtnWJIkRKiIiWcR14uS99PEsZ7PqPe4UgKCEP8FX1rzvM4trDF%2BQHf%2BUA%2BkEzXDSkOBe3sFBp1vQHf7hOqXXQFDVef%2F6NbUoTVz3s7l4Xs0gddapg7L0iMLXY270GOqUBo6SH0Dw4ECx38kc3RuOUDnDFl5912toGtOqmzimL6uBylsmG1etH1GjZpPNOGibk%2FseiMX8nojbvd3mgG%2FDuLh3hG80VOrfMEvaTkQYn6Jh%2FLEmJpDvw0qzkjVQI40QieVUI2bi%2B2DVMtJq8CiHAcmJ2SwIU%2BRpu9YLmng0mHek7QHNfFXy%2FWdEkAo78nOF0RHIcJaBEVss6rTsy84QpEjtqRrvB&X-Amz-Signature=5bc7582f29e649711ebdca49c5ace902db26b65d5aac22e6d0ad6f90e3af1742&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KXOOWE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFldpbIjOja5eqUSJjgagfkao%2B%2FQ7aTUAcR3YlHtVCc2AiEA94tiZICQOWEQu9M1GvVIBlNGOpjgs23x%2BpUjXT6KVKAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGrVdE9oKD6L3j7zCrcA03Fcuydl7ZjoikwH9BInMG3EbsSEm8wMqa1IWZfF7GqRmt%2F7IH6udEfenlBn65nEyRL%2BFN1k5qW14dYeeU8bESa%2FA1UdCXwQ9Jcp9oxaNNyTIdGSInxIB7mFzB%2Bh%2Fzv2CNvLlyCDu5yAQ3szCo0K%2FQwh60Q2wiGO7ItX9FmF3qqkQ9Gpv8oF2mxrGaMOUidI4fjEZYpkE5JgYMz8B39A8D0W4yDiiHnpfici3Dq8K3ElhA%2FnQzqQD7Xy9VI6MD1NxzX5ehDiELh6qF6Z7MHvQR8pNTq5UBbfbGvSW6%2Bry%2BinAOViHGZTwjOe0aoDnPIiPFPaPjLhyHsUj3rMhJSPNBZ%2FkxmX8p390chj2499Qea7k%2FJQuxBBleNvjIzYq2IjIgH3C4sA%2B5BM5%2FNU39ATrh%2BqWRcNVBMyyrXmkYHU3YefxDKlcR01EDOPZppT3nyX0iNkwu8AEewAgCJCsCjWYdKXu99bKOnsOU5SYoEYxq3ROk0UMlPWCBE9goCqF2buFSPT8RbtnWJIkRKiIiWcR14uS99PEsZ7PqPe4UgKCEP8FX1rzvM4trDF%2BQHf%2BUA%2BkEzXDSkOBe3sFBp1vQHf7hOqXXQFDVef%2F6NbUoTVz3s7l4Xs0gddapg7L0iMLXY270GOqUBo6SH0Dw4ECx38kc3RuOUDnDFl5912toGtOqmzimL6uBylsmG1etH1GjZpPNOGibk%2FseiMX8nojbvd3mgG%2FDuLh3hG80VOrfMEvaTkQYn6Jh%2FLEmJpDvw0qzkjVQI40QieVUI2bi%2B2DVMtJq8CiHAcmJ2SwIU%2BRpu9YLmng0mHek7QHNfFXy%2FWdEkAo78nOF0RHIcJaBEVss6rTsy84QpEjtqRrvB&X-Amz-Signature=fa42aef70257fcbae8af30a58c84667c4b17f0455e7508d136565f2feb3d2532&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KXOOWE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFldpbIjOja5eqUSJjgagfkao%2B%2FQ7aTUAcR3YlHtVCc2AiEA94tiZICQOWEQu9M1GvVIBlNGOpjgs23x%2BpUjXT6KVKAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGrVdE9oKD6L3j7zCrcA03Fcuydl7ZjoikwH9BInMG3EbsSEm8wMqa1IWZfF7GqRmt%2F7IH6udEfenlBn65nEyRL%2BFN1k5qW14dYeeU8bESa%2FA1UdCXwQ9Jcp9oxaNNyTIdGSInxIB7mFzB%2Bh%2Fzv2CNvLlyCDu5yAQ3szCo0K%2FQwh60Q2wiGO7ItX9FmF3qqkQ9Gpv8oF2mxrGaMOUidI4fjEZYpkE5JgYMz8B39A8D0W4yDiiHnpfici3Dq8K3ElhA%2FnQzqQD7Xy9VI6MD1NxzX5ehDiELh6qF6Z7MHvQR8pNTq5UBbfbGvSW6%2Bry%2BinAOViHGZTwjOe0aoDnPIiPFPaPjLhyHsUj3rMhJSPNBZ%2FkxmX8p390chj2499Qea7k%2FJQuxBBleNvjIzYq2IjIgH3C4sA%2B5BM5%2FNU39ATrh%2BqWRcNVBMyyrXmkYHU3YefxDKlcR01EDOPZppT3nyX0iNkwu8AEewAgCJCsCjWYdKXu99bKOnsOU5SYoEYxq3ROk0UMlPWCBE9goCqF2buFSPT8RbtnWJIkRKiIiWcR14uS99PEsZ7PqPe4UgKCEP8FX1rzvM4trDF%2BQHf%2BUA%2BkEzXDSkOBe3sFBp1vQHf7hOqXXQFDVef%2F6NbUoTVz3s7l4Xs0gddapg7L0iMLXY270GOqUBo6SH0Dw4ECx38kc3RuOUDnDFl5912toGtOqmzimL6uBylsmG1etH1GjZpPNOGibk%2FseiMX8nojbvd3mgG%2FDuLh3hG80VOrfMEvaTkQYn6Jh%2FLEmJpDvw0qzkjVQI40QieVUI2bi%2B2DVMtJq8CiHAcmJ2SwIU%2BRpu9YLmng0mHek7QHNfFXy%2FWdEkAo78nOF0RHIcJaBEVss6rTsy84QpEjtqRrvB&X-Amz-Signature=127a85f3dd0ac03a5b9b4b3c50d20b126ac3e052da78958c1340e9baeae143dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KXOOWE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFldpbIjOja5eqUSJjgagfkao%2B%2FQ7aTUAcR3YlHtVCc2AiEA94tiZICQOWEQu9M1GvVIBlNGOpjgs23x%2BpUjXT6KVKAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGrVdE9oKD6L3j7zCrcA03Fcuydl7ZjoikwH9BInMG3EbsSEm8wMqa1IWZfF7GqRmt%2F7IH6udEfenlBn65nEyRL%2BFN1k5qW14dYeeU8bESa%2FA1UdCXwQ9Jcp9oxaNNyTIdGSInxIB7mFzB%2Bh%2Fzv2CNvLlyCDu5yAQ3szCo0K%2FQwh60Q2wiGO7ItX9FmF3qqkQ9Gpv8oF2mxrGaMOUidI4fjEZYpkE5JgYMz8B39A8D0W4yDiiHnpfici3Dq8K3ElhA%2FnQzqQD7Xy9VI6MD1NxzX5ehDiELh6qF6Z7MHvQR8pNTq5UBbfbGvSW6%2Bry%2BinAOViHGZTwjOe0aoDnPIiPFPaPjLhyHsUj3rMhJSPNBZ%2FkxmX8p390chj2499Qea7k%2FJQuxBBleNvjIzYq2IjIgH3C4sA%2B5BM5%2FNU39ATrh%2BqWRcNVBMyyrXmkYHU3YefxDKlcR01EDOPZppT3nyX0iNkwu8AEewAgCJCsCjWYdKXu99bKOnsOU5SYoEYxq3ROk0UMlPWCBE9goCqF2buFSPT8RbtnWJIkRKiIiWcR14uS99PEsZ7PqPe4UgKCEP8FX1rzvM4trDF%2BQHf%2BUA%2BkEzXDSkOBe3sFBp1vQHf7hOqXXQFDVef%2F6NbUoTVz3s7l4Xs0gddapg7L0iMLXY270GOqUBo6SH0Dw4ECx38kc3RuOUDnDFl5912toGtOqmzimL6uBylsmG1etH1GjZpPNOGibk%2FseiMX8nojbvd3mgG%2FDuLh3hG80VOrfMEvaTkQYn6Jh%2FLEmJpDvw0qzkjVQI40QieVUI2bi%2B2DVMtJq8CiHAcmJ2SwIU%2BRpu9YLmng0mHek7QHNfFXy%2FWdEkAo78nOF0RHIcJaBEVss6rTsy84QpEjtqRrvB&X-Amz-Signature=fdc8227fce985c7c379252dabebb3dbe3d728a59547cc9c8af41016050cd6ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KXOOWE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFldpbIjOja5eqUSJjgagfkao%2B%2FQ7aTUAcR3YlHtVCc2AiEA94tiZICQOWEQu9M1GvVIBlNGOpjgs23x%2BpUjXT6KVKAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGrVdE9oKD6L3j7zCrcA03Fcuydl7ZjoikwH9BInMG3EbsSEm8wMqa1IWZfF7GqRmt%2F7IH6udEfenlBn65nEyRL%2BFN1k5qW14dYeeU8bESa%2FA1UdCXwQ9Jcp9oxaNNyTIdGSInxIB7mFzB%2Bh%2Fzv2CNvLlyCDu5yAQ3szCo0K%2FQwh60Q2wiGO7ItX9FmF3qqkQ9Gpv8oF2mxrGaMOUidI4fjEZYpkE5JgYMz8B39A8D0W4yDiiHnpfici3Dq8K3ElhA%2FnQzqQD7Xy9VI6MD1NxzX5ehDiELh6qF6Z7MHvQR8pNTq5UBbfbGvSW6%2Bry%2BinAOViHGZTwjOe0aoDnPIiPFPaPjLhyHsUj3rMhJSPNBZ%2FkxmX8p390chj2499Qea7k%2FJQuxBBleNvjIzYq2IjIgH3C4sA%2B5BM5%2FNU39ATrh%2BqWRcNVBMyyrXmkYHU3YefxDKlcR01EDOPZppT3nyX0iNkwu8AEewAgCJCsCjWYdKXu99bKOnsOU5SYoEYxq3ROk0UMlPWCBE9goCqF2buFSPT8RbtnWJIkRKiIiWcR14uS99PEsZ7PqPe4UgKCEP8FX1rzvM4trDF%2BQHf%2BUA%2BkEzXDSkOBe3sFBp1vQHf7hOqXXQFDVef%2F6NbUoTVz3s7l4Xs0gddapg7L0iMLXY270GOqUBo6SH0Dw4ECx38kc3RuOUDnDFl5912toGtOqmzimL6uBylsmG1etH1GjZpPNOGibk%2FseiMX8nojbvd3mgG%2FDuLh3hG80VOrfMEvaTkQYn6Jh%2FLEmJpDvw0qzkjVQI40QieVUI2bi%2B2DVMtJq8CiHAcmJ2SwIU%2BRpu9YLmng0mHek7QHNfFXy%2FWdEkAo78nOF0RHIcJaBEVss6rTsy84QpEjtqRrvB&X-Amz-Signature=d8341307eeb10217c784fab6ae2e0204301a80db77c26d666d94ba21c5e9cbbd&X-Amz-SignedHeaders=host&x-id=GetObject)
