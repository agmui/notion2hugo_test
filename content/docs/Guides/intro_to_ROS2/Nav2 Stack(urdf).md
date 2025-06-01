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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UPKPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDj%2B6Xw2%2BLQQjozqGvS%2F5seOrIPxuYdmoNxoPUufEktKgIhAIJAWAUrRy6I6O3UswPHVV3OJf%2F9p2broWQK4DpnttnfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwggtiJOZ4SmXHP4q3AOp2Hkcam2fnb4mMz5zjmhY%2F%2BTGILStV3u43L4Af9KUHoTGxqWzszZe5oKVQOxX4ix60VwsKhvRoJgH4xA0im%2B%2BaP0GyCqlyFQ0BgsTmG0g6j7F9YBJ250vh4lcr4hn13WN6XSGcrNJ8xmL8GUNuM%2BItiQBsG0ZyGHuUcM%2FS4%2BHlTe%2F0HYErVL1YAyGJk4bVZZO64UBVCb41%2F7Tt16tjRW2653DmaDlm%2F19CAutQRzgByXwAxOpfQUECa6KssfjuV8KivSjzgtuoHiz57%2FaQPnjxrkGAS8A%2B0wcuI7De%2F7sHmvw%2FxuII7pTM6dR3d42CgumGOH0SS%2FDqSqeGaN27nQJbNeygJ6tfepGOcT%2F3%2BNTuXqS%2BuvwEqJKn%2BmmvS1k1dTvwOHBtphP213eGckOrItAmLC0QzYgQi9iWPZUd%2FAGL%2B107TcTWX7RTmlQ8ufcjzb9%2Bx9o%2F2dQ72f98D7%2FNMEYV60OCgv0T%2FNyjjbaEbcxiDvsp0ZbWapZPJGLIrl7Rr33D5AZ6Qr0%2FmtZlJtlCYcczDQoQ5LdN8mjoYSEX7DLhW9%2FGnBVj2xRU0lXR9qqyPBcGAPxIMPZfQfBo7eiRAeacJBhWZVRGv%2BQQM3lYE629DFo1VrSQbsyXja9ujDB3%2B7BBjqkAZFccKWkJGYAvCT4bAohtMFrUtDLVIyQbtIB%2FDFGgE%2FdqED00mt33hTIBYBMS1dlNjMJ1EasRITQErV%2FInKQ%2FrwWvcLMsp5p7C%2FVlw2y6Jg%2FCLvpx%2FYQM6t4dM47OUq52WE24q1UFMhh1d3zC7B8IjOxOm%2FHaO%2FCQzRuglDvioXnfqkqPpmnMPa%2BdWpkebrph9UZvNSrzaOTEjnzbz6FmEMi7Ao0&X-Amz-Signature=077f50edfd7692764c86627a7c3b275c8a86690bdd686ae440dad69514adc94f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UPKPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDj%2B6Xw2%2BLQQjozqGvS%2F5seOrIPxuYdmoNxoPUufEktKgIhAIJAWAUrRy6I6O3UswPHVV3OJf%2F9p2broWQK4DpnttnfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwggtiJOZ4SmXHP4q3AOp2Hkcam2fnb4mMz5zjmhY%2F%2BTGILStV3u43L4Af9KUHoTGxqWzszZe5oKVQOxX4ix60VwsKhvRoJgH4xA0im%2B%2BaP0GyCqlyFQ0BgsTmG0g6j7F9YBJ250vh4lcr4hn13WN6XSGcrNJ8xmL8GUNuM%2BItiQBsG0ZyGHuUcM%2FS4%2BHlTe%2F0HYErVL1YAyGJk4bVZZO64UBVCb41%2F7Tt16tjRW2653DmaDlm%2F19CAutQRzgByXwAxOpfQUECa6KssfjuV8KivSjzgtuoHiz57%2FaQPnjxrkGAS8A%2B0wcuI7De%2F7sHmvw%2FxuII7pTM6dR3d42CgumGOH0SS%2FDqSqeGaN27nQJbNeygJ6tfepGOcT%2F3%2BNTuXqS%2BuvwEqJKn%2BmmvS1k1dTvwOHBtphP213eGckOrItAmLC0QzYgQi9iWPZUd%2FAGL%2B107TcTWX7RTmlQ8ufcjzb9%2Bx9o%2F2dQ72f98D7%2FNMEYV60OCgv0T%2FNyjjbaEbcxiDvsp0ZbWapZPJGLIrl7Rr33D5AZ6Qr0%2FmtZlJtlCYcczDQoQ5LdN8mjoYSEX7DLhW9%2FGnBVj2xRU0lXR9qqyPBcGAPxIMPZfQfBo7eiRAeacJBhWZVRGv%2BQQM3lYE629DFo1VrSQbsyXja9ujDB3%2B7BBjqkAZFccKWkJGYAvCT4bAohtMFrUtDLVIyQbtIB%2FDFGgE%2FdqED00mt33hTIBYBMS1dlNjMJ1EasRITQErV%2FInKQ%2FrwWvcLMsp5p7C%2FVlw2y6Jg%2FCLvpx%2FYQM6t4dM47OUq52WE24q1UFMhh1d3zC7B8IjOxOm%2FHaO%2FCQzRuglDvioXnfqkqPpmnMPa%2BdWpkebrph9UZvNSrzaOTEjnzbz6FmEMi7Ao0&X-Amz-Signature=dae9e380ca255b558f1d01758020da92361921484f07027052e3e2a3f1b935cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UPKPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDj%2B6Xw2%2BLQQjozqGvS%2F5seOrIPxuYdmoNxoPUufEktKgIhAIJAWAUrRy6I6O3UswPHVV3OJf%2F9p2broWQK4DpnttnfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwggtiJOZ4SmXHP4q3AOp2Hkcam2fnb4mMz5zjmhY%2F%2BTGILStV3u43L4Af9KUHoTGxqWzszZe5oKVQOxX4ix60VwsKhvRoJgH4xA0im%2B%2BaP0GyCqlyFQ0BgsTmG0g6j7F9YBJ250vh4lcr4hn13WN6XSGcrNJ8xmL8GUNuM%2BItiQBsG0ZyGHuUcM%2FS4%2BHlTe%2F0HYErVL1YAyGJk4bVZZO64UBVCb41%2F7Tt16tjRW2653DmaDlm%2F19CAutQRzgByXwAxOpfQUECa6KssfjuV8KivSjzgtuoHiz57%2FaQPnjxrkGAS8A%2B0wcuI7De%2F7sHmvw%2FxuII7pTM6dR3d42CgumGOH0SS%2FDqSqeGaN27nQJbNeygJ6tfepGOcT%2F3%2BNTuXqS%2BuvwEqJKn%2BmmvS1k1dTvwOHBtphP213eGckOrItAmLC0QzYgQi9iWPZUd%2FAGL%2B107TcTWX7RTmlQ8ufcjzb9%2Bx9o%2F2dQ72f98D7%2FNMEYV60OCgv0T%2FNyjjbaEbcxiDvsp0ZbWapZPJGLIrl7Rr33D5AZ6Qr0%2FmtZlJtlCYcczDQoQ5LdN8mjoYSEX7DLhW9%2FGnBVj2xRU0lXR9qqyPBcGAPxIMPZfQfBo7eiRAeacJBhWZVRGv%2BQQM3lYE629DFo1VrSQbsyXja9ujDB3%2B7BBjqkAZFccKWkJGYAvCT4bAohtMFrUtDLVIyQbtIB%2FDFGgE%2FdqED00mt33hTIBYBMS1dlNjMJ1EasRITQErV%2FInKQ%2FrwWvcLMsp5p7C%2FVlw2y6Jg%2FCLvpx%2FYQM6t4dM47OUq52WE24q1UFMhh1d3zC7B8IjOxOm%2FHaO%2FCQzRuglDvioXnfqkqPpmnMPa%2BdWpkebrph9UZvNSrzaOTEjnzbz6FmEMi7Ao0&X-Amz-Signature=3b3f7ac0ac1942b8d39becf855a18fcfe5af679fedd2d943ac3294e87196dac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UPKPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDj%2B6Xw2%2BLQQjozqGvS%2F5seOrIPxuYdmoNxoPUufEktKgIhAIJAWAUrRy6I6O3UswPHVV3OJf%2F9p2broWQK4DpnttnfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwggtiJOZ4SmXHP4q3AOp2Hkcam2fnb4mMz5zjmhY%2F%2BTGILStV3u43L4Af9KUHoTGxqWzszZe5oKVQOxX4ix60VwsKhvRoJgH4xA0im%2B%2BaP0GyCqlyFQ0BgsTmG0g6j7F9YBJ250vh4lcr4hn13WN6XSGcrNJ8xmL8GUNuM%2BItiQBsG0ZyGHuUcM%2FS4%2BHlTe%2F0HYErVL1YAyGJk4bVZZO64UBVCb41%2F7Tt16tjRW2653DmaDlm%2F19CAutQRzgByXwAxOpfQUECa6KssfjuV8KivSjzgtuoHiz57%2FaQPnjxrkGAS8A%2B0wcuI7De%2F7sHmvw%2FxuII7pTM6dR3d42CgumGOH0SS%2FDqSqeGaN27nQJbNeygJ6tfepGOcT%2F3%2BNTuXqS%2BuvwEqJKn%2BmmvS1k1dTvwOHBtphP213eGckOrItAmLC0QzYgQi9iWPZUd%2FAGL%2B107TcTWX7RTmlQ8ufcjzb9%2Bx9o%2F2dQ72f98D7%2FNMEYV60OCgv0T%2FNyjjbaEbcxiDvsp0ZbWapZPJGLIrl7Rr33D5AZ6Qr0%2FmtZlJtlCYcczDQoQ5LdN8mjoYSEX7DLhW9%2FGnBVj2xRU0lXR9qqyPBcGAPxIMPZfQfBo7eiRAeacJBhWZVRGv%2BQQM3lYE629DFo1VrSQbsyXja9ujDB3%2B7BBjqkAZFccKWkJGYAvCT4bAohtMFrUtDLVIyQbtIB%2FDFGgE%2FdqED00mt33hTIBYBMS1dlNjMJ1EasRITQErV%2FInKQ%2FrwWvcLMsp5p7C%2FVlw2y6Jg%2FCLvpx%2FYQM6t4dM47OUq52WE24q1UFMhh1d3zC7B8IjOxOm%2FHaO%2FCQzRuglDvioXnfqkqPpmnMPa%2BdWpkebrph9UZvNSrzaOTEjnzbz6FmEMi7Ao0&X-Amz-Signature=20700ec2eb977db39eac76399af62436f8f2b2c1103a2860284071ee3bd56ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UPKPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDj%2B6Xw2%2BLQQjozqGvS%2F5seOrIPxuYdmoNxoPUufEktKgIhAIJAWAUrRy6I6O3UswPHVV3OJf%2F9p2broWQK4DpnttnfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwggtiJOZ4SmXHP4q3AOp2Hkcam2fnb4mMz5zjmhY%2F%2BTGILStV3u43L4Af9KUHoTGxqWzszZe5oKVQOxX4ix60VwsKhvRoJgH4xA0im%2B%2BaP0GyCqlyFQ0BgsTmG0g6j7F9YBJ250vh4lcr4hn13WN6XSGcrNJ8xmL8GUNuM%2BItiQBsG0ZyGHuUcM%2FS4%2BHlTe%2F0HYErVL1YAyGJk4bVZZO64UBVCb41%2F7Tt16tjRW2653DmaDlm%2F19CAutQRzgByXwAxOpfQUECa6KssfjuV8KivSjzgtuoHiz57%2FaQPnjxrkGAS8A%2B0wcuI7De%2F7sHmvw%2FxuII7pTM6dR3d42CgumGOH0SS%2FDqSqeGaN27nQJbNeygJ6tfepGOcT%2F3%2BNTuXqS%2BuvwEqJKn%2BmmvS1k1dTvwOHBtphP213eGckOrItAmLC0QzYgQi9iWPZUd%2FAGL%2B107TcTWX7RTmlQ8ufcjzb9%2Bx9o%2F2dQ72f98D7%2FNMEYV60OCgv0T%2FNyjjbaEbcxiDvsp0ZbWapZPJGLIrl7Rr33D5AZ6Qr0%2FmtZlJtlCYcczDQoQ5LdN8mjoYSEX7DLhW9%2FGnBVj2xRU0lXR9qqyPBcGAPxIMPZfQfBo7eiRAeacJBhWZVRGv%2BQQM3lYE629DFo1VrSQbsyXja9ujDB3%2B7BBjqkAZFccKWkJGYAvCT4bAohtMFrUtDLVIyQbtIB%2FDFGgE%2FdqED00mt33hTIBYBMS1dlNjMJ1EasRITQErV%2FInKQ%2FrwWvcLMsp5p7C%2FVlw2y6Jg%2FCLvpx%2FYQM6t4dM47OUq52WE24q1UFMhh1d3zC7B8IjOxOm%2FHaO%2FCQzRuglDvioXnfqkqPpmnMPa%2BdWpkebrph9UZvNSrzaOTEjnzbz6FmEMi7Ao0&X-Amz-Signature=d7f030754d0010d2b6fc35404e1e68bb5b35469963db98771818074abf254ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UPKPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDj%2B6Xw2%2BLQQjozqGvS%2F5seOrIPxuYdmoNxoPUufEktKgIhAIJAWAUrRy6I6O3UswPHVV3OJf%2F9p2broWQK4DpnttnfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEwggtiJOZ4SmXHP4q3AOp2Hkcam2fnb4mMz5zjmhY%2F%2BTGILStV3u43L4Af9KUHoTGxqWzszZe5oKVQOxX4ix60VwsKhvRoJgH4xA0im%2B%2BaP0GyCqlyFQ0BgsTmG0g6j7F9YBJ250vh4lcr4hn13WN6XSGcrNJ8xmL8GUNuM%2BItiQBsG0ZyGHuUcM%2FS4%2BHlTe%2F0HYErVL1YAyGJk4bVZZO64UBVCb41%2F7Tt16tjRW2653DmaDlm%2F19CAutQRzgByXwAxOpfQUECa6KssfjuV8KivSjzgtuoHiz57%2FaQPnjxrkGAS8A%2B0wcuI7De%2F7sHmvw%2FxuII7pTM6dR3d42CgumGOH0SS%2FDqSqeGaN27nQJbNeygJ6tfepGOcT%2F3%2BNTuXqS%2BuvwEqJKn%2BmmvS1k1dTvwOHBtphP213eGckOrItAmLC0QzYgQi9iWPZUd%2FAGL%2B107TcTWX7RTmlQ8ufcjzb9%2Bx9o%2F2dQ72f98D7%2FNMEYV60OCgv0T%2FNyjjbaEbcxiDvsp0ZbWapZPJGLIrl7Rr33D5AZ6Qr0%2FmtZlJtlCYcczDQoQ5LdN8mjoYSEX7DLhW9%2FGnBVj2xRU0lXR9qqyPBcGAPxIMPZfQfBo7eiRAeacJBhWZVRGv%2BQQM3lYE629DFo1VrSQbsyXja9ujDB3%2B7BBjqkAZFccKWkJGYAvCT4bAohtMFrUtDLVIyQbtIB%2FDFGgE%2FdqED00mt33hTIBYBMS1dlNjMJ1EasRITQErV%2FInKQ%2FrwWvcLMsp5p7C%2FVlw2y6Jg%2FCLvpx%2FYQM6t4dM47OUq52WE24q1UFMhh1d3zC7B8IjOxOm%2FHaO%2FCQzRuglDvioXnfqkqPpmnMPa%2BdWpkebrph9UZvNSrzaOTEjnzbz6FmEMi7Ao0&X-Amz-Signature=ecfd9eb60289099808b7c3623e767453176b852e9d29a3b6528d881558d8abaf&X-Amz-SignedHeaders=host&x-id=GetObject)
