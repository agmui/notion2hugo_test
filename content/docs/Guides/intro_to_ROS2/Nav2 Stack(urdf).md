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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SEIT6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTorocPqU7dXyU9aDgnXgp9BEe%2Fw%2BPUM7hLr%2B%2Bb%2BHowAiEArjeQO3dI7xJdXUhl8BHolCh8Wscv9wCi5pUQ6TJyPqYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlgcKq41BKiGgIEeyrcAwgRygl%2BFn5WPhwof6ruokS1h9s%2F7ulUJhv1lZDRiDCJpEaI5m9qtSWGSu%2FwWnUiCGFbT%2BwQ5S%2B5BA8%2BMGM4KCN%2FHpTkjk61BBKP272c9%2FXimLgJWDLG6OzzIiUN80E6vq8WZUYoogDiIVVlJU5xeOF%2BQLRnXwE%2Bqj%2BDQMOgKdN0nRFzXwemx%2BnG2e1hZbgXZWaUlKGbr7J6HtskTQl8onA3b2NN0L0LZc6Kth7jwgibcwL0d6zXN24f%2Bmc4NMTk1Hn%2F6VvqME5Q1tJwY4p6x7QUq%2Fw3aq62CpooWmiz03m0cEQG9xFPwMKmfx%2F2y1ZUQG78mXEraROizap5RhOtz1G92DE%2BW0BRs2NOI18%2FKqDF4jeVy6TmUQfJdlolu96mqM%2FOzWvNZ%2FCPcY7cYW%2F9S%2FUEZgk5Pjf4ml25ZITK9zFaqHiw%2B0LR%2Bk9h8zSqrF12Ne7evsqLEy9UgfDFLq%2BSkQSMorY%2BcZdbus5Dc8Qts21bu6LYG1j6Y%2FrH%2BKqXX35UOVKkGzQtjZjI1hWd3Vr5RP3UCgXFNghgyfyBsvX7UtopcbChxCl5wLlkVpWY%2BRfPG6F8sR8gP32tR%2FDY8TLJWYILjfo1Tzjca7oIFTEZWlLA8VugAuoJsaFEbqvDMIDAtcAGOqUBVeIeNSi4%2FpWVbVs54KUWfRIPCh30uu0JctJ7SuHMHIP6B%2BizfJFFrHYCgzvCcuSSoYhV4LvWbffMqCOpWh29gl4jpMOBvtXDDvK1Fr9JF0ted34XYAX8AKsJgyeD3LbiFsbaKY8vD%2BSnotoeJdQSDiQe0hZvzreecSxoaaYgBZMTUimYyl%2BZAqIJOk0DeQOmgrSeCfEIrLNGP04uzZtd6Q%2FAVsJ6&X-Amz-Signature=d36d4da99e71443c04056da9ab8df0f11d1d20c177914c64542b91be67c0cc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SEIT6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTorocPqU7dXyU9aDgnXgp9BEe%2Fw%2BPUM7hLr%2B%2Bb%2BHowAiEArjeQO3dI7xJdXUhl8BHolCh8Wscv9wCi5pUQ6TJyPqYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlgcKq41BKiGgIEeyrcAwgRygl%2BFn5WPhwof6ruokS1h9s%2F7ulUJhv1lZDRiDCJpEaI5m9qtSWGSu%2FwWnUiCGFbT%2BwQ5S%2B5BA8%2BMGM4KCN%2FHpTkjk61BBKP272c9%2FXimLgJWDLG6OzzIiUN80E6vq8WZUYoogDiIVVlJU5xeOF%2BQLRnXwE%2Bqj%2BDQMOgKdN0nRFzXwemx%2BnG2e1hZbgXZWaUlKGbr7J6HtskTQl8onA3b2NN0L0LZc6Kth7jwgibcwL0d6zXN24f%2Bmc4NMTk1Hn%2F6VvqME5Q1tJwY4p6x7QUq%2Fw3aq62CpooWmiz03m0cEQG9xFPwMKmfx%2F2y1ZUQG78mXEraROizap5RhOtz1G92DE%2BW0BRs2NOI18%2FKqDF4jeVy6TmUQfJdlolu96mqM%2FOzWvNZ%2FCPcY7cYW%2F9S%2FUEZgk5Pjf4ml25ZITK9zFaqHiw%2B0LR%2Bk9h8zSqrF12Ne7evsqLEy9UgfDFLq%2BSkQSMorY%2BcZdbus5Dc8Qts21bu6LYG1j6Y%2FrH%2BKqXX35UOVKkGzQtjZjI1hWd3Vr5RP3UCgXFNghgyfyBsvX7UtopcbChxCl5wLlkVpWY%2BRfPG6F8sR8gP32tR%2FDY8TLJWYILjfo1Tzjca7oIFTEZWlLA8VugAuoJsaFEbqvDMIDAtcAGOqUBVeIeNSi4%2FpWVbVs54KUWfRIPCh30uu0JctJ7SuHMHIP6B%2BizfJFFrHYCgzvCcuSSoYhV4LvWbffMqCOpWh29gl4jpMOBvtXDDvK1Fr9JF0ted34XYAX8AKsJgyeD3LbiFsbaKY8vD%2BSnotoeJdQSDiQe0hZvzreecSxoaaYgBZMTUimYyl%2BZAqIJOk0DeQOmgrSeCfEIrLNGP04uzZtd6Q%2FAVsJ6&X-Amz-Signature=d6f3201de7d32db308d7769c25a75693641e18bfec85b43937e989dcd9870941&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SEIT6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTorocPqU7dXyU9aDgnXgp9BEe%2Fw%2BPUM7hLr%2B%2Bb%2BHowAiEArjeQO3dI7xJdXUhl8BHolCh8Wscv9wCi5pUQ6TJyPqYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlgcKq41BKiGgIEeyrcAwgRygl%2BFn5WPhwof6ruokS1h9s%2F7ulUJhv1lZDRiDCJpEaI5m9qtSWGSu%2FwWnUiCGFbT%2BwQ5S%2B5BA8%2BMGM4KCN%2FHpTkjk61BBKP272c9%2FXimLgJWDLG6OzzIiUN80E6vq8WZUYoogDiIVVlJU5xeOF%2BQLRnXwE%2Bqj%2BDQMOgKdN0nRFzXwemx%2BnG2e1hZbgXZWaUlKGbr7J6HtskTQl8onA3b2NN0L0LZc6Kth7jwgibcwL0d6zXN24f%2Bmc4NMTk1Hn%2F6VvqME5Q1tJwY4p6x7QUq%2Fw3aq62CpooWmiz03m0cEQG9xFPwMKmfx%2F2y1ZUQG78mXEraROizap5RhOtz1G92DE%2BW0BRs2NOI18%2FKqDF4jeVy6TmUQfJdlolu96mqM%2FOzWvNZ%2FCPcY7cYW%2F9S%2FUEZgk5Pjf4ml25ZITK9zFaqHiw%2B0LR%2Bk9h8zSqrF12Ne7evsqLEy9UgfDFLq%2BSkQSMorY%2BcZdbus5Dc8Qts21bu6LYG1j6Y%2FrH%2BKqXX35UOVKkGzQtjZjI1hWd3Vr5RP3UCgXFNghgyfyBsvX7UtopcbChxCl5wLlkVpWY%2BRfPG6F8sR8gP32tR%2FDY8TLJWYILjfo1Tzjca7oIFTEZWlLA8VugAuoJsaFEbqvDMIDAtcAGOqUBVeIeNSi4%2FpWVbVs54KUWfRIPCh30uu0JctJ7SuHMHIP6B%2BizfJFFrHYCgzvCcuSSoYhV4LvWbffMqCOpWh29gl4jpMOBvtXDDvK1Fr9JF0ted34XYAX8AKsJgyeD3LbiFsbaKY8vD%2BSnotoeJdQSDiQe0hZvzreecSxoaaYgBZMTUimYyl%2BZAqIJOk0DeQOmgrSeCfEIrLNGP04uzZtd6Q%2FAVsJ6&X-Amz-Signature=d2ad08e4da047ea1fcd8787ae6696cc7b61e859ce95d4e318d2778b19511bb13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SEIT6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTorocPqU7dXyU9aDgnXgp9BEe%2Fw%2BPUM7hLr%2B%2Bb%2BHowAiEArjeQO3dI7xJdXUhl8BHolCh8Wscv9wCi5pUQ6TJyPqYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlgcKq41BKiGgIEeyrcAwgRygl%2BFn5WPhwof6ruokS1h9s%2F7ulUJhv1lZDRiDCJpEaI5m9qtSWGSu%2FwWnUiCGFbT%2BwQ5S%2B5BA8%2BMGM4KCN%2FHpTkjk61BBKP272c9%2FXimLgJWDLG6OzzIiUN80E6vq8WZUYoogDiIVVlJU5xeOF%2BQLRnXwE%2Bqj%2BDQMOgKdN0nRFzXwemx%2BnG2e1hZbgXZWaUlKGbr7J6HtskTQl8onA3b2NN0L0LZc6Kth7jwgibcwL0d6zXN24f%2Bmc4NMTk1Hn%2F6VvqME5Q1tJwY4p6x7QUq%2Fw3aq62CpooWmiz03m0cEQG9xFPwMKmfx%2F2y1ZUQG78mXEraROizap5RhOtz1G92DE%2BW0BRs2NOI18%2FKqDF4jeVy6TmUQfJdlolu96mqM%2FOzWvNZ%2FCPcY7cYW%2F9S%2FUEZgk5Pjf4ml25ZITK9zFaqHiw%2B0LR%2Bk9h8zSqrF12Ne7evsqLEy9UgfDFLq%2BSkQSMorY%2BcZdbus5Dc8Qts21bu6LYG1j6Y%2FrH%2BKqXX35UOVKkGzQtjZjI1hWd3Vr5RP3UCgXFNghgyfyBsvX7UtopcbChxCl5wLlkVpWY%2BRfPG6F8sR8gP32tR%2FDY8TLJWYILjfo1Tzjca7oIFTEZWlLA8VugAuoJsaFEbqvDMIDAtcAGOqUBVeIeNSi4%2FpWVbVs54KUWfRIPCh30uu0JctJ7SuHMHIP6B%2BizfJFFrHYCgzvCcuSSoYhV4LvWbffMqCOpWh29gl4jpMOBvtXDDvK1Fr9JF0ted34XYAX8AKsJgyeD3LbiFsbaKY8vD%2BSnotoeJdQSDiQe0hZvzreecSxoaaYgBZMTUimYyl%2BZAqIJOk0DeQOmgrSeCfEIrLNGP04uzZtd6Q%2FAVsJ6&X-Amz-Signature=ae7277449cdd7538668832a28c0c1f6e35bfe3eb3b92b9b198f7c9b0e5be9d26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SEIT6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTorocPqU7dXyU9aDgnXgp9BEe%2Fw%2BPUM7hLr%2B%2Bb%2BHowAiEArjeQO3dI7xJdXUhl8BHolCh8Wscv9wCi5pUQ6TJyPqYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlgcKq41BKiGgIEeyrcAwgRygl%2BFn5WPhwof6ruokS1h9s%2F7ulUJhv1lZDRiDCJpEaI5m9qtSWGSu%2FwWnUiCGFbT%2BwQ5S%2B5BA8%2BMGM4KCN%2FHpTkjk61BBKP272c9%2FXimLgJWDLG6OzzIiUN80E6vq8WZUYoogDiIVVlJU5xeOF%2BQLRnXwE%2Bqj%2BDQMOgKdN0nRFzXwemx%2BnG2e1hZbgXZWaUlKGbr7J6HtskTQl8onA3b2NN0L0LZc6Kth7jwgibcwL0d6zXN24f%2Bmc4NMTk1Hn%2F6VvqME5Q1tJwY4p6x7QUq%2Fw3aq62CpooWmiz03m0cEQG9xFPwMKmfx%2F2y1ZUQG78mXEraROizap5RhOtz1G92DE%2BW0BRs2NOI18%2FKqDF4jeVy6TmUQfJdlolu96mqM%2FOzWvNZ%2FCPcY7cYW%2F9S%2FUEZgk5Pjf4ml25ZITK9zFaqHiw%2B0LR%2Bk9h8zSqrF12Ne7evsqLEy9UgfDFLq%2BSkQSMorY%2BcZdbus5Dc8Qts21bu6LYG1j6Y%2FrH%2BKqXX35UOVKkGzQtjZjI1hWd3Vr5RP3UCgXFNghgyfyBsvX7UtopcbChxCl5wLlkVpWY%2BRfPG6F8sR8gP32tR%2FDY8TLJWYILjfo1Tzjca7oIFTEZWlLA8VugAuoJsaFEbqvDMIDAtcAGOqUBVeIeNSi4%2FpWVbVs54KUWfRIPCh30uu0JctJ7SuHMHIP6B%2BizfJFFrHYCgzvCcuSSoYhV4LvWbffMqCOpWh29gl4jpMOBvtXDDvK1Fr9JF0ted34XYAX8AKsJgyeD3LbiFsbaKY8vD%2BSnotoeJdQSDiQe0hZvzreecSxoaaYgBZMTUimYyl%2BZAqIJOk0DeQOmgrSeCfEIrLNGP04uzZtd6Q%2FAVsJ6&X-Amz-Signature=bc3ad778212f0496e0f98916c5d4d6469bb7929087b7c949e2f357af6bb5f323&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI2SEIT6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTorocPqU7dXyU9aDgnXgp9BEe%2Fw%2BPUM7hLr%2B%2Bb%2BHowAiEArjeQO3dI7xJdXUhl8BHolCh8Wscv9wCi5pUQ6TJyPqYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAlgcKq41BKiGgIEeyrcAwgRygl%2BFn5WPhwof6ruokS1h9s%2F7ulUJhv1lZDRiDCJpEaI5m9qtSWGSu%2FwWnUiCGFbT%2BwQ5S%2B5BA8%2BMGM4KCN%2FHpTkjk61BBKP272c9%2FXimLgJWDLG6OzzIiUN80E6vq8WZUYoogDiIVVlJU5xeOF%2BQLRnXwE%2Bqj%2BDQMOgKdN0nRFzXwemx%2BnG2e1hZbgXZWaUlKGbr7J6HtskTQl8onA3b2NN0L0LZc6Kth7jwgibcwL0d6zXN24f%2Bmc4NMTk1Hn%2F6VvqME5Q1tJwY4p6x7QUq%2Fw3aq62CpooWmiz03m0cEQG9xFPwMKmfx%2F2y1ZUQG78mXEraROizap5RhOtz1G92DE%2BW0BRs2NOI18%2FKqDF4jeVy6TmUQfJdlolu96mqM%2FOzWvNZ%2FCPcY7cYW%2F9S%2FUEZgk5Pjf4ml25ZITK9zFaqHiw%2B0LR%2Bk9h8zSqrF12Ne7evsqLEy9UgfDFLq%2BSkQSMorY%2BcZdbus5Dc8Qts21bu6LYG1j6Y%2FrH%2BKqXX35UOVKkGzQtjZjI1hWd3Vr5RP3UCgXFNghgyfyBsvX7UtopcbChxCl5wLlkVpWY%2BRfPG6F8sR8gP32tR%2FDY8TLJWYILjfo1Tzjca7oIFTEZWlLA8VugAuoJsaFEbqvDMIDAtcAGOqUBVeIeNSi4%2FpWVbVs54KUWfRIPCh30uu0JctJ7SuHMHIP6B%2BizfJFFrHYCgzvCcuSSoYhV4LvWbffMqCOpWh29gl4jpMOBvtXDDvK1Fr9JF0ted34XYAX8AKsJgyeD3LbiFsbaKY8vD%2BSnotoeJdQSDiQe0hZvzreecSxoaaYgBZMTUimYyl%2BZAqIJOk0DeQOmgrSeCfEIrLNGP04uzZtd6Q%2FAVsJ6&X-Amz-Signature=2b998d86193551a1dd1409834c4c286b63f31853a715740fe603a7c3dd962b70&X-Amz-SignedHeaders=host&x-id=GetObject)
