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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5EDY6B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFh5wZdWFz1XK8tNXtivO0hcFBz%2BGn6NEs0H1MlAaKNcAiBqid%2BY%2FUjk3cYk8pyEhDXGgh07g2%2FQ2zpzYJhNOvg1ECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMORP13V%2FjUbhJ8xkyKtwDfcA8ikB3dZB6Ws7qf%2B%2F%2BWyez6RzDJ7rSFPqmqVGGS00ISRLwtyn0OZ%2BpiY2YRSI9%2FzCLfoHqnEFAwcL4CZPaHzH%2F72Bhvqf%2BDo2lzB3lQt5tfWF2QMv0K8G7acID7ijabZKb7zPwG1ly3%2ByPlpxOjpF%2FONquSBtCSSpfUOh%2Bp5AkG5tsA1UxZ%2FSzdYY%2B1bHnHMgvp7kEtfxT9N%2BTUMmqdKL0ny8yJ%2F1GMFcKuT1srpQeBdUCXGYclKwD7sVSCU%2BaUwo2XxxFP4jZs1YGXAneAVyJAMcyd00WlmZpNT6zKPSDGZadxkY5DkiaHv8KBR5YKO5rvrvtWdKviHeggvTcGTSFweMD2IVtc%2BhaAKSA4SByJCwNKDiZ5aoLAyY7PMj4AhfREm5drPZJ9FJZLXpoCjJYcb8IKMT%2BUFiTfxE5xMv5txmDEdsXdMSG%2FE1QY%2FluyUhYcQyvPKW85599PzyXiFkTBKXEcUlYQYEOV533vvRpji0V7a7QAnj%2B4pBoRfvfbdhDabpN59G4OV9DnhXcZgrFW1%2FkA7zhwKhyF96lnkEoYq3FBuZ%2BMD%2BhdF6bG6RmVw%2FRPC8IjLkxbSwwX8KQ1Bw8wwtCwgj%2Bis%2B%2FzAkJOaLSDhfjCY%2BnCTGmPTswsN%2BcvwY6pgGDiz7%2FhMRiUD9zA545VI3lo8%2FEC0ilJFMCC6E0k%2F75f3xHxJSlptS5z9Mva%2BF5eCrSZ2dd7pNsylPsXAEda38PAfYudZbrCWJMdDiTPC45ijuaRgG1XodvoeEHThUzcpzAzE9aYErhicRzF9r8vUKhBQLe%2FlaX0sos3IFdtg%2FZA2ogAS6rUe%2F1T%2Bz6fXA5JTGId9T8u1RESWHtwWVepo0uqplOnvvg&X-Amz-Signature=976ef18107ceaa675df0728ae0e667ab4061989a78085abfe90c8c04dcbf9f34&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5EDY6B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFh5wZdWFz1XK8tNXtivO0hcFBz%2BGn6NEs0H1MlAaKNcAiBqid%2BY%2FUjk3cYk8pyEhDXGgh07g2%2FQ2zpzYJhNOvg1ECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMORP13V%2FjUbhJ8xkyKtwDfcA8ikB3dZB6Ws7qf%2B%2F%2BWyez6RzDJ7rSFPqmqVGGS00ISRLwtyn0OZ%2BpiY2YRSI9%2FzCLfoHqnEFAwcL4CZPaHzH%2F72Bhvqf%2BDo2lzB3lQt5tfWF2QMv0K8G7acID7ijabZKb7zPwG1ly3%2ByPlpxOjpF%2FONquSBtCSSpfUOh%2Bp5AkG5tsA1UxZ%2FSzdYY%2B1bHnHMgvp7kEtfxT9N%2BTUMmqdKL0ny8yJ%2F1GMFcKuT1srpQeBdUCXGYclKwD7sVSCU%2BaUwo2XxxFP4jZs1YGXAneAVyJAMcyd00WlmZpNT6zKPSDGZadxkY5DkiaHv8KBR5YKO5rvrvtWdKviHeggvTcGTSFweMD2IVtc%2BhaAKSA4SByJCwNKDiZ5aoLAyY7PMj4AhfREm5drPZJ9FJZLXpoCjJYcb8IKMT%2BUFiTfxE5xMv5txmDEdsXdMSG%2FE1QY%2FluyUhYcQyvPKW85599PzyXiFkTBKXEcUlYQYEOV533vvRpji0V7a7QAnj%2B4pBoRfvfbdhDabpN59G4OV9DnhXcZgrFW1%2FkA7zhwKhyF96lnkEoYq3FBuZ%2BMD%2BhdF6bG6RmVw%2FRPC8IjLkxbSwwX8KQ1Bw8wwtCwgj%2Bis%2B%2FzAkJOaLSDhfjCY%2BnCTGmPTswsN%2BcvwY6pgGDiz7%2FhMRiUD9zA545VI3lo8%2FEC0ilJFMCC6E0k%2F75f3xHxJSlptS5z9Mva%2BF5eCrSZ2dd7pNsylPsXAEda38PAfYudZbrCWJMdDiTPC45ijuaRgG1XodvoeEHThUzcpzAzE9aYErhicRzF9r8vUKhBQLe%2FlaX0sos3IFdtg%2FZA2ogAS6rUe%2F1T%2Bz6fXA5JTGId9T8u1RESWHtwWVepo0uqplOnvvg&X-Amz-Signature=c1e22b62b5721899d29398bf53ca4de91abe970e33359ff9b18de7cc3b5a5c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5EDY6B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFh5wZdWFz1XK8tNXtivO0hcFBz%2BGn6NEs0H1MlAaKNcAiBqid%2BY%2FUjk3cYk8pyEhDXGgh07g2%2FQ2zpzYJhNOvg1ECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMORP13V%2FjUbhJ8xkyKtwDfcA8ikB3dZB6Ws7qf%2B%2F%2BWyez6RzDJ7rSFPqmqVGGS00ISRLwtyn0OZ%2BpiY2YRSI9%2FzCLfoHqnEFAwcL4CZPaHzH%2F72Bhvqf%2BDo2lzB3lQt5tfWF2QMv0K8G7acID7ijabZKb7zPwG1ly3%2ByPlpxOjpF%2FONquSBtCSSpfUOh%2Bp5AkG5tsA1UxZ%2FSzdYY%2B1bHnHMgvp7kEtfxT9N%2BTUMmqdKL0ny8yJ%2F1GMFcKuT1srpQeBdUCXGYclKwD7sVSCU%2BaUwo2XxxFP4jZs1YGXAneAVyJAMcyd00WlmZpNT6zKPSDGZadxkY5DkiaHv8KBR5YKO5rvrvtWdKviHeggvTcGTSFweMD2IVtc%2BhaAKSA4SByJCwNKDiZ5aoLAyY7PMj4AhfREm5drPZJ9FJZLXpoCjJYcb8IKMT%2BUFiTfxE5xMv5txmDEdsXdMSG%2FE1QY%2FluyUhYcQyvPKW85599PzyXiFkTBKXEcUlYQYEOV533vvRpji0V7a7QAnj%2B4pBoRfvfbdhDabpN59G4OV9DnhXcZgrFW1%2FkA7zhwKhyF96lnkEoYq3FBuZ%2BMD%2BhdF6bG6RmVw%2FRPC8IjLkxbSwwX8KQ1Bw8wwtCwgj%2Bis%2B%2FzAkJOaLSDhfjCY%2BnCTGmPTswsN%2BcvwY6pgGDiz7%2FhMRiUD9zA545VI3lo8%2FEC0ilJFMCC6E0k%2F75f3xHxJSlptS5z9Mva%2BF5eCrSZ2dd7pNsylPsXAEda38PAfYudZbrCWJMdDiTPC45ijuaRgG1XodvoeEHThUzcpzAzE9aYErhicRzF9r8vUKhBQLe%2FlaX0sos3IFdtg%2FZA2ogAS6rUe%2F1T%2Bz6fXA5JTGId9T8u1RESWHtwWVepo0uqplOnvvg&X-Amz-Signature=742c643eba832c6ff42f9eab29c4cc467f4fcb17f6851a7fcd81434a8d73b1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5EDY6B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFh5wZdWFz1XK8tNXtivO0hcFBz%2BGn6NEs0H1MlAaKNcAiBqid%2BY%2FUjk3cYk8pyEhDXGgh07g2%2FQ2zpzYJhNOvg1ECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMORP13V%2FjUbhJ8xkyKtwDfcA8ikB3dZB6Ws7qf%2B%2F%2BWyez6RzDJ7rSFPqmqVGGS00ISRLwtyn0OZ%2BpiY2YRSI9%2FzCLfoHqnEFAwcL4CZPaHzH%2F72Bhvqf%2BDo2lzB3lQt5tfWF2QMv0K8G7acID7ijabZKb7zPwG1ly3%2ByPlpxOjpF%2FONquSBtCSSpfUOh%2Bp5AkG5tsA1UxZ%2FSzdYY%2B1bHnHMgvp7kEtfxT9N%2BTUMmqdKL0ny8yJ%2F1GMFcKuT1srpQeBdUCXGYclKwD7sVSCU%2BaUwo2XxxFP4jZs1YGXAneAVyJAMcyd00WlmZpNT6zKPSDGZadxkY5DkiaHv8KBR5YKO5rvrvtWdKviHeggvTcGTSFweMD2IVtc%2BhaAKSA4SByJCwNKDiZ5aoLAyY7PMj4AhfREm5drPZJ9FJZLXpoCjJYcb8IKMT%2BUFiTfxE5xMv5txmDEdsXdMSG%2FE1QY%2FluyUhYcQyvPKW85599PzyXiFkTBKXEcUlYQYEOV533vvRpji0V7a7QAnj%2B4pBoRfvfbdhDabpN59G4OV9DnhXcZgrFW1%2FkA7zhwKhyF96lnkEoYq3FBuZ%2BMD%2BhdF6bG6RmVw%2FRPC8IjLkxbSwwX8KQ1Bw8wwtCwgj%2Bis%2B%2FzAkJOaLSDhfjCY%2BnCTGmPTswsN%2BcvwY6pgGDiz7%2FhMRiUD9zA545VI3lo8%2FEC0ilJFMCC6E0k%2F75f3xHxJSlptS5z9Mva%2BF5eCrSZ2dd7pNsylPsXAEda38PAfYudZbrCWJMdDiTPC45ijuaRgG1XodvoeEHThUzcpzAzE9aYErhicRzF9r8vUKhBQLe%2FlaX0sos3IFdtg%2FZA2ogAS6rUe%2F1T%2Bz6fXA5JTGId9T8u1RESWHtwWVepo0uqplOnvvg&X-Amz-Signature=aec8dac42d5213693db7ddf3b81fc7da25cf5f1a0557c1c5904b11740ed16486&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5EDY6B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFh5wZdWFz1XK8tNXtivO0hcFBz%2BGn6NEs0H1MlAaKNcAiBqid%2BY%2FUjk3cYk8pyEhDXGgh07g2%2FQ2zpzYJhNOvg1ECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMORP13V%2FjUbhJ8xkyKtwDfcA8ikB3dZB6Ws7qf%2B%2F%2BWyez6RzDJ7rSFPqmqVGGS00ISRLwtyn0OZ%2BpiY2YRSI9%2FzCLfoHqnEFAwcL4CZPaHzH%2F72Bhvqf%2BDo2lzB3lQt5tfWF2QMv0K8G7acID7ijabZKb7zPwG1ly3%2ByPlpxOjpF%2FONquSBtCSSpfUOh%2Bp5AkG5tsA1UxZ%2FSzdYY%2B1bHnHMgvp7kEtfxT9N%2BTUMmqdKL0ny8yJ%2F1GMFcKuT1srpQeBdUCXGYclKwD7sVSCU%2BaUwo2XxxFP4jZs1YGXAneAVyJAMcyd00WlmZpNT6zKPSDGZadxkY5DkiaHv8KBR5YKO5rvrvtWdKviHeggvTcGTSFweMD2IVtc%2BhaAKSA4SByJCwNKDiZ5aoLAyY7PMj4AhfREm5drPZJ9FJZLXpoCjJYcb8IKMT%2BUFiTfxE5xMv5txmDEdsXdMSG%2FE1QY%2FluyUhYcQyvPKW85599PzyXiFkTBKXEcUlYQYEOV533vvRpji0V7a7QAnj%2B4pBoRfvfbdhDabpN59G4OV9DnhXcZgrFW1%2FkA7zhwKhyF96lnkEoYq3FBuZ%2BMD%2BhdF6bG6RmVw%2FRPC8IjLkxbSwwX8KQ1Bw8wwtCwgj%2Bis%2B%2FzAkJOaLSDhfjCY%2BnCTGmPTswsN%2BcvwY6pgGDiz7%2FhMRiUD9zA545VI3lo8%2FEC0ilJFMCC6E0k%2F75f3xHxJSlptS5z9Mva%2BF5eCrSZ2dd7pNsylPsXAEda38PAfYudZbrCWJMdDiTPC45ijuaRgG1XodvoeEHThUzcpzAzE9aYErhicRzF9r8vUKhBQLe%2FlaX0sos3IFdtg%2FZA2ogAS6rUe%2F1T%2Bz6fXA5JTGId9T8u1RESWHtwWVepo0uqplOnvvg&X-Amz-Signature=3ebeb01272bb555f262404033fc15f9d02dad5511ac2c2b876ea55ef7b57a8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5EDY6B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFh5wZdWFz1XK8tNXtivO0hcFBz%2BGn6NEs0H1MlAaKNcAiBqid%2BY%2FUjk3cYk8pyEhDXGgh07g2%2FQ2zpzYJhNOvg1ECr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMORP13V%2FjUbhJ8xkyKtwDfcA8ikB3dZB6Ws7qf%2B%2F%2BWyez6RzDJ7rSFPqmqVGGS00ISRLwtyn0OZ%2BpiY2YRSI9%2FzCLfoHqnEFAwcL4CZPaHzH%2F72Bhvqf%2BDo2lzB3lQt5tfWF2QMv0K8G7acID7ijabZKb7zPwG1ly3%2ByPlpxOjpF%2FONquSBtCSSpfUOh%2Bp5AkG5tsA1UxZ%2FSzdYY%2B1bHnHMgvp7kEtfxT9N%2BTUMmqdKL0ny8yJ%2F1GMFcKuT1srpQeBdUCXGYclKwD7sVSCU%2BaUwo2XxxFP4jZs1YGXAneAVyJAMcyd00WlmZpNT6zKPSDGZadxkY5DkiaHv8KBR5YKO5rvrvtWdKviHeggvTcGTSFweMD2IVtc%2BhaAKSA4SByJCwNKDiZ5aoLAyY7PMj4AhfREm5drPZJ9FJZLXpoCjJYcb8IKMT%2BUFiTfxE5xMv5txmDEdsXdMSG%2FE1QY%2FluyUhYcQyvPKW85599PzyXiFkTBKXEcUlYQYEOV533vvRpji0V7a7QAnj%2B4pBoRfvfbdhDabpN59G4OV9DnhXcZgrFW1%2FkA7zhwKhyF96lnkEoYq3FBuZ%2BMD%2BhdF6bG6RmVw%2FRPC8IjLkxbSwwX8KQ1Bw8wwtCwgj%2Bis%2B%2FzAkJOaLSDhfjCY%2BnCTGmPTswsN%2BcvwY6pgGDiz7%2FhMRiUD9zA545VI3lo8%2FEC0ilJFMCC6E0k%2F75f3xHxJSlptS5z9Mva%2BF5eCrSZ2dd7pNsylPsXAEda38PAfYudZbrCWJMdDiTPC45ijuaRgG1XodvoeEHThUzcpzAzE9aYErhicRzF9r8vUKhBQLe%2FlaX0sos3IFdtg%2FZA2ogAS6rUe%2F1T%2Bz6fXA5JTGId9T8u1RESWHtwWVepo0uqplOnvvg&X-Amz-Signature=cdec38eed666061da5c67433c84edface55ce9a4d7a2929ccacb0a0b5d060a26&X-Amz-SignedHeaders=host&x-id=GetObject)
