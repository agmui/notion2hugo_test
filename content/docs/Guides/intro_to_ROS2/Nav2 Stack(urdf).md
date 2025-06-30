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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZJNTC5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ26%2BX0U%2FYobXWLQaI%2BlCj1%2Bulnn80ZI0HrGJxaE2mmwIhAIoXtws9gSP6fsRcKz2D02JCYj3dzxyXCqQpgXF7sHO5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyBYXIHLGZNAtkJFkq3ANHxrAu2kV6mc2zAxINfrF2Uy%2BQsn3Cicok5kgxuPhmlj07w3Mayi4rgEdSC%2F2F3KxCC9jcH9dKFs6R4eIzkW%2B0FhF%2FfftdRMjQ0Znel11dQ340sXH0yc0roiMbkRcosK3pfWccJclnpQdO2NpzFY2rNetbADUNuPV2gNTkMcASqPP9QmnL38vpp%2FgjEC4USVTntUG2rM0WntNVYvZb3UFdvPVuVqtrUqNCZsRF6TmxEZv5g9I0uykSEFL%2F24IlkSqmfhNU8L1xj6L23u7hEF6xiLyrp8ZwwHvtpJ9glcIQYwi4gyaa9iWGWB0WCCKtMOqAIXAdHWrZjR8UpnjUsGMWGr7japDntDy1pApPfSgYhm%2B1blZIJH3STMmWCA2ZUDDg0UtqdLfLL%2F8cB%2FGwzI82u9YbKTT91REDEsNow%2FSu%2BEeWY5kiY1d6aMPBlRgZusTF6QsMfYQhzbF2nHPfuzxZ9tUFzZHE9%2FC29awwKuOE9dwlXqLhaLPPUW6mAv3zWnUrMBkO1aFx5qpyQE36md8aFnTO36%2BOE04KMAqmNQforbHKcU5%2BEJyZIVzgctawbaR%2B2WBbULivjN4Ak8Iu1GiNlyuhRcp4Df41vS3iqXpRw4P6A3Iizlyr8%2FPoQDD2g4rDBjqkAQZ2t5Fpo5g43nKrF9pHDkaJlZSC7HV2ZKSYU9bV8f%2BURJ9yYFmc%2Fn5Uel%2BjTsfaPulpeaPrFVuKwcBI%2BYwIIJK39GdDaA4%2FKjRC2%2BzOEuIGmRGf0ri9c%2FTI%2F14tIlowBQ90dvCynNWx4%2Bmbh3AfrIZwIxkT9fENssWqfc%2FEKWX8swLBC0YDQxxAPmEMn0aByjxFFmlB9%2FQeJ8bl5sZaYW41wKGi&X-Amz-Signature=de51a8277ed59ccc63cc14932ba846e5d1af37c651691ed985f4c48a3bc6b571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZJNTC5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ26%2BX0U%2FYobXWLQaI%2BlCj1%2Bulnn80ZI0HrGJxaE2mmwIhAIoXtws9gSP6fsRcKz2D02JCYj3dzxyXCqQpgXF7sHO5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyBYXIHLGZNAtkJFkq3ANHxrAu2kV6mc2zAxINfrF2Uy%2BQsn3Cicok5kgxuPhmlj07w3Mayi4rgEdSC%2F2F3KxCC9jcH9dKFs6R4eIzkW%2B0FhF%2FfftdRMjQ0Znel11dQ340sXH0yc0roiMbkRcosK3pfWccJclnpQdO2NpzFY2rNetbADUNuPV2gNTkMcASqPP9QmnL38vpp%2FgjEC4USVTntUG2rM0WntNVYvZb3UFdvPVuVqtrUqNCZsRF6TmxEZv5g9I0uykSEFL%2F24IlkSqmfhNU8L1xj6L23u7hEF6xiLyrp8ZwwHvtpJ9glcIQYwi4gyaa9iWGWB0WCCKtMOqAIXAdHWrZjR8UpnjUsGMWGr7japDntDy1pApPfSgYhm%2B1blZIJH3STMmWCA2ZUDDg0UtqdLfLL%2F8cB%2FGwzI82u9YbKTT91REDEsNow%2FSu%2BEeWY5kiY1d6aMPBlRgZusTF6QsMfYQhzbF2nHPfuzxZ9tUFzZHE9%2FC29awwKuOE9dwlXqLhaLPPUW6mAv3zWnUrMBkO1aFx5qpyQE36md8aFnTO36%2BOE04KMAqmNQforbHKcU5%2BEJyZIVzgctawbaR%2B2WBbULivjN4Ak8Iu1GiNlyuhRcp4Df41vS3iqXpRw4P6A3Iizlyr8%2FPoQDD2g4rDBjqkAQZ2t5Fpo5g43nKrF9pHDkaJlZSC7HV2ZKSYU9bV8f%2BURJ9yYFmc%2Fn5Uel%2BjTsfaPulpeaPrFVuKwcBI%2BYwIIJK39GdDaA4%2FKjRC2%2BzOEuIGmRGf0ri9c%2FTI%2F14tIlowBQ90dvCynNWx4%2Bmbh3AfrIZwIxkT9fENssWqfc%2FEKWX8swLBC0YDQxxAPmEMn0aByjxFFmlB9%2FQeJ8bl5sZaYW41wKGi&X-Amz-Signature=48a11007766172371fda90a10a12b275e9232640cce48de36bb21b69f06d18e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZJNTC5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ26%2BX0U%2FYobXWLQaI%2BlCj1%2Bulnn80ZI0HrGJxaE2mmwIhAIoXtws9gSP6fsRcKz2D02JCYj3dzxyXCqQpgXF7sHO5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyBYXIHLGZNAtkJFkq3ANHxrAu2kV6mc2zAxINfrF2Uy%2BQsn3Cicok5kgxuPhmlj07w3Mayi4rgEdSC%2F2F3KxCC9jcH9dKFs6R4eIzkW%2B0FhF%2FfftdRMjQ0Znel11dQ340sXH0yc0roiMbkRcosK3pfWccJclnpQdO2NpzFY2rNetbADUNuPV2gNTkMcASqPP9QmnL38vpp%2FgjEC4USVTntUG2rM0WntNVYvZb3UFdvPVuVqtrUqNCZsRF6TmxEZv5g9I0uykSEFL%2F24IlkSqmfhNU8L1xj6L23u7hEF6xiLyrp8ZwwHvtpJ9glcIQYwi4gyaa9iWGWB0WCCKtMOqAIXAdHWrZjR8UpnjUsGMWGr7japDntDy1pApPfSgYhm%2B1blZIJH3STMmWCA2ZUDDg0UtqdLfLL%2F8cB%2FGwzI82u9YbKTT91REDEsNow%2FSu%2BEeWY5kiY1d6aMPBlRgZusTF6QsMfYQhzbF2nHPfuzxZ9tUFzZHE9%2FC29awwKuOE9dwlXqLhaLPPUW6mAv3zWnUrMBkO1aFx5qpyQE36md8aFnTO36%2BOE04KMAqmNQforbHKcU5%2BEJyZIVzgctawbaR%2B2WBbULivjN4Ak8Iu1GiNlyuhRcp4Df41vS3iqXpRw4P6A3Iizlyr8%2FPoQDD2g4rDBjqkAQZ2t5Fpo5g43nKrF9pHDkaJlZSC7HV2ZKSYU9bV8f%2BURJ9yYFmc%2Fn5Uel%2BjTsfaPulpeaPrFVuKwcBI%2BYwIIJK39GdDaA4%2FKjRC2%2BzOEuIGmRGf0ri9c%2FTI%2F14tIlowBQ90dvCynNWx4%2Bmbh3AfrIZwIxkT9fENssWqfc%2FEKWX8swLBC0YDQxxAPmEMn0aByjxFFmlB9%2FQeJ8bl5sZaYW41wKGi&X-Amz-Signature=fcd8212eaa79976e69dd65d9ff8feb32e3de61552feb41a721a506e8f8859631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZJNTC5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ26%2BX0U%2FYobXWLQaI%2BlCj1%2Bulnn80ZI0HrGJxaE2mmwIhAIoXtws9gSP6fsRcKz2D02JCYj3dzxyXCqQpgXF7sHO5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyBYXIHLGZNAtkJFkq3ANHxrAu2kV6mc2zAxINfrF2Uy%2BQsn3Cicok5kgxuPhmlj07w3Mayi4rgEdSC%2F2F3KxCC9jcH9dKFs6R4eIzkW%2B0FhF%2FfftdRMjQ0Znel11dQ340sXH0yc0roiMbkRcosK3pfWccJclnpQdO2NpzFY2rNetbADUNuPV2gNTkMcASqPP9QmnL38vpp%2FgjEC4USVTntUG2rM0WntNVYvZb3UFdvPVuVqtrUqNCZsRF6TmxEZv5g9I0uykSEFL%2F24IlkSqmfhNU8L1xj6L23u7hEF6xiLyrp8ZwwHvtpJ9glcIQYwi4gyaa9iWGWB0WCCKtMOqAIXAdHWrZjR8UpnjUsGMWGr7japDntDy1pApPfSgYhm%2B1blZIJH3STMmWCA2ZUDDg0UtqdLfLL%2F8cB%2FGwzI82u9YbKTT91REDEsNow%2FSu%2BEeWY5kiY1d6aMPBlRgZusTF6QsMfYQhzbF2nHPfuzxZ9tUFzZHE9%2FC29awwKuOE9dwlXqLhaLPPUW6mAv3zWnUrMBkO1aFx5qpyQE36md8aFnTO36%2BOE04KMAqmNQforbHKcU5%2BEJyZIVzgctawbaR%2B2WBbULivjN4Ak8Iu1GiNlyuhRcp4Df41vS3iqXpRw4P6A3Iizlyr8%2FPoQDD2g4rDBjqkAQZ2t5Fpo5g43nKrF9pHDkaJlZSC7HV2ZKSYU9bV8f%2BURJ9yYFmc%2Fn5Uel%2BjTsfaPulpeaPrFVuKwcBI%2BYwIIJK39GdDaA4%2FKjRC2%2BzOEuIGmRGf0ri9c%2FTI%2F14tIlowBQ90dvCynNWx4%2Bmbh3AfrIZwIxkT9fENssWqfc%2FEKWX8swLBC0YDQxxAPmEMn0aByjxFFmlB9%2FQeJ8bl5sZaYW41wKGi&X-Amz-Signature=23fda508d2e42740b6cafe05c8f34ac27bb04075aecaec75ff251fddae0dbb8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZJNTC5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ26%2BX0U%2FYobXWLQaI%2BlCj1%2Bulnn80ZI0HrGJxaE2mmwIhAIoXtws9gSP6fsRcKz2D02JCYj3dzxyXCqQpgXF7sHO5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyBYXIHLGZNAtkJFkq3ANHxrAu2kV6mc2zAxINfrF2Uy%2BQsn3Cicok5kgxuPhmlj07w3Mayi4rgEdSC%2F2F3KxCC9jcH9dKFs6R4eIzkW%2B0FhF%2FfftdRMjQ0Znel11dQ340sXH0yc0roiMbkRcosK3pfWccJclnpQdO2NpzFY2rNetbADUNuPV2gNTkMcASqPP9QmnL38vpp%2FgjEC4USVTntUG2rM0WntNVYvZb3UFdvPVuVqtrUqNCZsRF6TmxEZv5g9I0uykSEFL%2F24IlkSqmfhNU8L1xj6L23u7hEF6xiLyrp8ZwwHvtpJ9glcIQYwi4gyaa9iWGWB0WCCKtMOqAIXAdHWrZjR8UpnjUsGMWGr7japDntDy1pApPfSgYhm%2B1blZIJH3STMmWCA2ZUDDg0UtqdLfLL%2F8cB%2FGwzI82u9YbKTT91REDEsNow%2FSu%2BEeWY5kiY1d6aMPBlRgZusTF6QsMfYQhzbF2nHPfuzxZ9tUFzZHE9%2FC29awwKuOE9dwlXqLhaLPPUW6mAv3zWnUrMBkO1aFx5qpyQE36md8aFnTO36%2BOE04KMAqmNQforbHKcU5%2BEJyZIVzgctawbaR%2B2WBbULivjN4Ak8Iu1GiNlyuhRcp4Df41vS3iqXpRw4P6A3Iizlyr8%2FPoQDD2g4rDBjqkAQZ2t5Fpo5g43nKrF9pHDkaJlZSC7HV2ZKSYU9bV8f%2BURJ9yYFmc%2Fn5Uel%2BjTsfaPulpeaPrFVuKwcBI%2BYwIIJK39GdDaA4%2FKjRC2%2BzOEuIGmRGf0ri9c%2FTI%2F14tIlowBQ90dvCynNWx4%2Bmbh3AfrIZwIxkT9fENssWqfc%2FEKWX8swLBC0YDQxxAPmEMn0aByjxFFmlB9%2FQeJ8bl5sZaYW41wKGi&X-Amz-Signature=557335834f2b748df06bd2460c5a97ef82d684e6cf680a0f7222e5170fdcc1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZJNTC5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ26%2BX0U%2FYobXWLQaI%2BlCj1%2Bulnn80ZI0HrGJxaE2mmwIhAIoXtws9gSP6fsRcKz2D02JCYj3dzxyXCqQpgXF7sHO5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyBYXIHLGZNAtkJFkq3ANHxrAu2kV6mc2zAxINfrF2Uy%2BQsn3Cicok5kgxuPhmlj07w3Mayi4rgEdSC%2F2F3KxCC9jcH9dKFs6R4eIzkW%2B0FhF%2FfftdRMjQ0Znel11dQ340sXH0yc0roiMbkRcosK3pfWccJclnpQdO2NpzFY2rNetbADUNuPV2gNTkMcASqPP9QmnL38vpp%2FgjEC4USVTntUG2rM0WntNVYvZb3UFdvPVuVqtrUqNCZsRF6TmxEZv5g9I0uykSEFL%2F24IlkSqmfhNU8L1xj6L23u7hEF6xiLyrp8ZwwHvtpJ9glcIQYwi4gyaa9iWGWB0WCCKtMOqAIXAdHWrZjR8UpnjUsGMWGr7japDntDy1pApPfSgYhm%2B1blZIJH3STMmWCA2ZUDDg0UtqdLfLL%2F8cB%2FGwzI82u9YbKTT91REDEsNow%2FSu%2BEeWY5kiY1d6aMPBlRgZusTF6QsMfYQhzbF2nHPfuzxZ9tUFzZHE9%2FC29awwKuOE9dwlXqLhaLPPUW6mAv3zWnUrMBkO1aFx5qpyQE36md8aFnTO36%2BOE04KMAqmNQforbHKcU5%2BEJyZIVzgctawbaR%2B2WBbULivjN4Ak8Iu1GiNlyuhRcp4Df41vS3iqXpRw4P6A3Iizlyr8%2FPoQDD2g4rDBjqkAQZ2t5Fpo5g43nKrF9pHDkaJlZSC7HV2ZKSYU9bV8f%2BURJ9yYFmc%2Fn5Uel%2BjTsfaPulpeaPrFVuKwcBI%2BYwIIJK39GdDaA4%2FKjRC2%2BzOEuIGmRGf0ri9c%2FTI%2F14tIlowBQ90dvCynNWx4%2Bmbh3AfrIZwIxkT9fENssWqfc%2FEKWX8swLBC0YDQxxAPmEMn0aByjxFFmlB9%2FQeJ8bl5sZaYW41wKGi&X-Amz-Signature=554564eea78f1ea621301ff86771be604fa136aa9120183402e8c726ce05e59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
