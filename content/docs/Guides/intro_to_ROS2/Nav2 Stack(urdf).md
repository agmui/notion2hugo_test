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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBSYJMP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGUp0Od1ModJTj7P3Z0SPwXZvWlWZ%2BKdgLcCGWxlMz8AiEAmKZhg4aHGk%2FPW%2FYdeiVRp6PZJQEkDxBZHr4%2F9hCHSoMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZcrEQLHd5K2zWK5CrcAzEpVkA4BxQqcD%2Bos7SAo5pBbWFOA9JSgDZn%2FEXNT3aP%2FhbtV1eHQkJcec2AR3HJO7Od8VAMAscRVZhbtf%2BdRrr5OAojQ7RsIIq6Ed6oMrDS3%2FBGo0zBEs54xJeUGA%2FMbMRVuJXnb%2FdvUiR8Jcj%2BwIz%2Bdr0wLQB3RIhrehjKnYlfoD9w1f6J13Pjwj1qhHEBEf%2Bq38%2F9RI2YfDYbpWGfWqL4xPQK5%2Fk6mpBIp4d2S01YlkJE0vqB%2Bm9jX1RUKbrIqeZUuKeOeoGxK%2FBoxgJDsYnumRAlbn2fKhVMY2IjQX62fsHQsPYRmMtt6TlW0IjCZgVX2DoS9K4GLL9WSqxdwNjIlPhkVZ8Qw5nyYC%2BLz7l7SsdYiiMLMBDKIjsZplFHoTiGOOuDHGhCiMSXZtnHqv%2B5RGT%2B%2FXICZ86bCdVuXk7EL3geO84wPhnR9zyjN8c%2BPu7mZ%2BxVYZqbvp8haRX%2FReYeuKYBm29FhuA6iyjW%2Bf84Hb0F%2BsC1hOYpc2WwFNxaniHlbR3tskhNQNwc843ZdIhgBxQ%2FS7FeAe6e6PbHfZETksxHb9Zcs5WliafFG5IG3Bow0ysVXkPNEXFTukE3SW7vioA8J0Zefu5EN3Ms39bd4gGQnqvedb3eWTitMIjTxMMGOqUBvFKEv%2FXbMzUbrd2ukllBLM3eWDRWoUnmd1DYkblZZIZ%2BNvYV14f3siFR%2BrgMGOdFbdEDRCn4ok6RTObPs1vZI9G4cAXRE6HDFEv9Hsp6MsNxlRjBNSXgd5l4pI7z7qDpyOBKAM6RnYh2AfDbKz5m4BceIbDQipgd5z6nRPhuTejZAh8vahLhOxtQbAtIoPKx%2Bs7HEaO8HzJJV%2BEKhTiG8yiOCmF6&X-Amz-Signature=3c4ff94345ad41d64d206a6ae14b32772f1b7ec137e08f9f23041d131b0cddae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBSYJMP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGUp0Od1ModJTj7P3Z0SPwXZvWlWZ%2BKdgLcCGWxlMz8AiEAmKZhg4aHGk%2FPW%2FYdeiVRp6PZJQEkDxBZHr4%2F9hCHSoMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZcrEQLHd5K2zWK5CrcAzEpVkA4BxQqcD%2Bos7SAo5pBbWFOA9JSgDZn%2FEXNT3aP%2FhbtV1eHQkJcec2AR3HJO7Od8VAMAscRVZhbtf%2BdRrr5OAojQ7RsIIq6Ed6oMrDS3%2FBGo0zBEs54xJeUGA%2FMbMRVuJXnb%2FdvUiR8Jcj%2BwIz%2Bdr0wLQB3RIhrehjKnYlfoD9w1f6J13Pjwj1qhHEBEf%2Bq38%2F9RI2YfDYbpWGfWqL4xPQK5%2Fk6mpBIp4d2S01YlkJE0vqB%2Bm9jX1RUKbrIqeZUuKeOeoGxK%2FBoxgJDsYnumRAlbn2fKhVMY2IjQX62fsHQsPYRmMtt6TlW0IjCZgVX2DoS9K4GLL9WSqxdwNjIlPhkVZ8Qw5nyYC%2BLz7l7SsdYiiMLMBDKIjsZplFHoTiGOOuDHGhCiMSXZtnHqv%2B5RGT%2B%2FXICZ86bCdVuXk7EL3geO84wPhnR9zyjN8c%2BPu7mZ%2BxVYZqbvp8haRX%2FReYeuKYBm29FhuA6iyjW%2Bf84Hb0F%2BsC1hOYpc2WwFNxaniHlbR3tskhNQNwc843ZdIhgBxQ%2FS7FeAe6e6PbHfZETksxHb9Zcs5WliafFG5IG3Bow0ysVXkPNEXFTukE3SW7vioA8J0Zefu5EN3Ms39bd4gGQnqvedb3eWTitMIjTxMMGOqUBvFKEv%2FXbMzUbrd2ukllBLM3eWDRWoUnmd1DYkblZZIZ%2BNvYV14f3siFR%2BrgMGOdFbdEDRCn4ok6RTObPs1vZI9G4cAXRE6HDFEv9Hsp6MsNxlRjBNSXgd5l4pI7z7qDpyOBKAM6RnYh2AfDbKz5m4BceIbDQipgd5z6nRPhuTejZAh8vahLhOxtQbAtIoPKx%2Bs7HEaO8HzJJV%2BEKhTiG8yiOCmF6&X-Amz-Signature=de4b8d05c8837af9b1d7aa99b19cc65faf6671ad7666936f643252f26060c88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBSYJMP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGUp0Od1ModJTj7P3Z0SPwXZvWlWZ%2BKdgLcCGWxlMz8AiEAmKZhg4aHGk%2FPW%2FYdeiVRp6PZJQEkDxBZHr4%2F9hCHSoMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZcrEQLHd5K2zWK5CrcAzEpVkA4BxQqcD%2Bos7SAo5pBbWFOA9JSgDZn%2FEXNT3aP%2FhbtV1eHQkJcec2AR3HJO7Od8VAMAscRVZhbtf%2BdRrr5OAojQ7RsIIq6Ed6oMrDS3%2FBGo0zBEs54xJeUGA%2FMbMRVuJXnb%2FdvUiR8Jcj%2BwIz%2Bdr0wLQB3RIhrehjKnYlfoD9w1f6J13Pjwj1qhHEBEf%2Bq38%2F9RI2YfDYbpWGfWqL4xPQK5%2Fk6mpBIp4d2S01YlkJE0vqB%2Bm9jX1RUKbrIqeZUuKeOeoGxK%2FBoxgJDsYnumRAlbn2fKhVMY2IjQX62fsHQsPYRmMtt6TlW0IjCZgVX2DoS9K4GLL9WSqxdwNjIlPhkVZ8Qw5nyYC%2BLz7l7SsdYiiMLMBDKIjsZplFHoTiGOOuDHGhCiMSXZtnHqv%2B5RGT%2B%2FXICZ86bCdVuXk7EL3geO84wPhnR9zyjN8c%2BPu7mZ%2BxVYZqbvp8haRX%2FReYeuKYBm29FhuA6iyjW%2Bf84Hb0F%2BsC1hOYpc2WwFNxaniHlbR3tskhNQNwc843ZdIhgBxQ%2FS7FeAe6e6PbHfZETksxHb9Zcs5WliafFG5IG3Bow0ysVXkPNEXFTukE3SW7vioA8J0Zefu5EN3Ms39bd4gGQnqvedb3eWTitMIjTxMMGOqUBvFKEv%2FXbMzUbrd2ukllBLM3eWDRWoUnmd1DYkblZZIZ%2BNvYV14f3siFR%2BrgMGOdFbdEDRCn4ok6RTObPs1vZI9G4cAXRE6HDFEv9Hsp6MsNxlRjBNSXgd5l4pI7z7qDpyOBKAM6RnYh2AfDbKz5m4BceIbDQipgd5z6nRPhuTejZAh8vahLhOxtQbAtIoPKx%2Bs7HEaO8HzJJV%2BEKhTiG8yiOCmF6&X-Amz-Signature=e993ffa83c66e7a977308d494479d8ea44a440ec814010758b145de6c9f84a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBSYJMP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGUp0Od1ModJTj7P3Z0SPwXZvWlWZ%2BKdgLcCGWxlMz8AiEAmKZhg4aHGk%2FPW%2FYdeiVRp6PZJQEkDxBZHr4%2F9hCHSoMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZcrEQLHd5K2zWK5CrcAzEpVkA4BxQqcD%2Bos7SAo5pBbWFOA9JSgDZn%2FEXNT3aP%2FhbtV1eHQkJcec2AR3HJO7Od8VAMAscRVZhbtf%2BdRrr5OAojQ7RsIIq6Ed6oMrDS3%2FBGo0zBEs54xJeUGA%2FMbMRVuJXnb%2FdvUiR8Jcj%2BwIz%2Bdr0wLQB3RIhrehjKnYlfoD9w1f6J13Pjwj1qhHEBEf%2Bq38%2F9RI2YfDYbpWGfWqL4xPQK5%2Fk6mpBIp4d2S01YlkJE0vqB%2Bm9jX1RUKbrIqeZUuKeOeoGxK%2FBoxgJDsYnumRAlbn2fKhVMY2IjQX62fsHQsPYRmMtt6TlW0IjCZgVX2DoS9K4GLL9WSqxdwNjIlPhkVZ8Qw5nyYC%2BLz7l7SsdYiiMLMBDKIjsZplFHoTiGOOuDHGhCiMSXZtnHqv%2B5RGT%2B%2FXICZ86bCdVuXk7EL3geO84wPhnR9zyjN8c%2BPu7mZ%2BxVYZqbvp8haRX%2FReYeuKYBm29FhuA6iyjW%2Bf84Hb0F%2BsC1hOYpc2WwFNxaniHlbR3tskhNQNwc843ZdIhgBxQ%2FS7FeAe6e6PbHfZETksxHb9Zcs5WliafFG5IG3Bow0ysVXkPNEXFTukE3SW7vioA8J0Zefu5EN3Ms39bd4gGQnqvedb3eWTitMIjTxMMGOqUBvFKEv%2FXbMzUbrd2ukllBLM3eWDRWoUnmd1DYkblZZIZ%2BNvYV14f3siFR%2BrgMGOdFbdEDRCn4ok6RTObPs1vZI9G4cAXRE6HDFEv9Hsp6MsNxlRjBNSXgd5l4pI7z7qDpyOBKAM6RnYh2AfDbKz5m4BceIbDQipgd5z6nRPhuTejZAh8vahLhOxtQbAtIoPKx%2Bs7HEaO8HzJJV%2BEKhTiG8yiOCmF6&X-Amz-Signature=5a5bc1c97beb8590c2d10cdb6098b5fa6e505cc22951ce628596d5b664fde321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBSYJMP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGUp0Od1ModJTj7P3Z0SPwXZvWlWZ%2BKdgLcCGWxlMz8AiEAmKZhg4aHGk%2FPW%2FYdeiVRp6PZJQEkDxBZHr4%2F9hCHSoMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZcrEQLHd5K2zWK5CrcAzEpVkA4BxQqcD%2Bos7SAo5pBbWFOA9JSgDZn%2FEXNT3aP%2FhbtV1eHQkJcec2AR3HJO7Od8VAMAscRVZhbtf%2BdRrr5OAojQ7RsIIq6Ed6oMrDS3%2FBGo0zBEs54xJeUGA%2FMbMRVuJXnb%2FdvUiR8Jcj%2BwIz%2Bdr0wLQB3RIhrehjKnYlfoD9w1f6J13Pjwj1qhHEBEf%2Bq38%2F9RI2YfDYbpWGfWqL4xPQK5%2Fk6mpBIp4d2S01YlkJE0vqB%2Bm9jX1RUKbrIqeZUuKeOeoGxK%2FBoxgJDsYnumRAlbn2fKhVMY2IjQX62fsHQsPYRmMtt6TlW0IjCZgVX2DoS9K4GLL9WSqxdwNjIlPhkVZ8Qw5nyYC%2BLz7l7SsdYiiMLMBDKIjsZplFHoTiGOOuDHGhCiMSXZtnHqv%2B5RGT%2B%2FXICZ86bCdVuXk7EL3geO84wPhnR9zyjN8c%2BPu7mZ%2BxVYZqbvp8haRX%2FReYeuKYBm29FhuA6iyjW%2Bf84Hb0F%2BsC1hOYpc2WwFNxaniHlbR3tskhNQNwc843ZdIhgBxQ%2FS7FeAe6e6PbHfZETksxHb9Zcs5WliafFG5IG3Bow0ysVXkPNEXFTukE3SW7vioA8J0Zefu5EN3Ms39bd4gGQnqvedb3eWTitMIjTxMMGOqUBvFKEv%2FXbMzUbrd2ukllBLM3eWDRWoUnmd1DYkblZZIZ%2BNvYV14f3siFR%2BrgMGOdFbdEDRCn4ok6RTObPs1vZI9G4cAXRE6HDFEv9Hsp6MsNxlRjBNSXgd5l4pI7z7qDpyOBKAM6RnYh2AfDbKz5m4BceIbDQipgd5z6nRPhuTejZAh8vahLhOxtQbAtIoPKx%2Bs7HEaO8HzJJV%2BEKhTiG8yiOCmF6&X-Amz-Signature=ffa0fe0cfcdac24a68eca239c3418f845a45c24ba92000ad0f01e10f1322dbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBSYJMP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGUp0Od1ModJTj7P3Z0SPwXZvWlWZ%2BKdgLcCGWxlMz8AiEAmKZhg4aHGk%2FPW%2FYdeiVRp6PZJQEkDxBZHr4%2F9hCHSoMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZcrEQLHd5K2zWK5CrcAzEpVkA4BxQqcD%2Bos7SAo5pBbWFOA9JSgDZn%2FEXNT3aP%2FhbtV1eHQkJcec2AR3HJO7Od8VAMAscRVZhbtf%2BdRrr5OAojQ7RsIIq6Ed6oMrDS3%2FBGo0zBEs54xJeUGA%2FMbMRVuJXnb%2FdvUiR8Jcj%2BwIz%2Bdr0wLQB3RIhrehjKnYlfoD9w1f6J13Pjwj1qhHEBEf%2Bq38%2F9RI2YfDYbpWGfWqL4xPQK5%2Fk6mpBIp4d2S01YlkJE0vqB%2Bm9jX1RUKbrIqeZUuKeOeoGxK%2FBoxgJDsYnumRAlbn2fKhVMY2IjQX62fsHQsPYRmMtt6TlW0IjCZgVX2DoS9K4GLL9WSqxdwNjIlPhkVZ8Qw5nyYC%2BLz7l7SsdYiiMLMBDKIjsZplFHoTiGOOuDHGhCiMSXZtnHqv%2B5RGT%2B%2FXICZ86bCdVuXk7EL3geO84wPhnR9zyjN8c%2BPu7mZ%2BxVYZqbvp8haRX%2FReYeuKYBm29FhuA6iyjW%2Bf84Hb0F%2BsC1hOYpc2WwFNxaniHlbR3tskhNQNwc843ZdIhgBxQ%2FS7FeAe6e6PbHfZETksxHb9Zcs5WliafFG5IG3Bow0ysVXkPNEXFTukE3SW7vioA8J0Zefu5EN3Ms39bd4gGQnqvedb3eWTitMIjTxMMGOqUBvFKEv%2FXbMzUbrd2ukllBLM3eWDRWoUnmd1DYkblZZIZ%2BNvYV14f3siFR%2BrgMGOdFbdEDRCn4ok6RTObPs1vZI9G4cAXRE6HDFEv9Hsp6MsNxlRjBNSXgd5l4pI7z7qDpyOBKAM6RnYh2AfDbKz5m4BceIbDQipgd5z6nRPhuTejZAh8vahLhOxtQbAtIoPKx%2Bs7HEaO8HzJJV%2BEKhTiG8yiOCmF6&X-Amz-Signature=7cec1806ed7ec0f605c7af9b4db10c73bac64be2c77e359fc3cbe4175b36d2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
