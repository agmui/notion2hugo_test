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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMKWB2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR13a0VT%2FndlXVyO1AuuGAl%2FWXDBX92j4f6GDxmXSjuAiEA5REc7zaUpwM5CMIT%2BSpJvnkhkj02HVVpa1fdxiEqHOMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJLRinPBE%2FHPGWMagSrcA0cZb1k%2BFGlgjj%2FumsAPrtoooPLN08Uok467saxReuaQUfR1NTCh%2FGZNJ5TcxIhoZ%2Fdxubh5OAsPh95n5bnu7BMykf2TL0vO9zjxo0zo63W5ALNorkUDtJJLDpxZWodEbpF5R8n73gNIZF%2Bx6QFsspGIscpyBR4WFk7vImFhN%2FaEyNrvM9XLlh%2BfbwuerlArFGciuru0WqBKL%2BjpDUpp5L%2F87t35hXT%2Bjer%2F97Q7chB7Sm2TpG2BbbxzVChmR3%2F222yTsdLW%2FsWfjX5eT6uYoClUbj8SodrHX%2FNFaWZhb3J%2BOY3co%2FBxYRwBiVqhLl9qO4Oz5EOLB017pnjP6JEnyQo7%2FHhNWot3dwhUm%2FR%2BHoMViXUYxdsuK8FmzuYmwSvHsWyAtTEAGW%2BqiJyrsiOGXxc%2B746mrz0ECg1%2BepvFHP1uT1c9p2JQY6iVLJtCtm5pu8E55Q98Ad38MDe03dhr468Go0teWw18lrVhVwDyoB7XXr6Mv5opZTU09COUmZClaGU96oro%2FQc9KAiSRN%2FeA7Q2NjcLYtbzegZ5S3AWtBzK3Wm%2FtgtGLU7a5UdIWlajTPxBJegnGLLYpl5wWb02BaLvHR9%2FuZlLqtso74cwpFweNQu%2BNvwUOUiTANt0MJr69L8GOqUBO6h6q6nRJsoD9d2NxstKcSss34zEMv4oF662AV%2F52W35kHMOB2iiA7tDtfV9%2FGlq4KKLrqvydmCNXXB%2FUXlHjqVmcTIzSr7MjFrskRJ%2F6rFRURw58ogQ0Oh%2BiwPAhfs6vW%2FSK6t0ZC%2BY%2B%2BdqpLvTth0kLgGtBziApuiF%2B4a0qFPxwy7cbiaCw9gvTQJoVOUzB0WVNGR%2BttV49cILe7Vg%2FfSvc0zj&X-Amz-Signature=578a66203f45b0bf0972c26c3d5148aefcce0922590d554c081aacdeee5ff733&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMKWB2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR13a0VT%2FndlXVyO1AuuGAl%2FWXDBX92j4f6GDxmXSjuAiEA5REc7zaUpwM5CMIT%2BSpJvnkhkj02HVVpa1fdxiEqHOMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJLRinPBE%2FHPGWMagSrcA0cZb1k%2BFGlgjj%2FumsAPrtoooPLN08Uok467saxReuaQUfR1NTCh%2FGZNJ5TcxIhoZ%2Fdxubh5OAsPh95n5bnu7BMykf2TL0vO9zjxo0zo63W5ALNorkUDtJJLDpxZWodEbpF5R8n73gNIZF%2Bx6QFsspGIscpyBR4WFk7vImFhN%2FaEyNrvM9XLlh%2BfbwuerlArFGciuru0WqBKL%2BjpDUpp5L%2F87t35hXT%2Bjer%2F97Q7chB7Sm2TpG2BbbxzVChmR3%2F222yTsdLW%2FsWfjX5eT6uYoClUbj8SodrHX%2FNFaWZhb3J%2BOY3co%2FBxYRwBiVqhLl9qO4Oz5EOLB017pnjP6JEnyQo7%2FHhNWot3dwhUm%2FR%2BHoMViXUYxdsuK8FmzuYmwSvHsWyAtTEAGW%2BqiJyrsiOGXxc%2B746mrz0ECg1%2BepvFHP1uT1c9p2JQY6iVLJtCtm5pu8E55Q98Ad38MDe03dhr468Go0teWw18lrVhVwDyoB7XXr6Mv5opZTU09COUmZClaGU96oro%2FQc9KAiSRN%2FeA7Q2NjcLYtbzegZ5S3AWtBzK3Wm%2FtgtGLU7a5UdIWlajTPxBJegnGLLYpl5wWb02BaLvHR9%2FuZlLqtso74cwpFweNQu%2BNvwUOUiTANt0MJr69L8GOqUBO6h6q6nRJsoD9d2NxstKcSss34zEMv4oF662AV%2F52W35kHMOB2iiA7tDtfV9%2FGlq4KKLrqvydmCNXXB%2FUXlHjqVmcTIzSr7MjFrskRJ%2F6rFRURw58ogQ0Oh%2BiwPAhfs6vW%2FSK6t0ZC%2BY%2B%2BdqpLvTth0kLgGtBziApuiF%2B4a0qFPxwy7cbiaCw9gvTQJoVOUzB0WVNGR%2BttV49cILe7Vg%2FfSvc0zj&X-Amz-Signature=5bf75f7a258269501981dd483485bd393ca3d5af447dfbb16d22c94f42a7e286&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMKWB2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR13a0VT%2FndlXVyO1AuuGAl%2FWXDBX92j4f6GDxmXSjuAiEA5REc7zaUpwM5CMIT%2BSpJvnkhkj02HVVpa1fdxiEqHOMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJLRinPBE%2FHPGWMagSrcA0cZb1k%2BFGlgjj%2FumsAPrtoooPLN08Uok467saxReuaQUfR1NTCh%2FGZNJ5TcxIhoZ%2Fdxubh5OAsPh95n5bnu7BMykf2TL0vO9zjxo0zo63W5ALNorkUDtJJLDpxZWodEbpF5R8n73gNIZF%2Bx6QFsspGIscpyBR4WFk7vImFhN%2FaEyNrvM9XLlh%2BfbwuerlArFGciuru0WqBKL%2BjpDUpp5L%2F87t35hXT%2Bjer%2F97Q7chB7Sm2TpG2BbbxzVChmR3%2F222yTsdLW%2FsWfjX5eT6uYoClUbj8SodrHX%2FNFaWZhb3J%2BOY3co%2FBxYRwBiVqhLl9qO4Oz5EOLB017pnjP6JEnyQo7%2FHhNWot3dwhUm%2FR%2BHoMViXUYxdsuK8FmzuYmwSvHsWyAtTEAGW%2BqiJyrsiOGXxc%2B746mrz0ECg1%2BepvFHP1uT1c9p2JQY6iVLJtCtm5pu8E55Q98Ad38MDe03dhr468Go0teWw18lrVhVwDyoB7XXr6Mv5opZTU09COUmZClaGU96oro%2FQc9KAiSRN%2FeA7Q2NjcLYtbzegZ5S3AWtBzK3Wm%2FtgtGLU7a5UdIWlajTPxBJegnGLLYpl5wWb02BaLvHR9%2FuZlLqtso74cwpFweNQu%2BNvwUOUiTANt0MJr69L8GOqUBO6h6q6nRJsoD9d2NxstKcSss34zEMv4oF662AV%2F52W35kHMOB2iiA7tDtfV9%2FGlq4KKLrqvydmCNXXB%2FUXlHjqVmcTIzSr7MjFrskRJ%2F6rFRURw58ogQ0Oh%2BiwPAhfs6vW%2FSK6t0ZC%2BY%2B%2BdqpLvTth0kLgGtBziApuiF%2B4a0qFPxwy7cbiaCw9gvTQJoVOUzB0WVNGR%2BttV49cILe7Vg%2FfSvc0zj&X-Amz-Signature=93aa8d26211061d16ecf0f0e633de76a6f7adf06353126ced0e2e47b009fddef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMKWB2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR13a0VT%2FndlXVyO1AuuGAl%2FWXDBX92j4f6GDxmXSjuAiEA5REc7zaUpwM5CMIT%2BSpJvnkhkj02HVVpa1fdxiEqHOMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJLRinPBE%2FHPGWMagSrcA0cZb1k%2BFGlgjj%2FumsAPrtoooPLN08Uok467saxReuaQUfR1NTCh%2FGZNJ5TcxIhoZ%2Fdxubh5OAsPh95n5bnu7BMykf2TL0vO9zjxo0zo63W5ALNorkUDtJJLDpxZWodEbpF5R8n73gNIZF%2Bx6QFsspGIscpyBR4WFk7vImFhN%2FaEyNrvM9XLlh%2BfbwuerlArFGciuru0WqBKL%2BjpDUpp5L%2F87t35hXT%2Bjer%2F97Q7chB7Sm2TpG2BbbxzVChmR3%2F222yTsdLW%2FsWfjX5eT6uYoClUbj8SodrHX%2FNFaWZhb3J%2BOY3co%2FBxYRwBiVqhLl9qO4Oz5EOLB017pnjP6JEnyQo7%2FHhNWot3dwhUm%2FR%2BHoMViXUYxdsuK8FmzuYmwSvHsWyAtTEAGW%2BqiJyrsiOGXxc%2B746mrz0ECg1%2BepvFHP1uT1c9p2JQY6iVLJtCtm5pu8E55Q98Ad38MDe03dhr468Go0teWw18lrVhVwDyoB7XXr6Mv5opZTU09COUmZClaGU96oro%2FQc9KAiSRN%2FeA7Q2NjcLYtbzegZ5S3AWtBzK3Wm%2FtgtGLU7a5UdIWlajTPxBJegnGLLYpl5wWb02BaLvHR9%2FuZlLqtso74cwpFweNQu%2BNvwUOUiTANt0MJr69L8GOqUBO6h6q6nRJsoD9d2NxstKcSss34zEMv4oF662AV%2F52W35kHMOB2iiA7tDtfV9%2FGlq4KKLrqvydmCNXXB%2FUXlHjqVmcTIzSr7MjFrskRJ%2F6rFRURw58ogQ0Oh%2BiwPAhfs6vW%2FSK6t0ZC%2BY%2B%2BdqpLvTth0kLgGtBziApuiF%2B4a0qFPxwy7cbiaCw9gvTQJoVOUzB0WVNGR%2BttV49cILe7Vg%2FfSvc0zj&X-Amz-Signature=20e6ea39faef89e03568cc40ec755e2008ffb20811482d853ef7099b21a5338d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMKWB2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR13a0VT%2FndlXVyO1AuuGAl%2FWXDBX92j4f6GDxmXSjuAiEA5REc7zaUpwM5CMIT%2BSpJvnkhkj02HVVpa1fdxiEqHOMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJLRinPBE%2FHPGWMagSrcA0cZb1k%2BFGlgjj%2FumsAPrtoooPLN08Uok467saxReuaQUfR1NTCh%2FGZNJ5TcxIhoZ%2Fdxubh5OAsPh95n5bnu7BMykf2TL0vO9zjxo0zo63W5ALNorkUDtJJLDpxZWodEbpF5R8n73gNIZF%2Bx6QFsspGIscpyBR4WFk7vImFhN%2FaEyNrvM9XLlh%2BfbwuerlArFGciuru0WqBKL%2BjpDUpp5L%2F87t35hXT%2Bjer%2F97Q7chB7Sm2TpG2BbbxzVChmR3%2F222yTsdLW%2FsWfjX5eT6uYoClUbj8SodrHX%2FNFaWZhb3J%2BOY3co%2FBxYRwBiVqhLl9qO4Oz5EOLB017pnjP6JEnyQo7%2FHhNWot3dwhUm%2FR%2BHoMViXUYxdsuK8FmzuYmwSvHsWyAtTEAGW%2BqiJyrsiOGXxc%2B746mrz0ECg1%2BepvFHP1uT1c9p2JQY6iVLJtCtm5pu8E55Q98Ad38MDe03dhr468Go0teWw18lrVhVwDyoB7XXr6Mv5opZTU09COUmZClaGU96oro%2FQc9KAiSRN%2FeA7Q2NjcLYtbzegZ5S3AWtBzK3Wm%2FtgtGLU7a5UdIWlajTPxBJegnGLLYpl5wWb02BaLvHR9%2FuZlLqtso74cwpFweNQu%2BNvwUOUiTANt0MJr69L8GOqUBO6h6q6nRJsoD9d2NxstKcSss34zEMv4oF662AV%2F52W35kHMOB2iiA7tDtfV9%2FGlq4KKLrqvydmCNXXB%2FUXlHjqVmcTIzSr7MjFrskRJ%2F6rFRURw58ogQ0Oh%2BiwPAhfs6vW%2FSK6t0ZC%2BY%2B%2BdqpLvTth0kLgGtBziApuiF%2B4a0qFPxwy7cbiaCw9gvTQJoVOUzB0WVNGR%2BttV49cILe7Vg%2FfSvc0zj&X-Amz-Signature=535f7fa3c3fc0c8080a28aea63915e8c131ce54c47215d17bff148ce4b843f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMKWB2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR13a0VT%2FndlXVyO1AuuGAl%2FWXDBX92j4f6GDxmXSjuAiEA5REc7zaUpwM5CMIT%2BSpJvnkhkj02HVVpa1fdxiEqHOMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJLRinPBE%2FHPGWMagSrcA0cZb1k%2BFGlgjj%2FumsAPrtoooPLN08Uok467saxReuaQUfR1NTCh%2FGZNJ5TcxIhoZ%2Fdxubh5OAsPh95n5bnu7BMykf2TL0vO9zjxo0zo63W5ALNorkUDtJJLDpxZWodEbpF5R8n73gNIZF%2Bx6QFsspGIscpyBR4WFk7vImFhN%2FaEyNrvM9XLlh%2BfbwuerlArFGciuru0WqBKL%2BjpDUpp5L%2F87t35hXT%2Bjer%2F97Q7chB7Sm2TpG2BbbxzVChmR3%2F222yTsdLW%2FsWfjX5eT6uYoClUbj8SodrHX%2FNFaWZhb3J%2BOY3co%2FBxYRwBiVqhLl9qO4Oz5EOLB017pnjP6JEnyQo7%2FHhNWot3dwhUm%2FR%2BHoMViXUYxdsuK8FmzuYmwSvHsWyAtTEAGW%2BqiJyrsiOGXxc%2B746mrz0ECg1%2BepvFHP1uT1c9p2JQY6iVLJtCtm5pu8E55Q98Ad38MDe03dhr468Go0teWw18lrVhVwDyoB7XXr6Mv5opZTU09COUmZClaGU96oro%2FQc9KAiSRN%2FeA7Q2NjcLYtbzegZ5S3AWtBzK3Wm%2FtgtGLU7a5UdIWlajTPxBJegnGLLYpl5wWb02BaLvHR9%2FuZlLqtso74cwpFweNQu%2BNvwUOUiTANt0MJr69L8GOqUBO6h6q6nRJsoD9d2NxstKcSss34zEMv4oF662AV%2F52W35kHMOB2iiA7tDtfV9%2FGlq4KKLrqvydmCNXXB%2FUXlHjqVmcTIzSr7MjFrskRJ%2F6rFRURw58ogQ0Oh%2BiwPAhfs6vW%2FSK6t0ZC%2BY%2B%2BdqpLvTth0kLgGtBziApuiF%2B4a0qFPxwy7cbiaCw9gvTQJoVOUzB0WVNGR%2BttV49cILe7Vg%2FfSvc0zj&X-Amz-Signature=c2deefff579bf7b58eaee0f2cf5c20362ea0ddff2b4f6519f4db80a5a5827a2d&X-Amz-SignedHeaders=host&x-id=GetObject)
