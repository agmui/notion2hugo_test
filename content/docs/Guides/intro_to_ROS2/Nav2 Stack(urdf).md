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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ6TRH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGan7ce2qOQhL9iwTLXvwNldOc%2BR%2FTbWaSBerbxJVW%2FIAiBZK5YdDf3WiQKCb7XSIhaQw5oQeVv%2BPAbdRXirtTQh0Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMtRA3FYZG0nsp8E8yKtwDrsnjFWCyCJNl1LU6rOY7fNSi4JjD05TeyVo1LAi02nEL4VfodhuktHm8m%2FFrzFT8Ahp%2FIfXITh9EmS8%2FD437ExJ0Ab53IR7%2FQ8i7cloRiomrm1%2Bp2BUx5eVmUOeg2zEbpJt0Ms2JTTG8TJdyQ%2B0nFkVWnDklIMu%2BNILOuA3z%2FBXUXrHm15ITrZKQVMvmfwtP1%2B7q3xTHyrVyz9E1Whi0Xw9vZVsPunh4fJKhI3OWLOMaKxJY9z51yR8DvfEHuncPftt5oNtzovTrE1teQlZJdSEwrrMA9elsmJyo1Og9zluA0SvxmtcXA13ZNDWOBNmZ6mDW5Ioce66DZMnnvwtwbQhlm6%2F%2BjhTFtOEiP4nuD%2BqEIB2uaZbSRnNTeTR18XEPJgaB3jyDUTt%2FHxZgPKyie0WPLeGS%2BcDW%2FmQl4MGQ10PEWiJh1DNtuXUAAaN7nvnCuB9DCEYrI7VGEy4ACpGvozBSK67HkFSMg3%2FxI3iL1s6GbcVs4lp7QlF1bswHRqf7ymdmuihzJ7NQj%2BZeTRYRjs8GesPTTMOAtXIchwsS00LMSqytKxH%2FxwCd%2BTYs61tky7C60FuH%2FN4yLOdzkSiP6yW%2BUWyFobz3YB6hOhU3fjnAHfHWi%2Fqnevt617Yw2OuUwQY6pgGHszupXuPBLQ0wAkHmAd8ZOCkJh%2BwP2jtdF0Y%2Frjd2H7E28u2LAubrcg%2BbNekfiwgCUl0VTXAtVHnJ0GAo6Mq9V6ZKIYWufPuAXIub0SekW69LVV%2F9VEOlrUv53s5twTIGSn%2BNhQbj4lIPy0DSUrPeErEhe9YyQNxdVjj4LNUlhnQ4wA47AhML1vnKN%2B7UgR0Y2ugofa%2FwNRAFeA09YeJXWxEZpSZX&X-Amz-Signature=cc8ea0b2a4fa1f032d2256e839efec676d36bb41261bda7d97b5f3e0af4d08ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ6TRH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGan7ce2qOQhL9iwTLXvwNldOc%2BR%2FTbWaSBerbxJVW%2FIAiBZK5YdDf3WiQKCb7XSIhaQw5oQeVv%2BPAbdRXirtTQh0Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMtRA3FYZG0nsp8E8yKtwDrsnjFWCyCJNl1LU6rOY7fNSi4JjD05TeyVo1LAi02nEL4VfodhuktHm8m%2FFrzFT8Ahp%2FIfXITh9EmS8%2FD437ExJ0Ab53IR7%2FQ8i7cloRiomrm1%2Bp2BUx5eVmUOeg2zEbpJt0Ms2JTTG8TJdyQ%2B0nFkVWnDklIMu%2BNILOuA3z%2FBXUXrHm15ITrZKQVMvmfwtP1%2B7q3xTHyrVyz9E1Whi0Xw9vZVsPunh4fJKhI3OWLOMaKxJY9z51yR8DvfEHuncPftt5oNtzovTrE1teQlZJdSEwrrMA9elsmJyo1Og9zluA0SvxmtcXA13ZNDWOBNmZ6mDW5Ioce66DZMnnvwtwbQhlm6%2F%2BjhTFtOEiP4nuD%2BqEIB2uaZbSRnNTeTR18XEPJgaB3jyDUTt%2FHxZgPKyie0WPLeGS%2BcDW%2FmQl4MGQ10PEWiJh1DNtuXUAAaN7nvnCuB9DCEYrI7VGEy4ACpGvozBSK67HkFSMg3%2FxI3iL1s6GbcVs4lp7QlF1bswHRqf7ymdmuihzJ7NQj%2BZeTRYRjs8GesPTTMOAtXIchwsS00LMSqytKxH%2FxwCd%2BTYs61tky7C60FuH%2FN4yLOdzkSiP6yW%2BUWyFobz3YB6hOhU3fjnAHfHWi%2Fqnevt617Yw2OuUwQY6pgGHszupXuPBLQ0wAkHmAd8ZOCkJh%2BwP2jtdF0Y%2Frjd2H7E28u2LAubrcg%2BbNekfiwgCUl0VTXAtVHnJ0GAo6Mq9V6ZKIYWufPuAXIub0SekW69LVV%2F9VEOlrUv53s5twTIGSn%2BNhQbj4lIPy0DSUrPeErEhe9YyQNxdVjj4LNUlhnQ4wA47AhML1vnKN%2B7UgR0Y2ugofa%2FwNRAFeA09YeJXWxEZpSZX&X-Amz-Signature=ce2043588025ecc49a6b97d789944cad8f8df74a0d037d380e4b51934b2af938&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ6TRH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGan7ce2qOQhL9iwTLXvwNldOc%2BR%2FTbWaSBerbxJVW%2FIAiBZK5YdDf3WiQKCb7XSIhaQw5oQeVv%2BPAbdRXirtTQh0Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMtRA3FYZG0nsp8E8yKtwDrsnjFWCyCJNl1LU6rOY7fNSi4JjD05TeyVo1LAi02nEL4VfodhuktHm8m%2FFrzFT8Ahp%2FIfXITh9EmS8%2FD437ExJ0Ab53IR7%2FQ8i7cloRiomrm1%2Bp2BUx5eVmUOeg2zEbpJt0Ms2JTTG8TJdyQ%2B0nFkVWnDklIMu%2BNILOuA3z%2FBXUXrHm15ITrZKQVMvmfwtP1%2B7q3xTHyrVyz9E1Whi0Xw9vZVsPunh4fJKhI3OWLOMaKxJY9z51yR8DvfEHuncPftt5oNtzovTrE1teQlZJdSEwrrMA9elsmJyo1Og9zluA0SvxmtcXA13ZNDWOBNmZ6mDW5Ioce66DZMnnvwtwbQhlm6%2F%2BjhTFtOEiP4nuD%2BqEIB2uaZbSRnNTeTR18XEPJgaB3jyDUTt%2FHxZgPKyie0WPLeGS%2BcDW%2FmQl4MGQ10PEWiJh1DNtuXUAAaN7nvnCuB9DCEYrI7VGEy4ACpGvozBSK67HkFSMg3%2FxI3iL1s6GbcVs4lp7QlF1bswHRqf7ymdmuihzJ7NQj%2BZeTRYRjs8GesPTTMOAtXIchwsS00LMSqytKxH%2FxwCd%2BTYs61tky7C60FuH%2FN4yLOdzkSiP6yW%2BUWyFobz3YB6hOhU3fjnAHfHWi%2Fqnevt617Yw2OuUwQY6pgGHszupXuPBLQ0wAkHmAd8ZOCkJh%2BwP2jtdF0Y%2Frjd2H7E28u2LAubrcg%2BbNekfiwgCUl0VTXAtVHnJ0GAo6Mq9V6ZKIYWufPuAXIub0SekW69LVV%2F9VEOlrUv53s5twTIGSn%2BNhQbj4lIPy0DSUrPeErEhe9YyQNxdVjj4LNUlhnQ4wA47AhML1vnKN%2B7UgR0Y2ugofa%2FwNRAFeA09YeJXWxEZpSZX&X-Amz-Signature=5bc5a4e55967fe21283554d0062cd3bd9290940dfbf026b70169cbb957e95372&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ6TRH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGan7ce2qOQhL9iwTLXvwNldOc%2BR%2FTbWaSBerbxJVW%2FIAiBZK5YdDf3WiQKCb7XSIhaQw5oQeVv%2BPAbdRXirtTQh0Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMtRA3FYZG0nsp8E8yKtwDrsnjFWCyCJNl1LU6rOY7fNSi4JjD05TeyVo1LAi02nEL4VfodhuktHm8m%2FFrzFT8Ahp%2FIfXITh9EmS8%2FD437ExJ0Ab53IR7%2FQ8i7cloRiomrm1%2Bp2BUx5eVmUOeg2zEbpJt0Ms2JTTG8TJdyQ%2B0nFkVWnDklIMu%2BNILOuA3z%2FBXUXrHm15ITrZKQVMvmfwtP1%2B7q3xTHyrVyz9E1Whi0Xw9vZVsPunh4fJKhI3OWLOMaKxJY9z51yR8DvfEHuncPftt5oNtzovTrE1teQlZJdSEwrrMA9elsmJyo1Og9zluA0SvxmtcXA13ZNDWOBNmZ6mDW5Ioce66DZMnnvwtwbQhlm6%2F%2BjhTFtOEiP4nuD%2BqEIB2uaZbSRnNTeTR18XEPJgaB3jyDUTt%2FHxZgPKyie0WPLeGS%2BcDW%2FmQl4MGQ10PEWiJh1DNtuXUAAaN7nvnCuB9DCEYrI7VGEy4ACpGvozBSK67HkFSMg3%2FxI3iL1s6GbcVs4lp7QlF1bswHRqf7ymdmuihzJ7NQj%2BZeTRYRjs8GesPTTMOAtXIchwsS00LMSqytKxH%2FxwCd%2BTYs61tky7C60FuH%2FN4yLOdzkSiP6yW%2BUWyFobz3YB6hOhU3fjnAHfHWi%2Fqnevt617Yw2OuUwQY6pgGHszupXuPBLQ0wAkHmAd8ZOCkJh%2BwP2jtdF0Y%2Frjd2H7E28u2LAubrcg%2BbNekfiwgCUl0VTXAtVHnJ0GAo6Mq9V6ZKIYWufPuAXIub0SekW69LVV%2F9VEOlrUv53s5twTIGSn%2BNhQbj4lIPy0DSUrPeErEhe9YyQNxdVjj4LNUlhnQ4wA47AhML1vnKN%2B7UgR0Y2ugofa%2FwNRAFeA09YeJXWxEZpSZX&X-Amz-Signature=8d262319ce5ae982953438e879b62a501bf3d0e507851245e51f4d53a838af91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ6TRH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGan7ce2qOQhL9iwTLXvwNldOc%2BR%2FTbWaSBerbxJVW%2FIAiBZK5YdDf3WiQKCb7XSIhaQw5oQeVv%2BPAbdRXirtTQh0Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMtRA3FYZG0nsp8E8yKtwDrsnjFWCyCJNl1LU6rOY7fNSi4JjD05TeyVo1LAi02nEL4VfodhuktHm8m%2FFrzFT8Ahp%2FIfXITh9EmS8%2FD437ExJ0Ab53IR7%2FQ8i7cloRiomrm1%2Bp2BUx5eVmUOeg2zEbpJt0Ms2JTTG8TJdyQ%2B0nFkVWnDklIMu%2BNILOuA3z%2FBXUXrHm15ITrZKQVMvmfwtP1%2B7q3xTHyrVyz9E1Whi0Xw9vZVsPunh4fJKhI3OWLOMaKxJY9z51yR8DvfEHuncPftt5oNtzovTrE1teQlZJdSEwrrMA9elsmJyo1Og9zluA0SvxmtcXA13ZNDWOBNmZ6mDW5Ioce66DZMnnvwtwbQhlm6%2F%2BjhTFtOEiP4nuD%2BqEIB2uaZbSRnNTeTR18XEPJgaB3jyDUTt%2FHxZgPKyie0WPLeGS%2BcDW%2FmQl4MGQ10PEWiJh1DNtuXUAAaN7nvnCuB9DCEYrI7VGEy4ACpGvozBSK67HkFSMg3%2FxI3iL1s6GbcVs4lp7QlF1bswHRqf7ymdmuihzJ7NQj%2BZeTRYRjs8GesPTTMOAtXIchwsS00LMSqytKxH%2FxwCd%2BTYs61tky7C60FuH%2FN4yLOdzkSiP6yW%2BUWyFobz3YB6hOhU3fjnAHfHWi%2Fqnevt617Yw2OuUwQY6pgGHszupXuPBLQ0wAkHmAd8ZOCkJh%2BwP2jtdF0Y%2Frjd2H7E28u2LAubrcg%2BbNekfiwgCUl0VTXAtVHnJ0GAo6Mq9V6ZKIYWufPuAXIub0SekW69LVV%2F9VEOlrUv53s5twTIGSn%2BNhQbj4lIPy0DSUrPeErEhe9YyQNxdVjj4LNUlhnQ4wA47AhML1vnKN%2B7UgR0Y2ugofa%2FwNRAFeA09YeJXWxEZpSZX&X-Amz-Signature=80e717e740befc3639e0611efa943845ec360d85c08a19b11660938fc1aa77b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQ6TRH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGan7ce2qOQhL9iwTLXvwNldOc%2BR%2FTbWaSBerbxJVW%2FIAiBZK5YdDf3WiQKCb7XSIhaQw5oQeVv%2BPAbdRXirtTQh0Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMtRA3FYZG0nsp8E8yKtwDrsnjFWCyCJNl1LU6rOY7fNSi4JjD05TeyVo1LAi02nEL4VfodhuktHm8m%2FFrzFT8Ahp%2FIfXITh9EmS8%2FD437ExJ0Ab53IR7%2FQ8i7cloRiomrm1%2Bp2BUx5eVmUOeg2zEbpJt0Ms2JTTG8TJdyQ%2B0nFkVWnDklIMu%2BNILOuA3z%2FBXUXrHm15ITrZKQVMvmfwtP1%2B7q3xTHyrVyz9E1Whi0Xw9vZVsPunh4fJKhI3OWLOMaKxJY9z51yR8DvfEHuncPftt5oNtzovTrE1teQlZJdSEwrrMA9elsmJyo1Og9zluA0SvxmtcXA13ZNDWOBNmZ6mDW5Ioce66DZMnnvwtwbQhlm6%2F%2BjhTFtOEiP4nuD%2BqEIB2uaZbSRnNTeTR18XEPJgaB3jyDUTt%2FHxZgPKyie0WPLeGS%2BcDW%2FmQl4MGQ10PEWiJh1DNtuXUAAaN7nvnCuB9DCEYrI7VGEy4ACpGvozBSK67HkFSMg3%2FxI3iL1s6GbcVs4lp7QlF1bswHRqf7ymdmuihzJ7NQj%2BZeTRYRjs8GesPTTMOAtXIchwsS00LMSqytKxH%2FxwCd%2BTYs61tky7C60FuH%2FN4yLOdzkSiP6yW%2BUWyFobz3YB6hOhU3fjnAHfHWi%2Fqnevt617Yw2OuUwQY6pgGHszupXuPBLQ0wAkHmAd8ZOCkJh%2BwP2jtdF0Y%2Frjd2H7E28u2LAubrcg%2BbNekfiwgCUl0VTXAtVHnJ0GAo6Mq9V6ZKIYWufPuAXIub0SekW69LVV%2F9VEOlrUv53s5twTIGSn%2BNhQbj4lIPy0DSUrPeErEhe9YyQNxdVjj4LNUlhnQ4wA47AhML1vnKN%2B7UgR0Y2ugofa%2FwNRAFeA09YeJXWxEZpSZX&X-Amz-Signature=aaf2af11e66d4487399934434f0eda92cfeba959e43d8d57b7d66a060546019f&X-Amz-SignedHeaders=host&x-id=GetObject)
