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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SGTOAW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFTPXiwyHVVP%2F5wyiGlCPIxX7IkezfXyhfQEEuhEY3qAIhAKlnwTsznBYr5z1a527%2BXMDL%2B3BbEEIpzGUCYHcSXqa%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9td1ILmysJYHVxe8q3AOeaPPGdNaI3Gca6Vn6i9Bg2mwLCahxqQOGHVYhe4hm9LiyYZbrN%2BJ%2FcQ019n9T%2BDy3wlK3GZ38C1jDP4Jps2y4R03ciRwSWnK7%2BB%2F8ggK%2FPMkUzBF7oFmZ3JnLDMw%2FljD0Jwuxi9ArChATbVqyMEzFZp6ow0GHFnfKm7xvkF1I0ZT2SQsAt2ybWf3wqZxWiLr%2FL%2BAbl240j6MWdh6fmZ3qFnwbXKx5Q0M5zaqCvK9zyvs7in0%2F9OJFPDAbrpbvTwmKS%2B6acfd8BAaW77GDRpo0p1fYjmObYWlrMSLORw7sgG41lD3w3bF3Igw5iJ%2BgJ5AJdPnAqMf4tkd3rSHrXa5CXwbElS30tniN8%2FEigiAG90gYINIBjUw0bD0F6EgLe5juyHQwoU%2FQd%2Fi2rBGBiyYYYv%2BC5EVF9lNjYXTMGJnHzAoAUloU2fl7eAACEPuQUV6ei%2B4zHYeVk7N0Pf0UmnxGzgPGYW4zKaHMKJN0c%2BQd5Wq4AUi7Po5YAlxGb%2BiiR6n13jppbpqWyRE07aCUvZV97FJkz7NiVbmynufi8Oc5jU20Nmy2oF7s0tCQ8Vjv3viFBLhfRI%2ByLi2CW5vhM1PEaOJwziGBkHmOOznnR%2BRuzEO%2B%2B2mp5D8jnAvieDCZotG9BjqkAUdnJlvSwICb0MQnYEo3ybxF%2BvxVXArheNsX1S9T3rTJzzT776CDsCMQk1Jh9kGmmEacMarXVBXw%2BiHGSiibAjYlP1B0yP%2F9tZ0gWyAaBiMErgd6LsV1jYJOXbnZ6g2ttcWh9lJ24GyP9S%2BX54pV5jeB4Q7gbJud5Ewy8GCuL%2B9YCxvXjfYngY3jqe5CHQcalW3zllbksPhBqVBj%2Bn6Qx2tVks%2BM&X-Amz-Signature=752f8029af19efa57d007f4a6ec84b7bc1f18cc8dca9dcf529f7ab97000b1522&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SGTOAW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFTPXiwyHVVP%2F5wyiGlCPIxX7IkezfXyhfQEEuhEY3qAIhAKlnwTsznBYr5z1a527%2BXMDL%2B3BbEEIpzGUCYHcSXqa%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9td1ILmysJYHVxe8q3AOeaPPGdNaI3Gca6Vn6i9Bg2mwLCahxqQOGHVYhe4hm9LiyYZbrN%2BJ%2FcQ019n9T%2BDy3wlK3GZ38C1jDP4Jps2y4R03ciRwSWnK7%2BB%2F8ggK%2FPMkUzBF7oFmZ3JnLDMw%2FljD0Jwuxi9ArChATbVqyMEzFZp6ow0GHFnfKm7xvkF1I0ZT2SQsAt2ybWf3wqZxWiLr%2FL%2BAbl240j6MWdh6fmZ3qFnwbXKx5Q0M5zaqCvK9zyvs7in0%2F9OJFPDAbrpbvTwmKS%2B6acfd8BAaW77GDRpo0p1fYjmObYWlrMSLORw7sgG41lD3w3bF3Igw5iJ%2BgJ5AJdPnAqMf4tkd3rSHrXa5CXwbElS30tniN8%2FEigiAG90gYINIBjUw0bD0F6EgLe5juyHQwoU%2FQd%2Fi2rBGBiyYYYv%2BC5EVF9lNjYXTMGJnHzAoAUloU2fl7eAACEPuQUV6ei%2B4zHYeVk7N0Pf0UmnxGzgPGYW4zKaHMKJN0c%2BQd5Wq4AUi7Po5YAlxGb%2BiiR6n13jppbpqWyRE07aCUvZV97FJkz7NiVbmynufi8Oc5jU20Nmy2oF7s0tCQ8Vjv3viFBLhfRI%2ByLi2CW5vhM1PEaOJwziGBkHmOOznnR%2BRuzEO%2B%2B2mp5D8jnAvieDCZotG9BjqkAUdnJlvSwICb0MQnYEo3ybxF%2BvxVXArheNsX1S9T3rTJzzT776CDsCMQk1Jh9kGmmEacMarXVBXw%2BiHGSiibAjYlP1B0yP%2F9tZ0gWyAaBiMErgd6LsV1jYJOXbnZ6g2ttcWh9lJ24GyP9S%2BX54pV5jeB4Q7gbJud5Ewy8GCuL%2B9YCxvXjfYngY3jqe5CHQcalW3zllbksPhBqVBj%2Bn6Qx2tVks%2BM&X-Amz-Signature=b091f11c5b18163ea970e0a438dfb9a510e1ceee662d693a7bf78e7c8d57f2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SGTOAW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFTPXiwyHVVP%2F5wyiGlCPIxX7IkezfXyhfQEEuhEY3qAIhAKlnwTsznBYr5z1a527%2BXMDL%2B3BbEEIpzGUCYHcSXqa%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9td1ILmysJYHVxe8q3AOeaPPGdNaI3Gca6Vn6i9Bg2mwLCahxqQOGHVYhe4hm9LiyYZbrN%2BJ%2FcQ019n9T%2BDy3wlK3GZ38C1jDP4Jps2y4R03ciRwSWnK7%2BB%2F8ggK%2FPMkUzBF7oFmZ3JnLDMw%2FljD0Jwuxi9ArChATbVqyMEzFZp6ow0GHFnfKm7xvkF1I0ZT2SQsAt2ybWf3wqZxWiLr%2FL%2BAbl240j6MWdh6fmZ3qFnwbXKx5Q0M5zaqCvK9zyvs7in0%2F9OJFPDAbrpbvTwmKS%2B6acfd8BAaW77GDRpo0p1fYjmObYWlrMSLORw7sgG41lD3w3bF3Igw5iJ%2BgJ5AJdPnAqMf4tkd3rSHrXa5CXwbElS30tniN8%2FEigiAG90gYINIBjUw0bD0F6EgLe5juyHQwoU%2FQd%2Fi2rBGBiyYYYv%2BC5EVF9lNjYXTMGJnHzAoAUloU2fl7eAACEPuQUV6ei%2B4zHYeVk7N0Pf0UmnxGzgPGYW4zKaHMKJN0c%2BQd5Wq4AUi7Po5YAlxGb%2BiiR6n13jppbpqWyRE07aCUvZV97FJkz7NiVbmynufi8Oc5jU20Nmy2oF7s0tCQ8Vjv3viFBLhfRI%2ByLi2CW5vhM1PEaOJwziGBkHmOOznnR%2BRuzEO%2B%2B2mp5D8jnAvieDCZotG9BjqkAUdnJlvSwICb0MQnYEo3ybxF%2BvxVXArheNsX1S9T3rTJzzT776CDsCMQk1Jh9kGmmEacMarXVBXw%2BiHGSiibAjYlP1B0yP%2F9tZ0gWyAaBiMErgd6LsV1jYJOXbnZ6g2ttcWh9lJ24GyP9S%2BX54pV5jeB4Q7gbJud5Ewy8GCuL%2B9YCxvXjfYngY3jqe5CHQcalW3zllbksPhBqVBj%2Bn6Qx2tVks%2BM&X-Amz-Signature=05ee75814dc3924cbd79272ceec78c577bc8c7780b7aecfaeec35334af764626&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SGTOAW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFTPXiwyHVVP%2F5wyiGlCPIxX7IkezfXyhfQEEuhEY3qAIhAKlnwTsznBYr5z1a527%2BXMDL%2B3BbEEIpzGUCYHcSXqa%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9td1ILmysJYHVxe8q3AOeaPPGdNaI3Gca6Vn6i9Bg2mwLCahxqQOGHVYhe4hm9LiyYZbrN%2BJ%2FcQ019n9T%2BDy3wlK3GZ38C1jDP4Jps2y4R03ciRwSWnK7%2BB%2F8ggK%2FPMkUzBF7oFmZ3JnLDMw%2FljD0Jwuxi9ArChATbVqyMEzFZp6ow0GHFnfKm7xvkF1I0ZT2SQsAt2ybWf3wqZxWiLr%2FL%2BAbl240j6MWdh6fmZ3qFnwbXKx5Q0M5zaqCvK9zyvs7in0%2F9OJFPDAbrpbvTwmKS%2B6acfd8BAaW77GDRpo0p1fYjmObYWlrMSLORw7sgG41lD3w3bF3Igw5iJ%2BgJ5AJdPnAqMf4tkd3rSHrXa5CXwbElS30tniN8%2FEigiAG90gYINIBjUw0bD0F6EgLe5juyHQwoU%2FQd%2Fi2rBGBiyYYYv%2BC5EVF9lNjYXTMGJnHzAoAUloU2fl7eAACEPuQUV6ei%2B4zHYeVk7N0Pf0UmnxGzgPGYW4zKaHMKJN0c%2BQd5Wq4AUi7Po5YAlxGb%2BiiR6n13jppbpqWyRE07aCUvZV97FJkz7NiVbmynufi8Oc5jU20Nmy2oF7s0tCQ8Vjv3viFBLhfRI%2ByLi2CW5vhM1PEaOJwziGBkHmOOznnR%2BRuzEO%2B%2B2mp5D8jnAvieDCZotG9BjqkAUdnJlvSwICb0MQnYEo3ybxF%2BvxVXArheNsX1S9T3rTJzzT776CDsCMQk1Jh9kGmmEacMarXVBXw%2BiHGSiibAjYlP1B0yP%2F9tZ0gWyAaBiMErgd6LsV1jYJOXbnZ6g2ttcWh9lJ24GyP9S%2BX54pV5jeB4Q7gbJud5Ewy8GCuL%2B9YCxvXjfYngY3jqe5CHQcalW3zllbksPhBqVBj%2Bn6Qx2tVks%2BM&X-Amz-Signature=37a50288e78726e7df33049c0cf0f6e0d6e42070a0e631575dbc95394972a89d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SGTOAW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFTPXiwyHVVP%2F5wyiGlCPIxX7IkezfXyhfQEEuhEY3qAIhAKlnwTsznBYr5z1a527%2BXMDL%2B3BbEEIpzGUCYHcSXqa%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9td1ILmysJYHVxe8q3AOeaPPGdNaI3Gca6Vn6i9Bg2mwLCahxqQOGHVYhe4hm9LiyYZbrN%2BJ%2FcQ019n9T%2BDy3wlK3GZ38C1jDP4Jps2y4R03ciRwSWnK7%2BB%2F8ggK%2FPMkUzBF7oFmZ3JnLDMw%2FljD0Jwuxi9ArChATbVqyMEzFZp6ow0GHFnfKm7xvkF1I0ZT2SQsAt2ybWf3wqZxWiLr%2FL%2BAbl240j6MWdh6fmZ3qFnwbXKx5Q0M5zaqCvK9zyvs7in0%2F9OJFPDAbrpbvTwmKS%2B6acfd8BAaW77GDRpo0p1fYjmObYWlrMSLORw7sgG41lD3w3bF3Igw5iJ%2BgJ5AJdPnAqMf4tkd3rSHrXa5CXwbElS30tniN8%2FEigiAG90gYINIBjUw0bD0F6EgLe5juyHQwoU%2FQd%2Fi2rBGBiyYYYv%2BC5EVF9lNjYXTMGJnHzAoAUloU2fl7eAACEPuQUV6ei%2B4zHYeVk7N0Pf0UmnxGzgPGYW4zKaHMKJN0c%2BQd5Wq4AUi7Po5YAlxGb%2BiiR6n13jppbpqWyRE07aCUvZV97FJkz7NiVbmynufi8Oc5jU20Nmy2oF7s0tCQ8Vjv3viFBLhfRI%2ByLi2CW5vhM1PEaOJwziGBkHmOOznnR%2BRuzEO%2B%2B2mp5D8jnAvieDCZotG9BjqkAUdnJlvSwICb0MQnYEo3ybxF%2BvxVXArheNsX1S9T3rTJzzT776CDsCMQk1Jh9kGmmEacMarXVBXw%2BiHGSiibAjYlP1B0yP%2F9tZ0gWyAaBiMErgd6LsV1jYJOXbnZ6g2ttcWh9lJ24GyP9S%2BX54pV5jeB4Q7gbJud5Ewy8GCuL%2B9YCxvXjfYngY3jqe5CHQcalW3zllbksPhBqVBj%2Bn6Qx2tVks%2BM&X-Amz-Signature=cf1aeac49dff159d51dac1fe3f7ab690dbea6678f1c65fbe0b12b0ea9540f6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SGTOAW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCFTPXiwyHVVP%2F5wyiGlCPIxX7IkezfXyhfQEEuhEY3qAIhAKlnwTsznBYr5z1a527%2BXMDL%2B3BbEEIpzGUCYHcSXqa%2FKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9td1ILmysJYHVxe8q3AOeaPPGdNaI3Gca6Vn6i9Bg2mwLCahxqQOGHVYhe4hm9LiyYZbrN%2BJ%2FcQ019n9T%2BDy3wlK3GZ38C1jDP4Jps2y4R03ciRwSWnK7%2BB%2F8ggK%2FPMkUzBF7oFmZ3JnLDMw%2FljD0Jwuxi9ArChATbVqyMEzFZp6ow0GHFnfKm7xvkF1I0ZT2SQsAt2ybWf3wqZxWiLr%2FL%2BAbl240j6MWdh6fmZ3qFnwbXKx5Q0M5zaqCvK9zyvs7in0%2F9OJFPDAbrpbvTwmKS%2B6acfd8BAaW77GDRpo0p1fYjmObYWlrMSLORw7sgG41lD3w3bF3Igw5iJ%2BgJ5AJdPnAqMf4tkd3rSHrXa5CXwbElS30tniN8%2FEigiAG90gYINIBjUw0bD0F6EgLe5juyHQwoU%2FQd%2Fi2rBGBiyYYYv%2BC5EVF9lNjYXTMGJnHzAoAUloU2fl7eAACEPuQUV6ei%2B4zHYeVk7N0Pf0UmnxGzgPGYW4zKaHMKJN0c%2BQd5Wq4AUi7Po5YAlxGb%2BiiR6n13jppbpqWyRE07aCUvZV97FJkz7NiVbmynufi8Oc5jU20Nmy2oF7s0tCQ8Vjv3viFBLhfRI%2ByLi2CW5vhM1PEaOJwziGBkHmOOznnR%2BRuzEO%2B%2B2mp5D8jnAvieDCZotG9BjqkAUdnJlvSwICb0MQnYEo3ybxF%2BvxVXArheNsX1S9T3rTJzzT776CDsCMQk1Jh9kGmmEacMarXVBXw%2BiHGSiibAjYlP1B0yP%2F9tZ0gWyAaBiMErgd6LsV1jYJOXbnZ6g2ttcWh9lJ24GyP9S%2BX54pV5jeB4Q7gbJud5Ewy8GCuL%2B9YCxvXjfYngY3jqe5CHQcalW3zllbksPhBqVBj%2Bn6Qx2tVks%2BM&X-Amz-Signature=3ca4f985658f16930813705f37ae46ab1228770bb489025a1c9eead2f41f6e14&X-Amz-SignedHeaders=host&x-id=GetObject)
