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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=e43b16dcd8d86c207f54057e0bd3597cbaaf260a666f962e6629ac9fb57a0dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=fe273b5539531c5d6c46ed5659dbf5a7878e0e5fc042e4e505b158eb005db431&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=536787cc6a03ebf9571e0c2013bd94da840a6ea9eb4f7b524676d7397b98b243&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=e07ac357d7d53edbbec564fd0dc3857e6985b93e1d7ecf60595b799cb8ceeabd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=ac5cad1bc3bddbeac356294a9f325c9bc73a690703ffcd2bfd7b1f63daaca7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBHYRZ2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESuYF1%2BR1S88bIsYcEZbhazpt0shhwvIxwYiHLjjKXgIgfO6bYGF1jZPJL9Bji%2BzKskn6cNYXLhbKbfgTqjmTc3Eq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEkGmWPEnZQiFuEeTyrcA9YMhe%2BRfPFeGCG%2B9v21KdJL5dlDCh7OUfk%2FUsxPvC9x%2B%2BslOSB8DejIt0MdA9%2FpYOTzUEbzUi3SZ6WtT3u3ZDztT%2BslRk%2FesA4rEVtxAMY08ySTPtGgXGnNk4R3%2BT3Hjd3WN8JBfAi4LEgxbp50C7XP15rMlHeC%2BCgQA8LFhlLEX89hWzKxLj%2FsSDvCOxbifL8eVaK%2FfZmlnZ0nfsEs8APzZ6F1%2Bfcr%2FSnJQL8yBUx8u6OAt9fx3nku0%2B0PTFM%2Fdhdqo7oTDhcbAyfZoki7C6PwLY2gauNvLAp7vIhemTKcGOKyrLTS060bPMm2y7v9HwZr1oE7mdcP517LDKw9D4o4MAc6EegXc2CmS7aDuifli%2FFi18sGLyZDn1mucxRgSY%2FTtiQaMvuvcIHCi2jIP9kwvL%2FygAr3kwVgWpoCNP5lY%2FUjIzlH%2BmdmgKafEpN0vPt97KyM2c8mzVaKRFFi3efSmgPsDWoOZ0xGFAo6qF%2FAaiTyv4rlTI11tL0DcsApYF15FkUtKfQa7YGiIzKDkJJ7mHeBAlFxWtG%2B1LAjO2JO9kDKs7FT8s3EumceE1QmTd%2BHCIFMrKAFOiglrWfwqHfIfhqztU4CDkrNTyOwKTZK6foVHDYcPsVFi4IxML%2BL1r4GOqUB94WMo%2F0snT3j9U%2B28VvmN7Jvo6nsQTi7Y%2F3AoGf4ie1w9wjS182vR%2BEYg%2FdlZLhtJzxXmi0MB0Xtd%2BMksWJJeDvfBlW3nghigwvKq9a3RrdqdWLVAvXqaNNqPSums8oSpJ5uTTcwH83zJAMzq7cbBfgx2QH5sldftlceMH87klbe6pTHdcPSIHDup52YaZ9MHuTlhRnsRkIaoWipPyQYRXfa08TC&X-Amz-Signature=05b070ba1d90001b62d91bf3e9ef5a08c7f714d24bafb6d89d63eeaf33154794&X-Amz-SignedHeaders=host&x-id=GetObject)
