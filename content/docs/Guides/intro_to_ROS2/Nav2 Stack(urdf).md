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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPPQW4F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqQsYyMfAsuqOthgv79CI13JRzQsUkRJqOzOnNnOvz0AiAsCwt3RDyrpj4OnjZPcJnB5HMKSKnOpufwc0PzP76OlyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpdJ99Nyxi48xyWmKtwDs4Uj9eC4l%2FqiFLImyEEutAS6Q8TbnIYQArdIAkDlr7AOiThpUzKLoyxAPHhS7MEAoG5zkwWaeDvBYxrKtyiBFy%2Fq8aLEANVc9SCIJuUHe7qJjEarqitLzBTRc%2F10NXWBui22uaFe2dHOWz45f6nl1Bzdtd75s0BrNwAwI9yVBcVUjyNd2sstt8DXHDYpXj31PRK7%2FyzdVPnL%2BdBaaBr5WhcjWvaCumlBpg4rts2KVXttou2abotO4E3ij3hxMuSGFuGmMjEGwDBhji8aJIHFAU8M2c8MgRlajR34W3IwcwgJg00lQDqMWKOtlRBpIDnlcrrJOfKSsmP2Pw%2F8YOCxGG5rzqM%2FxHoQAEBtZfH0gTV79agcIPRDnLsbXbUFayg2P%2BeionebpmlRd8%2FgaGDBpAyLcoqBgYMfonb%2B4cLrclmwpiIsGxCF%2FtH3NdTHQP%2FURTxpCg1DT5kJ7IjSbhZRLqaostAv5lraBpxEUJ36DbMloy0RUp%2B910zghwD35jdusEypQS%2B2Jnym6NIAvDDXzaIykgqqkbi9LWj45GG62VtsKXCEWjYgPb6Ih77OAkmIhTJWJErOE2maslA%2FtMG84Y8akdbUQ43vRdKRuIsEnfdlcHVaa%2BUCWJZVQq8w%2BN6fwgY6pgG9vr7519enWDkI7svCidOsdp7ojHl29MgmztztsVRC71EdixFB2Ps7HpLBN97G3uh37gl3xgf%2FKD2k0g6e%2FymYrSAouVTzRZoj%2FET%2BcGTh2Dbi3IPyz3BXVxRTYy1kMJq8qyrsIiIv3zodSCJ0ei5QnId9Hs4mNg7NpaW44Eu%2BcfKgWaxPULbMyNuxGq%2FuRyjtaeAEjBO8VySGmZdBGWvGQgjWtUuD&X-Amz-Signature=3b4d55a05e4915af0e2fc20f04db231aa3e216edbcc37dde095bbc2a47d128ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPPQW4F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqQsYyMfAsuqOthgv79CI13JRzQsUkRJqOzOnNnOvz0AiAsCwt3RDyrpj4OnjZPcJnB5HMKSKnOpufwc0PzP76OlyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpdJ99Nyxi48xyWmKtwDs4Uj9eC4l%2FqiFLImyEEutAS6Q8TbnIYQArdIAkDlr7AOiThpUzKLoyxAPHhS7MEAoG5zkwWaeDvBYxrKtyiBFy%2Fq8aLEANVc9SCIJuUHe7qJjEarqitLzBTRc%2F10NXWBui22uaFe2dHOWz45f6nl1Bzdtd75s0BrNwAwI9yVBcVUjyNd2sstt8DXHDYpXj31PRK7%2FyzdVPnL%2BdBaaBr5WhcjWvaCumlBpg4rts2KVXttou2abotO4E3ij3hxMuSGFuGmMjEGwDBhji8aJIHFAU8M2c8MgRlajR34W3IwcwgJg00lQDqMWKOtlRBpIDnlcrrJOfKSsmP2Pw%2F8YOCxGG5rzqM%2FxHoQAEBtZfH0gTV79agcIPRDnLsbXbUFayg2P%2BeionebpmlRd8%2FgaGDBpAyLcoqBgYMfonb%2B4cLrclmwpiIsGxCF%2FtH3NdTHQP%2FURTxpCg1DT5kJ7IjSbhZRLqaostAv5lraBpxEUJ36DbMloy0RUp%2B910zghwD35jdusEypQS%2B2Jnym6NIAvDDXzaIykgqqkbi9LWj45GG62VtsKXCEWjYgPb6Ih77OAkmIhTJWJErOE2maslA%2FtMG84Y8akdbUQ43vRdKRuIsEnfdlcHVaa%2BUCWJZVQq8w%2BN6fwgY6pgG9vr7519enWDkI7svCidOsdp7ojHl29MgmztztsVRC71EdixFB2Ps7HpLBN97G3uh37gl3xgf%2FKD2k0g6e%2FymYrSAouVTzRZoj%2FET%2BcGTh2Dbi3IPyz3BXVxRTYy1kMJq8qyrsIiIv3zodSCJ0ei5QnId9Hs4mNg7NpaW44Eu%2BcfKgWaxPULbMyNuxGq%2FuRyjtaeAEjBO8VySGmZdBGWvGQgjWtUuD&X-Amz-Signature=fbf756d380d7a4a7b6b3457c96d491b258fdfe7e06eb4b12f3f813735b5019bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPPQW4F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqQsYyMfAsuqOthgv79CI13JRzQsUkRJqOzOnNnOvz0AiAsCwt3RDyrpj4OnjZPcJnB5HMKSKnOpufwc0PzP76OlyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpdJ99Nyxi48xyWmKtwDs4Uj9eC4l%2FqiFLImyEEutAS6Q8TbnIYQArdIAkDlr7AOiThpUzKLoyxAPHhS7MEAoG5zkwWaeDvBYxrKtyiBFy%2Fq8aLEANVc9SCIJuUHe7qJjEarqitLzBTRc%2F10NXWBui22uaFe2dHOWz45f6nl1Bzdtd75s0BrNwAwI9yVBcVUjyNd2sstt8DXHDYpXj31PRK7%2FyzdVPnL%2BdBaaBr5WhcjWvaCumlBpg4rts2KVXttou2abotO4E3ij3hxMuSGFuGmMjEGwDBhji8aJIHFAU8M2c8MgRlajR34W3IwcwgJg00lQDqMWKOtlRBpIDnlcrrJOfKSsmP2Pw%2F8YOCxGG5rzqM%2FxHoQAEBtZfH0gTV79agcIPRDnLsbXbUFayg2P%2BeionebpmlRd8%2FgaGDBpAyLcoqBgYMfonb%2B4cLrclmwpiIsGxCF%2FtH3NdTHQP%2FURTxpCg1DT5kJ7IjSbhZRLqaostAv5lraBpxEUJ36DbMloy0RUp%2B910zghwD35jdusEypQS%2B2Jnym6NIAvDDXzaIykgqqkbi9LWj45GG62VtsKXCEWjYgPb6Ih77OAkmIhTJWJErOE2maslA%2FtMG84Y8akdbUQ43vRdKRuIsEnfdlcHVaa%2BUCWJZVQq8w%2BN6fwgY6pgG9vr7519enWDkI7svCidOsdp7ojHl29MgmztztsVRC71EdixFB2Ps7HpLBN97G3uh37gl3xgf%2FKD2k0g6e%2FymYrSAouVTzRZoj%2FET%2BcGTh2Dbi3IPyz3BXVxRTYy1kMJq8qyrsIiIv3zodSCJ0ei5QnId9Hs4mNg7NpaW44Eu%2BcfKgWaxPULbMyNuxGq%2FuRyjtaeAEjBO8VySGmZdBGWvGQgjWtUuD&X-Amz-Signature=de46cc87dbafec2b9a0a1afbe9ebdb2ec3fa83ad6d4b937ac8da4534e1299e50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPPQW4F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqQsYyMfAsuqOthgv79CI13JRzQsUkRJqOzOnNnOvz0AiAsCwt3RDyrpj4OnjZPcJnB5HMKSKnOpufwc0PzP76OlyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpdJ99Nyxi48xyWmKtwDs4Uj9eC4l%2FqiFLImyEEutAS6Q8TbnIYQArdIAkDlr7AOiThpUzKLoyxAPHhS7MEAoG5zkwWaeDvBYxrKtyiBFy%2Fq8aLEANVc9SCIJuUHe7qJjEarqitLzBTRc%2F10NXWBui22uaFe2dHOWz45f6nl1Bzdtd75s0BrNwAwI9yVBcVUjyNd2sstt8DXHDYpXj31PRK7%2FyzdVPnL%2BdBaaBr5WhcjWvaCumlBpg4rts2KVXttou2abotO4E3ij3hxMuSGFuGmMjEGwDBhji8aJIHFAU8M2c8MgRlajR34W3IwcwgJg00lQDqMWKOtlRBpIDnlcrrJOfKSsmP2Pw%2F8YOCxGG5rzqM%2FxHoQAEBtZfH0gTV79agcIPRDnLsbXbUFayg2P%2BeionebpmlRd8%2FgaGDBpAyLcoqBgYMfonb%2B4cLrclmwpiIsGxCF%2FtH3NdTHQP%2FURTxpCg1DT5kJ7IjSbhZRLqaostAv5lraBpxEUJ36DbMloy0RUp%2B910zghwD35jdusEypQS%2B2Jnym6NIAvDDXzaIykgqqkbi9LWj45GG62VtsKXCEWjYgPb6Ih77OAkmIhTJWJErOE2maslA%2FtMG84Y8akdbUQ43vRdKRuIsEnfdlcHVaa%2BUCWJZVQq8w%2BN6fwgY6pgG9vr7519enWDkI7svCidOsdp7ojHl29MgmztztsVRC71EdixFB2Ps7HpLBN97G3uh37gl3xgf%2FKD2k0g6e%2FymYrSAouVTzRZoj%2FET%2BcGTh2Dbi3IPyz3BXVxRTYy1kMJq8qyrsIiIv3zodSCJ0ei5QnId9Hs4mNg7NpaW44Eu%2BcfKgWaxPULbMyNuxGq%2FuRyjtaeAEjBO8VySGmZdBGWvGQgjWtUuD&X-Amz-Signature=7175ab3371b7585efac00a21ec30bd7c6b54b4dd6019e7f7ec99310e7ee1ce74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPPQW4F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqQsYyMfAsuqOthgv79CI13JRzQsUkRJqOzOnNnOvz0AiAsCwt3RDyrpj4OnjZPcJnB5HMKSKnOpufwc0PzP76OlyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpdJ99Nyxi48xyWmKtwDs4Uj9eC4l%2FqiFLImyEEutAS6Q8TbnIYQArdIAkDlr7AOiThpUzKLoyxAPHhS7MEAoG5zkwWaeDvBYxrKtyiBFy%2Fq8aLEANVc9SCIJuUHe7qJjEarqitLzBTRc%2F10NXWBui22uaFe2dHOWz45f6nl1Bzdtd75s0BrNwAwI9yVBcVUjyNd2sstt8DXHDYpXj31PRK7%2FyzdVPnL%2BdBaaBr5WhcjWvaCumlBpg4rts2KVXttou2abotO4E3ij3hxMuSGFuGmMjEGwDBhji8aJIHFAU8M2c8MgRlajR34W3IwcwgJg00lQDqMWKOtlRBpIDnlcrrJOfKSsmP2Pw%2F8YOCxGG5rzqM%2FxHoQAEBtZfH0gTV79agcIPRDnLsbXbUFayg2P%2BeionebpmlRd8%2FgaGDBpAyLcoqBgYMfonb%2B4cLrclmwpiIsGxCF%2FtH3NdTHQP%2FURTxpCg1DT5kJ7IjSbhZRLqaostAv5lraBpxEUJ36DbMloy0RUp%2B910zghwD35jdusEypQS%2B2Jnym6NIAvDDXzaIykgqqkbi9LWj45GG62VtsKXCEWjYgPb6Ih77OAkmIhTJWJErOE2maslA%2FtMG84Y8akdbUQ43vRdKRuIsEnfdlcHVaa%2BUCWJZVQq8w%2BN6fwgY6pgG9vr7519enWDkI7svCidOsdp7ojHl29MgmztztsVRC71EdixFB2Ps7HpLBN97G3uh37gl3xgf%2FKD2k0g6e%2FymYrSAouVTzRZoj%2FET%2BcGTh2Dbi3IPyz3BXVxRTYy1kMJq8qyrsIiIv3zodSCJ0ei5QnId9Hs4mNg7NpaW44Eu%2BcfKgWaxPULbMyNuxGq%2FuRyjtaeAEjBO8VySGmZdBGWvGQgjWtUuD&X-Amz-Signature=4f831d82826fa83e015b65d3eec1a79fbd9e591ab40f1d572453808fa1929528&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPPQW4F%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqQsYyMfAsuqOthgv79CI13JRzQsUkRJqOzOnNnOvz0AiAsCwt3RDyrpj4OnjZPcJnB5HMKSKnOpufwc0PzP76OlyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpdJ99Nyxi48xyWmKtwDs4Uj9eC4l%2FqiFLImyEEutAS6Q8TbnIYQArdIAkDlr7AOiThpUzKLoyxAPHhS7MEAoG5zkwWaeDvBYxrKtyiBFy%2Fq8aLEANVc9SCIJuUHe7qJjEarqitLzBTRc%2F10NXWBui22uaFe2dHOWz45f6nl1Bzdtd75s0BrNwAwI9yVBcVUjyNd2sstt8DXHDYpXj31PRK7%2FyzdVPnL%2BdBaaBr5WhcjWvaCumlBpg4rts2KVXttou2abotO4E3ij3hxMuSGFuGmMjEGwDBhji8aJIHFAU8M2c8MgRlajR34W3IwcwgJg00lQDqMWKOtlRBpIDnlcrrJOfKSsmP2Pw%2F8YOCxGG5rzqM%2FxHoQAEBtZfH0gTV79agcIPRDnLsbXbUFayg2P%2BeionebpmlRd8%2FgaGDBpAyLcoqBgYMfonb%2B4cLrclmwpiIsGxCF%2FtH3NdTHQP%2FURTxpCg1DT5kJ7IjSbhZRLqaostAv5lraBpxEUJ36DbMloy0RUp%2B910zghwD35jdusEypQS%2B2Jnym6NIAvDDXzaIykgqqkbi9LWj45GG62VtsKXCEWjYgPb6Ih77OAkmIhTJWJErOE2maslA%2FtMG84Y8akdbUQ43vRdKRuIsEnfdlcHVaa%2BUCWJZVQq8w%2BN6fwgY6pgG9vr7519enWDkI7svCidOsdp7ojHl29MgmztztsVRC71EdixFB2Ps7HpLBN97G3uh37gl3xgf%2FKD2k0g6e%2FymYrSAouVTzRZoj%2FET%2BcGTh2Dbi3IPyz3BXVxRTYy1kMJq8qyrsIiIv3zodSCJ0ei5QnId9Hs4mNg7NpaW44Eu%2BcfKgWaxPULbMyNuxGq%2FuRyjtaeAEjBO8VySGmZdBGWvGQgjWtUuD&X-Amz-Signature=c25a5ae6b521726507d283ac7962cf3fecafa9c917e50ca49c3723340b194ddf&X-Amz-SignedHeaders=host&x-id=GetObject)
