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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEPFJYG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAMfNmkmOmeLriINlmDTLb2ICpd2xaIFpWR7lFLDu%2B2yAiAGOpJX7sp9jfUONjmt%2BaDNw86ciD4q360vQqWDc7JwiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhnj4yGBxqyfSwwz5KtwDTA5ejaEXid72srip5CxvmkJG3Xx8JzYrDMe5HaE%2Fgyu5XLL%2FQppI9BWb6%2BaqIZvLMQvoSeHwxslJm%2BI6Kq0f81NVv9h9i1F3J26kHbRoThYZyBXGv9z0%2BlajZEn5Mu8cegumE6Uw1OBVn0SkCxAU6OnNP1I1d%2BIibntds2T4x%2FzIpmCouNrvFW6Y24la4k9XnYReU67cAzQQtvnCXhSDgnHvOOt9fDTvuHmcKssCn5BDbP30xjpdik32BV9zvxXf9pQ4fm0ICfORXuV5rQg3sOZC5V03Hx3bw4ZuAZLjg4gelH8HxOMkIZXhevr457zkAIsGkp6wgd6iNiuA7y5oPLg9GrK7QL93vxKv4kc3nHvOEYvRxUl%2BvnYCFO3k6L8Vl%2F1S%2Bxitz%2FqreCp%2FUZh7fL34E7qoibEYhkC%2BdR2GMQf7ypOGwRBWsiZBEdozro2zFe7aJq9DMle90iTGq4wQ0pq1z%2BlzDSRMN3%2BmauFNPEmiQ8puq%2BbXNpTdLjM7DGX5u6YfAcXe7ZnX%2FZ%2BAwWKkJopEyVfdyG0xI1XyqGGWNS%2BPHSAbBLvHYi%2BSZcpnuQuNMvANEm82DFHk%2FfzFrS95IFx0AP6jcGgzB3%2FraYf5mZP%2BYtSnSyqM2D9bP%2FYw16HHvQY6pgFNMMZlSaB9qosfUAxo9s6hF3TmeKGNxmIYqlgPddYOwuP7UmG0MuslvRno6QVi984EqXBnfLSX%2FF5Qkf0lL2Jv3kJtGsyZ7x0hqer7VdqxMaefD%2BdVhXCwGUweXJvHGdSl7%2B340YlsN4zxx2oFR7NfuCySlMMc1E3U%2FDOWYU82WYQ%2FKuxqFCybL1LtMX%2Fii%2Fudytm1a62iPrLkMtpwyVVocK0jaCDG&X-Amz-Signature=e815ce852f89cad8ef06a52b6ca3ae3e1eb27ef42340a1c7e7bc5e91f399e8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEPFJYG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAMfNmkmOmeLriINlmDTLb2ICpd2xaIFpWR7lFLDu%2B2yAiAGOpJX7sp9jfUONjmt%2BaDNw86ciD4q360vQqWDc7JwiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhnj4yGBxqyfSwwz5KtwDTA5ejaEXid72srip5CxvmkJG3Xx8JzYrDMe5HaE%2Fgyu5XLL%2FQppI9BWb6%2BaqIZvLMQvoSeHwxslJm%2BI6Kq0f81NVv9h9i1F3J26kHbRoThYZyBXGv9z0%2BlajZEn5Mu8cegumE6Uw1OBVn0SkCxAU6OnNP1I1d%2BIibntds2T4x%2FzIpmCouNrvFW6Y24la4k9XnYReU67cAzQQtvnCXhSDgnHvOOt9fDTvuHmcKssCn5BDbP30xjpdik32BV9zvxXf9pQ4fm0ICfORXuV5rQg3sOZC5V03Hx3bw4ZuAZLjg4gelH8HxOMkIZXhevr457zkAIsGkp6wgd6iNiuA7y5oPLg9GrK7QL93vxKv4kc3nHvOEYvRxUl%2BvnYCFO3k6L8Vl%2F1S%2Bxitz%2FqreCp%2FUZh7fL34E7qoibEYhkC%2BdR2GMQf7ypOGwRBWsiZBEdozro2zFe7aJq9DMle90iTGq4wQ0pq1z%2BlzDSRMN3%2BmauFNPEmiQ8puq%2BbXNpTdLjM7DGX5u6YfAcXe7ZnX%2FZ%2BAwWKkJopEyVfdyG0xI1XyqGGWNS%2BPHSAbBLvHYi%2BSZcpnuQuNMvANEm82DFHk%2FfzFrS95IFx0AP6jcGgzB3%2FraYf5mZP%2BYtSnSyqM2D9bP%2FYw16HHvQY6pgFNMMZlSaB9qosfUAxo9s6hF3TmeKGNxmIYqlgPddYOwuP7UmG0MuslvRno6QVi984EqXBnfLSX%2FF5Qkf0lL2Jv3kJtGsyZ7x0hqer7VdqxMaefD%2BdVhXCwGUweXJvHGdSl7%2B340YlsN4zxx2oFR7NfuCySlMMc1E3U%2FDOWYU82WYQ%2FKuxqFCybL1LtMX%2Fii%2Fudytm1a62iPrLkMtpwyVVocK0jaCDG&X-Amz-Signature=1679eb91e12671d01fd7382ef4126340a7bac6fd241688cd2092c7b7c410d85d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEPFJYG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAMfNmkmOmeLriINlmDTLb2ICpd2xaIFpWR7lFLDu%2B2yAiAGOpJX7sp9jfUONjmt%2BaDNw86ciD4q360vQqWDc7JwiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhnj4yGBxqyfSwwz5KtwDTA5ejaEXid72srip5CxvmkJG3Xx8JzYrDMe5HaE%2Fgyu5XLL%2FQppI9BWb6%2BaqIZvLMQvoSeHwxslJm%2BI6Kq0f81NVv9h9i1F3J26kHbRoThYZyBXGv9z0%2BlajZEn5Mu8cegumE6Uw1OBVn0SkCxAU6OnNP1I1d%2BIibntds2T4x%2FzIpmCouNrvFW6Y24la4k9XnYReU67cAzQQtvnCXhSDgnHvOOt9fDTvuHmcKssCn5BDbP30xjpdik32BV9zvxXf9pQ4fm0ICfORXuV5rQg3sOZC5V03Hx3bw4ZuAZLjg4gelH8HxOMkIZXhevr457zkAIsGkp6wgd6iNiuA7y5oPLg9GrK7QL93vxKv4kc3nHvOEYvRxUl%2BvnYCFO3k6L8Vl%2F1S%2Bxitz%2FqreCp%2FUZh7fL34E7qoibEYhkC%2BdR2GMQf7ypOGwRBWsiZBEdozro2zFe7aJq9DMle90iTGq4wQ0pq1z%2BlzDSRMN3%2BmauFNPEmiQ8puq%2BbXNpTdLjM7DGX5u6YfAcXe7ZnX%2FZ%2BAwWKkJopEyVfdyG0xI1XyqGGWNS%2BPHSAbBLvHYi%2BSZcpnuQuNMvANEm82DFHk%2FfzFrS95IFx0AP6jcGgzB3%2FraYf5mZP%2BYtSnSyqM2D9bP%2FYw16HHvQY6pgFNMMZlSaB9qosfUAxo9s6hF3TmeKGNxmIYqlgPddYOwuP7UmG0MuslvRno6QVi984EqXBnfLSX%2FF5Qkf0lL2Jv3kJtGsyZ7x0hqer7VdqxMaefD%2BdVhXCwGUweXJvHGdSl7%2B340YlsN4zxx2oFR7NfuCySlMMc1E3U%2FDOWYU82WYQ%2FKuxqFCybL1LtMX%2Fii%2Fudytm1a62iPrLkMtpwyVVocK0jaCDG&X-Amz-Signature=9a856cdcecbc5e67e53b9e779ee93f405f184595009ee813681311623ecf90d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEPFJYG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAMfNmkmOmeLriINlmDTLb2ICpd2xaIFpWR7lFLDu%2B2yAiAGOpJX7sp9jfUONjmt%2BaDNw86ciD4q360vQqWDc7JwiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhnj4yGBxqyfSwwz5KtwDTA5ejaEXid72srip5CxvmkJG3Xx8JzYrDMe5HaE%2Fgyu5XLL%2FQppI9BWb6%2BaqIZvLMQvoSeHwxslJm%2BI6Kq0f81NVv9h9i1F3J26kHbRoThYZyBXGv9z0%2BlajZEn5Mu8cegumE6Uw1OBVn0SkCxAU6OnNP1I1d%2BIibntds2T4x%2FzIpmCouNrvFW6Y24la4k9XnYReU67cAzQQtvnCXhSDgnHvOOt9fDTvuHmcKssCn5BDbP30xjpdik32BV9zvxXf9pQ4fm0ICfORXuV5rQg3sOZC5V03Hx3bw4ZuAZLjg4gelH8HxOMkIZXhevr457zkAIsGkp6wgd6iNiuA7y5oPLg9GrK7QL93vxKv4kc3nHvOEYvRxUl%2BvnYCFO3k6L8Vl%2F1S%2Bxitz%2FqreCp%2FUZh7fL34E7qoibEYhkC%2BdR2GMQf7ypOGwRBWsiZBEdozro2zFe7aJq9DMle90iTGq4wQ0pq1z%2BlzDSRMN3%2BmauFNPEmiQ8puq%2BbXNpTdLjM7DGX5u6YfAcXe7ZnX%2FZ%2BAwWKkJopEyVfdyG0xI1XyqGGWNS%2BPHSAbBLvHYi%2BSZcpnuQuNMvANEm82DFHk%2FfzFrS95IFx0AP6jcGgzB3%2FraYf5mZP%2BYtSnSyqM2D9bP%2FYw16HHvQY6pgFNMMZlSaB9qosfUAxo9s6hF3TmeKGNxmIYqlgPddYOwuP7UmG0MuslvRno6QVi984EqXBnfLSX%2FF5Qkf0lL2Jv3kJtGsyZ7x0hqer7VdqxMaefD%2BdVhXCwGUweXJvHGdSl7%2B340YlsN4zxx2oFR7NfuCySlMMc1E3U%2FDOWYU82WYQ%2FKuxqFCybL1LtMX%2Fii%2Fudytm1a62iPrLkMtpwyVVocK0jaCDG&X-Amz-Signature=d5b27c2ace314ba049ccb986680efdc6b0eb9e30e8cac22ce1ba1a66162679cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEPFJYG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAMfNmkmOmeLriINlmDTLb2ICpd2xaIFpWR7lFLDu%2B2yAiAGOpJX7sp9jfUONjmt%2BaDNw86ciD4q360vQqWDc7JwiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhnj4yGBxqyfSwwz5KtwDTA5ejaEXid72srip5CxvmkJG3Xx8JzYrDMe5HaE%2Fgyu5XLL%2FQppI9BWb6%2BaqIZvLMQvoSeHwxslJm%2BI6Kq0f81NVv9h9i1F3J26kHbRoThYZyBXGv9z0%2BlajZEn5Mu8cegumE6Uw1OBVn0SkCxAU6OnNP1I1d%2BIibntds2T4x%2FzIpmCouNrvFW6Y24la4k9XnYReU67cAzQQtvnCXhSDgnHvOOt9fDTvuHmcKssCn5BDbP30xjpdik32BV9zvxXf9pQ4fm0ICfORXuV5rQg3sOZC5V03Hx3bw4ZuAZLjg4gelH8HxOMkIZXhevr457zkAIsGkp6wgd6iNiuA7y5oPLg9GrK7QL93vxKv4kc3nHvOEYvRxUl%2BvnYCFO3k6L8Vl%2F1S%2Bxitz%2FqreCp%2FUZh7fL34E7qoibEYhkC%2BdR2GMQf7ypOGwRBWsiZBEdozro2zFe7aJq9DMle90iTGq4wQ0pq1z%2BlzDSRMN3%2BmauFNPEmiQ8puq%2BbXNpTdLjM7DGX5u6YfAcXe7ZnX%2FZ%2BAwWKkJopEyVfdyG0xI1XyqGGWNS%2BPHSAbBLvHYi%2BSZcpnuQuNMvANEm82DFHk%2FfzFrS95IFx0AP6jcGgzB3%2FraYf5mZP%2BYtSnSyqM2D9bP%2FYw16HHvQY6pgFNMMZlSaB9qosfUAxo9s6hF3TmeKGNxmIYqlgPddYOwuP7UmG0MuslvRno6QVi984EqXBnfLSX%2FF5Qkf0lL2Jv3kJtGsyZ7x0hqer7VdqxMaefD%2BdVhXCwGUweXJvHGdSl7%2B340YlsN4zxx2oFR7NfuCySlMMc1E3U%2FDOWYU82WYQ%2FKuxqFCybL1LtMX%2Fii%2Fudytm1a62iPrLkMtpwyVVocK0jaCDG&X-Amz-Signature=4aa5852aed4fb682fa8a3a699cbb3b71e89ce08bec3d57037289900211fdd77b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEPFJYG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAMfNmkmOmeLriINlmDTLb2ICpd2xaIFpWR7lFLDu%2B2yAiAGOpJX7sp9jfUONjmt%2BaDNw86ciD4q360vQqWDc7JwiSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMhnj4yGBxqyfSwwz5KtwDTA5ejaEXid72srip5CxvmkJG3Xx8JzYrDMe5HaE%2Fgyu5XLL%2FQppI9BWb6%2BaqIZvLMQvoSeHwxslJm%2BI6Kq0f81NVv9h9i1F3J26kHbRoThYZyBXGv9z0%2BlajZEn5Mu8cegumE6Uw1OBVn0SkCxAU6OnNP1I1d%2BIibntds2T4x%2FzIpmCouNrvFW6Y24la4k9XnYReU67cAzQQtvnCXhSDgnHvOOt9fDTvuHmcKssCn5BDbP30xjpdik32BV9zvxXf9pQ4fm0ICfORXuV5rQg3sOZC5V03Hx3bw4ZuAZLjg4gelH8HxOMkIZXhevr457zkAIsGkp6wgd6iNiuA7y5oPLg9GrK7QL93vxKv4kc3nHvOEYvRxUl%2BvnYCFO3k6L8Vl%2F1S%2Bxitz%2FqreCp%2FUZh7fL34E7qoibEYhkC%2BdR2GMQf7ypOGwRBWsiZBEdozro2zFe7aJq9DMle90iTGq4wQ0pq1z%2BlzDSRMN3%2BmauFNPEmiQ8puq%2BbXNpTdLjM7DGX5u6YfAcXe7ZnX%2FZ%2BAwWKkJopEyVfdyG0xI1XyqGGWNS%2BPHSAbBLvHYi%2BSZcpnuQuNMvANEm82DFHk%2FfzFrS95IFx0AP6jcGgzB3%2FraYf5mZP%2BYtSnSyqM2D9bP%2FYw16HHvQY6pgFNMMZlSaB9qosfUAxo9s6hF3TmeKGNxmIYqlgPddYOwuP7UmG0MuslvRno6QVi984EqXBnfLSX%2FF5Qkf0lL2Jv3kJtGsyZ7x0hqer7VdqxMaefD%2BdVhXCwGUweXJvHGdSl7%2B340YlsN4zxx2oFR7NfuCySlMMc1E3U%2FDOWYU82WYQ%2FKuxqFCybL1LtMX%2Fii%2Fudytm1a62iPrLkMtpwyVVocK0jaCDG&X-Amz-Signature=92c2e31d86d17940aa9ba631f3886f1f518c1ae6be97a043d5f0a4f825e8ebbb&X-Amz-SignedHeaders=host&x-id=GetObject)
