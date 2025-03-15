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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHEFWBU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluU3FjCS9A1oO1fUf3%2Byb%2Fu5pFupH17rdugwGoR9e6wIgJrf31np%2FI4HZjzA682XaWOTSHWOAy2dTR%2BsXfdbCQBoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYEbSeLqB3ufDvqxCrcA94iMBeIY8bVIg5quBbOyQShQjMZqsybU0oMBldXJgDfHAD9MTpN4Gize3XcyW1o4oTgf8Hf0F3NHpS2v9Y%2FIA7xtUt20KUAlq6c5Gl9n0vbdUUNNQBx0PUMUXsLQ66F9A%2FG73wh7yPHdaTXSAi1VNny6RDnTTEn44KwUGSk%2Fd4kyQyyavWGy6BKE9WNONqaSLmp2LV3W1xSvaX6NwcPdUkt98zNsT6gOU18va1odv9%2Fe%2BHpUOx0j3RVaeqtgy6W%2BmCS3q54c%2FsnXOXsjiWU42TuThhw%2BNCQZ1QAa60NNQKXCBfGqAE5CNXXrCargmESCkkFvjy7afbZA6zlwoIscJTyHFieYyJdidVNcbli8haegdMXcEnLFX3LhLM3LlkQDwrxkXeKmbkIv01NiJOulR4JdT7nXLnzT8yy%2BLkrV6Autj%2BnhD%2BLTjbyR2MzaW5PXADVSsFnipTrXWoLAsjCjvO5e1zXC1yKT%2BEd53B8RyymWsn3J%2FNSjiaumcLeHzAplbZDP4gEE9fcK48niWLl6dfVp2uzdhnt1UrtVDYUhD08AzOmS9rzOUUKZc71pw0V7Unh91vWKAeSg9xUz%2FrGawTTZSiIYFNRxYKHmVFqjvM4UPCQ2p0r1cXAWWYIMNeM074GOqUBoOUipATn2KS3etFT6yHcYkvzPI2fCgj1wLQ5jPTorFQOwClF%2BQYuOA1aho31MVhS5OEt1%2FJRuWoGlNhB5aMVBeK0xMkOd9F7NWs0e1heCNKMwfgFFFPsWWaGOzqaFOGcLjMW2%2FLU7U6TbPi33Ynhkwi6HVu3MwEFB2xHV%2FH7Y1yLVeUR1v7DRmP%2Bm9%2BxIo2LTUm5NxBTH1fSe7LaKERvLx1nidpH&X-Amz-Signature=a645b91da428a54862f8068d711a515503daba43fcd046868b3a129c2b8f3b31&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHEFWBU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluU3FjCS9A1oO1fUf3%2Byb%2Fu5pFupH17rdugwGoR9e6wIgJrf31np%2FI4HZjzA682XaWOTSHWOAy2dTR%2BsXfdbCQBoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYEbSeLqB3ufDvqxCrcA94iMBeIY8bVIg5quBbOyQShQjMZqsybU0oMBldXJgDfHAD9MTpN4Gize3XcyW1o4oTgf8Hf0F3NHpS2v9Y%2FIA7xtUt20KUAlq6c5Gl9n0vbdUUNNQBx0PUMUXsLQ66F9A%2FG73wh7yPHdaTXSAi1VNny6RDnTTEn44KwUGSk%2Fd4kyQyyavWGy6BKE9WNONqaSLmp2LV3W1xSvaX6NwcPdUkt98zNsT6gOU18va1odv9%2Fe%2BHpUOx0j3RVaeqtgy6W%2BmCS3q54c%2FsnXOXsjiWU42TuThhw%2BNCQZ1QAa60NNQKXCBfGqAE5CNXXrCargmESCkkFvjy7afbZA6zlwoIscJTyHFieYyJdidVNcbli8haegdMXcEnLFX3LhLM3LlkQDwrxkXeKmbkIv01NiJOulR4JdT7nXLnzT8yy%2BLkrV6Autj%2BnhD%2BLTjbyR2MzaW5PXADVSsFnipTrXWoLAsjCjvO5e1zXC1yKT%2BEd53B8RyymWsn3J%2FNSjiaumcLeHzAplbZDP4gEE9fcK48niWLl6dfVp2uzdhnt1UrtVDYUhD08AzOmS9rzOUUKZc71pw0V7Unh91vWKAeSg9xUz%2FrGawTTZSiIYFNRxYKHmVFqjvM4UPCQ2p0r1cXAWWYIMNeM074GOqUBoOUipATn2KS3etFT6yHcYkvzPI2fCgj1wLQ5jPTorFQOwClF%2BQYuOA1aho31MVhS5OEt1%2FJRuWoGlNhB5aMVBeK0xMkOd9F7NWs0e1heCNKMwfgFFFPsWWaGOzqaFOGcLjMW2%2FLU7U6TbPi33Ynhkwi6HVu3MwEFB2xHV%2FH7Y1yLVeUR1v7DRmP%2Bm9%2BxIo2LTUm5NxBTH1fSe7LaKERvLx1nidpH&X-Amz-Signature=3c96730368fdaf7b3a79587e0ea08c95936d207aa459bd070ba0eedb97384586&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHEFWBU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluU3FjCS9A1oO1fUf3%2Byb%2Fu5pFupH17rdugwGoR9e6wIgJrf31np%2FI4HZjzA682XaWOTSHWOAy2dTR%2BsXfdbCQBoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYEbSeLqB3ufDvqxCrcA94iMBeIY8bVIg5quBbOyQShQjMZqsybU0oMBldXJgDfHAD9MTpN4Gize3XcyW1o4oTgf8Hf0F3NHpS2v9Y%2FIA7xtUt20KUAlq6c5Gl9n0vbdUUNNQBx0PUMUXsLQ66F9A%2FG73wh7yPHdaTXSAi1VNny6RDnTTEn44KwUGSk%2Fd4kyQyyavWGy6BKE9WNONqaSLmp2LV3W1xSvaX6NwcPdUkt98zNsT6gOU18va1odv9%2Fe%2BHpUOx0j3RVaeqtgy6W%2BmCS3q54c%2FsnXOXsjiWU42TuThhw%2BNCQZ1QAa60NNQKXCBfGqAE5CNXXrCargmESCkkFvjy7afbZA6zlwoIscJTyHFieYyJdidVNcbli8haegdMXcEnLFX3LhLM3LlkQDwrxkXeKmbkIv01NiJOulR4JdT7nXLnzT8yy%2BLkrV6Autj%2BnhD%2BLTjbyR2MzaW5PXADVSsFnipTrXWoLAsjCjvO5e1zXC1yKT%2BEd53B8RyymWsn3J%2FNSjiaumcLeHzAplbZDP4gEE9fcK48niWLl6dfVp2uzdhnt1UrtVDYUhD08AzOmS9rzOUUKZc71pw0V7Unh91vWKAeSg9xUz%2FrGawTTZSiIYFNRxYKHmVFqjvM4UPCQ2p0r1cXAWWYIMNeM074GOqUBoOUipATn2KS3etFT6yHcYkvzPI2fCgj1wLQ5jPTorFQOwClF%2BQYuOA1aho31MVhS5OEt1%2FJRuWoGlNhB5aMVBeK0xMkOd9F7NWs0e1heCNKMwfgFFFPsWWaGOzqaFOGcLjMW2%2FLU7U6TbPi33Ynhkwi6HVu3MwEFB2xHV%2FH7Y1yLVeUR1v7DRmP%2Bm9%2BxIo2LTUm5NxBTH1fSe7LaKERvLx1nidpH&X-Amz-Signature=efe79ae7677701e81260f16c6757d91d50aed474cddf9251ec9f80b88f6705ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHEFWBU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluU3FjCS9A1oO1fUf3%2Byb%2Fu5pFupH17rdugwGoR9e6wIgJrf31np%2FI4HZjzA682XaWOTSHWOAy2dTR%2BsXfdbCQBoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYEbSeLqB3ufDvqxCrcA94iMBeIY8bVIg5quBbOyQShQjMZqsybU0oMBldXJgDfHAD9MTpN4Gize3XcyW1o4oTgf8Hf0F3NHpS2v9Y%2FIA7xtUt20KUAlq6c5Gl9n0vbdUUNNQBx0PUMUXsLQ66F9A%2FG73wh7yPHdaTXSAi1VNny6RDnTTEn44KwUGSk%2Fd4kyQyyavWGy6BKE9WNONqaSLmp2LV3W1xSvaX6NwcPdUkt98zNsT6gOU18va1odv9%2Fe%2BHpUOx0j3RVaeqtgy6W%2BmCS3q54c%2FsnXOXsjiWU42TuThhw%2BNCQZ1QAa60NNQKXCBfGqAE5CNXXrCargmESCkkFvjy7afbZA6zlwoIscJTyHFieYyJdidVNcbli8haegdMXcEnLFX3LhLM3LlkQDwrxkXeKmbkIv01NiJOulR4JdT7nXLnzT8yy%2BLkrV6Autj%2BnhD%2BLTjbyR2MzaW5PXADVSsFnipTrXWoLAsjCjvO5e1zXC1yKT%2BEd53B8RyymWsn3J%2FNSjiaumcLeHzAplbZDP4gEE9fcK48niWLl6dfVp2uzdhnt1UrtVDYUhD08AzOmS9rzOUUKZc71pw0V7Unh91vWKAeSg9xUz%2FrGawTTZSiIYFNRxYKHmVFqjvM4UPCQ2p0r1cXAWWYIMNeM074GOqUBoOUipATn2KS3etFT6yHcYkvzPI2fCgj1wLQ5jPTorFQOwClF%2BQYuOA1aho31MVhS5OEt1%2FJRuWoGlNhB5aMVBeK0xMkOd9F7NWs0e1heCNKMwfgFFFPsWWaGOzqaFOGcLjMW2%2FLU7U6TbPi33Ynhkwi6HVu3MwEFB2xHV%2FH7Y1yLVeUR1v7DRmP%2Bm9%2BxIo2LTUm5NxBTH1fSe7LaKERvLx1nidpH&X-Amz-Signature=dc9b7f7e95c342029b2416116097816001f56d105d8e28bc3766e5e02aebd856&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHEFWBU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluU3FjCS9A1oO1fUf3%2Byb%2Fu5pFupH17rdugwGoR9e6wIgJrf31np%2FI4HZjzA682XaWOTSHWOAy2dTR%2BsXfdbCQBoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYEbSeLqB3ufDvqxCrcA94iMBeIY8bVIg5quBbOyQShQjMZqsybU0oMBldXJgDfHAD9MTpN4Gize3XcyW1o4oTgf8Hf0F3NHpS2v9Y%2FIA7xtUt20KUAlq6c5Gl9n0vbdUUNNQBx0PUMUXsLQ66F9A%2FG73wh7yPHdaTXSAi1VNny6RDnTTEn44KwUGSk%2Fd4kyQyyavWGy6BKE9WNONqaSLmp2LV3W1xSvaX6NwcPdUkt98zNsT6gOU18va1odv9%2Fe%2BHpUOx0j3RVaeqtgy6W%2BmCS3q54c%2FsnXOXsjiWU42TuThhw%2BNCQZ1QAa60NNQKXCBfGqAE5CNXXrCargmESCkkFvjy7afbZA6zlwoIscJTyHFieYyJdidVNcbli8haegdMXcEnLFX3LhLM3LlkQDwrxkXeKmbkIv01NiJOulR4JdT7nXLnzT8yy%2BLkrV6Autj%2BnhD%2BLTjbyR2MzaW5PXADVSsFnipTrXWoLAsjCjvO5e1zXC1yKT%2BEd53B8RyymWsn3J%2FNSjiaumcLeHzAplbZDP4gEE9fcK48niWLl6dfVp2uzdhnt1UrtVDYUhD08AzOmS9rzOUUKZc71pw0V7Unh91vWKAeSg9xUz%2FrGawTTZSiIYFNRxYKHmVFqjvM4UPCQ2p0r1cXAWWYIMNeM074GOqUBoOUipATn2KS3etFT6yHcYkvzPI2fCgj1wLQ5jPTorFQOwClF%2BQYuOA1aho31MVhS5OEt1%2FJRuWoGlNhB5aMVBeK0xMkOd9F7NWs0e1heCNKMwfgFFFPsWWaGOzqaFOGcLjMW2%2FLU7U6TbPi33Ynhkwi6HVu3MwEFB2xHV%2FH7Y1yLVeUR1v7DRmP%2Bm9%2BxIo2LTUm5NxBTH1fSe7LaKERvLx1nidpH&X-Amz-Signature=44792286f3216c6d168e43826a7ea7fb2c19d0c07548999ab831010d64ec8efc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJHEFWBU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluU3FjCS9A1oO1fUf3%2Byb%2Fu5pFupH17rdugwGoR9e6wIgJrf31np%2FI4HZjzA682XaWOTSHWOAy2dTR%2BsXfdbCQBoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYEbSeLqB3ufDvqxCrcA94iMBeIY8bVIg5quBbOyQShQjMZqsybU0oMBldXJgDfHAD9MTpN4Gize3XcyW1o4oTgf8Hf0F3NHpS2v9Y%2FIA7xtUt20KUAlq6c5Gl9n0vbdUUNNQBx0PUMUXsLQ66F9A%2FG73wh7yPHdaTXSAi1VNny6RDnTTEn44KwUGSk%2Fd4kyQyyavWGy6BKE9WNONqaSLmp2LV3W1xSvaX6NwcPdUkt98zNsT6gOU18va1odv9%2Fe%2BHpUOx0j3RVaeqtgy6W%2BmCS3q54c%2FsnXOXsjiWU42TuThhw%2BNCQZ1QAa60NNQKXCBfGqAE5CNXXrCargmESCkkFvjy7afbZA6zlwoIscJTyHFieYyJdidVNcbli8haegdMXcEnLFX3LhLM3LlkQDwrxkXeKmbkIv01NiJOulR4JdT7nXLnzT8yy%2BLkrV6Autj%2BnhD%2BLTjbyR2MzaW5PXADVSsFnipTrXWoLAsjCjvO5e1zXC1yKT%2BEd53B8RyymWsn3J%2FNSjiaumcLeHzAplbZDP4gEE9fcK48niWLl6dfVp2uzdhnt1UrtVDYUhD08AzOmS9rzOUUKZc71pw0V7Unh91vWKAeSg9xUz%2FrGawTTZSiIYFNRxYKHmVFqjvM4UPCQ2p0r1cXAWWYIMNeM074GOqUBoOUipATn2KS3etFT6yHcYkvzPI2fCgj1wLQ5jPTorFQOwClF%2BQYuOA1aho31MVhS5OEt1%2FJRuWoGlNhB5aMVBeK0xMkOd9F7NWs0e1heCNKMwfgFFFPsWWaGOzqaFOGcLjMW2%2FLU7U6TbPi33Ynhkwi6HVu3MwEFB2xHV%2FH7Y1yLVeUR1v7DRmP%2Bm9%2BxIo2LTUm5NxBTH1fSe7LaKERvLx1nidpH&X-Amz-Signature=67050fc6f255cf254f26a0ed99736dd24517f5078fab3e52337ad459ab5cf75d&X-Amz-SignedHeaders=host&x-id=GetObject)
