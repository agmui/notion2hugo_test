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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RQMJZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUCWqNqgYPvc6F8VUDMFy%2BZ%2BKLIwu4hIy%2BrI%2FlpzM94AiA0pHT6XlrQbeRWmPxwkYxRu1I%2Bc%2B2DziPwcpKG%2FGvwIyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjdC7CV0dBZUbYetAKtwDVYPFFN95RJdeCMhU5uTN8%2FgI0D9JiChMRZx%2F1BJ9WTfwhh2%2F0MoOS87FyfnUBal2ZA5AdTWOTGltp%2FdFvgCIQDpa0Wk58rMUwjK4GhDENil%2BQDfIayKqUmtruiRyWKL76vFseIU5MA75hGmRtq4E2uIBDoVQwg5dJwtQe7KxIcDNLHu10LhKQ1Qb91kOpSWaWIsjQCmBwSl2tg8wKJzpU2vL%2Ff0cxOTMWSjedIxr91LXJrOsex9jvDNWeEpv1md8WQmwXAQ5DkX4oGITgT2vr31vTDkyh6cmpQhWqzjGzqIhvNMoDDFfEerFHZiuEHJagXuudQ9DweP5v9LE0XDgEPMrR%2BrVixAZrJRq6Y8pkOAgWw9sl2w23jdRZSlDhZXXUrUewRF5A1o6r9lH%2F2yT%2BsZ%2FeCj9By1Xa%2BAOb5R9Q9bd2yTj6Ipo0wvSuHvL6sk%2BHrgtBZ3Ddgf1jYbqpSKSvIQ1gwnSMWU%2FLQZsWE2WxBf1xEpRBh7VD7fewLRyfSwmhm%2FobKP%2FBn0rO1EytyXK7UP%2BS0a1HxCbAmilDneCcYmwLBU2rledHbJovP%2FYno5rmNTFT09kpqoy7D830aK74hQcLVCBY1s%2BUI1U%2FH6unXZcgDsH5uJyi%2BDxSNcw6onHwgY6pgGIns2uaevC1zX0gaPDEiRuMnTJ7QXEJPyW1j55Ni8dr%2FDGoF2vk6ec9ZmLeHq4Ro1Jqh7Xa9WJQAWMWR3b4DmbR8foihoKBKtkDa1SRmUqzSCP%2BCVIf3MoiMoJiIC5WzNtY9q4Pe12QW4sSJSqyy35XGUy3fu1H%2BRC40bfh0mxYeigiLBjoeXqEmN9TVNe3xOUfMFCPiLNlAdyxLdUu3sm8swxm2c%2F&X-Amz-Signature=d29b824ca20f14c5f5f792313301b1f06a64e92ce9e7ed30c78de9b03cdd8519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RQMJZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUCWqNqgYPvc6F8VUDMFy%2BZ%2BKLIwu4hIy%2BrI%2FlpzM94AiA0pHT6XlrQbeRWmPxwkYxRu1I%2Bc%2B2DziPwcpKG%2FGvwIyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjdC7CV0dBZUbYetAKtwDVYPFFN95RJdeCMhU5uTN8%2FgI0D9JiChMRZx%2F1BJ9WTfwhh2%2F0MoOS87FyfnUBal2ZA5AdTWOTGltp%2FdFvgCIQDpa0Wk58rMUwjK4GhDENil%2BQDfIayKqUmtruiRyWKL76vFseIU5MA75hGmRtq4E2uIBDoVQwg5dJwtQe7KxIcDNLHu10LhKQ1Qb91kOpSWaWIsjQCmBwSl2tg8wKJzpU2vL%2Ff0cxOTMWSjedIxr91LXJrOsex9jvDNWeEpv1md8WQmwXAQ5DkX4oGITgT2vr31vTDkyh6cmpQhWqzjGzqIhvNMoDDFfEerFHZiuEHJagXuudQ9DweP5v9LE0XDgEPMrR%2BrVixAZrJRq6Y8pkOAgWw9sl2w23jdRZSlDhZXXUrUewRF5A1o6r9lH%2F2yT%2BsZ%2FeCj9By1Xa%2BAOb5R9Q9bd2yTj6Ipo0wvSuHvL6sk%2BHrgtBZ3Ddgf1jYbqpSKSvIQ1gwnSMWU%2FLQZsWE2WxBf1xEpRBh7VD7fewLRyfSwmhm%2FobKP%2FBn0rO1EytyXK7UP%2BS0a1HxCbAmilDneCcYmwLBU2rledHbJovP%2FYno5rmNTFT09kpqoy7D830aK74hQcLVCBY1s%2BUI1U%2FH6unXZcgDsH5uJyi%2BDxSNcw6onHwgY6pgGIns2uaevC1zX0gaPDEiRuMnTJ7QXEJPyW1j55Ni8dr%2FDGoF2vk6ec9ZmLeHq4Ro1Jqh7Xa9WJQAWMWR3b4DmbR8foihoKBKtkDa1SRmUqzSCP%2BCVIf3MoiMoJiIC5WzNtY9q4Pe12QW4sSJSqyy35XGUy3fu1H%2BRC40bfh0mxYeigiLBjoeXqEmN9TVNe3xOUfMFCPiLNlAdyxLdUu3sm8swxm2c%2F&X-Amz-Signature=f19600e50ec2b0260c383e1b2e864361e876ae41fc68364718e029f04be61f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RQMJZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUCWqNqgYPvc6F8VUDMFy%2BZ%2BKLIwu4hIy%2BrI%2FlpzM94AiA0pHT6XlrQbeRWmPxwkYxRu1I%2Bc%2B2DziPwcpKG%2FGvwIyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjdC7CV0dBZUbYetAKtwDVYPFFN95RJdeCMhU5uTN8%2FgI0D9JiChMRZx%2F1BJ9WTfwhh2%2F0MoOS87FyfnUBal2ZA5AdTWOTGltp%2FdFvgCIQDpa0Wk58rMUwjK4GhDENil%2BQDfIayKqUmtruiRyWKL76vFseIU5MA75hGmRtq4E2uIBDoVQwg5dJwtQe7KxIcDNLHu10LhKQ1Qb91kOpSWaWIsjQCmBwSl2tg8wKJzpU2vL%2Ff0cxOTMWSjedIxr91LXJrOsex9jvDNWeEpv1md8WQmwXAQ5DkX4oGITgT2vr31vTDkyh6cmpQhWqzjGzqIhvNMoDDFfEerFHZiuEHJagXuudQ9DweP5v9LE0XDgEPMrR%2BrVixAZrJRq6Y8pkOAgWw9sl2w23jdRZSlDhZXXUrUewRF5A1o6r9lH%2F2yT%2BsZ%2FeCj9By1Xa%2BAOb5R9Q9bd2yTj6Ipo0wvSuHvL6sk%2BHrgtBZ3Ddgf1jYbqpSKSvIQ1gwnSMWU%2FLQZsWE2WxBf1xEpRBh7VD7fewLRyfSwmhm%2FobKP%2FBn0rO1EytyXK7UP%2BS0a1HxCbAmilDneCcYmwLBU2rledHbJovP%2FYno5rmNTFT09kpqoy7D830aK74hQcLVCBY1s%2BUI1U%2FH6unXZcgDsH5uJyi%2BDxSNcw6onHwgY6pgGIns2uaevC1zX0gaPDEiRuMnTJ7QXEJPyW1j55Ni8dr%2FDGoF2vk6ec9ZmLeHq4Ro1Jqh7Xa9WJQAWMWR3b4DmbR8foihoKBKtkDa1SRmUqzSCP%2BCVIf3MoiMoJiIC5WzNtY9q4Pe12QW4sSJSqyy35XGUy3fu1H%2BRC40bfh0mxYeigiLBjoeXqEmN9TVNe3xOUfMFCPiLNlAdyxLdUu3sm8swxm2c%2F&X-Amz-Signature=7092e156d5cb6de31d18daff38c537c080533ef080db7271bad3ef9b32b48d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RQMJZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUCWqNqgYPvc6F8VUDMFy%2BZ%2BKLIwu4hIy%2BrI%2FlpzM94AiA0pHT6XlrQbeRWmPxwkYxRu1I%2Bc%2B2DziPwcpKG%2FGvwIyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjdC7CV0dBZUbYetAKtwDVYPFFN95RJdeCMhU5uTN8%2FgI0D9JiChMRZx%2F1BJ9WTfwhh2%2F0MoOS87FyfnUBal2ZA5AdTWOTGltp%2FdFvgCIQDpa0Wk58rMUwjK4GhDENil%2BQDfIayKqUmtruiRyWKL76vFseIU5MA75hGmRtq4E2uIBDoVQwg5dJwtQe7KxIcDNLHu10LhKQ1Qb91kOpSWaWIsjQCmBwSl2tg8wKJzpU2vL%2Ff0cxOTMWSjedIxr91LXJrOsex9jvDNWeEpv1md8WQmwXAQ5DkX4oGITgT2vr31vTDkyh6cmpQhWqzjGzqIhvNMoDDFfEerFHZiuEHJagXuudQ9DweP5v9LE0XDgEPMrR%2BrVixAZrJRq6Y8pkOAgWw9sl2w23jdRZSlDhZXXUrUewRF5A1o6r9lH%2F2yT%2BsZ%2FeCj9By1Xa%2BAOb5R9Q9bd2yTj6Ipo0wvSuHvL6sk%2BHrgtBZ3Ddgf1jYbqpSKSvIQ1gwnSMWU%2FLQZsWE2WxBf1xEpRBh7VD7fewLRyfSwmhm%2FobKP%2FBn0rO1EytyXK7UP%2BS0a1HxCbAmilDneCcYmwLBU2rledHbJovP%2FYno5rmNTFT09kpqoy7D830aK74hQcLVCBY1s%2BUI1U%2FH6unXZcgDsH5uJyi%2BDxSNcw6onHwgY6pgGIns2uaevC1zX0gaPDEiRuMnTJ7QXEJPyW1j55Ni8dr%2FDGoF2vk6ec9ZmLeHq4Ro1Jqh7Xa9WJQAWMWR3b4DmbR8foihoKBKtkDa1SRmUqzSCP%2BCVIf3MoiMoJiIC5WzNtY9q4Pe12QW4sSJSqyy35XGUy3fu1H%2BRC40bfh0mxYeigiLBjoeXqEmN9TVNe3xOUfMFCPiLNlAdyxLdUu3sm8swxm2c%2F&X-Amz-Signature=c9f43b361ed0263a8146e3adfa7c135507ba29c4811b51673ff0282834c5e05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RQMJZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUCWqNqgYPvc6F8VUDMFy%2BZ%2BKLIwu4hIy%2BrI%2FlpzM94AiA0pHT6XlrQbeRWmPxwkYxRu1I%2Bc%2B2DziPwcpKG%2FGvwIyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjdC7CV0dBZUbYetAKtwDVYPFFN95RJdeCMhU5uTN8%2FgI0D9JiChMRZx%2F1BJ9WTfwhh2%2F0MoOS87FyfnUBal2ZA5AdTWOTGltp%2FdFvgCIQDpa0Wk58rMUwjK4GhDENil%2BQDfIayKqUmtruiRyWKL76vFseIU5MA75hGmRtq4E2uIBDoVQwg5dJwtQe7KxIcDNLHu10LhKQ1Qb91kOpSWaWIsjQCmBwSl2tg8wKJzpU2vL%2Ff0cxOTMWSjedIxr91LXJrOsex9jvDNWeEpv1md8WQmwXAQ5DkX4oGITgT2vr31vTDkyh6cmpQhWqzjGzqIhvNMoDDFfEerFHZiuEHJagXuudQ9DweP5v9LE0XDgEPMrR%2BrVixAZrJRq6Y8pkOAgWw9sl2w23jdRZSlDhZXXUrUewRF5A1o6r9lH%2F2yT%2BsZ%2FeCj9By1Xa%2BAOb5R9Q9bd2yTj6Ipo0wvSuHvL6sk%2BHrgtBZ3Ddgf1jYbqpSKSvIQ1gwnSMWU%2FLQZsWE2WxBf1xEpRBh7VD7fewLRyfSwmhm%2FobKP%2FBn0rO1EytyXK7UP%2BS0a1HxCbAmilDneCcYmwLBU2rledHbJovP%2FYno5rmNTFT09kpqoy7D830aK74hQcLVCBY1s%2BUI1U%2FH6unXZcgDsH5uJyi%2BDxSNcw6onHwgY6pgGIns2uaevC1zX0gaPDEiRuMnTJ7QXEJPyW1j55Ni8dr%2FDGoF2vk6ec9ZmLeHq4Ro1Jqh7Xa9WJQAWMWR3b4DmbR8foihoKBKtkDa1SRmUqzSCP%2BCVIf3MoiMoJiIC5WzNtY9q4Pe12QW4sSJSqyy35XGUy3fu1H%2BRC40bfh0mxYeigiLBjoeXqEmN9TVNe3xOUfMFCPiLNlAdyxLdUu3sm8swxm2c%2F&X-Amz-Signature=75939bcfbb0fa863680514a5632ae71e48f5adcd4bfd35dd644ed8958406aa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7RQMJZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUCWqNqgYPvc6F8VUDMFy%2BZ%2BKLIwu4hIy%2BrI%2FlpzM94AiA0pHT6XlrQbeRWmPxwkYxRu1I%2Bc%2B2DziPwcpKG%2FGvwIyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjdC7CV0dBZUbYetAKtwDVYPFFN95RJdeCMhU5uTN8%2FgI0D9JiChMRZx%2F1BJ9WTfwhh2%2F0MoOS87FyfnUBal2ZA5AdTWOTGltp%2FdFvgCIQDpa0Wk58rMUwjK4GhDENil%2BQDfIayKqUmtruiRyWKL76vFseIU5MA75hGmRtq4E2uIBDoVQwg5dJwtQe7KxIcDNLHu10LhKQ1Qb91kOpSWaWIsjQCmBwSl2tg8wKJzpU2vL%2Ff0cxOTMWSjedIxr91LXJrOsex9jvDNWeEpv1md8WQmwXAQ5DkX4oGITgT2vr31vTDkyh6cmpQhWqzjGzqIhvNMoDDFfEerFHZiuEHJagXuudQ9DweP5v9LE0XDgEPMrR%2BrVixAZrJRq6Y8pkOAgWw9sl2w23jdRZSlDhZXXUrUewRF5A1o6r9lH%2F2yT%2BsZ%2FeCj9By1Xa%2BAOb5R9Q9bd2yTj6Ipo0wvSuHvL6sk%2BHrgtBZ3Ddgf1jYbqpSKSvIQ1gwnSMWU%2FLQZsWE2WxBf1xEpRBh7VD7fewLRyfSwmhm%2FobKP%2FBn0rO1EytyXK7UP%2BS0a1HxCbAmilDneCcYmwLBU2rledHbJovP%2FYno5rmNTFT09kpqoy7D830aK74hQcLVCBY1s%2BUI1U%2FH6unXZcgDsH5uJyi%2BDxSNcw6onHwgY6pgGIns2uaevC1zX0gaPDEiRuMnTJ7QXEJPyW1j55Ni8dr%2FDGoF2vk6ec9ZmLeHq4Ro1Jqh7Xa9WJQAWMWR3b4DmbR8foihoKBKtkDa1SRmUqzSCP%2BCVIf3MoiMoJiIC5WzNtY9q4Pe12QW4sSJSqyy35XGUy3fu1H%2BRC40bfh0mxYeigiLBjoeXqEmN9TVNe3xOUfMFCPiLNlAdyxLdUu3sm8swxm2c%2F&X-Amz-Signature=4f2a8885099f0c7b0429f5aba630381b9b8c32dcafde9c0187c0cca3b216e7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
