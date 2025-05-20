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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCRMINJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB9g2108I%2B7QWksPthvOkKmGR8Viq1g9Ph7tXgp%2B3UPAiAyknHoZluPmOFk542ig4B1lXyVCMcIE7mgPbsGLgCw2yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHT1mObB%2Bk4fvRDZKtwDb0KEK8PEHA%2FLTPXlkC9b3yBI3ViG9zVtY95TyxAkYkHAIl2%2Bcpa%2FPeMJPY8Rfr3EKP0UXHdiK8uFw4rqJDOPzVPPBpnxsAPY1aZxec10YJtRg3vmS%2FzBHaoMQCQH83f7ZndRtzRrOhetIa%2B3ezkN%2FXqRVc8Aw%2FVRGgau7LlGouDBazIY8HN7egrIlSj4Q1KrZVDRrR75kdHs0WqQ3Ebje4E%2B1ieeAqkpQ5qCpokx3YZOhTjqEAvxlvTjD76Tq5z1tiqQHLFT0rsMILdbvNCY7KZfEU15TmSN6RDa7uVPW8Zwvd%2F8t%2BJ2iBVgqeVfRmdFNa%2BofTK5a6Eyv%2FepKsyamTEtDr13fEb4t1h8v1KgyhjrPXbpLurVTjLJHoIWPNe1LWqLRohI4dREIoeMiKv92IEGoCPCVmus7z%2Bnv9ZZpjRjOCIDmOv%2FmNLYAyEpD8XE0aAsGRtDes1eVpW%2F1ANwdIXR1k7%2Fb8s2kOntIB5l5oikRc6NFIJ5YSt0txP%2B0n8WhRiuh4ajgpCUrAlkpNV5kDJ3ulF%2B154f2MEn4K%2FsmJTGwBzTHpiQim3INsKZtCRGvo3KzuuADtYWPn7wT%2BsJjN9U4TqOMMsdfaSlXB8ZrLaJqbOU3lvzkaeIwfkwzsmywQY6pgF0uEC2bpMt2MiW%2B4j5JCqLR5vCEfIlSmJLfKnFcxB2kQGgl%2Fg9z%2B7oIkDiKK2tmTNfE1Y%2Fri4kWu2u%2B2hmj%2Blv%2FhUV6uHYCRDCFXew6dUFNY%2FbDPIXJ43i1nNdApCZVywHEKaluESko6tdNkR%2F5TbMvY%2B6eoDiDmG5CHAeiZR908oIDqKl%2FIjl%2Br7ilrrtS1FPy7D5Qjjvii8esu%2Fe6neM2Dh%2BiA5K&X-Amz-Signature=7f3e52a972fe0cfee0696ae869739ffbdf087a9b7b32d6e9ecea11e17556c5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCRMINJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB9g2108I%2B7QWksPthvOkKmGR8Viq1g9Ph7tXgp%2B3UPAiAyknHoZluPmOFk542ig4B1lXyVCMcIE7mgPbsGLgCw2yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHT1mObB%2Bk4fvRDZKtwDb0KEK8PEHA%2FLTPXlkC9b3yBI3ViG9zVtY95TyxAkYkHAIl2%2Bcpa%2FPeMJPY8Rfr3EKP0UXHdiK8uFw4rqJDOPzVPPBpnxsAPY1aZxec10YJtRg3vmS%2FzBHaoMQCQH83f7ZndRtzRrOhetIa%2B3ezkN%2FXqRVc8Aw%2FVRGgau7LlGouDBazIY8HN7egrIlSj4Q1KrZVDRrR75kdHs0WqQ3Ebje4E%2B1ieeAqkpQ5qCpokx3YZOhTjqEAvxlvTjD76Tq5z1tiqQHLFT0rsMILdbvNCY7KZfEU15TmSN6RDa7uVPW8Zwvd%2F8t%2BJ2iBVgqeVfRmdFNa%2BofTK5a6Eyv%2FepKsyamTEtDr13fEb4t1h8v1KgyhjrPXbpLurVTjLJHoIWPNe1LWqLRohI4dREIoeMiKv92IEGoCPCVmus7z%2Bnv9ZZpjRjOCIDmOv%2FmNLYAyEpD8XE0aAsGRtDes1eVpW%2F1ANwdIXR1k7%2Fb8s2kOntIB5l5oikRc6NFIJ5YSt0txP%2B0n8WhRiuh4ajgpCUrAlkpNV5kDJ3ulF%2B154f2MEn4K%2FsmJTGwBzTHpiQim3INsKZtCRGvo3KzuuADtYWPn7wT%2BsJjN9U4TqOMMsdfaSlXB8ZrLaJqbOU3lvzkaeIwfkwzsmywQY6pgF0uEC2bpMt2MiW%2B4j5JCqLR5vCEfIlSmJLfKnFcxB2kQGgl%2Fg9z%2B7oIkDiKK2tmTNfE1Y%2Fri4kWu2u%2B2hmj%2Blv%2FhUV6uHYCRDCFXew6dUFNY%2FbDPIXJ43i1nNdApCZVywHEKaluESko6tdNkR%2F5TbMvY%2B6eoDiDmG5CHAeiZR908oIDqKl%2FIjl%2Br7ilrrtS1FPy7D5Qjjvii8esu%2Fe6neM2Dh%2BiA5K&X-Amz-Signature=dbbe52a280029fad2aea2debe94901f4d69d129aaf2ff5aa31e0711951f9a7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCRMINJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB9g2108I%2B7QWksPthvOkKmGR8Viq1g9Ph7tXgp%2B3UPAiAyknHoZluPmOFk542ig4B1lXyVCMcIE7mgPbsGLgCw2yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHT1mObB%2Bk4fvRDZKtwDb0KEK8PEHA%2FLTPXlkC9b3yBI3ViG9zVtY95TyxAkYkHAIl2%2Bcpa%2FPeMJPY8Rfr3EKP0UXHdiK8uFw4rqJDOPzVPPBpnxsAPY1aZxec10YJtRg3vmS%2FzBHaoMQCQH83f7ZndRtzRrOhetIa%2B3ezkN%2FXqRVc8Aw%2FVRGgau7LlGouDBazIY8HN7egrIlSj4Q1KrZVDRrR75kdHs0WqQ3Ebje4E%2B1ieeAqkpQ5qCpokx3YZOhTjqEAvxlvTjD76Tq5z1tiqQHLFT0rsMILdbvNCY7KZfEU15TmSN6RDa7uVPW8Zwvd%2F8t%2BJ2iBVgqeVfRmdFNa%2BofTK5a6Eyv%2FepKsyamTEtDr13fEb4t1h8v1KgyhjrPXbpLurVTjLJHoIWPNe1LWqLRohI4dREIoeMiKv92IEGoCPCVmus7z%2Bnv9ZZpjRjOCIDmOv%2FmNLYAyEpD8XE0aAsGRtDes1eVpW%2F1ANwdIXR1k7%2Fb8s2kOntIB5l5oikRc6NFIJ5YSt0txP%2B0n8WhRiuh4ajgpCUrAlkpNV5kDJ3ulF%2B154f2MEn4K%2FsmJTGwBzTHpiQim3INsKZtCRGvo3KzuuADtYWPn7wT%2BsJjN9U4TqOMMsdfaSlXB8ZrLaJqbOU3lvzkaeIwfkwzsmywQY6pgF0uEC2bpMt2MiW%2B4j5JCqLR5vCEfIlSmJLfKnFcxB2kQGgl%2Fg9z%2B7oIkDiKK2tmTNfE1Y%2Fri4kWu2u%2B2hmj%2Blv%2FhUV6uHYCRDCFXew6dUFNY%2FbDPIXJ43i1nNdApCZVywHEKaluESko6tdNkR%2F5TbMvY%2B6eoDiDmG5CHAeiZR908oIDqKl%2FIjl%2Br7ilrrtS1FPy7D5Qjjvii8esu%2Fe6neM2Dh%2BiA5K&X-Amz-Signature=e7f6d8226f1d5d8257f503317ebc4acf4f3b6dd0292f83566e5a50d1c485340a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCRMINJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB9g2108I%2B7QWksPthvOkKmGR8Viq1g9Ph7tXgp%2B3UPAiAyknHoZluPmOFk542ig4B1lXyVCMcIE7mgPbsGLgCw2yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHT1mObB%2Bk4fvRDZKtwDb0KEK8PEHA%2FLTPXlkC9b3yBI3ViG9zVtY95TyxAkYkHAIl2%2Bcpa%2FPeMJPY8Rfr3EKP0UXHdiK8uFw4rqJDOPzVPPBpnxsAPY1aZxec10YJtRg3vmS%2FzBHaoMQCQH83f7ZndRtzRrOhetIa%2B3ezkN%2FXqRVc8Aw%2FVRGgau7LlGouDBazIY8HN7egrIlSj4Q1KrZVDRrR75kdHs0WqQ3Ebje4E%2B1ieeAqkpQ5qCpokx3YZOhTjqEAvxlvTjD76Tq5z1tiqQHLFT0rsMILdbvNCY7KZfEU15TmSN6RDa7uVPW8Zwvd%2F8t%2BJ2iBVgqeVfRmdFNa%2BofTK5a6Eyv%2FepKsyamTEtDr13fEb4t1h8v1KgyhjrPXbpLurVTjLJHoIWPNe1LWqLRohI4dREIoeMiKv92IEGoCPCVmus7z%2Bnv9ZZpjRjOCIDmOv%2FmNLYAyEpD8XE0aAsGRtDes1eVpW%2F1ANwdIXR1k7%2Fb8s2kOntIB5l5oikRc6NFIJ5YSt0txP%2B0n8WhRiuh4ajgpCUrAlkpNV5kDJ3ulF%2B154f2MEn4K%2FsmJTGwBzTHpiQim3INsKZtCRGvo3KzuuADtYWPn7wT%2BsJjN9U4TqOMMsdfaSlXB8ZrLaJqbOU3lvzkaeIwfkwzsmywQY6pgF0uEC2bpMt2MiW%2B4j5JCqLR5vCEfIlSmJLfKnFcxB2kQGgl%2Fg9z%2B7oIkDiKK2tmTNfE1Y%2Fri4kWu2u%2B2hmj%2Blv%2FhUV6uHYCRDCFXew6dUFNY%2FbDPIXJ43i1nNdApCZVywHEKaluESko6tdNkR%2F5TbMvY%2B6eoDiDmG5CHAeiZR908oIDqKl%2FIjl%2Br7ilrrtS1FPy7D5Qjjvii8esu%2Fe6neM2Dh%2BiA5K&X-Amz-Signature=8080e49f90e726239842fd5816cee97c16e6e2d622e97664c119881138e88775&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCRMINJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB9g2108I%2B7QWksPthvOkKmGR8Viq1g9Ph7tXgp%2B3UPAiAyknHoZluPmOFk542ig4B1lXyVCMcIE7mgPbsGLgCw2yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHT1mObB%2Bk4fvRDZKtwDb0KEK8PEHA%2FLTPXlkC9b3yBI3ViG9zVtY95TyxAkYkHAIl2%2Bcpa%2FPeMJPY8Rfr3EKP0UXHdiK8uFw4rqJDOPzVPPBpnxsAPY1aZxec10YJtRg3vmS%2FzBHaoMQCQH83f7ZndRtzRrOhetIa%2B3ezkN%2FXqRVc8Aw%2FVRGgau7LlGouDBazIY8HN7egrIlSj4Q1KrZVDRrR75kdHs0WqQ3Ebje4E%2B1ieeAqkpQ5qCpokx3YZOhTjqEAvxlvTjD76Tq5z1tiqQHLFT0rsMILdbvNCY7KZfEU15TmSN6RDa7uVPW8Zwvd%2F8t%2BJ2iBVgqeVfRmdFNa%2BofTK5a6Eyv%2FepKsyamTEtDr13fEb4t1h8v1KgyhjrPXbpLurVTjLJHoIWPNe1LWqLRohI4dREIoeMiKv92IEGoCPCVmus7z%2Bnv9ZZpjRjOCIDmOv%2FmNLYAyEpD8XE0aAsGRtDes1eVpW%2F1ANwdIXR1k7%2Fb8s2kOntIB5l5oikRc6NFIJ5YSt0txP%2B0n8WhRiuh4ajgpCUrAlkpNV5kDJ3ulF%2B154f2MEn4K%2FsmJTGwBzTHpiQim3INsKZtCRGvo3KzuuADtYWPn7wT%2BsJjN9U4TqOMMsdfaSlXB8ZrLaJqbOU3lvzkaeIwfkwzsmywQY6pgF0uEC2bpMt2MiW%2B4j5JCqLR5vCEfIlSmJLfKnFcxB2kQGgl%2Fg9z%2B7oIkDiKK2tmTNfE1Y%2Fri4kWu2u%2B2hmj%2Blv%2FhUV6uHYCRDCFXew6dUFNY%2FbDPIXJ43i1nNdApCZVywHEKaluESko6tdNkR%2F5TbMvY%2B6eoDiDmG5CHAeiZR908oIDqKl%2FIjl%2Br7ilrrtS1FPy7D5Qjjvii8esu%2Fe6neM2Dh%2BiA5K&X-Amz-Signature=5e66741198e3675d1304b289d14514f088a5130a3d89d8b8c5b18adcb83dec6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCRMINJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB9g2108I%2B7QWksPthvOkKmGR8Viq1g9Ph7tXgp%2B3UPAiAyknHoZluPmOFk542ig4B1lXyVCMcIE7mgPbsGLgCw2yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHT1mObB%2Bk4fvRDZKtwDb0KEK8PEHA%2FLTPXlkC9b3yBI3ViG9zVtY95TyxAkYkHAIl2%2Bcpa%2FPeMJPY8Rfr3EKP0UXHdiK8uFw4rqJDOPzVPPBpnxsAPY1aZxec10YJtRg3vmS%2FzBHaoMQCQH83f7ZndRtzRrOhetIa%2B3ezkN%2FXqRVc8Aw%2FVRGgau7LlGouDBazIY8HN7egrIlSj4Q1KrZVDRrR75kdHs0WqQ3Ebje4E%2B1ieeAqkpQ5qCpokx3YZOhTjqEAvxlvTjD76Tq5z1tiqQHLFT0rsMILdbvNCY7KZfEU15TmSN6RDa7uVPW8Zwvd%2F8t%2BJ2iBVgqeVfRmdFNa%2BofTK5a6Eyv%2FepKsyamTEtDr13fEb4t1h8v1KgyhjrPXbpLurVTjLJHoIWPNe1LWqLRohI4dREIoeMiKv92IEGoCPCVmus7z%2Bnv9ZZpjRjOCIDmOv%2FmNLYAyEpD8XE0aAsGRtDes1eVpW%2F1ANwdIXR1k7%2Fb8s2kOntIB5l5oikRc6NFIJ5YSt0txP%2B0n8WhRiuh4ajgpCUrAlkpNV5kDJ3ulF%2B154f2MEn4K%2FsmJTGwBzTHpiQim3INsKZtCRGvo3KzuuADtYWPn7wT%2BsJjN9U4TqOMMsdfaSlXB8ZrLaJqbOU3lvzkaeIwfkwzsmywQY6pgF0uEC2bpMt2MiW%2B4j5JCqLR5vCEfIlSmJLfKnFcxB2kQGgl%2Fg9z%2B7oIkDiKK2tmTNfE1Y%2Fri4kWu2u%2B2hmj%2Blv%2FhUV6uHYCRDCFXew6dUFNY%2FbDPIXJ43i1nNdApCZVywHEKaluESko6tdNkR%2F5TbMvY%2B6eoDiDmG5CHAeiZR908oIDqKl%2FIjl%2Br7ilrrtS1FPy7D5Qjjvii8esu%2Fe6neM2Dh%2BiA5K&X-Amz-Signature=a5b9cc5a95807c8fc3df3764d6a12fe2db8816c2cdfa77f71a27e4c362b3eda1&X-Amz-SignedHeaders=host&x-id=GetObject)
