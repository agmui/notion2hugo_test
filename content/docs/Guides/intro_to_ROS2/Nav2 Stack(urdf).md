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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3QIUSK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICq9rh1YmnKLdNYnwgCybRi9Bq47sLvkLOx%2BWBc9RcAsAiEAr0QlKMBRwqRgbcpyn5XnHKvRqP%2F8AZ3evUs2NdadWMsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDMQAHV7InJ64gw%2FVCrcA9JM0z0OYkM3GhyAjpiJclGJjQxepGqm1wnz3Uyw369kcCAcnMeLDO3YP3fstvAlPe2u7M7hpmAl4RLBTdu7B29FHUhsrpOZtZ8wR2v4ZkTuMRQdQEsCQva%2BJDAczjC1I8ZxusmV%2Bu7J%2BqO8QHLcPBcTT%2FGdeWKvODcBkpvsDwCjJbUKSEBmOIEuZRDJQ1qjgKr0PXNulqAYVtbr%2BELxI0QMuYlJ2lW17VLzeJXe5oCF7MQDUtqL9rkhARDVwRXv9oViD9rw41xkBDeok%2FpaRHjG5RcHE%2BqFyr1GMl9GCHW3H%2BSZ7wVXEKKFKW%2FQhDX7jBa0PHl0G%2B94U6dLSq%2F%2Fr3UGSK%2FZK8DJ1F5wcKy%2FnwgrptH1sGXpjPlf2UR4dat5J686uN5SehxNNCBBE5fuZcUFBLsEt4VmBB9HtJ2%2FoDy%2FVL0gbISJauVSkPyV9HtbNO34pyJKcR2bsC6mlGTMYSO8Dx%2BbzwJO6Lo%2BUB8opngPwk5tjWiCvzVzF5%2FObiIXhEHpq72sNSAOWcbSSrjXzhxAVyNNxiMQu4BmLQZRGgf8ml%2FHcLVlKFUhgCw89I8uMiwYNOXs20IEsjZ1Hpv8DBrNzJBgUUexX5YRX5rxXfMzmjJau6TCBZYQ64DQMM%2BT3sMGOqUBLkro0GS4DwHdFzHtPJrUwbxNk4PF563QHQPI0%2FgxxrI%2BukcNncFkW1HVv6RGDsbGULKtV3JW0lyvugQF3%2FrE7SUV2rTrXz0yAmIG7di4Mvk%2BYuSTx2h5hEf9VyvnbiJu55gv9rPvkX5iZ%2FSXzgWhJWm5kdXskEIBlo6T6ixNHZa4mXX0UiVoJPGmPw9n2LUt8KPt00tGbSzXycy8WAl7Yf3c8Yx7&X-Amz-Signature=99ff954fa8d71e49bb04a40c08b072f2b907e0bbac258ff9e591f5bbc899c036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3QIUSK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICq9rh1YmnKLdNYnwgCybRi9Bq47sLvkLOx%2BWBc9RcAsAiEAr0QlKMBRwqRgbcpyn5XnHKvRqP%2F8AZ3evUs2NdadWMsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDMQAHV7InJ64gw%2FVCrcA9JM0z0OYkM3GhyAjpiJclGJjQxepGqm1wnz3Uyw369kcCAcnMeLDO3YP3fstvAlPe2u7M7hpmAl4RLBTdu7B29FHUhsrpOZtZ8wR2v4ZkTuMRQdQEsCQva%2BJDAczjC1I8ZxusmV%2Bu7J%2BqO8QHLcPBcTT%2FGdeWKvODcBkpvsDwCjJbUKSEBmOIEuZRDJQ1qjgKr0PXNulqAYVtbr%2BELxI0QMuYlJ2lW17VLzeJXe5oCF7MQDUtqL9rkhARDVwRXv9oViD9rw41xkBDeok%2FpaRHjG5RcHE%2BqFyr1GMl9GCHW3H%2BSZ7wVXEKKFKW%2FQhDX7jBa0PHl0G%2B94U6dLSq%2F%2Fr3UGSK%2FZK8DJ1F5wcKy%2FnwgrptH1sGXpjPlf2UR4dat5J686uN5SehxNNCBBE5fuZcUFBLsEt4VmBB9HtJ2%2FoDy%2FVL0gbISJauVSkPyV9HtbNO34pyJKcR2bsC6mlGTMYSO8Dx%2BbzwJO6Lo%2BUB8opngPwk5tjWiCvzVzF5%2FObiIXhEHpq72sNSAOWcbSSrjXzhxAVyNNxiMQu4BmLQZRGgf8ml%2FHcLVlKFUhgCw89I8uMiwYNOXs20IEsjZ1Hpv8DBrNzJBgUUexX5YRX5rxXfMzmjJau6TCBZYQ64DQMM%2BT3sMGOqUBLkro0GS4DwHdFzHtPJrUwbxNk4PF563QHQPI0%2FgxxrI%2BukcNncFkW1HVv6RGDsbGULKtV3JW0lyvugQF3%2FrE7SUV2rTrXz0yAmIG7di4Mvk%2BYuSTx2h5hEf9VyvnbiJu55gv9rPvkX5iZ%2FSXzgWhJWm5kdXskEIBlo6T6ixNHZa4mXX0UiVoJPGmPw9n2LUt8KPt00tGbSzXycy8WAl7Yf3c8Yx7&X-Amz-Signature=271abf552643d09aeed86201fb8e1e73d419c3ef1082514a89b14d095ccb1dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3QIUSK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICq9rh1YmnKLdNYnwgCybRi9Bq47sLvkLOx%2BWBc9RcAsAiEAr0QlKMBRwqRgbcpyn5XnHKvRqP%2F8AZ3evUs2NdadWMsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDMQAHV7InJ64gw%2FVCrcA9JM0z0OYkM3GhyAjpiJclGJjQxepGqm1wnz3Uyw369kcCAcnMeLDO3YP3fstvAlPe2u7M7hpmAl4RLBTdu7B29FHUhsrpOZtZ8wR2v4ZkTuMRQdQEsCQva%2BJDAczjC1I8ZxusmV%2Bu7J%2BqO8QHLcPBcTT%2FGdeWKvODcBkpvsDwCjJbUKSEBmOIEuZRDJQ1qjgKr0PXNulqAYVtbr%2BELxI0QMuYlJ2lW17VLzeJXe5oCF7MQDUtqL9rkhARDVwRXv9oViD9rw41xkBDeok%2FpaRHjG5RcHE%2BqFyr1GMl9GCHW3H%2BSZ7wVXEKKFKW%2FQhDX7jBa0PHl0G%2B94U6dLSq%2F%2Fr3UGSK%2FZK8DJ1F5wcKy%2FnwgrptH1sGXpjPlf2UR4dat5J686uN5SehxNNCBBE5fuZcUFBLsEt4VmBB9HtJ2%2FoDy%2FVL0gbISJauVSkPyV9HtbNO34pyJKcR2bsC6mlGTMYSO8Dx%2BbzwJO6Lo%2BUB8opngPwk5tjWiCvzVzF5%2FObiIXhEHpq72sNSAOWcbSSrjXzhxAVyNNxiMQu4BmLQZRGgf8ml%2FHcLVlKFUhgCw89I8uMiwYNOXs20IEsjZ1Hpv8DBrNzJBgUUexX5YRX5rxXfMzmjJau6TCBZYQ64DQMM%2BT3sMGOqUBLkro0GS4DwHdFzHtPJrUwbxNk4PF563QHQPI0%2FgxxrI%2BukcNncFkW1HVv6RGDsbGULKtV3JW0lyvugQF3%2FrE7SUV2rTrXz0yAmIG7di4Mvk%2BYuSTx2h5hEf9VyvnbiJu55gv9rPvkX5iZ%2FSXzgWhJWm5kdXskEIBlo6T6ixNHZa4mXX0UiVoJPGmPw9n2LUt8KPt00tGbSzXycy8WAl7Yf3c8Yx7&X-Amz-Signature=71f5aab3fb771b2b8b09e47c57d741aa4f416a6c70371f7822ea9baff50ae903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3QIUSK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICq9rh1YmnKLdNYnwgCybRi9Bq47sLvkLOx%2BWBc9RcAsAiEAr0QlKMBRwqRgbcpyn5XnHKvRqP%2F8AZ3evUs2NdadWMsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDMQAHV7InJ64gw%2FVCrcA9JM0z0OYkM3GhyAjpiJclGJjQxepGqm1wnz3Uyw369kcCAcnMeLDO3YP3fstvAlPe2u7M7hpmAl4RLBTdu7B29FHUhsrpOZtZ8wR2v4ZkTuMRQdQEsCQva%2BJDAczjC1I8ZxusmV%2Bu7J%2BqO8QHLcPBcTT%2FGdeWKvODcBkpvsDwCjJbUKSEBmOIEuZRDJQ1qjgKr0PXNulqAYVtbr%2BELxI0QMuYlJ2lW17VLzeJXe5oCF7MQDUtqL9rkhARDVwRXv9oViD9rw41xkBDeok%2FpaRHjG5RcHE%2BqFyr1GMl9GCHW3H%2BSZ7wVXEKKFKW%2FQhDX7jBa0PHl0G%2B94U6dLSq%2F%2Fr3UGSK%2FZK8DJ1F5wcKy%2FnwgrptH1sGXpjPlf2UR4dat5J686uN5SehxNNCBBE5fuZcUFBLsEt4VmBB9HtJ2%2FoDy%2FVL0gbISJauVSkPyV9HtbNO34pyJKcR2bsC6mlGTMYSO8Dx%2BbzwJO6Lo%2BUB8opngPwk5tjWiCvzVzF5%2FObiIXhEHpq72sNSAOWcbSSrjXzhxAVyNNxiMQu4BmLQZRGgf8ml%2FHcLVlKFUhgCw89I8uMiwYNOXs20IEsjZ1Hpv8DBrNzJBgUUexX5YRX5rxXfMzmjJau6TCBZYQ64DQMM%2BT3sMGOqUBLkro0GS4DwHdFzHtPJrUwbxNk4PF563QHQPI0%2FgxxrI%2BukcNncFkW1HVv6RGDsbGULKtV3JW0lyvugQF3%2FrE7SUV2rTrXz0yAmIG7di4Mvk%2BYuSTx2h5hEf9VyvnbiJu55gv9rPvkX5iZ%2FSXzgWhJWm5kdXskEIBlo6T6ixNHZa4mXX0UiVoJPGmPw9n2LUt8KPt00tGbSzXycy8WAl7Yf3c8Yx7&X-Amz-Signature=0721884734a3fbeb3681b905461b829b969fd616b5fed2bd4e3e0d13764708f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3QIUSK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICq9rh1YmnKLdNYnwgCybRi9Bq47sLvkLOx%2BWBc9RcAsAiEAr0QlKMBRwqRgbcpyn5XnHKvRqP%2F8AZ3evUs2NdadWMsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDMQAHV7InJ64gw%2FVCrcA9JM0z0OYkM3GhyAjpiJclGJjQxepGqm1wnz3Uyw369kcCAcnMeLDO3YP3fstvAlPe2u7M7hpmAl4RLBTdu7B29FHUhsrpOZtZ8wR2v4ZkTuMRQdQEsCQva%2BJDAczjC1I8ZxusmV%2Bu7J%2BqO8QHLcPBcTT%2FGdeWKvODcBkpvsDwCjJbUKSEBmOIEuZRDJQ1qjgKr0PXNulqAYVtbr%2BELxI0QMuYlJ2lW17VLzeJXe5oCF7MQDUtqL9rkhARDVwRXv9oViD9rw41xkBDeok%2FpaRHjG5RcHE%2BqFyr1GMl9GCHW3H%2BSZ7wVXEKKFKW%2FQhDX7jBa0PHl0G%2B94U6dLSq%2F%2Fr3UGSK%2FZK8DJ1F5wcKy%2FnwgrptH1sGXpjPlf2UR4dat5J686uN5SehxNNCBBE5fuZcUFBLsEt4VmBB9HtJ2%2FoDy%2FVL0gbISJauVSkPyV9HtbNO34pyJKcR2bsC6mlGTMYSO8Dx%2BbzwJO6Lo%2BUB8opngPwk5tjWiCvzVzF5%2FObiIXhEHpq72sNSAOWcbSSrjXzhxAVyNNxiMQu4BmLQZRGgf8ml%2FHcLVlKFUhgCw89I8uMiwYNOXs20IEsjZ1Hpv8DBrNzJBgUUexX5YRX5rxXfMzmjJau6TCBZYQ64DQMM%2BT3sMGOqUBLkro0GS4DwHdFzHtPJrUwbxNk4PF563QHQPI0%2FgxxrI%2BukcNncFkW1HVv6RGDsbGULKtV3JW0lyvugQF3%2FrE7SUV2rTrXz0yAmIG7di4Mvk%2BYuSTx2h5hEf9VyvnbiJu55gv9rPvkX5iZ%2FSXzgWhJWm5kdXskEIBlo6T6ixNHZa4mXX0UiVoJPGmPw9n2LUt8KPt00tGbSzXycy8WAl7Yf3c8Yx7&X-Amz-Signature=1d7a19b55023e75312dba48838845fb37ad8a548e64659f5703ef4bd7c956966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3QIUSK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICq9rh1YmnKLdNYnwgCybRi9Bq47sLvkLOx%2BWBc9RcAsAiEAr0QlKMBRwqRgbcpyn5XnHKvRqP%2F8AZ3evUs2NdadWMsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDMQAHV7InJ64gw%2FVCrcA9JM0z0OYkM3GhyAjpiJclGJjQxepGqm1wnz3Uyw369kcCAcnMeLDO3YP3fstvAlPe2u7M7hpmAl4RLBTdu7B29FHUhsrpOZtZ8wR2v4ZkTuMRQdQEsCQva%2BJDAczjC1I8ZxusmV%2Bu7J%2BqO8QHLcPBcTT%2FGdeWKvODcBkpvsDwCjJbUKSEBmOIEuZRDJQ1qjgKr0PXNulqAYVtbr%2BELxI0QMuYlJ2lW17VLzeJXe5oCF7MQDUtqL9rkhARDVwRXv9oViD9rw41xkBDeok%2FpaRHjG5RcHE%2BqFyr1GMl9GCHW3H%2BSZ7wVXEKKFKW%2FQhDX7jBa0PHl0G%2B94U6dLSq%2F%2Fr3UGSK%2FZK8DJ1F5wcKy%2FnwgrptH1sGXpjPlf2UR4dat5J686uN5SehxNNCBBE5fuZcUFBLsEt4VmBB9HtJ2%2FoDy%2FVL0gbISJauVSkPyV9HtbNO34pyJKcR2bsC6mlGTMYSO8Dx%2BbzwJO6Lo%2BUB8opngPwk5tjWiCvzVzF5%2FObiIXhEHpq72sNSAOWcbSSrjXzhxAVyNNxiMQu4BmLQZRGgf8ml%2FHcLVlKFUhgCw89I8uMiwYNOXs20IEsjZ1Hpv8DBrNzJBgUUexX5YRX5rxXfMzmjJau6TCBZYQ64DQMM%2BT3sMGOqUBLkro0GS4DwHdFzHtPJrUwbxNk4PF563QHQPI0%2FgxxrI%2BukcNncFkW1HVv6RGDsbGULKtV3JW0lyvugQF3%2FrE7SUV2rTrXz0yAmIG7di4Mvk%2BYuSTx2h5hEf9VyvnbiJu55gv9rPvkX5iZ%2FSXzgWhJWm5kdXskEIBlo6T6ixNHZa4mXX0UiVoJPGmPw9n2LUt8KPt00tGbSzXycy8WAl7Yf3c8Yx7&X-Amz-Signature=c8f985ae38fdc50d8b6ce4ee7b836eacc205a51ce6ffd5793c8c2d02601c8ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
