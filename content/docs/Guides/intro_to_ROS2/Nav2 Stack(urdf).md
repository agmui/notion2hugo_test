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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7URMLIZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6La01i5UdkgGzJt%2BDjb5iwyOBPDbCbN98rd73H2UOAIhAJpwQ%2BcyFTxrDASRG%2FmFJilbARnIxgqnsLYJH92JbD9oKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN5hPbKwdJamI5I4q3ANy%2FRQ9i%2BCmrCgFjgoUYSOSthPO%2BZmi4A9YzC1WsXpOoAoAnzclqsLca%2BYKac%2BG73Ba%2F4eWp4U7QZYE3yv9tIZDqIeEM3aY9DqvnDO7PXwg5qk5dgqP6SQDj7iTvsQMiBcUR%2Fq%2F3OT4g%2FQGuZhLIr6d8oupx%2Fqi7FTJdzamThvUwX1jTX5bVGDfPo%2Boci0jZCQOxftrRYWarqO21jgoh8dXdPS9pEs%2BcCPobWUhhjcpL7WP1S1isbtjVsZh5p6DmL0Mkzb6%2BwlUsb2NUngpmWNFlanTfGFxPGhk%2BvkCZqH7gWBFzz%2BzxxqZCOSb9TkE%2FMiFiwgjGgkZv3vgJ0dE6eA10lBD67AApWwUedPZmyeoq61oXC0vr2Q%2FLRjRgiOhI9CTjNHxa0TfHhrrsGuoZ%2Fj8q%2BuQ%2BUjLM4wbGFFCWReFXx6x%2B%2BiVcRCnQYPEbNRmeyUeRLS4V%2FFP9LQ3CtlT5ADvswg7IAYqRtzwJhNmTb2KBRPp%2FTWTRxG6eDFhkPlWUprnBHvBS055FLjoOVk9gyzNgJLoW12jP8hq%2BAxOJ%2BRt2IbY6jyZLvWJNsDYXwHL60MKsBL9kG2J7u2D5gbOfRpVHckqBSpye9RQ2Qnbij0J9RGzRPisTCDesJmNuTCJ%2FbPDBjqkAYmSippoOJrcN0Nqrlg8KaK0xVLeM14b0PBfiKeY8XW5oPmehXkfs4kWG%2FhjayXCVaLiqQDU%2B611qdMuNQXZ6w1JSOql1bv%2BiFYyFcGJXQwKVGSHMUnXbZiGA%2FVAs9ym2rVu0k3shVdc2W4EB69Yd2SmmazyfrcjMmnMhLOY9jEmtHydqNf7XsSgIp8fqUjkbr19GATF4uGlacL36EFU7jpOQq3j&X-Amz-Signature=d04bf9580a69fe802c185859eb5cb42b34fe33906c2cd4391a705d36e13685c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7URMLIZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6La01i5UdkgGzJt%2BDjb5iwyOBPDbCbN98rd73H2UOAIhAJpwQ%2BcyFTxrDASRG%2FmFJilbARnIxgqnsLYJH92JbD9oKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN5hPbKwdJamI5I4q3ANy%2FRQ9i%2BCmrCgFjgoUYSOSthPO%2BZmi4A9YzC1WsXpOoAoAnzclqsLca%2BYKac%2BG73Ba%2F4eWp4U7QZYE3yv9tIZDqIeEM3aY9DqvnDO7PXwg5qk5dgqP6SQDj7iTvsQMiBcUR%2Fq%2F3OT4g%2FQGuZhLIr6d8oupx%2Fqi7FTJdzamThvUwX1jTX5bVGDfPo%2Boci0jZCQOxftrRYWarqO21jgoh8dXdPS9pEs%2BcCPobWUhhjcpL7WP1S1isbtjVsZh5p6DmL0Mkzb6%2BwlUsb2NUngpmWNFlanTfGFxPGhk%2BvkCZqH7gWBFzz%2BzxxqZCOSb9TkE%2FMiFiwgjGgkZv3vgJ0dE6eA10lBD67AApWwUedPZmyeoq61oXC0vr2Q%2FLRjRgiOhI9CTjNHxa0TfHhrrsGuoZ%2Fj8q%2BuQ%2BUjLM4wbGFFCWReFXx6x%2B%2BiVcRCnQYPEbNRmeyUeRLS4V%2FFP9LQ3CtlT5ADvswg7IAYqRtzwJhNmTb2KBRPp%2FTWTRxG6eDFhkPlWUprnBHvBS055FLjoOVk9gyzNgJLoW12jP8hq%2BAxOJ%2BRt2IbY6jyZLvWJNsDYXwHL60MKsBL9kG2J7u2D5gbOfRpVHckqBSpye9RQ2Qnbij0J9RGzRPisTCDesJmNuTCJ%2FbPDBjqkAYmSippoOJrcN0Nqrlg8KaK0xVLeM14b0PBfiKeY8XW5oPmehXkfs4kWG%2FhjayXCVaLiqQDU%2B611qdMuNQXZ6w1JSOql1bv%2BiFYyFcGJXQwKVGSHMUnXbZiGA%2FVAs9ym2rVu0k3shVdc2W4EB69Yd2SmmazyfrcjMmnMhLOY9jEmtHydqNf7XsSgIp8fqUjkbr19GATF4uGlacL36EFU7jpOQq3j&X-Amz-Signature=79c959397031b21fcc68ec036cc8ac926cc145c2d12784c8994c9996d8667cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7URMLIZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6La01i5UdkgGzJt%2BDjb5iwyOBPDbCbN98rd73H2UOAIhAJpwQ%2BcyFTxrDASRG%2FmFJilbARnIxgqnsLYJH92JbD9oKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN5hPbKwdJamI5I4q3ANy%2FRQ9i%2BCmrCgFjgoUYSOSthPO%2BZmi4A9YzC1WsXpOoAoAnzclqsLca%2BYKac%2BG73Ba%2F4eWp4U7QZYE3yv9tIZDqIeEM3aY9DqvnDO7PXwg5qk5dgqP6SQDj7iTvsQMiBcUR%2Fq%2F3OT4g%2FQGuZhLIr6d8oupx%2Fqi7FTJdzamThvUwX1jTX5bVGDfPo%2Boci0jZCQOxftrRYWarqO21jgoh8dXdPS9pEs%2BcCPobWUhhjcpL7WP1S1isbtjVsZh5p6DmL0Mkzb6%2BwlUsb2NUngpmWNFlanTfGFxPGhk%2BvkCZqH7gWBFzz%2BzxxqZCOSb9TkE%2FMiFiwgjGgkZv3vgJ0dE6eA10lBD67AApWwUedPZmyeoq61oXC0vr2Q%2FLRjRgiOhI9CTjNHxa0TfHhrrsGuoZ%2Fj8q%2BuQ%2BUjLM4wbGFFCWReFXx6x%2B%2BiVcRCnQYPEbNRmeyUeRLS4V%2FFP9LQ3CtlT5ADvswg7IAYqRtzwJhNmTb2KBRPp%2FTWTRxG6eDFhkPlWUprnBHvBS055FLjoOVk9gyzNgJLoW12jP8hq%2BAxOJ%2BRt2IbY6jyZLvWJNsDYXwHL60MKsBL9kG2J7u2D5gbOfRpVHckqBSpye9RQ2Qnbij0J9RGzRPisTCDesJmNuTCJ%2FbPDBjqkAYmSippoOJrcN0Nqrlg8KaK0xVLeM14b0PBfiKeY8XW5oPmehXkfs4kWG%2FhjayXCVaLiqQDU%2B611qdMuNQXZ6w1JSOql1bv%2BiFYyFcGJXQwKVGSHMUnXbZiGA%2FVAs9ym2rVu0k3shVdc2W4EB69Yd2SmmazyfrcjMmnMhLOY9jEmtHydqNf7XsSgIp8fqUjkbr19GATF4uGlacL36EFU7jpOQq3j&X-Amz-Signature=ca1b6731dd913f88e6de8973e583875f3358e855c2bf5ff41e08e63349613b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7URMLIZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6La01i5UdkgGzJt%2BDjb5iwyOBPDbCbN98rd73H2UOAIhAJpwQ%2BcyFTxrDASRG%2FmFJilbARnIxgqnsLYJH92JbD9oKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN5hPbKwdJamI5I4q3ANy%2FRQ9i%2BCmrCgFjgoUYSOSthPO%2BZmi4A9YzC1WsXpOoAoAnzclqsLca%2BYKac%2BG73Ba%2F4eWp4U7QZYE3yv9tIZDqIeEM3aY9DqvnDO7PXwg5qk5dgqP6SQDj7iTvsQMiBcUR%2Fq%2F3OT4g%2FQGuZhLIr6d8oupx%2Fqi7FTJdzamThvUwX1jTX5bVGDfPo%2Boci0jZCQOxftrRYWarqO21jgoh8dXdPS9pEs%2BcCPobWUhhjcpL7WP1S1isbtjVsZh5p6DmL0Mkzb6%2BwlUsb2NUngpmWNFlanTfGFxPGhk%2BvkCZqH7gWBFzz%2BzxxqZCOSb9TkE%2FMiFiwgjGgkZv3vgJ0dE6eA10lBD67AApWwUedPZmyeoq61oXC0vr2Q%2FLRjRgiOhI9CTjNHxa0TfHhrrsGuoZ%2Fj8q%2BuQ%2BUjLM4wbGFFCWReFXx6x%2B%2BiVcRCnQYPEbNRmeyUeRLS4V%2FFP9LQ3CtlT5ADvswg7IAYqRtzwJhNmTb2KBRPp%2FTWTRxG6eDFhkPlWUprnBHvBS055FLjoOVk9gyzNgJLoW12jP8hq%2BAxOJ%2BRt2IbY6jyZLvWJNsDYXwHL60MKsBL9kG2J7u2D5gbOfRpVHckqBSpye9RQ2Qnbij0J9RGzRPisTCDesJmNuTCJ%2FbPDBjqkAYmSippoOJrcN0Nqrlg8KaK0xVLeM14b0PBfiKeY8XW5oPmehXkfs4kWG%2FhjayXCVaLiqQDU%2B611qdMuNQXZ6w1JSOql1bv%2BiFYyFcGJXQwKVGSHMUnXbZiGA%2FVAs9ym2rVu0k3shVdc2W4EB69Yd2SmmazyfrcjMmnMhLOY9jEmtHydqNf7XsSgIp8fqUjkbr19GATF4uGlacL36EFU7jpOQq3j&X-Amz-Signature=0123e7ab7573bfc2a7e59d4b32a2c1b5258c1a46c4c6546d4427bb84760aecfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7URMLIZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6La01i5UdkgGzJt%2BDjb5iwyOBPDbCbN98rd73H2UOAIhAJpwQ%2BcyFTxrDASRG%2FmFJilbARnIxgqnsLYJH92JbD9oKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN5hPbKwdJamI5I4q3ANy%2FRQ9i%2BCmrCgFjgoUYSOSthPO%2BZmi4A9YzC1WsXpOoAoAnzclqsLca%2BYKac%2BG73Ba%2F4eWp4U7QZYE3yv9tIZDqIeEM3aY9DqvnDO7PXwg5qk5dgqP6SQDj7iTvsQMiBcUR%2Fq%2F3OT4g%2FQGuZhLIr6d8oupx%2Fqi7FTJdzamThvUwX1jTX5bVGDfPo%2Boci0jZCQOxftrRYWarqO21jgoh8dXdPS9pEs%2BcCPobWUhhjcpL7WP1S1isbtjVsZh5p6DmL0Mkzb6%2BwlUsb2NUngpmWNFlanTfGFxPGhk%2BvkCZqH7gWBFzz%2BzxxqZCOSb9TkE%2FMiFiwgjGgkZv3vgJ0dE6eA10lBD67AApWwUedPZmyeoq61oXC0vr2Q%2FLRjRgiOhI9CTjNHxa0TfHhrrsGuoZ%2Fj8q%2BuQ%2BUjLM4wbGFFCWReFXx6x%2B%2BiVcRCnQYPEbNRmeyUeRLS4V%2FFP9LQ3CtlT5ADvswg7IAYqRtzwJhNmTb2KBRPp%2FTWTRxG6eDFhkPlWUprnBHvBS055FLjoOVk9gyzNgJLoW12jP8hq%2BAxOJ%2BRt2IbY6jyZLvWJNsDYXwHL60MKsBL9kG2J7u2D5gbOfRpVHckqBSpye9RQ2Qnbij0J9RGzRPisTCDesJmNuTCJ%2FbPDBjqkAYmSippoOJrcN0Nqrlg8KaK0xVLeM14b0PBfiKeY8XW5oPmehXkfs4kWG%2FhjayXCVaLiqQDU%2B611qdMuNQXZ6w1JSOql1bv%2BiFYyFcGJXQwKVGSHMUnXbZiGA%2FVAs9ym2rVu0k3shVdc2W4EB69Yd2SmmazyfrcjMmnMhLOY9jEmtHydqNf7XsSgIp8fqUjkbr19GATF4uGlacL36EFU7jpOQq3j&X-Amz-Signature=0daef56c75d6e4e55ff3f74c698e9002a35a95970286517f5073ca4f119c0645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7URMLIZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6La01i5UdkgGzJt%2BDjb5iwyOBPDbCbN98rd73H2UOAIhAJpwQ%2BcyFTxrDASRG%2FmFJilbARnIxgqnsLYJH92JbD9oKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfN5hPbKwdJamI5I4q3ANy%2FRQ9i%2BCmrCgFjgoUYSOSthPO%2BZmi4A9YzC1WsXpOoAoAnzclqsLca%2BYKac%2BG73Ba%2F4eWp4U7QZYE3yv9tIZDqIeEM3aY9DqvnDO7PXwg5qk5dgqP6SQDj7iTvsQMiBcUR%2Fq%2F3OT4g%2FQGuZhLIr6d8oupx%2Fqi7FTJdzamThvUwX1jTX5bVGDfPo%2Boci0jZCQOxftrRYWarqO21jgoh8dXdPS9pEs%2BcCPobWUhhjcpL7WP1S1isbtjVsZh5p6DmL0Mkzb6%2BwlUsb2NUngpmWNFlanTfGFxPGhk%2BvkCZqH7gWBFzz%2BzxxqZCOSb9TkE%2FMiFiwgjGgkZv3vgJ0dE6eA10lBD67AApWwUedPZmyeoq61oXC0vr2Q%2FLRjRgiOhI9CTjNHxa0TfHhrrsGuoZ%2Fj8q%2BuQ%2BUjLM4wbGFFCWReFXx6x%2B%2BiVcRCnQYPEbNRmeyUeRLS4V%2FFP9LQ3CtlT5ADvswg7IAYqRtzwJhNmTb2KBRPp%2FTWTRxG6eDFhkPlWUprnBHvBS055FLjoOVk9gyzNgJLoW12jP8hq%2BAxOJ%2BRt2IbY6jyZLvWJNsDYXwHL60MKsBL9kG2J7u2D5gbOfRpVHckqBSpye9RQ2Qnbij0J9RGzRPisTCDesJmNuTCJ%2FbPDBjqkAYmSippoOJrcN0Nqrlg8KaK0xVLeM14b0PBfiKeY8XW5oPmehXkfs4kWG%2FhjayXCVaLiqQDU%2B611qdMuNQXZ6w1JSOql1bv%2BiFYyFcGJXQwKVGSHMUnXbZiGA%2FVAs9ym2rVu0k3shVdc2W4EB69Yd2SmmazyfrcjMmnMhLOY9jEmtHydqNf7XsSgIp8fqUjkbr19GATF4uGlacL36EFU7jpOQq3j&X-Amz-Signature=772a5a7a6615f9d1e0a299745ef6208625abd4beb21d30a286c8b286718f2fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
