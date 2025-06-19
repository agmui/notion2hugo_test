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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6L7AD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACUXD3pc%2F%2BjI4iP%2B0A8L4wVJ2LoaIlIpj90oivVgCTPAiAswWBSmF3JF3c5MLWJJUKUVqCe69CG28GGKEmqevg8myqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5eEb5qOJmzJUh26KtwDdPTmQMGEIk2Q3CDEfXQpigxi0wtbPzRqD95jlynOIX67dmTzs8LOryWR5AqmwMziEnsc7lZhWk5LgBIHAdETm0ceG5PihjzcuaWeV18zTwsEhefocqu5dzfZVscknRf%2FfhdlDsXi4wfzt3jGron4pBc0vczNUpRWTUMxuGxjn5DrW0aZKWcj7rxb9YCrCKsX2YD3RpWI3wAKG0uqs67AnScp%2F96DJnnTP7xSHZIO%2F7KFSDWVqwUgTfiLXJ0cdVieBSgquwCeBfAG3Fshak4UIZDQWIopLxx16CxY1LXplg75wcZ4CrA7nu%2BZwyL%2FxQ2QxESN2z%2FWxOP2jIMNOvz6NDKgbp7kHMczQ7Tj9Wf93AhwXwiy8eY7b1a3PAXonzeolttSo20GIsddyjNK7bvAoYEL%2Fuxu2UZYjOEpiffOHgyOkkZbXA3fKpIv2DRjmTZN8PgdvLDdQQ6%2FfPPVo0mPkTQD%2BMPQuJN3qkrggEVxDUlL2YftB9DFHOBFL2lb3rrkf7GwEp81gsbvzjva9lvMHUYiEnLEB8ia218JzRaHpJCXU4ejQ9KG2sa%2FsxdkAs44XMgoZr3LYdiIW%2BIVEFFR5lpbZ1gvhTX1zwtfN9T1Mng4MwzKP62GynfgL9Uwgd%2FOwgY6pgEqAtLRP9o3bX3igCyOw46GNdWWeBIiXDYYurOECwKmmHFWeogt6u9zaibcCCipyv7H2aYIS%2FMskRLMYvVDv18BvWZyes0F2V80BQxijvOX0ISJ8%2Fu8tgBKgj2WKjyNTgm8tqklV5kIETXpmUWJa1hmhcva2iLUJ0bIF85pkzfmfVijCL8f6DSeoT1jKGflCCNdgCzbZ1tbBtxdxgskcbmYly8Jdrlx&X-Amz-Signature=75c532c3d2ab8bab49c006298f0b66085365ec62d300c30000f980a54e04c89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6L7AD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACUXD3pc%2F%2BjI4iP%2B0A8L4wVJ2LoaIlIpj90oivVgCTPAiAswWBSmF3JF3c5MLWJJUKUVqCe69CG28GGKEmqevg8myqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5eEb5qOJmzJUh26KtwDdPTmQMGEIk2Q3CDEfXQpigxi0wtbPzRqD95jlynOIX67dmTzs8LOryWR5AqmwMziEnsc7lZhWk5LgBIHAdETm0ceG5PihjzcuaWeV18zTwsEhefocqu5dzfZVscknRf%2FfhdlDsXi4wfzt3jGron4pBc0vczNUpRWTUMxuGxjn5DrW0aZKWcj7rxb9YCrCKsX2YD3RpWI3wAKG0uqs67AnScp%2F96DJnnTP7xSHZIO%2F7KFSDWVqwUgTfiLXJ0cdVieBSgquwCeBfAG3Fshak4UIZDQWIopLxx16CxY1LXplg75wcZ4CrA7nu%2BZwyL%2FxQ2QxESN2z%2FWxOP2jIMNOvz6NDKgbp7kHMczQ7Tj9Wf93AhwXwiy8eY7b1a3PAXonzeolttSo20GIsddyjNK7bvAoYEL%2Fuxu2UZYjOEpiffOHgyOkkZbXA3fKpIv2DRjmTZN8PgdvLDdQQ6%2FfPPVo0mPkTQD%2BMPQuJN3qkrggEVxDUlL2YftB9DFHOBFL2lb3rrkf7GwEp81gsbvzjva9lvMHUYiEnLEB8ia218JzRaHpJCXU4ejQ9KG2sa%2FsxdkAs44XMgoZr3LYdiIW%2BIVEFFR5lpbZ1gvhTX1zwtfN9T1Mng4MwzKP62GynfgL9Uwgd%2FOwgY6pgEqAtLRP9o3bX3igCyOw46GNdWWeBIiXDYYurOECwKmmHFWeogt6u9zaibcCCipyv7H2aYIS%2FMskRLMYvVDv18BvWZyes0F2V80BQxijvOX0ISJ8%2Fu8tgBKgj2WKjyNTgm8tqklV5kIETXpmUWJa1hmhcva2iLUJ0bIF85pkzfmfVijCL8f6DSeoT1jKGflCCNdgCzbZ1tbBtxdxgskcbmYly8Jdrlx&X-Amz-Signature=e0f65e5950d74c301574f0061fca64ce51ba3284a7611a25d9d52ba33da16a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6L7AD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACUXD3pc%2F%2BjI4iP%2B0A8L4wVJ2LoaIlIpj90oivVgCTPAiAswWBSmF3JF3c5MLWJJUKUVqCe69CG28GGKEmqevg8myqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5eEb5qOJmzJUh26KtwDdPTmQMGEIk2Q3CDEfXQpigxi0wtbPzRqD95jlynOIX67dmTzs8LOryWR5AqmwMziEnsc7lZhWk5LgBIHAdETm0ceG5PihjzcuaWeV18zTwsEhefocqu5dzfZVscknRf%2FfhdlDsXi4wfzt3jGron4pBc0vczNUpRWTUMxuGxjn5DrW0aZKWcj7rxb9YCrCKsX2YD3RpWI3wAKG0uqs67AnScp%2F96DJnnTP7xSHZIO%2F7KFSDWVqwUgTfiLXJ0cdVieBSgquwCeBfAG3Fshak4UIZDQWIopLxx16CxY1LXplg75wcZ4CrA7nu%2BZwyL%2FxQ2QxESN2z%2FWxOP2jIMNOvz6NDKgbp7kHMczQ7Tj9Wf93AhwXwiy8eY7b1a3PAXonzeolttSo20GIsddyjNK7bvAoYEL%2Fuxu2UZYjOEpiffOHgyOkkZbXA3fKpIv2DRjmTZN8PgdvLDdQQ6%2FfPPVo0mPkTQD%2BMPQuJN3qkrggEVxDUlL2YftB9DFHOBFL2lb3rrkf7GwEp81gsbvzjva9lvMHUYiEnLEB8ia218JzRaHpJCXU4ejQ9KG2sa%2FsxdkAs44XMgoZr3LYdiIW%2BIVEFFR5lpbZ1gvhTX1zwtfN9T1Mng4MwzKP62GynfgL9Uwgd%2FOwgY6pgEqAtLRP9o3bX3igCyOw46GNdWWeBIiXDYYurOECwKmmHFWeogt6u9zaibcCCipyv7H2aYIS%2FMskRLMYvVDv18BvWZyes0F2V80BQxijvOX0ISJ8%2Fu8tgBKgj2WKjyNTgm8tqklV5kIETXpmUWJa1hmhcva2iLUJ0bIF85pkzfmfVijCL8f6DSeoT1jKGflCCNdgCzbZ1tbBtxdxgskcbmYly8Jdrlx&X-Amz-Signature=7a96abb0872753fd786bf8c5e8ffc187d059fce5cd83f19fc9b936612e90358e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6L7AD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACUXD3pc%2F%2BjI4iP%2B0A8L4wVJ2LoaIlIpj90oivVgCTPAiAswWBSmF3JF3c5MLWJJUKUVqCe69CG28GGKEmqevg8myqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5eEb5qOJmzJUh26KtwDdPTmQMGEIk2Q3CDEfXQpigxi0wtbPzRqD95jlynOIX67dmTzs8LOryWR5AqmwMziEnsc7lZhWk5LgBIHAdETm0ceG5PihjzcuaWeV18zTwsEhefocqu5dzfZVscknRf%2FfhdlDsXi4wfzt3jGron4pBc0vczNUpRWTUMxuGxjn5DrW0aZKWcj7rxb9YCrCKsX2YD3RpWI3wAKG0uqs67AnScp%2F96DJnnTP7xSHZIO%2F7KFSDWVqwUgTfiLXJ0cdVieBSgquwCeBfAG3Fshak4UIZDQWIopLxx16CxY1LXplg75wcZ4CrA7nu%2BZwyL%2FxQ2QxESN2z%2FWxOP2jIMNOvz6NDKgbp7kHMczQ7Tj9Wf93AhwXwiy8eY7b1a3PAXonzeolttSo20GIsddyjNK7bvAoYEL%2Fuxu2UZYjOEpiffOHgyOkkZbXA3fKpIv2DRjmTZN8PgdvLDdQQ6%2FfPPVo0mPkTQD%2BMPQuJN3qkrggEVxDUlL2YftB9DFHOBFL2lb3rrkf7GwEp81gsbvzjva9lvMHUYiEnLEB8ia218JzRaHpJCXU4ejQ9KG2sa%2FsxdkAs44XMgoZr3LYdiIW%2BIVEFFR5lpbZ1gvhTX1zwtfN9T1Mng4MwzKP62GynfgL9Uwgd%2FOwgY6pgEqAtLRP9o3bX3igCyOw46GNdWWeBIiXDYYurOECwKmmHFWeogt6u9zaibcCCipyv7H2aYIS%2FMskRLMYvVDv18BvWZyes0F2V80BQxijvOX0ISJ8%2Fu8tgBKgj2WKjyNTgm8tqklV5kIETXpmUWJa1hmhcva2iLUJ0bIF85pkzfmfVijCL8f6DSeoT1jKGflCCNdgCzbZ1tbBtxdxgskcbmYly8Jdrlx&X-Amz-Signature=ca0cb84eab1b7d7fb3d731de6d9773942cff958eaf00e7d06dde5e794b9c18c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6L7AD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACUXD3pc%2F%2BjI4iP%2B0A8L4wVJ2LoaIlIpj90oivVgCTPAiAswWBSmF3JF3c5MLWJJUKUVqCe69CG28GGKEmqevg8myqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5eEb5qOJmzJUh26KtwDdPTmQMGEIk2Q3CDEfXQpigxi0wtbPzRqD95jlynOIX67dmTzs8LOryWR5AqmwMziEnsc7lZhWk5LgBIHAdETm0ceG5PihjzcuaWeV18zTwsEhefocqu5dzfZVscknRf%2FfhdlDsXi4wfzt3jGron4pBc0vczNUpRWTUMxuGxjn5DrW0aZKWcj7rxb9YCrCKsX2YD3RpWI3wAKG0uqs67AnScp%2F96DJnnTP7xSHZIO%2F7KFSDWVqwUgTfiLXJ0cdVieBSgquwCeBfAG3Fshak4UIZDQWIopLxx16CxY1LXplg75wcZ4CrA7nu%2BZwyL%2FxQ2QxESN2z%2FWxOP2jIMNOvz6NDKgbp7kHMczQ7Tj9Wf93AhwXwiy8eY7b1a3PAXonzeolttSo20GIsddyjNK7bvAoYEL%2Fuxu2UZYjOEpiffOHgyOkkZbXA3fKpIv2DRjmTZN8PgdvLDdQQ6%2FfPPVo0mPkTQD%2BMPQuJN3qkrggEVxDUlL2YftB9DFHOBFL2lb3rrkf7GwEp81gsbvzjva9lvMHUYiEnLEB8ia218JzRaHpJCXU4ejQ9KG2sa%2FsxdkAs44XMgoZr3LYdiIW%2BIVEFFR5lpbZ1gvhTX1zwtfN9T1Mng4MwzKP62GynfgL9Uwgd%2FOwgY6pgEqAtLRP9o3bX3igCyOw46GNdWWeBIiXDYYurOECwKmmHFWeogt6u9zaibcCCipyv7H2aYIS%2FMskRLMYvVDv18BvWZyes0F2V80BQxijvOX0ISJ8%2Fu8tgBKgj2WKjyNTgm8tqklV5kIETXpmUWJa1hmhcva2iLUJ0bIF85pkzfmfVijCL8f6DSeoT1jKGflCCNdgCzbZ1tbBtxdxgskcbmYly8Jdrlx&X-Amz-Signature=84e5daae3f9dec72eefcb0237b24d57a97bc8b216d6994226dfae8d0a00fefd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLV6L7AD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACUXD3pc%2F%2BjI4iP%2B0A8L4wVJ2LoaIlIpj90oivVgCTPAiAswWBSmF3JF3c5MLWJJUKUVqCe69CG28GGKEmqevg8myqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ5eEb5qOJmzJUh26KtwDdPTmQMGEIk2Q3CDEfXQpigxi0wtbPzRqD95jlynOIX67dmTzs8LOryWR5AqmwMziEnsc7lZhWk5LgBIHAdETm0ceG5PihjzcuaWeV18zTwsEhefocqu5dzfZVscknRf%2FfhdlDsXi4wfzt3jGron4pBc0vczNUpRWTUMxuGxjn5DrW0aZKWcj7rxb9YCrCKsX2YD3RpWI3wAKG0uqs67AnScp%2F96DJnnTP7xSHZIO%2F7KFSDWVqwUgTfiLXJ0cdVieBSgquwCeBfAG3Fshak4UIZDQWIopLxx16CxY1LXplg75wcZ4CrA7nu%2BZwyL%2FxQ2QxESN2z%2FWxOP2jIMNOvz6NDKgbp7kHMczQ7Tj9Wf93AhwXwiy8eY7b1a3PAXonzeolttSo20GIsddyjNK7bvAoYEL%2Fuxu2UZYjOEpiffOHgyOkkZbXA3fKpIv2DRjmTZN8PgdvLDdQQ6%2FfPPVo0mPkTQD%2BMPQuJN3qkrggEVxDUlL2YftB9DFHOBFL2lb3rrkf7GwEp81gsbvzjva9lvMHUYiEnLEB8ia218JzRaHpJCXU4ejQ9KG2sa%2FsxdkAs44XMgoZr3LYdiIW%2BIVEFFR5lpbZ1gvhTX1zwtfN9T1Mng4MwzKP62GynfgL9Uwgd%2FOwgY6pgEqAtLRP9o3bX3igCyOw46GNdWWeBIiXDYYurOECwKmmHFWeogt6u9zaibcCCipyv7H2aYIS%2FMskRLMYvVDv18BvWZyes0F2V80BQxijvOX0ISJ8%2Fu8tgBKgj2WKjyNTgm8tqklV5kIETXpmUWJa1hmhcva2iLUJ0bIF85pkzfmfVijCL8f6DSeoT1jKGflCCNdgCzbZ1tbBtxdxgskcbmYly8Jdrlx&X-Amz-Signature=27a099b5a1afe5f2f36e45120f85044e447f62ebe88cc57c78b341ea00932cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
