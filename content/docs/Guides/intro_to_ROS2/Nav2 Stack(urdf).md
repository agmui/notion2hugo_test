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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQC4O7VX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMOnnLWFnPdFZHWsMf8f4ap0DtAg1uKLZ40%2FvRbzkEPAiEA9wt51lp6qh7KGzQ8XvlmZxjBKubiaDyREz1LNDQrAeMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMa4OARY4%2FlOfd9UXyrcAzZZhq9l9nLDUA2ww1hPc6e6YDLwT4XnOxUncnTkG%2Ff0Wv884dSvE%2FP3ieKwYSbsgaIcGGVDQBMIMQQUV3xxUU9taUZPV4RlDit3VH3lYt24hU5hn%2FlUCoNnCksZM8Lt8lWQ9okMs52UZy8ndlmcBsNeWBH6WvDt5jd%2BMCbP8IGEoupsaZEPShE7M2ixeK%2B51VWqdQDIH67VBhZfr%2FTjUsbfjda9GEZQnph8ep%2BaFSfJguEiLt%2BlMlqzg3Y1maxp9ovXGeoU3av1V%2FTFvFmY%2FswyIOGCR0Ia2K%2Bh6RWKankhxAzNcA1iuTEurBeCSpsCQ1P2J7ly6MQDubFvvZjlf2MZTDwL03OcxH5ILBpGTc8wI4rUmMwLUgqgWBRXCEDpvArLMZt%2FPVjtwn3%2FRmoV9IEmcNm4c8w6PJNxrQZNcHRvNyOVTokSIb12%2BLmheDH2jJvKazpzLMbrYTpBxhbY%2BHRhVVWaLhq3B5BIHSWL2e0N7R1ShhRplHaCCd4or0cNvwNBXNekZPahuvCXU4Z7rd2XNP14g61lUL6KrOoSgcHcqTyd9hiDi2U473S3a5Gq2vhWWs5aL2u9xW0pCcqmc%2Bf719wDGGTcpgLNWCiZIzlbfS%2F9nV%2F2OIoNJSS0MPL6gsAGOqUBn80vCEzQawDqsCs0A9xrOxZ2W0Iajfd3xKTLwRjrK6%2B9%2BhyDOennYIqj2zhfECvnnLz4IykRpjhnVUd%2Fsmfz4YIzk4raXQcZC2fXQB2N9JE7mFZq0dbPJs7jDw%2BXVnCVysN%2BPGxwtC8aQsb8ZONcP0bpmA6CGj%2F2l2AmalOz4WnXXe3PbUBqKCvSSz13kyG5FkeUq1RPvRXjKMZhB5iJ3qZHi44P&X-Amz-Signature=5191bcaa15ea503bca4629bf3fe82ae4d187f04b880073712bb516e6d0e3f07d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQC4O7VX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMOnnLWFnPdFZHWsMf8f4ap0DtAg1uKLZ40%2FvRbzkEPAiEA9wt51lp6qh7KGzQ8XvlmZxjBKubiaDyREz1LNDQrAeMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMa4OARY4%2FlOfd9UXyrcAzZZhq9l9nLDUA2ww1hPc6e6YDLwT4XnOxUncnTkG%2Ff0Wv884dSvE%2FP3ieKwYSbsgaIcGGVDQBMIMQQUV3xxUU9taUZPV4RlDit3VH3lYt24hU5hn%2FlUCoNnCksZM8Lt8lWQ9okMs52UZy8ndlmcBsNeWBH6WvDt5jd%2BMCbP8IGEoupsaZEPShE7M2ixeK%2B51VWqdQDIH67VBhZfr%2FTjUsbfjda9GEZQnph8ep%2BaFSfJguEiLt%2BlMlqzg3Y1maxp9ovXGeoU3av1V%2FTFvFmY%2FswyIOGCR0Ia2K%2Bh6RWKankhxAzNcA1iuTEurBeCSpsCQ1P2J7ly6MQDubFvvZjlf2MZTDwL03OcxH5ILBpGTc8wI4rUmMwLUgqgWBRXCEDpvArLMZt%2FPVjtwn3%2FRmoV9IEmcNm4c8w6PJNxrQZNcHRvNyOVTokSIb12%2BLmheDH2jJvKazpzLMbrYTpBxhbY%2BHRhVVWaLhq3B5BIHSWL2e0N7R1ShhRplHaCCd4or0cNvwNBXNekZPahuvCXU4Z7rd2XNP14g61lUL6KrOoSgcHcqTyd9hiDi2U473S3a5Gq2vhWWs5aL2u9xW0pCcqmc%2Bf719wDGGTcpgLNWCiZIzlbfS%2F9nV%2F2OIoNJSS0MPL6gsAGOqUBn80vCEzQawDqsCs0A9xrOxZ2W0Iajfd3xKTLwRjrK6%2B9%2BhyDOennYIqj2zhfECvnnLz4IykRpjhnVUd%2Fsmfz4YIzk4raXQcZC2fXQB2N9JE7mFZq0dbPJs7jDw%2BXVnCVysN%2BPGxwtC8aQsb8ZONcP0bpmA6CGj%2F2l2AmalOz4WnXXe3PbUBqKCvSSz13kyG5FkeUq1RPvRXjKMZhB5iJ3qZHi44P&X-Amz-Signature=f16d79ce38448656cc5cee282444bc95e91c0fe28527154279e4b04fa5795dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQC4O7VX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMOnnLWFnPdFZHWsMf8f4ap0DtAg1uKLZ40%2FvRbzkEPAiEA9wt51lp6qh7KGzQ8XvlmZxjBKubiaDyREz1LNDQrAeMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMa4OARY4%2FlOfd9UXyrcAzZZhq9l9nLDUA2ww1hPc6e6YDLwT4XnOxUncnTkG%2Ff0Wv884dSvE%2FP3ieKwYSbsgaIcGGVDQBMIMQQUV3xxUU9taUZPV4RlDit3VH3lYt24hU5hn%2FlUCoNnCksZM8Lt8lWQ9okMs52UZy8ndlmcBsNeWBH6WvDt5jd%2BMCbP8IGEoupsaZEPShE7M2ixeK%2B51VWqdQDIH67VBhZfr%2FTjUsbfjda9GEZQnph8ep%2BaFSfJguEiLt%2BlMlqzg3Y1maxp9ovXGeoU3av1V%2FTFvFmY%2FswyIOGCR0Ia2K%2Bh6RWKankhxAzNcA1iuTEurBeCSpsCQ1P2J7ly6MQDubFvvZjlf2MZTDwL03OcxH5ILBpGTc8wI4rUmMwLUgqgWBRXCEDpvArLMZt%2FPVjtwn3%2FRmoV9IEmcNm4c8w6PJNxrQZNcHRvNyOVTokSIb12%2BLmheDH2jJvKazpzLMbrYTpBxhbY%2BHRhVVWaLhq3B5BIHSWL2e0N7R1ShhRplHaCCd4or0cNvwNBXNekZPahuvCXU4Z7rd2XNP14g61lUL6KrOoSgcHcqTyd9hiDi2U473S3a5Gq2vhWWs5aL2u9xW0pCcqmc%2Bf719wDGGTcpgLNWCiZIzlbfS%2F9nV%2F2OIoNJSS0MPL6gsAGOqUBn80vCEzQawDqsCs0A9xrOxZ2W0Iajfd3xKTLwRjrK6%2B9%2BhyDOennYIqj2zhfECvnnLz4IykRpjhnVUd%2Fsmfz4YIzk4raXQcZC2fXQB2N9JE7mFZq0dbPJs7jDw%2BXVnCVysN%2BPGxwtC8aQsb8ZONcP0bpmA6CGj%2F2l2AmalOz4WnXXe3PbUBqKCvSSz13kyG5FkeUq1RPvRXjKMZhB5iJ3qZHi44P&X-Amz-Signature=600e8b6385f890682d9b5ddbb6965d4a00f191185ba766cb0b2c6902a5a7ca11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQC4O7VX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMOnnLWFnPdFZHWsMf8f4ap0DtAg1uKLZ40%2FvRbzkEPAiEA9wt51lp6qh7KGzQ8XvlmZxjBKubiaDyREz1LNDQrAeMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMa4OARY4%2FlOfd9UXyrcAzZZhq9l9nLDUA2ww1hPc6e6YDLwT4XnOxUncnTkG%2Ff0Wv884dSvE%2FP3ieKwYSbsgaIcGGVDQBMIMQQUV3xxUU9taUZPV4RlDit3VH3lYt24hU5hn%2FlUCoNnCksZM8Lt8lWQ9okMs52UZy8ndlmcBsNeWBH6WvDt5jd%2BMCbP8IGEoupsaZEPShE7M2ixeK%2B51VWqdQDIH67VBhZfr%2FTjUsbfjda9GEZQnph8ep%2BaFSfJguEiLt%2BlMlqzg3Y1maxp9ovXGeoU3av1V%2FTFvFmY%2FswyIOGCR0Ia2K%2Bh6RWKankhxAzNcA1iuTEurBeCSpsCQ1P2J7ly6MQDubFvvZjlf2MZTDwL03OcxH5ILBpGTc8wI4rUmMwLUgqgWBRXCEDpvArLMZt%2FPVjtwn3%2FRmoV9IEmcNm4c8w6PJNxrQZNcHRvNyOVTokSIb12%2BLmheDH2jJvKazpzLMbrYTpBxhbY%2BHRhVVWaLhq3B5BIHSWL2e0N7R1ShhRplHaCCd4or0cNvwNBXNekZPahuvCXU4Z7rd2XNP14g61lUL6KrOoSgcHcqTyd9hiDi2U473S3a5Gq2vhWWs5aL2u9xW0pCcqmc%2Bf719wDGGTcpgLNWCiZIzlbfS%2F9nV%2F2OIoNJSS0MPL6gsAGOqUBn80vCEzQawDqsCs0A9xrOxZ2W0Iajfd3xKTLwRjrK6%2B9%2BhyDOennYIqj2zhfECvnnLz4IykRpjhnVUd%2Fsmfz4YIzk4raXQcZC2fXQB2N9JE7mFZq0dbPJs7jDw%2BXVnCVysN%2BPGxwtC8aQsb8ZONcP0bpmA6CGj%2F2l2AmalOz4WnXXe3PbUBqKCvSSz13kyG5FkeUq1RPvRXjKMZhB5iJ3qZHi44P&X-Amz-Signature=7bb271b531218564ccad89924120a2207396e32951ece75ab68cc691100e5984&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQC4O7VX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMOnnLWFnPdFZHWsMf8f4ap0DtAg1uKLZ40%2FvRbzkEPAiEA9wt51lp6qh7KGzQ8XvlmZxjBKubiaDyREz1LNDQrAeMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMa4OARY4%2FlOfd9UXyrcAzZZhq9l9nLDUA2ww1hPc6e6YDLwT4XnOxUncnTkG%2Ff0Wv884dSvE%2FP3ieKwYSbsgaIcGGVDQBMIMQQUV3xxUU9taUZPV4RlDit3VH3lYt24hU5hn%2FlUCoNnCksZM8Lt8lWQ9okMs52UZy8ndlmcBsNeWBH6WvDt5jd%2BMCbP8IGEoupsaZEPShE7M2ixeK%2B51VWqdQDIH67VBhZfr%2FTjUsbfjda9GEZQnph8ep%2BaFSfJguEiLt%2BlMlqzg3Y1maxp9ovXGeoU3av1V%2FTFvFmY%2FswyIOGCR0Ia2K%2Bh6RWKankhxAzNcA1iuTEurBeCSpsCQ1P2J7ly6MQDubFvvZjlf2MZTDwL03OcxH5ILBpGTc8wI4rUmMwLUgqgWBRXCEDpvArLMZt%2FPVjtwn3%2FRmoV9IEmcNm4c8w6PJNxrQZNcHRvNyOVTokSIb12%2BLmheDH2jJvKazpzLMbrYTpBxhbY%2BHRhVVWaLhq3B5BIHSWL2e0N7R1ShhRplHaCCd4or0cNvwNBXNekZPahuvCXU4Z7rd2XNP14g61lUL6KrOoSgcHcqTyd9hiDi2U473S3a5Gq2vhWWs5aL2u9xW0pCcqmc%2Bf719wDGGTcpgLNWCiZIzlbfS%2F9nV%2F2OIoNJSS0MPL6gsAGOqUBn80vCEzQawDqsCs0A9xrOxZ2W0Iajfd3xKTLwRjrK6%2B9%2BhyDOennYIqj2zhfECvnnLz4IykRpjhnVUd%2Fsmfz4YIzk4raXQcZC2fXQB2N9JE7mFZq0dbPJs7jDw%2BXVnCVysN%2BPGxwtC8aQsb8ZONcP0bpmA6CGj%2F2l2AmalOz4WnXXe3PbUBqKCvSSz13kyG5FkeUq1RPvRXjKMZhB5iJ3qZHi44P&X-Amz-Signature=e8acec28f0dbc011529bdc2ca303e93e9af2f2d4c43ad84c9d07bfd9646b5ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQC4O7VX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMOnnLWFnPdFZHWsMf8f4ap0DtAg1uKLZ40%2FvRbzkEPAiEA9wt51lp6qh7KGzQ8XvlmZxjBKubiaDyREz1LNDQrAeMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMa4OARY4%2FlOfd9UXyrcAzZZhq9l9nLDUA2ww1hPc6e6YDLwT4XnOxUncnTkG%2Ff0Wv884dSvE%2FP3ieKwYSbsgaIcGGVDQBMIMQQUV3xxUU9taUZPV4RlDit3VH3lYt24hU5hn%2FlUCoNnCksZM8Lt8lWQ9okMs52UZy8ndlmcBsNeWBH6WvDt5jd%2BMCbP8IGEoupsaZEPShE7M2ixeK%2B51VWqdQDIH67VBhZfr%2FTjUsbfjda9GEZQnph8ep%2BaFSfJguEiLt%2BlMlqzg3Y1maxp9ovXGeoU3av1V%2FTFvFmY%2FswyIOGCR0Ia2K%2Bh6RWKankhxAzNcA1iuTEurBeCSpsCQ1P2J7ly6MQDubFvvZjlf2MZTDwL03OcxH5ILBpGTc8wI4rUmMwLUgqgWBRXCEDpvArLMZt%2FPVjtwn3%2FRmoV9IEmcNm4c8w6PJNxrQZNcHRvNyOVTokSIb12%2BLmheDH2jJvKazpzLMbrYTpBxhbY%2BHRhVVWaLhq3B5BIHSWL2e0N7R1ShhRplHaCCd4or0cNvwNBXNekZPahuvCXU4Z7rd2XNP14g61lUL6KrOoSgcHcqTyd9hiDi2U473S3a5Gq2vhWWs5aL2u9xW0pCcqmc%2Bf719wDGGTcpgLNWCiZIzlbfS%2F9nV%2F2OIoNJSS0MPL6gsAGOqUBn80vCEzQawDqsCs0A9xrOxZ2W0Iajfd3xKTLwRjrK6%2B9%2BhyDOennYIqj2zhfECvnnLz4IykRpjhnVUd%2Fsmfz4YIzk4raXQcZC2fXQB2N9JE7mFZq0dbPJs7jDw%2BXVnCVysN%2BPGxwtC8aQsb8ZONcP0bpmA6CGj%2F2l2AmalOz4WnXXe3PbUBqKCvSSz13kyG5FkeUq1RPvRXjKMZhB5iJ3qZHi44P&X-Amz-Signature=e11b38db7b2b40500b244cb97f243ddfe929584d9517aa8c38a783a53345b29e&X-Amz-SignedHeaders=host&x-id=GetObject)
