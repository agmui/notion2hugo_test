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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQJJPQL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhidwtNrJQ2TLLnMlqPDZT2Mit2r3FCISqeTLm5ehJZwIgFpSgKMAcVvSEp5C5XqESAHjPLsJzJ4yvxZ%2FLTuFVb5EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUxQRGwe8BQdu0%2BCrcA%2FQYZV5Wbe4SHQO0j9nbfYSJyQBkn9TVtHIxHjXrlyjxGhMM79IdIsiSTtBd93kv1ugl6ZL8dJIWt3jf8gmHPMDL57XYFutj6pFpgo6XMiuT7ci3zfZOdXnzHBaawj6ACTn32HJQ1gpLU9YaIs7es599Z4EkB90%2FOI8ozcTJmPllfsuJWVGJsSwKEEsQLyuXqGKJ1gqiPlB7agPx49NVIij%2F%2BTG%2Fj9PFFvf5BocUsfF3P8tR%2FMEIgxJmWxCeb9lNob05KmxrKSUgrakOlHvETtxs%2FCdJFj5DP01Kft2z%2Bgv%2F6E0PJFBHU%2BKfEDBJMyQEcHKpVDdVrI2mLezxjb9%2FfdewT9lnnVn2uonJ6Jdj4O%2F3PfznaaNMEs8irJc20PZgWMunFqvR2CDvYlJn05sww88PjMjujtKpQhPeFJnfEXnbgmdQpHFj1KfL3RLAhEpmGzkv9dt4%2FAc1X0S00Gc2ArL1wW55FZJkj5xoc0EwqpZFGcZbnmiI5zaMe6ao3Vif17wyUSGV1jq%2F7B6k8fhyxxJ0UnmkpBtY0pOGQo%2Fg7ct1rg6jPJMu8EJ8vGyHeY529gm6lCCfmVtgtTZYiRY3U6Z%2BqufzPZYr9CuVLwKbdcJXXkdn5Ntb1pfsowVtMKr9rMEGOqUB00RCoIugqTix0lboFFlTCOJuulMQlaRUvZSlLxeC1o5pixfw2Qgs6IUE4PGKbmvvlRPfuC07hUHNuF6T5mPzyzKqY7kzSMcSIrT6EF1JTGbGaKl3XWUg7nDKFIt3XfXHPOxvQPTPMPhGeZCa%2FjeAuj1XB7UeMHzCfpZwGErNa%2Fb6fkEueFOOCClnPBYHu%2B4XeVltEPafHAMufzcHL%2BM3Le4DCM93&X-Amz-Signature=83eaf3a69efeed471f87964d313edf6e28e80bad829fc2e0cf9e148bbb42ff8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQJJPQL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhidwtNrJQ2TLLnMlqPDZT2Mit2r3FCISqeTLm5ehJZwIgFpSgKMAcVvSEp5C5XqESAHjPLsJzJ4yvxZ%2FLTuFVb5EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUxQRGwe8BQdu0%2BCrcA%2FQYZV5Wbe4SHQO0j9nbfYSJyQBkn9TVtHIxHjXrlyjxGhMM79IdIsiSTtBd93kv1ugl6ZL8dJIWt3jf8gmHPMDL57XYFutj6pFpgo6XMiuT7ci3zfZOdXnzHBaawj6ACTn32HJQ1gpLU9YaIs7es599Z4EkB90%2FOI8ozcTJmPllfsuJWVGJsSwKEEsQLyuXqGKJ1gqiPlB7agPx49NVIij%2F%2BTG%2Fj9PFFvf5BocUsfF3P8tR%2FMEIgxJmWxCeb9lNob05KmxrKSUgrakOlHvETtxs%2FCdJFj5DP01Kft2z%2Bgv%2F6E0PJFBHU%2BKfEDBJMyQEcHKpVDdVrI2mLezxjb9%2FfdewT9lnnVn2uonJ6Jdj4O%2F3PfznaaNMEs8irJc20PZgWMunFqvR2CDvYlJn05sww88PjMjujtKpQhPeFJnfEXnbgmdQpHFj1KfL3RLAhEpmGzkv9dt4%2FAc1X0S00Gc2ArL1wW55FZJkj5xoc0EwqpZFGcZbnmiI5zaMe6ao3Vif17wyUSGV1jq%2F7B6k8fhyxxJ0UnmkpBtY0pOGQo%2Fg7ct1rg6jPJMu8EJ8vGyHeY529gm6lCCfmVtgtTZYiRY3U6Z%2BqufzPZYr9CuVLwKbdcJXXkdn5Ntb1pfsowVtMKr9rMEGOqUB00RCoIugqTix0lboFFlTCOJuulMQlaRUvZSlLxeC1o5pixfw2Qgs6IUE4PGKbmvvlRPfuC07hUHNuF6T5mPzyzKqY7kzSMcSIrT6EF1JTGbGaKl3XWUg7nDKFIt3XfXHPOxvQPTPMPhGeZCa%2FjeAuj1XB7UeMHzCfpZwGErNa%2Fb6fkEueFOOCClnPBYHu%2B4XeVltEPafHAMufzcHL%2BM3Le4DCM93&X-Amz-Signature=aab1f543460cb421c90eccc66e1d1b311a0e403fffc17c4539e770fb168d1526&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQJJPQL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhidwtNrJQ2TLLnMlqPDZT2Mit2r3FCISqeTLm5ehJZwIgFpSgKMAcVvSEp5C5XqESAHjPLsJzJ4yvxZ%2FLTuFVb5EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUxQRGwe8BQdu0%2BCrcA%2FQYZV5Wbe4SHQO0j9nbfYSJyQBkn9TVtHIxHjXrlyjxGhMM79IdIsiSTtBd93kv1ugl6ZL8dJIWt3jf8gmHPMDL57XYFutj6pFpgo6XMiuT7ci3zfZOdXnzHBaawj6ACTn32HJQ1gpLU9YaIs7es599Z4EkB90%2FOI8ozcTJmPllfsuJWVGJsSwKEEsQLyuXqGKJ1gqiPlB7agPx49NVIij%2F%2BTG%2Fj9PFFvf5BocUsfF3P8tR%2FMEIgxJmWxCeb9lNob05KmxrKSUgrakOlHvETtxs%2FCdJFj5DP01Kft2z%2Bgv%2F6E0PJFBHU%2BKfEDBJMyQEcHKpVDdVrI2mLezxjb9%2FfdewT9lnnVn2uonJ6Jdj4O%2F3PfznaaNMEs8irJc20PZgWMunFqvR2CDvYlJn05sww88PjMjujtKpQhPeFJnfEXnbgmdQpHFj1KfL3RLAhEpmGzkv9dt4%2FAc1X0S00Gc2ArL1wW55FZJkj5xoc0EwqpZFGcZbnmiI5zaMe6ao3Vif17wyUSGV1jq%2F7B6k8fhyxxJ0UnmkpBtY0pOGQo%2Fg7ct1rg6jPJMu8EJ8vGyHeY529gm6lCCfmVtgtTZYiRY3U6Z%2BqufzPZYr9CuVLwKbdcJXXkdn5Ntb1pfsowVtMKr9rMEGOqUB00RCoIugqTix0lboFFlTCOJuulMQlaRUvZSlLxeC1o5pixfw2Qgs6IUE4PGKbmvvlRPfuC07hUHNuF6T5mPzyzKqY7kzSMcSIrT6EF1JTGbGaKl3XWUg7nDKFIt3XfXHPOxvQPTPMPhGeZCa%2FjeAuj1XB7UeMHzCfpZwGErNa%2Fb6fkEueFOOCClnPBYHu%2B4XeVltEPafHAMufzcHL%2BM3Le4DCM93&X-Amz-Signature=6f722ad033f3ac04b30e8980a03bdceea630f8d61c60f2456a3d026d7a914446&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQJJPQL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhidwtNrJQ2TLLnMlqPDZT2Mit2r3FCISqeTLm5ehJZwIgFpSgKMAcVvSEp5C5XqESAHjPLsJzJ4yvxZ%2FLTuFVb5EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUxQRGwe8BQdu0%2BCrcA%2FQYZV5Wbe4SHQO0j9nbfYSJyQBkn9TVtHIxHjXrlyjxGhMM79IdIsiSTtBd93kv1ugl6ZL8dJIWt3jf8gmHPMDL57XYFutj6pFpgo6XMiuT7ci3zfZOdXnzHBaawj6ACTn32HJQ1gpLU9YaIs7es599Z4EkB90%2FOI8ozcTJmPllfsuJWVGJsSwKEEsQLyuXqGKJ1gqiPlB7agPx49NVIij%2F%2BTG%2Fj9PFFvf5BocUsfF3P8tR%2FMEIgxJmWxCeb9lNob05KmxrKSUgrakOlHvETtxs%2FCdJFj5DP01Kft2z%2Bgv%2F6E0PJFBHU%2BKfEDBJMyQEcHKpVDdVrI2mLezxjb9%2FfdewT9lnnVn2uonJ6Jdj4O%2F3PfznaaNMEs8irJc20PZgWMunFqvR2CDvYlJn05sww88PjMjujtKpQhPeFJnfEXnbgmdQpHFj1KfL3RLAhEpmGzkv9dt4%2FAc1X0S00Gc2ArL1wW55FZJkj5xoc0EwqpZFGcZbnmiI5zaMe6ao3Vif17wyUSGV1jq%2F7B6k8fhyxxJ0UnmkpBtY0pOGQo%2Fg7ct1rg6jPJMu8EJ8vGyHeY529gm6lCCfmVtgtTZYiRY3U6Z%2BqufzPZYr9CuVLwKbdcJXXkdn5Ntb1pfsowVtMKr9rMEGOqUB00RCoIugqTix0lboFFlTCOJuulMQlaRUvZSlLxeC1o5pixfw2Qgs6IUE4PGKbmvvlRPfuC07hUHNuF6T5mPzyzKqY7kzSMcSIrT6EF1JTGbGaKl3XWUg7nDKFIt3XfXHPOxvQPTPMPhGeZCa%2FjeAuj1XB7UeMHzCfpZwGErNa%2Fb6fkEueFOOCClnPBYHu%2B4XeVltEPafHAMufzcHL%2BM3Le4DCM93&X-Amz-Signature=1d7d97161b20fb1e4ea3a132e4977982977c1c8f98adec1e78b5477ca98749ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQJJPQL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhidwtNrJQ2TLLnMlqPDZT2Mit2r3FCISqeTLm5ehJZwIgFpSgKMAcVvSEp5C5XqESAHjPLsJzJ4yvxZ%2FLTuFVb5EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUxQRGwe8BQdu0%2BCrcA%2FQYZV5Wbe4SHQO0j9nbfYSJyQBkn9TVtHIxHjXrlyjxGhMM79IdIsiSTtBd93kv1ugl6ZL8dJIWt3jf8gmHPMDL57XYFutj6pFpgo6XMiuT7ci3zfZOdXnzHBaawj6ACTn32HJQ1gpLU9YaIs7es599Z4EkB90%2FOI8ozcTJmPllfsuJWVGJsSwKEEsQLyuXqGKJ1gqiPlB7agPx49NVIij%2F%2BTG%2Fj9PFFvf5BocUsfF3P8tR%2FMEIgxJmWxCeb9lNob05KmxrKSUgrakOlHvETtxs%2FCdJFj5DP01Kft2z%2Bgv%2F6E0PJFBHU%2BKfEDBJMyQEcHKpVDdVrI2mLezxjb9%2FfdewT9lnnVn2uonJ6Jdj4O%2F3PfznaaNMEs8irJc20PZgWMunFqvR2CDvYlJn05sww88PjMjujtKpQhPeFJnfEXnbgmdQpHFj1KfL3RLAhEpmGzkv9dt4%2FAc1X0S00Gc2ArL1wW55FZJkj5xoc0EwqpZFGcZbnmiI5zaMe6ao3Vif17wyUSGV1jq%2F7B6k8fhyxxJ0UnmkpBtY0pOGQo%2Fg7ct1rg6jPJMu8EJ8vGyHeY529gm6lCCfmVtgtTZYiRY3U6Z%2BqufzPZYr9CuVLwKbdcJXXkdn5Ntb1pfsowVtMKr9rMEGOqUB00RCoIugqTix0lboFFlTCOJuulMQlaRUvZSlLxeC1o5pixfw2Qgs6IUE4PGKbmvvlRPfuC07hUHNuF6T5mPzyzKqY7kzSMcSIrT6EF1JTGbGaKl3XWUg7nDKFIt3XfXHPOxvQPTPMPhGeZCa%2FjeAuj1XB7UeMHzCfpZwGErNa%2Fb6fkEueFOOCClnPBYHu%2B4XeVltEPafHAMufzcHL%2BM3Le4DCM93&X-Amz-Signature=fc7fcd634ecfcf575e33ae529217655da4defe65e7b2e8e9e45ad8d06f99bea7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQJJPQL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhidwtNrJQ2TLLnMlqPDZT2Mit2r3FCISqeTLm5ehJZwIgFpSgKMAcVvSEp5C5XqESAHjPLsJzJ4yvxZ%2FLTuFVb5EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUxQRGwe8BQdu0%2BCrcA%2FQYZV5Wbe4SHQO0j9nbfYSJyQBkn9TVtHIxHjXrlyjxGhMM79IdIsiSTtBd93kv1ugl6ZL8dJIWt3jf8gmHPMDL57XYFutj6pFpgo6XMiuT7ci3zfZOdXnzHBaawj6ACTn32HJQ1gpLU9YaIs7es599Z4EkB90%2FOI8ozcTJmPllfsuJWVGJsSwKEEsQLyuXqGKJ1gqiPlB7agPx49NVIij%2F%2BTG%2Fj9PFFvf5BocUsfF3P8tR%2FMEIgxJmWxCeb9lNob05KmxrKSUgrakOlHvETtxs%2FCdJFj5DP01Kft2z%2Bgv%2F6E0PJFBHU%2BKfEDBJMyQEcHKpVDdVrI2mLezxjb9%2FfdewT9lnnVn2uonJ6Jdj4O%2F3PfznaaNMEs8irJc20PZgWMunFqvR2CDvYlJn05sww88PjMjujtKpQhPeFJnfEXnbgmdQpHFj1KfL3RLAhEpmGzkv9dt4%2FAc1X0S00Gc2ArL1wW55FZJkj5xoc0EwqpZFGcZbnmiI5zaMe6ao3Vif17wyUSGV1jq%2F7B6k8fhyxxJ0UnmkpBtY0pOGQo%2Fg7ct1rg6jPJMu8EJ8vGyHeY529gm6lCCfmVtgtTZYiRY3U6Z%2BqufzPZYr9CuVLwKbdcJXXkdn5Ntb1pfsowVtMKr9rMEGOqUB00RCoIugqTix0lboFFlTCOJuulMQlaRUvZSlLxeC1o5pixfw2Qgs6IUE4PGKbmvvlRPfuC07hUHNuF6T5mPzyzKqY7kzSMcSIrT6EF1JTGbGaKl3XWUg7nDKFIt3XfXHPOxvQPTPMPhGeZCa%2FjeAuj1XB7UeMHzCfpZwGErNa%2Fb6fkEueFOOCClnPBYHu%2B4XeVltEPafHAMufzcHL%2BM3Le4DCM93&X-Amz-Signature=73526e11d1b6c2649a001d0815d9d9edb98177096e3fcf9aa4c348ad5e82df2d&X-Amz-SignedHeaders=host&x-id=GetObject)
