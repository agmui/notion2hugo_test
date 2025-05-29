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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=40d09639ba296681a1224d6ada5fee6557d0d73f4f6df185fe7212b28f3b67ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=15ffa7c38aeea166199d45ab7fde7620c99d00de59072710b2b6f6cef0978260&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=f24fcecb7e9a1c2d6a0f68501ad6d2bf14b53fd82201e88e0330e562e2be16c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=fe6d38689cb90545cb7d8ea681017618f874183c6c00c31c05ad0a4d0c9b34f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=1e6103070902ca556763ff2995d1f67bfa6ca727e33b8952ba65536f4abf76ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADTCQZU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fqxq2QOHmH1nceJoSi77QsGdpXHVmqiVWQXiifFISdwIhAOHaBgFUtykdtZ3R7VK2RoeYYToCpfIUc9Q0rWO9BCHyKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZXP8nx178%2BGjZ5goq3AOnRoghJKBg4YW4oTn%2Bvmiuik9Ix7uLCQEgjdt%2Bqu5dn6ruXS1RB%2FZvDLjErNkIUo%2FGi57VyWi7FknZmiWbD6nr7qA4T82q1gZEoE08%2FscE0YRvTWPKKePd5sumJuT8X4eqRSJBYqaJJ1IPKPTyumbx7ll2kC%2FaRgrWoOsXnL19tT02BMGME5t7D3Ldk66cgRTAPaRNDu7ecvXbExVBfvJ%2Ft5znUFzhcMznfxn9hoHdLyah8TUpkhaRCWGrMclG98eCWoP2S3gIaPxGzTo3vYoGets6MXBrBA%2Fq6sp%2FTWYopW9vVDKlGy42l1jsNSJnP39tcLUkxfF005AHhBy4nbjFBBy60baFKYYR73ICR4e3ClvlBp9BfFznvNXoxznxkfH6hDxt91b7kFjMLgvEn7X29%2FsxjSp7Mk7MnIzGWNJ772lY6nWxuwgUjF5aMMi%2F01pxU9W8ttVZuAVEPg1JTU5FUTbtGTgbpKzw%2BYnivQIASkeg6pHcISZO3oOwFvtxtYDPUYA7hV2XCxQfF0YE8HzwoaLxZkBZhBKt04Sv6dIGpUCh06RM7PKTJCAYPw1QDSx23FXEU0tnH11Pn8nQGlYwx3BfC%2BhrpJcHqB8Bqff%2Bb%2BNLlUm6mpQ7RnWbQjCqr9%2FBBjqkAbdu3caopGIsEuCGRrBshXm5ztFHCXRykxNHC22LUnjIVLwQlRAGGNsU43KM%2FKWurdbnqc3Xmo2JHaGpSRyl%2BruYXxZRi98cz4cHAYt98nmTCdvmSJY9lcqJkpOOeAlL%2FCYOGD25h4bcwLIUYlomfeogXVWOnNoUqJqb6%2By8V90NrWt7hN3DxSNaLsmZywAyd4EBqlUVLMGg7WDwEFfBlLyJpfPw&X-Amz-Signature=3a6bc4dcdeb5393b346a1e43b6b5f837ae44d68eaf3f68974dcec99e3fe6605f&X-Amz-SignedHeaders=host&x-id=GetObject)
