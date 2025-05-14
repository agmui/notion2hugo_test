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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VAZAOX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCaqq6rCF5Y6Jht8LqpB9uNU%2FsVtj%2BufQoNgCRxMciu1AIgIDbH0DtztIAFDPlbLOGbUtqq4Oo9CoIGwX1mGVWrng4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNL3ZnMDhjnbfkSzGSrcA8UwlGmje0KvLzZe1IkoRA8RNrmd%2FskIhCkw1e9%2FODlnWPdWVqXS6%2Fu8iuoat4xRqNkZUMbaVqqz5kTCEbJXT3fPCe9dBEgNTROAKxfFqd%2FX2YH8H4xz9CvSlzDIEbZ6s6JM9DZHuKjoEe6280Eu8gaxoDsMxRwkjkkHBvYHMo14IIfA4YjHc8kxwes%2FQgjbTKhLU%2FAtkUBMIrx0Q7%2FMl3NFpBMZ8QWY4XUXb6FnQrPeSxxz2cJr%2FJ%2BNnwd4LsI7h%2F9E4h8lq7nd2mA%2FZPxq4wSsAXNbwKpY0nFjYrGv05gBbmutOgcKq%2F7j39TeCc1Bt5uSYKlJyDvUOT6VYkXB%2B3pgwnSw%2FeabH36n24h3IlEigvZrkWVOzWDcDto8drpfe56NN1aIgJRt9Qp4MnR4yqpM621hjBJ%2B7OuRE7QYRUElFMJ7bDzbqDn0CPV0Q60kA9%2Bb2Dxfq80KXcaL%2FbsXcw%2BwT%2BltGPKHy2fVIEqoNeBRah0LWZANsiWCrDSuAhbY26aMTHWoOtKlh0VKIBM1f3e9mrAyKOZO92jwjw3%2FQgDs9ky3kNlJt0ZWgOuWzeoESbXcp4Mkyh3z1gSP5YHgtsX7Q5Ybx%2FksM4cp2wLXnt4CulDlDFU0LB1R6T6%2FMKzTkcEGOqUBdGdvaTkTWP2VId5q5cALil6V6KiE%2BTAOUVf2apNi8rKBX5HaGyBkl6LcHL%2Fn%2BVKUdFIFBvKBSB3mT0GrD%2BZJqJaO7EuCXzhWMXW6lHyPG6hU2qdbU2kHmcEVqo%2F04T2iBrVeLjB604jgYOhqnpZPodIaO2qbROLnqsx%2BjxZFAZ%2BvM2uCdaL6%2FKTjlAfAswfXGWg557ig14mq9GNvDiX%2BLBqO17Y9&X-Amz-Signature=74500bb975892699f411d466595819b205752c3c54bb88b0bd58542ab8f754b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VAZAOX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCaqq6rCF5Y6Jht8LqpB9uNU%2FsVtj%2BufQoNgCRxMciu1AIgIDbH0DtztIAFDPlbLOGbUtqq4Oo9CoIGwX1mGVWrng4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNL3ZnMDhjnbfkSzGSrcA8UwlGmje0KvLzZe1IkoRA8RNrmd%2FskIhCkw1e9%2FODlnWPdWVqXS6%2Fu8iuoat4xRqNkZUMbaVqqz5kTCEbJXT3fPCe9dBEgNTROAKxfFqd%2FX2YH8H4xz9CvSlzDIEbZ6s6JM9DZHuKjoEe6280Eu8gaxoDsMxRwkjkkHBvYHMo14IIfA4YjHc8kxwes%2FQgjbTKhLU%2FAtkUBMIrx0Q7%2FMl3NFpBMZ8QWY4XUXb6FnQrPeSxxz2cJr%2FJ%2BNnwd4LsI7h%2F9E4h8lq7nd2mA%2FZPxq4wSsAXNbwKpY0nFjYrGv05gBbmutOgcKq%2F7j39TeCc1Bt5uSYKlJyDvUOT6VYkXB%2B3pgwnSw%2FeabH36n24h3IlEigvZrkWVOzWDcDto8drpfe56NN1aIgJRt9Qp4MnR4yqpM621hjBJ%2B7OuRE7QYRUElFMJ7bDzbqDn0CPV0Q60kA9%2Bb2Dxfq80KXcaL%2FbsXcw%2BwT%2BltGPKHy2fVIEqoNeBRah0LWZANsiWCrDSuAhbY26aMTHWoOtKlh0VKIBM1f3e9mrAyKOZO92jwjw3%2FQgDs9ky3kNlJt0ZWgOuWzeoESbXcp4Mkyh3z1gSP5YHgtsX7Q5Ybx%2FksM4cp2wLXnt4CulDlDFU0LB1R6T6%2FMKzTkcEGOqUBdGdvaTkTWP2VId5q5cALil6V6KiE%2BTAOUVf2apNi8rKBX5HaGyBkl6LcHL%2Fn%2BVKUdFIFBvKBSB3mT0GrD%2BZJqJaO7EuCXzhWMXW6lHyPG6hU2qdbU2kHmcEVqo%2F04T2iBrVeLjB604jgYOhqnpZPodIaO2qbROLnqsx%2BjxZFAZ%2BvM2uCdaL6%2FKTjlAfAswfXGWg557ig14mq9GNvDiX%2BLBqO17Y9&X-Amz-Signature=19ca495d2f10e482b0273ad43d722b4dac571ea64657fc48febd3379094020f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VAZAOX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCaqq6rCF5Y6Jht8LqpB9uNU%2FsVtj%2BufQoNgCRxMciu1AIgIDbH0DtztIAFDPlbLOGbUtqq4Oo9CoIGwX1mGVWrng4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNL3ZnMDhjnbfkSzGSrcA8UwlGmje0KvLzZe1IkoRA8RNrmd%2FskIhCkw1e9%2FODlnWPdWVqXS6%2Fu8iuoat4xRqNkZUMbaVqqz5kTCEbJXT3fPCe9dBEgNTROAKxfFqd%2FX2YH8H4xz9CvSlzDIEbZ6s6JM9DZHuKjoEe6280Eu8gaxoDsMxRwkjkkHBvYHMo14IIfA4YjHc8kxwes%2FQgjbTKhLU%2FAtkUBMIrx0Q7%2FMl3NFpBMZ8QWY4XUXb6FnQrPeSxxz2cJr%2FJ%2BNnwd4LsI7h%2F9E4h8lq7nd2mA%2FZPxq4wSsAXNbwKpY0nFjYrGv05gBbmutOgcKq%2F7j39TeCc1Bt5uSYKlJyDvUOT6VYkXB%2B3pgwnSw%2FeabH36n24h3IlEigvZrkWVOzWDcDto8drpfe56NN1aIgJRt9Qp4MnR4yqpM621hjBJ%2B7OuRE7QYRUElFMJ7bDzbqDn0CPV0Q60kA9%2Bb2Dxfq80KXcaL%2FbsXcw%2BwT%2BltGPKHy2fVIEqoNeBRah0LWZANsiWCrDSuAhbY26aMTHWoOtKlh0VKIBM1f3e9mrAyKOZO92jwjw3%2FQgDs9ky3kNlJt0ZWgOuWzeoESbXcp4Mkyh3z1gSP5YHgtsX7Q5Ybx%2FksM4cp2wLXnt4CulDlDFU0LB1R6T6%2FMKzTkcEGOqUBdGdvaTkTWP2VId5q5cALil6V6KiE%2BTAOUVf2apNi8rKBX5HaGyBkl6LcHL%2Fn%2BVKUdFIFBvKBSB3mT0GrD%2BZJqJaO7EuCXzhWMXW6lHyPG6hU2qdbU2kHmcEVqo%2F04T2iBrVeLjB604jgYOhqnpZPodIaO2qbROLnqsx%2BjxZFAZ%2BvM2uCdaL6%2FKTjlAfAswfXGWg557ig14mq9GNvDiX%2BLBqO17Y9&X-Amz-Signature=90cc01b6e9c4c306d288ef8f9b7401e0adcd41071077c259fda2a03294a4ff27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VAZAOX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCaqq6rCF5Y6Jht8LqpB9uNU%2FsVtj%2BufQoNgCRxMciu1AIgIDbH0DtztIAFDPlbLOGbUtqq4Oo9CoIGwX1mGVWrng4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNL3ZnMDhjnbfkSzGSrcA8UwlGmje0KvLzZe1IkoRA8RNrmd%2FskIhCkw1e9%2FODlnWPdWVqXS6%2Fu8iuoat4xRqNkZUMbaVqqz5kTCEbJXT3fPCe9dBEgNTROAKxfFqd%2FX2YH8H4xz9CvSlzDIEbZ6s6JM9DZHuKjoEe6280Eu8gaxoDsMxRwkjkkHBvYHMo14IIfA4YjHc8kxwes%2FQgjbTKhLU%2FAtkUBMIrx0Q7%2FMl3NFpBMZ8QWY4XUXb6FnQrPeSxxz2cJr%2FJ%2BNnwd4LsI7h%2F9E4h8lq7nd2mA%2FZPxq4wSsAXNbwKpY0nFjYrGv05gBbmutOgcKq%2F7j39TeCc1Bt5uSYKlJyDvUOT6VYkXB%2B3pgwnSw%2FeabH36n24h3IlEigvZrkWVOzWDcDto8drpfe56NN1aIgJRt9Qp4MnR4yqpM621hjBJ%2B7OuRE7QYRUElFMJ7bDzbqDn0CPV0Q60kA9%2Bb2Dxfq80KXcaL%2FbsXcw%2BwT%2BltGPKHy2fVIEqoNeBRah0LWZANsiWCrDSuAhbY26aMTHWoOtKlh0VKIBM1f3e9mrAyKOZO92jwjw3%2FQgDs9ky3kNlJt0ZWgOuWzeoESbXcp4Mkyh3z1gSP5YHgtsX7Q5Ybx%2FksM4cp2wLXnt4CulDlDFU0LB1R6T6%2FMKzTkcEGOqUBdGdvaTkTWP2VId5q5cALil6V6KiE%2BTAOUVf2apNi8rKBX5HaGyBkl6LcHL%2Fn%2BVKUdFIFBvKBSB3mT0GrD%2BZJqJaO7EuCXzhWMXW6lHyPG6hU2qdbU2kHmcEVqo%2F04T2iBrVeLjB604jgYOhqnpZPodIaO2qbROLnqsx%2BjxZFAZ%2BvM2uCdaL6%2FKTjlAfAswfXGWg557ig14mq9GNvDiX%2BLBqO17Y9&X-Amz-Signature=9d50b5a2ad961224a321fd7a3f7db98360aa7dc231f2f85fe6ee70d98463519c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VAZAOX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCaqq6rCF5Y6Jht8LqpB9uNU%2FsVtj%2BufQoNgCRxMciu1AIgIDbH0DtztIAFDPlbLOGbUtqq4Oo9CoIGwX1mGVWrng4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNL3ZnMDhjnbfkSzGSrcA8UwlGmje0KvLzZe1IkoRA8RNrmd%2FskIhCkw1e9%2FODlnWPdWVqXS6%2Fu8iuoat4xRqNkZUMbaVqqz5kTCEbJXT3fPCe9dBEgNTROAKxfFqd%2FX2YH8H4xz9CvSlzDIEbZ6s6JM9DZHuKjoEe6280Eu8gaxoDsMxRwkjkkHBvYHMo14IIfA4YjHc8kxwes%2FQgjbTKhLU%2FAtkUBMIrx0Q7%2FMl3NFpBMZ8QWY4XUXb6FnQrPeSxxz2cJr%2FJ%2BNnwd4LsI7h%2F9E4h8lq7nd2mA%2FZPxq4wSsAXNbwKpY0nFjYrGv05gBbmutOgcKq%2F7j39TeCc1Bt5uSYKlJyDvUOT6VYkXB%2B3pgwnSw%2FeabH36n24h3IlEigvZrkWVOzWDcDto8drpfe56NN1aIgJRt9Qp4MnR4yqpM621hjBJ%2B7OuRE7QYRUElFMJ7bDzbqDn0CPV0Q60kA9%2Bb2Dxfq80KXcaL%2FbsXcw%2BwT%2BltGPKHy2fVIEqoNeBRah0LWZANsiWCrDSuAhbY26aMTHWoOtKlh0VKIBM1f3e9mrAyKOZO92jwjw3%2FQgDs9ky3kNlJt0ZWgOuWzeoESbXcp4Mkyh3z1gSP5YHgtsX7Q5Ybx%2FksM4cp2wLXnt4CulDlDFU0LB1R6T6%2FMKzTkcEGOqUBdGdvaTkTWP2VId5q5cALil6V6KiE%2BTAOUVf2apNi8rKBX5HaGyBkl6LcHL%2Fn%2BVKUdFIFBvKBSB3mT0GrD%2BZJqJaO7EuCXzhWMXW6lHyPG6hU2qdbU2kHmcEVqo%2F04T2iBrVeLjB604jgYOhqnpZPodIaO2qbROLnqsx%2BjxZFAZ%2BvM2uCdaL6%2FKTjlAfAswfXGWg557ig14mq9GNvDiX%2BLBqO17Y9&X-Amz-Signature=7d112c2ef3e1351841724e178b655c734a06dc8e55d4361d00793279247fc5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VAZAOX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCaqq6rCF5Y6Jht8LqpB9uNU%2FsVtj%2BufQoNgCRxMciu1AIgIDbH0DtztIAFDPlbLOGbUtqq4Oo9CoIGwX1mGVWrng4q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNL3ZnMDhjnbfkSzGSrcA8UwlGmje0KvLzZe1IkoRA8RNrmd%2FskIhCkw1e9%2FODlnWPdWVqXS6%2Fu8iuoat4xRqNkZUMbaVqqz5kTCEbJXT3fPCe9dBEgNTROAKxfFqd%2FX2YH8H4xz9CvSlzDIEbZ6s6JM9DZHuKjoEe6280Eu8gaxoDsMxRwkjkkHBvYHMo14IIfA4YjHc8kxwes%2FQgjbTKhLU%2FAtkUBMIrx0Q7%2FMl3NFpBMZ8QWY4XUXb6FnQrPeSxxz2cJr%2FJ%2BNnwd4LsI7h%2F9E4h8lq7nd2mA%2FZPxq4wSsAXNbwKpY0nFjYrGv05gBbmutOgcKq%2F7j39TeCc1Bt5uSYKlJyDvUOT6VYkXB%2B3pgwnSw%2FeabH36n24h3IlEigvZrkWVOzWDcDto8drpfe56NN1aIgJRt9Qp4MnR4yqpM621hjBJ%2B7OuRE7QYRUElFMJ7bDzbqDn0CPV0Q60kA9%2Bb2Dxfq80KXcaL%2FbsXcw%2BwT%2BltGPKHy2fVIEqoNeBRah0LWZANsiWCrDSuAhbY26aMTHWoOtKlh0VKIBM1f3e9mrAyKOZO92jwjw3%2FQgDs9ky3kNlJt0ZWgOuWzeoESbXcp4Mkyh3z1gSP5YHgtsX7Q5Ybx%2FksM4cp2wLXnt4CulDlDFU0LB1R6T6%2FMKzTkcEGOqUBdGdvaTkTWP2VId5q5cALil6V6KiE%2BTAOUVf2apNi8rKBX5HaGyBkl6LcHL%2Fn%2BVKUdFIFBvKBSB3mT0GrD%2BZJqJaO7EuCXzhWMXW6lHyPG6hU2qdbU2kHmcEVqo%2F04T2iBrVeLjB604jgYOhqnpZPodIaO2qbROLnqsx%2BjxZFAZ%2BvM2uCdaL6%2FKTjlAfAswfXGWg557ig14mq9GNvDiX%2BLBqO17Y9&X-Amz-Signature=d953f1d24cc58793e0f846bb3c805a422d918ccf07fab1ddbaf225dc29af7a03&X-Amz-SignedHeaders=host&x-id=GetObject)
