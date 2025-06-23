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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IKKX5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC1oWQvSbzQCMBIdl798w5pXDypTxUHWHd5Z9FN6lRIxwIge%2BGsVBXNFG8X0V7m78PKb%2FAHoCxWARpQ6LU3ZrgEWj0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM5ntKBldYqatTXWwyrcA0HdMBdlgcemOHbSlZvVaCh2%2BNphDOXMBUlO9vpHdQJcJWzHGEKttW%2BjSGPWroKUpp0KfSivtmlUAnlRQnJKfLCLNtaI03OF0n4xcG2Au%2FkfZOheM0iM4Ga1q18iM0H6DBuI8hBYwqT6PPhL9b%2BRPTOlfgOYKL0DcQr2b98X6E%2BFfIrlCBKHoM1x15v1PWZJGFwWt18mAh4D8wBkDyqSjwW28%2FgBZgJaTBpkYz9hQ8iyy44XjttiWpPM2rwYmj%2FV4Ceyek%2FnHKNuQds60AepWdLfP0GdU1BalVBOtC5ARIsxym3kHT1QSF6elbQSHX2bWK29HeJ6Y6rqc6nQSxNeSZpczlvQo44omYuIGkXqXwQ1KsINsQ0GzTqAEUGDgVTXgJsucHF6jmYEYYMuIYrlbDKg4QRsM%2FAvhm5T2bIng5gxNUPRWCyWQzZaSx2Dnsm9SdBlhoztuaoz9lf4zq7Xv0QXgvgvsG1zBy1HXCo3CTGu4UuPqBj5IqlEfWfAsCyoBjiYO1wjKCg3kAiVDBcgYSZ2wOjRqIIhhJ1bPfbimGeDpGLhdk6ZHdCYXG4WyeoBHsxoVbKWzt6jZ9EOoy5ZBZy%2Fd7JPjJ8I1nz7vqPffCUTkWu5ww0Y4iSE%2FoGFMJiq5sIGOqUBdi%2FFmJplQLEtGDOYqv6onL1REhjZOcyIDZIVKIyBwEXYuO0MInflKSypuhRb8Cy2gLwOQOfEX8yNteti5rb%2F3X2CSoCfywbrOyw8UhSxa%2F5tHjVbJvPFgTPCHsNSEHt46thv1hEr5Kp1HoPlA6qcAM%2BAtJ7bWhRK%2BD9b4PCJHKrDK4GJ4x2P1pTlCyC4uKstF1H045cZ0R7WQEvRo4F5RCLEpNyb&X-Amz-Signature=6b552b0ecb1363cdb56c2b79f734301c24cdfe9788911b76c59b73b6db85dee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IKKX5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC1oWQvSbzQCMBIdl798w5pXDypTxUHWHd5Z9FN6lRIxwIge%2BGsVBXNFG8X0V7m78PKb%2FAHoCxWARpQ6LU3ZrgEWj0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM5ntKBldYqatTXWwyrcA0HdMBdlgcemOHbSlZvVaCh2%2BNphDOXMBUlO9vpHdQJcJWzHGEKttW%2BjSGPWroKUpp0KfSivtmlUAnlRQnJKfLCLNtaI03OF0n4xcG2Au%2FkfZOheM0iM4Ga1q18iM0H6DBuI8hBYwqT6PPhL9b%2BRPTOlfgOYKL0DcQr2b98X6E%2BFfIrlCBKHoM1x15v1PWZJGFwWt18mAh4D8wBkDyqSjwW28%2FgBZgJaTBpkYz9hQ8iyy44XjttiWpPM2rwYmj%2FV4Ceyek%2FnHKNuQds60AepWdLfP0GdU1BalVBOtC5ARIsxym3kHT1QSF6elbQSHX2bWK29HeJ6Y6rqc6nQSxNeSZpczlvQo44omYuIGkXqXwQ1KsINsQ0GzTqAEUGDgVTXgJsucHF6jmYEYYMuIYrlbDKg4QRsM%2FAvhm5T2bIng5gxNUPRWCyWQzZaSx2Dnsm9SdBlhoztuaoz9lf4zq7Xv0QXgvgvsG1zBy1HXCo3CTGu4UuPqBj5IqlEfWfAsCyoBjiYO1wjKCg3kAiVDBcgYSZ2wOjRqIIhhJ1bPfbimGeDpGLhdk6ZHdCYXG4WyeoBHsxoVbKWzt6jZ9EOoy5ZBZy%2Fd7JPjJ8I1nz7vqPffCUTkWu5ww0Y4iSE%2FoGFMJiq5sIGOqUBdi%2FFmJplQLEtGDOYqv6onL1REhjZOcyIDZIVKIyBwEXYuO0MInflKSypuhRb8Cy2gLwOQOfEX8yNteti5rb%2F3X2CSoCfywbrOyw8UhSxa%2F5tHjVbJvPFgTPCHsNSEHt46thv1hEr5Kp1HoPlA6qcAM%2BAtJ7bWhRK%2BD9b4PCJHKrDK4GJ4x2P1pTlCyC4uKstF1H045cZ0R7WQEvRo4F5RCLEpNyb&X-Amz-Signature=6e1bd9bfed51ddd0a1f3d4e8154647dae93971e43a58e6aac27b516a9e92b049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IKKX5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC1oWQvSbzQCMBIdl798w5pXDypTxUHWHd5Z9FN6lRIxwIge%2BGsVBXNFG8X0V7m78PKb%2FAHoCxWARpQ6LU3ZrgEWj0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM5ntKBldYqatTXWwyrcA0HdMBdlgcemOHbSlZvVaCh2%2BNphDOXMBUlO9vpHdQJcJWzHGEKttW%2BjSGPWroKUpp0KfSivtmlUAnlRQnJKfLCLNtaI03OF0n4xcG2Au%2FkfZOheM0iM4Ga1q18iM0H6DBuI8hBYwqT6PPhL9b%2BRPTOlfgOYKL0DcQr2b98X6E%2BFfIrlCBKHoM1x15v1PWZJGFwWt18mAh4D8wBkDyqSjwW28%2FgBZgJaTBpkYz9hQ8iyy44XjttiWpPM2rwYmj%2FV4Ceyek%2FnHKNuQds60AepWdLfP0GdU1BalVBOtC5ARIsxym3kHT1QSF6elbQSHX2bWK29HeJ6Y6rqc6nQSxNeSZpczlvQo44omYuIGkXqXwQ1KsINsQ0GzTqAEUGDgVTXgJsucHF6jmYEYYMuIYrlbDKg4QRsM%2FAvhm5T2bIng5gxNUPRWCyWQzZaSx2Dnsm9SdBlhoztuaoz9lf4zq7Xv0QXgvgvsG1zBy1HXCo3CTGu4UuPqBj5IqlEfWfAsCyoBjiYO1wjKCg3kAiVDBcgYSZ2wOjRqIIhhJ1bPfbimGeDpGLhdk6ZHdCYXG4WyeoBHsxoVbKWzt6jZ9EOoy5ZBZy%2Fd7JPjJ8I1nz7vqPffCUTkWu5ww0Y4iSE%2FoGFMJiq5sIGOqUBdi%2FFmJplQLEtGDOYqv6onL1REhjZOcyIDZIVKIyBwEXYuO0MInflKSypuhRb8Cy2gLwOQOfEX8yNteti5rb%2F3X2CSoCfywbrOyw8UhSxa%2F5tHjVbJvPFgTPCHsNSEHt46thv1hEr5Kp1HoPlA6qcAM%2BAtJ7bWhRK%2BD9b4PCJHKrDK4GJ4x2P1pTlCyC4uKstF1H045cZ0R7WQEvRo4F5RCLEpNyb&X-Amz-Signature=c8dc8fd8c0d21b82f4a46b9e1a817fc9f8627afc4c782784b147efc870b3af85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IKKX5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC1oWQvSbzQCMBIdl798w5pXDypTxUHWHd5Z9FN6lRIxwIge%2BGsVBXNFG8X0V7m78PKb%2FAHoCxWARpQ6LU3ZrgEWj0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM5ntKBldYqatTXWwyrcA0HdMBdlgcemOHbSlZvVaCh2%2BNphDOXMBUlO9vpHdQJcJWzHGEKttW%2BjSGPWroKUpp0KfSivtmlUAnlRQnJKfLCLNtaI03OF0n4xcG2Au%2FkfZOheM0iM4Ga1q18iM0H6DBuI8hBYwqT6PPhL9b%2BRPTOlfgOYKL0DcQr2b98X6E%2BFfIrlCBKHoM1x15v1PWZJGFwWt18mAh4D8wBkDyqSjwW28%2FgBZgJaTBpkYz9hQ8iyy44XjttiWpPM2rwYmj%2FV4Ceyek%2FnHKNuQds60AepWdLfP0GdU1BalVBOtC5ARIsxym3kHT1QSF6elbQSHX2bWK29HeJ6Y6rqc6nQSxNeSZpczlvQo44omYuIGkXqXwQ1KsINsQ0GzTqAEUGDgVTXgJsucHF6jmYEYYMuIYrlbDKg4QRsM%2FAvhm5T2bIng5gxNUPRWCyWQzZaSx2Dnsm9SdBlhoztuaoz9lf4zq7Xv0QXgvgvsG1zBy1HXCo3CTGu4UuPqBj5IqlEfWfAsCyoBjiYO1wjKCg3kAiVDBcgYSZ2wOjRqIIhhJ1bPfbimGeDpGLhdk6ZHdCYXG4WyeoBHsxoVbKWzt6jZ9EOoy5ZBZy%2Fd7JPjJ8I1nz7vqPffCUTkWu5ww0Y4iSE%2FoGFMJiq5sIGOqUBdi%2FFmJplQLEtGDOYqv6onL1REhjZOcyIDZIVKIyBwEXYuO0MInflKSypuhRb8Cy2gLwOQOfEX8yNteti5rb%2F3X2CSoCfywbrOyw8UhSxa%2F5tHjVbJvPFgTPCHsNSEHt46thv1hEr5Kp1HoPlA6qcAM%2BAtJ7bWhRK%2BD9b4PCJHKrDK4GJ4x2P1pTlCyC4uKstF1H045cZ0R7WQEvRo4F5RCLEpNyb&X-Amz-Signature=2c5c592115f73bc17bf963044abdef1cb644957d2a6e4635969f558587175a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IKKX5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC1oWQvSbzQCMBIdl798w5pXDypTxUHWHd5Z9FN6lRIxwIge%2BGsVBXNFG8X0V7m78PKb%2FAHoCxWARpQ6LU3ZrgEWj0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM5ntKBldYqatTXWwyrcA0HdMBdlgcemOHbSlZvVaCh2%2BNphDOXMBUlO9vpHdQJcJWzHGEKttW%2BjSGPWroKUpp0KfSivtmlUAnlRQnJKfLCLNtaI03OF0n4xcG2Au%2FkfZOheM0iM4Ga1q18iM0H6DBuI8hBYwqT6PPhL9b%2BRPTOlfgOYKL0DcQr2b98X6E%2BFfIrlCBKHoM1x15v1PWZJGFwWt18mAh4D8wBkDyqSjwW28%2FgBZgJaTBpkYz9hQ8iyy44XjttiWpPM2rwYmj%2FV4Ceyek%2FnHKNuQds60AepWdLfP0GdU1BalVBOtC5ARIsxym3kHT1QSF6elbQSHX2bWK29HeJ6Y6rqc6nQSxNeSZpczlvQo44omYuIGkXqXwQ1KsINsQ0GzTqAEUGDgVTXgJsucHF6jmYEYYMuIYrlbDKg4QRsM%2FAvhm5T2bIng5gxNUPRWCyWQzZaSx2Dnsm9SdBlhoztuaoz9lf4zq7Xv0QXgvgvsG1zBy1HXCo3CTGu4UuPqBj5IqlEfWfAsCyoBjiYO1wjKCg3kAiVDBcgYSZ2wOjRqIIhhJ1bPfbimGeDpGLhdk6ZHdCYXG4WyeoBHsxoVbKWzt6jZ9EOoy5ZBZy%2Fd7JPjJ8I1nz7vqPffCUTkWu5ww0Y4iSE%2FoGFMJiq5sIGOqUBdi%2FFmJplQLEtGDOYqv6onL1REhjZOcyIDZIVKIyBwEXYuO0MInflKSypuhRb8Cy2gLwOQOfEX8yNteti5rb%2F3X2CSoCfywbrOyw8UhSxa%2F5tHjVbJvPFgTPCHsNSEHt46thv1hEr5Kp1HoPlA6qcAM%2BAtJ7bWhRK%2BD9b4PCJHKrDK4GJ4x2P1pTlCyC4uKstF1H045cZ0R7WQEvRo4F5RCLEpNyb&X-Amz-Signature=78ba0f0564b5c82cf0419b94a6de33a0d55e87d276b58767851f61f1223d4ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6IKKX5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC1oWQvSbzQCMBIdl798w5pXDypTxUHWHd5Z9FN6lRIxwIge%2BGsVBXNFG8X0V7m78PKb%2FAHoCxWARpQ6LU3ZrgEWj0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM5ntKBldYqatTXWwyrcA0HdMBdlgcemOHbSlZvVaCh2%2BNphDOXMBUlO9vpHdQJcJWzHGEKttW%2BjSGPWroKUpp0KfSivtmlUAnlRQnJKfLCLNtaI03OF0n4xcG2Au%2FkfZOheM0iM4Ga1q18iM0H6DBuI8hBYwqT6PPhL9b%2BRPTOlfgOYKL0DcQr2b98X6E%2BFfIrlCBKHoM1x15v1PWZJGFwWt18mAh4D8wBkDyqSjwW28%2FgBZgJaTBpkYz9hQ8iyy44XjttiWpPM2rwYmj%2FV4Ceyek%2FnHKNuQds60AepWdLfP0GdU1BalVBOtC5ARIsxym3kHT1QSF6elbQSHX2bWK29HeJ6Y6rqc6nQSxNeSZpczlvQo44omYuIGkXqXwQ1KsINsQ0GzTqAEUGDgVTXgJsucHF6jmYEYYMuIYrlbDKg4QRsM%2FAvhm5T2bIng5gxNUPRWCyWQzZaSx2Dnsm9SdBlhoztuaoz9lf4zq7Xv0QXgvgvsG1zBy1HXCo3CTGu4UuPqBj5IqlEfWfAsCyoBjiYO1wjKCg3kAiVDBcgYSZ2wOjRqIIhhJ1bPfbimGeDpGLhdk6ZHdCYXG4WyeoBHsxoVbKWzt6jZ9EOoy5ZBZy%2Fd7JPjJ8I1nz7vqPffCUTkWu5ww0Y4iSE%2FoGFMJiq5sIGOqUBdi%2FFmJplQLEtGDOYqv6onL1REhjZOcyIDZIVKIyBwEXYuO0MInflKSypuhRb8Cy2gLwOQOfEX8yNteti5rb%2F3X2CSoCfywbrOyw8UhSxa%2F5tHjVbJvPFgTPCHsNSEHt46thv1hEr5Kp1HoPlA6qcAM%2BAtJ7bWhRK%2BD9b4PCJHKrDK4GJ4x2P1pTlCyC4uKstF1H045cZ0R7WQEvRo4F5RCLEpNyb&X-Amz-Signature=7d144d526a8c1f46f9a9c520437b77a7002b09bd43acfafe03200b7d66869e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
