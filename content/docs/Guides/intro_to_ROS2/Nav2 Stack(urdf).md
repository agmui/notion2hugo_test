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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ53NKHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDPi3wbOdoXzW0hVbIjScjB3BQcRE5lTHGuIKgmvCEBVgIhALEps09lzUthXQkdb6BtnHnQjHYLpWKo90KphfIipzsNKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3WTSY2wMdiUx7BEq3AP08Q4wotcVSuqpoThwHoUG5FVUWo2pIVuoqGn4VqbEXXa%2FijTmV%2BQ6a59yd46w3f0Zqq6WRnT1NP1K8l%2FFQ%2FweGlcYuvPYD6v8TjHcXbRR1anWMQbnLAcQ1sQhir7yoVFQLusjZRev0W%2F34bKwVIPwYWtIGaJjSObv7%2Fax7ATi3myHmwcQEY1JXS4WJjOlJfzLx4Fe5DCUK1iQv%2FFJB6SZIEGpoM2QV%2FX%2FWYZLIsUuA29uG0s77p1kGjmNC1SAyqL6QCkuOuj3C76fghOW7rXfLamQ4YB6AJIH3Tfuikity9zed%2BzMf9qY0sjVXBbGFbwHYHRzSzC1skklKkc6qEEZVRXfgDj6N6JfTAId3pRBlWdhiG4I9mkebhyKZRgjJK9c%2FuN%2FdUT2zTqmAgz5MoACFJrDVuFRKBtixaBs2lWE9ZURFvIguaY7DlhTl6v%2FvAtbh7OQba3GQPHEhrUmUchc%2BrQV0377Ll%2FlCWMlDuGrCzCIjorpNrZ6a%2FyUnpLpc0s4ay25QzaXC4Eaofr0GtGCuZj3nUdnoQVB482OYPBJdbl2BRxPn1Qy5YlubjMAFFHhInadsmVE3AjYLxWQ7puAjyZ3rLyir%2FZH8mrmw3gxKhNo1X4M8mEZktAU9TCrr%2BLCBjqkAT1VI3JmfPWNJZUDytJCU3Y18%2FNw%2BVse7RWDYrcdocnecm%2BNZbbKiPZCIRGhA0rXKqtVmn8rfy5c%2FsC7upmjVQolOEI%2FMK4DCryNSObIbh4XT1xAdK3%2FIiI3XV%2F5HtL%2BaqtkSQpPvCW9HB9WdAUYVWBwl19U0%2BZ%2BMH7gyyCEKsd89Y1kajNykp0y3CLpjgN%2Btshxzmdxp5Pi9B24mugiwQ3Br1m2&X-Amz-Signature=b87dd0b24f3e390f0dfd5b659072bfb26a472709d9acfc5bc991cd1d8ada841d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ53NKHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDPi3wbOdoXzW0hVbIjScjB3BQcRE5lTHGuIKgmvCEBVgIhALEps09lzUthXQkdb6BtnHnQjHYLpWKo90KphfIipzsNKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3WTSY2wMdiUx7BEq3AP08Q4wotcVSuqpoThwHoUG5FVUWo2pIVuoqGn4VqbEXXa%2FijTmV%2BQ6a59yd46w3f0Zqq6WRnT1NP1K8l%2FFQ%2FweGlcYuvPYD6v8TjHcXbRR1anWMQbnLAcQ1sQhir7yoVFQLusjZRev0W%2F34bKwVIPwYWtIGaJjSObv7%2Fax7ATi3myHmwcQEY1JXS4WJjOlJfzLx4Fe5DCUK1iQv%2FFJB6SZIEGpoM2QV%2FX%2FWYZLIsUuA29uG0s77p1kGjmNC1SAyqL6QCkuOuj3C76fghOW7rXfLamQ4YB6AJIH3Tfuikity9zed%2BzMf9qY0sjVXBbGFbwHYHRzSzC1skklKkc6qEEZVRXfgDj6N6JfTAId3pRBlWdhiG4I9mkebhyKZRgjJK9c%2FuN%2FdUT2zTqmAgz5MoACFJrDVuFRKBtixaBs2lWE9ZURFvIguaY7DlhTl6v%2FvAtbh7OQba3GQPHEhrUmUchc%2BrQV0377Ll%2FlCWMlDuGrCzCIjorpNrZ6a%2FyUnpLpc0s4ay25QzaXC4Eaofr0GtGCuZj3nUdnoQVB482OYPBJdbl2BRxPn1Qy5YlubjMAFFHhInadsmVE3AjYLxWQ7puAjyZ3rLyir%2FZH8mrmw3gxKhNo1X4M8mEZktAU9TCrr%2BLCBjqkAT1VI3JmfPWNJZUDytJCU3Y18%2FNw%2BVse7RWDYrcdocnecm%2BNZbbKiPZCIRGhA0rXKqtVmn8rfy5c%2FsC7upmjVQolOEI%2FMK4DCryNSObIbh4XT1xAdK3%2FIiI3XV%2F5HtL%2BaqtkSQpPvCW9HB9WdAUYVWBwl19U0%2BZ%2BMH7gyyCEKsd89Y1kajNykp0y3CLpjgN%2Btshxzmdxp5Pi9B24mugiwQ3Br1m2&X-Amz-Signature=ba2d1f2dce477584cb80fbf13f99e685557c1f276672af369b96055977f4a93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ53NKHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDPi3wbOdoXzW0hVbIjScjB3BQcRE5lTHGuIKgmvCEBVgIhALEps09lzUthXQkdb6BtnHnQjHYLpWKo90KphfIipzsNKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3WTSY2wMdiUx7BEq3AP08Q4wotcVSuqpoThwHoUG5FVUWo2pIVuoqGn4VqbEXXa%2FijTmV%2BQ6a59yd46w3f0Zqq6WRnT1NP1K8l%2FFQ%2FweGlcYuvPYD6v8TjHcXbRR1anWMQbnLAcQ1sQhir7yoVFQLusjZRev0W%2F34bKwVIPwYWtIGaJjSObv7%2Fax7ATi3myHmwcQEY1JXS4WJjOlJfzLx4Fe5DCUK1iQv%2FFJB6SZIEGpoM2QV%2FX%2FWYZLIsUuA29uG0s77p1kGjmNC1SAyqL6QCkuOuj3C76fghOW7rXfLamQ4YB6AJIH3Tfuikity9zed%2BzMf9qY0sjVXBbGFbwHYHRzSzC1skklKkc6qEEZVRXfgDj6N6JfTAId3pRBlWdhiG4I9mkebhyKZRgjJK9c%2FuN%2FdUT2zTqmAgz5MoACFJrDVuFRKBtixaBs2lWE9ZURFvIguaY7DlhTl6v%2FvAtbh7OQba3GQPHEhrUmUchc%2BrQV0377Ll%2FlCWMlDuGrCzCIjorpNrZ6a%2FyUnpLpc0s4ay25QzaXC4Eaofr0GtGCuZj3nUdnoQVB482OYPBJdbl2BRxPn1Qy5YlubjMAFFHhInadsmVE3AjYLxWQ7puAjyZ3rLyir%2FZH8mrmw3gxKhNo1X4M8mEZktAU9TCrr%2BLCBjqkAT1VI3JmfPWNJZUDytJCU3Y18%2FNw%2BVse7RWDYrcdocnecm%2BNZbbKiPZCIRGhA0rXKqtVmn8rfy5c%2FsC7upmjVQolOEI%2FMK4DCryNSObIbh4XT1xAdK3%2FIiI3XV%2F5HtL%2BaqtkSQpPvCW9HB9WdAUYVWBwl19U0%2BZ%2BMH7gyyCEKsd89Y1kajNykp0y3CLpjgN%2Btshxzmdxp5Pi9B24mugiwQ3Br1m2&X-Amz-Signature=aa3c3cf423cfac2796dfbd0313a88303cee956f990430477b6d11d845c6c45cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ53NKHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDPi3wbOdoXzW0hVbIjScjB3BQcRE5lTHGuIKgmvCEBVgIhALEps09lzUthXQkdb6BtnHnQjHYLpWKo90KphfIipzsNKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3WTSY2wMdiUx7BEq3AP08Q4wotcVSuqpoThwHoUG5FVUWo2pIVuoqGn4VqbEXXa%2FijTmV%2BQ6a59yd46w3f0Zqq6WRnT1NP1K8l%2FFQ%2FweGlcYuvPYD6v8TjHcXbRR1anWMQbnLAcQ1sQhir7yoVFQLusjZRev0W%2F34bKwVIPwYWtIGaJjSObv7%2Fax7ATi3myHmwcQEY1JXS4WJjOlJfzLx4Fe5DCUK1iQv%2FFJB6SZIEGpoM2QV%2FX%2FWYZLIsUuA29uG0s77p1kGjmNC1SAyqL6QCkuOuj3C76fghOW7rXfLamQ4YB6AJIH3Tfuikity9zed%2BzMf9qY0sjVXBbGFbwHYHRzSzC1skklKkc6qEEZVRXfgDj6N6JfTAId3pRBlWdhiG4I9mkebhyKZRgjJK9c%2FuN%2FdUT2zTqmAgz5MoACFJrDVuFRKBtixaBs2lWE9ZURFvIguaY7DlhTl6v%2FvAtbh7OQba3GQPHEhrUmUchc%2BrQV0377Ll%2FlCWMlDuGrCzCIjorpNrZ6a%2FyUnpLpc0s4ay25QzaXC4Eaofr0GtGCuZj3nUdnoQVB482OYPBJdbl2BRxPn1Qy5YlubjMAFFHhInadsmVE3AjYLxWQ7puAjyZ3rLyir%2FZH8mrmw3gxKhNo1X4M8mEZktAU9TCrr%2BLCBjqkAT1VI3JmfPWNJZUDytJCU3Y18%2FNw%2BVse7RWDYrcdocnecm%2BNZbbKiPZCIRGhA0rXKqtVmn8rfy5c%2FsC7upmjVQolOEI%2FMK4DCryNSObIbh4XT1xAdK3%2FIiI3XV%2F5HtL%2BaqtkSQpPvCW9HB9WdAUYVWBwl19U0%2BZ%2BMH7gyyCEKsd89Y1kajNykp0y3CLpjgN%2Btshxzmdxp5Pi9B24mugiwQ3Br1m2&X-Amz-Signature=9dcacf2b79745af5d067ece5722afb060c75cdbc917c96244a0f3654da62b725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ53NKHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDPi3wbOdoXzW0hVbIjScjB3BQcRE5lTHGuIKgmvCEBVgIhALEps09lzUthXQkdb6BtnHnQjHYLpWKo90KphfIipzsNKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3WTSY2wMdiUx7BEq3AP08Q4wotcVSuqpoThwHoUG5FVUWo2pIVuoqGn4VqbEXXa%2FijTmV%2BQ6a59yd46w3f0Zqq6WRnT1NP1K8l%2FFQ%2FweGlcYuvPYD6v8TjHcXbRR1anWMQbnLAcQ1sQhir7yoVFQLusjZRev0W%2F34bKwVIPwYWtIGaJjSObv7%2Fax7ATi3myHmwcQEY1JXS4WJjOlJfzLx4Fe5DCUK1iQv%2FFJB6SZIEGpoM2QV%2FX%2FWYZLIsUuA29uG0s77p1kGjmNC1SAyqL6QCkuOuj3C76fghOW7rXfLamQ4YB6AJIH3Tfuikity9zed%2BzMf9qY0sjVXBbGFbwHYHRzSzC1skklKkc6qEEZVRXfgDj6N6JfTAId3pRBlWdhiG4I9mkebhyKZRgjJK9c%2FuN%2FdUT2zTqmAgz5MoACFJrDVuFRKBtixaBs2lWE9ZURFvIguaY7DlhTl6v%2FvAtbh7OQba3GQPHEhrUmUchc%2BrQV0377Ll%2FlCWMlDuGrCzCIjorpNrZ6a%2FyUnpLpc0s4ay25QzaXC4Eaofr0GtGCuZj3nUdnoQVB482OYPBJdbl2BRxPn1Qy5YlubjMAFFHhInadsmVE3AjYLxWQ7puAjyZ3rLyir%2FZH8mrmw3gxKhNo1X4M8mEZktAU9TCrr%2BLCBjqkAT1VI3JmfPWNJZUDytJCU3Y18%2FNw%2BVse7RWDYrcdocnecm%2BNZbbKiPZCIRGhA0rXKqtVmn8rfy5c%2FsC7upmjVQolOEI%2FMK4DCryNSObIbh4XT1xAdK3%2FIiI3XV%2F5HtL%2BaqtkSQpPvCW9HB9WdAUYVWBwl19U0%2BZ%2BMH7gyyCEKsd89Y1kajNykp0y3CLpjgN%2Btshxzmdxp5Pi9B24mugiwQ3Br1m2&X-Amz-Signature=b7be4f721bfa7df5062a055829dfe469de2c7f4f71c2e6e4c8b2835c6f62aa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ53NKHN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDPi3wbOdoXzW0hVbIjScjB3BQcRE5lTHGuIKgmvCEBVgIhALEps09lzUthXQkdb6BtnHnQjHYLpWKo90KphfIipzsNKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3WTSY2wMdiUx7BEq3AP08Q4wotcVSuqpoThwHoUG5FVUWo2pIVuoqGn4VqbEXXa%2FijTmV%2BQ6a59yd46w3f0Zqq6WRnT1NP1K8l%2FFQ%2FweGlcYuvPYD6v8TjHcXbRR1anWMQbnLAcQ1sQhir7yoVFQLusjZRev0W%2F34bKwVIPwYWtIGaJjSObv7%2Fax7ATi3myHmwcQEY1JXS4WJjOlJfzLx4Fe5DCUK1iQv%2FFJB6SZIEGpoM2QV%2FX%2FWYZLIsUuA29uG0s77p1kGjmNC1SAyqL6QCkuOuj3C76fghOW7rXfLamQ4YB6AJIH3Tfuikity9zed%2BzMf9qY0sjVXBbGFbwHYHRzSzC1skklKkc6qEEZVRXfgDj6N6JfTAId3pRBlWdhiG4I9mkebhyKZRgjJK9c%2FuN%2FdUT2zTqmAgz5MoACFJrDVuFRKBtixaBs2lWE9ZURFvIguaY7DlhTl6v%2FvAtbh7OQba3GQPHEhrUmUchc%2BrQV0377Ll%2FlCWMlDuGrCzCIjorpNrZ6a%2FyUnpLpc0s4ay25QzaXC4Eaofr0GtGCuZj3nUdnoQVB482OYPBJdbl2BRxPn1Qy5YlubjMAFFHhInadsmVE3AjYLxWQ7puAjyZ3rLyir%2FZH8mrmw3gxKhNo1X4M8mEZktAU9TCrr%2BLCBjqkAT1VI3JmfPWNJZUDytJCU3Y18%2FNw%2BVse7RWDYrcdocnecm%2BNZbbKiPZCIRGhA0rXKqtVmn8rfy5c%2FsC7upmjVQolOEI%2FMK4DCryNSObIbh4XT1xAdK3%2FIiI3XV%2F5HtL%2BaqtkSQpPvCW9HB9WdAUYVWBwl19U0%2BZ%2BMH7gyyCEKsd89Y1kajNykp0y3CLpjgN%2Btshxzmdxp5Pi9B24mugiwQ3Br1m2&X-Amz-Signature=ded0c818467156fb5bd0c6af737d30e0c5cb569445254ab93e1449dc0e7d5c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
