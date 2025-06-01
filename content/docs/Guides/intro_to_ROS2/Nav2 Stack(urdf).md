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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKWCC7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH7AqBC3Zbor4AvWZwDGLJ%2FGab399F6VaHURLDkOC%2B7ZAiEAuLfmSn3TZxEcopAJZpx%2Fpl4FyZJTkhz0GBfvAOAhbYsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbPDJAX2%2FJBSo%2B1%2BSrcA823Fnk1n%2F8Q%2FJa0VV7eCI0XBnUR8cj5TKngXSnVXDPYh1ljDjzAugSBSgTsbG6ZOWSfOxJtfS0vFZgh5vE7PHFNV5A5hs%2BBLMWa9ccSeziCsIByOMY1%2BSBVPFn5tTkM2QBp9alkgDnr%2Fkp8GCFuXouK8HtwNozWVpVr8pmEKm7MVBJn6y9XbLo%2BxDzXOwcmdWkTx79kNWL97mDeLQiec0ca1nA0fsvVS%2FMw%2FXvSg5HpBF%2By%2FQjyqEYauVggm7Oflh%2FNnePUTAFfrHm7boW%2Bpha9y9m%2BmScnZ4kBl%2BtMPfxXwIvvv6TRSEZXKT%2FBWnGHACV%2FD9CnE5AH5iqRP%2BF2cI%2B%2FIUPpEp5A0EUf16fFojLGJguhBPc2yXiBBunp6udRXIMFPDHVyJBkJhMm4Pr6mJ1qi5P81R2Hh9BIWMx6DgO9DXSlY0THVj3RmZ0X7HR3PfEH8fSFAw0TQBXcvfDCaOytYdhfWZLUtpjWJEvnNa4EMfQSBFDHGcUbYJQlGjzQ70xhIdQzJEA0E%2B%2F3wH%2FoaUWQzMpMAtr616lFkOW%2FfuFQue9MFEzIq1%2Bx%2FNQFbhBAQZ9%2BkhSsbxQvzKybZSVBHRgoar4pboE7ZUg2EwL%2BW9AZrXg5PM7reiqxSdIOMJnG78EGOqUBbsb09qnGR326cfLyVthVriwmjLwNDFUgAmXp5U4PSW6on1DaqTZIWaq2FteO4QybQJkOGjyuvdsdBSD29a5YRshUoEzhpSw12ItiEBC01LXJK%2BtJzPF27Fg9tuKzgSi2jrj4dlQNnkZ87osgQqN3GDsv%2FOcT3hj9QYhq%2Fv9LHynwEpzMgJNLC5u87mLnFUQLEGm7YcRhx8j6vPAzfoh3w00Ychw6&X-Amz-Signature=90ca77d239b0f63ef4c024079b2e222faebc6645aaf625b9614393c547c95983&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKWCC7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH7AqBC3Zbor4AvWZwDGLJ%2FGab399F6VaHURLDkOC%2B7ZAiEAuLfmSn3TZxEcopAJZpx%2Fpl4FyZJTkhz0GBfvAOAhbYsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbPDJAX2%2FJBSo%2B1%2BSrcA823Fnk1n%2F8Q%2FJa0VV7eCI0XBnUR8cj5TKngXSnVXDPYh1ljDjzAugSBSgTsbG6ZOWSfOxJtfS0vFZgh5vE7PHFNV5A5hs%2BBLMWa9ccSeziCsIByOMY1%2BSBVPFn5tTkM2QBp9alkgDnr%2Fkp8GCFuXouK8HtwNozWVpVr8pmEKm7MVBJn6y9XbLo%2BxDzXOwcmdWkTx79kNWL97mDeLQiec0ca1nA0fsvVS%2FMw%2FXvSg5HpBF%2By%2FQjyqEYauVggm7Oflh%2FNnePUTAFfrHm7boW%2Bpha9y9m%2BmScnZ4kBl%2BtMPfxXwIvvv6TRSEZXKT%2FBWnGHACV%2FD9CnE5AH5iqRP%2BF2cI%2B%2FIUPpEp5A0EUf16fFojLGJguhBPc2yXiBBunp6udRXIMFPDHVyJBkJhMm4Pr6mJ1qi5P81R2Hh9BIWMx6DgO9DXSlY0THVj3RmZ0X7HR3PfEH8fSFAw0TQBXcvfDCaOytYdhfWZLUtpjWJEvnNa4EMfQSBFDHGcUbYJQlGjzQ70xhIdQzJEA0E%2B%2F3wH%2FoaUWQzMpMAtr616lFkOW%2FfuFQue9MFEzIq1%2Bx%2FNQFbhBAQZ9%2BkhSsbxQvzKybZSVBHRgoar4pboE7ZUg2EwL%2BW9AZrXg5PM7reiqxSdIOMJnG78EGOqUBbsb09qnGR326cfLyVthVriwmjLwNDFUgAmXp5U4PSW6on1DaqTZIWaq2FteO4QybQJkOGjyuvdsdBSD29a5YRshUoEzhpSw12ItiEBC01LXJK%2BtJzPF27Fg9tuKzgSi2jrj4dlQNnkZ87osgQqN3GDsv%2FOcT3hj9QYhq%2Fv9LHynwEpzMgJNLC5u87mLnFUQLEGm7YcRhx8j6vPAzfoh3w00Ychw6&X-Amz-Signature=a6c9f8a14f3bc1796a1335f317780518c516675e0c24602a879d84bf414b9a58&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKWCC7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH7AqBC3Zbor4AvWZwDGLJ%2FGab399F6VaHURLDkOC%2B7ZAiEAuLfmSn3TZxEcopAJZpx%2Fpl4FyZJTkhz0GBfvAOAhbYsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbPDJAX2%2FJBSo%2B1%2BSrcA823Fnk1n%2F8Q%2FJa0VV7eCI0XBnUR8cj5TKngXSnVXDPYh1ljDjzAugSBSgTsbG6ZOWSfOxJtfS0vFZgh5vE7PHFNV5A5hs%2BBLMWa9ccSeziCsIByOMY1%2BSBVPFn5tTkM2QBp9alkgDnr%2Fkp8GCFuXouK8HtwNozWVpVr8pmEKm7MVBJn6y9XbLo%2BxDzXOwcmdWkTx79kNWL97mDeLQiec0ca1nA0fsvVS%2FMw%2FXvSg5HpBF%2By%2FQjyqEYauVggm7Oflh%2FNnePUTAFfrHm7boW%2Bpha9y9m%2BmScnZ4kBl%2BtMPfxXwIvvv6TRSEZXKT%2FBWnGHACV%2FD9CnE5AH5iqRP%2BF2cI%2B%2FIUPpEp5A0EUf16fFojLGJguhBPc2yXiBBunp6udRXIMFPDHVyJBkJhMm4Pr6mJ1qi5P81R2Hh9BIWMx6DgO9DXSlY0THVj3RmZ0X7HR3PfEH8fSFAw0TQBXcvfDCaOytYdhfWZLUtpjWJEvnNa4EMfQSBFDHGcUbYJQlGjzQ70xhIdQzJEA0E%2B%2F3wH%2FoaUWQzMpMAtr616lFkOW%2FfuFQue9MFEzIq1%2Bx%2FNQFbhBAQZ9%2BkhSsbxQvzKybZSVBHRgoar4pboE7ZUg2EwL%2BW9AZrXg5PM7reiqxSdIOMJnG78EGOqUBbsb09qnGR326cfLyVthVriwmjLwNDFUgAmXp5U4PSW6on1DaqTZIWaq2FteO4QybQJkOGjyuvdsdBSD29a5YRshUoEzhpSw12ItiEBC01LXJK%2BtJzPF27Fg9tuKzgSi2jrj4dlQNnkZ87osgQqN3GDsv%2FOcT3hj9QYhq%2Fv9LHynwEpzMgJNLC5u87mLnFUQLEGm7YcRhx8j6vPAzfoh3w00Ychw6&X-Amz-Signature=cabb06f6d577cac1560eec18b7e4cd780f479b98cf083aa006c18392a0ff3267&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKWCC7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH7AqBC3Zbor4AvWZwDGLJ%2FGab399F6VaHURLDkOC%2B7ZAiEAuLfmSn3TZxEcopAJZpx%2Fpl4FyZJTkhz0GBfvAOAhbYsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbPDJAX2%2FJBSo%2B1%2BSrcA823Fnk1n%2F8Q%2FJa0VV7eCI0XBnUR8cj5TKngXSnVXDPYh1ljDjzAugSBSgTsbG6ZOWSfOxJtfS0vFZgh5vE7PHFNV5A5hs%2BBLMWa9ccSeziCsIByOMY1%2BSBVPFn5tTkM2QBp9alkgDnr%2Fkp8GCFuXouK8HtwNozWVpVr8pmEKm7MVBJn6y9XbLo%2BxDzXOwcmdWkTx79kNWL97mDeLQiec0ca1nA0fsvVS%2FMw%2FXvSg5HpBF%2By%2FQjyqEYauVggm7Oflh%2FNnePUTAFfrHm7boW%2Bpha9y9m%2BmScnZ4kBl%2BtMPfxXwIvvv6TRSEZXKT%2FBWnGHACV%2FD9CnE5AH5iqRP%2BF2cI%2B%2FIUPpEp5A0EUf16fFojLGJguhBPc2yXiBBunp6udRXIMFPDHVyJBkJhMm4Pr6mJ1qi5P81R2Hh9BIWMx6DgO9DXSlY0THVj3RmZ0X7HR3PfEH8fSFAw0TQBXcvfDCaOytYdhfWZLUtpjWJEvnNa4EMfQSBFDHGcUbYJQlGjzQ70xhIdQzJEA0E%2B%2F3wH%2FoaUWQzMpMAtr616lFkOW%2FfuFQue9MFEzIq1%2Bx%2FNQFbhBAQZ9%2BkhSsbxQvzKybZSVBHRgoar4pboE7ZUg2EwL%2BW9AZrXg5PM7reiqxSdIOMJnG78EGOqUBbsb09qnGR326cfLyVthVriwmjLwNDFUgAmXp5U4PSW6on1DaqTZIWaq2FteO4QybQJkOGjyuvdsdBSD29a5YRshUoEzhpSw12ItiEBC01LXJK%2BtJzPF27Fg9tuKzgSi2jrj4dlQNnkZ87osgQqN3GDsv%2FOcT3hj9QYhq%2Fv9LHynwEpzMgJNLC5u87mLnFUQLEGm7YcRhx8j6vPAzfoh3w00Ychw6&X-Amz-Signature=558ef40d76cf8e133a854cf42e7071616202e7ebaa98a3f7e579748b4559141b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKWCC7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH7AqBC3Zbor4AvWZwDGLJ%2FGab399F6VaHURLDkOC%2B7ZAiEAuLfmSn3TZxEcopAJZpx%2Fpl4FyZJTkhz0GBfvAOAhbYsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbPDJAX2%2FJBSo%2B1%2BSrcA823Fnk1n%2F8Q%2FJa0VV7eCI0XBnUR8cj5TKngXSnVXDPYh1ljDjzAugSBSgTsbG6ZOWSfOxJtfS0vFZgh5vE7PHFNV5A5hs%2BBLMWa9ccSeziCsIByOMY1%2BSBVPFn5tTkM2QBp9alkgDnr%2Fkp8GCFuXouK8HtwNozWVpVr8pmEKm7MVBJn6y9XbLo%2BxDzXOwcmdWkTx79kNWL97mDeLQiec0ca1nA0fsvVS%2FMw%2FXvSg5HpBF%2By%2FQjyqEYauVggm7Oflh%2FNnePUTAFfrHm7boW%2Bpha9y9m%2BmScnZ4kBl%2BtMPfxXwIvvv6TRSEZXKT%2FBWnGHACV%2FD9CnE5AH5iqRP%2BF2cI%2B%2FIUPpEp5A0EUf16fFojLGJguhBPc2yXiBBunp6udRXIMFPDHVyJBkJhMm4Pr6mJ1qi5P81R2Hh9BIWMx6DgO9DXSlY0THVj3RmZ0X7HR3PfEH8fSFAw0TQBXcvfDCaOytYdhfWZLUtpjWJEvnNa4EMfQSBFDHGcUbYJQlGjzQ70xhIdQzJEA0E%2B%2F3wH%2FoaUWQzMpMAtr616lFkOW%2FfuFQue9MFEzIq1%2Bx%2FNQFbhBAQZ9%2BkhSsbxQvzKybZSVBHRgoar4pboE7ZUg2EwL%2BW9AZrXg5PM7reiqxSdIOMJnG78EGOqUBbsb09qnGR326cfLyVthVriwmjLwNDFUgAmXp5U4PSW6on1DaqTZIWaq2FteO4QybQJkOGjyuvdsdBSD29a5YRshUoEzhpSw12ItiEBC01LXJK%2BtJzPF27Fg9tuKzgSi2jrj4dlQNnkZ87osgQqN3GDsv%2FOcT3hj9QYhq%2Fv9LHynwEpzMgJNLC5u87mLnFUQLEGm7YcRhx8j6vPAzfoh3w00Ychw6&X-Amz-Signature=541ff058af1027e80a519eafbad6cea5d2486a17de7127a976cad1eea9eebdc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKWCC7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH7AqBC3Zbor4AvWZwDGLJ%2FGab399F6VaHURLDkOC%2B7ZAiEAuLfmSn3TZxEcopAJZpx%2Fpl4FyZJTkhz0GBfvAOAhbYsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbPDJAX2%2FJBSo%2B1%2BSrcA823Fnk1n%2F8Q%2FJa0VV7eCI0XBnUR8cj5TKngXSnVXDPYh1ljDjzAugSBSgTsbG6ZOWSfOxJtfS0vFZgh5vE7PHFNV5A5hs%2BBLMWa9ccSeziCsIByOMY1%2BSBVPFn5tTkM2QBp9alkgDnr%2Fkp8GCFuXouK8HtwNozWVpVr8pmEKm7MVBJn6y9XbLo%2BxDzXOwcmdWkTx79kNWL97mDeLQiec0ca1nA0fsvVS%2FMw%2FXvSg5HpBF%2By%2FQjyqEYauVggm7Oflh%2FNnePUTAFfrHm7boW%2Bpha9y9m%2BmScnZ4kBl%2BtMPfxXwIvvv6TRSEZXKT%2FBWnGHACV%2FD9CnE5AH5iqRP%2BF2cI%2B%2FIUPpEp5A0EUf16fFojLGJguhBPc2yXiBBunp6udRXIMFPDHVyJBkJhMm4Pr6mJ1qi5P81R2Hh9BIWMx6DgO9DXSlY0THVj3RmZ0X7HR3PfEH8fSFAw0TQBXcvfDCaOytYdhfWZLUtpjWJEvnNa4EMfQSBFDHGcUbYJQlGjzQ70xhIdQzJEA0E%2B%2F3wH%2FoaUWQzMpMAtr616lFkOW%2FfuFQue9MFEzIq1%2Bx%2FNQFbhBAQZ9%2BkhSsbxQvzKybZSVBHRgoar4pboE7ZUg2EwL%2BW9AZrXg5PM7reiqxSdIOMJnG78EGOqUBbsb09qnGR326cfLyVthVriwmjLwNDFUgAmXp5U4PSW6on1DaqTZIWaq2FteO4QybQJkOGjyuvdsdBSD29a5YRshUoEzhpSw12ItiEBC01LXJK%2BtJzPF27Fg9tuKzgSi2jrj4dlQNnkZ87osgQqN3GDsv%2FOcT3hj9QYhq%2Fv9LHynwEpzMgJNLC5u87mLnFUQLEGm7YcRhx8j6vPAzfoh3w00Ychw6&X-Amz-Signature=ac1ac29df3348b1011aa8e66e22d3c3698d3d335c0db6dc6020e61a6498ad008&X-Amz-SignedHeaders=host&x-id=GetObject)
