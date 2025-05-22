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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6PZ65B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyrQR1eMbJFBIS7%2FDTIUd4mYXVBb7DZkuUedG2zXCJyAIhALJjx77mUaF2az4pXcFbxrCrXmhrkzN4%2F%2Fkgc%2FBj5fOUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWSYtJdWB0Hi1C0Eq3AOt%2FpXxtFdKI%2B8qgaafoYsxW%2B6pCxPAy0K2tESa7cSlBdqDCKNw%2B4AwJuHwrw53zzdTNXBdYif54cIzkuJ0p0G0PSu2GGlAIuRYibXkH5I4l0fjmEBqSQxcGrQ4iKzJV5G8sXmW8%2BnZyubJxtqiv39m9ySnke5WZKMzXBSRnEfA1gxWmRTaYaudbDiKPstJRvQEq4MTMbrsjzsR8BIUVjRBsSM4aEK%2BBSShgMNZQudUnFr0u8kzd7AZWUxHZfApSKh8YjMccz5FFXy88cNyNFuGqx6cLB%2FTmymF2cQCzOn5gHyCZuG%2FapNV7mpOg4Fx28EW4f%2FIKJWHE%2FDFmKy0LMbMgy8wEMXizyUART3GAYkwRf%2BtXP9BL3SLNPpX2G7tT%2Fq%2FJRB7BvjvmO5nXTzJzkfEYOtTgvHVB6TggKqoMjI%2FPsfDkZIzK16ZXZEEn6iTKm1zeTRfNRp0OkakDbsGkaB1U4Hor21nU9F3uUJb5Ks8JiXbXiYgUN2f%2BCJERsKdb2yI9N4N4%2BiP1Vp42w7vGc9XuKyEYByjWYhfyXXCGBwFJ3p0Dv%2BySuJlMdpFoTQaXWOuFvJr5Lv9%2BAZaHPYqZ1vgw77xcHsQnqBsj147IYMNXbIhJZDrIwf6Rs7ilTDe97rBBjqkAb5xUcIZrOQMmmoW2UXra%2BokBWJVWFuTF7dYkuhyWu7pCQ76T0XOyL5P5hwxtDAuJhWez%2Fm%2B%2BYAUrsL%2F%2Brus%2BHTjGEBZnT9B3tTGEvqkN3MgiYY%2FToQtvaaoWOkd%2Fd62qisnSN3NxyT%2B0dPIw2HBYTeZLh%2FVbMrb0wCuBA2skUvS2W6EWbd9fh9PfEFSRchSw8ReqRl6Va0rvxVX7kwpXQ91s9EO&X-Amz-Signature=c04e59f8935052ecff5091bbc70b10d436298fa4440bfd0b921c3ef9dc16e8cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6PZ65B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyrQR1eMbJFBIS7%2FDTIUd4mYXVBb7DZkuUedG2zXCJyAIhALJjx77mUaF2az4pXcFbxrCrXmhrkzN4%2F%2Fkgc%2FBj5fOUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWSYtJdWB0Hi1C0Eq3AOt%2FpXxtFdKI%2B8qgaafoYsxW%2B6pCxPAy0K2tESa7cSlBdqDCKNw%2B4AwJuHwrw53zzdTNXBdYif54cIzkuJ0p0G0PSu2GGlAIuRYibXkH5I4l0fjmEBqSQxcGrQ4iKzJV5G8sXmW8%2BnZyubJxtqiv39m9ySnke5WZKMzXBSRnEfA1gxWmRTaYaudbDiKPstJRvQEq4MTMbrsjzsR8BIUVjRBsSM4aEK%2BBSShgMNZQudUnFr0u8kzd7AZWUxHZfApSKh8YjMccz5FFXy88cNyNFuGqx6cLB%2FTmymF2cQCzOn5gHyCZuG%2FapNV7mpOg4Fx28EW4f%2FIKJWHE%2FDFmKy0LMbMgy8wEMXizyUART3GAYkwRf%2BtXP9BL3SLNPpX2G7tT%2Fq%2FJRB7BvjvmO5nXTzJzkfEYOtTgvHVB6TggKqoMjI%2FPsfDkZIzK16ZXZEEn6iTKm1zeTRfNRp0OkakDbsGkaB1U4Hor21nU9F3uUJb5Ks8JiXbXiYgUN2f%2BCJERsKdb2yI9N4N4%2BiP1Vp42w7vGc9XuKyEYByjWYhfyXXCGBwFJ3p0Dv%2BySuJlMdpFoTQaXWOuFvJr5Lv9%2BAZaHPYqZ1vgw77xcHsQnqBsj147IYMNXbIhJZDrIwf6Rs7ilTDe97rBBjqkAb5xUcIZrOQMmmoW2UXra%2BokBWJVWFuTF7dYkuhyWu7pCQ76T0XOyL5P5hwxtDAuJhWez%2Fm%2B%2BYAUrsL%2F%2Brus%2BHTjGEBZnT9B3tTGEvqkN3MgiYY%2FToQtvaaoWOkd%2Fd62qisnSN3NxyT%2B0dPIw2HBYTeZLh%2FVbMrb0wCuBA2skUvS2W6EWbd9fh9PfEFSRchSw8ReqRl6Va0rvxVX7kwpXQ91s9EO&X-Amz-Signature=d35d1e92b274b577adc868c8952f3091225238ae1b02b9e8f94c6109e17e983e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6PZ65B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyrQR1eMbJFBIS7%2FDTIUd4mYXVBb7DZkuUedG2zXCJyAIhALJjx77mUaF2az4pXcFbxrCrXmhrkzN4%2F%2Fkgc%2FBj5fOUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWSYtJdWB0Hi1C0Eq3AOt%2FpXxtFdKI%2B8qgaafoYsxW%2B6pCxPAy0K2tESa7cSlBdqDCKNw%2B4AwJuHwrw53zzdTNXBdYif54cIzkuJ0p0G0PSu2GGlAIuRYibXkH5I4l0fjmEBqSQxcGrQ4iKzJV5G8sXmW8%2BnZyubJxtqiv39m9ySnke5WZKMzXBSRnEfA1gxWmRTaYaudbDiKPstJRvQEq4MTMbrsjzsR8BIUVjRBsSM4aEK%2BBSShgMNZQudUnFr0u8kzd7AZWUxHZfApSKh8YjMccz5FFXy88cNyNFuGqx6cLB%2FTmymF2cQCzOn5gHyCZuG%2FapNV7mpOg4Fx28EW4f%2FIKJWHE%2FDFmKy0LMbMgy8wEMXizyUART3GAYkwRf%2BtXP9BL3SLNPpX2G7tT%2Fq%2FJRB7BvjvmO5nXTzJzkfEYOtTgvHVB6TggKqoMjI%2FPsfDkZIzK16ZXZEEn6iTKm1zeTRfNRp0OkakDbsGkaB1U4Hor21nU9F3uUJb5Ks8JiXbXiYgUN2f%2BCJERsKdb2yI9N4N4%2BiP1Vp42w7vGc9XuKyEYByjWYhfyXXCGBwFJ3p0Dv%2BySuJlMdpFoTQaXWOuFvJr5Lv9%2BAZaHPYqZ1vgw77xcHsQnqBsj147IYMNXbIhJZDrIwf6Rs7ilTDe97rBBjqkAb5xUcIZrOQMmmoW2UXra%2BokBWJVWFuTF7dYkuhyWu7pCQ76T0XOyL5P5hwxtDAuJhWez%2Fm%2B%2BYAUrsL%2F%2Brus%2BHTjGEBZnT9B3tTGEvqkN3MgiYY%2FToQtvaaoWOkd%2Fd62qisnSN3NxyT%2B0dPIw2HBYTeZLh%2FVbMrb0wCuBA2skUvS2W6EWbd9fh9PfEFSRchSw8ReqRl6Va0rvxVX7kwpXQ91s9EO&X-Amz-Signature=2e9749befb034220248ba0d04d5a3a6f2b734816325beef1b5cc15dcaaac740f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6PZ65B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyrQR1eMbJFBIS7%2FDTIUd4mYXVBb7DZkuUedG2zXCJyAIhALJjx77mUaF2az4pXcFbxrCrXmhrkzN4%2F%2Fkgc%2FBj5fOUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWSYtJdWB0Hi1C0Eq3AOt%2FpXxtFdKI%2B8qgaafoYsxW%2B6pCxPAy0K2tESa7cSlBdqDCKNw%2B4AwJuHwrw53zzdTNXBdYif54cIzkuJ0p0G0PSu2GGlAIuRYibXkH5I4l0fjmEBqSQxcGrQ4iKzJV5G8sXmW8%2BnZyubJxtqiv39m9ySnke5WZKMzXBSRnEfA1gxWmRTaYaudbDiKPstJRvQEq4MTMbrsjzsR8BIUVjRBsSM4aEK%2BBSShgMNZQudUnFr0u8kzd7AZWUxHZfApSKh8YjMccz5FFXy88cNyNFuGqx6cLB%2FTmymF2cQCzOn5gHyCZuG%2FapNV7mpOg4Fx28EW4f%2FIKJWHE%2FDFmKy0LMbMgy8wEMXizyUART3GAYkwRf%2BtXP9BL3SLNPpX2G7tT%2Fq%2FJRB7BvjvmO5nXTzJzkfEYOtTgvHVB6TggKqoMjI%2FPsfDkZIzK16ZXZEEn6iTKm1zeTRfNRp0OkakDbsGkaB1U4Hor21nU9F3uUJb5Ks8JiXbXiYgUN2f%2BCJERsKdb2yI9N4N4%2BiP1Vp42w7vGc9XuKyEYByjWYhfyXXCGBwFJ3p0Dv%2BySuJlMdpFoTQaXWOuFvJr5Lv9%2BAZaHPYqZ1vgw77xcHsQnqBsj147IYMNXbIhJZDrIwf6Rs7ilTDe97rBBjqkAb5xUcIZrOQMmmoW2UXra%2BokBWJVWFuTF7dYkuhyWu7pCQ76T0XOyL5P5hwxtDAuJhWez%2Fm%2B%2BYAUrsL%2F%2Brus%2BHTjGEBZnT9B3tTGEvqkN3MgiYY%2FToQtvaaoWOkd%2Fd62qisnSN3NxyT%2B0dPIw2HBYTeZLh%2FVbMrb0wCuBA2skUvS2W6EWbd9fh9PfEFSRchSw8ReqRl6Va0rvxVX7kwpXQ91s9EO&X-Amz-Signature=3f6706da49f4ddc1a98f4f048f6d5100dfc92094bf1be8b694533bc5aa3e1272&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6PZ65B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyrQR1eMbJFBIS7%2FDTIUd4mYXVBb7DZkuUedG2zXCJyAIhALJjx77mUaF2az4pXcFbxrCrXmhrkzN4%2F%2Fkgc%2FBj5fOUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWSYtJdWB0Hi1C0Eq3AOt%2FpXxtFdKI%2B8qgaafoYsxW%2B6pCxPAy0K2tESa7cSlBdqDCKNw%2B4AwJuHwrw53zzdTNXBdYif54cIzkuJ0p0G0PSu2GGlAIuRYibXkH5I4l0fjmEBqSQxcGrQ4iKzJV5G8sXmW8%2BnZyubJxtqiv39m9ySnke5WZKMzXBSRnEfA1gxWmRTaYaudbDiKPstJRvQEq4MTMbrsjzsR8BIUVjRBsSM4aEK%2BBSShgMNZQudUnFr0u8kzd7AZWUxHZfApSKh8YjMccz5FFXy88cNyNFuGqx6cLB%2FTmymF2cQCzOn5gHyCZuG%2FapNV7mpOg4Fx28EW4f%2FIKJWHE%2FDFmKy0LMbMgy8wEMXizyUART3GAYkwRf%2BtXP9BL3SLNPpX2G7tT%2Fq%2FJRB7BvjvmO5nXTzJzkfEYOtTgvHVB6TggKqoMjI%2FPsfDkZIzK16ZXZEEn6iTKm1zeTRfNRp0OkakDbsGkaB1U4Hor21nU9F3uUJb5Ks8JiXbXiYgUN2f%2BCJERsKdb2yI9N4N4%2BiP1Vp42w7vGc9XuKyEYByjWYhfyXXCGBwFJ3p0Dv%2BySuJlMdpFoTQaXWOuFvJr5Lv9%2BAZaHPYqZ1vgw77xcHsQnqBsj147IYMNXbIhJZDrIwf6Rs7ilTDe97rBBjqkAb5xUcIZrOQMmmoW2UXra%2BokBWJVWFuTF7dYkuhyWu7pCQ76T0XOyL5P5hwxtDAuJhWez%2Fm%2B%2BYAUrsL%2F%2Brus%2BHTjGEBZnT9B3tTGEvqkN3MgiYY%2FToQtvaaoWOkd%2Fd62qisnSN3NxyT%2B0dPIw2HBYTeZLh%2FVbMrb0wCuBA2skUvS2W6EWbd9fh9PfEFSRchSw8ReqRl6Va0rvxVX7kwpXQ91s9EO&X-Amz-Signature=c8a01bee46f0d33d5bf0a69750939196209045f637aff356e6e09d513f0261bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6PZ65B%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyrQR1eMbJFBIS7%2FDTIUd4mYXVBb7DZkuUedG2zXCJyAIhALJjx77mUaF2az4pXcFbxrCrXmhrkzN4%2F%2Fkgc%2FBj5fOUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWSYtJdWB0Hi1C0Eq3AOt%2FpXxtFdKI%2B8qgaafoYsxW%2B6pCxPAy0K2tESa7cSlBdqDCKNw%2B4AwJuHwrw53zzdTNXBdYif54cIzkuJ0p0G0PSu2GGlAIuRYibXkH5I4l0fjmEBqSQxcGrQ4iKzJV5G8sXmW8%2BnZyubJxtqiv39m9ySnke5WZKMzXBSRnEfA1gxWmRTaYaudbDiKPstJRvQEq4MTMbrsjzsR8BIUVjRBsSM4aEK%2BBSShgMNZQudUnFr0u8kzd7AZWUxHZfApSKh8YjMccz5FFXy88cNyNFuGqx6cLB%2FTmymF2cQCzOn5gHyCZuG%2FapNV7mpOg4Fx28EW4f%2FIKJWHE%2FDFmKy0LMbMgy8wEMXizyUART3GAYkwRf%2BtXP9BL3SLNPpX2G7tT%2Fq%2FJRB7BvjvmO5nXTzJzkfEYOtTgvHVB6TggKqoMjI%2FPsfDkZIzK16ZXZEEn6iTKm1zeTRfNRp0OkakDbsGkaB1U4Hor21nU9F3uUJb5Ks8JiXbXiYgUN2f%2BCJERsKdb2yI9N4N4%2BiP1Vp42w7vGc9XuKyEYByjWYhfyXXCGBwFJ3p0Dv%2BySuJlMdpFoTQaXWOuFvJr5Lv9%2BAZaHPYqZ1vgw77xcHsQnqBsj147IYMNXbIhJZDrIwf6Rs7ilTDe97rBBjqkAb5xUcIZrOQMmmoW2UXra%2BokBWJVWFuTF7dYkuhyWu7pCQ76T0XOyL5P5hwxtDAuJhWez%2Fm%2B%2BYAUrsL%2F%2Brus%2BHTjGEBZnT9B3tTGEvqkN3MgiYY%2FToQtvaaoWOkd%2Fd62qisnSN3NxyT%2B0dPIw2HBYTeZLh%2FVbMrb0wCuBA2skUvS2W6EWbd9fh9PfEFSRchSw8ReqRl6Va0rvxVX7kwpXQ91s9EO&X-Amz-Signature=dfa69da856ca983ca1f2bfa30651901a0c7f67fad52ac978a3ca32c50fc79e08&X-Amz-SignedHeaders=host&x-id=GetObject)
