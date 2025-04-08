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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UUOW3W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ159ecuujzmK6BaDBxQlwBJf8GfWAdOm8AXUn4q%2BSaAiAmv45UW99QTCJRKDvt7%2FhzqQWOSbP5dd5OVDZI3%2Bqr2yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMAZQMSj9he%2Bl3AxcwKtwDdlMgJuoalgtztpyjv45NBYroWl5PVDCWj0uU1Li2%2F06fX7oXGpeFNO6sdjCcSlissXMPZ%2BgmLiDnKvCV0Ymsi0vZlr8S%2FArhw4hlAq1kgb8tERaIUfykNN7w9fLa44K75gvbNeqRVvOKUJ%2FoI2t3A3TBoUn8D423SA%2B2VMXINRF4ONnU2wapWEx2hB8XcVu02o0ocH8nE11FTBP1oi49eTPvPZvHIq6kVrFRDPIPdkNWG%2BcyU2zOW%2FZQvN9kqCY%2BH1pfBZIdGrNh7S%2BPQQRPTpiudk0TICy9oIQbYgM3raQP5FyVgvqN0qb3uNAkQ9aISzlYQweZPBOGoNUKbWEEBExJ0Rc%2FH1QN3QmIUyxmRb8mtC8DTfg8FP%2F1nS3VqkLFO0DmfWG%2FYoRVLotUgZtbYEKYW7jylZmXL3P5QgYHCPzjZViQHpL%2F74cm5wHINTp5W2L4pvtLfoX%2FTbPSDcIr%2Bq4oKDibqNFmGdFcWiGopeiy5gp8%2FUF20dIjchYXghtpaf56tCyZtfU5zSWMpW7y9or1ZzcO7oQSxzoBduhO24RjQrsYfIa4iyHJhy0MyK10dgcXiuBsH1YsoKR9n0TiYTWV3ICAD4wD8mtMjEJodqdS8XNGzsQvjD%2FbdLowp%2FHTvwY6pgGLKwyx0C4SBWycCgiGBQ5eDFvVHv%2FLuu7uCk0QtzJExNJCo7iILHUBuTJiGPkG2qcUvhcUYQe94HcLwJzo9n6CswkoK6ZqDQuwjKGFaiB7lmDp5%2Fm1057JdT4DzNce%2FnZodIaBfQcH2aknN48nj9p%2BtCQQ5pcoNU9S8N2Z9K5HtY9qlh1Z6VNM2oWP67M1BW%2Fcz5bXUg6u9QEYmPYqtsmbRNu0lSEv&X-Amz-Signature=3567a30d27d0351e082137982fcacc53fab03bf9901906efd9584ede78c27a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UUOW3W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ159ecuujzmK6BaDBxQlwBJf8GfWAdOm8AXUn4q%2BSaAiAmv45UW99QTCJRKDvt7%2FhzqQWOSbP5dd5OVDZI3%2Bqr2yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMAZQMSj9he%2Bl3AxcwKtwDdlMgJuoalgtztpyjv45NBYroWl5PVDCWj0uU1Li2%2F06fX7oXGpeFNO6sdjCcSlissXMPZ%2BgmLiDnKvCV0Ymsi0vZlr8S%2FArhw4hlAq1kgb8tERaIUfykNN7w9fLa44K75gvbNeqRVvOKUJ%2FoI2t3A3TBoUn8D423SA%2B2VMXINRF4ONnU2wapWEx2hB8XcVu02o0ocH8nE11FTBP1oi49eTPvPZvHIq6kVrFRDPIPdkNWG%2BcyU2zOW%2FZQvN9kqCY%2BH1pfBZIdGrNh7S%2BPQQRPTpiudk0TICy9oIQbYgM3raQP5FyVgvqN0qb3uNAkQ9aISzlYQweZPBOGoNUKbWEEBExJ0Rc%2FH1QN3QmIUyxmRb8mtC8DTfg8FP%2F1nS3VqkLFO0DmfWG%2FYoRVLotUgZtbYEKYW7jylZmXL3P5QgYHCPzjZViQHpL%2F74cm5wHINTp5W2L4pvtLfoX%2FTbPSDcIr%2Bq4oKDibqNFmGdFcWiGopeiy5gp8%2FUF20dIjchYXghtpaf56tCyZtfU5zSWMpW7y9or1ZzcO7oQSxzoBduhO24RjQrsYfIa4iyHJhy0MyK10dgcXiuBsH1YsoKR9n0TiYTWV3ICAD4wD8mtMjEJodqdS8XNGzsQvjD%2FbdLowp%2FHTvwY6pgGLKwyx0C4SBWycCgiGBQ5eDFvVHv%2FLuu7uCk0QtzJExNJCo7iILHUBuTJiGPkG2qcUvhcUYQe94HcLwJzo9n6CswkoK6ZqDQuwjKGFaiB7lmDp5%2Fm1057JdT4DzNce%2FnZodIaBfQcH2aknN48nj9p%2BtCQQ5pcoNU9S8N2Z9K5HtY9qlh1Z6VNM2oWP67M1BW%2Fcz5bXUg6u9QEYmPYqtsmbRNu0lSEv&X-Amz-Signature=11a58aedccc3664ceb15df8e5b1ccf9060d3e9d3e8bb91e87ef64af465093717&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UUOW3W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ159ecuujzmK6BaDBxQlwBJf8GfWAdOm8AXUn4q%2BSaAiAmv45UW99QTCJRKDvt7%2FhzqQWOSbP5dd5OVDZI3%2Bqr2yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMAZQMSj9he%2Bl3AxcwKtwDdlMgJuoalgtztpyjv45NBYroWl5PVDCWj0uU1Li2%2F06fX7oXGpeFNO6sdjCcSlissXMPZ%2BgmLiDnKvCV0Ymsi0vZlr8S%2FArhw4hlAq1kgb8tERaIUfykNN7w9fLa44K75gvbNeqRVvOKUJ%2FoI2t3A3TBoUn8D423SA%2B2VMXINRF4ONnU2wapWEx2hB8XcVu02o0ocH8nE11FTBP1oi49eTPvPZvHIq6kVrFRDPIPdkNWG%2BcyU2zOW%2FZQvN9kqCY%2BH1pfBZIdGrNh7S%2BPQQRPTpiudk0TICy9oIQbYgM3raQP5FyVgvqN0qb3uNAkQ9aISzlYQweZPBOGoNUKbWEEBExJ0Rc%2FH1QN3QmIUyxmRb8mtC8DTfg8FP%2F1nS3VqkLFO0DmfWG%2FYoRVLotUgZtbYEKYW7jylZmXL3P5QgYHCPzjZViQHpL%2F74cm5wHINTp5W2L4pvtLfoX%2FTbPSDcIr%2Bq4oKDibqNFmGdFcWiGopeiy5gp8%2FUF20dIjchYXghtpaf56tCyZtfU5zSWMpW7y9or1ZzcO7oQSxzoBduhO24RjQrsYfIa4iyHJhy0MyK10dgcXiuBsH1YsoKR9n0TiYTWV3ICAD4wD8mtMjEJodqdS8XNGzsQvjD%2FbdLowp%2FHTvwY6pgGLKwyx0C4SBWycCgiGBQ5eDFvVHv%2FLuu7uCk0QtzJExNJCo7iILHUBuTJiGPkG2qcUvhcUYQe94HcLwJzo9n6CswkoK6ZqDQuwjKGFaiB7lmDp5%2Fm1057JdT4DzNce%2FnZodIaBfQcH2aknN48nj9p%2BtCQQ5pcoNU9S8N2Z9K5HtY9qlh1Z6VNM2oWP67M1BW%2Fcz5bXUg6u9QEYmPYqtsmbRNu0lSEv&X-Amz-Signature=6a351fe8d617908b82e5b3ea8ad7056e99864a19fe5fcfff21c08e7d7c314d72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UUOW3W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ159ecuujzmK6BaDBxQlwBJf8GfWAdOm8AXUn4q%2BSaAiAmv45UW99QTCJRKDvt7%2FhzqQWOSbP5dd5OVDZI3%2Bqr2yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMAZQMSj9he%2Bl3AxcwKtwDdlMgJuoalgtztpyjv45NBYroWl5PVDCWj0uU1Li2%2F06fX7oXGpeFNO6sdjCcSlissXMPZ%2BgmLiDnKvCV0Ymsi0vZlr8S%2FArhw4hlAq1kgb8tERaIUfykNN7w9fLa44K75gvbNeqRVvOKUJ%2FoI2t3A3TBoUn8D423SA%2B2VMXINRF4ONnU2wapWEx2hB8XcVu02o0ocH8nE11FTBP1oi49eTPvPZvHIq6kVrFRDPIPdkNWG%2BcyU2zOW%2FZQvN9kqCY%2BH1pfBZIdGrNh7S%2BPQQRPTpiudk0TICy9oIQbYgM3raQP5FyVgvqN0qb3uNAkQ9aISzlYQweZPBOGoNUKbWEEBExJ0Rc%2FH1QN3QmIUyxmRb8mtC8DTfg8FP%2F1nS3VqkLFO0DmfWG%2FYoRVLotUgZtbYEKYW7jylZmXL3P5QgYHCPzjZViQHpL%2F74cm5wHINTp5W2L4pvtLfoX%2FTbPSDcIr%2Bq4oKDibqNFmGdFcWiGopeiy5gp8%2FUF20dIjchYXghtpaf56tCyZtfU5zSWMpW7y9or1ZzcO7oQSxzoBduhO24RjQrsYfIa4iyHJhy0MyK10dgcXiuBsH1YsoKR9n0TiYTWV3ICAD4wD8mtMjEJodqdS8XNGzsQvjD%2FbdLowp%2FHTvwY6pgGLKwyx0C4SBWycCgiGBQ5eDFvVHv%2FLuu7uCk0QtzJExNJCo7iILHUBuTJiGPkG2qcUvhcUYQe94HcLwJzo9n6CswkoK6ZqDQuwjKGFaiB7lmDp5%2Fm1057JdT4DzNce%2FnZodIaBfQcH2aknN48nj9p%2BtCQQ5pcoNU9S8N2Z9K5HtY9qlh1Z6VNM2oWP67M1BW%2Fcz5bXUg6u9QEYmPYqtsmbRNu0lSEv&X-Amz-Signature=f0e62100be24f43e6c5b7ac106dab6980bf24d09a3c004b7aba1fc58700da654&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UUOW3W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ159ecuujzmK6BaDBxQlwBJf8GfWAdOm8AXUn4q%2BSaAiAmv45UW99QTCJRKDvt7%2FhzqQWOSbP5dd5OVDZI3%2Bqr2yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMAZQMSj9he%2Bl3AxcwKtwDdlMgJuoalgtztpyjv45NBYroWl5PVDCWj0uU1Li2%2F06fX7oXGpeFNO6sdjCcSlissXMPZ%2BgmLiDnKvCV0Ymsi0vZlr8S%2FArhw4hlAq1kgb8tERaIUfykNN7w9fLa44K75gvbNeqRVvOKUJ%2FoI2t3A3TBoUn8D423SA%2B2VMXINRF4ONnU2wapWEx2hB8XcVu02o0ocH8nE11FTBP1oi49eTPvPZvHIq6kVrFRDPIPdkNWG%2BcyU2zOW%2FZQvN9kqCY%2BH1pfBZIdGrNh7S%2BPQQRPTpiudk0TICy9oIQbYgM3raQP5FyVgvqN0qb3uNAkQ9aISzlYQweZPBOGoNUKbWEEBExJ0Rc%2FH1QN3QmIUyxmRb8mtC8DTfg8FP%2F1nS3VqkLFO0DmfWG%2FYoRVLotUgZtbYEKYW7jylZmXL3P5QgYHCPzjZViQHpL%2F74cm5wHINTp5W2L4pvtLfoX%2FTbPSDcIr%2Bq4oKDibqNFmGdFcWiGopeiy5gp8%2FUF20dIjchYXghtpaf56tCyZtfU5zSWMpW7y9or1ZzcO7oQSxzoBduhO24RjQrsYfIa4iyHJhy0MyK10dgcXiuBsH1YsoKR9n0TiYTWV3ICAD4wD8mtMjEJodqdS8XNGzsQvjD%2FbdLowp%2FHTvwY6pgGLKwyx0C4SBWycCgiGBQ5eDFvVHv%2FLuu7uCk0QtzJExNJCo7iILHUBuTJiGPkG2qcUvhcUYQe94HcLwJzo9n6CswkoK6ZqDQuwjKGFaiB7lmDp5%2Fm1057JdT4DzNce%2FnZodIaBfQcH2aknN48nj9p%2BtCQQ5pcoNU9S8N2Z9K5HtY9qlh1Z6VNM2oWP67M1BW%2Fcz5bXUg6u9QEYmPYqtsmbRNu0lSEv&X-Amz-Signature=702de0a7f0b7467ada2a2ddf45b93351ca0ce767163ca8d5ca3b9127bb035e15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UUOW3W%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ159ecuujzmK6BaDBxQlwBJf8GfWAdOm8AXUn4q%2BSaAiAmv45UW99QTCJRKDvt7%2FhzqQWOSbP5dd5OVDZI3%2Bqr2yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMAZQMSj9he%2Bl3AxcwKtwDdlMgJuoalgtztpyjv45NBYroWl5PVDCWj0uU1Li2%2F06fX7oXGpeFNO6sdjCcSlissXMPZ%2BgmLiDnKvCV0Ymsi0vZlr8S%2FArhw4hlAq1kgb8tERaIUfykNN7w9fLa44K75gvbNeqRVvOKUJ%2FoI2t3A3TBoUn8D423SA%2B2VMXINRF4ONnU2wapWEx2hB8XcVu02o0ocH8nE11FTBP1oi49eTPvPZvHIq6kVrFRDPIPdkNWG%2BcyU2zOW%2FZQvN9kqCY%2BH1pfBZIdGrNh7S%2BPQQRPTpiudk0TICy9oIQbYgM3raQP5FyVgvqN0qb3uNAkQ9aISzlYQweZPBOGoNUKbWEEBExJ0Rc%2FH1QN3QmIUyxmRb8mtC8DTfg8FP%2F1nS3VqkLFO0DmfWG%2FYoRVLotUgZtbYEKYW7jylZmXL3P5QgYHCPzjZViQHpL%2F74cm5wHINTp5W2L4pvtLfoX%2FTbPSDcIr%2Bq4oKDibqNFmGdFcWiGopeiy5gp8%2FUF20dIjchYXghtpaf56tCyZtfU5zSWMpW7y9or1ZzcO7oQSxzoBduhO24RjQrsYfIa4iyHJhy0MyK10dgcXiuBsH1YsoKR9n0TiYTWV3ICAD4wD8mtMjEJodqdS8XNGzsQvjD%2FbdLowp%2FHTvwY6pgGLKwyx0C4SBWycCgiGBQ5eDFvVHv%2FLuu7uCk0QtzJExNJCo7iILHUBuTJiGPkG2qcUvhcUYQe94HcLwJzo9n6CswkoK6ZqDQuwjKGFaiB7lmDp5%2Fm1057JdT4DzNce%2FnZodIaBfQcH2aknN48nj9p%2BtCQQ5pcoNU9S8N2Z9K5HtY9qlh1Z6VNM2oWP67M1BW%2Fcz5bXUg6u9QEYmPYqtsmbRNu0lSEv&X-Amz-Signature=93f9de0c27d82ac4a0ef69747954725fed668adf32029dea29056915d9af5d65&X-Amz-SignedHeaders=host&x-id=GetObject)
