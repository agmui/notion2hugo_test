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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4T4VHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtsVHthL2OQG6Jb9Qpir3eLaAyJoJDvmaTZVcw1KcG6AiEAxGtW96qd06ZFmy8ZWnRUprcGknEU5FiAeFwuxRx2FvsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4XnDR09PO%2BcUF%2FXCrcA4U5HABK0CEwtPBOTYl6gK9SRU7KrWnbV8knBXLzxnnuy5u0wBpMkOCeBCq2yirYiWMriHAdq6BzSGF377AGTki%2BQOHZKgWN879vy4%2FDNtGvH7smf1eVbDJ9Xx1LaQV3eIh0dN%2F0xKGBMj7kPLfFc0KswghtNvTmHq49DeAK8zjP6B%2FyfW7syEDcA60J0gVnOXIKyRBcV3itcfNlulKwNE56cfvxok%2FN6QE9p2LbQ%2FeSgNF%2BC3d8ykHzcm5t5v5iNtw8dkSrd23fnuTFIVIcn86OlZ51TncyJuGQn4Q6%2BN2Ae6d6DxuQrVufRwB1jeEM93IXLwzfwXjRhsAOCYpeZmdo9fKV95IyeR2Ym9LF%2BLAMbqWRjuVLw38rGUKpZr1Sgkoqvxltq1G%2FboiUxqOWvjNPWUuvEVLxNAlgXjPRD5O13Tg4NETzbMlPZB%2FSKyIONHjVjG145JFWyJsu02be1FC5MjdHtdhg9ZAMtOtJ9RYB4JUeLFYWO4ExGe%2FZ7h66TNa2GbJytSwjCT9dKaWYYbsHw4%2FH%2B6t7PYasX%2BgjCcp%2BIIaJNB8xRbrUNbbPrVuvgr8xUJSpIzcbAX4cn3DEnIVtM2mwFIwccrM70uBagju16OQ59eWiZmUQqhvlMJnlyb4GOqUBy3Wru7Ke4yq9CBeoZaakC6nXHJ0AxuT3vnYQrLiBS12LByHGI4OfU02bfgEtHgyKjoQ21NRLOO5AGjM0kgvavIkCQpUVxzcHF7cyOYvWbozDEXg%2BVlPgCwT4CzQSYWf0YgHvDhM4ATQb4Ap%2BhaW3zLLNDRuLJXIfDcCZadROUMpGgDlgcaClqMVIHF31HvqvMOHk%2BEROPNZTsGAxh8KEV1yocx%2FA&X-Amz-Signature=f78d2da0c7f8e75333075a5d7a3c353dc9c3450336e8fd9f75c4a322df61cd38&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4T4VHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtsVHthL2OQG6Jb9Qpir3eLaAyJoJDvmaTZVcw1KcG6AiEAxGtW96qd06ZFmy8ZWnRUprcGknEU5FiAeFwuxRx2FvsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4XnDR09PO%2BcUF%2FXCrcA4U5HABK0CEwtPBOTYl6gK9SRU7KrWnbV8knBXLzxnnuy5u0wBpMkOCeBCq2yirYiWMriHAdq6BzSGF377AGTki%2BQOHZKgWN879vy4%2FDNtGvH7smf1eVbDJ9Xx1LaQV3eIh0dN%2F0xKGBMj7kPLfFc0KswghtNvTmHq49DeAK8zjP6B%2FyfW7syEDcA60J0gVnOXIKyRBcV3itcfNlulKwNE56cfvxok%2FN6QE9p2LbQ%2FeSgNF%2BC3d8ykHzcm5t5v5iNtw8dkSrd23fnuTFIVIcn86OlZ51TncyJuGQn4Q6%2BN2Ae6d6DxuQrVufRwB1jeEM93IXLwzfwXjRhsAOCYpeZmdo9fKV95IyeR2Ym9LF%2BLAMbqWRjuVLw38rGUKpZr1Sgkoqvxltq1G%2FboiUxqOWvjNPWUuvEVLxNAlgXjPRD5O13Tg4NETzbMlPZB%2FSKyIONHjVjG145JFWyJsu02be1FC5MjdHtdhg9ZAMtOtJ9RYB4JUeLFYWO4ExGe%2FZ7h66TNa2GbJytSwjCT9dKaWYYbsHw4%2FH%2B6t7PYasX%2BgjCcp%2BIIaJNB8xRbrUNbbPrVuvgr8xUJSpIzcbAX4cn3DEnIVtM2mwFIwccrM70uBagju16OQ59eWiZmUQqhvlMJnlyb4GOqUBy3Wru7Ke4yq9CBeoZaakC6nXHJ0AxuT3vnYQrLiBS12LByHGI4OfU02bfgEtHgyKjoQ21NRLOO5AGjM0kgvavIkCQpUVxzcHF7cyOYvWbozDEXg%2BVlPgCwT4CzQSYWf0YgHvDhM4ATQb4Ap%2BhaW3zLLNDRuLJXIfDcCZadROUMpGgDlgcaClqMVIHF31HvqvMOHk%2BEROPNZTsGAxh8KEV1yocx%2FA&X-Amz-Signature=6fad438ea0a413cc6f3888802b9dfa99f8ffb2fa58c1cb20f840aece1cca650d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4T4VHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtsVHthL2OQG6Jb9Qpir3eLaAyJoJDvmaTZVcw1KcG6AiEAxGtW96qd06ZFmy8ZWnRUprcGknEU5FiAeFwuxRx2FvsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4XnDR09PO%2BcUF%2FXCrcA4U5HABK0CEwtPBOTYl6gK9SRU7KrWnbV8knBXLzxnnuy5u0wBpMkOCeBCq2yirYiWMriHAdq6BzSGF377AGTki%2BQOHZKgWN879vy4%2FDNtGvH7smf1eVbDJ9Xx1LaQV3eIh0dN%2F0xKGBMj7kPLfFc0KswghtNvTmHq49DeAK8zjP6B%2FyfW7syEDcA60J0gVnOXIKyRBcV3itcfNlulKwNE56cfvxok%2FN6QE9p2LbQ%2FeSgNF%2BC3d8ykHzcm5t5v5iNtw8dkSrd23fnuTFIVIcn86OlZ51TncyJuGQn4Q6%2BN2Ae6d6DxuQrVufRwB1jeEM93IXLwzfwXjRhsAOCYpeZmdo9fKV95IyeR2Ym9LF%2BLAMbqWRjuVLw38rGUKpZr1Sgkoqvxltq1G%2FboiUxqOWvjNPWUuvEVLxNAlgXjPRD5O13Tg4NETzbMlPZB%2FSKyIONHjVjG145JFWyJsu02be1FC5MjdHtdhg9ZAMtOtJ9RYB4JUeLFYWO4ExGe%2FZ7h66TNa2GbJytSwjCT9dKaWYYbsHw4%2FH%2B6t7PYasX%2BgjCcp%2BIIaJNB8xRbrUNbbPrVuvgr8xUJSpIzcbAX4cn3DEnIVtM2mwFIwccrM70uBagju16OQ59eWiZmUQqhvlMJnlyb4GOqUBy3Wru7Ke4yq9CBeoZaakC6nXHJ0AxuT3vnYQrLiBS12LByHGI4OfU02bfgEtHgyKjoQ21NRLOO5AGjM0kgvavIkCQpUVxzcHF7cyOYvWbozDEXg%2BVlPgCwT4CzQSYWf0YgHvDhM4ATQb4Ap%2BhaW3zLLNDRuLJXIfDcCZadROUMpGgDlgcaClqMVIHF31HvqvMOHk%2BEROPNZTsGAxh8KEV1yocx%2FA&X-Amz-Signature=bb07b5a386117b3873d035d6559fc6d9912e592a3320c4d1f3c3ae4a63affaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4T4VHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtsVHthL2OQG6Jb9Qpir3eLaAyJoJDvmaTZVcw1KcG6AiEAxGtW96qd06ZFmy8ZWnRUprcGknEU5FiAeFwuxRx2FvsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4XnDR09PO%2BcUF%2FXCrcA4U5HABK0CEwtPBOTYl6gK9SRU7KrWnbV8knBXLzxnnuy5u0wBpMkOCeBCq2yirYiWMriHAdq6BzSGF377AGTki%2BQOHZKgWN879vy4%2FDNtGvH7smf1eVbDJ9Xx1LaQV3eIh0dN%2F0xKGBMj7kPLfFc0KswghtNvTmHq49DeAK8zjP6B%2FyfW7syEDcA60J0gVnOXIKyRBcV3itcfNlulKwNE56cfvxok%2FN6QE9p2LbQ%2FeSgNF%2BC3d8ykHzcm5t5v5iNtw8dkSrd23fnuTFIVIcn86OlZ51TncyJuGQn4Q6%2BN2Ae6d6DxuQrVufRwB1jeEM93IXLwzfwXjRhsAOCYpeZmdo9fKV95IyeR2Ym9LF%2BLAMbqWRjuVLw38rGUKpZr1Sgkoqvxltq1G%2FboiUxqOWvjNPWUuvEVLxNAlgXjPRD5O13Tg4NETzbMlPZB%2FSKyIONHjVjG145JFWyJsu02be1FC5MjdHtdhg9ZAMtOtJ9RYB4JUeLFYWO4ExGe%2FZ7h66TNa2GbJytSwjCT9dKaWYYbsHw4%2FH%2B6t7PYasX%2BgjCcp%2BIIaJNB8xRbrUNbbPrVuvgr8xUJSpIzcbAX4cn3DEnIVtM2mwFIwccrM70uBagju16OQ59eWiZmUQqhvlMJnlyb4GOqUBy3Wru7Ke4yq9CBeoZaakC6nXHJ0AxuT3vnYQrLiBS12LByHGI4OfU02bfgEtHgyKjoQ21NRLOO5AGjM0kgvavIkCQpUVxzcHF7cyOYvWbozDEXg%2BVlPgCwT4CzQSYWf0YgHvDhM4ATQb4Ap%2BhaW3zLLNDRuLJXIfDcCZadROUMpGgDlgcaClqMVIHF31HvqvMOHk%2BEROPNZTsGAxh8KEV1yocx%2FA&X-Amz-Signature=ed5be13eef538dabd22655658a3afac04b9b5010fb45f13b87209085373e068a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4T4VHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtsVHthL2OQG6Jb9Qpir3eLaAyJoJDvmaTZVcw1KcG6AiEAxGtW96qd06ZFmy8ZWnRUprcGknEU5FiAeFwuxRx2FvsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4XnDR09PO%2BcUF%2FXCrcA4U5HABK0CEwtPBOTYl6gK9SRU7KrWnbV8knBXLzxnnuy5u0wBpMkOCeBCq2yirYiWMriHAdq6BzSGF377AGTki%2BQOHZKgWN879vy4%2FDNtGvH7smf1eVbDJ9Xx1LaQV3eIh0dN%2F0xKGBMj7kPLfFc0KswghtNvTmHq49DeAK8zjP6B%2FyfW7syEDcA60J0gVnOXIKyRBcV3itcfNlulKwNE56cfvxok%2FN6QE9p2LbQ%2FeSgNF%2BC3d8ykHzcm5t5v5iNtw8dkSrd23fnuTFIVIcn86OlZ51TncyJuGQn4Q6%2BN2Ae6d6DxuQrVufRwB1jeEM93IXLwzfwXjRhsAOCYpeZmdo9fKV95IyeR2Ym9LF%2BLAMbqWRjuVLw38rGUKpZr1Sgkoqvxltq1G%2FboiUxqOWvjNPWUuvEVLxNAlgXjPRD5O13Tg4NETzbMlPZB%2FSKyIONHjVjG145JFWyJsu02be1FC5MjdHtdhg9ZAMtOtJ9RYB4JUeLFYWO4ExGe%2FZ7h66TNa2GbJytSwjCT9dKaWYYbsHw4%2FH%2B6t7PYasX%2BgjCcp%2BIIaJNB8xRbrUNbbPrVuvgr8xUJSpIzcbAX4cn3DEnIVtM2mwFIwccrM70uBagju16OQ59eWiZmUQqhvlMJnlyb4GOqUBy3Wru7Ke4yq9CBeoZaakC6nXHJ0AxuT3vnYQrLiBS12LByHGI4OfU02bfgEtHgyKjoQ21NRLOO5AGjM0kgvavIkCQpUVxzcHF7cyOYvWbozDEXg%2BVlPgCwT4CzQSYWf0YgHvDhM4ATQb4Ap%2BhaW3zLLNDRuLJXIfDcCZadROUMpGgDlgcaClqMVIHF31HvqvMOHk%2BEROPNZTsGAxh8KEV1yocx%2FA&X-Amz-Signature=1dd0ec9778ff02b7797dc8b72d3d04dc47feb0c0398ba6856ac7321a6c71803d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4T4VHP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtsVHthL2OQG6Jb9Qpir3eLaAyJoJDvmaTZVcw1KcG6AiEAxGtW96qd06ZFmy8ZWnRUprcGknEU5FiAeFwuxRx2FvsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4XnDR09PO%2BcUF%2FXCrcA4U5HABK0CEwtPBOTYl6gK9SRU7KrWnbV8knBXLzxnnuy5u0wBpMkOCeBCq2yirYiWMriHAdq6BzSGF377AGTki%2BQOHZKgWN879vy4%2FDNtGvH7smf1eVbDJ9Xx1LaQV3eIh0dN%2F0xKGBMj7kPLfFc0KswghtNvTmHq49DeAK8zjP6B%2FyfW7syEDcA60J0gVnOXIKyRBcV3itcfNlulKwNE56cfvxok%2FN6QE9p2LbQ%2FeSgNF%2BC3d8ykHzcm5t5v5iNtw8dkSrd23fnuTFIVIcn86OlZ51TncyJuGQn4Q6%2BN2Ae6d6DxuQrVufRwB1jeEM93IXLwzfwXjRhsAOCYpeZmdo9fKV95IyeR2Ym9LF%2BLAMbqWRjuVLw38rGUKpZr1Sgkoqvxltq1G%2FboiUxqOWvjNPWUuvEVLxNAlgXjPRD5O13Tg4NETzbMlPZB%2FSKyIONHjVjG145JFWyJsu02be1FC5MjdHtdhg9ZAMtOtJ9RYB4JUeLFYWO4ExGe%2FZ7h66TNa2GbJytSwjCT9dKaWYYbsHw4%2FH%2B6t7PYasX%2BgjCcp%2BIIaJNB8xRbrUNbbPrVuvgr8xUJSpIzcbAX4cn3DEnIVtM2mwFIwccrM70uBagju16OQ59eWiZmUQqhvlMJnlyb4GOqUBy3Wru7Ke4yq9CBeoZaakC6nXHJ0AxuT3vnYQrLiBS12LByHGI4OfU02bfgEtHgyKjoQ21NRLOO5AGjM0kgvavIkCQpUVxzcHF7cyOYvWbozDEXg%2BVlPgCwT4CzQSYWf0YgHvDhM4ATQb4Ap%2BhaW3zLLNDRuLJXIfDcCZadROUMpGgDlgcaClqMVIHF31HvqvMOHk%2BEROPNZTsGAxh8KEV1yocx%2FA&X-Amz-Signature=c705aeb7222c15244d6fc0d4290967b1c7d4dd5628219668416bb2b2dabaaad0&X-Amz-SignedHeaders=host&x-id=GetObject)
