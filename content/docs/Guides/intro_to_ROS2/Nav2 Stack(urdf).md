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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCZJQKC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEK%2Bd%2FDfivTONn7OUXCVqJTSXhxmD8mnCwXzPKgMwQLUAiEAm%2B%2Bike3Eq9PHSDJAGMizRfJMIwmMDT03wzfV1zFfzToqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxLBOfANylGmG7lyyrcA2eUPEOTU7nBLWTbzWp%2Fy6NXRjublnKSccZyk%2Fvtd4F4O5%2F0b1zx9gH0%2FMDBUeToV6lSzo73vpwL7jTY5vEqC0MQ0qCggVdrPrkl1M7L%2FEBwGieyWKoI48O9q%2BtrUGKxl9WAlCm8X1S0m5T1vOMWXjsl8RETnx%2BKpHmVIJN%2F%2B8LlXd8%2B5raIBcw8kqDY1fnfXx6YTaceSIWx8stB4NoHh4MpUz9sH2g2uk%2BGstqHuCi1jOlppaXOZL5bVZv%2Fb9s0D72e5d5MwXjEtODouFPFOVvRR4l5Ipfmcn3pcanI0Ln0VVHH%2B6MKa9tv1C%2BabVVYSSDGPcJ5Zms%2BycrbT6LGIkdfBHO4rqOA0uIoZTwZY5cLzVYVz8hwOhJAhfPtBA%2FG84hMfu8jWQUHsyRbzwx60Ib%2F2pJR0y0w1y9H9XJsA1%2FjMa0fXqePrCTZzwjxPaT7WW%2BO%2Fw7rXaAOSbillwNOUZErBpE0Djx9Ict%2BG8bmSfkBd9T3S4%2Bd2ia9Ehix%2B%2FD%2FkcSZ9mufY0kt6wBBrsF32YLjuwiLd%2FiNO4iKUHGIfSBJWw%2F7JAtug8csbPkOGqeLuyIH5OpXMglpVwuDC3TZFekLqLrEPlTH6l%2Bzp3clPjTVU4X2lmvxIrUWbltEMLqLiL4GOqUBex3Lfkl1gXA0tP%2B9MpTz2xmO8Xox5wE7g1DXD0YQpNgoeu7bVQcRyXrlHit1DLD%2FnK6iGNgqmQiE2w3MpSnGNpbFHs7Eu1bje3WHZ5AMu9T0Cu3eF39R00iUy0FB%2FBHgU8GbP9%2Fuk8RPl7GsJ7CGDWe8FflJ92%2FiDQ7OXEKpD89JQGbRE3JcbSZI%2Fxs5nicIL2HiK0l5HjNH%2BSRx%2BxLhIgct3Gqy&X-Amz-Signature=4b9adaa687f83f587b8d2331daa4c8cc86b9fdd79f091dbca428da0c6bd4cdea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCZJQKC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEK%2Bd%2FDfivTONn7OUXCVqJTSXhxmD8mnCwXzPKgMwQLUAiEAm%2B%2Bike3Eq9PHSDJAGMizRfJMIwmMDT03wzfV1zFfzToqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxLBOfANylGmG7lyyrcA2eUPEOTU7nBLWTbzWp%2Fy6NXRjublnKSccZyk%2Fvtd4F4O5%2F0b1zx9gH0%2FMDBUeToV6lSzo73vpwL7jTY5vEqC0MQ0qCggVdrPrkl1M7L%2FEBwGieyWKoI48O9q%2BtrUGKxl9WAlCm8X1S0m5T1vOMWXjsl8RETnx%2BKpHmVIJN%2F%2B8LlXd8%2B5raIBcw8kqDY1fnfXx6YTaceSIWx8stB4NoHh4MpUz9sH2g2uk%2BGstqHuCi1jOlppaXOZL5bVZv%2Fb9s0D72e5d5MwXjEtODouFPFOVvRR4l5Ipfmcn3pcanI0Ln0VVHH%2B6MKa9tv1C%2BabVVYSSDGPcJ5Zms%2BycrbT6LGIkdfBHO4rqOA0uIoZTwZY5cLzVYVz8hwOhJAhfPtBA%2FG84hMfu8jWQUHsyRbzwx60Ib%2F2pJR0y0w1y9H9XJsA1%2FjMa0fXqePrCTZzwjxPaT7WW%2BO%2Fw7rXaAOSbillwNOUZErBpE0Djx9Ict%2BG8bmSfkBd9T3S4%2Bd2ia9Ehix%2B%2FD%2FkcSZ9mufY0kt6wBBrsF32YLjuwiLd%2FiNO4iKUHGIfSBJWw%2F7JAtug8csbPkOGqeLuyIH5OpXMglpVwuDC3TZFekLqLrEPlTH6l%2Bzp3clPjTVU4X2lmvxIrUWbltEMLqLiL4GOqUBex3Lfkl1gXA0tP%2B9MpTz2xmO8Xox5wE7g1DXD0YQpNgoeu7bVQcRyXrlHit1DLD%2FnK6iGNgqmQiE2w3MpSnGNpbFHs7Eu1bje3WHZ5AMu9T0Cu3eF39R00iUy0FB%2FBHgU8GbP9%2Fuk8RPl7GsJ7CGDWe8FflJ92%2FiDQ7OXEKpD89JQGbRE3JcbSZI%2Fxs5nicIL2HiK0l5HjNH%2BSRx%2BxLhIgct3Gqy&X-Amz-Signature=33c53124b8f219d3ffa4f5593e33c70227bd4eb27206a36472a329c5ded695c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCZJQKC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEK%2Bd%2FDfivTONn7OUXCVqJTSXhxmD8mnCwXzPKgMwQLUAiEAm%2B%2Bike3Eq9PHSDJAGMizRfJMIwmMDT03wzfV1zFfzToqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxLBOfANylGmG7lyyrcA2eUPEOTU7nBLWTbzWp%2Fy6NXRjublnKSccZyk%2Fvtd4F4O5%2F0b1zx9gH0%2FMDBUeToV6lSzo73vpwL7jTY5vEqC0MQ0qCggVdrPrkl1M7L%2FEBwGieyWKoI48O9q%2BtrUGKxl9WAlCm8X1S0m5T1vOMWXjsl8RETnx%2BKpHmVIJN%2F%2B8LlXd8%2B5raIBcw8kqDY1fnfXx6YTaceSIWx8stB4NoHh4MpUz9sH2g2uk%2BGstqHuCi1jOlppaXOZL5bVZv%2Fb9s0D72e5d5MwXjEtODouFPFOVvRR4l5Ipfmcn3pcanI0Ln0VVHH%2B6MKa9tv1C%2BabVVYSSDGPcJ5Zms%2BycrbT6LGIkdfBHO4rqOA0uIoZTwZY5cLzVYVz8hwOhJAhfPtBA%2FG84hMfu8jWQUHsyRbzwx60Ib%2F2pJR0y0w1y9H9XJsA1%2FjMa0fXqePrCTZzwjxPaT7WW%2BO%2Fw7rXaAOSbillwNOUZErBpE0Djx9Ict%2BG8bmSfkBd9T3S4%2Bd2ia9Ehix%2B%2FD%2FkcSZ9mufY0kt6wBBrsF32YLjuwiLd%2FiNO4iKUHGIfSBJWw%2F7JAtug8csbPkOGqeLuyIH5OpXMglpVwuDC3TZFekLqLrEPlTH6l%2Bzp3clPjTVU4X2lmvxIrUWbltEMLqLiL4GOqUBex3Lfkl1gXA0tP%2B9MpTz2xmO8Xox5wE7g1DXD0YQpNgoeu7bVQcRyXrlHit1DLD%2FnK6iGNgqmQiE2w3MpSnGNpbFHs7Eu1bje3WHZ5AMu9T0Cu3eF39R00iUy0FB%2FBHgU8GbP9%2Fuk8RPl7GsJ7CGDWe8FflJ92%2FiDQ7OXEKpD89JQGbRE3JcbSZI%2Fxs5nicIL2HiK0l5HjNH%2BSRx%2BxLhIgct3Gqy&X-Amz-Signature=68a2100abbc7620a1502040654648e026801f2d8e1f8700c6182bd4e5959836b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCZJQKC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEK%2Bd%2FDfivTONn7OUXCVqJTSXhxmD8mnCwXzPKgMwQLUAiEAm%2B%2Bike3Eq9PHSDJAGMizRfJMIwmMDT03wzfV1zFfzToqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxLBOfANylGmG7lyyrcA2eUPEOTU7nBLWTbzWp%2Fy6NXRjublnKSccZyk%2Fvtd4F4O5%2F0b1zx9gH0%2FMDBUeToV6lSzo73vpwL7jTY5vEqC0MQ0qCggVdrPrkl1M7L%2FEBwGieyWKoI48O9q%2BtrUGKxl9WAlCm8X1S0m5T1vOMWXjsl8RETnx%2BKpHmVIJN%2F%2B8LlXd8%2B5raIBcw8kqDY1fnfXx6YTaceSIWx8stB4NoHh4MpUz9sH2g2uk%2BGstqHuCi1jOlppaXOZL5bVZv%2Fb9s0D72e5d5MwXjEtODouFPFOVvRR4l5Ipfmcn3pcanI0Ln0VVHH%2B6MKa9tv1C%2BabVVYSSDGPcJ5Zms%2BycrbT6LGIkdfBHO4rqOA0uIoZTwZY5cLzVYVz8hwOhJAhfPtBA%2FG84hMfu8jWQUHsyRbzwx60Ib%2F2pJR0y0w1y9H9XJsA1%2FjMa0fXqePrCTZzwjxPaT7WW%2BO%2Fw7rXaAOSbillwNOUZErBpE0Djx9Ict%2BG8bmSfkBd9T3S4%2Bd2ia9Ehix%2B%2FD%2FkcSZ9mufY0kt6wBBrsF32YLjuwiLd%2FiNO4iKUHGIfSBJWw%2F7JAtug8csbPkOGqeLuyIH5OpXMglpVwuDC3TZFekLqLrEPlTH6l%2Bzp3clPjTVU4X2lmvxIrUWbltEMLqLiL4GOqUBex3Lfkl1gXA0tP%2B9MpTz2xmO8Xox5wE7g1DXD0YQpNgoeu7bVQcRyXrlHit1DLD%2FnK6iGNgqmQiE2w3MpSnGNpbFHs7Eu1bje3WHZ5AMu9T0Cu3eF39R00iUy0FB%2FBHgU8GbP9%2Fuk8RPl7GsJ7CGDWe8FflJ92%2FiDQ7OXEKpD89JQGbRE3JcbSZI%2Fxs5nicIL2HiK0l5HjNH%2BSRx%2BxLhIgct3Gqy&X-Amz-Signature=91827a449fb4d354093cc71db3638bbbad264a622acf2dfadec5804efc7cae73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCZJQKC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEK%2Bd%2FDfivTONn7OUXCVqJTSXhxmD8mnCwXzPKgMwQLUAiEAm%2B%2Bike3Eq9PHSDJAGMizRfJMIwmMDT03wzfV1zFfzToqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxLBOfANylGmG7lyyrcA2eUPEOTU7nBLWTbzWp%2Fy6NXRjublnKSccZyk%2Fvtd4F4O5%2F0b1zx9gH0%2FMDBUeToV6lSzo73vpwL7jTY5vEqC0MQ0qCggVdrPrkl1M7L%2FEBwGieyWKoI48O9q%2BtrUGKxl9WAlCm8X1S0m5T1vOMWXjsl8RETnx%2BKpHmVIJN%2F%2B8LlXd8%2B5raIBcw8kqDY1fnfXx6YTaceSIWx8stB4NoHh4MpUz9sH2g2uk%2BGstqHuCi1jOlppaXOZL5bVZv%2Fb9s0D72e5d5MwXjEtODouFPFOVvRR4l5Ipfmcn3pcanI0Ln0VVHH%2B6MKa9tv1C%2BabVVYSSDGPcJ5Zms%2BycrbT6LGIkdfBHO4rqOA0uIoZTwZY5cLzVYVz8hwOhJAhfPtBA%2FG84hMfu8jWQUHsyRbzwx60Ib%2F2pJR0y0w1y9H9XJsA1%2FjMa0fXqePrCTZzwjxPaT7WW%2BO%2Fw7rXaAOSbillwNOUZErBpE0Djx9Ict%2BG8bmSfkBd9T3S4%2Bd2ia9Ehix%2B%2FD%2FkcSZ9mufY0kt6wBBrsF32YLjuwiLd%2FiNO4iKUHGIfSBJWw%2F7JAtug8csbPkOGqeLuyIH5OpXMglpVwuDC3TZFekLqLrEPlTH6l%2Bzp3clPjTVU4X2lmvxIrUWbltEMLqLiL4GOqUBex3Lfkl1gXA0tP%2B9MpTz2xmO8Xox5wE7g1DXD0YQpNgoeu7bVQcRyXrlHit1DLD%2FnK6iGNgqmQiE2w3MpSnGNpbFHs7Eu1bje3WHZ5AMu9T0Cu3eF39R00iUy0FB%2FBHgU8GbP9%2Fuk8RPl7GsJ7CGDWe8FflJ92%2FiDQ7OXEKpD89JQGbRE3JcbSZI%2Fxs5nicIL2HiK0l5HjNH%2BSRx%2BxLhIgct3Gqy&X-Amz-Signature=b16fd5c67e4c0ff52c6a2f498798b2aaab93a5c406e669a441500a4e49551af5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCZJQKC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEK%2Bd%2FDfivTONn7OUXCVqJTSXhxmD8mnCwXzPKgMwQLUAiEAm%2B%2Bike3Eq9PHSDJAGMizRfJMIwmMDT03wzfV1zFfzToqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxLBOfANylGmG7lyyrcA2eUPEOTU7nBLWTbzWp%2Fy6NXRjublnKSccZyk%2Fvtd4F4O5%2F0b1zx9gH0%2FMDBUeToV6lSzo73vpwL7jTY5vEqC0MQ0qCggVdrPrkl1M7L%2FEBwGieyWKoI48O9q%2BtrUGKxl9WAlCm8X1S0m5T1vOMWXjsl8RETnx%2BKpHmVIJN%2F%2B8LlXd8%2B5raIBcw8kqDY1fnfXx6YTaceSIWx8stB4NoHh4MpUz9sH2g2uk%2BGstqHuCi1jOlppaXOZL5bVZv%2Fb9s0D72e5d5MwXjEtODouFPFOVvRR4l5Ipfmcn3pcanI0Ln0VVHH%2B6MKa9tv1C%2BabVVYSSDGPcJ5Zms%2BycrbT6LGIkdfBHO4rqOA0uIoZTwZY5cLzVYVz8hwOhJAhfPtBA%2FG84hMfu8jWQUHsyRbzwx60Ib%2F2pJR0y0w1y9H9XJsA1%2FjMa0fXqePrCTZzwjxPaT7WW%2BO%2Fw7rXaAOSbillwNOUZErBpE0Djx9Ict%2BG8bmSfkBd9T3S4%2Bd2ia9Ehix%2B%2FD%2FkcSZ9mufY0kt6wBBrsF32YLjuwiLd%2FiNO4iKUHGIfSBJWw%2F7JAtug8csbPkOGqeLuyIH5OpXMglpVwuDC3TZFekLqLrEPlTH6l%2Bzp3clPjTVU4X2lmvxIrUWbltEMLqLiL4GOqUBex3Lfkl1gXA0tP%2B9MpTz2xmO8Xox5wE7g1DXD0YQpNgoeu7bVQcRyXrlHit1DLD%2FnK6iGNgqmQiE2w3MpSnGNpbFHs7Eu1bje3WHZ5AMu9T0Cu3eF39R00iUy0FB%2FBHgU8GbP9%2Fuk8RPl7GsJ7CGDWe8FflJ92%2FiDQ7OXEKpD89JQGbRE3JcbSZI%2Fxs5nicIL2HiK0l5HjNH%2BSRx%2BxLhIgct3Gqy&X-Amz-Signature=ce1747e21e011d729bed9671d8003ff8e061fde94a2da12f1233c43b45c1ac7e&X-Amz-SignedHeaders=host&x-id=GetObject)
