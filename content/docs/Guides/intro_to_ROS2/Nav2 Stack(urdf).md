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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KHN7U5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvL2qlejVAJgY0Zkil3cdUToxUsdIvvvki9vitetBmwwIgOKhTYodImhCdjRESAau2HeeJNPaIgc8uJ6veM84phDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN6CodHVjz1jpYx49ircA%2B6lwGnV6TgEgy692D7ixekh3QlSnEq3MErGyDDcwS2nNoL0M8oCt%2FoVT1YxX0oaloeWhnwuUFM8U%2BY5lRxJoaLr9BDzi21ejHZZnrav24T%2B8GbcLyXnlhinYWLH%2ByG87ZcdhMiv%2BPunI10BovyKphxF70xmUzbMXBThxiBZYQgAUgMgnfsBs1iImG7blC7nmrq4KxmhaEC3pPAspeCjbEYQyrD8zu%2BbbJBUy%2Bj0zOteo2pnCS4YhTJleAdhskgymNC6LWdI3kmZeBOwoSmM7V957m24ZAm9nV%2FVFwNOc6oXEbgQiCg9KEHQItMTlakXYi2B8dS3pUNxUTbymd5WOB6snKwzN4IcAOB2GFpsaTMUWv%2FvTG1I2r0xQLBhePzn%2B2A5iRmfBIP3JYp3j2DFLCZtc3lQ4%2Bh1YItg3hxfjmdVZG7THcNNJV3VFt8wpC2%2B4uRHJzo8EU0YiMnubQsPfz7sgzQPqHIcVZQtl2j9RpjvDSTZRyGPQ4jIauB8s%2FlhUScLXSJOfdsnAfRpHAkBs0eyUW6g4qSWnhVHidXSR4F5HjsJm0ImYBLvlOTOScelyft3Al79dqxdAEjtnhOq7G5crT2zhtpiXM3ud5%2BQylMF16ZPW6N1q6VATSasMPS4ysEGOqUBCjaZ7jjKDGS6NdX43TryDMe%2Bt7VJ9GXnb2RblDre26iRPaRq%2FNMaiaFM6nsdK7Ei6Ja1xbQBCcZLi62xTK3Us1lQlSoLncnaKqSf0EyVCd7JSzR7oeFq7S%2B8sq%2FP6wMXhOGIY27UZl6q2IphBPyHI%2FAen0GLPKeftUZ5RXeu83ucTIN3CEwtQJifXKDbD0oz%2Bl36eLKMsyMDz28jKLvJe2pMlSCj&X-Amz-Signature=4411f6bebab138ad7edd94cec2caa3116c9d0877529532cd6ffc50f1749371d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KHN7U5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvL2qlejVAJgY0Zkil3cdUToxUsdIvvvki9vitetBmwwIgOKhTYodImhCdjRESAau2HeeJNPaIgc8uJ6veM84phDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN6CodHVjz1jpYx49ircA%2B6lwGnV6TgEgy692D7ixekh3QlSnEq3MErGyDDcwS2nNoL0M8oCt%2FoVT1YxX0oaloeWhnwuUFM8U%2BY5lRxJoaLr9BDzi21ejHZZnrav24T%2B8GbcLyXnlhinYWLH%2ByG87ZcdhMiv%2BPunI10BovyKphxF70xmUzbMXBThxiBZYQgAUgMgnfsBs1iImG7blC7nmrq4KxmhaEC3pPAspeCjbEYQyrD8zu%2BbbJBUy%2Bj0zOteo2pnCS4YhTJleAdhskgymNC6LWdI3kmZeBOwoSmM7V957m24ZAm9nV%2FVFwNOc6oXEbgQiCg9KEHQItMTlakXYi2B8dS3pUNxUTbymd5WOB6snKwzN4IcAOB2GFpsaTMUWv%2FvTG1I2r0xQLBhePzn%2B2A5iRmfBIP3JYp3j2DFLCZtc3lQ4%2Bh1YItg3hxfjmdVZG7THcNNJV3VFt8wpC2%2B4uRHJzo8EU0YiMnubQsPfz7sgzQPqHIcVZQtl2j9RpjvDSTZRyGPQ4jIauB8s%2FlhUScLXSJOfdsnAfRpHAkBs0eyUW6g4qSWnhVHidXSR4F5HjsJm0ImYBLvlOTOScelyft3Al79dqxdAEjtnhOq7G5crT2zhtpiXM3ud5%2BQylMF16ZPW6N1q6VATSasMPS4ysEGOqUBCjaZ7jjKDGS6NdX43TryDMe%2Bt7VJ9GXnb2RblDre26iRPaRq%2FNMaiaFM6nsdK7Ei6Ja1xbQBCcZLi62xTK3Us1lQlSoLncnaKqSf0EyVCd7JSzR7oeFq7S%2B8sq%2FP6wMXhOGIY27UZl6q2IphBPyHI%2FAen0GLPKeftUZ5RXeu83ucTIN3CEwtQJifXKDbD0oz%2Bl36eLKMsyMDz28jKLvJe2pMlSCj&X-Amz-Signature=514a5b0524dc32b306dfecb426341fd047fef0689d7dd437dfe6b2006658731a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KHN7U5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvL2qlejVAJgY0Zkil3cdUToxUsdIvvvki9vitetBmwwIgOKhTYodImhCdjRESAau2HeeJNPaIgc8uJ6veM84phDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN6CodHVjz1jpYx49ircA%2B6lwGnV6TgEgy692D7ixekh3QlSnEq3MErGyDDcwS2nNoL0M8oCt%2FoVT1YxX0oaloeWhnwuUFM8U%2BY5lRxJoaLr9BDzi21ejHZZnrav24T%2B8GbcLyXnlhinYWLH%2ByG87ZcdhMiv%2BPunI10BovyKphxF70xmUzbMXBThxiBZYQgAUgMgnfsBs1iImG7blC7nmrq4KxmhaEC3pPAspeCjbEYQyrD8zu%2BbbJBUy%2Bj0zOteo2pnCS4YhTJleAdhskgymNC6LWdI3kmZeBOwoSmM7V957m24ZAm9nV%2FVFwNOc6oXEbgQiCg9KEHQItMTlakXYi2B8dS3pUNxUTbymd5WOB6snKwzN4IcAOB2GFpsaTMUWv%2FvTG1I2r0xQLBhePzn%2B2A5iRmfBIP3JYp3j2DFLCZtc3lQ4%2Bh1YItg3hxfjmdVZG7THcNNJV3VFt8wpC2%2B4uRHJzo8EU0YiMnubQsPfz7sgzQPqHIcVZQtl2j9RpjvDSTZRyGPQ4jIauB8s%2FlhUScLXSJOfdsnAfRpHAkBs0eyUW6g4qSWnhVHidXSR4F5HjsJm0ImYBLvlOTOScelyft3Al79dqxdAEjtnhOq7G5crT2zhtpiXM3ud5%2BQylMF16ZPW6N1q6VATSasMPS4ysEGOqUBCjaZ7jjKDGS6NdX43TryDMe%2Bt7VJ9GXnb2RblDre26iRPaRq%2FNMaiaFM6nsdK7Ei6Ja1xbQBCcZLi62xTK3Us1lQlSoLncnaKqSf0EyVCd7JSzR7oeFq7S%2B8sq%2FP6wMXhOGIY27UZl6q2IphBPyHI%2FAen0GLPKeftUZ5RXeu83ucTIN3CEwtQJifXKDbD0oz%2Bl36eLKMsyMDz28jKLvJe2pMlSCj&X-Amz-Signature=fde9381f7827673b4190d5787aaaf8f1f465332c268b1ff9ac4b263fd7f341e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KHN7U5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvL2qlejVAJgY0Zkil3cdUToxUsdIvvvki9vitetBmwwIgOKhTYodImhCdjRESAau2HeeJNPaIgc8uJ6veM84phDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN6CodHVjz1jpYx49ircA%2B6lwGnV6TgEgy692D7ixekh3QlSnEq3MErGyDDcwS2nNoL0M8oCt%2FoVT1YxX0oaloeWhnwuUFM8U%2BY5lRxJoaLr9BDzi21ejHZZnrav24T%2B8GbcLyXnlhinYWLH%2ByG87ZcdhMiv%2BPunI10BovyKphxF70xmUzbMXBThxiBZYQgAUgMgnfsBs1iImG7blC7nmrq4KxmhaEC3pPAspeCjbEYQyrD8zu%2BbbJBUy%2Bj0zOteo2pnCS4YhTJleAdhskgymNC6LWdI3kmZeBOwoSmM7V957m24ZAm9nV%2FVFwNOc6oXEbgQiCg9KEHQItMTlakXYi2B8dS3pUNxUTbymd5WOB6snKwzN4IcAOB2GFpsaTMUWv%2FvTG1I2r0xQLBhePzn%2B2A5iRmfBIP3JYp3j2DFLCZtc3lQ4%2Bh1YItg3hxfjmdVZG7THcNNJV3VFt8wpC2%2B4uRHJzo8EU0YiMnubQsPfz7sgzQPqHIcVZQtl2j9RpjvDSTZRyGPQ4jIauB8s%2FlhUScLXSJOfdsnAfRpHAkBs0eyUW6g4qSWnhVHidXSR4F5HjsJm0ImYBLvlOTOScelyft3Al79dqxdAEjtnhOq7G5crT2zhtpiXM3ud5%2BQylMF16ZPW6N1q6VATSasMPS4ysEGOqUBCjaZ7jjKDGS6NdX43TryDMe%2Bt7VJ9GXnb2RblDre26iRPaRq%2FNMaiaFM6nsdK7Ei6Ja1xbQBCcZLi62xTK3Us1lQlSoLncnaKqSf0EyVCd7JSzR7oeFq7S%2B8sq%2FP6wMXhOGIY27UZl6q2IphBPyHI%2FAen0GLPKeftUZ5RXeu83ucTIN3CEwtQJifXKDbD0oz%2Bl36eLKMsyMDz28jKLvJe2pMlSCj&X-Amz-Signature=e180172a1d51c2da4ee765985876860304383912999ef3c64f1526cc5f3019df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KHN7U5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvL2qlejVAJgY0Zkil3cdUToxUsdIvvvki9vitetBmwwIgOKhTYodImhCdjRESAau2HeeJNPaIgc8uJ6veM84phDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN6CodHVjz1jpYx49ircA%2B6lwGnV6TgEgy692D7ixekh3QlSnEq3MErGyDDcwS2nNoL0M8oCt%2FoVT1YxX0oaloeWhnwuUFM8U%2BY5lRxJoaLr9BDzi21ejHZZnrav24T%2B8GbcLyXnlhinYWLH%2ByG87ZcdhMiv%2BPunI10BovyKphxF70xmUzbMXBThxiBZYQgAUgMgnfsBs1iImG7blC7nmrq4KxmhaEC3pPAspeCjbEYQyrD8zu%2BbbJBUy%2Bj0zOteo2pnCS4YhTJleAdhskgymNC6LWdI3kmZeBOwoSmM7V957m24ZAm9nV%2FVFwNOc6oXEbgQiCg9KEHQItMTlakXYi2B8dS3pUNxUTbymd5WOB6snKwzN4IcAOB2GFpsaTMUWv%2FvTG1I2r0xQLBhePzn%2B2A5iRmfBIP3JYp3j2DFLCZtc3lQ4%2Bh1YItg3hxfjmdVZG7THcNNJV3VFt8wpC2%2B4uRHJzo8EU0YiMnubQsPfz7sgzQPqHIcVZQtl2j9RpjvDSTZRyGPQ4jIauB8s%2FlhUScLXSJOfdsnAfRpHAkBs0eyUW6g4qSWnhVHidXSR4F5HjsJm0ImYBLvlOTOScelyft3Al79dqxdAEjtnhOq7G5crT2zhtpiXM3ud5%2BQylMF16ZPW6N1q6VATSasMPS4ysEGOqUBCjaZ7jjKDGS6NdX43TryDMe%2Bt7VJ9GXnb2RblDre26iRPaRq%2FNMaiaFM6nsdK7Ei6Ja1xbQBCcZLi62xTK3Us1lQlSoLncnaKqSf0EyVCd7JSzR7oeFq7S%2B8sq%2FP6wMXhOGIY27UZl6q2IphBPyHI%2FAen0GLPKeftUZ5RXeu83ucTIN3CEwtQJifXKDbD0oz%2Bl36eLKMsyMDz28jKLvJe2pMlSCj&X-Amz-Signature=51e1476c463ea23ed0c58904b40d8192134101dd4a9e4b3ce0a8c8b8d90bbde3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KHN7U5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCvL2qlejVAJgY0Zkil3cdUToxUsdIvvvki9vitetBmwwIgOKhTYodImhCdjRESAau2HeeJNPaIgc8uJ6veM84phDUq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN6CodHVjz1jpYx49ircA%2B6lwGnV6TgEgy692D7ixekh3QlSnEq3MErGyDDcwS2nNoL0M8oCt%2FoVT1YxX0oaloeWhnwuUFM8U%2BY5lRxJoaLr9BDzi21ejHZZnrav24T%2B8GbcLyXnlhinYWLH%2ByG87ZcdhMiv%2BPunI10BovyKphxF70xmUzbMXBThxiBZYQgAUgMgnfsBs1iImG7blC7nmrq4KxmhaEC3pPAspeCjbEYQyrD8zu%2BbbJBUy%2Bj0zOteo2pnCS4YhTJleAdhskgymNC6LWdI3kmZeBOwoSmM7V957m24ZAm9nV%2FVFwNOc6oXEbgQiCg9KEHQItMTlakXYi2B8dS3pUNxUTbymd5WOB6snKwzN4IcAOB2GFpsaTMUWv%2FvTG1I2r0xQLBhePzn%2B2A5iRmfBIP3JYp3j2DFLCZtc3lQ4%2Bh1YItg3hxfjmdVZG7THcNNJV3VFt8wpC2%2B4uRHJzo8EU0YiMnubQsPfz7sgzQPqHIcVZQtl2j9RpjvDSTZRyGPQ4jIauB8s%2FlhUScLXSJOfdsnAfRpHAkBs0eyUW6g4qSWnhVHidXSR4F5HjsJm0ImYBLvlOTOScelyft3Al79dqxdAEjtnhOq7G5crT2zhtpiXM3ud5%2BQylMF16ZPW6N1q6VATSasMPS4ysEGOqUBCjaZ7jjKDGS6NdX43TryDMe%2Bt7VJ9GXnb2RblDre26iRPaRq%2FNMaiaFM6nsdK7Ei6Ja1xbQBCcZLi62xTK3Us1lQlSoLncnaKqSf0EyVCd7JSzR7oeFq7S%2B8sq%2FP6wMXhOGIY27UZl6q2IphBPyHI%2FAen0GLPKeftUZ5RXeu83ucTIN3CEwtQJifXKDbD0oz%2Bl36eLKMsyMDz28jKLvJe2pMlSCj&X-Amz-Signature=b14e7358250c8d6855c03ae6d194163e8bd229e0f1d192670331f6d7fee8305c&X-Amz-SignedHeaders=host&x-id=GetObject)
