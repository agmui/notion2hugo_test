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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JN7GNOH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnb4EPbwC0zvUglg9jvIIufanf8f%2FMa8tZYzGuy6Ce5AiAu5L0lmNHfQHAtQSNPtsj29PEpePeXQ0kLnz6HJxSP4CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU8KcAdOAI%2FMSf9AKtwDu0909KrpX9OBFjmy1eXCXhEjJ%2B8gg3vs%2BHr%2B%2B7cyAeREGT58mO898feiB80iQWngVl5uWTxcvT0TseShpCafJU2oIg7VnvJIj31HVbGkk2FwJQMUTEdfc0mtlbE22Zc2aJ2oTspk5TQdK3EtsC%2FyXUqt9JKFX5GNM5xVmLuuQiR%2FH1AOtIFMq9kHkkjjQqgAMGAityg7ZncmJ2g7BAthQfxOU3DApIJrcbWlUTHiWyeHem6c%2BmAG%2BLSf1g1ROPQwsQBnUlH2ApApKG3KGvOkw%2F7etLGYgmzsEMMTWUK%2Fu5CIjao%2BFvWn4nj4J%2FDDkiQLWdvKdZByoCdjQNUuSAkxbYcS3K%2Fb8gFr%2BZO%2BVwYdSNBO%2FOSDAv6loPdMkdCdwLqKMpdUPSCNJgk4Q7unwbtRETU4bK7TiTpEbegalUN5g3V8ZFDAHxyYhtYd9hGwWI6J76rllvVB3GZm%2BfhNwcviGOya2ZlWG3hAhOXuLnuWuTDhzMumTrkOa0E9qyqt0Rqqf%2BZD15DVQy2wN%2FhitV5daRaUUt4mWKOGGoq5P5di4TQkTqpLyCxmbIH5C9YuqzqiTdlJT5QZsYitTVWyI2y4HgRs12zQ2erPd15gH04rW4cGv3eTFTJ1259cSMcw%2B7%2FGwAY6pgHWNk6tkyT9vsPR60oO2Lx3l%2FZ78A6Mtoup2Mg5tBtmodRtSHLEkAVVuElGJSMHfqBfI0KVRL8oX%2FANW0OOnZCdwsWrD6oJvzPRaFyezDq57NS08pV5p0gXnaBO3nSMpK2DhCLErGT%2F0YqH7rkxtaQ9m%2FJuSRRxar6iWNbAZENfcxJJEmVtjKnaoSDVYJRuJoHtSCMS%2FUFpPkoWev2Axq65RwQbLeKM&X-Amz-Signature=df253b2b24474792c9562ac2aef93fa3ea30ea95550318de6e1a5724d8b4a549&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JN7GNOH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnb4EPbwC0zvUglg9jvIIufanf8f%2FMa8tZYzGuy6Ce5AiAu5L0lmNHfQHAtQSNPtsj29PEpePeXQ0kLnz6HJxSP4CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU8KcAdOAI%2FMSf9AKtwDu0909KrpX9OBFjmy1eXCXhEjJ%2B8gg3vs%2BHr%2B%2B7cyAeREGT58mO898feiB80iQWngVl5uWTxcvT0TseShpCafJU2oIg7VnvJIj31HVbGkk2FwJQMUTEdfc0mtlbE22Zc2aJ2oTspk5TQdK3EtsC%2FyXUqt9JKFX5GNM5xVmLuuQiR%2FH1AOtIFMq9kHkkjjQqgAMGAityg7ZncmJ2g7BAthQfxOU3DApIJrcbWlUTHiWyeHem6c%2BmAG%2BLSf1g1ROPQwsQBnUlH2ApApKG3KGvOkw%2F7etLGYgmzsEMMTWUK%2Fu5CIjao%2BFvWn4nj4J%2FDDkiQLWdvKdZByoCdjQNUuSAkxbYcS3K%2Fb8gFr%2BZO%2BVwYdSNBO%2FOSDAv6loPdMkdCdwLqKMpdUPSCNJgk4Q7unwbtRETU4bK7TiTpEbegalUN5g3V8ZFDAHxyYhtYd9hGwWI6J76rllvVB3GZm%2BfhNwcviGOya2ZlWG3hAhOXuLnuWuTDhzMumTrkOa0E9qyqt0Rqqf%2BZD15DVQy2wN%2FhitV5daRaUUt4mWKOGGoq5P5di4TQkTqpLyCxmbIH5C9YuqzqiTdlJT5QZsYitTVWyI2y4HgRs12zQ2erPd15gH04rW4cGv3eTFTJ1259cSMcw%2B7%2FGwAY6pgHWNk6tkyT9vsPR60oO2Lx3l%2FZ78A6Mtoup2Mg5tBtmodRtSHLEkAVVuElGJSMHfqBfI0KVRL8oX%2FANW0OOnZCdwsWrD6oJvzPRaFyezDq57NS08pV5p0gXnaBO3nSMpK2DhCLErGT%2F0YqH7rkxtaQ9m%2FJuSRRxar6iWNbAZENfcxJJEmVtjKnaoSDVYJRuJoHtSCMS%2FUFpPkoWev2Axq65RwQbLeKM&X-Amz-Signature=11bd3c0ea9f3be5570e13f93b7231fd858bcb8559db9a4310646f4255f0faf7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JN7GNOH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnb4EPbwC0zvUglg9jvIIufanf8f%2FMa8tZYzGuy6Ce5AiAu5L0lmNHfQHAtQSNPtsj29PEpePeXQ0kLnz6HJxSP4CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU8KcAdOAI%2FMSf9AKtwDu0909KrpX9OBFjmy1eXCXhEjJ%2B8gg3vs%2BHr%2B%2B7cyAeREGT58mO898feiB80iQWngVl5uWTxcvT0TseShpCafJU2oIg7VnvJIj31HVbGkk2FwJQMUTEdfc0mtlbE22Zc2aJ2oTspk5TQdK3EtsC%2FyXUqt9JKFX5GNM5xVmLuuQiR%2FH1AOtIFMq9kHkkjjQqgAMGAityg7ZncmJ2g7BAthQfxOU3DApIJrcbWlUTHiWyeHem6c%2BmAG%2BLSf1g1ROPQwsQBnUlH2ApApKG3KGvOkw%2F7etLGYgmzsEMMTWUK%2Fu5CIjao%2BFvWn4nj4J%2FDDkiQLWdvKdZByoCdjQNUuSAkxbYcS3K%2Fb8gFr%2BZO%2BVwYdSNBO%2FOSDAv6loPdMkdCdwLqKMpdUPSCNJgk4Q7unwbtRETU4bK7TiTpEbegalUN5g3V8ZFDAHxyYhtYd9hGwWI6J76rllvVB3GZm%2BfhNwcviGOya2ZlWG3hAhOXuLnuWuTDhzMumTrkOa0E9qyqt0Rqqf%2BZD15DVQy2wN%2FhitV5daRaUUt4mWKOGGoq5P5di4TQkTqpLyCxmbIH5C9YuqzqiTdlJT5QZsYitTVWyI2y4HgRs12zQ2erPd15gH04rW4cGv3eTFTJ1259cSMcw%2B7%2FGwAY6pgHWNk6tkyT9vsPR60oO2Lx3l%2FZ78A6Mtoup2Mg5tBtmodRtSHLEkAVVuElGJSMHfqBfI0KVRL8oX%2FANW0OOnZCdwsWrD6oJvzPRaFyezDq57NS08pV5p0gXnaBO3nSMpK2DhCLErGT%2F0YqH7rkxtaQ9m%2FJuSRRxar6iWNbAZENfcxJJEmVtjKnaoSDVYJRuJoHtSCMS%2FUFpPkoWev2Axq65RwQbLeKM&X-Amz-Signature=975c8625e5cf65a7464454c7b60565b44e6df3c099f004e4b2343c8cb71a8887&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JN7GNOH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnb4EPbwC0zvUglg9jvIIufanf8f%2FMa8tZYzGuy6Ce5AiAu5L0lmNHfQHAtQSNPtsj29PEpePeXQ0kLnz6HJxSP4CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU8KcAdOAI%2FMSf9AKtwDu0909KrpX9OBFjmy1eXCXhEjJ%2B8gg3vs%2BHr%2B%2B7cyAeREGT58mO898feiB80iQWngVl5uWTxcvT0TseShpCafJU2oIg7VnvJIj31HVbGkk2FwJQMUTEdfc0mtlbE22Zc2aJ2oTspk5TQdK3EtsC%2FyXUqt9JKFX5GNM5xVmLuuQiR%2FH1AOtIFMq9kHkkjjQqgAMGAityg7ZncmJ2g7BAthQfxOU3DApIJrcbWlUTHiWyeHem6c%2BmAG%2BLSf1g1ROPQwsQBnUlH2ApApKG3KGvOkw%2F7etLGYgmzsEMMTWUK%2Fu5CIjao%2BFvWn4nj4J%2FDDkiQLWdvKdZByoCdjQNUuSAkxbYcS3K%2Fb8gFr%2BZO%2BVwYdSNBO%2FOSDAv6loPdMkdCdwLqKMpdUPSCNJgk4Q7unwbtRETU4bK7TiTpEbegalUN5g3V8ZFDAHxyYhtYd9hGwWI6J76rllvVB3GZm%2BfhNwcviGOya2ZlWG3hAhOXuLnuWuTDhzMumTrkOa0E9qyqt0Rqqf%2BZD15DVQy2wN%2FhitV5daRaUUt4mWKOGGoq5P5di4TQkTqpLyCxmbIH5C9YuqzqiTdlJT5QZsYitTVWyI2y4HgRs12zQ2erPd15gH04rW4cGv3eTFTJ1259cSMcw%2B7%2FGwAY6pgHWNk6tkyT9vsPR60oO2Lx3l%2FZ78A6Mtoup2Mg5tBtmodRtSHLEkAVVuElGJSMHfqBfI0KVRL8oX%2FANW0OOnZCdwsWrD6oJvzPRaFyezDq57NS08pV5p0gXnaBO3nSMpK2DhCLErGT%2F0YqH7rkxtaQ9m%2FJuSRRxar6iWNbAZENfcxJJEmVtjKnaoSDVYJRuJoHtSCMS%2FUFpPkoWev2Axq65RwQbLeKM&X-Amz-Signature=ea55216ea1a4aa03bc1b57a5a3d7e020f252e51ed67a2a9fc9f2e767d3a7a602&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JN7GNOH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnb4EPbwC0zvUglg9jvIIufanf8f%2FMa8tZYzGuy6Ce5AiAu5L0lmNHfQHAtQSNPtsj29PEpePeXQ0kLnz6HJxSP4CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU8KcAdOAI%2FMSf9AKtwDu0909KrpX9OBFjmy1eXCXhEjJ%2B8gg3vs%2BHr%2B%2B7cyAeREGT58mO898feiB80iQWngVl5uWTxcvT0TseShpCafJU2oIg7VnvJIj31HVbGkk2FwJQMUTEdfc0mtlbE22Zc2aJ2oTspk5TQdK3EtsC%2FyXUqt9JKFX5GNM5xVmLuuQiR%2FH1AOtIFMq9kHkkjjQqgAMGAityg7ZncmJ2g7BAthQfxOU3DApIJrcbWlUTHiWyeHem6c%2BmAG%2BLSf1g1ROPQwsQBnUlH2ApApKG3KGvOkw%2F7etLGYgmzsEMMTWUK%2Fu5CIjao%2BFvWn4nj4J%2FDDkiQLWdvKdZByoCdjQNUuSAkxbYcS3K%2Fb8gFr%2BZO%2BVwYdSNBO%2FOSDAv6loPdMkdCdwLqKMpdUPSCNJgk4Q7unwbtRETU4bK7TiTpEbegalUN5g3V8ZFDAHxyYhtYd9hGwWI6J76rllvVB3GZm%2BfhNwcviGOya2ZlWG3hAhOXuLnuWuTDhzMumTrkOa0E9qyqt0Rqqf%2BZD15DVQy2wN%2FhitV5daRaUUt4mWKOGGoq5P5di4TQkTqpLyCxmbIH5C9YuqzqiTdlJT5QZsYitTVWyI2y4HgRs12zQ2erPd15gH04rW4cGv3eTFTJ1259cSMcw%2B7%2FGwAY6pgHWNk6tkyT9vsPR60oO2Lx3l%2FZ78A6Mtoup2Mg5tBtmodRtSHLEkAVVuElGJSMHfqBfI0KVRL8oX%2FANW0OOnZCdwsWrD6oJvzPRaFyezDq57NS08pV5p0gXnaBO3nSMpK2DhCLErGT%2F0YqH7rkxtaQ9m%2FJuSRRxar6iWNbAZENfcxJJEmVtjKnaoSDVYJRuJoHtSCMS%2FUFpPkoWev2Axq65RwQbLeKM&X-Amz-Signature=ea5c13b289eec1e5da2aa9229b92d2c049dcc78e07e4db2356882b8657c4263a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JN7GNOH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnb4EPbwC0zvUglg9jvIIufanf8f%2FMa8tZYzGuy6Ce5AiAu5L0lmNHfQHAtQSNPtsj29PEpePeXQ0kLnz6HJxSP4CqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkU8KcAdOAI%2FMSf9AKtwDu0909KrpX9OBFjmy1eXCXhEjJ%2B8gg3vs%2BHr%2B%2B7cyAeREGT58mO898feiB80iQWngVl5uWTxcvT0TseShpCafJU2oIg7VnvJIj31HVbGkk2FwJQMUTEdfc0mtlbE22Zc2aJ2oTspk5TQdK3EtsC%2FyXUqt9JKFX5GNM5xVmLuuQiR%2FH1AOtIFMq9kHkkjjQqgAMGAityg7ZncmJ2g7BAthQfxOU3DApIJrcbWlUTHiWyeHem6c%2BmAG%2BLSf1g1ROPQwsQBnUlH2ApApKG3KGvOkw%2F7etLGYgmzsEMMTWUK%2Fu5CIjao%2BFvWn4nj4J%2FDDkiQLWdvKdZByoCdjQNUuSAkxbYcS3K%2Fb8gFr%2BZO%2BVwYdSNBO%2FOSDAv6loPdMkdCdwLqKMpdUPSCNJgk4Q7unwbtRETU4bK7TiTpEbegalUN5g3V8ZFDAHxyYhtYd9hGwWI6J76rllvVB3GZm%2BfhNwcviGOya2ZlWG3hAhOXuLnuWuTDhzMumTrkOa0E9qyqt0Rqqf%2BZD15DVQy2wN%2FhitV5daRaUUt4mWKOGGoq5P5di4TQkTqpLyCxmbIH5C9YuqzqiTdlJT5QZsYitTVWyI2y4HgRs12zQ2erPd15gH04rW4cGv3eTFTJ1259cSMcw%2B7%2FGwAY6pgHWNk6tkyT9vsPR60oO2Lx3l%2FZ78A6Mtoup2Mg5tBtmodRtSHLEkAVVuElGJSMHfqBfI0KVRL8oX%2FANW0OOnZCdwsWrD6oJvzPRaFyezDq57NS08pV5p0gXnaBO3nSMpK2DhCLErGT%2F0YqH7rkxtaQ9m%2FJuSRRxar6iWNbAZENfcxJJEmVtjKnaoSDVYJRuJoHtSCMS%2FUFpPkoWev2Axq65RwQbLeKM&X-Amz-Signature=864403513f32a1181072ee1223812d7eb89293fa6be5900ff19d1c88717a0cc6&X-Amz-SignedHeaders=host&x-id=GetObject)
