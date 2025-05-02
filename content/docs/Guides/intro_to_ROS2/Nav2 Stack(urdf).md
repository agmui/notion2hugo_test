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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O2R7DV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCs3P7rmOwDZXjTLaaoYDiwh6b1CfAIu4eB%2F71Nm%2BYL3QIgf9KshuokRokb8XMvHWd0QNY5DzlgdRHNJQ0eWhGWgRMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZ2QascoI9tZ7w9ircA1pxJyG7gCfmCJYfS4ojFyB0ov33MhpCfz3cQBn26QC5Xa2CqP7s%2Bch3JzIcgycAm5x76kdqkdmeSn3GViVuQ8lYo6o2soNorkzwMTBX6aE8Q%2F2m%2Fb5YXRE368eHmhMSOUEp8aNTHak7GTpQXtwSVvutzhTAMH%2F9eSh%2FYPUc%2BwbzjJ9zEYampivIjlP2rtKjsuAGAEXMZtpX6jj%2BDJvIaHc7Dn4nbXg6q%2FHLNrzqdYsNBwh7ZzKHfHykXqSn2yqlus8zIlfNqhcCOypGUQ3Q2HHHA83FtPbf4b3LibXjbeEi7dsmo3H03ATLydlaHj0Nxu6rxrLHE4zB7qx53loIRIcwX4i7h%2F5a9oilgFVyEU4beWS%2FocNjyXtbmvo33zeITH4iJD5GYWyruzghJzx2LjfCDsbcQYClZ3VK46v6tbHTkK6tukz3GU7XehaJu3y%2B05GI6cZZJVVo46ATLeyr4tFLAAwINB0iGMq6BOnK6EXhNycpu%2Bo0FidviN165wcGkD2KiaZabHF6PZELMI%2BLEgR6vQDcHmmUHdSpN%2FgclNZ1SmSULgl%2B7GipqlAXLlLDdiAY9XMye5qKAcP6anSFA5FTBjGd3zf%2Bx15Iwi0X9lEZxNe9wlDC981wZtZkMLTZ0cAGOqUBcLIoJYlHlYSFvsh7qhFRK0SwMeAxIlo8y5tXhFHpaqTv%2FjZaq5phl1CS%2Br5pPu3%2B0boQkKNNofU8qeDFJo9CIdKd0lovwrEbBv8hJQkVXFZRy8ew%2Fo9vFMWf5yJ4HxcmvKJMoTyYmsYwRSuOy6e%2FKiyXvs0tHU0Q5qhmRAQG2HmFCbIfzb98ZDS51GLxte363k4srUrcRmiid2k6lKHP0YwZkx%2F7&X-Amz-Signature=38b366fd2bf114373d1000a43d2f4c150340102286292cbab4ff4a4fc02d0628&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O2R7DV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCs3P7rmOwDZXjTLaaoYDiwh6b1CfAIu4eB%2F71Nm%2BYL3QIgf9KshuokRokb8XMvHWd0QNY5DzlgdRHNJQ0eWhGWgRMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZ2QascoI9tZ7w9ircA1pxJyG7gCfmCJYfS4ojFyB0ov33MhpCfz3cQBn26QC5Xa2CqP7s%2Bch3JzIcgycAm5x76kdqkdmeSn3GViVuQ8lYo6o2soNorkzwMTBX6aE8Q%2F2m%2Fb5YXRE368eHmhMSOUEp8aNTHak7GTpQXtwSVvutzhTAMH%2F9eSh%2FYPUc%2BwbzjJ9zEYampivIjlP2rtKjsuAGAEXMZtpX6jj%2BDJvIaHc7Dn4nbXg6q%2FHLNrzqdYsNBwh7ZzKHfHykXqSn2yqlus8zIlfNqhcCOypGUQ3Q2HHHA83FtPbf4b3LibXjbeEi7dsmo3H03ATLydlaHj0Nxu6rxrLHE4zB7qx53loIRIcwX4i7h%2F5a9oilgFVyEU4beWS%2FocNjyXtbmvo33zeITH4iJD5GYWyruzghJzx2LjfCDsbcQYClZ3VK46v6tbHTkK6tukz3GU7XehaJu3y%2B05GI6cZZJVVo46ATLeyr4tFLAAwINB0iGMq6BOnK6EXhNycpu%2Bo0FidviN165wcGkD2KiaZabHF6PZELMI%2BLEgR6vQDcHmmUHdSpN%2FgclNZ1SmSULgl%2B7GipqlAXLlLDdiAY9XMye5qKAcP6anSFA5FTBjGd3zf%2Bx15Iwi0X9lEZxNe9wlDC981wZtZkMLTZ0cAGOqUBcLIoJYlHlYSFvsh7qhFRK0SwMeAxIlo8y5tXhFHpaqTv%2FjZaq5phl1CS%2Br5pPu3%2B0boQkKNNofU8qeDFJo9CIdKd0lovwrEbBv8hJQkVXFZRy8ew%2Fo9vFMWf5yJ4HxcmvKJMoTyYmsYwRSuOy6e%2FKiyXvs0tHU0Q5qhmRAQG2HmFCbIfzb98ZDS51GLxte363k4srUrcRmiid2k6lKHP0YwZkx%2F7&X-Amz-Signature=8570dd7f992ebb94209030cbdea2638132ffe13577f51395d2ffd40023a74723&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O2R7DV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCs3P7rmOwDZXjTLaaoYDiwh6b1CfAIu4eB%2F71Nm%2BYL3QIgf9KshuokRokb8XMvHWd0QNY5DzlgdRHNJQ0eWhGWgRMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZ2QascoI9tZ7w9ircA1pxJyG7gCfmCJYfS4ojFyB0ov33MhpCfz3cQBn26QC5Xa2CqP7s%2Bch3JzIcgycAm5x76kdqkdmeSn3GViVuQ8lYo6o2soNorkzwMTBX6aE8Q%2F2m%2Fb5YXRE368eHmhMSOUEp8aNTHak7GTpQXtwSVvutzhTAMH%2F9eSh%2FYPUc%2BwbzjJ9zEYampivIjlP2rtKjsuAGAEXMZtpX6jj%2BDJvIaHc7Dn4nbXg6q%2FHLNrzqdYsNBwh7ZzKHfHykXqSn2yqlus8zIlfNqhcCOypGUQ3Q2HHHA83FtPbf4b3LibXjbeEi7dsmo3H03ATLydlaHj0Nxu6rxrLHE4zB7qx53loIRIcwX4i7h%2F5a9oilgFVyEU4beWS%2FocNjyXtbmvo33zeITH4iJD5GYWyruzghJzx2LjfCDsbcQYClZ3VK46v6tbHTkK6tukz3GU7XehaJu3y%2B05GI6cZZJVVo46ATLeyr4tFLAAwINB0iGMq6BOnK6EXhNycpu%2Bo0FidviN165wcGkD2KiaZabHF6PZELMI%2BLEgR6vQDcHmmUHdSpN%2FgclNZ1SmSULgl%2B7GipqlAXLlLDdiAY9XMye5qKAcP6anSFA5FTBjGd3zf%2Bx15Iwi0X9lEZxNe9wlDC981wZtZkMLTZ0cAGOqUBcLIoJYlHlYSFvsh7qhFRK0SwMeAxIlo8y5tXhFHpaqTv%2FjZaq5phl1CS%2Br5pPu3%2B0boQkKNNofU8qeDFJo9CIdKd0lovwrEbBv8hJQkVXFZRy8ew%2Fo9vFMWf5yJ4HxcmvKJMoTyYmsYwRSuOy6e%2FKiyXvs0tHU0Q5qhmRAQG2HmFCbIfzb98ZDS51GLxte363k4srUrcRmiid2k6lKHP0YwZkx%2F7&X-Amz-Signature=9dd78dbd65bc7badec13ea1593fff5a0d3d02b34e36962cbed33df1e750fdd01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O2R7DV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCs3P7rmOwDZXjTLaaoYDiwh6b1CfAIu4eB%2F71Nm%2BYL3QIgf9KshuokRokb8XMvHWd0QNY5DzlgdRHNJQ0eWhGWgRMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZ2QascoI9tZ7w9ircA1pxJyG7gCfmCJYfS4ojFyB0ov33MhpCfz3cQBn26QC5Xa2CqP7s%2Bch3JzIcgycAm5x76kdqkdmeSn3GViVuQ8lYo6o2soNorkzwMTBX6aE8Q%2F2m%2Fb5YXRE368eHmhMSOUEp8aNTHak7GTpQXtwSVvutzhTAMH%2F9eSh%2FYPUc%2BwbzjJ9zEYampivIjlP2rtKjsuAGAEXMZtpX6jj%2BDJvIaHc7Dn4nbXg6q%2FHLNrzqdYsNBwh7ZzKHfHykXqSn2yqlus8zIlfNqhcCOypGUQ3Q2HHHA83FtPbf4b3LibXjbeEi7dsmo3H03ATLydlaHj0Nxu6rxrLHE4zB7qx53loIRIcwX4i7h%2F5a9oilgFVyEU4beWS%2FocNjyXtbmvo33zeITH4iJD5GYWyruzghJzx2LjfCDsbcQYClZ3VK46v6tbHTkK6tukz3GU7XehaJu3y%2B05GI6cZZJVVo46ATLeyr4tFLAAwINB0iGMq6BOnK6EXhNycpu%2Bo0FidviN165wcGkD2KiaZabHF6PZELMI%2BLEgR6vQDcHmmUHdSpN%2FgclNZ1SmSULgl%2B7GipqlAXLlLDdiAY9XMye5qKAcP6anSFA5FTBjGd3zf%2Bx15Iwi0X9lEZxNe9wlDC981wZtZkMLTZ0cAGOqUBcLIoJYlHlYSFvsh7qhFRK0SwMeAxIlo8y5tXhFHpaqTv%2FjZaq5phl1CS%2Br5pPu3%2B0boQkKNNofU8qeDFJo9CIdKd0lovwrEbBv8hJQkVXFZRy8ew%2Fo9vFMWf5yJ4HxcmvKJMoTyYmsYwRSuOy6e%2FKiyXvs0tHU0Q5qhmRAQG2HmFCbIfzb98ZDS51GLxte363k4srUrcRmiid2k6lKHP0YwZkx%2F7&X-Amz-Signature=14d021d1f2acbbe826fb55dda68b409b0f6bf8a05ed380fd684d8d41e1a0a514&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O2R7DV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCs3P7rmOwDZXjTLaaoYDiwh6b1CfAIu4eB%2F71Nm%2BYL3QIgf9KshuokRokb8XMvHWd0QNY5DzlgdRHNJQ0eWhGWgRMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZ2QascoI9tZ7w9ircA1pxJyG7gCfmCJYfS4ojFyB0ov33MhpCfz3cQBn26QC5Xa2CqP7s%2Bch3JzIcgycAm5x76kdqkdmeSn3GViVuQ8lYo6o2soNorkzwMTBX6aE8Q%2F2m%2Fb5YXRE368eHmhMSOUEp8aNTHak7GTpQXtwSVvutzhTAMH%2F9eSh%2FYPUc%2BwbzjJ9zEYampivIjlP2rtKjsuAGAEXMZtpX6jj%2BDJvIaHc7Dn4nbXg6q%2FHLNrzqdYsNBwh7ZzKHfHykXqSn2yqlus8zIlfNqhcCOypGUQ3Q2HHHA83FtPbf4b3LibXjbeEi7dsmo3H03ATLydlaHj0Nxu6rxrLHE4zB7qx53loIRIcwX4i7h%2F5a9oilgFVyEU4beWS%2FocNjyXtbmvo33zeITH4iJD5GYWyruzghJzx2LjfCDsbcQYClZ3VK46v6tbHTkK6tukz3GU7XehaJu3y%2B05GI6cZZJVVo46ATLeyr4tFLAAwINB0iGMq6BOnK6EXhNycpu%2Bo0FidviN165wcGkD2KiaZabHF6PZELMI%2BLEgR6vQDcHmmUHdSpN%2FgclNZ1SmSULgl%2B7GipqlAXLlLDdiAY9XMye5qKAcP6anSFA5FTBjGd3zf%2Bx15Iwi0X9lEZxNe9wlDC981wZtZkMLTZ0cAGOqUBcLIoJYlHlYSFvsh7qhFRK0SwMeAxIlo8y5tXhFHpaqTv%2FjZaq5phl1CS%2Br5pPu3%2B0boQkKNNofU8qeDFJo9CIdKd0lovwrEbBv8hJQkVXFZRy8ew%2Fo9vFMWf5yJ4HxcmvKJMoTyYmsYwRSuOy6e%2FKiyXvs0tHU0Q5qhmRAQG2HmFCbIfzb98ZDS51GLxte363k4srUrcRmiid2k6lKHP0YwZkx%2F7&X-Amz-Signature=9c35dda0e3d401950931ede359dcae31383cd1cfa7068d144675d23f4dc2dc48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3O2R7DV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCs3P7rmOwDZXjTLaaoYDiwh6b1CfAIu4eB%2F71Nm%2BYL3QIgf9KshuokRokb8XMvHWd0QNY5DzlgdRHNJQ0eWhGWgRMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMZ2QascoI9tZ7w9ircA1pxJyG7gCfmCJYfS4ojFyB0ov33MhpCfz3cQBn26QC5Xa2CqP7s%2Bch3JzIcgycAm5x76kdqkdmeSn3GViVuQ8lYo6o2soNorkzwMTBX6aE8Q%2F2m%2Fb5YXRE368eHmhMSOUEp8aNTHak7GTpQXtwSVvutzhTAMH%2F9eSh%2FYPUc%2BwbzjJ9zEYampivIjlP2rtKjsuAGAEXMZtpX6jj%2BDJvIaHc7Dn4nbXg6q%2FHLNrzqdYsNBwh7ZzKHfHykXqSn2yqlus8zIlfNqhcCOypGUQ3Q2HHHA83FtPbf4b3LibXjbeEi7dsmo3H03ATLydlaHj0Nxu6rxrLHE4zB7qx53loIRIcwX4i7h%2F5a9oilgFVyEU4beWS%2FocNjyXtbmvo33zeITH4iJD5GYWyruzghJzx2LjfCDsbcQYClZ3VK46v6tbHTkK6tukz3GU7XehaJu3y%2B05GI6cZZJVVo46ATLeyr4tFLAAwINB0iGMq6BOnK6EXhNycpu%2Bo0FidviN165wcGkD2KiaZabHF6PZELMI%2BLEgR6vQDcHmmUHdSpN%2FgclNZ1SmSULgl%2B7GipqlAXLlLDdiAY9XMye5qKAcP6anSFA5FTBjGd3zf%2Bx15Iwi0X9lEZxNe9wlDC981wZtZkMLTZ0cAGOqUBcLIoJYlHlYSFvsh7qhFRK0SwMeAxIlo8y5tXhFHpaqTv%2FjZaq5phl1CS%2Br5pPu3%2B0boQkKNNofU8qeDFJo9CIdKd0lovwrEbBv8hJQkVXFZRy8ew%2Fo9vFMWf5yJ4HxcmvKJMoTyYmsYwRSuOy6e%2FKiyXvs0tHU0Q5qhmRAQG2HmFCbIfzb98ZDS51GLxte363k4srUrcRmiid2k6lKHP0YwZkx%2F7&X-Amz-Signature=03d6c04dfbc704b5973189b58bd37f24dac3a0b746e198f9844e707abd22e59b&X-Amz-SignedHeaders=host&x-id=GetObject)
