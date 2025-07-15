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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H47U3A%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGLKPmLAFVwy6Y7bQq9e4tSvc0JsK1HGYmokrDOR1LyHAiB31gQdhbKjP%2Ff1FVLsfpCwG3Nnl3xxIRUGuaFvJRMJnCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTf77R6Rr0INh08KFKtwDhlb5qgJHkhq%2F2BvTkO%2Ffamvj%2FyPHLuS2rZj8Gb6ynNrzTwpY22FrdVRwr1lzPtaAT%2FEGKlq7A9vDh4s%2Bgz6kOYhGc18X8%2FJvGka3AC5OSH17rcIYbJJC9yxax0aSrdZVud7fNnDpHN4MV28Ww%2B0rVkgEVQVAr7IjSn4GFbQrLJPz27IAWHkrnb44bB17Gs2LkPqrZpkxLV7hesgChuZyN3PzShskgF1%2FjMPICgx4Aku6sPPEOKwHHucE82U2945deRCkRnljaqpRwnELDCXh1ae83K0%2BLTjzk433XEUcl0JaVJqq4DMLhEfl2HJB1940rXwG3PFcnq4qow8XTyUEqfxCN1U98tohRi8RkXECCtlfOFgeXkLTrxlbwcAAg%2FQOzjMiJav364YHrPv6rVF1ZRD1tKxBaALxRGCZuujyjz%2FXfh97dWBNqURR3pTkUZPZqGD56AhhWbxIDRKBS6HYK6fbjIeBEbBi0L7ldJyoHkgja2U%2Bh9VQR89gQCeCEmGH%2Bzpze4pDIPuzBiRQaz4MOUaaTKzOyZMaN%2F2UUlMggYNmzEEpO3YfB8s82%2FHwD9rhdIBHWz1of1S4kD93rRZeW5RIySo0AA1xRxPVYF3oCy4ktHNJ1w%2BiH%2FQ8my0w9IXawwY6pgELe6oKB2Ts33NYonCETDOPBQYZ995zODRsh%2Bblrsb57xFhaQeKTmv7GyjqR2Y6k2OkgmOk2Hcf3wFfnN48YO3anNNjKG5lPxcGFWL0EPXnANfMQAhSOhMb7FD2rOeK%2BvVAlzo8Z5P1Oc7Wfvr2wcQXUu8uz29OKjUTDoT2OpccpRzyIUUzR2f%2B3%2F4B%2FNg3q6tPvURkSOuSjvaL87EFTaMwXTxYlzKm&X-Amz-Signature=958361bdf6a56a91518e51b3bd26ed95755bc871807d2e50bb90bba4b72063b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H47U3A%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGLKPmLAFVwy6Y7bQq9e4tSvc0JsK1HGYmokrDOR1LyHAiB31gQdhbKjP%2Ff1FVLsfpCwG3Nnl3xxIRUGuaFvJRMJnCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTf77R6Rr0INh08KFKtwDhlb5qgJHkhq%2F2BvTkO%2Ffamvj%2FyPHLuS2rZj8Gb6ynNrzTwpY22FrdVRwr1lzPtaAT%2FEGKlq7A9vDh4s%2Bgz6kOYhGc18X8%2FJvGka3AC5OSH17rcIYbJJC9yxax0aSrdZVud7fNnDpHN4MV28Ww%2B0rVkgEVQVAr7IjSn4GFbQrLJPz27IAWHkrnb44bB17Gs2LkPqrZpkxLV7hesgChuZyN3PzShskgF1%2FjMPICgx4Aku6sPPEOKwHHucE82U2945deRCkRnljaqpRwnELDCXh1ae83K0%2BLTjzk433XEUcl0JaVJqq4DMLhEfl2HJB1940rXwG3PFcnq4qow8XTyUEqfxCN1U98tohRi8RkXECCtlfOFgeXkLTrxlbwcAAg%2FQOzjMiJav364YHrPv6rVF1ZRD1tKxBaALxRGCZuujyjz%2FXfh97dWBNqURR3pTkUZPZqGD56AhhWbxIDRKBS6HYK6fbjIeBEbBi0L7ldJyoHkgja2U%2Bh9VQR89gQCeCEmGH%2Bzpze4pDIPuzBiRQaz4MOUaaTKzOyZMaN%2F2UUlMggYNmzEEpO3YfB8s82%2FHwD9rhdIBHWz1of1S4kD93rRZeW5RIySo0AA1xRxPVYF3oCy4ktHNJ1w%2BiH%2FQ8my0w9IXawwY6pgELe6oKB2Ts33NYonCETDOPBQYZ995zODRsh%2Bblrsb57xFhaQeKTmv7GyjqR2Y6k2OkgmOk2Hcf3wFfnN48YO3anNNjKG5lPxcGFWL0EPXnANfMQAhSOhMb7FD2rOeK%2BvVAlzo8Z5P1Oc7Wfvr2wcQXUu8uz29OKjUTDoT2OpccpRzyIUUzR2f%2B3%2F4B%2FNg3q6tPvURkSOuSjvaL87EFTaMwXTxYlzKm&X-Amz-Signature=b7d6ccf282b5ba925679ea24d3989f18eb0a54ac87e8dfe2cf14fc0c17dca767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H47U3A%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGLKPmLAFVwy6Y7bQq9e4tSvc0JsK1HGYmokrDOR1LyHAiB31gQdhbKjP%2Ff1FVLsfpCwG3Nnl3xxIRUGuaFvJRMJnCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTf77R6Rr0INh08KFKtwDhlb5qgJHkhq%2F2BvTkO%2Ffamvj%2FyPHLuS2rZj8Gb6ynNrzTwpY22FrdVRwr1lzPtaAT%2FEGKlq7A9vDh4s%2Bgz6kOYhGc18X8%2FJvGka3AC5OSH17rcIYbJJC9yxax0aSrdZVud7fNnDpHN4MV28Ww%2B0rVkgEVQVAr7IjSn4GFbQrLJPz27IAWHkrnb44bB17Gs2LkPqrZpkxLV7hesgChuZyN3PzShskgF1%2FjMPICgx4Aku6sPPEOKwHHucE82U2945deRCkRnljaqpRwnELDCXh1ae83K0%2BLTjzk433XEUcl0JaVJqq4DMLhEfl2HJB1940rXwG3PFcnq4qow8XTyUEqfxCN1U98tohRi8RkXECCtlfOFgeXkLTrxlbwcAAg%2FQOzjMiJav364YHrPv6rVF1ZRD1tKxBaALxRGCZuujyjz%2FXfh97dWBNqURR3pTkUZPZqGD56AhhWbxIDRKBS6HYK6fbjIeBEbBi0L7ldJyoHkgja2U%2Bh9VQR89gQCeCEmGH%2Bzpze4pDIPuzBiRQaz4MOUaaTKzOyZMaN%2F2UUlMggYNmzEEpO3YfB8s82%2FHwD9rhdIBHWz1of1S4kD93rRZeW5RIySo0AA1xRxPVYF3oCy4ktHNJ1w%2BiH%2FQ8my0w9IXawwY6pgELe6oKB2Ts33NYonCETDOPBQYZ995zODRsh%2Bblrsb57xFhaQeKTmv7GyjqR2Y6k2OkgmOk2Hcf3wFfnN48YO3anNNjKG5lPxcGFWL0EPXnANfMQAhSOhMb7FD2rOeK%2BvVAlzo8Z5P1Oc7Wfvr2wcQXUu8uz29OKjUTDoT2OpccpRzyIUUzR2f%2B3%2F4B%2FNg3q6tPvURkSOuSjvaL87EFTaMwXTxYlzKm&X-Amz-Signature=3abe028f5bbc4879910a433f40038d2bfadcde108ed78b47b1249f0b7a1a9a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H47U3A%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGLKPmLAFVwy6Y7bQq9e4tSvc0JsK1HGYmokrDOR1LyHAiB31gQdhbKjP%2Ff1FVLsfpCwG3Nnl3xxIRUGuaFvJRMJnCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTf77R6Rr0INh08KFKtwDhlb5qgJHkhq%2F2BvTkO%2Ffamvj%2FyPHLuS2rZj8Gb6ynNrzTwpY22FrdVRwr1lzPtaAT%2FEGKlq7A9vDh4s%2Bgz6kOYhGc18X8%2FJvGka3AC5OSH17rcIYbJJC9yxax0aSrdZVud7fNnDpHN4MV28Ww%2B0rVkgEVQVAr7IjSn4GFbQrLJPz27IAWHkrnb44bB17Gs2LkPqrZpkxLV7hesgChuZyN3PzShskgF1%2FjMPICgx4Aku6sPPEOKwHHucE82U2945deRCkRnljaqpRwnELDCXh1ae83K0%2BLTjzk433XEUcl0JaVJqq4DMLhEfl2HJB1940rXwG3PFcnq4qow8XTyUEqfxCN1U98tohRi8RkXECCtlfOFgeXkLTrxlbwcAAg%2FQOzjMiJav364YHrPv6rVF1ZRD1tKxBaALxRGCZuujyjz%2FXfh97dWBNqURR3pTkUZPZqGD56AhhWbxIDRKBS6HYK6fbjIeBEbBi0L7ldJyoHkgja2U%2Bh9VQR89gQCeCEmGH%2Bzpze4pDIPuzBiRQaz4MOUaaTKzOyZMaN%2F2UUlMggYNmzEEpO3YfB8s82%2FHwD9rhdIBHWz1of1S4kD93rRZeW5RIySo0AA1xRxPVYF3oCy4ktHNJ1w%2BiH%2FQ8my0w9IXawwY6pgELe6oKB2Ts33NYonCETDOPBQYZ995zODRsh%2Bblrsb57xFhaQeKTmv7GyjqR2Y6k2OkgmOk2Hcf3wFfnN48YO3anNNjKG5lPxcGFWL0EPXnANfMQAhSOhMb7FD2rOeK%2BvVAlzo8Z5P1Oc7Wfvr2wcQXUu8uz29OKjUTDoT2OpccpRzyIUUzR2f%2B3%2F4B%2FNg3q6tPvURkSOuSjvaL87EFTaMwXTxYlzKm&X-Amz-Signature=fb5754878e0f7b9c039a471f52b137150427dbf746af28d2b0c025c5c7b444ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H47U3A%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGLKPmLAFVwy6Y7bQq9e4tSvc0JsK1HGYmokrDOR1LyHAiB31gQdhbKjP%2Ff1FVLsfpCwG3Nnl3xxIRUGuaFvJRMJnCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTf77R6Rr0INh08KFKtwDhlb5qgJHkhq%2F2BvTkO%2Ffamvj%2FyPHLuS2rZj8Gb6ynNrzTwpY22FrdVRwr1lzPtaAT%2FEGKlq7A9vDh4s%2Bgz6kOYhGc18X8%2FJvGka3AC5OSH17rcIYbJJC9yxax0aSrdZVud7fNnDpHN4MV28Ww%2B0rVkgEVQVAr7IjSn4GFbQrLJPz27IAWHkrnb44bB17Gs2LkPqrZpkxLV7hesgChuZyN3PzShskgF1%2FjMPICgx4Aku6sPPEOKwHHucE82U2945deRCkRnljaqpRwnELDCXh1ae83K0%2BLTjzk433XEUcl0JaVJqq4DMLhEfl2HJB1940rXwG3PFcnq4qow8XTyUEqfxCN1U98tohRi8RkXECCtlfOFgeXkLTrxlbwcAAg%2FQOzjMiJav364YHrPv6rVF1ZRD1tKxBaALxRGCZuujyjz%2FXfh97dWBNqURR3pTkUZPZqGD56AhhWbxIDRKBS6HYK6fbjIeBEbBi0L7ldJyoHkgja2U%2Bh9VQR89gQCeCEmGH%2Bzpze4pDIPuzBiRQaz4MOUaaTKzOyZMaN%2F2UUlMggYNmzEEpO3YfB8s82%2FHwD9rhdIBHWz1of1S4kD93rRZeW5RIySo0AA1xRxPVYF3oCy4ktHNJ1w%2BiH%2FQ8my0w9IXawwY6pgELe6oKB2Ts33NYonCETDOPBQYZ995zODRsh%2Bblrsb57xFhaQeKTmv7GyjqR2Y6k2OkgmOk2Hcf3wFfnN48YO3anNNjKG5lPxcGFWL0EPXnANfMQAhSOhMb7FD2rOeK%2BvVAlzo8Z5P1Oc7Wfvr2wcQXUu8uz29OKjUTDoT2OpccpRzyIUUzR2f%2B3%2F4B%2FNg3q6tPvURkSOuSjvaL87EFTaMwXTxYlzKm&X-Amz-Signature=f66630a889fb8d498c102ec8a7a0095d69a2b09eecc0b440254da0138b2c8016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5H47U3A%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGLKPmLAFVwy6Y7bQq9e4tSvc0JsK1HGYmokrDOR1LyHAiB31gQdhbKjP%2Ff1FVLsfpCwG3Nnl3xxIRUGuaFvJRMJnCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMTf77R6Rr0INh08KFKtwDhlb5qgJHkhq%2F2BvTkO%2Ffamvj%2FyPHLuS2rZj8Gb6ynNrzTwpY22FrdVRwr1lzPtaAT%2FEGKlq7A9vDh4s%2Bgz6kOYhGc18X8%2FJvGka3AC5OSH17rcIYbJJC9yxax0aSrdZVud7fNnDpHN4MV28Ww%2B0rVkgEVQVAr7IjSn4GFbQrLJPz27IAWHkrnb44bB17Gs2LkPqrZpkxLV7hesgChuZyN3PzShskgF1%2FjMPICgx4Aku6sPPEOKwHHucE82U2945deRCkRnljaqpRwnELDCXh1ae83K0%2BLTjzk433XEUcl0JaVJqq4DMLhEfl2HJB1940rXwG3PFcnq4qow8XTyUEqfxCN1U98tohRi8RkXECCtlfOFgeXkLTrxlbwcAAg%2FQOzjMiJav364YHrPv6rVF1ZRD1tKxBaALxRGCZuujyjz%2FXfh97dWBNqURR3pTkUZPZqGD56AhhWbxIDRKBS6HYK6fbjIeBEbBi0L7ldJyoHkgja2U%2Bh9VQR89gQCeCEmGH%2Bzpze4pDIPuzBiRQaz4MOUaaTKzOyZMaN%2F2UUlMggYNmzEEpO3YfB8s82%2FHwD9rhdIBHWz1of1S4kD93rRZeW5RIySo0AA1xRxPVYF3oCy4ktHNJ1w%2BiH%2FQ8my0w9IXawwY6pgELe6oKB2Ts33NYonCETDOPBQYZ995zODRsh%2Bblrsb57xFhaQeKTmv7GyjqR2Y6k2OkgmOk2Hcf3wFfnN48YO3anNNjKG5lPxcGFWL0EPXnANfMQAhSOhMb7FD2rOeK%2BvVAlzo8Z5P1Oc7Wfvr2wcQXUu8uz29OKjUTDoT2OpccpRzyIUUzR2f%2B3%2F4B%2FNg3q6tPvURkSOuSjvaL87EFTaMwXTxYlzKm&X-Amz-Signature=e042e4ef03042a378519be04f942da76484f5376d4b6772758db67722920bffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
