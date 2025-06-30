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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKX6536%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qYm6aUiXv05SCIURdXcejd3wZbEffaO87wL6KLkYVgIgaX2fq3IC0SHEbI%2BLN%2F%2Bmtt%2FVCTsIz5WWj%2BYLpaX5TAAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe3Et2CedYNK6rTwCrcA9pId2kcHQoreOZumvJ0XFf9%2FcwKUoC%2BTqQ%2BzucDdqPoDB6T4EILlBbkfj0m7dR3wD%2BiCetswy1AWOcBGdghGd3t5PCNGZu3uNu7NiDF7ho2zSRNhawQM8mz5Ha%2FFNyxJVKQ4FnyA6MNuiraI2bJpA1Rv5OHQqp2PJGSftVXyRHUDnY9QWnGDzpusGZNdFuvdd%2B35DMx51EIUjdMc4kJAXt6qMh2qoha7NaAqd43gxIiNu9bzTmHRzmQgpCc8DfbPlf%2FmnDNe7C4FDJFU5yLxUyD2H%2FLL38gWYyQq5O6FHPMCzLZCUKP1BALHtdmolzgPoZGHbZjCoz%2BgFyZaB%2FXu%2FMNrIP1ZD7%2BEQ1sEu%2BL6YXjE8ZMmAA3h50sDnaUj9pP0V7nkyqN%2F71uVK0K3Srz89K2G5ItuN5n7dFQx3q29kqRH3wxa6rsb9Q%2BeM4ZwkZtt8xNxHaXBmFDDQ0kJX%2BwSuwliZjEhKcnr1Dl8%2BikLByodFsJyC%2BQrGpWToM4oLt654ZAt1AMv4kIEMw3YzhmqB%2Bzf8WzmQD110HpqonXGmIWJi69XL6odKRb4FeQq0Cq4X9nX%2FWIu2nOxZN2Se5pyy26kiqaTQA5gyuS%2B7NBwcHxAQjMDSZLga%2BAF6cYMKnxh8MGOqUB%2FrSs46QFqw60m1LCIEol%2B%2FEV4E1uhKKEp4Xb7KDI8%2F5e9DcWvT0bGKmbcVhTTRFQMojwKqWdNqgW%2FUJcT9qAk6mm1tBKAUZgXiRb4YbduL4P3oDatLe8WYHNHIZZtiQOVhi0HuIq8J8LzrQQ8l8A8dkpr7IINZFO0r4Wv3R6wDgHYsFuC5i6mTUNpseeGJy1f4nqo3UhlB4mvgho1ITWn2gl9cgK&X-Amz-Signature=5732c01e86c9be20d1d31d24aa8e409d66e62ebbbb5f680f6f9477b79952e8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKX6536%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qYm6aUiXv05SCIURdXcejd3wZbEffaO87wL6KLkYVgIgaX2fq3IC0SHEbI%2BLN%2F%2Bmtt%2FVCTsIz5WWj%2BYLpaX5TAAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe3Et2CedYNK6rTwCrcA9pId2kcHQoreOZumvJ0XFf9%2FcwKUoC%2BTqQ%2BzucDdqPoDB6T4EILlBbkfj0m7dR3wD%2BiCetswy1AWOcBGdghGd3t5PCNGZu3uNu7NiDF7ho2zSRNhawQM8mz5Ha%2FFNyxJVKQ4FnyA6MNuiraI2bJpA1Rv5OHQqp2PJGSftVXyRHUDnY9QWnGDzpusGZNdFuvdd%2B35DMx51EIUjdMc4kJAXt6qMh2qoha7NaAqd43gxIiNu9bzTmHRzmQgpCc8DfbPlf%2FmnDNe7C4FDJFU5yLxUyD2H%2FLL38gWYyQq5O6FHPMCzLZCUKP1BALHtdmolzgPoZGHbZjCoz%2BgFyZaB%2FXu%2FMNrIP1ZD7%2BEQ1sEu%2BL6YXjE8ZMmAA3h50sDnaUj9pP0V7nkyqN%2F71uVK0K3Srz89K2G5ItuN5n7dFQx3q29kqRH3wxa6rsb9Q%2BeM4ZwkZtt8xNxHaXBmFDDQ0kJX%2BwSuwliZjEhKcnr1Dl8%2BikLByodFsJyC%2BQrGpWToM4oLt654ZAt1AMv4kIEMw3YzhmqB%2Bzf8WzmQD110HpqonXGmIWJi69XL6odKRb4FeQq0Cq4X9nX%2FWIu2nOxZN2Se5pyy26kiqaTQA5gyuS%2B7NBwcHxAQjMDSZLga%2BAF6cYMKnxh8MGOqUB%2FrSs46QFqw60m1LCIEol%2B%2FEV4E1uhKKEp4Xb7KDI8%2F5e9DcWvT0bGKmbcVhTTRFQMojwKqWdNqgW%2FUJcT9qAk6mm1tBKAUZgXiRb4YbduL4P3oDatLe8WYHNHIZZtiQOVhi0HuIq8J8LzrQQ8l8A8dkpr7IINZFO0r4Wv3R6wDgHYsFuC5i6mTUNpseeGJy1f4nqo3UhlB4mvgho1ITWn2gl9cgK&X-Amz-Signature=22602d72145351271327da48781c015948d9868e0e376ca92147d2578ab098bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKX6536%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qYm6aUiXv05SCIURdXcejd3wZbEffaO87wL6KLkYVgIgaX2fq3IC0SHEbI%2BLN%2F%2Bmtt%2FVCTsIz5WWj%2BYLpaX5TAAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe3Et2CedYNK6rTwCrcA9pId2kcHQoreOZumvJ0XFf9%2FcwKUoC%2BTqQ%2BzucDdqPoDB6T4EILlBbkfj0m7dR3wD%2BiCetswy1AWOcBGdghGd3t5PCNGZu3uNu7NiDF7ho2zSRNhawQM8mz5Ha%2FFNyxJVKQ4FnyA6MNuiraI2bJpA1Rv5OHQqp2PJGSftVXyRHUDnY9QWnGDzpusGZNdFuvdd%2B35DMx51EIUjdMc4kJAXt6qMh2qoha7NaAqd43gxIiNu9bzTmHRzmQgpCc8DfbPlf%2FmnDNe7C4FDJFU5yLxUyD2H%2FLL38gWYyQq5O6FHPMCzLZCUKP1BALHtdmolzgPoZGHbZjCoz%2BgFyZaB%2FXu%2FMNrIP1ZD7%2BEQ1sEu%2BL6YXjE8ZMmAA3h50sDnaUj9pP0V7nkyqN%2F71uVK0K3Srz89K2G5ItuN5n7dFQx3q29kqRH3wxa6rsb9Q%2BeM4ZwkZtt8xNxHaXBmFDDQ0kJX%2BwSuwliZjEhKcnr1Dl8%2BikLByodFsJyC%2BQrGpWToM4oLt654ZAt1AMv4kIEMw3YzhmqB%2Bzf8WzmQD110HpqonXGmIWJi69XL6odKRb4FeQq0Cq4X9nX%2FWIu2nOxZN2Se5pyy26kiqaTQA5gyuS%2B7NBwcHxAQjMDSZLga%2BAF6cYMKnxh8MGOqUB%2FrSs46QFqw60m1LCIEol%2B%2FEV4E1uhKKEp4Xb7KDI8%2F5e9DcWvT0bGKmbcVhTTRFQMojwKqWdNqgW%2FUJcT9qAk6mm1tBKAUZgXiRb4YbduL4P3oDatLe8WYHNHIZZtiQOVhi0HuIq8J8LzrQQ8l8A8dkpr7IINZFO0r4Wv3R6wDgHYsFuC5i6mTUNpseeGJy1f4nqo3UhlB4mvgho1ITWn2gl9cgK&X-Amz-Signature=5f491c55a34e906df0f1eea41979f65ca9d81c3d991ad0e6bec6cc42819f8e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKX6536%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qYm6aUiXv05SCIURdXcejd3wZbEffaO87wL6KLkYVgIgaX2fq3IC0SHEbI%2BLN%2F%2Bmtt%2FVCTsIz5WWj%2BYLpaX5TAAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe3Et2CedYNK6rTwCrcA9pId2kcHQoreOZumvJ0XFf9%2FcwKUoC%2BTqQ%2BzucDdqPoDB6T4EILlBbkfj0m7dR3wD%2BiCetswy1AWOcBGdghGd3t5PCNGZu3uNu7NiDF7ho2zSRNhawQM8mz5Ha%2FFNyxJVKQ4FnyA6MNuiraI2bJpA1Rv5OHQqp2PJGSftVXyRHUDnY9QWnGDzpusGZNdFuvdd%2B35DMx51EIUjdMc4kJAXt6qMh2qoha7NaAqd43gxIiNu9bzTmHRzmQgpCc8DfbPlf%2FmnDNe7C4FDJFU5yLxUyD2H%2FLL38gWYyQq5O6FHPMCzLZCUKP1BALHtdmolzgPoZGHbZjCoz%2BgFyZaB%2FXu%2FMNrIP1ZD7%2BEQ1sEu%2BL6YXjE8ZMmAA3h50sDnaUj9pP0V7nkyqN%2F71uVK0K3Srz89K2G5ItuN5n7dFQx3q29kqRH3wxa6rsb9Q%2BeM4ZwkZtt8xNxHaXBmFDDQ0kJX%2BwSuwliZjEhKcnr1Dl8%2BikLByodFsJyC%2BQrGpWToM4oLt654ZAt1AMv4kIEMw3YzhmqB%2Bzf8WzmQD110HpqonXGmIWJi69XL6odKRb4FeQq0Cq4X9nX%2FWIu2nOxZN2Se5pyy26kiqaTQA5gyuS%2B7NBwcHxAQjMDSZLga%2BAF6cYMKnxh8MGOqUB%2FrSs46QFqw60m1LCIEol%2B%2FEV4E1uhKKEp4Xb7KDI8%2F5e9DcWvT0bGKmbcVhTTRFQMojwKqWdNqgW%2FUJcT9qAk6mm1tBKAUZgXiRb4YbduL4P3oDatLe8WYHNHIZZtiQOVhi0HuIq8J8LzrQQ8l8A8dkpr7IINZFO0r4Wv3R6wDgHYsFuC5i6mTUNpseeGJy1f4nqo3UhlB4mvgho1ITWn2gl9cgK&X-Amz-Signature=0811558f62635c8cb65290b51eeae56a5fb1026b649db7799ae832eb98425184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKX6536%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qYm6aUiXv05SCIURdXcejd3wZbEffaO87wL6KLkYVgIgaX2fq3IC0SHEbI%2BLN%2F%2Bmtt%2FVCTsIz5WWj%2BYLpaX5TAAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe3Et2CedYNK6rTwCrcA9pId2kcHQoreOZumvJ0XFf9%2FcwKUoC%2BTqQ%2BzucDdqPoDB6T4EILlBbkfj0m7dR3wD%2BiCetswy1AWOcBGdghGd3t5PCNGZu3uNu7NiDF7ho2zSRNhawQM8mz5Ha%2FFNyxJVKQ4FnyA6MNuiraI2bJpA1Rv5OHQqp2PJGSftVXyRHUDnY9QWnGDzpusGZNdFuvdd%2B35DMx51EIUjdMc4kJAXt6qMh2qoha7NaAqd43gxIiNu9bzTmHRzmQgpCc8DfbPlf%2FmnDNe7C4FDJFU5yLxUyD2H%2FLL38gWYyQq5O6FHPMCzLZCUKP1BALHtdmolzgPoZGHbZjCoz%2BgFyZaB%2FXu%2FMNrIP1ZD7%2BEQ1sEu%2BL6YXjE8ZMmAA3h50sDnaUj9pP0V7nkyqN%2F71uVK0K3Srz89K2G5ItuN5n7dFQx3q29kqRH3wxa6rsb9Q%2BeM4ZwkZtt8xNxHaXBmFDDQ0kJX%2BwSuwliZjEhKcnr1Dl8%2BikLByodFsJyC%2BQrGpWToM4oLt654ZAt1AMv4kIEMw3YzhmqB%2Bzf8WzmQD110HpqonXGmIWJi69XL6odKRb4FeQq0Cq4X9nX%2FWIu2nOxZN2Se5pyy26kiqaTQA5gyuS%2B7NBwcHxAQjMDSZLga%2BAF6cYMKnxh8MGOqUB%2FrSs46QFqw60m1LCIEol%2B%2FEV4E1uhKKEp4Xb7KDI8%2F5e9DcWvT0bGKmbcVhTTRFQMojwKqWdNqgW%2FUJcT9qAk6mm1tBKAUZgXiRb4YbduL4P3oDatLe8WYHNHIZZtiQOVhi0HuIq8J8LzrQQ8l8A8dkpr7IINZFO0r4Wv3R6wDgHYsFuC5i6mTUNpseeGJy1f4nqo3UhlB4mvgho1ITWn2gl9cgK&X-Amz-Signature=a2931aa0158e154ce6a0dbe8eec8d6f783ee6865401c99185011559e22c6f3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKX6536%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9qYm6aUiXv05SCIURdXcejd3wZbEffaO87wL6KLkYVgIgaX2fq3IC0SHEbI%2BLN%2F%2Bmtt%2FVCTsIz5WWj%2BYLpaX5TAAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe3Et2CedYNK6rTwCrcA9pId2kcHQoreOZumvJ0XFf9%2FcwKUoC%2BTqQ%2BzucDdqPoDB6T4EILlBbkfj0m7dR3wD%2BiCetswy1AWOcBGdghGd3t5PCNGZu3uNu7NiDF7ho2zSRNhawQM8mz5Ha%2FFNyxJVKQ4FnyA6MNuiraI2bJpA1Rv5OHQqp2PJGSftVXyRHUDnY9QWnGDzpusGZNdFuvdd%2B35DMx51EIUjdMc4kJAXt6qMh2qoha7NaAqd43gxIiNu9bzTmHRzmQgpCc8DfbPlf%2FmnDNe7C4FDJFU5yLxUyD2H%2FLL38gWYyQq5O6FHPMCzLZCUKP1BALHtdmolzgPoZGHbZjCoz%2BgFyZaB%2FXu%2FMNrIP1ZD7%2BEQ1sEu%2BL6YXjE8ZMmAA3h50sDnaUj9pP0V7nkyqN%2F71uVK0K3Srz89K2G5ItuN5n7dFQx3q29kqRH3wxa6rsb9Q%2BeM4ZwkZtt8xNxHaXBmFDDQ0kJX%2BwSuwliZjEhKcnr1Dl8%2BikLByodFsJyC%2BQrGpWToM4oLt654ZAt1AMv4kIEMw3YzhmqB%2Bzf8WzmQD110HpqonXGmIWJi69XL6odKRb4FeQq0Cq4X9nX%2FWIu2nOxZN2Se5pyy26kiqaTQA5gyuS%2B7NBwcHxAQjMDSZLga%2BAF6cYMKnxh8MGOqUB%2FrSs46QFqw60m1LCIEol%2B%2FEV4E1uhKKEp4Xb7KDI8%2F5e9DcWvT0bGKmbcVhTTRFQMojwKqWdNqgW%2FUJcT9qAk6mm1tBKAUZgXiRb4YbduL4P3oDatLe8WYHNHIZZtiQOVhi0HuIq8J8LzrQQ8l8A8dkpr7IINZFO0r4Wv3R6wDgHYsFuC5i6mTUNpseeGJy1f4nqo3UhlB4mvgho1ITWn2gl9cgK&X-Amz-Signature=893471fecbba4b2caf078b16b1f8c2d7c68246f102f36a37ca9f2b0d52d774cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
