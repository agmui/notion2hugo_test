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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQMCN2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID%2FmhIiq%2BFCZDk%2BAD%2FeqmFQ83d97y5B%2FYBa2pqko48GWAiEAyqjXOsD3ljUS89O22pdfhav%2FVbXyvmXMZhVGz6adQc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwbaT%2FeW15QJCBmeyrcA0kyKiySCa8Rl4u2qdZTtT82s4Uu3BBxFLEfTE9g8JBbPXU4PETOzF0CJEUyVkCWkmrYKlugVuHjyOVz%2FYKUFYNeHWwUCMtAZel8Nh%2FTApHkwcDIRsHx26rzlqVqXa0bPFn1NUXDDSZjOTDPE4QB9JoJo1WkhhbnSy2HGygRw%2B0lsBx8TDTDxHyw8tUzy%2F7Z0Pb2K09sCRRGZM2iSg4mzc3uB4SUeGmM9DvtY1FWfPP8Rlg3zfr9thkARqzuIJCWbICwtZPu%2F36s%2BVA38diYa%2BHy1kZ%2BXO1GpdsLuXDFcOQvxCjmxTggHYdsAAU5ldkMhHIE5ZUf02TNwnqLVLTgQzt8UR3X9%2FgwP9YzQ%2B47JLKl4Hzn%2FrE6LiqT8%2FjAsdFmzFjWfUvKva2qhrrTfI8Lqlt6aJOeX9kLs9QYWpJwTDLp1ZAi3Tcx%2FHyunyV90CSIHnjvLPbMqy6RQgqPImQM1RvU1yDceOXI6HMoPfXj5fP3O%2BUqCFjBgRKU7B%2Bj7sLd%2BZjPVz6WqmbEK0VfccLApnfDAh3TdbzFHaMDa%2FGO3XSH02YwYayP0RC%2F0TjONaU%2BC1DdXt1IpuIIjdFgwRQnbwd481WjCssvumiCT%2FfmXgKSOUE%2FFd1%2BdzVuPju%2BMKel8L4GOqUBFfUNzqpFMrIqQhAX4k33eySb529olirt8BiaTOyQVy7ieazQ%2FQPz9u8pIv7KLksCxWclS0fUGqZ20ezZA6iEMk9lVcVYkjNi5K1JBDCR3z%2F3Xl3G4PwngoisnFQzrehtxkaJwfNIhOdiFdiAh3JgYENCSWMEmqrV4tBQZAhJAglJN94846kvit7WTu68TBHraBzUa9eeqe42lk02CyRlG1nwOI8l&X-Amz-Signature=87f716bcd7d9175ab4a9cdde8842fbf259191f6aab973bc90fc521c3d09d0d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQMCN2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID%2FmhIiq%2BFCZDk%2BAD%2FeqmFQ83d97y5B%2FYBa2pqko48GWAiEAyqjXOsD3ljUS89O22pdfhav%2FVbXyvmXMZhVGz6adQc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwbaT%2FeW15QJCBmeyrcA0kyKiySCa8Rl4u2qdZTtT82s4Uu3BBxFLEfTE9g8JBbPXU4PETOzF0CJEUyVkCWkmrYKlugVuHjyOVz%2FYKUFYNeHWwUCMtAZel8Nh%2FTApHkwcDIRsHx26rzlqVqXa0bPFn1NUXDDSZjOTDPE4QB9JoJo1WkhhbnSy2HGygRw%2B0lsBx8TDTDxHyw8tUzy%2F7Z0Pb2K09sCRRGZM2iSg4mzc3uB4SUeGmM9DvtY1FWfPP8Rlg3zfr9thkARqzuIJCWbICwtZPu%2F36s%2BVA38diYa%2BHy1kZ%2BXO1GpdsLuXDFcOQvxCjmxTggHYdsAAU5ldkMhHIE5ZUf02TNwnqLVLTgQzt8UR3X9%2FgwP9YzQ%2B47JLKl4Hzn%2FrE6LiqT8%2FjAsdFmzFjWfUvKva2qhrrTfI8Lqlt6aJOeX9kLs9QYWpJwTDLp1ZAi3Tcx%2FHyunyV90CSIHnjvLPbMqy6RQgqPImQM1RvU1yDceOXI6HMoPfXj5fP3O%2BUqCFjBgRKU7B%2Bj7sLd%2BZjPVz6WqmbEK0VfccLApnfDAh3TdbzFHaMDa%2FGO3XSH02YwYayP0RC%2F0TjONaU%2BC1DdXt1IpuIIjdFgwRQnbwd481WjCssvumiCT%2FfmXgKSOUE%2FFd1%2BdzVuPju%2BMKel8L4GOqUBFfUNzqpFMrIqQhAX4k33eySb529olirt8BiaTOyQVy7ieazQ%2FQPz9u8pIv7KLksCxWclS0fUGqZ20ezZA6iEMk9lVcVYkjNi5K1JBDCR3z%2F3Xl3G4PwngoisnFQzrehtxkaJwfNIhOdiFdiAh3JgYENCSWMEmqrV4tBQZAhJAglJN94846kvit7WTu68TBHraBzUa9eeqe42lk02CyRlG1nwOI8l&X-Amz-Signature=fe51725e44dfabd519862d1f99ddb6c5859d1ec02959d23cf026c387d4ee1420&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQMCN2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID%2FmhIiq%2BFCZDk%2BAD%2FeqmFQ83d97y5B%2FYBa2pqko48GWAiEAyqjXOsD3ljUS89O22pdfhav%2FVbXyvmXMZhVGz6adQc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwbaT%2FeW15QJCBmeyrcA0kyKiySCa8Rl4u2qdZTtT82s4Uu3BBxFLEfTE9g8JBbPXU4PETOzF0CJEUyVkCWkmrYKlugVuHjyOVz%2FYKUFYNeHWwUCMtAZel8Nh%2FTApHkwcDIRsHx26rzlqVqXa0bPFn1NUXDDSZjOTDPE4QB9JoJo1WkhhbnSy2HGygRw%2B0lsBx8TDTDxHyw8tUzy%2F7Z0Pb2K09sCRRGZM2iSg4mzc3uB4SUeGmM9DvtY1FWfPP8Rlg3zfr9thkARqzuIJCWbICwtZPu%2F36s%2BVA38diYa%2BHy1kZ%2BXO1GpdsLuXDFcOQvxCjmxTggHYdsAAU5ldkMhHIE5ZUf02TNwnqLVLTgQzt8UR3X9%2FgwP9YzQ%2B47JLKl4Hzn%2FrE6LiqT8%2FjAsdFmzFjWfUvKva2qhrrTfI8Lqlt6aJOeX9kLs9QYWpJwTDLp1ZAi3Tcx%2FHyunyV90CSIHnjvLPbMqy6RQgqPImQM1RvU1yDceOXI6HMoPfXj5fP3O%2BUqCFjBgRKU7B%2Bj7sLd%2BZjPVz6WqmbEK0VfccLApnfDAh3TdbzFHaMDa%2FGO3XSH02YwYayP0RC%2F0TjONaU%2BC1DdXt1IpuIIjdFgwRQnbwd481WjCssvumiCT%2FfmXgKSOUE%2FFd1%2BdzVuPju%2BMKel8L4GOqUBFfUNzqpFMrIqQhAX4k33eySb529olirt8BiaTOyQVy7ieazQ%2FQPz9u8pIv7KLksCxWclS0fUGqZ20ezZA6iEMk9lVcVYkjNi5K1JBDCR3z%2F3Xl3G4PwngoisnFQzrehtxkaJwfNIhOdiFdiAh3JgYENCSWMEmqrV4tBQZAhJAglJN94846kvit7WTu68TBHraBzUa9eeqe42lk02CyRlG1nwOI8l&X-Amz-Signature=2ec7725a8a6f682bff408656f6c1b44f8b624763163f2e311128ea9dcf80a0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQMCN2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID%2FmhIiq%2BFCZDk%2BAD%2FeqmFQ83d97y5B%2FYBa2pqko48GWAiEAyqjXOsD3ljUS89O22pdfhav%2FVbXyvmXMZhVGz6adQc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwbaT%2FeW15QJCBmeyrcA0kyKiySCa8Rl4u2qdZTtT82s4Uu3BBxFLEfTE9g8JBbPXU4PETOzF0CJEUyVkCWkmrYKlugVuHjyOVz%2FYKUFYNeHWwUCMtAZel8Nh%2FTApHkwcDIRsHx26rzlqVqXa0bPFn1NUXDDSZjOTDPE4QB9JoJo1WkhhbnSy2HGygRw%2B0lsBx8TDTDxHyw8tUzy%2F7Z0Pb2K09sCRRGZM2iSg4mzc3uB4SUeGmM9DvtY1FWfPP8Rlg3zfr9thkARqzuIJCWbICwtZPu%2F36s%2BVA38diYa%2BHy1kZ%2BXO1GpdsLuXDFcOQvxCjmxTggHYdsAAU5ldkMhHIE5ZUf02TNwnqLVLTgQzt8UR3X9%2FgwP9YzQ%2B47JLKl4Hzn%2FrE6LiqT8%2FjAsdFmzFjWfUvKva2qhrrTfI8Lqlt6aJOeX9kLs9QYWpJwTDLp1ZAi3Tcx%2FHyunyV90CSIHnjvLPbMqy6RQgqPImQM1RvU1yDceOXI6HMoPfXj5fP3O%2BUqCFjBgRKU7B%2Bj7sLd%2BZjPVz6WqmbEK0VfccLApnfDAh3TdbzFHaMDa%2FGO3XSH02YwYayP0RC%2F0TjONaU%2BC1DdXt1IpuIIjdFgwRQnbwd481WjCssvumiCT%2FfmXgKSOUE%2FFd1%2BdzVuPju%2BMKel8L4GOqUBFfUNzqpFMrIqQhAX4k33eySb529olirt8BiaTOyQVy7ieazQ%2FQPz9u8pIv7KLksCxWclS0fUGqZ20ezZA6iEMk9lVcVYkjNi5K1JBDCR3z%2F3Xl3G4PwngoisnFQzrehtxkaJwfNIhOdiFdiAh3JgYENCSWMEmqrV4tBQZAhJAglJN94846kvit7WTu68TBHraBzUa9eeqe42lk02CyRlG1nwOI8l&X-Amz-Signature=b8807d55ea8ca2153d4acdb96eec4dcdb5689ddb4115c6bd79ff0929cda27fae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQMCN2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID%2FmhIiq%2BFCZDk%2BAD%2FeqmFQ83d97y5B%2FYBa2pqko48GWAiEAyqjXOsD3ljUS89O22pdfhav%2FVbXyvmXMZhVGz6adQc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwbaT%2FeW15QJCBmeyrcA0kyKiySCa8Rl4u2qdZTtT82s4Uu3BBxFLEfTE9g8JBbPXU4PETOzF0CJEUyVkCWkmrYKlugVuHjyOVz%2FYKUFYNeHWwUCMtAZel8Nh%2FTApHkwcDIRsHx26rzlqVqXa0bPFn1NUXDDSZjOTDPE4QB9JoJo1WkhhbnSy2HGygRw%2B0lsBx8TDTDxHyw8tUzy%2F7Z0Pb2K09sCRRGZM2iSg4mzc3uB4SUeGmM9DvtY1FWfPP8Rlg3zfr9thkARqzuIJCWbICwtZPu%2F36s%2BVA38diYa%2BHy1kZ%2BXO1GpdsLuXDFcOQvxCjmxTggHYdsAAU5ldkMhHIE5ZUf02TNwnqLVLTgQzt8UR3X9%2FgwP9YzQ%2B47JLKl4Hzn%2FrE6LiqT8%2FjAsdFmzFjWfUvKva2qhrrTfI8Lqlt6aJOeX9kLs9QYWpJwTDLp1ZAi3Tcx%2FHyunyV90CSIHnjvLPbMqy6RQgqPImQM1RvU1yDceOXI6HMoPfXj5fP3O%2BUqCFjBgRKU7B%2Bj7sLd%2BZjPVz6WqmbEK0VfccLApnfDAh3TdbzFHaMDa%2FGO3XSH02YwYayP0RC%2F0TjONaU%2BC1DdXt1IpuIIjdFgwRQnbwd481WjCssvumiCT%2FfmXgKSOUE%2FFd1%2BdzVuPju%2BMKel8L4GOqUBFfUNzqpFMrIqQhAX4k33eySb529olirt8BiaTOyQVy7ieazQ%2FQPz9u8pIv7KLksCxWclS0fUGqZ20ezZA6iEMk9lVcVYkjNi5K1JBDCR3z%2F3Xl3G4PwngoisnFQzrehtxkaJwfNIhOdiFdiAh3JgYENCSWMEmqrV4tBQZAhJAglJN94846kvit7WTu68TBHraBzUa9eeqe42lk02CyRlG1nwOI8l&X-Amz-Signature=500d7061b49ca2b46fb60a88e53cda3293eb8c4fcd88f300e8f500b6426a8d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNQMCN2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCID%2FmhIiq%2BFCZDk%2BAD%2FeqmFQ83d97y5B%2FYBa2pqko48GWAiEAyqjXOsD3ljUS89O22pdfhav%2FVbXyvmXMZhVGz6adQc8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwbaT%2FeW15QJCBmeyrcA0kyKiySCa8Rl4u2qdZTtT82s4Uu3BBxFLEfTE9g8JBbPXU4PETOzF0CJEUyVkCWkmrYKlugVuHjyOVz%2FYKUFYNeHWwUCMtAZel8Nh%2FTApHkwcDIRsHx26rzlqVqXa0bPFn1NUXDDSZjOTDPE4QB9JoJo1WkhhbnSy2HGygRw%2B0lsBx8TDTDxHyw8tUzy%2F7Z0Pb2K09sCRRGZM2iSg4mzc3uB4SUeGmM9DvtY1FWfPP8Rlg3zfr9thkARqzuIJCWbICwtZPu%2F36s%2BVA38diYa%2BHy1kZ%2BXO1GpdsLuXDFcOQvxCjmxTggHYdsAAU5ldkMhHIE5ZUf02TNwnqLVLTgQzt8UR3X9%2FgwP9YzQ%2B47JLKl4Hzn%2FrE6LiqT8%2FjAsdFmzFjWfUvKva2qhrrTfI8Lqlt6aJOeX9kLs9QYWpJwTDLp1ZAi3Tcx%2FHyunyV90CSIHnjvLPbMqy6RQgqPImQM1RvU1yDceOXI6HMoPfXj5fP3O%2BUqCFjBgRKU7B%2Bj7sLd%2BZjPVz6WqmbEK0VfccLApnfDAh3TdbzFHaMDa%2FGO3XSH02YwYayP0RC%2F0TjONaU%2BC1DdXt1IpuIIjdFgwRQnbwd481WjCssvumiCT%2FfmXgKSOUE%2FFd1%2BdzVuPju%2BMKel8L4GOqUBFfUNzqpFMrIqQhAX4k33eySb529olirt8BiaTOyQVy7ieazQ%2FQPz9u8pIv7KLksCxWclS0fUGqZ20ezZA6iEMk9lVcVYkjNi5K1JBDCR3z%2F3Xl3G4PwngoisnFQzrehtxkaJwfNIhOdiFdiAh3JgYENCSWMEmqrV4tBQZAhJAglJN94846kvit7WTu68TBHraBzUa9eeqe42lk02CyRlG1nwOI8l&X-Amz-Signature=acba516765a6d8ef05e9e38d08bf9fb2a47e651e8fcd8fc9a654d02a2f044f0e&X-Amz-SignedHeaders=host&x-id=GetObject)
