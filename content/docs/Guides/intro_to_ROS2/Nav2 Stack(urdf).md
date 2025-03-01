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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL4SA6C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFl96l7rKnOWCuFRhzjGUQu%2BDTDMlfiHOih3PvO3F2rHAiArEXOjuVvcMSsg7vS7OPs%2FkjXL6kMoCkSGFA%2Bxhd%2FQUSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIUd0DI2N7ia5DbIKtwDDqMFnweMs3eTEkyyu6zem%2BnybcZ7%2FoSPRSHStOaiCWzScQ%2FZzdKG4FnBSv2rOrkS3xT55fKbIA%2BPnETG3OfjDJMFtPyFa0Kfr%2Fe7BsNFfL28azzZ2C6%2Fw%2FsWTLO7zTO%2BumpGji7PsUhWShmcDuntfs5%2Fd%2BEbZ1vDhoubWfrIxGMo02M3Wbg6T%2B1HXt1gxiPaGlQ4G904OKypl3jLfLMQd8nzbvJuT%2BGDcyyfYoJLJTVNWhSXi4crF2Y2ajAky5P4HtHettnZhdLRjaIKhqHKb2IpSThh4FUFn78Oi5LWJj08rIDcCXYyMO%2FIiPbhuMjBfziyZM1FrHycKdupGhwPFDzqWF7r5xew4Mdp1QGHueIhnRcygsIJBFo4%2FcHR8HiB8jdM3tavgQ64gL%2BiXWbRVC8dvI4AOToapsMxHHpP0qOvO7mp%2FsO27rdGW1qvD0ivNOTa6M9cMVX3jDVFEu4j8OsueWZ20eZsFkK32lcfD3a6KznRAG5%2Bzi2meIgB5Wy1h%2FgnhRgnCv9QqoCWlebfDSaANGb7Y%2F72NUH%2FCTwFqJ9AwE3ddWyaLYfL1rA5L8BTbys8BAGEilcV1xCaxDa9VyYAkS%2FIaG2rOblqwG3QkGYbBf7IdhzDsqSbvMkwqZCKvgY6pgFszzSFTD0r6r%2FjFBpkGf1IJupQEa%2Fk5qejMqpU%2FngdQJ0iVc4kJRkhLUvFbbKIpQwn6yMy9YTAKo43JkEh8Ibxh8RrGE2vEpt2gN6uBlAFHWheDjyIzvYwWheWYUSUCC2t%2BXH2uOJIPHWakH%2F%2FiAufnHGefQkYeRoYUhy3WMsBtZnCU9POQD%2BLotrZae1HpZJ%2BxbH6hd3dl4f7QbwghHhDdNgSRN0n&X-Amz-Signature=0eb8c97b141a3e29604a149017d20be310327a1a327969a486bd403f611a0549&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL4SA6C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFl96l7rKnOWCuFRhzjGUQu%2BDTDMlfiHOih3PvO3F2rHAiArEXOjuVvcMSsg7vS7OPs%2FkjXL6kMoCkSGFA%2Bxhd%2FQUSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIUd0DI2N7ia5DbIKtwDDqMFnweMs3eTEkyyu6zem%2BnybcZ7%2FoSPRSHStOaiCWzScQ%2FZzdKG4FnBSv2rOrkS3xT55fKbIA%2BPnETG3OfjDJMFtPyFa0Kfr%2Fe7BsNFfL28azzZ2C6%2Fw%2FsWTLO7zTO%2BumpGji7PsUhWShmcDuntfs5%2Fd%2BEbZ1vDhoubWfrIxGMo02M3Wbg6T%2B1HXt1gxiPaGlQ4G904OKypl3jLfLMQd8nzbvJuT%2BGDcyyfYoJLJTVNWhSXi4crF2Y2ajAky5P4HtHettnZhdLRjaIKhqHKb2IpSThh4FUFn78Oi5LWJj08rIDcCXYyMO%2FIiPbhuMjBfziyZM1FrHycKdupGhwPFDzqWF7r5xew4Mdp1QGHueIhnRcygsIJBFo4%2FcHR8HiB8jdM3tavgQ64gL%2BiXWbRVC8dvI4AOToapsMxHHpP0qOvO7mp%2FsO27rdGW1qvD0ivNOTa6M9cMVX3jDVFEu4j8OsueWZ20eZsFkK32lcfD3a6KznRAG5%2Bzi2meIgB5Wy1h%2FgnhRgnCv9QqoCWlebfDSaANGb7Y%2F72NUH%2FCTwFqJ9AwE3ddWyaLYfL1rA5L8BTbys8BAGEilcV1xCaxDa9VyYAkS%2FIaG2rOblqwG3QkGYbBf7IdhzDsqSbvMkwqZCKvgY6pgFszzSFTD0r6r%2FjFBpkGf1IJupQEa%2Fk5qejMqpU%2FngdQJ0iVc4kJRkhLUvFbbKIpQwn6yMy9YTAKo43JkEh8Ibxh8RrGE2vEpt2gN6uBlAFHWheDjyIzvYwWheWYUSUCC2t%2BXH2uOJIPHWakH%2F%2FiAufnHGefQkYeRoYUhy3WMsBtZnCU9POQD%2BLotrZae1HpZJ%2BxbH6hd3dl4f7QbwghHhDdNgSRN0n&X-Amz-Signature=badf45cdda49f84fad82ba9b45fe29d765328aacb5291ee79cfc555320518d42&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL4SA6C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFl96l7rKnOWCuFRhzjGUQu%2BDTDMlfiHOih3PvO3F2rHAiArEXOjuVvcMSsg7vS7OPs%2FkjXL6kMoCkSGFA%2Bxhd%2FQUSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIUd0DI2N7ia5DbIKtwDDqMFnweMs3eTEkyyu6zem%2BnybcZ7%2FoSPRSHStOaiCWzScQ%2FZzdKG4FnBSv2rOrkS3xT55fKbIA%2BPnETG3OfjDJMFtPyFa0Kfr%2Fe7BsNFfL28azzZ2C6%2Fw%2FsWTLO7zTO%2BumpGji7PsUhWShmcDuntfs5%2Fd%2BEbZ1vDhoubWfrIxGMo02M3Wbg6T%2B1HXt1gxiPaGlQ4G904OKypl3jLfLMQd8nzbvJuT%2BGDcyyfYoJLJTVNWhSXi4crF2Y2ajAky5P4HtHettnZhdLRjaIKhqHKb2IpSThh4FUFn78Oi5LWJj08rIDcCXYyMO%2FIiPbhuMjBfziyZM1FrHycKdupGhwPFDzqWF7r5xew4Mdp1QGHueIhnRcygsIJBFo4%2FcHR8HiB8jdM3tavgQ64gL%2BiXWbRVC8dvI4AOToapsMxHHpP0qOvO7mp%2FsO27rdGW1qvD0ivNOTa6M9cMVX3jDVFEu4j8OsueWZ20eZsFkK32lcfD3a6KznRAG5%2Bzi2meIgB5Wy1h%2FgnhRgnCv9QqoCWlebfDSaANGb7Y%2F72NUH%2FCTwFqJ9AwE3ddWyaLYfL1rA5L8BTbys8BAGEilcV1xCaxDa9VyYAkS%2FIaG2rOblqwG3QkGYbBf7IdhzDsqSbvMkwqZCKvgY6pgFszzSFTD0r6r%2FjFBpkGf1IJupQEa%2Fk5qejMqpU%2FngdQJ0iVc4kJRkhLUvFbbKIpQwn6yMy9YTAKo43JkEh8Ibxh8RrGE2vEpt2gN6uBlAFHWheDjyIzvYwWheWYUSUCC2t%2BXH2uOJIPHWakH%2F%2FiAufnHGefQkYeRoYUhy3WMsBtZnCU9POQD%2BLotrZae1HpZJ%2BxbH6hd3dl4f7QbwghHhDdNgSRN0n&X-Amz-Signature=ad6ae66dc1f8ad72483f9f2ae0c6a3dcce7407cdddde3cf7602177bece343dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL4SA6C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFl96l7rKnOWCuFRhzjGUQu%2BDTDMlfiHOih3PvO3F2rHAiArEXOjuVvcMSsg7vS7OPs%2FkjXL6kMoCkSGFA%2Bxhd%2FQUSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIUd0DI2N7ia5DbIKtwDDqMFnweMs3eTEkyyu6zem%2BnybcZ7%2FoSPRSHStOaiCWzScQ%2FZzdKG4FnBSv2rOrkS3xT55fKbIA%2BPnETG3OfjDJMFtPyFa0Kfr%2Fe7BsNFfL28azzZ2C6%2Fw%2FsWTLO7zTO%2BumpGji7PsUhWShmcDuntfs5%2Fd%2BEbZ1vDhoubWfrIxGMo02M3Wbg6T%2B1HXt1gxiPaGlQ4G904OKypl3jLfLMQd8nzbvJuT%2BGDcyyfYoJLJTVNWhSXi4crF2Y2ajAky5P4HtHettnZhdLRjaIKhqHKb2IpSThh4FUFn78Oi5LWJj08rIDcCXYyMO%2FIiPbhuMjBfziyZM1FrHycKdupGhwPFDzqWF7r5xew4Mdp1QGHueIhnRcygsIJBFo4%2FcHR8HiB8jdM3tavgQ64gL%2BiXWbRVC8dvI4AOToapsMxHHpP0qOvO7mp%2FsO27rdGW1qvD0ivNOTa6M9cMVX3jDVFEu4j8OsueWZ20eZsFkK32lcfD3a6KznRAG5%2Bzi2meIgB5Wy1h%2FgnhRgnCv9QqoCWlebfDSaANGb7Y%2F72NUH%2FCTwFqJ9AwE3ddWyaLYfL1rA5L8BTbys8BAGEilcV1xCaxDa9VyYAkS%2FIaG2rOblqwG3QkGYbBf7IdhzDsqSbvMkwqZCKvgY6pgFszzSFTD0r6r%2FjFBpkGf1IJupQEa%2Fk5qejMqpU%2FngdQJ0iVc4kJRkhLUvFbbKIpQwn6yMy9YTAKo43JkEh8Ibxh8RrGE2vEpt2gN6uBlAFHWheDjyIzvYwWheWYUSUCC2t%2BXH2uOJIPHWakH%2F%2FiAufnHGefQkYeRoYUhy3WMsBtZnCU9POQD%2BLotrZae1HpZJ%2BxbH6hd3dl4f7QbwghHhDdNgSRN0n&X-Amz-Signature=5bd2f3b05295ac2c0864f677b6290c0017135dd77bb724ce3029585ff3c627a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL4SA6C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFl96l7rKnOWCuFRhzjGUQu%2BDTDMlfiHOih3PvO3F2rHAiArEXOjuVvcMSsg7vS7OPs%2FkjXL6kMoCkSGFA%2Bxhd%2FQUSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIUd0DI2N7ia5DbIKtwDDqMFnweMs3eTEkyyu6zem%2BnybcZ7%2FoSPRSHStOaiCWzScQ%2FZzdKG4FnBSv2rOrkS3xT55fKbIA%2BPnETG3OfjDJMFtPyFa0Kfr%2Fe7BsNFfL28azzZ2C6%2Fw%2FsWTLO7zTO%2BumpGji7PsUhWShmcDuntfs5%2Fd%2BEbZ1vDhoubWfrIxGMo02M3Wbg6T%2B1HXt1gxiPaGlQ4G904OKypl3jLfLMQd8nzbvJuT%2BGDcyyfYoJLJTVNWhSXi4crF2Y2ajAky5P4HtHettnZhdLRjaIKhqHKb2IpSThh4FUFn78Oi5LWJj08rIDcCXYyMO%2FIiPbhuMjBfziyZM1FrHycKdupGhwPFDzqWF7r5xew4Mdp1QGHueIhnRcygsIJBFo4%2FcHR8HiB8jdM3tavgQ64gL%2BiXWbRVC8dvI4AOToapsMxHHpP0qOvO7mp%2FsO27rdGW1qvD0ivNOTa6M9cMVX3jDVFEu4j8OsueWZ20eZsFkK32lcfD3a6KznRAG5%2Bzi2meIgB5Wy1h%2FgnhRgnCv9QqoCWlebfDSaANGb7Y%2F72NUH%2FCTwFqJ9AwE3ddWyaLYfL1rA5L8BTbys8BAGEilcV1xCaxDa9VyYAkS%2FIaG2rOblqwG3QkGYbBf7IdhzDsqSbvMkwqZCKvgY6pgFszzSFTD0r6r%2FjFBpkGf1IJupQEa%2Fk5qejMqpU%2FngdQJ0iVc4kJRkhLUvFbbKIpQwn6yMy9YTAKo43JkEh8Ibxh8RrGE2vEpt2gN6uBlAFHWheDjyIzvYwWheWYUSUCC2t%2BXH2uOJIPHWakH%2F%2FiAufnHGefQkYeRoYUhy3WMsBtZnCU9POQD%2BLotrZae1HpZJ%2BxbH6hd3dl4f7QbwghHhDdNgSRN0n&X-Amz-Signature=4001cb63b048b0b680deeada2a908f044aaa5694348ea06d7907b6e86f33ada3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL4SA6C%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFl96l7rKnOWCuFRhzjGUQu%2BDTDMlfiHOih3PvO3F2rHAiArEXOjuVvcMSsg7vS7OPs%2FkjXL6kMoCkSGFA%2Bxhd%2FQUSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfIUd0DI2N7ia5DbIKtwDDqMFnweMs3eTEkyyu6zem%2BnybcZ7%2FoSPRSHStOaiCWzScQ%2FZzdKG4FnBSv2rOrkS3xT55fKbIA%2BPnETG3OfjDJMFtPyFa0Kfr%2Fe7BsNFfL28azzZ2C6%2Fw%2FsWTLO7zTO%2BumpGji7PsUhWShmcDuntfs5%2Fd%2BEbZ1vDhoubWfrIxGMo02M3Wbg6T%2B1HXt1gxiPaGlQ4G904OKypl3jLfLMQd8nzbvJuT%2BGDcyyfYoJLJTVNWhSXi4crF2Y2ajAky5P4HtHettnZhdLRjaIKhqHKb2IpSThh4FUFn78Oi5LWJj08rIDcCXYyMO%2FIiPbhuMjBfziyZM1FrHycKdupGhwPFDzqWF7r5xew4Mdp1QGHueIhnRcygsIJBFo4%2FcHR8HiB8jdM3tavgQ64gL%2BiXWbRVC8dvI4AOToapsMxHHpP0qOvO7mp%2FsO27rdGW1qvD0ivNOTa6M9cMVX3jDVFEu4j8OsueWZ20eZsFkK32lcfD3a6KznRAG5%2Bzi2meIgB5Wy1h%2FgnhRgnCv9QqoCWlebfDSaANGb7Y%2F72NUH%2FCTwFqJ9AwE3ddWyaLYfL1rA5L8BTbys8BAGEilcV1xCaxDa9VyYAkS%2FIaG2rOblqwG3QkGYbBf7IdhzDsqSbvMkwqZCKvgY6pgFszzSFTD0r6r%2FjFBpkGf1IJupQEa%2Fk5qejMqpU%2FngdQJ0iVc4kJRkhLUvFbbKIpQwn6yMy9YTAKo43JkEh8Ibxh8RrGE2vEpt2gN6uBlAFHWheDjyIzvYwWheWYUSUCC2t%2BXH2uOJIPHWakH%2F%2FiAufnHGefQkYeRoYUhy3WMsBtZnCU9POQD%2BLotrZae1HpZJ%2BxbH6hd3dl4f7QbwghHhDdNgSRN0n&X-Amz-Signature=381b09c0c9f4de1264f4662d62da440ca54177c3fde97a0443881832979471e2&X-Amz-SignedHeaders=host&x-id=GetObject)
