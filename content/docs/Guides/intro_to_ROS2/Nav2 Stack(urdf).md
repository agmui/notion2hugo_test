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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4EJ32O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC1eaxw5mUOHsA70oq7fxTLC3gyUtLa76ejyq5SOUxFMAiBr6pVO3tDi3YyPow15YjryKGfgcxHJyps5ByqR2ipRVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVqiuXfwcSleNZDJGKtwDsgMAIVX6AT1kSbgTTMlpuDvqdQwNv0FHqD3nbfDDTewpcZU71Lk2V2997BAWGogc5y2iTtISHDDWpTUPmh42SkkgsbZQ087%2FopZspq6p8q7CO4hHFDESYDULZqbJlRnAElqi5JFjLMnPR7y9Y2UOWKhsy0gcrVWbx0No0xxkMeO1%2Fg5Ce7AJE06DnLmPSK8KCXWpygiLCouog4HWwSs2E1dcRlobZ%2BWRNSn25%2BncWwS2HfuMgWqcbwvNoGXySvI1rxwOOlIoOlDOZbh8cazz7BZodtmXlpk%2BDZTJotMpqL2O8PCyrBOlufYhQFbkWnSWx8fPbLmmRR5TGAkohF1%2BulE17AGqRVifk3eJjU2UHkY0L%2B9c4Y7I3IheE0IgkvookXs3z7viM233gf%2BwZiuT9VTsN41TnFmpnCVtL8jMeF1VpIUsOi7ELKvE%2FL1dH17BGfGpqjnnojnCNPjP96xaSDkvcPbb%2Fafhxg%2F%2FzrwBo85nYh0D6ikLgm6v62c%2ByI9ZL4yL1VzDLBBeRajhW%2BAZeqd3LW9lSMJKXuRTpwARE9aOUmCCCWuu2vw8n4q0Ox0Z%2B3zixGQ00q5D96Kjr0HKwpHMAl7r74hwSK3G3UwqCXJWXUOXtrbE33PMSF8wg4u2vgY6pgEOJDrDHl22G26rghAMNSQlsvlisKSlk3goV%2FOKIbMF6YejFTpEGeKydUbHw7LHxJ65faMuLqXDH2ROqGtKBnf6jOQtNIAAfS81qH0dnhIPQXAqTp5bLmScitvpRXWrDQyfN3kW3n3aSrHqp21r8jfpZrjW2mcHDYAnAe3hNQcAxWQOjXPY7%2FXB%2BSwKLYk%2B5sqMaJLaIGMY0O%2FMDGnxDfNXLi5xLtoE&X-Amz-Signature=d3847ed2c1940f1bf1f4e4fbdd6b8b5af84ae72b6f988053273385d9959a414e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4EJ32O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC1eaxw5mUOHsA70oq7fxTLC3gyUtLa76ejyq5SOUxFMAiBr6pVO3tDi3YyPow15YjryKGfgcxHJyps5ByqR2ipRVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVqiuXfwcSleNZDJGKtwDsgMAIVX6AT1kSbgTTMlpuDvqdQwNv0FHqD3nbfDDTewpcZU71Lk2V2997BAWGogc5y2iTtISHDDWpTUPmh42SkkgsbZQ087%2FopZspq6p8q7CO4hHFDESYDULZqbJlRnAElqi5JFjLMnPR7y9Y2UOWKhsy0gcrVWbx0No0xxkMeO1%2Fg5Ce7AJE06DnLmPSK8KCXWpygiLCouog4HWwSs2E1dcRlobZ%2BWRNSn25%2BncWwS2HfuMgWqcbwvNoGXySvI1rxwOOlIoOlDOZbh8cazz7BZodtmXlpk%2BDZTJotMpqL2O8PCyrBOlufYhQFbkWnSWx8fPbLmmRR5TGAkohF1%2BulE17AGqRVifk3eJjU2UHkY0L%2B9c4Y7I3IheE0IgkvookXs3z7viM233gf%2BwZiuT9VTsN41TnFmpnCVtL8jMeF1VpIUsOi7ELKvE%2FL1dH17BGfGpqjnnojnCNPjP96xaSDkvcPbb%2Fafhxg%2F%2FzrwBo85nYh0D6ikLgm6v62c%2ByI9ZL4yL1VzDLBBeRajhW%2BAZeqd3LW9lSMJKXuRTpwARE9aOUmCCCWuu2vw8n4q0Ox0Z%2B3zixGQ00q5D96Kjr0HKwpHMAl7r74hwSK3G3UwqCXJWXUOXtrbE33PMSF8wg4u2vgY6pgEOJDrDHl22G26rghAMNSQlsvlisKSlk3goV%2FOKIbMF6YejFTpEGeKydUbHw7LHxJ65faMuLqXDH2ROqGtKBnf6jOQtNIAAfS81qH0dnhIPQXAqTp5bLmScitvpRXWrDQyfN3kW3n3aSrHqp21r8jfpZrjW2mcHDYAnAe3hNQcAxWQOjXPY7%2FXB%2BSwKLYk%2B5sqMaJLaIGMY0O%2FMDGnxDfNXLi5xLtoE&X-Amz-Signature=5a6a5e51c2d5328491e5765f5aae778245df40a657cf00cc308db90a0ae9f9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4EJ32O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC1eaxw5mUOHsA70oq7fxTLC3gyUtLa76ejyq5SOUxFMAiBr6pVO3tDi3YyPow15YjryKGfgcxHJyps5ByqR2ipRVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVqiuXfwcSleNZDJGKtwDsgMAIVX6AT1kSbgTTMlpuDvqdQwNv0FHqD3nbfDDTewpcZU71Lk2V2997BAWGogc5y2iTtISHDDWpTUPmh42SkkgsbZQ087%2FopZspq6p8q7CO4hHFDESYDULZqbJlRnAElqi5JFjLMnPR7y9Y2UOWKhsy0gcrVWbx0No0xxkMeO1%2Fg5Ce7AJE06DnLmPSK8KCXWpygiLCouog4HWwSs2E1dcRlobZ%2BWRNSn25%2BncWwS2HfuMgWqcbwvNoGXySvI1rxwOOlIoOlDOZbh8cazz7BZodtmXlpk%2BDZTJotMpqL2O8PCyrBOlufYhQFbkWnSWx8fPbLmmRR5TGAkohF1%2BulE17AGqRVifk3eJjU2UHkY0L%2B9c4Y7I3IheE0IgkvookXs3z7viM233gf%2BwZiuT9VTsN41TnFmpnCVtL8jMeF1VpIUsOi7ELKvE%2FL1dH17BGfGpqjnnojnCNPjP96xaSDkvcPbb%2Fafhxg%2F%2FzrwBo85nYh0D6ikLgm6v62c%2ByI9ZL4yL1VzDLBBeRajhW%2BAZeqd3LW9lSMJKXuRTpwARE9aOUmCCCWuu2vw8n4q0Ox0Z%2B3zixGQ00q5D96Kjr0HKwpHMAl7r74hwSK3G3UwqCXJWXUOXtrbE33PMSF8wg4u2vgY6pgEOJDrDHl22G26rghAMNSQlsvlisKSlk3goV%2FOKIbMF6YejFTpEGeKydUbHw7LHxJ65faMuLqXDH2ROqGtKBnf6jOQtNIAAfS81qH0dnhIPQXAqTp5bLmScitvpRXWrDQyfN3kW3n3aSrHqp21r8jfpZrjW2mcHDYAnAe3hNQcAxWQOjXPY7%2FXB%2BSwKLYk%2B5sqMaJLaIGMY0O%2FMDGnxDfNXLi5xLtoE&X-Amz-Signature=f02e9e358053ea375766a0f3107d4e7b56609c673ce4253a3ebfaae97d8014b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4EJ32O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC1eaxw5mUOHsA70oq7fxTLC3gyUtLa76ejyq5SOUxFMAiBr6pVO3tDi3YyPow15YjryKGfgcxHJyps5ByqR2ipRVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVqiuXfwcSleNZDJGKtwDsgMAIVX6AT1kSbgTTMlpuDvqdQwNv0FHqD3nbfDDTewpcZU71Lk2V2997BAWGogc5y2iTtISHDDWpTUPmh42SkkgsbZQ087%2FopZspq6p8q7CO4hHFDESYDULZqbJlRnAElqi5JFjLMnPR7y9Y2UOWKhsy0gcrVWbx0No0xxkMeO1%2Fg5Ce7AJE06DnLmPSK8KCXWpygiLCouog4HWwSs2E1dcRlobZ%2BWRNSn25%2BncWwS2HfuMgWqcbwvNoGXySvI1rxwOOlIoOlDOZbh8cazz7BZodtmXlpk%2BDZTJotMpqL2O8PCyrBOlufYhQFbkWnSWx8fPbLmmRR5TGAkohF1%2BulE17AGqRVifk3eJjU2UHkY0L%2B9c4Y7I3IheE0IgkvookXs3z7viM233gf%2BwZiuT9VTsN41TnFmpnCVtL8jMeF1VpIUsOi7ELKvE%2FL1dH17BGfGpqjnnojnCNPjP96xaSDkvcPbb%2Fafhxg%2F%2FzrwBo85nYh0D6ikLgm6v62c%2ByI9ZL4yL1VzDLBBeRajhW%2BAZeqd3LW9lSMJKXuRTpwARE9aOUmCCCWuu2vw8n4q0Ox0Z%2B3zixGQ00q5D96Kjr0HKwpHMAl7r74hwSK3G3UwqCXJWXUOXtrbE33PMSF8wg4u2vgY6pgEOJDrDHl22G26rghAMNSQlsvlisKSlk3goV%2FOKIbMF6YejFTpEGeKydUbHw7LHxJ65faMuLqXDH2ROqGtKBnf6jOQtNIAAfS81qH0dnhIPQXAqTp5bLmScitvpRXWrDQyfN3kW3n3aSrHqp21r8jfpZrjW2mcHDYAnAe3hNQcAxWQOjXPY7%2FXB%2BSwKLYk%2B5sqMaJLaIGMY0O%2FMDGnxDfNXLi5xLtoE&X-Amz-Signature=cac2f33eb240630cbecdab9aaddd176f61d35d29e63a6e02701d73cb87567a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4EJ32O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC1eaxw5mUOHsA70oq7fxTLC3gyUtLa76ejyq5SOUxFMAiBr6pVO3tDi3YyPow15YjryKGfgcxHJyps5ByqR2ipRVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVqiuXfwcSleNZDJGKtwDsgMAIVX6AT1kSbgTTMlpuDvqdQwNv0FHqD3nbfDDTewpcZU71Lk2V2997BAWGogc5y2iTtISHDDWpTUPmh42SkkgsbZQ087%2FopZspq6p8q7CO4hHFDESYDULZqbJlRnAElqi5JFjLMnPR7y9Y2UOWKhsy0gcrVWbx0No0xxkMeO1%2Fg5Ce7AJE06DnLmPSK8KCXWpygiLCouog4HWwSs2E1dcRlobZ%2BWRNSn25%2BncWwS2HfuMgWqcbwvNoGXySvI1rxwOOlIoOlDOZbh8cazz7BZodtmXlpk%2BDZTJotMpqL2O8PCyrBOlufYhQFbkWnSWx8fPbLmmRR5TGAkohF1%2BulE17AGqRVifk3eJjU2UHkY0L%2B9c4Y7I3IheE0IgkvookXs3z7viM233gf%2BwZiuT9VTsN41TnFmpnCVtL8jMeF1VpIUsOi7ELKvE%2FL1dH17BGfGpqjnnojnCNPjP96xaSDkvcPbb%2Fafhxg%2F%2FzrwBo85nYh0D6ikLgm6v62c%2ByI9ZL4yL1VzDLBBeRajhW%2BAZeqd3LW9lSMJKXuRTpwARE9aOUmCCCWuu2vw8n4q0Ox0Z%2B3zixGQ00q5D96Kjr0HKwpHMAl7r74hwSK3G3UwqCXJWXUOXtrbE33PMSF8wg4u2vgY6pgEOJDrDHl22G26rghAMNSQlsvlisKSlk3goV%2FOKIbMF6YejFTpEGeKydUbHw7LHxJ65faMuLqXDH2ROqGtKBnf6jOQtNIAAfS81qH0dnhIPQXAqTp5bLmScitvpRXWrDQyfN3kW3n3aSrHqp21r8jfpZrjW2mcHDYAnAe3hNQcAxWQOjXPY7%2FXB%2BSwKLYk%2B5sqMaJLaIGMY0O%2FMDGnxDfNXLi5xLtoE&X-Amz-Signature=7fe4b6b1a0d2d40e007b6b4195b8d62e7938ea90d1941f34e2b5d90b04058086&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4EJ32O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC1eaxw5mUOHsA70oq7fxTLC3gyUtLa76ejyq5SOUxFMAiBr6pVO3tDi3YyPow15YjryKGfgcxHJyps5ByqR2ipRVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVqiuXfwcSleNZDJGKtwDsgMAIVX6AT1kSbgTTMlpuDvqdQwNv0FHqD3nbfDDTewpcZU71Lk2V2997BAWGogc5y2iTtISHDDWpTUPmh42SkkgsbZQ087%2FopZspq6p8q7CO4hHFDESYDULZqbJlRnAElqi5JFjLMnPR7y9Y2UOWKhsy0gcrVWbx0No0xxkMeO1%2Fg5Ce7AJE06DnLmPSK8KCXWpygiLCouog4HWwSs2E1dcRlobZ%2BWRNSn25%2BncWwS2HfuMgWqcbwvNoGXySvI1rxwOOlIoOlDOZbh8cazz7BZodtmXlpk%2BDZTJotMpqL2O8PCyrBOlufYhQFbkWnSWx8fPbLmmRR5TGAkohF1%2BulE17AGqRVifk3eJjU2UHkY0L%2B9c4Y7I3IheE0IgkvookXs3z7viM233gf%2BwZiuT9VTsN41TnFmpnCVtL8jMeF1VpIUsOi7ELKvE%2FL1dH17BGfGpqjnnojnCNPjP96xaSDkvcPbb%2Fafhxg%2F%2FzrwBo85nYh0D6ikLgm6v62c%2ByI9ZL4yL1VzDLBBeRajhW%2BAZeqd3LW9lSMJKXuRTpwARE9aOUmCCCWuu2vw8n4q0Ox0Z%2B3zixGQ00q5D96Kjr0HKwpHMAl7r74hwSK3G3UwqCXJWXUOXtrbE33PMSF8wg4u2vgY6pgEOJDrDHl22G26rghAMNSQlsvlisKSlk3goV%2FOKIbMF6YejFTpEGeKydUbHw7LHxJ65faMuLqXDH2ROqGtKBnf6jOQtNIAAfS81qH0dnhIPQXAqTp5bLmScitvpRXWrDQyfN3kW3n3aSrHqp21r8jfpZrjW2mcHDYAnAe3hNQcAxWQOjXPY7%2FXB%2BSwKLYk%2B5sqMaJLaIGMY0O%2FMDGnxDfNXLi5xLtoE&X-Amz-Signature=204e6a498bce8a009620136ca8eecb3be552c4a1ff4269c82159d2cfd11bd351&X-Amz-SignedHeaders=host&x-id=GetObject)
