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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZ7ZVW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKBpvBfxdseqP5OkusqIIkcQ%2B5r3J3d8BlO5uRJZJFzAiEAxUIAQW7OwrS9Cn9lBs7ZREwXQC9jmLWxw7of2mljqK8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOc0%2Fm0m7z4VQ%2F1zuyrcA3p0d%2BejDjDTHN1eZnb1EXQKrfGUpFY5woM3w3P7gHugqpKvfJxs1NYJmvjdvXA8YvhE6q8oVVSkzUJEVXRV20QQRV90Dr%2BWKlzlOxJuDh4AYRk9NIm20Lp2J%2BZ%2FtAKGibRTbua1%2BlLWXBPW5B4eFL66Wt3khjimTlWl4VoN%2FlgL4DVP0n0PmaQt4dEGT%2BeofH33LLyQ1EQ7phJm0Yxn4nC9ACPSeb5c6zf0lDBK0ZR5B5QKLX2jLeQWpT8QZeiuQJ3Vf5lCmfp2QQQ0blm45lxjUgdSDiGbighbxuktKw%2FKkLGKDEaI1bE4Cp244sQKNN16akVYV7n3RKU33GyXrDmw81HlJdTCPQ8Igq8TorzLiuIKrncEv7NQBmKYN%2FQ2rw3uVuhrnyeUGTbDMw9BZ7G99MKlvakwCLLqLagy0Ow1daqB94VLtMUD%2FerOLRJkWJpfDAZVwtecZh6DRqeIUcxdtynHAM5DzTRLUBtEfdzwNKhAmdNzmxlqux2pEHu5XP5%2BBRQ8gTlRIOIJB%2F%2BDLV%2Fo4nFUefkGKjOlO64hAp7rxSdSYAVe4eqWWzyEeBNRu6nUKcAEIeNpp7%2BRtDa0QrsfK%2FgWWaK4u55qch3wCIFUoncoWXUNozNz%2BYJdMPq0kb8GOqUB0WtXTZcxdfEE1Uf8eWXQsE2wAVvT9qSv2yy81tDUUZuJMsqwVM1VLOTguv6g9RnFGqtUrga6AgLdnNES2LZZKAaCRKdFCQ6OqMjvhxjz02Xws1SGqGzQReDIk9OA9qeQl2xPpQ9hcsQlgi6X%2BBF9ntAryd1kTvg18wPKvyH3eSn9jaqrlbxRA9o8xwW%2FURv6RdByvJ%2F%2BuyODNaoFqoZ3CyBN6Jyx&X-Amz-Signature=763018c531a7862231935ef62fdd44fec8382cf574b33c43ef2ebe0932676c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZ7ZVW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKBpvBfxdseqP5OkusqIIkcQ%2B5r3J3d8BlO5uRJZJFzAiEAxUIAQW7OwrS9Cn9lBs7ZREwXQC9jmLWxw7of2mljqK8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOc0%2Fm0m7z4VQ%2F1zuyrcA3p0d%2BejDjDTHN1eZnb1EXQKrfGUpFY5woM3w3P7gHugqpKvfJxs1NYJmvjdvXA8YvhE6q8oVVSkzUJEVXRV20QQRV90Dr%2BWKlzlOxJuDh4AYRk9NIm20Lp2J%2BZ%2FtAKGibRTbua1%2BlLWXBPW5B4eFL66Wt3khjimTlWl4VoN%2FlgL4DVP0n0PmaQt4dEGT%2BeofH33LLyQ1EQ7phJm0Yxn4nC9ACPSeb5c6zf0lDBK0ZR5B5QKLX2jLeQWpT8QZeiuQJ3Vf5lCmfp2QQQ0blm45lxjUgdSDiGbighbxuktKw%2FKkLGKDEaI1bE4Cp244sQKNN16akVYV7n3RKU33GyXrDmw81HlJdTCPQ8Igq8TorzLiuIKrncEv7NQBmKYN%2FQ2rw3uVuhrnyeUGTbDMw9BZ7G99MKlvakwCLLqLagy0Ow1daqB94VLtMUD%2FerOLRJkWJpfDAZVwtecZh6DRqeIUcxdtynHAM5DzTRLUBtEfdzwNKhAmdNzmxlqux2pEHu5XP5%2BBRQ8gTlRIOIJB%2F%2BDLV%2Fo4nFUefkGKjOlO64hAp7rxSdSYAVe4eqWWzyEeBNRu6nUKcAEIeNpp7%2BRtDa0QrsfK%2FgWWaK4u55qch3wCIFUoncoWXUNozNz%2BYJdMPq0kb8GOqUB0WtXTZcxdfEE1Uf8eWXQsE2wAVvT9qSv2yy81tDUUZuJMsqwVM1VLOTguv6g9RnFGqtUrga6AgLdnNES2LZZKAaCRKdFCQ6OqMjvhxjz02Xws1SGqGzQReDIk9OA9qeQl2xPpQ9hcsQlgi6X%2BBF9ntAryd1kTvg18wPKvyH3eSn9jaqrlbxRA9o8xwW%2FURv6RdByvJ%2F%2BuyODNaoFqoZ3CyBN6Jyx&X-Amz-Signature=9510e0ba8bba7b12c2eb5d8c526128a1d0aa17f089763f74fe38f59a56036fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZ7ZVW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKBpvBfxdseqP5OkusqIIkcQ%2B5r3J3d8BlO5uRJZJFzAiEAxUIAQW7OwrS9Cn9lBs7ZREwXQC9jmLWxw7of2mljqK8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOc0%2Fm0m7z4VQ%2F1zuyrcA3p0d%2BejDjDTHN1eZnb1EXQKrfGUpFY5woM3w3P7gHugqpKvfJxs1NYJmvjdvXA8YvhE6q8oVVSkzUJEVXRV20QQRV90Dr%2BWKlzlOxJuDh4AYRk9NIm20Lp2J%2BZ%2FtAKGibRTbua1%2BlLWXBPW5B4eFL66Wt3khjimTlWl4VoN%2FlgL4DVP0n0PmaQt4dEGT%2BeofH33LLyQ1EQ7phJm0Yxn4nC9ACPSeb5c6zf0lDBK0ZR5B5QKLX2jLeQWpT8QZeiuQJ3Vf5lCmfp2QQQ0blm45lxjUgdSDiGbighbxuktKw%2FKkLGKDEaI1bE4Cp244sQKNN16akVYV7n3RKU33GyXrDmw81HlJdTCPQ8Igq8TorzLiuIKrncEv7NQBmKYN%2FQ2rw3uVuhrnyeUGTbDMw9BZ7G99MKlvakwCLLqLagy0Ow1daqB94VLtMUD%2FerOLRJkWJpfDAZVwtecZh6DRqeIUcxdtynHAM5DzTRLUBtEfdzwNKhAmdNzmxlqux2pEHu5XP5%2BBRQ8gTlRIOIJB%2F%2BDLV%2Fo4nFUefkGKjOlO64hAp7rxSdSYAVe4eqWWzyEeBNRu6nUKcAEIeNpp7%2BRtDa0QrsfK%2FgWWaK4u55qch3wCIFUoncoWXUNozNz%2BYJdMPq0kb8GOqUB0WtXTZcxdfEE1Uf8eWXQsE2wAVvT9qSv2yy81tDUUZuJMsqwVM1VLOTguv6g9RnFGqtUrga6AgLdnNES2LZZKAaCRKdFCQ6OqMjvhxjz02Xws1SGqGzQReDIk9OA9qeQl2xPpQ9hcsQlgi6X%2BBF9ntAryd1kTvg18wPKvyH3eSn9jaqrlbxRA9o8xwW%2FURv6RdByvJ%2F%2BuyODNaoFqoZ3CyBN6Jyx&X-Amz-Signature=b00f53e2224a44bd9f1b55d61c6773214833933500e3e480f50f0b65e621defb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZ7ZVW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKBpvBfxdseqP5OkusqIIkcQ%2B5r3J3d8BlO5uRJZJFzAiEAxUIAQW7OwrS9Cn9lBs7ZREwXQC9jmLWxw7of2mljqK8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOc0%2Fm0m7z4VQ%2F1zuyrcA3p0d%2BejDjDTHN1eZnb1EXQKrfGUpFY5woM3w3P7gHugqpKvfJxs1NYJmvjdvXA8YvhE6q8oVVSkzUJEVXRV20QQRV90Dr%2BWKlzlOxJuDh4AYRk9NIm20Lp2J%2BZ%2FtAKGibRTbua1%2BlLWXBPW5B4eFL66Wt3khjimTlWl4VoN%2FlgL4DVP0n0PmaQt4dEGT%2BeofH33LLyQ1EQ7phJm0Yxn4nC9ACPSeb5c6zf0lDBK0ZR5B5QKLX2jLeQWpT8QZeiuQJ3Vf5lCmfp2QQQ0blm45lxjUgdSDiGbighbxuktKw%2FKkLGKDEaI1bE4Cp244sQKNN16akVYV7n3RKU33GyXrDmw81HlJdTCPQ8Igq8TorzLiuIKrncEv7NQBmKYN%2FQ2rw3uVuhrnyeUGTbDMw9BZ7G99MKlvakwCLLqLagy0Ow1daqB94VLtMUD%2FerOLRJkWJpfDAZVwtecZh6DRqeIUcxdtynHAM5DzTRLUBtEfdzwNKhAmdNzmxlqux2pEHu5XP5%2BBRQ8gTlRIOIJB%2F%2BDLV%2Fo4nFUefkGKjOlO64hAp7rxSdSYAVe4eqWWzyEeBNRu6nUKcAEIeNpp7%2BRtDa0QrsfK%2FgWWaK4u55qch3wCIFUoncoWXUNozNz%2BYJdMPq0kb8GOqUB0WtXTZcxdfEE1Uf8eWXQsE2wAVvT9qSv2yy81tDUUZuJMsqwVM1VLOTguv6g9RnFGqtUrga6AgLdnNES2LZZKAaCRKdFCQ6OqMjvhxjz02Xws1SGqGzQReDIk9OA9qeQl2xPpQ9hcsQlgi6X%2BBF9ntAryd1kTvg18wPKvyH3eSn9jaqrlbxRA9o8xwW%2FURv6RdByvJ%2F%2BuyODNaoFqoZ3CyBN6Jyx&X-Amz-Signature=529d116fb6aaabba817af33e802dbe611140e1cd958041c5cc3793bba5bbf4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZ7ZVW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKBpvBfxdseqP5OkusqIIkcQ%2B5r3J3d8BlO5uRJZJFzAiEAxUIAQW7OwrS9Cn9lBs7ZREwXQC9jmLWxw7of2mljqK8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOc0%2Fm0m7z4VQ%2F1zuyrcA3p0d%2BejDjDTHN1eZnb1EXQKrfGUpFY5woM3w3P7gHugqpKvfJxs1NYJmvjdvXA8YvhE6q8oVVSkzUJEVXRV20QQRV90Dr%2BWKlzlOxJuDh4AYRk9NIm20Lp2J%2BZ%2FtAKGibRTbua1%2BlLWXBPW5B4eFL66Wt3khjimTlWl4VoN%2FlgL4DVP0n0PmaQt4dEGT%2BeofH33LLyQ1EQ7phJm0Yxn4nC9ACPSeb5c6zf0lDBK0ZR5B5QKLX2jLeQWpT8QZeiuQJ3Vf5lCmfp2QQQ0blm45lxjUgdSDiGbighbxuktKw%2FKkLGKDEaI1bE4Cp244sQKNN16akVYV7n3RKU33GyXrDmw81HlJdTCPQ8Igq8TorzLiuIKrncEv7NQBmKYN%2FQ2rw3uVuhrnyeUGTbDMw9BZ7G99MKlvakwCLLqLagy0Ow1daqB94VLtMUD%2FerOLRJkWJpfDAZVwtecZh6DRqeIUcxdtynHAM5DzTRLUBtEfdzwNKhAmdNzmxlqux2pEHu5XP5%2BBRQ8gTlRIOIJB%2F%2BDLV%2Fo4nFUefkGKjOlO64hAp7rxSdSYAVe4eqWWzyEeBNRu6nUKcAEIeNpp7%2BRtDa0QrsfK%2FgWWaK4u55qch3wCIFUoncoWXUNozNz%2BYJdMPq0kb8GOqUB0WtXTZcxdfEE1Uf8eWXQsE2wAVvT9qSv2yy81tDUUZuJMsqwVM1VLOTguv6g9RnFGqtUrga6AgLdnNES2LZZKAaCRKdFCQ6OqMjvhxjz02Xws1SGqGzQReDIk9OA9qeQl2xPpQ9hcsQlgi6X%2BBF9ntAryd1kTvg18wPKvyH3eSn9jaqrlbxRA9o8xwW%2FURv6RdByvJ%2F%2BuyODNaoFqoZ3CyBN6Jyx&X-Amz-Signature=6a33273127517bd890242c3526387f253e2501b7a9211a6e17cbc74fee6958aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GZ7ZVW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKBpvBfxdseqP5OkusqIIkcQ%2B5r3J3d8BlO5uRJZJFzAiEAxUIAQW7OwrS9Cn9lBs7ZREwXQC9jmLWxw7of2mljqK8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOc0%2Fm0m7z4VQ%2F1zuyrcA3p0d%2BejDjDTHN1eZnb1EXQKrfGUpFY5woM3w3P7gHugqpKvfJxs1NYJmvjdvXA8YvhE6q8oVVSkzUJEVXRV20QQRV90Dr%2BWKlzlOxJuDh4AYRk9NIm20Lp2J%2BZ%2FtAKGibRTbua1%2BlLWXBPW5B4eFL66Wt3khjimTlWl4VoN%2FlgL4DVP0n0PmaQt4dEGT%2BeofH33LLyQ1EQ7phJm0Yxn4nC9ACPSeb5c6zf0lDBK0ZR5B5QKLX2jLeQWpT8QZeiuQJ3Vf5lCmfp2QQQ0blm45lxjUgdSDiGbighbxuktKw%2FKkLGKDEaI1bE4Cp244sQKNN16akVYV7n3RKU33GyXrDmw81HlJdTCPQ8Igq8TorzLiuIKrncEv7NQBmKYN%2FQ2rw3uVuhrnyeUGTbDMw9BZ7G99MKlvakwCLLqLagy0Ow1daqB94VLtMUD%2FerOLRJkWJpfDAZVwtecZh6DRqeIUcxdtynHAM5DzTRLUBtEfdzwNKhAmdNzmxlqux2pEHu5XP5%2BBRQ8gTlRIOIJB%2F%2BDLV%2Fo4nFUefkGKjOlO64hAp7rxSdSYAVe4eqWWzyEeBNRu6nUKcAEIeNpp7%2BRtDa0QrsfK%2FgWWaK4u55qch3wCIFUoncoWXUNozNz%2BYJdMPq0kb8GOqUB0WtXTZcxdfEE1Uf8eWXQsE2wAVvT9qSv2yy81tDUUZuJMsqwVM1VLOTguv6g9RnFGqtUrga6AgLdnNES2LZZKAaCRKdFCQ6OqMjvhxjz02Xws1SGqGzQReDIk9OA9qeQl2xPpQ9hcsQlgi6X%2BBF9ntAryd1kTvg18wPKvyH3eSn9jaqrlbxRA9o8xwW%2FURv6RdByvJ%2F%2BuyODNaoFqoZ3CyBN6Jyx&X-Amz-Signature=78537f22f657adf75cdadaf6a9580d084890825d632f51a285d736ba368c9bea&X-Amz-SignedHeaders=host&x-id=GetObject)
