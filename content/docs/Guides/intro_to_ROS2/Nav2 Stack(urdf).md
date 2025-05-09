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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHVIIOW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgUow26buZbl3FzFWvfV6lphhQLLD6c8v832mpC7MZWAiBv9zU6UxwhePzsUlswRvcVwV6tmZh3Bcnf9THOD6bXDiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkeeJnMzjWhhTxGcKtwD%2FLzg9aUpl%2F4s871Eo0gZQbKgANPjF7Fx%2F8%2F5q5Wum6bQpIrzSV254P%2BjjQB9JiRxpIR%2BnHyMSp316LEdqExrVJ5jQLuzTSStV65bst24XH3k4Hnb8eF3WNWi9fw%2F%2BvrmWr%2FwI5VlvYmTKJ%2BUjzFMXsjeUt0jJPraBhh%2FKFGyNJUlJCtyPLKtPtQuTVqTA07bxk0CKvM%2F7luTc9jBsGP7HW76kRvwhEbWkoWxSCI%2B9ydamWV%2BWRGLKzuzuMKr%2BaOqb8thKNpTQJF5rjsTSNfY2Ul5bJHqxPqrmUYd2hF9Xvf%2FdrlXojk1LpeRydp2CmFkGvqdi%2Bl%2BQ5CGXnfnu4PTA6NlVdNn%2FqndDqRybkD5u3PomllvAT%2FywEp172zAa3nfEpODRcu7tRQq9udu77W7Da0Qx2rPD%2B5yC4FSQHDBYmfI9nkFtR8ACiqJUdRfTAVltOxzMafFIqZK%2FPazsHZUw8C6QHxPBVsOc%2F%2BWxNbqFWbObo50%2BAky%2FNedtfYPubn%2FOxGsbFUz0T%2FYGH1LKLO%2BVAqeHYQN%2FfpoeF5jpGJj7V10CaPfGG6e6LImMlfOtjMDH7pGx5lOluun0k%2FNE%2BP0E6nPCCkLKb0KneXa78TwcW0okgLUzEotkubu5uIwsPj2wAY6pgH072iHD1sXjAwYvUsFQC5MBASH54Ew9bR62uM%2F9TsJ1XE%2B7JIRLF%2Bv30N8jwK5Aayr8L6DB1JIBCp7BC8KCgSCcEtarMARefhT4DfyA%2F%2Fd4WueK3Tjx6wc6otuKyOLzLJsAD03kNoX9v3tz90u4KswcGZb9qVMnDLSbPXMNB02rNk2EgW%2BaYm99DTYBm%2FJTOLCPMxuEKikLijyecPn9spYk2XmX14R&X-Amz-Signature=4bdf4e2b960b7a80595433fcaba81de4a613aaf1f6af36259d2ba1d04f747175&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHVIIOW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgUow26buZbl3FzFWvfV6lphhQLLD6c8v832mpC7MZWAiBv9zU6UxwhePzsUlswRvcVwV6tmZh3Bcnf9THOD6bXDiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkeeJnMzjWhhTxGcKtwD%2FLzg9aUpl%2F4s871Eo0gZQbKgANPjF7Fx%2F8%2F5q5Wum6bQpIrzSV254P%2BjjQB9JiRxpIR%2BnHyMSp316LEdqExrVJ5jQLuzTSStV65bst24XH3k4Hnb8eF3WNWi9fw%2F%2BvrmWr%2FwI5VlvYmTKJ%2BUjzFMXsjeUt0jJPraBhh%2FKFGyNJUlJCtyPLKtPtQuTVqTA07bxk0CKvM%2F7luTc9jBsGP7HW76kRvwhEbWkoWxSCI%2B9ydamWV%2BWRGLKzuzuMKr%2BaOqb8thKNpTQJF5rjsTSNfY2Ul5bJHqxPqrmUYd2hF9Xvf%2FdrlXojk1LpeRydp2CmFkGvqdi%2Bl%2BQ5CGXnfnu4PTA6NlVdNn%2FqndDqRybkD5u3PomllvAT%2FywEp172zAa3nfEpODRcu7tRQq9udu77W7Da0Qx2rPD%2B5yC4FSQHDBYmfI9nkFtR8ACiqJUdRfTAVltOxzMafFIqZK%2FPazsHZUw8C6QHxPBVsOc%2F%2BWxNbqFWbObo50%2BAky%2FNedtfYPubn%2FOxGsbFUz0T%2FYGH1LKLO%2BVAqeHYQN%2FfpoeF5jpGJj7V10CaPfGG6e6LImMlfOtjMDH7pGx5lOluun0k%2FNE%2BP0E6nPCCkLKb0KneXa78TwcW0okgLUzEotkubu5uIwsPj2wAY6pgH072iHD1sXjAwYvUsFQC5MBASH54Ew9bR62uM%2F9TsJ1XE%2B7JIRLF%2Bv30N8jwK5Aayr8L6DB1JIBCp7BC8KCgSCcEtarMARefhT4DfyA%2F%2Fd4WueK3Tjx6wc6otuKyOLzLJsAD03kNoX9v3tz90u4KswcGZb9qVMnDLSbPXMNB02rNk2EgW%2BaYm99DTYBm%2FJTOLCPMxuEKikLijyecPn9spYk2XmX14R&X-Amz-Signature=dc35722ccf616d3d1aee848e169ace358b4b7a84f6598157a19ba57e9de86693&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHVIIOW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgUow26buZbl3FzFWvfV6lphhQLLD6c8v832mpC7MZWAiBv9zU6UxwhePzsUlswRvcVwV6tmZh3Bcnf9THOD6bXDiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkeeJnMzjWhhTxGcKtwD%2FLzg9aUpl%2F4s871Eo0gZQbKgANPjF7Fx%2F8%2F5q5Wum6bQpIrzSV254P%2BjjQB9JiRxpIR%2BnHyMSp316LEdqExrVJ5jQLuzTSStV65bst24XH3k4Hnb8eF3WNWi9fw%2F%2BvrmWr%2FwI5VlvYmTKJ%2BUjzFMXsjeUt0jJPraBhh%2FKFGyNJUlJCtyPLKtPtQuTVqTA07bxk0CKvM%2F7luTc9jBsGP7HW76kRvwhEbWkoWxSCI%2B9ydamWV%2BWRGLKzuzuMKr%2BaOqb8thKNpTQJF5rjsTSNfY2Ul5bJHqxPqrmUYd2hF9Xvf%2FdrlXojk1LpeRydp2CmFkGvqdi%2Bl%2BQ5CGXnfnu4PTA6NlVdNn%2FqndDqRybkD5u3PomllvAT%2FywEp172zAa3nfEpODRcu7tRQq9udu77W7Da0Qx2rPD%2B5yC4FSQHDBYmfI9nkFtR8ACiqJUdRfTAVltOxzMafFIqZK%2FPazsHZUw8C6QHxPBVsOc%2F%2BWxNbqFWbObo50%2BAky%2FNedtfYPubn%2FOxGsbFUz0T%2FYGH1LKLO%2BVAqeHYQN%2FfpoeF5jpGJj7V10CaPfGG6e6LImMlfOtjMDH7pGx5lOluun0k%2FNE%2BP0E6nPCCkLKb0KneXa78TwcW0okgLUzEotkubu5uIwsPj2wAY6pgH072iHD1sXjAwYvUsFQC5MBASH54Ew9bR62uM%2F9TsJ1XE%2B7JIRLF%2Bv30N8jwK5Aayr8L6DB1JIBCp7BC8KCgSCcEtarMARefhT4DfyA%2F%2Fd4WueK3Tjx6wc6otuKyOLzLJsAD03kNoX9v3tz90u4KswcGZb9qVMnDLSbPXMNB02rNk2EgW%2BaYm99DTYBm%2FJTOLCPMxuEKikLijyecPn9spYk2XmX14R&X-Amz-Signature=bccd410891ed5f71d87f8cba9819c29e46e5dfeeb33ce2c1729e966a7e83a0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHVIIOW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgUow26buZbl3FzFWvfV6lphhQLLD6c8v832mpC7MZWAiBv9zU6UxwhePzsUlswRvcVwV6tmZh3Bcnf9THOD6bXDiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkeeJnMzjWhhTxGcKtwD%2FLzg9aUpl%2F4s871Eo0gZQbKgANPjF7Fx%2F8%2F5q5Wum6bQpIrzSV254P%2BjjQB9JiRxpIR%2BnHyMSp316LEdqExrVJ5jQLuzTSStV65bst24XH3k4Hnb8eF3WNWi9fw%2F%2BvrmWr%2FwI5VlvYmTKJ%2BUjzFMXsjeUt0jJPraBhh%2FKFGyNJUlJCtyPLKtPtQuTVqTA07bxk0CKvM%2F7luTc9jBsGP7HW76kRvwhEbWkoWxSCI%2B9ydamWV%2BWRGLKzuzuMKr%2BaOqb8thKNpTQJF5rjsTSNfY2Ul5bJHqxPqrmUYd2hF9Xvf%2FdrlXojk1LpeRydp2CmFkGvqdi%2Bl%2BQ5CGXnfnu4PTA6NlVdNn%2FqndDqRybkD5u3PomllvAT%2FywEp172zAa3nfEpODRcu7tRQq9udu77W7Da0Qx2rPD%2B5yC4FSQHDBYmfI9nkFtR8ACiqJUdRfTAVltOxzMafFIqZK%2FPazsHZUw8C6QHxPBVsOc%2F%2BWxNbqFWbObo50%2BAky%2FNedtfYPubn%2FOxGsbFUz0T%2FYGH1LKLO%2BVAqeHYQN%2FfpoeF5jpGJj7V10CaPfGG6e6LImMlfOtjMDH7pGx5lOluun0k%2FNE%2BP0E6nPCCkLKb0KneXa78TwcW0okgLUzEotkubu5uIwsPj2wAY6pgH072iHD1sXjAwYvUsFQC5MBASH54Ew9bR62uM%2F9TsJ1XE%2B7JIRLF%2Bv30N8jwK5Aayr8L6DB1JIBCp7BC8KCgSCcEtarMARefhT4DfyA%2F%2Fd4WueK3Tjx6wc6otuKyOLzLJsAD03kNoX9v3tz90u4KswcGZb9qVMnDLSbPXMNB02rNk2EgW%2BaYm99DTYBm%2FJTOLCPMxuEKikLijyecPn9spYk2XmX14R&X-Amz-Signature=e28c2ee64dba9afd4f59e12249258791a6db59c2080a6c791e94fb2e3313c6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHVIIOW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgUow26buZbl3FzFWvfV6lphhQLLD6c8v832mpC7MZWAiBv9zU6UxwhePzsUlswRvcVwV6tmZh3Bcnf9THOD6bXDiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkeeJnMzjWhhTxGcKtwD%2FLzg9aUpl%2F4s871Eo0gZQbKgANPjF7Fx%2F8%2F5q5Wum6bQpIrzSV254P%2BjjQB9JiRxpIR%2BnHyMSp316LEdqExrVJ5jQLuzTSStV65bst24XH3k4Hnb8eF3WNWi9fw%2F%2BvrmWr%2FwI5VlvYmTKJ%2BUjzFMXsjeUt0jJPraBhh%2FKFGyNJUlJCtyPLKtPtQuTVqTA07bxk0CKvM%2F7luTc9jBsGP7HW76kRvwhEbWkoWxSCI%2B9ydamWV%2BWRGLKzuzuMKr%2BaOqb8thKNpTQJF5rjsTSNfY2Ul5bJHqxPqrmUYd2hF9Xvf%2FdrlXojk1LpeRydp2CmFkGvqdi%2Bl%2BQ5CGXnfnu4PTA6NlVdNn%2FqndDqRybkD5u3PomllvAT%2FywEp172zAa3nfEpODRcu7tRQq9udu77W7Da0Qx2rPD%2B5yC4FSQHDBYmfI9nkFtR8ACiqJUdRfTAVltOxzMafFIqZK%2FPazsHZUw8C6QHxPBVsOc%2F%2BWxNbqFWbObo50%2BAky%2FNedtfYPubn%2FOxGsbFUz0T%2FYGH1LKLO%2BVAqeHYQN%2FfpoeF5jpGJj7V10CaPfGG6e6LImMlfOtjMDH7pGx5lOluun0k%2FNE%2BP0E6nPCCkLKb0KneXa78TwcW0okgLUzEotkubu5uIwsPj2wAY6pgH072iHD1sXjAwYvUsFQC5MBASH54Ew9bR62uM%2F9TsJ1XE%2B7JIRLF%2Bv30N8jwK5Aayr8L6DB1JIBCp7BC8KCgSCcEtarMARefhT4DfyA%2F%2Fd4WueK3Tjx6wc6otuKyOLzLJsAD03kNoX9v3tz90u4KswcGZb9qVMnDLSbPXMNB02rNk2EgW%2BaYm99DTYBm%2FJTOLCPMxuEKikLijyecPn9spYk2XmX14R&X-Amz-Signature=6e04b76a1784c18091dd0cf00f01b38820e5dd4e9336a9f585216e62ab970665&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHVIIOW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgUow26buZbl3FzFWvfV6lphhQLLD6c8v832mpC7MZWAiBv9zU6UxwhePzsUlswRvcVwV6tmZh3Bcnf9THOD6bXDiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSkeeJnMzjWhhTxGcKtwD%2FLzg9aUpl%2F4s871Eo0gZQbKgANPjF7Fx%2F8%2F5q5Wum6bQpIrzSV254P%2BjjQB9JiRxpIR%2BnHyMSp316LEdqExrVJ5jQLuzTSStV65bst24XH3k4Hnb8eF3WNWi9fw%2F%2BvrmWr%2FwI5VlvYmTKJ%2BUjzFMXsjeUt0jJPraBhh%2FKFGyNJUlJCtyPLKtPtQuTVqTA07bxk0CKvM%2F7luTc9jBsGP7HW76kRvwhEbWkoWxSCI%2B9ydamWV%2BWRGLKzuzuMKr%2BaOqb8thKNpTQJF5rjsTSNfY2Ul5bJHqxPqrmUYd2hF9Xvf%2FdrlXojk1LpeRydp2CmFkGvqdi%2Bl%2BQ5CGXnfnu4PTA6NlVdNn%2FqndDqRybkD5u3PomllvAT%2FywEp172zAa3nfEpODRcu7tRQq9udu77W7Da0Qx2rPD%2B5yC4FSQHDBYmfI9nkFtR8ACiqJUdRfTAVltOxzMafFIqZK%2FPazsHZUw8C6QHxPBVsOc%2F%2BWxNbqFWbObo50%2BAky%2FNedtfYPubn%2FOxGsbFUz0T%2FYGH1LKLO%2BVAqeHYQN%2FfpoeF5jpGJj7V10CaPfGG6e6LImMlfOtjMDH7pGx5lOluun0k%2FNE%2BP0E6nPCCkLKb0KneXa78TwcW0okgLUzEotkubu5uIwsPj2wAY6pgH072iHD1sXjAwYvUsFQC5MBASH54Ew9bR62uM%2F9TsJ1XE%2B7JIRLF%2Bv30N8jwK5Aayr8L6DB1JIBCp7BC8KCgSCcEtarMARefhT4DfyA%2F%2Fd4WueK3Tjx6wc6otuKyOLzLJsAD03kNoX9v3tz90u4KswcGZb9qVMnDLSbPXMNB02rNk2EgW%2BaYm99DTYBm%2FJTOLCPMxuEKikLijyecPn9spYk2XmX14R&X-Amz-Signature=3060ebbe9f83ebc45796e08efc3ee978382de28fd6b0a20f4e636e7acb30b0af&X-Amz-SignedHeaders=host&x-id=GetObject)
