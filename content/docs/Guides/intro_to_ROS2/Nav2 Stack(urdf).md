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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=710d2b8e50f28e360ab9c170584412b1070b7524de8570bf5104f080beb7c31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=4517f1f1df233e0e270ac4f7b0cbc1c95fab35971b9d862dd184f2f27dc5bea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=5d1117bc9f4af2c2f8ee1c0405187b3716c4aa95f32b55f3c3a1753f39591b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=e5806f4ae4f318a3e70afddd875661d77f700e6ebe81d5b82202422ab37bed96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=b67730021c5cd9812d4c244147f730778c68dd909102900027373b679027615f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S43NBC7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDvqwUwA%2BTHaLRtIf%2BRfUg%2FC9yGm%2FwtLenO0oW2Rr7u2wIgUJC%2FAuYiGaiHV2yGC6VKNxflVNhLmx8BBwOqAsvqamAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJbUkYtMMHpP%2BcmN%2ByrcA%2BMwZk0DEWWaa4aqWaxmY7NGsa%2F4W2VhOqtgChmlbU6keX6rarBzcv7UxNKTWsAC%2BHbLZ1X%2BLHoKux3N9OqmdbSX4xVfI4ehM30PJ5j5tDVWnlWqilxb23wSlTnPdXdQEmdmLHaWD19gbRg8%2FEaU%2FqJ9edKUD76UzefkjOSRoXIQUTNbHy8ALqqm%2BCW8Pk2UhYZDwBqm1rwcq3P1lq6XjjttaxuJ5HGo%2BFi4P%2BzHBoJjnf5s1nVUCZGm1ZkorcuIe5nnICPB0GS5SsWWbsZxKsWPFZ0cF%2BmIDP1Dbyh%2Fz1MmW%2FweKfrt9UIkXg2LkHpfKKKtYjLC6WW8s4RcYcI4K1fuadi%2F9o1H3%2FfoEl6houriq4Hs0jAD25Ah0NonG%2FL8QU0eIWU4VKuzwsnMo0TtTlylpnd5hbhdwzZY1n4OSO8mDke7LUcbt1ScPyYVKbNnORkSC5PsIY4H92DmDGw3ExEcgfDotRG2Z%2Bz8aWOk%2BOClyr0nQhUUr5AdoZdIdDOI3EHIp4hWfDZM987lhf4CB0Pu2UhP4XMcaKd1M6RH6%2Fftw8wMF%2B0PWIcnsS57mWAELyE7dt9K37ntw7lteCxeJh%2FxcTzug8KEINPuMvVupLe%2BcyL9jVdX0NbekO%2FUMKX05MIGOqUBcZunNGfmCP0VMXBczpmB6gt8oXoC0SDnj16BdCnWnil4BkHY2Bh21IhIVy9IwTTTUxj7R7kxtGv6XODjSZ5bhDRtThKA6BCMSXQTExMbqIZjSgdt9FWvn%2FFWSixkAQlEIca9HRCNtIHJg67jqzs9GvMEzBCGgnpyy10UOH%2Bl4BtrxV2aJvb0ep1dC%2BoQkkTn7ERWOmfzJriRCRwpDzGsKW5JJZ9F&X-Amz-Signature=4bf899850669f17db0532edecd8cfbba118a476e60004a5ee8712b223135d7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
