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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFKTAIH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bqdhc6XLpdWKTviHgbuRehkeKZ20yHrayZxhmofAjgIhAPA22BGpP8HBQlhcjCcT40Nz9tqIsDISWnMP4KapVe2kKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSgR3bVYbsBOA8c9kq3APv4ogxa3TRMoSmGL9IH%2B%2BhTn9o8UTSZ7zsyCAZgdka%2FPzhPYYSUg1poCaohTtVko6mPxmig%2FPmoXDnfT5MzJdwCD4Pkq%2BCUh4TU0HlwnruTi%2BN%2Fo7aCafiPkW6uKh3wviDP1%2FXG3KGnOnKRx4eFip9cPdTNxVuBBvhAvRv0488M3%2Fm1A3Fog456nUJQ2XCI%2FMEwhqWFiVo87V3iEgAjIkUrSs12JIb7vQtdGYztoLmTwVIk2V3WPCv1CszCYpisMFwFHJ4x8fu5qR0TlP25NIrj31hq3GK0H5%2F5%2Fj%2BsaY17NXQJEff0hbAyxGxxplasQMr3%2BGwPIM%2FDKVR5AIwPIS0TAtjqF6hewC3f3WwdtspgYZBipAHTIhES9dglMEJWT2gETzZmWxGwJsOT7H7ikjZB6mYodiEr76wYpFrNeKUUK6UCDjhbRXjYVdUSJ6eGL4aRj6d3eW%2B%2F1NniExlIEpq%2B0JttbA5Bly6YIyXX0nYsWq6uzTumSnfFpYZzy4hLAW6J23EWkorqJ%2BaQtoCVfWtY9IV4rbx74%2B8RgmRwGM2zQ3kz834jQr34%2Fqr3eB8YuhsO1byZJzblxhufFNWHdk%2B%2BZUUIHSLZdd1LQU7TbFBgmy0LYgEwlv4JpLP0jCLjpK%2FBjqkAXAS8peUVaPW4QKcnCBPwCz8fXIi4lhCx5Mbcwapq3HG1Va8pSsqJC3DctFqOqFw54yrAWZltmZdI%2B%2F2FYRvbVOnWc6%2B0Su0I3x4oJbISBiL3H9%2FnsF4s6D1%2BjKekoniDZ5AB4prMBqZX05rslYQZkUuXaxsEPGDfJY3%2FRoQO8SZ%2F22DN6rMHgafXSMjw5DH4S1xp0hu%2FGwNynrBDOSd7fc%2B4CqQ&X-Amz-Signature=30c27c7bc0748e911bfaa0942b06ff8a16df283164c8c27fbafaf366dec86c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFKTAIH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bqdhc6XLpdWKTviHgbuRehkeKZ20yHrayZxhmofAjgIhAPA22BGpP8HBQlhcjCcT40Nz9tqIsDISWnMP4KapVe2kKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSgR3bVYbsBOA8c9kq3APv4ogxa3TRMoSmGL9IH%2B%2BhTn9o8UTSZ7zsyCAZgdka%2FPzhPYYSUg1poCaohTtVko6mPxmig%2FPmoXDnfT5MzJdwCD4Pkq%2BCUh4TU0HlwnruTi%2BN%2Fo7aCafiPkW6uKh3wviDP1%2FXG3KGnOnKRx4eFip9cPdTNxVuBBvhAvRv0488M3%2Fm1A3Fog456nUJQ2XCI%2FMEwhqWFiVo87V3iEgAjIkUrSs12JIb7vQtdGYztoLmTwVIk2V3WPCv1CszCYpisMFwFHJ4x8fu5qR0TlP25NIrj31hq3GK0H5%2F5%2Fj%2BsaY17NXQJEff0hbAyxGxxplasQMr3%2BGwPIM%2FDKVR5AIwPIS0TAtjqF6hewC3f3WwdtspgYZBipAHTIhES9dglMEJWT2gETzZmWxGwJsOT7H7ikjZB6mYodiEr76wYpFrNeKUUK6UCDjhbRXjYVdUSJ6eGL4aRj6d3eW%2B%2F1NniExlIEpq%2B0JttbA5Bly6YIyXX0nYsWq6uzTumSnfFpYZzy4hLAW6J23EWkorqJ%2BaQtoCVfWtY9IV4rbx74%2B8RgmRwGM2zQ3kz834jQr34%2Fqr3eB8YuhsO1byZJzblxhufFNWHdk%2B%2BZUUIHSLZdd1LQU7TbFBgmy0LYgEwlv4JpLP0jCLjpK%2FBjqkAXAS8peUVaPW4QKcnCBPwCz8fXIi4lhCx5Mbcwapq3HG1Va8pSsqJC3DctFqOqFw54yrAWZltmZdI%2B%2F2FYRvbVOnWc6%2B0Su0I3x4oJbISBiL3H9%2FnsF4s6D1%2BjKekoniDZ5AB4prMBqZX05rslYQZkUuXaxsEPGDfJY3%2FRoQO8SZ%2F22DN6rMHgafXSMjw5DH4S1xp0hu%2FGwNynrBDOSd7fc%2B4CqQ&X-Amz-Signature=c84dce8356bc7322e1cd0de71c415db4f307a93faf0e7fb43810414a7c0b8f80&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFKTAIH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bqdhc6XLpdWKTviHgbuRehkeKZ20yHrayZxhmofAjgIhAPA22BGpP8HBQlhcjCcT40Nz9tqIsDISWnMP4KapVe2kKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSgR3bVYbsBOA8c9kq3APv4ogxa3TRMoSmGL9IH%2B%2BhTn9o8UTSZ7zsyCAZgdka%2FPzhPYYSUg1poCaohTtVko6mPxmig%2FPmoXDnfT5MzJdwCD4Pkq%2BCUh4TU0HlwnruTi%2BN%2Fo7aCafiPkW6uKh3wviDP1%2FXG3KGnOnKRx4eFip9cPdTNxVuBBvhAvRv0488M3%2Fm1A3Fog456nUJQ2XCI%2FMEwhqWFiVo87V3iEgAjIkUrSs12JIb7vQtdGYztoLmTwVIk2V3WPCv1CszCYpisMFwFHJ4x8fu5qR0TlP25NIrj31hq3GK0H5%2F5%2Fj%2BsaY17NXQJEff0hbAyxGxxplasQMr3%2BGwPIM%2FDKVR5AIwPIS0TAtjqF6hewC3f3WwdtspgYZBipAHTIhES9dglMEJWT2gETzZmWxGwJsOT7H7ikjZB6mYodiEr76wYpFrNeKUUK6UCDjhbRXjYVdUSJ6eGL4aRj6d3eW%2B%2F1NniExlIEpq%2B0JttbA5Bly6YIyXX0nYsWq6uzTumSnfFpYZzy4hLAW6J23EWkorqJ%2BaQtoCVfWtY9IV4rbx74%2B8RgmRwGM2zQ3kz834jQr34%2Fqr3eB8YuhsO1byZJzblxhufFNWHdk%2B%2BZUUIHSLZdd1LQU7TbFBgmy0LYgEwlv4JpLP0jCLjpK%2FBjqkAXAS8peUVaPW4QKcnCBPwCz8fXIi4lhCx5Mbcwapq3HG1Va8pSsqJC3DctFqOqFw54yrAWZltmZdI%2B%2F2FYRvbVOnWc6%2B0Su0I3x4oJbISBiL3H9%2FnsF4s6D1%2BjKekoniDZ5AB4prMBqZX05rslYQZkUuXaxsEPGDfJY3%2FRoQO8SZ%2F22DN6rMHgafXSMjw5DH4S1xp0hu%2FGwNynrBDOSd7fc%2B4CqQ&X-Amz-Signature=f2861391870a0ed0494032310fd3c82869baa2e20bcd90fad459c7fe733e5490&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFKTAIH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bqdhc6XLpdWKTviHgbuRehkeKZ20yHrayZxhmofAjgIhAPA22BGpP8HBQlhcjCcT40Nz9tqIsDISWnMP4KapVe2kKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSgR3bVYbsBOA8c9kq3APv4ogxa3TRMoSmGL9IH%2B%2BhTn9o8UTSZ7zsyCAZgdka%2FPzhPYYSUg1poCaohTtVko6mPxmig%2FPmoXDnfT5MzJdwCD4Pkq%2BCUh4TU0HlwnruTi%2BN%2Fo7aCafiPkW6uKh3wviDP1%2FXG3KGnOnKRx4eFip9cPdTNxVuBBvhAvRv0488M3%2Fm1A3Fog456nUJQ2XCI%2FMEwhqWFiVo87V3iEgAjIkUrSs12JIb7vQtdGYztoLmTwVIk2V3WPCv1CszCYpisMFwFHJ4x8fu5qR0TlP25NIrj31hq3GK0H5%2F5%2Fj%2BsaY17NXQJEff0hbAyxGxxplasQMr3%2BGwPIM%2FDKVR5AIwPIS0TAtjqF6hewC3f3WwdtspgYZBipAHTIhES9dglMEJWT2gETzZmWxGwJsOT7H7ikjZB6mYodiEr76wYpFrNeKUUK6UCDjhbRXjYVdUSJ6eGL4aRj6d3eW%2B%2F1NniExlIEpq%2B0JttbA5Bly6YIyXX0nYsWq6uzTumSnfFpYZzy4hLAW6J23EWkorqJ%2BaQtoCVfWtY9IV4rbx74%2B8RgmRwGM2zQ3kz834jQr34%2Fqr3eB8YuhsO1byZJzblxhufFNWHdk%2B%2BZUUIHSLZdd1LQU7TbFBgmy0LYgEwlv4JpLP0jCLjpK%2FBjqkAXAS8peUVaPW4QKcnCBPwCz8fXIi4lhCx5Mbcwapq3HG1Va8pSsqJC3DctFqOqFw54yrAWZltmZdI%2B%2F2FYRvbVOnWc6%2B0Su0I3x4oJbISBiL3H9%2FnsF4s6D1%2BjKekoniDZ5AB4prMBqZX05rslYQZkUuXaxsEPGDfJY3%2FRoQO8SZ%2F22DN6rMHgafXSMjw5DH4S1xp0hu%2FGwNynrBDOSd7fc%2B4CqQ&X-Amz-Signature=7a8f683d9d7eed02ff3539540c69ee1ad974bffd9f3cd0ccd15fda35d7531f62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFKTAIH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bqdhc6XLpdWKTviHgbuRehkeKZ20yHrayZxhmofAjgIhAPA22BGpP8HBQlhcjCcT40Nz9tqIsDISWnMP4KapVe2kKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSgR3bVYbsBOA8c9kq3APv4ogxa3TRMoSmGL9IH%2B%2BhTn9o8UTSZ7zsyCAZgdka%2FPzhPYYSUg1poCaohTtVko6mPxmig%2FPmoXDnfT5MzJdwCD4Pkq%2BCUh4TU0HlwnruTi%2BN%2Fo7aCafiPkW6uKh3wviDP1%2FXG3KGnOnKRx4eFip9cPdTNxVuBBvhAvRv0488M3%2Fm1A3Fog456nUJQ2XCI%2FMEwhqWFiVo87V3iEgAjIkUrSs12JIb7vQtdGYztoLmTwVIk2V3WPCv1CszCYpisMFwFHJ4x8fu5qR0TlP25NIrj31hq3GK0H5%2F5%2Fj%2BsaY17NXQJEff0hbAyxGxxplasQMr3%2BGwPIM%2FDKVR5AIwPIS0TAtjqF6hewC3f3WwdtspgYZBipAHTIhES9dglMEJWT2gETzZmWxGwJsOT7H7ikjZB6mYodiEr76wYpFrNeKUUK6UCDjhbRXjYVdUSJ6eGL4aRj6d3eW%2B%2F1NniExlIEpq%2B0JttbA5Bly6YIyXX0nYsWq6uzTumSnfFpYZzy4hLAW6J23EWkorqJ%2BaQtoCVfWtY9IV4rbx74%2B8RgmRwGM2zQ3kz834jQr34%2Fqr3eB8YuhsO1byZJzblxhufFNWHdk%2B%2BZUUIHSLZdd1LQU7TbFBgmy0LYgEwlv4JpLP0jCLjpK%2FBjqkAXAS8peUVaPW4QKcnCBPwCz8fXIi4lhCx5Mbcwapq3HG1Va8pSsqJC3DctFqOqFw54yrAWZltmZdI%2B%2F2FYRvbVOnWc6%2B0Su0I3x4oJbISBiL3H9%2FnsF4s6D1%2BjKekoniDZ5AB4prMBqZX05rslYQZkUuXaxsEPGDfJY3%2FRoQO8SZ%2F22DN6rMHgafXSMjw5DH4S1xp0hu%2FGwNynrBDOSd7fc%2B4CqQ&X-Amz-Signature=749c4f778c20ed9ab5754156e538e19ff143b8fb823cbda010abe31e57b21c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFKTAIH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bqdhc6XLpdWKTviHgbuRehkeKZ20yHrayZxhmofAjgIhAPA22BGpP8HBQlhcjCcT40Nz9tqIsDISWnMP4KapVe2kKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSgR3bVYbsBOA8c9kq3APv4ogxa3TRMoSmGL9IH%2B%2BhTn9o8UTSZ7zsyCAZgdka%2FPzhPYYSUg1poCaohTtVko6mPxmig%2FPmoXDnfT5MzJdwCD4Pkq%2BCUh4TU0HlwnruTi%2BN%2Fo7aCafiPkW6uKh3wviDP1%2FXG3KGnOnKRx4eFip9cPdTNxVuBBvhAvRv0488M3%2Fm1A3Fog456nUJQ2XCI%2FMEwhqWFiVo87V3iEgAjIkUrSs12JIb7vQtdGYztoLmTwVIk2V3WPCv1CszCYpisMFwFHJ4x8fu5qR0TlP25NIrj31hq3GK0H5%2F5%2Fj%2BsaY17NXQJEff0hbAyxGxxplasQMr3%2BGwPIM%2FDKVR5AIwPIS0TAtjqF6hewC3f3WwdtspgYZBipAHTIhES9dglMEJWT2gETzZmWxGwJsOT7H7ikjZB6mYodiEr76wYpFrNeKUUK6UCDjhbRXjYVdUSJ6eGL4aRj6d3eW%2B%2F1NniExlIEpq%2B0JttbA5Bly6YIyXX0nYsWq6uzTumSnfFpYZzy4hLAW6J23EWkorqJ%2BaQtoCVfWtY9IV4rbx74%2B8RgmRwGM2zQ3kz834jQr34%2Fqr3eB8YuhsO1byZJzblxhufFNWHdk%2B%2BZUUIHSLZdd1LQU7TbFBgmy0LYgEwlv4JpLP0jCLjpK%2FBjqkAXAS8peUVaPW4QKcnCBPwCz8fXIi4lhCx5Mbcwapq3HG1Va8pSsqJC3DctFqOqFw54yrAWZltmZdI%2B%2F2FYRvbVOnWc6%2B0Su0I3x4oJbISBiL3H9%2FnsF4s6D1%2BjKekoniDZ5AB4prMBqZX05rslYQZkUuXaxsEPGDfJY3%2FRoQO8SZ%2F22DN6rMHgafXSMjw5DH4S1xp0hu%2FGwNynrBDOSd7fc%2B4CqQ&X-Amz-Signature=59945808856ed6d6718f5701d40f1cc4e3d3d037368eec48d07219625b2474bb&X-Amz-SignedHeaders=host&x-id=GetObject)
