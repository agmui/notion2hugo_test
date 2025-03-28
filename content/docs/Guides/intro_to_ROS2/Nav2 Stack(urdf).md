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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURC3XSM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FATGLCDWaGkQ0mkKU%2FljPe%2Bf9z7bBUJj4XBElCLpvAiEA0FiYG1QbfaC0ATwvYaHP6rleXfi9WZ%2F9%2Fg3tBwrIwGcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdMppQYeM9PRflGFircA1nVKzA0zV1Iyw6MlBWehetkp3nYwJMdqLZd9flE7MmfYwFaBLn%2B%2BTYvkUyK4t3yZx5Etciz1shVwmTLmGCVsfzltI1tPBlomdvgIpwjJIZytZPWt7HYmfmcxa3agDXQcrCb0wg3PMPAr6BHoO4whjMUJOqd3v5pL6Vz%2BXu0RjYWqWnwi8WMj%2BrwdP9lBNw4ZDFetPkRz9M%2Bk47LIzAvKP14oBBEJsHCbajf3fmsjnyQ2Tucj%2BYpuD71Jqw3%2FAnJKqkCc2sqh3NKDB5GUjuL%2FKAzU%2Bb56I0sWpA9Ri49GqUzU2zAq07Ve2ijeCtBSpV0HSnKVzQ3ezz5MgYLPOseZqteLmuus5qHmTmzKHVOKXbtSO5rF0On4LKEfsv4vdYnh36DBHMWIGSBEQWRZPSwq18ro97SoPf%2Fxn68Ce23t41nzGgLVZdAYax7epemqO%2FCvSY6NVFj5S8%2FWyaMdWbWw5zn36%2BuBSpCsAo3eK%2FYRSQXwTkiZQmEvN4VHGtzw6BePo4w5GAOCtGhlgvg22j94brdcIFPTaLqURFDwVS91ONXaLgUe%2FqTmNArF32y8Sq0HGkkqdk8ivKGwzCS7c7hZDmzWKLPQkcBC1%2B4olzuNM5iwc5MbO4QdP3mnSW%2BMPj2l78GOqUBxJAEUlUNjkKR2kjKWAlHCYe4JHV38hbnKfgwOGJ9QNIexXDWkqx14jPht7ypO%2BJ944WfsCODI1cQmUtM6wkCZ%2Bjl9NIe0C9TX9Sr%2FxDXVenUibIv6As%2F47IRRxhPmyRlp4qXj%2Fmo5um4%2FEB6lWfPLyTv4nBk%2FiD29ek0LpMqBAEZikoQgKDwN%2BSGIJBo4AlWZ9U3b6YG6liR8mvQaJ7KCQU%2BxAFH&X-Amz-Signature=e439a7af277d117049a1c7880d43349d26e0df977f36cad8374abf3c7b59c0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURC3XSM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FATGLCDWaGkQ0mkKU%2FljPe%2Bf9z7bBUJj4XBElCLpvAiEA0FiYG1QbfaC0ATwvYaHP6rleXfi9WZ%2F9%2Fg3tBwrIwGcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdMppQYeM9PRflGFircA1nVKzA0zV1Iyw6MlBWehetkp3nYwJMdqLZd9flE7MmfYwFaBLn%2B%2BTYvkUyK4t3yZx5Etciz1shVwmTLmGCVsfzltI1tPBlomdvgIpwjJIZytZPWt7HYmfmcxa3agDXQcrCb0wg3PMPAr6BHoO4whjMUJOqd3v5pL6Vz%2BXu0RjYWqWnwi8WMj%2BrwdP9lBNw4ZDFetPkRz9M%2Bk47LIzAvKP14oBBEJsHCbajf3fmsjnyQ2Tucj%2BYpuD71Jqw3%2FAnJKqkCc2sqh3NKDB5GUjuL%2FKAzU%2Bb56I0sWpA9Ri49GqUzU2zAq07Ve2ijeCtBSpV0HSnKVzQ3ezz5MgYLPOseZqteLmuus5qHmTmzKHVOKXbtSO5rF0On4LKEfsv4vdYnh36DBHMWIGSBEQWRZPSwq18ro97SoPf%2Fxn68Ce23t41nzGgLVZdAYax7epemqO%2FCvSY6NVFj5S8%2FWyaMdWbWw5zn36%2BuBSpCsAo3eK%2FYRSQXwTkiZQmEvN4VHGtzw6BePo4w5GAOCtGhlgvg22j94brdcIFPTaLqURFDwVS91ONXaLgUe%2FqTmNArF32y8Sq0HGkkqdk8ivKGwzCS7c7hZDmzWKLPQkcBC1%2B4olzuNM5iwc5MbO4QdP3mnSW%2BMPj2l78GOqUBxJAEUlUNjkKR2kjKWAlHCYe4JHV38hbnKfgwOGJ9QNIexXDWkqx14jPht7ypO%2BJ944WfsCODI1cQmUtM6wkCZ%2Bjl9NIe0C9TX9Sr%2FxDXVenUibIv6As%2F47IRRxhPmyRlp4qXj%2Fmo5um4%2FEB6lWfPLyTv4nBk%2FiD29ek0LpMqBAEZikoQgKDwN%2BSGIJBo4AlWZ9U3b6YG6liR8mvQaJ7KCQU%2BxAFH&X-Amz-Signature=41713eacdd204fe6bb38ee085fa841f2de294111e4c3e759da69e8290903b077&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURC3XSM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FATGLCDWaGkQ0mkKU%2FljPe%2Bf9z7bBUJj4XBElCLpvAiEA0FiYG1QbfaC0ATwvYaHP6rleXfi9WZ%2F9%2Fg3tBwrIwGcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdMppQYeM9PRflGFircA1nVKzA0zV1Iyw6MlBWehetkp3nYwJMdqLZd9flE7MmfYwFaBLn%2B%2BTYvkUyK4t3yZx5Etciz1shVwmTLmGCVsfzltI1tPBlomdvgIpwjJIZytZPWt7HYmfmcxa3agDXQcrCb0wg3PMPAr6BHoO4whjMUJOqd3v5pL6Vz%2BXu0RjYWqWnwi8WMj%2BrwdP9lBNw4ZDFetPkRz9M%2Bk47LIzAvKP14oBBEJsHCbajf3fmsjnyQ2Tucj%2BYpuD71Jqw3%2FAnJKqkCc2sqh3NKDB5GUjuL%2FKAzU%2Bb56I0sWpA9Ri49GqUzU2zAq07Ve2ijeCtBSpV0HSnKVzQ3ezz5MgYLPOseZqteLmuus5qHmTmzKHVOKXbtSO5rF0On4LKEfsv4vdYnh36DBHMWIGSBEQWRZPSwq18ro97SoPf%2Fxn68Ce23t41nzGgLVZdAYax7epemqO%2FCvSY6NVFj5S8%2FWyaMdWbWw5zn36%2BuBSpCsAo3eK%2FYRSQXwTkiZQmEvN4VHGtzw6BePo4w5GAOCtGhlgvg22j94brdcIFPTaLqURFDwVS91ONXaLgUe%2FqTmNArF32y8Sq0HGkkqdk8ivKGwzCS7c7hZDmzWKLPQkcBC1%2B4olzuNM5iwc5MbO4QdP3mnSW%2BMPj2l78GOqUBxJAEUlUNjkKR2kjKWAlHCYe4JHV38hbnKfgwOGJ9QNIexXDWkqx14jPht7ypO%2BJ944WfsCODI1cQmUtM6wkCZ%2Bjl9NIe0C9TX9Sr%2FxDXVenUibIv6As%2F47IRRxhPmyRlp4qXj%2Fmo5um4%2FEB6lWfPLyTv4nBk%2FiD29ek0LpMqBAEZikoQgKDwN%2BSGIJBo4AlWZ9U3b6YG6liR8mvQaJ7KCQU%2BxAFH&X-Amz-Signature=80460562cf51536e185ea2d240b3f62777bbe9862605e7422ed1eea20aa06247&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURC3XSM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FATGLCDWaGkQ0mkKU%2FljPe%2Bf9z7bBUJj4XBElCLpvAiEA0FiYG1QbfaC0ATwvYaHP6rleXfi9WZ%2F9%2Fg3tBwrIwGcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdMppQYeM9PRflGFircA1nVKzA0zV1Iyw6MlBWehetkp3nYwJMdqLZd9flE7MmfYwFaBLn%2B%2BTYvkUyK4t3yZx5Etciz1shVwmTLmGCVsfzltI1tPBlomdvgIpwjJIZytZPWt7HYmfmcxa3agDXQcrCb0wg3PMPAr6BHoO4whjMUJOqd3v5pL6Vz%2BXu0RjYWqWnwi8WMj%2BrwdP9lBNw4ZDFetPkRz9M%2Bk47LIzAvKP14oBBEJsHCbajf3fmsjnyQ2Tucj%2BYpuD71Jqw3%2FAnJKqkCc2sqh3NKDB5GUjuL%2FKAzU%2Bb56I0sWpA9Ri49GqUzU2zAq07Ve2ijeCtBSpV0HSnKVzQ3ezz5MgYLPOseZqteLmuus5qHmTmzKHVOKXbtSO5rF0On4LKEfsv4vdYnh36DBHMWIGSBEQWRZPSwq18ro97SoPf%2Fxn68Ce23t41nzGgLVZdAYax7epemqO%2FCvSY6NVFj5S8%2FWyaMdWbWw5zn36%2BuBSpCsAo3eK%2FYRSQXwTkiZQmEvN4VHGtzw6BePo4w5GAOCtGhlgvg22j94brdcIFPTaLqURFDwVS91ONXaLgUe%2FqTmNArF32y8Sq0HGkkqdk8ivKGwzCS7c7hZDmzWKLPQkcBC1%2B4olzuNM5iwc5MbO4QdP3mnSW%2BMPj2l78GOqUBxJAEUlUNjkKR2kjKWAlHCYe4JHV38hbnKfgwOGJ9QNIexXDWkqx14jPht7ypO%2BJ944WfsCODI1cQmUtM6wkCZ%2Bjl9NIe0C9TX9Sr%2FxDXVenUibIv6As%2F47IRRxhPmyRlp4qXj%2Fmo5um4%2FEB6lWfPLyTv4nBk%2FiD29ek0LpMqBAEZikoQgKDwN%2BSGIJBo4AlWZ9U3b6YG6liR8mvQaJ7KCQU%2BxAFH&X-Amz-Signature=1e354652f7edc8eff8dc953cc8eab6b21709cf21174f274c1d4a78ec1855f6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURC3XSM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FATGLCDWaGkQ0mkKU%2FljPe%2Bf9z7bBUJj4XBElCLpvAiEA0FiYG1QbfaC0ATwvYaHP6rleXfi9WZ%2F9%2Fg3tBwrIwGcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdMppQYeM9PRflGFircA1nVKzA0zV1Iyw6MlBWehetkp3nYwJMdqLZd9flE7MmfYwFaBLn%2B%2BTYvkUyK4t3yZx5Etciz1shVwmTLmGCVsfzltI1tPBlomdvgIpwjJIZytZPWt7HYmfmcxa3agDXQcrCb0wg3PMPAr6BHoO4whjMUJOqd3v5pL6Vz%2BXu0RjYWqWnwi8WMj%2BrwdP9lBNw4ZDFetPkRz9M%2Bk47LIzAvKP14oBBEJsHCbajf3fmsjnyQ2Tucj%2BYpuD71Jqw3%2FAnJKqkCc2sqh3NKDB5GUjuL%2FKAzU%2Bb56I0sWpA9Ri49GqUzU2zAq07Ve2ijeCtBSpV0HSnKVzQ3ezz5MgYLPOseZqteLmuus5qHmTmzKHVOKXbtSO5rF0On4LKEfsv4vdYnh36DBHMWIGSBEQWRZPSwq18ro97SoPf%2Fxn68Ce23t41nzGgLVZdAYax7epemqO%2FCvSY6NVFj5S8%2FWyaMdWbWw5zn36%2BuBSpCsAo3eK%2FYRSQXwTkiZQmEvN4VHGtzw6BePo4w5GAOCtGhlgvg22j94brdcIFPTaLqURFDwVS91ONXaLgUe%2FqTmNArF32y8Sq0HGkkqdk8ivKGwzCS7c7hZDmzWKLPQkcBC1%2B4olzuNM5iwc5MbO4QdP3mnSW%2BMPj2l78GOqUBxJAEUlUNjkKR2kjKWAlHCYe4JHV38hbnKfgwOGJ9QNIexXDWkqx14jPht7ypO%2BJ944WfsCODI1cQmUtM6wkCZ%2Bjl9NIe0C9TX9Sr%2FxDXVenUibIv6As%2F47IRRxhPmyRlp4qXj%2Fmo5um4%2FEB6lWfPLyTv4nBk%2FiD29ek0LpMqBAEZikoQgKDwN%2BSGIJBo4AlWZ9U3b6YG6liR8mvQaJ7KCQU%2BxAFH&X-Amz-Signature=1559a4403d9f3b9278341913b404774db3a452de275ab42740ae1bb19522befe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURC3XSM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFH%2FATGLCDWaGkQ0mkKU%2FljPe%2Bf9z7bBUJj4XBElCLpvAiEA0FiYG1QbfaC0ATwvYaHP6rleXfi9WZ%2F9%2Fg3tBwrIwGcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdMppQYeM9PRflGFircA1nVKzA0zV1Iyw6MlBWehetkp3nYwJMdqLZd9flE7MmfYwFaBLn%2B%2BTYvkUyK4t3yZx5Etciz1shVwmTLmGCVsfzltI1tPBlomdvgIpwjJIZytZPWt7HYmfmcxa3agDXQcrCb0wg3PMPAr6BHoO4whjMUJOqd3v5pL6Vz%2BXu0RjYWqWnwi8WMj%2BrwdP9lBNw4ZDFetPkRz9M%2Bk47LIzAvKP14oBBEJsHCbajf3fmsjnyQ2Tucj%2BYpuD71Jqw3%2FAnJKqkCc2sqh3NKDB5GUjuL%2FKAzU%2Bb56I0sWpA9Ri49GqUzU2zAq07Ve2ijeCtBSpV0HSnKVzQ3ezz5MgYLPOseZqteLmuus5qHmTmzKHVOKXbtSO5rF0On4LKEfsv4vdYnh36DBHMWIGSBEQWRZPSwq18ro97SoPf%2Fxn68Ce23t41nzGgLVZdAYax7epemqO%2FCvSY6NVFj5S8%2FWyaMdWbWw5zn36%2BuBSpCsAo3eK%2FYRSQXwTkiZQmEvN4VHGtzw6BePo4w5GAOCtGhlgvg22j94brdcIFPTaLqURFDwVS91ONXaLgUe%2FqTmNArF32y8Sq0HGkkqdk8ivKGwzCS7c7hZDmzWKLPQkcBC1%2B4olzuNM5iwc5MbO4QdP3mnSW%2BMPj2l78GOqUBxJAEUlUNjkKR2kjKWAlHCYe4JHV38hbnKfgwOGJ9QNIexXDWkqx14jPht7ypO%2BJ944WfsCODI1cQmUtM6wkCZ%2Bjl9NIe0C9TX9Sr%2FxDXVenUibIv6As%2F47IRRxhPmyRlp4qXj%2Fmo5um4%2FEB6lWfPLyTv4nBk%2FiD29ek0LpMqBAEZikoQgKDwN%2BSGIJBo4AlWZ9U3b6YG6liR8mvQaJ7KCQU%2BxAFH&X-Amz-Signature=077bc410b0153847e770278212faaeb9f06f0f6c6aca29221911305b0857b91c&X-Amz-SignedHeaders=host&x-id=GetObject)
