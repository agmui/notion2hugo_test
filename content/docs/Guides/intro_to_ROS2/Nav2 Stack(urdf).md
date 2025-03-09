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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKWXYY3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGLtZPY1SLyAHZvNYoM8kFWeJ9a%2Bp5w50PvytAMHGcInAiARIgMhWPkOLT4YrxpdpWvFH3cWNtXWIs5O8%2BMpU%2FnJECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUytC4BnrfTfNJ4oOKtwDS%2FOkPFFS7UsyRF%2FBcUBZUQG5MySDb7mwelebApv6pt3t8QxM5IubNFaalE3PRMXpd0Hd5VldNLoy5v3wzS6Y0PIlXL7f0xwNiKxHwulnTu%2Fow9QawBfDYjck%2BAwOipCJfRPY9s0aG88Ts9rUY52FDPmJkblJcAvfkmShenwp37g9GZHj9Cs9YevoOlio9qJlCcVE4Xoo%2Blxv13lC2ihVn8iiODSJx98X2d%2FMIbWmZjj3diuKOoRvm8NgypXMI7ncQKfSyuvpWVgU5%2FeOGMj7o0kDpgyN10NNkn1zoxcGGzi4iY2xpmKDmFwJAcNgyCkEHVHsMiFNRBtrUJCejx2Del7HJ00Rhe%2FOKwjAIWs8c02M34MTvJz1SiHOOKeUIYSWQIr9fluhLgWN1xXy8kxYLDGOvKCCJuyY2ZquY8jNjCVxv0fNy4u%2B3xIpnIm879ldiN1zqwouZK%2BZKJr%2BzhWujVe3UvTQIOwkdRvqnVdDARzKPpOcnSrm1KSrq49tZ46UkISmH3CHGeETsatolFRbDb70UZbuL%2BIQavf88TVlg3XwDuHpcjB3SZP1Bcwb%2FfQnoWIXz0tas1nhvbqEDgsRUYGMKzVZnsAXvmXTQ7BD0JMdJPnzTTWEMK2G6esw6ZC2vgY6pgHJ7g2qxZlQ0cxHrVaFaJVIs9FQaAZ5%2FFDpUT%2BgfWNO1Ya6caVWi34FL7m7QZZIX5LHqNdw5m0eBZUuA9hyVbRizP1LEcLudXD%2B6VpjDCvm2qAmMRqPbGOd1gyY6SM6f2Y8bmMPB39J%2FYyBrDlNziclLMYzaEVNz8hIdhKC768dBmkx6AXcC2y4QbzZGgZYTZTstRVS81jbrvqttHxFIdvNQn3qR%2Bpt&X-Amz-Signature=b4e27b5dc650b86b4566f13921d0a8ad4bae7a4d48446d43448892b7278e6d68&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKWXYY3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGLtZPY1SLyAHZvNYoM8kFWeJ9a%2Bp5w50PvytAMHGcInAiARIgMhWPkOLT4YrxpdpWvFH3cWNtXWIs5O8%2BMpU%2FnJECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUytC4BnrfTfNJ4oOKtwDS%2FOkPFFS7UsyRF%2FBcUBZUQG5MySDb7mwelebApv6pt3t8QxM5IubNFaalE3PRMXpd0Hd5VldNLoy5v3wzS6Y0PIlXL7f0xwNiKxHwulnTu%2Fow9QawBfDYjck%2BAwOipCJfRPY9s0aG88Ts9rUY52FDPmJkblJcAvfkmShenwp37g9GZHj9Cs9YevoOlio9qJlCcVE4Xoo%2Blxv13lC2ihVn8iiODSJx98X2d%2FMIbWmZjj3diuKOoRvm8NgypXMI7ncQKfSyuvpWVgU5%2FeOGMj7o0kDpgyN10NNkn1zoxcGGzi4iY2xpmKDmFwJAcNgyCkEHVHsMiFNRBtrUJCejx2Del7HJ00Rhe%2FOKwjAIWs8c02M34MTvJz1SiHOOKeUIYSWQIr9fluhLgWN1xXy8kxYLDGOvKCCJuyY2ZquY8jNjCVxv0fNy4u%2B3xIpnIm879ldiN1zqwouZK%2BZKJr%2BzhWujVe3UvTQIOwkdRvqnVdDARzKPpOcnSrm1KSrq49tZ46UkISmH3CHGeETsatolFRbDb70UZbuL%2BIQavf88TVlg3XwDuHpcjB3SZP1Bcwb%2FfQnoWIXz0tas1nhvbqEDgsRUYGMKzVZnsAXvmXTQ7BD0JMdJPnzTTWEMK2G6esw6ZC2vgY6pgHJ7g2qxZlQ0cxHrVaFaJVIs9FQaAZ5%2FFDpUT%2BgfWNO1Ya6caVWi34FL7m7QZZIX5LHqNdw5m0eBZUuA9hyVbRizP1LEcLudXD%2B6VpjDCvm2qAmMRqPbGOd1gyY6SM6f2Y8bmMPB39J%2FYyBrDlNziclLMYzaEVNz8hIdhKC768dBmkx6AXcC2y4QbzZGgZYTZTstRVS81jbrvqttHxFIdvNQn3qR%2Bpt&X-Amz-Signature=2b75d0a9d44179c6570343b636173300584f4253aea12c13a964ff596599ba21&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKWXYY3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGLtZPY1SLyAHZvNYoM8kFWeJ9a%2Bp5w50PvytAMHGcInAiARIgMhWPkOLT4YrxpdpWvFH3cWNtXWIs5O8%2BMpU%2FnJECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUytC4BnrfTfNJ4oOKtwDS%2FOkPFFS7UsyRF%2FBcUBZUQG5MySDb7mwelebApv6pt3t8QxM5IubNFaalE3PRMXpd0Hd5VldNLoy5v3wzS6Y0PIlXL7f0xwNiKxHwulnTu%2Fow9QawBfDYjck%2BAwOipCJfRPY9s0aG88Ts9rUY52FDPmJkblJcAvfkmShenwp37g9GZHj9Cs9YevoOlio9qJlCcVE4Xoo%2Blxv13lC2ihVn8iiODSJx98X2d%2FMIbWmZjj3diuKOoRvm8NgypXMI7ncQKfSyuvpWVgU5%2FeOGMj7o0kDpgyN10NNkn1zoxcGGzi4iY2xpmKDmFwJAcNgyCkEHVHsMiFNRBtrUJCejx2Del7HJ00Rhe%2FOKwjAIWs8c02M34MTvJz1SiHOOKeUIYSWQIr9fluhLgWN1xXy8kxYLDGOvKCCJuyY2ZquY8jNjCVxv0fNy4u%2B3xIpnIm879ldiN1zqwouZK%2BZKJr%2BzhWujVe3UvTQIOwkdRvqnVdDARzKPpOcnSrm1KSrq49tZ46UkISmH3CHGeETsatolFRbDb70UZbuL%2BIQavf88TVlg3XwDuHpcjB3SZP1Bcwb%2FfQnoWIXz0tas1nhvbqEDgsRUYGMKzVZnsAXvmXTQ7BD0JMdJPnzTTWEMK2G6esw6ZC2vgY6pgHJ7g2qxZlQ0cxHrVaFaJVIs9FQaAZ5%2FFDpUT%2BgfWNO1Ya6caVWi34FL7m7QZZIX5LHqNdw5m0eBZUuA9hyVbRizP1LEcLudXD%2B6VpjDCvm2qAmMRqPbGOd1gyY6SM6f2Y8bmMPB39J%2FYyBrDlNziclLMYzaEVNz8hIdhKC768dBmkx6AXcC2y4QbzZGgZYTZTstRVS81jbrvqttHxFIdvNQn3qR%2Bpt&X-Amz-Signature=079adfe036c0fae98cca1287ed3badc9e66bdd02f660b892ddc873105eb06d83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKWXYY3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGLtZPY1SLyAHZvNYoM8kFWeJ9a%2Bp5w50PvytAMHGcInAiARIgMhWPkOLT4YrxpdpWvFH3cWNtXWIs5O8%2BMpU%2FnJECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUytC4BnrfTfNJ4oOKtwDS%2FOkPFFS7UsyRF%2FBcUBZUQG5MySDb7mwelebApv6pt3t8QxM5IubNFaalE3PRMXpd0Hd5VldNLoy5v3wzS6Y0PIlXL7f0xwNiKxHwulnTu%2Fow9QawBfDYjck%2BAwOipCJfRPY9s0aG88Ts9rUY52FDPmJkblJcAvfkmShenwp37g9GZHj9Cs9YevoOlio9qJlCcVE4Xoo%2Blxv13lC2ihVn8iiODSJx98X2d%2FMIbWmZjj3diuKOoRvm8NgypXMI7ncQKfSyuvpWVgU5%2FeOGMj7o0kDpgyN10NNkn1zoxcGGzi4iY2xpmKDmFwJAcNgyCkEHVHsMiFNRBtrUJCejx2Del7HJ00Rhe%2FOKwjAIWs8c02M34MTvJz1SiHOOKeUIYSWQIr9fluhLgWN1xXy8kxYLDGOvKCCJuyY2ZquY8jNjCVxv0fNy4u%2B3xIpnIm879ldiN1zqwouZK%2BZKJr%2BzhWujVe3UvTQIOwkdRvqnVdDARzKPpOcnSrm1KSrq49tZ46UkISmH3CHGeETsatolFRbDb70UZbuL%2BIQavf88TVlg3XwDuHpcjB3SZP1Bcwb%2FfQnoWIXz0tas1nhvbqEDgsRUYGMKzVZnsAXvmXTQ7BD0JMdJPnzTTWEMK2G6esw6ZC2vgY6pgHJ7g2qxZlQ0cxHrVaFaJVIs9FQaAZ5%2FFDpUT%2BgfWNO1Ya6caVWi34FL7m7QZZIX5LHqNdw5m0eBZUuA9hyVbRizP1LEcLudXD%2B6VpjDCvm2qAmMRqPbGOd1gyY6SM6f2Y8bmMPB39J%2FYyBrDlNziclLMYzaEVNz8hIdhKC768dBmkx6AXcC2y4QbzZGgZYTZTstRVS81jbrvqttHxFIdvNQn3qR%2Bpt&X-Amz-Signature=405d24f52967a993f82f0b758ce8f7666fcc610ddf67f3e260d76a651bec660a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKWXYY3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGLtZPY1SLyAHZvNYoM8kFWeJ9a%2Bp5w50PvytAMHGcInAiARIgMhWPkOLT4YrxpdpWvFH3cWNtXWIs5O8%2BMpU%2FnJECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUytC4BnrfTfNJ4oOKtwDS%2FOkPFFS7UsyRF%2FBcUBZUQG5MySDb7mwelebApv6pt3t8QxM5IubNFaalE3PRMXpd0Hd5VldNLoy5v3wzS6Y0PIlXL7f0xwNiKxHwulnTu%2Fow9QawBfDYjck%2BAwOipCJfRPY9s0aG88Ts9rUY52FDPmJkblJcAvfkmShenwp37g9GZHj9Cs9YevoOlio9qJlCcVE4Xoo%2Blxv13lC2ihVn8iiODSJx98X2d%2FMIbWmZjj3diuKOoRvm8NgypXMI7ncQKfSyuvpWVgU5%2FeOGMj7o0kDpgyN10NNkn1zoxcGGzi4iY2xpmKDmFwJAcNgyCkEHVHsMiFNRBtrUJCejx2Del7HJ00Rhe%2FOKwjAIWs8c02M34MTvJz1SiHOOKeUIYSWQIr9fluhLgWN1xXy8kxYLDGOvKCCJuyY2ZquY8jNjCVxv0fNy4u%2B3xIpnIm879ldiN1zqwouZK%2BZKJr%2BzhWujVe3UvTQIOwkdRvqnVdDARzKPpOcnSrm1KSrq49tZ46UkISmH3CHGeETsatolFRbDb70UZbuL%2BIQavf88TVlg3XwDuHpcjB3SZP1Bcwb%2FfQnoWIXz0tas1nhvbqEDgsRUYGMKzVZnsAXvmXTQ7BD0JMdJPnzTTWEMK2G6esw6ZC2vgY6pgHJ7g2qxZlQ0cxHrVaFaJVIs9FQaAZ5%2FFDpUT%2BgfWNO1Ya6caVWi34FL7m7QZZIX5LHqNdw5m0eBZUuA9hyVbRizP1LEcLudXD%2B6VpjDCvm2qAmMRqPbGOd1gyY6SM6f2Y8bmMPB39J%2FYyBrDlNziclLMYzaEVNz8hIdhKC768dBmkx6AXcC2y4QbzZGgZYTZTstRVS81jbrvqttHxFIdvNQn3qR%2Bpt&X-Amz-Signature=5c405bc9e7f7bcbc6ee85c105ec35647cb04cc0e3e7249295bd728a7f0931c47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKWXYY3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGLtZPY1SLyAHZvNYoM8kFWeJ9a%2Bp5w50PvytAMHGcInAiARIgMhWPkOLT4YrxpdpWvFH3cWNtXWIs5O8%2BMpU%2FnJECr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMUytC4BnrfTfNJ4oOKtwDS%2FOkPFFS7UsyRF%2FBcUBZUQG5MySDb7mwelebApv6pt3t8QxM5IubNFaalE3PRMXpd0Hd5VldNLoy5v3wzS6Y0PIlXL7f0xwNiKxHwulnTu%2Fow9QawBfDYjck%2BAwOipCJfRPY9s0aG88Ts9rUY52FDPmJkblJcAvfkmShenwp37g9GZHj9Cs9YevoOlio9qJlCcVE4Xoo%2Blxv13lC2ihVn8iiODSJx98X2d%2FMIbWmZjj3diuKOoRvm8NgypXMI7ncQKfSyuvpWVgU5%2FeOGMj7o0kDpgyN10NNkn1zoxcGGzi4iY2xpmKDmFwJAcNgyCkEHVHsMiFNRBtrUJCejx2Del7HJ00Rhe%2FOKwjAIWs8c02M34MTvJz1SiHOOKeUIYSWQIr9fluhLgWN1xXy8kxYLDGOvKCCJuyY2ZquY8jNjCVxv0fNy4u%2B3xIpnIm879ldiN1zqwouZK%2BZKJr%2BzhWujVe3UvTQIOwkdRvqnVdDARzKPpOcnSrm1KSrq49tZ46UkISmH3CHGeETsatolFRbDb70UZbuL%2BIQavf88TVlg3XwDuHpcjB3SZP1Bcwb%2FfQnoWIXz0tas1nhvbqEDgsRUYGMKzVZnsAXvmXTQ7BD0JMdJPnzTTWEMK2G6esw6ZC2vgY6pgHJ7g2qxZlQ0cxHrVaFaJVIs9FQaAZ5%2FFDpUT%2BgfWNO1Ya6caVWi34FL7m7QZZIX5LHqNdw5m0eBZUuA9hyVbRizP1LEcLudXD%2B6VpjDCvm2qAmMRqPbGOd1gyY6SM6f2Y8bmMPB39J%2FYyBrDlNziclLMYzaEVNz8hIdhKC768dBmkx6AXcC2y4QbzZGgZYTZTstRVS81jbrvqttHxFIdvNQn3qR%2Bpt&X-Amz-Signature=c2456038531b4ebb5ceb1090e72b77920c3c533ff1490b70ca2b55d69045217a&X-Amz-SignedHeaders=host&x-id=GetObject)
