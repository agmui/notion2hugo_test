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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGM2VB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuma9yndjNA4XGBMZh%2BgyuyobswRwKZQ7DTwCHtY5ymAIhAPtB%2FDAVaUD70neFa41H69BSJM2WY82jiUtNAEb2qC7aKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P8U%2B6X85qLUSL10q3APN%2FEDLX1kq%2BVPhjkNAf9eFkCuS9RBszwU3bB3jPe3LrbMxxAsHWfUaQDv%2FWQGGAv1qVuiqAH9%2F0f4vyKORncRyaPXK7S5PWwH7lmuh5%2BahSUQ423kT81uu%2B0fCvOc6WQvAFIBMa06mnGzc85F%2FG8e9Y4wFpbL%2FSCsA59ZwKDy3DzPeQ0ChLi%2BRku5IPpXtO4I38SAF0fZ%2Fcsaf0SLSPV39ynlvQ2PhoVberwFYCNQ3vQmSP9JX5BHoTWaONrJb%2BPOdOAiMTJNslzz%2F1NJ%2Fj7Cdb3vRPpQnlVM0DPxCrjBbOXDLdqUZ8lVPkIdTJhxb3lW7knkSdBQ5qhXIQqf0usztEJW%2BppbXa5etNPz9PK6ip5sz41ahicH26tmcvHrLsLi%2FJ5AiUW%2BqpgpkXnUWHi2JkgVVDJDx4aFRBfgJHVT2lmCK0BuEUz%2F1hGmi%2FOHiv%2FI27f5MFp01%2FFY4U5PStypd9cxIW1rgZfLj%2BjOjzCbDNaEutkheiBDa6HLkY636wrfwkp%2FbwDaVnEBEWYn0ICAOkhXElhQTycV9siuCNwjW0PgxfwH1z1uEeXCJVd2T1etO7mAdrkiNvQsboqW6i16D6R6fV79DvB6%2F%2FL%2BVs5m4SjY3pylP6OL%2Bmv8MCDCA2IzABjqkAdILlPuadhVt65ivi%2B7X0zmJJq1RwqIP6OPf2CoIoAUuMxJXzxjdpt2uXt8CB68aKHIsCQML9k%2BT3Mve0b7GT5bpd3CxaVyyDPlCU9S8vcyIyyPQnjYYoES%2FtFaCRdJ16aM14qCshVebZeH8bX6V4xUZS%2FYj%2FaLGd0sNOmENyb2s7natX03LPDCCUdsrlqr2z%2B5CoOVRSDQOboUGXYvb7h%2FEFD0T&X-Amz-Signature=5c93ed31d576b1866c9d7bfe97f421e6bd6a6432fae8aafac96787f010e14738&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGM2VB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuma9yndjNA4XGBMZh%2BgyuyobswRwKZQ7DTwCHtY5ymAIhAPtB%2FDAVaUD70neFa41H69BSJM2WY82jiUtNAEb2qC7aKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P8U%2B6X85qLUSL10q3APN%2FEDLX1kq%2BVPhjkNAf9eFkCuS9RBszwU3bB3jPe3LrbMxxAsHWfUaQDv%2FWQGGAv1qVuiqAH9%2F0f4vyKORncRyaPXK7S5PWwH7lmuh5%2BahSUQ423kT81uu%2B0fCvOc6WQvAFIBMa06mnGzc85F%2FG8e9Y4wFpbL%2FSCsA59ZwKDy3DzPeQ0ChLi%2BRku5IPpXtO4I38SAF0fZ%2Fcsaf0SLSPV39ynlvQ2PhoVberwFYCNQ3vQmSP9JX5BHoTWaONrJb%2BPOdOAiMTJNslzz%2F1NJ%2Fj7Cdb3vRPpQnlVM0DPxCrjBbOXDLdqUZ8lVPkIdTJhxb3lW7knkSdBQ5qhXIQqf0usztEJW%2BppbXa5etNPz9PK6ip5sz41ahicH26tmcvHrLsLi%2FJ5AiUW%2BqpgpkXnUWHi2JkgVVDJDx4aFRBfgJHVT2lmCK0BuEUz%2F1hGmi%2FOHiv%2FI27f5MFp01%2FFY4U5PStypd9cxIW1rgZfLj%2BjOjzCbDNaEutkheiBDa6HLkY636wrfwkp%2FbwDaVnEBEWYn0ICAOkhXElhQTycV9siuCNwjW0PgxfwH1z1uEeXCJVd2T1etO7mAdrkiNvQsboqW6i16D6R6fV79DvB6%2F%2FL%2BVs5m4SjY3pylP6OL%2Bmv8MCDCA2IzABjqkAdILlPuadhVt65ivi%2B7X0zmJJq1RwqIP6OPf2CoIoAUuMxJXzxjdpt2uXt8CB68aKHIsCQML9k%2BT3Mve0b7GT5bpd3CxaVyyDPlCU9S8vcyIyyPQnjYYoES%2FtFaCRdJ16aM14qCshVebZeH8bX6V4xUZS%2FYj%2FaLGd0sNOmENyb2s7natX03LPDCCUdsrlqr2z%2B5CoOVRSDQOboUGXYvb7h%2FEFD0T&X-Amz-Signature=bae33deed6a2889c03e1edbd6d824d041a7e7538078c8d1f4af76f4c1ddf0ead&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGM2VB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuma9yndjNA4XGBMZh%2BgyuyobswRwKZQ7DTwCHtY5ymAIhAPtB%2FDAVaUD70neFa41H69BSJM2WY82jiUtNAEb2qC7aKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P8U%2B6X85qLUSL10q3APN%2FEDLX1kq%2BVPhjkNAf9eFkCuS9RBszwU3bB3jPe3LrbMxxAsHWfUaQDv%2FWQGGAv1qVuiqAH9%2F0f4vyKORncRyaPXK7S5PWwH7lmuh5%2BahSUQ423kT81uu%2B0fCvOc6WQvAFIBMa06mnGzc85F%2FG8e9Y4wFpbL%2FSCsA59ZwKDy3DzPeQ0ChLi%2BRku5IPpXtO4I38SAF0fZ%2Fcsaf0SLSPV39ynlvQ2PhoVberwFYCNQ3vQmSP9JX5BHoTWaONrJb%2BPOdOAiMTJNslzz%2F1NJ%2Fj7Cdb3vRPpQnlVM0DPxCrjBbOXDLdqUZ8lVPkIdTJhxb3lW7knkSdBQ5qhXIQqf0usztEJW%2BppbXa5etNPz9PK6ip5sz41ahicH26tmcvHrLsLi%2FJ5AiUW%2BqpgpkXnUWHi2JkgVVDJDx4aFRBfgJHVT2lmCK0BuEUz%2F1hGmi%2FOHiv%2FI27f5MFp01%2FFY4U5PStypd9cxIW1rgZfLj%2BjOjzCbDNaEutkheiBDa6HLkY636wrfwkp%2FbwDaVnEBEWYn0ICAOkhXElhQTycV9siuCNwjW0PgxfwH1z1uEeXCJVd2T1etO7mAdrkiNvQsboqW6i16D6R6fV79DvB6%2F%2FL%2BVs5m4SjY3pylP6OL%2Bmv8MCDCA2IzABjqkAdILlPuadhVt65ivi%2B7X0zmJJq1RwqIP6OPf2CoIoAUuMxJXzxjdpt2uXt8CB68aKHIsCQML9k%2BT3Mve0b7GT5bpd3CxaVyyDPlCU9S8vcyIyyPQnjYYoES%2FtFaCRdJ16aM14qCshVebZeH8bX6V4xUZS%2FYj%2FaLGd0sNOmENyb2s7natX03LPDCCUdsrlqr2z%2B5CoOVRSDQOboUGXYvb7h%2FEFD0T&X-Amz-Signature=a0a24ad1f41a2d1b0adfd87495047f0ee8d36014c5e2b9975aed4fd225d95d76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGM2VB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuma9yndjNA4XGBMZh%2BgyuyobswRwKZQ7DTwCHtY5ymAIhAPtB%2FDAVaUD70neFa41H69BSJM2WY82jiUtNAEb2qC7aKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P8U%2B6X85qLUSL10q3APN%2FEDLX1kq%2BVPhjkNAf9eFkCuS9RBszwU3bB3jPe3LrbMxxAsHWfUaQDv%2FWQGGAv1qVuiqAH9%2F0f4vyKORncRyaPXK7S5PWwH7lmuh5%2BahSUQ423kT81uu%2B0fCvOc6WQvAFIBMa06mnGzc85F%2FG8e9Y4wFpbL%2FSCsA59ZwKDy3DzPeQ0ChLi%2BRku5IPpXtO4I38SAF0fZ%2Fcsaf0SLSPV39ynlvQ2PhoVberwFYCNQ3vQmSP9JX5BHoTWaONrJb%2BPOdOAiMTJNslzz%2F1NJ%2Fj7Cdb3vRPpQnlVM0DPxCrjBbOXDLdqUZ8lVPkIdTJhxb3lW7knkSdBQ5qhXIQqf0usztEJW%2BppbXa5etNPz9PK6ip5sz41ahicH26tmcvHrLsLi%2FJ5AiUW%2BqpgpkXnUWHi2JkgVVDJDx4aFRBfgJHVT2lmCK0BuEUz%2F1hGmi%2FOHiv%2FI27f5MFp01%2FFY4U5PStypd9cxIW1rgZfLj%2BjOjzCbDNaEutkheiBDa6HLkY636wrfwkp%2FbwDaVnEBEWYn0ICAOkhXElhQTycV9siuCNwjW0PgxfwH1z1uEeXCJVd2T1etO7mAdrkiNvQsboqW6i16D6R6fV79DvB6%2F%2FL%2BVs5m4SjY3pylP6OL%2Bmv8MCDCA2IzABjqkAdILlPuadhVt65ivi%2B7X0zmJJq1RwqIP6OPf2CoIoAUuMxJXzxjdpt2uXt8CB68aKHIsCQML9k%2BT3Mve0b7GT5bpd3CxaVyyDPlCU9S8vcyIyyPQnjYYoES%2FtFaCRdJ16aM14qCshVebZeH8bX6V4xUZS%2FYj%2FaLGd0sNOmENyb2s7natX03LPDCCUdsrlqr2z%2B5CoOVRSDQOboUGXYvb7h%2FEFD0T&X-Amz-Signature=f396a2408d96a6dd7a099969943620de80985750cf73136299d10fd6628f5330&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGM2VB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuma9yndjNA4XGBMZh%2BgyuyobswRwKZQ7DTwCHtY5ymAIhAPtB%2FDAVaUD70neFa41H69BSJM2WY82jiUtNAEb2qC7aKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P8U%2B6X85qLUSL10q3APN%2FEDLX1kq%2BVPhjkNAf9eFkCuS9RBszwU3bB3jPe3LrbMxxAsHWfUaQDv%2FWQGGAv1qVuiqAH9%2F0f4vyKORncRyaPXK7S5PWwH7lmuh5%2BahSUQ423kT81uu%2B0fCvOc6WQvAFIBMa06mnGzc85F%2FG8e9Y4wFpbL%2FSCsA59ZwKDy3DzPeQ0ChLi%2BRku5IPpXtO4I38SAF0fZ%2Fcsaf0SLSPV39ynlvQ2PhoVberwFYCNQ3vQmSP9JX5BHoTWaONrJb%2BPOdOAiMTJNslzz%2F1NJ%2Fj7Cdb3vRPpQnlVM0DPxCrjBbOXDLdqUZ8lVPkIdTJhxb3lW7knkSdBQ5qhXIQqf0usztEJW%2BppbXa5etNPz9PK6ip5sz41ahicH26tmcvHrLsLi%2FJ5AiUW%2BqpgpkXnUWHi2JkgVVDJDx4aFRBfgJHVT2lmCK0BuEUz%2F1hGmi%2FOHiv%2FI27f5MFp01%2FFY4U5PStypd9cxIW1rgZfLj%2BjOjzCbDNaEutkheiBDa6HLkY636wrfwkp%2FbwDaVnEBEWYn0ICAOkhXElhQTycV9siuCNwjW0PgxfwH1z1uEeXCJVd2T1etO7mAdrkiNvQsboqW6i16D6R6fV79DvB6%2F%2FL%2BVs5m4SjY3pylP6OL%2Bmv8MCDCA2IzABjqkAdILlPuadhVt65ivi%2B7X0zmJJq1RwqIP6OPf2CoIoAUuMxJXzxjdpt2uXt8CB68aKHIsCQML9k%2BT3Mve0b7GT5bpd3CxaVyyDPlCU9S8vcyIyyPQnjYYoES%2FtFaCRdJ16aM14qCshVebZeH8bX6V4xUZS%2FYj%2FaLGd0sNOmENyb2s7natX03LPDCCUdsrlqr2z%2B5CoOVRSDQOboUGXYvb7h%2FEFD0T&X-Amz-Signature=4594b3bbaccfcbdb91bd5a95d32a593c5e9112be3d7cc17909bea6b6c4705013&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGM2VB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuma9yndjNA4XGBMZh%2BgyuyobswRwKZQ7DTwCHtY5ymAIhAPtB%2FDAVaUD70neFa41H69BSJM2WY82jiUtNAEb2qC7aKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P8U%2B6X85qLUSL10q3APN%2FEDLX1kq%2BVPhjkNAf9eFkCuS9RBszwU3bB3jPe3LrbMxxAsHWfUaQDv%2FWQGGAv1qVuiqAH9%2F0f4vyKORncRyaPXK7S5PWwH7lmuh5%2BahSUQ423kT81uu%2B0fCvOc6WQvAFIBMa06mnGzc85F%2FG8e9Y4wFpbL%2FSCsA59ZwKDy3DzPeQ0ChLi%2BRku5IPpXtO4I38SAF0fZ%2Fcsaf0SLSPV39ynlvQ2PhoVberwFYCNQ3vQmSP9JX5BHoTWaONrJb%2BPOdOAiMTJNslzz%2F1NJ%2Fj7Cdb3vRPpQnlVM0DPxCrjBbOXDLdqUZ8lVPkIdTJhxb3lW7knkSdBQ5qhXIQqf0usztEJW%2BppbXa5etNPz9PK6ip5sz41ahicH26tmcvHrLsLi%2FJ5AiUW%2BqpgpkXnUWHi2JkgVVDJDx4aFRBfgJHVT2lmCK0BuEUz%2F1hGmi%2FOHiv%2FI27f5MFp01%2FFY4U5PStypd9cxIW1rgZfLj%2BjOjzCbDNaEutkheiBDa6HLkY636wrfwkp%2FbwDaVnEBEWYn0ICAOkhXElhQTycV9siuCNwjW0PgxfwH1z1uEeXCJVd2T1etO7mAdrkiNvQsboqW6i16D6R6fV79DvB6%2F%2FL%2BVs5m4SjY3pylP6OL%2Bmv8MCDCA2IzABjqkAdILlPuadhVt65ivi%2B7X0zmJJq1RwqIP6OPf2CoIoAUuMxJXzxjdpt2uXt8CB68aKHIsCQML9k%2BT3Mve0b7GT5bpd3CxaVyyDPlCU9S8vcyIyyPQnjYYoES%2FtFaCRdJ16aM14qCshVebZeH8bX6V4xUZS%2FYj%2FaLGd0sNOmENyb2s7natX03LPDCCUdsrlqr2z%2B5CoOVRSDQOboUGXYvb7h%2FEFD0T&X-Amz-Signature=d504b1da1945af333d8a89114d6a7733345d32e23d0687779e91235783823bbe&X-Amz-SignedHeaders=host&x-id=GetObject)
