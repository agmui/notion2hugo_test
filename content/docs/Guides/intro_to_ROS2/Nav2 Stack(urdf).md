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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LZSBCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTZRTxiyT3WM%2BLasdSEaXey6cngcCQpLSagIf2H4Wd0QIgQvanCE3St7%2BrlLuDnTXdfxNUoi%2FF71g93jjMeS56KHgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk2jCcvqwANHMAnpSrcA9BoN6mYfGea1CpaTvb2kQ8JR%2Bl1qYVhAqGPiwMLuAWpuKy6er7%2BgS1GGyKD0rGFt0oGYybzTGR8a9lSXVgbJgMQsJlEa307MVVQK3v66%2FikRxaEcOLZDSNRMtnszT9tmhJ3HHivFJRvapuO4fzQ28E0CALW1Q2eJuQMVd4GLjmCyjQsAtjUYz3LqBOLpdWXEmxOqc%2BnwPrZZ9prIO9omgTwHbWiuMIGJG6fObRCP3AlCT58RQ2syZ9btQhpEeLhgZAaH5lDJeim6MEuglRNxPpTPQplu5Hrapa5djochw8lEhRWkcbgnmRXzx3wAFRxsXpbiEtWdk7TsBeD0ei6LatMjltQHRtBy6mzIyXTLNm9%2BrUuWclBO9WuBnyOcFsHxwxlRhkLz3NuSekiSN%2FTjRLe26KYEpDQu7tyjdCIjYJ%2FoZf6RPSmiJCCWEZ%2BOyrkBTph09BtGnkGIpiW65fqi8nPh0y8N1bVVu3iqAjZq2D7Gxd1OW1GzXqajTXGhZup%2BlzQUt1zirUvuQhpz%2FNSFSP4QGcv7Os5qjUoRRFzI3e%2BVd48nUwl7IasIMgXFf5Z8QOkH7GMn%2F7Qx1ojR8Wx4EGDm2efLuNORzmrJW89FcQIYykq6fhuAaiYZbDCMKnB1MIGOqUBoVak1SeSpX3%2B7gA0My6a0Nb28wciQQ6jNshBSVEi3ij2ocka%2F78iHOLXJlNwZJXNFJEpCvqfT0iiy3kRHILSENl%2FcnaQ0AvcePGgJtGSLFXnG0mVPVpwE%2BWE3NdznBsLQSndHEotHJrtDkI8x6tS2zvPzq%2Bd%2FRkrGkeBCjY5OhIv21BaVpTCtRAJpOL7hO6%2FCUBsMHgMD2ka7UHyaHrCT0Uw7PeP&X-Amz-Signature=4627b3f930236edcd7d868e222f5d7a89e06b4e4253cfa7778f087a20479ac45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LZSBCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTZRTxiyT3WM%2BLasdSEaXey6cngcCQpLSagIf2H4Wd0QIgQvanCE3St7%2BrlLuDnTXdfxNUoi%2FF71g93jjMeS56KHgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk2jCcvqwANHMAnpSrcA9BoN6mYfGea1CpaTvb2kQ8JR%2Bl1qYVhAqGPiwMLuAWpuKy6er7%2BgS1GGyKD0rGFt0oGYybzTGR8a9lSXVgbJgMQsJlEa307MVVQK3v66%2FikRxaEcOLZDSNRMtnszT9tmhJ3HHivFJRvapuO4fzQ28E0CALW1Q2eJuQMVd4GLjmCyjQsAtjUYz3LqBOLpdWXEmxOqc%2BnwPrZZ9prIO9omgTwHbWiuMIGJG6fObRCP3AlCT58RQ2syZ9btQhpEeLhgZAaH5lDJeim6MEuglRNxPpTPQplu5Hrapa5djochw8lEhRWkcbgnmRXzx3wAFRxsXpbiEtWdk7TsBeD0ei6LatMjltQHRtBy6mzIyXTLNm9%2BrUuWclBO9WuBnyOcFsHxwxlRhkLz3NuSekiSN%2FTjRLe26KYEpDQu7tyjdCIjYJ%2FoZf6RPSmiJCCWEZ%2BOyrkBTph09BtGnkGIpiW65fqi8nPh0y8N1bVVu3iqAjZq2D7Gxd1OW1GzXqajTXGhZup%2BlzQUt1zirUvuQhpz%2FNSFSP4QGcv7Os5qjUoRRFzI3e%2BVd48nUwl7IasIMgXFf5Z8QOkH7GMn%2F7Qx1ojR8Wx4EGDm2efLuNORzmrJW89FcQIYykq6fhuAaiYZbDCMKnB1MIGOqUBoVak1SeSpX3%2B7gA0My6a0Nb28wciQQ6jNshBSVEi3ij2ocka%2F78iHOLXJlNwZJXNFJEpCvqfT0iiy3kRHILSENl%2FcnaQ0AvcePGgJtGSLFXnG0mVPVpwE%2BWE3NdznBsLQSndHEotHJrtDkI8x6tS2zvPzq%2Bd%2FRkrGkeBCjY5OhIv21BaVpTCtRAJpOL7hO6%2FCUBsMHgMD2ka7UHyaHrCT0Uw7PeP&X-Amz-Signature=dd2df7781dae846c20e09681032227c526025f16d847f310a938335c62d90c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LZSBCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTZRTxiyT3WM%2BLasdSEaXey6cngcCQpLSagIf2H4Wd0QIgQvanCE3St7%2BrlLuDnTXdfxNUoi%2FF71g93jjMeS56KHgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk2jCcvqwANHMAnpSrcA9BoN6mYfGea1CpaTvb2kQ8JR%2Bl1qYVhAqGPiwMLuAWpuKy6er7%2BgS1GGyKD0rGFt0oGYybzTGR8a9lSXVgbJgMQsJlEa307MVVQK3v66%2FikRxaEcOLZDSNRMtnszT9tmhJ3HHivFJRvapuO4fzQ28E0CALW1Q2eJuQMVd4GLjmCyjQsAtjUYz3LqBOLpdWXEmxOqc%2BnwPrZZ9prIO9omgTwHbWiuMIGJG6fObRCP3AlCT58RQ2syZ9btQhpEeLhgZAaH5lDJeim6MEuglRNxPpTPQplu5Hrapa5djochw8lEhRWkcbgnmRXzx3wAFRxsXpbiEtWdk7TsBeD0ei6LatMjltQHRtBy6mzIyXTLNm9%2BrUuWclBO9WuBnyOcFsHxwxlRhkLz3NuSekiSN%2FTjRLe26KYEpDQu7tyjdCIjYJ%2FoZf6RPSmiJCCWEZ%2BOyrkBTph09BtGnkGIpiW65fqi8nPh0y8N1bVVu3iqAjZq2D7Gxd1OW1GzXqajTXGhZup%2BlzQUt1zirUvuQhpz%2FNSFSP4QGcv7Os5qjUoRRFzI3e%2BVd48nUwl7IasIMgXFf5Z8QOkH7GMn%2F7Qx1ojR8Wx4EGDm2efLuNORzmrJW89FcQIYykq6fhuAaiYZbDCMKnB1MIGOqUBoVak1SeSpX3%2B7gA0My6a0Nb28wciQQ6jNshBSVEi3ij2ocka%2F78iHOLXJlNwZJXNFJEpCvqfT0iiy3kRHILSENl%2FcnaQ0AvcePGgJtGSLFXnG0mVPVpwE%2BWE3NdznBsLQSndHEotHJrtDkI8x6tS2zvPzq%2Bd%2FRkrGkeBCjY5OhIv21BaVpTCtRAJpOL7hO6%2FCUBsMHgMD2ka7UHyaHrCT0Uw7PeP&X-Amz-Signature=139838e50d760e36a66c3d99435ebb0cb5e6f144d214395413a70f4ea6c273fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LZSBCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTZRTxiyT3WM%2BLasdSEaXey6cngcCQpLSagIf2H4Wd0QIgQvanCE3St7%2BrlLuDnTXdfxNUoi%2FF71g93jjMeS56KHgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk2jCcvqwANHMAnpSrcA9BoN6mYfGea1CpaTvb2kQ8JR%2Bl1qYVhAqGPiwMLuAWpuKy6er7%2BgS1GGyKD0rGFt0oGYybzTGR8a9lSXVgbJgMQsJlEa307MVVQK3v66%2FikRxaEcOLZDSNRMtnszT9tmhJ3HHivFJRvapuO4fzQ28E0CALW1Q2eJuQMVd4GLjmCyjQsAtjUYz3LqBOLpdWXEmxOqc%2BnwPrZZ9prIO9omgTwHbWiuMIGJG6fObRCP3AlCT58RQ2syZ9btQhpEeLhgZAaH5lDJeim6MEuglRNxPpTPQplu5Hrapa5djochw8lEhRWkcbgnmRXzx3wAFRxsXpbiEtWdk7TsBeD0ei6LatMjltQHRtBy6mzIyXTLNm9%2BrUuWclBO9WuBnyOcFsHxwxlRhkLz3NuSekiSN%2FTjRLe26KYEpDQu7tyjdCIjYJ%2FoZf6RPSmiJCCWEZ%2BOyrkBTph09BtGnkGIpiW65fqi8nPh0y8N1bVVu3iqAjZq2D7Gxd1OW1GzXqajTXGhZup%2BlzQUt1zirUvuQhpz%2FNSFSP4QGcv7Os5qjUoRRFzI3e%2BVd48nUwl7IasIMgXFf5Z8QOkH7GMn%2F7Qx1ojR8Wx4EGDm2efLuNORzmrJW89FcQIYykq6fhuAaiYZbDCMKnB1MIGOqUBoVak1SeSpX3%2B7gA0My6a0Nb28wciQQ6jNshBSVEi3ij2ocka%2F78iHOLXJlNwZJXNFJEpCvqfT0iiy3kRHILSENl%2FcnaQ0AvcePGgJtGSLFXnG0mVPVpwE%2BWE3NdznBsLQSndHEotHJrtDkI8x6tS2zvPzq%2Bd%2FRkrGkeBCjY5OhIv21BaVpTCtRAJpOL7hO6%2FCUBsMHgMD2ka7UHyaHrCT0Uw7PeP&X-Amz-Signature=45f4bfaf1096669d0be40cb55d7e92b45b79fe3c0dfcffd4eec777c2e44e179a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LZSBCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTZRTxiyT3WM%2BLasdSEaXey6cngcCQpLSagIf2H4Wd0QIgQvanCE3St7%2BrlLuDnTXdfxNUoi%2FF71g93jjMeS56KHgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk2jCcvqwANHMAnpSrcA9BoN6mYfGea1CpaTvb2kQ8JR%2Bl1qYVhAqGPiwMLuAWpuKy6er7%2BgS1GGyKD0rGFt0oGYybzTGR8a9lSXVgbJgMQsJlEa307MVVQK3v66%2FikRxaEcOLZDSNRMtnszT9tmhJ3HHivFJRvapuO4fzQ28E0CALW1Q2eJuQMVd4GLjmCyjQsAtjUYz3LqBOLpdWXEmxOqc%2BnwPrZZ9prIO9omgTwHbWiuMIGJG6fObRCP3AlCT58RQ2syZ9btQhpEeLhgZAaH5lDJeim6MEuglRNxPpTPQplu5Hrapa5djochw8lEhRWkcbgnmRXzx3wAFRxsXpbiEtWdk7TsBeD0ei6LatMjltQHRtBy6mzIyXTLNm9%2BrUuWclBO9WuBnyOcFsHxwxlRhkLz3NuSekiSN%2FTjRLe26KYEpDQu7tyjdCIjYJ%2FoZf6RPSmiJCCWEZ%2BOyrkBTph09BtGnkGIpiW65fqi8nPh0y8N1bVVu3iqAjZq2D7Gxd1OW1GzXqajTXGhZup%2BlzQUt1zirUvuQhpz%2FNSFSP4QGcv7Os5qjUoRRFzI3e%2BVd48nUwl7IasIMgXFf5Z8QOkH7GMn%2F7Qx1ojR8Wx4EGDm2efLuNORzmrJW89FcQIYykq6fhuAaiYZbDCMKnB1MIGOqUBoVak1SeSpX3%2B7gA0My6a0Nb28wciQQ6jNshBSVEi3ij2ocka%2F78iHOLXJlNwZJXNFJEpCvqfT0iiy3kRHILSENl%2FcnaQ0AvcePGgJtGSLFXnG0mVPVpwE%2BWE3NdznBsLQSndHEotHJrtDkI8x6tS2zvPzq%2Bd%2FRkrGkeBCjY5OhIv21BaVpTCtRAJpOL7hO6%2FCUBsMHgMD2ka7UHyaHrCT0Uw7PeP&X-Amz-Signature=462d2eae49e858219c822f74deb76c614850726868ec4a58a42499106f5a1a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2LZSBCN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTZRTxiyT3WM%2BLasdSEaXey6cngcCQpLSagIf2H4Wd0QIgQvanCE3St7%2BrlLuDnTXdfxNUoi%2FF71g93jjMeS56KHgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk2jCcvqwANHMAnpSrcA9BoN6mYfGea1CpaTvb2kQ8JR%2Bl1qYVhAqGPiwMLuAWpuKy6er7%2BgS1GGyKD0rGFt0oGYybzTGR8a9lSXVgbJgMQsJlEa307MVVQK3v66%2FikRxaEcOLZDSNRMtnszT9tmhJ3HHivFJRvapuO4fzQ28E0CALW1Q2eJuQMVd4GLjmCyjQsAtjUYz3LqBOLpdWXEmxOqc%2BnwPrZZ9prIO9omgTwHbWiuMIGJG6fObRCP3AlCT58RQ2syZ9btQhpEeLhgZAaH5lDJeim6MEuglRNxPpTPQplu5Hrapa5djochw8lEhRWkcbgnmRXzx3wAFRxsXpbiEtWdk7TsBeD0ei6LatMjltQHRtBy6mzIyXTLNm9%2BrUuWclBO9WuBnyOcFsHxwxlRhkLz3NuSekiSN%2FTjRLe26KYEpDQu7tyjdCIjYJ%2FoZf6RPSmiJCCWEZ%2BOyrkBTph09BtGnkGIpiW65fqi8nPh0y8N1bVVu3iqAjZq2D7Gxd1OW1GzXqajTXGhZup%2BlzQUt1zirUvuQhpz%2FNSFSP4QGcv7Os5qjUoRRFzI3e%2BVd48nUwl7IasIMgXFf5Z8QOkH7GMn%2F7Qx1ojR8Wx4EGDm2efLuNORzmrJW89FcQIYykq6fhuAaiYZbDCMKnB1MIGOqUBoVak1SeSpX3%2B7gA0My6a0Nb28wciQQ6jNshBSVEi3ij2ocka%2F78iHOLXJlNwZJXNFJEpCvqfT0iiy3kRHILSENl%2FcnaQ0AvcePGgJtGSLFXnG0mVPVpwE%2BWE3NdznBsLQSndHEotHJrtDkI8x6tS2zvPzq%2Bd%2FRkrGkeBCjY5OhIv21BaVpTCtRAJpOL7hO6%2FCUBsMHgMD2ka7UHyaHrCT0Uw7PeP&X-Amz-Signature=1891f7ddb69d7b2f2ac1bf8e6035170648e4827585ff7cceb56afeecae8e8ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
