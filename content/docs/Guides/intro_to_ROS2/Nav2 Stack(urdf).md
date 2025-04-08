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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXA2CLUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBKumNEA0TAjAbkP4TxAqI7Bldm80OaaONEKoE0tP1HEAiAszikfFR1IsVZHs1xLXzMWBcID%2BSGf35tWK4FA%2Fp4tfCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM2gqgu89e0DKauSn6KtwDrSM%2BfY7gcAxYz%2FhgM6ACw4ZzGltnDEVTWgl4gDMPzTmvcxqwGuMC%2Bn7XBDqBXruKUL5jsK5oiCej1sYvq8aVC6pK2gyZ4MlzpqmjZKjaC5cBx0bmd2bCRUdSi%2B06%2BeqgQA9VXOHR7nrqOFlUjWJL15%2BwtioLw0esTLLX6ak5iI2FTa5U04kQUlgGbuUzcyvSwN1kMKlDcYTizzYdPxm%2Bxik33EeDEWfjBhD4Yfd7%2FNIiclYLFY80tt0j1ZSAPo%2F7N561GSdlgigQH%2Btwdb1V%2Bk67Vz8T5SkxsCuDYe1LgRa3EzOk73PBnWi483%2FIgAchLzCvVVTc%2BTdsDLHXWlvFxL0Q3QjIg5Ch%2F2KyZqESO4wSZjtPhVawdYassGJdIFOlGXPFDH1OwPXu5ciGwPsVQdyVZromBauxPDnN1XKDuIcXzlKpCXMdJ7upqAFT7bSGP8Tc2tPuaL%2B%2BJz9Lsmcw51Cx56wEYdkOznMQ8WBFvSx8af7BuldrlnYXts9TSerbLtY%2FUXCRArzP4uX4YKcYWSVG1brAjAIxVN2juYZ9DxnXmXwc1Jf7OJpEXVS%2Bvxw06wvWNfp44l9DFMDwcypuIFXARg4Me%2B%2Bi4ywtkciudXjdoqb8GouaILKImUEw09XVvwY6pgHSiJYMQTqr9x3xHk7E2%2BuwbgYj7Ff%2B1%2FkQS%2FqAsFX5jxE5hagcWj9176syP8YTYg%2Brzv82Ra8%2FUV%2BIlQdSCoJolD%2BtmWl0Iv5OgZn2r9vvxukJacpyG2SkxchF%2F9PPcQ3w2vAyaBIgtUEI0rbSKnLehUrBRA5Jf5LHRbWgriK%2BD19aF73Z%2BwLMjYn31tcIy%2FbcEGcUI%2BbIsccE7T%2BbRKVwd%2Bue3UYV&X-Amz-Signature=b10cd2b5a77b63fae78bd7d13991bce6e785f0a4b37a15c76577bbe737a929b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXA2CLUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBKumNEA0TAjAbkP4TxAqI7Bldm80OaaONEKoE0tP1HEAiAszikfFR1IsVZHs1xLXzMWBcID%2BSGf35tWK4FA%2Fp4tfCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM2gqgu89e0DKauSn6KtwDrSM%2BfY7gcAxYz%2FhgM6ACw4ZzGltnDEVTWgl4gDMPzTmvcxqwGuMC%2Bn7XBDqBXruKUL5jsK5oiCej1sYvq8aVC6pK2gyZ4MlzpqmjZKjaC5cBx0bmd2bCRUdSi%2B06%2BeqgQA9VXOHR7nrqOFlUjWJL15%2BwtioLw0esTLLX6ak5iI2FTa5U04kQUlgGbuUzcyvSwN1kMKlDcYTizzYdPxm%2Bxik33EeDEWfjBhD4Yfd7%2FNIiclYLFY80tt0j1ZSAPo%2F7N561GSdlgigQH%2Btwdb1V%2Bk67Vz8T5SkxsCuDYe1LgRa3EzOk73PBnWi483%2FIgAchLzCvVVTc%2BTdsDLHXWlvFxL0Q3QjIg5Ch%2F2KyZqESO4wSZjtPhVawdYassGJdIFOlGXPFDH1OwPXu5ciGwPsVQdyVZromBauxPDnN1XKDuIcXzlKpCXMdJ7upqAFT7bSGP8Tc2tPuaL%2B%2BJz9Lsmcw51Cx56wEYdkOznMQ8WBFvSx8af7BuldrlnYXts9TSerbLtY%2FUXCRArzP4uX4YKcYWSVG1brAjAIxVN2juYZ9DxnXmXwc1Jf7OJpEXVS%2Bvxw06wvWNfp44l9DFMDwcypuIFXARg4Me%2B%2Bi4ywtkciudXjdoqb8GouaILKImUEw09XVvwY6pgHSiJYMQTqr9x3xHk7E2%2BuwbgYj7Ff%2B1%2FkQS%2FqAsFX5jxE5hagcWj9176syP8YTYg%2Brzv82Ra8%2FUV%2BIlQdSCoJolD%2BtmWl0Iv5OgZn2r9vvxukJacpyG2SkxchF%2F9PPcQ3w2vAyaBIgtUEI0rbSKnLehUrBRA5Jf5LHRbWgriK%2BD19aF73Z%2BwLMjYn31tcIy%2FbcEGcUI%2BbIsccE7T%2BbRKVwd%2Bue3UYV&X-Amz-Signature=d925a9e014a67a0ab4e160f02f2799155781b0c889b1f00f7d9a2865ad1ca9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXA2CLUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBKumNEA0TAjAbkP4TxAqI7Bldm80OaaONEKoE0tP1HEAiAszikfFR1IsVZHs1xLXzMWBcID%2BSGf35tWK4FA%2Fp4tfCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM2gqgu89e0DKauSn6KtwDrSM%2BfY7gcAxYz%2FhgM6ACw4ZzGltnDEVTWgl4gDMPzTmvcxqwGuMC%2Bn7XBDqBXruKUL5jsK5oiCej1sYvq8aVC6pK2gyZ4MlzpqmjZKjaC5cBx0bmd2bCRUdSi%2B06%2BeqgQA9VXOHR7nrqOFlUjWJL15%2BwtioLw0esTLLX6ak5iI2FTa5U04kQUlgGbuUzcyvSwN1kMKlDcYTizzYdPxm%2Bxik33EeDEWfjBhD4Yfd7%2FNIiclYLFY80tt0j1ZSAPo%2F7N561GSdlgigQH%2Btwdb1V%2Bk67Vz8T5SkxsCuDYe1LgRa3EzOk73PBnWi483%2FIgAchLzCvVVTc%2BTdsDLHXWlvFxL0Q3QjIg5Ch%2F2KyZqESO4wSZjtPhVawdYassGJdIFOlGXPFDH1OwPXu5ciGwPsVQdyVZromBauxPDnN1XKDuIcXzlKpCXMdJ7upqAFT7bSGP8Tc2tPuaL%2B%2BJz9Lsmcw51Cx56wEYdkOznMQ8WBFvSx8af7BuldrlnYXts9TSerbLtY%2FUXCRArzP4uX4YKcYWSVG1brAjAIxVN2juYZ9DxnXmXwc1Jf7OJpEXVS%2Bvxw06wvWNfp44l9DFMDwcypuIFXARg4Me%2B%2Bi4ywtkciudXjdoqb8GouaILKImUEw09XVvwY6pgHSiJYMQTqr9x3xHk7E2%2BuwbgYj7Ff%2B1%2FkQS%2FqAsFX5jxE5hagcWj9176syP8YTYg%2Brzv82Ra8%2FUV%2BIlQdSCoJolD%2BtmWl0Iv5OgZn2r9vvxukJacpyG2SkxchF%2F9PPcQ3w2vAyaBIgtUEI0rbSKnLehUrBRA5Jf5LHRbWgriK%2BD19aF73Z%2BwLMjYn31tcIy%2FbcEGcUI%2BbIsccE7T%2BbRKVwd%2Bue3UYV&X-Amz-Signature=4792b5d9f3fa99ec156608d21fe75ae6ee0388ef3c8a02c33ffe5bf6aa5df70c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXA2CLUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBKumNEA0TAjAbkP4TxAqI7Bldm80OaaONEKoE0tP1HEAiAszikfFR1IsVZHs1xLXzMWBcID%2BSGf35tWK4FA%2Fp4tfCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM2gqgu89e0DKauSn6KtwDrSM%2BfY7gcAxYz%2FhgM6ACw4ZzGltnDEVTWgl4gDMPzTmvcxqwGuMC%2Bn7XBDqBXruKUL5jsK5oiCej1sYvq8aVC6pK2gyZ4MlzpqmjZKjaC5cBx0bmd2bCRUdSi%2B06%2BeqgQA9VXOHR7nrqOFlUjWJL15%2BwtioLw0esTLLX6ak5iI2FTa5U04kQUlgGbuUzcyvSwN1kMKlDcYTizzYdPxm%2Bxik33EeDEWfjBhD4Yfd7%2FNIiclYLFY80tt0j1ZSAPo%2F7N561GSdlgigQH%2Btwdb1V%2Bk67Vz8T5SkxsCuDYe1LgRa3EzOk73PBnWi483%2FIgAchLzCvVVTc%2BTdsDLHXWlvFxL0Q3QjIg5Ch%2F2KyZqESO4wSZjtPhVawdYassGJdIFOlGXPFDH1OwPXu5ciGwPsVQdyVZromBauxPDnN1XKDuIcXzlKpCXMdJ7upqAFT7bSGP8Tc2tPuaL%2B%2BJz9Lsmcw51Cx56wEYdkOznMQ8WBFvSx8af7BuldrlnYXts9TSerbLtY%2FUXCRArzP4uX4YKcYWSVG1brAjAIxVN2juYZ9DxnXmXwc1Jf7OJpEXVS%2Bvxw06wvWNfp44l9DFMDwcypuIFXARg4Me%2B%2Bi4ywtkciudXjdoqb8GouaILKImUEw09XVvwY6pgHSiJYMQTqr9x3xHk7E2%2BuwbgYj7Ff%2B1%2FkQS%2FqAsFX5jxE5hagcWj9176syP8YTYg%2Brzv82Ra8%2FUV%2BIlQdSCoJolD%2BtmWl0Iv5OgZn2r9vvxukJacpyG2SkxchF%2F9PPcQ3w2vAyaBIgtUEI0rbSKnLehUrBRA5Jf5LHRbWgriK%2BD19aF73Z%2BwLMjYn31tcIy%2FbcEGcUI%2BbIsccE7T%2BbRKVwd%2Bue3UYV&X-Amz-Signature=dc7b0a94f6ac8e803e5158371d19ebabd31bf33fb983e6c4629413aeaa1628fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXA2CLUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBKumNEA0TAjAbkP4TxAqI7Bldm80OaaONEKoE0tP1HEAiAszikfFR1IsVZHs1xLXzMWBcID%2BSGf35tWK4FA%2Fp4tfCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM2gqgu89e0DKauSn6KtwDrSM%2BfY7gcAxYz%2FhgM6ACw4ZzGltnDEVTWgl4gDMPzTmvcxqwGuMC%2Bn7XBDqBXruKUL5jsK5oiCej1sYvq8aVC6pK2gyZ4MlzpqmjZKjaC5cBx0bmd2bCRUdSi%2B06%2BeqgQA9VXOHR7nrqOFlUjWJL15%2BwtioLw0esTLLX6ak5iI2FTa5U04kQUlgGbuUzcyvSwN1kMKlDcYTizzYdPxm%2Bxik33EeDEWfjBhD4Yfd7%2FNIiclYLFY80tt0j1ZSAPo%2F7N561GSdlgigQH%2Btwdb1V%2Bk67Vz8T5SkxsCuDYe1LgRa3EzOk73PBnWi483%2FIgAchLzCvVVTc%2BTdsDLHXWlvFxL0Q3QjIg5Ch%2F2KyZqESO4wSZjtPhVawdYassGJdIFOlGXPFDH1OwPXu5ciGwPsVQdyVZromBauxPDnN1XKDuIcXzlKpCXMdJ7upqAFT7bSGP8Tc2tPuaL%2B%2BJz9Lsmcw51Cx56wEYdkOznMQ8WBFvSx8af7BuldrlnYXts9TSerbLtY%2FUXCRArzP4uX4YKcYWSVG1brAjAIxVN2juYZ9DxnXmXwc1Jf7OJpEXVS%2Bvxw06wvWNfp44l9DFMDwcypuIFXARg4Me%2B%2Bi4ywtkciudXjdoqb8GouaILKImUEw09XVvwY6pgHSiJYMQTqr9x3xHk7E2%2BuwbgYj7Ff%2B1%2FkQS%2FqAsFX5jxE5hagcWj9176syP8YTYg%2Brzv82Ra8%2FUV%2BIlQdSCoJolD%2BtmWl0Iv5OgZn2r9vvxukJacpyG2SkxchF%2F9PPcQ3w2vAyaBIgtUEI0rbSKnLehUrBRA5Jf5LHRbWgriK%2BD19aF73Z%2BwLMjYn31tcIy%2FbcEGcUI%2BbIsccE7T%2BbRKVwd%2Bue3UYV&X-Amz-Signature=da07519efe05aca26cc3a2c656acdd0f5f14fa150051ac736ed4a9569a4641e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXA2CLUW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBKumNEA0TAjAbkP4TxAqI7Bldm80OaaONEKoE0tP1HEAiAszikfFR1IsVZHs1xLXzMWBcID%2BSGf35tWK4FA%2Fp4tfCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM2gqgu89e0DKauSn6KtwDrSM%2BfY7gcAxYz%2FhgM6ACw4ZzGltnDEVTWgl4gDMPzTmvcxqwGuMC%2Bn7XBDqBXruKUL5jsK5oiCej1sYvq8aVC6pK2gyZ4MlzpqmjZKjaC5cBx0bmd2bCRUdSi%2B06%2BeqgQA9VXOHR7nrqOFlUjWJL15%2BwtioLw0esTLLX6ak5iI2FTa5U04kQUlgGbuUzcyvSwN1kMKlDcYTizzYdPxm%2Bxik33EeDEWfjBhD4Yfd7%2FNIiclYLFY80tt0j1ZSAPo%2F7N561GSdlgigQH%2Btwdb1V%2Bk67Vz8T5SkxsCuDYe1LgRa3EzOk73PBnWi483%2FIgAchLzCvVVTc%2BTdsDLHXWlvFxL0Q3QjIg5Ch%2F2KyZqESO4wSZjtPhVawdYassGJdIFOlGXPFDH1OwPXu5ciGwPsVQdyVZromBauxPDnN1XKDuIcXzlKpCXMdJ7upqAFT7bSGP8Tc2tPuaL%2B%2BJz9Lsmcw51Cx56wEYdkOznMQ8WBFvSx8af7BuldrlnYXts9TSerbLtY%2FUXCRArzP4uX4YKcYWSVG1brAjAIxVN2juYZ9DxnXmXwc1Jf7OJpEXVS%2Bvxw06wvWNfp44l9DFMDwcypuIFXARg4Me%2B%2Bi4ywtkciudXjdoqb8GouaILKImUEw09XVvwY6pgHSiJYMQTqr9x3xHk7E2%2BuwbgYj7Ff%2B1%2FkQS%2FqAsFX5jxE5hagcWj9176syP8YTYg%2Brzv82Ra8%2FUV%2BIlQdSCoJolD%2BtmWl0Iv5OgZn2r9vvxukJacpyG2SkxchF%2F9PPcQ3w2vAyaBIgtUEI0rbSKnLehUrBRA5Jf5LHRbWgriK%2BD19aF73Z%2BwLMjYn31tcIy%2FbcEGcUI%2BbIsccE7T%2BbRKVwd%2Bue3UYV&X-Amz-Signature=a4ce873da107e221855fd0dd890586a1aaa69ebdfaf81f9fa43d42990d478f6f&X-Amz-SignedHeaders=host&x-id=GetObject)
