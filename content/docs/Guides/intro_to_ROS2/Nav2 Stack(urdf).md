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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEY3WK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1zRaAfopG%2FZqJ35hxB%2FUwDT8dm9gtBehGzbiJI6r0qgIhAOJ8a1XArmnNfGn%2FMy8zZ7emyjUDH1%2Fu1YVOK1wp03cdKv8DCHsQABoMNjM3NDIzMTgzODA1IgzJF3Eo2EtoXNIWXysq3AMTsDJPD35X6vWy5a1rTngboTky360dLTkzqikye2FbaKgvAz25N%2BnxdUtAuJIEX7%2BUcBbNlneRSdgqb7xLj9dAM3IpuLBqKrHRNTfg9h12g97tUpuCfmo8I69rUCXgpwQwHdVi%2Ft9%2F9P69VEfDlTxymjBnoVv3y97RZfy%2BvOM1lp6iHGfKD9mu4s5d73Wrv3u10Gm8odSt7iyZWwva7HVnJ0Jw5zmwiAAv2YkBXbI9lgRyjm%2BV0SncyT97sPm%2FtSV7KkYVh2pe%2B3VtqyRX2u0XZsIqZ%2FHlT6BrdQn4WytMtBUYvawGBLqcA50ku82hBCyqk90t8QUZKexyMOuHww8Y6exH4CHqgHroAZ8ttePgHCdmUcxnUo4KXdVPsolCCBhK%2BMjfnvqI0sBbVXxydNOL8Y1lqf59QHbLqLLrhVlryyAP6VS8U4FUR4BimNbaUAQszH2dklyRzBhtTmm%2FAG%2Bt2fYA2wuuV1Cy7qFMTKnxN3Z6NmPs79jj1CO1yW6hX0kXt9ERj79x%2FLIqt6a4RnSQpnu6eO5y5%2FZSb4Kr1x%2Bj0Es5bBPAzORQ9Vhemv683q767qsvCzQgDeyRDM%2B0Kj1nCFuFKwiGVPAdFmqE0JBC6ZgXX0cC%2Fe9LKqNqqjD19c29BjqkAX7T3xh5KXZwKzNzH0aTkY0UWcOyJZKhi9sEIv%2FU8qIlNnoZ%2FjRsHn238tnkTVqzQK%2FP%2B3VkofMC81wasmwOQL3NY55U%2FdaTZV6DpaFFv02i%2BEFJh8nwlibvDcZJc3WTmUM9H3Rum%2FoSulinjFs7jq%2FyBgwyXxIW5ca939T%2BOrmC4mvnIq8G693PML9jUMvvkzpaHrmjhsDg9%2F9swkJvxH8jVqWX&X-Amz-Signature=35a2e7869ce85f8b370500c78a9e7e4538832807d519b9b954807729a08cdbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEY3WK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1zRaAfopG%2FZqJ35hxB%2FUwDT8dm9gtBehGzbiJI6r0qgIhAOJ8a1XArmnNfGn%2FMy8zZ7emyjUDH1%2Fu1YVOK1wp03cdKv8DCHsQABoMNjM3NDIzMTgzODA1IgzJF3Eo2EtoXNIWXysq3AMTsDJPD35X6vWy5a1rTngboTky360dLTkzqikye2FbaKgvAz25N%2BnxdUtAuJIEX7%2BUcBbNlneRSdgqb7xLj9dAM3IpuLBqKrHRNTfg9h12g97tUpuCfmo8I69rUCXgpwQwHdVi%2Ft9%2F9P69VEfDlTxymjBnoVv3y97RZfy%2BvOM1lp6iHGfKD9mu4s5d73Wrv3u10Gm8odSt7iyZWwva7HVnJ0Jw5zmwiAAv2YkBXbI9lgRyjm%2BV0SncyT97sPm%2FtSV7KkYVh2pe%2B3VtqyRX2u0XZsIqZ%2FHlT6BrdQn4WytMtBUYvawGBLqcA50ku82hBCyqk90t8QUZKexyMOuHww8Y6exH4CHqgHroAZ8ttePgHCdmUcxnUo4KXdVPsolCCBhK%2BMjfnvqI0sBbVXxydNOL8Y1lqf59QHbLqLLrhVlryyAP6VS8U4FUR4BimNbaUAQszH2dklyRzBhtTmm%2FAG%2Bt2fYA2wuuV1Cy7qFMTKnxN3Z6NmPs79jj1CO1yW6hX0kXt9ERj79x%2FLIqt6a4RnSQpnu6eO5y5%2FZSb4Kr1x%2Bj0Es5bBPAzORQ9Vhemv683q767qsvCzQgDeyRDM%2B0Kj1nCFuFKwiGVPAdFmqE0JBC6ZgXX0cC%2Fe9LKqNqqjD19c29BjqkAX7T3xh5KXZwKzNzH0aTkY0UWcOyJZKhi9sEIv%2FU8qIlNnoZ%2FjRsHn238tnkTVqzQK%2FP%2B3VkofMC81wasmwOQL3NY55U%2FdaTZV6DpaFFv02i%2BEFJh8nwlibvDcZJc3WTmUM9H3Rum%2FoSulinjFs7jq%2FyBgwyXxIW5ca939T%2BOrmC4mvnIq8G693PML9jUMvvkzpaHrmjhsDg9%2F9swkJvxH8jVqWX&X-Amz-Signature=be3a660138c89d077548b97ca5bff1ebceaa01a5dabdfb98fb99e6ff70e7d182&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEY3WK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1zRaAfopG%2FZqJ35hxB%2FUwDT8dm9gtBehGzbiJI6r0qgIhAOJ8a1XArmnNfGn%2FMy8zZ7emyjUDH1%2Fu1YVOK1wp03cdKv8DCHsQABoMNjM3NDIzMTgzODA1IgzJF3Eo2EtoXNIWXysq3AMTsDJPD35X6vWy5a1rTngboTky360dLTkzqikye2FbaKgvAz25N%2BnxdUtAuJIEX7%2BUcBbNlneRSdgqb7xLj9dAM3IpuLBqKrHRNTfg9h12g97tUpuCfmo8I69rUCXgpwQwHdVi%2Ft9%2F9P69VEfDlTxymjBnoVv3y97RZfy%2BvOM1lp6iHGfKD9mu4s5d73Wrv3u10Gm8odSt7iyZWwva7HVnJ0Jw5zmwiAAv2YkBXbI9lgRyjm%2BV0SncyT97sPm%2FtSV7KkYVh2pe%2B3VtqyRX2u0XZsIqZ%2FHlT6BrdQn4WytMtBUYvawGBLqcA50ku82hBCyqk90t8QUZKexyMOuHww8Y6exH4CHqgHroAZ8ttePgHCdmUcxnUo4KXdVPsolCCBhK%2BMjfnvqI0sBbVXxydNOL8Y1lqf59QHbLqLLrhVlryyAP6VS8U4FUR4BimNbaUAQszH2dklyRzBhtTmm%2FAG%2Bt2fYA2wuuV1Cy7qFMTKnxN3Z6NmPs79jj1CO1yW6hX0kXt9ERj79x%2FLIqt6a4RnSQpnu6eO5y5%2FZSb4Kr1x%2Bj0Es5bBPAzORQ9Vhemv683q767qsvCzQgDeyRDM%2B0Kj1nCFuFKwiGVPAdFmqE0JBC6ZgXX0cC%2Fe9LKqNqqjD19c29BjqkAX7T3xh5KXZwKzNzH0aTkY0UWcOyJZKhi9sEIv%2FU8qIlNnoZ%2FjRsHn238tnkTVqzQK%2FP%2B3VkofMC81wasmwOQL3NY55U%2FdaTZV6DpaFFv02i%2BEFJh8nwlibvDcZJc3WTmUM9H3Rum%2FoSulinjFs7jq%2FyBgwyXxIW5ca939T%2BOrmC4mvnIq8G693PML9jUMvvkzpaHrmjhsDg9%2F9swkJvxH8jVqWX&X-Amz-Signature=ab495af43cc3c8b8c63352923b0418e98094775386816eeed5366082dcc50b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEY3WK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1zRaAfopG%2FZqJ35hxB%2FUwDT8dm9gtBehGzbiJI6r0qgIhAOJ8a1XArmnNfGn%2FMy8zZ7emyjUDH1%2Fu1YVOK1wp03cdKv8DCHsQABoMNjM3NDIzMTgzODA1IgzJF3Eo2EtoXNIWXysq3AMTsDJPD35X6vWy5a1rTngboTky360dLTkzqikye2FbaKgvAz25N%2BnxdUtAuJIEX7%2BUcBbNlneRSdgqb7xLj9dAM3IpuLBqKrHRNTfg9h12g97tUpuCfmo8I69rUCXgpwQwHdVi%2Ft9%2F9P69VEfDlTxymjBnoVv3y97RZfy%2BvOM1lp6iHGfKD9mu4s5d73Wrv3u10Gm8odSt7iyZWwva7HVnJ0Jw5zmwiAAv2YkBXbI9lgRyjm%2BV0SncyT97sPm%2FtSV7KkYVh2pe%2B3VtqyRX2u0XZsIqZ%2FHlT6BrdQn4WytMtBUYvawGBLqcA50ku82hBCyqk90t8QUZKexyMOuHww8Y6exH4CHqgHroAZ8ttePgHCdmUcxnUo4KXdVPsolCCBhK%2BMjfnvqI0sBbVXxydNOL8Y1lqf59QHbLqLLrhVlryyAP6VS8U4FUR4BimNbaUAQszH2dklyRzBhtTmm%2FAG%2Bt2fYA2wuuV1Cy7qFMTKnxN3Z6NmPs79jj1CO1yW6hX0kXt9ERj79x%2FLIqt6a4RnSQpnu6eO5y5%2FZSb4Kr1x%2Bj0Es5bBPAzORQ9Vhemv683q767qsvCzQgDeyRDM%2B0Kj1nCFuFKwiGVPAdFmqE0JBC6ZgXX0cC%2Fe9LKqNqqjD19c29BjqkAX7T3xh5KXZwKzNzH0aTkY0UWcOyJZKhi9sEIv%2FU8qIlNnoZ%2FjRsHn238tnkTVqzQK%2FP%2B3VkofMC81wasmwOQL3NY55U%2FdaTZV6DpaFFv02i%2BEFJh8nwlibvDcZJc3WTmUM9H3Rum%2FoSulinjFs7jq%2FyBgwyXxIW5ca939T%2BOrmC4mvnIq8G693PML9jUMvvkzpaHrmjhsDg9%2F9swkJvxH8jVqWX&X-Amz-Signature=b89552da67fd99c4433c988ab3dc97a4b5e21cc529f9104b7fb4bc7bdd827fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEY3WK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1zRaAfopG%2FZqJ35hxB%2FUwDT8dm9gtBehGzbiJI6r0qgIhAOJ8a1XArmnNfGn%2FMy8zZ7emyjUDH1%2Fu1YVOK1wp03cdKv8DCHsQABoMNjM3NDIzMTgzODA1IgzJF3Eo2EtoXNIWXysq3AMTsDJPD35X6vWy5a1rTngboTky360dLTkzqikye2FbaKgvAz25N%2BnxdUtAuJIEX7%2BUcBbNlneRSdgqb7xLj9dAM3IpuLBqKrHRNTfg9h12g97tUpuCfmo8I69rUCXgpwQwHdVi%2Ft9%2F9P69VEfDlTxymjBnoVv3y97RZfy%2BvOM1lp6iHGfKD9mu4s5d73Wrv3u10Gm8odSt7iyZWwva7HVnJ0Jw5zmwiAAv2YkBXbI9lgRyjm%2BV0SncyT97sPm%2FtSV7KkYVh2pe%2B3VtqyRX2u0XZsIqZ%2FHlT6BrdQn4WytMtBUYvawGBLqcA50ku82hBCyqk90t8QUZKexyMOuHww8Y6exH4CHqgHroAZ8ttePgHCdmUcxnUo4KXdVPsolCCBhK%2BMjfnvqI0sBbVXxydNOL8Y1lqf59QHbLqLLrhVlryyAP6VS8U4FUR4BimNbaUAQszH2dklyRzBhtTmm%2FAG%2Bt2fYA2wuuV1Cy7qFMTKnxN3Z6NmPs79jj1CO1yW6hX0kXt9ERj79x%2FLIqt6a4RnSQpnu6eO5y5%2FZSb4Kr1x%2Bj0Es5bBPAzORQ9Vhemv683q767qsvCzQgDeyRDM%2B0Kj1nCFuFKwiGVPAdFmqE0JBC6ZgXX0cC%2Fe9LKqNqqjD19c29BjqkAX7T3xh5KXZwKzNzH0aTkY0UWcOyJZKhi9sEIv%2FU8qIlNnoZ%2FjRsHn238tnkTVqzQK%2FP%2B3VkofMC81wasmwOQL3NY55U%2FdaTZV6DpaFFv02i%2BEFJh8nwlibvDcZJc3WTmUM9H3Rum%2FoSulinjFs7jq%2FyBgwyXxIW5ca939T%2BOrmC4mvnIq8G693PML9jUMvvkzpaHrmjhsDg9%2F9swkJvxH8jVqWX&X-Amz-Signature=78d0c03bee6a72484fe99d2e991ad359fb6cb03bd5164484cb4af1f2bc60d35a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GEY3WK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC1zRaAfopG%2FZqJ35hxB%2FUwDT8dm9gtBehGzbiJI6r0qgIhAOJ8a1XArmnNfGn%2FMy8zZ7emyjUDH1%2Fu1YVOK1wp03cdKv8DCHsQABoMNjM3NDIzMTgzODA1IgzJF3Eo2EtoXNIWXysq3AMTsDJPD35X6vWy5a1rTngboTky360dLTkzqikye2FbaKgvAz25N%2BnxdUtAuJIEX7%2BUcBbNlneRSdgqb7xLj9dAM3IpuLBqKrHRNTfg9h12g97tUpuCfmo8I69rUCXgpwQwHdVi%2Ft9%2F9P69VEfDlTxymjBnoVv3y97RZfy%2BvOM1lp6iHGfKD9mu4s5d73Wrv3u10Gm8odSt7iyZWwva7HVnJ0Jw5zmwiAAv2YkBXbI9lgRyjm%2BV0SncyT97sPm%2FtSV7KkYVh2pe%2B3VtqyRX2u0XZsIqZ%2FHlT6BrdQn4WytMtBUYvawGBLqcA50ku82hBCyqk90t8QUZKexyMOuHww8Y6exH4CHqgHroAZ8ttePgHCdmUcxnUo4KXdVPsolCCBhK%2BMjfnvqI0sBbVXxydNOL8Y1lqf59QHbLqLLrhVlryyAP6VS8U4FUR4BimNbaUAQszH2dklyRzBhtTmm%2FAG%2Bt2fYA2wuuV1Cy7qFMTKnxN3Z6NmPs79jj1CO1yW6hX0kXt9ERj79x%2FLIqt6a4RnSQpnu6eO5y5%2FZSb4Kr1x%2Bj0Es5bBPAzORQ9Vhemv683q767qsvCzQgDeyRDM%2B0Kj1nCFuFKwiGVPAdFmqE0JBC6ZgXX0cC%2Fe9LKqNqqjD19c29BjqkAX7T3xh5KXZwKzNzH0aTkY0UWcOyJZKhi9sEIv%2FU8qIlNnoZ%2FjRsHn238tnkTVqzQK%2FP%2B3VkofMC81wasmwOQL3NY55U%2FdaTZV6DpaFFv02i%2BEFJh8nwlibvDcZJc3WTmUM9H3Rum%2FoSulinjFs7jq%2FyBgwyXxIW5ca939T%2BOrmC4mvnIq8G693PML9jUMvvkzpaHrmjhsDg9%2F9swkJvxH8jVqWX&X-Amz-Signature=d7b921f26916ec7ac0abdbdb98c2b7fd24fe27f3510a85dc4fc3461262fe3451&X-Amz-SignedHeaders=host&x-id=GetObject)
