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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQYFXT2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAuAS3lYaW9gY6sRg1NsOn6I8ENucq7YD3SDao4D%2FUQIgRTjNd2w%2BZcv7OcT88rzqpxNPc4%2FkMpD5AWgXCSmaXlcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCooNg6ZjJjVt8PoSrcA9545QA7FSUXi3t3fxTo5YL095n2sn7N%2FOn23MkqikbzqllR6xSVJakcnHgNt1ONlT5dBAk%2FjXp6vxA7bl1OLB3O0F3o2qCk4UBWHVSYV7MfZ7Y1rV9NjfjVjOisLCXZEBqZT4clc0vy4YKMZxDDc8B8WKWF6qUJUMFO4neHfQoJ6znw6WXrAOQ480Ivi0hB49zXHGfjgmUs4x29Prodet8pOluTbdSctiKEHHlQREukC5Gr1fA5h31jnES2uVCSdq3Q4xCOo%2Fvu1CKJQa4Y4RS65PE8Jey%2FAc0TkI2UlKwSTxQUjTgeiVcEDS3zfN3bwidM9%2BAKlU%2BmmQeW8gtLq76bshpLT79EEV1nbRvEZHBN7lM5y%2BtEbgrVJ8IXC2ORYpz2ZQqFE0arrVJbEBRlrKGsnQ%2Fg02RnqkOopxA2xWgGidXungBV8EqKVxLiNxBq9DE5QWmvqjSy28JcWE7i3q3WWkUsUMieJ3vxXZlg5a%2FgkS0T8tTsPmNFCQzyolaMOMBVaM%2BVrlAKPFC02RdTX4swW4LRjQ1rjNGLoFcPL8qnJTVXiKFSe4bfriiR3qRfzCR6CiKhJCKWBcKLKeIeDuG%2FEaNZYw9Jfs%2FE0Au7QA7i1r8PyvR4Gt2%2BqhJSMIu0tsMGOqUBjQ%2Fwdswg%2FSwAbQqj5pT2DYijnaWn3cnjoZKesiRmRXhilrdyUpoQoy%2BuEnDIm3kkkns2Er%2FCgJ4k5DY5lyx8guMer6I05ey58Z%2BosAyyLDbX3tuwkjA0dZFtX%2FwzX2Dfj3eNslvYF%2FevSoIHCGJEGhFuOnlUQtNXHEIxaZ35ri%2BiW%2BPso7AEd3VB36xGrktz6umZsg6dqpsHUzqRE7NGvtNNPIWM&X-Amz-Signature=c069ece063a8e827aeb01067cbee0e21a19f5b18da4ad98cc72b832a9db3d53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQYFXT2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAuAS3lYaW9gY6sRg1NsOn6I8ENucq7YD3SDao4D%2FUQIgRTjNd2w%2BZcv7OcT88rzqpxNPc4%2FkMpD5AWgXCSmaXlcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCooNg6ZjJjVt8PoSrcA9545QA7FSUXi3t3fxTo5YL095n2sn7N%2FOn23MkqikbzqllR6xSVJakcnHgNt1ONlT5dBAk%2FjXp6vxA7bl1OLB3O0F3o2qCk4UBWHVSYV7MfZ7Y1rV9NjfjVjOisLCXZEBqZT4clc0vy4YKMZxDDc8B8WKWF6qUJUMFO4neHfQoJ6znw6WXrAOQ480Ivi0hB49zXHGfjgmUs4x29Prodet8pOluTbdSctiKEHHlQREukC5Gr1fA5h31jnES2uVCSdq3Q4xCOo%2Fvu1CKJQa4Y4RS65PE8Jey%2FAc0TkI2UlKwSTxQUjTgeiVcEDS3zfN3bwidM9%2BAKlU%2BmmQeW8gtLq76bshpLT79EEV1nbRvEZHBN7lM5y%2BtEbgrVJ8IXC2ORYpz2ZQqFE0arrVJbEBRlrKGsnQ%2Fg02RnqkOopxA2xWgGidXungBV8EqKVxLiNxBq9DE5QWmvqjSy28JcWE7i3q3WWkUsUMieJ3vxXZlg5a%2FgkS0T8tTsPmNFCQzyolaMOMBVaM%2BVrlAKPFC02RdTX4swW4LRjQ1rjNGLoFcPL8qnJTVXiKFSe4bfriiR3qRfzCR6CiKhJCKWBcKLKeIeDuG%2FEaNZYw9Jfs%2FE0Au7QA7i1r8PyvR4Gt2%2BqhJSMIu0tsMGOqUBjQ%2Fwdswg%2FSwAbQqj5pT2DYijnaWn3cnjoZKesiRmRXhilrdyUpoQoy%2BuEnDIm3kkkns2Er%2FCgJ4k5DY5lyx8guMer6I05ey58Z%2BosAyyLDbX3tuwkjA0dZFtX%2FwzX2Dfj3eNslvYF%2FevSoIHCGJEGhFuOnlUQtNXHEIxaZ35ri%2BiW%2BPso7AEd3VB36xGrktz6umZsg6dqpsHUzqRE7NGvtNNPIWM&X-Amz-Signature=08809dd3ee4fe98d0cabe7cab1c65384f1f055f86a974b11c9eeaed0381e3517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQYFXT2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAuAS3lYaW9gY6sRg1NsOn6I8ENucq7YD3SDao4D%2FUQIgRTjNd2w%2BZcv7OcT88rzqpxNPc4%2FkMpD5AWgXCSmaXlcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCooNg6ZjJjVt8PoSrcA9545QA7FSUXi3t3fxTo5YL095n2sn7N%2FOn23MkqikbzqllR6xSVJakcnHgNt1ONlT5dBAk%2FjXp6vxA7bl1OLB3O0F3o2qCk4UBWHVSYV7MfZ7Y1rV9NjfjVjOisLCXZEBqZT4clc0vy4YKMZxDDc8B8WKWF6qUJUMFO4neHfQoJ6znw6WXrAOQ480Ivi0hB49zXHGfjgmUs4x29Prodet8pOluTbdSctiKEHHlQREukC5Gr1fA5h31jnES2uVCSdq3Q4xCOo%2Fvu1CKJQa4Y4RS65PE8Jey%2FAc0TkI2UlKwSTxQUjTgeiVcEDS3zfN3bwidM9%2BAKlU%2BmmQeW8gtLq76bshpLT79EEV1nbRvEZHBN7lM5y%2BtEbgrVJ8IXC2ORYpz2ZQqFE0arrVJbEBRlrKGsnQ%2Fg02RnqkOopxA2xWgGidXungBV8EqKVxLiNxBq9DE5QWmvqjSy28JcWE7i3q3WWkUsUMieJ3vxXZlg5a%2FgkS0T8tTsPmNFCQzyolaMOMBVaM%2BVrlAKPFC02RdTX4swW4LRjQ1rjNGLoFcPL8qnJTVXiKFSe4bfriiR3qRfzCR6CiKhJCKWBcKLKeIeDuG%2FEaNZYw9Jfs%2FE0Au7QA7i1r8PyvR4Gt2%2BqhJSMIu0tsMGOqUBjQ%2Fwdswg%2FSwAbQqj5pT2DYijnaWn3cnjoZKesiRmRXhilrdyUpoQoy%2BuEnDIm3kkkns2Er%2FCgJ4k5DY5lyx8guMer6I05ey58Z%2BosAyyLDbX3tuwkjA0dZFtX%2FwzX2Dfj3eNslvYF%2FevSoIHCGJEGhFuOnlUQtNXHEIxaZ35ri%2BiW%2BPso7AEd3VB36xGrktz6umZsg6dqpsHUzqRE7NGvtNNPIWM&X-Amz-Signature=43e9f51156f817368875695481f34a418c853bd018c2213f3ed45917745bf72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQYFXT2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAuAS3lYaW9gY6sRg1NsOn6I8ENucq7YD3SDao4D%2FUQIgRTjNd2w%2BZcv7OcT88rzqpxNPc4%2FkMpD5AWgXCSmaXlcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCooNg6ZjJjVt8PoSrcA9545QA7FSUXi3t3fxTo5YL095n2sn7N%2FOn23MkqikbzqllR6xSVJakcnHgNt1ONlT5dBAk%2FjXp6vxA7bl1OLB3O0F3o2qCk4UBWHVSYV7MfZ7Y1rV9NjfjVjOisLCXZEBqZT4clc0vy4YKMZxDDc8B8WKWF6qUJUMFO4neHfQoJ6znw6WXrAOQ480Ivi0hB49zXHGfjgmUs4x29Prodet8pOluTbdSctiKEHHlQREukC5Gr1fA5h31jnES2uVCSdq3Q4xCOo%2Fvu1CKJQa4Y4RS65PE8Jey%2FAc0TkI2UlKwSTxQUjTgeiVcEDS3zfN3bwidM9%2BAKlU%2BmmQeW8gtLq76bshpLT79EEV1nbRvEZHBN7lM5y%2BtEbgrVJ8IXC2ORYpz2ZQqFE0arrVJbEBRlrKGsnQ%2Fg02RnqkOopxA2xWgGidXungBV8EqKVxLiNxBq9DE5QWmvqjSy28JcWE7i3q3WWkUsUMieJ3vxXZlg5a%2FgkS0T8tTsPmNFCQzyolaMOMBVaM%2BVrlAKPFC02RdTX4swW4LRjQ1rjNGLoFcPL8qnJTVXiKFSe4bfriiR3qRfzCR6CiKhJCKWBcKLKeIeDuG%2FEaNZYw9Jfs%2FE0Au7QA7i1r8PyvR4Gt2%2BqhJSMIu0tsMGOqUBjQ%2Fwdswg%2FSwAbQqj5pT2DYijnaWn3cnjoZKesiRmRXhilrdyUpoQoy%2BuEnDIm3kkkns2Er%2FCgJ4k5DY5lyx8guMer6I05ey58Z%2BosAyyLDbX3tuwkjA0dZFtX%2FwzX2Dfj3eNslvYF%2FevSoIHCGJEGhFuOnlUQtNXHEIxaZ35ri%2BiW%2BPso7AEd3VB36xGrktz6umZsg6dqpsHUzqRE7NGvtNNPIWM&X-Amz-Signature=bdc0f8beb7667b47f19a768841487043183277597ca172efd7d11b4e660ad51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQYFXT2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAuAS3lYaW9gY6sRg1NsOn6I8ENucq7YD3SDao4D%2FUQIgRTjNd2w%2BZcv7OcT88rzqpxNPc4%2FkMpD5AWgXCSmaXlcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCooNg6ZjJjVt8PoSrcA9545QA7FSUXi3t3fxTo5YL095n2sn7N%2FOn23MkqikbzqllR6xSVJakcnHgNt1ONlT5dBAk%2FjXp6vxA7bl1OLB3O0F3o2qCk4UBWHVSYV7MfZ7Y1rV9NjfjVjOisLCXZEBqZT4clc0vy4YKMZxDDc8B8WKWF6qUJUMFO4neHfQoJ6znw6WXrAOQ480Ivi0hB49zXHGfjgmUs4x29Prodet8pOluTbdSctiKEHHlQREukC5Gr1fA5h31jnES2uVCSdq3Q4xCOo%2Fvu1CKJQa4Y4RS65PE8Jey%2FAc0TkI2UlKwSTxQUjTgeiVcEDS3zfN3bwidM9%2BAKlU%2BmmQeW8gtLq76bshpLT79EEV1nbRvEZHBN7lM5y%2BtEbgrVJ8IXC2ORYpz2ZQqFE0arrVJbEBRlrKGsnQ%2Fg02RnqkOopxA2xWgGidXungBV8EqKVxLiNxBq9DE5QWmvqjSy28JcWE7i3q3WWkUsUMieJ3vxXZlg5a%2FgkS0T8tTsPmNFCQzyolaMOMBVaM%2BVrlAKPFC02RdTX4swW4LRjQ1rjNGLoFcPL8qnJTVXiKFSe4bfriiR3qRfzCR6CiKhJCKWBcKLKeIeDuG%2FEaNZYw9Jfs%2FE0Au7QA7i1r8PyvR4Gt2%2BqhJSMIu0tsMGOqUBjQ%2Fwdswg%2FSwAbQqj5pT2DYijnaWn3cnjoZKesiRmRXhilrdyUpoQoy%2BuEnDIm3kkkns2Er%2FCgJ4k5DY5lyx8guMer6I05ey58Z%2BosAyyLDbX3tuwkjA0dZFtX%2FwzX2Dfj3eNslvYF%2FevSoIHCGJEGhFuOnlUQtNXHEIxaZ35ri%2BiW%2BPso7AEd3VB36xGrktz6umZsg6dqpsHUzqRE7NGvtNNPIWM&X-Amz-Signature=ff0bed37f0d5a2e34f83c7605d15503cca0ff79eb67d3a8450508431f7419d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQYFXT2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAuAS3lYaW9gY6sRg1NsOn6I8ENucq7YD3SDao4D%2FUQIgRTjNd2w%2BZcv7OcT88rzqpxNPc4%2FkMpD5AWgXCSmaXlcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCooNg6ZjJjVt8PoSrcA9545QA7FSUXi3t3fxTo5YL095n2sn7N%2FOn23MkqikbzqllR6xSVJakcnHgNt1ONlT5dBAk%2FjXp6vxA7bl1OLB3O0F3o2qCk4UBWHVSYV7MfZ7Y1rV9NjfjVjOisLCXZEBqZT4clc0vy4YKMZxDDc8B8WKWF6qUJUMFO4neHfQoJ6znw6WXrAOQ480Ivi0hB49zXHGfjgmUs4x29Prodet8pOluTbdSctiKEHHlQREukC5Gr1fA5h31jnES2uVCSdq3Q4xCOo%2Fvu1CKJQa4Y4RS65PE8Jey%2FAc0TkI2UlKwSTxQUjTgeiVcEDS3zfN3bwidM9%2BAKlU%2BmmQeW8gtLq76bshpLT79EEV1nbRvEZHBN7lM5y%2BtEbgrVJ8IXC2ORYpz2ZQqFE0arrVJbEBRlrKGsnQ%2Fg02RnqkOopxA2xWgGidXungBV8EqKVxLiNxBq9DE5QWmvqjSy28JcWE7i3q3WWkUsUMieJ3vxXZlg5a%2FgkS0T8tTsPmNFCQzyolaMOMBVaM%2BVrlAKPFC02RdTX4swW4LRjQ1rjNGLoFcPL8qnJTVXiKFSe4bfriiR3qRfzCR6CiKhJCKWBcKLKeIeDuG%2FEaNZYw9Jfs%2FE0Au7QA7i1r8PyvR4Gt2%2BqhJSMIu0tsMGOqUBjQ%2Fwdswg%2FSwAbQqj5pT2DYijnaWn3cnjoZKesiRmRXhilrdyUpoQoy%2BuEnDIm3kkkns2Er%2FCgJ4k5DY5lyx8guMer6I05ey58Z%2BosAyyLDbX3tuwkjA0dZFtX%2FwzX2Dfj3eNslvYF%2FevSoIHCGJEGhFuOnlUQtNXHEIxaZ35ri%2BiW%2BPso7AEd3VB36xGrktz6umZsg6dqpsHUzqRE7NGvtNNPIWM&X-Amz-Signature=dd88ce33c533ef8a0fc6f96ca3c0a8752dd07ea684d568a73fc6c03f2ae9b8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
