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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=4cdf3db1f41aefb51f7451636b27e063883b1a6ba4dfb6d30fe6b0725c9f96cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=bd584bc32a0bedf5f4adac970c7d4ec8e1f18156a859a0afdff2c8e0ea8485c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=ae1aba57d0685d736c2933d06c5c7ec28c512a1af3f574a604524653a91f8026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=cbd7f8789fb7c527fbcd11914e16f411d737e7a9c3e4a3d590cc79cf88cc8813&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=59181ed0c0d5ae496139f42a19880e2db7e2dae012c4bb63ee93e3fbaa0cd780&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=e76f09b43575e293e1e29c328874946a6a2ff8f6b5741e4c1effadecff152fc3&X-Amz-SignedHeaders=host&x-id=GetObject)
