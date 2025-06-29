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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=dc7a50ed58f6dd34330a8f7cfdde35c0f6977af8730b87b4aac45efd0d22ef1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=de43c9c5b52fa2c863f3f8594e43050cc8587ebd135779b697e303b5a7b685a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=edac96100c8bc42e858eb643f4c3e9f0186d24eb0798c3b9f36dfdc5083c6ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=8d1f92b58b4e61c4ce33301a5930089a488fa1e078314b8d02f25a7e6dad8ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=9f1bbcf088b89752da59dddda24134a2e33d9beaf71983427729744c83846063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV7EKGV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoEC9xJ3EuLwvjuu9H3V7WvpWiMHZUZcQTtCeJFKcCHAiAXiwGXeCQ%2Be3%2FOgOh7gg4jl3VfZQ4OKCdn63DjAVnMtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMovr5kSZa92D3OnYGKtwDQPD3aa2EtCHUjTzBp4KPd4a7PxkfNJxV2d2aMCUPyx7rdHHsnWRSHYYw9AKdL6G9SM4GFe0%2FDDk1nP%2B9vGf0qTvqKEq6%2Fm4aiY1rrHnpXwQ%2Bsn8z%2Bw9kfIijAnGTqtupef0sjOo75uGzU58CdhiBowKEWTE6d7cXZwGEG1Z61gh9%2Bs15Y%2Fm3ZqsVrHwYDtHkKSp%2F8CGOZHNC%2Beo2EafoFVpCQEG4cRiL%2BeWFX6kOV7g%2F7b8wfKP9OZ0rfwcn%2Ba9eaPO%2BFBlj%2BQUCN3YTBgPa8d%2FHHfUMdGFSVBlMys04GXiKYDe4W3DXL4TAjau5KNWgqveQ34l6uPBJlVhtokFPnL7fkuI5dZMbCCv25tRo3fBHhRea%2BvFgb%2BqKT7STX6SX1AsFJRvfaC1fSSWSEC19D0v3FcbwZlKUmyomMJa0jEi%2FvJc59T%2BS%2BdmjS5Ro3Bcp6xAASNDoQsH5eq4EUVgKzCPEmJJwfQZzy4obIfP3Vs5a5KWDtHQFCiCLlMwwJSIPLKi0ZgqK0J2z26OBO%2Banl0UHbJtJtW9AfsmYV2NW0RdUtONqistIfL8yPtpsrUqkl5Nlq0yj32vtR64kLUKQYw0IbegAmEiQAUqU9x0FkhkZIgcez%2FXPJA7EackwsPSGwwY6pgEMjvfn5CJbVX%2FvdI%2Bvm85OBvje3mXS6gaMohS2%2Fy2EKMj23u9vcmIVX9TD7fGEgCODiDlR6V6rIK6AXZlN%2F1zYbXsepwI4uEa3f52Y5x%2FCTJNq53vV8hHHYMdTWFnt7KzFZrNsMFtUJ1XN2RjGA5wg4TDicGJKT6VcNLpgugMBiv9tMoHfVbI3VYy1sevDm35MlN6mWX3n3paSjS6qYsbrpm9w7Qw2&X-Amz-Signature=ca4580b6db240d19d845fdb86ec8bf30a8beb7db3f21eeeae586bedfcd549cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
