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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWVCJCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBf6BmNI7Cmxps92wL%2Fu3Yg9vOsnrulMoE7IRKjol7O3AiBaICyyZazBJTPGc%2BqUoi2BhwiDEQpgOUMUoAZVmbxJDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasNu1%2B0ij3zqVV7fKtwDW%2Fdj4SI9E0mXGU9FgPmqZ51V3cQoY5qthx9BuLF6N7uEbe6jcJeHtqA42Ie%2Btfzww3mUq8KKbzPGSAel%2F%2FDp7%2FQraJajD79ioNVsxozYKevveatZ%2F2XnHVxfWZSGsz17o4198b8ugHmmIf%2BCCkuMG1QoEfuCxcSgUo37SC3lz5ERp7mjd6W%2F6YWie%2F8nyQvoEf6Yv%2BFKAn1cYo2DCC95TsKBj7P4%2BAHORSve9sCij5WlA5v1KXrkoglixxzNu5LWQldMOUu01icOx3TZbU0eme1vBeOex91Zh2JY%2BgRTeju9KaLyzy0u%2BTleHdodnZ43t%2B6ZaztMls3kAUooiw%2FsV4ube2zXP5qevLUASAd0P2iFKF0u6agrvIoiaNOH%2BODKNvnFHSgYEQikzIlCucmm5KxQATiFTYN3EdK0B6G63hi%2FqdjkMvaJ%2BXXQurNiNUv%2BsIjcOtyj7dePP1mPViOogJNOXi7QezEidp760OZ4%2BS23h2Wb6lNwIC5APHLa2s8L6E8ugHyeEfvhm%2BmKP03Vr6aKzDzgaWY%2BPruq06yMBrEpyX9GqzAr7xFb8CaRuM14H0dYfWRzESb24l8B7dwObt1oi3Pg7NXTykuCKxDYBUPkXMZD1ELxEMA%2BKz0w6PnqvwY6pgEu9LWtLu5UGNrHJ4N7dSlhIzz1kgnJSALxEeJyJY47BhSTkXFQntN4QbVTI%2Bvjy%2BcMuEBdxVQ88gC6LpWr8WCXfU0%2FoZ6n3huDTiIkRfFz%2FqdUu0yG8LmaKH2MmYfmVX6zUehPLS8E4ofzvCa%2Fq2ho2JcvYxKqCETZ0%2BSH4UM4u1GpoBPcAQ6odUpIjfpqbv5gh5kd55myXxyIDx0CTaka7qE9hfgV&X-Amz-Signature=0dd66607df7313b180a385b08bf361c3049256f0c90a16da833fbd554d1e23a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWVCJCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBf6BmNI7Cmxps92wL%2Fu3Yg9vOsnrulMoE7IRKjol7O3AiBaICyyZazBJTPGc%2BqUoi2BhwiDEQpgOUMUoAZVmbxJDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasNu1%2B0ij3zqVV7fKtwDW%2Fdj4SI9E0mXGU9FgPmqZ51V3cQoY5qthx9BuLF6N7uEbe6jcJeHtqA42Ie%2Btfzww3mUq8KKbzPGSAel%2F%2FDp7%2FQraJajD79ioNVsxozYKevveatZ%2F2XnHVxfWZSGsz17o4198b8ugHmmIf%2BCCkuMG1QoEfuCxcSgUo37SC3lz5ERp7mjd6W%2F6YWie%2F8nyQvoEf6Yv%2BFKAn1cYo2DCC95TsKBj7P4%2BAHORSve9sCij5WlA5v1KXrkoglixxzNu5LWQldMOUu01icOx3TZbU0eme1vBeOex91Zh2JY%2BgRTeju9KaLyzy0u%2BTleHdodnZ43t%2B6ZaztMls3kAUooiw%2FsV4ube2zXP5qevLUASAd0P2iFKF0u6agrvIoiaNOH%2BODKNvnFHSgYEQikzIlCucmm5KxQATiFTYN3EdK0B6G63hi%2FqdjkMvaJ%2BXXQurNiNUv%2BsIjcOtyj7dePP1mPViOogJNOXi7QezEidp760OZ4%2BS23h2Wb6lNwIC5APHLa2s8L6E8ugHyeEfvhm%2BmKP03Vr6aKzDzgaWY%2BPruq06yMBrEpyX9GqzAr7xFb8CaRuM14H0dYfWRzESb24l8B7dwObt1oi3Pg7NXTykuCKxDYBUPkXMZD1ELxEMA%2BKz0w6PnqvwY6pgEu9LWtLu5UGNrHJ4N7dSlhIzz1kgnJSALxEeJyJY47BhSTkXFQntN4QbVTI%2Bvjy%2BcMuEBdxVQ88gC6LpWr8WCXfU0%2FoZ6n3huDTiIkRfFz%2FqdUu0yG8LmaKH2MmYfmVX6zUehPLS8E4ofzvCa%2Fq2ho2JcvYxKqCETZ0%2BSH4UM4u1GpoBPcAQ6odUpIjfpqbv5gh5kd55myXxyIDx0CTaka7qE9hfgV&X-Amz-Signature=a2c6f192c127b5d50fd6624ada60c17e10885d30cd9b4e4c3fa9515607a2873d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWVCJCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBf6BmNI7Cmxps92wL%2Fu3Yg9vOsnrulMoE7IRKjol7O3AiBaICyyZazBJTPGc%2BqUoi2BhwiDEQpgOUMUoAZVmbxJDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasNu1%2B0ij3zqVV7fKtwDW%2Fdj4SI9E0mXGU9FgPmqZ51V3cQoY5qthx9BuLF6N7uEbe6jcJeHtqA42Ie%2Btfzww3mUq8KKbzPGSAel%2F%2FDp7%2FQraJajD79ioNVsxozYKevveatZ%2F2XnHVxfWZSGsz17o4198b8ugHmmIf%2BCCkuMG1QoEfuCxcSgUo37SC3lz5ERp7mjd6W%2F6YWie%2F8nyQvoEf6Yv%2BFKAn1cYo2DCC95TsKBj7P4%2BAHORSve9sCij5WlA5v1KXrkoglixxzNu5LWQldMOUu01icOx3TZbU0eme1vBeOex91Zh2JY%2BgRTeju9KaLyzy0u%2BTleHdodnZ43t%2B6ZaztMls3kAUooiw%2FsV4ube2zXP5qevLUASAd0P2iFKF0u6agrvIoiaNOH%2BODKNvnFHSgYEQikzIlCucmm5KxQATiFTYN3EdK0B6G63hi%2FqdjkMvaJ%2BXXQurNiNUv%2BsIjcOtyj7dePP1mPViOogJNOXi7QezEidp760OZ4%2BS23h2Wb6lNwIC5APHLa2s8L6E8ugHyeEfvhm%2BmKP03Vr6aKzDzgaWY%2BPruq06yMBrEpyX9GqzAr7xFb8CaRuM14H0dYfWRzESb24l8B7dwObt1oi3Pg7NXTykuCKxDYBUPkXMZD1ELxEMA%2BKz0w6PnqvwY6pgEu9LWtLu5UGNrHJ4N7dSlhIzz1kgnJSALxEeJyJY47BhSTkXFQntN4QbVTI%2Bvjy%2BcMuEBdxVQ88gC6LpWr8WCXfU0%2FoZ6n3huDTiIkRfFz%2FqdUu0yG8LmaKH2MmYfmVX6zUehPLS8E4ofzvCa%2Fq2ho2JcvYxKqCETZ0%2BSH4UM4u1GpoBPcAQ6odUpIjfpqbv5gh5kd55myXxyIDx0CTaka7qE9hfgV&X-Amz-Signature=e644873d86a558583cca6a011baa3f4811e1acb78365f52fa330153fb5a9bba2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWVCJCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBf6BmNI7Cmxps92wL%2Fu3Yg9vOsnrulMoE7IRKjol7O3AiBaICyyZazBJTPGc%2BqUoi2BhwiDEQpgOUMUoAZVmbxJDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasNu1%2B0ij3zqVV7fKtwDW%2Fdj4SI9E0mXGU9FgPmqZ51V3cQoY5qthx9BuLF6N7uEbe6jcJeHtqA42Ie%2Btfzww3mUq8KKbzPGSAel%2F%2FDp7%2FQraJajD79ioNVsxozYKevveatZ%2F2XnHVxfWZSGsz17o4198b8ugHmmIf%2BCCkuMG1QoEfuCxcSgUo37SC3lz5ERp7mjd6W%2F6YWie%2F8nyQvoEf6Yv%2BFKAn1cYo2DCC95TsKBj7P4%2BAHORSve9sCij5WlA5v1KXrkoglixxzNu5LWQldMOUu01icOx3TZbU0eme1vBeOex91Zh2JY%2BgRTeju9KaLyzy0u%2BTleHdodnZ43t%2B6ZaztMls3kAUooiw%2FsV4ube2zXP5qevLUASAd0P2iFKF0u6agrvIoiaNOH%2BODKNvnFHSgYEQikzIlCucmm5KxQATiFTYN3EdK0B6G63hi%2FqdjkMvaJ%2BXXQurNiNUv%2BsIjcOtyj7dePP1mPViOogJNOXi7QezEidp760OZ4%2BS23h2Wb6lNwIC5APHLa2s8L6E8ugHyeEfvhm%2BmKP03Vr6aKzDzgaWY%2BPruq06yMBrEpyX9GqzAr7xFb8CaRuM14H0dYfWRzESb24l8B7dwObt1oi3Pg7NXTykuCKxDYBUPkXMZD1ELxEMA%2BKz0w6PnqvwY6pgEu9LWtLu5UGNrHJ4N7dSlhIzz1kgnJSALxEeJyJY47BhSTkXFQntN4QbVTI%2Bvjy%2BcMuEBdxVQ88gC6LpWr8WCXfU0%2FoZ6n3huDTiIkRfFz%2FqdUu0yG8LmaKH2MmYfmVX6zUehPLS8E4ofzvCa%2Fq2ho2JcvYxKqCETZ0%2BSH4UM4u1GpoBPcAQ6odUpIjfpqbv5gh5kd55myXxyIDx0CTaka7qE9hfgV&X-Amz-Signature=e211cdfd083b2408a6897d91a7f5ddbc3554575d73b57858cabbe2823bc4f328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWVCJCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBf6BmNI7Cmxps92wL%2Fu3Yg9vOsnrulMoE7IRKjol7O3AiBaICyyZazBJTPGc%2BqUoi2BhwiDEQpgOUMUoAZVmbxJDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasNu1%2B0ij3zqVV7fKtwDW%2Fdj4SI9E0mXGU9FgPmqZ51V3cQoY5qthx9BuLF6N7uEbe6jcJeHtqA42Ie%2Btfzww3mUq8KKbzPGSAel%2F%2FDp7%2FQraJajD79ioNVsxozYKevveatZ%2F2XnHVxfWZSGsz17o4198b8ugHmmIf%2BCCkuMG1QoEfuCxcSgUo37SC3lz5ERp7mjd6W%2F6YWie%2F8nyQvoEf6Yv%2BFKAn1cYo2DCC95TsKBj7P4%2BAHORSve9sCij5WlA5v1KXrkoglixxzNu5LWQldMOUu01icOx3TZbU0eme1vBeOex91Zh2JY%2BgRTeju9KaLyzy0u%2BTleHdodnZ43t%2B6ZaztMls3kAUooiw%2FsV4ube2zXP5qevLUASAd0P2iFKF0u6agrvIoiaNOH%2BODKNvnFHSgYEQikzIlCucmm5KxQATiFTYN3EdK0B6G63hi%2FqdjkMvaJ%2BXXQurNiNUv%2BsIjcOtyj7dePP1mPViOogJNOXi7QezEidp760OZ4%2BS23h2Wb6lNwIC5APHLa2s8L6E8ugHyeEfvhm%2BmKP03Vr6aKzDzgaWY%2BPruq06yMBrEpyX9GqzAr7xFb8CaRuM14H0dYfWRzESb24l8B7dwObt1oi3Pg7NXTykuCKxDYBUPkXMZD1ELxEMA%2BKz0w6PnqvwY6pgEu9LWtLu5UGNrHJ4N7dSlhIzz1kgnJSALxEeJyJY47BhSTkXFQntN4QbVTI%2Bvjy%2BcMuEBdxVQ88gC6LpWr8WCXfU0%2FoZ6n3huDTiIkRfFz%2FqdUu0yG8LmaKH2MmYfmVX6zUehPLS8E4ofzvCa%2Fq2ho2JcvYxKqCETZ0%2BSH4UM4u1GpoBPcAQ6odUpIjfpqbv5gh5kd55myXxyIDx0CTaka7qE9hfgV&X-Amz-Signature=62aba71af8daa3ed8ac80ed90ef11ea1c3667c5a5cdae9dbfa47135b5d81f3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWVCJCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBf6BmNI7Cmxps92wL%2Fu3Yg9vOsnrulMoE7IRKjol7O3AiBaICyyZazBJTPGc%2BqUoi2BhwiDEQpgOUMUoAZVmbxJDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMasNu1%2B0ij3zqVV7fKtwDW%2Fdj4SI9E0mXGU9FgPmqZ51V3cQoY5qthx9BuLF6N7uEbe6jcJeHtqA42Ie%2Btfzww3mUq8KKbzPGSAel%2F%2FDp7%2FQraJajD79ioNVsxozYKevveatZ%2F2XnHVxfWZSGsz17o4198b8ugHmmIf%2BCCkuMG1QoEfuCxcSgUo37SC3lz5ERp7mjd6W%2F6YWie%2F8nyQvoEf6Yv%2BFKAn1cYo2DCC95TsKBj7P4%2BAHORSve9sCij5WlA5v1KXrkoglixxzNu5LWQldMOUu01icOx3TZbU0eme1vBeOex91Zh2JY%2BgRTeju9KaLyzy0u%2BTleHdodnZ43t%2B6ZaztMls3kAUooiw%2FsV4ube2zXP5qevLUASAd0P2iFKF0u6agrvIoiaNOH%2BODKNvnFHSgYEQikzIlCucmm5KxQATiFTYN3EdK0B6G63hi%2FqdjkMvaJ%2BXXQurNiNUv%2BsIjcOtyj7dePP1mPViOogJNOXi7QezEidp760OZ4%2BS23h2Wb6lNwIC5APHLa2s8L6E8ugHyeEfvhm%2BmKP03Vr6aKzDzgaWY%2BPruq06yMBrEpyX9GqzAr7xFb8CaRuM14H0dYfWRzESb24l8B7dwObt1oi3Pg7NXTykuCKxDYBUPkXMZD1ELxEMA%2BKz0w6PnqvwY6pgEu9LWtLu5UGNrHJ4N7dSlhIzz1kgnJSALxEeJyJY47BhSTkXFQntN4QbVTI%2Bvjy%2BcMuEBdxVQ88gC6LpWr8WCXfU0%2FoZ6n3huDTiIkRfFz%2FqdUu0yG8LmaKH2MmYfmVX6zUehPLS8E4ofzvCa%2Fq2ho2JcvYxKqCETZ0%2BSH4UM4u1GpoBPcAQ6odUpIjfpqbv5gh5kd55myXxyIDx0CTaka7qE9hfgV&X-Amz-Signature=97fadd93a1e2b702ff05a3c61aa31223ab6ac6997d91742e9b36d4ef0097ef8d&X-Amz-SignedHeaders=host&x-id=GetObject)
