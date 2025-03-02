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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQ5WM6U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEn%2BFwHsruGi72yjrmcBj6ziMWnCw3RN4B59%2Bui2jxQAiB5d%2BlRj0x6QjV%2F49UvZq01vc%2F%2FaU7uyNJV062AZCLeLiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1X5n7eWbAGKzKj09KtwDXL1OK2Avj34keLPU2YKSth43tYFvyDcKwXVy4dMjSqJCduI%2BaS%2FO2%2F3lpWYOIw%2FrzQJE%2BIH0XV73QYJl8jX7gXXPA95in0rnvBa7%2FsFO5exzuDAor52FpO%2BHWUeDuJ189KDSkBSMmk45gh1qtdPmKZfHXT5%2FfsyZL9siuM%2BOuuI5pGYo72gHVpfkyQJMrUiMzIgkQNTwdIKzWCHo4VyCkZU%2FA1q%2BnGEY6st4znEmx9xLAAmQXFeXHxLwxWBeoM%2FqsyW10SGKRLhqdblNItuEhGHkCrT1rElu73G2fQ7HOdQSjpVy9Ahlnq1eIQ9N3Oxf8PdSAVWbi7E4TmvkRF7QUPti%2FlsehTqSte47ff9ym%2FWxM8qQvlb4lamMvr5ela7TfbMn%2F09PmMlFJS1iasExsVs9rC%2F9WvkpEZnL7B4D%2FLgQHtku8ms6koSDjCvbj8LiuU8qSxRhvQ1iPOIxyLyQL7WRg5%2FlYwLCDWKbtFWimffhAZN%2Bnu9NnbFcWWGLy67OKelNsM8Y35ZMcbWNNiWr%2Fuuc48mgyFObOc0LrPfOmz1RrRi4ZzuD%2BQSswRNkaHj5j7ESWtI9L%2B5HPOC8BwkAW%2F9lHvb3%2BqSyc62KmdxoXw0RVxXVxH6EsOQUuKAwmfuQvgY6pgEt0MQHXNRdiRG%2FORs5XX3%2Fq9hV8TGKjllt9QRPKv0dqE%2FHAAv4cIphkKHkSA1MXoAxQK3Tnw%2FyKetHDyqiCZu8jdXFat6Egd6k84X1UCisHTsBvVWdZVWKBypEZh89zncuQP0PTIKwf9Urg3X9wutkf02M6gGXexl1Udv9X10zj%2B8pwBKYLq2W%2BviQqvnp1lIfs5tAIHAzcuy%2FgqUDsmGlfKR1bkyc&X-Amz-Signature=ad17b1aea77e6957e54de2d6338aae9654099789eed71e710673b67b9d902f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQ5WM6U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEn%2BFwHsruGi72yjrmcBj6ziMWnCw3RN4B59%2Bui2jxQAiB5d%2BlRj0x6QjV%2F49UvZq01vc%2F%2FaU7uyNJV062AZCLeLiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1X5n7eWbAGKzKj09KtwDXL1OK2Avj34keLPU2YKSth43tYFvyDcKwXVy4dMjSqJCduI%2BaS%2FO2%2F3lpWYOIw%2FrzQJE%2BIH0XV73QYJl8jX7gXXPA95in0rnvBa7%2FsFO5exzuDAor52FpO%2BHWUeDuJ189KDSkBSMmk45gh1qtdPmKZfHXT5%2FfsyZL9siuM%2BOuuI5pGYo72gHVpfkyQJMrUiMzIgkQNTwdIKzWCHo4VyCkZU%2FA1q%2BnGEY6st4znEmx9xLAAmQXFeXHxLwxWBeoM%2FqsyW10SGKRLhqdblNItuEhGHkCrT1rElu73G2fQ7HOdQSjpVy9Ahlnq1eIQ9N3Oxf8PdSAVWbi7E4TmvkRF7QUPti%2FlsehTqSte47ff9ym%2FWxM8qQvlb4lamMvr5ela7TfbMn%2F09PmMlFJS1iasExsVs9rC%2F9WvkpEZnL7B4D%2FLgQHtku8ms6koSDjCvbj8LiuU8qSxRhvQ1iPOIxyLyQL7WRg5%2FlYwLCDWKbtFWimffhAZN%2Bnu9NnbFcWWGLy67OKelNsM8Y35ZMcbWNNiWr%2Fuuc48mgyFObOc0LrPfOmz1RrRi4ZzuD%2BQSswRNkaHj5j7ESWtI9L%2B5HPOC8BwkAW%2F9lHvb3%2BqSyc62KmdxoXw0RVxXVxH6EsOQUuKAwmfuQvgY6pgEt0MQHXNRdiRG%2FORs5XX3%2Fq9hV8TGKjllt9QRPKv0dqE%2FHAAv4cIphkKHkSA1MXoAxQK3Tnw%2FyKetHDyqiCZu8jdXFat6Egd6k84X1UCisHTsBvVWdZVWKBypEZh89zncuQP0PTIKwf9Urg3X9wutkf02M6gGXexl1Udv9X10zj%2B8pwBKYLq2W%2BviQqvnp1lIfs5tAIHAzcuy%2FgqUDsmGlfKR1bkyc&X-Amz-Signature=cc831004e4947863ca4a3e286b02a95cc6ffc793a615644cd3f484869d7e4f59&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQ5WM6U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEn%2BFwHsruGi72yjrmcBj6ziMWnCw3RN4B59%2Bui2jxQAiB5d%2BlRj0x6QjV%2F49UvZq01vc%2F%2FaU7uyNJV062AZCLeLiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1X5n7eWbAGKzKj09KtwDXL1OK2Avj34keLPU2YKSth43tYFvyDcKwXVy4dMjSqJCduI%2BaS%2FO2%2F3lpWYOIw%2FrzQJE%2BIH0XV73QYJl8jX7gXXPA95in0rnvBa7%2FsFO5exzuDAor52FpO%2BHWUeDuJ189KDSkBSMmk45gh1qtdPmKZfHXT5%2FfsyZL9siuM%2BOuuI5pGYo72gHVpfkyQJMrUiMzIgkQNTwdIKzWCHo4VyCkZU%2FA1q%2BnGEY6st4znEmx9xLAAmQXFeXHxLwxWBeoM%2FqsyW10SGKRLhqdblNItuEhGHkCrT1rElu73G2fQ7HOdQSjpVy9Ahlnq1eIQ9N3Oxf8PdSAVWbi7E4TmvkRF7QUPti%2FlsehTqSte47ff9ym%2FWxM8qQvlb4lamMvr5ela7TfbMn%2F09PmMlFJS1iasExsVs9rC%2F9WvkpEZnL7B4D%2FLgQHtku8ms6koSDjCvbj8LiuU8qSxRhvQ1iPOIxyLyQL7WRg5%2FlYwLCDWKbtFWimffhAZN%2Bnu9NnbFcWWGLy67OKelNsM8Y35ZMcbWNNiWr%2Fuuc48mgyFObOc0LrPfOmz1RrRi4ZzuD%2BQSswRNkaHj5j7ESWtI9L%2B5HPOC8BwkAW%2F9lHvb3%2BqSyc62KmdxoXw0RVxXVxH6EsOQUuKAwmfuQvgY6pgEt0MQHXNRdiRG%2FORs5XX3%2Fq9hV8TGKjllt9QRPKv0dqE%2FHAAv4cIphkKHkSA1MXoAxQK3Tnw%2FyKetHDyqiCZu8jdXFat6Egd6k84X1UCisHTsBvVWdZVWKBypEZh89zncuQP0PTIKwf9Urg3X9wutkf02M6gGXexl1Udv9X10zj%2B8pwBKYLq2W%2BviQqvnp1lIfs5tAIHAzcuy%2FgqUDsmGlfKR1bkyc&X-Amz-Signature=5bbbf8934d0f35e9c64088e00c9e3329456abe85a64c412ccde9e317f935e554&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQ5WM6U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEn%2BFwHsruGi72yjrmcBj6ziMWnCw3RN4B59%2Bui2jxQAiB5d%2BlRj0x6QjV%2F49UvZq01vc%2F%2FaU7uyNJV062AZCLeLiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1X5n7eWbAGKzKj09KtwDXL1OK2Avj34keLPU2YKSth43tYFvyDcKwXVy4dMjSqJCduI%2BaS%2FO2%2F3lpWYOIw%2FrzQJE%2BIH0XV73QYJl8jX7gXXPA95in0rnvBa7%2FsFO5exzuDAor52FpO%2BHWUeDuJ189KDSkBSMmk45gh1qtdPmKZfHXT5%2FfsyZL9siuM%2BOuuI5pGYo72gHVpfkyQJMrUiMzIgkQNTwdIKzWCHo4VyCkZU%2FA1q%2BnGEY6st4znEmx9xLAAmQXFeXHxLwxWBeoM%2FqsyW10SGKRLhqdblNItuEhGHkCrT1rElu73G2fQ7HOdQSjpVy9Ahlnq1eIQ9N3Oxf8PdSAVWbi7E4TmvkRF7QUPti%2FlsehTqSte47ff9ym%2FWxM8qQvlb4lamMvr5ela7TfbMn%2F09PmMlFJS1iasExsVs9rC%2F9WvkpEZnL7B4D%2FLgQHtku8ms6koSDjCvbj8LiuU8qSxRhvQ1iPOIxyLyQL7WRg5%2FlYwLCDWKbtFWimffhAZN%2Bnu9NnbFcWWGLy67OKelNsM8Y35ZMcbWNNiWr%2Fuuc48mgyFObOc0LrPfOmz1RrRi4ZzuD%2BQSswRNkaHj5j7ESWtI9L%2B5HPOC8BwkAW%2F9lHvb3%2BqSyc62KmdxoXw0RVxXVxH6EsOQUuKAwmfuQvgY6pgEt0MQHXNRdiRG%2FORs5XX3%2Fq9hV8TGKjllt9QRPKv0dqE%2FHAAv4cIphkKHkSA1MXoAxQK3Tnw%2FyKetHDyqiCZu8jdXFat6Egd6k84X1UCisHTsBvVWdZVWKBypEZh89zncuQP0PTIKwf9Urg3X9wutkf02M6gGXexl1Udv9X10zj%2B8pwBKYLq2W%2BviQqvnp1lIfs5tAIHAzcuy%2FgqUDsmGlfKR1bkyc&X-Amz-Signature=9d8abd8ed4698e7d5f9cecae91b84236a5c1c1511ff5d0fb9e3b75e90a27ba3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQ5WM6U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEn%2BFwHsruGi72yjrmcBj6ziMWnCw3RN4B59%2Bui2jxQAiB5d%2BlRj0x6QjV%2F49UvZq01vc%2F%2FaU7uyNJV062AZCLeLiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1X5n7eWbAGKzKj09KtwDXL1OK2Avj34keLPU2YKSth43tYFvyDcKwXVy4dMjSqJCduI%2BaS%2FO2%2F3lpWYOIw%2FrzQJE%2BIH0XV73QYJl8jX7gXXPA95in0rnvBa7%2FsFO5exzuDAor52FpO%2BHWUeDuJ189KDSkBSMmk45gh1qtdPmKZfHXT5%2FfsyZL9siuM%2BOuuI5pGYo72gHVpfkyQJMrUiMzIgkQNTwdIKzWCHo4VyCkZU%2FA1q%2BnGEY6st4znEmx9xLAAmQXFeXHxLwxWBeoM%2FqsyW10SGKRLhqdblNItuEhGHkCrT1rElu73G2fQ7HOdQSjpVy9Ahlnq1eIQ9N3Oxf8PdSAVWbi7E4TmvkRF7QUPti%2FlsehTqSte47ff9ym%2FWxM8qQvlb4lamMvr5ela7TfbMn%2F09PmMlFJS1iasExsVs9rC%2F9WvkpEZnL7B4D%2FLgQHtku8ms6koSDjCvbj8LiuU8qSxRhvQ1iPOIxyLyQL7WRg5%2FlYwLCDWKbtFWimffhAZN%2Bnu9NnbFcWWGLy67OKelNsM8Y35ZMcbWNNiWr%2Fuuc48mgyFObOc0LrPfOmz1RrRi4ZzuD%2BQSswRNkaHj5j7ESWtI9L%2B5HPOC8BwkAW%2F9lHvb3%2BqSyc62KmdxoXw0RVxXVxH6EsOQUuKAwmfuQvgY6pgEt0MQHXNRdiRG%2FORs5XX3%2Fq9hV8TGKjllt9QRPKv0dqE%2FHAAv4cIphkKHkSA1MXoAxQK3Tnw%2FyKetHDyqiCZu8jdXFat6Egd6k84X1UCisHTsBvVWdZVWKBypEZh89zncuQP0PTIKwf9Urg3X9wutkf02M6gGXexl1Udv9X10zj%2B8pwBKYLq2W%2BviQqvnp1lIfs5tAIHAzcuy%2FgqUDsmGlfKR1bkyc&X-Amz-Signature=c921fe457df5f240f9707a47dcf2ffa83ebbc26c4e64800b9fc0fab912655ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQ5WM6U%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEn%2BFwHsruGi72yjrmcBj6ziMWnCw3RN4B59%2Bui2jxQAiB5d%2BlRj0x6QjV%2F49UvZq01vc%2F%2FaU7uyNJV062AZCLeLiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1X5n7eWbAGKzKj09KtwDXL1OK2Avj34keLPU2YKSth43tYFvyDcKwXVy4dMjSqJCduI%2BaS%2FO2%2F3lpWYOIw%2FrzQJE%2BIH0XV73QYJl8jX7gXXPA95in0rnvBa7%2FsFO5exzuDAor52FpO%2BHWUeDuJ189KDSkBSMmk45gh1qtdPmKZfHXT5%2FfsyZL9siuM%2BOuuI5pGYo72gHVpfkyQJMrUiMzIgkQNTwdIKzWCHo4VyCkZU%2FA1q%2BnGEY6st4znEmx9xLAAmQXFeXHxLwxWBeoM%2FqsyW10SGKRLhqdblNItuEhGHkCrT1rElu73G2fQ7HOdQSjpVy9Ahlnq1eIQ9N3Oxf8PdSAVWbi7E4TmvkRF7QUPti%2FlsehTqSte47ff9ym%2FWxM8qQvlb4lamMvr5ela7TfbMn%2F09PmMlFJS1iasExsVs9rC%2F9WvkpEZnL7B4D%2FLgQHtku8ms6koSDjCvbj8LiuU8qSxRhvQ1iPOIxyLyQL7WRg5%2FlYwLCDWKbtFWimffhAZN%2Bnu9NnbFcWWGLy67OKelNsM8Y35ZMcbWNNiWr%2Fuuc48mgyFObOc0LrPfOmz1RrRi4ZzuD%2BQSswRNkaHj5j7ESWtI9L%2B5HPOC8BwkAW%2F9lHvb3%2BqSyc62KmdxoXw0RVxXVxH6EsOQUuKAwmfuQvgY6pgEt0MQHXNRdiRG%2FORs5XX3%2Fq9hV8TGKjllt9QRPKv0dqE%2FHAAv4cIphkKHkSA1MXoAxQK3Tnw%2FyKetHDyqiCZu8jdXFat6Egd6k84X1UCisHTsBvVWdZVWKBypEZh89zncuQP0PTIKwf9Urg3X9wutkf02M6gGXexl1Udv9X10zj%2B8pwBKYLq2W%2BviQqvnp1lIfs5tAIHAzcuy%2FgqUDsmGlfKR1bkyc&X-Amz-Signature=cee3b55188fa67973516af695c74a3fc3ec27a18f8b2d27d547646fa81757352&X-Amz-SignedHeaders=host&x-id=GetObject)
