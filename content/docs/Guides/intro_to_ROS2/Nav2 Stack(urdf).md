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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6AZI6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDEgfzCQ6kOOoNcPX37xuyTVnaawXOMPhoO0uCRRYAE4AiEA4GPHT87IpjBL18EcRZkzJTmcGGZdKazC%2BTGKbKSS3IkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeZmwS7jrDi6Yg5byrcA0JhqYwoISwlViU49EGlsLd8kRk5%2BVLCQjz8JjClltY%2BAb%2Bz0emuc0%2BdB1QjRXvOOcpkxjK%2FOudFjrzwF%2BB6nYyXHq7xdsGkCLueNkDDA98PviyC%2BKuu1I10TWX6nPkDgJC9wDL7wEmzuPosPhIRoy6%2FEeacgAWnxI2VdzzmLNBXm2fcFDM%2BOD%2FH42mIwXr9szx4vLrqpATXXD1htKfKR8dd%2FfYNFgSWm8cRWYAq6kw1SJFBnHV3foOMGu54uHCXneF1kukwGnHwDBmOMhivj0QiRic5RrZKGzNsv9VsboYJ%2FKCbdNAMZUeENgMIVI%2BMDmCnB0KSRVP4XIQ3%2B0M1FTFetHRcG1cvCRIihiMOUYiRdzRHL4krJlSs0wjSLUzDPKCASd7uCZHQz7LnSIayRlv5qs3ZPRGcPjea0OGpDT11D2EHmRnZaUJApPOSnVpLGjRWUdpFA7AUMwo7wy1rmCU3F2CUjZyKMRP64XtgFecmM2vWqQFB4jSh15exOqjXywPzI%2BAK2W30dCVov6MlEk4AImAphJtsQlGHn9vg16Ru4tSTV2ntTsYdCoqcQ9JsgxTID8yAzT3WBRNZ2MD6UXcXaAya1caYfo72gZTJqtz%2BlxcToBC1K686L5XxMN7Lvb4GOqUBn8Is1gBl7gjuaZq3tNZRthoiy%2Fb3dAthSELfm9ww1uWpLGsxdeAsyszsYTPi8zgHn7ZBS5JC4Oy8orpIlDgyjiWjeqeux%2BHT%2FIwKqPHEa1nMrwlMLT9pTltB9NWYnNPe4H0zt7vjzDYISiRxnB7w82O1MyQfDS4oqQYuN29P%2BkbjFE7VCN%2F3T%2Bv%2BOtJDz7Ppvjq6FD5Jezyg0Z%2FLEQ2UQYLEQo0S&X-Amz-Signature=cfb5fa04e90c25c29f3a59b18ef091eca53572ca0dffa859a60986806d94ff8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6AZI6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDEgfzCQ6kOOoNcPX37xuyTVnaawXOMPhoO0uCRRYAE4AiEA4GPHT87IpjBL18EcRZkzJTmcGGZdKazC%2BTGKbKSS3IkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeZmwS7jrDi6Yg5byrcA0JhqYwoISwlViU49EGlsLd8kRk5%2BVLCQjz8JjClltY%2BAb%2Bz0emuc0%2BdB1QjRXvOOcpkxjK%2FOudFjrzwF%2BB6nYyXHq7xdsGkCLueNkDDA98PviyC%2BKuu1I10TWX6nPkDgJC9wDL7wEmzuPosPhIRoy6%2FEeacgAWnxI2VdzzmLNBXm2fcFDM%2BOD%2FH42mIwXr9szx4vLrqpATXXD1htKfKR8dd%2FfYNFgSWm8cRWYAq6kw1SJFBnHV3foOMGu54uHCXneF1kukwGnHwDBmOMhivj0QiRic5RrZKGzNsv9VsboYJ%2FKCbdNAMZUeENgMIVI%2BMDmCnB0KSRVP4XIQ3%2B0M1FTFetHRcG1cvCRIihiMOUYiRdzRHL4krJlSs0wjSLUzDPKCASd7uCZHQz7LnSIayRlv5qs3ZPRGcPjea0OGpDT11D2EHmRnZaUJApPOSnVpLGjRWUdpFA7AUMwo7wy1rmCU3F2CUjZyKMRP64XtgFecmM2vWqQFB4jSh15exOqjXywPzI%2BAK2W30dCVov6MlEk4AImAphJtsQlGHn9vg16Ru4tSTV2ntTsYdCoqcQ9JsgxTID8yAzT3WBRNZ2MD6UXcXaAya1caYfo72gZTJqtz%2BlxcToBC1K686L5XxMN7Lvb4GOqUBn8Is1gBl7gjuaZq3tNZRthoiy%2Fb3dAthSELfm9ww1uWpLGsxdeAsyszsYTPi8zgHn7ZBS5JC4Oy8orpIlDgyjiWjeqeux%2BHT%2FIwKqPHEa1nMrwlMLT9pTltB9NWYnNPe4H0zt7vjzDYISiRxnB7w82O1MyQfDS4oqQYuN29P%2BkbjFE7VCN%2F3T%2Bv%2BOtJDz7Ppvjq6FD5Jezyg0Z%2FLEQ2UQYLEQo0S&X-Amz-Signature=32f5bde2c689bbe29fae8721d7cfbf67aa49ff7fd10c98eeee99272036b8f17a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6AZI6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDEgfzCQ6kOOoNcPX37xuyTVnaawXOMPhoO0uCRRYAE4AiEA4GPHT87IpjBL18EcRZkzJTmcGGZdKazC%2BTGKbKSS3IkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeZmwS7jrDi6Yg5byrcA0JhqYwoISwlViU49EGlsLd8kRk5%2BVLCQjz8JjClltY%2BAb%2Bz0emuc0%2BdB1QjRXvOOcpkxjK%2FOudFjrzwF%2BB6nYyXHq7xdsGkCLueNkDDA98PviyC%2BKuu1I10TWX6nPkDgJC9wDL7wEmzuPosPhIRoy6%2FEeacgAWnxI2VdzzmLNBXm2fcFDM%2BOD%2FH42mIwXr9szx4vLrqpATXXD1htKfKR8dd%2FfYNFgSWm8cRWYAq6kw1SJFBnHV3foOMGu54uHCXneF1kukwGnHwDBmOMhivj0QiRic5RrZKGzNsv9VsboYJ%2FKCbdNAMZUeENgMIVI%2BMDmCnB0KSRVP4XIQ3%2B0M1FTFetHRcG1cvCRIihiMOUYiRdzRHL4krJlSs0wjSLUzDPKCASd7uCZHQz7LnSIayRlv5qs3ZPRGcPjea0OGpDT11D2EHmRnZaUJApPOSnVpLGjRWUdpFA7AUMwo7wy1rmCU3F2CUjZyKMRP64XtgFecmM2vWqQFB4jSh15exOqjXywPzI%2BAK2W30dCVov6MlEk4AImAphJtsQlGHn9vg16Ru4tSTV2ntTsYdCoqcQ9JsgxTID8yAzT3WBRNZ2MD6UXcXaAya1caYfo72gZTJqtz%2BlxcToBC1K686L5XxMN7Lvb4GOqUBn8Is1gBl7gjuaZq3tNZRthoiy%2Fb3dAthSELfm9ww1uWpLGsxdeAsyszsYTPi8zgHn7ZBS5JC4Oy8orpIlDgyjiWjeqeux%2BHT%2FIwKqPHEa1nMrwlMLT9pTltB9NWYnNPe4H0zt7vjzDYISiRxnB7w82O1MyQfDS4oqQYuN29P%2BkbjFE7VCN%2F3T%2Bv%2BOtJDz7Ppvjq6FD5Jezyg0Z%2FLEQ2UQYLEQo0S&X-Amz-Signature=2a9ff42d88980aaf02bff789fd367d9e88e9e60b24e167cf484e69ad7b857e84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6AZI6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDEgfzCQ6kOOoNcPX37xuyTVnaawXOMPhoO0uCRRYAE4AiEA4GPHT87IpjBL18EcRZkzJTmcGGZdKazC%2BTGKbKSS3IkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeZmwS7jrDi6Yg5byrcA0JhqYwoISwlViU49EGlsLd8kRk5%2BVLCQjz8JjClltY%2BAb%2Bz0emuc0%2BdB1QjRXvOOcpkxjK%2FOudFjrzwF%2BB6nYyXHq7xdsGkCLueNkDDA98PviyC%2BKuu1I10TWX6nPkDgJC9wDL7wEmzuPosPhIRoy6%2FEeacgAWnxI2VdzzmLNBXm2fcFDM%2BOD%2FH42mIwXr9szx4vLrqpATXXD1htKfKR8dd%2FfYNFgSWm8cRWYAq6kw1SJFBnHV3foOMGu54uHCXneF1kukwGnHwDBmOMhivj0QiRic5RrZKGzNsv9VsboYJ%2FKCbdNAMZUeENgMIVI%2BMDmCnB0KSRVP4XIQ3%2B0M1FTFetHRcG1cvCRIihiMOUYiRdzRHL4krJlSs0wjSLUzDPKCASd7uCZHQz7LnSIayRlv5qs3ZPRGcPjea0OGpDT11D2EHmRnZaUJApPOSnVpLGjRWUdpFA7AUMwo7wy1rmCU3F2CUjZyKMRP64XtgFecmM2vWqQFB4jSh15exOqjXywPzI%2BAK2W30dCVov6MlEk4AImAphJtsQlGHn9vg16Ru4tSTV2ntTsYdCoqcQ9JsgxTID8yAzT3WBRNZ2MD6UXcXaAya1caYfo72gZTJqtz%2BlxcToBC1K686L5XxMN7Lvb4GOqUBn8Is1gBl7gjuaZq3tNZRthoiy%2Fb3dAthSELfm9ww1uWpLGsxdeAsyszsYTPi8zgHn7ZBS5JC4Oy8orpIlDgyjiWjeqeux%2BHT%2FIwKqPHEa1nMrwlMLT9pTltB9NWYnNPe4H0zt7vjzDYISiRxnB7w82O1MyQfDS4oqQYuN29P%2BkbjFE7VCN%2F3T%2Bv%2BOtJDz7Ppvjq6FD5Jezyg0Z%2FLEQ2UQYLEQo0S&X-Amz-Signature=22ff942d2936383737e0718affd721c833c8c2d4b823d6c4e5964142ff618cde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6AZI6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDEgfzCQ6kOOoNcPX37xuyTVnaawXOMPhoO0uCRRYAE4AiEA4GPHT87IpjBL18EcRZkzJTmcGGZdKazC%2BTGKbKSS3IkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeZmwS7jrDi6Yg5byrcA0JhqYwoISwlViU49EGlsLd8kRk5%2BVLCQjz8JjClltY%2BAb%2Bz0emuc0%2BdB1QjRXvOOcpkxjK%2FOudFjrzwF%2BB6nYyXHq7xdsGkCLueNkDDA98PviyC%2BKuu1I10TWX6nPkDgJC9wDL7wEmzuPosPhIRoy6%2FEeacgAWnxI2VdzzmLNBXm2fcFDM%2BOD%2FH42mIwXr9szx4vLrqpATXXD1htKfKR8dd%2FfYNFgSWm8cRWYAq6kw1SJFBnHV3foOMGu54uHCXneF1kukwGnHwDBmOMhivj0QiRic5RrZKGzNsv9VsboYJ%2FKCbdNAMZUeENgMIVI%2BMDmCnB0KSRVP4XIQ3%2B0M1FTFetHRcG1cvCRIihiMOUYiRdzRHL4krJlSs0wjSLUzDPKCASd7uCZHQz7LnSIayRlv5qs3ZPRGcPjea0OGpDT11D2EHmRnZaUJApPOSnVpLGjRWUdpFA7AUMwo7wy1rmCU3F2CUjZyKMRP64XtgFecmM2vWqQFB4jSh15exOqjXywPzI%2BAK2W30dCVov6MlEk4AImAphJtsQlGHn9vg16Ru4tSTV2ntTsYdCoqcQ9JsgxTID8yAzT3WBRNZ2MD6UXcXaAya1caYfo72gZTJqtz%2BlxcToBC1K686L5XxMN7Lvb4GOqUBn8Is1gBl7gjuaZq3tNZRthoiy%2Fb3dAthSELfm9ww1uWpLGsxdeAsyszsYTPi8zgHn7ZBS5JC4Oy8orpIlDgyjiWjeqeux%2BHT%2FIwKqPHEa1nMrwlMLT9pTltB9NWYnNPe4H0zt7vjzDYISiRxnB7w82O1MyQfDS4oqQYuN29P%2BkbjFE7VCN%2F3T%2Bv%2BOtJDz7Ppvjq6FD5Jezyg0Z%2FLEQ2UQYLEQo0S&X-Amz-Signature=d15e12ae9e21ce4ba8c9202dc2d6cccb91c5ab305e947c16c7c35301263212ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKU6AZI6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDEgfzCQ6kOOoNcPX37xuyTVnaawXOMPhoO0uCRRYAE4AiEA4GPHT87IpjBL18EcRZkzJTmcGGZdKazC%2BTGKbKSS3IkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeZmwS7jrDi6Yg5byrcA0JhqYwoISwlViU49EGlsLd8kRk5%2BVLCQjz8JjClltY%2BAb%2Bz0emuc0%2BdB1QjRXvOOcpkxjK%2FOudFjrzwF%2BB6nYyXHq7xdsGkCLueNkDDA98PviyC%2BKuu1I10TWX6nPkDgJC9wDL7wEmzuPosPhIRoy6%2FEeacgAWnxI2VdzzmLNBXm2fcFDM%2BOD%2FH42mIwXr9szx4vLrqpATXXD1htKfKR8dd%2FfYNFgSWm8cRWYAq6kw1SJFBnHV3foOMGu54uHCXneF1kukwGnHwDBmOMhivj0QiRic5RrZKGzNsv9VsboYJ%2FKCbdNAMZUeENgMIVI%2BMDmCnB0KSRVP4XIQ3%2B0M1FTFetHRcG1cvCRIihiMOUYiRdzRHL4krJlSs0wjSLUzDPKCASd7uCZHQz7LnSIayRlv5qs3ZPRGcPjea0OGpDT11D2EHmRnZaUJApPOSnVpLGjRWUdpFA7AUMwo7wy1rmCU3F2CUjZyKMRP64XtgFecmM2vWqQFB4jSh15exOqjXywPzI%2BAK2W30dCVov6MlEk4AImAphJtsQlGHn9vg16Ru4tSTV2ntTsYdCoqcQ9JsgxTID8yAzT3WBRNZ2MD6UXcXaAya1caYfo72gZTJqtz%2BlxcToBC1K686L5XxMN7Lvb4GOqUBn8Is1gBl7gjuaZq3tNZRthoiy%2Fb3dAthSELfm9ww1uWpLGsxdeAsyszsYTPi8zgHn7ZBS5JC4Oy8orpIlDgyjiWjeqeux%2BHT%2FIwKqPHEa1nMrwlMLT9pTltB9NWYnNPe4H0zt7vjzDYISiRxnB7w82O1MyQfDS4oqQYuN29P%2BkbjFE7VCN%2F3T%2Bv%2BOtJDz7Ppvjq6FD5Jezyg0Z%2FLEQ2UQYLEQo0S&X-Amz-Signature=ca21a7f640a5875c0822f668bd20085a0cc4bcc7dc38e17ffd6762507a8e6a45&X-Amz-SignedHeaders=host&x-id=GetObject)
