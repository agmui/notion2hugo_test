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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=bf8fd8071f8e55598f7df923a72d4a4f14ff427cd16d574099f350bf17d92735&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=940c811063efcd07edc842f4714feefaa7737731d8913eac4ebfc954b2a12de7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=96a86b3d11061844ca17ed56dc3b63b5de5959a92fb1cd9d228b59e34d4e9bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=2815ab1ed927c9cf55ba8ba7883d5ecbbaeefea5ab8048dfc8c1e02014b432c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=fc2a6355f67979a1cf1d9370553a229765137ec8b80f83a7f4a77be15a1c1e46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=24b9fa3ffa95f99a7a30a6e4e2f532d99c8b8c2dbbca3ace530e97b01738431e&X-Amz-SignedHeaders=host&x-id=GetObject)
