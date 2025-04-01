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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUXUIWB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCd7Ho0irT64JRwPfcOW6AW%2F4onyjilGn4QUCDGie%2FoDwIgY%2BFsrFhibxLa1%2BdEWCu4tXiMig%2B86SdX5WRQP4CZLpcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd2C09ib1n0L%2FyLACrcAx1Rc5t8OS18GmyceYuwND9pKpRKLFB4qz9IpfafjagR4X%2FE8LwuCHm7hlk6TjjwV8Mt6QW1VI6N7C2asa%2B5koJeMWOIvWbbYMjF8Vc%2Bhee52awuIqUxdVjKjIA2taGNdwNlrOwYh2Y2ic6U1uwTrrOZuJ0Mr0mZFwgtSGKP7K2ITF%2FbKbg9h0jHdrUMqBdiTDIOIi2h3LZ%2FV6aWL1pZrWaQQHSPN972nyXk0IQquPgzQ%2Fx9iu2zklTxUX4yEZCAwBIC6VE%2BDx8QM8hWE44lU%2BLrpLcqdKH3%2FoKNYinen8Q0Ett9LWF9L1pQ%2FF4D9y3q4EjG6QXSkHdkfh3nx4w5bMHPVgSWnmiX3V%2FQvGuhA46Z9%2BxZD4H23q%2Fplz2QouhFJ7jAHEVessJjX90uewdkvqqRbAplgW63X2gVTEiiKCn%2BBj4AQVMEJJR17foygrLtQt16WJWur4YHRaR4CsheuHp%2FN9ZJxdTvMdTHEornXqGWj0el8Bd13SWhvnAFkyEXZ4sylchC53z54ZI5PW19NUN9PSKkXARmdvgTZmnW2852HfKbQa2vRevC%2BRFYce3o29cUC2pP0gh0MCBzA9BtGZbRLH%2Bx1%2FwE3LSEg4GLYAhVfO2%2BIwvcAiCJqRGSMJ%2Bdr78GOqUB4dAf%2BBSCCLZxpUU3lJCayD4bzAxqRbkccKSVmkmVBCJTUNkscEtERNPzNCmIoHDVqoljgwwlzvf0h08J7dSNXk3q3eO1MTYvCgLEstWb4maI3oVrtacCNkaB6QtV%2B%2Beg0IRw44IIHLCWOinb1wI96PIwWYY17lqF2Fps%2FpndslkNDCXbCw0UFkQpr1sP3J0PPpB6ycQmIfL23djUpdyY9hcFhENQ&X-Amz-Signature=0c5ab88d03f493be7ee85a57908fa054dafa21811c05f76934e81c16dc9d93f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUXUIWB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCd7Ho0irT64JRwPfcOW6AW%2F4onyjilGn4QUCDGie%2FoDwIgY%2BFsrFhibxLa1%2BdEWCu4tXiMig%2B86SdX5WRQP4CZLpcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd2C09ib1n0L%2FyLACrcAx1Rc5t8OS18GmyceYuwND9pKpRKLFB4qz9IpfafjagR4X%2FE8LwuCHm7hlk6TjjwV8Mt6QW1VI6N7C2asa%2B5koJeMWOIvWbbYMjF8Vc%2Bhee52awuIqUxdVjKjIA2taGNdwNlrOwYh2Y2ic6U1uwTrrOZuJ0Mr0mZFwgtSGKP7K2ITF%2FbKbg9h0jHdrUMqBdiTDIOIi2h3LZ%2FV6aWL1pZrWaQQHSPN972nyXk0IQquPgzQ%2Fx9iu2zklTxUX4yEZCAwBIC6VE%2BDx8QM8hWE44lU%2BLrpLcqdKH3%2FoKNYinen8Q0Ett9LWF9L1pQ%2FF4D9y3q4EjG6QXSkHdkfh3nx4w5bMHPVgSWnmiX3V%2FQvGuhA46Z9%2BxZD4H23q%2Fplz2QouhFJ7jAHEVessJjX90uewdkvqqRbAplgW63X2gVTEiiKCn%2BBj4AQVMEJJR17foygrLtQt16WJWur4YHRaR4CsheuHp%2FN9ZJxdTvMdTHEornXqGWj0el8Bd13SWhvnAFkyEXZ4sylchC53z54ZI5PW19NUN9PSKkXARmdvgTZmnW2852HfKbQa2vRevC%2BRFYce3o29cUC2pP0gh0MCBzA9BtGZbRLH%2Bx1%2FwE3LSEg4GLYAhVfO2%2BIwvcAiCJqRGSMJ%2Bdr78GOqUB4dAf%2BBSCCLZxpUU3lJCayD4bzAxqRbkccKSVmkmVBCJTUNkscEtERNPzNCmIoHDVqoljgwwlzvf0h08J7dSNXk3q3eO1MTYvCgLEstWb4maI3oVrtacCNkaB6QtV%2B%2Beg0IRw44IIHLCWOinb1wI96PIwWYY17lqF2Fps%2FpndslkNDCXbCw0UFkQpr1sP3J0PPpB6ycQmIfL23djUpdyY9hcFhENQ&X-Amz-Signature=7ee020ddc850ce7d73d74417c1fab176f7342ddae1ee5456032cc81e6b564f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUXUIWB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCd7Ho0irT64JRwPfcOW6AW%2F4onyjilGn4QUCDGie%2FoDwIgY%2BFsrFhibxLa1%2BdEWCu4tXiMig%2B86SdX5WRQP4CZLpcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd2C09ib1n0L%2FyLACrcAx1Rc5t8OS18GmyceYuwND9pKpRKLFB4qz9IpfafjagR4X%2FE8LwuCHm7hlk6TjjwV8Mt6QW1VI6N7C2asa%2B5koJeMWOIvWbbYMjF8Vc%2Bhee52awuIqUxdVjKjIA2taGNdwNlrOwYh2Y2ic6U1uwTrrOZuJ0Mr0mZFwgtSGKP7K2ITF%2FbKbg9h0jHdrUMqBdiTDIOIi2h3LZ%2FV6aWL1pZrWaQQHSPN972nyXk0IQquPgzQ%2Fx9iu2zklTxUX4yEZCAwBIC6VE%2BDx8QM8hWE44lU%2BLrpLcqdKH3%2FoKNYinen8Q0Ett9LWF9L1pQ%2FF4D9y3q4EjG6QXSkHdkfh3nx4w5bMHPVgSWnmiX3V%2FQvGuhA46Z9%2BxZD4H23q%2Fplz2QouhFJ7jAHEVessJjX90uewdkvqqRbAplgW63X2gVTEiiKCn%2BBj4AQVMEJJR17foygrLtQt16WJWur4YHRaR4CsheuHp%2FN9ZJxdTvMdTHEornXqGWj0el8Bd13SWhvnAFkyEXZ4sylchC53z54ZI5PW19NUN9PSKkXARmdvgTZmnW2852HfKbQa2vRevC%2BRFYce3o29cUC2pP0gh0MCBzA9BtGZbRLH%2Bx1%2FwE3LSEg4GLYAhVfO2%2BIwvcAiCJqRGSMJ%2Bdr78GOqUB4dAf%2BBSCCLZxpUU3lJCayD4bzAxqRbkccKSVmkmVBCJTUNkscEtERNPzNCmIoHDVqoljgwwlzvf0h08J7dSNXk3q3eO1MTYvCgLEstWb4maI3oVrtacCNkaB6QtV%2B%2Beg0IRw44IIHLCWOinb1wI96PIwWYY17lqF2Fps%2FpndslkNDCXbCw0UFkQpr1sP3J0PPpB6ycQmIfL23djUpdyY9hcFhENQ&X-Amz-Signature=3ef6dd018e57606a453e51f460b3f550ac959b0eab44aeb0244e5dfad63347d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUXUIWB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCd7Ho0irT64JRwPfcOW6AW%2F4onyjilGn4QUCDGie%2FoDwIgY%2BFsrFhibxLa1%2BdEWCu4tXiMig%2B86SdX5WRQP4CZLpcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd2C09ib1n0L%2FyLACrcAx1Rc5t8OS18GmyceYuwND9pKpRKLFB4qz9IpfafjagR4X%2FE8LwuCHm7hlk6TjjwV8Mt6QW1VI6N7C2asa%2B5koJeMWOIvWbbYMjF8Vc%2Bhee52awuIqUxdVjKjIA2taGNdwNlrOwYh2Y2ic6U1uwTrrOZuJ0Mr0mZFwgtSGKP7K2ITF%2FbKbg9h0jHdrUMqBdiTDIOIi2h3LZ%2FV6aWL1pZrWaQQHSPN972nyXk0IQquPgzQ%2Fx9iu2zklTxUX4yEZCAwBIC6VE%2BDx8QM8hWE44lU%2BLrpLcqdKH3%2FoKNYinen8Q0Ett9LWF9L1pQ%2FF4D9y3q4EjG6QXSkHdkfh3nx4w5bMHPVgSWnmiX3V%2FQvGuhA46Z9%2BxZD4H23q%2Fplz2QouhFJ7jAHEVessJjX90uewdkvqqRbAplgW63X2gVTEiiKCn%2BBj4AQVMEJJR17foygrLtQt16WJWur4YHRaR4CsheuHp%2FN9ZJxdTvMdTHEornXqGWj0el8Bd13SWhvnAFkyEXZ4sylchC53z54ZI5PW19NUN9PSKkXARmdvgTZmnW2852HfKbQa2vRevC%2BRFYce3o29cUC2pP0gh0MCBzA9BtGZbRLH%2Bx1%2FwE3LSEg4GLYAhVfO2%2BIwvcAiCJqRGSMJ%2Bdr78GOqUB4dAf%2BBSCCLZxpUU3lJCayD4bzAxqRbkccKSVmkmVBCJTUNkscEtERNPzNCmIoHDVqoljgwwlzvf0h08J7dSNXk3q3eO1MTYvCgLEstWb4maI3oVrtacCNkaB6QtV%2B%2Beg0IRw44IIHLCWOinb1wI96PIwWYY17lqF2Fps%2FpndslkNDCXbCw0UFkQpr1sP3J0PPpB6ycQmIfL23djUpdyY9hcFhENQ&X-Amz-Signature=05d7de48e95545239d07a48ab0d2fd48f96d7648aa9248a19db351a57c060125&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUXUIWB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCd7Ho0irT64JRwPfcOW6AW%2F4onyjilGn4QUCDGie%2FoDwIgY%2BFsrFhibxLa1%2BdEWCu4tXiMig%2B86SdX5WRQP4CZLpcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd2C09ib1n0L%2FyLACrcAx1Rc5t8OS18GmyceYuwND9pKpRKLFB4qz9IpfafjagR4X%2FE8LwuCHm7hlk6TjjwV8Mt6QW1VI6N7C2asa%2B5koJeMWOIvWbbYMjF8Vc%2Bhee52awuIqUxdVjKjIA2taGNdwNlrOwYh2Y2ic6U1uwTrrOZuJ0Mr0mZFwgtSGKP7K2ITF%2FbKbg9h0jHdrUMqBdiTDIOIi2h3LZ%2FV6aWL1pZrWaQQHSPN972nyXk0IQquPgzQ%2Fx9iu2zklTxUX4yEZCAwBIC6VE%2BDx8QM8hWE44lU%2BLrpLcqdKH3%2FoKNYinen8Q0Ett9LWF9L1pQ%2FF4D9y3q4EjG6QXSkHdkfh3nx4w5bMHPVgSWnmiX3V%2FQvGuhA46Z9%2BxZD4H23q%2Fplz2QouhFJ7jAHEVessJjX90uewdkvqqRbAplgW63X2gVTEiiKCn%2BBj4AQVMEJJR17foygrLtQt16WJWur4YHRaR4CsheuHp%2FN9ZJxdTvMdTHEornXqGWj0el8Bd13SWhvnAFkyEXZ4sylchC53z54ZI5PW19NUN9PSKkXARmdvgTZmnW2852HfKbQa2vRevC%2BRFYce3o29cUC2pP0gh0MCBzA9BtGZbRLH%2Bx1%2FwE3LSEg4GLYAhVfO2%2BIwvcAiCJqRGSMJ%2Bdr78GOqUB4dAf%2BBSCCLZxpUU3lJCayD4bzAxqRbkccKSVmkmVBCJTUNkscEtERNPzNCmIoHDVqoljgwwlzvf0h08J7dSNXk3q3eO1MTYvCgLEstWb4maI3oVrtacCNkaB6QtV%2B%2Beg0IRw44IIHLCWOinb1wI96PIwWYY17lqF2Fps%2FpndslkNDCXbCw0UFkQpr1sP3J0PPpB6ycQmIfL23djUpdyY9hcFhENQ&X-Amz-Signature=78ae34b0668d17b59e6be826c90f082df897fde015823dd9151798c1a4025879&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUXUIWB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCd7Ho0irT64JRwPfcOW6AW%2F4onyjilGn4QUCDGie%2FoDwIgY%2BFsrFhibxLa1%2BdEWCu4tXiMig%2B86SdX5WRQP4CZLpcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd2C09ib1n0L%2FyLACrcAx1Rc5t8OS18GmyceYuwND9pKpRKLFB4qz9IpfafjagR4X%2FE8LwuCHm7hlk6TjjwV8Mt6QW1VI6N7C2asa%2B5koJeMWOIvWbbYMjF8Vc%2Bhee52awuIqUxdVjKjIA2taGNdwNlrOwYh2Y2ic6U1uwTrrOZuJ0Mr0mZFwgtSGKP7K2ITF%2FbKbg9h0jHdrUMqBdiTDIOIi2h3LZ%2FV6aWL1pZrWaQQHSPN972nyXk0IQquPgzQ%2Fx9iu2zklTxUX4yEZCAwBIC6VE%2BDx8QM8hWE44lU%2BLrpLcqdKH3%2FoKNYinen8Q0Ett9LWF9L1pQ%2FF4D9y3q4EjG6QXSkHdkfh3nx4w5bMHPVgSWnmiX3V%2FQvGuhA46Z9%2BxZD4H23q%2Fplz2QouhFJ7jAHEVessJjX90uewdkvqqRbAplgW63X2gVTEiiKCn%2BBj4AQVMEJJR17foygrLtQt16WJWur4YHRaR4CsheuHp%2FN9ZJxdTvMdTHEornXqGWj0el8Bd13SWhvnAFkyEXZ4sylchC53z54ZI5PW19NUN9PSKkXARmdvgTZmnW2852HfKbQa2vRevC%2BRFYce3o29cUC2pP0gh0MCBzA9BtGZbRLH%2Bx1%2FwE3LSEg4GLYAhVfO2%2BIwvcAiCJqRGSMJ%2Bdr78GOqUB4dAf%2BBSCCLZxpUU3lJCayD4bzAxqRbkccKSVmkmVBCJTUNkscEtERNPzNCmIoHDVqoljgwwlzvf0h08J7dSNXk3q3eO1MTYvCgLEstWb4maI3oVrtacCNkaB6QtV%2B%2Beg0IRw44IIHLCWOinb1wI96PIwWYY17lqF2Fps%2FpndslkNDCXbCw0UFkQpr1sP3J0PPpB6ycQmIfL23djUpdyY9hcFhENQ&X-Amz-Signature=68076ad59cae7dca64b6b0b49bc8ec067f2694694adf33a16760e51c0cb24cf0&X-Amz-SignedHeaders=host&x-id=GetObject)
