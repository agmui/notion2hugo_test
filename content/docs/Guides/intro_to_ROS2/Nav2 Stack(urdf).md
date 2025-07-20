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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=24ea51d20757f5ba0107c17e3c2a536707ac1d809dee278ef7ea11b059c2b241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=6bac66c81af12caf8a363683bbb43fa94862472e284ade879c9344ed06578199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=261311a4eadacdd849c5c84edd385333e5951a3674df4437ddf88fae6cbcd3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=a65f42e18763831ea164f42ca7aab8843d68e14564381f7efba6d9a0bec015fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=36139713f6df3af0120a90ec0b3a1fe7a49ffb80d46a90679506d924e6838632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=21f63eeb7317756aa82b07ff49eee97ba9a68ad747a15a9d89ebfe365323967b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
