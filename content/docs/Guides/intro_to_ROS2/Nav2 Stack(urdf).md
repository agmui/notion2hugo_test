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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRA6B65%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwYMTpBb0kytbnUhuluh5KrzWupwfgIDOqudFVfapukAiEAof30XX%2FoXv%2FMAANUTFIZFXGSDUjXPfZVaaqyUxQh1v4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXJ%2BxcTw8f8X74vVCrcAzplALuo8n2pODW9pUyb6YEeDcGVh9PW0sD%2FaZZsxN%2F%2FZT2V7S2UGPrLJrJxpOJNsAUcJ%2BCBkoehA4WP%2Fbly%2BYTPW9W76uPZc6ZdpztEvAP39lhmDIwzaZCovXNgqk5IgH9lA0XhSgXRKqJBMV1Tf%2BldB7jDcPpYVX9CKAYAS%2B7lEuYKW4GSjfv0InQLcVeUquXG6DRniYn8XHS5ASqv3yN%2FW39Cb0BlX1OXfAdL%2FDi3eWfQqWAT8JW6g77AT2L3cy2LzCHuJtsuNSa35k5t3R1BEcqr4PjFPZfC90f35n2%2BFVgdo7uHAqXUS7d3OL5FWB8DiokR8q8AChPLwYzyPEMirxOk1bf3tnoZtLlCD%2BwIK2EYkJ%2Bws%2Fm9CMei47XAUA6bjFPExOhphYu1PfjhydAzNPRYiUidJlXmlLTWD6gpkEhwyyPUGFdO59TYplGVu3A0JBIclnO8SkmdtrGtGSqAYcO%2FOjwGC%2FNhKCoQbVrKBJb8L1NAfwQfIa7M%2FDf07AmtmQPT5dckBM3svGYxsfvhIEk%2FoAnngq737MbFxVqhOk4xAGLaAMR1bF0qJw70jWFZjXZe29raeCXOPV%2Frvi%2Bk8sXIQIbV9I7on5wzTJHdiGmTATXXtvAHZX%2BmMJu%2FoL0GOqUBzbEYFL7KtYraB6QtVGFIkwGvMsqfvSBBg%2BJ9JstkkdzYiT9SHZtDk90JZCtoP0gMeyuM9d6msx5F3SoYMZnxeV5MtCK%2FdcjkNBAJQWW2YzrgGv55IEem%2FQm3MRrNqd1PF7ZtUy2UeGxEU4kc8M5od0C0lqEsmlSfStIrw0Cafw0rl2Z0Rj64zd33%2FZyr9RqaZ93DQZyABbwExXMhnAhokc57YG2M&X-Amz-Signature=c3034e7a95dd931f3229589bd614b7f8a8a0e118370813249700a50b7f06f713&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRA6B65%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwYMTpBb0kytbnUhuluh5KrzWupwfgIDOqudFVfapukAiEAof30XX%2FoXv%2FMAANUTFIZFXGSDUjXPfZVaaqyUxQh1v4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXJ%2BxcTw8f8X74vVCrcAzplALuo8n2pODW9pUyb6YEeDcGVh9PW0sD%2FaZZsxN%2F%2FZT2V7S2UGPrLJrJxpOJNsAUcJ%2BCBkoehA4WP%2Fbly%2BYTPW9W76uPZc6ZdpztEvAP39lhmDIwzaZCovXNgqk5IgH9lA0XhSgXRKqJBMV1Tf%2BldB7jDcPpYVX9CKAYAS%2B7lEuYKW4GSjfv0InQLcVeUquXG6DRniYn8XHS5ASqv3yN%2FW39Cb0BlX1OXfAdL%2FDi3eWfQqWAT8JW6g77AT2L3cy2LzCHuJtsuNSa35k5t3R1BEcqr4PjFPZfC90f35n2%2BFVgdo7uHAqXUS7d3OL5FWB8DiokR8q8AChPLwYzyPEMirxOk1bf3tnoZtLlCD%2BwIK2EYkJ%2Bws%2Fm9CMei47XAUA6bjFPExOhphYu1PfjhydAzNPRYiUidJlXmlLTWD6gpkEhwyyPUGFdO59TYplGVu3A0JBIclnO8SkmdtrGtGSqAYcO%2FOjwGC%2FNhKCoQbVrKBJb8L1NAfwQfIa7M%2FDf07AmtmQPT5dckBM3svGYxsfvhIEk%2FoAnngq737MbFxVqhOk4xAGLaAMR1bF0qJw70jWFZjXZe29raeCXOPV%2Frvi%2Bk8sXIQIbV9I7on5wzTJHdiGmTATXXtvAHZX%2BmMJu%2FoL0GOqUBzbEYFL7KtYraB6QtVGFIkwGvMsqfvSBBg%2BJ9JstkkdzYiT9SHZtDk90JZCtoP0gMeyuM9d6msx5F3SoYMZnxeV5MtCK%2FdcjkNBAJQWW2YzrgGv55IEem%2FQm3MRrNqd1PF7ZtUy2UeGxEU4kc8M5od0C0lqEsmlSfStIrw0Cafw0rl2Z0Rj64zd33%2FZyr9RqaZ93DQZyABbwExXMhnAhokc57YG2M&X-Amz-Signature=089736e97af9f46a1ba99060fe46ae0cec5d068ab8108fbeeeb69812fd0e4e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRA6B65%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwYMTpBb0kytbnUhuluh5KrzWupwfgIDOqudFVfapukAiEAof30XX%2FoXv%2FMAANUTFIZFXGSDUjXPfZVaaqyUxQh1v4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXJ%2BxcTw8f8X74vVCrcAzplALuo8n2pODW9pUyb6YEeDcGVh9PW0sD%2FaZZsxN%2F%2FZT2V7S2UGPrLJrJxpOJNsAUcJ%2BCBkoehA4WP%2Fbly%2BYTPW9W76uPZc6ZdpztEvAP39lhmDIwzaZCovXNgqk5IgH9lA0XhSgXRKqJBMV1Tf%2BldB7jDcPpYVX9CKAYAS%2B7lEuYKW4GSjfv0InQLcVeUquXG6DRniYn8XHS5ASqv3yN%2FW39Cb0BlX1OXfAdL%2FDi3eWfQqWAT8JW6g77AT2L3cy2LzCHuJtsuNSa35k5t3R1BEcqr4PjFPZfC90f35n2%2BFVgdo7uHAqXUS7d3OL5FWB8DiokR8q8AChPLwYzyPEMirxOk1bf3tnoZtLlCD%2BwIK2EYkJ%2Bws%2Fm9CMei47XAUA6bjFPExOhphYu1PfjhydAzNPRYiUidJlXmlLTWD6gpkEhwyyPUGFdO59TYplGVu3A0JBIclnO8SkmdtrGtGSqAYcO%2FOjwGC%2FNhKCoQbVrKBJb8L1NAfwQfIa7M%2FDf07AmtmQPT5dckBM3svGYxsfvhIEk%2FoAnngq737MbFxVqhOk4xAGLaAMR1bF0qJw70jWFZjXZe29raeCXOPV%2Frvi%2Bk8sXIQIbV9I7on5wzTJHdiGmTATXXtvAHZX%2BmMJu%2FoL0GOqUBzbEYFL7KtYraB6QtVGFIkwGvMsqfvSBBg%2BJ9JstkkdzYiT9SHZtDk90JZCtoP0gMeyuM9d6msx5F3SoYMZnxeV5MtCK%2FdcjkNBAJQWW2YzrgGv55IEem%2FQm3MRrNqd1PF7ZtUy2UeGxEU4kc8M5od0C0lqEsmlSfStIrw0Cafw0rl2Z0Rj64zd33%2FZyr9RqaZ93DQZyABbwExXMhnAhokc57YG2M&X-Amz-Signature=a37391882283b16ab3bed90c339fa6769f59ee09dc7b4dc78aa73fc13df2727e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRA6B65%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwYMTpBb0kytbnUhuluh5KrzWupwfgIDOqudFVfapukAiEAof30XX%2FoXv%2FMAANUTFIZFXGSDUjXPfZVaaqyUxQh1v4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXJ%2BxcTw8f8X74vVCrcAzplALuo8n2pODW9pUyb6YEeDcGVh9PW0sD%2FaZZsxN%2F%2FZT2V7S2UGPrLJrJxpOJNsAUcJ%2BCBkoehA4WP%2Fbly%2BYTPW9W76uPZc6ZdpztEvAP39lhmDIwzaZCovXNgqk5IgH9lA0XhSgXRKqJBMV1Tf%2BldB7jDcPpYVX9CKAYAS%2B7lEuYKW4GSjfv0InQLcVeUquXG6DRniYn8XHS5ASqv3yN%2FW39Cb0BlX1OXfAdL%2FDi3eWfQqWAT8JW6g77AT2L3cy2LzCHuJtsuNSa35k5t3R1BEcqr4PjFPZfC90f35n2%2BFVgdo7uHAqXUS7d3OL5FWB8DiokR8q8AChPLwYzyPEMirxOk1bf3tnoZtLlCD%2BwIK2EYkJ%2Bws%2Fm9CMei47XAUA6bjFPExOhphYu1PfjhydAzNPRYiUidJlXmlLTWD6gpkEhwyyPUGFdO59TYplGVu3A0JBIclnO8SkmdtrGtGSqAYcO%2FOjwGC%2FNhKCoQbVrKBJb8L1NAfwQfIa7M%2FDf07AmtmQPT5dckBM3svGYxsfvhIEk%2FoAnngq737MbFxVqhOk4xAGLaAMR1bF0qJw70jWFZjXZe29raeCXOPV%2Frvi%2Bk8sXIQIbV9I7on5wzTJHdiGmTATXXtvAHZX%2BmMJu%2FoL0GOqUBzbEYFL7KtYraB6QtVGFIkwGvMsqfvSBBg%2BJ9JstkkdzYiT9SHZtDk90JZCtoP0gMeyuM9d6msx5F3SoYMZnxeV5MtCK%2FdcjkNBAJQWW2YzrgGv55IEem%2FQm3MRrNqd1PF7ZtUy2UeGxEU4kc8M5od0C0lqEsmlSfStIrw0Cafw0rl2Z0Rj64zd33%2FZyr9RqaZ93DQZyABbwExXMhnAhokc57YG2M&X-Amz-Signature=713b16767fdc24b89e93a7e1ea782ce0e3c3f8cd085576100579aa244912097c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRA6B65%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwYMTpBb0kytbnUhuluh5KrzWupwfgIDOqudFVfapukAiEAof30XX%2FoXv%2FMAANUTFIZFXGSDUjXPfZVaaqyUxQh1v4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXJ%2BxcTw8f8X74vVCrcAzplALuo8n2pODW9pUyb6YEeDcGVh9PW0sD%2FaZZsxN%2F%2FZT2V7S2UGPrLJrJxpOJNsAUcJ%2BCBkoehA4WP%2Fbly%2BYTPW9W76uPZc6ZdpztEvAP39lhmDIwzaZCovXNgqk5IgH9lA0XhSgXRKqJBMV1Tf%2BldB7jDcPpYVX9CKAYAS%2B7lEuYKW4GSjfv0InQLcVeUquXG6DRniYn8XHS5ASqv3yN%2FW39Cb0BlX1OXfAdL%2FDi3eWfQqWAT8JW6g77AT2L3cy2LzCHuJtsuNSa35k5t3R1BEcqr4PjFPZfC90f35n2%2BFVgdo7uHAqXUS7d3OL5FWB8DiokR8q8AChPLwYzyPEMirxOk1bf3tnoZtLlCD%2BwIK2EYkJ%2Bws%2Fm9CMei47XAUA6bjFPExOhphYu1PfjhydAzNPRYiUidJlXmlLTWD6gpkEhwyyPUGFdO59TYplGVu3A0JBIclnO8SkmdtrGtGSqAYcO%2FOjwGC%2FNhKCoQbVrKBJb8L1NAfwQfIa7M%2FDf07AmtmQPT5dckBM3svGYxsfvhIEk%2FoAnngq737MbFxVqhOk4xAGLaAMR1bF0qJw70jWFZjXZe29raeCXOPV%2Frvi%2Bk8sXIQIbV9I7on5wzTJHdiGmTATXXtvAHZX%2BmMJu%2FoL0GOqUBzbEYFL7KtYraB6QtVGFIkwGvMsqfvSBBg%2BJ9JstkkdzYiT9SHZtDk90JZCtoP0gMeyuM9d6msx5F3SoYMZnxeV5MtCK%2FdcjkNBAJQWW2YzrgGv55IEem%2FQm3MRrNqd1PF7ZtUy2UeGxEU4kc8M5od0C0lqEsmlSfStIrw0Cafw0rl2Z0Rj64zd33%2FZyr9RqaZ93DQZyABbwExXMhnAhokc57YG2M&X-Amz-Signature=db9ba1582eadaf35a5ac584a214578763b759d40ef8a5b4c7207c36c7fe3447c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRA6B65%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwYMTpBb0kytbnUhuluh5KrzWupwfgIDOqudFVfapukAiEAof30XX%2FoXv%2FMAANUTFIZFXGSDUjXPfZVaaqyUxQh1v4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXJ%2BxcTw8f8X74vVCrcAzplALuo8n2pODW9pUyb6YEeDcGVh9PW0sD%2FaZZsxN%2F%2FZT2V7S2UGPrLJrJxpOJNsAUcJ%2BCBkoehA4WP%2Fbly%2BYTPW9W76uPZc6ZdpztEvAP39lhmDIwzaZCovXNgqk5IgH9lA0XhSgXRKqJBMV1Tf%2BldB7jDcPpYVX9CKAYAS%2B7lEuYKW4GSjfv0InQLcVeUquXG6DRniYn8XHS5ASqv3yN%2FW39Cb0BlX1OXfAdL%2FDi3eWfQqWAT8JW6g77AT2L3cy2LzCHuJtsuNSa35k5t3R1BEcqr4PjFPZfC90f35n2%2BFVgdo7uHAqXUS7d3OL5FWB8DiokR8q8AChPLwYzyPEMirxOk1bf3tnoZtLlCD%2BwIK2EYkJ%2Bws%2Fm9CMei47XAUA6bjFPExOhphYu1PfjhydAzNPRYiUidJlXmlLTWD6gpkEhwyyPUGFdO59TYplGVu3A0JBIclnO8SkmdtrGtGSqAYcO%2FOjwGC%2FNhKCoQbVrKBJb8L1NAfwQfIa7M%2FDf07AmtmQPT5dckBM3svGYxsfvhIEk%2FoAnngq737MbFxVqhOk4xAGLaAMR1bF0qJw70jWFZjXZe29raeCXOPV%2Frvi%2Bk8sXIQIbV9I7on5wzTJHdiGmTATXXtvAHZX%2BmMJu%2FoL0GOqUBzbEYFL7KtYraB6QtVGFIkwGvMsqfvSBBg%2BJ9JstkkdzYiT9SHZtDk90JZCtoP0gMeyuM9d6msx5F3SoYMZnxeV5MtCK%2FdcjkNBAJQWW2YzrgGv55IEem%2FQm3MRrNqd1PF7ZtUy2UeGxEU4kc8M5od0C0lqEsmlSfStIrw0Cafw0rl2Z0Rj64zd33%2FZyr9RqaZ93DQZyABbwExXMhnAhokc57YG2M&X-Amz-Signature=629ffd405746018a123b16e961fa86c215185b36f4853565b1035299ca871818&X-Amz-SignedHeaders=host&x-id=GetObject)
