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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR35FQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE%2F69UqK38YwWv%2FGZmv50uw%2FEHk3dp2A4ciJtwKxPUeSAiEAlByEkGvmxNrTW7kLOWAb3StLrtIDajkP7M0gysRzdB4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME8LxTdkiQoNQZSfircA7f9sJ%2B%2FIfQ%2FhfABGc%2FVKSaR0qEUD4%2B8RA5qzvEig7TjZUSzWVeskfgeiQaaoRP5oOw93CvUwYtPzXI3wKs6LZ4tFUxjEF6%2FTeNShf8OQElvjUW871hrgWBN7THLHXbVK%2Fo%2FPAK2S654ubZo4I4OgrQ8hTJH4w8nUNCPB%2F3uA0%2B%2BS7aHvnVDNIXSOjnLTIHRj616Uw6yqcaGU6xW00xa4MuFcQPjhlAwUL5bWv0ZrXOSFTsKxdxkkHoCeCg0PMuvAOUsDw6%2B8KQteIo5I7qZoFP0GoijQYmVfo%2F38ZpUtfqQhmf0mrIDAiIdkodzoDznGuqn%2Fu05%2BThhwloiJWKd4JAbZ%2F7OpU7qWUSloonrvyU5luNofpEUh1%2BLUMCOYIKseJD3oaOBDIs9ABYJ0ErvgxVwg9Jo3grVY1daKDkPwEQkycTVYBqoTvLUBc36wRwqNU%2Bh4rGEJLazhR1PPaC3eHoGpxmghPpV8wKBq55W96%2FHCklBVhzJdXNFmqij5iOjVnzpALZ0vAm15xd7ln3rCkrK%2FUCR%2FamD6jajfaL6stHszgSSY6bitHw3JdK3VBvgGWmjg1WjFf37r9z2C5BOV68X1xGgTjF%2FCfmustXr1afNv%2F%2BsuKsp7%2FfJvH9eMOGGm8AGOqUBn1mUnjMZDJiNoxAm40q7RYyyzlLIN2HEhnBVlffPVp3WtgZRKiZnfxvxcOo0Adt8K9XYutXp8QbOH7579fGkduiv5yvBJ3NPx9yNPh9Anc5%2FBL4ZVkIa90FQcmD%2BEgLMf%2FLLx5K%2BMEfnyTYEDRSeXMmfop%2B56vlnzEJNnqVR7cDhB4F6589wrajFmcy%2BsFVBoqlKTOjkXHshjQOGPvYFQMfMkkax&X-Amz-Signature=201d3642bbddb1886f8f50d4a96b84b35b13c855c4fb5650082070f7093506e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR35FQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE%2F69UqK38YwWv%2FGZmv50uw%2FEHk3dp2A4ciJtwKxPUeSAiEAlByEkGvmxNrTW7kLOWAb3StLrtIDajkP7M0gysRzdB4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME8LxTdkiQoNQZSfircA7f9sJ%2B%2FIfQ%2FhfABGc%2FVKSaR0qEUD4%2B8RA5qzvEig7TjZUSzWVeskfgeiQaaoRP5oOw93CvUwYtPzXI3wKs6LZ4tFUxjEF6%2FTeNShf8OQElvjUW871hrgWBN7THLHXbVK%2Fo%2FPAK2S654ubZo4I4OgrQ8hTJH4w8nUNCPB%2F3uA0%2B%2BS7aHvnVDNIXSOjnLTIHRj616Uw6yqcaGU6xW00xa4MuFcQPjhlAwUL5bWv0ZrXOSFTsKxdxkkHoCeCg0PMuvAOUsDw6%2B8KQteIo5I7qZoFP0GoijQYmVfo%2F38ZpUtfqQhmf0mrIDAiIdkodzoDznGuqn%2Fu05%2BThhwloiJWKd4JAbZ%2F7OpU7qWUSloonrvyU5luNofpEUh1%2BLUMCOYIKseJD3oaOBDIs9ABYJ0ErvgxVwg9Jo3grVY1daKDkPwEQkycTVYBqoTvLUBc36wRwqNU%2Bh4rGEJLazhR1PPaC3eHoGpxmghPpV8wKBq55W96%2FHCklBVhzJdXNFmqij5iOjVnzpALZ0vAm15xd7ln3rCkrK%2FUCR%2FamD6jajfaL6stHszgSSY6bitHw3JdK3VBvgGWmjg1WjFf37r9z2C5BOV68X1xGgTjF%2FCfmustXr1afNv%2F%2BsuKsp7%2FfJvH9eMOGGm8AGOqUBn1mUnjMZDJiNoxAm40q7RYyyzlLIN2HEhnBVlffPVp3WtgZRKiZnfxvxcOo0Adt8K9XYutXp8QbOH7579fGkduiv5yvBJ3NPx9yNPh9Anc5%2FBL4ZVkIa90FQcmD%2BEgLMf%2FLLx5K%2BMEfnyTYEDRSeXMmfop%2B56vlnzEJNnqVR7cDhB4F6589wrajFmcy%2BsFVBoqlKTOjkXHshjQOGPvYFQMfMkkax&X-Amz-Signature=fb9ee4371489712f0130ad7420d42036a258b5ed13e4c5d3128980a2937eb7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR35FQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE%2F69UqK38YwWv%2FGZmv50uw%2FEHk3dp2A4ciJtwKxPUeSAiEAlByEkGvmxNrTW7kLOWAb3StLrtIDajkP7M0gysRzdB4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME8LxTdkiQoNQZSfircA7f9sJ%2B%2FIfQ%2FhfABGc%2FVKSaR0qEUD4%2B8RA5qzvEig7TjZUSzWVeskfgeiQaaoRP5oOw93CvUwYtPzXI3wKs6LZ4tFUxjEF6%2FTeNShf8OQElvjUW871hrgWBN7THLHXbVK%2Fo%2FPAK2S654ubZo4I4OgrQ8hTJH4w8nUNCPB%2F3uA0%2B%2BS7aHvnVDNIXSOjnLTIHRj616Uw6yqcaGU6xW00xa4MuFcQPjhlAwUL5bWv0ZrXOSFTsKxdxkkHoCeCg0PMuvAOUsDw6%2B8KQteIo5I7qZoFP0GoijQYmVfo%2F38ZpUtfqQhmf0mrIDAiIdkodzoDznGuqn%2Fu05%2BThhwloiJWKd4JAbZ%2F7OpU7qWUSloonrvyU5luNofpEUh1%2BLUMCOYIKseJD3oaOBDIs9ABYJ0ErvgxVwg9Jo3grVY1daKDkPwEQkycTVYBqoTvLUBc36wRwqNU%2Bh4rGEJLazhR1PPaC3eHoGpxmghPpV8wKBq55W96%2FHCklBVhzJdXNFmqij5iOjVnzpALZ0vAm15xd7ln3rCkrK%2FUCR%2FamD6jajfaL6stHszgSSY6bitHw3JdK3VBvgGWmjg1WjFf37r9z2C5BOV68X1xGgTjF%2FCfmustXr1afNv%2F%2BsuKsp7%2FfJvH9eMOGGm8AGOqUBn1mUnjMZDJiNoxAm40q7RYyyzlLIN2HEhnBVlffPVp3WtgZRKiZnfxvxcOo0Adt8K9XYutXp8QbOH7579fGkduiv5yvBJ3NPx9yNPh9Anc5%2FBL4ZVkIa90FQcmD%2BEgLMf%2FLLx5K%2BMEfnyTYEDRSeXMmfop%2B56vlnzEJNnqVR7cDhB4F6589wrajFmcy%2BsFVBoqlKTOjkXHshjQOGPvYFQMfMkkax&X-Amz-Signature=65ac2a38999ea932304b6dd5e97519b2c7825c70a2d80484c113fba96e296a88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR35FQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE%2F69UqK38YwWv%2FGZmv50uw%2FEHk3dp2A4ciJtwKxPUeSAiEAlByEkGvmxNrTW7kLOWAb3StLrtIDajkP7M0gysRzdB4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME8LxTdkiQoNQZSfircA7f9sJ%2B%2FIfQ%2FhfABGc%2FVKSaR0qEUD4%2B8RA5qzvEig7TjZUSzWVeskfgeiQaaoRP5oOw93CvUwYtPzXI3wKs6LZ4tFUxjEF6%2FTeNShf8OQElvjUW871hrgWBN7THLHXbVK%2Fo%2FPAK2S654ubZo4I4OgrQ8hTJH4w8nUNCPB%2F3uA0%2B%2BS7aHvnVDNIXSOjnLTIHRj616Uw6yqcaGU6xW00xa4MuFcQPjhlAwUL5bWv0ZrXOSFTsKxdxkkHoCeCg0PMuvAOUsDw6%2B8KQteIo5I7qZoFP0GoijQYmVfo%2F38ZpUtfqQhmf0mrIDAiIdkodzoDznGuqn%2Fu05%2BThhwloiJWKd4JAbZ%2F7OpU7qWUSloonrvyU5luNofpEUh1%2BLUMCOYIKseJD3oaOBDIs9ABYJ0ErvgxVwg9Jo3grVY1daKDkPwEQkycTVYBqoTvLUBc36wRwqNU%2Bh4rGEJLazhR1PPaC3eHoGpxmghPpV8wKBq55W96%2FHCklBVhzJdXNFmqij5iOjVnzpALZ0vAm15xd7ln3rCkrK%2FUCR%2FamD6jajfaL6stHszgSSY6bitHw3JdK3VBvgGWmjg1WjFf37r9z2C5BOV68X1xGgTjF%2FCfmustXr1afNv%2F%2BsuKsp7%2FfJvH9eMOGGm8AGOqUBn1mUnjMZDJiNoxAm40q7RYyyzlLIN2HEhnBVlffPVp3WtgZRKiZnfxvxcOo0Adt8K9XYutXp8QbOH7579fGkduiv5yvBJ3NPx9yNPh9Anc5%2FBL4ZVkIa90FQcmD%2BEgLMf%2FLLx5K%2BMEfnyTYEDRSeXMmfop%2B56vlnzEJNnqVR7cDhB4F6589wrajFmcy%2BsFVBoqlKTOjkXHshjQOGPvYFQMfMkkax&X-Amz-Signature=697a136326637b3e5a92b523d6f25b44368f9b2b409e2912f29f99afb7c105ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR35FQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE%2F69UqK38YwWv%2FGZmv50uw%2FEHk3dp2A4ciJtwKxPUeSAiEAlByEkGvmxNrTW7kLOWAb3StLrtIDajkP7M0gysRzdB4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME8LxTdkiQoNQZSfircA7f9sJ%2B%2FIfQ%2FhfABGc%2FVKSaR0qEUD4%2B8RA5qzvEig7TjZUSzWVeskfgeiQaaoRP5oOw93CvUwYtPzXI3wKs6LZ4tFUxjEF6%2FTeNShf8OQElvjUW871hrgWBN7THLHXbVK%2Fo%2FPAK2S654ubZo4I4OgrQ8hTJH4w8nUNCPB%2F3uA0%2B%2BS7aHvnVDNIXSOjnLTIHRj616Uw6yqcaGU6xW00xa4MuFcQPjhlAwUL5bWv0ZrXOSFTsKxdxkkHoCeCg0PMuvAOUsDw6%2B8KQteIo5I7qZoFP0GoijQYmVfo%2F38ZpUtfqQhmf0mrIDAiIdkodzoDznGuqn%2Fu05%2BThhwloiJWKd4JAbZ%2F7OpU7qWUSloonrvyU5luNofpEUh1%2BLUMCOYIKseJD3oaOBDIs9ABYJ0ErvgxVwg9Jo3grVY1daKDkPwEQkycTVYBqoTvLUBc36wRwqNU%2Bh4rGEJLazhR1PPaC3eHoGpxmghPpV8wKBq55W96%2FHCklBVhzJdXNFmqij5iOjVnzpALZ0vAm15xd7ln3rCkrK%2FUCR%2FamD6jajfaL6stHszgSSY6bitHw3JdK3VBvgGWmjg1WjFf37r9z2C5BOV68X1xGgTjF%2FCfmustXr1afNv%2F%2BsuKsp7%2FfJvH9eMOGGm8AGOqUBn1mUnjMZDJiNoxAm40q7RYyyzlLIN2HEhnBVlffPVp3WtgZRKiZnfxvxcOo0Adt8K9XYutXp8QbOH7579fGkduiv5yvBJ3NPx9yNPh9Anc5%2FBL4ZVkIa90FQcmD%2BEgLMf%2FLLx5K%2BMEfnyTYEDRSeXMmfop%2B56vlnzEJNnqVR7cDhB4F6589wrajFmcy%2BsFVBoqlKTOjkXHshjQOGPvYFQMfMkkax&X-Amz-Signature=ff32c0a51adfdd67aee60e490c5d0a10648759fc98d2acc2eb2dfb3f5d4f3bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR35FQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE%2F69UqK38YwWv%2FGZmv50uw%2FEHk3dp2A4ciJtwKxPUeSAiEAlByEkGvmxNrTW7kLOWAb3StLrtIDajkP7M0gysRzdB4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDME8LxTdkiQoNQZSfircA7f9sJ%2B%2FIfQ%2FhfABGc%2FVKSaR0qEUD4%2B8RA5qzvEig7TjZUSzWVeskfgeiQaaoRP5oOw93CvUwYtPzXI3wKs6LZ4tFUxjEF6%2FTeNShf8OQElvjUW871hrgWBN7THLHXbVK%2Fo%2FPAK2S654ubZo4I4OgrQ8hTJH4w8nUNCPB%2F3uA0%2B%2BS7aHvnVDNIXSOjnLTIHRj616Uw6yqcaGU6xW00xa4MuFcQPjhlAwUL5bWv0ZrXOSFTsKxdxkkHoCeCg0PMuvAOUsDw6%2B8KQteIo5I7qZoFP0GoijQYmVfo%2F38ZpUtfqQhmf0mrIDAiIdkodzoDznGuqn%2Fu05%2BThhwloiJWKd4JAbZ%2F7OpU7qWUSloonrvyU5luNofpEUh1%2BLUMCOYIKseJD3oaOBDIs9ABYJ0ErvgxVwg9Jo3grVY1daKDkPwEQkycTVYBqoTvLUBc36wRwqNU%2Bh4rGEJLazhR1PPaC3eHoGpxmghPpV8wKBq55W96%2FHCklBVhzJdXNFmqij5iOjVnzpALZ0vAm15xd7ln3rCkrK%2FUCR%2FamD6jajfaL6stHszgSSY6bitHw3JdK3VBvgGWmjg1WjFf37r9z2C5BOV68X1xGgTjF%2FCfmustXr1afNv%2F%2BsuKsp7%2FfJvH9eMOGGm8AGOqUBn1mUnjMZDJiNoxAm40q7RYyyzlLIN2HEhnBVlffPVp3WtgZRKiZnfxvxcOo0Adt8K9XYutXp8QbOH7579fGkduiv5yvBJ3NPx9yNPh9Anc5%2FBL4ZVkIa90FQcmD%2BEgLMf%2FLLx5K%2BMEfnyTYEDRSeXMmfop%2B56vlnzEJNnqVR7cDhB4F6589wrajFmcy%2BsFVBoqlKTOjkXHshjQOGPvYFQMfMkkax&X-Amz-Signature=7778f43e2dd54e2318b4586a73ecb0e9c4122c73bc474b4d8562b83ffa8d6981&X-Amz-SignedHeaders=host&x-id=GetObject)
