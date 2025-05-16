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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEVHM5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb5dT8l9gUwyXvOzexW8CAXDwLj3ZMzN073Ld4pSULigIhAPvbl2nKBqdHqBGYcubECegmTJasL1Dz7kgNtBsG932kKv8DCEsQABoMNjM3NDIzMTgzODA1IgzT3JImlIYKHXkz4MEq3AOjhLCG6GS7Z5a0hQ3IFkAZCD8Jyz%2BmttrnqZfzswxzGnMy2EZ5uxVvJrtG0%2B7mjaSqveFLYx3FZqQbv9ArAVEC4gtLwMOZc3aQJ3DYAn43eWAyENsF7jeekddOGzZMtFysabVm5iYh4frTCFebLLIGGGKL0LtDH4IBGooikVnUyiLFfL%2B879Vi5puLD4cN9b%2FXfprESOIXNAvAY1EK9qEEGkDBtlFrLzWP6JlPmW%2BQCYxrBYvAYIE3D%2Fv%2BIfHoXF3EqBo0hwvVPWks8Jxw0hdNh5YgknfJltvEc3OhRjgmZQjW3TLKLCy28LsAKKlqVsVrTOuakyIjCdR5LyAIO0g99NpFzPzPSqme9P%2FSPF3nV13yMQk9UzcSpmLfJEAf4PkKjnsQWbYapv5XGwX4Qez8eiHueRLiMdVr6%2F6sTf%2F6o2mJV0D2DzrUEg6ix0u6cMuQ7ELQmOqPj5JgpdOLrb4LwgqWm%2BzUTD4bx7mA3pHQ9hLNHepJAjIMDP%2F1%2BNang%2FEYPWgNRtbYbufc29JYxb%2BU2X6yScXQOt0ceQ9CaUPcNRd6vYC536PIMecHi7RdrZ2Ppsz5GgMnA6Q8PSqf5TtZUlUE%2F8S4nexzhxHE0kokjgSV380SJHGx0TEWSTDm9Z3BBjqkASF5Wt8SD%2F00151X7LxdVf%2BprJot3TcHSHyG5cCLecsO3GrgP%2BOth%2FlP4xh3NoFjTAJr9XPjDhfQITzOsSr3m61rAlQ93PZf3vrbh%2FuYYbOCmT804vTY34ekSgA4BWBAuvNVegRRlIs8Lu8qhBkCJIlNNtVAEnz9BEuCpfma9LM48gN6ZppgAEHXjIoQzAx5sHjbR%2F2FyvOCnnEKu9x3c%2FBlhNCJ&X-Amz-Signature=96844350d53097aa3284e5817b11744912558d83b283ef8d37dad7e5ad472b68&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEVHM5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb5dT8l9gUwyXvOzexW8CAXDwLj3ZMzN073Ld4pSULigIhAPvbl2nKBqdHqBGYcubECegmTJasL1Dz7kgNtBsG932kKv8DCEsQABoMNjM3NDIzMTgzODA1IgzT3JImlIYKHXkz4MEq3AOjhLCG6GS7Z5a0hQ3IFkAZCD8Jyz%2BmttrnqZfzswxzGnMy2EZ5uxVvJrtG0%2B7mjaSqveFLYx3FZqQbv9ArAVEC4gtLwMOZc3aQJ3DYAn43eWAyENsF7jeekddOGzZMtFysabVm5iYh4frTCFebLLIGGGKL0LtDH4IBGooikVnUyiLFfL%2B879Vi5puLD4cN9b%2FXfprESOIXNAvAY1EK9qEEGkDBtlFrLzWP6JlPmW%2BQCYxrBYvAYIE3D%2Fv%2BIfHoXF3EqBo0hwvVPWks8Jxw0hdNh5YgknfJltvEc3OhRjgmZQjW3TLKLCy28LsAKKlqVsVrTOuakyIjCdR5LyAIO0g99NpFzPzPSqme9P%2FSPF3nV13yMQk9UzcSpmLfJEAf4PkKjnsQWbYapv5XGwX4Qez8eiHueRLiMdVr6%2F6sTf%2F6o2mJV0D2DzrUEg6ix0u6cMuQ7ELQmOqPj5JgpdOLrb4LwgqWm%2BzUTD4bx7mA3pHQ9hLNHepJAjIMDP%2F1%2BNang%2FEYPWgNRtbYbufc29JYxb%2BU2X6yScXQOt0ceQ9CaUPcNRd6vYC536PIMecHi7RdrZ2Ppsz5GgMnA6Q8PSqf5TtZUlUE%2F8S4nexzhxHE0kokjgSV380SJHGx0TEWSTDm9Z3BBjqkASF5Wt8SD%2F00151X7LxdVf%2BprJot3TcHSHyG5cCLecsO3GrgP%2BOth%2FlP4xh3NoFjTAJr9XPjDhfQITzOsSr3m61rAlQ93PZf3vrbh%2FuYYbOCmT804vTY34ekSgA4BWBAuvNVegRRlIs8Lu8qhBkCJIlNNtVAEnz9BEuCpfma9LM48gN6ZppgAEHXjIoQzAx5sHjbR%2F2FyvOCnnEKu9x3c%2FBlhNCJ&X-Amz-Signature=80dbf6d61a8ea79e49c6e7c19f30e0e7be63f8f3cf595928c7c1069259e5d763&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEVHM5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb5dT8l9gUwyXvOzexW8CAXDwLj3ZMzN073Ld4pSULigIhAPvbl2nKBqdHqBGYcubECegmTJasL1Dz7kgNtBsG932kKv8DCEsQABoMNjM3NDIzMTgzODA1IgzT3JImlIYKHXkz4MEq3AOjhLCG6GS7Z5a0hQ3IFkAZCD8Jyz%2BmttrnqZfzswxzGnMy2EZ5uxVvJrtG0%2B7mjaSqveFLYx3FZqQbv9ArAVEC4gtLwMOZc3aQJ3DYAn43eWAyENsF7jeekddOGzZMtFysabVm5iYh4frTCFebLLIGGGKL0LtDH4IBGooikVnUyiLFfL%2B879Vi5puLD4cN9b%2FXfprESOIXNAvAY1EK9qEEGkDBtlFrLzWP6JlPmW%2BQCYxrBYvAYIE3D%2Fv%2BIfHoXF3EqBo0hwvVPWks8Jxw0hdNh5YgknfJltvEc3OhRjgmZQjW3TLKLCy28LsAKKlqVsVrTOuakyIjCdR5LyAIO0g99NpFzPzPSqme9P%2FSPF3nV13yMQk9UzcSpmLfJEAf4PkKjnsQWbYapv5XGwX4Qez8eiHueRLiMdVr6%2F6sTf%2F6o2mJV0D2DzrUEg6ix0u6cMuQ7ELQmOqPj5JgpdOLrb4LwgqWm%2BzUTD4bx7mA3pHQ9hLNHepJAjIMDP%2F1%2BNang%2FEYPWgNRtbYbufc29JYxb%2BU2X6yScXQOt0ceQ9CaUPcNRd6vYC536PIMecHi7RdrZ2Ppsz5GgMnA6Q8PSqf5TtZUlUE%2F8S4nexzhxHE0kokjgSV380SJHGx0TEWSTDm9Z3BBjqkASF5Wt8SD%2F00151X7LxdVf%2BprJot3TcHSHyG5cCLecsO3GrgP%2BOth%2FlP4xh3NoFjTAJr9XPjDhfQITzOsSr3m61rAlQ93PZf3vrbh%2FuYYbOCmT804vTY34ekSgA4BWBAuvNVegRRlIs8Lu8qhBkCJIlNNtVAEnz9BEuCpfma9LM48gN6ZppgAEHXjIoQzAx5sHjbR%2F2FyvOCnnEKu9x3c%2FBlhNCJ&X-Amz-Signature=79b556a83574daa66867f40720a5c5dcd7cf7705ed0652a04ed2aa222c50dbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEVHM5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb5dT8l9gUwyXvOzexW8CAXDwLj3ZMzN073Ld4pSULigIhAPvbl2nKBqdHqBGYcubECegmTJasL1Dz7kgNtBsG932kKv8DCEsQABoMNjM3NDIzMTgzODA1IgzT3JImlIYKHXkz4MEq3AOjhLCG6GS7Z5a0hQ3IFkAZCD8Jyz%2BmttrnqZfzswxzGnMy2EZ5uxVvJrtG0%2B7mjaSqveFLYx3FZqQbv9ArAVEC4gtLwMOZc3aQJ3DYAn43eWAyENsF7jeekddOGzZMtFysabVm5iYh4frTCFebLLIGGGKL0LtDH4IBGooikVnUyiLFfL%2B879Vi5puLD4cN9b%2FXfprESOIXNAvAY1EK9qEEGkDBtlFrLzWP6JlPmW%2BQCYxrBYvAYIE3D%2Fv%2BIfHoXF3EqBo0hwvVPWks8Jxw0hdNh5YgknfJltvEc3OhRjgmZQjW3TLKLCy28LsAKKlqVsVrTOuakyIjCdR5LyAIO0g99NpFzPzPSqme9P%2FSPF3nV13yMQk9UzcSpmLfJEAf4PkKjnsQWbYapv5XGwX4Qez8eiHueRLiMdVr6%2F6sTf%2F6o2mJV0D2DzrUEg6ix0u6cMuQ7ELQmOqPj5JgpdOLrb4LwgqWm%2BzUTD4bx7mA3pHQ9hLNHepJAjIMDP%2F1%2BNang%2FEYPWgNRtbYbufc29JYxb%2BU2X6yScXQOt0ceQ9CaUPcNRd6vYC536PIMecHi7RdrZ2Ppsz5GgMnA6Q8PSqf5TtZUlUE%2F8S4nexzhxHE0kokjgSV380SJHGx0TEWSTDm9Z3BBjqkASF5Wt8SD%2F00151X7LxdVf%2BprJot3TcHSHyG5cCLecsO3GrgP%2BOth%2FlP4xh3NoFjTAJr9XPjDhfQITzOsSr3m61rAlQ93PZf3vrbh%2FuYYbOCmT804vTY34ekSgA4BWBAuvNVegRRlIs8Lu8qhBkCJIlNNtVAEnz9BEuCpfma9LM48gN6ZppgAEHXjIoQzAx5sHjbR%2F2FyvOCnnEKu9x3c%2FBlhNCJ&X-Amz-Signature=397ff7b5a0ad75cd2269a7d5830868989d3daa64b084154de2e977b6f5bfa241&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEVHM5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb5dT8l9gUwyXvOzexW8CAXDwLj3ZMzN073Ld4pSULigIhAPvbl2nKBqdHqBGYcubECegmTJasL1Dz7kgNtBsG932kKv8DCEsQABoMNjM3NDIzMTgzODA1IgzT3JImlIYKHXkz4MEq3AOjhLCG6GS7Z5a0hQ3IFkAZCD8Jyz%2BmttrnqZfzswxzGnMy2EZ5uxVvJrtG0%2B7mjaSqveFLYx3FZqQbv9ArAVEC4gtLwMOZc3aQJ3DYAn43eWAyENsF7jeekddOGzZMtFysabVm5iYh4frTCFebLLIGGGKL0LtDH4IBGooikVnUyiLFfL%2B879Vi5puLD4cN9b%2FXfprESOIXNAvAY1EK9qEEGkDBtlFrLzWP6JlPmW%2BQCYxrBYvAYIE3D%2Fv%2BIfHoXF3EqBo0hwvVPWks8Jxw0hdNh5YgknfJltvEc3OhRjgmZQjW3TLKLCy28LsAKKlqVsVrTOuakyIjCdR5LyAIO0g99NpFzPzPSqme9P%2FSPF3nV13yMQk9UzcSpmLfJEAf4PkKjnsQWbYapv5XGwX4Qez8eiHueRLiMdVr6%2F6sTf%2F6o2mJV0D2DzrUEg6ix0u6cMuQ7ELQmOqPj5JgpdOLrb4LwgqWm%2BzUTD4bx7mA3pHQ9hLNHepJAjIMDP%2F1%2BNang%2FEYPWgNRtbYbufc29JYxb%2BU2X6yScXQOt0ceQ9CaUPcNRd6vYC536PIMecHi7RdrZ2Ppsz5GgMnA6Q8PSqf5TtZUlUE%2F8S4nexzhxHE0kokjgSV380SJHGx0TEWSTDm9Z3BBjqkASF5Wt8SD%2F00151X7LxdVf%2BprJot3TcHSHyG5cCLecsO3GrgP%2BOth%2FlP4xh3NoFjTAJr9XPjDhfQITzOsSr3m61rAlQ93PZf3vrbh%2FuYYbOCmT804vTY34ekSgA4BWBAuvNVegRRlIs8Lu8qhBkCJIlNNtVAEnz9BEuCpfma9LM48gN6ZppgAEHXjIoQzAx5sHjbR%2F2FyvOCnnEKu9x3c%2FBlhNCJ&X-Amz-Signature=fce04e68325394871934978ce2e71cd6ecc48b964345380f95e77491f54f8a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGEVHM5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb5dT8l9gUwyXvOzexW8CAXDwLj3ZMzN073Ld4pSULigIhAPvbl2nKBqdHqBGYcubECegmTJasL1Dz7kgNtBsG932kKv8DCEsQABoMNjM3NDIzMTgzODA1IgzT3JImlIYKHXkz4MEq3AOjhLCG6GS7Z5a0hQ3IFkAZCD8Jyz%2BmttrnqZfzswxzGnMy2EZ5uxVvJrtG0%2B7mjaSqveFLYx3FZqQbv9ArAVEC4gtLwMOZc3aQJ3DYAn43eWAyENsF7jeekddOGzZMtFysabVm5iYh4frTCFebLLIGGGKL0LtDH4IBGooikVnUyiLFfL%2B879Vi5puLD4cN9b%2FXfprESOIXNAvAY1EK9qEEGkDBtlFrLzWP6JlPmW%2BQCYxrBYvAYIE3D%2Fv%2BIfHoXF3EqBo0hwvVPWks8Jxw0hdNh5YgknfJltvEc3OhRjgmZQjW3TLKLCy28LsAKKlqVsVrTOuakyIjCdR5LyAIO0g99NpFzPzPSqme9P%2FSPF3nV13yMQk9UzcSpmLfJEAf4PkKjnsQWbYapv5XGwX4Qez8eiHueRLiMdVr6%2F6sTf%2F6o2mJV0D2DzrUEg6ix0u6cMuQ7ELQmOqPj5JgpdOLrb4LwgqWm%2BzUTD4bx7mA3pHQ9hLNHepJAjIMDP%2F1%2BNang%2FEYPWgNRtbYbufc29JYxb%2BU2X6yScXQOt0ceQ9CaUPcNRd6vYC536PIMecHi7RdrZ2Ppsz5GgMnA6Q8PSqf5TtZUlUE%2F8S4nexzhxHE0kokjgSV380SJHGx0TEWSTDm9Z3BBjqkASF5Wt8SD%2F00151X7LxdVf%2BprJot3TcHSHyG5cCLecsO3GrgP%2BOth%2FlP4xh3NoFjTAJr9XPjDhfQITzOsSr3m61rAlQ93PZf3vrbh%2FuYYbOCmT804vTY34ekSgA4BWBAuvNVegRRlIs8Lu8qhBkCJIlNNtVAEnz9BEuCpfma9LM48gN6ZppgAEHXjIoQzAx5sHjbR%2F2FyvOCnnEKu9x3c%2FBlhNCJ&X-Amz-Signature=37a51d2539d33567679b5032c505bb1f5325a158be0f128df57e8e5b5806a2cc&X-Amz-SignedHeaders=host&x-id=GetObject)
