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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYZSCGD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHncL6CAhlu7i2Cr1XHwo0DDDobvU6In6IW8ruXhF%2FJHAiEA1XLeryKvrVfJk5UOGbHcZNJ4woUfeqKEnA1gRXNHQDIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHEhcQWQNMUmdysjXircA9DaLRdTYa%2BdBJ9%2F8FqwGFU6TS2kDgilGkyZtpCrZ84ysajNoCWip%2FeoGK%2BG%2F3hxLhS9qcLWXrtaKpU3E2gBUsjqIVjJsOr5iuFrWc%2FLMWEiFZasn6oVcS9vkAWp7zZh1jv3fz7Fln34pT2HALq0By1VOgEsVO9yQ5TFaYHtVG6ZkaVuxAESCfDJKqXxt4n8tIwXyPydkFX3NUgIMcmZuqpsBDWVWzkBHZJ4AvolDR0y5T31%2BRyCewSYhoYOnapR9soumSl2ps6JEjcBmETkd25Jip0cU2j0hCWwNP871aRaAajeU5FmZqitN06o%2BWMsD9HwQiRGGAMoYNylg%2F063%2F1fXIEFq35wLVrOFSXdB0LVAyxywUS1yoVHWczmP3D63izZxH%2Bj9BktHBY%2B%2FwQMS27ryDa1%2BLcsMzsjHoACSc9AlvwnBKcd%2BnYTA0caw%2BCh9Rts9j1fOgTNC%2BoQ%2BVWWomD5SzjgzJoF4c3oSeuRCl3SV%2B%2F%2B35xHY5rOUxL2uW9YwTzpcMLxh7JAWe%2Bx%2B7niX2B%2F6bg03YKcpbLU65YmIGK8bDqylA0nFA6YxDUpshvDme%2FqB%2BzVzvSVeN8TvExlfk%2BGlEPufWJ9QFgbNNEG%2BsxFWCSjBR6UJUx5MBBGMLuUgsAGOqUBK86DeHa5sS%2FHBSrLZZpTARV6%2BLASEur9UE8dfmGs1dxyzFB%2F2UWFtfXRGmpOx7cjTf6p3DBGQB5LAI4eCf587FSie6R%2FS3OrfhiW0PeXmzOPStG%2B57vlQa%2BDMwpz6faLllLvV1DFAKuaLMrtsprW6qayCauliImQQAo6Y%2Fv8GWdxvQpTKatB2UTGvTtfhUWQmH1ueRsjj56E0tYLy19xQnxA4JmX&X-Amz-Signature=0d243aa1bcb548d3a21967bdb69c231f69eda52ec50db883cb5fb4055c6c4667&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYZSCGD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHncL6CAhlu7i2Cr1XHwo0DDDobvU6In6IW8ruXhF%2FJHAiEA1XLeryKvrVfJk5UOGbHcZNJ4woUfeqKEnA1gRXNHQDIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHEhcQWQNMUmdysjXircA9DaLRdTYa%2BdBJ9%2F8FqwGFU6TS2kDgilGkyZtpCrZ84ysajNoCWip%2FeoGK%2BG%2F3hxLhS9qcLWXrtaKpU3E2gBUsjqIVjJsOr5iuFrWc%2FLMWEiFZasn6oVcS9vkAWp7zZh1jv3fz7Fln34pT2HALq0By1VOgEsVO9yQ5TFaYHtVG6ZkaVuxAESCfDJKqXxt4n8tIwXyPydkFX3NUgIMcmZuqpsBDWVWzkBHZJ4AvolDR0y5T31%2BRyCewSYhoYOnapR9soumSl2ps6JEjcBmETkd25Jip0cU2j0hCWwNP871aRaAajeU5FmZqitN06o%2BWMsD9HwQiRGGAMoYNylg%2F063%2F1fXIEFq35wLVrOFSXdB0LVAyxywUS1yoVHWczmP3D63izZxH%2Bj9BktHBY%2B%2FwQMS27ryDa1%2BLcsMzsjHoACSc9AlvwnBKcd%2BnYTA0caw%2BCh9Rts9j1fOgTNC%2BoQ%2BVWWomD5SzjgzJoF4c3oSeuRCl3SV%2B%2F%2B35xHY5rOUxL2uW9YwTzpcMLxh7JAWe%2Bx%2B7niX2B%2F6bg03YKcpbLU65YmIGK8bDqylA0nFA6YxDUpshvDme%2FqB%2BzVzvSVeN8TvExlfk%2BGlEPufWJ9QFgbNNEG%2BsxFWCSjBR6UJUx5MBBGMLuUgsAGOqUBK86DeHa5sS%2FHBSrLZZpTARV6%2BLASEur9UE8dfmGs1dxyzFB%2F2UWFtfXRGmpOx7cjTf6p3DBGQB5LAI4eCf587FSie6R%2FS3OrfhiW0PeXmzOPStG%2B57vlQa%2BDMwpz6faLllLvV1DFAKuaLMrtsprW6qayCauliImQQAo6Y%2Fv8GWdxvQpTKatB2UTGvTtfhUWQmH1ueRsjj56E0tYLy19xQnxA4JmX&X-Amz-Signature=532ac9de96ea2bbc6df318d01f27293323dbb451983c6ff88449fb8b0dbe9bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYZSCGD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHncL6CAhlu7i2Cr1XHwo0DDDobvU6In6IW8ruXhF%2FJHAiEA1XLeryKvrVfJk5UOGbHcZNJ4woUfeqKEnA1gRXNHQDIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHEhcQWQNMUmdysjXircA9DaLRdTYa%2BdBJ9%2F8FqwGFU6TS2kDgilGkyZtpCrZ84ysajNoCWip%2FeoGK%2BG%2F3hxLhS9qcLWXrtaKpU3E2gBUsjqIVjJsOr5iuFrWc%2FLMWEiFZasn6oVcS9vkAWp7zZh1jv3fz7Fln34pT2HALq0By1VOgEsVO9yQ5TFaYHtVG6ZkaVuxAESCfDJKqXxt4n8tIwXyPydkFX3NUgIMcmZuqpsBDWVWzkBHZJ4AvolDR0y5T31%2BRyCewSYhoYOnapR9soumSl2ps6JEjcBmETkd25Jip0cU2j0hCWwNP871aRaAajeU5FmZqitN06o%2BWMsD9HwQiRGGAMoYNylg%2F063%2F1fXIEFq35wLVrOFSXdB0LVAyxywUS1yoVHWczmP3D63izZxH%2Bj9BktHBY%2B%2FwQMS27ryDa1%2BLcsMzsjHoACSc9AlvwnBKcd%2BnYTA0caw%2BCh9Rts9j1fOgTNC%2BoQ%2BVWWomD5SzjgzJoF4c3oSeuRCl3SV%2B%2F%2B35xHY5rOUxL2uW9YwTzpcMLxh7JAWe%2Bx%2B7niX2B%2F6bg03YKcpbLU65YmIGK8bDqylA0nFA6YxDUpshvDme%2FqB%2BzVzvSVeN8TvExlfk%2BGlEPufWJ9QFgbNNEG%2BsxFWCSjBR6UJUx5MBBGMLuUgsAGOqUBK86DeHa5sS%2FHBSrLZZpTARV6%2BLASEur9UE8dfmGs1dxyzFB%2F2UWFtfXRGmpOx7cjTf6p3DBGQB5LAI4eCf587FSie6R%2FS3OrfhiW0PeXmzOPStG%2B57vlQa%2BDMwpz6faLllLvV1DFAKuaLMrtsprW6qayCauliImQQAo6Y%2Fv8GWdxvQpTKatB2UTGvTtfhUWQmH1ueRsjj56E0tYLy19xQnxA4JmX&X-Amz-Signature=fce7b46b621d135113907bd7285226cbf27abdf3f0b07347e3d621a91ab34fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYZSCGD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHncL6CAhlu7i2Cr1XHwo0DDDobvU6In6IW8ruXhF%2FJHAiEA1XLeryKvrVfJk5UOGbHcZNJ4woUfeqKEnA1gRXNHQDIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHEhcQWQNMUmdysjXircA9DaLRdTYa%2BdBJ9%2F8FqwGFU6TS2kDgilGkyZtpCrZ84ysajNoCWip%2FeoGK%2BG%2F3hxLhS9qcLWXrtaKpU3E2gBUsjqIVjJsOr5iuFrWc%2FLMWEiFZasn6oVcS9vkAWp7zZh1jv3fz7Fln34pT2HALq0By1VOgEsVO9yQ5TFaYHtVG6ZkaVuxAESCfDJKqXxt4n8tIwXyPydkFX3NUgIMcmZuqpsBDWVWzkBHZJ4AvolDR0y5T31%2BRyCewSYhoYOnapR9soumSl2ps6JEjcBmETkd25Jip0cU2j0hCWwNP871aRaAajeU5FmZqitN06o%2BWMsD9HwQiRGGAMoYNylg%2F063%2F1fXIEFq35wLVrOFSXdB0LVAyxywUS1yoVHWczmP3D63izZxH%2Bj9BktHBY%2B%2FwQMS27ryDa1%2BLcsMzsjHoACSc9AlvwnBKcd%2BnYTA0caw%2BCh9Rts9j1fOgTNC%2BoQ%2BVWWomD5SzjgzJoF4c3oSeuRCl3SV%2B%2F%2B35xHY5rOUxL2uW9YwTzpcMLxh7JAWe%2Bx%2B7niX2B%2F6bg03YKcpbLU65YmIGK8bDqylA0nFA6YxDUpshvDme%2FqB%2BzVzvSVeN8TvExlfk%2BGlEPufWJ9QFgbNNEG%2BsxFWCSjBR6UJUx5MBBGMLuUgsAGOqUBK86DeHa5sS%2FHBSrLZZpTARV6%2BLASEur9UE8dfmGs1dxyzFB%2F2UWFtfXRGmpOx7cjTf6p3DBGQB5LAI4eCf587FSie6R%2FS3OrfhiW0PeXmzOPStG%2B57vlQa%2BDMwpz6faLllLvV1DFAKuaLMrtsprW6qayCauliImQQAo6Y%2Fv8GWdxvQpTKatB2UTGvTtfhUWQmH1ueRsjj56E0tYLy19xQnxA4JmX&X-Amz-Signature=ca33822b0336e12501a0506f455f839262c5e41f9b1e057f795029e293771fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYZSCGD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHncL6CAhlu7i2Cr1XHwo0DDDobvU6In6IW8ruXhF%2FJHAiEA1XLeryKvrVfJk5UOGbHcZNJ4woUfeqKEnA1gRXNHQDIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHEhcQWQNMUmdysjXircA9DaLRdTYa%2BdBJ9%2F8FqwGFU6TS2kDgilGkyZtpCrZ84ysajNoCWip%2FeoGK%2BG%2F3hxLhS9qcLWXrtaKpU3E2gBUsjqIVjJsOr5iuFrWc%2FLMWEiFZasn6oVcS9vkAWp7zZh1jv3fz7Fln34pT2HALq0By1VOgEsVO9yQ5TFaYHtVG6ZkaVuxAESCfDJKqXxt4n8tIwXyPydkFX3NUgIMcmZuqpsBDWVWzkBHZJ4AvolDR0y5T31%2BRyCewSYhoYOnapR9soumSl2ps6JEjcBmETkd25Jip0cU2j0hCWwNP871aRaAajeU5FmZqitN06o%2BWMsD9HwQiRGGAMoYNylg%2F063%2F1fXIEFq35wLVrOFSXdB0LVAyxywUS1yoVHWczmP3D63izZxH%2Bj9BktHBY%2B%2FwQMS27ryDa1%2BLcsMzsjHoACSc9AlvwnBKcd%2BnYTA0caw%2BCh9Rts9j1fOgTNC%2BoQ%2BVWWomD5SzjgzJoF4c3oSeuRCl3SV%2B%2F%2B35xHY5rOUxL2uW9YwTzpcMLxh7JAWe%2Bx%2B7niX2B%2F6bg03YKcpbLU65YmIGK8bDqylA0nFA6YxDUpshvDme%2FqB%2BzVzvSVeN8TvExlfk%2BGlEPufWJ9QFgbNNEG%2BsxFWCSjBR6UJUx5MBBGMLuUgsAGOqUBK86DeHa5sS%2FHBSrLZZpTARV6%2BLASEur9UE8dfmGs1dxyzFB%2F2UWFtfXRGmpOx7cjTf6p3DBGQB5LAI4eCf587FSie6R%2FS3OrfhiW0PeXmzOPStG%2B57vlQa%2BDMwpz6faLllLvV1DFAKuaLMrtsprW6qayCauliImQQAo6Y%2Fv8GWdxvQpTKatB2UTGvTtfhUWQmH1ueRsjj56E0tYLy19xQnxA4JmX&X-Amz-Signature=4239bcdec47a9639aa488e2e66e4ddac951c7146dc2323fea934682d6c476439&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYZSCGD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHncL6CAhlu7i2Cr1XHwo0DDDobvU6In6IW8ruXhF%2FJHAiEA1XLeryKvrVfJk5UOGbHcZNJ4woUfeqKEnA1gRXNHQDIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHEhcQWQNMUmdysjXircA9DaLRdTYa%2BdBJ9%2F8FqwGFU6TS2kDgilGkyZtpCrZ84ysajNoCWip%2FeoGK%2BG%2F3hxLhS9qcLWXrtaKpU3E2gBUsjqIVjJsOr5iuFrWc%2FLMWEiFZasn6oVcS9vkAWp7zZh1jv3fz7Fln34pT2HALq0By1VOgEsVO9yQ5TFaYHtVG6ZkaVuxAESCfDJKqXxt4n8tIwXyPydkFX3NUgIMcmZuqpsBDWVWzkBHZJ4AvolDR0y5T31%2BRyCewSYhoYOnapR9soumSl2ps6JEjcBmETkd25Jip0cU2j0hCWwNP871aRaAajeU5FmZqitN06o%2BWMsD9HwQiRGGAMoYNylg%2F063%2F1fXIEFq35wLVrOFSXdB0LVAyxywUS1yoVHWczmP3D63izZxH%2Bj9BktHBY%2B%2FwQMS27ryDa1%2BLcsMzsjHoACSc9AlvwnBKcd%2BnYTA0caw%2BCh9Rts9j1fOgTNC%2BoQ%2BVWWomD5SzjgzJoF4c3oSeuRCl3SV%2B%2F%2B35xHY5rOUxL2uW9YwTzpcMLxh7JAWe%2Bx%2B7niX2B%2F6bg03YKcpbLU65YmIGK8bDqylA0nFA6YxDUpshvDme%2FqB%2BzVzvSVeN8TvExlfk%2BGlEPufWJ9QFgbNNEG%2BsxFWCSjBR6UJUx5MBBGMLuUgsAGOqUBK86DeHa5sS%2FHBSrLZZpTARV6%2BLASEur9UE8dfmGs1dxyzFB%2F2UWFtfXRGmpOx7cjTf6p3DBGQB5LAI4eCf587FSie6R%2FS3OrfhiW0PeXmzOPStG%2B57vlQa%2BDMwpz6faLllLvV1DFAKuaLMrtsprW6qayCauliImQQAo6Y%2Fv8GWdxvQpTKatB2UTGvTtfhUWQmH1ueRsjj56E0tYLy19xQnxA4JmX&X-Amz-Signature=729cd90c221edf3626fef1603f3b4e410dfcd481fe5b49f6f2313e8a9d4239ba&X-Amz-SignedHeaders=host&x-id=GetObject)
