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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NAZETT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2YmJU8WQqrRz9JUo%2Ft88orf8TudBit9PYD0PIKcXdXAiEAjbDIFynS4jAvJ4sUmaXLGRmt6NdCg8JqI2zE9%2BKxGwwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1RGguNGA4i5YpDXircA32mHO3%2F%2BMQnFhJ4UDzqXOL7BAWyofn%2F%2FZ%2BqzBf0mkKzmEEoAuYTDFEGK85GpI90cr6fKViKI%2FhTp%2FrIf59V5XhIVcs0tCYeZAr9McDC2u6L%2BP5bSLsMXU2Zq3LJof0FevCoVlTamC8dnDmfi2wSe23O1XgAo%2FcpSGQCq21lMkvTS4TCtZTOnlEtHYA9bI%2BdaEBRvSWfXLHF%2BUx32boHsExcNYqJofuahZhaRDnNoqP4Wt6IbbhLe3bJNilPcuvW5f8cBjrU5rf9j%2BcrVIz7POIiWkzl1MWRn8nwdX%2B4CHD0TL3%2F%2FBk8%2F7VEqqmr0qx8v1m%2Fq3WSQ9wTqrepi%2BR1w4Vlyq6UHh2gZ0tIiAtUOse28uuWEzu6%2F%2FwPq6xARQK6BrD6EZOKolbLMopLslYr8uKwKCo0AsZJ1WVuuCBkknQYIC68v8Tknr6nia5ypXVICk2I1qjdUPP0LBDjaEriy5%2FnxnDXDZ%2FtPAFBx%2BdxdwNjOwa0OfITE%2B1MnpfYm8G5cjDvzfEq1tgzwdt%2Bb%2B1GiX2ERkTvMlXWoHRKX6yCcMWwJX7oubh9stUuzioF2kg5K0thkIs8wmjGydQ%2FQ%2FlmtqQTjMLO%2BES8PZb5iK6FMkxVj4FKacRcmPOG5LzIMKrVxcMGOqUBOlfcmV3azkVT%2FKeXAWp6pvskAhXZDDvyl9xued%2F0zqKIbTiY0yvTWNoAVPZd4dXymndAAJJfhca8yHXeohvCZHFpqpeL%2B4bB0ojYPiRJXqWZWzHntW3K%2FhOSKuzEFT1nmEEkpX17Dk%2BMVDLZBm2dPUSDv%2BhP%2B3SpHkAS5RTr%2FHkJdp1LfCZRhtm2XppNHBR%2Bnw6cRTQqjV%2F5IPOmcqNs%2FSBf1mGn&X-Amz-Signature=4945e0a9547b5c986f6990411f0d1331810137333eac6713626cb98f1defb139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NAZETT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2YmJU8WQqrRz9JUo%2Ft88orf8TudBit9PYD0PIKcXdXAiEAjbDIFynS4jAvJ4sUmaXLGRmt6NdCg8JqI2zE9%2BKxGwwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1RGguNGA4i5YpDXircA32mHO3%2F%2BMQnFhJ4UDzqXOL7BAWyofn%2F%2FZ%2BqzBf0mkKzmEEoAuYTDFEGK85GpI90cr6fKViKI%2FhTp%2FrIf59V5XhIVcs0tCYeZAr9McDC2u6L%2BP5bSLsMXU2Zq3LJof0FevCoVlTamC8dnDmfi2wSe23O1XgAo%2FcpSGQCq21lMkvTS4TCtZTOnlEtHYA9bI%2BdaEBRvSWfXLHF%2BUx32boHsExcNYqJofuahZhaRDnNoqP4Wt6IbbhLe3bJNilPcuvW5f8cBjrU5rf9j%2BcrVIz7POIiWkzl1MWRn8nwdX%2B4CHD0TL3%2F%2FBk8%2F7VEqqmr0qx8v1m%2Fq3WSQ9wTqrepi%2BR1w4Vlyq6UHh2gZ0tIiAtUOse28uuWEzu6%2F%2FwPq6xARQK6BrD6EZOKolbLMopLslYr8uKwKCo0AsZJ1WVuuCBkknQYIC68v8Tknr6nia5ypXVICk2I1qjdUPP0LBDjaEriy5%2FnxnDXDZ%2FtPAFBx%2BdxdwNjOwa0OfITE%2B1MnpfYm8G5cjDvzfEq1tgzwdt%2Bb%2B1GiX2ERkTvMlXWoHRKX6yCcMWwJX7oubh9stUuzioF2kg5K0thkIs8wmjGydQ%2FQ%2FlmtqQTjMLO%2BES8PZb5iK6FMkxVj4FKacRcmPOG5LzIMKrVxcMGOqUBOlfcmV3azkVT%2FKeXAWp6pvskAhXZDDvyl9xued%2F0zqKIbTiY0yvTWNoAVPZd4dXymndAAJJfhca8yHXeohvCZHFpqpeL%2B4bB0ojYPiRJXqWZWzHntW3K%2FhOSKuzEFT1nmEEkpX17Dk%2BMVDLZBm2dPUSDv%2BhP%2B3SpHkAS5RTr%2FHkJdp1LfCZRhtm2XppNHBR%2Bnw6cRTQqjV%2F5IPOmcqNs%2FSBf1mGn&X-Amz-Signature=7faff03a2ef0075e610a0fd2a168cfe159dfa4e61b53da306ebd571dcd1ec164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NAZETT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2YmJU8WQqrRz9JUo%2Ft88orf8TudBit9PYD0PIKcXdXAiEAjbDIFynS4jAvJ4sUmaXLGRmt6NdCg8JqI2zE9%2BKxGwwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1RGguNGA4i5YpDXircA32mHO3%2F%2BMQnFhJ4UDzqXOL7BAWyofn%2F%2FZ%2BqzBf0mkKzmEEoAuYTDFEGK85GpI90cr6fKViKI%2FhTp%2FrIf59V5XhIVcs0tCYeZAr9McDC2u6L%2BP5bSLsMXU2Zq3LJof0FevCoVlTamC8dnDmfi2wSe23O1XgAo%2FcpSGQCq21lMkvTS4TCtZTOnlEtHYA9bI%2BdaEBRvSWfXLHF%2BUx32boHsExcNYqJofuahZhaRDnNoqP4Wt6IbbhLe3bJNilPcuvW5f8cBjrU5rf9j%2BcrVIz7POIiWkzl1MWRn8nwdX%2B4CHD0TL3%2F%2FBk8%2F7VEqqmr0qx8v1m%2Fq3WSQ9wTqrepi%2BR1w4Vlyq6UHh2gZ0tIiAtUOse28uuWEzu6%2F%2FwPq6xARQK6BrD6EZOKolbLMopLslYr8uKwKCo0AsZJ1WVuuCBkknQYIC68v8Tknr6nia5ypXVICk2I1qjdUPP0LBDjaEriy5%2FnxnDXDZ%2FtPAFBx%2BdxdwNjOwa0OfITE%2B1MnpfYm8G5cjDvzfEq1tgzwdt%2Bb%2B1GiX2ERkTvMlXWoHRKX6yCcMWwJX7oubh9stUuzioF2kg5K0thkIs8wmjGydQ%2FQ%2FlmtqQTjMLO%2BES8PZb5iK6FMkxVj4FKacRcmPOG5LzIMKrVxcMGOqUBOlfcmV3azkVT%2FKeXAWp6pvskAhXZDDvyl9xued%2F0zqKIbTiY0yvTWNoAVPZd4dXymndAAJJfhca8yHXeohvCZHFpqpeL%2B4bB0ojYPiRJXqWZWzHntW3K%2FhOSKuzEFT1nmEEkpX17Dk%2BMVDLZBm2dPUSDv%2BhP%2B3SpHkAS5RTr%2FHkJdp1LfCZRhtm2XppNHBR%2Bnw6cRTQqjV%2F5IPOmcqNs%2FSBf1mGn&X-Amz-Signature=78aff8e2fdd85e92998dc8dafdc93b89eea7304d4dd9485358f96d2479f8f10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NAZETT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2YmJU8WQqrRz9JUo%2Ft88orf8TudBit9PYD0PIKcXdXAiEAjbDIFynS4jAvJ4sUmaXLGRmt6NdCg8JqI2zE9%2BKxGwwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1RGguNGA4i5YpDXircA32mHO3%2F%2BMQnFhJ4UDzqXOL7BAWyofn%2F%2FZ%2BqzBf0mkKzmEEoAuYTDFEGK85GpI90cr6fKViKI%2FhTp%2FrIf59V5XhIVcs0tCYeZAr9McDC2u6L%2BP5bSLsMXU2Zq3LJof0FevCoVlTamC8dnDmfi2wSe23O1XgAo%2FcpSGQCq21lMkvTS4TCtZTOnlEtHYA9bI%2BdaEBRvSWfXLHF%2BUx32boHsExcNYqJofuahZhaRDnNoqP4Wt6IbbhLe3bJNilPcuvW5f8cBjrU5rf9j%2BcrVIz7POIiWkzl1MWRn8nwdX%2B4CHD0TL3%2F%2FBk8%2F7VEqqmr0qx8v1m%2Fq3WSQ9wTqrepi%2BR1w4Vlyq6UHh2gZ0tIiAtUOse28uuWEzu6%2F%2FwPq6xARQK6BrD6EZOKolbLMopLslYr8uKwKCo0AsZJ1WVuuCBkknQYIC68v8Tknr6nia5ypXVICk2I1qjdUPP0LBDjaEriy5%2FnxnDXDZ%2FtPAFBx%2BdxdwNjOwa0OfITE%2B1MnpfYm8G5cjDvzfEq1tgzwdt%2Bb%2B1GiX2ERkTvMlXWoHRKX6yCcMWwJX7oubh9stUuzioF2kg5K0thkIs8wmjGydQ%2FQ%2FlmtqQTjMLO%2BES8PZb5iK6FMkxVj4FKacRcmPOG5LzIMKrVxcMGOqUBOlfcmV3azkVT%2FKeXAWp6pvskAhXZDDvyl9xued%2F0zqKIbTiY0yvTWNoAVPZd4dXymndAAJJfhca8yHXeohvCZHFpqpeL%2B4bB0ojYPiRJXqWZWzHntW3K%2FhOSKuzEFT1nmEEkpX17Dk%2BMVDLZBm2dPUSDv%2BhP%2B3SpHkAS5RTr%2FHkJdp1LfCZRhtm2XppNHBR%2Bnw6cRTQqjV%2F5IPOmcqNs%2FSBf1mGn&X-Amz-Signature=5107c50eb375531b05613d94d04f11da84978125b68028fc626a965d573c7131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NAZETT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2YmJU8WQqrRz9JUo%2Ft88orf8TudBit9PYD0PIKcXdXAiEAjbDIFynS4jAvJ4sUmaXLGRmt6NdCg8JqI2zE9%2BKxGwwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1RGguNGA4i5YpDXircA32mHO3%2F%2BMQnFhJ4UDzqXOL7BAWyofn%2F%2FZ%2BqzBf0mkKzmEEoAuYTDFEGK85GpI90cr6fKViKI%2FhTp%2FrIf59V5XhIVcs0tCYeZAr9McDC2u6L%2BP5bSLsMXU2Zq3LJof0FevCoVlTamC8dnDmfi2wSe23O1XgAo%2FcpSGQCq21lMkvTS4TCtZTOnlEtHYA9bI%2BdaEBRvSWfXLHF%2BUx32boHsExcNYqJofuahZhaRDnNoqP4Wt6IbbhLe3bJNilPcuvW5f8cBjrU5rf9j%2BcrVIz7POIiWkzl1MWRn8nwdX%2B4CHD0TL3%2F%2FBk8%2F7VEqqmr0qx8v1m%2Fq3WSQ9wTqrepi%2BR1w4Vlyq6UHh2gZ0tIiAtUOse28uuWEzu6%2F%2FwPq6xARQK6BrD6EZOKolbLMopLslYr8uKwKCo0AsZJ1WVuuCBkknQYIC68v8Tknr6nia5ypXVICk2I1qjdUPP0LBDjaEriy5%2FnxnDXDZ%2FtPAFBx%2BdxdwNjOwa0OfITE%2B1MnpfYm8G5cjDvzfEq1tgzwdt%2Bb%2B1GiX2ERkTvMlXWoHRKX6yCcMWwJX7oubh9stUuzioF2kg5K0thkIs8wmjGydQ%2FQ%2FlmtqQTjMLO%2BES8PZb5iK6FMkxVj4FKacRcmPOG5LzIMKrVxcMGOqUBOlfcmV3azkVT%2FKeXAWp6pvskAhXZDDvyl9xued%2F0zqKIbTiY0yvTWNoAVPZd4dXymndAAJJfhca8yHXeohvCZHFpqpeL%2B4bB0ojYPiRJXqWZWzHntW3K%2FhOSKuzEFT1nmEEkpX17Dk%2BMVDLZBm2dPUSDv%2BhP%2B3SpHkAS5RTr%2FHkJdp1LfCZRhtm2XppNHBR%2Bnw6cRTQqjV%2F5IPOmcqNs%2FSBf1mGn&X-Amz-Signature=6181e1495826973db119ac248bfcd842045cfa237cacb1cbf9be465216bce727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NAZETT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2YmJU8WQqrRz9JUo%2Ft88orf8TudBit9PYD0PIKcXdXAiEAjbDIFynS4jAvJ4sUmaXLGRmt6NdCg8JqI2zE9%2BKxGwwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1RGguNGA4i5YpDXircA32mHO3%2F%2BMQnFhJ4UDzqXOL7BAWyofn%2F%2FZ%2BqzBf0mkKzmEEoAuYTDFEGK85GpI90cr6fKViKI%2FhTp%2FrIf59V5XhIVcs0tCYeZAr9McDC2u6L%2BP5bSLsMXU2Zq3LJof0FevCoVlTamC8dnDmfi2wSe23O1XgAo%2FcpSGQCq21lMkvTS4TCtZTOnlEtHYA9bI%2BdaEBRvSWfXLHF%2BUx32boHsExcNYqJofuahZhaRDnNoqP4Wt6IbbhLe3bJNilPcuvW5f8cBjrU5rf9j%2BcrVIz7POIiWkzl1MWRn8nwdX%2B4CHD0TL3%2F%2FBk8%2F7VEqqmr0qx8v1m%2Fq3WSQ9wTqrepi%2BR1w4Vlyq6UHh2gZ0tIiAtUOse28uuWEzu6%2F%2FwPq6xARQK6BrD6EZOKolbLMopLslYr8uKwKCo0AsZJ1WVuuCBkknQYIC68v8Tknr6nia5ypXVICk2I1qjdUPP0LBDjaEriy5%2FnxnDXDZ%2FtPAFBx%2BdxdwNjOwa0OfITE%2B1MnpfYm8G5cjDvzfEq1tgzwdt%2Bb%2B1GiX2ERkTvMlXWoHRKX6yCcMWwJX7oubh9stUuzioF2kg5K0thkIs8wmjGydQ%2FQ%2FlmtqQTjMLO%2BES8PZb5iK6FMkxVj4FKacRcmPOG5LzIMKrVxcMGOqUBOlfcmV3azkVT%2FKeXAWp6pvskAhXZDDvyl9xued%2F0zqKIbTiY0yvTWNoAVPZd4dXymndAAJJfhca8yHXeohvCZHFpqpeL%2B4bB0ojYPiRJXqWZWzHntW3K%2FhOSKuzEFT1nmEEkpX17Dk%2BMVDLZBm2dPUSDv%2BhP%2B3SpHkAS5RTr%2FHkJdp1LfCZRhtm2XppNHBR%2Bnw6cRTQqjV%2F5IPOmcqNs%2FSBf1mGn&X-Amz-Signature=0c1e212bc4d3808b990eac68374f0b5fe372452a1411d1805e470290eebc3351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
