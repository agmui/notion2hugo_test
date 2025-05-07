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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGNT2H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9OGKWS6i4W2lsBmxs9sxDH86Y0GgJfco5Gv%2FgXWW4JAiAoPHGZIrXTqhEWKKdfvgeiUnyfcD%2FS1vUlgMJSCWaXoCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLEm9R9DAk4f17ELoKtwDHB9TJHwn4ZbOjFftkKE6oDhHGXtfVjK4EJM0i7jNGpG0HaFFUhj8hs0hFkl7YM04gX31AKVE5duy78PeYHeK7%2Fq2dHjemVuAWFj2eYLnFk6eSfKEynbUflukrgXoJ%2Fgu7QJ2Ow9qEBEX3HjOBHWfc0QKANL8JtaIw%2FTVsfHfL878Vm6d2PrkFNbcD6mD50T0YiKBSXVOuH6QYN2zEdbEe%2BFFEEpgSeM%2BBLP1zPe9z37FwffFw2slMhFCS1OZaefANLCFL9ybhSZPsyJEMz5XwTmnbk4YtvGArAycvZAeVEMu8vYjh0BHR%2FmL0koUHxlr2zB29zhmvL1D8MIJN630mdQHlIv5UWWPMzNuprCIIan7xItl4%2FS1AuiJxboEZaQH5%2BqGbOjC%2Bbq8fsGQj1ZEVKVSwN%2BjmTao7RXdbObVbnapWCJpfzW2CRHxblVHbjdYh9oT3pgASvxiFlniYpLH0547i%2FrytMBWeUnrfI7l1lcYMjp1LZMEu12m11aZmS5gYfVp2TcoRIy%2FcDcSvC4P%2Fbo1SNiq1sWrLUARvJiESXQvrZmT7Ozf4HQxbQkQOKSlDZ5MMSygqWbn%2FFfFtQH4zuxoOWohlapbtfk0XOCojbX62r54%2BNlufOw8mNAwgJLrwAY6pgHLTvPpFZOkmp7%2BvKoY%2F%2BLl%2BY8va00TOHquRYNTCfsfwNKriJWfY1Z01uJm737nwkuSdDplX1bUDj6wvjNYFLFT2c5b0Vq%2F0%2FXqmB%2FBFR8UZKNa%2BY%2BkhPtJEZhVFGtgC9nftlSkB2fnchiqrA3PAMrA8KzrUeDnTo%2F3bC3llO0i8xHf7JpRhc623FR%2BtuE8qHLc1kKH8vI7p19q1xmcmFsb8TIOT7Pw&X-Amz-Signature=69fbb1a73a46b4a5117a61efa29d9a97e67a193ba0a6cdb1288a66c35133f0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGNT2H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9OGKWS6i4W2lsBmxs9sxDH86Y0GgJfco5Gv%2FgXWW4JAiAoPHGZIrXTqhEWKKdfvgeiUnyfcD%2FS1vUlgMJSCWaXoCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLEm9R9DAk4f17ELoKtwDHB9TJHwn4ZbOjFftkKE6oDhHGXtfVjK4EJM0i7jNGpG0HaFFUhj8hs0hFkl7YM04gX31AKVE5duy78PeYHeK7%2Fq2dHjemVuAWFj2eYLnFk6eSfKEynbUflukrgXoJ%2Fgu7QJ2Ow9qEBEX3HjOBHWfc0QKANL8JtaIw%2FTVsfHfL878Vm6d2PrkFNbcD6mD50T0YiKBSXVOuH6QYN2zEdbEe%2BFFEEpgSeM%2BBLP1zPe9z37FwffFw2slMhFCS1OZaefANLCFL9ybhSZPsyJEMz5XwTmnbk4YtvGArAycvZAeVEMu8vYjh0BHR%2FmL0koUHxlr2zB29zhmvL1D8MIJN630mdQHlIv5UWWPMzNuprCIIan7xItl4%2FS1AuiJxboEZaQH5%2BqGbOjC%2Bbq8fsGQj1ZEVKVSwN%2BjmTao7RXdbObVbnapWCJpfzW2CRHxblVHbjdYh9oT3pgASvxiFlniYpLH0547i%2FrytMBWeUnrfI7l1lcYMjp1LZMEu12m11aZmS5gYfVp2TcoRIy%2FcDcSvC4P%2Fbo1SNiq1sWrLUARvJiESXQvrZmT7Ozf4HQxbQkQOKSlDZ5MMSygqWbn%2FFfFtQH4zuxoOWohlapbtfk0XOCojbX62r54%2BNlufOw8mNAwgJLrwAY6pgHLTvPpFZOkmp7%2BvKoY%2F%2BLl%2BY8va00TOHquRYNTCfsfwNKriJWfY1Z01uJm737nwkuSdDplX1bUDj6wvjNYFLFT2c5b0Vq%2F0%2FXqmB%2FBFR8UZKNa%2BY%2BkhPtJEZhVFGtgC9nftlSkB2fnchiqrA3PAMrA8KzrUeDnTo%2F3bC3llO0i8xHf7JpRhc623FR%2BtuE8qHLc1kKH8vI7p19q1xmcmFsb8TIOT7Pw&X-Amz-Signature=3b111666e2757dba70b954f12bcf78bc4044592224a49c3f1ae479b1420e2ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGNT2H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9OGKWS6i4W2lsBmxs9sxDH86Y0GgJfco5Gv%2FgXWW4JAiAoPHGZIrXTqhEWKKdfvgeiUnyfcD%2FS1vUlgMJSCWaXoCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLEm9R9DAk4f17ELoKtwDHB9TJHwn4ZbOjFftkKE6oDhHGXtfVjK4EJM0i7jNGpG0HaFFUhj8hs0hFkl7YM04gX31AKVE5duy78PeYHeK7%2Fq2dHjemVuAWFj2eYLnFk6eSfKEynbUflukrgXoJ%2Fgu7QJ2Ow9qEBEX3HjOBHWfc0QKANL8JtaIw%2FTVsfHfL878Vm6d2PrkFNbcD6mD50T0YiKBSXVOuH6QYN2zEdbEe%2BFFEEpgSeM%2BBLP1zPe9z37FwffFw2slMhFCS1OZaefANLCFL9ybhSZPsyJEMz5XwTmnbk4YtvGArAycvZAeVEMu8vYjh0BHR%2FmL0koUHxlr2zB29zhmvL1D8MIJN630mdQHlIv5UWWPMzNuprCIIan7xItl4%2FS1AuiJxboEZaQH5%2BqGbOjC%2Bbq8fsGQj1ZEVKVSwN%2BjmTao7RXdbObVbnapWCJpfzW2CRHxblVHbjdYh9oT3pgASvxiFlniYpLH0547i%2FrytMBWeUnrfI7l1lcYMjp1LZMEu12m11aZmS5gYfVp2TcoRIy%2FcDcSvC4P%2Fbo1SNiq1sWrLUARvJiESXQvrZmT7Ozf4HQxbQkQOKSlDZ5MMSygqWbn%2FFfFtQH4zuxoOWohlapbtfk0XOCojbX62r54%2BNlufOw8mNAwgJLrwAY6pgHLTvPpFZOkmp7%2BvKoY%2F%2BLl%2BY8va00TOHquRYNTCfsfwNKriJWfY1Z01uJm737nwkuSdDplX1bUDj6wvjNYFLFT2c5b0Vq%2F0%2FXqmB%2FBFR8UZKNa%2BY%2BkhPtJEZhVFGtgC9nftlSkB2fnchiqrA3PAMrA8KzrUeDnTo%2F3bC3llO0i8xHf7JpRhc623FR%2BtuE8qHLc1kKH8vI7p19q1xmcmFsb8TIOT7Pw&X-Amz-Signature=995206460a38b2b6eacf5fec343bfbb7dc05f64456936d9751c7ea3b9b891ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGNT2H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9OGKWS6i4W2lsBmxs9sxDH86Y0GgJfco5Gv%2FgXWW4JAiAoPHGZIrXTqhEWKKdfvgeiUnyfcD%2FS1vUlgMJSCWaXoCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLEm9R9DAk4f17ELoKtwDHB9TJHwn4ZbOjFftkKE6oDhHGXtfVjK4EJM0i7jNGpG0HaFFUhj8hs0hFkl7YM04gX31AKVE5duy78PeYHeK7%2Fq2dHjemVuAWFj2eYLnFk6eSfKEynbUflukrgXoJ%2Fgu7QJ2Ow9qEBEX3HjOBHWfc0QKANL8JtaIw%2FTVsfHfL878Vm6d2PrkFNbcD6mD50T0YiKBSXVOuH6QYN2zEdbEe%2BFFEEpgSeM%2BBLP1zPe9z37FwffFw2slMhFCS1OZaefANLCFL9ybhSZPsyJEMz5XwTmnbk4YtvGArAycvZAeVEMu8vYjh0BHR%2FmL0koUHxlr2zB29zhmvL1D8MIJN630mdQHlIv5UWWPMzNuprCIIan7xItl4%2FS1AuiJxboEZaQH5%2BqGbOjC%2Bbq8fsGQj1ZEVKVSwN%2BjmTao7RXdbObVbnapWCJpfzW2CRHxblVHbjdYh9oT3pgASvxiFlniYpLH0547i%2FrytMBWeUnrfI7l1lcYMjp1LZMEu12m11aZmS5gYfVp2TcoRIy%2FcDcSvC4P%2Fbo1SNiq1sWrLUARvJiESXQvrZmT7Ozf4HQxbQkQOKSlDZ5MMSygqWbn%2FFfFtQH4zuxoOWohlapbtfk0XOCojbX62r54%2BNlufOw8mNAwgJLrwAY6pgHLTvPpFZOkmp7%2BvKoY%2F%2BLl%2BY8va00TOHquRYNTCfsfwNKriJWfY1Z01uJm737nwkuSdDplX1bUDj6wvjNYFLFT2c5b0Vq%2F0%2FXqmB%2FBFR8UZKNa%2BY%2BkhPtJEZhVFGtgC9nftlSkB2fnchiqrA3PAMrA8KzrUeDnTo%2F3bC3llO0i8xHf7JpRhc623FR%2BtuE8qHLc1kKH8vI7p19q1xmcmFsb8TIOT7Pw&X-Amz-Signature=b6c2511c8535887ac4cd3067d3f6f34868cba8226c79d9f76b90b25db0e3b707&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGNT2H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9OGKWS6i4W2lsBmxs9sxDH86Y0GgJfco5Gv%2FgXWW4JAiAoPHGZIrXTqhEWKKdfvgeiUnyfcD%2FS1vUlgMJSCWaXoCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLEm9R9DAk4f17ELoKtwDHB9TJHwn4ZbOjFftkKE6oDhHGXtfVjK4EJM0i7jNGpG0HaFFUhj8hs0hFkl7YM04gX31AKVE5duy78PeYHeK7%2Fq2dHjemVuAWFj2eYLnFk6eSfKEynbUflukrgXoJ%2Fgu7QJ2Ow9qEBEX3HjOBHWfc0QKANL8JtaIw%2FTVsfHfL878Vm6d2PrkFNbcD6mD50T0YiKBSXVOuH6QYN2zEdbEe%2BFFEEpgSeM%2BBLP1zPe9z37FwffFw2slMhFCS1OZaefANLCFL9ybhSZPsyJEMz5XwTmnbk4YtvGArAycvZAeVEMu8vYjh0BHR%2FmL0koUHxlr2zB29zhmvL1D8MIJN630mdQHlIv5UWWPMzNuprCIIan7xItl4%2FS1AuiJxboEZaQH5%2BqGbOjC%2Bbq8fsGQj1ZEVKVSwN%2BjmTao7RXdbObVbnapWCJpfzW2CRHxblVHbjdYh9oT3pgASvxiFlniYpLH0547i%2FrytMBWeUnrfI7l1lcYMjp1LZMEu12m11aZmS5gYfVp2TcoRIy%2FcDcSvC4P%2Fbo1SNiq1sWrLUARvJiESXQvrZmT7Ozf4HQxbQkQOKSlDZ5MMSygqWbn%2FFfFtQH4zuxoOWohlapbtfk0XOCojbX62r54%2BNlufOw8mNAwgJLrwAY6pgHLTvPpFZOkmp7%2BvKoY%2F%2BLl%2BY8va00TOHquRYNTCfsfwNKriJWfY1Z01uJm737nwkuSdDplX1bUDj6wvjNYFLFT2c5b0Vq%2F0%2FXqmB%2FBFR8UZKNa%2BY%2BkhPtJEZhVFGtgC9nftlSkB2fnchiqrA3PAMrA8KzrUeDnTo%2F3bC3llO0i8xHf7JpRhc623FR%2BtuE8qHLc1kKH8vI7p19q1xmcmFsb8TIOT7Pw&X-Amz-Signature=d01ba71bb785d394220fc7457efd13d743f5deccdcbca9b914a31dc511f6ce86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSGNT2H%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9OGKWS6i4W2lsBmxs9sxDH86Y0GgJfco5Gv%2FgXWW4JAiAoPHGZIrXTqhEWKKdfvgeiUnyfcD%2FS1vUlgMJSCWaXoCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLEm9R9DAk4f17ELoKtwDHB9TJHwn4ZbOjFftkKE6oDhHGXtfVjK4EJM0i7jNGpG0HaFFUhj8hs0hFkl7YM04gX31AKVE5duy78PeYHeK7%2Fq2dHjemVuAWFj2eYLnFk6eSfKEynbUflukrgXoJ%2Fgu7QJ2Ow9qEBEX3HjOBHWfc0QKANL8JtaIw%2FTVsfHfL878Vm6d2PrkFNbcD6mD50T0YiKBSXVOuH6QYN2zEdbEe%2BFFEEpgSeM%2BBLP1zPe9z37FwffFw2slMhFCS1OZaefANLCFL9ybhSZPsyJEMz5XwTmnbk4YtvGArAycvZAeVEMu8vYjh0BHR%2FmL0koUHxlr2zB29zhmvL1D8MIJN630mdQHlIv5UWWPMzNuprCIIan7xItl4%2FS1AuiJxboEZaQH5%2BqGbOjC%2Bbq8fsGQj1ZEVKVSwN%2BjmTao7RXdbObVbnapWCJpfzW2CRHxblVHbjdYh9oT3pgASvxiFlniYpLH0547i%2FrytMBWeUnrfI7l1lcYMjp1LZMEu12m11aZmS5gYfVp2TcoRIy%2FcDcSvC4P%2Fbo1SNiq1sWrLUARvJiESXQvrZmT7Ozf4HQxbQkQOKSlDZ5MMSygqWbn%2FFfFtQH4zuxoOWohlapbtfk0XOCojbX62r54%2BNlufOw8mNAwgJLrwAY6pgHLTvPpFZOkmp7%2BvKoY%2F%2BLl%2BY8va00TOHquRYNTCfsfwNKriJWfY1Z01uJm737nwkuSdDplX1bUDj6wvjNYFLFT2c5b0Vq%2F0%2FXqmB%2FBFR8UZKNa%2BY%2BkhPtJEZhVFGtgC9nftlSkB2fnchiqrA3PAMrA8KzrUeDnTo%2F3bC3llO0i8xHf7JpRhc623FR%2BtuE8qHLc1kKH8vI7p19q1xmcmFsb8TIOT7Pw&X-Amz-Signature=ced5376bfe6fd0b627a359e0e8c0bc01f26c5068a16347265b4775c5e2dbb1f0&X-Amz-SignedHeaders=host&x-id=GetObject)
