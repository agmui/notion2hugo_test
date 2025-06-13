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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWWWQ5M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvW9aeRB0oThPQYMaBCUwcs%2ByuCQQfKWqFQc1v7alZewIhAPw%2BirM%2BbgasZZNLf7cvHngJL4ZJDuLwwzrRCtwf0Ex%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxWQZuNPdRmOeB3Iq3AN3OY2qkmUCo%2BgwitEK2%2BZgnyx1J5Qsq1vcO%2BPILR4i1QqA15hBOk6tk1J%2FrnJGJijmf3VWwZ3M3w%2FwUiqaXPuYxYZvseonF00BTboiSPxBFs5SmJEXzrXu8sGRVO0WiEAPO%2BKCqK%2BktOCPQVPcEPwPqztEtD7Co6%2BVhOc6fyJgMzvzIIkbVP%2FuKmw4TdJvUL5s8TKuk%2F5Ss4KLCJHuxOh4nLcIksOCJBBsy9sFaGkNnfyTTGW%2BMobQlr9NgoMpMr%2FeELShxX0Mul2Vy7opXa66pUmvL16NVtz51GHXzJ4shnILVclvdoOhiF3GVR4B96H10j%2BarBAqD%2BxaXDCDdO0OPgHcFZWaLmMa5s3QiSEYIZHoIK2Q6%2B%2BqnxdIacoY1j2HHv67V2Pu%2BGdw91sxGso2cjQf6VfQVj2sUzH1pkLnYRveZcbsUHIqEI%2Bye4TXgkDwKDlaAmOX8uT3wlc8UKVlbxkYEXl6xB%2FP4bP49NgzV4hpMDnqf1g59MN9caIoI5Z%2F5lAPK4CbL5OE2SNOZsInTNJ0QD%2BF61Wrs162G8kQl%2Bs7Nb%2FgexFro3O7UZgciv1ZIm%2FiFBX22YvtAtPXOikiO%2Bto7b8119u%2BQLJuFzVqmMCrfx0CJhNqZ%2FOyFjD8yK7CBjqkAb97FF9opRZ3lmLSjUz9I08D96OfH7aw%2Bg%2FQJdLwBMyWjatJz1KHTjKFYqXvl23Z8FPOOJT4evhtED0TB0MIOOINfG9Y5I1cgDPvOeNxPKn4pcMUtkfRTExmwqDLWzAM0ygghOPNqtn6HfAaGP0L7jT1p46XomFzo3fJO82lGY49lFdmBmfP0fUQHyDWQrm2MLiIOWJqmJ%2FbsdgTB8B3u%2BMPcwEt&X-Amz-Signature=38e262d885f8a0d95d8dc6540cc2f2492d390dde0ec1157ae7f7fb6ca1131dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWWWQ5M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvW9aeRB0oThPQYMaBCUwcs%2ByuCQQfKWqFQc1v7alZewIhAPw%2BirM%2BbgasZZNLf7cvHngJL4ZJDuLwwzrRCtwf0Ex%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxWQZuNPdRmOeB3Iq3AN3OY2qkmUCo%2BgwitEK2%2BZgnyx1J5Qsq1vcO%2BPILR4i1QqA15hBOk6tk1J%2FrnJGJijmf3VWwZ3M3w%2FwUiqaXPuYxYZvseonF00BTboiSPxBFs5SmJEXzrXu8sGRVO0WiEAPO%2BKCqK%2BktOCPQVPcEPwPqztEtD7Co6%2BVhOc6fyJgMzvzIIkbVP%2FuKmw4TdJvUL5s8TKuk%2F5Ss4KLCJHuxOh4nLcIksOCJBBsy9sFaGkNnfyTTGW%2BMobQlr9NgoMpMr%2FeELShxX0Mul2Vy7opXa66pUmvL16NVtz51GHXzJ4shnILVclvdoOhiF3GVR4B96H10j%2BarBAqD%2BxaXDCDdO0OPgHcFZWaLmMa5s3QiSEYIZHoIK2Q6%2B%2BqnxdIacoY1j2HHv67V2Pu%2BGdw91sxGso2cjQf6VfQVj2sUzH1pkLnYRveZcbsUHIqEI%2Bye4TXgkDwKDlaAmOX8uT3wlc8UKVlbxkYEXl6xB%2FP4bP49NgzV4hpMDnqf1g59MN9caIoI5Z%2F5lAPK4CbL5OE2SNOZsInTNJ0QD%2BF61Wrs162G8kQl%2Bs7Nb%2FgexFro3O7UZgciv1ZIm%2FiFBX22YvtAtPXOikiO%2Bto7b8119u%2BQLJuFzVqmMCrfx0CJhNqZ%2FOyFjD8yK7CBjqkAb97FF9opRZ3lmLSjUz9I08D96OfH7aw%2Bg%2FQJdLwBMyWjatJz1KHTjKFYqXvl23Z8FPOOJT4evhtED0TB0MIOOINfG9Y5I1cgDPvOeNxPKn4pcMUtkfRTExmwqDLWzAM0ygghOPNqtn6HfAaGP0L7jT1p46XomFzo3fJO82lGY49lFdmBmfP0fUQHyDWQrm2MLiIOWJqmJ%2FbsdgTB8B3u%2BMPcwEt&X-Amz-Signature=e3b665de47462a135f9bafb7ae9ec0a392584ce47f9b0a21e5039f09b7aec720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWWWQ5M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvW9aeRB0oThPQYMaBCUwcs%2ByuCQQfKWqFQc1v7alZewIhAPw%2BirM%2BbgasZZNLf7cvHngJL4ZJDuLwwzrRCtwf0Ex%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxWQZuNPdRmOeB3Iq3AN3OY2qkmUCo%2BgwitEK2%2BZgnyx1J5Qsq1vcO%2BPILR4i1QqA15hBOk6tk1J%2FrnJGJijmf3VWwZ3M3w%2FwUiqaXPuYxYZvseonF00BTboiSPxBFs5SmJEXzrXu8sGRVO0WiEAPO%2BKCqK%2BktOCPQVPcEPwPqztEtD7Co6%2BVhOc6fyJgMzvzIIkbVP%2FuKmw4TdJvUL5s8TKuk%2F5Ss4KLCJHuxOh4nLcIksOCJBBsy9sFaGkNnfyTTGW%2BMobQlr9NgoMpMr%2FeELShxX0Mul2Vy7opXa66pUmvL16NVtz51GHXzJ4shnILVclvdoOhiF3GVR4B96H10j%2BarBAqD%2BxaXDCDdO0OPgHcFZWaLmMa5s3QiSEYIZHoIK2Q6%2B%2BqnxdIacoY1j2HHv67V2Pu%2BGdw91sxGso2cjQf6VfQVj2sUzH1pkLnYRveZcbsUHIqEI%2Bye4TXgkDwKDlaAmOX8uT3wlc8UKVlbxkYEXl6xB%2FP4bP49NgzV4hpMDnqf1g59MN9caIoI5Z%2F5lAPK4CbL5OE2SNOZsInTNJ0QD%2BF61Wrs162G8kQl%2Bs7Nb%2FgexFro3O7UZgciv1ZIm%2FiFBX22YvtAtPXOikiO%2Bto7b8119u%2BQLJuFzVqmMCrfx0CJhNqZ%2FOyFjD8yK7CBjqkAb97FF9opRZ3lmLSjUz9I08D96OfH7aw%2Bg%2FQJdLwBMyWjatJz1KHTjKFYqXvl23Z8FPOOJT4evhtED0TB0MIOOINfG9Y5I1cgDPvOeNxPKn4pcMUtkfRTExmwqDLWzAM0ygghOPNqtn6HfAaGP0L7jT1p46XomFzo3fJO82lGY49lFdmBmfP0fUQHyDWQrm2MLiIOWJqmJ%2FbsdgTB8B3u%2BMPcwEt&X-Amz-Signature=8b42a0d1543c94c7b76d0121c1e75a9a41d49d52a815af68db8e6aaf1e2b9dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWWWQ5M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvW9aeRB0oThPQYMaBCUwcs%2ByuCQQfKWqFQc1v7alZewIhAPw%2BirM%2BbgasZZNLf7cvHngJL4ZJDuLwwzrRCtwf0Ex%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxWQZuNPdRmOeB3Iq3AN3OY2qkmUCo%2BgwitEK2%2BZgnyx1J5Qsq1vcO%2BPILR4i1QqA15hBOk6tk1J%2FrnJGJijmf3VWwZ3M3w%2FwUiqaXPuYxYZvseonF00BTboiSPxBFs5SmJEXzrXu8sGRVO0WiEAPO%2BKCqK%2BktOCPQVPcEPwPqztEtD7Co6%2BVhOc6fyJgMzvzIIkbVP%2FuKmw4TdJvUL5s8TKuk%2F5Ss4KLCJHuxOh4nLcIksOCJBBsy9sFaGkNnfyTTGW%2BMobQlr9NgoMpMr%2FeELShxX0Mul2Vy7opXa66pUmvL16NVtz51GHXzJ4shnILVclvdoOhiF3GVR4B96H10j%2BarBAqD%2BxaXDCDdO0OPgHcFZWaLmMa5s3QiSEYIZHoIK2Q6%2B%2BqnxdIacoY1j2HHv67V2Pu%2BGdw91sxGso2cjQf6VfQVj2sUzH1pkLnYRveZcbsUHIqEI%2Bye4TXgkDwKDlaAmOX8uT3wlc8UKVlbxkYEXl6xB%2FP4bP49NgzV4hpMDnqf1g59MN9caIoI5Z%2F5lAPK4CbL5OE2SNOZsInTNJ0QD%2BF61Wrs162G8kQl%2Bs7Nb%2FgexFro3O7UZgciv1ZIm%2FiFBX22YvtAtPXOikiO%2Bto7b8119u%2BQLJuFzVqmMCrfx0CJhNqZ%2FOyFjD8yK7CBjqkAb97FF9opRZ3lmLSjUz9I08D96OfH7aw%2Bg%2FQJdLwBMyWjatJz1KHTjKFYqXvl23Z8FPOOJT4evhtED0TB0MIOOINfG9Y5I1cgDPvOeNxPKn4pcMUtkfRTExmwqDLWzAM0ygghOPNqtn6HfAaGP0L7jT1p46XomFzo3fJO82lGY49lFdmBmfP0fUQHyDWQrm2MLiIOWJqmJ%2FbsdgTB8B3u%2BMPcwEt&X-Amz-Signature=8eb766f5271b03b71a52678ac01b9e9435b61e47abf5fd63a2c01e06850793ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWWWQ5M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvW9aeRB0oThPQYMaBCUwcs%2ByuCQQfKWqFQc1v7alZewIhAPw%2BirM%2BbgasZZNLf7cvHngJL4ZJDuLwwzrRCtwf0Ex%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxWQZuNPdRmOeB3Iq3AN3OY2qkmUCo%2BgwitEK2%2BZgnyx1J5Qsq1vcO%2BPILR4i1QqA15hBOk6tk1J%2FrnJGJijmf3VWwZ3M3w%2FwUiqaXPuYxYZvseonF00BTboiSPxBFs5SmJEXzrXu8sGRVO0WiEAPO%2BKCqK%2BktOCPQVPcEPwPqztEtD7Co6%2BVhOc6fyJgMzvzIIkbVP%2FuKmw4TdJvUL5s8TKuk%2F5Ss4KLCJHuxOh4nLcIksOCJBBsy9sFaGkNnfyTTGW%2BMobQlr9NgoMpMr%2FeELShxX0Mul2Vy7opXa66pUmvL16NVtz51GHXzJ4shnILVclvdoOhiF3GVR4B96H10j%2BarBAqD%2BxaXDCDdO0OPgHcFZWaLmMa5s3QiSEYIZHoIK2Q6%2B%2BqnxdIacoY1j2HHv67V2Pu%2BGdw91sxGso2cjQf6VfQVj2sUzH1pkLnYRveZcbsUHIqEI%2Bye4TXgkDwKDlaAmOX8uT3wlc8UKVlbxkYEXl6xB%2FP4bP49NgzV4hpMDnqf1g59MN9caIoI5Z%2F5lAPK4CbL5OE2SNOZsInTNJ0QD%2BF61Wrs162G8kQl%2Bs7Nb%2FgexFro3O7UZgciv1ZIm%2FiFBX22YvtAtPXOikiO%2Bto7b8119u%2BQLJuFzVqmMCrfx0CJhNqZ%2FOyFjD8yK7CBjqkAb97FF9opRZ3lmLSjUz9I08D96OfH7aw%2Bg%2FQJdLwBMyWjatJz1KHTjKFYqXvl23Z8FPOOJT4evhtED0TB0MIOOINfG9Y5I1cgDPvOeNxPKn4pcMUtkfRTExmwqDLWzAM0ygghOPNqtn6HfAaGP0L7jT1p46XomFzo3fJO82lGY49lFdmBmfP0fUQHyDWQrm2MLiIOWJqmJ%2FbsdgTB8B3u%2BMPcwEt&X-Amz-Signature=3ca37128ea54bf8c8adfaecceb6c5e16c86cb035eea040a5b341f97a70d394f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWWWQ5M%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCvW9aeRB0oThPQYMaBCUwcs%2ByuCQQfKWqFQc1v7alZewIhAPw%2BirM%2BbgasZZNLf7cvHngJL4ZJDuLwwzrRCtwf0Ex%2FKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxWQZuNPdRmOeB3Iq3AN3OY2qkmUCo%2BgwitEK2%2BZgnyx1J5Qsq1vcO%2BPILR4i1QqA15hBOk6tk1J%2FrnJGJijmf3VWwZ3M3w%2FwUiqaXPuYxYZvseonF00BTboiSPxBFs5SmJEXzrXu8sGRVO0WiEAPO%2BKCqK%2BktOCPQVPcEPwPqztEtD7Co6%2BVhOc6fyJgMzvzIIkbVP%2FuKmw4TdJvUL5s8TKuk%2F5Ss4KLCJHuxOh4nLcIksOCJBBsy9sFaGkNnfyTTGW%2BMobQlr9NgoMpMr%2FeELShxX0Mul2Vy7opXa66pUmvL16NVtz51GHXzJ4shnILVclvdoOhiF3GVR4B96H10j%2BarBAqD%2BxaXDCDdO0OPgHcFZWaLmMa5s3QiSEYIZHoIK2Q6%2B%2BqnxdIacoY1j2HHv67V2Pu%2BGdw91sxGso2cjQf6VfQVj2sUzH1pkLnYRveZcbsUHIqEI%2Bye4TXgkDwKDlaAmOX8uT3wlc8UKVlbxkYEXl6xB%2FP4bP49NgzV4hpMDnqf1g59MN9caIoI5Z%2F5lAPK4CbL5OE2SNOZsInTNJ0QD%2BF61Wrs162G8kQl%2Bs7Nb%2FgexFro3O7UZgciv1ZIm%2FiFBX22YvtAtPXOikiO%2Bto7b8119u%2BQLJuFzVqmMCrfx0CJhNqZ%2FOyFjD8yK7CBjqkAb97FF9opRZ3lmLSjUz9I08D96OfH7aw%2Bg%2FQJdLwBMyWjatJz1KHTjKFYqXvl23Z8FPOOJT4evhtED0TB0MIOOINfG9Y5I1cgDPvOeNxPKn4pcMUtkfRTExmwqDLWzAM0ygghOPNqtn6HfAaGP0L7jT1p46XomFzo3fJO82lGY49lFdmBmfP0fUQHyDWQrm2MLiIOWJqmJ%2FbsdgTB8B3u%2BMPcwEt&X-Amz-Signature=7827b4c5a2992db10edc9e8bb2bd4f030f4a0afe231576d3f28ac9f6a15e6f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
