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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4QDX6V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHIX1TNTl%2BLnXpM9x%2FRX6Bv8nsknBeUnEiKUxFz0c0pjAiAcpqs0434wMLzWnW0y%2Btw2zWzALz8G67BPUg40lsf2biqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQ1Xf2GlYSlPifVwKtwDNqTnTfi9CMi%2FOu0mA32gHFNqWxDrZxSeNFs4vsZvjIz7%2B2dIFkuRV2Qq6JQLdivB9oZbGVU06N6RcornjNXt%2BHZnAVSc5juW3DOLLgky%2BdXi1UHfwvHjAhy653g8BvTpxpO5Yy3vvA32ft%2BmyZo9d1g9u8Q1MzBrZlxtWiQ76jCRosKfi6FgVucEH2n7h%2Fe08fSHk%2Bfk8gQJhKaBag0yCFvdkP4NopgQyAIvlpyrSBcBZiWNg4Kdor8GqNEQNeN%2B1NFMeam12YzdrOHo3%2FBACEna9MUnup2juKG9lS72%2FBh5n3NzthYGSbu8b7ZuomZ6kk7T15GwguFXdjF6qlnNHQlVHV2dmx95CRPUvQd0JAsg%2FXTF35%2FlFqggAkoKRiAtP7fTz4uhxsagcJZC1uxmQsQNNiQP6f5HaywLM2m69uM6CcgqASxYxQptqSunleMCVxQiJ0SAiw6iu5l950rGvPojbMj10pQR%2FBeD91yH9abDy3htraOhGEYgP%2BlP4WMda%2BDcIcdBR23fCRkDyfthpvw%2FNysDevFDEpY58Ic7N%2BD33gcB2bSN%2BiePvrmGgvbbekN7o8KCO09%2FXDzGD5ujFE1oVyFfB9xGVLOWJ1mIAGvAsRgzeWB91zPSJz0w2cjavwY6pgGSWDYyi7KQz7%2FpsxHUai03q9o4D3x4VvrAaPewVH54dji4wjnQVbF5fKP1MoYE9AIgIF09WSxi1felLMAhT2rcVS30rYnFck%2F7Cjquf7D1TnyEQ%2FSvikvt4Y6J1FwrP%2FHAWZOVV7VuF5WJYzcAFcnioFHhNDXCF3XjDahVDITDe37ZJ3G931njZCm2HYkmgRlL0ipFYl2Vx4m9B05nGvvvYIRGH6uU&X-Amz-Signature=214638bdef97c52c3338241b04f34c63c7c5d200055f9fcde0f9d3a4b7c769b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4QDX6V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHIX1TNTl%2BLnXpM9x%2FRX6Bv8nsknBeUnEiKUxFz0c0pjAiAcpqs0434wMLzWnW0y%2Btw2zWzALz8G67BPUg40lsf2biqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQ1Xf2GlYSlPifVwKtwDNqTnTfi9CMi%2FOu0mA32gHFNqWxDrZxSeNFs4vsZvjIz7%2B2dIFkuRV2Qq6JQLdivB9oZbGVU06N6RcornjNXt%2BHZnAVSc5juW3DOLLgky%2BdXi1UHfwvHjAhy653g8BvTpxpO5Yy3vvA32ft%2BmyZo9d1g9u8Q1MzBrZlxtWiQ76jCRosKfi6FgVucEH2n7h%2Fe08fSHk%2Bfk8gQJhKaBag0yCFvdkP4NopgQyAIvlpyrSBcBZiWNg4Kdor8GqNEQNeN%2B1NFMeam12YzdrOHo3%2FBACEna9MUnup2juKG9lS72%2FBh5n3NzthYGSbu8b7ZuomZ6kk7T15GwguFXdjF6qlnNHQlVHV2dmx95CRPUvQd0JAsg%2FXTF35%2FlFqggAkoKRiAtP7fTz4uhxsagcJZC1uxmQsQNNiQP6f5HaywLM2m69uM6CcgqASxYxQptqSunleMCVxQiJ0SAiw6iu5l950rGvPojbMj10pQR%2FBeD91yH9abDy3htraOhGEYgP%2BlP4WMda%2BDcIcdBR23fCRkDyfthpvw%2FNysDevFDEpY58Ic7N%2BD33gcB2bSN%2BiePvrmGgvbbekN7o8KCO09%2FXDzGD5ujFE1oVyFfB9xGVLOWJ1mIAGvAsRgzeWB91zPSJz0w2cjavwY6pgGSWDYyi7KQz7%2FpsxHUai03q9o4D3x4VvrAaPewVH54dji4wjnQVbF5fKP1MoYE9AIgIF09WSxi1felLMAhT2rcVS30rYnFck%2F7Cjquf7D1TnyEQ%2FSvikvt4Y6J1FwrP%2FHAWZOVV7VuF5WJYzcAFcnioFHhNDXCF3XjDahVDITDe37ZJ3G931njZCm2HYkmgRlL0ipFYl2Vx4m9B05nGvvvYIRGH6uU&X-Amz-Signature=05dde1df309d82e1f141727a1e334043c3083a79938b9c05f67860f0b8069583&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4QDX6V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHIX1TNTl%2BLnXpM9x%2FRX6Bv8nsknBeUnEiKUxFz0c0pjAiAcpqs0434wMLzWnW0y%2Btw2zWzALz8G67BPUg40lsf2biqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQ1Xf2GlYSlPifVwKtwDNqTnTfi9CMi%2FOu0mA32gHFNqWxDrZxSeNFs4vsZvjIz7%2B2dIFkuRV2Qq6JQLdivB9oZbGVU06N6RcornjNXt%2BHZnAVSc5juW3DOLLgky%2BdXi1UHfwvHjAhy653g8BvTpxpO5Yy3vvA32ft%2BmyZo9d1g9u8Q1MzBrZlxtWiQ76jCRosKfi6FgVucEH2n7h%2Fe08fSHk%2Bfk8gQJhKaBag0yCFvdkP4NopgQyAIvlpyrSBcBZiWNg4Kdor8GqNEQNeN%2B1NFMeam12YzdrOHo3%2FBACEna9MUnup2juKG9lS72%2FBh5n3NzthYGSbu8b7ZuomZ6kk7T15GwguFXdjF6qlnNHQlVHV2dmx95CRPUvQd0JAsg%2FXTF35%2FlFqggAkoKRiAtP7fTz4uhxsagcJZC1uxmQsQNNiQP6f5HaywLM2m69uM6CcgqASxYxQptqSunleMCVxQiJ0SAiw6iu5l950rGvPojbMj10pQR%2FBeD91yH9abDy3htraOhGEYgP%2BlP4WMda%2BDcIcdBR23fCRkDyfthpvw%2FNysDevFDEpY58Ic7N%2BD33gcB2bSN%2BiePvrmGgvbbekN7o8KCO09%2FXDzGD5ujFE1oVyFfB9xGVLOWJ1mIAGvAsRgzeWB91zPSJz0w2cjavwY6pgGSWDYyi7KQz7%2FpsxHUai03q9o4D3x4VvrAaPewVH54dji4wjnQVbF5fKP1MoYE9AIgIF09WSxi1felLMAhT2rcVS30rYnFck%2F7Cjquf7D1TnyEQ%2FSvikvt4Y6J1FwrP%2FHAWZOVV7VuF5WJYzcAFcnioFHhNDXCF3XjDahVDITDe37ZJ3G931njZCm2HYkmgRlL0ipFYl2Vx4m9B05nGvvvYIRGH6uU&X-Amz-Signature=7566c451275bf977ad0d6479ea627e0e60b670fbd6d6dccc70bfa0ec5c3f56c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4QDX6V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHIX1TNTl%2BLnXpM9x%2FRX6Bv8nsknBeUnEiKUxFz0c0pjAiAcpqs0434wMLzWnW0y%2Btw2zWzALz8G67BPUg40lsf2biqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQ1Xf2GlYSlPifVwKtwDNqTnTfi9CMi%2FOu0mA32gHFNqWxDrZxSeNFs4vsZvjIz7%2B2dIFkuRV2Qq6JQLdivB9oZbGVU06N6RcornjNXt%2BHZnAVSc5juW3DOLLgky%2BdXi1UHfwvHjAhy653g8BvTpxpO5Yy3vvA32ft%2BmyZo9d1g9u8Q1MzBrZlxtWiQ76jCRosKfi6FgVucEH2n7h%2Fe08fSHk%2Bfk8gQJhKaBag0yCFvdkP4NopgQyAIvlpyrSBcBZiWNg4Kdor8GqNEQNeN%2B1NFMeam12YzdrOHo3%2FBACEna9MUnup2juKG9lS72%2FBh5n3NzthYGSbu8b7ZuomZ6kk7T15GwguFXdjF6qlnNHQlVHV2dmx95CRPUvQd0JAsg%2FXTF35%2FlFqggAkoKRiAtP7fTz4uhxsagcJZC1uxmQsQNNiQP6f5HaywLM2m69uM6CcgqASxYxQptqSunleMCVxQiJ0SAiw6iu5l950rGvPojbMj10pQR%2FBeD91yH9abDy3htraOhGEYgP%2BlP4WMda%2BDcIcdBR23fCRkDyfthpvw%2FNysDevFDEpY58Ic7N%2BD33gcB2bSN%2BiePvrmGgvbbekN7o8KCO09%2FXDzGD5ujFE1oVyFfB9xGVLOWJ1mIAGvAsRgzeWB91zPSJz0w2cjavwY6pgGSWDYyi7KQz7%2FpsxHUai03q9o4D3x4VvrAaPewVH54dji4wjnQVbF5fKP1MoYE9AIgIF09WSxi1felLMAhT2rcVS30rYnFck%2F7Cjquf7D1TnyEQ%2FSvikvt4Y6J1FwrP%2FHAWZOVV7VuF5WJYzcAFcnioFHhNDXCF3XjDahVDITDe37ZJ3G931njZCm2HYkmgRlL0ipFYl2Vx4m9B05nGvvvYIRGH6uU&X-Amz-Signature=3ed4f5f3cb270f2f45f59f3cba663f0a2a3e1e275fc0510ae6cb13cfab0b5db2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4QDX6V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHIX1TNTl%2BLnXpM9x%2FRX6Bv8nsknBeUnEiKUxFz0c0pjAiAcpqs0434wMLzWnW0y%2Btw2zWzALz8G67BPUg40lsf2biqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQ1Xf2GlYSlPifVwKtwDNqTnTfi9CMi%2FOu0mA32gHFNqWxDrZxSeNFs4vsZvjIz7%2B2dIFkuRV2Qq6JQLdivB9oZbGVU06N6RcornjNXt%2BHZnAVSc5juW3DOLLgky%2BdXi1UHfwvHjAhy653g8BvTpxpO5Yy3vvA32ft%2BmyZo9d1g9u8Q1MzBrZlxtWiQ76jCRosKfi6FgVucEH2n7h%2Fe08fSHk%2Bfk8gQJhKaBag0yCFvdkP4NopgQyAIvlpyrSBcBZiWNg4Kdor8GqNEQNeN%2B1NFMeam12YzdrOHo3%2FBACEna9MUnup2juKG9lS72%2FBh5n3NzthYGSbu8b7ZuomZ6kk7T15GwguFXdjF6qlnNHQlVHV2dmx95CRPUvQd0JAsg%2FXTF35%2FlFqggAkoKRiAtP7fTz4uhxsagcJZC1uxmQsQNNiQP6f5HaywLM2m69uM6CcgqASxYxQptqSunleMCVxQiJ0SAiw6iu5l950rGvPojbMj10pQR%2FBeD91yH9abDy3htraOhGEYgP%2BlP4WMda%2BDcIcdBR23fCRkDyfthpvw%2FNysDevFDEpY58Ic7N%2BD33gcB2bSN%2BiePvrmGgvbbekN7o8KCO09%2FXDzGD5ujFE1oVyFfB9xGVLOWJ1mIAGvAsRgzeWB91zPSJz0w2cjavwY6pgGSWDYyi7KQz7%2FpsxHUai03q9o4D3x4VvrAaPewVH54dji4wjnQVbF5fKP1MoYE9AIgIF09WSxi1felLMAhT2rcVS30rYnFck%2F7Cjquf7D1TnyEQ%2FSvikvt4Y6J1FwrP%2FHAWZOVV7VuF5WJYzcAFcnioFHhNDXCF3XjDahVDITDe37ZJ3G931njZCm2HYkmgRlL0ipFYl2Vx4m9B05nGvvvYIRGH6uU&X-Amz-Signature=e8cd46b0b16d353409dc6d913d24e461651fa3d7d6817cf485fc049ba41add74&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4QDX6V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHIX1TNTl%2BLnXpM9x%2FRX6Bv8nsknBeUnEiKUxFz0c0pjAiAcpqs0434wMLzWnW0y%2Btw2zWzALz8G67BPUg40lsf2biqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUQ1Xf2GlYSlPifVwKtwDNqTnTfi9CMi%2FOu0mA32gHFNqWxDrZxSeNFs4vsZvjIz7%2B2dIFkuRV2Qq6JQLdivB9oZbGVU06N6RcornjNXt%2BHZnAVSc5juW3DOLLgky%2BdXi1UHfwvHjAhy653g8BvTpxpO5Yy3vvA32ft%2BmyZo9d1g9u8Q1MzBrZlxtWiQ76jCRosKfi6FgVucEH2n7h%2Fe08fSHk%2Bfk8gQJhKaBag0yCFvdkP4NopgQyAIvlpyrSBcBZiWNg4Kdor8GqNEQNeN%2B1NFMeam12YzdrOHo3%2FBACEna9MUnup2juKG9lS72%2FBh5n3NzthYGSbu8b7ZuomZ6kk7T15GwguFXdjF6qlnNHQlVHV2dmx95CRPUvQd0JAsg%2FXTF35%2FlFqggAkoKRiAtP7fTz4uhxsagcJZC1uxmQsQNNiQP6f5HaywLM2m69uM6CcgqASxYxQptqSunleMCVxQiJ0SAiw6iu5l950rGvPojbMj10pQR%2FBeD91yH9abDy3htraOhGEYgP%2BlP4WMda%2BDcIcdBR23fCRkDyfthpvw%2FNysDevFDEpY58Ic7N%2BD33gcB2bSN%2BiePvrmGgvbbekN7o8KCO09%2FXDzGD5ujFE1oVyFfB9xGVLOWJ1mIAGvAsRgzeWB91zPSJz0w2cjavwY6pgGSWDYyi7KQz7%2FpsxHUai03q9o4D3x4VvrAaPewVH54dji4wjnQVbF5fKP1MoYE9AIgIF09WSxi1felLMAhT2rcVS30rYnFck%2F7Cjquf7D1TnyEQ%2FSvikvt4Y6J1FwrP%2FHAWZOVV7VuF5WJYzcAFcnioFHhNDXCF3XjDahVDITDe37ZJ3G931njZCm2HYkmgRlL0ipFYl2Vx4m9B05nGvvvYIRGH6uU&X-Amz-Signature=2252656f37fbbfa85594d0b2f9e15aaedd2d46138b6b39b77749d5ca529b4da6&X-Amz-SignedHeaders=host&x-id=GetObject)
