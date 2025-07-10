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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7C445T%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCZQzSVfxNrNb18%2BYbKc4Dxo2n8CkS0ETr7zT5rK9egIgfTSqQjOb4vAu7SzCo0GBygBBBR5zXFLE4lAvc%2Bj8XeEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8eOy53ySPNWgZ1eCrcA9OUlBOxFRdX8U%2FOyB%2BN6a%2BAIJY89cfflRH9koxa75NvCPfzl5x75PPlgGlgZu0PPwm3Igf4AUK80DOh7LoWHlAR2%2BbK6GeNsjFOtDwhqNLAl%2FkSFSBnCLfZkOO9WxF6xQhYYqb01WuzIrFhSEsHeMCHHYaQXzLT%2FTvzai6CBSJ5NKWgZXNt9Fctx3BEPs8Vu4g%2F0wY1JrkqP9xbBvSlVLTiuIZTBrApYUy6RTw25ZTCIBD0G%2FU6z1a0h3mzkSZAWdlyR8BQEw3CTaMnp%2FMEwIDpdq3rglBIN8dWGaP99IL1ikVqd1ozfriTtD7Fq%2FEI%2F%2BR7SkmZcxa2WlQNg%2BDWpxRSxMrfykYXm5A%2BAXPqddS%2B6OMCFZCBZuljbo0fiZwTkwacF%2FuIUbNeu0pz%2BDaq63pw8Bk%2BSgyuCbasyhxEl9icJgziggZRI1RSqdsZO42NQfRm%2BG06%2F2%2FU4S4B1C7Hqrn%2FLu4hoUxZ7RM3hCuxBenfbmTd5JHzKqqE%2BCRtnhQIVKgUErHe6n3xyQNPS6W5sXLyGN0aIswe2Wafid%2FBEDUU%2BO6MyIzKdD1xSjuJA8buDa0mmBXhQhczvvXHMkwAux6PHlltwVxG%2BZWPrPLOUTk2lwI3382m3laDNPVVMNfNwMMGOqUBwyxe%2BEDPcjKpuvZfwbzsk5qsu0Umdv7mWYYBU5agg0EDDyv1M21U%2FGKcLZVn6txN9P5G2TQf%2Fo5Zv%2FpSaRqLfHO3egyrDHS9FbPRRVsNTU1O3tgtZ14ae1PqLZSZOR%2B6IrhCm1QnCijdk5637a0Ms4Ix8GbmNEQFM2LYis0wY%2FRNPf797qGpy%2F6EF00EL3BeP%2BWpNVTutBaO2iivyNIIpKk6meQs&X-Amz-Signature=ab7b6eb2ad91d860ee07538c5fb699dd0cd86371b6a84aa916313b1544d4d337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7C445T%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCZQzSVfxNrNb18%2BYbKc4Dxo2n8CkS0ETr7zT5rK9egIgfTSqQjOb4vAu7SzCo0GBygBBBR5zXFLE4lAvc%2Bj8XeEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8eOy53ySPNWgZ1eCrcA9OUlBOxFRdX8U%2FOyB%2BN6a%2BAIJY89cfflRH9koxa75NvCPfzl5x75PPlgGlgZu0PPwm3Igf4AUK80DOh7LoWHlAR2%2BbK6GeNsjFOtDwhqNLAl%2FkSFSBnCLfZkOO9WxF6xQhYYqb01WuzIrFhSEsHeMCHHYaQXzLT%2FTvzai6CBSJ5NKWgZXNt9Fctx3BEPs8Vu4g%2F0wY1JrkqP9xbBvSlVLTiuIZTBrApYUy6RTw25ZTCIBD0G%2FU6z1a0h3mzkSZAWdlyR8BQEw3CTaMnp%2FMEwIDpdq3rglBIN8dWGaP99IL1ikVqd1ozfriTtD7Fq%2FEI%2F%2BR7SkmZcxa2WlQNg%2BDWpxRSxMrfykYXm5A%2BAXPqddS%2B6OMCFZCBZuljbo0fiZwTkwacF%2FuIUbNeu0pz%2BDaq63pw8Bk%2BSgyuCbasyhxEl9icJgziggZRI1RSqdsZO42NQfRm%2BG06%2F2%2FU4S4B1C7Hqrn%2FLu4hoUxZ7RM3hCuxBenfbmTd5JHzKqqE%2BCRtnhQIVKgUErHe6n3xyQNPS6W5sXLyGN0aIswe2Wafid%2FBEDUU%2BO6MyIzKdD1xSjuJA8buDa0mmBXhQhczvvXHMkwAux6PHlltwVxG%2BZWPrPLOUTk2lwI3382m3laDNPVVMNfNwMMGOqUBwyxe%2BEDPcjKpuvZfwbzsk5qsu0Umdv7mWYYBU5agg0EDDyv1M21U%2FGKcLZVn6txN9P5G2TQf%2Fo5Zv%2FpSaRqLfHO3egyrDHS9FbPRRVsNTU1O3tgtZ14ae1PqLZSZOR%2B6IrhCm1QnCijdk5637a0Ms4Ix8GbmNEQFM2LYis0wY%2FRNPf797qGpy%2F6EF00EL3BeP%2BWpNVTutBaO2iivyNIIpKk6meQs&X-Amz-Signature=511572eb1d1c917b26e46865265e96fcc98932667e38ff8de401d32f5a9c7f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7C445T%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCZQzSVfxNrNb18%2BYbKc4Dxo2n8CkS0ETr7zT5rK9egIgfTSqQjOb4vAu7SzCo0GBygBBBR5zXFLE4lAvc%2Bj8XeEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8eOy53ySPNWgZ1eCrcA9OUlBOxFRdX8U%2FOyB%2BN6a%2BAIJY89cfflRH9koxa75NvCPfzl5x75PPlgGlgZu0PPwm3Igf4AUK80DOh7LoWHlAR2%2BbK6GeNsjFOtDwhqNLAl%2FkSFSBnCLfZkOO9WxF6xQhYYqb01WuzIrFhSEsHeMCHHYaQXzLT%2FTvzai6CBSJ5NKWgZXNt9Fctx3BEPs8Vu4g%2F0wY1JrkqP9xbBvSlVLTiuIZTBrApYUy6RTw25ZTCIBD0G%2FU6z1a0h3mzkSZAWdlyR8BQEw3CTaMnp%2FMEwIDpdq3rglBIN8dWGaP99IL1ikVqd1ozfriTtD7Fq%2FEI%2F%2BR7SkmZcxa2WlQNg%2BDWpxRSxMrfykYXm5A%2BAXPqddS%2B6OMCFZCBZuljbo0fiZwTkwacF%2FuIUbNeu0pz%2BDaq63pw8Bk%2BSgyuCbasyhxEl9icJgziggZRI1RSqdsZO42NQfRm%2BG06%2F2%2FU4S4B1C7Hqrn%2FLu4hoUxZ7RM3hCuxBenfbmTd5JHzKqqE%2BCRtnhQIVKgUErHe6n3xyQNPS6W5sXLyGN0aIswe2Wafid%2FBEDUU%2BO6MyIzKdD1xSjuJA8buDa0mmBXhQhczvvXHMkwAux6PHlltwVxG%2BZWPrPLOUTk2lwI3382m3laDNPVVMNfNwMMGOqUBwyxe%2BEDPcjKpuvZfwbzsk5qsu0Umdv7mWYYBU5agg0EDDyv1M21U%2FGKcLZVn6txN9P5G2TQf%2Fo5Zv%2FpSaRqLfHO3egyrDHS9FbPRRVsNTU1O3tgtZ14ae1PqLZSZOR%2B6IrhCm1QnCijdk5637a0Ms4Ix8GbmNEQFM2LYis0wY%2FRNPf797qGpy%2F6EF00EL3BeP%2BWpNVTutBaO2iivyNIIpKk6meQs&X-Amz-Signature=f5fefc74a79f37663ddc8d754c6f2a6df85ca6b9594848475e4f1bddb76c5e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7C445T%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCZQzSVfxNrNb18%2BYbKc4Dxo2n8CkS0ETr7zT5rK9egIgfTSqQjOb4vAu7SzCo0GBygBBBR5zXFLE4lAvc%2Bj8XeEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8eOy53ySPNWgZ1eCrcA9OUlBOxFRdX8U%2FOyB%2BN6a%2BAIJY89cfflRH9koxa75NvCPfzl5x75PPlgGlgZu0PPwm3Igf4AUK80DOh7LoWHlAR2%2BbK6GeNsjFOtDwhqNLAl%2FkSFSBnCLfZkOO9WxF6xQhYYqb01WuzIrFhSEsHeMCHHYaQXzLT%2FTvzai6CBSJ5NKWgZXNt9Fctx3BEPs8Vu4g%2F0wY1JrkqP9xbBvSlVLTiuIZTBrApYUy6RTw25ZTCIBD0G%2FU6z1a0h3mzkSZAWdlyR8BQEw3CTaMnp%2FMEwIDpdq3rglBIN8dWGaP99IL1ikVqd1ozfriTtD7Fq%2FEI%2F%2BR7SkmZcxa2WlQNg%2BDWpxRSxMrfykYXm5A%2BAXPqddS%2B6OMCFZCBZuljbo0fiZwTkwacF%2FuIUbNeu0pz%2BDaq63pw8Bk%2BSgyuCbasyhxEl9icJgziggZRI1RSqdsZO42NQfRm%2BG06%2F2%2FU4S4B1C7Hqrn%2FLu4hoUxZ7RM3hCuxBenfbmTd5JHzKqqE%2BCRtnhQIVKgUErHe6n3xyQNPS6W5sXLyGN0aIswe2Wafid%2FBEDUU%2BO6MyIzKdD1xSjuJA8buDa0mmBXhQhczvvXHMkwAux6PHlltwVxG%2BZWPrPLOUTk2lwI3382m3laDNPVVMNfNwMMGOqUBwyxe%2BEDPcjKpuvZfwbzsk5qsu0Umdv7mWYYBU5agg0EDDyv1M21U%2FGKcLZVn6txN9P5G2TQf%2Fo5Zv%2FpSaRqLfHO3egyrDHS9FbPRRVsNTU1O3tgtZ14ae1PqLZSZOR%2B6IrhCm1QnCijdk5637a0Ms4Ix8GbmNEQFM2LYis0wY%2FRNPf797qGpy%2F6EF00EL3BeP%2BWpNVTutBaO2iivyNIIpKk6meQs&X-Amz-Signature=3566075d24e1e4a0d35a761f27dfd284a721378040218abe4942399c3361e121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7C445T%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCZQzSVfxNrNb18%2BYbKc4Dxo2n8CkS0ETr7zT5rK9egIgfTSqQjOb4vAu7SzCo0GBygBBBR5zXFLE4lAvc%2Bj8XeEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8eOy53ySPNWgZ1eCrcA9OUlBOxFRdX8U%2FOyB%2BN6a%2BAIJY89cfflRH9koxa75NvCPfzl5x75PPlgGlgZu0PPwm3Igf4AUK80DOh7LoWHlAR2%2BbK6GeNsjFOtDwhqNLAl%2FkSFSBnCLfZkOO9WxF6xQhYYqb01WuzIrFhSEsHeMCHHYaQXzLT%2FTvzai6CBSJ5NKWgZXNt9Fctx3BEPs8Vu4g%2F0wY1JrkqP9xbBvSlVLTiuIZTBrApYUy6RTw25ZTCIBD0G%2FU6z1a0h3mzkSZAWdlyR8BQEw3CTaMnp%2FMEwIDpdq3rglBIN8dWGaP99IL1ikVqd1ozfriTtD7Fq%2FEI%2F%2BR7SkmZcxa2WlQNg%2BDWpxRSxMrfykYXm5A%2BAXPqddS%2B6OMCFZCBZuljbo0fiZwTkwacF%2FuIUbNeu0pz%2BDaq63pw8Bk%2BSgyuCbasyhxEl9icJgziggZRI1RSqdsZO42NQfRm%2BG06%2F2%2FU4S4B1C7Hqrn%2FLu4hoUxZ7RM3hCuxBenfbmTd5JHzKqqE%2BCRtnhQIVKgUErHe6n3xyQNPS6W5sXLyGN0aIswe2Wafid%2FBEDUU%2BO6MyIzKdD1xSjuJA8buDa0mmBXhQhczvvXHMkwAux6PHlltwVxG%2BZWPrPLOUTk2lwI3382m3laDNPVVMNfNwMMGOqUBwyxe%2BEDPcjKpuvZfwbzsk5qsu0Umdv7mWYYBU5agg0EDDyv1M21U%2FGKcLZVn6txN9P5G2TQf%2Fo5Zv%2FpSaRqLfHO3egyrDHS9FbPRRVsNTU1O3tgtZ14ae1PqLZSZOR%2B6IrhCm1QnCijdk5637a0Ms4Ix8GbmNEQFM2LYis0wY%2FRNPf797qGpy%2F6EF00EL3BeP%2BWpNVTutBaO2iivyNIIpKk6meQs&X-Amz-Signature=4bbe6b44e591b91bb5f6ddbfa28e10dd14a6110625d6524adc964c10ceb3bb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7C445T%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxCZQzSVfxNrNb18%2BYbKc4Dxo2n8CkS0ETr7zT5rK9egIgfTSqQjOb4vAu7SzCo0GBygBBBR5zXFLE4lAvc%2Bj8XeEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8eOy53ySPNWgZ1eCrcA9OUlBOxFRdX8U%2FOyB%2BN6a%2BAIJY89cfflRH9koxa75NvCPfzl5x75PPlgGlgZu0PPwm3Igf4AUK80DOh7LoWHlAR2%2BbK6GeNsjFOtDwhqNLAl%2FkSFSBnCLfZkOO9WxF6xQhYYqb01WuzIrFhSEsHeMCHHYaQXzLT%2FTvzai6CBSJ5NKWgZXNt9Fctx3BEPs8Vu4g%2F0wY1JrkqP9xbBvSlVLTiuIZTBrApYUy6RTw25ZTCIBD0G%2FU6z1a0h3mzkSZAWdlyR8BQEw3CTaMnp%2FMEwIDpdq3rglBIN8dWGaP99IL1ikVqd1ozfriTtD7Fq%2FEI%2F%2BR7SkmZcxa2WlQNg%2BDWpxRSxMrfykYXm5A%2BAXPqddS%2B6OMCFZCBZuljbo0fiZwTkwacF%2FuIUbNeu0pz%2BDaq63pw8Bk%2BSgyuCbasyhxEl9icJgziggZRI1RSqdsZO42NQfRm%2BG06%2F2%2FU4S4B1C7Hqrn%2FLu4hoUxZ7RM3hCuxBenfbmTd5JHzKqqE%2BCRtnhQIVKgUErHe6n3xyQNPS6W5sXLyGN0aIswe2Wafid%2FBEDUU%2BO6MyIzKdD1xSjuJA8buDa0mmBXhQhczvvXHMkwAux6PHlltwVxG%2BZWPrPLOUTk2lwI3382m3laDNPVVMNfNwMMGOqUBwyxe%2BEDPcjKpuvZfwbzsk5qsu0Umdv7mWYYBU5agg0EDDyv1M21U%2FGKcLZVn6txN9P5G2TQf%2Fo5Zv%2FpSaRqLfHO3egyrDHS9FbPRRVsNTU1O3tgtZ14ae1PqLZSZOR%2B6IrhCm1QnCijdk5637a0Ms4Ix8GbmNEQFM2LYis0wY%2FRNPf797qGpy%2F6EF00EL3BeP%2BWpNVTutBaO2iivyNIIpKk6meQs&X-Amz-Signature=f2436423b8d0a755664e15a140503d14f7c15f39f1443864faeeaa7eb3944404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
