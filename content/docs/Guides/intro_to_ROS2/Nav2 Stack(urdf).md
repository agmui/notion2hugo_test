---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQL7SGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFe9AZ0AipZuufUyjaj%2B7O2LQALjgdGNLo1wfHKlPBCBAiEA3YYWjBg5WnnUkt6lsDkUIoG4KM7gmD4m47odEN%2FL0Ekq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJbTsVE%2Fq4elt2XGSrcA9vssNOUNDz0ogwfCsShiD68ZNph5MZXkqoFaNzXMBMf8hJu%2BQx1Le8B2DHEQWLrTs4efu%2BqxHBMLHpThh2V%2FeQpKggjSbynDqWx8Zb%2BsYPfm35EJSIkurl%2Fs8oZe9j3pGmKM0ZNoTBbqboiCw9%2FCa%2FzkpNZ%2FzRYn8CDAUYpFt68SEcojRU8BsHpYzI5nodUe4%2F6DnYnuZVeOBmbnECozhHGhHZ69kB4kgmBh9AeOuJdq1hGfHu4G7%2Fw4X2DZLZzhyscsKEOnqBRQGmuxl9qicm1rqqAq4X5hvvQ6TxP7LHybeSZS0oAo22kQ73ok%2ByrmvAy5OcbxDn0I81ZYikLYrw6feRH4PLgJ%2FR2HH31FHWuh%2FNg0wf8h8U54cjsrfzVnc2WN6Kdv%2FwKBNPnR6ynN8S9soB2KhjzEeTJzRhhNWj7glSEZqwC0QmmUV7dNUnUSirBVMbJjTGVBIHPtH6Sj%2Fr3q%2Fd4YsODt5IwUz2C6XgiRxhSvS1QsjQRO142Q%2BY5YwpnXmbAg9Tsadel7Ui10Z8OyaIkgAnEKsNBwN1yo34Dec9%2FkzthKqRfCIcF0GEVpRL9zYm3c1TK00t65r77FmUYgaJU1prwaca1s4sZp2vqdogh47GiPpKkzp8IMO%2Fp5LwGOqUBXXy5dhbDokr8QPnwb3Ogk8uH3D2NV1Kqq3EkCXahK8Y728wHSJZ8r579UlqYbx1jMrzVdQ%2BOE%2Fw7j92Dm5GeNzjA1S0Lx8RKiVOgcWoXq%2FIFNL4y742ToFk5sLbWVDPC%2F255x5tEktY9o0m3DEXCCO8Ln1K3z07h%2BpDNKClPWVKvn9BQ8YUGoO%2FH%2FMb6LbAabNu8x0rIXsYvMDJluKNsM3HQHhho&X-Amz-Signature=f0d91a1076952b8f48f2d8ebcf0a04da687db345aea903220f18c3a4d7bdf33d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQL7SGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFe9AZ0AipZuufUyjaj%2B7O2LQALjgdGNLo1wfHKlPBCBAiEA3YYWjBg5WnnUkt6lsDkUIoG4KM7gmD4m47odEN%2FL0Ekq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJbTsVE%2Fq4elt2XGSrcA9vssNOUNDz0ogwfCsShiD68ZNph5MZXkqoFaNzXMBMf8hJu%2BQx1Le8B2DHEQWLrTs4efu%2BqxHBMLHpThh2V%2FeQpKggjSbynDqWx8Zb%2BsYPfm35EJSIkurl%2Fs8oZe9j3pGmKM0ZNoTBbqboiCw9%2FCa%2FzkpNZ%2FzRYn8CDAUYpFt68SEcojRU8BsHpYzI5nodUe4%2F6DnYnuZVeOBmbnECozhHGhHZ69kB4kgmBh9AeOuJdq1hGfHu4G7%2Fw4X2DZLZzhyscsKEOnqBRQGmuxl9qicm1rqqAq4X5hvvQ6TxP7LHybeSZS0oAo22kQ73ok%2ByrmvAy5OcbxDn0I81ZYikLYrw6feRH4PLgJ%2FR2HH31FHWuh%2FNg0wf8h8U54cjsrfzVnc2WN6Kdv%2FwKBNPnR6ynN8S9soB2KhjzEeTJzRhhNWj7glSEZqwC0QmmUV7dNUnUSirBVMbJjTGVBIHPtH6Sj%2Fr3q%2Fd4YsODt5IwUz2C6XgiRxhSvS1QsjQRO142Q%2BY5YwpnXmbAg9Tsadel7Ui10Z8OyaIkgAnEKsNBwN1yo34Dec9%2FkzthKqRfCIcF0GEVpRL9zYm3c1TK00t65r77FmUYgaJU1prwaca1s4sZp2vqdogh47GiPpKkzp8IMO%2Fp5LwGOqUBXXy5dhbDokr8QPnwb3Ogk8uH3D2NV1Kqq3EkCXahK8Y728wHSJZ8r579UlqYbx1jMrzVdQ%2BOE%2Fw7j92Dm5GeNzjA1S0Lx8RKiVOgcWoXq%2FIFNL4y742ToFk5sLbWVDPC%2F255x5tEktY9o0m3DEXCCO8Ln1K3z07h%2BpDNKClPWVKvn9BQ8YUGoO%2FH%2FMb6LbAabNu8x0rIXsYvMDJluKNsM3HQHhho&X-Amz-Signature=ff5338995c8bbe8c79158c7cb78a798cf1fbe82f7f3f2bd0926a04c32e4e6712&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQL7SGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFe9AZ0AipZuufUyjaj%2B7O2LQALjgdGNLo1wfHKlPBCBAiEA3YYWjBg5WnnUkt6lsDkUIoG4KM7gmD4m47odEN%2FL0Ekq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJbTsVE%2Fq4elt2XGSrcA9vssNOUNDz0ogwfCsShiD68ZNph5MZXkqoFaNzXMBMf8hJu%2BQx1Le8B2DHEQWLrTs4efu%2BqxHBMLHpThh2V%2FeQpKggjSbynDqWx8Zb%2BsYPfm35EJSIkurl%2Fs8oZe9j3pGmKM0ZNoTBbqboiCw9%2FCa%2FzkpNZ%2FzRYn8CDAUYpFt68SEcojRU8BsHpYzI5nodUe4%2F6DnYnuZVeOBmbnECozhHGhHZ69kB4kgmBh9AeOuJdq1hGfHu4G7%2Fw4X2DZLZzhyscsKEOnqBRQGmuxl9qicm1rqqAq4X5hvvQ6TxP7LHybeSZS0oAo22kQ73ok%2ByrmvAy5OcbxDn0I81ZYikLYrw6feRH4PLgJ%2FR2HH31FHWuh%2FNg0wf8h8U54cjsrfzVnc2WN6Kdv%2FwKBNPnR6ynN8S9soB2KhjzEeTJzRhhNWj7glSEZqwC0QmmUV7dNUnUSirBVMbJjTGVBIHPtH6Sj%2Fr3q%2Fd4YsODt5IwUz2C6XgiRxhSvS1QsjQRO142Q%2BY5YwpnXmbAg9Tsadel7Ui10Z8OyaIkgAnEKsNBwN1yo34Dec9%2FkzthKqRfCIcF0GEVpRL9zYm3c1TK00t65r77FmUYgaJU1prwaca1s4sZp2vqdogh47GiPpKkzp8IMO%2Fp5LwGOqUBXXy5dhbDokr8QPnwb3Ogk8uH3D2NV1Kqq3EkCXahK8Y728wHSJZ8r579UlqYbx1jMrzVdQ%2BOE%2Fw7j92Dm5GeNzjA1S0Lx8RKiVOgcWoXq%2FIFNL4y742ToFk5sLbWVDPC%2F255x5tEktY9o0m3DEXCCO8Ln1K3z07h%2BpDNKClPWVKvn9BQ8YUGoO%2FH%2FMb6LbAabNu8x0rIXsYvMDJluKNsM3HQHhho&X-Amz-Signature=e347d7728e21fe66f09d62fecd1d11a8fd8b1590bde39a8a45214cc6e914c885&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQL7SGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFe9AZ0AipZuufUyjaj%2B7O2LQALjgdGNLo1wfHKlPBCBAiEA3YYWjBg5WnnUkt6lsDkUIoG4KM7gmD4m47odEN%2FL0Ekq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJbTsVE%2Fq4elt2XGSrcA9vssNOUNDz0ogwfCsShiD68ZNph5MZXkqoFaNzXMBMf8hJu%2BQx1Le8B2DHEQWLrTs4efu%2BqxHBMLHpThh2V%2FeQpKggjSbynDqWx8Zb%2BsYPfm35EJSIkurl%2Fs8oZe9j3pGmKM0ZNoTBbqboiCw9%2FCa%2FzkpNZ%2FzRYn8CDAUYpFt68SEcojRU8BsHpYzI5nodUe4%2F6DnYnuZVeOBmbnECozhHGhHZ69kB4kgmBh9AeOuJdq1hGfHu4G7%2Fw4X2DZLZzhyscsKEOnqBRQGmuxl9qicm1rqqAq4X5hvvQ6TxP7LHybeSZS0oAo22kQ73ok%2ByrmvAy5OcbxDn0I81ZYikLYrw6feRH4PLgJ%2FR2HH31FHWuh%2FNg0wf8h8U54cjsrfzVnc2WN6Kdv%2FwKBNPnR6ynN8S9soB2KhjzEeTJzRhhNWj7glSEZqwC0QmmUV7dNUnUSirBVMbJjTGVBIHPtH6Sj%2Fr3q%2Fd4YsODt5IwUz2C6XgiRxhSvS1QsjQRO142Q%2BY5YwpnXmbAg9Tsadel7Ui10Z8OyaIkgAnEKsNBwN1yo34Dec9%2FkzthKqRfCIcF0GEVpRL9zYm3c1TK00t65r77FmUYgaJU1prwaca1s4sZp2vqdogh47GiPpKkzp8IMO%2Fp5LwGOqUBXXy5dhbDokr8QPnwb3Ogk8uH3D2NV1Kqq3EkCXahK8Y728wHSJZ8r579UlqYbx1jMrzVdQ%2BOE%2Fw7j92Dm5GeNzjA1S0Lx8RKiVOgcWoXq%2FIFNL4y742ToFk5sLbWVDPC%2F255x5tEktY9o0m3DEXCCO8Ln1K3z07h%2BpDNKClPWVKvn9BQ8YUGoO%2FH%2FMb6LbAabNu8x0rIXsYvMDJluKNsM3HQHhho&X-Amz-Signature=0dc366d96ac414913a6445e5d013e832ca312d0b8f9f2e7b51b0e0f2678c316a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQL7SGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFe9AZ0AipZuufUyjaj%2B7O2LQALjgdGNLo1wfHKlPBCBAiEA3YYWjBg5WnnUkt6lsDkUIoG4KM7gmD4m47odEN%2FL0Ekq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJbTsVE%2Fq4elt2XGSrcA9vssNOUNDz0ogwfCsShiD68ZNph5MZXkqoFaNzXMBMf8hJu%2BQx1Le8B2DHEQWLrTs4efu%2BqxHBMLHpThh2V%2FeQpKggjSbynDqWx8Zb%2BsYPfm35EJSIkurl%2Fs8oZe9j3pGmKM0ZNoTBbqboiCw9%2FCa%2FzkpNZ%2FzRYn8CDAUYpFt68SEcojRU8BsHpYzI5nodUe4%2F6DnYnuZVeOBmbnECozhHGhHZ69kB4kgmBh9AeOuJdq1hGfHu4G7%2Fw4X2DZLZzhyscsKEOnqBRQGmuxl9qicm1rqqAq4X5hvvQ6TxP7LHybeSZS0oAo22kQ73ok%2ByrmvAy5OcbxDn0I81ZYikLYrw6feRH4PLgJ%2FR2HH31FHWuh%2FNg0wf8h8U54cjsrfzVnc2WN6Kdv%2FwKBNPnR6ynN8S9soB2KhjzEeTJzRhhNWj7glSEZqwC0QmmUV7dNUnUSirBVMbJjTGVBIHPtH6Sj%2Fr3q%2Fd4YsODt5IwUz2C6XgiRxhSvS1QsjQRO142Q%2BY5YwpnXmbAg9Tsadel7Ui10Z8OyaIkgAnEKsNBwN1yo34Dec9%2FkzthKqRfCIcF0GEVpRL9zYm3c1TK00t65r77FmUYgaJU1prwaca1s4sZp2vqdogh47GiPpKkzp8IMO%2Fp5LwGOqUBXXy5dhbDokr8QPnwb3Ogk8uH3D2NV1Kqq3EkCXahK8Y728wHSJZ8r579UlqYbx1jMrzVdQ%2BOE%2Fw7j92Dm5GeNzjA1S0Lx8RKiVOgcWoXq%2FIFNL4y742ToFk5sLbWVDPC%2F255x5tEktY9o0m3DEXCCO8Ln1K3z07h%2BpDNKClPWVKvn9BQ8YUGoO%2FH%2FMb6LbAabNu8x0rIXsYvMDJluKNsM3HQHhho&X-Amz-Signature=d5240fdafceb71e7396053e6c25c4f33f4c031b9744fa9729eb3e61814a8f315&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQL7SGL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFe9AZ0AipZuufUyjaj%2B7O2LQALjgdGNLo1wfHKlPBCBAiEA3YYWjBg5WnnUkt6lsDkUIoG4KM7gmD4m47odEN%2FL0Ekq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJbTsVE%2Fq4elt2XGSrcA9vssNOUNDz0ogwfCsShiD68ZNph5MZXkqoFaNzXMBMf8hJu%2BQx1Le8B2DHEQWLrTs4efu%2BqxHBMLHpThh2V%2FeQpKggjSbynDqWx8Zb%2BsYPfm35EJSIkurl%2Fs8oZe9j3pGmKM0ZNoTBbqboiCw9%2FCa%2FzkpNZ%2FzRYn8CDAUYpFt68SEcojRU8BsHpYzI5nodUe4%2F6DnYnuZVeOBmbnECozhHGhHZ69kB4kgmBh9AeOuJdq1hGfHu4G7%2Fw4X2DZLZzhyscsKEOnqBRQGmuxl9qicm1rqqAq4X5hvvQ6TxP7LHybeSZS0oAo22kQ73ok%2ByrmvAy5OcbxDn0I81ZYikLYrw6feRH4PLgJ%2FR2HH31FHWuh%2FNg0wf8h8U54cjsrfzVnc2WN6Kdv%2FwKBNPnR6ynN8S9soB2KhjzEeTJzRhhNWj7glSEZqwC0QmmUV7dNUnUSirBVMbJjTGVBIHPtH6Sj%2Fr3q%2Fd4YsODt5IwUz2C6XgiRxhSvS1QsjQRO142Q%2BY5YwpnXmbAg9Tsadel7Ui10Z8OyaIkgAnEKsNBwN1yo34Dec9%2FkzthKqRfCIcF0GEVpRL9zYm3c1TK00t65r77FmUYgaJU1prwaca1s4sZp2vqdogh47GiPpKkzp8IMO%2Fp5LwGOqUBXXy5dhbDokr8QPnwb3Ogk8uH3D2NV1Kqq3EkCXahK8Y728wHSJZ8r579UlqYbx1jMrzVdQ%2BOE%2Fw7j92Dm5GeNzjA1S0Lx8RKiVOgcWoXq%2FIFNL4y742ToFk5sLbWVDPC%2F255x5tEktY9o0m3DEXCCO8Ln1K3z07h%2BpDNKClPWVKvn9BQ8YUGoO%2FH%2FMb6LbAabNu8x0rIXsYvMDJluKNsM3HQHhho&X-Amz-Signature=ea84d0e653537808bf0c8d5bbe4a7ef4380c4e71a7efa9b4b3bfbcf6d727b8d4&X-Amz-SignedHeaders=host&x-id=GetObject)
