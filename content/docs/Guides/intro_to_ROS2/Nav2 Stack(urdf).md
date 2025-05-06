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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKNWZUU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ1xx5rCqTllwmrOFzokk1E%2B5FxsBVkwoG6ML%2BYs4qEAiEAhjwjtke8Pl%2BPHmsn210l6xxeF6C2AlRp704YTN2IHHYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1P5DzXj4hZpVpGOCrcA8IUVXW7p4f%2BB6ciLRewyhiqS9uxafxSO9hbyk3bvsRCWXgC%2BdCSdJhM8pUAFKXJHBYFy6TaS5o5slVz5vAJGX8YttEo6A9i4GpStTuHhS8AkTMUyb0GuzzRHIMzFSptA1RrW0nI6j0iW5mem1G7HQAHVdlxPOPhA96YSkwZQ15QzhVQVtdfapY8TilsuWILW5KqXEw69RwPYbaFmsQz4B6Q5M%2FcC9Fl04OckjNaFmRxSHoVohPknF1nZUNUJAmSdIyMqlMune42x24dE0VEsEw5ImEFi71%2FXFNSocZZNj32q7jN%2FEE%2F54kIUL7wxXP10qblcLVSbCrfLC0Rr5x4TI10uPUkYsFQChuwoxPTqPiSPVTIuJJbDmt12gihg%2F0Gn%2FG9S2GVEbqezCMJaBJJGLyce8SkjSjKUgi33ANx0NR%2BpWbSFKdb1vKEpGPDd%2FnoUdzghVjXvdk3eKYcPQU0DrBmDQO%2FzDq1St0NC1pcMXja9qwWbuvFltOyeaeUhnRjKU3C9PnVfdKWKj%2F1e1g3Ka5AXwWE4a1Izm8%2BswOpkU5%2BE7F9Dng%2BWUxG3gO3h2kCaAnfQPbOFpXQjltFL9fJ52%2Bh0XwkwNjXuV0%2F6Y3n%2FDCpOGByr7QVyZJ04PJxMKj%2B5cAGOqUB%2F0dEqQEpPwSsCOqrKOfy0l%2BEtDJsY3M%2BX7RrJvFMo%2F64ykjf69qVVMWd4hnLNg0qjVJNIpnQPiXxFMmrxTv91DFcsvU1KGz2Yif7M9dJVM7MSOWXZEizkscEwzpfV3IterP%2FV4MkvyBB2uE%2FNZGDoOOjH7MWOW1r%2Fh3aNBK0gP1%2FEGW56htFQVfXe9rPXECfWf0sikRKQW%2FIbXI0Mizu4g2ZZinf&X-Amz-Signature=6f70db2efeda90ad4a864a2f0e2fe4ddd2b30206e92f7db1c7d4c99228b65757&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKNWZUU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ1xx5rCqTllwmrOFzokk1E%2B5FxsBVkwoG6ML%2BYs4qEAiEAhjwjtke8Pl%2BPHmsn210l6xxeF6C2AlRp704YTN2IHHYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1P5DzXj4hZpVpGOCrcA8IUVXW7p4f%2BB6ciLRewyhiqS9uxafxSO9hbyk3bvsRCWXgC%2BdCSdJhM8pUAFKXJHBYFy6TaS5o5slVz5vAJGX8YttEo6A9i4GpStTuHhS8AkTMUyb0GuzzRHIMzFSptA1RrW0nI6j0iW5mem1G7HQAHVdlxPOPhA96YSkwZQ15QzhVQVtdfapY8TilsuWILW5KqXEw69RwPYbaFmsQz4B6Q5M%2FcC9Fl04OckjNaFmRxSHoVohPknF1nZUNUJAmSdIyMqlMune42x24dE0VEsEw5ImEFi71%2FXFNSocZZNj32q7jN%2FEE%2F54kIUL7wxXP10qblcLVSbCrfLC0Rr5x4TI10uPUkYsFQChuwoxPTqPiSPVTIuJJbDmt12gihg%2F0Gn%2FG9S2GVEbqezCMJaBJJGLyce8SkjSjKUgi33ANx0NR%2BpWbSFKdb1vKEpGPDd%2FnoUdzghVjXvdk3eKYcPQU0DrBmDQO%2FzDq1St0NC1pcMXja9qwWbuvFltOyeaeUhnRjKU3C9PnVfdKWKj%2F1e1g3Ka5AXwWE4a1Izm8%2BswOpkU5%2BE7F9Dng%2BWUxG3gO3h2kCaAnfQPbOFpXQjltFL9fJ52%2Bh0XwkwNjXuV0%2F6Y3n%2FDCpOGByr7QVyZJ04PJxMKj%2B5cAGOqUB%2F0dEqQEpPwSsCOqrKOfy0l%2BEtDJsY3M%2BX7RrJvFMo%2F64ykjf69qVVMWd4hnLNg0qjVJNIpnQPiXxFMmrxTv91DFcsvU1KGz2Yif7M9dJVM7MSOWXZEizkscEwzpfV3IterP%2FV4MkvyBB2uE%2FNZGDoOOjH7MWOW1r%2Fh3aNBK0gP1%2FEGW56htFQVfXe9rPXECfWf0sikRKQW%2FIbXI0Mizu4g2ZZinf&X-Amz-Signature=0ed4d082655f99ad4281d0999a508a1543e4770089c3d2dab8384ec07166d7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKNWZUU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ1xx5rCqTllwmrOFzokk1E%2B5FxsBVkwoG6ML%2BYs4qEAiEAhjwjtke8Pl%2BPHmsn210l6xxeF6C2AlRp704YTN2IHHYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1P5DzXj4hZpVpGOCrcA8IUVXW7p4f%2BB6ciLRewyhiqS9uxafxSO9hbyk3bvsRCWXgC%2BdCSdJhM8pUAFKXJHBYFy6TaS5o5slVz5vAJGX8YttEo6A9i4GpStTuHhS8AkTMUyb0GuzzRHIMzFSptA1RrW0nI6j0iW5mem1G7HQAHVdlxPOPhA96YSkwZQ15QzhVQVtdfapY8TilsuWILW5KqXEw69RwPYbaFmsQz4B6Q5M%2FcC9Fl04OckjNaFmRxSHoVohPknF1nZUNUJAmSdIyMqlMune42x24dE0VEsEw5ImEFi71%2FXFNSocZZNj32q7jN%2FEE%2F54kIUL7wxXP10qblcLVSbCrfLC0Rr5x4TI10uPUkYsFQChuwoxPTqPiSPVTIuJJbDmt12gihg%2F0Gn%2FG9S2GVEbqezCMJaBJJGLyce8SkjSjKUgi33ANx0NR%2BpWbSFKdb1vKEpGPDd%2FnoUdzghVjXvdk3eKYcPQU0DrBmDQO%2FzDq1St0NC1pcMXja9qwWbuvFltOyeaeUhnRjKU3C9PnVfdKWKj%2F1e1g3Ka5AXwWE4a1Izm8%2BswOpkU5%2BE7F9Dng%2BWUxG3gO3h2kCaAnfQPbOFpXQjltFL9fJ52%2Bh0XwkwNjXuV0%2F6Y3n%2FDCpOGByr7QVyZJ04PJxMKj%2B5cAGOqUB%2F0dEqQEpPwSsCOqrKOfy0l%2BEtDJsY3M%2BX7RrJvFMo%2F64ykjf69qVVMWd4hnLNg0qjVJNIpnQPiXxFMmrxTv91DFcsvU1KGz2Yif7M9dJVM7MSOWXZEizkscEwzpfV3IterP%2FV4MkvyBB2uE%2FNZGDoOOjH7MWOW1r%2Fh3aNBK0gP1%2FEGW56htFQVfXe9rPXECfWf0sikRKQW%2FIbXI0Mizu4g2ZZinf&X-Amz-Signature=a8469d76f2b178c38deeb2f0635edaffd89f28b2cdb3d70612b50a867af4cab8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKNWZUU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ1xx5rCqTllwmrOFzokk1E%2B5FxsBVkwoG6ML%2BYs4qEAiEAhjwjtke8Pl%2BPHmsn210l6xxeF6C2AlRp704YTN2IHHYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1P5DzXj4hZpVpGOCrcA8IUVXW7p4f%2BB6ciLRewyhiqS9uxafxSO9hbyk3bvsRCWXgC%2BdCSdJhM8pUAFKXJHBYFy6TaS5o5slVz5vAJGX8YttEo6A9i4GpStTuHhS8AkTMUyb0GuzzRHIMzFSptA1RrW0nI6j0iW5mem1G7HQAHVdlxPOPhA96YSkwZQ15QzhVQVtdfapY8TilsuWILW5KqXEw69RwPYbaFmsQz4B6Q5M%2FcC9Fl04OckjNaFmRxSHoVohPknF1nZUNUJAmSdIyMqlMune42x24dE0VEsEw5ImEFi71%2FXFNSocZZNj32q7jN%2FEE%2F54kIUL7wxXP10qblcLVSbCrfLC0Rr5x4TI10uPUkYsFQChuwoxPTqPiSPVTIuJJbDmt12gihg%2F0Gn%2FG9S2GVEbqezCMJaBJJGLyce8SkjSjKUgi33ANx0NR%2BpWbSFKdb1vKEpGPDd%2FnoUdzghVjXvdk3eKYcPQU0DrBmDQO%2FzDq1St0NC1pcMXja9qwWbuvFltOyeaeUhnRjKU3C9PnVfdKWKj%2F1e1g3Ka5AXwWE4a1Izm8%2BswOpkU5%2BE7F9Dng%2BWUxG3gO3h2kCaAnfQPbOFpXQjltFL9fJ52%2Bh0XwkwNjXuV0%2F6Y3n%2FDCpOGByr7QVyZJ04PJxMKj%2B5cAGOqUB%2F0dEqQEpPwSsCOqrKOfy0l%2BEtDJsY3M%2BX7RrJvFMo%2F64ykjf69qVVMWd4hnLNg0qjVJNIpnQPiXxFMmrxTv91DFcsvU1KGz2Yif7M9dJVM7MSOWXZEizkscEwzpfV3IterP%2FV4MkvyBB2uE%2FNZGDoOOjH7MWOW1r%2Fh3aNBK0gP1%2FEGW56htFQVfXe9rPXECfWf0sikRKQW%2FIbXI0Mizu4g2ZZinf&X-Amz-Signature=833b6d9a55e4eefe22ac3746b8803d51441a86ed0f37b63418405c9e1548211a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKNWZUU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ1xx5rCqTllwmrOFzokk1E%2B5FxsBVkwoG6ML%2BYs4qEAiEAhjwjtke8Pl%2BPHmsn210l6xxeF6C2AlRp704YTN2IHHYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1P5DzXj4hZpVpGOCrcA8IUVXW7p4f%2BB6ciLRewyhiqS9uxafxSO9hbyk3bvsRCWXgC%2BdCSdJhM8pUAFKXJHBYFy6TaS5o5slVz5vAJGX8YttEo6A9i4GpStTuHhS8AkTMUyb0GuzzRHIMzFSptA1RrW0nI6j0iW5mem1G7HQAHVdlxPOPhA96YSkwZQ15QzhVQVtdfapY8TilsuWILW5KqXEw69RwPYbaFmsQz4B6Q5M%2FcC9Fl04OckjNaFmRxSHoVohPknF1nZUNUJAmSdIyMqlMune42x24dE0VEsEw5ImEFi71%2FXFNSocZZNj32q7jN%2FEE%2F54kIUL7wxXP10qblcLVSbCrfLC0Rr5x4TI10uPUkYsFQChuwoxPTqPiSPVTIuJJbDmt12gihg%2F0Gn%2FG9S2GVEbqezCMJaBJJGLyce8SkjSjKUgi33ANx0NR%2BpWbSFKdb1vKEpGPDd%2FnoUdzghVjXvdk3eKYcPQU0DrBmDQO%2FzDq1St0NC1pcMXja9qwWbuvFltOyeaeUhnRjKU3C9PnVfdKWKj%2F1e1g3Ka5AXwWE4a1Izm8%2BswOpkU5%2BE7F9Dng%2BWUxG3gO3h2kCaAnfQPbOFpXQjltFL9fJ52%2Bh0XwkwNjXuV0%2F6Y3n%2FDCpOGByr7QVyZJ04PJxMKj%2B5cAGOqUB%2F0dEqQEpPwSsCOqrKOfy0l%2BEtDJsY3M%2BX7RrJvFMo%2F64ykjf69qVVMWd4hnLNg0qjVJNIpnQPiXxFMmrxTv91DFcsvU1KGz2Yif7M9dJVM7MSOWXZEizkscEwzpfV3IterP%2FV4MkvyBB2uE%2FNZGDoOOjH7MWOW1r%2Fh3aNBK0gP1%2FEGW56htFQVfXe9rPXECfWf0sikRKQW%2FIbXI0Mizu4g2ZZinf&X-Amz-Signature=0a0d55793819fa3c1771bfd686e501b50aff0807d21b7047c6558bc68d5639e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKNWZUU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQ1xx5rCqTllwmrOFzokk1E%2B5FxsBVkwoG6ML%2BYs4qEAiEAhjwjtke8Pl%2BPHmsn210l6xxeF6C2AlRp704YTN2IHHYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDC1P5DzXj4hZpVpGOCrcA8IUVXW7p4f%2BB6ciLRewyhiqS9uxafxSO9hbyk3bvsRCWXgC%2BdCSdJhM8pUAFKXJHBYFy6TaS5o5slVz5vAJGX8YttEo6A9i4GpStTuHhS8AkTMUyb0GuzzRHIMzFSptA1RrW0nI6j0iW5mem1G7HQAHVdlxPOPhA96YSkwZQ15QzhVQVtdfapY8TilsuWILW5KqXEw69RwPYbaFmsQz4B6Q5M%2FcC9Fl04OckjNaFmRxSHoVohPknF1nZUNUJAmSdIyMqlMune42x24dE0VEsEw5ImEFi71%2FXFNSocZZNj32q7jN%2FEE%2F54kIUL7wxXP10qblcLVSbCrfLC0Rr5x4TI10uPUkYsFQChuwoxPTqPiSPVTIuJJbDmt12gihg%2F0Gn%2FG9S2GVEbqezCMJaBJJGLyce8SkjSjKUgi33ANx0NR%2BpWbSFKdb1vKEpGPDd%2FnoUdzghVjXvdk3eKYcPQU0DrBmDQO%2FzDq1St0NC1pcMXja9qwWbuvFltOyeaeUhnRjKU3C9PnVfdKWKj%2F1e1g3Ka5AXwWE4a1Izm8%2BswOpkU5%2BE7F9Dng%2BWUxG3gO3h2kCaAnfQPbOFpXQjltFL9fJ52%2Bh0XwkwNjXuV0%2F6Y3n%2FDCpOGByr7QVyZJ04PJxMKj%2B5cAGOqUB%2F0dEqQEpPwSsCOqrKOfy0l%2BEtDJsY3M%2BX7RrJvFMo%2F64ykjf69qVVMWd4hnLNg0qjVJNIpnQPiXxFMmrxTv91DFcsvU1KGz2Yif7M9dJVM7MSOWXZEizkscEwzpfV3IterP%2FV4MkvyBB2uE%2FNZGDoOOjH7MWOW1r%2Fh3aNBK0gP1%2FEGW56htFQVfXe9rPXECfWf0sikRKQW%2FIbXI0Mizu4g2ZZinf&X-Amz-Signature=59240fa80e5d3b476d8387ac0434e742a16e9ce767b2f6c0fdcd66b2b88dff75&X-Amz-SignedHeaders=host&x-id=GetObject)
