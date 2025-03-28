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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXPZ2YL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEBv%2BIKNMSszBlIwDQcR0DYpMOo1HnvbimN7gqnXSVG%2BAh8%2FtXS1kkCYczdc9yFYFVAdkIZo%2FTSEUIMZS47u8%2BhqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwIX6yvfnTDRAC6lJ8q3AP6K5zU2YRZ2r4P9MORQV%2FM4zKDCsAY082uGw4B6H%2FzlKNIX8sOCDtt3%2BE%2FuolUw9%2Fe1xsuBZQrMD9wokVPDasiC0XahlJdbeNnq3epg1h07SkP%2FeUUQTWobFONBg8IbuS4gRhaRrgttbkiKBFIuRuvNGZo8BguHN9Rp2kNKClL4Rl3F0PHlX4A1%2BlDsAZrsymco9UMS9b5FSk9M1KHX3p2%2FZk240TsF1JTowHbcXVxGtDZ50GrJXyRvREL7uvtqwS2a8Fs7x06eIFr13ijgXYn05iksYRZAunJGwSMUtqj9sZyYE8cu%2BqBgvm4nFb7q9giJ7e8nkk6EEE9dA%2BWbU8k1QZNd1qjevtWt5TFQ2wSlUciSG595N0oMtGsjbxXSDYfPIs2s7D0m4H7tBtAxRTTEryOeAVZvqW%2FPn322Ks0fodYnJvFZH5XtlpMuEaaX%2BQtOokyv%2FoGbpRGZhsaWHMC%2Bjm0XjsVJiBZFztTe8mXoE7n00AR8%2FR5izF8X5Vupvu7UPr%2F%2FREtlhUXDFgKo8Y%2F%2Ftht%2FHokI1XTZsuQwAWNNr55au4%2BCtay4vlYB%2BTvqm2vYtihzFOMPGS%2B0coYLKixrfdMZe%2BtcYsDUoSFA0wdwM%2BEtn7FTBoF0f5GyzCVsJi%2FBjqnAUFaT6k%2Bq01RO3f1tG2G95eejFtgUDYIIen6zfJHXymuYXbIZvpbs4PQs1Cp0KXBCiGqoxIchaTGYI5cI4OLTxa%2FkTH19%2BOFMM8wTVxOqTlSR9n9ApZK4KRzmWv38zQPCCyvjSHNvQaNjhzcEWoXhMLS4DWuQYHtOvvYtr06LxaLLw4hPyoxdypjfeb%2BmlNs7v9lsG06cgode0aQfDz3Wa%2FKVDHtKkNq&X-Amz-Signature=b180c0c437b67fc2525b0699256460fed0e2a24c97352884750357011e350449&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXPZ2YL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEBv%2BIKNMSszBlIwDQcR0DYpMOo1HnvbimN7gqnXSVG%2BAh8%2FtXS1kkCYczdc9yFYFVAdkIZo%2FTSEUIMZS47u8%2BhqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwIX6yvfnTDRAC6lJ8q3AP6K5zU2YRZ2r4P9MORQV%2FM4zKDCsAY082uGw4B6H%2FzlKNIX8sOCDtt3%2BE%2FuolUw9%2Fe1xsuBZQrMD9wokVPDasiC0XahlJdbeNnq3epg1h07SkP%2FeUUQTWobFONBg8IbuS4gRhaRrgttbkiKBFIuRuvNGZo8BguHN9Rp2kNKClL4Rl3F0PHlX4A1%2BlDsAZrsymco9UMS9b5FSk9M1KHX3p2%2FZk240TsF1JTowHbcXVxGtDZ50GrJXyRvREL7uvtqwS2a8Fs7x06eIFr13ijgXYn05iksYRZAunJGwSMUtqj9sZyYE8cu%2BqBgvm4nFb7q9giJ7e8nkk6EEE9dA%2BWbU8k1QZNd1qjevtWt5TFQ2wSlUciSG595N0oMtGsjbxXSDYfPIs2s7D0m4H7tBtAxRTTEryOeAVZvqW%2FPn322Ks0fodYnJvFZH5XtlpMuEaaX%2BQtOokyv%2FoGbpRGZhsaWHMC%2Bjm0XjsVJiBZFztTe8mXoE7n00AR8%2FR5izF8X5Vupvu7UPr%2F%2FREtlhUXDFgKo8Y%2F%2Ftht%2FHokI1XTZsuQwAWNNr55au4%2BCtay4vlYB%2BTvqm2vYtihzFOMPGS%2B0coYLKixrfdMZe%2BtcYsDUoSFA0wdwM%2BEtn7FTBoF0f5GyzCVsJi%2FBjqnAUFaT6k%2Bq01RO3f1tG2G95eejFtgUDYIIen6zfJHXymuYXbIZvpbs4PQs1Cp0KXBCiGqoxIchaTGYI5cI4OLTxa%2FkTH19%2BOFMM8wTVxOqTlSR9n9ApZK4KRzmWv38zQPCCyvjSHNvQaNjhzcEWoXhMLS4DWuQYHtOvvYtr06LxaLLw4hPyoxdypjfeb%2BmlNs7v9lsG06cgode0aQfDz3Wa%2FKVDHtKkNq&X-Amz-Signature=66e7a5c99f09550622d5f47181f5fa7e43d1bbf17e8d65280e3a5212362f5ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXPZ2YL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEBv%2BIKNMSszBlIwDQcR0DYpMOo1HnvbimN7gqnXSVG%2BAh8%2FtXS1kkCYczdc9yFYFVAdkIZo%2FTSEUIMZS47u8%2BhqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwIX6yvfnTDRAC6lJ8q3AP6K5zU2YRZ2r4P9MORQV%2FM4zKDCsAY082uGw4B6H%2FzlKNIX8sOCDtt3%2BE%2FuolUw9%2Fe1xsuBZQrMD9wokVPDasiC0XahlJdbeNnq3epg1h07SkP%2FeUUQTWobFONBg8IbuS4gRhaRrgttbkiKBFIuRuvNGZo8BguHN9Rp2kNKClL4Rl3F0PHlX4A1%2BlDsAZrsymco9UMS9b5FSk9M1KHX3p2%2FZk240TsF1JTowHbcXVxGtDZ50GrJXyRvREL7uvtqwS2a8Fs7x06eIFr13ijgXYn05iksYRZAunJGwSMUtqj9sZyYE8cu%2BqBgvm4nFb7q9giJ7e8nkk6EEE9dA%2BWbU8k1QZNd1qjevtWt5TFQ2wSlUciSG595N0oMtGsjbxXSDYfPIs2s7D0m4H7tBtAxRTTEryOeAVZvqW%2FPn322Ks0fodYnJvFZH5XtlpMuEaaX%2BQtOokyv%2FoGbpRGZhsaWHMC%2Bjm0XjsVJiBZFztTe8mXoE7n00AR8%2FR5izF8X5Vupvu7UPr%2F%2FREtlhUXDFgKo8Y%2F%2Ftht%2FHokI1XTZsuQwAWNNr55au4%2BCtay4vlYB%2BTvqm2vYtihzFOMPGS%2B0coYLKixrfdMZe%2BtcYsDUoSFA0wdwM%2BEtn7FTBoF0f5GyzCVsJi%2FBjqnAUFaT6k%2Bq01RO3f1tG2G95eejFtgUDYIIen6zfJHXymuYXbIZvpbs4PQs1Cp0KXBCiGqoxIchaTGYI5cI4OLTxa%2FkTH19%2BOFMM8wTVxOqTlSR9n9ApZK4KRzmWv38zQPCCyvjSHNvQaNjhzcEWoXhMLS4DWuQYHtOvvYtr06LxaLLw4hPyoxdypjfeb%2BmlNs7v9lsG06cgode0aQfDz3Wa%2FKVDHtKkNq&X-Amz-Signature=bf40afa41a501afbdd07089a1be8f58ed9d9248c1c3b60cef7175ea48d04cea3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXPZ2YL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEBv%2BIKNMSszBlIwDQcR0DYpMOo1HnvbimN7gqnXSVG%2BAh8%2FtXS1kkCYczdc9yFYFVAdkIZo%2FTSEUIMZS47u8%2BhqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwIX6yvfnTDRAC6lJ8q3AP6K5zU2YRZ2r4P9MORQV%2FM4zKDCsAY082uGw4B6H%2FzlKNIX8sOCDtt3%2BE%2FuolUw9%2Fe1xsuBZQrMD9wokVPDasiC0XahlJdbeNnq3epg1h07SkP%2FeUUQTWobFONBg8IbuS4gRhaRrgttbkiKBFIuRuvNGZo8BguHN9Rp2kNKClL4Rl3F0PHlX4A1%2BlDsAZrsymco9UMS9b5FSk9M1KHX3p2%2FZk240TsF1JTowHbcXVxGtDZ50GrJXyRvREL7uvtqwS2a8Fs7x06eIFr13ijgXYn05iksYRZAunJGwSMUtqj9sZyYE8cu%2BqBgvm4nFb7q9giJ7e8nkk6EEE9dA%2BWbU8k1QZNd1qjevtWt5TFQ2wSlUciSG595N0oMtGsjbxXSDYfPIs2s7D0m4H7tBtAxRTTEryOeAVZvqW%2FPn322Ks0fodYnJvFZH5XtlpMuEaaX%2BQtOokyv%2FoGbpRGZhsaWHMC%2Bjm0XjsVJiBZFztTe8mXoE7n00AR8%2FR5izF8X5Vupvu7UPr%2F%2FREtlhUXDFgKo8Y%2F%2Ftht%2FHokI1XTZsuQwAWNNr55au4%2BCtay4vlYB%2BTvqm2vYtihzFOMPGS%2B0coYLKixrfdMZe%2BtcYsDUoSFA0wdwM%2BEtn7FTBoF0f5GyzCVsJi%2FBjqnAUFaT6k%2Bq01RO3f1tG2G95eejFtgUDYIIen6zfJHXymuYXbIZvpbs4PQs1Cp0KXBCiGqoxIchaTGYI5cI4OLTxa%2FkTH19%2BOFMM8wTVxOqTlSR9n9ApZK4KRzmWv38zQPCCyvjSHNvQaNjhzcEWoXhMLS4DWuQYHtOvvYtr06LxaLLw4hPyoxdypjfeb%2BmlNs7v9lsG06cgode0aQfDz3Wa%2FKVDHtKkNq&X-Amz-Signature=18c4d04c21523ea82b18100c6838e84a2c2f4d53b4401e0ce083e15153aa0673&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXPZ2YL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEBv%2BIKNMSszBlIwDQcR0DYpMOo1HnvbimN7gqnXSVG%2BAh8%2FtXS1kkCYczdc9yFYFVAdkIZo%2FTSEUIMZS47u8%2BhqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwIX6yvfnTDRAC6lJ8q3AP6K5zU2YRZ2r4P9MORQV%2FM4zKDCsAY082uGw4B6H%2FzlKNIX8sOCDtt3%2BE%2FuolUw9%2Fe1xsuBZQrMD9wokVPDasiC0XahlJdbeNnq3epg1h07SkP%2FeUUQTWobFONBg8IbuS4gRhaRrgttbkiKBFIuRuvNGZo8BguHN9Rp2kNKClL4Rl3F0PHlX4A1%2BlDsAZrsymco9UMS9b5FSk9M1KHX3p2%2FZk240TsF1JTowHbcXVxGtDZ50GrJXyRvREL7uvtqwS2a8Fs7x06eIFr13ijgXYn05iksYRZAunJGwSMUtqj9sZyYE8cu%2BqBgvm4nFb7q9giJ7e8nkk6EEE9dA%2BWbU8k1QZNd1qjevtWt5TFQ2wSlUciSG595N0oMtGsjbxXSDYfPIs2s7D0m4H7tBtAxRTTEryOeAVZvqW%2FPn322Ks0fodYnJvFZH5XtlpMuEaaX%2BQtOokyv%2FoGbpRGZhsaWHMC%2Bjm0XjsVJiBZFztTe8mXoE7n00AR8%2FR5izF8X5Vupvu7UPr%2F%2FREtlhUXDFgKo8Y%2F%2Ftht%2FHokI1XTZsuQwAWNNr55au4%2BCtay4vlYB%2BTvqm2vYtihzFOMPGS%2B0coYLKixrfdMZe%2BtcYsDUoSFA0wdwM%2BEtn7FTBoF0f5GyzCVsJi%2FBjqnAUFaT6k%2Bq01RO3f1tG2G95eejFtgUDYIIen6zfJHXymuYXbIZvpbs4PQs1Cp0KXBCiGqoxIchaTGYI5cI4OLTxa%2FkTH19%2BOFMM8wTVxOqTlSR9n9ApZK4KRzmWv38zQPCCyvjSHNvQaNjhzcEWoXhMLS4DWuQYHtOvvYtr06LxaLLw4hPyoxdypjfeb%2BmlNs7v9lsG06cgode0aQfDz3Wa%2FKVDHtKkNq&X-Amz-Signature=b8d84b1da1061ab850f4a2aec5f90bcc3aea02499db1f2980ec21060fd196429&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXPZ2YL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEBv%2BIKNMSszBlIwDQcR0DYpMOo1HnvbimN7gqnXSVG%2BAh8%2FtXS1kkCYczdc9yFYFVAdkIZo%2FTSEUIMZS47u8%2BhqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwIX6yvfnTDRAC6lJ8q3AP6K5zU2YRZ2r4P9MORQV%2FM4zKDCsAY082uGw4B6H%2FzlKNIX8sOCDtt3%2BE%2FuolUw9%2Fe1xsuBZQrMD9wokVPDasiC0XahlJdbeNnq3epg1h07SkP%2FeUUQTWobFONBg8IbuS4gRhaRrgttbkiKBFIuRuvNGZo8BguHN9Rp2kNKClL4Rl3F0PHlX4A1%2BlDsAZrsymco9UMS9b5FSk9M1KHX3p2%2FZk240TsF1JTowHbcXVxGtDZ50GrJXyRvREL7uvtqwS2a8Fs7x06eIFr13ijgXYn05iksYRZAunJGwSMUtqj9sZyYE8cu%2BqBgvm4nFb7q9giJ7e8nkk6EEE9dA%2BWbU8k1QZNd1qjevtWt5TFQ2wSlUciSG595N0oMtGsjbxXSDYfPIs2s7D0m4H7tBtAxRTTEryOeAVZvqW%2FPn322Ks0fodYnJvFZH5XtlpMuEaaX%2BQtOokyv%2FoGbpRGZhsaWHMC%2Bjm0XjsVJiBZFztTe8mXoE7n00AR8%2FR5izF8X5Vupvu7UPr%2F%2FREtlhUXDFgKo8Y%2F%2Ftht%2FHokI1XTZsuQwAWNNr55au4%2BCtay4vlYB%2BTvqm2vYtihzFOMPGS%2B0coYLKixrfdMZe%2BtcYsDUoSFA0wdwM%2BEtn7FTBoF0f5GyzCVsJi%2FBjqnAUFaT6k%2Bq01RO3f1tG2G95eejFtgUDYIIen6zfJHXymuYXbIZvpbs4PQs1Cp0KXBCiGqoxIchaTGYI5cI4OLTxa%2FkTH19%2BOFMM8wTVxOqTlSR9n9ApZK4KRzmWv38zQPCCyvjSHNvQaNjhzcEWoXhMLS4DWuQYHtOvvYtr06LxaLLw4hPyoxdypjfeb%2BmlNs7v9lsG06cgode0aQfDz3Wa%2FKVDHtKkNq&X-Amz-Signature=8fe2c685aa3c929ae0f9fd820eae996aa22c4336a8a2836221deb1b76d1f377b&X-Amz-SignedHeaders=host&x-id=GetObject)
