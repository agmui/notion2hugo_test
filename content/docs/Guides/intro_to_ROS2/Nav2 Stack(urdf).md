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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3DXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHeTdvuf7X9XQ8ejYrFrUZP55ws7gVvPuK8cErgwluEEAiA5FGhDY84pzpG%2BtjoAqhSrLHAa1r9Kjcy428w%2FNN%2BemCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwTvEX37dUwKhG1ZKtwDxMaPPHTbdnURrP9SlLiJrGG%2Fz67PBz%2BDrqymm%2FD1yePiaSlBgZqurYvDPWp79n8%2FjQJDFbH30XOK4Sv1Hem43pBq5HXj3eB45sXHMooT8f9QdUmah%2B67UqbYvnj3Q2jxAQDM0uKy9vFeCJIfP3iKuINoGD2hqKhgkHFfTa1daKxVqi7PH6uhA4yetyyowgsjUebXCqzBc%2FbObi6qrziB2m0k%2FftWrvkfxyN6dYTry1ilYYSujwBsYsqskDpo4a1NLlE6V9rOO3VVxtcLkkE1kxeSpeFmFHuhMUU0NtCNuVI%2F%2BpIm99ZRXeR6Gz3DzMoE2WNOwEFYdf1bBlNXU6c%2Fv8gS%2B%2B52%2Baj7cZT1rT2Ye%2BeZeb3KGkAiXFF3fw%2BXESpgVxuFsP32GyVQS4cpTLe92ow18qUKDdmkLThddXWmrAy4yw7ZFHy%2BkaSUDxVwG3Q17PRC4Y70%2FOjS2WMHGVkuXYPzVXFs6hOhrNHnXXfTprOYv36623BanidzAf%2BokuTDibZj0U7ijjbF8jvZ20PXiiRjeFm6S%2FKzrfneGG7w2IAVYH0vOp53c1l68OgonzRFdM8O5TUdfnMjXuX0pQX7VM4wS1vbrOIZFF6ijhCLYi4dMn%2FknGvvDVDH09sw7vqWvQY6pgG6wcvdBBhD9jc9O8LQV8tCCJ7LZpcvKHnPnWWDZ9qNdWznxR6WNmsx6L2GB6TBoltwtuhWb%2FFIcBeXOh%2FqJ4anoY0ituHB5YozDVl5QPDYLicUcaHUWqPirhy6msi358azRrhnA8oRLS6jzDMulHfyHy65qljNcWvAq9Vqn%2B4eB5uPnWm%2BHntGHbssXVK%2BUTrYZQuyccfXRcra448cB6Jre4XPDoOf&X-Amz-Signature=43f98d78b41fe01a4c34b07a428c823e3da71a2f34a0fded70bcf583616782f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3DXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHeTdvuf7X9XQ8ejYrFrUZP55ws7gVvPuK8cErgwluEEAiA5FGhDY84pzpG%2BtjoAqhSrLHAa1r9Kjcy428w%2FNN%2BemCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwTvEX37dUwKhG1ZKtwDxMaPPHTbdnURrP9SlLiJrGG%2Fz67PBz%2BDrqymm%2FD1yePiaSlBgZqurYvDPWp79n8%2FjQJDFbH30XOK4Sv1Hem43pBq5HXj3eB45sXHMooT8f9QdUmah%2B67UqbYvnj3Q2jxAQDM0uKy9vFeCJIfP3iKuINoGD2hqKhgkHFfTa1daKxVqi7PH6uhA4yetyyowgsjUebXCqzBc%2FbObi6qrziB2m0k%2FftWrvkfxyN6dYTry1ilYYSujwBsYsqskDpo4a1NLlE6V9rOO3VVxtcLkkE1kxeSpeFmFHuhMUU0NtCNuVI%2F%2BpIm99ZRXeR6Gz3DzMoE2WNOwEFYdf1bBlNXU6c%2Fv8gS%2B%2B52%2Baj7cZT1rT2Ye%2BeZeb3KGkAiXFF3fw%2BXESpgVxuFsP32GyVQS4cpTLe92ow18qUKDdmkLThddXWmrAy4yw7ZFHy%2BkaSUDxVwG3Q17PRC4Y70%2FOjS2WMHGVkuXYPzVXFs6hOhrNHnXXfTprOYv36623BanidzAf%2BokuTDibZj0U7ijjbF8jvZ20PXiiRjeFm6S%2FKzrfneGG7w2IAVYH0vOp53c1l68OgonzRFdM8O5TUdfnMjXuX0pQX7VM4wS1vbrOIZFF6ijhCLYi4dMn%2FknGvvDVDH09sw7vqWvQY6pgG6wcvdBBhD9jc9O8LQV8tCCJ7LZpcvKHnPnWWDZ9qNdWznxR6WNmsx6L2GB6TBoltwtuhWb%2FFIcBeXOh%2FqJ4anoY0ituHB5YozDVl5QPDYLicUcaHUWqPirhy6msi358azRrhnA8oRLS6jzDMulHfyHy65qljNcWvAq9Vqn%2B4eB5uPnWm%2BHntGHbssXVK%2BUTrYZQuyccfXRcra448cB6Jre4XPDoOf&X-Amz-Signature=54e6122fc773b1e708a5cb6411034db8c3a46de2b9a51c867041a4c251110701&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3DXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHeTdvuf7X9XQ8ejYrFrUZP55ws7gVvPuK8cErgwluEEAiA5FGhDY84pzpG%2BtjoAqhSrLHAa1r9Kjcy428w%2FNN%2BemCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwTvEX37dUwKhG1ZKtwDxMaPPHTbdnURrP9SlLiJrGG%2Fz67PBz%2BDrqymm%2FD1yePiaSlBgZqurYvDPWp79n8%2FjQJDFbH30XOK4Sv1Hem43pBq5HXj3eB45sXHMooT8f9QdUmah%2B67UqbYvnj3Q2jxAQDM0uKy9vFeCJIfP3iKuINoGD2hqKhgkHFfTa1daKxVqi7PH6uhA4yetyyowgsjUebXCqzBc%2FbObi6qrziB2m0k%2FftWrvkfxyN6dYTry1ilYYSujwBsYsqskDpo4a1NLlE6V9rOO3VVxtcLkkE1kxeSpeFmFHuhMUU0NtCNuVI%2F%2BpIm99ZRXeR6Gz3DzMoE2WNOwEFYdf1bBlNXU6c%2Fv8gS%2B%2B52%2Baj7cZT1rT2Ye%2BeZeb3KGkAiXFF3fw%2BXESpgVxuFsP32GyVQS4cpTLe92ow18qUKDdmkLThddXWmrAy4yw7ZFHy%2BkaSUDxVwG3Q17PRC4Y70%2FOjS2WMHGVkuXYPzVXFs6hOhrNHnXXfTprOYv36623BanidzAf%2BokuTDibZj0U7ijjbF8jvZ20PXiiRjeFm6S%2FKzrfneGG7w2IAVYH0vOp53c1l68OgonzRFdM8O5TUdfnMjXuX0pQX7VM4wS1vbrOIZFF6ijhCLYi4dMn%2FknGvvDVDH09sw7vqWvQY6pgG6wcvdBBhD9jc9O8LQV8tCCJ7LZpcvKHnPnWWDZ9qNdWznxR6WNmsx6L2GB6TBoltwtuhWb%2FFIcBeXOh%2FqJ4anoY0ituHB5YozDVl5QPDYLicUcaHUWqPirhy6msi358azRrhnA8oRLS6jzDMulHfyHy65qljNcWvAq9Vqn%2B4eB5uPnWm%2BHntGHbssXVK%2BUTrYZQuyccfXRcra448cB6Jre4XPDoOf&X-Amz-Signature=ba5dd191a0bdf4d083088815cd881cfac10fad3918b2aaf0d83fac9e5857fa7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3DXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHeTdvuf7X9XQ8ejYrFrUZP55ws7gVvPuK8cErgwluEEAiA5FGhDY84pzpG%2BtjoAqhSrLHAa1r9Kjcy428w%2FNN%2BemCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwTvEX37dUwKhG1ZKtwDxMaPPHTbdnURrP9SlLiJrGG%2Fz67PBz%2BDrqymm%2FD1yePiaSlBgZqurYvDPWp79n8%2FjQJDFbH30XOK4Sv1Hem43pBq5HXj3eB45sXHMooT8f9QdUmah%2B67UqbYvnj3Q2jxAQDM0uKy9vFeCJIfP3iKuINoGD2hqKhgkHFfTa1daKxVqi7PH6uhA4yetyyowgsjUebXCqzBc%2FbObi6qrziB2m0k%2FftWrvkfxyN6dYTry1ilYYSujwBsYsqskDpo4a1NLlE6V9rOO3VVxtcLkkE1kxeSpeFmFHuhMUU0NtCNuVI%2F%2BpIm99ZRXeR6Gz3DzMoE2WNOwEFYdf1bBlNXU6c%2Fv8gS%2B%2B52%2Baj7cZT1rT2Ye%2BeZeb3KGkAiXFF3fw%2BXESpgVxuFsP32GyVQS4cpTLe92ow18qUKDdmkLThddXWmrAy4yw7ZFHy%2BkaSUDxVwG3Q17PRC4Y70%2FOjS2WMHGVkuXYPzVXFs6hOhrNHnXXfTprOYv36623BanidzAf%2BokuTDibZj0U7ijjbF8jvZ20PXiiRjeFm6S%2FKzrfneGG7w2IAVYH0vOp53c1l68OgonzRFdM8O5TUdfnMjXuX0pQX7VM4wS1vbrOIZFF6ijhCLYi4dMn%2FknGvvDVDH09sw7vqWvQY6pgG6wcvdBBhD9jc9O8LQV8tCCJ7LZpcvKHnPnWWDZ9qNdWznxR6WNmsx6L2GB6TBoltwtuhWb%2FFIcBeXOh%2FqJ4anoY0ituHB5YozDVl5QPDYLicUcaHUWqPirhy6msi358azRrhnA8oRLS6jzDMulHfyHy65qljNcWvAq9Vqn%2B4eB5uPnWm%2BHntGHbssXVK%2BUTrYZQuyccfXRcra448cB6Jre4XPDoOf&X-Amz-Signature=2377fdbb366194e67202812cd2f34d9947d6ddf2875b3f2f206455784468abe5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3DXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHeTdvuf7X9XQ8ejYrFrUZP55ws7gVvPuK8cErgwluEEAiA5FGhDY84pzpG%2BtjoAqhSrLHAa1r9Kjcy428w%2FNN%2BemCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwTvEX37dUwKhG1ZKtwDxMaPPHTbdnURrP9SlLiJrGG%2Fz67PBz%2BDrqymm%2FD1yePiaSlBgZqurYvDPWp79n8%2FjQJDFbH30XOK4Sv1Hem43pBq5HXj3eB45sXHMooT8f9QdUmah%2B67UqbYvnj3Q2jxAQDM0uKy9vFeCJIfP3iKuINoGD2hqKhgkHFfTa1daKxVqi7PH6uhA4yetyyowgsjUebXCqzBc%2FbObi6qrziB2m0k%2FftWrvkfxyN6dYTry1ilYYSujwBsYsqskDpo4a1NLlE6V9rOO3VVxtcLkkE1kxeSpeFmFHuhMUU0NtCNuVI%2F%2BpIm99ZRXeR6Gz3DzMoE2WNOwEFYdf1bBlNXU6c%2Fv8gS%2B%2B52%2Baj7cZT1rT2Ye%2BeZeb3KGkAiXFF3fw%2BXESpgVxuFsP32GyVQS4cpTLe92ow18qUKDdmkLThddXWmrAy4yw7ZFHy%2BkaSUDxVwG3Q17PRC4Y70%2FOjS2WMHGVkuXYPzVXFs6hOhrNHnXXfTprOYv36623BanidzAf%2BokuTDibZj0U7ijjbF8jvZ20PXiiRjeFm6S%2FKzrfneGG7w2IAVYH0vOp53c1l68OgonzRFdM8O5TUdfnMjXuX0pQX7VM4wS1vbrOIZFF6ijhCLYi4dMn%2FknGvvDVDH09sw7vqWvQY6pgG6wcvdBBhD9jc9O8LQV8tCCJ7LZpcvKHnPnWWDZ9qNdWznxR6WNmsx6L2GB6TBoltwtuhWb%2FFIcBeXOh%2FqJ4anoY0ituHB5YozDVl5QPDYLicUcaHUWqPirhy6msi358azRrhnA8oRLS6jzDMulHfyHy65qljNcWvAq9Vqn%2B4eB5uPnWm%2BHntGHbssXVK%2BUTrYZQuyccfXRcra448cB6Jre4XPDoOf&X-Amz-Signature=4f183e63334637eda1e1eda79b87f572d45d9fac29f5a95606c6c75dac5b1855&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3DXP3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHeTdvuf7X9XQ8ejYrFrUZP55ws7gVvPuK8cErgwluEEAiA5FGhDY84pzpG%2BtjoAqhSrLHAa1r9Kjcy428w%2FNN%2BemCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwTvEX37dUwKhG1ZKtwDxMaPPHTbdnURrP9SlLiJrGG%2Fz67PBz%2BDrqymm%2FD1yePiaSlBgZqurYvDPWp79n8%2FjQJDFbH30XOK4Sv1Hem43pBq5HXj3eB45sXHMooT8f9QdUmah%2B67UqbYvnj3Q2jxAQDM0uKy9vFeCJIfP3iKuINoGD2hqKhgkHFfTa1daKxVqi7PH6uhA4yetyyowgsjUebXCqzBc%2FbObi6qrziB2m0k%2FftWrvkfxyN6dYTry1ilYYSujwBsYsqskDpo4a1NLlE6V9rOO3VVxtcLkkE1kxeSpeFmFHuhMUU0NtCNuVI%2F%2BpIm99ZRXeR6Gz3DzMoE2WNOwEFYdf1bBlNXU6c%2Fv8gS%2B%2B52%2Baj7cZT1rT2Ye%2BeZeb3KGkAiXFF3fw%2BXESpgVxuFsP32GyVQS4cpTLe92ow18qUKDdmkLThddXWmrAy4yw7ZFHy%2BkaSUDxVwG3Q17PRC4Y70%2FOjS2WMHGVkuXYPzVXFs6hOhrNHnXXfTprOYv36623BanidzAf%2BokuTDibZj0U7ijjbF8jvZ20PXiiRjeFm6S%2FKzrfneGG7w2IAVYH0vOp53c1l68OgonzRFdM8O5TUdfnMjXuX0pQX7VM4wS1vbrOIZFF6ijhCLYi4dMn%2FknGvvDVDH09sw7vqWvQY6pgG6wcvdBBhD9jc9O8LQV8tCCJ7LZpcvKHnPnWWDZ9qNdWznxR6WNmsx6L2GB6TBoltwtuhWb%2FFIcBeXOh%2FqJ4anoY0ituHB5YozDVl5QPDYLicUcaHUWqPirhy6msi358azRrhnA8oRLS6jzDMulHfyHy65qljNcWvAq9Vqn%2B4eB5uPnWm%2BHntGHbssXVK%2BUTrYZQuyccfXRcra448cB6Jre4XPDoOf&X-Amz-Signature=c4ffd2ea7965bc7d17a4c83d09eb6fc4af2dad1296fb2d206ff0aab6881eeb4f&X-Amz-SignedHeaders=host&x-id=GetObject)
