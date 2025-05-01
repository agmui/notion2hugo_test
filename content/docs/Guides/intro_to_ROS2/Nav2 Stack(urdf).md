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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY5GY3O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHNhZtgkK8tdRTBAPsLzdeXsC7I3suW%2FuDUzdTIM1c4gAiEArY608FUPnThUTMckhfLWkQ5ydtk2Ii2IxQWh4oqz%2FWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpzWu45a%2BuB5o57circA6M6HEyyFss51n9q3eovVgHHjJr4z1bYho4w2BS43ufUEcxkZio5KYN1h9syvvHQjj20Ls8mr1WPF10dCQ4TacgrKKLfYUk%2FuVylPYHeuVbt8IvwofGJtfNh16su6O23L%2BriSesEqJ5N7gyMxzE4IDbJcPVfUGnYif9Gt2tgt2WYEsLwBuS5ZvtUIiOmjhZMs5O73Hu2ZwKOgebG4cDNJAEJY40vzkco3yCWsEBTITIpBV8SqCh4hNN3odBA65L0DGLlhp0TfQLfbHgfTXpNWjMedrHsG1ZXCv2hacft%2B1diU0BpdMAmjC6YqSpSIQ2nulKcdO85VQTU8a3udL%2F95QtOtdwzetDKBg0iTWj781OANG9bez78mvbhd684t6HCXH%2BvPBbbNe8dRQehZVg2frQcdYCnZhEob0m%2BlEpwi%2FfChPUOjp3X9VNnMuAD5MImYXtEIldgmBdZmIP2juLyjTYyryL5AmIHnpggFs8z%2FlCjphXTSLb0hftrodYbgSKKZ%2Befs73bWP15wpUZr4GejXZ5lidmWEkdbpFWvtiPx4TSzjn6u2tIfgy06EE6MGtOgZc93v76mVfkpSpEMNrbGzhJ5Yo93QMhJinbLF6XT8YfekiSXNyjTyM8kR7GMLmFzsAGOqUBh5fwBGrA0%2Bb2HC2rq5Mfi3qGIhDsZr1F2Duqxeu0nGWKC%2BNqdElInBu0JX31UeGYHJc77AONTKgBmbn5sk%2FIWWlpN5Z%2BQW7KaHt%2F%2Bk2nzus%2FAYyr%2BsigQwcrwMxK1WgxkBWPxx%2BtNGMidCbQyZNrtvbZMjahGW3Cdx1ae79Z6oBPXXaiSVY3EpbxRvAIbaWbh3Nydu0g0v1yWLWMVokSkm%2BwIFnj&X-Amz-Signature=9f203d9fc561081882e6e45b1beaf39d50a3d6b97993f81ab4ba3f8bb1318a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY5GY3O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHNhZtgkK8tdRTBAPsLzdeXsC7I3suW%2FuDUzdTIM1c4gAiEArY608FUPnThUTMckhfLWkQ5ydtk2Ii2IxQWh4oqz%2FWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpzWu45a%2BuB5o57circA6M6HEyyFss51n9q3eovVgHHjJr4z1bYho4w2BS43ufUEcxkZio5KYN1h9syvvHQjj20Ls8mr1WPF10dCQ4TacgrKKLfYUk%2FuVylPYHeuVbt8IvwofGJtfNh16su6O23L%2BriSesEqJ5N7gyMxzE4IDbJcPVfUGnYif9Gt2tgt2WYEsLwBuS5ZvtUIiOmjhZMs5O73Hu2ZwKOgebG4cDNJAEJY40vzkco3yCWsEBTITIpBV8SqCh4hNN3odBA65L0DGLlhp0TfQLfbHgfTXpNWjMedrHsG1ZXCv2hacft%2B1diU0BpdMAmjC6YqSpSIQ2nulKcdO85VQTU8a3udL%2F95QtOtdwzetDKBg0iTWj781OANG9bez78mvbhd684t6HCXH%2BvPBbbNe8dRQehZVg2frQcdYCnZhEob0m%2BlEpwi%2FfChPUOjp3X9VNnMuAD5MImYXtEIldgmBdZmIP2juLyjTYyryL5AmIHnpggFs8z%2FlCjphXTSLb0hftrodYbgSKKZ%2Befs73bWP15wpUZr4GejXZ5lidmWEkdbpFWvtiPx4TSzjn6u2tIfgy06EE6MGtOgZc93v76mVfkpSpEMNrbGzhJ5Yo93QMhJinbLF6XT8YfekiSXNyjTyM8kR7GMLmFzsAGOqUBh5fwBGrA0%2Bb2HC2rq5Mfi3qGIhDsZr1F2Duqxeu0nGWKC%2BNqdElInBu0JX31UeGYHJc77AONTKgBmbn5sk%2FIWWlpN5Z%2BQW7KaHt%2F%2Bk2nzus%2FAYyr%2BsigQwcrwMxK1WgxkBWPxx%2BtNGMidCbQyZNrtvbZMjahGW3Cdx1ae79Z6oBPXXaiSVY3EpbxRvAIbaWbh3Nydu0g0v1yWLWMVokSkm%2BwIFnj&X-Amz-Signature=3173a8ff8ea4115d886388c343e1ddbe5f690c9738a9ec0595be9b4765b666bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY5GY3O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHNhZtgkK8tdRTBAPsLzdeXsC7I3suW%2FuDUzdTIM1c4gAiEArY608FUPnThUTMckhfLWkQ5ydtk2Ii2IxQWh4oqz%2FWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpzWu45a%2BuB5o57circA6M6HEyyFss51n9q3eovVgHHjJr4z1bYho4w2BS43ufUEcxkZio5KYN1h9syvvHQjj20Ls8mr1WPF10dCQ4TacgrKKLfYUk%2FuVylPYHeuVbt8IvwofGJtfNh16su6O23L%2BriSesEqJ5N7gyMxzE4IDbJcPVfUGnYif9Gt2tgt2WYEsLwBuS5ZvtUIiOmjhZMs5O73Hu2ZwKOgebG4cDNJAEJY40vzkco3yCWsEBTITIpBV8SqCh4hNN3odBA65L0DGLlhp0TfQLfbHgfTXpNWjMedrHsG1ZXCv2hacft%2B1diU0BpdMAmjC6YqSpSIQ2nulKcdO85VQTU8a3udL%2F95QtOtdwzetDKBg0iTWj781OANG9bez78mvbhd684t6HCXH%2BvPBbbNe8dRQehZVg2frQcdYCnZhEob0m%2BlEpwi%2FfChPUOjp3X9VNnMuAD5MImYXtEIldgmBdZmIP2juLyjTYyryL5AmIHnpggFs8z%2FlCjphXTSLb0hftrodYbgSKKZ%2Befs73bWP15wpUZr4GejXZ5lidmWEkdbpFWvtiPx4TSzjn6u2tIfgy06EE6MGtOgZc93v76mVfkpSpEMNrbGzhJ5Yo93QMhJinbLF6XT8YfekiSXNyjTyM8kR7GMLmFzsAGOqUBh5fwBGrA0%2Bb2HC2rq5Mfi3qGIhDsZr1F2Duqxeu0nGWKC%2BNqdElInBu0JX31UeGYHJc77AONTKgBmbn5sk%2FIWWlpN5Z%2BQW7KaHt%2F%2Bk2nzus%2FAYyr%2BsigQwcrwMxK1WgxkBWPxx%2BtNGMidCbQyZNrtvbZMjahGW3Cdx1ae79Z6oBPXXaiSVY3EpbxRvAIbaWbh3Nydu0g0v1yWLWMVokSkm%2BwIFnj&X-Amz-Signature=f8ab8f9fb0460bda37a1fbdbc8396a5cd1f62060fd452e37a89c0051f0847286&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY5GY3O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHNhZtgkK8tdRTBAPsLzdeXsC7I3suW%2FuDUzdTIM1c4gAiEArY608FUPnThUTMckhfLWkQ5ydtk2Ii2IxQWh4oqz%2FWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpzWu45a%2BuB5o57circA6M6HEyyFss51n9q3eovVgHHjJr4z1bYho4w2BS43ufUEcxkZio5KYN1h9syvvHQjj20Ls8mr1WPF10dCQ4TacgrKKLfYUk%2FuVylPYHeuVbt8IvwofGJtfNh16su6O23L%2BriSesEqJ5N7gyMxzE4IDbJcPVfUGnYif9Gt2tgt2WYEsLwBuS5ZvtUIiOmjhZMs5O73Hu2ZwKOgebG4cDNJAEJY40vzkco3yCWsEBTITIpBV8SqCh4hNN3odBA65L0DGLlhp0TfQLfbHgfTXpNWjMedrHsG1ZXCv2hacft%2B1diU0BpdMAmjC6YqSpSIQ2nulKcdO85VQTU8a3udL%2F95QtOtdwzetDKBg0iTWj781OANG9bez78mvbhd684t6HCXH%2BvPBbbNe8dRQehZVg2frQcdYCnZhEob0m%2BlEpwi%2FfChPUOjp3X9VNnMuAD5MImYXtEIldgmBdZmIP2juLyjTYyryL5AmIHnpggFs8z%2FlCjphXTSLb0hftrodYbgSKKZ%2Befs73bWP15wpUZr4GejXZ5lidmWEkdbpFWvtiPx4TSzjn6u2tIfgy06EE6MGtOgZc93v76mVfkpSpEMNrbGzhJ5Yo93QMhJinbLF6XT8YfekiSXNyjTyM8kR7GMLmFzsAGOqUBh5fwBGrA0%2Bb2HC2rq5Mfi3qGIhDsZr1F2Duqxeu0nGWKC%2BNqdElInBu0JX31UeGYHJc77AONTKgBmbn5sk%2FIWWlpN5Z%2BQW7KaHt%2F%2Bk2nzus%2FAYyr%2BsigQwcrwMxK1WgxkBWPxx%2BtNGMidCbQyZNrtvbZMjahGW3Cdx1ae79Z6oBPXXaiSVY3EpbxRvAIbaWbh3Nydu0g0v1yWLWMVokSkm%2BwIFnj&X-Amz-Signature=5982f526fb83761cffa3d6cb60e4462e8fa7ac16f84ee1fafed81f275b718031&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY5GY3O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHNhZtgkK8tdRTBAPsLzdeXsC7I3suW%2FuDUzdTIM1c4gAiEArY608FUPnThUTMckhfLWkQ5ydtk2Ii2IxQWh4oqz%2FWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpzWu45a%2BuB5o57circA6M6HEyyFss51n9q3eovVgHHjJr4z1bYho4w2BS43ufUEcxkZio5KYN1h9syvvHQjj20Ls8mr1WPF10dCQ4TacgrKKLfYUk%2FuVylPYHeuVbt8IvwofGJtfNh16su6O23L%2BriSesEqJ5N7gyMxzE4IDbJcPVfUGnYif9Gt2tgt2WYEsLwBuS5ZvtUIiOmjhZMs5O73Hu2ZwKOgebG4cDNJAEJY40vzkco3yCWsEBTITIpBV8SqCh4hNN3odBA65L0DGLlhp0TfQLfbHgfTXpNWjMedrHsG1ZXCv2hacft%2B1diU0BpdMAmjC6YqSpSIQ2nulKcdO85VQTU8a3udL%2F95QtOtdwzetDKBg0iTWj781OANG9bez78mvbhd684t6HCXH%2BvPBbbNe8dRQehZVg2frQcdYCnZhEob0m%2BlEpwi%2FfChPUOjp3X9VNnMuAD5MImYXtEIldgmBdZmIP2juLyjTYyryL5AmIHnpggFs8z%2FlCjphXTSLb0hftrodYbgSKKZ%2Befs73bWP15wpUZr4GejXZ5lidmWEkdbpFWvtiPx4TSzjn6u2tIfgy06EE6MGtOgZc93v76mVfkpSpEMNrbGzhJ5Yo93QMhJinbLF6XT8YfekiSXNyjTyM8kR7GMLmFzsAGOqUBh5fwBGrA0%2Bb2HC2rq5Mfi3qGIhDsZr1F2Duqxeu0nGWKC%2BNqdElInBu0JX31UeGYHJc77AONTKgBmbn5sk%2FIWWlpN5Z%2BQW7KaHt%2F%2Bk2nzus%2FAYyr%2BsigQwcrwMxK1WgxkBWPxx%2BtNGMidCbQyZNrtvbZMjahGW3Cdx1ae79Z6oBPXXaiSVY3EpbxRvAIbaWbh3Nydu0g0v1yWLWMVokSkm%2BwIFnj&X-Amz-Signature=42285ee98bc6c83e5beaccd85cef413add73ef24e2c46752497fb0322a35dd92&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TY5GY3O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHNhZtgkK8tdRTBAPsLzdeXsC7I3suW%2FuDUzdTIM1c4gAiEArY608FUPnThUTMckhfLWkQ5ydtk2Ii2IxQWh4oqz%2FWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpzWu45a%2BuB5o57circA6M6HEyyFss51n9q3eovVgHHjJr4z1bYho4w2BS43ufUEcxkZio5KYN1h9syvvHQjj20Ls8mr1WPF10dCQ4TacgrKKLfYUk%2FuVylPYHeuVbt8IvwofGJtfNh16su6O23L%2BriSesEqJ5N7gyMxzE4IDbJcPVfUGnYif9Gt2tgt2WYEsLwBuS5ZvtUIiOmjhZMs5O73Hu2ZwKOgebG4cDNJAEJY40vzkco3yCWsEBTITIpBV8SqCh4hNN3odBA65L0DGLlhp0TfQLfbHgfTXpNWjMedrHsG1ZXCv2hacft%2B1diU0BpdMAmjC6YqSpSIQ2nulKcdO85VQTU8a3udL%2F95QtOtdwzetDKBg0iTWj781OANG9bez78mvbhd684t6HCXH%2BvPBbbNe8dRQehZVg2frQcdYCnZhEob0m%2BlEpwi%2FfChPUOjp3X9VNnMuAD5MImYXtEIldgmBdZmIP2juLyjTYyryL5AmIHnpggFs8z%2FlCjphXTSLb0hftrodYbgSKKZ%2Befs73bWP15wpUZr4GejXZ5lidmWEkdbpFWvtiPx4TSzjn6u2tIfgy06EE6MGtOgZc93v76mVfkpSpEMNrbGzhJ5Yo93QMhJinbLF6XT8YfekiSXNyjTyM8kR7GMLmFzsAGOqUBh5fwBGrA0%2Bb2HC2rq5Mfi3qGIhDsZr1F2Duqxeu0nGWKC%2BNqdElInBu0JX31UeGYHJc77AONTKgBmbn5sk%2FIWWlpN5Z%2BQW7KaHt%2F%2Bk2nzus%2FAYyr%2BsigQwcrwMxK1WgxkBWPxx%2BtNGMidCbQyZNrtvbZMjahGW3Cdx1ae79Z6oBPXXaiSVY3EpbxRvAIbaWbh3Nydu0g0v1yWLWMVokSkm%2BwIFnj&X-Amz-Signature=57b6ca0055dfca260a1c649b71c843f0a59303362ef7c11233caa4c2040b99ab&X-Amz-SignedHeaders=host&x-id=GetObject)
