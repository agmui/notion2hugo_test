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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKUQ7XE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfWIc3KvI9yQYQrl7UVO6pnSBGi4Or%2BUQo1yJKvgwf4QIgEP6Iv8r3f7%2FsddVfyProshCsYT03pW4BZIaHuBEazb8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCEYm8DL197ydPulgircA09SAiIfvsi9nhXmu9yLjAS3OMzPa%2BID1leeUi7vmhUTxlK0eYjoYsgjwSAWlyNgaslvLRY4Og0L2y%2BnCMh4SvTNCLkyYXuuS0pt4uVpTGk6NpEQDFl7Ja6GTf6xIhFhc6VoyrrwxTIwhjcIBc7JDlCd%2BG8CB757yIDLl0sQUY3kazcb77zpW%2B2HCvhpar7gVhtnv36ISDSbEM4tMZjk1aRKYcDrlapzD%2BOVcsXtfOdECBg9ZqU7fekvDSw3PW1wDPrAO0oAd7tuz9Vz%2FHbw2RNlLSuoRBiwZiK9WGsUYvKAQx0lAkoClzIsdiMEQW7gYryRyS38%2FPAOjRH1wBDj0kTI320SsHqvp%2FprU4tCYyI75y2zdDB8eIYXg37GramWv%2Fgdi3KHRFEcvKp3B4GhoTTWFz1kmYHwfGaDu5KqMdhISHN7j%2BHjBy4lMBqCEpezqnFZ%2FaOTVeR8y4DVJuT0Hzv0O6qARyCZYC42CbCyATf9Dqb8iCES1S%2Fk2UL6rQpuYYmtcpbBiVp08V%2BkTT2y%2BlAsZkv5vRLtDRGgBloq%2FHhOyqV4k9169AiMdh%2FwUjJCpVf14kAZAifRQS8QFoWJ7gwoD49b2iRVMR%2FDFm6FzUtUDHOEbjNbMQbHu0urMIrU1sEGOqUBvcXVw0g0kUwvho7r0JuxYnBCRYBDFlgn2Pp4MoiIoAi3EM7kqIBI1A%2BgsfIuw6Bl5VylfvJwaqWmB0X%2FE%2Fh7LLFOBS3icYYJoCn3waQp553UiLAWsAgUfti92nKWJqIG%2BYzjDJHJdpj6W8C6sY4SjX%2BBEfQI4E8mnib4pYwNFj5XdPTfaJ8YcMN69A66Q%2Fl0rDFWC%2Fl71H4vl3JTGvA8Gteuh6Wj&X-Amz-Signature=db7facf57c12af50bd4bd9ebfe793fa14f36bb164c1dc05e00d8598e32d87703&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKUQ7XE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfWIc3KvI9yQYQrl7UVO6pnSBGi4Or%2BUQo1yJKvgwf4QIgEP6Iv8r3f7%2FsddVfyProshCsYT03pW4BZIaHuBEazb8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCEYm8DL197ydPulgircA09SAiIfvsi9nhXmu9yLjAS3OMzPa%2BID1leeUi7vmhUTxlK0eYjoYsgjwSAWlyNgaslvLRY4Og0L2y%2BnCMh4SvTNCLkyYXuuS0pt4uVpTGk6NpEQDFl7Ja6GTf6xIhFhc6VoyrrwxTIwhjcIBc7JDlCd%2BG8CB757yIDLl0sQUY3kazcb77zpW%2B2HCvhpar7gVhtnv36ISDSbEM4tMZjk1aRKYcDrlapzD%2BOVcsXtfOdECBg9ZqU7fekvDSw3PW1wDPrAO0oAd7tuz9Vz%2FHbw2RNlLSuoRBiwZiK9WGsUYvKAQx0lAkoClzIsdiMEQW7gYryRyS38%2FPAOjRH1wBDj0kTI320SsHqvp%2FprU4tCYyI75y2zdDB8eIYXg37GramWv%2Fgdi3KHRFEcvKp3B4GhoTTWFz1kmYHwfGaDu5KqMdhISHN7j%2BHjBy4lMBqCEpezqnFZ%2FaOTVeR8y4DVJuT0Hzv0O6qARyCZYC42CbCyATf9Dqb8iCES1S%2Fk2UL6rQpuYYmtcpbBiVp08V%2BkTT2y%2BlAsZkv5vRLtDRGgBloq%2FHhOyqV4k9169AiMdh%2FwUjJCpVf14kAZAifRQS8QFoWJ7gwoD49b2iRVMR%2FDFm6FzUtUDHOEbjNbMQbHu0urMIrU1sEGOqUBvcXVw0g0kUwvho7r0JuxYnBCRYBDFlgn2Pp4MoiIoAi3EM7kqIBI1A%2BgsfIuw6Bl5VylfvJwaqWmB0X%2FE%2Fh7LLFOBS3icYYJoCn3waQp553UiLAWsAgUfti92nKWJqIG%2BYzjDJHJdpj6W8C6sY4SjX%2BBEfQI4E8mnib4pYwNFj5XdPTfaJ8YcMN69A66Q%2Fl0rDFWC%2Fl71H4vl3JTGvA8Gteuh6Wj&X-Amz-Signature=444f1495863b321b3b51205497d89819e0bf050699f2b38729cdb1087cde865a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKUQ7XE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfWIc3KvI9yQYQrl7UVO6pnSBGi4Or%2BUQo1yJKvgwf4QIgEP6Iv8r3f7%2FsddVfyProshCsYT03pW4BZIaHuBEazb8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCEYm8DL197ydPulgircA09SAiIfvsi9nhXmu9yLjAS3OMzPa%2BID1leeUi7vmhUTxlK0eYjoYsgjwSAWlyNgaslvLRY4Og0L2y%2BnCMh4SvTNCLkyYXuuS0pt4uVpTGk6NpEQDFl7Ja6GTf6xIhFhc6VoyrrwxTIwhjcIBc7JDlCd%2BG8CB757yIDLl0sQUY3kazcb77zpW%2B2HCvhpar7gVhtnv36ISDSbEM4tMZjk1aRKYcDrlapzD%2BOVcsXtfOdECBg9ZqU7fekvDSw3PW1wDPrAO0oAd7tuz9Vz%2FHbw2RNlLSuoRBiwZiK9WGsUYvKAQx0lAkoClzIsdiMEQW7gYryRyS38%2FPAOjRH1wBDj0kTI320SsHqvp%2FprU4tCYyI75y2zdDB8eIYXg37GramWv%2Fgdi3KHRFEcvKp3B4GhoTTWFz1kmYHwfGaDu5KqMdhISHN7j%2BHjBy4lMBqCEpezqnFZ%2FaOTVeR8y4DVJuT0Hzv0O6qARyCZYC42CbCyATf9Dqb8iCES1S%2Fk2UL6rQpuYYmtcpbBiVp08V%2BkTT2y%2BlAsZkv5vRLtDRGgBloq%2FHhOyqV4k9169AiMdh%2FwUjJCpVf14kAZAifRQS8QFoWJ7gwoD49b2iRVMR%2FDFm6FzUtUDHOEbjNbMQbHu0urMIrU1sEGOqUBvcXVw0g0kUwvho7r0JuxYnBCRYBDFlgn2Pp4MoiIoAi3EM7kqIBI1A%2BgsfIuw6Bl5VylfvJwaqWmB0X%2FE%2Fh7LLFOBS3icYYJoCn3waQp553UiLAWsAgUfti92nKWJqIG%2BYzjDJHJdpj6W8C6sY4SjX%2BBEfQI4E8mnib4pYwNFj5XdPTfaJ8YcMN69A66Q%2Fl0rDFWC%2Fl71H4vl3JTGvA8Gteuh6Wj&X-Amz-Signature=377156426532ad41394708600ad80fc1d6c65a7895927ab19a1bbedc0db87d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKUQ7XE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfWIc3KvI9yQYQrl7UVO6pnSBGi4Or%2BUQo1yJKvgwf4QIgEP6Iv8r3f7%2FsddVfyProshCsYT03pW4BZIaHuBEazb8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCEYm8DL197ydPulgircA09SAiIfvsi9nhXmu9yLjAS3OMzPa%2BID1leeUi7vmhUTxlK0eYjoYsgjwSAWlyNgaslvLRY4Og0L2y%2BnCMh4SvTNCLkyYXuuS0pt4uVpTGk6NpEQDFl7Ja6GTf6xIhFhc6VoyrrwxTIwhjcIBc7JDlCd%2BG8CB757yIDLl0sQUY3kazcb77zpW%2B2HCvhpar7gVhtnv36ISDSbEM4tMZjk1aRKYcDrlapzD%2BOVcsXtfOdECBg9ZqU7fekvDSw3PW1wDPrAO0oAd7tuz9Vz%2FHbw2RNlLSuoRBiwZiK9WGsUYvKAQx0lAkoClzIsdiMEQW7gYryRyS38%2FPAOjRH1wBDj0kTI320SsHqvp%2FprU4tCYyI75y2zdDB8eIYXg37GramWv%2Fgdi3KHRFEcvKp3B4GhoTTWFz1kmYHwfGaDu5KqMdhISHN7j%2BHjBy4lMBqCEpezqnFZ%2FaOTVeR8y4DVJuT0Hzv0O6qARyCZYC42CbCyATf9Dqb8iCES1S%2Fk2UL6rQpuYYmtcpbBiVp08V%2BkTT2y%2BlAsZkv5vRLtDRGgBloq%2FHhOyqV4k9169AiMdh%2FwUjJCpVf14kAZAifRQS8QFoWJ7gwoD49b2iRVMR%2FDFm6FzUtUDHOEbjNbMQbHu0urMIrU1sEGOqUBvcXVw0g0kUwvho7r0JuxYnBCRYBDFlgn2Pp4MoiIoAi3EM7kqIBI1A%2BgsfIuw6Bl5VylfvJwaqWmB0X%2FE%2Fh7LLFOBS3icYYJoCn3waQp553UiLAWsAgUfti92nKWJqIG%2BYzjDJHJdpj6W8C6sY4SjX%2BBEfQI4E8mnib4pYwNFj5XdPTfaJ8YcMN69A66Q%2Fl0rDFWC%2Fl71H4vl3JTGvA8Gteuh6Wj&X-Amz-Signature=999f1e1cb47ac24e83b99f3923ccaedbd14c82d559b145b3a74aefc91f28480a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKUQ7XE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfWIc3KvI9yQYQrl7UVO6pnSBGi4Or%2BUQo1yJKvgwf4QIgEP6Iv8r3f7%2FsddVfyProshCsYT03pW4BZIaHuBEazb8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCEYm8DL197ydPulgircA09SAiIfvsi9nhXmu9yLjAS3OMzPa%2BID1leeUi7vmhUTxlK0eYjoYsgjwSAWlyNgaslvLRY4Og0L2y%2BnCMh4SvTNCLkyYXuuS0pt4uVpTGk6NpEQDFl7Ja6GTf6xIhFhc6VoyrrwxTIwhjcIBc7JDlCd%2BG8CB757yIDLl0sQUY3kazcb77zpW%2B2HCvhpar7gVhtnv36ISDSbEM4tMZjk1aRKYcDrlapzD%2BOVcsXtfOdECBg9ZqU7fekvDSw3PW1wDPrAO0oAd7tuz9Vz%2FHbw2RNlLSuoRBiwZiK9WGsUYvKAQx0lAkoClzIsdiMEQW7gYryRyS38%2FPAOjRH1wBDj0kTI320SsHqvp%2FprU4tCYyI75y2zdDB8eIYXg37GramWv%2Fgdi3KHRFEcvKp3B4GhoTTWFz1kmYHwfGaDu5KqMdhISHN7j%2BHjBy4lMBqCEpezqnFZ%2FaOTVeR8y4DVJuT0Hzv0O6qARyCZYC42CbCyATf9Dqb8iCES1S%2Fk2UL6rQpuYYmtcpbBiVp08V%2BkTT2y%2BlAsZkv5vRLtDRGgBloq%2FHhOyqV4k9169AiMdh%2FwUjJCpVf14kAZAifRQS8QFoWJ7gwoD49b2iRVMR%2FDFm6FzUtUDHOEbjNbMQbHu0urMIrU1sEGOqUBvcXVw0g0kUwvho7r0JuxYnBCRYBDFlgn2Pp4MoiIoAi3EM7kqIBI1A%2BgsfIuw6Bl5VylfvJwaqWmB0X%2FE%2Fh7LLFOBS3icYYJoCn3waQp553UiLAWsAgUfti92nKWJqIG%2BYzjDJHJdpj6W8C6sY4SjX%2BBEfQI4E8mnib4pYwNFj5XdPTfaJ8YcMN69A66Q%2Fl0rDFWC%2Fl71H4vl3JTGvA8Gteuh6Wj&X-Amz-Signature=1d887bf8b65cbefab70f98d0db02ea54ff2fcd2830c1771f102e7cf12f9780b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKUQ7XE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfWIc3KvI9yQYQrl7UVO6pnSBGi4Or%2BUQo1yJKvgwf4QIgEP6Iv8r3f7%2FsddVfyProshCsYT03pW4BZIaHuBEazb8q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCEYm8DL197ydPulgircA09SAiIfvsi9nhXmu9yLjAS3OMzPa%2BID1leeUi7vmhUTxlK0eYjoYsgjwSAWlyNgaslvLRY4Og0L2y%2BnCMh4SvTNCLkyYXuuS0pt4uVpTGk6NpEQDFl7Ja6GTf6xIhFhc6VoyrrwxTIwhjcIBc7JDlCd%2BG8CB757yIDLl0sQUY3kazcb77zpW%2B2HCvhpar7gVhtnv36ISDSbEM4tMZjk1aRKYcDrlapzD%2BOVcsXtfOdECBg9ZqU7fekvDSw3PW1wDPrAO0oAd7tuz9Vz%2FHbw2RNlLSuoRBiwZiK9WGsUYvKAQx0lAkoClzIsdiMEQW7gYryRyS38%2FPAOjRH1wBDj0kTI320SsHqvp%2FprU4tCYyI75y2zdDB8eIYXg37GramWv%2Fgdi3KHRFEcvKp3B4GhoTTWFz1kmYHwfGaDu5KqMdhISHN7j%2BHjBy4lMBqCEpezqnFZ%2FaOTVeR8y4DVJuT0Hzv0O6qARyCZYC42CbCyATf9Dqb8iCES1S%2Fk2UL6rQpuYYmtcpbBiVp08V%2BkTT2y%2BlAsZkv5vRLtDRGgBloq%2FHhOyqV4k9169AiMdh%2FwUjJCpVf14kAZAifRQS8QFoWJ7gwoD49b2iRVMR%2FDFm6FzUtUDHOEbjNbMQbHu0urMIrU1sEGOqUBvcXVw0g0kUwvho7r0JuxYnBCRYBDFlgn2Pp4MoiIoAi3EM7kqIBI1A%2BgsfIuw6Bl5VylfvJwaqWmB0X%2FE%2Fh7LLFOBS3icYYJoCn3waQp553UiLAWsAgUfti92nKWJqIG%2BYzjDJHJdpj6W8C6sY4SjX%2BBEfQI4E8mnib4pYwNFj5XdPTfaJ8YcMN69A66Q%2Fl0rDFWC%2Fl71H4vl3JTGvA8Gteuh6Wj&X-Amz-Signature=4af9669c94c2b824f30dacd6111fc68b3c27ec3f574a8410710c81075ed44894&X-Amz-SignedHeaders=host&x-id=GetObject)
