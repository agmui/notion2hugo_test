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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAISEGBG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICaVIOurEn1gFH2qlj9Z4LX75Ju982OI9gST488XtQlKAiBN0kZIuy0Ev3dUL4P9MF77gAjK23U2YRpSh6D%2Bj3DBvyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd8VvrPpO9AIqBuAKtwDdTgVk66BXnL6oJLEIpxBCiTVfQ73DbdIkadLJRvPSVlel%2FQN%2BZ0LbBSd3JQQIJL1L2aZllSX5mSPJylPCngfqoXgrqaXXZ4jOe0tutaVgraXjtABMfySmXXJnh2KtaXdjyIhdsSZsN6ZgCtOVkvBCBuTYFXNJr5uY3lWvmZA8ioBRBPvXTLSis6%2FzTrm1qvCbQZuqvZvJHe29oBxuJR9rau6XJs5OMSFJfxrAVDME8pmon4%2Bj3T5m%2BKMexHkLR2i258V3qNlWXaL2PP1fAiyakrx%2BFpo5VRv%2BgVJWe3nDeT18rWSA4CPDj8hlydbjF%2BNYp4RAbjn298xbKS8K4JBOHF7KRpLuvZ7KhOacsgGY%2Ffu0WUJfGgcFi98TGe6Z%2BvL3%2BTaB06SjIxVPBGYVqwFdrPK%2FgIn7fE34zxPMhxz%2BS3NRY4q7wNC8KFmX0R4qGmHpxPC9PC9qvNi0GEjrcHK5hqKIasc7WjwWO0wLCBzvyrzBsA%2BSdSDK7Fi20KDjsMkMhurcqLTnNiTgKVOYQV2Vbp6n%2Bqgio%2FZDvrURSv7b2N6YPt6wGwCIVyHptmMe42OyZfs0bOgsBD05VYl2ImfpPp2kx7upk%2BdFHvAwbsErU5KY%2BYA0IMfFMNAJoQwyumiwAY6pgF5FIFuIRXMMemSYNqi2vzOq1iKyiDvMs31MyF5HkMLUkNTpj2cKg9YqHccjjxEpsLkvL%2BFf2O0BSNuFXsGKRU3uSdue124Q7Jxu96DBTb4%2FoLoAyvZU%2FMPm9UFwdw9l1N3GK2BodMJzc7gRA5zVbr7QBoOSegu%2B1DVAW5%2FgkrhzRv9tf0oMGo0tzQ1PM%2BQOWNAfarE3umGsSolbhiEo3D4QoUBKOq3&X-Amz-Signature=4a565acc5ffa7cb4bbd56498dc1f122785452412c1dcf4b4e5fa90f4f1976bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAISEGBG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICaVIOurEn1gFH2qlj9Z4LX75Ju982OI9gST488XtQlKAiBN0kZIuy0Ev3dUL4P9MF77gAjK23U2YRpSh6D%2Bj3DBvyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd8VvrPpO9AIqBuAKtwDdTgVk66BXnL6oJLEIpxBCiTVfQ73DbdIkadLJRvPSVlel%2FQN%2BZ0LbBSd3JQQIJL1L2aZllSX5mSPJylPCngfqoXgrqaXXZ4jOe0tutaVgraXjtABMfySmXXJnh2KtaXdjyIhdsSZsN6ZgCtOVkvBCBuTYFXNJr5uY3lWvmZA8ioBRBPvXTLSis6%2FzTrm1qvCbQZuqvZvJHe29oBxuJR9rau6XJs5OMSFJfxrAVDME8pmon4%2Bj3T5m%2BKMexHkLR2i258V3qNlWXaL2PP1fAiyakrx%2BFpo5VRv%2BgVJWe3nDeT18rWSA4CPDj8hlydbjF%2BNYp4RAbjn298xbKS8K4JBOHF7KRpLuvZ7KhOacsgGY%2Ffu0WUJfGgcFi98TGe6Z%2BvL3%2BTaB06SjIxVPBGYVqwFdrPK%2FgIn7fE34zxPMhxz%2BS3NRY4q7wNC8KFmX0R4qGmHpxPC9PC9qvNi0GEjrcHK5hqKIasc7WjwWO0wLCBzvyrzBsA%2BSdSDK7Fi20KDjsMkMhurcqLTnNiTgKVOYQV2Vbp6n%2Bqgio%2FZDvrURSv7b2N6YPt6wGwCIVyHptmMe42OyZfs0bOgsBD05VYl2ImfpPp2kx7upk%2BdFHvAwbsErU5KY%2BYA0IMfFMNAJoQwyumiwAY6pgF5FIFuIRXMMemSYNqi2vzOq1iKyiDvMs31MyF5HkMLUkNTpj2cKg9YqHccjjxEpsLkvL%2BFf2O0BSNuFXsGKRU3uSdue124Q7Jxu96DBTb4%2FoLoAyvZU%2FMPm9UFwdw9l1N3GK2BodMJzc7gRA5zVbr7QBoOSegu%2B1DVAW5%2FgkrhzRv9tf0oMGo0tzQ1PM%2BQOWNAfarE3umGsSolbhiEo3D4QoUBKOq3&X-Amz-Signature=c2880fe3aea161aff205653db6608b35b61e185c4b0328fbd52861ce26344ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAISEGBG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICaVIOurEn1gFH2qlj9Z4LX75Ju982OI9gST488XtQlKAiBN0kZIuy0Ev3dUL4P9MF77gAjK23U2YRpSh6D%2Bj3DBvyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd8VvrPpO9AIqBuAKtwDdTgVk66BXnL6oJLEIpxBCiTVfQ73DbdIkadLJRvPSVlel%2FQN%2BZ0LbBSd3JQQIJL1L2aZllSX5mSPJylPCngfqoXgrqaXXZ4jOe0tutaVgraXjtABMfySmXXJnh2KtaXdjyIhdsSZsN6ZgCtOVkvBCBuTYFXNJr5uY3lWvmZA8ioBRBPvXTLSis6%2FzTrm1qvCbQZuqvZvJHe29oBxuJR9rau6XJs5OMSFJfxrAVDME8pmon4%2Bj3T5m%2BKMexHkLR2i258V3qNlWXaL2PP1fAiyakrx%2BFpo5VRv%2BgVJWe3nDeT18rWSA4CPDj8hlydbjF%2BNYp4RAbjn298xbKS8K4JBOHF7KRpLuvZ7KhOacsgGY%2Ffu0WUJfGgcFi98TGe6Z%2BvL3%2BTaB06SjIxVPBGYVqwFdrPK%2FgIn7fE34zxPMhxz%2BS3NRY4q7wNC8KFmX0R4qGmHpxPC9PC9qvNi0GEjrcHK5hqKIasc7WjwWO0wLCBzvyrzBsA%2BSdSDK7Fi20KDjsMkMhurcqLTnNiTgKVOYQV2Vbp6n%2Bqgio%2FZDvrURSv7b2N6YPt6wGwCIVyHptmMe42OyZfs0bOgsBD05VYl2ImfpPp2kx7upk%2BdFHvAwbsErU5KY%2BYA0IMfFMNAJoQwyumiwAY6pgF5FIFuIRXMMemSYNqi2vzOq1iKyiDvMs31MyF5HkMLUkNTpj2cKg9YqHccjjxEpsLkvL%2BFf2O0BSNuFXsGKRU3uSdue124Q7Jxu96DBTb4%2FoLoAyvZU%2FMPm9UFwdw9l1N3GK2BodMJzc7gRA5zVbr7QBoOSegu%2B1DVAW5%2FgkrhzRv9tf0oMGo0tzQ1PM%2BQOWNAfarE3umGsSolbhiEo3D4QoUBKOq3&X-Amz-Signature=786a11888418bf8c88e3c0df1a1b116b73660f57c918f2341ca126ecd3cd1bee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAISEGBG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICaVIOurEn1gFH2qlj9Z4LX75Ju982OI9gST488XtQlKAiBN0kZIuy0Ev3dUL4P9MF77gAjK23U2YRpSh6D%2Bj3DBvyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd8VvrPpO9AIqBuAKtwDdTgVk66BXnL6oJLEIpxBCiTVfQ73DbdIkadLJRvPSVlel%2FQN%2BZ0LbBSd3JQQIJL1L2aZllSX5mSPJylPCngfqoXgrqaXXZ4jOe0tutaVgraXjtABMfySmXXJnh2KtaXdjyIhdsSZsN6ZgCtOVkvBCBuTYFXNJr5uY3lWvmZA8ioBRBPvXTLSis6%2FzTrm1qvCbQZuqvZvJHe29oBxuJR9rau6XJs5OMSFJfxrAVDME8pmon4%2Bj3T5m%2BKMexHkLR2i258V3qNlWXaL2PP1fAiyakrx%2BFpo5VRv%2BgVJWe3nDeT18rWSA4CPDj8hlydbjF%2BNYp4RAbjn298xbKS8K4JBOHF7KRpLuvZ7KhOacsgGY%2Ffu0WUJfGgcFi98TGe6Z%2BvL3%2BTaB06SjIxVPBGYVqwFdrPK%2FgIn7fE34zxPMhxz%2BS3NRY4q7wNC8KFmX0R4qGmHpxPC9PC9qvNi0GEjrcHK5hqKIasc7WjwWO0wLCBzvyrzBsA%2BSdSDK7Fi20KDjsMkMhurcqLTnNiTgKVOYQV2Vbp6n%2Bqgio%2FZDvrURSv7b2N6YPt6wGwCIVyHptmMe42OyZfs0bOgsBD05VYl2ImfpPp2kx7upk%2BdFHvAwbsErU5KY%2BYA0IMfFMNAJoQwyumiwAY6pgF5FIFuIRXMMemSYNqi2vzOq1iKyiDvMs31MyF5HkMLUkNTpj2cKg9YqHccjjxEpsLkvL%2BFf2O0BSNuFXsGKRU3uSdue124Q7Jxu96DBTb4%2FoLoAyvZU%2FMPm9UFwdw9l1N3GK2BodMJzc7gRA5zVbr7QBoOSegu%2B1DVAW5%2FgkrhzRv9tf0oMGo0tzQ1PM%2BQOWNAfarE3umGsSolbhiEo3D4QoUBKOq3&X-Amz-Signature=abd87f20218d9e4074e84bf2e7b58414c3ef586e1f82ca52c7a5da80e88df492&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAISEGBG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICaVIOurEn1gFH2qlj9Z4LX75Ju982OI9gST488XtQlKAiBN0kZIuy0Ev3dUL4P9MF77gAjK23U2YRpSh6D%2Bj3DBvyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd8VvrPpO9AIqBuAKtwDdTgVk66BXnL6oJLEIpxBCiTVfQ73DbdIkadLJRvPSVlel%2FQN%2BZ0LbBSd3JQQIJL1L2aZllSX5mSPJylPCngfqoXgrqaXXZ4jOe0tutaVgraXjtABMfySmXXJnh2KtaXdjyIhdsSZsN6ZgCtOVkvBCBuTYFXNJr5uY3lWvmZA8ioBRBPvXTLSis6%2FzTrm1qvCbQZuqvZvJHe29oBxuJR9rau6XJs5OMSFJfxrAVDME8pmon4%2Bj3T5m%2BKMexHkLR2i258V3qNlWXaL2PP1fAiyakrx%2BFpo5VRv%2BgVJWe3nDeT18rWSA4CPDj8hlydbjF%2BNYp4RAbjn298xbKS8K4JBOHF7KRpLuvZ7KhOacsgGY%2Ffu0WUJfGgcFi98TGe6Z%2BvL3%2BTaB06SjIxVPBGYVqwFdrPK%2FgIn7fE34zxPMhxz%2BS3NRY4q7wNC8KFmX0R4qGmHpxPC9PC9qvNi0GEjrcHK5hqKIasc7WjwWO0wLCBzvyrzBsA%2BSdSDK7Fi20KDjsMkMhurcqLTnNiTgKVOYQV2Vbp6n%2Bqgio%2FZDvrURSv7b2N6YPt6wGwCIVyHptmMe42OyZfs0bOgsBD05VYl2ImfpPp2kx7upk%2BdFHvAwbsErU5KY%2BYA0IMfFMNAJoQwyumiwAY6pgF5FIFuIRXMMemSYNqi2vzOq1iKyiDvMs31MyF5HkMLUkNTpj2cKg9YqHccjjxEpsLkvL%2BFf2O0BSNuFXsGKRU3uSdue124Q7Jxu96DBTb4%2FoLoAyvZU%2FMPm9UFwdw9l1N3GK2BodMJzc7gRA5zVbr7QBoOSegu%2B1DVAW5%2FgkrhzRv9tf0oMGo0tzQ1PM%2BQOWNAfarE3umGsSolbhiEo3D4QoUBKOq3&X-Amz-Signature=19f4f21566d4d5309dc2e7bc14a72038cbd12217ab66f0a4abbc7107475ccf8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAISEGBG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICaVIOurEn1gFH2qlj9Z4LX75Ju982OI9gST488XtQlKAiBN0kZIuy0Ev3dUL4P9MF77gAjK23U2YRpSh6D%2Bj3DBvyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhd8VvrPpO9AIqBuAKtwDdTgVk66BXnL6oJLEIpxBCiTVfQ73DbdIkadLJRvPSVlel%2FQN%2BZ0LbBSd3JQQIJL1L2aZllSX5mSPJylPCngfqoXgrqaXXZ4jOe0tutaVgraXjtABMfySmXXJnh2KtaXdjyIhdsSZsN6ZgCtOVkvBCBuTYFXNJr5uY3lWvmZA8ioBRBPvXTLSis6%2FzTrm1qvCbQZuqvZvJHe29oBxuJR9rau6XJs5OMSFJfxrAVDME8pmon4%2Bj3T5m%2BKMexHkLR2i258V3qNlWXaL2PP1fAiyakrx%2BFpo5VRv%2BgVJWe3nDeT18rWSA4CPDj8hlydbjF%2BNYp4RAbjn298xbKS8K4JBOHF7KRpLuvZ7KhOacsgGY%2Ffu0WUJfGgcFi98TGe6Z%2BvL3%2BTaB06SjIxVPBGYVqwFdrPK%2FgIn7fE34zxPMhxz%2BS3NRY4q7wNC8KFmX0R4qGmHpxPC9PC9qvNi0GEjrcHK5hqKIasc7WjwWO0wLCBzvyrzBsA%2BSdSDK7Fi20KDjsMkMhurcqLTnNiTgKVOYQV2Vbp6n%2Bqgio%2FZDvrURSv7b2N6YPt6wGwCIVyHptmMe42OyZfs0bOgsBD05VYl2ImfpPp2kx7upk%2BdFHvAwbsErU5KY%2BYA0IMfFMNAJoQwyumiwAY6pgF5FIFuIRXMMemSYNqi2vzOq1iKyiDvMs31MyF5HkMLUkNTpj2cKg9YqHccjjxEpsLkvL%2BFf2O0BSNuFXsGKRU3uSdue124Q7Jxu96DBTb4%2FoLoAyvZU%2FMPm9UFwdw9l1N3GK2BodMJzc7gRA5zVbr7QBoOSegu%2B1DVAW5%2FgkrhzRv9tf0oMGo0tzQ1PM%2BQOWNAfarE3umGsSolbhiEo3D4QoUBKOq3&X-Amz-Signature=2e77f769a8f61013ac2d0bf6dd950e2190b53a6fbe5a7c9ed3d0637504c98f8b&X-Amz-SignedHeaders=host&x-id=GetObject)
