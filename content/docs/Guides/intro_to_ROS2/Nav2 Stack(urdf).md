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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXOUMIB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2H9ViNgQZMPfdca4VIPCBSE1Bk4B5iTx3BmoBHGj%2F4AiEA3zFWWujSyKk%2Fe4KymCYIyu98HR1d2Z37IiF7S%2B6ABWYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqjuQ2W5Ccb0jzhFircAwzzQPFsug3nmKrqFKtfaQm8sy0tES6LN4dZ1k1qcOMXFryjcRL8UvBlpwrOuh5aEPnz314Us7%2FUPegRhpcFpmk3KBsWb5B3VwW%2B0G9dI%2F%2Bo6oU0rsv8k%2FXXwkmfcQnLv%2BNYGEGms9UliLOZm2cxwP1X%2BGyd9MvAKhOukb2n4BMP3d%2FxabqK%2BZE6L6904hNMKajTKeVTC%2FQxWXniY9MfR0gwvAaj0bISZ9fpcURObcnHZXXL9fP0KDg34BG5CW5YB%2F9OCvivsFi6ALzLNISqDxNjgyMqu1mbIfz8tEV9B2Tu3%2Bbl3Yf2%2Bh1bA%2FHWh1DzcM9EJ4QM0%2B9uG0nZZrlSz3mxjw9HQ6NazN88PttKWqKJSRg4lN3mEidbk2qY1%2B7%2Bw8NMH1UmTewW%2FDaL2sPd%2Bp5zZqFKHYSkLXnsnKeF4L9tDwbehWckNF3P5TYEruaRlyc7ki7Y%2FTjKXYCfoY7TmO2xdB8ZdtgOm0VwPUPnGnAQ4%2BRnNniIO24dtQsn5QXpv8im1Jg7%2FyqRfj5kWmHz9VcWSrwHnnwLqb7QK0FPx6UbH5ReFG4g3DXSt2Tmep%2F4CHWeb4ry8RN9rMuAfg%2FeqrWuBZtZdTBTA4vA%2FbzYopDpYpxeV8bue0ZgE26gMOiHo70GOqUBarwwlmFa8VyS0j65PvGUWmBxfKUp5%2FCQTb%2F4X7dE6fEpZ1rp0etToszVXTDAq0CjY0JlmggOn8OHDpQZw%2F1L%2B4gYudOehPyhIgK0ybqXYpdlSPCqvzFC7GlL3xuOvkb8kDEOJ46nwI0MH81Z%2BMd1Bgk%2BWxVH9f7kxBasUwdpqfWEB7hKmMjtD6o0ZxnzQBmnDvu2kT5buZghCXp2SivrePJYdJCa&X-Amz-Signature=78b3c21cd417bb366fb583aecc15e8d5fadf7f9a6b403d3fec7d322725f9f068&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXOUMIB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2H9ViNgQZMPfdca4VIPCBSE1Bk4B5iTx3BmoBHGj%2F4AiEA3zFWWujSyKk%2Fe4KymCYIyu98HR1d2Z37IiF7S%2B6ABWYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqjuQ2W5Ccb0jzhFircAwzzQPFsug3nmKrqFKtfaQm8sy0tES6LN4dZ1k1qcOMXFryjcRL8UvBlpwrOuh5aEPnz314Us7%2FUPegRhpcFpmk3KBsWb5B3VwW%2B0G9dI%2F%2Bo6oU0rsv8k%2FXXwkmfcQnLv%2BNYGEGms9UliLOZm2cxwP1X%2BGyd9MvAKhOukb2n4BMP3d%2FxabqK%2BZE6L6904hNMKajTKeVTC%2FQxWXniY9MfR0gwvAaj0bISZ9fpcURObcnHZXXL9fP0KDg34BG5CW5YB%2F9OCvivsFi6ALzLNISqDxNjgyMqu1mbIfz8tEV9B2Tu3%2Bbl3Yf2%2Bh1bA%2FHWh1DzcM9EJ4QM0%2B9uG0nZZrlSz3mxjw9HQ6NazN88PttKWqKJSRg4lN3mEidbk2qY1%2B7%2Bw8NMH1UmTewW%2FDaL2sPd%2Bp5zZqFKHYSkLXnsnKeF4L9tDwbehWckNF3P5TYEruaRlyc7ki7Y%2FTjKXYCfoY7TmO2xdB8ZdtgOm0VwPUPnGnAQ4%2BRnNniIO24dtQsn5QXpv8im1Jg7%2FyqRfj5kWmHz9VcWSrwHnnwLqb7QK0FPx6UbH5ReFG4g3DXSt2Tmep%2F4CHWeb4ry8RN9rMuAfg%2FeqrWuBZtZdTBTA4vA%2FbzYopDpYpxeV8bue0ZgE26gMOiHo70GOqUBarwwlmFa8VyS0j65PvGUWmBxfKUp5%2FCQTb%2F4X7dE6fEpZ1rp0etToszVXTDAq0CjY0JlmggOn8OHDpQZw%2F1L%2B4gYudOehPyhIgK0ybqXYpdlSPCqvzFC7GlL3xuOvkb8kDEOJ46nwI0MH81Z%2BMd1Bgk%2BWxVH9f7kxBasUwdpqfWEB7hKmMjtD6o0ZxnzQBmnDvu2kT5buZghCXp2SivrePJYdJCa&X-Amz-Signature=f1ddb1b7e4f11f49967e66331b5b32f3d5d6a5b9748f0e672fa3b033e6b9859f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXOUMIB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2H9ViNgQZMPfdca4VIPCBSE1Bk4B5iTx3BmoBHGj%2F4AiEA3zFWWujSyKk%2Fe4KymCYIyu98HR1d2Z37IiF7S%2B6ABWYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqjuQ2W5Ccb0jzhFircAwzzQPFsug3nmKrqFKtfaQm8sy0tES6LN4dZ1k1qcOMXFryjcRL8UvBlpwrOuh5aEPnz314Us7%2FUPegRhpcFpmk3KBsWb5B3VwW%2B0G9dI%2F%2Bo6oU0rsv8k%2FXXwkmfcQnLv%2BNYGEGms9UliLOZm2cxwP1X%2BGyd9MvAKhOukb2n4BMP3d%2FxabqK%2BZE6L6904hNMKajTKeVTC%2FQxWXniY9MfR0gwvAaj0bISZ9fpcURObcnHZXXL9fP0KDg34BG5CW5YB%2F9OCvivsFi6ALzLNISqDxNjgyMqu1mbIfz8tEV9B2Tu3%2Bbl3Yf2%2Bh1bA%2FHWh1DzcM9EJ4QM0%2B9uG0nZZrlSz3mxjw9HQ6NazN88PttKWqKJSRg4lN3mEidbk2qY1%2B7%2Bw8NMH1UmTewW%2FDaL2sPd%2Bp5zZqFKHYSkLXnsnKeF4L9tDwbehWckNF3P5TYEruaRlyc7ki7Y%2FTjKXYCfoY7TmO2xdB8ZdtgOm0VwPUPnGnAQ4%2BRnNniIO24dtQsn5QXpv8im1Jg7%2FyqRfj5kWmHz9VcWSrwHnnwLqb7QK0FPx6UbH5ReFG4g3DXSt2Tmep%2F4CHWeb4ry8RN9rMuAfg%2FeqrWuBZtZdTBTA4vA%2FbzYopDpYpxeV8bue0ZgE26gMOiHo70GOqUBarwwlmFa8VyS0j65PvGUWmBxfKUp5%2FCQTb%2F4X7dE6fEpZ1rp0etToszVXTDAq0CjY0JlmggOn8OHDpQZw%2F1L%2B4gYudOehPyhIgK0ybqXYpdlSPCqvzFC7GlL3xuOvkb8kDEOJ46nwI0MH81Z%2BMd1Bgk%2BWxVH9f7kxBasUwdpqfWEB7hKmMjtD6o0ZxnzQBmnDvu2kT5buZghCXp2SivrePJYdJCa&X-Amz-Signature=8d23e32e726d5342b92701da692154c1629cdee1e4317b07fd444cb3b6ce8791&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXOUMIB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2H9ViNgQZMPfdca4VIPCBSE1Bk4B5iTx3BmoBHGj%2F4AiEA3zFWWujSyKk%2Fe4KymCYIyu98HR1d2Z37IiF7S%2B6ABWYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqjuQ2W5Ccb0jzhFircAwzzQPFsug3nmKrqFKtfaQm8sy0tES6LN4dZ1k1qcOMXFryjcRL8UvBlpwrOuh5aEPnz314Us7%2FUPegRhpcFpmk3KBsWb5B3VwW%2B0G9dI%2F%2Bo6oU0rsv8k%2FXXwkmfcQnLv%2BNYGEGms9UliLOZm2cxwP1X%2BGyd9MvAKhOukb2n4BMP3d%2FxabqK%2BZE6L6904hNMKajTKeVTC%2FQxWXniY9MfR0gwvAaj0bISZ9fpcURObcnHZXXL9fP0KDg34BG5CW5YB%2F9OCvivsFi6ALzLNISqDxNjgyMqu1mbIfz8tEV9B2Tu3%2Bbl3Yf2%2Bh1bA%2FHWh1DzcM9EJ4QM0%2B9uG0nZZrlSz3mxjw9HQ6NazN88PttKWqKJSRg4lN3mEidbk2qY1%2B7%2Bw8NMH1UmTewW%2FDaL2sPd%2Bp5zZqFKHYSkLXnsnKeF4L9tDwbehWckNF3P5TYEruaRlyc7ki7Y%2FTjKXYCfoY7TmO2xdB8ZdtgOm0VwPUPnGnAQ4%2BRnNniIO24dtQsn5QXpv8im1Jg7%2FyqRfj5kWmHz9VcWSrwHnnwLqb7QK0FPx6UbH5ReFG4g3DXSt2Tmep%2F4CHWeb4ry8RN9rMuAfg%2FeqrWuBZtZdTBTA4vA%2FbzYopDpYpxeV8bue0ZgE26gMOiHo70GOqUBarwwlmFa8VyS0j65PvGUWmBxfKUp5%2FCQTb%2F4X7dE6fEpZ1rp0etToszVXTDAq0CjY0JlmggOn8OHDpQZw%2F1L%2B4gYudOehPyhIgK0ybqXYpdlSPCqvzFC7GlL3xuOvkb8kDEOJ46nwI0MH81Z%2BMd1Bgk%2BWxVH9f7kxBasUwdpqfWEB7hKmMjtD6o0ZxnzQBmnDvu2kT5buZghCXp2SivrePJYdJCa&X-Amz-Signature=75190fc6f51cf20497d1cc17e225572b87b175e7d9a14050a87dba19349c1cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXOUMIB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2H9ViNgQZMPfdca4VIPCBSE1Bk4B5iTx3BmoBHGj%2F4AiEA3zFWWujSyKk%2Fe4KymCYIyu98HR1d2Z37IiF7S%2B6ABWYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqjuQ2W5Ccb0jzhFircAwzzQPFsug3nmKrqFKtfaQm8sy0tES6LN4dZ1k1qcOMXFryjcRL8UvBlpwrOuh5aEPnz314Us7%2FUPegRhpcFpmk3KBsWb5B3VwW%2B0G9dI%2F%2Bo6oU0rsv8k%2FXXwkmfcQnLv%2BNYGEGms9UliLOZm2cxwP1X%2BGyd9MvAKhOukb2n4BMP3d%2FxabqK%2BZE6L6904hNMKajTKeVTC%2FQxWXniY9MfR0gwvAaj0bISZ9fpcURObcnHZXXL9fP0KDg34BG5CW5YB%2F9OCvivsFi6ALzLNISqDxNjgyMqu1mbIfz8tEV9B2Tu3%2Bbl3Yf2%2Bh1bA%2FHWh1DzcM9EJ4QM0%2B9uG0nZZrlSz3mxjw9HQ6NazN88PttKWqKJSRg4lN3mEidbk2qY1%2B7%2Bw8NMH1UmTewW%2FDaL2sPd%2Bp5zZqFKHYSkLXnsnKeF4L9tDwbehWckNF3P5TYEruaRlyc7ki7Y%2FTjKXYCfoY7TmO2xdB8ZdtgOm0VwPUPnGnAQ4%2BRnNniIO24dtQsn5QXpv8im1Jg7%2FyqRfj5kWmHz9VcWSrwHnnwLqb7QK0FPx6UbH5ReFG4g3DXSt2Tmep%2F4CHWeb4ry8RN9rMuAfg%2FeqrWuBZtZdTBTA4vA%2FbzYopDpYpxeV8bue0ZgE26gMOiHo70GOqUBarwwlmFa8VyS0j65PvGUWmBxfKUp5%2FCQTb%2F4X7dE6fEpZ1rp0etToszVXTDAq0CjY0JlmggOn8OHDpQZw%2F1L%2B4gYudOehPyhIgK0ybqXYpdlSPCqvzFC7GlL3xuOvkb8kDEOJ46nwI0MH81Z%2BMd1Bgk%2BWxVH9f7kxBasUwdpqfWEB7hKmMjtD6o0ZxnzQBmnDvu2kT5buZghCXp2SivrePJYdJCa&X-Amz-Signature=8c899638e43c89067112ef3b02aead0ced1c5926d356875e7d05cd7e4b8afdae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXOUMIB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2H9ViNgQZMPfdca4VIPCBSE1Bk4B5iTx3BmoBHGj%2F4AiEA3zFWWujSyKk%2Fe4KymCYIyu98HR1d2Z37IiF7S%2B6ABWYqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqjuQ2W5Ccb0jzhFircAwzzQPFsug3nmKrqFKtfaQm8sy0tES6LN4dZ1k1qcOMXFryjcRL8UvBlpwrOuh5aEPnz314Us7%2FUPegRhpcFpmk3KBsWb5B3VwW%2B0G9dI%2F%2Bo6oU0rsv8k%2FXXwkmfcQnLv%2BNYGEGms9UliLOZm2cxwP1X%2BGyd9MvAKhOukb2n4BMP3d%2FxabqK%2BZE6L6904hNMKajTKeVTC%2FQxWXniY9MfR0gwvAaj0bISZ9fpcURObcnHZXXL9fP0KDg34BG5CW5YB%2F9OCvivsFi6ALzLNISqDxNjgyMqu1mbIfz8tEV9B2Tu3%2Bbl3Yf2%2Bh1bA%2FHWh1DzcM9EJ4QM0%2B9uG0nZZrlSz3mxjw9HQ6NazN88PttKWqKJSRg4lN3mEidbk2qY1%2B7%2Bw8NMH1UmTewW%2FDaL2sPd%2Bp5zZqFKHYSkLXnsnKeF4L9tDwbehWckNF3P5TYEruaRlyc7ki7Y%2FTjKXYCfoY7TmO2xdB8ZdtgOm0VwPUPnGnAQ4%2BRnNniIO24dtQsn5QXpv8im1Jg7%2FyqRfj5kWmHz9VcWSrwHnnwLqb7QK0FPx6UbH5ReFG4g3DXSt2Tmep%2F4CHWeb4ry8RN9rMuAfg%2FeqrWuBZtZdTBTA4vA%2FbzYopDpYpxeV8bue0ZgE26gMOiHo70GOqUBarwwlmFa8VyS0j65PvGUWmBxfKUp5%2FCQTb%2F4X7dE6fEpZ1rp0etToszVXTDAq0CjY0JlmggOn8OHDpQZw%2F1L%2B4gYudOehPyhIgK0ybqXYpdlSPCqvzFC7GlL3xuOvkb8kDEOJ46nwI0MH81Z%2BMd1Bgk%2BWxVH9f7kxBasUwdpqfWEB7hKmMjtD6o0ZxnzQBmnDvu2kT5buZghCXp2SivrePJYdJCa&X-Amz-Signature=768855be764ce430972db857e770ddfd740dfc97d49cdfbc2379e9e9894a0c5e&X-Amz-SignedHeaders=host&x-id=GetObject)
