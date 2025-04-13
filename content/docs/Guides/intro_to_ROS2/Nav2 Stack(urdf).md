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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BGKRTO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD5eNfO9JaA3%2Bh7kWGV9Vp49EZ%2BGeTqPSpr4Nn3SKQ8UwIhAKUeJCzzqyUr5QxDLCBacElyL1Y4x5l70ljFaAo%2BEl%2FuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B8yfMeeluYk90FEoq3ANSgxdWdSKcA115MEIeWAWDom83v4r6fmhty64NZIOrMIbdoJ1Q3dbvoQzPHg%2B8VZrYfFp8QXDhR0XERa9X4ZV%2FN%2FA9TcCrH9LEIMx0EEJzFSIwFO53Lug3ZObBs28D5E0MB9Ja6CHLskrMOm1bdzvCTkCcI37EBukfiwZI5qM0UxgfD7kkV1XGvHWbLyGm%2FWuUOt2EGkjTlSGPvSGn1Rm4P6UuYytrZsa%2BJ%2FO82KwDhtdssH2s92ChXecThlBdEjIjRovXry3nQ3aFzKNCRhIi9iqWmUALO8n8xAjlwvedw0sPYvgBvu2uAkfq4VH3tV2BRi%2B2Qumq7Wulowg%2BezVtn2zkt8VgZq%2Fy3rfFifLth6eqExNSP0Mv7nAfTdcgsalTO6eh%2Bw5%2B3FZsnLoCbGobFb7gAJ17bnrgdpS5h6Ka5aApYGl5znA5gcbmYErhBB0m%2Bgn9aOxiO3fzHAHw27pQRqxBvJIHXD6Tv9u3E9HOYwTzneDtDBKqrOxDr7%2Bf9SfA2PK9h4aUmyQGrmMFkgnKR%2BPinLNfM3OMXuOv%2BdUgYcc7vOz15OhdApUFDqsE6Yj0nAVk4O5loB2MRPio3mERMul8wWNNmDG07OcvPDTikYFzDWgyZOrREOeTBTDI4u%2B%2FBjqkAZyFr2rUWtC93ao66v6vOt7w9utzcqvMSA7TL89NkP0Bhoc%2Fa%2F%2FVuCJMcyuC0MU0WYwW6QdUY4BUHRx5rdYxnDoK5XscsQW%2BEnJ8ny3csLXI6%2BJONyCEleK%2B%2B58guje916%2BLrS6IQktJ4Nqzz%2BLi0W5b6r04S9sk38LU4fsVrqCA%2FQdH%2F39XLGYqiqu2ZqVVaQ3ZBS9vG4JUwKl98PM6S82VSjdp&X-Amz-Signature=42ddd56ac3fdac550a768c279c91afc848f9a102ee5721d00a2b8638b33a0896&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BGKRTO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD5eNfO9JaA3%2Bh7kWGV9Vp49EZ%2BGeTqPSpr4Nn3SKQ8UwIhAKUeJCzzqyUr5QxDLCBacElyL1Y4x5l70ljFaAo%2BEl%2FuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B8yfMeeluYk90FEoq3ANSgxdWdSKcA115MEIeWAWDom83v4r6fmhty64NZIOrMIbdoJ1Q3dbvoQzPHg%2B8VZrYfFp8QXDhR0XERa9X4ZV%2FN%2FA9TcCrH9LEIMx0EEJzFSIwFO53Lug3ZObBs28D5E0MB9Ja6CHLskrMOm1bdzvCTkCcI37EBukfiwZI5qM0UxgfD7kkV1XGvHWbLyGm%2FWuUOt2EGkjTlSGPvSGn1Rm4P6UuYytrZsa%2BJ%2FO82KwDhtdssH2s92ChXecThlBdEjIjRovXry3nQ3aFzKNCRhIi9iqWmUALO8n8xAjlwvedw0sPYvgBvu2uAkfq4VH3tV2BRi%2B2Qumq7Wulowg%2BezVtn2zkt8VgZq%2Fy3rfFifLth6eqExNSP0Mv7nAfTdcgsalTO6eh%2Bw5%2B3FZsnLoCbGobFb7gAJ17bnrgdpS5h6Ka5aApYGl5znA5gcbmYErhBB0m%2Bgn9aOxiO3fzHAHw27pQRqxBvJIHXD6Tv9u3E9HOYwTzneDtDBKqrOxDr7%2Bf9SfA2PK9h4aUmyQGrmMFkgnKR%2BPinLNfM3OMXuOv%2BdUgYcc7vOz15OhdApUFDqsE6Yj0nAVk4O5loB2MRPio3mERMul8wWNNmDG07OcvPDTikYFzDWgyZOrREOeTBTDI4u%2B%2FBjqkAZyFr2rUWtC93ao66v6vOt7w9utzcqvMSA7TL89NkP0Bhoc%2Fa%2F%2FVuCJMcyuC0MU0WYwW6QdUY4BUHRx5rdYxnDoK5XscsQW%2BEnJ8ny3csLXI6%2BJONyCEleK%2B%2B58guje916%2BLrS6IQktJ4Nqzz%2BLi0W5b6r04S9sk38LU4fsVrqCA%2FQdH%2F39XLGYqiqu2ZqVVaQ3ZBS9vG4JUwKl98PM6S82VSjdp&X-Amz-Signature=4e810c804756a9386591d77acfb221cc87d54aa7519414e912d8416880be4fab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BGKRTO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD5eNfO9JaA3%2Bh7kWGV9Vp49EZ%2BGeTqPSpr4Nn3SKQ8UwIhAKUeJCzzqyUr5QxDLCBacElyL1Y4x5l70ljFaAo%2BEl%2FuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B8yfMeeluYk90FEoq3ANSgxdWdSKcA115MEIeWAWDom83v4r6fmhty64NZIOrMIbdoJ1Q3dbvoQzPHg%2B8VZrYfFp8QXDhR0XERa9X4ZV%2FN%2FA9TcCrH9LEIMx0EEJzFSIwFO53Lug3ZObBs28D5E0MB9Ja6CHLskrMOm1bdzvCTkCcI37EBukfiwZI5qM0UxgfD7kkV1XGvHWbLyGm%2FWuUOt2EGkjTlSGPvSGn1Rm4P6UuYytrZsa%2BJ%2FO82KwDhtdssH2s92ChXecThlBdEjIjRovXry3nQ3aFzKNCRhIi9iqWmUALO8n8xAjlwvedw0sPYvgBvu2uAkfq4VH3tV2BRi%2B2Qumq7Wulowg%2BezVtn2zkt8VgZq%2Fy3rfFifLth6eqExNSP0Mv7nAfTdcgsalTO6eh%2Bw5%2B3FZsnLoCbGobFb7gAJ17bnrgdpS5h6Ka5aApYGl5znA5gcbmYErhBB0m%2Bgn9aOxiO3fzHAHw27pQRqxBvJIHXD6Tv9u3E9HOYwTzneDtDBKqrOxDr7%2Bf9SfA2PK9h4aUmyQGrmMFkgnKR%2BPinLNfM3OMXuOv%2BdUgYcc7vOz15OhdApUFDqsE6Yj0nAVk4O5loB2MRPio3mERMul8wWNNmDG07OcvPDTikYFzDWgyZOrREOeTBTDI4u%2B%2FBjqkAZyFr2rUWtC93ao66v6vOt7w9utzcqvMSA7TL89NkP0Bhoc%2Fa%2F%2FVuCJMcyuC0MU0WYwW6QdUY4BUHRx5rdYxnDoK5XscsQW%2BEnJ8ny3csLXI6%2BJONyCEleK%2B%2B58guje916%2BLrS6IQktJ4Nqzz%2BLi0W5b6r04S9sk38LU4fsVrqCA%2FQdH%2F39XLGYqiqu2ZqVVaQ3ZBS9vG4JUwKl98PM6S82VSjdp&X-Amz-Signature=500593f9c6df8b1f18524de7226801d93bdd215989c34e0df238000f362ced06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BGKRTO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD5eNfO9JaA3%2Bh7kWGV9Vp49EZ%2BGeTqPSpr4Nn3SKQ8UwIhAKUeJCzzqyUr5QxDLCBacElyL1Y4x5l70ljFaAo%2BEl%2FuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B8yfMeeluYk90FEoq3ANSgxdWdSKcA115MEIeWAWDom83v4r6fmhty64NZIOrMIbdoJ1Q3dbvoQzPHg%2B8VZrYfFp8QXDhR0XERa9X4ZV%2FN%2FA9TcCrH9LEIMx0EEJzFSIwFO53Lug3ZObBs28D5E0MB9Ja6CHLskrMOm1bdzvCTkCcI37EBukfiwZI5qM0UxgfD7kkV1XGvHWbLyGm%2FWuUOt2EGkjTlSGPvSGn1Rm4P6UuYytrZsa%2BJ%2FO82KwDhtdssH2s92ChXecThlBdEjIjRovXry3nQ3aFzKNCRhIi9iqWmUALO8n8xAjlwvedw0sPYvgBvu2uAkfq4VH3tV2BRi%2B2Qumq7Wulowg%2BezVtn2zkt8VgZq%2Fy3rfFifLth6eqExNSP0Mv7nAfTdcgsalTO6eh%2Bw5%2B3FZsnLoCbGobFb7gAJ17bnrgdpS5h6Ka5aApYGl5znA5gcbmYErhBB0m%2Bgn9aOxiO3fzHAHw27pQRqxBvJIHXD6Tv9u3E9HOYwTzneDtDBKqrOxDr7%2Bf9SfA2PK9h4aUmyQGrmMFkgnKR%2BPinLNfM3OMXuOv%2BdUgYcc7vOz15OhdApUFDqsE6Yj0nAVk4O5loB2MRPio3mERMul8wWNNmDG07OcvPDTikYFzDWgyZOrREOeTBTDI4u%2B%2FBjqkAZyFr2rUWtC93ao66v6vOt7w9utzcqvMSA7TL89NkP0Bhoc%2Fa%2F%2FVuCJMcyuC0MU0WYwW6QdUY4BUHRx5rdYxnDoK5XscsQW%2BEnJ8ny3csLXI6%2BJONyCEleK%2B%2B58guje916%2BLrS6IQktJ4Nqzz%2BLi0W5b6r04S9sk38LU4fsVrqCA%2FQdH%2F39XLGYqiqu2ZqVVaQ3ZBS9vG4JUwKl98PM6S82VSjdp&X-Amz-Signature=3b98bbb4bceca8e5f639051a1e0f01d4fb9758c31b3f6faa990e64992d1df1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BGKRTO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD5eNfO9JaA3%2Bh7kWGV9Vp49EZ%2BGeTqPSpr4Nn3SKQ8UwIhAKUeJCzzqyUr5QxDLCBacElyL1Y4x5l70ljFaAo%2BEl%2FuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B8yfMeeluYk90FEoq3ANSgxdWdSKcA115MEIeWAWDom83v4r6fmhty64NZIOrMIbdoJ1Q3dbvoQzPHg%2B8VZrYfFp8QXDhR0XERa9X4ZV%2FN%2FA9TcCrH9LEIMx0EEJzFSIwFO53Lug3ZObBs28D5E0MB9Ja6CHLskrMOm1bdzvCTkCcI37EBukfiwZI5qM0UxgfD7kkV1XGvHWbLyGm%2FWuUOt2EGkjTlSGPvSGn1Rm4P6UuYytrZsa%2BJ%2FO82KwDhtdssH2s92ChXecThlBdEjIjRovXry3nQ3aFzKNCRhIi9iqWmUALO8n8xAjlwvedw0sPYvgBvu2uAkfq4VH3tV2BRi%2B2Qumq7Wulowg%2BezVtn2zkt8VgZq%2Fy3rfFifLth6eqExNSP0Mv7nAfTdcgsalTO6eh%2Bw5%2B3FZsnLoCbGobFb7gAJ17bnrgdpS5h6Ka5aApYGl5znA5gcbmYErhBB0m%2Bgn9aOxiO3fzHAHw27pQRqxBvJIHXD6Tv9u3E9HOYwTzneDtDBKqrOxDr7%2Bf9SfA2PK9h4aUmyQGrmMFkgnKR%2BPinLNfM3OMXuOv%2BdUgYcc7vOz15OhdApUFDqsE6Yj0nAVk4O5loB2MRPio3mERMul8wWNNmDG07OcvPDTikYFzDWgyZOrREOeTBTDI4u%2B%2FBjqkAZyFr2rUWtC93ao66v6vOt7w9utzcqvMSA7TL89NkP0Bhoc%2Fa%2F%2FVuCJMcyuC0MU0WYwW6QdUY4BUHRx5rdYxnDoK5XscsQW%2BEnJ8ny3csLXI6%2BJONyCEleK%2B%2B58guje916%2BLrS6IQktJ4Nqzz%2BLi0W5b6r04S9sk38LU4fsVrqCA%2FQdH%2F39XLGYqiqu2ZqVVaQ3ZBS9vG4JUwKl98PM6S82VSjdp&X-Amz-Signature=fc9db4cf52e954c97ce4506b84f852cc9a56b94d5e7725f8db8624f20a69d536&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BGKRTO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD5eNfO9JaA3%2Bh7kWGV9Vp49EZ%2BGeTqPSpr4Nn3SKQ8UwIhAKUeJCzzqyUr5QxDLCBacElyL1Y4x5l70ljFaAo%2BEl%2FuKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B8yfMeeluYk90FEoq3ANSgxdWdSKcA115MEIeWAWDom83v4r6fmhty64NZIOrMIbdoJ1Q3dbvoQzPHg%2B8VZrYfFp8QXDhR0XERa9X4ZV%2FN%2FA9TcCrH9LEIMx0EEJzFSIwFO53Lug3ZObBs28D5E0MB9Ja6CHLskrMOm1bdzvCTkCcI37EBukfiwZI5qM0UxgfD7kkV1XGvHWbLyGm%2FWuUOt2EGkjTlSGPvSGn1Rm4P6UuYytrZsa%2BJ%2FO82KwDhtdssH2s92ChXecThlBdEjIjRovXry3nQ3aFzKNCRhIi9iqWmUALO8n8xAjlwvedw0sPYvgBvu2uAkfq4VH3tV2BRi%2B2Qumq7Wulowg%2BezVtn2zkt8VgZq%2Fy3rfFifLth6eqExNSP0Mv7nAfTdcgsalTO6eh%2Bw5%2B3FZsnLoCbGobFb7gAJ17bnrgdpS5h6Ka5aApYGl5znA5gcbmYErhBB0m%2Bgn9aOxiO3fzHAHw27pQRqxBvJIHXD6Tv9u3E9HOYwTzneDtDBKqrOxDr7%2Bf9SfA2PK9h4aUmyQGrmMFkgnKR%2BPinLNfM3OMXuOv%2BdUgYcc7vOz15OhdApUFDqsE6Yj0nAVk4O5loB2MRPio3mERMul8wWNNmDG07OcvPDTikYFzDWgyZOrREOeTBTDI4u%2B%2FBjqkAZyFr2rUWtC93ao66v6vOt7w9utzcqvMSA7TL89NkP0Bhoc%2Fa%2F%2FVuCJMcyuC0MU0WYwW6QdUY4BUHRx5rdYxnDoK5XscsQW%2BEnJ8ny3csLXI6%2BJONyCEleK%2B%2B58guje916%2BLrS6IQktJ4Nqzz%2BLi0W5b6r04S9sk38LU4fsVrqCA%2FQdH%2F39XLGYqiqu2ZqVVaQ3ZBS9vG4JUwKl98PM6S82VSjdp&X-Amz-Signature=b6d96241b6bb42b5afd84801428bd8b8986b8800b52d78df407ff069c255e774&X-Amz-SignedHeaders=host&x-id=GetObject)
