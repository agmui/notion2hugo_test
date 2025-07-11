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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSLLNAC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2F1bhe%2BKCh9fcydAY%2BTNvC8mzBBioC2utngZow%2FM8lgIgVV%2FqfIveLZdg1vhBtBH4l9qixQ31Q8T4aCHEFybkl1QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMgz2toPyr4PeMNhSrcAyNOQ1R8c5JAZlNcDPubQzDFGZdCO5Q%2F82vs9FJ4Cf5fiWXEUdfdzGHvfhrbufWlhEF7EoMnosjq443KY1DljED4tiveYN0hEsKY2yes2usGjlj6sFQPuRnjX1gsWp8vyO2TW3lNFEfzy0H5kgxnMLSl4oo3QYQCTK9iBnjxaZWnwMNi7uF30X0kpwG%2B%2FGtNnoUBVvRnwxxrtmdGxP3GmgSbMETpnsI8P59fIZYSkUopiHV0zk06SZg281Rx9Blu3%2FK%2B1J60EUIWoLdnGee3gbArKCuHlO64A9ep4hCcA%2BBosMiwmTodm%2BIHJ5gA4w42uZIwuPT9aOQy5eXq%2Bz64TjIpJNhkIjspsctOVD1HiZ6%2BKd2vECKTpI6CYhdl9HhLebsEGX7avnKN9rSaTQ9fsrbEl28N3uCkrXjVLheS9hWfP1GE7JhwUEvyiXYHUW402dNwRASUWOAczEBxpdowW9GiZWy5RSmOdO%2FX2g4nyjwYaHOJQzMtmRjYQemiIEvURdjJLbcwjSxfXIZtAPgfkak0D0RFfKLFiP8jEbW5476PgRogC57xN6eNQhhApxwddpsijWxeLEk5Z68cyRZzb93nmIT3oWJqG%2BD%2FjTxXFGVFdRjXf1VZV0IiMqfQML3%2FxMMGOqUBOkhJEeLuzpXUvcRU68blICMGPPbJhv4BfjEwE%2FrR7asdSaJBmnqde1KGs975BCHb3ce9BEm07eMYcigRRNAcLL6pVPBqMoKIdb46ALl3rRO%2F2pPdWWyW5HJuT51BKvKxxhDuUKue2%2Bttg5eC0GT5fpryWCADDjMsJdyntlU2EcsXB%2FzdgAX9y0CPHc3tn700E7I20FZa%2BjaKWA1j4o3lNd4G%2BgPg&X-Amz-Signature=e42cd3af0bce19959cdec495f031efd56229ea4a30640a4360691a21a80c6f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSLLNAC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2F1bhe%2BKCh9fcydAY%2BTNvC8mzBBioC2utngZow%2FM8lgIgVV%2FqfIveLZdg1vhBtBH4l9qixQ31Q8T4aCHEFybkl1QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMgz2toPyr4PeMNhSrcAyNOQ1R8c5JAZlNcDPubQzDFGZdCO5Q%2F82vs9FJ4Cf5fiWXEUdfdzGHvfhrbufWlhEF7EoMnosjq443KY1DljED4tiveYN0hEsKY2yes2usGjlj6sFQPuRnjX1gsWp8vyO2TW3lNFEfzy0H5kgxnMLSl4oo3QYQCTK9iBnjxaZWnwMNi7uF30X0kpwG%2B%2FGtNnoUBVvRnwxxrtmdGxP3GmgSbMETpnsI8P59fIZYSkUopiHV0zk06SZg281Rx9Blu3%2FK%2B1J60EUIWoLdnGee3gbArKCuHlO64A9ep4hCcA%2BBosMiwmTodm%2BIHJ5gA4w42uZIwuPT9aOQy5eXq%2Bz64TjIpJNhkIjspsctOVD1HiZ6%2BKd2vECKTpI6CYhdl9HhLebsEGX7avnKN9rSaTQ9fsrbEl28N3uCkrXjVLheS9hWfP1GE7JhwUEvyiXYHUW402dNwRASUWOAczEBxpdowW9GiZWy5RSmOdO%2FX2g4nyjwYaHOJQzMtmRjYQemiIEvURdjJLbcwjSxfXIZtAPgfkak0D0RFfKLFiP8jEbW5476PgRogC57xN6eNQhhApxwddpsijWxeLEk5Z68cyRZzb93nmIT3oWJqG%2BD%2FjTxXFGVFdRjXf1VZV0IiMqfQML3%2FxMMGOqUBOkhJEeLuzpXUvcRU68blICMGPPbJhv4BfjEwE%2FrR7asdSaJBmnqde1KGs975BCHb3ce9BEm07eMYcigRRNAcLL6pVPBqMoKIdb46ALl3rRO%2F2pPdWWyW5HJuT51BKvKxxhDuUKue2%2Bttg5eC0GT5fpryWCADDjMsJdyntlU2EcsXB%2FzdgAX9y0CPHc3tn700E7I20FZa%2BjaKWA1j4o3lNd4G%2BgPg&X-Amz-Signature=e2349bc7d191e3dbf8576687b70b6bdeab11739d8d0f9f17837f86538bad0388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSLLNAC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2F1bhe%2BKCh9fcydAY%2BTNvC8mzBBioC2utngZow%2FM8lgIgVV%2FqfIveLZdg1vhBtBH4l9qixQ31Q8T4aCHEFybkl1QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMgz2toPyr4PeMNhSrcAyNOQ1R8c5JAZlNcDPubQzDFGZdCO5Q%2F82vs9FJ4Cf5fiWXEUdfdzGHvfhrbufWlhEF7EoMnosjq443KY1DljED4tiveYN0hEsKY2yes2usGjlj6sFQPuRnjX1gsWp8vyO2TW3lNFEfzy0H5kgxnMLSl4oo3QYQCTK9iBnjxaZWnwMNi7uF30X0kpwG%2B%2FGtNnoUBVvRnwxxrtmdGxP3GmgSbMETpnsI8P59fIZYSkUopiHV0zk06SZg281Rx9Blu3%2FK%2B1J60EUIWoLdnGee3gbArKCuHlO64A9ep4hCcA%2BBosMiwmTodm%2BIHJ5gA4w42uZIwuPT9aOQy5eXq%2Bz64TjIpJNhkIjspsctOVD1HiZ6%2BKd2vECKTpI6CYhdl9HhLebsEGX7avnKN9rSaTQ9fsrbEl28N3uCkrXjVLheS9hWfP1GE7JhwUEvyiXYHUW402dNwRASUWOAczEBxpdowW9GiZWy5RSmOdO%2FX2g4nyjwYaHOJQzMtmRjYQemiIEvURdjJLbcwjSxfXIZtAPgfkak0D0RFfKLFiP8jEbW5476PgRogC57xN6eNQhhApxwddpsijWxeLEk5Z68cyRZzb93nmIT3oWJqG%2BD%2FjTxXFGVFdRjXf1VZV0IiMqfQML3%2FxMMGOqUBOkhJEeLuzpXUvcRU68blICMGPPbJhv4BfjEwE%2FrR7asdSaJBmnqde1KGs975BCHb3ce9BEm07eMYcigRRNAcLL6pVPBqMoKIdb46ALl3rRO%2F2pPdWWyW5HJuT51BKvKxxhDuUKue2%2Bttg5eC0GT5fpryWCADDjMsJdyntlU2EcsXB%2FzdgAX9y0CPHc3tn700E7I20FZa%2BjaKWA1j4o3lNd4G%2BgPg&X-Amz-Signature=ef48fef209e531db2aa248112e3914c38db3ccedd3436e1f99169fd19418b833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSLLNAC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2F1bhe%2BKCh9fcydAY%2BTNvC8mzBBioC2utngZow%2FM8lgIgVV%2FqfIveLZdg1vhBtBH4l9qixQ31Q8T4aCHEFybkl1QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMgz2toPyr4PeMNhSrcAyNOQ1R8c5JAZlNcDPubQzDFGZdCO5Q%2F82vs9FJ4Cf5fiWXEUdfdzGHvfhrbufWlhEF7EoMnosjq443KY1DljED4tiveYN0hEsKY2yes2usGjlj6sFQPuRnjX1gsWp8vyO2TW3lNFEfzy0H5kgxnMLSl4oo3QYQCTK9iBnjxaZWnwMNi7uF30X0kpwG%2B%2FGtNnoUBVvRnwxxrtmdGxP3GmgSbMETpnsI8P59fIZYSkUopiHV0zk06SZg281Rx9Blu3%2FK%2B1J60EUIWoLdnGee3gbArKCuHlO64A9ep4hCcA%2BBosMiwmTodm%2BIHJ5gA4w42uZIwuPT9aOQy5eXq%2Bz64TjIpJNhkIjspsctOVD1HiZ6%2BKd2vECKTpI6CYhdl9HhLebsEGX7avnKN9rSaTQ9fsrbEl28N3uCkrXjVLheS9hWfP1GE7JhwUEvyiXYHUW402dNwRASUWOAczEBxpdowW9GiZWy5RSmOdO%2FX2g4nyjwYaHOJQzMtmRjYQemiIEvURdjJLbcwjSxfXIZtAPgfkak0D0RFfKLFiP8jEbW5476PgRogC57xN6eNQhhApxwddpsijWxeLEk5Z68cyRZzb93nmIT3oWJqG%2BD%2FjTxXFGVFdRjXf1VZV0IiMqfQML3%2FxMMGOqUBOkhJEeLuzpXUvcRU68blICMGPPbJhv4BfjEwE%2FrR7asdSaJBmnqde1KGs975BCHb3ce9BEm07eMYcigRRNAcLL6pVPBqMoKIdb46ALl3rRO%2F2pPdWWyW5HJuT51BKvKxxhDuUKue2%2Bttg5eC0GT5fpryWCADDjMsJdyntlU2EcsXB%2FzdgAX9y0CPHc3tn700E7I20FZa%2BjaKWA1j4o3lNd4G%2BgPg&X-Amz-Signature=5d2a002546d72ce557313a5854fed0e7486a9ccbc9aa4df2c965dead5f60c3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSLLNAC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2F1bhe%2BKCh9fcydAY%2BTNvC8mzBBioC2utngZow%2FM8lgIgVV%2FqfIveLZdg1vhBtBH4l9qixQ31Q8T4aCHEFybkl1QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMgz2toPyr4PeMNhSrcAyNOQ1R8c5JAZlNcDPubQzDFGZdCO5Q%2F82vs9FJ4Cf5fiWXEUdfdzGHvfhrbufWlhEF7EoMnosjq443KY1DljED4tiveYN0hEsKY2yes2usGjlj6sFQPuRnjX1gsWp8vyO2TW3lNFEfzy0H5kgxnMLSl4oo3QYQCTK9iBnjxaZWnwMNi7uF30X0kpwG%2B%2FGtNnoUBVvRnwxxrtmdGxP3GmgSbMETpnsI8P59fIZYSkUopiHV0zk06SZg281Rx9Blu3%2FK%2B1J60EUIWoLdnGee3gbArKCuHlO64A9ep4hCcA%2BBosMiwmTodm%2BIHJ5gA4w42uZIwuPT9aOQy5eXq%2Bz64TjIpJNhkIjspsctOVD1HiZ6%2BKd2vECKTpI6CYhdl9HhLebsEGX7avnKN9rSaTQ9fsrbEl28N3uCkrXjVLheS9hWfP1GE7JhwUEvyiXYHUW402dNwRASUWOAczEBxpdowW9GiZWy5RSmOdO%2FX2g4nyjwYaHOJQzMtmRjYQemiIEvURdjJLbcwjSxfXIZtAPgfkak0D0RFfKLFiP8jEbW5476PgRogC57xN6eNQhhApxwddpsijWxeLEk5Z68cyRZzb93nmIT3oWJqG%2BD%2FjTxXFGVFdRjXf1VZV0IiMqfQML3%2FxMMGOqUBOkhJEeLuzpXUvcRU68blICMGPPbJhv4BfjEwE%2FrR7asdSaJBmnqde1KGs975BCHb3ce9BEm07eMYcigRRNAcLL6pVPBqMoKIdb46ALl3rRO%2F2pPdWWyW5HJuT51BKvKxxhDuUKue2%2Bttg5eC0GT5fpryWCADDjMsJdyntlU2EcsXB%2FzdgAX9y0CPHc3tn700E7I20FZa%2BjaKWA1j4o3lNd4G%2BgPg&X-Amz-Signature=a637b275653436f6476989138104b84378469d196d908d307777e336f9fb22ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSLLNAC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2F1bhe%2BKCh9fcydAY%2BTNvC8mzBBioC2utngZow%2FM8lgIgVV%2FqfIveLZdg1vhBtBH4l9qixQ31Q8T4aCHEFybkl1QqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMgz2toPyr4PeMNhSrcAyNOQ1R8c5JAZlNcDPubQzDFGZdCO5Q%2F82vs9FJ4Cf5fiWXEUdfdzGHvfhrbufWlhEF7EoMnosjq443KY1DljED4tiveYN0hEsKY2yes2usGjlj6sFQPuRnjX1gsWp8vyO2TW3lNFEfzy0H5kgxnMLSl4oo3QYQCTK9iBnjxaZWnwMNi7uF30X0kpwG%2B%2FGtNnoUBVvRnwxxrtmdGxP3GmgSbMETpnsI8P59fIZYSkUopiHV0zk06SZg281Rx9Blu3%2FK%2B1J60EUIWoLdnGee3gbArKCuHlO64A9ep4hCcA%2BBosMiwmTodm%2BIHJ5gA4w42uZIwuPT9aOQy5eXq%2Bz64TjIpJNhkIjspsctOVD1HiZ6%2BKd2vECKTpI6CYhdl9HhLebsEGX7avnKN9rSaTQ9fsrbEl28N3uCkrXjVLheS9hWfP1GE7JhwUEvyiXYHUW402dNwRASUWOAczEBxpdowW9GiZWy5RSmOdO%2FX2g4nyjwYaHOJQzMtmRjYQemiIEvURdjJLbcwjSxfXIZtAPgfkak0D0RFfKLFiP8jEbW5476PgRogC57xN6eNQhhApxwddpsijWxeLEk5Z68cyRZzb93nmIT3oWJqG%2BD%2FjTxXFGVFdRjXf1VZV0IiMqfQML3%2FxMMGOqUBOkhJEeLuzpXUvcRU68blICMGPPbJhv4BfjEwE%2FrR7asdSaJBmnqde1KGs975BCHb3ce9BEm07eMYcigRRNAcLL6pVPBqMoKIdb46ALl3rRO%2F2pPdWWyW5HJuT51BKvKxxhDuUKue2%2Bttg5eC0GT5fpryWCADDjMsJdyntlU2EcsXB%2FzdgAX9y0CPHc3tn700E7I20FZa%2BjaKWA1j4o3lNd4G%2BgPg&X-Amz-Signature=5e5db313a8d1be4238edf13de564abe963ee6c09e789d906a79993fc014dc1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
