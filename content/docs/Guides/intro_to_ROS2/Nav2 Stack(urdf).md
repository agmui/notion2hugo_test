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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YP3MJI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRd3uwLpTj4oZtCTL2XrgpAtqnSYZGiNj9oKPG5DmrOAiA5RYseWKcSyDtSDul9zn25PSn%2FaYj2b7e1S%2FO3CCyORiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIzDaE5dOTOkbFOWKtwDteEYosv0nllJZdQrPWiHbwoU9bgQoDRb6xD%2BKkbT7XqhzXB%2B82%2FnHWjUVqm9JOPde3jwQ2n56QALwNF8IXAP0Dn1gxWxcDHm%2BtzHVd3Kjfm42bpYoSkKS0XylNQEoD9IozRHx5OZDb1GM3B6fxusnWIq3UXxC6Ek8dEwN0lPiv8LBzRPq5SFvlRC776jZK2rUSL7vekG11QvtvKGmwD5HQAxZ7N9YS%2FhaNVWDXK7o%2Bg9J534HQp%2BOPHb1BcJ6x7EYNZa1nvZt2CZ70dcwZfJF7PzSUUHOVfwm9kRrGqYM7K%2B9wT40GuwbEPTEfclEopRn4xqjOEzgvVPBQSOg43Ak19%2FF65sBRegUjpxY%2FeUVZWAhDlgAJOK7Ub5koOqTTtecHqLX9JlzZ%2B4707HHfTfFIK%2B9%2FaI40BEm7aaq%2Bf%2FrgF2VeglOdOo1K3cL5JObkB1nnVw1oiVPlbQWYpFkLxnG8tal%2FTzXEEiOGAqBg8%2BJ4OIl7B71ksV8fuHwNdUpYQB4rhjJnQJlA7CykBJWyKToi%2Fu7YiYvKBb%2BDCcOU2N6H5ltS3qQxiO1gnYs4Sp0rYqz1g5AqCDURelENHSm4vhcdIaAuzXky7%2Fsmdz5BlJp8dv5LQWbgvPBap6hCMwuJyWvgY6pgGdanKk9OmLt4wL0Gkuh%2BBxTZ5clgp6lZUa1VpfeCfjIYNw4TSdofc%2F7M6lQhw3l515Nz3VvOi7Y33T06ysOTKAUifx1uk8uoBQgofb0RlbUIwzFVlFKlZYCPM5%2Bhq79WUKXwypzUTyui3LzBSZionbhfz%2F3nk9SDe0OPaY9bp3CvPfFq7gPZL6eMwkq8YxQ8e0LSLUDcf6TjZL6FwoV6OW6ytq%2BPt9&X-Amz-Signature=4dc7910c4a65e9785f57cc4a50dbf04ff3e0d6f5e309328730a6fc77ad206044&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YP3MJI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRd3uwLpTj4oZtCTL2XrgpAtqnSYZGiNj9oKPG5DmrOAiA5RYseWKcSyDtSDul9zn25PSn%2FaYj2b7e1S%2FO3CCyORiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIzDaE5dOTOkbFOWKtwDteEYosv0nllJZdQrPWiHbwoU9bgQoDRb6xD%2BKkbT7XqhzXB%2B82%2FnHWjUVqm9JOPde3jwQ2n56QALwNF8IXAP0Dn1gxWxcDHm%2BtzHVd3Kjfm42bpYoSkKS0XylNQEoD9IozRHx5OZDb1GM3B6fxusnWIq3UXxC6Ek8dEwN0lPiv8LBzRPq5SFvlRC776jZK2rUSL7vekG11QvtvKGmwD5HQAxZ7N9YS%2FhaNVWDXK7o%2Bg9J534HQp%2BOPHb1BcJ6x7EYNZa1nvZt2CZ70dcwZfJF7PzSUUHOVfwm9kRrGqYM7K%2B9wT40GuwbEPTEfclEopRn4xqjOEzgvVPBQSOg43Ak19%2FF65sBRegUjpxY%2FeUVZWAhDlgAJOK7Ub5koOqTTtecHqLX9JlzZ%2B4707HHfTfFIK%2B9%2FaI40BEm7aaq%2Bf%2FrgF2VeglOdOo1K3cL5JObkB1nnVw1oiVPlbQWYpFkLxnG8tal%2FTzXEEiOGAqBg8%2BJ4OIl7B71ksV8fuHwNdUpYQB4rhjJnQJlA7CykBJWyKToi%2Fu7YiYvKBb%2BDCcOU2N6H5ltS3qQxiO1gnYs4Sp0rYqz1g5AqCDURelENHSm4vhcdIaAuzXky7%2Fsmdz5BlJp8dv5LQWbgvPBap6hCMwuJyWvgY6pgGdanKk9OmLt4wL0Gkuh%2BBxTZ5clgp6lZUa1VpfeCfjIYNw4TSdofc%2F7M6lQhw3l515Nz3VvOi7Y33T06ysOTKAUifx1uk8uoBQgofb0RlbUIwzFVlFKlZYCPM5%2Bhq79WUKXwypzUTyui3LzBSZionbhfz%2F3nk9SDe0OPaY9bp3CvPfFq7gPZL6eMwkq8YxQ8e0LSLUDcf6TjZL6FwoV6OW6ytq%2BPt9&X-Amz-Signature=c550a0f48259a5ebd4b35332292b05b97840ac329f42196f7653728702fc1420&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YP3MJI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRd3uwLpTj4oZtCTL2XrgpAtqnSYZGiNj9oKPG5DmrOAiA5RYseWKcSyDtSDul9zn25PSn%2FaYj2b7e1S%2FO3CCyORiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIzDaE5dOTOkbFOWKtwDteEYosv0nllJZdQrPWiHbwoU9bgQoDRb6xD%2BKkbT7XqhzXB%2B82%2FnHWjUVqm9JOPde3jwQ2n56QALwNF8IXAP0Dn1gxWxcDHm%2BtzHVd3Kjfm42bpYoSkKS0XylNQEoD9IozRHx5OZDb1GM3B6fxusnWIq3UXxC6Ek8dEwN0lPiv8LBzRPq5SFvlRC776jZK2rUSL7vekG11QvtvKGmwD5HQAxZ7N9YS%2FhaNVWDXK7o%2Bg9J534HQp%2BOPHb1BcJ6x7EYNZa1nvZt2CZ70dcwZfJF7PzSUUHOVfwm9kRrGqYM7K%2B9wT40GuwbEPTEfclEopRn4xqjOEzgvVPBQSOg43Ak19%2FF65sBRegUjpxY%2FeUVZWAhDlgAJOK7Ub5koOqTTtecHqLX9JlzZ%2B4707HHfTfFIK%2B9%2FaI40BEm7aaq%2Bf%2FrgF2VeglOdOo1K3cL5JObkB1nnVw1oiVPlbQWYpFkLxnG8tal%2FTzXEEiOGAqBg8%2BJ4OIl7B71ksV8fuHwNdUpYQB4rhjJnQJlA7CykBJWyKToi%2Fu7YiYvKBb%2BDCcOU2N6H5ltS3qQxiO1gnYs4Sp0rYqz1g5AqCDURelENHSm4vhcdIaAuzXky7%2Fsmdz5BlJp8dv5LQWbgvPBap6hCMwuJyWvgY6pgGdanKk9OmLt4wL0Gkuh%2BBxTZ5clgp6lZUa1VpfeCfjIYNw4TSdofc%2F7M6lQhw3l515Nz3VvOi7Y33T06ysOTKAUifx1uk8uoBQgofb0RlbUIwzFVlFKlZYCPM5%2Bhq79WUKXwypzUTyui3LzBSZionbhfz%2F3nk9SDe0OPaY9bp3CvPfFq7gPZL6eMwkq8YxQ8e0LSLUDcf6TjZL6FwoV6OW6ytq%2BPt9&X-Amz-Signature=a6f297f22fd62d740949993971d9b91102b6d6aa2b57102dc891f55456854cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YP3MJI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRd3uwLpTj4oZtCTL2XrgpAtqnSYZGiNj9oKPG5DmrOAiA5RYseWKcSyDtSDul9zn25PSn%2FaYj2b7e1S%2FO3CCyORiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIzDaE5dOTOkbFOWKtwDteEYosv0nllJZdQrPWiHbwoU9bgQoDRb6xD%2BKkbT7XqhzXB%2B82%2FnHWjUVqm9JOPde3jwQ2n56QALwNF8IXAP0Dn1gxWxcDHm%2BtzHVd3Kjfm42bpYoSkKS0XylNQEoD9IozRHx5OZDb1GM3B6fxusnWIq3UXxC6Ek8dEwN0lPiv8LBzRPq5SFvlRC776jZK2rUSL7vekG11QvtvKGmwD5HQAxZ7N9YS%2FhaNVWDXK7o%2Bg9J534HQp%2BOPHb1BcJ6x7EYNZa1nvZt2CZ70dcwZfJF7PzSUUHOVfwm9kRrGqYM7K%2B9wT40GuwbEPTEfclEopRn4xqjOEzgvVPBQSOg43Ak19%2FF65sBRegUjpxY%2FeUVZWAhDlgAJOK7Ub5koOqTTtecHqLX9JlzZ%2B4707HHfTfFIK%2B9%2FaI40BEm7aaq%2Bf%2FrgF2VeglOdOo1K3cL5JObkB1nnVw1oiVPlbQWYpFkLxnG8tal%2FTzXEEiOGAqBg8%2BJ4OIl7B71ksV8fuHwNdUpYQB4rhjJnQJlA7CykBJWyKToi%2Fu7YiYvKBb%2BDCcOU2N6H5ltS3qQxiO1gnYs4Sp0rYqz1g5AqCDURelENHSm4vhcdIaAuzXky7%2Fsmdz5BlJp8dv5LQWbgvPBap6hCMwuJyWvgY6pgGdanKk9OmLt4wL0Gkuh%2BBxTZ5clgp6lZUa1VpfeCfjIYNw4TSdofc%2F7M6lQhw3l515Nz3VvOi7Y33T06ysOTKAUifx1uk8uoBQgofb0RlbUIwzFVlFKlZYCPM5%2Bhq79WUKXwypzUTyui3LzBSZionbhfz%2F3nk9SDe0OPaY9bp3CvPfFq7gPZL6eMwkq8YxQ8e0LSLUDcf6TjZL6FwoV6OW6ytq%2BPt9&X-Amz-Signature=d806359a6eacb1829245cf3560af0fc54d5ed3a909385911b6a4a8e828215aad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YP3MJI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRd3uwLpTj4oZtCTL2XrgpAtqnSYZGiNj9oKPG5DmrOAiA5RYseWKcSyDtSDul9zn25PSn%2FaYj2b7e1S%2FO3CCyORiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIzDaE5dOTOkbFOWKtwDteEYosv0nllJZdQrPWiHbwoU9bgQoDRb6xD%2BKkbT7XqhzXB%2B82%2FnHWjUVqm9JOPde3jwQ2n56QALwNF8IXAP0Dn1gxWxcDHm%2BtzHVd3Kjfm42bpYoSkKS0XylNQEoD9IozRHx5OZDb1GM3B6fxusnWIq3UXxC6Ek8dEwN0lPiv8LBzRPq5SFvlRC776jZK2rUSL7vekG11QvtvKGmwD5HQAxZ7N9YS%2FhaNVWDXK7o%2Bg9J534HQp%2BOPHb1BcJ6x7EYNZa1nvZt2CZ70dcwZfJF7PzSUUHOVfwm9kRrGqYM7K%2B9wT40GuwbEPTEfclEopRn4xqjOEzgvVPBQSOg43Ak19%2FF65sBRegUjpxY%2FeUVZWAhDlgAJOK7Ub5koOqTTtecHqLX9JlzZ%2B4707HHfTfFIK%2B9%2FaI40BEm7aaq%2Bf%2FrgF2VeglOdOo1K3cL5JObkB1nnVw1oiVPlbQWYpFkLxnG8tal%2FTzXEEiOGAqBg8%2BJ4OIl7B71ksV8fuHwNdUpYQB4rhjJnQJlA7CykBJWyKToi%2Fu7YiYvKBb%2BDCcOU2N6H5ltS3qQxiO1gnYs4Sp0rYqz1g5AqCDURelENHSm4vhcdIaAuzXky7%2Fsmdz5BlJp8dv5LQWbgvPBap6hCMwuJyWvgY6pgGdanKk9OmLt4wL0Gkuh%2BBxTZ5clgp6lZUa1VpfeCfjIYNw4TSdofc%2F7M6lQhw3l515Nz3VvOi7Y33T06ysOTKAUifx1uk8uoBQgofb0RlbUIwzFVlFKlZYCPM5%2Bhq79WUKXwypzUTyui3LzBSZionbhfz%2F3nk9SDe0OPaY9bp3CvPfFq7gPZL6eMwkq8YxQ8e0LSLUDcf6TjZL6FwoV6OW6ytq%2BPt9&X-Amz-Signature=73e41fe97f7eb00e88205a701dc31c357a7e7619621f8c7fe34f53eb1212945c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2YP3MJI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRd3uwLpTj4oZtCTL2XrgpAtqnSYZGiNj9oKPG5DmrOAiA5RYseWKcSyDtSDul9zn25PSn%2FaYj2b7e1S%2FO3CCyORiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBIzDaE5dOTOkbFOWKtwDteEYosv0nllJZdQrPWiHbwoU9bgQoDRb6xD%2BKkbT7XqhzXB%2B82%2FnHWjUVqm9JOPde3jwQ2n56QALwNF8IXAP0Dn1gxWxcDHm%2BtzHVd3Kjfm42bpYoSkKS0XylNQEoD9IozRHx5OZDb1GM3B6fxusnWIq3UXxC6Ek8dEwN0lPiv8LBzRPq5SFvlRC776jZK2rUSL7vekG11QvtvKGmwD5HQAxZ7N9YS%2FhaNVWDXK7o%2Bg9J534HQp%2BOPHb1BcJ6x7EYNZa1nvZt2CZ70dcwZfJF7PzSUUHOVfwm9kRrGqYM7K%2B9wT40GuwbEPTEfclEopRn4xqjOEzgvVPBQSOg43Ak19%2FF65sBRegUjpxY%2FeUVZWAhDlgAJOK7Ub5koOqTTtecHqLX9JlzZ%2B4707HHfTfFIK%2B9%2FaI40BEm7aaq%2Bf%2FrgF2VeglOdOo1K3cL5JObkB1nnVw1oiVPlbQWYpFkLxnG8tal%2FTzXEEiOGAqBg8%2BJ4OIl7B71ksV8fuHwNdUpYQB4rhjJnQJlA7CykBJWyKToi%2Fu7YiYvKBb%2BDCcOU2N6H5ltS3qQxiO1gnYs4Sp0rYqz1g5AqCDURelENHSm4vhcdIaAuzXky7%2Fsmdz5BlJp8dv5LQWbgvPBap6hCMwuJyWvgY6pgGdanKk9OmLt4wL0Gkuh%2BBxTZ5clgp6lZUa1VpfeCfjIYNw4TSdofc%2F7M6lQhw3l515Nz3VvOi7Y33T06ysOTKAUifx1uk8uoBQgofb0RlbUIwzFVlFKlZYCPM5%2Bhq79WUKXwypzUTyui3LzBSZionbhfz%2F3nk9SDe0OPaY9bp3CvPfFq7gPZL6eMwkq8YxQ8e0LSLUDcf6TjZL6FwoV6OW6ytq%2BPt9&X-Amz-Signature=13ffd1229a39bb255f81b0eec235519c7cc94dc28084076b8e8016d8e472eb7a&X-Amz-SignedHeaders=host&x-id=GetObject)
