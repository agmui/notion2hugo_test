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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEW73Z5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgoORVN4FZ%2F8nCCyANQD2zxW0XR1ExCIMoBB1m%2FWnKOwIhALzlRlxR7BEi6OVEILpUwgHdbCaofB3mcfgXbX%2Fug4EWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzyQUP2mYKpBAc5pAkq3APf%2BJ2xXJcPCoRv76YqKKiAynRU5%2FxgTBWw%2F26TLA9hve88Erg5jjfpply58MXipsgon3RSd3qPjCJD9ZI8tu4aEcG5mLzpHdbfWIPpbx3lzx8xarskWsTpkmFx7%2FW%2FMOT3143Couk9Oue3JT57osfn3dA6nrZjIYm%2Bv16LMsuVi8Gh92OpS2lTubrHSfw%2F0aqpeFopfMJEYe9JxXvzbhql9b4hpPPio1TiCC1ZmllEBKjfqZ4Kaxa6usNQBI3xbYSTvtSPO8BWAobnrQqsraDs0q98rhgGwFquTAtXU9NaVKYcJ4zs4bOi874VcmoWPLdm4iUbpkg2kz9Lfe1zuCnSrAchpWjfiTLHKs%2BYFJqrM3P0j3aKQbuwdepkLM8uyNZEJpDijBT%2BX5GPKzzsOLNBsgAo7f3nankH6q6j7SmeBg%2B2zyEdpWt%2F5z79R%2BeS5kCVCz%2Bodu18jxtrepdPFDOxg8MvfRFN6okI%2FIltIB15Ck2QpSYni7hy4ewJSmZBNNKsB7vg40AyXZeVhB9K9nw7qc3V3hNLhYkqwatwGAn9OiY1RBGOx3r4I0LcWRyng5gKjBRjKnfCc6hjM6YjOtV7Kac4zwdy9gZdbhzSPN6WJLkH3HNGFlw46yv3ETCNjoK%2BBjqkAZ0lYHb8btkcAHjmtrrTrbqRowHpT4TqIHAD%2BFFwvh3zRWImor1XQ9AG16qMkT1fvRbj3NQPTQ%2Fzr5HFOt0856Rbk0CZ3I6kkLu1vNIjtD39vSMS%2B8hNvYwjVopE6cK06%2Fd7aOtfY4PwwVGnCAn%2F7S1TJMvN1AjeR%2F%2BlOa41PWHVUKg0XSN6t83G7oLkGux4eR%2BgDhf%2FYxAG6ynLfP7gwax%2BLfoV&X-Amz-Signature=327751832b5f6054c4ac5df4d20b53c5ef0b9c60962c01ff8259f272d85a4d80&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEW73Z5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgoORVN4FZ%2F8nCCyANQD2zxW0XR1ExCIMoBB1m%2FWnKOwIhALzlRlxR7BEi6OVEILpUwgHdbCaofB3mcfgXbX%2Fug4EWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzyQUP2mYKpBAc5pAkq3APf%2BJ2xXJcPCoRv76YqKKiAynRU5%2FxgTBWw%2F26TLA9hve88Erg5jjfpply58MXipsgon3RSd3qPjCJD9ZI8tu4aEcG5mLzpHdbfWIPpbx3lzx8xarskWsTpkmFx7%2FW%2FMOT3143Couk9Oue3JT57osfn3dA6nrZjIYm%2Bv16LMsuVi8Gh92OpS2lTubrHSfw%2F0aqpeFopfMJEYe9JxXvzbhql9b4hpPPio1TiCC1ZmllEBKjfqZ4Kaxa6usNQBI3xbYSTvtSPO8BWAobnrQqsraDs0q98rhgGwFquTAtXU9NaVKYcJ4zs4bOi874VcmoWPLdm4iUbpkg2kz9Lfe1zuCnSrAchpWjfiTLHKs%2BYFJqrM3P0j3aKQbuwdepkLM8uyNZEJpDijBT%2BX5GPKzzsOLNBsgAo7f3nankH6q6j7SmeBg%2B2zyEdpWt%2F5z79R%2BeS5kCVCz%2Bodu18jxtrepdPFDOxg8MvfRFN6okI%2FIltIB15Ck2QpSYni7hy4ewJSmZBNNKsB7vg40AyXZeVhB9K9nw7qc3V3hNLhYkqwatwGAn9OiY1RBGOx3r4I0LcWRyng5gKjBRjKnfCc6hjM6YjOtV7Kac4zwdy9gZdbhzSPN6WJLkH3HNGFlw46yv3ETCNjoK%2BBjqkAZ0lYHb8btkcAHjmtrrTrbqRowHpT4TqIHAD%2BFFwvh3zRWImor1XQ9AG16qMkT1fvRbj3NQPTQ%2Fzr5HFOt0856Rbk0CZ3I6kkLu1vNIjtD39vSMS%2B8hNvYwjVopE6cK06%2Fd7aOtfY4PwwVGnCAn%2F7S1TJMvN1AjeR%2F%2BlOa41PWHVUKg0XSN6t83G7oLkGux4eR%2BgDhf%2FYxAG6ynLfP7gwax%2BLfoV&X-Amz-Signature=039b62a4bf15f327aacade794ecd3eebef68a67c19eb3387cc006f39f895a3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEW73Z5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgoORVN4FZ%2F8nCCyANQD2zxW0XR1ExCIMoBB1m%2FWnKOwIhALzlRlxR7BEi6OVEILpUwgHdbCaofB3mcfgXbX%2Fug4EWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzyQUP2mYKpBAc5pAkq3APf%2BJ2xXJcPCoRv76YqKKiAynRU5%2FxgTBWw%2F26TLA9hve88Erg5jjfpply58MXipsgon3RSd3qPjCJD9ZI8tu4aEcG5mLzpHdbfWIPpbx3lzx8xarskWsTpkmFx7%2FW%2FMOT3143Couk9Oue3JT57osfn3dA6nrZjIYm%2Bv16LMsuVi8Gh92OpS2lTubrHSfw%2F0aqpeFopfMJEYe9JxXvzbhql9b4hpPPio1TiCC1ZmllEBKjfqZ4Kaxa6usNQBI3xbYSTvtSPO8BWAobnrQqsraDs0q98rhgGwFquTAtXU9NaVKYcJ4zs4bOi874VcmoWPLdm4iUbpkg2kz9Lfe1zuCnSrAchpWjfiTLHKs%2BYFJqrM3P0j3aKQbuwdepkLM8uyNZEJpDijBT%2BX5GPKzzsOLNBsgAo7f3nankH6q6j7SmeBg%2B2zyEdpWt%2F5z79R%2BeS5kCVCz%2Bodu18jxtrepdPFDOxg8MvfRFN6okI%2FIltIB15Ck2QpSYni7hy4ewJSmZBNNKsB7vg40AyXZeVhB9K9nw7qc3V3hNLhYkqwatwGAn9OiY1RBGOx3r4I0LcWRyng5gKjBRjKnfCc6hjM6YjOtV7Kac4zwdy9gZdbhzSPN6WJLkH3HNGFlw46yv3ETCNjoK%2BBjqkAZ0lYHb8btkcAHjmtrrTrbqRowHpT4TqIHAD%2BFFwvh3zRWImor1XQ9AG16qMkT1fvRbj3NQPTQ%2Fzr5HFOt0856Rbk0CZ3I6kkLu1vNIjtD39vSMS%2B8hNvYwjVopE6cK06%2Fd7aOtfY4PwwVGnCAn%2F7S1TJMvN1AjeR%2F%2BlOa41PWHVUKg0XSN6t83G7oLkGux4eR%2BgDhf%2FYxAG6ynLfP7gwax%2BLfoV&X-Amz-Signature=6d261ab43e0702afbd28c61f29d06c87bb4ff6c765792465844acfea1c7a7537&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEW73Z5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgoORVN4FZ%2F8nCCyANQD2zxW0XR1ExCIMoBB1m%2FWnKOwIhALzlRlxR7BEi6OVEILpUwgHdbCaofB3mcfgXbX%2Fug4EWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzyQUP2mYKpBAc5pAkq3APf%2BJ2xXJcPCoRv76YqKKiAynRU5%2FxgTBWw%2F26TLA9hve88Erg5jjfpply58MXipsgon3RSd3qPjCJD9ZI8tu4aEcG5mLzpHdbfWIPpbx3lzx8xarskWsTpkmFx7%2FW%2FMOT3143Couk9Oue3JT57osfn3dA6nrZjIYm%2Bv16LMsuVi8Gh92OpS2lTubrHSfw%2F0aqpeFopfMJEYe9JxXvzbhql9b4hpPPio1TiCC1ZmllEBKjfqZ4Kaxa6usNQBI3xbYSTvtSPO8BWAobnrQqsraDs0q98rhgGwFquTAtXU9NaVKYcJ4zs4bOi874VcmoWPLdm4iUbpkg2kz9Lfe1zuCnSrAchpWjfiTLHKs%2BYFJqrM3P0j3aKQbuwdepkLM8uyNZEJpDijBT%2BX5GPKzzsOLNBsgAo7f3nankH6q6j7SmeBg%2B2zyEdpWt%2F5z79R%2BeS5kCVCz%2Bodu18jxtrepdPFDOxg8MvfRFN6okI%2FIltIB15Ck2QpSYni7hy4ewJSmZBNNKsB7vg40AyXZeVhB9K9nw7qc3V3hNLhYkqwatwGAn9OiY1RBGOx3r4I0LcWRyng5gKjBRjKnfCc6hjM6YjOtV7Kac4zwdy9gZdbhzSPN6WJLkH3HNGFlw46yv3ETCNjoK%2BBjqkAZ0lYHb8btkcAHjmtrrTrbqRowHpT4TqIHAD%2BFFwvh3zRWImor1XQ9AG16qMkT1fvRbj3NQPTQ%2Fzr5HFOt0856Rbk0CZ3I6kkLu1vNIjtD39vSMS%2B8hNvYwjVopE6cK06%2Fd7aOtfY4PwwVGnCAn%2F7S1TJMvN1AjeR%2F%2BlOa41PWHVUKg0XSN6t83G7oLkGux4eR%2BgDhf%2FYxAG6ynLfP7gwax%2BLfoV&X-Amz-Signature=09399d456ab5681fc771567746c1f221d595a592dbf562656349ec32a0cde42a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEW73Z5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgoORVN4FZ%2F8nCCyANQD2zxW0XR1ExCIMoBB1m%2FWnKOwIhALzlRlxR7BEi6OVEILpUwgHdbCaofB3mcfgXbX%2Fug4EWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzyQUP2mYKpBAc5pAkq3APf%2BJ2xXJcPCoRv76YqKKiAynRU5%2FxgTBWw%2F26TLA9hve88Erg5jjfpply58MXipsgon3RSd3qPjCJD9ZI8tu4aEcG5mLzpHdbfWIPpbx3lzx8xarskWsTpkmFx7%2FW%2FMOT3143Couk9Oue3JT57osfn3dA6nrZjIYm%2Bv16LMsuVi8Gh92OpS2lTubrHSfw%2F0aqpeFopfMJEYe9JxXvzbhql9b4hpPPio1TiCC1ZmllEBKjfqZ4Kaxa6usNQBI3xbYSTvtSPO8BWAobnrQqsraDs0q98rhgGwFquTAtXU9NaVKYcJ4zs4bOi874VcmoWPLdm4iUbpkg2kz9Lfe1zuCnSrAchpWjfiTLHKs%2BYFJqrM3P0j3aKQbuwdepkLM8uyNZEJpDijBT%2BX5GPKzzsOLNBsgAo7f3nankH6q6j7SmeBg%2B2zyEdpWt%2F5z79R%2BeS5kCVCz%2Bodu18jxtrepdPFDOxg8MvfRFN6okI%2FIltIB15Ck2QpSYni7hy4ewJSmZBNNKsB7vg40AyXZeVhB9K9nw7qc3V3hNLhYkqwatwGAn9OiY1RBGOx3r4I0LcWRyng5gKjBRjKnfCc6hjM6YjOtV7Kac4zwdy9gZdbhzSPN6WJLkH3HNGFlw46yv3ETCNjoK%2BBjqkAZ0lYHb8btkcAHjmtrrTrbqRowHpT4TqIHAD%2BFFwvh3zRWImor1XQ9AG16qMkT1fvRbj3NQPTQ%2Fzr5HFOt0856Rbk0CZ3I6kkLu1vNIjtD39vSMS%2B8hNvYwjVopE6cK06%2Fd7aOtfY4PwwVGnCAn%2F7S1TJMvN1AjeR%2F%2BlOa41PWHVUKg0XSN6t83G7oLkGux4eR%2BgDhf%2FYxAG6ynLfP7gwax%2BLfoV&X-Amz-Signature=09bd4d9b1693b6de55b07580596c97ffcf8eb3c83153f045fbb278c56e3ae875&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEW73Z5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDgoORVN4FZ%2F8nCCyANQD2zxW0XR1ExCIMoBB1m%2FWnKOwIhALzlRlxR7BEi6OVEILpUwgHdbCaofB3mcfgXbX%2Fug4EWKv8DCHkQABoMNjM3NDIzMTgzODA1IgzyQUP2mYKpBAc5pAkq3APf%2BJ2xXJcPCoRv76YqKKiAynRU5%2FxgTBWw%2F26TLA9hve88Erg5jjfpply58MXipsgon3RSd3qPjCJD9ZI8tu4aEcG5mLzpHdbfWIPpbx3lzx8xarskWsTpkmFx7%2FW%2FMOT3143Couk9Oue3JT57osfn3dA6nrZjIYm%2Bv16LMsuVi8Gh92OpS2lTubrHSfw%2F0aqpeFopfMJEYe9JxXvzbhql9b4hpPPio1TiCC1ZmllEBKjfqZ4Kaxa6usNQBI3xbYSTvtSPO8BWAobnrQqsraDs0q98rhgGwFquTAtXU9NaVKYcJ4zs4bOi874VcmoWPLdm4iUbpkg2kz9Lfe1zuCnSrAchpWjfiTLHKs%2BYFJqrM3P0j3aKQbuwdepkLM8uyNZEJpDijBT%2BX5GPKzzsOLNBsgAo7f3nankH6q6j7SmeBg%2B2zyEdpWt%2F5z79R%2BeS5kCVCz%2Bodu18jxtrepdPFDOxg8MvfRFN6okI%2FIltIB15Ck2QpSYni7hy4ewJSmZBNNKsB7vg40AyXZeVhB9K9nw7qc3V3hNLhYkqwatwGAn9OiY1RBGOx3r4I0LcWRyng5gKjBRjKnfCc6hjM6YjOtV7Kac4zwdy9gZdbhzSPN6WJLkH3HNGFlw46yv3ETCNjoK%2BBjqkAZ0lYHb8btkcAHjmtrrTrbqRowHpT4TqIHAD%2BFFwvh3zRWImor1XQ9AG16qMkT1fvRbj3NQPTQ%2Fzr5HFOt0856Rbk0CZ3I6kkLu1vNIjtD39vSMS%2B8hNvYwjVopE6cK06%2Fd7aOtfY4PwwVGnCAn%2F7S1TJMvN1AjeR%2F%2BlOa41PWHVUKg0XSN6t83G7oLkGux4eR%2BgDhf%2FYxAG6ynLfP7gwax%2BLfoV&X-Amz-Signature=bc2df3a5fc9f9c11020aa6fe4dcf32e89530a1f9102fc5fa9f9e64f580ef305e&X-Amz-SignedHeaders=host&x-id=GetObject)
