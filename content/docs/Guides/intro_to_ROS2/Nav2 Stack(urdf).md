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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QO6OZC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXJnL7Prk2gYV5YoaOJrTIG40CmIjEP8gRZuOJVcwEwIgM4w6G8nZM4mF8C6aE5KRhHDWjZs%2FRDZHAkfvwcLkf64q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMgW%2Foh%2B%2F%2B7pRh0S7CrcA4WsfKlUDAB9wSxwmEVaF4GzWF8ZIrNX1CI%2FTLUSyQI7NYL07DmhBdZV8hvGfadHGVHoCusVMtljcsH6Ivz0qvfhxYFdh1IPOyPEE76pzXRhXToZEo0sWFMBCxPkVaQIKz25XwUkbpyZvvw6IkrWeHWX1OFp%2BsgAhc6VCI2rj6wWR6%2Fe5bcbjCOcxlSegv%2BUTZZ3CsGcygoBzDVAruVRET8aTkCOOT1Z5XYIXrrj4RZH24qCML%2FkJ1r3Bh2BpKHjv7VUbrhPK2s2epaCTwkwAxkiS0%2FBvlQox1hBG13WDriXAiPjBNcytjlumroetBDO5WvouTL7rCGZ20OlrXFmCVagjaa8b7pI83o0lRse6EwWt3TbgGpNLc%2FgDNTN9ihH%2Bi8LQFbFnSO9n4Ykp3uS1CZFWtQ5hwmAZGhxSHkpA9aQUxoKnDjEyuldYrzv83YXER47HUA5w7JLXOOIHSWLU%2FQeXkqiLbBQTdwbFDb05nnDDsUig8YFq3h2l9RarwPBlSZY0h%2BTSrkRQbdkxuhAPF06TG2HeE%2FlAmuCgMZ5%2Fm7FV0I8N4sM1DjW5j5srmpiEAXuu91PsfS10tYEFB%2FNylc4HDLGzqrlqyAJYPTc1Gx%2BXWfT74K%2BjIiyExxbMM3pmL8GOqUB8SvpLIHiGoq9jsfo3HO%2BxP0Vwva%2BVIJNj9DrNLlbPJfuIW5FX8UILw3Nn66EzcLZ3BV5I8%2BgnEvfe1JdGa7Hlbx3U3JCehLC7TCMWIVL0CY4OZhr5fB8aNpQfnlXVUOpIRcEaV1wdNv3VK748y0q1vEcwg00OGxvRAE9Q8GR7Ii7XMZOdpCOk%2FzpSVbI%2BIeR8NmY3rkCmutHJJJRx2G3RAgXV3wM&X-Amz-Signature=9869650c1e68a3fc17c0cad81bbbfa2714813c73d35fb27aba2da1881c09a298&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QO6OZC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXJnL7Prk2gYV5YoaOJrTIG40CmIjEP8gRZuOJVcwEwIgM4w6G8nZM4mF8C6aE5KRhHDWjZs%2FRDZHAkfvwcLkf64q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMgW%2Foh%2B%2F%2B7pRh0S7CrcA4WsfKlUDAB9wSxwmEVaF4GzWF8ZIrNX1CI%2FTLUSyQI7NYL07DmhBdZV8hvGfadHGVHoCusVMtljcsH6Ivz0qvfhxYFdh1IPOyPEE76pzXRhXToZEo0sWFMBCxPkVaQIKz25XwUkbpyZvvw6IkrWeHWX1OFp%2BsgAhc6VCI2rj6wWR6%2Fe5bcbjCOcxlSegv%2BUTZZ3CsGcygoBzDVAruVRET8aTkCOOT1Z5XYIXrrj4RZH24qCML%2FkJ1r3Bh2BpKHjv7VUbrhPK2s2epaCTwkwAxkiS0%2FBvlQox1hBG13WDriXAiPjBNcytjlumroetBDO5WvouTL7rCGZ20OlrXFmCVagjaa8b7pI83o0lRse6EwWt3TbgGpNLc%2FgDNTN9ihH%2Bi8LQFbFnSO9n4Ykp3uS1CZFWtQ5hwmAZGhxSHkpA9aQUxoKnDjEyuldYrzv83YXER47HUA5w7JLXOOIHSWLU%2FQeXkqiLbBQTdwbFDb05nnDDsUig8YFq3h2l9RarwPBlSZY0h%2BTSrkRQbdkxuhAPF06TG2HeE%2FlAmuCgMZ5%2Fm7FV0I8N4sM1DjW5j5srmpiEAXuu91PsfS10tYEFB%2FNylc4HDLGzqrlqyAJYPTc1Gx%2BXWfT74K%2BjIiyExxbMM3pmL8GOqUB8SvpLIHiGoq9jsfo3HO%2BxP0Vwva%2BVIJNj9DrNLlbPJfuIW5FX8UILw3Nn66EzcLZ3BV5I8%2BgnEvfe1JdGa7Hlbx3U3JCehLC7TCMWIVL0CY4OZhr5fB8aNpQfnlXVUOpIRcEaV1wdNv3VK748y0q1vEcwg00OGxvRAE9Q8GR7Ii7XMZOdpCOk%2FzpSVbI%2BIeR8NmY3rkCmutHJJJRx2G3RAgXV3wM&X-Amz-Signature=cb99486b88d65d42ec28dd85b4dcbcd6862edae9454eab1223be38e6936f43ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QO6OZC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXJnL7Prk2gYV5YoaOJrTIG40CmIjEP8gRZuOJVcwEwIgM4w6G8nZM4mF8C6aE5KRhHDWjZs%2FRDZHAkfvwcLkf64q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMgW%2Foh%2B%2F%2B7pRh0S7CrcA4WsfKlUDAB9wSxwmEVaF4GzWF8ZIrNX1CI%2FTLUSyQI7NYL07DmhBdZV8hvGfadHGVHoCusVMtljcsH6Ivz0qvfhxYFdh1IPOyPEE76pzXRhXToZEo0sWFMBCxPkVaQIKz25XwUkbpyZvvw6IkrWeHWX1OFp%2BsgAhc6VCI2rj6wWR6%2Fe5bcbjCOcxlSegv%2BUTZZ3CsGcygoBzDVAruVRET8aTkCOOT1Z5XYIXrrj4RZH24qCML%2FkJ1r3Bh2BpKHjv7VUbrhPK2s2epaCTwkwAxkiS0%2FBvlQox1hBG13WDriXAiPjBNcytjlumroetBDO5WvouTL7rCGZ20OlrXFmCVagjaa8b7pI83o0lRse6EwWt3TbgGpNLc%2FgDNTN9ihH%2Bi8LQFbFnSO9n4Ykp3uS1CZFWtQ5hwmAZGhxSHkpA9aQUxoKnDjEyuldYrzv83YXER47HUA5w7JLXOOIHSWLU%2FQeXkqiLbBQTdwbFDb05nnDDsUig8YFq3h2l9RarwPBlSZY0h%2BTSrkRQbdkxuhAPF06TG2HeE%2FlAmuCgMZ5%2Fm7FV0I8N4sM1DjW5j5srmpiEAXuu91PsfS10tYEFB%2FNylc4HDLGzqrlqyAJYPTc1Gx%2BXWfT74K%2BjIiyExxbMM3pmL8GOqUB8SvpLIHiGoq9jsfo3HO%2BxP0Vwva%2BVIJNj9DrNLlbPJfuIW5FX8UILw3Nn66EzcLZ3BV5I8%2BgnEvfe1JdGa7Hlbx3U3JCehLC7TCMWIVL0CY4OZhr5fB8aNpQfnlXVUOpIRcEaV1wdNv3VK748y0q1vEcwg00OGxvRAE9Q8GR7Ii7XMZOdpCOk%2FzpSVbI%2BIeR8NmY3rkCmutHJJJRx2G3RAgXV3wM&X-Amz-Signature=34888a4140f64c47d2a5803ae54bfedb322c2dd78becf37511bf590925574740&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QO6OZC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXJnL7Prk2gYV5YoaOJrTIG40CmIjEP8gRZuOJVcwEwIgM4w6G8nZM4mF8C6aE5KRhHDWjZs%2FRDZHAkfvwcLkf64q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMgW%2Foh%2B%2F%2B7pRh0S7CrcA4WsfKlUDAB9wSxwmEVaF4GzWF8ZIrNX1CI%2FTLUSyQI7NYL07DmhBdZV8hvGfadHGVHoCusVMtljcsH6Ivz0qvfhxYFdh1IPOyPEE76pzXRhXToZEo0sWFMBCxPkVaQIKz25XwUkbpyZvvw6IkrWeHWX1OFp%2BsgAhc6VCI2rj6wWR6%2Fe5bcbjCOcxlSegv%2BUTZZ3CsGcygoBzDVAruVRET8aTkCOOT1Z5XYIXrrj4RZH24qCML%2FkJ1r3Bh2BpKHjv7VUbrhPK2s2epaCTwkwAxkiS0%2FBvlQox1hBG13WDriXAiPjBNcytjlumroetBDO5WvouTL7rCGZ20OlrXFmCVagjaa8b7pI83o0lRse6EwWt3TbgGpNLc%2FgDNTN9ihH%2Bi8LQFbFnSO9n4Ykp3uS1CZFWtQ5hwmAZGhxSHkpA9aQUxoKnDjEyuldYrzv83YXER47HUA5w7JLXOOIHSWLU%2FQeXkqiLbBQTdwbFDb05nnDDsUig8YFq3h2l9RarwPBlSZY0h%2BTSrkRQbdkxuhAPF06TG2HeE%2FlAmuCgMZ5%2Fm7FV0I8N4sM1DjW5j5srmpiEAXuu91PsfS10tYEFB%2FNylc4HDLGzqrlqyAJYPTc1Gx%2BXWfT74K%2BjIiyExxbMM3pmL8GOqUB8SvpLIHiGoq9jsfo3HO%2BxP0Vwva%2BVIJNj9DrNLlbPJfuIW5FX8UILw3Nn66EzcLZ3BV5I8%2BgnEvfe1JdGa7Hlbx3U3JCehLC7TCMWIVL0CY4OZhr5fB8aNpQfnlXVUOpIRcEaV1wdNv3VK748y0q1vEcwg00OGxvRAE9Q8GR7Ii7XMZOdpCOk%2FzpSVbI%2BIeR8NmY3rkCmutHJJJRx2G3RAgXV3wM&X-Amz-Signature=dfa493c8291e4761481106925283383f85aafec28807fa68f624b96911578b78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QO6OZC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXJnL7Prk2gYV5YoaOJrTIG40CmIjEP8gRZuOJVcwEwIgM4w6G8nZM4mF8C6aE5KRhHDWjZs%2FRDZHAkfvwcLkf64q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMgW%2Foh%2B%2F%2B7pRh0S7CrcA4WsfKlUDAB9wSxwmEVaF4GzWF8ZIrNX1CI%2FTLUSyQI7NYL07DmhBdZV8hvGfadHGVHoCusVMtljcsH6Ivz0qvfhxYFdh1IPOyPEE76pzXRhXToZEo0sWFMBCxPkVaQIKz25XwUkbpyZvvw6IkrWeHWX1OFp%2BsgAhc6VCI2rj6wWR6%2Fe5bcbjCOcxlSegv%2BUTZZ3CsGcygoBzDVAruVRET8aTkCOOT1Z5XYIXrrj4RZH24qCML%2FkJ1r3Bh2BpKHjv7VUbrhPK2s2epaCTwkwAxkiS0%2FBvlQox1hBG13WDriXAiPjBNcytjlumroetBDO5WvouTL7rCGZ20OlrXFmCVagjaa8b7pI83o0lRse6EwWt3TbgGpNLc%2FgDNTN9ihH%2Bi8LQFbFnSO9n4Ykp3uS1CZFWtQ5hwmAZGhxSHkpA9aQUxoKnDjEyuldYrzv83YXER47HUA5w7JLXOOIHSWLU%2FQeXkqiLbBQTdwbFDb05nnDDsUig8YFq3h2l9RarwPBlSZY0h%2BTSrkRQbdkxuhAPF06TG2HeE%2FlAmuCgMZ5%2Fm7FV0I8N4sM1DjW5j5srmpiEAXuu91PsfS10tYEFB%2FNylc4HDLGzqrlqyAJYPTc1Gx%2BXWfT74K%2BjIiyExxbMM3pmL8GOqUB8SvpLIHiGoq9jsfo3HO%2BxP0Vwva%2BVIJNj9DrNLlbPJfuIW5FX8UILw3Nn66EzcLZ3BV5I8%2BgnEvfe1JdGa7Hlbx3U3JCehLC7TCMWIVL0CY4OZhr5fB8aNpQfnlXVUOpIRcEaV1wdNv3VK748y0q1vEcwg00OGxvRAE9Q8GR7Ii7XMZOdpCOk%2FzpSVbI%2BIeR8NmY3rkCmutHJJJRx2G3RAgXV3wM&X-Amz-Signature=ad7d6e8ef4121ebf212129fbfb6b197ce188169988a815516d7d3ff19ac39ace&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QO6OZC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRXJnL7Prk2gYV5YoaOJrTIG40CmIjEP8gRZuOJVcwEwIgM4w6G8nZM4mF8C6aE5KRhHDWjZs%2FRDZHAkfvwcLkf64q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMgW%2Foh%2B%2F%2B7pRh0S7CrcA4WsfKlUDAB9wSxwmEVaF4GzWF8ZIrNX1CI%2FTLUSyQI7NYL07DmhBdZV8hvGfadHGVHoCusVMtljcsH6Ivz0qvfhxYFdh1IPOyPEE76pzXRhXToZEo0sWFMBCxPkVaQIKz25XwUkbpyZvvw6IkrWeHWX1OFp%2BsgAhc6VCI2rj6wWR6%2Fe5bcbjCOcxlSegv%2BUTZZ3CsGcygoBzDVAruVRET8aTkCOOT1Z5XYIXrrj4RZH24qCML%2FkJ1r3Bh2BpKHjv7VUbrhPK2s2epaCTwkwAxkiS0%2FBvlQox1hBG13WDriXAiPjBNcytjlumroetBDO5WvouTL7rCGZ20OlrXFmCVagjaa8b7pI83o0lRse6EwWt3TbgGpNLc%2FgDNTN9ihH%2Bi8LQFbFnSO9n4Ykp3uS1CZFWtQ5hwmAZGhxSHkpA9aQUxoKnDjEyuldYrzv83YXER47HUA5w7JLXOOIHSWLU%2FQeXkqiLbBQTdwbFDb05nnDDsUig8YFq3h2l9RarwPBlSZY0h%2BTSrkRQbdkxuhAPF06TG2HeE%2FlAmuCgMZ5%2Fm7FV0I8N4sM1DjW5j5srmpiEAXuu91PsfS10tYEFB%2FNylc4HDLGzqrlqyAJYPTc1Gx%2BXWfT74K%2BjIiyExxbMM3pmL8GOqUB8SvpLIHiGoq9jsfo3HO%2BxP0Vwva%2BVIJNj9DrNLlbPJfuIW5FX8UILw3Nn66EzcLZ3BV5I8%2BgnEvfe1JdGa7Hlbx3U3JCehLC7TCMWIVL0CY4OZhr5fB8aNpQfnlXVUOpIRcEaV1wdNv3VK748y0q1vEcwg00OGxvRAE9Q8GR7Ii7XMZOdpCOk%2FzpSVbI%2BIeR8NmY3rkCmutHJJJRx2G3RAgXV3wM&X-Amz-Signature=fa336d26bf400640f45cebdd73f60eb0881e3c2481b17fbe15d49d9e4e2c942e&X-Amz-SignedHeaders=host&x-id=GetObject)
