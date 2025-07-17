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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFQC4G2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyo05VCCOQlFeyQuQhMkV80ekm71RJxlL4PefEwljcLwIhAJOvAryTRdzQWfJKw5BZ8llk1bkWMPaNSnCsTSJoRXRIKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZClMaXj7nRa%2Fnsosq3APWTQSh5wYj2DGnydUcnPdndt%2BJkJ1QQMZpf0vGah5M4kQcgzfDJ3JUwYdkjh9fh%2B9FQE40T0rvtN1XPTeBaio%2F3Ivn9gObrrYPXTc890FKnoW7igta7SdKLO%2FbiDWDtaSTJMsK%2B9c6%2BZik4j92tpCx7r8zONi6TTVWLEavcIfU4Zf40jQME1rjz8wlLH%2FQqYBnejT2VTrTt%2F%2F1q9Zsoruw5nCxke6Fl9U9OOH%2BMHn6OhwUxSnxhRoGwKb5P%2FtqGR0rrlqddWwVm5xtH7sxvEEX99B%2BwzG7nFj1wcVo4a3wmqDzsnAa4%2Bjm1muwfmjx8ajRkI7YTX1RCYRlQgFIrEZwj4A%2BPa%2Bw%2Bgd83TFzRCFutcsqCFV21a0dY3py0LFuRMGdMcillUyVX35%2B8JAvDRbt8tKr5DjDbSPH4PQO2v9riaJYnUW%2FQWeYGhLBKf3n%2BBrPrxXJN5mZwdzxzmUBjWd4nbz%2BSc%2BgJXuGpH6SP4E%2FRBoUtXku4HlM4m63f3zkFi87mGb3kjfRN1%2FKPuwJCEx3iml%2BINICc7O8aqFfow73xi0IHWCj2TREA68j%2FhdpNJmytmyBKGk85p30ic3Q5sHMx82K5gbViY8TNXyFcLYY%2Fvl%2FVuENL8VWzjDBsjCgkuPDBjqkAbkKqYZ2FOs3M0HLHS%2BX7rb5QBVsXcf62A2kT64uLouIG2fb2sZ7PhKZ6U4O0tRhNqiSbv2eOkjE0%2FY4DXk%2Bl%2BTY%2FI%2Fz5%2FJd4dXOjS3e%2B4pdklf3eUBuP0%2Fsf0nbOu7BoFWhldVfbySvTmVLSA5SKKGFXUaA9kv5RkaRS1XoVUcaUBfxBEDJorKaIEywwxWStzClH6lepD3YCwxskdNjd26aAZG4&X-Amz-Signature=eec4dd5669955e0f4822d96ae88fddd83eed377efab5cb689a190fc7029cf473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFQC4G2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyo05VCCOQlFeyQuQhMkV80ekm71RJxlL4PefEwljcLwIhAJOvAryTRdzQWfJKw5BZ8llk1bkWMPaNSnCsTSJoRXRIKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZClMaXj7nRa%2Fnsosq3APWTQSh5wYj2DGnydUcnPdndt%2BJkJ1QQMZpf0vGah5M4kQcgzfDJ3JUwYdkjh9fh%2B9FQE40T0rvtN1XPTeBaio%2F3Ivn9gObrrYPXTc890FKnoW7igta7SdKLO%2FbiDWDtaSTJMsK%2B9c6%2BZik4j92tpCx7r8zONi6TTVWLEavcIfU4Zf40jQME1rjz8wlLH%2FQqYBnejT2VTrTt%2F%2F1q9Zsoruw5nCxke6Fl9U9OOH%2BMHn6OhwUxSnxhRoGwKb5P%2FtqGR0rrlqddWwVm5xtH7sxvEEX99B%2BwzG7nFj1wcVo4a3wmqDzsnAa4%2Bjm1muwfmjx8ajRkI7YTX1RCYRlQgFIrEZwj4A%2BPa%2Bw%2Bgd83TFzRCFutcsqCFV21a0dY3py0LFuRMGdMcillUyVX35%2B8JAvDRbt8tKr5DjDbSPH4PQO2v9riaJYnUW%2FQWeYGhLBKf3n%2BBrPrxXJN5mZwdzxzmUBjWd4nbz%2BSc%2BgJXuGpH6SP4E%2FRBoUtXku4HlM4m63f3zkFi87mGb3kjfRN1%2FKPuwJCEx3iml%2BINICc7O8aqFfow73xi0IHWCj2TREA68j%2FhdpNJmytmyBKGk85p30ic3Q5sHMx82K5gbViY8TNXyFcLYY%2Fvl%2FVuENL8VWzjDBsjCgkuPDBjqkAbkKqYZ2FOs3M0HLHS%2BX7rb5QBVsXcf62A2kT64uLouIG2fb2sZ7PhKZ6U4O0tRhNqiSbv2eOkjE0%2FY4DXk%2Bl%2BTY%2FI%2Fz5%2FJd4dXOjS3e%2B4pdklf3eUBuP0%2Fsf0nbOu7BoFWhldVfbySvTmVLSA5SKKGFXUaA9kv5RkaRS1XoVUcaUBfxBEDJorKaIEywwxWStzClH6lepD3YCwxskdNjd26aAZG4&X-Amz-Signature=213dbe2111c300c06f3ff47ef4c283b9538a3f744271782a4cdf221e0f4eec7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFQC4G2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyo05VCCOQlFeyQuQhMkV80ekm71RJxlL4PefEwljcLwIhAJOvAryTRdzQWfJKw5BZ8llk1bkWMPaNSnCsTSJoRXRIKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZClMaXj7nRa%2Fnsosq3APWTQSh5wYj2DGnydUcnPdndt%2BJkJ1QQMZpf0vGah5M4kQcgzfDJ3JUwYdkjh9fh%2B9FQE40T0rvtN1XPTeBaio%2F3Ivn9gObrrYPXTc890FKnoW7igta7SdKLO%2FbiDWDtaSTJMsK%2B9c6%2BZik4j92tpCx7r8zONi6TTVWLEavcIfU4Zf40jQME1rjz8wlLH%2FQqYBnejT2VTrTt%2F%2F1q9Zsoruw5nCxke6Fl9U9OOH%2BMHn6OhwUxSnxhRoGwKb5P%2FtqGR0rrlqddWwVm5xtH7sxvEEX99B%2BwzG7nFj1wcVo4a3wmqDzsnAa4%2Bjm1muwfmjx8ajRkI7YTX1RCYRlQgFIrEZwj4A%2BPa%2Bw%2Bgd83TFzRCFutcsqCFV21a0dY3py0LFuRMGdMcillUyVX35%2B8JAvDRbt8tKr5DjDbSPH4PQO2v9riaJYnUW%2FQWeYGhLBKf3n%2BBrPrxXJN5mZwdzxzmUBjWd4nbz%2BSc%2BgJXuGpH6SP4E%2FRBoUtXku4HlM4m63f3zkFi87mGb3kjfRN1%2FKPuwJCEx3iml%2BINICc7O8aqFfow73xi0IHWCj2TREA68j%2FhdpNJmytmyBKGk85p30ic3Q5sHMx82K5gbViY8TNXyFcLYY%2Fvl%2FVuENL8VWzjDBsjCgkuPDBjqkAbkKqYZ2FOs3M0HLHS%2BX7rb5QBVsXcf62A2kT64uLouIG2fb2sZ7PhKZ6U4O0tRhNqiSbv2eOkjE0%2FY4DXk%2Bl%2BTY%2FI%2Fz5%2FJd4dXOjS3e%2B4pdklf3eUBuP0%2Fsf0nbOu7BoFWhldVfbySvTmVLSA5SKKGFXUaA9kv5RkaRS1XoVUcaUBfxBEDJorKaIEywwxWStzClH6lepD3YCwxskdNjd26aAZG4&X-Amz-Signature=a08c1e8a37d0a273064e9faa2ffe8687fde092512141031f1054086648712d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFQC4G2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyo05VCCOQlFeyQuQhMkV80ekm71RJxlL4PefEwljcLwIhAJOvAryTRdzQWfJKw5BZ8llk1bkWMPaNSnCsTSJoRXRIKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZClMaXj7nRa%2Fnsosq3APWTQSh5wYj2DGnydUcnPdndt%2BJkJ1QQMZpf0vGah5M4kQcgzfDJ3JUwYdkjh9fh%2B9FQE40T0rvtN1XPTeBaio%2F3Ivn9gObrrYPXTc890FKnoW7igta7SdKLO%2FbiDWDtaSTJMsK%2B9c6%2BZik4j92tpCx7r8zONi6TTVWLEavcIfU4Zf40jQME1rjz8wlLH%2FQqYBnejT2VTrTt%2F%2F1q9Zsoruw5nCxke6Fl9U9OOH%2BMHn6OhwUxSnxhRoGwKb5P%2FtqGR0rrlqddWwVm5xtH7sxvEEX99B%2BwzG7nFj1wcVo4a3wmqDzsnAa4%2Bjm1muwfmjx8ajRkI7YTX1RCYRlQgFIrEZwj4A%2BPa%2Bw%2Bgd83TFzRCFutcsqCFV21a0dY3py0LFuRMGdMcillUyVX35%2B8JAvDRbt8tKr5DjDbSPH4PQO2v9riaJYnUW%2FQWeYGhLBKf3n%2BBrPrxXJN5mZwdzxzmUBjWd4nbz%2BSc%2BgJXuGpH6SP4E%2FRBoUtXku4HlM4m63f3zkFi87mGb3kjfRN1%2FKPuwJCEx3iml%2BINICc7O8aqFfow73xi0IHWCj2TREA68j%2FhdpNJmytmyBKGk85p30ic3Q5sHMx82K5gbViY8TNXyFcLYY%2Fvl%2FVuENL8VWzjDBsjCgkuPDBjqkAbkKqYZ2FOs3M0HLHS%2BX7rb5QBVsXcf62A2kT64uLouIG2fb2sZ7PhKZ6U4O0tRhNqiSbv2eOkjE0%2FY4DXk%2Bl%2BTY%2FI%2Fz5%2FJd4dXOjS3e%2B4pdklf3eUBuP0%2Fsf0nbOu7BoFWhldVfbySvTmVLSA5SKKGFXUaA9kv5RkaRS1XoVUcaUBfxBEDJorKaIEywwxWStzClH6lepD3YCwxskdNjd26aAZG4&X-Amz-Signature=ec450531e18c7b0d3664eb1817c419766c19c014d990b996a8e1bb8f52e45e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFQC4G2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyo05VCCOQlFeyQuQhMkV80ekm71RJxlL4PefEwljcLwIhAJOvAryTRdzQWfJKw5BZ8llk1bkWMPaNSnCsTSJoRXRIKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZClMaXj7nRa%2Fnsosq3APWTQSh5wYj2DGnydUcnPdndt%2BJkJ1QQMZpf0vGah5M4kQcgzfDJ3JUwYdkjh9fh%2B9FQE40T0rvtN1XPTeBaio%2F3Ivn9gObrrYPXTc890FKnoW7igta7SdKLO%2FbiDWDtaSTJMsK%2B9c6%2BZik4j92tpCx7r8zONi6TTVWLEavcIfU4Zf40jQME1rjz8wlLH%2FQqYBnejT2VTrTt%2F%2F1q9Zsoruw5nCxke6Fl9U9OOH%2BMHn6OhwUxSnxhRoGwKb5P%2FtqGR0rrlqddWwVm5xtH7sxvEEX99B%2BwzG7nFj1wcVo4a3wmqDzsnAa4%2Bjm1muwfmjx8ajRkI7YTX1RCYRlQgFIrEZwj4A%2BPa%2Bw%2Bgd83TFzRCFutcsqCFV21a0dY3py0LFuRMGdMcillUyVX35%2B8JAvDRbt8tKr5DjDbSPH4PQO2v9riaJYnUW%2FQWeYGhLBKf3n%2BBrPrxXJN5mZwdzxzmUBjWd4nbz%2BSc%2BgJXuGpH6SP4E%2FRBoUtXku4HlM4m63f3zkFi87mGb3kjfRN1%2FKPuwJCEx3iml%2BINICc7O8aqFfow73xi0IHWCj2TREA68j%2FhdpNJmytmyBKGk85p30ic3Q5sHMx82K5gbViY8TNXyFcLYY%2Fvl%2FVuENL8VWzjDBsjCgkuPDBjqkAbkKqYZ2FOs3M0HLHS%2BX7rb5QBVsXcf62A2kT64uLouIG2fb2sZ7PhKZ6U4O0tRhNqiSbv2eOkjE0%2FY4DXk%2Bl%2BTY%2FI%2Fz5%2FJd4dXOjS3e%2B4pdklf3eUBuP0%2Fsf0nbOu7BoFWhldVfbySvTmVLSA5SKKGFXUaA9kv5RkaRS1XoVUcaUBfxBEDJorKaIEywwxWStzClH6lepD3YCwxskdNjd26aAZG4&X-Amz-Signature=6fa7ad19610aa69aa310946d45497a9054c0e54289fe34941c88d672cf0dea97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFQC4G2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyo05VCCOQlFeyQuQhMkV80ekm71RJxlL4PefEwljcLwIhAJOvAryTRdzQWfJKw5BZ8llk1bkWMPaNSnCsTSJoRXRIKv8DCHMQABoMNjM3NDIzMTgzODA1IgyZClMaXj7nRa%2Fnsosq3APWTQSh5wYj2DGnydUcnPdndt%2BJkJ1QQMZpf0vGah5M4kQcgzfDJ3JUwYdkjh9fh%2B9FQE40T0rvtN1XPTeBaio%2F3Ivn9gObrrYPXTc890FKnoW7igta7SdKLO%2FbiDWDtaSTJMsK%2B9c6%2BZik4j92tpCx7r8zONi6TTVWLEavcIfU4Zf40jQME1rjz8wlLH%2FQqYBnejT2VTrTt%2F%2F1q9Zsoruw5nCxke6Fl9U9OOH%2BMHn6OhwUxSnxhRoGwKb5P%2FtqGR0rrlqddWwVm5xtH7sxvEEX99B%2BwzG7nFj1wcVo4a3wmqDzsnAa4%2Bjm1muwfmjx8ajRkI7YTX1RCYRlQgFIrEZwj4A%2BPa%2Bw%2Bgd83TFzRCFutcsqCFV21a0dY3py0LFuRMGdMcillUyVX35%2B8JAvDRbt8tKr5DjDbSPH4PQO2v9riaJYnUW%2FQWeYGhLBKf3n%2BBrPrxXJN5mZwdzxzmUBjWd4nbz%2BSc%2BgJXuGpH6SP4E%2FRBoUtXku4HlM4m63f3zkFi87mGb3kjfRN1%2FKPuwJCEx3iml%2BINICc7O8aqFfow73xi0IHWCj2TREA68j%2FhdpNJmytmyBKGk85p30ic3Q5sHMx82K5gbViY8TNXyFcLYY%2Fvl%2FVuENL8VWzjDBsjCgkuPDBjqkAbkKqYZ2FOs3M0HLHS%2BX7rb5QBVsXcf62A2kT64uLouIG2fb2sZ7PhKZ6U4O0tRhNqiSbv2eOkjE0%2FY4DXk%2Bl%2BTY%2FI%2Fz5%2FJd4dXOjS3e%2B4pdklf3eUBuP0%2Fsf0nbOu7BoFWhldVfbySvTmVLSA5SKKGFXUaA9kv5RkaRS1XoVUcaUBfxBEDJorKaIEywwxWStzClH6lepD3YCwxskdNjd26aAZG4&X-Amz-Signature=b1af9cfb98fd1e064095a7e7dd914c9d1db521b762e7b01ea805138d911db7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
