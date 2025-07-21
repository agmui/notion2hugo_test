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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMQOU4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FIuR4CNlMTr%2BK2Mj6CXchZQncBw4Q6VCCbJhFps%2F0aAIhAM%2BhUUoOWmh0VEdtNDWtoJAohhJb2eulvZhBZB0NeHzvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaLipyiNnxZwGuwBoq3AMlcWPBXEFzBpZhag8KT3v49faSF3fa0jlC9mEFOU4YxQJ%2B5UWmyjkf7v0RDIWuZUvrp2PGGiMeB0lvlKc7Duxq%2BFhf%2FLSM%2Fz5tsj20mhJ1Pvblu2a%2Bxm70q3kK2vw2LmckXMbn02U5V9YT%2BBQqtWK8eAumYnb5CBg74tprC34dYg%2FbcCHyI%2F98VoWBGN5vYrNP4RqIWr%2FltaO%2BxM%2BwKLkpyZvdSzJg%2BRCd0NwwgOwpYaio5kW1SGTwOb5Zwzd4kQXkFgjXmnppNoxKvhooVloAldOl0QUBr2A90mSw%2FzxFTetbQnMgFIClBqpJQ6fYCmwAgu57H7nJjnvcV4x2%2BuIR5VjXcFO1BZL1oCzUbgDWF4u146%2FeVzuz%2F5qoey5WRCTCerxKHhcPcN2uSvjykM1ks4sLh6AfioaiVvc28wPOX9%2FxVbdfeboyG%2Bh6Rd4SRGrDf5FvuW7xsjDoVMPR7YHfBx2r7juhhPV9ZYI7SPhBGkW4rzpmL16V%2FfV26JXskq6%2FUloDd%2BYwu8Jw3NgIxToD2c6JfSUrT%2B95FeyrbSXY7y4CK%2FyAjSac2vLNDY9j8ax7aAAodGojxJkep52c5O4j0pT0NcC%2F6HEW5ud5pOXwmrXaw7tRO9t5MSJVojCE6PnDBjqkAZVWLsHw%2BklUNT%2FMLb%2FebGOqBbl7nknjUsFyPHtQ2%2FAaQXe4HScvej%2BbZAtmd%2BhVlgcI4wE0ybVBketuGzt4WN7afC6MIeF1n8cfPvxCniq1h%2Fgb3jdKZIL%2FUfzgnYZnBbfNRYpBI0p7NhEg3vROIPVGKnIbK9RnVRJ2faE8mewG%2BR%2BZylcb%2B95e7YfcPawCJiPibqzuZttguz1MLpT8Y1mzuXxn&X-Amz-Signature=d7f98bed1840f47612c5cc8924fb4cd26e9753c47d9233d207bb8294dbedbcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMQOU4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FIuR4CNlMTr%2BK2Mj6CXchZQncBw4Q6VCCbJhFps%2F0aAIhAM%2BhUUoOWmh0VEdtNDWtoJAohhJb2eulvZhBZB0NeHzvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaLipyiNnxZwGuwBoq3AMlcWPBXEFzBpZhag8KT3v49faSF3fa0jlC9mEFOU4YxQJ%2B5UWmyjkf7v0RDIWuZUvrp2PGGiMeB0lvlKc7Duxq%2BFhf%2FLSM%2Fz5tsj20mhJ1Pvblu2a%2Bxm70q3kK2vw2LmckXMbn02U5V9YT%2BBQqtWK8eAumYnb5CBg74tprC34dYg%2FbcCHyI%2F98VoWBGN5vYrNP4RqIWr%2FltaO%2BxM%2BwKLkpyZvdSzJg%2BRCd0NwwgOwpYaio5kW1SGTwOb5Zwzd4kQXkFgjXmnppNoxKvhooVloAldOl0QUBr2A90mSw%2FzxFTetbQnMgFIClBqpJQ6fYCmwAgu57H7nJjnvcV4x2%2BuIR5VjXcFO1BZL1oCzUbgDWF4u146%2FeVzuz%2F5qoey5WRCTCerxKHhcPcN2uSvjykM1ks4sLh6AfioaiVvc28wPOX9%2FxVbdfeboyG%2Bh6Rd4SRGrDf5FvuW7xsjDoVMPR7YHfBx2r7juhhPV9ZYI7SPhBGkW4rzpmL16V%2FfV26JXskq6%2FUloDd%2BYwu8Jw3NgIxToD2c6JfSUrT%2B95FeyrbSXY7y4CK%2FyAjSac2vLNDY9j8ax7aAAodGojxJkep52c5O4j0pT0NcC%2F6HEW5ud5pOXwmrXaw7tRO9t5MSJVojCE6PnDBjqkAZVWLsHw%2BklUNT%2FMLb%2FebGOqBbl7nknjUsFyPHtQ2%2FAaQXe4HScvej%2BbZAtmd%2BhVlgcI4wE0ybVBketuGzt4WN7afC6MIeF1n8cfPvxCniq1h%2Fgb3jdKZIL%2FUfzgnYZnBbfNRYpBI0p7NhEg3vROIPVGKnIbK9RnVRJ2faE8mewG%2BR%2BZylcb%2B95e7YfcPawCJiPibqzuZttguz1MLpT8Y1mzuXxn&X-Amz-Signature=5986a75f7590da4fd24880c33ed2ebad071bb5f1d0205d77727c19f51cedf1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMQOU4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FIuR4CNlMTr%2BK2Mj6CXchZQncBw4Q6VCCbJhFps%2F0aAIhAM%2BhUUoOWmh0VEdtNDWtoJAohhJb2eulvZhBZB0NeHzvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaLipyiNnxZwGuwBoq3AMlcWPBXEFzBpZhag8KT3v49faSF3fa0jlC9mEFOU4YxQJ%2B5UWmyjkf7v0RDIWuZUvrp2PGGiMeB0lvlKc7Duxq%2BFhf%2FLSM%2Fz5tsj20mhJ1Pvblu2a%2Bxm70q3kK2vw2LmckXMbn02U5V9YT%2BBQqtWK8eAumYnb5CBg74tprC34dYg%2FbcCHyI%2F98VoWBGN5vYrNP4RqIWr%2FltaO%2BxM%2BwKLkpyZvdSzJg%2BRCd0NwwgOwpYaio5kW1SGTwOb5Zwzd4kQXkFgjXmnppNoxKvhooVloAldOl0QUBr2A90mSw%2FzxFTetbQnMgFIClBqpJQ6fYCmwAgu57H7nJjnvcV4x2%2BuIR5VjXcFO1BZL1oCzUbgDWF4u146%2FeVzuz%2F5qoey5WRCTCerxKHhcPcN2uSvjykM1ks4sLh6AfioaiVvc28wPOX9%2FxVbdfeboyG%2Bh6Rd4SRGrDf5FvuW7xsjDoVMPR7YHfBx2r7juhhPV9ZYI7SPhBGkW4rzpmL16V%2FfV26JXskq6%2FUloDd%2BYwu8Jw3NgIxToD2c6JfSUrT%2B95FeyrbSXY7y4CK%2FyAjSac2vLNDY9j8ax7aAAodGojxJkep52c5O4j0pT0NcC%2F6HEW5ud5pOXwmrXaw7tRO9t5MSJVojCE6PnDBjqkAZVWLsHw%2BklUNT%2FMLb%2FebGOqBbl7nknjUsFyPHtQ2%2FAaQXe4HScvej%2BbZAtmd%2BhVlgcI4wE0ybVBketuGzt4WN7afC6MIeF1n8cfPvxCniq1h%2Fgb3jdKZIL%2FUfzgnYZnBbfNRYpBI0p7NhEg3vROIPVGKnIbK9RnVRJ2faE8mewG%2BR%2BZylcb%2B95e7YfcPawCJiPibqzuZttguz1MLpT8Y1mzuXxn&X-Amz-Signature=9f5d9f303b0c08300e2fd6ac521201b26fc6564c5131b504e24185cc9cd2f50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMQOU4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FIuR4CNlMTr%2BK2Mj6CXchZQncBw4Q6VCCbJhFps%2F0aAIhAM%2BhUUoOWmh0VEdtNDWtoJAohhJb2eulvZhBZB0NeHzvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaLipyiNnxZwGuwBoq3AMlcWPBXEFzBpZhag8KT3v49faSF3fa0jlC9mEFOU4YxQJ%2B5UWmyjkf7v0RDIWuZUvrp2PGGiMeB0lvlKc7Duxq%2BFhf%2FLSM%2Fz5tsj20mhJ1Pvblu2a%2Bxm70q3kK2vw2LmckXMbn02U5V9YT%2BBQqtWK8eAumYnb5CBg74tprC34dYg%2FbcCHyI%2F98VoWBGN5vYrNP4RqIWr%2FltaO%2BxM%2BwKLkpyZvdSzJg%2BRCd0NwwgOwpYaio5kW1SGTwOb5Zwzd4kQXkFgjXmnppNoxKvhooVloAldOl0QUBr2A90mSw%2FzxFTetbQnMgFIClBqpJQ6fYCmwAgu57H7nJjnvcV4x2%2BuIR5VjXcFO1BZL1oCzUbgDWF4u146%2FeVzuz%2F5qoey5WRCTCerxKHhcPcN2uSvjykM1ks4sLh6AfioaiVvc28wPOX9%2FxVbdfeboyG%2Bh6Rd4SRGrDf5FvuW7xsjDoVMPR7YHfBx2r7juhhPV9ZYI7SPhBGkW4rzpmL16V%2FfV26JXskq6%2FUloDd%2BYwu8Jw3NgIxToD2c6JfSUrT%2B95FeyrbSXY7y4CK%2FyAjSac2vLNDY9j8ax7aAAodGojxJkep52c5O4j0pT0NcC%2F6HEW5ud5pOXwmrXaw7tRO9t5MSJVojCE6PnDBjqkAZVWLsHw%2BklUNT%2FMLb%2FebGOqBbl7nknjUsFyPHtQ2%2FAaQXe4HScvej%2BbZAtmd%2BhVlgcI4wE0ybVBketuGzt4WN7afC6MIeF1n8cfPvxCniq1h%2Fgb3jdKZIL%2FUfzgnYZnBbfNRYpBI0p7NhEg3vROIPVGKnIbK9RnVRJ2faE8mewG%2BR%2BZylcb%2B95e7YfcPawCJiPibqzuZttguz1MLpT8Y1mzuXxn&X-Amz-Signature=a426e7bb29ea045f8fdb948bbd361826cc674f1194a52cc20697db76ed24e8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMQOU4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FIuR4CNlMTr%2BK2Mj6CXchZQncBw4Q6VCCbJhFps%2F0aAIhAM%2BhUUoOWmh0VEdtNDWtoJAohhJb2eulvZhBZB0NeHzvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaLipyiNnxZwGuwBoq3AMlcWPBXEFzBpZhag8KT3v49faSF3fa0jlC9mEFOU4YxQJ%2B5UWmyjkf7v0RDIWuZUvrp2PGGiMeB0lvlKc7Duxq%2BFhf%2FLSM%2Fz5tsj20mhJ1Pvblu2a%2Bxm70q3kK2vw2LmckXMbn02U5V9YT%2BBQqtWK8eAumYnb5CBg74tprC34dYg%2FbcCHyI%2F98VoWBGN5vYrNP4RqIWr%2FltaO%2BxM%2BwKLkpyZvdSzJg%2BRCd0NwwgOwpYaio5kW1SGTwOb5Zwzd4kQXkFgjXmnppNoxKvhooVloAldOl0QUBr2A90mSw%2FzxFTetbQnMgFIClBqpJQ6fYCmwAgu57H7nJjnvcV4x2%2BuIR5VjXcFO1BZL1oCzUbgDWF4u146%2FeVzuz%2F5qoey5WRCTCerxKHhcPcN2uSvjykM1ks4sLh6AfioaiVvc28wPOX9%2FxVbdfeboyG%2Bh6Rd4SRGrDf5FvuW7xsjDoVMPR7YHfBx2r7juhhPV9ZYI7SPhBGkW4rzpmL16V%2FfV26JXskq6%2FUloDd%2BYwu8Jw3NgIxToD2c6JfSUrT%2B95FeyrbSXY7y4CK%2FyAjSac2vLNDY9j8ax7aAAodGojxJkep52c5O4j0pT0NcC%2F6HEW5ud5pOXwmrXaw7tRO9t5MSJVojCE6PnDBjqkAZVWLsHw%2BklUNT%2FMLb%2FebGOqBbl7nknjUsFyPHtQ2%2FAaQXe4HScvej%2BbZAtmd%2BhVlgcI4wE0ybVBketuGzt4WN7afC6MIeF1n8cfPvxCniq1h%2Fgb3jdKZIL%2FUfzgnYZnBbfNRYpBI0p7NhEg3vROIPVGKnIbK9RnVRJ2faE8mewG%2BR%2BZylcb%2B95e7YfcPawCJiPibqzuZttguz1MLpT8Y1mzuXxn&X-Amz-Signature=7977e8b08eeb8356974a19f51e35282b2049a25c63500bee3b6ddd0b2603c019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMQOU4T%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FIuR4CNlMTr%2BK2Mj6CXchZQncBw4Q6VCCbJhFps%2F0aAIhAM%2BhUUoOWmh0VEdtNDWtoJAohhJb2eulvZhBZB0NeHzvKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaLipyiNnxZwGuwBoq3AMlcWPBXEFzBpZhag8KT3v49faSF3fa0jlC9mEFOU4YxQJ%2B5UWmyjkf7v0RDIWuZUvrp2PGGiMeB0lvlKc7Duxq%2BFhf%2FLSM%2Fz5tsj20mhJ1Pvblu2a%2Bxm70q3kK2vw2LmckXMbn02U5V9YT%2BBQqtWK8eAumYnb5CBg74tprC34dYg%2FbcCHyI%2F98VoWBGN5vYrNP4RqIWr%2FltaO%2BxM%2BwKLkpyZvdSzJg%2BRCd0NwwgOwpYaio5kW1SGTwOb5Zwzd4kQXkFgjXmnppNoxKvhooVloAldOl0QUBr2A90mSw%2FzxFTetbQnMgFIClBqpJQ6fYCmwAgu57H7nJjnvcV4x2%2BuIR5VjXcFO1BZL1oCzUbgDWF4u146%2FeVzuz%2F5qoey5WRCTCerxKHhcPcN2uSvjykM1ks4sLh6AfioaiVvc28wPOX9%2FxVbdfeboyG%2Bh6Rd4SRGrDf5FvuW7xsjDoVMPR7YHfBx2r7juhhPV9ZYI7SPhBGkW4rzpmL16V%2FfV26JXskq6%2FUloDd%2BYwu8Jw3NgIxToD2c6JfSUrT%2B95FeyrbSXY7y4CK%2FyAjSac2vLNDY9j8ax7aAAodGojxJkep52c5O4j0pT0NcC%2F6HEW5ud5pOXwmrXaw7tRO9t5MSJVojCE6PnDBjqkAZVWLsHw%2BklUNT%2FMLb%2FebGOqBbl7nknjUsFyPHtQ2%2FAaQXe4HScvej%2BbZAtmd%2BhVlgcI4wE0ybVBketuGzt4WN7afC6MIeF1n8cfPvxCniq1h%2Fgb3jdKZIL%2FUfzgnYZnBbfNRYpBI0p7NhEg3vROIPVGKnIbK9RnVRJ2faE8mewG%2BR%2BZylcb%2B95e7YfcPawCJiPibqzuZttguz1MLpT8Y1mzuXxn&X-Amz-Signature=34d8e365a99dc2c7798fbac663c5b1ca6a63a1b72957f5806a10b8f496ec6332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
