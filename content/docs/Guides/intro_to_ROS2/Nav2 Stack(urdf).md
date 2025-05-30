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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RVEJLO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu92TYdkV83CdDq%2FFDsG2LtQzvHcT7B0AXGNYO8wAf1AiEA0VHGb9iKMQEEg9mN1IxkYyFSbdlPUC2eKr55VZ5VYJQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOq6dEnKa%2FNNzRNSrcA0WPzgb%2FsvpBuvWVuWRLULKEz4fAuyr0nhsbMHCiJVeCxJji0B0UK5m%2F0zs9mIqi%2FRbL4qBlrc25gcouBIoBajdzQvikCEL4emOaUjtTBGEWX5vs0J%2FPskuljB%2BqKUfRc7cHGFe2Pkwkjw4nx2ztIck9mU7guJa4mxK%2BgUPfkv8Qv9REQZ9YovDQ1a3Zw5AU2EpsdWiawabJpq38LHp3vqiB22pztzd98Kc347Y2MtLWh9ePsL%2FBEQTd0ongX30e2gNPnum%2BqIHA%2FDz3JgDa6GSnPXxN%2BU1VlzhvCd4zBjoUKpqsMe6lJyIMEsR8Gn7SVqu87Y62OMo6iu8HM8dmAKLqEWNznXWcV%2FOdqF2WGwoN6kzRACixOvvpN2x5xTM%2BrHdEYcNs9k7igMHbk4iGR60lFf%2FwEKNF0ANd43ai6AMlkpe7wIYwyTBW9kINy%2Bg0TBqgdAJARjJw2enpPuDcAt4GrW0UxYer05S8p31ms%2B95cEiFkgkWmMcEE026g4WkkniJYiP0eSZUaJf7nwVYI4nrX6HX%2BFMgCUWE%2BSANn%2BQRJjKO959ytt3erOSJJqhLDZcKv0uao2yLg28J4GapENFOZpX8SHxtuyrvIGYmQFg8%2F2btwdkylfuJ6PsGMIyO5sEGOqUBHU9IHDaYMRBbTU9seqxcwJ02RoCyiH7GYhYa46KbRDiKa9e5o3CQWvT0hHTz0rcgUHX6LnNVspYJHxlgvo4NUx9PkpOHCpUJjbGRgOahlCeTFWcCCpk%2FIFYAtj4tRoxfQ29O360BktuYghKqwtq1UKWBaCUBC3%2BMlGFnEe2Jw592nQlLN6vw6YqZYx2eWHdtig3EEkNKQY1E%2BtvIM6SnqmmIv7fM&X-Amz-Signature=0e7d58682b216b4ef44d4ba9fa686958c975385c8cf3feb50f70d0202d3bb289&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RVEJLO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu92TYdkV83CdDq%2FFDsG2LtQzvHcT7B0AXGNYO8wAf1AiEA0VHGb9iKMQEEg9mN1IxkYyFSbdlPUC2eKr55VZ5VYJQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOq6dEnKa%2FNNzRNSrcA0WPzgb%2FsvpBuvWVuWRLULKEz4fAuyr0nhsbMHCiJVeCxJji0B0UK5m%2F0zs9mIqi%2FRbL4qBlrc25gcouBIoBajdzQvikCEL4emOaUjtTBGEWX5vs0J%2FPskuljB%2BqKUfRc7cHGFe2Pkwkjw4nx2ztIck9mU7guJa4mxK%2BgUPfkv8Qv9REQZ9YovDQ1a3Zw5AU2EpsdWiawabJpq38LHp3vqiB22pztzd98Kc347Y2MtLWh9ePsL%2FBEQTd0ongX30e2gNPnum%2BqIHA%2FDz3JgDa6GSnPXxN%2BU1VlzhvCd4zBjoUKpqsMe6lJyIMEsR8Gn7SVqu87Y62OMo6iu8HM8dmAKLqEWNznXWcV%2FOdqF2WGwoN6kzRACixOvvpN2x5xTM%2BrHdEYcNs9k7igMHbk4iGR60lFf%2FwEKNF0ANd43ai6AMlkpe7wIYwyTBW9kINy%2Bg0TBqgdAJARjJw2enpPuDcAt4GrW0UxYer05S8p31ms%2B95cEiFkgkWmMcEE026g4WkkniJYiP0eSZUaJf7nwVYI4nrX6HX%2BFMgCUWE%2BSANn%2BQRJjKO959ytt3erOSJJqhLDZcKv0uao2yLg28J4GapENFOZpX8SHxtuyrvIGYmQFg8%2F2btwdkylfuJ6PsGMIyO5sEGOqUBHU9IHDaYMRBbTU9seqxcwJ02RoCyiH7GYhYa46KbRDiKa9e5o3CQWvT0hHTz0rcgUHX6LnNVspYJHxlgvo4NUx9PkpOHCpUJjbGRgOahlCeTFWcCCpk%2FIFYAtj4tRoxfQ29O360BktuYghKqwtq1UKWBaCUBC3%2BMlGFnEe2Jw592nQlLN6vw6YqZYx2eWHdtig3EEkNKQY1E%2BtvIM6SnqmmIv7fM&X-Amz-Signature=d60432a69a78d577a9c5bd9eadcafc65476974e40073102a169e502b7bbf3e08&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RVEJLO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu92TYdkV83CdDq%2FFDsG2LtQzvHcT7B0AXGNYO8wAf1AiEA0VHGb9iKMQEEg9mN1IxkYyFSbdlPUC2eKr55VZ5VYJQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOq6dEnKa%2FNNzRNSrcA0WPzgb%2FsvpBuvWVuWRLULKEz4fAuyr0nhsbMHCiJVeCxJji0B0UK5m%2F0zs9mIqi%2FRbL4qBlrc25gcouBIoBajdzQvikCEL4emOaUjtTBGEWX5vs0J%2FPskuljB%2BqKUfRc7cHGFe2Pkwkjw4nx2ztIck9mU7guJa4mxK%2BgUPfkv8Qv9REQZ9YovDQ1a3Zw5AU2EpsdWiawabJpq38LHp3vqiB22pztzd98Kc347Y2MtLWh9ePsL%2FBEQTd0ongX30e2gNPnum%2BqIHA%2FDz3JgDa6GSnPXxN%2BU1VlzhvCd4zBjoUKpqsMe6lJyIMEsR8Gn7SVqu87Y62OMo6iu8HM8dmAKLqEWNznXWcV%2FOdqF2WGwoN6kzRACixOvvpN2x5xTM%2BrHdEYcNs9k7igMHbk4iGR60lFf%2FwEKNF0ANd43ai6AMlkpe7wIYwyTBW9kINy%2Bg0TBqgdAJARjJw2enpPuDcAt4GrW0UxYer05S8p31ms%2B95cEiFkgkWmMcEE026g4WkkniJYiP0eSZUaJf7nwVYI4nrX6HX%2BFMgCUWE%2BSANn%2BQRJjKO959ytt3erOSJJqhLDZcKv0uao2yLg28J4GapENFOZpX8SHxtuyrvIGYmQFg8%2F2btwdkylfuJ6PsGMIyO5sEGOqUBHU9IHDaYMRBbTU9seqxcwJ02RoCyiH7GYhYa46KbRDiKa9e5o3CQWvT0hHTz0rcgUHX6LnNVspYJHxlgvo4NUx9PkpOHCpUJjbGRgOahlCeTFWcCCpk%2FIFYAtj4tRoxfQ29O360BktuYghKqwtq1UKWBaCUBC3%2BMlGFnEe2Jw592nQlLN6vw6YqZYx2eWHdtig3EEkNKQY1E%2BtvIM6SnqmmIv7fM&X-Amz-Signature=d4364ca7716781958aa4cf1177ba97cba963f998e73319d4dc05afe1c2099e26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RVEJLO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu92TYdkV83CdDq%2FFDsG2LtQzvHcT7B0AXGNYO8wAf1AiEA0VHGb9iKMQEEg9mN1IxkYyFSbdlPUC2eKr55VZ5VYJQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOq6dEnKa%2FNNzRNSrcA0WPzgb%2FsvpBuvWVuWRLULKEz4fAuyr0nhsbMHCiJVeCxJji0B0UK5m%2F0zs9mIqi%2FRbL4qBlrc25gcouBIoBajdzQvikCEL4emOaUjtTBGEWX5vs0J%2FPskuljB%2BqKUfRc7cHGFe2Pkwkjw4nx2ztIck9mU7guJa4mxK%2BgUPfkv8Qv9REQZ9YovDQ1a3Zw5AU2EpsdWiawabJpq38LHp3vqiB22pztzd98Kc347Y2MtLWh9ePsL%2FBEQTd0ongX30e2gNPnum%2BqIHA%2FDz3JgDa6GSnPXxN%2BU1VlzhvCd4zBjoUKpqsMe6lJyIMEsR8Gn7SVqu87Y62OMo6iu8HM8dmAKLqEWNznXWcV%2FOdqF2WGwoN6kzRACixOvvpN2x5xTM%2BrHdEYcNs9k7igMHbk4iGR60lFf%2FwEKNF0ANd43ai6AMlkpe7wIYwyTBW9kINy%2Bg0TBqgdAJARjJw2enpPuDcAt4GrW0UxYer05S8p31ms%2B95cEiFkgkWmMcEE026g4WkkniJYiP0eSZUaJf7nwVYI4nrX6HX%2BFMgCUWE%2BSANn%2BQRJjKO959ytt3erOSJJqhLDZcKv0uao2yLg28J4GapENFOZpX8SHxtuyrvIGYmQFg8%2F2btwdkylfuJ6PsGMIyO5sEGOqUBHU9IHDaYMRBbTU9seqxcwJ02RoCyiH7GYhYa46KbRDiKa9e5o3CQWvT0hHTz0rcgUHX6LnNVspYJHxlgvo4NUx9PkpOHCpUJjbGRgOahlCeTFWcCCpk%2FIFYAtj4tRoxfQ29O360BktuYghKqwtq1UKWBaCUBC3%2BMlGFnEe2Jw592nQlLN6vw6YqZYx2eWHdtig3EEkNKQY1E%2BtvIM6SnqmmIv7fM&X-Amz-Signature=b476d96dcfc10c4b5c96c4c1b102039d53bacd49f14a275125b73565e1dc0e38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RVEJLO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu92TYdkV83CdDq%2FFDsG2LtQzvHcT7B0AXGNYO8wAf1AiEA0VHGb9iKMQEEg9mN1IxkYyFSbdlPUC2eKr55VZ5VYJQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOq6dEnKa%2FNNzRNSrcA0WPzgb%2FsvpBuvWVuWRLULKEz4fAuyr0nhsbMHCiJVeCxJji0B0UK5m%2F0zs9mIqi%2FRbL4qBlrc25gcouBIoBajdzQvikCEL4emOaUjtTBGEWX5vs0J%2FPskuljB%2BqKUfRc7cHGFe2Pkwkjw4nx2ztIck9mU7guJa4mxK%2BgUPfkv8Qv9REQZ9YovDQ1a3Zw5AU2EpsdWiawabJpq38LHp3vqiB22pztzd98Kc347Y2MtLWh9ePsL%2FBEQTd0ongX30e2gNPnum%2BqIHA%2FDz3JgDa6GSnPXxN%2BU1VlzhvCd4zBjoUKpqsMe6lJyIMEsR8Gn7SVqu87Y62OMo6iu8HM8dmAKLqEWNznXWcV%2FOdqF2WGwoN6kzRACixOvvpN2x5xTM%2BrHdEYcNs9k7igMHbk4iGR60lFf%2FwEKNF0ANd43ai6AMlkpe7wIYwyTBW9kINy%2Bg0TBqgdAJARjJw2enpPuDcAt4GrW0UxYer05S8p31ms%2B95cEiFkgkWmMcEE026g4WkkniJYiP0eSZUaJf7nwVYI4nrX6HX%2BFMgCUWE%2BSANn%2BQRJjKO959ytt3erOSJJqhLDZcKv0uao2yLg28J4GapENFOZpX8SHxtuyrvIGYmQFg8%2F2btwdkylfuJ6PsGMIyO5sEGOqUBHU9IHDaYMRBbTU9seqxcwJ02RoCyiH7GYhYa46KbRDiKa9e5o3CQWvT0hHTz0rcgUHX6LnNVspYJHxlgvo4NUx9PkpOHCpUJjbGRgOahlCeTFWcCCpk%2FIFYAtj4tRoxfQ29O360BktuYghKqwtq1UKWBaCUBC3%2BMlGFnEe2Jw592nQlLN6vw6YqZYx2eWHdtig3EEkNKQY1E%2BtvIM6SnqmmIv7fM&X-Amz-Signature=a06ed8cfc4b10410ef3aa414ef68e1c4586ff2f21e10925e0800e028c22427aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RVEJLO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu92TYdkV83CdDq%2FFDsG2LtQzvHcT7B0AXGNYO8wAf1AiEA0VHGb9iKMQEEg9mN1IxkYyFSbdlPUC2eKr55VZ5VYJQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOq6dEnKa%2FNNzRNSrcA0WPzgb%2FsvpBuvWVuWRLULKEz4fAuyr0nhsbMHCiJVeCxJji0B0UK5m%2F0zs9mIqi%2FRbL4qBlrc25gcouBIoBajdzQvikCEL4emOaUjtTBGEWX5vs0J%2FPskuljB%2BqKUfRc7cHGFe2Pkwkjw4nx2ztIck9mU7guJa4mxK%2BgUPfkv8Qv9REQZ9YovDQ1a3Zw5AU2EpsdWiawabJpq38LHp3vqiB22pztzd98Kc347Y2MtLWh9ePsL%2FBEQTd0ongX30e2gNPnum%2BqIHA%2FDz3JgDa6GSnPXxN%2BU1VlzhvCd4zBjoUKpqsMe6lJyIMEsR8Gn7SVqu87Y62OMo6iu8HM8dmAKLqEWNznXWcV%2FOdqF2WGwoN6kzRACixOvvpN2x5xTM%2BrHdEYcNs9k7igMHbk4iGR60lFf%2FwEKNF0ANd43ai6AMlkpe7wIYwyTBW9kINy%2Bg0TBqgdAJARjJw2enpPuDcAt4GrW0UxYer05S8p31ms%2B95cEiFkgkWmMcEE026g4WkkniJYiP0eSZUaJf7nwVYI4nrX6HX%2BFMgCUWE%2BSANn%2BQRJjKO959ytt3erOSJJqhLDZcKv0uao2yLg28J4GapENFOZpX8SHxtuyrvIGYmQFg8%2F2btwdkylfuJ6PsGMIyO5sEGOqUBHU9IHDaYMRBbTU9seqxcwJ02RoCyiH7GYhYa46KbRDiKa9e5o3CQWvT0hHTz0rcgUHX6LnNVspYJHxlgvo4NUx9PkpOHCpUJjbGRgOahlCeTFWcCCpk%2FIFYAtj4tRoxfQ29O360BktuYghKqwtq1UKWBaCUBC3%2BMlGFnEe2Jw592nQlLN6vw6YqZYx2eWHdtig3EEkNKQY1E%2BtvIM6SnqmmIv7fM&X-Amz-Signature=93dbf1e2ffc9139a205d0ecedfb29fee84feb536acc5111a9dd13c2b4236cad8&X-Amz-SignedHeaders=host&x-id=GetObject)
