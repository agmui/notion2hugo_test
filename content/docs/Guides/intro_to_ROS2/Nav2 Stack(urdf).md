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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCQQ57%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1PYxYZ9Q8utPriqco7KVQK1kAeYLKGWb7dbD760FSeAiBbXYX7b1qn44Oi3UfKeQ0j9TPsYxOLEpnbDbfcujQVvyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaxJRtvip4cGasY1yKtwDkfIqg3YzPCQ0yCB%2BX66clc4JaZKpMFDUWLy0FV7dhxiEveZ0vEU4%2FVhWhfUkhhAwOfEZna9wTWT0wt57%2FYS3jFjPOSt%2Bc3jVLfjhawY9o0o3m8ojRYovQuViJDcAy%2FqXX%2BfQ%2FueMJuN644ECOSLtKKtdsDRHCyC5i0iHYRtfmryDS7GUCPu96CnCWfBG%2F5LeWvTmsq2Kg%2BQ7Wd19MedrNu1pgVFQ8JzMRn50DgN1dc2MhwiPcZyMfQy9V1ktNZYT612Wttt4%2BSLBWcwT7pCD3j0gL2CL371OurNFF3DEy5IKzYF%2Fthx8InURErmT7GbklsxKp4KnRU9%2FCwWJyGlhIuT9SyBl3Fl2DnWZNgPM23r3DjzhNGnjnoBgV7a0KfOM51OEBRpjOSGtURal341hRUtHNbP%2F1%2FRJO86Lbn4qNJ9Hv21ggaFleED%2BmzbqLHk37Aq7XRkaHqge9ngCcLQbwAl%2BU8H6mP8BrWIWG%2BSIncBjYvNrK47nCminr6qzgyOr%2FvG7YC%2BHLnGk%2F6XdDIVjkBh1zz0TCVWIipJuewHXyC%2FYvUKu%2BHmYMWmqc7%2FStiEiLAVXJJVkPVV%2B%2Fbh4ICWM7%2F7VGZZ4fI6eaNfNNtCO2QFycQ8ZN5K2WmOicqgwuruawQY6pgE6fb8%2BU0lGBzm%2BEPvGPzKo3QtHR37F9X0JvMl%2B4GKrMH5eNYwVVoId9oZ6SsR0Z99swS9NcRzOGqFlwv4k1NBV9l6I%2FNL%2FyL9EcKoSlMWjObDkwWuZPEEPQQYmaxyPQWAJ3dgJGRs%2Fzpn9sDyKX%2BoHtYm9Q%2BrOXZpRS%2F6bxueeZl4ZEUm5KdopgaoXVBZ9ZMQtgXHd%2B4ssM70TUXDJxWTKkctuVWVY&X-Amz-Signature=a6ea5dd26f96a8afc3e4be42dc3b0ef1feedfe83e2b4c5531da889c37ef279ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCQQ57%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1PYxYZ9Q8utPriqco7KVQK1kAeYLKGWb7dbD760FSeAiBbXYX7b1qn44Oi3UfKeQ0j9TPsYxOLEpnbDbfcujQVvyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaxJRtvip4cGasY1yKtwDkfIqg3YzPCQ0yCB%2BX66clc4JaZKpMFDUWLy0FV7dhxiEveZ0vEU4%2FVhWhfUkhhAwOfEZna9wTWT0wt57%2FYS3jFjPOSt%2Bc3jVLfjhawY9o0o3m8ojRYovQuViJDcAy%2FqXX%2BfQ%2FueMJuN644ECOSLtKKtdsDRHCyC5i0iHYRtfmryDS7GUCPu96CnCWfBG%2F5LeWvTmsq2Kg%2BQ7Wd19MedrNu1pgVFQ8JzMRn50DgN1dc2MhwiPcZyMfQy9V1ktNZYT612Wttt4%2BSLBWcwT7pCD3j0gL2CL371OurNFF3DEy5IKzYF%2Fthx8InURErmT7GbklsxKp4KnRU9%2FCwWJyGlhIuT9SyBl3Fl2DnWZNgPM23r3DjzhNGnjnoBgV7a0KfOM51OEBRpjOSGtURal341hRUtHNbP%2F1%2FRJO86Lbn4qNJ9Hv21ggaFleED%2BmzbqLHk37Aq7XRkaHqge9ngCcLQbwAl%2BU8H6mP8BrWIWG%2BSIncBjYvNrK47nCminr6qzgyOr%2FvG7YC%2BHLnGk%2F6XdDIVjkBh1zz0TCVWIipJuewHXyC%2FYvUKu%2BHmYMWmqc7%2FStiEiLAVXJJVkPVV%2B%2Fbh4ICWM7%2F7VGZZ4fI6eaNfNNtCO2QFycQ8ZN5K2WmOicqgwuruawQY6pgE6fb8%2BU0lGBzm%2BEPvGPzKo3QtHR37F9X0JvMl%2B4GKrMH5eNYwVVoId9oZ6SsR0Z99swS9NcRzOGqFlwv4k1NBV9l6I%2FNL%2FyL9EcKoSlMWjObDkwWuZPEEPQQYmaxyPQWAJ3dgJGRs%2Fzpn9sDyKX%2BoHtYm9Q%2BrOXZpRS%2F6bxueeZl4ZEUm5KdopgaoXVBZ9ZMQtgXHd%2B4ssM70TUXDJxWTKkctuVWVY&X-Amz-Signature=4550cc3448b17d0e31784540395f5bba27c0582845370b8669b17a6c98917294&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCQQ57%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1PYxYZ9Q8utPriqco7KVQK1kAeYLKGWb7dbD760FSeAiBbXYX7b1qn44Oi3UfKeQ0j9TPsYxOLEpnbDbfcujQVvyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaxJRtvip4cGasY1yKtwDkfIqg3YzPCQ0yCB%2BX66clc4JaZKpMFDUWLy0FV7dhxiEveZ0vEU4%2FVhWhfUkhhAwOfEZna9wTWT0wt57%2FYS3jFjPOSt%2Bc3jVLfjhawY9o0o3m8ojRYovQuViJDcAy%2FqXX%2BfQ%2FueMJuN644ECOSLtKKtdsDRHCyC5i0iHYRtfmryDS7GUCPu96CnCWfBG%2F5LeWvTmsq2Kg%2BQ7Wd19MedrNu1pgVFQ8JzMRn50DgN1dc2MhwiPcZyMfQy9V1ktNZYT612Wttt4%2BSLBWcwT7pCD3j0gL2CL371OurNFF3DEy5IKzYF%2Fthx8InURErmT7GbklsxKp4KnRU9%2FCwWJyGlhIuT9SyBl3Fl2DnWZNgPM23r3DjzhNGnjnoBgV7a0KfOM51OEBRpjOSGtURal341hRUtHNbP%2F1%2FRJO86Lbn4qNJ9Hv21ggaFleED%2BmzbqLHk37Aq7XRkaHqge9ngCcLQbwAl%2BU8H6mP8BrWIWG%2BSIncBjYvNrK47nCminr6qzgyOr%2FvG7YC%2BHLnGk%2F6XdDIVjkBh1zz0TCVWIipJuewHXyC%2FYvUKu%2BHmYMWmqc7%2FStiEiLAVXJJVkPVV%2B%2Fbh4ICWM7%2F7VGZZ4fI6eaNfNNtCO2QFycQ8ZN5K2WmOicqgwuruawQY6pgE6fb8%2BU0lGBzm%2BEPvGPzKo3QtHR37F9X0JvMl%2B4GKrMH5eNYwVVoId9oZ6SsR0Z99swS9NcRzOGqFlwv4k1NBV9l6I%2FNL%2FyL9EcKoSlMWjObDkwWuZPEEPQQYmaxyPQWAJ3dgJGRs%2Fzpn9sDyKX%2BoHtYm9Q%2BrOXZpRS%2F6bxueeZl4ZEUm5KdopgaoXVBZ9ZMQtgXHd%2B4ssM70TUXDJxWTKkctuVWVY&X-Amz-Signature=7d96f8bcb4c4a8b1f76725629183601eaca44eeca1e4f8e434f51747e232dfdb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCQQ57%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1PYxYZ9Q8utPriqco7KVQK1kAeYLKGWb7dbD760FSeAiBbXYX7b1qn44Oi3UfKeQ0j9TPsYxOLEpnbDbfcujQVvyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaxJRtvip4cGasY1yKtwDkfIqg3YzPCQ0yCB%2BX66clc4JaZKpMFDUWLy0FV7dhxiEveZ0vEU4%2FVhWhfUkhhAwOfEZna9wTWT0wt57%2FYS3jFjPOSt%2Bc3jVLfjhawY9o0o3m8ojRYovQuViJDcAy%2FqXX%2BfQ%2FueMJuN644ECOSLtKKtdsDRHCyC5i0iHYRtfmryDS7GUCPu96CnCWfBG%2F5LeWvTmsq2Kg%2BQ7Wd19MedrNu1pgVFQ8JzMRn50DgN1dc2MhwiPcZyMfQy9V1ktNZYT612Wttt4%2BSLBWcwT7pCD3j0gL2CL371OurNFF3DEy5IKzYF%2Fthx8InURErmT7GbklsxKp4KnRU9%2FCwWJyGlhIuT9SyBl3Fl2DnWZNgPM23r3DjzhNGnjnoBgV7a0KfOM51OEBRpjOSGtURal341hRUtHNbP%2F1%2FRJO86Lbn4qNJ9Hv21ggaFleED%2BmzbqLHk37Aq7XRkaHqge9ngCcLQbwAl%2BU8H6mP8BrWIWG%2BSIncBjYvNrK47nCminr6qzgyOr%2FvG7YC%2BHLnGk%2F6XdDIVjkBh1zz0TCVWIipJuewHXyC%2FYvUKu%2BHmYMWmqc7%2FStiEiLAVXJJVkPVV%2B%2Fbh4ICWM7%2F7VGZZ4fI6eaNfNNtCO2QFycQ8ZN5K2WmOicqgwuruawQY6pgE6fb8%2BU0lGBzm%2BEPvGPzKo3QtHR37F9X0JvMl%2B4GKrMH5eNYwVVoId9oZ6SsR0Z99swS9NcRzOGqFlwv4k1NBV9l6I%2FNL%2FyL9EcKoSlMWjObDkwWuZPEEPQQYmaxyPQWAJ3dgJGRs%2Fzpn9sDyKX%2BoHtYm9Q%2BrOXZpRS%2F6bxueeZl4ZEUm5KdopgaoXVBZ9ZMQtgXHd%2B4ssM70TUXDJxWTKkctuVWVY&X-Amz-Signature=95ce3e833007cf02f45d71c820cb9f41fd939e385168d4d201bf0ccd137b58c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCQQ57%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1PYxYZ9Q8utPriqco7KVQK1kAeYLKGWb7dbD760FSeAiBbXYX7b1qn44Oi3UfKeQ0j9TPsYxOLEpnbDbfcujQVvyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaxJRtvip4cGasY1yKtwDkfIqg3YzPCQ0yCB%2BX66clc4JaZKpMFDUWLy0FV7dhxiEveZ0vEU4%2FVhWhfUkhhAwOfEZna9wTWT0wt57%2FYS3jFjPOSt%2Bc3jVLfjhawY9o0o3m8ojRYovQuViJDcAy%2FqXX%2BfQ%2FueMJuN644ECOSLtKKtdsDRHCyC5i0iHYRtfmryDS7GUCPu96CnCWfBG%2F5LeWvTmsq2Kg%2BQ7Wd19MedrNu1pgVFQ8JzMRn50DgN1dc2MhwiPcZyMfQy9V1ktNZYT612Wttt4%2BSLBWcwT7pCD3j0gL2CL371OurNFF3DEy5IKzYF%2Fthx8InURErmT7GbklsxKp4KnRU9%2FCwWJyGlhIuT9SyBl3Fl2DnWZNgPM23r3DjzhNGnjnoBgV7a0KfOM51OEBRpjOSGtURal341hRUtHNbP%2F1%2FRJO86Lbn4qNJ9Hv21ggaFleED%2BmzbqLHk37Aq7XRkaHqge9ngCcLQbwAl%2BU8H6mP8BrWIWG%2BSIncBjYvNrK47nCminr6qzgyOr%2FvG7YC%2BHLnGk%2F6XdDIVjkBh1zz0TCVWIipJuewHXyC%2FYvUKu%2BHmYMWmqc7%2FStiEiLAVXJJVkPVV%2B%2Fbh4ICWM7%2F7VGZZ4fI6eaNfNNtCO2QFycQ8ZN5K2WmOicqgwuruawQY6pgE6fb8%2BU0lGBzm%2BEPvGPzKo3QtHR37F9X0JvMl%2B4GKrMH5eNYwVVoId9oZ6SsR0Z99swS9NcRzOGqFlwv4k1NBV9l6I%2FNL%2FyL9EcKoSlMWjObDkwWuZPEEPQQYmaxyPQWAJ3dgJGRs%2Fzpn9sDyKX%2BoHtYm9Q%2BrOXZpRS%2F6bxueeZl4ZEUm5KdopgaoXVBZ9ZMQtgXHd%2B4ssM70TUXDJxWTKkctuVWVY&X-Amz-Signature=f0afaae69ca62c27835bf08825e3ccf517fa17355256527914b832fd9a4fccf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPCQQ57%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1PYxYZ9Q8utPriqco7KVQK1kAeYLKGWb7dbD760FSeAiBbXYX7b1qn44Oi3UfKeQ0j9TPsYxOLEpnbDbfcujQVvyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMaxJRtvip4cGasY1yKtwDkfIqg3YzPCQ0yCB%2BX66clc4JaZKpMFDUWLy0FV7dhxiEveZ0vEU4%2FVhWhfUkhhAwOfEZna9wTWT0wt57%2FYS3jFjPOSt%2Bc3jVLfjhawY9o0o3m8ojRYovQuViJDcAy%2FqXX%2BfQ%2FueMJuN644ECOSLtKKtdsDRHCyC5i0iHYRtfmryDS7GUCPu96CnCWfBG%2F5LeWvTmsq2Kg%2BQ7Wd19MedrNu1pgVFQ8JzMRn50DgN1dc2MhwiPcZyMfQy9V1ktNZYT612Wttt4%2BSLBWcwT7pCD3j0gL2CL371OurNFF3DEy5IKzYF%2Fthx8InURErmT7GbklsxKp4KnRU9%2FCwWJyGlhIuT9SyBl3Fl2DnWZNgPM23r3DjzhNGnjnoBgV7a0KfOM51OEBRpjOSGtURal341hRUtHNbP%2F1%2FRJO86Lbn4qNJ9Hv21ggaFleED%2BmzbqLHk37Aq7XRkaHqge9ngCcLQbwAl%2BU8H6mP8BrWIWG%2BSIncBjYvNrK47nCminr6qzgyOr%2FvG7YC%2BHLnGk%2F6XdDIVjkBh1zz0TCVWIipJuewHXyC%2FYvUKu%2BHmYMWmqc7%2FStiEiLAVXJJVkPVV%2B%2Fbh4ICWM7%2F7VGZZ4fI6eaNfNNtCO2QFycQ8ZN5K2WmOicqgwuruawQY6pgE6fb8%2BU0lGBzm%2BEPvGPzKo3QtHR37F9X0JvMl%2B4GKrMH5eNYwVVoId9oZ6SsR0Z99swS9NcRzOGqFlwv4k1NBV9l6I%2FNL%2FyL9EcKoSlMWjObDkwWuZPEEPQQYmaxyPQWAJ3dgJGRs%2Fzpn9sDyKX%2BoHtYm9Q%2BrOXZpRS%2F6bxueeZl4ZEUm5KdopgaoXVBZ9ZMQtgXHd%2B4ssM70TUXDJxWTKkctuVWVY&X-Amz-Signature=ce340ea516279ccf12d4c821c76da229fa13e9721268adeb29ed631a0341ea9f&X-Amz-SignedHeaders=host&x-id=GetObject)
