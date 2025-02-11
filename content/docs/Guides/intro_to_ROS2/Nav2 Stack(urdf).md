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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX5C4UK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicBAyj5KgK0K38V%2FYz7oJfBb5YLIrrMOhLgV%2F0S0%2FtQIhAIpSid8372Yq5AKW9kgO9zoIi%2BOtK%2FsWWjYePx%2BCS3bDKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIhXdv9s8DLhaOl3Iq3AOW%2Bw65H16ia5XC88aHUyGlfNrkxEv2oF%2BcAOBdCoDutD54HQPy%2FylDeE67G3C3YvgPn3fHk9TEMbc5x93Nwwk61sbdf4oG4e6WkgzgVPShJ%2FVXfq93w1Le9xyRWBLBbre8zh5uJjI2KxeG1INjA1bST5vuzv1U3qEQRS%2B9KPamFXTKxi3gEPNxK2UVX1R%2F4ymk7lOEOSs96Jxg%2BgxLi5rrMTAW0EMd90wbvY8bkEWTwDhPcNm2AdBhp5s7%2Bj9wHB8h67Z42G7ahuUzNTnZiHsWLbWEOEQ%2F6JNrqLhCJay0cfNPI1VynvEe9n0RvgvPEHnzR6Sf7rMhWV%2FsKy%2FXIlQqC3WZlbkpuLZjBxHNwSMEeefIHJ1grmn6ATLb8BFzgB64CNxRVaIh9S4YxR1cZQL1i3v%2F6b1%2BWv9Ivqs7J4lAtfyIvMUmRJFiAEVSNHHTOXRBhh3CR6yzC4dxnKQx2KVIY%2B0%2Fh%2F6Qki7bVG6nTJZRqtCCW5XIHisMI%2FvZA%2FdVcPywqRxgp%2BwUXHdG2kp%2FDRGSd4mYe4lLWAYrDxmS4VxRmIOXhPecD7TDKiXRi3587Rq%2FqwaehF23jQV9o9PzKL%2BTlKgw2XRKtx%2BpVEBlT%2FWYNDPAETIfU0ko8uSFBjDtsqq9BjqkASfylQs2yXk0VRf%2B33YvYsnrChoWMxDsYi6pGxVL3f5RjUkbPr4ENZqQ2y5OAHOuJ1n%2FTnKJ85nU%2FfwNf4gtdTEEIYEMoAAuHS8EaGZqEUlhiVP2Vk1DBP%2FvXkp2tgOUZfT%2BAIQu7mRmuUdqldHkdeRjN%2BKOmAJFS53r6FhezpB%2BsZPQkJQdPn%2BmpxKqvDNjDQwjkV8i6%2BtFgRUJAnv%2BQL7Q8V6d&X-Amz-Signature=491e8a2ba4332e1b3965e21a4a45de7579886291bd6aa3f4f52d35ba45f1629c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX5C4UK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicBAyj5KgK0K38V%2FYz7oJfBb5YLIrrMOhLgV%2F0S0%2FtQIhAIpSid8372Yq5AKW9kgO9zoIi%2BOtK%2FsWWjYePx%2BCS3bDKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIhXdv9s8DLhaOl3Iq3AOW%2Bw65H16ia5XC88aHUyGlfNrkxEv2oF%2BcAOBdCoDutD54HQPy%2FylDeE67G3C3YvgPn3fHk9TEMbc5x93Nwwk61sbdf4oG4e6WkgzgVPShJ%2FVXfq93w1Le9xyRWBLBbre8zh5uJjI2KxeG1INjA1bST5vuzv1U3qEQRS%2B9KPamFXTKxi3gEPNxK2UVX1R%2F4ymk7lOEOSs96Jxg%2BgxLi5rrMTAW0EMd90wbvY8bkEWTwDhPcNm2AdBhp5s7%2Bj9wHB8h67Z42G7ahuUzNTnZiHsWLbWEOEQ%2F6JNrqLhCJay0cfNPI1VynvEe9n0RvgvPEHnzR6Sf7rMhWV%2FsKy%2FXIlQqC3WZlbkpuLZjBxHNwSMEeefIHJ1grmn6ATLb8BFzgB64CNxRVaIh9S4YxR1cZQL1i3v%2F6b1%2BWv9Ivqs7J4lAtfyIvMUmRJFiAEVSNHHTOXRBhh3CR6yzC4dxnKQx2KVIY%2B0%2Fh%2F6Qki7bVG6nTJZRqtCCW5XIHisMI%2FvZA%2FdVcPywqRxgp%2BwUXHdG2kp%2FDRGSd4mYe4lLWAYrDxmS4VxRmIOXhPecD7TDKiXRi3587Rq%2FqwaehF23jQV9o9PzKL%2BTlKgw2XRKtx%2BpVEBlT%2FWYNDPAETIfU0ko8uSFBjDtsqq9BjqkASfylQs2yXk0VRf%2B33YvYsnrChoWMxDsYi6pGxVL3f5RjUkbPr4ENZqQ2y5OAHOuJ1n%2FTnKJ85nU%2FfwNf4gtdTEEIYEMoAAuHS8EaGZqEUlhiVP2Vk1DBP%2FvXkp2tgOUZfT%2BAIQu7mRmuUdqldHkdeRjN%2BKOmAJFS53r6FhezpB%2BsZPQkJQdPn%2BmpxKqvDNjDQwjkV8i6%2BtFgRUJAnv%2BQL7Q8V6d&X-Amz-Signature=cef333de1c72a6bdf5325db55ce4f132a591d05c7b6e8037034bb91f922830f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX5C4UK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicBAyj5KgK0K38V%2FYz7oJfBb5YLIrrMOhLgV%2F0S0%2FtQIhAIpSid8372Yq5AKW9kgO9zoIi%2BOtK%2FsWWjYePx%2BCS3bDKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIhXdv9s8DLhaOl3Iq3AOW%2Bw65H16ia5XC88aHUyGlfNrkxEv2oF%2BcAOBdCoDutD54HQPy%2FylDeE67G3C3YvgPn3fHk9TEMbc5x93Nwwk61sbdf4oG4e6WkgzgVPShJ%2FVXfq93w1Le9xyRWBLBbre8zh5uJjI2KxeG1INjA1bST5vuzv1U3qEQRS%2B9KPamFXTKxi3gEPNxK2UVX1R%2F4ymk7lOEOSs96Jxg%2BgxLi5rrMTAW0EMd90wbvY8bkEWTwDhPcNm2AdBhp5s7%2Bj9wHB8h67Z42G7ahuUzNTnZiHsWLbWEOEQ%2F6JNrqLhCJay0cfNPI1VynvEe9n0RvgvPEHnzR6Sf7rMhWV%2FsKy%2FXIlQqC3WZlbkpuLZjBxHNwSMEeefIHJ1grmn6ATLb8BFzgB64CNxRVaIh9S4YxR1cZQL1i3v%2F6b1%2BWv9Ivqs7J4lAtfyIvMUmRJFiAEVSNHHTOXRBhh3CR6yzC4dxnKQx2KVIY%2B0%2Fh%2F6Qki7bVG6nTJZRqtCCW5XIHisMI%2FvZA%2FdVcPywqRxgp%2BwUXHdG2kp%2FDRGSd4mYe4lLWAYrDxmS4VxRmIOXhPecD7TDKiXRi3587Rq%2FqwaehF23jQV9o9PzKL%2BTlKgw2XRKtx%2BpVEBlT%2FWYNDPAETIfU0ko8uSFBjDtsqq9BjqkASfylQs2yXk0VRf%2B33YvYsnrChoWMxDsYi6pGxVL3f5RjUkbPr4ENZqQ2y5OAHOuJ1n%2FTnKJ85nU%2FfwNf4gtdTEEIYEMoAAuHS8EaGZqEUlhiVP2Vk1DBP%2FvXkp2tgOUZfT%2BAIQu7mRmuUdqldHkdeRjN%2BKOmAJFS53r6FhezpB%2BsZPQkJQdPn%2BmpxKqvDNjDQwjkV8i6%2BtFgRUJAnv%2BQL7Q8V6d&X-Amz-Signature=fd385f2a6d527b94a03db1bd90079504c539aa05bc7f38d8f144a953358fe2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX5C4UK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicBAyj5KgK0K38V%2FYz7oJfBb5YLIrrMOhLgV%2F0S0%2FtQIhAIpSid8372Yq5AKW9kgO9zoIi%2BOtK%2FsWWjYePx%2BCS3bDKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIhXdv9s8DLhaOl3Iq3AOW%2Bw65H16ia5XC88aHUyGlfNrkxEv2oF%2BcAOBdCoDutD54HQPy%2FylDeE67G3C3YvgPn3fHk9TEMbc5x93Nwwk61sbdf4oG4e6WkgzgVPShJ%2FVXfq93w1Le9xyRWBLBbre8zh5uJjI2KxeG1INjA1bST5vuzv1U3qEQRS%2B9KPamFXTKxi3gEPNxK2UVX1R%2F4ymk7lOEOSs96Jxg%2BgxLi5rrMTAW0EMd90wbvY8bkEWTwDhPcNm2AdBhp5s7%2Bj9wHB8h67Z42G7ahuUzNTnZiHsWLbWEOEQ%2F6JNrqLhCJay0cfNPI1VynvEe9n0RvgvPEHnzR6Sf7rMhWV%2FsKy%2FXIlQqC3WZlbkpuLZjBxHNwSMEeefIHJ1grmn6ATLb8BFzgB64CNxRVaIh9S4YxR1cZQL1i3v%2F6b1%2BWv9Ivqs7J4lAtfyIvMUmRJFiAEVSNHHTOXRBhh3CR6yzC4dxnKQx2KVIY%2B0%2Fh%2F6Qki7bVG6nTJZRqtCCW5XIHisMI%2FvZA%2FdVcPywqRxgp%2BwUXHdG2kp%2FDRGSd4mYe4lLWAYrDxmS4VxRmIOXhPecD7TDKiXRi3587Rq%2FqwaehF23jQV9o9PzKL%2BTlKgw2XRKtx%2BpVEBlT%2FWYNDPAETIfU0ko8uSFBjDtsqq9BjqkASfylQs2yXk0VRf%2B33YvYsnrChoWMxDsYi6pGxVL3f5RjUkbPr4ENZqQ2y5OAHOuJ1n%2FTnKJ85nU%2FfwNf4gtdTEEIYEMoAAuHS8EaGZqEUlhiVP2Vk1DBP%2FvXkp2tgOUZfT%2BAIQu7mRmuUdqldHkdeRjN%2BKOmAJFS53r6FhezpB%2BsZPQkJQdPn%2BmpxKqvDNjDQwjkV8i6%2BtFgRUJAnv%2BQL7Q8V6d&X-Amz-Signature=6455b63664654a6aec792dc60e98b1407ad3be8fd5b5a5d297133acb889b82e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX5C4UK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicBAyj5KgK0K38V%2FYz7oJfBb5YLIrrMOhLgV%2F0S0%2FtQIhAIpSid8372Yq5AKW9kgO9zoIi%2BOtK%2FsWWjYePx%2BCS3bDKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIhXdv9s8DLhaOl3Iq3AOW%2Bw65H16ia5XC88aHUyGlfNrkxEv2oF%2BcAOBdCoDutD54HQPy%2FylDeE67G3C3YvgPn3fHk9TEMbc5x93Nwwk61sbdf4oG4e6WkgzgVPShJ%2FVXfq93w1Le9xyRWBLBbre8zh5uJjI2KxeG1INjA1bST5vuzv1U3qEQRS%2B9KPamFXTKxi3gEPNxK2UVX1R%2F4ymk7lOEOSs96Jxg%2BgxLi5rrMTAW0EMd90wbvY8bkEWTwDhPcNm2AdBhp5s7%2Bj9wHB8h67Z42G7ahuUzNTnZiHsWLbWEOEQ%2F6JNrqLhCJay0cfNPI1VynvEe9n0RvgvPEHnzR6Sf7rMhWV%2FsKy%2FXIlQqC3WZlbkpuLZjBxHNwSMEeefIHJ1grmn6ATLb8BFzgB64CNxRVaIh9S4YxR1cZQL1i3v%2F6b1%2BWv9Ivqs7J4lAtfyIvMUmRJFiAEVSNHHTOXRBhh3CR6yzC4dxnKQx2KVIY%2B0%2Fh%2F6Qki7bVG6nTJZRqtCCW5XIHisMI%2FvZA%2FdVcPywqRxgp%2BwUXHdG2kp%2FDRGSd4mYe4lLWAYrDxmS4VxRmIOXhPecD7TDKiXRi3587Rq%2FqwaehF23jQV9o9PzKL%2BTlKgw2XRKtx%2BpVEBlT%2FWYNDPAETIfU0ko8uSFBjDtsqq9BjqkASfylQs2yXk0VRf%2B33YvYsnrChoWMxDsYi6pGxVL3f5RjUkbPr4ENZqQ2y5OAHOuJ1n%2FTnKJ85nU%2FfwNf4gtdTEEIYEMoAAuHS8EaGZqEUlhiVP2Vk1DBP%2FvXkp2tgOUZfT%2BAIQu7mRmuUdqldHkdeRjN%2BKOmAJFS53r6FhezpB%2BsZPQkJQdPn%2BmpxKqvDNjDQwjkV8i6%2BtFgRUJAnv%2BQL7Q8V6d&X-Amz-Signature=c651659e483c4d86378477e80e9585ab6534dd9af9a3995618804f666335f47e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX5C4UK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicBAyj5KgK0K38V%2FYz7oJfBb5YLIrrMOhLgV%2F0S0%2FtQIhAIpSid8372Yq5AKW9kgO9zoIi%2BOtK%2FsWWjYePx%2BCS3bDKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIhXdv9s8DLhaOl3Iq3AOW%2Bw65H16ia5XC88aHUyGlfNrkxEv2oF%2BcAOBdCoDutD54HQPy%2FylDeE67G3C3YvgPn3fHk9TEMbc5x93Nwwk61sbdf4oG4e6WkgzgVPShJ%2FVXfq93w1Le9xyRWBLBbre8zh5uJjI2KxeG1INjA1bST5vuzv1U3qEQRS%2B9KPamFXTKxi3gEPNxK2UVX1R%2F4ymk7lOEOSs96Jxg%2BgxLi5rrMTAW0EMd90wbvY8bkEWTwDhPcNm2AdBhp5s7%2Bj9wHB8h67Z42G7ahuUzNTnZiHsWLbWEOEQ%2F6JNrqLhCJay0cfNPI1VynvEe9n0RvgvPEHnzR6Sf7rMhWV%2FsKy%2FXIlQqC3WZlbkpuLZjBxHNwSMEeefIHJ1grmn6ATLb8BFzgB64CNxRVaIh9S4YxR1cZQL1i3v%2F6b1%2BWv9Ivqs7J4lAtfyIvMUmRJFiAEVSNHHTOXRBhh3CR6yzC4dxnKQx2KVIY%2B0%2Fh%2F6Qki7bVG6nTJZRqtCCW5XIHisMI%2FvZA%2FdVcPywqRxgp%2BwUXHdG2kp%2FDRGSd4mYe4lLWAYrDxmS4VxRmIOXhPecD7TDKiXRi3587Rq%2FqwaehF23jQV9o9PzKL%2BTlKgw2XRKtx%2BpVEBlT%2FWYNDPAETIfU0ko8uSFBjDtsqq9BjqkASfylQs2yXk0VRf%2B33YvYsnrChoWMxDsYi6pGxVL3f5RjUkbPr4ENZqQ2y5OAHOuJ1n%2FTnKJ85nU%2FfwNf4gtdTEEIYEMoAAuHS8EaGZqEUlhiVP2Vk1DBP%2FvXkp2tgOUZfT%2BAIQu7mRmuUdqldHkdeRjN%2BKOmAJFS53r6FhezpB%2BsZPQkJQdPn%2BmpxKqvDNjDQwjkV8i6%2BtFgRUJAnv%2BQL7Q8V6d&X-Amz-Signature=a446a6be503b33e22807c626c18f8852539e5a4f927c8381f4acd7c55aca8a2c&X-Amz-SignedHeaders=host&x-id=GetObject)
