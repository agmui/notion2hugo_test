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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVB57G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1TZX%2BZDxzaMmNGg82v1QDZ7bVD7%2BNwpnii6T%2BllzptAIhAJFjM47VDIUlUKjS%2FJhZp3bflHerKqs1zZgBWCI%2BPMW6Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwapvpBvPA4CA7IiN0q3ANBKcxxeD%2BwMMNabi2pcrAYQrIze0oett9Z3B0sBVp%2BymYvhENSZxOoBq2fnPQTyNgWkq9oKhMH4FMKcrMIZhx7TGL%2Ft3OSxA9VklAWuCmtZHiIRtMyx8ihe2Jo69CskweftmVb9mKiOW9s0LHSG8vwx5SHojhnIwlUBYuK9LhktpR3%2BT8344IDUt5SpV9K1c5fg7XzXpczowIg%2FUKAqY4l1MmwbUbYEN0GD8tvmhwGip%2FORZfLlZ9AQrJ4vF4AHN9eA63Bpi3w50D8pIP2CSSG7wFcUZMZYkbbQLNIrWTJIggAAeLSfAlipCqhMEROnTsh8d68oZQye2AO7zFxWgphceiCWr5Bb8kCVwz3IV8ixAG%2FdpNvghli7XiudIjAzbhNSqPF3G0q2yELgdeLXH5crhCJ770wY8lf5rXsnsqIS55jCyFjOI4J3uWEAnda%2F3V2Z2IuczK8f4HeELiTl4X5sOY9NnC3tx5euCgu949J7LSTGhIwmBstoQmLYsN5PsHbxILenbjURE%2B%2BBHZd8i4Jg8cpqwkhF3pMNF8Swcph6O83Y5aXs2SlyAL9dfxzvKq5Ex30swckscNpyCyimFmaF1xOU74Z%2BckLJkcyXNMIlJVSUgSzYJgpIXYvoDDn3Za%2FBjqkAWTmazXs9Flh7r%2FJPU7Akp87VpsYYxZL4oUx7%2BuAX9LmNmFT3c5p8DVGSGV9ftho9ln32VXub9wc3e53h26FARARplfc9h%2FLto7MS3B7kQmmFgpdt83md7ngI5t24wr%2FVHV2XFZvcfkEnHOrBmqlMi8A0dpcEsyvxLvZTkD%2BGBXceoerRUY6fd23vYEacBFkf1MjFtXKa4OwcB%2Fd32JCUHcnOOiJ&X-Amz-Signature=cc18d407e81362f34dd397ec26ba21637a01b273d7aeba7ed91dcc79b88825d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVB57G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1TZX%2BZDxzaMmNGg82v1QDZ7bVD7%2BNwpnii6T%2BllzptAIhAJFjM47VDIUlUKjS%2FJhZp3bflHerKqs1zZgBWCI%2BPMW6Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwapvpBvPA4CA7IiN0q3ANBKcxxeD%2BwMMNabi2pcrAYQrIze0oett9Z3B0sBVp%2BymYvhENSZxOoBq2fnPQTyNgWkq9oKhMH4FMKcrMIZhx7TGL%2Ft3OSxA9VklAWuCmtZHiIRtMyx8ihe2Jo69CskweftmVb9mKiOW9s0LHSG8vwx5SHojhnIwlUBYuK9LhktpR3%2BT8344IDUt5SpV9K1c5fg7XzXpczowIg%2FUKAqY4l1MmwbUbYEN0GD8tvmhwGip%2FORZfLlZ9AQrJ4vF4AHN9eA63Bpi3w50D8pIP2CSSG7wFcUZMZYkbbQLNIrWTJIggAAeLSfAlipCqhMEROnTsh8d68oZQye2AO7zFxWgphceiCWr5Bb8kCVwz3IV8ixAG%2FdpNvghli7XiudIjAzbhNSqPF3G0q2yELgdeLXH5crhCJ770wY8lf5rXsnsqIS55jCyFjOI4J3uWEAnda%2F3V2Z2IuczK8f4HeELiTl4X5sOY9NnC3tx5euCgu949J7LSTGhIwmBstoQmLYsN5PsHbxILenbjURE%2B%2BBHZd8i4Jg8cpqwkhF3pMNF8Swcph6O83Y5aXs2SlyAL9dfxzvKq5Ex30swckscNpyCyimFmaF1xOU74Z%2BckLJkcyXNMIlJVSUgSzYJgpIXYvoDDn3Za%2FBjqkAWTmazXs9Flh7r%2FJPU7Akp87VpsYYxZL4oUx7%2BuAX9LmNmFT3c5p8DVGSGV9ftho9ln32VXub9wc3e53h26FARARplfc9h%2FLto7MS3B7kQmmFgpdt83md7ngI5t24wr%2FVHV2XFZvcfkEnHOrBmqlMi8A0dpcEsyvxLvZTkD%2BGBXceoerRUY6fd23vYEacBFkf1MjFtXKa4OwcB%2Fd32JCUHcnOOiJ&X-Amz-Signature=6aed742ea14403fb63e2bfc3f179677fecbd88ecb75722d896ea174927796cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVB57G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1TZX%2BZDxzaMmNGg82v1QDZ7bVD7%2BNwpnii6T%2BllzptAIhAJFjM47VDIUlUKjS%2FJhZp3bflHerKqs1zZgBWCI%2BPMW6Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwapvpBvPA4CA7IiN0q3ANBKcxxeD%2BwMMNabi2pcrAYQrIze0oett9Z3B0sBVp%2BymYvhENSZxOoBq2fnPQTyNgWkq9oKhMH4FMKcrMIZhx7TGL%2Ft3OSxA9VklAWuCmtZHiIRtMyx8ihe2Jo69CskweftmVb9mKiOW9s0LHSG8vwx5SHojhnIwlUBYuK9LhktpR3%2BT8344IDUt5SpV9K1c5fg7XzXpczowIg%2FUKAqY4l1MmwbUbYEN0GD8tvmhwGip%2FORZfLlZ9AQrJ4vF4AHN9eA63Bpi3w50D8pIP2CSSG7wFcUZMZYkbbQLNIrWTJIggAAeLSfAlipCqhMEROnTsh8d68oZQye2AO7zFxWgphceiCWr5Bb8kCVwz3IV8ixAG%2FdpNvghli7XiudIjAzbhNSqPF3G0q2yELgdeLXH5crhCJ770wY8lf5rXsnsqIS55jCyFjOI4J3uWEAnda%2F3V2Z2IuczK8f4HeELiTl4X5sOY9NnC3tx5euCgu949J7LSTGhIwmBstoQmLYsN5PsHbxILenbjURE%2B%2BBHZd8i4Jg8cpqwkhF3pMNF8Swcph6O83Y5aXs2SlyAL9dfxzvKq5Ex30swckscNpyCyimFmaF1xOU74Z%2BckLJkcyXNMIlJVSUgSzYJgpIXYvoDDn3Za%2FBjqkAWTmazXs9Flh7r%2FJPU7Akp87VpsYYxZL4oUx7%2BuAX9LmNmFT3c5p8DVGSGV9ftho9ln32VXub9wc3e53h26FARARplfc9h%2FLto7MS3B7kQmmFgpdt83md7ngI5t24wr%2FVHV2XFZvcfkEnHOrBmqlMi8A0dpcEsyvxLvZTkD%2BGBXceoerRUY6fd23vYEacBFkf1MjFtXKa4OwcB%2Fd32JCUHcnOOiJ&X-Amz-Signature=13c3f42c5395ce944f4bfbbd0c79d9e720ffc65b3275b27c35fc3fae3566265a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVB57G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1TZX%2BZDxzaMmNGg82v1QDZ7bVD7%2BNwpnii6T%2BllzptAIhAJFjM47VDIUlUKjS%2FJhZp3bflHerKqs1zZgBWCI%2BPMW6Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwapvpBvPA4CA7IiN0q3ANBKcxxeD%2BwMMNabi2pcrAYQrIze0oett9Z3B0sBVp%2BymYvhENSZxOoBq2fnPQTyNgWkq9oKhMH4FMKcrMIZhx7TGL%2Ft3OSxA9VklAWuCmtZHiIRtMyx8ihe2Jo69CskweftmVb9mKiOW9s0LHSG8vwx5SHojhnIwlUBYuK9LhktpR3%2BT8344IDUt5SpV9K1c5fg7XzXpczowIg%2FUKAqY4l1MmwbUbYEN0GD8tvmhwGip%2FORZfLlZ9AQrJ4vF4AHN9eA63Bpi3w50D8pIP2CSSG7wFcUZMZYkbbQLNIrWTJIggAAeLSfAlipCqhMEROnTsh8d68oZQye2AO7zFxWgphceiCWr5Bb8kCVwz3IV8ixAG%2FdpNvghli7XiudIjAzbhNSqPF3G0q2yELgdeLXH5crhCJ770wY8lf5rXsnsqIS55jCyFjOI4J3uWEAnda%2F3V2Z2IuczK8f4HeELiTl4X5sOY9NnC3tx5euCgu949J7LSTGhIwmBstoQmLYsN5PsHbxILenbjURE%2B%2BBHZd8i4Jg8cpqwkhF3pMNF8Swcph6O83Y5aXs2SlyAL9dfxzvKq5Ex30swckscNpyCyimFmaF1xOU74Z%2BckLJkcyXNMIlJVSUgSzYJgpIXYvoDDn3Za%2FBjqkAWTmazXs9Flh7r%2FJPU7Akp87VpsYYxZL4oUx7%2BuAX9LmNmFT3c5p8DVGSGV9ftho9ln32VXub9wc3e53h26FARARplfc9h%2FLto7MS3B7kQmmFgpdt83md7ngI5t24wr%2FVHV2XFZvcfkEnHOrBmqlMi8A0dpcEsyvxLvZTkD%2BGBXceoerRUY6fd23vYEacBFkf1MjFtXKa4OwcB%2Fd32JCUHcnOOiJ&X-Amz-Signature=af431c43da6b83dc5060d277ad4a03db0973b01783f9a075afbf4aa22024ec05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVB57G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1TZX%2BZDxzaMmNGg82v1QDZ7bVD7%2BNwpnii6T%2BllzptAIhAJFjM47VDIUlUKjS%2FJhZp3bflHerKqs1zZgBWCI%2BPMW6Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwapvpBvPA4CA7IiN0q3ANBKcxxeD%2BwMMNabi2pcrAYQrIze0oett9Z3B0sBVp%2BymYvhENSZxOoBq2fnPQTyNgWkq9oKhMH4FMKcrMIZhx7TGL%2Ft3OSxA9VklAWuCmtZHiIRtMyx8ihe2Jo69CskweftmVb9mKiOW9s0LHSG8vwx5SHojhnIwlUBYuK9LhktpR3%2BT8344IDUt5SpV9K1c5fg7XzXpczowIg%2FUKAqY4l1MmwbUbYEN0GD8tvmhwGip%2FORZfLlZ9AQrJ4vF4AHN9eA63Bpi3w50D8pIP2CSSG7wFcUZMZYkbbQLNIrWTJIggAAeLSfAlipCqhMEROnTsh8d68oZQye2AO7zFxWgphceiCWr5Bb8kCVwz3IV8ixAG%2FdpNvghli7XiudIjAzbhNSqPF3G0q2yELgdeLXH5crhCJ770wY8lf5rXsnsqIS55jCyFjOI4J3uWEAnda%2F3V2Z2IuczK8f4HeELiTl4X5sOY9NnC3tx5euCgu949J7LSTGhIwmBstoQmLYsN5PsHbxILenbjURE%2B%2BBHZd8i4Jg8cpqwkhF3pMNF8Swcph6O83Y5aXs2SlyAL9dfxzvKq5Ex30swckscNpyCyimFmaF1xOU74Z%2BckLJkcyXNMIlJVSUgSzYJgpIXYvoDDn3Za%2FBjqkAWTmazXs9Flh7r%2FJPU7Akp87VpsYYxZL4oUx7%2BuAX9LmNmFT3c5p8DVGSGV9ftho9ln32VXub9wc3e53h26FARARplfc9h%2FLto7MS3B7kQmmFgpdt83md7ngI5t24wr%2FVHV2XFZvcfkEnHOrBmqlMi8A0dpcEsyvxLvZTkD%2BGBXceoerRUY6fd23vYEacBFkf1MjFtXKa4OwcB%2Fd32JCUHcnOOiJ&X-Amz-Signature=24e7ea9029edd650f9cd9fc2918783dbbf99d96e3641a7306376606343491d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMVB57G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1TZX%2BZDxzaMmNGg82v1QDZ7bVD7%2BNwpnii6T%2BllzptAIhAJFjM47VDIUlUKjS%2FJhZp3bflHerKqs1zZgBWCI%2BPMW6Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwapvpBvPA4CA7IiN0q3ANBKcxxeD%2BwMMNabi2pcrAYQrIze0oett9Z3B0sBVp%2BymYvhENSZxOoBq2fnPQTyNgWkq9oKhMH4FMKcrMIZhx7TGL%2Ft3OSxA9VklAWuCmtZHiIRtMyx8ihe2Jo69CskweftmVb9mKiOW9s0LHSG8vwx5SHojhnIwlUBYuK9LhktpR3%2BT8344IDUt5SpV9K1c5fg7XzXpczowIg%2FUKAqY4l1MmwbUbYEN0GD8tvmhwGip%2FORZfLlZ9AQrJ4vF4AHN9eA63Bpi3w50D8pIP2CSSG7wFcUZMZYkbbQLNIrWTJIggAAeLSfAlipCqhMEROnTsh8d68oZQye2AO7zFxWgphceiCWr5Bb8kCVwz3IV8ixAG%2FdpNvghli7XiudIjAzbhNSqPF3G0q2yELgdeLXH5crhCJ770wY8lf5rXsnsqIS55jCyFjOI4J3uWEAnda%2F3V2Z2IuczK8f4HeELiTl4X5sOY9NnC3tx5euCgu949J7LSTGhIwmBstoQmLYsN5PsHbxILenbjURE%2B%2BBHZd8i4Jg8cpqwkhF3pMNF8Swcph6O83Y5aXs2SlyAL9dfxzvKq5Ex30swckscNpyCyimFmaF1xOU74Z%2BckLJkcyXNMIlJVSUgSzYJgpIXYvoDDn3Za%2FBjqkAWTmazXs9Flh7r%2FJPU7Akp87VpsYYxZL4oUx7%2BuAX9LmNmFT3c5p8DVGSGV9ftho9ln32VXub9wc3e53h26FARARplfc9h%2FLto7MS3B7kQmmFgpdt83md7ngI5t24wr%2FVHV2XFZvcfkEnHOrBmqlMi8A0dpcEsyvxLvZTkD%2BGBXceoerRUY6fd23vYEacBFkf1MjFtXKa4OwcB%2Fd32JCUHcnOOiJ&X-Amz-Signature=d12a74332aa5c7e987cbe8979af0db18fbd580e412d003771684d21211efe387&X-Amz-SignedHeaders=host&x-id=GetObject)
