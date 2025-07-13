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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIXEFM5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3RGovbJsaCFniAwwuEfF13f5A5gOpCXxGQIbifXRAIhAPmqMkKEsOd2oTdiFlRKLd47GE4Fw37e2jm1wLP9eXOmKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrGWu2M5pBYQjghoq3AOLbjB%2FltwnG4FXxFdJ162LRZGE6RmrBqUQYwrn6pSv6iOIZqZs3hQ81fY4RDzfCHWKbZxl%2FDOIuAQ%2Bl8dJOrEaUv1wYNLS2gHx3paKaX%2FfJLzauAdhuNy81H8PqlwdQG0kFZkkKVQKxu%2FilSuGdcUwH9qBsfoJtyJAqEqWpCKBtRG6FUfS%2BsGVi4023Ynz6h3gEhu7bUz2y3qEsz89y8xOU4IClhYMZDPxBHdZ1mNakLvG%2BJYCuSRDEMdeagqciPH1jLdB%2BVIW5U3ucFEVp0njtEH6TzHBSGad4KfQxxonz%2BM9L5WDxc2m9qh%2F%2FXtnRWAcjR8YKMXM9Wjsa3kDClV2G4BorzQwhD3kR0ZkFDRLk%2Fc60xjb0s1RY8%2Bj8zmCOSbdYYDBY60pOjL7k0PGMMcJUo2oI3I7aYhL6lfo3yI7Vm4SFugl6fWwNg7n%2FM9zzWIMFF89SujTOOSvuxULLyGaKwB8pLNgt6ObmfAD%2FuMCzOiIm2axi8xmw9lrq1Xwt770VIIt0wMpl1nGZ0nsCAZWfjmS9OdI%2Bpw5ngYMATApN6gz5J4WaWsKXzHZbGD7M2b2dU%2BUC4bo4v6rDwUffWwXrAffv%2B4%2BmaBugOa8X4fduwKixz0SGO5KeGOq8TDT2MzDBjqkAaetDZTD%2BFgy2BdtDW4BxwBwZG3DWcIIrYBluknpEPBcE7lEPnfH9mO3dtM%2FHsavlohx4Ig%2FvvWXwlxB%2BL1AUKmHr7BAejkiRAAm%2FwXlXGgRW5RqCyJeOaqu90oFTthF3PU2LTxAzP1rI3KGYZ%2B07SXjxJ%2B2CyTPXh7Vt6et2acNTpVt68m9kHmGKGxYnDlQkNbb3qeAYyvhEdsx5RTVyHiTmiiM&X-Amz-Signature=9a0a240a7eed558b794b25e32b393946ec08e4b6c181c579c2f61cb603b6569f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIXEFM5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3RGovbJsaCFniAwwuEfF13f5A5gOpCXxGQIbifXRAIhAPmqMkKEsOd2oTdiFlRKLd47GE4Fw37e2jm1wLP9eXOmKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrGWu2M5pBYQjghoq3AOLbjB%2FltwnG4FXxFdJ162LRZGE6RmrBqUQYwrn6pSv6iOIZqZs3hQ81fY4RDzfCHWKbZxl%2FDOIuAQ%2Bl8dJOrEaUv1wYNLS2gHx3paKaX%2FfJLzauAdhuNy81H8PqlwdQG0kFZkkKVQKxu%2FilSuGdcUwH9qBsfoJtyJAqEqWpCKBtRG6FUfS%2BsGVi4023Ynz6h3gEhu7bUz2y3qEsz89y8xOU4IClhYMZDPxBHdZ1mNakLvG%2BJYCuSRDEMdeagqciPH1jLdB%2BVIW5U3ucFEVp0njtEH6TzHBSGad4KfQxxonz%2BM9L5WDxc2m9qh%2F%2FXtnRWAcjR8YKMXM9Wjsa3kDClV2G4BorzQwhD3kR0ZkFDRLk%2Fc60xjb0s1RY8%2Bj8zmCOSbdYYDBY60pOjL7k0PGMMcJUo2oI3I7aYhL6lfo3yI7Vm4SFugl6fWwNg7n%2FM9zzWIMFF89SujTOOSvuxULLyGaKwB8pLNgt6ObmfAD%2FuMCzOiIm2axi8xmw9lrq1Xwt770VIIt0wMpl1nGZ0nsCAZWfjmS9OdI%2Bpw5ngYMATApN6gz5J4WaWsKXzHZbGD7M2b2dU%2BUC4bo4v6rDwUffWwXrAffv%2B4%2BmaBugOa8X4fduwKixz0SGO5KeGOq8TDT2MzDBjqkAaetDZTD%2BFgy2BdtDW4BxwBwZG3DWcIIrYBluknpEPBcE7lEPnfH9mO3dtM%2FHsavlohx4Ig%2FvvWXwlxB%2BL1AUKmHr7BAejkiRAAm%2FwXlXGgRW5RqCyJeOaqu90oFTthF3PU2LTxAzP1rI3KGYZ%2B07SXjxJ%2B2CyTPXh7Vt6et2acNTpVt68m9kHmGKGxYnDlQkNbb3qeAYyvhEdsx5RTVyHiTmiiM&X-Amz-Signature=7d7b3156fd0924f0f9334021ac3bfc596b26c3eff92de662b22636508e36f754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIXEFM5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3RGovbJsaCFniAwwuEfF13f5A5gOpCXxGQIbifXRAIhAPmqMkKEsOd2oTdiFlRKLd47GE4Fw37e2jm1wLP9eXOmKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrGWu2M5pBYQjghoq3AOLbjB%2FltwnG4FXxFdJ162LRZGE6RmrBqUQYwrn6pSv6iOIZqZs3hQ81fY4RDzfCHWKbZxl%2FDOIuAQ%2Bl8dJOrEaUv1wYNLS2gHx3paKaX%2FfJLzauAdhuNy81H8PqlwdQG0kFZkkKVQKxu%2FilSuGdcUwH9qBsfoJtyJAqEqWpCKBtRG6FUfS%2BsGVi4023Ynz6h3gEhu7bUz2y3qEsz89y8xOU4IClhYMZDPxBHdZ1mNakLvG%2BJYCuSRDEMdeagqciPH1jLdB%2BVIW5U3ucFEVp0njtEH6TzHBSGad4KfQxxonz%2BM9L5WDxc2m9qh%2F%2FXtnRWAcjR8YKMXM9Wjsa3kDClV2G4BorzQwhD3kR0ZkFDRLk%2Fc60xjb0s1RY8%2Bj8zmCOSbdYYDBY60pOjL7k0PGMMcJUo2oI3I7aYhL6lfo3yI7Vm4SFugl6fWwNg7n%2FM9zzWIMFF89SujTOOSvuxULLyGaKwB8pLNgt6ObmfAD%2FuMCzOiIm2axi8xmw9lrq1Xwt770VIIt0wMpl1nGZ0nsCAZWfjmS9OdI%2Bpw5ngYMATApN6gz5J4WaWsKXzHZbGD7M2b2dU%2BUC4bo4v6rDwUffWwXrAffv%2B4%2BmaBugOa8X4fduwKixz0SGO5KeGOq8TDT2MzDBjqkAaetDZTD%2BFgy2BdtDW4BxwBwZG3DWcIIrYBluknpEPBcE7lEPnfH9mO3dtM%2FHsavlohx4Ig%2FvvWXwlxB%2BL1AUKmHr7BAejkiRAAm%2FwXlXGgRW5RqCyJeOaqu90oFTthF3PU2LTxAzP1rI3KGYZ%2B07SXjxJ%2B2CyTPXh7Vt6et2acNTpVt68m9kHmGKGxYnDlQkNbb3qeAYyvhEdsx5RTVyHiTmiiM&X-Amz-Signature=4e07d610420f1e224b4f3b32b37db98fefd4e88af82e51139b07972f1ddacde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIXEFM5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3RGovbJsaCFniAwwuEfF13f5A5gOpCXxGQIbifXRAIhAPmqMkKEsOd2oTdiFlRKLd47GE4Fw37e2jm1wLP9eXOmKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrGWu2M5pBYQjghoq3AOLbjB%2FltwnG4FXxFdJ162LRZGE6RmrBqUQYwrn6pSv6iOIZqZs3hQ81fY4RDzfCHWKbZxl%2FDOIuAQ%2Bl8dJOrEaUv1wYNLS2gHx3paKaX%2FfJLzauAdhuNy81H8PqlwdQG0kFZkkKVQKxu%2FilSuGdcUwH9qBsfoJtyJAqEqWpCKBtRG6FUfS%2BsGVi4023Ynz6h3gEhu7bUz2y3qEsz89y8xOU4IClhYMZDPxBHdZ1mNakLvG%2BJYCuSRDEMdeagqciPH1jLdB%2BVIW5U3ucFEVp0njtEH6TzHBSGad4KfQxxonz%2BM9L5WDxc2m9qh%2F%2FXtnRWAcjR8YKMXM9Wjsa3kDClV2G4BorzQwhD3kR0ZkFDRLk%2Fc60xjb0s1RY8%2Bj8zmCOSbdYYDBY60pOjL7k0PGMMcJUo2oI3I7aYhL6lfo3yI7Vm4SFugl6fWwNg7n%2FM9zzWIMFF89SujTOOSvuxULLyGaKwB8pLNgt6ObmfAD%2FuMCzOiIm2axi8xmw9lrq1Xwt770VIIt0wMpl1nGZ0nsCAZWfjmS9OdI%2Bpw5ngYMATApN6gz5J4WaWsKXzHZbGD7M2b2dU%2BUC4bo4v6rDwUffWwXrAffv%2B4%2BmaBugOa8X4fduwKixz0SGO5KeGOq8TDT2MzDBjqkAaetDZTD%2BFgy2BdtDW4BxwBwZG3DWcIIrYBluknpEPBcE7lEPnfH9mO3dtM%2FHsavlohx4Ig%2FvvWXwlxB%2BL1AUKmHr7BAejkiRAAm%2FwXlXGgRW5RqCyJeOaqu90oFTthF3PU2LTxAzP1rI3KGYZ%2B07SXjxJ%2B2CyTPXh7Vt6et2acNTpVt68m9kHmGKGxYnDlQkNbb3qeAYyvhEdsx5RTVyHiTmiiM&X-Amz-Signature=ebc49a019329ce7e95757b06c448490987508c8f32e84f1a983de3e27dc6afc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIXEFM5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3RGovbJsaCFniAwwuEfF13f5A5gOpCXxGQIbifXRAIhAPmqMkKEsOd2oTdiFlRKLd47GE4Fw37e2jm1wLP9eXOmKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrGWu2M5pBYQjghoq3AOLbjB%2FltwnG4FXxFdJ162LRZGE6RmrBqUQYwrn6pSv6iOIZqZs3hQ81fY4RDzfCHWKbZxl%2FDOIuAQ%2Bl8dJOrEaUv1wYNLS2gHx3paKaX%2FfJLzauAdhuNy81H8PqlwdQG0kFZkkKVQKxu%2FilSuGdcUwH9qBsfoJtyJAqEqWpCKBtRG6FUfS%2BsGVi4023Ynz6h3gEhu7bUz2y3qEsz89y8xOU4IClhYMZDPxBHdZ1mNakLvG%2BJYCuSRDEMdeagqciPH1jLdB%2BVIW5U3ucFEVp0njtEH6TzHBSGad4KfQxxonz%2BM9L5WDxc2m9qh%2F%2FXtnRWAcjR8YKMXM9Wjsa3kDClV2G4BorzQwhD3kR0ZkFDRLk%2Fc60xjb0s1RY8%2Bj8zmCOSbdYYDBY60pOjL7k0PGMMcJUo2oI3I7aYhL6lfo3yI7Vm4SFugl6fWwNg7n%2FM9zzWIMFF89SujTOOSvuxULLyGaKwB8pLNgt6ObmfAD%2FuMCzOiIm2axi8xmw9lrq1Xwt770VIIt0wMpl1nGZ0nsCAZWfjmS9OdI%2Bpw5ngYMATApN6gz5J4WaWsKXzHZbGD7M2b2dU%2BUC4bo4v6rDwUffWwXrAffv%2B4%2BmaBugOa8X4fduwKixz0SGO5KeGOq8TDT2MzDBjqkAaetDZTD%2BFgy2BdtDW4BxwBwZG3DWcIIrYBluknpEPBcE7lEPnfH9mO3dtM%2FHsavlohx4Ig%2FvvWXwlxB%2BL1AUKmHr7BAejkiRAAm%2FwXlXGgRW5RqCyJeOaqu90oFTthF3PU2LTxAzP1rI3KGYZ%2B07SXjxJ%2B2CyTPXh7Vt6et2acNTpVt68m9kHmGKGxYnDlQkNbb3qeAYyvhEdsx5RTVyHiTmiiM&X-Amz-Signature=0c1960e419abef199cc8ae08ad6067dcf9d3aa7aefa983f2f17a3d360e5b426e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIXEFM5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTP3RGovbJsaCFniAwwuEfF13f5A5gOpCXxGQIbifXRAIhAPmqMkKEsOd2oTdiFlRKLd47GE4Fw37e2jm1wLP9eXOmKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrGWu2M5pBYQjghoq3AOLbjB%2FltwnG4FXxFdJ162LRZGE6RmrBqUQYwrn6pSv6iOIZqZs3hQ81fY4RDzfCHWKbZxl%2FDOIuAQ%2Bl8dJOrEaUv1wYNLS2gHx3paKaX%2FfJLzauAdhuNy81H8PqlwdQG0kFZkkKVQKxu%2FilSuGdcUwH9qBsfoJtyJAqEqWpCKBtRG6FUfS%2BsGVi4023Ynz6h3gEhu7bUz2y3qEsz89y8xOU4IClhYMZDPxBHdZ1mNakLvG%2BJYCuSRDEMdeagqciPH1jLdB%2BVIW5U3ucFEVp0njtEH6TzHBSGad4KfQxxonz%2BM9L5WDxc2m9qh%2F%2FXtnRWAcjR8YKMXM9Wjsa3kDClV2G4BorzQwhD3kR0ZkFDRLk%2Fc60xjb0s1RY8%2Bj8zmCOSbdYYDBY60pOjL7k0PGMMcJUo2oI3I7aYhL6lfo3yI7Vm4SFugl6fWwNg7n%2FM9zzWIMFF89SujTOOSvuxULLyGaKwB8pLNgt6ObmfAD%2FuMCzOiIm2axi8xmw9lrq1Xwt770VIIt0wMpl1nGZ0nsCAZWfjmS9OdI%2Bpw5ngYMATApN6gz5J4WaWsKXzHZbGD7M2b2dU%2BUC4bo4v6rDwUffWwXrAffv%2B4%2BmaBugOa8X4fduwKixz0SGO5KeGOq8TDT2MzDBjqkAaetDZTD%2BFgy2BdtDW4BxwBwZG3DWcIIrYBluknpEPBcE7lEPnfH9mO3dtM%2FHsavlohx4Ig%2FvvWXwlxB%2BL1AUKmHr7BAejkiRAAm%2FwXlXGgRW5RqCyJeOaqu90oFTthF3PU2LTxAzP1rI3KGYZ%2B07SXjxJ%2B2CyTPXh7Vt6et2acNTpVt68m9kHmGKGxYnDlQkNbb3qeAYyvhEdsx5RTVyHiTmiiM&X-Amz-Signature=914a16556352c228bb5f8b672516db040828d976563cd321ed28dca61a6e0abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
