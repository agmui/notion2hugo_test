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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=a3c1613232a50c13b4ad54dd3243c3aa5230bf9191f48132c796e4abd553031e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=7cde7e5311eb57c8ed8758fbcb6779bccffab8b57230b09f14d59655f6d66a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=cffdffbd36c8097ea08429b22617ad7dbabc538dc214d730063d522e4f44dc77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=a76a1b14d65c73b223a1591afa722359e5a4da3a159df04c2abde2720834a815&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=3c0ec078ccf0d8b18fe4200ef7f274f0612dde0b210a4b78eae8e9bc3bd5a41d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVU2XOC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRYNgzfOS6Y8Gk%2FSOkh8ui62pUeUOrRsYIWCFA4SbfOAiByWzqESlCkraxEgatmTLkT8xdsM6SveVkoLhPbdIAifSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVLukx5n1quz%2F9wz2KtwDwJIvhsW3w5WdQGwrd7oiogOQ508OmQy1jKnSGXyzWdF0E6BxlxxknGgotUd%2FaSQm%2BMZJWXIxF0o%2FGVtkYkymAKYMDSheBQZGb2J48NtWjH3LMoUzc0kwAFuwBzEfPJHMg5IvG9yGINdKyfuE8P2JvzDwH3SuzrC74L%2FVNI5sbI73C2hP%2FbH%2FGpJHhk7RamUm1njh8xWcUPWk8aESNRXnrwmn%2BpGpU0T%2F1zk7%2BvXSvrUcewjYaDdfKSLZC3lYBMJbFa493qiwvTNlcnCcRLXsyL%2BROVmFJMoEBn3woirnIysz7xCiC1bSdR7PF8VUvou7G5%2BpAzgC9ksEEq4sr2ireMzvDCcCYZFAOjevJbPpa6jy7RaNzMdsEyNiPvo3t5RCQet2icg849dwbKCr9wcbqY9z%2BBKQ8H6AEwAzIQ9dgjt3ZTgKoid5jd%2FLh6VMPBEzQQ7ePOREgzcukh7mY7Qe8CUUApJEezBbdiCzJfXPCAOVmXUPTZ494Ef%2BvzlJyItnSJjRTzEtsBfOb1Se4zb9Y64hjtgqhQnMD8qiGrSppcWuJZnKKdpU6dwWLPBHIKxI%2F4p7AnAoExp1L6Y1CZpjvhdHR9%2FbrdpKTrbw9ZY0EzJx%2BAx0R%2B%2B8P8CYVzsw0cT5wAY6pgEyg9flkrfvjhI%2BYjBMWCKPBWffwYhhnjlruh6N34fSiNosBxZVKCBpP08W0UcZ6XUotJk%2BQiiaUMnaa2OUvHxgq6VcKOJYafk86tqWwnHtb0BtjGkz0ptzGGS1t5l12H%2Fv2IRhOtg992cB5xj0OUiBOLfiNGe8kysr5BOwrnbagc0N8ChEYJ6MZ30HGeWpq3npAaOZ76F5DHS%2BeFyCIw3YHQwwDEnf&X-Amz-Signature=808733849afc1ac739b1a2f8ae69334e1f038515996b2d761b2cf4d3f49c4108&X-Amz-SignedHeaders=host&x-id=GetObject)
