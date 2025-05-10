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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOKW3W%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcjsxi7fvJaRsdfuiZB7kapc50pqs3PmShekghAJWpQIhAO5A0RzsL%2FBRBNpGRpLVeH02p4RRE9%2FJSUZYaIe2szNpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodNemtiwvu3sDn70q3ANnACXRmAXy8ygpS6%2B1Q20i6WOduZ34puYZM9BxSZFCt%2BMw24akMBFzSUAZaiomioVrV7gzw41HVqOdrWz%2F%2B8%2FIbMeCVv58Bio%2BHdJS8NPEIYnWJsStvGTO%2BiWtDY2GfLdxmukIuvQdPL6SZUTLnzXq4iQnodJUL6prpbFTqzmwmU4eOdoQTlY0jTcWOB6e6dFy7acvto18xvwQD9fxYp9xwM%2BELxinBL5kxsFcDnLtPkf%2BGLHSJ%2F3cuex40hYnnsUKppVvY7vKk5SNHVtboDy5iX5HVMETBYLB0QcGso9B9XjL7M%2BCOck4q1RLYBVFcwSmO9ddnGlGlhnaXLOn3z0ogLJWiVADfU1L%2BqEz36T4SJy1J9mrgLfLO5lsOaaV7On5B3FoRnFsHQzHzZdlgnJiPUZlHrJpA0aKS4pzeHiCW2SH2I83XV%2FD61P2zQGexeTb6wz49GbVOjnQHIDlelVj4DcymW9p%2FFwsnqTYYRnNIHzb7EMCu089M5RZj8BrPizSYSnG4%2FVHA%2FMAxsHfW%2F8S2fdrcrrFMPV%2FfvFcp1l4w4rHjr7dhRzUowM1CqNa8pGwShSzllKpVRbKkJ0fMESogIMYNkzjhp8JTepumRloeBskgLwBQYq4CcjawjCNtf3ABjqkAVd0m5ME9aRDURa5fxBIHiUsDA7z8jvuQtBrxG4g07e6mLZhwsbzSRdJgy15yxurru0Scr7rJewlhQ2IQgRJNMakx70RE%2B8HaQgKKj%2BrCd0oLBdvOy2bLqdhLJkw8F6A8kFUSbYVHtVoZCw9NWOc9lYNnVWLlWS1TP3woNdtn1YC21veQ2aljcDxzWlyu4w3eoPNzNz6qYXWgh3KoJZmrXUYnfDw&X-Amz-Signature=7cfa3164b136bc64ce0fb15351ea931379018fb47aecc955d2839d978dca4200&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOKW3W%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcjsxi7fvJaRsdfuiZB7kapc50pqs3PmShekghAJWpQIhAO5A0RzsL%2FBRBNpGRpLVeH02p4RRE9%2FJSUZYaIe2szNpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodNemtiwvu3sDn70q3ANnACXRmAXy8ygpS6%2B1Q20i6WOduZ34puYZM9BxSZFCt%2BMw24akMBFzSUAZaiomioVrV7gzw41HVqOdrWz%2F%2B8%2FIbMeCVv58Bio%2BHdJS8NPEIYnWJsStvGTO%2BiWtDY2GfLdxmukIuvQdPL6SZUTLnzXq4iQnodJUL6prpbFTqzmwmU4eOdoQTlY0jTcWOB6e6dFy7acvto18xvwQD9fxYp9xwM%2BELxinBL5kxsFcDnLtPkf%2BGLHSJ%2F3cuex40hYnnsUKppVvY7vKk5SNHVtboDy5iX5HVMETBYLB0QcGso9B9XjL7M%2BCOck4q1RLYBVFcwSmO9ddnGlGlhnaXLOn3z0ogLJWiVADfU1L%2BqEz36T4SJy1J9mrgLfLO5lsOaaV7On5B3FoRnFsHQzHzZdlgnJiPUZlHrJpA0aKS4pzeHiCW2SH2I83XV%2FD61P2zQGexeTb6wz49GbVOjnQHIDlelVj4DcymW9p%2FFwsnqTYYRnNIHzb7EMCu089M5RZj8BrPizSYSnG4%2FVHA%2FMAxsHfW%2F8S2fdrcrrFMPV%2FfvFcp1l4w4rHjr7dhRzUowM1CqNa8pGwShSzllKpVRbKkJ0fMESogIMYNkzjhp8JTepumRloeBskgLwBQYq4CcjawjCNtf3ABjqkAVd0m5ME9aRDURa5fxBIHiUsDA7z8jvuQtBrxG4g07e6mLZhwsbzSRdJgy15yxurru0Scr7rJewlhQ2IQgRJNMakx70RE%2B8HaQgKKj%2BrCd0oLBdvOy2bLqdhLJkw8F6A8kFUSbYVHtVoZCw9NWOc9lYNnVWLlWS1TP3woNdtn1YC21veQ2aljcDxzWlyu4w3eoPNzNz6qYXWgh3KoJZmrXUYnfDw&X-Amz-Signature=fa39b0b3544bf0542befb7347676bd0cc0c1125ff48cf13a36b0c526e5956fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOKW3W%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcjsxi7fvJaRsdfuiZB7kapc50pqs3PmShekghAJWpQIhAO5A0RzsL%2FBRBNpGRpLVeH02p4RRE9%2FJSUZYaIe2szNpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodNemtiwvu3sDn70q3ANnACXRmAXy8ygpS6%2B1Q20i6WOduZ34puYZM9BxSZFCt%2BMw24akMBFzSUAZaiomioVrV7gzw41HVqOdrWz%2F%2B8%2FIbMeCVv58Bio%2BHdJS8NPEIYnWJsStvGTO%2BiWtDY2GfLdxmukIuvQdPL6SZUTLnzXq4iQnodJUL6prpbFTqzmwmU4eOdoQTlY0jTcWOB6e6dFy7acvto18xvwQD9fxYp9xwM%2BELxinBL5kxsFcDnLtPkf%2BGLHSJ%2F3cuex40hYnnsUKppVvY7vKk5SNHVtboDy5iX5HVMETBYLB0QcGso9B9XjL7M%2BCOck4q1RLYBVFcwSmO9ddnGlGlhnaXLOn3z0ogLJWiVADfU1L%2BqEz36T4SJy1J9mrgLfLO5lsOaaV7On5B3FoRnFsHQzHzZdlgnJiPUZlHrJpA0aKS4pzeHiCW2SH2I83XV%2FD61P2zQGexeTb6wz49GbVOjnQHIDlelVj4DcymW9p%2FFwsnqTYYRnNIHzb7EMCu089M5RZj8BrPizSYSnG4%2FVHA%2FMAxsHfW%2F8S2fdrcrrFMPV%2FfvFcp1l4w4rHjr7dhRzUowM1CqNa8pGwShSzllKpVRbKkJ0fMESogIMYNkzjhp8JTepumRloeBskgLwBQYq4CcjawjCNtf3ABjqkAVd0m5ME9aRDURa5fxBIHiUsDA7z8jvuQtBrxG4g07e6mLZhwsbzSRdJgy15yxurru0Scr7rJewlhQ2IQgRJNMakx70RE%2B8HaQgKKj%2BrCd0oLBdvOy2bLqdhLJkw8F6A8kFUSbYVHtVoZCw9NWOc9lYNnVWLlWS1TP3woNdtn1YC21veQ2aljcDxzWlyu4w3eoPNzNz6qYXWgh3KoJZmrXUYnfDw&X-Amz-Signature=92a34635d2ec36ec963a7dd0f7ca64f0f9e1e9ce2b6f6ad622a961c2a6735024&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOKW3W%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcjsxi7fvJaRsdfuiZB7kapc50pqs3PmShekghAJWpQIhAO5A0RzsL%2FBRBNpGRpLVeH02p4RRE9%2FJSUZYaIe2szNpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodNemtiwvu3sDn70q3ANnACXRmAXy8ygpS6%2B1Q20i6WOduZ34puYZM9BxSZFCt%2BMw24akMBFzSUAZaiomioVrV7gzw41HVqOdrWz%2F%2B8%2FIbMeCVv58Bio%2BHdJS8NPEIYnWJsStvGTO%2BiWtDY2GfLdxmukIuvQdPL6SZUTLnzXq4iQnodJUL6prpbFTqzmwmU4eOdoQTlY0jTcWOB6e6dFy7acvto18xvwQD9fxYp9xwM%2BELxinBL5kxsFcDnLtPkf%2BGLHSJ%2F3cuex40hYnnsUKppVvY7vKk5SNHVtboDy5iX5HVMETBYLB0QcGso9B9XjL7M%2BCOck4q1RLYBVFcwSmO9ddnGlGlhnaXLOn3z0ogLJWiVADfU1L%2BqEz36T4SJy1J9mrgLfLO5lsOaaV7On5B3FoRnFsHQzHzZdlgnJiPUZlHrJpA0aKS4pzeHiCW2SH2I83XV%2FD61P2zQGexeTb6wz49GbVOjnQHIDlelVj4DcymW9p%2FFwsnqTYYRnNIHzb7EMCu089M5RZj8BrPizSYSnG4%2FVHA%2FMAxsHfW%2F8S2fdrcrrFMPV%2FfvFcp1l4w4rHjr7dhRzUowM1CqNa8pGwShSzllKpVRbKkJ0fMESogIMYNkzjhp8JTepumRloeBskgLwBQYq4CcjawjCNtf3ABjqkAVd0m5ME9aRDURa5fxBIHiUsDA7z8jvuQtBrxG4g07e6mLZhwsbzSRdJgy15yxurru0Scr7rJewlhQ2IQgRJNMakx70RE%2B8HaQgKKj%2BrCd0oLBdvOy2bLqdhLJkw8F6A8kFUSbYVHtVoZCw9NWOc9lYNnVWLlWS1TP3woNdtn1YC21veQ2aljcDxzWlyu4w3eoPNzNz6qYXWgh3KoJZmrXUYnfDw&X-Amz-Signature=8820123f91d5ebddf240c437140149fa2dbdbfdca556c06faee8d4ca0c04cbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOKW3W%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcjsxi7fvJaRsdfuiZB7kapc50pqs3PmShekghAJWpQIhAO5A0RzsL%2FBRBNpGRpLVeH02p4RRE9%2FJSUZYaIe2szNpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodNemtiwvu3sDn70q3ANnACXRmAXy8ygpS6%2B1Q20i6WOduZ34puYZM9BxSZFCt%2BMw24akMBFzSUAZaiomioVrV7gzw41HVqOdrWz%2F%2B8%2FIbMeCVv58Bio%2BHdJS8NPEIYnWJsStvGTO%2BiWtDY2GfLdxmukIuvQdPL6SZUTLnzXq4iQnodJUL6prpbFTqzmwmU4eOdoQTlY0jTcWOB6e6dFy7acvto18xvwQD9fxYp9xwM%2BELxinBL5kxsFcDnLtPkf%2BGLHSJ%2F3cuex40hYnnsUKppVvY7vKk5SNHVtboDy5iX5HVMETBYLB0QcGso9B9XjL7M%2BCOck4q1RLYBVFcwSmO9ddnGlGlhnaXLOn3z0ogLJWiVADfU1L%2BqEz36T4SJy1J9mrgLfLO5lsOaaV7On5B3FoRnFsHQzHzZdlgnJiPUZlHrJpA0aKS4pzeHiCW2SH2I83XV%2FD61P2zQGexeTb6wz49GbVOjnQHIDlelVj4DcymW9p%2FFwsnqTYYRnNIHzb7EMCu089M5RZj8BrPizSYSnG4%2FVHA%2FMAxsHfW%2F8S2fdrcrrFMPV%2FfvFcp1l4w4rHjr7dhRzUowM1CqNa8pGwShSzllKpVRbKkJ0fMESogIMYNkzjhp8JTepumRloeBskgLwBQYq4CcjawjCNtf3ABjqkAVd0m5ME9aRDURa5fxBIHiUsDA7z8jvuQtBrxG4g07e6mLZhwsbzSRdJgy15yxurru0Scr7rJewlhQ2IQgRJNMakx70RE%2B8HaQgKKj%2BrCd0oLBdvOy2bLqdhLJkw8F6A8kFUSbYVHtVoZCw9NWOc9lYNnVWLlWS1TP3woNdtn1YC21veQ2aljcDxzWlyu4w3eoPNzNz6qYXWgh3KoJZmrXUYnfDw&X-Amz-Signature=74cfae931b22e351364f38161c79934a28491ee530af850657a3a90da3d86032&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOKW3W%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzcjsxi7fvJaRsdfuiZB7kapc50pqs3PmShekghAJWpQIhAO5A0RzsL%2FBRBNpGRpLVeH02p4RRE9%2FJSUZYaIe2szNpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwodNemtiwvu3sDn70q3ANnACXRmAXy8ygpS6%2B1Q20i6WOduZ34puYZM9BxSZFCt%2BMw24akMBFzSUAZaiomioVrV7gzw41HVqOdrWz%2F%2B8%2FIbMeCVv58Bio%2BHdJS8NPEIYnWJsStvGTO%2BiWtDY2GfLdxmukIuvQdPL6SZUTLnzXq4iQnodJUL6prpbFTqzmwmU4eOdoQTlY0jTcWOB6e6dFy7acvto18xvwQD9fxYp9xwM%2BELxinBL5kxsFcDnLtPkf%2BGLHSJ%2F3cuex40hYnnsUKppVvY7vKk5SNHVtboDy5iX5HVMETBYLB0QcGso9B9XjL7M%2BCOck4q1RLYBVFcwSmO9ddnGlGlhnaXLOn3z0ogLJWiVADfU1L%2BqEz36T4SJy1J9mrgLfLO5lsOaaV7On5B3FoRnFsHQzHzZdlgnJiPUZlHrJpA0aKS4pzeHiCW2SH2I83XV%2FD61P2zQGexeTb6wz49GbVOjnQHIDlelVj4DcymW9p%2FFwsnqTYYRnNIHzb7EMCu089M5RZj8BrPizSYSnG4%2FVHA%2FMAxsHfW%2F8S2fdrcrrFMPV%2FfvFcp1l4w4rHjr7dhRzUowM1CqNa8pGwShSzllKpVRbKkJ0fMESogIMYNkzjhp8JTepumRloeBskgLwBQYq4CcjawjCNtf3ABjqkAVd0m5ME9aRDURa5fxBIHiUsDA7z8jvuQtBrxG4g07e6mLZhwsbzSRdJgy15yxurru0Scr7rJewlhQ2IQgRJNMakx70RE%2B8HaQgKKj%2BrCd0oLBdvOy2bLqdhLJkw8F6A8kFUSbYVHtVoZCw9NWOc9lYNnVWLlWS1TP3woNdtn1YC21veQ2aljcDxzWlyu4w3eoPNzNz6qYXWgh3KoJZmrXUYnfDw&X-Amz-Signature=7859cc25053ef7bd761eecbab69d1fc87b389f1b92a2385e9eea425d7872ef38&X-Amz-SignedHeaders=host&x-id=GetObject)
