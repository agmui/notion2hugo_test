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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J76D2UO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEPpcHiHHdLDcSnmF%2FoEXDScIpmGBMAfv%2FKCwAbw4LRLAiBBmMh5XMaO85Emhk9UXx8fzWZycAvVHph0aN3%2BGhQotSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGy5dEw%2F2S3UB28hcKtwDVQ0PfpK%2Bj6atGtGr45xFJGegpYQCAArgNchUSNbfYrtDcuOApq7sTnf1%2FDsbz8lBrtnwl2zNTA%2Fuz3uT2%2B7xes98Y4CjuOA%2FCNrwCPuWxNn5FBEIfUywvf2AJ5c15Xvq%2FulvNe7BdAdgtbKf1ImiBysDOus7N5XYBQ%2BbQnLdfMhtDNxdjZI4Lq4a1bMkqPCbskNy64jtpeg%2FOE4pj8MNvQTD0qPAZRssu%2Fh10VO%2BpbvtAWL1lgmWkZ9hooztZqC4aDx8Tygoyu0P8NcJhTWXyDo3EtAO7N7l3H%2BejF3BxLfooFOluu9cY02h65IVNePx3pzK6z8AynQ%2B9MyfATMMNjF162gLrBao9dYi%2FK7VUVwDRabrSrteaq%2BAhaiohFx9BrBldrU8dGO8gcNZC3e4TE38I9jaMJOaSOWEHnfrTo2YJLhlFF3lrnwuePMJpL3jeyTmDKxh1Y6HCOFapHyepl9C5LUL3m1CpGOsGhosQDnattivKNTv9u7G%2B2UqL1zI%2BbWBxksLM1vfvRy7oGIJvR4x8oHAHdL8LFX1e40EkXEpjBXmv%2F%2FLPr2XmUltwyisH4J2%2BqCtMNPEkbiZC3D1O0gkjfm%2FjXK0Rot4MyO8kQnYxosbtkasTVjQseMw8MDWvwY6pgFomqmX6xkw5gUTJew4e0XdVW2R3DTyfn%2FgAsfmPaMothSMLwAnntNaPhZhtf1rZFS8yKfy6SRZwIFBjrXp09Kzy7w6gLDS8WxbDuHpgP46uIAsHa%2BsHeEIRMStv%2BkURqZtN90swq3QilUwgZK1AqHgoJL0a92eQdvIiWry5tN5b8DInhsMCMHrzIn6Z3hChEAZwUc%2Fk0sTU%2Bekt3b%2Bg9yJTcolpoKu&X-Amz-Signature=3684d0f787dc66a3ecd2610ef80023b966b5768be1b268cda239bc9899d3685e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J76D2UO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEPpcHiHHdLDcSnmF%2FoEXDScIpmGBMAfv%2FKCwAbw4LRLAiBBmMh5XMaO85Emhk9UXx8fzWZycAvVHph0aN3%2BGhQotSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGy5dEw%2F2S3UB28hcKtwDVQ0PfpK%2Bj6atGtGr45xFJGegpYQCAArgNchUSNbfYrtDcuOApq7sTnf1%2FDsbz8lBrtnwl2zNTA%2Fuz3uT2%2B7xes98Y4CjuOA%2FCNrwCPuWxNn5FBEIfUywvf2AJ5c15Xvq%2FulvNe7BdAdgtbKf1ImiBysDOus7N5XYBQ%2BbQnLdfMhtDNxdjZI4Lq4a1bMkqPCbskNy64jtpeg%2FOE4pj8MNvQTD0qPAZRssu%2Fh10VO%2BpbvtAWL1lgmWkZ9hooztZqC4aDx8Tygoyu0P8NcJhTWXyDo3EtAO7N7l3H%2BejF3BxLfooFOluu9cY02h65IVNePx3pzK6z8AynQ%2B9MyfATMMNjF162gLrBao9dYi%2FK7VUVwDRabrSrteaq%2BAhaiohFx9BrBldrU8dGO8gcNZC3e4TE38I9jaMJOaSOWEHnfrTo2YJLhlFF3lrnwuePMJpL3jeyTmDKxh1Y6HCOFapHyepl9C5LUL3m1CpGOsGhosQDnattivKNTv9u7G%2B2UqL1zI%2BbWBxksLM1vfvRy7oGIJvR4x8oHAHdL8LFX1e40EkXEpjBXmv%2F%2FLPr2XmUltwyisH4J2%2BqCtMNPEkbiZC3D1O0gkjfm%2FjXK0Rot4MyO8kQnYxosbtkasTVjQseMw8MDWvwY6pgFomqmX6xkw5gUTJew4e0XdVW2R3DTyfn%2FgAsfmPaMothSMLwAnntNaPhZhtf1rZFS8yKfy6SRZwIFBjrXp09Kzy7w6gLDS8WxbDuHpgP46uIAsHa%2BsHeEIRMStv%2BkURqZtN90swq3QilUwgZK1AqHgoJL0a92eQdvIiWry5tN5b8DInhsMCMHrzIn6Z3hChEAZwUc%2Fk0sTU%2Bekt3b%2Bg9yJTcolpoKu&X-Amz-Signature=14e022151b3a1d792b4ac699bec7debb26d2c9b8d26351b3c677f38533e3938d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J76D2UO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEPpcHiHHdLDcSnmF%2FoEXDScIpmGBMAfv%2FKCwAbw4LRLAiBBmMh5XMaO85Emhk9UXx8fzWZycAvVHph0aN3%2BGhQotSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGy5dEw%2F2S3UB28hcKtwDVQ0PfpK%2Bj6atGtGr45xFJGegpYQCAArgNchUSNbfYrtDcuOApq7sTnf1%2FDsbz8lBrtnwl2zNTA%2Fuz3uT2%2B7xes98Y4CjuOA%2FCNrwCPuWxNn5FBEIfUywvf2AJ5c15Xvq%2FulvNe7BdAdgtbKf1ImiBysDOus7N5XYBQ%2BbQnLdfMhtDNxdjZI4Lq4a1bMkqPCbskNy64jtpeg%2FOE4pj8MNvQTD0qPAZRssu%2Fh10VO%2BpbvtAWL1lgmWkZ9hooztZqC4aDx8Tygoyu0P8NcJhTWXyDo3EtAO7N7l3H%2BejF3BxLfooFOluu9cY02h65IVNePx3pzK6z8AynQ%2B9MyfATMMNjF162gLrBao9dYi%2FK7VUVwDRabrSrteaq%2BAhaiohFx9BrBldrU8dGO8gcNZC3e4TE38I9jaMJOaSOWEHnfrTo2YJLhlFF3lrnwuePMJpL3jeyTmDKxh1Y6HCOFapHyepl9C5LUL3m1CpGOsGhosQDnattivKNTv9u7G%2B2UqL1zI%2BbWBxksLM1vfvRy7oGIJvR4x8oHAHdL8LFX1e40EkXEpjBXmv%2F%2FLPr2XmUltwyisH4J2%2BqCtMNPEkbiZC3D1O0gkjfm%2FjXK0Rot4MyO8kQnYxosbtkasTVjQseMw8MDWvwY6pgFomqmX6xkw5gUTJew4e0XdVW2R3DTyfn%2FgAsfmPaMothSMLwAnntNaPhZhtf1rZFS8yKfy6SRZwIFBjrXp09Kzy7w6gLDS8WxbDuHpgP46uIAsHa%2BsHeEIRMStv%2BkURqZtN90swq3QilUwgZK1AqHgoJL0a92eQdvIiWry5tN5b8DInhsMCMHrzIn6Z3hChEAZwUc%2Fk0sTU%2Bekt3b%2Bg9yJTcolpoKu&X-Amz-Signature=1ee3f59a4aa44690d31f6d5a295eafe27cf21d1568ebd6a3ffe610745682cd88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J76D2UO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEPpcHiHHdLDcSnmF%2FoEXDScIpmGBMAfv%2FKCwAbw4LRLAiBBmMh5XMaO85Emhk9UXx8fzWZycAvVHph0aN3%2BGhQotSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGy5dEw%2F2S3UB28hcKtwDVQ0PfpK%2Bj6atGtGr45xFJGegpYQCAArgNchUSNbfYrtDcuOApq7sTnf1%2FDsbz8lBrtnwl2zNTA%2Fuz3uT2%2B7xes98Y4CjuOA%2FCNrwCPuWxNn5FBEIfUywvf2AJ5c15Xvq%2FulvNe7BdAdgtbKf1ImiBysDOus7N5XYBQ%2BbQnLdfMhtDNxdjZI4Lq4a1bMkqPCbskNy64jtpeg%2FOE4pj8MNvQTD0qPAZRssu%2Fh10VO%2BpbvtAWL1lgmWkZ9hooztZqC4aDx8Tygoyu0P8NcJhTWXyDo3EtAO7N7l3H%2BejF3BxLfooFOluu9cY02h65IVNePx3pzK6z8AynQ%2B9MyfATMMNjF162gLrBao9dYi%2FK7VUVwDRabrSrteaq%2BAhaiohFx9BrBldrU8dGO8gcNZC3e4TE38I9jaMJOaSOWEHnfrTo2YJLhlFF3lrnwuePMJpL3jeyTmDKxh1Y6HCOFapHyepl9C5LUL3m1CpGOsGhosQDnattivKNTv9u7G%2B2UqL1zI%2BbWBxksLM1vfvRy7oGIJvR4x8oHAHdL8LFX1e40EkXEpjBXmv%2F%2FLPr2XmUltwyisH4J2%2BqCtMNPEkbiZC3D1O0gkjfm%2FjXK0Rot4MyO8kQnYxosbtkasTVjQseMw8MDWvwY6pgFomqmX6xkw5gUTJew4e0XdVW2R3DTyfn%2FgAsfmPaMothSMLwAnntNaPhZhtf1rZFS8yKfy6SRZwIFBjrXp09Kzy7w6gLDS8WxbDuHpgP46uIAsHa%2BsHeEIRMStv%2BkURqZtN90swq3QilUwgZK1AqHgoJL0a92eQdvIiWry5tN5b8DInhsMCMHrzIn6Z3hChEAZwUc%2Fk0sTU%2Bekt3b%2Bg9yJTcolpoKu&X-Amz-Signature=28d7b4bec27c501a20a384ca263b3707820138e99a38d70213f57ea0f121f64f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J76D2UO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEPpcHiHHdLDcSnmF%2FoEXDScIpmGBMAfv%2FKCwAbw4LRLAiBBmMh5XMaO85Emhk9UXx8fzWZycAvVHph0aN3%2BGhQotSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGy5dEw%2F2S3UB28hcKtwDVQ0PfpK%2Bj6atGtGr45xFJGegpYQCAArgNchUSNbfYrtDcuOApq7sTnf1%2FDsbz8lBrtnwl2zNTA%2Fuz3uT2%2B7xes98Y4CjuOA%2FCNrwCPuWxNn5FBEIfUywvf2AJ5c15Xvq%2FulvNe7BdAdgtbKf1ImiBysDOus7N5XYBQ%2BbQnLdfMhtDNxdjZI4Lq4a1bMkqPCbskNy64jtpeg%2FOE4pj8MNvQTD0qPAZRssu%2Fh10VO%2BpbvtAWL1lgmWkZ9hooztZqC4aDx8Tygoyu0P8NcJhTWXyDo3EtAO7N7l3H%2BejF3BxLfooFOluu9cY02h65IVNePx3pzK6z8AynQ%2B9MyfATMMNjF162gLrBao9dYi%2FK7VUVwDRabrSrteaq%2BAhaiohFx9BrBldrU8dGO8gcNZC3e4TE38I9jaMJOaSOWEHnfrTo2YJLhlFF3lrnwuePMJpL3jeyTmDKxh1Y6HCOFapHyepl9C5LUL3m1CpGOsGhosQDnattivKNTv9u7G%2B2UqL1zI%2BbWBxksLM1vfvRy7oGIJvR4x8oHAHdL8LFX1e40EkXEpjBXmv%2F%2FLPr2XmUltwyisH4J2%2BqCtMNPEkbiZC3D1O0gkjfm%2FjXK0Rot4MyO8kQnYxosbtkasTVjQseMw8MDWvwY6pgFomqmX6xkw5gUTJew4e0XdVW2R3DTyfn%2FgAsfmPaMothSMLwAnntNaPhZhtf1rZFS8yKfy6SRZwIFBjrXp09Kzy7w6gLDS8WxbDuHpgP46uIAsHa%2BsHeEIRMStv%2BkURqZtN90swq3QilUwgZK1AqHgoJL0a92eQdvIiWry5tN5b8DInhsMCMHrzIn6Z3hChEAZwUc%2Fk0sTU%2Bekt3b%2Bg9yJTcolpoKu&X-Amz-Signature=52d237f60e3f70ef74259806ac52f56006fee7c024c63bf78e492c6e25e7c441&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J76D2UO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEPpcHiHHdLDcSnmF%2FoEXDScIpmGBMAfv%2FKCwAbw4LRLAiBBmMh5XMaO85Emhk9UXx8fzWZycAvVHph0aN3%2BGhQotSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMGy5dEw%2F2S3UB28hcKtwDVQ0PfpK%2Bj6atGtGr45xFJGegpYQCAArgNchUSNbfYrtDcuOApq7sTnf1%2FDsbz8lBrtnwl2zNTA%2Fuz3uT2%2B7xes98Y4CjuOA%2FCNrwCPuWxNn5FBEIfUywvf2AJ5c15Xvq%2FulvNe7BdAdgtbKf1ImiBysDOus7N5XYBQ%2BbQnLdfMhtDNxdjZI4Lq4a1bMkqPCbskNy64jtpeg%2FOE4pj8MNvQTD0qPAZRssu%2Fh10VO%2BpbvtAWL1lgmWkZ9hooztZqC4aDx8Tygoyu0P8NcJhTWXyDo3EtAO7N7l3H%2BejF3BxLfooFOluu9cY02h65IVNePx3pzK6z8AynQ%2B9MyfATMMNjF162gLrBao9dYi%2FK7VUVwDRabrSrteaq%2BAhaiohFx9BrBldrU8dGO8gcNZC3e4TE38I9jaMJOaSOWEHnfrTo2YJLhlFF3lrnwuePMJpL3jeyTmDKxh1Y6HCOFapHyepl9C5LUL3m1CpGOsGhosQDnattivKNTv9u7G%2B2UqL1zI%2BbWBxksLM1vfvRy7oGIJvR4x8oHAHdL8LFX1e40EkXEpjBXmv%2F%2FLPr2XmUltwyisH4J2%2BqCtMNPEkbiZC3D1O0gkjfm%2FjXK0Rot4MyO8kQnYxosbtkasTVjQseMw8MDWvwY6pgFomqmX6xkw5gUTJew4e0XdVW2R3DTyfn%2FgAsfmPaMothSMLwAnntNaPhZhtf1rZFS8yKfy6SRZwIFBjrXp09Kzy7w6gLDS8WxbDuHpgP46uIAsHa%2BsHeEIRMStv%2BkURqZtN90swq3QilUwgZK1AqHgoJL0a92eQdvIiWry5tN5b8DInhsMCMHrzIn6Z3hChEAZwUc%2Fk0sTU%2Bekt3b%2Bg9yJTcolpoKu&X-Amz-Signature=aa6213d68fcf9aff2effbf5d1e27559e8ffcbf4f8e0142fcf56361262421a23b&X-Amz-SignedHeaders=host&x-id=GetObject)
