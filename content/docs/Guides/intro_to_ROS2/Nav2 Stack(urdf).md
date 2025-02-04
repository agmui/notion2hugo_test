---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=1f40a6ef6656fcb1266468be07a33d914e534220f4105ca911e67c68ede77cba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=cbc4ae58d5b7fbe4805ac93949dc5e064aef099f4b5e1ff678d1cb7454796ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=a1b8e50e8d77024e804859a90da414a66b177d81ec16cbbce4212e3f6c63147f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=cda948b6274b228a971b9caaba478ffce1fdef9c3b33edede9f3ee10e7408893&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=d185af01ac9f03186a11878aac70e707d0e011d58a8c814003164b2b0a08c1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZKF42Q%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCq%2FzRDO4ph8jH7vDu9cMD4vUx8ENZnBgjkhKm2Xqg0qQIhAIk%2Fx%2BoaxoGLuParlSRPiOMnzXRIt7KOd0CLrBfayZZ4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwK5pWwZ9T3pNkWHpgq3APUG9Far0FVY8cCTCaiTbWZH0DU1hH7DOwBCzgXImVzPSSDuNkNudwEiVutgeLTub6eV9rUhE9PH71mwiolyLqZleXueMuBDx5DEbuB9aScfZXWc96GOvxfTKHu9VwlYmb9C3%2BMa5yY%2FhQkh4EDyNPcgrbkvnv9zVKyhlP5G5UuNlgsuuI4gfZ90uv%2FqeKlptkTwFYNGZ2Qwrxu2kiMcsj%2Bf612oTsjKHEU%2FL79CSwhr5KwuB7SiHHHgz7jW1CbsHwXJC9k00qwNZJcVuoUCgF%2BpF5EfdwOqlquWaMKNBqov9KArJsaWsALOIz5GveHGTlr5rEzB5Gk4FdGDwO3MeOaicU0z7xhMtrnFNizjptgjgtnMmeKU7JqDpys1%2FHFpgPo2V5TjEan4fTwIk1ZWgYT71yL5QUBPtjhd10hRyHPuHdf3MgazSzFrN8ycC15ELf6QQMhpf98Gl8GmOZZ0N8LdfGhxxcsUVQtbsyBg%2BKd6ymJE9d3go8ZWiCDn%2BqxuFJ8mcB5Tn4ls6wrIFPwxI4Vi07spBLHre3SsjWDfuWiQiiIHTmETx%2FcD5XN2V9N%2B1kleoUDSUzfx3S5Q6kiNHMfJ5WgDCEFS0Ta619vGUSk877gpVsoah15kZ2vizCbzIe9BjqkASBIz3IIwrmHs9t1oLpuLYEzTTXnsmLg6Ty0nmwAVohFknwVP17NpyW7dE1%2BXYatvi9ykjwOYsZoYE3wjS3CoYZP77M3RouJTzMIclV47RKrfoNlIpn1ouRa4fCX24vM87affDtk2968D3696BMGRSdQ5eVcrdYe%2BwFcf2D8057GOrkfHiu%2F4zb1y%2FrmRYcAtef1yRc68Id8kLzPQPIlGaWwi%2BDf&X-Amz-Signature=05882ceea3c297891779259b40446da0e873aa4124aad0a2c7d8adcecc116d2a&X-Amz-SignedHeaders=host&x-id=GetObject)
