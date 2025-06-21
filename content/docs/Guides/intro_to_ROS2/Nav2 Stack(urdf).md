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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMCABME%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwy%2FEeJjf8FNQx0XP%2FtVVwRChuLvXMwVCVy35CGl3OtAiEAzndGdWucnh%2FvoJ1zZHILhsiAXGqW9OYm73hg0LE%2FJM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zkDF8FjKOWq%2FX9CrcAzWnDDWEX2dlpPXEFPb9bpJ2eu4Tj4R06CY6GjLlkbWGVUGmzOfuNHOY7Cl2IHbisiGBOFaJEqYjZKjv0uvSgax3nZmuI%2F1Ipfnlm0pMvQhdQMatiKpwtBd%2FxV5Aqv5n5lhanZCqPBkkszt%2FFEcls3xRzyEgrIMnwZgTDgrhUOQOVDQWajKhbqB5duv01Xgv%2BUvLlBjSCqDs2YGahXbSyA3gGfdn%2BxmWtbhP4Y29w6XwFvlKqjFWwriGRV1hzAgwGpDa2kJBAxkgiBoKYyz6Jhc1V4I98XpJ%2FyropfXFk7R%2FALDz8OUTN68YTMSc4EXSJfe8AWvi8PGMjs%2BYAYJTPnycF3zSRJ0oq8t0X%2BSOH65iQU2MW%2FPS1uILfhYWOAZqrExm6VX%2F2SaL51Yoy0nZlYOAdF5f5eDj%2F9yt%2Brmg2noMXs3Qr6PlB6cl6qkqbNyVdpKiirIAwSKPcc50BkjIBU0NPVOi7Vx57QU9FnbqHNF1NOWy9OBPjit76DV3uO6DkuT7VigJttTfxDJ1DXN%2Fkp7Ha8IASgUW%2B8dzR7t25HMWlITgof%2F2rld%2ByD%2B7sfbggpw6oxweo4oB%2Fo72UDyku8iOWEuu%2BHn8xS%2BkSmE6gcXBop6Od0odM0BZtPiQMOrb28IGOqUBlSXqfJAUKxzran%2FQxjr1DOerv9Ha5EX6G5UDvpZaSm079hX6yQxg0nMk%2B6W4v4Umk7xVVH14NqQbEop%2BEuefkgvU%2FHsW9MCxEJ70tFX0DDS4BkkgHYxGM7y2Iqe94qrsArQ2BKZdoBku2NirBaJnOGF76%2FUt8aSy1npfO8EC3tLVl2Z%2FFmqOyZFTv8t9Jlg3rtXZyLGykZE2l3HtI78kJeDgLLDy&X-Amz-Signature=66759488da866599f81da42d747b9ef37b8d1caa256bcdee24d6a8eb9ef5a212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMCABME%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwy%2FEeJjf8FNQx0XP%2FtVVwRChuLvXMwVCVy35CGl3OtAiEAzndGdWucnh%2FvoJ1zZHILhsiAXGqW9OYm73hg0LE%2FJM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zkDF8FjKOWq%2FX9CrcAzWnDDWEX2dlpPXEFPb9bpJ2eu4Tj4R06CY6GjLlkbWGVUGmzOfuNHOY7Cl2IHbisiGBOFaJEqYjZKjv0uvSgax3nZmuI%2F1Ipfnlm0pMvQhdQMatiKpwtBd%2FxV5Aqv5n5lhanZCqPBkkszt%2FFEcls3xRzyEgrIMnwZgTDgrhUOQOVDQWajKhbqB5duv01Xgv%2BUvLlBjSCqDs2YGahXbSyA3gGfdn%2BxmWtbhP4Y29w6XwFvlKqjFWwriGRV1hzAgwGpDa2kJBAxkgiBoKYyz6Jhc1V4I98XpJ%2FyropfXFk7R%2FALDz8OUTN68YTMSc4EXSJfe8AWvi8PGMjs%2BYAYJTPnycF3zSRJ0oq8t0X%2BSOH65iQU2MW%2FPS1uILfhYWOAZqrExm6VX%2F2SaL51Yoy0nZlYOAdF5f5eDj%2F9yt%2Brmg2noMXs3Qr6PlB6cl6qkqbNyVdpKiirIAwSKPcc50BkjIBU0NPVOi7Vx57QU9FnbqHNF1NOWy9OBPjit76DV3uO6DkuT7VigJttTfxDJ1DXN%2Fkp7Ha8IASgUW%2B8dzR7t25HMWlITgof%2F2rld%2ByD%2B7sfbggpw6oxweo4oB%2Fo72UDyku8iOWEuu%2BHn8xS%2BkSmE6gcXBop6Od0odM0BZtPiQMOrb28IGOqUBlSXqfJAUKxzran%2FQxjr1DOerv9Ha5EX6G5UDvpZaSm079hX6yQxg0nMk%2B6W4v4Umk7xVVH14NqQbEop%2BEuefkgvU%2FHsW9MCxEJ70tFX0DDS4BkkgHYxGM7y2Iqe94qrsArQ2BKZdoBku2NirBaJnOGF76%2FUt8aSy1npfO8EC3tLVl2Z%2FFmqOyZFTv8t9Jlg3rtXZyLGykZE2l3HtI78kJeDgLLDy&X-Amz-Signature=8f208a58100110b0e6dd713f4c6377f82128d7ad4de76d367a19d8e7e20398ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMCABME%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwy%2FEeJjf8FNQx0XP%2FtVVwRChuLvXMwVCVy35CGl3OtAiEAzndGdWucnh%2FvoJ1zZHILhsiAXGqW9OYm73hg0LE%2FJM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zkDF8FjKOWq%2FX9CrcAzWnDDWEX2dlpPXEFPb9bpJ2eu4Tj4R06CY6GjLlkbWGVUGmzOfuNHOY7Cl2IHbisiGBOFaJEqYjZKjv0uvSgax3nZmuI%2F1Ipfnlm0pMvQhdQMatiKpwtBd%2FxV5Aqv5n5lhanZCqPBkkszt%2FFEcls3xRzyEgrIMnwZgTDgrhUOQOVDQWajKhbqB5duv01Xgv%2BUvLlBjSCqDs2YGahXbSyA3gGfdn%2BxmWtbhP4Y29w6XwFvlKqjFWwriGRV1hzAgwGpDa2kJBAxkgiBoKYyz6Jhc1V4I98XpJ%2FyropfXFk7R%2FALDz8OUTN68YTMSc4EXSJfe8AWvi8PGMjs%2BYAYJTPnycF3zSRJ0oq8t0X%2BSOH65iQU2MW%2FPS1uILfhYWOAZqrExm6VX%2F2SaL51Yoy0nZlYOAdF5f5eDj%2F9yt%2Brmg2noMXs3Qr6PlB6cl6qkqbNyVdpKiirIAwSKPcc50BkjIBU0NPVOi7Vx57QU9FnbqHNF1NOWy9OBPjit76DV3uO6DkuT7VigJttTfxDJ1DXN%2Fkp7Ha8IASgUW%2B8dzR7t25HMWlITgof%2F2rld%2ByD%2B7sfbggpw6oxweo4oB%2Fo72UDyku8iOWEuu%2BHn8xS%2BkSmE6gcXBop6Od0odM0BZtPiQMOrb28IGOqUBlSXqfJAUKxzran%2FQxjr1DOerv9Ha5EX6G5UDvpZaSm079hX6yQxg0nMk%2B6W4v4Umk7xVVH14NqQbEop%2BEuefkgvU%2FHsW9MCxEJ70tFX0DDS4BkkgHYxGM7y2Iqe94qrsArQ2BKZdoBku2NirBaJnOGF76%2FUt8aSy1npfO8EC3tLVl2Z%2FFmqOyZFTv8t9Jlg3rtXZyLGykZE2l3HtI78kJeDgLLDy&X-Amz-Signature=3b082972d7aad4654299199459e78c09e011f413b34fbd34d53ac08a549bc114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMCABME%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwy%2FEeJjf8FNQx0XP%2FtVVwRChuLvXMwVCVy35CGl3OtAiEAzndGdWucnh%2FvoJ1zZHILhsiAXGqW9OYm73hg0LE%2FJM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zkDF8FjKOWq%2FX9CrcAzWnDDWEX2dlpPXEFPb9bpJ2eu4Tj4R06CY6GjLlkbWGVUGmzOfuNHOY7Cl2IHbisiGBOFaJEqYjZKjv0uvSgax3nZmuI%2F1Ipfnlm0pMvQhdQMatiKpwtBd%2FxV5Aqv5n5lhanZCqPBkkszt%2FFEcls3xRzyEgrIMnwZgTDgrhUOQOVDQWajKhbqB5duv01Xgv%2BUvLlBjSCqDs2YGahXbSyA3gGfdn%2BxmWtbhP4Y29w6XwFvlKqjFWwriGRV1hzAgwGpDa2kJBAxkgiBoKYyz6Jhc1V4I98XpJ%2FyropfXFk7R%2FALDz8OUTN68YTMSc4EXSJfe8AWvi8PGMjs%2BYAYJTPnycF3zSRJ0oq8t0X%2BSOH65iQU2MW%2FPS1uILfhYWOAZqrExm6VX%2F2SaL51Yoy0nZlYOAdF5f5eDj%2F9yt%2Brmg2noMXs3Qr6PlB6cl6qkqbNyVdpKiirIAwSKPcc50BkjIBU0NPVOi7Vx57QU9FnbqHNF1NOWy9OBPjit76DV3uO6DkuT7VigJttTfxDJ1DXN%2Fkp7Ha8IASgUW%2B8dzR7t25HMWlITgof%2F2rld%2ByD%2B7sfbggpw6oxweo4oB%2Fo72UDyku8iOWEuu%2BHn8xS%2BkSmE6gcXBop6Od0odM0BZtPiQMOrb28IGOqUBlSXqfJAUKxzran%2FQxjr1DOerv9Ha5EX6G5UDvpZaSm079hX6yQxg0nMk%2B6W4v4Umk7xVVH14NqQbEop%2BEuefkgvU%2FHsW9MCxEJ70tFX0DDS4BkkgHYxGM7y2Iqe94qrsArQ2BKZdoBku2NirBaJnOGF76%2FUt8aSy1npfO8EC3tLVl2Z%2FFmqOyZFTv8t9Jlg3rtXZyLGykZE2l3HtI78kJeDgLLDy&X-Amz-Signature=643ddd320cbf92b158fc4b8663240bc0cb458345b61c522fa914519f77a29f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMCABME%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwy%2FEeJjf8FNQx0XP%2FtVVwRChuLvXMwVCVy35CGl3OtAiEAzndGdWucnh%2FvoJ1zZHILhsiAXGqW9OYm73hg0LE%2FJM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zkDF8FjKOWq%2FX9CrcAzWnDDWEX2dlpPXEFPb9bpJ2eu4Tj4R06CY6GjLlkbWGVUGmzOfuNHOY7Cl2IHbisiGBOFaJEqYjZKjv0uvSgax3nZmuI%2F1Ipfnlm0pMvQhdQMatiKpwtBd%2FxV5Aqv5n5lhanZCqPBkkszt%2FFEcls3xRzyEgrIMnwZgTDgrhUOQOVDQWajKhbqB5duv01Xgv%2BUvLlBjSCqDs2YGahXbSyA3gGfdn%2BxmWtbhP4Y29w6XwFvlKqjFWwriGRV1hzAgwGpDa2kJBAxkgiBoKYyz6Jhc1V4I98XpJ%2FyropfXFk7R%2FALDz8OUTN68YTMSc4EXSJfe8AWvi8PGMjs%2BYAYJTPnycF3zSRJ0oq8t0X%2BSOH65iQU2MW%2FPS1uILfhYWOAZqrExm6VX%2F2SaL51Yoy0nZlYOAdF5f5eDj%2F9yt%2Brmg2noMXs3Qr6PlB6cl6qkqbNyVdpKiirIAwSKPcc50BkjIBU0NPVOi7Vx57QU9FnbqHNF1NOWy9OBPjit76DV3uO6DkuT7VigJttTfxDJ1DXN%2Fkp7Ha8IASgUW%2B8dzR7t25HMWlITgof%2F2rld%2ByD%2B7sfbggpw6oxweo4oB%2Fo72UDyku8iOWEuu%2BHn8xS%2BkSmE6gcXBop6Od0odM0BZtPiQMOrb28IGOqUBlSXqfJAUKxzran%2FQxjr1DOerv9Ha5EX6G5UDvpZaSm079hX6yQxg0nMk%2B6W4v4Umk7xVVH14NqQbEop%2BEuefkgvU%2FHsW9MCxEJ70tFX0DDS4BkkgHYxGM7y2Iqe94qrsArQ2BKZdoBku2NirBaJnOGF76%2FUt8aSy1npfO8EC3tLVl2Z%2FFmqOyZFTv8t9Jlg3rtXZyLGykZE2l3HtI78kJeDgLLDy&X-Amz-Signature=985c5cd41266a2ad0cc30888270ea0a6060c7f3e3bd6a98a9eaa15697e78ff33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMCABME%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwy%2FEeJjf8FNQx0XP%2FtVVwRChuLvXMwVCVy35CGl3OtAiEAzndGdWucnh%2FvoJ1zZHILhsiAXGqW9OYm73hg0LE%2FJM0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zkDF8FjKOWq%2FX9CrcAzWnDDWEX2dlpPXEFPb9bpJ2eu4Tj4R06CY6GjLlkbWGVUGmzOfuNHOY7Cl2IHbisiGBOFaJEqYjZKjv0uvSgax3nZmuI%2F1Ipfnlm0pMvQhdQMatiKpwtBd%2FxV5Aqv5n5lhanZCqPBkkszt%2FFEcls3xRzyEgrIMnwZgTDgrhUOQOVDQWajKhbqB5duv01Xgv%2BUvLlBjSCqDs2YGahXbSyA3gGfdn%2BxmWtbhP4Y29w6XwFvlKqjFWwriGRV1hzAgwGpDa2kJBAxkgiBoKYyz6Jhc1V4I98XpJ%2FyropfXFk7R%2FALDz8OUTN68YTMSc4EXSJfe8AWvi8PGMjs%2BYAYJTPnycF3zSRJ0oq8t0X%2BSOH65iQU2MW%2FPS1uILfhYWOAZqrExm6VX%2F2SaL51Yoy0nZlYOAdF5f5eDj%2F9yt%2Brmg2noMXs3Qr6PlB6cl6qkqbNyVdpKiirIAwSKPcc50BkjIBU0NPVOi7Vx57QU9FnbqHNF1NOWy9OBPjit76DV3uO6DkuT7VigJttTfxDJ1DXN%2Fkp7Ha8IASgUW%2B8dzR7t25HMWlITgof%2F2rld%2ByD%2B7sfbggpw6oxweo4oB%2Fo72UDyku8iOWEuu%2BHn8xS%2BkSmE6gcXBop6Od0odM0BZtPiQMOrb28IGOqUBlSXqfJAUKxzran%2FQxjr1DOerv9Ha5EX6G5UDvpZaSm079hX6yQxg0nMk%2B6W4v4Umk7xVVH14NqQbEop%2BEuefkgvU%2FHsW9MCxEJ70tFX0DDS4BkkgHYxGM7y2Iqe94qrsArQ2BKZdoBku2NirBaJnOGF76%2FUt8aSy1npfO8EC3tLVl2Z%2FFmqOyZFTv8t9Jlg3rtXZyLGykZE2l3HtI78kJeDgLLDy&X-Amz-Signature=aa935d8b41d075038cf87d1c39455bafde549b223f533bab73583c3fe550e85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
