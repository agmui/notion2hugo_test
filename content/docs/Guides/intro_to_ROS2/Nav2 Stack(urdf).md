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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIZRBYU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXSBq%2FX9g2kLkegOJZ7Op4acY1RjWNVgHv6BHRDcRZOAiAMJjmM0N5vvWNMHvPSIyoYzOXiZn9UM9zm5lUjFOcOwSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2Fr51VHxuUNwar28%2FKtwDKksQEybZp2AYJRz4m29G0hAubQxTg%2Bb9U7iO1%2B%2FPH%2Fw5gNeLImTxXoMwfP0e415hcLScquhYhNe8oiabWm7vRtdfZ9BC%2FoPKHViDqnLDlt1Yj7BvJ6xffiwagPv6DEfWWtMb6nTlmQF6NY6v8M%2BJlyeEGfkcDTewGcDEfK0tp65NPNBjCHmSPWRBOw1fbhYU7VAfpM0HNA2%2BquPKS9W8hIYpTY7qzCVrt9CzYbFOJClRYCbGarQNQxew0EKxkO0%2Bo3Rjnq%2BrbUNLdfBrXBhq9FW6%2B58S1e%2FKZyuzoCEUzHpC0bIUo69UrqWj0e23XuCzYCldSwHxg38fPt0ozSx9iubU6vUIYrEetbg9LlTVcvEgoJGhGj7Jrnl8xxE5Sy2pG1Youo%2FiwJ9nZvGg6jNo398QsILWX8C2hdHP4TUSF1ascxp3DeeLYbifVGjahqJoaS%2BRXFx5%2FVPvy2FPd6WbUw71g28eaoF4ACMlBkACPgUoBZ50MJEGyRmUVZEYqGLpwYOQqv6WSGgHhfyGeGWCR58dIiZ%2FlayPfhmIvqEVEJNiQ%2B7iovY0kOPFZ6f7np7AmLXwtAZPF%2FM96VQvLydjl78AxyUTFqXR9u72ZcnvxvEqo%2FRBog9qBrjJSH4wmrTVwQY6pgEe28iv41aaWI0ypb7C8Dub6N6lrlDVd8b9Fif6plfyQ20YbvJWAPani2yaLr6cYCN432Hw%2BKoZIhgzyHCP1%2BCcwgtQzaMzbDr1mal42suxfABIVMef43BShI59tC8xdLf38y%2BuTn1U4ACf%2B%2FXApXcsoMIv%2FxjdQZoy0SjPh2jFju7w5CI166ht0wUHGhbJPYX%2BJajTvjhuz5Z9kJY1UlKwRW%2BOcpei&X-Amz-Signature=b47948fd4b51eea49301c25602f80e004e35d6eb9175ae600278145b642616c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIZRBYU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXSBq%2FX9g2kLkegOJZ7Op4acY1RjWNVgHv6BHRDcRZOAiAMJjmM0N5vvWNMHvPSIyoYzOXiZn9UM9zm5lUjFOcOwSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2Fr51VHxuUNwar28%2FKtwDKksQEybZp2AYJRz4m29G0hAubQxTg%2Bb9U7iO1%2B%2FPH%2Fw5gNeLImTxXoMwfP0e415hcLScquhYhNe8oiabWm7vRtdfZ9BC%2FoPKHViDqnLDlt1Yj7BvJ6xffiwagPv6DEfWWtMb6nTlmQF6NY6v8M%2BJlyeEGfkcDTewGcDEfK0tp65NPNBjCHmSPWRBOw1fbhYU7VAfpM0HNA2%2BquPKS9W8hIYpTY7qzCVrt9CzYbFOJClRYCbGarQNQxew0EKxkO0%2Bo3Rjnq%2BrbUNLdfBrXBhq9FW6%2B58S1e%2FKZyuzoCEUzHpC0bIUo69UrqWj0e23XuCzYCldSwHxg38fPt0ozSx9iubU6vUIYrEetbg9LlTVcvEgoJGhGj7Jrnl8xxE5Sy2pG1Youo%2FiwJ9nZvGg6jNo398QsILWX8C2hdHP4TUSF1ascxp3DeeLYbifVGjahqJoaS%2BRXFx5%2FVPvy2FPd6WbUw71g28eaoF4ACMlBkACPgUoBZ50MJEGyRmUVZEYqGLpwYOQqv6WSGgHhfyGeGWCR58dIiZ%2FlayPfhmIvqEVEJNiQ%2B7iovY0kOPFZ6f7np7AmLXwtAZPF%2FM96VQvLydjl78AxyUTFqXR9u72ZcnvxvEqo%2FRBog9qBrjJSH4wmrTVwQY6pgEe28iv41aaWI0ypb7C8Dub6N6lrlDVd8b9Fif6plfyQ20YbvJWAPani2yaLr6cYCN432Hw%2BKoZIhgzyHCP1%2BCcwgtQzaMzbDr1mal42suxfABIVMef43BShI59tC8xdLf38y%2BuTn1U4ACf%2B%2FXApXcsoMIv%2FxjdQZoy0SjPh2jFju7w5CI166ht0wUHGhbJPYX%2BJajTvjhuz5Z9kJY1UlKwRW%2BOcpei&X-Amz-Signature=c9c6130b23f2af82783b5b81dca342ff6fa21147e4ce787e6ffe79f900d4096d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIZRBYU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXSBq%2FX9g2kLkegOJZ7Op4acY1RjWNVgHv6BHRDcRZOAiAMJjmM0N5vvWNMHvPSIyoYzOXiZn9UM9zm5lUjFOcOwSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2Fr51VHxuUNwar28%2FKtwDKksQEybZp2AYJRz4m29G0hAubQxTg%2Bb9U7iO1%2B%2FPH%2Fw5gNeLImTxXoMwfP0e415hcLScquhYhNe8oiabWm7vRtdfZ9BC%2FoPKHViDqnLDlt1Yj7BvJ6xffiwagPv6DEfWWtMb6nTlmQF6NY6v8M%2BJlyeEGfkcDTewGcDEfK0tp65NPNBjCHmSPWRBOw1fbhYU7VAfpM0HNA2%2BquPKS9W8hIYpTY7qzCVrt9CzYbFOJClRYCbGarQNQxew0EKxkO0%2Bo3Rjnq%2BrbUNLdfBrXBhq9FW6%2B58S1e%2FKZyuzoCEUzHpC0bIUo69UrqWj0e23XuCzYCldSwHxg38fPt0ozSx9iubU6vUIYrEetbg9LlTVcvEgoJGhGj7Jrnl8xxE5Sy2pG1Youo%2FiwJ9nZvGg6jNo398QsILWX8C2hdHP4TUSF1ascxp3DeeLYbifVGjahqJoaS%2BRXFx5%2FVPvy2FPd6WbUw71g28eaoF4ACMlBkACPgUoBZ50MJEGyRmUVZEYqGLpwYOQqv6WSGgHhfyGeGWCR58dIiZ%2FlayPfhmIvqEVEJNiQ%2B7iovY0kOPFZ6f7np7AmLXwtAZPF%2FM96VQvLydjl78AxyUTFqXR9u72ZcnvxvEqo%2FRBog9qBrjJSH4wmrTVwQY6pgEe28iv41aaWI0ypb7C8Dub6N6lrlDVd8b9Fif6plfyQ20YbvJWAPani2yaLr6cYCN432Hw%2BKoZIhgzyHCP1%2BCcwgtQzaMzbDr1mal42suxfABIVMef43BShI59tC8xdLf38y%2BuTn1U4ACf%2B%2FXApXcsoMIv%2FxjdQZoy0SjPh2jFju7w5CI166ht0wUHGhbJPYX%2BJajTvjhuz5Z9kJY1UlKwRW%2BOcpei&X-Amz-Signature=2ab9ac986cf587f25ec97a6a7a169e198dc9f9e7d6ff9c8d730f38db3420de81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIZRBYU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXSBq%2FX9g2kLkegOJZ7Op4acY1RjWNVgHv6BHRDcRZOAiAMJjmM0N5vvWNMHvPSIyoYzOXiZn9UM9zm5lUjFOcOwSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2Fr51VHxuUNwar28%2FKtwDKksQEybZp2AYJRz4m29G0hAubQxTg%2Bb9U7iO1%2B%2FPH%2Fw5gNeLImTxXoMwfP0e415hcLScquhYhNe8oiabWm7vRtdfZ9BC%2FoPKHViDqnLDlt1Yj7BvJ6xffiwagPv6DEfWWtMb6nTlmQF6NY6v8M%2BJlyeEGfkcDTewGcDEfK0tp65NPNBjCHmSPWRBOw1fbhYU7VAfpM0HNA2%2BquPKS9W8hIYpTY7qzCVrt9CzYbFOJClRYCbGarQNQxew0EKxkO0%2Bo3Rjnq%2BrbUNLdfBrXBhq9FW6%2B58S1e%2FKZyuzoCEUzHpC0bIUo69UrqWj0e23XuCzYCldSwHxg38fPt0ozSx9iubU6vUIYrEetbg9LlTVcvEgoJGhGj7Jrnl8xxE5Sy2pG1Youo%2FiwJ9nZvGg6jNo398QsILWX8C2hdHP4TUSF1ascxp3DeeLYbifVGjahqJoaS%2BRXFx5%2FVPvy2FPd6WbUw71g28eaoF4ACMlBkACPgUoBZ50MJEGyRmUVZEYqGLpwYOQqv6WSGgHhfyGeGWCR58dIiZ%2FlayPfhmIvqEVEJNiQ%2B7iovY0kOPFZ6f7np7AmLXwtAZPF%2FM96VQvLydjl78AxyUTFqXR9u72ZcnvxvEqo%2FRBog9qBrjJSH4wmrTVwQY6pgEe28iv41aaWI0ypb7C8Dub6N6lrlDVd8b9Fif6plfyQ20YbvJWAPani2yaLr6cYCN432Hw%2BKoZIhgzyHCP1%2BCcwgtQzaMzbDr1mal42suxfABIVMef43BShI59tC8xdLf38y%2BuTn1U4ACf%2B%2FXApXcsoMIv%2FxjdQZoy0SjPh2jFju7w5CI166ht0wUHGhbJPYX%2BJajTvjhuz5Z9kJY1UlKwRW%2BOcpei&X-Amz-Signature=bd353d20b8638a1ee3c5a2056e2b5df13206d2f62cd5690d3e526d35a51ec1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIZRBYU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXSBq%2FX9g2kLkegOJZ7Op4acY1RjWNVgHv6BHRDcRZOAiAMJjmM0N5vvWNMHvPSIyoYzOXiZn9UM9zm5lUjFOcOwSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2Fr51VHxuUNwar28%2FKtwDKksQEybZp2AYJRz4m29G0hAubQxTg%2Bb9U7iO1%2B%2FPH%2Fw5gNeLImTxXoMwfP0e415hcLScquhYhNe8oiabWm7vRtdfZ9BC%2FoPKHViDqnLDlt1Yj7BvJ6xffiwagPv6DEfWWtMb6nTlmQF6NY6v8M%2BJlyeEGfkcDTewGcDEfK0tp65NPNBjCHmSPWRBOw1fbhYU7VAfpM0HNA2%2BquPKS9W8hIYpTY7qzCVrt9CzYbFOJClRYCbGarQNQxew0EKxkO0%2Bo3Rjnq%2BrbUNLdfBrXBhq9FW6%2B58S1e%2FKZyuzoCEUzHpC0bIUo69UrqWj0e23XuCzYCldSwHxg38fPt0ozSx9iubU6vUIYrEetbg9LlTVcvEgoJGhGj7Jrnl8xxE5Sy2pG1Youo%2FiwJ9nZvGg6jNo398QsILWX8C2hdHP4TUSF1ascxp3DeeLYbifVGjahqJoaS%2BRXFx5%2FVPvy2FPd6WbUw71g28eaoF4ACMlBkACPgUoBZ50MJEGyRmUVZEYqGLpwYOQqv6WSGgHhfyGeGWCR58dIiZ%2FlayPfhmIvqEVEJNiQ%2B7iovY0kOPFZ6f7np7AmLXwtAZPF%2FM96VQvLydjl78AxyUTFqXR9u72ZcnvxvEqo%2FRBog9qBrjJSH4wmrTVwQY6pgEe28iv41aaWI0ypb7C8Dub6N6lrlDVd8b9Fif6plfyQ20YbvJWAPani2yaLr6cYCN432Hw%2BKoZIhgzyHCP1%2BCcwgtQzaMzbDr1mal42suxfABIVMef43BShI59tC8xdLf38y%2BuTn1U4ACf%2B%2FXApXcsoMIv%2FxjdQZoy0SjPh2jFju7w5CI166ht0wUHGhbJPYX%2BJajTvjhuz5Z9kJY1UlKwRW%2BOcpei&X-Amz-Signature=17c3132815492627e727887fe0f07709038b0ef2304bbab36ab5ed42798fc2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIZRBYU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXSBq%2FX9g2kLkegOJZ7Op4acY1RjWNVgHv6BHRDcRZOAiAMJjmM0N5vvWNMHvPSIyoYzOXiZn9UM9zm5lUjFOcOwSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2Fr51VHxuUNwar28%2FKtwDKksQEybZp2AYJRz4m29G0hAubQxTg%2Bb9U7iO1%2B%2FPH%2Fw5gNeLImTxXoMwfP0e415hcLScquhYhNe8oiabWm7vRtdfZ9BC%2FoPKHViDqnLDlt1Yj7BvJ6xffiwagPv6DEfWWtMb6nTlmQF6NY6v8M%2BJlyeEGfkcDTewGcDEfK0tp65NPNBjCHmSPWRBOw1fbhYU7VAfpM0HNA2%2BquPKS9W8hIYpTY7qzCVrt9CzYbFOJClRYCbGarQNQxew0EKxkO0%2Bo3Rjnq%2BrbUNLdfBrXBhq9FW6%2B58S1e%2FKZyuzoCEUzHpC0bIUo69UrqWj0e23XuCzYCldSwHxg38fPt0ozSx9iubU6vUIYrEetbg9LlTVcvEgoJGhGj7Jrnl8xxE5Sy2pG1Youo%2FiwJ9nZvGg6jNo398QsILWX8C2hdHP4TUSF1ascxp3DeeLYbifVGjahqJoaS%2BRXFx5%2FVPvy2FPd6WbUw71g28eaoF4ACMlBkACPgUoBZ50MJEGyRmUVZEYqGLpwYOQqv6WSGgHhfyGeGWCR58dIiZ%2FlayPfhmIvqEVEJNiQ%2B7iovY0kOPFZ6f7np7AmLXwtAZPF%2FM96VQvLydjl78AxyUTFqXR9u72ZcnvxvEqo%2FRBog9qBrjJSH4wmrTVwQY6pgEe28iv41aaWI0ypb7C8Dub6N6lrlDVd8b9Fif6plfyQ20YbvJWAPani2yaLr6cYCN432Hw%2BKoZIhgzyHCP1%2BCcwgtQzaMzbDr1mal42suxfABIVMef43BShI59tC8xdLf38y%2BuTn1U4ACf%2B%2FXApXcsoMIv%2FxjdQZoy0SjPh2jFju7w5CI166ht0wUHGhbJPYX%2BJajTvjhuz5Z9kJY1UlKwRW%2BOcpei&X-Amz-Signature=bd596da785b1b2407bdc650390906e4caa311d908efceaae53a777b2b3bcf549&X-Amz-SignedHeaders=host&x-id=GetObject)
