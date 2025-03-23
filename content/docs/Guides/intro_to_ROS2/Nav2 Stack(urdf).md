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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNUO3J6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICMIlgRQs6uA%2F8RH1ayNNJI0B0qDcmgejFIqmntCwDnFAiEArmblY4B9niDhDzAGFu1k1M8RW%2FKkef7D2Lb06BAgVN8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZua3rP3%2FRqkQ80SrcA9eIyvbT8xA7ExkCfvD2RBuInP4itBtZ5XiXXQ%2BdTksyM62pnlXaviWJQHgnyKApr5mtk2ASTmiBMks0hcn0I%2F%2BKdBns%2BRZ4TftWGDIIklU3vD1VNWit4bQSmt1ZkYfXfsKwJc7JWhJ4nJ42p%2B%2BPgBPYbM%2FHk4WEDfybbBQLCFmukgZMgokbFhASNxXRo%2Ft2ebUPM%2FemQa%2FzyzpvsX5EwaRXjC%2FDNYJwRZjgrovu0VqGzaAOHWdBMYN7tKzsOsLM02JusS5iIfZbip7JCEeCCQ1Cj%2BAlIClf%2BQw6hsxVXZ8TJg2Z%2Bhb92Jdynm0GYhb1yXyIlYJJ4n1x24VFo0mfulm%2BBIKCcF0evH0hCKb%2FYy%2F%2FBW0b8ex3vOVvtPFjFmfLVg9VDBEd8eca6m8T1w%2FcbQtc2cGy82bGLfoGfksaIMdiDEyKrcPEM8mbsU9KFMTmifiu4wBoO7DQUKhg8F89VIM7MiJmKPDTfSCMAMzi7U%2FEdgfB9y68chRJ0qfu%2BTsFUh52VNeaMZIQyr2FhNgFdAgc4HvYQ0SicVmn2twOeq9rSdBK8FyMeYhFHKHB67eDi3sMIIrtEzdkyeHDuUHmmxABmyFcqhh8wVIrWERP4fectEQ9tZ5lTHHlMW9lMMK2%2FL4GOqUBR6aafm3f5kD7Rjwaj%2FNEeYp2muagHQUQUknFqlOEDeY29KT83SISumqjwPAtNnc3oTmfkEqkHQ0hxtw6bI8wNL%2BzXBMpe0dLs%2F2Uvh1X6ekUXQTeGk%2BGaDh5UzeexuSfleRZDjipiujnDxgf52nhT%2FJtj1wchiam1qhI2n3%2FEVW0%2FDHZjIZdnOKmXYli%2FZg1RW84rbbluGSqt2YhRT7%2Fk%2FUXXMX4&X-Amz-Signature=0101b4206a57e6205ad370c7775497d26baa6d0a8812e419f384c87c051216b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNUO3J6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICMIlgRQs6uA%2F8RH1ayNNJI0B0qDcmgejFIqmntCwDnFAiEArmblY4B9niDhDzAGFu1k1M8RW%2FKkef7D2Lb06BAgVN8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZua3rP3%2FRqkQ80SrcA9eIyvbT8xA7ExkCfvD2RBuInP4itBtZ5XiXXQ%2BdTksyM62pnlXaviWJQHgnyKApr5mtk2ASTmiBMks0hcn0I%2F%2BKdBns%2BRZ4TftWGDIIklU3vD1VNWit4bQSmt1ZkYfXfsKwJc7JWhJ4nJ42p%2B%2BPgBPYbM%2FHk4WEDfybbBQLCFmukgZMgokbFhASNxXRo%2Ft2ebUPM%2FemQa%2FzyzpvsX5EwaRXjC%2FDNYJwRZjgrovu0VqGzaAOHWdBMYN7tKzsOsLM02JusS5iIfZbip7JCEeCCQ1Cj%2BAlIClf%2BQw6hsxVXZ8TJg2Z%2Bhb92Jdynm0GYhb1yXyIlYJJ4n1x24VFo0mfulm%2BBIKCcF0evH0hCKb%2FYy%2F%2FBW0b8ex3vOVvtPFjFmfLVg9VDBEd8eca6m8T1w%2FcbQtc2cGy82bGLfoGfksaIMdiDEyKrcPEM8mbsU9KFMTmifiu4wBoO7DQUKhg8F89VIM7MiJmKPDTfSCMAMzi7U%2FEdgfB9y68chRJ0qfu%2BTsFUh52VNeaMZIQyr2FhNgFdAgc4HvYQ0SicVmn2twOeq9rSdBK8FyMeYhFHKHB67eDi3sMIIrtEzdkyeHDuUHmmxABmyFcqhh8wVIrWERP4fectEQ9tZ5lTHHlMW9lMMK2%2FL4GOqUBR6aafm3f5kD7Rjwaj%2FNEeYp2muagHQUQUknFqlOEDeY29KT83SISumqjwPAtNnc3oTmfkEqkHQ0hxtw6bI8wNL%2BzXBMpe0dLs%2F2Uvh1X6ekUXQTeGk%2BGaDh5UzeexuSfleRZDjipiujnDxgf52nhT%2FJtj1wchiam1qhI2n3%2FEVW0%2FDHZjIZdnOKmXYli%2FZg1RW84rbbluGSqt2YhRT7%2Fk%2FUXXMX4&X-Amz-Signature=fab3a091e81af3b1c5f12c229e032a59ad572a96b5fa8f59eacb43f67301212b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNUO3J6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICMIlgRQs6uA%2F8RH1ayNNJI0B0qDcmgejFIqmntCwDnFAiEArmblY4B9niDhDzAGFu1k1M8RW%2FKkef7D2Lb06BAgVN8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZua3rP3%2FRqkQ80SrcA9eIyvbT8xA7ExkCfvD2RBuInP4itBtZ5XiXXQ%2BdTksyM62pnlXaviWJQHgnyKApr5mtk2ASTmiBMks0hcn0I%2F%2BKdBns%2BRZ4TftWGDIIklU3vD1VNWit4bQSmt1ZkYfXfsKwJc7JWhJ4nJ42p%2B%2BPgBPYbM%2FHk4WEDfybbBQLCFmukgZMgokbFhASNxXRo%2Ft2ebUPM%2FemQa%2FzyzpvsX5EwaRXjC%2FDNYJwRZjgrovu0VqGzaAOHWdBMYN7tKzsOsLM02JusS5iIfZbip7JCEeCCQ1Cj%2BAlIClf%2BQw6hsxVXZ8TJg2Z%2Bhb92Jdynm0GYhb1yXyIlYJJ4n1x24VFo0mfulm%2BBIKCcF0evH0hCKb%2FYy%2F%2FBW0b8ex3vOVvtPFjFmfLVg9VDBEd8eca6m8T1w%2FcbQtc2cGy82bGLfoGfksaIMdiDEyKrcPEM8mbsU9KFMTmifiu4wBoO7DQUKhg8F89VIM7MiJmKPDTfSCMAMzi7U%2FEdgfB9y68chRJ0qfu%2BTsFUh52VNeaMZIQyr2FhNgFdAgc4HvYQ0SicVmn2twOeq9rSdBK8FyMeYhFHKHB67eDi3sMIIrtEzdkyeHDuUHmmxABmyFcqhh8wVIrWERP4fectEQ9tZ5lTHHlMW9lMMK2%2FL4GOqUBR6aafm3f5kD7Rjwaj%2FNEeYp2muagHQUQUknFqlOEDeY29KT83SISumqjwPAtNnc3oTmfkEqkHQ0hxtw6bI8wNL%2BzXBMpe0dLs%2F2Uvh1X6ekUXQTeGk%2BGaDh5UzeexuSfleRZDjipiujnDxgf52nhT%2FJtj1wchiam1qhI2n3%2FEVW0%2FDHZjIZdnOKmXYli%2FZg1RW84rbbluGSqt2YhRT7%2Fk%2FUXXMX4&X-Amz-Signature=b62ecb15d13b1173994954d554a2672284b73869f383c7d4a9e5cf93645bdcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNUO3J6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICMIlgRQs6uA%2F8RH1ayNNJI0B0qDcmgejFIqmntCwDnFAiEArmblY4B9niDhDzAGFu1k1M8RW%2FKkef7D2Lb06BAgVN8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZua3rP3%2FRqkQ80SrcA9eIyvbT8xA7ExkCfvD2RBuInP4itBtZ5XiXXQ%2BdTksyM62pnlXaviWJQHgnyKApr5mtk2ASTmiBMks0hcn0I%2F%2BKdBns%2BRZ4TftWGDIIklU3vD1VNWit4bQSmt1ZkYfXfsKwJc7JWhJ4nJ42p%2B%2BPgBPYbM%2FHk4WEDfybbBQLCFmukgZMgokbFhASNxXRo%2Ft2ebUPM%2FemQa%2FzyzpvsX5EwaRXjC%2FDNYJwRZjgrovu0VqGzaAOHWdBMYN7tKzsOsLM02JusS5iIfZbip7JCEeCCQ1Cj%2BAlIClf%2BQw6hsxVXZ8TJg2Z%2Bhb92Jdynm0GYhb1yXyIlYJJ4n1x24VFo0mfulm%2BBIKCcF0evH0hCKb%2FYy%2F%2FBW0b8ex3vOVvtPFjFmfLVg9VDBEd8eca6m8T1w%2FcbQtc2cGy82bGLfoGfksaIMdiDEyKrcPEM8mbsU9KFMTmifiu4wBoO7DQUKhg8F89VIM7MiJmKPDTfSCMAMzi7U%2FEdgfB9y68chRJ0qfu%2BTsFUh52VNeaMZIQyr2FhNgFdAgc4HvYQ0SicVmn2twOeq9rSdBK8FyMeYhFHKHB67eDi3sMIIrtEzdkyeHDuUHmmxABmyFcqhh8wVIrWERP4fectEQ9tZ5lTHHlMW9lMMK2%2FL4GOqUBR6aafm3f5kD7Rjwaj%2FNEeYp2muagHQUQUknFqlOEDeY29KT83SISumqjwPAtNnc3oTmfkEqkHQ0hxtw6bI8wNL%2BzXBMpe0dLs%2F2Uvh1X6ekUXQTeGk%2BGaDh5UzeexuSfleRZDjipiujnDxgf52nhT%2FJtj1wchiam1qhI2n3%2FEVW0%2FDHZjIZdnOKmXYli%2FZg1RW84rbbluGSqt2YhRT7%2Fk%2FUXXMX4&X-Amz-Signature=3e352b0a196dd4c7aa18e64c345f2d7204e22a5f67be5cf0fbeaf7ac4e81584f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNUO3J6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICMIlgRQs6uA%2F8RH1ayNNJI0B0qDcmgejFIqmntCwDnFAiEArmblY4B9niDhDzAGFu1k1M8RW%2FKkef7D2Lb06BAgVN8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZua3rP3%2FRqkQ80SrcA9eIyvbT8xA7ExkCfvD2RBuInP4itBtZ5XiXXQ%2BdTksyM62pnlXaviWJQHgnyKApr5mtk2ASTmiBMks0hcn0I%2F%2BKdBns%2BRZ4TftWGDIIklU3vD1VNWit4bQSmt1ZkYfXfsKwJc7JWhJ4nJ42p%2B%2BPgBPYbM%2FHk4WEDfybbBQLCFmukgZMgokbFhASNxXRo%2Ft2ebUPM%2FemQa%2FzyzpvsX5EwaRXjC%2FDNYJwRZjgrovu0VqGzaAOHWdBMYN7tKzsOsLM02JusS5iIfZbip7JCEeCCQ1Cj%2BAlIClf%2BQw6hsxVXZ8TJg2Z%2Bhb92Jdynm0GYhb1yXyIlYJJ4n1x24VFo0mfulm%2BBIKCcF0evH0hCKb%2FYy%2F%2FBW0b8ex3vOVvtPFjFmfLVg9VDBEd8eca6m8T1w%2FcbQtc2cGy82bGLfoGfksaIMdiDEyKrcPEM8mbsU9KFMTmifiu4wBoO7DQUKhg8F89VIM7MiJmKPDTfSCMAMzi7U%2FEdgfB9y68chRJ0qfu%2BTsFUh52VNeaMZIQyr2FhNgFdAgc4HvYQ0SicVmn2twOeq9rSdBK8FyMeYhFHKHB67eDi3sMIIrtEzdkyeHDuUHmmxABmyFcqhh8wVIrWERP4fectEQ9tZ5lTHHlMW9lMMK2%2FL4GOqUBR6aafm3f5kD7Rjwaj%2FNEeYp2muagHQUQUknFqlOEDeY29KT83SISumqjwPAtNnc3oTmfkEqkHQ0hxtw6bI8wNL%2BzXBMpe0dLs%2F2Uvh1X6ekUXQTeGk%2BGaDh5UzeexuSfleRZDjipiujnDxgf52nhT%2FJtj1wchiam1qhI2n3%2FEVW0%2FDHZjIZdnOKmXYli%2FZg1RW84rbbluGSqt2YhRT7%2Fk%2FUXXMX4&X-Amz-Signature=29d0c56c465ffef045d65bda21198b48dc04d50815d503d9576b8248f160b626&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNUO3J6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICMIlgRQs6uA%2F8RH1ayNNJI0B0qDcmgejFIqmntCwDnFAiEArmblY4B9niDhDzAGFu1k1M8RW%2FKkef7D2Lb06BAgVN8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxZua3rP3%2FRqkQ80SrcA9eIyvbT8xA7ExkCfvD2RBuInP4itBtZ5XiXXQ%2BdTksyM62pnlXaviWJQHgnyKApr5mtk2ASTmiBMks0hcn0I%2F%2BKdBns%2BRZ4TftWGDIIklU3vD1VNWit4bQSmt1ZkYfXfsKwJc7JWhJ4nJ42p%2B%2BPgBPYbM%2FHk4WEDfybbBQLCFmukgZMgokbFhASNxXRo%2Ft2ebUPM%2FemQa%2FzyzpvsX5EwaRXjC%2FDNYJwRZjgrovu0VqGzaAOHWdBMYN7tKzsOsLM02JusS5iIfZbip7JCEeCCQ1Cj%2BAlIClf%2BQw6hsxVXZ8TJg2Z%2Bhb92Jdynm0GYhb1yXyIlYJJ4n1x24VFo0mfulm%2BBIKCcF0evH0hCKb%2FYy%2F%2FBW0b8ex3vOVvtPFjFmfLVg9VDBEd8eca6m8T1w%2FcbQtc2cGy82bGLfoGfksaIMdiDEyKrcPEM8mbsU9KFMTmifiu4wBoO7DQUKhg8F89VIM7MiJmKPDTfSCMAMzi7U%2FEdgfB9y68chRJ0qfu%2BTsFUh52VNeaMZIQyr2FhNgFdAgc4HvYQ0SicVmn2twOeq9rSdBK8FyMeYhFHKHB67eDi3sMIIrtEzdkyeHDuUHmmxABmyFcqhh8wVIrWERP4fectEQ9tZ5lTHHlMW9lMMK2%2FL4GOqUBR6aafm3f5kD7Rjwaj%2FNEeYp2muagHQUQUknFqlOEDeY29KT83SISumqjwPAtNnc3oTmfkEqkHQ0hxtw6bI8wNL%2BzXBMpe0dLs%2F2Uvh1X6ekUXQTeGk%2BGaDh5UzeexuSfleRZDjipiujnDxgf52nhT%2FJtj1wchiam1qhI2n3%2FEVW0%2FDHZjIZdnOKmXYli%2FZg1RW84rbbluGSqt2YhRT7%2Fk%2FUXXMX4&X-Amz-Signature=728ec01d154fff21c5d8ef659fe85717ec5f2a944e18ab0bf3f4d68f671a9b85&X-Amz-SignedHeaders=host&x-id=GetObject)
