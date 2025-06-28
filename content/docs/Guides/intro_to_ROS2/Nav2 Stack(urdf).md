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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7AGH2S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsvxGtuvntPOWzLKRhJ53AbmUZEAM%2BOn56%2FArmPKi0AiAU5sfiP1a054h0B1svPA8kVPYIWZb%2B0C2ofFLhECs3rSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sezQP9DP%2FIBTfmUKtwDvIXoIKqRSql7HtV3gtyXkD1VKb2AFML%2FmCKAY08CSdGpLj3gqFMEohrd1BfJ1CCvLUdIZzasXs5fJd6qQhIg6MJdn97Iq2XbwaMh%2Bdij2yPX1DHksXhhGO7TWJ5esYLuXIh%2F6%2BFOBvWXUgXpN%2BosLX7WgY6Vo5wW3YhXUEihMiel1Qp%2FX18OLItToS5QypZ%2BRcFJyent8ZMx3OEsD%2FG%2FWkezmgWw%2BJ1UD%2BilOEP24FkuaHRx2dtn%2BMXT%2BpxSg%2FrHue%2Be%2F6Kyr44O40i05xlsoavsUUdlDzTMKMxmdGJ5sl9cv3PQH0gEaNHGpI0YyU9O7pmWFbPj79UTfglWxakA7TbFlPO6ss%2B8Orh70TdOUNRihITI0QeodNyd7MyC4ckPDgiY20JJoidxeTO4fLKGZVKHKkL%2FcM2bdzMioLr4lpBiV2NwtIUtzvbhUtZxMfPqU7FMCyuvJKlWTAbcdTNOE0aFFEWkHPYqf0UNBkBpN%2F9YHk8vBwVmBpEF64U9CqY3%2BZ%2F6OeUrl3NKr8tf8rKyrU9XKuNcqczXwI3svm5x1OQXek0YqMF6DJzPGEC3oTJKkgjRtNBDCLuoVnYTEjr9G0xIaO%2F%2FObWccPge4T32%2FY8daJRq8IhQx1qbXpswref9wgY6pgG1fqENMnFemxH4ouOuWtiR6TTMkhCrGFvzwkd%2Fq4NyrlgvAI5ajH7VBmF%2F38abEH%2B3%2Fmd5Rt0ZC3x40Ak8%2FyNUX8cPHSbOGwe8PW8vPql37k28jUa5azgfqDqfQmzG2PxIgAAaxFpLfEOGnODyKdlHiHAnDJgaee1%2FH3wnXcCa8HHgsrZ7PDbSfDM5lLJ4zj%2BMDhpJ60J%2BBcWGt4%2FtvITiH%2BMDft7P&X-Amz-Signature=250962e81b80b6ecce3066d3e64153c0fc8467d4d839ec1a3a13328ef1cb971b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7AGH2S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsvxGtuvntPOWzLKRhJ53AbmUZEAM%2BOn56%2FArmPKi0AiAU5sfiP1a054h0B1svPA8kVPYIWZb%2B0C2ofFLhECs3rSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sezQP9DP%2FIBTfmUKtwDvIXoIKqRSql7HtV3gtyXkD1VKb2AFML%2FmCKAY08CSdGpLj3gqFMEohrd1BfJ1CCvLUdIZzasXs5fJd6qQhIg6MJdn97Iq2XbwaMh%2Bdij2yPX1DHksXhhGO7TWJ5esYLuXIh%2F6%2BFOBvWXUgXpN%2BosLX7WgY6Vo5wW3YhXUEihMiel1Qp%2FX18OLItToS5QypZ%2BRcFJyent8ZMx3OEsD%2FG%2FWkezmgWw%2BJ1UD%2BilOEP24FkuaHRx2dtn%2BMXT%2BpxSg%2FrHue%2Be%2F6Kyr44O40i05xlsoavsUUdlDzTMKMxmdGJ5sl9cv3PQH0gEaNHGpI0YyU9O7pmWFbPj79UTfglWxakA7TbFlPO6ss%2B8Orh70TdOUNRihITI0QeodNyd7MyC4ckPDgiY20JJoidxeTO4fLKGZVKHKkL%2FcM2bdzMioLr4lpBiV2NwtIUtzvbhUtZxMfPqU7FMCyuvJKlWTAbcdTNOE0aFFEWkHPYqf0UNBkBpN%2F9YHk8vBwVmBpEF64U9CqY3%2BZ%2F6OeUrl3NKr8tf8rKyrU9XKuNcqczXwI3svm5x1OQXek0YqMF6DJzPGEC3oTJKkgjRtNBDCLuoVnYTEjr9G0xIaO%2F%2FObWccPge4T32%2FY8daJRq8IhQx1qbXpswref9wgY6pgG1fqENMnFemxH4ouOuWtiR6TTMkhCrGFvzwkd%2Fq4NyrlgvAI5ajH7VBmF%2F38abEH%2B3%2Fmd5Rt0ZC3x40Ak8%2FyNUX8cPHSbOGwe8PW8vPql37k28jUa5azgfqDqfQmzG2PxIgAAaxFpLfEOGnODyKdlHiHAnDJgaee1%2FH3wnXcCa8HHgsrZ7PDbSfDM5lLJ4zj%2BMDhpJ60J%2BBcWGt4%2FtvITiH%2BMDft7P&X-Amz-Signature=c040c5730c88a18c961917d9cd6a668b7b89bd5b8760cb4215a62fb588ab8a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7AGH2S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsvxGtuvntPOWzLKRhJ53AbmUZEAM%2BOn56%2FArmPKi0AiAU5sfiP1a054h0B1svPA8kVPYIWZb%2B0C2ofFLhECs3rSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sezQP9DP%2FIBTfmUKtwDvIXoIKqRSql7HtV3gtyXkD1VKb2AFML%2FmCKAY08CSdGpLj3gqFMEohrd1BfJ1CCvLUdIZzasXs5fJd6qQhIg6MJdn97Iq2XbwaMh%2Bdij2yPX1DHksXhhGO7TWJ5esYLuXIh%2F6%2BFOBvWXUgXpN%2BosLX7WgY6Vo5wW3YhXUEihMiel1Qp%2FX18OLItToS5QypZ%2BRcFJyent8ZMx3OEsD%2FG%2FWkezmgWw%2BJ1UD%2BilOEP24FkuaHRx2dtn%2BMXT%2BpxSg%2FrHue%2Be%2F6Kyr44O40i05xlsoavsUUdlDzTMKMxmdGJ5sl9cv3PQH0gEaNHGpI0YyU9O7pmWFbPj79UTfglWxakA7TbFlPO6ss%2B8Orh70TdOUNRihITI0QeodNyd7MyC4ckPDgiY20JJoidxeTO4fLKGZVKHKkL%2FcM2bdzMioLr4lpBiV2NwtIUtzvbhUtZxMfPqU7FMCyuvJKlWTAbcdTNOE0aFFEWkHPYqf0UNBkBpN%2F9YHk8vBwVmBpEF64U9CqY3%2BZ%2F6OeUrl3NKr8tf8rKyrU9XKuNcqczXwI3svm5x1OQXek0YqMF6DJzPGEC3oTJKkgjRtNBDCLuoVnYTEjr9G0xIaO%2F%2FObWccPge4T32%2FY8daJRq8IhQx1qbXpswref9wgY6pgG1fqENMnFemxH4ouOuWtiR6TTMkhCrGFvzwkd%2Fq4NyrlgvAI5ajH7VBmF%2F38abEH%2B3%2Fmd5Rt0ZC3x40Ak8%2FyNUX8cPHSbOGwe8PW8vPql37k28jUa5azgfqDqfQmzG2PxIgAAaxFpLfEOGnODyKdlHiHAnDJgaee1%2FH3wnXcCa8HHgsrZ7PDbSfDM5lLJ4zj%2BMDhpJ60J%2BBcWGt4%2FtvITiH%2BMDft7P&X-Amz-Signature=efbf03d5fe5eb63de028115df6e8de6de69f57ca7a834a5fd64eea4dff964c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7AGH2S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsvxGtuvntPOWzLKRhJ53AbmUZEAM%2BOn56%2FArmPKi0AiAU5sfiP1a054h0B1svPA8kVPYIWZb%2B0C2ofFLhECs3rSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sezQP9DP%2FIBTfmUKtwDvIXoIKqRSql7HtV3gtyXkD1VKb2AFML%2FmCKAY08CSdGpLj3gqFMEohrd1BfJ1CCvLUdIZzasXs5fJd6qQhIg6MJdn97Iq2XbwaMh%2Bdij2yPX1DHksXhhGO7TWJ5esYLuXIh%2F6%2BFOBvWXUgXpN%2BosLX7WgY6Vo5wW3YhXUEihMiel1Qp%2FX18OLItToS5QypZ%2BRcFJyent8ZMx3OEsD%2FG%2FWkezmgWw%2BJ1UD%2BilOEP24FkuaHRx2dtn%2BMXT%2BpxSg%2FrHue%2Be%2F6Kyr44O40i05xlsoavsUUdlDzTMKMxmdGJ5sl9cv3PQH0gEaNHGpI0YyU9O7pmWFbPj79UTfglWxakA7TbFlPO6ss%2B8Orh70TdOUNRihITI0QeodNyd7MyC4ckPDgiY20JJoidxeTO4fLKGZVKHKkL%2FcM2bdzMioLr4lpBiV2NwtIUtzvbhUtZxMfPqU7FMCyuvJKlWTAbcdTNOE0aFFEWkHPYqf0UNBkBpN%2F9YHk8vBwVmBpEF64U9CqY3%2BZ%2F6OeUrl3NKr8tf8rKyrU9XKuNcqczXwI3svm5x1OQXek0YqMF6DJzPGEC3oTJKkgjRtNBDCLuoVnYTEjr9G0xIaO%2F%2FObWccPge4T32%2FY8daJRq8IhQx1qbXpswref9wgY6pgG1fqENMnFemxH4ouOuWtiR6TTMkhCrGFvzwkd%2Fq4NyrlgvAI5ajH7VBmF%2F38abEH%2B3%2Fmd5Rt0ZC3x40Ak8%2FyNUX8cPHSbOGwe8PW8vPql37k28jUa5azgfqDqfQmzG2PxIgAAaxFpLfEOGnODyKdlHiHAnDJgaee1%2FH3wnXcCa8HHgsrZ7PDbSfDM5lLJ4zj%2BMDhpJ60J%2BBcWGt4%2FtvITiH%2BMDft7P&X-Amz-Signature=753ec376fd0b7ce9c40210683aaa763996f3c4ce242c9d2c7ac8f8d90d8f120f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7AGH2S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsvxGtuvntPOWzLKRhJ53AbmUZEAM%2BOn56%2FArmPKi0AiAU5sfiP1a054h0B1svPA8kVPYIWZb%2B0C2ofFLhECs3rSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sezQP9DP%2FIBTfmUKtwDvIXoIKqRSql7HtV3gtyXkD1VKb2AFML%2FmCKAY08CSdGpLj3gqFMEohrd1BfJ1CCvLUdIZzasXs5fJd6qQhIg6MJdn97Iq2XbwaMh%2Bdij2yPX1DHksXhhGO7TWJ5esYLuXIh%2F6%2BFOBvWXUgXpN%2BosLX7WgY6Vo5wW3YhXUEihMiel1Qp%2FX18OLItToS5QypZ%2BRcFJyent8ZMx3OEsD%2FG%2FWkezmgWw%2BJ1UD%2BilOEP24FkuaHRx2dtn%2BMXT%2BpxSg%2FrHue%2Be%2F6Kyr44O40i05xlsoavsUUdlDzTMKMxmdGJ5sl9cv3PQH0gEaNHGpI0YyU9O7pmWFbPj79UTfglWxakA7TbFlPO6ss%2B8Orh70TdOUNRihITI0QeodNyd7MyC4ckPDgiY20JJoidxeTO4fLKGZVKHKkL%2FcM2bdzMioLr4lpBiV2NwtIUtzvbhUtZxMfPqU7FMCyuvJKlWTAbcdTNOE0aFFEWkHPYqf0UNBkBpN%2F9YHk8vBwVmBpEF64U9CqY3%2BZ%2F6OeUrl3NKr8tf8rKyrU9XKuNcqczXwI3svm5x1OQXek0YqMF6DJzPGEC3oTJKkgjRtNBDCLuoVnYTEjr9G0xIaO%2F%2FObWccPge4T32%2FY8daJRq8IhQx1qbXpswref9wgY6pgG1fqENMnFemxH4ouOuWtiR6TTMkhCrGFvzwkd%2Fq4NyrlgvAI5ajH7VBmF%2F38abEH%2B3%2Fmd5Rt0ZC3x40Ak8%2FyNUX8cPHSbOGwe8PW8vPql37k28jUa5azgfqDqfQmzG2PxIgAAaxFpLfEOGnODyKdlHiHAnDJgaee1%2FH3wnXcCa8HHgsrZ7PDbSfDM5lLJ4zj%2BMDhpJ60J%2BBcWGt4%2FtvITiH%2BMDft7P&X-Amz-Signature=362033746f09135cc48603b1c7e5ee3c1af4a25f6784faa53c702c4e8d099a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7AGH2S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BsvxGtuvntPOWzLKRhJ53AbmUZEAM%2BOn56%2FArmPKi0AiAU5sfiP1a054h0B1svPA8kVPYIWZb%2B0C2ofFLhECs3rSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6sezQP9DP%2FIBTfmUKtwDvIXoIKqRSql7HtV3gtyXkD1VKb2AFML%2FmCKAY08CSdGpLj3gqFMEohrd1BfJ1CCvLUdIZzasXs5fJd6qQhIg6MJdn97Iq2XbwaMh%2Bdij2yPX1DHksXhhGO7TWJ5esYLuXIh%2F6%2BFOBvWXUgXpN%2BosLX7WgY6Vo5wW3YhXUEihMiel1Qp%2FX18OLItToS5QypZ%2BRcFJyent8ZMx3OEsD%2FG%2FWkezmgWw%2BJ1UD%2BilOEP24FkuaHRx2dtn%2BMXT%2BpxSg%2FrHue%2Be%2F6Kyr44O40i05xlsoavsUUdlDzTMKMxmdGJ5sl9cv3PQH0gEaNHGpI0YyU9O7pmWFbPj79UTfglWxakA7TbFlPO6ss%2B8Orh70TdOUNRihITI0QeodNyd7MyC4ckPDgiY20JJoidxeTO4fLKGZVKHKkL%2FcM2bdzMioLr4lpBiV2NwtIUtzvbhUtZxMfPqU7FMCyuvJKlWTAbcdTNOE0aFFEWkHPYqf0UNBkBpN%2F9YHk8vBwVmBpEF64U9CqY3%2BZ%2F6OeUrl3NKr8tf8rKyrU9XKuNcqczXwI3svm5x1OQXek0YqMF6DJzPGEC3oTJKkgjRtNBDCLuoVnYTEjr9G0xIaO%2F%2FObWccPge4T32%2FY8daJRq8IhQx1qbXpswref9wgY6pgG1fqENMnFemxH4ouOuWtiR6TTMkhCrGFvzwkd%2Fq4NyrlgvAI5ajH7VBmF%2F38abEH%2B3%2Fmd5Rt0ZC3x40Ak8%2FyNUX8cPHSbOGwe8PW8vPql37k28jUa5azgfqDqfQmzG2PxIgAAaxFpLfEOGnODyKdlHiHAnDJgaee1%2FH3wnXcCa8HHgsrZ7PDbSfDM5lLJ4zj%2BMDhpJ60J%2BBcWGt4%2FtvITiH%2BMDft7P&X-Amz-Signature=1e7a543ce446ac4a3d91e4d341c688e9955aaf838525f62f2f6ccacfdc7746c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
