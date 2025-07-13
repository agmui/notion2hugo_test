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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXUOKMQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BYoaLd6E0j%2Fbllje6KvvG9fMtcpEj%2FIKuePMHtiYxQIhAIYR%2FuexlRHIyXks6FzmEhusjcWsNZzapWtS%2BgrI%2BeNWKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytg8GHNB3W5aMV8F8q3AOyv9PbpX6Rg%2Bh0WdtwNLI7vVWYRQFuXFeY717QEncsrY4UBWRK1nRYDnpoDs2Bkc%2ByGOTCmHp8Y8XwfS%2FkMty%2BJJrw3LiZV3GvYb%2BUfmeeecYN1R2ALzJ24nT7pW5j7oKMCx%2F4b7oaYhVFp2kHca3Sc26onQF3%2Fviq8Hbc7zAmTZeV53UIjJjb0RnvfgnXCtFkFWXXx%2Fr1xOD%2FgAUzi1lPj2ftplydG5fNBIUVKqMzYuwVmqlBmBrKvnKv6VutbBxoaB7OFcoDdwtB2GHPV1qfKjpAPGCUOvBCIi6hNN9bKW6Udig4L2%2FWcV0kfaJTY7tVko%2Fklc%2Bv4bx1j60%2FzW3WX%2B0WR5Fia8KieUIPjfAnnj%2Bd0a6XkamkTazHaRVte78SDN0Ukgm0gpG24YwX8MlWODoTs6kCWJjmPw8Bi%2Bi01Hx9mTdv4kDHEyvCn67xAWejKhIFR9OPmpokY7oCDaQD7GVzgtlF9yUzumGkyXXCn%2BxVhNY7drFmJtImXpDsn4iFG%2BtvZSNk0GetcUk%2FK0PcVDKOIwD2UiyX1EmZ2T3sWA1Fz8fsirMrOQ%2FRmxYN%2BCrlv01AJGY4ZLRYrgO6vX3zQUtNVOk52WiL8coRjU8i%2F5Zyhzw6cVVOOBXBHTCsgczDBjqkAbquvEguzRPniDR5Olc1r%2FvlTSM5Z8P6pzDjhY1p9Eq2hsb4h3UJ4ZpVYsZbzz41fp2ZoGZzXqoShK3pGBKYOP6PCLIuUx42Eg%2BhQ9Dg37M6kmi7MVdZOSbEvGsR1w8i1FmAlv8SwqIc3OkGhnPQNfcaX7mWZQLhclx%2BIdxasdDovGSOWMwo%2F3jRJO2lPiHQ5Poplh%2Fkq1CrN7VweTy5XL86g3Bj&X-Amz-Signature=fc188bf1d853c3090ee5d44a1b323136233a41b6d4dd9a8a4a66b7364b75be54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXUOKMQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BYoaLd6E0j%2Fbllje6KvvG9fMtcpEj%2FIKuePMHtiYxQIhAIYR%2FuexlRHIyXks6FzmEhusjcWsNZzapWtS%2BgrI%2BeNWKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytg8GHNB3W5aMV8F8q3AOyv9PbpX6Rg%2Bh0WdtwNLI7vVWYRQFuXFeY717QEncsrY4UBWRK1nRYDnpoDs2Bkc%2ByGOTCmHp8Y8XwfS%2FkMty%2BJJrw3LiZV3GvYb%2BUfmeeecYN1R2ALzJ24nT7pW5j7oKMCx%2F4b7oaYhVFp2kHca3Sc26onQF3%2Fviq8Hbc7zAmTZeV53UIjJjb0RnvfgnXCtFkFWXXx%2Fr1xOD%2FgAUzi1lPj2ftplydG5fNBIUVKqMzYuwVmqlBmBrKvnKv6VutbBxoaB7OFcoDdwtB2GHPV1qfKjpAPGCUOvBCIi6hNN9bKW6Udig4L2%2FWcV0kfaJTY7tVko%2Fklc%2Bv4bx1j60%2FzW3WX%2B0WR5Fia8KieUIPjfAnnj%2Bd0a6XkamkTazHaRVte78SDN0Ukgm0gpG24YwX8MlWODoTs6kCWJjmPw8Bi%2Bi01Hx9mTdv4kDHEyvCn67xAWejKhIFR9OPmpokY7oCDaQD7GVzgtlF9yUzumGkyXXCn%2BxVhNY7drFmJtImXpDsn4iFG%2BtvZSNk0GetcUk%2FK0PcVDKOIwD2UiyX1EmZ2T3sWA1Fz8fsirMrOQ%2FRmxYN%2BCrlv01AJGY4ZLRYrgO6vX3zQUtNVOk52WiL8coRjU8i%2F5Zyhzw6cVVOOBXBHTCsgczDBjqkAbquvEguzRPniDR5Olc1r%2FvlTSM5Z8P6pzDjhY1p9Eq2hsb4h3UJ4ZpVYsZbzz41fp2ZoGZzXqoShK3pGBKYOP6PCLIuUx42Eg%2BhQ9Dg37M6kmi7MVdZOSbEvGsR1w8i1FmAlv8SwqIc3OkGhnPQNfcaX7mWZQLhclx%2BIdxasdDovGSOWMwo%2F3jRJO2lPiHQ5Poplh%2Fkq1CrN7VweTy5XL86g3Bj&X-Amz-Signature=a2912ae8537e80db4d76f4e33eac19548e37976043ef585be36ecb3147a4bf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXUOKMQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BYoaLd6E0j%2Fbllje6KvvG9fMtcpEj%2FIKuePMHtiYxQIhAIYR%2FuexlRHIyXks6FzmEhusjcWsNZzapWtS%2BgrI%2BeNWKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytg8GHNB3W5aMV8F8q3AOyv9PbpX6Rg%2Bh0WdtwNLI7vVWYRQFuXFeY717QEncsrY4UBWRK1nRYDnpoDs2Bkc%2ByGOTCmHp8Y8XwfS%2FkMty%2BJJrw3LiZV3GvYb%2BUfmeeecYN1R2ALzJ24nT7pW5j7oKMCx%2F4b7oaYhVFp2kHca3Sc26onQF3%2Fviq8Hbc7zAmTZeV53UIjJjb0RnvfgnXCtFkFWXXx%2Fr1xOD%2FgAUzi1lPj2ftplydG5fNBIUVKqMzYuwVmqlBmBrKvnKv6VutbBxoaB7OFcoDdwtB2GHPV1qfKjpAPGCUOvBCIi6hNN9bKW6Udig4L2%2FWcV0kfaJTY7tVko%2Fklc%2Bv4bx1j60%2FzW3WX%2B0WR5Fia8KieUIPjfAnnj%2Bd0a6XkamkTazHaRVte78SDN0Ukgm0gpG24YwX8MlWODoTs6kCWJjmPw8Bi%2Bi01Hx9mTdv4kDHEyvCn67xAWejKhIFR9OPmpokY7oCDaQD7GVzgtlF9yUzumGkyXXCn%2BxVhNY7drFmJtImXpDsn4iFG%2BtvZSNk0GetcUk%2FK0PcVDKOIwD2UiyX1EmZ2T3sWA1Fz8fsirMrOQ%2FRmxYN%2BCrlv01AJGY4ZLRYrgO6vX3zQUtNVOk52WiL8coRjU8i%2F5Zyhzw6cVVOOBXBHTCsgczDBjqkAbquvEguzRPniDR5Olc1r%2FvlTSM5Z8P6pzDjhY1p9Eq2hsb4h3UJ4ZpVYsZbzz41fp2ZoGZzXqoShK3pGBKYOP6PCLIuUx42Eg%2BhQ9Dg37M6kmi7MVdZOSbEvGsR1w8i1FmAlv8SwqIc3OkGhnPQNfcaX7mWZQLhclx%2BIdxasdDovGSOWMwo%2F3jRJO2lPiHQ5Poplh%2Fkq1CrN7VweTy5XL86g3Bj&X-Amz-Signature=0e228392c4b383ecf9e730cb21cf04fad80e71dd92bc1b2e367eaa468efdfbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXUOKMQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BYoaLd6E0j%2Fbllje6KvvG9fMtcpEj%2FIKuePMHtiYxQIhAIYR%2FuexlRHIyXks6FzmEhusjcWsNZzapWtS%2BgrI%2BeNWKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytg8GHNB3W5aMV8F8q3AOyv9PbpX6Rg%2Bh0WdtwNLI7vVWYRQFuXFeY717QEncsrY4UBWRK1nRYDnpoDs2Bkc%2ByGOTCmHp8Y8XwfS%2FkMty%2BJJrw3LiZV3GvYb%2BUfmeeecYN1R2ALzJ24nT7pW5j7oKMCx%2F4b7oaYhVFp2kHca3Sc26onQF3%2Fviq8Hbc7zAmTZeV53UIjJjb0RnvfgnXCtFkFWXXx%2Fr1xOD%2FgAUzi1lPj2ftplydG5fNBIUVKqMzYuwVmqlBmBrKvnKv6VutbBxoaB7OFcoDdwtB2GHPV1qfKjpAPGCUOvBCIi6hNN9bKW6Udig4L2%2FWcV0kfaJTY7tVko%2Fklc%2Bv4bx1j60%2FzW3WX%2B0WR5Fia8KieUIPjfAnnj%2Bd0a6XkamkTazHaRVte78SDN0Ukgm0gpG24YwX8MlWODoTs6kCWJjmPw8Bi%2Bi01Hx9mTdv4kDHEyvCn67xAWejKhIFR9OPmpokY7oCDaQD7GVzgtlF9yUzumGkyXXCn%2BxVhNY7drFmJtImXpDsn4iFG%2BtvZSNk0GetcUk%2FK0PcVDKOIwD2UiyX1EmZ2T3sWA1Fz8fsirMrOQ%2FRmxYN%2BCrlv01AJGY4ZLRYrgO6vX3zQUtNVOk52WiL8coRjU8i%2F5Zyhzw6cVVOOBXBHTCsgczDBjqkAbquvEguzRPniDR5Olc1r%2FvlTSM5Z8P6pzDjhY1p9Eq2hsb4h3UJ4ZpVYsZbzz41fp2ZoGZzXqoShK3pGBKYOP6PCLIuUx42Eg%2BhQ9Dg37M6kmi7MVdZOSbEvGsR1w8i1FmAlv8SwqIc3OkGhnPQNfcaX7mWZQLhclx%2BIdxasdDovGSOWMwo%2F3jRJO2lPiHQ5Poplh%2Fkq1CrN7VweTy5XL86g3Bj&X-Amz-Signature=838a9895b3b8f323852805cb7355300c097f20b7023cc0582ad103cb74de48c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXUOKMQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BYoaLd6E0j%2Fbllje6KvvG9fMtcpEj%2FIKuePMHtiYxQIhAIYR%2FuexlRHIyXks6FzmEhusjcWsNZzapWtS%2BgrI%2BeNWKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytg8GHNB3W5aMV8F8q3AOyv9PbpX6Rg%2Bh0WdtwNLI7vVWYRQFuXFeY717QEncsrY4UBWRK1nRYDnpoDs2Bkc%2ByGOTCmHp8Y8XwfS%2FkMty%2BJJrw3LiZV3GvYb%2BUfmeeecYN1R2ALzJ24nT7pW5j7oKMCx%2F4b7oaYhVFp2kHca3Sc26onQF3%2Fviq8Hbc7zAmTZeV53UIjJjb0RnvfgnXCtFkFWXXx%2Fr1xOD%2FgAUzi1lPj2ftplydG5fNBIUVKqMzYuwVmqlBmBrKvnKv6VutbBxoaB7OFcoDdwtB2GHPV1qfKjpAPGCUOvBCIi6hNN9bKW6Udig4L2%2FWcV0kfaJTY7tVko%2Fklc%2Bv4bx1j60%2FzW3WX%2B0WR5Fia8KieUIPjfAnnj%2Bd0a6XkamkTazHaRVte78SDN0Ukgm0gpG24YwX8MlWODoTs6kCWJjmPw8Bi%2Bi01Hx9mTdv4kDHEyvCn67xAWejKhIFR9OPmpokY7oCDaQD7GVzgtlF9yUzumGkyXXCn%2BxVhNY7drFmJtImXpDsn4iFG%2BtvZSNk0GetcUk%2FK0PcVDKOIwD2UiyX1EmZ2T3sWA1Fz8fsirMrOQ%2FRmxYN%2BCrlv01AJGY4ZLRYrgO6vX3zQUtNVOk52WiL8coRjU8i%2F5Zyhzw6cVVOOBXBHTCsgczDBjqkAbquvEguzRPniDR5Olc1r%2FvlTSM5Z8P6pzDjhY1p9Eq2hsb4h3UJ4ZpVYsZbzz41fp2ZoGZzXqoShK3pGBKYOP6PCLIuUx42Eg%2BhQ9Dg37M6kmi7MVdZOSbEvGsR1w8i1FmAlv8SwqIc3OkGhnPQNfcaX7mWZQLhclx%2BIdxasdDovGSOWMwo%2F3jRJO2lPiHQ5Poplh%2Fkq1CrN7VweTy5XL86g3Bj&X-Amz-Signature=cb89af3feeba92e51a9fdae37569a84200b9d981839ee4da790aef86e928fc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXUOKMQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BYoaLd6E0j%2Fbllje6KvvG9fMtcpEj%2FIKuePMHtiYxQIhAIYR%2FuexlRHIyXks6FzmEhusjcWsNZzapWtS%2BgrI%2BeNWKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytg8GHNB3W5aMV8F8q3AOyv9PbpX6Rg%2Bh0WdtwNLI7vVWYRQFuXFeY717QEncsrY4UBWRK1nRYDnpoDs2Bkc%2ByGOTCmHp8Y8XwfS%2FkMty%2BJJrw3LiZV3GvYb%2BUfmeeecYN1R2ALzJ24nT7pW5j7oKMCx%2F4b7oaYhVFp2kHca3Sc26onQF3%2Fviq8Hbc7zAmTZeV53UIjJjb0RnvfgnXCtFkFWXXx%2Fr1xOD%2FgAUzi1lPj2ftplydG5fNBIUVKqMzYuwVmqlBmBrKvnKv6VutbBxoaB7OFcoDdwtB2GHPV1qfKjpAPGCUOvBCIi6hNN9bKW6Udig4L2%2FWcV0kfaJTY7tVko%2Fklc%2Bv4bx1j60%2FzW3WX%2B0WR5Fia8KieUIPjfAnnj%2Bd0a6XkamkTazHaRVte78SDN0Ukgm0gpG24YwX8MlWODoTs6kCWJjmPw8Bi%2Bi01Hx9mTdv4kDHEyvCn67xAWejKhIFR9OPmpokY7oCDaQD7GVzgtlF9yUzumGkyXXCn%2BxVhNY7drFmJtImXpDsn4iFG%2BtvZSNk0GetcUk%2FK0PcVDKOIwD2UiyX1EmZ2T3sWA1Fz8fsirMrOQ%2FRmxYN%2BCrlv01AJGY4ZLRYrgO6vX3zQUtNVOk52WiL8coRjU8i%2F5Zyhzw6cVVOOBXBHTCsgczDBjqkAbquvEguzRPniDR5Olc1r%2FvlTSM5Z8P6pzDjhY1p9Eq2hsb4h3UJ4ZpVYsZbzz41fp2ZoGZzXqoShK3pGBKYOP6PCLIuUx42Eg%2BhQ9Dg37M6kmi7MVdZOSbEvGsR1w8i1FmAlv8SwqIc3OkGhnPQNfcaX7mWZQLhclx%2BIdxasdDovGSOWMwo%2F3jRJO2lPiHQ5Poplh%2Fkq1CrN7VweTy5XL86g3Bj&X-Amz-Signature=0f5a4b172aada41ada8ddc5cc92eec41768f697ca90279ea0b9bf87f30b9e1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
