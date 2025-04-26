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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN7PYD7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLol9wXJPMHSL1as1Cu4trxEw0aQIjs3i9jn16umovowIhANgTl0zWQxLIPpO9s8KBdYRLn3f9c2i0sbkhcRmaLiFkKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyMKWA0flgWqxVp7Yq3AMthpfuZ%2BrX%2B%2BR%2B%2FVbfIBs5jlNk%2FXV0Im%2FVp5QsVi9P3xURsHQSgA98TQLYq8rMZQOk%2BIQss3pLEbzx6iZ7NwMlHskvbGZPm7uLiESjBQmaIUAubcXV7fB0U1mYWXhGTi%2FgZsz0BlLfswGy5PjsG64RGRqkVKPh5CMCsRVSNKUzTgJ6M9ODGhUZNoTH45bk4LTB7FANF1mo125CWXZ%2Bsnjioh8vuVRAtmg6Jl4DRun9faZkLdDyZxsXIO2esvTY7c5ae404%2BFMsHCaK%2F8%2FDVjJ%2BPxqbY%2Fi0K7eFN86Msx5x9AQfh20zBCisqUuiLqa7eYu5LyOeDaJmNPvydwuNUGYd5abdHAxgoI%2FTRfqCWmiWLC55%2BGCFU%2FBuRYXxYVdH5ZWlt4FcqS0bscjdKUVXfaHQ7v%2BIc9mTVnLnUh2CCZXRfdUYbSWIixSqVybaBDF0wU2O2IXgCNbEfsIIMBIgV%2BCohv60kjYoLdWXPZSy2htoKywAlptdWP0P2KdUaYmTccj91iO1bleobDLogBDMQZMSDQ2VTrSpZf1Ja75zIKBXR3OFB1X5jbYu%2FVYClsBvvJoSi63RV3YnSGIpbfu7DA2B9x0LFqtZ4klzomRFsh3RCln1Q62ZWzy9XcD6fjCqhLLABjqkASpIkLZNzKa12ENxjuHCyABnzxF4OUORlQeU3SV1V1fbfgb%2FI9oL6ttrPFNNQa14%2FkDDeeDU2cVPlwKPJqiFUm1NZ9znx%2FHjn0lWXuy4RQaf%2FtVL%2BecVVR4ny%2FvKhk%2FmrCWykXbNes5uPwjQ5FZ4V0adoxN4oON8fMxvOhvatGfNN2e5g7WBQ5QmwosL3Obd%2FOYlu8qdZDp4eFAwZsM6HT0YjgED&X-Amz-Signature=5e9c0137fae7600b5efdb46fc78205eecae4a821c5b67bb1d913fb31d5da98b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN7PYD7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLol9wXJPMHSL1as1Cu4trxEw0aQIjs3i9jn16umovowIhANgTl0zWQxLIPpO9s8KBdYRLn3f9c2i0sbkhcRmaLiFkKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyMKWA0flgWqxVp7Yq3AMthpfuZ%2BrX%2B%2BR%2B%2FVbfIBs5jlNk%2FXV0Im%2FVp5QsVi9P3xURsHQSgA98TQLYq8rMZQOk%2BIQss3pLEbzx6iZ7NwMlHskvbGZPm7uLiESjBQmaIUAubcXV7fB0U1mYWXhGTi%2FgZsz0BlLfswGy5PjsG64RGRqkVKPh5CMCsRVSNKUzTgJ6M9ODGhUZNoTH45bk4LTB7FANF1mo125CWXZ%2Bsnjioh8vuVRAtmg6Jl4DRun9faZkLdDyZxsXIO2esvTY7c5ae404%2BFMsHCaK%2F8%2FDVjJ%2BPxqbY%2Fi0K7eFN86Msx5x9AQfh20zBCisqUuiLqa7eYu5LyOeDaJmNPvydwuNUGYd5abdHAxgoI%2FTRfqCWmiWLC55%2BGCFU%2FBuRYXxYVdH5ZWlt4FcqS0bscjdKUVXfaHQ7v%2BIc9mTVnLnUh2CCZXRfdUYbSWIixSqVybaBDF0wU2O2IXgCNbEfsIIMBIgV%2BCohv60kjYoLdWXPZSy2htoKywAlptdWP0P2KdUaYmTccj91iO1bleobDLogBDMQZMSDQ2VTrSpZf1Ja75zIKBXR3OFB1X5jbYu%2FVYClsBvvJoSi63RV3YnSGIpbfu7DA2B9x0LFqtZ4klzomRFsh3RCln1Q62ZWzy9XcD6fjCqhLLABjqkASpIkLZNzKa12ENxjuHCyABnzxF4OUORlQeU3SV1V1fbfgb%2FI9oL6ttrPFNNQa14%2FkDDeeDU2cVPlwKPJqiFUm1NZ9znx%2FHjn0lWXuy4RQaf%2FtVL%2BecVVR4ny%2FvKhk%2FmrCWykXbNes5uPwjQ5FZ4V0adoxN4oON8fMxvOhvatGfNN2e5g7WBQ5QmwosL3Obd%2FOYlu8qdZDp4eFAwZsM6HT0YjgED&X-Amz-Signature=1d8c6485adc3c7223ab98e7817d160fbb2035a5d82bdef9e0b827816bfe2f0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN7PYD7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLol9wXJPMHSL1as1Cu4trxEw0aQIjs3i9jn16umovowIhANgTl0zWQxLIPpO9s8KBdYRLn3f9c2i0sbkhcRmaLiFkKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyMKWA0flgWqxVp7Yq3AMthpfuZ%2BrX%2B%2BR%2B%2FVbfIBs5jlNk%2FXV0Im%2FVp5QsVi9P3xURsHQSgA98TQLYq8rMZQOk%2BIQss3pLEbzx6iZ7NwMlHskvbGZPm7uLiESjBQmaIUAubcXV7fB0U1mYWXhGTi%2FgZsz0BlLfswGy5PjsG64RGRqkVKPh5CMCsRVSNKUzTgJ6M9ODGhUZNoTH45bk4LTB7FANF1mo125CWXZ%2Bsnjioh8vuVRAtmg6Jl4DRun9faZkLdDyZxsXIO2esvTY7c5ae404%2BFMsHCaK%2F8%2FDVjJ%2BPxqbY%2Fi0K7eFN86Msx5x9AQfh20zBCisqUuiLqa7eYu5LyOeDaJmNPvydwuNUGYd5abdHAxgoI%2FTRfqCWmiWLC55%2BGCFU%2FBuRYXxYVdH5ZWlt4FcqS0bscjdKUVXfaHQ7v%2BIc9mTVnLnUh2CCZXRfdUYbSWIixSqVybaBDF0wU2O2IXgCNbEfsIIMBIgV%2BCohv60kjYoLdWXPZSy2htoKywAlptdWP0P2KdUaYmTccj91iO1bleobDLogBDMQZMSDQ2VTrSpZf1Ja75zIKBXR3OFB1X5jbYu%2FVYClsBvvJoSi63RV3YnSGIpbfu7DA2B9x0LFqtZ4klzomRFsh3RCln1Q62ZWzy9XcD6fjCqhLLABjqkASpIkLZNzKa12ENxjuHCyABnzxF4OUORlQeU3SV1V1fbfgb%2FI9oL6ttrPFNNQa14%2FkDDeeDU2cVPlwKPJqiFUm1NZ9znx%2FHjn0lWXuy4RQaf%2FtVL%2BecVVR4ny%2FvKhk%2FmrCWykXbNes5uPwjQ5FZ4V0adoxN4oON8fMxvOhvatGfNN2e5g7WBQ5QmwosL3Obd%2FOYlu8qdZDp4eFAwZsM6HT0YjgED&X-Amz-Signature=25d759f1acdceeeeb4d783c2df2a04539d623061535d653f73683f6cd5ba4b95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN7PYD7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLol9wXJPMHSL1as1Cu4trxEw0aQIjs3i9jn16umovowIhANgTl0zWQxLIPpO9s8KBdYRLn3f9c2i0sbkhcRmaLiFkKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyMKWA0flgWqxVp7Yq3AMthpfuZ%2BrX%2B%2BR%2B%2FVbfIBs5jlNk%2FXV0Im%2FVp5QsVi9P3xURsHQSgA98TQLYq8rMZQOk%2BIQss3pLEbzx6iZ7NwMlHskvbGZPm7uLiESjBQmaIUAubcXV7fB0U1mYWXhGTi%2FgZsz0BlLfswGy5PjsG64RGRqkVKPh5CMCsRVSNKUzTgJ6M9ODGhUZNoTH45bk4LTB7FANF1mo125CWXZ%2Bsnjioh8vuVRAtmg6Jl4DRun9faZkLdDyZxsXIO2esvTY7c5ae404%2BFMsHCaK%2F8%2FDVjJ%2BPxqbY%2Fi0K7eFN86Msx5x9AQfh20zBCisqUuiLqa7eYu5LyOeDaJmNPvydwuNUGYd5abdHAxgoI%2FTRfqCWmiWLC55%2BGCFU%2FBuRYXxYVdH5ZWlt4FcqS0bscjdKUVXfaHQ7v%2BIc9mTVnLnUh2CCZXRfdUYbSWIixSqVybaBDF0wU2O2IXgCNbEfsIIMBIgV%2BCohv60kjYoLdWXPZSy2htoKywAlptdWP0P2KdUaYmTccj91iO1bleobDLogBDMQZMSDQ2VTrSpZf1Ja75zIKBXR3OFB1X5jbYu%2FVYClsBvvJoSi63RV3YnSGIpbfu7DA2B9x0LFqtZ4klzomRFsh3RCln1Q62ZWzy9XcD6fjCqhLLABjqkASpIkLZNzKa12ENxjuHCyABnzxF4OUORlQeU3SV1V1fbfgb%2FI9oL6ttrPFNNQa14%2FkDDeeDU2cVPlwKPJqiFUm1NZ9znx%2FHjn0lWXuy4RQaf%2FtVL%2BecVVR4ny%2FvKhk%2FmrCWykXbNes5uPwjQ5FZ4V0adoxN4oON8fMxvOhvatGfNN2e5g7WBQ5QmwosL3Obd%2FOYlu8qdZDp4eFAwZsM6HT0YjgED&X-Amz-Signature=8a02b90b76e3e8a0f12773353b1573785ba6fec4afd297f9c0ea2a3d80024527&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN7PYD7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLol9wXJPMHSL1as1Cu4trxEw0aQIjs3i9jn16umovowIhANgTl0zWQxLIPpO9s8KBdYRLn3f9c2i0sbkhcRmaLiFkKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyMKWA0flgWqxVp7Yq3AMthpfuZ%2BrX%2B%2BR%2B%2FVbfIBs5jlNk%2FXV0Im%2FVp5QsVi9P3xURsHQSgA98TQLYq8rMZQOk%2BIQss3pLEbzx6iZ7NwMlHskvbGZPm7uLiESjBQmaIUAubcXV7fB0U1mYWXhGTi%2FgZsz0BlLfswGy5PjsG64RGRqkVKPh5CMCsRVSNKUzTgJ6M9ODGhUZNoTH45bk4LTB7FANF1mo125CWXZ%2Bsnjioh8vuVRAtmg6Jl4DRun9faZkLdDyZxsXIO2esvTY7c5ae404%2BFMsHCaK%2F8%2FDVjJ%2BPxqbY%2Fi0K7eFN86Msx5x9AQfh20zBCisqUuiLqa7eYu5LyOeDaJmNPvydwuNUGYd5abdHAxgoI%2FTRfqCWmiWLC55%2BGCFU%2FBuRYXxYVdH5ZWlt4FcqS0bscjdKUVXfaHQ7v%2BIc9mTVnLnUh2CCZXRfdUYbSWIixSqVybaBDF0wU2O2IXgCNbEfsIIMBIgV%2BCohv60kjYoLdWXPZSy2htoKywAlptdWP0P2KdUaYmTccj91iO1bleobDLogBDMQZMSDQ2VTrSpZf1Ja75zIKBXR3OFB1X5jbYu%2FVYClsBvvJoSi63RV3YnSGIpbfu7DA2B9x0LFqtZ4klzomRFsh3RCln1Q62ZWzy9XcD6fjCqhLLABjqkASpIkLZNzKa12ENxjuHCyABnzxF4OUORlQeU3SV1V1fbfgb%2FI9oL6ttrPFNNQa14%2FkDDeeDU2cVPlwKPJqiFUm1NZ9znx%2FHjn0lWXuy4RQaf%2FtVL%2BecVVR4ny%2FvKhk%2FmrCWykXbNes5uPwjQ5FZ4V0adoxN4oON8fMxvOhvatGfNN2e5g7WBQ5QmwosL3Obd%2FOYlu8qdZDp4eFAwZsM6HT0YjgED&X-Amz-Signature=069c0b1db9441b150e1e9d30b6aeabe26465296ee200006389fe660f919bbc96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN7PYD7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLol9wXJPMHSL1as1Cu4trxEw0aQIjs3i9jn16umovowIhANgTl0zWQxLIPpO9s8KBdYRLn3f9c2i0sbkhcRmaLiFkKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyMKWA0flgWqxVp7Yq3AMthpfuZ%2BrX%2B%2BR%2B%2FVbfIBs5jlNk%2FXV0Im%2FVp5QsVi9P3xURsHQSgA98TQLYq8rMZQOk%2BIQss3pLEbzx6iZ7NwMlHskvbGZPm7uLiESjBQmaIUAubcXV7fB0U1mYWXhGTi%2FgZsz0BlLfswGy5PjsG64RGRqkVKPh5CMCsRVSNKUzTgJ6M9ODGhUZNoTH45bk4LTB7FANF1mo125CWXZ%2Bsnjioh8vuVRAtmg6Jl4DRun9faZkLdDyZxsXIO2esvTY7c5ae404%2BFMsHCaK%2F8%2FDVjJ%2BPxqbY%2Fi0K7eFN86Msx5x9AQfh20zBCisqUuiLqa7eYu5LyOeDaJmNPvydwuNUGYd5abdHAxgoI%2FTRfqCWmiWLC55%2BGCFU%2FBuRYXxYVdH5ZWlt4FcqS0bscjdKUVXfaHQ7v%2BIc9mTVnLnUh2CCZXRfdUYbSWIixSqVybaBDF0wU2O2IXgCNbEfsIIMBIgV%2BCohv60kjYoLdWXPZSy2htoKywAlptdWP0P2KdUaYmTccj91iO1bleobDLogBDMQZMSDQ2VTrSpZf1Ja75zIKBXR3OFB1X5jbYu%2FVYClsBvvJoSi63RV3YnSGIpbfu7DA2B9x0LFqtZ4klzomRFsh3RCln1Q62ZWzy9XcD6fjCqhLLABjqkASpIkLZNzKa12ENxjuHCyABnzxF4OUORlQeU3SV1V1fbfgb%2FI9oL6ttrPFNNQa14%2FkDDeeDU2cVPlwKPJqiFUm1NZ9znx%2FHjn0lWXuy4RQaf%2FtVL%2BecVVR4ny%2FvKhk%2FmrCWykXbNes5uPwjQ5FZ4V0adoxN4oON8fMxvOhvatGfNN2e5g7WBQ5QmwosL3Obd%2FOYlu8qdZDp4eFAwZsM6HT0YjgED&X-Amz-Signature=e337ea45938e8136093008ae831c76862bfd70428c2fe1cdc40cea1f95c0184d&X-Amz-SignedHeaders=host&x-id=GetObject)
