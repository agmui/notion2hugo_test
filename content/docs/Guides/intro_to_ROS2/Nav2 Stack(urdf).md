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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXFD6UK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDas5OtMW4ER7n47%2FpEYrMMOtg9DL1i8qPkr%2BzLX0FKDAiEAht1pJndQP9YVO15LD9mXf%2FvPrCVn0bAdCX%2FXQesE0NkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K7cUpD%2FF1qqMDgCrcA%2BsY0tNiuqBTBNOOMf9DZPWpSHrIKn7IVg%2BXjP9laFMCV3HUgzmj%2FCTOEOFfPBXiAlXVaQWQBT0IfcyJoRn9VHGFiW4w2v33NcnmWtsCafUI0V6rRg4rHcMEuW9Ht8kN7Z9In%2BmvjZW4sKnaAlQNRu4egNt0ul7j6tt4HiZPMsD62oUAl7M6gr42GNqkfpGv73sVDTIWBPXvw7jejtL%2BgqwMQ7t82uZ2i%2FsAB9SKQXM8JJzcFSSvMnDnlHtCyn5Djrxmyk%2BXNVvY8ZFMmZWd7NwQJsFjl9mNjk0dE6xw18pdwXJuMBQhVNaIgtQYNOYI90hWU2tmdGDfldmRsu%2FJS8ZxEe%2FDT2RFrIDGARy3EmcQqFkwcSMHXlPUpq0Q1N3GzKw8o9gr2fs9gzePaTeyGpR8Fl5qn130E3T2bdoH4rEd3YgB5RuV3WnoXhqPbrC8DJpWxc%2ByIoK6bmE%2F%2FLQizNHFLUTtizTpJ4Zsvpd0dPV8rN5F0bcPbWnJeb5VpwQOruBUeRrtGb7S6E8kHViLQFoTHl9R2oSROYe6fr%2FG%2Bc4qTDudP0xAz7q2AvTwlTulwTZfIv7gpAJxhpgFQ4UNT6%2BjeGcDJGwEs2bN3CmqGm2%2BasREt8RH8o3QVLwzMLK7p78GOqUBGa1wrYWtJw4VWz9xDMh8RU2rjAK1uzff2WYuzjq0w%2FSs5mswCVRwECcImJwjLYW1l%2FTNVEXXPJ6Ofq7FSOecHJorbf5lbna7qWbUlIz7v8FnfYLip%2BUPNC8ervHHlj7r%2FEgpI7Yqpv9u2X961epeJG8hGUWz74VDY%2Fdps399o2MC2pC3azuQ0G4iOhsm4ea9WzQl10BEshLnbz%2Bzi%2Fy4ncQiafF6&X-Amz-Signature=62d3b826d9e63bf13cd2b18eb2d4429707a8357daaf2ad21d921ca8546a23ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXFD6UK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDas5OtMW4ER7n47%2FpEYrMMOtg9DL1i8qPkr%2BzLX0FKDAiEAht1pJndQP9YVO15LD9mXf%2FvPrCVn0bAdCX%2FXQesE0NkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K7cUpD%2FF1qqMDgCrcA%2BsY0tNiuqBTBNOOMf9DZPWpSHrIKn7IVg%2BXjP9laFMCV3HUgzmj%2FCTOEOFfPBXiAlXVaQWQBT0IfcyJoRn9VHGFiW4w2v33NcnmWtsCafUI0V6rRg4rHcMEuW9Ht8kN7Z9In%2BmvjZW4sKnaAlQNRu4egNt0ul7j6tt4HiZPMsD62oUAl7M6gr42GNqkfpGv73sVDTIWBPXvw7jejtL%2BgqwMQ7t82uZ2i%2FsAB9SKQXM8JJzcFSSvMnDnlHtCyn5Djrxmyk%2BXNVvY8ZFMmZWd7NwQJsFjl9mNjk0dE6xw18pdwXJuMBQhVNaIgtQYNOYI90hWU2tmdGDfldmRsu%2FJS8ZxEe%2FDT2RFrIDGARy3EmcQqFkwcSMHXlPUpq0Q1N3GzKw8o9gr2fs9gzePaTeyGpR8Fl5qn130E3T2bdoH4rEd3YgB5RuV3WnoXhqPbrC8DJpWxc%2ByIoK6bmE%2F%2FLQizNHFLUTtizTpJ4Zsvpd0dPV8rN5F0bcPbWnJeb5VpwQOruBUeRrtGb7S6E8kHViLQFoTHl9R2oSROYe6fr%2FG%2Bc4qTDudP0xAz7q2AvTwlTulwTZfIv7gpAJxhpgFQ4UNT6%2BjeGcDJGwEs2bN3CmqGm2%2BasREt8RH8o3QVLwzMLK7p78GOqUBGa1wrYWtJw4VWz9xDMh8RU2rjAK1uzff2WYuzjq0w%2FSs5mswCVRwECcImJwjLYW1l%2FTNVEXXPJ6Ofq7FSOecHJorbf5lbna7qWbUlIz7v8FnfYLip%2BUPNC8ervHHlj7r%2FEgpI7Yqpv9u2X961epeJG8hGUWz74VDY%2Fdps399o2MC2pC3azuQ0G4iOhsm4ea9WzQl10BEshLnbz%2Bzi%2Fy4ncQiafF6&X-Amz-Signature=00033f30ab863000bf19d4a22fdf938d23f1f7885ce9b4d2eeccafd70d52a850&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXFD6UK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDas5OtMW4ER7n47%2FpEYrMMOtg9DL1i8qPkr%2BzLX0FKDAiEAht1pJndQP9YVO15LD9mXf%2FvPrCVn0bAdCX%2FXQesE0NkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K7cUpD%2FF1qqMDgCrcA%2BsY0tNiuqBTBNOOMf9DZPWpSHrIKn7IVg%2BXjP9laFMCV3HUgzmj%2FCTOEOFfPBXiAlXVaQWQBT0IfcyJoRn9VHGFiW4w2v33NcnmWtsCafUI0V6rRg4rHcMEuW9Ht8kN7Z9In%2BmvjZW4sKnaAlQNRu4egNt0ul7j6tt4HiZPMsD62oUAl7M6gr42GNqkfpGv73sVDTIWBPXvw7jejtL%2BgqwMQ7t82uZ2i%2FsAB9SKQXM8JJzcFSSvMnDnlHtCyn5Djrxmyk%2BXNVvY8ZFMmZWd7NwQJsFjl9mNjk0dE6xw18pdwXJuMBQhVNaIgtQYNOYI90hWU2tmdGDfldmRsu%2FJS8ZxEe%2FDT2RFrIDGARy3EmcQqFkwcSMHXlPUpq0Q1N3GzKw8o9gr2fs9gzePaTeyGpR8Fl5qn130E3T2bdoH4rEd3YgB5RuV3WnoXhqPbrC8DJpWxc%2ByIoK6bmE%2F%2FLQizNHFLUTtizTpJ4Zsvpd0dPV8rN5F0bcPbWnJeb5VpwQOruBUeRrtGb7S6E8kHViLQFoTHl9R2oSROYe6fr%2FG%2Bc4qTDudP0xAz7q2AvTwlTulwTZfIv7gpAJxhpgFQ4UNT6%2BjeGcDJGwEs2bN3CmqGm2%2BasREt8RH8o3QVLwzMLK7p78GOqUBGa1wrYWtJw4VWz9xDMh8RU2rjAK1uzff2WYuzjq0w%2FSs5mswCVRwECcImJwjLYW1l%2FTNVEXXPJ6Ofq7FSOecHJorbf5lbna7qWbUlIz7v8FnfYLip%2BUPNC8ervHHlj7r%2FEgpI7Yqpv9u2X961epeJG8hGUWz74VDY%2Fdps399o2MC2pC3azuQ0G4iOhsm4ea9WzQl10BEshLnbz%2Bzi%2Fy4ncQiafF6&X-Amz-Signature=e61bb455d450bacda8bf72380879dd5da3b8bea55f9b6170439b66706595c570&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXFD6UK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDas5OtMW4ER7n47%2FpEYrMMOtg9DL1i8qPkr%2BzLX0FKDAiEAht1pJndQP9YVO15LD9mXf%2FvPrCVn0bAdCX%2FXQesE0NkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K7cUpD%2FF1qqMDgCrcA%2BsY0tNiuqBTBNOOMf9DZPWpSHrIKn7IVg%2BXjP9laFMCV3HUgzmj%2FCTOEOFfPBXiAlXVaQWQBT0IfcyJoRn9VHGFiW4w2v33NcnmWtsCafUI0V6rRg4rHcMEuW9Ht8kN7Z9In%2BmvjZW4sKnaAlQNRu4egNt0ul7j6tt4HiZPMsD62oUAl7M6gr42GNqkfpGv73sVDTIWBPXvw7jejtL%2BgqwMQ7t82uZ2i%2FsAB9SKQXM8JJzcFSSvMnDnlHtCyn5Djrxmyk%2BXNVvY8ZFMmZWd7NwQJsFjl9mNjk0dE6xw18pdwXJuMBQhVNaIgtQYNOYI90hWU2tmdGDfldmRsu%2FJS8ZxEe%2FDT2RFrIDGARy3EmcQqFkwcSMHXlPUpq0Q1N3GzKw8o9gr2fs9gzePaTeyGpR8Fl5qn130E3T2bdoH4rEd3YgB5RuV3WnoXhqPbrC8DJpWxc%2ByIoK6bmE%2F%2FLQizNHFLUTtizTpJ4Zsvpd0dPV8rN5F0bcPbWnJeb5VpwQOruBUeRrtGb7S6E8kHViLQFoTHl9R2oSROYe6fr%2FG%2Bc4qTDudP0xAz7q2AvTwlTulwTZfIv7gpAJxhpgFQ4UNT6%2BjeGcDJGwEs2bN3CmqGm2%2BasREt8RH8o3QVLwzMLK7p78GOqUBGa1wrYWtJw4VWz9xDMh8RU2rjAK1uzff2WYuzjq0w%2FSs5mswCVRwECcImJwjLYW1l%2FTNVEXXPJ6Ofq7FSOecHJorbf5lbna7qWbUlIz7v8FnfYLip%2BUPNC8ervHHlj7r%2FEgpI7Yqpv9u2X961epeJG8hGUWz74VDY%2Fdps399o2MC2pC3azuQ0G4iOhsm4ea9WzQl10BEshLnbz%2Bzi%2Fy4ncQiafF6&X-Amz-Signature=bf612dc46d92a73291e8975f4984b5967c5f1e58136d9f104005fe623f13b8f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXFD6UK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDas5OtMW4ER7n47%2FpEYrMMOtg9DL1i8qPkr%2BzLX0FKDAiEAht1pJndQP9YVO15LD9mXf%2FvPrCVn0bAdCX%2FXQesE0NkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K7cUpD%2FF1qqMDgCrcA%2BsY0tNiuqBTBNOOMf9DZPWpSHrIKn7IVg%2BXjP9laFMCV3HUgzmj%2FCTOEOFfPBXiAlXVaQWQBT0IfcyJoRn9VHGFiW4w2v33NcnmWtsCafUI0V6rRg4rHcMEuW9Ht8kN7Z9In%2BmvjZW4sKnaAlQNRu4egNt0ul7j6tt4HiZPMsD62oUAl7M6gr42GNqkfpGv73sVDTIWBPXvw7jejtL%2BgqwMQ7t82uZ2i%2FsAB9SKQXM8JJzcFSSvMnDnlHtCyn5Djrxmyk%2BXNVvY8ZFMmZWd7NwQJsFjl9mNjk0dE6xw18pdwXJuMBQhVNaIgtQYNOYI90hWU2tmdGDfldmRsu%2FJS8ZxEe%2FDT2RFrIDGARy3EmcQqFkwcSMHXlPUpq0Q1N3GzKw8o9gr2fs9gzePaTeyGpR8Fl5qn130E3T2bdoH4rEd3YgB5RuV3WnoXhqPbrC8DJpWxc%2ByIoK6bmE%2F%2FLQizNHFLUTtizTpJ4Zsvpd0dPV8rN5F0bcPbWnJeb5VpwQOruBUeRrtGb7S6E8kHViLQFoTHl9R2oSROYe6fr%2FG%2Bc4qTDudP0xAz7q2AvTwlTulwTZfIv7gpAJxhpgFQ4UNT6%2BjeGcDJGwEs2bN3CmqGm2%2BasREt8RH8o3QVLwzMLK7p78GOqUBGa1wrYWtJw4VWz9xDMh8RU2rjAK1uzff2WYuzjq0w%2FSs5mswCVRwECcImJwjLYW1l%2FTNVEXXPJ6Ofq7FSOecHJorbf5lbna7qWbUlIz7v8FnfYLip%2BUPNC8ervHHlj7r%2FEgpI7Yqpv9u2X961epeJG8hGUWz74VDY%2Fdps399o2MC2pC3azuQ0G4iOhsm4ea9WzQl10BEshLnbz%2Bzi%2Fy4ncQiafF6&X-Amz-Signature=16decdc50369fe41ea48bc15f0c4e8c4c8ca349b653e133f2e96493b8c82fdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXFD6UK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDas5OtMW4ER7n47%2FpEYrMMOtg9DL1i8qPkr%2BzLX0FKDAiEAht1pJndQP9YVO15LD9mXf%2FvPrCVn0bAdCX%2FXQesE0NkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6K7cUpD%2FF1qqMDgCrcA%2BsY0tNiuqBTBNOOMf9DZPWpSHrIKn7IVg%2BXjP9laFMCV3HUgzmj%2FCTOEOFfPBXiAlXVaQWQBT0IfcyJoRn9VHGFiW4w2v33NcnmWtsCafUI0V6rRg4rHcMEuW9Ht8kN7Z9In%2BmvjZW4sKnaAlQNRu4egNt0ul7j6tt4HiZPMsD62oUAl7M6gr42GNqkfpGv73sVDTIWBPXvw7jejtL%2BgqwMQ7t82uZ2i%2FsAB9SKQXM8JJzcFSSvMnDnlHtCyn5Djrxmyk%2BXNVvY8ZFMmZWd7NwQJsFjl9mNjk0dE6xw18pdwXJuMBQhVNaIgtQYNOYI90hWU2tmdGDfldmRsu%2FJS8ZxEe%2FDT2RFrIDGARy3EmcQqFkwcSMHXlPUpq0Q1N3GzKw8o9gr2fs9gzePaTeyGpR8Fl5qn130E3T2bdoH4rEd3YgB5RuV3WnoXhqPbrC8DJpWxc%2ByIoK6bmE%2F%2FLQizNHFLUTtizTpJ4Zsvpd0dPV8rN5F0bcPbWnJeb5VpwQOruBUeRrtGb7S6E8kHViLQFoTHl9R2oSROYe6fr%2FG%2Bc4qTDudP0xAz7q2AvTwlTulwTZfIv7gpAJxhpgFQ4UNT6%2BjeGcDJGwEs2bN3CmqGm2%2BasREt8RH8o3QVLwzMLK7p78GOqUBGa1wrYWtJw4VWz9xDMh8RU2rjAK1uzff2WYuzjq0w%2FSs5mswCVRwECcImJwjLYW1l%2FTNVEXXPJ6Ofq7FSOecHJorbf5lbna7qWbUlIz7v8FnfYLip%2BUPNC8ervHHlj7r%2FEgpI7Yqpv9u2X961epeJG8hGUWz74VDY%2Fdps399o2MC2pC3azuQ0G4iOhsm4ea9WzQl10BEshLnbz%2Bzi%2Fy4ncQiafF6&X-Amz-Signature=7a8a82bd38f9a2793e4b3bc6271a0fa75eeb6edee00bb2b4c3a60675be94068f&X-Amz-SignedHeaders=host&x-id=GetObject)
