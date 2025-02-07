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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURNEAD7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjqNXpF9CgnlSyXJSYr5uKCGBMTc5Ze4o1xri2SpUinQIhANCFmZHCqzEHA%2BdQukmYQHIdbTX6ajDWloamOlrObPahKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2FQDaiKt4lAr1S1nMq3ANnYplI6OVREqOUcj9%2BlAxX441wv6GZft5wr74eUhYWfNJnUKJb5brLGxgYmbwXAOPebOQ3T%2BdrEltoIfnEV6h4XuchQK6i%2BGKuXj3ON4Cfvxaxsu3okc3EO28d%2FVSlGCNVgRjg6Mzetv%2FvQ0MdXuMbCw%2FmgdBoLavI24UkMQXUSfVNnlEVCfXH3WD%2BXmjIAIm5vevpxcntAIO6gFLPeTdXXBSanY7PYYknnh7NC9KsZUPl700JJXePeKxCSfWM5ZV7hBV%2BnSZEW6UI08SIA91VQcgi3DY8IamK%2BQcKrR%2BdtZnFssiBEzj1DszZdNfF2AoHc%2FmfTY%2FbQoDuO3Sj7MRrWr1HIGQQriip0tVAjfSbXs6lAgOidScJf5VKTFlM6XyZ5F5j6%2BEGXIV%2FAl%2F%2BgVyDPzJXiTHeiMsHpTkg9cKdBa1df%2F%2Fn2kUFdxxtGG3Ez2mBdU7NiX%2BszTvk3lfJcDy0cW94%2BK5xvNax3MleSG7lSraeDOm5cHmQPIkZ34zYkLZ%2BGkpnaWmgtptHwRY9eZhSAPOSRQMHqlGeCOJQnXuSqcNXD5D6r2pN9rjtYdiFJjEr%2BB8wb4oNmMLiS0o78bplfK%2BdYoo6F21NeoXwAuPuZ5XD66OTj5veDYfLGDCFgJq9BjqkAbW1W%2FgpKjZfH92I3mwrJwcbbh7c9VQ1C2EdMV1SiQmB7A4GelSlKpsOf2sD4cAA%2BpokeTWC2Ly9CvRzDzHD2BCeabKptgxZVbXP8iOlwVkopwqURy1rYrMzCCiK4EcSHJq2TPjDaXRhFPhqcFuD9sNzNbfT3LNWpW57Zh7BAVjEf53jYf32I4iRWFdK4J5AGjYXL7GXjvW%2B613%2FCQTYr%2BkMEX5R&X-Amz-Signature=7bf608c14e4aa87a6c8b1625ca35e2ace8b126c6cbd9a9716c15a6ba33e6dd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURNEAD7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjqNXpF9CgnlSyXJSYr5uKCGBMTc5Ze4o1xri2SpUinQIhANCFmZHCqzEHA%2BdQukmYQHIdbTX6ajDWloamOlrObPahKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2FQDaiKt4lAr1S1nMq3ANnYplI6OVREqOUcj9%2BlAxX441wv6GZft5wr74eUhYWfNJnUKJb5brLGxgYmbwXAOPebOQ3T%2BdrEltoIfnEV6h4XuchQK6i%2BGKuXj3ON4Cfvxaxsu3okc3EO28d%2FVSlGCNVgRjg6Mzetv%2FvQ0MdXuMbCw%2FmgdBoLavI24UkMQXUSfVNnlEVCfXH3WD%2BXmjIAIm5vevpxcntAIO6gFLPeTdXXBSanY7PYYknnh7NC9KsZUPl700JJXePeKxCSfWM5ZV7hBV%2BnSZEW6UI08SIA91VQcgi3DY8IamK%2BQcKrR%2BdtZnFssiBEzj1DszZdNfF2AoHc%2FmfTY%2FbQoDuO3Sj7MRrWr1HIGQQriip0tVAjfSbXs6lAgOidScJf5VKTFlM6XyZ5F5j6%2BEGXIV%2FAl%2F%2BgVyDPzJXiTHeiMsHpTkg9cKdBa1df%2F%2Fn2kUFdxxtGG3Ez2mBdU7NiX%2BszTvk3lfJcDy0cW94%2BK5xvNax3MleSG7lSraeDOm5cHmQPIkZ34zYkLZ%2BGkpnaWmgtptHwRY9eZhSAPOSRQMHqlGeCOJQnXuSqcNXD5D6r2pN9rjtYdiFJjEr%2BB8wb4oNmMLiS0o78bplfK%2BdYoo6F21NeoXwAuPuZ5XD66OTj5veDYfLGDCFgJq9BjqkAbW1W%2FgpKjZfH92I3mwrJwcbbh7c9VQ1C2EdMV1SiQmB7A4GelSlKpsOf2sD4cAA%2BpokeTWC2Ly9CvRzDzHD2BCeabKptgxZVbXP8iOlwVkopwqURy1rYrMzCCiK4EcSHJq2TPjDaXRhFPhqcFuD9sNzNbfT3LNWpW57Zh7BAVjEf53jYf32I4iRWFdK4J5AGjYXL7GXjvW%2B613%2FCQTYr%2BkMEX5R&X-Amz-Signature=05dca56aebf8632a86961ff61dd409376fa4914c1ba2491827a4597ba728983f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURNEAD7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjqNXpF9CgnlSyXJSYr5uKCGBMTc5Ze4o1xri2SpUinQIhANCFmZHCqzEHA%2BdQukmYQHIdbTX6ajDWloamOlrObPahKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2FQDaiKt4lAr1S1nMq3ANnYplI6OVREqOUcj9%2BlAxX441wv6GZft5wr74eUhYWfNJnUKJb5brLGxgYmbwXAOPebOQ3T%2BdrEltoIfnEV6h4XuchQK6i%2BGKuXj3ON4Cfvxaxsu3okc3EO28d%2FVSlGCNVgRjg6Mzetv%2FvQ0MdXuMbCw%2FmgdBoLavI24UkMQXUSfVNnlEVCfXH3WD%2BXmjIAIm5vevpxcntAIO6gFLPeTdXXBSanY7PYYknnh7NC9KsZUPl700JJXePeKxCSfWM5ZV7hBV%2BnSZEW6UI08SIA91VQcgi3DY8IamK%2BQcKrR%2BdtZnFssiBEzj1DszZdNfF2AoHc%2FmfTY%2FbQoDuO3Sj7MRrWr1HIGQQriip0tVAjfSbXs6lAgOidScJf5VKTFlM6XyZ5F5j6%2BEGXIV%2FAl%2F%2BgVyDPzJXiTHeiMsHpTkg9cKdBa1df%2F%2Fn2kUFdxxtGG3Ez2mBdU7NiX%2BszTvk3lfJcDy0cW94%2BK5xvNax3MleSG7lSraeDOm5cHmQPIkZ34zYkLZ%2BGkpnaWmgtptHwRY9eZhSAPOSRQMHqlGeCOJQnXuSqcNXD5D6r2pN9rjtYdiFJjEr%2BB8wb4oNmMLiS0o78bplfK%2BdYoo6F21NeoXwAuPuZ5XD66OTj5veDYfLGDCFgJq9BjqkAbW1W%2FgpKjZfH92I3mwrJwcbbh7c9VQ1C2EdMV1SiQmB7A4GelSlKpsOf2sD4cAA%2BpokeTWC2Ly9CvRzDzHD2BCeabKptgxZVbXP8iOlwVkopwqURy1rYrMzCCiK4EcSHJq2TPjDaXRhFPhqcFuD9sNzNbfT3LNWpW57Zh7BAVjEf53jYf32I4iRWFdK4J5AGjYXL7GXjvW%2B613%2FCQTYr%2BkMEX5R&X-Amz-Signature=8bece57b62ed88a1f12c2c8593306d4dd426cbe721e57a7e5cc06fabaf160316&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURNEAD7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjqNXpF9CgnlSyXJSYr5uKCGBMTc5Ze4o1xri2SpUinQIhANCFmZHCqzEHA%2BdQukmYQHIdbTX6ajDWloamOlrObPahKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2FQDaiKt4lAr1S1nMq3ANnYplI6OVREqOUcj9%2BlAxX441wv6GZft5wr74eUhYWfNJnUKJb5brLGxgYmbwXAOPebOQ3T%2BdrEltoIfnEV6h4XuchQK6i%2BGKuXj3ON4Cfvxaxsu3okc3EO28d%2FVSlGCNVgRjg6Mzetv%2FvQ0MdXuMbCw%2FmgdBoLavI24UkMQXUSfVNnlEVCfXH3WD%2BXmjIAIm5vevpxcntAIO6gFLPeTdXXBSanY7PYYknnh7NC9KsZUPl700JJXePeKxCSfWM5ZV7hBV%2BnSZEW6UI08SIA91VQcgi3DY8IamK%2BQcKrR%2BdtZnFssiBEzj1DszZdNfF2AoHc%2FmfTY%2FbQoDuO3Sj7MRrWr1HIGQQriip0tVAjfSbXs6lAgOidScJf5VKTFlM6XyZ5F5j6%2BEGXIV%2FAl%2F%2BgVyDPzJXiTHeiMsHpTkg9cKdBa1df%2F%2Fn2kUFdxxtGG3Ez2mBdU7NiX%2BszTvk3lfJcDy0cW94%2BK5xvNax3MleSG7lSraeDOm5cHmQPIkZ34zYkLZ%2BGkpnaWmgtptHwRY9eZhSAPOSRQMHqlGeCOJQnXuSqcNXD5D6r2pN9rjtYdiFJjEr%2BB8wb4oNmMLiS0o78bplfK%2BdYoo6F21NeoXwAuPuZ5XD66OTj5veDYfLGDCFgJq9BjqkAbW1W%2FgpKjZfH92I3mwrJwcbbh7c9VQ1C2EdMV1SiQmB7A4GelSlKpsOf2sD4cAA%2BpokeTWC2Ly9CvRzDzHD2BCeabKptgxZVbXP8iOlwVkopwqURy1rYrMzCCiK4EcSHJq2TPjDaXRhFPhqcFuD9sNzNbfT3LNWpW57Zh7BAVjEf53jYf32I4iRWFdK4J5AGjYXL7GXjvW%2B613%2FCQTYr%2BkMEX5R&X-Amz-Signature=220dcfc08bcbf2b548fe4fa00808c6614f7345aa4b192b079e6231399b287ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURNEAD7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjqNXpF9CgnlSyXJSYr5uKCGBMTc5Ze4o1xri2SpUinQIhANCFmZHCqzEHA%2BdQukmYQHIdbTX6ajDWloamOlrObPahKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2FQDaiKt4lAr1S1nMq3ANnYplI6OVREqOUcj9%2BlAxX441wv6GZft5wr74eUhYWfNJnUKJb5brLGxgYmbwXAOPebOQ3T%2BdrEltoIfnEV6h4XuchQK6i%2BGKuXj3ON4Cfvxaxsu3okc3EO28d%2FVSlGCNVgRjg6Mzetv%2FvQ0MdXuMbCw%2FmgdBoLavI24UkMQXUSfVNnlEVCfXH3WD%2BXmjIAIm5vevpxcntAIO6gFLPeTdXXBSanY7PYYknnh7NC9KsZUPl700JJXePeKxCSfWM5ZV7hBV%2BnSZEW6UI08SIA91VQcgi3DY8IamK%2BQcKrR%2BdtZnFssiBEzj1DszZdNfF2AoHc%2FmfTY%2FbQoDuO3Sj7MRrWr1HIGQQriip0tVAjfSbXs6lAgOidScJf5VKTFlM6XyZ5F5j6%2BEGXIV%2FAl%2F%2BgVyDPzJXiTHeiMsHpTkg9cKdBa1df%2F%2Fn2kUFdxxtGG3Ez2mBdU7NiX%2BszTvk3lfJcDy0cW94%2BK5xvNax3MleSG7lSraeDOm5cHmQPIkZ34zYkLZ%2BGkpnaWmgtptHwRY9eZhSAPOSRQMHqlGeCOJQnXuSqcNXD5D6r2pN9rjtYdiFJjEr%2BB8wb4oNmMLiS0o78bplfK%2BdYoo6F21NeoXwAuPuZ5XD66OTj5veDYfLGDCFgJq9BjqkAbW1W%2FgpKjZfH92I3mwrJwcbbh7c9VQ1C2EdMV1SiQmB7A4GelSlKpsOf2sD4cAA%2BpokeTWC2Ly9CvRzDzHD2BCeabKptgxZVbXP8iOlwVkopwqURy1rYrMzCCiK4EcSHJq2TPjDaXRhFPhqcFuD9sNzNbfT3LNWpW57Zh7BAVjEf53jYf32I4iRWFdK4J5AGjYXL7GXjvW%2B613%2FCQTYr%2BkMEX5R&X-Amz-Signature=95ab75d384e65a56519b3b6c689711d813b2df8127a62c80810409e709a47830&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURNEAD7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjqNXpF9CgnlSyXJSYr5uKCGBMTc5Ze4o1xri2SpUinQIhANCFmZHCqzEHA%2BdQukmYQHIdbTX6ajDWloamOlrObPahKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2FQDaiKt4lAr1S1nMq3ANnYplI6OVREqOUcj9%2BlAxX441wv6GZft5wr74eUhYWfNJnUKJb5brLGxgYmbwXAOPebOQ3T%2BdrEltoIfnEV6h4XuchQK6i%2BGKuXj3ON4Cfvxaxsu3okc3EO28d%2FVSlGCNVgRjg6Mzetv%2FvQ0MdXuMbCw%2FmgdBoLavI24UkMQXUSfVNnlEVCfXH3WD%2BXmjIAIm5vevpxcntAIO6gFLPeTdXXBSanY7PYYknnh7NC9KsZUPl700JJXePeKxCSfWM5ZV7hBV%2BnSZEW6UI08SIA91VQcgi3DY8IamK%2BQcKrR%2BdtZnFssiBEzj1DszZdNfF2AoHc%2FmfTY%2FbQoDuO3Sj7MRrWr1HIGQQriip0tVAjfSbXs6lAgOidScJf5VKTFlM6XyZ5F5j6%2BEGXIV%2FAl%2F%2BgVyDPzJXiTHeiMsHpTkg9cKdBa1df%2F%2Fn2kUFdxxtGG3Ez2mBdU7NiX%2BszTvk3lfJcDy0cW94%2BK5xvNax3MleSG7lSraeDOm5cHmQPIkZ34zYkLZ%2BGkpnaWmgtptHwRY9eZhSAPOSRQMHqlGeCOJQnXuSqcNXD5D6r2pN9rjtYdiFJjEr%2BB8wb4oNmMLiS0o78bplfK%2BdYoo6F21NeoXwAuPuZ5XD66OTj5veDYfLGDCFgJq9BjqkAbW1W%2FgpKjZfH92I3mwrJwcbbh7c9VQ1C2EdMV1SiQmB7A4GelSlKpsOf2sD4cAA%2BpokeTWC2Ly9CvRzDzHD2BCeabKptgxZVbXP8iOlwVkopwqURy1rYrMzCCiK4EcSHJq2TPjDaXRhFPhqcFuD9sNzNbfT3LNWpW57Zh7BAVjEf53jYf32I4iRWFdK4J5AGjYXL7GXjvW%2B613%2FCQTYr%2BkMEX5R&X-Amz-Signature=74bc14b51827ce88a8a8dc2ab7a4b3c87a5f5067feea080a50460847fc7ba71b&X-Amz-SignedHeaders=host&x-id=GetObject)
