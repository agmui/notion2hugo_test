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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLE25N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf574KD89HgoAGre%2FiTqye1JFn6sO8GB6IVKDTV%2FpGcgIhAImXVU0T8JBGn9QKbKPWu2YwLB7OsVENNt%2B%2FtG2826jbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ioS1KKR2UWXbehMq3ANaFxn8x3LHONlWqIEPKAumYNkuhaLdZCYNa5fwuJkbqRN9cApXVW7ZbAV%2F6KLpYVsNCodVB%2FLXsxt%2F%2BQmIuusvbZDutveCoiAgnMc%2FJYK3GUXUWM%2BwZlX7h4A7yMCOEIEXThGbNeAm1f4FxPoCiYbxOUvO6%2BP%2BnklfNhX6AjmEkd%2BK%2BMsILSDvaukvcgFg9DUJLxGAMcO7XOxE3eqJiE3GOG%2BHr0nTL12tH%2B6RYOtL1r8h1AhVkLlYWc8685xw1mVYOzOqlUQ4APzXVqa6N%2Fow869yxNdUdGwdU21kMAoazUL0rHhjaFuOP2P4ttHvUthNp5Hko4028aijPSnYLLsEBvLr3QNPWhq95582u9%2BPCG11uOEhbsM3ExPcW706%2BzLauwLHFSgoD05lsVOdhYeuwfpPGHkO9jDWPlZd8bd6Xxzms3QGLXwkMxEW4P1OEp%2FmxC5K27jVOMJO9%2B0qNhDwhr%2FkOMxmjZwD6ZLedMaiBSee5tfrFiN%2FAgutmVJWZsz8kCIF9%2FlrfU%2FwP024Txh9WMB%2BoLP%2FtlLN2sU6n6KO6l2T4r2NxyQH8u8BLfPiqjsS%2BkhH8hb6VTLHT9K4PSqaKKijypkxIP8oqWrZmBSGOn3jSiJNqnmr%2BxgYGzCsxIS%2FBjqkAe01Gy57dM29Kv55q40HS4JrSXDpmr55sXVKFO1Pr2MyS0SZfLwXubqYe%2FurNmInoV2FBKFAaN%2F8ut5mpaQe%2BTmLXs7ghElyCV6Usy0YUrTMC5%2FKpCVMJ9FB0R0Y5vVqM54zr7nZqttnoG%2BnolpZrwkSzQ7nYwZ4Tn4I68fy%2BTmChJ6P4irrRKO693VJYHrmT3MTr74QEkV%2B6mNkNOP8x50z%2BPoV&X-Amz-Signature=b5c10d2b022711d4a4a0fe9626f2bbc76c4c236336180ddc50cb055a7a91453a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLE25N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf574KD89HgoAGre%2FiTqye1JFn6sO8GB6IVKDTV%2FpGcgIhAImXVU0T8JBGn9QKbKPWu2YwLB7OsVENNt%2B%2FtG2826jbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ioS1KKR2UWXbehMq3ANaFxn8x3LHONlWqIEPKAumYNkuhaLdZCYNa5fwuJkbqRN9cApXVW7ZbAV%2F6KLpYVsNCodVB%2FLXsxt%2F%2BQmIuusvbZDutveCoiAgnMc%2FJYK3GUXUWM%2BwZlX7h4A7yMCOEIEXThGbNeAm1f4FxPoCiYbxOUvO6%2BP%2BnklfNhX6AjmEkd%2BK%2BMsILSDvaukvcgFg9DUJLxGAMcO7XOxE3eqJiE3GOG%2BHr0nTL12tH%2B6RYOtL1r8h1AhVkLlYWc8685xw1mVYOzOqlUQ4APzXVqa6N%2Fow869yxNdUdGwdU21kMAoazUL0rHhjaFuOP2P4ttHvUthNp5Hko4028aijPSnYLLsEBvLr3QNPWhq95582u9%2BPCG11uOEhbsM3ExPcW706%2BzLauwLHFSgoD05lsVOdhYeuwfpPGHkO9jDWPlZd8bd6Xxzms3QGLXwkMxEW4P1OEp%2FmxC5K27jVOMJO9%2B0qNhDwhr%2FkOMxmjZwD6ZLedMaiBSee5tfrFiN%2FAgutmVJWZsz8kCIF9%2FlrfU%2FwP024Txh9WMB%2BoLP%2FtlLN2sU6n6KO6l2T4r2NxyQH8u8BLfPiqjsS%2BkhH8hb6VTLHT9K4PSqaKKijypkxIP8oqWrZmBSGOn3jSiJNqnmr%2BxgYGzCsxIS%2FBjqkAe01Gy57dM29Kv55q40HS4JrSXDpmr55sXVKFO1Pr2MyS0SZfLwXubqYe%2FurNmInoV2FBKFAaN%2F8ut5mpaQe%2BTmLXs7ghElyCV6Usy0YUrTMC5%2FKpCVMJ9FB0R0Y5vVqM54zr7nZqttnoG%2BnolpZrwkSzQ7nYwZ4Tn4I68fy%2BTmChJ6P4irrRKO693VJYHrmT3MTr74QEkV%2B6mNkNOP8x50z%2BPoV&X-Amz-Signature=fe801a10f4df27a4f4f688ffcc9e00aabb4f4f81fb9bb6dbda3d257bd4e05e49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLE25N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf574KD89HgoAGre%2FiTqye1JFn6sO8GB6IVKDTV%2FpGcgIhAImXVU0T8JBGn9QKbKPWu2YwLB7OsVENNt%2B%2FtG2826jbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ioS1KKR2UWXbehMq3ANaFxn8x3LHONlWqIEPKAumYNkuhaLdZCYNa5fwuJkbqRN9cApXVW7ZbAV%2F6KLpYVsNCodVB%2FLXsxt%2F%2BQmIuusvbZDutveCoiAgnMc%2FJYK3GUXUWM%2BwZlX7h4A7yMCOEIEXThGbNeAm1f4FxPoCiYbxOUvO6%2BP%2BnklfNhX6AjmEkd%2BK%2BMsILSDvaukvcgFg9DUJLxGAMcO7XOxE3eqJiE3GOG%2BHr0nTL12tH%2B6RYOtL1r8h1AhVkLlYWc8685xw1mVYOzOqlUQ4APzXVqa6N%2Fow869yxNdUdGwdU21kMAoazUL0rHhjaFuOP2P4ttHvUthNp5Hko4028aijPSnYLLsEBvLr3QNPWhq95582u9%2BPCG11uOEhbsM3ExPcW706%2BzLauwLHFSgoD05lsVOdhYeuwfpPGHkO9jDWPlZd8bd6Xxzms3QGLXwkMxEW4P1OEp%2FmxC5K27jVOMJO9%2B0qNhDwhr%2FkOMxmjZwD6ZLedMaiBSee5tfrFiN%2FAgutmVJWZsz8kCIF9%2FlrfU%2FwP024Txh9WMB%2BoLP%2FtlLN2sU6n6KO6l2T4r2NxyQH8u8BLfPiqjsS%2BkhH8hb6VTLHT9K4PSqaKKijypkxIP8oqWrZmBSGOn3jSiJNqnmr%2BxgYGzCsxIS%2FBjqkAe01Gy57dM29Kv55q40HS4JrSXDpmr55sXVKFO1Pr2MyS0SZfLwXubqYe%2FurNmInoV2FBKFAaN%2F8ut5mpaQe%2BTmLXs7ghElyCV6Usy0YUrTMC5%2FKpCVMJ9FB0R0Y5vVqM54zr7nZqttnoG%2BnolpZrwkSzQ7nYwZ4Tn4I68fy%2BTmChJ6P4irrRKO693VJYHrmT3MTr74QEkV%2B6mNkNOP8x50z%2BPoV&X-Amz-Signature=bb0a3ad25fd9ace74e42ce74e46737713dc3e88e4bc7e068f22ecf0b56b59de0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLE25N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf574KD89HgoAGre%2FiTqye1JFn6sO8GB6IVKDTV%2FpGcgIhAImXVU0T8JBGn9QKbKPWu2YwLB7OsVENNt%2B%2FtG2826jbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ioS1KKR2UWXbehMq3ANaFxn8x3LHONlWqIEPKAumYNkuhaLdZCYNa5fwuJkbqRN9cApXVW7ZbAV%2F6KLpYVsNCodVB%2FLXsxt%2F%2BQmIuusvbZDutveCoiAgnMc%2FJYK3GUXUWM%2BwZlX7h4A7yMCOEIEXThGbNeAm1f4FxPoCiYbxOUvO6%2BP%2BnklfNhX6AjmEkd%2BK%2BMsILSDvaukvcgFg9DUJLxGAMcO7XOxE3eqJiE3GOG%2BHr0nTL12tH%2B6RYOtL1r8h1AhVkLlYWc8685xw1mVYOzOqlUQ4APzXVqa6N%2Fow869yxNdUdGwdU21kMAoazUL0rHhjaFuOP2P4ttHvUthNp5Hko4028aijPSnYLLsEBvLr3QNPWhq95582u9%2BPCG11uOEhbsM3ExPcW706%2BzLauwLHFSgoD05lsVOdhYeuwfpPGHkO9jDWPlZd8bd6Xxzms3QGLXwkMxEW4P1OEp%2FmxC5K27jVOMJO9%2B0qNhDwhr%2FkOMxmjZwD6ZLedMaiBSee5tfrFiN%2FAgutmVJWZsz8kCIF9%2FlrfU%2FwP024Txh9WMB%2BoLP%2FtlLN2sU6n6KO6l2T4r2NxyQH8u8BLfPiqjsS%2BkhH8hb6VTLHT9K4PSqaKKijypkxIP8oqWrZmBSGOn3jSiJNqnmr%2BxgYGzCsxIS%2FBjqkAe01Gy57dM29Kv55q40HS4JrSXDpmr55sXVKFO1Pr2MyS0SZfLwXubqYe%2FurNmInoV2FBKFAaN%2F8ut5mpaQe%2BTmLXs7ghElyCV6Usy0YUrTMC5%2FKpCVMJ9FB0R0Y5vVqM54zr7nZqttnoG%2BnolpZrwkSzQ7nYwZ4Tn4I68fy%2BTmChJ6P4irrRKO693VJYHrmT3MTr74QEkV%2B6mNkNOP8x50z%2BPoV&X-Amz-Signature=eb92ec2dfb0a55e94b3a69d29741abc7487d4990dd7274a452d01afa7b913833&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLE25N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf574KD89HgoAGre%2FiTqye1JFn6sO8GB6IVKDTV%2FpGcgIhAImXVU0T8JBGn9QKbKPWu2YwLB7OsVENNt%2B%2FtG2826jbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ioS1KKR2UWXbehMq3ANaFxn8x3LHONlWqIEPKAumYNkuhaLdZCYNa5fwuJkbqRN9cApXVW7ZbAV%2F6KLpYVsNCodVB%2FLXsxt%2F%2BQmIuusvbZDutveCoiAgnMc%2FJYK3GUXUWM%2BwZlX7h4A7yMCOEIEXThGbNeAm1f4FxPoCiYbxOUvO6%2BP%2BnklfNhX6AjmEkd%2BK%2BMsILSDvaukvcgFg9DUJLxGAMcO7XOxE3eqJiE3GOG%2BHr0nTL12tH%2B6RYOtL1r8h1AhVkLlYWc8685xw1mVYOzOqlUQ4APzXVqa6N%2Fow869yxNdUdGwdU21kMAoazUL0rHhjaFuOP2P4ttHvUthNp5Hko4028aijPSnYLLsEBvLr3QNPWhq95582u9%2BPCG11uOEhbsM3ExPcW706%2BzLauwLHFSgoD05lsVOdhYeuwfpPGHkO9jDWPlZd8bd6Xxzms3QGLXwkMxEW4P1OEp%2FmxC5K27jVOMJO9%2B0qNhDwhr%2FkOMxmjZwD6ZLedMaiBSee5tfrFiN%2FAgutmVJWZsz8kCIF9%2FlrfU%2FwP024Txh9WMB%2BoLP%2FtlLN2sU6n6KO6l2T4r2NxyQH8u8BLfPiqjsS%2BkhH8hb6VTLHT9K4PSqaKKijypkxIP8oqWrZmBSGOn3jSiJNqnmr%2BxgYGzCsxIS%2FBjqkAe01Gy57dM29Kv55q40HS4JrSXDpmr55sXVKFO1Pr2MyS0SZfLwXubqYe%2FurNmInoV2FBKFAaN%2F8ut5mpaQe%2BTmLXs7ghElyCV6Usy0YUrTMC5%2FKpCVMJ9FB0R0Y5vVqM54zr7nZqttnoG%2BnolpZrwkSzQ7nYwZ4Tn4I68fy%2BTmChJ6P4irrRKO693VJYHrmT3MTr74QEkV%2B6mNkNOP8x50z%2BPoV&X-Amz-Signature=8efa531319daee3f56e98b4763c073b1ec2ca26398b9d407ee1a8d1b7b0367e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWLE25N%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf574KD89HgoAGre%2FiTqye1JFn6sO8GB6IVKDTV%2FpGcgIhAImXVU0T8JBGn9QKbKPWu2YwLB7OsVENNt%2B%2FtG2826jbKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3ioS1KKR2UWXbehMq3ANaFxn8x3LHONlWqIEPKAumYNkuhaLdZCYNa5fwuJkbqRN9cApXVW7ZbAV%2F6KLpYVsNCodVB%2FLXsxt%2F%2BQmIuusvbZDutveCoiAgnMc%2FJYK3GUXUWM%2BwZlX7h4A7yMCOEIEXThGbNeAm1f4FxPoCiYbxOUvO6%2BP%2BnklfNhX6AjmEkd%2BK%2BMsILSDvaukvcgFg9DUJLxGAMcO7XOxE3eqJiE3GOG%2BHr0nTL12tH%2B6RYOtL1r8h1AhVkLlYWc8685xw1mVYOzOqlUQ4APzXVqa6N%2Fow869yxNdUdGwdU21kMAoazUL0rHhjaFuOP2P4ttHvUthNp5Hko4028aijPSnYLLsEBvLr3QNPWhq95582u9%2BPCG11uOEhbsM3ExPcW706%2BzLauwLHFSgoD05lsVOdhYeuwfpPGHkO9jDWPlZd8bd6Xxzms3QGLXwkMxEW4P1OEp%2FmxC5K27jVOMJO9%2B0qNhDwhr%2FkOMxmjZwD6ZLedMaiBSee5tfrFiN%2FAgutmVJWZsz8kCIF9%2FlrfU%2FwP024Txh9WMB%2BoLP%2FtlLN2sU6n6KO6l2T4r2NxyQH8u8BLfPiqjsS%2BkhH8hb6VTLHT9K4PSqaKKijypkxIP8oqWrZmBSGOn3jSiJNqnmr%2BxgYGzCsxIS%2FBjqkAe01Gy57dM29Kv55q40HS4JrSXDpmr55sXVKFO1Pr2MyS0SZfLwXubqYe%2FurNmInoV2FBKFAaN%2F8ut5mpaQe%2BTmLXs7ghElyCV6Usy0YUrTMC5%2FKpCVMJ9FB0R0Y5vVqM54zr7nZqttnoG%2BnolpZrwkSzQ7nYwZ4Tn4I68fy%2BTmChJ6P4irrRKO693VJYHrmT3MTr74QEkV%2B6mNkNOP8x50z%2BPoV&X-Amz-Signature=327d7f293fe7ffaceaa44eef26e35829a04a78b8f116b5292e8b8abedcf18526&X-Amz-SignedHeaders=host&x-id=GetObject)
