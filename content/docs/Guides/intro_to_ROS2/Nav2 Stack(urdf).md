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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJWR2T6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHjKVKk1H2%2BAwvGI6DcbchSISkpEdDafWc6vI6FbrJXWAiEAxQR%2Fx6X1fNjoq4Yc5cGzyY6daG1eHHXDrF%2FA%2BjIjE4cq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFAMWHEba4TxZm0GqyrcA124MuFuglwHTADoIPNLZa1RO8OL7C3nW0pgBpKYe6hPKL8tnMT1ko%2FIf%2BYUJSDsq%2FRtsLGjLASqpykQLEdU5DtckotixmV6glik0P59v5e5EbTRJd8Jzn1ecvyBj2lJ1VdFgwO0t4Q0WNyfuHfL6G68XcM9VYkmsIIH%2BezTP%2FTAPwrY6%2F2LEDL6vC08quKF9E%2FBjEhD8xarsNqQLk0Zp0oFn2GqmiBfswj1hnKF0l6D45s6tm%2FB%2BuWhW8uuHqCeyVKJUuNNA18NVzwC1TMD6pL2prR7U4VC8PM%2Bgb6%2B9e493LGIV2IZrFKUhyXUi1tLC8MI0qbBtIHpiU6a0Gs9RqZvg1tc9LDdBW%2FsiCPNhfLbjO%2BkC9HhGQlQTE1UegMFaT2kpBlYnmq6iR0ywZP5XFy%2F8CqCQYibKdorQ3IycihHYggOAKAnT29QPykebYTA37XdHjFbrOzz1BJwb8o23Rs39hFqPNfLN0X6OdJ1AMCISCiIN8Evt4OpalL3q%2BEw0xIEoRTioCnuGzUzyEzzbpfcRh7pqgTU3clHUsnqNsDOCaxS%2F06XkPKo6sfWR5mbTtwUhm3VQbiP%2FhFcSTO7dWmfBsvWLsIexKAa%2FFuTdAEAaAjpCY9JploO4xp3MOGvrcMGOqUBgqqFM%2FCYL8tn%2BihXLnf%2FutZYbRRXl6Hto7A6d2ZiSqOOKKk10zra6QU%2BKtbRx3BHs%2FSD9vzShWa%2BBX%2BZvU6uhSW4eOkQuVT7aNo0vWX6SvitlzaPG57ZJIq7vfrVCp%2BaITDtnFlOhKr3i7JPjMeW8CyJ3yubZkUyAAdJkQC651Ijms8RNkRNORSSaf1mNcTaoQadE8D2u3ZCAeV4rrtYFjOaX9xN&X-Amz-Signature=d499dd430f20938d10ed622bd70b4d5ae3f4de45a42be3ddcfe1c3fda043820b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJWR2T6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHjKVKk1H2%2BAwvGI6DcbchSISkpEdDafWc6vI6FbrJXWAiEAxQR%2Fx6X1fNjoq4Yc5cGzyY6daG1eHHXDrF%2FA%2BjIjE4cq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFAMWHEba4TxZm0GqyrcA124MuFuglwHTADoIPNLZa1RO8OL7C3nW0pgBpKYe6hPKL8tnMT1ko%2FIf%2BYUJSDsq%2FRtsLGjLASqpykQLEdU5DtckotixmV6glik0P59v5e5EbTRJd8Jzn1ecvyBj2lJ1VdFgwO0t4Q0WNyfuHfL6G68XcM9VYkmsIIH%2BezTP%2FTAPwrY6%2F2LEDL6vC08quKF9E%2FBjEhD8xarsNqQLk0Zp0oFn2GqmiBfswj1hnKF0l6D45s6tm%2FB%2BuWhW8uuHqCeyVKJUuNNA18NVzwC1TMD6pL2prR7U4VC8PM%2Bgb6%2B9e493LGIV2IZrFKUhyXUi1tLC8MI0qbBtIHpiU6a0Gs9RqZvg1tc9LDdBW%2FsiCPNhfLbjO%2BkC9HhGQlQTE1UegMFaT2kpBlYnmq6iR0ywZP5XFy%2F8CqCQYibKdorQ3IycihHYggOAKAnT29QPykebYTA37XdHjFbrOzz1BJwb8o23Rs39hFqPNfLN0X6OdJ1AMCISCiIN8Evt4OpalL3q%2BEw0xIEoRTioCnuGzUzyEzzbpfcRh7pqgTU3clHUsnqNsDOCaxS%2F06XkPKo6sfWR5mbTtwUhm3VQbiP%2FhFcSTO7dWmfBsvWLsIexKAa%2FFuTdAEAaAjpCY9JploO4xp3MOGvrcMGOqUBgqqFM%2FCYL8tn%2BihXLnf%2FutZYbRRXl6Hto7A6d2ZiSqOOKKk10zra6QU%2BKtbRx3BHs%2FSD9vzShWa%2BBX%2BZvU6uhSW4eOkQuVT7aNo0vWX6SvitlzaPG57ZJIq7vfrVCp%2BaITDtnFlOhKr3i7JPjMeW8CyJ3yubZkUyAAdJkQC651Ijms8RNkRNORSSaf1mNcTaoQadE8D2u3ZCAeV4rrtYFjOaX9xN&X-Amz-Signature=de8068d5f30eb7af7f353d3e889ecb97d6e0af7b1a63a1998e6e66b7d6fe818e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJWR2T6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHjKVKk1H2%2BAwvGI6DcbchSISkpEdDafWc6vI6FbrJXWAiEAxQR%2Fx6X1fNjoq4Yc5cGzyY6daG1eHHXDrF%2FA%2BjIjE4cq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFAMWHEba4TxZm0GqyrcA124MuFuglwHTADoIPNLZa1RO8OL7C3nW0pgBpKYe6hPKL8tnMT1ko%2FIf%2BYUJSDsq%2FRtsLGjLASqpykQLEdU5DtckotixmV6glik0P59v5e5EbTRJd8Jzn1ecvyBj2lJ1VdFgwO0t4Q0WNyfuHfL6G68XcM9VYkmsIIH%2BezTP%2FTAPwrY6%2F2LEDL6vC08quKF9E%2FBjEhD8xarsNqQLk0Zp0oFn2GqmiBfswj1hnKF0l6D45s6tm%2FB%2BuWhW8uuHqCeyVKJUuNNA18NVzwC1TMD6pL2prR7U4VC8PM%2Bgb6%2B9e493LGIV2IZrFKUhyXUi1tLC8MI0qbBtIHpiU6a0Gs9RqZvg1tc9LDdBW%2FsiCPNhfLbjO%2BkC9HhGQlQTE1UegMFaT2kpBlYnmq6iR0ywZP5XFy%2F8CqCQYibKdorQ3IycihHYggOAKAnT29QPykebYTA37XdHjFbrOzz1BJwb8o23Rs39hFqPNfLN0X6OdJ1AMCISCiIN8Evt4OpalL3q%2BEw0xIEoRTioCnuGzUzyEzzbpfcRh7pqgTU3clHUsnqNsDOCaxS%2F06XkPKo6sfWR5mbTtwUhm3VQbiP%2FhFcSTO7dWmfBsvWLsIexKAa%2FFuTdAEAaAjpCY9JploO4xp3MOGvrcMGOqUBgqqFM%2FCYL8tn%2BihXLnf%2FutZYbRRXl6Hto7A6d2ZiSqOOKKk10zra6QU%2BKtbRx3BHs%2FSD9vzShWa%2BBX%2BZvU6uhSW4eOkQuVT7aNo0vWX6SvitlzaPG57ZJIq7vfrVCp%2BaITDtnFlOhKr3i7JPjMeW8CyJ3yubZkUyAAdJkQC651Ijms8RNkRNORSSaf1mNcTaoQadE8D2u3ZCAeV4rrtYFjOaX9xN&X-Amz-Signature=4a9e8dc704d7914631ec535117b210915764bae8514f975244e03853535742d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJWR2T6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHjKVKk1H2%2BAwvGI6DcbchSISkpEdDafWc6vI6FbrJXWAiEAxQR%2Fx6X1fNjoq4Yc5cGzyY6daG1eHHXDrF%2FA%2BjIjE4cq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFAMWHEba4TxZm0GqyrcA124MuFuglwHTADoIPNLZa1RO8OL7C3nW0pgBpKYe6hPKL8tnMT1ko%2FIf%2BYUJSDsq%2FRtsLGjLASqpykQLEdU5DtckotixmV6glik0P59v5e5EbTRJd8Jzn1ecvyBj2lJ1VdFgwO0t4Q0WNyfuHfL6G68XcM9VYkmsIIH%2BezTP%2FTAPwrY6%2F2LEDL6vC08quKF9E%2FBjEhD8xarsNqQLk0Zp0oFn2GqmiBfswj1hnKF0l6D45s6tm%2FB%2BuWhW8uuHqCeyVKJUuNNA18NVzwC1TMD6pL2prR7U4VC8PM%2Bgb6%2B9e493LGIV2IZrFKUhyXUi1tLC8MI0qbBtIHpiU6a0Gs9RqZvg1tc9LDdBW%2FsiCPNhfLbjO%2BkC9HhGQlQTE1UegMFaT2kpBlYnmq6iR0ywZP5XFy%2F8CqCQYibKdorQ3IycihHYggOAKAnT29QPykebYTA37XdHjFbrOzz1BJwb8o23Rs39hFqPNfLN0X6OdJ1AMCISCiIN8Evt4OpalL3q%2BEw0xIEoRTioCnuGzUzyEzzbpfcRh7pqgTU3clHUsnqNsDOCaxS%2F06XkPKo6sfWR5mbTtwUhm3VQbiP%2FhFcSTO7dWmfBsvWLsIexKAa%2FFuTdAEAaAjpCY9JploO4xp3MOGvrcMGOqUBgqqFM%2FCYL8tn%2BihXLnf%2FutZYbRRXl6Hto7A6d2ZiSqOOKKk10zra6QU%2BKtbRx3BHs%2FSD9vzShWa%2BBX%2BZvU6uhSW4eOkQuVT7aNo0vWX6SvitlzaPG57ZJIq7vfrVCp%2BaITDtnFlOhKr3i7JPjMeW8CyJ3yubZkUyAAdJkQC651Ijms8RNkRNORSSaf1mNcTaoQadE8D2u3ZCAeV4rrtYFjOaX9xN&X-Amz-Signature=ebc88b5cb3568b08c16dac8124b89ebac47da9005b6998f29fda171f0258db6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJWR2T6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHjKVKk1H2%2BAwvGI6DcbchSISkpEdDafWc6vI6FbrJXWAiEAxQR%2Fx6X1fNjoq4Yc5cGzyY6daG1eHHXDrF%2FA%2BjIjE4cq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFAMWHEba4TxZm0GqyrcA124MuFuglwHTADoIPNLZa1RO8OL7C3nW0pgBpKYe6hPKL8tnMT1ko%2FIf%2BYUJSDsq%2FRtsLGjLASqpykQLEdU5DtckotixmV6glik0P59v5e5EbTRJd8Jzn1ecvyBj2lJ1VdFgwO0t4Q0WNyfuHfL6G68XcM9VYkmsIIH%2BezTP%2FTAPwrY6%2F2LEDL6vC08quKF9E%2FBjEhD8xarsNqQLk0Zp0oFn2GqmiBfswj1hnKF0l6D45s6tm%2FB%2BuWhW8uuHqCeyVKJUuNNA18NVzwC1TMD6pL2prR7U4VC8PM%2Bgb6%2B9e493LGIV2IZrFKUhyXUi1tLC8MI0qbBtIHpiU6a0Gs9RqZvg1tc9LDdBW%2FsiCPNhfLbjO%2BkC9HhGQlQTE1UegMFaT2kpBlYnmq6iR0ywZP5XFy%2F8CqCQYibKdorQ3IycihHYggOAKAnT29QPykebYTA37XdHjFbrOzz1BJwb8o23Rs39hFqPNfLN0X6OdJ1AMCISCiIN8Evt4OpalL3q%2BEw0xIEoRTioCnuGzUzyEzzbpfcRh7pqgTU3clHUsnqNsDOCaxS%2F06XkPKo6sfWR5mbTtwUhm3VQbiP%2FhFcSTO7dWmfBsvWLsIexKAa%2FFuTdAEAaAjpCY9JploO4xp3MOGvrcMGOqUBgqqFM%2FCYL8tn%2BihXLnf%2FutZYbRRXl6Hto7A6d2ZiSqOOKKk10zra6QU%2BKtbRx3BHs%2FSD9vzShWa%2BBX%2BZvU6uhSW4eOkQuVT7aNo0vWX6SvitlzaPG57ZJIq7vfrVCp%2BaITDtnFlOhKr3i7JPjMeW8CyJ3yubZkUyAAdJkQC651Ijms8RNkRNORSSaf1mNcTaoQadE8D2u3ZCAeV4rrtYFjOaX9xN&X-Amz-Signature=fa2f82513f209ca6759475d004b20db7aaf2696e2731c80a2ee8bf45900a9003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJWR2T6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHjKVKk1H2%2BAwvGI6DcbchSISkpEdDafWc6vI6FbrJXWAiEAxQR%2Fx6X1fNjoq4Yc5cGzyY6daG1eHHXDrF%2FA%2BjIjE4cq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFAMWHEba4TxZm0GqyrcA124MuFuglwHTADoIPNLZa1RO8OL7C3nW0pgBpKYe6hPKL8tnMT1ko%2FIf%2BYUJSDsq%2FRtsLGjLASqpykQLEdU5DtckotixmV6glik0P59v5e5EbTRJd8Jzn1ecvyBj2lJ1VdFgwO0t4Q0WNyfuHfL6G68XcM9VYkmsIIH%2BezTP%2FTAPwrY6%2F2LEDL6vC08quKF9E%2FBjEhD8xarsNqQLk0Zp0oFn2GqmiBfswj1hnKF0l6D45s6tm%2FB%2BuWhW8uuHqCeyVKJUuNNA18NVzwC1TMD6pL2prR7U4VC8PM%2Bgb6%2B9e493LGIV2IZrFKUhyXUi1tLC8MI0qbBtIHpiU6a0Gs9RqZvg1tc9LDdBW%2FsiCPNhfLbjO%2BkC9HhGQlQTE1UegMFaT2kpBlYnmq6iR0ywZP5XFy%2F8CqCQYibKdorQ3IycihHYggOAKAnT29QPykebYTA37XdHjFbrOzz1BJwb8o23Rs39hFqPNfLN0X6OdJ1AMCISCiIN8Evt4OpalL3q%2BEw0xIEoRTioCnuGzUzyEzzbpfcRh7pqgTU3clHUsnqNsDOCaxS%2F06XkPKo6sfWR5mbTtwUhm3VQbiP%2FhFcSTO7dWmfBsvWLsIexKAa%2FFuTdAEAaAjpCY9JploO4xp3MOGvrcMGOqUBgqqFM%2FCYL8tn%2BihXLnf%2FutZYbRRXl6Hto7A6d2ZiSqOOKKk10zra6QU%2BKtbRx3BHs%2FSD9vzShWa%2BBX%2BZvU6uhSW4eOkQuVT7aNo0vWX6SvitlzaPG57ZJIq7vfrVCp%2BaITDtnFlOhKr3i7JPjMeW8CyJ3yubZkUyAAdJkQC651Ijms8RNkRNORSSaf1mNcTaoQadE8D2u3ZCAeV4rrtYFjOaX9xN&X-Amz-Signature=040d24be417927e523577f5776f45badb77339ae9e373c8c393ec244f547a696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
