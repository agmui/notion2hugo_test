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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=8ab91e696813b465e3c38185c5a1ef9029b8199b333851197486dce96767e778&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=37d331f364015b410848cf5b385b89f00d8ac4f803f86ff99226ca3a7d3550d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=24d24d4bcfcccfe6b810253480f5e142bdba826685081b0f9442c55ed0fca115&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=b1abb1da6bc41b11e2d0195ad845da3b75a9e55e1b2b42ec5a42ef847d10e11d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=e57e5f2a66477595b986addfdf70596088769dfa3466673924ce70cb71a7bdac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=085a82392b7cfa702bc85bb1551ced4fb59db2280f8a0400ed3722d8c8efec90&X-Amz-SignedHeaders=host&x-id=GetObject)
