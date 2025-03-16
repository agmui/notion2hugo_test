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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDEU25G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6lYV36y2HOA3RsyQdicsP1w7SiOx%2BtWma2CUXC8RdhAiEA7kv5GX6GJf%2FpKEV3VM%2FgzO30b8uZHqvwDsrgs4e6v08q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCHQtvyPIHU92FdURCrcA8%2BsTZV7Q0q4IeVXlN29sbnMnZ38JP7aE%2BAMnwAWIfYJq0g2KeMenR7f4I65qLQIyPBhLte5JNR3blRwlPwTRPjzi%2BOVUMHjmLzzh4LvNeSNf9CRUYRENPL7ODf7NeqtV5Ekd26w%2B4G19Fo4HQcGg1h2tHsn9E2UOvArEBPEvtqhn6O8EfLc%2FGM7hxZQb10ljKp7Z%2FtglCf8KqokKHMydW4gmy0FxwmmLA8esk67YbeLPuq%2FnB9GyR3R3gozM1NNXD4HQNqRA2FXD%2BJcNP5lLjQ0MMwkqwAdQTw8h1D5Hq9qcJ%2BlVgJzj1gstGAns%2BQDDVBv0T88lqWjln2hE7ZGrc7AdBwahQc4MNWzrrGDccPD0ij5PpS1kXqg1c%2BdtsfQLBeNR%2Bb0KBpU2O9F2bDaB5LXDNWzkeJ78nN8zazlsJa%2BQoIHtI55k4hgNPpgXOD0PObPg4MkayBc1sdaKi8vCD1z%2Fm5qI%2FuyCEKAC63416ukzplUNM0TiHEFGaLCmiW1%2Fxs%2BzvDqLg8fSsNBM8xwIodh%2FoVMbQWzkUvgfBUhmlczOT%2Fgpzh1S9JxsY1V3Np5SFoaMmUaKasQ83UEt%2Bd9aenTvzAR%2F2YCQJYIao82JGYSOetxiwprWNDGhnWtMLqd3b4GOqUBg%2F%2FjWGR4NbyuxorjwDfUSQh8%2B4RoDDyIwuDg99bjJ4h3xqsAAvaFSq5CQV%2Bt%2Bupzu3v6FgJ0CsputiPv%2FNsTyHFGUSQPVAQqQHLG838qXs2%2FrlHoW%2Bf3Psq9uPiNfTCMoE7%2FV89%2FoIDyq7SJaSRtVNZwnv1wHoGkeGfctSjaRXdz0y7%2Bl9buBGLSTF9%2FXctWFn9ZBD1P18az%2FHFvecm8%2Fd8IAcHa&X-Amz-Signature=edae52f7a75d64360b0efee35a5c3903b515b023e5bd1b9a460714ec83b2a150&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDEU25G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6lYV36y2HOA3RsyQdicsP1w7SiOx%2BtWma2CUXC8RdhAiEA7kv5GX6GJf%2FpKEV3VM%2FgzO30b8uZHqvwDsrgs4e6v08q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCHQtvyPIHU92FdURCrcA8%2BsTZV7Q0q4IeVXlN29sbnMnZ38JP7aE%2BAMnwAWIfYJq0g2KeMenR7f4I65qLQIyPBhLte5JNR3blRwlPwTRPjzi%2BOVUMHjmLzzh4LvNeSNf9CRUYRENPL7ODf7NeqtV5Ekd26w%2B4G19Fo4HQcGg1h2tHsn9E2UOvArEBPEvtqhn6O8EfLc%2FGM7hxZQb10ljKp7Z%2FtglCf8KqokKHMydW4gmy0FxwmmLA8esk67YbeLPuq%2FnB9GyR3R3gozM1NNXD4HQNqRA2FXD%2BJcNP5lLjQ0MMwkqwAdQTw8h1D5Hq9qcJ%2BlVgJzj1gstGAns%2BQDDVBv0T88lqWjln2hE7ZGrc7AdBwahQc4MNWzrrGDccPD0ij5PpS1kXqg1c%2BdtsfQLBeNR%2Bb0KBpU2O9F2bDaB5LXDNWzkeJ78nN8zazlsJa%2BQoIHtI55k4hgNPpgXOD0PObPg4MkayBc1sdaKi8vCD1z%2Fm5qI%2FuyCEKAC63416ukzplUNM0TiHEFGaLCmiW1%2Fxs%2BzvDqLg8fSsNBM8xwIodh%2FoVMbQWzkUvgfBUhmlczOT%2Fgpzh1S9JxsY1V3Np5SFoaMmUaKasQ83UEt%2Bd9aenTvzAR%2F2YCQJYIao82JGYSOetxiwprWNDGhnWtMLqd3b4GOqUBg%2F%2FjWGR4NbyuxorjwDfUSQh8%2B4RoDDyIwuDg99bjJ4h3xqsAAvaFSq5CQV%2Bt%2Bupzu3v6FgJ0CsputiPv%2FNsTyHFGUSQPVAQqQHLG838qXs2%2FrlHoW%2Bf3Psq9uPiNfTCMoE7%2FV89%2FoIDyq7SJaSRtVNZwnv1wHoGkeGfctSjaRXdz0y7%2Bl9buBGLSTF9%2FXctWFn9ZBD1P18az%2FHFvecm8%2Fd8IAcHa&X-Amz-Signature=5cbcf0aa82a243885902d4e841fc158883409d080231ad725eab855962313460&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDEU25G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6lYV36y2HOA3RsyQdicsP1w7SiOx%2BtWma2CUXC8RdhAiEA7kv5GX6GJf%2FpKEV3VM%2FgzO30b8uZHqvwDsrgs4e6v08q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCHQtvyPIHU92FdURCrcA8%2BsTZV7Q0q4IeVXlN29sbnMnZ38JP7aE%2BAMnwAWIfYJq0g2KeMenR7f4I65qLQIyPBhLte5JNR3blRwlPwTRPjzi%2BOVUMHjmLzzh4LvNeSNf9CRUYRENPL7ODf7NeqtV5Ekd26w%2B4G19Fo4HQcGg1h2tHsn9E2UOvArEBPEvtqhn6O8EfLc%2FGM7hxZQb10ljKp7Z%2FtglCf8KqokKHMydW4gmy0FxwmmLA8esk67YbeLPuq%2FnB9GyR3R3gozM1NNXD4HQNqRA2FXD%2BJcNP5lLjQ0MMwkqwAdQTw8h1D5Hq9qcJ%2BlVgJzj1gstGAns%2BQDDVBv0T88lqWjln2hE7ZGrc7AdBwahQc4MNWzrrGDccPD0ij5PpS1kXqg1c%2BdtsfQLBeNR%2Bb0KBpU2O9F2bDaB5LXDNWzkeJ78nN8zazlsJa%2BQoIHtI55k4hgNPpgXOD0PObPg4MkayBc1sdaKi8vCD1z%2Fm5qI%2FuyCEKAC63416ukzplUNM0TiHEFGaLCmiW1%2Fxs%2BzvDqLg8fSsNBM8xwIodh%2FoVMbQWzkUvgfBUhmlczOT%2Fgpzh1S9JxsY1V3Np5SFoaMmUaKasQ83UEt%2Bd9aenTvzAR%2F2YCQJYIao82JGYSOetxiwprWNDGhnWtMLqd3b4GOqUBg%2F%2FjWGR4NbyuxorjwDfUSQh8%2B4RoDDyIwuDg99bjJ4h3xqsAAvaFSq5CQV%2Bt%2Bupzu3v6FgJ0CsputiPv%2FNsTyHFGUSQPVAQqQHLG838qXs2%2FrlHoW%2Bf3Psq9uPiNfTCMoE7%2FV89%2FoIDyq7SJaSRtVNZwnv1wHoGkeGfctSjaRXdz0y7%2Bl9buBGLSTF9%2FXctWFn9ZBD1P18az%2FHFvecm8%2Fd8IAcHa&X-Amz-Signature=3daa1a465557e9f257e7b91e27e24c3e3f9faf36a3b0a1b4c3f89c0dba032c31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDEU25G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6lYV36y2HOA3RsyQdicsP1w7SiOx%2BtWma2CUXC8RdhAiEA7kv5GX6GJf%2FpKEV3VM%2FgzO30b8uZHqvwDsrgs4e6v08q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCHQtvyPIHU92FdURCrcA8%2BsTZV7Q0q4IeVXlN29sbnMnZ38JP7aE%2BAMnwAWIfYJq0g2KeMenR7f4I65qLQIyPBhLte5JNR3blRwlPwTRPjzi%2BOVUMHjmLzzh4LvNeSNf9CRUYRENPL7ODf7NeqtV5Ekd26w%2B4G19Fo4HQcGg1h2tHsn9E2UOvArEBPEvtqhn6O8EfLc%2FGM7hxZQb10ljKp7Z%2FtglCf8KqokKHMydW4gmy0FxwmmLA8esk67YbeLPuq%2FnB9GyR3R3gozM1NNXD4HQNqRA2FXD%2BJcNP5lLjQ0MMwkqwAdQTw8h1D5Hq9qcJ%2BlVgJzj1gstGAns%2BQDDVBv0T88lqWjln2hE7ZGrc7AdBwahQc4MNWzrrGDccPD0ij5PpS1kXqg1c%2BdtsfQLBeNR%2Bb0KBpU2O9F2bDaB5LXDNWzkeJ78nN8zazlsJa%2BQoIHtI55k4hgNPpgXOD0PObPg4MkayBc1sdaKi8vCD1z%2Fm5qI%2FuyCEKAC63416ukzplUNM0TiHEFGaLCmiW1%2Fxs%2BzvDqLg8fSsNBM8xwIodh%2FoVMbQWzkUvgfBUhmlczOT%2Fgpzh1S9JxsY1V3Np5SFoaMmUaKasQ83UEt%2Bd9aenTvzAR%2F2YCQJYIao82JGYSOetxiwprWNDGhnWtMLqd3b4GOqUBg%2F%2FjWGR4NbyuxorjwDfUSQh8%2B4RoDDyIwuDg99bjJ4h3xqsAAvaFSq5CQV%2Bt%2Bupzu3v6FgJ0CsputiPv%2FNsTyHFGUSQPVAQqQHLG838qXs2%2FrlHoW%2Bf3Psq9uPiNfTCMoE7%2FV89%2FoIDyq7SJaSRtVNZwnv1wHoGkeGfctSjaRXdz0y7%2Bl9buBGLSTF9%2FXctWFn9ZBD1P18az%2FHFvecm8%2Fd8IAcHa&X-Amz-Signature=39b96908c3025564e81f44b062f2e5cde0a9aff536715146c10920b3f8cd15a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDEU25G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6lYV36y2HOA3RsyQdicsP1w7SiOx%2BtWma2CUXC8RdhAiEA7kv5GX6GJf%2FpKEV3VM%2FgzO30b8uZHqvwDsrgs4e6v08q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCHQtvyPIHU92FdURCrcA8%2BsTZV7Q0q4IeVXlN29sbnMnZ38JP7aE%2BAMnwAWIfYJq0g2KeMenR7f4I65qLQIyPBhLte5JNR3blRwlPwTRPjzi%2BOVUMHjmLzzh4LvNeSNf9CRUYRENPL7ODf7NeqtV5Ekd26w%2B4G19Fo4HQcGg1h2tHsn9E2UOvArEBPEvtqhn6O8EfLc%2FGM7hxZQb10ljKp7Z%2FtglCf8KqokKHMydW4gmy0FxwmmLA8esk67YbeLPuq%2FnB9GyR3R3gozM1NNXD4HQNqRA2FXD%2BJcNP5lLjQ0MMwkqwAdQTw8h1D5Hq9qcJ%2BlVgJzj1gstGAns%2BQDDVBv0T88lqWjln2hE7ZGrc7AdBwahQc4MNWzrrGDccPD0ij5PpS1kXqg1c%2BdtsfQLBeNR%2Bb0KBpU2O9F2bDaB5LXDNWzkeJ78nN8zazlsJa%2BQoIHtI55k4hgNPpgXOD0PObPg4MkayBc1sdaKi8vCD1z%2Fm5qI%2FuyCEKAC63416ukzplUNM0TiHEFGaLCmiW1%2Fxs%2BzvDqLg8fSsNBM8xwIodh%2FoVMbQWzkUvgfBUhmlczOT%2Fgpzh1S9JxsY1V3Np5SFoaMmUaKasQ83UEt%2Bd9aenTvzAR%2F2YCQJYIao82JGYSOetxiwprWNDGhnWtMLqd3b4GOqUBg%2F%2FjWGR4NbyuxorjwDfUSQh8%2B4RoDDyIwuDg99bjJ4h3xqsAAvaFSq5CQV%2Bt%2Bupzu3v6FgJ0CsputiPv%2FNsTyHFGUSQPVAQqQHLG838qXs2%2FrlHoW%2Bf3Psq9uPiNfTCMoE7%2FV89%2FoIDyq7SJaSRtVNZwnv1wHoGkeGfctSjaRXdz0y7%2Bl9buBGLSTF9%2FXctWFn9ZBD1P18az%2FHFvecm8%2Fd8IAcHa&X-Amz-Signature=57417ef543d1b29a3e861575e9374755e216f2623bb4cf61ca73544eb1e04ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDEU25G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6lYV36y2HOA3RsyQdicsP1w7SiOx%2BtWma2CUXC8RdhAiEA7kv5GX6GJf%2FpKEV3VM%2FgzO30b8uZHqvwDsrgs4e6v08q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCHQtvyPIHU92FdURCrcA8%2BsTZV7Q0q4IeVXlN29sbnMnZ38JP7aE%2BAMnwAWIfYJq0g2KeMenR7f4I65qLQIyPBhLte5JNR3blRwlPwTRPjzi%2BOVUMHjmLzzh4LvNeSNf9CRUYRENPL7ODf7NeqtV5Ekd26w%2B4G19Fo4HQcGg1h2tHsn9E2UOvArEBPEvtqhn6O8EfLc%2FGM7hxZQb10ljKp7Z%2FtglCf8KqokKHMydW4gmy0FxwmmLA8esk67YbeLPuq%2FnB9GyR3R3gozM1NNXD4HQNqRA2FXD%2BJcNP5lLjQ0MMwkqwAdQTw8h1D5Hq9qcJ%2BlVgJzj1gstGAns%2BQDDVBv0T88lqWjln2hE7ZGrc7AdBwahQc4MNWzrrGDccPD0ij5PpS1kXqg1c%2BdtsfQLBeNR%2Bb0KBpU2O9F2bDaB5LXDNWzkeJ78nN8zazlsJa%2BQoIHtI55k4hgNPpgXOD0PObPg4MkayBc1sdaKi8vCD1z%2Fm5qI%2FuyCEKAC63416ukzplUNM0TiHEFGaLCmiW1%2Fxs%2BzvDqLg8fSsNBM8xwIodh%2FoVMbQWzkUvgfBUhmlczOT%2Fgpzh1S9JxsY1V3Np5SFoaMmUaKasQ83UEt%2Bd9aenTvzAR%2F2YCQJYIao82JGYSOetxiwprWNDGhnWtMLqd3b4GOqUBg%2F%2FjWGR4NbyuxorjwDfUSQh8%2B4RoDDyIwuDg99bjJ4h3xqsAAvaFSq5CQV%2Bt%2Bupzu3v6FgJ0CsputiPv%2FNsTyHFGUSQPVAQqQHLG838qXs2%2FrlHoW%2Bf3Psq9uPiNfTCMoE7%2FV89%2FoIDyq7SJaSRtVNZwnv1wHoGkeGfctSjaRXdz0y7%2Bl9buBGLSTF9%2FXctWFn9ZBD1P18az%2FHFvecm8%2Fd8IAcHa&X-Amz-Signature=0d8cc2f4747d20a0f0c4ee396ac43ac343f7176459196d9d34a60f3521b576e8&X-Amz-SignedHeaders=host&x-id=GetObject)
