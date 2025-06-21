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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUZMHVC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5dT2vu%2F8ey6uUbxbjM5tY4%2BA7BGp2%2BuAyLAiqmhqfwIgE%2FXq7sYfhayv3PqUMpDDUwP6qwLVcygi3pF3PXN67mMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsX0zLjZBg0ZBLDbCrcA2Jv9H4yvgokpJj0TAEDHGE20YkzeSaSYBqrrHWWnbjYkf47Z9lBvqvwvYyM3H9pVCrwIRxUA3YBg2Yd8uJze7qO1%2FerzDoNmDmTQ5ksDVaEIHvDcyHtCe%2Fwuo%2FCcfVG9kmvHX%2FUdfjQjBc7wUT87U7hFuF%2BEXuI9Y9RvXEjJiMwU3PwgAkBysCZG03E4uu9GzPL90q%2FfyyRkpYpmEC%2F4qXhE73g%2F3BRKBXWVJgHkYMPMvoseNnVxeRGeVRuunjW3k%2B1eXvgRuQc214hrPdKPtXbsGMlQd9BJj0MNj%2FOvdZllNhm9l1%2FOZJGFk77Uga%2FkuZjJnGTHL7AGGaiVo2bzlxr7NA6WcbbCF90j2ERzVGvBxNmMq3NSUmemXzPsntLupKvUHSkD6YM1VV696hUhlAjh4FAKY5y5tiJ9oa3%2BQ433%2BHo4gEQwZT0jNWZYtllkjtbyuP36dyCeEGxzF17z18a4RMCIn0qw%2F8eAgQ5ztlGJ7LwoAwEhOvjPFHyjc9n222VfgLLzAOn%2FwyfDkH91y7H1aMY7D6kEvpD7Fma4sNZd5%2Baub5nWT6XpEuvxgXjTieuWhFxes4ycCcGPE%2FQBhmpnbM1xOJnHvXcVdsvBdOeFtSv0bp%2B5fBQ6dVyMJiw2MIGOqUBOuPdBWz7cuv76REvw4O389Z6bwXOB1kDVnIqBJhadxyVnEmO8rbD9vpiPOFLb2S3pnb3CdhjadeO1D9BqYphcH4ova2wAL0iKIIS2lp6zxWJWY8iNQM22xo9C0wbaWGnBGMPy7fUoJdR1%2BGF6TaCSTqFe%2F4x1BsXZuAlzVhozoRon%2FpEsGdGK5LmteDLrTnBVjZMfKhSGa5JNqPArGQlJ3bj%2B7vG&X-Amz-Signature=9a365bb0d8d9febd72a9a473dfee688f361030683bb340cbd002aaf50af25aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUZMHVC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5dT2vu%2F8ey6uUbxbjM5tY4%2BA7BGp2%2BuAyLAiqmhqfwIgE%2FXq7sYfhayv3PqUMpDDUwP6qwLVcygi3pF3PXN67mMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsX0zLjZBg0ZBLDbCrcA2Jv9H4yvgokpJj0TAEDHGE20YkzeSaSYBqrrHWWnbjYkf47Z9lBvqvwvYyM3H9pVCrwIRxUA3YBg2Yd8uJze7qO1%2FerzDoNmDmTQ5ksDVaEIHvDcyHtCe%2Fwuo%2FCcfVG9kmvHX%2FUdfjQjBc7wUT87U7hFuF%2BEXuI9Y9RvXEjJiMwU3PwgAkBysCZG03E4uu9GzPL90q%2FfyyRkpYpmEC%2F4qXhE73g%2F3BRKBXWVJgHkYMPMvoseNnVxeRGeVRuunjW3k%2B1eXvgRuQc214hrPdKPtXbsGMlQd9BJj0MNj%2FOvdZllNhm9l1%2FOZJGFk77Uga%2FkuZjJnGTHL7AGGaiVo2bzlxr7NA6WcbbCF90j2ERzVGvBxNmMq3NSUmemXzPsntLupKvUHSkD6YM1VV696hUhlAjh4FAKY5y5tiJ9oa3%2BQ433%2BHo4gEQwZT0jNWZYtllkjtbyuP36dyCeEGxzF17z18a4RMCIn0qw%2F8eAgQ5ztlGJ7LwoAwEhOvjPFHyjc9n222VfgLLzAOn%2FwyfDkH91y7H1aMY7D6kEvpD7Fma4sNZd5%2Baub5nWT6XpEuvxgXjTieuWhFxes4ycCcGPE%2FQBhmpnbM1xOJnHvXcVdsvBdOeFtSv0bp%2B5fBQ6dVyMJiw2MIGOqUBOuPdBWz7cuv76REvw4O389Z6bwXOB1kDVnIqBJhadxyVnEmO8rbD9vpiPOFLb2S3pnb3CdhjadeO1D9BqYphcH4ova2wAL0iKIIS2lp6zxWJWY8iNQM22xo9C0wbaWGnBGMPy7fUoJdR1%2BGF6TaCSTqFe%2F4x1BsXZuAlzVhozoRon%2FpEsGdGK5LmteDLrTnBVjZMfKhSGa5JNqPArGQlJ3bj%2B7vG&X-Amz-Signature=34a2b9df72b832df2afab125e3a05876741a950a71983886cc666900652b37c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUZMHVC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5dT2vu%2F8ey6uUbxbjM5tY4%2BA7BGp2%2BuAyLAiqmhqfwIgE%2FXq7sYfhayv3PqUMpDDUwP6qwLVcygi3pF3PXN67mMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsX0zLjZBg0ZBLDbCrcA2Jv9H4yvgokpJj0TAEDHGE20YkzeSaSYBqrrHWWnbjYkf47Z9lBvqvwvYyM3H9pVCrwIRxUA3YBg2Yd8uJze7qO1%2FerzDoNmDmTQ5ksDVaEIHvDcyHtCe%2Fwuo%2FCcfVG9kmvHX%2FUdfjQjBc7wUT87U7hFuF%2BEXuI9Y9RvXEjJiMwU3PwgAkBysCZG03E4uu9GzPL90q%2FfyyRkpYpmEC%2F4qXhE73g%2F3BRKBXWVJgHkYMPMvoseNnVxeRGeVRuunjW3k%2B1eXvgRuQc214hrPdKPtXbsGMlQd9BJj0MNj%2FOvdZllNhm9l1%2FOZJGFk77Uga%2FkuZjJnGTHL7AGGaiVo2bzlxr7NA6WcbbCF90j2ERzVGvBxNmMq3NSUmemXzPsntLupKvUHSkD6YM1VV696hUhlAjh4FAKY5y5tiJ9oa3%2BQ433%2BHo4gEQwZT0jNWZYtllkjtbyuP36dyCeEGxzF17z18a4RMCIn0qw%2F8eAgQ5ztlGJ7LwoAwEhOvjPFHyjc9n222VfgLLzAOn%2FwyfDkH91y7H1aMY7D6kEvpD7Fma4sNZd5%2Baub5nWT6XpEuvxgXjTieuWhFxes4ycCcGPE%2FQBhmpnbM1xOJnHvXcVdsvBdOeFtSv0bp%2B5fBQ6dVyMJiw2MIGOqUBOuPdBWz7cuv76REvw4O389Z6bwXOB1kDVnIqBJhadxyVnEmO8rbD9vpiPOFLb2S3pnb3CdhjadeO1D9BqYphcH4ova2wAL0iKIIS2lp6zxWJWY8iNQM22xo9C0wbaWGnBGMPy7fUoJdR1%2BGF6TaCSTqFe%2F4x1BsXZuAlzVhozoRon%2FpEsGdGK5LmteDLrTnBVjZMfKhSGa5JNqPArGQlJ3bj%2B7vG&X-Amz-Signature=c96323373c96f17154e5a59a60bb59b8071a234f41ad275251ef6135aa576a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUZMHVC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5dT2vu%2F8ey6uUbxbjM5tY4%2BA7BGp2%2BuAyLAiqmhqfwIgE%2FXq7sYfhayv3PqUMpDDUwP6qwLVcygi3pF3PXN67mMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsX0zLjZBg0ZBLDbCrcA2Jv9H4yvgokpJj0TAEDHGE20YkzeSaSYBqrrHWWnbjYkf47Z9lBvqvwvYyM3H9pVCrwIRxUA3YBg2Yd8uJze7qO1%2FerzDoNmDmTQ5ksDVaEIHvDcyHtCe%2Fwuo%2FCcfVG9kmvHX%2FUdfjQjBc7wUT87U7hFuF%2BEXuI9Y9RvXEjJiMwU3PwgAkBysCZG03E4uu9GzPL90q%2FfyyRkpYpmEC%2F4qXhE73g%2F3BRKBXWVJgHkYMPMvoseNnVxeRGeVRuunjW3k%2B1eXvgRuQc214hrPdKPtXbsGMlQd9BJj0MNj%2FOvdZllNhm9l1%2FOZJGFk77Uga%2FkuZjJnGTHL7AGGaiVo2bzlxr7NA6WcbbCF90j2ERzVGvBxNmMq3NSUmemXzPsntLupKvUHSkD6YM1VV696hUhlAjh4FAKY5y5tiJ9oa3%2BQ433%2BHo4gEQwZT0jNWZYtllkjtbyuP36dyCeEGxzF17z18a4RMCIn0qw%2F8eAgQ5ztlGJ7LwoAwEhOvjPFHyjc9n222VfgLLzAOn%2FwyfDkH91y7H1aMY7D6kEvpD7Fma4sNZd5%2Baub5nWT6XpEuvxgXjTieuWhFxes4ycCcGPE%2FQBhmpnbM1xOJnHvXcVdsvBdOeFtSv0bp%2B5fBQ6dVyMJiw2MIGOqUBOuPdBWz7cuv76REvw4O389Z6bwXOB1kDVnIqBJhadxyVnEmO8rbD9vpiPOFLb2S3pnb3CdhjadeO1D9BqYphcH4ova2wAL0iKIIS2lp6zxWJWY8iNQM22xo9C0wbaWGnBGMPy7fUoJdR1%2BGF6TaCSTqFe%2F4x1BsXZuAlzVhozoRon%2FpEsGdGK5LmteDLrTnBVjZMfKhSGa5JNqPArGQlJ3bj%2B7vG&X-Amz-Signature=4c90b60fc42f9aa3c591b0caa1ade5bc551181d1d5b9051b18e0622559e389a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUZMHVC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5dT2vu%2F8ey6uUbxbjM5tY4%2BA7BGp2%2BuAyLAiqmhqfwIgE%2FXq7sYfhayv3PqUMpDDUwP6qwLVcygi3pF3PXN67mMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsX0zLjZBg0ZBLDbCrcA2Jv9H4yvgokpJj0TAEDHGE20YkzeSaSYBqrrHWWnbjYkf47Z9lBvqvwvYyM3H9pVCrwIRxUA3YBg2Yd8uJze7qO1%2FerzDoNmDmTQ5ksDVaEIHvDcyHtCe%2Fwuo%2FCcfVG9kmvHX%2FUdfjQjBc7wUT87U7hFuF%2BEXuI9Y9RvXEjJiMwU3PwgAkBysCZG03E4uu9GzPL90q%2FfyyRkpYpmEC%2F4qXhE73g%2F3BRKBXWVJgHkYMPMvoseNnVxeRGeVRuunjW3k%2B1eXvgRuQc214hrPdKPtXbsGMlQd9BJj0MNj%2FOvdZllNhm9l1%2FOZJGFk77Uga%2FkuZjJnGTHL7AGGaiVo2bzlxr7NA6WcbbCF90j2ERzVGvBxNmMq3NSUmemXzPsntLupKvUHSkD6YM1VV696hUhlAjh4FAKY5y5tiJ9oa3%2BQ433%2BHo4gEQwZT0jNWZYtllkjtbyuP36dyCeEGxzF17z18a4RMCIn0qw%2F8eAgQ5ztlGJ7LwoAwEhOvjPFHyjc9n222VfgLLzAOn%2FwyfDkH91y7H1aMY7D6kEvpD7Fma4sNZd5%2Baub5nWT6XpEuvxgXjTieuWhFxes4ycCcGPE%2FQBhmpnbM1xOJnHvXcVdsvBdOeFtSv0bp%2B5fBQ6dVyMJiw2MIGOqUBOuPdBWz7cuv76REvw4O389Z6bwXOB1kDVnIqBJhadxyVnEmO8rbD9vpiPOFLb2S3pnb3CdhjadeO1D9BqYphcH4ova2wAL0iKIIS2lp6zxWJWY8iNQM22xo9C0wbaWGnBGMPy7fUoJdR1%2BGF6TaCSTqFe%2F4x1BsXZuAlzVhozoRon%2FpEsGdGK5LmteDLrTnBVjZMfKhSGa5JNqPArGQlJ3bj%2B7vG&X-Amz-Signature=090bf1aed7d6f3a95e62971adb7d0965fc2a33d5c682655fc03d8254337fe603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUZMHVC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5dT2vu%2F8ey6uUbxbjM5tY4%2BA7BGp2%2BuAyLAiqmhqfwIgE%2FXq7sYfhayv3PqUMpDDUwP6qwLVcygi3pF3PXN67mMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsX0zLjZBg0ZBLDbCrcA2Jv9H4yvgokpJj0TAEDHGE20YkzeSaSYBqrrHWWnbjYkf47Z9lBvqvwvYyM3H9pVCrwIRxUA3YBg2Yd8uJze7qO1%2FerzDoNmDmTQ5ksDVaEIHvDcyHtCe%2Fwuo%2FCcfVG9kmvHX%2FUdfjQjBc7wUT87U7hFuF%2BEXuI9Y9RvXEjJiMwU3PwgAkBysCZG03E4uu9GzPL90q%2FfyyRkpYpmEC%2F4qXhE73g%2F3BRKBXWVJgHkYMPMvoseNnVxeRGeVRuunjW3k%2B1eXvgRuQc214hrPdKPtXbsGMlQd9BJj0MNj%2FOvdZllNhm9l1%2FOZJGFk77Uga%2FkuZjJnGTHL7AGGaiVo2bzlxr7NA6WcbbCF90j2ERzVGvBxNmMq3NSUmemXzPsntLupKvUHSkD6YM1VV696hUhlAjh4FAKY5y5tiJ9oa3%2BQ433%2BHo4gEQwZT0jNWZYtllkjtbyuP36dyCeEGxzF17z18a4RMCIn0qw%2F8eAgQ5ztlGJ7LwoAwEhOvjPFHyjc9n222VfgLLzAOn%2FwyfDkH91y7H1aMY7D6kEvpD7Fma4sNZd5%2Baub5nWT6XpEuvxgXjTieuWhFxes4ycCcGPE%2FQBhmpnbM1xOJnHvXcVdsvBdOeFtSv0bp%2B5fBQ6dVyMJiw2MIGOqUBOuPdBWz7cuv76REvw4O389Z6bwXOB1kDVnIqBJhadxyVnEmO8rbD9vpiPOFLb2S3pnb3CdhjadeO1D9BqYphcH4ova2wAL0iKIIS2lp6zxWJWY8iNQM22xo9C0wbaWGnBGMPy7fUoJdR1%2BGF6TaCSTqFe%2F4x1BsXZuAlzVhozoRon%2FpEsGdGK5LmteDLrTnBVjZMfKhSGa5JNqPArGQlJ3bj%2B7vG&X-Amz-Signature=5c25936fb8bd124811fdc1aace19e0d5f6ee9ae8017a5d4dddc5522fea5a2ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
