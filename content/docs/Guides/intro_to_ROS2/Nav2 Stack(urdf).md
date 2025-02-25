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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFXDVQZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfIsgqGXYGtXQNDyiKOREr9ZotLj8WrHKdfvVIXM%2FFTAIhAOE1sFbkbtWPl3y9QrAXfI193DX9CKCmg%2Bc9LCMMN7qAKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8XKdChiTl81Nxx2Uq3AOZ138yvukvRg7sLMdj4nHrztLpiJrUzC9kbYmn%2Bz8VYkl3bvCEEq%2FR7SwawtsCIwQH7zogSsVEUc2m2%2BwA5J6tyoVmxJv9ZwpcfUYZdcwpxQnMsAk16mSnkNWjSVWlOg5qyMrQ7Rfz92AVQYO%2BAtjlBDMID%2F08%2Bd9r8H79MLNAPAchy78mVT%2FJ4ggc4MKayTvTr4HitXgRF0tL%2FfQQZjeyvfJBaH3sX7KrUCGQpib2DOT5Vv9Cl3JzhzFNLBgcgprx37g%2BTC8PS2IW8ZZK01vfg10LShbdjnsgzm2rwM86ZQaC9%2F%2BZH35CPgNkhSQ0cJqK0cxTETn8EcjFwXMW1v69xfgSMDOSMFroa8%2BBh2PQVC%2FamUgoiqimphz9Z51wQwhXCz6zjfPcPqskbiZXeCQ8c4MtNsC3m%2Frzsvk3ejsdm0oeAqOngi%2BqahyA3hBnuaJKnusPa8zAnorCijWo5hFwOc6k31ip%2B5DvEniaB%2FGEdRpPTWo8X2decBld2oPYWisgVJeXYLEZh1%2BuyrPvMdvVGE5j7gHOamxM83OFs8USro5Y%2F0%2Fc0FeK5aNgUszbxIhgT5HvbRtZKciJz3XLPrNN1jqVqEx35n1IyLBeXIYIhWkpXRa9SdX0jhNEJTDc7ve9BjqkASErjO05N8fza6BsHt4pXHIiiNLqwoPjeRTRr%2Bat%2FA5uWODh9hPyywaocQGLPYoRv5Dft5dFFtLl0Fx46BKz8MQF0g2X%2FUC7qgmc5G%2FpTvLeemVN%2Fjfxf82mImrbmQoy2Fsa2QBShbe28rsgERa31EXC8eTxO8g26YNrf8DQyOWZItTNj7kxyjkNvkpDBcoVjn24nPnPFmis20ZVfcogBiE0Jbmf&X-Amz-Signature=16f0534275b527004e8a98894ac5c339d6b96149de40b6b4d2077b9d58486ece&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFXDVQZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfIsgqGXYGtXQNDyiKOREr9ZotLj8WrHKdfvVIXM%2FFTAIhAOE1sFbkbtWPl3y9QrAXfI193DX9CKCmg%2Bc9LCMMN7qAKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8XKdChiTl81Nxx2Uq3AOZ138yvukvRg7sLMdj4nHrztLpiJrUzC9kbYmn%2Bz8VYkl3bvCEEq%2FR7SwawtsCIwQH7zogSsVEUc2m2%2BwA5J6tyoVmxJv9ZwpcfUYZdcwpxQnMsAk16mSnkNWjSVWlOg5qyMrQ7Rfz92AVQYO%2BAtjlBDMID%2F08%2Bd9r8H79MLNAPAchy78mVT%2FJ4ggc4MKayTvTr4HitXgRF0tL%2FfQQZjeyvfJBaH3sX7KrUCGQpib2DOT5Vv9Cl3JzhzFNLBgcgprx37g%2BTC8PS2IW8ZZK01vfg10LShbdjnsgzm2rwM86ZQaC9%2F%2BZH35CPgNkhSQ0cJqK0cxTETn8EcjFwXMW1v69xfgSMDOSMFroa8%2BBh2PQVC%2FamUgoiqimphz9Z51wQwhXCz6zjfPcPqskbiZXeCQ8c4MtNsC3m%2Frzsvk3ejsdm0oeAqOngi%2BqahyA3hBnuaJKnusPa8zAnorCijWo5hFwOc6k31ip%2B5DvEniaB%2FGEdRpPTWo8X2decBld2oPYWisgVJeXYLEZh1%2BuyrPvMdvVGE5j7gHOamxM83OFs8USro5Y%2F0%2Fc0FeK5aNgUszbxIhgT5HvbRtZKciJz3XLPrNN1jqVqEx35n1IyLBeXIYIhWkpXRa9SdX0jhNEJTDc7ve9BjqkASErjO05N8fza6BsHt4pXHIiiNLqwoPjeRTRr%2Bat%2FA5uWODh9hPyywaocQGLPYoRv5Dft5dFFtLl0Fx46BKz8MQF0g2X%2FUC7qgmc5G%2FpTvLeemVN%2Fjfxf82mImrbmQoy2Fsa2QBShbe28rsgERa31EXC8eTxO8g26YNrf8DQyOWZItTNj7kxyjkNvkpDBcoVjn24nPnPFmis20ZVfcogBiE0Jbmf&X-Amz-Signature=54b462277f0c3087ce8abc6e28897da30314cb73943aa3dfb55286d236f905e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFXDVQZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfIsgqGXYGtXQNDyiKOREr9ZotLj8WrHKdfvVIXM%2FFTAIhAOE1sFbkbtWPl3y9QrAXfI193DX9CKCmg%2Bc9LCMMN7qAKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8XKdChiTl81Nxx2Uq3AOZ138yvukvRg7sLMdj4nHrztLpiJrUzC9kbYmn%2Bz8VYkl3bvCEEq%2FR7SwawtsCIwQH7zogSsVEUc2m2%2BwA5J6tyoVmxJv9ZwpcfUYZdcwpxQnMsAk16mSnkNWjSVWlOg5qyMrQ7Rfz92AVQYO%2BAtjlBDMID%2F08%2Bd9r8H79MLNAPAchy78mVT%2FJ4ggc4MKayTvTr4HitXgRF0tL%2FfQQZjeyvfJBaH3sX7KrUCGQpib2DOT5Vv9Cl3JzhzFNLBgcgprx37g%2BTC8PS2IW8ZZK01vfg10LShbdjnsgzm2rwM86ZQaC9%2F%2BZH35CPgNkhSQ0cJqK0cxTETn8EcjFwXMW1v69xfgSMDOSMFroa8%2BBh2PQVC%2FamUgoiqimphz9Z51wQwhXCz6zjfPcPqskbiZXeCQ8c4MtNsC3m%2Frzsvk3ejsdm0oeAqOngi%2BqahyA3hBnuaJKnusPa8zAnorCijWo5hFwOc6k31ip%2B5DvEniaB%2FGEdRpPTWo8X2decBld2oPYWisgVJeXYLEZh1%2BuyrPvMdvVGE5j7gHOamxM83OFs8USro5Y%2F0%2Fc0FeK5aNgUszbxIhgT5HvbRtZKciJz3XLPrNN1jqVqEx35n1IyLBeXIYIhWkpXRa9SdX0jhNEJTDc7ve9BjqkASErjO05N8fza6BsHt4pXHIiiNLqwoPjeRTRr%2Bat%2FA5uWODh9hPyywaocQGLPYoRv5Dft5dFFtLl0Fx46BKz8MQF0g2X%2FUC7qgmc5G%2FpTvLeemVN%2Fjfxf82mImrbmQoy2Fsa2QBShbe28rsgERa31EXC8eTxO8g26YNrf8DQyOWZItTNj7kxyjkNvkpDBcoVjn24nPnPFmis20ZVfcogBiE0Jbmf&X-Amz-Signature=3d607ab3b9b9cf8f152e3ac1a6108bdb4693e59edef580bc76d8507da1f3a38a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFXDVQZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfIsgqGXYGtXQNDyiKOREr9ZotLj8WrHKdfvVIXM%2FFTAIhAOE1sFbkbtWPl3y9QrAXfI193DX9CKCmg%2Bc9LCMMN7qAKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8XKdChiTl81Nxx2Uq3AOZ138yvukvRg7sLMdj4nHrztLpiJrUzC9kbYmn%2Bz8VYkl3bvCEEq%2FR7SwawtsCIwQH7zogSsVEUc2m2%2BwA5J6tyoVmxJv9ZwpcfUYZdcwpxQnMsAk16mSnkNWjSVWlOg5qyMrQ7Rfz92AVQYO%2BAtjlBDMID%2F08%2Bd9r8H79MLNAPAchy78mVT%2FJ4ggc4MKayTvTr4HitXgRF0tL%2FfQQZjeyvfJBaH3sX7KrUCGQpib2DOT5Vv9Cl3JzhzFNLBgcgprx37g%2BTC8PS2IW8ZZK01vfg10LShbdjnsgzm2rwM86ZQaC9%2F%2BZH35CPgNkhSQ0cJqK0cxTETn8EcjFwXMW1v69xfgSMDOSMFroa8%2BBh2PQVC%2FamUgoiqimphz9Z51wQwhXCz6zjfPcPqskbiZXeCQ8c4MtNsC3m%2Frzsvk3ejsdm0oeAqOngi%2BqahyA3hBnuaJKnusPa8zAnorCijWo5hFwOc6k31ip%2B5DvEniaB%2FGEdRpPTWo8X2decBld2oPYWisgVJeXYLEZh1%2BuyrPvMdvVGE5j7gHOamxM83OFs8USro5Y%2F0%2Fc0FeK5aNgUszbxIhgT5HvbRtZKciJz3XLPrNN1jqVqEx35n1IyLBeXIYIhWkpXRa9SdX0jhNEJTDc7ve9BjqkASErjO05N8fza6BsHt4pXHIiiNLqwoPjeRTRr%2Bat%2FA5uWODh9hPyywaocQGLPYoRv5Dft5dFFtLl0Fx46BKz8MQF0g2X%2FUC7qgmc5G%2FpTvLeemVN%2Fjfxf82mImrbmQoy2Fsa2QBShbe28rsgERa31EXC8eTxO8g26YNrf8DQyOWZItTNj7kxyjkNvkpDBcoVjn24nPnPFmis20ZVfcogBiE0Jbmf&X-Amz-Signature=da732c5e2748277c40b0adfd64a077579e95efc9e7b607e128bb4a34e7bdebc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFXDVQZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfIsgqGXYGtXQNDyiKOREr9ZotLj8WrHKdfvVIXM%2FFTAIhAOE1sFbkbtWPl3y9QrAXfI193DX9CKCmg%2Bc9LCMMN7qAKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8XKdChiTl81Nxx2Uq3AOZ138yvukvRg7sLMdj4nHrztLpiJrUzC9kbYmn%2Bz8VYkl3bvCEEq%2FR7SwawtsCIwQH7zogSsVEUc2m2%2BwA5J6tyoVmxJv9ZwpcfUYZdcwpxQnMsAk16mSnkNWjSVWlOg5qyMrQ7Rfz92AVQYO%2BAtjlBDMID%2F08%2Bd9r8H79MLNAPAchy78mVT%2FJ4ggc4MKayTvTr4HitXgRF0tL%2FfQQZjeyvfJBaH3sX7KrUCGQpib2DOT5Vv9Cl3JzhzFNLBgcgprx37g%2BTC8PS2IW8ZZK01vfg10LShbdjnsgzm2rwM86ZQaC9%2F%2BZH35CPgNkhSQ0cJqK0cxTETn8EcjFwXMW1v69xfgSMDOSMFroa8%2BBh2PQVC%2FamUgoiqimphz9Z51wQwhXCz6zjfPcPqskbiZXeCQ8c4MtNsC3m%2Frzsvk3ejsdm0oeAqOngi%2BqahyA3hBnuaJKnusPa8zAnorCijWo5hFwOc6k31ip%2B5DvEniaB%2FGEdRpPTWo8X2decBld2oPYWisgVJeXYLEZh1%2BuyrPvMdvVGE5j7gHOamxM83OFs8USro5Y%2F0%2Fc0FeK5aNgUszbxIhgT5HvbRtZKciJz3XLPrNN1jqVqEx35n1IyLBeXIYIhWkpXRa9SdX0jhNEJTDc7ve9BjqkASErjO05N8fza6BsHt4pXHIiiNLqwoPjeRTRr%2Bat%2FA5uWODh9hPyywaocQGLPYoRv5Dft5dFFtLl0Fx46BKz8MQF0g2X%2FUC7qgmc5G%2FpTvLeemVN%2Fjfxf82mImrbmQoy2Fsa2QBShbe28rsgERa31EXC8eTxO8g26YNrf8DQyOWZItTNj7kxyjkNvkpDBcoVjn24nPnPFmis20ZVfcogBiE0Jbmf&X-Amz-Signature=4b01d70861029b11aab82686aa7088dbaecd91fb689ccacce802df51f3434a16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFXDVQZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCfIsgqGXYGtXQNDyiKOREr9ZotLj8WrHKdfvVIXM%2FFTAIhAOE1sFbkbtWPl3y9QrAXfI193DX9CKCmg%2Bc9LCMMN7qAKv8DCEoQABoMNjM3NDIzMTgzODA1Igz8XKdChiTl81Nxx2Uq3AOZ138yvukvRg7sLMdj4nHrztLpiJrUzC9kbYmn%2Bz8VYkl3bvCEEq%2FR7SwawtsCIwQH7zogSsVEUc2m2%2BwA5J6tyoVmxJv9ZwpcfUYZdcwpxQnMsAk16mSnkNWjSVWlOg5qyMrQ7Rfz92AVQYO%2BAtjlBDMID%2F08%2Bd9r8H79MLNAPAchy78mVT%2FJ4ggc4MKayTvTr4HitXgRF0tL%2FfQQZjeyvfJBaH3sX7KrUCGQpib2DOT5Vv9Cl3JzhzFNLBgcgprx37g%2BTC8PS2IW8ZZK01vfg10LShbdjnsgzm2rwM86ZQaC9%2F%2BZH35CPgNkhSQ0cJqK0cxTETn8EcjFwXMW1v69xfgSMDOSMFroa8%2BBh2PQVC%2FamUgoiqimphz9Z51wQwhXCz6zjfPcPqskbiZXeCQ8c4MtNsC3m%2Frzsvk3ejsdm0oeAqOngi%2BqahyA3hBnuaJKnusPa8zAnorCijWo5hFwOc6k31ip%2B5DvEniaB%2FGEdRpPTWo8X2decBld2oPYWisgVJeXYLEZh1%2BuyrPvMdvVGE5j7gHOamxM83OFs8USro5Y%2F0%2Fc0FeK5aNgUszbxIhgT5HvbRtZKciJz3XLPrNN1jqVqEx35n1IyLBeXIYIhWkpXRa9SdX0jhNEJTDc7ve9BjqkASErjO05N8fza6BsHt4pXHIiiNLqwoPjeRTRr%2Bat%2FA5uWODh9hPyywaocQGLPYoRv5Dft5dFFtLl0Fx46BKz8MQF0g2X%2FUC7qgmc5G%2FpTvLeemVN%2Fjfxf82mImrbmQoy2Fsa2QBShbe28rsgERa31EXC8eTxO8g26YNrf8DQyOWZItTNj7kxyjkNvkpDBcoVjn24nPnPFmis20ZVfcogBiE0Jbmf&X-Amz-Signature=04aee85757b063574fc26ee2ef2c3defd3821e205a2b505a1c1b742a02b70a60&X-Amz-SignedHeaders=host&x-id=GetObject)
