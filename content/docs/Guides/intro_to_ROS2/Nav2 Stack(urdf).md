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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJEZD65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDjZU2VlKDfpogSkr8qZo29%2B7m3gsCCx463SIasKRobaAIhAI%2F81oWg8VZBLjd%2Bx9g6T4D519uyr0ybCct2MvbGwFuFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjdC1oBwmnuwJ720q3AO9RClVszaggiHpVfGNQwaqqXv6PG1wEn6CvTcKZmg0qoO1g7nfjrL4oNau2kOEkBAXbVFk30FXTORBYl4ef69KkN%2FhPe83%2BPxQsO%2FhgNaAD6rMzmd6%2BHBxjGa7Qtlb7cp%2F08kA6IX3oAxlCVjWViWG%2FpcuikSsnNeii8ZWZtzIbgx%2F2dbSY12lu7ae%2BfiWd5%2FWOZ0gG2dGP7OvtzJWlrPIPPTlS2Q7qXiU%2B6emcKsRCSVuG7cGnoGYk7nG3Qv0TZ0jmaYwDBnzHwXbi3MugbELoIRJV1qn8%2Fm8N8UdSELRlInAVt5ATB7KpTVt8E2z%2F3M25SqzC6Y2hC7nHmqe4UVxifrCgZSIKraZKo36tTrSPcuLWSdjOQgygKDrKqs6rpBbrdMZZrV%2FG0pmZqW5I4kLMHDmDzKvd7hQVC8vIgAxVkvceLuMu6g7IPOtQguMMR6S6dcEOSBN6KcXO6Psga7TrFnb%2FRjxp8Obhy%2F0hxDhrWcSFTMYUYT0Sp1Q%2Fvck9ZFgxFnMe7SdV2%2BKWlIB3XIHbyA8YL20vhExWKrq6yB%2F71VNhnlvsXaO31yKzE2yzby%2FhQ0ht%2FYsO7TmoWozWLbnV8AzLs4br%2Fb4ztPdnFHFS8dVtoiGKI1pQtSO5DD4nKu%2FBjqkAV9RbDRH54kVzEGhGt1lycrFShcEBXcStuavNYBTEbu2lh%2BCI7jg%2BXMVJdmHRy4bduSVFL%2BzuAqh79wkkgYsWzWSrvc0cq0mTrIl5uUFesfcSqvY8GtmwZd8VLA%2FRaYMAbhKYmd7xPu4AQHGRh%2BgdY4vOQXHy6zPlL9nM2BDeRWQ2%2FTrPZvIjs3JD9FWLH4AauVp7pE4eYdAep%2FDNi5BZ6Cs0Whi&X-Amz-Signature=12db45a4a55e92f804f9e857286a7b3bedd24d95f94d32cedd5631c276fb3be5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJEZD65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDjZU2VlKDfpogSkr8qZo29%2B7m3gsCCx463SIasKRobaAIhAI%2F81oWg8VZBLjd%2Bx9g6T4D519uyr0ybCct2MvbGwFuFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjdC1oBwmnuwJ720q3AO9RClVszaggiHpVfGNQwaqqXv6PG1wEn6CvTcKZmg0qoO1g7nfjrL4oNau2kOEkBAXbVFk30FXTORBYl4ef69KkN%2FhPe83%2BPxQsO%2FhgNaAD6rMzmd6%2BHBxjGa7Qtlb7cp%2F08kA6IX3oAxlCVjWViWG%2FpcuikSsnNeii8ZWZtzIbgx%2F2dbSY12lu7ae%2BfiWd5%2FWOZ0gG2dGP7OvtzJWlrPIPPTlS2Q7qXiU%2B6emcKsRCSVuG7cGnoGYk7nG3Qv0TZ0jmaYwDBnzHwXbi3MugbELoIRJV1qn8%2Fm8N8UdSELRlInAVt5ATB7KpTVt8E2z%2F3M25SqzC6Y2hC7nHmqe4UVxifrCgZSIKraZKo36tTrSPcuLWSdjOQgygKDrKqs6rpBbrdMZZrV%2FG0pmZqW5I4kLMHDmDzKvd7hQVC8vIgAxVkvceLuMu6g7IPOtQguMMR6S6dcEOSBN6KcXO6Psga7TrFnb%2FRjxp8Obhy%2F0hxDhrWcSFTMYUYT0Sp1Q%2Fvck9ZFgxFnMe7SdV2%2BKWlIB3XIHbyA8YL20vhExWKrq6yB%2F71VNhnlvsXaO31yKzE2yzby%2FhQ0ht%2FYsO7TmoWozWLbnV8AzLs4br%2Fb4ztPdnFHFS8dVtoiGKI1pQtSO5DD4nKu%2FBjqkAV9RbDRH54kVzEGhGt1lycrFShcEBXcStuavNYBTEbu2lh%2BCI7jg%2BXMVJdmHRy4bduSVFL%2BzuAqh79wkkgYsWzWSrvc0cq0mTrIl5uUFesfcSqvY8GtmwZd8VLA%2FRaYMAbhKYmd7xPu4AQHGRh%2BgdY4vOQXHy6zPlL9nM2BDeRWQ2%2FTrPZvIjs3JD9FWLH4AauVp7pE4eYdAep%2FDNi5BZ6Cs0Whi&X-Amz-Signature=488f29e90f6eb8bf4d218c894be8dae8a383f6f36862d9b0441de42ef7703a02&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJEZD65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDjZU2VlKDfpogSkr8qZo29%2B7m3gsCCx463SIasKRobaAIhAI%2F81oWg8VZBLjd%2Bx9g6T4D519uyr0ybCct2MvbGwFuFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjdC1oBwmnuwJ720q3AO9RClVszaggiHpVfGNQwaqqXv6PG1wEn6CvTcKZmg0qoO1g7nfjrL4oNau2kOEkBAXbVFk30FXTORBYl4ef69KkN%2FhPe83%2BPxQsO%2FhgNaAD6rMzmd6%2BHBxjGa7Qtlb7cp%2F08kA6IX3oAxlCVjWViWG%2FpcuikSsnNeii8ZWZtzIbgx%2F2dbSY12lu7ae%2BfiWd5%2FWOZ0gG2dGP7OvtzJWlrPIPPTlS2Q7qXiU%2B6emcKsRCSVuG7cGnoGYk7nG3Qv0TZ0jmaYwDBnzHwXbi3MugbELoIRJV1qn8%2Fm8N8UdSELRlInAVt5ATB7KpTVt8E2z%2F3M25SqzC6Y2hC7nHmqe4UVxifrCgZSIKraZKo36tTrSPcuLWSdjOQgygKDrKqs6rpBbrdMZZrV%2FG0pmZqW5I4kLMHDmDzKvd7hQVC8vIgAxVkvceLuMu6g7IPOtQguMMR6S6dcEOSBN6KcXO6Psga7TrFnb%2FRjxp8Obhy%2F0hxDhrWcSFTMYUYT0Sp1Q%2Fvck9ZFgxFnMe7SdV2%2BKWlIB3XIHbyA8YL20vhExWKrq6yB%2F71VNhnlvsXaO31yKzE2yzby%2FhQ0ht%2FYsO7TmoWozWLbnV8AzLs4br%2Fb4ztPdnFHFS8dVtoiGKI1pQtSO5DD4nKu%2FBjqkAV9RbDRH54kVzEGhGt1lycrFShcEBXcStuavNYBTEbu2lh%2BCI7jg%2BXMVJdmHRy4bduSVFL%2BzuAqh79wkkgYsWzWSrvc0cq0mTrIl5uUFesfcSqvY8GtmwZd8VLA%2FRaYMAbhKYmd7xPu4AQHGRh%2BgdY4vOQXHy6zPlL9nM2BDeRWQ2%2FTrPZvIjs3JD9FWLH4AauVp7pE4eYdAep%2FDNi5BZ6Cs0Whi&X-Amz-Signature=85ca204d53b2a02aa010ce0b7fd71f15d5c04b3abaa2b49acd4da2d740182e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJEZD65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDjZU2VlKDfpogSkr8qZo29%2B7m3gsCCx463SIasKRobaAIhAI%2F81oWg8VZBLjd%2Bx9g6T4D519uyr0ybCct2MvbGwFuFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjdC1oBwmnuwJ720q3AO9RClVszaggiHpVfGNQwaqqXv6PG1wEn6CvTcKZmg0qoO1g7nfjrL4oNau2kOEkBAXbVFk30FXTORBYl4ef69KkN%2FhPe83%2BPxQsO%2FhgNaAD6rMzmd6%2BHBxjGa7Qtlb7cp%2F08kA6IX3oAxlCVjWViWG%2FpcuikSsnNeii8ZWZtzIbgx%2F2dbSY12lu7ae%2BfiWd5%2FWOZ0gG2dGP7OvtzJWlrPIPPTlS2Q7qXiU%2B6emcKsRCSVuG7cGnoGYk7nG3Qv0TZ0jmaYwDBnzHwXbi3MugbELoIRJV1qn8%2Fm8N8UdSELRlInAVt5ATB7KpTVt8E2z%2F3M25SqzC6Y2hC7nHmqe4UVxifrCgZSIKraZKo36tTrSPcuLWSdjOQgygKDrKqs6rpBbrdMZZrV%2FG0pmZqW5I4kLMHDmDzKvd7hQVC8vIgAxVkvceLuMu6g7IPOtQguMMR6S6dcEOSBN6KcXO6Psga7TrFnb%2FRjxp8Obhy%2F0hxDhrWcSFTMYUYT0Sp1Q%2Fvck9ZFgxFnMe7SdV2%2BKWlIB3XIHbyA8YL20vhExWKrq6yB%2F71VNhnlvsXaO31yKzE2yzby%2FhQ0ht%2FYsO7TmoWozWLbnV8AzLs4br%2Fb4ztPdnFHFS8dVtoiGKI1pQtSO5DD4nKu%2FBjqkAV9RbDRH54kVzEGhGt1lycrFShcEBXcStuavNYBTEbu2lh%2BCI7jg%2BXMVJdmHRy4bduSVFL%2BzuAqh79wkkgYsWzWSrvc0cq0mTrIl5uUFesfcSqvY8GtmwZd8VLA%2FRaYMAbhKYmd7xPu4AQHGRh%2BgdY4vOQXHy6zPlL9nM2BDeRWQ2%2FTrPZvIjs3JD9FWLH4AauVp7pE4eYdAep%2FDNi5BZ6Cs0Whi&X-Amz-Signature=0fe8c0dce1e786b5401888176b79f80b2e36bc3736fafb40d4ee4ee0fcf2dc02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJEZD65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDjZU2VlKDfpogSkr8qZo29%2B7m3gsCCx463SIasKRobaAIhAI%2F81oWg8VZBLjd%2Bx9g6T4D519uyr0ybCct2MvbGwFuFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjdC1oBwmnuwJ720q3AO9RClVszaggiHpVfGNQwaqqXv6PG1wEn6CvTcKZmg0qoO1g7nfjrL4oNau2kOEkBAXbVFk30FXTORBYl4ef69KkN%2FhPe83%2BPxQsO%2FhgNaAD6rMzmd6%2BHBxjGa7Qtlb7cp%2F08kA6IX3oAxlCVjWViWG%2FpcuikSsnNeii8ZWZtzIbgx%2F2dbSY12lu7ae%2BfiWd5%2FWOZ0gG2dGP7OvtzJWlrPIPPTlS2Q7qXiU%2B6emcKsRCSVuG7cGnoGYk7nG3Qv0TZ0jmaYwDBnzHwXbi3MugbELoIRJV1qn8%2Fm8N8UdSELRlInAVt5ATB7KpTVt8E2z%2F3M25SqzC6Y2hC7nHmqe4UVxifrCgZSIKraZKo36tTrSPcuLWSdjOQgygKDrKqs6rpBbrdMZZrV%2FG0pmZqW5I4kLMHDmDzKvd7hQVC8vIgAxVkvceLuMu6g7IPOtQguMMR6S6dcEOSBN6KcXO6Psga7TrFnb%2FRjxp8Obhy%2F0hxDhrWcSFTMYUYT0Sp1Q%2Fvck9ZFgxFnMe7SdV2%2BKWlIB3XIHbyA8YL20vhExWKrq6yB%2F71VNhnlvsXaO31yKzE2yzby%2FhQ0ht%2FYsO7TmoWozWLbnV8AzLs4br%2Fb4ztPdnFHFS8dVtoiGKI1pQtSO5DD4nKu%2FBjqkAV9RbDRH54kVzEGhGt1lycrFShcEBXcStuavNYBTEbu2lh%2BCI7jg%2BXMVJdmHRy4bduSVFL%2BzuAqh79wkkgYsWzWSrvc0cq0mTrIl5uUFesfcSqvY8GtmwZd8VLA%2FRaYMAbhKYmd7xPu4AQHGRh%2BgdY4vOQXHy6zPlL9nM2BDeRWQ2%2FTrPZvIjs3JD9FWLH4AauVp7pE4eYdAep%2FDNi5BZ6Cs0Whi&X-Amz-Signature=46be9b45755f890bfc9292e3ae1ba3c813b6353f0edb1e414019767ddeaa9d85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJEZD65%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDjZU2VlKDfpogSkr8qZo29%2B7m3gsCCx463SIasKRobaAIhAI%2F81oWg8VZBLjd%2Bx9g6T4D519uyr0ybCct2MvbGwFuFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FjdC1oBwmnuwJ720q3AO9RClVszaggiHpVfGNQwaqqXv6PG1wEn6CvTcKZmg0qoO1g7nfjrL4oNau2kOEkBAXbVFk30FXTORBYl4ef69KkN%2FhPe83%2BPxQsO%2FhgNaAD6rMzmd6%2BHBxjGa7Qtlb7cp%2F08kA6IX3oAxlCVjWViWG%2FpcuikSsnNeii8ZWZtzIbgx%2F2dbSY12lu7ae%2BfiWd5%2FWOZ0gG2dGP7OvtzJWlrPIPPTlS2Q7qXiU%2B6emcKsRCSVuG7cGnoGYk7nG3Qv0TZ0jmaYwDBnzHwXbi3MugbELoIRJV1qn8%2Fm8N8UdSELRlInAVt5ATB7KpTVt8E2z%2F3M25SqzC6Y2hC7nHmqe4UVxifrCgZSIKraZKo36tTrSPcuLWSdjOQgygKDrKqs6rpBbrdMZZrV%2FG0pmZqW5I4kLMHDmDzKvd7hQVC8vIgAxVkvceLuMu6g7IPOtQguMMR6S6dcEOSBN6KcXO6Psga7TrFnb%2FRjxp8Obhy%2F0hxDhrWcSFTMYUYT0Sp1Q%2Fvck9ZFgxFnMe7SdV2%2BKWlIB3XIHbyA8YL20vhExWKrq6yB%2F71VNhnlvsXaO31yKzE2yzby%2FhQ0ht%2FYsO7TmoWozWLbnV8AzLs4br%2Fb4ztPdnFHFS8dVtoiGKI1pQtSO5DD4nKu%2FBjqkAV9RbDRH54kVzEGhGt1lycrFShcEBXcStuavNYBTEbu2lh%2BCI7jg%2BXMVJdmHRy4bduSVFL%2BzuAqh79wkkgYsWzWSrvc0cq0mTrIl5uUFesfcSqvY8GtmwZd8VLA%2FRaYMAbhKYmd7xPu4AQHGRh%2BgdY4vOQXHy6zPlL9nM2BDeRWQ2%2FTrPZvIjs3JD9FWLH4AauVp7pE4eYdAep%2FDNi5BZ6Cs0Whi&X-Amz-Signature=6b1267e6a1f7e869fd15528f870377db03dd2f7b81d863c92b1fa7dfefb4f5f2&X-Amz-SignedHeaders=host&x-id=GetObject)
