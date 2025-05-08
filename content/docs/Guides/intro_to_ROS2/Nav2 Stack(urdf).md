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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSRO2JZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDro2cuuGE1iIXJzK11%2FCUu2O7RQqT178CjzNUOHyZNngIhANIDSCKCNqz7czroWM2JI%2F1aUkGJUUH7VnL8hoXyRPnOKv8DCHUQABoMNjM3NDIzMTgzODA1Igxd%2FQ6gPu2wsfSGx44q3ANq0t915o3SEdDmUpVQ5PBsxfPte6YOmdapcEf5TJoMrks%2FecUqolgyp8vXN%2BuKG0RFW%2BEg3Xj1Eoou%2BpuYLSfNtZ4OCGaLSOb9EpK6jCmE0GRLpVl%2Fk7S%2BI7eC5vhctycXvKA1KeMwETPvq8Q5Ezm9AtbMmi3ZKlWrV4kjTAj6swhL7%2Bj5odffslHWHIBkNptHTQKCYcEJ4doL%2Ful8LRZK%2FpdWykRasIfazUCAuE3Dco%2B%2Bal8ylsWcxT5c9mkadOOxhPHNV5f6DPMbmIib78URtGrlA0YM%2Fcm4P1V3CEOrU%2F8bMjsuD3e1S9Sd0%2BTReMYd7t3nymiDOJYvPPFPn4OwBFDLHv5oohFlKo3hf0qOPyokzFM8EHDWzp6BevMlfQc9Qa6cLrN2Rl5GlQ%2BGt51E212kEeerKYW%2Frq9KEvnZU5nO%2F31D46%2BXafgA4mT9vhb69IOWQkUJkHuvlaI4okDZqe5xcb87yhAt7crmZ3voskRaxGzQz0W2m9ea0b6dHdZ9oMedtuFF9mUdKmttwrKQKA26fAy9yJTnxi4JGSOs%2BMKu79ZbVrtmGvlDtFcGwfL4u00mbQw0MbebOmogM0cQIsqeyrDp9vnIfIZh6%2FxOtAqMKCgWXh%2FtqrOl0jCQsfLABjqkAQe4HcWd4C7L4pCSIcV2H4w%2FS4QSC4%2BNpXYADHxG86ZPRz28qCjIv1yZClmJ4bz17H%2F1SlRGGCM%2FR%2B570r7djJ28O4mPdzyivCGKPQ17KEinTbEWN%2B%2Bqt%2FyXnXSv2Q7scEA0GI5ejPvpY7qEwlkhuQMv9xkPhhWtbXLmOrPOGrcs3QME08lfVJWcnmI8nTgikyTOLL12Y1B84ih4tR1z%2BjQyHgIm&X-Amz-Signature=ff9374ea777a17e40372153b9d0ee59cc8181a75d8eee0ed5c8b4d0c106ca6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSRO2JZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDro2cuuGE1iIXJzK11%2FCUu2O7RQqT178CjzNUOHyZNngIhANIDSCKCNqz7czroWM2JI%2F1aUkGJUUH7VnL8hoXyRPnOKv8DCHUQABoMNjM3NDIzMTgzODA1Igxd%2FQ6gPu2wsfSGx44q3ANq0t915o3SEdDmUpVQ5PBsxfPte6YOmdapcEf5TJoMrks%2FecUqolgyp8vXN%2BuKG0RFW%2BEg3Xj1Eoou%2BpuYLSfNtZ4OCGaLSOb9EpK6jCmE0GRLpVl%2Fk7S%2BI7eC5vhctycXvKA1KeMwETPvq8Q5Ezm9AtbMmi3ZKlWrV4kjTAj6swhL7%2Bj5odffslHWHIBkNptHTQKCYcEJ4doL%2Ful8LRZK%2FpdWykRasIfazUCAuE3Dco%2B%2Bal8ylsWcxT5c9mkadOOxhPHNV5f6DPMbmIib78URtGrlA0YM%2Fcm4P1V3CEOrU%2F8bMjsuD3e1S9Sd0%2BTReMYd7t3nymiDOJYvPPFPn4OwBFDLHv5oohFlKo3hf0qOPyokzFM8EHDWzp6BevMlfQc9Qa6cLrN2Rl5GlQ%2BGt51E212kEeerKYW%2Frq9KEvnZU5nO%2F31D46%2BXafgA4mT9vhb69IOWQkUJkHuvlaI4okDZqe5xcb87yhAt7crmZ3voskRaxGzQz0W2m9ea0b6dHdZ9oMedtuFF9mUdKmttwrKQKA26fAy9yJTnxi4JGSOs%2BMKu79ZbVrtmGvlDtFcGwfL4u00mbQw0MbebOmogM0cQIsqeyrDp9vnIfIZh6%2FxOtAqMKCgWXh%2FtqrOl0jCQsfLABjqkAQe4HcWd4C7L4pCSIcV2H4w%2FS4QSC4%2BNpXYADHxG86ZPRz28qCjIv1yZClmJ4bz17H%2F1SlRGGCM%2FR%2B570r7djJ28O4mPdzyivCGKPQ17KEinTbEWN%2B%2Bqt%2FyXnXSv2Q7scEA0GI5ejPvpY7qEwlkhuQMv9xkPhhWtbXLmOrPOGrcs3QME08lfVJWcnmI8nTgikyTOLL12Y1B84ih4tR1z%2BjQyHgIm&X-Amz-Signature=be2663742a952c58afd3e49a0fe12a37e83c07d750106794850d1d04cf54741d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSRO2JZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDro2cuuGE1iIXJzK11%2FCUu2O7RQqT178CjzNUOHyZNngIhANIDSCKCNqz7czroWM2JI%2F1aUkGJUUH7VnL8hoXyRPnOKv8DCHUQABoMNjM3NDIzMTgzODA1Igxd%2FQ6gPu2wsfSGx44q3ANq0t915o3SEdDmUpVQ5PBsxfPte6YOmdapcEf5TJoMrks%2FecUqolgyp8vXN%2BuKG0RFW%2BEg3Xj1Eoou%2BpuYLSfNtZ4OCGaLSOb9EpK6jCmE0GRLpVl%2Fk7S%2BI7eC5vhctycXvKA1KeMwETPvq8Q5Ezm9AtbMmi3ZKlWrV4kjTAj6swhL7%2Bj5odffslHWHIBkNptHTQKCYcEJ4doL%2Ful8LRZK%2FpdWykRasIfazUCAuE3Dco%2B%2Bal8ylsWcxT5c9mkadOOxhPHNV5f6DPMbmIib78URtGrlA0YM%2Fcm4P1V3CEOrU%2F8bMjsuD3e1S9Sd0%2BTReMYd7t3nymiDOJYvPPFPn4OwBFDLHv5oohFlKo3hf0qOPyokzFM8EHDWzp6BevMlfQc9Qa6cLrN2Rl5GlQ%2BGt51E212kEeerKYW%2Frq9KEvnZU5nO%2F31D46%2BXafgA4mT9vhb69IOWQkUJkHuvlaI4okDZqe5xcb87yhAt7crmZ3voskRaxGzQz0W2m9ea0b6dHdZ9oMedtuFF9mUdKmttwrKQKA26fAy9yJTnxi4JGSOs%2BMKu79ZbVrtmGvlDtFcGwfL4u00mbQw0MbebOmogM0cQIsqeyrDp9vnIfIZh6%2FxOtAqMKCgWXh%2FtqrOl0jCQsfLABjqkAQe4HcWd4C7L4pCSIcV2H4w%2FS4QSC4%2BNpXYADHxG86ZPRz28qCjIv1yZClmJ4bz17H%2F1SlRGGCM%2FR%2B570r7djJ28O4mPdzyivCGKPQ17KEinTbEWN%2B%2Bqt%2FyXnXSv2Q7scEA0GI5ejPvpY7qEwlkhuQMv9xkPhhWtbXLmOrPOGrcs3QME08lfVJWcnmI8nTgikyTOLL12Y1B84ih4tR1z%2BjQyHgIm&X-Amz-Signature=e0ce38e1f46301ea47d28ee09cbaf8b65febf5cfca24a8218aa9070b31e65be4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSRO2JZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDro2cuuGE1iIXJzK11%2FCUu2O7RQqT178CjzNUOHyZNngIhANIDSCKCNqz7czroWM2JI%2F1aUkGJUUH7VnL8hoXyRPnOKv8DCHUQABoMNjM3NDIzMTgzODA1Igxd%2FQ6gPu2wsfSGx44q3ANq0t915o3SEdDmUpVQ5PBsxfPte6YOmdapcEf5TJoMrks%2FecUqolgyp8vXN%2BuKG0RFW%2BEg3Xj1Eoou%2BpuYLSfNtZ4OCGaLSOb9EpK6jCmE0GRLpVl%2Fk7S%2BI7eC5vhctycXvKA1KeMwETPvq8Q5Ezm9AtbMmi3ZKlWrV4kjTAj6swhL7%2Bj5odffslHWHIBkNptHTQKCYcEJ4doL%2Ful8LRZK%2FpdWykRasIfazUCAuE3Dco%2B%2Bal8ylsWcxT5c9mkadOOxhPHNV5f6DPMbmIib78URtGrlA0YM%2Fcm4P1V3CEOrU%2F8bMjsuD3e1S9Sd0%2BTReMYd7t3nymiDOJYvPPFPn4OwBFDLHv5oohFlKo3hf0qOPyokzFM8EHDWzp6BevMlfQc9Qa6cLrN2Rl5GlQ%2BGt51E212kEeerKYW%2Frq9KEvnZU5nO%2F31D46%2BXafgA4mT9vhb69IOWQkUJkHuvlaI4okDZqe5xcb87yhAt7crmZ3voskRaxGzQz0W2m9ea0b6dHdZ9oMedtuFF9mUdKmttwrKQKA26fAy9yJTnxi4JGSOs%2BMKu79ZbVrtmGvlDtFcGwfL4u00mbQw0MbebOmogM0cQIsqeyrDp9vnIfIZh6%2FxOtAqMKCgWXh%2FtqrOl0jCQsfLABjqkAQe4HcWd4C7L4pCSIcV2H4w%2FS4QSC4%2BNpXYADHxG86ZPRz28qCjIv1yZClmJ4bz17H%2F1SlRGGCM%2FR%2B570r7djJ28O4mPdzyivCGKPQ17KEinTbEWN%2B%2Bqt%2FyXnXSv2Q7scEA0GI5ejPvpY7qEwlkhuQMv9xkPhhWtbXLmOrPOGrcs3QME08lfVJWcnmI8nTgikyTOLL12Y1B84ih4tR1z%2BjQyHgIm&X-Amz-Signature=bec80a69b68c1f9e70e364c610b66743185f85a18206f5d2464067b6b355845c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSRO2JZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDro2cuuGE1iIXJzK11%2FCUu2O7RQqT178CjzNUOHyZNngIhANIDSCKCNqz7czroWM2JI%2F1aUkGJUUH7VnL8hoXyRPnOKv8DCHUQABoMNjM3NDIzMTgzODA1Igxd%2FQ6gPu2wsfSGx44q3ANq0t915o3SEdDmUpVQ5PBsxfPte6YOmdapcEf5TJoMrks%2FecUqolgyp8vXN%2BuKG0RFW%2BEg3Xj1Eoou%2BpuYLSfNtZ4OCGaLSOb9EpK6jCmE0GRLpVl%2Fk7S%2BI7eC5vhctycXvKA1KeMwETPvq8Q5Ezm9AtbMmi3ZKlWrV4kjTAj6swhL7%2Bj5odffslHWHIBkNptHTQKCYcEJ4doL%2Ful8LRZK%2FpdWykRasIfazUCAuE3Dco%2B%2Bal8ylsWcxT5c9mkadOOxhPHNV5f6DPMbmIib78URtGrlA0YM%2Fcm4P1V3CEOrU%2F8bMjsuD3e1S9Sd0%2BTReMYd7t3nymiDOJYvPPFPn4OwBFDLHv5oohFlKo3hf0qOPyokzFM8EHDWzp6BevMlfQc9Qa6cLrN2Rl5GlQ%2BGt51E212kEeerKYW%2Frq9KEvnZU5nO%2F31D46%2BXafgA4mT9vhb69IOWQkUJkHuvlaI4okDZqe5xcb87yhAt7crmZ3voskRaxGzQz0W2m9ea0b6dHdZ9oMedtuFF9mUdKmttwrKQKA26fAy9yJTnxi4JGSOs%2BMKu79ZbVrtmGvlDtFcGwfL4u00mbQw0MbebOmogM0cQIsqeyrDp9vnIfIZh6%2FxOtAqMKCgWXh%2FtqrOl0jCQsfLABjqkAQe4HcWd4C7L4pCSIcV2H4w%2FS4QSC4%2BNpXYADHxG86ZPRz28qCjIv1yZClmJ4bz17H%2F1SlRGGCM%2FR%2B570r7djJ28O4mPdzyivCGKPQ17KEinTbEWN%2B%2Bqt%2FyXnXSv2Q7scEA0GI5ejPvpY7qEwlkhuQMv9xkPhhWtbXLmOrPOGrcs3QME08lfVJWcnmI8nTgikyTOLL12Y1B84ih4tR1z%2BjQyHgIm&X-Amz-Signature=20eb3ee6c79fae0cc59b29197f1226726a83c8ed8bcffe7730ed395f190daf7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSRO2JZ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDro2cuuGE1iIXJzK11%2FCUu2O7RQqT178CjzNUOHyZNngIhANIDSCKCNqz7czroWM2JI%2F1aUkGJUUH7VnL8hoXyRPnOKv8DCHUQABoMNjM3NDIzMTgzODA1Igxd%2FQ6gPu2wsfSGx44q3ANq0t915o3SEdDmUpVQ5PBsxfPte6YOmdapcEf5TJoMrks%2FecUqolgyp8vXN%2BuKG0RFW%2BEg3Xj1Eoou%2BpuYLSfNtZ4OCGaLSOb9EpK6jCmE0GRLpVl%2Fk7S%2BI7eC5vhctycXvKA1KeMwETPvq8Q5Ezm9AtbMmi3ZKlWrV4kjTAj6swhL7%2Bj5odffslHWHIBkNptHTQKCYcEJ4doL%2Ful8LRZK%2FpdWykRasIfazUCAuE3Dco%2B%2Bal8ylsWcxT5c9mkadOOxhPHNV5f6DPMbmIib78URtGrlA0YM%2Fcm4P1V3CEOrU%2F8bMjsuD3e1S9Sd0%2BTReMYd7t3nymiDOJYvPPFPn4OwBFDLHv5oohFlKo3hf0qOPyokzFM8EHDWzp6BevMlfQc9Qa6cLrN2Rl5GlQ%2BGt51E212kEeerKYW%2Frq9KEvnZU5nO%2F31D46%2BXafgA4mT9vhb69IOWQkUJkHuvlaI4okDZqe5xcb87yhAt7crmZ3voskRaxGzQz0W2m9ea0b6dHdZ9oMedtuFF9mUdKmttwrKQKA26fAy9yJTnxi4JGSOs%2BMKu79ZbVrtmGvlDtFcGwfL4u00mbQw0MbebOmogM0cQIsqeyrDp9vnIfIZh6%2FxOtAqMKCgWXh%2FtqrOl0jCQsfLABjqkAQe4HcWd4C7L4pCSIcV2H4w%2FS4QSC4%2BNpXYADHxG86ZPRz28qCjIv1yZClmJ4bz17H%2F1SlRGGCM%2FR%2B570r7djJ28O4mPdzyivCGKPQ17KEinTbEWN%2B%2Bqt%2FyXnXSv2Q7scEA0GI5ejPvpY7qEwlkhuQMv9xkPhhWtbXLmOrPOGrcs3QME08lfVJWcnmI8nTgikyTOLL12Y1B84ih4tR1z%2BjQyHgIm&X-Amz-Signature=59a8e5480406ca8540f3e358ffd47f01d87e37256bad1a070802226ab555cb11&X-Amz-SignedHeaders=host&x-id=GetObject)
