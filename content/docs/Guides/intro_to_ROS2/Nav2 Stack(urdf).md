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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMVSVM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx7QFXWajb%2Fbb3Nia2abgs%2Fi2mBcgkdT4yZrWDoZAYAAIhALcZsC%2BqGtSCYsoXpLb6XM7JPzPTtYQKaVEcURNHH7guKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOktAdfG113WubOyEq3AO9tBIGrwKxvOIvLQbuvpwvp4cFpcJrcZ7IFTw6hcRw89R0LmZqTPg0nENC%2FYmkIS%2FHrCH%2FeFQG9JrbOkIcvchi6PGh3%2BAUV3T8hkyc%2BNlN9yuhOHvIEInZkTvVpRJ66SzEi6V6V7bclSs7%2FxqqXg2qBMNc1C%2BOPKvCY5ZHAJBbWFCiRtewO7yFM3o4Gnxg%2B0SqmvX4rZBEoqa1kKfzHFF8uXGPnaiTGdV4DCiBsvVpXMZzmGCRnd4F8VfVmp5s%2FOj0FgkTtrQBUOn79pQazjNF9FR4laXqTTeFkcJOBWA9XwRyzF7iYtMyqYaPlzckwTSFSqXNBLRzEiyEsoNZQHfl2W%2FgfTIRZtE3PEOGQAYgkptxKQ%2FYWVamHTIQL%2FFZk2Lc1hWYVmTbZBAj2by879J7YBoEPdQcbn2ZeKKrZG8GMpJBpK9FXOLgVmWRM83bzrSwW%2Fh3ekmr4fA3AeougSqkfiCSsOc1aw%2F5l6bQzrTvSVLfTwDKlsZEGYweLeSmnognOqiMJeA%2B4ZGgCbUdCeqkQR0OyasPtwofafGERmMofKKbjqOb1wW%2BOoxEe0t%2BzzZQOFvps9xdplefgAnJ%2BcaygafafSgSdkkVwa9Ql0uBtKFTKescV3u%2BhlU%2BSDDenoS%2FBjqkAUI7oyU4j0dB2uc3WMC29r8mIOC26fngA20pHBzCPP2a9b8r81%2Fnshf%2BvLavtzrQ7DCWjAAKQUqLv7X3Ekbr7m302RBa70SDFyLU%2BYWV0SmS7%2FUkGsm2exaVRCBwyw%2FiOOst9MkDwEQT%2BN18ojvnjZm5z9hsn1wdw9lxGHG4jILcFvlz2%2BlovVjXLyfzNrUsses3dQtBgaigxlcVIwbXlCMR0uNN&X-Amz-Signature=193f7d07154178754862432439fed5e5fa5e3fb112cff415010d62225325dadd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMVSVM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx7QFXWajb%2Fbb3Nia2abgs%2Fi2mBcgkdT4yZrWDoZAYAAIhALcZsC%2BqGtSCYsoXpLb6XM7JPzPTtYQKaVEcURNHH7guKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOktAdfG113WubOyEq3AO9tBIGrwKxvOIvLQbuvpwvp4cFpcJrcZ7IFTw6hcRw89R0LmZqTPg0nENC%2FYmkIS%2FHrCH%2FeFQG9JrbOkIcvchi6PGh3%2BAUV3T8hkyc%2BNlN9yuhOHvIEInZkTvVpRJ66SzEi6V6V7bclSs7%2FxqqXg2qBMNc1C%2BOPKvCY5ZHAJBbWFCiRtewO7yFM3o4Gnxg%2B0SqmvX4rZBEoqa1kKfzHFF8uXGPnaiTGdV4DCiBsvVpXMZzmGCRnd4F8VfVmp5s%2FOj0FgkTtrQBUOn79pQazjNF9FR4laXqTTeFkcJOBWA9XwRyzF7iYtMyqYaPlzckwTSFSqXNBLRzEiyEsoNZQHfl2W%2FgfTIRZtE3PEOGQAYgkptxKQ%2FYWVamHTIQL%2FFZk2Lc1hWYVmTbZBAj2by879J7YBoEPdQcbn2ZeKKrZG8GMpJBpK9FXOLgVmWRM83bzrSwW%2Fh3ekmr4fA3AeougSqkfiCSsOc1aw%2F5l6bQzrTvSVLfTwDKlsZEGYweLeSmnognOqiMJeA%2B4ZGgCbUdCeqkQR0OyasPtwofafGERmMofKKbjqOb1wW%2BOoxEe0t%2BzzZQOFvps9xdplefgAnJ%2BcaygafafSgSdkkVwa9Ql0uBtKFTKescV3u%2BhlU%2BSDDenoS%2FBjqkAUI7oyU4j0dB2uc3WMC29r8mIOC26fngA20pHBzCPP2a9b8r81%2Fnshf%2BvLavtzrQ7DCWjAAKQUqLv7X3Ekbr7m302RBa70SDFyLU%2BYWV0SmS7%2FUkGsm2exaVRCBwyw%2FiOOst9MkDwEQT%2BN18ojvnjZm5z9hsn1wdw9lxGHG4jILcFvlz2%2BlovVjXLyfzNrUsses3dQtBgaigxlcVIwbXlCMR0uNN&X-Amz-Signature=97235f8f2a863753ec649af1c5aa99faa7ca61cbbe53dcdaf6114a1946c0ad73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMVSVM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx7QFXWajb%2Fbb3Nia2abgs%2Fi2mBcgkdT4yZrWDoZAYAAIhALcZsC%2BqGtSCYsoXpLb6XM7JPzPTtYQKaVEcURNHH7guKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOktAdfG113WubOyEq3AO9tBIGrwKxvOIvLQbuvpwvp4cFpcJrcZ7IFTw6hcRw89R0LmZqTPg0nENC%2FYmkIS%2FHrCH%2FeFQG9JrbOkIcvchi6PGh3%2BAUV3T8hkyc%2BNlN9yuhOHvIEInZkTvVpRJ66SzEi6V6V7bclSs7%2FxqqXg2qBMNc1C%2BOPKvCY5ZHAJBbWFCiRtewO7yFM3o4Gnxg%2B0SqmvX4rZBEoqa1kKfzHFF8uXGPnaiTGdV4DCiBsvVpXMZzmGCRnd4F8VfVmp5s%2FOj0FgkTtrQBUOn79pQazjNF9FR4laXqTTeFkcJOBWA9XwRyzF7iYtMyqYaPlzckwTSFSqXNBLRzEiyEsoNZQHfl2W%2FgfTIRZtE3PEOGQAYgkptxKQ%2FYWVamHTIQL%2FFZk2Lc1hWYVmTbZBAj2by879J7YBoEPdQcbn2ZeKKrZG8GMpJBpK9FXOLgVmWRM83bzrSwW%2Fh3ekmr4fA3AeougSqkfiCSsOc1aw%2F5l6bQzrTvSVLfTwDKlsZEGYweLeSmnognOqiMJeA%2B4ZGgCbUdCeqkQR0OyasPtwofafGERmMofKKbjqOb1wW%2BOoxEe0t%2BzzZQOFvps9xdplefgAnJ%2BcaygafafSgSdkkVwa9Ql0uBtKFTKescV3u%2BhlU%2BSDDenoS%2FBjqkAUI7oyU4j0dB2uc3WMC29r8mIOC26fngA20pHBzCPP2a9b8r81%2Fnshf%2BvLavtzrQ7DCWjAAKQUqLv7X3Ekbr7m302RBa70SDFyLU%2BYWV0SmS7%2FUkGsm2exaVRCBwyw%2FiOOst9MkDwEQT%2BN18ojvnjZm5z9hsn1wdw9lxGHG4jILcFvlz2%2BlovVjXLyfzNrUsses3dQtBgaigxlcVIwbXlCMR0uNN&X-Amz-Signature=0598346c7a4a757acbd102b6b5b12471e0e5482c262530cc3039d690f3d76ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMVSVM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx7QFXWajb%2Fbb3Nia2abgs%2Fi2mBcgkdT4yZrWDoZAYAAIhALcZsC%2BqGtSCYsoXpLb6XM7JPzPTtYQKaVEcURNHH7guKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOktAdfG113WubOyEq3AO9tBIGrwKxvOIvLQbuvpwvp4cFpcJrcZ7IFTw6hcRw89R0LmZqTPg0nENC%2FYmkIS%2FHrCH%2FeFQG9JrbOkIcvchi6PGh3%2BAUV3T8hkyc%2BNlN9yuhOHvIEInZkTvVpRJ66SzEi6V6V7bclSs7%2FxqqXg2qBMNc1C%2BOPKvCY5ZHAJBbWFCiRtewO7yFM3o4Gnxg%2B0SqmvX4rZBEoqa1kKfzHFF8uXGPnaiTGdV4DCiBsvVpXMZzmGCRnd4F8VfVmp5s%2FOj0FgkTtrQBUOn79pQazjNF9FR4laXqTTeFkcJOBWA9XwRyzF7iYtMyqYaPlzckwTSFSqXNBLRzEiyEsoNZQHfl2W%2FgfTIRZtE3PEOGQAYgkptxKQ%2FYWVamHTIQL%2FFZk2Lc1hWYVmTbZBAj2by879J7YBoEPdQcbn2ZeKKrZG8GMpJBpK9FXOLgVmWRM83bzrSwW%2Fh3ekmr4fA3AeougSqkfiCSsOc1aw%2F5l6bQzrTvSVLfTwDKlsZEGYweLeSmnognOqiMJeA%2B4ZGgCbUdCeqkQR0OyasPtwofafGERmMofKKbjqOb1wW%2BOoxEe0t%2BzzZQOFvps9xdplefgAnJ%2BcaygafafSgSdkkVwa9Ql0uBtKFTKescV3u%2BhlU%2BSDDenoS%2FBjqkAUI7oyU4j0dB2uc3WMC29r8mIOC26fngA20pHBzCPP2a9b8r81%2Fnshf%2BvLavtzrQ7DCWjAAKQUqLv7X3Ekbr7m302RBa70SDFyLU%2BYWV0SmS7%2FUkGsm2exaVRCBwyw%2FiOOst9MkDwEQT%2BN18ojvnjZm5z9hsn1wdw9lxGHG4jILcFvlz2%2BlovVjXLyfzNrUsses3dQtBgaigxlcVIwbXlCMR0uNN&X-Amz-Signature=2898db0b4da0a09e37da6d20cc8d96c3ab0238233ab1d416cc3e12c5af9cdd20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMVSVM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx7QFXWajb%2Fbb3Nia2abgs%2Fi2mBcgkdT4yZrWDoZAYAAIhALcZsC%2BqGtSCYsoXpLb6XM7JPzPTtYQKaVEcURNHH7guKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOktAdfG113WubOyEq3AO9tBIGrwKxvOIvLQbuvpwvp4cFpcJrcZ7IFTw6hcRw89R0LmZqTPg0nENC%2FYmkIS%2FHrCH%2FeFQG9JrbOkIcvchi6PGh3%2BAUV3T8hkyc%2BNlN9yuhOHvIEInZkTvVpRJ66SzEi6V6V7bclSs7%2FxqqXg2qBMNc1C%2BOPKvCY5ZHAJBbWFCiRtewO7yFM3o4Gnxg%2B0SqmvX4rZBEoqa1kKfzHFF8uXGPnaiTGdV4DCiBsvVpXMZzmGCRnd4F8VfVmp5s%2FOj0FgkTtrQBUOn79pQazjNF9FR4laXqTTeFkcJOBWA9XwRyzF7iYtMyqYaPlzckwTSFSqXNBLRzEiyEsoNZQHfl2W%2FgfTIRZtE3PEOGQAYgkptxKQ%2FYWVamHTIQL%2FFZk2Lc1hWYVmTbZBAj2by879J7YBoEPdQcbn2ZeKKrZG8GMpJBpK9FXOLgVmWRM83bzrSwW%2Fh3ekmr4fA3AeougSqkfiCSsOc1aw%2F5l6bQzrTvSVLfTwDKlsZEGYweLeSmnognOqiMJeA%2B4ZGgCbUdCeqkQR0OyasPtwofafGERmMofKKbjqOb1wW%2BOoxEe0t%2BzzZQOFvps9xdplefgAnJ%2BcaygafafSgSdkkVwa9Ql0uBtKFTKescV3u%2BhlU%2BSDDenoS%2FBjqkAUI7oyU4j0dB2uc3WMC29r8mIOC26fngA20pHBzCPP2a9b8r81%2Fnshf%2BvLavtzrQ7DCWjAAKQUqLv7X3Ekbr7m302RBa70SDFyLU%2BYWV0SmS7%2FUkGsm2exaVRCBwyw%2FiOOst9MkDwEQT%2BN18ojvnjZm5z9hsn1wdw9lxGHG4jILcFvlz2%2BlovVjXLyfzNrUsses3dQtBgaigxlcVIwbXlCMR0uNN&X-Amz-Signature=a215445bef45b88459660ed6abac8125b32bad2ca5db6b2c72bb211cd0cd5ced&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMVSVM5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx7QFXWajb%2Fbb3Nia2abgs%2Fi2mBcgkdT4yZrWDoZAYAAIhALcZsC%2BqGtSCYsoXpLb6XM7JPzPTtYQKaVEcURNHH7guKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOktAdfG113WubOyEq3AO9tBIGrwKxvOIvLQbuvpwvp4cFpcJrcZ7IFTw6hcRw89R0LmZqTPg0nENC%2FYmkIS%2FHrCH%2FeFQG9JrbOkIcvchi6PGh3%2BAUV3T8hkyc%2BNlN9yuhOHvIEInZkTvVpRJ66SzEi6V6V7bclSs7%2FxqqXg2qBMNc1C%2BOPKvCY5ZHAJBbWFCiRtewO7yFM3o4Gnxg%2B0SqmvX4rZBEoqa1kKfzHFF8uXGPnaiTGdV4DCiBsvVpXMZzmGCRnd4F8VfVmp5s%2FOj0FgkTtrQBUOn79pQazjNF9FR4laXqTTeFkcJOBWA9XwRyzF7iYtMyqYaPlzckwTSFSqXNBLRzEiyEsoNZQHfl2W%2FgfTIRZtE3PEOGQAYgkptxKQ%2FYWVamHTIQL%2FFZk2Lc1hWYVmTbZBAj2by879J7YBoEPdQcbn2ZeKKrZG8GMpJBpK9FXOLgVmWRM83bzrSwW%2Fh3ekmr4fA3AeougSqkfiCSsOc1aw%2F5l6bQzrTvSVLfTwDKlsZEGYweLeSmnognOqiMJeA%2B4ZGgCbUdCeqkQR0OyasPtwofafGERmMofKKbjqOb1wW%2BOoxEe0t%2BzzZQOFvps9xdplefgAnJ%2BcaygafafSgSdkkVwa9Ql0uBtKFTKescV3u%2BhlU%2BSDDenoS%2FBjqkAUI7oyU4j0dB2uc3WMC29r8mIOC26fngA20pHBzCPP2a9b8r81%2Fnshf%2BvLavtzrQ7DCWjAAKQUqLv7X3Ekbr7m302RBa70SDFyLU%2BYWV0SmS7%2FUkGsm2exaVRCBwyw%2FiOOst9MkDwEQT%2BN18ojvnjZm5z9hsn1wdw9lxGHG4jILcFvlz2%2BlovVjXLyfzNrUsses3dQtBgaigxlcVIwbXlCMR0uNN&X-Amz-Signature=99ed28714be2253d70ff0935e5f57911d5832ee93384b4268432481f0e470583&X-Amz-SignedHeaders=host&x-id=GetObject)
