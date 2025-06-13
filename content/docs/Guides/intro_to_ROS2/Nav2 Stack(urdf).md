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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X673FA6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBWPb3tcUNVAVKRpRJMoYh%2F%2BvOIiEVlDU8ZzSZ0Pkmh0AiAh5UVqC9cO1w9VTJ8GDr6e%2FT8oG%2BD6lLxzYJAeyhoH1Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMOQy2d0BewwxNNzTSKtwDgySeGTsMdsP4CKIbmxKoGRU7nu90pub%2FnI5LkCRRHtIw0g7Dv99Zi8DVPPBJNpLZqNr8PaixpVA7luKoIEaHA9VHyqPvH0QqusbqByD5V%2FT342OJgw6PKntMa4D51pnoD9qKVPD13zrZ2Nu%2Fl1bvYS30RL%2FScJVHXG7cl6bnT%2Blg20BNHBZLyOC9v3aKXxVY9yU8fEYkiCUVjznpJz8hfncy8iKrIF9Q5maTRcL79FkOUX2SQ75zuhNgZ5tbNfJbS23WD4sy26YffplzS8Sis8uMpdHDPDU1WDVAthGLs4dp7Gu3c8KAcWgBbWuzW9alArxyOXVN2SYzzGFDdu5bIiqv%2B4COQK0tMg%2BI5BIA1oUrtgIrcTS2%2F8%2BjO8C79EyL6A2ZVeDINrY2nWAtvWi298hsxDRcJt4xAAxWsUg2JK95B2CyItjozS%2F%2BEkHwVUB4dJsFYBTEYUeK78lArLwyfT2vDU1Dq10zsOClTxOUaC6z1KdNiGE5d%2FU9qgwsJWi0NiiOKUrTvyO4TraMGlSYSR84G7f3gAZ1q9%2BGSrg%2BSL6JeiAdf5IXm4m21FvOpPKRNZoEllDtxB9m0Y5Ekk6wR38Q%2Fs1HVkP3Ucf2Qfnx57KoCX3EcxuPSdy7pXcw6NuywgY6pgFSdkn3dwKY7oAq9US7RuUEDbI6mvIFylshrEa46GmRkepYuurAfEmXgG1g1RqWhOxg70MEcjTQ6Dbr4Mmm91aH%2FcMWkvKqrrLYvRLREdShkx1fwbgfwqIWOEwjiI%2BGOGA7NYV1SSSWu5jl2ehTLqx%2FD8vDLDA5yJw5f%2BdidH5D7m3BTWu4K8zmr%2Bz6pFMizK5TjOrLpNIVK6%2FUpkk1bsgZGLdlOgaC&X-Amz-Signature=147c384d0be09c6ecb050028562ffb138ed440fcd924c8bacc3b826bde0cda7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X673FA6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBWPb3tcUNVAVKRpRJMoYh%2F%2BvOIiEVlDU8ZzSZ0Pkmh0AiAh5UVqC9cO1w9VTJ8GDr6e%2FT8oG%2BD6lLxzYJAeyhoH1Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMOQy2d0BewwxNNzTSKtwDgySeGTsMdsP4CKIbmxKoGRU7nu90pub%2FnI5LkCRRHtIw0g7Dv99Zi8DVPPBJNpLZqNr8PaixpVA7luKoIEaHA9VHyqPvH0QqusbqByD5V%2FT342OJgw6PKntMa4D51pnoD9qKVPD13zrZ2Nu%2Fl1bvYS30RL%2FScJVHXG7cl6bnT%2Blg20BNHBZLyOC9v3aKXxVY9yU8fEYkiCUVjznpJz8hfncy8iKrIF9Q5maTRcL79FkOUX2SQ75zuhNgZ5tbNfJbS23WD4sy26YffplzS8Sis8uMpdHDPDU1WDVAthGLs4dp7Gu3c8KAcWgBbWuzW9alArxyOXVN2SYzzGFDdu5bIiqv%2B4COQK0tMg%2BI5BIA1oUrtgIrcTS2%2F8%2BjO8C79EyL6A2ZVeDINrY2nWAtvWi298hsxDRcJt4xAAxWsUg2JK95B2CyItjozS%2F%2BEkHwVUB4dJsFYBTEYUeK78lArLwyfT2vDU1Dq10zsOClTxOUaC6z1KdNiGE5d%2FU9qgwsJWi0NiiOKUrTvyO4TraMGlSYSR84G7f3gAZ1q9%2BGSrg%2BSL6JeiAdf5IXm4m21FvOpPKRNZoEllDtxB9m0Y5Ekk6wR38Q%2Fs1HVkP3Ucf2Qfnx57KoCX3EcxuPSdy7pXcw6NuywgY6pgFSdkn3dwKY7oAq9US7RuUEDbI6mvIFylshrEa46GmRkepYuurAfEmXgG1g1RqWhOxg70MEcjTQ6Dbr4Mmm91aH%2FcMWkvKqrrLYvRLREdShkx1fwbgfwqIWOEwjiI%2BGOGA7NYV1SSSWu5jl2ehTLqx%2FD8vDLDA5yJw5f%2BdidH5D7m3BTWu4K8zmr%2Bz6pFMizK5TjOrLpNIVK6%2FUpkk1bsgZGLdlOgaC&X-Amz-Signature=87dc1d5a7c4f953dab10412f2f28c9081f4feabf2a156bb911c7c09f5594ec99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X673FA6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBWPb3tcUNVAVKRpRJMoYh%2F%2BvOIiEVlDU8ZzSZ0Pkmh0AiAh5UVqC9cO1w9VTJ8GDr6e%2FT8oG%2BD6lLxzYJAeyhoH1Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMOQy2d0BewwxNNzTSKtwDgySeGTsMdsP4CKIbmxKoGRU7nu90pub%2FnI5LkCRRHtIw0g7Dv99Zi8DVPPBJNpLZqNr8PaixpVA7luKoIEaHA9VHyqPvH0QqusbqByD5V%2FT342OJgw6PKntMa4D51pnoD9qKVPD13zrZ2Nu%2Fl1bvYS30RL%2FScJVHXG7cl6bnT%2Blg20BNHBZLyOC9v3aKXxVY9yU8fEYkiCUVjznpJz8hfncy8iKrIF9Q5maTRcL79FkOUX2SQ75zuhNgZ5tbNfJbS23WD4sy26YffplzS8Sis8uMpdHDPDU1WDVAthGLs4dp7Gu3c8KAcWgBbWuzW9alArxyOXVN2SYzzGFDdu5bIiqv%2B4COQK0tMg%2BI5BIA1oUrtgIrcTS2%2F8%2BjO8C79EyL6A2ZVeDINrY2nWAtvWi298hsxDRcJt4xAAxWsUg2JK95B2CyItjozS%2F%2BEkHwVUB4dJsFYBTEYUeK78lArLwyfT2vDU1Dq10zsOClTxOUaC6z1KdNiGE5d%2FU9qgwsJWi0NiiOKUrTvyO4TraMGlSYSR84G7f3gAZ1q9%2BGSrg%2BSL6JeiAdf5IXm4m21FvOpPKRNZoEllDtxB9m0Y5Ekk6wR38Q%2Fs1HVkP3Ucf2Qfnx57KoCX3EcxuPSdy7pXcw6NuywgY6pgFSdkn3dwKY7oAq9US7RuUEDbI6mvIFylshrEa46GmRkepYuurAfEmXgG1g1RqWhOxg70MEcjTQ6Dbr4Mmm91aH%2FcMWkvKqrrLYvRLREdShkx1fwbgfwqIWOEwjiI%2BGOGA7NYV1SSSWu5jl2ehTLqx%2FD8vDLDA5yJw5f%2BdidH5D7m3BTWu4K8zmr%2Bz6pFMizK5TjOrLpNIVK6%2FUpkk1bsgZGLdlOgaC&X-Amz-Signature=bee720b51839a47ed5a86017963dbef59ec76e1dab906aa3ae56d8357937046f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X673FA6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBWPb3tcUNVAVKRpRJMoYh%2F%2BvOIiEVlDU8ZzSZ0Pkmh0AiAh5UVqC9cO1w9VTJ8GDr6e%2FT8oG%2BD6lLxzYJAeyhoH1Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMOQy2d0BewwxNNzTSKtwDgySeGTsMdsP4CKIbmxKoGRU7nu90pub%2FnI5LkCRRHtIw0g7Dv99Zi8DVPPBJNpLZqNr8PaixpVA7luKoIEaHA9VHyqPvH0QqusbqByD5V%2FT342OJgw6PKntMa4D51pnoD9qKVPD13zrZ2Nu%2Fl1bvYS30RL%2FScJVHXG7cl6bnT%2Blg20BNHBZLyOC9v3aKXxVY9yU8fEYkiCUVjznpJz8hfncy8iKrIF9Q5maTRcL79FkOUX2SQ75zuhNgZ5tbNfJbS23WD4sy26YffplzS8Sis8uMpdHDPDU1WDVAthGLs4dp7Gu3c8KAcWgBbWuzW9alArxyOXVN2SYzzGFDdu5bIiqv%2B4COQK0tMg%2BI5BIA1oUrtgIrcTS2%2F8%2BjO8C79EyL6A2ZVeDINrY2nWAtvWi298hsxDRcJt4xAAxWsUg2JK95B2CyItjozS%2F%2BEkHwVUB4dJsFYBTEYUeK78lArLwyfT2vDU1Dq10zsOClTxOUaC6z1KdNiGE5d%2FU9qgwsJWi0NiiOKUrTvyO4TraMGlSYSR84G7f3gAZ1q9%2BGSrg%2BSL6JeiAdf5IXm4m21FvOpPKRNZoEllDtxB9m0Y5Ekk6wR38Q%2Fs1HVkP3Ucf2Qfnx57KoCX3EcxuPSdy7pXcw6NuywgY6pgFSdkn3dwKY7oAq9US7RuUEDbI6mvIFylshrEa46GmRkepYuurAfEmXgG1g1RqWhOxg70MEcjTQ6Dbr4Mmm91aH%2FcMWkvKqrrLYvRLREdShkx1fwbgfwqIWOEwjiI%2BGOGA7NYV1SSSWu5jl2ehTLqx%2FD8vDLDA5yJw5f%2BdidH5D7m3BTWu4K8zmr%2Bz6pFMizK5TjOrLpNIVK6%2FUpkk1bsgZGLdlOgaC&X-Amz-Signature=f02f87a31723d1e7f552bdf2f085229d6f4ab783d33c1af063316eb1c4b07e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X673FA6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBWPb3tcUNVAVKRpRJMoYh%2F%2BvOIiEVlDU8ZzSZ0Pkmh0AiAh5UVqC9cO1w9VTJ8GDr6e%2FT8oG%2BD6lLxzYJAeyhoH1Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMOQy2d0BewwxNNzTSKtwDgySeGTsMdsP4CKIbmxKoGRU7nu90pub%2FnI5LkCRRHtIw0g7Dv99Zi8DVPPBJNpLZqNr8PaixpVA7luKoIEaHA9VHyqPvH0QqusbqByD5V%2FT342OJgw6PKntMa4D51pnoD9qKVPD13zrZ2Nu%2Fl1bvYS30RL%2FScJVHXG7cl6bnT%2Blg20BNHBZLyOC9v3aKXxVY9yU8fEYkiCUVjznpJz8hfncy8iKrIF9Q5maTRcL79FkOUX2SQ75zuhNgZ5tbNfJbS23WD4sy26YffplzS8Sis8uMpdHDPDU1WDVAthGLs4dp7Gu3c8KAcWgBbWuzW9alArxyOXVN2SYzzGFDdu5bIiqv%2B4COQK0tMg%2BI5BIA1oUrtgIrcTS2%2F8%2BjO8C79EyL6A2ZVeDINrY2nWAtvWi298hsxDRcJt4xAAxWsUg2JK95B2CyItjozS%2F%2BEkHwVUB4dJsFYBTEYUeK78lArLwyfT2vDU1Dq10zsOClTxOUaC6z1KdNiGE5d%2FU9qgwsJWi0NiiOKUrTvyO4TraMGlSYSR84G7f3gAZ1q9%2BGSrg%2BSL6JeiAdf5IXm4m21FvOpPKRNZoEllDtxB9m0Y5Ekk6wR38Q%2Fs1HVkP3Ucf2Qfnx57KoCX3EcxuPSdy7pXcw6NuywgY6pgFSdkn3dwKY7oAq9US7RuUEDbI6mvIFylshrEa46GmRkepYuurAfEmXgG1g1RqWhOxg70MEcjTQ6Dbr4Mmm91aH%2FcMWkvKqrrLYvRLREdShkx1fwbgfwqIWOEwjiI%2BGOGA7NYV1SSSWu5jl2ehTLqx%2FD8vDLDA5yJw5f%2BdidH5D7m3BTWu4K8zmr%2Bz6pFMizK5TjOrLpNIVK6%2FUpkk1bsgZGLdlOgaC&X-Amz-Signature=1f5a21a317bb6a905cf4d5df86957adc739d2be85e16a672bc626f93ae3f8124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X673FA6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBWPb3tcUNVAVKRpRJMoYh%2F%2BvOIiEVlDU8ZzSZ0Pkmh0AiAh5UVqC9cO1w9VTJ8GDr6e%2FT8oG%2BD6lLxzYJAeyhoH1Sr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMOQy2d0BewwxNNzTSKtwDgySeGTsMdsP4CKIbmxKoGRU7nu90pub%2FnI5LkCRRHtIw0g7Dv99Zi8DVPPBJNpLZqNr8PaixpVA7luKoIEaHA9VHyqPvH0QqusbqByD5V%2FT342OJgw6PKntMa4D51pnoD9qKVPD13zrZ2Nu%2Fl1bvYS30RL%2FScJVHXG7cl6bnT%2Blg20BNHBZLyOC9v3aKXxVY9yU8fEYkiCUVjznpJz8hfncy8iKrIF9Q5maTRcL79FkOUX2SQ75zuhNgZ5tbNfJbS23WD4sy26YffplzS8Sis8uMpdHDPDU1WDVAthGLs4dp7Gu3c8KAcWgBbWuzW9alArxyOXVN2SYzzGFDdu5bIiqv%2B4COQK0tMg%2BI5BIA1oUrtgIrcTS2%2F8%2BjO8C79EyL6A2ZVeDINrY2nWAtvWi298hsxDRcJt4xAAxWsUg2JK95B2CyItjozS%2F%2BEkHwVUB4dJsFYBTEYUeK78lArLwyfT2vDU1Dq10zsOClTxOUaC6z1KdNiGE5d%2FU9qgwsJWi0NiiOKUrTvyO4TraMGlSYSR84G7f3gAZ1q9%2BGSrg%2BSL6JeiAdf5IXm4m21FvOpPKRNZoEllDtxB9m0Y5Ekk6wR38Q%2Fs1HVkP3Ucf2Qfnx57KoCX3EcxuPSdy7pXcw6NuywgY6pgFSdkn3dwKY7oAq9US7RuUEDbI6mvIFylshrEa46GmRkepYuurAfEmXgG1g1RqWhOxg70MEcjTQ6Dbr4Mmm91aH%2FcMWkvKqrrLYvRLREdShkx1fwbgfwqIWOEwjiI%2BGOGA7NYV1SSSWu5jl2ehTLqx%2FD8vDLDA5yJw5f%2BdidH5D7m3BTWu4K8zmr%2Bz6pFMizK5TjOrLpNIVK6%2FUpkk1bsgZGLdlOgaC&X-Amz-Signature=890e03ae20c085c97b3f2a0fb749cd305977cad01a3a84e1e1d4ae128020eee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
