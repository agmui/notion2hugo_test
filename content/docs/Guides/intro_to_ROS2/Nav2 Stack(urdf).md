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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPZBK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJFMEMCH26OILxn0OFvV2KQTD0WzK10Jk8aTbmXsBA75VNPQIkCICCTCgnWHsb5YQAgNmHg1ZegnFSvrKjB0zGcJ0Ido4CbKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW%2BQAgPVqqiGPgZPcq3APn%2F%2Bm2dtcN5KOrEWY%2B45PS7k3kZqHhfdclDltZ98sbDkK5d5lCzKMgXTD5xlDo6wDJuoVbkZ0nCqeDt%2BPzJchmzImLz7FTbT4jEZAUnsONgqLdqZAPBnjP%2FJzmip9wsHVBc1d%2BKyGF53eZkf71zv8ULwFpD%2F8qM7Bnln2DNNj5pdkp4VKu2%2FgapJAmslY8n%2FrVCp141pNPo%2F8%2BfzFCfbbD5OG2ualYUSubwZKg8jLvkgqzQnhdyl1wrf5nyvQQzRXFdoMKIVC1JOHxcOzPhz5DQXBOiDJe2Aw%2FkunChGc4BzNnSBjxkjLnvgEuiP1gKzscOGVwTUJaQ6vPKqHKzhLYI50i%2B4iZCAW29s69AvHSs612hqX0LN9TFpLZPTbApKveRbH671NW%2BHK6o%2F6eEjyxjAhkKm7cP%2BMyEagszx%2FucVhAfnJVCz2F%2FlS0ELtpjXHVEWkKzv3Ei%2FDGxeTzyh1wCvbiK8f%2BTtbV9HPKQ1jZI9SJWPaqJdvvw70OPqpilFzMKNO2Du9mypCR2sz8upLfIPKK8wRYbWVW%2BEoulvHUBN6853zERFc61eDClXhx83DB6uqbLs9fzjMiGuRilANvqF7LjpZkcTSMuXgNZ3lpNM6XxcLo6RQqdbOWaTCA6uDABjqnAVA66myA%2B5XQMuFONmLF2NntRtDZpDC3jj2i3lXqEVDYZFhx6Q%2FWPb2QSttPnSE1QwBVNwlYfLIInMyBCmEmqEs%2BlrOtSez9zM8nrrH3VYmPylqFlm9E48Hk%2B180KYGi1%2FdnsmcxaZLwV%2BO0fZhGFo3rxqhA15Zux4SE%2BZF%2Bz05z4OEwNeUgSFjmmxzsU8yKnBNARC7hi73caTdzBwn05xJ%2FZjymGO0R&X-Amz-Signature=6f8b0e9d553a789d1cb079660b699e83489badeb841d1e6b3d8f2e13ea939ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPZBK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJFMEMCH26OILxn0OFvV2KQTD0WzK10Jk8aTbmXsBA75VNPQIkCICCTCgnWHsb5YQAgNmHg1ZegnFSvrKjB0zGcJ0Ido4CbKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW%2BQAgPVqqiGPgZPcq3APn%2F%2Bm2dtcN5KOrEWY%2B45PS7k3kZqHhfdclDltZ98sbDkK5d5lCzKMgXTD5xlDo6wDJuoVbkZ0nCqeDt%2BPzJchmzImLz7FTbT4jEZAUnsONgqLdqZAPBnjP%2FJzmip9wsHVBc1d%2BKyGF53eZkf71zv8ULwFpD%2F8qM7Bnln2DNNj5pdkp4VKu2%2FgapJAmslY8n%2FrVCp141pNPo%2F8%2BfzFCfbbD5OG2ualYUSubwZKg8jLvkgqzQnhdyl1wrf5nyvQQzRXFdoMKIVC1JOHxcOzPhz5DQXBOiDJe2Aw%2FkunChGc4BzNnSBjxkjLnvgEuiP1gKzscOGVwTUJaQ6vPKqHKzhLYI50i%2B4iZCAW29s69AvHSs612hqX0LN9TFpLZPTbApKveRbH671NW%2BHK6o%2F6eEjyxjAhkKm7cP%2BMyEagszx%2FucVhAfnJVCz2F%2FlS0ELtpjXHVEWkKzv3Ei%2FDGxeTzyh1wCvbiK8f%2BTtbV9HPKQ1jZI9SJWPaqJdvvw70OPqpilFzMKNO2Du9mypCR2sz8upLfIPKK8wRYbWVW%2BEoulvHUBN6853zERFc61eDClXhx83DB6uqbLs9fzjMiGuRilANvqF7LjpZkcTSMuXgNZ3lpNM6XxcLo6RQqdbOWaTCA6uDABjqnAVA66myA%2B5XQMuFONmLF2NntRtDZpDC3jj2i3lXqEVDYZFhx6Q%2FWPb2QSttPnSE1QwBVNwlYfLIInMyBCmEmqEs%2BlrOtSez9zM8nrrH3VYmPylqFlm9E48Hk%2B180KYGi1%2FdnsmcxaZLwV%2BO0fZhGFo3rxqhA15Zux4SE%2BZF%2Bz05z4OEwNeUgSFjmmxzsU8yKnBNARC7hi73caTdzBwn05xJ%2FZjymGO0R&X-Amz-Signature=dca694ae23387a36e8e3757576f031de3a47a71c4007c30e1f425ad7741a9c33&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPZBK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJFMEMCH26OILxn0OFvV2KQTD0WzK10Jk8aTbmXsBA75VNPQIkCICCTCgnWHsb5YQAgNmHg1ZegnFSvrKjB0zGcJ0Ido4CbKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW%2BQAgPVqqiGPgZPcq3APn%2F%2Bm2dtcN5KOrEWY%2B45PS7k3kZqHhfdclDltZ98sbDkK5d5lCzKMgXTD5xlDo6wDJuoVbkZ0nCqeDt%2BPzJchmzImLz7FTbT4jEZAUnsONgqLdqZAPBnjP%2FJzmip9wsHVBc1d%2BKyGF53eZkf71zv8ULwFpD%2F8qM7Bnln2DNNj5pdkp4VKu2%2FgapJAmslY8n%2FrVCp141pNPo%2F8%2BfzFCfbbD5OG2ualYUSubwZKg8jLvkgqzQnhdyl1wrf5nyvQQzRXFdoMKIVC1JOHxcOzPhz5DQXBOiDJe2Aw%2FkunChGc4BzNnSBjxkjLnvgEuiP1gKzscOGVwTUJaQ6vPKqHKzhLYI50i%2B4iZCAW29s69AvHSs612hqX0LN9TFpLZPTbApKveRbH671NW%2BHK6o%2F6eEjyxjAhkKm7cP%2BMyEagszx%2FucVhAfnJVCz2F%2FlS0ELtpjXHVEWkKzv3Ei%2FDGxeTzyh1wCvbiK8f%2BTtbV9HPKQ1jZI9SJWPaqJdvvw70OPqpilFzMKNO2Du9mypCR2sz8upLfIPKK8wRYbWVW%2BEoulvHUBN6853zERFc61eDClXhx83DB6uqbLs9fzjMiGuRilANvqF7LjpZkcTSMuXgNZ3lpNM6XxcLo6RQqdbOWaTCA6uDABjqnAVA66myA%2B5XQMuFONmLF2NntRtDZpDC3jj2i3lXqEVDYZFhx6Q%2FWPb2QSttPnSE1QwBVNwlYfLIInMyBCmEmqEs%2BlrOtSez9zM8nrrH3VYmPylqFlm9E48Hk%2B180KYGi1%2FdnsmcxaZLwV%2BO0fZhGFo3rxqhA15Zux4SE%2BZF%2Bz05z4OEwNeUgSFjmmxzsU8yKnBNARC7hi73caTdzBwn05xJ%2FZjymGO0R&X-Amz-Signature=c61474f02db16810bd18c99e7ff0e2f7fe2f26280e7e31a41d4934682cd99087&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPZBK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJFMEMCH26OILxn0OFvV2KQTD0WzK10Jk8aTbmXsBA75VNPQIkCICCTCgnWHsb5YQAgNmHg1ZegnFSvrKjB0zGcJ0Ido4CbKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW%2BQAgPVqqiGPgZPcq3APn%2F%2Bm2dtcN5KOrEWY%2B45PS7k3kZqHhfdclDltZ98sbDkK5d5lCzKMgXTD5xlDo6wDJuoVbkZ0nCqeDt%2BPzJchmzImLz7FTbT4jEZAUnsONgqLdqZAPBnjP%2FJzmip9wsHVBc1d%2BKyGF53eZkf71zv8ULwFpD%2F8qM7Bnln2DNNj5pdkp4VKu2%2FgapJAmslY8n%2FrVCp141pNPo%2F8%2BfzFCfbbD5OG2ualYUSubwZKg8jLvkgqzQnhdyl1wrf5nyvQQzRXFdoMKIVC1JOHxcOzPhz5DQXBOiDJe2Aw%2FkunChGc4BzNnSBjxkjLnvgEuiP1gKzscOGVwTUJaQ6vPKqHKzhLYI50i%2B4iZCAW29s69AvHSs612hqX0LN9TFpLZPTbApKveRbH671NW%2BHK6o%2F6eEjyxjAhkKm7cP%2BMyEagszx%2FucVhAfnJVCz2F%2FlS0ELtpjXHVEWkKzv3Ei%2FDGxeTzyh1wCvbiK8f%2BTtbV9HPKQ1jZI9SJWPaqJdvvw70OPqpilFzMKNO2Du9mypCR2sz8upLfIPKK8wRYbWVW%2BEoulvHUBN6853zERFc61eDClXhx83DB6uqbLs9fzjMiGuRilANvqF7LjpZkcTSMuXgNZ3lpNM6XxcLo6RQqdbOWaTCA6uDABjqnAVA66myA%2B5XQMuFONmLF2NntRtDZpDC3jj2i3lXqEVDYZFhx6Q%2FWPb2QSttPnSE1QwBVNwlYfLIInMyBCmEmqEs%2BlrOtSez9zM8nrrH3VYmPylqFlm9E48Hk%2B180KYGi1%2FdnsmcxaZLwV%2BO0fZhGFo3rxqhA15Zux4SE%2BZF%2Bz05z4OEwNeUgSFjmmxzsU8yKnBNARC7hi73caTdzBwn05xJ%2FZjymGO0R&X-Amz-Signature=5211fdedcf5c350d1504e77b0a5efabae2fc178560b0dffb8f55c3154fef9670&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPZBK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJFMEMCH26OILxn0OFvV2KQTD0WzK10Jk8aTbmXsBA75VNPQIkCICCTCgnWHsb5YQAgNmHg1ZegnFSvrKjB0zGcJ0Ido4CbKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW%2BQAgPVqqiGPgZPcq3APn%2F%2Bm2dtcN5KOrEWY%2B45PS7k3kZqHhfdclDltZ98sbDkK5d5lCzKMgXTD5xlDo6wDJuoVbkZ0nCqeDt%2BPzJchmzImLz7FTbT4jEZAUnsONgqLdqZAPBnjP%2FJzmip9wsHVBc1d%2BKyGF53eZkf71zv8ULwFpD%2F8qM7Bnln2DNNj5pdkp4VKu2%2FgapJAmslY8n%2FrVCp141pNPo%2F8%2BfzFCfbbD5OG2ualYUSubwZKg8jLvkgqzQnhdyl1wrf5nyvQQzRXFdoMKIVC1JOHxcOzPhz5DQXBOiDJe2Aw%2FkunChGc4BzNnSBjxkjLnvgEuiP1gKzscOGVwTUJaQ6vPKqHKzhLYI50i%2B4iZCAW29s69AvHSs612hqX0LN9TFpLZPTbApKveRbH671NW%2BHK6o%2F6eEjyxjAhkKm7cP%2BMyEagszx%2FucVhAfnJVCz2F%2FlS0ELtpjXHVEWkKzv3Ei%2FDGxeTzyh1wCvbiK8f%2BTtbV9HPKQ1jZI9SJWPaqJdvvw70OPqpilFzMKNO2Du9mypCR2sz8upLfIPKK8wRYbWVW%2BEoulvHUBN6853zERFc61eDClXhx83DB6uqbLs9fzjMiGuRilANvqF7LjpZkcTSMuXgNZ3lpNM6XxcLo6RQqdbOWaTCA6uDABjqnAVA66myA%2B5XQMuFONmLF2NntRtDZpDC3jj2i3lXqEVDYZFhx6Q%2FWPb2QSttPnSE1QwBVNwlYfLIInMyBCmEmqEs%2BlrOtSez9zM8nrrH3VYmPylqFlm9E48Hk%2B180KYGi1%2FdnsmcxaZLwV%2BO0fZhGFo3rxqhA15Zux4SE%2BZF%2Bz05z4OEwNeUgSFjmmxzsU8yKnBNARC7hi73caTdzBwn05xJ%2FZjymGO0R&X-Amz-Signature=67dc33681c714fcbfbcc751fd97aeaef318c94bd3fa10701163cce729de5e796&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NPZBK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJFMEMCH26OILxn0OFvV2KQTD0WzK10Jk8aTbmXsBA75VNPQIkCICCTCgnWHsb5YQAgNmHg1ZegnFSvrKjB0zGcJ0Ido4CbKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW%2BQAgPVqqiGPgZPcq3APn%2F%2Bm2dtcN5KOrEWY%2B45PS7k3kZqHhfdclDltZ98sbDkK5d5lCzKMgXTD5xlDo6wDJuoVbkZ0nCqeDt%2BPzJchmzImLz7FTbT4jEZAUnsONgqLdqZAPBnjP%2FJzmip9wsHVBc1d%2BKyGF53eZkf71zv8ULwFpD%2F8qM7Bnln2DNNj5pdkp4VKu2%2FgapJAmslY8n%2FrVCp141pNPo%2F8%2BfzFCfbbD5OG2ualYUSubwZKg8jLvkgqzQnhdyl1wrf5nyvQQzRXFdoMKIVC1JOHxcOzPhz5DQXBOiDJe2Aw%2FkunChGc4BzNnSBjxkjLnvgEuiP1gKzscOGVwTUJaQ6vPKqHKzhLYI50i%2B4iZCAW29s69AvHSs612hqX0LN9TFpLZPTbApKveRbH671NW%2BHK6o%2F6eEjyxjAhkKm7cP%2BMyEagszx%2FucVhAfnJVCz2F%2FlS0ELtpjXHVEWkKzv3Ei%2FDGxeTzyh1wCvbiK8f%2BTtbV9HPKQ1jZI9SJWPaqJdvvw70OPqpilFzMKNO2Du9mypCR2sz8upLfIPKK8wRYbWVW%2BEoulvHUBN6853zERFc61eDClXhx83DB6uqbLs9fzjMiGuRilANvqF7LjpZkcTSMuXgNZ3lpNM6XxcLo6RQqdbOWaTCA6uDABjqnAVA66myA%2B5XQMuFONmLF2NntRtDZpDC3jj2i3lXqEVDYZFhx6Q%2FWPb2QSttPnSE1QwBVNwlYfLIInMyBCmEmqEs%2BlrOtSez9zM8nrrH3VYmPylqFlm9E48Hk%2B180KYGi1%2FdnsmcxaZLwV%2BO0fZhGFo3rxqhA15Zux4SE%2BZF%2Bz05z4OEwNeUgSFjmmxzsU8yKnBNARC7hi73caTdzBwn05xJ%2FZjymGO0R&X-Amz-Signature=a2a755b0a58ee426652b05c9339673ea61a6cd3b2d0110968164cc61848a977a&X-Amz-SignedHeaders=host&x-id=GetObject)
