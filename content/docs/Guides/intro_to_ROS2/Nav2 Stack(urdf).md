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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QKUC5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD37hJkRyx%2B9x2Q9U9R8rsXPoC1AN4fdv1Qit3M7zuRzwIhAPdqpY7z7ldMtMFfJNf5oHCpuuCEWqwtgYJmk5Ejmk%2FIKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp0bYdKA9iDn5bgIcq3AMXv%2FMkMYgyvlckP8p9WjTxRK%2BJHVvdGlwAFti85iVlXtBxvg%2FG392g73ffx2M9cIv5f9zHNIIH7g93nxlTaYub4RI2E2gefe%2Fp%2FE5%2FywoITEgsktuuB68yq89rGgoU8%2FGZTpaR5apJAWSAeC%2F6CLJMI9Lak7jbQCSKq4F9AboHMT3HOx9AMyNcwCaOsI0mCX3f47bMKByc4IXfDB7fhI4%2B5kCANaUUEz4UyTscLdvEd9LBYP2T0OWEpWOlrStmI9ZjCgh90ycsI7YEVsi3Tz7prJor7vDQe1QLYKByvcVOB%2BQFaSdnjrGYKMpxjVYC6Hvxun60%2BShDpIyOFHDzgJ4zfE%2FVzqjGxzwaHFKe8XFW4vNLyFF6Er4%2BuXrNUKydtTG2kElh4nMw%2FloHfA58G8%2BCv%2Bfxd9L6HmfsvfcmDzmbTfN9EGXjkzBgLcdkMg2%2BqHturN9dBrCnkm%2FEmsuFuEoCQ6sXG%2BHoR6eSRMrtaqWc%2B0RgOJdLKNuhtebR7kRAOAjK044XM59CL3SMmWkk5khiufP6QZrQbn3RTf3vMhvuwMaPmLpU6Raihd23gIlNCjwtYSNW3Mep4t7dcsqaC9RR%2FDsj%2FsSoI1BKPbmsrPphwkkXpkcoIuNiZkMyVzCUpJTABjqkAb8Zhi9tAsdoqPMzfEDzfy54JAtj7gjmMX80YBXziDEQCN2CpzhuC9HaM3gmqpyd%2FB%2FMbRhCHqQsfpUqeUulcplcd14snNvUeT3du3j2Ticr3Qwyc8x8u7ed6hSsYoVtb9X4FRM7jGo51sbYQ68XD0c9ntvXhLLTOPFLSlcTLVJSYyVLsaFJMjSXQGufKXnxBbkh7fMLwVWg4dp2j%2BKayAutUAqp&X-Amz-Signature=afed6df168f2e9178eccf7ac669085703794f67eab97a16f0cd2ba52efe23dda&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QKUC5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD37hJkRyx%2B9x2Q9U9R8rsXPoC1AN4fdv1Qit3M7zuRzwIhAPdqpY7z7ldMtMFfJNf5oHCpuuCEWqwtgYJmk5Ejmk%2FIKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp0bYdKA9iDn5bgIcq3AMXv%2FMkMYgyvlckP8p9WjTxRK%2BJHVvdGlwAFti85iVlXtBxvg%2FG392g73ffx2M9cIv5f9zHNIIH7g93nxlTaYub4RI2E2gefe%2Fp%2FE5%2FywoITEgsktuuB68yq89rGgoU8%2FGZTpaR5apJAWSAeC%2F6CLJMI9Lak7jbQCSKq4F9AboHMT3HOx9AMyNcwCaOsI0mCX3f47bMKByc4IXfDB7fhI4%2B5kCANaUUEz4UyTscLdvEd9LBYP2T0OWEpWOlrStmI9ZjCgh90ycsI7YEVsi3Tz7prJor7vDQe1QLYKByvcVOB%2BQFaSdnjrGYKMpxjVYC6Hvxun60%2BShDpIyOFHDzgJ4zfE%2FVzqjGxzwaHFKe8XFW4vNLyFF6Er4%2BuXrNUKydtTG2kElh4nMw%2FloHfA58G8%2BCv%2Bfxd9L6HmfsvfcmDzmbTfN9EGXjkzBgLcdkMg2%2BqHturN9dBrCnkm%2FEmsuFuEoCQ6sXG%2BHoR6eSRMrtaqWc%2B0RgOJdLKNuhtebR7kRAOAjK044XM59CL3SMmWkk5khiufP6QZrQbn3RTf3vMhvuwMaPmLpU6Raihd23gIlNCjwtYSNW3Mep4t7dcsqaC9RR%2FDsj%2FsSoI1BKPbmsrPphwkkXpkcoIuNiZkMyVzCUpJTABjqkAb8Zhi9tAsdoqPMzfEDzfy54JAtj7gjmMX80YBXziDEQCN2CpzhuC9HaM3gmqpyd%2FB%2FMbRhCHqQsfpUqeUulcplcd14snNvUeT3du3j2Ticr3Qwyc8x8u7ed6hSsYoVtb9X4FRM7jGo51sbYQ68XD0c9ntvXhLLTOPFLSlcTLVJSYyVLsaFJMjSXQGufKXnxBbkh7fMLwVWg4dp2j%2BKayAutUAqp&X-Amz-Signature=1ff10d91b5c4cdffcfeaff42df1a694e7be291b415b26b3b1e14f4e6eb92d04f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QKUC5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD37hJkRyx%2B9x2Q9U9R8rsXPoC1AN4fdv1Qit3M7zuRzwIhAPdqpY7z7ldMtMFfJNf5oHCpuuCEWqwtgYJmk5Ejmk%2FIKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp0bYdKA9iDn5bgIcq3AMXv%2FMkMYgyvlckP8p9WjTxRK%2BJHVvdGlwAFti85iVlXtBxvg%2FG392g73ffx2M9cIv5f9zHNIIH7g93nxlTaYub4RI2E2gefe%2Fp%2FE5%2FywoITEgsktuuB68yq89rGgoU8%2FGZTpaR5apJAWSAeC%2F6CLJMI9Lak7jbQCSKq4F9AboHMT3HOx9AMyNcwCaOsI0mCX3f47bMKByc4IXfDB7fhI4%2B5kCANaUUEz4UyTscLdvEd9LBYP2T0OWEpWOlrStmI9ZjCgh90ycsI7YEVsi3Tz7prJor7vDQe1QLYKByvcVOB%2BQFaSdnjrGYKMpxjVYC6Hvxun60%2BShDpIyOFHDzgJ4zfE%2FVzqjGxzwaHFKe8XFW4vNLyFF6Er4%2BuXrNUKydtTG2kElh4nMw%2FloHfA58G8%2BCv%2Bfxd9L6HmfsvfcmDzmbTfN9EGXjkzBgLcdkMg2%2BqHturN9dBrCnkm%2FEmsuFuEoCQ6sXG%2BHoR6eSRMrtaqWc%2B0RgOJdLKNuhtebR7kRAOAjK044XM59CL3SMmWkk5khiufP6QZrQbn3RTf3vMhvuwMaPmLpU6Raihd23gIlNCjwtYSNW3Mep4t7dcsqaC9RR%2FDsj%2FsSoI1BKPbmsrPphwkkXpkcoIuNiZkMyVzCUpJTABjqkAb8Zhi9tAsdoqPMzfEDzfy54JAtj7gjmMX80YBXziDEQCN2CpzhuC9HaM3gmqpyd%2FB%2FMbRhCHqQsfpUqeUulcplcd14snNvUeT3du3j2Ticr3Qwyc8x8u7ed6hSsYoVtb9X4FRM7jGo51sbYQ68XD0c9ntvXhLLTOPFLSlcTLVJSYyVLsaFJMjSXQGufKXnxBbkh7fMLwVWg4dp2j%2BKayAutUAqp&X-Amz-Signature=f78ee164287f147f7430031f47babe15d5a000b8a3b0ff1c24f386cb489628e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QKUC5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD37hJkRyx%2B9x2Q9U9R8rsXPoC1AN4fdv1Qit3M7zuRzwIhAPdqpY7z7ldMtMFfJNf5oHCpuuCEWqwtgYJmk5Ejmk%2FIKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp0bYdKA9iDn5bgIcq3AMXv%2FMkMYgyvlckP8p9WjTxRK%2BJHVvdGlwAFti85iVlXtBxvg%2FG392g73ffx2M9cIv5f9zHNIIH7g93nxlTaYub4RI2E2gefe%2Fp%2FE5%2FywoITEgsktuuB68yq89rGgoU8%2FGZTpaR5apJAWSAeC%2F6CLJMI9Lak7jbQCSKq4F9AboHMT3HOx9AMyNcwCaOsI0mCX3f47bMKByc4IXfDB7fhI4%2B5kCANaUUEz4UyTscLdvEd9LBYP2T0OWEpWOlrStmI9ZjCgh90ycsI7YEVsi3Tz7prJor7vDQe1QLYKByvcVOB%2BQFaSdnjrGYKMpxjVYC6Hvxun60%2BShDpIyOFHDzgJ4zfE%2FVzqjGxzwaHFKe8XFW4vNLyFF6Er4%2BuXrNUKydtTG2kElh4nMw%2FloHfA58G8%2BCv%2Bfxd9L6HmfsvfcmDzmbTfN9EGXjkzBgLcdkMg2%2BqHturN9dBrCnkm%2FEmsuFuEoCQ6sXG%2BHoR6eSRMrtaqWc%2B0RgOJdLKNuhtebR7kRAOAjK044XM59CL3SMmWkk5khiufP6QZrQbn3RTf3vMhvuwMaPmLpU6Raihd23gIlNCjwtYSNW3Mep4t7dcsqaC9RR%2FDsj%2FsSoI1BKPbmsrPphwkkXpkcoIuNiZkMyVzCUpJTABjqkAb8Zhi9tAsdoqPMzfEDzfy54JAtj7gjmMX80YBXziDEQCN2CpzhuC9HaM3gmqpyd%2FB%2FMbRhCHqQsfpUqeUulcplcd14snNvUeT3du3j2Ticr3Qwyc8x8u7ed6hSsYoVtb9X4FRM7jGo51sbYQ68XD0c9ntvXhLLTOPFLSlcTLVJSYyVLsaFJMjSXQGufKXnxBbkh7fMLwVWg4dp2j%2BKayAutUAqp&X-Amz-Signature=43d4e85379edb3f04e9ac5af8ce62b37d8ffe856961fb95f5f9b3dcece8b8f30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QKUC5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD37hJkRyx%2B9x2Q9U9R8rsXPoC1AN4fdv1Qit3M7zuRzwIhAPdqpY7z7ldMtMFfJNf5oHCpuuCEWqwtgYJmk5Ejmk%2FIKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp0bYdKA9iDn5bgIcq3AMXv%2FMkMYgyvlckP8p9WjTxRK%2BJHVvdGlwAFti85iVlXtBxvg%2FG392g73ffx2M9cIv5f9zHNIIH7g93nxlTaYub4RI2E2gefe%2Fp%2FE5%2FywoITEgsktuuB68yq89rGgoU8%2FGZTpaR5apJAWSAeC%2F6CLJMI9Lak7jbQCSKq4F9AboHMT3HOx9AMyNcwCaOsI0mCX3f47bMKByc4IXfDB7fhI4%2B5kCANaUUEz4UyTscLdvEd9LBYP2T0OWEpWOlrStmI9ZjCgh90ycsI7YEVsi3Tz7prJor7vDQe1QLYKByvcVOB%2BQFaSdnjrGYKMpxjVYC6Hvxun60%2BShDpIyOFHDzgJ4zfE%2FVzqjGxzwaHFKe8XFW4vNLyFF6Er4%2BuXrNUKydtTG2kElh4nMw%2FloHfA58G8%2BCv%2Bfxd9L6HmfsvfcmDzmbTfN9EGXjkzBgLcdkMg2%2BqHturN9dBrCnkm%2FEmsuFuEoCQ6sXG%2BHoR6eSRMrtaqWc%2B0RgOJdLKNuhtebR7kRAOAjK044XM59CL3SMmWkk5khiufP6QZrQbn3RTf3vMhvuwMaPmLpU6Raihd23gIlNCjwtYSNW3Mep4t7dcsqaC9RR%2FDsj%2FsSoI1BKPbmsrPphwkkXpkcoIuNiZkMyVzCUpJTABjqkAb8Zhi9tAsdoqPMzfEDzfy54JAtj7gjmMX80YBXziDEQCN2CpzhuC9HaM3gmqpyd%2FB%2FMbRhCHqQsfpUqeUulcplcd14snNvUeT3du3j2Ticr3Qwyc8x8u7ed6hSsYoVtb9X4FRM7jGo51sbYQ68XD0c9ntvXhLLTOPFLSlcTLVJSYyVLsaFJMjSXQGufKXnxBbkh7fMLwVWg4dp2j%2BKayAutUAqp&X-Amz-Signature=4c6b8a000f789fc1548c12008270835fd6ddc31ceb475392b26c0bfff19167e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3QKUC5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD37hJkRyx%2B9x2Q9U9R8rsXPoC1AN4fdv1Qit3M7zuRzwIhAPdqpY7z7ldMtMFfJNf5oHCpuuCEWqwtgYJmk5Ejmk%2FIKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp0bYdKA9iDn5bgIcq3AMXv%2FMkMYgyvlckP8p9WjTxRK%2BJHVvdGlwAFti85iVlXtBxvg%2FG392g73ffx2M9cIv5f9zHNIIH7g93nxlTaYub4RI2E2gefe%2Fp%2FE5%2FywoITEgsktuuB68yq89rGgoU8%2FGZTpaR5apJAWSAeC%2F6CLJMI9Lak7jbQCSKq4F9AboHMT3HOx9AMyNcwCaOsI0mCX3f47bMKByc4IXfDB7fhI4%2B5kCANaUUEz4UyTscLdvEd9LBYP2T0OWEpWOlrStmI9ZjCgh90ycsI7YEVsi3Tz7prJor7vDQe1QLYKByvcVOB%2BQFaSdnjrGYKMpxjVYC6Hvxun60%2BShDpIyOFHDzgJ4zfE%2FVzqjGxzwaHFKe8XFW4vNLyFF6Er4%2BuXrNUKydtTG2kElh4nMw%2FloHfA58G8%2BCv%2Bfxd9L6HmfsvfcmDzmbTfN9EGXjkzBgLcdkMg2%2BqHturN9dBrCnkm%2FEmsuFuEoCQ6sXG%2BHoR6eSRMrtaqWc%2B0RgOJdLKNuhtebR7kRAOAjK044XM59CL3SMmWkk5khiufP6QZrQbn3RTf3vMhvuwMaPmLpU6Raihd23gIlNCjwtYSNW3Mep4t7dcsqaC9RR%2FDsj%2FsSoI1BKPbmsrPphwkkXpkcoIuNiZkMyVzCUpJTABjqkAb8Zhi9tAsdoqPMzfEDzfy54JAtj7gjmMX80YBXziDEQCN2CpzhuC9HaM3gmqpyd%2FB%2FMbRhCHqQsfpUqeUulcplcd14snNvUeT3du3j2Ticr3Qwyc8x8u7ed6hSsYoVtb9X4FRM7jGo51sbYQ68XD0c9ntvXhLLTOPFLSlcTLVJSYyVLsaFJMjSXQGufKXnxBbkh7fMLwVWg4dp2j%2BKayAutUAqp&X-Amz-Signature=17f682e16df3d011c1f470639c947880c9c9a938f80d86ebb772111fa2fd46f4&X-Amz-SignedHeaders=host&x-id=GetObject)
