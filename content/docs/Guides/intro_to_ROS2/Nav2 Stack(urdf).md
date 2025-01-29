---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5KCDNL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9HdgB3gZkz60QUfBdDxwWv8WP94HjBaiHaAZF1A6r0AIhAO5UzNflk9pKUpOM1upRB38tV%2FKQO8ZD7Mt7rPSEXSD6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYLYRoYlmB4s0VbIq3AMBDn5TgLClQFReARJ%2FeBcmQ5Hvdny3TgDWlqvAJp8jjt5ocmIqoyFnOJJ9bzJY%2BRYOg8F%2F1ukogUX1Mko5eqHZBrPLtQrObkoIKd3eh%2Fjj3zwBuMGofLQfPe9vVWW7Hog9KA2qagRjeXGhf8SVgWaW9suvUJPfSgorouUGUfvGeBN85KUR%2B0NxVYL6k5yHqtXGKyHu1eC7tW2xmVHImEzlqzjyee1iiawEZtZHGSaHXUvX2P5MJcJqOl9XRSmRuUK4JlfddsKHo79ghFu45TTGmLSs%2BaBmjkF35984MO0tJtx1rj%2BnciMqjWobfROSk%2B9cQX04gy1sTX%2BESP06U3yzKFjg3bIwv7FJN%2FsqUaR1S9HweuRKp4pkz7JckMZlzNoAFEcQvRllTPijoNXB8Tt%2F8xDinsPX4zC4Xvc8jgqFzNlSdJbU9%2Fdqesty49zKEfjCYY1bdejw0Eo3MsZg12A4Z8SWuN37dVyAzV6HyFfuY3uD5eEXPat5EF%2Fw%2FXrkkXz9twjnwL4ubkJbqsaFhXEE%2BYMi8TSnBr73X2dpP7WYA%2FPhlEVEmiUtmheswwNILdoy7MrMqUEcwvO8kt0RD5afD%2BT8Obc6gyXJcDyIWnMpYlFfRpU3%2FRD3UEvs%2FDCFvOa8BjqkAVSMWxXrt6HOwxKbaMUB7B10g5sypkZtFN2hWZamlLEOesuiAMMh0S8vrKMv3vWnaHfs%2BdnSzeFFdMdwIBk9m4uviZqcaLQDb5gzlc80fGeOFrndh6Th2DW5PGpjvjoqBVuZuSZkcf50dtPsnZym%2BUDpMY0SXv6OwG%2FRvmrtBSmLrUrbN57iPkR4ZRr4dQieYUQOsmqPoVLVzHHUKi1xcDWBBUBv&X-Amz-Signature=f621d7f9e9f672d3607cb745c1d1201e2a08ca085fb95e84b5b93a18223e94e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5KCDNL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9HdgB3gZkz60QUfBdDxwWv8WP94HjBaiHaAZF1A6r0AIhAO5UzNflk9pKUpOM1upRB38tV%2FKQO8ZD7Mt7rPSEXSD6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYLYRoYlmB4s0VbIq3AMBDn5TgLClQFReARJ%2FeBcmQ5Hvdny3TgDWlqvAJp8jjt5ocmIqoyFnOJJ9bzJY%2BRYOg8F%2F1ukogUX1Mko5eqHZBrPLtQrObkoIKd3eh%2Fjj3zwBuMGofLQfPe9vVWW7Hog9KA2qagRjeXGhf8SVgWaW9suvUJPfSgorouUGUfvGeBN85KUR%2B0NxVYL6k5yHqtXGKyHu1eC7tW2xmVHImEzlqzjyee1iiawEZtZHGSaHXUvX2P5MJcJqOl9XRSmRuUK4JlfddsKHo79ghFu45TTGmLSs%2BaBmjkF35984MO0tJtx1rj%2BnciMqjWobfROSk%2B9cQX04gy1sTX%2BESP06U3yzKFjg3bIwv7FJN%2FsqUaR1S9HweuRKp4pkz7JckMZlzNoAFEcQvRllTPijoNXB8Tt%2F8xDinsPX4zC4Xvc8jgqFzNlSdJbU9%2Fdqesty49zKEfjCYY1bdejw0Eo3MsZg12A4Z8SWuN37dVyAzV6HyFfuY3uD5eEXPat5EF%2Fw%2FXrkkXz9twjnwL4ubkJbqsaFhXEE%2BYMi8TSnBr73X2dpP7WYA%2FPhlEVEmiUtmheswwNILdoy7MrMqUEcwvO8kt0RD5afD%2BT8Obc6gyXJcDyIWnMpYlFfRpU3%2FRD3UEvs%2FDCFvOa8BjqkAVSMWxXrt6HOwxKbaMUB7B10g5sypkZtFN2hWZamlLEOesuiAMMh0S8vrKMv3vWnaHfs%2BdnSzeFFdMdwIBk9m4uviZqcaLQDb5gzlc80fGeOFrndh6Th2DW5PGpjvjoqBVuZuSZkcf50dtPsnZym%2BUDpMY0SXv6OwG%2FRvmrtBSmLrUrbN57iPkR4ZRr4dQieYUQOsmqPoVLVzHHUKi1xcDWBBUBv&X-Amz-Signature=8355fa247b1ec99fd360ea026f972c1ccb9a4f6e23cad5dc1b74fc1926a9ee82&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5KCDNL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9HdgB3gZkz60QUfBdDxwWv8WP94HjBaiHaAZF1A6r0AIhAO5UzNflk9pKUpOM1upRB38tV%2FKQO8ZD7Mt7rPSEXSD6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYLYRoYlmB4s0VbIq3AMBDn5TgLClQFReARJ%2FeBcmQ5Hvdny3TgDWlqvAJp8jjt5ocmIqoyFnOJJ9bzJY%2BRYOg8F%2F1ukogUX1Mko5eqHZBrPLtQrObkoIKd3eh%2Fjj3zwBuMGofLQfPe9vVWW7Hog9KA2qagRjeXGhf8SVgWaW9suvUJPfSgorouUGUfvGeBN85KUR%2B0NxVYL6k5yHqtXGKyHu1eC7tW2xmVHImEzlqzjyee1iiawEZtZHGSaHXUvX2P5MJcJqOl9XRSmRuUK4JlfddsKHo79ghFu45TTGmLSs%2BaBmjkF35984MO0tJtx1rj%2BnciMqjWobfROSk%2B9cQX04gy1sTX%2BESP06U3yzKFjg3bIwv7FJN%2FsqUaR1S9HweuRKp4pkz7JckMZlzNoAFEcQvRllTPijoNXB8Tt%2F8xDinsPX4zC4Xvc8jgqFzNlSdJbU9%2Fdqesty49zKEfjCYY1bdejw0Eo3MsZg12A4Z8SWuN37dVyAzV6HyFfuY3uD5eEXPat5EF%2Fw%2FXrkkXz9twjnwL4ubkJbqsaFhXEE%2BYMi8TSnBr73X2dpP7WYA%2FPhlEVEmiUtmheswwNILdoy7MrMqUEcwvO8kt0RD5afD%2BT8Obc6gyXJcDyIWnMpYlFfRpU3%2FRD3UEvs%2FDCFvOa8BjqkAVSMWxXrt6HOwxKbaMUB7B10g5sypkZtFN2hWZamlLEOesuiAMMh0S8vrKMv3vWnaHfs%2BdnSzeFFdMdwIBk9m4uviZqcaLQDb5gzlc80fGeOFrndh6Th2DW5PGpjvjoqBVuZuSZkcf50dtPsnZym%2BUDpMY0SXv6OwG%2FRvmrtBSmLrUrbN57iPkR4ZRr4dQieYUQOsmqPoVLVzHHUKi1xcDWBBUBv&X-Amz-Signature=39781276e07b036b43df884eed163743bbcaa2594f82066d24676cc0528c276f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5KCDNL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9HdgB3gZkz60QUfBdDxwWv8WP94HjBaiHaAZF1A6r0AIhAO5UzNflk9pKUpOM1upRB38tV%2FKQO8ZD7Mt7rPSEXSD6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYLYRoYlmB4s0VbIq3AMBDn5TgLClQFReARJ%2FeBcmQ5Hvdny3TgDWlqvAJp8jjt5ocmIqoyFnOJJ9bzJY%2BRYOg8F%2F1ukogUX1Mko5eqHZBrPLtQrObkoIKd3eh%2Fjj3zwBuMGofLQfPe9vVWW7Hog9KA2qagRjeXGhf8SVgWaW9suvUJPfSgorouUGUfvGeBN85KUR%2B0NxVYL6k5yHqtXGKyHu1eC7tW2xmVHImEzlqzjyee1iiawEZtZHGSaHXUvX2P5MJcJqOl9XRSmRuUK4JlfddsKHo79ghFu45TTGmLSs%2BaBmjkF35984MO0tJtx1rj%2BnciMqjWobfROSk%2B9cQX04gy1sTX%2BESP06U3yzKFjg3bIwv7FJN%2FsqUaR1S9HweuRKp4pkz7JckMZlzNoAFEcQvRllTPijoNXB8Tt%2F8xDinsPX4zC4Xvc8jgqFzNlSdJbU9%2Fdqesty49zKEfjCYY1bdejw0Eo3MsZg12A4Z8SWuN37dVyAzV6HyFfuY3uD5eEXPat5EF%2Fw%2FXrkkXz9twjnwL4ubkJbqsaFhXEE%2BYMi8TSnBr73X2dpP7WYA%2FPhlEVEmiUtmheswwNILdoy7MrMqUEcwvO8kt0RD5afD%2BT8Obc6gyXJcDyIWnMpYlFfRpU3%2FRD3UEvs%2FDCFvOa8BjqkAVSMWxXrt6HOwxKbaMUB7B10g5sypkZtFN2hWZamlLEOesuiAMMh0S8vrKMv3vWnaHfs%2BdnSzeFFdMdwIBk9m4uviZqcaLQDb5gzlc80fGeOFrndh6Th2DW5PGpjvjoqBVuZuSZkcf50dtPsnZym%2BUDpMY0SXv6OwG%2FRvmrtBSmLrUrbN57iPkR4ZRr4dQieYUQOsmqPoVLVzHHUKi1xcDWBBUBv&X-Amz-Signature=b0266ce1df4871bcfa5f8ce3744190675043525f989bd3a2fd75124b0a4fb664&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5KCDNL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9HdgB3gZkz60QUfBdDxwWv8WP94HjBaiHaAZF1A6r0AIhAO5UzNflk9pKUpOM1upRB38tV%2FKQO8ZD7Mt7rPSEXSD6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYLYRoYlmB4s0VbIq3AMBDn5TgLClQFReARJ%2FeBcmQ5Hvdny3TgDWlqvAJp8jjt5ocmIqoyFnOJJ9bzJY%2BRYOg8F%2F1ukogUX1Mko5eqHZBrPLtQrObkoIKd3eh%2Fjj3zwBuMGofLQfPe9vVWW7Hog9KA2qagRjeXGhf8SVgWaW9suvUJPfSgorouUGUfvGeBN85KUR%2B0NxVYL6k5yHqtXGKyHu1eC7tW2xmVHImEzlqzjyee1iiawEZtZHGSaHXUvX2P5MJcJqOl9XRSmRuUK4JlfddsKHo79ghFu45TTGmLSs%2BaBmjkF35984MO0tJtx1rj%2BnciMqjWobfROSk%2B9cQX04gy1sTX%2BESP06U3yzKFjg3bIwv7FJN%2FsqUaR1S9HweuRKp4pkz7JckMZlzNoAFEcQvRllTPijoNXB8Tt%2F8xDinsPX4zC4Xvc8jgqFzNlSdJbU9%2Fdqesty49zKEfjCYY1bdejw0Eo3MsZg12A4Z8SWuN37dVyAzV6HyFfuY3uD5eEXPat5EF%2Fw%2FXrkkXz9twjnwL4ubkJbqsaFhXEE%2BYMi8TSnBr73X2dpP7WYA%2FPhlEVEmiUtmheswwNILdoy7MrMqUEcwvO8kt0RD5afD%2BT8Obc6gyXJcDyIWnMpYlFfRpU3%2FRD3UEvs%2FDCFvOa8BjqkAVSMWxXrt6HOwxKbaMUB7B10g5sypkZtFN2hWZamlLEOesuiAMMh0S8vrKMv3vWnaHfs%2BdnSzeFFdMdwIBk9m4uviZqcaLQDb5gzlc80fGeOFrndh6Th2DW5PGpjvjoqBVuZuSZkcf50dtPsnZym%2BUDpMY0SXv6OwG%2FRvmrtBSmLrUrbN57iPkR4ZRr4dQieYUQOsmqPoVLVzHHUKi1xcDWBBUBv&X-Amz-Signature=82f52a20b49fcd1238f27960f0654b880f6bb1a6aa7d9acc8bd7b29e8da3c133&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5KCDNL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC9HdgB3gZkz60QUfBdDxwWv8WP94HjBaiHaAZF1A6r0AIhAO5UzNflk9pKUpOM1upRB38tV%2FKQO8ZD7Mt7rPSEXSD6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUYLYRoYlmB4s0VbIq3AMBDn5TgLClQFReARJ%2FeBcmQ5Hvdny3TgDWlqvAJp8jjt5ocmIqoyFnOJJ9bzJY%2BRYOg8F%2F1ukogUX1Mko5eqHZBrPLtQrObkoIKd3eh%2Fjj3zwBuMGofLQfPe9vVWW7Hog9KA2qagRjeXGhf8SVgWaW9suvUJPfSgorouUGUfvGeBN85KUR%2B0NxVYL6k5yHqtXGKyHu1eC7tW2xmVHImEzlqzjyee1iiawEZtZHGSaHXUvX2P5MJcJqOl9XRSmRuUK4JlfddsKHo79ghFu45TTGmLSs%2BaBmjkF35984MO0tJtx1rj%2BnciMqjWobfROSk%2B9cQX04gy1sTX%2BESP06U3yzKFjg3bIwv7FJN%2FsqUaR1S9HweuRKp4pkz7JckMZlzNoAFEcQvRllTPijoNXB8Tt%2F8xDinsPX4zC4Xvc8jgqFzNlSdJbU9%2Fdqesty49zKEfjCYY1bdejw0Eo3MsZg12A4Z8SWuN37dVyAzV6HyFfuY3uD5eEXPat5EF%2Fw%2FXrkkXz9twjnwL4ubkJbqsaFhXEE%2BYMi8TSnBr73X2dpP7WYA%2FPhlEVEmiUtmheswwNILdoy7MrMqUEcwvO8kt0RD5afD%2BT8Obc6gyXJcDyIWnMpYlFfRpU3%2FRD3UEvs%2FDCFvOa8BjqkAVSMWxXrt6HOwxKbaMUB7B10g5sypkZtFN2hWZamlLEOesuiAMMh0S8vrKMv3vWnaHfs%2BdnSzeFFdMdwIBk9m4uviZqcaLQDb5gzlc80fGeOFrndh6Th2DW5PGpjvjoqBVuZuSZkcf50dtPsnZym%2BUDpMY0SXv6OwG%2FRvmrtBSmLrUrbN57iPkR4ZRr4dQieYUQOsmqPoVLVzHHUKi1xcDWBBUBv&X-Amz-Signature=8d8f0fa10b9737030304f8f304a08042cae885d8f34996080bb611ed206a11f2&X-Amz-SignedHeaders=host&x-id=GetObject)
