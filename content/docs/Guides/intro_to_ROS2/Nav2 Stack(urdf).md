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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLVYV73%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwwp90covkR%2FegycTqhoHxnskL8zk0m2DxVPNAyaoXUwIgUFVdrLkPNsWv%2BqFloNpWCNp4dv8qyTFUPHKl06TcrFgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXDNvQJSiFL9xx2ayrcA0PYIX9oZpOYUW%2FAsLqal1iDpU4TwZu%2Bz3LyV0ssiqXemk1H09G4S%2FGd5xx2IWGFrvVmcNysRUciLQhfQ9D76Pd4OP%2FEu83y9JfVoXxFN4g5DJPzTxBAnI2B%2BZWtMch%2FCQKiq%2Bxd%2Fjy1MgJeLXorDLZye2q94QN0WQqc8xcXvWAiSth7jJt42JfJOXitz14e9iY0LI1D%2BW8DxhyYDFsz9KfLtc%2BfZXwLgE7EIihScAOkEdCR4m%2Beosb6bkU8bt6o2Ski9kITF3alzchsxSLJu7mMl4H2RWshS%2BlJD9MHXkW0g0sBzbOCfUs7DUWY8Jor47ObKZp87nrCJM6VI21XoyJ7cQgEWUCqC2MVlblcpC%2BkSXT9se%2B%2BL%2FUTL2JlNolQkZ7ZqwLhFq2Q%2FtHb1EJDr5AOCxlOqx5VFllTVkjrtH8GNBanbNrCGLXNFxvjC4JQYrVBm%2FpaqAHlLw2s0Zv74kMbzHLdoaK8HEHGnom6HhQbBn9orERUzFL7dQ9bG2481ORD5Mc7LBc%2FjgthJVVKLoRshT6zCrlS%2BGm7Udj5No2989vRJvGjOySmYOfmHlpZKa32FFCYly1VzG1%2F0GFJA8rcLD7CIrfMNAyf5zfzkDbJpqVDZF7Kgm9CQPHKMKKxlMIGOqUBrjUHWwp%2FFjCMJMRQ%2BKtIIGWIpBVPcYRI8xzbAXSdKykVWfTIsUf1RJ0z0xZPfBPS0RvzZ4cXdk8YxoApgOuFx3NP844YbtuZVN4h8x%2FDposcxz3WigQIW5T4RicVuSpqaQ%2Fvqj4iWUhy0mh7nmkqtOmfHqyCjXHKnshjoDDjc8m4%2BI%2Fch30ydqIXvV6WW%2Bj6WWy%2FMnJ0PRkbflV4FbPaLvWjOvNz&X-Amz-Signature=1fcf839770af27914c80f7283d92efab173d20142975d6c9f060285162cc2c60&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLVYV73%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwwp90covkR%2FegycTqhoHxnskL8zk0m2DxVPNAyaoXUwIgUFVdrLkPNsWv%2BqFloNpWCNp4dv8qyTFUPHKl06TcrFgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXDNvQJSiFL9xx2ayrcA0PYIX9oZpOYUW%2FAsLqal1iDpU4TwZu%2Bz3LyV0ssiqXemk1H09G4S%2FGd5xx2IWGFrvVmcNysRUciLQhfQ9D76Pd4OP%2FEu83y9JfVoXxFN4g5DJPzTxBAnI2B%2BZWtMch%2FCQKiq%2Bxd%2Fjy1MgJeLXorDLZye2q94QN0WQqc8xcXvWAiSth7jJt42JfJOXitz14e9iY0LI1D%2BW8DxhyYDFsz9KfLtc%2BfZXwLgE7EIihScAOkEdCR4m%2Beosb6bkU8bt6o2Ski9kITF3alzchsxSLJu7mMl4H2RWshS%2BlJD9MHXkW0g0sBzbOCfUs7DUWY8Jor47ObKZp87nrCJM6VI21XoyJ7cQgEWUCqC2MVlblcpC%2BkSXT9se%2B%2BL%2FUTL2JlNolQkZ7ZqwLhFq2Q%2FtHb1EJDr5AOCxlOqx5VFllTVkjrtH8GNBanbNrCGLXNFxvjC4JQYrVBm%2FpaqAHlLw2s0Zv74kMbzHLdoaK8HEHGnom6HhQbBn9orERUzFL7dQ9bG2481ORD5Mc7LBc%2FjgthJVVKLoRshT6zCrlS%2BGm7Udj5No2989vRJvGjOySmYOfmHlpZKa32FFCYly1VzG1%2F0GFJA8rcLD7CIrfMNAyf5zfzkDbJpqVDZF7Kgm9CQPHKMKKxlMIGOqUBrjUHWwp%2FFjCMJMRQ%2BKtIIGWIpBVPcYRI8xzbAXSdKykVWfTIsUf1RJ0z0xZPfBPS0RvzZ4cXdk8YxoApgOuFx3NP844YbtuZVN4h8x%2FDposcxz3WigQIW5T4RicVuSpqaQ%2Fvqj4iWUhy0mh7nmkqtOmfHqyCjXHKnshjoDDjc8m4%2BI%2Fch30ydqIXvV6WW%2Bj6WWy%2FMnJ0PRkbflV4FbPaLvWjOvNz&X-Amz-Signature=c59717588c43884427f7a7c252f9677a4fd1fa38f7fd5e97f870efc21779e51d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLVYV73%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwwp90covkR%2FegycTqhoHxnskL8zk0m2DxVPNAyaoXUwIgUFVdrLkPNsWv%2BqFloNpWCNp4dv8qyTFUPHKl06TcrFgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXDNvQJSiFL9xx2ayrcA0PYIX9oZpOYUW%2FAsLqal1iDpU4TwZu%2Bz3LyV0ssiqXemk1H09G4S%2FGd5xx2IWGFrvVmcNysRUciLQhfQ9D76Pd4OP%2FEu83y9JfVoXxFN4g5DJPzTxBAnI2B%2BZWtMch%2FCQKiq%2Bxd%2Fjy1MgJeLXorDLZye2q94QN0WQqc8xcXvWAiSth7jJt42JfJOXitz14e9iY0LI1D%2BW8DxhyYDFsz9KfLtc%2BfZXwLgE7EIihScAOkEdCR4m%2Beosb6bkU8bt6o2Ski9kITF3alzchsxSLJu7mMl4H2RWshS%2BlJD9MHXkW0g0sBzbOCfUs7DUWY8Jor47ObKZp87nrCJM6VI21XoyJ7cQgEWUCqC2MVlblcpC%2BkSXT9se%2B%2BL%2FUTL2JlNolQkZ7ZqwLhFq2Q%2FtHb1EJDr5AOCxlOqx5VFllTVkjrtH8GNBanbNrCGLXNFxvjC4JQYrVBm%2FpaqAHlLw2s0Zv74kMbzHLdoaK8HEHGnom6HhQbBn9orERUzFL7dQ9bG2481ORD5Mc7LBc%2FjgthJVVKLoRshT6zCrlS%2BGm7Udj5No2989vRJvGjOySmYOfmHlpZKa32FFCYly1VzG1%2F0GFJA8rcLD7CIrfMNAyf5zfzkDbJpqVDZF7Kgm9CQPHKMKKxlMIGOqUBrjUHWwp%2FFjCMJMRQ%2BKtIIGWIpBVPcYRI8xzbAXSdKykVWfTIsUf1RJ0z0xZPfBPS0RvzZ4cXdk8YxoApgOuFx3NP844YbtuZVN4h8x%2FDposcxz3WigQIW5T4RicVuSpqaQ%2Fvqj4iWUhy0mh7nmkqtOmfHqyCjXHKnshjoDDjc8m4%2BI%2Fch30ydqIXvV6WW%2Bj6WWy%2FMnJ0PRkbflV4FbPaLvWjOvNz&X-Amz-Signature=249edc76e3cbe1ef64ea399163ceed752a7fe30fbc780ccd74424707283cfbb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLVYV73%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwwp90covkR%2FegycTqhoHxnskL8zk0m2DxVPNAyaoXUwIgUFVdrLkPNsWv%2BqFloNpWCNp4dv8qyTFUPHKl06TcrFgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXDNvQJSiFL9xx2ayrcA0PYIX9oZpOYUW%2FAsLqal1iDpU4TwZu%2Bz3LyV0ssiqXemk1H09G4S%2FGd5xx2IWGFrvVmcNysRUciLQhfQ9D76Pd4OP%2FEu83y9JfVoXxFN4g5DJPzTxBAnI2B%2BZWtMch%2FCQKiq%2Bxd%2Fjy1MgJeLXorDLZye2q94QN0WQqc8xcXvWAiSth7jJt42JfJOXitz14e9iY0LI1D%2BW8DxhyYDFsz9KfLtc%2BfZXwLgE7EIihScAOkEdCR4m%2Beosb6bkU8bt6o2Ski9kITF3alzchsxSLJu7mMl4H2RWshS%2BlJD9MHXkW0g0sBzbOCfUs7DUWY8Jor47ObKZp87nrCJM6VI21XoyJ7cQgEWUCqC2MVlblcpC%2BkSXT9se%2B%2BL%2FUTL2JlNolQkZ7ZqwLhFq2Q%2FtHb1EJDr5AOCxlOqx5VFllTVkjrtH8GNBanbNrCGLXNFxvjC4JQYrVBm%2FpaqAHlLw2s0Zv74kMbzHLdoaK8HEHGnom6HhQbBn9orERUzFL7dQ9bG2481ORD5Mc7LBc%2FjgthJVVKLoRshT6zCrlS%2BGm7Udj5No2989vRJvGjOySmYOfmHlpZKa32FFCYly1VzG1%2F0GFJA8rcLD7CIrfMNAyf5zfzkDbJpqVDZF7Kgm9CQPHKMKKxlMIGOqUBrjUHWwp%2FFjCMJMRQ%2BKtIIGWIpBVPcYRI8xzbAXSdKykVWfTIsUf1RJ0z0xZPfBPS0RvzZ4cXdk8YxoApgOuFx3NP844YbtuZVN4h8x%2FDposcxz3WigQIW5T4RicVuSpqaQ%2Fvqj4iWUhy0mh7nmkqtOmfHqyCjXHKnshjoDDjc8m4%2BI%2Fch30ydqIXvV6WW%2Bj6WWy%2FMnJ0PRkbflV4FbPaLvWjOvNz&X-Amz-Signature=064b16fbb4310776868322397d53e00adaa4fe7f63e6be4f61d37d34d23baea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLVYV73%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwwp90covkR%2FegycTqhoHxnskL8zk0m2DxVPNAyaoXUwIgUFVdrLkPNsWv%2BqFloNpWCNp4dv8qyTFUPHKl06TcrFgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXDNvQJSiFL9xx2ayrcA0PYIX9oZpOYUW%2FAsLqal1iDpU4TwZu%2Bz3LyV0ssiqXemk1H09G4S%2FGd5xx2IWGFrvVmcNysRUciLQhfQ9D76Pd4OP%2FEu83y9JfVoXxFN4g5DJPzTxBAnI2B%2BZWtMch%2FCQKiq%2Bxd%2Fjy1MgJeLXorDLZye2q94QN0WQqc8xcXvWAiSth7jJt42JfJOXitz14e9iY0LI1D%2BW8DxhyYDFsz9KfLtc%2BfZXwLgE7EIihScAOkEdCR4m%2Beosb6bkU8bt6o2Ski9kITF3alzchsxSLJu7mMl4H2RWshS%2BlJD9MHXkW0g0sBzbOCfUs7DUWY8Jor47ObKZp87nrCJM6VI21XoyJ7cQgEWUCqC2MVlblcpC%2BkSXT9se%2B%2BL%2FUTL2JlNolQkZ7ZqwLhFq2Q%2FtHb1EJDr5AOCxlOqx5VFllTVkjrtH8GNBanbNrCGLXNFxvjC4JQYrVBm%2FpaqAHlLw2s0Zv74kMbzHLdoaK8HEHGnom6HhQbBn9orERUzFL7dQ9bG2481ORD5Mc7LBc%2FjgthJVVKLoRshT6zCrlS%2BGm7Udj5No2989vRJvGjOySmYOfmHlpZKa32FFCYly1VzG1%2F0GFJA8rcLD7CIrfMNAyf5zfzkDbJpqVDZF7Kgm9CQPHKMKKxlMIGOqUBrjUHWwp%2FFjCMJMRQ%2BKtIIGWIpBVPcYRI8xzbAXSdKykVWfTIsUf1RJ0z0xZPfBPS0RvzZ4cXdk8YxoApgOuFx3NP844YbtuZVN4h8x%2FDposcxz3WigQIW5T4RicVuSpqaQ%2Fvqj4iWUhy0mh7nmkqtOmfHqyCjXHKnshjoDDjc8m4%2BI%2Fch30ydqIXvV6WW%2Bj6WWy%2FMnJ0PRkbflV4FbPaLvWjOvNz&X-Amz-Signature=25487383a26b3b1077fd11953b0a02ec7037ec95011b7f196e06ea482b82331f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLVYV73%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwwp90covkR%2FegycTqhoHxnskL8zk0m2DxVPNAyaoXUwIgUFVdrLkPNsWv%2BqFloNpWCNp4dv8qyTFUPHKl06TcrFgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXDNvQJSiFL9xx2ayrcA0PYIX9oZpOYUW%2FAsLqal1iDpU4TwZu%2Bz3LyV0ssiqXemk1H09G4S%2FGd5xx2IWGFrvVmcNysRUciLQhfQ9D76Pd4OP%2FEu83y9JfVoXxFN4g5DJPzTxBAnI2B%2BZWtMch%2FCQKiq%2Bxd%2Fjy1MgJeLXorDLZye2q94QN0WQqc8xcXvWAiSth7jJt42JfJOXitz14e9iY0LI1D%2BW8DxhyYDFsz9KfLtc%2BfZXwLgE7EIihScAOkEdCR4m%2Beosb6bkU8bt6o2Ski9kITF3alzchsxSLJu7mMl4H2RWshS%2BlJD9MHXkW0g0sBzbOCfUs7DUWY8Jor47ObKZp87nrCJM6VI21XoyJ7cQgEWUCqC2MVlblcpC%2BkSXT9se%2B%2BL%2FUTL2JlNolQkZ7ZqwLhFq2Q%2FtHb1EJDr5AOCxlOqx5VFllTVkjrtH8GNBanbNrCGLXNFxvjC4JQYrVBm%2FpaqAHlLw2s0Zv74kMbzHLdoaK8HEHGnom6HhQbBn9orERUzFL7dQ9bG2481ORD5Mc7LBc%2FjgthJVVKLoRshT6zCrlS%2BGm7Udj5No2989vRJvGjOySmYOfmHlpZKa32FFCYly1VzG1%2F0GFJA8rcLD7CIrfMNAyf5zfzkDbJpqVDZF7Kgm9CQPHKMKKxlMIGOqUBrjUHWwp%2FFjCMJMRQ%2BKtIIGWIpBVPcYRI8xzbAXSdKykVWfTIsUf1RJ0z0xZPfBPS0RvzZ4cXdk8YxoApgOuFx3NP844YbtuZVN4h8x%2FDposcxz3WigQIW5T4RicVuSpqaQ%2Fvqj4iWUhy0mh7nmkqtOmfHqyCjXHKnshjoDDjc8m4%2BI%2Fch30ydqIXvV6WW%2Bj6WWy%2FMnJ0PRkbflV4FbPaLvWjOvNz&X-Amz-Signature=ef5dba9a975d8c6bd6f313dcbd8e50109f3bf12e7eb52b4bbc3999d563d77255&X-Amz-SignedHeaders=host&x-id=GetObject)
