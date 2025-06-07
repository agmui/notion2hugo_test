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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM2SETU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BzQJlPVpIr2J4H2wBpeuprUdeMy%2Fl57FTV7ok69ZnQIhAPQL8uqo8PaTw6s6NUaUKzcEzrEGUO9guhvGjD7iQ1P%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxORvgxNURikRm%2BZe0q3APEDfsKf8CKrmte%2BAcWR%2Bcp9%2FATQigQExTZUG36LpyQoDyZR58Dw9NfCdM0GrRgVidykU7uLAeZu8imH26tXb0w3UGQDdI3Sd6SRuQmNYBUEBvc1WMoNY5p5F8mPHTSlnT2O12IYb6U9%2BorDpUL4oBsaAsJSS5UnFWn9DiKQa5QvllfBkwmxPfC78FGVcmpkq1ML2EhRwyD2kU4AJ0VrhBG9cMGw%2BWVCjKBPR8Vq7IqkjwU%2BTLkJfK%2BfTVDYcGZSpIKiuKQXYZQJJWrqIPHSEqaxZLMMbVK6QPTyBH31Y%2BGX3y3eSVUFIdzmhER2ftxw6k%2B0GOqafLKA%2BfnSn5uRRvvAVCqJtTZ7ELdZgBGKeMasThxNLliVqqgnvgANeQXxYPzF3i6Kc5nwN0RCweg2%2BauN3iDdDdnSsnEwltxc02%2BNk97xfaTzKZzEK2jt%2B0134GAll8boel%2Bdm6nETbm8vMKI%2B8D7kOl%2BrhZY%2BANas3P6BRdamC%2FsHp2cGsuq%2BaTOyEAKhNSsekuQDVdCzUCMALWAX9GerJWO9B8bMeYQluOMPxEZYozi62sOxWLV1hDkdqpL2CqTZol6qe35gbkamcfN5u%2FkYGQeQW2%2BT5aGpVc3xArh6j5bH0nbVIm4TCNgZHCBjqkAegLBa%2FNUpAG1CTdGGyUEL7YW1g5Tza6crnf6RZP1lnSF1vIVip5jny2JMGvgRO%2F5Gq9zIusf19zfZ34sdPJd%2FzcdmO%2BlygSyqDLxAux5W5eO15S6JqkeY%2BD%2Bppu%2F9ibw20OFqA0dYpp0ooo%2Fgxd5a86F8pIwV6A%2BdqRaVVkAYqPs8%2BZxKYuYecXesk9sZJNCxN48tP%2FxJaaJ8Xdqttp9KszBFg7&X-Amz-Signature=b59334c6c8239d1ec6cc8da1034f48835163f45997d22cc2adf0dc19b778525a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM2SETU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BzQJlPVpIr2J4H2wBpeuprUdeMy%2Fl57FTV7ok69ZnQIhAPQL8uqo8PaTw6s6NUaUKzcEzrEGUO9guhvGjD7iQ1P%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxORvgxNURikRm%2BZe0q3APEDfsKf8CKrmte%2BAcWR%2Bcp9%2FATQigQExTZUG36LpyQoDyZR58Dw9NfCdM0GrRgVidykU7uLAeZu8imH26tXb0w3UGQDdI3Sd6SRuQmNYBUEBvc1WMoNY5p5F8mPHTSlnT2O12IYb6U9%2BorDpUL4oBsaAsJSS5UnFWn9DiKQa5QvllfBkwmxPfC78FGVcmpkq1ML2EhRwyD2kU4AJ0VrhBG9cMGw%2BWVCjKBPR8Vq7IqkjwU%2BTLkJfK%2BfTVDYcGZSpIKiuKQXYZQJJWrqIPHSEqaxZLMMbVK6QPTyBH31Y%2BGX3y3eSVUFIdzmhER2ftxw6k%2B0GOqafLKA%2BfnSn5uRRvvAVCqJtTZ7ELdZgBGKeMasThxNLliVqqgnvgANeQXxYPzF3i6Kc5nwN0RCweg2%2BauN3iDdDdnSsnEwltxc02%2BNk97xfaTzKZzEK2jt%2B0134GAll8boel%2Bdm6nETbm8vMKI%2B8D7kOl%2BrhZY%2BANas3P6BRdamC%2FsHp2cGsuq%2BaTOyEAKhNSsekuQDVdCzUCMALWAX9GerJWO9B8bMeYQluOMPxEZYozi62sOxWLV1hDkdqpL2CqTZol6qe35gbkamcfN5u%2FkYGQeQW2%2BT5aGpVc3xArh6j5bH0nbVIm4TCNgZHCBjqkAegLBa%2FNUpAG1CTdGGyUEL7YW1g5Tza6crnf6RZP1lnSF1vIVip5jny2JMGvgRO%2F5Gq9zIusf19zfZ34sdPJd%2FzcdmO%2BlygSyqDLxAux5W5eO15S6JqkeY%2BD%2Bppu%2F9ibw20OFqA0dYpp0ooo%2Fgxd5a86F8pIwV6A%2BdqRaVVkAYqPs8%2BZxKYuYecXesk9sZJNCxN48tP%2FxJaaJ8Xdqttp9KszBFg7&X-Amz-Signature=b1c8c5d5855c1220becdaf318b3f3da3126567f1f30fc5f97913db50a364d735&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM2SETU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BzQJlPVpIr2J4H2wBpeuprUdeMy%2Fl57FTV7ok69ZnQIhAPQL8uqo8PaTw6s6NUaUKzcEzrEGUO9guhvGjD7iQ1P%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxORvgxNURikRm%2BZe0q3APEDfsKf8CKrmte%2BAcWR%2Bcp9%2FATQigQExTZUG36LpyQoDyZR58Dw9NfCdM0GrRgVidykU7uLAeZu8imH26tXb0w3UGQDdI3Sd6SRuQmNYBUEBvc1WMoNY5p5F8mPHTSlnT2O12IYb6U9%2BorDpUL4oBsaAsJSS5UnFWn9DiKQa5QvllfBkwmxPfC78FGVcmpkq1ML2EhRwyD2kU4AJ0VrhBG9cMGw%2BWVCjKBPR8Vq7IqkjwU%2BTLkJfK%2BfTVDYcGZSpIKiuKQXYZQJJWrqIPHSEqaxZLMMbVK6QPTyBH31Y%2BGX3y3eSVUFIdzmhER2ftxw6k%2B0GOqafLKA%2BfnSn5uRRvvAVCqJtTZ7ELdZgBGKeMasThxNLliVqqgnvgANeQXxYPzF3i6Kc5nwN0RCweg2%2BauN3iDdDdnSsnEwltxc02%2BNk97xfaTzKZzEK2jt%2B0134GAll8boel%2Bdm6nETbm8vMKI%2B8D7kOl%2BrhZY%2BANas3P6BRdamC%2FsHp2cGsuq%2BaTOyEAKhNSsekuQDVdCzUCMALWAX9GerJWO9B8bMeYQluOMPxEZYozi62sOxWLV1hDkdqpL2CqTZol6qe35gbkamcfN5u%2FkYGQeQW2%2BT5aGpVc3xArh6j5bH0nbVIm4TCNgZHCBjqkAegLBa%2FNUpAG1CTdGGyUEL7YW1g5Tza6crnf6RZP1lnSF1vIVip5jny2JMGvgRO%2F5Gq9zIusf19zfZ34sdPJd%2FzcdmO%2BlygSyqDLxAux5W5eO15S6JqkeY%2BD%2Bppu%2F9ibw20OFqA0dYpp0ooo%2Fgxd5a86F8pIwV6A%2BdqRaVVkAYqPs8%2BZxKYuYecXesk9sZJNCxN48tP%2FxJaaJ8Xdqttp9KszBFg7&X-Amz-Signature=c86e3677bb263d5e915b664ea60948d27f31e504fe01ef887169a41eb1b9e6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM2SETU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BzQJlPVpIr2J4H2wBpeuprUdeMy%2Fl57FTV7ok69ZnQIhAPQL8uqo8PaTw6s6NUaUKzcEzrEGUO9guhvGjD7iQ1P%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxORvgxNURikRm%2BZe0q3APEDfsKf8CKrmte%2BAcWR%2Bcp9%2FATQigQExTZUG36LpyQoDyZR58Dw9NfCdM0GrRgVidykU7uLAeZu8imH26tXb0w3UGQDdI3Sd6SRuQmNYBUEBvc1WMoNY5p5F8mPHTSlnT2O12IYb6U9%2BorDpUL4oBsaAsJSS5UnFWn9DiKQa5QvllfBkwmxPfC78FGVcmpkq1ML2EhRwyD2kU4AJ0VrhBG9cMGw%2BWVCjKBPR8Vq7IqkjwU%2BTLkJfK%2BfTVDYcGZSpIKiuKQXYZQJJWrqIPHSEqaxZLMMbVK6QPTyBH31Y%2BGX3y3eSVUFIdzmhER2ftxw6k%2B0GOqafLKA%2BfnSn5uRRvvAVCqJtTZ7ELdZgBGKeMasThxNLliVqqgnvgANeQXxYPzF3i6Kc5nwN0RCweg2%2BauN3iDdDdnSsnEwltxc02%2BNk97xfaTzKZzEK2jt%2B0134GAll8boel%2Bdm6nETbm8vMKI%2B8D7kOl%2BrhZY%2BANas3P6BRdamC%2FsHp2cGsuq%2BaTOyEAKhNSsekuQDVdCzUCMALWAX9GerJWO9B8bMeYQluOMPxEZYozi62sOxWLV1hDkdqpL2CqTZol6qe35gbkamcfN5u%2FkYGQeQW2%2BT5aGpVc3xArh6j5bH0nbVIm4TCNgZHCBjqkAegLBa%2FNUpAG1CTdGGyUEL7YW1g5Tza6crnf6RZP1lnSF1vIVip5jny2JMGvgRO%2F5Gq9zIusf19zfZ34sdPJd%2FzcdmO%2BlygSyqDLxAux5W5eO15S6JqkeY%2BD%2Bppu%2F9ibw20OFqA0dYpp0ooo%2Fgxd5a86F8pIwV6A%2BdqRaVVkAYqPs8%2BZxKYuYecXesk9sZJNCxN48tP%2FxJaaJ8Xdqttp9KszBFg7&X-Amz-Signature=cfcd9c03a7a9d208f09bf21adb84a28fbada32b084d8d47d50ad3ee9cbffbe88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM2SETU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BzQJlPVpIr2J4H2wBpeuprUdeMy%2Fl57FTV7ok69ZnQIhAPQL8uqo8PaTw6s6NUaUKzcEzrEGUO9guhvGjD7iQ1P%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxORvgxNURikRm%2BZe0q3APEDfsKf8CKrmte%2BAcWR%2Bcp9%2FATQigQExTZUG36LpyQoDyZR58Dw9NfCdM0GrRgVidykU7uLAeZu8imH26tXb0w3UGQDdI3Sd6SRuQmNYBUEBvc1WMoNY5p5F8mPHTSlnT2O12IYb6U9%2BorDpUL4oBsaAsJSS5UnFWn9DiKQa5QvllfBkwmxPfC78FGVcmpkq1ML2EhRwyD2kU4AJ0VrhBG9cMGw%2BWVCjKBPR8Vq7IqkjwU%2BTLkJfK%2BfTVDYcGZSpIKiuKQXYZQJJWrqIPHSEqaxZLMMbVK6QPTyBH31Y%2BGX3y3eSVUFIdzmhER2ftxw6k%2B0GOqafLKA%2BfnSn5uRRvvAVCqJtTZ7ELdZgBGKeMasThxNLliVqqgnvgANeQXxYPzF3i6Kc5nwN0RCweg2%2BauN3iDdDdnSsnEwltxc02%2BNk97xfaTzKZzEK2jt%2B0134GAll8boel%2Bdm6nETbm8vMKI%2B8D7kOl%2BrhZY%2BANas3P6BRdamC%2FsHp2cGsuq%2BaTOyEAKhNSsekuQDVdCzUCMALWAX9GerJWO9B8bMeYQluOMPxEZYozi62sOxWLV1hDkdqpL2CqTZol6qe35gbkamcfN5u%2FkYGQeQW2%2BT5aGpVc3xArh6j5bH0nbVIm4TCNgZHCBjqkAegLBa%2FNUpAG1CTdGGyUEL7YW1g5Tza6crnf6RZP1lnSF1vIVip5jny2JMGvgRO%2F5Gq9zIusf19zfZ34sdPJd%2FzcdmO%2BlygSyqDLxAux5W5eO15S6JqkeY%2BD%2Bppu%2F9ibw20OFqA0dYpp0ooo%2Fgxd5a86F8pIwV6A%2BdqRaVVkAYqPs8%2BZxKYuYecXesk9sZJNCxN48tP%2FxJaaJ8Xdqttp9KszBFg7&X-Amz-Signature=478207753125015761df9162885fedb1814637926d97bd4850320a8d0856ce32&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM2SETU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BzQJlPVpIr2J4H2wBpeuprUdeMy%2Fl57FTV7ok69ZnQIhAPQL8uqo8PaTw6s6NUaUKzcEzrEGUO9guhvGjD7iQ1P%2BKv8DCHcQABoMNjM3NDIzMTgzODA1IgxORvgxNURikRm%2BZe0q3APEDfsKf8CKrmte%2BAcWR%2Bcp9%2FATQigQExTZUG36LpyQoDyZR58Dw9NfCdM0GrRgVidykU7uLAeZu8imH26tXb0w3UGQDdI3Sd6SRuQmNYBUEBvc1WMoNY5p5F8mPHTSlnT2O12IYb6U9%2BorDpUL4oBsaAsJSS5UnFWn9DiKQa5QvllfBkwmxPfC78FGVcmpkq1ML2EhRwyD2kU4AJ0VrhBG9cMGw%2BWVCjKBPR8Vq7IqkjwU%2BTLkJfK%2BfTVDYcGZSpIKiuKQXYZQJJWrqIPHSEqaxZLMMbVK6QPTyBH31Y%2BGX3y3eSVUFIdzmhER2ftxw6k%2B0GOqafLKA%2BfnSn5uRRvvAVCqJtTZ7ELdZgBGKeMasThxNLliVqqgnvgANeQXxYPzF3i6Kc5nwN0RCweg2%2BauN3iDdDdnSsnEwltxc02%2BNk97xfaTzKZzEK2jt%2B0134GAll8boel%2Bdm6nETbm8vMKI%2B8D7kOl%2BrhZY%2BANas3P6BRdamC%2FsHp2cGsuq%2BaTOyEAKhNSsekuQDVdCzUCMALWAX9GerJWO9B8bMeYQluOMPxEZYozi62sOxWLV1hDkdqpL2CqTZol6qe35gbkamcfN5u%2FkYGQeQW2%2BT5aGpVc3xArh6j5bH0nbVIm4TCNgZHCBjqkAegLBa%2FNUpAG1CTdGGyUEL7YW1g5Tza6crnf6RZP1lnSF1vIVip5jny2JMGvgRO%2F5Gq9zIusf19zfZ34sdPJd%2FzcdmO%2BlygSyqDLxAux5W5eO15S6JqkeY%2BD%2Bppu%2F9ibw20OFqA0dYpp0ooo%2Fgxd5a86F8pIwV6A%2BdqRaVVkAYqPs8%2BZxKYuYecXesk9sZJNCxN48tP%2FxJaaJ8Xdqttp9KszBFg7&X-Amz-Signature=23a35d8d535292913020f863614e6781b37abb602fadb8c6ad5fdc0786b7dd9d&X-Amz-SignedHeaders=host&x-id=GetObject)
