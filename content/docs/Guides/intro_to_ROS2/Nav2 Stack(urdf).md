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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W5WPO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARSxNZv%2Fr2giDejvpx%2BcKmqiy9RQzg1NoDrpA0lpJSuAiEAu7SQffXlzE1pEMuXvOUHXkwoEbLv%2BYEyrqQccVWn%2B88qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uq5QSglQKa8S2XyrcA%2FjDIw%2BUh6o8NaTgqcOGK2wSMqsYSiy701zqzQ%2F1LErieRGVDX9QKxi5yzv8W0uHqK%2B2twtBypaKwUBgEllphzMvoy5pDm4q%2FzPk8RNJpTnKT1WPjRJZhtyVGO8AphFtpEm5i2CUNjkGxRTD%2FVvjpPOZvht%2BYimb9GtA45V13VowG2YRIKAI1DhbZCPOdU2wwYtvnVFRpSXH7ZCt9IZB7awVWyV6LhO0zLcnxbTRNg0vtPx%2F1if8UeC4HEhLtrjc4URJJwZPjfBToyjVKKWjFPxVQg5cgdIFBK2kojDkRbi2r%2ByiCT1xqnfHJJdSP8CinO6yHc7U1IZZweKlzhrrKf2W1gdGTiWhVMNMrhf%2FPqoc39Y%2BveJTd9RZJJ24hyBla6vfhYi43eXJhgCPHWut%2Ba7zY4WTIDNsFLlbFXdpLwe8maM266h040FiZzSeL70YgnorULJ6ruXg66l7OB%2BAfaQe9tfWjj4Sfv4D7uDgeSbbyTpwgD8HRDGHTDlBZNhgzGLPumgoVIyRPEJwlLK9UcK16Q54ubeJBn3IhfVecI65QJox1M7x55fMRjQWaiP%2BZDcBLhhFogJdgJfeNdWBWwjLP1PfTb7WzQyikGx10aHmLqQWPbZwwOeFzAOmMMK9ucMGOqUBsU3ZEMk3tYrrQB4Xd%2BEENlPyUFtzrxAfPPpf8Ci2PPcy9veuLV5omWs1Dp9r1AjUJsn1Ty64XNwntdq89J%2BK11duAL6u40AR4gK0je9Je2yjCB%2BGyd8QkemJiCa0xJJSnBBUs4KzsDkbrQB8klqI5%2Fxj0MjsheMdOg4RK1%2B9tJc%2BrKr1mBCFnlwtTmzHM99zD1H%2FQReCjcqJCj%2BoQLmPUnzVQsTa&X-Amz-Signature=2acd5b912a21cb6ab4626436eea031de163dfb0d8df7fc6c17e0b7e14bf78ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W5WPO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARSxNZv%2Fr2giDejvpx%2BcKmqiy9RQzg1NoDrpA0lpJSuAiEAu7SQffXlzE1pEMuXvOUHXkwoEbLv%2BYEyrqQccVWn%2B88qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uq5QSglQKa8S2XyrcA%2FjDIw%2BUh6o8NaTgqcOGK2wSMqsYSiy701zqzQ%2F1LErieRGVDX9QKxi5yzv8W0uHqK%2B2twtBypaKwUBgEllphzMvoy5pDm4q%2FzPk8RNJpTnKT1WPjRJZhtyVGO8AphFtpEm5i2CUNjkGxRTD%2FVvjpPOZvht%2BYimb9GtA45V13VowG2YRIKAI1DhbZCPOdU2wwYtvnVFRpSXH7ZCt9IZB7awVWyV6LhO0zLcnxbTRNg0vtPx%2F1if8UeC4HEhLtrjc4URJJwZPjfBToyjVKKWjFPxVQg5cgdIFBK2kojDkRbi2r%2ByiCT1xqnfHJJdSP8CinO6yHc7U1IZZweKlzhrrKf2W1gdGTiWhVMNMrhf%2FPqoc39Y%2BveJTd9RZJJ24hyBla6vfhYi43eXJhgCPHWut%2Ba7zY4WTIDNsFLlbFXdpLwe8maM266h040FiZzSeL70YgnorULJ6ruXg66l7OB%2BAfaQe9tfWjj4Sfv4D7uDgeSbbyTpwgD8HRDGHTDlBZNhgzGLPumgoVIyRPEJwlLK9UcK16Q54ubeJBn3IhfVecI65QJox1M7x55fMRjQWaiP%2BZDcBLhhFogJdgJfeNdWBWwjLP1PfTb7WzQyikGx10aHmLqQWPbZwwOeFzAOmMMK9ucMGOqUBsU3ZEMk3tYrrQB4Xd%2BEENlPyUFtzrxAfPPpf8Ci2PPcy9veuLV5omWs1Dp9r1AjUJsn1Ty64XNwntdq89J%2BK11duAL6u40AR4gK0je9Je2yjCB%2BGyd8QkemJiCa0xJJSnBBUs4KzsDkbrQB8klqI5%2Fxj0MjsheMdOg4RK1%2B9tJc%2BrKr1mBCFnlwtTmzHM99zD1H%2FQReCjcqJCj%2BoQLmPUnzVQsTa&X-Amz-Signature=a9dbfa54da6f443010930382fee598e21f24e41271d893efab8cb44de5dcba1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W5WPO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARSxNZv%2Fr2giDejvpx%2BcKmqiy9RQzg1NoDrpA0lpJSuAiEAu7SQffXlzE1pEMuXvOUHXkwoEbLv%2BYEyrqQccVWn%2B88qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uq5QSglQKa8S2XyrcA%2FjDIw%2BUh6o8NaTgqcOGK2wSMqsYSiy701zqzQ%2F1LErieRGVDX9QKxi5yzv8W0uHqK%2B2twtBypaKwUBgEllphzMvoy5pDm4q%2FzPk8RNJpTnKT1WPjRJZhtyVGO8AphFtpEm5i2CUNjkGxRTD%2FVvjpPOZvht%2BYimb9GtA45V13VowG2YRIKAI1DhbZCPOdU2wwYtvnVFRpSXH7ZCt9IZB7awVWyV6LhO0zLcnxbTRNg0vtPx%2F1if8UeC4HEhLtrjc4URJJwZPjfBToyjVKKWjFPxVQg5cgdIFBK2kojDkRbi2r%2ByiCT1xqnfHJJdSP8CinO6yHc7U1IZZweKlzhrrKf2W1gdGTiWhVMNMrhf%2FPqoc39Y%2BveJTd9RZJJ24hyBla6vfhYi43eXJhgCPHWut%2Ba7zY4WTIDNsFLlbFXdpLwe8maM266h040FiZzSeL70YgnorULJ6ruXg66l7OB%2BAfaQe9tfWjj4Sfv4D7uDgeSbbyTpwgD8HRDGHTDlBZNhgzGLPumgoVIyRPEJwlLK9UcK16Q54ubeJBn3IhfVecI65QJox1M7x55fMRjQWaiP%2BZDcBLhhFogJdgJfeNdWBWwjLP1PfTb7WzQyikGx10aHmLqQWPbZwwOeFzAOmMMK9ucMGOqUBsU3ZEMk3tYrrQB4Xd%2BEENlPyUFtzrxAfPPpf8Ci2PPcy9veuLV5omWs1Dp9r1AjUJsn1Ty64XNwntdq89J%2BK11duAL6u40AR4gK0je9Je2yjCB%2BGyd8QkemJiCa0xJJSnBBUs4KzsDkbrQB8klqI5%2Fxj0MjsheMdOg4RK1%2B9tJc%2BrKr1mBCFnlwtTmzHM99zD1H%2FQReCjcqJCj%2BoQLmPUnzVQsTa&X-Amz-Signature=8f8c2f639a1b038e9d8d9840a8e8fd1281bd762bc96ddefea621c8049a46404d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W5WPO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARSxNZv%2Fr2giDejvpx%2BcKmqiy9RQzg1NoDrpA0lpJSuAiEAu7SQffXlzE1pEMuXvOUHXkwoEbLv%2BYEyrqQccVWn%2B88qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uq5QSglQKa8S2XyrcA%2FjDIw%2BUh6o8NaTgqcOGK2wSMqsYSiy701zqzQ%2F1LErieRGVDX9QKxi5yzv8W0uHqK%2B2twtBypaKwUBgEllphzMvoy5pDm4q%2FzPk8RNJpTnKT1WPjRJZhtyVGO8AphFtpEm5i2CUNjkGxRTD%2FVvjpPOZvht%2BYimb9GtA45V13VowG2YRIKAI1DhbZCPOdU2wwYtvnVFRpSXH7ZCt9IZB7awVWyV6LhO0zLcnxbTRNg0vtPx%2F1if8UeC4HEhLtrjc4URJJwZPjfBToyjVKKWjFPxVQg5cgdIFBK2kojDkRbi2r%2ByiCT1xqnfHJJdSP8CinO6yHc7U1IZZweKlzhrrKf2W1gdGTiWhVMNMrhf%2FPqoc39Y%2BveJTd9RZJJ24hyBla6vfhYi43eXJhgCPHWut%2Ba7zY4WTIDNsFLlbFXdpLwe8maM266h040FiZzSeL70YgnorULJ6ruXg66l7OB%2BAfaQe9tfWjj4Sfv4D7uDgeSbbyTpwgD8HRDGHTDlBZNhgzGLPumgoVIyRPEJwlLK9UcK16Q54ubeJBn3IhfVecI65QJox1M7x55fMRjQWaiP%2BZDcBLhhFogJdgJfeNdWBWwjLP1PfTb7WzQyikGx10aHmLqQWPbZwwOeFzAOmMMK9ucMGOqUBsU3ZEMk3tYrrQB4Xd%2BEENlPyUFtzrxAfPPpf8Ci2PPcy9veuLV5omWs1Dp9r1AjUJsn1Ty64XNwntdq89J%2BK11duAL6u40AR4gK0je9Je2yjCB%2BGyd8QkemJiCa0xJJSnBBUs4KzsDkbrQB8klqI5%2Fxj0MjsheMdOg4RK1%2B9tJc%2BrKr1mBCFnlwtTmzHM99zD1H%2FQReCjcqJCj%2BoQLmPUnzVQsTa&X-Amz-Signature=813291a1ee56d470ace4c5492752463b950feda8819be2add62c2774d440431a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W5WPO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARSxNZv%2Fr2giDejvpx%2BcKmqiy9RQzg1NoDrpA0lpJSuAiEAu7SQffXlzE1pEMuXvOUHXkwoEbLv%2BYEyrqQccVWn%2B88qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uq5QSglQKa8S2XyrcA%2FjDIw%2BUh6o8NaTgqcOGK2wSMqsYSiy701zqzQ%2F1LErieRGVDX9QKxi5yzv8W0uHqK%2B2twtBypaKwUBgEllphzMvoy5pDm4q%2FzPk8RNJpTnKT1WPjRJZhtyVGO8AphFtpEm5i2CUNjkGxRTD%2FVvjpPOZvht%2BYimb9GtA45V13VowG2YRIKAI1DhbZCPOdU2wwYtvnVFRpSXH7ZCt9IZB7awVWyV6LhO0zLcnxbTRNg0vtPx%2F1if8UeC4HEhLtrjc4URJJwZPjfBToyjVKKWjFPxVQg5cgdIFBK2kojDkRbi2r%2ByiCT1xqnfHJJdSP8CinO6yHc7U1IZZweKlzhrrKf2W1gdGTiWhVMNMrhf%2FPqoc39Y%2BveJTd9RZJJ24hyBla6vfhYi43eXJhgCPHWut%2Ba7zY4WTIDNsFLlbFXdpLwe8maM266h040FiZzSeL70YgnorULJ6ruXg66l7OB%2BAfaQe9tfWjj4Sfv4D7uDgeSbbyTpwgD8HRDGHTDlBZNhgzGLPumgoVIyRPEJwlLK9UcK16Q54ubeJBn3IhfVecI65QJox1M7x55fMRjQWaiP%2BZDcBLhhFogJdgJfeNdWBWwjLP1PfTb7WzQyikGx10aHmLqQWPbZwwOeFzAOmMMK9ucMGOqUBsU3ZEMk3tYrrQB4Xd%2BEENlPyUFtzrxAfPPpf8Ci2PPcy9veuLV5omWs1Dp9r1AjUJsn1Ty64XNwntdq89J%2BK11duAL6u40AR4gK0je9Je2yjCB%2BGyd8QkemJiCa0xJJSnBBUs4KzsDkbrQB8klqI5%2Fxj0MjsheMdOg4RK1%2B9tJc%2BrKr1mBCFnlwtTmzHM99zD1H%2FQReCjcqJCj%2BoQLmPUnzVQsTa&X-Amz-Signature=5838389c8c1113c144c94f9c5d59c5ff7eb45e76262752e09e3d691ac0e07a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2W5WPO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARSxNZv%2Fr2giDejvpx%2BcKmqiy9RQzg1NoDrpA0lpJSuAiEAu7SQffXlzE1pEMuXvOUHXkwoEbLv%2BYEyrqQccVWn%2B88qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5uq5QSglQKa8S2XyrcA%2FjDIw%2BUh6o8NaTgqcOGK2wSMqsYSiy701zqzQ%2F1LErieRGVDX9QKxi5yzv8W0uHqK%2B2twtBypaKwUBgEllphzMvoy5pDm4q%2FzPk8RNJpTnKT1WPjRJZhtyVGO8AphFtpEm5i2CUNjkGxRTD%2FVvjpPOZvht%2BYimb9GtA45V13VowG2YRIKAI1DhbZCPOdU2wwYtvnVFRpSXH7ZCt9IZB7awVWyV6LhO0zLcnxbTRNg0vtPx%2F1if8UeC4HEhLtrjc4URJJwZPjfBToyjVKKWjFPxVQg5cgdIFBK2kojDkRbi2r%2ByiCT1xqnfHJJdSP8CinO6yHc7U1IZZweKlzhrrKf2W1gdGTiWhVMNMrhf%2FPqoc39Y%2BveJTd9RZJJ24hyBla6vfhYi43eXJhgCPHWut%2Ba7zY4WTIDNsFLlbFXdpLwe8maM266h040FiZzSeL70YgnorULJ6ruXg66l7OB%2BAfaQe9tfWjj4Sfv4D7uDgeSbbyTpwgD8HRDGHTDlBZNhgzGLPumgoVIyRPEJwlLK9UcK16Q54ubeJBn3IhfVecI65QJox1M7x55fMRjQWaiP%2BZDcBLhhFogJdgJfeNdWBWwjLP1PfTb7WzQyikGx10aHmLqQWPbZwwOeFzAOmMMK9ucMGOqUBsU3ZEMk3tYrrQB4Xd%2BEENlPyUFtzrxAfPPpf8Ci2PPcy9veuLV5omWs1Dp9r1AjUJsn1Ty64XNwntdq89J%2BK11duAL6u40AR4gK0je9Je2yjCB%2BGyd8QkemJiCa0xJJSnBBUs4KzsDkbrQB8klqI5%2Fxj0MjsheMdOg4RK1%2B9tJc%2BrKr1mBCFnlwtTmzHM99zD1H%2FQReCjcqJCj%2BoQLmPUnzVQsTa&X-Amz-Signature=c32830421d07738b696fa94eef969fe8a2c0c4bdc7eb7d80fdffc60ef83cf06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
