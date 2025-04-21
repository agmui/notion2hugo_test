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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKKF3VQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDKuz4ySdVIv9XzidIKrEbprqiPoco7m5O3FAsJGn%2BmQAIhAOSHY8%2B%2FGt4pX%2F5%2BDdt2XrHL5xXnsSsuDHpLMnEPrss%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykkQ%2FEU6GPWC6lnTAq3ANMLb%2F72ww5YlXNEZhYd4TCDDQtMmD0pg3Jr0i5jA3aJyppnUGi9Nkuf%2BeT1Pc%2BY3TwhO2q%2FmILQufWft5GycwuEG6cnMUDjvRo0DqQ%2Fl6%2Bk%2B2VizPynehlyMO%2FRYbII0O%2FMe5OVQGGs%2FI3WJ0WjDK4E88dK5YTKXl%2Fsvn6KTL0%2FZFbIiOyWC6alRUnpiDfxIIO9nmPWuLnmBKtE9ZSh26yEKxyk%2FBTeNyO2o9Fv6VniQKdFkbTnPGydcQYG7T7irnUtAsdebb8PR7TFmwS9L4vXOIDuFLIXotfSK%2Bq3sNnkpWxAIyywt6NCN0o3ny8JYdrZfNolQsAm2QyzKY3gLDINO9Xf6%2Fdnq0t190NCE3fkmMC2iMInB2NMN3ie5KThME00IHOztZ1PNAnMqMvrTWaoJWQ4d%2BahLp35l%2BzNNWdT55Yd9usIhk9n4XaQc96YaQw1TXiJenXXA2YxUSzb2TdtL9tdkyyxVLvCkTschLgl6sVBRPh%2Bkz2Yt73lExvnRcwmu%2ByXyQ4QAJ%2F3zzJtHBdBhRg1D%2FFGbV0jUX%2B6OowOtrNwDpPbD7e02WMlotmKyBedBn3Zr7Sy3rqnnwtmFeg4u59TFvXhmmijouPP1Wunh9S6FS1NQ0gVdtV1DCtvJjABjqkAdRBKytICgBRMM3zWL5y5m7M7hP7gOcKnfsjVR4ddW4xgkSXZ5nB%2BTf7%2F71PmmZrSPySBfv66%2Ft7Vmn59g0clTICDhoNbXxdY3AoUHZpN7O8%2FH%2F3iwGKzM%2BHOwAgHCtgCyjuWUuvmga98PmZK7huciYUQXoNZB2fcpUo4xeNXwdSg0k6Mx6WNi5MCj41jLNZoAx3fymSWtwyW8qyVRuyqhhDwk00&X-Amz-Signature=dfc3031d369b0068590dbb195637f18d96aac26914c8432ab5bb9b5c6b0d9095&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKKF3VQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDKuz4ySdVIv9XzidIKrEbprqiPoco7m5O3FAsJGn%2BmQAIhAOSHY8%2B%2FGt4pX%2F5%2BDdt2XrHL5xXnsSsuDHpLMnEPrss%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykkQ%2FEU6GPWC6lnTAq3ANMLb%2F72ww5YlXNEZhYd4TCDDQtMmD0pg3Jr0i5jA3aJyppnUGi9Nkuf%2BeT1Pc%2BY3TwhO2q%2FmILQufWft5GycwuEG6cnMUDjvRo0DqQ%2Fl6%2Bk%2B2VizPynehlyMO%2FRYbII0O%2FMe5OVQGGs%2FI3WJ0WjDK4E88dK5YTKXl%2Fsvn6KTL0%2FZFbIiOyWC6alRUnpiDfxIIO9nmPWuLnmBKtE9ZSh26yEKxyk%2FBTeNyO2o9Fv6VniQKdFkbTnPGydcQYG7T7irnUtAsdebb8PR7TFmwS9L4vXOIDuFLIXotfSK%2Bq3sNnkpWxAIyywt6NCN0o3ny8JYdrZfNolQsAm2QyzKY3gLDINO9Xf6%2Fdnq0t190NCE3fkmMC2iMInB2NMN3ie5KThME00IHOztZ1PNAnMqMvrTWaoJWQ4d%2BahLp35l%2BzNNWdT55Yd9usIhk9n4XaQc96YaQw1TXiJenXXA2YxUSzb2TdtL9tdkyyxVLvCkTschLgl6sVBRPh%2Bkz2Yt73lExvnRcwmu%2ByXyQ4QAJ%2F3zzJtHBdBhRg1D%2FFGbV0jUX%2B6OowOtrNwDpPbD7e02WMlotmKyBedBn3Zr7Sy3rqnnwtmFeg4u59TFvXhmmijouPP1Wunh9S6FS1NQ0gVdtV1DCtvJjABjqkAdRBKytICgBRMM3zWL5y5m7M7hP7gOcKnfsjVR4ddW4xgkSXZ5nB%2BTf7%2F71PmmZrSPySBfv66%2Ft7Vmn59g0clTICDhoNbXxdY3AoUHZpN7O8%2FH%2F3iwGKzM%2BHOwAgHCtgCyjuWUuvmga98PmZK7huciYUQXoNZB2fcpUo4xeNXwdSg0k6Mx6WNi5MCj41jLNZoAx3fymSWtwyW8qyVRuyqhhDwk00&X-Amz-Signature=dad706402b5c1fc02cc5ce18107bb386ff5931520fc9d6c4cb85a782a1d8f2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKKF3VQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDKuz4ySdVIv9XzidIKrEbprqiPoco7m5O3FAsJGn%2BmQAIhAOSHY8%2B%2FGt4pX%2F5%2BDdt2XrHL5xXnsSsuDHpLMnEPrss%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykkQ%2FEU6GPWC6lnTAq3ANMLb%2F72ww5YlXNEZhYd4TCDDQtMmD0pg3Jr0i5jA3aJyppnUGi9Nkuf%2BeT1Pc%2BY3TwhO2q%2FmILQufWft5GycwuEG6cnMUDjvRo0DqQ%2Fl6%2Bk%2B2VizPynehlyMO%2FRYbII0O%2FMe5OVQGGs%2FI3WJ0WjDK4E88dK5YTKXl%2Fsvn6KTL0%2FZFbIiOyWC6alRUnpiDfxIIO9nmPWuLnmBKtE9ZSh26yEKxyk%2FBTeNyO2o9Fv6VniQKdFkbTnPGydcQYG7T7irnUtAsdebb8PR7TFmwS9L4vXOIDuFLIXotfSK%2Bq3sNnkpWxAIyywt6NCN0o3ny8JYdrZfNolQsAm2QyzKY3gLDINO9Xf6%2Fdnq0t190NCE3fkmMC2iMInB2NMN3ie5KThME00IHOztZ1PNAnMqMvrTWaoJWQ4d%2BahLp35l%2BzNNWdT55Yd9usIhk9n4XaQc96YaQw1TXiJenXXA2YxUSzb2TdtL9tdkyyxVLvCkTschLgl6sVBRPh%2Bkz2Yt73lExvnRcwmu%2ByXyQ4QAJ%2F3zzJtHBdBhRg1D%2FFGbV0jUX%2B6OowOtrNwDpPbD7e02WMlotmKyBedBn3Zr7Sy3rqnnwtmFeg4u59TFvXhmmijouPP1Wunh9S6FS1NQ0gVdtV1DCtvJjABjqkAdRBKytICgBRMM3zWL5y5m7M7hP7gOcKnfsjVR4ddW4xgkSXZ5nB%2BTf7%2F71PmmZrSPySBfv66%2Ft7Vmn59g0clTICDhoNbXxdY3AoUHZpN7O8%2FH%2F3iwGKzM%2BHOwAgHCtgCyjuWUuvmga98PmZK7huciYUQXoNZB2fcpUo4xeNXwdSg0k6Mx6WNi5MCj41jLNZoAx3fymSWtwyW8qyVRuyqhhDwk00&X-Amz-Signature=fbf84af50fb1aa63d1c24346b24197f62ff7f7bf58b70d55a59815f59901e288&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKKF3VQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDKuz4ySdVIv9XzidIKrEbprqiPoco7m5O3FAsJGn%2BmQAIhAOSHY8%2B%2FGt4pX%2F5%2BDdt2XrHL5xXnsSsuDHpLMnEPrss%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykkQ%2FEU6GPWC6lnTAq3ANMLb%2F72ww5YlXNEZhYd4TCDDQtMmD0pg3Jr0i5jA3aJyppnUGi9Nkuf%2BeT1Pc%2BY3TwhO2q%2FmILQufWft5GycwuEG6cnMUDjvRo0DqQ%2Fl6%2Bk%2B2VizPynehlyMO%2FRYbII0O%2FMe5OVQGGs%2FI3WJ0WjDK4E88dK5YTKXl%2Fsvn6KTL0%2FZFbIiOyWC6alRUnpiDfxIIO9nmPWuLnmBKtE9ZSh26yEKxyk%2FBTeNyO2o9Fv6VniQKdFkbTnPGydcQYG7T7irnUtAsdebb8PR7TFmwS9L4vXOIDuFLIXotfSK%2Bq3sNnkpWxAIyywt6NCN0o3ny8JYdrZfNolQsAm2QyzKY3gLDINO9Xf6%2Fdnq0t190NCE3fkmMC2iMInB2NMN3ie5KThME00IHOztZ1PNAnMqMvrTWaoJWQ4d%2BahLp35l%2BzNNWdT55Yd9usIhk9n4XaQc96YaQw1TXiJenXXA2YxUSzb2TdtL9tdkyyxVLvCkTschLgl6sVBRPh%2Bkz2Yt73lExvnRcwmu%2ByXyQ4QAJ%2F3zzJtHBdBhRg1D%2FFGbV0jUX%2B6OowOtrNwDpPbD7e02WMlotmKyBedBn3Zr7Sy3rqnnwtmFeg4u59TFvXhmmijouPP1Wunh9S6FS1NQ0gVdtV1DCtvJjABjqkAdRBKytICgBRMM3zWL5y5m7M7hP7gOcKnfsjVR4ddW4xgkSXZ5nB%2BTf7%2F71PmmZrSPySBfv66%2Ft7Vmn59g0clTICDhoNbXxdY3AoUHZpN7O8%2FH%2F3iwGKzM%2BHOwAgHCtgCyjuWUuvmga98PmZK7huciYUQXoNZB2fcpUo4xeNXwdSg0k6Mx6WNi5MCj41jLNZoAx3fymSWtwyW8qyVRuyqhhDwk00&X-Amz-Signature=5acd75fe094f3790dc9a2938117cd89d630f972c120b50e7f3900879b5712338&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKKF3VQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDKuz4ySdVIv9XzidIKrEbprqiPoco7m5O3FAsJGn%2BmQAIhAOSHY8%2B%2FGt4pX%2F5%2BDdt2XrHL5xXnsSsuDHpLMnEPrss%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykkQ%2FEU6GPWC6lnTAq3ANMLb%2F72ww5YlXNEZhYd4TCDDQtMmD0pg3Jr0i5jA3aJyppnUGi9Nkuf%2BeT1Pc%2BY3TwhO2q%2FmILQufWft5GycwuEG6cnMUDjvRo0DqQ%2Fl6%2Bk%2B2VizPynehlyMO%2FRYbII0O%2FMe5OVQGGs%2FI3WJ0WjDK4E88dK5YTKXl%2Fsvn6KTL0%2FZFbIiOyWC6alRUnpiDfxIIO9nmPWuLnmBKtE9ZSh26yEKxyk%2FBTeNyO2o9Fv6VniQKdFkbTnPGydcQYG7T7irnUtAsdebb8PR7TFmwS9L4vXOIDuFLIXotfSK%2Bq3sNnkpWxAIyywt6NCN0o3ny8JYdrZfNolQsAm2QyzKY3gLDINO9Xf6%2Fdnq0t190NCE3fkmMC2iMInB2NMN3ie5KThME00IHOztZ1PNAnMqMvrTWaoJWQ4d%2BahLp35l%2BzNNWdT55Yd9usIhk9n4XaQc96YaQw1TXiJenXXA2YxUSzb2TdtL9tdkyyxVLvCkTschLgl6sVBRPh%2Bkz2Yt73lExvnRcwmu%2ByXyQ4QAJ%2F3zzJtHBdBhRg1D%2FFGbV0jUX%2B6OowOtrNwDpPbD7e02WMlotmKyBedBn3Zr7Sy3rqnnwtmFeg4u59TFvXhmmijouPP1Wunh9S6FS1NQ0gVdtV1DCtvJjABjqkAdRBKytICgBRMM3zWL5y5m7M7hP7gOcKnfsjVR4ddW4xgkSXZ5nB%2BTf7%2F71PmmZrSPySBfv66%2Ft7Vmn59g0clTICDhoNbXxdY3AoUHZpN7O8%2FH%2F3iwGKzM%2BHOwAgHCtgCyjuWUuvmga98PmZK7huciYUQXoNZB2fcpUo4xeNXwdSg0k6Mx6WNi5MCj41jLNZoAx3fymSWtwyW8qyVRuyqhhDwk00&X-Amz-Signature=bf814e7820888f2f158d56004d66fe4685981264cd616c732626d9aac4ccea71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKKF3VQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDKuz4ySdVIv9XzidIKrEbprqiPoco7m5O3FAsJGn%2BmQAIhAOSHY8%2B%2FGt4pX%2F5%2BDdt2XrHL5xXnsSsuDHpLMnEPrss%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykkQ%2FEU6GPWC6lnTAq3ANMLb%2F72ww5YlXNEZhYd4TCDDQtMmD0pg3Jr0i5jA3aJyppnUGi9Nkuf%2BeT1Pc%2BY3TwhO2q%2FmILQufWft5GycwuEG6cnMUDjvRo0DqQ%2Fl6%2Bk%2B2VizPynehlyMO%2FRYbII0O%2FMe5OVQGGs%2FI3WJ0WjDK4E88dK5YTKXl%2Fsvn6KTL0%2FZFbIiOyWC6alRUnpiDfxIIO9nmPWuLnmBKtE9ZSh26yEKxyk%2FBTeNyO2o9Fv6VniQKdFkbTnPGydcQYG7T7irnUtAsdebb8PR7TFmwS9L4vXOIDuFLIXotfSK%2Bq3sNnkpWxAIyywt6NCN0o3ny8JYdrZfNolQsAm2QyzKY3gLDINO9Xf6%2Fdnq0t190NCE3fkmMC2iMInB2NMN3ie5KThME00IHOztZ1PNAnMqMvrTWaoJWQ4d%2BahLp35l%2BzNNWdT55Yd9usIhk9n4XaQc96YaQw1TXiJenXXA2YxUSzb2TdtL9tdkyyxVLvCkTschLgl6sVBRPh%2Bkz2Yt73lExvnRcwmu%2ByXyQ4QAJ%2F3zzJtHBdBhRg1D%2FFGbV0jUX%2B6OowOtrNwDpPbD7e02WMlotmKyBedBn3Zr7Sy3rqnnwtmFeg4u59TFvXhmmijouPP1Wunh9S6FS1NQ0gVdtV1DCtvJjABjqkAdRBKytICgBRMM3zWL5y5m7M7hP7gOcKnfsjVR4ddW4xgkSXZ5nB%2BTf7%2F71PmmZrSPySBfv66%2Ft7Vmn59g0clTICDhoNbXxdY3AoUHZpN7O8%2FH%2F3iwGKzM%2BHOwAgHCtgCyjuWUuvmga98PmZK7huciYUQXoNZB2fcpUo4xeNXwdSg0k6Mx6WNi5MCj41jLNZoAx3fymSWtwyW8qyVRuyqhhDwk00&X-Amz-Signature=6d0c6db4ddd1d79634ee1d370e49a288eba006ec7e74879cb88cc19b85292425&X-Amz-SignedHeaders=host&x-id=GetObject)
