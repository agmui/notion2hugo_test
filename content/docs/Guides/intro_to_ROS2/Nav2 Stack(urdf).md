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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAUHD6W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGUZRxoNUHq4L9HVYYSODhpYT8dXCSPsW0lhEWR5FtSmAiEAyzs68iWET2xGoXKN4miGulNG0ooDW5Esg45vJdqoOxAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC9lizUYgM%2F%2FFbBi0ircA1bnSskj21Pu4AjnwhhAO%2BGpmn1iW0AzuzYV8cz1UokRlJ6wsgkoLwa0KeZhxrAR4rz1bKDRdS6XAq0ycx8Ic8kt%2FdLgDxuBZI8U5%2FWQKWFu5kWuXZWHk3yjB2s1vEikP86KFuko7IJ50DtNkr4Vp9mOWMjagZrvPVYPlNvtBJRkQkuKSqxuG72%2F%2FYDnDpVCnNiZ5gXpcM1WNzUp%2BLnSn7POfT59zHF69u52Apwn5H8s3dBxynuZz00%2BIMh0x5nmVX1BrsY%2FmaSMRMlFYE%2FMqB1JgklLr4lLCxB8DiFO5J5k5IqZ0wsqAywJJLkau%2F4NBbUzvdPyYbwcEUxbjAIhaYYNfawuVJv87%2BBym2RVC3WyNXhxT%2BcaN5SSTaqVC%2BQXQLyBV2VN0wG2EQJ8lZWmnl7jFK3fWHwnyvTLR%2BDHl6VHmImx70VWNQCGMk1VzK%2BVbZ5KWPkqRv8Q7zpbd0Rt2q5Xn87WLBgmZhJCNEiGc0lFQiD%2F2WIayorwsWYNoxVofnJtnkxk1B0g%2FdwblUgCYCJUbXSGEynfJP%2BCUHnsPrCh%2BI%2FLxxdVgn6h4F0QfbJfK3QArMW6feN04RZPSFfy4ysvV70T2AGghOWTnA4hiSiQoCGQh5Z%2BFxhJW4xuMKTn%2F8EGOqUBlySGROyGEY%2Frdbb1UZu4zGgeqPyctq2fkcKFb3x2gP1uyQokcFz9lRMusviOrBIWcOB6uVRZQ5R%2FZAPhK5M2XLSN0BtAiB1AFsZL%2FfFvZqSwuFUXM726OKwlQe6r%2FYCWRn2WxQoTMEAfKEf574isFwzn1GRYQipYijDe4pYmz4jnmtuFJpJrViVNTfsaQDpYYgRP%2FomazaKLUnDnTk5zbthq7c8w&X-Amz-Signature=6a47d6306d35ceafed3777a2f44235b1d4ff943913b494507700ffd1ff2b88c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAUHD6W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGUZRxoNUHq4L9HVYYSODhpYT8dXCSPsW0lhEWR5FtSmAiEAyzs68iWET2xGoXKN4miGulNG0ooDW5Esg45vJdqoOxAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC9lizUYgM%2F%2FFbBi0ircA1bnSskj21Pu4AjnwhhAO%2BGpmn1iW0AzuzYV8cz1UokRlJ6wsgkoLwa0KeZhxrAR4rz1bKDRdS6XAq0ycx8Ic8kt%2FdLgDxuBZI8U5%2FWQKWFu5kWuXZWHk3yjB2s1vEikP86KFuko7IJ50DtNkr4Vp9mOWMjagZrvPVYPlNvtBJRkQkuKSqxuG72%2F%2FYDnDpVCnNiZ5gXpcM1WNzUp%2BLnSn7POfT59zHF69u52Apwn5H8s3dBxynuZz00%2BIMh0x5nmVX1BrsY%2FmaSMRMlFYE%2FMqB1JgklLr4lLCxB8DiFO5J5k5IqZ0wsqAywJJLkau%2F4NBbUzvdPyYbwcEUxbjAIhaYYNfawuVJv87%2BBym2RVC3WyNXhxT%2BcaN5SSTaqVC%2BQXQLyBV2VN0wG2EQJ8lZWmnl7jFK3fWHwnyvTLR%2BDHl6VHmImx70VWNQCGMk1VzK%2BVbZ5KWPkqRv8Q7zpbd0Rt2q5Xn87WLBgmZhJCNEiGc0lFQiD%2F2WIayorwsWYNoxVofnJtnkxk1B0g%2FdwblUgCYCJUbXSGEynfJP%2BCUHnsPrCh%2BI%2FLxxdVgn6h4F0QfbJfK3QArMW6feN04RZPSFfy4ysvV70T2AGghOWTnA4hiSiQoCGQh5Z%2BFxhJW4xuMKTn%2F8EGOqUBlySGROyGEY%2Frdbb1UZu4zGgeqPyctq2fkcKFb3x2gP1uyQokcFz9lRMusviOrBIWcOB6uVRZQ5R%2FZAPhK5M2XLSN0BtAiB1AFsZL%2FfFvZqSwuFUXM726OKwlQe6r%2FYCWRn2WxQoTMEAfKEf574isFwzn1GRYQipYijDe4pYmz4jnmtuFJpJrViVNTfsaQDpYYgRP%2FomazaKLUnDnTk5zbthq7c8w&X-Amz-Signature=de4fcaa80c952845d21bc6184a821a34dc772eabca7d88aa0c6a5c86865fc7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAUHD6W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGUZRxoNUHq4L9HVYYSODhpYT8dXCSPsW0lhEWR5FtSmAiEAyzs68iWET2xGoXKN4miGulNG0ooDW5Esg45vJdqoOxAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC9lizUYgM%2F%2FFbBi0ircA1bnSskj21Pu4AjnwhhAO%2BGpmn1iW0AzuzYV8cz1UokRlJ6wsgkoLwa0KeZhxrAR4rz1bKDRdS6XAq0ycx8Ic8kt%2FdLgDxuBZI8U5%2FWQKWFu5kWuXZWHk3yjB2s1vEikP86KFuko7IJ50DtNkr4Vp9mOWMjagZrvPVYPlNvtBJRkQkuKSqxuG72%2F%2FYDnDpVCnNiZ5gXpcM1WNzUp%2BLnSn7POfT59zHF69u52Apwn5H8s3dBxynuZz00%2BIMh0x5nmVX1BrsY%2FmaSMRMlFYE%2FMqB1JgklLr4lLCxB8DiFO5J5k5IqZ0wsqAywJJLkau%2F4NBbUzvdPyYbwcEUxbjAIhaYYNfawuVJv87%2BBym2RVC3WyNXhxT%2BcaN5SSTaqVC%2BQXQLyBV2VN0wG2EQJ8lZWmnl7jFK3fWHwnyvTLR%2BDHl6VHmImx70VWNQCGMk1VzK%2BVbZ5KWPkqRv8Q7zpbd0Rt2q5Xn87WLBgmZhJCNEiGc0lFQiD%2F2WIayorwsWYNoxVofnJtnkxk1B0g%2FdwblUgCYCJUbXSGEynfJP%2BCUHnsPrCh%2BI%2FLxxdVgn6h4F0QfbJfK3QArMW6feN04RZPSFfy4ysvV70T2AGghOWTnA4hiSiQoCGQh5Z%2BFxhJW4xuMKTn%2F8EGOqUBlySGROyGEY%2Frdbb1UZu4zGgeqPyctq2fkcKFb3x2gP1uyQokcFz9lRMusviOrBIWcOB6uVRZQ5R%2FZAPhK5M2XLSN0BtAiB1AFsZL%2FfFvZqSwuFUXM726OKwlQe6r%2FYCWRn2WxQoTMEAfKEf574isFwzn1GRYQipYijDe4pYmz4jnmtuFJpJrViVNTfsaQDpYYgRP%2FomazaKLUnDnTk5zbthq7c8w&X-Amz-Signature=00b8d4b2670100ea85ee4839f2314c1d7ac0698f92ba85cc14f1a6a9a8c24c46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAUHD6W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGUZRxoNUHq4L9HVYYSODhpYT8dXCSPsW0lhEWR5FtSmAiEAyzs68iWET2xGoXKN4miGulNG0ooDW5Esg45vJdqoOxAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC9lizUYgM%2F%2FFbBi0ircA1bnSskj21Pu4AjnwhhAO%2BGpmn1iW0AzuzYV8cz1UokRlJ6wsgkoLwa0KeZhxrAR4rz1bKDRdS6XAq0ycx8Ic8kt%2FdLgDxuBZI8U5%2FWQKWFu5kWuXZWHk3yjB2s1vEikP86KFuko7IJ50DtNkr4Vp9mOWMjagZrvPVYPlNvtBJRkQkuKSqxuG72%2F%2FYDnDpVCnNiZ5gXpcM1WNzUp%2BLnSn7POfT59zHF69u52Apwn5H8s3dBxynuZz00%2BIMh0x5nmVX1BrsY%2FmaSMRMlFYE%2FMqB1JgklLr4lLCxB8DiFO5J5k5IqZ0wsqAywJJLkau%2F4NBbUzvdPyYbwcEUxbjAIhaYYNfawuVJv87%2BBym2RVC3WyNXhxT%2BcaN5SSTaqVC%2BQXQLyBV2VN0wG2EQJ8lZWmnl7jFK3fWHwnyvTLR%2BDHl6VHmImx70VWNQCGMk1VzK%2BVbZ5KWPkqRv8Q7zpbd0Rt2q5Xn87WLBgmZhJCNEiGc0lFQiD%2F2WIayorwsWYNoxVofnJtnkxk1B0g%2FdwblUgCYCJUbXSGEynfJP%2BCUHnsPrCh%2BI%2FLxxdVgn6h4F0QfbJfK3QArMW6feN04RZPSFfy4ysvV70T2AGghOWTnA4hiSiQoCGQh5Z%2BFxhJW4xuMKTn%2F8EGOqUBlySGROyGEY%2Frdbb1UZu4zGgeqPyctq2fkcKFb3x2gP1uyQokcFz9lRMusviOrBIWcOB6uVRZQ5R%2FZAPhK5M2XLSN0BtAiB1AFsZL%2FfFvZqSwuFUXM726OKwlQe6r%2FYCWRn2WxQoTMEAfKEf574isFwzn1GRYQipYijDe4pYmz4jnmtuFJpJrViVNTfsaQDpYYgRP%2FomazaKLUnDnTk5zbthq7c8w&X-Amz-Signature=26b702f3c870e97662bf7ec965e33bdddf8c54f2e74ee16314300c69c41fd94e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAUHD6W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGUZRxoNUHq4L9HVYYSODhpYT8dXCSPsW0lhEWR5FtSmAiEAyzs68iWET2xGoXKN4miGulNG0ooDW5Esg45vJdqoOxAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC9lizUYgM%2F%2FFbBi0ircA1bnSskj21Pu4AjnwhhAO%2BGpmn1iW0AzuzYV8cz1UokRlJ6wsgkoLwa0KeZhxrAR4rz1bKDRdS6XAq0ycx8Ic8kt%2FdLgDxuBZI8U5%2FWQKWFu5kWuXZWHk3yjB2s1vEikP86KFuko7IJ50DtNkr4Vp9mOWMjagZrvPVYPlNvtBJRkQkuKSqxuG72%2F%2FYDnDpVCnNiZ5gXpcM1WNzUp%2BLnSn7POfT59zHF69u52Apwn5H8s3dBxynuZz00%2BIMh0x5nmVX1BrsY%2FmaSMRMlFYE%2FMqB1JgklLr4lLCxB8DiFO5J5k5IqZ0wsqAywJJLkau%2F4NBbUzvdPyYbwcEUxbjAIhaYYNfawuVJv87%2BBym2RVC3WyNXhxT%2BcaN5SSTaqVC%2BQXQLyBV2VN0wG2EQJ8lZWmnl7jFK3fWHwnyvTLR%2BDHl6VHmImx70VWNQCGMk1VzK%2BVbZ5KWPkqRv8Q7zpbd0Rt2q5Xn87WLBgmZhJCNEiGc0lFQiD%2F2WIayorwsWYNoxVofnJtnkxk1B0g%2FdwblUgCYCJUbXSGEynfJP%2BCUHnsPrCh%2BI%2FLxxdVgn6h4F0QfbJfK3QArMW6feN04RZPSFfy4ysvV70T2AGghOWTnA4hiSiQoCGQh5Z%2BFxhJW4xuMKTn%2F8EGOqUBlySGROyGEY%2Frdbb1UZu4zGgeqPyctq2fkcKFb3x2gP1uyQokcFz9lRMusviOrBIWcOB6uVRZQ5R%2FZAPhK5M2XLSN0BtAiB1AFsZL%2FfFvZqSwuFUXM726OKwlQe6r%2FYCWRn2WxQoTMEAfKEf574isFwzn1GRYQipYijDe4pYmz4jnmtuFJpJrViVNTfsaQDpYYgRP%2FomazaKLUnDnTk5zbthq7c8w&X-Amz-Signature=5556edb70b20aed23dbb59cb41102f213f6ff35bb81f47f82fc9585dca4df514&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAUHD6W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGUZRxoNUHq4L9HVYYSODhpYT8dXCSPsW0lhEWR5FtSmAiEAyzs68iWET2xGoXKN4miGulNG0ooDW5Esg45vJdqoOxAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDC9lizUYgM%2F%2FFbBi0ircA1bnSskj21Pu4AjnwhhAO%2BGpmn1iW0AzuzYV8cz1UokRlJ6wsgkoLwa0KeZhxrAR4rz1bKDRdS6XAq0ycx8Ic8kt%2FdLgDxuBZI8U5%2FWQKWFu5kWuXZWHk3yjB2s1vEikP86KFuko7IJ50DtNkr4Vp9mOWMjagZrvPVYPlNvtBJRkQkuKSqxuG72%2F%2FYDnDpVCnNiZ5gXpcM1WNzUp%2BLnSn7POfT59zHF69u52Apwn5H8s3dBxynuZz00%2BIMh0x5nmVX1BrsY%2FmaSMRMlFYE%2FMqB1JgklLr4lLCxB8DiFO5J5k5IqZ0wsqAywJJLkau%2F4NBbUzvdPyYbwcEUxbjAIhaYYNfawuVJv87%2BBym2RVC3WyNXhxT%2BcaN5SSTaqVC%2BQXQLyBV2VN0wG2EQJ8lZWmnl7jFK3fWHwnyvTLR%2BDHl6VHmImx70VWNQCGMk1VzK%2BVbZ5KWPkqRv8Q7zpbd0Rt2q5Xn87WLBgmZhJCNEiGc0lFQiD%2F2WIayorwsWYNoxVofnJtnkxk1B0g%2FdwblUgCYCJUbXSGEynfJP%2BCUHnsPrCh%2BI%2FLxxdVgn6h4F0QfbJfK3QArMW6feN04RZPSFfy4ysvV70T2AGghOWTnA4hiSiQoCGQh5Z%2BFxhJW4xuMKTn%2F8EGOqUBlySGROyGEY%2Frdbb1UZu4zGgeqPyctq2fkcKFb3x2gP1uyQokcFz9lRMusviOrBIWcOB6uVRZQ5R%2FZAPhK5M2XLSN0BtAiB1AFsZL%2FfFvZqSwuFUXM726OKwlQe6r%2FYCWRn2WxQoTMEAfKEf574isFwzn1GRYQipYijDe4pYmz4jnmtuFJpJrViVNTfsaQDpYYgRP%2FomazaKLUnDnTk5zbthq7c8w&X-Amz-Signature=c76a5588751bd02269b895729cf1e4a2801e27da0924c3dfa942eadfa428891d&X-Amz-SignedHeaders=host&x-id=GetObject)
