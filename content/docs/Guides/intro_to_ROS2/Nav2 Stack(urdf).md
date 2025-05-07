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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQ34SK6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLGVtJdpn3Pessr6XHSnq52ygD5pqSXsYxKyFVRM2lwIhAPdBz8A8khzNJAIboRcs%2Bd9E4FFFWQWw25tEOxJ72S0lKv8DCFwQABoMNjM3NDIzMTgzODA1IgxCJ%2FLlIx2GSJzjJdQq3AOq9DUqO531TGDxjaXaTqWvoUwRXK4P%2Brza4pli8zBIINIvxN6dnokve9ZkN5ZELe6ksegme552hWxVG7wpnsVWz3aGji0BB7DtPCf9tXzZ51mdZZFjbxvt28Q%2BZGhwprizRE9mNVduzO6OitgolHs7%2B74WHLhAf184b3BxD%2B4wi7JMkBgRZfMZB80Ckm8HPRkqN0T9vSdO1IsRMv0Bg%2F04ca8wUgFMxUMaFgM%2FhlXAA%2BTXUSZTboJmu%2BtPueMfCitZkM4E966tyrsx05b9GecJX%2Bs0Wim6%2Fzyhg3bPl6gwBx3lwUu7dFbyWK5p23EckjIy4OY5zTvnwPTJz4ulonrY9PFUGDj5xhQPMLWEgf2xED51YlCf4b95bqrtWkw1cz2%2BXjjKbYm9OYJXHxSn%2FbRwue7EdFx%2FewiUyRE%2Fu5B3IU%2BjG6oisMBI4e%2BIPXPkQNM4oNAu2F444AHQ0nxXT4%2BgRctx66ALeOAsoSmBmxLvh3dsiPld7Tdt%2FvwWBWgwb%2FhuYqdU3J3jv43I1K%2F9ErJBCL2UdrZeR%2FGUn5V%2BHAFpWJweIOmSgxaJyJghYZX%2F1xmBr6u%2Bg7ZBTGciyYW98ZSUgg7e6fV4bKh62el5O09%2BmJ5cDTK%2BC31GdUH%2BzzD%2B8%2BzABjqkAWK0bIarSGGB1hWG3dqMcuXafbFyIxaSCf%2Fv6tG2wGcaTtk6X7JSOABxHj1xQuVIVhHmhQJQvlRRpWGTpeAb3yLBSmHVzaowzO7yaZUeTygiPXmqJ%2FpOWXa6PB%2FhUei6StxRdGC%2FRbFMlnzi2ohuHe%2BIGw5i0RHBr8loGV1TyPQggvLu52HbSmgbwOJ0lHh8sbv1l9ksRNy4o%2FSPE5SzpuVf6szf&X-Amz-Signature=4ffe94461188fd8e7320a43e02836f9999996cfa781d0f5e89747faf0728f73c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQ34SK6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLGVtJdpn3Pessr6XHSnq52ygD5pqSXsYxKyFVRM2lwIhAPdBz8A8khzNJAIboRcs%2Bd9E4FFFWQWw25tEOxJ72S0lKv8DCFwQABoMNjM3NDIzMTgzODA1IgxCJ%2FLlIx2GSJzjJdQq3AOq9DUqO531TGDxjaXaTqWvoUwRXK4P%2Brza4pli8zBIINIvxN6dnokve9ZkN5ZELe6ksegme552hWxVG7wpnsVWz3aGji0BB7DtPCf9tXzZ51mdZZFjbxvt28Q%2BZGhwprizRE9mNVduzO6OitgolHs7%2B74WHLhAf184b3BxD%2B4wi7JMkBgRZfMZB80Ckm8HPRkqN0T9vSdO1IsRMv0Bg%2F04ca8wUgFMxUMaFgM%2FhlXAA%2BTXUSZTboJmu%2BtPueMfCitZkM4E966tyrsx05b9GecJX%2Bs0Wim6%2Fzyhg3bPl6gwBx3lwUu7dFbyWK5p23EckjIy4OY5zTvnwPTJz4ulonrY9PFUGDj5xhQPMLWEgf2xED51YlCf4b95bqrtWkw1cz2%2BXjjKbYm9OYJXHxSn%2FbRwue7EdFx%2FewiUyRE%2Fu5B3IU%2BjG6oisMBI4e%2BIPXPkQNM4oNAu2F444AHQ0nxXT4%2BgRctx66ALeOAsoSmBmxLvh3dsiPld7Tdt%2FvwWBWgwb%2FhuYqdU3J3jv43I1K%2F9ErJBCL2UdrZeR%2FGUn5V%2BHAFpWJweIOmSgxaJyJghYZX%2F1xmBr6u%2Bg7ZBTGciyYW98ZSUgg7e6fV4bKh62el5O09%2BmJ5cDTK%2BC31GdUH%2BzzD%2B8%2BzABjqkAWK0bIarSGGB1hWG3dqMcuXafbFyIxaSCf%2Fv6tG2wGcaTtk6X7JSOABxHj1xQuVIVhHmhQJQvlRRpWGTpeAb3yLBSmHVzaowzO7yaZUeTygiPXmqJ%2FpOWXa6PB%2FhUei6StxRdGC%2FRbFMlnzi2ohuHe%2BIGw5i0RHBr8loGV1TyPQggvLu52HbSmgbwOJ0lHh8sbv1l9ksRNy4o%2FSPE5SzpuVf6szf&X-Amz-Signature=3b6cd6be748299e3dd867b56303dccbe8eb9cdaf45bba042f020a27e3a69d8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQ34SK6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLGVtJdpn3Pessr6XHSnq52ygD5pqSXsYxKyFVRM2lwIhAPdBz8A8khzNJAIboRcs%2Bd9E4FFFWQWw25tEOxJ72S0lKv8DCFwQABoMNjM3NDIzMTgzODA1IgxCJ%2FLlIx2GSJzjJdQq3AOq9DUqO531TGDxjaXaTqWvoUwRXK4P%2Brza4pli8zBIINIvxN6dnokve9ZkN5ZELe6ksegme552hWxVG7wpnsVWz3aGji0BB7DtPCf9tXzZ51mdZZFjbxvt28Q%2BZGhwprizRE9mNVduzO6OitgolHs7%2B74WHLhAf184b3BxD%2B4wi7JMkBgRZfMZB80Ckm8HPRkqN0T9vSdO1IsRMv0Bg%2F04ca8wUgFMxUMaFgM%2FhlXAA%2BTXUSZTboJmu%2BtPueMfCitZkM4E966tyrsx05b9GecJX%2Bs0Wim6%2Fzyhg3bPl6gwBx3lwUu7dFbyWK5p23EckjIy4OY5zTvnwPTJz4ulonrY9PFUGDj5xhQPMLWEgf2xED51YlCf4b95bqrtWkw1cz2%2BXjjKbYm9OYJXHxSn%2FbRwue7EdFx%2FewiUyRE%2Fu5B3IU%2BjG6oisMBI4e%2BIPXPkQNM4oNAu2F444AHQ0nxXT4%2BgRctx66ALeOAsoSmBmxLvh3dsiPld7Tdt%2FvwWBWgwb%2FhuYqdU3J3jv43I1K%2F9ErJBCL2UdrZeR%2FGUn5V%2BHAFpWJweIOmSgxaJyJghYZX%2F1xmBr6u%2Bg7ZBTGciyYW98ZSUgg7e6fV4bKh62el5O09%2BmJ5cDTK%2BC31GdUH%2BzzD%2B8%2BzABjqkAWK0bIarSGGB1hWG3dqMcuXafbFyIxaSCf%2Fv6tG2wGcaTtk6X7JSOABxHj1xQuVIVhHmhQJQvlRRpWGTpeAb3yLBSmHVzaowzO7yaZUeTygiPXmqJ%2FpOWXa6PB%2FhUei6StxRdGC%2FRbFMlnzi2ohuHe%2BIGw5i0RHBr8loGV1TyPQggvLu52HbSmgbwOJ0lHh8sbv1l9ksRNy4o%2FSPE5SzpuVf6szf&X-Amz-Signature=aac62f60f142bcc112fcf93da9d0175ad1bc3da209301c90ce350f561b7fa4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQ34SK6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLGVtJdpn3Pessr6XHSnq52ygD5pqSXsYxKyFVRM2lwIhAPdBz8A8khzNJAIboRcs%2Bd9E4FFFWQWw25tEOxJ72S0lKv8DCFwQABoMNjM3NDIzMTgzODA1IgxCJ%2FLlIx2GSJzjJdQq3AOq9DUqO531TGDxjaXaTqWvoUwRXK4P%2Brza4pli8zBIINIvxN6dnokve9ZkN5ZELe6ksegme552hWxVG7wpnsVWz3aGji0BB7DtPCf9tXzZ51mdZZFjbxvt28Q%2BZGhwprizRE9mNVduzO6OitgolHs7%2B74WHLhAf184b3BxD%2B4wi7JMkBgRZfMZB80Ckm8HPRkqN0T9vSdO1IsRMv0Bg%2F04ca8wUgFMxUMaFgM%2FhlXAA%2BTXUSZTboJmu%2BtPueMfCitZkM4E966tyrsx05b9GecJX%2Bs0Wim6%2Fzyhg3bPl6gwBx3lwUu7dFbyWK5p23EckjIy4OY5zTvnwPTJz4ulonrY9PFUGDj5xhQPMLWEgf2xED51YlCf4b95bqrtWkw1cz2%2BXjjKbYm9OYJXHxSn%2FbRwue7EdFx%2FewiUyRE%2Fu5B3IU%2BjG6oisMBI4e%2BIPXPkQNM4oNAu2F444AHQ0nxXT4%2BgRctx66ALeOAsoSmBmxLvh3dsiPld7Tdt%2FvwWBWgwb%2FhuYqdU3J3jv43I1K%2F9ErJBCL2UdrZeR%2FGUn5V%2BHAFpWJweIOmSgxaJyJghYZX%2F1xmBr6u%2Bg7ZBTGciyYW98ZSUgg7e6fV4bKh62el5O09%2BmJ5cDTK%2BC31GdUH%2BzzD%2B8%2BzABjqkAWK0bIarSGGB1hWG3dqMcuXafbFyIxaSCf%2Fv6tG2wGcaTtk6X7JSOABxHj1xQuVIVhHmhQJQvlRRpWGTpeAb3yLBSmHVzaowzO7yaZUeTygiPXmqJ%2FpOWXa6PB%2FhUei6StxRdGC%2FRbFMlnzi2ohuHe%2BIGw5i0RHBr8loGV1TyPQggvLu52HbSmgbwOJ0lHh8sbv1l9ksRNy4o%2FSPE5SzpuVf6szf&X-Amz-Signature=42be150aff52b1f8d85dc96bd474d5ddd2eff42cb255209b41347efa0f6ea7c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQ34SK6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLGVtJdpn3Pessr6XHSnq52ygD5pqSXsYxKyFVRM2lwIhAPdBz8A8khzNJAIboRcs%2Bd9E4FFFWQWw25tEOxJ72S0lKv8DCFwQABoMNjM3NDIzMTgzODA1IgxCJ%2FLlIx2GSJzjJdQq3AOq9DUqO531TGDxjaXaTqWvoUwRXK4P%2Brza4pli8zBIINIvxN6dnokve9ZkN5ZELe6ksegme552hWxVG7wpnsVWz3aGji0BB7DtPCf9tXzZ51mdZZFjbxvt28Q%2BZGhwprizRE9mNVduzO6OitgolHs7%2B74WHLhAf184b3BxD%2B4wi7JMkBgRZfMZB80Ckm8HPRkqN0T9vSdO1IsRMv0Bg%2F04ca8wUgFMxUMaFgM%2FhlXAA%2BTXUSZTboJmu%2BtPueMfCitZkM4E966tyrsx05b9GecJX%2Bs0Wim6%2Fzyhg3bPl6gwBx3lwUu7dFbyWK5p23EckjIy4OY5zTvnwPTJz4ulonrY9PFUGDj5xhQPMLWEgf2xED51YlCf4b95bqrtWkw1cz2%2BXjjKbYm9OYJXHxSn%2FbRwue7EdFx%2FewiUyRE%2Fu5B3IU%2BjG6oisMBI4e%2BIPXPkQNM4oNAu2F444AHQ0nxXT4%2BgRctx66ALeOAsoSmBmxLvh3dsiPld7Tdt%2FvwWBWgwb%2FhuYqdU3J3jv43I1K%2F9ErJBCL2UdrZeR%2FGUn5V%2BHAFpWJweIOmSgxaJyJghYZX%2F1xmBr6u%2Bg7ZBTGciyYW98ZSUgg7e6fV4bKh62el5O09%2BmJ5cDTK%2BC31GdUH%2BzzD%2B8%2BzABjqkAWK0bIarSGGB1hWG3dqMcuXafbFyIxaSCf%2Fv6tG2wGcaTtk6X7JSOABxHj1xQuVIVhHmhQJQvlRRpWGTpeAb3yLBSmHVzaowzO7yaZUeTygiPXmqJ%2FpOWXa6PB%2FhUei6StxRdGC%2FRbFMlnzi2ohuHe%2BIGw5i0RHBr8loGV1TyPQggvLu52HbSmgbwOJ0lHh8sbv1l9ksRNy4o%2FSPE5SzpuVf6szf&X-Amz-Signature=79ce8a3e041717e050f1c33e05e0c52cb93b4c8c9dd0d66d288601550ddcf808&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQ34SK6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLGVtJdpn3Pessr6XHSnq52ygD5pqSXsYxKyFVRM2lwIhAPdBz8A8khzNJAIboRcs%2Bd9E4FFFWQWw25tEOxJ72S0lKv8DCFwQABoMNjM3NDIzMTgzODA1IgxCJ%2FLlIx2GSJzjJdQq3AOq9DUqO531TGDxjaXaTqWvoUwRXK4P%2Brza4pli8zBIINIvxN6dnokve9ZkN5ZELe6ksegme552hWxVG7wpnsVWz3aGji0BB7DtPCf9tXzZ51mdZZFjbxvt28Q%2BZGhwprizRE9mNVduzO6OitgolHs7%2B74WHLhAf184b3BxD%2B4wi7JMkBgRZfMZB80Ckm8HPRkqN0T9vSdO1IsRMv0Bg%2F04ca8wUgFMxUMaFgM%2FhlXAA%2BTXUSZTboJmu%2BtPueMfCitZkM4E966tyrsx05b9GecJX%2Bs0Wim6%2Fzyhg3bPl6gwBx3lwUu7dFbyWK5p23EckjIy4OY5zTvnwPTJz4ulonrY9PFUGDj5xhQPMLWEgf2xED51YlCf4b95bqrtWkw1cz2%2BXjjKbYm9OYJXHxSn%2FbRwue7EdFx%2FewiUyRE%2Fu5B3IU%2BjG6oisMBI4e%2BIPXPkQNM4oNAu2F444AHQ0nxXT4%2BgRctx66ALeOAsoSmBmxLvh3dsiPld7Tdt%2FvwWBWgwb%2FhuYqdU3J3jv43I1K%2F9ErJBCL2UdrZeR%2FGUn5V%2BHAFpWJweIOmSgxaJyJghYZX%2F1xmBr6u%2Bg7ZBTGciyYW98ZSUgg7e6fV4bKh62el5O09%2BmJ5cDTK%2BC31GdUH%2BzzD%2B8%2BzABjqkAWK0bIarSGGB1hWG3dqMcuXafbFyIxaSCf%2Fv6tG2wGcaTtk6X7JSOABxHj1xQuVIVhHmhQJQvlRRpWGTpeAb3yLBSmHVzaowzO7yaZUeTygiPXmqJ%2FpOWXa6PB%2FhUei6StxRdGC%2FRbFMlnzi2ohuHe%2BIGw5i0RHBr8loGV1TyPQggvLu52HbSmgbwOJ0lHh8sbv1l9ksRNy4o%2FSPE5SzpuVf6szf&X-Amz-Signature=a65ba5ff3d663cc3b17cfd32fc420da3e561fa9c9494e0f17ab3f4e916a1d46b&X-Amz-SignedHeaders=host&x-id=GetObject)
