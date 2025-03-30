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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CYLR5J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCjcfnnCMpZAM%2FQ8FmwBeTOmzhT4it6LV%2Fskh%2FKyYxlaAIhAM2yngRGpMnS2YxlefaoNCC4oH1vAx0ymIx9xXEyWeOzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q7qeSEAN1k2Vbx4q3AP9ZYpG5MNaeFbMnxyk2OqD6cV6ETSCsWysn1TU3xVCygKuN1UlmOlZaRnFPaRH%2BW5GyOZ3wtsHTtygV6N5Rnx3D2RVM%2BeMjwVmNnyDAQnVyKf9tZFv%2FFoGLuV8BtykWMHOGOI48AhtkN2VcTSe%2Bnck2ZVcGjr3ehxwQElUw%2FliGKf%2FMNELkkHgxktzLF0O8xo05yErnKgmwvYTNvdPBgE4srL0ijVFlyY0AbLOgpyA3NQFsEDrHRKRjFZJfY7NFHpHZUgDD4hL%2FYj6BnccoKmDVwWEaidBIUV6FqKTiswrLh8%2FF7pFP3%2BZIPo81DvDEp4t4GZWx7JbZbq4m8ldtKWOjJ4YglQhBRVpihDqbP2KYS75RTT%2F8xOriGdHAtdlR482q9n9BsOrwNYK5jAi7%2FCLO7vI9o%2BXlamuGIeHlQYV9PZBzW94pMmCZ4r9vKQ6ALOMhcHBfzMoFXGlMv3NNJfUES33T7uUpTmmvFXb0QqLOVlxkoU3w1KE3IKM5OQcNuqpZdt25W5LrlfHFjW4L10FgCx8OhCzqgeS7QgL%2FwZNv78Oy3s5yyw0g7md7yO2eow51xIKGIt9orOp7HoN%2F%2FG81HD3XUTa%2F%2FAM2EPA%2FuPZRalCQNrcgoEnHAH2NzDg6aK%2FBjqkAeCDjoxT5zhqodUhkXjoQhOFMFvmgUfgLSBEffrtHZRQH4DFWeF%2FKtjZprZ5dBFnq1lk1eed4dGdVwoa3mSE6NjYYb4wJveR3PlD0INHSU2uOLfjS5Xs22DJV8w9oT0cxyTyLH6kVIFdgxW8SP7UgjVFIb0vyynfZxqdamzZFMQrgEuzJWeXfubqCWOknzMnfbjrji%2F8Nl%2BdS%2Bx4uaeOI80H4rGR&X-Amz-Signature=c8f310f46b292e1f0c1d423e3c6b78f1d475aaf312d034dbe63280f4bced18b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CYLR5J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCjcfnnCMpZAM%2FQ8FmwBeTOmzhT4it6LV%2Fskh%2FKyYxlaAIhAM2yngRGpMnS2YxlefaoNCC4oH1vAx0ymIx9xXEyWeOzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q7qeSEAN1k2Vbx4q3AP9ZYpG5MNaeFbMnxyk2OqD6cV6ETSCsWysn1TU3xVCygKuN1UlmOlZaRnFPaRH%2BW5GyOZ3wtsHTtygV6N5Rnx3D2RVM%2BeMjwVmNnyDAQnVyKf9tZFv%2FFoGLuV8BtykWMHOGOI48AhtkN2VcTSe%2Bnck2ZVcGjr3ehxwQElUw%2FliGKf%2FMNELkkHgxktzLF0O8xo05yErnKgmwvYTNvdPBgE4srL0ijVFlyY0AbLOgpyA3NQFsEDrHRKRjFZJfY7NFHpHZUgDD4hL%2FYj6BnccoKmDVwWEaidBIUV6FqKTiswrLh8%2FF7pFP3%2BZIPo81DvDEp4t4GZWx7JbZbq4m8ldtKWOjJ4YglQhBRVpihDqbP2KYS75RTT%2F8xOriGdHAtdlR482q9n9BsOrwNYK5jAi7%2FCLO7vI9o%2BXlamuGIeHlQYV9PZBzW94pMmCZ4r9vKQ6ALOMhcHBfzMoFXGlMv3NNJfUES33T7uUpTmmvFXb0QqLOVlxkoU3w1KE3IKM5OQcNuqpZdt25W5LrlfHFjW4L10FgCx8OhCzqgeS7QgL%2FwZNv78Oy3s5yyw0g7md7yO2eow51xIKGIt9orOp7HoN%2F%2FG81HD3XUTa%2F%2FAM2EPA%2FuPZRalCQNrcgoEnHAH2NzDg6aK%2FBjqkAeCDjoxT5zhqodUhkXjoQhOFMFvmgUfgLSBEffrtHZRQH4DFWeF%2FKtjZprZ5dBFnq1lk1eed4dGdVwoa3mSE6NjYYb4wJveR3PlD0INHSU2uOLfjS5Xs22DJV8w9oT0cxyTyLH6kVIFdgxW8SP7UgjVFIb0vyynfZxqdamzZFMQrgEuzJWeXfubqCWOknzMnfbjrji%2F8Nl%2BdS%2Bx4uaeOI80H4rGR&X-Amz-Signature=e660475058fae12e9b4975f742bc20bcfc603edb22d140a6dca5f56c2087f2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CYLR5J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCjcfnnCMpZAM%2FQ8FmwBeTOmzhT4it6LV%2Fskh%2FKyYxlaAIhAM2yngRGpMnS2YxlefaoNCC4oH1vAx0ymIx9xXEyWeOzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q7qeSEAN1k2Vbx4q3AP9ZYpG5MNaeFbMnxyk2OqD6cV6ETSCsWysn1TU3xVCygKuN1UlmOlZaRnFPaRH%2BW5GyOZ3wtsHTtygV6N5Rnx3D2RVM%2BeMjwVmNnyDAQnVyKf9tZFv%2FFoGLuV8BtykWMHOGOI48AhtkN2VcTSe%2Bnck2ZVcGjr3ehxwQElUw%2FliGKf%2FMNELkkHgxktzLF0O8xo05yErnKgmwvYTNvdPBgE4srL0ijVFlyY0AbLOgpyA3NQFsEDrHRKRjFZJfY7NFHpHZUgDD4hL%2FYj6BnccoKmDVwWEaidBIUV6FqKTiswrLh8%2FF7pFP3%2BZIPo81DvDEp4t4GZWx7JbZbq4m8ldtKWOjJ4YglQhBRVpihDqbP2KYS75RTT%2F8xOriGdHAtdlR482q9n9BsOrwNYK5jAi7%2FCLO7vI9o%2BXlamuGIeHlQYV9PZBzW94pMmCZ4r9vKQ6ALOMhcHBfzMoFXGlMv3NNJfUES33T7uUpTmmvFXb0QqLOVlxkoU3w1KE3IKM5OQcNuqpZdt25W5LrlfHFjW4L10FgCx8OhCzqgeS7QgL%2FwZNv78Oy3s5yyw0g7md7yO2eow51xIKGIt9orOp7HoN%2F%2FG81HD3XUTa%2F%2FAM2EPA%2FuPZRalCQNrcgoEnHAH2NzDg6aK%2FBjqkAeCDjoxT5zhqodUhkXjoQhOFMFvmgUfgLSBEffrtHZRQH4DFWeF%2FKtjZprZ5dBFnq1lk1eed4dGdVwoa3mSE6NjYYb4wJveR3PlD0INHSU2uOLfjS5Xs22DJV8w9oT0cxyTyLH6kVIFdgxW8SP7UgjVFIb0vyynfZxqdamzZFMQrgEuzJWeXfubqCWOknzMnfbjrji%2F8Nl%2BdS%2Bx4uaeOI80H4rGR&X-Amz-Signature=ae2464cddee138219274443572f105dc4542d50e3c00b333526561fcc72ee0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CYLR5J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCjcfnnCMpZAM%2FQ8FmwBeTOmzhT4it6LV%2Fskh%2FKyYxlaAIhAM2yngRGpMnS2YxlefaoNCC4oH1vAx0ymIx9xXEyWeOzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q7qeSEAN1k2Vbx4q3AP9ZYpG5MNaeFbMnxyk2OqD6cV6ETSCsWysn1TU3xVCygKuN1UlmOlZaRnFPaRH%2BW5GyOZ3wtsHTtygV6N5Rnx3D2RVM%2BeMjwVmNnyDAQnVyKf9tZFv%2FFoGLuV8BtykWMHOGOI48AhtkN2VcTSe%2Bnck2ZVcGjr3ehxwQElUw%2FliGKf%2FMNELkkHgxktzLF0O8xo05yErnKgmwvYTNvdPBgE4srL0ijVFlyY0AbLOgpyA3NQFsEDrHRKRjFZJfY7NFHpHZUgDD4hL%2FYj6BnccoKmDVwWEaidBIUV6FqKTiswrLh8%2FF7pFP3%2BZIPo81DvDEp4t4GZWx7JbZbq4m8ldtKWOjJ4YglQhBRVpihDqbP2KYS75RTT%2F8xOriGdHAtdlR482q9n9BsOrwNYK5jAi7%2FCLO7vI9o%2BXlamuGIeHlQYV9PZBzW94pMmCZ4r9vKQ6ALOMhcHBfzMoFXGlMv3NNJfUES33T7uUpTmmvFXb0QqLOVlxkoU3w1KE3IKM5OQcNuqpZdt25W5LrlfHFjW4L10FgCx8OhCzqgeS7QgL%2FwZNv78Oy3s5yyw0g7md7yO2eow51xIKGIt9orOp7HoN%2F%2FG81HD3XUTa%2F%2FAM2EPA%2FuPZRalCQNrcgoEnHAH2NzDg6aK%2FBjqkAeCDjoxT5zhqodUhkXjoQhOFMFvmgUfgLSBEffrtHZRQH4DFWeF%2FKtjZprZ5dBFnq1lk1eed4dGdVwoa3mSE6NjYYb4wJveR3PlD0INHSU2uOLfjS5Xs22DJV8w9oT0cxyTyLH6kVIFdgxW8SP7UgjVFIb0vyynfZxqdamzZFMQrgEuzJWeXfubqCWOknzMnfbjrji%2F8Nl%2BdS%2Bx4uaeOI80H4rGR&X-Amz-Signature=3aaba5f3cdc28c840acd64688fd854a389db041ab36f2fafda75ad3d75b71d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CYLR5J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCjcfnnCMpZAM%2FQ8FmwBeTOmzhT4it6LV%2Fskh%2FKyYxlaAIhAM2yngRGpMnS2YxlefaoNCC4oH1vAx0ymIx9xXEyWeOzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q7qeSEAN1k2Vbx4q3AP9ZYpG5MNaeFbMnxyk2OqD6cV6ETSCsWysn1TU3xVCygKuN1UlmOlZaRnFPaRH%2BW5GyOZ3wtsHTtygV6N5Rnx3D2RVM%2BeMjwVmNnyDAQnVyKf9tZFv%2FFoGLuV8BtykWMHOGOI48AhtkN2VcTSe%2Bnck2ZVcGjr3ehxwQElUw%2FliGKf%2FMNELkkHgxktzLF0O8xo05yErnKgmwvYTNvdPBgE4srL0ijVFlyY0AbLOgpyA3NQFsEDrHRKRjFZJfY7NFHpHZUgDD4hL%2FYj6BnccoKmDVwWEaidBIUV6FqKTiswrLh8%2FF7pFP3%2BZIPo81DvDEp4t4GZWx7JbZbq4m8ldtKWOjJ4YglQhBRVpihDqbP2KYS75RTT%2F8xOriGdHAtdlR482q9n9BsOrwNYK5jAi7%2FCLO7vI9o%2BXlamuGIeHlQYV9PZBzW94pMmCZ4r9vKQ6ALOMhcHBfzMoFXGlMv3NNJfUES33T7uUpTmmvFXb0QqLOVlxkoU3w1KE3IKM5OQcNuqpZdt25W5LrlfHFjW4L10FgCx8OhCzqgeS7QgL%2FwZNv78Oy3s5yyw0g7md7yO2eow51xIKGIt9orOp7HoN%2F%2FG81HD3XUTa%2F%2FAM2EPA%2FuPZRalCQNrcgoEnHAH2NzDg6aK%2FBjqkAeCDjoxT5zhqodUhkXjoQhOFMFvmgUfgLSBEffrtHZRQH4DFWeF%2FKtjZprZ5dBFnq1lk1eed4dGdVwoa3mSE6NjYYb4wJveR3PlD0INHSU2uOLfjS5Xs22DJV8w9oT0cxyTyLH6kVIFdgxW8SP7UgjVFIb0vyynfZxqdamzZFMQrgEuzJWeXfubqCWOknzMnfbjrji%2F8Nl%2BdS%2Bx4uaeOI80H4rGR&X-Amz-Signature=f3ca74c4d8430fda4af94f9b481c4811db711da9b731c503207613403b4babf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CYLR5J%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCjcfnnCMpZAM%2FQ8FmwBeTOmzhT4it6LV%2Fskh%2FKyYxlaAIhAM2yngRGpMnS2YxlefaoNCC4oH1vAx0ymIx9xXEyWeOzKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1Q7qeSEAN1k2Vbx4q3AP9ZYpG5MNaeFbMnxyk2OqD6cV6ETSCsWysn1TU3xVCygKuN1UlmOlZaRnFPaRH%2BW5GyOZ3wtsHTtygV6N5Rnx3D2RVM%2BeMjwVmNnyDAQnVyKf9tZFv%2FFoGLuV8BtykWMHOGOI48AhtkN2VcTSe%2Bnck2ZVcGjr3ehxwQElUw%2FliGKf%2FMNELkkHgxktzLF0O8xo05yErnKgmwvYTNvdPBgE4srL0ijVFlyY0AbLOgpyA3NQFsEDrHRKRjFZJfY7NFHpHZUgDD4hL%2FYj6BnccoKmDVwWEaidBIUV6FqKTiswrLh8%2FF7pFP3%2BZIPo81DvDEp4t4GZWx7JbZbq4m8ldtKWOjJ4YglQhBRVpihDqbP2KYS75RTT%2F8xOriGdHAtdlR482q9n9BsOrwNYK5jAi7%2FCLO7vI9o%2BXlamuGIeHlQYV9PZBzW94pMmCZ4r9vKQ6ALOMhcHBfzMoFXGlMv3NNJfUES33T7uUpTmmvFXb0QqLOVlxkoU3w1KE3IKM5OQcNuqpZdt25W5LrlfHFjW4L10FgCx8OhCzqgeS7QgL%2FwZNv78Oy3s5yyw0g7md7yO2eow51xIKGIt9orOp7HoN%2F%2FG81HD3XUTa%2F%2FAM2EPA%2FuPZRalCQNrcgoEnHAH2NzDg6aK%2FBjqkAeCDjoxT5zhqodUhkXjoQhOFMFvmgUfgLSBEffrtHZRQH4DFWeF%2FKtjZprZ5dBFnq1lk1eed4dGdVwoa3mSE6NjYYb4wJveR3PlD0INHSU2uOLfjS5Xs22DJV8w9oT0cxyTyLH6kVIFdgxW8SP7UgjVFIb0vyynfZxqdamzZFMQrgEuzJWeXfubqCWOknzMnfbjrji%2F8Nl%2BdS%2Bx4uaeOI80H4rGR&X-Amz-Signature=58d00f5d77be7ad1d31ab67295114ee19cc6116536dc1a736dcdfb860ebcd271&X-Amz-SignedHeaders=host&x-id=GetObject)
