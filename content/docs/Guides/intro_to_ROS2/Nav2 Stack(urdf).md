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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUTXIUM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFCl70KCyWen0mgM5AwZo9AiZsvW5U3zlh5%2FlVHT1mbpAiBMkbjB4ruXtTpE2eMbM3DEO%2FQSt6o%2BOUK0aUTGODcOTSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0LMTgX8GrxFHYmO2KtwDJO2%2B43Q%2BJdsx4Bf6NJYPZJVyDZkjTPRMf43DhvjlftJhCIrt7QqC3OViu0J59xXoifrxxU%2FNWa3DXiBzw0JhdDDyqszN73zqKUXBOnYKc4V2E3PXgk2Y6%2F8OE2IwAumTIy%2Bmi6NwIIxmLBvRdA4h5kUws0epbOvA07nwhrKepX3GXYi3S6%2BlfG31ZPLh%2FUZFcr2Fj9IG0m9NPQZ1Eu7U2gtqwYYcVG5ecvY4cudk%2FzwkjOXf1oOfkcEPLsTtvHkFLVq9b9pwnjLc%2BKPv5Eh33Nitl10opGmsTM2VZpGV7%2BZ2Hm9PWJKtq%2FepvxoTq12WV3zfN%2BReD9h%2BmKfULppYl1vGcbMP2UKxOlyH2dG5VWhTv7wQBhpx%2Bkb1evFV3TV0mSKAHv%2FSxnT0OfJ6l24WOWpPnJHadtf0lJCMo5zqaKy1BneVjKgItyFX%2BPFeM4yevCVEE78VvLCVrla%2F%2B6uthayr4p%2F4kQQ50MPKxG1JCVgwlc8g2ySBoJmjS9sALvagQBzdYriGb1aE8lRaq3XDnGUaK6l5AOFqor%2FISr8fUI3UKxAKEj46Jq4O8EhgZLouWS8WqLbPkT8E55CY%2FHWvEop%2Fh4ZCADtNk%2FpAMPHHFe81IAxA61BnilKSWM8wk8PtwgY6pgHNeFGxzeLoPUaxMZ1dpO%2F9ELVa7jhQXgiQT%2FgflTs%2BeYdMkvje6Ic7VDCTFkuVbf3o6I%2Fs3L7gJMtdQh5DBNIbZvboep8ISQhh7rjJyPmoHUzleQw6ERuR%2BM5zOJRfYp3NESEk8HeMc2I%2FODy47vDFfFGrEAtcxjHtNZyJzolyi5RLSYlWGdowDVWk8aQgDNXwPQ2LeQuGwd%2Fxe9S0LQSsm%2Fd4%2FDPv&X-Amz-Signature=38c19366eb5ab543375a6aa791793b20f5cb31518cc518655414285396d9cf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUTXIUM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFCl70KCyWen0mgM5AwZo9AiZsvW5U3zlh5%2FlVHT1mbpAiBMkbjB4ruXtTpE2eMbM3DEO%2FQSt6o%2BOUK0aUTGODcOTSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0LMTgX8GrxFHYmO2KtwDJO2%2B43Q%2BJdsx4Bf6NJYPZJVyDZkjTPRMf43DhvjlftJhCIrt7QqC3OViu0J59xXoifrxxU%2FNWa3DXiBzw0JhdDDyqszN73zqKUXBOnYKc4V2E3PXgk2Y6%2F8OE2IwAumTIy%2Bmi6NwIIxmLBvRdA4h5kUws0epbOvA07nwhrKepX3GXYi3S6%2BlfG31ZPLh%2FUZFcr2Fj9IG0m9NPQZ1Eu7U2gtqwYYcVG5ecvY4cudk%2FzwkjOXf1oOfkcEPLsTtvHkFLVq9b9pwnjLc%2BKPv5Eh33Nitl10opGmsTM2VZpGV7%2BZ2Hm9PWJKtq%2FepvxoTq12WV3zfN%2BReD9h%2BmKfULppYl1vGcbMP2UKxOlyH2dG5VWhTv7wQBhpx%2Bkb1evFV3TV0mSKAHv%2FSxnT0OfJ6l24WOWpPnJHadtf0lJCMo5zqaKy1BneVjKgItyFX%2BPFeM4yevCVEE78VvLCVrla%2F%2B6uthayr4p%2F4kQQ50MPKxG1JCVgwlc8g2ySBoJmjS9sALvagQBzdYriGb1aE8lRaq3XDnGUaK6l5AOFqor%2FISr8fUI3UKxAKEj46Jq4O8EhgZLouWS8WqLbPkT8E55CY%2FHWvEop%2Fh4ZCADtNk%2FpAMPHHFe81IAxA61BnilKSWM8wk8PtwgY6pgHNeFGxzeLoPUaxMZ1dpO%2F9ELVa7jhQXgiQT%2FgflTs%2BeYdMkvje6Ic7VDCTFkuVbf3o6I%2Fs3L7gJMtdQh5DBNIbZvboep8ISQhh7rjJyPmoHUzleQw6ERuR%2BM5zOJRfYp3NESEk8HeMc2I%2FODy47vDFfFGrEAtcxjHtNZyJzolyi5RLSYlWGdowDVWk8aQgDNXwPQ2LeQuGwd%2Fxe9S0LQSsm%2Fd4%2FDPv&X-Amz-Signature=16f52498a855d9628fda8382219de33f85fe9d622fdd2fab5de79660ae7b94a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUTXIUM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFCl70KCyWen0mgM5AwZo9AiZsvW5U3zlh5%2FlVHT1mbpAiBMkbjB4ruXtTpE2eMbM3DEO%2FQSt6o%2BOUK0aUTGODcOTSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0LMTgX8GrxFHYmO2KtwDJO2%2B43Q%2BJdsx4Bf6NJYPZJVyDZkjTPRMf43DhvjlftJhCIrt7QqC3OViu0J59xXoifrxxU%2FNWa3DXiBzw0JhdDDyqszN73zqKUXBOnYKc4V2E3PXgk2Y6%2F8OE2IwAumTIy%2Bmi6NwIIxmLBvRdA4h5kUws0epbOvA07nwhrKepX3GXYi3S6%2BlfG31ZPLh%2FUZFcr2Fj9IG0m9NPQZ1Eu7U2gtqwYYcVG5ecvY4cudk%2FzwkjOXf1oOfkcEPLsTtvHkFLVq9b9pwnjLc%2BKPv5Eh33Nitl10opGmsTM2VZpGV7%2BZ2Hm9PWJKtq%2FepvxoTq12WV3zfN%2BReD9h%2BmKfULppYl1vGcbMP2UKxOlyH2dG5VWhTv7wQBhpx%2Bkb1evFV3TV0mSKAHv%2FSxnT0OfJ6l24WOWpPnJHadtf0lJCMo5zqaKy1BneVjKgItyFX%2BPFeM4yevCVEE78VvLCVrla%2F%2B6uthayr4p%2F4kQQ50MPKxG1JCVgwlc8g2ySBoJmjS9sALvagQBzdYriGb1aE8lRaq3XDnGUaK6l5AOFqor%2FISr8fUI3UKxAKEj46Jq4O8EhgZLouWS8WqLbPkT8E55CY%2FHWvEop%2Fh4ZCADtNk%2FpAMPHHFe81IAxA61BnilKSWM8wk8PtwgY6pgHNeFGxzeLoPUaxMZ1dpO%2F9ELVa7jhQXgiQT%2FgflTs%2BeYdMkvje6Ic7VDCTFkuVbf3o6I%2Fs3L7gJMtdQh5DBNIbZvboep8ISQhh7rjJyPmoHUzleQw6ERuR%2BM5zOJRfYp3NESEk8HeMc2I%2FODy47vDFfFGrEAtcxjHtNZyJzolyi5RLSYlWGdowDVWk8aQgDNXwPQ2LeQuGwd%2Fxe9S0LQSsm%2Fd4%2FDPv&X-Amz-Signature=ddd8360f2528e61f86bc7aff30426fe9d2b2858f6211e0ee42df57bfa102b42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUTXIUM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFCl70KCyWen0mgM5AwZo9AiZsvW5U3zlh5%2FlVHT1mbpAiBMkbjB4ruXtTpE2eMbM3DEO%2FQSt6o%2BOUK0aUTGODcOTSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0LMTgX8GrxFHYmO2KtwDJO2%2B43Q%2BJdsx4Bf6NJYPZJVyDZkjTPRMf43DhvjlftJhCIrt7QqC3OViu0J59xXoifrxxU%2FNWa3DXiBzw0JhdDDyqszN73zqKUXBOnYKc4V2E3PXgk2Y6%2F8OE2IwAumTIy%2Bmi6NwIIxmLBvRdA4h5kUws0epbOvA07nwhrKepX3GXYi3S6%2BlfG31ZPLh%2FUZFcr2Fj9IG0m9NPQZ1Eu7U2gtqwYYcVG5ecvY4cudk%2FzwkjOXf1oOfkcEPLsTtvHkFLVq9b9pwnjLc%2BKPv5Eh33Nitl10opGmsTM2VZpGV7%2BZ2Hm9PWJKtq%2FepvxoTq12WV3zfN%2BReD9h%2BmKfULppYl1vGcbMP2UKxOlyH2dG5VWhTv7wQBhpx%2Bkb1evFV3TV0mSKAHv%2FSxnT0OfJ6l24WOWpPnJHadtf0lJCMo5zqaKy1BneVjKgItyFX%2BPFeM4yevCVEE78VvLCVrla%2F%2B6uthayr4p%2F4kQQ50MPKxG1JCVgwlc8g2ySBoJmjS9sALvagQBzdYriGb1aE8lRaq3XDnGUaK6l5AOFqor%2FISr8fUI3UKxAKEj46Jq4O8EhgZLouWS8WqLbPkT8E55CY%2FHWvEop%2Fh4ZCADtNk%2FpAMPHHFe81IAxA61BnilKSWM8wk8PtwgY6pgHNeFGxzeLoPUaxMZ1dpO%2F9ELVa7jhQXgiQT%2FgflTs%2BeYdMkvje6Ic7VDCTFkuVbf3o6I%2Fs3L7gJMtdQh5DBNIbZvboep8ISQhh7rjJyPmoHUzleQw6ERuR%2BM5zOJRfYp3NESEk8HeMc2I%2FODy47vDFfFGrEAtcxjHtNZyJzolyi5RLSYlWGdowDVWk8aQgDNXwPQ2LeQuGwd%2Fxe9S0LQSsm%2Fd4%2FDPv&X-Amz-Signature=1ed9f2af0e58bac5be75df7c3392984bae535e93b564117b49a5a6fa70b44013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUTXIUM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFCl70KCyWen0mgM5AwZo9AiZsvW5U3zlh5%2FlVHT1mbpAiBMkbjB4ruXtTpE2eMbM3DEO%2FQSt6o%2BOUK0aUTGODcOTSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0LMTgX8GrxFHYmO2KtwDJO2%2B43Q%2BJdsx4Bf6NJYPZJVyDZkjTPRMf43DhvjlftJhCIrt7QqC3OViu0J59xXoifrxxU%2FNWa3DXiBzw0JhdDDyqszN73zqKUXBOnYKc4V2E3PXgk2Y6%2F8OE2IwAumTIy%2Bmi6NwIIxmLBvRdA4h5kUws0epbOvA07nwhrKepX3GXYi3S6%2BlfG31ZPLh%2FUZFcr2Fj9IG0m9NPQZ1Eu7U2gtqwYYcVG5ecvY4cudk%2FzwkjOXf1oOfkcEPLsTtvHkFLVq9b9pwnjLc%2BKPv5Eh33Nitl10opGmsTM2VZpGV7%2BZ2Hm9PWJKtq%2FepvxoTq12WV3zfN%2BReD9h%2BmKfULppYl1vGcbMP2UKxOlyH2dG5VWhTv7wQBhpx%2Bkb1evFV3TV0mSKAHv%2FSxnT0OfJ6l24WOWpPnJHadtf0lJCMo5zqaKy1BneVjKgItyFX%2BPFeM4yevCVEE78VvLCVrla%2F%2B6uthayr4p%2F4kQQ50MPKxG1JCVgwlc8g2ySBoJmjS9sALvagQBzdYriGb1aE8lRaq3XDnGUaK6l5AOFqor%2FISr8fUI3UKxAKEj46Jq4O8EhgZLouWS8WqLbPkT8E55CY%2FHWvEop%2Fh4ZCADtNk%2FpAMPHHFe81IAxA61BnilKSWM8wk8PtwgY6pgHNeFGxzeLoPUaxMZ1dpO%2F9ELVa7jhQXgiQT%2FgflTs%2BeYdMkvje6Ic7VDCTFkuVbf3o6I%2Fs3L7gJMtdQh5DBNIbZvboep8ISQhh7rjJyPmoHUzleQw6ERuR%2BM5zOJRfYp3NESEk8HeMc2I%2FODy47vDFfFGrEAtcxjHtNZyJzolyi5RLSYlWGdowDVWk8aQgDNXwPQ2LeQuGwd%2Fxe9S0LQSsm%2Fd4%2FDPv&X-Amz-Signature=16ca69cc01805cf4bad9746d13c3bb05a9d4721b5c3661b41b464bac9b879ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUTXIUM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFCl70KCyWen0mgM5AwZo9AiZsvW5U3zlh5%2FlVHT1mbpAiBMkbjB4ruXtTpE2eMbM3DEO%2FQSt6o%2BOUK0aUTGODcOTSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM0LMTgX8GrxFHYmO2KtwDJO2%2B43Q%2BJdsx4Bf6NJYPZJVyDZkjTPRMf43DhvjlftJhCIrt7QqC3OViu0J59xXoifrxxU%2FNWa3DXiBzw0JhdDDyqszN73zqKUXBOnYKc4V2E3PXgk2Y6%2F8OE2IwAumTIy%2Bmi6NwIIxmLBvRdA4h5kUws0epbOvA07nwhrKepX3GXYi3S6%2BlfG31ZPLh%2FUZFcr2Fj9IG0m9NPQZ1Eu7U2gtqwYYcVG5ecvY4cudk%2FzwkjOXf1oOfkcEPLsTtvHkFLVq9b9pwnjLc%2BKPv5Eh33Nitl10opGmsTM2VZpGV7%2BZ2Hm9PWJKtq%2FepvxoTq12WV3zfN%2BReD9h%2BmKfULppYl1vGcbMP2UKxOlyH2dG5VWhTv7wQBhpx%2Bkb1evFV3TV0mSKAHv%2FSxnT0OfJ6l24WOWpPnJHadtf0lJCMo5zqaKy1BneVjKgItyFX%2BPFeM4yevCVEE78VvLCVrla%2F%2B6uthayr4p%2F4kQQ50MPKxG1JCVgwlc8g2ySBoJmjS9sALvagQBzdYriGb1aE8lRaq3XDnGUaK6l5AOFqor%2FISr8fUI3UKxAKEj46Jq4O8EhgZLouWS8WqLbPkT8E55CY%2FHWvEop%2Fh4ZCADtNk%2FpAMPHHFe81IAxA61BnilKSWM8wk8PtwgY6pgHNeFGxzeLoPUaxMZ1dpO%2F9ELVa7jhQXgiQT%2FgflTs%2BeYdMkvje6Ic7VDCTFkuVbf3o6I%2Fs3L7gJMtdQh5DBNIbZvboep8ISQhh7rjJyPmoHUzleQw6ERuR%2BM5zOJRfYp3NESEk8HeMc2I%2FODy47vDFfFGrEAtcxjHtNZyJzolyi5RLSYlWGdowDVWk8aQgDNXwPQ2LeQuGwd%2Fxe9S0LQSsm%2Fd4%2FDPv&X-Amz-Signature=a6cb6a0a2d80815921be0b71e245276b12632d6f1dc5447220ed2ceaec7ad516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
