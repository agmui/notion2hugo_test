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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OC3VS4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCkhuf0Bj26fkMorKVBYutktPcLADFrpQ%2FwF3srDlxdfwIhAINiPbSD5wsOemvGKyikGpKXl8MEM%2B%2FnEQ%2FYPjYTnpY0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZDBzlZc7ZIjxT98Yq3AOXMx4nohzwdCL9wtnHF11kofW6WygvnkuRTbwNMf0mVyqiKBRTf15y24Eb3IUN%2FnxVgmu5OgvYk2%2FL71tLgc8rjikGglbJ%2Fz7SHEPAtCae32SmG1adof906LpFa3YYbcev9dTWgWAt%2BSiTQJlLleR%2FgyFgh%2BYxrie9etq5J34e7X03I%2FMc44n5sVRysA9DpCRjADXL3QD7OdY0cZjbvWfyh%2BQN3ugOfPvAx3k05NeTUT1fV9kjWLwpEXuwGuZvapwmff1YzVoEzIfmIV0c7hMBVUDsRbMT1vSO1K%2FVloCd3Pi1UXZ7tqyu6wxdVnf2MSogVWmxZKJ%2FwoVcEbhoRlf3GhHbfSrA%2FBhTDa38pAaQTLrFV9LK8%2F3VrQiGU9HrJGLsaAzGKQxNQGn%2Fnm0wRvhBkkB06%2F9qx%2B8sOMlU3LXxahqFRRIdD8JwPBWevRc88wzpwe8yrfTAstqNjHCLeb9E2kV2dt66DST6yyD8QEIlqBrI6k6YwxpV%2BvE7iF8kbnD28wnkYSclq2p3kn60rXdFJdRQb5%2FJImVpqMeL6RTxGvTom1jgKAOfO5kvRIJ5j0q6KENg2JKzunIvUR%2F4WrqaGz6Uv%2B3muxDB%2FAdaaYmkvVzMOaFy2cw9WZn7FzDz14%2B%2BBjqkAf%2BWVezFRZCFq6wt7y4WYhGLGz2CaIcWY9rHZ83X6hGHikN504UvvTqPVEoQVdzrXCPed2jQo%2BJKOQ%2BVwZh%2F4RNnL6s%2F2rH0ngl4gnOyWNSYOx61cLvcoLeI756ZkaXLc16d3VYDfIdhwCr4zamvJwF%2Bp%2BHR3ZiNeJOXk8LC1ysSa2AyfbC2Q%2FqAF%2F%2Fu27PQQcyWNK%2FweC0F09mc8iItpS3ri34m&X-Amz-Signature=225027aa770563e50ca84ca7297aeb94bf0591ac6565d48d127ccb0bbd537ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OC3VS4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCkhuf0Bj26fkMorKVBYutktPcLADFrpQ%2FwF3srDlxdfwIhAINiPbSD5wsOemvGKyikGpKXl8MEM%2B%2FnEQ%2FYPjYTnpY0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZDBzlZc7ZIjxT98Yq3AOXMx4nohzwdCL9wtnHF11kofW6WygvnkuRTbwNMf0mVyqiKBRTf15y24Eb3IUN%2FnxVgmu5OgvYk2%2FL71tLgc8rjikGglbJ%2Fz7SHEPAtCae32SmG1adof906LpFa3YYbcev9dTWgWAt%2BSiTQJlLleR%2FgyFgh%2BYxrie9etq5J34e7X03I%2FMc44n5sVRysA9DpCRjADXL3QD7OdY0cZjbvWfyh%2BQN3ugOfPvAx3k05NeTUT1fV9kjWLwpEXuwGuZvapwmff1YzVoEzIfmIV0c7hMBVUDsRbMT1vSO1K%2FVloCd3Pi1UXZ7tqyu6wxdVnf2MSogVWmxZKJ%2FwoVcEbhoRlf3GhHbfSrA%2FBhTDa38pAaQTLrFV9LK8%2F3VrQiGU9HrJGLsaAzGKQxNQGn%2Fnm0wRvhBkkB06%2F9qx%2B8sOMlU3LXxahqFRRIdD8JwPBWevRc88wzpwe8yrfTAstqNjHCLeb9E2kV2dt66DST6yyD8QEIlqBrI6k6YwxpV%2BvE7iF8kbnD28wnkYSclq2p3kn60rXdFJdRQb5%2FJImVpqMeL6RTxGvTom1jgKAOfO5kvRIJ5j0q6KENg2JKzunIvUR%2F4WrqaGz6Uv%2B3muxDB%2FAdaaYmkvVzMOaFy2cw9WZn7FzDz14%2B%2BBjqkAf%2BWVezFRZCFq6wt7y4WYhGLGz2CaIcWY9rHZ83X6hGHikN504UvvTqPVEoQVdzrXCPed2jQo%2BJKOQ%2BVwZh%2F4RNnL6s%2F2rH0ngl4gnOyWNSYOx61cLvcoLeI756ZkaXLc16d3VYDfIdhwCr4zamvJwF%2Bp%2BHR3ZiNeJOXk8LC1ysSa2AyfbC2Q%2FqAF%2F%2Fu27PQQcyWNK%2FweC0F09mc8iItpS3ri34m&X-Amz-Signature=5f6af50fab0c82782becec3645f38d0fad24d1549ac6336d527b84cb46d95adc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OC3VS4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCkhuf0Bj26fkMorKVBYutktPcLADFrpQ%2FwF3srDlxdfwIhAINiPbSD5wsOemvGKyikGpKXl8MEM%2B%2FnEQ%2FYPjYTnpY0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZDBzlZc7ZIjxT98Yq3AOXMx4nohzwdCL9wtnHF11kofW6WygvnkuRTbwNMf0mVyqiKBRTf15y24Eb3IUN%2FnxVgmu5OgvYk2%2FL71tLgc8rjikGglbJ%2Fz7SHEPAtCae32SmG1adof906LpFa3YYbcev9dTWgWAt%2BSiTQJlLleR%2FgyFgh%2BYxrie9etq5J34e7X03I%2FMc44n5sVRysA9DpCRjADXL3QD7OdY0cZjbvWfyh%2BQN3ugOfPvAx3k05NeTUT1fV9kjWLwpEXuwGuZvapwmff1YzVoEzIfmIV0c7hMBVUDsRbMT1vSO1K%2FVloCd3Pi1UXZ7tqyu6wxdVnf2MSogVWmxZKJ%2FwoVcEbhoRlf3GhHbfSrA%2FBhTDa38pAaQTLrFV9LK8%2F3VrQiGU9HrJGLsaAzGKQxNQGn%2Fnm0wRvhBkkB06%2F9qx%2B8sOMlU3LXxahqFRRIdD8JwPBWevRc88wzpwe8yrfTAstqNjHCLeb9E2kV2dt66DST6yyD8QEIlqBrI6k6YwxpV%2BvE7iF8kbnD28wnkYSclq2p3kn60rXdFJdRQb5%2FJImVpqMeL6RTxGvTom1jgKAOfO5kvRIJ5j0q6KENg2JKzunIvUR%2F4WrqaGz6Uv%2B3muxDB%2FAdaaYmkvVzMOaFy2cw9WZn7FzDz14%2B%2BBjqkAf%2BWVezFRZCFq6wt7y4WYhGLGz2CaIcWY9rHZ83X6hGHikN504UvvTqPVEoQVdzrXCPed2jQo%2BJKOQ%2BVwZh%2F4RNnL6s%2F2rH0ngl4gnOyWNSYOx61cLvcoLeI756ZkaXLc16d3VYDfIdhwCr4zamvJwF%2Bp%2BHR3ZiNeJOXk8LC1ysSa2AyfbC2Q%2FqAF%2F%2Fu27PQQcyWNK%2FweC0F09mc8iItpS3ri34m&X-Amz-Signature=b7cfe4d26b3e5800a927917bdd8613fadd408e550a95d352e88765fd8f7f4e31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OC3VS4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCkhuf0Bj26fkMorKVBYutktPcLADFrpQ%2FwF3srDlxdfwIhAINiPbSD5wsOemvGKyikGpKXl8MEM%2B%2FnEQ%2FYPjYTnpY0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZDBzlZc7ZIjxT98Yq3AOXMx4nohzwdCL9wtnHF11kofW6WygvnkuRTbwNMf0mVyqiKBRTf15y24Eb3IUN%2FnxVgmu5OgvYk2%2FL71tLgc8rjikGglbJ%2Fz7SHEPAtCae32SmG1adof906LpFa3YYbcev9dTWgWAt%2BSiTQJlLleR%2FgyFgh%2BYxrie9etq5J34e7X03I%2FMc44n5sVRysA9DpCRjADXL3QD7OdY0cZjbvWfyh%2BQN3ugOfPvAx3k05NeTUT1fV9kjWLwpEXuwGuZvapwmff1YzVoEzIfmIV0c7hMBVUDsRbMT1vSO1K%2FVloCd3Pi1UXZ7tqyu6wxdVnf2MSogVWmxZKJ%2FwoVcEbhoRlf3GhHbfSrA%2FBhTDa38pAaQTLrFV9LK8%2F3VrQiGU9HrJGLsaAzGKQxNQGn%2Fnm0wRvhBkkB06%2F9qx%2B8sOMlU3LXxahqFRRIdD8JwPBWevRc88wzpwe8yrfTAstqNjHCLeb9E2kV2dt66DST6yyD8QEIlqBrI6k6YwxpV%2BvE7iF8kbnD28wnkYSclq2p3kn60rXdFJdRQb5%2FJImVpqMeL6RTxGvTom1jgKAOfO5kvRIJ5j0q6KENg2JKzunIvUR%2F4WrqaGz6Uv%2B3muxDB%2FAdaaYmkvVzMOaFy2cw9WZn7FzDz14%2B%2BBjqkAf%2BWVezFRZCFq6wt7y4WYhGLGz2CaIcWY9rHZ83X6hGHikN504UvvTqPVEoQVdzrXCPed2jQo%2BJKOQ%2BVwZh%2F4RNnL6s%2F2rH0ngl4gnOyWNSYOx61cLvcoLeI756ZkaXLc16d3VYDfIdhwCr4zamvJwF%2Bp%2BHR3ZiNeJOXk8LC1ysSa2AyfbC2Q%2FqAF%2F%2Fu27PQQcyWNK%2FweC0F09mc8iItpS3ri34m&X-Amz-Signature=289406beaf873fc05ce50adb9424a296dcdd9b8ba622d425afcc2f890c415fed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OC3VS4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCkhuf0Bj26fkMorKVBYutktPcLADFrpQ%2FwF3srDlxdfwIhAINiPbSD5wsOemvGKyikGpKXl8MEM%2B%2FnEQ%2FYPjYTnpY0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZDBzlZc7ZIjxT98Yq3AOXMx4nohzwdCL9wtnHF11kofW6WygvnkuRTbwNMf0mVyqiKBRTf15y24Eb3IUN%2FnxVgmu5OgvYk2%2FL71tLgc8rjikGglbJ%2Fz7SHEPAtCae32SmG1adof906LpFa3YYbcev9dTWgWAt%2BSiTQJlLleR%2FgyFgh%2BYxrie9etq5J34e7X03I%2FMc44n5sVRysA9DpCRjADXL3QD7OdY0cZjbvWfyh%2BQN3ugOfPvAx3k05NeTUT1fV9kjWLwpEXuwGuZvapwmff1YzVoEzIfmIV0c7hMBVUDsRbMT1vSO1K%2FVloCd3Pi1UXZ7tqyu6wxdVnf2MSogVWmxZKJ%2FwoVcEbhoRlf3GhHbfSrA%2FBhTDa38pAaQTLrFV9LK8%2F3VrQiGU9HrJGLsaAzGKQxNQGn%2Fnm0wRvhBkkB06%2F9qx%2B8sOMlU3LXxahqFRRIdD8JwPBWevRc88wzpwe8yrfTAstqNjHCLeb9E2kV2dt66DST6yyD8QEIlqBrI6k6YwxpV%2BvE7iF8kbnD28wnkYSclq2p3kn60rXdFJdRQb5%2FJImVpqMeL6RTxGvTom1jgKAOfO5kvRIJ5j0q6KENg2JKzunIvUR%2F4WrqaGz6Uv%2B3muxDB%2FAdaaYmkvVzMOaFy2cw9WZn7FzDz14%2B%2BBjqkAf%2BWVezFRZCFq6wt7y4WYhGLGz2CaIcWY9rHZ83X6hGHikN504UvvTqPVEoQVdzrXCPed2jQo%2BJKOQ%2BVwZh%2F4RNnL6s%2F2rH0ngl4gnOyWNSYOx61cLvcoLeI756ZkaXLc16d3VYDfIdhwCr4zamvJwF%2Bp%2BHR3ZiNeJOXk8LC1ysSa2AyfbC2Q%2FqAF%2F%2Fu27PQQcyWNK%2FweC0F09mc8iItpS3ri34m&X-Amz-Signature=77c639ce1b492247dd84926031273720f164bfd0203317382c3b5dc5bc812551&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OC3VS4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCkhuf0Bj26fkMorKVBYutktPcLADFrpQ%2FwF3srDlxdfwIhAINiPbSD5wsOemvGKyikGpKXl8MEM%2B%2FnEQ%2FYPjYTnpY0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZDBzlZc7ZIjxT98Yq3AOXMx4nohzwdCL9wtnHF11kofW6WygvnkuRTbwNMf0mVyqiKBRTf15y24Eb3IUN%2FnxVgmu5OgvYk2%2FL71tLgc8rjikGglbJ%2Fz7SHEPAtCae32SmG1adof906LpFa3YYbcev9dTWgWAt%2BSiTQJlLleR%2FgyFgh%2BYxrie9etq5J34e7X03I%2FMc44n5sVRysA9DpCRjADXL3QD7OdY0cZjbvWfyh%2BQN3ugOfPvAx3k05NeTUT1fV9kjWLwpEXuwGuZvapwmff1YzVoEzIfmIV0c7hMBVUDsRbMT1vSO1K%2FVloCd3Pi1UXZ7tqyu6wxdVnf2MSogVWmxZKJ%2FwoVcEbhoRlf3GhHbfSrA%2FBhTDa38pAaQTLrFV9LK8%2F3VrQiGU9HrJGLsaAzGKQxNQGn%2Fnm0wRvhBkkB06%2F9qx%2B8sOMlU3LXxahqFRRIdD8JwPBWevRc88wzpwe8yrfTAstqNjHCLeb9E2kV2dt66DST6yyD8QEIlqBrI6k6YwxpV%2BvE7iF8kbnD28wnkYSclq2p3kn60rXdFJdRQb5%2FJImVpqMeL6RTxGvTom1jgKAOfO5kvRIJ5j0q6KENg2JKzunIvUR%2F4WrqaGz6Uv%2B3muxDB%2FAdaaYmkvVzMOaFy2cw9WZn7FzDz14%2B%2BBjqkAf%2BWVezFRZCFq6wt7y4WYhGLGz2CaIcWY9rHZ83X6hGHikN504UvvTqPVEoQVdzrXCPed2jQo%2BJKOQ%2BVwZh%2F4RNnL6s%2F2rH0ngl4gnOyWNSYOx61cLvcoLeI756ZkaXLc16d3VYDfIdhwCr4zamvJwF%2Bp%2BHR3ZiNeJOXk8LC1ysSa2AyfbC2Q%2FqAF%2F%2Fu27PQQcyWNK%2FweC0F09mc8iItpS3ri34m&X-Amz-Signature=453aae25c8055a4f9c86514dcc5d892db0e63ce8a83df6f8f3bcd4848a34ecec&X-Amz-SignedHeaders=host&x-id=GetObject)
