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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVFC3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDf2ljty7crGc%2BgvlHEZRh%2Ftj1ntmaGOtCJ5oMpdZbOcwIgBYpjt%2Bb1QdnET5USvav%2FImFe6DkEP9LiVHKux9uHNMMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTnY05fKu8iSuaO%2FircA8bzdLPZS6sgCSITGtGjQqmGSz9S5qSO1%2Bt8Hm%2FBLgLDh72QUd143QN3WB8cGEP07RbHhMPPwtus3InJeUptcLlRliCUUF1LewrjAp33O7y%2BktMKnVbJ209s70IM4TXnuIWnOPw4a4yxyDbn6zZmQdzEWmhnRh4wIV5H4ptQHD4wLqlarTpNIpOXT4m0i4a0mVm%2FfTgUYhHyVUjRjzC7mjHlPaNYCDu0YSoOpREWxJwA3vaKeUajtypbegCO38WTmAYIaOa6124DQkY%2FC4FakQbk%2BCmWLP78VOdIBDOith6hieYeQZhZNGk4udZdeW2In4HJVGdevgT1d0JwxH%2FxcuQbUg8OAQuZNu2ZD9RzWCNXio453AYTblsPyMEc1D06ejklF0mAVTE%2Fp15XOFuaHKv%2FiHmxx%2B5eUCHCT9xQBf6gZV%2FGU1Z78OYRLjFypUw1n%2FS2adpGlwFUhi716nXV0p0ECUtltCaEfrFk4Y2Uf%2FVjl4emsNdLcBuc3%2BtlaGybUJgXDExJ3mIwumf0uZVVWa4D%2B2Su9hzrNu8UXnBxFyf5lvlyCquWR06Uk87SqnIqJk3diRPVyZejfCAsTiBKBJszC3RlcWqZnwvwahV6bKwZm0miq3fqnp1aLxNZMMGG1b8GOqUBGojq9VLQ1EJrkDb04F1toncvb7Cr1q%2Fv5D0BzVcdemUwBilAYudl1BWzPNanYZXGvBsMG9s1%2BFWS3sVWZP5LyhxJq%2B21VMTBSZfEclOKTPNbmHZ0rUy6KCaGGMLmO2TAg8NJK84BuEA0W4xP2Z5Yf%2FVGzBKW5jEEAG%2FM3Uv%2Bedt4dBqSFi7p5fA1qVuefBzoQTfHHuShB8d8ZooWVDcQPg%2BnNX0T&X-Amz-Signature=ec2dd84da849f983a1e7723c11b7425c8d2e20540108185c5bf90c96d599c28b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVFC3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDf2ljty7crGc%2BgvlHEZRh%2Ftj1ntmaGOtCJ5oMpdZbOcwIgBYpjt%2Bb1QdnET5USvav%2FImFe6DkEP9LiVHKux9uHNMMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTnY05fKu8iSuaO%2FircA8bzdLPZS6sgCSITGtGjQqmGSz9S5qSO1%2Bt8Hm%2FBLgLDh72QUd143QN3WB8cGEP07RbHhMPPwtus3InJeUptcLlRliCUUF1LewrjAp33O7y%2BktMKnVbJ209s70IM4TXnuIWnOPw4a4yxyDbn6zZmQdzEWmhnRh4wIV5H4ptQHD4wLqlarTpNIpOXT4m0i4a0mVm%2FfTgUYhHyVUjRjzC7mjHlPaNYCDu0YSoOpREWxJwA3vaKeUajtypbegCO38WTmAYIaOa6124DQkY%2FC4FakQbk%2BCmWLP78VOdIBDOith6hieYeQZhZNGk4udZdeW2In4HJVGdevgT1d0JwxH%2FxcuQbUg8OAQuZNu2ZD9RzWCNXio453AYTblsPyMEc1D06ejklF0mAVTE%2Fp15XOFuaHKv%2FiHmxx%2B5eUCHCT9xQBf6gZV%2FGU1Z78OYRLjFypUw1n%2FS2adpGlwFUhi716nXV0p0ECUtltCaEfrFk4Y2Uf%2FVjl4emsNdLcBuc3%2BtlaGybUJgXDExJ3mIwumf0uZVVWa4D%2B2Su9hzrNu8UXnBxFyf5lvlyCquWR06Uk87SqnIqJk3diRPVyZejfCAsTiBKBJszC3RlcWqZnwvwahV6bKwZm0miq3fqnp1aLxNZMMGG1b8GOqUBGojq9VLQ1EJrkDb04F1toncvb7Cr1q%2Fv5D0BzVcdemUwBilAYudl1BWzPNanYZXGvBsMG9s1%2BFWS3sVWZP5LyhxJq%2B21VMTBSZfEclOKTPNbmHZ0rUy6KCaGGMLmO2TAg8NJK84BuEA0W4xP2Z5Yf%2FVGzBKW5jEEAG%2FM3Uv%2Bedt4dBqSFi7p5fA1qVuefBzoQTfHHuShB8d8ZooWVDcQPg%2BnNX0T&X-Amz-Signature=3a0d97f425fb824f44a77bda16b9f0e8f2c235d667d78bc2024de4bb2a960a25&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVFC3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDf2ljty7crGc%2BgvlHEZRh%2Ftj1ntmaGOtCJ5oMpdZbOcwIgBYpjt%2Bb1QdnET5USvav%2FImFe6DkEP9LiVHKux9uHNMMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTnY05fKu8iSuaO%2FircA8bzdLPZS6sgCSITGtGjQqmGSz9S5qSO1%2Bt8Hm%2FBLgLDh72QUd143QN3WB8cGEP07RbHhMPPwtus3InJeUptcLlRliCUUF1LewrjAp33O7y%2BktMKnVbJ209s70IM4TXnuIWnOPw4a4yxyDbn6zZmQdzEWmhnRh4wIV5H4ptQHD4wLqlarTpNIpOXT4m0i4a0mVm%2FfTgUYhHyVUjRjzC7mjHlPaNYCDu0YSoOpREWxJwA3vaKeUajtypbegCO38WTmAYIaOa6124DQkY%2FC4FakQbk%2BCmWLP78VOdIBDOith6hieYeQZhZNGk4udZdeW2In4HJVGdevgT1d0JwxH%2FxcuQbUg8OAQuZNu2ZD9RzWCNXio453AYTblsPyMEc1D06ejklF0mAVTE%2Fp15XOFuaHKv%2FiHmxx%2B5eUCHCT9xQBf6gZV%2FGU1Z78OYRLjFypUw1n%2FS2adpGlwFUhi716nXV0p0ECUtltCaEfrFk4Y2Uf%2FVjl4emsNdLcBuc3%2BtlaGybUJgXDExJ3mIwumf0uZVVWa4D%2B2Su9hzrNu8UXnBxFyf5lvlyCquWR06Uk87SqnIqJk3diRPVyZejfCAsTiBKBJszC3RlcWqZnwvwahV6bKwZm0miq3fqnp1aLxNZMMGG1b8GOqUBGojq9VLQ1EJrkDb04F1toncvb7Cr1q%2Fv5D0BzVcdemUwBilAYudl1BWzPNanYZXGvBsMG9s1%2BFWS3sVWZP5LyhxJq%2B21VMTBSZfEclOKTPNbmHZ0rUy6KCaGGMLmO2TAg8NJK84BuEA0W4xP2Z5Yf%2FVGzBKW5jEEAG%2FM3Uv%2Bedt4dBqSFi7p5fA1qVuefBzoQTfHHuShB8d8ZooWVDcQPg%2BnNX0T&X-Amz-Signature=bf851dc3522724b052d0e5f070fc59e846a35416d7d4b0824c92957a295a8820&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVFC3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDf2ljty7crGc%2BgvlHEZRh%2Ftj1ntmaGOtCJ5oMpdZbOcwIgBYpjt%2Bb1QdnET5USvav%2FImFe6DkEP9LiVHKux9uHNMMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTnY05fKu8iSuaO%2FircA8bzdLPZS6sgCSITGtGjQqmGSz9S5qSO1%2Bt8Hm%2FBLgLDh72QUd143QN3WB8cGEP07RbHhMPPwtus3InJeUptcLlRliCUUF1LewrjAp33O7y%2BktMKnVbJ209s70IM4TXnuIWnOPw4a4yxyDbn6zZmQdzEWmhnRh4wIV5H4ptQHD4wLqlarTpNIpOXT4m0i4a0mVm%2FfTgUYhHyVUjRjzC7mjHlPaNYCDu0YSoOpREWxJwA3vaKeUajtypbegCO38WTmAYIaOa6124DQkY%2FC4FakQbk%2BCmWLP78VOdIBDOith6hieYeQZhZNGk4udZdeW2In4HJVGdevgT1d0JwxH%2FxcuQbUg8OAQuZNu2ZD9RzWCNXio453AYTblsPyMEc1D06ejklF0mAVTE%2Fp15XOFuaHKv%2FiHmxx%2B5eUCHCT9xQBf6gZV%2FGU1Z78OYRLjFypUw1n%2FS2adpGlwFUhi716nXV0p0ECUtltCaEfrFk4Y2Uf%2FVjl4emsNdLcBuc3%2BtlaGybUJgXDExJ3mIwumf0uZVVWa4D%2B2Su9hzrNu8UXnBxFyf5lvlyCquWR06Uk87SqnIqJk3diRPVyZejfCAsTiBKBJszC3RlcWqZnwvwahV6bKwZm0miq3fqnp1aLxNZMMGG1b8GOqUBGojq9VLQ1EJrkDb04F1toncvb7Cr1q%2Fv5D0BzVcdemUwBilAYudl1BWzPNanYZXGvBsMG9s1%2BFWS3sVWZP5LyhxJq%2B21VMTBSZfEclOKTPNbmHZ0rUy6KCaGGMLmO2TAg8NJK84BuEA0W4xP2Z5Yf%2FVGzBKW5jEEAG%2FM3Uv%2Bedt4dBqSFi7p5fA1qVuefBzoQTfHHuShB8d8ZooWVDcQPg%2BnNX0T&X-Amz-Signature=856430c6364d5b3d1922721044f9b8a21aae3e7f5190efb7a5f3cb290f8ff2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVFC3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDf2ljty7crGc%2BgvlHEZRh%2Ftj1ntmaGOtCJ5oMpdZbOcwIgBYpjt%2Bb1QdnET5USvav%2FImFe6DkEP9LiVHKux9uHNMMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTnY05fKu8iSuaO%2FircA8bzdLPZS6sgCSITGtGjQqmGSz9S5qSO1%2Bt8Hm%2FBLgLDh72QUd143QN3WB8cGEP07RbHhMPPwtus3InJeUptcLlRliCUUF1LewrjAp33O7y%2BktMKnVbJ209s70IM4TXnuIWnOPw4a4yxyDbn6zZmQdzEWmhnRh4wIV5H4ptQHD4wLqlarTpNIpOXT4m0i4a0mVm%2FfTgUYhHyVUjRjzC7mjHlPaNYCDu0YSoOpREWxJwA3vaKeUajtypbegCO38WTmAYIaOa6124DQkY%2FC4FakQbk%2BCmWLP78VOdIBDOith6hieYeQZhZNGk4udZdeW2In4HJVGdevgT1d0JwxH%2FxcuQbUg8OAQuZNu2ZD9RzWCNXio453AYTblsPyMEc1D06ejklF0mAVTE%2Fp15XOFuaHKv%2FiHmxx%2B5eUCHCT9xQBf6gZV%2FGU1Z78OYRLjFypUw1n%2FS2adpGlwFUhi716nXV0p0ECUtltCaEfrFk4Y2Uf%2FVjl4emsNdLcBuc3%2BtlaGybUJgXDExJ3mIwumf0uZVVWa4D%2B2Su9hzrNu8UXnBxFyf5lvlyCquWR06Uk87SqnIqJk3diRPVyZejfCAsTiBKBJszC3RlcWqZnwvwahV6bKwZm0miq3fqnp1aLxNZMMGG1b8GOqUBGojq9VLQ1EJrkDb04F1toncvb7Cr1q%2Fv5D0BzVcdemUwBilAYudl1BWzPNanYZXGvBsMG9s1%2BFWS3sVWZP5LyhxJq%2B21VMTBSZfEclOKTPNbmHZ0rUy6KCaGGMLmO2TAg8NJK84BuEA0W4xP2Z5Yf%2FVGzBKW5jEEAG%2FM3Uv%2Bedt4dBqSFi7p5fA1qVuefBzoQTfHHuShB8d8ZooWVDcQPg%2BnNX0T&X-Amz-Signature=dbb435d1ba8e8afbb90a429d113fa72d3d19dd106b0f062e709236877cd2e861&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYVFC3X%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDf2ljty7crGc%2BgvlHEZRh%2Ftj1ntmaGOtCJ5oMpdZbOcwIgBYpjt%2Bb1QdnET5USvav%2FImFe6DkEP9LiVHKux9uHNMMq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTnY05fKu8iSuaO%2FircA8bzdLPZS6sgCSITGtGjQqmGSz9S5qSO1%2Bt8Hm%2FBLgLDh72QUd143QN3WB8cGEP07RbHhMPPwtus3InJeUptcLlRliCUUF1LewrjAp33O7y%2BktMKnVbJ209s70IM4TXnuIWnOPw4a4yxyDbn6zZmQdzEWmhnRh4wIV5H4ptQHD4wLqlarTpNIpOXT4m0i4a0mVm%2FfTgUYhHyVUjRjzC7mjHlPaNYCDu0YSoOpREWxJwA3vaKeUajtypbegCO38WTmAYIaOa6124DQkY%2FC4FakQbk%2BCmWLP78VOdIBDOith6hieYeQZhZNGk4udZdeW2In4HJVGdevgT1d0JwxH%2FxcuQbUg8OAQuZNu2ZD9RzWCNXio453AYTblsPyMEc1D06ejklF0mAVTE%2Fp15XOFuaHKv%2FiHmxx%2B5eUCHCT9xQBf6gZV%2FGU1Z78OYRLjFypUw1n%2FS2adpGlwFUhi716nXV0p0ECUtltCaEfrFk4Y2Uf%2FVjl4emsNdLcBuc3%2BtlaGybUJgXDExJ3mIwumf0uZVVWa4D%2B2Su9hzrNu8UXnBxFyf5lvlyCquWR06Uk87SqnIqJk3diRPVyZejfCAsTiBKBJszC3RlcWqZnwvwahV6bKwZm0miq3fqnp1aLxNZMMGG1b8GOqUBGojq9VLQ1EJrkDb04F1toncvb7Cr1q%2Fv5D0BzVcdemUwBilAYudl1BWzPNanYZXGvBsMG9s1%2BFWS3sVWZP5LyhxJq%2B21VMTBSZfEclOKTPNbmHZ0rUy6KCaGGMLmO2TAg8NJK84BuEA0W4xP2Z5Yf%2FVGzBKW5jEEAG%2FM3Uv%2Bedt4dBqSFi7p5fA1qVuefBzoQTfHHuShB8d8ZooWVDcQPg%2BnNX0T&X-Amz-Signature=f45a9f92e0cee9f57a3dd8986e402d43d30525c7c0c3132dce0050030e35bc35&X-Amz-SignedHeaders=host&x-id=GetObject)
