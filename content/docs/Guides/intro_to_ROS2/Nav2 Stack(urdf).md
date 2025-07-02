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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5DX6PF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjNfriggTcKcLbHS2JiMcFurNud9EtyG5%2B6Tg8lvWH%2FAIhAMkS%2Fq7TSSl4e1KxZ5GQu48uRP1y7IViVGFUBXvMd3mlKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH%2F8qylRgwc0pMT%2B4q3AP559jwoQWZwhqdOzXX6VWvPTc75xq5K9E4cM2gEBW1NEOV1UmtwDdfh5E1XKDRQC7TsP3thvK0QHBQiNieFZT3PhGRZ9TX2wwDKmJ893sTX%2BreNbd%2FCpLLBoF5HzPQHtDoRP1ebODmdDhfeInX9DhgUdsRxXdhrJODl8PgWD8SCapUyUyC4sXiw9SJZAyPEbnJXh4jZxd3JRGk%2BrKRkiwCW%2FRMEKLNovBitoNDoBu0qXj62nGSrjAj0vuwwY5RnDNqi6akNRqTqQSX3tex9V7csOmpuWN5ERrV4ki8j%2B9BNCFG8iTkr9wUONIrUa1cAJYu74UqmtIwJnHXXbEpOlvOuNK8P8AvHr5HQDE36kx8e0bttoHIHJh%2F6d9HWqoC9%2FtvxZzNnkfK78ixVw2p5Yvh2vkesxP%2BFdgULQMNf2JxT531iJH6705y8MOvAJc1bWLvLqDKxQzX4oWbG1IcAgF7%2F%2BWBEAhRHVBEuxb0AMYTXLVPM3ysuFq7IivFZjYQdq4clJOk9dPIpauSTNpflBffjrv2h5FRCmKiSS6IJL2VV1%2BGSVSppSEiVAltH5EfDkXpStPjL9yHTnZn5MNUy9Jhuy55n15EJo8ng3WjLfwOEuuuo2BgixgqfZ2aQTDOk5TDBjqkAds6Ejb%2FTeQQoZKMSp9Rcyq5dNMi5r3S%2BcYif23yhZ7EDfU2FrCbtiuScHojZX%2FqlfDAn0z0usRbvk%2Fg%2BHQ%2FvZfsYAiy13v02k03eMwY31j3SSzha%2FhRgHmltixxacip29anqRgxfexpnF2skPVl7oeboCuzE92hZS9UkGPyeR49Os2senoUXcIaOuVhLCVFXuB4R9UtaVSv%2BKXyT2TSMhWqF0uT&X-Amz-Signature=a3d66fc1c63d5e5d859eb5a80e5882cb9232d0bbe4c5a6865f701e8125c71cdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5DX6PF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjNfriggTcKcLbHS2JiMcFurNud9EtyG5%2B6Tg8lvWH%2FAIhAMkS%2Fq7TSSl4e1KxZ5GQu48uRP1y7IViVGFUBXvMd3mlKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH%2F8qylRgwc0pMT%2B4q3AP559jwoQWZwhqdOzXX6VWvPTc75xq5K9E4cM2gEBW1NEOV1UmtwDdfh5E1XKDRQC7TsP3thvK0QHBQiNieFZT3PhGRZ9TX2wwDKmJ893sTX%2BreNbd%2FCpLLBoF5HzPQHtDoRP1ebODmdDhfeInX9DhgUdsRxXdhrJODl8PgWD8SCapUyUyC4sXiw9SJZAyPEbnJXh4jZxd3JRGk%2BrKRkiwCW%2FRMEKLNovBitoNDoBu0qXj62nGSrjAj0vuwwY5RnDNqi6akNRqTqQSX3tex9V7csOmpuWN5ERrV4ki8j%2B9BNCFG8iTkr9wUONIrUa1cAJYu74UqmtIwJnHXXbEpOlvOuNK8P8AvHr5HQDE36kx8e0bttoHIHJh%2F6d9HWqoC9%2FtvxZzNnkfK78ixVw2p5Yvh2vkesxP%2BFdgULQMNf2JxT531iJH6705y8MOvAJc1bWLvLqDKxQzX4oWbG1IcAgF7%2F%2BWBEAhRHVBEuxb0AMYTXLVPM3ysuFq7IivFZjYQdq4clJOk9dPIpauSTNpflBffjrv2h5FRCmKiSS6IJL2VV1%2BGSVSppSEiVAltH5EfDkXpStPjL9yHTnZn5MNUy9Jhuy55n15EJo8ng3WjLfwOEuuuo2BgixgqfZ2aQTDOk5TDBjqkAds6Ejb%2FTeQQoZKMSp9Rcyq5dNMi5r3S%2BcYif23yhZ7EDfU2FrCbtiuScHojZX%2FqlfDAn0z0usRbvk%2Fg%2BHQ%2FvZfsYAiy13v02k03eMwY31j3SSzha%2FhRgHmltixxacip29anqRgxfexpnF2skPVl7oeboCuzE92hZS9UkGPyeR49Os2senoUXcIaOuVhLCVFXuB4R9UtaVSv%2BKXyT2TSMhWqF0uT&X-Amz-Signature=35a4af1720e0e4ec4e2f074890e5c7db5f6d3337dd311d288d8d79b943b61251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5DX6PF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjNfriggTcKcLbHS2JiMcFurNud9EtyG5%2B6Tg8lvWH%2FAIhAMkS%2Fq7TSSl4e1KxZ5GQu48uRP1y7IViVGFUBXvMd3mlKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH%2F8qylRgwc0pMT%2B4q3AP559jwoQWZwhqdOzXX6VWvPTc75xq5K9E4cM2gEBW1NEOV1UmtwDdfh5E1XKDRQC7TsP3thvK0QHBQiNieFZT3PhGRZ9TX2wwDKmJ893sTX%2BreNbd%2FCpLLBoF5HzPQHtDoRP1ebODmdDhfeInX9DhgUdsRxXdhrJODl8PgWD8SCapUyUyC4sXiw9SJZAyPEbnJXh4jZxd3JRGk%2BrKRkiwCW%2FRMEKLNovBitoNDoBu0qXj62nGSrjAj0vuwwY5RnDNqi6akNRqTqQSX3tex9V7csOmpuWN5ERrV4ki8j%2B9BNCFG8iTkr9wUONIrUa1cAJYu74UqmtIwJnHXXbEpOlvOuNK8P8AvHr5HQDE36kx8e0bttoHIHJh%2F6d9HWqoC9%2FtvxZzNnkfK78ixVw2p5Yvh2vkesxP%2BFdgULQMNf2JxT531iJH6705y8MOvAJc1bWLvLqDKxQzX4oWbG1IcAgF7%2F%2BWBEAhRHVBEuxb0AMYTXLVPM3ysuFq7IivFZjYQdq4clJOk9dPIpauSTNpflBffjrv2h5FRCmKiSS6IJL2VV1%2BGSVSppSEiVAltH5EfDkXpStPjL9yHTnZn5MNUy9Jhuy55n15EJo8ng3WjLfwOEuuuo2BgixgqfZ2aQTDOk5TDBjqkAds6Ejb%2FTeQQoZKMSp9Rcyq5dNMi5r3S%2BcYif23yhZ7EDfU2FrCbtiuScHojZX%2FqlfDAn0z0usRbvk%2Fg%2BHQ%2FvZfsYAiy13v02k03eMwY31j3SSzha%2FhRgHmltixxacip29anqRgxfexpnF2skPVl7oeboCuzE92hZS9UkGPyeR49Os2senoUXcIaOuVhLCVFXuB4R9UtaVSv%2BKXyT2TSMhWqF0uT&X-Amz-Signature=684049a2bae3b9774a8331ccbde15fed669ce8132faf1d7cb41106586656c387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5DX6PF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjNfriggTcKcLbHS2JiMcFurNud9EtyG5%2B6Tg8lvWH%2FAIhAMkS%2Fq7TSSl4e1KxZ5GQu48uRP1y7IViVGFUBXvMd3mlKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH%2F8qylRgwc0pMT%2B4q3AP559jwoQWZwhqdOzXX6VWvPTc75xq5K9E4cM2gEBW1NEOV1UmtwDdfh5E1XKDRQC7TsP3thvK0QHBQiNieFZT3PhGRZ9TX2wwDKmJ893sTX%2BreNbd%2FCpLLBoF5HzPQHtDoRP1ebODmdDhfeInX9DhgUdsRxXdhrJODl8PgWD8SCapUyUyC4sXiw9SJZAyPEbnJXh4jZxd3JRGk%2BrKRkiwCW%2FRMEKLNovBitoNDoBu0qXj62nGSrjAj0vuwwY5RnDNqi6akNRqTqQSX3tex9V7csOmpuWN5ERrV4ki8j%2B9BNCFG8iTkr9wUONIrUa1cAJYu74UqmtIwJnHXXbEpOlvOuNK8P8AvHr5HQDE36kx8e0bttoHIHJh%2F6d9HWqoC9%2FtvxZzNnkfK78ixVw2p5Yvh2vkesxP%2BFdgULQMNf2JxT531iJH6705y8MOvAJc1bWLvLqDKxQzX4oWbG1IcAgF7%2F%2BWBEAhRHVBEuxb0AMYTXLVPM3ysuFq7IivFZjYQdq4clJOk9dPIpauSTNpflBffjrv2h5FRCmKiSS6IJL2VV1%2BGSVSppSEiVAltH5EfDkXpStPjL9yHTnZn5MNUy9Jhuy55n15EJo8ng3WjLfwOEuuuo2BgixgqfZ2aQTDOk5TDBjqkAds6Ejb%2FTeQQoZKMSp9Rcyq5dNMi5r3S%2BcYif23yhZ7EDfU2FrCbtiuScHojZX%2FqlfDAn0z0usRbvk%2Fg%2BHQ%2FvZfsYAiy13v02k03eMwY31j3SSzha%2FhRgHmltixxacip29anqRgxfexpnF2skPVl7oeboCuzE92hZS9UkGPyeR49Os2senoUXcIaOuVhLCVFXuB4R9UtaVSv%2BKXyT2TSMhWqF0uT&X-Amz-Signature=e2dfd6033746b5d5b86f5fb4f20a6d42d9175209d24ffd745f539867feeb703c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5DX6PF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjNfriggTcKcLbHS2JiMcFurNud9EtyG5%2B6Tg8lvWH%2FAIhAMkS%2Fq7TSSl4e1KxZ5GQu48uRP1y7IViVGFUBXvMd3mlKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH%2F8qylRgwc0pMT%2B4q3AP559jwoQWZwhqdOzXX6VWvPTc75xq5K9E4cM2gEBW1NEOV1UmtwDdfh5E1XKDRQC7TsP3thvK0QHBQiNieFZT3PhGRZ9TX2wwDKmJ893sTX%2BreNbd%2FCpLLBoF5HzPQHtDoRP1ebODmdDhfeInX9DhgUdsRxXdhrJODl8PgWD8SCapUyUyC4sXiw9SJZAyPEbnJXh4jZxd3JRGk%2BrKRkiwCW%2FRMEKLNovBitoNDoBu0qXj62nGSrjAj0vuwwY5RnDNqi6akNRqTqQSX3tex9V7csOmpuWN5ERrV4ki8j%2B9BNCFG8iTkr9wUONIrUa1cAJYu74UqmtIwJnHXXbEpOlvOuNK8P8AvHr5HQDE36kx8e0bttoHIHJh%2F6d9HWqoC9%2FtvxZzNnkfK78ixVw2p5Yvh2vkesxP%2BFdgULQMNf2JxT531iJH6705y8MOvAJc1bWLvLqDKxQzX4oWbG1IcAgF7%2F%2BWBEAhRHVBEuxb0AMYTXLVPM3ysuFq7IivFZjYQdq4clJOk9dPIpauSTNpflBffjrv2h5FRCmKiSS6IJL2VV1%2BGSVSppSEiVAltH5EfDkXpStPjL9yHTnZn5MNUy9Jhuy55n15EJo8ng3WjLfwOEuuuo2BgixgqfZ2aQTDOk5TDBjqkAds6Ejb%2FTeQQoZKMSp9Rcyq5dNMi5r3S%2BcYif23yhZ7EDfU2FrCbtiuScHojZX%2FqlfDAn0z0usRbvk%2Fg%2BHQ%2FvZfsYAiy13v02k03eMwY31j3SSzha%2FhRgHmltixxacip29anqRgxfexpnF2skPVl7oeboCuzE92hZS9UkGPyeR49Os2senoUXcIaOuVhLCVFXuB4R9UtaVSv%2BKXyT2TSMhWqF0uT&X-Amz-Signature=e30db022fc85ad5cfae3a29833176b25e9c3be86d34214156b61596800a0f20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5DX6PF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjNfriggTcKcLbHS2JiMcFurNud9EtyG5%2B6Tg8lvWH%2FAIhAMkS%2Fq7TSSl4e1KxZ5GQu48uRP1y7IViVGFUBXvMd3mlKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH%2F8qylRgwc0pMT%2B4q3AP559jwoQWZwhqdOzXX6VWvPTc75xq5K9E4cM2gEBW1NEOV1UmtwDdfh5E1XKDRQC7TsP3thvK0QHBQiNieFZT3PhGRZ9TX2wwDKmJ893sTX%2BreNbd%2FCpLLBoF5HzPQHtDoRP1ebODmdDhfeInX9DhgUdsRxXdhrJODl8PgWD8SCapUyUyC4sXiw9SJZAyPEbnJXh4jZxd3JRGk%2BrKRkiwCW%2FRMEKLNovBitoNDoBu0qXj62nGSrjAj0vuwwY5RnDNqi6akNRqTqQSX3tex9V7csOmpuWN5ERrV4ki8j%2B9BNCFG8iTkr9wUONIrUa1cAJYu74UqmtIwJnHXXbEpOlvOuNK8P8AvHr5HQDE36kx8e0bttoHIHJh%2F6d9HWqoC9%2FtvxZzNnkfK78ixVw2p5Yvh2vkesxP%2BFdgULQMNf2JxT531iJH6705y8MOvAJc1bWLvLqDKxQzX4oWbG1IcAgF7%2F%2BWBEAhRHVBEuxb0AMYTXLVPM3ysuFq7IivFZjYQdq4clJOk9dPIpauSTNpflBffjrv2h5FRCmKiSS6IJL2VV1%2BGSVSppSEiVAltH5EfDkXpStPjL9yHTnZn5MNUy9Jhuy55n15EJo8ng3WjLfwOEuuuo2BgixgqfZ2aQTDOk5TDBjqkAds6Ejb%2FTeQQoZKMSp9Rcyq5dNMi5r3S%2BcYif23yhZ7EDfU2FrCbtiuScHojZX%2FqlfDAn0z0usRbvk%2Fg%2BHQ%2FvZfsYAiy13v02k03eMwY31j3SSzha%2FhRgHmltixxacip29anqRgxfexpnF2skPVl7oeboCuzE92hZS9UkGPyeR49Os2senoUXcIaOuVhLCVFXuB4R9UtaVSv%2BKXyT2TSMhWqF0uT&X-Amz-Signature=322f110c198bb032a04e92f8a752784662feb4b1fc5fc9de9290672c58b77367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
