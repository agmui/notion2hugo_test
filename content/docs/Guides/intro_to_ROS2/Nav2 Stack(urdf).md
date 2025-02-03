---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LPAMVX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJgu2xKGZu1r95RQcD05xMe85Wf4rh6brDs4urGFYMgIgbqvlMlV0dgZxpxDmgkf7nB0%2Bm8mbF0puiltHMhh1z20qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxFXmw85MdddvbHircA1OFYyz0HND6Eg0LrJoh4da1qmrYpk2O0INzon5DJyDPAbtGOxmYl3U8DucCQTtobe1lGC55ocMac5dbpM%2BbWhHhcK0kUvNY9Za%2FDwvSuUaCnlo6T1HNlnrNbv4BWSmwhdFstSKjqh0Uf%2FaEJ9eZyP%2FnDW3hPsLSafq4B9dFKcTNJy4F27Odm5wYmhoueHVCzR8JFfTfiV%2B%2FXTEDqzf%2BnsbGpj7879eQVFLNNQyKSMy0QVqb8AQ%2Bl4l8v6CB5HDRemTSXrUB2S%2FXVQuWjS9XsUsgNAh9xx0ZP7WdupZg9z7m5yE8Z3GOnYTQso7YBfMkizXE0CIK6MCovsjc0yZGKJOlZ1w516AwsYDotacBw5qRdajGaP1uc0xB9KEgoCaQBfRC6O%2BOEHzsM0J%2B2FVOge8c54WfJQ5%2FGO7MX%2B%2F6L%2F%2Fjf5Rzw6VFQfYxIP1V5qi9kalqwaw6WBstwsQqyx5S%2BVJs2gp0L2q9s36JC%2B57zMV2bPQZnqu9stOj5W%2B3OO0wOH9JpAnSBIW2ZdDa%2FzOL3czwB8z1els8FrFstuUeHzEn5386Gys12pdfhv1Gq2bGCiIpGffswGtv1aWqfGgf%2FEmlG6a0klHqskJMhSqbOCsRsAVZHMW3ibZxaItRMMHl%2F7wGOqUBD8NSNIMyIh5%2FWIZgdcE7dQIpWTmrSsXW9ZAE5GT2S%2B1koH5O5Tt5HnusXW9xdpGJ4rqI%2BSMC%2B381Ry79vZ%2Bs%2BMEguENZP4s%2BE2l%2FPECEViLANGZp0y4t1YJPA3ReRcfO1yiihnWoNdn7oTJ9h2rgaXCX%2FGOf0BmWleXszRONLKTJ25TB9eo9cvvWoxHsaz4rEPkWhbJCNaY5vBa8NY6qhTJrNT47&X-Amz-Signature=9e034aa5c253d4a88fca7b7a473c3dc6ef84e245491cb3910e6c4c1917defa3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LPAMVX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJgu2xKGZu1r95RQcD05xMe85Wf4rh6brDs4urGFYMgIgbqvlMlV0dgZxpxDmgkf7nB0%2Bm8mbF0puiltHMhh1z20qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxFXmw85MdddvbHircA1OFYyz0HND6Eg0LrJoh4da1qmrYpk2O0INzon5DJyDPAbtGOxmYl3U8DucCQTtobe1lGC55ocMac5dbpM%2BbWhHhcK0kUvNY9Za%2FDwvSuUaCnlo6T1HNlnrNbv4BWSmwhdFstSKjqh0Uf%2FaEJ9eZyP%2FnDW3hPsLSafq4B9dFKcTNJy4F27Odm5wYmhoueHVCzR8JFfTfiV%2B%2FXTEDqzf%2BnsbGpj7879eQVFLNNQyKSMy0QVqb8AQ%2Bl4l8v6CB5HDRemTSXrUB2S%2FXVQuWjS9XsUsgNAh9xx0ZP7WdupZg9z7m5yE8Z3GOnYTQso7YBfMkizXE0CIK6MCovsjc0yZGKJOlZ1w516AwsYDotacBw5qRdajGaP1uc0xB9KEgoCaQBfRC6O%2BOEHzsM0J%2B2FVOge8c54WfJQ5%2FGO7MX%2B%2F6L%2F%2Fjf5Rzw6VFQfYxIP1V5qi9kalqwaw6WBstwsQqyx5S%2BVJs2gp0L2q9s36JC%2B57zMV2bPQZnqu9stOj5W%2B3OO0wOH9JpAnSBIW2ZdDa%2FzOL3czwB8z1els8FrFstuUeHzEn5386Gys12pdfhv1Gq2bGCiIpGffswGtv1aWqfGgf%2FEmlG6a0klHqskJMhSqbOCsRsAVZHMW3ibZxaItRMMHl%2F7wGOqUBD8NSNIMyIh5%2FWIZgdcE7dQIpWTmrSsXW9ZAE5GT2S%2B1koH5O5Tt5HnusXW9xdpGJ4rqI%2BSMC%2B381Ry79vZ%2Bs%2BMEguENZP4s%2BE2l%2FPECEViLANGZp0y4t1YJPA3ReRcfO1yiihnWoNdn7oTJ9h2rgaXCX%2FGOf0BmWleXszRONLKTJ25TB9eo9cvvWoxHsaz4rEPkWhbJCNaY5vBa8NY6qhTJrNT47&X-Amz-Signature=757659c170ca021578d508558b6a2bc5c3a60b63fd276a3e182e4dc9fd526322&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LPAMVX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJgu2xKGZu1r95RQcD05xMe85Wf4rh6brDs4urGFYMgIgbqvlMlV0dgZxpxDmgkf7nB0%2Bm8mbF0puiltHMhh1z20qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxFXmw85MdddvbHircA1OFYyz0HND6Eg0LrJoh4da1qmrYpk2O0INzon5DJyDPAbtGOxmYl3U8DucCQTtobe1lGC55ocMac5dbpM%2BbWhHhcK0kUvNY9Za%2FDwvSuUaCnlo6T1HNlnrNbv4BWSmwhdFstSKjqh0Uf%2FaEJ9eZyP%2FnDW3hPsLSafq4B9dFKcTNJy4F27Odm5wYmhoueHVCzR8JFfTfiV%2B%2FXTEDqzf%2BnsbGpj7879eQVFLNNQyKSMy0QVqb8AQ%2Bl4l8v6CB5HDRemTSXrUB2S%2FXVQuWjS9XsUsgNAh9xx0ZP7WdupZg9z7m5yE8Z3GOnYTQso7YBfMkizXE0CIK6MCovsjc0yZGKJOlZ1w516AwsYDotacBw5qRdajGaP1uc0xB9KEgoCaQBfRC6O%2BOEHzsM0J%2B2FVOge8c54WfJQ5%2FGO7MX%2B%2F6L%2F%2Fjf5Rzw6VFQfYxIP1V5qi9kalqwaw6WBstwsQqyx5S%2BVJs2gp0L2q9s36JC%2B57zMV2bPQZnqu9stOj5W%2B3OO0wOH9JpAnSBIW2ZdDa%2FzOL3czwB8z1els8FrFstuUeHzEn5386Gys12pdfhv1Gq2bGCiIpGffswGtv1aWqfGgf%2FEmlG6a0klHqskJMhSqbOCsRsAVZHMW3ibZxaItRMMHl%2F7wGOqUBD8NSNIMyIh5%2FWIZgdcE7dQIpWTmrSsXW9ZAE5GT2S%2B1koH5O5Tt5HnusXW9xdpGJ4rqI%2BSMC%2B381Ry79vZ%2Bs%2BMEguENZP4s%2BE2l%2FPECEViLANGZp0y4t1YJPA3ReRcfO1yiihnWoNdn7oTJ9h2rgaXCX%2FGOf0BmWleXszRONLKTJ25TB9eo9cvvWoxHsaz4rEPkWhbJCNaY5vBa8NY6qhTJrNT47&X-Amz-Signature=45b0dc586be6f96bcdf7672142b6f4093b4bc1ae88b495d2b0cd5fbb46c0192b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LPAMVX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJgu2xKGZu1r95RQcD05xMe85Wf4rh6brDs4urGFYMgIgbqvlMlV0dgZxpxDmgkf7nB0%2Bm8mbF0puiltHMhh1z20qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxFXmw85MdddvbHircA1OFYyz0HND6Eg0LrJoh4da1qmrYpk2O0INzon5DJyDPAbtGOxmYl3U8DucCQTtobe1lGC55ocMac5dbpM%2BbWhHhcK0kUvNY9Za%2FDwvSuUaCnlo6T1HNlnrNbv4BWSmwhdFstSKjqh0Uf%2FaEJ9eZyP%2FnDW3hPsLSafq4B9dFKcTNJy4F27Odm5wYmhoueHVCzR8JFfTfiV%2B%2FXTEDqzf%2BnsbGpj7879eQVFLNNQyKSMy0QVqb8AQ%2Bl4l8v6CB5HDRemTSXrUB2S%2FXVQuWjS9XsUsgNAh9xx0ZP7WdupZg9z7m5yE8Z3GOnYTQso7YBfMkizXE0CIK6MCovsjc0yZGKJOlZ1w516AwsYDotacBw5qRdajGaP1uc0xB9KEgoCaQBfRC6O%2BOEHzsM0J%2B2FVOge8c54WfJQ5%2FGO7MX%2B%2F6L%2F%2Fjf5Rzw6VFQfYxIP1V5qi9kalqwaw6WBstwsQqyx5S%2BVJs2gp0L2q9s36JC%2B57zMV2bPQZnqu9stOj5W%2B3OO0wOH9JpAnSBIW2ZdDa%2FzOL3czwB8z1els8FrFstuUeHzEn5386Gys12pdfhv1Gq2bGCiIpGffswGtv1aWqfGgf%2FEmlG6a0klHqskJMhSqbOCsRsAVZHMW3ibZxaItRMMHl%2F7wGOqUBD8NSNIMyIh5%2FWIZgdcE7dQIpWTmrSsXW9ZAE5GT2S%2B1koH5O5Tt5HnusXW9xdpGJ4rqI%2BSMC%2B381Ry79vZ%2Bs%2BMEguENZP4s%2BE2l%2FPECEViLANGZp0y4t1YJPA3ReRcfO1yiihnWoNdn7oTJ9h2rgaXCX%2FGOf0BmWleXszRONLKTJ25TB9eo9cvvWoxHsaz4rEPkWhbJCNaY5vBa8NY6qhTJrNT47&X-Amz-Signature=656a6b2dde15a23550d6f3213e2534881d2968a614d9ab49ee5e0fe3c633da5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LPAMVX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJgu2xKGZu1r95RQcD05xMe85Wf4rh6brDs4urGFYMgIgbqvlMlV0dgZxpxDmgkf7nB0%2Bm8mbF0puiltHMhh1z20qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxFXmw85MdddvbHircA1OFYyz0HND6Eg0LrJoh4da1qmrYpk2O0INzon5DJyDPAbtGOxmYl3U8DucCQTtobe1lGC55ocMac5dbpM%2BbWhHhcK0kUvNY9Za%2FDwvSuUaCnlo6T1HNlnrNbv4BWSmwhdFstSKjqh0Uf%2FaEJ9eZyP%2FnDW3hPsLSafq4B9dFKcTNJy4F27Odm5wYmhoueHVCzR8JFfTfiV%2B%2FXTEDqzf%2BnsbGpj7879eQVFLNNQyKSMy0QVqb8AQ%2Bl4l8v6CB5HDRemTSXrUB2S%2FXVQuWjS9XsUsgNAh9xx0ZP7WdupZg9z7m5yE8Z3GOnYTQso7YBfMkizXE0CIK6MCovsjc0yZGKJOlZ1w516AwsYDotacBw5qRdajGaP1uc0xB9KEgoCaQBfRC6O%2BOEHzsM0J%2B2FVOge8c54WfJQ5%2FGO7MX%2B%2F6L%2F%2Fjf5Rzw6VFQfYxIP1V5qi9kalqwaw6WBstwsQqyx5S%2BVJs2gp0L2q9s36JC%2B57zMV2bPQZnqu9stOj5W%2B3OO0wOH9JpAnSBIW2ZdDa%2FzOL3czwB8z1els8FrFstuUeHzEn5386Gys12pdfhv1Gq2bGCiIpGffswGtv1aWqfGgf%2FEmlG6a0klHqskJMhSqbOCsRsAVZHMW3ibZxaItRMMHl%2F7wGOqUBD8NSNIMyIh5%2FWIZgdcE7dQIpWTmrSsXW9ZAE5GT2S%2B1koH5O5Tt5HnusXW9xdpGJ4rqI%2BSMC%2B381Ry79vZ%2Bs%2BMEguENZP4s%2BE2l%2FPECEViLANGZp0y4t1YJPA3ReRcfO1yiihnWoNdn7oTJ9h2rgaXCX%2FGOf0BmWleXszRONLKTJ25TB9eo9cvvWoxHsaz4rEPkWhbJCNaY5vBa8NY6qhTJrNT47&X-Amz-Signature=8d6fe4d533dda2466b28b1ac460b2401bee98bba65dd62ed713394035afb99b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642LPAMVX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJgu2xKGZu1r95RQcD05xMe85Wf4rh6brDs4urGFYMgIgbqvlMlV0dgZxpxDmgkf7nB0%2Bm8mbF0puiltHMhh1z20qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnxFXmw85MdddvbHircA1OFYyz0HND6Eg0LrJoh4da1qmrYpk2O0INzon5DJyDPAbtGOxmYl3U8DucCQTtobe1lGC55ocMac5dbpM%2BbWhHhcK0kUvNY9Za%2FDwvSuUaCnlo6T1HNlnrNbv4BWSmwhdFstSKjqh0Uf%2FaEJ9eZyP%2FnDW3hPsLSafq4B9dFKcTNJy4F27Odm5wYmhoueHVCzR8JFfTfiV%2B%2FXTEDqzf%2BnsbGpj7879eQVFLNNQyKSMy0QVqb8AQ%2Bl4l8v6CB5HDRemTSXrUB2S%2FXVQuWjS9XsUsgNAh9xx0ZP7WdupZg9z7m5yE8Z3GOnYTQso7YBfMkizXE0CIK6MCovsjc0yZGKJOlZ1w516AwsYDotacBw5qRdajGaP1uc0xB9KEgoCaQBfRC6O%2BOEHzsM0J%2B2FVOge8c54WfJQ5%2FGO7MX%2B%2F6L%2F%2Fjf5Rzw6VFQfYxIP1V5qi9kalqwaw6WBstwsQqyx5S%2BVJs2gp0L2q9s36JC%2B57zMV2bPQZnqu9stOj5W%2B3OO0wOH9JpAnSBIW2ZdDa%2FzOL3czwB8z1els8FrFstuUeHzEn5386Gys12pdfhv1Gq2bGCiIpGffswGtv1aWqfGgf%2FEmlG6a0klHqskJMhSqbOCsRsAVZHMW3ibZxaItRMMHl%2F7wGOqUBD8NSNIMyIh5%2FWIZgdcE7dQIpWTmrSsXW9ZAE5GT2S%2B1koH5O5Tt5HnusXW9xdpGJ4rqI%2BSMC%2B381Ry79vZ%2Bs%2BMEguENZP4s%2BE2l%2FPECEViLANGZp0y4t1YJPA3ReRcfO1yiihnWoNdn7oTJ9h2rgaXCX%2FGOf0BmWleXszRONLKTJ25TB9eo9cvvWoxHsaz4rEPkWhbJCNaY5vBa8NY6qhTJrNT47&X-Amz-Signature=86d164abfea9770fcfb7c45a9a579bf1f67f5cab883ba64db1c94e6a9537397a&X-Amz-SignedHeaders=host&x-id=GetObject)
