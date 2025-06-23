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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4WF23Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyDWyTZV3mrLOqOngRJXUkawO%2BhnjfbMm5gB0JLisY1AIgWSSCIhXOI3VewwyoiEHOz0jO7f1HewT9A3Qyh8LBPeAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwlw0bFS4vfGGLD6ircAztOsezydSOleI5ZV2ie%2BdoWqhgjfZpQC0Tf%2FCwtuPVTs72bYC2er%2FTXHP%2BHR1c0VNweuZZRFDUr8vFYlrH1ZyXBWA47oE30Rs%2BxLkDkFQ%2FD7Y9VxVjToXK1j2XSAfj6a9vWXTnUF7RP%2FjETPlkqnPFPfsytOyLZCmtl6nwCgz2uXJO%2FwmJbuEZRP2bkFTZPjhu8x%2Fup9oq49%2BMv94JtkMffHofjvbEgJ118dyinCmZ6YmfWtflbo4h%2B6zuOj4%2FqxfB2P89rhVPhQBD%2FCjhoPVeDR75%2FV3CyvhNlbIEtPDYvnw2Ca0cUBNulTpFsHX34YYUkvNhOnOW8IeWkGCwVCiY9FQ0bUoUzGFX2OaWwzSA4HS%2F%2BM3KVbOAAdjJW0QlmwqU%2FRL6RCP%2Be6vcE%2BOIkoxFtkBB8ZU%2F9B%2BRFxcn9vuLPkX%2F23HDBNuMBd1sbws%2BpJYLeRXnentfCt3hkla9%2Bu0ptpZkUFLudFhyDSZWTZYE2IKSrrHBCiepEmZ439VnWekf1PEAJDLQcYy2KydmvT9cXystDU6XO4JBC1OGEnjn2PcXz2GuFry3CuADQoNJpBvpCWhfdkG8kas8v4%2FwiEyZCSUgbQVI2csiWPNd6lwNkJV4O1oKvvGxWox5EMMev48IGOqUB%2Bcb9ur9dfP7c8Wlso2X8iKKZdBjMu%2BQfvzlLq4we0%2FvntcXk4ndugOWhzNapGO85zgQHWjuiJ6siFtUxwS4iuxxQalwMyQTW0RGDSYRV41x11l0aMe1pk%2FnrGySURDTXL6VjTEQ3GPO4vE8ok2bRtipiQKGrpZUJAlHp6IkPPvSwQYw7l%2F3yqDw8mtTlsfhfkPX8FWJCxFJXUDYDCL8hsQfuE1gz&X-Amz-Signature=206c08c3ce0876db7e5677523989063b458addd858330f2e684aea4bd48b672c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4WF23Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyDWyTZV3mrLOqOngRJXUkawO%2BhnjfbMm5gB0JLisY1AIgWSSCIhXOI3VewwyoiEHOz0jO7f1HewT9A3Qyh8LBPeAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwlw0bFS4vfGGLD6ircAztOsezydSOleI5ZV2ie%2BdoWqhgjfZpQC0Tf%2FCwtuPVTs72bYC2er%2FTXHP%2BHR1c0VNweuZZRFDUr8vFYlrH1ZyXBWA47oE30Rs%2BxLkDkFQ%2FD7Y9VxVjToXK1j2XSAfj6a9vWXTnUF7RP%2FjETPlkqnPFPfsytOyLZCmtl6nwCgz2uXJO%2FwmJbuEZRP2bkFTZPjhu8x%2Fup9oq49%2BMv94JtkMffHofjvbEgJ118dyinCmZ6YmfWtflbo4h%2B6zuOj4%2FqxfB2P89rhVPhQBD%2FCjhoPVeDR75%2FV3CyvhNlbIEtPDYvnw2Ca0cUBNulTpFsHX34YYUkvNhOnOW8IeWkGCwVCiY9FQ0bUoUzGFX2OaWwzSA4HS%2F%2BM3KVbOAAdjJW0QlmwqU%2FRL6RCP%2Be6vcE%2BOIkoxFtkBB8ZU%2F9B%2BRFxcn9vuLPkX%2F23HDBNuMBd1sbws%2BpJYLeRXnentfCt3hkla9%2Bu0ptpZkUFLudFhyDSZWTZYE2IKSrrHBCiepEmZ439VnWekf1PEAJDLQcYy2KydmvT9cXystDU6XO4JBC1OGEnjn2PcXz2GuFry3CuADQoNJpBvpCWhfdkG8kas8v4%2FwiEyZCSUgbQVI2csiWPNd6lwNkJV4O1oKvvGxWox5EMMev48IGOqUB%2Bcb9ur9dfP7c8Wlso2X8iKKZdBjMu%2BQfvzlLq4we0%2FvntcXk4ndugOWhzNapGO85zgQHWjuiJ6siFtUxwS4iuxxQalwMyQTW0RGDSYRV41x11l0aMe1pk%2FnrGySURDTXL6VjTEQ3GPO4vE8ok2bRtipiQKGrpZUJAlHp6IkPPvSwQYw7l%2F3yqDw8mtTlsfhfkPX8FWJCxFJXUDYDCL8hsQfuE1gz&X-Amz-Signature=df0447ef6dd77379f093cfe2d1ff03bcd2617f7e11285aa6b558e1badb783660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4WF23Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyDWyTZV3mrLOqOngRJXUkawO%2BhnjfbMm5gB0JLisY1AIgWSSCIhXOI3VewwyoiEHOz0jO7f1HewT9A3Qyh8LBPeAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwlw0bFS4vfGGLD6ircAztOsezydSOleI5ZV2ie%2BdoWqhgjfZpQC0Tf%2FCwtuPVTs72bYC2er%2FTXHP%2BHR1c0VNweuZZRFDUr8vFYlrH1ZyXBWA47oE30Rs%2BxLkDkFQ%2FD7Y9VxVjToXK1j2XSAfj6a9vWXTnUF7RP%2FjETPlkqnPFPfsytOyLZCmtl6nwCgz2uXJO%2FwmJbuEZRP2bkFTZPjhu8x%2Fup9oq49%2BMv94JtkMffHofjvbEgJ118dyinCmZ6YmfWtflbo4h%2B6zuOj4%2FqxfB2P89rhVPhQBD%2FCjhoPVeDR75%2FV3CyvhNlbIEtPDYvnw2Ca0cUBNulTpFsHX34YYUkvNhOnOW8IeWkGCwVCiY9FQ0bUoUzGFX2OaWwzSA4HS%2F%2BM3KVbOAAdjJW0QlmwqU%2FRL6RCP%2Be6vcE%2BOIkoxFtkBB8ZU%2F9B%2BRFxcn9vuLPkX%2F23HDBNuMBd1sbws%2BpJYLeRXnentfCt3hkla9%2Bu0ptpZkUFLudFhyDSZWTZYE2IKSrrHBCiepEmZ439VnWekf1PEAJDLQcYy2KydmvT9cXystDU6XO4JBC1OGEnjn2PcXz2GuFry3CuADQoNJpBvpCWhfdkG8kas8v4%2FwiEyZCSUgbQVI2csiWPNd6lwNkJV4O1oKvvGxWox5EMMev48IGOqUB%2Bcb9ur9dfP7c8Wlso2X8iKKZdBjMu%2BQfvzlLq4we0%2FvntcXk4ndugOWhzNapGO85zgQHWjuiJ6siFtUxwS4iuxxQalwMyQTW0RGDSYRV41x11l0aMe1pk%2FnrGySURDTXL6VjTEQ3GPO4vE8ok2bRtipiQKGrpZUJAlHp6IkPPvSwQYw7l%2F3yqDw8mtTlsfhfkPX8FWJCxFJXUDYDCL8hsQfuE1gz&X-Amz-Signature=a1902a5eb9b5c89d106371bde989778d50179cad7bd0877b0eaf0be6a79adeb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4WF23Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyDWyTZV3mrLOqOngRJXUkawO%2BhnjfbMm5gB0JLisY1AIgWSSCIhXOI3VewwyoiEHOz0jO7f1HewT9A3Qyh8LBPeAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwlw0bFS4vfGGLD6ircAztOsezydSOleI5ZV2ie%2BdoWqhgjfZpQC0Tf%2FCwtuPVTs72bYC2er%2FTXHP%2BHR1c0VNweuZZRFDUr8vFYlrH1ZyXBWA47oE30Rs%2BxLkDkFQ%2FD7Y9VxVjToXK1j2XSAfj6a9vWXTnUF7RP%2FjETPlkqnPFPfsytOyLZCmtl6nwCgz2uXJO%2FwmJbuEZRP2bkFTZPjhu8x%2Fup9oq49%2BMv94JtkMffHofjvbEgJ118dyinCmZ6YmfWtflbo4h%2B6zuOj4%2FqxfB2P89rhVPhQBD%2FCjhoPVeDR75%2FV3CyvhNlbIEtPDYvnw2Ca0cUBNulTpFsHX34YYUkvNhOnOW8IeWkGCwVCiY9FQ0bUoUzGFX2OaWwzSA4HS%2F%2BM3KVbOAAdjJW0QlmwqU%2FRL6RCP%2Be6vcE%2BOIkoxFtkBB8ZU%2F9B%2BRFxcn9vuLPkX%2F23HDBNuMBd1sbws%2BpJYLeRXnentfCt3hkla9%2Bu0ptpZkUFLudFhyDSZWTZYE2IKSrrHBCiepEmZ439VnWekf1PEAJDLQcYy2KydmvT9cXystDU6XO4JBC1OGEnjn2PcXz2GuFry3CuADQoNJpBvpCWhfdkG8kas8v4%2FwiEyZCSUgbQVI2csiWPNd6lwNkJV4O1oKvvGxWox5EMMev48IGOqUB%2Bcb9ur9dfP7c8Wlso2X8iKKZdBjMu%2BQfvzlLq4we0%2FvntcXk4ndugOWhzNapGO85zgQHWjuiJ6siFtUxwS4iuxxQalwMyQTW0RGDSYRV41x11l0aMe1pk%2FnrGySURDTXL6VjTEQ3GPO4vE8ok2bRtipiQKGrpZUJAlHp6IkPPvSwQYw7l%2F3yqDw8mtTlsfhfkPX8FWJCxFJXUDYDCL8hsQfuE1gz&X-Amz-Signature=e3ad915a418835756b9c1bea5312ba3b447e47f611d9cbae0ba2f962c13f3b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4WF23Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyDWyTZV3mrLOqOngRJXUkawO%2BhnjfbMm5gB0JLisY1AIgWSSCIhXOI3VewwyoiEHOz0jO7f1HewT9A3Qyh8LBPeAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwlw0bFS4vfGGLD6ircAztOsezydSOleI5ZV2ie%2BdoWqhgjfZpQC0Tf%2FCwtuPVTs72bYC2er%2FTXHP%2BHR1c0VNweuZZRFDUr8vFYlrH1ZyXBWA47oE30Rs%2BxLkDkFQ%2FD7Y9VxVjToXK1j2XSAfj6a9vWXTnUF7RP%2FjETPlkqnPFPfsytOyLZCmtl6nwCgz2uXJO%2FwmJbuEZRP2bkFTZPjhu8x%2Fup9oq49%2BMv94JtkMffHofjvbEgJ118dyinCmZ6YmfWtflbo4h%2B6zuOj4%2FqxfB2P89rhVPhQBD%2FCjhoPVeDR75%2FV3CyvhNlbIEtPDYvnw2Ca0cUBNulTpFsHX34YYUkvNhOnOW8IeWkGCwVCiY9FQ0bUoUzGFX2OaWwzSA4HS%2F%2BM3KVbOAAdjJW0QlmwqU%2FRL6RCP%2Be6vcE%2BOIkoxFtkBB8ZU%2F9B%2BRFxcn9vuLPkX%2F23HDBNuMBd1sbws%2BpJYLeRXnentfCt3hkla9%2Bu0ptpZkUFLudFhyDSZWTZYE2IKSrrHBCiepEmZ439VnWekf1PEAJDLQcYy2KydmvT9cXystDU6XO4JBC1OGEnjn2PcXz2GuFry3CuADQoNJpBvpCWhfdkG8kas8v4%2FwiEyZCSUgbQVI2csiWPNd6lwNkJV4O1oKvvGxWox5EMMev48IGOqUB%2Bcb9ur9dfP7c8Wlso2X8iKKZdBjMu%2BQfvzlLq4we0%2FvntcXk4ndugOWhzNapGO85zgQHWjuiJ6siFtUxwS4iuxxQalwMyQTW0RGDSYRV41x11l0aMe1pk%2FnrGySURDTXL6VjTEQ3GPO4vE8ok2bRtipiQKGrpZUJAlHp6IkPPvSwQYw7l%2F3yqDw8mtTlsfhfkPX8FWJCxFJXUDYDCL8hsQfuE1gz&X-Amz-Signature=84fcf0f7b2d020775b7e1e8650a0b1e12b4fca5ea7ce7f54b951214b2518d3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4WF23Z%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyDWyTZV3mrLOqOngRJXUkawO%2BhnjfbMm5gB0JLisY1AIgWSSCIhXOI3VewwyoiEHOz0jO7f1HewT9A3Qyh8LBPeAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwlw0bFS4vfGGLD6ircAztOsezydSOleI5ZV2ie%2BdoWqhgjfZpQC0Tf%2FCwtuPVTs72bYC2er%2FTXHP%2BHR1c0VNweuZZRFDUr8vFYlrH1ZyXBWA47oE30Rs%2BxLkDkFQ%2FD7Y9VxVjToXK1j2XSAfj6a9vWXTnUF7RP%2FjETPlkqnPFPfsytOyLZCmtl6nwCgz2uXJO%2FwmJbuEZRP2bkFTZPjhu8x%2Fup9oq49%2BMv94JtkMffHofjvbEgJ118dyinCmZ6YmfWtflbo4h%2B6zuOj4%2FqxfB2P89rhVPhQBD%2FCjhoPVeDR75%2FV3CyvhNlbIEtPDYvnw2Ca0cUBNulTpFsHX34YYUkvNhOnOW8IeWkGCwVCiY9FQ0bUoUzGFX2OaWwzSA4HS%2F%2BM3KVbOAAdjJW0QlmwqU%2FRL6RCP%2Be6vcE%2BOIkoxFtkBB8ZU%2F9B%2BRFxcn9vuLPkX%2F23HDBNuMBd1sbws%2BpJYLeRXnentfCt3hkla9%2Bu0ptpZkUFLudFhyDSZWTZYE2IKSrrHBCiepEmZ439VnWekf1PEAJDLQcYy2KydmvT9cXystDU6XO4JBC1OGEnjn2PcXz2GuFry3CuADQoNJpBvpCWhfdkG8kas8v4%2FwiEyZCSUgbQVI2csiWPNd6lwNkJV4O1oKvvGxWox5EMMev48IGOqUB%2Bcb9ur9dfP7c8Wlso2X8iKKZdBjMu%2BQfvzlLq4we0%2FvntcXk4ndugOWhzNapGO85zgQHWjuiJ6siFtUxwS4iuxxQalwMyQTW0RGDSYRV41x11l0aMe1pk%2FnrGySURDTXL6VjTEQ3GPO4vE8ok2bRtipiQKGrpZUJAlHp6IkPPvSwQYw7l%2F3yqDw8mtTlsfhfkPX8FWJCxFJXUDYDCL8hsQfuE1gz&X-Amz-Signature=7d114d7740ad967af7c2db5c8d619eb219365bca2dc6e6298e51de1a9e01f054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
