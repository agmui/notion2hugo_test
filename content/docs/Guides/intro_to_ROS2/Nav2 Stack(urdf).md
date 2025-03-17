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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UBUOSR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3m%2BEmDqABEJKgAG8HedaSj6NezU85lKUaLXgRIbY0AIgXw6dYUI1FKZkzsaLHXNA6m5TP%2FK2dWnRP81SOsCR1W8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNUZRsP56MHW6%2F0DISrcA90HM2bCFfYNon5FJJRdP%2FR51OAWLVmxXBkZVyLJmGGLw9gqkNviFPS59y3Bz4Pih8GsFbM7EmcmJp%2FRFISKocf0wOwMAGu2iGXGFe1TnYixcA%2FZ6krMd0wix9zN84soQgxqZr7T5MH7TYmMiLdDmRTa9%2BNM08IA8Y5L3lfvm8XroIlOu9w7A%2FuINXpHKP%2FY3iuIByLhUuVpTqw%2FvkOkUR%2B%2BWokGznYKVby4FbsBew272yPL%2BzPzy3kzwEai60nsRDuq0RcFBH8a%2FC%2BMijCEdg9vWaSj%2Bgq4L%2FOFqSNhdmzRqCERYQaLhgx1cYTIBoD26oZmyhMCmKwpPUR2jd8W2lVdzMOUe%2FAH%2BNAvnITCb6S7vRM3trJ0HlP2R2zp1DlbyC%2Bb4D7RaIN11RTBrAHIkqF5wC6sZkQvyfNLXU7QAGkeUKO60g9Klmal4nymj18xZByXUv5eJlIHZF7oFRwVF8RUbswHL0auAKUcZyBb%2BRt%2FPlNmgaCMn6c0bkOp9K7GD7xJbzKhleCE0%2BNPx%2BXi7t0FT3Oo%2F9Kn7uRy7rNZX57ASerNCGFXNLAs9KLbxCIeXmhwQz0aTfyroM7EmWsxm17ypb6WKQP9z3ywFcKb7EjjufIE46e%2By%2BEWzxCxMKjl4b4GOqUBRSNk56f2kyZJPCkgFa%2FhQjL96eGWQBHjSMuTxE7euC7llFz4B6Wq3k81IYh0sfNDpPdFdX8hJuMzVPkJTkhMePiL03scSYC%2BzhZ4boxnkI2MKPgO8dfKSrHmLuhlADMta6%2BlmDxFFa7NyS%2F5EIn9MM3%2BbP9UdzRiQC3MrUVAypqwcWC61aoJPZr%2FGZLgDT1acHYfE1vi7MqFWIJEquu9mehiG9%2Fz&X-Amz-Signature=e2dc074f9bfa73ad5effd6899773a6bb9d36e2215ccf6630cc28cb08508adee6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UBUOSR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3m%2BEmDqABEJKgAG8HedaSj6NezU85lKUaLXgRIbY0AIgXw6dYUI1FKZkzsaLHXNA6m5TP%2FK2dWnRP81SOsCR1W8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNUZRsP56MHW6%2F0DISrcA90HM2bCFfYNon5FJJRdP%2FR51OAWLVmxXBkZVyLJmGGLw9gqkNviFPS59y3Bz4Pih8GsFbM7EmcmJp%2FRFISKocf0wOwMAGu2iGXGFe1TnYixcA%2FZ6krMd0wix9zN84soQgxqZr7T5MH7TYmMiLdDmRTa9%2BNM08IA8Y5L3lfvm8XroIlOu9w7A%2FuINXpHKP%2FY3iuIByLhUuVpTqw%2FvkOkUR%2B%2BWokGznYKVby4FbsBew272yPL%2BzPzy3kzwEai60nsRDuq0RcFBH8a%2FC%2BMijCEdg9vWaSj%2Bgq4L%2FOFqSNhdmzRqCERYQaLhgx1cYTIBoD26oZmyhMCmKwpPUR2jd8W2lVdzMOUe%2FAH%2BNAvnITCb6S7vRM3trJ0HlP2R2zp1DlbyC%2Bb4D7RaIN11RTBrAHIkqF5wC6sZkQvyfNLXU7QAGkeUKO60g9Klmal4nymj18xZByXUv5eJlIHZF7oFRwVF8RUbswHL0auAKUcZyBb%2BRt%2FPlNmgaCMn6c0bkOp9K7GD7xJbzKhleCE0%2BNPx%2BXi7t0FT3Oo%2F9Kn7uRy7rNZX57ASerNCGFXNLAs9KLbxCIeXmhwQz0aTfyroM7EmWsxm17ypb6WKQP9z3ywFcKb7EjjufIE46e%2By%2BEWzxCxMKjl4b4GOqUBRSNk56f2kyZJPCkgFa%2FhQjL96eGWQBHjSMuTxE7euC7llFz4B6Wq3k81IYh0sfNDpPdFdX8hJuMzVPkJTkhMePiL03scSYC%2BzhZ4boxnkI2MKPgO8dfKSrHmLuhlADMta6%2BlmDxFFa7NyS%2F5EIn9MM3%2BbP9UdzRiQC3MrUVAypqwcWC61aoJPZr%2FGZLgDT1acHYfE1vi7MqFWIJEquu9mehiG9%2Fz&X-Amz-Signature=cdbdcbb5a82fb4516d94c601f5adf1c1bae7eb3d7ddecaf85c24ab8d9b8f4d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UBUOSR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3m%2BEmDqABEJKgAG8HedaSj6NezU85lKUaLXgRIbY0AIgXw6dYUI1FKZkzsaLHXNA6m5TP%2FK2dWnRP81SOsCR1W8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNUZRsP56MHW6%2F0DISrcA90HM2bCFfYNon5FJJRdP%2FR51OAWLVmxXBkZVyLJmGGLw9gqkNviFPS59y3Bz4Pih8GsFbM7EmcmJp%2FRFISKocf0wOwMAGu2iGXGFe1TnYixcA%2FZ6krMd0wix9zN84soQgxqZr7T5MH7TYmMiLdDmRTa9%2BNM08IA8Y5L3lfvm8XroIlOu9w7A%2FuINXpHKP%2FY3iuIByLhUuVpTqw%2FvkOkUR%2B%2BWokGznYKVby4FbsBew272yPL%2BzPzy3kzwEai60nsRDuq0RcFBH8a%2FC%2BMijCEdg9vWaSj%2Bgq4L%2FOFqSNhdmzRqCERYQaLhgx1cYTIBoD26oZmyhMCmKwpPUR2jd8W2lVdzMOUe%2FAH%2BNAvnITCb6S7vRM3trJ0HlP2R2zp1DlbyC%2Bb4D7RaIN11RTBrAHIkqF5wC6sZkQvyfNLXU7QAGkeUKO60g9Klmal4nymj18xZByXUv5eJlIHZF7oFRwVF8RUbswHL0auAKUcZyBb%2BRt%2FPlNmgaCMn6c0bkOp9K7GD7xJbzKhleCE0%2BNPx%2BXi7t0FT3Oo%2F9Kn7uRy7rNZX57ASerNCGFXNLAs9KLbxCIeXmhwQz0aTfyroM7EmWsxm17ypb6WKQP9z3ywFcKb7EjjufIE46e%2By%2BEWzxCxMKjl4b4GOqUBRSNk56f2kyZJPCkgFa%2FhQjL96eGWQBHjSMuTxE7euC7llFz4B6Wq3k81IYh0sfNDpPdFdX8hJuMzVPkJTkhMePiL03scSYC%2BzhZ4boxnkI2MKPgO8dfKSrHmLuhlADMta6%2BlmDxFFa7NyS%2F5EIn9MM3%2BbP9UdzRiQC3MrUVAypqwcWC61aoJPZr%2FGZLgDT1acHYfE1vi7MqFWIJEquu9mehiG9%2Fz&X-Amz-Signature=27bc246e25615b860c659b277faeaf878e4c9faa297ef1ae45d1dc85ae4e32b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UBUOSR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3m%2BEmDqABEJKgAG8HedaSj6NezU85lKUaLXgRIbY0AIgXw6dYUI1FKZkzsaLHXNA6m5TP%2FK2dWnRP81SOsCR1W8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNUZRsP56MHW6%2F0DISrcA90HM2bCFfYNon5FJJRdP%2FR51OAWLVmxXBkZVyLJmGGLw9gqkNviFPS59y3Bz4Pih8GsFbM7EmcmJp%2FRFISKocf0wOwMAGu2iGXGFe1TnYixcA%2FZ6krMd0wix9zN84soQgxqZr7T5MH7TYmMiLdDmRTa9%2BNM08IA8Y5L3lfvm8XroIlOu9w7A%2FuINXpHKP%2FY3iuIByLhUuVpTqw%2FvkOkUR%2B%2BWokGznYKVby4FbsBew272yPL%2BzPzy3kzwEai60nsRDuq0RcFBH8a%2FC%2BMijCEdg9vWaSj%2Bgq4L%2FOFqSNhdmzRqCERYQaLhgx1cYTIBoD26oZmyhMCmKwpPUR2jd8W2lVdzMOUe%2FAH%2BNAvnITCb6S7vRM3trJ0HlP2R2zp1DlbyC%2Bb4D7RaIN11RTBrAHIkqF5wC6sZkQvyfNLXU7QAGkeUKO60g9Klmal4nymj18xZByXUv5eJlIHZF7oFRwVF8RUbswHL0auAKUcZyBb%2BRt%2FPlNmgaCMn6c0bkOp9K7GD7xJbzKhleCE0%2BNPx%2BXi7t0FT3Oo%2F9Kn7uRy7rNZX57ASerNCGFXNLAs9KLbxCIeXmhwQz0aTfyroM7EmWsxm17ypb6WKQP9z3ywFcKb7EjjufIE46e%2By%2BEWzxCxMKjl4b4GOqUBRSNk56f2kyZJPCkgFa%2FhQjL96eGWQBHjSMuTxE7euC7llFz4B6Wq3k81IYh0sfNDpPdFdX8hJuMzVPkJTkhMePiL03scSYC%2BzhZ4boxnkI2MKPgO8dfKSrHmLuhlADMta6%2BlmDxFFa7NyS%2F5EIn9MM3%2BbP9UdzRiQC3MrUVAypqwcWC61aoJPZr%2FGZLgDT1acHYfE1vi7MqFWIJEquu9mehiG9%2Fz&X-Amz-Signature=b649032992691a4b371b9469b59003f2cf0ca5b31efc085bd1e98992f082e3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UBUOSR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3m%2BEmDqABEJKgAG8HedaSj6NezU85lKUaLXgRIbY0AIgXw6dYUI1FKZkzsaLHXNA6m5TP%2FK2dWnRP81SOsCR1W8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNUZRsP56MHW6%2F0DISrcA90HM2bCFfYNon5FJJRdP%2FR51OAWLVmxXBkZVyLJmGGLw9gqkNviFPS59y3Bz4Pih8GsFbM7EmcmJp%2FRFISKocf0wOwMAGu2iGXGFe1TnYixcA%2FZ6krMd0wix9zN84soQgxqZr7T5MH7TYmMiLdDmRTa9%2BNM08IA8Y5L3lfvm8XroIlOu9w7A%2FuINXpHKP%2FY3iuIByLhUuVpTqw%2FvkOkUR%2B%2BWokGznYKVby4FbsBew272yPL%2BzPzy3kzwEai60nsRDuq0RcFBH8a%2FC%2BMijCEdg9vWaSj%2Bgq4L%2FOFqSNhdmzRqCERYQaLhgx1cYTIBoD26oZmyhMCmKwpPUR2jd8W2lVdzMOUe%2FAH%2BNAvnITCb6S7vRM3trJ0HlP2R2zp1DlbyC%2Bb4D7RaIN11RTBrAHIkqF5wC6sZkQvyfNLXU7QAGkeUKO60g9Klmal4nymj18xZByXUv5eJlIHZF7oFRwVF8RUbswHL0auAKUcZyBb%2BRt%2FPlNmgaCMn6c0bkOp9K7GD7xJbzKhleCE0%2BNPx%2BXi7t0FT3Oo%2F9Kn7uRy7rNZX57ASerNCGFXNLAs9KLbxCIeXmhwQz0aTfyroM7EmWsxm17ypb6WKQP9z3ywFcKb7EjjufIE46e%2By%2BEWzxCxMKjl4b4GOqUBRSNk56f2kyZJPCkgFa%2FhQjL96eGWQBHjSMuTxE7euC7llFz4B6Wq3k81IYh0sfNDpPdFdX8hJuMzVPkJTkhMePiL03scSYC%2BzhZ4boxnkI2MKPgO8dfKSrHmLuhlADMta6%2BlmDxFFa7NyS%2F5EIn9MM3%2BbP9UdzRiQC3MrUVAypqwcWC61aoJPZr%2FGZLgDT1acHYfE1vi7MqFWIJEquu9mehiG9%2Fz&X-Amz-Signature=6d2dd15df1baf553387d668f77038dc6cf86c61193abf5dd14f0a993b5f44d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635UBUOSR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE3m%2BEmDqABEJKgAG8HedaSj6NezU85lKUaLXgRIbY0AIgXw6dYUI1FKZkzsaLHXNA6m5TP%2FK2dWnRP81SOsCR1W8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNUZRsP56MHW6%2F0DISrcA90HM2bCFfYNon5FJJRdP%2FR51OAWLVmxXBkZVyLJmGGLw9gqkNviFPS59y3Bz4Pih8GsFbM7EmcmJp%2FRFISKocf0wOwMAGu2iGXGFe1TnYixcA%2FZ6krMd0wix9zN84soQgxqZr7T5MH7TYmMiLdDmRTa9%2BNM08IA8Y5L3lfvm8XroIlOu9w7A%2FuINXpHKP%2FY3iuIByLhUuVpTqw%2FvkOkUR%2B%2BWokGznYKVby4FbsBew272yPL%2BzPzy3kzwEai60nsRDuq0RcFBH8a%2FC%2BMijCEdg9vWaSj%2Bgq4L%2FOFqSNhdmzRqCERYQaLhgx1cYTIBoD26oZmyhMCmKwpPUR2jd8W2lVdzMOUe%2FAH%2BNAvnITCb6S7vRM3trJ0HlP2R2zp1DlbyC%2Bb4D7RaIN11RTBrAHIkqF5wC6sZkQvyfNLXU7QAGkeUKO60g9Klmal4nymj18xZByXUv5eJlIHZF7oFRwVF8RUbswHL0auAKUcZyBb%2BRt%2FPlNmgaCMn6c0bkOp9K7GD7xJbzKhleCE0%2BNPx%2BXi7t0FT3Oo%2F9Kn7uRy7rNZX57ASerNCGFXNLAs9KLbxCIeXmhwQz0aTfyroM7EmWsxm17ypb6WKQP9z3ywFcKb7EjjufIE46e%2By%2BEWzxCxMKjl4b4GOqUBRSNk56f2kyZJPCkgFa%2FhQjL96eGWQBHjSMuTxE7euC7llFz4B6Wq3k81IYh0sfNDpPdFdX8hJuMzVPkJTkhMePiL03scSYC%2BzhZ4boxnkI2MKPgO8dfKSrHmLuhlADMta6%2BlmDxFFa7NyS%2F5EIn9MM3%2BbP9UdzRiQC3MrUVAypqwcWC61aoJPZr%2FGZLgDT1acHYfE1vi7MqFWIJEquu9mehiG9%2Fz&X-Amz-Signature=0edfb4a1fa9415c92b3e6fbd06aec5c1f02d86b9a475197e914aa9b1a6e796d6&X-Amz-SignedHeaders=host&x-id=GetObject)
