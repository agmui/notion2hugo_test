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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWRGC4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAOxAjPApcEKj0Ak51QBhxWUVYoWeEx%2BK5tOovIxc%2FgIgWJQfdaQ4mQG4nr6T9Al1m4bolUDUeWXZ5qeXW6YziOUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJa7t8HzjvEB3qyyrcAxBPzDnS40cQtMQJu0nhp0fPnR%2F%2B2UaS3n18zV%2Bf21cSuSeONmAysbB6TzqbG7biny8ul%2BwzlH%2F8Eunlnmq7MSL60m%2BFNjS2z9rDetVD2trJnKaCFWUJZwzWCIek70P1wZmuOzA7AtBrcGV75gRN0key3YVqEAwCGTLXTGbAiHyTvPMC25F%2BvE4hBIT9dmjLIB5Rh6S6bYfYGy5wx2gsdMKpbNyovhNju20QE5yKkDVZSvQoPvCnPE%2FveyqRfpKVbfTLkLirkC9PGEDJL6ftKAApZELsYwgTd2FdrUKlCis5hD%2BuKGGeAPoYZo3boLOBsuRgI0tib4IAEmEHZtylbmYqm%2Fxw1V5djQU%2Bj07UF2rjUNAVcioPVYPDPXLDj8%2FalYPQYGH25aeZIunxMyubg9sGXo4TPb%2Bpn80zCyRjQyhWyeMhaETZeGQn1dULZWXmg%2BF1Z1LUgLZ5PLPOtEgPypV8LYQJAuwGF8BxxP9qOmjvIBRkyYiGd6OZVtJYerdmXkFM9SkrofDTVabdKk3ZqHGmgAQ4%2FJrTYFP3O1Ycc1GEI%2BKSDZZ5%2FuL%2Fe%2BiQ8fcmXDQ8lk2i1astuh8L4aqELqI4JZKK%2Bj%2BAfkqJ1GzB5eDs79gqR59U84oOq%2BGsMIfO9bwGOqUBm0kNlfFXTt2UeF0ka2BGdqXfzIhtibSSVa00x8ssR5MDCG%2FtFU4cQGENh%2BHP1H5E8Y1FeeTMbD8BPgfbQ1nC08zofKylQ0uW3YFJcSyf9g0%2BqpiPGYMgD2%2FdlG8mwv38IQUMF4DZEkq6DScD3LTibFMmaZ4QpIIrkGA%2F%2FvrO1ZFwzfGl8UdMqclTraAlP9783FYvK%2FI5KMkeRSKByy58axi4JO6E&X-Amz-Signature=acf0f85adde8ac18fa06c8387448ed44f3dce631542c6153b734a5d0be807661&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWRGC4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAOxAjPApcEKj0Ak51QBhxWUVYoWeEx%2BK5tOovIxc%2FgIgWJQfdaQ4mQG4nr6T9Al1m4bolUDUeWXZ5qeXW6YziOUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJa7t8HzjvEB3qyyrcAxBPzDnS40cQtMQJu0nhp0fPnR%2F%2B2UaS3n18zV%2Bf21cSuSeONmAysbB6TzqbG7biny8ul%2BwzlH%2F8Eunlnmq7MSL60m%2BFNjS2z9rDetVD2trJnKaCFWUJZwzWCIek70P1wZmuOzA7AtBrcGV75gRN0key3YVqEAwCGTLXTGbAiHyTvPMC25F%2BvE4hBIT9dmjLIB5Rh6S6bYfYGy5wx2gsdMKpbNyovhNju20QE5yKkDVZSvQoPvCnPE%2FveyqRfpKVbfTLkLirkC9PGEDJL6ftKAApZELsYwgTd2FdrUKlCis5hD%2BuKGGeAPoYZo3boLOBsuRgI0tib4IAEmEHZtylbmYqm%2Fxw1V5djQU%2Bj07UF2rjUNAVcioPVYPDPXLDj8%2FalYPQYGH25aeZIunxMyubg9sGXo4TPb%2Bpn80zCyRjQyhWyeMhaETZeGQn1dULZWXmg%2BF1Z1LUgLZ5PLPOtEgPypV8LYQJAuwGF8BxxP9qOmjvIBRkyYiGd6OZVtJYerdmXkFM9SkrofDTVabdKk3ZqHGmgAQ4%2FJrTYFP3O1Ycc1GEI%2BKSDZZ5%2FuL%2Fe%2BiQ8fcmXDQ8lk2i1astuh8L4aqELqI4JZKK%2Bj%2BAfkqJ1GzB5eDs79gqR59U84oOq%2BGsMIfO9bwGOqUBm0kNlfFXTt2UeF0ka2BGdqXfzIhtibSSVa00x8ssR5MDCG%2FtFU4cQGENh%2BHP1H5E8Y1FeeTMbD8BPgfbQ1nC08zofKylQ0uW3YFJcSyf9g0%2BqpiPGYMgD2%2FdlG8mwv38IQUMF4DZEkq6DScD3LTibFMmaZ4QpIIrkGA%2F%2FvrO1ZFwzfGl8UdMqclTraAlP9783FYvK%2FI5KMkeRSKByy58axi4JO6E&X-Amz-Signature=d172066ba971bdd075033149e8a96929044990fb09544bd763bbf6b25575b2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWRGC4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAOxAjPApcEKj0Ak51QBhxWUVYoWeEx%2BK5tOovIxc%2FgIgWJQfdaQ4mQG4nr6T9Al1m4bolUDUeWXZ5qeXW6YziOUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJa7t8HzjvEB3qyyrcAxBPzDnS40cQtMQJu0nhp0fPnR%2F%2B2UaS3n18zV%2Bf21cSuSeONmAysbB6TzqbG7biny8ul%2BwzlH%2F8Eunlnmq7MSL60m%2BFNjS2z9rDetVD2trJnKaCFWUJZwzWCIek70P1wZmuOzA7AtBrcGV75gRN0key3YVqEAwCGTLXTGbAiHyTvPMC25F%2BvE4hBIT9dmjLIB5Rh6S6bYfYGy5wx2gsdMKpbNyovhNju20QE5yKkDVZSvQoPvCnPE%2FveyqRfpKVbfTLkLirkC9PGEDJL6ftKAApZELsYwgTd2FdrUKlCis5hD%2BuKGGeAPoYZo3boLOBsuRgI0tib4IAEmEHZtylbmYqm%2Fxw1V5djQU%2Bj07UF2rjUNAVcioPVYPDPXLDj8%2FalYPQYGH25aeZIunxMyubg9sGXo4TPb%2Bpn80zCyRjQyhWyeMhaETZeGQn1dULZWXmg%2BF1Z1LUgLZ5PLPOtEgPypV8LYQJAuwGF8BxxP9qOmjvIBRkyYiGd6OZVtJYerdmXkFM9SkrofDTVabdKk3ZqHGmgAQ4%2FJrTYFP3O1Ycc1GEI%2BKSDZZ5%2FuL%2Fe%2BiQ8fcmXDQ8lk2i1astuh8L4aqELqI4JZKK%2Bj%2BAfkqJ1GzB5eDs79gqR59U84oOq%2BGsMIfO9bwGOqUBm0kNlfFXTt2UeF0ka2BGdqXfzIhtibSSVa00x8ssR5MDCG%2FtFU4cQGENh%2BHP1H5E8Y1FeeTMbD8BPgfbQ1nC08zofKylQ0uW3YFJcSyf9g0%2BqpiPGYMgD2%2FdlG8mwv38IQUMF4DZEkq6DScD3LTibFMmaZ4QpIIrkGA%2F%2FvrO1ZFwzfGl8UdMqclTraAlP9783FYvK%2FI5KMkeRSKByy58axi4JO6E&X-Amz-Signature=f5e62e93353c4cb176e3ba3bc05ee4c7851644a5c5138b7fdc023c1a0b6ea660&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWRGC4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAOxAjPApcEKj0Ak51QBhxWUVYoWeEx%2BK5tOovIxc%2FgIgWJQfdaQ4mQG4nr6T9Al1m4bolUDUeWXZ5qeXW6YziOUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJa7t8HzjvEB3qyyrcAxBPzDnS40cQtMQJu0nhp0fPnR%2F%2B2UaS3n18zV%2Bf21cSuSeONmAysbB6TzqbG7biny8ul%2BwzlH%2F8Eunlnmq7MSL60m%2BFNjS2z9rDetVD2trJnKaCFWUJZwzWCIek70P1wZmuOzA7AtBrcGV75gRN0key3YVqEAwCGTLXTGbAiHyTvPMC25F%2BvE4hBIT9dmjLIB5Rh6S6bYfYGy5wx2gsdMKpbNyovhNju20QE5yKkDVZSvQoPvCnPE%2FveyqRfpKVbfTLkLirkC9PGEDJL6ftKAApZELsYwgTd2FdrUKlCis5hD%2BuKGGeAPoYZo3boLOBsuRgI0tib4IAEmEHZtylbmYqm%2Fxw1V5djQU%2Bj07UF2rjUNAVcioPVYPDPXLDj8%2FalYPQYGH25aeZIunxMyubg9sGXo4TPb%2Bpn80zCyRjQyhWyeMhaETZeGQn1dULZWXmg%2BF1Z1LUgLZ5PLPOtEgPypV8LYQJAuwGF8BxxP9qOmjvIBRkyYiGd6OZVtJYerdmXkFM9SkrofDTVabdKk3ZqHGmgAQ4%2FJrTYFP3O1Ycc1GEI%2BKSDZZ5%2FuL%2Fe%2BiQ8fcmXDQ8lk2i1astuh8L4aqELqI4JZKK%2Bj%2BAfkqJ1GzB5eDs79gqR59U84oOq%2BGsMIfO9bwGOqUBm0kNlfFXTt2UeF0ka2BGdqXfzIhtibSSVa00x8ssR5MDCG%2FtFU4cQGENh%2BHP1H5E8Y1FeeTMbD8BPgfbQ1nC08zofKylQ0uW3YFJcSyf9g0%2BqpiPGYMgD2%2FdlG8mwv38IQUMF4DZEkq6DScD3LTibFMmaZ4QpIIrkGA%2F%2FvrO1ZFwzfGl8UdMqclTraAlP9783FYvK%2FI5KMkeRSKByy58axi4JO6E&X-Amz-Signature=8e0793271f373ef961579617a144ed3240ddb1ca8db6eb204c54fb010bac9b28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWRGC4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAOxAjPApcEKj0Ak51QBhxWUVYoWeEx%2BK5tOovIxc%2FgIgWJQfdaQ4mQG4nr6T9Al1m4bolUDUeWXZ5qeXW6YziOUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJa7t8HzjvEB3qyyrcAxBPzDnS40cQtMQJu0nhp0fPnR%2F%2B2UaS3n18zV%2Bf21cSuSeONmAysbB6TzqbG7biny8ul%2BwzlH%2F8Eunlnmq7MSL60m%2BFNjS2z9rDetVD2trJnKaCFWUJZwzWCIek70P1wZmuOzA7AtBrcGV75gRN0key3YVqEAwCGTLXTGbAiHyTvPMC25F%2BvE4hBIT9dmjLIB5Rh6S6bYfYGy5wx2gsdMKpbNyovhNju20QE5yKkDVZSvQoPvCnPE%2FveyqRfpKVbfTLkLirkC9PGEDJL6ftKAApZELsYwgTd2FdrUKlCis5hD%2BuKGGeAPoYZo3boLOBsuRgI0tib4IAEmEHZtylbmYqm%2Fxw1V5djQU%2Bj07UF2rjUNAVcioPVYPDPXLDj8%2FalYPQYGH25aeZIunxMyubg9sGXo4TPb%2Bpn80zCyRjQyhWyeMhaETZeGQn1dULZWXmg%2BF1Z1LUgLZ5PLPOtEgPypV8LYQJAuwGF8BxxP9qOmjvIBRkyYiGd6OZVtJYerdmXkFM9SkrofDTVabdKk3ZqHGmgAQ4%2FJrTYFP3O1Ycc1GEI%2BKSDZZ5%2FuL%2Fe%2BiQ8fcmXDQ8lk2i1astuh8L4aqELqI4JZKK%2Bj%2BAfkqJ1GzB5eDs79gqR59U84oOq%2BGsMIfO9bwGOqUBm0kNlfFXTt2UeF0ka2BGdqXfzIhtibSSVa00x8ssR5MDCG%2FtFU4cQGENh%2BHP1H5E8Y1FeeTMbD8BPgfbQ1nC08zofKylQ0uW3YFJcSyf9g0%2BqpiPGYMgD2%2FdlG8mwv38IQUMF4DZEkq6DScD3LTibFMmaZ4QpIIrkGA%2F%2FvrO1ZFwzfGl8UdMqclTraAlP9783FYvK%2FI5KMkeRSKByy58axi4JO6E&X-Amz-Signature=bda76e263c07d3f6c1fd6928fe5bb5a57a81532e8ba433a5e8f4a374cf725e80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWRGC4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAOxAjPApcEKj0Ak51QBhxWUVYoWeEx%2BK5tOovIxc%2FgIgWJQfdaQ4mQG4nr6T9Al1m4bolUDUeWXZ5qeXW6YziOUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BJa7t8HzjvEB3qyyrcAxBPzDnS40cQtMQJu0nhp0fPnR%2F%2B2UaS3n18zV%2Bf21cSuSeONmAysbB6TzqbG7biny8ul%2BwzlH%2F8Eunlnmq7MSL60m%2BFNjS2z9rDetVD2trJnKaCFWUJZwzWCIek70P1wZmuOzA7AtBrcGV75gRN0key3YVqEAwCGTLXTGbAiHyTvPMC25F%2BvE4hBIT9dmjLIB5Rh6S6bYfYGy5wx2gsdMKpbNyovhNju20QE5yKkDVZSvQoPvCnPE%2FveyqRfpKVbfTLkLirkC9PGEDJL6ftKAApZELsYwgTd2FdrUKlCis5hD%2BuKGGeAPoYZo3boLOBsuRgI0tib4IAEmEHZtylbmYqm%2Fxw1V5djQU%2Bj07UF2rjUNAVcioPVYPDPXLDj8%2FalYPQYGH25aeZIunxMyubg9sGXo4TPb%2Bpn80zCyRjQyhWyeMhaETZeGQn1dULZWXmg%2BF1Z1LUgLZ5PLPOtEgPypV8LYQJAuwGF8BxxP9qOmjvIBRkyYiGd6OZVtJYerdmXkFM9SkrofDTVabdKk3ZqHGmgAQ4%2FJrTYFP3O1Ycc1GEI%2BKSDZZ5%2FuL%2Fe%2BiQ8fcmXDQ8lk2i1astuh8L4aqELqI4JZKK%2Bj%2BAfkqJ1GzB5eDs79gqR59U84oOq%2BGsMIfO9bwGOqUBm0kNlfFXTt2UeF0ka2BGdqXfzIhtibSSVa00x8ssR5MDCG%2FtFU4cQGENh%2BHP1H5E8Y1FeeTMbD8BPgfbQ1nC08zofKylQ0uW3YFJcSyf9g0%2BqpiPGYMgD2%2FdlG8mwv38IQUMF4DZEkq6DScD3LTibFMmaZ4QpIIrkGA%2F%2FvrO1ZFwzfGl8UdMqclTraAlP9783FYvK%2FI5KMkeRSKByy58axi4JO6E&X-Amz-Signature=ebf3facea5caa866c472b8d496f796a9c6617bb8e88a076de9ca0113e061bb4a&X-Amz-SignedHeaders=host&x-id=GetObject)
