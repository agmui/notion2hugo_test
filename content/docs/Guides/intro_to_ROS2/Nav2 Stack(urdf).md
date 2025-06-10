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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGFEO3J%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPhAR%2F0ocHjPLFeGTPBIkIJd95vtkn5%2BWeMAn0JWy5tAiBstn7dojL5GvHZcWbHzs9erNpebWvB4VfkvcmCmiY8GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrFlUnRqTTlUC5jkKtwD9gGnvWJ14hx4oN6yNEFxhIN9DLrxoqfUUdrtgn2iMp1dZkqV9HYeQbXLDjm%2BeUduIPwl0QwId8XI4uF%2FX7tDCGi4znzwUicmEM0W3%2Fp39TsnqBIbGEBNXdJKFFbJuup7RtjewSEVJs3HmsVRzZNp%2Fdip0U%2BPNzcJ83sSEzrptUc938IE719qM%2FoDV5ToiL%2FfdRtRb1BtwS%2F43zqL7%2Bi91Pofx8Eglpc%2F4eVvuXwSBOyK48mQzJeMesAi4K6ALCK9%2Bzr9LmOS8qqFEdY%2Fh72Y6FYXfz938S3%2FN19eb%2Fg8fruVh2Ohb9RlR55j3LWMN8jt1fKi%2BnMO4n1eyjzkdba5PSa4b51FfubJPSFe5Vl6HjCsrnJHZcIeGj%2F1JSYrF62vjfiYVlBoKcNEq%2FApp%2FMPI2UnzGWrYAl4PxX%2BHb9PgqdC%2Fb%2FkTERGb8oX2UVjxMDzzxTW7xaLaZo0aDhZua67YFBr7LmqWT6UtIf7vxqdMFU%2FIZHkumc5WjEJ2Kw8G9660IaG7aaNDDKxEws%2B%2BcUjAiT9aeOo6XRJE1gcw7%2F4uTJD51Ygg1U%2BNBkp13i9FdHJAEnphRSlSFp572ifPfpEaZq0ltxsGE7UVQnGiR4qYvPhdkWypqIAciiV2d0wid%2BfwgY6pgF4mGaOIVnFYhkpS49bX%2FE5f6V7GYcXN25NxOQ%2BSGzbsF8q5qnUNOMdY1nnkc9F3%2F8kls2Vf%2B9mEDMxfHgf1EsOo8t%2BmGyi0bbN69GSR6tfugGpyB6L4FjOjyAz4lb3rWhXcsSMOFtBDp4lyge4PF6suy0p4sPxkZ%2Bpj9wehPe0e4EhWSSRcBYc8zIus78EWhBekb%2Bf4PKyQvHRFH2MhtlwIxvV8C0H&X-Amz-Signature=ee451df25af20484fd93617b4234c6acecd51861018f31199af0dcd227e9af67&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGFEO3J%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPhAR%2F0ocHjPLFeGTPBIkIJd95vtkn5%2BWeMAn0JWy5tAiBstn7dojL5GvHZcWbHzs9erNpebWvB4VfkvcmCmiY8GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrFlUnRqTTlUC5jkKtwD9gGnvWJ14hx4oN6yNEFxhIN9DLrxoqfUUdrtgn2iMp1dZkqV9HYeQbXLDjm%2BeUduIPwl0QwId8XI4uF%2FX7tDCGi4znzwUicmEM0W3%2Fp39TsnqBIbGEBNXdJKFFbJuup7RtjewSEVJs3HmsVRzZNp%2Fdip0U%2BPNzcJ83sSEzrptUc938IE719qM%2FoDV5ToiL%2FfdRtRb1BtwS%2F43zqL7%2Bi91Pofx8Eglpc%2F4eVvuXwSBOyK48mQzJeMesAi4K6ALCK9%2Bzr9LmOS8qqFEdY%2Fh72Y6FYXfz938S3%2FN19eb%2Fg8fruVh2Ohb9RlR55j3LWMN8jt1fKi%2BnMO4n1eyjzkdba5PSa4b51FfubJPSFe5Vl6HjCsrnJHZcIeGj%2F1JSYrF62vjfiYVlBoKcNEq%2FApp%2FMPI2UnzGWrYAl4PxX%2BHb9PgqdC%2Fb%2FkTERGb8oX2UVjxMDzzxTW7xaLaZo0aDhZua67YFBr7LmqWT6UtIf7vxqdMFU%2FIZHkumc5WjEJ2Kw8G9660IaG7aaNDDKxEws%2B%2BcUjAiT9aeOo6XRJE1gcw7%2F4uTJD51Ygg1U%2BNBkp13i9FdHJAEnphRSlSFp572ifPfpEaZq0ltxsGE7UVQnGiR4qYvPhdkWypqIAciiV2d0wid%2BfwgY6pgF4mGaOIVnFYhkpS49bX%2FE5f6V7GYcXN25NxOQ%2BSGzbsF8q5qnUNOMdY1nnkc9F3%2F8kls2Vf%2B9mEDMxfHgf1EsOo8t%2BmGyi0bbN69GSR6tfugGpyB6L4FjOjyAz4lb3rWhXcsSMOFtBDp4lyge4PF6suy0p4sPxkZ%2Bpj9wehPe0e4EhWSSRcBYc8zIus78EWhBekb%2Bf4PKyQvHRFH2MhtlwIxvV8C0H&X-Amz-Signature=f3e248c21ae0acb9780a73aae1909a4246a0f563d654ca7979046e09825a5ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGFEO3J%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPhAR%2F0ocHjPLFeGTPBIkIJd95vtkn5%2BWeMAn0JWy5tAiBstn7dojL5GvHZcWbHzs9erNpebWvB4VfkvcmCmiY8GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrFlUnRqTTlUC5jkKtwD9gGnvWJ14hx4oN6yNEFxhIN9DLrxoqfUUdrtgn2iMp1dZkqV9HYeQbXLDjm%2BeUduIPwl0QwId8XI4uF%2FX7tDCGi4znzwUicmEM0W3%2Fp39TsnqBIbGEBNXdJKFFbJuup7RtjewSEVJs3HmsVRzZNp%2Fdip0U%2BPNzcJ83sSEzrptUc938IE719qM%2FoDV5ToiL%2FfdRtRb1BtwS%2F43zqL7%2Bi91Pofx8Eglpc%2F4eVvuXwSBOyK48mQzJeMesAi4K6ALCK9%2Bzr9LmOS8qqFEdY%2Fh72Y6FYXfz938S3%2FN19eb%2Fg8fruVh2Ohb9RlR55j3LWMN8jt1fKi%2BnMO4n1eyjzkdba5PSa4b51FfubJPSFe5Vl6HjCsrnJHZcIeGj%2F1JSYrF62vjfiYVlBoKcNEq%2FApp%2FMPI2UnzGWrYAl4PxX%2BHb9PgqdC%2Fb%2FkTERGb8oX2UVjxMDzzxTW7xaLaZo0aDhZua67YFBr7LmqWT6UtIf7vxqdMFU%2FIZHkumc5WjEJ2Kw8G9660IaG7aaNDDKxEws%2B%2BcUjAiT9aeOo6XRJE1gcw7%2F4uTJD51Ygg1U%2BNBkp13i9FdHJAEnphRSlSFp572ifPfpEaZq0ltxsGE7UVQnGiR4qYvPhdkWypqIAciiV2d0wid%2BfwgY6pgF4mGaOIVnFYhkpS49bX%2FE5f6V7GYcXN25NxOQ%2BSGzbsF8q5qnUNOMdY1nnkc9F3%2F8kls2Vf%2B9mEDMxfHgf1EsOo8t%2BmGyi0bbN69GSR6tfugGpyB6L4FjOjyAz4lb3rWhXcsSMOFtBDp4lyge4PF6suy0p4sPxkZ%2Bpj9wehPe0e4EhWSSRcBYc8zIus78EWhBekb%2Bf4PKyQvHRFH2MhtlwIxvV8C0H&X-Amz-Signature=f2435f18f8b6ecf3b7ec27a85de1454d1254a4467e271fcf18e9825f2bad6bae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGFEO3J%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPhAR%2F0ocHjPLFeGTPBIkIJd95vtkn5%2BWeMAn0JWy5tAiBstn7dojL5GvHZcWbHzs9erNpebWvB4VfkvcmCmiY8GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrFlUnRqTTlUC5jkKtwD9gGnvWJ14hx4oN6yNEFxhIN9DLrxoqfUUdrtgn2iMp1dZkqV9HYeQbXLDjm%2BeUduIPwl0QwId8XI4uF%2FX7tDCGi4znzwUicmEM0W3%2Fp39TsnqBIbGEBNXdJKFFbJuup7RtjewSEVJs3HmsVRzZNp%2Fdip0U%2BPNzcJ83sSEzrptUc938IE719qM%2FoDV5ToiL%2FfdRtRb1BtwS%2F43zqL7%2Bi91Pofx8Eglpc%2F4eVvuXwSBOyK48mQzJeMesAi4K6ALCK9%2Bzr9LmOS8qqFEdY%2Fh72Y6FYXfz938S3%2FN19eb%2Fg8fruVh2Ohb9RlR55j3LWMN8jt1fKi%2BnMO4n1eyjzkdba5PSa4b51FfubJPSFe5Vl6HjCsrnJHZcIeGj%2F1JSYrF62vjfiYVlBoKcNEq%2FApp%2FMPI2UnzGWrYAl4PxX%2BHb9PgqdC%2Fb%2FkTERGb8oX2UVjxMDzzxTW7xaLaZo0aDhZua67YFBr7LmqWT6UtIf7vxqdMFU%2FIZHkumc5WjEJ2Kw8G9660IaG7aaNDDKxEws%2B%2BcUjAiT9aeOo6XRJE1gcw7%2F4uTJD51Ygg1U%2BNBkp13i9FdHJAEnphRSlSFp572ifPfpEaZq0ltxsGE7UVQnGiR4qYvPhdkWypqIAciiV2d0wid%2BfwgY6pgF4mGaOIVnFYhkpS49bX%2FE5f6V7GYcXN25NxOQ%2BSGzbsF8q5qnUNOMdY1nnkc9F3%2F8kls2Vf%2B9mEDMxfHgf1EsOo8t%2BmGyi0bbN69GSR6tfugGpyB6L4FjOjyAz4lb3rWhXcsSMOFtBDp4lyge4PF6suy0p4sPxkZ%2Bpj9wehPe0e4EhWSSRcBYc8zIus78EWhBekb%2Bf4PKyQvHRFH2MhtlwIxvV8C0H&X-Amz-Signature=25d7123de93d902d6afd5ea9d62d6d775d2d59c658dac6094d969993dca000a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGFEO3J%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPhAR%2F0ocHjPLFeGTPBIkIJd95vtkn5%2BWeMAn0JWy5tAiBstn7dojL5GvHZcWbHzs9erNpebWvB4VfkvcmCmiY8GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrFlUnRqTTlUC5jkKtwD9gGnvWJ14hx4oN6yNEFxhIN9DLrxoqfUUdrtgn2iMp1dZkqV9HYeQbXLDjm%2BeUduIPwl0QwId8XI4uF%2FX7tDCGi4znzwUicmEM0W3%2Fp39TsnqBIbGEBNXdJKFFbJuup7RtjewSEVJs3HmsVRzZNp%2Fdip0U%2BPNzcJ83sSEzrptUc938IE719qM%2FoDV5ToiL%2FfdRtRb1BtwS%2F43zqL7%2Bi91Pofx8Eglpc%2F4eVvuXwSBOyK48mQzJeMesAi4K6ALCK9%2Bzr9LmOS8qqFEdY%2Fh72Y6FYXfz938S3%2FN19eb%2Fg8fruVh2Ohb9RlR55j3LWMN8jt1fKi%2BnMO4n1eyjzkdba5PSa4b51FfubJPSFe5Vl6HjCsrnJHZcIeGj%2F1JSYrF62vjfiYVlBoKcNEq%2FApp%2FMPI2UnzGWrYAl4PxX%2BHb9PgqdC%2Fb%2FkTERGb8oX2UVjxMDzzxTW7xaLaZo0aDhZua67YFBr7LmqWT6UtIf7vxqdMFU%2FIZHkumc5WjEJ2Kw8G9660IaG7aaNDDKxEws%2B%2BcUjAiT9aeOo6XRJE1gcw7%2F4uTJD51Ygg1U%2BNBkp13i9FdHJAEnphRSlSFp572ifPfpEaZq0ltxsGE7UVQnGiR4qYvPhdkWypqIAciiV2d0wid%2BfwgY6pgF4mGaOIVnFYhkpS49bX%2FE5f6V7GYcXN25NxOQ%2BSGzbsF8q5qnUNOMdY1nnkc9F3%2F8kls2Vf%2B9mEDMxfHgf1EsOo8t%2BmGyi0bbN69GSR6tfugGpyB6L4FjOjyAz4lb3rWhXcsSMOFtBDp4lyge4PF6suy0p4sPxkZ%2Bpj9wehPe0e4EhWSSRcBYc8zIus78EWhBekb%2Bf4PKyQvHRFH2MhtlwIxvV8C0H&X-Amz-Signature=1c621ff33f523f051e1465adf9fc0091d388390f5b32217fa501b5efc5863d55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGFEO3J%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPhAR%2F0ocHjPLFeGTPBIkIJd95vtkn5%2BWeMAn0JWy5tAiBstn7dojL5GvHZcWbHzs9erNpebWvB4VfkvcmCmiY8GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsrFlUnRqTTlUC5jkKtwD9gGnvWJ14hx4oN6yNEFxhIN9DLrxoqfUUdrtgn2iMp1dZkqV9HYeQbXLDjm%2BeUduIPwl0QwId8XI4uF%2FX7tDCGi4znzwUicmEM0W3%2Fp39TsnqBIbGEBNXdJKFFbJuup7RtjewSEVJs3HmsVRzZNp%2Fdip0U%2BPNzcJ83sSEzrptUc938IE719qM%2FoDV5ToiL%2FfdRtRb1BtwS%2F43zqL7%2Bi91Pofx8Eglpc%2F4eVvuXwSBOyK48mQzJeMesAi4K6ALCK9%2Bzr9LmOS8qqFEdY%2Fh72Y6FYXfz938S3%2FN19eb%2Fg8fruVh2Ohb9RlR55j3LWMN8jt1fKi%2BnMO4n1eyjzkdba5PSa4b51FfubJPSFe5Vl6HjCsrnJHZcIeGj%2F1JSYrF62vjfiYVlBoKcNEq%2FApp%2FMPI2UnzGWrYAl4PxX%2BHb9PgqdC%2Fb%2FkTERGb8oX2UVjxMDzzxTW7xaLaZo0aDhZua67YFBr7LmqWT6UtIf7vxqdMFU%2FIZHkumc5WjEJ2Kw8G9660IaG7aaNDDKxEws%2B%2BcUjAiT9aeOo6XRJE1gcw7%2F4uTJD51Ygg1U%2BNBkp13i9FdHJAEnphRSlSFp572ifPfpEaZq0ltxsGE7UVQnGiR4qYvPhdkWypqIAciiV2d0wid%2BfwgY6pgF4mGaOIVnFYhkpS49bX%2FE5f6V7GYcXN25NxOQ%2BSGzbsF8q5qnUNOMdY1nnkc9F3%2F8kls2Vf%2B9mEDMxfHgf1EsOo8t%2BmGyi0bbN69GSR6tfugGpyB6L4FjOjyAz4lb3rWhXcsSMOFtBDp4lyge4PF6suy0p4sPxkZ%2Bpj9wehPe0e4EhWSSRcBYc8zIus78EWhBekb%2Bf4PKyQvHRFH2MhtlwIxvV8C0H&X-Amz-Signature=758cb0a08c9c4644a841572eadade728fbac347630fe21231333aebddc473823&X-Amz-SignedHeaders=host&x-id=GetObject)
