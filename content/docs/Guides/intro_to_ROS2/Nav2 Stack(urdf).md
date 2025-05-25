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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHF5GXV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBxYEf1DXjxOQtV0SZYa%2BsLhPo7QA2eX89tPHvweJQuqAiEAmDhCz%2Fd4mjXBmBroSRseNSRiyUyJIn5SryxW9gkDfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDASpOOvlf3w3eUxdHSrcA0H%2FBVhcLN5soRBbdLJRDD6q0Ws%2Beg3fAZ7Y5VPFeWuYZ8nykz12gCEIojBol5MRLBJF5aQeOUD6LAP6HxM1g8UUpIM%2FoZjYmmsHflDyEIQfZoF7U6iPuNJINlXjb4%2FCcwgEIEbg6bzldOfcdVsO%2Bqcz73cJnl%2B6eMqRpRjBt4Nt1hb%2FFR%2F1s3Fkp5eQviogUvx1OHfaI%2Bsz8VXYs2tmYjB2BRo0Qbra48vjJl1VU90cFbXF3cRujmgzOhEZf1UrUFRxd3xthYh6fjM%2FPLQAb31TVbw2qIjHEybCgioxN05ZChvoRGd9llC2Goff8UAUOIWyysvuxP6%2BK1JfxJOawrjuaZDQAXc4OZ9swq9hhC9Yin%2F%2BKVL5VEsNLsJTmd6k8i3VjXjpNZjHeW64mrmzC1KQhPDGx%2F6t0PO5jOEbq%2BVxO87AiPl%2FG1MMfTWccDu2EHDB0wtU1Q3J%2FZS8oXXidSwW2Y8yq8kVy1FAmc4FutO%2FQtMgz5NNib57jJrl8jSlN8yBkJvKb0lzkP7D1cvMoKVCX4OvN6NHEMhfFQzQA9rI3O1JBkd1Asvguqb%2FLDN0EpwUdMhyk6DOq1XyDmN9JDkd04grFdaoUoOD6dtp0EAt35Q7N2WpNO2bxEZyMNTFzcEGOqUB%2BNCUDeFfKREsVCPHh10VM%2FXU4KDiO1cuuR6zZDq5VNyddppbA5hrj4HpiojNM3nHgcWPR%2BDK%2BcBrwz2mz7ckFqSTVXCwEg8BgmEJENZMcEWtIgg96IsfqCFBMh6h%2FxaZiEdEzuo3B7vW%2FHpQsJKcY61uyCzZ%2F6yCrqXVa8EuqpNW7MqE%2FoLl9da1X9xWb3cabKwR8IWBQUC0axhWdvWqiRASPJDy&X-Amz-Signature=4066a81b3b4bfb254a45a760ed56e07a55b9a2085e6a00d98887415da1bfe8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHF5GXV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBxYEf1DXjxOQtV0SZYa%2BsLhPo7QA2eX89tPHvweJQuqAiEAmDhCz%2Fd4mjXBmBroSRseNSRiyUyJIn5SryxW9gkDfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDASpOOvlf3w3eUxdHSrcA0H%2FBVhcLN5soRBbdLJRDD6q0Ws%2Beg3fAZ7Y5VPFeWuYZ8nykz12gCEIojBol5MRLBJF5aQeOUD6LAP6HxM1g8UUpIM%2FoZjYmmsHflDyEIQfZoF7U6iPuNJINlXjb4%2FCcwgEIEbg6bzldOfcdVsO%2Bqcz73cJnl%2B6eMqRpRjBt4Nt1hb%2FFR%2F1s3Fkp5eQviogUvx1OHfaI%2Bsz8VXYs2tmYjB2BRo0Qbra48vjJl1VU90cFbXF3cRujmgzOhEZf1UrUFRxd3xthYh6fjM%2FPLQAb31TVbw2qIjHEybCgioxN05ZChvoRGd9llC2Goff8UAUOIWyysvuxP6%2BK1JfxJOawrjuaZDQAXc4OZ9swq9hhC9Yin%2F%2BKVL5VEsNLsJTmd6k8i3VjXjpNZjHeW64mrmzC1KQhPDGx%2F6t0PO5jOEbq%2BVxO87AiPl%2FG1MMfTWccDu2EHDB0wtU1Q3J%2FZS8oXXidSwW2Y8yq8kVy1FAmc4FutO%2FQtMgz5NNib57jJrl8jSlN8yBkJvKb0lzkP7D1cvMoKVCX4OvN6NHEMhfFQzQA9rI3O1JBkd1Asvguqb%2FLDN0EpwUdMhyk6DOq1XyDmN9JDkd04grFdaoUoOD6dtp0EAt35Q7N2WpNO2bxEZyMNTFzcEGOqUB%2BNCUDeFfKREsVCPHh10VM%2FXU4KDiO1cuuR6zZDq5VNyddppbA5hrj4HpiojNM3nHgcWPR%2BDK%2BcBrwz2mz7ckFqSTVXCwEg8BgmEJENZMcEWtIgg96IsfqCFBMh6h%2FxaZiEdEzuo3B7vW%2FHpQsJKcY61uyCzZ%2F6yCrqXVa8EuqpNW7MqE%2FoLl9da1X9xWb3cabKwR8IWBQUC0axhWdvWqiRASPJDy&X-Amz-Signature=aa1f3b063e371c985ee3260bd96cbf123a05062cddbbf36b6de32ccfcfc1e835&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHF5GXV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBxYEf1DXjxOQtV0SZYa%2BsLhPo7QA2eX89tPHvweJQuqAiEAmDhCz%2Fd4mjXBmBroSRseNSRiyUyJIn5SryxW9gkDfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDASpOOvlf3w3eUxdHSrcA0H%2FBVhcLN5soRBbdLJRDD6q0Ws%2Beg3fAZ7Y5VPFeWuYZ8nykz12gCEIojBol5MRLBJF5aQeOUD6LAP6HxM1g8UUpIM%2FoZjYmmsHflDyEIQfZoF7U6iPuNJINlXjb4%2FCcwgEIEbg6bzldOfcdVsO%2Bqcz73cJnl%2B6eMqRpRjBt4Nt1hb%2FFR%2F1s3Fkp5eQviogUvx1OHfaI%2Bsz8VXYs2tmYjB2BRo0Qbra48vjJl1VU90cFbXF3cRujmgzOhEZf1UrUFRxd3xthYh6fjM%2FPLQAb31TVbw2qIjHEybCgioxN05ZChvoRGd9llC2Goff8UAUOIWyysvuxP6%2BK1JfxJOawrjuaZDQAXc4OZ9swq9hhC9Yin%2F%2BKVL5VEsNLsJTmd6k8i3VjXjpNZjHeW64mrmzC1KQhPDGx%2F6t0PO5jOEbq%2BVxO87AiPl%2FG1MMfTWccDu2EHDB0wtU1Q3J%2FZS8oXXidSwW2Y8yq8kVy1FAmc4FutO%2FQtMgz5NNib57jJrl8jSlN8yBkJvKb0lzkP7D1cvMoKVCX4OvN6NHEMhfFQzQA9rI3O1JBkd1Asvguqb%2FLDN0EpwUdMhyk6DOq1XyDmN9JDkd04grFdaoUoOD6dtp0EAt35Q7N2WpNO2bxEZyMNTFzcEGOqUB%2BNCUDeFfKREsVCPHh10VM%2FXU4KDiO1cuuR6zZDq5VNyddppbA5hrj4HpiojNM3nHgcWPR%2BDK%2BcBrwz2mz7ckFqSTVXCwEg8BgmEJENZMcEWtIgg96IsfqCFBMh6h%2FxaZiEdEzuo3B7vW%2FHpQsJKcY61uyCzZ%2F6yCrqXVa8EuqpNW7MqE%2FoLl9da1X9xWb3cabKwR8IWBQUC0axhWdvWqiRASPJDy&X-Amz-Signature=720669784be94da0cc4df3d1bae6ab2d491dbecf55ec01fb656a4d1c54484e28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHF5GXV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBxYEf1DXjxOQtV0SZYa%2BsLhPo7QA2eX89tPHvweJQuqAiEAmDhCz%2Fd4mjXBmBroSRseNSRiyUyJIn5SryxW9gkDfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDASpOOvlf3w3eUxdHSrcA0H%2FBVhcLN5soRBbdLJRDD6q0Ws%2Beg3fAZ7Y5VPFeWuYZ8nykz12gCEIojBol5MRLBJF5aQeOUD6LAP6HxM1g8UUpIM%2FoZjYmmsHflDyEIQfZoF7U6iPuNJINlXjb4%2FCcwgEIEbg6bzldOfcdVsO%2Bqcz73cJnl%2B6eMqRpRjBt4Nt1hb%2FFR%2F1s3Fkp5eQviogUvx1OHfaI%2Bsz8VXYs2tmYjB2BRo0Qbra48vjJl1VU90cFbXF3cRujmgzOhEZf1UrUFRxd3xthYh6fjM%2FPLQAb31TVbw2qIjHEybCgioxN05ZChvoRGd9llC2Goff8UAUOIWyysvuxP6%2BK1JfxJOawrjuaZDQAXc4OZ9swq9hhC9Yin%2F%2BKVL5VEsNLsJTmd6k8i3VjXjpNZjHeW64mrmzC1KQhPDGx%2F6t0PO5jOEbq%2BVxO87AiPl%2FG1MMfTWccDu2EHDB0wtU1Q3J%2FZS8oXXidSwW2Y8yq8kVy1FAmc4FutO%2FQtMgz5NNib57jJrl8jSlN8yBkJvKb0lzkP7D1cvMoKVCX4OvN6NHEMhfFQzQA9rI3O1JBkd1Asvguqb%2FLDN0EpwUdMhyk6DOq1XyDmN9JDkd04grFdaoUoOD6dtp0EAt35Q7N2WpNO2bxEZyMNTFzcEGOqUB%2BNCUDeFfKREsVCPHh10VM%2FXU4KDiO1cuuR6zZDq5VNyddppbA5hrj4HpiojNM3nHgcWPR%2BDK%2BcBrwz2mz7ckFqSTVXCwEg8BgmEJENZMcEWtIgg96IsfqCFBMh6h%2FxaZiEdEzuo3B7vW%2FHpQsJKcY61uyCzZ%2F6yCrqXVa8EuqpNW7MqE%2FoLl9da1X9xWb3cabKwR8IWBQUC0axhWdvWqiRASPJDy&X-Amz-Signature=70861eab6661672ff4b1b0f70bc45af0a90e3d7135cbee3276c4f53cd8499ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHF5GXV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBxYEf1DXjxOQtV0SZYa%2BsLhPo7QA2eX89tPHvweJQuqAiEAmDhCz%2Fd4mjXBmBroSRseNSRiyUyJIn5SryxW9gkDfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDASpOOvlf3w3eUxdHSrcA0H%2FBVhcLN5soRBbdLJRDD6q0Ws%2Beg3fAZ7Y5VPFeWuYZ8nykz12gCEIojBol5MRLBJF5aQeOUD6LAP6HxM1g8UUpIM%2FoZjYmmsHflDyEIQfZoF7U6iPuNJINlXjb4%2FCcwgEIEbg6bzldOfcdVsO%2Bqcz73cJnl%2B6eMqRpRjBt4Nt1hb%2FFR%2F1s3Fkp5eQviogUvx1OHfaI%2Bsz8VXYs2tmYjB2BRo0Qbra48vjJl1VU90cFbXF3cRujmgzOhEZf1UrUFRxd3xthYh6fjM%2FPLQAb31TVbw2qIjHEybCgioxN05ZChvoRGd9llC2Goff8UAUOIWyysvuxP6%2BK1JfxJOawrjuaZDQAXc4OZ9swq9hhC9Yin%2F%2BKVL5VEsNLsJTmd6k8i3VjXjpNZjHeW64mrmzC1KQhPDGx%2F6t0PO5jOEbq%2BVxO87AiPl%2FG1MMfTWccDu2EHDB0wtU1Q3J%2FZS8oXXidSwW2Y8yq8kVy1FAmc4FutO%2FQtMgz5NNib57jJrl8jSlN8yBkJvKb0lzkP7D1cvMoKVCX4OvN6NHEMhfFQzQA9rI3O1JBkd1Asvguqb%2FLDN0EpwUdMhyk6DOq1XyDmN9JDkd04grFdaoUoOD6dtp0EAt35Q7N2WpNO2bxEZyMNTFzcEGOqUB%2BNCUDeFfKREsVCPHh10VM%2FXU4KDiO1cuuR6zZDq5VNyddppbA5hrj4HpiojNM3nHgcWPR%2BDK%2BcBrwz2mz7ckFqSTVXCwEg8BgmEJENZMcEWtIgg96IsfqCFBMh6h%2FxaZiEdEzuo3B7vW%2FHpQsJKcY61uyCzZ%2F6yCrqXVa8EuqpNW7MqE%2FoLl9da1X9xWb3cabKwR8IWBQUC0axhWdvWqiRASPJDy&X-Amz-Signature=8a58644a89f1aebcf734093b1f46952106adf21670941877e8becb0f698848fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHF5GXV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBxYEf1DXjxOQtV0SZYa%2BsLhPo7QA2eX89tPHvweJQuqAiEAmDhCz%2Fd4mjXBmBroSRseNSRiyUyJIn5SryxW9gkDfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDASpOOvlf3w3eUxdHSrcA0H%2FBVhcLN5soRBbdLJRDD6q0Ws%2Beg3fAZ7Y5VPFeWuYZ8nykz12gCEIojBol5MRLBJF5aQeOUD6LAP6HxM1g8UUpIM%2FoZjYmmsHflDyEIQfZoF7U6iPuNJINlXjb4%2FCcwgEIEbg6bzldOfcdVsO%2Bqcz73cJnl%2B6eMqRpRjBt4Nt1hb%2FFR%2F1s3Fkp5eQviogUvx1OHfaI%2Bsz8VXYs2tmYjB2BRo0Qbra48vjJl1VU90cFbXF3cRujmgzOhEZf1UrUFRxd3xthYh6fjM%2FPLQAb31TVbw2qIjHEybCgioxN05ZChvoRGd9llC2Goff8UAUOIWyysvuxP6%2BK1JfxJOawrjuaZDQAXc4OZ9swq9hhC9Yin%2F%2BKVL5VEsNLsJTmd6k8i3VjXjpNZjHeW64mrmzC1KQhPDGx%2F6t0PO5jOEbq%2BVxO87AiPl%2FG1MMfTWccDu2EHDB0wtU1Q3J%2FZS8oXXidSwW2Y8yq8kVy1FAmc4FutO%2FQtMgz5NNib57jJrl8jSlN8yBkJvKb0lzkP7D1cvMoKVCX4OvN6NHEMhfFQzQA9rI3O1JBkd1Asvguqb%2FLDN0EpwUdMhyk6DOq1XyDmN9JDkd04grFdaoUoOD6dtp0EAt35Q7N2WpNO2bxEZyMNTFzcEGOqUB%2BNCUDeFfKREsVCPHh10VM%2FXU4KDiO1cuuR6zZDq5VNyddppbA5hrj4HpiojNM3nHgcWPR%2BDK%2BcBrwz2mz7ckFqSTVXCwEg8BgmEJENZMcEWtIgg96IsfqCFBMh6h%2FxaZiEdEzuo3B7vW%2FHpQsJKcY61uyCzZ%2F6yCrqXVa8EuqpNW7MqE%2FoLl9da1X9xWb3cabKwR8IWBQUC0axhWdvWqiRASPJDy&X-Amz-Signature=74e3dce3d239c14eee32cd159b01a216ad442d4a17fd08221010024311d61c39&X-Amz-SignedHeaders=host&x-id=GetObject)
