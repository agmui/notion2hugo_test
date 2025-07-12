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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDVAKDU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER5aHYNUOVDi%2BR3%2B3v41PIRn3YNC%2FJAOV1klBhDovEYAiEAw2gSATglRNZCnp866ADbDex2RHqKDoYmh9J%2BR3UWki0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtm9xdFUNKTFeyMASrcA4NoEzFcMmY4YzEfRyi8%2BOt%2FSvPhR2CEnKGPs9GPBYnMDm237KU7Jnmmi7xnSgWhFXrYoP4sNpiXBpdSyp0dF4qJxTBKGPE52nJtXiwMJ80dbTLDuWB5%2BlWU4U6TpzstE3Q%2BFbUMWaySbw4WLnaGY0zCn5lUM8a%2B20fRlmSPIAbHITU%2BSZn%2B45gZtz%2Fa6t%2BJ1MN96zCnhgizc4cyrd4s5wr9PcJy5ahcvLeJvkgohkImY9njK%2FVN1cw%2BrxuzZrVnQ2WpMjhkE5CNvnbAa0SKtgRGxpWsZl%2BVXHPxCFKv%2FrW5CtWPz3QQMQRe7nimEZPjhKAmiDR7%2FDd9ed7qlVojRgACBKQ6UQM40HwXLPsWc9GJY2I3IVTl75EHsl17Nbg0QnrM4BjGheWWvZXueqI0nEnEFlEWUGWZQZxF5OzGeAjMFlablEne1tK5lQyagFuHS5qahdriaih6zklUWFGzwcwv9%2BIAaK3lL%2FC%2FGetcHTJx%2BIPnwLv8Tg%2F%2F0pjXzHRS5DGNMBiEDiiI0x8mwdBzBYmzbmszOK1nVRvrmIm8j1IhRuNbUCJq8WWI4iaisDEYRHHtOQOGYTGJ3UG39eC0zLlEkNK58mBxKQuoTU1p00cgSQxu%2BqUf0gwDev%2B4MMa1xsMGOqUBui6f9tNTJPcHjgftYH%2BEq1fqlTNYloi7EHry%2Fbvo3tU6r7Q4NWaC3R0RR0WPcgJNPRiyoaSRiLUwMZed3RAuI9hUDg4yUY71Pvuck0ZD6vQ40l9iH0BSg8k0DmcBpFi2SO5UziVj%2F5LAX9AGQBk2A%2BPQP%2FKJoz2u7PKfleughZ2mIvXdtpB68Hc2M8TPTG1DZz0aLWHwmgXlsJWA2Prjshy1i8MK&X-Amz-Signature=146cf6bbd65cc3b6cc067586cc1341efcaf2b729af4f8c5ce05a592465af8fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDVAKDU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER5aHYNUOVDi%2BR3%2B3v41PIRn3YNC%2FJAOV1klBhDovEYAiEAw2gSATglRNZCnp866ADbDex2RHqKDoYmh9J%2BR3UWki0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtm9xdFUNKTFeyMASrcA4NoEzFcMmY4YzEfRyi8%2BOt%2FSvPhR2CEnKGPs9GPBYnMDm237KU7Jnmmi7xnSgWhFXrYoP4sNpiXBpdSyp0dF4qJxTBKGPE52nJtXiwMJ80dbTLDuWB5%2BlWU4U6TpzstE3Q%2BFbUMWaySbw4WLnaGY0zCn5lUM8a%2B20fRlmSPIAbHITU%2BSZn%2B45gZtz%2Fa6t%2BJ1MN96zCnhgizc4cyrd4s5wr9PcJy5ahcvLeJvkgohkImY9njK%2FVN1cw%2BrxuzZrVnQ2WpMjhkE5CNvnbAa0SKtgRGxpWsZl%2BVXHPxCFKv%2FrW5CtWPz3QQMQRe7nimEZPjhKAmiDR7%2FDd9ed7qlVojRgACBKQ6UQM40HwXLPsWc9GJY2I3IVTl75EHsl17Nbg0QnrM4BjGheWWvZXueqI0nEnEFlEWUGWZQZxF5OzGeAjMFlablEne1tK5lQyagFuHS5qahdriaih6zklUWFGzwcwv9%2BIAaK3lL%2FC%2FGetcHTJx%2BIPnwLv8Tg%2F%2F0pjXzHRS5DGNMBiEDiiI0x8mwdBzBYmzbmszOK1nVRvrmIm8j1IhRuNbUCJq8WWI4iaisDEYRHHtOQOGYTGJ3UG39eC0zLlEkNK58mBxKQuoTU1p00cgSQxu%2BqUf0gwDev%2B4MMa1xsMGOqUBui6f9tNTJPcHjgftYH%2BEq1fqlTNYloi7EHry%2Fbvo3tU6r7Q4NWaC3R0RR0WPcgJNPRiyoaSRiLUwMZed3RAuI9hUDg4yUY71Pvuck0ZD6vQ40l9iH0BSg8k0DmcBpFi2SO5UziVj%2F5LAX9AGQBk2A%2BPQP%2FKJoz2u7PKfleughZ2mIvXdtpB68Hc2M8TPTG1DZz0aLWHwmgXlsJWA2Prjshy1i8MK&X-Amz-Signature=10d71b61452120272abcf9ad55a87fccb1c602c421a0b3a80b685ec30c4c4d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDVAKDU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER5aHYNUOVDi%2BR3%2B3v41PIRn3YNC%2FJAOV1klBhDovEYAiEAw2gSATglRNZCnp866ADbDex2RHqKDoYmh9J%2BR3UWki0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtm9xdFUNKTFeyMASrcA4NoEzFcMmY4YzEfRyi8%2BOt%2FSvPhR2CEnKGPs9GPBYnMDm237KU7Jnmmi7xnSgWhFXrYoP4sNpiXBpdSyp0dF4qJxTBKGPE52nJtXiwMJ80dbTLDuWB5%2BlWU4U6TpzstE3Q%2BFbUMWaySbw4WLnaGY0zCn5lUM8a%2B20fRlmSPIAbHITU%2BSZn%2B45gZtz%2Fa6t%2BJ1MN96zCnhgizc4cyrd4s5wr9PcJy5ahcvLeJvkgohkImY9njK%2FVN1cw%2BrxuzZrVnQ2WpMjhkE5CNvnbAa0SKtgRGxpWsZl%2BVXHPxCFKv%2FrW5CtWPz3QQMQRe7nimEZPjhKAmiDR7%2FDd9ed7qlVojRgACBKQ6UQM40HwXLPsWc9GJY2I3IVTl75EHsl17Nbg0QnrM4BjGheWWvZXueqI0nEnEFlEWUGWZQZxF5OzGeAjMFlablEne1tK5lQyagFuHS5qahdriaih6zklUWFGzwcwv9%2BIAaK3lL%2FC%2FGetcHTJx%2BIPnwLv8Tg%2F%2F0pjXzHRS5DGNMBiEDiiI0x8mwdBzBYmzbmszOK1nVRvrmIm8j1IhRuNbUCJq8WWI4iaisDEYRHHtOQOGYTGJ3UG39eC0zLlEkNK58mBxKQuoTU1p00cgSQxu%2BqUf0gwDev%2B4MMa1xsMGOqUBui6f9tNTJPcHjgftYH%2BEq1fqlTNYloi7EHry%2Fbvo3tU6r7Q4NWaC3R0RR0WPcgJNPRiyoaSRiLUwMZed3RAuI9hUDg4yUY71Pvuck0ZD6vQ40l9iH0BSg8k0DmcBpFi2SO5UziVj%2F5LAX9AGQBk2A%2BPQP%2FKJoz2u7PKfleughZ2mIvXdtpB68Hc2M8TPTG1DZz0aLWHwmgXlsJWA2Prjshy1i8MK&X-Amz-Signature=30baafba691d8f8fd50a127a48d45b3d76b3388b79b89f20e32c851640218aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDVAKDU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER5aHYNUOVDi%2BR3%2B3v41PIRn3YNC%2FJAOV1klBhDovEYAiEAw2gSATglRNZCnp866ADbDex2RHqKDoYmh9J%2BR3UWki0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtm9xdFUNKTFeyMASrcA4NoEzFcMmY4YzEfRyi8%2BOt%2FSvPhR2CEnKGPs9GPBYnMDm237KU7Jnmmi7xnSgWhFXrYoP4sNpiXBpdSyp0dF4qJxTBKGPE52nJtXiwMJ80dbTLDuWB5%2BlWU4U6TpzstE3Q%2BFbUMWaySbw4WLnaGY0zCn5lUM8a%2B20fRlmSPIAbHITU%2BSZn%2B45gZtz%2Fa6t%2BJ1MN96zCnhgizc4cyrd4s5wr9PcJy5ahcvLeJvkgohkImY9njK%2FVN1cw%2BrxuzZrVnQ2WpMjhkE5CNvnbAa0SKtgRGxpWsZl%2BVXHPxCFKv%2FrW5CtWPz3QQMQRe7nimEZPjhKAmiDR7%2FDd9ed7qlVojRgACBKQ6UQM40HwXLPsWc9GJY2I3IVTl75EHsl17Nbg0QnrM4BjGheWWvZXueqI0nEnEFlEWUGWZQZxF5OzGeAjMFlablEne1tK5lQyagFuHS5qahdriaih6zklUWFGzwcwv9%2BIAaK3lL%2FC%2FGetcHTJx%2BIPnwLv8Tg%2F%2F0pjXzHRS5DGNMBiEDiiI0x8mwdBzBYmzbmszOK1nVRvrmIm8j1IhRuNbUCJq8WWI4iaisDEYRHHtOQOGYTGJ3UG39eC0zLlEkNK58mBxKQuoTU1p00cgSQxu%2BqUf0gwDev%2B4MMa1xsMGOqUBui6f9tNTJPcHjgftYH%2BEq1fqlTNYloi7EHry%2Fbvo3tU6r7Q4NWaC3R0RR0WPcgJNPRiyoaSRiLUwMZed3RAuI9hUDg4yUY71Pvuck0ZD6vQ40l9iH0BSg8k0DmcBpFi2SO5UziVj%2F5LAX9AGQBk2A%2BPQP%2FKJoz2u7PKfleughZ2mIvXdtpB68Hc2M8TPTG1DZz0aLWHwmgXlsJWA2Prjshy1i8MK&X-Amz-Signature=4358331e817b47b1d35f8a29d05f22169927e4a146b6a68cd31f481e78a51b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDVAKDU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER5aHYNUOVDi%2BR3%2B3v41PIRn3YNC%2FJAOV1klBhDovEYAiEAw2gSATglRNZCnp866ADbDex2RHqKDoYmh9J%2BR3UWki0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtm9xdFUNKTFeyMASrcA4NoEzFcMmY4YzEfRyi8%2BOt%2FSvPhR2CEnKGPs9GPBYnMDm237KU7Jnmmi7xnSgWhFXrYoP4sNpiXBpdSyp0dF4qJxTBKGPE52nJtXiwMJ80dbTLDuWB5%2BlWU4U6TpzstE3Q%2BFbUMWaySbw4WLnaGY0zCn5lUM8a%2B20fRlmSPIAbHITU%2BSZn%2B45gZtz%2Fa6t%2BJ1MN96zCnhgizc4cyrd4s5wr9PcJy5ahcvLeJvkgohkImY9njK%2FVN1cw%2BrxuzZrVnQ2WpMjhkE5CNvnbAa0SKtgRGxpWsZl%2BVXHPxCFKv%2FrW5CtWPz3QQMQRe7nimEZPjhKAmiDR7%2FDd9ed7qlVojRgACBKQ6UQM40HwXLPsWc9GJY2I3IVTl75EHsl17Nbg0QnrM4BjGheWWvZXueqI0nEnEFlEWUGWZQZxF5OzGeAjMFlablEne1tK5lQyagFuHS5qahdriaih6zklUWFGzwcwv9%2BIAaK3lL%2FC%2FGetcHTJx%2BIPnwLv8Tg%2F%2F0pjXzHRS5DGNMBiEDiiI0x8mwdBzBYmzbmszOK1nVRvrmIm8j1IhRuNbUCJq8WWI4iaisDEYRHHtOQOGYTGJ3UG39eC0zLlEkNK58mBxKQuoTU1p00cgSQxu%2BqUf0gwDev%2B4MMa1xsMGOqUBui6f9tNTJPcHjgftYH%2BEq1fqlTNYloi7EHry%2Fbvo3tU6r7Q4NWaC3R0RR0WPcgJNPRiyoaSRiLUwMZed3RAuI9hUDg4yUY71Pvuck0ZD6vQ40l9iH0BSg8k0DmcBpFi2SO5UziVj%2F5LAX9AGQBk2A%2BPQP%2FKJoz2u7PKfleughZ2mIvXdtpB68Hc2M8TPTG1DZz0aLWHwmgXlsJWA2Prjshy1i8MK&X-Amz-Signature=b136e439654a4dcde711b37d5b60a4b4bc0d59b26a8a456a4a15f39f010c742b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDVAKDU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER5aHYNUOVDi%2BR3%2B3v41PIRn3YNC%2FJAOV1klBhDovEYAiEAw2gSATglRNZCnp866ADbDex2RHqKDoYmh9J%2BR3UWki0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtm9xdFUNKTFeyMASrcA4NoEzFcMmY4YzEfRyi8%2BOt%2FSvPhR2CEnKGPs9GPBYnMDm237KU7Jnmmi7xnSgWhFXrYoP4sNpiXBpdSyp0dF4qJxTBKGPE52nJtXiwMJ80dbTLDuWB5%2BlWU4U6TpzstE3Q%2BFbUMWaySbw4WLnaGY0zCn5lUM8a%2B20fRlmSPIAbHITU%2BSZn%2B45gZtz%2Fa6t%2BJ1MN96zCnhgizc4cyrd4s5wr9PcJy5ahcvLeJvkgohkImY9njK%2FVN1cw%2BrxuzZrVnQ2WpMjhkE5CNvnbAa0SKtgRGxpWsZl%2BVXHPxCFKv%2FrW5CtWPz3QQMQRe7nimEZPjhKAmiDR7%2FDd9ed7qlVojRgACBKQ6UQM40HwXLPsWc9GJY2I3IVTl75EHsl17Nbg0QnrM4BjGheWWvZXueqI0nEnEFlEWUGWZQZxF5OzGeAjMFlablEne1tK5lQyagFuHS5qahdriaih6zklUWFGzwcwv9%2BIAaK3lL%2FC%2FGetcHTJx%2BIPnwLv8Tg%2F%2F0pjXzHRS5DGNMBiEDiiI0x8mwdBzBYmzbmszOK1nVRvrmIm8j1IhRuNbUCJq8WWI4iaisDEYRHHtOQOGYTGJ3UG39eC0zLlEkNK58mBxKQuoTU1p00cgSQxu%2BqUf0gwDev%2B4MMa1xsMGOqUBui6f9tNTJPcHjgftYH%2BEq1fqlTNYloi7EHry%2Fbvo3tU6r7Q4NWaC3R0RR0WPcgJNPRiyoaSRiLUwMZed3RAuI9hUDg4yUY71Pvuck0ZD6vQ40l9iH0BSg8k0DmcBpFi2SO5UziVj%2F5LAX9AGQBk2A%2BPQP%2FKJoz2u7PKfleughZ2mIvXdtpB68Hc2M8TPTG1DZz0aLWHwmgXlsJWA2Prjshy1i8MK&X-Amz-Signature=d6b1c5f2182fa0d46e885e41dc83a7b4a606fcf023ff0edacabed6e4ad376c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
