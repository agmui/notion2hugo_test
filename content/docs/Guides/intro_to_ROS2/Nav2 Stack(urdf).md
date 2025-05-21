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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4LJL7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwjFgTiuifkqA0Ubg3FwU1vFy7Ne9tqd6f5oQZcddkwIhAN1QeJ3Mh%2FSlwXGCj%2BvUcOSqNoW5BQ%2Bl82uAESRm%2Fim%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6qdD2HU9QeF3gRAq3AMQ9NtlVzyRNkszbV2tiAgvCmsCs4fh3SadSSf06c7GPQeilK5BVtMVcrAd301GGvHGOHY10YzdZaLl36Lpd316oWClRaX%2BEYIgFvSgMi8KJ%2FL3qqaDR%2BBXB1mUJPV1a9%2BteRLm%2F5w%2FtwtrjYe58Yask7SsCoJyeg9CUHXiG0q%2BRR%2FxA4Z3OX9PfYkpDDrMXlXGRiYlDQ8D3YQIhQpmgaddEJpppjV4dkQw6Qz3TirpSRe1aibURhYQfCbnH3j%2BzggmHqGG0fAknlsvPS6MJ6Le7UYad6TtcmlAv5kj%2BepJXuJ65MksmfbNqoLYLoLjCX71DkmdDHqJFJQeeoYfKaCv4eloB9794AUPTvZ7XVnqiBew%2BPsvSLWguk5V8Wh8htoTjPJpfZJlovFzkrGrm6SHwsrFAcXhOE%2FzJzLAtMr8BTcjztz7lrO8iTzi%2BZEIvvFxqNHLUgjmt85PcOpb26gwbmW%2F75dtJdqtNuS095PUCFKXe%2FnPQ1GQ7SUsB64xqGUTytuJcqIEUQeL0L7TS5f%2Fj5U%2FC%2FSjuUmeWxJPt7OutQUvaR31kE5UD44rFsZ9qxexdoQz9AV71j7xs82dVSKcqZwLsXqzZLC5Az2t5S13bcjQm%2FDQpm64zGF0yDCHkLXBBjqkATimCyXXm6%2Fsxmv8PDBL5Pose6QR3gN8XHihWkZjsNtdQhuaLnuQoG6NX3p8tc%2FjeaHplL%2B%2FTw%2BS18FrNSGML%2F%2Fwvd%2FbNn51ywMm0MCqyTBSVQ%2FukweT%2FsnNNjgA%2B5ckXjhEScQz4bL%2BExT916fKa%2BpA%2FjIDJuNFfuL9Ku8NmRIgRStHtIxXDMzzGfE%2B9DyhHDp%2BdNmYhrgrjGrhmSA%2FPJrJXGQO&X-Amz-Signature=062f5352fea428a9e725a80e0560893eb9d6cc87c193ba0b61eefb3dc74ee444&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4LJL7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwjFgTiuifkqA0Ubg3FwU1vFy7Ne9tqd6f5oQZcddkwIhAN1QeJ3Mh%2FSlwXGCj%2BvUcOSqNoW5BQ%2Bl82uAESRm%2Fim%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6qdD2HU9QeF3gRAq3AMQ9NtlVzyRNkszbV2tiAgvCmsCs4fh3SadSSf06c7GPQeilK5BVtMVcrAd301GGvHGOHY10YzdZaLl36Lpd316oWClRaX%2BEYIgFvSgMi8KJ%2FL3qqaDR%2BBXB1mUJPV1a9%2BteRLm%2F5w%2FtwtrjYe58Yask7SsCoJyeg9CUHXiG0q%2BRR%2FxA4Z3OX9PfYkpDDrMXlXGRiYlDQ8D3YQIhQpmgaddEJpppjV4dkQw6Qz3TirpSRe1aibURhYQfCbnH3j%2BzggmHqGG0fAknlsvPS6MJ6Le7UYad6TtcmlAv5kj%2BepJXuJ65MksmfbNqoLYLoLjCX71DkmdDHqJFJQeeoYfKaCv4eloB9794AUPTvZ7XVnqiBew%2BPsvSLWguk5V8Wh8htoTjPJpfZJlovFzkrGrm6SHwsrFAcXhOE%2FzJzLAtMr8BTcjztz7lrO8iTzi%2BZEIvvFxqNHLUgjmt85PcOpb26gwbmW%2F75dtJdqtNuS095PUCFKXe%2FnPQ1GQ7SUsB64xqGUTytuJcqIEUQeL0L7TS5f%2Fj5U%2FC%2FSjuUmeWxJPt7OutQUvaR31kE5UD44rFsZ9qxexdoQz9AV71j7xs82dVSKcqZwLsXqzZLC5Az2t5S13bcjQm%2FDQpm64zGF0yDCHkLXBBjqkATimCyXXm6%2Fsxmv8PDBL5Pose6QR3gN8XHihWkZjsNtdQhuaLnuQoG6NX3p8tc%2FjeaHplL%2B%2FTw%2BS18FrNSGML%2F%2Fwvd%2FbNn51ywMm0MCqyTBSVQ%2FukweT%2FsnNNjgA%2B5ckXjhEScQz4bL%2BExT916fKa%2BpA%2FjIDJuNFfuL9Ku8NmRIgRStHtIxXDMzzGfE%2B9DyhHDp%2BdNmYhrgrjGrhmSA%2FPJrJXGQO&X-Amz-Signature=7e78b111c7dbb53f2dca686872dd4bc80c1369156014247fed7085888e9f7ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4LJL7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwjFgTiuifkqA0Ubg3FwU1vFy7Ne9tqd6f5oQZcddkwIhAN1QeJ3Mh%2FSlwXGCj%2BvUcOSqNoW5BQ%2Bl82uAESRm%2Fim%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6qdD2HU9QeF3gRAq3AMQ9NtlVzyRNkszbV2tiAgvCmsCs4fh3SadSSf06c7GPQeilK5BVtMVcrAd301GGvHGOHY10YzdZaLl36Lpd316oWClRaX%2BEYIgFvSgMi8KJ%2FL3qqaDR%2BBXB1mUJPV1a9%2BteRLm%2F5w%2FtwtrjYe58Yask7SsCoJyeg9CUHXiG0q%2BRR%2FxA4Z3OX9PfYkpDDrMXlXGRiYlDQ8D3YQIhQpmgaddEJpppjV4dkQw6Qz3TirpSRe1aibURhYQfCbnH3j%2BzggmHqGG0fAknlsvPS6MJ6Le7UYad6TtcmlAv5kj%2BepJXuJ65MksmfbNqoLYLoLjCX71DkmdDHqJFJQeeoYfKaCv4eloB9794AUPTvZ7XVnqiBew%2BPsvSLWguk5V8Wh8htoTjPJpfZJlovFzkrGrm6SHwsrFAcXhOE%2FzJzLAtMr8BTcjztz7lrO8iTzi%2BZEIvvFxqNHLUgjmt85PcOpb26gwbmW%2F75dtJdqtNuS095PUCFKXe%2FnPQ1GQ7SUsB64xqGUTytuJcqIEUQeL0L7TS5f%2Fj5U%2FC%2FSjuUmeWxJPt7OutQUvaR31kE5UD44rFsZ9qxexdoQz9AV71j7xs82dVSKcqZwLsXqzZLC5Az2t5S13bcjQm%2FDQpm64zGF0yDCHkLXBBjqkATimCyXXm6%2Fsxmv8PDBL5Pose6QR3gN8XHihWkZjsNtdQhuaLnuQoG6NX3p8tc%2FjeaHplL%2B%2FTw%2BS18FrNSGML%2F%2Fwvd%2FbNn51ywMm0MCqyTBSVQ%2FukweT%2FsnNNjgA%2B5ckXjhEScQz4bL%2BExT916fKa%2BpA%2FjIDJuNFfuL9Ku8NmRIgRStHtIxXDMzzGfE%2B9DyhHDp%2BdNmYhrgrjGrhmSA%2FPJrJXGQO&X-Amz-Signature=655cd7dc0ae1a19d80802a54b98e89327c34669bd64e8ca9ba18938c2df86511&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4LJL7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwjFgTiuifkqA0Ubg3FwU1vFy7Ne9tqd6f5oQZcddkwIhAN1QeJ3Mh%2FSlwXGCj%2BvUcOSqNoW5BQ%2Bl82uAESRm%2Fim%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6qdD2HU9QeF3gRAq3AMQ9NtlVzyRNkszbV2tiAgvCmsCs4fh3SadSSf06c7GPQeilK5BVtMVcrAd301GGvHGOHY10YzdZaLl36Lpd316oWClRaX%2BEYIgFvSgMi8KJ%2FL3qqaDR%2BBXB1mUJPV1a9%2BteRLm%2F5w%2FtwtrjYe58Yask7SsCoJyeg9CUHXiG0q%2BRR%2FxA4Z3OX9PfYkpDDrMXlXGRiYlDQ8D3YQIhQpmgaddEJpppjV4dkQw6Qz3TirpSRe1aibURhYQfCbnH3j%2BzggmHqGG0fAknlsvPS6MJ6Le7UYad6TtcmlAv5kj%2BepJXuJ65MksmfbNqoLYLoLjCX71DkmdDHqJFJQeeoYfKaCv4eloB9794AUPTvZ7XVnqiBew%2BPsvSLWguk5V8Wh8htoTjPJpfZJlovFzkrGrm6SHwsrFAcXhOE%2FzJzLAtMr8BTcjztz7lrO8iTzi%2BZEIvvFxqNHLUgjmt85PcOpb26gwbmW%2F75dtJdqtNuS095PUCFKXe%2FnPQ1GQ7SUsB64xqGUTytuJcqIEUQeL0L7TS5f%2Fj5U%2FC%2FSjuUmeWxJPt7OutQUvaR31kE5UD44rFsZ9qxexdoQz9AV71j7xs82dVSKcqZwLsXqzZLC5Az2t5S13bcjQm%2FDQpm64zGF0yDCHkLXBBjqkATimCyXXm6%2Fsxmv8PDBL5Pose6QR3gN8XHihWkZjsNtdQhuaLnuQoG6NX3p8tc%2FjeaHplL%2B%2FTw%2BS18FrNSGML%2F%2Fwvd%2FbNn51ywMm0MCqyTBSVQ%2FukweT%2FsnNNjgA%2B5ckXjhEScQz4bL%2BExT916fKa%2BpA%2FjIDJuNFfuL9Ku8NmRIgRStHtIxXDMzzGfE%2B9DyhHDp%2BdNmYhrgrjGrhmSA%2FPJrJXGQO&X-Amz-Signature=11cd08e342ed408fcbb5fa9de80f2aa31e433656ef9be07ddc890e802e5be5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4LJL7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwjFgTiuifkqA0Ubg3FwU1vFy7Ne9tqd6f5oQZcddkwIhAN1QeJ3Mh%2FSlwXGCj%2BvUcOSqNoW5BQ%2Bl82uAESRm%2Fim%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6qdD2HU9QeF3gRAq3AMQ9NtlVzyRNkszbV2tiAgvCmsCs4fh3SadSSf06c7GPQeilK5BVtMVcrAd301GGvHGOHY10YzdZaLl36Lpd316oWClRaX%2BEYIgFvSgMi8KJ%2FL3qqaDR%2BBXB1mUJPV1a9%2BteRLm%2F5w%2FtwtrjYe58Yask7SsCoJyeg9CUHXiG0q%2BRR%2FxA4Z3OX9PfYkpDDrMXlXGRiYlDQ8D3YQIhQpmgaddEJpppjV4dkQw6Qz3TirpSRe1aibURhYQfCbnH3j%2BzggmHqGG0fAknlsvPS6MJ6Le7UYad6TtcmlAv5kj%2BepJXuJ65MksmfbNqoLYLoLjCX71DkmdDHqJFJQeeoYfKaCv4eloB9794AUPTvZ7XVnqiBew%2BPsvSLWguk5V8Wh8htoTjPJpfZJlovFzkrGrm6SHwsrFAcXhOE%2FzJzLAtMr8BTcjztz7lrO8iTzi%2BZEIvvFxqNHLUgjmt85PcOpb26gwbmW%2F75dtJdqtNuS095PUCFKXe%2FnPQ1GQ7SUsB64xqGUTytuJcqIEUQeL0L7TS5f%2Fj5U%2FC%2FSjuUmeWxJPt7OutQUvaR31kE5UD44rFsZ9qxexdoQz9AV71j7xs82dVSKcqZwLsXqzZLC5Az2t5S13bcjQm%2FDQpm64zGF0yDCHkLXBBjqkATimCyXXm6%2Fsxmv8PDBL5Pose6QR3gN8XHihWkZjsNtdQhuaLnuQoG6NX3p8tc%2FjeaHplL%2B%2FTw%2BS18FrNSGML%2F%2Fwvd%2FbNn51ywMm0MCqyTBSVQ%2FukweT%2FsnNNjgA%2B5ckXjhEScQz4bL%2BExT916fKa%2BpA%2FjIDJuNFfuL9Ku8NmRIgRStHtIxXDMzzGfE%2B9DyhHDp%2BdNmYhrgrjGrhmSA%2FPJrJXGQO&X-Amz-Signature=da70b1907a2928319a33636fecf1b261a24d14a46c89fda3e9b52ea175bb3df9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4LJL7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwjFgTiuifkqA0Ubg3FwU1vFy7Ne9tqd6f5oQZcddkwIhAN1QeJ3Mh%2FSlwXGCj%2BvUcOSqNoW5BQ%2Bl82uAESRm%2Fim%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc6qdD2HU9QeF3gRAq3AMQ9NtlVzyRNkszbV2tiAgvCmsCs4fh3SadSSf06c7GPQeilK5BVtMVcrAd301GGvHGOHY10YzdZaLl36Lpd316oWClRaX%2BEYIgFvSgMi8KJ%2FL3qqaDR%2BBXB1mUJPV1a9%2BteRLm%2F5w%2FtwtrjYe58Yask7SsCoJyeg9CUHXiG0q%2BRR%2FxA4Z3OX9PfYkpDDrMXlXGRiYlDQ8D3YQIhQpmgaddEJpppjV4dkQw6Qz3TirpSRe1aibURhYQfCbnH3j%2BzggmHqGG0fAknlsvPS6MJ6Le7UYad6TtcmlAv5kj%2BepJXuJ65MksmfbNqoLYLoLjCX71DkmdDHqJFJQeeoYfKaCv4eloB9794AUPTvZ7XVnqiBew%2BPsvSLWguk5V8Wh8htoTjPJpfZJlovFzkrGrm6SHwsrFAcXhOE%2FzJzLAtMr8BTcjztz7lrO8iTzi%2BZEIvvFxqNHLUgjmt85PcOpb26gwbmW%2F75dtJdqtNuS095PUCFKXe%2FnPQ1GQ7SUsB64xqGUTytuJcqIEUQeL0L7TS5f%2Fj5U%2FC%2FSjuUmeWxJPt7OutQUvaR31kE5UD44rFsZ9qxexdoQz9AV71j7xs82dVSKcqZwLsXqzZLC5Az2t5S13bcjQm%2FDQpm64zGF0yDCHkLXBBjqkATimCyXXm6%2Fsxmv8PDBL5Pose6QR3gN8XHihWkZjsNtdQhuaLnuQoG6NX3p8tc%2FjeaHplL%2B%2FTw%2BS18FrNSGML%2F%2Fwvd%2FbNn51ywMm0MCqyTBSVQ%2FukweT%2FsnNNjgA%2B5ckXjhEScQz4bL%2BExT916fKa%2BpA%2FjIDJuNFfuL9Ku8NmRIgRStHtIxXDMzzGfE%2B9DyhHDp%2BdNmYhrgrjGrhmSA%2FPJrJXGQO&X-Amz-Signature=0ed3f46e4abd6b22f99d03d7e4f316225e8a8dd7667201891220b6b78460ee19&X-Amz-SignedHeaders=host&x-id=GetObject)
