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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGYISUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIByuVaSusU7ylcOdQHNSaWYVNBojuXw97W%2FOAkhcZVjWAiEAyj21r3tRtJhCFrofUCiScGPyjArIYquq8CMlhBvigtQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK1XwzLxYeGfj4jpXircA7u1I7p6afruV4%2FbY5SdW0j8kBr4wHBDJphNQ0K2yGEEsVmEajBbLF%2BRESX5Y05ayGMrfXx87SCr%2Bb1Cc3aAPN%2Fdxh%2B%2FY7VN3kl99Jp7dGnWA%2FR2TVbGqlM6Ri%2FjOlk4Xa3ugmrTr8Kyp%2FuhCR5cQBikEe1G3LD%2FfU4KO%2Fowv4sEihOXGktkgQNgSy6HfUgfAXy%2B6hH%2F8Ok1f42mOpEPhVV520xc0R%2FHs6y74FfhZG%2Fkvx1wFhI1ROTE%2BKmHkON%2BazLFkIQHQrBsIHzDY2AL0Qx0cf2XOgwh9K9MUORgs1UqyRboycVCMppgGEL2IrSBP3pfAvrRE6SoCquJAEyRpZ6OYtfsGK4IZ1M%2Fz6dmC9Fwy6%2FHHWHefo%2F4LskQt%2Fs6Nr2Ob2PQUtRmeEo6h900jEl471QHYUZD6RdZpPmAODysNu3DMZlnlKoUupp%2BNF8k8HmscLB7zA3tPXPLRACcXQVikd7jlCYgpbZnmuc%2FgRw5suLQBa1YUktdcoaJDC5WMe56kNBzD9SKL3pMEpN6KADyTVPi7HAzhIhuml9oIpKEM44xEFYRB7poaPt85oG7TnqHg5H%2F5mncPEzP8snd4DROAVBoC%2BOs5JpfYBoQPSmHfipKTPgZGnpKMeE1MPC9s8IGOqUB4zpVbCVXxz9ftSvxiWgxIG3Rl2OU%2Fn4mK8CftHRUhArT%2BqGrTX7vVWN4dE4sFFs93pKmxdJFTFN4CWpjYRDhmctYt9f0MBmPbtKzFCWSB2MdQydhuz0jpOrhu41eucs7dAniS9JVquOySkwoKlwaK6Fun%2FrN1K1BCQcGHd%2B%2Bimmi1n8%2BvqQ4i%2FK5b2VofNutc9se9Zw%2FcCKUAq%2BI81Iejvis72%2FX&X-Amz-Signature=5f30819698a690a6e58cfd2b4325dc5af9e2011bef67cad10206d4761eacd8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGYISUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIByuVaSusU7ylcOdQHNSaWYVNBojuXw97W%2FOAkhcZVjWAiEAyj21r3tRtJhCFrofUCiScGPyjArIYquq8CMlhBvigtQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK1XwzLxYeGfj4jpXircA7u1I7p6afruV4%2FbY5SdW0j8kBr4wHBDJphNQ0K2yGEEsVmEajBbLF%2BRESX5Y05ayGMrfXx87SCr%2Bb1Cc3aAPN%2Fdxh%2B%2FY7VN3kl99Jp7dGnWA%2FR2TVbGqlM6Ri%2FjOlk4Xa3ugmrTr8Kyp%2FuhCR5cQBikEe1G3LD%2FfU4KO%2Fowv4sEihOXGktkgQNgSy6HfUgfAXy%2B6hH%2F8Ok1f42mOpEPhVV520xc0R%2FHs6y74FfhZG%2Fkvx1wFhI1ROTE%2BKmHkON%2BazLFkIQHQrBsIHzDY2AL0Qx0cf2XOgwh9K9MUORgs1UqyRboycVCMppgGEL2IrSBP3pfAvrRE6SoCquJAEyRpZ6OYtfsGK4IZ1M%2Fz6dmC9Fwy6%2FHHWHefo%2F4LskQt%2Fs6Nr2Ob2PQUtRmeEo6h900jEl471QHYUZD6RdZpPmAODysNu3DMZlnlKoUupp%2BNF8k8HmscLB7zA3tPXPLRACcXQVikd7jlCYgpbZnmuc%2FgRw5suLQBa1YUktdcoaJDC5WMe56kNBzD9SKL3pMEpN6KADyTVPi7HAzhIhuml9oIpKEM44xEFYRB7poaPt85oG7TnqHg5H%2F5mncPEzP8snd4DROAVBoC%2BOs5JpfYBoQPSmHfipKTPgZGnpKMeE1MPC9s8IGOqUB4zpVbCVXxz9ftSvxiWgxIG3Rl2OU%2Fn4mK8CftHRUhArT%2BqGrTX7vVWN4dE4sFFs93pKmxdJFTFN4CWpjYRDhmctYt9f0MBmPbtKzFCWSB2MdQydhuz0jpOrhu41eucs7dAniS9JVquOySkwoKlwaK6Fun%2FrN1K1BCQcGHd%2B%2Bimmi1n8%2BvqQ4i%2FK5b2VofNutc9se9Zw%2FcCKUAq%2BI81Iejvis72%2FX&X-Amz-Signature=d2d2785a98a541ab191ccb6f936db874687a2df93d24307c1777a1bd43c01b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGYISUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIByuVaSusU7ylcOdQHNSaWYVNBojuXw97W%2FOAkhcZVjWAiEAyj21r3tRtJhCFrofUCiScGPyjArIYquq8CMlhBvigtQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK1XwzLxYeGfj4jpXircA7u1I7p6afruV4%2FbY5SdW0j8kBr4wHBDJphNQ0K2yGEEsVmEajBbLF%2BRESX5Y05ayGMrfXx87SCr%2Bb1Cc3aAPN%2Fdxh%2B%2FY7VN3kl99Jp7dGnWA%2FR2TVbGqlM6Ri%2FjOlk4Xa3ugmrTr8Kyp%2FuhCR5cQBikEe1G3LD%2FfU4KO%2Fowv4sEihOXGktkgQNgSy6HfUgfAXy%2B6hH%2F8Ok1f42mOpEPhVV520xc0R%2FHs6y74FfhZG%2Fkvx1wFhI1ROTE%2BKmHkON%2BazLFkIQHQrBsIHzDY2AL0Qx0cf2XOgwh9K9MUORgs1UqyRboycVCMppgGEL2IrSBP3pfAvrRE6SoCquJAEyRpZ6OYtfsGK4IZ1M%2Fz6dmC9Fwy6%2FHHWHefo%2F4LskQt%2Fs6Nr2Ob2PQUtRmeEo6h900jEl471QHYUZD6RdZpPmAODysNu3DMZlnlKoUupp%2BNF8k8HmscLB7zA3tPXPLRACcXQVikd7jlCYgpbZnmuc%2FgRw5suLQBa1YUktdcoaJDC5WMe56kNBzD9SKL3pMEpN6KADyTVPi7HAzhIhuml9oIpKEM44xEFYRB7poaPt85oG7TnqHg5H%2F5mncPEzP8snd4DROAVBoC%2BOs5JpfYBoQPSmHfipKTPgZGnpKMeE1MPC9s8IGOqUB4zpVbCVXxz9ftSvxiWgxIG3Rl2OU%2Fn4mK8CftHRUhArT%2BqGrTX7vVWN4dE4sFFs93pKmxdJFTFN4CWpjYRDhmctYt9f0MBmPbtKzFCWSB2MdQydhuz0jpOrhu41eucs7dAniS9JVquOySkwoKlwaK6Fun%2FrN1K1BCQcGHd%2B%2Bimmi1n8%2BvqQ4i%2FK5b2VofNutc9se9Zw%2FcCKUAq%2BI81Iejvis72%2FX&X-Amz-Signature=73c8779d7d73410dcb9c2a6120f329a53ba0123bbabe6d3b6d724d9027e212e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGYISUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIByuVaSusU7ylcOdQHNSaWYVNBojuXw97W%2FOAkhcZVjWAiEAyj21r3tRtJhCFrofUCiScGPyjArIYquq8CMlhBvigtQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK1XwzLxYeGfj4jpXircA7u1I7p6afruV4%2FbY5SdW0j8kBr4wHBDJphNQ0K2yGEEsVmEajBbLF%2BRESX5Y05ayGMrfXx87SCr%2Bb1Cc3aAPN%2Fdxh%2B%2FY7VN3kl99Jp7dGnWA%2FR2TVbGqlM6Ri%2FjOlk4Xa3ugmrTr8Kyp%2FuhCR5cQBikEe1G3LD%2FfU4KO%2Fowv4sEihOXGktkgQNgSy6HfUgfAXy%2B6hH%2F8Ok1f42mOpEPhVV520xc0R%2FHs6y74FfhZG%2Fkvx1wFhI1ROTE%2BKmHkON%2BazLFkIQHQrBsIHzDY2AL0Qx0cf2XOgwh9K9MUORgs1UqyRboycVCMppgGEL2IrSBP3pfAvrRE6SoCquJAEyRpZ6OYtfsGK4IZ1M%2Fz6dmC9Fwy6%2FHHWHefo%2F4LskQt%2Fs6Nr2Ob2PQUtRmeEo6h900jEl471QHYUZD6RdZpPmAODysNu3DMZlnlKoUupp%2BNF8k8HmscLB7zA3tPXPLRACcXQVikd7jlCYgpbZnmuc%2FgRw5suLQBa1YUktdcoaJDC5WMe56kNBzD9SKL3pMEpN6KADyTVPi7HAzhIhuml9oIpKEM44xEFYRB7poaPt85oG7TnqHg5H%2F5mncPEzP8snd4DROAVBoC%2BOs5JpfYBoQPSmHfipKTPgZGnpKMeE1MPC9s8IGOqUB4zpVbCVXxz9ftSvxiWgxIG3Rl2OU%2Fn4mK8CftHRUhArT%2BqGrTX7vVWN4dE4sFFs93pKmxdJFTFN4CWpjYRDhmctYt9f0MBmPbtKzFCWSB2MdQydhuz0jpOrhu41eucs7dAniS9JVquOySkwoKlwaK6Fun%2FrN1K1BCQcGHd%2B%2Bimmi1n8%2BvqQ4i%2FK5b2VofNutc9se9Zw%2FcCKUAq%2BI81Iejvis72%2FX&X-Amz-Signature=5574aebf240466c11b34d0b11b4cef06fbcd81142bded341146529290ea4706c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGYISUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIByuVaSusU7ylcOdQHNSaWYVNBojuXw97W%2FOAkhcZVjWAiEAyj21r3tRtJhCFrofUCiScGPyjArIYquq8CMlhBvigtQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK1XwzLxYeGfj4jpXircA7u1I7p6afruV4%2FbY5SdW0j8kBr4wHBDJphNQ0K2yGEEsVmEajBbLF%2BRESX5Y05ayGMrfXx87SCr%2Bb1Cc3aAPN%2Fdxh%2B%2FY7VN3kl99Jp7dGnWA%2FR2TVbGqlM6Ri%2FjOlk4Xa3ugmrTr8Kyp%2FuhCR5cQBikEe1G3LD%2FfU4KO%2Fowv4sEihOXGktkgQNgSy6HfUgfAXy%2B6hH%2F8Ok1f42mOpEPhVV520xc0R%2FHs6y74FfhZG%2Fkvx1wFhI1ROTE%2BKmHkON%2BazLFkIQHQrBsIHzDY2AL0Qx0cf2XOgwh9K9MUORgs1UqyRboycVCMppgGEL2IrSBP3pfAvrRE6SoCquJAEyRpZ6OYtfsGK4IZ1M%2Fz6dmC9Fwy6%2FHHWHefo%2F4LskQt%2Fs6Nr2Ob2PQUtRmeEo6h900jEl471QHYUZD6RdZpPmAODysNu3DMZlnlKoUupp%2BNF8k8HmscLB7zA3tPXPLRACcXQVikd7jlCYgpbZnmuc%2FgRw5suLQBa1YUktdcoaJDC5WMe56kNBzD9SKL3pMEpN6KADyTVPi7HAzhIhuml9oIpKEM44xEFYRB7poaPt85oG7TnqHg5H%2F5mncPEzP8snd4DROAVBoC%2BOs5JpfYBoQPSmHfipKTPgZGnpKMeE1MPC9s8IGOqUB4zpVbCVXxz9ftSvxiWgxIG3Rl2OU%2Fn4mK8CftHRUhArT%2BqGrTX7vVWN4dE4sFFs93pKmxdJFTFN4CWpjYRDhmctYt9f0MBmPbtKzFCWSB2MdQydhuz0jpOrhu41eucs7dAniS9JVquOySkwoKlwaK6Fun%2FrN1K1BCQcGHd%2B%2Bimmi1n8%2BvqQ4i%2FK5b2VofNutc9se9Zw%2FcCKUAq%2BI81Iejvis72%2FX&X-Amz-Signature=f1ee74fa6a349dac080fc9d878407071840197835eb9cc7932b193750f3c1e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGYISUW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIByuVaSusU7ylcOdQHNSaWYVNBojuXw97W%2FOAkhcZVjWAiEAyj21r3tRtJhCFrofUCiScGPyjArIYquq8CMlhBvigtQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK1XwzLxYeGfj4jpXircA7u1I7p6afruV4%2FbY5SdW0j8kBr4wHBDJphNQ0K2yGEEsVmEajBbLF%2BRESX5Y05ayGMrfXx87SCr%2Bb1Cc3aAPN%2Fdxh%2B%2FY7VN3kl99Jp7dGnWA%2FR2TVbGqlM6Ri%2FjOlk4Xa3ugmrTr8Kyp%2FuhCR5cQBikEe1G3LD%2FfU4KO%2Fowv4sEihOXGktkgQNgSy6HfUgfAXy%2B6hH%2F8Ok1f42mOpEPhVV520xc0R%2FHs6y74FfhZG%2Fkvx1wFhI1ROTE%2BKmHkON%2BazLFkIQHQrBsIHzDY2AL0Qx0cf2XOgwh9K9MUORgs1UqyRboycVCMppgGEL2IrSBP3pfAvrRE6SoCquJAEyRpZ6OYtfsGK4IZ1M%2Fz6dmC9Fwy6%2FHHWHefo%2F4LskQt%2Fs6Nr2Ob2PQUtRmeEo6h900jEl471QHYUZD6RdZpPmAODysNu3DMZlnlKoUupp%2BNF8k8HmscLB7zA3tPXPLRACcXQVikd7jlCYgpbZnmuc%2FgRw5suLQBa1YUktdcoaJDC5WMe56kNBzD9SKL3pMEpN6KADyTVPi7HAzhIhuml9oIpKEM44xEFYRB7poaPt85oG7TnqHg5H%2F5mncPEzP8snd4DROAVBoC%2BOs5JpfYBoQPSmHfipKTPgZGnpKMeE1MPC9s8IGOqUB4zpVbCVXxz9ftSvxiWgxIG3Rl2OU%2Fn4mK8CftHRUhArT%2BqGrTX7vVWN4dE4sFFs93pKmxdJFTFN4CWpjYRDhmctYt9f0MBmPbtKzFCWSB2MdQydhuz0jpOrhu41eucs7dAniS9JVquOySkwoKlwaK6Fun%2FrN1K1BCQcGHd%2B%2Bimmi1n8%2BvqQ4i%2FK5b2VofNutc9se9Zw%2FcCKUAq%2BI81Iejvis72%2FX&X-Amz-Signature=467948b5e5d0d3f86b034b3d7d9a76a44eac2faa1fe0813c9bf62d93d07234a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
