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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4KAATW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUsi2iiLK8GExiW3Qv4l2WuRfb2Ol7d9x1eaLiekjSgIgeVE2%2FzExsTYdUM48ztgtp9X3%2FlfZps%2BrTsUj%2BYAQNGMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANaX337qitdFnvzircA8WD42wbqYFyCra2Js88vjAVc1ojTmgPk8TtYD2yehDerRoGY7Z1RnCG22Qv5pw0zTGbLbTEt1N0MoT%2FkkLbvpVgJHIWnnMjmSz%2FSAEGFPAlGlRO04zsPkkXwrOarxrK3qgYX3T4ALZ6z%2FhfVhO4GvX%2BSMh6dyqX2rsqlTtpTukA%2FZt0GLmBqu1Ql4qnEDD5zILg4LlZtTaaxtc87hiORCle2qhxj2uUUGKYEmeTw1%2BEieusW81%2FHJ8mAEt0ZmhFM47F8Z4r5l65QNCNhcKHaTVehawbE2XxSgg2LmmwgoEnwk1VlxI9%2FgqfL%2F%2FwARgNoCx5Wahmla16zmaMhX0INlkAtChKiMHi6jDlNb23oH9zHHNFMRP1o9SaoiaJ3EhTPBti0zxM%2FpB0YZj2nCqmdK7is5VUNcBRSBEH2uPePwvqYG1iebGJpMwxxcf02A5hTatAZRRrcxXp75Gmz0I2ZtPHvGgagJjDRyEZmkwFCw7j54kt7XL4u39RgwfZakl3TwvGxYtuEkeC3Q2Nu6MzoFXP3sAGF0INd9pIOCVRAtTzBHj9Z0k%2B0IjRGvDbROevl0bfXkWEkOZ%2BwFLmAox9ze8k18vurmgBdnaiBwamx7QLihWeTE%2FzeOpnBclCMM%2FF6rwGOqUBeFA%2BCCUVsbWbg0G7Oo%2BNxsav5a0OwfHuiRfuoxrVqHjFVzSAGU%2F%2F2EHBBJLzyisrvtKtRR1haNDvnaYokO3QU8l8RUvighaaJr4UVccrH2fdxPMWqGOKtcTdO2%2BS7HAgJXorYlzucQNblYER6VuVUv4qYLh7E1nXyXlX%2Bk%2B94PY6k%2BW37cyeIMzDIuF7B3txjyH8HCG35zJbwjn8t0gfIgZ9BhBk&X-Amz-Signature=f005da62d0dde9f4c5f2b33b57a87e63c7793a4f59496421fd21f3faf978fe48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4KAATW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUsi2iiLK8GExiW3Qv4l2WuRfb2Ol7d9x1eaLiekjSgIgeVE2%2FzExsTYdUM48ztgtp9X3%2FlfZps%2BrTsUj%2BYAQNGMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANaX337qitdFnvzircA8WD42wbqYFyCra2Js88vjAVc1ojTmgPk8TtYD2yehDerRoGY7Z1RnCG22Qv5pw0zTGbLbTEt1N0MoT%2FkkLbvpVgJHIWnnMjmSz%2FSAEGFPAlGlRO04zsPkkXwrOarxrK3qgYX3T4ALZ6z%2FhfVhO4GvX%2BSMh6dyqX2rsqlTtpTukA%2FZt0GLmBqu1Ql4qnEDD5zILg4LlZtTaaxtc87hiORCle2qhxj2uUUGKYEmeTw1%2BEieusW81%2FHJ8mAEt0ZmhFM47F8Z4r5l65QNCNhcKHaTVehawbE2XxSgg2LmmwgoEnwk1VlxI9%2FgqfL%2F%2FwARgNoCx5Wahmla16zmaMhX0INlkAtChKiMHi6jDlNb23oH9zHHNFMRP1o9SaoiaJ3EhTPBti0zxM%2FpB0YZj2nCqmdK7is5VUNcBRSBEH2uPePwvqYG1iebGJpMwxxcf02A5hTatAZRRrcxXp75Gmz0I2ZtPHvGgagJjDRyEZmkwFCw7j54kt7XL4u39RgwfZakl3TwvGxYtuEkeC3Q2Nu6MzoFXP3sAGF0INd9pIOCVRAtTzBHj9Z0k%2B0IjRGvDbROevl0bfXkWEkOZ%2BwFLmAox9ze8k18vurmgBdnaiBwamx7QLihWeTE%2FzeOpnBclCMM%2FF6rwGOqUBeFA%2BCCUVsbWbg0G7Oo%2BNxsav5a0OwfHuiRfuoxrVqHjFVzSAGU%2F%2F2EHBBJLzyisrvtKtRR1haNDvnaYokO3QU8l8RUvighaaJr4UVccrH2fdxPMWqGOKtcTdO2%2BS7HAgJXorYlzucQNblYER6VuVUv4qYLh7E1nXyXlX%2Bk%2B94PY6k%2BW37cyeIMzDIuF7B3txjyH8HCG35zJbwjn8t0gfIgZ9BhBk&X-Amz-Signature=f1cb5b87aa5d7dec4049a35d8052d41a07bbabcc449b63fa3f115a94c9fb3d66&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4KAATW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUsi2iiLK8GExiW3Qv4l2WuRfb2Ol7d9x1eaLiekjSgIgeVE2%2FzExsTYdUM48ztgtp9X3%2FlfZps%2BrTsUj%2BYAQNGMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANaX337qitdFnvzircA8WD42wbqYFyCra2Js88vjAVc1ojTmgPk8TtYD2yehDerRoGY7Z1RnCG22Qv5pw0zTGbLbTEt1N0MoT%2FkkLbvpVgJHIWnnMjmSz%2FSAEGFPAlGlRO04zsPkkXwrOarxrK3qgYX3T4ALZ6z%2FhfVhO4GvX%2BSMh6dyqX2rsqlTtpTukA%2FZt0GLmBqu1Ql4qnEDD5zILg4LlZtTaaxtc87hiORCle2qhxj2uUUGKYEmeTw1%2BEieusW81%2FHJ8mAEt0ZmhFM47F8Z4r5l65QNCNhcKHaTVehawbE2XxSgg2LmmwgoEnwk1VlxI9%2FgqfL%2F%2FwARgNoCx5Wahmla16zmaMhX0INlkAtChKiMHi6jDlNb23oH9zHHNFMRP1o9SaoiaJ3EhTPBti0zxM%2FpB0YZj2nCqmdK7is5VUNcBRSBEH2uPePwvqYG1iebGJpMwxxcf02A5hTatAZRRrcxXp75Gmz0I2ZtPHvGgagJjDRyEZmkwFCw7j54kt7XL4u39RgwfZakl3TwvGxYtuEkeC3Q2Nu6MzoFXP3sAGF0INd9pIOCVRAtTzBHj9Z0k%2B0IjRGvDbROevl0bfXkWEkOZ%2BwFLmAox9ze8k18vurmgBdnaiBwamx7QLihWeTE%2FzeOpnBclCMM%2FF6rwGOqUBeFA%2BCCUVsbWbg0G7Oo%2BNxsav5a0OwfHuiRfuoxrVqHjFVzSAGU%2F%2F2EHBBJLzyisrvtKtRR1haNDvnaYokO3QU8l8RUvighaaJr4UVccrH2fdxPMWqGOKtcTdO2%2BS7HAgJXorYlzucQNblYER6VuVUv4qYLh7E1nXyXlX%2Bk%2B94PY6k%2BW37cyeIMzDIuF7B3txjyH8HCG35zJbwjn8t0gfIgZ9BhBk&X-Amz-Signature=24d9785250083882743e8207830af0bc2135576669d52a979d107821ff65408c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4KAATW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUsi2iiLK8GExiW3Qv4l2WuRfb2Ol7d9x1eaLiekjSgIgeVE2%2FzExsTYdUM48ztgtp9X3%2FlfZps%2BrTsUj%2BYAQNGMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANaX337qitdFnvzircA8WD42wbqYFyCra2Js88vjAVc1ojTmgPk8TtYD2yehDerRoGY7Z1RnCG22Qv5pw0zTGbLbTEt1N0MoT%2FkkLbvpVgJHIWnnMjmSz%2FSAEGFPAlGlRO04zsPkkXwrOarxrK3qgYX3T4ALZ6z%2FhfVhO4GvX%2BSMh6dyqX2rsqlTtpTukA%2FZt0GLmBqu1Ql4qnEDD5zILg4LlZtTaaxtc87hiORCle2qhxj2uUUGKYEmeTw1%2BEieusW81%2FHJ8mAEt0ZmhFM47F8Z4r5l65QNCNhcKHaTVehawbE2XxSgg2LmmwgoEnwk1VlxI9%2FgqfL%2F%2FwARgNoCx5Wahmla16zmaMhX0INlkAtChKiMHi6jDlNb23oH9zHHNFMRP1o9SaoiaJ3EhTPBti0zxM%2FpB0YZj2nCqmdK7is5VUNcBRSBEH2uPePwvqYG1iebGJpMwxxcf02A5hTatAZRRrcxXp75Gmz0I2ZtPHvGgagJjDRyEZmkwFCw7j54kt7XL4u39RgwfZakl3TwvGxYtuEkeC3Q2Nu6MzoFXP3sAGF0INd9pIOCVRAtTzBHj9Z0k%2B0IjRGvDbROevl0bfXkWEkOZ%2BwFLmAox9ze8k18vurmgBdnaiBwamx7QLihWeTE%2FzeOpnBclCMM%2FF6rwGOqUBeFA%2BCCUVsbWbg0G7Oo%2BNxsav5a0OwfHuiRfuoxrVqHjFVzSAGU%2F%2F2EHBBJLzyisrvtKtRR1haNDvnaYokO3QU8l8RUvighaaJr4UVccrH2fdxPMWqGOKtcTdO2%2BS7HAgJXorYlzucQNblYER6VuVUv4qYLh7E1nXyXlX%2Bk%2B94PY6k%2BW37cyeIMzDIuF7B3txjyH8HCG35zJbwjn8t0gfIgZ9BhBk&X-Amz-Signature=67e50d164172a8299cdd8cdcaa852a735ef37a5ec80a7a535e38b29d64157670&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4KAATW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUsi2iiLK8GExiW3Qv4l2WuRfb2Ol7d9x1eaLiekjSgIgeVE2%2FzExsTYdUM48ztgtp9X3%2FlfZps%2BrTsUj%2BYAQNGMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANaX337qitdFnvzircA8WD42wbqYFyCra2Js88vjAVc1ojTmgPk8TtYD2yehDerRoGY7Z1RnCG22Qv5pw0zTGbLbTEt1N0MoT%2FkkLbvpVgJHIWnnMjmSz%2FSAEGFPAlGlRO04zsPkkXwrOarxrK3qgYX3T4ALZ6z%2FhfVhO4GvX%2BSMh6dyqX2rsqlTtpTukA%2FZt0GLmBqu1Ql4qnEDD5zILg4LlZtTaaxtc87hiORCle2qhxj2uUUGKYEmeTw1%2BEieusW81%2FHJ8mAEt0ZmhFM47F8Z4r5l65QNCNhcKHaTVehawbE2XxSgg2LmmwgoEnwk1VlxI9%2FgqfL%2F%2FwARgNoCx5Wahmla16zmaMhX0INlkAtChKiMHi6jDlNb23oH9zHHNFMRP1o9SaoiaJ3EhTPBti0zxM%2FpB0YZj2nCqmdK7is5VUNcBRSBEH2uPePwvqYG1iebGJpMwxxcf02A5hTatAZRRrcxXp75Gmz0I2ZtPHvGgagJjDRyEZmkwFCw7j54kt7XL4u39RgwfZakl3TwvGxYtuEkeC3Q2Nu6MzoFXP3sAGF0INd9pIOCVRAtTzBHj9Z0k%2B0IjRGvDbROevl0bfXkWEkOZ%2BwFLmAox9ze8k18vurmgBdnaiBwamx7QLihWeTE%2FzeOpnBclCMM%2FF6rwGOqUBeFA%2BCCUVsbWbg0G7Oo%2BNxsav5a0OwfHuiRfuoxrVqHjFVzSAGU%2F%2F2EHBBJLzyisrvtKtRR1haNDvnaYokO3QU8l8RUvighaaJr4UVccrH2fdxPMWqGOKtcTdO2%2BS7HAgJXorYlzucQNblYER6VuVUv4qYLh7E1nXyXlX%2Bk%2B94PY6k%2BW37cyeIMzDIuF7B3txjyH8HCG35zJbwjn8t0gfIgZ9BhBk&X-Amz-Signature=6dc15403978c242449c89877b078b898f92ff0379bb508b9a540f844415fdcf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4KAATW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUsi2iiLK8GExiW3Qv4l2WuRfb2Ol7d9x1eaLiekjSgIgeVE2%2FzExsTYdUM48ztgtp9X3%2FlfZps%2BrTsUj%2BYAQNGMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANaX337qitdFnvzircA8WD42wbqYFyCra2Js88vjAVc1ojTmgPk8TtYD2yehDerRoGY7Z1RnCG22Qv5pw0zTGbLbTEt1N0MoT%2FkkLbvpVgJHIWnnMjmSz%2FSAEGFPAlGlRO04zsPkkXwrOarxrK3qgYX3T4ALZ6z%2FhfVhO4GvX%2BSMh6dyqX2rsqlTtpTukA%2FZt0GLmBqu1Ql4qnEDD5zILg4LlZtTaaxtc87hiORCle2qhxj2uUUGKYEmeTw1%2BEieusW81%2FHJ8mAEt0ZmhFM47F8Z4r5l65QNCNhcKHaTVehawbE2XxSgg2LmmwgoEnwk1VlxI9%2FgqfL%2F%2FwARgNoCx5Wahmla16zmaMhX0INlkAtChKiMHi6jDlNb23oH9zHHNFMRP1o9SaoiaJ3EhTPBti0zxM%2FpB0YZj2nCqmdK7is5VUNcBRSBEH2uPePwvqYG1iebGJpMwxxcf02A5hTatAZRRrcxXp75Gmz0I2ZtPHvGgagJjDRyEZmkwFCw7j54kt7XL4u39RgwfZakl3TwvGxYtuEkeC3Q2Nu6MzoFXP3sAGF0INd9pIOCVRAtTzBHj9Z0k%2B0IjRGvDbROevl0bfXkWEkOZ%2BwFLmAox9ze8k18vurmgBdnaiBwamx7QLihWeTE%2FzeOpnBclCMM%2FF6rwGOqUBeFA%2BCCUVsbWbg0G7Oo%2BNxsav5a0OwfHuiRfuoxrVqHjFVzSAGU%2F%2F2EHBBJLzyisrvtKtRR1haNDvnaYokO3QU8l8RUvighaaJr4UVccrH2fdxPMWqGOKtcTdO2%2BS7HAgJXorYlzucQNblYER6VuVUv4qYLh7E1nXyXlX%2Bk%2B94PY6k%2BW37cyeIMzDIuF7B3txjyH8HCG35zJbwjn8t0gfIgZ9BhBk&X-Amz-Signature=ef09ab0f6614b174d93c23146edc8a7e09d389310f9c009ea3269867b0c25828&X-Amz-SignedHeaders=host&x-id=GetObject)
