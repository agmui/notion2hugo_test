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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUAMFOF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFcA7g%2FDdtgkxZGjOefTRw4Pgq0Add8pyRs7NWbVRnrwAiAGtukXL7QDjsHCVqNGqTywYyRv1%2BJHmpUx97EHUaZOQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu5I78ihKS%2F%2B%2FVBwKtwDUGm28qtMVFTKkxkDPOOIpJMnTv8VwqnjenLZkPTthlEDIYPM5xyFhmSy%2FCZNLbw%2FhCJ94dRW29K3pzAj2pzzgrqYD1wh5W%2FghmRZeJiWGeQEcgR%2BqJACeesV8o%2F28kdH7i3wWq6rCDlCQ50NicmCkUt21jXCgjuPuIMW2YkWwrwp7CcDcMWUEcVJVAFB5zZrSalxgJ0G0OcfvFv4qd3A6VooWsyi%2FO1Bx2mCXfjYyUHN88Uz%2BY2w1pbUDuZBajb9Fgx3UDeoVYwhwcrq2vdydYlPJZFspBkaqQq8plzuC5tWxvOiS%2Fzs0ZzxX8pjK%2BFMpes54E7qO2V4oTzyD0CXM92HB3POCXsdvI%2BcfSxKc%2FaTBaSAya90bfuUeWjSOSkpksnRYhD0umNMWJTHoJ5o99nXPhLi6YZ8TuxDsOkF0JOLe0mKcVuBXpYHksjEV41ovW7SGVPfl2qIkssewWFmsaRLWnCE82RxTjjJjyYBnWM%2FquynhB5bUhufalfTpIjWU9DC%2Fi%2FT6WJVL67MBpG2TPJfqMTt8PFNHcabHMJajkeBQEqGHchp6I%2FZ8FLg2plxxZo3inJ96wCUgXuF3rw2aTEoSTn5vImYiViaSNNOprgyL1h4X3j7AkpAQ4Aw1rLZvwY6pgEIPCl57gus6Jp9VA2ztux9Be1OAxo6ROhZ6JbkHWxRwfL5N6SvF%2BOr6ZJ0PP3HqQQZmYdt00XDLdr69rlZ4WL8TAiyXInTD4xW0tN8xcGJ%2FbFCYwXDswl40KOmTOgnGtKkIA8Ps4UKcXW7mgv05KiC%2FdWTNPprzlwnO%2BAO%2FH3gY9UX1AU5wvL0bvC1VHrMglKnKAObyXcUenMQGXbUOhC8RrKEYsyq&X-Amz-Signature=41c4731659167ac6e749dee91929b33f4b0e66c796f63bf4bfb9d726e23568ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUAMFOF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFcA7g%2FDdtgkxZGjOefTRw4Pgq0Add8pyRs7NWbVRnrwAiAGtukXL7QDjsHCVqNGqTywYyRv1%2BJHmpUx97EHUaZOQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu5I78ihKS%2F%2B%2FVBwKtwDUGm28qtMVFTKkxkDPOOIpJMnTv8VwqnjenLZkPTthlEDIYPM5xyFhmSy%2FCZNLbw%2FhCJ94dRW29K3pzAj2pzzgrqYD1wh5W%2FghmRZeJiWGeQEcgR%2BqJACeesV8o%2F28kdH7i3wWq6rCDlCQ50NicmCkUt21jXCgjuPuIMW2YkWwrwp7CcDcMWUEcVJVAFB5zZrSalxgJ0G0OcfvFv4qd3A6VooWsyi%2FO1Bx2mCXfjYyUHN88Uz%2BY2w1pbUDuZBajb9Fgx3UDeoVYwhwcrq2vdydYlPJZFspBkaqQq8plzuC5tWxvOiS%2Fzs0ZzxX8pjK%2BFMpes54E7qO2V4oTzyD0CXM92HB3POCXsdvI%2BcfSxKc%2FaTBaSAya90bfuUeWjSOSkpksnRYhD0umNMWJTHoJ5o99nXPhLi6YZ8TuxDsOkF0JOLe0mKcVuBXpYHksjEV41ovW7SGVPfl2qIkssewWFmsaRLWnCE82RxTjjJjyYBnWM%2FquynhB5bUhufalfTpIjWU9DC%2Fi%2FT6WJVL67MBpG2TPJfqMTt8PFNHcabHMJajkeBQEqGHchp6I%2FZ8FLg2plxxZo3inJ96wCUgXuF3rw2aTEoSTn5vImYiViaSNNOprgyL1h4X3j7AkpAQ4Aw1rLZvwY6pgEIPCl57gus6Jp9VA2ztux9Be1OAxo6ROhZ6JbkHWxRwfL5N6SvF%2BOr6ZJ0PP3HqQQZmYdt00XDLdr69rlZ4WL8TAiyXInTD4xW0tN8xcGJ%2FbFCYwXDswl40KOmTOgnGtKkIA8Ps4UKcXW7mgv05KiC%2FdWTNPprzlwnO%2BAO%2FH3gY9UX1AU5wvL0bvC1VHrMglKnKAObyXcUenMQGXbUOhC8RrKEYsyq&X-Amz-Signature=13ef4fc34d5bb4533a97d31e9b6770dbfbd7d32a386fac877e3419b8d6efe944&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUAMFOF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFcA7g%2FDdtgkxZGjOefTRw4Pgq0Add8pyRs7NWbVRnrwAiAGtukXL7QDjsHCVqNGqTywYyRv1%2BJHmpUx97EHUaZOQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu5I78ihKS%2F%2B%2FVBwKtwDUGm28qtMVFTKkxkDPOOIpJMnTv8VwqnjenLZkPTthlEDIYPM5xyFhmSy%2FCZNLbw%2FhCJ94dRW29K3pzAj2pzzgrqYD1wh5W%2FghmRZeJiWGeQEcgR%2BqJACeesV8o%2F28kdH7i3wWq6rCDlCQ50NicmCkUt21jXCgjuPuIMW2YkWwrwp7CcDcMWUEcVJVAFB5zZrSalxgJ0G0OcfvFv4qd3A6VooWsyi%2FO1Bx2mCXfjYyUHN88Uz%2BY2w1pbUDuZBajb9Fgx3UDeoVYwhwcrq2vdydYlPJZFspBkaqQq8plzuC5tWxvOiS%2Fzs0ZzxX8pjK%2BFMpes54E7qO2V4oTzyD0CXM92HB3POCXsdvI%2BcfSxKc%2FaTBaSAya90bfuUeWjSOSkpksnRYhD0umNMWJTHoJ5o99nXPhLi6YZ8TuxDsOkF0JOLe0mKcVuBXpYHksjEV41ovW7SGVPfl2qIkssewWFmsaRLWnCE82RxTjjJjyYBnWM%2FquynhB5bUhufalfTpIjWU9DC%2Fi%2FT6WJVL67MBpG2TPJfqMTt8PFNHcabHMJajkeBQEqGHchp6I%2FZ8FLg2plxxZo3inJ96wCUgXuF3rw2aTEoSTn5vImYiViaSNNOprgyL1h4X3j7AkpAQ4Aw1rLZvwY6pgEIPCl57gus6Jp9VA2ztux9Be1OAxo6ROhZ6JbkHWxRwfL5N6SvF%2BOr6ZJ0PP3HqQQZmYdt00XDLdr69rlZ4WL8TAiyXInTD4xW0tN8xcGJ%2FbFCYwXDswl40KOmTOgnGtKkIA8Ps4UKcXW7mgv05KiC%2FdWTNPprzlwnO%2BAO%2FH3gY9UX1AU5wvL0bvC1VHrMglKnKAObyXcUenMQGXbUOhC8RrKEYsyq&X-Amz-Signature=cd7888ee91ef614cdc7dd418f4ce74e9cdf871ae78df4f1da14418b8bfa99f68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUAMFOF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFcA7g%2FDdtgkxZGjOefTRw4Pgq0Add8pyRs7NWbVRnrwAiAGtukXL7QDjsHCVqNGqTywYyRv1%2BJHmpUx97EHUaZOQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu5I78ihKS%2F%2B%2FVBwKtwDUGm28qtMVFTKkxkDPOOIpJMnTv8VwqnjenLZkPTthlEDIYPM5xyFhmSy%2FCZNLbw%2FhCJ94dRW29K3pzAj2pzzgrqYD1wh5W%2FghmRZeJiWGeQEcgR%2BqJACeesV8o%2F28kdH7i3wWq6rCDlCQ50NicmCkUt21jXCgjuPuIMW2YkWwrwp7CcDcMWUEcVJVAFB5zZrSalxgJ0G0OcfvFv4qd3A6VooWsyi%2FO1Bx2mCXfjYyUHN88Uz%2BY2w1pbUDuZBajb9Fgx3UDeoVYwhwcrq2vdydYlPJZFspBkaqQq8plzuC5tWxvOiS%2Fzs0ZzxX8pjK%2BFMpes54E7qO2V4oTzyD0CXM92HB3POCXsdvI%2BcfSxKc%2FaTBaSAya90bfuUeWjSOSkpksnRYhD0umNMWJTHoJ5o99nXPhLi6YZ8TuxDsOkF0JOLe0mKcVuBXpYHksjEV41ovW7SGVPfl2qIkssewWFmsaRLWnCE82RxTjjJjyYBnWM%2FquynhB5bUhufalfTpIjWU9DC%2Fi%2FT6WJVL67MBpG2TPJfqMTt8PFNHcabHMJajkeBQEqGHchp6I%2FZ8FLg2plxxZo3inJ96wCUgXuF3rw2aTEoSTn5vImYiViaSNNOprgyL1h4X3j7AkpAQ4Aw1rLZvwY6pgEIPCl57gus6Jp9VA2ztux9Be1OAxo6ROhZ6JbkHWxRwfL5N6SvF%2BOr6ZJ0PP3HqQQZmYdt00XDLdr69rlZ4WL8TAiyXInTD4xW0tN8xcGJ%2FbFCYwXDswl40KOmTOgnGtKkIA8Ps4UKcXW7mgv05KiC%2FdWTNPprzlwnO%2BAO%2FH3gY9UX1AU5wvL0bvC1VHrMglKnKAObyXcUenMQGXbUOhC8RrKEYsyq&X-Amz-Signature=8f66863ecb27fe7caa0d7a9942c8bdf3e9dca823ddffa50e08a11024a843465d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUAMFOF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFcA7g%2FDdtgkxZGjOefTRw4Pgq0Add8pyRs7NWbVRnrwAiAGtukXL7QDjsHCVqNGqTywYyRv1%2BJHmpUx97EHUaZOQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu5I78ihKS%2F%2B%2FVBwKtwDUGm28qtMVFTKkxkDPOOIpJMnTv8VwqnjenLZkPTthlEDIYPM5xyFhmSy%2FCZNLbw%2FhCJ94dRW29K3pzAj2pzzgrqYD1wh5W%2FghmRZeJiWGeQEcgR%2BqJACeesV8o%2F28kdH7i3wWq6rCDlCQ50NicmCkUt21jXCgjuPuIMW2YkWwrwp7CcDcMWUEcVJVAFB5zZrSalxgJ0G0OcfvFv4qd3A6VooWsyi%2FO1Bx2mCXfjYyUHN88Uz%2BY2w1pbUDuZBajb9Fgx3UDeoVYwhwcrq2vdydYlPJZFspBkaqQq8plzuC5tWxvOiS%2Fzs0ZzxX8pjK%2BFMpes54E7qO2V4oTzyD0CXM92HB3POCXsdvI%2BcfSxKc%2FaTBaSAya90bfuUeWjSOSkpksnRYhD0umNMWJTHoJ5o99nXPhLi6YZ8TuxDsOkF0JOLe0mKcVuBXpYHksjEV41ovW7SGVPfl2qIkssewWFmsaRLWnCE82RxTjjJjyYBnWM%2FquynhB5bUhufalfTpIjWU9DC%2Fi%2FT6WJVL67MBpG2TPJfqMTt8PFNHcabHMJajkeBQEqGHchp6I%2FZ8FLg2plxxZo3inJ96wCUgXuF3rw2aTEoSTn5vImYiViaSNNOprgyL1h4X3j7AkpAQ4Aw1rLZvwY6pgEIPCl57gus6Jp9VA2ztux9Be1OAxo6ROhZ6JbkHWxRwfL5N6SvF%2BOr6ZJ0PP3HqQQZmYdt00XDLdr69rlZ4WL8TAiyXInTD4xW0tN8xcGJ%2FbFCYwXDswl40KOmTOgnGtKkIA8Ps4UKcXW7mgv05KiC%2FdWTNPprzlwnO%2BAO%2FH3gY9UX1AU5wvL0bvC1VHrMglKnKAObyXcUenMQGXbUOhC8RrKEYsyq&X-Amz-Signature=72f5832ce5c195a5592ee7ef5eebcfbc6e8e9bf63017b92e37cf5778f0439e94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUAMFOF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFcA7g%2FDdtgkxZGjOefTRw4Pgq0Add8pyRs7NWbVRnrwAiAGtukXL7QDjsHCVqNGqTywYyRv1%2BJHmpUx97EHUaZOQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVu5I78ihKS%2F%2B%2FVBwKtwDUGm28qtMVFTKkxkDPOOIpJMnTv8VwqnjenLZkPTthlEDIYPM5xyFhmSy%2FCZNLbw%2FhCJ94dRW29K3pzAj2pzzgrqYD1wh5W%2FghmRZeJiWGeQEcgR%2BqJACeesV8o%2F28kdH7i3wWq6rCDlCQ50NicmCkUt21jXCgjuPuIMW2YkWwrwp7CcDcMWUEcVJVAFB5zZrSalxgJ0G0OcfvFv4qd3A6VooWsyi%2FO1Bx2mCXfjYyUHN88Uz%2BY2w1pbUDuZBajb9Fgx3UDeoVYwhwcrq2vdydYlPJZFspBkaqQq8plzuC5tWxvOiS%2Fzs0ZzxX8pjK%2BFMpes54E7qO2V4oTzyD0CXM92HB3POCXsdvI%2BcfSxKc%2FaTBaSAya90bfuUeWjSOSkpksnRYhD0umNMWJTHoJ5o99nXPhLi6YZ8TuxDsOkF0JOLe0mKcVuBXpYHksjEV41ovW7SGVPfl2qIkssewWFmsaRLWnCE82RxTjjJjyYBnWM%2FquynhB5bUhufalfTpIjWU9DC%2Fi%2FT6WJVL67MBpG2TPJfqMTt8PFNHcabHMJajkeBQEqGHchp6I%2FZ8FLg2plxxZo3inJ96wCUgXuF3rw2aTEoSTn5vImYiViaSNNOprgyL1h4X3j7AkpAQ4Aw1rLZvwY6pgEIPCl57gus6Jp9VA2ztux9Be1OAxo6ROhZ6JbkHWxRwfL5N6SvF%2BOr6ZJ0PP3HqQQZmYdt00XDLdr69rlZ4WL8TAiyXInTD4xW0tN8xcGJ%2FbFCYwXDswl40KOmTOgnGtKkIA8Ps4UKcXW7mgv05KiC%2FdWTNPprzlwnO%2BAO%2FH3gY9UX1AU5wvL0bvC1VHrMglKnKAObyXcUenMQGXbUOhC8RrKEYsyq&X-Amz-Signature=deba61c901e1c88865082474e688e7fba92ba25bbb216680f458a0f71d155b1e&X-Amz-SignedHeaders=host&x-id=GetObject)
