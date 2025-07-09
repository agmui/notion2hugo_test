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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTZXJ2X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSAWGmh8SWBb2SVJDuKeJF%2B8y0IcxHTrlmACMo9zJmwIgTkkxS4Vla%2FrtWrEO1FsjC9FLY5iLg32YmoPb3AMUVKUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmkBEl6Li7W1jcyVCrcA03DZENxZogVaSWpOn3pW5Yl6MZp3t3wrk2obLiIPaDoInh8Gh9j%2B6qncmJq8nU%2FjCYVXDmetrVRD3M8a1vkMmIfvHY%2BefEdCuQpetDeeny85HKEgcEMTrRFcSGB2osI8TRx4%2FFevYDn5Io0XiOzXbur9pGQzK8R%2BMqijK%2BcwY9icKGVkh%2FftclSuODPhLFCn185bHuruL1ehTmmAWnteUBiWC%2FBKODsXdJHKKkql8MqPjQJbtDaiU%2BwD4C8QlWfTbQdF%2BU4j6yav9Vm%2B5zhxrdWP%2B61FLyWmtHsZIO6mHSBUfYpci6qD91005%2BduvwZRsmi5OJcar%2F9sZtuSSZVWjlPgmN531wAbrHg2btLpvikFpnzLtjOdqMt%2Fi4yKsuFhrkPKuYyLIrOqbLL8ZTcGXICK7Dj3AOL7dTQf63WAXFec7Jsksl80cJnhk2xX%2FXj83b95uJSyysCzfzUA6BOiqedapd7BOslRQ5koN4oThXHXn2ZUeqek%2F1WnGhX3KhxQwmojNyFcRJkAIl8pbsWmvsIOLTsHIYNIPYuDlybYo19r26lEfW1Q3wYuRihn4BkpgkOIR0Q8LXP6PNm%2FgbtaJNJyFlA3KO%2FzayKy72lEcjzTzPSwfF55yozmicTMPTKt8MGOqUB75FrEHA4icnDROhhSmljZ6Pot25UX5uaS4l59xZHWJEISPVFxilv1EE%2FJfUzwnasf7g930K7Mrs5AlhYx8qZPJxcgTMaT4JoJ1lNM15C8vX3S7GOEThWM1RXzT8jzn7%2FC1AEiFxx52YFsDe5aHW5VwZaBETdPBQyKorDtve%2F1%2Fb%2Bkte3vqCE5NFSJKVF8uM%2Bf0%2BM02VEbwFT4GraWBrH51WxaoCg&X-Amz-Signature=85a1a7975cc0b344690815f441e278c3c5fddd85c05b405378b4f34037b06212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTZXJ2X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSAWGmh8SWBb2SVJDuKeJF%2B8y0IcxHTrlmACMo9zJmwIgTkkxS4Vla%2FrtWrEO1FsjC9FLY5iLg32YmoPb3AMUVKUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmkBEl6Li7W1jcyVCrcA03DZENxZogVaSWpOn3pW5Yl6MZp3t3wrk2obLiIPaDoInh8Gh9j%2B6qncmJq8nU%2FjCYVXDmetrVRD3M8a1vkMmIfvHY%2BefEdCuQpetDeeny85HKEgcEMTrRFcSGB2osI8TRx4%2FFevYDn5Io0XiOzXbur9pGQzK8R%2BMqijK%2BcwY9icKGVkh%2FftclSuODPhLFCn185bHuruL1ehTmmAWnteUBiWC%2FBKODsXdJHKKkql8MqPjQJbtDaiU%2BwD4C8QlWfTbQdF%2BU4j6yav9Vm%2B5zhxrdWP%2B61FLyWmtHsZIO6mHSBUfYpci6qD91005%2BduvwZRsmi5OJcar%2F9sZtuSSZVWjlPgmN531wAbrHg2btLpvikFpnzLtjOdqMt%2Fi4yKsuFhrkPKuYyLIrOqbLL8ZTcGXICK7Dj3AOL7dTQf63WAXFec7Jsksl80cJnhk2xX%2FXj83b95uJSyysCzfzUA6BOiqedapd7BOslRQ5koN4oThXHXn2ZUeqek%2F1WnGhX3KhxQwmojNyFcRJkAIl8pbsWmvsIOLTsHIYNIPYuDlybYo19r26lEfW1Q3wYuRihn4BkpgkOIR0Q8LXP6PNm%2FgbtaJNJyFlA3KO%2FzayKy72lEcjzTzPSwfF55yozmicTMPTKt8MGOqUB75FrEHA4icnDROhhSmljZ6Pot25UX5uaS4l59xZHWJEISPVFxilv1EE%2FJfUzwnasf7g930K7Mrs5AlhYx8qZPJxcgTMaT4JoJ1lNM15C8vX3S7GOEThWM1RXzT8jzn7%2FC1AEiFxx52YFsDe5aHW5VwZaBETdPBQyKorDtve%2F1%2Fb%2Bkte3vqCE5NFSJKVF8uM%2Bf0%2BM02VEbwFT4GraWBrH51WxaoCg&X-Amz-Signature=b0d4690dd4e7b5a0eaa127498a2b90657fe124eed010831a008ae631a86f9d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTZXJ2X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSAWGmh8SWBb2SVJDuKeJF%2B8y0IcxHTrlmACMo9zJmwIgTkkxS4Vla%2FrtWrEO1FsjC9FLY5iLg32YmoPb3AMUVKUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmkBEl6Li7W1jcyVCrcA03DZENxZogVaSWpOn3pW5Yl6MZp3t3wrk2obLiIPaDoInh8Gh9j%2B6qncmJq8nU%2FjCYVXDmetrVRD3M8a1vkMmIfvHY%2BefEdCuQpetDeeny85HKEgcEMTrRFcSGB2osI8TRx4%2FFevYDn5Io0XiOzXbur9pGQzK8R%2BMqijK%2BcwY9icKGVkh%2FftclSuODPhLFCn185bHuruL1ehTmmAWnteUBiWC%2FBKODsXdJHKKkql8MqPjQJbtDaiU%2BwD4C8QlWfTbQdF%2BU4j6yav9Vm%2B5zhxrdWP%2B61FLyWmtHsZIO6mHSBUfYpci6qD91005%2BduvwZRsmi5OJcar%2F9sZtuSSZVWjlPgmN531wAbrHg2btLpvikFpnzLtjOdqMt%2Fi4yKsuFhrkPKuYyLIrOqbLL8ZTcGXICK7Dj3AOL7dTQf63WAXFec7Jsksl80cJnhk2xX%2FXj83b95uJSyysCzfzUA6BOiqedapd7BOslRQ5koN4oThXHXn2ZUeqek%2F1WnGhX3KhxQwmojNyFcRJkAIl8pbsWmvsIOLTsHIYNIPYuDlybYo19r26lEfW1Q3wYuRihn4BkpgkOIR0Q8LXP6PNm%2FgbtaJNJyFlA3KO%2FzayKy72lEcjzTzPSwfF55yozmicTMPTKt8MGOqUB75FrEHA4icnDROhhSmljZ6Pot25UX5uaS4l59xZHWJEISPVFxilv1EE%2FJfUzwnasf7g930K7Mrs5AlhYx8qZPJxcgTMaT4JoJ1lNM15C8vX3S7GOEThWM1RXzT8jzn7%2FC1AEiFxx52YFsDe5aHW5VwZaBETdPBQyKorDtve%2F1%2Fb%2Bkte3vqCE5NFSJKVF8uM%2Bf0%2BM02VEbwFT4GraWBrH51WxaoCg&X-Amz-Signature=c1452f364c1c8a5a621146d53882deb83e8c4592e30af9b06288a8e20a88717b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTZXJ2X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSAWGmh8SWBb2SVJDuKeJF%2B8y0IcxHTrlmACMo9zJmwIgTkkxS4Vla%2FrtWrEO1FsjC9FLY5iLg32YmoPb3AMUVKUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmkBEl6Li7W1jcyVCrcA03DZENxZogVaSWpOn3pW5Yl6MZp3t3wrk2obLiIPaDoInh8Gh9j%2B6qncmJq8nU%2FjCYVXDmetrVRD3M8a1vkMmIfvHY%2BefEdCuQpetDeeny85HKEgcEMTrRFcSGB2osI8TRx4%2FFevYDn5Io0XiOzXbur9pGQzK8R%2BMqijK%2BcwY9icKGVkh%2FftclSuODPhLFCn185bHuruL1ehTmmAWnteUBiWC%2FBKODsXdJHKKkql8MqPjQJbtDaiU%2BwD4C8QlWfTbQdF%2BU4j6yav9Vm%2B5zhxrdWP%2B61FLyWmtHsZIO6mHSBUfYpci6qD91005%2BduvwZRsmi5OJcar%2F9sZtuSSZVWjlPgmN531wAbrHg2btLpvikFpnzLtjOdqMt%2Fi4yKsuFhrkPKuYyLIrOqbLL8ZTcGXICK7Dj3AOL7dTQf63WAXFec7Jsksl80cJnhk2xX%2FXj83b95uJSyysCzfzUA6BOiqedapd7BOslRQ5koN4oThXHXn2ZUeqek%2F1WnGhX3KhxQwmojNyFcRJkAIl8pbsWmvsIOLTsHIYNIPYuDlybYo19r26lEfW1Q3wYuRihn4BkpgkOIR0Q8LXP6PNm%2FgbtaJNJyFlA3KO%2FzayKy72lEcjzTzPSwfF55yozmicTMPTKt8MGOqUB75FrEHA4icnDROhhSmljZ6Pot25UX5uaS4l59xZHWJEISPVFxilv1EE%2FJfUzwnasf7g930K7Mrs5AlhYx8qZPJxcgTMaT4JoJ1lNM15C8vX3S7GOEThWM1RXzT8jzn7%2FC1AEiFxx52YFsDe5aHW5VwZaBETdPBQyKorDtve%2F1%2Fb%2Bkte3vqCE5NFSJKVF8uM%2Bf0%2BM02VEbwFT4GraWBrH51WxaoCg&X-Amz-Signature=e42228ef1684901583b702842d16576548ef11a95048d3e5f50f939bc2049c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTZXJ2X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSAWGmh8SWBb2SVJDuKeJF%2B8y0IcxHTrlmACMo9zJmwIgTkkxS4Vla%2FrtWrEO1FsjC9FLY5iLg32YmoPb3AMUVKUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmkBEl6Li7W1jcyVCrcA03DZENxZogVaSWpOn3pW5Yl6MZp3t3wrk2obLiIPaDoInh8Gh9j%2B6qncmJq8nU%2FjCYVXDmetrVRD3M8a1vkMmIfvHY%2BefEdCuQpetDeeny85HKEgcEMTrRFcSGB2osI8TRx4%2FFevYDn5Io0XiOzXbur9pGQzK8R%2BMqijK%2BcwY9icKGVkh%2FftclSuODPhLFCn185bHuruL1ehTmmAWnteUBiWC%2FBKODsXdJHKKkql8MqPjQJbtDaiU%2BwD4C8QlWfTbQdF%2BU4j6yav9Vm%2B5zhxrdWP%2B61FLyWmtHsZIO6mHSBUfYpci6qD91005%2BduvwZRsmi5OJcar%2F9sZtuSSZVWjlPgmN531wAbrHg2btLpvikFpnzLtjOdqMt%2Fi4yKsuFhrkPKuYyLIrOqbLL8ZTcGXICK7Dj3AOL7dTQf63WAXFec7Jsksl80cJnhk2xX%2FXj83b95uJSyysCzfzUA6BOiqedapd7BOslRQ5koN4oThXHXn2ZUeqek%2F1WnGhX3KhxQwmojNyFcRJkAIl8pbsWmvsIOLTsHIYNIPYuDlybYo19r26lEfW1Q3wYuRihn4BkpgkOIR0Q8LXP6PNm%2FgbtaJNJyFlA3KO%2FzayKy72lEcjzTzPSwfF55yozmicTMPTKt8MGOqUB75FrEHA4icnDROhhSmljZ6Pot25UX5uaS4l59xZHWJEISPVFxilv1EE%2FJfUzwnasf7g930K7Mrs5AlhYx8qZPJxcgTMaT4JoJ1lNM15C8vX3S7GOEThWM1RXzT8jzn7%2FC1AEiFxx52YFsDe5aHW5VwZaBETdPBQyKorDtve%2F1%2Fb%2Bkte3vqCE5NFSJKVF8uM%2Bf0%2BM02VEbwFT4GraWBrH51WxaoCg&X-Amz-Signature=da04069329836ac692fb20100c3914e3831507da1ed1f91b7219f3bc172409d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XTZXJ2X%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzSAWGmh8SWBb2SVJDuKeJF%2B8y0IcxHTrlmACMo9zJmwIgTkkxS4Vla%2FrtWrEO1FsjC9FLY5iLg32YmoPb3AMUVKUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmkBEl6Li7W1jcyVCrcA03DZENxZogVaSWpOn3pW5Yl6MZp3t3wrk2obLiIPaDoInh8Gh9j%2B6qncmJq8nU%2FjCYVXDmetrVRD3M8a1vkMmIfvHY%2BefEdCuQpetDeeny85HKEgcEMTrRFcSGB2osI8TRx4%2FFevYDn5Io0XiOzXbur9pGQzK8R%2BMqijK%2BcwY9icKGVkh%2FftclSuODPhLFCn185bHuruL1ehTmmAWnteUBiWC%2FBKODsXdJHKKkql8MqPjQJbtDaiU%2BwD4C8QlWfTbQdF%2BU4j6yav9Vm%2B5zhxrdWP%2B61FLyWmtHsZIO6mHSBUfYpci6qD91005%2BduvwZRsmi5OJcar%2F9sZtuSSZVWjlPgmN531wAbrHg2btLpvikFpnzLtjOdqMt%2Fi4yKsuFhrkPKuYyLIrOqbLL8ZTcGXICK7Dj3AOL7dTQf63WAXFec7Jsksl80cJnhk2xX%2FXj83b95uJSyysCzfzUA6BOiqedapd7BOslRQ5koN4oThXHXn2ZUeqek%2F1WnGhX3KhxQwmojNyFcRJkAIl8pbsWmvsIOLTsHIYNIPYuDlybYo19r26lEfW1Q3wYuRihn4BkpgkOIR0Q8LXP6PNm%2FgbtaJNJyFlA3KO%2FzayKy72lEcjzTzPSwfF55yozmicTMPTKt8MGOqUB75FrEHA4icnDROhhSmljZ6Pot25UX5uaS4l59xZHWJEISPVFxilv1EE%2FJfUzwnasf7g930K7Mrs5AlhYx8qZPJxcgTMaT4JoJ1lNM15C8vX3S7GOEThWM1RXzT8jzn7%2FC1AEiFxx52YFsDe5aHW5VwZaBETdPBQyKorDtve%2F1%2Fb%2Bkte3vqCE5NFSJKVF8uM%2Bf0%2BM02VEbwFT4GraWBrH51WxaoCg&X-Amz-Signature=439959429dfcce805f47fe1ce62e90ad34e926a3f6a5059eb547caf5a215afa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
