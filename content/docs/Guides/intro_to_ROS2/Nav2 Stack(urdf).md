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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXULXDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbNLYFAXemcI2eKexM9DVL2xM9uMSRcRKBd8MVirMKQIgHP%2FbLm6dYHgd%2BHsA7MkB%2BsEc61iUL3xwTnGhlOCTQ0UqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5SeLpGbXXnefGwtyrcA8A3jZYMIn1kXHOeIQgxjPwHDWD9Ek4rMR2cTSvaORaS%2B5hIU1o6z6byIFFnxhL4Zoe7VMSw40wtJ1GGDvzxIlyIK%2BIO5huLzJDzymxlW6cfIaPbeoyGaasiP5PjOpfgoWey5UyQ3uW3GmURrix16w7ul%2BGkmlmJP02CP2BH%2FHi3T31UopHa6l0hTcm28TBHvgu9Vq4nEErZf8d7UIfyj6D%2B%2FviRLtf2%2F3ABUvB8L2dUqAp37PU48ICmqx1yeApxeS9WeI%2BOW2OuMAlZPXXdpFWXxQ4OVB4q%2FWv0J5BY%2Fa2WZDhE5%2Baki8eObPKXjerxF8gb6peiJIXPHVK3QtPMmQa%2BWpUBjM9t2SUzWBaP%2FkYXurOIFjuzgVrsNfMLVrYQ7utQuIMsgUUu8KKzQ1vdajkv%2FSuqTv%2FVNfi%2Fk4cLdxkr9T5AnM6EHivdbMUcJ92PoWRUVDvqzkZk3JcckGZiUZYGjGq4gevjKJO1WPgvvNN3ynRp5ajyob7utfqUZa93i2w72P4A1OVozVoGLYafEcu5ldC%2FlbFE0uDir8v67sHtwoSNXOWmT6J70MCvAcTl1eLyS%2BsHSMOz3gjWESfXECCtS6IiUz3ZG7iiJYVrW%2B5zL0cARmNlpz5i4o%2BUMPSiicMGOqUB%2BaWMkIWkPATxZ5l3mVyuIbPFmkWAO2ZRrdFGPz1EbG2zQnMGG7Ssh4DoTrhkMSUlBwX4YiGwvMj0PL%2FuQMNXaGVWugQ9wjN%2FteTFxl3Qpa8rWaTBMnwoFwBsL4eOT14zyxwXTzDZhz1TlW7vA%2BPrqfuODNp4cwXXZ2hiRFKee1RkSfmDFUC4u8WumMe0iJX7W07QQiQBIbgf5UCzRkqHXapzT6sP&X-Amz-Signature=88c03efa43aa5a9c40f996c78a2d8e8b9e1a77aad878ab2ead10fa89ef74e8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXULXDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbNLYFAXemcI2eKexM9DVL2xM9uMSRcRKBd8MVirMKQIgHP%2FbLm6dYHgd%2BHsA7MkB%2BsEc61iUL3xwTnGhlOCTQ0UqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5SeLpGbXXnefGwtyrcA8A3jZYMIn1kXHOeIQgxjPwHDWD9Ek4rMR2cTSvaORaS%2B5hIU1o6z6byIFFnxhL4Zoe7VMSw40wtJ1GGDvzxIlyIK%2BIO5huLzJDzymxlW6cfIaPbeoyGaasiP5PjOpfgoWey5UyQ3uW3GmURrix16w7ul%2BGkmlmJP02CP2BH%2FHi3T31UopHa6l0hTcm28TBHvgu9Vq4nEErZf8d7UIfyj6D%2B%2FviRLtf2%2F3ABUvB8L2dUqAp37PU48ICmqx1yeApxeS9WeI%2BOW2OuMAlZPXXdpFWXxQ4OVB4q%2FWv0J5BY%2Fa2WZDhE5%2Baki8eObPKXjerxF8gb6peiJIXPHVK3QtPMmQa%2BWpUBjM9t2SUzWBaP%2FkYXurOIFjuzgVrsNfMLVrYQ7utQuIMsgUUu8KKzQ1vdajkv%2FSuqTv%2FVNfi%2Fk4cLdxkr9T5AnM6EHivdbMUcJ92PoWRUVDvqzkZk3JcckGZiUZYGjGq4gevjKJO1WPgvvNN3ynRp5ajyob7utfqUZa93i2w72P4A1OVozVoGLYafEcu5ldC%2FlbFE0uDir8v67sHtwoSNXOWmT6J70MCvAcTl1eLyS%2BsHSMOz3gjWESfXECCtS6IiUz3ZG7iiJYVrW%2B5zL0cARmNlpz5i4o%2BUMPSiicMGOqUB%2BaWMkIWkPATxZ5l3mVyuIbPFmkWAO2ZRrdFGPz1EbG2zQnMGG7Ssh4DoTrhkMSUlBwX4YiGwvMj0PL%2FuQMNXaGVWugQ9wjN%2FteTFxl3Qpa8rWaTBMnwoFwBsL4eOT14zyxwXTzDZhz1TlW7vA%2BPrqfuODNp4cwXXZ2hiRFKee1RkSfmDFUC4u8WumMe0iJX7W07QQiQBIbgf5UCzRkqHXapzT6sP&X-Amz-Signature=74ab93db506ab8d6e5bdfcbb3902eb06a8bdfbc6a502b5c1dc1cdfa99df8240f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXULXDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbNLYFAXemcI2eKexM9DVL2xM9uMSRcRKBd8MVirMKQIgHP%2FbLm6dYHgd%2BHsA7MkB%2BsEc61iUL3xwTnGhlOCTQ0UqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5SeLpGbXXnefGwtyrcA8A3jZYMIn1kXHOeIQgxjPwHDWD9Ek4rMR2cTSvaORaS%2B5hIU1o6z6byIFFnxhL4Zoe7VMSw40wtJ1GGDvzxIlyIK%2BIO5huLzJDzymxlW6cfIaPbeoyGaasiP5PjOpfgoWey5UyQ3uW3GmURrix16w7ul%2BGkmlmJP02CP2BH%2FHi3T31UopHa6l0hTcm28TBHvgu9Vq4nEErZf8d7UIfyj6D%2B%2FviRLtf2%2F3ABUvB8L2dUqAp37PU48ICmqx1yeApxeS9WeI%2BOW2OuMAlZPXXdpFWXxQ4OVB4q%2FWv0J5BY%2Fa2WZDhE5%2Baki8eObPKXjerxF8gb6peiJIXPHVK3QtPMmQa%2BWpUBjM9t2SUzWBaP%2FkYXurOIFjuzgVrsNfMLVrYQ7utQuIMsgUUu8KKzQ1vdajkv%2FSuqTv%2FVNfi%2Fk4cLdxkr9T5AnM6EHivdbMUcJ92PoWRUVDvqzkZk3JcckGZiUZYGjGq4gevjKJO1WPgvvNN3ynRp5ajyob7utfqUZa93i2w72P4A1OVozVoGLYafEcu5ldC%2FlbFE0uDir8v67sHtwoSNXOWmT6J70MCvAcTl1eLyS%2BsHSMOz3gjWESfXECCtS6IiUz3ZG7iiJYVrW%2B5zL0cARmNlpz5i4o%2BUMPSiicMGOqUB%2BaWMkIWkPATxZ5l3mVyuIbPFmkWAO2ZRrdFGPz1EbG2zQnMGG7Ssh4DoTrhkMSUlBwX4YiGwvMj0PL%2FuQMNXaGVWugQ9wjN%2FteTFxl3Qpa8rWaTBMnwoFwBsL4eOT14zyxwXTzDZhz1TlW7vA%2BPrqfuODNp4cwXXZ2hiRFKee1RkSfmDFUC4u8WumMe0iJX7W07QQiQBIbgf5UCzRkqHXapzT6sP&X-Amz-Signature=e2597303d6c550a80610222dd89961154ae2b24a6c1aba92c0663a8fb5381de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXULXDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbNLYFAXemcI2eKexM9DVL2xM9uMSRcRKBd8MVirMKQIgHP%2FbLm6dYHgd%2BHsA7MkB%2BsEc61iUL3xwTnGhlOCTQ0UqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5SeLpGbXXnefGwtyrcA8A3jZYMIn1kXHOeIQgxjPwHDWD9Ek4rMR2cTSvaORaS%2B5hIU1o6z6byIFFnxhL4Zoe7VMSw40wtJ1GGDvzxIlyIK%2BIO5huLzJDzymxlW6cfIaPbeoyGaasiP5PjOpfgoWey5UyQ3uW3GmURrix16w7ul%2BGkmlmJP02CP2BH%2FHi3T31UopHa6l0hTcm28TBHvgu9Vq4nEErZf8d7UIfyj6D%2B%2FviRLtf2%2F3ABUvB8L2dUqAp37PU48ICmqx1yeApxeS9WeI%2BOW2OuMAlZPXXdpFWXxQ4OVB4q%2FWv0J5BY%2Fa2WZDhE5%2Baki8eObPKXjerxF8gb6peiJIXPHVK3QtPMmQa%2BWpUBjM9t2SUzWBaP%2FkYXurOIFjuzgVrsNfMLVrYQ7utQuIMsgUUu8KKzQ1vdajkv%2FSuqTv%2FVNfi%2Fk4cLdxkr9T5AnM6EHivdbMUcJ92PoWRUVDvqzkZk3JcckGZiUZYGjGq4gevjKJO1WPgvvNN3ynRp5ajyob7utfqUZa93i2w72P4A1OVozVoGLYafEcu5ldC%2FlbFE0uDir8v67sHtwoSNXOWmT6J70MCvAcTl1eLyS%2BsHSMOz3gjWESfXECCtS6IiUz3ZG7iiJYVrW%2B5zL0cARmNlpz5i4o%2BUMPSiicMGOqUB%2BaWMkIWkPATxZ5l3mVyuIbPFmkWAO2ZRrdFGPz1EbG2zQnMGG7Ssh4DoTrhkMSUlBwX4YiGwvMj0PL%2FuQMNXaGVWugQ9wjN%2FteTFxl3Qpa8rWaTBMnwoFwBsL4eOT14zyxwXTzDZhz1TlW7vA%2BPrqfuODNp4cwXXZ2hiRFKee1RkSfmDFUC4u8WumMe0iJX7W07QQiQBIbgf5UCzRkqHXapzT6sP&X-Amz-Signature=d543fdb8872c205accd5ee2b6a1f6c37da46f99966a536333118e3e32e8a8349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXULXDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbNLYFAXemcI2eKexM9DVL2xM9uMSRcRKBd8MVirMKQIgHP%2FbLm6dYHgd%2BHsA7MkB%2BsEc61iUL3xwTnGhlOCTQ0UqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5SeLpGbXXnefGwtyrcA8A3jZYMIn1kXHOeIQgxjPwHDWD9Ek4rMR2cTSvaORaS%2B5hIU1o6z6byIFFnxhL4Zoe7VMSw40wtJ1GGDvzxIlyIK%2BIO5huLzJDzymxlW6cfIaPbeoyGaasiP5PjOpfgoWey5UyQ3uW3GmURrix16w7ul%2BGkmlmJP02CP2BH%2FHi3T31UopHa6l0hTcm28TBHvgu9Vq4nEErZf8d7UIfyj6D%2B%2FviRLtf2%2F3ABUvB8L2dUqAp37PU48ICmqx1yeApxeS9WeI%2BOW2OuMAlZPXXdpFWXxQ4OVB4q%2FWv0J5BY%2Fa2WZDhE5%2Baki8eObPKXjerxF8gb6peiJIXPHVK3QtPMmQa%2BWpUBjM9t2SUzWBaP%2FkYXurOIFjuzgVrsNfMLVrYQ7utQuIMsgUUu8KKzQ1vdajkv%2FSuqTv%2FVNfi%2Fk4cLdxkr9T5AnM6EHivdbMUcJ92PoWRUVDvqzkZk3JcckGZiUZYGjGq4gevjKJO1WPgvvNN3ynRp5ajyob7utfqUZa93i2w72P4A1OVozVoGLYafEcu5ldC%2FlbFE0uDir8v67sHtwoSNXOWmT6J70MCvAcTl1eLyS%2BsHSMOz3gjWESfXECCtS6IiUz3ZG7iiJYVrW%2B5zL0cARmNlpz5i4o%2BUMPSiicMGOqUB%2BaWMkIWkPATxZ5l3mVyuIbPFmkWAO2ZRrdFGPz1EbG2zQnMGG7Ssh4DoTrhkMSUlBwX4YiGwvMj0PL%2FuQMNXaGVWugQ9wjN%2FteTFxl3Qpa8rWaTBMnwoFwBsL4eOT14zyxwXTzDZhz1TlW7vA%2BPrqfuODNp4cwXXZ2hiRFKee1RkSfmDFUC4u8WumMe0iJX7W07QQiQBIbgf5UCzRkqHXapzT6sP&X-Amz-Signature=43a2efce631fb2ecba3d0f06ad947af5c8ea0d935db75a3afc497e4290e9a4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXULXDB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbNLYFAXemcI2eKexM9DVL2xM9uMSRcRKBd8MVirMKQIgHP%2FbLm6dYHgd%2BHsA7MkB%2BsEc61iUL3xwTnGhlOCTQ0UqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5SeLpGbXXnefGwtyrcA8A3jZYMIn1kXHOeIQgxjPwHDWD9Ek4rMR2cTSvaORaS%2B5hIU1o6z6byIFFnxhL4Zoe7VMSw40wtJ1GGDvzxIlyIK%2BIO5huLzJDzymxlW6cfIaPbeoyGaasiP5PjOpfgoWey5UyQ3uW3GmURrix16w7ul%2BGkmlmJP02CP2BH%2FHi3T31UopHa6l0hTcm28TBHvgu9Vq4nEErZf8d7UIfyj6D%2B%2FviRLtf2%2F3ABUvB8L2dUqAp37PU48ICmqx1yeApxeS9WeI%2BOW2OuMAlZPXXdpFWXxQ4OVB4q%2FWv0J5BY%2Fa2WZDhE5%2Baki8eObPKXjerxF8gb6peiJIXPHVK3QtPMmQa%2BWpUBjM9t2SUzWBaP%2FkYXurOIFjuzgVrsNfMLVrYQ7utQuIMsgUUu8KKzQ1vdajkv%2FSuqTv%2FVNfi%2Fk4cLdxkr9T5AnM6EHivdbMUcJ92PoWRUVDvqzkZk3JcckGZiUZYGjGq4gevjKJO1WPgvvNN3ynRp5ajyob7utfqUZa93i2w72P4A1OVozVoGLYafEcu5ldC%2FlbFE0uDir8v67sHtwoSNXOWmT6J70MCvAcTl1eLyS%2BsHSMOz3gjWESfXECCtS6IiUz3ZG7iiJYVrW%2B5zL0cARmNlpz5i4o%2BUMPSiicMGOqUB%2BaWMkIWkPATxZ5l3mVyuIbPFmkWAO2ZRrdFGPz1EbG2zQnMGG7Ssh4DoTrhkMSUlBwX4YiGwvMj0PL%2FuQMNXaGVWugQ9wjN%2FteTFxl3Qpa8rWaTBMnwoFwBsL4eOT14zyxwXTzDZhz1TlW7vA%2BPrqfuODNp4cwXXZ2hiRFKee1RkSfmDFUC4u8WumMe0iJX7W07QQiQBIbgf5UCzRkqHXapzT6sP&X-Amz-Signature=ac0641c7bcae961631a469b11fd7da076e3c72421acaba5bd8ebe0b0d3bdd467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
