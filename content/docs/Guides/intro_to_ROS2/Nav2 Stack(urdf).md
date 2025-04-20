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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=8bd74b88d96f291d8f4c9b0a68b2841763fa2bf08fb87669ae7d1f5ca3ffc93b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=fd29fe428fad4f743e40917ae9c9fbdfd90a8baeb403958d63c366cacc2af4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=193501b957d013dd9db5c0f22e406de6b53ba3fe4d4f8e04c344145693f8b2de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=4bf8f7e534b30d458762c1345cb1060a98464f59503ca71d7cce006396e9acf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=b903df7600bbf54d0c288769170520e47ed339deffb3f9b807de1114b1d471db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EZNE5H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD72Soer%2F8gdHjVqdJ%2BQ6E7zdEFfO7LyCaeoWHWEFWeMQIgW2ag1ih1oHMnfOsXmDCZn2aVHWm919ilpaAF0Jd7XZcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwJyRf5kvrqg5AUzyrcA2pm5FdzDstcwhoZ5uRkbIvqG7XnIQRuPHaHe%2BUZYKNNa5ePUOXZvvkkAS%2FV%2FgAdSFDjr9qJ%2FhBtdcVb9yOWOvMnivDiGAx7seKGnMPuHI7DRMTHLQV9X6XHgX39Jg8Y%2B053wm3boA9NWWUWtj5XZeugbNvEll2%2F3Xep5ahYIxLQRCFiMfWl7p1oAerXV%2FsJ5UzcCx%2F0t0wRYZB9Ogh1nMiM%2FjWLZSDq0FZGj40m0n5XeyrMDQrPW6UfRimoyyWPIk21WnFzih2SxmafTSx0PEEg6zXdvpI%2F0VcvPSkInQI%2FvCL5o92Ys7SsnNBR2FADBq9rrgiUxG5ssQr2DZK%2FcTIO%2BiG9zf%2BZfUyh%2BR1a%2Fy1unuOZxKGSk71Tf6oBFWdL1pTjR0zn1nD2g1VTqehKkqspFrJ1Km1bI3JL%2BYTbw8iEE0EsYIVXFjB9cX3Ld9VYMPqk147wwP0QI0XuDu2Cf6RJaCH0ViYXXFLe0scUXKESHvRLX7kyEKG%2Fw6cKlkPuyCGCqeFsDZkjMf%2F3Xb089AC%2F145dfq1KXRz8dAOAtMAu%2FfEOtK4is61rf1HHSM9LKs1BydVf6l6Box6Ip43dlf7VMlyUArT6P7lixnZZFVSDoRhuk5SRftWJmM9RMJTJk8AGOqUBgQGBHSdnZ9DcrU78RNqR8hcT7XHSMrbn23WOdoHWg8BBnTLK8FN%2FPeajJP6mLCnLdHTyuaNZorTWkpvjiagbHJ41F0g7H9KKSlHltDa3hei4w9VbaJDugW8bpzUwe3CFfjdFDJZThD3IjQAV8O0nWn%2F6DNFf1kBto2X5svgZXjbt2nJirRWxABxhcr7YqJP4UeUIIyikUZ7M5EGpcQrqwpD%2F2rpr&X-Amz-Signature=4e52faad637dcaabd4da7a4ba336538e11432f2824a58c1bc3f691508b608c71&X-Amz-SignedHeaders=host&x-id=GetObject)
