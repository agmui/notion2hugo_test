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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSISC6A%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzBatA%2FUEX9%2BaokKAQDSTVHdPb%2BIwayY3C8Z3zxvLqAiEAmqiTYxPSjmMTMvgS9jT1ldaPG3drLGcDQTtSTRlxhrwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGzGWK1xKa%2B7uBaUoCrcA1PCdS%2BCUP%2BavSi3Tcpqt05zGD801o%2BOINtQutLifaLzHhgC1ydScNK2XM8x9vsR2g09nF%2BfnDhk3BU%2B5F%2BiclQrpAtnRQXQ0Yaq5jJ%2BefvKyInaLVaYxpBJHlmoIdq%2Bmisx%2FpO%2FElgzZZ4aJVyDUOgsg8HhUpXgXwy9m%2FkDQlyUm%2B98FxUDdW1SE4qfhrnz9%2FFum4cFjNgD6hjS7XGXXIJd4v3JPrBR82pklqWiYZNkKB7D6k8%2BMLwaErQhSjmVfUTRUek6aO%2B7TsSQF107U7usFUkVU7JdOneZipd4UbN%2B7E7GuF0yeoSITABYv8QxJt1UweOTWSngvUYsm7rHGaX0xOAqEkxMb3nrYzxshVodXKDiUEJhLY3s6z6WrsWeDhuem1imfz2fHKOvYnn%2FXbNM8sLmO0dF8IOirntYStbaGteyutFOST55sFEReGxDy6on77O0oODHn4K%2Bmf0NxRwmDtLOr67y9he76koLFE196W6FzoATek7oNYUpYz9DDxfdSsrnGpJGAL9XzQgpgzS5MvmpyDag%2BhRPjaIBWzAcVrZcsFTO9BoTSe6O%2FdXmxCEMFfA%2F8T62A2dKe8IXn1CggGH7W0YxAYBI3bHY3CGJl9X1Ra7Ib3SPA%2BtzMN3rw8IGOqUBGgr7Uio42cIc61mdn20bA8xvAQG8bMfoszVr5WkKKs5gB5OILk0ZfMRJ38XQUuhq%2Bm9LEJtF%2FxN199hPDBQLCo2BIUJJWSEz4I7Mb7VNFFDKaOZBHz7Lh%2B1%2F0RqVwLpttmQfy1CeHwEvQCxEY5XAaKLyWMsCZDfG%2BP5%2Fb1S8kHVGIH%2BJedk6B6yr77KP67HomOQAZ1j%2B8UQaAe8QCe7DpHDSZrXx&X-Amz-Signature=f0eb3f738c03e0caa3d5ba37c107ca21e1900fad45f7be490856a596d3b2f374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSISC6A%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzBatA%2FUEX9%2BaokKAQDSTVHdPb%2BIwayY3C8Z3zxvLqAiEAmqiTYxPSjmMTMvgS9jT1ldaPG3drLGcDQTtSTRlxhrwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGzGWK1xKa%2B7uBaUoCrcA1PCdS%2BCUP%2BavSi3Tcpqt05zGD801o%2BOINtQutLifaLzHhgC1ydScNK2XM8x9vsR2g09nF%2BfnDhk3BU%2B5F%2BiclQrpAtnRQXQ0Yaq5jJ%2BefvKyInaLVaYxpBJHlmoIdq%2Bmisx%2FpO%2FElgzZZ4aJVyDUOgsg8HhUpXgXwy9m%2FkDQlyUm%2B98FxUDdW1SE4qfhrnz9%2FFum4cFjNgD6hjS7XGXXIJd4v3JPrBR82pklqWiYZNkKB7D6k8%2BMLwaErQhSjmVfUTRUek6aO%2B7TsSQF107U7usFUkVU7JdOneZipd4UbN%2B7E7GuF0yeoSITABYv8QxJt1UweOTWSngvUYsm7rHGaX0xOAqEkxMb3nrYzxshVodXKDiUEJhLY3s6z6WrsWeDhuem1imfz2fHKOvYnn%2FXbNM8sLmO0dF8IOirntYStbaGteyutFOST55sFEReGxDy6on77O0oODHn4K%2Bmf0NxRwmDtLOr67y9he76koLFE196W6FzoATek7oNYUpYz9DDxfdSsrnGpJGAL9XzQgpgzS5MvmpyDag%2BhRPjaIBWzAcVrZcsFTO9BoTSe6O%2FdXmxCEMFfA%2F8T62A2dKe8IXn1CggGH7W0YxAYBI3bHY3CGJl9X1Ra7Ib3SPA%2BtzMN3rw8IGOqUBGgr7Uio42cIc61mdn20bA8xvAQG8bMfoszVr5WkKKs5gB5OILk0ZfMRJ38XQUuhq%2Bm9LEJtF%2FxN199hPDBQLCo2BIUJJWSEz4I7Mb7VNFFDKaOZBHz7Lh%2B1%2F0RqVwLpttmQfy1CeHwEvQCxEY5XAaKLyWMsCZDfG%2BP5%2Fb1S8kHVGIH%2BJedk6B6yr77KP67HomOQAZ1j%2B8UQaAe8QCe7DpHDSZrXx&X-Amz-Signature=9ed78632c934f80ffe70e5ef3d8c5b412164d329004c2420edd8fb0c709ae8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSISC6A%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzBatA%2FUEX9%2BaokKAQDSTVHdPb%2BIwayY3C8Z3zxvLqAiEAmqiTYxPSjmMTMvgS9jT1ldaPG3drLGcDQTtSTRlxhrwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGzGWK1xKa%2B7uBaUoCrcA1PCdS%2BCUP%2BavSi3Tcpqt05zGD801o%2BOINtQutLifaLzHhgC1ydScNK2XM8x9vsR2g09nF%2BfnDhk3BU%2B5F%2BiclQrpAtnRQXQ0Yaq5jJ%2BefvKyInaLVaYxpBJHlmoIdq%2Bmisx%2FpO%2FElgzZZ4aJVyDUOgsg8HhUpXgXwy9m%2FkDQlyUm%2B98FxUDdW1SE4qfhrnz9%2FFum4cFjNgD6hjS7XGXXIJd4v3JPrBR82pklqWiYZNkKB7D6k8%2BMLwaErQhSjmVfUTRUek6aO%2B7TsSQF107U7usFUkVU7JdOneZipd4UbN%2B7E7GuF0yeoSITABYv8QxJt1UweOTWSngvUYsm7rHGaX0xOAqEkxMb3nrYzxshVodXKDiUEJhLY3s6z6WrsWeDhuem1imfz2fHKOvYnn%2FXbNM8sLmO0dF8IOirntYStbaGteyutFOST55sFEReGxDy6on77O0oODHn4K%2Bmf0NxRwmDtLOr67y9he76koLFE196W6FzoATek7oNYUpYz9DDxfdSsrnGpJGAL9XzQgpgzS5MvmpyDag%2BhRPjaIBWzAcVrZcsFTO9BoTSe6O%2FdXmxCEMFfA%2F8T62A2dKe8IXn1CggGH7W0YxAYBI3bHY3CGJl9X1Ra7Ib3SPA%2BtzMN3rw8IGOqUBGgr7Uio42cIc61mdn20bA8xvAQG8bMfoszVr5WkKKs5gB5OILk0ZfMRJ38XQUuhq%2Bm9LEJtF%2FxN199hPDBQLCo2BIUJJWSEz4I7Mb7VNFFDKaOZBHz7Lh%2B1%2F0RqVwLpttmQfy1CeHwEvQCxEY5XAaKLyWMsCZDfG%2BP5%2Fb1S8kHVGIH%2BJedk6B6yr77KP67HomOQAZ1j%2B8UQaAe8QCe7DpHDSZrXx&X-Amz-Signature=73c9c1881e6647484e650536e5b8ebabb4355d84ee94288135c8bb964a4a36b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSISC6A%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzBatA%2FUEX9%2BaokKAQDSTVHdPb%2BIwayY3C8Z3zxvLqAiEAmqiTYxPSjmMTMvgS9jT1ldaPG3drLGcDQTtSTRlxhrwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGzGWK1xKa%2B7uBaUoCrcA1PCdS%2BCUP%2BavSi3Tcpqt05zGD801o%2BOINtQutLifaLzHhgC1ydScNK2XM8x9vsR2g09nF%2BfnDhk3BU%2B5F%2BiclQrpAtnRQXQ0Yaq5jJ%2BefvKyInaLVaYxpBJHlmoIdq%2Bmisx%2FpO%2FElgzZZ4aJVyDUOgsg8HhUpXgXwy9m%2FkDQlyUm%2B98FxUDdW1SE4qfhrnz9%2FFum4cFjNgD6hjS7XGXXIJd4v3JPrBR82pklqWiYZNkKB7D6k8%2BMLwaErQhSjmVfUTRUek6aO%2B7TsSQF107U7usFUkVU7JdOneZipd4UbN%2B7E7GuF0yeoSITABYv8QxJt1UweOTWSngvUYsm7rHGaX0xOAqEkxMb3nrYzxshVodXKDiUEJhLY3s6z6WrsWeDhuem1imfz2fHKOvYnn%2FXbNM8sLmO0dF8IOirntYStbaGteyutFOST55sFEReGxDy6on77O0oODHn4K%2Bmf0NxRwmDtLOr67y9he76koLFE196W6FzoATek7oNYUpYz9DDxfdSsrnGpJGAL9XzQgpgzS5MvmpyDag%2BhRPjaIBWzAcVrZcsFTO9BoTSe6O%2FdXmxCEMFfA%2F8T62A2dKe8IXn1CggGH7W0YxAYBI3bHY3CGJl9X1Ra7Ib3SPA%2BtzMN3rw8IGOqUBGgr7Uio42cIc61mdn20bA8xvAQG8bMfoszVr5WkKKs5gB5OILk0ZfMRJ38XQUuhq%2Bm9LEJtF%2FxN199hPDBQLCo2BIUJJWSEz4I7Mb7VNFFDKaOZBHz7Lh%2B1%2F0RqVwLpttmQfy1CeHwEvQCxEY5XAaKLyWMsCZDfG%2BP5%2Fb1S8kHVGIH%2BJedk6B6yr77KP67HomOQAZ1j%2B8UQaAe8QCe7DpHDSZrXx&X-Amz-Signature=d98cd4d7b79e34037d8b6775d17ebc14af9aee82e6aaffe203a9f55eb27975fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSISC6A%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzBatA%2FUEX9%2BaokKAQDSTVHdPb%2BIwayY3C8Z3zxvLqAiEAmqiTYxPSjmMTMvgS9jT1ldaPG3drLGcDQTtSTRlxhrwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGzGWK1xKa%2B7uBaUoCrcA1PCdS%2BCUP%2BavSi3Tcpqt05zGD801o%2BOINtQutLifaLzHhgC1ydScNK2XM8x9vsR2g09nF%2BfnDhk3BU%2B5F%2BiclQrpAtnRQXQ0Yaq5jJ%2BefvKyInaLVaYxpBJHlmoIdq%2Bmisx%2FpO%2FElgzZZ4aJVyDUOgsg8HhUpXgXwy9m%2FkDQlyUm%2B98FxUDdW1SE4qfhrnz9%2FFum4cFjNgD6hjS7XGXXIJd4v3JPrBR82pklqWiYZNkKB7D6k8%2BMLwaErQhSjmVfUTRUek6aO%2B7TsSQF107U7usFUkVU7JdOneZipd4UbN%2B7E7GuF0yeoSITABYv8QxJt1UweOTWSngvUYsm7rHGaX0xOAqEkxMb3nrYzxshVodXKDiUEJhLY3s6z6WrsWeDhuem1imfz2fHKOvYnn%2FXbNM8sLmO0dF8IOirntYStbaGteyutFOST55sFEReGxDy6on77O0oODHn4K%2Bmf0NxRwmDtLOr67y9he76koLFE196W6FzoATek7oNYUpYz9DDxfdSsrnGpJGAL9XzQgpgzS5MvmpyDag%2BhRPjaIBWzAcVrZcsFTO9BoTSe6O%2FdXmxCEMFfA%2F8T62A2dKe8IXn1CggGH7W0YxAYBI3bHY3CGJl9X1Ra7Ib3SPA%2BtzMN3rw8IGOqUBGgr7Uio42cIc61mdn20bA8xvAQG8bMfoszVr5WkKKs5gB5OILk0ZfMRJ38XQUuhq%2Bm9LEJtF%2FxN199hPDBQLCo2BIUJJWSEz4I7Mb7VNFFDKaOZBHz7Lh%2B1%2F0RqVwLpttmQfy1CeHwEvQCxEY5XAaKLyWMsCZDfG%2BP5%2Fb1S8kHVGIH%2BJedk6B6yr77KP67HomOQAZ1j%2B8UQaAe8QCe7DpHDSZrXx&X-Amz-Signature=4d93ef3dff3843b14337784e5621edef743fc34b00a61112637cdb3e85c275ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSISC6A%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzBatA%2FUEX9%2BaokKAQDSTVHdPb%2BIwayY3C8Z3zxvLqAiEAmqiTYxPSjmMTMvgS9jT1ldaPG3drLGcDQTtSTRlxhrwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGzGWK1xKa%2B7uBaUoCrcA1PCdS%2BCUP%2BavSi3Tcpqt05zGD801o%2BOINtQutLifaLzHhgC1ydScNK2XM8x9vsR2g09nF%2BfnDhk3BU%2B5F%2BiclQrpAtnRQXQ0Yaq5jJ%2BefvKyInaLVaYxpBJHlmoIdq%2Bmisx%2FpO%2FElgzZZ4aJVyDUOgsg8HhUpXgXwy9m%2FkDQlyUm%2B98FxUDdW1SE4qfhrnz9%2FFum4cFjNgD6hjS7XGXXIJd4v3JPrBR82pklqWiYZNkKB7D6k8%2BMLwaErQhSjmVfUTRUek6aO%2B7TsSQF107U7usFUkVU7JdOneZipd4UbN%2B7E7GuF0yeoSITABYv8QxJt1UweOTWSngvUYsm7rHGaX0xOAqEkxMb3nrYzxshVodXKDiUEJhLY3s6z6WrsWeDhuem1imfz2fHKOvYnn%2FXbNM8sLmO0dF8IOirntYStbaGteyutFOST55sFEReGxDy6on77O0oODHn4K%2Bmf0NxRwmDtLOr67y9he76koLFE196W6FzoATek7oNYUpYz9DDxfdSsrnGpJGAL9XzQgpgzS5MvmpyDag%2BhRPjaIBWzAcVrZcsFTO9BoTSe6O%2FdXmxCEMFfA%2F8T62A2dKe8IXn1CggGH7W0YxAYBI3bHY3CGJl9X1Ra7Ib3SPA%2BtzMN3rw8IGOqUBGgr7Uio42cIc61mdn20bA8xvAQG8bMfoszVr5WkKKs5gB5OILk0ZfMRJ38XQUuhq%2Bm9LEJtF%2FxN199hPDBQLCo2BIUJJWSEz4I7Mb7VNFFDKaOZBHz7Lh%2B1%2F0RqVwLpttmQfy1CeHwEvQCxEY5XAaKLyWMsCZDfG%2BP5%2Fb1S8kHVGIH%2BJedk6B6yr77KP67HomOQAZ1j%2B8UQaAe8QCe7DpHDSZrXx&X-Amz-Signature=b463bbf427bd7a3e11fc4aa830ce2e743b359902e41133cea8da4a51b50149a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
