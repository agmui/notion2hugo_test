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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645V6LAT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCStPC1chj4idemlqRyQq1yR1e0UaWXHdZ6rPQBpV2nLgIhAIk9Q4Ats96aduazF812MKP41yIDYTC%2Btq4y0ATOy3T9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybfceejyfpKysqhaoq3AP09iAtPhGGxJFp%2BNsytBrDBmpDIjGyfGYzPPtRNVj9ayNtpzOcQ4iUeyWc6d9X9Y6nWaTNasDXwHps1esA%2BSHWEHFO2tOg0DypNeLy36sl1t7mtSFyyanWGZeK29qJrSxdytfmbvA%2B7MJriC%2Br%2BQbZ2cJjm1y09HUvQbaOnbnb7ECHtbXpM38IiJ6uHlS1fxxEMoCNNdDYS5AljdGZhCnTPGfcz%2FDmHM8NDC%2FG5X2dht5VPH%2FuNvJb7tPdznNv4uN2AdxE1kFZQ%2FeMCMX3L7kQlYIwH%2Bg%2FLkbqf7icwzgGND59Ia4%2FxQII4zf8s2otXZXC6u1uR4vxrRnsjOpSIbSndDGzoKQ5E5JsXRPn3uEC0B%2Bx7v3q5ki7zIAIVuw%2FFGPvoPH53DgTMO9SUjGy%2BuhROVFduQCit9rWkWROF2Ozai%2F%2Fljh443xn9Q5Oj6%2FlpbzMq9%2BS3YB3xwa%2FuUBEpFkCGJrL%2FGlUBtUcEBAT27Nbj5LVcBeMb9fOWRAhLkn9qt2r9m%2BtdMLdgs%2F%2Fx2STRGQsdXZIK2G5PF5DxVCfSqvhIuOPkmSGtMbp0i5x64hmk0qoDGMnBsxlW0yLeCHlI3rIu5RL%2BhMQP0nyigfIE54tXTVGwwElywQHkz2GWDDT5Ni%2FBjqkARkdVkU%2B9wwLEyieSpwOS6tLNY%2F319FpOKD07BnFvY%2Ff%2F5CqdHqoirrWmSYEeFgigo6TPyEHqqyvrrvBSe5BUIl39VxjaV80OMP8Pe1KGP2Wuc2dxr0s%2F7c41J2Sz0hjWOZzON6FAKNsi8S0SIlxyePSzhyEKbiaWmy5djACE2PJLrjAIChlaS455aoePkizrVE1tYBsS5Hw4FmSht%2BsdCIehqbQ&X-Amz-Signature=c186b5a2b446adc13862f5dacb9b0abea882cad84ea9b4e7b190b7b92befe493&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645V6LAT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCStPC1chj4idemlqRyQq1yR1e0UaWXHdZ6rPQBpV2nLgIhAIk9Q4Ats96aduazF812MKP41yIDYTC%2Btq4y0ATOy3T9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybfceejyfpKysqhaoq3AP09iAtPhGGxJFp%2BNsytBrDBmpDIjGyfGYzPPtRNVj9ayNtpzOcQ4iUeyWc6d9X9Y6nWaTNasDXwHps1esA%2BSHWEHFO2tOg0DypNeLy36sl1t7mtSFyyanWGZeK29qJrSxdytfmbvA%2B7MJriC%2Br%2BQbZ2cJjm1y09HUvQbaOnbnb7ECHtbXpM38IiJ6uHlS1fxxEMoCNNdDYS5AljdGZhCnTPGfcz%2FDmHM8NDC%2FG5X2dht5VPH%2FuNvJb7tPdznNv4uN2AdxE1kFZQ%2FeMCMX3L7kQlYIwH%2Bg%2FLkbqf7icwzgGND59Ia4%2FxQII4zf8s2otXZXC6u1uR4vxrRnsjOpSIbSndDGzoKQ5E5JsXRPn3uEC0B%2Bx7v3q5ki7zIAIVuw%2FFGPvoPH53DgTMO9SUjGy%2BuhROVFduQCit9rWkWROF2Ozai%2F%2Fljh443xn9Q5Oj6%2FlpbzMq9%2BS3YB3xwa%2FuUBEpFkCGJrL%2FGlUBtUcEBAT27Nbj5LVcBeMb9fOWRAhLkn9qt2r9m%2BtdMLdgs%2F%2Fx2STRGQsdXZIK2G5PF5DxVCfSqvhIuOPkmSGtMbp0i5x64hmk0qoDGMnBsxlW0yLeCHlI3rIu5RL%2BhMQP0nyigfIE54tXTVGwwElywQHkz2GWDDT5Ni%2FBjqkARkdVkU%2B9wwLEyieSpwOS6tLNY%2F319FpOKD07BnFvY%2Ff%2F5CqdHqoirrWmSYEeFgigo6TPyEHqqyvrrvBSe5BUIl39VxjaV80OMP8Pe1KGP2Wuc2dxr0s%2F7c41J2Sz0hjWOZzON6FAKNsi8S0SIlxyePSzhyEKbiaWmy5djACE2PJLrjAIChlaS455aoePkizrVE1tYBsS5Hw4FmSht%2BsdCIehqbQ&X-Amz-Signature=59c042df731142569598322bef17250e54b472630bd8779f5dda238704ec48aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645V6LAT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCStPC1chj4idemlqRyQq1yR1e0UaWXHdZ6rPQBpV2nLgIhAIk9Q4Ats96aduazF812MKP41yIDYTC%2Btq4y0ATOy3T9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybfceejyfpKysqhaoq3AP09iAtPhGGxJFp%2BNsytBrDBmpDIjGyfGYzPPtRNVj9ayNtpzOcQ4iUeyWc6d9X9Y6nWaTNasDXwHps1esA%2BSHWEHFO2tOg0DypNeLy36sl1t7mtSFyyanWGZeK29qJrSxdytfmbvA%2B7MJriC%2Br%2BQbZ2cJjm1y09HUvQbaOnbnb7ECHtbXpM38IiJ6uHlS1fxxEMoCNNdDYS5AljdGZhCnTPGfcz%2FDmHM8NDC%2FG5X2dht5VPH%2FuNvJb7tPdznNv4uN2AdxE1kFZQ%2FeMCMX3L7kQlYIwH%2Bg%2FLkbqf7icwzgGND59Ia4%2FxQII4zf8s2otXZXC6u1uR4vxrRnsjOpSIbSndDGzoKQ5E5JsXRPn3uEC0B%2Bx7v3q5ki7zIAIVuw%2FFGPvoPH53DgTMO9SUjGy%2BuhROVFduQCit9rWkWROF2Ozai%2F%2Fljh443xn9Q5Oj6%2FlpbzMq9%2BS3YB3xwa%2FuUBEpFkCGJrL%2FGlUBtUcEBAT27Nbj5LVcBeMb9fOWRAhLkn9qt2r9m%2BtdMLdgs%2F%2Fx2STRGQsdXZIK2G5PF5DxVCfSqvhIuOPkmSGtMbp0i5x64hmk0qoDGMnBsxlW0yLeCHlI3rIu5RL%2BhMQP0nyigfIE54tXTVGwwElywQHkz2GWDDT5Ni%2FBjqkARkdVkU%2B9wwLEyieSpwOS6tLNY%2F319FpOKD07BnFvY%2Ff%2F5CqdHqoirrWmSYEeFgigo6TPyEHqqyvrrvBSe5BUIl39VxjaV80OMP8Pe1KGP2Wuc2dxr0s%2F7c41J2Sz0hjWOZzON6FAKNsi8S0SIlxyePSzhyEKbiaWmy5djACE2PJLrjAIChlaS455aoePkizrVE1tYBsS5Hw4FmSht%2BsdCIehqbQ&X-Amz-Signature=d6aada76d3e9adac1e252891518d2a0369baf3cf3e2b60ef9609550f9afc351a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645V6LAT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCStPC1chj4idemlqRyQq1yR1e0UaWXHdZ6rPQBpV2nLgIhAIk9Q4Ats96aduazF812MKP41yIDYTC%2Btq4y0ATOy3T9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybfceejyfpKysqhaoq3AP09iAtPhGGxJFp%2BNsytBrDBmpDIjGyfGYzPPtRNVj9ayNtpzOcQ4iUeyWc6d9X9Y6nWaTNasDXwHps1esA%2BSHWEHFO2tOg0DypNeLy36sl1t7mtSFyyanWGZeK29qJrSxdytfmbvA%2B7MJriC%2Br%2BQbZ2cJjm1y09HUvQbaOnbnb7ECHtbXpM38IiJ6uHlS1fxxEMoCNNdDYS5AljdGZhCnTPGfcz%2FDmHM8NDC%2FG5X2dht5VPH%2FuNvJb7tPdznNv4uN2AdxE1kFZQ%2FeMCMX3L7kQlYIwH%2Bg%2FLkbqf7icwzgGND59Ia4%2FxQII4zf8s2otXZXC6u1uR4vxrRnsjOpSIbSndDGzoKQ5E5JsXRPn3uEC0B%2Bx7v3q5ki7zIAIVuw%2FFGPvoPH53DgTMO9SUjGy%2BuhROVFduQCit9rWkWROF2Ozai%2F%2Fljh443xn9Q5Oj6%2FlpbzMq9%2BS3YB3xwa%2FuUBEpFkCGJrL%2FGlUBtUcEBAT27Nbj5LVcBeMb9fOWRAhLkn9qt2r9m%2BtdMLdgs%2F%2Fx2STRGQsdXZIK2G5PF5DxVCfSqvhIuOPkmSGtMbp0i5x64hmk0qoDGMnBsxlW0yLeCHlI3rIu5RL%2BhMQP0nyigfIE54tXTVGwwElywQHkz2GWDDT5Ni%2FBjqkARkdVkU%2B9wwLEyieSpwOS6tLNY%2F319FpOKD07BnFvY%2Ff%2F5CqdHqoirrWmSYEeFgigo6TPyEHqqyvrrvBSe5BUIl39VxjaV80OMP8Pe1KGP2Wuc2dxr0s%2F7c41J2Sz0hjWOZzON6FAKNsi8S0SIlxyePSzhyEKbiaWmy5djACE2PJLrjAIChlaS455aoePkizrVE1tYBsS5Hw4FmSht%2BsdCIehqbQ&X-Amz-Signature=843078635593994ccc8390c627c6688362acd311cfb1e04abafaed54b735adf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645V6LAT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCStPC1chj4idemlqRyQq1yR1e0UaWXHdZ6rPQBpV2nLgIhAIk9Q4Ats96aduazF812MKP41yIDYTC%2Btq4y0ATOy3T9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybfceejyfpKysqhaoq3AP09iAtPhGGxJFp%2BNsytBrDBmpDIjGyfGYzPPtRNVj9ayNtpzOcQ4iUeyWc6d9X9Y6nWaTNasDXwHps1esA%2BSHWEHFO2tOg0DypNeLy36sl1t7mtSFyyanWGZeK29qJrSxdytfmbvA%2B7MJriC%2Br%2BQbZ2cJjm1y09HUvQbaOnbnb7ECHtbXpM38IiJ6uHlS1fxxEMoCNNdDYS5AljdGZhCnTPGfcz%2FDmHM8NDC%2FG5X2dht5VPH%2FuNvJb7tPdznNv4uN2AdxE1kFZQ%2FeMCMX3L7kQlYIwH%2Bg%2FLkbqf7icwzgGND59Ia4%2FxQII4zf8s2otXZXC6u1uR4vxrRnsjOpSIbSndDGzoKQ5E5JsXRPn3uEC0B%2Bx7v3q5ki7zIAIVuw%2FFGPvoPH53DgTMO9SUjGy%2BuhROVFduQCit9rWkWROF2Ozai%2F%2Fljh443xn9Q5Oj6%2FlpbzMq9%2BS3YB3xwa%2FuUBEpFkCGJrL%2FGlUBtUcEBAT27Nbj5LVcBeMb9fOWRAhLkn9qt2r9m%2BtdMLdgs%2F%2Fx2STRGQsdXZIK2G5PF5DxVCfSqvhIuOPkmSGtMbp0i5x64hmk0qoDGMnBsxlW0yLeCHlI3rIu5RL%2BhMQP0nyigfIE54tXTVGwwElywQHkz2GWDDT5Ni%2FBjqkARkdVkU%2B9wwLEyieSpwOS6tLNY%2F319FpOKD07BnFvY%2Ff%2F5CqdHqoirrWmSYEeFgigo6TPyEHqqyvrrvBSe5BUIl39VxjaV80OMP8Pe1KGP2Wuc2dxr0s%2F7c41J2Sz0hjWOZzON6FAKNsi8S0SIlxyePSzhyEKbiaWmy5djACE2PJLrjAIChlaS455aoePkizrVE1tYBsS5Hw4FmSht%2BsdCIehqbQ&X-Amz-Signature=89236e69d5f6953f3fc822880f0a960104c4230f10c79138304d5aab01641ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645V6LAT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCStPC1chj4idemlqRyQq1yR1e0UaWXHdZ6rPQBpV2nLgIhAIk9Q4Ats96aduazF812MKP41yIDYTC%2Btq4y0ATOy3T9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybfceejyfpKysqhaoq3AP09iAtPhGGxJFp%2BNsytBrDBmpDIjGyfGYzPPtRNVj9ayNtpzOcQ4iUeyWc6d9X9Y6nWaTNasDXwHps1esA%2BSHWEHFO2tOg0DypNeLy36sl1t7mtSFyyanWGZeK29qJrSxdytfmbvA%2B7MJriC%2Br%2BQbZ2cJjm1y09HUvQbaOnbnb7ECHtbXpM38IiJ6uHlS1fxxEMoCNNdDYS5AljdGZhCnTPGfcz%2FDmHM8NDC%2FG5X2dht5VPH%2FuNvJb7tPdznNv4uN2AdxE1kFZQ%2FeMCMX3L7kQlYIwH%2Bg%2FLkbqf7icwzgGND59Ia4%2FxQII4zf8s2otXZXC6u1uR4vxrRnsjOpSIbSndDGzoKQ5E5JsXRPn3uEC0B%2Bx7v3q5ki7zIAIVuw%2FFGPvoPH53DgTMO9SUjGy%2BuhROVFduQCit9rWkWROF2Ozai%2F%2Fljh443xn9Q5Oj6%2FlpbzMq9%2BS3YB3xwa%2FuUBEpFkCGJrL%2FGlUBtUcEBAT27Nbj5LVcBeMb9fOWRAhLkn9qt2r9m%2BtdMLdgs%2F%2Fx2STRGQsdXZIK2G5PF5DxVCfSqvhIuOPkmSGtMbp0i5x64hmk0qoDGMnBsxlW0yLeCHlI3rIu5RL%2BhMQP0nyigfIE54tXTVGwwElywQHkz2GWDDT5Ni%2FBjqkARkdVkU%2B9wwLEyieSpwOS6tLNY%2F319FpOKD07BnFvY%2Ff%2F5CqdHqoirrWmSYEeFgigo6TPyEHqqyvrrvBSe5BUIl39VxjaV80OMP8Pe1KGP2Wuc2dxr0s%2F7c41J2Sz0hjWOZzON6FAKNsi8S0SIlxyePSzhyEKbiaWmy5djACE2PJLrjAIChlaS455aoePkizrVE1tYBsS5Hw4FmSht%2BsdCIehqbQ&X-Amz-Signature=3f3c6d4e528e3a3c3f15c1cb1f6a9b86b959b6b750c7feedd15e6567c1d99c03&X-Amz-SignedHeaders=host&x-id=GetObject)
