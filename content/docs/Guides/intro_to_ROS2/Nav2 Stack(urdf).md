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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOKBINX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUvcY4y3sGKb2I39mBU83zgxpw8T%2FHOf9hxd5Hj05zqAiEAlhSvBRshbTuSg11SR%2FzxaquHO8YkWAAJ2ZzcKYiUObAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEw%2FxGZ5t4Zp%2Fr3ircA42aPgYmDl0mTxSpbqXDRLGywKkkTGAfrG7wNpC1nbOSlJ4xUVumqdJKtC8xLm6PW9q0YgO0QoDpehUeIa2QJN3AIepR7oX6p7bnjCbTI9kVb9Yt3CaGH22SKka0nF%2B6PTit%2Bjr%2B9YgsCdzS%2FKw8f%2FHYSEkwAKCCPGufFwhFR1H05UPu8wmyWRTHTb37xM6%2FmexPPWQkMEa7InJsToeABRB%2FtwLQ6C3VCKqPCdwNx8JpekT0OqU7Zdew7xeB8LCaFlxyQ3R0te%2F2gfulwAJXGOt%2B9Af%2FppExlqZgvQJCEubxcq6ptA%2Bo9JFgZgIdC4VRdb818ETXW%2BKZv%2B9zRTNOHeomCLOUTNEyINchlvUca5Al%2F7p%2FOQbAFZQTH4eh6DanhJHxRHEq8b2Z7AeMdTIGM5yv0h6bEsGIghhIgSpB1v%2Fy2S%2FvP4mlnhb3l5rAB%2FQ3A6rXWCGo8kslm7qKKhXYbzSYOM8gY8E4hX29XtMF%2Fda3SN6hBex4S08CiMj7SimK6%2B2LuJFKSiO1YiiRlca0Zhs3rHIJzJNyDKGmzFla2MHqeJGn%2FuwAF6z1UDCKtak5JE7Fy17dUs5%2FOLT5my91wCyBEuplUCF2%2B6cmn2dGsBUiSEM9CByukoEx824rMKDFu8MGOqUBMSOrpWBC9vtQ4gf3ojH7CwJR47RX9%2BSWf8tv0k%2FuD9iuCdVHMM0unmOAWTM7i0vFdaGnKNdWToVY9dFDKO2d9L8Y8jKULCTmrpKdKeN2B1%2FRAbtgZDjMPxhgLEHrygijvZP5scQZKPP4XXmZ6xv7VfTAufB%2FzVDneVap4u08EMXBs5OdluwoDvlniNnk5tPFegZy0VU6%2BbDw%2FTtm%2FzWMGpw%2FKcJ4&X-Amz-Signature=8b227851b81233c89f6793993ec1792639cd31d7343af7881d0f9b26e8827905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOKBINX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUvcY4y3sGKb2I39mBU83zgxpw8T%2FHOf9hxd5Hj05zqAiEAlhSvBRshbTuSg11SR%2FzxaquHO8YkWAAJ2ZzcKYiUObAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEw%2FxGZ5t4Zp%2Fr3ircA42aPgYmDl0mTxSpbqXDRLGywKkkTGAfrG7wNpC1nbOSlJ4xUVumqdJKtC8xLm6PW9q0YgO0QoDpehUeIa2QJN3AIepR7oX6p7bnjCbTI9kVb9Yt3CaGH22SKka0nF%2B6PTit%2Bjr%2B9YgsCdzS%2FKw8f%2FHYSEkwAKCCPGufFwhFR1H05UPu8wmyWRTHTb37xM6%2FmexPPWQkMEa7InJsToeABRB%2FtwLQ6C3VCKqPCdwNx8JpekT0OqU7Zdew7xeB8LCaFlxyQ3R0te%2F2gfulwAJXGOt%2B9Af%2FppExlqZgvQJCEubxcq6ptA%2Bo9JFgZgIdC4VRdb818ETXW%2BKZv%2B9zRTNOHeomCLOUTNEyINchlvUca5Al%2F7p%2FOQbAFZQTH4eh6DanhJHxRHEq8b2Z7AeMdTIGM5yv0h6bEsGIghhIgSpB1v%2Fy2S%2FvP4mlnhb3l5rAB%2FQ3A6rXWCGo8kslm7qKKhXYbzSYOM8gY8E4hX29XtMF%2Fda3SN6hBex4S08CiMj7SimK6%2B2LuJFKSiO1YiiRlca0Zhs3rHIJzJNyDKGmzFla2MHqeJGn%2FuwAF6z1UDCKtak5JE7Fy17dUs5%2FOLT5my91wCyBEuplUCF2%2B6cmn2dGsBUiSEM9CByukoEx824rMKDFu8MGOqUBMSOrpWBC9vtQ4gf3ojH7CwJR47RX9%2BSWf8tv0k%2FuD9iuCdVHMM0unmOAWTM7i0vFdaGnKNdWToVY9dFDKO2d9L8Y8jKULCTmrpKdKeN2B1%2FRAbtgZDjMPxhgLEHrygijvZP5scQZKPP4XXmZ6xv7VfTAufB%2FzVDneVap4u08EMXBs5OdluwoDvlniNnk5tPFegZy0VU6%2BbDw%2FTtm%2FzWMGpw%2FKcJ4&X-Amz-Signature=b10155f94af2a93af8f9fdd320c59f86fe2cb33de58d4f1cf90f6ce715d275fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOKBINX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUvcY4y3sGKb2I39mBU83zgxpw8T%2FHOf9hxd5Hj05zqAiEAlhSvBRshbTuSg11SR%2FzxaquHO8YkWAAJ2ZzcKYiUObAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEw%2FxGZ5t4Zp%2Fr3ircA42aPgYmDl0mTxSpbqXDRLGywKkkTGAfrG7wNpC1nbOSlJ4xUVumqdJKtC8xLm6PW9q0YgO0QoDpehUeIa2QJN3AIepR7oX6p7bnjCbTI9kVb9Yt3CaGH22SKka0nF%2B6PTit%2Bjr%2B9YgsCdzS%2FKw8f%2FHYSEkwAKCCPGufFwhFR1H05UPu8wmyWRTHTb37xM6%2FmexPPWQkMEa7InJsToeABRB%2FtwLQ6C3VCKqPCdwNx8JpekT0OqU7Zdew7xeB8LCaFlxyQ3R0te%2F2gfulwAJXGOt%2B9Af%2FppExlqZgvQJCEubxcq6ptA%2Bo9JFgZgIdC4VRdb818ETXW%2BKZv%2B9zRTNOHeomCLOUTNEyINchlvUca5Al%2F7p%2FOQbAFZQTH4eh6DanhJHxRHEq8b2Z7AeMdTIGM5yv0h6bEsGIghhIgSpB1v%2Fy2S%2FvP4mlnhb3l5rAB%2FQ3A6rXWCGo8kslm7qKKhXYbzSYOM8gY8E4hX29XtMF%2Fda3SN6hBex4S08CiMj7SimK6%2B2LuJFKSiO1YiiRlca0Zhs3rHIJzJNyDKGmzFla2MHqeJGn%2FuwAF6z1UDCKtak5JE7Fy17dUs5%2FOLT5my91wCyBEuplUCF2%2B6cmn2dGsBUiSEM9CByukoEx824rMKDFu8MGOqUBMSOrpWBC9vtQ4gf3ojH7CwJR47RX9%2BSWf8tv0k%2FuD9iuCdVHMM0unmOAWTM7i0vFdaGnKNdWToVY9dFDKO2d9L8Y8jKULCTmrpKdKeN2B1%2FRAbtgZDjMPxhgLEHrygijvZP5scQZKPP4XXmZ6xv7VfTAufB%2FzVDneVap4u08EMXBs5OdluwoDvlniNnk5tPFegZy0VU6%2BbDw%2FTtm%2FzWMGpw%2FKcJ4&X-Amz-Signature=3270e64031daf1c616b29ea8318c70dc65bf29ba42facd3bc943537d9e948e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOKBINX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUvcY4y3sGKb2I39mBU83zgxpw8T%2FHOf9hxd5Hj05zqAiEAlhSvBRshbTuSg11SR%2FzxaquHO8YkWAAJ2ZzcKYiUObAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEw%2FxGZ5t4Zp%2Fr3ircA42aPgYmDl0mTxSpbqXDRLGywKkkTGAfrG7wNpC1nbOSlJ4xUVumqdJKtC8xLm6PW9q0YgO0QoDpehUeIa2QJN3AIepR7oX6p7bnjCbTI9kVb9Yt3CaGH22SKka0nF%2B6PTit%2Bjr%2B9YgsCdzS%2FKw8f%2FHYSEkwAKCCPGufFwhFR1H05UPu8wmyWRTHTb37xM6%2FmexPPWQkMEa7InJsToeABRB%2FtwLQ6C3VCKqPCdwNx8JpekT0OqU7Zdew7xeB8LCaFlxyQ3R0te%2F2gfulwAJXGOt%2B9Af%2FppExlqZgvQJCEubxcq6ptA%2Bo9JFgZgIdC4VRdb818ETXW%2BKZv%2B9zRTNOHeomCLOUTNEyINchlvUca5Al%2F7p%2FOQbAFZQTH4eh6DanhJHxRHEq8b2Z7AeMdTIGM5yv0h6bEsGIghhIgSpB1v%2Fy2S%2FvP4mlnhb3l5rAB%2FQ3A6rXWCGo8kslm7qKKhXYbzSYOM8gY8E4hX29XtMF%2Fda3SN6hBex4S08CiMj7SimK6%2B2LuJFKSiO1YiiRlca0Zhs3rHIJzJNyDKGmzFla2MHqeJGn%2FuwAF6z1UDCKtak5JE7Fy17dUs5%2FOLT5my91wCyBEuplUCF2%2B6cmn2dGsBUiSEM9CByukoEx824rMKDFu8MGOqUBMSOrpWBC9vtQ4gf3ojH7CwJR47RX9%2BSWf8tv0k%2FuD9iuCdVHMM0unmOAWTM7i0vFdaGnKNdWToVY9dFDKO2d9L8Y8jKULCTmrpKdKeN2B1%2FRAbtgZDjMPxhgLEHrygijvZP5scQZKPP4XXmZ6xv7VfTAufB%2FzVDneVap4u08EMXBs5OdluwoDvlniNnk5tPFegZy0VU6%2BbDw%2FTtm%2FzWMGpw%2FKcJ4&X-Amz-Signature=2c94cb70995edc6d61f9962749a62770e044aaea44c32b1baab564e97d6a57b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOKBINX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUvcY4y3sGKb2I39mBU83zgxpw8T%2FHOf9hxd5Hj05zqAiEAlhSvBRshbTuSg11SR%2FzxaquHO8YkWAAJ2ZzcKYiUObAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEw%2FxGZ5t4Zp%2Fr3ircA42aPgYmDl0mTxSpbqXDRLGywKkkTGAfrG7wNpC1nbOSlJ4xUVumqdJKtC8xLm6PW9q0YgO0QoDpehUeIa2QJN3AIepR7oX6p7bnjCbTI9kVb9Yt3CaGH22SKka0nF%2B6PTit%2Bjr%2B9YgsCdzS%2FKw8f%2FHYSEkwAKCCPGufFwhFR1H05UPu8wmyWRTHTb37xM6%2FmexPPWQkMEa7InJsToeABRB%2FtwLQ6C3VCKqPCdwNx8JpekT0OqU7Zdew7xeB8LCaFlxyQ3R0te%2F2gfulwAJXGOt%2B9Af%2FppExlqZgvQJCEubxcq6ptA%2Bo9JFgZgIdC4VRdb818ETXW%2BKZv%2B9zRTNOHeomCLOUTNEyINchlvUca5Al%2F7p%2FOQbAFZQTH4eh6DanhJHxRHEq8b2Z7AeMdTIGM5yv0h6bEsGIghhIgSpB1v%2Fy2S%2FvP4mlnhb3l5rAB%2FQ3A6rXWCGo8kslm7qKKhXYbzSYOM8gY8E4hX29XtMF%2Fda3SN6hBex4S08CiMj7SimK6%2B2LuJFKSiO1YiiRlca0Zhs3rHIJzJNyDKGmzFla2MHqeJGn%2FuwAF6z1UDCKtak5JE7Fy17dUs5%2FOLT5my91wCyBEuplUCF2%2B6cmn2dGsBUiSEM9CByukoEx824rMKDFu8MGOqUBMSOrpWBC9vtQ4gf3ojH7CwJR47RX9%2BSWf8tv0k%2FuD9iuCdVHMM0unmOAWTM7i0vFdaGnKNdWToVY9dFDKO2d9L8Y8jKULCTmrpKdKeN2B1%2FRAbtgZDjMPxhgLEHrygijvZP5scQZKPP4XXmZ6xv7VfTAufB%2FzVDneVap4u08EMXBs5OdluwoDvlniNnk5tPFegZy0VU6%2BbDw%2FTtm%2FzWMGpw%2FKcJ4&X-Amz-Signature=c64bbc2a195a35d9a960c9a100d18c4a56757b4fdfdf87cff4ee1c5c7fc226d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOKBINX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUvcY4y3sGKb2I39mBU83zgxpw8T%2FHOf9hxd5Hj05zqAiEAlhSvBRshbTuSg11SR%2FzxaquHO8YkWAAJ2ZzcKYiUObAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlEw%2FxGZ5t4Zp%2Fr3ircA42aPgYmDl0mTxSpbqXDRLGywKkkTGAfrG7wNpC1nbOSlJ4xUVumqdJKtC8xLm6PW9q0YgO0QoDpehUeIa2QJN3AIepR7oX6p7bnjCbTI9kVb9Yt3CaGH22SKka0nF%2B6PTit%2Bjr%2B9YgsCdzS%2FKw8f%2FHYSEkwAKCCPGufFwhFR1H05UPu8wmyWRTHTb37xM6%2FmexPPWQkMEa7InJsToeABRB%2FtwLQ6C3VCKqPCdwNx8JpekT0OqU7Zdew7xeB8LCaFlxyQ3R0te%2F2gfulwAJXGOt%2B9Af%2FppExlqZgvQJCEubxcq6ptA%2Bo9JFgZgIdC4VRdb818ETXW%2BKZv%2B9zRTNOHeomCLOUTNEyINchlvUca5Al%2F7p%2FOQbAFZQTH4eh6DanhJHxRHEq8b2Z7AeMdTIGM5yv0h6bEsGIghhIgSpB1v%2Fy2S%2FvP4mlnhb3l5rAB%2FQ3A6rXWCGo8kslm7qKKhXYbzSYOM8gY8E4hX29XtMF%2Fda3SN6hBex4S08CiMj7SimK6%2B2LuJFKSiO1YiiRlca0Zhs3rHIJzJNyDKGmzFla2MHqeJGn%2FuwAF6z1UDCKtak5JE7Fy17dUs5%2FOLT5my91wCyBEuplUCF2%2B6cmn2dGsBUiSEM9CByukoEx824rMKDFu8MGOqUBMSOrpWBC9vtQ4gf3ojH7CwJR47RX9%2BSWf8tv0k%2FuD9iuCdVHMM0unmOAWTM7i0vFdaGnKNdWToVY9dFDKO2d9L8Y8jKULCTmrpKdKeN2B1%2FRAbtgZDjMPxhgLEHrygijvZP5scQZKPP4XXmZ6xv7VfTAufB%2FzVDneVap4u08EMXBs5OdluwoDvlniNnk5tPFegZy0VU6%2BbDw%2FTtm%2FzWMGpw%2FKcJ4&X-Amz-Signature=e8f5edb253a9aceabf5ddb0ae8b87ec86859224e016545c49c94ea1c8b487c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
