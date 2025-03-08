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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZUJ2X3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA6NPae0Ggo1mVXG1h6EybdoHnnVXFLIt6ufAi3x66iUAiAeNj2Ey2czpZKANTC7CjPoOEMJYQ2uNwi8hZ6llOXkgSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPjNvd%2F%2Feda6XymwRKtwDalT4qDRwjlR4%2FiJ1SClrn0Ea8jOen8jZBWAWYpzelyV1WfFi1JziQLIikPwQxVKsyQQjprg5YtAGacHivzQ8DV1owh62iXVCbaMSPbyQAYqUrUNm6qvp6EWDgCgKnCde1hIzch25bHcdRpOUlzj9ngHlRtmKOK49y0%2B8IiM43gEQzZjjca3VjbpkWrxkV76dpb2PbXV03A2xnBbg51H7TIQYOegF8WNJZTWlwAEkRRwT3jfVscX5LGPIeTty8Y68%2B6IE3dDL16zuo709bDNK5lgoTLC%2BNcd3rotnVuGSA5IKTe2KndymwXx8Swwakmqoli64UjtM06ibIqedrMauSe32c62iUGdYbgG9pWyfSr45Ky%2FnzIgOCIKM2DCHSg21HaFoBkIKhMD4q8rAwcDOVXSLbJdaGIpGNcj3E3C3KzCmXdvBs300FguBa75GB2HspJMnVu1tVIe6LPP0DpDDwFpTWjBlX5nMYcAESr2AJSTzifb5MN71OUfTUf05hDa5Bm4VxBoxEwOUzLYmJItRVL9iQI6RWcaTKVOl50R1UZ%2BbDdueI71V6K2RFETFSB61E9%2FZ%2BZifKnywsBr9A%2Fg5Boo1QvH68RicOqP%2FYHoaWI48RHJAUfUkqi7Lm6gws%2BCvvgY6pgEiy8kUGrakPPd%2FjDwEBN6XylRNS4dcyImjYUrEf4cBJtOUx%2BHcYxV%2FzsfxyrMF2o8RS4Tu%2F%2BQc%2BWBSxhLBYDzE7OjnU%2BUIP%2Be27icnp8VNHxy4i5OxDDqOkqPN6QB%2BM4koHGnxfp7W5ZUcRuc8Y%2FBjHhJFx6oBOpoHbqIbEJMmM09%2B0GhrImFCBLNgFWr4y7eGo1LjNNtvSOpwpYsO5szEB%2Bw0euIr&X-Amz-Signature=350c84d390878bc0f620e30abf643a0a06cecab43a5b007fa9639432902f4aee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZUJ2X3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA6NPae0Ggo1mVXG1h6EybdoHnnVXFLIt6ufAi3x66iUAiAeNj2Ey2czpZKANTC7CjPoOEMJYQ2uNwi8hZ6llOXkgSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPjNvd%2F%2Feda6XymwRKtwDalT4qDRwjlR4%2FiJ1SClrn0Ea8jOen8jZBWAWYpzelyV1WfFi1JziQLIikPwQxVKsyQQjprg5YtAGacHivzQ8DV1owh62iXVCbaMSPbyQAYqUrUNm6qvp6EWDgCgKnCde1hIzch25bHcdRpOUlzj9ngHlRtmKOK49y0%2B8IiM43gEQzZjjca3VjbpkWrxkV76dpb2PbXV03A2xnBbg51H7TIQYOegF8WNJZTWlwAEkRRwT3jfVscX5LGPIeTty8Y68%2B6IE3dDL16zuo709bDNK5lgoTLC%2BNcd3rotnVuGSA5IKTe2KndymwXx8Swwakmqoli64UjtM06ibIqedrMauSe32c62iUGdYbgG9pWyfSr45Ky%2FnzIgOCIKM2DCHSg21HaFoBkIKhMD4q8rAwcDOVXSLbJdaGIpGNcj3E3C3KzCmXdvBs300FguBa75GB2HspJMnVu1tVIe6LPP0DpDDwFpTWjBlX5nMYcAESr2AJSTzifb5MN71OUfTUf05hDa5Bm4VxBoxEwOUzLYmJItRVL9iQI6RWcaTKVOl50R1UZ%2BbDdueI71V6K2RFETFSB61E9%2FZ%2BZifKnywsBr9A%2Fg5Boo1QvH68RicOqP%2FYHoaWI48RHJAUfUkqi7Lm6gws%2BCvvgY6pgEiy8kUGrakPPd%2FjDwEBN6XylRNS4dcyImjYUrEf4cBJtOUx%2BHcYxV%2FzsfxyrMF2o8RS4Tu%2F%2BQc%2BWBSxhLBYDzE7OjnU%2BUIP%2Be27icnp8VNHxy4i5OxDDqOkqPN6QB%2BM4koHGnxfp7W5ZUcRuc8Y%2FBjHhJFx6oBOpoHbqIbEJMmM09%2B0GhrImFCBLNgFWr4y7eGo1LjNNtvSOpwpYsO5szEB%2Bw0euIr&X-Amz-Signature=e438ea72715787eaee1a7a7fe4111cac86a3f7bb9851ff782772d5959d24197c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZUJ2X3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA6NPae0Ggo1mVXG1h6EybdoHnnVXFLIt6ufAi3x66iUAiAeNj2Ey2czpZKANTC7CjPoOEMJYQ2uNwi8hZ6llOXkgSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPjNvd%2F%2Feda6XymwRKtwDalT4qDRwjlR4%2FiJ1SClrn0Ea8jOen8jZBWAWYpzelyV1WfFi1JziQLIikPwQxVKsyQQjprg5YtAGacHivzQ8DV1owh62iXVCbaMSPbyQAYqUrUNm6qvp6EWDgCgKnCde1hIzch25bHcdRpOUlzj9ngHlRtmKOK49y0%2B8IiM43gEQzZjjca3VjbpkWrxkV76dpb2PbXV03A2xnBbg51H7TIQYOegF8WNJZTWlwAEkRRwT3jfVscX5LGPIeTty8Y68%2B6IE3dDL16zuo709bDNK5lgoTLC%2BNcd3rotnVuGSA5IKTe2KndymwXx8Swwakmqoli64UjtM06ibIqedrMauSe32c62iUGdYbgG9pWyfSr45Ky%2FnzIgOCIKM2DCHSg21HaFoBkIKhMD4q8rAwcDOVXSLbJdaGIpGNcj3E3C3KzCmXdvBs300FguBa75GB2HspJMnVu1tVIe6LPP0DpDDwFpTWjBlX5nMYcAESr2AJSTzifb5MN71OUfTUf05hDa5Bm4VxBoxEwOUzLYmJItRVL9iQI6RWcaTKVOl50R1UZ%2BbDdueI71V6K2RFETFSB61E9%2FZ%2BZifKnywsBr9A%2Fg5Boo1QvH68RicOqP%2FYHoaWI48RHJAUfUkqi7Lm6gws%2BCvvgY6pgEiy8kUGrakPPd%2FjDwEBN6XylRNS4dcyImjYUrEf4cBJtOUx%2BHcYxV%2FzsfxyrMF2o8RS4Tu%2F%2BQc%2BWBSxhLBYDzE7OjnU%2BUIP%2Be27icnp8VNHxy4i5OxDDqOkqPN6QB%2BM4koHGnxfp7W5ZUcRuc8Y%2FBjHhJFx6oBOpoHbqIbEJMmM09%2B0GhrImFCBLNgFWr4y7eGo1LjNNtvSOpwpYsO5szEB%2Bw0euIr&X-Amz-Signature=bc306fd0dd710aeb07231f0d55210ddd60ccc751bf913c18f277da24e0d64805&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZUJ2X3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA6NPae0Ggo1mVXG1h6EybdoHnnVXFLIt6ufAi3x66iUAiAeNj2Ey2czpZKANTC7CjPoOEMJYQ2uNwi8hZ6llOXkgSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPjNvd%2F%2Feda6XymwRKtwDalT4qDRwjlR4%2FiJ1SClrn0Ea8jOen8jZBWAWYpzelyV1WfFi1JziQLIikPwQxVKsyQQjprg5YtAGacHivzQ8DV1owh62iXVCbaMSPbyQAYqUrUNm6qvp6EWDgCgKnCde1hIzch25bHcdRpOUlzj9ngHlRtmKOK49y0%2B8IiM43gEQzZjjca3VjbpkWrxkV76dpb2PbXV03A2xnBbg51H7TIQYOegF8WNJZTWlwAEkRRwT3jfVscX5LGPIeTty8Y68%2B6IE3dDL16zuo709bDNK5lgoTLC%2BNcd3rotnVuGSA5IKTe2KndymwXx8Swwakmqoli64UjtM06ibIqedrMauSe32c62iUGdYbgG9pWyfSr45Ky%2FnzIgOCIKM2DCHSg21HaFoBkIKhMD4q8rAwcDOVXSLbJdaGIpGNcj3E3C3KzCmXdvBs300FguBa75GB2HspJMnVu1tVIe6LPP0DpDDwFpTWjBlX5nMYcAESr2AJSTzifb5MN71OUfTUf05hDa5Bm4VxBoxEwOUzLYmJItRVL9iQI6RWcaTKVOl50R1UZ%2BbDdueI71V6K2RFETFSB61E9%2FZ%2BZifKnywsBr9A%2Fg5Boo1QvH68RicOqP%2FYHoaWI48RHJAUfUkqi7Lm6gws%2BCvvgY6pgEiy8kUGrakPPd%2FjDwEBN6XylRNS4dcyImjYUrEf4cBJtOUx%2BHcYxV%2FzsfxyrMF2o8RS4Tu%2F%2BQc%2BWBSxhLBYDzE7OjnU%2BUIP%2Be27icnp8VNHxy4i5OxDDqOkqPN6QB%2BM4koHGnxfp7W5ZUcRuc8Y%2FBjHhJFx6oBOpoHbqIbEJMmM09%2B0GhrImFCBLNgFWr4y7eGo1LjNNtvSOpwpYsO5szEB%2Bw0euIr&X-Amz-Signature=4d9ef62551d9505ef578c1b7fa161cbcbdfba8b12f664878f2ec8b9a6c67b5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZUJ2X3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA6NPae0Ggo1mVXG1h6EybdoHnnVXFLIt6ufAi3x66iUAiAeNj2Ey2czpZKANTC7CjPoOEMJYQ2uNwi8hZ6llOXkgSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPjNvd%2F%2Feda6XymwRKtwDalT4qDRwjlR4%2FiJ1SClrn0Ea8jOen8jZBWAWYpzelyV1WfFi1JziQLIikPwQxVKsyQQjprg5YtAGacHivzQ8DV1owh62iXVCbaMSPbyQAYqUrUNm6qvp6EWDgCgKnCde1hIzch25bHcdRpOUlzj9ngHlRtmKOK49y0%2B8IiM43gEQzZjjca3VjbpkWrxkV76dpb2PbXV03A2xnBbg51H7TIQYOegF8WNJZTWlwAEkRRwT3jfVscX5LGPIeTty8Y68%2B6IE3dDL16zuo709bDNK5lgoTLC%2BNcd3rotnVuGSA5IKTe2KndymwXx8Swwakmqoli64UjtM06ibIqedrMauSe32c62iUGdYbgG9pWyfSr45Ky%2FnzIgOCIKM2DCHSg21HaFoBkIKhMD4q8rAwcDOVXSLbJdaGIpGNcj3E3C3KzCmXdvBs300FguBa75GB2HspJMnVu1tVIe6LPP0DpDDwFpTWjBlX5nMYcAESr2AJSTzifb5MN71OUfTUf05hDa5Bm4VxBoxEwOUzLYmJItRVL9iQI6RWcaTKVOl50R1UZ%2BbDdueI71V6K2RFETFSB61E9%2FZ%2BZifKnywsBr9A%2Fg5Boo1QvH68RicOqP%2FYHoaWI48RHJAUfUkqi7Lm6gws%2BCvvgY6pgEiy8kUGrakPPd%2FjDwEBN6XylRNS4dcyImjYUrEf4cBJtOUx%2BHcYxV%2FzsfxyrMF2o8RS4Tu%2F%2BQc%2BWBSxhLBYDzE7OjnU%2BUIP%2Be27icnp8VNHxy4i5OxDDqOkqPN6QB%2BM4koHGnxfp7W5ZUcRuc8Y%2FBjHhJFx6oBOpoHbqIbEJMmM09%2B0GhrImFCBLNgFWr4y7eGo1LjNNtvSOpwpYsO5szEB%2Bw0euIr&X-Amz-Signature=db1efe1aa51525d184b381580da0ffcfc58aa7ec416fea7801c1c21737b655e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZUJ2X3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA6NPae0Ggo1mVXG1h6EybdoHnnVXFLIt6ufAi3x66iUAiAeNj2Ey2czpZKANTC7CjPoOEMJYQ2uNwi8hZ6llOXkgSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMPjNvd%2F%2Feda6XymwRKtwDalT4qDRwjlR4%2FiJ1SClrn0Ea8jOen8jZBWAWYpzelyV1WfFi1JziQLIikPwQxVKsyQQjprg5YtAGacHivzQ8DV1owh62iXVCbaMSPbyQAYqUrUNm6qvp6EWDgCgKnCde1hIzch25bHcdRpOUlzj9ngHlRtmKOK49y0%2B8IiM43gEQzZjjca3VjbpkWrxkV76dpb2PbXV03A2xnBbg51H7TIQYOegF8WNJZTWlwAEkRRwT3jfVscX5LGPIeTty8Y68%2B6IE3dDL16zuo709bDNK5lgoTLC%2BNcd3rotnVuGSA5IKTe2KndymwXx8Swwakmqoli64UjtM06ibIqedrMauSe32c62iUGdYbgG9pWyfSr45Ky%2FnzIgOCIKM2DCHSg21HaFoBkIKhMD4q8rAwcDOVXSLbJdaGIpGNcj3E3C3KzCmXdvBs300FguBa75GB2HspJMnVu1tVIe6LPP0DpDDwFpTWjBlX5nMYcAESr2AJSTzifb5MN71OUfTUf05hDa5Bm4VxBoxEwOUzLYmJItRVL9iQI6RWcaTKVOl50R1UZ%2BbDdueI71V6K2RFETFSB61E9%2FZ%2BZifKnywsBr9A%2Fg5Boo1QvH68RicOqP%2FYHoaWI48RHJAUfUkqi7Lm6gws%2BCvvgY6pgEiy8kUGrakPPd%2FjDwEBN6XylRNS4dcyImjYUrEf4cBJtOUx%2BHcYxV%2FzsfxyrMF2o8RS4Tu%2F%2BQc%2BWBSxhLBYDzE7OjnU%2BUIP%2Be27icnp8VNHxy4i5OxDDqOkqPN6QB%2BM4koHGnxfp7W5ZUcRuc8Y%2FBjHhJFx6oBOpoHbqIbEJMmM09%2B0GhrImFCBLNgFWr4y7eGo1LjNNtvSOpwpYsO5szEB%2Bw0euIr&X-Amz-Signature=a7dcc4effabe8d746a2e56b1d81370f9527f7dd45b99f9891a4ca2c6b9d47035&X-Amz-SignedHeaders=host&x-id=GetObject)
