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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWTB7KE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDq7hdVzQ%2BkQkdRNSr%2FsKUhFdqdixb8ZcMUPMtuzHxvVgIhANgYgKc0SQrusSwoYHkAIE1ncUYVN7sMDh1lFiQmujdSKv8DCGkQABoMNjM3NDIzMTgzODA1IgxTPoJ0HEh4zLMB2Kwq3APx3GQfqBswHfxK6Gre%2Br%2BUmLorzmmrxHOvxPSXX0reOcIwKJxLJLYoi20WRU5mY9KGIWCXlAUOVfg5WXXOqiHM0jj6Jp3Yv3Bt%2BBlf%2FcoSxKR5MND%2FgHaQb%2FliRfEoZr6ko9RTs7ldfhP8THyOvzWjvVyA%2BDr4AypUBl7ehEm1M8T8Lj2BZxuv1naSKNMA8nC8jn%2F3%2F75txysUxtldnd3i%2F12tXYAsFMG40eHY0DRfjR%2FxjRAGnpYdBvD7FEXsRfVmiy0PdPpajoPX6PbEL6HJu6c9bSvNNHaRjEJIyjRq%2FEWyjouMtLsH2Yb8oPYMFrUiuwNDNa1tl4P07nu6xwdGkcLJOdDVSVYKME1GwSLWKim2M2SzdrAWIuja7jbEf8%2Fiot8llRG9iLuEAAYKduVmCcSV%2FHRhJE%2BJKuTQ4%2B2ULdZkPqeevbsML4iAgxvan0XIHrr8QZMqzuXLXUQ7CIx%2BPq5MOVeg2yp6VvG91CPQUgGRA%2FlzgxAYEpV77sjwZCTKxdFoUaTj3pB2G5puEZ%2B08VpyitWJuUrVATPDiDM47%2Ff9ZpGBs3U6EP80g4J6GUAhBCb2cUqICZ8TkHVUCvNplC8sw32f0v3rEMNuJFy23nsm3tsFaomlDo%2FvoTCy2P69BjqkAeEsp3ib2broI%2BlX6Ghe1ZmsQAdeydauJEyJgqbgmVY7AYIuN3MoVXEfCUnp6%2F6bb8kdXCNTac4dXt2DMV2yJWOc7tgO%2FYP599NIF%2Bya9gKRsI8%2BP8lB5%2F2hAN3KCx3cJSPgLtS4hbzQ2UY9t71wZKeb9ot65VyV0akxCWe1e70lnx7tIf%2BldgdvbA4mkyPkV79aDvXcXQXZn9U8mEo3WJJJ2hbs&X-Amz-Signature=7a78f66933416af22152cbe39be676057660f9a7256aec11d1c1a468acab3674&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWTB7KE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDq7hdVzQ%2BkQkdRNSr%2FsKUhFdqdixb8ZcMUPMtuzHxvVgIhANgYgKc0SQrusSwoYHkAIE1ncUYVN7sMDh1lFiQmujdSKv8DCGkQABoMNjM3NDIzMTgzODA1IgxTPoJ0HEh4zLMB2Kwq3APx3GQfqBswHfxK6Gre%2Br%2BUmLorzmmrxHOvxPSXX0reOcIwKJxLJLYoi20WRU5mY9KGIWCXlAUOVfg5WXXOqiHM0jj6Jp3Yv3Bt%2BBlf%2FcoSxKR5MND%2FgHaQb%2FliRfEoZr6ko9RTs7ldfhP8THyOvzWjvVyA%2BDr4AypUBl7ehEm1M8T8Lj2BZxuv1naSKNMA8nC8jn%2F3%2F75txysUxtldnd3i%2F12tXYAsFMG40eHY0DRfjR%2FxjRAGnpYdBvD7FEXsRfVmiy0PdPpajoPX6PbEL6HJu6c9bSvNNHaRjEJIyjRq%2FEWyjouMtLsH2Yb8oPYMFrUiuwNDNa1tl4P07nu6xwdGkcLJOdDVSVYKME1GwSLWKim2M2SzdrAWIuja7jbEf8%2Fiot8llRG9iLuEAAYKduVmCcSV%2FHRhJE%2BJKuTQ4%2B2ULdZkPqeevbsML4iAgxvan0XIHrr8QZMqzuXLXUQ7CIx%2BPq5MOVeg2yp6VvG91CPQUgGRA%2FlzgxAYEpV77sjwZCTKxdFoUaTj3pB2G5puEZ%2B08VpyitWJuUrVATPDiDM47%2Ff9ZpGBs3U6EP80g4J6GUAhBCb2cUqICZ8TkHVUCvNplC8sw32f0v3rEMNuJFy23nsm3tsFaomlDo%2FvoTCy2P69BjqkAeEsp3ib2broI%2BlX6Ghe1ZmsQAdeydauJEyJgqbgmVY7AYIuN3MoVXEfCUnp6%2F6bb8kdXCNTac4dXt2DMV2yJWOc7tgO%2FYP599NIF%2Bya9gKRsI8%2BP8lB5%2F2hAN3KCx3cJSPgLtS4hbzQ2UY9t71wZKeb9ot65VyV0akxCWe1e70lnx7tIf%2BldgdvbA4mkyPkV79aDvXcXQXZn9U8mEo3WJJJ2hbs&X-Amz-Signature=e2b6a1e682ba5bc1639f77a3f5774ac467dc3c2738481d5ebb5014eb68f26a95&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWTB7KE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDq7hdVzQ%2BkQkdRNSr%2FsKUhFdqdixb8ZcMUPMtuzHxvVgIhANgYgKc0SQrusSwoYHkAIE1ncUYVN7sMDh1lFiQmujdSKv8DCGkQABoMNjM3NDIzMTgzODA1IgxTPoJ0HEh4zLMB2Kwq3APx3GQfqBswHfxK6Gre%2Br%2BUmLorzmmrxHOvxPSXX0reOcIwKJxLJLYoi20WRU5mY9KGIWCXlAUOVfg5WXXOqiHM0jj6Jp3Yv3Bt%2BBlf%2FcoSxKR5MND%2FgHaQb%2FliRfEoZr6ko9RTs7ldfhP8THyOvzWjvVyA%2BDr4AypUBl7ehEm1M8T8Lj2BZxuv1naSKNMA8nC8jn%2F3%2F75txysUxtldnd3i%2F12tXYAsFMG40eHY0DRfjR%2FxjRAGnpYdBvD7FEXsRfVmiy0PdPpajoPX6PbEL6HJu6c9bSvNNHaRjEJIyjRq%2FEWyjouMtLsH2Yb8oPYMFrUiuwNDNa1tl4P07nu6xwdGkcLJOdDVSVYKME1GwSLWKim2M2SzdrAWIuja7jbEf8%2Fiot8llRG9iLuEAAYKduVmCcSV%2FHRhJE%2BJKuTQ4%2B2ULdZkPqeevbsML4iAgxvan0XIHrr8QZMqzuXLXUQ7CIx%2BPq5MOVeg2yp6VvG91CPQUgGRA%2FlzgxAYEpV77sjwZCTKxdFoUaTj3pB2G5puEZ%2B08VpyitWJuUrVATPDiDM47%2Ff9ZpGBs3U6EP80g4J6GUAhBCb2cUqICZ8TkHVUCvNplC8sw32f0v3rEMNuJFy23nsm3tsFaomlDo%2FvoTCy2P69BjqkAeEsp3ib2broI%2BlX6Ghe1ZmsQAdeydauJEyJgqbgmVY7AYIuN3MoVXEfCUnp6%2F6bb8kdXCNTac4dXt2DMV2yJWOc7tgO%2FYP599NIF%2Bya9gKRsI8%2BP8lB5%2F2hAN3KCx3cJSPgLtS4hbzQ2UY9t71wZKeb9ot65VyV0akxCWe1e70lnx7tIf%2BldgdvbA4mkyPkV79aDvXcXQXZn9U8mEo3WJJJ2hbs&X-Amz-Signature=c2c99b0ecb5cc5e9e01ab2129b71afb7773d28c7d26f6ae867b46329769f2810&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWTB7KE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDq7hdVzQ%2BkQkdRNSr%2FsKUhFdqdixb8ZcMUPMtuzHxvVgIhANgYgKc0SQrusSwoYHkAIE1ncUYVN7sMDh1lFiQmujdSKv8DCGkQABoMNjM3NDIzMTgzODA1IgxTPoJ0HEh4zLMB2Kwq3APx3GQfqBswHfxK6Gre%2Br%2BUmLorzmmrxHOvxPSXX0reOcIwKJxLJLYoi20WRU5mY9KGIWCXlAUOVfg5WXXOqiHM0jj6Jp3Yv3Bt%2BBlf%2FcoSxKR5MND%2FgHaQb%2FliRfEoZr6ko9RTs7ldfhP8THyOvzWjvVyA%2BDr4AypUBl7ehEm1M8T8Lj2BZxuv1naSKNMA8nC8jn%2F3%2F75txysUxtldnd3i%2F12tXYAsFMG40eHY0DRfjR%2FxjRAGnpYdBvD7FEXsRfVmiy0PdPpajoPX6PbEL6HJu6c9bSvNNHaRjEJIyjRq%2FEWyjouMtLsH2Yb8oPYMFrUiuwNDNa1tl4P07nu6xwdGkcLJOdDVSVYKME1GwSLWKim2M2SzdrAWIuja7jbEf8%2Fiot8llRG9iLuEAAYKduVmCcSV%2FHRhJE%2BJKuTQ4%2B2ULdZkPqeevbsML4iAgxvan0XIHrr8QZMqzuXLXUQ7CIx%2BPq5MOVeg2yp6VvG91CPQUgGRA%2FlzgxAYEpV77sjwZCTKxdFoUaTj3pB2G5puEZ%2B08VpyitWJuUrVATPDiDM47%2Ff9ZpGBs3U6EP80g4J6GUAhBCb2cUqICZ8TkHVUCvNplC8sw32f0v3rEMNuJFy23nsm3tsFaomlDo%2FvoTCy2P69BjqkAeEsp3ib2broI%2BlX6Ghe1ZmsQAdeydauJEyJgqbgmVY7AYIuN3MoVXEfCUnp6%2F6bb8kdXCNTac4dXt2DMV2yJWOc7tgO%2FYP599NIF%2Bya9gKRsI8%2BP8lB5%2F2hAN3KCx3cJSPgLtS4hbzQ2UY9t71wZKeb9ot65VyV0akxCWe1e70lnx7tIf%2BldgdvbA4mkyPkV79aDvXcXQXZn9U8mEo3WJJJ2hbs&X-Amz-Signature=411ec313a70e716258b78262c6218f099fb66158fdaab1cc79f51f5ef44db7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWTB7KE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDq7hdVzQ%2BkQkdRNSr%2FsKUhFdqdixb8ZcMUPMtuzHxvVgIhANgYgKc0SQrusSwoYHkAIE1ncUYVN7sMDh1lFiQmujdSKv8DCGkQABoMNjM3NDIzMTgzODA1IgxTPoJ0HEh4zLMB2Kwq3APx3GQfqBswHfxK6Gre%2Br%2BUmLorzmmrxHOvxPSXX0reOcIwKJxLJLYoi20WRU5mY9KGIWCXlAUOVfg5WXXOqiHM0jj6Jp3Yv3Bt%2BBlf%2FcoSxKR5MND%2FgHaQb%2FliRfEoZr6ko9RTs7ldfhP8THyOvzWjvVyA%2BDr4AypUBl7ehEm1M8T8Lj2BZxuv1naSKNMA8nC8jn%2F3%2F75txysUxtldnd3i%2F12tXYAsFMG40eHY0DRfjR%2FxjRAGnpYdBvD7FEXsRfVmiy0PdPpajoPX6PbEL6HJu6c9bSvNNHaRjEJIyjRq%2FEWyjouMtLsH2Yb8oPYMFrUiuwNDNa1tl4P07nu6xwdGkcLJOdDVSVYKME1GwSLWKim2M2SzdrAWIuja7jbEf8%2Fiot8llRG9iLuEAAYKduVmCcSV%2FHRhJE%2BJKuTQ4%2B2ULdZkPqeevbsML4iAgxvan0XIHrr8QZMqzuXLXUQ7CIx%2BPq5MOVeg2yp6VvG91CPQUgGRA%2FlzgxAYEpV77sjwZCTKxdFoUaTj3pB2G5puEZ%2B08VpyitWJuUrVATPDiDM47%2Ff9ZpGBs3U6EP80g4J6GUAhBCb2cUqICZ8TkHVUCvNplC8sw32f0v3rEMNuJFy23nsm3tsFaomlDo%2FvoTCy2P69BjqkAeEsp3ib2broI%2BlX6Ghe1ZmsQAdeydauJEyJgqbgmVY7AYIuN3MoVXEfCUnp6%2F6bb8kdXCNTac4dXt2DMV2yJWOc7tgO%2FYP599NIF%2Bya9gKRsI8%2BP8lB5%2F2hAN3KCx3cJSPgLtS4hbzQ2UY9t71wZKeb9ot65VyV0akxCWe1e70lnx7tIf%2BldgdvbA4mkyPkV79aDvXcXQXZn9U8mEo3WJJJ2hbs&X-Amz-Signature=cdb7650adff48c8b2075490b0d3f79066c70a7bacaa878444e267e550dc1a481&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWTB7KE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDq7hdVzQ%2BkQkdRNSr%2FsKUhFdqdixb8ZcMUPMtuzHxvVgIhANgYgKc0SQrusSwoYHkAIE1ncUYVN7sMDh1lFiQmujdSKv8DCGkQABoMNjM3NDIzMTgzODA1IgxTPoJ0HEh4zLMB2Kwq3APx3GQfqBswHfxK6Gre%2Br%2BUmLorzmmrxHOvxPSXX0reOcIwKJxLJLYoi20WRU5mY9KGIWCXlAUOVfg5WXXOqiHM0jj6Jp3Yv3Bt%2BBlf%2FcoSxKR5MND%2FgHaQb%2FliRfEoZr6ko9RTs7ldfhP8THyOvzWjvVyA%2BDr4AypUBl7ehEm1M8T8Lj2BZxuv1naSKNMA8nC8jn%2F3%2F75txysUxtldnd3i%2F12tXYAsFMG40eHY0DRfjR%2FxjRAGnpYdBvD7FEXsRfVmiy0PdPpajoPX6PbEL6HJu6c9bSvNNHaRjEJIyjRq%2FEWyjouMtLsH2Yb8oPYMFrUiuwNDNa1tl4P07nu6xwdGkcLJOdDVSVYKME1GwSLWKim2M2SzdrAWIuja7jbEf8%2Fiot8llRG9iLuEAAYKduVmCcSV%2FHRhJE%2BJKuTQ4%2B2ULdZkPqeevbsML4iAgxvan0XIHrr8QZMqzuXLXUQ7CIx%2BPq5MOVeg2yp6VvG91CPQUgGRA%2FlzgxAYEpV77sjwZCTKxdFoUaTj3pB2G5puEZ%2B08VpyitWJuUrVATPDiDM47%2Ff9ZpGBs3U6EP80g4J6GUAhBCb2cUqICZ8TkHVUCvNplC8sw32f0v3rEMNuJFy23nsm3tsFaomlDo%2FvoTCy2P69BjqkAeEsp3ib2broI%2BlX6Ghe1ZmsQAdeydauJEyJgqbgmVY7AYIuN3MoVXEfCUnp6%2F6bb8kdXCNTac4dXt2DMV2yJWOc7tgO%2FYP599NIF%2Bya9gKRsI8%2BP8lB5%2F2hAN3KCx3cJSPgLtS4hbzQ2UY9t71wZKeb9ot65VyV0akxCWe1e70lnx7tIf%2BldgdvbA4mkyPkV79aDvXcXQXZn9U8mEo3WJJJ2hbs&X-Amz-Signature=633cf67c066f39cbff30fc04df317f08b464a96d2f2a22b5215babf3be55ff86&X-Amz-SignedHeaders=host&x-id=GetObject)
