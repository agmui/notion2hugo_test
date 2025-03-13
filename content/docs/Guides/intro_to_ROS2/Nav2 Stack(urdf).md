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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XS2WKU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUqRJu%2FY%2FmTWsvhKvH%2Fiy5%2BIvGhVKd%2FrPnDD5YUzfxAIgWC9DlJOn9A3pLD%2B%2FcVZCo6Q%2BYKY43QBCNmhvWkwjtk4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPbP8yC5A9vyAacMircA1FfureowV%2BfNvloHvcGZfhTomK916MUWepa0VXA2uGuzdxpKQYUO0Tv1I9uLLIilBm020BFZdBWpSOn2r%2BuivShSdgNLEpBljfvXiuLaeX5YDs4UEd%2BaVb7e48x4t2z%2FIxUckDlTlWgMSt9SWyrf1DIfhR3ACue9N7wV6F%2BT7mNN6snpLcuGKdHMa%2FIJFF5GuGpsjh4glwQV4d3ElLUPsYy2KvXT4uKuFXR%2B0OYRtq%2FPbRIrR%2FmTfneTEVvK2lSQvlw4TkeJw%2FiEx7dX4kT1Gcl4goOt2N0kBgCbX%2FwWQ8JgiXDEyjHA63MQ2eAuKGmgpKvsQYsJzZ3KC0gIx4VWOEnlsr4JSwsZjcMtVxulU%2BmU069L72Ni5TtcBgZZ4IUuTiFl5dK4ovKPBQQ9ayYcx%2FRM1AVzOL0G5QgmwFsKhtcd%2FkxEFovjSLG4MtCVKPUWsmzilJnQIJCR8hFLCDokxU1kHVxnPedHprkiGNSdQKXVBxAaASKaKrWf6iykInT%2FV5qvtYmGU0JC8cmJBnUshqMylM0T6IdatRQPxJYyMSz%2BAt7Tq2LdGDnckzLgtfjT0SYoN29YT%2FLwkltqUFzaMQ%2Fb1JLFqkk2xYijjoytmUoc0g3xwYKENh7D2SdMLe7yb4GOqUBeh4ONQT3uHnfb%2BuybTowfrGbYP2Qem2gLfbdGdAdeeYXH0d7sNfP3VRb9Zw3BawMKmpwlNvh5CW1L3v6TyRybeZtDd5Z83CVs3%2Bap0pY%2FSrgDxgjYdW7mrfKtTfpp%2FwI18nkMi9DiZEt7fko2zkc0dRZal%2F5AZljFTFN77breVBjjUXWUycRD%2Bq6pRboi66NtQqLbWfbIci16TqAnAzJtyYpb0vb&X-Amz-Signature=922d68ab76b90c3db52ebcf5d561b260fb8ada015ff0e781313f598b40183fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XS2WKU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUqRJu%2FY%2FmTWsvhKvH%2Fiy5%2BIvGhVKd%2FrPnDD5YUzfxAIgWC9DlJOn9A3pLD%2B%2FcVZCo6Q%2BYKY43QBCNmhvWkwjtk4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPbP8yC5A9vyAacMircA1FfureowV%2BfNvloHvcGZfhTomK916MUWepa0VXA2uGuzdxpKQYUO0Tv1I9uLLIilBm020BFZdBWpSOn2r%2BuivShSdgNLEpBljfvXiuLaeX5YDs4UEd%2BaVb7e48x4t2z%2FIxUckDlTlWgMSt9SWyrf1DIfhR3ACue9N7wV6F%2BT7mNN6snpLcuGKdHMa%2FIJFF5GuGpsjh4glwQV4d3ElLUPsYy2KvXT4uKuFXR%2B0OYRtq%2FPbRIrR%2FmTfneTEVvK2lSQvlw4TkeJw%2FiEx7dX4kT1Gcl4goOt2N0kBgCbX%2FwWQ8JgiXDEyjHA63MQ2eAuKGmgpKvsQYsJzZ3KC0gIx4VWOEnlsr4JSwsZjcMtVxulU%2BmU069L72Ni5TtcBgZZ4IUuTiFl5dK4ovKPBQQ9ayYcx%2FRM1AVzOL0G5QgmwFsKhtcd%2FkxEFovjSLG4MtCVKPUWsmzilJnQIJCR8hFLCDokxU1kHVxnPedHprkiGNSdQKXVBxAaASKaKrWf6iykInT%2FV5qvtYmGU0JC8cmJBnUshqMylM0T6IdatRQPxJYyMSz%2BAt7Tq2LdGDnckzLgtfjT0SYoN29YT%2FLwkltqUFzaMQ%2Fb1JLFqkk2xYijjoytmUoc0g3xwYKENh7D2SdMLe7yb4GOqUBeh4ONQT3uHnfb%2BuybTowfrGbYP2Qem2gLfbdGdAdeeYXH0d7sNfP3VRb9Zw3BawMKmpwlNvh5CW1L3v6TyRybeZtDd5Z83CVs3%2Bap0pY%2FSrgDxgjYdW7mrfKtTfpp%2FwI18nkMi9DiZEt7fko2zkc0dRZal%2F5AZljFTFN77breVBjjUXWUycRD%2Bq6pRboi66NtQqLbWfbIci16TqAnAzJtyYpb0vb&X-Amz-Signature=e3df8a02058d52e49296e24b3e8d9a137eb5c84e619a7c4b57306e668d047a19&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XS2WKU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUqRJu%2FY%2FmTWsvhKvH%2Fiy5%2BIvGhVKd%2FrPnDD5YUzfxAIgWC9DlJOn9A3pLD%2B%2FcVZCo6Q%2BYKY43QBCNmhvWkwjtk4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPbP8yC5A9vyAacMircA1FfureowV%2BfNvloHvcGZfhTomK916MUWepa0VXA2uGuzdxpKQYUO0Tv1I9uLLIilBm020BFZdBWpSOn2r%2BuivShSdgNLEpBljfvXiuLaeX5YDs4UEd%2BaVb7e48x4t2z%2FIxUckDlTlWgMSt9SWyrf1DIfhR3ACue9N7wV6F%2BT7mNN6snpLcuGKdHMa%2FIJFF5GuGpsjh4glwQV4d3ElLUPsYy2KvXT4uKuFXR%2B0OYRtq%2FPbRIrR%2FmTfneTEVvK2lSQvlw4TkeJw%2FiEx7dX4kT1Gcl4goOt2N0kBgCbX%2FwWQ8JgiXDEyjHA63MQ2eAuKGmgpKvsQYsJzZ3KC0gIx4VWOEnlsr4JSwsZjcMtVxulU%2BmU069L72Ni5TtcBgZZ4IUuTiFl5dK4ovKPBQQ9ayYcx%2FRM1AVzOL0G5QgmwFsKhtcd%2FkxEFovjSLG4MtCVKPUWsmzilJnQIJCR8hFLCDokxU1kHVxnPedHprkiGNSdQKXVBxAaASKaKrWf6iykInT%2FV5qvtYmGU0JC8cmJBnUshqMylM0T6IdatRQPxJYyMSz%2BAt7Tq2LdGDnckzLgtfjT0SYoN29YT%2FLwkltqUFzaMQ%2Fb1JLFqkk2xYijjoytmUoc0g3xwYKENh7D2SdMLe7yb4GOqUBeh4ONQT3uHnfb%2BuybTowfrGbYP2Qem2gLfbdGdAdeeYXH0d7sNfP3VRb9Zw3BawMKmpwlNvh5CW1L3v6TyRybeZtDd5Z83CVs3%2Bap0pY%2FSrgDxgjYdW7mrfKtTfpp%2FwI18nkMi9DiZEt7fko2zkc0dRZal%2F5AZljFTFN77breVBjjUXWUycRD%2Bq6pRboi66NtQqLbWfbIci16TqAnAzJtyYpb0vb&X-Amz-Signature=bb46496468ff920ab711ee2b7897aa30e76199642f90083a2caf63fab46dec01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XS2WKU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUqRJu%2FY%2FmTWsvhKvH%2Fiy5%2BIvGhVKd%2FrPnDD5YUzfxAIgWC9DlJOn9A3pLD%2B%2FcVZCo6Q%2BYKY43QBCNmhvWkwjtk4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPbP8yC5A9vyAacMircA1FfureowV%2BfNvloHvcGZfhTomK916MUWepa0VXA2uGuzdxpKQYUO0Tv1I9uLLIilBm020BFZdBWpSOn2r%2BuivShSdgNLEpBljfvXiuLaeX5YDs4UEd%2BaVb7e48x4t2z%2FIxUckDlTlWgMSt9SWyrf1DIfhR3ACue9N7wV6F%2BT7mNN6snpLcuGKdHMa%2FIJFF5GuGpsjh4glwQV4d3ElLUPsYy2KvXT4uKuFXR%2B0OYRtq%2FPbRIrR%2FmTfneTEVvK2lSQvlw4TkeJw%2FiEx7dX4kT1Gcl4goOt2N0kBgCbX%2FwWQ8JgiXDEyjHA63MQ2eAuKGmgpKvsQYsJzZ3KC0gIx4VWOEnlsr4JSwsZjcMtVxulU%2BmU069L72Ni5TtcBgZZ4IUuTiFl5dK4ovKPBQQ9ayYcx%2FRM1AVzOL0G5QgmwFsKhtcd%2FkxEFovjSLG4MtCVKPUWsmzilJnQIJCR8hFLCDokxU1kHVxnPedHprkiGNSdQKXVBxAaASKaKrWf6iykInT%2FV5qvtYmGU0JC8cmJBnUshqMylM0T6IdatRQPxJYyMSz%2BAt7Tq2LdGDnckzLgtfjT0SYoN29YT%2FLwkltqUFzaMQ%2Fb1JLFqkk2xYijjoytmUoc0g3xwYKENh7D2SdMLe7yb4GOqUBeh4ONQT3uHnfb%2BuybTowfrGbYP2Qem2gLfbdGdAdeeYXH0d7sNfP3VRb9Zw3BawMKmpwlNvh5CW1L3v6TyRybeZtDd5Z83CVs3%2Bap0pY%2FSrgDxgjYdW7mrfKtTfpp%2FwI18nkMi9DiZEt7fko2zkc0dRZal%2F5AZljFTFN77breVBjjUXWUycRD%2Bq6pRboi66NtQqLbWfbIci16TqAnAzJtyYpb0vb&X-Amz-Signature=0df2b22f09f499ea9009155e4481c56f5b7a0339e57b5cd65a2ec09df34c33f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XS2WKU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUqRJu%2FY%2FmTWsvhKvH%2Fiy5%2BIvGhVKd%2FrPnDD5YUzfxAIgWC9DlJOn9A3pLD%2B%2FcVZCo6Q%2BYKY43QBCNmhvWkwjtk4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPbP8yC5A9vyAacMircA1FfureowV%2BfNvloHvcGZfhTomK916MUWepa0VXA2uGuzdxpKQYUO0Tv1I9uLLIilBm020BFZdBWpSOn2r%2BuivShSdgNLEpBljfvXiuLaeX5YDs4UEd%2BaVb7e48x4t2z%2FIxUckDlTlWgMSt9SWyrf1DIfhR3ACue9N7wV6F%2BT7mNN6snpLcuGKdHMa%2FIJFF5GuGpsjh4glwQV4d3ElLUPsYy2KvXT4uKuFXR%2B0OYRtq%2FPbRIrR%2FmTfneTEVvK2lSQvlw4TkeJw%2FiEx7dX4kT1Gcl4goOt2N0kBgCbX%2FwWQ8JgiXDEyjHA63MQ2eAuKGmgpKvsQYsJzZ3KC0gIx4VWOEnlsr4JSwsZjcMtVxulU%2BmU069L72Ni5TtcBgZZ4IUuTiFl5dK4ovKPBQQ9ayYcx%2FRM1AVzOL0G5QgmwFsKhtcd%2FkxEFovjSLG4MtCVKPUWsmzilJnQIJCR8hFLCDokxU1kHVxnPedHprkiGNSdQKXVBxAaASKaKrWf6iykInT%2FV5qvtYmGU0JC8cmJBnUshqMylM0T6IdatRQPxJYyMSz%2BAt7Tq2LdGDnckzLgtfjT0SYoN29YT%2FLwkltqUFzaMQ%2Fb1JLFqkk2xYijjoytmUoc0g3xwYKENh7D2SdMLe7yb4GOqUBeh4ONQT3uHnfb%2BuybTowfrGbYP2Qem2gLfbdGdAdeeYXH0d7sNfP3VRb9Zw3BawMKmpwlNvh5CW1L3v6TyRybeZtDd5Z83CVs3%2Bap0pY%2FSrgDxgjYdW7mrfKtTfpp%2FwI18nkMi9DiZEt7fko2zkc0dRZal%2F5AZljFTFN77breVBjjUXWUycRD%2Bq6pRboi66NtQqLbWfbIci16TqAnAzJtyYpb0vb&X-Amz-Signature=3c01e37c7945936c79ce20a552ef02a6daee1cb2ba2134a6e18b3995ca9d5d33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XS2WKU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHUqRJu%2FY%2FmTWsvhKvH%2Fiy5%2BIvGhVKd%2FrPnDD5YUzfxAIgWC9DlJOn9A3pLD%2B%2FcVZCo6Q%2BYKY43QBCNmhvWkwjtk4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPbP8yC5A9vyAacMircA1FfureowV%2BfNvloHvcGZfhTomK916MUWepa0VXA2uGuzdxpKQYUO0Tv1I9uLLIilBm020BFZdBWpSOn2r%2BuivShSdgNLEpBljfvXiuLaeX5YDs4UEd%2BaVb7e48x4t2z%2FIxUckDlTlWgMSt9SWyrf1DIfhR3ACue9N7wV6F%2BT7mNN6snpLcuGKdHMa%2FIJFF5GuGpsjh4glwQV4d3ElLUPsYy2KvXT4uKuFXR%2B0OYRtq%2FPbRIrR%2FmTfneTEVvK2lSQvlw4TkeJw%2FiEx7dX4kT1Gcl4goOt2N0kBgCbX%2FwWQ8JgiXDEyjHA63MQ2eAuKGmgpKvsQYsJzZ3KC0gIx4VWOEnlsr4JSwsZjcMtVxulU%2BmU069L72Ni5TtcBgZZ4IUuTiFl5dK4ovKPBQQ9ayYcx%2FRM1AVzOL0G5QgmwFsKhtcd%2FkxEFovjSLG4MtCVKPUWsmzilJnQIJCR8hFLCDokxU1kHVxnPedHprkiGNSdQKXVBxAaASKaKrWf6iykInT%2FV5qvtYmGU0JC8cmJBnUshqMylM0T6IdatRQPxJYyMSz%2BAt7Tq2LdGDnckzLgtfjT0SYoN29YT%2FLwkltqUFzaMQ%2Fb1JLFqkk2xYijjoytmUoc0g3xwYKENh7D2SdMLe7yb4GOqUBeh4ONQT3uHnfb%2BuybTowfrGbYP2Qem2gLfbdGdAdeeYXH0d7sNfP3VRb9Zw3BawMKmpwlNvh5CW1L3v6TyRybeZtDd5Z83CVs3%2Bap0pY%2FSrgDxgjYdW7mrfKtTfpp%2FwI18nkMi9DiZEt7fko2zkc0dRZal%2F5AZljFTFN77breVBjjUXWUycRD%2Bq6pRboi66NtQqLbWfbIci16TqAnAzJtyYpb0vb&X-Amz-Signature=432a3236b8c00e62bb0e23dfbea28aa7d5590f1f49f716abfb5e8fa4728062c4&X-Amz-SignedHeaders=host&x-id=GetObject)
