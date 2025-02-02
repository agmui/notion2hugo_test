---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHOAXAQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiVsO%2FGGY1lTR3iO9WXV352rP2MlLrcbHZyHbpjDTg9QIhAOmyXFGsn9z1GFQTNM2doqOnfN5lj3r8i9FpT3Z8xPzSKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBxesSc2H9EIH%2Fdg8q3AOE0%2F4tPPkCaqWSIY6X7ZnRmsv8NWEX3zaj0csEZ%2FH6EgOATcuFis2ouHGUwtcrOFavP6YK608pj%2FknjeolU%2BO9vMeQfhaRC4i7f66GUKMM67Cta17UUakirk69D3bFmBmQGXyAmY1gXKyRejd9LT2uJ%2FHih%2FWLZ5VuL%2B8sd4wpp0eKCme2Dld9M%2B4y0MhPZtY7TT23OfYEfD84dfHNyAb9DJDjI%2F2%2F2QOZEsnnGoqQLI3FnaIxVzwXfg4pAN3JCA8u73luNxCiagIwQeeXKb731FSM8vI4y%2F4RFwa8Qu8T14dEHANwcDO%2B2OFeJHC24NuDE9%2BT6CtJ%2FGKyJBiiuuJ30C4U08RV4plgga5iqE3KPIza6epkgUZonpZQIyBpfMl4sS49K6t8apwM4bRgZMRSFeTbQc2O5ElmA4io8svWgms6glQh7QMnsDuezlaHWjVikIzXyP%2FNRIwAdRo1XYbqaPtDU6GHJCtYWWIwUYHN%2FGbNp9Q739uMdp0FyWKBuWtP8zUuqWQGGS%2FseGY1I2Vows4d3Hw81bDMLcBjMfGH5G0On3%2BDkHhKRxdl3839Qm26%2FpkF6qH2W7kHJRmAMCPHYn0mtJM7WKiD1G5JXOlDHG7%2FJiXJUyA7pdJoGzCSvv28BjqkARlBKRjeTc4VvDNEYlSZ1vk2rxqQIOIgAirVtkfNkMnJm8WCUwjL3jURdT7PbtL3bigZpA%2FH7%2BksVGflFqFIxmOuUAvzOUzliP42S%2FKgbVMc2NBSm7BPEObRp9g%2FHRd9yw%2BcrPBgSRHcOMDO5G%2Bidi189KwhIX%2B0vcf8Ipuyeroqk%2BqrN6NDEoFq4iOmZpm%2F8fjS0kSPhQCTjz3TOPofeAVqr%2FUU&X-Amz-Signature=5e92664c879307b791623b091c9b812b516b6333ee4218380340d1969b0d7b55&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHOAXAQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiVsO%2FGGY1lTR3iO9WXV352rP2MlLrcbHZyHbpjDTg9QIhAOmyXFGsn9z1GFQTNM2doqOnfN5lj3r8i9FpT3Z8xPzSKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBxesSc2H9EIH%2Fdg8q3AOE0%2F4tPPkCaqWSIY6X7ZnRmsv8NWEX3zaj0csEZ%2FH6EgOATcuFis2ouHGUwtcrOFavP6YK608pj%2FknjeolU%2BO9vMeQfhaRC4i7f66GUKMM67Cta17UUakirk69D3bFmBmQGXyAmY1gXKyRejd9LT2uJ%2FHih%2FWLZ5VuL%2B8sd4wpp0eKCme2Dld9M%2B4y0MhPZtY7TT23OfYEfD84dfHNyAb9DJDjI%2F2%2F2QOZEsnnGoqQLI3FnaIxVzwXfg4pAN3JCA8u73luNxCiagIwQeeXKb731FSM8vI4y%2F4RFwa8Qu8T14dEHANwcDO%2B2OFeJHC24NuDE9%2BT6CtJ%2FGKyJBiiuuJ30C4U08RV4plgga5iqE3KPIza6epkgUZonpZQIyBpfMl4sS49K6t8apwM4bRgZMRSFeTbQc2O5ElmA4io8svWgms6glQh7QMnsDuezlaHWjVikIzXyP%2FNRIwAdRo1XYbqaPtDU6GHJCtYWWIwUYHN%2FGbNp9Q739uMdp0FyWKBuWtP8zUuqWQGGS%2FseGY1I2Vows4d3Hw81bDMLcBjMfGH5G0On3%2BDkHhKRxdl3839Qm26%2FpkF6qH2W7kHJRmAMCPHYn0mtJM7WKiD1G5JXOlDHG7%2FJiXJUyA7pdJoGzCSvv28BjqkARlBKRjeTc4VvDNEYlSZ1vk2rxqQIOIgAirVtkfNkMnJm8WCUwjL3jURdT7PbtL3bigZpA%2FH7%2BksVGflFqFIxmOuUAvzOUzliP42S%2FKgbVMc2NBSm7BPEObRp9g%2FHRd9yw%2BcrPBgSRHcOMDO5G%2Bidi189KwhIX%2B0vcf8Ipuyeroqk%2BqrN6NDEoFq4iOmZpm%2F8fjS0kSPhQCTjz3TOPofeAVqr%2FUU&X-Amz-Signature=d36be87191bf50af9097798c72d8154b3b13c403a016afae604da48ba1dee663&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHOAXAQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiVsO%2FGGY1lTR3iO9WXV352rP2MlLrcbHZyHbpjDTg9QIhAOmyXFGsn9z1GFQTNM2doqOnfN5lj3r8i9FpT3Z8xPzSKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBxesSc2H9EIH%2Fdg8q3AOE0%2F4tPPkCaqWSIY6X7ZnRmsv8NWEX3zaj0csEZ%2FH6EgOATcuFis2ouHGUwtcrOFavP6YK608pj%2FknjeolU%2BO9vMeQfhaRC4i7f66GUKMM67Cta17UUakirk69D3bFmBmQGXyAmY1gXKyRejd9LT2uJ%2FHih%2FWLZ5VuL%2B8sd4wpp0eKCme2Dld9M%2B4y0MhPZtY7TT23OfYEfD84dfHNyAb9DJDjI%2F2%2F2QOZEsnnGoqQLI3FnaIxVzwXfg4pAN3JCA8u73luNxCiagIwQeeXKb731FSM8vI4y%2F4RFwa8Qu8T14dEHANwcDO%2B2OFeJHC24NuDE9%2BT6CtJ%2FGKyJBiiuuJ30C4U08RV4plgga5iqE3KPIza6epkgUZonpZQIyBpfMl4sS49K6t8apwM4bRgZMRSFeTbQc2O5ElmA4io8svWgms6glQh7QMnsDuezlaHWjVikIzXyP%2FNRIwAdRo1XYbqaPtDU6GHJCtYWWIwUYHN%2FGbNp9Q739uMdp0FyWKBuWtP8zUuqWQGGS%2FseGY1I2Vows4d3Hw81bDMLcBjMfGH5G0On3%2BDkHhKRxdl3839Qm26%2FpkF6qH2W7kHJRmAMCPHYn0mtJM7WKiD1G5JXOlDHG7%2FJiXJUyA7pdJoGzCSvv28BjqkARlBKRjeTc4VvDNEYlSZ1vk2rxqQIOIgAirVtkfNkMnJm8WCUwjL3jURdT7PbtL3bigZpA%2FH7%2BksVGflFqFIxmOuUAvzOUzliP42S%2FKgbVMc2NBSm7BPEObRp9g%2FHRd9yw%2BcrPBgSRHcOMDO5G%2Bidi189KwhIX%2B0vcf8Ipuyeroqk%2BqrN6NDEoFq4iOmZpm%2F8fjS0kSPhQCTjz3TOPofeAVqr%2FUU&X-Amz-Signature=f133bdf1b1c8cb445cfeeebe43f2d3b4a291990bd445dcfa14f3488d48b86acd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHOAXAQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiVsO%2FGGY1lTR3iO9WXV352rP2MlLrcbHZyHbpjDTg9QIhAOmyXFGsn9z1GFQTNM2doqOnfN5lj3r8i9FpT3Z8xPzSKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBxesSc2H9EIH%2Fdg8q3AOE0%2F4tPPkCaqWSIY6X7ZnRmsv8NWEX3zaj0csEZ%2FH6EgOATcuFis2ouHGUwtcrOFavP6YK608pj%2FknjeolU%2BO9vMeQfhaRC4i7f66GUKMM67Cta17UUakirk69D3bFmBmQGXyAmY1gXKyRejd9LT2uJ%2FHih%2FWLZ5VuL%2B8sd4wpp0eKCme2Dld9M%2B4y0MhPZtY7TT23OfYEfD84dfHNyAb9DJDjI%2F2%2F2QOZEsnnGoqQLI3FnaIxVzwXfg4pAN3JCA8u73luNxCiagIwQeeXKb731FSM8vI4y%2F4RFwa8Qu8T14dEHANwcDO%2B2OFeJHC24NuDE9%2BT6CtJ%2FGKyJBiiuuJ30C4U08RV4plgga5iqE3KPIza6epkgUZonpZQIyBpfMl4sS49K6t8apwM4bRgZMRSFeTbQc2O5ElmA4io8svWgms6glQh7QMnsDuezlaHWjVikIzXyP%2FNRIwAdRo1XYbqaPtDU6GHJCtYWWIwUYHN%2FGbNp9Q739uMdp0FyWKBuWtP8zUuqWQGGS%2FseGY1I2Vows4d3Hw81bDMLcBjMfGH5G0On3%2BDkHhKRxdl3839Qm26%2FpkF6qH2W7kHJRmAMCPHYn0mtJM7WKiD1G5JXOlDHG7%2FJiXJUyA7pdJoGzCSvv28BjqkARlBKRjeTc4VvDNEYlSZ1vk2rxqQIOIgAirVtkfNkMnJm8WCUwjL3jURdT7PbtL3bigZpA%2FH7%2BksVGflFqFIxmOuUAvzOUzliP42S%2FKgbVMc2NBSm7BPEObRp9g%2FHRd9yw%2BcrPBgSRHcOMDO5G%2Bidi189KwhIX%2B0vcf8Ipuyeroqk%2BqrN6NDEoFq4iOmZpm%2F8fjS0kSPhQCTjz3TOPofeAVqr%2FUU&X-Amz-Signature=cd4a42587bde2e31281320f9a93d76b686ef45b24a783038734489cc59ce0969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHOAXAQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiVsO%2FGGY1lTR3iO9WXV352rP2MlLrcbHZyHbpjDTg9QIhAOmyXFGsn9z1GFQTNM2doqOnfN5lj3r8i9FpT3Z8xPzSKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBxesSc2H9EIH%2Fdg8q3AOE0%2F4tPPkCaqWSIY6X7ZnRmsv8NWEX3zaj0csEZ%2FH6EgOATcuFis2ouHGUwtcrOFavP6YK608pj%2FknjeolU%2BO9vMeQfhaRC4i7f66GUKMM67Cta17UUakirk69D3bFmBmQGXyAmY1gXKyRejd9LT2uJ%2FHih%2FWLZ5VuL%2B8sd4wpp0eKCme2Dld9M%2B4y0MhPZtY7TT23OfYEfD84dfHNyAb9DJDjI%2F2%2F2QOZEsnnGoqQLI3FnaIxVzwXfg4pAN3JCA8u73luNxCiagIwQeeXKb731FSM8vI4y%2F4RFwa8Qu8T14dEHANwcDO%2B2OFeJHC24NuDE9%2BT6CtJ%2FGKyJBiiuuJ30C4U08RV4plgga5iqE3KPIza6epkgUZonpZQIyBpfMl4sS49K6t8apwM4bRgZMRSFeTbQc2O5ElmA4io8svWgms6glQh7QMnsDuezlaHWjVikIzXyP%2FNRIwAdRo1XYbqaPtDU6GHJCtYWWIwUYHN%2FGbNp9Q739uMdp0FyWKBuWtP8zUuqWQGGS%2FseGY1I2Vows4d3Hw81bDMLcBjMfGH5G0On3%2BDkHhKRxdl3839Qm26%2FpkF6qH2W7kHJRmAMCPHYn0mtJM7WKiD1G5JXOlDHG7%2FJiXJUyA7pdJoGzCSvv28BjqkARlBKRjeTc4VvDNEYlSZ1vk2rxqQIOIgAirVtkfNkMnJm8WCUwjL3jURdT7PbtL3bigZpA%2FH7%2BksVGflFqFIxmOuUAvzOUzliP42S%2FKgbVMc2NBSm7BPEObRp9g%2FHRd9yw%2BcrPBgSRHcOMDO5G%2Bidi189KwhIX%2B0vcf8Ipuyeroqk%2BqrN6NDEoFq4iOmZpm%2F8fjS0kSPhQCTjz3TOPofeAVqr%2FUU&X-Amz-Signature=b69d9c7ebc47f3314845d4e51a2c1f86339cc06b7304d37bb326f6b2a624d287&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHOAXAQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiVsO%2FGGY1lTR3iO9WXV352rP2MlLrcbHZyHbpjDTg9QIhAOmyXFGsn9z1GFQTNM2doqOnfN5lj3r8i9FpT3Z8xPzSKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBxesSc2H9EIH%2Fdg8q3AOE0%2F4tPPkCaqWSIY6X7ZnRmsv8NWEX3zaj0csEZ%2FH6EgOATcuFis2ouHGUwtcrOFavP6YK608pj%2FknjeolU%2BO9vMeQfhaRC4i7f66GUKMM67Cta17UUakirk69D3bFmBmQGXyAmY1gXKyRejd9LT2uJ%2FHih%2FWLZ5VuL%2B8sd4wpp0eKCme2Dld9M%2B4y0MhPZtY7TT23OfYEfD84dfHNyAb9DJDjI%2F2%2F2QOZEsnnGoqQLI3FnaIxVzwXfg4pAN3JCA8u73luNxCiagIwQeeXKb731FSM8vI4y%2F4RFwa8Qu8T14dEHANwcDO%2B2OFeJHC24NuDE9%2BT6CtJ%2FGKyJBiiuuJ30C4U08RV4plgga5iqE3KPIza6epkgUZonpZQIyBpfMl4sS49K6t8apwM4bRgZMRSFeTbQc2O5ElmA4io8svWgms6glQh7QMnsDuezlaHWjVikIzXyP%2FNRIwAdRo1XYbqaPtDU6GHJCtYWWIwUYHN%2FGbNp9Q739uMdp0FyWKBuWtP8zUuqWQGGS%2FseGY1I2Vows4d3Hw81bDMLcBjMfGH5G0On3%2BDkHhKRxdl3839Qm26%2FpkF6qH2W7kHJRmAMCPHYn0mtJM7WKiD1G5JXOlDHG7%2FJiXJUyA7pdJoGzCSvv28BjqkARlBKRjeTc4VvDNEYlSZ1vk2rxqQIOIgAirVtkfNkMnJm8WCUwjL3jURdT7PbtL3bigZpA%2FH7%2BksVGflFqFIxmOuUAvzOUzliP42S%2FKgbVMc2NBSm7BPEObRp9g%2FHRd9yw%2BcrPBgSRHcOMDO5G%2Bidi189KwhIX%2B0vcf8Ipuyeroqk%2BqrN6NDEoFq4iOmZpm%2F8fjS0kSPhQCTjz3TOPofeAVqr%2FUU&X-Amz-Signature=a6ca88dea3c15f376dcb0dddccfd720fd3776e3ec99874278f9b1fa0f3ec341a&X-Amz-SignedHeaders=host&x-id=GetObject)
