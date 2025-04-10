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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWGCIG4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF5WY95LoDcMAlWILQw4t%2BD%2BWE0RzlZi2bFHRECi1uQvAiAlVOLxUPK5deDCrxceac6ZFgNohn0PjLbuPoA0Kq8Z5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C9cy3k4K8CSVVO2KtwD1AkOC7ZYUq2crgA05rz%2FyrIdULrptUkdgcVGhEZmfc4CRdQy%2BKFSEG%2FNdit2Y9GeoqelToqGPd37a50kfp%2BcnceJBUaY%2FsOVj108weazh%2Bo2jsKvIYyqoZKDFy0bFd%2F2GN99uOAsXiZkeq8Mvk4DJfaO%2B1mG9jgQCkUPVWAZZiTAehmrVmCcE80p3666ryPxiIeiKnuVWs4iMcPcRFRAztKU%2B4ylUeUkK98ZVQ3KLtxdmL4PligqvyqDTAUUkf%2FrI6KciQlQ69YvUTmrVGoLqyXO6dDAUrfUKDaH5OyWHJOPGvNe5Dw6jLlzJ8rYttzj2lXfJPHKAweA5kK4jrQg%2BDrGaSw5NrAphTfGFEQh%2FLL9ty5a1awNWLezpFn27uKdpsdsa1ffeve5CeS4t8y7DRMSTNZCPx6ckkiuVaDr26X5RKJRbq%2FsMOT75vrk3PWplN2isTUqRzQ9nTVEXLlAsjKLepEjuNVncCqflc0RfUKBqBBPwHFMyfPhQDQ3IBOFo0kLrElBmTelEytobj7Aa%2FH0kWRS%2BGrNsLnI5xpP8eqHYAGfvLLso7tDGW7Hk%2FUhb6N6i9GPBlPYwemtUKVcqvQTeJ%2F%2FxvOLSPurFUxrZ4SfHldR8DhbNrLxRHwwxbHgvwY6pgH%2BNnXxIiqmIdqPfR7k8Cof2zQ3%2BNtF%2BTxtAfs3OqHTRSdJYFSMJemBTX3sgmvc0JJMGqVS4FvoVTELS3pdzKTsrm0YHTCEeyaJGoH%2Bo585h8YFHfZLH8yOUcr%2B8Kdu%2F4m6B70O02WRmr%2B%2F%2BIrIDN%2F18D8EbzhChJGp9DiwLYSMzfxbZlKVqY8hsrS7v4j2JreabBJ2Dk%2BgjUGyvFhela%2FxXXBEv2uh&X-Amz-Signature=e83e5794163ac7c906b06240a2396c29b13fc20423bcc32936916ffd449a36b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWGCIG4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF5WY95LoDcMAlWILQw4t%2BD%2BWE0RzlZi2bFHRECi1uQvAiAlVOLxUPK5deDCrxceac6ZFgNohn0PjLbuPoA0Kq8Z5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C9cy3k4K8CSVVO2KtwD1AkOC7ZYUq2crgA05rz%2FyrIdULrptUkdgcVGhEZmfc4CRdQy%2BKFSEG%2FNdit2Y9GeoqelToqGPd37a50kfp%2BcnceJBUaY%2FsOVj108weazh%2Bo2jsKvIYyqoZKDFy0bFd%2F2GN99uOAsXiZkeq8Mvk4DJfaO%2B1mG9jgQCkUPVWAZZiTAehmrVmCcE80p3666ryPxiIeiKnuVWs4iMcPcRFRAztKU%2B4ylUeUkK98ZVQ3KLtxdmL4PligqvyqDTAUUkf%2FrI6KciQlQ69YvUTmrVGoLqyXO6dDAUrfUKDaH5OyWHJOPGvNe5Dw6jLlzJ8rYttzj2lXfJPHKAweA5kK4jrQg%2BDrGaSw5NrAphTfGFEQh%2FLL9ty5a1awNWLezpFn27uKdpsdsa1ffeve5CeS4t8y7DRMSTNZCPx6ckkiuVaDr26X5RKJRbq%2FsMOT75vrk3PWplN2isTUqRzQ9nTVEXLlAsjKLepEjuNVncCqflc0RfUKBqBBPwHFMyfPhQDQ3IBOFo0kLrElBmTelEytobj7Aa%2FH0kWRS%2BGrNsLnI5xpP8eqHYAGfvLLso7tDGW7Hk%2FUhb6N6i9GPBlPYwemtUKVcqvQTeJ%2F%2FxvOLSPurFUxrZ4SfHldR8DhbNrLxRHwwxbHgvwY6pgH%2BNnXxIiqmIdqPfR7k8Cof2zQ3%2BNtF%2BTxtAfs3OqHTRSdJYFSMJemBTX3sgmvc0JJMGqVS4FvoVTELS3pdzKTsrm0YHTCEeyaJGoH%2Bo585h8YFHfZLH8yOUcr%2B8Kdu%2F4m6B70O02WRmr%2B%2F%2BIrIDN%2F18D8EbzhChJGp9DiwLYSMzfxbZlKVqY8hsrS7v4j2JreabBJ2Dk%2BgjUGyvFhela%2FxXXBEv2uh&X-Amz-Signature=3d9938d37ee3f257b134c6453735f39c28b30f9467e982f9879e2b711239bf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWGCIG4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF5WY95LoDcMAlWILQw4t%2BD%2BWE0RzlZi2bFHRECi1uQvAiAlVOLxUPK5deDCrxceac6ZFgNohn0PjLbuPoA0Kq8Z5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C9cy3k4K8CSVVO2KtwD1AkOC7ZYUq2crgA05rz%2FyrIdULrptUkdgcVGhEZmfc4CRdQy%2BKFSEG%2FNdit2Y9GeoqelToqGPd37a50kfp%2BcnceJBUaY%2FsOVj108weazh%2Bo2jsKvIYyqoZKDFy0bFd%2F2GN99uOAsXiZkeq8Mvk4DJfaO%2B1mG9jgQCkUPVWAZZiTAehmrVmCcE80p3666ryPxiIeiKnuVWs4iMcPcRFRAztKU%2B4ylUeUkK98ZVQ3KLtxdmL4PligqvyqDTAUUkf%2FrI6KciQlQ69YvUTmrVGoLqyXO6dDAUrfUKDaH5OyWHJOPGvNe5Dw6jLlzJ8rYttzj2lXfJPHKAweA5kK4jrQg%2BDrGaSw5NrAphTfGFEQh%2FLL9ty5a1awNWLezpFn27uKdpsdsa1ffeve5CeS4t8y7DRMSTNZCPx6ckkiuVaDr26X5RKJRbq%2FsMOT75vrk3PWplN2isTUqRzQ9nTVEXLlAsjKLepEjuNVncCqflc0RfUKBqBBPwHFMyfPhQDQ3IBOFo0kLrElBmTelEytobj7Aa%2FH0kWRS%2BGrNsLnI5xpP8eqHYAGfvLLso7tDGW7Hk%2FUhb6N6i9GPBlPYwemtUKVcqvQTeJ%2F%2FxvOLSPurFUxrZ4SfHldR8DhbNrLxRHwwxbHgvwY6pgH%2BNnXxIiqmIdqPfR7k8Cof2zQ3%2BNtF%2BTxtAfs3OqHTRSdJYFSMJemBTX3sgmvc0JJMGqVS4FvoVTELS3pdzKTsrm0YHTCEeyaJGoH%2Bo585h8YFHfZLH8yOUcr%2B8Kdu%2F4m6B70O02WRmr%2B%2F%2BIrIDN%2F18D8EbzhChJGp9DiwLYSMzfxbZlKVqY8hsrS7v4j2JreabBJ2Dk%2BgjUGyvFhela%2FxXXBEv2uh&X-Amz-Signature=c48c89c9faf688183d222447b3e15e48d945945483123082b55678732d0eda8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWGCIG4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF5WY95LoDcMAlWILQw4t%2BD%2BWE0RzlZi2bFHRECi1uQvAiAlVOLxUPK5deDCrxceac6ZFgNohn0PjLbuPoA0Kq8Z5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C9cy3k4K8CSVVO2KtwD1AkOC7ZYUq2crgA05rz%2FyrIdULrptUkdgcVGhEZmfc4CRdQy%2BKFSEG%2FNdit2Y9GeoqelToqGPd37a50kfp%2BcnceJBUaY%2FsOVj108weazh%2Bo2jsKvIYyqoZKDFy0bFd%2F2GN99uOAsXiZkeq8Mvk4DJfaO%2B1mG9jgQCkUPVWAZZiTAehmrVmCcE80p3666ryPxiIeiKnuVWs4iMcPcRFRAztKU%2B4ylUeUkK98ZVQ3KLtxdmL4PligqvyqDTAUUkf%2FrI6KciQlQ69YvUTmrVGoLqyXO6dDAUrfUKDaH5OyWHJOPGvNe5Dw6jLlzJ8rYttzj2lXfJPHKAweA5kK4jrQg%2BDrGaSw5NrAphTfGFEQh%2FLL9ty5a1awNWLezpFn27uKdpsdsa1ffeve5CeS4t8y7DRMSTNZCPx6ckkiuVaDr26X5RKJRbq%2FsMOT75vrk3PWplN2isTUqRzQ9nTVEXLlAsjKLepEjuNVncCqflc0RfUKBqBBPwHFMyfPhQDQ3IBOFo0kLrElBmTelEytobj7Aa%2FH0kWRS%2BGrNsLnI5xpP8eqHYAGfvLLso7tDGW7Hk%2FUhb6N6i9GPBlPYwemtUKVcqvQTeJ%2F%2FxvOLSPurFUxrZ4SfHldR8DhbNrLxRHwwxbHgvwY6pgH%2BNnXxIiqmIdqPfR7k8Cof2zQ3%2BNtF%2BTxtAfs3OqHTRSdJYFSMJemBTX3sgmvc0JJMGqVS4FvoVTELS3pdzKTsrm0YHTCEeyaJGoH%2Bo585h8YFHfZLH8yOUcr%2B8Kdu%2F4m6B70O02WRmr%2B%2F%2BIrIDN%2F18D8EbzhChJGp9DiwLYSMzfxbZlKVqY8hsrS7v4j2JreabBJ2Dk%2BgjUGyvFhela%2FxXXBEv2uh&X-Amz-Signature=9e9dba3dddb3320d81ccd86591b458cf27529cc6ca6f5f347fbf17525918b0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWGCIG4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF5WY95LoDcMAlWILQw4t%2BD%2BWE0RzlZi2bFHRECi1uQvAiAlVOLxUPK5deDCrxceac6ZFgNohn0PjLbuPoA0Kq8Z5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C9cy3k4K8CSVVO2KtwD1AkOC7ZYUq2crgA05rz%2FyrIdULrptUkdgcVGhEZmfc4CRdQy%2BKFSEG%2FNdit2Y9GeoqelToqGPd37a50kfp%2BcnceJBUaY%2FsOVj108weazh%2Bo2jsKvIYyqoZKDFy0bFd%2F2GN99uOAsXiZkeq8Mvk4DJfaO%2B1mG9jgQCkUPVWAZZiTAehmrVmCcE80p3666ryPxiIeiKnuVWs4iMcPcRFRAztKU%2B4ylUeUkK98ZVQ3KLtxdmL4PligqvyqDTAUUkf%2FrI6KciQlQ69YvUTmrVGoLqyXO6dDAUrfUKDaH5OyWHJOPGvNe5Dw6jLlzJ8rYttzj2lXfJPHKAweA5kK4jrQg%2BDrGaSw5NrAphTfGFEQh%2FLL9ty5a1awNWLezpFn27uKdpsdsa1ffeve5CeS4t8y7DRMSTNZCPx6ckkiuVaDr26X5RKJRbq%2FsMOT75vrk3PWplN2isTUqRzQ9nTVEXLlAsjKLepEjuNVncCqflc0RfUKBqBBPwHFMyfPhQDQ3IBOFo0kLrElBmTelEytobj7Aa%2FH0kWRS%2BGrNsLnI5xpP8eqHYAGfvLLso7tDGW7Hk%2FUhb6N6i9GPBlPYwemtUKVcqvQTeJ%2F%2FxvOLSPurFUxrZ4SfHldR8DhbNrLxRHwwxbHgvwY6pgH%2BNnXxIiqmIdqPfR7k8Cof2zQ3%2BNtF%2BTxtAfs3OqHTRSdJYFSMJemBTX3sgmvc0JJMGqVS4FvoVTELS3pdzKTsrm0YHTCEeyaJGoH%2Bo585h8YFHfZLH8yOUcr%2B8Kdu%2F4m6B70O02WRmr%2B%2F%2BIrIDN%2F18D8EbzhChJGp9DiwLYSMzfxbZlKVqY8hsrS7v4j2JreabBJ2Dk%2BgjUGyvFhela%2FxXXBEv2uh&X-Amz-Signature=f387cb7292c399589cb436325dead035d85da9a3164c6c026901778291b83be0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWGCIG4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIF5WY95LoDcMAlWILQw4t%2BD%2BWE0RzlZi2bFHRECi1uQvAiAlVOLxUPK5deDCrxceac6ZFgNohn0PjLbuPoA0Kq8Z5CqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C9cy3k4K8CSVVO2KtwD1AkOC7ZYUq2crgA05rz%2FyrIdULrptUkdgcVGhEZmfc4CRdQy%2BKFSEG%2FNdit2Y9GeoqelToqGPd37a50kfp%2BcnceJBUaY%2FsOVj108weazh%2Bo2jsKvIYyqoZKDFy0bFd%2F2GN99uOAsXiZkeq8Mvk4DJfaO%2B1mG9jgQCkUPVWAZZiTAehmrVmCcE80p3666ryPxiIeiKnuVWs4iMcPcRFRAztKU%2B4ylUeUkK98ZVQ3KLtxdmL4PligqvyqDTAUUkf%2FrI6KciQlQ69YvUTmrVGoLqyXO6dDAUrfUKDaH5OyWHJOPGvNe5Dw6jLlzJ8rYttzj2lXfJPHKAweA5kK4jrQg%2BDrGaSw5NrAphTfGFEQh%2FLL9ty5a1awNWLezpFn27uKdpsdsa1ffeve5CeS4t8y7DRMSTNZCPx6ckkiuVaDr26X5RKJRbq%2FsMOT75vrk3PWplN2isTUqRzQ9nTVEXLlAsjKLepEjuNVncCqflc0RfUKBqBBPwHFMyfPhQDQ3IBOFo0kLrElBmTelEytobj7Aa%2FH0kWRS%2BGrNsLnI5xpP8eqHYAGfvLLso7tDGW7Hk%2FUhb6N6i9GPBlPYwemtUKVcqvQTeJ%2F%2FxvOLSPurFUxrZ4SfHldR8DhbNrLxRHwwxbHgvwY6pgH%2BNnXxIiqmIdqPfR7k8Cof2zQ3%2BNtF%2BTxtAfs3OqHTRSdJYFSMJemBTX3sgmvc0JJMGqVS4FvoVTELS3pdzKTsrm0YHTCEeyaJGoH%2Bo585h8YFHfZLH8yOUcr%2B8Kdu%2F4m6B70O02WRmr%2B%2F%2BIrIDN%2F18D8EbzhChJGp9DiwLYSMzfxbZlKVqY8hsrS7v4j2JreabBJ2Dk%2BgjUGyvFhela%2FxXXBEv2uh&X-Amz-Signature=464adb591cfd1fffb15a66a9292d76abbde44159a227186f9a0dec78ec55f02f&X-Amz-SignedHeaders=host&x-id=GetObject)
