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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OZW7MK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD95eVDTGvjHqoNhuKbSXjTrCkK8hlxX6v0CbGMPma7wIhAORJiw1e%2FQGW3ELPqzp9BIoqA8hm8HCcXaOmiu9HSOL9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6TljjYUHXCgBVr4Mq3APeSDXxTm88gD5kQLKh4INmuAc88afECMRli5Z1vnrxleJW1gv7Q0jqC32e3LPdzjl2W39rZimC3JE0zQ4%2BaO%2FWXhGOTdyNknxbxrtyaZ5dzjBOGtu3puqXTSU7xNEOBr%2FH6gmsgZng%2BrhugV0LvrQ0y64PVnubm8wKkqUlfxNJgBzMRE32%2B0PFbXf7%2BWE8ncEK0ZxDP26yOYNbMGIIeJhxVeL5E7nlUiGYLHp%2BcCC5ErEYvIHAmZaelQm0Q1BoK4dD4Wq8eb981d1qfNjBKU4U1zexdcSprlT0s%2FBC6F0vexC%2BWyweCA8BSaaQtdwI9ZRQZ6yZxrAMciddLXGp6tQSdYc8pjf5O9sgc0Qqz6DRR6DPpQLPKSr3le1fHEE2s%2FAkTbpL9XM6eY8H5z60SkHIUFt7FmezHGZNCYwPpHHVoF2iToHzImhMYRvZNjRG5iaTbIwvDTbBN%2FQxDtwFForZsGMdkvux7aPlmZGBdaRUqoO6fv%2BS89zVVqeOnMUO4W1mcqnXhg4zQvPx6PBwQRj3fZK9PJRigpH2l4LxPGrpCFGaB0l3KqrjdYPZBzEYbFUh5%2FlXMXrFChnRurzSJ%2Fw%2BRD4yzR4Q5kYdv1IUOVgoBNYAABiWYcZ%2F5Slu7jDDxPi8BjqkAZXsNDJWPGLgdzsOEAzZbzkamWn6nuyM4NthC6ArZjsF%2BIrPwXMj74cncTftW5jSUwaCdLzrylmaI8dSCOBVIY%2FaJx4jru%2BWgZ6jPFVkbVpWPmx6mlSmMavHCIiFx193dXM1sA4GSMH4z1PK1GY2smJDSiSbfxg%2BaKDDU3%2BYMlqbZU278CtE05n8u9dmCha8UnQe3gorPRhR7MBC%2FKpMewvFVQQw&X-Amz-Signature=1c3c3f4cf0672266e854a07213d2ab1c55179ca920b12ce858809dd88ee2108f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OZW7MK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD95eVDTGvjHqoNhuKbSXjTrCkK8hlxX6v0CbGMPma7wIhAORJiw1e%2FQGW3ELPqzp9BIoqA8hm8HCcXaOmiu9HSOL9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6TljjYUHXCgBVr4Mq3APeSDXxTm88gD5kQLKh4INmuAc88afECMRli5Z1vnrxleJW1gv7Q0jqC32e3LPdzjl2W39rZimC3JE0zQ4%2BaO%2FWXhGOTdyNknxbxrtyaZ5dzjBOGtu3puqXTSU7xNEOBr%2FH6gmsgZng%2BrhugV0LvrQ0y64PVnubm8wKkqUlfxNJgBzMRE32%2B0PFbXf7%2BWE8ncEK0ZxDP26yOYNbMGIIeJhxVeL5E7nlUiGYLHp%2BcCC5ErEYvIHAmZaelQm0Q1BoK4dD4Wq8eb981d1qfNjBKU4U1zexdcSprlT0s%2FBC6F0vexC%2BWyweCA8BSaaQtdwI9ZRQZ6yZxrAMciddLXGp6tQSdYc8pjf5O9sgc0Qqz6DRR6DPpQLPKSr3le1fHEE2s%2FAkTbpL9XM6eY8H5z60SkHIUFt7FmezHGZNCYwPpHHVoF2iToHzImhMYRvZNjRG5iaTbIwvDTbBN%2FQxDtwFForZsGMdkvux7aPlmZGBdaRUqoO6fv%2BS89zVVqeOnMUO4W1mcqnXhg4zQvPx6PBwQRj3fZK9PJRigpH2l4LxPGrpCFGaB0l3KqrjdYPZBzEYbFUh5%2FlXMXrFChnRurzSJ%2Fw%2BRD4yzR4Q5kYdv1IUOVgoBNYAABiWYcZ%2F5Slu7jDDxPi8BjqkAZXsNDJWPGLgdzsOEAzZbzkamWn6nuyM4NthC6ArZjsF%2BIrPwXMj74cncTftW5jSUwaCdLzrylmaI8dSCOBVIY%2FaJx4jru%2BWgZ6jPFVkbVpWPmx6mlSmMavHCIiFx193dXM1sA4GSMH4z1PK1GY2smJDSiSbfxg%2BaKDDU3%2BYMlqbZU278CtE05n8u9dmCha8UnQe3gorPRhR7MBC%2FKpMewvFVQQw&X-Amz-Signature=e84996d0aa02c2651af741944bc62467275a804cb1df48545f71eb64309e2225&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OZW7MK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD95eVDTGvjHqoNhuKbSXjTrCkK8hlxX6v0CbGMPma7wIhAORJiw1e%2FQGW3ELPqzp9BIoqA8hm8HCcXaOmiu9HSOL9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6TljjYUHXCgBVr4Mq3APeSDXxTm88gD5kQLKh4INmuAc88afECMRli5Z1vnrxleJW1gv7Q0jqC32e3LPdzjl2W39rZimC3JE0zQ4%2BaO%2FWXhGOTdyNknxbxrtyaZ5dzjBOGtu3puqXTSU7xNEOBr%2FH6gmsgZng%2BrhugV0LvrQ0y64PVnubm8wKkqUlfxNJgBzMRE32%2B0PFbXf7%2BWE8ncEK0ZxDP26yOYNbMGIIeJhxVeL5E7nlUiGYLHp%2BcCC5ErEYvIHAmZaelQm0Q1BoK4dD4Wq8eb981d1qfNjBKU4U1zexdcSprlT0s%2FBC6F0vexC%2BWyweCA8BSaaQtdwI9ZRQZ6yZxrAMciddLXGp6tQSdYc8pjf5O9sgc0Qqz6DRR6DPpQLPKSr3le1fHEE2s%2FAkTbpL9XM6eY8H5z60SkHIUFt7FmezHGZNCYwPpHHVoF2iToHzImhMYRvZNjRG5iaTbIwvDTbBN%2FQxDtwFForZsGMdkvux7aPlmZGBdaRUqoO6fv%2BS89zVVqeOnMUO4W1mcqnXhg4zQvPx6PBwQRj3fZK9PJRigpH2l4LxPGrpCFGaB0l3KqrjdYPZBzEYbFUh5%2FlXMXrFChnRurzSJ%2Fw%2BRD4yzR4Q5kYdv1IUOVgoBNYAABiWYcZ%2F5Slu7jDDxPi8BjqkAZXsNDJWPGLgdzsOEAzZbzkamWn6nuyM4NthC6ArZjsF%2BIrPwXMj74cncTftW5jSUwaCdLzrylmaI8dSCOBVIY%2FaJx4jru%2BWgZ6jPFVkbVpWPmx6mlSmMavHCIiFx193dXM1sA4GSMH4z1PK1GY2smJDSiSbfxg%2BaKDDU3%2BYMlqbZU278CtE05n8u9dmCha8UnQe3gorPRhR7MBC%2FKpMewvFVQQw&X-Amz-Signature=4ccbaafefd04870e4d2014fd61cd667b6e42de9c0d3883cc4b581d9ed88c6aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OZW7MK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD95eVDTGvjHqoNhuKbSXjTrCkK8hlxX6v0CbGMPma7wIhAORJiw1e%2FQGW3ELPqzp9BIoqA8hm8HCcXaOmiu9HSOL9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6TljjYUHXCgBVr4Mq3APeSDXxTm88gD5kQLKh4INmuAc88afECMRli5Z1vnrxleJW1gv7Q0jqC32e3LPdzjl2W39rZimC3JE0zQ4%2BaO%2FWXhGOTdyNknxbxrtyaZ5dzjBOGtu3puqXTSU7xNEOBr%2FH6gmsgZng%2BrhugV0LvrQ0y64PVnubm8wKkqUlfxNJgBzMRE32%2B0PFbXf7%2BWE8ncEK0ZxDP26yOYNbMGIIeJhxVeL5E7nlUiGYLHp%2BcCC5ErEYvIHAmZaelQm0Q1BoK4dD4Wq8eb981d1qfNjBKU4U1zexdcSprlT0s%2FBC6F0vexC%2BWyweCA8BSaaQtdwI9ZRQZ6yZxrAMciddLXGp6tQSdYc8pjf5O9sgc0Qqz6DRR6DPpQLPKSr3le1fHEE2s%2FAkTbpL9XM6eY8H5z60SkHIUFt7FmezHGZNCYwPpHHVoF2iToHzImhMYRvZNjRG5iaTbIwvDTbBN%2FQxDtwFForZsGMdkvux7aPlmZGBdaRUqoO6fv%2BS89zVVqeOnMUO4W1mcqnXhg4zQvPx6PBwQRj3fZK9PJRigpH2l4LxPGrpCFGaB0l3KqrjdYPZBzEYbFUh5%2FlXMXrFChnRurzSJ%2Fw%2BRD4yzR4Q5kYdv1IUOVgoBNYAABiWYcZ%2F5Slu7jDDxPi8BjqkAZXsNDJWPGLgdzsOEAzZbzkamWn6nuyM4NthC6ArZjsF%2BIrPwXMj74cncTftW5jSUwaCdLzrylmaI8dSCOBVIY%2FaJx4jru%2BWgZ6jPFVkbVpWPmx6mlSmMavHCIiFx193dXM1sA4GSMH4z1PK1GY2smJDSiSbfxg%2BaKDDU3%2BYMlqbZU278CtE05n8u9dmCha8UnQe3gorPRhR7MBC%2FKpMewvFVQQw&X-Amz-Signature=f0e2af23b2685bb7499398483c3870a5f4122708a80210b036512fed71aeeae7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OZW7MK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD95eVDTGvjHqoNhuKbSXjTrCkK8hlxX6v0CbGMPma7wIhAORJiw1e%2FQGW3ELPqzp9BIoqA8hm8HCcXaOmiu9HSOL9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6TljjYUHXCgBVr4Mq3APeSDXxTm88gD5kQLKh4INmuAc88afECMRli5Z1vnrxleJW1gv7Q0jqC32e3LPdzjl2W39rZimC3JE0zQ4%2BaO%2FWXhGOTdyNknxbxrtyaZ5dzjBOGtu3puqXTSU7xNEOBr%2FH6gmsgZng%2BrhugV0LvrQ0y64PVnubm8wKkqUlfxNJgBzMRE32%2B0PFbXf7%2BWE8ncEK0ZxDP26yOYNbMGIIeJhxVeL5E7nlUiGYLHp%2BcCC5ErEYvIHAmZaelQm0Q1BoK4dD4Wq8eb981d1qfNjBKU4U1zexdcSprlT0s%2FBC6F0vexC%2BWyweCA8BSaaQtdwI9ZRQZ6yZxrAMciddLXGp6tQSdYc8pjf5O9sgc0Qqz6DRR6DPpQLPKSr3le1fHEE2s%2FAkTbpL9XM6eY8H5z60SkHIUFt7FmezHGZNCYwPpHHVoF2iToHzImhMYRvZNjRG5iaTbIwvDTbBN%2FQxDtwFForZsGMdkvux7aPlmZGBdaRUqoO6fv%2BS89zVVqeOnMUO4W1mcqnXhg4zQvPx6PBwQRj3fZK9PJRigpH2l4LxPGrpCFGaB0l3KqrjdYPZBzEYbFUh5%2FlXMXrFChnRurzSJ%2Fw%2BRD4yzR4Q5kYdv1IUOVgoBNYAABiWYcZ%2F5Slu7jDDxPi8BjqkAZXsNDJWPGLgdzsOEAzZbzkamWn6nuyM4NthC6ArZjsF%2BIrPwXMj74cncTftW5jSUwaCdLzrylmaI8dSCOBVIY%2FaJx4jru%2BWgZ6jPFVkbVpWPmx6mlSmMavHCIiFx193dXM1sA4GSMH4z1PK1GY2smJDSiSbfxg%2BaKDDU3%2BYMlqbZU278CtE05n8u9dmCha8UnQe3gorPRhR7MBC%2FKpMewvFVQQw&X-Amz-Signature=8ba7eb7ec12e633939aed82de24cbea1933baa380fa3bcf5b3c79262dfbfe6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OZW7MK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD95eVDTGvjHqoNhuKbSXjTrCkK8hlxX6v0CbGMPma7wIhAORJiw1e%2FQGW3ELPqzp9BIoqA8hm8HCcXaOmiu9HSOL9KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6TljjYUHXCgBVr4Mq3APeSDXxTm88gD5kQLKh4INmuAc88afECMRli5Z1vnrxleJW1gv7Q0jqC32e3LPdzjl2W39rZimC3JE0zQ4%2BaO%2FWXhGOTdyNknxbxrtyaZ5dzjBOGtu3puqXTSU7xNEOBr%2FH6gmsgZng%2BrhugV0LvrQ0y64PVnubm8wKkqUlfxNJgBzMRE32%2B0PFbXf7%2BWE8ncEK0ZxDP26yOYNbMGIIeJhxVeL5E7nlUiGYLHp%2BcCC5ErEYvIHAmZaelQm0Q1BoK4dD4Wq8eb981d1qfNjBKU4U1zexdcSprlT0s%2FBC6F0vexC%2BWyweCA8BSaaQtdwI9ZRQZ6yZxrAMciddLXGp6tQSdYc8pjf5O9sgc0Qqz6DRR6DPpQLPKSr3le1fHEE2s%2FAkTbpL9XM6eY8H5z60SkHIUFt7FmezHGZNCYwPpHHVoF2iToHzImhMYRvZNjRG5iaTbIwvDTbBN%2FQxDtwFForZsGMdkvux7aPlmZGBdaRUqoO6fv%2BS89zVVqeOnMUO4W1mcqnXhg4zQvPx6PBwQRj3fZK9PJRigpH2l4LxPGrpCFGaB0l3KqrjdYPZBzEYbFUh5%2FlXMXrFChnRurzSJ%2Fw%2BRD4yzR4Q5kYdv1IUOVgoBNYAABiWYcZ%2F5Slu7jDDxPi8BjqkAZXsNDJWPGLgdzsOEAzZbzkamWn6nuyM4NthC6ArZjsF%2BIrPwXMj74cncTftW5jSUwaCdLzrylmaI8dSCOBVIY%2FaJx4jru%2BWgZ6jPFVkbVpWPmx6mlSmMavHCIiFx193dXM1sA4GSMH4z1PK1GY2smJDSiSbfxg%2BaKDDU3%2BYMlqbZU278CtE05n8u9dmCha8UnQe3gorPRhR7MBC%2FKpMewvFVQQw&X-Amz-Signature=825c162ff501a8b98efc2ec38181ecde0aa0f811be8bf372d4f6eb2ed3ce1fe4&X-Amz-SignedHeaders=host&x-id=GetObject)
