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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2ERS7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDikLfeoug8WCeUMYaTsl8Nh%2BtC0aoqGTZ4OdRIx7W2oAiB1vMNuOTU8xwGRoFTEaxIG%2B1kwLZE6QlI0VSbovMMo%2FSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDNdSuFsXI1eSrxIKtwDlCIZBU0pjKiBZo%2FaoNzR3SNXlmd%2BzwRCqFoGIMP1boigFSaaIAlHIzFVSr2%2FqQr%2FAQBZp5pphIwsS%2FZrppwjYsTTiRkacTAK7wOh83AP8dgoIWOKkDQ6%2FnUcZfSOXPxfyzild0gWuEo5i1uvXK0XVUTtETiP3S48%2FD9rlftO9YIy6QSupDLTb3ZH6bF8gmdMobf3%2Fcas0Xz4Bu%2BwwhDUB2riUpul6TPVXdHgSfLH3dedyMFvJDoE%2BUJXTWTM%2FC%2Bigr3%2BrR73cT8sYMxWtcC9Dd%2FhW%2FcHkBTzltlfYakHtzf9al8AbFqcZWWp%2BSPZ6tTDN8vTzEa%2BDTiJ1LctfVscNGczFSJmIHNw1%2BVycVxPTIdCP5X1%2FDmJ2QNZe0RVU8pqsz9vb5K%2BTlzHq8uQ9B3Fy1%2FP7NXGjIcmA4NAspHIwWOwxHRhN6JNUh3mzzETHZCYoHmjr3SYbjWiP4msIK1fs3EARmNR6ENg93BM8GyzAY4SIy%2BxGGcZHYghxu46j4i5vAUKoqevF7QQjczcrG27kDP4FlrDzVohzxPkBBew4UX4WQZbt3b3N7YeMlL20%2B8QyqH57%2BG3GOodpjISouho6ZtCpFMwjBZ0xdUxFBpT7fEreP2JIoLW%2FScru1QwmJv2vgY6pgH%2F0uNJAVL1ryymVF%2F6xRiJymY5U%2BLmdWd92Wirmttl%2Br9o5TtmUkg94HLt3fX6rUYv%2BvzvLmzapa7joQd2ofp2xci46%2BWtEO9rYNY0g1tuJz6XBLO628BYdYZ9LeQRi5jUcQlMS24pDx3KpkpIOTjjW2UiX2qy6SGay7dfIYE2uN9WOa%2BCESz3LDs3G5vOXnmjFabBotvRbN38MpxJ7TxNoFGQi2b5&X-Amz-Signature=75274e0d1b0bfd7eb93e9c67e808f25546e9c98c57da5912d0e3b168d0e56df0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2ERS7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDikLfeoug8WCeUMYaTsl8Nh%2BtC0aoqGTZ4OdRIx7W2oAiB1vMNuOTU8xwGRoFTEaxIG%2B1kwLZE6QlI0VSbovMMo%2FSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDNdSuFsXI1eSrxIKtwDlCIZBU0pjKiBZo%2FaoNzR3SNXlmd%2BzwRCqFoGIMP1boigFSaaIAlHIzFVSr2%2FqQr%2FAQBZp5pphIwsS%2FZrppwjYsTTiRkacTAK7wOh83AP8dgoIWOKkDQ6%2FnUcZfSOXPxfyzild0gWuEo5i1uvXK0XVUTtETiP3S48%2FD9rlftO9YIy6QSupDLTb3ZH6bF8gmdMobf3%2Fcas0Xz4Bu%2BwwhDUB2riUpul6TPVXdHgSfLH3dedyMFvJDoE%2BUJXTWTM%2FC%2Bigr3%2BrR73cT8sYMxWtcC9Dd%2FhW%2FcHkBTzltlfYakHtzf9al8AbFqcZWWp%2BSPZ6tTDN8vTzEa%2BDTiJ1LctfVscNGczFSJmIHNw1%2BVycVxPTIdCP5X1%2FDmJ2QNZe0RVU8pqsz9vb5K%2BTlzHq8uQ9B3Fy1%2FP7NXGjIcmA4NAspHIwWOwxHRhN6JNUh3mzzETHZCYoHmjr3SYbjWiP4msIK1fs3EARmNR6ENg93BM8GyzAY4SIy%2BxGGcZHYghxu46j4i5vAUKoqevF7QQjczcrG27kDP4FlrDzVohzxPkBBew4UX4WQZbt3b3N7YeMlL20%2B8QyqH57%2BG3GOodpjISouho6ZtCpFMwjBZ0xdUxFBpT7fEreP2JIoLW%2FScru1QwmJv2vgY6pgH%2F0uNJAVL1ryymVF%2F6xRiJymY5U%2BLmdWd92Wirmttl%2Br9o5TtmUkg94HLt3fX6rUYv%2BvzvLmzapa7joQd2ofp2xci46%2BWtEO9rYNY0g1tuJz6XBLO628BYdYZ9LeQRi5jUcQlMS24pDx3KpkpIOTjjW2UiX2qy6SGay7dfIYE2uN9WOa%2BCESz3LDs3G5vOXnmjFabBotvRbN38MpxJ7TxNoFGQi2b5&X-Amz-Signature=8e327400e227adcc9489ce31b04efa7a0575b4af68fdaf02f54f93f1eeb16475&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2ERS7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDikLfeoug8WCeUMYaTsl8Nh%2BtC0aoqGTZ4OdRIx7W2oAiB1vMNuOTU8xwGRoFTEaxIG%2B1kwLZE6QlI0VSbovMMo%2FSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDNdSuFsXI1eSrxIKtwDlCIZBU0pjKiBZo%2FaoNzR3SNXlmd%2BzwRCqFoGIMP1boigFSaaIAlHIzFVSr2%2FqQr%2FAQBZp5pphIwsS%2FZrppwjYsTTiRkacTAK7wOh83AP8dgoIWOKkDQ6%2FnUcZfSOXPxfyzild0gWuEo5i1uvXK0XVUTtETiP3S48%2FD9rlftO9YIy6QSupDLTb3ZH6bF8gmdMobf3%2Fcas0Xz4Bu%2BwwhDUB2riUpul6TPVXdHgSfLH3dedyMFvJDoE%2BUJXTWTM%2FC%2Bigr3%2BrR73cT8sYMxWtcC9Dd%2FhW%2FcHkBTzltlfYakHtzf9al8AbFqcZWWp%2BSPZ6tTDN8vTzEa%2BDTiJ1LctfVscNGczFSJmIHNw1%2BVycVxPTIdCP5X1%2FDmJ2QNZe0RVU8pqsz9vb5K%2BTlzHq8uQ9B3Fy1%2FP7NXGjIcmA4NAspHIwWOwxHRhN6JNUh3mzzETHZCYoHmjr3SYbjWiP4msIK1fs3EARmNR6ENg93BM8GyzAY4SIy%2BxGGcZHYghxu46j4i5vAUKoqevF7QQjczcrG27kDP4FlrDzVohzxPkBBew4UX4WQZbt3b3N7YeMlL20%2B8QyqH57%2BG3GOodpjISouho6ZtCpFMwjBZ0xdUxFBpT7fEreP2JIoLW%2FScru1QwmJv2vgY6pgH%2F0uNJAVL1ryymVF%2F6xRiJymY5U%2BLmdWd92Wirmttl%2Br9o5TtmUkg94HLt3fX6rUYv%2BvzvLmzapa7joQd2ofp2xci46%2BWtEO9rYNY0g1tuJz6XBLO628BYdYZ9LeQRi5jUcQlMS24pDx3KpkpIOTjjW2UiX2qy6SGay7dfIYE2uN9WOa%2BCESz3LDs3G5vOXnmjFabBotvRbN38MpxJ7TxNoFGQi2b5&X-Amz-Signature=c3d6f3a7be1c89ad38f2232b9813f9dd8ba28520a7b0fb90952e7345c8d63547&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2ERS7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDikLfeoug8WCeUMYaTsl8Nh%2BtC0aoqGTZ4OdRIx7W2oAiB1vMNuOTU8xwGRoFTEaxIG%2B1kwLZE6QlI0VSbovMMo%2FSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDNdSuFsXI1eSrxIKtwDlCIZBU0pjKiBZo%2FaoNzR3SNXlmd%2BzwRCqFoGIMP1boigFSaaIAlHIzFVSr2%2FqQr%2FAQBZp5pphIwsS%2FZrppwjYsTTiRkacTAK7wOh83AP8dgoIWOKkDQ6%2FnUcZfSOXPxfyzild0gWuEo5i1uvXK0XVUTtETiP3S48%2FD9rlftO9YIy6QSupDLTb3ZH6bF8gmdMobf3%2Fcas0Xz4Bu%2BwwhDUB2riUpul6TPVXdHgSfLH3dedyMFvJDoE%2BUJXTWTM%2FC%2Bigr3%2BrR73cT8sYMxWtcC9Dd%2FhW%2FcHkBTzltlfYakHtzf9al8AbFqcZWWp%2BSPZ6tTDN8vTzEa%2BDTiJ1LctfVscNGczFSJmIHNw1%2BVycVxPTIdCP5X1%2FDmJ2QNZe0RVU8pqsz9vb5K%2BTlzHq8uQ9B3Fy1%2FP7NXGjIcmA4NAspHIwWOwxHRhN6JNUh3mzzETHZCYoHmjr3SYbjWiP4msIK1fs3EARmNR6ENg93BM8GyzAY4SIy%2BxGGcZHYghxu46j4i5vAUKoqevF7QQjczcrG27kDP4FlrDzVohzxPkBBew4UX4WQZbt3b3N7YeMlL20%2B8QyqH57%2BG3GOodpjISouho6ZtCpFMwjBZ0xdUxFBpT7fEreP2JIoLW%2FScru1QwmJv2vgY6pgH%2F0uNJAVL1ryymVF%2F6xRiJymY5U%2BLmdWd92Wirmttl%2Br9o5TtmUkg94HLt3fX6rUYv%2BvzvLmzapa7joQd2ofp2xci46%2BWtEO9rYNY0g1tuJz6XBLO628BYdYZ9LeQRi5jUcQlMS24pDx3KpkpIOTjjW2UiX2qy6SGay7dfIYE2uN9WOa%2BCESz3LDs3G5vOXnmjFabBotvRbN38MpxJ7TxNoFGQi2b5&X-Amz-Signature=661d24c3f9fbf5d748ad69523b300d20c66432d817a409117628b9c3ca4cc332&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2ERS7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDikLfeoug8WCeUMYaTsl8Nh%2BtC0aoqGTZ4OdRIx7W2oAiB1vMNuOTU8xwGRoFTEaxIG%2B1kwLZE6QlI0VSbovMMo%2FSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDNdSuFsXI1eSrxIKtwDlCIZBU0pjKiBZo%2FaoNzR3SNXlmd%2BzwRCqFoGIMP1boigFSaaIAlHIzFVSr2%2FqQr%2FAQBZp5pphIwsS%2FZrppwjYsTTiRkacTAK7wOh83AP8dgoIWOKkDQ6%2FnUcZfSOXPxfyzild0gWuEo5i1uvXK0XVUTtETiP3S48%2FD9rlftO9YIy6QSupDLTb3ZH6bF8gmdMobf3%2Fcas0Xz4Bu%2BwwhDUB2riUpul6TPVXdHgSfLH3dedyMFvJDoE%2BUJXTWTM%2FC%2Bigr3%2BrR73cT8sYMxWtcC9Dd%2FhW%2FcHkBTzltlfYakHtzf9al8AbFqcZWWp%2BSPZ6tTDN8vTzEa%2BDTiJ1LctfVscNGczFSJmIHNw1%2BVycVxPTIdCP5X1%2FDmJ2QNZe0RVU8pqsz9vb5K%2BTlzHq8uQ9B3Fy1%2FP7NXGjIcmA4NAspHIwWOwxHRhN6JNUh3mzzETHZCYoHmjr3SYbjWiP4msIK1fs3EARmNR6ENg93BM8GyzAY4SIy%2BxGGcZHYghxu46j4i5vAUKoqevF7QQjczcrG27kDP4FlrDzVohzxPkBBew4UX4WQZbt3b3N7YeMlL20%2B8QyqH57%2BG3GOodpjISouho6ZtCpFMwjBZ0xdUxFBpT7fEreP2JIoLW%2FScru1QwmJv2vgY6pgH%2F0uNJAVL1ryymVF%2F6xRiJymY5U%2BLmdWd92Wirmttl%2Br9o5TtmUkg94HLt3fX6rUYv%2BvzvLmzapa7joQd2ofp2xci46%2BWtEO9rYNY0g1tuJz6XBLO628BYdYZ9LeQRi5jUcQlMS24pDx3KpkpIOTjjW2UiX2qy6SGay7dfIYE2uN9WOa%2BCESz3LDs3G5vOXnmjFabBotvRbN38MpxJ7TxNoFGQi2b5&X-Amz-Signature=83a5adc3548bc6d1007474562b4790dcd2702886b6e6daa06f91aa1f9b9cb327&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2ERS7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDikLfeoug8WCeUMYaTsl8Nh%2BtC0aoqGTZ4OdRIx7W2oAiB1vMNuOTU8xwGRoFTEaxIG%2B1kwLZE6QlI0VSbovMMo%2FSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMDNdSuFsXI1eSrxIKtwDlCIZBU0pjKiBZo%2FaoNzR3SNXlmd%2BzwRCqFoGIMP1boigFSaaIAlHIzFVSr2%2FqQr%2FAQBZp5pphIwsS%2FZrppwjYsTTiRkacTAK7wOh83AP8dgoIWOKkDQ6%2FnUcZfSOXPxfyzild0gWuEo5i1uvXK0XVUTtETiP3S48%2FD9rlftO9YIy6QSupDLTb3ZH6bF8gmdMobf3%2Fcas0Xz4Bu%2BwwhDUB2riUpul6TPVXdHgSfLH3dedyMFvJDoE%2BUJXTWTM%2FC%2Bigr3%2BrR73cT8sYMxWtcC9Dd%2FhW%2FcHkBTzltlfYakHtzf9al8AbFqcZWWp%2BSPZ6tTDN8vTzEa%2BDTiJ1LctfVscNGczFSJmIHNw1%2BVycVxPTIdCP5X1%2FDmJ2QNZe0RVU8pqsz9vb5K%2BTlzHq8uQ9B3Fy1%2FP7NXGjIcmA4NAspHIwWOwxHRhN6JNUh3mzzETHZCYoHmjr3SYbjWiP4msIK1fs3EARmNR6ENg93BM8GyzAY4SIy%2BxGGcZHYghxu46j4i5vAUKoqevF7QQjczcrG27kDP4FlrDzVohzxPkBBew4UX4WQZbt3b3N7YeMlL20%2B8QyqH57%2BG3GOodpjISouho6ZtCpFMwjBZ0xdUxFBpT7fEreP2JIoLW%2FScru1QwmJv2vgY6pgH%2F0uNJAVL1ryymVF%2F6xRiJymY5U%2BLmdWd92Wirmttl%2Br9o5TtmUkg94HLt3fX6rUYv%2BvzvLmzapa7joQd2ofp2xci46%2BWtEO9rYNY0g1tuJz6XBLO628BYdYZ9LeQRi5jUcQlMS24pDx3KpkpIOTjjW2UiX2qy6SGay7dfIYE2uN9WOa%2BCESz3LDs3G5vOXnmjFabBotvRbN38MpxJ7TxNoFGQi2b5&X-Amz-Signature=51689b809ec71f7293120a7ffa284c3c145afff75089ceeeacaab5dd9076bca3&X-Amz-SignedHeaders=host&x-id=GetObject)
