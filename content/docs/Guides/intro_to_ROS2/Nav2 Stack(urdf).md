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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NU5JPGG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHF2LUpBude%2B1%2Fi6krLyeP4ZvZcR18W7X3KWhoVRKkyUAiAmfYBpvw3ktwa%2Bn1O7HmYB3R6tdLLX4U4SrQJkgr%2FLYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4v2Me7acNcU5vZkmKtwDSQzvk3er3PviyV2SANE6W2qn%2FPxn%2FDZi%2Bw14p0SpnuztkAa29ZyIFmbm2nppoxfysGbyooxBumuTMFZY647RpUun%2FZ06f3v5kz%2FwHVrQdGJla9z6Ua7jXJVEe4psEni5XqkLCut1MdIXtYmSpZvmuVewncSK%2F4NggNN8TfGeT8x6%2BBKiOyqBaklRNH3GvlZuk9S6eSGvGMKfcWLiF0tMGFmFogCd88%2B9girtuxBxJay6hDKZXVGtiPDMZBBVQY%2F%2FqumaNT6ATeWhsOgdSjwwodHJQnVt3TpTYXAaw7nzeQ6P5ZQ%2B%2B5LrSgz9dk1bHXMSpxcJaRjlrs89RymyhlQMdHs5zJt5Fw%2F62zSS6q471g0c0nDSk7m4Had6Owy3pga5VB5TMHe7pRnnMS%2B%2FCQi2bR81cmSGpBJAVL6yZNewFHnNkygim33amGQYkRcpuP1en5UXN6cZXB67zeVW7OeVM5jkXm%2B08%2FuAyTj30PE%2BIerF5Q%2FxBcoQIi3db%2F%2B%2BwezIOmbxfVFsTMf9A9toL9vfWFpQGlYQLN3DNMXzF9JfGXQJHazNbO5D3NRp6lLal4BHcLKCMmAFom%2BnAwCFYG8tJoCjPixYc1hZFEm9kuh5bfaG9m8KaxmSLV4jw3Ew54OCwQY6pgGiFm1J5WG344XGUJ9A5DWuP4YHEblYTVQdA6AL9vY3Vk8mmrigbO0B%2FNyn9SgT5FCUrY2HQLiLwCNkL76G76YiDoHdgDzbjziGvPeqvwrVRNMFFUw0Wuq7E6CEIZZWI2jJByqPkPA%2Bq32PoSnpeQiqGNT78hsWteunSX2nA1JrxWwLktBYJwkT3syEX1ggz8Bemj%2B86JnatEu9twZcwwOUn%2B0VKSk7&X-Amz-Signature=e4c56d31874e4f81ca974af546983e74a63397fde31b962505a7d49888c829ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NU5JPGG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHF2LUpBude%2B1%2Fi6krLyeP4ZvZcR18W7X3KWhoVRKkyUAiAmfYBpvw3ktwa%2Bn1O7HmYB3R6tdLLX4U4SrQJkgr%2FLYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4v2Me7acNcU5vZkmKtwDSQzvk3er3PviyV2SANE6W2qn%2FPxn%2FDZi%2Bw14p0SpnuztkAa29ZyIFmbm2nppoxfysGbyooxBumuTMFZY647RpUun%2FZ06f3v5kz%2FwHVrQdGJla9z6Ua7jXJVEe4psEni5XqkLCut1MdIXtYmSpZvmuVewncSK%2F4NggNN8TfGeT8x6%2BBKiOyqBaklRNH3GvlZuk9S6eSGvGMKfcWLiF0tMGFmFogCd88%2B9girtuxBxJay6hDKZXVGtiPDMZBBVQY%2F%2FqumaNT6ATeWhsOgdSjwwodHJQnVt3TpTYXAaw7nzeQ6P5ZQ%2B%2B5LrSgz9dk1bHXMSpxcJaRjlrs89RymyhlQMdHs5zJt5Fw%2F62zSS6q471g0c0nDSk7m4Had6Owy3pga5VB5TMHe7pRnnMS%2B%2FCQi2bR81cmSGpBJAVL6yZNewFHnNkygim33amGQYkRcpuP1en5UXN6cZXB67zeVW7OeVM5jkXm%2B08%2FuAyTj30PE%2BIerF5Q%2FxBcoQIi3db%2F%2B%2BwezIOmbxfVFsTMf9A9toL9vfWFpQGlYQLN3DNMXzF9JfGXQJHazNbO5D3NRp6lLal4BHcLKCMmAFom%2BnAwCFYG8tJoCjPixYc1hZFEm9kuh5bfaG9m8KaxmSLV4jw3Ew54OCwQY6pgGiFm1J5WG344XGUJ9A5DWuP4YHEblYTVQdA6AL9vY3Vk8mmrigbO0B%2FNyn9SgT5FCUrY2HQLiLwCNkL76G76YiDoHdgDzbjziGvPeqvwrVRNMFFUw0Wuq7E6CEIZZWI2jJByqPkPA%2Bq32PoSnpeQiqGNT78hsWteunSX2nA1JrxWwLktBYJwkT3syEX1ggz8Bemj%2B86JnatEu9twZcwwOUn%2B0VKSk7&X-Amz-Signature=cd8e98f59dac79ad7b72e4c47e38f4035f5fbfb0d233628db94f17de3ea4f39d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NU5JPGG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHF2LUpBude%2B1%2Fi6krLyeP4ZvZcR18W7X3KWhoVRKkyUAiAmfYBpvw3ktwa%2Bn1O7HmYB3R6tdLLX4U4SrQJkgr%2FLYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4v2Me7acNcU5vZkmKtwDSQzvk3er3PviyV2SANE6W2qn%2FPxn%2FDZi%2Bw14p0SpnuztkAa29ZyIFmbm2nppoxfysGbyooxBumuTMFZY647RpUun%2FZ06f3v5kz%2FwHVrQdGJla9z6Ua7jXJVEe4psEni5XqkLCut1MdIXtYmSpZvmuVewncSK%2F4NggNN8TfGeT8x6%2BBKiOyqBaklRNH3GvlZuk9S6eSGvGMKfcWLiF0tMGFmFogCd88%2B9girtuxBxJay6hDKZXVGtiPDMZBBVQY%2F%2FqumaNT6ATeWhsOgdSjwwodHJQnVt3TpTYXAaw7nzeQ6P5ZQ%2B%2B5LrSgz9dk1bHXMSpxcJaRjlrs89RymyhlQMdHs5zJt5Fw%2F62zSS6q471g0c0nDSk7m4Had6Owy3pga5VB5TMHe7pRnnMS%2B%2FCQi2bR81cmSGpBJAVL6yZNewFHnNkygim33amGQYkRcpuP1en5UXN6cZXB67zeVW7OeVM5jkXm%2B08%2FuAyTj30PE%2BIerF5Q%2FxBcoQIi3db%2F%2B%2BwezIOmbxfVFsTMf9A9toL9vfWFpQGlYQLN3DNMXzF9JfGXQJHazNbO5D3NRp6lLal4BHcLKCMmAFom%2BnAwCFYG8tJoCjPixYc1hZFEm9kuh5bfaG9m8KaxmSLV4jw3Ew54OCwQY6pgGiFm1J5WG344XGUJ9A5DWuP4YHEblYTVQdA6AL9vY3Vk8mmrigbO0B%2FNyn9SgT5FCUrY2HQLiLwCNkL76G76YiDoHdgDzbjziGvPeqvwrVRNMFFUw0Wuq7E6CEIZZWI2jJByqPkPA%2Bq32PoSnpeQiqGNT78hsWteunSX2nA1JrxWwLktBYJwkT3syEX1ggz8Bemj%2B86JnatEu9twZcwwOUn%2B0VKSk7&X-Amz-Signature=2ebbdaa737154d6ec7447c35d72b665c127993a799c8519385b391209b1765c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NU5JPGG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHF2LUpBude%2B1%2Fi6krLyeP4ZvZcR18W7X3KWhoVRKkyUAiAmfYBpvw3ktwa%2Bn1O7HmYB3R6tdLLX4U4SrQJkgr%2FLYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4v2Me7acNcU5vZkmKtwDSQzvk3er3PviyV2SANE6W2qn%2FPxn%2FDZi%2Bw14p0SpnuztkAa29ZyIFmbm2nppoxfysGbyooxBumuTMFZY647RpUun%2FZ06f3v5kz%2FwHVrQdGJla9z6Ua7jXJVEe4psEni5XqkLCut1MdIXtYmSpZvmuVewncSK%2F4NggNN8TfGeT8x6%2BBKiOyqBaklRNH3GvlZuk9S6eSGvGMKfcWLiF0tMGFmFogCd88%2B9girtuxBxJay6hDKZXVGtiPDMZBBVQY%2F%2FqumaNT6ATeWhsOgdSjwwodHJQnVt3TpTYXAaw7nzeQ6P5ZQ%2B%2B5LrSgz9dk1bHXMSpxcJaRjlrs89RymyhlQMdHs5zJt5Fw%2F62zSS6q471g0c0nDSk7m4Had6Owy3pga5VB5TMHe7pRnnMS%2B%2FCQi2bR81cmSGpBJAVL6yZNewFHnNkygim33amGQYkRcpuP1en5UXN6cZXB67zeVW7OeVM5jkXm%2B08%2FuAyTj30PE%2BIerF5Q%2FxBcoQIi3db%2F%2B%2BwezIOmbxfVFsTMf9A9toL9vfWFpQGlYQLN3DNMXzF9JfGXQJHazNbO5D3NRp6lLal4BHcLKCMmAFom%2BnAwCFYG8tJoCjPixYc1hZFEm9kuh5bfaG9m8KaxmSLV4jw3Ew54OCwQY6pgGiFm1J5WG344XGUJ9A5DWuP4YHEblYTVQdA6AL9vY3Vk8mmrigbO0B%2FNyn9SgT5FCUrY2HQLiLwCNkL76G76YiDoHdgDzbjziGvPeqvwrVRNMFFUw0Wuq7E6CEIZZWI2jJByqPkPA%2Bq32PoSnpeQiqGNT78hsWteunSX2nA1JrxWwLktBYJwkT3syEX1ggz8Bemj%2B86JnatEu9twZcwwOUn%2B0VKSk7&X-Amz-Signature=e435df09130fc031b4b6cbfe6391019d88ed3bbd909ea0a6188776625d87e2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NU5JPGG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHF2LUpBude%2B1%2Fi6krLyeP4ZvZcR18W7X3KWhoVRKkyUAiAmfYBpvw3ktwa%2Bn1O7HmYB3R6tdLLX4U4SrQJkgr%2FLYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4v2Me7acNcU5vZkmKtwDSQzvk3er3PviyV2SANE6W2qn%2FPxn%2FDZi%2Bw14p0SpnuztkAa29ZyIFmbm2nppoxfysGbyooxBumuTMFZY647RpUun%2FZ06f3v5kz%2FwHVrQdGJla9z6Ua7jXJVEe4psEni5XqkLCut1MdIXtYmSpZvmuVewncSK%2F4NggNN8TfGeT8x6%2BBKiOyqBaklRNH3GvlZuk9S6eSGvGMKfcWLiF0tMGFmFogCd88%2B9girtuxBxJay6hDKZXVGtiPDMZBBVQY%2F%2FqumaNT6ATeWhsOgdSjwwodHJQnVt3TpTYXAaw7nzeQ6P5ZQ%2B%2B5LrSgz9dk1bHXMSpxcJaRjlrs89RymyhlQMdHs5zJt5Fw%2F62zSS6q471g0c0nDSk7m4Had6Owy3pga5VB5TMHe7pRnnMS%2B%2FCQi2bR81cmSGpBJAVL6yZNewFHnNkygim33amGQYkRcpuP1en5UXN6cZXB67zeVW7OeVM5jkXm%2B08%2FuAyTj30PE%2BIerF5Q%2FxBcoQIi3db%2F%2B%2BwezIOmbxfVFsTMf9A9toL9vfWFpQGlYQLN3DNMXzF9JfGXQJHazNbO5D3NRp6lLal4BHcLKCMmAFom%2BnAwCFYG8tJoCjPixYc1hZFEm9kuh5bfaG9m8KaxmSLV4jw3Ew54OCwQY6pgGiFm1J5WG344XGUJ9A5DWuP4YHEblYTVQdA6AL9vY3Vk8mmrigbO0B%2FNyn9SgT5FCUrY2HQLiLwCNkL76G76YiDoHdgDzbjziGvPeqvwrVRNMFFUw0Wuq7E6CEIZZWI2jJByqPkPA%2Bq32PoSnpeQiqGNT78hsWteunSX2nA1JrxWwLktBYJwkT3syEX1ggz8Bemj%2B86JnatEu9twZcwwOUn%2B0VKSk7&X-Amz-Signature=416405811ceece50f4f3c8d86bf307431d433aaea300bbce81e147e749ec47dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NU5JPGG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHF2LUpBude%2B1%2Fi6krLyeP4ZvZcR18W7X3KWhoVRKkyUAiAmfYBpvw3ktwa%2Bn1O7HmYB3R6tdLLX4U4SrQJkgr%2FLYCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4v2Me7acNcU5vZkmKtwDSQzvk3er3PviyV2SANE6W2qn%2FPxn%2FDZi%2Bw14p0SpnuztkAa29ZyIFmbm2nppoxfysGbyooxBumuTMFZY647RpUun%2FZ06f3v5kz%2FwHVrQdGJla9z6Ua7jXJVEe4psEni5XqkLCut1MdIXtYmSpZvmuVewncSK%2F4NggNN8TfGeT8x6%2BBKiOyqBaklRNH3GvlZuk9S6eSGvGMKfcWLiF0tMGFmFogCd88%2B9girtuxBxJay6hDKZXVGtiPDMZBBVQY%2F%2FqumaNT6ATeWhsOgdSjwwodHJQnVt3TpTYXAaw7nzeQ6P5ZQ%2B%2B5LrSgz9dk1bHXMSpxcJaRjlrs89RymyhlQMdHs5zJt5Fw%2F62zSS6q471g0c0nDSk7m4Had6Owy3pga5VB5TMHe7pRnnMS%2B%2FCQi2bR81cmSGpBJAVL6yZNewFHnNkygim33amGQYkRcpuP1en5UXN6cZXB67zeVW7OeVM5jkXm%2B08%2FuAyTj30PE%2BIerF5Q%2FxBcoQIi3db%2F%2B%2BwezIOmbxfVFsTMf9A9toL9vfWFpQGlYQLN3DNMXzF9JfGXQJHazNbO5D3NRp6lLal4BHcLKCMmAFom%2BnAwCFYG8tJoCjPixYc1hZFEm9kuh5bfaG9m8KaxmSLV4jw3Ew54OCwQY6pgGiFm1J5WG344XGUJ9A5DWuP4YHEblYTVQdA6AL9vY3Vk8mmrigbO0B%2FNyn9SgT5FCUrY2HQLiLwCNkL76G76YiDoHdgDzbjziGvPeqvwrVRNMFFUw0Wuq7E6CEIZZWI2jJByqPkPA%2Bq32PoSnpeQiqGNT78hsWteunSX2nA1JrxWwLktBYJwkT3syEX1ggz8Bemj%2B86JnatEu9twZcwwOUn%2B0VKSk7&X-Amz-Signature=a1f8f4bbe99248c047c179869b660728b4a666d031d6ffb1e88d133ce95ffe9a&X-Amz-SignedHeaders=host&x-id=GetObject)
