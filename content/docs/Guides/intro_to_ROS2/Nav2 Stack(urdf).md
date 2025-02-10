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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6I6KKZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJqLmD%2BzWLnZpcbNy6%2FMJiwC7YlOygGCmmt8rz%2FSDaEAiAKDVaJqIPXjl0KtVJ50BXt%2BfRo86zRPdMUhtczMct80yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCj3W%2FFN5%2BJsjV6WDKtwDnw9xXiknsKTo1l8eQ0KJhWh%2Buo%2FsjggHE1VAqCepceFmxtR7aZr57yS9wvJFhoJBpN6v%2FT4y6vWIIwXNNtcrzTdwzElKTFfUW%2BhG3SufHUJTIRLkO1NBrKow0s6EL6eGuDEmHhon0ZmYzE3fC7TBdIWMlTrq1O7rlLNH0nOK6W86FI5lwRjuDgizd4UyDnd5AMepa%2BGYSy9tuKzRW4a6JcSGDgVh%2Fcu4tB3V9w9lYmtZGv3TskURYV1PxFqxW5ndUkCesUOUs32jQ1iC8pN%2B8z9Lw5twlOrEZKkEWBVffHwZS%2FJjbVRpaLRifVlDA0Hox0u7N8ti%2FEmsYGUrgTbFkDH58KszO%2F6U6GO53491KiGF8CoGaQpZvWxgJZysZEIkWI0lYrSjzdjQej%2FcKLSVnvjgKtxjoOPinWVVCgy8pla7tRsEmRkwI15iW%2FC%2Fn%2Bnw6lCz28kP38uTXbQLASOU%2B6CBX1ZIUqxfufFmx4U3EIev8m1nQxecBi47yIZshrPpzpNVoP2kOOnxi34oCjeo8pvE1c%2Bdfo79UdptGE3bn9UVxd15SlF8fZY73edhOe91SP1sjPYZtDGWu8NNiuCYgDdiBuWbG7qJCfeBWuE50DFuiJuaiHhQS71OzAYwqYSovQY6pgFTorH%2FINm%2BaOkwQtppQOJyicT2vD0mvwl8Fvhjbsw17NJcdTXuHNiYegW%2B%2FNo0NCDufs0dVURQi8lGMF9rWhESJsj%2BLuJiSpv1xKUuQJ%2BHbXnWMffzxwy59e6xVl4RvnBlYvU5QhqwfUZTJ9wmxyHfQ%2BAG9bu5G6PkpftueuZ6ZMCUElaPwIjXlfdjaiuNkdYF1l1LIERZGJhhgw%2FjL5%2B0rFHL329j&X-Amz-Signature=b7db82e6c25ed5ecffebf8905a0f631da1f74fdee21f836af2ddfdda23f8d32b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6I6KKZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJqLmD%2BzWLnZpcbNy6%2FMJiwC7YlOygGCmmt8rz%2FSDaEAiAKDVaJqIPXjl0KtVJ50BXt%2BfRo86zRPdMUhtczMct80yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCj3W%2FFN5%2BJsjV6WDKtwDnw9xXiknsKTo1l8eQ0KJhWh%2Buo%2FsjggHE1VAqCepceFmxtR7aZr57yS9wvJFhoJBpN6v%2FT4y6vWIIwXNNtcrzTdwzElKTFfUW%2BhG3SufHUJTIRLkO1NBrKow0s6EL6eGuDEmHhon0ZmYzE3fC7TBdIWMlTrq1O7rlLNH0nOK6W86FI5lwRjuDgizd4UyDnd5AMepa%2BGYSy9tuKzRW4a6JcSGDgVh%2Fcu4tB3V9w9lYmtZGv3TskURYV1PxFqxW5ndUkCesUOUs32jQ1iC8pN%2B8z9Lw5twlOrEZKkEWBVffHwZS%2FJjbVRpaLRifVlDA0Hox0u7N8ti%2FEmsYGUrgTbFkDH58KszO%2F6U6GO53491KiGF8CoGaQpZvWxgJZysZEIkWI0lYrSjzdjQej%2FcKLSVnvjgKtxjoOPinWVVCgy8pla7tRsEmRkwI15iW%2FC%2Fn%2Bnw6lCz28kP38uTXbQLASOU%2B6CBX1ZIUqxfufFmx4U3EIev8m1nQxecBi47yIZshrPpzpNVoP2kOOnxi34oCjeo8pvE1c%2Bdfo79UdptGE3bn9UVxd15SlF8fZY73edhOe91SP1sjPYZtDGWu8NNiuCYgDdiBuWbG7qJCfeBWuE50DFuiJuaiHhQS71OzAYwqYSovQY6pgFTorH%2FINm%2BaOkwQtppQOJyicT2vD0mvwl8Fvhjbsw17NJcdTXuHNiYegW%2B%2FNo0NCDufs0dVURQi8lGMF9rWhESJsj%2BLuJiSpv1xKUuQJ%2BHbXnWMffzxwy59e6xVl4RvnBlYvU5QhqwfUZTJ9wmxyHfQ%2BAG9bu5G6PkpftueuZ6ZMCUElaPwIjXlfdjaiuNkdYF1l1LIERZGJhhgw%2FjL5%2B0rFHL329j&X-Amz-Signature=cd2fee0c1d5ddf949ef7f5341fddfa5239e6c9889227c003ce2609826d0c1675&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6I6KKZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJqLmD%2BzWLnZpcbNy6%2FMJiwC7YlOygGCmmt8rz%2FSDaEAiAKDVaJqIPXjl0KtVJ50BXt%2BfRo86zRPdMUhtczMct80yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCj3W%2FFN5%2BJsjV6WDKtwDnw9xXiknsKTo1l8eQ0KJhWh%2Buo%2FsjggHE1VAqCepceFmxtR7aZr57yS9wvJFhoJBpN6v%2FT4y6vWIIwXNNtcrzTdwzElKTFfUW%2BhG3SufHUJTIRLkO1NBrKow0s6EL6eGuDEmHhon0ZmYzE3fC7TBdIWMlTrq1O7rlLNH0nOK6W86FI5lwRjuDgizd4UyDnd5AMepa%2BGYSy9tuKzRW4a6JcSGDgVh%2Fcu4tB3V9w9lYmtZGv3TskURYV1PxFqxW5ndUkCesUOUs32jQ1iC8pN%2B8z9Lw5twlOrEZKkEWBVffHwZS%2FJjbVRpaLRifVlDA0Hox0u7N8ti%2FEmsYGUrgTbFkDH58KszO%2F6U6GO53491KiGF8CoGaQpZvWxgJZysZEIkWI0lYrSjzdjQej%2FcKLSVnvjgKtxjoOPinWVVCgy8pla7tRsEmRkwI15iW%2FC%2Fn%2Bnw6lCz28kP38uTXbQLASOU%2B6CBX1ZIUqxfufFmx4U3EIev8m1nQxecBi47yIZshrPpzpNVoP2kOOnxi34oCjeo8pvE1c%2Bdfo79UdptGE3bn9UVxd15SlF8fZY73edhOe91SP1sjPYZtDGWu8NNiuCYgDdiBuWbG7qJCfeBWuE50DFuiJuaiHhQS71OzAYwqYSovQY6pgFTorH%2FINm%2BaOkwQtppQOJyicT2vD0mvwl8Fvhjbsw17NJcdTXuHNiYegW%2B%2FNo0NCDufs0dVURQi8lGMF9rWhESJsj%2BLuJiSpv1xKUuQJ%2BHbXnWMffzxwy59e6xVl4RvnBlYvU5QhqwfUZTJ9wmxyHfQ%2BAG9bu5G6PkpftueuZ6ZMCUElaPwIjXlfdjaiuNkdYF1l1LIERZGJhhgw%2FjL5%2B0rFHL329j&X-Amz-Signature=b6004d01d02d61db2868678cd142483231561b1f227eaab1238c38086f726bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6I6KKZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJqLmD%2BzWLnZpcbNy6%2FMJiwC7YlOygGCmmt8rz%2FSDaEAiAKDVaJqIPXjl0KtVJ50BXt%2BfRo86zRPdMUhtczMct80yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCj3W%2FFN5%2BJsjV6WDKtwDnw9xXiknsKTo1l8eQ0KJhWh%2Buo%2FsjggHE1VAqCepceFmxtR7aZr57yS9wvJFhoJBpN6v%2FT4y6vWIIwXNNtcrzTdwzElKTFfUW%2BhG3SufHUJTIRLkO1NBrKow0s6EL6eGuDEmHhon0ZmYzE3fC7TBdIWMlTrq1O7rlLNH0nOK6W86FI5lwRjuDgizd4UyDnd5AMepa%2BGYSy9tuKzRW4a6JcSGDgVh%2Fcu4tB3V9w9lYmtZGv3TskURYV1PxFqxW5ndUkCesUOUs32jQ1iC8pN%2B8z9Lw5twlOrEZKkEWBVffHwZS%2FJjbVRpaLRifVlDA0Hox0u7N8ti%2FEmsYGUrgTbFkDH58KszO%2F6U6GO53491KiGF8CoGaQpZvWxgJZysZEIkWI0lYrSjzdjQej%2FcKLSVnvjgKtxjoOPinWVVCgy8pla7tRsEmRkwI15iW%2FC%2Fn%2Bnw6lCz28kP38uTXbQLASOU%2B6CBX1ZIUqxfufFmx4U3EIev8m1nQxecBi47yIZshrPpzpNVoP2kOOnxi34oCjeo8pvE1c%2Bdfo79UdptGE3bn9UVxd15SlF8fZY73edhOe91SP1sjPYZtDGWu8NNiuCYgDdiBuWbG7qJCfeBWuE50DFuiJuaiHhQS71OzAYwqYSovQY6pgFTorH%2FINm%2BaOkwQtppQOJyicT2vD0mvwl8Fvhjbsw17NJcdTXuHNiYegW%2B%2FNo0NCDufs0dVURQi8lGMF9rWhESJsj%2BLuJiSpv1xKUuQJ%2BHbXnWMffzxwy59e6xVl4RvnBlYvU5QhqwfUZTJ9wmxyHfQ%2BAG9bu5G6PkpftueuZ6ZMCUElaPwIjXlfdjaiuNkdYF1l1LIERZGJhhgw%2FjL5%2B0rFHL329j&X-Amz-Signature=095210df8507e6013bf02a0d3ddd22bd799b9b1a7c16c0ce9d13b4d679a43dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6I6KKZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJqLmD%2BzWLnZpcbNy6%2FMJiwC7YlOygGCmmt8rz%2FSDaEAiAKDVaJqIPXjl0KtVJ50BXt%2BfRo86zRPdMUhtczMct80yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCj3W%2FFN5%2BJsjV6WDKtwDnw9xXiknsKTo1l8eQ0KJhWh%2Buo%2FsjggHE1VAqCepceFmxtR7aZr57yS9wvJFhoJBpN6v%2FT4y6vWIIwXNNtcrzTdwzElKTFfUW%2BhG3SufHUJTIRLkO1NBrKow0s6EL6eGuDEmHhon0ZmYzE3fC7TBdIWMlTrq1O7rlLNH0nOK6W86FI5lwRjuDgizd4UyDnd5AMepa%2BGYSy9tuKzRW4a6JcSGDgVh%2Fcu4tB3V9w9lYmtZGv3TskURYV1PxFqxW5ndUkCesUOUs32jQ1iC8pN%2B8z9Lw5twlOrEZKkEWBVffHwZS%2FJjbVRpaLRifVlDA0Hox0u7N8ti%2FEmsYGUrgTbFkDH58KszO%2F6U6GO53491KiGF8CoGaQpZvWxgJZysZEIkWI0lYrSjzdjQej%2FcKLSVnvjgKtxjoOPinWVVCgy8pla7tRsEmRkwI15iW%2FC%2Fn%2Bnw6lCz28kP38uTXbQLASOU%2B6CBX1ZIUqxfufFmx4U3EIev8m1nQxecBi47yIZshrPpzpNVoP2kOOnxi34oCjeo8pvE1c%2Bdfo79UdptGE3bn9UVxd15SlF8fZY73edhOe91SP1sjPYZtDGWu8NNiuCYgDdiBuWbG7qJCfeBWuE50DFuiJuaiHhQS71OzAYwqYSovQY6pgFTorH%2FINm%2BaOkwQtppQOJyicT2vD0mvwl8Fvhjbsw17NJcdTXuHNiYegW%2B%2FNo0NCDufs0dVURQi8lGMF9rWhESJsj%2BLuJiSpv1xKUuQJ%2BHbXnWMffzxwy59e6xVl4RvnBlYvU5QhqwfUZTJ9wmxyHfQ%2BAG9bu5G6PkpftueuZ6ZMCUElaPwIjXlfdjaiuNkdYF1l1LIERZGJhhgw%2FjL5%2B0rFHL329j&X-Amz-Signature=d414c2839ffe48e77d90def7b96739358e42d5c1f7701d0f2cb9f880c17a2262&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6I6KKZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJqLmD%2BzWLnZpcbNy6%2FMJiwC7YlOygGCmmt8rz%2FSDaEAiAKDVaJqIPXjl0KtVJ50BXt%2BfRo86zRPdMUhtczMct80yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCj3W%2FFN5%2BJsjV6WDKtwDnw9xXiknsKTo1l8eQ0KJhWh%2Buo%2FsjggHE1VAqCepceFmxtR7aZr57yS9wvJFhoJBpN6v%2FT4y6vWIIwXNNtcrzTdwzElKTFfUW%2BhG3SufHUJTIRLkO1NBrKow0s6EL6eGuDEmHhon0ZmYzE3fC7TBdIWMlTrq1O7rlLNH0nOK6W86FI5lwRjuDgizd4UyDnd5AMepa%2BGYSy9tuKzRW4a6JcSGDgVh%2Fcu4tB3V9w9lYmtZGv3TskURYV1PxFqxW5ndUkCesUOUs32jQ1iC8pN%2B8z9Lw5twlOrEZKkEWBVffHwZS%2FJjbVRpaLRifVlDA0Hox0u7N8ti%2FEmsYGUrgTbFkDH58KszO%2F6U6GO53491KiGF8CoGaQpZvWxgJZysZEIkWI0lYrSjzdjQej%2FcKLSVnvjgKtxjoOPinWVVCgy8pla7tRsEmRkwI15iW%2FC%2Fn%2Bnw6lCz28kP38uTXbQLASOU%2B6CBX1ZIUqxfufFmx4U3EIev8m1nQxecBi47yIZshrPpzpNVoP2kOOnxi34oCjeo8pvE1c%2Bdfo79UdptGE3bn9UVxd15SlF8fZY73edhOe91SP1sjPYZtDGWu8NNiuCYgDdiBuWbG7qJCfeBWuE50DFuiJuaiHhQS71OzAYwqYSovQY6pgFTorH%2FINm%2BaOkwQtppQOJyicT2vD0mvwl8Fvhjbsw17NJcdTXuHNiYegW%2B%2FNo0NCDufs0dVURQi8lGMF9rWhESJsj%2BLuJiSpv1xKUuQJ%2BHbXnWMffzxwy59e6xVl4RvnBlYvU5QhqwfUZTJ9wmxyHfQ%2BAG9bu5G6PkpftueuZ6ZMCUElaPwIjXlfdjaiuNkdYF1l1LIERZGJhhgw%2FjL5%2B0rFHL329j&X-Amz-Signature=ab0a7ffbfa37a0323e3d9a878364269379d9dcec779ab060f4453bd6a343c509&X-Amz-SignedHeaders=host&x-id=GetObject)
