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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=5ec34415d5929d808c06010539c3adb82fbd723636dd22ba1f01c93fb79247a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=1a14064adc2285fbc9181eb79b3f9ff44ea955669a529f171a850b807b55f6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=d7c224ec1d23c32e4e6abbeb28efc73dabf1675462a1db403fe8a3c7fff27d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=7c4aabadabbb1e953513c520d5de7751725a7a1391a6a37e30a1e8812ac48909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=0378b2792fa267a256e85bcd6eafe2880e8814b00e82614629449b7a431bd7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMCH7KL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtnhHduVHH9qHx6tw3B015yZWrkaGzOR6jCLPQgUOhqAiEAqmkCIn4ebKdlfVurIg2jn1qZXVjjTjOSjON85YZ55JEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt%2BcFqJ685aXkiaESrcA4NeGoQixeWrboS1P7CzfcXHTm5tvbkwxAmzo0vXHXvQDr5w9wruzgln41MNheTqePpS9%2FCF4JxCwc4lwrB0qEERU6V20GLdDITWBSGy97yTj51NHKWdTkp7qaKojxNpx5JU9Zv35ZFFamqPFh87LQR1DKADMtUCY%2FpaYaUqPT1oWgjY9UnYowlRHm3JQ40wI2OukD%2FMd32p2JzFFoFDLIMNm8FhV7A1rIEnKqHej7QnmnqPDsqG4ac%2B%2Fv%2F0bnfDk72xolShEfmwu7QKhDQ6iH4QsMO70osfNLMJX1QN4PDD8c6U2X6B2JTZAqaNHsdLFCcvPRCwrMijrYIt6w7zw7pgsNpT230t0Ljpk%2BvliQ%2Bx5oa3PKM6EIzXveOazCkvUDRj%2Fl%2BNu6NefAm3v5lHd5siOn2wXX7TN%2FL5ec5nzZSaa64xNKEvIpEqIAXHBq%2FDMZ9igIjuS8IrAY1owAydXy5EGebBctwhgOqOpgRHbgR7D4ADmA0eH1xGNO1BHw1biKHu5J5cS4TqV29RRRR4WmiWaTE5g3k%2BMHdgOlYcATPtQzq4P7wnsZTbJpOS8au4xFkm3w5hodMx6ZjkS1Q7mCu2lMv3RNX5wTyN8OlFVMu8CibO771fMryHGnnHMOaY8cMGOqUBDo8xgOnmdarc30eNCMJxaBEhNoQvwGDzBA6XCwed5cYREc42cadwrfpcvR45Cj3JwFRwwEJH9rZT17DB8yyMrskFyrZ5e62fyuPCnSRc60f1GuCaW%2BsZ7EScajGWmokJrhO7Dz9c1qfeUYeSonu4560JxgavKkv54RyrkzgSMjIbHF%2BgW4UdRXZt9TUvA7Iv3Vimv3gGrm6F9qxDFi18a5299nZ8&X-Amz-Signature=cdbe220784150cb0b9fdfd609ad1c7aa48c279bca512e2fa3ca2f330afe22448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
