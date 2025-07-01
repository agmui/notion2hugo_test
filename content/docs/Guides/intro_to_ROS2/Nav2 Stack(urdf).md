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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPK2XME%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6dvPROlwzV8lt%2B%2FICYhc4nKcAdAqoD0POycbcnXImHAiBfAFGrl1pfLgW9JGg2Fp2835qMZs5oGACxNsijXKGq%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4IEKZ2XsMMhxtiZPKtwDtnE%2BlN7s9ub4uwLn1wNVMB5Ifyq5Z09oaaR9QUN6CdXn06RHLgQVsPPfqOvg0%2FvTrXotWaN1IbzA%2F%2BgX8wonyhKa8sRb8sMMuiGSmGQRfYxaEM1pn8cleug82w2DjmgYek4FoSALtbFYgft%2FAxXA0QqViWEw9USHTomtsQYv%2FF57uVVb4WX54T1UdZOdZyj2kK%2BVyBcV8uGjHkqZZCF%2BfNLcPr%2BemZ%2FaFaD%2BmKfGOyuay2Ctn1hnWA30jHCyssDUKm3lLM%2BpFAEO5PnxC7gODGIn9fnwhYxuJWccwgpzCN6bFX9W3pa%2BJw5LZrr%2BYVLbrC%2BGofIOWRejvaMPh614jQOGdvIY8zhCOGGEDt02hd8LLqsgLv%2FUGEr7Vc1wg5HFq3%2FpYYPsmpMo1pz5Z0Hk2JXrbXsX9D4bH8haAQPV9tQprPQtVXeFcMwq8cnCysFANtbRclg2E6lnRk6vHUTDC%2FsDYUIkvuGq0cnRDULFG7o6wS5uFWb2p5IUN0YN3ii1NiZ0B4yw5DHgUltCkAMIkMqH6R947P25nf0AsPz3fKgYGoueadQtPJLD289llAAsOiAn057PtY6Mz64a8pRXnKlEZA4VRVMg9HrvcHFzYdqTx1vsA910tEv9bZIw6suNwwY6pgH9atoI5DkyS4ONM%2BMIZHPsNd4AOXH8iRPoV2py8sZ02APfm%2BU3AnvUm5%2Fq69Sw9X0b5uFj5HgH1skJiCpGu4QisCXrjLeghIk65deIRs%2BLDgzrNrhF7A5BIEoWoSsdiL0FXUnHRDwZ4RG5MIC0vFsWE1JNGRsec5W5zNHS2RjHn8eEoQzCbbE8CveZrWp9PK9TNcZ4hUvk8lGfHC%2BempyVEkm%2FkkqX&X-Amz-Signature=511d83e4ec9ee1986e6d2e98b74e626781a733c2fc1a7b9c37b70fe505da86fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPK2XME%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6dvPROlwzV8lt%2B%2FICYhc4nKcAdAqoD0POycbcnXImHAiBfAFGrl1pfLgW9JGg2Fp2835qMZs5oGACxNsijXKGq%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4IEKZ2XsMMhxtiZPKtwDtnE%2BlN7s9ub4uwLn1wNVMB5Ifyq5Z09oaaR9QUN6CdXn06RHLgQVsPPfqOvg0%2FvTrXotWaN1IbzA%2F%2BgX8wonyhKa8sRb8sMMuiGSmGQRfYxaEM1pn8cleug82w2DjmgYek4FoSALtbFYgft%2FAxXA0QqViWEw9USHTomtsQYv%2FF57uVVb4WX54T1UdZOdZyj2kK%2BVyBcV8uGjHkqZZCF%2BfNLcPr%2BemZ%2FaFaD%2BmKfGOyuay2Ctn1hnWA30jHCyssDUKm3lLM%2BpFAEO5PnxC7gODGIn9fnwhYxuJWccwgpzCN6bFX9W3pa%2BJw5LZrr%2BYVLbrC%2BGofIOWRejvaMPh614jQOGdvIY8zhCOGGEDt02hd8LLqsgLv%2FUGEr7Vc1wg5HFq3%2FpYYPsmpMo1pz5Z0Hk2JXrbXsX9D4bH8haAQPV9tQprPQtVXeFcMwq8cnCysFANtbRclg2E6lnRk6vHUTDC%2FsDYUIkvuGq0cnRDULFG7o6wS5uFWb2p5IUN0YN3ii1NiZ0B4yw5DHgUltCkAMIkMqH6R947P25nf0AsPz3fKgYGoueadQtPJLD289llAAsOiAn057PtY6Mz64a8pRXnKlEZA4VRVMg9HrvcHFzYdqTx1vsA910tEv9bZIw6suNwwY6pgH9atoI5DkyS4ONM%2BMIZHPsNd4AOXH8iRPoV2py8sZ02APfm%2BU3AnvUm5%2Fq69Sw9X0b5uFj5HgH1skJiCpGu4QisCXrjLeghIk65deIRs%2BLDgzrNrhF7A5BIEoWoSsdiL0FXUnHRDwZ4RG5MIC0vFsWE1JNGRsec5W5zNHS2RjHn8eEoQzCbbE8CveZrWp9PK9TNcZ4hUvk8lGfHC%2BempyVEkm%2FkkqX&X-Amz-Signature=25051b772412fb2d6497642f728383ec2254c08a8a74c8c3323293eb185048fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPK2XME%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6dvPROlwzV8lt%2B%2FICYhc4nKcAdAqoD0POycbcnXImHAiBfAFGrl1pfLgW9JGg2Fp2835qMZs5oGACxNsijXKGq%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4IEKZ2XsMMhxtiZPKtwDtnE%2BlN7s9ub4uwLn1wNVMB5Ifyq5Z09oaaR9QUN6CdXn06RHLgQVsPPfqOvg0%2FvTrXotWaN1IbzA%2F%2BgX8wonyhKa8sRb8sMMuiGSmGQRfYxaEM1pn8cleug82w2DjmgYek4FoSALtbFYgft%2FAxXA0QqViWEw9USHTomtsQYv%2FF57uVVb4WX54T1UdZOdZyj2kK%2BVyBcV8uGjHkqZZCF%2BfNLcPr%2BemZ%2FaFaD%2BmKfGOyuay2Ctn1hnWA30jHCyssDUKm3lLM%2BpFAEO5PnxC7gODGIn9fnwhYxuJWccwgpzCN6bFX9W3pa%2BJw5LZrr%2BYVLbrC%2BGofIOWRejvaMPh614jQOGdvIY8zhCOGGEDt02hd8LLqsgLv%2FUGEr7Vc1wg5HFq3%2FpYYPsmpMo1pz5Z0Hk2JXrbXsX9D4bH8haAQPV9tQprPQtVXeFcMwq8cnCysFANtbRclg2E6lnRk6vHUTDC%2FsDYUIkvuGq0cnRDULFG7o6wS5uFWb2p5IUN0YN3ii1NiZ0B4yw5DHgUltCkAMIkMqH6R947P25nf0AsPz3fKgYGoueadQtPJLD289llAAsOiAn057PtY6Mz64a8pRXnKlEZA4VRVMg9HrvcHFzYdqTx1vsA910tEv9bZIw6suNwwY6pgH9atoI5DkyS4ONM%2BMIZHPsNd4AOXH8iRPoV2py8sZ02APfm%2BU3AnvUm5%2Fq69Sw9X0b5uFj5HgH1skJiCpGu4QisCXrjLeghIk65deIRs%2BLDgzrNrhF7A5BIEoWoSsdiL0FXUnHRDwZ4RG5MIC0vFsWE1JNGRsec5W5zNHS2RjHn8eEoQzCbbE8CveZrWp9PK9TNcZ4hUvk8lGfHC%2BempyVEkm%2FkkqX&X-Amz-Signature=33d1b6be2609492c5d4cfab79c0dd215e3ef390edfc850e928209594de2b6e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPK2XME%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6dvPROlwzV8lt%2B%2FICYhc4nKcAdAqoD0POycbcnXImHAiBfAFGrl1pfLgW9JGg2Fp2835qMZs5oGACxNsijXKGq%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4IEKZ2XsMMhxtiZPKtwDtnE%2BlN7s9ub4uwLn1wNVMB5Ifyq5Z09oaaR9QUN6CdXn06RHLgQVsPPfqOvg0%2FvTrXotWaN1IbzA%2F%2BgX8wonyhKa8sRb8sMMuiGSmGQRfYxaEM1pn8cleug82w2DjmgYek4FoSALtbFYgft%2FAxXA0QqViWEw9USHTomtsQYv%2FF57uVVb4WX54T1UdZOdZyj2kK%2BVyBcV8uGjHkqZZCF%2BfNLcPr%2BemZ%2FaFaD%2BmKfGOyuay2Ctn1hnWA30jHCyssDUKm3lLM%2BpFAEO5PnxC7gODGIn9fnwhYxuJWccwgpzCN6bFX9W3pa%2BJw5LZrr%2BYVLbrC%2BGofIOWRejvaMPh614jQOGdvIY8zhCOGGEDt02hd8LLqsgLv%2FUGEr7Vc1wg5HFq3%2FpYYPsmpMo1pz5Z0Hk2JXrbXsX9D4bH8haAQPV9tQprPQtVXeFcMwq8cnCysFANtbRclg2E6lnRk6vHUTDC%2FsDYUIkvuGq0cnRDULFG7o6wS5uFWb2p5IUN0YN3ii1NiZ0B4yw5DHgUltCkAMIkMqH6R947P25nf0AsPz3fKgYGoueadQtPJLD289llAAsOiAn057PtY6Mz64a8pRXnKlEZA4VRVMg9HrvcHFzYdqTx1vsA910tEv9bZIw6suNwwY6pgH9atoI5DkyS4ONM%2BMIZHPsNd4AOXH8iRPoV2py8sZ02APfm%2BU3AnvUm5%2Fq69Sw9X0b5uFj5HgH1skJiCpGu4QisCXrjLeghIk65deIRs%2BLDgzrNrhF7A5BIEoWoSsdiL0FXUnHRDwZ4RG5MIC0vFsWE1JNGRsec5W5zNHS2RjHn8eEoQzCbbE8CveZrWp9PK9TNcZ4hUvk8lGfHC%2BempyVEkm%2FkkqX&X-Amz-Signature=2e85a84ed22ec10afdc50abf0b17e6efe3437e236547dd8b0abc490dc6a02501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPK2XME%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6dvPROlwzV8lt%2B%2FICYhc4nKcAdAqoD0POycbcnXImHAiBfAFGrl1pfLgW9JGg2Fp2835qMZs5oGACxNsijXKGq%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4IEKZ2XsMMhxtiZPKtwDtnE%2BlN7s9ub4uwLn1wNVMB5Ifyq5Z09oaaR9QUN6CdXn06RHLgQVsPPfqOvg0%2FvTrXotWaN1IbzA%2F%2BgX8wonyhKa8sRb8sMMuiGSmGQRfYxaEM1pn8cleug82w2DjmgYek4FoSALtbFYgft%2FAxXA0QqViWEw9USHTomtsQYv%2FF57uVVb4WX54T1UdZOdZyj2kK%2BVyBcV8uGjHkqZZCF%2BfNLcPr%2BemZ%2FaFaD%2BmKfGOyuay2Ctn1hnWA30jHCyssDUKm3lLM%2BpFAEO5PnxC7gODGIn9fnwhYxuJWccwgpzCN6bFX9W3pa%2BJw5LZrr%2BYVLbrC%2BGofIOWRejvaMPh614jQOGdvIY8zhCOGGEDt02hd8LLqsgLv%2FUGEr7Vc1wg5HFq3%2FpYYPsmpMo1pz5Z0Hk2JXrbXsX9D4bH8haAQPV9tQprPQtVXeFcMwq8cnCysFANtbRclg2E6lnRk6vHUTDC%2FsDYUIkvuGq0cnRDULFG7o6wS5uFWb2p5IUN0YN3ii1NiZ0B4yw5DHgUltCkAMIkMqH6R947P25nf0AsPz3fKgYGoueadQtPJLD289llAAsOiAn057PtY6Mz64a8pRXnKlEZA4VRVMg9HrvcHFzYdqTx1vsA910tEv9bZIw6suNwwY6pgH9atoI5DkyS4ONM%2BMIZHPsNd4AOXH8iRPoV2py8sZ02APfm%2BU3AnvUm5%2Fq69Sw9X0b5uFj5HgH1skJiCpGu4QisCXrjLeghIk65deIRs%2BLDgzrNrhF7A5BIEoWoSsdiL0FXUnHRDwZ4RG5MIC0vFsWE1JNGRsec5W5zNHS2RjHn8eEoQzCbbE8CveZrWp9PK9TNcZ4hUvk8lGfHC%2BempyVEkm%2FkkqX&X-Amz-Signature=17920f5ae6ddbc23aaf83e00dc7a350adc46ffa99530d89c753582ffc0bee9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPK2XME%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6dvPROlwzV8lt%2B%2FICYhc4nKcAdAqoD0POycbcnXImHAiBfAFGrl1pfLgW9JGg2Fp2835qMZs5oGACxNsijXKGq%2BSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4IEKZ2XsMMhxtiZPKtwDtnE%2BlN7s9ub4uwLn1wNVMB5Ifyq5Z09oaaR9QUN6CdXn06RHLgQVsPPfqOvg0%2FvTrXotWaN1IbzA%2F%2BgX8wonyhKa8sRb8sMMuiGSmGQRfYxaEM1pn8cleug82w2DjmgYek4FoSALtbFYgft%2FAxXA0QqViWEw9USHTomtsQYv%2FF57uVVb4WX54T1UdZOdZyj2kK%2BVyBcV8uGjHkqZZCF%2BfNLcPr%2BemZ%2FaFaD%2BmKfGOyuay2Ctn1hnWA30jHCyssDUKm3lLM%2BpFAEO5PnxC7gODGIn9fnwhYxuJWccwgpzCN6bFX9W3pa%2BJw5LZrr%2BYVLbrC%2BGofIOWRejvaMPh614jQOGdvIY8zhCOGGEDt02hd8LLqsgLv%2FUGEr7Vc1wg5HFq3%2FpYYPsmpMo1pz5Z0Hk2JXrbXsX9D4bH8haAQPV9tQprPQtVXeFcMwq8cnCysFANtbRclg2E6lnRk6vHUTDC%2FsDYUIkvuGq0cnRDULFG7o6wS5uFWb2p5IUN0YN3ii1NiZ0B4yw5DHgUltCkAMIkMqH6R947P25nf0AsPz3fKgYGoueadQtPJLD289llAAsOiAn057PtY6Mz64a8pRXnKlEZA4VRVMg9HrvcHFzYdqTx1vsA910tEv9bZIw6suNwwY6pgH9atoI5DkyS4ONM%2BMIZHPsNd4AOXH8iRPoV2py8sZ02APfm%2BU3AnvUm5%2Fq69Sw9X0b5uFj5HgH1skJiCpGu4QisCXrjLeghIk65deIRs%2BLDgzrNrhF7A5BIEoWoSsdiL0FXUnHRDwZ4RG5MIC0vFsWE1JNGRsec5W5zNHS2RjHn8eEoQzCbbE8CveZrWp9PK9TNcZ4hUvk8lGfHC%2BempyVEkm%2FkkqX&X-Amz-Signature=946c904401313fdef7eaa1559d5ae1122758448a12dca8a32c16eeace683ff3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
