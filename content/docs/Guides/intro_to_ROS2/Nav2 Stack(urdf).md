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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYWC6BA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FumSJoQdfbf8ncC62b4NNuCH4cKp%2BmtRfTuVxJZ0BtAIhALDqsNk0%2B5eAY%2F0aOA%2FOy0gTWmJlGrvr%2BgMUodNSnW5kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyebHfAWnf9bGusEq3AO163KJszQCByJfnNzyTdRlhFiUm60Gxbw3KNtkbb%2B0NPY4Gws%2F1qwIN8wl2eZBos8LRlLkH75nkoUTpRgtSSHtCMWKCvB8vYBntzHYA%2FL5VCTIrXocQsgfKN1ByKhn5MvSctcUW5uxT974VzhAZkRbtkP4EbOEJipHtw3yfv0JGJMDZ1sV9LxpiYIZGKwZpbluIM%2BCeE2xlvdffS7SwDWMVefU%2FOdHUXX0m%2FIHNzUFyboWz3mJxi0oVEXFp4Y%2B%2B73trGq%2FMHP70MPZqtlCshQ1PPgsfYnJWWE0vzc753%2FkJfzwj8xKulj3JDQ0z%2FG%2BMaLqUET8mU9vGKS1WDOTcTJHh%2Ba%2F5fHbBNAGGkTEPRKnIjAWccDL%2BgY%2BGeT3zJBY80bIeBNt5pBGkm7huZ9wu22teG1i2D%2FVfaSm%2B1%2BQIfvL9%2B4J2sN5fKw8vVjuEv8%2BqBohMusq08EVeVm7mXuyN2EgW9YPQri4ySbfl3HTxloiSZCobMBzLasYo%2BwOS%2FEHNXPierF3BBtqhJqKEYzAkFBTFeeRiNRB4ce1v%2F3dXwkV29GmSC2KwG%2FglIp57cY%2BddcgYPpWG6vyS7TDK1UcpuDzepCucxwz7Dg5xi2VD14q1ApbDYF%2B4%2BN300SQkDD78NrABjqkAW0A4%2BVXReOLP%2Fco%2FGje145NsZtOulz0ZUsxsDBciWlUGKlDXi4ntQkKK4EHyCIKL587C5MKj%2Bhxes9Z9UdAM%2F7%2BOIVLtlisbrCfWuFlueJiqBnFtmL5Nl5U9hMu%2BacTlTmGtL2xt2scjtQv56N%2BAhp7YTSxjl274Np9Wk6s01Voz%2FbpTYd2Qde12zYXbm15O5HCCoOks4gjueLIL1y19oy8fEXV&X-Amz-Signature=fc231f8edc0c1abba00a3e936301c732f56627c317c2498b1212d5b8bf2f9b95&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYWC6BA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FumSJoQdfbf8ncC62b4NNuCH4cKp%2BmtRfTuVxJZ0BtAIhALDqsNk0%2B5eAY%2F0aOA%2FOy0gTWmJlGrvr%2BgMUodNSnW5kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyebHfAWnf9bGusEq3AO163KJszQCByJfnNzyTdRlhFiUm60Gxbw3KNtkbb%2B0NPY4Gws%2F1qwIN8wl2eZBos8LRlLkH75nkoUTpRgtSSHtCMWKCvB8vYBntzHYA%2FL5VCTIrXocQsgfKN1ByKhn5MvSctcUW5uxT974VzhAZkRbtkP4EbOEJipHtw3yfv0JGJMDZ1sV9LxpiYIZGKwZpbluIM%2BCeE2xlvdffS7SwDWMVefU%2FOdHUXX0m%2FIHNzUFyboWz3mJxi0oVEXFp4Y%2B%2B73trGq%2FMHP70MPZqtlCshQ1PPgsfYnJWWE0vzc753%2FkJfzwj8xKulj3JDQ0z%2FG%2BMaLqUET8mU9vGKS1WDOTcTJHh%2Ba%2F5fHbBNAGGkTEPRKnIjAWccDL%2BgY%2BGeT3zJBY80bIeBNt5pBGkm7huZ9wu22teG1i2D%2FVfaSm%2B1%2BQIfvL9%2B4J2sN5fKw8vVjuEv8%2BqBohMusq08EVeVm7mXuyN2EgW9YPQri4ySbfl3HTxloiSZCobMBzLasYo%2BwOS%2FEHNXPierF3BBtqhJqKEYzAkFBTFeeRiNRB4ce1v%2F3dXwkV29GmSC2KwG%2FglIp57cY%2BddcgYPpWG6vyS7TDK1UcpuDzepCucxwz7Dg5xi2VD14q1ApbDYF%2B4%2BN300SQkDD78NrABjqkAW0A4%2BVXReOLP%2Fco%2FGje145NsZtOulz0ZUsxsDBciWlUGKlDXi4ntQkKK4EHyCIKL587C5MKj%2Bhxes9Z9UdAM%2F7%2BOIVLtlisbrCfWuFlueJiqBnFtmL5Nl5U9hMu%2BacTlTmGtL2xt2scjtQv56N%2BAhp7YTSxjl274Np9Wk6s01Voz%2FbpTYd2Qde12zYXbm15O5HCCoOks4gjueLIL1y19oy8fEXV&X-Amz-Signature=17e4b366f782d9eefc786e311e9d02001519dce40efef4c4a02cfe647aafdac2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYWC6BA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FumSJoQdfbf8ncC62b4NNuCH4cKp%2BmtRfTuVxJZ0BtAIhALDqsNk0%2B5eAY%2F0aOA%2FOy0gTWmJlGrvr%2BgMUodNSnW5kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyebHfAWnf9bGusEq3AO163KJszQCByJfnNzyTdRlhFiUm60Gxbw3KNtkbb%2B0NPY4Gws%2F1qwIN8wl2eZBos8LRlLkH75nkoUTpRgtSSHtCMWKCvB8vYBntzHYA%2FL5VCTIrXocQsgfKN1ByKhn5MvSctcUW5uxT974VzhAZkRbtkP4EbOEJipHtw3yfv0JGJMDZ1sV9LxpiYIZGKwZpbluIM%2BCeE2xlvdffS7SwDWMVefU%2FOdHUXX0m%2FIHNzUFyboWz3mJxi0oVEXFp4Y%2B%2B73trGq%2FMHP70MPZqtlCshQ1PPgsfYnJWWE0vzc753%2FkJfzwj8xKulj3JDQ0z%2FG%2BMaLqUET8mU9vGKS1WDOTcTJHh%2Ba%2F5fHbBNAGGkTEPRKnIjAWccDL%2BgY%2BGeT3zJBY80bIeBNt5pBGkm7huZ9wu22teG1i2D%2FVfaSm%2B1%2BQIfvL9%2B4J2sN5fKw8vVjuEv8%2BqBohMusq08EVeVm7mXuyN2EgW9YPQri4ySbfl3HTxloiSZCobMBzLasYo%2BwOS%2FEHNXPierF3BBtqhJqKEYzAkFBTFeeRiNRB4ce1v%2F3dXwkV29GmSC2KwG%2FglIp57cY%2BddcgYPpWG6vyS7TDK1UcpuDzepCucxwz7Dg5xi2VD14q1ApbDYF%2B4%2BN300SQkDD78NrABjqkAW0A4%2BVXReOLP%2Fco%2FGje145NsZtOulz0ZUsxsDBciWlUGKlDXi4ntQkKK4EHyCIKL587C5MKj%2Bhxes9Z9UdAM%2F7%2BOIVLtlisbrCfWuFlueJiqBnFtmL5Nl5U9hMu%2BacTlTmGtL2xt2scjtQv56N%2BAhp7YTSxjl274Np9Wk6s01Voz%2FbpTYd2Qde12zYXbm15O5HCCoOks4gjueLIL1y19oy8fEXV&X-Amz-Signature=b088064f3035c8c6297a73ec2e85e67e9f640ae9c9878d5d0ccca3f13b932fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYWC6BA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FumSJoQdfbf8ncC62b4NNuCH4cKp%2BmtRfTuVxJZ0BtAIhALDqsNk0%2B5eAY%2F0aOA%2FOy0gTWmJlGrvr%2BgMUodNSnW5kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyebHfAWnf9bGusEq3AO163KJszQCByJfnNzyTdRlhFiUm60Gxbw3KNtkbb%2B0NPY4Gws%2F1qwIN8wl2eZBos8LRlLkH75nkoUTpRgtSSHtCMWKCvB8vYBntzHYA%2FL5VCTIrXocQsgfKN1ByKhn5MvSctcUW5uxT974VzhAZkRbtkP4EbOEJipHtw3yfv0JGJMDZ1sV9LxpiYIZGKwZpbluIM%2BCeE2xlvdffS7SwDWMVefU%2FOdHUXX0m%2FIHNzUFyboWz3mJxi0oVEXFp4Y%2B%2B73trGq%2FMHP70MPZqtlCshQ1PPgsfYnJWWE0vzc753%2FkJfzwj8xKulj3JDQ0z%2FG%2BMaLqUET8mU9vGKS1WDOTcTJHh%2Ba%2F5fHbBNAGGkTEPRKnIjAWccDL%2BgY%2BGeT3zJBY80bIeBNt5pBGkm7huZ9wu22teG1i2D%2FVfaSm%2B1%2BQIfvL9%2B4J2sN5fKw8vVjuEv8%2BqBohMusq08EVeVm7mXuyN2EgW9YPQri4ySbfl3HTxloiSZCobMBzLasYo%2BwOS%2FEHNXPierF3BBtqhJqKEYzAkFBTFeeRiNRB4ce1v%2F3dXwkV29GmSC2KwG%2FglIp57cY%2BddcgYPpWG6vyS7TDK1UcpuDzepCucxwz7Dg5xi2VD14q1ApbDYF%2B4%2BN300SQkDD78NrABjqkAW0A4%2BVXReOLP%2Fco%2FGje145NsZtOulz0ZUsxsDBciWlUGKlDXi4ntQkKK4EHyCIKL587C5MKj%2Bhxes9Z9UdAM%2F7%2BOIVLtlisbrCfWuFlueJiqBnFtmL5Nl5U9hMu%2BacTlTmGtL2xt2scjtQv56N%2BAhp7YTSxjl274Np9Wk6s01Voz%2FbpTYd2Qde12zYXbm15O5HCCoOks4gjueLIL1y19oy8fEXV&X-Amz-Signature=e427ebaa376e1e6cdac8681df912c6ecdce10fa7073cbdfb3a3694f8feae4718&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYWC6BA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FumSJoQdfbf8ncC62b4NNuCH4cKp%2BmtRfTuVxJZ0BtAIhALDqsNk0%2B5eAY%2F0aOA%2FOy0gTWmJlGrvr%2BgMUodNSnW5kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyebHfAWnf9bGusEq3AO163KJszQCByJfnNzyTdRlhFiUm60Gxbw3KNtkbb%2B0NPY4Gws%2F1qwIN8wl2eZBos8LRlLkH75nkoUTpRgtSSHtCMWKCvB8vYBntzHYA%2FL5VCTIrXocQsgfKN1ByKhn5MvSctcUW5uxT974VzhAZkRbtkP4EbOEJipHtw3yfv0JGJMDZ1sV9LxpiYIZGKwZpbluIM%2BCeE2xlvdffS7SwDWMVefU%2FOdHUXX0m%2FIHNzUFyboWz3mJxi0oVEXFp4Y%2B%2B73trGq%2FMHP70MPZqtlCshQ1PPgsfYnJWWE0vzc753%2FkJfzwj8xKulj3JDQ0z%2FG%2BMaLqUET8mU9vGKS1WDOTcTJHh%2Ba%2F5fHbBNAGGkTEPRKnIjAWccDL%2BgY%2BGeT3zJBY80bIeBNt5pBGkm7huZ9wu22teG1i2D%2FVfaSm%2B1%2BQIfvL9%2B4J2sN5fKw8vVjuEv8%2BqBohMusq08EVeVm7mXuyN2EgW9YPQri4ySbfl3HTxloiSZCobMBzLasYo%2BwOS%2FEHNXPierF3BBtqhJqKEYzAkFBTFeeRiNRB4ce1v%2F3dXwkV29GmSC2KwG%2FglIp57cY%2BddcgYPpWG6vyS7TDK1UcpuDzepCucxwz7Dg5xi2VD14q1ApbDYF%2B4%2BN300SQkDD78NrABjqkAW0A4%2BVXReOLP%2Fco%2FGje145NsZtOulz0ZUsxsDBciWlUGKlDXi4ntQkKK4EHyCIKL587C5MKj%2Bhxes9Z9UdAM%2F7%2BOIVLtlisbrCfWuFlueJiqBnFtmL5Nl5U9hMu%2BacTlTmGtL2xt2scjtQv56N%2BAhp7YTSxjl274Np9Wk6s01Voz%2FbpTYd2Qde12zYXbm15O5HCCoOks4gjueLIL1y19oy8fEXV&X-Amz-Signature=baf1aeb9d2891fe677ce628688d5e2d9e253e8ffe1c328ce0e724cd597fc27b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYWC6BA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC%2FumSJoQdfbf8ncC62b4NNuCH4cKp%2BmtRfTuVxJZ0BtAIhALDqsNk0%2B5eAY%2F0aOA%2FOy0gTWmJlGrvr%2BgMUodNSnW5kKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUyebHfAWnf9bGusEq3AO163KJszQCByJfnNzyTdRlhFiUm60Gxbw3KNtkbb%2B0NPY4Gws%2F1qwIN8wl2eZBos8LRlLkH75nkoUTpRgtSSHtCMWKCvB8vYBntzHYA%2FL5VCTIrXocQsgfKN1ByKhn5MvSctcUW5uxT974VzhAZkRbtkP4EbOEJipHtw3yfv0JGJMDZ1sV9LxpiYIZGKwZpbluIM%2BCeE2xlvdffS7SwDWMVefU%2FOdHUXX0m%2FIHNzUFyboWz3mJxi0oVEXFp4Y%2B%2B73trGq%2FMHP70MPZqtlCshQ1PPgsfYnJWWE0vzc753%2FkJfzwj8xKulj3JDQ0z%2FG%2BMaLqUET8mU9vGKS1WDOTcTJHh%2Ba%2F5fHbBNAGGkTEPRKnIjAWccDL%2BgY%2BGeT3zJBY80bIeBNt5pBGkm7huZ9wu22teG1i2D%2FVfaSm%2B1%2BQIfvL9%2B4J2sN5fKw8vVjuEv8%2BqBohMusq08EVeVm7mXuyN2EgW9YPQri4ySbfl3HTxloiSZCobMBzLasYo%2BwOS%2FEHNXPierF3BBtqhJqKEYzAkFBTFeeRiNRB4ce1v%2F3dXwkV29GmSC2KwG%2FglIp57cY%2BddcgYPpWG6vyS7TDK1UcpuDzepCucxwz7Dg5xi2VD14q1ApbDYF%2B4%2BN300SQkDD78NrABjqkAW0A4%2BVXReOLP%2Fco%2FGje145NsZtOulz0ZUsxsDBciWlUGKlDXi4ntQkKK4EHyCIKL587C5MKj%2Bhxes9Z9UdAM%2F7%2BOIVLtlisbrCfWuFlueJiqBnFtmL5Nl5U9hMu%2BacTlTmGtL2xt2scjtQv56N%2BAhp7YTSxjl274Np9Wk6s01Voz%2FbpTYd2Qde12zYXbm15O5HCCoOks4gjueLIL1y19oy8fEXV&X-Amz-Signature=70b47b50a11b967fcebc2dcba08b7b43295ac4e0b64f9fbab91b5301dfe0fff3&X-Amz-SignedHeaders=host&x-id=GetObject)
