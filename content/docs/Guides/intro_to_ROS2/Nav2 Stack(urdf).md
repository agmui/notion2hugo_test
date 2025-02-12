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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M723IS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAHlis52WyVZIJhUVY8bT%2BeDo3heQ9lo7ZgaCiRNzPygIhAMAe7DjD4cIDjLPMkPZnkkpCuzylnIx%2BGBnoup76ytrZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCv3fCFR0fIFpNToEq3AM6LH2%2F9CSvg0tYykmsI1e6IxcqfE981eKH1SpkX2eLcPtfPQtWHo0AnBExz4VNh8QPzssJrJxDSqceuF8cmjBpInLPBK%2B3hUzQnB%2Bl6qAehqOjrDTfnfD1Jb0Oa4s62S8aYle%2FKsNyUnfhvhOVVH665RLsGafQiEWk81GqsnAsvR8Tbm8%2F9%2BymFef3ddkABAcs1hmBJZEUnFEyuq5Bgqw7J9DKHdNgMEX4qRTyMCobStpFD9g1L2uGiIQeracFyZLAqUa4%2Fr%2BLTAbQ%2FGQmCIsSvTu1ZuFLfBWoRXfRyz9e7xFALxrj4DfT6WORFiCmx%2BoSO8YfCoZKQWx9ZwmsRdNzghNo3gTye8rFEBOVTMqy2F7ph9gcl6ks3%2FgsRkqDFr2H3jk%2FRXQhozKYAyXDAPyq4GzcCyR%2FGfgRXcscBLoA43rOPWo5KT7JEwok5Ndo5ATjYyb6dstVmy7IU%2B6Clk5bYLPrNNc%2BbfFvL6%2BBN6CB48RSX1KID7Drddma6Rg%2BaeN67mqgyG%2FMoaAI1HHTfrPca7ZHynMwCYG%2Bt%2Fc15c%2FJolHU24Q%2FHcI%2FD98F%2BT9N%2Bz7tvzkPJUQT4XZ9JxJEhmdtof%2Bs2Vkdq51ms70pabt2EW6NLJ5cE1uDUPrTqDDyyrO9BjqkATvb8B1TRg2yY9OvOR49rQkdtpPMZ%2Fh5TygCYhqCVKZEc31fAXe6rH0bmGW9W2fNhiQLSPDlP5%2B4taJybP0zk4sPzy8J2TmKitIS0Gh%2BChWbzYjzzG5c4q634QSj8Yy%2BOLTrE6CSBPFP1%2BGeu%2FnygAnd3eFboQH5oi%2FQ8BUAVT6PdhyXwlR3MZ3ZIGKyGIymForvO9CPXYMLQ4sK6mGWwBK1getY&X-Amz-Signature=c135056f49d4298b944c5c656bcc08db89a0752b9f6ca4a39cc8712bbd984bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M723IS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAHlis52WyVZIJhUVY8bT%2BeDo3heQ9lo7ZgaCiRNzPygIhAMAe7DjD4cIDjLPMkPZnkkpCuzylnIx%2BGBnoup76ytrZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCv3fCFR0fIFpNToEq3AM6LH2%2F9CSvg0tYykmsI1e6IxcqfE981eKH1SpkX2eLcPtfPQtWHo0AnBExz4VNh8QPzssJrJxDSqceuF8cmjBpInLPBK%2B3hUzQnB%2Bl6qAehqOjrDTfnfD1Jb0Oa4s62S8aYle%2FKsNyUnfhvhOVVH665RLsGafQiEWk81GqsnAsvR8Tbm8%2F9%2BymFef3ddkABAcs1hmBJZEUnFEyuq5Bgqw7J9DKHdNgMEX4qRTyMCobStpFD9g1L2uGiIQeracFyZLAqUa4%2Fr%2BLTAbQ%2FGQmCIsSvTu1ZuFLfBWoRXfRyz9e7xFALxrj4DfT6WORFiCmx%2BoSO8YfCoZKQWx9ZwmsRdNzghNo3gTye8rFEBOVTMqy2F7ph9gcl6ks3%2FgsRkqDFr2H3jk%2FRXQhozKYAyXDAPyq4GzcCyR%2FGfgRXcscBLoA43rOPWo5KT7JEwok5Ndo5ATjYyb6dstVmy7IU%2B6Clk5bYLPrNNc%2BbfFvL6%2BBN6CB48RSX1KID7Drddma6Rg%2BaeN67mqgyG%2FMoaAI1HHTfrPca7ZHynMwCYG%2Bt%2Fc15c%2FJolHU24Q%2FHcI%2FD98F%2BT9N%2Bz7tvzkPJUQT4XZ9JxJEhmdtof%2Bs2Vkdq51ms70pabt2EW6NLJ5cE1uDUPrTqDDyyrO9BjqkATvb8B1TRg2yY9OvOR49rQkdtpPMZ%2Fh5TygCYhqCVKZEc31fAXe6rH0bmGW9W2fNhiQLSPDlP5%2B4taJybP0zk4sPzy8J2TmKitIS0Gh%2BChWbzYjzzG5c4q634QSj8Yy%2BOLTrE6CSBPFP1%2BGeu%2FnygAnd3eFboQH5oi%2FQ8BUAVT6PdhyXwlR3MZ3ZIGKyGIymForvO9CPXYMLQ4sK6mGWwBK1getY&X-Amz-Signature=f37ffe9bbf85d5fbe5db6323ec666d1ba67acea11ec6a2b9263906358d581679&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M723IS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAHlis52WyVZIJhUVY8bT%2BeDo3heQ9lo7ZgaCiRNzPygIhAMAe7DjD4cIDjLPMkPZnkkpCuzylnIx%2BGBnoup76ytrZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCv3fCFR0fIFpNToEq3AM6LH2%2F9CSvg0tYykmsI1e6IxcqfE981eKH1SpkX2eLcPtfPQtWHo0AnBExz4VNh8QPzssJrJxDSqceuF8cmjBpInLPBK%2B3hUzQnB%2Bl6qAehqOjrDTfnfD1Jb0Oa4s62S8aYle%2FKsNyUnfhvhOVVH665RLsGafQiEWk81GqsnAsvR8Tbm8%2F9%2BymFef3ddkABAcs1hmBJZEUnFEyuq5Bgqw7J9DKHdNgMEX4qRTyMCobStpFD9g1L2uGiIQeracFyZLAqUa4%2Fr%2BLTAbQ%2FGQmCIsSvTu1ZuFLfBWoRXfRyz9e7xFALxrj4DfT6WORFiCmx%2BoSO8YfCoZKQWx9ZwmsRdNzghNo3gTye8rFEBOVTMqy2F7ph9gcl6ks3%2FgsRkqDFr2H3jk%2FRXQhozKYAyXDAPyq4GzcCyR%2FGfgRXcscBLoA43rOPWo5KT7JEwok5Ndo5ATjYyb6dstVmy7IU%2B6Clk5bYLPrNNc%2BbfFvL6%2BBN6CB48RSX1KID7Drddma6Rg%2BaeN67mqgyG%2FMoaAI1HHTfrPca7ZHynMwCYG%2Bt%2Fc15c%2FJolHU24Q%2FHcI%2FD98F%2BT9N%2Bz7tvzkPJUQT4XZ9JxJEhmdtof%2Bs2Vkdq51ms70pabt2EW6NLJ5cE1uDUPrTqDDyyrO9BjqkATvb8B1TRg2yY9OvOR49rQkdtpPMZ%2Fh5TygCYhqCVKZEc31fAXe6rH0bmGW9W2fNhiQLSPDlP5%2B4taJybP0zk4sPzy8J2TmKitIS0Gh%2BChWbzYjzzG5c4q634QSj8Yy%2BOLTrE6CSBPFP1%2BGeu%2FnygAnd3eFboQH5oi%2FQ8BUAVT6PdhyXwlR3MZ3ZIGKyGIymForvO9CPXYMLQ4sK6mGWwBK1getY&X-Amz-Signature=5113862dfc7e0e4bb0106cccbb977041a8c7987091b2ed128dfe4af88732983c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M723IS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAHlis52WyVZIJhUVY8bT%2BeDo3heQ9lo7ZgaCiRNzPygIhAMAe7DjD4cIDjLPMkPZnkkpCuzylnIx%2BGBnoup76ytrZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCv3fCFR0fIFpNToEq3AM6LH2%2F9CSvg0tYykmsI1e6IxcqfE981eKH1SpkX2eLcPtfPQtWHo0AnBExz4VNh8QPzssJrJxDSqceuF8cmjBpInLPBK%2B3hUzQnB%2Bl6qAehqOjrDTfnfD1Jb0Oa4s62S8aYle%2FKsNyUnfhvhOVVH665RLsGafQiEWk81GqsnAsvR8Tbm8%2F9%2BymFef3ddkABAcs1hmBJZEUnFEyuq5Bgqw7J9DKHdNgMEX4qRTyMCobStpFD9g1L2uGiIQeracFyZLAqUa4%2Fr%2BLTAbQ%2FGQmCIsSvTu1ZuFLfBWoRXfRyz9e7xFALxrj4DfT6WORFiCmx%2BoSO8YfCoZKQWx9ZwmsRdNzghNo3gTye8rFEBOVTMqy2F7ph9gcl6ks3%2FgsRkqDFr2H3jk%2FRXQhozKYAyXDAPyq4GzcCyR%2FGfgRXcscBLoA43rOPWo5KT7JEwok5Ndo5ATjYyb6dstVmy7IU%2B6Clk5bYLPrNNc%2BbfFvL6%2BBN6CB48RSX1KID7Drddma6Rg%2BaeN67mqgyG%2FMoaAI1HHTfrPca7ZHynMwCYG%2Bt%2Fc15c%2FJolHU24Q%2FHcI%2FD98F%2BT9N%2Bz7tvzkPJUQT4XZ9JxJEhmdtof%2Bs2Vkdq51ms70pabt2EW6NLJ5cE1uDUPrTqDDyyrO9BjqkATvb8B1TRg2yY9OvOR49rQkdtpPMZ%2Fh5TygCYhqCVKZEc31fAXe6rH0bmGW9W2fNhiQLSPDlP5%2B4taJybP0zk4sPzy8J2TmKitIS0Gh%2BChWbzYjzzG5c4q634QSj8Yy%2BOLTrE6CSBPFP1%2BGeu%2FnygAnd3eFboQH5oi%2FQ8BUAVT6PdhyXwlR3MZ3ZIGKyGIymForvO9CPXYMLQ4sK6mGWwBK1getY&X-Amz-Signature=f04ebf65ee9dc8fe4ebb50964f91a042844f5a7dff9b51d3544d40a962df2658&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M723IS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAHlis52WyVZIJhUVY8bT%2BeDo3heQ9lo7ZgaCiRNzPygIhAMAe7DjD4cIDjLPMkPZnkkpCuzylnIx%2BGBnoup76ytrZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCv3fCFR0fIFpNToEq3AM6LH2%2F9CSvg0tYykmsI1e6IxcqfE981eKH1SpkX2eLcPtfPQtWHo0AnBExz4VNh8QPzssJrJxDSqceuF8cmjBpInLPBK%2B3hUzQnB%2Bl6qAehqOjrDTfnfD1Jb0Oa4s62S8aYle%2FKsNyUnfhvhOVVH665RLsGafQiEWk81GqsnAsvR8Tbm8%2F9%2BymFef3ddkABAcs1hmBJZEUnFEyuq5Bgqw7J9DKHdNgMEX4qRTyMCobStpFD9g1L2uGiIQeracFyZLAqUa4%2Fr%2BLTAbQ%2FGQmCIsSvTu1ZuFLfBWoRXfRyz9e7xFALxrj4DfT6WORFiCmx%2BoSO8YfCoZKQWx9ZwmsRdNzghNo3gTye8rFEBOVTMqy2F7ph9gcl6ks3%2FgsRkqDFr2H3jk%2FRXQhozKYAyXDAPyq4GzcCyR%2FGfgRXcscBLoA43rOPWo5KT7JEwok5Ndo5ATjYyb6dstVmy7IU%2B6Clk5bYLPrNNc%2BbfFvL6%2BBN6CB48RSX1KID7Drddma6Rg%2BaeN67mqgyG%2FMoaAI1HHTfrPca7ZHynMwCYG%2Bt%2Fc15c%2FJolHU24Q%2FHcI%2FD98F%2BT9N%2Bz7tvzkPJUQT4XZ9JxJEhmdtof%2Bs2Vkdq51ms70pabt2EW6NLJ5cE1uDUPrTqDDyyrO9BjqkATvb8B1TRg2yY9OvOR49rQkdtpPMZ%2Fh5TygCYhqCVKZEc31fAXe6rH0bmGW9W2fNhiQLSPDlP5%2B4taJybP0zk4sPzy8J2TmKitIS0Gh%2BChWbzYjzzG5c4q634QSj8Yy%2BOLTrE6CSBPFP1%2BGeu%2FnygAnd3eFboQH5oi%2FQ8BUAVT6PdhyXwlR3MZ3ZIGKyGIymForvO9CPXYMLQ4sK6mGWwBK1getY&X-Amz-Signature=12d6a773bdf1c5b0430ef8bc53f7d60964c26d80617b64ba6fa3e762c237029b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M723IS3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAHlis52WyVZIJhUVY8bT%2BeDo3heQ9lo7ZgaCiRNzPygIhAMAe7DjD4cIDjLPMkPZnkkpCuzylnIx%2BGBnoup76ytrZKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCv3fCFR0fIFpNToEq3AM6LH2%2F9CSvg0tYykmsI1e6IxcqfE981eKH1SpkX2eLcPtfPQtWHo0AnBExz4VNh8QPzssJrJxDSqceuF8cmjBpInLPBK%2B3hUzQnB%2Bl6qAehqOjrDTfnfD1Jb0Oa4s62S8aYle%2FKsNyUnfhvhOVVH665RLsGafQiEWk81GqsnAsvR8Tbm8%2F9%2BymFef3ddkABAcs1hmBJZEUnFEyuq5Bgqw7J9DKHdNgMEX4qRTyMCobStpFD9g1L2uGiIQeracFyZLAqUa4%2Fr%2BLTAbQ%2FGQmCIsSvTu1ZuFLfBWoRXfRyz9e7xFALxrj4DfT6WORFiCmx%2BoSO8YfCoZKQWx9ZwmsRdNzghNo3gTye8rFEBOVTMqy2F7ph9gcl6ks3%2FgsRkqDFr2H3jk%2FRXQhozKYAyXDAPyq4GzcCyR%2FGfgRXcscBLoA43rOPWo5KT7JEwok5Ndo5ATjYyb6dstVmy7IU%2B6Clk5bYLPrNNc%2BbfFvL6%2BBN6CB48RSX1KID7Drddma6Rg%2BaeN67mqgyG%2FMoaAI1HHTfrPca7ZHynMwCYG%2Bt%2Fc15c%2FJolHU24Q%2FHcI%2FD98F%2BT9N%2Bz7tvzkPJUQT4XZ9JxJEhmdtof%2Bs2Vkdq51ms70pabt2EW6NLJ5cE1uDUPrTqDDyyrO9BjqkATvb8B1TRg2yY9OvOR49rQkdtpPMZ%2Fh5TygCYhqCVKZEc31fAXe6rH0bmGW9W2fNhiQLSPDlP5%2B4taJybP0zk4sPzy8J2TmKitIS0Gh%2BChWbzYjzzG5c4q634QSj8Yy%2BOLTrE6CSBPFP1%2BGeu%2FnygAnd3eFboQH5oi%2FQ8BUAVT6PdhyXwlR3MZ3ZIGKyGIymForvO9CPXYMLQ4sK6mGWwBK1getY&X-Amz-Signature=dc6e9504bc6ab7e3cd19812df517e272668536683e2390bbaa72ee665fbc84da&X-Amz-SignedHeaders=host&x-id=GetObject)
