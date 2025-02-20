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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBQ6BAI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKRHf7mWXYjNfn7inCFBW7E6UffGt8jMcBq8kMhF9EHAiA7ST5L3uZDiMbmfJ%2BznO%2BfWjwetMCTlNabd1dzTaDvbyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9k%2Bt%2B9hDkt8xvH8MKtwDvrKU8VFLddVu6zInU2AuViduWU9%2BtBtNGniWK3hFX4iK4k%2FODPyxoGutuVQXWWMmtFemHEBkjBIYSjQvJvBNWevMfbyYFuizqe2lU4%2BEGBEMfkITafrKBHWYml8Le4eYaT9NyAB30Ra663QBJu6KbmFW5ghFAnWobv48fw63%2F0sJ2Vq03VeeRp7rihbCsVagNiw786ezrRsAhty9RBmmVdPSc8%2BQ%2F9g6FbV47trG%2BA8NrWYSHeyOw1VHoxRbs4GRxAJw7MWhQ%2B5XHUCl%2BOe8BxlmWoY7XoF01ZaIlKVnIg5vO%2FrX905H1aOzmvljrJYFVPqYGTZi3Jt%2BvBo%2FMvAFadgpJv7xMHzz%2F1dhHKx7CB4lPJwuL4wwisGoH6DXvtMiBkrnGrozd3wHSUDpM1VhyKFMTaSHcr4iuzzOuCYKNf1POT%2FSOnnkk6e4CvFIoAIVfRvxoxFhKqhkFSIEdReLKRTTQahTPZ%2BnG20jFp%2FF5cgmzio2QXxDBtCUXwwvS1JWfuBZK5I8jSzf0jdIf1w5cvNHrgBiWkoaMpm0hrh4zIN%2F8Y5DQVw1WbGrktb%2FxYuVOieMUd6bl21exNzhHpgWlF3fCsKCRDaSWZtxR%2BzuARGIJAr038TZlPBznp8w7srcvQY6pgGcWIkkKW0mkmO6IFbY8YzeVe%2BaZE%2F3ANGa0qEaQS69WjnlY7RdNmGyZWoQh94ApcOqeFI%2F4ABIQ4x5CsdosZEUgqdbeu5eBG8WhX801WCCZ9xsUYQAuE1MMDEiQhh4vJHs3D5DqjnhfFTAt9Pit9NSLCABwvjXfDagCjy%2B%2B5D0iKw4GoWvT9p23aRBvoTZ8goqs6%2FklRuZSDFHEnFtcSWeHOKu9bNa&X-Amz-Signature=888a72a1174c5c86b9a246baf4df22ed37cf07a2fe9cb31c5f05aa3ea9fc2e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBQ6BAI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKRHf7mWXYjNfn7inCFBW7E6UffGt8jMcBq8kMhF9EHAiA7ST5L3uZDiMbmfJ%2BznO%2BfWjwetMCTlNabd1dzTaDvbyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9k%2Bt%2B9hDkt8xvH8MKtwDvrKU8VFLddVu6zInU2AuViduWU9%2BtBtNGniWK3hFX4iK4k%2FODPyxoGutuVQXWWMmtFemHEBkjBIYSjQvJvBNWevMfbyYFuizqe2lU4%2BEGBEMfkITafrKBHWYml8Le4eYaT9NyAB30Ra663QBJu6KbmFW5ghFAnWobv48fw63%2F0sJ2Vq03VeeRp7rihbCsVagNiw786ezrRsAhty9RBmmVdPSc8%2BQ%2F9g6FbV47trG%2BA8NrWYSHeyOw1VHoxRbs4GRxAJw7MWhQ%2B5XHUCl%2BOe8BxlmWoY7XoF01ZaIlKVnIg5vO%2FrX905H1aOzmvljrJYFVPqYGTZi3Jt%2BvBo%2FMvAFadgpJv7xMHzz%2F1dhHKx7CB4lPJwuL4wwisGoH6DXvtMiBkrnGrozd3wHSUDpM1VhyKFMTaSHcr4iuzzOuCYKNf1POT%2FSOnnkk6e4CvFIoAIVfRvxoxFhKqhkFSIEdReLKRTTQahTPZ%2BnG20jFp%2FF5cgmzio2QXxDBtCUXwwvS1JWfuBZK5I8jSzf0jdIf1w5cvNHrgBiWkoaMpm0hrh4zIN%2F8Y5DQVw1WbGrktb%2FxYuVOieMUd6bl21exNzhHpgWlF3fCsKCRDaSWZtxR%2BzuARGIJAr038TZlPBznp8w7srcvQY6pgGcWIkkKW0mkmO6IFbY8YzeVe%2BaZE%2F3ANGa0qEaQS69WjnlY7RdNmGyZWoQh94ApcOqeFI%2F4ABIQ4x5CsdosZEUgqdbeu5eBG8WhX801WCCZ9xsUYQAuE1MMDEiQhh4vJHs3D5DqjnhfFTAt9Pit9NSLCABwvjXfDagCjy%2B%2B5D0iKw4GoWvT9p23aRBvoTZ8goqs6%2FklRuZSDFHEnFtcSWeHOKu9bNa&X-Amz-Signature=fcda29a012fc2db97722b4e28b6284a53cfeba1597e5afb1b60412b1b6fbbf03&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBQ6BAI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKRHf7mWXYjNfn7inCFBW7E6UffGt8jMcBq8kMhF9EHAiA7ST5L3uZDiMbmfJ%2BznO%2BfWjwetMCTlNabd1dzTaDvbyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9k%2Bt%2B9hDkt8xvH8MKtwDvrKU8VFLddVu6zInU2AuViduWU9%2BtBtNGniWK3hFX4iK4k%2FODPyxoGutuVQXWWMmtFemHEBkjBIYSjQvJvBNWevMfbyYFuizqe2lU4%2BEGBEMfkITafrKBHWYml8Le4eYaT9NyAB30Ra663QBJu6KbmFW5ghFAnWobv48fw63%2F0sJ2Vq03VeeRp7rihbCsVagNiw786ezrRsAhty9RBmmVdPSc8%2BQ%2F9g6FbV47trG%2BA8NrWYSHeyOw1VHoxRbs4GRxAJw7MWhQ%2B5XHUCl%2BOe8BxlmWoY7XoF01ZaIlKVnIg5vO%2FrX905H1aOzmvljrJYFVPqYGTZi3Jt%2BvBo%2FMvAFadgpJv7xMHzz%2F1dhHKx7CB4lPJwuL4wwisGoH6DXvtMiBkrnGrozd3wHSUDpM1VhyKFMTaSHcr4iuzzOuCYKNf1POT%2FSOnnkk6e4CvFIoAIVfRvxoxFhKqhkFSIEdReLKRTTQahTPZ%2BnG20jFp%2FF5cgmzio2QXxDBtCUXwwvS1JWfuBZK5I8jSzf0jdIf1w5cvNHrgBiWkoaMpm0hrh4zIN%2F8Y5DQVw1WbGrktb%2FxYuVOieMUd6bl21exNzhHpgWlF3fCsKCRDaSWZtxR%2BzuARGIJAr038TZlPBznp8w7srcvQY6pgGcWIkkKW0mkmO6IFbY8YzeVe%2BaZE%2F3ANGa0qEaQS69WjnlY7RdNmGyZWoQh94ApcOqeFI%2F4ABIQ4x5CsdosZEUgqdbeu5eBG8WhX801WCCZ9xsUYQAuE1MMDEiQhh4vJHs3D5DqjnhfFTAt9Pit9NSLCABwvjXfDagCjy%2B%2B5D0iKw4GoWvT9p23aRBvoTZ8goqs6%2FklRuZSDFHEnFtcSWeHOKu9bNa&X-Amz-Signature=f108ea38f1acb7bd3bf81aac86e84bc5d18584d26ee09b48bd8d0a54447e4753&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBQ6BAI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKRHf7mWXYjNfn7inCFBW7E6UffGt8jMcBq8kMhF9EHAiA7ST5L3uZDiMbmfJ%2BznO%2BfWjwetMCTlNabd1dzTaDvbyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9k%2Bt%2B9hDkt8xvH8MKtwDvrKU8VFLddVu6zInU2AuViduWU9%2BtBtNGniWK3hFX4iK4k%2FODPyxoGutuVQXWWMmtFemHEBkjBIYSjQvJvBNWevMfbyYFuizqe2lU4%2BEGBEMfkITafrKBHWYml8Le4eYaT9NyAB30Ra663QBJu6KbmFW5ghFAnWobv48fw63%2F0sJ2Vq03VeeRp7rihbCsVagNiw786ezrRsAhty9RBmmVdPSc8%2BQ%2F9g6FbV47trG%2BA8NrWYSHeyOw1VHoxRbs4GRxAJw7MWhQ%2B5XHUCl%2BOe8BxlmWoY7XoF01ZaIlKVnIg5vO%2FrX905H1aOzmvljrJYFVPqYGTZi3Jt%2BvBo%2FMvAFadgpJv7xMHzz%2F1dhHKx7CB4lPJwuL4wwisGoH6DXvtMiBkrnGrozd3wHSUDpM1VhyKFMTaSHcr4iuzzOuCYKNf1POT%2FSOnnkk6e4CvFIoAIVfRvxoxFhKqhkFSIEdReLKRTTQahTPZ%2BnG20jFp%2FF5cgmzio2QXxDBtCUXwwvS1JWfuBZK5I8jSzf0jdIf1w5cvNHrgBiWkoaMpm0hrh4zIN%2F8Y5DQVw1WbGrktb%2FxYuVOieMUd6bl21exNzhHpgWlF3fCsKCRDaSWZtxR%2BzuARGIJAr038TZlPBznp8w7srcvQY6pgGcWIkkKW0mkmO6IFbY8YzeVe%2BaZE%2F3ANGa0qEaQS69WjnlY7RdNmGyZWoQh94ApcOqeFI%2F4ABIQ4x5CsdosZEUgqdbeu5eBG8WhX801WCCZ9xsUYQAuE1MMDEiQhh4vJHs3D5DqjnhfFTAt9Pit9NSLCABwvjXfDagCjy%2B%2B5D0iKw4GoWvT9p23aRBvoTZ8goqs6%2FklRuZSDFHEnFtcSWeHOKu9bNa&X-Amz-Signature=7766f336305bd196bf074bf01294d75301a369d9055245c958d12e1ffe76ff45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBQ6BAI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKRHf7mWXYjNfn7inCFBW7E6UffGt8jMcBq8kMhF9EHAiA7ST5L3uZDiMbmfJ%2BznO%2BfWjwetMCTlNabd1dzTaDvbyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9k%2Bt%2B9hDkt8xvH8MKtwDvrKU8VFLddVu6zInU2AuViduWU9%2BtBtNGniWK3hFX4iK4k%2FODPyxoGutuVQXWWMmtFemHEBkjBIYSjQvJvBNWevMfbyYFuizqe2lU4%2BEGBEMfkITafrKBHWYml8Le4eYaT9NyAB30Ra663QBJu6KbmFW5ghFAnWobv48fw63%2F0sJ2Vq03VeeRp7rihbCsVagNiw786ezrRsAhty9RBmmVdPSc8%2BQ%2F9g6FbV47trG%2BA8NrWYSHeyOw1VHoxRbs4GRxAJw7MWhQ%2B5XHUCl%2BOe8BxlmWoY7XoF01ZaIlKVnIg5vO%2FrX905H1aOzmvljrJYFVPqYGTZi3Jt%2BvBo%2FMvAFadgpJv7xMHzz%2F1dhHKx7CB4lPJwuL4wwisGoH6DXvtMiBkrnGrozd3wHSUDpM1VhyKFMTaSHcr4iuzzOuCYKNf1POT%2FSOnnkk6e4CvFIoAIVfRvxoxFhKqhkFSIEdReLKRTTQahTPZ%2BnG20jFp%2FF5cgmzio2QXxDBtCUXwwvS1JWfuBZK5I8jSzf0jdIf1w5cvNHrgBiWkoaMpm0hrh4zIN%2F8Y5DQVw1WbGrktb%2FxYuVOieMUd6bl21exNzhHpgWlF3fCsKCRDaSWZtxR%2BzuARGIJAr038TZlPBznp8w7srcvQY6pgGcWIkkKW0mkmO6IFbY8YzeVe%2BaZE%2F3ANGa0qEaQS69WjnlY7RdNmGyZWoQh94ApcOqeFI%2F4ABIQ4x5CsdosZEUgqdbeu5eBG8WhX801WCCZ9xsUYQAuE1MMDEiQhh4vJHs3D5DqjnhfFTAt9Pit9NSLCABwvjXfDagCjy%2B%2B5D0iKw4GoWvT9p23aRBvoTZ8goqs6%2FklRuZSDFHEnFtcSWeHOKu9bNa&X-Amz-Signature=a2b2b711397ef40430e1676586a495b7f570d5a70fd8d2f9fac4ae8e6a3bc073&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBQ6BAI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKRHf7mWXYjNfn7inCFBW7E6UffGt8jMcBq8kMhF9EHAiA7ST5L3uZDiMbmfJ%2BznO%2BfWjwetMCTlNabd1dzTaDvbyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9k%2Bt%2B9hDkt8xvH8MKtwDvrKU8VFLddVu6zInU2AuViduWU9%2BtBtNGniWK3hFX4iK4k%2FODPyxoGutuVQXWWMmtFemHEBkjBIYSjQvJvBNWevMfbyYFuizqe2lU4%2BEGBEMfkITafrKBHWYml8Le4eYaT9NyAB30Ra663QBJu6KbmFW5ghFAnWobv48fw63%2F0sJ2Vq03VeeRp7rihbCsVagNiw786ezrRsAhty9RBmmVdPSc8%2BQ%2F9g6FbV47trG%2BA8NrWYSHeyOw1VHoxRbs4GRxAJw7MWhQ%2B5XHUCl%2BOe8BxlmWoY7XoF01ZaIlKVnIg5vO%2FrX905H1aOzmvljrJYFVPqYGTZi3Jt%2BvBo%2FMvAFadgpJv7xMHzz%2F1dhHKx7CB4lPJwuL4wwisGoH6DXvtMiBkrnGrozd3wHSUDpM1VhyKFMTaSHcr4iuzzOuCYKNf1POT%2FSOnnkk6e4CvFIoAIVfRvxoxFhKqhkFSIEdReLKRTTQahTPZ%2BnG20jFp%2FF5cgmzio2QXxDBtCUXwwvS1JWfuBZK5I8jSzf0jdIf1w5cvNHrgBiWkoaMpm0hrh4zIN%2F8Y5DQVw1WbGrktb%2FxYuVOieMUd6bl21exNzhHpgWlF3fCsKCRDaSWZtxR%2BzuARGIJAr038TZlPBznp8w7srcvQY6pgGcWIkkKW0mkmO6IFbY8YzeVe%2BaZE%2F3ANGa0qEaQS69WjnlY7RdNmGyZWoQh94ApcOqeFI%2F4ABIQ4x5CsdosZEUgqdbeu5eBG8WhX801WCCZ9xsUYQAuE1MMDEiQhh4vJHs3D5DqjnhfFTAt9Pit9NSLCABwvjXfDagCjy%2B%2B5D0iKw4GoWvT9p23aRBvoTZ8goqs6%2FklRuZSDFHEnFtcSWeHOKu9bNa&X-Amz-Signature=0bb96590e1bf32d14ae5f325be537dc33d17bc8f00a2170374ba69f9fa19d7db&X-Amz-SignedHeaders=host&x-id=GetObject)
