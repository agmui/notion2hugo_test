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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CIOOTD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKM1yRl472n73TRfGvWMXti8AlAhTW9m78QE%2BNZHeDQIgN6f0%2BEhRvrnFBSV8GLvY7P%2FhpFQefuvnUlCp6Dv9RqEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDJ9Rx3Rj69iTGUIJCrcA5OwQkFw0lGClAt64v0PKgIDOeApVYXWflM5jWEusu5SS34HXoKW1DnDiQF5cBWbRwsyM6xdpJXCNcTzLwI0ShAqLgX032Do7USJ4axeRHmPVmvoQJ%2FEoSVEjsoQJ%2BVqaKCmujV7Zl15A%2FzLFA%2BoWDawVYlHRcJgTWxZQC%2Fe1qibHzsqH9SutW%2BM3v2M1MbWXZrimEMr5EZu%2B58O0DpepBUu6kvaEligqDO9WTCmayaqu6w8w5NS4sCC781QJewXMZRrmCrq%2FZmwlEcyw94hx3pDq6q3CHwo40EMpScNevgVjvPjhCQlj6smoppr9M4jd17av19tAJsY6jt%2FtOjJ4SyCylV9I3nwUQ2%2B68GaRx24nODSK3JikmWRe4bJRQxp4IVFoCWPD3kmNFfeX%2BdruhuDxCK15QyNL%2FkhuD2ZeON1sutXZwsv%2BJendk4wMTof1UDydSX66X2MCCEYsMCMHgyrQPdGNIyynL5oCb7VQtP4vN%2FyZwJDb5jeGBenpjTZoy7rXSC6WcN3w9ynjppGkYLkS1xFfs1yXJGxNHpXvN3WQtFdmqOer8hPjlYZazdyXS3mfAZOn285LwunOq%2F4Am%2F6T5hyUBUOf5rIzl8l8TDyaNa%2BtR6Ol%2Bu9Png3MI3S9r8GOqUBNxYdPoTjZ7oWFXfE86VzSmgFwDWRxHe7Y4aQRU%2BNQKpoZTtxQ1Yk9KUK%2FayRqOWBWM%2Fei5Y2Z47Jfx2PS3S94WmOXMrp5iVrP2fYDenXAs7pDint88b1nqq6AHcGMeBKxZjZzPY3wT9mbLqpSjs%2Fga8GAtMxbBRwSlFpCv%2FEpt%2FE%2FjoDQWsMCiOdKxsMqQBFIq3vNZCAJueaa4Du6HwRUqIoFCet&X-Amz-Signature=9dc14427342db982c67ca2e8ca1a65b5abcbc72c9033d73e8c7cbb84428aaabd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CIOOTD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKM1yRl472n73TRfGvWMXti8AlAhTW9m78QE%2BNZHeDQIgN6f0%2BEhRvrnFBSV8GLvY7P%2FhpFQefuvnUlCp6Dv9RqEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDJ9Rx3Rj69iTGUIJCrcA5OwQkFw0lGClAt64v0PKgIDOeApVYXWflM5jWEusu5SS34HXoKW1DnDiQF5cBWbRwsyM6xdpJXCNcTzLwI0ShAqLgX032Do7USJ4axeRHmPVmvoQJ%2FEoSVEjsoQJ%2BVqaKCmujV7Zl15A%2FzLFA%2BoWDawVYlHRcJgTWxZQC%2Fe1qibHzsqH9SutW%2BM3v2M1MbWXZrimEMr5EZu%2B58O0DpepBUu6kvaEligqDO9WTCmayaqu6w8w5NS4sCC781QJewXMZRrmCrq%2FZmwlEcyw94hx3pDq6q3CHwo40EMpScNevgVjvPjhCQlj6smoppr9M4jd17av19tAJsY6jt%2FtOjJ4SyCylV9I3nwUQ2%2B68GaRx24nODSK3JikmWRe4bJRQxp4IVFoCWPD3kmNFfeX%2BdruhuDxCK15QyNL%2FkhuD2ZeON1sutXZwsv%2BJendk4wMTof1UDydSX66X2MCCEYsMCMHgyrQPdGNIyynL5oCb7VQtP4vN%2FyZwJDb5jeGBenpjTZoy7rXSC6WcN3w9ynjppGkYLkS1xFfs1yXJGxNHpXvN3WQtFdmqOer8hPjlYZazdyXS3mfAZOn285LwunOq%2F4Am%2F6T5hyUBUOf5rIzl8l8TDyaNa%2BtR6Ol%2Bu9Png3MI3S9r8GOqUBNxYdPoTjZ7oWFXfE86VzSmgFwDWRxHe7Y4aQRU%2BNQKpoZTtxQ1Yk9KUK%2FayRqOWBWM%2Fei5Y2Z47Jfx2PS3S94WmOXMrp5iVrP2fYDenXAs7pDint88b1nqq6AHcGMeBKxZjZzPY3wT9mbLqpSjs%2Fga8GAtMxbBRwSlFpCv%2FEpt%2FE%2FjoDQWsMCiOdKxsMqQBFIq3vNZCAJueaa4Du6HwRUqIoFCet&X-Amz-Signature=63588289d4b6ce703ceb4b7b0f0d7e6bcb8bfe967be160e2750b83a5850700aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CIOOTD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKM1yRl472n73TRfGvWMXti8AlAhTW9m78QE%2BNZHeDQIgN6f0%2BEhRvrnFBSV8GLvY7P%2FhpFQefuvnUlCp6Dv9RqEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDJ9Rx3Rj69iTGUIJCrcA5OwQkFw0lGClAt64v0PKgIDOeApVYXWflM5jWEusu5SS34HXoKW1DnDiQF5cBWbRwsyM6xdpJXCNcTzLwI0ShAqLgX032Do7USJ4axeRHmPVmvoQJ%2FEoSVEjsoQJ%2BVqaKCmujV7Zl15A%2FzLFA%2BoWDawVYlHRcJgTWxZQC%2Fe1qibHzsqH9SutW%2BM3v2M1MbWXZrimEMr5EZu%2B58O0DpepBUu6kvaEligqDO9WTCmayaqu6w8w5NS4sCC781QJewXMZRrmCrq%2FZmwlEcyw94hx3pDq6q3CHwo40EMpScNevgVjvPjhCQlj6smoppr9M4jd17av19tAJsY6jt%2FtOjJ4SyCylV9I3nwUQ2%2B68GaRx24nODSK3JikmWRe4bJRQxp4IVFoCWPD3kmNFfeX%2BdruhuDxCK15QyNL%2FkhuD2ZeON1sutXZwsv%2BJendk4wMTof1UDydSX66X2MCCEYsMCMHgyrQPdGNIyynL5oCb7VQtP4vN%2FyZwJDb5jeGBenpjTZoy7rXSC6WcN3w9ynjppGkYLkS1xFfs1yXJGxNHpXvN3WQtFdmqOer8hPjlYZazdyXS3mfAZOn285LwunOq%2F4Am%2F6T5hyUBUOf5rIzl8l8TDyaNa%2BtR6Ol%2Bu9Png3MI3S9r8GOqUBNxYdPoTjZ7oWFXfE86VzSmgFwDWRxHe7Y4aQRU%2BNQKpoZTtxQ1Yk9KUK%2FayRqOWBWM%2Fei5Y2Z47Jfx2PS3S94WmOXMrp5iVrP2fYDenXAs7pDint88b1nqq6AHcGMeBKxZjZzPY3wT9mbLqpSjs%2Fga8GAtMxbBRwSlFpCv%2FEpt%2FE%2FjoDQWsMCiOdKxsMqQBFIq3vNZCAJueaa4Du6HwRUqIoFCet&X-Amz-Signature=4333517565192eee284da1d7abaf48ad81a5f7b2306c8a70501dafbed0cc9e24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CIOOTD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKM1yRl472n73TRfGvWMXti8AlAhTW9m78QE%2BNZHeDQIgN6f0%2BEhRvrnFBSV8GLvY7P%2FhpFQefuvnUlCp6Dv9RqEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDJ9Rx3Rj69iTGUIJCrcA5OwQkFw0lGClAt64v0PKgIDOeApVYXWflM5jWEusu5SS34HXoKW1DnDiQF5cBWbRwsyM6xdpJXCNcTzLwI0ShAqLgX032Do7USJ4axeRHmPVmvoQJ%2FEoSVEjsoQJ%2BVqaKCmujV7Zl15A%2FzLFA%2BoWDawVYlHRcJgTWxZQC%2Fe1qibHzsqH9SutW%2BM3v2M1MbWXZrimEMr5EZu%2B58O0DpepBUu6kvaEligqDO9WTCmayaqu6w8w5NS4sCC781QJewXMZRrmCrq%2FZmwlEcyw94hx3pDq6q3CHwo40EMpScNevgVjvPjhCQlj6smoppr9M4jd17av19tAJsY6jt%2FtOjJ4SyCylV9I3nwUQ2%2B68GaRx24nODSK3JikmWRe4bJRQxp4IVFoCWPD3kmNFfeX%2BdruhuDxCK15QyNL%2FkhuD2ZeON1sutXZwsv%2BJendk4wMTof1UDydSX66X2MCCEYsMCMHgyrQPdGNIyynL5oCb7VQtP4vN%2FyZwJDb5jeGBenpjTZoy7rXSC6WcN3w9ynjppGkYLkS1xFfs1yXJGxNHpXvN3WQtFdmqOer8hPjlYZazdyXS3mfAZOn285LwunOq%2F4Am%2F6T5hyUBUOf5rIzl8l8TDyaNa%2BtR6Ol%2Bu9Png3MI3S9r8GOqUBNxYdPoTjZ7oWFXfE86VzSmgFwDWRxHe7Y4aQRU%2BNQKpoZTtxQ1Yk9KUK%2FayRqOWBWM%2Fei5Y2Z47Jfx2PS3S94WmOXMrp5iVrP2fYDenXAs7pDint88b1nqq6AHcGMeBKxZjZzPY3wT9mbLqpSjs%2Fga8GAtMxbBRwSlFpCv%2FEpt%2FE%2FjoDQWsMCiOdKxsMqQBFIq3vNZCAJueaa4Du6HwRUqIoFCet&X-Amz-Signature=f52a20b7ba5a16dbc736f67f0431b16f6423d5864a6ec46d5833a0d22b7d140c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CIOOTD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKM1yRl472n73TRfGvWMXti8AlAhTW9m78QE%2BNZHeDQIgN6f0%2BEhRvrnFBSV8GLvY7P%2FhpFQefuvnUlCp6Dv9RqEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDJ9Rx3Rj69iTGUIJCrcA5OwQkFw0lGClAt64v0PKgIDOeApVYXWflM5jWEusu5SS34HXoKW1DnDiQF5cBWbRwsyM6xdpJXCNcTzLwI0ShAqLgX032Do7USJ4axeRHmPVmvoQJ%2FEoSVEjsoQJ%2BVqaKCmujV7Zl15A%2FzLFA%2BoWDawVYlHRcJgTWxZQC%2Fe1qibHzsqH9SutW%2BM3v2M1MbWXZrimEMr5EZu%2B58O0DpepBUu6kvaEligqDO9WTCmayaqu6w8w5NS4sCC781QJewXMZRrmCrq%2FZmwlEcyw94hx3pDq6q3CHwo40EMpScNevgVjvPjhCQlj6smoppr9M4jd17av19tAJsY6jt%2FtOjJ4SyCylV9I3nwUQ2%2B68GaRx24nODSK3JikmWRe4bJRQxp4IVFoCWPD3kmNFfeX%2BdruhuDxCK15QyNL%2FkhuD2ZeON1sutXZwsv%2BJendk4wMTof1UDydSX66X2MCCEYsMCMHgyrQPdGNIyynL5oCb7VQtP4vN%2FyZwJDb5jeGBenpjTZoy7rXSC6WcN3w9ynjppGkYLkS1xFfs1yXJGxNHpXvN3WQtFdmqOer8hPjlYZazdyXS3mfAZOn285LwunOq%2F4Am%2F6T5hyUBUOf5rIzl8l8TDyaNa%2BtR6Ol%2Bu9Png3MI3S9r8GOqUBNxYdPoTjZ7oWFXfE86VzSmgFwDWRxHe7Y4aQRU%2BNQKpoZTtxQ1Yk9KUK%2FayRqOWBWM%2Fei5Y2Z47Jfx2PS3S94WmOXMrp5iVrP2fYDenXAs7pDint88b1nqq6AHcGMeBKxZjZzPY3wT9mbLqpSjs%2Fga8GAtMxbBRwSlFpCv%2FEpt%2FE%2FjoDQWsMCiOdKxsMqQBFIq3vNZCAJueaa4Du6HwRUqIoFCet&X-Amz-Signature=06ea5fc623328e76c1ef59426890f6fb392fee193e82b2add3d9e7a7aa882ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CIOOTD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKM1yRl472n73TRfGvWMXti8AlAhTW9m78QE%2BNZHeDQIgN6f0%2BEhRvrnFBSV8GLvY7P%2FhpFQefuvnUlCp6Dv9RqEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDJ9Rx3Rj69iTGUIJCrcA5OwQkFw0lGClAt64v0PKgIDOeApVYXWflM5jWEusu5SS34HXoKW1DnDiQF5cBWbRwsyM6xdpJXCNcTzLwI0ShAqLgX032Do7USJ4axeRHmPVmvoQJ%2FEoSVEjsoQJ%2BVqaKCmujV7Zl15A%2FzLFA%2BoWDawVYlHRcJgTWxZQC%2Fe1qibHzsqH9SutW%2BM3v2M1MbWXZrimEMr5EZu%2B58O0DpepBUu6kvaEligqDO9WTCmayaqu6w8w5NS4sCC781QJewXMZRrmCrq%2FZmwlEcyw94hx3pDq6q3CHwo40EMpScNevgVjvPjhCQlj6smoppr9M4jd17av19tAJsY6jt%2FtOjJ4SyCylV9I3nwUQ2%2B68GaRx24nODSK3JikmWRe4bJRQxp4IVFoCWPD3kmNFfeX%2BdruhuDxCK15QyNL%2FkhuD2ZeON1sutXZwsv%2BJendk4wMTof1UDydSX66X2MCCEYsMCMHgyrQPdGNIyynL5oCb7VQtP4vN%2FyZwJDb5jeGBenpjTZoy7rXSC6WcN3w9ynjppGkYLkS1xFfs1yXJGxNHpXvN3WQtFdmqOer8hPjlYZazdyXS3mfAZOn285LwunOq%2F4Am%2F6T5hyUBUOf5rIzl8l8TDyaNa%2BtR6Ol%2Bu9Png3MI3S9r8GOqUBNxYdPoTjZ7oWFXfE86VzSmgFwDWRxHe7Y4aQRU%2BNQKpoZTtxQ1Yk9KUK%2FayRqOWBWM%2Fei5Y2Z47Jfx2PS3S94WmOXMrp5iVrP2fYDenXAs7pDint88b1nqq6AHcGMeBKxZjZzPY3wT9mbLqpSjs%2Fga8GAtMxbBRwSlFpCv%2FEpt%2FE%2FjoDQWsMCiOdKxsMqQBFIq3vNZCAJueaa4Du6HwRUqIoFCet&X-Amz-Signature=2373c2d21f5c498af7940e654d8442ab89f3040c475bf556b04b05cb150b3719&X-Amz-SignedHeaders=host&x-id=GetObject)
