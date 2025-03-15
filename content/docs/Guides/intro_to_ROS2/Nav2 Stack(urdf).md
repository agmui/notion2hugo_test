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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WS43D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFVyJY6E9l2jo9BBTcF4AhKCcGRrABrr6OLEcNL6VTQIgDFYN911VIQt5EX%2BrPMAgQPssp5zfLsjTa39ITJ2ISZ4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAdog0kQQXfICGEkayrcA8BY444%2BPXWN9euR9vEVoe6VXJSeWir4kiIXjCgbCmMPXW%2FD0ejE%2FH5lFdtIVnP%2BXNkX1ReTMiJcEdlTC23yj4hvXP0VKFJkcW3xwiB6cIAauCgCFVU3miuszntyUEauTW6yAUpvBUEPpFA9gc%2FVTRHcZQHkc9BUUMaUB1PnmyYGNZl%2BMedkVLzVnu2C8cBGq19MgT9NZEKCmaX7ePwlimuKz4Njj1B%2Bt%2B%2FRh9UWVEdkUPdgjU6pyssS%2B8vWllrZU6bpFdvo8MPe6KLUaZ1nTI6dJXtJ52rNCOBctSTxY%2BgTtYFoD36Um99lPCHqFZYAQK6RF0N1oGTeisIy%2B9nA9RvNk8cqeMhTtEpAABXguawnGDPgcWCsj0O8Sk71PZKvWlDIrP4GFVszOemiModsCeVbIkYGswh1RNU37dLvZT8fC%2BMi%2F27NAqJ63Jjtv8Eo9XL8iY%2BSzl956z8PlU4U4a4%2FKh1Uo%2BWrmKiRFfjs3FvRLfa9E4ZycvnZMm93SUlMtXoZDPX8MoX1uPlyBV3ffuJ1APbKlOxBfyYJa818XZrE8JcIFl44P2v%2BlYVC3IJ4gIQSScr04pO3OBKHTi5CGOUNgYTn8%2B1oej1st2fsRvmPOVaeyO7lvPJ1wPvzMO6N174GOqUBTsnEqL18E98%2BL2G%2FUVAqvjLvaa2pvKj98epGINIEHzzaF7QfRC00%2BF%2Bx3Lg6DW7wvq1TtQko4VzYVPPVDj1j6zq4SjSflishqLv5Knl3s7Rfo0EjlS7TCv%2FrVvWKn1ep3EOPEzO7bbQeb%2FwvJmL8Bq2V9ONuFlaQTicGlwGjRTA%2BlNA2e9iLqadwIF0%2Fw9vjlqHgMO1oLX5BLeoBj9qzzOg6wrW9&X-Amz-Signature=e40d47b90b337adc0ba4a8618b212cf60fb243832ce56540983b1f1238db104b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WS43D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFVyJY6E9l2jo9BBTcF4AhKCcGRrABrr6OLEcNL6VTQIgDFYN911VIQt5EX%2BrPMAgQPssp5zfLsjTa39ITJ2ISZ4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAdog0kQQXfICGEkayrcA8BY444%2BPXWN9euR9vEVoe6VXJSeWir4kiIXjCgbCmMPXW%2FD0ejE%2FH5lFdtIVnP%2BXNkX1ReTMiJcEdlTC23yj4hvXP0VKFJkcW3xwiB6cIAauCgCFVU3miuszntyUEauTW6yAUpvBUEPpFA9gc%2FVTRHcZQHkc9BUUMaUB1PnmyYGNZl%2BMedkVLzVnu2C8cBGq19MgT9NZEKCmaX7ePwlimuKz4Njj1B%2Bt%2B%2FRh9UWVEdkUPdgjU6pyssS%2B8vWllrZU6bpFdvo8MPe6KLUaZ1nTI6dJXtJ52rNCOBctSTxY%2BgTtYFoD36Um99lPCHqFZYAQK6RF0N1oGTeisIy%2B9nA9RvNk8cqeMhTtEpAABXguawnGDPgcWCsj0O8Sk71PZKvWlDIrP4GFVszOemiModsCeVbIkYGswh1RNU37dLvZT8fC%2BMi%2F27NAqJ63Jjtv8Eo9XL8iY%2BSzl956z8PlU4U4a4%2FKh1Uo%2BWrmKiRFfjs3FvRLfa9E4ZycvnZMm93SUlMtXoZDPX8MoX1uPlyBV3ffuJ1APbKlOxBfyYJa818XZrE8JcIFl44P2v%2BlYVC3IJ4gIQSScr04pO3OBKHTi5CGOUNgYTn8%2B1oej1st2fsRvmPOVaeyO7lvPJ1wPvzMO6N174GOqUBTsnEqL18E98%2BL2G%2FUVAqvjLvaa2pvKj98epGINIEHzzaF7QfRC00%2BF%2Bx3Lg6DW7wvq1TtQko4VzYVPPVDj1j6zq4SjSflishqLv5Knl3s7Rfo0EjlS7TCv%2FrVvWKn1ep3EOPEzO7bbQeb%2FwvJmL8Bq2V9ONuFlaQTicGlwGjRTA%2BlNA2e9iLqadwIF0%2Fw9vjlqHgMO1oLX5BLeoBj9qzzOg6wrW9&X-Amz-Signature=4c3f115d46f39659d684ef2b9f538b0c89ed3ce239fbe29d63928054e5d55717&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WS43D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFVyJY6E9l2jo9BBTcF4AhKCcGRrABrr6OLEcNL6VTQIgDFYN911VIQt5EX%2BrPMAgQPssp5zfLsjTa39ITJ2ISZ4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAdog0kQQXfICGEkayrcA8BY444%2BPXWN9euR9vEVoe6VXJSeWir4kiIXjCgbCmMPXW%2FD0ejE%2FH5lFdtIVnP%2BXNkX1ReTMiJcEdlTC23yj4hvXP0VKFJkcW3xwiB6cIAauCgCFVU3miuszntyUEauTW6yAUpvBUEPpFA9gc%2FVTRHcZQHkc9BUUMaUB1PnmyYGNZl%2BMedkVLzVnu2C8cBGq19MgT9NZEKCmaX7ePwlimuKz4Njj1B%2Bt%2B%2FRh9UWVEdkUPdgjU6pyssS%2B8vWllrZU6bpFdvo8MPe6KLUaZ1nTI6dJXtJ52rNCOBctSTxY%2BgTtYFoD36Um99lPCHqFZYAQK6RF0N1oGTeisIy%2B9nA9RvNk8cqeMhTtEpAABXguawnGDPgcWCsj0O8Sk71PZKvWlDIrP4GFVszOemiModsCeVbIkYGswh1RNU37dLvZT8fC%2BMi%2F27NAqJ63Jjtv8Eo9XL8iY%2BSzl956z8PlU4U4a4%2FKh1Uo%2BWrmKiRFfjs3FvRLfa9E4ZycvnZMm93SUlMtXoZDPX8MoX1uPlyBV3ffuJ1APbKlOxBfyYJa818XZrE8JcIFl44P2v%2BlYVC3IJ4gIQSScr04pO3OBKHTi5CGOUNgYTn8%2B1oej1st2fsRvmPOVaeyO7lvPJ1wPvzMO6N174GOqUBTsnEqL18E98%2BL2G%2FUVAqvjLvaa2pvKj98epGINIEHzzaF7QfRC00%2BF%2Bx3Lg6DW7wvq1TtQko4VzYVPPVDj1j6zq4SjSflishqLv5Knl3s7Rfo0EjlS7TCv%2FrVvWKn1ep3EOPEzO7bbQeb%2FwvJmL8Bq2V9ONuFlaQTicGlwGjRTA%2BlNA2e9iLqadwIF0%2Fw9vjlqHgMO1oLX5BLeoBj9qzzOg6wrW9&X-Amz-Signature=af6f1a9ed87e5a4c3d52183466b9eab68c23cf13e30e84478ad4f98d4db14fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WS43D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFVyJY6E9l2jo9BBTcF4AhKCcGRrABrr6OLEcNL6VTQIgDFYN911VIQt5EX%2BrPMAgQPssp5zfLsjTa39ITJ2ISZ4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAdog0kQQXfICGEkayrcA8BY444%2BPXWN9euR9vEVoe6VXJSeWir4kiIXjCgbCmMPXW%2FD0ejE%2FH5lFdtIVnP%2BXNkX1ReTMiJcEdlTC23yj4hvXP0VKFJkcW3xwiB6cIAauCgCFVU3miuszntyUEauTW6yAUpvBUEPpFA9gc%2FVTRHcZQHkc9BUUMaUB1PnmyYGNZl%2BMedkVLzVnu2C8cBGq19MgT9NZEKCmaX7ePwlimuKz4Njj1B%2Bt%2B%2FRh9UWVEdkUPdgjU6pyssS%2B8vWllrZU6bpFdvo8MPe6KLUaZ1nTI6dJXtJ52rNCOBctSTxY%2BgTtYFoD36Um99lPCHqFZYAQK6RF0N1oGTeisIy%2B9nA9RvNk8cqeMhTtEpAABXguawnGDPgcWCsj0O8Sk71PZKvWlDIrP4GFVszOemiModsCeVbIkYGswh1RNU37dLvZT8fC%2BMi%2F27NAqJ63Jjtv8Eo9XL8iY%2BSzl956z8PlU4U4a4%2FKh1Uo%2BWrmKiRFfjs3FvRLfa9E4ZycvnZMm93SUlMtXoZDPX8MoX1uPlyBV3ffuJ1APbKlOxBfyYJa818XZrE8JcIFl44P2v%2BlYVC3IJ4gIQSScr04pO3OBKHTi5CGOUNgYTn8%2B1oej1st2fsRvmPOVaeyO7lvPJ1wPvzMO6N174GOqUBTsnEqL18E98%2BL2G%2FUVAqvjLvaa2pvKj98epGINIEHzzaF7QfRC00%2BF%2Bx3Lg6DW7wvq1TtQko4VzYVPPVDj1j6zq4SjSflishqLv5Knl3s7Rfo0EjlS7TCv%2FrVvWKn1ep3EOPEzO7bbQeb%2FwvJmL8Bq2V9ONuFlaQTicGlwGjRTA%2BlNA2e9iLqadwIF0%2Fw9vjlqHgMO1oLX5BLeoBj9qzzOg6wrW9&X-Amz-Signature=1063975db404ea49357c7d1869b01dddf8d442d902e5e213a0347631e3ea32f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WS43D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFVyJY6E9l2jo9BBTcF4AhKCcGRrABrr6OLEcNL6VTQIgDFYN911VIQt5EX%2BrPMAgQPssp5zfLsjTa39ITJ2ISZ4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAdog0kQQXfICGEkayrcA8BY444%2BPXWN9euR9vEVoe6VXJSeWir4kiIXjCgbCmMPXW%2FD0ejE%2FH5lFdtIVnP%2BXNkX1ReTMiJcEdlTC23yj4hvXP0VKFJkcW3xwiB6cIAauCgCFVU3miuszntyUEauTW6yAUpvBUEPpFA9gc%2FVTRHcZQHkc9BUUMaUB1PnmyYGNZl%2BMedkVLzVnu2C8cBGq19MgT9NZEKCmaX7ePwlimuKz4Njj1B%2Bt%2B%2FRh9UWVEdkUPdgjU6pyssS%2B8vWllrZU6bpFdvo8MPe6KLUaZ1nTI6dJXtJ52rNCOBctSTxY%2BgTtYFoD36Um99lPCHqFZYAQK6RF0N1oGTeisIy%2B9nA9RvNk8cqeMhTtEpAABXguawnGDPgcWCsj0O8Sk71PZKvWlDIrP4GFVszOemiModsCeVbIkYGswh1RNU37dLvZT8fC%2BMi%2F27NAqJ63Jjtv8Eo9XL8iY%2BSzl956z8PlU4U4a4%2FKh1Uo%2BWrmKiRFfjs3FvRLfa9E4ZycvnZMm93SUlMtXoZDPX8MoX1uPlyBV3ffuJ1APbKlOxBfyYJa818XZrE8JcIFl44P2v%2BlYVC3IJ4gIQSScr04pO3OBKHTi5CGOUNgYTn8%2B1oej1st2fsRvmPOVaeyO7lvPJ1wPvzMO6N174GOqUBTsnEqL18E98%2BL2G%2FUVAqvjLvaa2pvKj98epGINIEHzzaF7QfRC00%2BF%2Bx3Lg6DW7wvq1TtQko4VzYVPPVDj1j6zq4SjSflishqLv5Knl3s7Rfo0EjlS7TCv%2FrVvWKn1ep3EOPEzO7bbQeb%2FwvJmL8Bq2V9ONuFlaQTicGlwGjRTA%2BlNA2e9iLqadwIF0%2Fw9vjlqHgMO1oLX5BLeoBj9qzzOg6wrW9&X-Amz-Signature=181483fae5e443aba9ffe579ca63e3e8da5b0cd387650dc98988758b494e6f76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32WS43D%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFVyJY6E9l2jo9BBTcF4AhKCcGRrABrr6OLEcNL6VTQIgDFYN911VIQt5EX%2BrPMAgQPssp5zfLsjTa39ITJ2ISZ4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDAdog0kQQXfICGEkayrcA8BY444%2BPXWN9euR9vEVoe6VXJSeWir4kiIXjCgbCmMPXW%2FD0ejE%2FH5lFdtIVnP%2BXNkX1ReTMiJcEdlTC23yj4hvXP0VKFJkcW3xwiB6cIAauCgCFVU3miuszntyUEauTW6yAUpvBUEPpFA9gc%2FVTRHcZQHkc9BUUMaUB1PnmyYGNZl%2BMedkVLzVnu2C8cBGq19MgT9NZEKCmaX7ePwlimuKz4Njj1B%2Bt%2B%2FRh9UWVEdkUPdgjU6pyssS%2B8vWllrZU6bpFdvo8MPe6KLUaZ1nTI6dJXtJ52rNCOBctSTxY%2BgTtYFoD36Um99lPCHqFZYAQK6RF0N1oGTeisIy%2B9nA9RvNk8cqeMhTtEpAABXguawnGDPgcWCsj0O8Sk71PZKvWlDIrP4GFVszOemiModsCeVbIkYGswh1RNU37dLvZT8fC%2BMi%2F27NAqJ63Jjtv8Eo9XL8iY%2BSzl956z8PlU4U4a4%2FKh1Uo%2BWrmKiRFfjs3FvRLfa9E4ZycvnZMm93SUlMtXoZDPX8MoX1uPlyBV3ffuJ1APbKlOxBfyYJa818XZrE8JcIFl44P2v%2BlYVC3IJ4gIQSScr04pO3OBKHTi5CGOUNgYTn8%2B1oej1st2fsRvmPOVaeyO7lvPJ1wPvzMO6N174GOqUBTsnEqL18E98%2BL2G%2FUVAqvjLvaa2pvKj98epGINIEHzzaF7QfRC00%2BF%2Bx3Lg6DW7wvq1TtQko4VzYVPPVDj1j6zq4SjSflishqLv5Knl3s7Rfo0EjlS7TCv%2FrVvWKn1ep3EOPEzO7bbQeb%2FwvJmL8Bq2V9ONuFlaQTicGlwGjRTA%2BlNA2e9iLqadwIF0%2Fw9vjlqHgMO1oLX5BLeoBj9qzzOg6wrW9&X-Amz-Signature=6a86f0b22eb9f649c1c07ae20a57bad4636fc68040d9b9bc02e50f74a63b08a0&X-Amz-SignedHeaders=host&x-id=GetObject)
