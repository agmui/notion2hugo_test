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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCBHODK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG8gXIxI0B0mz9cIDaU4AtRIw1OyGVjeysMoqoQ59aQIhAK0gXZ%2B%2Fnd2IjxogM4wNTSk3Yig2RPf3Qh8siO6BTdCKKv8DCDgQABoMNjM3NDIzMTgzODA1IgxwEkFcWwGTa5Jhkpoq3ANqnOQR1frB8fm5V452W6%2Fd0wNblpd3N%2B0jYdfWZAQlBpitN%2FDeoC47uvGOzPQsBYxr1qmbTvwybn8q40acBCyHWVyRVcxSRs2mnayJt56a%2B0moWoutbLcaoZBtwfgKu5u1d0y9mbf1s9znxuoJV0ifcp8Qo%2B0wxU5%2F%2FBWCGLAUe2GoC%2B0wGSJqj3C9LSqtirqVbHPOBgEGXR7izpj%2FN91apOSR%2B8ZBuOvXID%2FJlpHj8oVmf0cKSclGLhtxv%2BvbSdVoO60%2Bf4ZuO%2F6HmEAeL7h02z8QDxHeRrGuS0bcNX71%2FAmgqqaflCkgDI73erW3iQ%2Bbjf42BmlyW%2BudOPH25gg%2FYksid8tEeurLrPJ4EGPrtdJ52nwgR4QkjfOauJS5N6btP3rbKH8s8dnTPte1wI5ZtleGQ2tP3uzXE74itPuUScQNgD0%2BdvZb%2FjNVjcIb3FlXe%2FFE6Esn1u%2FrI4OCN2wrzx35VxsweBrP9NpJrY2T18Xcje7bQyFBhGDto45o42alYudOCUVLKtJwPDx2UIZFyiqA7VZVhB8r0AZuohKEIo3gV06JeS%2BAXxOlgAkjslF3Yl3F9a%2BTkWcchuRxo%2F%2Fzxl8MaJexo4MQyD%2BCkndRB8MMmFW3ugxKmMr5pjCa%2F%2BTABjqkAYdPCSadRjy%2BeU9%2B0eFpZnTZjVY9Qx%2FzVIlz%2B1aw838gP2wWijnJtzMmu8XVO3bmbcvZLm62zuA4RVhkPktyv60EecrCf4cBJWDKQFrAWVtdAIB%2FnB%2FfoDVOaVqyCdTAoW9ejQVYtOVlWggEHW70lDa1jfwPbMSAs2Bcst%2FRUwDLIc9p34lSLYIJ%2BPXHKYGnjz21vx1tTj2HTJkn8f9qdzN0o%2BKW&X-Amz-Signature=d67f23185b81f774faa669c62bd792b447a454693a213e50577efaf259f61f02&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCBHODK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG8gXIxI0B0mz9cIDaU4AtRIw1OyGVjeysMoqoQ59aQIhAK0gXZ%2B%2Fnd2IjxogM4wNTSk3Yig2RPf3Qh8siO6BTdCKKv8DCDgQABoMNjM3NDIzMTgzODA1IgxwEkFcWwGTa5Jhkpoq3ANqnOQR1frB8fm5V452W6%2Fd0wNblpd3N%2B0jYdfWZAQlBpitN%2FDeoC47uvGOzPQsBYxr1qmbTvwybn8q40acBCyHWVyRVcxSRs2mnayJt56a%2B0moWoutbLcaoZBtwfgKu5u1d0y9mbf1s9znxuoJV0ifcp8Qo%2B0wxU5%2F%2FBWCGLAUe2GoC%2B0wGSJqj3C9LSqtirqVbHPOBgEGXR7izpj%2FN91apOSR%2B8ZBuOvXID%2FJlpHj8oVmf0cKSclGLhtxv%2BvbSdVoO60%2Bf4ZuO%2F6HmEAeL7h02z8QDxHeRrGuS0bcNX71%2FAmgqqaflCkgDI73erW3iQ%2Bbjf42BmlyW%2BudOPH25gg%2FYksid8tEeurLrPJ4EGPrtdJ52nwgR4QkjfOauJS5N6btP3rbKH8s8dnTPte1wI5ZtleGQ2tP3uzXE74itPuUScQNgD0%2BdvZb%2FjNVjcIb3FlXe%2FFE6Esn1u%2FrI4OCN2wrzx35VxsweBrP9NpJrY2T18Xcje7bQyFBhGDto45o42alYudOCUVLKtJwPDx2UIZFyiqA7VZVhB8r0AZuohKEIo3gV06JeS%2BAXxOlgAkjslF3Yl3F9a%2BTkWcchuRxo%2F%2Fzxl8MaJexo4MQyD%2BCkndRB8MMmFW3ugxKmMr5pjCa%2F%2BTABjqkAYdPCSadRjy%2BeU9%2B0eFpZnTZjVY9Qx%2FzVIlz%2B1aw838gP2wWijnJtzMmu8XVO3bmbcvZLm62zuA4RVhkPktyv60EecrCf4cBJWDKQFrAWVtdAIB%2FnB%2FfoDVOaVqyCdTAoW9ejQVYtOVlWggEHW70lDa1jfwPbMSAs2Bcst%2FRUwDLIc9p34lSLYIJ%2BPXHKYGnjz21vx1tTj2HTJkn8f9qdzN0o%2BKW&X-Amz-Signature=8fde5ab827534587cd23a8e57d3d8b55c9e66883320c8b9db5ec12c25f92289f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCBHODK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG8gXIxI0B0mz9cIDaU4AtRIw1OyGVjeysMoqoQ59aQIhAK0gXZ%2B%2Fnd2IjxogM4wNTSk3Yig2RPf3Qh8siO6BTdCKKv8DCDgQABoMNjM3NDIzMTgzODA1IgxwEkFcWwGTa5Jhkpoq3ANqnOQR1frB8fm5V452W6%2Fd0wNblpd3N%2B0jYdfWZAQlBpitN%2FDeoC47uvGOzPQsBYxr1qmbTvwybn8q40acBCyHWVyRVcxSRs2mnayJt56a%2B0moWoutbLcaoZBtwfgKu5u1d0y9mbf1s9znxuoJV0ifcp8Qo%2B0wxU5%2F%2FBWCGLAUe2GoC%2B0wGSJqj3C9LSqtirqVbHPOBgEGXR7izpj%2FN91apOSR%2B8ZBuOvXID%2FJlpHj8oVmf0cKSclGLhtxv%2BvbSdVoO60%2Bf4ZuO%2F6HmEAeL7h02z8QDxHeRrGuS0bcNX71%2FAmgqqaflCkgDI73erW3iQ%2Bbjf42BmlyW%2BudOPH25gg%2FYksid8tEeurLrPJ4EGPrtdJ52nwgR4QkjfOauJS5N6btP3rbKH8s8dnTPte1wI5ZtleGQ2tP3uzXE74itPuUScQNgD0%2BdvZb%2FjNVjcIb3FlXe%2FFE6Esn1u%2FrI4OCN2wrzx35VxsweBrP9NpJrY2T18Xcje7bQyFBhGDto45o42alYudOCUVLKtJwPDx2UIZFyiqA7VZVhB8r0AZuohKEIo3gV06JeS%2BAXxOlgAkjslF3Yl3F9a%2BTkWcchuRxo%2F%2Fzxl8MaJexo4MQyD%2BCkndRB8MMmFW3ugxKmMr5pjCa%2F%2BTABjqkAYdPCSadRjy%2BeU9%2B0eFpZnTZjVY9Qx%2FzVIlz%2B1aw838gP2wWijnJtzMmu8XVO3bmbcvZLm62zuA4RVhkPktyv60EecrCf4cBJWDKQFrAWVtdAIB%2FnB%2FfoDVOaVqyCdTAoW9ejQVYtOVlWggEHW70lDa1jfwPbMSAs2Bcst%2FRUwDLIc9p34lSLYIJ%2BPXHKYGnjz21vx1tTj2HTJkn8f9qdzN0o%2BKW&X-Amz-Signature=c509d3b8e8e88b8b36fc07279f71c8ab84c8a57cff02fec61df16a4b5973ab37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCBHODK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG8gXIxI0B0mz9cIDaU4AtRIw1OyGVjeysMoqoQ59aQIhAK0gXZ%2B%2Fnd2IjxogM4wNTSk3Yig2RPf3Qh8siO6BTdCKKv8DCDgQABoMNjM3NDIzMTgzODA1IgxwEkFcWwGTa5Jhkpoq3ANqnOQR1frB8fm5V452W6%2Fd0wNblpd3N%2B0jYdfWZAQlBpitN%2FDeoC47uvGOzPQsBYxr1qmbTvwybn8q40acBCyHWVyRVcxSRs2mnayJt56a%2B0moWoutbLcaoZBtwfgKu5u1d0y9mbf1s9znxuoJV0ifcp8Qo%2B0wxU5%2F%2FBWCGLAUe2GoC%2B0wGSJqj3C9LSqtirqVbHPOBgEGXR7izpj%2FN91apOSR%2B8ZBuOvXID%2FJlpHj8oVmf0cKSclGLhtxv%2BvbSdVoO60%2Bf4ZuO%2F6HmEAeL7h02z8QDxHeRrGuS0bcNX71%2FAmgqqaflCkgDI73erW3iQ%2Bbjf42BmlyW%2BudOPH25gg%2FYksid8tEeurLrPJ4EGPrtdJ52nwgR4QkjfOauJS5N6btP3rbKH8s8dnTPte1wI5ZtleGQ2tP3uzXE74itPuUScQNgD0%2BdvZb%2FjNVjcIb3FlXe%2FFE6Esn1u%2FrI4OCN2wrzx35VxsweBrP9NpJrY2T18Xcje7bQyFBhGDto45o42alYudOCUVLKtJwPDx2UIZFyiqA7VZVhB8r0AZuohKEIo3gV06JeS%2BAXxOlgAkjslF3Yl3F9a%2BTkWcchuRxo%2F%2Fzxl8MaJexo4MQyD%2BCkndRB8MMmFW3ugxKmMr5pjCa%2F%2BTABjqkAYdPCSadRjy%2BeU9%2B0eFpZnTZjVY9Qx%2FzVIlz%2B1aw838gP2wWijnJtzMmu8XVO3bmbcvZLm62zuA4RVhkPktyv60EecrCf4cBJWDKQFrAWVtdAIB%2FnB%2FfoDVOaVqyCdTAoW9ejQVYtOVlWggEHW70lDa1jfwPbMSAs2Bcst%2FRUwDLIc9p34lSLYIJ%2BPXHKYGnjz21vx1tTj2HTJkn8f9qdzN0o%2BKW&X-Amz-Signature=c1463bf68232d922c1af59d46c4f06d054034bf22918f9b942e9051c1db9ace1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCBHODK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG8gXIxI0B0mz9cIDaU4AtRIw1OyGVjeysMoqoQ59aQIhAK0gXZ%2B%2Fnd2IjxogM4wNTSk3Yig2RPf3Qh8siO6BTdCKKv8DCDgQABoMNjM3NDIzMTgzODA1IgxwEkFcWwGTa5Jhkpoq3ANqnOQR1frB8fm5V452W6%2Fd0wNblpd3N%2B0jYdfWZAQlBpitN%2FDeoC47uvGOzPQsBYxr1qmbTvwybn8q40acBCyHWVyRVcxSRs2mnayJt56a%2B0moWoutbLcaoZBtwfgKu5u1d0y9mbf1s9znxuoJV0ifcp8Qo%2B0wxU5%2F%2FBWCGLAUe2GoC%2B0wGSJqj3C9LSqtirqVbHPOBgEGXR7izpj%2FN91apOSR%2B8ZBuOvXID%2FJlpHj8oVmf0cKSclGLhtxv%2BvbSdVoO60%2Bf4ZuO%2F6HmEAeL7h02z8QDxHeRrGuS0bcNX71%2FAmgqqaflCkgDI73erW3iQ%2Bbjf42BmlyW%2BudOPH25gg%2FYksid8tEeurLrPJ4EGPrtdJ52nwgR4QkjfOauJS5N6btP3rbKH8s8dnTPte1wI5ZtleGQ2tP3uzXE74itPuUScQNgD0%2BdvZb%2FjNVjcIb3FlXe%2FFE6Esn1u%2FrI4OCN2wrzx35VxsweBrP9NpJrY2T18Xcje7bQyFBhGDto45o42alYudOCUVLKtJwPDx2UIZFyiqA7VZVhB8r0AZuohKEIo3gV06JeS%2BAXxOlgAkjslF3Yl3F9a%2BTkWcchuRxo%2F%2Fzxl8MaJexo4MQyD%2BCkndRB8MMmFW3ugxKmMr5pjCa%2F%2BTABjqkAYdPCSadRjy%2BeU9%2B0eFpZnTZjVY9Qx%2FzVIlz%2B1aw838gP2wWijnJtzMmu8XVO3bmbcvZLm62zuA4RVhkPktyv60EecrCf4cBJWDKQFrAWVtdAIB%2FnB%2FfoDVOaVqyCdTAoW9ejQVYtOVlWggEHW70lDa1jfwPbMSAs2Bcst%2FRUwDLIc9p34lSLYIJ%2BPXHKYGnjz21vx1tTj2HTJkn8f9qdzN0o%2BKW&X-Amz-Signature=899e9438131b97a781c0c100022bccd2ec4a64574acc1bc3440ba4ece447ac96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCBHODK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChG8gXIxI0B0mz9cIDaU4AtRIw1OyGVjeysMoqoQ59aQIhAK0gXZ%2B%2Fnd2IjxogM4wNTSk3Yig2RPf3Qh8siO6BTdCKKv8DCDgQABoMNjM3NDIzMTgzODA1IgxwEkFcWwGTa5Jhkpoq3ANqnOQR1frB8fm5V452W6%2Fd0wNblpd3N%2B0jYdfWZAQlBpitN%2FDeoC47uvGOzPQsBYxr1qmbTvwybn8q40acBCyHWVyRVcxSRs2mnayJt56a%2B0moWoutbLcaoZBtwfgKu5u1d0y9mbf1s9znxuoJV0ifcp8Qo%2B0wxU5%2F%2FBWCGLAUe2GoC%2B0wGSJqj3C9LSqtirqVbHPOBgEGXR7izpj%2FN91apOSR%2B8ZBuOvXID%2FJlpHj8oVmf0cKSclGLhtxv%2BvbSdVoO60%2Bf4ZuO%2F6HmEAeL7h02z8QDxHeRrGuS0bcNX71%2FAmgqqaflCkgDI73erW3iQ%2Bbjf42BmlyW%2BudOPH25gg%2FYksid8tEeurLrPJ4EGPrtdJ52nwgR4QkjfOauJS5N6btP3rbKH8s8dnTPte1wI5ZtleGQ2tP3uzXE74itPuUScQNgD0%2BdvZb%2FjNVjcIb3FlXe%2FFE6Esn1u%2FrI4OCN2wrzx35VxsweBrP9NpJrY2T18Xcje7bQyFBhGDto45o42alYudOCUVLKtJwPDx2UIZFyiqA7VZVhB8r0AZuohKEIo3gV06JeS%2BAXxOlgAkjslF3Yl3F9a%2BTkWcchuRxo%2F%2Fzxl8MaJexo4MQyD%2BCkndRB8MMmFW3ugxKmMr5pjCa%2F%2BTABjqkAYdPCSadRjy%2BeU9%2B0eFpZnTZjVY9Qx%2FzVIlz%2B1aw838gP2wWijnJtzMmu8XVO3bmbcvZLm62zuA4RVhkPktyv60EecrCf4cBJWDKQFrAWVtdAIB%2FnB%2FfoDVOaVqyCdTAoW9ejQVYtOVlWggEHW70lDa1jfwPbMSAs2Bcst%2FRUwDLIc9p34lSLYIJ%2BPXHKYGnjz21vx1tTj2HTJkn8f9qdzN0o%2BKW&X-Amz-Signature=62baec018ca4c9d538b2f843466b61ceb7c16d977f35f17cb7bb7cc44c031804&X-Amz-SignedHeaders=host&x-id=GetObject)
