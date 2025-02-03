---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKRWKPV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4MUbEXg1XB6Rb7QN39RVruGEk2CXx9ep8g7N0GmDMwwIhAJOSFymZM2E9YiN%2B%2B9njAzd4vKWjSYrrDzNtu6yJEUq5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwjuWbkkQOaIW71wgUq3AO56y57pJ49RjR%2BfGea48uv%2F9TFRtu2ChXhdnCt2uRDlMrPETQQ9lHBaS2Ow1bRncXlkAUyPNuSmNuMyQwFu9%2FRgs8ok%2FVnYJJs1vc6zNSAUPMgJm5lRgmn16sRuXNFwTSnmjjUP%2BfTZSO9EICIV3a5hExys36f4cr9A4h8ztSKh30CKyrYy5Kgh02j2h4DrPMZgMw61VgcBns93CFr9aAr6Xl2dX5WQyLY6z9LYlobOtcTzfw4rQfGsikpmkbySUMgj1TovgW6blRfrie3wFCtFyhvpEZIoYevBZlwi9OAG0Oy6QasjGw3KAvv5QCBdMx%2FrS3ZZ%2BGxUQskO5%2FfTo0cuSL1emtXSTfMiUI9FMPUuu8mD1WPoVRIoSJaxgvcdS1qdowKOwbllWRGRKB05MLa5YhdcPd41%2Bm9wpyjLgvG2FmCNiX24G%2BxUpS8Cos0qgIKBVHrFJOX73VxztJD983ui3P3ONZRFzDorq4UhScEdr0YiCWuGaV3DyS9Jvd%2B1LNCAi51KmAOVPc%2BjB8mfqHeFVkBjI7dHxHXmuh3PgNxts8mb%2B07lRWcmZvS9xzF4%2Fz5D%2FVPYk60bE%2BxpnQGtik1vtXf328leWyssGyfh7Kn9eP%2FtR1MhfVDVkklEzCRlYW9BjqkAevY1F7fabJKqT9uQm3%2F5f8BU5GUMcjgRX6ZXgI2y6YSvX9Q9H5wI2JEVh0N%2B819SJCKGTiegkaBkBfuhXv2JKexJOcV8su%2FON72dnSmbK%2FNA9jKH3BrPhwrHeaLDVDkxBBKiRv5gcHs9fbGAiXqWynJBtOiLj%2Biqc5UdKrzuC9QNPEKE%2FalTRr%2BEhgiuPeE5IAgOYcjIvDNNDmLfjolGArEcusf&X-Amz-Signature=7fd2d52f1193bcf82442e88dea17eafb4e32657720ccc0b67f7126eda24ff2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKRWKPV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4MUbEXg1XB6Rb7QN39RVruGEk2CXx9ep8g7N0GmDMwwIhAJOSFymZM2E9YiN%2B%2B9njAzd4vKWjSYrrDzNtu6yJEUq5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwjuWbkkQOaIW71wgUq3AO56y57pJ49RjR%2BfGea48uv%2F9TFRtu2ChXhdnCt2uRDlMrPETQQ9lHBaS2Ow1bRncXlkAUyPNuSmNuMyQwFu9%2FRgs8ok%2FVnYJJs1vc6zNSAUPMgJm5lRgmn16sRuXNFwTSnmjjUP%2BfTZSO9EICIV3a5hExys36f4cr9A4h8ztSKh30CKyrYy5Kgh02j2h4DrPMZgMw61VgcBns93CFr9aAr6Xl2dX5WQyLY6z9LYlobOtcTzfw4rQfGsikpmkbySUMgj1TovgW6blRfrie3wFCtFyhvpEZIoYevBZlwi9OAG0Oy6QasjGw3KAvv5QCBdMx%2FrS3ZZ%2BGxUQskO5%2FfTo0cuSL1emtXSTfMiUI9FMPUuu8mD1WPoVRIoSJaxgvcdS1qdowKOwbllWRGRKB05MLa5YhdcPd41%2Bm9wpyjLgvG2FmCNiX24G%2BxUpS8Cos0qgIKBVHrFJOX73VxztJD983ui3P3ONZRFzDorq4UhScEdr0YiCWuGaV3DyS9Jvd%2B1LNCAi51KmAOVPc%2BjB8mfqHeFVkBjI7dHxHXmuh3PgNxts8mb%2B07lRWcmZvS9xzF4%2Fz5D%2FVPYk60bE%2BxpnQGtik1vtXf328leWyssGyfh7Kn9eP%2FtR1MhfVDVkklEzCRlYW9BjqkAevY1F7fabJKqT9uQm3%2F5f8BU5GUMcjgRX6ZXgI2y6YSvX9Q9H5wI2JEVh0N%2B819SJCKGTiegkaBkBfuhXv2JKexJOcV8su%2FON72dnSmbK%2FNA9jKH3BrPhwrHeaLDVDkxBBKiRv5gcHs9fbGAiXqWynJBtOiLj%2Biqc5UdKrzuC9QNPEKE%2FalTRr%2BEhgiuPeE5IAgOYcjIvDNNDmLfjolGArEcusf&X-Amz-Signature=f874f10d746e5b47176a19554417337564fafc0453824706677263afbc9c24a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKRWKPV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4MUbEXg1XB6Rb7QN39RVruGEk2CXx9ep8g7N0GmDMwwIhAJOSFymZM2E9YiN%2B%2B9njAzd4vKWjSYrrDzNtu6yJEUq5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwjuWbkkQOaIW71wgUq3AO56y57pJ49RjR%2BfGea48uv%2F9TFRtu2ChXhdnCt2uRDlMrPETQQ9lHBaS2Ow1bRncXlkAUyPNuSmNuMyQwFu9%2FRgs8ok%2FVnYJJs1vc6zNSAUPMgJm5lRgmn16sRuXNFwTSnmjjUP%2BfTZSO9EICIV3a5hExys36f4cr9A4h8ztSKh30CKyrYy5Kgh02j2h4DrPMZgMw61VgcBns93CFr9aAr6Xl2dX5WQyLY6z9LYlobOtcTzfw4rQfGsikpmkbySUMgj1TovgW6blRfrie3wFCtFyhvpEZIoYevBZlwi9OAG0Oy6QasjGw3KAvv5QCBdMx%2FrS3ZZ%2BGxUQskO5%2FfTo0cuSL1emtXSTfMiUI9FMPUuu8mD1WPoVRIoSJaxgvcdS1qdowKOwbllWRGRKB05MLa5YhdcPd41%2Bm9wpyjLgvG2FmCNiX24G%2BxUpS8Cos0qgIKBVHrFJOX73VxztJD983ui3P3ONZRFzDorq4UhScEdr0YiCWuGaV3DyS9Jvd%2B1LNCAi51KmAOVPc%2BjB8mfqHeFVkBjI7dHxHXmuh3PgNxts8mb%2B07lRWcmZvS9xzF4%2Fz5D%2FVPYk60bE%2BxpnQGtik1vtXf328leWyssGyfh7Kn9eP%2FtR1MhfVDVkklEzCRlYW9BjqkAevY1F7fabJKqT9uQm3%2F5f8BU5GUMcjgRX6ZXgI2y6YSvX9Q9H5wI2JEVh0N%2B819SJCKGTiegkaBkBfuhXv2JKexJOcV8su%2FON72dnSmbK%2FNA9jKH3BrPhwrHeaLDVDkxBBKiRv5gcHs9fbGAiXqWynJBtOiLj%2Biqc5UdKrzuC9QNPEKE%2FalTRr%2BEhgiuPeE5IAgOYcjIvDNNDmLfjolGArEcusf&X-Amz-Signature=e7ad2c55364ad60353da0e69cebe272aaf4cc63146738bcea987b4d99aff3acf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKRWKPV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4MUbEXg1XB6Rb7QN39RVruGEk2CXx9ep8g7N0GmDMwwIhAJOSFymZM2E9YiN%2B%2B9njAzd4vKWjSYrrDzNtu6yJEUq5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwjuWbkkQOaIW71wgUq3AO56y57pJ49RjR%2BfGea48uv%2F9TFRtu2ChXhdnCt2uRDlMrPETQQ9lHBaS2Ow1bRncXlkAUyPNuSmNuMyQwFu9%2FRgs8ok%2FVnYJJs1vc6zNSAUPMgJm5lRgmn16sRuXNFwTSnmjjUP%2BfTZSO9EICIV3a5hExys36f4cr9A4h8ztSKh30CKyrYy5Kgh02j2h4DrPMZgMw61VgcBns93CFr9aAr6Xl2dX5WQyLY6z9LYlobOtcTzfw4rQfGsikpmkbySUMgj1TovgW6blRfrie3wFCtFyhvpEZIoYevBZlwi9OAG0Oy6QasjGw3KAvv5QCBdMx%2FrS3ZZ%2BGxUQskO5%2FfTo0cuSL1emtXSTfMiUI9FMPUuu8mD1WPoVRIoSJaxgvcdS1qdowKOwbllWRGRKB05MLa5YhdcPd41%2Bm9wpyjLgvG2FmCNiX24G%2BxUpS8Cos0qgIKBVHrFJOX73VxztJD983ui3P3ONZRFzDorq4UhScEdr0YiCWuGaV3DyS9Jvd%2B1LNCAi51KmAOVPc%2BjB8mfqHeFVkBjI7dHxHXmuh3PgNxts8mb%2B07lRWcmZvS9xzF4%2Fz5D%2FVPYk60bE%2BxpnQGtik1vtXf328leWyssGyfh7Kn9eP%2FtR1MhfVDVkklEzCRlYW9BjqkAevY1F7fabJKqT9uQm3%2F5f8BU5GUMcjgRX6ZXgI2y6YSvX9Q9H5wI2JEVh0N%2B819SJCKGTiegkaBkBfuhXv2JKexJOcV8su%2FON72dnSmbK%2FNA9jKH3BrPhwrHeaLDVDkxBBKiRv5gcHs9fbGAiXqWynJBtOiLj%2Biqc5UdKrzuC9QNPEKE%2FalTRr%2BEhgiuPeE5IAgOYcjIvDNNDmLfjolGArEcusf&X-Amz-Signature=6892a2c79a961892bfa4e386c592f002d64a9aa294c8bf7024097e3cf4476669&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKRWKPV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4MUbEXg1XB6Rb7QN39RVruGEk2CXx9ep8g7N0GmDMwwIhAJOSFymZM2E9YiN%2B%2B9njAzd4vKWjSYrrDzNtu6yJEUq5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwjuWbkkQOaIW71wgUq3AO56y57pJ49RjR%2BfGea48uv%2F9TFRtu2ChXhdnCt2uRDlMrPETQQ9lHBaS2Ow1bRncXlkAUyPNuSmNuMyQwFu9%2FRgs8ok%2FVnYJJs1vc6zNSAUPMgJm5lRgmn16sRuXNFwTSnmjjUP%2BfTZSO9EICIV3a5hExys36f4cr9A4h8ztSKh30CKyrYy5Kgh02j2h4DrPMZgMw61VgcBns93CFr9aAr6Xl2dX5WQyLY6z9LYlobOtcTzfw4rQfGsikpmkbySUMgj1TovgW6blRfrie3wFCtFyhvpEZIoYevBZlwi9OAG0Oy6QasjGw3KAvv5QCBdMx%2FrS3ZZ%2BGxUQskO5%2FfTo0cuSL1emtXSTfMiUI9FMPUuu8mD1WPoVRIoSJaxgvcdS1qdowKOwbllWRGRKB05MLa5YhdcPd41%2Bm9wpyjLgvG2FmCNiX24G%2BxUpS8Cos0qgIKBVHrFJOX73VxztJD983ui3P3ONZRFzDorq4UhScEdr0YiCWuGaV3DyS9Jvd%2B1LNCAi51KmAOVPc%2BjB8mfqHeFVkBjI7dHxHXmuh3PgNxts8mb%2B07lRWcmZvS9xzF4%2Fz5D%2FVPYk60bE%2BxpnQGtik1vtXf328leWyssGyfh7Kn9eP%2FtR1MhfVDVkklEzCRlYW9BjqkAevY1F7fabJKqT9uQm3%2F5f8BU5GUMcjgRX6ZXgI2y6YSvX9Q9H5wI2JEVh0N%2B819SJCKGTiegkaBkBfuhXv2JKexJOcV8su%2FON72dnSmbK%2FNA9jKH3BrPhwrHeaLDVDkxBBKiRv5gcHs9fbGAiXqWynJBtOiLj%2Biqc5UdKrzuC9QNPEKE%2FalTRr%2BEhgiuPeE5IAgOYcjIvDNNDmLfjolGArEcusf&X-Amz-Signature=6e6814b0bf1c9ce42c413fe35b07a3222c1d752e7f1251728f16d9820184bdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKRWKPV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4MUbEXg1XB6Rb7QN39RVruGEk2CXx9ep8g7N0GmDMwwIhAJOSFymZM2E9YiN%2B%2B9njAzd4vKWjSYrrDzNtu6yJEUq5Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwjuWbkkQOaIW71wgUq3AO56y57pJ49RjR%2BfGea48uv%2F9TFRtu2ChXhdnCt2uRDlMrPETQQ9lHBaS2Ow1bRncXlkAUyPNuSmNuMyQwFu9%2FRgs8ok%2FVnYJJs1vc6zNSAUPMgJm5lRgmn16sRuXNFwTSnmjjUP%2BfTZSO9EICIV3a5hExys36f4cr9A4h8ztSKh30CKyrYy5Kgh02j2h4DrPMZgMw61VgcBns93CFr9aAr6Xl2dX5WQyLY6z9LYlobOtcTzfw4rQfGsikpmkbySUMgj1TovgW6blRfrie3wFCtFyhvpEZIoYevBZlwi9OAG0Oy6QasjGw3KAvv5QCBdMx%2FrS3ZZ%2BGxUQskO5%2FfTo0cuSL1emtXSTfMiUI9FMPUuu8mD1WPoVRIoSJaxgvcdS1qdowKOwbllWRGRKB05MLa5YhdcPd41%2Bm9wpyjLgvG2FmCNiX24G%2BxUpS8Cos0qgIKBVHrFJOX73VxztJD983ui3P3ONZRFzDorq4UhScEdr0YiCWuGaV3DyS9Jvd%2B1LNCAi51KmAOVPc%2BjB8mfqHeFVkBjI7dHxHXmuh3PgNxts8mb%2B07lRWcmZvS9xzF4%2Fz5D%2FVPYk60bE%2BxpnQGtik1vtXf328leWyssGyfh7Kn9eP%2FtR1MhfVDVkklEzCRlYW9BjqkAevY1F7fabJKqT9uQm3%2F5f8BU5GUMcjgRX6ZXgI2y6YSvX9Q9H5wI2JEVh0N%2B819SJCKGTiegkaBkBfuhXv2JKexJOcV8su%2FON72dnSmbK%2FNA9jKH3BrPhwrHeaLDVDkxBBKiRv5gcHs9fbGAiXqWynJBtOiLj%2Biqc5UdKrzuC9QNPEKE%2FalTRr%2BEhgiuPeE5IAgOYcjIvDNNDmLfjolGArEcusf&X-Amz-Signature=fb92caa822a89379a84a5954d17323c60051907aa664dec8ad85afd7b6593905&X-Amz-SignedHeaders=host&x-id=GetObject)
