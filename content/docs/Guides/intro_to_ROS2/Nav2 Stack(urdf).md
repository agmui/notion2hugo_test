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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVPEUHV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4l2udoYaZnnoSeyKkSl1zXWRvT1j06uVByBYeSaF6kwIhAIybn%2Ftu0i0EwFubudI0nhlHVU5z8Cevjuwo72qhtlldKv8DCDEQABoMNjM3NDIzMTgzODA1Igx3lW1I6wKr8nE3gbMq3AMPw1lcRla1C1xJ6hrJIVXofkKDDkAF96Ebbt7Gm3sqqHEfxk18jJa7PQxStMC5v6dt%2BUcQKc8Gthd83se4l7fzQDSEALjT4fObmHGmHAcbLrlVcGh9VHyH5coEX%2F7TF6sUY4EjW%2FdSeZOT6W43HCP0HARaN%2BXrerkfvU6RN48NFLMue%2BN6Gv118PFulgdDil77aT3aWCWaGmU%2Fx1Ikxv9bmaV%2FZvI2GkcSFfngSl8PRuPfJdPBVrPLzrV58PUA7MBT26ayIe%2BCfJ%2BvVD7OIthojBrBORtOy5ryDaKZ9he2ukWrIdKDhZWNCXZjeAMxFgOzaMebPIjTZ2es1TeFccN61EWvWqbOOdoFysZiWhWLU0KaWEay%2FIp7Q3PEjQvl8cnLDirYLRJ9dyCt01nfcjDlwMAMGBW9u9Kyt3lYjcl4dpI1Yr%2FUJU3mNVJy6dKAT1rzjLxYvCMf%2F2pWnpd8HhWKvR%2Bf5xV6Ucfe%2FC84LpcASvcn1zrSG3E%2B9p4bC5S54i4ViOEPq6qTW3%2B6GjiI0lyXBVCBPwMXzYtlVE8wyMkj2pDda%2BDsDJ8fwuvEA9pOeNLUB4SiIekXZygW2M61nQEx6pmBBCifOSejCtdrWPzE6Mwij8hoD%2FxvIWcCcDDXkOvCBjqkAWnkzS0ss%2F%2FhUhexedgoGqWQVT1Ekvw2A%2Ft3CUiOzYB%2BvJRBDSYURxSmsOjASaUhmcQwru%2B3JQZAtCQiYAfVPY8%2Blg9mlYsa7crWZql9HBevMj8eoTH%2BCuzTPsikRMzQCc4DJGE7pEUUG8ZFTrAjAW9W5HAFV1q0fqIZOHo5CQFpFzg3vYNNhlqIyDaTkc4%2FT4kcqoBHltlF2ZdP1If8KmsyWzRW&X-Amz-Signature=78ba54df51b5de73107d54a5bcac6ae8e26ad0d601a32b98faec839483103284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVPEUHV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4l2udoYaZnnoSeyKkSl1zXWRvT1j06uVByBYeSaF6kwIhAIybn%2Ftu0i0EwFubudI0nhlHVU5z8Cevjuwo72qhtlldKv8DCDEQABoMNjM3NDIzMTgzODA1Igx3lW1I6wKr8nE3gbMq3AMPw1lcRla1C1xJ6hrJIVXofkKDDkAF96Ebbt7Gm3sqqHEfxk18jJa7PQxStMC5v6dt%2BUcQKc8Gthd83se4l7fzQDSEALjT4fObmHGmHAcbLrlVcGh9VHyH5coEX%2F7TF6sUY4EjW%2FdSeZOT6W43HCP0HARaN%2BXrerkfvU6RN48NFLMue%2BN6Gv118PFulgdDil77aT3aWCWaGmU%2Fx1Ikxv9bmaV%2FZvI2GkcSFfngSl8PRuPfJdPBVrPLzrV58PUA7MBT26ayIe%2BCfJ%2BvVD7OIthojBrBORtOy5ryDaKZ9he2ukWrIdKDhZWNCXZjeAMxFgOzaMebPIjTZ2es1TeFccN61EWvWqbOOdoFysZiWhWLU0KaWEay%2FIp7Q3PEjQvl8cnLDirYLRJ9dyCt01nfcjDlwMAMGBW9u9Kyt3lYjcl4dpI1Yr%2FUJU3mNVJy6dKAT1rzjLxYvCMf%2F2pWnpd8HhWKvR%2Bf5xV6Ucfe%2FC84LpcASvcn1zrSG3E%2B9p4bC5S54i4ViOEPq6qTW3%2B6GjiI0lyXBVCBPwMXzYtlVE8wyMkj2pDda%2BDsDJ8fwuvEA9pOeNLUB4SiIekXZygW2M61nQEx6pmBBCifOSejCtdrWPzE6Mwij8hoD%2FxvIWcCcDDXkOvCBjqkAWnkzS0ss%2F%2FhUhexedgoGqWQVT1Ekvw2A%2Ft3CUiOzYB%2BvJRBDSYURxSmsOjASaUhmcQwru%2B3JQZAtCQiYAfVPY8%2Blg9mlYsa7crWZql9HBevMj8eoTH%2BCuzTPsikRMzQCc4DJGE7pEUUG8ZFTrAjAW9W5HAFV1q0fqIZOHo5CQFpFzg3vYNNhlqIyDaTkc4%2FT4kcqoBHltlF2ZdP1If8KmsyWzRW&X-Amz-Signature=bcdab1e4a4067443bd3f8a4f8da2b712b372f0e9d680a4ef976025eed14c909c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVPEUHV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4l2udoYaZnnoSeyKkSl1zXWRvT1j06uVByBYeSaF6kwIhAIybn%2Ftu0i0EwFubudI0nhlHVU5z8Cevjuwo72qhtlldKv8DCDEQABoMNjM3NDIzMTgzODA1Igx3lW1I6wKr8nE3gbMq3AMPw1lcRla1C1xJ6hrJIVXofkKDDkAF96Ebbt7Gm3sqqHEfxk18jJa7PQxStMC5v6dt%2BUcQKc8Gthd83se4l7fzQDSEALjT4fObmHGmHAcbLrlVcGh9VHyH5coEX%2F7TF6sUY4EjW%2FdSeZOT6W43HCP0HARaN%2BXrerkfvU6RN48NFLMue%2BN6Gv118PFulgdDil77aT3aWCWaGmU%2Fx1Ikxv9bmaV%2FZvI2GkcSFfngSl8PRuPfJdPBVrPLzrV58PUA7MBT26ayIe%2BCfJ%2BvVD7OIthojBrBORtOy5ryDaKZ9he2ukWrIdKDhZWNCXZjeAMxFgOzaMebPIjTZ2es1TeFccN61EWvWqbOOdoFysZiWhWLU0KaWEay%2FIp7Q3PEjQvl8cnLDirYLRJ9dyCt01nfcjDlwMAMGBW9u9Kyt3lYjcl4dpI1Yr%2FUJU3mNVJy6dKAT1rzjLxYvCMf%2F2pWnpd8HhWKvR%2Bf5xV6Ucfe%2FC84LpcASvcn1zrSG3E%2B9p4bC5S54i4ViOEPq6qTW3%2B6GjiI0lyXBVCBPwMXzYtlVE8wyMkj2pDda%2BDsDJ8fwuvEA9pOeNLUB4SiIekXZygW2M61nQEx6pmBBCifOSejCtdrWPzE6Mwij8hoD%2FxvIWcCcDDXkOvCBjqkAWnkzS0ss%2F%2FhUhexedgoGqWQVT1Ekvw2A%2Ft3CUiOzYB%2BvJRBDSYURxSmsOjASaUhmcQwru%2B3JQZAtCQiYAfVPY8%2Blg9mlYsa7crWZql9HBevMj8eoTH%2BCuzTPsikRMzQCc4DJGE7pEUUG8ZFTrAjAW9W5HAFV1q0fqIZOHo5CQFpFzg3vYNNhlqIyDaTkc4%2FT4kcqoBHltlF2ZdP1If8KmsyWzRW&X-Amz-Signature=99486252700a830304193cfe0ae0152e99edc84315bd9456154e32efb9bf7fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVPEUHV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4l2udoYaZnnoSeyKkSl1zXWRvT1j06uVByBYeSaF6kwIhAIybn%2Ftu0i0EwFubudI0nhlHVU5z8Cevjuwo72qhtlldKv8DCDEQABoMNjM3NDIzMTgzODA1Igx3lW1I6wKr8nE3gbMq3AMPw1lcRla1C1xJ6hrJIVXofkKDDkAF96Ebbt7Gm3sqqHEfxk18jJa7PQxStMC5v6dt%2BUcQKc8Gthd83se4l7fzQDSEALjT4fObmHGmHAcbLrlVcGh9VHyH5coEX%2F7TF6sUY4EjW%2FdSeZOT6W43HCP0HARaN%2BXrerkfvU6RN48NFLMue%2BN6Gv118PFulgdDil77aT3aWCWaGmU%2Fx1Ikxv9bmaV%2FZvI2GkcSFfngSl8PRuPfJdPBVrPLzrV58PUA7MBT26ayIe%2BCfJ%2BvVD7OIthojBrBORtOy5ryDaKZ9he2ukWrIdKDhZWNCXZjeAMxFgOzaMebPIjTZ2es1TeFccN61EWvWqbOOdoFysZiWhWLU0KaWEay%2FIp7Q3PEjQvl8cnLDirYLRJ9dyCt01nfcjDlwMAMGBW9u9Kyt3lYjcl4dpI1Yr%2FUJU3mNVJy6dKAT1rzjLxYvCMf%2F2pWnpd8HhWKvR%2Bf5xV6Ucfe%2FC84LpcASvcn1zrSG3E%2B9p4bC5S54i4ViOEPq6qTW3%2B6GjiI0lyXBVCBPwMXzYtlVE8wyMkj2pDda%2BDsDJ8fwuvEA9pOeNLUB4SiIekXZygW2M61nQEx6pmBBCifOSejCtdrWPzE6Mwij8hoD%2FxvIWcCcDDXkOvCBjqkAWnkzS0ss%2F%2FhUhexedgoGqWQVT1Ekvw2A%2Ft3CUiOzYB%2BvJRBDSYURxSmsOjASaUhmcQwru%2B3JQZAtCQiYAfVPY8%2Blg9mlYsa7crWZql9HBevMj8eoTH%2BCuzTPsikRMzQCc4DJGE7pEUUG8ZFTrAjAW9W5HAFV1q0fqIZOHo5CQFpFzg3vYNNhlqIyDaTkc4%2FT4kcqoBHltlF2ZdP1If8KmsyWzRW&X-Amz-Signature=9f40b2548137060e4fb3d87d351bbe7c207d10b84e71554d9fd0c08568278afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVPEUHV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4l2udoYaZnnoSeyKkSl1zXWRvT1j06uVByBYeSaF6kwIhAIybn%2Ftu0i0EwFubudI0nhlHVU5z8Cevjuwo72qhtlldKv8DCDEQABoMNjM3NDIzMTgzODA1Igx3lW1I6wKr8nE3gbMq3AMPw1lcRla1C1xJ6hrJIVXofkKDDkAF96Ebbt7Gm3sqqHEfxk18jJa7PQxStMC5v6dt%2BUcQKc8Gthd83se4l7fzQDSEALjT4fObmHGmHAcbLrlVcGh9VHyH5coEX%2F7TF6sUY4EjW%2FdSeZOT6W43HCP0HARaN%2BXrerkfvU6RN48NFLMue%2BN6Gv118PFulgdDil77aT3aWCWaGmU%2Fx1Ikxv9bmaV%2FZvI2GkcSFfngSl8PRuPfJdPBVrPLzrV58PUA7MBT26ayIe%2BCfJ%2BvVD7OIthojBrBORtOy5ryDaKZ9he2ukWrIdKDhZWNCXZjeAMxFgOzaMebPIjTZ2es1TeFccN61EWvWqbOOdoFysZiWhWLU0KaWEay%2FIp7Q3PEjQvl8cnLDirYLRJ9dyCt01nfcjDlwMAMGBW9u9Kyt3lYjcl4dpI1Yr%2FUJU3mNVJy6dKAT1rzjLxYvCMf%2F2pWnpd8HhWKvR%2Bf5xV6Ucfe%2FC84LpcASvcn1zrSG3E%2B9p4bC5S54i4ViOEPq6qTW3%2B6GjiI0lyXBVCBPwMXzYtlVE8wyMkj2pDda%2BDsDJ8fwuvEA9pOeNLUB4SiIekXZygW2M61nQEx6pmBBCifOSejCtdrWPzE6Mwij8hoD%2FxvIWcCcDDXkOvCBjqkAWnkzS0ss%2F%2FhUhexedgoGqWQVT1Ekvw2A%2Ft3CUiOzYB%2BvJRBDSYURxSmsOjASaUhmcQwru%2B3JQZAtCQiYAfVPY8%2Blg9mlYsa7crWZql9HBevMj8eoTH%2BCuzTPsikRMzQCc4DJGE7pEUUG8ZFTrAjAW9W5HAFV1q0fqIZOHo5CQFpFzg3vYNNhlqIyDaTkc4%2FT4kcqoBHltlF2ZdP1If8KmsyWzRW&X-Amz-Signature=97c6913e61444edf54dbbe28fbba32148c881faac36221f96e1b933d03c977a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVPEUHV%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4l2udoYaZnnoSeyKkSl1zXWRvT1j06uVByBYeSaF6kwIhAIybn%2Ftu0i0EwFubudI0nhlHVU5z8Cevjuwo72qhtlldKv8DCDEQABoMNjM3NDIzMTgzODA1Igx3lW1I6wKr8nE3gbMq3AMPw1lcRla1C1xJ6hrJIVXofkKDDkAF96Ebbt7Gm3sqqHEfxk18jJa7PQxStMC5v6dt%2BUcQKc8Gthd83se4l7fzQDSEALjT4fObmHGmHAcbLrlVcGh9VHyH5coEX%2F7TF6sUY4EjW%2FdSeZOT6W43HCP0HARaN%2BXrerkfvU6RN48NFLMue%2BN6Gv118PFulgdDil77aT3aWCWaGmU%2Fx1Ikxv9bmaV%2FZvI2GkcSFfngSl8PRuPfJdPBVrPLzrV58PUA7MBT26ayIe%2BCfJ%2BvVD7OIthojBrBORtOy5ryDaKZ9he2ukWrIdKDhZWNCXZjeAMxFgOzaMebPIjTZ2es1TeFccN61EWvWqbOOdoFysZiWhWLU0KaWEay%2FIp7Q3PEjQvl8cnLDirYLRJ9dyCt01nfcjDlwMAMGBW9u9Kyt3lYjcl4dpI1Yr%2FUJU3mNVJy6dKAT1rzjLxYvCMf%2F2pWnpd8HhWKvR%2Bf5xV6Ucfe%2FC84LpcASvcn1zrSG3E%2B9p4bC5S54i4ViOEPq6qTW3%2B6GjiI0lyXBVCBPwMXzYtlVE8wyMkj2pDda%2BDsDJ8fwuvEA9pOeNLUB4SiIekXZygW2M61nQEx6pmBBCifOSejCtdrWPzE6Mwij8hoD%2FxvIWcCcDDXkOvCBjqkAWnkzS0ss%2F%2FhUhexedgoGqWQVT1Ekvw2A%2Ft3CUiOzYB%2BvJRBDSYURxSmsOjASaUhmcQwru%2B3JQZAtCQiYAfVPY8%2Blg9mlYsa7crWZql9HBevMj8eoTH%2BCuzTPsikRMzQCc4DJGE7pEUUG8ZFTrAjAW9W5HAFV1q0fqIZOHo5CQFpFzg3vYNNhlqIyDaTkc4%2FT4kcqoBHltlF2ZdP1If8KmsyWzRW&X-Amz-Signature=20a1e6c7353e414c6310a3cf74f86b424531d2c86676783fdacfc69c7ca3f7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
