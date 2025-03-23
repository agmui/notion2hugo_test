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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R7JS7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx%2BCaASH7eo%2BpKJQ%2Fq70YqCJKiIEytg5ADL25TpyEFdAiEAyCPN0RXKHz%2B1s8l4%2F6sFYquugPimY7Kq7e%2F9kabYIAgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMsf%2FaKwesuOIpbwircA4C0f4PiPwzanPV8WaTz5L%2FOIXYUwG%2Fn8Anta5UAbqXvNEFwVQGG30WfFk3BiLA0os2DFAABI6s8qieAk2gkjMlVq4KBGNEk1rcKBGPPbwwi24%2BjKRGMsbueNGAreu6reF1kXNmzXZTz9%2FtX5ZMnS%2FEodnBTiCgp8N%2B7xQbcfdTPLu4bMSGJlJic3ewbg%2BhgOY%2FIovKaHwVEN7u%2FI4rjH5o5GX7tGMeUzNL%2F5PkXGrNJcRNRwqxRbj6jf9NLrIZhcwggNlRokix1ejm8fz888PwVYOSgOtJb86TIeuDVnVnxkfowzRAUZD3AWKQOUeZZedYMcPS%2FNwnwtD%2F9ljPA5bX%2FpWfHp%2FNaUQst7ZXWGTWZF6%2BIWOktSwb%2F%2BpR5LpkCbmTpKM9O7xoWU9AcUhCZvVAZQzqTlzI4viNJUIc66tp4tGVOy%2FGyaMxZBFC%2F7TOJ3XPh2Y2b8jsSqAJRkf%2Fyz1CbhYswv3taBdW%2FIvUR8hKXtIlQxe8FbJK51nH8wZNRd%2BxGshDSlq9NGYKNoznwSbkjzQLh2W5N8DlHl7OpAA335u3wW%2BODZgv3ulVPBHq8fPyvbYmK66GCn5LNMYha16QImtmpljc3yvk95U4rg2dhOZmH7dD5xOagYclLMM6sgb8GOqUBQ0tg2f6fyxGg79%2F9TLAb730UedyrlZ8x%2FomNHsMlOOtb%2BhhZpZDWjvsi7FyYRm0da7bo%2FvYSRMShvT6I2xrERtlQclSjVCtKolvADy2Inro1yns4ljgOGT0f7zAIx2VsQpEm6rbVSeqJS2yjpp0Hxie7zLbv659xzyciMYvgY5QWB6qmoRpP0MIza24PdoKZYxOdM9l6ABoOMEsDT4hWfgRa2aml&X-Amz-Signature=88c760e0b33fb72d815fc1ed6c3f13cfbc5fe8033f224c172d5ee6269302f98d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R7JS7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx%2BCaASH7eo%2BpKJQ%2Fq70YqCJKiIEytg5ADL25TpyEFdAiEAyCPN0RXKHz%2B1s8l4%2F6sFYquugPimY7Kq7e%2F9kabYIAgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMsf%2FaKwesuOIpbwircA4C0f4PiPwzanPV8WaTz5L%2FOIXYUwG%2Fn8Anta5UAbqXvNEFwVQGG30WfFk3BiLA0os2DFAABI6s8qieAk2gkjMlVq4KBGNEk1rcKBGPPbwwi24%2BjKRGMsbueNGAreu6reF1kXNmzXZTz9%2FtX5ZMnS%2FEodnBTiCgp8N%2B7xQbcfdTPLu4bMSGJlJic3ewbg%2BhgOY%2FIovKaHwVEN7u%2FI4rjH5o5GX7tGMeUzNL%2F5PkXGrNJcRNRwqxRbj6jf9NLrIZhcwggNlRokix1ejm8fz888PwVYOSgOtJb86TIeuDVnVnxkfowzRAUZD3AWKQOUeZZedYMcPS%2FNwnwtD%2F9ljPA5bX%2FpWfHp%2FNaUQst7ZXWGTWZF6%2BIWOktSwb%2F%2BpR5LpkCbmTpKM9O7xoWU9AcUhCZvVAZQzqTlzI4viNJUIc66tp4tGVOy%2FGyaMxZBFC%2F7TOJ3XPh2Y2b8jsSqAJRkf%2Fyz1CbhYswv3taBdW%2FIvUR8hKXtIlQxe8FbJK51nH8wZNRd%2BxGshDSlq9NGYKNoznwSbkjzQLh2W5N8DlHl7OpAA335u3wW%2BODZgv3ulVPBHq8fPyvbYmK66GCn5LNMYha16QImtmpljc3yvk95U4rg2dhOZmH7dD5xOagYclLMM6sgb8GOqUBQ0tg2f6fyxGg79%2F9TLAb730UedyrlZ8x%2FomNHsMlOOtb%2BhhZpZDWjvsi7FyYRm0da7bo%2FvYSRMShvT6I2xrERtlQclSjVCtKolvADy2Inro1yns4ljgOGT0f7zAIx2VsQpEm6rbVSeqJS2yjpp0Hxie7zLbv659xzyciMYvgY5QWB6qmoRpP0MIza24PdoKZYxOdM9l6ABoOMEsDT4hWfgRa2aml&X-Amz-Signature=6d4fe5b2ffa1f3d87f5601e9e63153bc920aa7304946638a5bbef775c496ffcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R7JS7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx%2BCaASH7eo%2BpKJQ%2Fq70YqCJKiIEytg5ADL25TpyEFdAiEAyCPN0RXKHz%2B1s8l4%2F6sFYquugPimY7Kq7e%2F9kabYIAgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMsf%2FaKwesuOIpbwircA4C0f4PiPwzanPV8WaTz5L%2FOIXYUwG%2Fn8Anta5UAbqXvNEFwVQGG30WfFk3BiLA0os2DFAABI6s8qieAk2gkjMlVq4KBGNEk1rcKBGPPbwwi24%2BjKRGMsbueNGAreu6reF1kXNmzXZTz9%2FtX5ZMnS%2FEodnBTiCgp8N%2B7xQbcfdTPLu4bMSGJlJic3ewbg%2BhgOY%2FIovKaHwVEN7u%2FI4rjH5o5GX7tGMeUzNL%2F5PkXGrNJcRNRwqxRbj6jf9NLrIZhcwggNlRokix1ejm8fz888PwVYOSgOtJb86TIeuDVnVnxkfowzRAUZD3AWKQOUeZZedYMcPS%2FNwnwtD%2F9ljPA5bX%2FpWfHp%2FNaUQst7ZXWGTWZF6%2BIWOktSwb%2F%2BpR5LpkCbmTpKM9O7xoWU9AcUhCZvVAZQzqTlzI4viNJUIc66tp4tGVOy%2FGyaMxZBFC%2F7TOJ3XPh2Y2b8jsSqAJRkf%2Fyz1CbhYswv3taBdW%2FIvUR8hKXtIlQxe8FbJK51nH8wZNRd%2BxGshDSlq9NGYKNoznwSbkjzQLh2W5N8DlHl7OpAA335u3wW%2BODZgv3ulVPBHq8fPyvbYmK66GCn5LNMYha16QImtmpljc3yvk95U4rg2dhOZmH7dD5xOagYclLMM6sgb8GOqUBQ0tg2f6fyxGg79%2F9TLAb730UedyrlZ8x%2FomNHsMlOOtb%2BhhZpZDWjvsi7FyYRm0da7bo%2FvYSRMShvT6I2xrERtlQclSjVCtKolvADy2Inro1yns4ljgOGT0f7zAIx2VsQpEm6rbVSeqJS2yjpp0Hxie7zLbv659xzyciMYvgY5QWB6qmoRpP0MIza24PdoKZYxOdM9l6ABoOMEsDT4hWfgRa2aml&X-Amz-Signature=75bbf718177a9421007a7816cdada1688afbec7878db9209f97df5c04833daf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R7JS7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx%2BCaASH7eo%2BpKJQ%2Fq70YqCJKiIEytg5ADL25TpyEFdAiEAyCPN0RXKHz%2B1s8l4%2F6sFYquugPimY7Kq7e%2F9kabYIAgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMsf%2FaKwesuOIpbwircA4C0f4PiPwzanPV8WaTz5L%2FOIXYUwG%2Fn8Anta5UAbqXvNEFwVQGG30WfFk3BiLA0os2DFAABI6s8qieAk2gkjMlVq4KBGNEk1rcKBGPPbwwi24%2BjKRGMsbueNGAreu6reF1kXNmzXZTz9%2FtX5ZMnS%2FEodnBTiCgp8N%2B7xQbcfdTPLu4bMSGJlJic3ewbg%2BhgOY%2FIovKaHwVEN7u%2FI4rjH5o5GX7tGMeUzNL%2F5PkXGrNJcRNRwqxRbj6jf9NLrIZhcwggNlRokix1ejm8fz888PwVYOSgOtJb86TIeuDVnVnxkfowzRAUZD3AWKQOUeZZedYMcPS%2FNwnwtD%2F9ljPA5bX%2FpWfHp%2FNaUQst7ZXWGTWZF6%2BIWOktSwb%2F%2BpR5LpkCbmTpKM9O7xoWU9AcUhCZvVAZQzqTlzI4viNJUIc66tp4tGVOy%2FGyaMxZBFC%2F7TOJ3XPh2Y2b8jsSqAJRkf%2Fyz1CbhYswv3taBdW%2FIvUR8hKXtIlQxe8FbJK51nH8wZNRd%2BxGshDSlq9NGYKNoznwSbkjzQLh2W5N8DlHl7OpAA335u3wW%2BODZgv3ulVPBHq8fPyvbYmK66GCn5LNMYha16QImtmpljc3yvk95U4rg2dhOZmH7dD5xOagYclLMM6sgb8GOqUBQ0tg2f6fyxGg79%2F9TLAb730UedyrlZ8x%2FomNHsMlOOtb%2BhhZpZDWjvsi7FyYRm0da7bo%2FvYSRMShvT6I2xrERtlQclSjVCtKolvADy2Inro1yns4ljgOGT0f7zAIx2VsQpEm6rbVSeqJS2yjpp0Hxie7zLbv659xzyciMYvgY5QWB6qmoRpP0MIza24PdoKZYxOdM9l6ABoOMEsDT4hWfgRa2aml&X-Amz-Signature=48e7e898d981643d8d9f850800af26b87d992b09e171122c2cd053386c9a2027&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R7JS7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx%2BCaASH7eo%2BpKJQ%2Fq70YqCJKiIEytg5ADL25TpyEFdAiEAyCPN0RXKHz%2B1s8l4%2F6sFYquugPimY7Kq7e%2F9kabYIAgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMsf%2FaKwesuOIpbwircA4C0f4PiPwzanPV8WaTz5L%2FOIXYUwG%2Fn8Anta5UAbqXvNEFwVQGG30WfFk3BiLA0os2DFAABI6s8qieAk2gkjMlVq4KBGNEk1rcKBGPPbwwi24%2BjKRGMsbueNGAreu6reF1kXNmzXZTz9%2FtX5ZMnS%2FEodnBTiCgp8N%2B7xQbcfdTPLu4bMSGJlJic3ewbg%2BhgOY%2FIovKaHwVEN7u%2FI4rjH5o5GX7tGMeUzNL%2F5PkXGrNJcRNRwqxRbj6jf9NLrIZhcwggNlRokix1ejm8fz888PwVYOSgOtJb86TIeuDVnVnxkfowzRAUZD3AWKQOUeZZedYMcPS%2FNwnwtD%2F9ljPA5bX%2FpWfHp%2FNaUQst7ZXWGTWZF6%2BIWOktSwb%2F%2BpR5LpkCbmTpKM9O7xoWU9AcUhCZvVAZQzqTlzI4viNJUIc66tp4tGVOy%2FGyaMxZBFC%2F7TOJ3XPh2Y2b8jsSqAJRkf%2Fyz1CbhYswv3taBdW%2FIvUR8hKXtIlQxe8FbJK51nH8wZNRd%2BxGshDSlq9NGYKNoznwSbkjzQLh2W5N8DlHl7OpAA335u3wW%2BODZgv3ulVPBHq8fPyvbYmK66GCn5LNMYha16QImtmpljc3yvk95U4rg2dhOZmH7dD5xOagYclLMM6sgb8GOqUBQ0tg2f6fyxGg79%2F9TLAb730UedyrlZ8x%2FomNHsMlOOtb%2BhhZpZDWjvsi7FyYRm0da7bo%2FvYSRMShvT6I2xrERtlQclSjVCtKolvADy2Inro1yns4ljgOGT0f7zAIx2VsQpEm6rbVSeqJS2yjpp0Hxie7zLbv659xzyciMYvgY5QWB6qmoRpP0MIza24PdoKZYxOdM9l6ABoOMEsDT4hWfgRa2aml&X-Amz-Signature=bbdcb3f789686aa03baef27c48d07932632e2ec8692cb9dada5caf397d887a31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R7JS7C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGx%2BCaASH7eo%2BpKJQ%2Fq70YqCJKiIEytg5ADL25TpyEFdAiEAyCPN0RXKHz%2B1s8l4%2F6sFYquugPimY7Kq7e%2F9kabYIAgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMsf%2FaKwesuOIpbwircA4C0f4PiPwzanPV8WaTz5L%2FOIXYUwG%2Fn8Anta5UAbqXvNEFwVQGG30WfFk3BiLA0os2DFAABI6s8qieAk2gkjMlVq4KBGNEk1rcKBGPPbwwi24%2BjKRGMsbueNGAreu6reF1kXNmzXZTz9%2FtX5ZMnS%2FEodnBTiCgp8N%2B7xQbcfdTPLu4bMSGJlJic3ewbg%2BhgOY%2FIovKaHwVEN7u%2FI4rjH5o5GX7tGMeUzNL%2F5PkXGrNJcRNRwqxRbj6jf9NLrIZhcwggNlRokix1ejm8fz888PwVYOSgOtJb86TIeuDVnVnxkfowzRAUZD3AWKQOUeZZedYMcPS%2FNwnwtD%2F9ljPA5bX%2FpWfHp%2FNaUQst7ZXWGTWZF6%2BIWOktSwb%2F%2BpR5LpkCbmTpKM9O7xoWU9AcUhCZvVAZQzqTlzI4viNJUIc66tp4tGVOy%2FGyaMxZBFC%2F7TOJ3XPh2Y2b8jsSqAJRkf%2Fyz1CbhYswv3taBdW%2FIvUR8hKXtIlQxe8FbJK51nH8wZNRd%2BxGshDSlq9NGYKNoznwSbkjzQLh2W5N8DlHl7OpAA335u3wW%2BODZgv3ulVPBHq8fPyvbYmK66GCn5LNMYha16QImtmpljc3yvk95U4rg2dhOZmH7dD5xOagYclLMM6sgb8GOqUBQ0tg2f6fyxGg79%2F9TLAb730UedyrlZ8x%2FomNHsMlOOtb%2BhhZpZDWjvsi7FyYRm0da7bo%2FvYSRMShvT6I2xrERtlQclSjVCtKolvADy2Inro1yns4ljgOGT0f7zAIx2VsQpEm6rbVSeqJS2yjpp0Hxie7zLbv659xzyciMYvgY5QWB6qmoRpP0MIza24PdoKZYxOdM9l6ABoOMEsDT4hWfgRa2aml&X-Amz-Signature=9661b50e524e2f795c07cdc8b2cf1488512678fa1ab0694ce5693f0428fc315e&X-Amz-SignedHeaders=host&x-id=GetObject)
