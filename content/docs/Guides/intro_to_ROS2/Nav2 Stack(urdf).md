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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLFSWSHE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutPc%2FNLCR%2BJqwGRpxjqnoQMedwN4EzenSwUkX68Vz%2BAIhAIy1qcADpXh7O%2Bhhld9T7f%2FbxUtHbfQ6ChEEehElk%2BPNKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIXkGfQbNcyb%2FSdckq3ANQUR9YVHCQrwjSKbv%2FbrPx414usUAyJjKQVmtIQ5fYqA%2BQ%2BrRApDU018TVBC%2FM73m9TlucnAcqULImlSuhXyg76W6fXYrKkmtGna1YYb9M4CHz8JkrwYHE1eFzm2aMevd5prsJiWKkl9wfthBm8e1RD0JC9V3oAQKD2Y6gwH55SYJQ8doUIZBXjloYIWACPrXUyTuNW1uMhwP4cOIpnCGU%2Bgo0dSxOKata9UdsdOuFzKNBnGAyCApzkEYvRbFXNUCD%2F7MQ4FjxXCze27ekKq8gYT6TyuHAsPwUs4sU5yaQM%2BekHat%2BOL5PC4DTDDWqHJ0s8aXQuMC2vbtPnAux%2BogoxVabfVnwjmB1Jq1XW4NlGCy3cu%2FBeuq47r4XpjuSylONp8maKfoT4T3x3QWUwFRLFw%2FmByOuCXgtlDE4ZAqWjL981d2n8ocqEgeBvSheJNhoj%2FVLikXrV6U5aLQR1s2Zg1utxUlW8Rtk%2BCvzHNYcw7anAWz5R2tBN7VZ7LX7i1LTM4jIOZzlz71dG4e6NMnjkNDCvPEOYsHdhhv4GxiU52fl8ohn9pFa9kX465FIYs0%2Fx2dB0mFJzFNjloHX4ZBPhtSp4XDYzT9vMy0H8v8p5T9fLLVjbiq7bVGweTCn6bDDBjqkAX%2FxXZizoq%2Bcj1wGoxhomfZNKHLr4WBD2PPsyTKzz%2Bz1IC0HA7AQIFL0Iv4mYzD73Z32JZkNWU7wi44meUIAuWorJh2BpsWnzBWYhUvD2boNpnVc4Z5DebalLy6vZJZu1FvHMXTp4QbqCwUqKvGuuQEQ%2FmULkOQIT4uib%2FaScEVsN24UOnAkjlspAEK7KMoEdxnUkjfwfqmuCV980phlX1ZuPA%2Bd&X-Amz-Signature=808f7fd84cad9934f06349bab9d78bfc0dbaa460d605bf95a1e24db2b837521d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLFSWSHE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutPc%2FNLCR%2BJqwGRpxjqnoQMedwN4EzenSwUkX68Vz%2BAIhAIy1qcADpXh7O%2Bhhld9T7f%2FbxUtHbfQ6ChEEehElk%2BPNKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIXkGfQbNcyb%2FSdckq3ANQUR9YVHCQrwjSKbv%2FbrPx414usUAyJjKQVmtIQ5fYqA%2BQ%2BrRApDU018TVBC%2FM73m9TlucnAcqULImlSuhXyg76W6fXYrKkmtGna1YYb9M4CHz8JkrwYHE1eFzm2aMevd5prsJiWKkl9wfthBm8e1RD0JC9V3oAQKD2Y6gwH55SYJQ8doUIZBXjloYIWACPrXUyTuNW1uMhwP4cOIpnCGU%2Bgo0dSxOKata9UdsdOuFzKNBnGAyCApzkEYvRbFXNUCD%2F7MQ4FjxXCze27ekKq8gYT6TyuHAsPwUs4sU5yaQM%2BekHat%2BOL5PC4DTDDWqHJ0s8aXQuMC2vbtPnAux%2BogoxVabfVnwjmB1Jq1XW4NlGCy3cu%2FBeuq47r4XpjuSylONp8maKfoT4T3x3QWUwFRLFw%2FmByOuCXgtlDE4ZAqWjL981d2n8ocqEgeBvSheJNhoj%2FVLikXrV6U5aLQR1s2Zg1utxUlW8Rtk%2BCvzHNYcw7anAWz5R2tBN7VZ7LX7i1LTM4jIOZzlz71dG4e6NMnjkNDCvPEOYsHdhhv4GxiU52fl8ohn9pFa9kX465FIYs0%2Fx2dB0mFJzFNjloHX4ZBPhtSp4XDYzT9vMy0H8v8p5T9fLLVjbiq7bVGweTCn6bDDBjqkAX%2FxXZizoq%2Bcj1wGoxhomfZNKHLr4WBD2PPsyTKzz%2Bz1IC0HA7AQIFL0Iv4mYzD73Z32JZkNWU7wi44meUIAuWorJh2BpsWnzBWYhUvD2boNpnVc4Z5DebalLy6vZJZu1FvHMXTp4QbqCwUqKvGuuQEQ%2FmULkOQIT4uib%2FaScEVsN24UOnAkjlspAEK7KMoEdxnUkjfwfqmuCV980phlX1ZuPA%2Bd&X-Amz-Signature=b09f97df5dcb35385f1e7b7cf3d9d68dea489ac55bb4ea4b101c4b606ddb1953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLFSWSHE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutPc%2FNLCR%2BJqwGRpxjqnoQMedwN4EzenSwUkX68Vz%2BAIhAIy1qcADpXh7O%2Bhhld9T7f%2FbxUtHbfQ6ChEEehElk%2BPNKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIXkGfQbNcyb%2FSdckq3ANQUR9YVHCQrwjSKbv%2FbrPx414usUAyJjKQVmtIQ5fYqA%2BQ%2BrRApDU018TVBC%2FM73m9TlucnAcqULImlSuhXyg76W6fXYrKkmtGna1YYb9M4CHz8JkrwYHE1eFzm2aMevd5prsJiWKkl9wfthBm8e1RD0JC9V3oAQKD2Y6gwH55SYJQ8doUIZBXjloYIWACPrXUyTuNW1uMhwP4cOIpnCGU%2Bgo0dSxOKata9UdsdOuFzKNBnGAyCApzkEYvRbFXNUCD%2F7MQ4FjxXCze27ekKq8gYT6TyuHAsPwUs4sU5yaQM%2BekHat%2BOL5PC4DTDDWqHJ0s8aXQuMC2vbtPnAux%2BogoxVabfVnwjmB1Jq1XW4NlGCy3cu%2FBeuq47r4XpjuSylONp8maKfoT4T3x3QWUwFRLFw%2FmByOuCXgtlDE4ZAqWjL981d2n8ocqEgeBvSheJNhoj%2FVLikXrV6U5aLQR1s2Zg1utxUlW8Rtk%2BCvzHNYcw7anAWz5R2tBN7VZ7LX7i1LTM4jIOZzlz71dG4e6NMnjkNDCvPEOYsHdhhv4GxiU52fl8ohn9pFa9kX465FIYs0%2Fx2dB0mFJzFNjloHX4ZBPhtSp4XDYzT9vMy0H8v8p5T9fLLVjbiq7bVGweTCn6bDDBjqkAX%2FxXZizoq%2Bcj1wGoxhomfZNKHLr4WBD2PPsyTKzz%2Bz1IC0HA7AQIFL0Iv4mYzD73Z32JZkNWU7wi44meUIAuWorJh2BpsWnzBWYhUvD2boNpnVc4Z5DebalLy6vZJZu1FvHMXTp4QbqCwUqKvGuuQEQ%2FmULkOQIT4uib%2FaScEVsN24UOnAkjlspAEK7KMoEdxnUkjfwfqmuCV980phlX1ZuPA%2Bd&X-Amz-Signature=04fe545d0b9fe576b8fe8ea733f0eaec8c46451a9bbb746aba3f19e4699a0211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLFSWSHE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutPc%2FNLCR%2BJqwGRpxjqnoQMedwN4EzenSwUkX68Vz%2BAIhAIy1qcADpXh7O%2Bhhld9T7f%2FbxUtHbfQ6ChEEehElk%2BPNKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIXkGfQbNcyb%2FSdckq3ANQUR9YVHCQrwjSKbv%2FbrPx414usUAyJjKQVmtIQ5fYqA%2BQ%2BrRApDU018TVBC%2FM73m9TlucnAcqULImlSuhXyg76W6fXYrKkmtGna1YYb9M4CHz8JkrwYHE1eFzm2aMevd5prsJiWKkl9wfthBm8e1RD0JC9V3oAQKD2Y6gwH55SYJQ8doUIZBXjloYIWACPrXUyTuNW1uMhwP4cOIpnCGU%2Bgo0dSxOKata9UdsdOuFzKNBnGAyCApzkEYvRbFXNUCD%2F7MQ4FjxXCze27ekKq8gYT6TyuHAsPwUs4sU5yaQM%2BekHat%2BOL5PC4DTDDWqHJ0s8aXQuMC2vbtPnAux%2BogoxVabfVnwjmB1Jq1XW4NlGCy3cu%2FBeuq47r4XpjuSylONp8maKfoT4T3x3QWUwFRLFw%2FmByOuCXgtlDE4ZAqWjL981d2n8ocqEgeBvSheJNhoj%2FVLikXrV6U5aLQR1s2Zg1utxUlW8Rtk%2BCvzHNYcw7anAWz5R2tBN7VZ7LX7i1LTM4jIOZzlz71dG4e6NMnjkNDCvPEOYsHdhhv4GxiU52fl8ohn9pFa9kX465FIYs0%2Fx2dB0mFJzFNjloHX4ZBPhtSp4XDYzT9vMy0H8v8p5T9fLLVjbiq7bVGweTCn6bDDBjqkAX%2FxXZizoq%2Bcj1wGoxhomfZNKHLr4WBD2PPsyTKzz%2Bz1IC0HA7AQIFL0Iv4mYzD73Z32JZkNWU7wi44meUIAuWorJh2BpsWnzBWYhUvD2boNpnVc4Z5DebalLy6vZJZu1FvHMXTp4QbqCwUqKvGuuQEQ%2FmULkOQIT4uib%2FaScEVsN24UOnAkjlspAEK7KMoEdxnUkjfwfqmuCV980phlX1ZuPA%2Bd&X-Amz-Signature=0c3974c234060058305e7fa0aad8188342aca5d9c815b9199fa27ffaf2ddc362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLFSWSHE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutPc%2FNLCR%2BJqwGRpxjqnoQMedwN4EzenSwUkX68Vz%2BAIhAIy1qcADpXh7O%2Bhhld9T7f%2FbxUtHbfQ6ChEEehElk%2BPNKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIXkGfQbNcyb%2FSdckq3ANQUR9YVHCQrwjSKbv%2FbrPx414usUAyJjKQVmtIQ5fYqA%2BQ%2BrRApDU018TVBC%2FM73m9TlucnAcqULImlSuhXyg76W6fXYrKkmtGna1YYb9M4CHz8JkrwYHE1eFzm2aMevd5prsJiWKkl9wfthBm8e1RD0JC9V3oAQKD2Y6gwH55SYJQ8doUIZBXjloYIWACPrXUyTuNW1uMhwP4cOIpnCGU%2Bgo0dSxOKata9UdsdOuFzKNBnGAyCApzkEYvRbFXNUCD%2F7MQ4FjxXCze27ekKq8gYT6TyuHAsPwUs4sU5yaQM%2BekHat%2BOL5PC4DTDDWqHJ0s8aXQuMC2vbtPnAux%2BogoxVabfVnwjmB1Jq1XW4NlGCy3cu%2FBeuq47r4XpjuSylONp8maKfoT4T3x3QWUwFRLFw%2FmByOuCXgtlDE4ZAqWjL981d2n8ocqEgeBvSheJNhoj%2FVLikXrV6U5aLQR1s2Zg1utxUlW8Rtk%2BCvzHNYcw7anAWz5R2tBN7VZ7LX7i1LTM4jIOZzlz71dG4e6NMnjkNDCvPEOYsHdhhv4GxiU52fl8ohn9pFa9kX465FIYs0%2Fx2dB0mFJzFNjloHX4ZBPhtSp4XDYzT9vMy0H8v8p5T9fLLVjbiq7bVGweTCn6bDDBjqkAX%2FxXZizoq%2Bcj1wGoxhomfZNKHLr4WBD2PPsyTKzz%2Bz1IC0HA7AQIFL0Iv4mYzD73Z32JZkNWU7wi44meUIAuWorJh2BpsWnzBWYhUvD2boNpnVc4Z5DebalLy6vZJZu1FvHMXTp4QbqCwUqKvGuuQEQ%2FmULkOQIT4uib%2FaScEVsN24UOnAkjlspAEK7KMoEdxnUkjfwfqmuCV980phlX1ZuPA%2Bd&X-Amz-Signature=4101ceb20ec30652a04799ee75ae8cdc1ec37d15b217e776d5b27530e07afd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLFSWSHE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutPc%2FNLCR%2BJqwGRpxjqnoQMedwN4EzenSwUkX68Vz%2BAIhAIy1qcADpXh7O%2Bhhld9T7f%2FbxUtHbfQ6ChEEehElk%2BPNKv8DCH4QABoMNjM3NDIzMTgzODA1IgyIXkGfQbNcyb%2FSdckq3ANQUR9YVHCQrwjSKbv%2FbrPx414usUAyJjKQVmtIQ5fYqA%2BQ%2BrRApDU018TVBC%2FM73m9TlucnAcqULImlSuhXyg76W6fXYrKkmtGna1YYb9M4CHz8JkrwYHE1eFzm2aMevd5prsJiWKkl9wfthBm8e1RD0JC9V3oAQKD2Y6gwH55SYJQ8doUIZBXjloYIWACPrXUyTuNW1uMhwP4cOIpnCGU%2Bgo0dSxOKata9UdsdOuFzKNBnGAyCApzkEYvRbFXNUCD%2F7MQ4FjxXCze27ekKq8gYT6TyuHAsPwUs4sU5yaQM%2BekHat%2BOL5PC4DTDDWqHJ0s8aXQuMC2vbtPnAux%2BogoxVabfVnwjmB1Jq1XW4NlGCy3cu%2FBeuq47r4XpjuSylONp8maKfoT4T3x3QWUwFRLFw%2FmByOuCXgtlDE4ZAqWjL981d2n8ocqEgeBvSheJNhoj%2FVLikXrV6U5aLQR1s2Zg1utxUlW8Rtk%2BCvzHNYcw7anAWz5R2tBN7VZ7LX7i1LTM4jIOZzlz71dG4e6NMnjkNDCvPEOYsHdhhv4GxiU52fl8ohn9pFa9kX465FIYs0%2Fx2dB0mFJzFNjloHX4ZBPhtSp4XDYzT9vMy0H8v8p5T9fLLVjbiq7bVGweTCn6bDDBjqkAX%2FxXZizoq%2Bcj1wGoxhomfZNKHLr4WBD2PPsyTKzz%2Bz1IC0HA7AQIFL0Iv4mYzD73Z32JZkNWU7wi44meUIAuWorJh2BpsWnzBWYhUvD2boNpnVc4Z5DebalLy6vZJZu1FvHMXTp4QbqCwUqKvGuuQEQ%2FmULkOQIT4uib%2FaScEVsN24UOnAkjlspAEK7KMoEdxnUkjfwfqmuCV980phlX1ZuPA%2Bd&X-Amz-Signature=2b6fc9fbc0fdd3c53a6b15197fe69bf5b83eb970d12c5b7f8f842ca51bdf2fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
