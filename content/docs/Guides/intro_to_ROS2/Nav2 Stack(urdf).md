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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISHLUEC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIil3nj63rCZBQmArK1M7IYZx53KV%2FJm6KcGxqGt9v4AiEAlxZ2Gz9ZY8BfYmVGrit6rYpVPz26%2BWRqwQiyylLzkUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM2FRLa477BrFF3cDCrcA%2FeeHJgFP8yy3%2F%2BiCoxm8KdisH09XARrO3rTPs7Kqwj59S8aiSSdfp2VymzMvezqZbkxD4UUAIN065mRYaEdtos5KzSl17x3tQ7FBCB2DQgvq9Gv%2BhukrMIDW9YC%2F73HRYkBxDGCHxWQVBvVU2lIpeqz92%2BojwvxuXq%2FvMIKSNVoFqgyqeSXgKBSUw1Lpj5FWiUL%2FkQF0ueH3xQLV64nHOSBtoWKZEjbGkX3R2L2Uqbd0ygxUC2%2FwJ0E7VZhJXhpn14O%2F%2FcYT9H7ESuvgT7mNrdq2PE2OyQfMkBcDBZMzNJroguAnxrwMYzl9ZdLBAHcatfsgqoI%2F%2Bn5jcZTAgbX7OGI%2B4TQTID%2FAM5uPGlJ7ppyFBswnisgiPCwgein8g4T6S5WeuERl%2BW%2BlH%2BaAZF1NT6WUjW8WDa%2FUKG9cLoNm2AKAu7NSgcSaNKe9t4iuaT1V7iY1jBGymp0ZA%2BenzBewlOgVG2MvzwHk0ZVmyasbm4M%2FDaG%2B8iQhsgfNHpZcaTk8EwezSR%2Bp2s7Opint4qqSkbaylIx4%2BowuxBI7RbRFsDVOVIrISQ301m8%2BH5kij3zbKvqul0m7%2BHbXWi5kmtvkD9t81jyW%2BGkZjutvvHa%2F7IzwspL0erOX3%2BXtyomMIqGlL8GOqUBM59sXQ2IknOJdbpy6P%2BluyA0cdbttnYzO5ffJ2XG5f%2BAvFP2wGza7VG3v3M4xAYNvvz2gE1MxDTj1FDnDzTzeikFvoaBm1r0UbkheH6yNboE8c1FHb5P%2BZoEJO94QX77rQeb8fR60euk0O4Gqk%2BEXYtR9Rf4c6cx7T8%2FAuqJ7IVDc7vtMze2xV2pcw5oFHyAXFJ32nor2hYDJNdTMvCfUs%2F5FefZ&X-Amz-Signature=83d176ef6da727bcfd38c3765d48f6785a6cf9bf2b4306c4f9e33eb9dfa8f26d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISHLUEC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIil3nj63rCZBQmArK1M7IYZx53KV%2FJm6KcGxqGt9v4AiEAlxZ2Gz9ZY8BfYmVGrit6rYpVPz26%2BWRqwQiyylLzkUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM2FRLa477BrFF3cDCrcA%2FeeHJgFP8yy3%2F%2BiCoxm8KdisH09XARrO3rTPs7Kqwj59S8aiSSdfp2VymzMvezqZbkxD4UUAIN065mRYaEdtos5KzSl17x3tQ7FBCB2DQgvq9Gv%2BhukrMIDW9YC%2F73HRYkBxDGCHxWQVBvVU2lIpeqz92%2BojwvxuXq%2FvMIKSNVoFqgyqeSXgKBSUw1Lpj5FWiUL%2FkQF0ueH3xQLV64nHOSBtoWKZEjbGkX3R2L2Uqbd0ygxUC2%2FwJ0E7VZhJXhpn14O%2F%2FcYT9H7ESuvgT7mNrdq2PE2OyQfMkBcDBZMzNJroguAnxrwMYzl9ZdLBAHcatfsgqoI%2F%2Bn5jcZTAgbX7OGI%2B4TQTID%2FAM5uPGlJ7ppyFBswnisgiPCwgein8g4T6S5WeuERl%2BW%2BlH%2BaAZF1NT6WUjW8WDa%2FUKG9cLoNm2AKAu7NSgcSaNKe9t4iuaT1V7iY1jBGymp0ZA%2BenzBewlOgVG2MvzwHk0ZVmyasbm4M%2FDaG%2B8iQhsgfNHpZcaTk8EwezSR%2Bp2s7Opint4qqSkbaylIx4%2BowuxBI7RbRFsDVOVIrISQ301m8%2BH5kij3zbKvqul0m7%2BHbXWi5kmtvkD9t81jyW%2BGkZjutvvHa%2F7IzwspL0erOX3%2BXtyomMIqGlL8GOqUBM59sXQ2IknOJdbpy6P%2BluyA0cdbttnYzO5ffJ2XG5f%2BAvFP2wGza7VG3v3M4xAYNvvz2gE1MxDTj1FDnDzTzeikFvoaBm1r0UbkheH6yNboE8c1FHb5P%2BZoEJO94QX77rQeb8fR60euk0O4Gqk%2BEXYtR9Rf4c6cx7T8%2FAuqJ7IVDc7vtMze2xV2pcw5oFHyAXFJ32nor2hYDJNdTMvCfUs%2F5FefZ&X-Amz-Signature=95d199bf91425dc9475ce3f2dcf9fb1a709f1b56a12d120a1b2de30dcaa5830f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISHLUEC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIil3nj63rCZBQmArK1M7IYZx53KV%2FJm6KcGxqGt9v4AiEAlxZ2Gz9ZY8BfYmVGrit6rYpVPz26%2BWRqwQiyylLzkUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM2FRLa477BrFF3cDCrcA%2FeeHJgFP8yy3%2F%2BiCoxm8KdisH09XARrO3rTPs7Kqwj59S8aiSSdfp2VymzMvezqZbkxD4UUAIN065mRYaEdtos5KzSl17x3tQ7FBCB2DQgvq9Gv%2BhukrMIDW9YC%2F73HRYkBxDGCHxWQVBvVU2lIpeqz92%2BojwvxuXq%2FvMIKSNVoFqgyqeSXgKBSUw1Lpj5FWiUL%2FkQF0ueH3xQLV64nHOSBtoWKZEjbGkX3R2L2Uqbd0ygxUC2%2FwJ0E7VZhJXhpn14O%2F%2FcYT9H7ESuvgT7mNrdq2PE2OyQfMkBcDBZMzNJroguAnxrwMYzl9ZdLBAHcatfsgqoI%2F%2Bn5jcZTAgbX7OGI%2B4TQTID%2FAM5uPGlJ7ppyFBswnisgiPCwgein8g4T6S5WeuERl%2BW%2BlH%2BaAZF1NT6WUjW8WDa%2FUKG9cLoNm2AKAu7NSgcSaNKe9t4iuaT1V7iY1jBGymp0ZA%2BenzBewlOgVG2MvzwHk0ZVmyasbm4M%2FDaG%2B8iQhsgfNHpZcaTk8EwezSR%2Bp2s7Opint4qqSkbaylIx4%2BowuxBI7RbRFsDVOVIrISQ301m8%2BH5kij3zbKvqul0m7%2BHbXWi5kmtvkD9t81jyW%2BGkZjutvvHa%2F7IzwspL0erOX3%2BXtyomMIqGlL8GOqUBM59sXQ2IknOJdbpy6P%2BluyA0cdbttnYzO5ffJ2XG5f%2BAvFP2wGza7VG3v3M4xAYNvvz2gE1MxDTj1FDnDzTzeikFvoaBm1r0UbkheH6yNboE8c1FHb5P%2BZoEJO94QX77rQeb8fR60euk0O4Gqk%2BEXYtR9Rf4c6cx7T8%2FAuqJ7IVDc7vtMze2xV2pcw5oFHyAXFJ32nor2hYDJNdTMvCfUs%2F5FefZ&X-Amz-Signature=daefac2a3b1b5b9042e88e34d174a56038c94a37911e5b09d2a398c21cda7128&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISHLUEC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIil3nj63rCZBQmArK1M7IYZx53KV%2FJm6KcGxqGt9v4AiEAlxZ2Gz9ZY8BfYmVGrit6rYpVPz26%2BWRqwQiyylLzkUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM2FRLa477BrFF3cDCrcA%2FeeHJgFP8yy3%2F%2BiCoxm8KdisH09XARrO3rTPs7Kqwj59S8aiSSdfp2VymzMvezqZbkxD4UUAIN065mRYaEdtos5KzSl17x3tQ7FBCB2DQgvq9Gv%2BhukrMIDW9YC%2F73HRYkBxDGCHxWQVBvVU2lIpeqz92%2BojwvxuXq%2FvMIKSNVoFqgyqeSXgKBSUw1Lpj5FWiUL%2FkQF0ueH3xQLV64nHOSBtoWKZEjbGkX3R2L2Uqbd0ygxUC2%2FwJ0E7VZhJXhpn14O%2F%2FcYT9H7ESuvgT7mNrdq2PE2OyQfMkBcDBZMzNJroguAnxrwMYzl9ZdLBAHcatfsgqoI%2F%2Bn5jcZTAgbX7OGI%2B4TQTID%2FAM5uPGlJ7ppyFBswnisgiPCwgein8g4T6S5WeuERl%2BW%2BlH%2BaAZF1NT6WUjW8WDa%2FUKG9cLoNm2AKAu7NSgcSaNKe9t4iuaT1V7iY1jBGymp0ZA%2BenzBewlOgVG2MvzwHk0ZVmyasbm4M%2FDaG%2B8iQhsgfNHpZcaTk8EwezSR%2Bp2s7Opint4qqSkbaylIx4%2BowuxBI7RbRFsDVOVIrISQ301m8%2BH5kij3zbKvqul0m7%2BHbXWi5kmtvkD9t81jyW%2BGkZjutvvHa%2F7IzwspL0erOX3%2BXtyomMIqGlL8GOqUBM59sXQ2IknOJdbpy6P%2BluyA0cdbttnYzO5ffJ2XG5f%2BAvFP2wGza7VG3v3M4xAYNvvz2gE1MxDTj1FDnDzTzeikFvoaBm1r0UbkheH6yNboE8c1FHb5P%2BZoEJO94QX77rQeb8fR60euk0O4Gqk%2BEXYtR9Rf4c6cx7T8%2FAuqJ7IVDc7vtMze2xV2pcw5oFHyAXFJ32nor2hYDJNdTMvCfUs%2F5FefZ&X-Amz-Signature=779e746d3faa44bf73446b0c95084f0efdfa00374ddf9a8ed6b416ffebd58251&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISHLUEC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIil3nj63rCZBQmArK1M7IYZx53KV%2FJm6KcGxqGt9v4AiEAlxZ2Gz9ZY8BfYmVGrit6rYpVPz26%2BWRqwQiyylLzkUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM2FRLa477BrFF3cDCrcA%2FeeHJgFP8yy3%2F%2BiCoxm8KdisH09XARrO3rTPs7Kqwj59S8aiSSdfp2VymzMvezqZbkxD4UUAIN065mRYaEdtos5KzSl17x3tQ7FBCB2DQgvq9Gv%2BhukrMIDW9YC%2F73HRYkBxDGCHxWQVBvVU2lIpeqz92%2BojwvxuXq%2FvMIKSNVoFqgyqeSXgKBSUw1Lpj5FWiUL%2FkQF0ueH3xQLV64nHOSBtoWKZEjbGkX3R2L2Uqbd0ygxUC2%2FwJ0E7VZhJXhpn14O%2F%2FcYT9H7ESuvgT7mNrdq2PE2OyQfMkBcDBZMzNJroguAnxrwMYzl9ZdLBAHcatfsgqoI%2F%2Bn5jcZTAgbX7OGI%2B4TQTID%2FAM5uPGlJ7ppyFBswnisgiPCwgein8g4T6S5WeuERl%2BW%2BlH%2BaAZF1NT6WUjW8WDa%2FUKG9cLoNm2AKAu7NSgcSaNKe9t4iuaT1V7iY1jBGymp0ZA%2BenzBewlOgVG2MvzwHk0ZVmyasbm4M%2FDaG%2B8iQhsgfNHpZcaTk8EwezSR%2Bp2s7Opint4qqSkbaylIx4%2BowuxBI7RbRFsDVOVIrISQ301m8%2BH5kij3zbKvqul0m7%2BHbXWi5kmtvkD9t81jyW%2BGkZjutvvHa%2F7IzwspL0erOX3%2BXtyomMIqGlL8GOqUBM59sXQ2IknOJdbpy6P%2BluyA0cdbttnYzO5ffJ2XG5f%2BAvFP2wGza7VG3v3M4xAYNvvz2gE1MxDTj1FDnDzTzeikFvoaBm1r0UbkheH6yNboE8c1FHb5P%2BZoEJO94QX77rQeb8fR60euk0O4Gqk%2BEXYtR9Rf4c6cx7T8%2FAuqJ7IVDc7vtMze2xV2pcw5oFHyAXFJ32nor2hYDJNdTMvCfUs%2F5FefZ&X-Amz-Signature=e4f3f4a708f8a45b57af084db41fe4641580662ad60aa20016ac09062841633e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISHLUEC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIil3nj63rCZBQmArK1M7IYZx53KV%2FJm6KcGxqGt9v4AiEAlxZ2Gz9ZY8BfYmVGrit6rYpVPz26%2BWRqwQiyylLzkUIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDM2FRLa477BrFF3cDCrcA%2FeeHJgFP8yy3%2F%2BiCoxm8KdisH09XARrO3rTPs7Kqwj59S8aiSSdfp2VymzMvezqZbkxD4UUAIN065mRYaEdtos5KzSl17x3tQ7FBCB2DQgvq9Gv%2BhukrMIDW9YC%2F73HRYkBxDGCHxWQVBvVU2lIpeqz92%2BojwvxuXq%2FvMIKSNVoFqgyqeSXgKBSUw1Lpj5FWiUL%2FkQF0ueH3xQLV64nHOSBtoWKZEjbGkX3R2L2Uqbd0ygxUC2%2FwJ0E7VZhJXhpn14O%2F%2FcYT9H7ESuvgT7mNrdq2PE2OyQfMkBcDBZMzNJroguAnxrwMYzl9ZdLBAHcatfsgqoI%2F%2Bn5jcZTAgbX7OGI%2B4TQTID%2FAM5uPGlJ7ppyFBswnisgiPCwgein8g4T6S5WeuERl%2BW%2BlH%2BaAZF1NT6WUjW8WDa%2FUKG9cLoNm2AKAu7NSgcSaNKe9t4iuaT1V7iY1jBGymp0ZA%2BenzBewlOgVG2MvzwHk0ZVmyasbm4M%2FDaG%2B8iQhsgfNHpZcaTk8EwezSR%2Bp2s7Opint4qqSkbaylIx4%2BowuxBI7RbRFsDVOVIrISQ301m8%2BH5kij3zbKvqul0m7%2BHbXWi5kmtvkD9t81jyW%2BGkZjutvvHa%2F7IzwspL0erOX3%2BXtyomMIqGlL8GOqUBM59sXQ2IknOJdbpy6P%2BluyA0cdbttnYzO5ffJ2XG5f%2BAvFP2wGza7VG3v3M4xAYNvvz2gE1MxDTj1FDnDzTzeikFvoaBm1r0UbkheH6yNboE8c1FHb5P%2BZoEJO94QX77rQeb8fR60euk0O4Gqk%2BEXYtR9Rf4c6cx7T8%2FAuqJ7IVDc7vtMze2xV2pcw5oFHyAXFJ32nor2hYDJNdTMvCfUs%2F5FefZ&X-Amz-Signature=f6efb30cd61f8043a6bb02c1e9a9d01c9a491d6f8f68de5ce1248565539420c9&X-Amz-SignedHeaders=host&x-id=GetObject)
