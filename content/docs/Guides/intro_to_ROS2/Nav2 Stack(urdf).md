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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JXH2JF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDI5OzmYN%2Bl57xrS2m9KeAULvPE57njBjvgZw2iIUXzVwIgaO8wZ1ea1CnMVVUlfKqLgQt9kcLAN969ECX8zTM%2B3j4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOvHkTUCY6Lc86fwoyrcA6JHixoP%2F7FLd1QCcFl3VY2I3Y4TbMPSvnTZ4tJ5PKObfR11DhNZrv431p%2BFLJLXnZewj0rM0O1qNF3ydW2I7cUIBq%2BUKRn27H9u%2F7bv%2FZJkAn1BUoiukrjD%2BV3jKVNKL9YOsr4stlNIUmyqQI%2FIrQLEGcxnOodpwi5F1R35Ey85BwrAWs90b21vfsiVb7IgoPha4hYL9W4bqwXel1onN7GI%2FOBSg2i%2FfNWMSPOw7%2BLQ5t7oYvztrvB6hyPUcleoQ0AskBIfV1%2BaKudncBuK29Ax84j0JW9KV32oNFgqDzR99W93eINl%2BfoFl42JUFMoEej4HdDxfOiLiZKlhINn5zw4bBX6kmv5SGXAe%2BKlDVL3GmxNFl1yh%2F%2FovB42W5ZWc8lAlxGMESe%2B6fBMXGCFDqq5qAWKlcqPWK9hJZdVrfCXwJjsDFnuZix841pMQWmf6fYkq6DjqO8Nprmv847SdKdiHOLFPsXywMRB%2BF8rRYXDBhKxfbDDjjsGcK5uh3G02ojS5RJlzSg%2Bbn%2B1KR5Eu%2BN46vk3ZiFIRz4cNVcpTh3T3uD0YTogAAm%2FcKbUZVJUGyd7mPLkjgotpyWj8PojbVQLo8lh21F%2FFuE2lDAKvZMWiDYJN2Ba59twcnGRMJr3iMIGOqUB%2FFki7f2YJqU5nTuK2d6PJ9oshC9dFGu%2FDvN86UagjjWxOCyjIX3Qcf8TePLkrxbY%2FUV3i371dgW%2F2Pkq7IFbfJAaoeY9ZRM8S4ghPRTBLyR1ofE8nZQ%2BY1KMHhmi2mm%2BBz%2BHknBNl7UHNsD8%2BMXf6UBOD02gBE2WlldycT4hUtEyWjF5ULgYreP0F%2B09%2BQ6fblya8Z5ouvgM%2B3YTpLApNRTDX4Uc&X-Amz-Signature=4af9a657468a3983333786013b580a638515906133b84e83c5a59e4a5de75ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JXH2JF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDI5OzmYN%2Bl57xrS2m9KeAULvPE57njBjvgZw2iIUXzVwIgaO8wZ1ea1CnMVVUlfKqLgQt9kcLAN969ECX8zTM%2B3j4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOvHkTUCY6Lc86fwoyrcA6JHixoP%2F7FLd1QCcFl3VY2I3Y4TbMPSvnTZ4tJ5PKObfR11DhNZrv431p%2BFLJLXnZewj0rM0O1qNF3ydW2I7cUIBq%2BUKRn27H9u%2F7bv%2FZJkAn1BUoiukrjD%2BV3jKVNKL9YOsr4stlNIUmyqQI%2FIrQLEGcxnOodpwi5F1R35Ey85BwrAWs90b21vfsiVb7IgoPha4hYL9W4bqwXel1onN7GI%2FOBSg2i%2FfNWMSPOw7%2BLQ5t7oYvztrvB6hyPUcleoQ0AskBIfV1%2BaKudncBuK29Ax84j0JW9KV32oNFgqDzR99W93eINl%2BfoFl42JUFMoEej4HdDxfOiLiZKlhINn5zw4bBX6kmv5SGXAe%2BKlDVL3GmxNFl1yh%2F%2FovB42W5ZWc8lAlxGMESe%2B6fBMXGCFDqq5qAWKlcqPWK9hJZdVrfCXwJjsDFnuZix841pMQWmf6fYkq6DjqO8Nprmv847SdKdiHOLFPsXywMRB%2BF8rRYXDBhKxfbDDjjsGcK5uh3G02ojS5RJlzSg%2Bbn%2B1KR5Eu%2BN46vk3ZiFIRz4cNVcpTh3T3uD0YTogAAm%2FcKbUZVJUGyd7mPLkjgotpyWj8PojbVQLo8lh21F%2FFuE2lDAKvZMWiDYJN2Ba59twcnGRMJr3iMIGOqUB%2FFki7f2YJqU5nTuK2d6PJ9oshC9dFGu%2FDvN86UagjjWxOCyjIX3Qcf8TePLkrxbY%2FUV3i371dgW%2F2Pkq7IFbfJAaoeY9ZRM8S4ghPRTBLyR1ofE8nZQ%2BY1KMHhmi2mm%2BBz%2BHknBNl7UHNsD8%2BMXf6UBOD02gBE2WlldycT4hUtEyWjF5ULgYreP0F%2B09%2BQ6fblya8Z5ouvgM%2B3YTpLApNRTDX4Uc&X-Amz-Signature=7cc3d8c7e7f3c8f24ed37c9a253b3712281912257a4162dff96b5b3248a4c207&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JXH2JF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDI5OzmYN%2Bl57xrS2m9KeAULvPE57njBjvgZw2iIUXzVwIgaO8wZ1ea1CnMVVUlfKqLgQt9kcLAN969ECX8zTM%2B3j4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOvHkTUCY6Lc86fwoyrcA6JHixoP%2F7FLd1QCcFl3VY2I3Y4TbMPSvnTZ4tJ5PKObfR11DhNZrv431p%2BFLJLXnZewj0rM0O1qNF3ydW2I7cUIBq%2BUKRn27H9u%2F7bv%2FZJkAn1BUoiukrjD%2BV3jKVNKL9YOsr4stlNIUmyqQI%2FIrQLEGcxnOodpwi5F1R35Ey85BwrAWs90b21vfsiVb7IgoPha4hYL9W4bqwXel1onN7GI%2FOBSg2i%2FfNWMSPOw7%2BLQ5t7oYvztrvB6hyPUcleoQ0AskBIfV1%2BaKudncBuK29Ax84j0JW9KV32oNFgqDzR99W93eINl%2BfoFl42JUFMoEej4HdDxfOiLiZKlhINn5zw4bBX6kmv5SGXAe%2BKlDVL3GmxNFl1yh%2F%2FovB42W5ZWc8lAlxGMESe%2B6fBMXGCFDqq5qAWKlcqPWK9hJZdVrfCXwJjsDFnuZix841pMQWmf6fYkq6DjqO8Nprmv847SdKdiHOLFPsXywMRB%2BF8rRYXDBhKxfbDDjjsGcK5uh3G02ojS5RJlzSg%2Bbn%2B1KR5Eu%2BN46vk3ZiFIRz4cNVcpTh3T3uD0YTogAAm%2FcKbUZVJUGyd7mPLkjgotpyWj8PojbVQLo8lh21F%2FFuE2lDAKvZMWiDYJN2Ba59twcnGRMJr3iMIGOqUB%2FFki7f2YJqU5nTuK2d6PJ9oshC9dFGu%2FDvN86UagjjWxOCyjIX3Qcf8TePLkrxbY%2FUV3i371dgW%2F2Pkq7IFbfJAaoeY9ZRM8S4ghPRTBLyR1ofE8nZQ%2BY1KMHhmi2mm%2BBz%2BHknBNl7UHNsD8%2BMXf6UBOD02gBE2WlldycT4hUtEyWjF5ULgYreP0F%2B09%2BQ6fblya8Z5ouvgM%2B3YTpLApNRTDX4Uc&X-Amz-Signature=009f731289ff8e67ac76c8650528b64af7bdba80c5d78f0334472f3bd39e3140&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JXH2JF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDI5OzmYN%2Bl57xrS2m9KeAULvPE57njBjvgZw2iIUXzVwIgaO8wZ1ea1CnMVVUlfKqLgQt9kcLAN969ECX8zTM%2B3j4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOvHkTUCY6Lc86fwoyrcA6JHixoP%2F7FLd1QCcFl3VY2I3Y4TbMPSvnTZ4tJ5PKObfR11DhNZrv431p%2BFLJLXnZewj0rM0O1qNF3ydW2I7cUIBq%2BUKRn27H9u%2F7bv%2FZJkAn1BUoiukrjD%2BV3jKVNKL9YOsr4stlNIUmyqQI%2FIrQLEGcxnOodpwi5F1R35Ey85BwrAWs90b21vfsiVb7IgoPha4hYL9W4bqwXel1onN7GI%2FOBSg2i%2FfNWMSPOw7%2BLQ5t7oYvztrvB6hyPUcleoQ0AskBIfV1%2BaKudncBuK29Ax84j0JW9KV32oNFgqDzR99W93eINl%2BfoFl42JUFMoEej4HdDxfOiLiZKlhINn5zw4bBX6kmv5SGXAe%2BKlDVL3GmxNFl1yh%2F%2FovB42W5ZWc8lAlxGMESe%2B6fBMXGCFDqq5qAWKlcqPWK9hJZdVrfCXwJjsDFnuZix841pMQWmf6fYkq6DjqO8Nprmv847SdKdiHOLFPsXywMRB%2BF8rRYXDBhKxfbDDjjsGcK5uh3G02ojS5RJlzSg%2Bbn%2B1KR5Eu%2BN46vk3ZiFIRz4cNVcpTh3T3uD0YTogAAm%2FcKbUZVJUGyd7mPLkjgotpyWj8PojbVQLo8lh21F%2FFuE2lDAKvZMWiDYJN2Ba59twcnGRMJr3iMIGOqUB%2FFki7f2YJqU5nTuK2d6PJ9oshC9dFGu%2FDvN86UagjjWxOCyjIX3Qcf8TePLkrxbY%2FUV3i371dgW%2F2Pkq7IFbfJAaoeY9ZRM8S4ghPRTBLyR1ofE8nZQ%2BY1KMHhmi2mm%2BBz%2BHknBNl7UHNsD8%2BMXf6UBOD02gBE2WlldycT4hUtEyWjF5ULgYreP0F%2B09%2BQ6fblya8Z5ouvgM%2B3YTpLApNRTDX4Uc&X-Amz-Signature=db65ed31560dd4371be4e98b0d2b5035f27bd64047d2c23893e845c7605db7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JXH2JF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDI5OzmYN%2Bl57xrS2m9KeAULvPE57njBjvgZw2iIUXzVwIgaO8wZ1ea1CnMVVUlfKqLgQt9kcLAN969ECX8zTM%2B3j4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOvHkTUCY6Lc86fwoyrcA6JHixoP%2F7FLd1QCcFl3VY2I3Y4TbMPSvnTZ4tJ5PKObfR11DhNZrv431p%2BFLJLXnZewj0rM0O1qNF3ydW2I7cUIBq%2BUKRn27H9u%2F7bv%2FZJkAn1BUoiukrjD%2BV3jKVNKL9YOsr4stlNIUmyqQI%2FIrQLEGcxnOodpwi5F1R35Ey85BwrAWs90b21vfsiVb7IgoPha4hYL9W4bqwXel1onN7GI%2FOBSg2i%2FfNWMSPOw7%2BLQ5t7oYvztrvB6hyPUcleoQ0AskBIfV1%2BaKudncBuK29Ax84j0JW9KV32oNFgqDzR99W93eINl%2BfoFl42JUFMoEej4HdDxfOiLiZKlhINn5zw4bBX6kmv5SGXAe%2BKlDVL3GmxNFl1yh%2F%2FovB42W5ZWc8lAlxGMESe%2B6fBMXGCFDqq5qAWKlcqPWK9hJZdVrfCXwJjsDFnuZix841pMQWmf6fYkq6DjqO8Nprmv847SdKdiHOLFPsXywMRB%2BF8rRYXDBhKxfbDDjjsGcK5uh3G02ojS5RJlzSg%2Bbn%2B1KR5Eu%2BN46vk3ZiFIRz4cNVcpTh3T3uD0YTogAAm%2FcKbUZVJUGyd7mPLkjgotpyWj8PojbVQLo8lh21F%2FFuE2lDAKvZMWiDYJN2Ba59twcnGRMJr3iMIGOqUB%2FFki7f2YJqU5nTuK2d6PJ9oshC9dFGu%2FDvN86UagjjWxOCyjIX3Qcf8TePLkrxbY%2FUV3i371dgW%2F2Pkq7IFbfJAaoeY9ZRM8S4ghPRTBLyR1ofE8nZQ%2BY1KMHhmi2mm%2BBz%2BHknBNl7UHNsD8%2BMXf6UBOD02gBE2WlldycT4hUtEyWjF5ULgYreP0F%2B09%2BQ6fblya8Z5ouvgM%2B3YTpLApNRTDX4Uc&X-Amz-Signature=cf242d087b4ada3656208add539e0a44cdaf6fd739f63dd03b2219af37cf4ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JXH2JF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDI5OzmYN%2Bl57xrS2m9KeAULvPE57njBjvgZw2iIUXzVwIgaO8wZ1ea1CnMVVUlfKqLgQt9kcLAN969ECX8zTM%2B3j4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOvHkTUCY6Lc86fwoyrcA6JHixoP%2F7FLd1QCcFl3VY2I3Y4TbMPSvnTZ4tJ5PKObfR11DhNZrv431p%2BFLJLXnZewj0rM0O1qNF3ydW2I7cUIBq%2BUKRn27H9u%2F7bv%2FZJkAn1BUoiukrjD%2BV3jKVNKL9YOsr4stlNIUmyqQI%2FIrQLEGcxnOodpwi5F1R35Ey85BwrAWs90b21vfsiVb7IgoPha4hYL9W4bqwXel1onN7GI%2FOBSg2i%2FfNWMSPOw7%2BLQ5t7oYvztrvB6hyPUcleoQ0AskBIfV1%2BaKudncBuK29Ax84j0JW9KV32oNFgqDzR99W93eINl%2BfoFl42JUFMoEej4HdDxfOiLiZKlhINn5zw4bBX6kmv5SGXAe%2BKlDVL3GmxNFl1yh%2F%2FovB42W5ZWc8lAlxGMESe%2B6fBMXGCFDqq5qAWKlcqPWK9hJZdVrfCXwJjsDFnuZix841pMQWmf6fYkq6DjqO8Nprmv847SdKdiHOLFPsXywMRB%2BF8rRYXDBhKxfbDDjjsGcK5uh3G02ojS5RJlzSg%2Bbn%2B1KR5Eu%2BN46vk3ZiFIRz4cNVcpTh3T3uD0YTogAAm%2FcKbUZVJUGyd7mPLkjgotpyWj8PojbVQLo8lh21F%2FFuE2lDAKvZMWiDYJN2Ba59twcnGRMJr3iMIGOqUB%2FFki7f2YJqU5nTuK2d6PJ9oshC9dFGu%2FDvN86UagjjWxOCyjIX3Qcf8TePLkrxbY%2FUV3i371dgW%2F2Pkq7IFbfJAaoeY9ZRM8S4ghPRTBLyR1ofE8nZQ%2BY1KMHhmi2mm%2BBz%2BHknBNl7UHNsD8%2BMXf6UBOD02gBE2WlldycT4hUtEyWjF5ULgYreP0F%2B09%2BQ6fblya8Z5ouvgM%2B3YTpLApNRTDX4Uc&X-Amz-Signature=dbff9c8d233b2110349fb4e3b0fa145f28841b4831b639fb5f91cf012db8a007&X-Amz-SignedHeaders=host&x-id=GetObject)
