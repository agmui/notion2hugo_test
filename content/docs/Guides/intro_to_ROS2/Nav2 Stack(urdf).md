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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNPPPC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBJ7bPFYZPNRqmHhGsqT5DlMIBx0dXoG6vy6q%2BN6%2F1EhAiEAyTJm65Klr5RKzBb1IE1%2BdMk3XtS4IC%2FqSiMJZw7Anvsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGn4MH0gQYlyMRQZKSrcA8LrO%2FpLp7ZcYprhtG5mzM%2FnOCi%2BWNsmITy7%2FYO02s3KwGPzzd5U7ABl2Nh9ZYB2WvRMfvvMIOLRL%2B7%2FvvVNdrlboZaMuDNKcZ1L4IJiM9nyYp%2BM3wZNvwgGV%2F0ck9FtEXecJQLdd0RtEAJnUdBjsIpXkVKVlkyJhlQ1Bjlhy21m1Asft0vGx21cTYnEg3P2qanegBpLKFOgEJGF2uLGq86GOFMWRzEygE9wlUA3YQ68lZKXGMqvjDmJzCR1NrjUn68vgWHTPKkYSLYw%2Bt4I872Fd0HO1k6LG1LAGFdZYmI2GlHSi50LynlRykcq3z1kICJMdPSaVUb1OBjtvZR5CVU7pL4CDgy2ov4ICAfpEg92orcI2fVIH7lRrDI%2FTEilAfh4KBMDUL4i4UT4HeM%2FsrhvAbCbao%2BfkfD71Qt6Ln3xIVq6mTkXDyr5kFS4Xv2VHeqk9SC5mGBe308OIbZiGDvadQNmyZjWonddRs%2FNOrxYcX%2FsWljcM15RkZjd5RIX7h5lhfdQHn%2Fliovse7pYrhFWmiqskwHPVwRigfHN4ELacrNpi4M6zOTGm2cYRu5fS5GF01mddMveHRBrQC6Q0T1nCJxzMxhTRSnVWkUcbD6rmRFfbGiSLTEHvRFKML2%2F4sMGOqUBetPUg0A%2BFqwFO%2BpH89kuXkTm7vh6%2Btcr%2FWj%2BWB2ygrX7w5rcyftqZMirScBjXtNphksHrBllNLmL6i0C030VGyZEKl0OZUleJ7hMbdQkdf%2Fb71sWGgNb5cFvQmr0lpQ3G6m13JNQSGhVgMv8dSub%2Fy97fokYv5uXZcXXzvm4tEdXhC0ynRPMQFdyr%2Bg0j6nsPS5A3qlqZ4OXMtntYNtZe9%2BuMmWB&X-Amz-Signature=1637a2f50433807b50b86676a595aa873c5ea894a83ed962572d6a04db8732ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNPPPC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBJ7bPFYZPNRqmHhGsqT5DlMIBx0dXoG6vy6q%2BN6%2F1EhAiEAyTJm65Klr5RKzBb1IE1%2BdMk3XtS4IC%2FqSiMJZw7Anvsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGn4MH0gQYlyMRQZKSrcA8LrO%2FpLp7ZcYprhtG5mzM%2FnOCi%2BWNsmITy7%2FYO02s3KwGPzzd5U7ABl2Nh9ZYB2WvRMfvvMIOLRL%2B7%2FvvVNdrlboZaMuDNKcZ1L4IJiM9nyYp%2BM3wZNvwgGV%2F0ck9FtEXecJQLdd0RtEAJnUdBjsIpXkVKVlkyJhlQ1Bjlhy21m1Asft0vGx21cTYnEg3P2qanegBpLKFOgEJGF2uLGq86GOFMWRzEygE9wlUA3YQ68lZKXGMqvjDmJzCR1NrjUn68vgWHTPKkYSLYw%2Bt4I872Fd0HO1k6LG1LAGFdZYmI2GlHSi50LynlRykcq3z1kICJMdPSaVUb1OBjtvZR5CVU7pL4CDgy2ov4ICAfpEg92orcI2fVIH7lRrDI%2FTEilAfh4KBMDUL4i4UT4HeM%2FsrhvAbCbao%2BfkfD71Qt6Ln3xIVq6mTkXDyr5kFS4Xv2VHeqk9SC5mGBe308OIbZiGDvadQNmyZjWonddRs%2FNOrxYcX%2FsWljcM15RkZjd5RIX7h5lhfdQHn%2Fliovse7pYrhFWmiqskwHPVwRigfHN4ELacrNpi4M6zOTGm2cYRu5fS5GF01mddMveHRBrQC6Q0T1nCJxzMxhTRSnVWkUcbD6rmRFfbGiSLTEHvRFKML2%2F4sMGOqUBetPUg0A%2BFqwFO%2BpH89kuXkTm7vh6%2Btcr%2FWj%2BWB2ygrX7w5rcyftqZMirScBjXtNphksHrBllNLmL6i0C030VGyZEKl0OZUleJ7hMbdQkdf%2Fb71sWGgNb5cFvQmr0lpQ3G6m13JNQSGhVgMv8dSub%2Fy97fokYv5uXZcXXzvm4tEdXhC0ynRPMQFdyr%2Bg0j6nsPS5A3qlqZ4OXMtntYNtZe9%2BuMmWB&X-Amz-Signature=d29d5f6fc5b3109eef2e3b4f4867e711283a2a5693907fe4e944e6357409b967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNPPPC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBJ7bPFYZPNRqmHhGsqT5DlMIBx0dXoG6vy6q%2BN6%2F1EhAiEAyTJm65Klr5RKzBb1IE1%2BdMk3XtS4IC%2FqSiMJZw7Anvsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGn4MH0gQYlyMRQZKSrcA8LrO%2FpLp7ZcYprhtG5mzM%2FnOCi%2BWNsmITy7%2FYO02s3KwGPzzd5U7ABl2Nh9ZYB2WvRMfvvMIOLRL%2B7%2FvvVNdrlboZaMuDNKcZ1L4IJiM9nyYp%2BM3wZNvwgGV%2F0ck9FtEXecJQLdd0RtEAJnUdBjsIpXkVKVlkyJhlQ1Bjlhy21m1Asft0vGx21cTYnEg3P2qanegBpLKFOgEJGF2uLGq86GOFMWRzEygE9wlUA3YQ68lZKXGMqvjDmJzCR1NrjUn68vgWHTPKkYSLYw%2Bt4I872Fd0HO1k6LG1LAGFdZYmI2GlHSi50LynlRykcq3z1kICJMdPSaVUb1OBjtvZR5CVU7pL4CDgy2ov4ICAfpEg92orcI2fVIH7lRrDI%2FTEilAfh4KBMDUL4i4UT4HeM%2FsrhvAbCbao%2BfkfD71Qt6Ln3xIVq6mTkXDyr5kFS4Xv2VHeqk9SC5mGBe308OIbZiGDvadQNmyZjWonddRs%2FNOrxYcX%2FsWljcM15RkZjd5RIX7h5lhfdQHn%2Fliovse7pYrhFWmiqskwHPVwRigfHN4ELacrNpi4M6zOTGm2cYRu5fS5GF01mddMveHRBrQC6Q0T1nCJxzMxhTRSnVWkUcbD6rmRFfbGiSLTEHvRFKML2%2F4sMGOqUBetPUg0A%2BFqwFO%2BpH89kuXkTm7vh6%2Btcr%2FWj%2BWB2ygrX7w5rcyftqZMirScBjXtNphksHrBllNLmL6i0C030VGyZEKl0OZUleJ7hMbdQkdf%2Fb71sWGgNb5cFvQmr0lpQ3G6m13JNQSGhVgMv8dSub%2Fy97fokYv5uXZcXXzvm4tEdXhC0ynRPMQFdyr%2Bg0j6nsPS5A3qlqZ4OXMtntYNtZe9%2BuMmWB&X-Amz-Signature=8d63d4d952a702c434b5ebf85805e69bf26ac3408ac1781cc83fdb894ee4d1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNPPPC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBJ7bPFYZPNRqmHhGsqT5DlMIBx0dXoG6vy6q%2BN6%2F1EhAiEAyTJm65Klr5RKzBb1IE1%2BdMk3XtS4IC%2FqSiMJZw7Anvsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGn4MH0gQYlyMRQZKSrcA8LrO%2FpLp7ZcYprhtG5mzM%2FnOCi%2BWNsmITy7%2FYO02s3KwGPzzd5U7ABl2Nh9ZYB2WvRMfvvMIOLRL%2B7%2FvvVNdrlboZaMuDNKcZ1L4IJiM9nyYp%2BM3wZNvwgGV%2F0ck9FtEXecJQLdd0RtEAJnUdBjsIpXkVKVlkyJhlQ1Bjlhy21m1Asft0vGx21cTYnEg3P2qanegBpLKFOgEJGF2uLGq86GOFMWRzEygE9wlUA3YQ68lZKXGMqvjDmJzCR1NrjUn68vgWHTPKkYSLYw%2Bt4I872Fd0HO1k6LG1LAGFdZYmI2GlHSi50LynlRykcq3z1kICJMdPSaVUb1OBjtvZR5CVU7pL4CDgy2ov4ICAfpEg92orcI2fVIH7lRrDI%2FTEilAfh4KBMDUL4i4UT4HeM%2FsrhvAbCbao%2BfkfD71Qt6Ln3xIVq6mTkXDyr5kFS4Xv2VHeqk9SC5mGBe308OIbZiGDvadQNmyZjWonddRs%2FNOrxYcX%2FsWljcM15RkZjd5RIX7h5lhfdQHn%2Fliovse7pYrhFWmiqskwHPVwRigfHN4ELacrNpi4M6zOTGm2cYRu5fS5GF01mddMveHRBrQC6Q0T1nCJxzMxhTRSnVWkUcbD6rmRFfbGiSLTEHvRFKML2%2F4sMGOqUBetPUg0A%2BFqwFO%2BpH89kuXkTm7vh6%2Btcr%2FWj%2BWB2ygrX7w5rcyftqZMirScBjXtNphksHrBllNLmL6i0C030VGyZEKl0OZUleJ7hMbdQkdf%2Fb71sWGgNb5cFvQmr0lpQ3G6m13JNQSGhVgMv8dSub%2Fy97fokYv5uXZcXXzvm4tEdXhC0ynRPMQFdyr%2Bg0j6nsPS5A3qlqZ4OXMtntYNtZe9%2BuMmWB&X-Amz-Signature=2214c2158c8145e2ddb4cbe8ac091e5fb3ff123d684e23f13f3b0c8b890b4ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNPPPC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBJ7bPFYZPNRqmHhGsqT5DlMIBx0dXoG6vy6q%2BN6%2F1EhAiEAyTJm65Klr5RKzBb1IE1%2BdMk3XtS4IC%2FqSiMJZw7Anvsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGn4MH0gQYlyMRQZKSrcA8LrO%2FpLp7ZcYprhtG5mzM%2FnOCi%2BWNsmITy7%2FYO02s3KwGPzzd5U7ABl2Nh9ZYB2WvRMfvvMIOLRL%2B7%2FvvVNdrlboZaMuDNKcZ1L4IJiM9nyYp%2BM3wZNvwgGV%2F0ck9FtEXecJQLdd0RtEAJnUdBjsIpXkVKVlkyJhlQ1Bjlhy21m1Asft0vGx21cTYnEg3P2qanegBpLKFOgEJGF2uLGq86GOFMWRzEygE9wlUA3YQ68lZKXGMqvjDmJzCR1NrjUn68vgWHTPKkYSLYw%2Bt4I872Fd0HO1k6LG1LAGFdZYmI2GlHSi50LynlRykcq3z1kICJMdPSaVUb1OBjtvZR5CVU7pL4CDgy2ov4ICAfpEg92orcI2fVIH7lRrDI%2FTEilAfh4KBMDUL4i4UT4HeM%2FsrhvAbCbao%2BfkfD71Qt6Ln3xIVq6mTkXDyr5kFS4Xv2VHeqk9SC5mGBe308OIbZiGDvadQNmyZjWonddRs%2FNOrxYcX%2FsWljcM15RkZjd5RIX7h5lhfdQHn%2Fliovse7pYrhFWmiqskwHPVwRigfHN4ELacrNpi4M6zOTGm2cYRu5fS5GF01mddMveHRBrQC6Q0T1nCJxzMxhTRSnVWkUcbD6rmRFfbGiSLTEHvRFKML2%2F4sMGOqUBetPUg0A%2BFqwFO%2BpH89kuXkTm7vh6%2Btcr%2FWj%2BWB2ygrX7w5rcyftqZMirScBjXtNphksHrBllNLmL6i0C030VGyZEKl0OZUleJ7hMbdQkdf%2Fb71sWGgNb5cFvQmr0lpQ3G6m13JNQSGhVgMv8dSub%2Fy97fokYv5uXZcXXzvm4tEdXhC0ynRPMQFdyr%2Bg0j6nsPS5A3qlqZ4OXMtntYNtZe9%2BuMmWB&X-Amz-Signature=1aabc56152cf6bd28039d1dbf368aaf97d3849188fbde9c2c8fe01ebc3f0e412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNPPPC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBJ7bPFYZPNRqmHhGsqT5DlMIBx0dXoG6vy6q%2BN6%2F1EhAiEAyTJm65Klr5RKzBb1IE1%2BdMk3XtS4IC%2FqSiMJZw7Anvsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGn4MH0gQYlyMRQZKSrcA8LrO%2FpLp7ZcYprhtG5mzM%2FnOCi%2BWNsmITy7%2FYO02s3KwGPzzd5U7ABl2Nh9ZYB2WvRMfvvMIOLRL%2B7%2FvvVNdrlboZaMuDNKcZ1L4IJiM9nyYp%2BM3wZNvwgGV%2F0ck9FtEXecJQLdd0RtEAJnUdBjsIpXkVKVlkyJhlQ1Bjlhy21m1Asft0vGx21cTYnEg3P2qanegBpLKFOgEJGF2uLGq86GOFMWRzEygE9wlUA3YQ68lZKXGMqvjDmJzCR1NrjUn68vgWHTPKkYSLYw%2Bt4I872Fd0HO1k6LG1LAGFdZYmI2GlHSi50LynlRykcq3z1kICJMdPSaVUb1OBjtvZR5CVU7pL4CDgy2ov4ICAfpEg92orcI2fVIH7lRrDI%2FTEilAfh4KBMDUL4i4UT4HeM%2FsrhvAbCbao%2BfkfD71Qt6Ln3xIVq6mTkXDyr5kFS4Xv2VHeqk9SC5mGBe308OIbZiGDvadQNmyZjWonddRs%2FNOrxYcX%2FsWljcM15RkZjd5RIX7h5lhfdQHn%2Fliovse7pYrhFWmiqskwHPVwRigfHN4ELacrNpi4M6zOTGm2cYRu5fS5GF01mddMveHRBrQC6Q0T1nCJxzMxhTRSnVWkUcbD6rmRFfbGiSLTEHvRFKML2%2F4sMGOqUBetPUg0A%2BFqwFO%2BpH89kuXkTm7vh6%2Btcr%2FWj%2BWB2ygrX7w5rcyftqZMirScBjXtNphksHrBllNLmL6i0C030VGyZEKl0OZUleJ7hMbdQkdf%2Fb71sWGgNb5cFvQmr0lpQ3G6m13JNQSGhVgMv8dSub%2Fy97fokYv5uXZcXXzvm4tEdXhC0ynRPMQFdyr%2Bg0j6nsPS5A3qlqZ4OXMtntYNtZe9%2BuMmWB&X-Amz-Signature=4478968b2938ea613ff2a1277cebe5a546babef11928f9486ae0d2c9286340c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
