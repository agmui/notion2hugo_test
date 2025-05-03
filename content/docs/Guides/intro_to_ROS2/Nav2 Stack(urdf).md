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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=a8137bf592726a8fbfbf31b80b2a5f24de3e506f168ca47173b9e29a79a4cc36&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=8da20ac1f88e12003cc2b2a09da99b6650c9f68631f5c9d6ec5af9b849303db0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=508935f6423c52c3f2bbb74623a406ef86a9bc804c87a68f295cae06f287fcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=a2955135e4d4a9e4645294a5d8205192a16ec86ec515c2b306b142550f6a5c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=140790b62b7d547cca21e0032be9f2e892a4a0d0f7703600d2401e96a38def73&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675URTVY4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBm9Vz56dOmVSbsCCNOPaycSQBV4pVNOQlNhYsVP7BvhAiAoaBmV6OT04ot3YDvaA5YJCb3zpB%2FMShvd2nWRUo19sSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDG4X5dWNcXxFhy7kKtwDeyQ0I5nK%2Bf5rlkQBdo1x9DW%2Bd8q%2FEDDSlZ99JJ673ew61Lciphn6kmFjMvwkAAdVp8Id5PeBSRjEh0mr3iNWaVgxKhDaygIF6u94sv4MaajQfm0VJaN6SpBkzTZQrqEw4fKicMhmxpc0dqlveu9AXH1yU2fFhClzB8A9dIpzis8fZjL%2F7FLr%2B9NKMiUTOOAfG4UrORy99vljGnLJmAxNAYuyluvjXgOszfAZ5VEBN7Dimt71%2FdXEaC%2F%2FUu5veKygBfJdUTyJw2gZaD%2BQwdUsq3ET8%2BfEVURURYE8yT8O7Ps4PbDljDZCr%2FdAP%2FWlfQriFh0lqD1X8%2BcJXv6741q6whCCKB7a58aHcN3tMISEZOBMvQdw71%2BZH7h4WHh%2FJ%2BHQSZDhzTBxxeZPelH%2B7jWc2iXD6qO6lhEyjA8HdHjcDFrhBdlYeEQs%2BaKU20mp9pI2Q0P54363rAEXcSpK88j6KcCHVmzg6Ihd5T3u8vVJZZidiTccYAggSFghL4zHur9He%2FrLA9Cnyan2Ph0a4XSEs70NRILA5JbQn2Ka0B1SOwJ1qgedgoZM6FLK%2FCq%2F8Y7A3YudhXqyozzM2v8UYnt7aG9A5zxikF3Z5enjSZYw2em9E8CN2mtEwGPv2qYwkYfWwAY6pgEaedbR1BJuEz4fBKvKNPcHifShcGj1KcPrm7FYrC7vnJa2zI%2F19K%2FNnWlEnTt17pVOEapUIno%2BHETwvzbIDAmzNBX2U26idLfWa%2B0QdDikslutaN6injvs9OPdIuMD5gFCm12N5I%2B4fxsuC16pjd%2BkloNdZt4WfZ2SGcbCSA2FT4nfjrCZTWrIv41HP4uol7SgRGaeSHUGi%2FWlRXQT3WP9VD4U%2B9IB&X-Amz-Signature=9b73077e585c35e4703fee31e4a667e237211302d0b80edaa5c7adbe7b6df3c7&X-Amz-SignedHeaders=host&x-id=GetObject)
