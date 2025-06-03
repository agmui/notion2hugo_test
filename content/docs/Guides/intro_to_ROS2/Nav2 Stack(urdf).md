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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=024f85147a99f66c83b014a9276b13702d91232dacff6f7ce116992546fcb418&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=ad477a16dacbc7c10c8cfc56c10046450cc620f3b30fecc5d20ce69b06bc2002&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=9c2df87a698bb0dfeb6ee1a61ec94d63dec41b59215466a98336ba49efae97e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=52adf872f16b6d30156a68a0b01fe1b1e860ce0c290f8fdc8bbd27491359cc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=9398686b321d23c34009229f807333f4c8650408bac7ce99f0448afa3bf6b45d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=7a3049f9c633b51ff53fc1fc910fc2e4a7d98ce47a5b9c636784bdee21dcc227&X-Amz-SignedHeaders=host&x-id=GetObject)
