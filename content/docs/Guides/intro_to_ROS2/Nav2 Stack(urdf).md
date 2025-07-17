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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFUA6SB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZYi%2BFF9e9an24AdEPRir8Ho8tUHcu%2BXxfV63Eq96g%2FgIgHmREVIKdGImJ7TsTXWGcL1Wr3S5v5t9MT4XbLV0i4qcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLhCRM%2BaXw491S4iASrcA%2BeEWWy6MJgDiyCFH83qzpK3MjZGYumtAWkPqhoU%2BJRR0G8FQ5gMJWD8zapHRR3bzNVDKw8FV0TU7OuNuct2z78OHjY%2BW8SiDEkX%2FJxhHpU4txbksaOU00dDjColNBkrr5AMD0nfq8ffzgIDdyXv5RZSZtoEjQj6U%2FAE%2BORoktydmypxYhg%2FmBT0Sde9QgjdHTeZjCyLWsZDNg0BtkkSjFVI1smMyTBe%2Fs6HDtyYDEIdRL1u4oZ%2FrHlbpNvhhotGUBGErk%2Bfl0eoCZdFp7dheUUKYyfSxqevzBEYIUMZ6EIGs5qJYSQ9WpMfpyn0LUYE9fw1vbx3D%2F3LL8ukYt9dBmk%2FmxY7xf7HrCdYS2gu9DGUCa%2F9uAJNXhNuiOW03T0F2NgpZAXyXL2tVl5FyLJOm1W0CbC36qTmpmlLogDgvNh3WDF6%2BOE3rDNcFaSNVP85W%2BLKjqgSBMgr9BswY2edNXp2ZiPJQ4nzVfL21%2F1N1Sy3TDOGijmSRrHQqF9mQjBkE4sEneW9unAtUPUhEQAx9g3W8eFVxEve08SgD9OYCfXmfFGuPfZERjOvDwW8TL2bslY18%2FKsTZfYB%2B%2F9RXDT4qhn07eq0hrdbLWheeJHPeu5HFkbVNE3xdttxzN5MO%2Fm5MMGOqUB%2BO5l3FAZb06rsWPVoO6VWXDWi%2Bf7ZxS7qVrmk%2FsU6MelBl5XnGd1hpLHlVmziKFNUwV77C0fftyw8nf7Hh56IBUQDPfJFolpL%2BKeWHt6YzMOvvBtpv%2FN5Jg9KwcXqh0ukiL6V2HP20MWw9PdMNj0WsG3d3h7wc%2BKMrJuF%2BI1vQ1ANPa79AuX1LKUzWtkWi3vRci1nLKrQdEFI9sbJsI7Plhe6nYA&X-Amz-Signature=e0fcc8ac10d6186716764bf59f7c5261b4fad272c8f5111c4a510561e6a81bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFUA6SB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZYi%2BFF9e9an24AdEPRir8Ho8tUHcu%2BXxfV63Eq96g%2FgIgHmREVIKdGImJ7TsTXWGcL1Wr3S5v5t9MT4XbLV0i4qcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLhCRM%2BaXw491S4iASrcA%2BeEWWy6MJgDiyCFH83qzpK3MjZGYumtAWkPqhoU%2BJRR0G8FQ5gMJWD8zapHRR3bzNVDKw8FV0TU7OuNuct2z78OHjY%2BW8SiDEkX%2FJxhHpU4txbksaOU00dDjColNBkrr5AMD0nfq8ffzgIDdyXv5RZSZtoEjQj6U%2FAE%2BORoktydmypxYhg%2FmBT0Sde9QgjdHTeZjCyLWsZDNg0BtkkSjFVI1smMyTBe%2Fs6HDtyYDEIdRL1u4oZ%2FrHlbpNvhhotGUBGErk%2Bfl0eoCZdFp7dheUUKYyfSxqevzBEYIUMZ6EIGs5qJYSQ9WpMfpyn0LUYE9fw1vbx3D%2F3LL8ukYt9dBmk%2FmxY7xf7HrCdYS2gu9DGUCa%2F9uAJNXhNuiOW03T0F2NgpZAXyXL2tVl5FyLJOm1W0CbC36qTmpmlLogDgvNh3WDF6%2BOE3rDNcFaSNVP85W%2BLKjqgSBMgr9BswY2edNXp2ZiPJQ4nzVfL21%2F1N1Sy3TDOGijmSRrHQqF9mQjBkE4sEneW9unAtUPUhEQAx9g3W8eFVxEve08SgD9OYCfXmfFGuPfZERjOvDwW8TL2bslY18%2FKsTZfYB%2B%2F9RXDT4qhn07eq0hrdbLWheeJHPeu5HFkbVNE3xdttxzN5MO%2Fm5MMGOqUB%2BO5l3FAZb06rsWPVoO6VWXDWi%2Bf7ZxS7qVrmk%2FsU6MelBl5XnGd1hpLHlVmziKFNUwV77C0fftyw8nf7Hh56IBUQDPfJFolpL%2BKeWHt6YzMOvvBtpv%2FN5Jg9KwcXqh0ukiL6V2HP20MWw9PdMNj0WsG3d3h7wc%2BKMrJuF%2BI1vQ1ANPa79AuX1LKUzWtkWi3vRci1nLKrQdEFI9sbJsI7Plhe6nYA&X-Amz-Signature=7b9bcc4a4e9fb2bc7abd0d3240c72da2095c717a40074498d76e2b2446c16a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFUA6SB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZYi%2BFF9e9an24AdEPRir8Ho8tUHcu%2BXxfV63Eq96g%2FgIgHmREVIKdGImJ7TsTXWGcL1Wr3S5v5t9MT4XbLV0i4qcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLhCRM%2BaXw491S4iASrcA%2BeEWWy6MJgDiyCFH83qzpK3MjZGYumtAWkPqhoU%2BJRR0G8FQ5gMJWD8zapHRR3bzNVDKw8FV0TU7OuNuct2z78OHjY%2BW8SiDEkX%2FJxhHpU4txbksaOU00dDjColNBkrr5AMD0nfq8ffzgIDdyXv5RZSZtoEjQj6U%2FAE%2BORoktydmypxYhg%2FmBT0Sde9QgjdHTeZjCyLWsZDNg0BtkkSjFVI1smMyTBe%2Fs6HDtyYDEIdRL1u4oZ%2FrHlbpNvhhotGUBGErk%2Bfl0eoCZdFp7dheUUKYyfSxqevzBEYIUMZ6EIGs5qJYSQ9WpMfpyn0LUYE9fw1vbx3D%2F3LL8ukYt9dBmk%2FmxY7xf7HrCdYS2gu9DGUCa%2F9uAJNXhNuiOW03T0F2NgpZAXyXL2tVl5FyLJOm1W0CbC36qTmpmlLogDgvNh3WDF6%2BOE3rDNcFaSNVP85W%2BLKjqgSBMgr9BswY2edNXp2ZiPJQ4nzVfL21%2F1N1Sy3TDOGijmSRrHQqF9mQjBkE4sEneW9unAtUPUhEQAx9g3W8eFVxEve08SgD9OYCfXmfFGuPfZERjOvDwW8TL2bslY18%2FKsTZfYB%2B%2F9RXDT4qhn07eq0hrdbLWheeJHPeu5HFkbVNE3xdttxzN5MO%2Fm5MMGOqUB%2BO5l3FAZb06rsWPVoO6VWXDWi%2Bf7ZxS7qVrmk%2FsU6MelBl5XnGd1hpLHlVmziKFNUwV77C0fftyw8nf7Hh56IBUQDPfJFolpL%2BKeWHt6YzMOvvBtpv%2FN5Jg9KwcXqh0ukiL6V2HP20MWw9PdMNj0WsG3d3h7wc%2BKMrJuF%2BI1vQ1ANPa79AuX1LKUzWtkWi3vRci1nLKrQdEFI9sbJsI7Plhe6nYA&X-Amz-Signature=18def9971372aa63d5bf4a0a997b227bc268f1068520ed2edb81750fc7a87a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFUA6SB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZYi%2BFF9e9an24AdEPRir8Ho8tUHcu%2BXxfV63Eq96g%2FgIgHmREVIKdGImJ7TsTXWGcL1Wr3S5v5t9MT4XbLV0i4qcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLhCRM%2BaXw491S4iASrcA%2BeEWWy6MJgDiyCFH83qzpK3MjZGYumtAWkPqhoU%2BJRR0G8FQ5gMJWD8zapHRR3bzNVDKw8FV0TU7OuNuct2z78OHjY%2BW8SiDEkX%2FJxhHpU4txbksaOU00dDjColNBkrr5AMD0nfq8ffzgIDdyXv5RZSZtoEjQj6U%2FAE%2BORoktydmypxYhg%2FmBT0Sde9QgjdHTeZjCyLWsZDNg0BtkkSjFVI1smMyTBe%2Fs6HDtyYDEIdRL1u4oZ%2FrHlbpNvhhotGUBGErk%2Bfl0eoCZdFp7dheUUKYyfSxqevzBEYIUMZ6EIGs5qJYSQ9WpMfpyn0LUYE9fw1vbx3D%2F3LL8ukYt9dBmk%2FmxY7xf7HrCdYS2gu9DGUCa%2F9uAJNXhNuiOW03T0F2NgpZAXyXL2tVl5FyLJOm1W0CbC36qTmpmlLogDgvNh3WDF6%2BOE3rDNcFaSNVP85W%2BLKjqgSBMgr9BswY2edNXp2ZiPJQ4nzVfL21%2F1N1Sy3TDOGijmSRrHQqF9mQjBkE4sEneW9unAtUPUhEQAx9g3W8eFVxEve08SgD9OYCfXmfFGuPfZERjOvDwW8TL2bslY18%2FKsTZfYB%2B%2F9RXDT4qhn07eq0hrdbLWheeJHPeu5HFkbVNE3xdttxzN5MO%2Fm5MMGOqUB%2BO5l3FAZb06rsWPVoO6VWXDWi%2Bf7ZxS7qVrmk%2FsU6MelBl5XnGd1hpLHlVmziKFNUwV77C0fftyw8nf7Hh56IBUQDPfJFolpL%2BKeWHt6YzMOvvBtpv%2FN5Jg9KwcXqh0ukiL6V2HP20MWw9PdMNj0WsG3d3h7wc%2BKMrJuF%2BI1vQ1ANPa79AuX1LKUzWtkWi3vRci1nLKrQdEFI9sbJsI7Plhe6nYA&X-Amz-Signature=3cd20c3f7fa37c64a75e19b4bdce2889557621979bb661b01ad2c210b4e4f7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFUA6SB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZYi%2BFF9e9an24AdEPRir8Ho8tUHcu%2BXxfV63Eq96g%2FgIgHmREVIKdGImJ7TsTXWGcL1Wr3S5v5t9MT4XbLV0i4qcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLhCRM%2BaXw491S4iASrcA%2BeEWWy6MJgDiyCFH83qzpK3MjZGYumtAWkPqhoU%2BJRR0G8FQ5gMJWD8zapHRR3bzNVDKw8FV0TU7OuNuct2z78OHjY%2BW8SiDEkX%2FJxhHpU4txbksaOU00dDjColNBkrr5AMD0nfq8ffzgIDdyXv5RZSZtoEjQj6U%2FAE%2BORoktydmypxYhg%2FmBT0Sde9QgjdHTeZjCyLWsZDNg0BtkkSjFVI1smMyTBe%2Fs6HDtyYDEIdRL1u4oZ%2FrHlbpNvhhotGUBGErk%2Bfl0eoCZdFp7dheUUKYyfSxqevzBEYIUMZ6EIGs5qJYSQ9WpMfpyn0LUYE9fw1vbx3D%2F3LL8ukYt9dBmk%2FmxY7xf7HrCdYS2gu9DGUCa%2F9uAJNXhNuiOW03T0F2NgpZAXyXL2tVl5FyLJOm1W0CbC36qTmpmlLogDgvNh3WDF6%2BOE3rDNcFaSNVP85W%2BLKjqgSBMgr9BswY2edNXp2ZiPJQ4nzVfL21%2F1N1Sy3TDOGijmSRrHQqF9mQjBkE4sEneW9unAtUPUhEQAx9g3W8eFVxEve08SgD9OYCfXmfFGuPfZERjOvDwW8TL2bslY18%2FKsTZfYB%2B%2F9RXDT4qhn07eq0hrdbLWheeJHPeu5HFkbVNE3xdttxzN5MO%2Fm5MMGOqUB%2BO5l3FAZb06rsWPVoO6VWXDWi%2Bf7ZxS7qVrmk%2FsU6MelBl5XnGd1hpLHlVmziKFNUwV77C0fftyw8nf7Hh56IBUQDPfJFolpL%2BKeWHt6YzMOvvBtpv%2FN5Jg9KwcXqh0ukiL6V2HP20MWw9PdMNj0WsG3d3h7wc%2BKMrJuF%2BI1vQ1ANPa79AuX1LKUzWtkWi3vRci1nLKrQdEFI9sbJsI7Plhe6nYA&X-Amz-Signature=08d7275f66b2d42a784eb922b172aa8df3dedbe45f5b1950a6435e50b4002709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFUA6SB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZYi%2BFF9e9an24AdEPRir8Ho8tUHcu%2BXxfV63Eq96g%2FgIgHmREVIKdGImJ7TsTXWGcL1Wr3S5v5t9MT4XbLV0i4qcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLhCRM%2BaXw491S4iASrcA%2BeEWWy6MJgDiyCFH83qzpK3MjZGYumtAWkPqhoU%2BJRR0G8FQ5gMJWD8zapHRR3bzNVDKw8FV0TU7OuNuct2z78OHjY%2BW8SiDEkX%2FJxhHpU4txbksaOU00dDjColNBkrr5AMD0nfq8ffzgIDdyXv5RZSZtoEjQj6U%2FAE%2BORoktydmypxYhg%2FmBT0Sde9QgjdHTeZjCyLWsZDNg0BtkkSjFVI1smMyTBe%2Fs6HDtyYDEIdRL1u4oZ%2FrHlbpNvhhotGUBGErk%2Bfl0eoCZdFp7dheUUKYyfSxqevzBEYIUMZ6EIGs5qJYSQ9WpMfpyn0LUYE9fw1vbx3D%2F3LL8ukYt9dBmk%2FmxY7xf7HrCdYS2gu9DGUCa%2F9uAJNXhNuiOW03T0F2NgpZAXyXL2tVl5FyLJOm1W0CbC36qTmpmlLogDgvNh3WDF6%2BOE3rDNcFaSNVP85W%2BLKjqgSBMgr9BswY2edNXp2ZiPJQ4nzVfL21%2F1N1Sy3TDOGijmSRrHQqF9mQjBkE4sEneW9unAtUPUhEQAx9g3W8eFVxEve08SgD9OYCfXmfFGuPfZERjOvDwW8TL2bslY18%2FKsTZfYB%2B%2F9RXDT4qhn07eq0hrdbLWheeJHPeu5HFkbVNE3xdttxzN5MO%2Fm5MMGOqUB%2BO5l3FAZb06rsWPVoO6VWXDWi%2Bf7ZxS7qVrmk%2FsU6MelBl5XnGd1hpLHlVmziKFNUwV77C0fftyw8nf7Hh56IBUQDPfJFolpL%2BKeWHt6YzMOvvBtpv%2FN5Jg9KwcXqh0ukiL6V2HP20MWw9PdMNj0WsG3d3h7wc%2BKMrJuF%2BI1vQ1ANPa79AuX1LKUzWtkWi3vRci1nLKrQdEFI9sbJsI7Plhe6nYA&X-Amz-Signature=ee2e576e7b9a1e7df5934c72d289f04f89ae059b2e318b7b4df9b025b8afbf05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
