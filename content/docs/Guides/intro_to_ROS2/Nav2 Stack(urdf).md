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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITXFFJ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiCLmaKgKqqG7MDyrWPTOmCOmq3b%2FU%2BczrYSjxeQ%2FPnAiB2c0wLK%2FeUK3AMpTDlf6Eyb4LzR58WG3%2B%2Bkv5kBDCHziqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7N%2FGwaugUh%2FiiyyNKtwDTjRWb9nSN3X8a1BGL4w7Nj0lTeC7O7W5j%2BBGPofyMdeNxSNQCBJm8%2Fb9Wp2%2FnS1tTlvJuMEk13jIZ4FD5t1SSztCleW3yMC%2BcvK0ftZM2YyHcsWRBADdHuAMkV8T4q7ck0EgENbb5B80CTDOtS9wr2LKBJV8e%2BXcla6oPUrhHJDWm%2BKsaqjvmnrCJ7RLDOD75FZ9lOGCzjnrx7O6n8AAuUUSAniOu1U1l1zFAfaSSuOUlcoi2Ska86691cPKwdFRoqm56ennnBRZLGggNHcq2qYSMqFJnZA8QHl5kyDOYaT8oTN2DFnbhQzQtuf%2F2UyloS8%2Ful%2BVhuMge2q6rVV2s7%2BSXTOabzHHGAVz7marty29U7XDuX1ubHWN5vYc3zMwSCneIBhEWVsD6jLWeqoeetTrTBzTJe9GDFnw%2FslOv9w1Q2XVeW7zSQs1nf4J7BzaMt1DI77Gz1JSmb5r5H7%2FjTSRtbkeKFtLAHAih5J6fXvz13T3Wk4laI335%2BANq0udg71bT%2B8XsZ37IDLO21e%2BrWvubo%2Fz5fHgGoZZBnq4dktKQMlWFl6qXqAdmCw8XwNLbvioSfEX2metCQD1zU2Ydimjr4xvdGASuL1nIyjXVxr4sUZitiyG8%2FfY0c8wlJ%2BrwQY6pgHZ0Wc73ZKobtXH6Ss%2Fa%2FYS1QKrHc4blc8Lot%2BKD3nhYhlt5gs210JXKTLA7lAppcSa1TKAqYObWJNjOM5hYWO2V5aWbYcGbSuKDYq7tBCmAwkrxUqww%2BTtwWbgPtf3k8COsCiNHakP7fngrljJWYImUCJNHwVLv3iXLgpCxp6RlNwaDkfsOjJaFa2g8BMM7OTzWo9t2%2BwaKdexWDzCaQFZWvC%2B5%2BAi&X-Amz-Signature=b6fd4df0bb492a043c410b848a6e47324c00e0afa1dcb4fbcda24bd5452add83&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITXFFJ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiCLmaKgKqqG7MDyrWPTOmCOmq3b%2FU%2BczrYSjxeQ%2FPnAiB2c0wLK%2FeUK3AMpTDlf6Eyb4LzR58WG3%2B%2Bkv5kBDCHziqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7N%2FGwaugUh%2FiiyyNKtwDTjRWb9nSN3X8a1BGL4w7Nj0lTeC7O7W5j%2BBGPofyMdeNxSNQCBJm8%2Fb9Wp2%2FnS1tTlvJuMEk13jIZ4FD5t1SSztCleW3yMC%2BcvK0ftZM2YyHcsWRBADdHuAMkV8T4q7ck0EgENbb5B80CTDOtS9wr2LKBJV8e%2BXcla6oPUrhHJDWm%2BKsaqjvmnrCJ7RLDOD75FZ9lOGCzjnrx7O6n8AAuUUSAniOu1U1l1zFAfaSSuOUlcoi2Ska86691cPKwdFRoqm56ennnBRZLGggNHcq2qYSMqFJnZA8QHl5kyDOYaT8oTN2DFnbhQzQtuf%2F2UyloS8%2Ful%2BVhuMge2q6rVV2s7%2BSXTOabzHHGAVz7marty29U7XDuX1ubHWN5vYc3zMwSCneIBhEWVsD6jLWeqoeetTrTBzTJe9GDFnw%2FslOv9w1Q2XVeW7zSQs1nf4J7BzaMt1DI77Gz1JSmb5r5H7%2FjTSRtbkeKFtLAHAih5J6fXvz13T3Wk4laI335%2BANq0udg71bT%2B8XsZ37IDLO21e%2BrWvubo%2Fz5fHgGoZZBnq4dktKQMlWFl6qXqAdmCw8XwNLbvioSfEX2metCQD1zU2Ydimjr4xvdGASuL1nIyjXVxr4sUZitiyG8%2FfY0c8wlJ%2BrwQY6pgHZ0Wc73ZKobtXH6Ss%2Fa%2FYS1QKrHc4blc8Lot%2BKD3nhYhlt5gs210JXKTLA7lAppcSa1TKAqYObWJNjOM5hYWO2V5aWbYcGbSuKDYq7tBCmAwkrxUqww%2BTtwWbgPtf3k8COsCiNHakP7fngrljJWYImUCJNHwVLv3iXLgpCxp6RlNwaDkfsOjJaFa2g8BMM7OTzWo9t2%2BwaKdexWDzCaQFZWvC%2B5%2BAi&X-Amz-Signature=2db095f749de192b61e9eb1ca733a92b2667cf91b06d1b34ac4f5451a5ab3045&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITXFFJ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiCLmaKgKqqG7MDyrWPTOmCOmq3b%2FU%2BczrYSjxeQ%2FPnAiB2c0wLK%2FeUK3AMpTDlf6Eyb4LzR58WG3%2B%2Bkv5kBDCHziqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7N%2FGwaugUh%2FiiyyNKtwDTjRWb9nSN3X8a1BGL4w7Nj0lTeC7O7W5j%2BBGPofyMdeNxSNQCBJm8%2Fb9Wp2%2FnS1tTlvJuMEk13jIZ4FD5t1SSztCleW3yMC%2BcvK0ftZM2YyHcsWRBADdHuAMkV8T4q7ck0EgENbb5B80CTDOtS9wr2LKBJV8e%2BXcla6oPUrhHJDWm%2BKsaqjvmnrCJ7RLDOD75FZ9lOGCzjnrx7O6n8AAuUUSAniOu1U1l1zFAfaSSuOUlcoi2Ska86691cPKwdFRoqm56ennnBRZLGggNHcq2qYSMqFJnZA8QHl5kyDOYaT8oTN2DFnbhQzQtuf%2F2UyloS8%2Ful%2BVhuMge2q6rVV2s7%2BSXTOabzHHGAVz7marty29U7XDuX1ubHWN5vYc3zMwSCneIBhEWVsD6jLWeqoeetTrTBzTJe9GDFnw%2FslOv9w1Q2XVeW7zSQs1nf4J7BzaMt1DI77Gz1JSmb5r5H7%2FjTSRtbkeKFtLAHAih5J6fXvz13T3Wk4laI335%2BANq0udg71bT%2B8XsZ37IDLO21e%2BrWvubo%2Fz5fHgGoZZBnq4dktKQMlWFl6qXqAdmCw8XwNLbvioSfEX2metCQD1zU2Ydimjr4xvdGASuL1nIyjXVxr4sUZitiyG8%2FfY0c8wlJ%2BrwQY6pgHZ0Wc73ZKobtXH6Ss%2Fa%2FYS1QKrHc4blc8Lot%2BKD3nhYhlt5gs210JXKTLA7lAppcSa1TKAqYObWJNjOM5hYWO2V5aWbYcGbSuKDYq7tBCmAwkrxUqww%2BTtwWbgPtf3k8COsCiNHakP7fngrljJWYImUCJNHwVLv3iXLgpCxp6RlNwaDkfsOjJaFa2g8BMM7OTzWo9t2%2BwaKdexWDzCaQFZWvC%2B5%2BAi&X-Amz-Signature=02fdcc02f02db8070eca3039edf439861967d1849fad27e699b5a1e54a0978ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITXFFJ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiCLmaKgKqqG7MDyrWPTOmCOmq3b%2FU%2BczrYSjxeQ%2FPnAiB2c0wLK%2FeUK3AMpTDlf6Eyb4LzR58WG3%2B%2Bkv5kBDCHziqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7N%2FGwaugUh%2FiiyyNKtwDTjRWb9nSN3X8a1BGL4w7Nj0lTeC7O7W5j%2BBGPofyMdeNxSNQCBJm8%2Fb9Wp2%2FnS1tTlvJuMEk13jIZ4FD5t1SSztCleW3yMC%2BcvK0ftZM2YyHcsWRBADdHuAMkV8T4q7ck0EgENbb5B80CTDOtS9wr2LKBJV8e%2BXcla6oPUrhHJDWm%2BKsaqjvmnrCJ7RLDOD75FZ9lOGCzjnrx7O6n8AAuUUSAniOu1U1l1zFAfaSSuOUlcoi2Ska86691cPKwdFRoqm56ennnBRZLGggNHcq2qYSMqFJnZA8QHl5kyDOYaT8oTN2DFnbhQzQtuf%2F2UyloS8%2Ful%2BVhuMge2q6rVV2s7%2BSXTOabzHHGAVz7marty29U7XDuX1ubHWN5vYc3zMwSCneIBhEWVsD6jLWeqoeetTrTBzTJe9GDFnw%2FslOv9w1Q2XVeW7zSQs1nf4J7BzaMt1DI77Gz1JSmb5r5H7%2FjTSRtbkeKFtLAHAih5J6fXvz13T3Wk4laI335%2BANq0udg71bT%2B8XsZ37IDLO21e%2BrWvubo%2Fz5fHgGoZZBnq4dktKQMlWFl6qXqAdmCw8XwNLbvioSfEX2metCQD1zU2Ydimjr4xvdGASuL1nIyjXVxr4sUZitiyG8%2FfY0c8wlJ%2BrwQY6pgHZ0Wc73ZKobtXH6Ss%2Fa%2FYS1QKrHc4blc8Lot%2BKD3nhYhlt5gs210JXKTLA7lAppcSa1TKAqYObWJNjOM5hYWO2V5aWbYcGbSuKDYq7tBCmAwkrxUqww%2BTtwWbgPtf3k8COsCiNHakP7fngrljJWYImUCJNHwVLv3iXLgpCxp6RlNwaDkfsOjJaFa2g8BMM7OTzWo9t2%2BwaKdexWDzCaQFZWvC%2B5%2BAi&X-Amz-Signature=7e80b922b9f6516dea78a46f9ad5a393ad480b6a19c6ebe77248512008a3f1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITXFFJ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiCLmaKgKqqG7MDyrWPTOmCOmq3b%2FU%2BczrYSjxeQ%2FPnAiB2c0wLK%2FeUK3AMpTDlf6Eyb4LzR58WG3%2B%2Bkv5kBDCHziqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7N%2FGwaugUh%2FiiyyNKtwDTjRWb9nSN3X8a1BGL4w7Nj0lTeC7O7W5j%2BBGPofyMdeNxSNQCBJm8%2Fb9Wp2%2FnS1tTlvJuMEk13jIZ4FD5t1SSztCleW3yMC%2BcvK0ftZM2YyHcsWRBADdHuAMkV8T4q7ck0EgENbb5B80CTDOtS9wr2LKBJV8e%2BXcla6oPUrhHJDWm%2BKsaqjvmnrCJ7RLDOD75FZ9lOGCzjnrx7O6n8AAuUUSAniOu1U1l1zFAfaSSuOUlcoi2Ska86691cPKwdFRoqm56ennnBRZLGggNHcq2qYSMqFJnZA8QHl5kyDOYaT8oTN2DFnbhQzQtuf%2F2UyloS8%2Ful%2BVhuMge2q6rVV2s7%2BSXTOabzHHGAVz7marty29U7XDuX1ubHWN5vYc3zMwSCneIBhEWVsD6jLWeqoeetTrTBzTJe9GDFnw%2FslOv9w1Q2XVeW7zSQs1nf4J7BzaMt1DI77Gz1JSmb5r5H7%2FjTSRtbkeKFtLAHAih5J6fXvz13T3Wk4laI335%2BANq0udg71bT%2B8XsZ37IDLO21e%2BrWvubo%2Fz5fHgGoZZBnq4dktKQMlWFl6qXqAdmCw8XwNLbvioSfEX2metCQD1zU2Ydimjr4xvdGASuL1nIyjXVxr4sUZitiyG8%2FfY0c8wlJ%2BrwQY6pgHZ0Wc73ZKobtXH6Ss%2Fa%2FYS1QKrHc4blc8Lot%2BKD3nhYhlt5gs210JXKTLA7lAppcSa1TKAqYObWJNjOM5hYWO2V5aWbYcGbSuKDYq7tBCmAwkrxUqww%2BTtwWbgPtf3k8COsCiNHakP7fngrljJWYImUCJNHwVLv3iXLgpCxp6RlNwaDkfsOjJaFa2g8BMM7OTzWo9t2%2BwaKdexWDzCaQFZWvC%2B5%2BAi&X-Amz-Signature=84945d8e9357a53d84807ac80a44aa6629726a4382570f1d7039d32e9fed496b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITXFFJ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiCLmaKgKqqG7MDyrWPTOmCOmq3b%2FU%2BczrYSjxeQ%2FPnAiB2c0wLK%2FeUK3AMpTDlf6Eyb4LzR58WG3%2B%2Bkv5kBDCHziqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7N%2FGwaugUh%2FiiyyNKtwDTjRWb9nSN3X8a1BGL4w7Nj0lTeC7O7W5j%2BBGPofyMdeNxSNQCBJm8%2Fb9Wp2%2FnS1tTlvJuMEk13jIZ4FD5t1SSztCleW3yMC%2BcvK0ftZM2YyHcsWRBADdHuAMkV8T4q7ck0EgENbb5B80CTDOtS9wr2LKBJV8e%2BXcla6oPUrhHJDWm%2BKsaqjvmnrCJ7RLDOD75FZ9lOGCzjnrx7O6n8AAuUUSAniOu1U1l1zFAfaSSuOUlcoi2Ska86691cPKwdFRoqm56ennnBRZLGggNHcq2qYSMqFJnZA8QHl5kyDOYaT8oTN2DFnbhQzQtuf%2F2UyloS8%2Ful%2BVhuMge2q6rVV2s7%2BSXTOabzHHGAVz7marty29U7XDuX1ubHWN5vYc3zMwSCneIBhEWVsD6jLWeqoeetTrTBzTJe9GDFnw%2FslOv9w1Q2XVeW7zSQs1nf4J7BzaMt1DI77Gz1JSmb5r5H7%2FjTSRtbkeKFtLAHAih5J6fXvz13T3Wk4laI335%2BANq0udg71bT%2B8XsZ37IDLO21e%2BrWvubo%2Fz5fHgGoZZBnq4dktKQMlWFl6qXqAdmCw8XwNLbvioSfEX2metCQD1zU2Ydimjr4xvdGASuL1nIyjXVxr4sUZitiyG8%2FfY0c8wlJ%2BrwQY6pgHZ0Wc73ZKobtXH6Ss%2Fa%2FYS1QKrHc4blc8Lot%2BKD3nhYhlt5gs210JXKTLA7lAppcSa1TKAqYObWJNjOM5hYWO2V5aWbYcGbSuKDYq7tBCmAwkrxUqww%2BTtwWbgPtf3k8COsCiNHakP7fngrljJWYImUCJNHwVLv3iXLgpCxp6RlNwaDkfsOjJaFa2g8BMM7OTzWo9t2%2BwaKdexWDzCaQFZWvC%2B5%2BAi&X-Amz-Signature=1806d57ba6f0b997d36fd98b657a534eca6ccf5916710ee7b050105ab80c7338&X-Amz-SignedHeaders=host&x-id=GetObject)
