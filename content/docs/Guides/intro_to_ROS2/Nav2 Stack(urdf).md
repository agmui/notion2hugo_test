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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVU5XIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCisVZD5EkCk4qjSRCGTXGnGuPaAy0BTub18iVj2mCbdQIhAPe66fEwKRhL%2FugfWwYhRxVJV4TzbseU2Jk%2FTIHgW8BcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz7HZUcNWLpil9Hosq3AMSbOX%2BysFAv7o%2BiwcDd4Z9n%2FLFmGrxRXLc4nikMlu3XSp9iVoXh5cucJKrQ8sMUZiyXJ5SbHAQENr7DwhBuJ1rJ40PZ6UTF4ZaM7isiSkqc44e10xlJ%2BeP2xNngXW8RmyhWUiXpJIM2%2BOtwYGrL5qEGd8cHaN6z9LuFHOyFBI8FFAyEHodd6qZIWQdK6rUkqjHQNNLAzHYBdDNHapw4Fe6e58jTGp0ZBI49FtebXGGyNHtXzdJw%2B9RGk5QOZmaH7kd%2Fq1XuTCDG8uIXnGca2EXaNl7WGyQjF7xaUL%2FGY1YFu%2FLJiagTi36tCHllpKxTpSfDpF8%2Fp4DgtvKjMqtarHbzIDhAEE4oHW4sp0YEAV2pVnbf2qTXN0tKMvtAPxjuYgaEGGy8yBL27PNhd4%2B9oNqgwBRipbcjSrUEMS2M0zaMKOi6z3Z1KhnQxnwf%2FTp8rThS%2FH%2BD7vF4w09qbaMmdeQ1I7N%2FVn4UyGzvSimSKdjlpUsWSwJ3IU3uzVkX8tXs2SIhLDS9x1fBwEczl%2BPjZVIyMmiDuP7VLbeymHUSXqldeDEQoG2MdpGTEP0z28sjNqTCXGQEEDUu%2BTfB8IgJ7Lnr5c0MmJRqQwbSPO4V3fWr8g6rXYR3g6oOoxMvjCm%2B7i%2BBjqkAeST3AvwVKxTk7nrKckyjAvzq8EziBXK8TgAWdDXy3NKJNev%2FJkNlXnE%2BhxDb%2BCVcd0sRqc5PeNcQfB7P6Le%2B9XKg8ghBwNDAjwwDFIRNT5KJ6UDaLJmz9OAYc99BwIbpS8yyJWa2NM30394FKs20KANFJMB6psMdnztlQojfRax6FDygf3hibN0IcX2q4EeHX1wSW8zsydK5v4MkKTCqFzlBSmX&X-Amz-Signature=85951a0609f57eed9d42c622bf944e482ab132d8d50b76f49280976529f3cc92&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVU5XIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCisVZD5EkCk4qjSRCGTXGnGuPaAy0BTub18iVj2mCbdQIhAPe66fEwKRhL%2FugfWwYhRxVJV4TzbseU2Jk%2FTIHgW8BcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz7HZUcNWLpil9Hosq3AMSbOX%2BysFAv7o%2BiwcDd4Z9n%2FLFmGrxRXLc4nikMlu3XSp9iVoXh5cucJKrQ8sMUZiyXJ5SbHAQENr7DwhBuJ1rJ40PZ6UTF4ZaM7isiSkqc44e10xlJ%2BeP2xNngXW8RmyhWUiXpJIM2%2BOtwYGrL5qEGd8cHaN6z9LuFHOyFBI8FFAyEHodd6qZIWQdK6rUkqjHQNNLAzHYBdDNHapw4Fe6e58jTGp0ZBI49FtebXGGyNHtXzdJw%2B9RGk5QOZmaH7kd%2Fq1XuTCDG8uIXnGca2EXaNl7WGyQjF7xaUL%2FGY1YFu%2FLJiagTi36tCHllpKxTpSfDpF8%2Fp4DgtvKjMqtarHbzIDhAEE4oHW4sp0YEAV2pVnbf2qTXN0tKMvtAPxjuYgaEGGy8yBL27PNhd4%2B9oNqgwBRipbcjSrUEMS2M0zaMKOi6z3Z1KhnQxnwf%2FTp8rThS%2FH%2BD7vF4w09qbaMmdeQ1I7N%2FVn4UyGzvSimSKdjlpUsWSwJ3IU3uzVkX8tXs2SIhLDS9x1fBwEczl%2BPjZVIyMmiDuP7VLbeymHUSXqldeDEQoG2MdpGTEP0z28sjNqTCXGQEEDUu%2BTfB8IgJ7Lnr5c0MmJRqQwbSPO4V3fWr8g6rXYR3g6oOoxMvjCm%2B7i%2BBjqkAeST3AvwVKxTk7nrKckyjAvzq8EziBXK8TgAWdDXy3NKJNev%2FJkNlXnE%2BhxDb%2BCVcd0sRqc5PeNcQfB7P6Le%2B9XKg8ghBwNDAjwwDFIRNT5KJ6UDaLJmz9OAYc99BwIbpS8yyJWa2NM30394FKs20KANFJMB6psMdnztlQojfRax6FDygf3hibN0IcX2q4EeHX1wSW8zsydK5v4MkKTCqFzlBSmX&X-Amz-Signature=f891a1bf3ab59461b2ed1f8bd9cd7004e20e203d351f31425efab4fb8a9d0919&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVU5XIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCisVZD5EkCk4qjSRCGTXGnGuPaAy0BTub18iVj2mCbdQIhAPe66fEwKRhL%2FugfWwYhRxVJV4TzbseU2Jk%2FTIHgW8BcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz7HZUcNWLpil9Hosq3AMSbOX%2BysFAv7o%2BiwcDd4Z9n%2FLFmGrxRXLc4nikMlu3XSp9iVoXh5cucJKrQ8sMUZiyXJ5SbHAQENr7DwhBuJ1rJ40PZ6UTF4ZaM7isiSkqc44e10xlJ%2BeP2xNngXW8RmyhWUiXpJIM2%2BOtwYGrL5qEGd8cHaN6z9LuFHOyFBI8FFAyEHodd6qZIWQdK6rUkqjHQNNLAzHYBdDNHapw4Fe6e58jTGp0ZBI49FtebXGGyNHtXzdJw%2B9RGk5QOZmaH7kd%2Fq1XuTCDG8uIXnGca2EXaNl7WGyQjF7xaUL%2FGY1YFu%2FLJiagTi36tCHllpKxTpSfDpF8%2Fp4DgtvKjMqtarHbzIDhAEE4oHW4sp0YEAV2pVnbf2qTXN0tKMvtAPxjuYgaEGGy8yBL27PNhd4%2B9oNqgwBRipbcjSrUEMS2M0zaMKOi6z3Z1KhnQxnwf%2FTp8rThS%2FH%2BD7vF4w09qbaMmdeQ1I7N%2FVn4UyGzvSimSKdjlpUsWSwJ3IU3uzVkX8tXs2SIhLDS9x1fBwEczl%2BPjZVIyMmiDuP7VLbeymHUSXqldeDEQoG2MdpGTEP0z28sjNqTCXGQEEDUu%2BTfB8IgJ7Lnr5c0MmJRqQwbSPO4V3fWr8g6rXYR3g6oOoxMvjCm%2B7i%2BBjqkAeST3AvwVKxTk7nrKckyjAvzq8EziBXK8TgAWdDXy3NKJNev%2FJkNlXnE%2BhxDb%2BCVcd0sRqc5PeNcQfB7P6Le%2B9XKg8ghBwNDAjwwDFIRNT5KJ6UDaLJmz9OAYc99BwIbpS8yyJWa2NM30394FKs20KANFJMB6psMdnztlQojfRax6FDygf3hibN0IcX2q4EeHX1wSW8zsydK5v4MkKTCqFzlBSmX&X-Amz-Signature=67ff4e42cff213c339e6e874e08faf8f0b8196cbb0537331467ddf8c0f7ffc04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVU5XIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCisVZD5EkCk4qjSRCGTXGnGuPaAy0BTub18iVj2mCbdQIhAPe66fEwKRhL%2FugfWwYhRxVJV4TzbseU2Jk%2FTIHgW8BcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz7HZUcNWLpil9Hosq3AMSbOX%2BysFAv7o%2BiwcDd4Z9n%2FLFmGrxRXLc4nikMlu3XSp9iVoXh5cucJKrQ8sMUZiyXJ5SbHAQENr7DwhBuJ1rJ40PZ6UTF4ZaM7isiSkqc44e10xlJ%2BeP2xNngXW8RmyhWUiXpJIM2%2BOtwYGrL5qEGd8cHaN6z9LuFHOyFBI8FFAyEHodd6qZIWQdK6rUkqjHQNNLAzHYBdDNHapw4Fe6e58jTGp0ZBI49FtebXGGyNHtXzdJw%2B9RGk5QOZmaH7kd%2Fq1XuTCDG8uIXnGca2EXaNl7WGyQjF7xaUL%2FGY1YFu%2FLJiagTi36tCHllpKxTpSfDpF8%2Fp4DgtvKjMqtarHbzIDhAEE4oHW4sp0YEAV2pVnbf2qTXN0tKMvtAPxjuYgaEGGy8yBL27PNhd4%2B9oNqgwBRipbcjSrUEMS2M0zaMKOi6z3Z1KhnQxnwf%2FTp8rThS%2FH%2BD7vF4w09qbaMmdeQ1I7N%2FVn4UyGzvSimSKdjlpUsWSwJ3IU3uzVkX8tXs2SIhLDS9x1fBwEczl%2BPjZVIyMmiDuP7VLbeymHUSXqldeDEQoG2MdpGTEP0z28sjNqTCXGQEEDUu%2BTfB8IgJ7Lnr5c0MmJRqQwbSPO4V3fWr8g6rXYR3g6oOoxMvjCm%2B7i%2BBjqkAeST3AvwVKxTk7nrKckyjAvzq8EziBXK8TgAWdDXy3NKJNev%2FJkNlXnE%2BhxDb%2BCVcd0sRqc5PeNcQfB7P6Le%2B9XKg8ghBwNDAjwwDFIRNT5KJ6UDaLJmz9OAYc99BwIbpS8yyJWa2NM30394FKs20KANFJMB6psMdnztlQojfRax6FDygf3hibN0IcX2q4EeHX1wSW8zsydK5v4MkKTCqFzlBSmX&X-Amz-Signature=f156951ebce4350ed8bb7b80f66a5b99846a75cab7f7f286c4c914627f9adcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVU5XIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCisVZD5EkCk4qjSRCGTXGnGuPaAy0BTub18iVj2mCbdQIhAPe66fEwKRhL%2FugfWwYhRxVJV4TzbseU2Jk%2FTIHgW8BcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz7HZUcNWLpil9Hosq3AMSbOX%2BysFAv7o%2BiwcDd4Z9n%2FLFmGrxRXLc4nikMlu3XSp9iVoXh5cucJKrQ8sMUZiyXJ5SbHAQENr7DwhBuJ1rJ40PZ6UTF4ZaM7isiSkqc44e10xlJ%2BeP2xNngXW8RmyhWUiXpJIM2%2BOtwYGrL5qEGd8cHaN6z9LuFHOyFBI8FFAyEHodd6qZIWQdK6rUkqjHQNNLAzHYBdDNHapw4Fe6e58jTGp0ZBI49FtebXGGyNHtXzdJw%2B9RGk5QOZmaH7kd%2Fq1XuTCDG8uIXnGca2EXaNl7WGyQjF7xaUL%2FGY1YFu%2FLJiagTi36tCHllpKxTpSfDpF8%2Fp4DgtvKjMqtarHbzIDhAEE4oHW4sp0YEAV2pVnbf2qTXN0tKMvtAPxjuYgaEGGy8yBL27PNhd4%2B9oNqgwBRipbcjSrUEMS2M0zaMKOi6z3Z1KhnQxnwf%2FTp8rThS%2FH%2BD7vF4w09qbaMmdeQ1I7N%2FVn4UyGzvSimSKdjlpUsWSwJ3IU3uzVkX8tXs2SIhLDS9x1fBwEczl%2BPjZVIyMmiDuP7VLbeymHUSXqldeDEQoG2MdpGTEP0z28sjNqTCXGQEEDUu%2BTfB8IgJ7Lnr5c0MmJRqQwbSPO4V3fWr8g6rXYR3g6oOoxMvjCm%2B7i%2BBjqkAeST3AvwVKxTk7nrKckyjAvzq8EziBXK8TgAWdDXy3NKJNev%2FJkNlXnE%2BhxDb%2BCVcd0sRqc5PeNcQfB7P6Le%2B9XKg8ghBwNDAjwwDFIRNT5KJ6UDaLJmz9OAYc99BwIbpS8yyJWa2NM30394FKs20KANFJMB6psMdnztlQojfRax6FDygf3hibN0IcX2q4EeHX1wSW8zsydK5v4MkKTCqFzlBSmX&X-Amz-Signature=c2eba4df9617d4cfe1c1c3ce5841b19aeaa712d3035a4567b57ff94e6c0cc051&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVU5XIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCisVZD5EkCk4qjSRCGTXGnGuPaAy0BTub18iVj2mCbdQIhAPe66fEwKRhL%2FugfWwYhRxVJV4TzbseU2Jk%2FTIHgW8BcKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz7HZUcNWLpil9Hosq3AMSbOX%2BysFAv7o%2BiwcDd4Z9n%2FLFmGrxRXLc4nikMlu3XSp9iVoXh5cucJKrQ8sMUZiyXJ5SbHAQENr7DwhBuJ1rJ40PZ6UTF4ZaM7isiSkqc44e10xlJ%2BeP2xNngXW8RmyhWUiXpJIM2%2BOtwYGrL5qEGd8cHaN6z9LuFHOyFBI8FFAyEHodd6qZIWQdK6rUkqjHQNNLAzHYBdDNHapw4Fe6e58jTGp0ZBI49FtebXGGyNHtXzdJw%2B9RGk5QOZmaH7kd%2Fq1XuTCDG8uIXnGca2EXaNl7WGyQjF7xaUL%2FGY1YFu%2FLJiagTi36tCHllpKxTpSfDpF8%2Fp4DgtvKjMqtarHbzIDhAEE4oHW4sp0YEAV2pVnbf2qTXN0tKMvtAPxjuYgaEGGy8yBL27PNhd4%2B9oNqgwBRipbcjSrUEMS2M0zaMKOi6z3Z1KhnQxnwf%2FTp8rThS%2FH%2BD7vF4w09qbaMmdeQ1I7N%2FVn4UyGzvSimSKdjlpUsWSwJ3IU3uzVkX8tXs2SIhLDS9x1fBwEczl%2BPjZVIyMmiDuP7VLbeymHUSXqldeDEQoG2MdpGTEP0z28sjNqTCXGQEEDUu%2BTfB8IgJ7Lnr5c0MmJRqQwbSPO4V3fWr8g6rXYR3g6oOoxMvjCm%2B7i%2BBjqkAeST3AvwVKxTk7nrKckyjAvzq8EziBXK8TgAWdDXy3NKJNev%2FJkNlXnE%2BhxDb%2BCVcd0sRqc5PeNcQfB7P6Le%2B9XKg8ghBwNDAjwwDFIRNT5KJ6UDaLJmz9OAYc99BwIbpS8yyJWa2NM30394FKs20KANFJMB6psMdnztlQojfRax6FDygf3hibN0IcX2q4EeHX1wSW8zsydK5v4MkKTCqFzlBSmX&X-Amz-Signature=99a32f7437cbdc7aa3aa1166d9d384bd0f7579aede8fb721b84c047eb7c63cf4&X-Amz-SignedHeaders=host&x-id=GetObject)
