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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637X3VV77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN05BYToiAgrrtv0zwSigA%2FK3xsq%2BWwlq5tjBuySHR7AiEAjrk9mxqUl2YVheaY7FfdHludpbibqRG0KZ4X%2FqixeNoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD1fRajY3qwZ8g3SSrcA9DIQKxc6znOURyWFX9te6tuu2I8YmmJqUfw%2F%2FeUVJotgFIjxCTHN9on%2BEsZRTdXmeI0mDjb30WobaFx8MREOYBQAxe%2B76bHO%2Beap4a775WnW%2FDBs0o%2FDNxHZXcHZ0ZuSVgDGjIyEGV68GPWfYvTIUucoP5qXMerhmRax4kBKMqAbgJorGATKWZahEMr8s5Fnd%2B0FjkrhoK%2BzmdPl0GHsJ4vqJLp4%2FdVSGFU7V6qE1JTNKlt6NnHG5TJzZZ4pnLs56%2F8iHnSsdw0F3uXvnXF7%2FZ0oJgivH2U7N9ztAAPlR7S1UZN1tumAw4gba95k6cwu6WLo6Hb2WAQIhELj4Tjw%2BSsN4bdVrQXBqF3GM8g4MfJo8tpUVDWZ1%2BJ3fLNsgT%2FYeuBV6YVoTzNVeVsJjfJoU8M4zlgEGdutWyk5s6YWBJwDdwH%2BmbdrBrSwYciJJspILQ5GkDsuLBK5IkXs0hCNMNOxGfWBc882YDoPo51dCe%2FbsKVlrZWfa1OqPUkYutKdcB%2BzK8yDBYh8VLz8wRuEgHOdrS92XiktTehjZn0DkQgNvxRALPBpLdH3qAc%2Bp2kdCrpORZshSzvaxPzdG2GmDW97MQClio%2BNi%2B4PgvzoFH8%2BXt2K7s2M%2FMt7zejMOXH%2BLwGOqUBxtKUAm4xyH5wnpZPPQV3C2BZYBnCk3hHZ%2BRBzoL9p8mqIgOGaGMPe3bIuKYQrkHbdofsoUaIqgoqQGPu0m%2FCXuIGwU4uAcE2UjOL4TWrkajo2iahY16ofGdUphGHpzEoa3cAhHgoede8%2FJScheCejkiv9qSHmDYV849EFsQVK0wmSOMJyQhjtDwldshxUZ4SbnmCwCmryunlkU6Iga3kVcawO2oJ&X-Amz-Signature=53ef78650d89f09eaf0333d8523ea91a15b74aa9d9e54eb799f2d98119c97c24&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637X3VV77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN05BYToiAgrrtv0zwSigA%2FK3xsq%2BWwlq5tjBuySHR7AiEAjrk9mxqUl2YVheaY7FfdHludpbibqRG0KZ4X%2FqixeNoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD1fRajY3qwZ8g3SSrcA9DIQKxc6znOURyWFX9te6tuu2I8YmmJqUfw%2F%2FeUVJotgFIjxCTHN9on%2BEsZRTdXmeI0mDjb30WobaFx8MREOYBQAxe%2B76bHO%2Beap4a775WnW%2FDBs0o%2FDNxHZXcHZ0ZuSVgDGjIyEGV68GPWfYvTIUucoP5qXMerhmRax4kBKMqAbgJorGATKWZahEMr8s5Fnd%2B0FjkrhoK%2BzmdPl0GHsJ4vqJLp4%2FdVSGFU7V6qE1JTNKlt6NnHG5TJzZZ4pnLs56%2F8iHnSsdw0F3uXvnXF7%2FZ0oJgivH2U7N9ztAAPlR7S1UZN1tumAw4gba95k6cwu6WLo6Hb2WAQIhELj4Tjw%2BSsN4bdVrQXBqF3GM8g4MfJo8tpUVDWZ1%2BJ3fLNsgT%2FYeuBV6YVoTzNVeVsJjfJoU8M4zlgEGdutWyk5s6YWBJwDdwH%2BmbdrBrSwYciJJspILQ5GkDsuLBK5IkXs0hCNMNOxGfWBc882YDoPo51dCe%2FbsKVlrZWfa1OqPUkYutKdcB%2BzK8yDBYh8VLz8wRuEgHOdrS92XiktTehjZn0DkQgNvxRALPBpLdH3qAc%2Bp2kdCrpORZshSzvaxPzdG2GmDW97MQClio%2BNi%2B4PgvzoFH8%2BXt2K7s2M%2FMt7zejMOXH%2BLwGOqUBxtKUAm4xyH5wnpZPPQV3C2BZYBnCk3hHZ%2BRBzoL9p8mqIgOGaGMPe3bIuKYQrkHbdofsoUaIqgoqQGPu0m%2FCXuIGwU4uAcE2UjOL4TWrkajo2iahY16ofGdUphGHpzEoa3cAhHgoede8%2FJScheCejkiv9qSHmDYV849EFsQVK0wmSOMJyQhjtDwldshxUZ4SbnmCwCmryunlkU6Iga3kVcawO2oJ&X-Amz-Signature=1af64a435c31d1a54d451bf0f287639f9f9f4ad31a39f8cc0489251fd0709a62&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637X3VV77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN05BYToiAgrrtv0zwSigA%2FK3xsq%2BWwlq5tjBuySHR7AiEAjrk9mxqUl2YVheaY7FfdHludpbibqRG0KZ4X%2FqixeNoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD1fRajY3qwZ8g3SSrcA9DIQKxc6znOURyWFX9te6tuu2I8YmmJqUfw%2F%2FeUVJotgFIjxCTHN9on%2BEsZRTdXmeI0mDjb30WobaFx8MREOYBQAxe%2B76bHO%2Beap4a775WnW%2FDBs0o%2FDNxHZXcHZ0ZuSVgDGjIyEGV68GPWfYvTIUucoP5qXMerhmRax4kBKMqAbgJorGATKWZahEMr8s5Fnd%2B0FjkrhoK%2BzmdPl0GHsJ4vqJLp4%2FdVSGFU7V6qE1JTNKlt6NnHG5TJzZZ4pnLs56%2F8iHnSsdw0F3uXvnXF7%2FZ0oJgivH2U7N9ztAAPlR7S1UZN1tumAw4gba95k6cwu6WLo6Hb2WAQIhELj4Tjw%2BSsN4bdVrQXBqF3GM8g4MfJo8tpUVDWZ1%2BJ3fLNsgT%2FYeuBV6YVoTzNVeVsJjfJoU8M4zlgEGdutWyk5s6YWBJwDdwH%2BmbdrBrSwYciJJspILQ5GkDsuLBK5IkXs0hCNMNOxGfWBc882YDoPo51dCe%2FbsKVlrZWfa1OqPUkYutKdcB%2BzK8yDBYh8VLz8wRuEgHOdrS92XiktTehjZn0DkQgNvxRALPBpLdH3qAc%2Bp2kdCrpORZshSzvaxPzdG2GmDW97MQClio%2BNi%2B4PgvzoFH8%2BXt2K7s2M%2FMt7zejMOXH%2BLwGOqUBxtKUAm4xyH5wnpZPPQV3C2BZYBnCk3hHZ%2BRBzoL9p8mqIgOGaGMPe3bIuKYQrkHbdofsoUaIqgoqQGPu0m%2FCXuIGwU4uAcE2UjOL4TWrkajo2iahY16ofGdUphGHpzEoa3cAhHgoede8%2FJScheCejkiv9qSHmDYV849EFsQVK0wmSOMJyQhjtDwldshxUZ4SbnmCwCmryunlkU6Iga3kVcawO2oJ&X-Amz-Signature=3c8f0cb3d08887b8eb368c6ad53e2f7099e308a96506e4b97483ac2720a7660c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637X3VV77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN05BYToiAgrrtv0zwSigA%2FK3xsq%2BWwlq5tjBuySHR7AiEAjrk9mxqUl2YVheaY7FfdHludpbibqRG0KZ4X%2FqixeNoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD1fRajY3qwZ8g3SSrcA9DIQKxc6znOURyWFX9te6tuu2I8YmmJqUfw%2F%2FeUVJotgFIjxCTHN9on%2BEsZRTdXmeI0mDjb30WobaFx8MREOYBQAxe%2B76bHO%2Beap4a775WnW%2FDBs0o%2FDNxHZXcHZ0ZuSVgDGjIyEGV68GPWfYvTIUucoP5qXMerhmRax4kBKMqAbgJorGATKWZahEMr8s5Fnd%2B0FjkrhoK%2BzmdPl0GHsJ4vqJLp4%2FdVSGFU7V6qE1JTNKlt6NnHG5TJzZZ4pnLs56%2F8iHnSsdw0F3uXvnXF7%2FZ0oJgivH2U7N9ztAAPlR7S1UZN1tumAw4gba95k6cwu6WLo6Hb2WAQIhELj4Tjw%2BSsN4bdVrQXBqF3GM8g4MfJo8tpUVDWZ1%2BJ3fLNsgT%2FYeuBV6YVoTzNVeVsJjfJoU8M4zlgEGdutWyk5s6YWBJwDdwH%2BmbdrBrSwYciJJspILQ5GkDsuLBK5IkXs0hCNMNOxGfWBc882YDoPo51dCe%2FbsKVlrZWfa1OqPUkYutKdcB%2BzK8yDBYh8VLz8wRuEgHOdrS92XiktTehjZn0DkQgNvxRALPBpLdH3qAc%2Bp2kdCrpORZshSzvaxPzdG2GmDW97MQClio%2BNi%2B4PgvzoFH8%2BXt2K7s2M%2FMt7zejMOXH%2BLwGOqUBxtKUAm4xyH5wnpZPPQV3C2BZYBnCk3hHZ%2BRBzoL9p8mqIgOGaGMPe3bIuKYQrkHbdofsoUaIqgoqQGPu0m%2FCXuIGwU4uAcE2UjOL4TWrkajo2iahY16ofGdUphGHpzEoa3cAhHgoede8%2FJScheCejkiv9qSHmDYV849EFsQVK0wmSOMJyQhjtDwldshxUZ4SbnmCwCmryunlkU6Iga3kVcawO2oJ&X-Amz-Signature=bcd5e528e95bb4cf89b061fd062a21305ff1828b4e17763683cccce4ea6a9a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637X3VV77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN05BYToiAgrrtv0zwSigA%2FK3xsq%2BWwlq5tjBuySHR7AiEAjrk9mxqUl2YVheaY7FfdHludpbibqRG0KZ4X%2FqixeNoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD1fRajY3qwZ8g3SSrcA9DIQKxc6znOURyWFX9te6tuu2I8YmmJqUfw%2F%2FeUVJotgFIjxCTHN9on%2BEsZRTdXmeI0mDjb30WobaFx8MREOYBQAxe%2B76bHO%2Beap4a775WnW%2FDBs0o%2FDNxHZXcHZ0ZuSVgDGjIyEGV68GPWfYvTIUucoP5qXMerhmRax4kBKMqAbgJorGATKWZahEMr8s5Fnd%2B0FjkrhoK%2BzmdPl0GHsJ4vqJLp4%2FdVSGFU7V6qE1JTNKlt6NnHG5TJzZZ4pnLs56%2F8iHnSsdw0F3uXvnXF7%2FZ0oJgivH2U7N9ztAAPlR7S1UZN1tumAw4gba95k6cwu6WLo6Hb2WAQIhELj4Tjw%2BSsN4bdVrQXBqF3GM8g4MfJo8tpUVDWZ1%2BJ3fLNsgT%2FYeuBV6YVoTzNVeVsJjfJoU8M4zlgEGdutWyk5s6YWBJwDdwH%2BmbdrBrSwYciJJspILQ5GkDsuLBK5IkXs0hCNMNOxGfWBc882YDoPo51dCe%2FbsKVlrZWfa1OqPUkYutKdcB%2BzK8yDBYh8VLz8wRuEgHOdrS92XiktTehjZn0DkQgNvxRALPBpLdH3qAc%2Bp2kdCrpORZshSzvaxPzdG2GmDW97MQClio%2BNi%2B4PgvzoFH8%2BXt2K7s2M%2FMt7zejMOXH%2BLwGOqUBxtKUAm4xyH5wnpZPPQV3C2BZYBnCk3hHZ%2BRBzoL9p8mqIgOGaGMPe3bIuKYQrkHbdofsoUaIqgoqQGPu0m%2FCXuIGwU4uAcE2UjOL4TWrkajo2iahY16ofGdUphGHpzEoa3cAhHgoede8%2FJScheCejkiv9qSHmDYV849EFsQVK0wmSOMJyQhjtDwldshxUZ4SbnmCwCmryunlkU6Iga3kVcawO2oJ&X-Amz-Signature=59c3780ac37af8bc736d7479d996ae8db9490826094172e47617fabdbce309c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637X3VV77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN05BYToiAgrrtv0zwSigA%2FK3xsq%2BWwlq5tjBuySHR7AiEAjrk9mxqUl2YVheaY7FfdHludpbibqRG0KZ4X%2FqixeNoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD1fRajY3qwZ8g3SSrcA9DIQKxc6znOURyWFX9te6tuu2I8YmmJqUfw%2F%2FeUVJotgFIjxCTHN9on%2BEsZRTdXmeI0mDjb30WobaFx8MREOYBQAxe%2B76bHO%2Beap4a775WnW%2FDBs0o%2FDNxHZXcHZ0ZuSVgDGjIyEGV68GPWfYvTIUucoP5qXMerhmRax4kBKMqAbgJorGATKWZahEMr8s5Fnd%2B0FjkrhoK%2BzmdPl0GHsJ4vqJLp4%2FdVSGFU7V6qE1JTNKlt6NnHG5TJzZZ4pnLs56%2F8iHnSsdw0F3uXvnXF7%2FZ0oJgivH2U7N9ztAAPlR7S1UZN1tumAw4gba95k6cwu6WLo6Hb2WAQIhELj4Tjw%2BSsN4bdVrQXBqF3GM8g4MfJo8tpUVDWZ1%2BJ3fLNsgT%2FYeuBV6YVoTzNVeVsJjfJoU8M4zlgEGdutWyk5s6YWBJwDdwH%2BmbdrBrSwYciJJspILQ5GkDsuLBK5IkXs0hCNMNOxGfWBc882YDoPo51dCe%2FbsKVlrZWfa1OqPUkYutKdcB%2BzK8yDBYh8VLz8wRuEgHOdrS92XiktTehjZn0DkQgNvxRALPBpLdH3qAc%2Bp2kdCrpORZshSzvaxPzdG2GmDW97MQClio%2BNi%2B4PgvzoFH8%2BXt2K7s2M%2FMt7zejMOXH%2BLwGOqUBxtKUAm4xyH5wnpZPPQV3C2BZYBnCk3hHZ%2BRBzoL9p8mqIgOGaGMPe3bIuKYQrkHbdofsoUaIqgoqQGPu0m%2FCXuIGwU4uAcE2UjOL4TWrkajo2iahY16ofGdUphGHpzEoa3cAhHgoede8%2FJScheCejkiv9qSHmDYV849EFsQVK0wmSOMJyQhjtDwldshxUZ4SbnmCwCmryunlkU6Iga3kVcawO2oJ&X-Amz-Signature=9cccd226f7e087ff1eb5d5971d08a019d65d5626f2196e69cba6368165ec455f&X-Amz-SignedHeaders=host&x-id=GetObject)
