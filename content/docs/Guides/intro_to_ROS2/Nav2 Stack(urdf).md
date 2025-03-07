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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XUG7JF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3BOfQ9kRh%2BoeFlqc9jBdjodr%2FjZxSTdW9F1vLM0KoAIhAJtTjdF%2B84Nk%2Fmm%2B7YMISToUDyjlkGwAHMvB1vRVbvpMKv8DCEMQABoMNjM3NDIzMTgzODA1Igy011jh4%2BPmkwWjsRMq3AMrzKTamGF7Iiiq0d4NKN1rrsbiuTPaNpBUJFa5Ivfzhez1gZ9zAeN7kIW3f%2FhZAgo3j330LBbkHt8vOC8v1tqyXSmybHbHaZi%2BRl7TBQ3jVGCVniKbrVj3HY6F%2BhbAm5VrVU5KJHcP5guQzlKhvJqITKHBRdVTEVKn5H9%2BHrtGPZHdBJT6e5Amq3wEJGAl8B%2Fp3LVbMA5N17MK2g10JQLRurEsIqkw0QgNhtbdPDtxgxaXmJeGgQ7f1WMW4N8sS3tjfq1fk6c%2FN%2BUWuvlNrCadF1jiK1h8ItVH19a%2BuBiPd0LxjIdMlGVe9oCVZHRP%2F2deqd8lGnQfMr2fj5eMrVXmuMqTAgZV%2BqOUpgn0DFrcJNdHg71sqXbiv9Vc0RziUrCNPZMQvqxN8jmzZFjk%2BzYuKcGhIMarjftffTucDNdInzX6I2vUVN7OuCl6f0mHH5AGZaA%2F%2F1pn1sX40Vlu3NWnlqf0bU5ILPcyj1o6O1Q1mrT%2FVX1wcIMVQbK4daCQyMyDGs9aGxNrv7921bRsj3c4IUQqLHQu3QIJyOV3Pv9H9nIuhEi7Uqt1aT1IfEDYVuxhj9jZ%2B0vyLZGxpu22qXMV%2Bcm3z4wpkBn3Q9Im7dQVyKnFNG9nKn4NDdBXbDDah6u%2BBjqkAf7AXzfPsGp6Z9YF85LiYKUu%2Bp9k8lga4r0ypDJf0ZA%2BuBJIt625rjh4SOfVZ8zMC7TlMUMHhfYClFDYvrBQvv3Mn4cq%2Bw0ZBZglX0Lqclm%2FXjp9Cqafx%2Ftd%2Bs7EPwBCJ6PQwB68pxz9NMGPsPV4u9EDF%2FWnhodp%2F3ywE%2BKepc67Z4fEVNgj1JhR2PY1BTopU%2Bf8CQTsLMYcZh%2ByzVkJCvBvygTz&X-Amz-Signature=859bf33b3e315b770a4380f40dcf5ee1c05731542f3b0a50baed3bede19d363c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XUG7JF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3BOfQ9kRh%2BoeFlqc9jBdjodr%2FjZxSTdW9F1vLM0KoAIhAJtTjdF%2B84Nk%2Fmm%2B7YMISToUDyjlkGwAHMvB1vRVbvpMKv8DCEMQABoMNjM3NDIzMTgzODA1Igy011jh4%2BPmkwWjsRMq3AMrzKTamGF7Iiiq0d4NKN1rrsbiuTPaNpBUJFa5Ivfzhez1gZ9zAeN7kIW3f%2FhZAgo3j330LBbkHt8vOC8v1tqyXSmybHbHaZi%2BRl7TBQ3jVGCVniKbrVj3HY6F%2BhbAm5VrVU5KJHcP5guQzlKhvJqITKHBRdVTEVKn5H9%2BHrtGPZHdBJT6e5Amq3wEJGAl8B%2Fp3LVbMA5N17MK2g10JQLRurEsIqkw0QgNhtbdPDtxgxaXmJeGgQ7f1WMW4N8sS3tjfq1fk6c%2FN%2BUWuvlNrCadF1jiK1h8ItVH19a%2BuBiPd0LxjIdMlGVe9oCVZHRP%2F2deqd8lGnQfMr2fj5eMrVXmuMqTAgZV%2BqOUpgn0DFrcJNdHg71sqXbiv9Vc0RziUrCNPZMQvqxN8jmzZFjk%2BzYuKcGhIMarjftffTucDNdInzX6I2vUVN7OuCl6f0mHH5AGZaA%2F%2F1pn1sX40Vlu3NWnlqf0bU5ILPcyj1o6O1Q1mrT%2FVX1wcIMVQbK4daCQyMyDGs9aGxNrv7921bRsj3c4IUQqLHQu3QIJyOV3Pv9H9nIuhEi7Uqt1aT1IfEDYVuxhj9jZ%2B0vyLZGxpu22qXMV%2Bcm3z4wpkBn3Q9Im7dQVyKnFNG9nKn4NDdBXbDDah6u%2BBjqkAf7AXzfPsGp6Z9YF85LiYKUu%2Bp9k8lga4r0ypDJf0ZA%2BuBJIt625rjh4SOfVZ8zMC7TlMUMHhfYClFDYvrBQvv3Mn4cq%2Bw0ZBZglX0Lqclm%2FXjp9Cqafx%2Ftd%2Bs7EPwBCJ6PQwB68pxz9NMGPsPV4u9EDF%2FWnhodp%2F3ywE%2BKepc67Z4fEVNgj1JhR2PY1BTopU%2Bf8CQTsLMYcZh%2ByzVkJCvBvygTz&X-Amz-Signature=e8e12359d0c77217ee05319a51dfec8b2dbb1d9477b08f074da9376a5844a4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XUG7JF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3BOfQ9kRh%2BoeFlqc9jBdjodr%2FjZxSTdW9F1vLM0KoAIhAJtTjdF%2B84Nk%2Fmm%2B7YMISToUDyjlkGwAHMvB1vRVbvpMKv8DCEMQABoMNjM3NDIzMTgzODA1Igy011jh4%2BPmkwWjsRMq3AMrzKTamGF7Iiiq0d4NKN1rrsbiuTPaNpBUJFa5Ivfzhez1gZ9zAeN7kIW3f%2FhZAgo3j330LBbkHt8vOC8v1tqyXSmybHbHaZi%2BRl7TBQ3jVGCVniKbrVj3HY6F%2BhbAm5VrVU5KJHcP5guQzlKhvJqITKHBRdVTEVKn5H9%2BHrtGPZHdBJT6e5Amq3wEJGAl8B%2Fp3LVbMA5N17MK2g10JQLRurEsIqkw0QgNhtbdPDtxgxaXmJeGgQ7f1WMW4N8sS3tjfq1fk6c%2FN%2BUWuvlNrCadF1jiK1h8ItVH19a%2BuBiPd0LxjIdMlGVe9oCVZHRP%2F2deqd8lGnQfMr2fj5eMrVXmuMqTAgZV%2BqOUpgn0DFrcJNdHg71sqXbiv9Vc0RziUrCNPZMQvqxN8jmzZFjk%2BzYuKcGhIMarjftffTucDNdInzX6I2vUVN7OuCl6f0mHH5AGZaA%2F%2F1pn1sX40Vlu3NWnlqf0bU5ILPcyj1o6O1Q1mrT%2FVX1wcIMVQbK4daCQyMyDGs9aGxNrv7921bRsj3c4IUQqLHQu3QIJyOV3Pv9H9nIuhEi7Uqt1aT1IfEDYVuxhj9jZ%2B0vyLZGxpu22qXMV%2Bcm3z4wpkBn3Q9Im7dQVyKnFNG9nKn4NDdBXbDDah6u%2BBjqkAf7AXzfPsGp6Z9YF85LiYKUu%2Bp9k8lga4r0ypDJf0ZA%2BuBJIt625rjh4SOfVZ8zMC7TlMUMHhfYClFDYvrBQvv3Mn4cq%2Bw0ZBZglX0Lqclm%2FXjp9Cqafx%2Ftd%2Bs7EPwBCJ6PQwB68pxz9NMGPsPV4u9EDF%2FWnhodp%2F3ywE%2BKepc67Z4fEVNgj1JhR2PY1BTopU%2Bf8CQTsLMYcZh%2ByzVkJCvBvygTz&X-Amz-Signature=97646c04f096118e37407f8ddfce36e330dc03beb9d8050af49c2b953b694c51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XUG7JF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3BOfQ9kRh%2BoeFlqc9jBdjodr%2FjZxSTdW9F1vLM0KoAIhAJtTjdF%2B84Nk%2Fmm%2B7YMISToUDyjlkGwAHMvB1vRVbvpMKv8DCEMQABoMNjM3NDIzMTgzODA1Igy011jh4%2BPmkwWjsRMq3AMrzKTamGF7Iiiq0d4NKN1rrsbiuTPaNpBUJFa5Ivfzhez1gZ9zAeN7kIW3f%2FhZAgo3j330LBbkHt8vOC8v1tqyXSmybHbHaZi%2BRl7TBQ3jVGCVniKbrVj3HY6F%2BhbAm5VrVU5KJHcP5guQzlKhvJqITKHBRdVTEVKn5H9%2BHrtGPZHdBJT6e5Amq3wEJGAl8B%2Fp3LVbMA5N17MK2g10JQLRurEsIqkw0QgNhtbdPDtxgxaXmJeGgQ7f1WMW4N8sS3tjfq1fk6c%2FN%2BUWuvlNrCadF1jiK1h8ItVH19a%2BuBiPd0LxjIdMlGVe9oCVZHRP%2F2deqd8lGnQfMr2fj5eMrVXmuMqTAgZV%2BqOUpgn0DFrcJNdHg71sqXbiv9Vc0RziUrCNPZMQvqxN8jmzZFjk%2BzYuKcGhIMarjftffTucDNdInzX6I2vUVN7OuCl6f0mHH5AGZaA%2F%2F1pn1sX40Vlu3NWnlqf0bU5ILPcyj1o6O1Q1mrT%2FVX1wcIMVQbK4daCQyMyDGs9aGxNrv7921bRsj3c4IUQqLHQu3QIJyOV3Pv9H9nIuhEi7Uqt1aT1IfEDYVuxhj9jZ%2B0vyLZGxpu22qXMV%2Bcm3z4wpkBn3Q9Im7dQVyKnFNG9nKn4NDdBXbDDah6u%2BBjqkAf7AXzfPsGp6Z9YF85LiYKUu%2Bp9k8lga4r0ypDJf0ZA%2BuBJIt625rjh4SOfVZ8zMC7TlMUMHhfYClFDYvrBQvv3Mn4cq%2Bw0ZBZglX0Lqclm%2FXjp9Cqafx%2Ftd%2Bs7EPwBCJ6PQwB68pxz9NMGPsPV4u9EDF%2FWnhodp%2F3ywE%2BKepc67Z4fEVNgj1JhR2PY1BTopU%2Bf8CQTsLMYcZh%2ByzVkJCvBvygTz&X-Amz-Signature=c75af86f7f6d038bc864547c07c03cfcf7e4bb5f49da37d787845262e2f91b67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XUG7JF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3BOfQ9kRh%2BoeFlqc9jBdjodr%2FjZxSTdW9F1vLM0KoAIhAJtTjdF%2B84Nk%2Fmm%2B7YMISToUDyjlkGwAHMvB1vRVbvpMKv8DCEMQABoMNjM3NDIzMTgzODA1Igy011jh4%2BPmkwWjsRMq3AMrzKTamGF7Iiiq0d4NKN1rrsbiuTPaNpBUJFa5Ivfzhez1gZ9zAeN7kIW3f%2FhZAgo3j330LBbkHt8vOC8v1tqyXSmybHbHaZi%2BRl7TBQ3jVGCVniKbrVj3HY6F%2BhbAm5VrVU5KJHcP5guQzlKhvJqITKHBRdVTEVKn5H9%2BHrtGPZHdBJT6e5Amq3wEJGAl8B%2Fp3LVbMA5N17MK2g10JQLRurEsIqkw0QgNhtbdPDtxgxaXmJeGgQ7f1WMW4N8sS3tjfq1fk6c%2FN%2BUWuvlNrCadF1jiK1h8ItVH19a%2BuBiPd0LxjIdMlGVe9oCVZHRP%2F2deqd8lGnQfMr2fj5eMrVXmuMqTAgZV%2BqOUpgn0DFrcJNdHg71sqXbiv9Vc0RziUrCNPZMQvqxN8jmzZFjk%2BzYuKcGhIMarjftffTucDNdInzX6I2vUVN7OuCl6f0mHH5AGZaA%2F%2F1pn1sX40Vlu3NWnlqf0bU5ILPcyj1o6O1Q1mrT%2FVX1wcIMVQbK4daCQyMyDGs9aGxNrv7921bRsj3c4IUQqLHQu3QIJyOV3Pv9H9nIuhEi7Uqt1aT1IfEDYVuxhj9jZ%2B0vyLZGxpu22qXMV%2Bcm3z4wpkBn3Q9Im7dQVyKnFNG9nKn4NDdBXbDDah6u%2BBjqkAf7AXzfPsGp6Z9YF85LiYKUu%2Bp9k8lga4r0ypDJf0ZA%2BuBJIt625rjh4SOfVZ8zMC7TlMUMHhfYClFDYvrBQvv3Mn4cq%2Bw0ZBZglX0Lqclm%2FXjp9Cqafx%2Ftd%2Bs7EPwBCJ6PQwB68pxz9NMGPsPV4u9EDF%2FWnhodp%2F3ywE%2BKepc67Z4fEVNgj1JhR2PY1BTopU%2Bf8CQTsLMYcZh%2ByzVkJCvBvygTz&X-Amz-Signature=39e4ef6cb568d8b7465f34809904d682ddfe963fd7a64f6e9f7ad512891e3c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XUG7JF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl3BOfQ9kRh%2BoeFlqc9jBdjodr%2FjZxSTdW9F1vLM0KoAIhAJtTjdF%2B84Nk%2Fmm%2B7YMISToUDyjlkGwAHMvB1vRVbvpMKv8DCEMQABoMNjM3NDIzMTgzODA1Igy011jh4%2BPmkwWjsRMq3AMrzKTamGF7Iiiq0d4NKN1rrsbiuTPaNpBUJFa5Ivfzhez1gZ9zAeN7kIW3f%2FhZAgo3j330LBbkHt8vOC8v1tqyXSmybHbHaZi%2BRl7TBQ3jVGCVniKbrVj3HY6F%2BhbAm5VrVU5KJHcP5guQzlKhvJqITKHBRdVTEVKn5H9%2BHrtGPZHdBJT6e5Amq3wEJGAl8B%2Fp3LVbMA5N17MK2g10JQLRurEsIqkw0QgNhtbdPDtxgxaXmJeGgQ7f1WMW4N8sS3tjfq1fk6c%2FN%2BUWuvlNrCadF1jiK1h8ItVH19a%2BuBiPd0LxjIdMlGVe9oCVZHRP%2F2deqd8lGnQfMr2fj5eMrVXmuMqTAgZV%2BqOUpgn0DFrcJNdHg71sqXbiv9Vc0RziUrCNPZMQvqxN8jmzZFjk%2BzYuKcGhIMarjftffTucDNdInzX6I2vUVN7OuCl6f0mHH5AGZaA%2F%2F1pn1sX40Vlu3NWnlqf0bU5ILPcyj1o6O1Q1mrT%2FVX1wcIMVQbK4daCQyMyDGs9aGxNrv7921bRsj3c4IUQqLHQu3QIJyOV3Pv9H9nIuhEi7Uqt1aT1IfEDYVuxhj9jZ%2B0vyLZGxpu22qXMV%2Bcm3z4wpkBn3Q9Im7dQVyKnFNG9nKn4NDdBXbDDah6u%2BBjqkAf7AXzfPsGp6Z9YF85LiYKUu%2Bp9k8lga4r0ypDJf0ZA%2BuBJIt625rjh4SOfVZ8zMC7TlMUMHhfYClFDYvrBQvv3Mn4cq%2Bw0ZBZglX0Lqclm%2FXjp9Cqafx%2Ftd%2Bs7EPwBCJ6PQwB68pxz9NMGPsPV4u9EDF%2FWnhodp%2F3ywE%2BKepc67Z4fEVNgj1JhR2PY1BTopU%2Bf8CQTsLMYcZh%2ByzVkJCvBvygTz&X-Amz-Signature=34991e8791db4734a1a0cf6df78ddfd17a5b96c87788cd37a4f802fcb76b24f1&X-Amz-SignedHeaders=host&x-id=GetObject)
