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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SNZ7P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEt5%2BAbodfiDzL3rSxSkL%2F%2BrJQKfzojjRD%2BaGMmJSMAIgMEfhZlKgCefycQddBQ%2BNdEEICsUUGjT0LByhaR8gW0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQh8EzzfBA%2BSJ95ZyrcA2SV70oOw128VkN%2BH81Pms1g1HEYGwiK%2FHx%2FHhC43Cayw5bLIpGCX%2BmVv61JVnc4bBCFGCJWL5Qh1iE07bv5qnG7wscGJp3l5HHmtFy4VN47m0PqwcusVbeDMJtV%2FzxkSBLgQoT2tpm%2FlFLZcEEI4L8Xouf1xPuoTcrjV4e5kEZACoDAnD4tPo49rhaZDb07IrCsJV%2Bx3h7xzdQs1jWNlSyAayjXDucv7av1A%2FC%2B%2Fz5PnJu9wEXgDNq%2F%2BISwMtk%2F3gP7e5%2BVB9nM6qIrR7bkPxvQwzisbSIp6hhmqxHVjPiNHIh7mQVW4dwYOLFu7d2J6DXYB8RoSNEnQzpbYVWqRG9S2hRwvD1qj3AFi2LSXaLeeKfxKyVd4Z5ub3%2B%2FZDwpElLnb6orOrPkbLHdRtsym5bsaiYZHGSYdGzmbjmljBU%2Bl2yCSDgs2xhHpx%2FVLqXTQWiHug%2BhISnXx2ZSm9CcASqxlj3%2FRwbrvMcI1VmJTrENbAJWiF7nrrmaO3taZXk0WZrYzVPWVEm4PAUvvSPCy5JCc%2FtZwRHf50syltSjfRpZccqiVQMlpGy2X8ClHCmENXFF18N%2FDPPsZ4sT3cbII8pGL%2Ft552x2oQA1FQKz2Q3REJRumJOFlcHfy8GtMJT22sEGOqUBMRSv7MY7OfsQhWpKO74209doFkipQyDMJnm25Ian6YHG4YbyICn2a1i9hZ6vbK%2BNfZ5BwB3%2FxIYJAk2emfI99k6i4W0%2BxFM6g3RM7rQGNl5mqOaLGLmLhmBPSHD9B2LkZBu%2F0Irj69jP7Tvg0vG6IMxmuAccfSlmxVtBXq%2FxYugwlFB6MYpym7FsySjs6Wb5GMXjUQYJWuh0PjmQ3XgBG7lej51V&X-Amz-Signature=2052e270479b321a09627998ea979b69c05b6eb28fa836b35c249c3a9799ff00&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SNZ7P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEt5%2BAbodfiDzL3rSxSkL%2F%2BrJQKfzojjRD%2BaGMmJSMAIgMEfhZlKgCefycQddBQ%2BNdEEICsUUGjT0LByhaR8gW0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQh8EzzfBA%2BSJ95ZyrcA2SV70oOw128VkN%2BH81Pms1g1HEYGwiK%2FHx%2FHhC43Cayw5bLIpGCX%2BmVv61JVnc4bBCFGCJWL5Qh1iE07bv5qnG7wscGJp3l5HHmtFy4VN47m0PqwcusVbeDMJtV%2FzxkSBLgQoT2tpm%2FlFLZcEEI4L8Xouf1xPuoTcrjV4e5kEZACoDAnD4tPo49rhaZDb07IrCsJV%2Bx3h7xzdQs1jWNlSyAayjXDucv7av1A%2FC%2B%2Fz5PnJu9wEXgDNq%2F%2BISwMtk%2F3gP7e5%2BVB9nM6qIrR7bkPxvQwzisbSIp6hhmqxHVjPiNHIh7mQVW4dwYOLFu7d2J6DXYB8RoSNEnQzpbYVWqRG9S2hRwvD1qj3AFi2LSXaLeeKfxKyVd4Z5ub3%2B%2FZDwpElLnb6orOrPkbLHdRtsym5bsaiYZHGSYdGzmbjmljBU%2Bl2yCSDgs2xhHpx%2FVLqXTQWiHug%2BhISnXx2ZSm9CcASqxlj3%2FRwbrvMcI1VmJTrENbAJWiF7nrrmaO3taZXk0WZrYzVPWVEm4PAUvvSPCy5JCc%2FtZwRHf50syltSjfRpZccqiVQMlpGy2X8ClHCmENXFF18N%2FDPPsZ4sT3cbII8pGL%2Ft552x2oQA1FQKz2Q3REJRumJOFlcHfy8GtMJT22sEGOqUBMRSv7MY7OfsQhWpKO74209doFkipQyDMJnm25Ian6YHG4YbyICn2a1i9hZ6vbK%2BNfZ5BwB3%2FxIYJAk2emfI99k6i4W0%2BxFM6g3RM7rQGNl5mqOaLGLmLhmBPSHD9B2LkZBu%2F0Irj69jP7Tvg0vG6IMxmuAccfSlmxVtBXq%2FxYugwlFB6MYpym7FsySjs6Wb5GMXjUQYJWuh0PjmQ3XgBG7lej51V&X-Amz-Signature=1a20e813de8b8860eb2312c7d8a784efbb8e240e659a04fb851338a388f18f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SNZ7P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEt5%2BAbodfiDzL3rSxSkL%2F%2BrJQKfzojjRD%2BaGMmJSMAIgMEfhZlKgCefycQddBQ%2BNdEEICsUUGjT0LByhaR8gW0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQh8EzzfBA%2BSJ95ZyrcA2SV70oOw128VkN%2BH81Pms1g1HEYGwiK%2FHx%2FHhC43Cayw5bLIpGCX%2BmVv61JVnc4bBCFGCJWL5Qh1iE07bv5qnG7wscGJp3l5HHmtFy4VN47m0PqwcusVbeDMJtV%2FzxkSBLgQoT2tpm%2FlFLZcEEI4L8Xouf1xPuoTcrjV4e5kEZACoDAnD4tPo49rhaZDb07IrCsJV%2Bx3h7xzdQs1jWNlSyAayjXDucv7av1A%2FC%2B%2Fz5PnJu9wEXgDNq%2F%2BISwMtk%2F3gP7e5%2BVB9nM6qIrR7bkPxvQwzisbSIp6hhmqxHVjPiNHIh7mQVW4dwYOLFu7d2J6DXYB8RoSNEnQzpbYVWqRG9S2hRwvD1qj3AFi2LSXaLeeKfxKyVd4Z5ub3%2B%2FZDwpElLnb6orOrPkbLHdRtsym5bsaiYZHGSYdGzmbjmljBU%2Bl2yCSDgs2xhHpx%2FVLqXTQWiHug%2BhISnXx2ZSm9CcASqxlj3%2FRwbrvMcI1VmJTrENbAJWiF7nrrmaO3taZXk0WZrYzVPWVEm4PAUvvSPCy5JCc%2FtZwRHf50syltSjfRpZccqiVQMlpGy2X8ClHCmENXFF18N%2FDPPsZ4sT3cbII8pGL%2Ft552x2oQA1FQKz2Q3REJRumJOFlcHfy8GtMJT22sEGOqUBMRSv7MY7OfsQhWpKO74209doFkipQyDMJnm25Ian6YHG4YbyICn2a1i9hZ6vbK%2BNfZ5BwB3%2FxIYJAk2emfI99k6i4W0%2BxFM6g3RM7rQGNl5mqOaLGLmLhmBPSHD9B2LkZBu%2F0Irj69jP7Tvg0vG6IMxmuAccfSlmxVtBXq%2FxYugwlFB6MYpym7FsySjs6Wb5GMXjUQYJWuh0PjmQ3XgBG7lej51V&X-Amz-Signature=4d491e2ba0ab89eb5d628d1307b4562da46d9cfcd6367a48296e3813b9d90a92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SNZ7P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEt5%2BAbodfiDzL3rSxSkL%2F%2BrJQKfzojjRD%2BaGMmJSMAIgMEfhZlKgCefycQddBQ%2BNdEEICsUUGjT0LByhaR8gW0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQh8EzzfBA%2BSJ95ZyrcA2SV70oOw128VkN%2BH81Pms1g1HEYGwiK%2FHx%2FHhC43Cayw5bLIpGCX%2BmVv61JVnc4bBCFGCJWL5Qh1iE07bv5qnG7wscGJp3l5HHmtFy4VN47m0PqwcusVbeDMJtV%2FzxkSBLgQoT2tpm%2FlFLZcEEI4L8Xouf1xPuoTcrjV4e5kEZACoDAnD4tPo49rhaZDb07IrCsJV%2Bx3h7xzdQs1jWNlSyAayjXDucv7av1A%2FC%2B%2Fz5PnJu9wEXgDNq%2F%2BISwMtk%2F3gP7e5%2BVB9nM6qIrR7bkPxvQwzisbSIp6hhmqxHVjPiNHIh7mQVW4dwYOLFu7d2J6DXYB8RoSNEnQzpbYVWqRG9S2hRwvD1qj3AFi2LSXaLeeKfxKyVd4Z5ub3%2B%2FZDwpElLnb6orOrPkbLHdRtsym5bsaiYZHGSYdGzmbjmljBU%2Bl2yCSDgs2xhHpx%2FVLqXTQWiHug%2BhISnXx2ZSm9CcASqxlj3%2FRwbrvMcI1VmJTrENbAJWiF7nrrmaO3taZXk0WZrYzVPWVEm4PAUvvSPCy5JCc%2FtZwRHf50syltSjfRpZccqiVQMlpGy2X8ClHCmENXFF18N%2FDPPsZ4sT3cbII8pGL%2Ft552x2oQA1FQKz2Q3REJRumJOFlcHfy8GtMJT22sEGOqUBMRSv7MY7OfsQhWpKO74209doFkipQyDMJnm25Ian6YHG4YbyICn2a1i9hZ6vbK%2BNfZ5BwB3%2FxIYJAk2emfI99k6i4W0%2BxFM6g3RM7rQGNl5mqOaLGLmLhmBPSHD9B2LkZBu%2F0Irj69jP7Tvg0vG6IMxmuAccfSlmxVtBXq%2FxYugwlFB6MYpym7FsySjs6Wb5GMXjUQYJWuh0PjmQ3XgBG7lej51V&X-Amz-Signature=b85ff2d38b0c070be4feec8752d5a335386a6d208ba0550745838881bdce439a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SNZ7P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEt5%2BAbodfiDzL3rSxSkL%2F%2BrJQKfzojjRD%2BaGMmJSMAIgMEfhZlKgCefycQddBQ%2BNdEEICsUUGjT0LByhaR8gW0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQh8EzzfBA%2BSJ95ZyrcA2SV70oOw128VkN%2BH81Pms1g1HEYGwiK%2FHx%2FHhC43Cayw5bLIpGCX%2BmVv61JVnc4bBCFGCJWL5Qh1iE07bv5qnG7wscGJp3l5HHmtFy4VN47m0PqwcusVbeDMJtV%2FzxkSBLgQoT2tpm%2FlFLZcEEI4L8Xouf1xPuoTcrjV4e5kEZACoDAnD4tPo49rhaZDb07IrCsJV%2Bx3h7xzdQs1jWNlSyAayjXDucv7av1A%2FC%2B%2Fz5PnJu9wEXgDNq%2F%2BISwMtk%2F3gP7e5%2BVB9nM6qIrR7bkPxvQwzisbSIp6hhmqxHVjPiNHIh7mQVW4dwYOLFu7d2J6DXYB8RoSNEnQzpbYVWqRG9S2hRwvD1qj3AFi2LSXaLeeKfxKyVd4Z5ub3%2B%2FZDwpElLnb6orOrPkbLHdRtsym5bsaiYZHGSYdGzmbjmljBU%2Bl2yCSDgs2xhHpx%2FVLqXTQWiHug%2BhISnXx2ZSm9CcASqxlj3%2FRwbrvMcI1VmJTrENbAJWiF7nrrmaO3taZXk0WZrYzVPWVEm4PAUvvSPCy5JCc%2FtZwRHf50syltSjfRpZccqiVQMlpGy2X8ClHCmENXFF18N%2FDPPsZ4sT3cbII8pGL%2Ft552x2oQA1FQKz2Q3REJRumJOFlcHfy8GtMJT22sEGOqUBMRSv7MY7OfsQhWpKO74209doFkipQyDMJnm25Ian6YHG4YbyICn2a1i9hZ6vbK%2BNfZ5BwB3%2FxIYJAk2emfI99k6i4W0%2BxFM6g3RM7rQGNl5mqOaLGLmLhmBPSHD9B2LkZBu%2F0Irj69jP7Tvg0vG6IMxmuAccfSlmxVtBXq%2FxYugwlFB6MYpym7FsySjs6Wb5GMXjUQYJWuh0PjmQ3XgBG7lej51V&X-Amz-Signature=2de6de8d45e2e0f036f6ae3659f770ad7aa925ceaa0b9342fcb2271275dad19d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SNZ7P%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbEt5%2BAbodfiDzL3rSxSkL%2F%2BrJQKfzojjRD%2BaGMmJSMAIgMEfhZlKgCefycQddBQ%2BNdEEICsUUGjT0LByhaR8gW0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDQh8EzzfBA%2BSJ95ZyrcA2SV70oOw128VkN%2BH81Pms1g1HEYGwiK%2FHx%2FHhC43Cayw5bLIpGCX%2BmVv61JVnc4bBCFGCJWL5Qh1iE07bv5qnG7wscGJp3l5HHmtFy4VN47m0PqwcusVbeDMJtV%2FzxkSBLgQoT2tpm%2FlFLZcEEI4L8Xouf1xPuoTcrjV4e5kEZACoDAnD4tPo49rhaZDb07IrCsJV%2Bx3h7xzdQs1jWNlSyAayjXDucv7av1A%2FC%2B%2Fz5PnJu9wEXgDNq%2F%2BISwMtk%2F3gP7e5%2BVB9nM6qIrR7bkPxvQwzisbSIp6hhmqxHVjPiNHIh7mQVW4dwYOLFu7d2J6DXYB8RoSNEnQzpbYVWqRG9S2hRwvD1qj3AFi2LSXaLeeKfxKyVd4Z5ub3%2B%2FZDwpElLnb6orOrPkbLHdRtsym5bsaiYZHGSYdGzmbjmljBU%2Bl2yCSDgs2xhHpx%2FVLqXTQWiHug%2BhISnXx2ZSm9CcASqxlj3%2FRwbrvMcI1VmJTrENbAJWiF7nrrmaO3taZXk0WZrYzVPWVEm4PAUvvSPCy5JCc%2FtZwRHf50syltSjfRpZccqiVQMlpGy2X8ClHCmENXFF18N%2FDPPsZ4sT3cbII8pGL%2Ft552x2oQA1FQKz2Q3REJRumJOFlcHfy8GtMJT22sEGOqUBMRSv7MY7OfsQhWpKO74209doFkipQyDMJnm25Ian6YHG4YbyICn2a1i9hZ6vbK%2BNfZ5BwB3%2FxIYJAk2emfI99k6i4W0%2BxFM6g3RM7rQGNl5mqOaLGLmLhmBPSHD9B2LkZBu%2F0Irj69jP7Tvg0vG6IMxmuAccfSlmxVtBXq%2FxYugwlFB6MYpym7FsySjs6Wb5GMXjUQYJWuh0PjmQ3XgBG7lej51V&X-Amz-Signature=dbc3d7465b71c9934683f295a730c47779e3836b7fcefa1ba24ae8a79514bd17&X-Amz-SignedHeaders=host&x-id=GetObject)
