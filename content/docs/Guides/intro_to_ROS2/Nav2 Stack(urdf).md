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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJLQ3U3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdweVoqAsqzDdSJzBugpc9M4WmvHFqibnNZmahBcBxqwIgYQZlZMoHmKVjIdYynsOjg3x8YMnO0Sq92jUau0ZuFFQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwi6z0LLnnIs9bX3ircA35ltiMNPTkYyVK5senXbGDXv%2BDZO%2Fjlrv8sf6DmNxUc8TOn2xNvqtAOzAgS0Z7RCQKkrCaK5E5v7bXsKgVb6RfTLyqnuVbQ%2BWmCKpLYjdsgXb%2BYw7DE19Em%2FFLXKrAp%2BUQVWFvJTa2EUExuQEWa5o2hnh2OVSruio6ovirpcWxjnZ3mnVSeG9MD7z9tpzjt7lqDl4YbLnc8Cz2DVlZeoGZl4x3laP1ir3fhyeAk3nPNUetljQDCOO9qcL58tx9ksSIELcvar2lQ%2BmSEr%2B4eqdL2afqXO%2FvSEcbROI1N8ctyKdTJ7vpdcmIgQ5YfiahLEHqTjyuXePQsnTuFBFQ6gyrBIZD8eFsyx3gEFGy7nBto0ktYpBBiPp2N%2FjVViOteO7YNbwk6GF6ylU1WnL4ubdweFcc9NpCkVcFkYRTcPuMjNFKG3zf4KDWogd12E9xT2Qv5JmO4ytgz9l800NyWl5hmqB4k7B5MlDg33FII0sPOF9vg3YIOSRw86U0Sct3Ndnom00u%2B3KUuxUMZP0IkMwZd5REngw%2BjuWk%2FmW6KmS1bxvLi4ZpjsIEunXMjmxKIky2BJfmrvguS%2Ftnd61kiTWOMAakx5sggYp6MFb7kqUom%2BXMPq8xalf3s7EqJMPKy7cAGOqUB2yEIEZKq5%2FpqOUj%2FBiEOOACEUGBhfE078%2B0PqM6SXDJCv5umxsNfOtMC7U6ngxTmQF8TacclNwFx2thEMa%2F%2FQ5ChbEP359w0lVzkvy%2FtCqCI63VGUrBQJAlgYCUnFqTRNxzNmito2BhNO7xMfJAaPb4uAInaEBzUyDfiyvdXPkgsuGyzlSobgTDpTlRUUv1xlBhloVUQ1atLhwcYilUuds82xAl%2F&X-Amz-Signature=1dbfdfdd8a16edf31f9680c97ab934a2c95b7c1780452a6b9f9ff9474edcd85b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJLQ3U3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdweVoqAsqzDdSJzBugpc9M4WmvHFqibnNZmahBcBxqwIgYQZlZMoHmKVjIdYynsOjg3x8YMnO0Sq92jUau0ZuFFQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwi6z0LLnnIs9bX3ircA35ltiMNPTkYyVK5senXbGDXv%2BDZO%2Fjlrv8sf6DmNxUc8TOn2xNvqtAOzAgS0Z7RCQKkrCaK5E5v7bXsKgVb6RfTLyqnuVbQ%2BWmCKpLYjdsgXb%2BYw7DE19Em%2FFLXKrAp%2BUQVWFvJTa2EUExuQEWa5o2hnh2OVSruio6ovirpcWxjnZ3mnVSeG9MD7z9tpzjt7lqDl4YbLnc8Cz2DVlZeoGZl4x3laP1ir3fhyeAk3nPNUetljQDCOO9qcL58tx9ksSIELcvar2lQ%2BmSEr%2B4eqdL2afqXO%2FvSEcbROI1N8ctyKdTJ7vpdcmIgQ5YfiahLEHqTjyuXePQsnTuFBFQ6gyrBIZD8eFsyx3gEFGy7nBto0ktYpBBiPp2N%2FjVViOteO7YNbwk6GF6ylU1WnL4ubdweFcc9NpCkVcFkYRTcPuMjNFKG3zf4KDWogd12E9xT2Qv5JmO4ytgz9l800NyWl5hmqB4k7B5MlDg33FII0sPOF9vg3YIOSRw86U0Sct3Ndnom00u%2B3KUuxUMZP0IkMwZd5REngw%2BjuWk%2FmW6KmS1bxvLi4ZpjsIEunXMjmxKIky2BJfmrvguS%2Ftnd61kiTWOMAakx5sggYp6MFb7kqUom%2BXMPq8xalf3s7EqJMPKy7cAGOqUB2yEIEZKq5%2FpqOUj%2FBiEOOACEUGBhfE078%2B0PqM6SXDJCv5umxsNfOtMC7U6ngxTmQF8TacclNwFx2thEMa%2F%2FQ5ChbEP359w0lVzkvy%2FtCqCI63VGUrBQJAlgYCUnFqTRNxzNmito2BhNO7xMfJAaPb4uAInaEBzUyDfiyvdXPkgsuGyzlSobgTDpTlRUUv1xlBhloVUQ1atLhwcYilUuds82xAl%2F&X-Amz-Signature=3b2ad7352e830a8736a9ee497bef706741fe62c56b71922e82c98685285eb979&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJLQ3U3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdweVoqAsqzDdSJzBugpc9M4WmvHFqibnNZmahBcBxqwIgYQZlZMoHmKVjIdYynsOjg3x8YMnO0Sq92jUau0ZuFFQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwi6z0LLnnIs9bX3ircA35ltiMNPTkYyVK5senXbGDXv%2BDZO%2Fjlrv8sf6DmNxUc8TOn2xNvqtAOzAgS0Z7RCQKkrCaK5E5v7bXsKgVb6RfTLyqnuVbQ%2BWmCKpLYjdsgXb%2BYw7DE19Em%2FFLXKrAp%2BUQVWFvJTa2EUExuQEWa5o2hnh2OVSruio6ovirpcWxjnZ3mnVSeG9MD7z9tpzjt7lqDl4YbLnc8Cz2DVlZeoGZl4x3laP1ir3fhyeAk3nPNUetljQDCOO9qcL58tx9ksSIELcvar2lQ%2BmSEr%2B4eqdL2afqXO%2FvSEcbROI1N8ctyKdTJ7vpdcmIgQ5YfiahLEHqTjyuXePQsnTuFBFQ6gyrBIZD8eFsyx3gEFGy7nBto0ktYpBBiPp2N%2FjVViOteO7YNbwk6GF6ylU1WnL4ubdweFcc9NpCkVcFkYRTcPuMjNFKG3zf4KDWogd12E9xT2Qv5JmO4ytgz9l800NyWl5hmqB4k7B5MlDg33FII0sPOF9vg3YIOSRw86U0Sct3Ndnom00u%2B3KUuxUMZP0IkMwZd5REngw%2BjuWk%2FmW6KmS1bxvLi4ZpjsIEunXMjmxKIky2BJfmrvguS%2Ftnd61kiTWOMAakx5sggYp6MFb7kqUom%2BXMPq8xalf3s7EqJMPKy7cAGOqUB2yEIEZKq5%2FpqOUj%2FBiEOOACEUGBhfE078%2B0PqM6SXDJCv5umxsNfOtMC7U6ngxTmQF8TacclNwFx2thEMa%2F%2FQ5ChbEP359w0lVzkvy%2FtCqCI63VGUrBQJAlgYCUnFqTRNxzNmito2BhNO7xMfJAaPb4uAInaEBzUyDfiyvdXPkgsuGyzlSobgTDpTlRUUv1xlBhloVUQ1atLhwcYilUuds82xAl%2F&X-Amz-Signature=431b90f05aad45d1082a99eca9651dd80c239230dc6e37218cdd3b69e596762a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJLQ3U3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdweVoqAsqzDdSJzBugpc9M4WmvHFqibnNZmahBcBxqwIgYQZlZMoHmKVjIdYynsOjg3x8YMnO0Sq92jUau0ZuFFQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwi6z0LLnnIs9bX3ircA35ltiMNPTkYyVK5senXbGDXv%2BDZO%2Fjlrv8sf6DmNxUc8TOn2xNvqtAOzAgS0Z7RCQKkrCaK5E5v7bXsKgVb6RfTLyqnuVbQ%2BWmCKpLYjdsgXb%2BYw7DE19Em%2FFLXKrAp%2BUQVWFvJTa2EUExuQEWa5o2hnh2OVSruio6ovirpcWxjnZ3mnVSeG9MD7z9tpzjt7lqDl4YbLnc8Cz2DVlZeoGZl4x3laP1ir3fhyeAk3nPNUetljQDCOO9qcL58tx9ksSIELcvar2lQ%2BmSEr%2B4eqdL2afqXO%2FvSEcbROI1N8ctyKdTJ7vpdcmIgQ5YfiahLEHqTjyuXePQsnTuFBFQ6gyrBIZD8eFsyx3gEFGy7nBto0ktYpBBiPp2N%2FjVViOteO7YNbwk6GF6ylU1WnL4ubdweFcc9NpCkVcFkYRTcPuMjNFKG3zf4KDWogd12E9xT2Qv5JmO4ytgz9l800NyWl5hmqB4k7B5MlDg33FII0sPOF9vg3YIOSRw86U0Sct3Ndnom00u%2B3KUuxUMZP0IkMwZd5REngw%2BjuWk%2FmW6KmS1bxvLi4ZpjsIEunXMjmxKIky2BJfmrvguS%2Ftnd61kiTWOMAakx5sggYp6MFb7kqUom%2BXMPq8xalf3s7EqJMPKy7cAGOqUB2yEIEZKq5%2FpqOUj%2FBiEOOACEUGBhfE078%2B0PqM6SXDJCv5umxsNfOtMC7U6ngxTmQF8TacclNwFx2thEMa%2F%2FQ5ChbEP359w0lVzkvy%2FtCqCI63VGUrBQJAlgYCUnFqTRNxzNmito2BhNO7xMfJAaPb4uAInaEBzUyDfiyvdXPkgsuGyzlSobgTDpTlRUUv1xlBhloVUQ1atLhwcYilUuds82xAl%2F&X-Amz-Signature=741c21118cd336abef925385e5933bffa7b369822b14b78c9a5c9ae8e60e4555&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJLQ3U3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdweVoqAsqzDdSJzBugpc9M4WmvHFqibnNZmahBcBxqwIgYQZlZMoHmKVjIdYynsOjg3x8YMnO0Sq92jUau0ZuFFQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwi6z0LLnnIs9bX3ircA35ltiMNPTkYyVK5senXbGDXv%2BDZO%2Fjlrv8sf6DmNxUc8TOn2xNvqtAOzAgS0Z7RCQKkrCaK5E5v7bXsKgVb6RfTLyqnuVbQ%2BWmCKpLYjdsgXb%2BYw7DE19Em%2FFLXKrAp%2BUQVWFvJTa2EUExuQEWa5o2hnh2OVSruio6ovirpcWxjnZ3mnVSeG9MD7z9tpzjt7lqDl4YbLnc8Cz2DVlZeoGZl4x3laP1ir3fhyeAk3nPNUetljQDCOO9qcL58tx9ksSIELcvar2lQ%2BmSEr%2B4eqdL2afqXO%2FvSEcbROI1N8ctyKdTJ7vpdcmIgQ5YfiahLEHqTjyuXePQsnTuFBFQ6gyrBIZD8eFsyx3gEFGy7nBto0ktYpBBiPp2N%2FjVViOteO7YNbwk6GF6ylU1WnL4ubdweFcc9NpCkVcFkYRTcPuMjNFKG3zf4KDWogd12E9xT2Qv5JmO4ytgz9l800NyWl5hmqB4k7B5MlDg33FII0sPOF9vg3YIOSRw86U0Sct3Ndnom00u%2B3KUuxUMZP0IkMwZd5REngw%2BjuWk%2FmW6KmS1bxvLi4ZpjsIEunXMjmxKIky2BJfmrvguS%2Ftnd61kiTWOMAakx5sggYp6MFb7kqUom%2BXMPq8xalf3s7EqJMPKy7cAGOqUB2yEIEZKq5%2FpqOUj%2FBiEOOACEUGBhfE078%2B0PqM6SXDJCv5umxsNfOtMC7U6ngxTmQF8TacclNwFx2thEMa%2F%2FQ5ChbEP359w0lVzkvy%2FtCqCI63VGUrBQJAlgYCUnFqTRNxzNmito2BhNO7xMfJAaPb4uAInaEBzUyDfiyvdXPkgsuGyzlSobgTDpTlRUUv1xlBhloVUQ1atLhwcYilUuds82xAl%2F&X-Amz-Signature=71f7356de7c93696f85ab75684fb65f73ad1a365650e4330170d2a5b97b7b79c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVJLQ3U3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdweVoqAsqzDdSJzBugpc9M4WmvHFqibnNZmahBcBxqwIgYQZlZMoHmKVjIdYynsOjg3x8YMnO0Sq92jUau0ZuFFQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDGwi6z0LLnnIs9bX3ircA35ltiMNPTkYyVK5senXbGDXv%2BDZO%2Fjlrv8sf6DmNxUc8TOn2xNvqtAOzAgS0Z7RCQKkrCaK5E5v7bXsKgVb6RfTLyqnuVbQ%2BWmCKpLYjdsgXb%2BYw7DE19Em%2FFLXKrAp%2BUQVWFvJTa2EUExuQEWa5o2hnh2OVSruio6ovirpcWxjnZ3mnVSeG9MD7z9tpzjt7lqDl4YbLnc8Cz2DVlZeoGZl4x3laP1ir3fhyeAk3nPNUetljQDCOO9qcL58tx9ksSIELcvar2lQ%2BmSEr%2B4eqdL2afqXO%2FvSEcbROI1N8ctyKdTJ7vpdcmIgQ5YfiahLEHqTjyuXePQsnTuFBFQ6gyrBIZD8eFsyx3gEFGy7nBto0ktYpBBiPp2N%2FjVViOteO7YNbwk6GF6ylU1WnL4ubdweFcc9NpCkVcFkYRTcPuMjNFKG3zf4KDWogd12E9xT2Qv5JmO4ytgz9l800NyWl5hmqB4k7B5MlDg33FII0sPOF9vg3YIOSRw86U0Sct3Ndnom00u%2B3KUuxUMZP0IkMwZd5REngw%2BjuWk%2FmW6KmS1bxvLi4ZpjsIEunXMjmxKIky2BJfmrvguS%2Ftnd61kiTWOMAakx5sggYp6MFb7kqUom%2BXMPq8xalf3s7EqJMPKy7cAGOqUB2yEIEZKq5%2FpqOUj%2FBiEOOACEUGBhfE078%2B0PqM6SXDJCv5umxsNfOtMC7U6ngxTmQF8TacclNwFx2thEMa%2F%2FQ5ChbEP359w0lVzkvy%2FtCqCI63VGUrBQJAlgYCUnFqTRNxzNmito2BhNO7xMfJAaPb4uAInaEBzUyDfiyvdXPkgsuGyzlSobgTDpTlRUUv1xlBhloVUQ1atLhwcYilUuds82xAl%2F&X-Amz-Signature=c09f0274a2eafabee81637c01574573250e16977ba747769b7b8a230d62121e6&X-Amz-SignedHeaders=host&x-id=GetObject)
