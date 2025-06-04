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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YN3RHV3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1QMBMRof54AxZTwoBmAIfmVUHVLsdM2jqReaaPPK20AiEA1pZ%2Fpup4NswAGR8N8hvX9%2B%2Fv0Q4MAcEXaxwT0p0qLP4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHh2ANy5pbeM1qgUaSrcA1ZC4V%2FM%2FYi3JD32%2F3hCGsjKU1Xvw2RPNpKhPDaHIR5lh6Lscz2JP5Y2jbILQyQZToi30cwgPzjlQijbl2zd6uRdLo%2BuZvfVRgzngpW1Wzx%2BtfkpxRJR%2BU9JUF97r9sWXqrAHtNJo6X%2BKY44Otp2WFcbqx1aat8zfrFd2CCThk%2FVwoOBsRGh9VPAg66ZJn68%2BEW4fCR37ac%2B1pC1Wi9Hx1MEvN52P5RpcBvUNeKm3QNK8OhOT0VN5KDuEicg2B61nY9r9YLTEAIZ1l2DwT5HnxdOPF0QVBfVVuCclBnFWiQfFUO%2B2Gax3erameK60A9LfGa2q0BXkQiC8bINXZ6Sxu372r7Pn7O2DQGWF9S6az0IaygdbxWGW3ayI6ZXpnpT%2FyQR09bKBDGdgspi%2FO6XUU3jToHQ1XdhZky3desp%2Be2PfOTYsZW9SY%2BgVg4rypphaJs25uQ9vwaiCLiVTSYH83N%2BvpPZUNKMGRSIneDvd7XezTKfy%2FX9mRKqq4DsLx4ITGYi4hpLF5mi16EA%2B0zy2C1PBbl0mUU%2BdU3sDOis5vGDV7dGDeQ4kdJGex4oshMOmHkKiFgUSAnxUca0XXvrOHXNO6d8eVC6QYUopqblETprZIwGVOCVNmVxMiPpMJDW%2F8EGOqUBgbTPGxdt3qg8sT9PCYCc%2BWtpePi5UX5bFmqntzPfJ0xgjI0yjeyRfjKNEdqA1H%2Fr4j7V6PImHUsscdRS6Fk%2BefuC1SrdOzcO2g5eSbnkrCEDZ%2FxfLmlcPt8moEKz%2BZtaSlmrK%2Fq%2FR9S9ROtGcA0VLeEN6wjsCNi23%2BpMy2mvgldcLT%2Fj%2Bskr%2Ful6U27CYQ3WL8uMbYWeeO2CBFBsNiozMXw6HIl0&X-Amz-Signature=a9416bd53e74409ad72772684b4f8e60f66508f0f2e789c490f37e4a9fb972f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YN3RHV3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1QMBMRof54AxZTwoBmAIfmVUHVLsdM2jqReaaPPK20AiEA1pZ%2Fpup4NswAGR8N8hvX9%2B%2Fv0Q4MAcEXaxwT0p0qLP4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHh2ANy5pbeM1qgUaSrcA1ZC4V%2FM%2FYi3JD32%2F3hCGsjKU1Xvw2RPNpKhPDaHIR5lh6Lscz2JP5Y2jbILQyQZToi30cwgPzjlQijbl2zd6uRdLo%2BuZvfVRgzngpW1Wzx%2BtfkpxRJR%2BU9JUF97r9sWXqrAHtNJo6X%2BKY44Otp2WFcbqx1aat8zfrFd2CCThk%2FVwoOBsRGh9VPAg66ZJn68%2BEW4fCR37ac%2B1pC1Wi9Hx1MEvN52P5RpcBvUNeKm3QNK8OhOT0VN5KDuEicg2B61nY9r9YLTEAIZ1l2DwT5HnxdOPF0QVBfVVuCclBnFWiQfFUO%2B2Gax3erameK60A9LfGa2q0BXkQiC8bINXZ6Sxu372r7Pn7O2DQGWF9S6az0IaygdbxWGW3ayI6ZXpnpT%2FyQR09bKBDGdgspi%2FO6XUU3jToHQ1XdhZky3desp%2Be2PfOTYsZW9SY%2BgVg4rypphaJs25uQ9vwaiCLiVTSYH83N%2BvpPZUNKMGRSIneDvd7XezTKfy%2FX9mRKqq4DsLx4ITGYi4hpLF5mi16EA%2B0zy2C1PBbl0mUU%2BdU3sDOis5vGDV7dGDeQ4kdJGex4oshMOmHkKiFgUSAnxUca0XXvrOHXNO6d8eVC6QYUopqblETprZIwGVOCVNmVxMiPpMJDW%2F8EGOqUBgbTPGxdt3qg8sT9PCYCc%2BWtpePi5UX5bFmqntzPfJ0xgjI0yjeyRfjKNEdqA1H%2Fr4j7V6PImHUsscdRS6Fk%2BefuC1SrdOzcO2g5eSbnkrCEDZ%2FxfLmlcPt8moEKz%2BZtaSlmrK%2Fq%2FR9S9ROtGcA0VLeEN6wjsCNi23%2BpMy2mvgldcLT%2Fj%2Bskr%2Ful6U27CYQ3WL8uMbYWeeO2CBFBsNiozMXw6HIl0&X-Amz-Signature=78d2097b0791cdcdebd1ee94896b7843ac21454d43d990042c9d3b454047a0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YN3RHV3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1QMBMRof54AxZTwoBmAIfmVUHVLsdM2jqReaaPPK20AiEA1pZ%2Fpup4NswAGR8N8hvX9%2B%2Fv0Q4MAcEXaxwT0p0qLP4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHh2ANy5pbeM1qgUaSrcA1ZC4V%2FM%2FYi3JD32%2F3hCGsjKU1Xvw2RPNpKhPDaHIR5lh6Lscz2JP5Y2jbILQyQZToi30cwgPzjlQijbl2zd6uRdLo%2BuZvfVRgzngpW1Wzx%2BtfkpxRJR%2BU9JUF97r9sWXqrAHtNJo6X%2BKY44Otp2WFcbqx1aat8zfrFd2CCThk%2FVwoOBsRGh9VPAg66ZJn68%2BEW4fCR37ac%2B1pC1Wi9Hx1MEvN52P5RpcBvUNeKm3QNK8OhOT0VN5KDuEicg2B61nY9r9YLTEAIZ1l2DwT5HnxdOPF0QVBfVVuCclBnFWiQfFUO%2B2Gax3erameK60A9LfGa2q0BXkQiC8bINXZ6Sxu372r7Pn7O2DQGWF9S6az0IaygdbxWGW3ayI6ZXpnpT%2FyQR09bKBDGdgspi%2FO6XUU3jToHQ1XdhZky3desp%2Be2PfOTYsZW9SY%2BgVg4rypphaJs25uQ9vwaiCLiVTSYH83N%2BvpPZUNKMGRSIneDvd7XezTKfy%2FX9mRKqq4DsLx4ITGYi4hpLF5mi16EA%2B0zy2C1PBbl0mUU%2BdU3sDOis5vGDV7dGDeQ4kdJGex4oshMOmHkKiFgUSAnxUca0XXvrOHXNO6d8eVC6QYUopqblETprZIwGVOCVNmVxMiPpMJDW%2F8EGOqUBgbTPGxdt3qg8sT9PCYCc%2BWtpePi5UX5bFmqntzPfJ0xgjI0yjeyRfjKNEdqA1H%2Fr4j7V6PImHUsscdRS6Fk%2BefuC1SrdOzcO2g5eSbnkrCEDZ%2FxfLmlcPt8moEKz%2BZtaSlmrK%2Fq%2FR9S9ROtGcA0VLeEN6wjsCNi23%2BpMy2mvgldcLT%2Fj%2Bskr%2Ful6U27CYQ3WL8uMbYWeeO2CBFBsNiozMXw6HIl0&X-Amz-Signature=49ca5174ea5609d06d9ef99ba1eccf1e666cd6f6e83906503428e39aa44b4ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YN3RHV3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1QMBMRof54AxZTwoBmAIfmVUHVLsdM2jqReaaPPK20AiEA1pZ%2Fpup4NswAGR8N8hvX9%2B%2Fv0Q4MAcEXaxwT0p0qLP4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHh2ANy5pbeM1qgUaSrcA1ZC4V%2FM%2FYi3JD32%2F3hCGsjKU1Xvw2RPNpKhPDaHIR5lh6Lscz2JP5Y2jbILQyQZToi30cwgPzjlQijbl2zd6uRdLo%2BuZvfVRgzngpW1Wzx%2BtfkpxRJR%2BU9JUF97r9sWXqrAHtNJo6X%2BKY44Otp2WFcbqx1aat8zfrFd2CCThk%2FVwoOBsRGh9VPAg66ZJn68%2BEW4fCR37ac%2B1pC1Wi9Hx1MEvN52P5RpcBvUNeKm3QNK8OhOT0VN5KDuEicg2B61nY9r9YLTEAIZ1l2DwT5HnxdOPF0QVBfVVuCclBnFWiQfFUO%2B2Gax3erameK60A9LfGa2q0BXkQiC8bINXZ6Sxu372r7Pn7O2DQGWF9S6az0IaygdbxWGW3ayI6ZXpnpT%2FyQR09bKBDGdgspi%2FO6XUU3jToHQ1XdhZky3desp%2Be2PfOTYsZW9SY%2BgVg4rypphaJs25uQ9vwaiCLiVTSYH83N%2BvpPZUNKMGRSIneDvd7XezTKfy%2FX9mRKqq4DsLx4ITGYi4hpLF5mi16EA%2B0zy2C1PBbl0mUU%2BdU3sDOis5vGDV7dGDeQ4kdJGex4oshMOmHkKiFgUSAnxUca0XXvrOHXNO6d8eVC6QYUopqblETprZIwGVOCVNmVxMiPpMJDW%2F8EGOqUBgbTPGxdt3qg8sT9PCYCc%2BWtpePi5UX5bFmqntzPfJ0xgjI0yjeyRfjKNEdqA1H%2Fr4j7V6PImHUsscdRS6Fk%2BefuC1SrdOzcO2g5eSbnkrCEDZ%2FxfLmlcPt8moEKz%2BZtaSlmrK%2Fq%2FR9S9ROtGcA0VLeEN6wjsCNi23%2BpMy2mvgldcLT%2Fj%2Bskr%2Ful6U27CYQ3WL8uMbYWeeO2CBFBsNiozMXw6HIl0&X-Amz-Signature=0697eadeab28d126af9871889dc643e4b8cf015b8b740422029fca6480183463&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YN3RHV3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1QMBMRof54AxZTwoBmAIfmVUHVLsdM2jqReaaPPK20AiEA1pZ%2Fpup4NswAGR8N8hvX9%2B%2Fv0Q4MAcEXaxwT0p0qLP4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHh2ANy5pbeM1qgUaSrcA1ZC4V%2FM%2FYi3JD32%2F3hCGsjKU1Xvw2RPNpKhPDaHIR5lh6Lscz2JP5Y2jbILQyQZToi30cwgPzjlQijbl2zd6uRdLo%2BuZvfVRgzngpW1Wzx%2BtfkpxRJR%2BU9JUF97r9sWXqrAHtNJo6X%2BKY44Otp2WFcbqx1aat8zfrFd2CCThk%2FVwoOBsRGh9VPAg66ZJn68%2BEW4fCR37ac%2B1pC1Wi9Hx1MEvN52P5RpcBvUNeKm3QNK8OhOT0VN5KDuEicg2B61nY9r9YLTEAIZ1l2DwT5HnxdOPF0QVBfVVuCclBnFWiQfFUO%2B2Gax3erameK60A9LfGa2q0BXkQiC8bINXZ6Sxu372r7Pn7O2DQGWF9S6az0IaygdbxWGW3ayI6ZXpnpT%2FyQR09bKBDGdgspi%2FO6XUU3jToHQ1XdhZky3desp%2Be2PfOTYsZW9SY%2BgVg4rypphaJs25uQ9vwaiCLiVTSYH83N%2BvpPZUNKMGRSIneDvd7XezTKfy%2FX9mRKqq4DsLx4ITGYi4hpLF5mi16EA%2B0zy2C1PBbl0mUU%2BdU3sDOis5vGDV7dGDeQ4kdJGex4oshMOmHkKiFgUSAnxUca0XXvrOHXNO6d8eVC6QYUopqblETprZIwGVOCVNmVxMiPpMJDW%2F8EGOqUBgbTPGxdt3qg8sT9PCYCc%2BWtpePi5UX5bFmqntzPfJ0xgjI0yjeyRfjKNEdqA1H%2Fr4j7V6PImHUsscdRS6Fk%2BefuC1SrdOzcO2g5eSbnkrCEDZ%2FxfLmlcPt8moEKz%2BZtaSlmrK%2Fq%2FR9S9ROtGcA0VLeEN6wjsCNi23%2BpMy2mvgldcLT%2Fj%2Bskr%2Ful6U27CYQ3WL8uMbYWeeO2CBFBsNiozMXw6HIl0&X-Amz-Signature=56d568ebbda7705179e509b23cc1f88e6e154030eae9f4ec83b5e8063d9b5c64&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YN3RHV3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF1QMBMRof54AxZTwoBmAIfmVUHVLsdM2jqReaaPPK20AiEA1pZ%2Fpup4NswAGR8N8hvX9%2B%2Fv0Q4MAcEXaxwT0p0qLP4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHh2ANy5pbeM1qgUaSrcA1ZC4V%2FM%2FYi3JD32%2F3hCGsjKU1Xvw2RPNpKhPDaHIR5lh6Lscz2JP5Y2jbILQyQZToi30cwgPzjlQijbl2zd6uRdLo%2BuZvfVRgzngpW1Wzx%2BtfkpxRJR%2BU9JUF97r9sWXqrAHtNJo6X%2BKY44Otp2WFcbqx1aat8zfrFd2CCThk%2FVwoOBsRGh9VPAg66ZJn68%2BEW4fCR37ac%2B1pC1Wi9Hx1MEvN52P5RpcBvUNeKm3QNK8OhOT0VN5KDuEicg2B61nY9r9YLTEAIZ1l2DwT5HnxdOPF0QVBfVVuCclBnFWiQfFUO%2B2Gax3erameK60A9LfGa2q0BXkQiC8bINXZ6Sxu372r7Pn7O2DQGWF9S6az0IaygdbxWGW3ayI6ZXpnpT%2FyQR09bKBDGdgspi%2FO6XUU3jToHQ1XdhZky3desp%2Be2PfOTYsZW9SY%2BgVg4rypphaJs25uQ9vwaiCLiVTSYH83N%2BvpPZUNKMGRSIneDvd7XezTKfy%2FX9mRKqq4DsLx4ITGYi4hpLF5mi16EA%2B0zy2C1PBbl0mUU%2BdU3sDOis5vGDV7dGDeQ4kdJGex4oshMOmHkKiFgUSAnxUca0XXvrOHXNO6d8eVC6QYUopqblETprZIwGVOCVNmVxMiPpMJDW%2F8EGOqUBgbTPGxdt3qg8sT9PCYCc%2BWtpePi5UX5bFmqntzPfJ0xgjI0yjeyRfjKNEdqA1H%2Fr4j7V6PImHUsscdRS6Fk%2BefuC1SrdOzcO2g5eSbnkrCEDZ%2FxfLmlcPt8moEKz%2BZtaSlmrK%2Fq%2FR9S9ROtGcA0VLeEN6wjsCNi23%2BpMy2mvgldcLT%2Fj%2Bskr%2Ful6U27CYQ3WL8uMbYWeeO2CBFBsNiozMXw6HIl0&X-Amz-Signature=3f4b6fb7f1e5fd0d7ee33c6f0e0b55025dfba3e05faa6cbf2a8808e072c116dd&X-Amz-SignedHeaders=host&x-id=GetObject)
