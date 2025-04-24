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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA7PVK5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNF1PAgJQaVD89xJLOoAo%2FiW2MTlNpQ3nGBPuGciW8wIgQhtsPSxotzhJ%2BWN%2FohqJPXEWeXxewspnQN%2FZveZyq4gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFLjoEHl8VLKgTnQVircAyxy7U3LK8Iqe%2FIg1WURvSWy%2FPZpR3XgMhGFBCB2oOBQ0wmkQQrmT94TsJvgkLyDFB5YkrNj%2FEt9MTZgJ4ENxjuxLtIHHoH0JuPfYmQ8qPN576oTHn8r5sdzAb8lpXyls8i9J30%2BHDKGhvCXLSDJPl7NVrKBDAby4n8gDun2e%2FXEfpPgrToVuo%2FnQqeHn2Ex3f6c16RSU2VBOSivZucm7Tqvo7nhR3FgmeDGnPvJjk5e%2F%2Bd0SqJBxQ6g1CPf7v0shF6cEGES1PSXaUqU11SvMAUIniCpObkQxUy1vgy6HVYSAzHV8abJXIaYGhJC3EUCpT6c%2FXSW3WucForoTbjdMZccZIQKYGythBqpUMlPZy5HxpmEJl3WaHX0xzv8vKY0fu0l3qwW18tmDUVGFZSsSpjH0s6SrZ6MM0yHjOu8xNNveuxJ%2BCvkPtiTmaDOO8CPa5ncAfpGmJgLHRE5tizNGKyHFIl2vBYjnxKHjE0W%2FpsSnI7yArLk3wFB6ZYoTVVFX7bkFChEO5vHlAIrW17humQeTDwVVJFWHfKc7%2FsBzc%2FvQO7gQQwFPn3tvojARNRauZ1DclUY%2F1jc86HQMuF2BpnxgPoHek6wwBsJOVgXxEMWOCJiq5G8SlVCQnVvMKLbqsAGOqUBVDtoXR48rsw%2BDlJqsyRnEYuKH%2BhktVi5Sa1iBUh6l%2FBMPYoiGWFjJMtPK1EByPmAGWqaXj8ghKz4TtxHHA%2FPkK8wwt%2Bow4H8nxIxDu%2FXtX%2BxombGflfFQj0zj8siY46iBs1qhAIaQ4Z4vh%2FDot2nD8Yrkc1Dqy6260WMjwJuiGPZN05IlaC%2FS2so12ZgUStb6Yv60jRin4hL2%2FZFPXNvHRE%2BIMkG&X-Amz-Signature=9231e55e977a994cf385a9cb08aff5fa53de52b2a318eeba90e6245334bbe4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA7PVK5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNF1PAgJQaVD89xJLOoAo%2FiW2MTlNpQ3nGBPuGciW8wIgQhtsPSxotzhJ%2BWN%2FohqJPXEWeXxewspnQN%2FZveZyq4gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFLjoEHl8VLKgTnQVircAyxy7U3LK8Iqe%2FIg1WURvSWy%2FPZpR3XgMhGFBCB2oOBQ0wmkQQrmT94TsJvgkLyDFB5YkrNj%2FEt9MTZgJ4ENxjuxLtIHHoH0JuPfYmQ8qPN576oTHn8r5sdzAb8lpXyls8i9J30%2BHDKGhvCXLSDJPl7NVrKBDAby4n8gDun2e%2FXEfpPgrToVuo%2FnQqeHn2Ex3f6c16RSU2VBOSivZucm7Tqvo7nhR3FgmeDGnPvJjk5e%2F%2Bd0SqJBxQ6g1CPf7v0shF6cEGES1PSXaUqU11SvMAUIniCpObkQxUy1vgy6HVYSAzHV8abJXIaYGhJC3EUCpT6c%2FXSW3WucForoTbjdMZccZIQKYGythBqpUMlPZy5HxpmEJl3WaHX0xzv8vKY0fu0l3qwW18tmDUVGFZSsSpjH0s6SrZ6MM0yHjOu8xNNveuxJ%2BCvkPtiTmaDOO8CPa5ncAfpGmJgLHRE5tizNGKyHFIl2vBYjnxKHjE0W%2FpsSnI7yArLk3wFB6ZYoTVVFX7bkFChEO5vHlAIrW17humQeTDwVVJFWHfKc7%2FsBzc%2FvQO7gQQwFPn3tvojARNRauZ1DclUY%2F1jc86HQMuF2BpnxgPoHek6wwBsJOVgXxEMWOCJiq5G8SlVCQnVvMKLbqsAGOqUBVDtoXR48rsw%2BDlJqsyRnEYuKH%2BhktVi5Sa1iBUh6l%2FBMPYoiGWFjJMtPK1EByPmAGWqaXj8ghKz4TtxHHA%2FPkK8wwt%2Bow4H8nxIxDu%2FXtX%2BxombGflfFQj0zj8siY46iBs1qhAIaQ4Z4vh%2FDot2nD8Yrkc1Dqy6260WMjwJuiGPZN05IlaC%2FS2so12ZgUStb6Yv60jRin4hL2%2FZFPXNvHRE%2BIMkG&X-Amz-Signature=040cb2843f703226ff9fe7946ede79733d220c905c064b20a24530a5e0e71ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA7PVK5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNF1PAgJQaVD89xJLOoAo%2FiW2MTlNpQ3nGBPuGciW8wIgQhtsPSxotzhJ%2BWN%2FohqJPXEWeXxewspnQN%2FZveZyq4gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFLjoEHl8VLKgTnQVircAyxy7U3LK8Iqe%2FIg1WURvSWy%2FPZpR3XgMhGFBCB2oOBQ0wmkQQrmT94TsJvgkLyDFB5YkrNj%2FEt9MTZgJ4ENxjuxLtIHHoH0JuPfYmQ8qPN576oTHn8r5sdzAb8lpXyls8i9J30%2BHDKGhvCXLSDJPl7NVrKBDAby4n8gDun2e%2FXEfpPgrToVuo%2FnQqeHn2Ex3f6c16RSU2VBOSivZucm7Tqvo7nhR3FgmeDGnPvJjk5e%2F%2Bd0SqJBxQ6g1CPf7v0shF6cEGES1PSXaUqU11SvMAUIniCpObkQxUy1vgy6HVYSAzHV8abJXIaYGhJC3EUCpT6c%2FXSW3WucForoTbjdMZccZIQKYGythBqpUMlPZy5HxpmEJl3WaHX0xzv8vKY0fu0l3qwW18tmDUVGFZSsSpjH0s6SrZ6MM0yHjOu8xNNveuxJ%2BCvkPtiTmaDOO8CPa5ncAfpGmJgLHRE5tizNGKyHFIl2vBYjnxKHjE0W%2FpsSnI7yArLk3wFB6ZYoTVVFX7bkFChEO5vHlAIrW17humQeTDwVVJFWHfKc7%2FsBzc%2FvQO7gQQwFPn3tvojARNRauZ1DclUY%2F1jc86HQMuF2BpnxgPoHek6wwBsJOVgXxEMWOCJiq5G8SlVCQnVvMKLbqsAGOqUBVDtoXR48rsw%2BDlJqsyRnEYuKH%2BhktVi5Sa1iBUh6l%2FBMPYoiGWFjJMtPK1EByPmAGWqaXj8ghKz4TtxHHA%2FPkK8wwt%2Bow4H8nxIxDu%2FXtX%2BxombGflfFQj0zj8siY46iBs1qhAIaQ4Z4vh%2FDot2nD8Yrkc1Dqy6260WMjwJuiGPZN05IlaC%2FS2so12ZgUStb6Yv60jRin4hL2%2FZFPXNvHRE%2BIMkG&X-Amz-Signature=4867694f4774cb66bda7dc428465a810bbe8ad4429f126a1ec8d058fdf007874&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA7PVK5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNF1PAgJQaVD89xJLOoAo%2FiW2MTlNpQ3nGBPuGciW8wIgQhtsPSxotzhJ%2BWN%2FohqJPXEWeXxewspnQN%2FZveZyq4gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFLjoEHl8VLKgTnQVircAyxy7U3LK8Iqe%2FIg1WURvSWy%2FPZpR3XgMhGFBCB2oOBQ0wmkQQrmT94TsJvgkLyDFB5YkrNj%2FEt9MTZgJ4ENxjuxLtIHHoH0JuPfYmQ8qPN576oTHn8r5sdzAb8lpXyls8i9J30%2BHDKGhvCXLSDJPl7NVrKBDAby4n8gDun2e%2FXEfpPgrToVuo%2FnQqeHn2Ex3f6c16RSU2VBOSivZucm7Tqvo7nhR3FgmeDGnPvJjk5e%2F%2Bd0SqJBxQ6g1CPf7v0shF6cEGES1PSXaUqU11SvMAUIniCpObkQxUy1vgy6HVYSAzHV8abJXIaYGhJC3EUCpT6c%2FXSW3WucForoTbjdMZccZIQKYGythBqpUMlPZy5HxpmEJl3WaHX0xzv8vKY0fu0l3qwW18tmDUVGFZSsSpjH0s6SrZ6MM0yHjOu8xNNveuxJ%2BCvkPtiTmaDOO8CPa5ncAfpGmJgLHRE5tizNGKyHFIl2vBYjnxKHjE0W%2FpsSnI7yArLk3wFB6ZYoTVVFX7bkFChEO5vHlAIrW17humQeTDwVVJFWHfKc7%2FsBzc%2FvQO7gQQwFPn3tvojARNRauZ1DclUY%2F1jc86HQMuF2BpnxgPoHek6wwBsJOVgXxEMWOCJiq5G8SlVCQnVvMKLbqsAGOqUBVDtoXR48rsw%2BDlJqsyRnEYuKH%2BhktVi5Sa1iBUh6l%2FBMPYoiGWFjJMtPK1EByPmAGWqaXj8ghKz4TtxHHA%2FPkK8wwt%2Bow4H8nxIxDu%2FXtX%2BxombGflfFQj0zj8siY46iBs1qhAIaQ4Z4vh%2FDot2nD8Yrkc1Dqy6260WMjwJuiGPZN05IlaC%2FS2so12ZgUStb6Yv60jRin4hL2%2FZFPXNvHRE%2BIMkG&X-Amz-Signature=597f7177d807a1d310287f49f7541fce0a629cbfc46ac456a17e3efb76a1a100&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA7PVK5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNF1PAgJQaVD89xJLOoAo%2FiW2MTlNpQ3nGBPuGciW8wIgQhtsPSxotzhJ%2BWN%2FohqJPXEWeXxewspnQN%2FZveZyq4gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFLjoEHl8VLKgTnQVircAyxy7U3LK8Iqe%2FIg1WURvSWy%2FPZpR3XgMhGFBCB2oOBQ0wmkQQrmT94TsJvgkLyDFB5YkrNj%2FEt9MTZgJ4ENxjuxLtIHHoH0JuPfYmQ8qPN576oTHn8r5sdzAb8lpXyls8i9J30%2BHDKGhvCXLSDJPl7NVrKBDAby4n8gDun2e%2FXEfpPgrToVuo%2FnQqeHn2Ex3f6c16RSU2VBOSivZucm7Tqvo7nhR3FgmeDGnPvJjk5e%2F%2Bd0SqJBxQ6g1CPf7v0shF6cEGES1PSXaUqU11SvMAUIniCpObkQxUy1vgy6HVYSAzHV8abJXIaYGhJC3EUCpT6c%2FXSW3WucForoTbjdMZccZIQKYGythBqpUMlPZy5HxpmEJl3WaHX0xzv8vKY0fu0l3qwW18tmDUVGFZSsSpjH0s6SrZ6MM0yHjOu8xNNveuxJ%2BCvkPtiTmaDOO8CPa5ncAfpGmJgLHRE5tizNGKyHFIl2vBYjnxKHjE0W%2FpsSnI7yArLk3wFB6ZYoTVVFX7bkFChEO5vHlAIrW17humQeTDwVVJFWHfKc7%2FsBzc%2FvQO7gQQwFPn3tvojARNRauZ1DclUY%2F1jc86HQMuF2BpnxgPoHek6wwBsJOVgXxEMWOCJiq5G8SlVCQnVvMKLbqsAGOqUBVDtoXR48rsw%2BDlJqsyRnEYuKH%2BhktVi5Sa1iBUh6l%2FBMPYoiGWFjJMtPK1EByPmAGWqaXj8ghKz4TtxHHA%2FPkK8wwt%2Bow4H8nxIxDu%2FXtX%2BxombGflfFQj0zj8siY46iBs1qhAIaQ4Z4vh%2FDot2nD8Yrkc1Dqy6260WMjwJuiGPZN05IlaC%2FS2so12ZgUStb6Yv60jRin4hL2%2FZFPXNvHRE%2BIMkG&X-Amz-Signature=a3faf196edb9a39fd8de8480da341cd98675a6278c77c3b95174e3afd1fc916f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVA7PVK5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsNF1PAgJQaVD89xJLOoAo%2FiW2MTlNpQ3nGBPuGciW8wIgQhtsPSxotzhJ%2BWN%2FohqJPXEWeXxewspnQN%2FZveZyq4gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFLjoEHl8VLKgTnQVircAyxy7U3LK8Iqe%2FIg1WURvSWy%2FPZpR3XgMhGFBCB2oOBQ0wmkQQrmT94TsJvgkLyDFB5YkrNj%2FEt9MTZgJ4ENxjuxLtIHHoH0JuPfYmQ8qPN576oTHn8r5sdzAb8lpXyls8i9J30%2BHDKGhvCXLSDJPl7NVrKBDAby4n8gDun2e%2FXEfpPgrToVuo%2FnQqeHn2Ex3f6c16RSU2VBOSivZucm7Tqvo7nhR3FgmeDGnPvJjk5e%2F%2Bd0SqJBxQ6g1CPf7v0shF6cEGES1PSXaUqU11SvMAUIniCpObkQxUy1vgy6HVYSAzHV8abJXIaYGhJC3EUCpT6c%2FXSW3WucForoTbjdMZccZIQKYGythBqpUMlPZy5HxpmEJl3WaHX0xzv8vKY0fu0l3qwW18tmDUVGFZSsSpjH0s6SrZ6MM0yHjOu8xNNveuxJ%2BCvkPtiTmaDOO8CPa5ncAfpGmJgLHRE5tizNGKyHFIl2vBYjnxKHjE0W%2FpsSnI7yArLk3wFB6ZYoTVVFX7bkFChEO5vHlAIrW17humQeTDwVVJFWHfKc7%2FsBzc%2FvQO7gQQwFPn3tvojARNRauZ1DclUY%2F1jc86HQMuF2BpnxgPoHek6wwBsJOVgXxEMWOCJiq5G8SlVCQnVvMKLbqsAGOqUBVDtoXR48rsw%2BDlJqsyRnEYuKH%2BhktVi5Sa1iBUh6l%2FBMPYoiGWFjJMtPK1EByPmAGWqaXj8ghKz4TtxHHA%2FPkK8wwt%2Bow4H8nxIxDu%2FXtX%2BxombGflfFQj0zj8siY46iBs1qhAIaQ4Z4vh%2FDot2nD8Yrkc1Dqy6260WMjwJuiGPZN05IlaC%2FS2so12ZgUStb6Yv60jRin4hL2%2FZFPXNvHRE%2BIMkG&X-Amz-Signature=a6ead8e2a54e1938a2b1d293d32128867292ecafcb9520c594024c11f4a97298&X-Amz-SignedHeaders=host&x-id=GetObject)
