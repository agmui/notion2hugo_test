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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDIH2M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAk9TOlB%2F7l%2FEzSAxnIGplNqJaEsD8x7x%2BvmZB2fNIc1AiEA0Cs2HY3Jab%2B30MYyrbfKFZfmCu%2BW6pZosknPhFfpjUkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafSwqwKk1P1mvd8CrcAx95x90EvsRNU5e4%2BPqZU2UMZslO4VsNPsCECe0exBddPmzb0UtkjpbD1LY05V8YFBo8p%2BUVYhAguPVJWpdpK6IYuOQaOPaWlWarpDzETq5fiSt25LNrMPhHHxkHGYsCCi8DcIakQu7CgHWkM%2BnCHy18tU%2BBLpMGMVUlZFfjgOraaRwGEmfzsPj%2Fy3Jif45qQi2F6Qn1hUfwrA13h%2By6KxQwJ6HbDbudysVFMKP3Q9tjcHQlYFwmvvUu6apnR00R1ZheYK1wqwlZC3lyTqXW%2BAC8jv5dEZWgDqC4p1Rl7Ao2g9zuwB9aA2IxF%2BpZIKFBkqdfzApdklKQyEMauQNioWga0MocqraU5CMNSlG0SbKoeMm366%2Bobe%2F%2F1OxjXmR3w%2FW%2B91udsCib0BbzJE6HYwm33qnbRVwIjoegOEPRkqxQVGtjy%2FTpwPPkP3M3P9rSTNcg7h2tvfDjRTWlMVFx2Y7Snrl78nHHJ%2BI4nP0SR5sE6tlGbTn1ZARCcMJnFQ%2B%2FLV9CilcvLhxn3EuKh2GvKDIREqg6W%2FA1expGyab2F7aQNEWLxpb6eIuvvFYIgv4f%2BLjdoTWsD1H70MtpobPFKUL9C25uAPn3kskkAXoUWPU84k5C00CkQOPVmh2aMJfYwsEGOqUBAillYs4YqoRa6SqYFzmbH5WLhjbQiPnLmhPdUNGXWFyHxsvq45dhc3ZZigHJH89L%2FdIeb89p5Z07q0amuhHV1wP5Lv9S9Xy%2FheQj0vmECYhFIB%2BEi0UEmsJ025E0qsxgIxJ3B5GCFf%2F8LYlMbr7q0FF6zvoAFzFp1hYek5oOUAb2xCrT3ycglJT1o%2BbapPZDNpd%2FUjagbNL4GlwMSdD1fMTejPae&X-Amz-Signature=acab3cc7d5c6d08bd3db89d123a329aee57d17d91db7f4cc231226b8e7732038&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDIH2M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAk9TOlB%2F7l%2FEzSAxnIGplNqJaEsD8x7x%2BvmZB2fNIc1AiEA0Cs2HY3Jab%2B30MYyrbfKFZfmCu%2BW6pZosknPhFfpjUkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafSwqwKk1P1mvd8CrcAx95x90EvsRNU5e4%2BPqZU2UMZslO4VsNPsCECe0exBddPmzb0UtkjpbD1LY05V8YFBo8p%2BUVYhAguPVJWpdpK6IYuOQaOPaWlWarpDzETq5fiSt25LNrMPhHHxkHGYsCCi8DcIakQu7CgHWkM%2BnCHy18tU%2BBLpMGMVUlZFfjgOraaRwGEmfzsPj%2Fy3Jif45qQi2F6Qn1hUfwrA13h%2By6KxQwJ6HbDbudysVFMKP3Q9tjcHQlYFwmvvUu6apnR00R1ZheYK1wqwlZC3lyTqXW%2BAC8jv5dEZWgDqC4p1Rl7Ao2g9zuwB9aA2IxF%2BpZIKFBkqdfzApdklKQyEMauQNioWga0MocqraU5CMNSlG0SbKoeMm366%2Bobe%2F%2F1OxjXmR3w%2FW%2B91udsCib0BbzJE6HYwm33qnbRVwIjoegOEPRkqxQVGtjy%2FTpwPPkP3M3P9rSTNcg7h2tvfDjRTWlMVFx2Y7Snrl78nHHJ%2BI4nP0SR5sE6tlGbTn1ZARCcMJnFQ%2B%2FLV9CilcvLhxn3EuKh2GvKDIREqg6W%2FA1expGyab2F7aQNEWLxpb6eIuvvFYIgv4f%2BLjdoTWsD1H70MtpobPFKUL9C25uAPn3kskkAXoUWPU84k5C00CkQOPVmh2aMJfYwsEGOqUBAillYs4YqoRa6SqYFzmbH5WLhjbQiPnLmhPdUNGXWFyHxsvq45dhc3ZZigHJH89L%2FdIeb89p5Z07q0amuhHV1wP5Lv9S9Xy%2FheQj0vmECYhFIB%2BEi0UEmsJ025E0qsxgIxJ3B5GCFf%2F8LYlMbr7q0FF6zvoAFzFp1hYek5oOUAb2xCrT3ycglJT1o%2BbapPZDNpd%2FUjagbNL4GlwMSdD1fMTejPae&X-Amz-Signature=ac8aa2fd5f4011b38ab8dbf74d72576192cb3b6a99b753407b2acf4d7249b663&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDIH2M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAk9TOlB%2F7l%2FEzSAxnIGplNqJaEsD8x7x%2BvmZB2fNIc1AiEA0Cs2HY3Jab%2B30MYyrbfKFZfmCu%2BW6pZosknPhFfpjUkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafSwqwKk1P1mvd8CrcAx95x90EvsRNU5e4%2BPqZU2UMZslO4VsNPsCECe0exBddPmzb0UtkjpbD1LY05V8YFBo8p%2BUVYhAguPVJWpdpK6IYuOQaOPaWlWarpDzETq5fiSt25LNrMPhHHxkHGYsCCi8DcIakQu7CgHWkM%2BnCHy18tU%2BBLpMGMVUlZFfjgOraaRwGEmfzsPj%2Fy3Jif45qQi2F6Qn1hUfwrA13h%2By6KxQwJ6HbDbudysVFMKP3Q9tjcHQlYFwmvvUu6apnR00R1ZheYK1wqwlZC3lyTqXW%2BAC8jv5dEZWgDqC4p1Rl7Ao2g9zuwB9aA2IxF%2BpZIKFBkqdfzApdklKQyEMauQNioWga0MocqraU5CMNSlG0SbKoeMm366%2Bobe%2F%2F1OxjXmR3w%2FW%2B91udsCib0BbzJE6HYwm33qnbRVwIjoegOEPRkqxQVGtjy%2FTpwPPkP3M3P9rSTNcg7h2tvfDjRTWlMVFx2Y7Snrl78nHHJ%2BI4nP0SR5sE6tlGbTn1ZARCcMJnFQ%2B%2FLV9CilcvLhxn3EuKh2GvKDIREqg6W%2FA1expGyab2F7aQNEWLxpb6eIuvvFYIgv4f%2BLjdoTWsD1H70MtpobPFKUL9C25uAPn3kskkAXoUWPU84k5C00CkQOPVmh2aMJfYwsEGOqUBAillYs4YqoRa6SqYFzmbH5WLhjbQiPnLmhPdUNGXWFyHxsvq45dhc3ZZigHJH89L%2FdIeb89p5Z07q0amuhHV1wP5Lv9S9Xy%2FheQj0vmECYhFIB%2BEi0UEmsJ025E0qsxgIxJ3B5GCFf%2F8LYlMbr7q0FF6zvoAFzFp1hYek5oOUAb2xCrT3ycglJT1o%2BbapPZDNpd%2FUjagbNL4GlwMSdD1fMTejPae&X-Amz-Signature=ccdb2746c158062ef14b622b8a498fd9f8d6fe6a8ba715a948ad5dff8b40ff48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDIH2M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAk9TOlB%2F7l%2FEzSAxnIGplNqJaEsD8x7x%2BvmZB2fNIc1AiEA0Cs2HY3Jab%2B30MYyrbfKFZfmCu%2BW6pZosknPhFfpjUkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafSwqwKk1P1mvd8CrcAx95x90EvsRNU5e4%2BPqZU2UMZslO4VsNPsCECe0exBddPmzb0UtkjpbD1LY05V8YFBo8p%2BUVYhAguPVJWpdpK6IYuOQaOPaWlWarpDzETq5fiSt25LNrMPhHHxkHGYsCCi8DcIakQu7CgHWkM%2BnCHy18tU%2BBLpMGMVUlZFfjgOraaRwGEmfzsPj%2Fy3Jif45qQi2F6Qn1hUfwrA13h%2By6KxQwJ6HbDbudysVFMKP3Q9tjcHQlYFwmvvUu6apnR00R1ZheYK1wqwlZC3lyTqXW%2BAC8jv5dEZWgDqC4p1Rl7Ao2g9zuwB9aA2IxF%2BpZIKFBkqdfzApdklKQyEMauQNioWga0MocqraU5CMNSlG0SbKoeMm366%2Bobe%2F%2F1OxjXmR3w%2FW%2B91udsCib0BbzJE6HYwm33qnbRVwIjoegOEPRkqxQVGtjy%2FTpwPPkP3M3P9rSTNcg7h2tvfDjRTWlMVFx2Y7Snrl78nHHJ%2BI4nP0SR5sE6tlGbTn1ZARCcMJnFQ%2B%2FLV9CilcvLhxn3EuKh2GvKDIREqg6W%2FA1expGyab2F7aQNEWLxpb6eIuvvFYIgv4f%2BLjdoTWsD1H70MtpobPFKUL9C25uAPn3kskkAXoUWPU84k5C00CkQOPVmh2aMJfYwsEGOqUBAillYs4YqoRa6SqYFzmbH5WLhjbQiPnLmhPdUNGXWFyHxsvq45dhc3ZZigHJH89L%2FdIeb89p5Z07q0amuhHV1wP5Lv9S9Xy%2FheQj0vmECYhFIB%2BEi0UEmsJ025E0qsxgIxJ3B5GCFf%2F8LYlMbr7q0FF6zvoAFzFp1hYek5oOUAb2xCrT3ycglJT1o%2BbapPZDNpd%2FUjagbNL4GlwMSdD1fMTejPae&X-Amz-Signature=00ea0cf1aede4f89325e2372a01ca12df118baa5f9d076ef8dde19b1401805ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDIH2M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAk9TOlB%2F7l%2FEzSAxnIGplNqJaEsD8x7x%2BvmZB2fNIc1AiEA0Cs2HY3Jab%2B30MYyrbfKFZfmCu%2BW6pZosknPhFfpjUkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafSwqwKk1P1mvd8CrcAx95x90EvsRNU5e4%2BPqZU2UMZslO4VsNPsCECe0exBddPmzb0UtkjpbD1LY05V8YFBo8p%2BUVYhAguPVJWpdpK6IYuOQaOPaWlWarpDzETq5fiSt25LNrMPhHHxkHGYsCCi8DcIakQu7CgHWkM%2BnCHy18tU%2BBLpMGMVUlZFfjgOraaRwGEmfzsPj%2Fy3Jif45qQi2F6Qn1hUfwrA13h%2By6KxQwJ6HbDbudysVFMKP3Q9tjcHQlYFwmvvUu6apnR00R1ZheYK1wqwlZC3lyTqXW%2BAC8jv5dEZWgDqC4p1Rl7Ao2g9zuwB9aA2IxF%2BpZIKFBkqdfzApdklKQyEMauQNioWga0MocqraU5CMNSlG0SbKoeMm366%2Bobe%2F%2F1OxjXmR3w%2FW%2B91udsCib0BbzJE6HYwm33qnbRVwIjoegOEPRkqxQVGtjy%2FTpwPPkP3M3P9rSTNcg7h2tvfDjRTWlMVFx2Y7Snrl78nHHJ%2BI4nP0SR5sE6tlGbTn1ZARCcMJnFQ%2B%2FLV9CilcvLhxn3EuKh2GvKDIREqg6W%2FA1expGyab2F7aQNEWLxpb6eIuvvFYIgv4f%2BLjdoTWsD1H70MtpobPFKUL9C25uAPn3kskkAXoUWPU84k5C00CkQOPVmh2aMJfYwsEGOqUBAillYs4YqoRa6SqYFzmbH5WLhjbQiPnLmhPdUNGXWFyHxsvq45dhc3ZZigHJH89L%2FdIeb89p5Z07q0amuhHV1wP5Lv9S9Xy%2FheQj0vmECYhFIB%2BEi0UEmsJ025E0qsxgIxJ3B5GCFf%2F8LYlMbr7q0FF6zvoAFzFp1hYek5oOUAb2xCrT3ycglJT1o%2BbapPZDNpd%2FUjagbNL4GlwMSdD1fMTejPae&X-Amz-Signature=9104c3d920925822d72fda3d69ae3963d8724e3192a4028fb008a7ccf9c3a843&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYDIH2M%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAk9TOlB%2F7l%2FEzSAxnIGplNqJaEsD8x7x%2BvmZB2fNIc1AiEA0Cs2HY3Jab%2B30MYyrbfKFZfmCu%2BW6pZosknPhFfpjUkqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNafSwqwKk1P1mvd8CrcAx95x90EvsRNU5e4%2BPqZU2UMZslO4VsNPsCECe0exBddPmzb0UtkjpbD1LY05V8YFBo8p%2BUVYhAguPVJWpdpK6IYuOQaOPaWlWarpDzETq5fiSt25LNrMPhHHxkHGYsCCi8DcIakQu7CgHWkM%2BnCHy18tU%2BBLpMGMVUlZFfjgOraaRwGEmfzsPj%2Fy3Jif45qQi2F6Qn1hUfwrA13h%2By6KxQwJ6HbDbudysVFMKP3Q9tjcHQlYFwmvvUu6apnR00R1ZheYK1wqwlZC3lyTqXW%2BAC8jv5dEZWgDqC4p1Rl7Ao2g9zuwB9aA2IxF%2BpZIKFBkqdfzApdklKQyEMauQNioWga0MocqraU5CMNSlG0SbKoeMm366%2Bobe%2F%2F1OxjXmR3w%2FW%2B91udsCib0BbzJE6HYwm33qnbRVwIjoegOEPRkqxQVGtjy%2FTpwPPkP3M3P9rSTNcg7h2tvfDjRTWlMVFx2Y7Snrl78nHHJ%2BI4nP0SR5sE6tlGbTn1ZARCcMJnFQ%2B%2FLV9CilcvLhxn3EuKh2GvKDIREqg6W%2FA1expGyab2F7aQNEWLxpb6eIuvvFYIgv4f%2BLjdoTWsD1H70MtpobPFKUL9C25uAPn3kskkAXoUWPU84k5C00CkQOPVmh2aMJfYwsEGOqUBAillYs4YqoRa6SqYFzmbH5WLhjbQiPnLmhPdUNGXWFyHxsvq45dhc3ZZigHJH89L%2FdIeb89p5Z07q0amuhHV1wP5Lv9S9Xy%2FheQj0vmECYhFIB%2BEi0UEmsJ025E0qsxgIxJ3B5GCFf%2F8LYlMbr7q0FF6zvoAFzFp1hYek5oOUAb2xCrT3ycglJT1o%2BbapPZDNpd%2FUjagbNL4GlwMSdD1fMTejPae&X-Amz-Signature=4f5c8c3d50f513f6ef5e79e1fd67ba89b56e11b98a77ca9416610b11cbe5b41c&X-Amz-SignedHeaders=host&x-id=GetObject)
