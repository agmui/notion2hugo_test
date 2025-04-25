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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MVFKFY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUuyEp9gRUxUXsIE3B%2FNVAb6bVa8yzMaARh3a8L0%2FDQIgStbKosarxfuHI3o4hfljL5p6jv6O3KcFdvAqV3oSgK4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIvfMDnTgfDKFMmhQSrcA2b4e5P3v2VNUDEybE2jQhtygz4Qr3ZrSL%2BUKI7WGcqlfjluimzVbQ3htQGFH%2BsPXv3Stwj9EeNNk%2FapWUdo8WrlcdphkAOROm%2B%2FlDgwY8Q9qkOb02AVQQIndnPNSSXgSNjfJiOEspmKPC7kzOABveOfb%2FduIiPYGDdPF8NFZMWOfBZGA1WWpJSIEvh9TCVpFuQDFcFLOISE7J5gRR4oiJOhn5Ks2qrQdAiZvCPy4M%2BSBUXo9sIMkulxmvUwF3HZBUkWUbf56qjLn2RucppHZsRYU4jKCgzcHPPPCvkx9beeKuhT6fNzwrfcjrWf%2Fl%2F%2B0weGEhaaKxz0uVNN6d6Dhc1n%2FoArfT9kU8TTXgY1EG31ZIZkvw5V6eaxHMjr61iAGhjE%2BqM%2BM3s4lHveXTEeiWx0cUeG9E%2BmBonfv5XTQSF8pT%2FFEvEPc96RWFGoSQzTWBqce%2FJZ%2BqOGk%2BP614Dg7wbX84Gb%2FHNcU93iG%2BDJB6Trd9yqrCihzpSbdCAseePq1rkL7TTmzcqI4a0b9MZvro6VhJzQpIA%2FNeniHWctgk9Dq0TJcErkbVKpuH3xmXDTLo%2FEtLY%2Fkoscfu5%2FHI%2BXlO8W%2FOzq5l%2FZKG%2Bbb9arHyhPOWmJyF9Dc1l5fgYJMMXNrsAGOqUB3C0PIQklgTnnWE8i31EZTILBe3BN9ht0cad71hPb2Sv9H%2BCiBqrKEPdoDxvS7mmiSyRu3x0baqt1NAyPpizPbcIQpGr%2F%2FMSiGfAaCRY72H6ur6XSG9Nv1bLkCGuX3J1qlN%2F01IP%2FCiC809FlvKk4nT9pAcWONA9QTJPOA9Jj2uUnrpmnTEgd2c1ZmxFvZpfUAcI%2B%2BMOyhKOSOr7T4yUQGR0E513k&X-Amz-Signature=bfa584d56c04cdb47fa21018b2fb668f56606ee5319cae39d65f6fbab5d5975d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MVFKFY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUuyEp9gRUxUXsIE3B%2FNVAb6bVa8yzMaARh3a8L0%2FDQIgStbKosarxfuHI3o4hfljL5p6jv6O3KcFdvAqV3oSgK4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIvfMDnTgfDKFMmhQSrcA2b4e5P3v2VNUDEybE2jQhtygz4Qr3ZrSL%2BUKI7WGcqlfjluimzVbQ3htQGFH%2BsPXv3Stwj9EeNNk%2FapWUdo8WrlcdphkAOROm%2B%2FlDgwY8Q9qkOb02AVQQIndnPNSSXgSNjfJiOEspmKPC7kzOABveOfb%2FduIiPYGDdPF8NFZMWOfBZGA1WWpJSIEvh9TCVpFuQDFcFLOISE7J5gRR4oiJOhn5Ks2qrQdAiZvCPy4M%2BSBUXo9sIMkulxmvUwF3HZBUkWUbf56qjLn2RucppHZsRYU4jKCgzcHPPPCvkx9beeKuhT6fNzwrfcjrWf%2Fl%2F%2B0weGEhaaKxz0uVNN6d6Dhc1n%2FoArfT9kU8TTXgY1EG31ZIZkvw5V6eaxHMjr61iAGhjE%2BqM%2BM3s4lHveXTEeiWx0cUeG9E%2BmBonfv5XTQSF8pT%2FFEvEPc96RWFGoSQzTWBqce%2FJZ%2BqOGk%2BP614Dg7wbX84Gb%2FHNcU93iG%2BDJB6Trd9yqrCihzpSbdCAseePq1rkL7TTmzcqI4a0b9MZvro6VhJzQpIA%2FNeniHWctgk9Dq0TJcErkbVKpuH3xmXDTLo%2FEtLY%2Fkoscfu5%2FHI%2BXlO8W%2FOzq5l%2FZKG%2Bbb9arHyhPOWmJyF9Dc1l5fgYJMMXNrsAGOqUB3C0PIQklgTnnWE8i31EZTILBe3BN9ht0cad71hPb2Sv9H%2BCiBqrKEPdoDxvS7mmiSyRu3x0baqt1NAyPpizPbcIQpGr%2F%2FMSiGfAaCRY72H6ur6XSG9Nv1bLkCGuX3J1qlN%2F01IP%2FCiC809FlvKk4nT9pAcWONA9QTJPOA9Jj2uUnrpmnTEgd2c1ZmxFvZpfUAcI%2B%2BMOyhKOSOr7T4yUQGR0E513k&X-Amz-Signature=c5606a526913ffa6637fa0a07460ae83825ce27c5127272c7053bf0a8e5fc4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MVFKFY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUuyEp9gRUxUXsIE3B%2FNVAb6bVa8yzMaARh3a8L0%2FDQIgStbKosarxfuHI3o4hfljL5p6jv6O3KcFdvAqV3oSgK4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIvfMDnTgfDKFMmhQSrcA2b4e5P3v2VNUDEybE2jQhtygz4Qr3ZrSL%2BUKI7WGcqlfjluimzVbQ3htQGFH%2BsPXv3Stwj9EeNNk%2FapWUdo8WrlcdphkAOROm%2B%2FlDgwY8Q9qkOb02AVQQIndnPNSSXgSNjfJiOEspmKPC7kzOABveOfb%2FduIiPYGDdPF8NFZMWOfBZGA1WWpJSIEvh9TCVpFuQDFcFLOISE7J5gRR4oiJOhn5Ks2qrQdAiZvCPy4M%2BSBUXo9sIMkulxmvUwF3HZBUkWUbf56qjLn2RucppHZsRYU4jKCgzcHPPPCvkx9beeKuhT6fNzwrfcjrWf%2Fl%2F%2B0weGEhaaKxz0uVNN6d6Dhc1n%2FoArfT9kU8TTXgY1EG31ZIZkvw5V6eaxHMjr61iAGhjE%2BqM%2BM3s4lHveXTEeiWx0cUeG9E%2BmBonfv5XTQSF8pT%2FFEvEPc96RWFGoSQzTWBqce%2FJZ%2BqOGk%2BP614Dg7wbX84Gb%2FHNcU93iG%2BDJB6Trd9yqrCihzpSbdCAseePq1rkL7TTmzcqI4a0b9MZvro6VhJzQpIA%2FNeniHWctgk9Dq0TJcErkbVKpuH3xmXDTLo%2FEtLY%2Fkoscfu5%2FHI%2BXlO8W%2FOzq5l%2FZKG%2Bbb9arHyhPOWmJyF9Dc1l5fgYJMMXNrsAGOqUB3C0PIQklgTnnWE8i31EZTILBe3BN9ht0cad71hPb2Sv9H%2BCiBqrKEPdoDxvS7mmiSyRu3x0baqt1NAyPpizPbcIQpGr%2F%2FMSiGfAaCRY72H6ur6XSG9Nv1bLkCGuX3J1qlN%2F01IP%2FCiC809FlvKk4nT9pAcWONA9QTJPOA9Jj2uUnrpmnTEgd2c1ZmxFvZpfUAcI%2B%2BMOyhKOSOr7T4yUQGR0E513k&X-Amz-Signature=3153d6ea3661be6bb6f622d52b320bbee04bd62617822232bd975e4a9ccea048&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MVFKFY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUuyEp9gRUxUXsIE3B%2FNVAb6bVa8yzMaARh3a8L0%2FDQIgStbKosarxfuHI3o4hfljL5p6jv6O3KcFdvAqV3oSgK4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIvfMDnTgfDKFMmhQSrcA2b4e5P3v2VNUDEybE2jQhtygz4Qr3ZrSL%2BUKI7WGcqlfjluimzVbQ3htQGFH%2BsPXv3Stwj9EeNNk%2FapWUdo8WrlcdphkAOROm%2B%2FlDgwY8Q9qkOb02AVQQIndnPNSSXgSNjfJiOEspmKPC7kzOABveOfb%2FduIiPYGDdPF8NFZMWOfBZGA1WWpJSIEvh9TCVpFuQDFcFLOISE7J5gRR4oiJOhn5Ks2qrQdAiZvCPy4M%2BSBUXo9sIMkulxmvUwF3HZBUkWUbf56qjLn2RucppHZsRYU4jKCgzcHPPPCvkx9beeKuhT6fNzwrfcjrWf%2Fl%2F%2B0weGEhaaKxz0uVNN6d6Dhc1n%2FoArfT9kU8TTXgY1EG31ZIZkvw5V6eaxHMjr61iAGhjE%2BqM%2BM3s4lHveXTEeiWx0cUeG9E%2BmBonfv5XTQSF8pT%2FFEvEPc96RWFGoSQzTWBqce%2FJZ%2BqOGk%2BP614Dg7wbX84Gb%2FHNcU93iG%2BDJB6Trd9yqrCihzpSbdCAseePq1rkL7TTmzcqI4a0b9MZvro6VhJzQpIA%2FNeniHWctgk9Dq0TJcErkbVKpuH3xmXDTLo%2FEtLY%2Fkoscfu5%2FHI%2BXlO8W%2FOzq5l%2FZKG%2Bbb9arHyhPOWmJyF9Dc1l5fgYJMMXNrsAGOqUB3C0PIQklgTnnWE8i31EZTILBe3BN9ht0cad71hPb2Sv9H%2BCiBqrKEPdoDxvS7mmiSyRu3x0baqt1NAyPpizPbcIQpGr%2F%2FMSiGfAaCRY72H6ur6XSG9Nv1bLkCGuX3J1qlN%2F01IP%2FCiC809FlvKk4nT9pAcWONA9QTJPOA9Jj2uUnrpmnTEgd2c1ZmxFvZpfUAcI%2B%2BMOyhKOSOr7T4yUQGR0E513k&X-Amz-Signature=20ef81abe8f23ff0073eddc935741cb91bf95697e767eca55a59ff78363d7422&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MVFKFY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUuyEp9gRUxUXsIE3B%2FNVAb6bVa8yzMaARh3a8L0%2FDQIgStbKosarxfuHI3o4hfljL5p6jv6O3KcFdvAqV3oSgK4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIvfMDnTgfDKFMmhQSrcA2b4e5P3v2VNUDEybE2jQhtygz4Qr3ZrSL%2BUKI7WGcqlfjluimzVbQ3htQGFH%2BsPXv3Stwj9EeNNk%2FapWUdo8WrlcdphkAOROm%2B%2FlDgwY8Q9qkOb02AVQQIndnPNSSXgSNjfJiOEspmKPC7kzOABveOfb%2FduIiPYGDdPF8NFZMWOfBZGA1WWpJSIEvh9TCVpFuQDFcFLOISE7J5gRR4oiJOhn5Ks2qrQdAiZvCPy4M%2BSBUXo9sIMkulxmvUwF3HZBUkWUbf56qjLn2RucppHZsRYU4jKCgzcHPPPCvkx9beeKuhT6fNzwrfcjrWf%2Fl%2F%2B0weGEhaaKxz0uVNN6d6Dhc1n%2FoArfT9kU8TTXgY1EG31ZIZkvw5V6eaxHMjr61iAGhjE%2BqM%2BM3s4lHveXTEeiWx0cUeG9E%2BmBonfv5XTQSF8pT%2FFEvEPc96RWFGoSQzTWBqce%2FJZ%2BqOGk%2BP614Dg7wbX84Gb%2FHNcU93iG%2BDJB6Trd9yqrCihzpSbdCAseePq1rkL7TTmzcqI4a0b9MZvro6VhJzQpIA%2FNeniHWctgk9Dq0TJcErkbVKpuH3xmXDTLo%2FEtLY%2Fkoscfu5%2FHI%2BXlO8W%2FOzq5l%2FZKG%2Bbb9arHyhPOWmJyF9Dc1l5fgYJMMXNrsAGOqUB3C0PIQklgTnnWE8i31EZTILBe3BN9ht0cad71hPb2Sv9H%2BCiBqrKEPdoDxvS7mmiSyRu3x0baqt1NAyPpizPbcIQpGr%2F%2FMSiGfAaCRY72H6ur6XSG9Nv1bLkCGuX3J1qlN%2F01IP%2FCiC809FlvKk4nT9pAcWONA9QTJPOA9Jj2uUnrpmnTEgd2c1ZmxFvZpfUAcI%2B%2BMOyhKOSOr7T4yUQGR0E513k&X-Amz-Signature=f41a44e177b5a532b5f145a41aa626d255bf1c631798d12e992472c2d9e3c227&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633MVFKFY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjUuyEp9gRUxUXsIE3B%2FNVAb6bVa8yzMaARh3a8L0%2FDQIgStbKosarxfuHI3o4hfljL5p6jv6O3KcFdvAqV3oSgK4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIvfMDnTgfDKFMmhQSrcA2b4e5P3v2VNUDEybE2jQhtygz4Qr3ZrSL%2BUKI7WGcqlfjluimzVbQ3htQGFH%2BsPXv3Stwj9EeNNk%2FapWUdo8WrlcdphkAOROm%2B%2FlDgwY8Q9qkOb02AVQQIndnPNSSXgSNjfJiOEspmKPC7kzOABveOfb%2FduIiPYGDdPF8NFZMWOfBZGA1WWpJSIEvh9TCVpFuQDFcFLOISE7J5gRR4oiJOhn5Ks2qrQdAiZvCPy4M%2BSBUXo9sIMkulxmvUwF3HZBUkWUbf56qjLn2RucppHZsRYU4jKCgzcHPPPCvkx9beeKuhT6fNzwrfcjrWf%2Fl%2F%2B0weGEhaaKxz0uVNN6d6Dhc1n%2FoArfT9kU8TTXgY1EG31ZIZkvw5V6eaxHMjr61iAGhjE%2BqM%2BM3s4lHveXTEeiWx0cUeG9E%2BmBonfv5XTQSF8pT%2FFEvEPc96RWFGoSQzTWBqce%2FJZ%2BqOGk%2BP614Dg7wbX84Gb%2FHNcU93iG%2BDJB6Trd9yqrCihzpSbdCAseePq1rkL7TTmzcqI4a0b9MZvro6VhJzQpIA%2FNeniHWctgk9Dq0TJcErkbVKpuH3xmXDTLo%2FEtLY%2Fkoscfu5%2FHI%2BXlO8W%2FOzq5l%2FZKG%2Bbb9arHyhPOWmJyF9Dc1l5fgYJMMXNrsAGOqUB3C0PIQklgTnnWE8i31EZTILBe3BN9ht0cad71hPb2Sv9H%2BCiBqrKEPdoDxvS7mmiSyRu3x0baqt1NAyPpizPbcIQpGr%2F%2FMSiGfAaCRY72H6ur6XSG9Nv1bLkCGuX3J1qlN%2F01IP%2FCiC809FlvKk4nT9pAcWONA9QTJPOA9Jj2uUnrpmnTEgd2c1ZmxFvZpfUAcI%2B%2BMOyhKOSOr7T4yUQGR0E513k&X-Amz-Signature=0e82af76ba45a9980ebca7209d225e1ee2af5a426fa72866488a1ea10a2cff2f&X-Amz-SignedHeaders=host&x-id=GetObject)
