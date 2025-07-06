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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I6OXH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBzRtpqX8cRGWVzPWd1HGguMOotq8%2Bqx2QdXqVE7BhFFAiB9KuqjnDBP4Y2R4qC38BjuoIE9TqUjDHhi0y%2F2A500Gir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5h4BkYIIN2wwGj7eKtwDXsXbhtEP%2FsA8tAB1Xclgqww39dHsIpEfQnXi9BgzjD6thSQRw%2B4ZKsKw1AgOESAFQUuR1tuMPfEFim9JroMSIsr3rCKDzjABpaNh2XJnxtR9L7hinFPcaRho1u34TIe0TFA5egrw8pbhDwSvOYZEv6sV4EslH4t6rAUnSZ4PfbMRCKBwfSRikQe9AMooenAqe5hvnDGWcoll%2FHqalN3cYbiy9AxjfgY0OgvVpXh2ffKwmrceDUo7CnoEQMjICtaXtWkOrVYOVXN2qiIGNX%2FmWybn5HRXNLljZTXKX7PzIMsIHSNBveCj174z%2Bl%2FbJUFGMBWBAZoSnsd%2BC7N4UI7tqI0zgBsvacHr8MJvMQkk9orKql6P9rVDNPuJHVD9Z0dKLA7vviinDf2e%2BskB6euM7lUgEsi9mqQFxOy%2FXPu05tTvmVjS58LiPQVd%2BnSeX6AsCZC8dcXZ%2FxCyVMpgMclAezMROiK6FLNSf7BsctuUap8Qe%2FP8W7SE%2BmD9Hq9Cl1%2BVCq6n%2BTICP319uMtBE6qnxpAutm1WWPVwNbU8G4I2ZlVfyVUUrxMv3nGCmUC8uwBaNRBNAPJvHSPczQ2BQms3pyUfF9ACWOwNv9Zonjl5wd2ZoX774YjCRNUp3dow48aqwwY6pgFyfYQtUbGgf7ghbppJzzjRwiDsDJMQ08etoWuyyp0dXmR0%2FRz6vWQpmXF0eIokITGI7eb2DRq6KkglWFusrPDZ95DQXCuB%2BTfKWYk3Fi3hbBd%2F8pFdUx1vzH1T09MF%2Bi4E7YYmaOLvWddYeIv%2BdMbPZYNcCAUtiva4IOqEZSye6OaUkOyJ5iU4SwTqewuO9WkJoSqv82hMUxhWNw4meGQXG96moa7x&X-Amz-Signature=332c8fa6cc4fec16ba6b828b507b1a20741c76ab7181cb9344d3087cd39ede74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I6OXH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBzRtpqX8cRGWVzPWd1HGguMOotq8%2Bqx2QdXqVE7BhFFAiB9KuqjnDBP4Y2R4qC38BjuoIE9TqUjDHhi0y%2F2A500Gir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5h4BkYIIN2wwGj7eKtwDXsXbhtEP%2FsA8tAB1Xclgqww39dHsIpEfQnXi9BgzjD6thSQRw%2B4ZKsKw1AgOESAFQUuR1tuMPfEFim9JroMSIsr3rCKDzjABpaNh2XJnxtR9L7hinFPcaRho1u34TIe0TFA5egrw8pbhDwSvOYZEv6sV4EslH4t6rAUnSZ4PfbMRCKBwfSRikQe9AMooenAqe5hvnDGWcoll%2FHqalN3cYbiy9AxjfgY0OgvVpXh2ffKwmrceDUo7CnoEQMjICtaXtWkOrVYOVXN2qiIGNX%2FmWybn5HRXNLljZTXKX7PzIMsIHSNBveCj174z%2Bl%2FbJUFGMBWBAZoSnsd%2BC7N4UI7tqI0zgBsvacHr8MJvMQkk9orKql6P9rVDNPuJHVD9Z0dKLA7vviinDf2e%2BskB6euM7lUgEsi9mqQFxOy%2FXPu05tTvmVjS58LiPQVd%2BnSeX6AsCZC8dcXZ%2FxCyVMpgMclAezMROiK6FLNSf7BsctuUap8Qe%2FP8W7SE%2BmD9Hq9Cl1%2BVCq6n%2BTICP319uMtBE6qnxpAutm1WWPVwNbU8G4I2ZlVfyVUUrxMv3nGCmUC8uwBaNRBNAPJvHSPczQ2BQms3pyUfF9ACWOwNv9Zonjl5wd2ZoX774YjCRNUp3dow48aqwwY6pgFyfYQtUbGgf7ghbppJzzjRwiDsDJMQ08etoWuyyp0dXmR0%2FRz6vWQpmXF0eIokITGI7eb2DRq6KkglWFusrPDZ95DQXCuB%2BTfKWYk3Fi3hbBd%2F8pFdUx1vzH1T09MF%2Bi4E7YYmaOLvWddYeIv%2BdMbPZYNcCAUtiva4IOqEZSye6OaUkOyJ5iU4SwTqewuO9WkJoSqv82hMUxhWNw4meGQXG96moa7x&X-Amz-Signature=925c335efce98a5e23af9df4e9dd3b1782ca39ec615dc368effaba0f96a36009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I6OXH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBzRtpqX8cRGWVzPWd1HGguMOotq8%2Bqx2QdXqVE7BhFFAiB9KuqjnDBP4Y2R4qC38BjuoIE9TqUjDHhi0y%2F2A500Gir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5h4BkYIIN2wwGj7eKtwDXsXbhtEP%2FsA8tAB1Xclgqww39dHsIpEfQnXi9BgzjD6thSQRw%2B4ZKsKw1AgOESAFQUuR1tuMPfEFim9JroMSIsr3rCKDzjABpaNh2XJnxtR9L7hinFPcaRho1u34TIe0TFA5egrw8pbhDwSvOYZEv6sV4EslH4t6rAUnSZ4PfbMRCKBwfSRikQe9AMooenAqe5hvnDGWcoll%2FHqalN3cYbiy9AxjfgY0OgvVpXh2ffKwmrceDUo7CnoEQMjICtaXtWkOrVYOVXN2qiIGNX%2FmWybn5HRXNLljZTXKX7PzIMsIHSNBveCj174z%2Bl%2FbJUFGMBWBAZoSnsd%2BC7N4UI7tqI0zgBsvacHr8MJvMQkk9orKql6P9rVDNPuJHVD9Z0dKLA7vviinDf2e%2BskB6euM7lUgEsi9mqQFxOy%2FXPu05tTvmVjS58LiPQVd%2BnSeX6AsCZC8dcXZ%2FxCyVMpgMclAezMROiK6FLNSf7BsctuUap8Qe%2FP8W7SE%2BmD9Hq9Cl1%2BVCq6n%2BTICP319uMtBE6qnxpAutm1WWPVwNbU8G4I2ZlVfyVUUrxMv3nGCmUC8uwBaNRBNAPJvHSPczQ2BQms3pyUfF9ACWOwNv9Zonjl5wd2ZoX774YjCRNUp3dow48aqwwY6pgFyfYQtUbGgf7ghbppJzzjRwiDsDJMQ08etoWuyyp0dXmR0%2FRz6vWQpmXF0eIokITGI7eb2DRq6KkglWFusrPDZ95DQXCuB%2BTfKWYk3Fi3hbBd%2F8pFdUx1vzH1T09MF%2Bi4E7YYmaOLvWddYeIv%2BdMbPZYNcCAUtiva4IOqEZSye6OaUkOyJ5iU4SwTqewuO9WkJoSqv82hMUxhWNw4meGQXG96moa7x&X-Amz-Signature=11a7d0bbf58b3f8194eff0a2c6dd8f589f2ed439d0f2126406f4ecb511c5d34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I6OXH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBzRtpqX8cRGWVzPWd1HGguMOotq8%2Bqx2QdXqVE7BhFFAiB9KuqjnDBP4Y2R4qC38BjuoIE9TqUjDHhi0y%2F2A500Gir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5h4BkYIIN2wwGj7eKtwDXsXbhtEP%2FsA8tAB1Xclgqww39dHsIpEfQnXi9BgzjD6thSQRw%2B4ZKsKw1AgOESAFQUuR1tuMPfEFim9JroMSIsr3rCKDzjABpaNh2XJnxtR9L7hinFPcaRho1u34TIe0TFA5egrw8pbhDwSvOYZEv6sV4EslH4t6rAUnSZ4PfbMRCKBwfSRikQe9AMooenAqe5hvnDGWcoll%2FHqalN3cYbiy9AxjfgY0OgvVpXh2ffKwmrceDUo7CnoEQMjICtaXtWkOrVYOVXN2qiIGNX%2FmWybn5HRXNLljZTXKX7PzIMsIHSNBveCj174z%2Bl%2FbJUFGMBWBAZoSnsd%2BC7N4UI7tqI0zgBsvacHr8MJvMQkk9orKql6P9rVDNPuJHVD9Z0dKLA7vviinDf2e%2BskB6euM7lUgEsi9mqQFxOy%2FXPu05tTvmVjS58LiPQVd%2BnSeX6AsCZC8dcXZ%2FxCyVMpgMclAezMROiK6FLNSf7BsctuUap8Qe%2FP8W7SE%2BmD9Hq9Cl1%2BVCq6n%2BTICP319uMtBE6qnxpAutm1WWPVwNbU8G4I2ZlVfyVUUrxMv3nGCmUC8uwBaNRBNAPJvHSPczQ2BQms3pyUfF9ACWOwNv9Zonjl5wd2ZoX774YjCRNUp3dow48aqwwY6pgFyfYQtUbGgf7ghbppJzzjRwiDsDJMQ08etoWuyyp0dXmR0%2FRz6vWQpmXF0eIokITGI7eb2DRq6KkglWFusrPDZ95DQXCuB%2BTfKWYk3Fi3hbBd%2F8pFdUx1vzH1T09MF%2Bi4E7YYmaOLvWddYeIv%2BdMbPZYNcCAUtiva4IOqEZSye6OaUkOyJ5iU4SwTqewuO9WkJoSqv82hMUxhWNw4meGQXG96moa7x&X-Amz-Signature=6d4813b84b63b5b41f90171e64093da382d04d23520c5aba08e2e2a0d50d3ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I6OXH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBzRtpqX8cRGWVzPWd1HGguMOotq8%2Bqx2QdXqVE7BhFFAiB9KuqjnDBP4Y2R4qC38BjuoIE9TqUjDHhi0y%2F2A500Gir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5h4BkYIIN2wwGj7eKtwDXsXbhtEP%2FsA8tAB1Xclgqww39dHsIpEfQnXi9BgzjD6thSQRw%2B4ZKsKw1AgOESAFQUuR1tuMPfEFim9JroMSIsr3rCKDzjABpaNh2XJnxtR9L7hinFPcaRho1u34TIe0TFA5egrw8pbhDwSvOYZEv6sV4EslH4t6rAUnSZ4PfbMRCKBwfSRikQe9AMooenAqe5hvnDGWcoll%2FHqalN3cYbiy9AxjfgY0OgvVpXh2ffKwmrceDUo7CnoEQMjICtaXtWkOrVYOVXN2qiIGNX%2FmWybn5HRXNLljZTXKX7PzIMsIHSNBveCj174z%2Bl%2FbJUFGMBWBAZoSnsd%2BC7N4UI7tqI0zgBsvacHr8MJvMQkk9orKql6P9rVDNPuJHVD9Z0dKLA7vviinDf2e%2BskB6euM7lUgEsi9mqQFxOy%2FXPu05tTvmVjS58LiPQVd%2BnSeX6AsCZC8dcXZ%2FxCyVMpgMclAezMROiK6FLNSf7BsctuUap8Qe%2FP8W7SE%2BmD9Hq9Cl1%2BVCq6n%2BTICP319uMtBE6qnxpAutm1WWPVwNbU8G4I2ZlVfyVUUrxMv3nGCmUC8uwBaNRBNAPJvHSPczQ2BQms3pyUfF9ACWOwNv9Zonjl5wd2ZoX774YjCRNUp3dow48aqwwY6pgFyfYQtUbGgf7ghbppJzzjRwiDsDJMQ08etoWuyyp0dXmR0%2FRz6vWQpmXF0eIokITGI7eb2DRq6KkglWFusrPDZ95DQXCuB%2BTfKWYk3Fi3hbBd%2F8pFdUx1vzH1T09MF%2Bi4E7YYmaOLvWddYeIv%2BdMbPZYNcCAUtiva4IOqEZSye6OaUkOyJ5iU4SwTqewuO9WkJoSqv82hMUxhWNw4meGQXG96moa7x&X-Amz-Signature=2d2e84976f436301426805fbdd6155dc11dc649e4bc259cde06d21b842d6bf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I6OXH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBzRtpqX8cRGWVzPWd1HGguMOotq8%2Bqx2QdXqVE7BhFFAiB9KuqjnDBP4Y2R4qC38BjuoIE9TqUjDHhi0y%2F2A500Gir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM5h4BkYIIN2wwGj7eKtwDXsXbhtEP%2FsA8tAB1Xclgqww39dHsIpEfQnXi9BgzjD6thSQRw%2B4ZKsKw1AgOESAFQUuR1tuMPfEFim9JroMSIsr3rCKDzjABpaNh2XJnxtR9L7hinFPcaRho1u34TIe0TFA5egrw8pbhDwSvOYZEv6sV4EslH4t6rAUnSZ4PfbMRCKBwfSRikQe9AMooenAqe5hvnDGWcoll%2FHqalN3cYbiy9AxjfgY0OgvVpXh2ffKwmrceDUo7CnoEQMjICtaXtWkOrVYOVXN2qiIGNX%2FmWybn5HRXNLljZTXKX7PzIMsIHSNBveCj174z%2Bl%2FbJUFGMBWBAZoSnsd%2BC7N4UI7tqI0zgBsvacHr8MJvMQkk9orKql6P9rVDNPuJHVD9Z0dKLA7vviinDf2e%2BskB6euM7lUgEsi9mqQFxOy%2FXPu05tTvmVjS58LiPQVd%2BnSeX6AsCZC8dcXZ%2FxCyVMpgMclAezMROiK6FLNSf7BsctuUap8Qe%2FP8W7SE%2BmD9Hq9Cl1%2BVCq6n%2BTICP319uMtBE6qnxpAutm1WWPVwNbU8G4I2ZlVfyVUUrxMv3nGCmUC8uwBaNRBNAPJvHSPczQ2BQms3pyUfF9ACWOwNv9Zonjl5wd2ZoX774YjCRNUp3dow48aqwwY6pgFyfYQtUbGgf7ghbppJzzjRwiDsDJMQ08etoWuyyp0dXmR0%2FRz6vWQpmXF0eIokITGI7eb2DRq6KkglWFusrPDZ95DQXCuB%2BTfKWYk3Fi3hbBd%2F8pFdUx1vzH1T09MF%2Bi4E7YYmaOLvWddYeIv%2BdMbPZYNcCAUtiva4IOqEZSye6OaUkOyJ5iU4SwTqewuO9WkJoSqv82hMUxhWNw4meGQXG96moa7x&X-Amz-Signature=5fa6e625750c7d3249dbabea9203e5436473daeb0a1477de2218235ed94ee708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
