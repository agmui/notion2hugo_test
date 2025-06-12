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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBLEO5V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCpmTeCsWO3x%2FaZLGX3WzgHC1JPGTEo3LgeweGwz5wxJgIgV5jQtQvslrxeHPmOekJ6INx4%2ByX0UCc3NleIInM473IqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yIhnpiKl99e05pircA03hTqZjusa%2BJUGgaClcLLU5dKVZnwG4KGJDn%2BvkcavHCy9SMJV7F5qbz40sLieEeGE8Dfo%2FvqQF8EdYXsaaMwl4b5JUjpwYZpkTNry0%2FD2nQY8JDFqfT%2BimBQZMu5VqWMolZNq6jmv6CyrmTdRkRX99K6IiYs7%2FTlvqz%2FYvzkJ2QWQ6%2FHbTa6xFCvmcCSoOL8rRcBocKZ6Wld9bWnfAiFTefiCMx7FYGql0NSv7O%2BM4pELcpdVvv0qZnPscuXTy%2BR7ODQo7%2BkJQS%2Fm7WVvSHowluwVHSRiTNVZErUkgeJlWo1LW%2FUjviBewTxbkWyMeEHfofkWsa2kbeDUOuixNZzc4kTtQwK2B2oaIO5NccxEMB%2FFbgq6Px1oYCczgRvyCkYYeluG59o%2FkX9tq4Tka7h%2BEAMqij4cW1tJc3wBcWryKvyM7GAhrl4uoHT3n4myg%2B%2FMJ1kFYMJtU0Zj3pTMu6YEvq%2Bg%2BGKEoYavL41oX9oBCDT%2BRoVTTV%2BlTmy9k%2FnjRbbuLBA5HWpx5ChseE%2BJUhTzKJj2eRLecJciR%2BayKXzyfI2eBMgECZ%2FGj%2BmxlIhicSUhW8jVKg%2B%2BcdVqlV3mRSpOCES9bXA5%2Flob2r%2BRDu%2BJaxBfhdlzXHUxs5VY5MIfvqMIGOqUBmDC72zLWqqRJTtKBiR0tfn9DvgaFyGsYnyGIcHGrV7km%2BxGmRFQTOt6X4szDQRNxSI%2F4nL5rqwuFp%2FUO%2B6NuNxE7YSAL5a6RdrJy3bYsrC%2FAG5a1F08hS54P3joizr0xH7VoMdS7y0Xh6DR%2BSd5cXba60IWRYpI9YDt6aOHyRAX6gtxcXvjfo0iP49jdE1kZ%2BY3kRYarOdn47hU%2FWWgJZJPtacpq&X-Amz-Signature=1f699077463392b407e1d5b53fc9a2681045e1506a46f7b2b8cd5cead63cb1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBLEO5V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCpmTeCsWO3x%2FaZLGX3WzgHC1JPGTEo3LgeweGwz5wxJgIgV5jQtQvslrxeHPmOekJ6INx4%2ByX0UCc3NleIInM473IqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yIhnpiKl99e05pircA03hTqZjusa%2BJUGgaClcLLU5dKVZnwG4KGJDn%2BvkcavHCy9SMJV7F5qbz40sLieEeGE8Dfo%2FvqQF8EdYXsaaMwl4b5JUjpwYZpkTNry0%2FD2nQY8JDFqfT%2BimBQZMu5VqWMolZNq6jmv6CyrmTdRkRX99K6IiYs7%2FTlvqz%2FYvzkJ2QWQ6%2FHbTa6xFCvmcCSoOL8rRcBocKZ6Wld9bWnfAiFTefiCMx7FYGql0NSv7O%2BM4pELcpdVvv0qZnPscuXTy%2BR7ODQo7%2BkJQS%2Fm7WVvSHowluwVHSRiTNVZErUkgeJlWo1LW%2FUjviBewTxbkWyMeEHfofkWsa2kbeDUOuixNZzc4kTtQwK2B2oaIO5NccxEMB%2FFbgq6Px1oYCczgRvyCkYYeluG59o%2FkX9tq4Tka7h%2BEAMqij4cW1tJc3wBcWryKvyM7GAhrl4uoHT3n4myg%2B%2FMJ1kFYMJtU0Zj3pTMu6YEvq%2Bg%2BGKEoYavL41oX9oBCDT%2BRoVTTV%2BlTmy9k%2FnjRbbuLBA5HWpx5ChseE%2BJUhTzKJj2eRLecJciR%2BayKXzyfI2eBMgECZ%2FGj%2BmxlIhicSUhW8jVKg%2B%2BcdVqlV3mRSpOCES9bXA5%2Flob2r%2BRDu%2BJaxBfhdlzXHUxs5VY5MIfvqMIGOqUBmDC72zLWqqRJTtKBiR0tfn9DvgaFyGsYnyGIcHGrV7km%2BxGmRFQTOt6X4szDQRNxSI%2F4nL5rqwuFp%2FUO%2B6NuNxE7YSAL5a6RdrJy3bYsrC%2FAG5a1F08hS54P3joizr0xH7VoMdS7y0Xh6DR%2BSd5cXba60IWRYpI9YDt6aOHyRAX6gtxcXvjfo0iP49jdE1kZ%2BY3kRYarOdn47hU%2FWWgJZJPtacpq&X-Amz-Signature=1e2275aeb32aa5e06ca7522fe93ee2e2b7fa9bfda562049bb04db6ed1cc8ecf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBLEO5V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCpmTeCsWO3x%2FaZLGX3WzgHC1JPGTEo3LgeweGwz5wxJgIgV5jQtQvslrxeHPmOekJ6INx4%2ByX0UCc3NleIInM473IqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yIhnpiKl99e05pircA03hTqZjusa%2BJUGgaClcLLU5dKVZnwG4KGJDn%2BvkcavHCy9SMJV7F5qbz40sLieEeGE8Dfo%2FvqQF8EdYXsaaMwl4b5JUjpwYZpkTNry0%2FD2nQY8JDFqfT%2BimBQZMu5VqWMolZNq6jmv6CyrmTdRkRX99K6IiYs7%2FTlvqz%2FYvzkJ2QWQ6%2FHbTa6xFCvmcCSoOL8rRcBocKZ6Wld9bWnfAiFTefiCMx7FYGql0NSv7O%2BM4pELcpdVvv0qZnPscuXTy%2BR7ODQo7%2BkJQS%2Fm7WVvSHowluwVHSRiTNVZErUkgeJlWo1LW%2FUjviBewTxbkWyMeEHfofkWsa2kbeDUOuixNZzc4kTtQwK2B2oaIO5NccxEMB%2FFbgq6Px1oYCczgRvyCkYYeluG59o%2FkX9tq4Tka7h%2BEAMqij4cW1tJc3wBcWryKvyM7GAhrl4uoHT3n4myg%2B%2FMJ1kFYMJtU0Zj3pTMu6YEvq%2Bg%2BGKEoYavL41oX9oBCDT%2BRoVTTV%2BlTmy9k%2FnjRbbuLBA5HWpx5ChseE%2BJUhTzKJj2eRLecJciR%2BayKXzyfI2eBMgECZ%2FGj%2BmxlIhicSUhW8jVKg%2B%2BcdVqlV3mRSpOCES9bXA5%2Flob2r%2BRDu%2BJaxBfhdlzXHUxs5VY5MIfvqMIGOqUBmDC72zLWqqRJTtKBiR0tfn9DvgaFyGsYnyGIcHGrV7km%2BxGmRFQTOt6X4szDQRNxSI%2F4nL5rqwuFp%2FUO%2B6NuNxE7YSAL5a6RdrJy3bYsrC%2FAG5a1F08hS54P3joizr0xH7VoMdS7y0Xh6DR%2BSd5cXba60IWRYpI9YDt6aOHyRAX6gtxcXvjfo0iP49jdE1kZ%2BY3kRYarOdn47hU%2FWWgJZJPtacpq&X-Amz-Signature=c4b0ae1f9df932cbd2d6fff1fa21ce00c09daea4a0116704b07cbf75a4bc54e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBLEO5V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCpmTeCsWO3x%2FaZLGX3WzgHC1JPGTEo3LgeweGwz5wxJgIgV5jQtQvslrxeHPmOekJ6INx4%2ByX0UCc3NleIInM473IqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yIhnpiKl99e05pircA03hTqZjusa%2BJUGgaClcLLU5dKVZnwG4KGJDn%2BvkcavHCy9SMJV7F5qbz40sLieEeGE8Dfo%2FvqQF8EdYXsaaMwl4b5JUjpwYZpkTNry0%2FD2nQY8JDFqfT%2BimBQZMu5VqWMolZNq6jmv6CyrmTdRkRX99K6IiYs7%2FTlvqz%2FYvzkJ2QWQ6%2FHbTa6xFCvmcCSoOL8rRcBocKZ6Wld9bWnfAiFTefiCMx7FYGql0NSv7O%2BM4pELcpdVvv0qZnPscuXTy%2BR7ODQo7%2BkJQS%2Fm7WVvSHowluwVHSRiTNVZErUkgeJlWo1LW%2FUjviBewTxbkWyMeEHfofkWsa2kbeDUOuixNZzc4kTtQwK2B2oaIO5NccxEMB%2FFbgq6Px1oYCczgRvyCkYYeluG59o%2FkX9tq4Tka7h%2BEAMqij4cW1tJc3wBcWryKvyM7GAhrl4uoHT3n4myg%2B%2FMJ1kFYMJtU0Zj3pTMu6YEvq%2Bg%2BGKEoYavL41oX9oBCDT%2BRoVTTV%2BlTmy9k%2FnjRbbuLBA5HWpx5ChseE%2BJUhTzKJj2eRLecJciR%2BayKXzyfI2eBMgECZ%2FGj%2BmxlIhicSUhW8jVKg%2B%2BcdVqlV3mRSpOCES9bXA5%2Flob2r%2BRDu%2BJaxBfhdlzXHUxs5VY5MIfvqMIGOqUBmDC72zLWqqRJTtKBiR0tfn9DvgaFyGsYnyGIcHGrV7km%2BxGmRFQTOt6X4szDQRNxSI%2F4nL5rqwuFp%2FUO%2B6NuNxE7YSAL5a6RdrJy3bYsrC%2FAG5a1F08hS54P3joizr0xH7VoMdS7y0Xh6DR%2BSd5cXba60IWRYpI9YDt6aOHyRAX6gtxcXvjfo0iP49jdE1kZ%2BY3kRYarOdn47hU%2FWWgJZJPtacpq&X-Amz-Signature=2b6d0780ba5a225c74e1c66100eb83988649302036df5c9a9fcedb67055eacd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBLEO5V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCpmTeCsWO3x%2FaZLGX3WzgHC1JPGTEo3LgeweGwz5wxJgIgV5jQtQvslrxeHPmOekJ6INx4%2ByX0UCc3NleIInM473IqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yIhnpiKl99e05pircA03hTqZjusa%2BJUGgaClcLLU5dKVZnwG4KGJDn%2BvkcavHCy9SMJV7F5qbz40sLieEeGE8Dfo%2FvqQF8EdYXsaaMwl4b5JUjpwYZpkTNry0%2FD2nQY8JDFqfT%2BimBQZMu5VqWMolZNq6jmv6CyrmTdRkRX99K6IiYs7%2FTlvqz%2FYvzkJ2QWQ6%2FHbTa6xFCvmcCSoOL8rRcBocKZ6Wld9bWnfAiFTefiCMx7FYGql0NSv7O%2BM4pELcpdVvv0qZnPscuXTy%2BR7ODQo7%2BkJQS%2Fm7WVvSHowluwVHSRiTNVZErUkgeJlWo1LW%2FUjviBewTxbkWyMeEHfofkWsa2kbeDUOuixNZzc4kTtQwK2B2oaIO5NccxEMB%2FFbgq6Px1oYCczgRvyCkYYeluG59o%2FkX9tq4Tka7h%2BEAMqij4cW1tJc3wBcWryKvyM7GAhrl4uoHT3n4myg%2B%2FMJ1kFYMJtU0Zj3pTMu6YEvq%2Bg%2BGKEoYavL41oX9oBCDT%2BRoVTTV%2BlTmy9k%2FnjRbbuLBA5HWpx5ChseE%2BJUhTzKJj2eRLecJciR%2BayKXzyfI2eBMgECZ%2FGj%2BmxlIhicSUhW8jVKg%2B%2BcdVqlV3mRSpOCES9bXA5%2Flob2r%2BRDu%2BJaxBfhdlzXHUxs5VY5MIfvqMIGOqUBmDC72zLWqqRJTtKBiR0tfn9DvgaFyGsYnyGIcHGrV7km%2BxGmRFQTOt6X4szDQRNxSI%2F4nL5rqwuFp%2FUO%2B6NuNxE7YSAL5a6RdrJy3bYsrC%2FAG5a1F08hS54P3joizr0xH7VoMdS7y0Xh6DR%2BSd5cXba60IWRYpI9YDt6aOHyRAX6gtxcXvjfo0iP49jdE1kZ%2BY3kRYarOdn47hU%2FWWgJZJPtacpq&X-Amz-Signature=869f879031f8b99ffa76bce4c8b56740134d5c703bece6487d973829956bc178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBLEO5V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCpmTeCsWO3x%2FaZLGX3WzgHC1JPGTEo3LgeweGwz5wxJgIgV5jQtQvslrxeHPmOekJ6INx4%2ByX0UCc3NleIInM473IqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yIhnpiKl99e05pircA03hTqZjusa%2BJUGgaClcLLU5dKVZnwG4KGJDn%2BvkcavHCy9SMJV7F5qbz40sLieEeGE8Dfo%2FvqQF8EdYXsaaMwl4b5JUjpwYZpkTNry0%2FD2nQY8JDFqfT%2BimBQZMu5VqWMolZNq6jmv6CyrmTdRkRX99K6IiYs7%2FTlvqz%2FYvzkJ2QWQ6%2FHbTa6xFCvmcCSoOL8rRcBocKZ6Wld9bWnfAiFTefiCMx7FYGql0NSv7O%2BM4pELcpdVvv0qZnPscuXTy%2BR7ODQo7%2BkJQS%2Fm7WVvSHowluwVHSRiTNVZErUkgeJlWo1LW%2FUjviBewTxbkWyMeEHfofkWsa2kbeDUOuixNZzc4kTtQwK2B2oaIO5NccxEMB%2FFbgq6Px1oYCczgRvyCkYYeluG59o%2FkX9tq4Tka7h%2BEAMqij4cW1tJc3wBcWryKvyM7GAhrl4uoHT3n4myg%2B%2FMJ1kFYMJtU0Zj3pTMu6YEvq%2Bg%2BGKEoYavL41oX9oBCDT%2BRoVTTV%2BlTmy9k%2FnjRbbuLBA5HWpx5ChseE%2BJUhTzKJj2eRLecJciR%2BayKXzyfI2eBMgECZ%2FGj%2BmxlIhicSUhW8jVKg%2B%2BcdVqlV3mRSpOCES9bXA5%2Flob2r%2BRDu%2BJaxBfhdlzXHUxs5VY5MIfvqMIGOqUBmDC72zLWqqRJTtKBiR0tfn9DvgaFyGsYnyGIcHGrV7km%2BxGmRFQTOt6X4szDQRNxSI%2F4nL5rqwuFp%2FUO%2B6NuNxE7YSAL5a6RdrJy3bYsrC%2FAG5a1F08hS54P3joizr0xH7VoMdS7y0Xh6DR%2BSd5cXba60IWRYpI9YDt6aOHyRAX6gtxcXvjfo0iP49jdE1kZ%2BY3kRYarOdn47hU%2FWWgJZJPtacpq&X-Amz-Signature=9938ed10b466a3f47922fe8abefcdc4e06a29cd3793a2de5cffbf947e533066a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
