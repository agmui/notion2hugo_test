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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQ7NABH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecKm3eZ4phvfnyrnWrvCTDPm8gebzucsTRoQVdNWJYQIhAJT61XNVFddhekhpT5s9%2B6lwCpcZBhVeDg8Ft%2F1PVGmsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZmnoLMnBFIosC0QQq3APqid3WZ0XtxiK2o5oBT0VRa%2BkVZGykhHD0hrw6VjwVabH1oE1ZgTQLO8pL2V5qj%2Bu6DQHLaszaBrSMlej4gmZqYmKrWeioGS11PE7QJJE9WbwXNslOsy2wEzgblafuVO%2BJ%2BaEzsREQ3sk3wo%2B5biCf46HszTKegmjTGIZmBPMJav%2BXcUuEsaV5N9iH%2B5Cikbj4nvD9nBB%2B2GqClI2CgnqtChzrvcYBuhP1TvdJm7OQJ1xrJ4XbPaqoAYRxN%2Fy48jmmZ8MvOYpJbQTRaouyluFdKgRZ9aGSi6ZfEObMhxtCCzdTCN5vYmJ10ysjyZHdb1HXDE3ycNyxOgM54N8vpplct4VCahrTRr0VAYayHdNOzrXiFzk06GKoSgasYvGZFkNFk9Txb4Gb6Ga40UanAOknobJjcGZxp8uK3N9ifNy5YcJv6dGcy7qVAenZVZyx0ACf66A1YFNJmjjGBHMD7r6zlQ%2FgTkPJUVWYVk3xatPIlO8MLxShzXjTtfP1i%2BjA9CXH2JZEckiGwgIKjjN5rQjYs1wWWw2S7bPRAxtVI51nRG5evFMxaIr5RB2Ur5neF2ECmDJmGH0OvgZIC2JtmP67CZ6mTBR3ym6ytdfTrT1PsUNDR5jZmksE5k8OejDF4pfCBjqkAT9HC4w8mUjYmzjZrC4DOYwjcV3cdn4ATYMAF%2FuMDiPyWUwDYjFfM23kazjLx2KHGEuN7w8gIDwDu205mWvowGzQoK12zssiRC4Y3qeuvtkqzp3P9ABBxqDyzOEuKotXkxtdrVAG9%2FXtql0f3f%2F%2FgBaWizgCT%2F%2B64np7K95LLqLKgth323ofQ5k57jJOvDz8Ez0%2BSDHYQ%2BKS4Dc8kpFTkJwtQLoq&X-Amz-Signature=f2bfae4f4cc1bbee3183ae19c3c08415ddb1b5b29987c33edc36ef0fcf19083f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQ7NABH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecKm3eZ4phvfnyrnWrvCTDPm8gebzucsTRoQVdNWJYQIhAJT61XNVFddhekhpT5s9%2B6lwCpcZBhVeDg8Ft%2F1PVGmsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZmnoLMnBFIosC0QQq3APqid3WZ0XtxiK2o5oBT0VRa%2BkVZGykhHD0hrw6VjwVabH1oE1ZgTQLO8pL2V5qj%2Bu6DQHLaszaBrSMlej4gmZqYmKrWeioGS11PE7QJJE9WbwXNslOsy2wEzgblafuVO%2BJ%2BaEzsREQ3sk3wo%2B5biCf46HszTKegmjTGIZmBPMJav%2BXcUuEsaV5N9iH%2B5Cikbj4nvD9nBB%2B2GqClI2CgnqtChzrvcYBuhP1TvdJm7OQJ1xrJ4XbPaqoAYRxN%2Fy48jmmZ8MvOYpJbQTRaouyluFdKgRZ9aGSi6ZfEObMhxtCCzdTCN5vYmJ10ysjyZHdb1HXDE3ycNyxOgM54N8vpplct4VCahrTRr0VAYayHdNOzrXiFzk06GKoSgasYvGZFkNFk9Txb4Gb6Ga40UanAOknobJjcGZxp8uK3N9ifNy5YcJv6dGcy7qVAenZVZyx0ACf66A1YFNJmjjGBHMD7r6zlQ%2FgTkPJUVWYVk3xatPIlO8MLxShzXjTtfP1i%2BjA9CXH2JZEckiGwgIKjjN5rQjYs1wWWw2S7bPRAxtVI51nRG5evFMxaIr5RB2Ur5neF2ECmDJmGH0OvgZIC2JtmP67CZ6mTBR3ym6ytdfTrT1PsUNDR5jZmksE5k8OejDF4pfCBjqkAT9HC4w8mUjYmzjZrC4DOYwjcV3cdn4ATYMAF%2FuMDiPyWUwDYjFfM23kazjLx2KHGEuN7w8gIDwDu205mWvowGzQoK12zssiRC4Y3qeuvtkqzp3P9ABBxqDyzOEuKotXkxtdrVAG9%2FXtql0f3f%2F%2FgBaWizgCT%2F%2B64np7K95LLqLKgth323ofQ5k57jJOvDz8Ez0%2BSDHYQ%2BKS4Dc8kpFTkJwtQLoq&X-Amz-Signature=c96e2103c122a91e9a45b3453e2cfe1edf7a3838ae00ca9b33f44ae0bc1817a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQ7NABH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecKm3eZ4phvfnyrnWrvCTDPm8gebzucsTRoQVdNWJYQIhAJT61XNVFddhekhpT5s9%2B6lwCpcZBhVeDg8Ft%2F1PVGmsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZmnoLMnBFIosC0QQq3APqid3WZ0XtxiK2o5oBT0VRa%2BkVZGykhHD0hrw6VjwVabH1oE1ZgTQLO8pL2V5qj%2Bu6DQHLaszaBrSMlej4gmZqYmKrWeioGS11PE7QJJE9WbwXNslOsy2wEzgblafuVO%2BJ%2BaEzsREQ3sk3wo%2B5biCf46HszTKegmjTGIZmBPMJav%2BXcUuEsaV5N9iH%2B5Cikbj4nvD9nBB%2B2GqClI2CgnqtChzrvcYBuhP1TvdJm7OQJ1xrJ4XbPaqoAYRxN%2Fy48jmmZ8MvOYpJbQTRaouyluFdKgRZ9aGSi6ZfEObMhxtCCzdTCN5vYmJ10ysjyZHdb1HXDE3ycNyxOgM54N8vpplct4VCahrTRr0VAYayHdNOzrXiFzk06GKoSgasYvGZFkNFk9Txb4Gb6Ga40UanAOknobJjcGZxp8uK3N9ifNy5YcJv6dGcy7qVAenZVZyx0ACf66A1YFNJmjjGBHMD7r6zlQ%2FgTkPJUVWYVk3xatPIlO8MLxShzXjTtfP1i%2BjA9CXH2JZEckiGwgIKjjN5rQjYs1wWWw2S7bPRAxtVI51nRG5evFMxaIr5RB2Ur5neF2ECmDJmGH0OvgZIC2JtmP67CZ6mTBR3ym6ytdfTrT1PsUNDR5jZmksE5k8OejDF4pfCBjqkAT9HC4w8mUjYmzjZrC4DOYwjcV3cdn4ATYMAF%2FuMDiPyWUwDYjFfM23kazjLx2KHGEuN7w8gIDwDu205mWvowGzQoK12zssiRC4Y3qeuvtkqzp3P9ABBxqDyzOEuKotXkxtdrVAG9%2FXtql0f3f%2F%2FgBaWizgCT%2F%2B64np7K95LLqLKgth323ofQ5k57jJOvDz8Ez0%2BSDHYQ%2BKS4Dc8kpFTkJwtQLoq&X-Amz-Signature=1b35ef992449d29ee3d3f90ec3505c36f0baecb4b74562e4b5c67a58fcba5e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQ7NABH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecKm3eZ4phvfnyrnWrvCTDPm8gebzucsTRoQVdNWJYQIhAJT61XNVFddhekhpT5s9%2B6lwCpcZBhVeDg8Ft%2F1PVGmsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZmnoLMnBFIosC0QQq3APqid3WZ0XtxiK2o5oBT0VRa%2BkVZGykhHD0hrw6VjwVabH1oE1ZgTQLO8pL2V5qj%2Bu6DQHLaszaBrSMlej4gmZqYmKrWeioGS11PE7QJJE9WbwXNslOsy2wEzgblafuVO%2BJ%2BaEzsREQ3sk3wo%2B5biCf46HszTKegmjTGIZmBPMJav%2BXcUuEsaV5N9iH%2B5Cikbj4nvD9nBB%2B2GqClI2CgnqtChzrvcYBuhP1TvdJm7OQJ1xrJ4XbPaqoAYRxN%2Fy48jmmZ8MvOYpJbQTRaouyluFdKgRZ9aGSi6ZfEObMhxtCCzdTCN5vYmJ10ysjyZHdb1HXDE3ycNyxOgM54N8vpplct4VCahrTRr0VAYayHdNOzrXiFzk06GKoSgasYvGZFkNFk9Txb4Gb6Ga40UanAOknobJjcGZxp8uK3N9ifNy5YcJv6dGcy7qVAenZVZyx0ACf66A1YFNJmjjGBHMD7r6zlQ%2FgTkPJUVWYVk3xatPIlO8MLxShzXjTtfP1i%2BjA9CXH2JZEckiGwgIKjjN5rQjYs1wWWw2S7bPRAxtVI51nRG5evFMxaIr5RB2Ur5neF2ECmDJmGH0OvgZIC2JtmP67CZ6mTBR3ym6ytdfTrT1PsUNDR5jZmksE5k8OejDF4pfCBjqkAT9HC4w8mUjYmzjZrC4DOYwjcV3cdn4ATYMAF%2FuMDiPyWUwDYjFfM23kazjLx2KHGEuN7w8gIDwDu205mWvowGzQoK12zssiRC4Y3qeuvtkqzp3P9ABBxqDyzOEuKotXkxtdrVAG9%2FXtql0f3f%2F%2FgBaWizgCT%2F%2B64np7K95LLqLKgth323ofQ5k57jJOvDz8Ez0%2BSDHYQ%2BKS4Dc8kpFTkJwtQLoq&X-Amz-Signature=8617c7da6da0d9f924ff53fb31fa5a329948ec12566e59c03381ad408677eb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQ7NABH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecKm3eZ4phvfnyrnWrvCTDPm8gebzucsTRoQVdNWJYQIhAJT61XNVFddhekhpT5s9%2B6lwCpcZBhVeDg8Ft%2F1PVGmsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZmnoLMnBFIosC0QQq3APqid3WZ0XtxiK2o5oBT0VRa%2BkVZGykhHD0hrw6VjwVabH1oE1ZgTQLO8pL2V5qj%2Bu6DQHLaszaBrSMlej4gmZqYmKrWeioGS11PE7QJJE9WbwXNslOsy2wEzgblafuVO%2BJ%2BaEzsREQ3sk3wo%2B5biCf46HszTKegmjTGIZmBPMJav%2BXcUuEsaV5N9iH%2B5Cikbj4nvD9nBB%2B2GqClI2CgnqtChzrvcYBuhP1TvdJm7OQJ1xrJ4XbPaqoAYRxN%2Fy48jmmZ8MvOYpJbQTRaouyluFdKgRZ9aGSi6ZfEObMhxtCCzdTCN5vYmJ10ysjyZHdb1HXDE3ycNyxOgM54N8vpplct4VCahrTRr0VAYayHdNOzrXiFzk06GKoSgasYvGZFkNFk9Txb4Gb6Ga40UanAOknobJjcGZxp8uK3N9ifNy5YcJv6dGcy7qVAenZVZyx0ACf66A1YFNJmjjGBHMD7r6zlQ%2FgTkPJUVWYVk3xatPIlO8MLxShzXjTtfP1i%2BjA9CXH2JZEckiGwgIKjjN5rQjYs1wWWw2S7bPRAxtVI51nRG5evFMxaIr5RB2Ur5neF2ECmDJmGH0OvgZIC2JtmP67CZ6mTBR3ym6ytdfTrT1PsUNDR5jZmksE5k8OejDF4pfCBjqkAT9HC4w8mUjYmzjZrC4DOYwjcV3cdn4ATYMAF%2FuMDiPyWUwDYjFfM23kazjLx2KHGEuN7w8gIDwDu205mWvowGzQoK12zssiRC4Y3qeuvtkqzp3P9ABBxqDyzOEuKotXkxtdrVAG9%2FXtql0f3f%2F%2FgBaWizgCT%2F%2B64np7K95LLqLKgth323ofQ5k57jJOvDz8Ez0%2BSDHYQ%2BKS4Dc8kpFTkJwtQLoq&X-Amz-Signature=3e87c787a69541e63e3e8a412e1abc09f0ffb10a9a2ebbab78fd098a71db575a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQ7NABH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCecKm3eZ4phvfnyrnWrvCTDPm8gebzucsTRoQVdNWJYQIhAJT61XNVFddhekhpT5s9%2B6lwCpcZBhVeDg8Ft%2F1PVGmsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZmnoLMnBFIosC0QQq3APqid3WZ0XtxiK2o5oBT0VRa%2BkVZGykhHD0hrw6VjwVabH1oE1ZgTQLO8pL2V5qj%2Bu6DQHLaszaBrSMlej4gmZqYmKrWeioGS11PE7QJJE9WbwXNslOsy2wEzgblafuVO%2BJ%2BaEzsREQ3sk3wo%2B5biCf46HszTKegmjTGIZmBPMJav%2BXcUuEsaV5N9iH%2B5Cikbj4nvD9nBB%2B2GqClI2CgnqtChzrvcYBuhP1TvdJm7OQJ1xrJ4XbPaqoAYRxN%2Fy48jmmZ8MvOYpJbQTRaouyluFdKgRZ9aGSi6ZfEObMhxtCCzdTCN5vYmJ10ysjyZHdb1HXDE3ycNyxOgM54N8vpplct4VCahrTRr0VAYayHdNOzrXiFzk06GKoSgasYvGZFkNFk9Txb4Gb6Ga40UanAOknobJjcGZxp8uK3N9ifNy5YcJv6dGcy7qVAenZVZyx0ACf66A1YFNJmjjGBHMD7r6zlQ%2FgTkPJUVWYVk3xatPIlO8MLxShzXjTtfP1i%2BjA9CXH2JZEckiGwgIKjjN5rQjYs1wWWw2S7bPRAxtVI51nRG5evFMxaIr5RB2Ur5neF2ECmDJmGH0OvgZIC2JtmP67CZ6mTBR3ym6ytdfTrT1PsUNDR5jZmksE5k8OejDF4pfCBjqkAT9HC4w8mUjYmzjZrC4DOYwjcV3cdn4ATYMAF%2FuMDiPyWUwDYjFfM23kazjLx2KHGEuN7w8gIDwDu205mWvowGzQoK12zssiRC4Y3qeuvtkqzp3P9ABBxqDyzOEuKotXkxtdrVAG9%2FXtql0f3f%2F%2FgBaWizgCT%2F%2B64np7K95LLqLKgth323ofQ5k57jJOvDz8Ez0%2BSDHYQ%2BKS4Dc8kpFTkJwtQLoq&X-Amz-Signature=a342ec09d58e1e031e8a6c3ccd35e7e6d5f4101f39ff6ccfdd56ef81a1851ef0&X-Amz-SignedHeaders=host&x-id=GetObject)
