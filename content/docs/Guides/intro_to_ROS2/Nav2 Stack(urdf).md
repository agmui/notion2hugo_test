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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEVDNYC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCELWo2%2F5D2orjeKtyHXIeFRTYJOB1gSSJP%2FLEKX%2F6ooAIgei4UDysQ4Ua6qooWDfadc5I6Uom4rkCGgImjivuo90Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvBW%2FiI3Mg7e6BXtSrcAzYK7HHLl8tMBwem4V3h0zMbv9G%2BMp00J7QZ0LqgYrwYOtH%2BuU0r88ILdh7SDT1VF1I1uE8F9KYVhs4JRbYQ9rNxyK%2F0IKZgrawayQp7gB2W6CM%2FbULTapnHbiZETf7uTjiY4UAIsDjKVYhI7FugTufSJnW8jkEJW7s8fQ8UCRGzbHU6OxeyZfK6Fox8CcpjHDBRZNRo7IpJTG6pZ1JZcefC2DFZGQG2vMZyi1RbQUzl00VjbamYkri9IBexi4o3A4LoYp%2F46L5Wu%2FWo3I0EuzWVNurJgyuluRIYGHLAeRbvAg2Zlcr12n8aSkwg7qyr9SrxnkUIo6IPi3HE3l4J1qJQa08tuNhwrXX%2F1XOGAz%2F7xutFCJh6Vc7BIlmKghNNNDNNofo15LctDX5f9fSbafAEfCBANGCcY2UVb0eQT74hkznxJAOLMcu3DdKOpCJWUoPg3IOjhXpqP0yC6X603TkVbuE6NaHIuLPbSVBkRj6YPsR3mQqN%2Fo%2B9qCkZ6MrE%2FZbPHS5pM%2BHUEf4kP9BKtcOCgNY5RhCQANq8vsitVcC3lZChfN64t%2Fpe0ILtNCC8WwEDt9PxulRltWyZSAfvwGnLD4uRb5jbTmoqcZyHSCt8vfFV%2BacxCHUPGdlvMLCEusIGOqUBnA6RIPxzPldDu7cwKyWJJCOWOE6vCVspPBVB9P14r1bZpD15PMntlfQvxi8vE9dcM%2FAQccAj4sDE6Tuh3r11LgauqqzaPQw66Q8LoXVXqF72dVH2lafRa6ticJaeJTn7ZUJ6pO%2Bm2YrvkvuXfmoFnWpAm00kn5aO5aXwfg4VUxMU7XrqMIIj%2FgfOc%2FeC9LbcQIwJqPO%2BVcuNJvVIKngDvfqErvvs&X-Amz-Signature=c87ee41cf7f07690eef12679ca18c4a7a91bc1de6a22677aac899dcbe763e34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEVDNYC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCELWo2%2F5D2orjeKtyHXIeFRTYJOB1gSSJP%2FLEKX%2F6ooAIgei4UDysQ4Ua6qooWDfadc5I6Uom4rkCGgImjivuo90Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvBW%2FiI3Mg7e6BXtSrcAzYK7HHLl8tMBwem4V3h0zMbv9G%2BMp00J7QZ0LqgYrwYOtH%2BuU0r88ILdh7SDT1VF1I1uE8F9KYVhs4JRbYQ9rNxyK%2F0IKZgrawayQp7gB2W6CM%2FbULTapnHbiZETf7uTjiY4UAIsDjKVYhI7FugTufSJnW8jkEJW7s8fQ8UCRGzbHU6OxeyZfK6Fox8CcpjHDBRZNRo7IpJTG6pZ1JZcefC2DFZGQG2vMZyi1RbQUzl00VjbamYkri9IBexi4o3A4LoYp%2F46L5Wu%2FWo3I0EuzWVNurJgyuluRIYGHLAeRbvAg2Zlcr12n8aSkwg7qyr9SrxnkUIo6IPi3HE3l4J1qJQa08tuNhwrXX%2F1XOGAz%2F7xutFCJh6Vc7BIlmKghNNNDNNofo15LctDX5f9fSbafAEfCBANGCcY2UVb0eQT74hkznxJAOLMcu3DdKOpCJWUoPg3IOjhXpqP0yC6X603TkVbuE6NaHIuLPbSVBkRj6YPsR3mQqN%2Fo%2B9qCkZ6MrE%2FZbPHS5pM%2BHUEf4kP9BKtcOCgNY5RhCQANq8vsitVcC3lZChfN64t%2Fpe0ILtNCC8WwEDt9PxulRltWyZSAfvwGnLD4uRb5jbTmoqcZyHSCt8vfFV%2BacxCHUPGdlvMLCEusIGOqUBnA6RIPxzPldDu7cwKyWJJCOWOE6vCVspPBVB9P14r1bZpD15PMntlfQvxi8vE9dcM%2FAQccAj4sDE6Tuh3r11LgauqqzaPQw66Q8LoXVXqF72dVH2lafRa6ticJaeJTn7ZUJ6pO%2Bm2YrvkvuXfmoFnWpAm00kn5aO5aXwfg4VUxMU7XrqMIIj%2FgfOc%2FeC9LbcQIwJqPO%2BVcuNJvVIKngDvfqErvvs&X-Amz-Signature=d93864dedcedf15056c8bb0fef073bd69404f0fd75b5c32fbc3b95b30e5504e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEVDNYC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCELWo2%2F5D2orjeKtyHXIeFRTYJOB1gSSJP%2FLEKX%2F6ooAIgei4UDysQ4Ua6qooWDfadc5I6Uom4rkCGgImjivuo90Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvBW%2FiI3Mg7e6BXtSrcAzYK7HHLl8tMBwem4V3h0zMbv9G%2BMp00J7QZ0LqgYrwYOtH%2BuU0r88ILdh7SDT1VF1I1uE8F9KYVhs4JRbYQ9rNxyK%2F0IKZgrawayQp7gB2W6CM%2FbULTapnHbiZETf7uTjiY4UAIsDjKVYhI7FugTufSJnW8jkEJW7s8fQ8UCRGzbHU6OxeyZfK6Fox8CcpjHDBRZNRo7IpJTG6pZ1JZcefC2DFZGQG2vMZyi1RbQUzl00VjbamYkri9IBexi4o3A4LoYp%2F46L5Wu%2FWo3I0EuzWVNurJgyuluRIYGHLAeRbvAg2Zlcr12n8aSkwg7qyr9SrxnkUIo6IPi3HE3l4J1qJQa08tuNhwrXX%2F1XOGAz%2F7xutFCJh6Vc7BIlmKghNNNDNNofo15LctDX5f9fSbafAEfCBANGCcY2UVb0eQT74hkznxJAOLMcu3DdKOpCJWUoPg3IOjhXpqP0yC6X603TkVbuE6NaHIuLPbSVBkRj6YPsR3mQqN%2Fo%2B9qCkZ6MrE%2FZbPHS5pM%2BHUEf4kP9BKtcOCgNY5RhCQANq8vsitVcC3lZChfN64t%2Fpe0ILtNCC8WwEDt9PxulRltWyZSAfvwGnLD4uRb5jbTmoqcZyHSCt8vfFV%2BacxCHUPGdlvMLCEusIGOqUBnA6RIPxzPldDu7cwKyWJJCOWOE6vCVspPBVB9P14r1bZpD15PMntlfQvxi8vE9dcM%2FAQccAj4sDE6Tuh3r11LgauqqzaPQw66Q8LoXVXqF72dVH2lafRa6ticJaeJTn7ZUJ6pO%2Bm2YrvkvuXfmoFnWpAm00kn5aO5aXwfg4VUxMU7XrqMIIj%2FgfOc%2FeC9LbcQIwJqPO%2BVcuNJvVIKngDvfqErvvs&X-Amz-Signature=11ad895e9a9dcc1b1ebe6b48aeccc8dc0eb42e2ef0b8cf4c7bb45bc6bcc6a70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEVDNYC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCELWo2%2F5D2orjeKtyHXIeFRTYJOB1gSSJP%2FLEKX%2F6ooAIgei4UDysQ4Ua6qooWDfadc5I6Uom4rkCGgImjivuo90Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvBW%2FiI3Mg7e6BXtSrcAzYK7HHLl8tMBwem4V3h0zMbv9G%2BMp00J7QZ0LqgYrwYOtH%2BuU0r88ILdh7SDT1VF1I1uE8F9KYVhs4JRbYQ9rNxyK%2F0IKZgrawayQp7gB2W6CM%2FbULTapnHbiZETf7uTjiY4UAIsDjKVYhI7FugTufSJnW8jkEJW7s8fQ8UCRGzbHU6OxeyZfK6Fox8CcpjHDBRZNRo7IpJTG6pZ1JZcefC2DFZGQG2vMZyi1RbQUzl00VjbamYkri9IBexi4o3A4LoYp%2F46L5Wu%2FWo3I0EuzWVNurJgyuluRIYGHLAeRbvAg2Zlcr12n8aSkwg7qyr9SrxnkUIo6IPi3HE3l4J1qJQa08tuNhwrXX%2F1XOGAz%2F7xutFCJh6Vc7BIlmKghNNNDNNofo15LctDX5f9fSbafAEfCBANGCcY2UVb0eQT74hkznxJAOLMcu3DdKOpCJWUoPg3IOjhXpqP0yC6X603TkVbuE6NaHIuLPbSVBkRj6YPsR3mQqN%2Fo%2B9qCkZ6MrE%2FZbPHS5pM%2BHUEf4kP9BKtcOCgNY5RhCQANq8vsitVcC3lZChfN64t%2Fpe0ILtNCC8WwEDt9PxulRltWyZSAfvwGnLD4uRb5jbTmoqcZyHSCt8vfFV%2BacxCHUPGdlvMLCEusIGOqUBnA6RIPxzPldDu7cwKyWJJCOWOE6vCVspPBVB9P14r1bZpD15PMntlfQvxi8vE9dcM%2FAQccAj4sDE6Tuh3r11LgauqqzaPQw66Q8LoXVXqF72dVH2lafRa6ticJaeJTn7ZUJ6pO%2Bm2YrvkvuXfmoFnWpAm00kn5aO5aXwfg4VUxMU7XrqMIIj%2FgfOc%2FeC9LbcQIwJqPO%2BVcuNJvVIKngDvfqErvvs&X-Amz-Signature=62f4a34602f4a889a77eb352ca8ef39f609badc7797bd8a25a70e39bb5b0a5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEVDNYC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCELWo2%2F5D2orjeKtyHXIeFRTYJOB1gSSJP%2FLEKX%2F6ooAIgei4UDysQ4Ua6qooWDfadc5I6Uom4rkCGgImjivuo90Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvBW%2FiI3Mg7e6BXtSrcAzYK7HHLl8tMBwem4V3h0zMbv9G%2BMp00J7QZ0LqgYrwYOtH%2BuU0r88ILdh7SDT1VF1I1uE8F9KYVhs4JRbYQ9rNxyK%2F0IKZgrawayQp7gB2W6CM%2FbULTapnHbiZETf7uTjiY4UAIsDjKVYhI7FugTufSJnW8jkEJW7s8fQ8UCRGzbHU6OxeyZfK6Fox8CcpjHDBRZNRo7IpJTG6pZ1JZcefC2DFZGQG2vMZyi1RbQUzl00VjbamYkri9IBexi4o3A4LoYp%2F46L5Wu%2FWo3I0EuzWVNurJgyuluRIYGHLAeRbvAg2Zlcr12n8aSkwg7qyr9SrxnkUIo6IPi3HE3l4J1qJQa08tuNhwrXX%2F1XOGAz%2F7xutFCJh6Vc7BIlmKghNNNDNNofo15LctDX5f9fSbafAEfCBANGCcY2UVb0eQT74hkznxJAOLMcu3DdKOpCJWUoPg3IOjhXpqP0yC6X603TkVbuE6NaHIuLPbSVBkRj6YPsR3mQqN%2Fo%2B9qCkZ6MrE%2FZbPHS5pM%2BHUEf4kP9BKtcOCgNY5RhCQANq8vsitVcC3lZChfN64t%2Fpe0ILtNCC8WwEDt9PxulRltWyZSAfvwGnLD4uRb5jbTmoqcZyHSCt8vfFV%2BacxCHUPGdlvMLCEusIGOqUBnA6RIPxzPldDu7cwKyWJJCOWOE6vCVspPBVB9P14r1bZpD15PMntlfQvxi8vE9dcM%2FAQccAj4sDE6Tuh3r11LgauqqzaPQw66Q8LoXVXqF72dVH2lafRa6ticJaeJTn7ZUJ6pO%2Bm2YrvkvuXfmoFnWpAm00kn5aO5aXwfg4VUxMU7XrqMIIj%2FgfOc%2FeC9LbcQIwJqPO%2BVcuNJvVIKngDvfqErvvs&X-Amz-Signature=a04aa22dd7df2f0d76c8cb2ccccd5f5d514ea43f9f9fa54a7f89e8d0dacb1fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEVDNYC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCELWo2%2F5D2orjeKtyHXIeFRTYJOB1gSSJP%2FLEKX%2F6ooAIgei4UDysQ4Ua6qooWDfadc5I6Uom4rkCGgImjivuo90Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBvBW%2FiI3Mg7e6BXtSrcAzYK7HHLl8tMBwem4V3h0zMbv9G%2BMp00J7QZ0LqgYrwYOtH%2BuU0r88ILdh7SDT1VF1I1uE8F9KYVhs4JRbYQ9rNxyK%2F0IKZgrawayQp7gB2W6CM%2FbULTapnHbiZETf7uTjiY4UAIsDjKVYhI7FugTufSJnW8jkEJW7s8fQ8UCRGzbHU6OxeyZfK6Fox8CcpjHDBRZNRo7IpJTG6pZ1JZcefC2DFZGQG2vMZyi1RbQUzl00VjbamYkri9IBexi4o3A4LoYp%2F46L5Wu%2FWo3I0EuzWVNurJgyuluRIYGHLAeRbvAg2Zlcr12n8aSkwg7qyr9SrxnkUIo6IPi3HE3l4J1qJQa08tuNhwrXX%2F1XOGAz%2F7xutFCJh6Vc7BIlmKghNNNDNNofo15LctDX5f9fSbafAEfCBANGCcY2UVb0eQT74hkznxJAOLMcu3DdKOpCJWUoPg3IOjhXpqP0yC6X603TkVbuE6NaHIuLPbSVBkRj6YPsR3mQqN%2Fo%2B9qCkZ6MrE%2FZbPHS5pM%2BHUEf4kP9BKtcOCgNY5RhCQANq8vsitVcC3lZChfN64t%2Fpe0ILtNCC8WwEDt9PxulRltWyZSAfvwGnLD4uRb5jbTmoqcZyHSCt8vfFV%2BacxCHUPGdlvMLCEusIGOqUBnA6RIPxzPldDu7cwKyWJJCOWOE6vCVspPBVB9P14r1bZpD15PMntlfQvxi8vE9dcM%2FAQccAj4sDE6Tuh3r11LgauqqzaPQw66Q8LoXVXqF72dVH2lafRa6ticJaeJTn7ZUJ6pO%2Bm2YrvkvuXfmoFnWpAm00kn5aO5aXwfg4VUxMU7XrqMIIj%2FgfOc%2FeC9LbcQIwJqPO%2BVcuNJvVIKngDvfqErvvs&X-Amz-Signature=f36c2faa3bd1bc20ff3d6479cb3b40c53e395a46b7874cfb6a42c53499a0070a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
