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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRS3N54%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeoUkaYPNE6rCwePI7hmQ33lq4%2Bl0gbECEupVKDdZPZQIhANNwUPGNhBZ9MqcWy6XIbsYmZGU%2FWrLlF%2FsrCN%2FOKZCpKv8DCE8QABoMNjM3NDIzMTgzODA1IgxOzn81cZmIRBKky4Eq3AMlP9kx75yVGfu5%2BdyJfM%2Bcxkg3tC9g2bpCDjJ%2BQq5bKRiw2TqN7hLufyqhwIVK4X8iugCRcqlKwy60MVrCUKT75iEk6m3Goca%2BJyawaTW3lQnKYG40am1c%2BDTFExXbNgFoZWy6ODBgdolT3XvCYG2dc34sM0joKsjecOwKxVSc2CX%2FxMw6BL%2BnMe88wnkcd%2FVxQvqySmmOKlmyDANBkh8OYHH81YJKKB3mHa5ycfj5JD5BCfu%2BZoyy%2F32xlAeVUX7fS2N9vp4Wqu0TnsF8IemUvdGVuZI42KuBhYsUBKnG2t2JzVir3xRNUFrOoKxc8pQ4nNtZaP3mElBwXVvMA2QBVOdXRuvpN1fFk1%2B6y%2BVMILk%2FudL%2FLULnpCxC1V1yBX%2FwFip0V0V7YhtAuNzPZZeMGVfyLwAJ60i7cvvBxgSc7TvKmcfPqs1zHQK9Hdx3PPUFB%2ByF0ZZvu5NYZxELmoIKcaoAVW8fqt68kW06fLquQqYcT9fmM8nd5KTtjCzRqhiluyNVtBE%2B8nc8OFjUJl%2FPQJ84bUQ5oijtsWlQvO1wLme2qnal5BEfhslMGcCw9ZWSxaohkJD1lGz%2FN7B3UgYt%2F%2FH%2BDN7Ucdnnc5IIPpf3%2FDOdf6RYfgtapxpMUjDugfm9BjqkAd2twTHKgaaQeLGRG%2BIbMzLCUyO6HCZYjLTocEZXOgkMp8y2CPE%2F2v9GPSOs4uirigWs%2FOHxdEKuPg3%2FKIrspPMcgJFXBRYq%2BaeycnJy23msbf5eedwfkV0jyfVue58mYeCpmtq6Ca9ck%2BtzIXN5G1pTAGBawc9dPg3qp0o3iq6tB8Ox%2Bbd0MgudPH4ldrwsgrTc8vSEaxFvf4QZC56VoYekSCMX&X-Amz-Signature=b44a7992a2c258ae21f25baa3185f29fa0adf65751882ad68ea419243f37df77&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRS3N54%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeoUkaYPNE6rCwePI7hmQ33lq4%2Bl0gbECEupVKDdZPZQIhANNwUPGNhBZ9MqcWy6XIbsYmZGU%2FWrLlF%2FsrCN%2FOKZCpKv8DCE8QABoMNjM3NDIzMTgzODA1IgxOzn81cZmIRBKky4Eq3AMlP9kx75yVGfu5%2BdyJfM%2Bcxkg3tC9g2bpCDjJ%2BQq5bKRiw2TqN7hLufyqhwIVK4X8iugCRcqlKwy60MVrCUKT75iEk6m3Goca%2BJyawaTW3lQnKYG40am1c%2BDTFExXbNgFoZWy6ODBgdolT3XvCYG2dc34sM0joKsjecOwKxVSc2CX%2FxMw6BL%2BnMe88wnkcd%2FVxQvqySmmOKlmyDANBkh8OYHH81YJKKB3mHa5ycfj5JD5BCfu%2BZoyy%2F32xlAeVUX7fS2N9vp4Wqu0TnsF8IemUvdGVuZI42KuBhYsUBKnG2t2JzVir3xRNUFrOoKxc8pQ4nNtZaP3mElBwXVvMA2QBVOdXRuvpN1fFk1%2B6y%2BVMILk%2FudL%2FLULnpCxC1V1yBX%2FwFip0V0V7YhtAuNzPZZeMGVfyLwAJ60i7cvvBxgSc7TvKmcfPqs1zHQK9Hdx3PPUFB%2ByF0ZZvu5NYZxELmoIKcaoAVW8fqt68kW06fLquQqYcT9fmM8nd5KTtjCzRqhiluyNVtBE%2B8nc8OFjUJl%2FPQJ84bUQ5oijtsWlQvO1wLme2qnal5BEfhslMGcCw9ZWSxaohkJD1lGz%2FN7B3UgYt%2F%2FH%2BDN7Ucdnnc5IIPpf3%2FDOdf6RYfgtapxpMUjDugfm9BjqkAd2twTHKgaaQeLGRG%2BIbMzLCUyO6HCZYjLTocEZXOgkMp8y2CPE%2F2v9GPSOs4uirigWs%2FOHxdEKuPg3%2FKIrspPMcgJFXBRYq%2BaeycnJy23msbf5eedwfkV0jyfVue58mYeCpmtq6Ca9ck%2BtzIXN5G1pTAGBawc9dPg3qp0o3iq6tB8Ox%2Bbd0MgudPH4ldrwsgrTc8vSEaxFvf4QZC56VoYekSCMX&X-Amz-Signature=456f51c6645e52b21be2bfabd8c2143ac5bcbc2ea4669e8c4ad9a19706877a38&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRS3N54%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeoUkaYPNE6rCwePI7hmQ33lq4%2Bl0gbECEupVKDdZPZQIhANNwUPGNhBZ9MqcWy6XIbsYmZGU%2FWrLlF%2FsrCN%2FOKZCpKv8DCE8QABoMNjM3NDIzMTgzODA1IgxOzn81cZmIRBKky4Eq3AMlP9kx75yVGfu5%2BdyJfM%2Bcxkg3tC9g2bpCDjJ%2BQq5bKRiw2TqN7hLufyqhwIVK4X8iugCRcqlKwy60MVrCUKT75iEk6m3Goca%2BJyawaTW3lQnKYG40am1c%2BDTFExXbNgFoZWy6ODBgdolT3XvCYG2dc34sM0joKsjecOwKxVSc2CX%2FxMw6BL%2BnMe88wnkcd%2FVxQvqySmmOKlmyDANBkh8OYHH81YJKKB3mHa5ycfj5JD5BCfu%2BZoyy%2F32xlAeVUX7fS2N9vp4Wqu0TnsF8IemUvdGVuZI42KuBhYsUBKnG2t2JzVir3xRNUFrOoKxc8pQ4nNtZaP3mElBwXVvMA2QBVOdXRuvpN1fFk1%2B6y%2BVMILk%2FudL%2FLULnpCxC1V1yBX%2FwFip0V0V7YhtAuNzPZZeMGVfyLwAJ60i7cvvBxgSc7TvKmcfPqs1zHQK9Hdx3PPUFB%2ByF0ZZvu5NYZxELmoIKcaoAVW8fqt68kW06fLquQqYcT9fmM8nd5KTtjCzRqhiluyNVtBE%2B8nc8OFjUJl%2FPQJ84bUQ5oijtsWlQvO1wLme2qnal5BEfhslMGcCw9ZWSxaohkJD1lGz%2FN7B3UgYt%2F%2FH%2BDN7Ucdnnc5IIPpf3%2FDOdf6RYfgtapxpMUjDugfm9BjqkAd2twTHKgaaQeLGRG%2BIbMzLCUyO6HCZYjLTocEZXOgkMp8y2CPE%2F2v9GPSOs4uirigWs%2FOHxdEKuPg3%2FKIrspPMcgJFXBRYq%2BaeycnJy23msbf5eedwfkV0jyfVue58mYeCpmtq6Ca9ck%2BtzIXN5G1pTAGBawc9dPg3qp0o3iq6tB8Ox%2Bbd0MgudPH4ldrwsgrTc8vSEaxFvf4QZC56VoYekSCMX&X-Amz-Signature=701a2f2b67cc12270b506aba40125465d3d6dd3baf494b16f418f564f1dc53f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRS3N54%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeoUkaYPNE6rCwePI7hmQ33lq4%2Bl0gbECEupVKDdZPZQIhANNwUPGNhBZ9MqcWy6XIbsYmZGU%2FWrLlF%2FsrCN%2FOKZCpKv8DCE8QABoMNjM3NDIzMTgzODA1IgxOzn81cZmIRBKky4Eq3AMlP9kx75yVGfu5%2BdyJfM%2Bcxkg3tC9g2bpCDjJ%2BQq5bKRiw2TqN7hLufyqhwIVK4X8iugCRcqlKwy60MVrCUKT75iEk6m3Goca%2BJyawaTW3lQnKYG40am1c%2BDTFExXbNgFoZWy6ODBgdolT3XvCYG2dc34sM0joKsjecOwKxVSc2CX%2FxMw6BL%2BnMe88wnkcd%2FVxQvqySmmOKlmyDANBkh8OYHH81YJKKB3mHa5ycfj5JD5BCfu%2BZoyy%2F32xlAeVUX7fS2N9vp4Wqu0TnsF8IemUvdGVuZI42KuBhYsUBKnG2t2JzVir3xRNUFrOoKxc8pQ4nNtZaP3mElBwXVvMA2QBVOdXRuvpN1fFk1%2B6y%2BVMILk%2FudL%2FLULnpCxC1V1yBX%2FwFip0V0V7YhtAuNzPZZeMGVfyLwAJ60i7cvvBxgSc7TvKmcfPqs1zHQK9Hdx3PPUFB%2ByF0ZZvu5NYZxELmoIKcaoAVW8fqt68kW06fLquQqYcT9fmM8nd5KTtjCzRqhiluyNVtBE%2B8nc8OFjUJl%2FPQJ84bUQ5oijtsWlQvO1wLme2qnal5BEfhslMGcCw9ZWSxaohkJD1lGz%2FN7B3UgYt%2F%2FH%2BDN7Ucdnnc5IIPpf3%2FDOdf6RYfgtapxpMUjDugfm9BjqkAd2twTHKgaaQeLGRG%2BIbMzLCUyO6HCZYjLTocEZXOgkMp8y2CPE%2F2v9GPSOs4uirigWs%2FOHxdEKuPg3%2FKIrspPMcgJFXBRYq%2BaeycnJy23msbf5eedwfkV0jyfVue58mYeCpmtq6Ca9ck%2BtzIXN5G1pTAGBawc9dPg3qp0o3iq6tB8Ox%2Bbd0MgudPH4ldrwsgrTc8vSEaxFvf4QZC56VoYekSCMX&X-Amz-Signature=7a5f596604cf065b424103e449a6349f03b3a3decb44de68c1805005e1d969d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRS3N54%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeoUkaYPNE6rCwePI7hmQ33lq4%2Bl0gbECEupVKDdZPZQIhANNwUPGNhBZ9MqcWy6XIbsYmZGU%2FWrLlF%2FsrCN%2FOKZCpKv8DCE8QABoMNjM3NDIzMTgzODA1IgxOzn81cZmIRBKky4Eq3AMlP9kx75yVGfu5%2BdyJfM%2Bcxkg3tC9g2bpCDjJ%2BQq5bKRiw2TqN7hLufyqhwIVK4X8iugCRcqlKwy60MVrCUKT75iEk6m3Goca%2BJyawaTW3lQnKYG40am1c%2BDTFExXbNgFoZWy6ODBgdolT3XvCYG2dc34sM0joKsjecOwKxVSc2CX%2FxMw6BL%2BnMe88wnkcd%2FVxQvqySmmOKlmyDANBkh8OYHH81YJKKB3mHa5ycfj5JD5BCfu%2BZoyy%2F32xlAeVUX7fS2N9vp4Wqu0TnsF8IemUvdGVuZI42KuBhYsUBKnG2t2JzVir3xRNUFrOoKxc8pQ4nNtZaP3mElBwXVvMA2QBVOdXRuvpN1fFk1%2B6y%2BVMILk%2FudL%2FLULnpCxC1V1yBX%2FwFip0V0V7YhtAuNzPZZeMGVfyLwAJ60i7cvvBxgSc7TvKmcfPqs1zHQK9Hdx3PPUFB%2ByF0ZZvu5NYZxELmoIKcaoAVW8fqt68kW06fLquQqYcT9fmM8nd5KTtjCzRqhiluyNVtBE%2B8nc8OFjUJl%2FPQJ84bUQ5oijtsWlQvO1wLme2qnal5BEfhslMGcCw9ZWSxaohkJD1lGz%2FN7B3UgYt%2F%2FH%2BDN7Ucdnnc5IIPpf3%2FDOdf6RYfgtapxpMUjDugfm9BjqkAd2twTHKgaaQeLGRG%2BIbMzLCUyO6HCZYjLTocEZXOgkMp8y2CPE%2F2v9GPSOs4uirigWs%2FOHxdEKuPg3%2FKIrspPMcgJFXBRYq%2BaeycnJy23msbf5eedwfkV0jyfVue58mYeCpmtq6Ca9ck%2BtzIXN5G1pTAGBawc9dPg3qp0o3iq6tB8Ox%2Bbd0MgudPH4ldrwsgrTc8vSEaxFvf4QZC56VoYekSCMX&X-Amz-Signature=0a813539788a421a7652ba89eda588112ae56c365070efa8ab139059566835b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRS3N54%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeoUkaYPNE6rCwePI7hmQ33lq4%2Bl0gbECEupVKDdZPZQIhANNwUPGNhBZ9MqcWy6XIbsYmZGU%2FWrLlF%2FsrCN%2FOKZCpKv8DCE8QABoMNjM3NDIzMTgzODA1IgxOzn81cZmIRBKky4Eq3AMlP9kx75yVGfu5%2BdyJfM%2Bcxkg3tC9g2bpCDjJ%2BQq5bKRiw2TqN7hLufyqhwIVK4X8iugCRcqlKwy60MVrCUKT75iEk6m3Goca%2BJyawaTW3lQnKYG40am1c%2BDTFExXbNgFoZWy6ODBgdolT3XvCYG2dc34sM0joKsjecOwKxVSc2CX%2FxMw6BL%2BnMe88wnkcd%2FVxQvqySmmOKlmyDANBkh8OYHH81YJKKB3mHa5ycfj5JD5BCfu%2BZoyy%2F32xlAeVUX7fS2N9vp4Wqu0TnsF8IemUvdGVuZI42KuBhYsUBKnG2t2JzVir3xRNUFrOoKxc8pQ4nNtZaP3mElBwXVvMA2QBVOdXRuvpN1fFk1%2B6y%2BVMILk%2FudL%2FLULnpCxC1V1yBX%2FwFip0V0V7YhtAuNzPZZeMGVfyLwAJ60i7cvvBxgSc7TvKmcfPqs1zHQK9Hdx3PPUFB%2ByF0ZZvu5NYZxELmoIKcaoAVW8fqt68kW06fLquQqYcT9fmM8nd5KTtjCzRqhiluyNVtBE%2B8nc8OFjUJl%2FPQJ84bUQ5oijtsWlQvO1wLme2qnal5BEfhslMGcCw9ZWSxaohkJD1lGz%2FN7B3UgYt%2F%2FH%2BDN7Ucdnnc5IIPpf3%2FDOdf6RYfgtapxpMUjDugfm9BjqkAd2twTHKgaaQeLGRG%2BIbMzLCUyO6HCZYjLTocEZXOgkMp8y2CPE%2F2v9GPSOs4uirigWs%2FOHxdEKuPg3%2FKIrspPMcgJFXBRYq%2BaeycnJy23msbf5eedwfkV0jyfVue58mYeCpmtq6Ca9ck%2BtzIXN5G1pTAGBawc9dPg3qp0o3iq6tB8Ox%2Bbd0MgudPH4ldrwsgrTc8vSEaxFvf4QZC56VoYekSCMX&X-Amz-Signature=998d3e6682016e5e5537f94b15a6e245ec97454edee5ab457583586000a02418&X-Amz-SignedHeaders=host&x-id=GetObject)
