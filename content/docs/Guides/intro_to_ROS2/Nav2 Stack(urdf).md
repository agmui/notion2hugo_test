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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZQYXV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmiO2QnJ8uHT5QLn%2B0KHghj1jkegIzL2C37lvyZhRKVAiBYBCVYBFY1Yam%2Br4XnZqpX%2FYcwN7dB8evaY0px7VF4ASqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGj9fQfkeNA1Cr4QKtwDwVymQ3NENO14UglZUA3iyVlv%2B%2BaHrZTkFZiCSA4m0a31gvhl41i4kde5Yv%2FwnFX3Do3JAzENrSHGX7gwDuQbsqDFBqyBnp4Cdw4FDjJHe8SWSDkx3Hojo9sAq0Q7jb6y9pZAzABtV22sq%2Bv1cLw8ZBeddn5Bu0ffV9kPLXkGOS%2FRhgnhU%2B21aEUKJWPiTO82sNTQpQp8sdCq7hZ%2BLcqpNy2dxFdTpiAWvOUjtbZSy42dsI%2BiCOY7PRRf3T4NCdkkJmjejmgTnOgQUHqKMzdA%2Fslupzmk8pHDIEHK06f9gJnJwn5D4fIw27E0Ql9KGtRne1ZeroYAsbiGlxzUr82K2Oj4kVtJhBySALLKAtAgOrxJmL7CxN2HssbyASibWts3%2FNulXJdZRqUilW%2BYNPxSTuPwGHqURlbs1BHBe4uHhDSvwQQk4ca6ZNPfHVhWyPfG0OUWt6ip%2FfwGRT8ajgVhP3F6Y5Sga2NUZGGEbHTik8oWr79XbpMaN130HYDSKJGM5pBv3mEknZVwWJ8MrDW%2F%2B2ktwg%2BGbOC%2BKXNPMudvkDTt1%2BpF1F2Kb7BJaP36zWq1473Bpbs8hoY7o%2F379Pg3MB7M%2BshGxuW7thuxvkZ3W0ICX7LVFMoPAukNZ3Iw0%2Fy4vwY6pgGOYYJeaLzmg8cD9CALHV9qvLBhSas1j3thkaV5kPDvQTAX%2Fyg5cZWIXLSx8vl39BP%2FltNRK9Vq6eYBlMSDjDvqWIzwUd9rUV4icLQ2U5WSOlE%2BVES8rUfnGjy%2Fr%2BwQ8%2FeQl1VPg35G1gXOLdKuFPcpDgsVBZNyljXXE86jngR7rCkdPk393mgvKMe4Vpu91QlU5IMd5Y3mmiQZXSAPQrFhCyEkVWKM&X-Amz-Signature=43efe67b0b9d26bd5169afe53f3975d36f22847a52c10637c705b5456576d322&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZQYXV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmiO2QnJ8uHT5QLn%2B0KHghj1jkegIzL2C37lvyZhRKVAiBYBCVYBFY1Yam%2Br4XnZqpX%2FYcwN7dB8evaY0px7VF4ASqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGj9fQfkeNA1Cr4QKtwDwVymQ3NENO14UglZUA3iyVlv%2B%2BaHrZTkFZiCSA4m0a31gvhl41i4kde5Yv%2FwnFX3Do3JAzENrSHGX7gwDuQbsqDFBqyBnp4Cdw4FDjJHe8SWSDkx3Hojo9sAq0Q7jb6y9pZAzABtV22sq%2Bv1cLw8ZBeddn5Bu0ffV9kPLXkGOS%2FRhgnhU%2B21aEUKJWPiTO82sNTQpQp8sdCq7hZ%2BLcqpNy2dxFdTpiAWvOUjtbZSy42dsI%2BiCOY7PRRf3T4NCdkkJmjejmgTnOgQUHqKMzdA%2Fslupzmk8pHDIEHK06f9gJnJwn5D4fIw27E0Ql9KGtRne1ZeroYAsbiGlxzUr82K2Oj4kVtJhBySALLKAtAgOrxJmL7CxN2HssbyASibWts3%2FNulXJdZRqUilW%2BYNPxSTuPwGHqURlbs1BHBe4uHhDSvwQQk4ca6ZNPfHVhWyPfG0OUWt6ip%2FfwGRT8ajgVhP3F6Y5Sga2NUZGGEbHTik8oWr79XbpMaN130HYDSKJGM5pBv3mEknZVwWJ8MrDW%2F%2B2ktwg%2BGbOC%2BKXNPMudvkDTt1%2BpF1F2Kb7BJaP36zWq1473Bpbs8hoY7o%2F379Pg3MB7M%2BshGxuW7thuxvkZ3W0ICX7LVFMoPAukNZ3Iw0%2Fy4vwY6pgGOYYJeaLzmg8cD9CALHV9qvLBhSas1j3thkaV5kPDvQTAX%2Fyg5cZWIXLSx8vl39BP%2FltNRK9Vq6eYBlMSDjDvqWIzwUd9rUV4icLQ2U5WSOlE%2BVES8rUfnGjy%2Fr%2BwQ8%2FeQl1VPg35G1gXOLdKuFPcpDgsVBZNyljXXE86jngR7rCkdPk393mgvKMe4Vpu91QlU5IMd5Y3mmiQZXSAPQrFhCyEkVWKM&X-Amz-Signature=6bbdfcf0e2b849ddad6165c1967021bcc868b79a7580f1a5afe4b23fb5381450&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZQYXV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmiO2QnJ8uHT5QLn%2B0KHghj1jkegIzL2C37lvyZhRKVAiBYBCVYBFY1Yam%2Br4XnZqpX%2FYcwN7dB8evaY0px7VF4ASqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGj9fQfkeNA1Cr4QKtwDwVymQ3NENO14UglZUA3iyVlv%2B%2BaHrZTkFZiCSA4m0a31gvhl41i4kde5Yv%2FwnFX3Do3JAzENrSHGX7gwDuQbsqDFBqyBnp4Cdw4FDjJHe8SWSDkx3Hojo9sAq0Q7jb6y9pZAzABtV22sq%2Bv1cLw8ZBeddn5Bu0ffV9kPLXkGOS%2FRhgnhU%2B21aEUKJWPiTO82sNTQpQp8sdCq7hZ%2BLcqpNy2dxFdTpiAWvOUjtbZSy42dsI%2BiCOY7PRRf3T4NCdkkJmjejmgTnOgQUHqKMzdA%2Fslupzmk8pHDIEHK06f9gJnJwn5D4fIw27E0Ql9KGtRne1ZeroYAsbiGlxzUr82K2Oj4kVtJhBySALLKAtAgOrxJmL7CxN2HssbyASibWts3%2FNulXJdZRqUilW%2BYNPxSTuPwGHqURlbs1BHBe4uHhDSvwQQk4ca6ZNPfHVhWyPfG0OUWt6ip%2FfwGRT8ajgVhP3F6Y5Sga2NUZGGEbHTik8oWr79XbpMaN130HYDSKJGM5pBv3mEknZVwWJ8MrDW%2F%2B2ktwg%2BGbOC%2BKXNPMudvkDTt1%2BpF1F2Kb7BJaP36zWq1473Bpbs8hoY7o%2F379Pg3MB7M%2BshGxuW7thuxvkZ3W0ICX7LVFMoPAukNZ3Iw0%2Fy4vwY6pgGOYYJeaLzmg8cD9CALHV9qvLBhSas1j3thkaV5kPDvQTAX%2Fyg5cZWIXLSx8vl39BP%2FltNRK9Vq6eYBlMSDjDvqWIzwUd9rUV4icLQ2U5WSOlE%2BVES8rUfnGjy%2Fr%2BwQ8%2FeQl1VPg35G1gXOLdKuFPcpDgsVBZNyljXXE86jngR7rCkdPk393mgvKMe4Vpu91QlU5IMd5Y3mmiQZXSAPQrFhCyEkVWKM&X-Amz-Signature=317933f9675c2923a321dc0a7748bc07c1720a599d631d89301c072080c353f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZQYXV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmiO2QnJ8uHT5QLn%2B0KHghj1jkegIzL2C37lvyZhRKVAiBYBCVYBFY1Yam%2Br4XnZqpX%2FYcwN7dB8evaY0px7VF4ASqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGj9fQfkeNA1Cr4QKtwDwVymQ3NENO14UglZUA3iyVlv%2B%2BaHrZTkFZiCSA4m0a31gvhl41i4kde5Yv%2FwnFX3Do3JAzENrSHGX7gwDuQbsqDFBqyBnp4Cdw4FDjJHe8SWSDkx3Hojo9sAq0Q7jb6y9pZAzABtV22sq%2Bv1cLw8ZBeddn5Bu0ffV9kPLXkGOS%2FRhgnhU%2B21aEUKJWPiTO82sNTQpQp8sdCq7hZ%2BLcqpNy2dxFdTpiAWvOUjtbZSy42dsI%2BiCOY7PRRf3T4NCdkkJmjejmgTnOgQUHqKMzdA%2Fslupzmk8pHDIEHK06f9gJnJwn5D4fIw27E0Ql9KGtRne1ZeroYAsbiGlxzUr82K2Oj4kVtJhBySALLKAtAgOrxJmL7CxN2HssbyASibWts3%2FNulXJdZRqUilW%2BYNPxSTuPwGHqURlbs1BHBe4uHhDSvwQQk4ca6ZNPfHVhWyPfG0OUWt6ip%2FfwGRT8ajgVhP3F6Y5Sga2NUZGGEbHTik8oWr79XbpMaN130HYDSKJGM5pBv3mEknZVwWJ8MrDW%2F%2B2ktwg%2BGbOC%2BKXNPMudvkDTt1%2BpF1F2Kb7BJaP36zWq1473Bpbs8hoY7o%2F379Pg3MB7M%2BshGxuW7thuxvkZ3W0ICX7LVFMoPAukNZ3Iw0%2Fy4vwY6pgGOYYJeaLzmg8cD9CALHV9qvLBhSas1j3thkaV5kPDvQTAX%2Fyg5cZWIXLSx8vl39BP%2FltNRK9Vq6eYBlMSDjDvqWIzwUd9rUV4icLQ2U5WSOlE%2BVES8rUfnGjy%2Fr%2BwQ8%2FeQl1VPg35G1gXOLdKuFPcpDgsVBZNyljXXE86jngR7rCkdPk393mgvKMe4Vpu91QlU5IMd5Y3mmiQZXSAPQrFhCyEkVWKM&X-Amz-Signature=d5e8694fc6eee8bef149b79002189a626622e07ef3dbbbcde96f1dc0a9fa5daa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZQYXV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmiO2QnJ8uHT5QLn%2B0KHghj1jkegIzL2C37lvyZhRKVAiBYBCVYBFY1Yam%2Br4XnZqpX%2FYcwN7dB8evaY0px7VF4ASqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGj9fQfkeNA1Cr4QKtwDwVymQ3NENO14UglZUA3iyVlv%2B%2BaHrZTkFZiCSA4m0a31gvhl41i4kde5Yv%2FwnFX3Do3JAzENrSHGX7gwDuQbsqDFBqyBnp4Cdw4FDjJHe8SWSDkx3Hojo9sAq0Q7jb6y9pZAzABtV22sq%2Bv1cLw8ZBeddn5Bu0ffV9kPLXkGOS%2FRhgnhU%2B21aEUKJWPiTO82sNTQpQp8sdCq7hZ%2BLcqpNy2dxFdTpiAWvOUjtbZSy42dsI%2BiCOY7PRRf3T4NCdkkJmjejmgTnOgQUHqKMzdA%2Fslupzmk8pHDIEHK06f9gJnJwn5D4fIw27E0Ql9KGtRne1ZeroYAsbiGlxzUr82K2Oj4kVtJhBySALLKAtAgOrxJmL7CxN2HssbyASibWts3%2FNulXJdZRqUilW%2BYNPxSTuPwGHqURlbs1BHBe4uHhDSvwQQk4ca6ZNPfHVhWyPfG0OUWt6ip%2FfwGRT8ajgVhP3F6Y5Sga2NUZGGEbHTik8oWr79XbpMaN130HYDSKJGM5pBv3mEknZVwWJ8MrDW%2F%2B2ktwg%2BGbOC%2BKXNPMudvkDTt1%2BpF1F2Kb7BJaP36zWq1473Bpbs8hoY7o%2F379Pg3MB7M%2BshGxuW7thuxvkZ3W0ICX7LVFMoPAukNZ3Iw0%2Fy4vwY6pgGOYYJeaLzmg8cD9CALHV9qvLBhSas1j3thkaV5kPDvQTAX%2Fyg5cZWIXLSx8vl39BP%2FltNRK9Vq6eYBlMSDjDvqWIzwUd9rUV4icLQ2U5WSOlE%2BVES8rUfnGjy%2Fr%2BwQ8%2FeQl1VPg35G1gXOLdKuFPcpDgsVBZNyljXXE86jngR7rCkdPk393mgvKMe4Vpu91QlU5IMd5Y3mmiQZXSAPQrFhCyEkVWKM&X-Amz-Signature=9f507054bd4ad46716ff2a428c9229f00cc58d696975c019dc54f67f35499e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZQYXV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmiO2QnJ8uHT5QLn%2B0KHghj1jkegIzL2C37lvyZhRKVAiBYBCVYBFY1Yam%2Br4XnZqpX%2FYcwN7dB8evaY0px7VF4ASqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGj9fQfkeNA1Cr4QKtwDwVymQ3NENO14UglZUA3iyVlv%2B%2BaHrZTkFZiCSA4m0a31gvhl41i4kde5Yv%2FwnFX3Do3JAzENrSHGX7gwDuQbsqDFBqyBnp4Cdw4FDjJHe8SWSDkx3Hojo9sAq0Q7jb6y9pZAzABtV22sq%2Bv1cLw8ZBeddn5Bu0ffV9kPLXkGOS%2FRhgnhU%2B21aEUKJWPiTO82sNTQpQp8sdCq7hZ%2BLcqpNy2dxFdTpiAWvOUjtbZSy42dsI%2BiCOY7PRRf3T4NCdkkJmjejmgTnOgQUHqKMzdA%2Fslupzmk8pHDIEHK06f9gJnJwn5D4fIw27E0Ql9KGtRne1ZeroYAsbiGlxzUr82K2Oj4kVtJhBySALLKAtAgOrxJmL7CxN2HssbyASibWts3%2FNulXJdZRqUilW%2BYNPxSTuPwGHqURlbs1BHBe4uHhDSvwQQk4ca6ZNPfHVhWyPfG0OUWt6ip%2FfwGRT8ajgVhP3F6Y5Sga2NUZGGEbHTik8oWr79XbpMaN130HYDSKJGM5pBv3mEknZVwWJ8MrDW%2F%2B2ktwg%2BGbOC%2BKXNPMudvkDTt1%2BpF1F2Kb7BJaP36zWq1473Bpbs8hoY7o%2F379Pg3MB7M%2BshGxuW7thuxvkZ3W0ICX7LVFMoPAukNZ3Iw0%2Fy4vwY6pgGOYYJeaLzmg8cD9CALHV9qvLBhSas1j3thkaV5kPDvQTAX%2Fyg5cZWIXLSx8vl39BP%2FltNRK9Vq6eYBlMSDjDvqWIzwUd9rUV4icLQ2U5WSOlE%2BVES8rUfnGjy%2Fr%2BwQ8%2FeQl1VPg35G1gXOLdKuFPcpDgsVBZNyljXXE86jngR7rCkdPk393mgvKMe4Vpu91QlU5IMd5Y3mmiQZXSAPQrFhCyEkVWKM&X-Amz-Signature=949e117cb6df6eaee9a3d728c113ae1e30a5e19ce2846835c6679c6757d026bb&X-Amz-SignedHeaders=host&x-id=GetObject)
