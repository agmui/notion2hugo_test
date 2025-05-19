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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLFTJD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcQUNF7v20eD6Y4fD%2BTr%2FL9QuSJ51bIT%2B8e691ilWDAIgF14uSP6REjpdXxprS3R%2F3dA7RUAtr20LslS3liwqu6cqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt457KVDpQVYLLwNSrcA3Ss6DRkZaSFG6xw1F212WVcvDpv3R%2BErY0zAektAIJcKbijrjg0pKWL53sFNfZG6Wi692QU%2Fk5P7ShDH8uKB3aChxNM9KSSvViDUG8X6nEZZ5fwHsWGpnoAFCFEwe8mZFXG3i%2FfcWmcLQ9t3WeBk6XcYvZOIBj%2FLdamoNS6RjZdSqCetv6sRA3zAHB%2B%2BMrXQHSjvKKFK1oVasCTf3Lbsbubb20sIJF5Y%2Fi7%2FlXcdy6O0dIZojigGBFKd6zXDWnti33uemZCX4kgofHe3XeiYKZyd7Pnwg8JQ7LRuluZJhYZctbia486H%2Bo1Z7M4lQcSAauOrmdpwDaif2d4%2Fh3H9bfWLOzZXtiMFzkhkOCQ6GUAaTfFc%2FJ7q6Z0DS0a2l6DrXLNOpyQwcLHSQvmzLa3u2HxwiegN2DJJioVQu4uRy6XJoWaHDFZ6rJcR5MC0aN5HzfbOvfwwI1DqJ39GrGk9Mgbp%2Byxk59TdhKGWyp3rTjuICaFaVJfEwIDa7T%2FNp5uL0dcskVTnYrc0PNJiD810A%2BGgIt061w%2FI0LXuGf5eWlypgOC39YggyGgxcFXr5Z%2BromlGRrTAbgYHfBNV6lpfLpJIxtn5MZ2LFaSJtDyIcN7tb6%2Bn4KEPcnAZMi0MNzfrsEGOqUBXPdjHzE3X7B9jSjFaeBF7RLqO%2B5ZGaF0bNEOcWQpeKtuijSkpxmeBMvs9BBcDbRVPj4%2By8m7F2Ka8jxISvZF8JG78tk6QYzo9zyzfdREBSHa1eHZRRLr43Mztc537AnXSDlqku6leNONuqALULn2LRCJFDUHaxzWspmYD35ZdWhkbqFssFwtmq9ynEuJkSJsetKwd%2BNebs5yMeqKhKQ89%2BwMLeH6&X-Amz-Signature=b9f779d1f0ea9be0b5190f46031d4382684230d30e5155136a20e907bbcc0a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLFTJD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcQUNF7v20eD6Y4fD%2BTr%2FL9QuSJ51bIT%2B8e691ilWDAIgF14uSP6REjpdXxprS3R%2F3dA7RUAtr20LslS3liwqu6cqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt457KVDpQVYLLwNSrcA3Ss6DRkZaSFG6xw1F212WVcvDpv3R%2BErY0zAektAIJcKbijrjg0pKWL53sFNfZG6Wi692QU%2Fk5P7ShDH8uKB3aChxNM9KSSvViDUG8X6nEZZ5fwHsWGpnoAFCFEwe8mZFXG3i%2FfcWmcLQ9t3WeBk6XcYvZOIBj%2FLdamoNS6RjZdSqCetv6sRA3zAHB%2B%2BMrXQHSjvKKFK1oVasCTf3Lbsbubb20sIJF5Y%2Fi7%2FlXcdy6O0dIZojigGBFKd6zXDWnti33uemZCX4kgofHe3XeiYKZyd7Pnwg8JQ7LRuluZJhYZctbia486H%2Bo1Z7M4lQcSAauOrmdpwDaif2d4%2Fh3H9bfWLOzZXtiMFzkhkOCQ6GUAaTfFc%2FJ7q6Z0DS0a2l6DrXLNOpyQwcLHSQvmzLa3u2HxwiegN2DJJioVQu4uRy6XJoWaHDFZ6rJcR5MC0aN5HzfbOvfwwI1DqJ39GrGk9Mgbp%2Byxk59TdhKGWyp3rTjuICaFaVJfEwIDa7T%2FNp5uL0dcskVTnYrc0PNJiD810A%2BGgIt061w%2FI0LXuGf5eWlypgOC39YggyGgxcFXr5Z%2BromlGRrTAbgYHfBNV6lpfLpJIxtn5MZ2LFaSJtDyIcN7tb6%2Bn4KEPcnAZMi0MNzfrsEGOqUBXPdjHzE3X7B9jSjFaeBF7RLqO%2B5ZGaF0bNEOcWQpeKtuijSkpxmeBMvs9BBcDbRVPj4%2By8m7F2Ka8jxISvZF8JG78tk6QYzo9zyzfdREBSHa1eHZRRLr43Mztc537AnXSDlqku6leNONuqALULn2LRCJFDUHaxzWspmYD35ZdWhkbqFssFwtmq9ynEuJkSJsetKwd%2BNebs5yMeqKhKQ89%2BwMLeH6&X-Amz-Signature=7a709bc88ff114204c0637214d2a709b3227c9ea3f13704776a6d8d9668c82b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLFTJD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcQUNF7v20eD6Y4fD%2BTr%2FL9QuSJ51bIT%2B8e691ilWDAIgF14uSP6REjpdXxprS3R%2F3dA7RUAtr20LslS3liwqu6cqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt457KVDpQVYLLwNSrcA3Ss6DRkZaSFG6xw1F212WVcvDpv3R%2BErY0zAektAIJcKbijrjg0pKWL53sFNfZG6Wi692QU%2Fk5P7ShDH8uKB3aChxNM9KSSvViDUG8X6nEZZ5fwHsWGpnoAFCFEwe8mZFXG3i%2FfcWmcLQ9t3WeBk6XcYvZOIBj%2FLdamoNS6RjZdSqCetv6sRA3zAHB%2B%2BMrXQHSjvKKFK1oVasCTf3Lbsbubb20sIJF5Y%2Fi7%2FlXcdy6O0dIZojigGBFKd6zXDWnti33uemZCX4kgofHe3XeiYKZyd7Pnwg8JQ7LRuluZJhYZctbia486H%2Bo1Z7M4lQcSAauOrmdpwDaif2d4%2Fh3H9bfWLOzZXtiMFzkhkOCQ6GUAaTfFc%2FJ7q6Z0DS0a2l6DrXLNOpyQwcLHSQvmzLa3u2HxwiegN2DJJioVQu4uRy6XJoWaHDFZ6rJcR5MC0aN5HzfbOvfwwI1DqJ39GrGk9Mgbp%2Byxk59TdhKGWyp3rTjuICaFaVJfEwIDa7T%2FNp5uL0dcskVTnYrc0PNJiD810A%2BGgIt061w%2FI0LXuGf5eWlypgOC39YggyGgxcFXr5Z%2BromlGRrTAbgYHfBNV6lpfLpJIxtn5MZ2LFaSJtDyIcN7tb6%2Bn4KEPcnAZMi0MNzfrsEGOqUBXPdjHzE3X7B9jSjFaeBF7RLqO%2B5ZGaF0bNEOcWQpeKtuijSkpxmeBMvs9BBcDbRVPj4%2By8m7F2Ka8jxISvZF8JG78tk6QYzo9zyzfdREBSHa1eHZRRLr43Mztc537AnXSDlqku6leNONuqALULn2LRCJFDUHaxzWspmYD35ZdWhkbqFssFwtmq9ynEuJkSJsetKwd%2BNebs5yMeqKhKQ89%2BwMLeH6&X-Amz-Signature=c24f469402f6892b615aee0c9c368e376310ed360a676eee365044e9ddee42cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLFTJD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcQUNF7v20eD6Y4fD%2BTr%2FL9QuSJ51bIT%2B8e691ilWDAIgF14uSP6REjpdXxprS3R%2F3dA7RUAtr20LslS3liwqu6cqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt457KVDpQVYLLwNSrcA3Ss6DRkZaSFG6xw1F212WVcvDpv3R%2BErY0zAektAIJcKbijrjg0pKWL53sFNfZG6Wi692QU%2Fk5P7ShDH8uKB3aChxNM9KSSvViDUG8X6nEZZ5fwHsWGpnoAFCFEwe8mZFXG3i%2FfcWmcLQ9t3WeBk6XcYvZOIBj%2FLdamoNS6RjZdSqCetv6sRA3zAHB%2B%2BMrXQHSjvKKFK1oVasCTf3Lbsbubb20sIJF5Y%2Fi7%2FlXcdy6O0dIZojigGBFKd6zXDWnti33uemZCX4kgofHe3XeiYKZyd7Pnwg8JQ7LRuluZJhYZctbia486H%2Bo1Z7M4lQcSAauOrmdpwDaif2d4%2Fh3H9bfWLOzZXtiMFzkhkOCQ6GUAaTfFc%2FJ7q6Z0DS0a2l6DrXLNOpyQwcLHSQvmzLa3u2HxwiegN2DJJioVQu4uRy6XJoWaHDFZ6rJcR5MC0aN5HzfbOvfwwI1DqJ39GrGk9Mgbp%2Byxk59TdhKGWyp3rTjuICaFaVJfEwIDa7T%2FNp5uL0dcskVTnYrc0PNJiD810A%2BGgIt061w%2FI0LXuGf5eWlypgOC39YggyGgxcFXr5Z%2BromlGRrTAbgYHfBNV6lpfLpJIxtn5MZ2LFaSJtDyIcN7tb6%2Bn4KEPcnAZMi0MNzfrsEGOqUBXPdjHzE3X7B9jSjFaeBF7RLqO%2B5ZGaF0bNEOcWQpeKtuijSkpxmeBMvs9BBcDbRVPj4%2By8m7F2Ka8jxISvZF8JG78tk6QYzo9zyzfdREBSHa1eHZRRLr43Mztc537AnXSDlqku6leNONuqALULn2LRCJFDUHaxzWspmYD35ZdWhkbqFssFwtmq9ynEuJkSJsetKwd%2BNebs5yMeqKhKQ89%2BwMLeH6&X-Amz-Signature=6cd4c211948fd60624161ccebd9ad23dce75f18a8ce2d19da7951a7a8fc494b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLFTJD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcQUNF7v20eD6Y4fD%2BTr%2FL9QuSJ51bIT%2B8e691ilWDAIgF14uSP6REjpdXxprS3R%2F3dA7RUAtr20LslS3liwqu6cqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt457KVDpQVYLLwNSrcA3Ss6DRkZaSFG6xw1F212WVcvDpv3R%2BErY0zAektAIJcKbijrjg0pKWL53sFNfZG6Wi692QU%2Fk5P7ShDH8uKB3aChxNM9KSSvViDUG8X6nEZZ5fwHsWGpnoAFCFEwe8mZFXG3i%2FfcWmcLQ9t3WeBk6XcYvZOIBj%2FLdamoNS6RjZdSqCetv6sRA3zAHB%2B%2BMrXQHSjvKKFK1oVasCTf3Lbsbubb20sIJF5Y%2Fi7%2FlXcdy6O0dIZojigGBFKd6zXDWnti33uemZCX4kgofHe3XeiYKZyd7Pnwg8JQ7LRuluZJhYZctbia486H%2Bo1Z7M4lQcSAauOrmdpwDaif2d4%2Fh3H9bfWLOzZXtiMFzkhkOCQ6GUAaTfFc%2FJ7q6Z0DS0a2l6DrXLNOpyQwcLHSQvmzLa3u2HxwiegN2DJJioVQu4uRy6XJoWaHDFZ6rJcR5MC0aN5HzfbOvfwwI1DqJ39GrGk9Mgbp%2Byxk59TdhKGWyp3rTjuICaFaVJfEwIDa7T%2FNp5uL0dcskVTnYrc0PNJiD810A%2BGgIt061w%2FI0LXuGf5eWlypgOC39YggyGgxcFXr5Z%2BromlGRrTAbgYHfBNV6lpfLpJIxtn5MZ2LFaSJtDyIcN7tb6%2Bn4KEPcnAZMi0MNzfrsEGOqUBXPdjHzE3X7B9jSjFaeBF7RLqO%2B5ZGaF0bNEOcWQpeKtuijSkpxmeBMvs9BBcDbRVPj4%2By8m7F2Ka8jxISvZF8JG78tk6QYzo9zyzfdREBSHa1eHZRRLr43Mztc537AnXSDlqku6leNONuqALULn2LRCJFDUHaxzWspmYD35ZdWhkbqFssFwtmq9ynEuJkSJsetKwd%2BNebs5yMeqKhKQ89%2BwMLeH6&X-Amz-Signature=804c1b95c81bfa2f443f81a6d46a036012a3baffd051bcb88b7f17c2adfd8e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLFTJD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEcQUNF7v20eD6Y4fD%2BTr%2FL9QuSJ51bIT%2B8e691ilWDAIgF14uSP6REjpdXxprS3R%2F3dA7RUAtr20LslS3liwqu6cqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJt457KVDpQVYLLwNSrcA3Ss6DRkZaSFG6xw1F212WVcvDpv3R%2BErY0zAektAIJcKbijrjg0pKWL53sFNfZG6Wi692QU%2Fk5P7ShDH8uKB3aChxNM9KSSvViDUG8X6nEZZ5fwHsWGpnoAFCFEwe8mZFXG3i%2FfcWmcLQ9t3WeBk6XcYvZOIBj%2FLdamoNS6RjZdSqCetv6sRA3zAHB%2B%2BMrXQHSjvKKFK1oVasCTf3Lbsbubb20sIJF5Y%2Fi7%2FlXcdy6O0dIZojigGBFKd6zXDWnti33uemZCX4kgofHe3XeiYKZyd7Pnwg8JQ7LRuluZJhYZctbia486H%2Bo1Z7M4lQcSAauOrmdpwDaif2d4%2Fh3H9bfWLOzZXtiMFzkhkOCQ6GUAaTfFc%2FJ7q6Z0DS0a2l6DrXLNOpyQwcLHSQvmzLa3u2HxwiegN2DJJioVQu4uRy6XJoWaHDFZ6rJcR5MC0aN5HzfbOvfwwI1DqJ39GrGk9Mgbp%2Byxk59TdhKGWyp3rTjuICaFaVJfEwIDa7T%2FNp5uL0dcskVTnYrc0PNJiD810A%2BGgIt061w%2FI0LXuGf5eWlypgOC39YggyGgxcFXr5Z%2BromlGRrTAbgYHfBNV6lpfLpJIxtn5MZ2LFaSJtDyIcN7tb6%2Bn4KEPcnAZMi0MNzfrsEGOqUBXPdjHzE3X7B9jSjFaeBF7RLqO%2B5ZGaF0bNEOcWQpeKtuijSkpxmeBMvs9BBcDbRVPj4%2By8m7F2Ka8jxISvZF8JG78tk6QYzo9zyzfdREBSHa1eHZRRLr43Mztc537AnXSDlqku6leNONuqALULn2LRCJFDUHaxzWspmYD35ZdWhkbqFssFwtmq9ynEuJkSJsetKwd%2BNebs5yMeqKhKQ89%2BwMLeH6&X-Amz-Signature=7a3819da19c261f15c666c9d3bee1a61d9893e71a63737977d2c8d950d259d0c&X-Amz-SignedHeaders=host&x-id=GetObject)
