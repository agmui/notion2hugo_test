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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VUDR5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0g98%2BgJLYNrSvzzQdXw2FZ36JWS8VV%2FJqiR4TuWwGeAiA3Nklgq%2BkU2tbCDaEbqYAFJ%2F%2BlpRAQcOq%2BsIXG0zwFPyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDsM45AYXTKdSCbvnKtwD2BT1dynGlC1j6GBgQlEvMkbT%2FVigSNdQ4BxR7igW0xmUwxbKwcd01YDWEmc2Sp7IkRp7soaOdnOsrKflIDhq3MevfLHtKmc%2FBCfp77dUQiCdSkOO12p%2BYrg6RAp7LKWHHMAkAR8wFOBN8bC6h7eCmyNMTFFDREZVn7rkZmB3p3Ng7dRB%2B2od7YyRbA%2BobNki8u2NK%2BKPLi%2FiBbxXkeXtw71UCH6P94uDnPEzR71dfZ1Mu%2BPIIlQmKHMtMhTtWUqMPswMUBm8LHdNmz6%2FqwGXQMZpYQcdOgRkNkGIr0TziQXSlpOY0gMh1YSUjSLKBwfbRjhpJDqYfe%2FnSSphKkhZOn4mWG7dijShgWdSWMQMc49CCTU71LeYpKq%2FQh8Zv2sTVOKQjSJNeWl7FMcFSFjswjGzqVqesSfmbUivi3O6U28D1PcOx9B5reToPuP8sR9NIfdgipHIrr4LC8NrBuKY9pFp7Pe9E3fpD4gOZgVaZFVEdf5Yf3HCn0mg9dmDQimNOH4iFRMQN13bkH7Og%2F9%2B6Ef%2B4AxiZjdjQQ8vKWUONHkKjyhWguUGdmeX0pCl1ztNLSpVJEc21aBO2Ob0%2BkbtctDT5%2B2VczRqu6ZA3F%2BXCtoEOpI0c65KCPfSwGQw36buvQY6pgG879CQXO%2BeH0fQ3q%2B4kQOq1dNyuflLTzhZda%2BxqMf12B7sTn%2BCCq8drKpPYnEkTsKYoS3dIYLMop%2Bg7A4RivhxVQRSZjoVCR2FJwKfJKgKm6%2FwvdsUWZzAcIXajO70o4VuWCG07acMm%2Br3RXcMmaCAPBcSz2AX33Vf6YPT7SAY48Z5mOavrZwQMWzN8g%2FvYQ8IaOwHWdXZ1P154WsPcHC46Ue4AINk&X-Amz-Signature=65dda09cfc021745592e7327fd6408887f35c1f7b38419a7cc2b8445f62ebd48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VUDR5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0g98%2BgJLYNrSvzzQdXw2FZ36JWS8VV%2FJqiR4TuWwGeAiA3Nklgq%2BkU2tbCDaEbqYAFJ%2F%2BlpRAQcOq%2BsIXG0zwFPyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDsM45AYXTKdSCbvnKtwD2BT1dynGlC1j6GBgQlEvMkbT%2FVigSNdQ4BxR7igW0xmUwxbKwcd01YDWEmc2Sp7IkRp7soaOdnOsrKflIDhq3MevfLHtKmc%2FBCfp77dUQiCdSkOO12p%2BYrg6RAp7LKWHHMAkAR8wFOBN8bC6h7eCmyNMTFFDREZVn7rkZmB3p3Ng7dRB%2B2od7YyRbA%2BobNki8u2NK%2BKPLi%2FiBbxXkeXtw71UCH6P94uDnPEzR71dfZ1Mu%2BPIIlQmKHMtMhTtWUqMPswMUBm8LHdNmz6%2FqwGXQMZpYQcdOgRkNkGIr0TziQXSlpOY0gMh1YSUjSLKBwfbRjhpJDqYfe%2FnSSphKkhZOn4mWG7dijShgWdSWMQMc49CCTU71LeYpKq%2FQh8Zv2sTVOKQjSJNeWl7FMcFSFjswjGzqVqesSfmbUivi3O6U28D1PcOx9B5reToPuP8sR9NIfdgipHIrr4LC8NrBuKY9pFp7Pe9E3fpD4gOZgVaZFVEdf5Yf3HCn0mg9dmDQimNOH4iFRMQN13bkH7Og%2F9%2B6Ef%2B4AxiZjdjQQ8vKWUONHkKjyhWguUGdmeX0pCl1ztNLSpVJEc21aBO2Ob0%2BkbtctDT5%2B2VczRqu6ZA3F%2BXCtoEOpI0c65KCPfSwGQw36buvQY6pgG879CQXO%2BeH0fQ3q%2B4kQOq1dNyuflLTzhZda%2BxqMf12B7sTn%2BCCq8drKpPYnEkTsKYoS3dIYLMop%2Bg7A4RivhxVQRSZjoVCR2FJwKfJKgKm6%2FwvdsUWZzAcIXajO70o4VuWCG07acMm%2Br3RXcMmaCAPBcSz2AX33Vf6YPT7SAY48Z5mOavrZwQMWzN8g%2FvYQ8IaOwHWdXZ1P154WsPcHC46Ue4AINk&X-Amz-Signature=db13fcac420a217dec5014d6aa315995c176477354ae1b8b2ca5ce8c004cef6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VUDR5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0g98%2BgJLYNrSvzzQdXw2FZ36JWS8VV%2FJqiR4TuWwGeAiA3Nklgq%2BkU2tbCDaEbqYAFJ%2F%2BlpRAQcOq%2BsIXG0zwFPyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDsM45AYXTKdSCbvnKtwD2BT1dynGlC1j6GBgQlEvMkbT%2FVigSNdQ4BxR7igW0xmUwxbKwcd01YDWEmc2Sp7IkRp7soaOdnOsrKflIDhq3MevfLHtKmc%2FBCfp77dUQiCdSkOO12p%2BYrg6RAp7LKWHHMAkAR8wFOBN8bC6h7eCmyNMTFFDREZVn7rkZmB3p3Ng7dRB%2B2od7YyRbA%2BobNki8u2NK%2BKPLi%2FiBbxXkeXtw71UCH6P94uDnPEzR71dfZ1Mu%2BPIIlQmKHMtMhTtWUqMPswMUBm8LHdNmz6%2FqwGXQMZpYQcdOgRkNkGIr0TziQXSlpOY0gMh1YSUjSLKBwfbRjhpJDqYfe%2FnSSphKkhZOn4mWG7dijShgWdSWMQMc49CCTU71LeYpKq%2FQh8Zv2sTVOKQjSJNeWl7FMcFSFjswjGzqVqesSfmbUivi3O6U28D1PcOx9B5reToPuP8sR9NIfdgipHIrr4LC8NrBuKY9pFp7Pe9E3fpD4gOZgVaZFVEdf5Yf3HCn0mg9dmDQimNOH4iFRMQN13bkH7Og%2F9%2B6Ef%2B4AxiZjdjQQ8vKWUONHkKjyhWguUGdmeX0pCl1ztNLSpVJEc21aBO2Ob0%2BkbtctDT5%2B2VczRqu6ZA3F%2BXCtoEOpI0c65KCPfSwGQw36buvQY6pgG879CQXO%2BeH0fQ3q%2B4kQOq1dNyuflLTzhZda%2BxqMf12B7sTn%2BCCq8drKpPYnEkTsKYoS3dIYLMop%2Bg7A4RivhxVQRSZjoVCR2FJwKfJKgKm6%2FwvdsUWZzAcIXajO70o4VuWCG07acMm%2Br3RXcMmaCAPBcSz2AX33Vf6YPT7SAY48Z5mOavrZwQMWzN8g%2FvYQ8IaOwHWdXZ1P154WsPcHC46Ue4AINk&X-Amz-Signature=449f755414e4a219a6849eb07387b507d9693afe2ce411538df45bde7a0a3ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VUDR5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0g98%2BgJLYNrSvzzQdXw2FZ36JWS8VV%2FJqiR4TuWwGeAiA3Nklgq%2BkU2tbCDaEbqYAFJ%2F%2BlpRAQcOq%2BsIXG0zwFPyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDsM45AYXTKdSCbvnKtwD2BT1dynGlC1j6GBgQlEvMkbT%2FVigSNdQ4BxR7igW0xmUwxbKwcd01YDWEmc2Sp7IkRp7soaOdnOsrKflIDhq3MevfLHtKmc%2FBCfp77dUQiCdSkOO12p%2BYrg6RAp7LKWHHMAkAR8wFOBN8bC6h7eCmyNMTFFDREZVn7rkZmB3p3Ng7dRB%2B2od7YyRbA%2BobNki8u2NK%2BKPLi%2FiBbxXkeXtw71UCH6P94uDnPEzR71dfZ1Mu%2BPIIlQmKHMtMhTtWUqMPswMUBm8LHdNmz6%2FqwGXQMZpYQcdOgRkNkGIr0TziQXSlpOY0gMh1YSUjSLKBwfbRjhpJDqYfe%2FnSSphKkhZOn4mWG7dijShgWdSWMQMc49CCTU71LeYpKq%2FQh8Zv2sTVOKQjSJNeWl7FMcFSFjswjGzqVqesSfmbUivi3O6U28D1PcOx9B5reToPuP8sR9NIfdgipHIrr4LC8NrBuKY9pFp7Pe9E3fpD4gOZgVaZFVEdf5Yf3HCn0mg9dmDQimNOH4iFRMQN13bkH7Og%2F9%2B6Ef%2B4AxiZjdjQQ8vKWUONHkKjyhWguUGdmeX0pCl1ztNLSpVJEc21aBO2Ob0%2BkbtctDT5%2B2VczRqu6ZA3F%2BXCtoEOpI0c65KCPfSwGQw36buvQY6pgG879CQXO%2BeH0fQ3q%2B4kQOq1dNyuflLTzhZda%2BxqMf12B7sTn%2BCCq8drKpPYnEkTsKYoS3dIYLMop%2Bg7A4RivhxVQRSZjoVCR2FJwKfJKgKm6%2FwvdsUWZzAcIXajO70o4VuWCG07acMm%2Br3RXcMmaCAPBcSz2AX33Vf6YPT7SAY48Z5mOavrZwQMWzN8g%2FvYQ8IaOwHWdXZ1P154WsPcHC46Ue4AINk&X-Amz-Signature=e129aafc79eadf143c5d47fc97b10d6030ef0b06580c301c54d655e341e80516&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VUDR5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0g98%2BgJLYNrSvzzQdXw2FZ36JWS8VV%2FJqiR4TuWwGeAiA3Nklgq%2BkU2tbCDaEbqYAFJ%2F%2BlpRAQcOq%2BsIXG0zwFPyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDsM45AYXTKdSCbvnKtwD2BT1dynGlC1j6GBgQlEvMkbT%2FVigSNdQ4BxR7igW0xmUwxbKwcd01YDWEmc2Sp7IkRp7soaOdnOsrKflIDhq3MevfLHtKmc%2FBCfp77dUQiCdSkOO12p%2BYrg6RAp7LKWHHMAkAR8wFOBN8bC6h7eCmyNMTFFDREZVn7rkZmB3p3Ng7dRB%2B2od7YyRbA%2BobNki8u2NK%2BKPLi%2FiBbxXkeXtw71UCH6P94uDnPEzR71dfZ1Mu%2BPIIlQmKHMtMhTtWUqMPswMUBm8LHdNmz6%2FqwGXQMZpYQcdOgRkNkGIr0TziQXSlpOY0gMh1YSUjSLKBwfbRjhpJDqYfe%2FnSSphKkhZOn4mWG7dijShgWdSWMQMc49CCTU71LeYpKq%2FQh8Zv2sTVOKQjSJNeWl7FMcFSFjswjGzqVqesSfmbUivi3O6U28D1PcOx9B5reToPuP8sR9NIfdgipHIrr4LC8NrBuKY9pFp7Pe9E3fpD4gOZgVaZFVEdf5Yf3HCn0mg9dmDQimNOH4iFRMQN13bkH7Og%2F9%2B6Ef%2B4AxiZjdjQQ8vKWUONHkKjyhWguUGdmeX0pCl1ztNLSpVJEc21aBO2Ob0%2BkbtctDT5%2B2VczRqu6ZA3F%2BXCtoEOpI0c65KCPfSwGQw36buvQY6pgG879CQXO%2BeH0fQ3q%2B4kQOq1dNyuflLTzhZda%2BxqMf12B7sTn%2BCCq8drKpPYnEkTsKYoS3dIYLMop%2Bg7A4RivhxVQRSZjoVCR2FJwKfJKgKm6%2FwvdsUWZzAcIXajO70o4VuWCG07acMm%2Br3RXcMmaCAPBcSz2AX33Vf6YPT7SAY48Z5mOavrZwQMWzN8g%2FvYQ8IaOwHWdXZ1P154WsPcHC46Ue4AINk&X-Amz-Signature=da143a998e855981dcd4a8b0df23c4d59a6fd90ee385eddff2a847a49c5aa052&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VUDR5R%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0g98%2BgJLYNrSvzzQdXw2FZ36JWS8VV%2FJqiR4TuWwGeAiA3Nklgq%2BkU2tbCDaEbqYAFJ%2F%2BlpRAQcOq%2BsIXG0zwFPyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMDsM45AYXTKdSCbvnKtwD2BT1dynGlC1j6GBgQlEvMkbT%2FVigSNdQ4BxR7igW0xmUwxbKwcd01YDWEmc2Sp7IkRp7soaOdnOsrKflIDhq3MevfLHtKmc%2FBCfp77dUQiCdSkOO12p%2BYrg6RAp7LKWHHMAkAR8wFOBN8bC6h7eCmyNMTFFDREZVn7rkZmB3p3Ng7dRB%2B2od7YyRbA%2BobNki8u2NK%2BKPLi%2FiBbxXkeXtw71UCH6P94uDnPEzR71dfZ1Mu%2BPIIlQmKHMtMhTtWUqMPswMUBm8LHdNmz6%2FqwGXQMZpYQcdOgRkNkGIr0TziQXSlpOY0gMh1YSUjSLKBwfbRjhpJDqYfe%2FnSSphKkhZOn4mWG7dijShgWdSWMQMc49CCTU71LeYpKq%2FQh8Zv2sTVOKQjSJNeWl7FMcFSFjswjGzqVqesSfmbUivi3O6U28D1PcOx9B5reToPuP8sR9NIfdgipHIrr4LC8NrBuKY9pFp7Pe9E3fpD4gOZgVaZFVEdf5Yf3HCn0mg9dmDQimNOH4iFRMQN13bkH7Og%2F9%2B6Ef%2B4AxiZjdjQQ8vKWUONHkKjyhWguUGdmeX0pCl1ztNLSpVJEc21aBO2Ob0%2BkbtctDT5%2B2VczRqu6ZA3F%2BXCtoEOpI0c65KCPfSwGQw36buvQY6pgG879CQXO%2BeH0fQ3q%2B4kQOq1dNyuflLTzhZda%2BxqMf12B7sTn%2BCCq8drKpPYnEkTsKYoS3dIYLMop%2Bg7A4RivhxVQRSZjoVCR2FJwKfJKgKm6%2FwvdsUWZzAcIXajO70o4VuWCG07acMm%2Br3RXcMmaCAPBcSz2AX33Vf6YPT7SAY48Z5mOavrZwQMWzN8g%2FvYQ8IaOwHWdXZ1P154WsPcHC46Ue4AINk&X-Amz-Signature=cd43e8e6c638ac78fc28bdc76c618f9e58c9dc6244f5bc3b8041bfde4a3723a8&X-Amz-SignedHeaders=host&x-id=GetObject)
