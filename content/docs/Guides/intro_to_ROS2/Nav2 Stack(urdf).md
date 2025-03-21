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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQHFYBD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICVmaYvF3SjEWxJyA5AC8hHlj7NhedFDg%2BJj83Z%2B8OZqAiBSAN5ftvrCn3%2FQ1%2BQZk01DYu53w7k1SU2NT52PLNZnICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUEGukxsyS%2BKPCsSKtwDjheAzdMqUbpIZBtDdq%2BfnPsAo5ddNwUe6HmNQso0LCXo7%2F%2FAj%2FV4uquiDDpSIRLLsDAXzFrKMmiEIto5vuxYEgfmIxWwcNVyJQt1Z690ni4XgnjDENGf1HpKKdsN%2B5PXjJzEm1zUZwZBS3fX1IxFHWYSTDwxK9XkvKvtGJltiph%2ByPiAIB%2FKmmcJRAdfU%2FuJUtHElbVVPwXF%2Bf7Zu5ZkYFtPkkzIZYUs3hQzzWFTrzoI4sYRuDmdnIllkxPorpkUAGpGXhNNkwwZI0cIlWFn5nXJEpfKQd2haBtVdncElmAsjYHvGVu4Hp3upqOmh1y2rUZn8wzoUdnvPCjB0Et11bsVuH4gbLDdvJinG6VSffkHMaRE926CBrl8ShZOZw4lZ7HL%2F%2B9%2BrLZU5KKAlQC54hdXe%2F3ByWmRpiJzUwM7v42Ognbg1fujvZmtxVNP8G9Pl4Pma5ceiBPNrd3zkUJJ3vPJhrO%2BFVHrtTJNzVpJQFhos26qr0nrbNppjKfUfSM%2B2LT7rr39MCxAeVkcqRhDeWbiaEDSc5XLqNHE5EC%2BzmsoJPIFyYfAIdOfXQk4DXA54iWh8Grq1EUewnhUz%2FFZyfa%2BsrWXbC6rtwxc%2FTuVGkNf24oAR01jTiGk5bsw6tf0vgY6pgFOW4Z2KpnejoaMgSM6yTRPimTzRM6rf%2FA4Ip6DAyjJnO0nP9pR%2FtQWqm7I0feUxOZmYmB2QlyGeIgjDfqn0qMxkQmrMbnNYZMtOvAzR5kfmE3VOCQNB6c5GfwxDTQOqLApD%2B4bx%2BB%2BCFMIOchkVfliXzNdegthf7T5ea37zGb9joDxlbUH4%2FaLN8FmSDiiW8Xq%2B7Div%2FRGg%2B11tHtirvfvXpAPynjh&X-Amz-Signature=484d0d96ec3d2c033e08f99c0e38520294a690f6a54706b2d4361a7232d8c650&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQHFYBD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICVmaYvF3SjEWxJyA5AC8hHlj7NhedFDg%2BJj83Z%2B8OZqAiBSAN5ftvrCn3%2FQ1%2BQZk01DYu53w7k1SU2NT52PLNZnICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUEGukxsyS%2BKPCsSKtwDjheAzdMqUbpIZBtDdq%2BfnPsAo5ddNwUe6HmNQso0LCXo7%2F%2FAj%2FV4uquiDDpSIRLLsDAXzFrKMmiEIto5vuxYEgfmIxWwcNVyJQt1Z690ni4XgnjDENGf1HpKKdsN%2B5PXjJzEm1zUZwZBS3fX1IxFHWYSTDwxK9XkvKvtGJltiph%2ByPiAIB%2FKmmcJRAdfU%2FuJUtHElbVVPwXF%2Bf7Zu5ZkYFtPkkzIZYUs3hQzzWFTrzoI4sYRuDmdnIllkxPorpkUAGpGXhNNkwwZI0cIlWFn5nXJEpfKQd2haBtVdncElmAsjYHvGVu4Hp3upqOmh1y2rUZn8wzoUdnvPCjB0Et11bsVuH4gbLDdvJinG6VSffkHMaRE926CBrl8ShZOZw4lZ7HL%2F%2B9%2BrLZU5KKAlQC54hdXe%2F3ByWmRpiJzUwM7v42Ognbg1fujvZmtxVNP8G9Pl4Pma5ceiBPNrd3zkUJJ3vPJhrO%2BFVHrtTJNzVpJQFhos26qr0nrbNppjKfUfSM%2B2LT7rr39MCxAeVkcqRhDeWbiaEDSc5XLqNHE5EC%2BzmsoJPIFyYfAIdOfXQk4DXA54iWh8Grq1EUewnhUz%2FFZyfa%2BsrWXbC6rtwxc%2FTuVGkNf24oAR01jTiGk5bsw6tf0vgY6pgFOW4Z2KpnejoaMgSM6yTRPimTzRM6rf%2FA4Ip6DAyjJnO0nP9pR%2FtQWqm7I0feUxOZmYmB2QlyGeIgjDfqn0qMxkQmrMbnNYZMtOvAzR5kfmE3VOCQNB6c5GfwxDTQOqLApD%2B4bx%2BB%2BCFMIOchkVfliXzNdegthf7T5ea37zGb9joDxlbUH4%2FaLN8FmSDiiW8Xq%2B7Div%2FRGg%2B11tHtirvfvXpAPynjh&X-Amz-Signature=4212a43a65c92a99a0059198bb615062cda775c1e41b2c426397f6aea7b64751&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQHFYBD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICVmaYvF3SjEWxJyA5AC8hHlj7NhedFDg%2BJj83Z%2B8OZqAiBSAN5ftvrCn3%2FQ1%2BQZk01DYu53w7k1SU2NT52PLNZnICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUEGukxsyS%2BKPCsSKtwDjheAzdMqUbpIZBtDdq%2BfnPsAo5ddNwUe6HmNQso0LCXo7%2F%2FAj%2FV4uquiDDpSIRLLsDAXzFrKMmiEIto5vuxYEgfmIxWwcNVyJQt1Z690ni4XgnjDENGf1HpKKdsN%2B5PXjJzEm1zUZwZBS3fX1IxFHWYSTDwxK9XkvKvtGJltiph%2ByPiAIB%2FKmmcJRAdfU%2FuJUtHElbVVPwXF%2Bf7Zu5ZkYFtPkkzIZYUs3hQzzWFTrzoI4sYRuDmdnIllkxPorpkUAGpGXhNNkwwZI0cIlWFn5nXJEpfKQd2haBtVdncElmAsjYHvGVu4Hp3upqOmh1y2rUZn8wzoUdnvPCjB0Et11bsVuH4gbLDdvJinG6VSffkHMaRE926CBrl8ShZOZw4lZ7HL%2F%2B9%2BrLZU5KKAlQC54hdXe%2F3ByWmRpiJzUwM7v42Ognbg1fujvZmtxVNP8G9Pl4Pma5ceiBPNrd3zkUJJ3vPJhrO%2BFVHrtTJNzVpJQFhos26qr0nrbNppjKfUfSM%2B2LT7rr39MCxAeVkcqRhDeWbiaEDSc5XLqNHE5EC%2BzmsoJPIFyYfAIdOfXQk4DXA54iWh8Grq1EUewnhUz%2FFZyfa%2BsrWXbC6rtwxc%2FTuVGkNf24oAR01jTiGk5bsw6tf0vgY6pgFOW4Z2KpnejoaMgSM6yTRPimTzRM6rf%2FA4Ip6DAyjJnO0nP9pR%2FtQWqm7I0feUxOZmYmB2QlyGeIgjDfqn0qMxkQmrMbnNYZMtOvAzR5kfmE3VOCQNB6c5GfwxDTQOqLApD%2B4bx%2BB%2BCFMIOchkVfliXzNdegthf7T5ea37zGb9joDxlbUH4%2FaLN8FmSDiiW8Xq%2B7Div%2FRGg%2B11tHtirvfvXpAPynjh&X-Amz-Signature=1a1085f4853db4e8e6b89597440b33a3d452d787f48a65e75b382412de3dd2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQHFYBD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICVmaYvF3SjEWxJyA5AC8hHlj7NhedFDg%2BJj83Z%2B8OZqAiBSAN5ftvrCn3%2FQ1%2BQZk01DYu53w7k1SU2NT52PLNZnICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUEGukxsyS%2BKPCsSKtwDjheAzdMqUbpIZBtDdq%2BfnPsAo5ddNwUe6HmNQso0LCXo7%2F%2FAj%2FV4uquiDDpSIRLLsDAXzFrKMmiEIto5vuxYEgfmIxWwcNVyJQt1Z690ni4XgnjDENGf1HpKKdsN%2B5PXjJzEm1zUZwZBS3fX1IxFHWYSTDwxK9XkvKvtGJltiph%2ByPiAIB%2FKmmcJRAdfU%2FuJUtHElbVVPwXF%2Bf7Zu5ZkYFtPkkzIZYUs3hQzzWFTrzoI4sYRuDmdnIllkxPorpkUAGpGXhNNkwwZI0cIlWFn5nXJEpfKQd2haBtVdncElmAsjYHvGVu4Hp3upqOmh1y2rUZn8wzoUdnvPCjB0Et11bsVuH4gbLDdvJinG6VSffkHMaRE926CBrl8ShZOZw4lZ7HL%2F%2B9%2BrLZU5KKAlQC54hdXe%2F3ByWmRpiJzUwM7v42Ognbg1fujvZmtxVNP8G9Pl4Pma5ceiBPNrd3zkUJJ3vPJhrO%2BFVHrtTJNzVpJQFhos26qr0nrbNppjKfUfSM%2B2LT7rr39MCxAeVkcqRhDeWbiaEDSc5XLqNHE5EC%2BzmsoJPIFyYfAIdOfXQk4DXA54iWh8Grq1EUewnhUz%2FFZyfa%2BsrWXbC6rtwxc%2FTuVGkNf24oAR01jTiGk5bsw6tf0vgY6pgFOW4Z2KpnejoaMgSM6yTRPimTzRM6rf%2FA4Ip6DAyjJnO0nP9pR%2FtQWqm7I0feUxOZmYmB2QlyGeIgjDfqn0qMxkQmrMbnNYZMtOvAzR5kfmE3VOCQNB6c5GfwxDTQOqLApD%2B4bx%2BB%2BCFMIOchkVfliXzNdegthf7T5ea37zGb9joDxlbUH4%2FaLN8FmSDiiW8Xq%2B7Div%2FRGg%2B11tHtirvfvXpAPynjh&X-Amz-Signature=1884f4dd25679ff3ea3e34cc07ed06641cb7bb3ae91fedb87457f0ffd26544f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQHFYBD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICVmaYvF3SjEWxJyA5AC8hHlj7NhedFDg%2BJj83Z%2B8OZqAiBSAN5ftvrCn3%2FQ1%2BQZk01DYu53w7k1SU2NT52PLNZnICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUEGukxsyS%2BKPCsSKtwDjheAzdMqUbpIZBtDdq%2BfnPsAo5ddNwUe6HmNQso0LCXo7%2F%2FAj%2FV4uquiDDpSIRLLsDAXzFrKMmiEIto5vuxYEgfmIxWwcNVyJQt1Z690ni4XgnjDENGf1HpKKdsN%2B5PXjJzEm1zUZwZBS3fX1IxFHWYSTDwxK9XkvKvtGJltiph%2ByPiAIB%2FKmmcJRAdfU%2FuJUtHElbVVPwXF%2Bf7Zu5ZkYFtPkkzIZYUs3hQzzWFTrzoI4sYRuDmdnIllkxPorpkUAGpGXhNNkwwZI0cIlWFn5nXJEpfKQd2haBtVdncElmAsjYHvGVu4Hp3upqOmh1y2rUZn8wzoUdnvPCjB0Et11bsVuH4gbLDdvJinG6VSffkHMaRE926CBrl8ShZOZw4lZ7HL%2F%2B9%2BrLZU5KKAlQC54hdXe%2F3ByWmRpiJzUwM7v42Ognbg1fujvZmtxVNP8G9Pl4Pma5ceiBPNrd3zkUJJ3vPJhrO%2BFVHrtTJNzVpJQFhos26qr0nrbNppjKfUfSM%2B2LT7rr39MCxAeVkcqRhDeWbiaEDSc5XLqNHE5EC%2BzmsoJPIFyYfAIdOfXQk4DXA54iWh8Grq1EUewnhUz%2FFZyfa%2BsrWXbC6rtwxc%2FTuVGkNf24oAR01jTiGk5bsw6tf0vgY6pgFOW4Z2KpnejoaMgSM6yTRPimTzRM6rf%2FA4Ip6DAyjJnO0nP9pR%2FtQWqm7I0feUxOZmYmB2QlyGeIgjDfqn0qMxkQmrMbnNYZMtOvAzR5kfmE3VOCQNB6c5GfwxDTQOqLApD%2B4bx%2BB%2BCFMIOchkVfliXzNdegthf7T5ea37zGb9joDxlbUH4%2FaLN8FmSDiiW8Xq%2B7Div%2FRGg%2B11tHtirvfvXpAPynjh&X-Amz-Signature=c4d73add73294d09f54cccb27b5ee5fbba5ad487c992afcf139cd6deee45b26c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQHFYBD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICVmaYvF3SjEWxJyA5AC8hHlj7NhedFDg%2BJj83Z%2B8OZqAiBSAN5ftvrCn3%2FQ1%2BQZk01DYu53w7k1SU2NT52PLNZnICqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUEGukxsyS%2BKPCsSKtwDjheAzdMqUbpIZBtDdq%2BfnPsAo5ddNwUe6HmNQso0LCXo7%2F%2FAj%2FV4uquiDDpSIRLLsDAXzFrKMmiEIto5vuxYEgfmIxWwcNVyJQt1Z690ni4XgnjDENGf1HpKKdsN%2B5PXjJzEm1zUZwZBS3fX1IxFHWYSTDwxK9XkvKvtGJltiph%2ByPiAIB%2FKmmcJRAdfU%2FuJUtHElbVVPwXF%2Bf7Zu5ZkYFtPkkzIZYUs3hQzzWFTrzoI4sYRuDmdnIllkxPorpkUAGpGXhNNkwwZI0cIlWFn5nXJEpfKQd2haBtVdncElmAsjYHvGVu4Hp3upqOmh1y2rUZn8wzoUdnvPCjB0Et11bsVuH4gbLDdvJinG6VSffkHMaRE926CBrl8ShZOZw4lZ7HL%2F%2B9%2BrLZU5KKAlQC54hdXe%2F3ByWmRpiJzUwM7v42Ognbg1fujvZmtxVNP8G9Pl4Pma5ceiBPNrd3zkUJJ3vPJhrO%2BFVHrtTJNzVpJQFhos26qr0nrbNppjKfUfSM%2B2LT7rr39MCxAeVkcqRhDeWbiaEDSc5XLqNHE5EC%2BzmsoJPIFyYfAIdOfXQk4DXA54iWh8Grq1EUewnhUz%2FFZyfa%2BsrWXbC6rtwxc%2FTuVGkNf24oAR01jTiGk5bsw6tf0vgY6pgFOW4Z2KpnejoaMgSM6yTRPimTzRM6rf%2FA4Ip6DAyjJnO0nP9pR%2FtQWqm7I0feUxOZmYmB2QlyGeIgjDfqn0qMxkQmrMbnNYZMtOvAzR5kfmE3VOCQNB6c5GfwxDTQOqLApD%2B4bx%2BB%2BCFMIOchkVfliXzNdegthf7T5ea37zGb9joDxlbUH4%2FaLN8FmSDiiW8Xq%2B7Div%2FRGg%2B11tHtirvfvXpAPynjh&X-Amz-Signature=85daf13a64fe2de14090b34c0827530b93dd9d9edd4b764a984df1df04de459b&X-Amz-SignedHeaders=host&x-id=GetObject)
