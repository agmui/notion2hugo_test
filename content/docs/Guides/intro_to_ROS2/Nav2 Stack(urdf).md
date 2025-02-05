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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPFBFHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWAgSz9htKFMgfAuZsSVFHkjUB%2FtmxwKO0M56gNEWImAiBwi8L6d8SXUHmyJ48Ehyo%2BM%2BhCj9jcEeB25D4F7%2Bw6cyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZdcz8fArbeLrQeleKtwD5XfrmcD4IxdLOzl3WYTCV2iim8M17Okelm6tOGQi6UFRXIbG4QYXzAz5AUKlI4Iec5MXaI73kTIE%2F3FsMyAGN7yHlFxTDJEYi3IXpKsGKk2u3yuSdoRbITh5BINHH2mxlmTQglCsXWIQ5BXb6aTsOa3YvEQSzZbUlJfJ8%2F6dRnnC18cT1%2FpQPlekAeKyhmEW19Xys7pntvc0zzk2r9tLuKSbvy25fh3KdRfl%2FBiselywwqBg4nwU0RhxqwiWHS4lZXkiiIibqgwUMlKZpqZ3xBwKqrZiPw58IflG%2BjktsP27QVSS%2BiilPHGiWAq85tOhCKr0%2Fc0YCiYWDmxoYaKGurZ6mD2KEyhuzyaHDFcBR%2F2Twlzuk6COk8bU9sTwjiEIohM8TIXDGT9RVHNkvKstk5gjrcRr%2B1BVprZ7oFbh%2FdfGdQmX1TEw%2Bn0reQsonl6FLquRiwOymQrSdEuX4JD1ySbw6LzQrp6iaXKk5L9pL6HfKl4%2FDXYxWgy%2F5cE4Aj1UNxUsoOKBb2ZrmZw%2Btcyo4c4N%2FEvZK14aGwEvohVHmrqT1RzxgswFnPvhcyADIqGqWXLS6FyyKPQm10UA%2Fd5r9dhWybTdxL1TVrTohdbgTtiuVb0jEaMySWlFTNQwh7yOvQY6pgGg3M1yCNitR0iL8pV2eJOas1dY%2FrsEopdQ9zZe%2BE216emV3YJ%2FJILcFzdjeTbG026eAdo5DFoIletnu4hCRt1f35RJ%2BWUYn211nZGZYlZI9PKZ8pozbl1%2FJrSSJSvHr%2Fq%2F5hc8397vbCx60nBF62JlQp1mQhraWLQyYlnMrBCxUghKfz1xuOo%2BpHw2FzjDraKR73F1CsujMIPzJdgCp3BjFU93fxnj&X-Amz-Signature=0cf3f86167d5f1693fb0e31bb7f2872b92ad5253a80dee30ae8b84d426f9cb91&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPFBFHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWAgSz9htKFMgfAuZsSVFHkjUB%2FtmxwKO0M56gNEWImAiBwi8L6d8SXUHmyJ48Ehyo%2BM%2BhCj9jcEeB25D4F7%2Bw6cyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZdcz8fArbeLrQeleKtwD5XfrmcD4IxdLOzl3WYTCV2iim8M17Okelm6tOGQi6UFRXIbG4QYXzAz5AUKlI4Iec5MXaI73kTIE%2F3FsMyAGN7yHlFxTDJEYi3IXpKsGKk2u3yuSdoRbITh5BINHH2mxlmTQglCsXWIQ5BXb6aTsOa3YvEQSzZbUlJfJ8%2F6dRnnC18cT1%2FpQPlekAeKyhmEW19Xys7pntvc0zzk2r9tLuKSbvy25fh3KdRfl%2FBiselywwqBg4nwU0RhxqwiWHS4lZXkiiIibqgwUMlKZpqZ3xBwKqrZiPw58IflG%2BjktsP27QVSS%2BiilPHGiWAq85tOhCKr0%2Fc0YCiYWDmxoYaKGurZ6mD2KEyhuzyaHDFcBR%2F2Twlzuk6COk8bU9sTwjiEIohM8TIXDGT9RVHNkvKstk5gjrcRr%2B1BVprZ7oFbh%2FdfGdQmX1TEw%2Bn0reQsonl6FLquRiwOymQrSdEuX4JD1ySbw6LzQrp6iaXKk5L9pL6HfKl4%2FDXYxWgy%2F5cE4Aj1UNxUsoOKBb2ZrmZw%2Btcyo4c4N%2FEvZK14aGwEvohVHmrqT1RzxgswFnPvhcyADIqGqWXLS6FyyKPQm10UA%2Fd5r9dhWybTdxL1TVrTohdbgTtiuVb0jEaMySWlFTNQwh7yOvQY6pgGg3M1yCNitR0iL8pV2eJOas1dY%2FrsEopdQ9zZe%2BE216emV3YJ%2FJILcFzdjeTbG026eAdo5DFoIletnu4hCRt1f35RJ%2BWUYn211nZGZYlZI9PKZ8pozbl1%2FJrSSJSvHr%2Fq%2F5hc8397vbCx60nBF62JlQp1mQhraWLQyYlnMrBCxUghKfz1xuOo%2BpHw2FzjDraKR73F1CsujMIPzJdgCp3BjFU93fxnj&X-Amz-Signature=b710bcfce392b5a8cc08301f5532f137201b25271abff22d30f8b62f8c65edbf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPFBFHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWAgSz9htKFMgfAuZsSVFHkjUB%2FtmxwKO0M56gNEWImAiBwi8L6d8SXUHmyJ48Ehyo%2BM%2BhCj9jcEeB25D4F7%2Bw6cyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZdcz8fArbeLrQeleKtwD5XfrmcD4IxdLOzl3WYTCV2iim8M17Okelm6tOGQi6UFRXIbG4QYXzAz5AUKlI4Iec5MXaI73kTIE%2F3FsMyAGN7yHlFxTDJEYi3IXpKsGKk2u3yuSdoRbITh5BINHH2mxlmTQglCsXWIQ5BXb6aTsOa3YvEQSzZbUlJfJ8%2F6dRnnC18cT1%2FpQPlekAeKyhmEW19Xys7pntvc0zzk2r9tLuKSbvy25fh3KdRfl%2FBiselywwqBg4nwU0RhxqwiWHS4lZXkiiIibqgwUMlKZpqZ3xBwKqrZiPw58IflG%2BjktsP27QVSS%2BiilPHGiWAq85tOhCKr0%2Fc0YCiYWDmxoYaKGurZ6mD2KEyhuzyaHDFcBR%2F2Twlzuk6COk8bU9sTwjiEIohM8TIXDGT9RVHNkvKstk5gjrcRr%2B1BVprZ7oFbh%2FdfGdQmX1TEw%2Bn0reQsonl6FLquRiwOymQrSdEuX4JD1ySbw6LzQrp6iaXKk5L9pL6HfKl4%2FDXYxWgy%2F5cE4Aj1UNxUsoOKBb2ZrmZw%2Btcyo4c4N%2FEvZK14aGwEvohVHmrqT1RzxgswFnPvhcyADIqGqWXLS6FyyKPQm10UA%2Fd5r9dhWybTdxL1TVrTohdbgTtiuVb0jEaMySWlFTNQwh7yOvQY6pgGg3M1yCNitR0iL8pV2eJOas1dY%2FrsEopdQ9zZe%2BE216emV3YJ%2FJILcFzdjeTbG026eAdo5DFoIletnu4hCRt1f35RJ%2BWUYn211nZGZYlZI9PKZ8pozbl1%2FJrSSJSvHr%2Fq%2F5hc8397vbCx60nBF62JlQp1mQhraWLQyYlnMrBCxUghKfz1xuOo%2BpHw2FzjDraKR73F1CsujMIPzJdgCp3BjFU93fxnj&X-Amz-Signature=1711cc3f5128bc925620eed2be2d3db05e94faee18c60265d8a2a0c9cdebe29d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPFBFHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWAgSz9htKFMgfAuZsSVFHkjUB%2FtmxwKO0M56gNEWImAiBwi8L6d8SXUHmyJ48Ehyo%2BM%2BhCj9jcEeB25D4F7%2Bw6cyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZdcz8fArbeLrQeleKtwD5XfrmcD4IxdLOzl3WYTCV2iim8M17Okelm6tOGQi6UFRXIbG4QYXzAz5AUKlI4Iec5MXaI73kTIE%2F3FsMyAGN7yHlFxTDJEYi3IXpKsGKk2u3yuSdoRbITh5BINHH2mxlmTQglCsXWIQ5BXb6aTsOa3YvEQSzZbUlJfJ8%2F6dRnnC18cT1%2FpQPlekAeKyhmEW19Xys7pntvc0zzk2r9tLuKSbvy25fh3KdRfl%2FBiselywwqBg4nwU0RhxqwiWHS4lZXkiiIibqgwUMlKZpqZ3xBwKqrZiPw58IflG%2BjktsP27QVSS%2BiilPHGiWAq85tOhCKr0%2Fc0YCiYWDmxoYaKGurZ6mD2KEyhuzyaHDFcBR%2F2Twlzuk6COk8bU9sTwjiEIohM8TIXDGT9RVHNkvKstk5gjrcRr%2B1BVprZ7oFbh%2FdfGdQmX1TEw%2Bn0reQsonl6FLquRiwOymQrSdEuX4JD1ySbw6LzQrp6iaXKk5L9pL6HfKl4%2FDXYxWgy%2F5cE4Aj1UNxUsoOKBb2ZrmZw%2Btcyo4c4N%2FEvZK14aGwEvohVHmrqT1RzxgswFnPvhcyADIqGqWXLS6FyyKPQm10UA%2Fd5r9dhWybTdxL1TVrTohdbgTtiuVb0jEaMySWlFTNQwh7yOvQY6pgGg3M1yCNitR0iL8pV2eJOas1dY%2FrsEopdQ9zZe%2BE216emV3YJ%2FJILcFzdjeTbG026eAdo5DFoIletnu4hCRt1f35RJ%2BWUYn211nZGZYlZI9PKZ8pozbl1%2FJrSSJSvHr%2Fq%2F5hc8397vbCx60nBF62JlQp1mQhraWLQyYlnMrBCxUghKfz1xuOo%2BpHw2FzjDraKR73F1CsujMIPzJdgCp3BjFU93fxnj&X-Amz-Signature=8d4514c11680aa9050b8e5620651f14fdf2394c513ac54a1d6f18195d682aaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPFBFHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWAgSz9htKFMgfAuZsSVFHkjUB%2FtmxwKO0M56gNEWImAiBwi8L6d8SXUHmyJ48Ehyo%2BM%2BhCj9jcEeB25D4F7%2Bw6cyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZdcz8fArbeLrQeleKtwD5XfrmcD4IxdLOzl3WYTCV2iim8M17Okelm6tOGQi6UFRXIbG4QYXzAz5AUKlI4Iec5MXaI73kTIE%2F3FsMyAGN7yHlFxTDJEYi3IXpKsGKk2u3yuSdoRbITh5BINHH2mxlmTQglCsXWIQ5BXb6aTsOa3YvEQSzZbUlJfJ8%2F6dRnnC18cT1%2FpQPlekAeKyhmEW19Xys7pntvc0zzk2r9tLuKSbvy25fh3KdRfl%2FBiselywwqBg4nwU0RhxqwiWHS4lZXkiiIibqgwUMlKZpqZ3xBwKqrZiPw58IflG%2BjktsP27QVSS%2BiilPHGiWAq85tOhCKr0%2Fc0YCiYWDmxoYaKGurZ6mD2KEyhuzyaHDFcBR%2F2Twlzuk6COk8bU9sTwjiEIohM8TIXDGT9RVHNkvKstk5gjrcRr%2B1BVprZ7oFbh%2FdfGdQmX1TEw%2Bn0reQsonl6FLquRiwOymQrSdEuX4JD1ySbw6LzQrp6iaXKk5L9pL6HfKl4%2FDXYxWgy%2F5cE4Aj1UNxUsoOKBb2ZrmZw%2Btcyo4c4N%2FEvZK14aGwEvohVHmrqT1RzxgswFnPvhcyADIqGqWXLS6FyyKPQm10UA%2Fd5r9dhWybTdxL1TVrTohdbgTtiuVb0jEaMySWlFTNQwh7yOvQY6pgGg3M1yCNitR0iL8pV2eJOas1dY%2FrsEopdQ9zZe%2BE216emV3YJ%2FJILcFzdjeTbG026eAdo5DFoIletnu4hCRt1f35RJ%2BWUYn211nZGZYlZI9PKZ8pozbl1%2FJrSSJSvHr%2Fq%2F5hc8397vbCx60nBF62JlQp1mQhraWLQyYlnMrBCxUghKfz1xuOo%2BpHw2FzjDraKR73F1CsujMIPzJdgCp3BjFU93fxnj&X-Amz-Signature=ed598d70648b1e153f7f5ab47c2d344c090d58c2117a399ad226b22e617c04ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPFBFHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWAgSz9htKFMgfAuZsSVFHkjUB%2FtmxwKO0M56gNEWImAiBwi8L6d8SXUHmyJ48Ehyo%2BM%2BhCj9jcEeB25D4F7%2Bw6cyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZdcz8fArbeLrQeleKtwD5XfrmcD4IxdLOzl3WYTCV2iim8M17Okelm6tOGQi6UFRXIbG4QYXzAz5AUKlI4Iec5MXaI73kTIE%2F3FsMyAGN7yHlFxTDJEYi3IXpKsGKk2u3yuSdoRbITh5BINHH2mxlmTQglCsXWIQ5BXb6aTsOa3YvEQSzZbUlJfJ8%2F6dRnnC18cT1%2FpQPlekAeKyhmEW19Xys7pntvc0zzk2r9tLuKSbvy25fh3KdRfl%2FBiselywwqBg4nwU0RhxqwiWHS4lZXkiiIibqgwUMlKZpqZ3xBwKqrZiPw58IflG%2BjktsP27QVSS%2BiilPHGiWAq85tOhCKr0%2Fc0YCiYWDmxoYaKGurZ6mD2KEyhuzyaHDFcBR%2F2Twlzuk6COk8bU9sTwjiEIohM8TIXDGT9RVHNkvKstk5gjrcRr%2B1BVprZ7oFbh%2FdfGdQmX1TEw%2Bn0reQsonl6FLquRiwOymQrSdEuX4JD1ySbw6LzQrp6iaXKk5L9pL6HfKl4%2FDXYxWgy%2F5cE4Aj1UNxUsoOKBb2ZrmZw%2Btcyo4c4N%2FEvZK14aGwEvohVHmrqT1RzxgswFnPvhcyADIqGqWXLS6FyyKPQm10UA%2Fd5r9dhWybTdxL1TVrTohdbgTtiuVb0jEaMySWlFTNQwh7yOvQY6pgGg3M1yCNitR0iL8pV2eJOas1dY%2FrsEopdQ9zZe%2BE216emV3YJ%2FJILcFzdjeTbG026eAdo5DFoIletnu4hCRt1f35RJ%2BWUYn211nZGZYlZI9PKZ8pozbl1%2FJrSSJSvHr%2Fq%2F5hc8397vbCx60nBF62JlQp1mQhraWLQyYlnMrBCxUghKfz1xuOo%2BpHw2FzjDraKR73F1CsujMIPzJdgCp3BjFU93fxnj&X-Amz-Signature=05b4e2b7165425dac115c48446de357ef3f578bcdd1c031606658cad92df427e&X-Amz-SignedHeaders=host&x-id=GetObject)
